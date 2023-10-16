var Ny=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var ZM=Ny((bL,nl)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const Ci=function(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof self<"u")return self;if(typeof window<"u")return window;try{return new Function("return this")()}catch{return{}}}();Ci.trustedTypes===void 0&&(Ci.trustedTypes={createPolicy:(t,e)=>e});const vm={configurable:!1,enumerable:!1,writable:!1};Ci.FAST===void 0&&Reflect.defineProperty(Ci,"FAST",Object.assign({value:Object.create(null)},vm));const Ar=Ci.FAST;if(Ar.getById===void 0){const t=Object.create(null);Reflect.defineProperty(Ar,"getById",Object.assign({value(e,s){let i=t[e];return i===void 0&&(i=s?t[e]=s():null),i}},vm))}const On=Object.freeze([]);function bm(){const t=new WeakMap;return function(e){let s=t.get(e);if(s===void 0){let i=Reflect.getPrototypeOf(e);for(;s===void 0&&i!==null;)s=t.get(i),i=Reflect.getPrototypeOf(i);s=s===void 0?[]:s.slice(0),t.set(e,s)}return s}}const Uc=Ci.FAST.getById(1,()=>{const t=[],e=[];function s(){if(e.length)throw e.shift()}function i(r){try{r.call()}catch(a){e.push(a),setTimeout(s,0)}}function n(){let a=0;for(;a<t.length;)if(i(t[a]),a++,a>1024){for(let l=0,c=t.length-a;l<c;l++)t[l]=t[l+a];t.length-=a,a=0}t.length=0}function o(r){t.length<1&&Ci.requestAnimationFrame(n),t.push(r)}return Object.freeze({enqueue:o,process:n})}),ym=Ci.trustedTypes.createPolicy("fast-html",{createHTML:t=>t});let Yc=ym;const yr=`fast-${Math.random().toString(36).substring(2,8)}`,xm=`${yr}{`,gu=`}${yr}`,de=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(t){if(Yc!==ym)throw new Error("The HTML policy can only be set once.");Yc=t},createHTML(t){return Yc.createHTML(t)},isMarker(t){return t&&t.nodeType===8&&t.data.startsWith(yr)},extractDirectiveIndexFromMarker(t){return parseInt(t.data.replace(`${yr}:`,""))},createInterpolationPlaceholder(t){return`${xm}${t}${gu}`},createCustomAttributePlaceholder(t,e){return`${t}="${this.createInterpolationPlaceholder(e)}"`},createBlockPlaceholder(t){return`<!--${yr}:${t}-->`},queueUpdate:Uc.enqueue,processUpdates:Uc.process,nextUpdate(){return new Promise(Uc.enqueue)},setAttribute(t,e,s){s==null?t.removeAttribute(e):t.setAttribute(e,s)},setBooleanAttribute(t,e,s){s?t.setAttribute(e,""):t.removeAttribute(e)},removeChildNodes(t){for(let e=t.firstChild;e!==null;e=t.firstChild)t.removeChild(e)},createTemplateWalker(t){return document.createTreeWalker(t,133,null,!1)}});class ol{constructor(e,s){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=s}has(e){return this.spillover===void 0?this.sub1===e||this.sub2===e:this.spillover.indexOf(e)!==-1}subscribe(e){const s=this.spillover;if(s===void 0){if(this.has(e))return;if(this.sub1===void 0){this.sub1=e;return}if(this.sub2===void 0){this.sub2=e;return}this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else s.indexOf(e)===-1&&s.push(e)}unsubscribe(e){const s=this.spillover;if(s===void 0)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const i=s.indexOf(e);i!==-1&&s.splice(i,1)}}notify(e){const s=this.spillover,i=this.source;if(s===void 0){const n=this.sub1,o=this.sub2;n!==void 0&&n.handleChange(i,e),o!==void 0&&o.handleChange(i,e)}else for(let n=0,o=s.length;n<o;++n)s[n].handleChange(i,e)}}class wm{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var s;const i=this.subscribers[e];i!==void 0&&i.notify(e),(s=this.sourceSubscribers)===null||s===void 0||s.notify(e)}subscribe(e,s){var i;if(s){let n=this.subscribers[s];n===void 0&&(this.subscribers[s]=n=new ol(this.source)),n.subscribe(e)}else this.sourceSubscribers=(i=this.sourceSubscribers)!==null&&i!==void 0?i:new ol(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,s){var i;if(s){const n=this.subscribers[s];n!==void 0&&n.unsubscribe(e)}else(i=this.sourceSubscribers)===null||i===void 0||i.unsubscribe(e)}}const le=Ar.getById(2,()=>{const t=/(:|&&|\|\||if)/,e=new WeakMap,s=de.queueUpdate;let i,n=c=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function o(c){let d=c.$fastController||e.get(c);return d===void 0&&(Array.isArray(c)?d=n(c):e.set(c,d=new wm(c))),d}const r=bm();class a{constructor(d){this.name=d,this.field=`_${d}`,this.callback=`${d}Changed`}getValue(d){return i!==void 0&&i.watch(d,this.name),d[this.field]}setValue(d,u){const f=this.field,b=d[f];if(b!==u){d[f]=u;const w=d[this.callback];typeof w=="function"&&w.call(d,b,u),o(d).notify(this.name)}}}class l extends ol{constructor(d,u,f=!1){super(d,u),this.binding=d,this.isVolatileBinding=f,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(d,u){this.needsRefresh&&this.last!==null&&this.disconnect();const f=i;i=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const b=this.binding(d,u);return i=f,b}disconnect(){if(this.last!==null){let d=this.first;for(;d!==void 0;)d.notifier.unsubscribe(this,d.propertyName),d=d.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(d,u){const f=this.last,b=o(d),w=f===null?this.first:{};if(w.propertySource=d,w.propertyName=u,w.notifier=b,b.subscribe(this,u),f!==null){if(!this.needsRefresh){let x;i=void 0,x=f.propertySource[f.propertyName],i=this,d===x&&(this.needsRefresh=!0)}f.next=w}this.last=w}handleChange(){this.needsQueue&&(this.needsQueue=!1,s(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let d=this.first;return{next:()=>{const u=d;return u===void 0?{value:void 0,done:!0}:(d=d.next,{value:u,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(c){n=c},getNotifier:o,track(c,d){i!==void 0&&i.watch(c,d)},trackVolatile(){i!==void 0&&(i.needsRefresh=!0)},notify(c,d){o(c).notify(d)},defineProperty(c,d){typeof d=="string"&&(d=new a(d)),r(c).push(d),Reflect.defineProperty(c,d.name,{enumerable:!0,get:function(){return d.getValue(this)},set:function(u){d.setValue(this,u)}})},getAccessors:r,binding(c,d,u=this.isVolatileBinding(c)){return new l(c,d,u)},isVolatileBinding(c){return t.test(c.toString())}})});function k(t,e){le.defineProperty(t,e)}function zy(t,e,s){return Object.assign({},s,{get:function(){return le.trackVolatile(),s.get.apply(this)}})}const ef=Ar.getById(3,()=>{let t=null;return{get(){return t},set(e){t=e}}});class Pr{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return ef.get()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){ef.set(e)}}le.defineProperty(Pr.prototype,"index");le.defineProperty(Pr.prototype,"length");const xr=Object.seal(new Pr);class Fl{constructor(){this.targetIndex=0}}class $m extends Fl{constructor(){super(...arguments),this.createPlaceholder=de.createInterpolationPlaceholder}}class vu extends Fl{constructor(e,s,i){super(),this.name=e,this.behavior=s,this.options=i}createPlaceholder(e){return de.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function By(t,e){this.source=t,this.context=e,this.bindingObserver===null&&(this.bindingObserver=le.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(t,e))}function jy(t,e){this.source=t,this.context=e,this.target.addEventListener(this.targetName,this)}function Uy(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function Yy(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const t=this.target.$fastView;t!==void 0&&t.isComposed&&(t.unbind(),t.needsBindOnly=!0)}function Wy(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function qy(t){de.setAttribute(this.target,this.targetName,t)}function Gy(t){de.setBooleanAttribute(this.target,this.targetName,t)}function Zy(t){if(t==null&&(t=""),t.create){this.target.textContent="";let e=this.target.$fastView;e===void 0?e=t.create():this.target.$fastTemplate!==t&&(e.isComposed&&(e.remove(),e.unbind()),e=t.create()),e.isComposed?e.needsBindOnly&&(e.needsBindOnly=!1,e.bind(this.source,this.context)):(e.isComposed=!0,e.bind(this.source,this.context),e.insertBefore(this.target),this.target.$fastView=e,this.target.$fastTemplate=t)}else{const e=this.target.$fastView;e!==void 0&&e.isComposed&&(e.isComposed=!1,e.remove(),e.needsBindOnly?e.needsBindOnly=!1:e.unbind()),this.target.textContent=t}}function Xy(t){this.target[this.targetName]=t}function Qy(t){const e=this.classVersions||Object.create(null),s=this.target;let i=this.version||0;if(t!=null&&t.length){const n=t.split(/\s+/);for(let o=0,r=n.length;o<r;++o){const a=n[o];a!==""&&(e[a]=i,s.classList.add(a))}}if(this.classVersions=e,this.version=i+1,i!==0){i-=1;for(const n in e)e[n]===i&&s.classList.remove(n)}}class bu extends $m{constructor(e){super(),this.binding=e,this.bind=By,this.unbind=Uy,this.updateTarget=qy,this.isBindingVolatile=le.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,e!==void 0)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=Xy,this.cleanedTargetName==="innerHTML"){const s=this.binding;this.binding=(i,n)=>de.createHTML(s(i,n))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=Gy;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=jy,this.unbind=Wy;break;default:this.cleanedTargetName=e,e==="class"&&(this.updateTarget=Qy);break}}targetAtContent(){this.updateTarget=Zy,this.unbind=Yy}createBehavior(e){return new Jy(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class Jy{constructor(e,s,i,n,o,r,a){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=s,this.isBindingVolatile=i,this.bind=n,this.unbind=o,this.updateTarget=r,this.targetName=a}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){Pr.setEvent(e);const s=this.binding(this.source,this.context);Pr.setEvent(null),s!==!0&&e.preventDefault()}}let Wc=null;class yu{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){Wc=this}static borrow(e){const s=Wc||new yu;return s.directives=e,s.reset(),Wc=null,s}}function Ky(t){if(t.length===1)return t[0];let e;const s=t.length,i=t.map(r=>typeof r=="string"?()=>r:(e=r.targetName||e,r.binding)),n=(r,a)=>{let l="";for(let c=0;c<s;++c)l+=i[c](r,a);return l},o=new bu(n);return o.targetName=e,o}const e0=gu.length;function _m(t,e){const s=e.split(xm);if(s.length===1)return null;const i=[];for(let n=0,o=s.length;n<o;++n){const r=s[n],a=r.indexOf(gu);let l;if(a===-1)l=r;else{const c=parseInt(r.substring(0,a));i.push(t.directives[c]),l=r.substring(a+e0)}l!==""&&i.push(l)}return i}function tf(t,e,s=!1){const i=e.attributes;for(let n=0,o=i.length;n<o;++n){const r=i[n],a=r.value,l=_m(t,a);let c=null;l===null?s&&(c=new bu(()=>a),c.targetName=r.name):c=Ky(l),c!==null&&(e.removeAttributeNode(r),n--,o--,t.addFactory(c))}}function t0(t,e,s){const i=_m(t,e.textContent);if(i!==null){let n=e;for(let o=0,r=i.length;o<r;++o){const a=i[o],l=o===0?e:n.parentNode.insertBefore(document.createTextNode(""),n.nextSibling);typeof a=="string"?l.textContent=a:(l.textContent=" ",t.captureContentBinding(a)),n=l,t.targetIndex++,l!==e&&s.nextNode()}t.targetIndex--}}function s0(t,e){const s=t.content;document.adoptNode(s);const i=yu.borrow(e);tf(i,t,!0);const n=i.behaviorFactories;i.reset();const o=de.createTemplateWalker(s);let r;for(;r=o.nextNode();)switch(i.targetIndex++,r.nodeType){case 1:tf(i,r);break;case 3:t0(i,r,o);break;case 8:de.isMarker(r)&&i.addFactory(e[de.extractDirectiveIndexFromMarker(r)])}let a=0;(de.isMarker(s.firstChild)||s.childNodes.length===1&&e.length)&&(s.insertBefore(document.createComment(""),s.firstChild),a=-1);const l=i.behaviorFactories;return i.release(),{fragment:s,viewBehaviorFactories:l,hostBehaviorFactories:n,targetOffset:a}}const qc=document.createRange();class km{constructor(e,s){this.fragment=e,this.behaviors=s,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const s=this.lastChild;if(e.previousSibling===s)return;const i=e.parentNode;let n=this.firstChild,o;for(;n!==s;)o=n.nextSibling,i.insertBefore(n,e),n=o;i.insertBefore(s,e)}}remove(){const e=this.fragment,s=this.lastChild;let i=this.firstChild,n;for(;i!==s;)n=i.nextSibling,e.appendChild(i),i=n;e.appendChild(s)}dispose(){const e=this.firstChild.parentNode,s=this.lastChild;let i=this.firstChild,n;for(;i!==s;)n=i.nextSibling,e.removeChild(i),i=n;e.removeChild(s);const o=this.behaviors,r=this.source;for(let a=0,l=o.length;a<l;++a)o[a].unbind(r)}bind(e,s){const i=this.behaviors;if(this.source!==e)if(this.source!==null){const n=this.source;this.source=e,this.context=s;for(let o=0,r=i.length;o<r;++o){const a=i[o];a.unbind(n),a.bind(e,s)}}else{this.source=e,this.context=s;for(let n=0,o=i.length;n<o;++n)i[n].bind(e,s)}}unbind(){if(this.source===null)return;const e=this.behaviors,s=this.source;for(let i=0,n=e.length;i<n;++i)e[i].unbind(s);this.source=null}static disposeContiguousBatch(e){if(e.length!==0){qc.setStartBefore(e[0].firstChild),qc.setEndAfter(e[e.length-1].lastChild),qc.deleteContents();for(let s=0,i=e.length;s<i;++s){const n=e[s],o=n.behaviors,r=n.source;for(let a=0,l=o.length;a<l;++a)o[a].unbind(r)}}}}class sf{constructor(e,s){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=s}create(e){if(this.fragment===null){let c;const d=this.html;if(typeof d=="string"){c=document.createElement("template"),c.innerHTML=de.createHTML(d);const f=c.content.firstElementChild;f!==null&&f.tagName==="TEMPLATE"&&(c=f)}else c=d;const u=s0(c,this.directives);this.fragment=u.fragment,this.viewBehaviorFactories=u.viewBehaviorFactories,this.hostBehaviorFactories=u.hostBehaviorFactories,this.targetOffset=u.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const s=this.fragment.cloneNode(!0),i=this.viewBehaviorFactories,n=new Array(this.behaviorCount),o=de.createTemplateWalker(s);let r=0,a=this.targetOffset,l=o.nextNode();for(let c=i.length;r<c;++r){const d=i[r],u=d.targetIndex;for(;l!==null;)if(a===u){n[r]=d.createBehavior(l);break}else l=o.nextNode(),a++}if(this.hasHostBehaviors){const c=this.hostBehaviorFactories;for(let d=0,u=c.length;d<u;++d,++r)n[r]=c[d].createBehavior(e)}return new km(s,n)}render(e,s,i){typeof s=="string"&&(s=document.getElementById(s)),i===void 0&&(i=s);const n=this.create(i);return n.bind(e,xr),n.appendTo(s),n}}const i0=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function M(t,...e){const s=[];let i="";for(let n=0,o=t.length-1;n<o;++n){const r=t[n];let a=e[n];if(i+=r,a instanceof sf){const l=a;a=()=>l}if(typeof a=="function"&&(a=new bu(a)),a instanceof $m){const l=i0.exec(r);l!==null&&(a.targetName=l[2])}a instanceof Fl?(i+=a.createPlaceholder(s.length),s.push(a)):i+=a}return i+=t[t.length-1],new sf(i,s)}class Xt{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=this.behaviors===null?e:this.behaviors.concat(e),this}}Xt.create=(()=>{if(de.supportsAdoptedStyleSheets){const t=new Map;return e=>new n0(e,t)}return t=>new a0(t)})();function xu(t){return t.map(e=>e instanceof Xt?xu(e.styles):[e]).reduce((e,s)=>e.concat(s),[])}function Sm(t){return t.map(e=>e instanceof Xt?e.behaviors:null).reduce((e,s)=>s===null?e:(e===null&&(e=[]),e.concat(s)),null)}let Cm=(t,e)=>{t.adoptedStyleSheets=[...t.adoptedStyleSheets,...e]},Im=(t,e)=>{t.adoptedStyleSheets=t.adoptedStyleSheets.filter(s=>e.indexOf(s)===-1)};if(de.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),Cm=(t,e)=>{t.adoptedStyleSheets.push(...e)},Im=(t,e)=>{for(const s of e){const i=t.adoptedStyleSheets.indexOf(s);i!==-1&&t.adoptedStyleSheets.splice(i,1)}}}catch{}class n0 extends Xt{constructor(e,s){super(),this.styles=e,this.styleSheetCache=s,this._styleSheets=void 0,this.behaviors=Sm(e)}get styleSheets(){if(this._styleSheets===void 0){const e=this.styles,s=this.styleSheetCache;this._styleSheets=xu(e).map(i=>{if(i instanceof CSSStyleSheet)return i;let n=s.get(i);return n===void 0&&(n=new CSSStyleSheet,n.replaceSync(i),s.set(i,n)),n})}return this._styleSheets}addStylesTo(e){Cm(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){Im(e,this.styleSheets),super.removeStylesFrom(e)}}let o0=0;function r0(){return`fast-style-class-${++o0}`}class a0 extends Xt{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=Sm(e),this.styleSheets=xu(e),this.styleClass=r0()}addStylesTo(e){const s=this.styleSheets,i=this.styleClass;e=this.normalizeTarget(e);for(let n=0;n<s.length;n++){const o=document.createElement("style");o.innerHTML=s[n],o.className=i,e.append(o)}super.addStylesTo(e)}removeStylesFrom(e){e=this.normalizeTarget(e);const s=e.querySelectorAll(`.${this.styleClass}`);for(let i=0,n=s.length;i<n;++i)e.removeChild(s[i]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const rl=Object.freeze({locate:bm()}),ia={toView(t){return t?"true":"false"},fromView(t){return!(t==null||t==="false"||t===!1||t===0)}},G={toView(t){if(t==null)return null;const e=t*1;return isNaN(e)?null:e.toString()},fromView(t){if(t==null)return null;const e=t*1;return isNaN(e)?null:e}};class al{constructor(e,s,i=s.toLowerCase(),n="reflect",o){this.guards=new Set,this.Owner=e,this.name=s,this.attribute=i,this.mode=n,this.converter=o,this.fieldName=`_${s}`,this.callbackName=`${s}Changed`,this.hasCallback=this.callbackName in e.prototype,n==="boolean"&&o===void 0&&(this.converter=ia)}setValue(e,s){const i=e[this.fieldName],n=this.converter;n!==void 0&&(s=n.fromView(s)),i!==s&&(e[this.fieldName]=s,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](i,s),e.$fastController.notify(this.name))}getValue(e){return le.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,s){this.guards.has(e)||(this.guards.add(e),this.setValue(e,s),this.guards.delete(e))}tryReflectToAttribute(e){const s=this.mode,i=this.guards;i.has(e)||s==="fromView"||de.queueUpdate(()=>{i.add(e);const n=e[this.fieldName];switch(s){case"reflect":const o=this.converter;de.setAttribute(e,this.attribute,o!==void 0?o.toView(n):n);break;case"boolean":de.setBooleanAttribute(e,this.attribute,n);break}i.delete(e)})}static collect(e,...s){const i=[];s.push(rl.locate(e));for(let n=0,o=s.length;n<o;++n){const r=s[n];if(r!==void 0)for(let a=0,l=r.length;a<l;++a){const c=r[a];typeof c=="string"?i.push(new al(e,c)):i.push(new al(e,c.property,c.attribute,c.mode,c.converter))}}return i}}function p(t,e){let s;function i(n,o){arguments.length>1&&(s.property=o),rl.locate(n.constructor).push(s)}if(arguments.length>1){s={},i(t,e);return}return s=t===void 0?{}:t,i}const nf={mode:"open"},of={},Fd=Ar.getById(4,()=>{const t=new Map;return Object.freeze({register(e){return t.has(e.type)?!1:(t.set(e.type,e),!0)},getByType(e){return t.get(e)}})});class Dl{constructor(e,s=e.definition){typeof s=="string"&&(s={name:s}),this.type=e,this.name=s.name,this.template=s.template;const i=al.collect(e,s.attributes),n=new Array(i.length),o={},r={};for(let a=0,l=i.length;a<l;++a){const c=i[a];n[a]=c.attribute,o[c.name]=c,r[c.attribute]=c}this.attributes=i,this.observedAttributes=n,this.propertyLookup=o,this.attributeLookup=r,this.shadowOptions=s.shadowOptions===void 0?nf:s.shadowOptions===null?void 0:Object.assign(Object.assign({},nf),s.shadowOptions),this.elementOptions=s.elementOptions===void 0?of:Object.assign(Object.assign({},of),s.elementOptions),this.styles=s.styles===void 0?void 0:Array.isArray(s.styles)?Xt.create(s.styles):s.styles instanceof Xt?s.styles:Xt.create([s.styles])}get isDefined(){return!!Fd.getByType(this.type)}define(e=customElements){const s=this.type;if(Fd.register(this)){const i=this.attributes,n=s.prototype;for(let o=0,r=i.length;o<r;++o)le.defineProperty(n,i[o]);Reflect.defineProperty(s,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,s,this.elementOptions),this}}Dl.forType=Fd.getByType;const Tm=new WeakMap,l0={bubbles:!0,composed:!0,cancelable:!0};function Gc(t){return t.shadowRoot||Tm.get(t)||null}class wu extends wm{constructor(e,s){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=s;const i=s.shadowOptions;if(i!==void 0){const o=e.attachShadow(i);i.mode==="closed"&&Tm.set(e,o)}const n=le.getAccessors(e);if(n.length>0){const o=this.boundObservables=Object.create(null);for(let r=0,a=n.length;r<a;++r){const l=n[r].name,c=e[l];c!==void 0&&(delete e[l],o[l]=c)}}}get isConnected(){return le.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,le.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=e,!this.needsInitialization&&e!==null&&this.addStyles(e))}addStyles(e){const s=Gc(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)s.append(e);else if(!e.isAttachedTo(s)){const i=e.behaviors;e.addStylesTo(s),i!==null&&this.addBehaviors(i)}}removeStyles(e){const s=Gc(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)s.removeChild(e);else if(e.isAttachedTo(s)){const i=e.behaviors;e.removeStylesFrom(s),i!==null&&this.removeBehaviors(i)}}addBehaviors(e){const s=this.behaviors||(this.behaviors=new Map),i=e.length,n=[];for(let o=0;o<i;++o){const r=e[o];s.has(r)?s.set(r,s.get(r)+1):(s.set(r,1),n.push(r))}if(this._isConnected){const o=this.element;for(let r=0;r<n.length;++r)n[r].bind(o,xr)}}removeBehaviors(e,s=!1){const i=this.behaviors;if(i===null)return;const n=e.length,o=[];for(let r=0;r<n;++r){const a=e[r];if(i.has(a)){const l=i.get(a)-1;l===0||s?i.delete(a)&&o.push(a):i.set(a,l)}}if(this._isConnected){const r=this.element;for(let a=0;a<o.length;++a)o[a].unbind(r)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(e,xr);const s=this.behaviors;if(s!==null)for(const[i]of s)i.bind(e,xr);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;e!==null&&e.unbind();const s=this.behaviors;if(s!==null){const i=this.element;for(const[n]of s)n.unbind(i)}}onAttributeChangedCallback(e,s,i){const n=this.definition.attributeLookup[e];n!==void 0&&n.onAttributeChangedCallback(this.element,i)}emit(e,s,i){return this._isConnected?this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:s},l0),i))):!1}finishInitialization(){const e=this.element,s=this.boundObservables;if(s!==null){const n=Object.keys(s);for(let o=0,r=n.length;o<r;++o){const a=n[o];e[a]=s[a]}this.boundObservables=null}const i=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():i.template&&(this._template=i.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():i.styles&&(this._styles=i.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const s=this.element,i=Gc(s)||s;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||de.removeChildNodes(i),e&&(this.view=e.render(s,i,s))}static forCustomElement(e){const s=e.$fastController;if(s!==void 0)return s;const i=Dl.forType(e.constructor);if(i===void 0)throw new Error("Missing FASTElement definition.");return e.$fastController=new wu(e,i)}}function rf(t){return class extends t{constructor(){super(),wu.forCustomElement(this)}$emit(e,s,i){return this.$fastController.emit(e,s,i)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,s,i){this.$fastController.onAttributeChangedCallback(e,s,i)}}}const Rl=Object.assign(rf(HTMLElement),{from(t){return rf(t)},define(t,e){return new Dl(t,e).define().type}});class $u{createCSS(){return""}createBehavior(){}}function Fm(t,e){const s=[];let i="";const n=[];for(let o=0,r=t.length-1;o<r;++o){i+=t[o];let a=e[o];if(a instanceof $u){const l=a.createBehavior();a=a.createCSS(),l&&n.push(l)}a instanceof Xt||a instanceof CSSStyleSheet?(i.trim()!==""&&(s.push(i),i=""),s.push(a)):i+=a}return i+=t[t.length-1],i.trim()!==""&&s.push(i),{styles:s,behaviors:n}}function D(t,...e){const{styles:s,behaviors:i}=Fm(t,e),n=Xt.create(s);return i.length&&n.withBehaviors(...i),n}class c0 extends $u{constructor(e,s){super(),this.behaviors=s,this.css="";const i=e.reduce((n,o)=>(typeof o=="string"?this.css+=o:n.push(o),n),[]);i.length&&(this.styles=Xt.create(i))}createBehavior(){return this}createCSS(){return this.css}bind(e){this.styles&&e.$fastController.addStyles(this.styles),this.behaviors.length&&e.$fastController.addBehaviors(this.behaviors)}unbind(e){this.styles&&e.$fastController.removeStyles(this.styles),this.behaviors.length&&e.$fastController.removeBehaviors(this.behaviors)}}function ms(t,...e){const{styles:s,behaviors:i}=Fm(t,e);return new c0(s,i)}function zs(t,e,s){return{index:t,removed:e,addedCount:s}}const Dm=0,Rm=1,Dd=2,Rd=3;function d0(t,e,s,i,n,o){const r=o-n+1,a=s-e+1,l=new Array(r);let c,d;for(let u=0;u<r;++u)l[u]=new Array(a),l[u][0]=u;for(let u=0;u<a;++u)l[0][u]=u;for(let u=1;u<r;++u)for(let f=1;f<a;++f)t[e+f-1]===i[n+u-1]?l[u][f]=l[u-1][f-1]:(c=l[u-1][f]+1,d=l[u][f-1]+1,l[u][f]=c<d?c:d);return l}function u0(t){let e=t.length-1,s=t[0].length-1,i=t[e][s];const n=[];for(;e>0||s>0;){if(e===0){n.push(Dd),s--;continue}if(s===0){n.push(Rd),e--;continue}const o=t[e-1][s-1],r=t[e-1][s],a=t[e][s-1];let l;r<a?l=r<o?r:o:l=a<o?a:o,l===o?(o===i?n.push(Dm):(n.push(Rm),i=o),e--,s--):l===r?(n.push(Rd),e--,i=r):(n.push(Dd),s--,i=a)}return n.reverse(),n}function h0(t,e,s){for(let i=0;i<s;++i)if(t[i]!==e[i])return i;return s}function f0(t,e,s){let i=t.length,n=e.length,o=0;for(;o<s&&t[--i]===e[--n];)o++;return o}function p0(t,e,s,i){return e<s||i<t?-1:e===s||i===t?0:t<s?e<i?e-s:i-s:i<e?i-t:e-t}function Em(t,e,s,i,n,o){let r=0,a=0;const l=Math.min(s-e,o-n);if(e===0&&n===0&&(r=h0(t,i,l)),s===t.length&&o===i.length&&(a=f0(t,i,l-r)),e+=r,n+=r,s-=a,o-=a,s-e===0&&o-n===0)return On;if(e===s){const w=zs(e,[],0);for(;n<o;)w.removed.push(i[n++]);return[w]}else if(n===o)return[zs(e,[],s-e)];const c=u0(d0(t,e,s,i,n,o)),d=[];let u,f=e,b=n;for(let w=0;w<c.length;++w)switch(c[w]){case Dm:u!==void 0&&(d.push(u),u=void 0),f++,b++;break;case Rm:u===void 0&&(u=zs(f,[],0)),u.addedCount++,f++,u.removed.push(i[b]),b++;break;case Dd:u===void 0&&(u=zs(f,[],0)),u.addedCount++,f++;break;case Rd:u===void 0&&(u=zs(f,[],0)),u.removed.push(i[b]),b++;break}return u!==void 0&&d.push(u),d}const af=Array.prototype.push;function m0(t,e,s,i){const n=zs(e,s,i);let o=!1,r=0;for(let a=0;a<t.length;a++){const l=t[a];if(l.index+=r,o)continue;const c=p0(n.index,n.index+n.removed.length,l.index,l.index+l.addedCount);if(c>=0){t.splice(a,1),a--,r-=l.addedCount-l.removed.length,n.addedCount+=l.addedCount-c;const d=n.removed.length+l.removed.length-c;if(!n.addedCount&&!d)o=!0;else{let u=l.removed;if(n.index<l.index){const f=n.removed.slice(0,l.index-n.index);af.apply(f,u),u=f}if(n.index+n.removed.length>l.index+l.addedCount){const f=n.removed.slice(l.index+l.addedCount-n.index);af.apply(u,f)}n.removed=u,l.index<n.index&&(n.index=l.index)}}else if(n.index<l.index){o=!0,t.splice(a,0,n),a++;const d=n.addedCount-n.removed.length;l.index+=d,r+=d}}o||t.push(n)}function g0(t){const e=[];for(let s=0,i=t.length;s<i;s++){const n=t[s];m0(e,n.index,n.removed,n.addedCount)}return e}function v0(t,e){let s=[];const i=g0(e);for(let n=0,o=i.length;n<o;++n){const r=i[n];if(r.addedCount===1&&r.removed.length===1){r.removed[0]!==t[r.index]&&s.push(r);continue}s=s.concat(Em(t,r.index,r.index+r.addedCount,r.removed,0,r.removed.length))}return s}let lf=!1;function Zc(t,e){let s=t.index;const i=e.length;return s>i?s=i-t.addedCount:s<0&&(s=i+t.removed.length+s-t.addedCount),s<0&&(s=0),t.index=s,t}class b0 extends ol{constructor(e){super(e),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(e,"$fastController",{value:this,enumerable:!1})}subscribe(e){this.flush(),super.subscribe(e)}addSplice(e){this.splices===void 0?this.splices=[e]:this.splices.push(e),this.needsQueue&&(this.needsQueue=!1,de.queueUpdate(this))}reset(e){this.oldCollection=e,this.needsQueue&&(this.needsQueue=!1,de.queueUpdate(this))}flush(){const e=this.splices,s=this.oldCollection;if(e===void 0&&s===void 0)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const i=s===void 0?v0(this.source,e):Em(this.source,0,this.source.length,s,0,s.length);this.notify(i)}}function y0(){if(lf)return;lf=!0,le.setArrayObserverFactory(l=>new b0(l));const t=Array.prototype;if(t.$fastPatch)return;Reflect.defineProperty(t,"$fastPatch",{value:1,enumerable:!1});const e=t.pop,s=t.push,i=t.reverse,n=t.shift,o=t.sort,r=t.splice,a=t.unshift;t.pop=function(){const l=this.length>0,c=e.apply(this,arguments),d=this.$fastController;return d!==void 0&&l&&d.addSplice(zs(this.length,[c],0)),c},t.push=function(){const l=s.apply(this,arguments),c=this.$fastController;return c!==void 0&&c.addSplice(Zc(zs(this.length-arguments.length,[],arguments.length),this)),l},t.reverse=function(){let l;const c=this.$fastController;c!==void 0&&(c.flush(),l=this.slice());const d=i.apply(this,arguments);return c!==void 0&&c.reset(l),d},t.shift=function(){const l=this.length>0,c=n.apply(this,arguments),d=this.$fastController;return d!==void 0&&l&&d.addSplice(zs(0,[c],0)),c},t.sort=function(){let l;const c=this.$fastController;c!==void 0&&(c.flush(),l=this.slice());const d=o.apply(this,arguments);return c!==void 0&&c.reset(l),d},t.splice=function(){const l=r.apply(this,arguments),c=this.$fastController;return c!==void 0&&c.addSplice(Zc(zs(+arguments[0],l,arguments.length>2?arguments.length-2:0),this)),l},t.unshift=function(){const l=a.apply(this,arguments),c=this.$fastController;return c!==void 0&&c.addSplice(Zc(zs(0,[],arguments.length),this)),l}}class x0{constructor(e,s){this.target=e,this.propertyName=s}bind(e){e[this.propertyName]=this.target}unbind(){}}function Re(t){return new vu("fast-ref",x0,t)}const Om=t=>typeof t=="function",w0=()=>null;function cf(t){return t===void 0?w0:Om(t)?t:()=>t}function ut(t,e,s){const i=Om(t)?t:()=>t,n=cf(e),o=cf(s);return(r,a)=>i(r,a)?n(r,a):o(r,a)}const df=Object.freeze({positioning:!1,recycle:!0});function $0(t,e,s,i){t.bind(e[s],i)}function _0(t,e,s,i){const n=Object.create(i);n.index=s,n.length=e.length,t.bind(e[s],n)}class k0{constructor(e,s,i,n,o,r){this.location=e,this.itemsBinding=s,this.templateBinding=n,this.options=r,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=$0,this.itemsBindingObserver=le.binding(s,this,i),this.templateBindingObserver=le.binding(n,this,o),r.positioning&&(this.bindView=_0)}bind(e,s){this.source=e,this.originalContext=s,this.childContext=Object.create(s),this.childContext.parent=e,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(e,this.originalContext),this.template=this.templateBindingObserver.observe(e,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,this.itemsObserver!==null&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(e,s){e===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):e===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(s)}observeItems(e=!1){if(!this.items){this.items=On;return}const s=this.itemsObserver,i=this.itemsObserver=le.getNotifier(this.items),n=s!==i;n&&s!==null&&s.unsubscribe(this),(n||e)&&i.subscribe(this)}updateViews(e){const s=this.childContext,i=this.views,n=this.bindView,o=this.items,r=this.template,a=this.options.recycle,l=[];let c=0,d=0;for(let u=0,f=e.length;u<f;++u){const b=e[u],w=b.removed;let x=0,_=b.index;const R=_+b.addedCount,H=i.splice(b.index,w.length),ie=d=l.length+H.length;for(;_<R;++_){const U=i[_],ge=U?U.firstChild:this.location;let Fe;a&&d>0?(x<=ie&&H.length>0?(Fe=H[x],x++):(Fe=l[c],c++),d--):Fe=r.create(),i.splice(_,0,Fe),n(Fe,o,_,s),Fe.insertBefore(ge)}H[x]&&l.push(...H.slice(x))}for(let u=c,f=l.length;u<f;++u)l[u].dispose();if(this.options.positioning)for(let u=0,f=i.length;u<f;++u){const b=i[u].context;b.length=f,b.index=u}}refreshAllViews(e=!1){const s=this.items,i=this.childContext,n=this.template,o=this.location,r=this.bindView;let a=s.length,l=this.views,c=l.length;if((a===0||e||!this.options.recycle)&&(km.disposeContiguousBatch(l),c=0),c===0){this.views=l=new Array(a);for(let d=0;d<a;++d){const u=n.create();r(u,s,d,i),l[d]=u,u.insertBefore(o)}}else{let d=0;for(;d<a;++d)if(d<c){const f=l[d];r(f,s,d,i)}else{const f=n.create();r(f,s,d,i),l.push(f),f.insertBefore(o)}const u=l.splice(d,c-d);for(d=0,a=u.length;d<a;++d)u[d].dispose()}}unbindAllViews(){const e=this.views;for(let s=0,i=e.length;s<i;++s)e[s].unbind()}}class _u extends Fl{constructor(e,s,i){super(),this.itemsBinding=e,this.templateBinding=s,this.options=i,this.createPlaceholder=de.createBlockPlaceholder,y0(),this.isItemsBindingVolatile=le.isVolatileBinding(e),this.isTemplateBindingVolatile=le.isVolatileBinding(s)}createBehavior(e){return new k0(e,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}function yo(t,e,s=df){const i=typeof e=="function"?e:()=>e;return new _u(t,i,Object.assign(Object.assign({},df),s))}function Ii(t){return t?function(e,s,i){return e.nodeType===1&&e.matches(t)}:function(e,s,i){return e.nodeType===1}}class Am{constructor(e,s){this.target=e,this.options=s,this.source=null}bind(e){const s=this.options.property;this.shouldUpdate=le.getAccessors(e).some(i=>i.name===s),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(On),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return this.options.filter!==void 0&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class S0 extends Am{constructor(e,s){super(e,s)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function et(t){return typeof t=="string"&&(t={property:t}),new vu("fast-slotted",S0,t)}class C0 extends Am{constructor(e,s){super(e,s),this.observer=null,s.childList=!0}observe(){this.observer===null&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function El(t){return typeof t=="string"&&(t={property:t}),new vu("fast-children",C0,t)}class rs{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const Qt=(t,e)=>M`
    <span
        part="end"
        ${Re("endContainer")}
        class=${s=>e.end?"end":void 0}
    >
        <slot name="end" ${Re("end")} @slotchange="${s=>s.handleEndContentChange()}">
            ${e.end||""}
        </slot>
    </span>
`,Jt=(t,e)=>M`
    <span
        part="start"
        ${Re("startContainer")}
        class="${s=>e.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Re("start")}
            @slotchange="${s=>s.handleStartContentChange()}"
        >
            ${e.start||""}
        </slot>
    </span>
`,I0=M`
    <span part="end" ${Re("endContainer")}>
        <slot
            name="end"
            ${Re("end")}
            @slotchange="${t=>t.handleEndContentChange()}"
        ></slot>
    </span>
`,T0=M`
    <span part="start" ${Re("startContainer")}>
        <slot
            name="start"
            ${Re("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        ></slot>
    </span>
`,F0=(t,e)=>M`
    <template class="${s=>s.expanded?"expanded":""}">
        <div
            class="heading"
            part="heading"
            role="heading"
            aria-level="${s=>s.headinglevel}"
        >
            <button
                class="button"
                part="button"
                ${Re("expandbutton")}
                aria-expanded="${s=>s.expanded}"
                aria-controls="${s=>s.id}-panel"
                id="${s=>s.id}"
                @click="${(s,i)=>s.clickHandler(i.event)}"
            >
                <span class="heading-content" part="heading-content">
                    <slot name="heading"></slot>
                </span>
            </button>
            ${Jt(t,e)}
            ${Qt(t,e)}
            <span class="icon" part="icon" aria-hidden="true">
                <slot name="expanded-icon" part="expanded-icon">
                    ${e.expandedIcon||""}
                </slot>
                <slot name="collapsed-icon" part="collapsed-icon">
                    ${e.collapsedIcon||""}
                </slot>
            <span>
        </div>
        <div
            class="region"
            part="region"
            id="${s=>s.id}-panel"
            role="region"
            aria-labelledby="${s=>s.id}"
        >
            <slot></slot>
        </div>
    </template>
`;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function h(t,e,s,i){var n=arguments.length,o=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,s):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,s,o):r(e,s))||o);return n>3&&o&&Object.defineProperty(e,s,o),o}const Xc=new Map;"metadata"in Reflect||(Reflect.metadata=function(t,e){return function(s){Reflect.defineMetadata(t,e,s)}},Reflect.defineMetadata=function(t,e,s){let i=Xc.get(s);i===void 0&&Xc.set(s,i=new Map),i.set(t,e)},Reflect.getOwnMetadata=function(t,e){const s=Xc.get(e);if(s!==void 0)return s.get(t)});class D0{constructor(e,s){this.container=e,this.key=s}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,Mm(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,s){const{container:i,key:n}=this;return this.container=this.key=void 0,i.registerResolver(n,new Ss(n,e,s))}}function or(t){const e=t.slice(),s=Object.keys(t),i=s.length;let n;for(let o=0;o<i;++o)n=s[o],Lm(n)||(e[n]=t[n]);return e}const R0=Object.freeze({none(t){throw Error(`${t.toString()} not registered, did you forget to add @singleton()?`)},singleton(t){return new Ss(t,1,t)},transient(t){return new Ss(t,2,t)}}),Qc=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:R0.singleton})}),uf=new Map;function hf(t){return e=>Reflect.getOwnMetadata(t,e)}let ff=null;const dt=Object.freeze({createContainer(t){return new wr(null,Object.assign({},Qc.default,t))},findResponsibleContainer(t){const e=t.$$container$$;return e&&e.responsibleForOwnerRequests?e:dt.findParentContainer(t)},findParentContainer(t){const e=new CustomEvent(Pm,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return t.dispatchEvent(e),e.detail.container||dt.getOrCreateDOMContainer()},getOrCreateDOMContainer(t,e){return t?t.$$container$$||new wr(t,Object.assign({},Qc.default,e,{parentLocator:dt.findParentContainer})):ff||(ff=new wr(null,Object.assign({},Qc.default,e,{parentLocator:()=>null})))},getDesignParamtypes:hf("design:paramtypes"),getAnnotationParamtypes:hf("di:paramtypes"),getOrCreateAnnotationParamTypes(t){let e=this.getAnnotationParamtypes(t);return e===void 0&&Reflect.defineMetadata("di:paramtypes",e=[],t),e},getDependencies(t){let e=uf.get(t);if(e===void 0){const s=t.inject;if(s===void 0){const i=dt.getDesignParamtypes(t),n=dt.getAnnotationParamtypes(t);if(i===void 0)if(n===void 0){const o=Object.getPrototypeOf(t);typeof o=="function"&&o!==Function.prototype?e=or(dt.getDependencies(o)):e=[]}else e=or(n);else if(n===void 0)e=or(i);else{e=or(i);let o=n.length,r;for(let c=0;c<o;++c)r=n[c],r!==void 0&&(e[c]=r);const a=Object.keys(n);o=a.length;let l;for(let c=0;c<o;++c)l=a[c],Lm(l)||(e[l]=n[l])}}else e=or(s);uf.set(t,e)}return e},defineProperty(t,e,s,i=!1){const n=`$di_${e}`;Reflect.defineProperty(t,e,{get:function(){let o=this[n];if(o===void 0&&(o=(this instanceof HTMLElement?dt.findResponsibleContainer(this):dt.getOrCreateDOMContainer()).get(s),this[n]=o,i&&this instanceof Rl)){const a=this.$fastController,l=()=>{const d=dt.findResponsibleContainer(this).get(s),u=this[n];d!==u&&(this[n]=o,a.notify(e))};a.subscribe({handleChange:l},"isConnected")}return o}})},createInterface(t,e){const s=typeof t=="function"?t:e,i=typeof t=="string"?t:t&&"friendlyName"in t&&t.friendlyName||vf,n=typeof t=="string"?!1:t&&"respectConnection"in t&&t.respectConnection||!1,o=function(r,a,l){if(r==null||new.target!==void 0)throw new Error(`No registration for interface: '${o.friendlyName}'`);if(a)dt.defineProperty(r,a,o,n);else{const c=dt.getOrCreateAnnotationParamTypes(r);c[l]=o}};return o.$isInterface=!0,o.friendlyName=i??"(anonymous)",s!=null&&(o.register=function(r,a){return s(new D0(r,a??o))}),o.toString=function(){return`InterfaceSymbol<${o.friendlyName}>`},o},inject(...t){return function(e,s,i){if(typeof i=="number"){const n=dt.getOrCreateAnnotationParamTypes(e),o=t[0];o!==void 0&&(n[i]=o)}else if(s)dt.defineProperty(e,s,t[0]);else{const n=i?dt.getOrCreateAnnotationParamTypes(i.value):dt.getOrCreateAnnotationParamTypes(e);let o;for(let r=0;r<t.length;++r)o=t[r],o!==void 0&&(n[r]=o)}}},transient(t){return t.register=function(s){return Mr.transient(t,t).register(s)},t.registerInRequestor=!1,t},singleton(t,e=O0){return t.register=function(i){return Mr.singleton(t,t).register(i)},t.registerInRequestor=e.scoped,t}}),E0=dt.createInterface("Container");dt.inject;const O0={scoped:!1};class Ss{constructor(e,s,i){this.key=e,this.strategy=s,this.state=i,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,s){switch(this.strategy){case 0:return this.state;case 1:{if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(s),this.strategy=0,this.resolving=!1,this.state}case 2:{const i=e.getFactory(this.state);if(i===null)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return i.construct(s)}case 3:return this.state(e,s,this);case 4:return this.state[0].resolve(e,s);case 5:return s.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var s,i,n;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return(n=(i=(s=e.getResolver(this.state))===null||s===void 0?void 0:s.getFactory)===null||i===void 0?void 0:i.call(s,e))!==null&&n!==void 0?n:null;default:return null}}}function pf(t){return this.get(t)}function A0(t,e){return e(t)}class P0{constructor(e,s){this.Type=e,this.dependencies=s,this.transformers=null}construct(e,s){let i;return s===void 0?i=new this.Type(...this.dependencies.map(pf,e)):i=new this.Type(...this.dependencies.map(pf,e),...s),this.transformers==null?i:this.transformers.reduce(A0,i)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const M0={$isResolver:!0,resolve(t,e){return e}};function Ga(t){return typeof t.register=="function"}function L0(t){return Ga(t)&&typeof t.registerInRequestor=="boolean"}function mf(t){return L0(t)&&t.registerInRequestor}function V0(t){return t.prototype!==void 0}const H0=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),Pm="__DI_LOCATE_PARENT__",Jc=new Map;class wr{constructor(e,s){this.owner=e,this.config=s,this._parent=void 0,this.registerDepth=0,this.context=null,e!==null&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(E0,M0),e instanceof Node&&e.addEventListener(Pm,i=>{i.composedPath()[0]!==this.owner&&(i.detail.container=this,i.stopImmediatePropagation())})}get parent(){return this._parent===void 0&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return this.parent===null?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...s){return this.context=e,this.register(...s),this.context=null,this}register(...e){if(++this.registerDepth===100)throw new Error("Unable to autoregister dependency");let s,i,n,o,r;const a=this.context;for(let l=0,c=e.length;l<c;++l)if(s=e[l],!!bf(s))if(Ga(s))s.register(this,a);else if(V0(s))Mr.singleton(s,s).register(this);else for(i=Object.keys(s),o=0,r=i.length;o<r;++o)n=s[i[o]],bf(n)&&(Ga(n)?n.register(this,a):this.register(n));return--this.registerDepth,this}registerResolver(e,s){$a(e);const i=this.resolvers,n=i.get(e);return n==null?i.set(e,s):n instanceof Ss&&n.strategy===4?n.state.push(s):i.set(e,new Ss(e,4,[n,s])),s}registerTransformer(e,s){const i=this.getResolver(e);if(i==null)return!1;if(i.getFactory){const n=i.getFactory(this);return n==null?!1:(n.registerTransformer(s),!0)}return!1}getResolver(e,s=!0){if($a(e),e.resolve!==void 0)return e;let i=this,n;for(;i!=null;)if(n=i.resolvers.get(e),n==null){if(i.parent==null){const o=mf(e)?this:i;return s?this.jitRegister(e,o):null}i=i.parent}else return n;return null}has(e,s=!1){return this.resolvers.has(e)?!0:s&&this.parent!=null?this.parent.has(e,!0):!1}get(e){if($a(e),e.$isResolver)return e.resolve(this,this);let s=this,i;for(;s!=null;)if(i=s.resolvers.get(e),i==null){if(s.parent==null){const n=mf(e)?this:s;return i=this.jitRegister(e,n),i.resolve(s,this)}s=s.parent}else return i.resolve(s,this);throw new Error(`Unable to resolve key: ${e}`)}getAll(e,s=!1){$a(e);const i=this;let n=i,o;if(s){let r=On;for(;n!=null;)o=n.resolvers.get(e),o!=null&&(r=r.concat(gf(o,n,i))),n=n.parent;return r}else for(;n!=null;)if(o=n.resolvers.get(e),o==null){if(n=n.parent,n==null)return On}else return gf(o,n,i);return On}getFactory(e){let s=Jc.get(e);if(s===void 0){if(N0(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);Jc.set(e,s=new P0(e,dt.getDependencies(e)))}return s}registerFactory(e,s){Jc.set(e,s)}createChild(e){return new wr(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,s){if(typeof e!="function")throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(H0.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(Ga(e)){const i=e.register(s);if(!(i instanceof Object)||i.resolve==null){const n=s.resolvers.get(e);if(n!=null)return n;throw new Error("A valid resolver was not returned from the static register method")}return i}else{if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const i=this.config.defaultResolver(e,s);return s.resolvers.set(e,i),i}}}}const Kc=new WeakMap;function Mm(t){return function(e,s,i){if(Kc.has(i))return Kc.get(i);const n=t(e,s,i);return Kc.set(i,n),n}}const Mr=Object.freeze({instance(t,e){return new Ss(t,0,e)},singleton(t,e){return new Ss(t,1,e)},transient(t,e){return new Ss(t,2,e)},callback(t,e){return new Ss(t,3,e)},cachedCallback(t,e){return new Ss(t,3,Mm(e))},aliasTo(t,e){return new Ss(e,5,t)}});function $a(t){if(t==null)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function gf(t,e,s){if(t instanceof Ss&&t.strategy===4){const i=t.state;let n=i.length;const o=new Array(n);for(;n--;)o[n]=i[n].resolve(e,s);return o}return[t.resolve(e,s)]}const vf="(anonymous)";function bf(t){return typeof t=="object"&&t!==null||typeof t=="function"}const N0=function(){const t=new WeakMap;let e=!1,s="",i=0;return function(n){return e=t.get(n),e===void 0&&(s=n.toString(),i=s.length,e=i>=29&&i<=100&&s.charCodeAt(i-1)===125&&s.charCodeAt(i-2)<=32&&s.charCodeAt(i-3)===93&&s.charCodeAt(i-4)===101&&s.charCodeAt(i-5)===100&&s.charCodeAt(i-6)===111&&s.charCodeAt(i-7)===99&&s.charCodeAt(i-8)===32&&s.charCodeAt(i-9)===101&&s.charCodeAt(i-10)===118&&s.charCodeAt(i-11)===105&&s.charCodeAt(i-12)===116&&s.charCodeAt(i-13)===97&&s.charCodeAt(i-14)===110&&s.charCodeAt(i-15)===88,t.set(n,e)),e}}(),_a={};function Lm(t){switch(typeof t){case"number":return t>=0&&(t|0)===t;case"string":{const e=_a[t];if(e!==void 0)return e;const s=t.length;if(s===0)return _a[t]=!1;let i=0;for(let n=0;n<s;++n)if(i=t.charCodeAt(n),n===0&&i===48&&s>1||i<48||i>57)return _a[t]=!1;return _a[t]=!0}default:return!1}}function yf(t){return`${t.toLowerCase()}:presentation`}const ka=new Map,Vm=Object.freeze({define(t,e,s){const i=yf(t);ka.get(i)===void 0?ka.set(i,e):ka.set(i,!1),s.register(Mr.instance(i,e))},forTag(t,e){const s=yf(t),i=ka.get(s);return i===!1?dt.findResponsibleContainer(e).get(s):i||null}});class z0{constructor(e,s){this.template=e||null,this.styles=s===void 0?null:Array.isArray(s)?Xt.create(s):s instanceof Xt?s:Xt.create([s])}applyTo(e){const s=e.$fastController;s.template===null&&(s.template=this.template),s.styles===null&&(s.styles=this.styles)}}class fe extends Rl{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return this._presentation===void 0&&(this._presentation=Vm.forTag(this.tagName,this)),this._presentation}templateChanged(){this.template!==void 0&&(this.$fastController.template=this.template)}stylesChanged(){this.styles!==void 0&&(this.$fastController.styles=this.styles)}connectedCallback(){this.$presentation!==null&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(s={})=>new B0(this===fe?class extends fe{}:this,e,s)}}h([k],fe.prototype,"template",void 0);h([k],fe.prototype,"styles",void 0);function rr(t,e,s){return typeof t=="function"?t(e,s):t}class B0{constructor(e,s,i){this.type=e,this.elementDefinition=s,this.overrideDefinition=i,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,s){const i=this.definition,n=this.overrideDefinition,r=`${i.prefix||s.elementPrefix}-${i.baseName}`;s.tryDefineElement({name:r,type:this.type,baseClass:this.elementDefinition.baseClass,callback:a=>{const l=new z0(rr(i.template,a,i),rr(i.styles,a,i));a.definePresentation(l);let c=rr(i.shadowOptions,a,i);a.shadowRootMode&&(c?n.shadowOptions||(c.mode=a.shadowRootMode):c!==null&&(c={mode:a.shadowRootMode})),a.defineElement({elementOptions:rr(i.elementOptions,a,i),shadowOptions:c,attributes:rr(i.attributes,a,i)})}})}}function st(t,...e){const s=rl.locate(t);e.forEach(i=>{Object.getOwnPropertyNames(i.prototype).forEach(o=>{o!=="constructor"&&Object.defineProperty(t.prototype,o,Object.getOwnPropertyDescriptor(i.prototype,o))}),rl.locate(i).forEach(o=>s.push(o))})}class Vn extends fe{constructor(){super(...arguments),this.headinglevel=2,this.expanded=!1,this.clickHandler=e=>{this.expanded=!this.expanded,this.change()},this.change=()=>{this.$emit("change")}}}h([p({attribute:"heading-level",mode:"fromView",converter:G})],Vn.prototype,"headinglevel",void 0);h([p({mode:"boolean"})],Vn.prototype,"expanded",void 0);h([p],Vn.prototype,"id",void 0);st(Vn,rs);const j0=(t,e)=>M`
    <template>
        <slot ${et({property:"accordionItems",filter:Ii()})}></slot>
        <slot name="item" part="item" ${et("accordionItems")}></slot>
    </template>
`,gt={horizontal:"horizontal",vertical:"vertical"};function U0(t,e){let s=t.length;for(;s--;)if(e(t[s],s,t))return s;return-1}function Y0(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Ro(...t){return t.every(e=>e instanceof HTMLElement)}function W0(t,e){return!t||!e||!Ro(t)?void 0:Array.from(t.querySelectorAll(e)).filter(i=>i.offsetParent!==null)}function q0(){const t=document.querySelector('meta[property="csp-nonce"]');return t?t.getAttribute("content"):null}let xn;function G0(){if(typeof xn=="boolean")return xn;if(!Y0())return xn=!1,xn;const t=document.createElement("style"),e=q0();e!==null&&t.setAttribute("nonce",e),document.head.appendChild(t);try{t.sheet.insertRule("foo:focus-visible {color:inherit}",0),xn=!0}catch{xn=!1}finally{document.head.removeChild(t)}return xn}const xf="focus",wf="focusin",Eo="focusout",Oo="keydown",$f="resize",_f="scroll";var kf;(function(t){t[t.alt=18]="alt",t[t.arrowDown=40]="arrowDown",t[t.arrowLeft=37]="arrowLeft",t[t.arrowRight=39]="arrowRight",t[t.arrowUp=38]="arrowUp",t[t.back=8]="back",t[t.backSlash=220]="backSlash",t[t.break=19]="break",t[t.capsLock=20]="capsLock",t[t.closeBracket=221]="closeBracket",t[t.colon=186]="colon",t[t.colon2=59]="colon2",t[t.comma=188]="comma",t[t.ctrl=17]="ctrl",t[t.delete=46]="delete",t[t.end=35]="end",t[t.enter=13]="enter",t[t.equals=187]="equals",t[t.equals2=61]="equals2",t[t.equals3=107]="equals3",t[t.escape=27]="escape",t[t.forwardSlash=191]="forwardSlash",t[t.function1=112]="function1",t[t.function10=121]="function10",t[t.function11=122]="function11",t[t.function12=123]="function12",t[t.function2=113]="function2",t[t.function3=114]="function3",t[t.function4=115]="function4",t[t.function5=116]="function5",t[t.function6=117]="function6",t[t.function7=118]="function7",t[t.function8=119]="function8",t[t.function9=120]="function9",t[t.home=36]="home",t[t.insert=45]="insert",t[t.menu=93]="menu",t[t.minus=189]="minus",t[t.minus2=109]="minus2",t[t.numLock=144]="numLock",t[t.numPad0=96]="numPad0",t[t.numPad1=97]="numPad1",t[t.numPad2=98]="numPad2",t[t.numPad3=99]="numPad3",t[t.numPad4=100]="numPad4",t[t.numPad5=101]="numPad5",t[t.numPad6=102]="numPad6",t[t.numPad7=103]="numPad7",t[t.numPad8=104]="numPad8",t[t.numPad9=105]="numPad9",t[t.numPadDivide=111]="numPadDivide",t[t.numPadDot=110]="numPadDot",t[t.numPadMinus=109]="numPadMinus",t[t.numPadMultiply=106]="numPadMultiply",t[t.numPadPlus=107]="numPadPlus",t[t.openBracket=219]="openBracket",t[t.pageDown=34]="pageDown",t[t.pageUp=33]="pageUp",t[t.period=190]="period",t[t.print=44]="print",t[t.quote=222]="quote",t[t.scrollLock=145]="scrollLock",t[t.shift=16]="shift",t[t.space=32]="space",t[t.tab=9]="tab",t[t.tilde=192]="tilde",t[t.windowsLeft=91]="windowsLeft",t[t.windowsOpera=219]="windowsOpera",t[t.windowsRight=92]="windowsRight"})(kf||(kf={}));const Ds="ArrowDown",an="ArrowLeft",ln="ArrowRight",Rs="ArrowUp",Ri="Enter",Yo="Escape",di="Home",ui="End",Z0="F2",X0="PageDown",Q0="PageUp",Un=" ",Ol="Tab",mo={ArrowDown:Ds,ArrowLeft:an,ArrowRight:ln,ArrowUp:Rs};var Ze;(function(t){t.ltr="ltr",t.rtl="rtl"})(Ze||(Ze={}));function J0(t,e,s){return s<t?e:s>e?t:s}function Al(t,e,s){return Math.min(Math.max(s,t),e)}function Sa(t,e,s=0){return[e,s]=[e,s].sort((i,n)=>i-n),e<=t&&t<s}let K0=0;function Lr(t=""){return`${t}${K0++}`}var g;(function(t){t.Canvas="Canvas",t.CanvasText="CanvasText",t.LinkText="LinkText",t.VisitedText="VisitedText",t.ActiveText="ActiveText",t.ButtonFace="ButtonFace",t.ButtonText="ButtonText",t.Field="Field",t.FieldText="FieldText",t.Highlight="Highlight",t.HighlightText="HighlightText",t.GrayText="GrayText"})(g||(g={}));const Sf={single:"single",multi:"multi"};class ku extends fe{constructor(){super(...arguments),this.expandmode=Sf.multi,this.activeItemIndex=0,this.change=()=>{this.$emit("change",this.activeid)},this.setItems=()=>{var e;this.accordionItems.length!==0&&(this.accordionIds=this.getItemIds(),this.accordionItems.forEach((s,i)=>{s instanceof Vn&&(s.addEventListener("change",this.activeItemChange),this.isSingleExpandMode()&&(this.activeItemIndex!==i?s.expanded=!1:s.expanded=!0));const n=this.accordionIds[i];s.setAttribute("id",typeof n!="string"?`accordion-${i+1}`:n),this.activeid=this.accordionIds[this.activeItemIndex],s.addEventListener("keydown",this.handleItemKeyDown),s.addEventListener("focus",this.handleItemFocus)}),this.isSingleExpandMode()&&((e=this.findExpandedItem())!==null&&e!==void 0?e:this.accordionItems[0]).setAttribute("aria-disabled","true"))},this.removeItemListeners=e=>{e.forEach((s,i)=>{s.removeEventListener("change",this.activeItemChange),s.removeEventListener("keydown",this.handleItemKeyDown),s.removeEventListener("focus",this.handleItemFocus)})},this.activeItemChange=e=>{if(e.defaultPrevented||e.target!==e.currentTarget)return;e.preventDefault();const s=e.target;this.activeid=s.getAttribute("id"),this.isSingleExpandMode()&&(this.resetItems(),s.expanded=!0,s.setAttribute("aria-disabled","true"),this.accordionItems.forEach(i=>{!i.hasAttribute("disabled")&&i.id!==this.activeid&&i.removeAttribute("aria-disabled")})),this.activeItemIndex=Array.from(this.accordionItems).indexOf(s),this.change()},this.handleItemKeyDown=e=>{if(e.target===e.currentTarget)switch(this.accordionIds=this.getItemIds(),e.key){case Rs:e.preventDefault(),this.adjust(-1);break;case Ds:e.preventDefault(),this.adjust(1);break;case di:this.activeItemIndex=0,this.focusItem();break;case ui:this.activeItemIndex=this.accordionItems.length-1,this.focusItem();break}},this.handleItemFocus=e=>{if(e.target===e.currentTarget){const s=e.target,i=this.activeItemIndex=Array.from(this.accordionItems).indexOf(s);this.activeItemIndex!==i&&i!==-1&&(this.activeItemIndex=i,this.activeid=this.accordionIds[this.activeItemIndex])}}}accordionItemsChanged(e,s){this.$fastController.isConnected&&(this.removeItemListeners(e),this.setItems())}findExpandedItem(){for(let e=0;e<this.accordionItems.length;e++)if(this.accordionItems[e].getAttribute("expanded")==="true")return this.accordionItems[e];return null}resetItems(){this.accordionItems.forEach((e,s)=>{e.expanded=!1})}getItemIds(){return this.accordionItems.map(e=>e.getAttribute("id"))}isSingleExpandMode(){return this.expandmode===Sf.single}adjust(e){this.activeItemIndex=J0(0,this.accordionItems.length-1,this.activeItemIndex+e),this.focusItem()}focusItem(){const e=this.accordionItems[this.activeItemIndex];e instanceof Vn&&e.expandbutton.focus()}}h([p({attribute:"expand-mode"})],ku.prototype,"expandmode",void 0);h([k],ku.prototype,"accordionItems",void 0);const Hm=(t,e)=>M`
    <a
        class="control"
        part="control"
        download="${s=>s.download}"
        href="${s=>s.href}"
        hreflang="${s=>s.hreflang}"
        ping="${s=>s.ping}"
        referrerpolicy="${s=>s.referrerpolicy}"
        rel="${s=>s.rel}"
        target="${s=>s.target}"
        type="${s=>s.type}"
        aria-atomic="${s=>s.ariaAtomic}"
        aria-busy="${s=>s.ariaBusy}"
        aria-controls="${s=>s.ariaControls}"
        aria-current="${s=>s.ariaCurrent}"
        aria-describedby="${s=>s.ariaDescribedby}"
        aria-details="${s=>s.ariaDetails}"
        aria-disabled="${s=>s.ariaDisabled}"
        aria-errormessage="${s=>s.ariaErrormessage}"
        aria-expanded="${s=>s.ariaExpanded}"
        aria-flowto="${s=>s.ariaFlowto}"
        aria-haspopup="${s=>s.ariaHaspopup}"
        aria-hidden="${s=>s.ariaHidden}"
        aria-invalid="${s=>s.ariaInvalid}"
        aria-keyshortcuts="${s=>s.ariaKeyshortcuts}"
        aria-label="${s=>s.ariaLabel}"
        aria-labelledby="${s=>s.ariaLabelledby}"
        aria-live="${s=>s.ariaLive}"
        aria-owns="${s=>s.ariaOwns}"
        aria-relevant="${s=>s.ariaRelevant}"
        aria-roledescription="${s=>s.ariaRoledescription}"
        ${Re("control")}
    >
        ${Jt(t,e)}
        <span class="content" part="content">
            <slot ${et("defaultSlottedContent")}></slot>
        </span>
        ${Qt(t,e)}
    </a>
`;class Xe{}h([p({attribute:"aria-atomic"})],Xe.prototype,"ariaAtomic",void 0);h([p({attribute:"aria-busy"})],Xe.prototype,"ariaBusy",void 0);h([p({attribute:"aria-controls"})],Xe.prototype,"ariaControls",void 0);h([p({attribute:"aria-current"})],Xe.prototype,"ariaCurrent",void 0);h([p({attribute:"aria-describedby"})],Xe.prototype,"ariaDescribedby",void 0);h([p({attribute:"aria-details"})],Xe.prototype,"ariaDetails",void 0);h([p({attribute:"aria-disabled"})],Xe.prototype,"ariaDisabled",void 0);h([p({attribute:"aria-errormessage"})],Xe.prototype,"ariaErrormessage",void 0);h([p({attribute:"aria-flowto"})],Xe.prototype,"ariaFlowto",void 0);h([p({attribute:"aria-haspopup"})],Xe.prototype,"ariaHaspopup",void 0);h([p({attribute:"aria-hidden"})],Xe.prototype,"ariaHidden",void 0);h([p({attribute:"aria-invalid"})],Xe.prototype,"ariaInvalid",void 0);h([p({attribute:"aria-keyshortcuts"})],Xe.prototype,"ariaKeyshortcuts",void 0);h([p({attribute:"aria-label"})],Xe.prototype,"ariaLabel",void 0);h([p({attribute:"aria-labelledby"})],Xe.prototype,"ariaLabelledby",void 0);h([p({attribute:"aria-live"})],Xe.prototype,"ariaLive",void 0);h([p({attribute:"aria-owns"})],Xe.prototype,"ariaOwns",void 0);h([p({attribute:"aria-relevant"})],Xe.prototype,"ariaRelevant",void 0);h([p({attribute:"aria-roledescription"})],Xe.prototype,"ariaRoledescription",void 0);let gs=class extends fe{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((e=this.$fastController.definition.shadowOptions)===null||e===void 0)&&e.delegatesFocus)&&(this.focus=()=>{var s;(s=this.control)===null||s===void 0||s.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}};h([p],gs.prototype,"download",void 0);h([p],gs.prototype,"href",void 0);h([p],gs.prototype,"hreflang",void 0);h([p],gs.prototype,"ping",void 0);h([p],gs.prototype,"referrerpolicy",void 0);h([p],gs.prototype,"rel",void 0);h([p],gs.prototype,"target",void 0);h([p],gs.prototype,"type",void 0);h([k],gs.prototype,"defaultSlottedContent",void 0);class Pl{}h([p({attribute:"aria-expanded"})],Pl.prototype,"ariaExpanded",void 0);st(Pl,Xe);st(gs,rs,Pl);const ex=(t,e)=>M`
    <template class="${s=>s.initialLayoutComplete?"loaded":""}">
        ${ut(s=>s.initialLayoutComplete,M`
                <slot></slot>
            `)}
    </template>
`,Hn=t=>{const e=t.closest("[dir]");return e!==null&&e.dir==="rtl"?Ze.rtl:Ze.ltr};class tx{constructor(){this.intersectionDetector=null,this.observedElements=new Map,this.requestPosition=(e,s)=>{var i;if(this.intersectionDetector!==null){if(this.observedElements.has(e)){(i=this.observedElements.get(e))===null||i===void 0||i.push(s);return}this.observedElements.set(e,[s]),this.intersectionDetector.observe(e)}},this.cancelRequestPosition=(e,s)=>{const i=this.observedElements.get(e);if(i!==void 0){const n=i.indexOf(s);n!==-1&&i.splice(n,1)}},this.initializeIntersectionDetector=()=>{Ci.IntersectionObserver&&(this.intersectionDetector=new IntersectionObserver(this.handleIntersection,{root:null,rootMargin:"0px",threshold:[0,1]}))},this.handleIntersection=e=>{if(this.intersectionDetector===null)return;const s=[],i=[];e.forEach(n=>{var o;(o=this.intersectionDetector)===null||o===void 0||o.unobserve(n.target);const r=this.observedElements.get(n.target);r!==void 0&&(r.forEach(a=>{let l=s.indexOf(a);l===-1&&(l=s.length,s.push(a),i.push([])),i[l].push(n)}),this.observedElements.delete(n.target))}),s.forEach((n,o)=>{n(i[o])})},this.initializeIntersectionDetector()}}class ae extends fe{constructor(){super(...arguments),this.anchor="",this.viewport="",this.horizontalPositioningMode="uncontrolled",this.horizontalDefaultPosition="unset",this.horizontalViewportLock=!1,this.horizontalInset=!1,this.horizontalScaling="content",this.verticalPositioningMode="uncontrolled",this.verticalDefaultPosition="unset",this.verticalViewportLock=!1,this.verticalInset=!1,this.verticalScaling="content",this.fixedPlacement=!1,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.initialLayoutComplete=!1,this.resizeDetector=null,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.pendingPositioningUpdate=!1,this.pendingReset=!1,this.currentDirection=Ze.ltr,this.regionVisible=!1,this.forceUpdate=!1,this.updateThreshold=.5,this.update=()=>{this.pendingPositioningUpdate||this.requestPositionUpdates()},this.startObservers=()=>{this.stopObservers(),this.anchorElement!==null&&(this.requestPositionUpdates(),this.resizeDetector!==null&&(this.resizeDetector.observe(this.anchorElement),this.resizeDetector.observe(this)))},this.requestPositionUpdates=()=>{this.anchorElement===null||this.pendingPositioningUpdate||(ae.intersectionService.requestPosition(this,this.handleIntersection),ae.intersectionService.requestPosition(this.anchorElement,this.handleIntersection),this.viewportElement!==null&&ae.intersectionService.requestPosition(this.viewportElement,this.handleIntersection),this.pendingPositioningUpdate=!0)},this.stopObservers=()=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,ae.intersectionService.cancelRequestPosition(this,this.handleIntersection),this.anchorElement!==null&&ae.intersectionService.cancelRequestPosition(this.anchorElement,this.handleIntersection),this.viewportElement!==null&&ae.intersectionService.cancelRequestPosition(this.viewportElement,this.handleIntersection)),this.resizeDetector!==null&&this.resizeDetector.disconnect()},this.getViewport=()=>typeof this.viewport!="string"||this.viewport===""?document.documentElement:document.getElementById(this.viewport),this.getAnchor=()=>document.getElementById(this.anchor),this.handleIntersection=e=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,this.applyIntersectionEntries(e)&&this.updateLayout())},this.applyIntersectionEntries=e=>{const s=e.find(o=>o.target===this),i=e.find(o=>o.target===this.anchorElement),n=e.find(o=>o.target===this.viewportElement);return s===void 0||n===void 0||i===void 0?!1:!this.regionVisible||this.forceUpdate||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0||this.isRectDifferent(this.anchorRect,i.boundingClientRect)||this.isRectDifferent(this.viewportRect,n.boundingClientRect)||this.isRectDifferent(this.regionRect,s.boundingClientRect)?(this.regionRect=s.boundingClientRect,this.anchorRect=i.boundingClientRect,this.viewportElement===document.documentElement?this.viewportRect=new DOMRectReadOnly(n.boundingClientRect.x+document.documentElement.scrollLeft,n.boundingClientRect.y+document.documentElement.scrollTop,n.boundingClientRect.width,n.boundingClientRect.height):this.viewportRect=n.boundingClientRect,this.updateRegionOffset(),this.forceUpdate=!1,!0):!1},this.updateRegionOffset=()=>{this.anchorRect&&this.regionRect&&(this.baseHorizontalOffset=this.baseHorizontalOffset+(this.anchorRect.left-this.regionRect.left)+(this.translateX-this.baseHorizontalOffset),this.baseVerticalOffset=this.baseVerticalOffset+(this.anchorRect.top-this.regionRect.top)+(this.translateY-this.baseVerticalOffset))},this.isRectDifferent=(e,s)=>Math.abs(e.top-s.top)>this.updateThreshold||Math.abs(e.right-s.right)>this.updateThreshold||Math.abs(e.bottom-s.bottom)>this.updateThreshold||Math.abs(e.left-s.left)>this.updateThreshold,this.handleResize=e=>{this.update()},this.reset=()=>{this.pendingReset&&(this.pendingReset=!1,this.anchorElement===null&&(this.anchorElement=this.getAnchor()),this.viewportElement===null&&(this.viewportElement=this.getViewport()),this.currentDirection=Hn(this),this.startObservers())},this.updateLayout=()=>{let e,s;if(this.horizontalPositioningMode!=="uncontrolled"){const o=this.getPositioningOptions(this.horizontalInset);if(this.horizontalDefaultPosition==="center")s="center";else if(this.horizontalDefaultPosition!=="unset"){let f=this.horizontalDefaultPosition;if(f==="start"||f==="end"){const b=Hn(this);if(b!==this.currentDirection){this.currentDirection=b,this.initialize();return}this.currentDirection===Ze.ltr?f=f==="start"?"left":"right":f=f==="start"?"right":"left"}switch(f){case"left":s=this.horizontalInset?"insetStart":"start";break;case"right":s=this.horizontalInset?"insetEnd":"end";break}}const r=this.horizontalThreshold!==void 0?this.horizontalThreshold:this.regionRect!==void 0?this.regionRect.width:0,a=this.anchorRect!==void 0?this.anchorRect.left:0,l=this.anchorRect!==void 0?this.anchorRect.right:0,c=this.anchorRect!==void 0?this.anchorRect.width:0,d=this.viewportRect!==void 0?this.viewportRect.left:0,u=this.viewportRect!==void 0?this.viewportRect.right:0;(s===void 0||this.horizontalPositioningMode!=="locktodefault"&&this.getAvailableSpace(s,a,l,c,d,u)<r)&&(s=this.getAvailableSpace(o[0],a,l,c,d,u)>this.getAvailableSpace(o[1],a,l,c,d,u)?o[0]:o[1])}if(this.verticalPositioningMode!=="uncontrolled"){const o=this.getPositioningOptions(this.verticalInset);if(this.verticalDefaultPosition==="center")e="center";else if(this.verticalDefaultPosition!=="unset")switch(this.verticalDefaultPosition){case"top":e=this.verticalInset?"insetStart":"start";break;case"bottom":e=this.verticalInset?"insetEnd":"end";break}const r=this.verticalThreshold!==void 0?this.verticalThreshold:this.regionRect!==void 0?this.regionRect.height:0,a=this.anchorRect!==void 0?this.anchorRect.top:0,l=this.anchorRect!==void 0?this.anchorRect.bottom:0,c=this.anchorRect!==void 0?this.anchorRect.height:0,d=this.viewportRect!==void 0?this.viewportRect.top:0,u=this.viewportRect!==void 0?this.viewportRect.bottom:0;(e===void 0||this.verticalPositioningMode!=="locktodefault"&&this.getAvailableSpace(e,a,l,c,d,u)<r)&&(e=this.getAvailableSpace(o[0],a,l,c,d,u)>this.getAvailableSpace(o[1],a,l,c,d,u)?o[0]:o[1])}const i=this.getNextRegionDimension(s,e),n=this.horizontalPosition!==s||this.verticalPosition!==e;if(this.setHorizontalPosition(s,i),this.setVerticalPosition(e,i),this.updateRegionStyle(),!this.initialLayoutComplete){this.initialLayoutComplete=!0,this.requestPositionUpdates();return}this.regionVisible||(this.regionVisible=!0,this.style.removeProperty("pointer-events"),this.style.removeProperty("opacity"),this.classList.toggle("loaded",!0),this.$emit("loaded",this,{bubbles:!1})),this.updatePositionClasses(),n&&this.$emit("positionchange",this,{bubbles:!1})},this.updateRegionStyle=()=>{this.style.width=this.regionWidth,this.style.height=this.regionHeight,this.style.transform=`translate(${this.translateX}px, ${this.translateY}px)`},this.updatePositionClasses=()=>{this.classList.toggle("top",this.verticalPosition==="start"),this.classList.toggle("bottom",this.verticalPosition==="end"),this.classList.toggle("inset-top",this.verticalPosition==="insetStart"),this.classList.toggle("inset-bottom",this.verticalPosition==="insetEnd"),this.classList.toggle("vertical-center",this.verticalPosition==="center"),this.classList.toggle("left",this.horizontalPosition==="start"),this.classList.toggle("right",this.horizontalPosition==="end"),this.classList.toggle("inset-left",this.horizontalPosition==="insetStart"),this.classList.toggle("inset-right",this.horizontalPosition==="insetEnd"),this.classList.toggle("horizontal-center",this.horizontalPosition==="center")},this.setHorizontalPosition=(e,s)=>{if(e===void 0||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0)return;let i=0;switch(this.horizontalScaling){case"anchor":case"fill":i=this.horizontalViewportLock?this.viewportRect.width:s.width,this.regionWidth=`${i}px`;break;case"content":i=this.regionRect.width,this.regionWidth="unset";break}let n=0;switch(e){case"start":this.translateX=this.baseHorizontalOffset-i,this.horizontalViewportLock&&this.anchorRect.left>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.right));break;case"insetStart":this.translateX=this.baseHorizontalOffset-i+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.right));break;case"insetEnd":this.translateX=this.baseHorizontalOffset,this.horizontalViewportLock&&this.anchorRect.left<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.left));break;case"end":this.translateX=this.baseHorizontalOffset+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.left));break;case"center":if(n=(this.anchorRect.width-i)/2,this.translateX=this.baseHorizontalOffset+n,this.horizontalViewportLock){const o=this.anchorRect.left+n,r=this.anchorRect.right-n;o<this.viewportRect.left&&!(r>this.viewportRect.right)?this.translateX=this.translateX-(o-this.viewportRect.left):r>this.viewportRect.right&&!(o<this.viewportRect.left)&&(this.translateX=this.translateX-(r-this.viewportRect.right))}break}this.horizontalPosition=e},this.setVerticalPosition=(e,s)=>{if(e===void 0||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0)return;let i=0;switch(this.verticalScaling){case"anchor":case"fill":i=this.verticalViewportLock?this.viewportRect.height:s.height,this.regionHeight=`${i}px`;break;case"content":i=this.regionRect.height,this.regionHeight="unset";break}let n=0;switch(e){case"start":this.translateY=this.baseVerticalOffset-i,this.verticalViewportLock&&this.anchorRect.top>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.bottom));break;case"insetStart":this.translateY=this.baseVerticalOffset-i+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.bottom));break;case"insetEnd":this.translateY=this.baseVerticalOffset,this.verticalViewportLock&&this.anchorRect.top<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.top));break;case"end":this.translateY=this.baseVerticalOffset+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.top));break;case"center":if(n=(this.anchorRect.height-i)/2,this.translateY=this.baseVerticalOffset+n,this.verticalViewportLock){const o=this.anchorRect.top+n,r=this.anchorRect.bottom-n;o<this.viewportRect.top&&!(r>this.viewportRect.bottom)?this.translateY=this.translateY-(o-this.viewportRect.top):r>this.viewportRect.bottom&&!(o<this.viewportRect.top)&&(this.translateY=this.translateY-(r-this.viewportRect.bottom))}}this.verticalPosition=e},this.getPositioningOptions=e=>e?["insetStart","insetEnd"]:["start","end"],this.getAvailableSpace=(e,s,i,n,o,r)=>{const a=s-o,l=r-(s+n);switch(e){case"start":return a;case"insetStart":return a+n;case"insetEnd":return l+n;case"end":return l;case"center":return Math.min(a,l)*2+n}},this.getNextRegionDimension=(e,s)=>{const i={height:this.regionRect!==void 0?this.regionRect.height:0,width:this.regionRect!==void 0?this.regionRect.width:0};return e!==void 0&&this.horizontalScaling==="fill"?i.width=this.getAvailableSpace(e,this.anchorRect!==void 0?this.anchorRect.left:0,this.anchorRect!==void 0?this.anchorRect.right:0,this.anchorRect!==void 0?this.anchorRect.width:0,this.viewportRect!==void 0?this.viewportRect.left:0,this.viewportRect!==void 0?this.viewportRect.right:0):this.horizontalScaling==="anchor"&&(i.width=this.anchorRect!==void 0?this.anchorRect.width:0),s!==void 0&&this.verticalScaling==="fill"?i.height=this.getAvailableSpace(s,this.anchorRect!==void 0?this.anchorRect.top:0,this.anchorRect!==void 0?this.anchorRect.bottom:0,this.anchorRect!==void 0?this.anchorRect.height:0,this.viewportRect!==void 0?this.viewportRect.top:0,this.viewportRect!==void 0?this.viewportRect.bottom:0):this.verticalScaling==="anchor"&&(i.height=this.anchorRect!==void 0?this.anchorRect.height:0),i},this.startAutoUpdateEventListeners=()=>{window.addEventListener($f,this.update,{passive:!0}),window.addEventListener(_f,this.update,{passive:!0,capture:!0}),this.resizeDetector!==null&&this.viewportElement!==null&&this.resizeDetector.observe(this.viewportElement)},this.stopAutoUpdateEventListeners=()=>{window.removeEventListener($f,this.update),window.removeEventListener(_f,this.update),this.resizeDetector!==null&&this.viewportElement!==null&&this.resizeDetector.unobserve(this.viewportElement)}}anchorChanged(){this.initialLayoutComplete&&(this.anchorElement=this.getAnchor())}viewportChanged(){this.initialLayoutComplete&&(this.viewportElement=this.getViewport())}horizontalPositioningModeChanged(){this.requestReset()}horizontalDefaultPositionChanged(){this.updateForAttributeChange()}horizontalViewportLockChanged(){this.updateForAttributeChange()}horizontalInsetChanged(){this.updateForAttributeChange()}horizontalThresholdChanged(){this.updateForAttributeChange()}horizontalScalingChanged(){this.updateForAttributeChange()}verticalPositioningModeChanged(){this.requestReset()}verticalDefaultPositionChanged(){this.updateForAttributeChange()}verticalViewportLockChanged(){this.updateForAttributeChange()}verticalInsetChanged(){this.updateForAttributeChange()}verticalThresholdChanged(){this.updateForAttributeChange()}verticalScalingChanged(){this.updateForAttributeChange()}fixedPlacementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}autoUpdateModeChanged(e,s){this.$fastController.isConnected&&this.initialLayoutComplete&&(e==="auto"&&this.stopAutoUpdateEventListeners(),s==="auto"&&this.startAutoUpdateEventListeners())}anchorElementChanged(){this.requestReset()}viewportElementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}connectedCallback(){super.connectedCallback(),this.autoUpdateMode==="auto"&&this.startAutoUpdateEventListeners(),this.initialize()}disconnectedCallback(){super.disconnectedCallback(),this.autoUpdateMode==="auto"&&this.stopAutoUpdateEventListeners(),this.stopObservers(),this.disconnectResizeDetector()}adoptedCallback(){this.initialize()}disconnectResizeDetector(){this.resizeDetector!==null&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.handleResize)}updateForAttributeChange(){this.$fastController.isConnected&&this.initialLayoutComplete&&(this.forceUpdate=!0,this.update())}initialize(){this.initializeResizeDetector(),this.anchorElement===null&&(this.anchorElement=this.getAnchor()),this.requestReset()}requestReset(){this.$fastController.isConnected&&this.pendingReset===!1&&(this.setInitialState(),de.queueUpdate(()=>this.reset()),this.pendingReset=!0)}setInitialState(){this.initialLayoutComplete=!1,this.regionVisible=!1,this.translateX=0,this.translateY=0,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.viewportRect=void 0,this.regionRect=void 0,this.anchorRect=void 0,this.verticalPosition=void 0,this.horizontalPosition=void 0,this.style.opacity="0",this.style.pointerEvents="none",this.forceUpdate=!1,this.style.position=this.fixedPlacement?"fixed":"absolute",this.updatePositionClasses(),this.updateRegionStyle()}}ae.intersectionService=new tx;h([p],ae.prototype,"anchor",void 0);h([p],ae.prototype,"viewport",void 0);h([p({attribute:"horizontal-positioning-mode"})],ae.prototype,"horizontalPositioningMode",void 0);h([p({attribute:"horizontal-default-position"})],ae.prototype,"horizontalDefaultPosition",void 0);h([p({attribute:"horizontal-viewport-lock",mode:"boolean"})],ae.prototype,"horizontalViewportLock",void 0);h([p({attribute:"horizontal-inset",mode:"boolean"})],ae.prototype,"horizontalInset",void 0);h([p({attribute:"horizontal-threshold"})],ae.prototype,"horizontalThreshold",void 0);h([p({attribute:"horizontal-scaling"})],ae.prototype,"horizontalScaling",void 0);h([p({attribute:"vertical-positioning-mode"})],ae.prototype,"verticalPositioningMode",void 0);h([p({attribute:"vertical-default-position"})],ae.prototype,"verticalDefaultPosition",void 0);h([p({attribute:"vertical-viewport-lock",mode:"boolean"})],ae.prototype,"verticalViewportLock",void 0);h([p({attribute:"vertical-inset",mode:"boolean"})],ae.prototype,"verticalInset",void 0);h([p({attribute:"vertical-threshold"})],ae.prototype,"verticalThreshold",void 0);h([p({attribute:"vertical-scaling"})],ae.prototype,"verticalScaling",void 0);h([p({attribute:"fixed-placement",mode:"boolean"})],ae.prototype,"fixedPlacement",void 0);h([p({attribute:"auto-update-mode"})],ae.prototype,"autoUpdateMode",void 0);h([k],ae.prototype,"anchorElement",void 0);h([k],ae.prototype,"viewportElement",void 0);h([k],ae.prototype,"initialLayoutComplete",void 0);const sx=(t,e)=>M`
    <template class="${s=>s.circular?"circular":""}">
        <div class="control" part="control" style="${s=>s.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`;let na=class extends fe{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const e=`background-color: var(--badge-fill-${this.fill});`,s=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?e:this.color&&!this.fill?s:`${s} ${e}`}}};h([p({attribute:"fill"})],na.prototype,"fill",void 0);h([p({attribute:"color"})],na.prototype,"color",void 0);h([p({mode:"boolean"})],na.prototype,"circular",void 0);const ix=(t,e)=>M`
    <div role="listitem" class="listitem" part="listitem">
        ${ut(s=>s.href&&s.href.length>0,M`
                ${Hm(t,e)}
            `)}
        ${ut(s=>!s.href,M`
                ${Jt(t,e)}
                <slot></slot>
                ${Qt(t,e)}
            `)}
        ${ut(s=>s.separator,M`
                <span class="separator" part="separator" aria-hidden="true">
                    <slot name="separator">${e.separator||""}</slot>
                </span>
            `)}
    </div>
`;class Vr extends gs{constructor(){super(...arguments),this.separator=!0}}h([k],Vr.prototype,"separator",void 0);st(Vr,rs,Pl);const nx=(t,e)=>M`
    <template role="navigation">
        <div role="list" class="list" part="list">
            <slot
                ${et({property:"slottedBreadcrumbItems",filter:Ii()})}
            ></slot>
        </div>
    </template>
`;class Nm extends fe{slottedBreadcrumbItemsChanged(){if(this.$fastController.isConnected){if(this.slottedBreadcrumbItems===void 0||this.slottedBreadcrumbItems.length===0)return;const e=this.slottedBreadcrumbItems[this.slottedBreadcrumbItems.length-1];this.slottedBreadcrumbItems.forEach(s=>{const i=s===e;this.setItemSeparator(s,i),this.setAriaCurrent(s,i)})}}setItemSeparator(e,s){e instanceof Vr&&(e.separator=!s)}findChildWithHref(e){var s,i;return e.childElementCount>0?e.querySelector("a[href]"):!((s=e.shadowRoot)===null||s===void 0)&&s.childElementCount?(i=e.shadowRoot)===null||i===void 0?void 0:i.querySelector("a[href]"):null}setAriaCurrent(e,s){const i=this.findChildWithHref(e);i===null&&e.hasAttribute("href")&&e instanceof Vr?s?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current"):i!==null&&(s?i.setAttribute("aria-current","page"):i.removeAttribute("aria-current"))}}h([k],Nm.prototype,"slottedBreadcrumbItems",void 0);const ox=(t,e)=>M`
    <button
        class="control"
        part="control"
        ?autofocus="${s=>s.autofocus}"
        ?disabled="${s=>s.disabled}"
        form="${s=>s.formId}"
        formaction="${s=>s.formaction}"
        formenctype="${s=>s.formenctype}"
        formmethod="${s=>s.formmethod}"
        formnovalidate="${s=>s.formnovalidate}"
        formtarget="${s=>s.formtarget}"
        name="${s=>s.name}"
        type="${s=>s.type}"
        value="${s=>s.value}"
        aria-atomic="${s=>s.ariaAtomic}"
        aria-busy="${s=>s.ariaBusy}"
        aria-controls="${s=>s.ariaControls}"
        aria-current="${s=>s.ariaCurrent}"
        aria-describedby="${s=>s.ariaDescribedby}"
        aria-details="${s=>s.ariaDetails}"
        aria-disabled="${s=>s.ariaDisabled}"
        aria-errormessage="${s=>s.ariaErrormessage}"
        aria-expanded="${s=>s.ariaExpanded}"
        aria-flowto="${s=>s.ariaFlowto}"
        aria-haspopup="${s=>s.ariaHaspopup}"
        aria-hidden="${s=>s.ariaHidden}"
        aria-invalid="${s=>s.ariaInvalid}"
        aria-keyshortcuts="${s=>s.ariaKeyshortcuts}"
        aria-label="${s=>s.ariaLabel}"
        aria-labelledby="${s=>s.ariaLabelledby}"
        aria-live="${s=>s.ariaLive}"
        aria-owns="${s=>s.ariaOwns}"
        aria-pressed="${s=>s.ariaPressed}"
        aria-relevant="${s=>s.ariaRelevant}"
        aria-roledescription="${s=>s.ariaRoledescription}"
        ${Re("control")}
    >
        ${Jt(t,e)}
        <span class="content" part="content">
            <slot ${et("defaultSlottedContent")}></slot>
        </span>
        ${Qt(t,e)}
    </button>
`,Cf="form-associated-proxy",If="ElementInternals",Tf=If in window&&"setFormValue"in window[If].prototype,Ff=new WeakMap;function Ei(t){const e=class extends t{constructor(...s){super(...s),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Tf}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const s=this.proxy.labels,i=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),n=s?i.concat(Array.from(s)):i;return Object.freeze(n)}else return On}valueChanged(s,i){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(s,i){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(s,i){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),de.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(s,i){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(s,i){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),de.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!Tf)return null;let s=Ff.get(this);return s||(s=this.attachInternals(),Ff.set(this,s)),s}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach(s=>this.proxy.removeEventListener(s,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(s,i,n){this.elementInternals?this.elementInternals.setValidity(s,i,n):typeof i=="string"&&this.proxy.setCustomValidity(i)}formDisabledCallback(s){this.disabled=s}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var s;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(i=>this.proxy.addEventListener(i,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Cf),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Cf)),(s=this.shadowRoot)===null||s===void 0||s.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var s;this.removeChild(this.proxy),(s=this.shadowRoot)===null||s===void 0||s.removeChild(this.proxySlot)}validate(s){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,s)}setFormValue(s,i){this.elementInternals&&this.elementInternals.setFormValue(s,i||s)}_keypressHandler(s){switch(s.key){case Ri:if(this.form instanceof HTMLFormElement){const i=this.form.querySelector("[type=submit]");i==null||i.click()}break}}stopPropagation(s){s.stopPropagation()}};return p({mode:"boolean"})(e.prototype,"disabled"),p({mode:"fromView",attribute:"value"})(e.prototype,"initialValue"),p({attribute:"current-value"})(e.prototype,"currentValue"),p(e.prototype,"name"),p({mode:"boolean"})(e.prototype,"required"),k(e.prototype,"value"),e}function Su(t){class e extends Ei(t){}class s extends e{constructor(...n){super(n),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(n,o){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),n!==void 0&&this.$emit("change"),this.validate()}currentCheckedChanged(n,o){this.checked=this.currentChecked}updateForm(){const n=this.checked?this.value:null;this.setFormValue(n,n)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return p({attribute:"checked",mode:"boolean"})(s.prototype,"checkedAttribute"),p({attribute:"current-checked",converter:ia})(s.prototype,"currentChecked"),k(s.prototype,"defaultChecked"),k(s.prototype,"checked"),s}class rx extends fe{}class ax extends Ei(rx){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let vs=class extends ax{constructor(){super(...arguments),this.handleClick=e=>{var s;this.disabled&&((s=this.defaultSlottedContent)===null||s===void 0?void 0:s.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),typeof this.form.requestSubmit=="function"?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;(e=this.form)===null||e===void 0||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((e=this.$fastController.definition.shadowOptions)===null||e===void 0)&&e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,s){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),s==="submit"&&this.addEventListener("click",this.handleSubmission),e==="submit"&&this.removeEventListener("click",this.handleSubmission),s==="reset"&&this.addEventListener("click",this.handleFormReset),e==="reset"&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const s=Array.from((e=this.control)===null||e===void 0?void 0:e.children);s&&s.forEach(i=>{i.addEventListener("click",this.handleClick)})}disconnectedCallback(){var e;super.disconnectedCallback();const s=Array.from((e=this.control)===null||e===void 0?void 0:e.children);s&&s.forEach(i=>{i.removeEventListener("click",this.handleClick)})}};h([p({mode:"boolean"})],vs.prototype,"autofocus",void 0);h([p({attribute:"form"})],vs.prototype,"formId",void 0);h([p],vs.prototype,"formaction",void 0);h([p],vs.prototype,"formenctype",void 0);h([p],vs.prototype,"formmethod",void 0);h([p({mode:"boolean"})],vs.prototype,"formnovalidate",void 0);h([p],vs.prototype,"formtarget",void 0);h([p],vs.prototype,"type",void 0);h([k],vs.prototype,"defaultSlottedContent",void 0);class Ml{}h([p({attribute:"aria-expanded"})],Ml.prototype,"ariaExpanded",void 0);h([p({attribute:"aria-pressed"})],Ml.prototype,"ariaPressed",void 0);st(Ml,Xe);st(vs,rs,Ml);class lx{constructor(e){if(this.dayFormat="numeric",this.weekdayFormat="long",this.monthFormat="long",this.yearFormat="numeric",this.date=new Date,e)for(const s in e){const i=e[s];s==="date"?this.date=this.getDateObject(i):this[s]=i}}getDateObject(e){if(typeof e=="string"){const s=e.split(/[/-]/);return s.length<3?new Date:new Date(parseInt(s[2],10),parseInt(s[0],10)-1,parseInt(s[1],10))}else if("day"in e&&"month"in e&&"year"in e){const{day:s,month:i,year:n}=e;return new Date(n,i-1,s)}return e}getDate(e=this.date,s={weekday:this.weekdayFormat,month:this.monthFormat,day:this.dayFormat,year:this.yearFormat},i=this.locale){const n=this.getDateObject(e);if(!n.getTime())return"";const o=Object.assign({timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone},s);return new Intl.DateTimeFormat(i,o).format(n)}getDay(e=this.date.getDate(),s=this.dayFormat,i=this.locale){return this.getDate({month:1,day:e,year:2020},{day:s},i)}getMonth(e=this.date.getMonth()+1,s=this.monthFormat,i=this.locale){return this.getDate({month:e,day:2,year:2020},{month:s},i)}getYear(e=this.date.getFullYear(),s=this.yearFormat,i=this.locale){return this.getDate({month:2,day:2,year:e},{year:s},i)}getWeekday(e=0,s=this.weekdayFormat,i=this.locale){const n=`1-${e+1}-2017`;return this.getDate(n,{weekday:s},i)}getWeekdays(e=this.weekdayFormat,s=this.locale){return Array(7).fill(null).map((i,n)=>this.getWeekday(n,e,s))}}let Es=class extends fe{constructor(){super(...arguments),this.dateFormatter=new lx,this.readonly=!1,this.locale="en-US",this.month=new Date().getMonth()+1,this.year=new Date().getFullYear(),this.dayFormat="numeric",this.weekdayFormat="short",this.monthFormat="long",this.yearFormat="numeric",this.minWeeks=0,this.disabledDates="",this.selectedDates="",this.oneDayInMs=864e5}localeChanged(){this.dateFormatter.locale=this.locale}dayFormatChanged(){this.dateFormatter.dayFormat=this.dayFormat}weekdayFormatChanged(){this.dateFormatter.weekdayFormat=this.weekdayFormat}monthFormatChanged(){this.dateFormatter.monthFormat=this.monthFormat}yearFormatChanged(){this.dateFormatter.yearFormat=this.yearFormat}getMonthInfo(e=this.month,s=this.year){const i=l=>new Date(l.getFullYear(),l.getMonth(),1).getDay(),n=l=>{const c=new Date(l.getFullYear(),l.getMonth()+1,1);return new Date(c.getTime()-this.oneDayInMs).getDate()},o=new Date(s,e-1),r=new Date(s,e),a=new Date(s,e-2);return{length:n(o),month:e,start:i(o),year:s,previous:{length:n(a),month:a.getMonth()+1,start:i(a),year:a.getFullYear()},next:{length:n(r),month:r.getMonth()+1,start:i(r),year:r.getFullYear()}}}getDays(e=this.getMonthInfo(),s=this.minWeeks){s=s>10?10:s;const{start:i,length:n,previous:o,next:r}=e,a=[];let l=1-i;for(;l<n+1||a.length<s||a[a.length-1].length%7!==0;){const{month:c,year:d}=l<1?o:l>n?r:e,u=l<1?o.length+l:l>n?l-n:l,f=`${c}-${u}-${d}`,b=this.dateInString(f,this.disabledDates),w=this.dateInString(f,this.selectedDates),x={day:u,month:c,year:d,disabled:b,selected:w},_=a[a.length-1];a.length===0||_.length%7===0?a.push([x]):_.push(x),l++}return a}dateInString(e,s){const i=s.split(",").map(n=>n.trim());return e=typeof e=="string"?e:`${e.getMonth()+1}-${e.getDate()}-${e.getFullYear()}`,i.some(n=>n===e)}getDayClassNames(e,s){const{day:i,month:n,year:o,disabled:r,selected:a}=e,l=s===`${n}-${i}-${o}`,c=this.month!==n;return["day",l&&"today",c&&"inactive",r&&"disabled",a&&"selected"].filter(Boolean).join(" ")}getWeekdayText(){const e=this.dateFormatter.getWeekdays().map(s=>({text:s}));if(this.weekdayFormat!=="long"){const s=this.dateFormatter.getWeekdays("long");e.forEach((i,n)=>{i.abbr=s[n]})}return e}handleDateSelect(e,s){e.preventDefault,this.$emit("dateselected",s)}handleKeydown(e,s){return e.key===Ri&&this.handleDateSelect(e,s),!0}};h([p({mode:"boolean"})],Es.prototype,"readonly",void 0);h([p],Es.prototype,"locale",void 0);h([p({converter:G})],Es.prototype,"month",void 0);h([p({converter:G})],Es.prototype,"year",void 0);h([p({attribute:"day-format",mode:"fromView"})],Es.prototype,"dayFormat",void 0);h([p({attribute:"weekday-format",mode:"fromView"})],Es.prototype,"weekdayFormat",void 0);h([p({attribute:"month-format",mode:"fromView"})],Es.prototype,"monthFormat",void 0);h([p({attribute:"year-format",mode:"fromView"})],Es.prototype,"yearFormat",void 0);h([p({attribute:"min-weeks",converter:G})],Es.prototype,"minWeeks",void 0);h([p({attribute:"disabled-dates"})],Es.prototype,"disabledDates",void 0);h([p({attribute:"selected-dates"})],Es.prototype,"selectedDates",void 0);const Ca={none:"none",default:"default",sticky:"sticky"},Ui={default:"default",columnHeader:"columnheader",rowHeader:"rowheader"},$r={default:"default",header:"header",stickyHeader:"sticky-header"};class At extends fe{constructor(){super(...arguments),this.rowType=$r.default,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){if(this.rowData!==null&&this.isActiveRow){this.refocusOnLoad=!0;return}}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),this.cellsRepeatBehavior===null&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new _u(e=>e.columnDefinitions,e=>e.activeCellItemTemplate,{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(Eo,this.handleFocusout),this.addEventListener(Oo,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(Eo,this.handleFocusout),this.removeEventListener(Oo,this.handleKeydown)}handleFocusout(e){this.contains(e.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(e){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(e.target),this.$emit("row-focused",this)}handleKeydown(e){if(e.defaultPrevented)return;let s=0;switch(e.key){case an:s=Math.max(0,this.focusColumnIndex-1),this.cellElements[s].focus(),e.preventDefault();break;case ln:s=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[s].focus(),e.preventDefault();break;case di:e.ctrlKey||(this.cellElements[0].focus(),e.preventDefault());break;case ui:e.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),e.preventDefault());break}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===$r.default&&this.cellItemTemplate!==void 0?this.cellItemTemplate:this.rowType===$r.default&&this.cellItemTemplate===void 0?this.defaultCellItemTemplate:this.headerCellItemTemplate!==void 0?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}}h([p({attribute:"grid-template-columns"})],At.prototype,"gridTemplateColumns",void 0);h([p({attribute:"row-type"})],At.prototype,"rowType",void 0);h([k],At.prototype,"rowData",void 0);h([k],At.prototype,"columnDefinitions",void 0);h([k],At.prototype,"cellItemTemplate",void 0);h([k],At.prototype,"headerCellItemTemplate",void 0);h([k],At.prototype,"rowIndex",void 0);h([k],At.prototype,"isActiveRow",void 0);h([k],At.prototype,"activeCellItemTemplate",void 0);h([k],At.prototype,"defaultCellItemTemplate",void 0);h([k],At.prototype,"defaultHeaderCellItemTemplate",void 0);h([k],At.prototype,"cellElements",void 0);function cx(t){const e=t.tagFor(At);return M`
    <${e}
        :rowData="${s=>s}"
        :cellItemTemplate="${(s,i)=>i.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(s,i)=>i.parent.headerCellItemTemplate}"
    ></${e}>
`}const dx=(t,e)=>{const s=cx(t),i=t.tagFor(At);return M`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>i}"
            :defaultRowItemTemplate="${s}"
            ${El({property:"rowElements",filter:Ii("[role=row]")})}
        >
            <slot></slot>
        </template>
    `};class St extends fe{constructor(){super(),this.noTabbing=!1,this.generateHeader=Ca.default,this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(e,s,i)=>{if(this.rowElements.length===0){this.focusRowIndex=0,this.focusColumnIndex=0;return}const n=Math.max(0,Math.min(this.rowElements.length-1,e)),r=this.rowElements[n].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),a=Math.max(0,Math.min(r.length-1,s)),l=r[a];i&&this.scrollHeight!==this.clientHeight&&(n<this.focusRowIndex&&this.scrollTop>0||n>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&l.scrollIntoView({block:"center",inline:"center"}),l.focus()},this.onChildListChange=(e,s)=>{e&&e.length&&(e.forEach(i=>{i.addedNodes.forEach(n=>{n.nodeType===1&&n.getAttribute("role")==="row"&&(n.columnDefinitions=this.columnDefinitions)})}),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,de.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let e=this.gridTemplateColumns;if(e===void 0){if(this.generatedGridTemplateColumns===""&&this.rowElements.length>0){const s=this.rowElements[0];this.generatedGridTemplateColumns=new Array(s.cellElements.length).fill("1fr").join(" ")}e=this.generatedGridTemplateColumns}this.rowElements.forEach((s,i)=>{const n=s;n.rowIndex=i,n.gridTemplateColumns=e,this.columnDefinitionsStale&&(n.columnDefinitions=this.columnDefinitions)}),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(e){let s="";return e.forEach(i=>{s=`${s}${s===""?"":" "}1fr`}),s}noTabbingChanged(){this.$fastController.isConnected&&(this.noTabbing?this.setAttribute("tabIndex","-1"):this.setAttribute("tabIndex",this.contains(document.activeElement)||this===document.activeElement?"-1":"0"))}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){this.columnDefinitions===null&&this.rowsData.length>0&&(this.columnDefinitions=St.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){if(this.columnDefinitions===null){this.generatedGridTemplateColumns="";return}this.generatedGridTemplateColumns=St.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())}headerCellItemTemplateChanged(){this.$fastController.isConnected&&this.generatedHeader!==null&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),this.rowItemTemplate===void 0&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new _u(e=>e.rowsData,e=>e.rowItemTemplate,{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(xf,this.handleFocus),this.addEventListener(Oo,this.handleKeydown),this.addEventListener(Eo,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),de.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(xf,this.handleFocus),this.removeEventListener(Oo,this.handleKeydown),this.removeEventListener(Eo,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(e){this.isUpdatingFocus=!0;const s=e.target;this.focusRowIndex=this.rowElements.indexOf(s),this.focusColumnIndex=s.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(e){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(e){(e.relatedTarget===null||!this.contains(e.relatedTarget))&&this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(e){if(e.defaultPrevented)return;let s;const i=this.rowElements.length-1,n=this.offsetHeight+this.scrollTop,o=this.rowElements[i];switch(e.key){case Rs:e.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case Ds:e.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case Q0:if(e.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex===0){this.focusOnCell(0,this.focusColumnIndex,!1);return}for(s=this.focusRowIndex-1,s;s>=0;s--){const r=this.rowElements[s];if(r.offsetTop<this.scrollTop){this.scrollTop=r.offsetTop+r.clientHeight-this.clientHeight;break}}this.focusOnCell(s,this.focusColumnIndex,!1);break;case X0:if(e.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=i||o.offsetTop+o.offsetHeight<=n){this.focusOnCell(i,this.focusColumnIndex,!1);return}for(s=this.focusRowIndex+1,s;s<=i;s++){const r=this.rowElements[s];if(r.offsetTop+r.offsetHeight>n){let a=0;this.generateHeader===Ca.sticky&&this.generatedHeader!==null&&(a=this.generatedHeader.clientHeight),this.scrollTop=r.offsetTop-a;break}}this.focusOnCell(s,this.focusColumnIndex,!1);break;case di:e.ctrlKey&&(e.preventDefault(),this.focusOnCell(0,0,!0));break;case ui:e.ctrlKey&&this.columnDefinitions!==null&&(e.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0));break}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||this.pendingFocusUpdate===!1&&(this.pendingFocusUpdate=!0,de.queueUpdate(()=>this.updateFocus()))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(this.generatedHeader!==null&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),this.generateHeader!==Ca.none&&this.rowsData.length>0){const e=document.createElement(this.rowElementTag);this.generatedHeader=e,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===Ca.sticky?$r.stickyHeader:$r.header,(this.firstChild!==null||this.rowsPlaceholder!==null)&&this.insertBefore(e,this.firstChild!==null?this.firstChild:this.rowsPlaceholder);return}}}St.generateColumns=t=>Object.getOwnPropertyNames(t).map((e,s)=>({columnDataKey:e,gridColumn:`${s}`}));h([p({attribute:"no-tabbing",mode:"boolean"})],St.prototype,"noTabbing",void 0);h([p({attribute:"generate-header"})],St.prototype,"generateHeader",void 0);h([p({attribute:"grid-template-columns"})],St.prototype,"gridTemplateColumns",void 0);h([k],St.prototype,"rowsData",void 0);h([k],St.prototype,"columnDefinitions",void 0);h([k],St.prototype,"rowItemTemplate",void 0);h([k],St.prototype,"cellItemTemplate",void 0);h([k],St.prototype,"headerCellItemTemplate",void 0);h([k],St.prototype,"focusRowIndex",void 0);h([k],St.prototype,"focusColumnIndex",void 0);h([k],St.prototype,"defaultRowItemTemplate",void 0);h([k],St.prototype,"rowElementTag",void 0);h([k],St.prototype,"rowElements",void 0);const ux=M`
    <template>
        ${t=>t.rowData===null||t.columnDefinition===null||t.columnDefinition.columnDataKey===null?null:t.rowData[t.columnDefinition.columnDataKey]}
    </template>
`,hx=M`
    <template>
        ${t=>t.columnDefinition===null?null:t.columnDefinition.title===void 0?t.columnDefinition.columnDataKey:t.columnDefinition.title}
    </template>
`;class Oi extends fe{constructor(){super(...arguments),this.cellType=Ui.default,this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(e,s){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var e;super.connectedCallback(),this.addEventListener(wf,this.handleFocusin),this.addEventListener(Eo,this.handleFocusout),this.addEventListener(Oo,this.handleKeydown),this.style.gridColumn=`${((e=this.columnDefinition)===null||e===void 0?void 0:e.gridColumn)===void 0?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(wf,this.handleFocusin),this.removeEventListener(Eo,this.handleFocusout),this.removeEventListener(Oo,this.handleKeydown),this.disconnectCellView()}handleFocusin(e){if(!this.isActiveCell){switch(this.isActiveCell=!0,this.cellType){case Ui.columnHeader:if(this.columnDefinition!==null&&this.columnDefinition.headerCellInternalFocusQueue!==!0&&typeof this.columnDefinition.headerCellFocusTargetCallback=="function"){const s=this.columnDefinition.headerCellFocusTargetCallback(this);s!==null&&s.focus()}break;default:if(this.columnDefinition!==null&&this.columnDefinition.cellInternalFocusQueue!==!0&&typeof this.columnDefinition.cellFocusTargetCallback=="function"){const s=this.columnDefinition.cellFocusTargetCallback(this);s!==null&&s.focus()}break}this.$emit("cell-focused",this)}}handleFocusout(e){this!==document.activeElement&&!this.contains(document.activeElement)&&(this.isActiveCell=!1)}handleKeydown(e){if(!(e.defaultPrevented||this.columnDefinition===null||this.cellType===Ui.default&&this.columnDefinition.cellInternalFocusQueue!==!0||this.cellType===Ui.columnHeader&&this.columnDefinition.headerCellInternalFocusQueue!==!0))switch(e.key){case Ri:case Z0:if(this.contains(document.activeElement)&&document.activeElement!==this)return;switch(this.cellType){case Ui.columnHeader:if(this.columnDefinition.headerCellFocusTargetCallback!==void 0){const s=this.columnDefinition.headerCellFocusTargetCallback(this);s!==null&&s.focus(),e.preventDefault()}break;default:if(this.columnDefinition.cellFocusTargetCallback!==void 0){const s=this.columnDefinition.cellFocusTargetCallback(this);s!==null&&s.focus(),e.preventDefault()}break}break;case Yo:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),e.preventDefault());break}}updateCellView(){if(this.disconnectCellView(),this.columnDefinition!==null)switch(this.cellType){case Ui.columnHeader:this.columnDefinition.headerCellTemplate!==void 0?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=hx.render(this,this);break;case void 0:case Ui.rowHeader:case Ui.default:this.columnDefinition.cellTemplate!==void 0?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=ux.render(this,this);break}}disconnectCellView(){this.customCellView!==null&&(this.customCellView.dispose(),this.customCellView=null)}}h([p({attribute:"cell-type"})],Oi.prototype,"cellType",void 0);h([p({attribute:"grid-column"})],Oi.prototype,"gridColumn",void 0);h([k],Oi.prototype,"rowData",void 0);h([k],Oi.prototype,"columnDefinition",void 0);function fx(t){const e=t.tagFor(Oi);return M`
    <${e}
        cell-type="${s=>s.isRowHeader?"rowheader":void 0}"
        grid-column="${(s,i)=>i.index+1}"
        :rowData="${(s,i)=>i.parent.rowData}"
        :columnDefinition="${s=>s}"
    ></${e}>
`}function px(t){const e=t.tagFor(Oi);return M`
    <${e}
        cell-type="columnheader"
        grid-column="${(s,i)=>i.index+1}"
        :columnDefinition="${s=>s}"
    ></${e}>
`}const mx=(t,e)=>{const s=fx(t),i=px(t);return M`
        <template
            role="row"
            class="${n=>n.rowType!=="default"?n.rowType:""}"
            :defaultCellItemTemplate="${s}"
            :defaultHeaderCellItemTemplate="${i}"
            ${El({property:"cellElements",filter:Ii('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${et("slottedCellElements")}></slot>
        </template>
    `},gx=(t,e)=>M`
        <template
            tabindex="-1"
            role="${s=>!s.cellType||s.cellType==="default"?"gridcell":s.cellType}"
            class="
            ${s=>s.cellType==="columnheader"?"column-header":s.cellType==="rowheader"?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `,vx=M`
    <div
        class="title"
        part="title"
        aria-label="${t=>t.dateFormatter.getDate(`${t.month}-2-${t.year}`,{month:"long",year:"numeric"})}"
    >
        <span part="month">
            ${t=>t.dateFormatter.getMonth(t.month)}
        </span>
        <span part="year">${t=>t.dateFormatter.getYear(t.year)}</span>
    </div>
`,bx=t=>{const e=t.tagFor(Oi);return M`
        <${e}
            class="week-day"
            part="week-day"
            tabindex="-1"
            grid-column="${(s,i)=>i.index+1}"
            abbr="${s=>s.abbr}"
        >
            ${s=>s.text}
        </${e}>
    `},yx=(t,e)=>{const s=t.tagFor(Oi);return M`
        <${s}
            class="${(i,n)=>n.parentContext.parent.getDayClassNames(i,e)}"
            part="day"
            tabindex="-1"
            role="gridcell"
            grid-column="${(i,n)=>n.index+1}"
            @click="${(i,n)=>n.parentContext.parent.handleDateSelect(n.event,i)}"
            @keydown="${(i,n)=>n.parentContext.parent.handleKeydown(n.event,i)}"
            aria-label="${(i,n)=>n.parentContext.parent.dateFormatter.getDate(`${i.month}-${i.day}-${i.year}`,{month:"long",day:"numeric"})}"
        >
            <div
                class="date"
                part="${i=>e===`${i.month}-${i.day}-${i.year}`?"today":"date"}"
            >
                ${(i,n)=>n.parentContext.parent.dateFormatter.getDay(i.day)}
            </div>
            <slot name="${i=>i.month}-${i=>i.day}-${i=>i.year}"></slot>
        </${s}>
    `},xx=(t,e)=>{const s=t.tagFor(At);return M`
        <${s}
            class="week"
            part="week"
            role="row"
            role-type="default"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
        ${yo(i=>i,yx(t,e),{positioning:!0})}
        </${s}>
    `},wx=(t,e)=>{const s=t.tagFor(St),i=t.tagFor(At);return M`
    <${s} class="days interact" part="days" generate-header="none">
        <${i}
            class="week-days"
            part="week-days"
            role="row"
            row-type="header"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
            ${yo(n=>n.getWeekdayText(),bx(t),{positioning:!0})}
        </${i}>
        ${yo(n=>n.getDays(),xx(t,e))}
    </${s}>
`},$x=t=>M`
        <div class="days" part="days">
            <div class="week-days" part="week-days">
                ${yo(e=>e.getWeekdayText(),M`
                        <div class="week-day" part="week-day" abbr="${e=>e.abbr}">
                            ${e=>e.text}
                        </div>
                    `)}
            </div>
            ${yo(e=>e.getDays(),M`
                    <div class="week">
                        ${yo(e=>e,M`
                                <div
                                    class="${(e,s)=>s.parentContext.parent.getDayClassNames(e,t)}"
                                    part="day"
                                    aria-label="${(e,s)=>s.parentContext.parent.dateFormatter.getDate(`${e.month}-${e.day}-${e.year}`,{month:"long",day:"numeric"})}"
                                >
                                    <div
                                        class="date"
                                        part="${e=>t===`${e.month}-${e.day}-${e.year}`?"today":"date"}"
                                    >
                                        ${(e,s)=>s.parentContext.parent.dateFormatter.getDay(e.day)}
                                    </div>
                                    <slot
                                        name="${e=>e.month}-${e=>e.day}-${e=>e.year}"
                                    ></slot>
                                </div>
                            `)}
                    </div>
                `)}
        </div>
    `,_x=(t,e)=>{var s;const i=new Date,n=`${i.getMonth()+1}-${i.getDate()}-${i.getFullYear()}`;return M`
        <template>
            ${T0}
            ${e.title instanceof Function?e.title(t,e):(s=e.title)!==null&&s!==void 0?s:""}
            <slot></slot>
            ${ut(o=>o.readonly,$x(n),wx(t,n))}
            ${I0}
        </template>
    `},kx=(t,e)=>M`
    <slot></slot>
`;let zm=class extends fe{};const Sx=(t,e)=>M`
    <template
        role="checkbox"
        aria-checked="${s=>s.checked}"
        aria-required="${s=>s.required}"
        aria-disabled="${s=>s.disabled}"
        aria-readonly="${s=>s.readOnly}"
        tabindex="${s=>s.disabled?null:0}"
        @keypress="${(s,i)=>s.keypressHandler(i.event)}"
        @click="${(s,i)=>s.clickHandler(i.event)}"
        class="${s=>s.readOnly?"readonly":""} ${s=>s.checked?"checked":""} ${s=>s.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${e.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${e.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${s=>s.defaultSlottedNodes&&s.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${et("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class Cx extends fe{}class Ix extends Su(Cx){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Ll extends Ix{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{if(!this.readOnly)switch(e.key){case Un:this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked;break}},this.clickHandler=e=>{!this.disabled&&!this.readOnly&&(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}h([p({attribute:"readonly",mode:"boolean"})],Ll.prototype,"readOnly",void 0);h([k],Ll.prototype,"defaultSlottedNodes",void 0);h([k],Ll.prototype,"indeterminate",void 0);function Bm(t){return Ro(t)&&(t.getAttribute("role")==="option"||t instanceof HTMLOptionElement)}class hi extends fe{constructor(e,s,i,n){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),s&&(this.initialValue=s),i&&(this.defaultSelected=i),n&&(this.selected=n),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,s){if(typeof s=="boolean"){this.ariaChecked=s?"true":"false";return}this.ariaChecked=null}contentChanged(e,s){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,s){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,s){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return(e=this.value)!==null&&e!==void 0?e:this.text}get text(){var e,s;return(s=(e=this.textContent)===null||e===void 0?void 0:e.replace(/\s+/g," ").trim())!==null&&s!==void 0?s:""}set value(e){const s=`${e??""}`;this._value=s,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=s),le.notify(this,"value")}get value(){var e;return le.track(this,"value"),(e=this._value)!==null&&e!==void 0?e:this.text}get form(){return this.proxy?this.proxy.form:null}}h([k],hi.prototype,"checked",void 0);h([k],hi.prototype,"content",void 0);h([k],hi.prototype,"defaultSelected",void 0);h([p({mode:"boolean"})],hi.prototype,"disabled",void 0);h([p({attribute:"selected",mode:"boolean"})],hi.prototype,"selectedAttribute",void 0);h([k],hi.prototype,"selected",void 0);h([p({attribute:"value",mode:"fromView"})],hi.prototype,"initialValue",void 0);class Wo{}h([k],Wo.prototype,"ariaChecked",void 0);h([k],Wo.prototype,"ariaPosInSet",void 0);h([k],Wo.prototype,"ariaSelected",void 0);h([k],Wo.prototype,"ariaSetSize",void 0);st(Wo,Xe);st(hi,rs,Wo);let as=class Za extends fe{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return(e=this.selectedOptions[0])!==null&&e!==void 0?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(e=>e.disabled)}get length(){var e,s;return(s=(e=this.options)===null||e===void 0?void 0:e.length)!==null&&s!==void 0?s:0}get options(){return le.track(this,"options"),this._options}set options(e){this._options=e,le.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){const s=e.target.closest("option,[role=option]");if(s&&!s.disabled)return this.selectedIndex=this.options.indexOf(s),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&e!==null&&(e.focus(),requestAnimationFrame(()=>{e.scrollIntoView({block:"nearest"})}))}focusinHandler(e){!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),s=new RegExp(`^${e}`,"gi");return this.options.filter(i=>i.text.trim().match(s))}getSelectableIndex(e=this.selectedIndex,s){const i=e>s?-1:e<s?1:0,n=e+i;let o=null;switch(i){case-1:{o=this.options.reduceRight((r,a,l)=>!r&&!a.disabled&&l<n?a:r,o);break}case 1:{o=this.options.reduce((r,a,l)=>!r&&!a.disabled&&l>n?a:r,o);break}}return this.options.indexOf(o)}handleChange(e,s){switch(s){case"selected":{Za.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions();break}}}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,Za.TYPE_AHEAD_TIMEOUT_MS),!(e.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;const s=e.key;switch(s){case di:{e.shiftKey||(e.preventDefault(),this.selectFirstOption());break}case Ds:{e.shiftKey||(e.preventDefault(),this.selectNextOption());break}case Rs:{e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break}case ui:{e.preventDefault(),this.selectLastOption();break}case Ol:return this.focusAndScrollOptionIntoView(),!0;case Ri:case Yo:return!0;case Un:if(this.typeaheadExpired)return!0;default:return s.length===1&&this.handleTypeAhead(`${s}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,s){this.ariaMultiSelectable=s?"true":null}selectedIndexChanged(e,s){var i;if(!this.hasSelectableOptions){this.selectedIndex=-1;return}if(!((i=this.options[this.selectedIndex])===null||i===void 0)&&i.disabled&&typeof e=="number"){const n=this.getSelectableIndex(e,s),o=n>-1?n:e;this.selectedIndex=o,s===o&&this.selectedIndexChanged(s,o);return}this.setSelectedOptions()}selectedOptionsChanged(e,s){var i;const n=s.filter(Za.slottedOptionFilter);(i=this.options)===null||i===void 0||i.forEach(o=>{const r=le.getNotifier(o);r.unsubscribe(this,"selected"),o.selected=n.includes(o),r.subscribe(this,"selected")})}selectFirstOption(){var e,s;this.disabled||(this.selectedIndex=(s=(e=this.options)===null||e===void 0?void 0:e.findIndex(i=>!i.disabled))!==null&&s!==void 0?s:-1)}selectLastOption(){this.disabled||(this.selectedIndex=U0(this.options,e=>!e.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,s;this.selectedIndex=(s=(e=this.options)===null||e===void 0?void 0:e.findIndex(i=>i.defaultSelected))!==null&&s!==void 0?s:-1}setSelectedOptions(){var e,s,i;!((e=this.options)===null||e===void 0)&&e.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=(i=(s=this.firstSelectedOption)===null||s===void 0?void 0:s.id)!==null&&i!==void 0?i:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,s){this.options=s.reduce((n,o)=>(Bm(o)&&n.push(o),n),[]);const i=`${this.options.length}`;this.options.forEach((n,o)=>{n.id||(n.id=Lr("option-")),n.ariaPosInSet=`${o+1}`,n.ariaSetSize=i}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,s){if(this.$fastController.isConnected){const i=this.getTypeaheadMatches();if(i.length){const n=this.options.indexOf(i[0]);n>-1&&(this.selectedIndex=n)}this.typeaheadExpired=!1}}};as.slottedOptionFilter=t=>Bm(t)&&!t.hidden;as.TYPE_AHEAD_TIMEOUT_MS=1e3;h([p({mode:"boolean"})],as.prototype,"disabled",void 0);h([k],as.prototype,"selectedIndex",void 0);h([k],as.prototype,"selectedOptions",void 0);h([k],as.prototype,"slottedOptions",void 0);h([k],as.prototype,"typeaheadBuffer",void 0);class pn{}h([k],pn.prototype,"ariaActiveDescendant",void 0);h([k],pn.prototype,"ariaDisabled",void 0);h([k],pn.prototype,"ariaExpanded",void 0);h([k],pn.prototype,"ariaMultiSelectable",void 0);st(pn,Xe);st(as,pn);const xo={above:"above",below:"below"};class Tx extends as{}class Fx extends Ei(Tx){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const Ia={inline:"inline",list:"list",both:"both",none:"none"};let Ai=class extends Fx{constructor(){super(...arguments),this._value="",this.filteredOptions=[],this.filter="",this.forcedPosition=!1,this.listboxId=Lr("listbox-"),this.maxHeight=0,this.open=!1}formResetCallback(){super.formResetCallback(),this.setDefaultSelectedOption(),this.updateValue()}validate(){super.validate(this.control)}get isAutocompleteInline(){return this.autocomplete===Ia.inline||this.isAutocompleteBoth}get isAutocompleteList(){return this.autocomplete===Ia.list||this.isAutocompleteBoth}get isAutocompleteBoth(){return this.autocomplete===Ia.both}openChanged(){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),de.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}get options(){return le.track(this,"options"),this.filteredOptions.length?this.filteredOptions:this._options}set options(e){this._options=e,le.notify(this,"options")}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}positionChanged(e,s){this.positionAttribute=s,this.setPositioning()}get value(){return le.track(this,"value"),this._value}set value(e){var s,i,n;const o=`${this._value}`;if(this.$fastController.isConnected&&this.options){const r=this.options.findIndex(c=>c.text.toLowerCase()===e.toLowerCase()),a=(s=this.options[this.selectedIndex])===null||s===void 0?void 0:s.text,l=(i=this.options[r])===null||i===void 0?void 0:i.text;this.selectedIndex=a!==l?r:this.selectedIndex,e=((n=this.firstSelectedOption)===null||n===void 0?void 0:n.text)||e}o!==e&&(this._value=e,super.valueChanged(o,e),le.notify(this,"value"))}clickHandler(e){if(!this.disabled){if(this.open){const s=e.target.closest("option,[role=option]");if(!s||s.disabled)return;this.selectedOptions=[s],this.control.value=s.text,this.clearSelectionRange(),this.updateValue(!0)}return this.open=!this.open,this.open&&this.control.focus(),!0}}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.value&&(this.initialValue=this.value)}disabledChanged(e,s){super.disabledChanged&&super.disabledChanged(e,s),this.ariaDisabled=this.disabled?"true":"false"}filterOptions(){(!this.autocomplete||this.autocomplete===Ia.none)&&(this.filter="");const e=this.filter.toLowerCase();this.filteredOptions=this._options.filter(s=>s.text.toLowerCase().startsWith(this.filter.toLowerCase())),this.isAutocompleteList&&(!this.filteredOptions.length&&!e&&(this.filteredOptions=this._options),this._options.forEach(s=>{s.hidden=!this.filteredOptions.includes(s)}))}focusAndScrollOptionIntoView(){this.contains(document.activeElement)&&(this.control.focus(),this.firstSelectedOption&&requestAnimationFrame(()=>{var e;(e=this.firstSelectedOption)===null||e===void 0||e.scrollIntoView({block:"nearest"})}))}focusoutHandler(e){if(this.syncValue(),!this.open)return!0;const s=e.relatedTarget;if(this.isSameNode(s)){this.focus();return}(!this.options||!this.options.includes(s))&&(this.open=!1)}inputHandler(e){if(this.filter=this.control.value,this.filterOptions(),this.isAutocompleteInline||(this.selectedIndex=this.options.map(s=>s.text).indexOf(this.control.value)),e.inputType.includes("deleteContent")||!this.filter.length)return!0;this.isAutocompleteList&&!this.open&&(this.open=!0),this.isAutocompleteInline&&(this.filteredOptions.length?(this.selectedOptions=[this.filteredOptions[0]],this.selectedIndex=this.options.indexOf(this.firstSelectedOption),this.setInlineSelection()):this.selectedIndex=-1)}keydownHandler(e){const s=e.key;if(e.ctrlKey||e.shiftKey)return!0;switch(s){case"Enter":{this.syncValue(),this.isAutocompleteInline&&(this.filter=this.value),this.open=!1,this.clearSelectionRange();break}case"Escape":{if(this.isAutocompleteInline||(this.selectedIndex=-1),this.open){this.open=!1;break}this.value="",this.control.value="",this.filter="",this.filterOptions();break}case"Tab":{if(this.setInputToSelection(),!this.open)return!0;e.preventDefault(),this.open=!1;break}case"ArrowUp":case"ArrowDown":{if(this.filterOptions(),!this.open){this.open=!0;break}this.filteredOptions.length>0&&super.keydownHandler(e),this.isAutocompleteInline&&this.setInlineSelection();break}default:return!0}}keyupHandler(e){switch(e.key){case"ArrowLeft":case"ArrowRight":case"Backspace":case"Delete":case"Home":case"End":{this.filter=this.control.value,this.selectedIndex=-1,this.filterOptions();break}}}selectedIndexChanged(e,s){if(this.$fastController.isConnected){if(s=Al(-1,this.options.length-1,s),s!==this.selectedIndex){this.selectedIndex=s;return}super.selectedIndexChanged(e,s)}}selectPreviousOption(){!this.disabled&&this.selectedIndex>=0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){if(this.$fastController.isConnected&&this.options){const e=this.options.findIndex(s=>s.getAttribute("selected")!==null||s.selected);this.selectedIndex=e,!this.dirtyValue&&this.firstSelectedOption&&(this.value=this.firstSelectedOption.text),this.setSelectedOptions()}}setInputToSelection(){this.firstSelectedOption&&(this.control.value=this.firstSelectedOption.text,this.control.focus())}setInlineSelection(){this.firstSelectedOption&&(this.setInputToSelection(),this.control.setSelectionRange(this.filter.length,this.control.value.length,"backward"))}syncValue(){var e;const s=this.selectedIndex>-1?(e=this.firstSelectedOption)===null||e===void 0?void 0:e.text:this.control.value;this.updateValue(this.value!==s)}setPositioning(){const e=this.getBoundingClientRect(),i=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>i?xo.above:xo.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===xo.above?~~e.top:~~i}selectedOptionsChanged(e,s){this.$fastController.isConnected&&this._options.forEach(i=>{i.selected=s.includes(i)})}slottedOptionsChanged(e,s){super.slottedOptionsChanged(e,s),this.updateValue()}updateValue(e){var s;this.$fastController.isConnected&&(this.value=((s=this.firstSelectedOption)===null||s===void 0?void 0:s.text)||this.control.value,this.control.value=this.value),e&&this.$emit("change")}clearSelectionRange(){const e=this.control.value.length;this.control.setSelectionRange(e,e)}};h([p({attribute:"autocomplete",mode:"fromView"})],Ai.prototype,"autocomplete",void 0);h([k],Ai.prototype,"maxHeight",void 0);h([p({attribute:"open",mode:"boolean"})],Ai.prototype,"open",void 0);h([p],Ai.prototype,"placeholder",void 0);h([p({attribute:"position"})],Ai.prototype,"positionAttribute",void 0);h([k],Ai.prototype,"position",void 0);class Vl{}h([k],Vl.prototype,"ariaAutoComplete",void 0);h([k],Vl.prototype,"ariaControls",void 0);st(Vl,pn);st(Ai,rs,Vl);const Dx=(t,e)=>M`
    <template
        aria-disabled="${s=>s.ariaDisabled}"
        autocomplete="${s=>s.autocomplete}"
        class="${s=>s.open?"open":""} ${s=>s.disabled?"disabled":""} ${s=>s.position}"
        ?open="${s=>s.open}"
        tabindex="${s=>s.disabled?null:"0"}"
        @click="${(s,i)=>s.clickHandler(i.event)}"
        @focusout="${(s,i)=>s.focusoutHandler(i.event)}"
        @keydown="${(s,i)=>s.keydownHandler(i.event)}"
    >
        <div class="control" part="control">
            ${Jt(t,e)}
            <slot name="control">
                <input
                    aria-activedescendant="${s=>s.open?s.ariaActiveDescendant:null}"
                    aria-autocomplete="${s=>s.ariaAutoComplete}"
                    aria-controls="${s=>s.ariaControls}"
                    aria-disabled="${s=>s.ariaDisabled}"
                    aria-expanded="${s=>s.ariaExpanded}"
                    aria-haspopup="listbox"
                    class="selected-value"
                    part="selected-value"
                    placeholder="${s=>s.placeholder}"
                    role="combobox"
                    type="text"
                    ?disabled="${s=>s.disabled}"
                    :value="${s=>s.value}"
                    @input="${(s,i)=>s.inputHandler(i.event)}"
                    @keyup="${(s,i)=>s.keyupHandler(i.event)}"
                    ${Re("control")}
                />
                <div class="indicator" part="indicator" aria-hidden="true">
                    <slot name="indicator">
                        ${e.indicator||""}
                    </slot>
                </div>
            </slot>
            ${Qt(t,e)}
        </div>
        <div
            class="listbox"
            id="${s=>s.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${s=>s.disabled}"
            ?hidden="${s=>!s.open}"
            ${Re("listbox")}
        >
            <slot
                ${et({filter:as.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`;function ll(t){const e=t.parentElement;if(e)return e;{const s=t.getRootNode();if(s.host instanceof HTMLElement)return s.host}return null}function Rx(t,e){let s=e;for(;s!==null;){if(s===t)return!0;s=ll(s)}return!1}const xi=document.createElement("div");function Ex(t){return t instanceof Rl}class Cu{setProperty(e,s){de.queueUpdate(()=>this.target.setProperty(e,s))}removeProperty(e){de.queueUpdate(()=>this.target.removeProperty(e))}}class Ox extends Cu{constructor(e){super();const s=new CSSStyleSheet;this.target=s.cssRules[s.insertRule(":host{}")].style,e.$fastController.addStyles(Xt.create([s]))}}class Ax extends Cu{constructor(){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}class Px extends Cu{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:e}=this.style;if(e){const s=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[s].style}}}class jm{constructor(e){this.store=new Map,this.target=null;const s=e.$fastController;this.style=document.createElement("style"),s.addStyles(this.style),le.getNotifier(s).subscribe(this,"isConnected"),this.handleChange(s,"isConnected")}targetChanged(){if(this.target!==null)for(const[e,s]of this.store.entries())this.target.setProperty(e,s)}setProperty(e,s){this.store.set(e,s),de.queueUpdate(()=>{this.target!==null&&this.target.setProperty(e,s)})}removeProperty(e){this.store.delete(e),de.queueUpdate(()=>{this.target!==null&&this.target.removeProperty(e)})}handleChange(e,s){const{sheet:i}=this.style;if(i){const n=i.insertRule(":host{}",i.cssRules.length);this.target=i.cssRules[n].style}else this.target=null}}h([k],jm.prototype,"target",void 0);class Mx{constructor(e){this.target=e.style}setProperty(e,s){de.queueUpdate(()=>this.target.setProperty(e,s))}removeProperty(e){de.queueUpdate(()=>this.target.removeProperty(e))}}class It{setProperty(e,s){It.properties[e]=s;for(const i of It.roots.values())go.getOrCreate(It.normalizeRoot(i)).setProperty(e,s)}removeProperty(e){delete It.properties[e];for(const s of It.roots.values())go.getOrCreate(It.normalizeRoot(s)).removeProperty(e)}static registerRoot(e){const{roots:s}=It;if(!s.has(e)){s.add(e);const i=go.getOrCreate(this.normalizeRoot(e));for(const n in It.properties)i.setProperty(n,It.properties[n])}}static unregisterRoot(e){const{roots:s}=It;if(s.has(e)){s.delete(e);const i=go.getOrCreate(It.normalizeRoot(e));for(const n in It.properties)i.removeProperty(n)}}static normalizeRoot(e){return e===xi?document:e}}It.roots=new Set;It.properties={};const ed=new WeakMap,Lx=de.supportsAdoptedStyleSheets?Ox:jm,go=Object.freeze({getOrCreate(t){if(ed.has(t))return ed.get(t);let e;return t===xi?e=new It:t instanceof Document?e=de.supportsAdoptedStyleSheets?new Ax:new Px:Ex(t)?e=new Lx(t):e=new Mx(t),ed.set(t,e),e}});class qt extends $u{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,e.cssCustomPropertyName!==null&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=qt.uniqueId(),qt.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new qt({name:typeof e=="string"?e:e.name,cssCustomPropertyName:typeof e=="string"?e:e.cssCustomPropertyName===void 0?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return typeof e.cssCustomProperty=="string"}static isDerivedDesignTokenValue(e){return typeof e=="function"}static getTokenById(e){return qt.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const s=vt.getOrCreate(e).get(this);if(s!==void 0)return s;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,s){return this._appliedTo.add(e),s instanceof qt&&(s=this.alias(s)),vt.getOrCreate(e).set(this,s),this}deleteValueFor(e){return this._appliedTo.delete(e),vt.existsFor(e)&&vt.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(xi,e),this}subscribe(e,s){const i=this.getOrCreateSubscriberSet(s);s&&!vt.existsFor(s)&&vt.getOrCreate(s),i.has(e)||i.add(e)}unsubscribe(e,s){const i=this.subscribers.get(s||this);i&&i.has(e)&&i.delete(e)}notify(e){const s=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach(i=>i.handleChange(s)),this.subscribers.has(e)&&this.subscribers.get(e).forEach(i=>i.handleChange(s))}alias(e){return s=>e.getValueFor(s)}}qt.uniqueId=(()=>{let t=0;return()=>(t++,t.toString(16))})();qt.tokensById=new Map;class Vx{startReflection(e,s){e.subscribe(this,s),this.handleChange({token:e,target:s})}stopReflection(e,s){e.unsubscribe(this,s),this.remove(e,s)}handleChange(e){const{token:s,target:i}=e;this.add(s,i)}add(e,s){go.getOrCreate(s).setProperty(e.cssCustomProperty,this.resolveCSSValue(vt.getOrCreate(s).get(e)))}remove(e,s){go.getOrCreate(s).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&typeof e.createCSS=="function"?e.createCSS():e}}class Hx{constructor(e,s,i){this.source=e,this.token=s,this.node=i,this.dependencies=new Set,this.observer=le.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,xr))}}class Nx{constructor(){this.values=new Map}set(e,s){this.values.get(e)!==s&&(this.values.set(e,s),le.getNotifier(this).notify(e.id))}get(e){return le.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e)}all(){return this.values.entries()}}const ar=new WeakMap,lr=new WeakMap;class vt{constructor(e){this.target=e,this.store=new Nx,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(s,i)=>{const n=qt.getTokenById(i);if(n&&(n.notify(this.target),qt.isCSSDesignToken(n))){const o=this.parent,r=this.isReflecting(n);if(o){const a=o.get(n),l=s.get(n);a!==l&&!r?this.reflectToCSS(n):a===l&&r&&this.stopReflectToCSS(n)}else r||this.reflectToCSS(n)}}},ar.set(e,this),le.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof Rl?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return ar.get(e)||new vt(e)}static existsFor(e){return ar.has(e)}static findParent(e){if(xi!==e.target){let s=ll(e.target);for(;s!==null;){if(ar.has(s))return ar.get(s);s=ll(s)}return vt.getOrCreate(xi)}return null}static findClosestAssignedNode(e,s){let i=s;do{if(i.has(e))return i;i=i.parent?i.parent:i.target!==xi?vt.getOrCreate(xi):null}while(i!==null);return null}get parent(){return lr.get(this)||null}has(e){return this.assignedValues.has(e)}get(e){const s=this.store.get(e);if(s!==void 0)return s;const i=this.getRaw(e);if(i!==void 0)return this.hydrate(e,i),this.get(e)}getRaw(e){var s;return this.assignedValues.has(e)?this.assignedValues.get(e):(s=vt.findClosestAssignedNode(e,this))===null||s===void 0?void 0:s.getRaw(e)}set(e,s){qt.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,s),qt.isDerivedDesignTokenValue(s)?this.setupBindingObserver(e,s):this.store.set(e,s)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const s=this.getRaw(e);s?this.hydrate(e,s):this.store.delete(e)}bind(){const e=vt.findParent(this);e&&e.appendChild(this);for(const s of this.assignedValues.keys())s.notify(this.target)}unbind(){this.parent&&lr.get(this).removeChild(this)}appendChild(e){e.parent&&lr.get(e).removeChild(e);const s=this.children.filter(i=>e.contains(i));lr.set(e,this),this.children.push(e),s.forEach(i=>e.appendChild(i)),le.getNotifier(this.store).subscribe(e);for(const[i,n]of this.store.all())e.hydrate(i,this.bindingObservers.has(i)?this.getRaw(i):n)}removeChild(e){const s=this.children.indexOf(e);return s!==-1&&this.children.splice(s,1),le.getNotifier(this.store).unsubscribe(e),e.parent===this?lr.delete(e):!1}contains(e){return Rx(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),vt.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),vt.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,s){const i=qt.getTokenById(s);i&&this.hydrate(i,this.getRaw(i))}hydrate(e,s){if(!this.has(e)){const i=this.bindingObservers.get(e);qt.isDerivedDesignTokenValue(s)?i?i.source!==s&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,s)):this.setupBindingObserver(e,s):(i&&this.tearDownBindingObserver(e),this.store.set(e,s))}}setupBindingObserver(e,s){const i=new Hx(s,e,this);return this.bindingObservers.set(e,i),i}tearDownBindingObserver(e){return this.bindingObservers.has(e)?(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0):!1}}vt.cssCustomPropertyReflector=new Vx;h([k],vt.prototype,"children",void 0);function zx(t){return qt.from(t)}const Be=Object.freeze({create:zx,notifyConnection(t){return!t.isConnected||!vt.existsFor(t)?!1:(vt.getOrCreate(t).bind(),!0)},notifyDisconnection(t){return t.isConnected||!vt.existsFor(t)?!1:(vt.getOrCreate(t).unbind(),!0)},registerRoot(t=xi){It.registerRoot(t)},unregisterRoot(t=xi){It.unregisterRoot(t)}}),td=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),sd=new Map,Xa=new Map;let wo=null;const cr=dt.createInterface(t=>t.cachedCallback(e=>(wo===null&&(wo=new Ym(null,e)),wo))),Um=Object.freeze({tagFor(t){return Xa.get(t)},responsibleFor(t){const e=t.$$designSystem$$;return e||dt.findResponsibleContainer(t).get(cr)},getOrCreate(t){if(!t)return wo===null&&(wo=dt.getOrCreateDOMContainer().get(cr)),wo;const e=t.$$designSystem$$;if(e)return e;const s=dt.getOrCreateDOMContainer(t);if(s.has(cr,!1))return s.get(cr);{const i=new Ym(t,s);return s.register(Mr.instance(cr,i)),i}}});function Bx(t,e,s){return typeof t=="string"?{name:t,type:e,callback:s}:t}class Ym{constructor(e,s){this.owner=e,this.container=s,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>td.definitionCallbackOnly,e!==null&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){const s=this.container,i=[],n=this.disambiguate,o=this.shadowRootMode,r={elementPrefix:this.prefix,tryDefineElement(a,l,c){const d=Bx(a,l,c),{name:u,callback:f,baseClass:b}=d;let{type:w}=d,x=u,_=sd.get(x),R=!0;for(;_;){const H=n(x,w,_);switch(H){case td.ignoreDuplicate:return;case td.definitionCallbackOnly:R=!1,_=void 0;break;default:x=H,_=sd.get(x);break}}R&&((Xa.has(w)||w===fe)&&(w=class extends w{}),sd.set(x,w),Xa.set(w,x),b&&Xa.set(b,x)),i.push(new jx(s,x,w,o,f,R))}};this.designTokensInitialized||(this.designTokensInitialized=!0,this.designTokenRoot!==null&&Be.registerRoot(this.designTokenRoot)),s.registerWithContext(r,...e);for(const a of i)a.callback(a),a.willDefine&&a.definition!==null&&a.definition.define();return this}}class jx{constructor(e,s,i,n,o,r){this.container=e,this.name=s,this.type=i,this.shadowRootMode=n,this.callback=o,this.willDefine=r,this.definition=null}definePresentation(e){Vm.define(this.name,e,this.container)}defineElement(e){this.definition=new Dl(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return Um.tagFor(e)}}const Ux=(t,e)=>M`
    <div class="positioning-region" part="positioning-region">
        ${ut(s=>s.modal,M`
                <div
                    class="overlay"
                    part="overlay"
                    role="presentation"
                    @click="${s=>s.dismiss()}"
                ></div>
            `)}
        <div
            role="dialog"
            tabindex="-1"
            class="control"
            part="control"
            aria-modal="${s=>s.modal}"
            aria-describedby="${s=>s.ariaDescribedby}"
            aria-labelledby="${s=>s.ariaLabelledby}"
            aria-label="${s=>s.ariaLabel}"
            ${Re("dialog")}
        >
            <slot></slot>
        </div>
    </div>
`;/*!
* tabbable 5.3.3
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var Wm=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],Yx=Wm.join(","),qm=typeof Element>"u",Hr=qm?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Ed=!qm&&Element.prototype.getRootNode?function(t){return t.getRootNode()}:function(t){return t.ownerDocument},Wx=function(e,s){return e.tabIndex<0&&(s||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},Gm=function(e){return e.tagName==="INPUT"},qx=function(e){return Gm(e)&&e.type==="hidden"},Gx=function(e){var s=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(i){return i.tagName==="SUMMARY"});return s},Zx=function(e,s){for(var i=0;i<e.length;i++)if(e[i].checked&&e[i].form===s)return e[i]},Xx=function(e){if(!e.name)return!0;var s=e.form||Ed(e),i=function(a){return s.querySelectorAll('input[type="radio"][name="'+a+'"]')},n;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")n=i(window.CSS.escape(e.name));else try{n=i(e.name)}catch(r){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",r.message),!1}var o=Zx(n,e.form);return!o||o===e},Qx=function(e){return Gm(e)&&e.type==="radio"},Jx=function(e){return Qx(e)&&!Xx(e)},Df=function(e){var s=e.getBoundingClientRect(),i=s.width,n=s.height;return i===0&&n===0},Kx=function(e,s){var i=s.displayCheck,n=s.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var o=Hr.call(e,"details>summary:first-of-type"),r=o?e.parentElement:e;if(Hr.call(r,"details:not([open]) *"))return!0;var a=Ed(e).host,l=(a==null?void 0:a.ownerDocument.contains(a))||e.ownerDocument.contains(e);if(!i||i==="full"){if(typeof n=="function"){for(var c=e;e;){var d=e.parentElement,u=Ed(e);if(d&&!d.shadowRoot&&n(d)===!0)return Df(e);e.assignedSlot?e=e.assignedSlot:!d&&u!==e.ownerDocument?e=u.host:e=d}e=c}if(l)return!e.getClientRects().length}else if(i==="non-zero-area")return Df(e);return!1},ew=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var s=e.parentElement;s;){if(s.tagName==="FIELDSET"&&s.disabled){for(var i=0;i<s.children.length;i++){var n=s.children.item(i);if(n.tagName==="LEGEND")return Hr.call(s,"fieldset[disabled] *")?!0:!n.contains(e)}return!0}s=s.parentElement}return!1},Zm=function(e,s){return!(s.disabled||qx(s)||Kx(s,e)||Gx(s)||ew(s))},tw=function(e,s){return!(Jx(s)||Wx(s)<0||!Zm(e,s))},Rf=function(e,s){if(s=s||{},!e)throw new Error("No node provided");return Hr.call(e,Yx)===!1?!1:tw(s,e)},sw=Wm.concat("iframe").join(","),Ef=function(e,s){if(s=s||{},!e)throw new Error("No node provided");return Hr.call(e,sw)===!1?!1:Zm(s,e)};class Ts extends fe{constructor(){super(...arguments),this.modal=!0,this.hidden=!1,this.trapFocus=!0,this.trapFocusChanged=()=>{this.$fastController.isConnected&&this.updateTrapFocus()},this.isTrappingFocus=!1,this.handleDocumentKeydown=e=>{if(!e.defaultPrevented&&!this.hidden)switch(e.key){case Yo:this.dismiss(),e.preventDefault();break;case Ol:this.handleTabKeyDown(e);break}},this.handleDocumentFocus=e=>{!e.defaultPrevented&&this.shouldForceFocus(e.target)&&(this.focusFirstElement(),e.preventDefault())},this.handleTabKeyDown=e=>{if(!this.trapFocus||this.hidden)return;const s=this.getTabQueueBounds();if(s.length!==0){if(s.length===1){s[0].focus(),e.preventDefault();return}e.shiftKey&&e.target===s[0]?(s[s.length-1].focus(),e.preventDefault()):!e.shiftKey&&e.target===s[s.length-1]&&(s[0].focus(),e.preventDefault())}},this.getTabQueueBounds=()=>{const e=[];return Ts.reduceTabbableItems(e,this)},this.focusFirstElement=()=>{const e=this.getTabQueueBounds();e.length>0?e[0].focus():this.dialog instanceof HTMLElement&&this.dialog.focus()},this.shouldForceFocus=e=>this.isTrappingFocus&&!this.contains(e),this.shouldTrapFocus=()=>this.trapFocus&&!this.hidden,this.updateTrapFocus=e=>{const s=e===void 0?this.shouldTrapFocus():e;s&&!this.isTrappingFocus?(this.isTrappingFocus=!0,document.addEventListener("focusin",this.handleDocumentFocus),de.queueUpdate(()=>{this.shouldForceFocus(document.activeElement)&&this.focusFirstElement()})):!s&&this.isTrappingFocus&&(this.isTrappingFocus=!1,document.removeEventListener("focusin",this.handleDocumentFocus))}}dismiss(){this.$emit("dismiss"),this.$emit("cancel")}show(){this.hidden=!1}hide(){this.hidden=!0,this.$emit("close")}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.handleDocumentKeydown),this.notifier=le.getNotifier(this),this.notifier.subscribe(this,"hidden"),this.updateTrapFocus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeydown),this.updateTrapFocus(!1),this.notifier.unsubscribe(this,"hidden")}handleChange(e,s){switch(s){case"hidden":this.updateTrapFocus();break}}static reduceTabbableItems(e,s){return s.getAttribute("tabindex")==="-1"?e:Rf(s)||Ts.isFocusableFastElement(s)&&Ts.hasTabbableShadow(s)?(e.push(s),e):s.childElementCount?e.concat(Array.from(s.children).reduce(Ts.reduceTabbableItems,[])):e}static isFocusableFastElement(e){var s,i;return!!(!((i=(s=e.$fastController)===null||s===void 0?void 0:s.definition.shadowOptions)===null||i===void 0)&&i.delegatesFocus)}static hasTabbableShadow(e){var s,i;return Array.from((i=(s=e.shadowRoot)===null||s===void 0?void 0:s.querySelectorAll("*"))!==null&&i!==void 0?i:[]).some(n=>Rf(n))}}h([p({mode:"boolean"})],Ts.prototype,"modal",void 0);h([p({mode:"boolean"})],Ts.prototype,"hidden",void 0);h([p({attribute:"trap-focus",mode:"boolean"})],Ts.prototype,"trapFocus",void 0);h([p({attribute:"aria-describedby"})],Ts.prototype,"ariaDescribedby",void 0);h([p({attribute:"aria-labelledby"})],Ts.prototype,"ariaLabelledby",void 0);h([p({attribute:"aria-label"})],Ts.prototype,"ariaLabel",void 0);const iw=(t,e)=>M`
    <template role="${s=>s.role}" aria-orientation="${s=>s.orientation}"></template>
`,nw={separator:"separator",presentation:"presentation"};class Hl extends fe{constructor(){super(...arguments),this.role=nw.separator,this.orientation=gt.horizontal}}h([p],Hl.prototype,"role",void 0);h([p],Hl.prototype,"orientation",void 0);const Od={next:"next",previous:"previous"},ow=(t,e)=>M`
    <template
        role="button"
        aria-disabled="${s=>s.disabled?!0:void 0}"
        tabindex="${s=>s.hiddenFromAT?-1:0}"
        class="${s=>s.direction} ${s=>s.disabled?"disabled":""}"
        @keyup="${(s,i)=>s.keyupHandler(i.event)}"
    >
        ${ut(s=>s.direction===Od.next,M`
                <span part="next" class="next">
                    <slot name="next">
                        ${e.next||""}
                    </slot>
                </span>
            `)}
        ${ut(s=>s.direction===Od.previous,M`
                <span part="previous" class="previous">
                    <slot name="previous">
                        ${e.previous||""}
                    </slot>
                </span>
            `)}
    </template>
`;class Nl extends fe{constructor(){super(...arguments),this.hiddenFromAT=!0,this.direction=Od.next}keyupHandler(e){if(!this.hiddenFromAT){const s=e.key;(s==="Enter"||s==="Space")&&this.$emit("click",e),s==="Escape"&&this.blur()}}}h([p({mode:"boolean"})],Nl.prototype,"disabled",void 0);h([p({attribute:"aria-hidden",converter:ia})],Nl.prototype,"hiddenFromAT",void 0);h([p],Nl.prototype,"direction",void 0);const rw=(t,e)=>M`
    <template
        aria-checked="${s=>s.ariaChecked}"
        aria-disabled="${s=>s.ariaDisabled}"
        aria-posinset="${s=>s.ariaPosInSet}"
        aria-selected="${s=>s.ariaSelected}"
        aria-setsize="${s=>s.ariaSetSize}"
        class="${s=>[s.checked&&"checked",s.selected&&"selected",s.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${Jt(t,e)}
        <span class="content" part="content">
            <slot ${et("content")}></slot>
        </span>
        ${Qt(t,e)}
    </template>
`;class oa extends as{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return(e=this.options)===null||e===void 0?void 0:e.filter(s=>s.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,s){var i,n;this.ariaActiveDescendant=(n=(i=this.options[s])===null||i===void 0?void 0:i.id)!==null&&n!==void 0?n:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((s,i)=>{s.checked=Sa(i,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((s,i)=>{s.checked=Sa(i,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((s,i)=>{s.checked=Sa(i,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.checkedOptions.length===1&&(this.rangeStartIndex+=1),this.options.forEach((s,i)=>{s.checked=Sa(i,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var s;if(!this.multiple)return super.clickHandler(e);const i=(s=e.target)===null||s===void 0?void 0:s.closest("[role=option]");if(!(!i||i.disabled))return this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(i),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.uncheckAllOptions(),this.activeIndex===-1&&(this.activeIndex=this.firstSelectedOptionIndex!==-1?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;const{key:s,shiftKey:i}=e;switch(this.shouldSkipFocus=!1,s){case di:{this.checkFirstOption(i);return}case Ds:{this.checkNextOption(i);return}case Rs:{this.checkPreviousOption(i);return}case ui:{this.checkLastOption(i);return}case Ol:return this.focusAndScrollOptionIntoView(),!0;case Yo:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case Un:if(e.preventDefault(),this.typeAheadExpired){this.toggleSelectedForAllCheckedOptions();return}default:return s.length===1&&this.handleTypeAhead(`${s}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,s){var i;this.ariaMultiSelectable=s?"true":null,(i=this.options)===null||i===void 0||i.forEach(n=>{n.checked=s?!1:void 0}),this.setSelectedOptions()}setSelectedOptions(){if(!this.multiple){super.setSelectedOptions();return}this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(e=>e.selected),this.focusAndScrollOptionIntoView())}sizeChanged(e,s){var i;const n=Math.max(0,parseInt((i=s==null?void 0:s.toFixed())!==null&&i!==void 0?i:"",10));n!==s&&de.queueUpdate(()=>{this.size=n})}toggleSelectedForAllCheckedOptions(){const e=this.checkedOptions.filter(i=>!i.disabled),s=!e.every(i=>i.selected);e.forEach(i=>i.selected=s),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,s){if(!this.multiple){super.typeaheadBufferChanged(e,s);return}if(this.$fastController.isConnected){const i=this.getTypeaheadMatches(),n=this.options.indexOf(i[0]);n>-1&&(this.activeIndex=n,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}uncheckAllOptions(e=!1){this.options.forEach(s=>s.checked=this.multiple?!1:void 0),e||(this.rangeStartIndex=-1)}}h([k],oa.prototype,"activeIndex",void 0);h([p({mode:"boolean"})],oa.prototype,"multiple",void 0);h([p({converter:G})],oa.prototype,"size",void 0);const aw=(t,e)=>M`
    <template
        aria-activedescendant="${s=>s.ariaActiveDescendant}"
        aria-multiselectable="${s=>s.ariaMultiSelectable}"
        class="listbox"
        role="listbox"
        tabindex="${s=>s.disabled?null:"0"}"
        @click="${(s,i)=>s.clickHandler(i.event)}"
        @focusin="${(s,i)=>s.focusinHandler(i.event)}"
        @keydown="${(s,i)=>s.keydownHandler(i.event)}"
        @mousedown="${(s,i)=>s.mousedownHandler(i.event)}"
    >
        <slot
            ${et({filter:oa.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
        ></slot>
    </template>
`,Gt={menuitem:"menuitem",menuitemcheckbox:"menuitemcheckbox",menuitemradio:"menuitemradio"},lw={[Gt.menuitem]:"menuitem",[Gt.menuitemcheckbox]:"menuitemcheckbox",[Gt.menuitemradio]:"menuitemradio"};class bs extends fe{constructor(){super(...arguments),this.role=Gt.menuitem,this.hasSubmenu=!1,this.currentDirection=Ze.ltr,this.focusSubmenuOnLoad=!1,this.handleMenuItemKeyDown=e=>{if(e.defaultPrevented)return!1;switch(e.key){case Ri:case Un:return this.invoke(),!1;case ln:return this.expandAndFocus(),!1;case an:if(this.expanded)return this.expanded=!1,this.focus(),!1}return!0},this.handleMenuItemClick=e=>(e.defaultPrevented||this.disabled||this.invoke(),!1),this.submenuLoaded=()=>{this.focusSubmenuOnLoad&&(this.focusSubmenuOnLoad=!1,this.hasSubmenu&&(this.submenu.focus(),this.setAttribute("tabindex","-1")))},this.handleMouseOver=e=>(this.disabled||!this.hasSubmenu||this.expanded||(this.expanded=!0),!1),this.handleMouseOut=e=>(!this.expanded||this.contains(document.activeElement)||(this.expanded=!1),!1),this.expandAndFocus=()=>{this.hasSubmenu&&(this.focusSubmenuOnLoad=!0,this.expanded=!0)},this.invoke=()=>{if(!this.disabled)switch(this.role){case Gt.menuitemcheckbox:this.checked=!this.checked;break;case Gt.menuitem:this.updateSubmenu(),this.hasSubmenu?this.expandAndFocus():this.$emit("change");break;case Gt.menuitemradio:this.checked||(this.checked=!0);break}},this.updateSubmenu=()=>{this.submenu=this.domChildren().find(e=>e.getAttribute("role")==="menu"),this.hasSubmenu=this.submenu!==void 0}}expandedChanged(e){if(this.$fastController.isConnected){if(this.submenu===void 0)return;this.expanded===!1?this.submenu.collapseExpandedItem():this.currentDirection=Hn(this),this.$emit("expanded-change",this,{bubbles:!1})}}checkedChanged(e,s){this.$fastController.isConnected&&this.$emit("change")}connectedCallback(){super.connectedCallback(),de.queueUpdate(()=>{this.updateSubmenu()}),this.startColumnCount||(this.startColumnCount=1),this.observer=new MutationObserver(this.updateSubmenu)}disconnectedCallback(){super.disconnectedCallback(),this.submenu=void 0,this.observer!==void 0&&(this.observer.disconnect(),this.observer=void 0)}domChildren(){return Array.from(this.children).filter(e=>!e.hasAttribute("hidden"))}}h([p({mode:"boolean"})],bs.prototype,"disabled",void 0);h([p({mode:"boolean"})],bs.prototype,"expanded",void 0);h([k],bs.prototype,"startColumnCount",void 0);h([p],bs.prototype,"role",void 0);h([p({mode:"boolean"})],bs.prototype,"checked",void 0);h([k],bs.prototype,"submenuRegion",void 0);h([k],bs.prototype,"hasSubmenu",void 0);h([k],bs.prototype,"currentDirection",void 0);h([k],bs.prototype,"submenu",void 0);st(bs,rs);const cw=(t,e)=>M`
    <template
        role="${s=>s.role}"
        aria-haspopup="${s=>s.hasSubmenu?"menu":void 0}"
        aria-checked="${s=>s.role!==Gt.menuitem?s.checked:void 0}"
        aria-disabled="${s=>s.disabled}"
        aria-expanded="${s=>s.expanded}"
        @keydown="${(s,i)=>s.handleMenuItemKeyDown(i.event)}"
        @click="${(s,i)=>s.handleMenuItemClick(i.event)}"
        @mouseover="${(s,i)=>s.handleMouseOver(i.event)}"
        @mouseout="${(s,i)=>s.handleMouseOut(i.event)}"
        class="${s=>s.disabled?"disabled":""} ${s=>s.expanded?"expanded":""} ${s=>`indent-${s.startColumnCount}`}"
    >
            ${ut(s=>s.role===Gt.menuitemcheckbox,M`
                    <div part="input-container" class="input-container">
                        <span part="checkbox" class="checkbox">
                            <slot name="checkbox-indicator">
                                ${e.checkboxIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
            ${ut(s=>s.role===Gt.menuitemradio,M`
                    <div part="input-container" class="input-container">
                        <span part="radio" class="radio">
                            <slot name="radio-indicator">
                                ${e.radioIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
        </div>
        ${Jt(t,e)}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${Qt(t,e)}
        ${ut(s=>s.hasSubmenu,M`
                <div
                    part="expand-collapse-glyph-container"
                    class="expand-collapse-glyph-container"
                >
                    <span part="expand-collapse" class="expand-collapse">
                        <slot name="expand-collapse-indicator">
                            ${e.expandCollapseGlyph||""}
                        </slot>
                    </span>
                </div>
            `)}
        ${ut(s=>s.expanded,M`
                <${t.tagFor(ae)}
                    :anchorElement="${s=>s}"
                    vertical-positioning-mode="dynamic"
                    vertical-default-position="bottom"
                    vertical-inset="true"
                    horizontal-positioning-mode="dynamic"
                    horizontal-default-position="end"
                    class="submenu-region"
                    dir="${s=>s.currentDirection}"
                    @loaded="${s=>s.submenuLoaded()}"
                    ${Re("submenuRegion")}
                    part="submenu-region"
                >
                    <slot name="submenu"></slot>
                </${t.tagFor(ae)}>
            `)}
    </template>
`,dw=(t,e)=>M`
    <template
        slot="${s=>s.slot?s.slot:s.isNestedMenu()?"submenu":void 0}"
        role="menu"
        @keydown="${(s,i)=>s.handleMenuKeyDown(i.event)}"
        @focusout="${(s,i)=>s.handleFocusOut(i.event)}"
    >
        <slot ${et("items")}></slot>
    </template>
`;let zl=class Xm extends fe{constructor(){super(...arguments),this.expandedItem=null,this.focusIndex=-1,this.isNestedMenu=()=>this.parentElement!==null&&Ro(this.parentElement)&&this.parentElement.getAttribute("role")==="menuitem",this.handleFocusOut=e=>{if(!this.contains(e.relatedTarget)&&this.menuItems!==void 0){this.collapseExpandedItem();const s=this.menuItems.findIndex(this.isFocusableElement);this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.menuItems[s].setAttribute("tabindex","0"),this.focusIndex=s}},this.handleItemFocus=e=>{const s=e.target;this.menuItems!==void 0&&s!==this.menuItems[this.focusIndex]&&(this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=this.menuItems.indexOf(s),s.setAttribute("tabindex","0"))},this.handleExpandedChanged=e=>{if(e.defaultPrevented||e.target===null||this.menuItems===void 0||this.menuItems.indexOf(e.target)<0)return;e.preventDefault();const s=e.target;if(this.expandedItem!==null&&s===this.expandedItem&&s.expanded===!1){this.expandedItem=null;return}s.expanded&&(this.expandedItem!==null&&this.expandedItem!==s&&(this.expandedItem.expanded=!1),this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.expandedItem=s,this.focusIndex=this.menuItems.indexOf(s),s.setAttribute("tabindex","0"))},this.removeItemListeners=()=>{this.menuItems!==void 0&&this.menuItems.forEach(e=>{e.removeEventListener("expanded-change",this.handleExpandedChanged),e.removeEventListener("focus",this.handleItemFocus)})},this.setItems=()=>{const e=this.domChildren();this.removeItemListeners(),this.menuItems=e;const s=this.menuItems.filter(this.isMenuItemElement);s.length&&(this.focusIndex=0);function i(o){const r=o.getAttribute("role"),a=o.querySelector("[slot=start]");return r!==Gt.menuitem&&a===null||r===Gt.menuitem&&a!==null?1:r!==Gt.menuitem&&a!==null?2:0}const n=s.reduce((o,r)=>{const a=i(r);return o>a?o:a},0);s.forEach((o,r)=>{o.setAttribute("tabindex",r===0?"0":"-1"),o.addEventListener("expanded-change",this.handleExpandedChanged),o.addEventListener("focus",this.handleItemFocus),o instanceof bs&&(o.startColumnCount=n)})},this.changeHandler=e=>{if(this.menuItems===void 0)return;const s=e.target,i=this.menuItems.indexOf(s);if(i!==-1&&s.role==="menuitemradio"&&s.checked===!0){for(let o=i-1;o>=0;--o){const r=this.menuItems[o],a=r.getAttribute("role");if(a===Gt.menuitemradio&&(r.checked=!1),a==="separator")break}const n=this.menuItems.length-1;for(let o=i+1;o<=n;++o){const r=this.menuItems[o],a=r.getAttribute("role");if(a===Gt.menuitemradio&&(r.checked=!1),a==="separator")break}}},this.isMenuItemElement=e=>Ro(e)&&Xm.focusableElementRoles.hasOwnProperty(e.getAttribute("role")),this.isFocusableElement=e=>this.isMenuItemElement(e)}itemsChanged(e,s){this.$fastController.isConnected&&this.menuItems!==void 0&&this.setItems()}connectedCallback(){super.connectedCallback(),de.queueUpdate(()=>{this.setItems()}),this.addEventListener("change",this.changeHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeItemListeners(),this.menuItems=void 0,this.removeEventListener("change",this.changeHandler)}focus(){this.setFocus(0,1)}collapseExpandedItem(){this.expandedItem!==null&&(this.expandedItem.expanded=!1,this.expandedItem=null)}handleMenuKeyDown(e){if(!(e.defaultPrevented||this.menuItems===void 0))switch(e.key){case Ds:this.setFocus(this.focusIndex+1,1);return;case Rs:this.setFocus(this.focusIndex-1,-1);return;case ui:this.setFocus(this.menuItems.length-1,-1);return;case di:this.setFocus(0,1);return;default:return!0}}domChildren(){return Array.from(this.children).filter(e=>!e.hasAttribute("hidden"))}setFocus(e,s){if(this.menuItems!==void 0)for(;e>=0&&e<this.menuItems.length;){const i=this.menuItems[e];if(this.isFocusableElement(i)){this.focusIndex>-1&&this.menuItems.length>=this.focusIndex-1&&this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=e,i.setAttribute("tabindex","0"),i.focus();break}e+=s}}};zl.focusableElementRoles=lw;h([k],zl.prototype,"items",void 0);const uw=(t,e)=>M`
    <template class="${s=>s.readOnly?"readonly":""}">
        <label
            part="label"
            for="control"
            class="${s=>s.defaultSlottedNodes&&s.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${et("defaultSlottedNodes")}></slot>
        </label>
        <div class="root" part="root">
            ${Jt(t,e)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${s=>s.handleTextInput()}"
                @change="${s=>s.handleChange()}"
                @keydown="${(s,i)=>s.handleKeyDown(i.event)}"
                @blur="${(s,i)=>s.handleBlur()}"
                ?autofocus="${s=>s.autofocus}"
                ?disabled="${s=>s.disabled}"
                list="${s=>s.list}"
                maxlength="${s=>s.maxlength}"
                minlength="${s=>s.minlength}"
                placeholder="${s=>s.placeholder}"
                ?readonly="${s=>s.readOnly}"
                ?required="${s=>s.required}"
                size="${s=>s.size}"
                type="text"
                inputmode="numeric"
                min="${s=>s.min}"
                max="${s=>s.max}"
                step="${s=>s.step}"
                aria-atomic="${s=>s.ariaAtomic}"
                aria-busy="${s=>s.ariaBusy}"
                aria-controls="${s=>s.ariaControls}"
                aria-current="${s=>s.ariaCurrent}"
                aria-describedby="${s=>s.ariaDescribedby}"
                aria-details="${s=>s.ariaDetails}"
                aria-disabled="${s=>s.ariaDisabled}"
                aria-errormessage="${s=>s.ariaErrormessage}"
                aria-flowto="${s=>s.ariaFlowto}"
                aria-haspopup="${s=>s.ariaHaspopup}"
                aria-hidden="${s=>s.ariaHidden}"
                aria-invalid="${s=>s.ariaInvalid}"
                aria-keyshortcuts="${s=>s.ariaKeyshortcuts}"
                aria-label="${s=>s.ariaLabel}"
                aria-labelledby="${s=>s.ariaLabelledby}"
                aria-live="${s=>s.ariaLive}"
                aria-owns="${s=>s.ariaOwns}"
                aria-relevant="${s=>s.ariaRelevant}"
                aria-roledescription="${s=>s.ariaRoledescription}"
                ${Re("control")}
            />
            ${ut(s=>!s.hideStep&&!s.readOnly&&!s.disabled,M`
                    <div class="controls" part="controls">
                        <div class="step-up" part="step-up" @click="${s=>s.stepUp()}">
                            <slot name="step-up-glyph">
                                ${e.stepUpGlyph||""}
                            </slot>
                        </div>
                        <div
                            class="step-down"
                            part="step-down"
                            @click="${s=>s.stepDown()}"
                        >
                            <slot name="step-down-glyph">
                                ${e.stepDownGlyph||""}
                            </slot>
                        </div>
                    </div>
                `)}
            ${Qt(t,e)}
        </div>
    </template>
`;class hw extends fe{}class fw extends Ei(hw){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const pw={email:"email",password:"password",tel:"tel",text:"text",url:"url"};let ls=class extends fw{constructor(){super(...arguments),this.type=pw.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&de.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};h([p({attribute:"readonly",mode:"boolean"})],ls.prototype,"readOnly",void 0);h([p({mode:"boolean"})],ls.prototype,"autofocus",void 0);h([p],ls.prototype,"placeholder",void 0);h([p],ls.prototype,"type",void 0);h([p],ls.prototype,"list",void 0);h([p({converter:G})],ls.prototype,"maxlength",void 0);h([p({converter:G})],ls.prototype,"minlength",void 0);h([p],ls.prototype,"pattern",void 0);h([p({converter:G})],ls.prototype,"size",void 0);h([p({mode:"boolean"})],ls.prototype,"spellcheck",void 0);h([k],ls.prototype,"defaultSlottedNodes",void 0);class Bl{}st(Bl,Xe);st(ls,rs,Bl);class mw extends fe{}class gw extends Ei(mw){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let Kt=class extends gw{constructor(){super(...arguments),this.hideStep=!1,this.step=1,this.isUserInput=!1}maxChanged(e,s){var i;this.max=Math.max(s,(i=this.min)!==null&&i!==void 0?i:s);const n=Math.min(this.min,this.max);this.min!==void 0&&this.min!==n&&(this.min=n),this.value=this.getValidValue(this.value)}minChanged(e,s){var i;this.min=Math.min(s,(i=this.max)!==null&&i!==void 0?i:s);const n=Math.max(this.min,this.max);this.max!==void 0&&this.max!==n&&(this.max=n),this.value=this.getValidValue(this.value)}get valueAsNumber(){return parseFloat(super.value)}set valueAsNumber(e){this.value=e.toString()}valueChanged(e,s){this.value=this.getValidValue(s),s===this.value&&(this.control&&!this.isUserInput&&(this.control.value=this.value),super.valueChanged(e,this.value),e!==void 0&&!this.isUserInput&&(this.$emit("input"),this.$emit("change")),this.isUserInput=!1)}validate(){super.validate(this.control)}getValidValue(e){var s,i;let n=parseFloat(parseFloat(e).toPrecision(12));return isNaN(n)?n="":(n=Math.min(n,(s=this.max)!==null&&s!==void 0?s:n),n=Math.max(n,(i=this.min)!==null&&i!==void 0?i:n).toString()),n}stepUp(){const e=parseFloat(this.value),s=isNaN(e)?this.min>0?this.min:this.max<0?this.max:this.min?0:this.step:e+this.step;this.value=s.toString()}stepDown(){const e=parseFloat(this.value),s=isNaN(e)?this.min>0?this.min:this.max<0?this.max:this.min?0:0-this.step:e-this.step;this.value=s.toString()}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","number"),this.validate(),this.control.value=this.value,this.autofocus&&de.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.control.value=this.control.value.replace(/[^0-9\-+e.]/g,""),this.isUserInput=!0,this.value=this.control.value}handleChange(){this.$emit("change")}handleKeyDown(e){switch(e.key){case Rs:return this.stepUp(),!1;case Ds:return this.stepDown(),!1}return!0}handleBlur(){this.control.value=this.value}};h([p({attribute:"readonly",mode:"boolean"})],Kt.prototype,"readOnly",void 0);h([p({mode:"boolean"})],Kt.prototype,"autofocus",void 0);h([p({attribute:"hide-step",mode:"boolean"})],Kt.prototype,"hideStep",void 0);h([p],Kt.prototype,"placeholder",void 0);h([p],Kt.prototype,"list",void 0);h([p({converter:G})],Kt.prototype,"maxlength",void 0);h([p({converter:G})],Kt.prototype,"minlength",void 0);h([p({converter:G})],Kt.prototype,"size",void 0);h([p({converter:G})],Kt.prototype,"step",void 0);h([p({converter:G})],Kt.prototype,"max",void 0);h([p({converter:G})],Kt.prototype,"min",void 0);h([k],Kt.prototype,"defaultSlottedNodes",void 0);st(Kt,rs,Bl);const Of=44,vw=(t,e)=>M`
    <template
        role="progressbar"
        aria-valuenow="${s=>s.value}"
        aria-valuemin="${s=>s.min}"
        aria-valuemax="${s=>s.max}"
        class="${s=>s.paused?"paused":""}"
    >
        ${ut(s=>typeof s.value=="number",M`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${s=>Of*s.percentComplete/100}px ${Of}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `,M`
                <slot name="indeterminate" slot="indeterminate">
                    ${e.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`;class Yn extends fe{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const e=typeof this.min=="number"?this.min:0,s=typeof this.max=="number"?this.max:100,i=typeof this.value=="number"?this.value:0,n=s-e;this.percentComplete=n===0?0:Math.fround((i-e)/n*100)}}h([p({converter:G})],Yn.prototype,"value",void 0);h([p({converter:G})],Yn.prototype,"min",void 0);h([p({converter:G})],Yn.prototype,"max",void 0);h([p({mode:"boolean"})],Yn.prototype,"paused",void 0);h([k],Yn.prototype,"percentComplete",void 0);const bw=(t,e)=>M`
    <template
        role="progressbar"
        aria-valuenow="${s=>s.value}"
        aria-valuemin="${s=>s.min}"
        aria-valuemax="${s=>s.max}"
        class="${s=>s.paused?"paused":""}"
    >
        ${ut(s=>typeof s.value=="number",M`
                <div class="progress" part="progress" slot="determinate">
                    <div
                        class="determinate"
                        part="determinate"
                        style="width: ${s=>s.percentComplete}%"
                    ></div>
                </div>
            `,M`
                <div class="progress" part="progress" slot="indeterminate">
                    <slot class="indeterminate" name="indeterminate">
                        ${e.indeterminateIndicator1||""}
                        ${e.indeterminateIndicator2||""}
                    </slot>
                </div>
            `)}
    </template>
`,yw=(t,e)=>M`
    <template
        role="radiogroup"
        aria-disabled="${s=>s.disabled}"
        aria-readonly="${s=>s.readOnly}"
        @click="${(s,i)=>s.clickHandler(i.event)}"
        @keydown="${(s,i)=>s.keydownHandler(i.event)}"
        @focusout="${(s,i)=>s.focusOutHandler(i.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${s=>s.orientation===gt.horizontal?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${et({property:"slottedRadioButtons",filter:Ii("[role=radio]")})}
            ></slot>
        </div>
    </template>
`;class mn extends fe{constructor(){super(...arguments),this.orientation=gt.horizontal,this.radioChangeHandler=e=>{const s=e.target;s.checked&&(this.slottedRadioButtons.forEach(i=>{i!==s&&(i.checked=!1,this.isInsideFoundationToolbar||i.setAttribute("tabindex","-1"))}),this.selectedRadio=s,this.value=s.value,s.setAttribute("tabindex","0"),this.focusedRadio=s),e.stopPropagation()},this.moveToRadioByIndex=(e,s)=>{const i=e[s];this.isInsideToolbar||(i.setAttribute("tabindex","0"),i.readOnly?this.slottedRadioButtons.forEach(n=>{n!==i&&n.setAttribute("tabindex","-1")}):(i.checked=!0,this.selectedRadio=i)),this.focusedRadio=i,i.focus()},this.moveRightOffGroup=()=>{var e;(e=this.nextElementSibling)===null||e===void 0||e.focus()},this.moveLeftOffGroup=()=>{var e;(e=this.previousElementSibling)===null||e===void 0||e.focus()},this.focusOutHandler=e=>{const s=this.slottedRadioButtons,i=e.target,n=i!==null?s.indexOf(i):0,o=this.focusedRadio?s.indexOf(this.focusedRadio):-1;return(o===0&&n===o||o===s.length-1&&o===n)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),s.forEach(r=>{r!==this.selectedRadio&&r.setAttribute("tabindex","-1")}))):(this.focusedRadio=s[0],this.focusedRadio.setAttribute("tabindex","0"),s.forEach(r=>{r!==this.focusedRadio&&r.setAttribute("tabindex","-1")}))),!0},this.clickHandler=e=>{const s=e.target;if(s){const i=this.slottedRadioButtons;s.checked||i.indexOf(s)===0?(s.setAttribute("tabindex","0"),this.selectedRadio=s):(s.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=s}e.preventDefault()},this.shouldMoveOffGroupToTheRight=(e,s,i)=>e===s.length&&this.isInsideToolbar&&i===ln,this.shouldMoveOffGroupToTheLeft=(e,s)=>(this.focusedRadio?e.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&s===an,this.checkFocusedRadio=()=>{this.focusedRadio!==null&&!this.focusedRadio.readOnly&&!this.focusedRadio.checked&&(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=e=>{const s=this.slottedRadioButtons;let i=0;if(i=this.focusedRadio?s.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(i,s,e.key)){this.moveRightOffGroup();return}else i===s.length&&(i=0);for(;i<s.length&&s.length>1;)if(s[i].disabled){if(this.focusedRadio&&i===s.indexOf(this.focusedRadio))break;if(i+1>=s.length){if(this.isInsideToolbar)break;i=0}else i+=1}else{this.moveToRadioByIndex(s,i);break}},this.moveLeft=e=>{const s=this.slottedRadioButtons;let i=0;if(i=this.focusedRadio?s.indexOf(this.focusedRadio)-1:0,i=i<0?s.length-1:i,this.shouldMoveOffGroupToTheLeft(s,e.key)){this.moveLeftOffGroup();return}for(;i>=0&&s.length>1;)if(s[i].disabled){if(this.focusedRadio&&i===s.indexOf(this.focusedRadio))break;i-1<0?i=s.length-1:i-=1}else{this.moveToRadioByIndex(s,i);break}},this.keydownHandler=e=>{const s=e.key;if(s in mo&&this.isInsideFoundationToolbar)return!0;switch(s){case Ri:{this.checkFocusedRadio();break}case ln:case Ds:{this.direction===Ze.ltr?this.moveRight(e):this.moveLeft(e);break}case an:case Rs:{this.direction===Ze.ltr?this.moveLeft(e):this.moveRight(e);break}default:return!0}}}readOnlyChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(e=>{this.readOnly?e.readOnly=!0:e.readOnly=!1})}disabledChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(e=>{this.disabled?e.disabled=!0:e.disabled=!1})}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{e.setAttribute("name",this.name)})}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{e.value===this.value&&(e.checked=!0,this.selectedRadio=e)}),this.$emit("change")}slottedRadioButtonsChanged(e,s){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var e;return(e=this.parentToolbar)!==null&&e!==void 0?e:!1}get isInsideFoundationToolbar(){var e;return!!(!((e=this.parentToolbar)===null||e===void 0)&&e.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=Hn(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach(e=>{e.removeEventListener("change",this.radioChangeHandler)})}setupRadioButtons(){const e=this.slottedRadioButtons.filter(n=>n.hasAttribute("checked")),s=e?e.length:0;if(s>1){const n=e[s-1];n.checked=!0}let i=!1;if(this.slottedRadioButtons.forEach(n=>{this.name!==void 0&&n.setAttribute("name",this.name),this.disabled&&(n.disabled=!0),this.readOnly&&(n.readOnly=!0),this.value&&this.value===n.value?(this.selectedRadio=n,this.focusedRadio=n,n.checked=!0,n.setAttribute("tabindex","0"),i=!0):(this.isInsideFoundationToolbar||n.setAttribute("tabindex","-1"),n.checked=!1),n.addEventListener("change",this.radioChangeHandler)}),this.value===void 0&&this.slottedRadioButtons.length>0){const n=this.slottedRadioButtons.filter(r=>r.hasAttribute("checked")),o=n!==null?n.length:0;if(o>0&&!i){const r=n[o-1];r.checked=!0,this.focusedRadio=r,r.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}h([p({attribute:"readonly",mode:"boolean"})],mn.prototype,"readOnly",void 0);h([p({attribute:"disabled",mode:"boolean"})],mn.prototype,"disabled",void 0);h([p],mn.prototype,"name",void 0);h([p],mn.prototype,"value",void 0);h([p],mn.prototype,"orientation",void 0);h([k],mn.prototype,"childItems",void 0);h([k],mn.prototype,"slottedRadioButtons",void 0);const xw=(t,e)=>M`
    <template
        role="radio"
        class="${s=>s.checked?"checked":""} ${s=>s.readOnly?"readonly":""}"
        aria-checked="${s=>s.checked}"
        aria-required="${s=>s.required}"
        aria-disabled="${s=>s.disabled}"
        aria-readonly="${s=>s.readOnly}"
        @keypress="${(s,i)=>s.keypressHandler(i.event)}"
        @click="${(s,i)=>s.clickHandler(i.event)}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${e.checkedIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${s=>s.defaultSlottedNodes&&s.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${et("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class ww extends fe{}class $w extends Su(ww){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class jl extends $w{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{switch(e.key){case Un:!this.checked&&!this.readOnly&&(this.checked=!0);return}return!0},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var e;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=(e=this.defaultChecked)!==null&&e!==void 0?e:!1,this.dirtyChecked=!1))}connectedCallback(){var e,s;super.connectedCallback(),this.validate(),((e=this.parentElement)===null||e===void 0?void 0:e.getAttribute("role"))!=="radiogroup"&&this.getAttribute("tabindex")===null&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=(s=this.defaultChecked)!==null&&s!==void 0?s:!1,this.dirtyChecked=!1))}isInsideRadioGroup(){return this.closest("[role=radiogroup]")!==null}clickHandler(e){!this.disabled&&!this.readOnly&&!this.checked&&(this.checked=!0)}}h([p({attribute:"readonly",mode:"boolean"})],jl.prototype,"readOnly",void 0);h([k],jl.prototype,"name",void 0);h([k],jl.prototype,"defaultSlottedNodes",void 0);let Pi=class extends fe{constructor(){super(...arguments),this.framesPerSecond=60,this.updatingItems=!1,this.speed=600,this.easing="ease-in-out",this.flippersHiddenFromAT=!1,this.scrolling=!1,this.resizeDetector=null}get frameTime(){return 1e3/this.framesPerSecond}scrollingChanged(e,s){if(this.scrollContainer){const i=this.scrolling==!0?"scrollstart":"scrollend";this.$emit(i,this.scrollContainer.scrollLeft)}}get isRtl(){return this.scrollItems.length>1&&this.scrollItems[0].offsetLeft>this.scrollItems[1].offsetLeft}connectedCallback(){super.connectedCallback(),this.initializeResizeDetector()}disconnectedCallback(){this.disconnectResizeDetector(),super.disconnectedCallback()}scrollItemsChanged(e,s){s&&!this.updatingItems&&de.queueUpdate(()=>this.setStops())}disconnectResizeDetector(){this.resizeDetector&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.resized.bind(this)),this.resizeDetector.observe(this)}updateScrollStops(){this.updatingItems=!0;const e=this.scrollItems.reduce((s,i)=>i instanceof HTMLSlotElement?s.concat(i.assignedElements()):(s.push(i),s),[]);this.scrollItems=e,this.updatingItems=!1}setStops(){this.updateScrollStops();const{scrollContainer:e}=this,{scrollLeft:s}=e,{width:i,left:n}=e.getBoundingClientRect();this.width=i;let o=0,r=this.scrollItems.map((a,l)=>{const{left:c,width:d}=a.getBoundingClientRect(),u=Math.round(c+s-n),f=Math.round(u+d);return this.isRtl?-f:(o=f,l===0?0:u)}).concat(o);r=this.fixScrollMisalign(r),r.sort((a,l)=>Math.abs(a)-Math.abs(l)),this.scrollStops=r,this.setFlippers()}validateStops(e=!0){const s=()=>!!this.scrollStops.find(i=>i>0);return!s()&&e&&this.setStops(),s()}fixScrollMisalign(e){if(this.isRtl&&e.some(s=>s>0)){e.sort((i,n)=>n-i);const s=e[0];e=e.map(i=>i-s)}return e}setFlippers(){var e,s;const i=this.scrollContainer.scrollLeft;if((e=this.previousFlipperContainer)===null||e===void 0||e.classList.toggle("disabled",i===0),this.scrollStops){const n=Math.abs(this.scrollStops[this.scrollStops.length-1]);(s=this.nextFlipperContainer)===null||s===void 0||s.classList.toggle("disabled",this.validateStops(!1)&&Math.abs(i)+this.width>=n)}}scrollInView(e,s=0,i){var n;if(typeof e!="number"&&e&&(e=this.scrollItems.findIndex(o=>o===e||o.contains(e))),e!==void 0){i=i??s;const{scrollContainer:o,scrollStops:r,scrollItems:a}=this,{scrollLeft:l}=this.scrollContainer,{width:c}=o.getBoundingClientRect(),d=r[e],{width:u}=a[e].getBoundingClientRect(),f=d+u,b=l+s>d;if(b||l+c-i<f){const x=(n=[...r].sort((_,R)=>b?R-_:_-R).find(_=>b?_+s<d:_+c-(i??0)>f))!==null&&n!==void 0?n:0;this.scrollToPosition(x)}}}keyupHandler(e){switch(e.key){case"ArrowLeft":this.scrollToPrevious();break;case"ArrowRight":this.scrollToNext();break}}scrollToPrevious(){this.validateStops();const e=this.scrollContainer.scrollLeft,s=this.scrollStops.findIndex((o,r)=>o>=e&&(this.isRtl||r===this.scrollStops.length-1||this.scrollStops[r+1]>e)),i=Math.abs(this.scrollStops[s+1]);let n=this.scrollStops.findIndex(o=>Math.abs(o)+this.width>i);(n>=s||n===-1)&&(n=s>0?s-1:0),this.scrollToPosition(this.scrollStops[n],e)}scrollToNext(){this.validateStops();const e=this.scrollContainer.scrollLeft,s=this.scrollStops.findIndex(o=>Math.abs(o)>=Math.abs(e)),i=this.scrollStops.findIndex(o=>Math.abs(e)+this.width<=Math.abs(o));let n=s;i>s+2?n=i-2:s<this.scrollStops.length-2&&(n=s+1),this.scrollToPosition(this.scrollStops[n],e)}scrollToPosition(e,s=this.scrollContainer.scrollLeft){var i;if(this.scrolling)return;this.scrolling=!0;const n=(i=this.duration)!==null&&i!==void 0?i:`${Math.abs(e-s)/this.speed}s`;this.content.style.setProperty("transition-duration",n);const o=parseFloat(getComputedStyle(this.content).getPropertyValue("transition-duration")),r=c=>{c&&c.target!==c.currentTarget||(this.content.style.setProperty("transition-duration","0s"),this.content.style.removeProperty("transform"),this.scrollContainer.style.setProperty("scroll-behavior","auto"),this.scrollContainer.scrollLeft=e,this.setFlippers(),this.content.removeEventListener("transitionend",r),this.scrolling=!1)};if(o===0){r();return}this.content.addEventListener("transitionend",r);const a=this.scrollContainer.scrollWidth-this.scrollContainer.clientWidth;let l=this.scrollContainer.scrollLeft-Math.min(e,a);this.isRtl&&(l=this.scrollContainer.scrollLeft+Math.min(Math.abs(e),a)),this.content.style.setProperty("transition-property","transform"),this.content.style.setProperty("transition-timing-function",this.easing),this.content.style.setProperty("transform",`translateX(${l}px)`)}resized(){this.resizeTimeout&&(this.resizeTimeout=clearTimeout(this.resizeTimeout)),this.resizeTimeout=setTimeout(()=>{this.width=this.scrollContainer.offsetWidth,this.setFlippers()},this.frameTime)}scrolled(){this.scrollTimeout&&(this.scrollTimeout=clearTimeout(this.scrollTimeout)),this.scrollTimeout=setTimeout(()=>{this.setFlippers()},this.frameTime)}};h([p({converter:G})],Pi.prototype,"speed",void 0);h([p],Pi.prototype,"duration",void 0);h([p],Pi.prototype,"easing",void 0);h([p({attribute:"flippers-hidden-from-at",converter:ia})],Pi.prototype,"flippersHiddenFromAT",void 0);h([k],Pi.prototype,"scrolling",void 0);h([k],Pi.prototype,"scrollItems",void 0);h([p({attribute:"view"})],Pi.prototype,"view",void 0);const _w=(t,e)=>{var s,i;return M`
    <template
        class="horizontal-scroll"
        @keyup="${(n,o)=>n.keyupHandler(o.event)}"
    >
        ${Jt(t,e)}
        <div class="scroll-area" part="scroll-area">
            <div
                class="scroll-view"
                part="scroll-view"
                @scroll="${n=>n.scrolled()}"
                ${Re("scrollContainer")}
            >
                <div class="content-container" part="content-container" ${Re("content")}>
                    <slot
                        ${et({property:"scrollItems",filter:Ii()})}
                    ></slot>
                </div>
            </div>
            ${ut(n=>n.view!=="mobile",M`
                    <div
                        class="scroll scroll-prev"
                        part="scroll-prev"
                        ${Re("previousFlipperContainer")}
                    >
                        <div class="scroll-action" part="scroll-action-previous">
                            <slot name="previous-flipper">
                                ${e.previousFlipper instanceof Function?e.previousFlipper(t,e):(s=e.previousFlipper)!==null&&s!==void 0?s:""}
                            </slot>
                        </div>
                    </div>
                    <div
                        class="scroll scroll-next"
                        part="scroll-next"
                        ${Re("nextFlipperContainer")}
                    >
                        <div class="scroll-action" part="scroll-action-next">
                            <slot name="next-flipper">
                                ${e.nextFlipper instanceof Function?e.nextFlipper(t,e):(i=e.nextFlipper)!==null&&i!==void 0?i:""}
                            </slot>
                        </div>
                    </div>
                `)}
        </div>
        ${Qt(t,e)}
    </template>
`};function Qm(t,e,s){return t.nodeType!==Node.TEXT_NODE?!0:typeof t.nodeValue=="string"&&!!t.nodeValue.trim().length}class kw extends fe{}class Sw extends Ei(kw){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let ys=class extends Sw{readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.validate(),this.autofocus&&de.queueUpdate(()=>{this.focus()})}validate(){super.validate(this.control)}handleTextInput(){this.value=this.control.value}handleClearInput(){this.value="",this.control.focus(),this.handleChange()}handleChange(){this.$emit("change")}};h([p({attribute:"readonly",mode:"boolean"})],ys.prototype,"readOnly",void 0);h([p({mode:"boolean"})],ys.prototype,"autofocus",void 0);h([p],ys.prototype,"placeholder",void 0);h([p],ys.prototype,"list",void 0);h([p({converter:G})],ys.prototype,"maxlength",void 0);h([p({converter:G})],ys.prototype,"minlength",void 0);h([p],ys.prototype,"pattern",void 0);h([p({converter:G})],ys.prototype,"size",void 0);h([p({mode:"boolean"})],ys.prototype,"spellcheck",void 0);h([k],ys.prototype,"defaultSlottedNodes",void 0);class Jm{}st(Jm,Xe);st(ys,rs,Jm);class Cw extends oa{}class Iw extends Ei(Cw){constructor(){super(...arguments),this.proxy=document.createElement("select")}}let Mi=class extends Iw{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=Lr("listbox-"),this.maxHeight=0}openChanged(e,s){if(this.collapsible){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,de.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||typeof this.size=="number")}get value(){return le.track(this,"value"),this._value}set value(e){var s,i,n,o,r,a,l;const c=`${this._value}`;if(!((s=this._options)===null||s===void 0)&&s.length){const d=this._options.findIndex(b=>b.value===e),u=(n=(i=this._options[this.selectedIndex])===null||i===void 0?void 0:i.value)!==null&&n!==void 0?n:null,f=(r=(o=this._options[d])===null||o===void 0?void 0:o.value)!==null&&r!==void 0?r:null;(d===-1||u!==f)&&(e="",this.selectedIndex=d),e=(l=(a=this.firstSelectedOption)===null||a===void 0?void 0:a.value)!==null&&l!==void 0?l:e}c!==e&&(this._value=e,super.valueChanged(c,e),le.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var s,i;this.$fastController.isConnected&&(this.value=(i=(s=this.firstSelectedOption)===null||s===void 0?void 0:s.value)!==null&&i!==void 0?i:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,s){super.selectedIndexChanged(e,s),this.updateValue()}positionChanged(e,s){this.positionAttribute=s,this.setPositioning()}setPositioning(){const e=this.getBoundingClientRect(),i=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>i?xo.above:xo.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===xo.above?~~e.top:~~i}get displayValue(){var e,s;return le.track(this,"displayValue"),(s=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.text)!==null&&s!==void 0?s:""}disabledChanged(e,s){super.disabledChanged&&super.disabledChanged(e,s),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),this.selectedIndex===-1&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){const s=e.target.closest("option,[role=option]");if(s&&s.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(e){var s;if(super.focusoutHandler(e),!this.open)return!0;const i=e.relatedTarget;if(this.isSameNode(i)){this.focus();return}!((s=this.options)===null||s===void 0)&&s.includes(i)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,s){super.handleChange(e,s),s==="value"&&this.updateValue()}slottedOptionsChanged(e,s){this.options.forEach(i=>{le.getNotifier(i).unsubscribe(this,"value")}),super.slottedOptionsChanged(e,s),this.options.forEach(i=>{le.getNotifier(i).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var s;return e.offsetX>=0&&e.offsetX<=((s=this.listbox)===null||s===void 0?void 0:s.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,s){super.multipleChanged(e,s),this.proxy&&(this.proxy.multiple=s)}selectedOptionsChanged(e,s){var i;super.selectedOptionsChanged(e,s),(i=this.options)===null||i===void 0||i.forEach((n,o)=>{var r;const a=(r=this.proxy)===null||r===void 0?void 0:r.options.item(o);a&&(a.selected=n.selected)})}setDefaultSelectedOption(){var e;const s=(e=this.options)!==null&&e!==void 0?e:Array.from(this.children).filter(as.slottedOptionFilter),i=s==null?void 0:s.findIndex(n=>n.hasAttribute("selected")||n.selected||n.value===this.value);if(i!==-1){this.selectedIndex=i;return}this.selectedIndex=0}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(e=>{const s=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);s&&this.proxy.options.add(s)}))}keydownHandler(e){super.keydownHandler(e);const s=e.key||e.key.charCodeAt(0);switch(s){case Un:{e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break}case di:case ui:{e.preventDefault();break}case Ri:{e.preventDefault(),this.open=!this.open;break}case Yo:{this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break}case Ol:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(s===Ds||s===Rs)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,s){super.sizeChanged(e,s),this.proxy&&(this.proxy.size=s)}updateDisplayValue(){this.collapsible&&le.notify(this,"displayValue")}};h([p({attribute:"open",mode:"boolean"})],Mi.prototype,"open",void 0);h([zy],Mi.prototype,"collapsible",null);h([k],Mi.prototype,"control",void 0);h([p({attribute:"position"})],Mi.prototype,"positionAttribute",void 0);h([k],Mi.prototype,"position",void 0);h([k],Mi.prototype,"maxHeight",void 0);class Iu{}h([k],Iu.prototype,"ariaControls",void 0);st(Iu,pn);st(Mi,rs,Iu);const Tw=(t,e)=>M`
    <template
        class="${s=>[s.collapsible&&"collapsible",s.collapsible&&s.open&&"open",s.disabled&&"disabled",s.collapsible&&s.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${s=>s.ariaActiveDescendant}"
        aria-controls="${s=>s.ariaControls}"
        aria-disabled="${s=>s.ariaDisabled}"
        aria-expanded="${s=>s.ariaExpanded}"
        aria-haspopup="${s=>s.collapsible?"listbox":null}"
        aria-multiselectable="${s=>s.ariaMultiSelectable}"
        ?open="${s=>s.open}"
        role="combobox"
        tabindex="${s=>s.disabled?null:"0"}"
        @click="${(s,i)=>s.clickHandler(i.event)}"
        @focusin="${(s,i)=>s.focusinHandler(i.event)}"
        @focusout="${(s,i)=>s.focusoutHandler(i.event)}"
        @keydown="${(s,i)=>s.keydownHandler(i.event)}"
        @mousedown="${(s,i)=>s.mousedownHandler(i.event)}"
    >
        ${ut(s=>s.collapsible,M`
                <div
                    class="control"
                    part="control"
                    ?disabled="${s=>s.disabled}"
                    ${Re("control")}
                >
                    ${Jt(t,e)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${s=>s.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${e.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${Qt(t,e)}
                </div>
            `)}
        <div
            class="listbox"
            id="${s=>s.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${s=>s.disabled}"
            ?hidden="${s=>s.collapsible?!s.open:!1}"
            ${Re("listbox")}
        >
            <slot
                ${et({filter:as.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,Fw=(t,e)=>M`
    <template
        class="${s=>s.shape==="circle"?"circle":"rect"}"
        pattern="${s=>s.pattern}"
        ?shimmer="${s=>s.shimmer}"
    >
        ${ut(s=>s.shimmer===!0,M`
                <span class="shimmer"></span>
            `)}
        <object type="image/svg+xml" data="${s=>s.pattern}" role="presentation">
            <img class="pattern" src="${s=>s.pattern}" />
        </object>
        <slot></slot>
    </template>
`;class ra extends fe{constructor(){super(...arguments),this.shape="rect"}}h([p],ra.prototype,"fill",void 0);h([p],ra.prototype,"shape",void 0);h([p],ra.prototype,"pattern",void 0);h([p({mode:"boolean"})],ra.prototype,"shimmer",void 0);const Dw=(t,e)=>M`
    <template
        aria-disabled="${s=>s.disabled}"
        class="${s=>s.sliderOrientation||gt.horizontal}
            ${s=>s.disabled?"disabled":""}"
    >
        <div ${Re("root")} part="root" class="root" style="${s=>s.positionStyle}">
            <div class="container">
                ${ut(s=>!s.hideMark,M`
                        <div class="mark"></div>
                    `)}
                <div class="label">
                    <slot></slot>
                </div>
            </div>
        </div>
    </template>
`;function Ad(t,e,s,i){let n=Al(0,1,(t-e)/(s-e));return i===Ze.rtl&&(n=1-n),n}const Ta={min:0,max:0,direction:Ze.ltr,orientation:gt.horizontal,disabled:!1};class Li extends fe{constructor(){super(...arguments),this.hideMark=!1,this.sliderDirection=Ze.ltr,this.getSliderConfiguration=()=>{if(!this.isSliderConfig(this.parentNode))this.sliderDirection=Ta.direction||Ze.ltr,this.sliderOrientation=Ta.orientation,this.sliderMaxPosition=Ta.max,this.sliderMinPosition=Ta.min;else{const e=this.parentNode,{min:s,max:i,direction:n,orientation:o,disabled:r}=e;r!==void 0&&(this.disabled=r),this.sliderDirection=n||Ze.ltr,this.sliderOrientation=o||gt.horizontal,this.sliderMaxPosition=i,this.sliderMinPosition=s}},this.positionAsStyle=()=>{const e=this.sliderDirection?this.sliderDirection:Ze.ltr,s=Ad(Number(this.position),Number(this.sliderMinPosition),Number(this.sliderMaxPosition));let i=Math.round((1-s)*100),n=Math.round(s*100);return Number.isNaN(n)&&Number.isNaN(i)&&(i=50,n=50),this.sliderOrientation===gt.horizontal?e===Ze.rtl?`right: ${n}%; left: ${i}%;`:`left: ${n}%; right: ${i}%;`:`top: ${n}%; bottom: ${i}%;`}}positionChanged(){this.positionStyle=this.positionAsStyle()}sliderOrientationChanged(){}connectedCallback(){super.connectedCallback(),this.getSliderConfiguration(),this.positionStyle=this.positionAsStyle(),this.notifier=le.getNotifier(this.parentNode),this.notifier.subscribe(this,"orientation"),this.notifier.subscribe(this,"direction"),this.notifier.subscribe(this,"max"),this.notifier.subscribe(this,"min")}disconnectedCallback(){super.disconnectedCallback(),this.notifier.unsubscribe(this,"orientation"),this.notifier.unsubscribe(this,"direction"),this.notifier.unsubscribe(this,"max"),this.notifier.unsubscribe(this,"min")}handleChange(e,s){switch(s){case"direction":this.sliderDirection=e.direction;break;case"orientation":this.sliderOrientation=e.orientation;break;case"max":this.sliderMaxPosition=e.max;break;case"min":this.sliderMinPosition=e.min;break}this.positionStyle=this.positionAsStyle()}isSliderConfig(e){return e.max!==void 0&&e.min!==void 0}}h([k],Li.prototype,"positionStyle",void 0);h([p],Li.prototype,"position",void 0);h([p({attribute:"hide-mark",mode:"boolean"})],Li.prototype,"hideMark",void 0);h([p({attribute:"disabled",mode:"boolean"})],Li.prototype,"disabled",void 0);h([k],Li.prototype,"sliderOrientation",void 0);h([k],Li.prototype,"sliderMinPosition",void 0);h([k],Li.prototype,"sliderMaxPosition",void 0);h([k],Li.prototype,"sliderDirection",void 0);const Rw=(t,e)=>M`
    <template
        role="slider"
        class="${s=>s.readOnly?"readonly":""}
        ${s=>s.orientation||gt.horizontal}"
        tabindex="${s=>s.disabled?null:0}"
        aria-valuetext="${s=>s.valueTextFormatter(s.value)}"
        aria-valuenow="${s=>s.value}"
        aria-valuemin="${s=>s.min}"
        aria-valuemax="${s=>s.max}"
        aria-disabled="${s=>s.disabled?!0:void 0}"
        aria-readonly="${s=>s.readOnly?!0:void 0}"
        aria-orientation="${s=>s.orientation}"
        class="${s=>s.orientation}"
    >
        <div part="positioning-region" class="positioning-region">
            <div ${Re("track")} part="track-container" class="track">
                <slot name="track"></slot>
                <div part="track-start" class="track-start" style="${s=>s.position}">
                    <slot name="track-start"></slot>
                </div>
            </div>
            <slot></slot>
            <div
                ${Re("thumb")}
                part="thumb-container"
                class="thumb-container"
                style="${s=>s.position}"
            >
                <slot name="thumb">${e.thumb||""}</slot>
            </div>
        </div>
    </template>
`;class Ew extends fe{}class Ow extends Ei(Ew){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const Aw={singleValue:"single-value"};class Bt extends Ow{constructor(){super(...arguments),this.direction=Ze.ltr,this.isDragging=!1,this.trackWidth=0,this.trackMinWidth=0,this.trackHeight=0,this.trackLeft=0,this.trackMinHeight=0,this.valueTextFormatter=()=>null,this.min=0,this.max=10,this.step=1,this.orientation=gt.horizontal,this.mode=Aw.singleValue,this.keypressHandler=e=>{if(!this.readOnly){if(e.key===di)e.preventDefault(),this.value=`${this.min}`;else if(e.key===ui)e.preventDefault(),this.value=`${this.max}`;else if(!e.shiftKey)switch(e.key){case ln:case Rs:e.preventDefault(),this.increment();break;case an:case Ds:e.preventDefault(),this.decrement();break}}},this.setupTrackConstraints=()=>{const e=this.track.getBoundingClientRect();this.trackWidth=this.track.clientWidth,this.trackMinWidth=this.track.clientLeft,this.trackHeight=e.bottom,this.trackMinHeight=e.top,this.trackLeft=this.getBoundingClientRect().left,this.trackWidth===0&&(this.trackWidth=1)},this.setupListeners=(e=!1)=>{const s=`${e?"remove":"add"}EventListener`;this[s]("keydown",this.keypressHandler),this[s]("mousedown",this.handleMouseDown),this.thumb[s]("mousedown",this.handleThumbMouseDown,{passive:!0}),this.thumb[s]("touchstart",this.handleThumbMouseDown,{passive:!0}),e&&(this.handleMouseDown(null),this.handleThumbMouseDown(null))},this.initialValue="",this.handleThumbMouseDown=e=>{if(e){if(this.readOnly||this.disabled||e.defaultPrevented)return;e.target.focus()}const s=`${e!==null?"add":"remove"}EventListener`;window[s]("mouseup",this.handleWindowMouseUp),window[s]("mousemove",this.handleMouseMove,{passive:!0}),window[s]("touchmove",this.handleMouseMove,{passive:!0}),window[s]("touchend",this.handleWindowMouseUp),this.isDragging=e!==null},this.handleMouseMove=e=>{if(this.readOnly||this.disabled||e.defaultPrevented)return;const s=window.TouchEvent&&e instanceof TouchEvent?e.touches[0]:e,i=this.orientation===gt.horizontal?s.pageX-document.documentElement.scrollLeft-this.trackLeft:s.pageY-document.documentElement.scrollTop;this.value=`${this.calculateNewValue(i)}`},this.calculateNewValue=e=>{const s=Ad(e,this.orientation===gt.horizontal?this.trackMinWidth:this.trackMinHeight,this.orientation===gt.horizontal?this.trackWidth:this.trackHeight,this.direction),i=(this.max-this.min)*s+this.min;return this.convertToConstrainedValue(i)},this.handleWindowMouseUp=e=>{this.stopDragging()},this.stopDragging=()=>{this.isDragging=!1,this.handleMouseDown(null),this.handleThumbMouseDown(null)},this.handleMouseDown=e=>{const s=`${e!==null?"add":"remove"}EventListener`;if((e===null||!this.disabled&&!this.readOnly)&&(window[s]("mouseup",this.handleWindowMouseUp),window.document[s]("mouseleave",this.handleWindowMouseUp),window[s]("mousemove",this.handleMouseMove),e)){e.preventDefault(),this.setupTrackConstraints(),e.target.focus();const i=this.orientation===gt.horizontal?e.pageX-document.documentElement.scrollLeft-this.trackLeft:e.pageY-document.documentElement.scrollTop;this.value=`${this.calculateNewValue(i)}`}},this.convertToConstrainedValue=e=>{isNaN(e)&&(e=this.min);let s=e-this.min;const i=Math.round(s/this.step),n=s-i*(this.stepMultiplier*this.step)/this.stepMultiplier;return s=n>=Number(this.step)/2?s-n+Number(this.step):s-n,s+this.min}}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}get valueAsNumber(){return parseFloat(super.value)}set valueAsNumber(e){this.value=e.toString()}valueChanged(e,s){super.valueChanged(e,s),this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction),this.$emit("change")}minChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.min=`${this.min}`),this.validate()}maxChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.max=`${this.max}`),this.validate()}stepChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.step=`${this.step}`),this.updateStepMultiplier(),this.validate()}orientationChanged(){this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","range"),this.direction=Hn(this),this.updateStepMultiplier(),this.setupTrackConstraints(),this.setupListeners(),this.setupDefaultValue(),this.setThumbPositionForOrientation(this.direction)}disconnectedCallback(){this.setupListeners(!0)}increment(){const e=this.direction!==Ze.rtl&&this.orientation!==gt.vertical?Number(this.value)+Number(this.step):Number(this.value)-Number(this.step),s=this.convertToConstrainedValue(e),i=s<Number(this.max)?`${s}`:`${this.max}`;this.value=i}decrement(){const e=this.direction!==Ze.rtl&&this.orientation!==gt.vertical?Number(this.value)-Number(this.step):Number(this.value)+Number(this.step),s=this.convertToConstrainedValue(e),i=s>Number(this.min)?`${s}`:`${this.min}`;this.value=i}setThumbPositionForOrientation(e){const i=(1-Ad(Number(this.value),Number(this.min),Number(this.max),e))*100;this.orientation===gt.horizontal?this.position=this.isDragging?`right: ${i}%; transition: none;`:`right: ${i}%; transition: all 0.2s ease;`:this.position=this.isDragging?`bottom: ${i}%; transition: none;`:`bottom: ${i}%; transition: all 0.2s ease;`}updateStepMultiplier(){const e=this.step+"",s=this.step%1?e.length-e.indexOf(".")-1:0;this.stepMultiplier=Math.pow(10,s)}get midpoint(){return`${this.convertToConstrainedValue((this.max+this.min)/2)}`}setupDefaultValue(){if(typeof this.value=="string")if(this.value.length===0)this.initialValue=this.midpoint;else{const e=parseFloat(this.value);!Number.isNaN(e)&&(e<this.min||e>this.max)&&(this.value=this.midpoint)}}}h([p({attribute:"readonly",mode:"boolean"})],Bt.prototype,"readOnly",void 0);h([k],Bt.prototype,"direction",void 0);h([k],Bt.prototype,"isDragging",void 0);h([k],Bt.prototype,"position",void 0);h([k],Bt.prototype,"trackWidth",void 0);h([k],Bt.prototype,"trackMinWidth",void 0);h([k],Bt.prototype,"trackHeight",void 0);h([k],Bt.prototype,"trackLeft",void 0);h([k],Bt.prototype,"trackMinHeight",void 0);h([k],Bt.prototype,"valueTextFormatter",void 0);h([p({converter:G})],Bt.prototype,"min",void 0);h([p({converter:G})],Bt.prototype,"max",void 0);h([p({converter:G})],Bt.prototype,"step",void 0);h([p],Bt.prototype,"orientation",void 0);h([p],Bt.prototype,"mode",void 0);const Pw=(t,e)=>M`
    <template
        role="switch"
        aria-checked="${s=>s.checked}"
        aria-disabled="${s=>s.disabled}"
        aria-readonly="${s=>s.readOnly}"
        tabindex="${s=>s.disabled?null:0}"
        @keypress="${(s,i)=>s.keypressHandler(i.event)}"
        @click="${(s,i)=>s.clickHandler(i.event)}"
        class="${s=>s.checked?"checked":""}"
    >
        <label
            part="label"
            class="${s=>s.defaultSlottedNodes&&s.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${et("defaultSlottedNodes")}></slot>
        </label>
        <div part="switch" class="switch">
            <slot name="switch">${e.switch||""}</slot>
        </div>
        <span class="status-message" part="status-message">
            <span class="checked-message" part="checked-message">
                <slot name="checked-message"></slot>
            </span>
            <span class="unchecked-message" part="unchecked-message">
                <slot name="unchecked-message"></slot>
            </span>
        </span>
    </template>
`;class Mw extends fe{}class Lw extends Su(Mw){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Tu extends Lw{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{if(!this.readOnly)switch(e.key){case Ri:case Un:this.checked=!this.checked;break}},this.clickHandler=e=>{!this.disabled&&!this.readOnly&&(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly),this.readOnly?this.classList.add("readonly"):this.classList.remove("readonly")}checkedChanged(e,s){super.checkedChanged(e,s),this.checked?this.classList.add("checked"):this.classList.remove("checked")}}h([p({attribute:"readonly",mode:"boolean"})],Tu.prototype,"readOnly",void 0);h([k],Tu.prototype,"defaultSlottedNodes",void 0);const Vw=(t,e)=>M`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`;class Hw extends fe{}const Nw=(t,e)=>M`
    <template slot="tab" role="tab" aria-disabled="${s=>s.disabled}">
        <slot></slot>
    </template>
`;class Km extends fe{}h([p({mode:"boolean"})],Km.prototype,"disabled",void 0);const zw=(t,e)=>M`
    <template class="${s=>s.orientation}">
        ${Jt(t,e)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${et("tabs")}></slot>

            ${ut(s=>s.showActiveIndicator,M`
                    <div
                        ${Re("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${Qt(t,e)}
        <div class="tabpanel" part="tabpanel">
            <slot name="tabpanel" ${et("tabpanels")}></slot>
        </div>
    </template>
`,Af={vertical:"vertical",horizontal:"horizontal"};class Vi extends fe{constructor(){super(...arguments),this.orientation=Af.horizontal,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=e=>e.getAttribute("aria-disabled")==="true",this.isHiddenElement=e=>e.hasAttribute("hidden"),this.isFocusableElement=e=>!this.isDisabledElement(e)&&!this.isHiddenElement(e),this.setTabs=()=>{const e="gridColumn",s="gridRow",i=this.isHorizontal()?e:s;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach((n,o)=>{if(n.slot==="tab"){const r=this.activeTabIndex===o&&this.isFocusableElement(n);this.activeindicator&&this.isFocusableElement(n)&&(this.showActiveIndicator=!0);const a=this.tabIds[o],l=this.tabpanelIds[o];n.setAttribute("id",a),n.setAttribute("aria-selected",r?"true":"false"),n.setAttribute("aria-controls",l),n.addEventListener("click",this.handleTabClick),n.addEventListener("keydown",this.handleTabKeyDown),n.setAttribute("tabindex",r?"0":"-1"),r&&(this.activetab=n,this.activeid=a)}n.style[e]="",n.style[s]="",n.style[i]=`${o+1}`,this.isHorizontal()?n.classList.remove("vertical"):n.classList.add("vertical")})},this.setTabPanels=()=>{this.tabpanels.forEach((e,s)=>{const i=this.tabIds[s],n=this.tabpanelIds[s];e.setAttribute("id",n),e.setAttribute("aria-labelledby",i),this.activeTabIndex!==s?e.setAttribute("hidden",""):e.removeAttribute("hidden")})},this.handleTabClick=e=>{const s=e.currentTarget;s.nodeType===1&&this.isFocusableElement(s)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(s),this.setComponent())},this.handleTabKeyDown=e=>{if(this.isHorizontal())switch(e.key){case an:e.preventDefault(),this.adjustBackward(e);break;case ln:e.preventDefault(),this.adjustForward(e);break}else switch(e.key){case Rs:e.preventDefault(),this.adjustBackward(e);break;case Ds:e.preventDefault(),this.adjustForward(e);break}switch(e.key){case di:e.preventDefault(),this.adjust(-this.activeTabIndex);break;case ui:e.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1);break}},this.adjustForward=e=>{const s=this.tabs;let i=0;for(i=this.activetab?s.indexOf(this.activetab)+1:1,i===s.length&&(i=0);i<s.length&&s.length>1;)if(this.isFocusableElement(s[i])){this.moveToTabByIndex(s,i);break}else{if(this.activetab&&i===s.indexOf(this.activetab))break;i+1>=s.length?i=0:i+=1}},this.adjustBackward=e=>{const s=this.tabs;let i=0;for(i=this.activetab?s.indexOf(this.activetab)-1:0,i=i<0?s.length-1:i;i>=0&&s.length>1;)if(this.isFocusableElement(s[i])){this.moveToTabByIndex(s,i);break}else i-1<0?i=s.length-1:i-=1},this.moveToTabByIndex=(e,s)=>{const i=e[s];this.activetab=i,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=s,i.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(e,s){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex(i=>i.id===e),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return this.activeid!==void 0?this.tabIds.indexOf(this.activeid)===-1?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map(e=>{var s;return(s=e.getAttribute("id"))!==null&&s!==void 0?s:`tab-${Lr()}`})}getTabPanelIds(){return this.tabpanels.map(e=>{var s;return(s=e.getAttribute("id"))!==null&&s!==void 0?s:`panel-${Lr()}`})}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===Af.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const e=this.isHorizontal()?"gridColumn":"gridRow",s=this.isHorizontal()?"translateX":"translateY",i=this.isHorizontal()?"offsetLeft":"offsetTop",n=this.activeIndicatorRef[i];this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`;const o=this.activeIndicatorRef[i];this.activeIndicatorRef.style[e]=`${this.prevActiveTabIndex+1}`;const r=o-n;this.activeIndicatorRef.style.transform=`${s}(${r}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",()=>{this.ticking=!1,this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${s}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")})}adjust(e){const s=this.tabs.filter(r=>this.isFocusableElement(r)),i=s.indexOf(this.activetab),n=Al(0,s.length-1,i+e),o=this.tabs.indexOf(s[n]);o>-1&&this.moveToTabByIndex(this.tabs,o)}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}h([p],Vi.prototype,"orientation",void 0);h([p],Vi.prototype,"activeid",void 0);h([k],Vi.prototype,"tabs",void 0);h([k],Vi.prototype,"tabpanels",void 0);h([p({mode:"boolean"})],Vi.prototype,"activeindicator",void 0);h([k],Vi.prototype,"activeIndicatorRef",void 0);h([k],Vi.prototype,"showActiveIndicator",void 0);st(Vi,rs);class Bw extends fe{}class jw extends Ei(Bw){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}const eg={none:"none",both:"both",horizontal:"horizontal",vertical:"vertical"};let jt=class extends jw{constructor(){super(...arguments),this.resize=eg.none,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};h([p({mode:"boolean"})],jt.prototype,"readOnly",void 0);h([p],jt.prototype,"resize",void 0);h([p({mode:"boolean"})],jt.prototype,"autofocus",void 0);h([p({attribute:"form"})],jt.prototype,"formId",void 0);h([p],jt.prototype,"list",void 0);h([p({converter:G})],jt.prototype,"maxlength",void 0);h([p({converter:G})],jt.prototype,"minlength",void 0);h([p],jt.prototype,"name",void 0);h([p],jt.prototype,"placeholder",void 0);h([p({converter:G,mode:"fromView"})],jt.prototype,"cols",void 0);h([p({converter:G,mode:"fromView"})],jt.prototype,"rows",void 0);h([p({mode:"boolean"})],jt.prototype,"spellcheck",void 0);h([k],jt.prototype,"defaultSlottedNodes",void 0);st(jt,Bl);const Uw=(t,e)=>M`
    <template
        class="
            ${s=>s.readOnly?"readonly":""}
            ${s=>s.resize!==eg.none?`resize-${s.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${s=>s.defaultSlottedNodes&&s.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${et("defaultSlottedNodes")}></slot>
        </label>
        <textarea
            part="control"
            class="control"
            id="control"
            ?autofocus="${s=>s.autofocus}"
            cols="${s=>s.cols}"
            ?disabled="${s=>s.disabled}"
            form="${s=>s.form}"
            list="${s=>s.list}"
            maxlength="${s=>s.maxlength}"
            minlength="${s=>s.minlength}"
            name="${s=>s.name}"
            placeholder="${s=>s.placeholder}"
            ?readonly="${s=>s.readOnly}"
            ?required="${s=>s.required}"
            rows="${s=>s.rows}"
            ?spellcheck="${s=>s.spellcheck}"
            :value="${s=>s.value}"
            aria-atomic="${s=>s.ariaAtomic}"
            aria-busy="${s=>s.ariaBusy}"
            aria-controls="${s=>s.ariaControls}"
            aria-current="${s=>s.ariaCurrent}"
            aria-describedby="${s=>s.ariaDescribedby}"
            aria-details="${s=>s.ariaDetails}"
            aria-disabled="${s=>s.ariaDisabled}"
            aria-errormessage="${s=>s.ariaErrormessage}"
            aria-flowto="${s=>s.ariaFlowto}"
            aria-haspopup="${s=>s.ariaHaspopup}"
            aria-hidden="${s=>s.ariaHidden}"
            aria-invalid="${s=>s.ariaInvalid}"
            aria-keyshortcuts="${s=>s.ariaKeyshortcuts}"
            aria-label="${s=>s.ariaLabel}"
            aria-labelledby="${s=>s.ariaLabelledby}"
            aria-live="${s=>s.ariaLive}"
            aria-owns="${s=>s.ariaOwns}"
            aria-relevant="${s=>s.ariaRelevant}"
            aria-roledescription="${s=>s.ariaRoledescription}"
            @input="${(s,i)=>s.handleTextInput()}"
            @change="${s=>s.handleChange()}"
            ${Re("control")}
        ></textarea>
    </template>
`,Yw=(t,e)=>M`
    <template
        class="
            ${s=>s.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${s=>s.defaultSlottedNodes&&s.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${et({property:"defaultSlottedNodes",filter:Qm})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${Jt(t,e)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${s=>s.handleTextInput()}"
                @change="${s=>s.handleChange()}"
                ?autofocus="${s=>s.autofocus}"
                ?disabled="${s=>s.disabled}"
                list="${s=>s.list}"
                maxlength="${s=>s.maxlength}"
                minlength="${s=>s.minlength}"
                pattern="${s=>s.pattern}"
                placeholder="${s=>s.placeholder}"
                ?readonly="${s=>s.readOnly}"
                ?required="${s=>s.required}"
                size="${s=>s.size}"
                ?spellcheck="${s=>s.spellcheck}"
                :value="${s=>s.value}"
                type="${s=>s.type}"
                aria-atomic="${s=>s.ariaAtomic}"
                aria-busy="${s=>s.ariaBusy}"
                aria-controls="${s=>s.ariaControls}"
                aria-current="${s=>s.ariaCurrent}"
                aria-describedby="${s=>s.ariaDescribedby}"
                aria-details="${s=>s.ariaDetails}"
                aria-disabled="${s=>s.ariaDisabled}"
                aria-errormessage="${s=>s.ariaErrormessage}"
                aria-flowto="${s=>s.ariaFlowto}"
                aria-haspopup="${s=>s.ariaHaspopup}"
                aria-hidden="${s=>s.ariaHidden}"
                aria-invalid="${s=>s.ariaInvalid}"
                aria-keyshortcuts="${s=>s.ariaKeyshortcuts}"
                aria-label="${s=>s.ariaLabel}"
                aria-labelledby="${s=>s.ariaLabelledby}"
                aria-live="${s=>s.ariaLive}"
                aria-owns="${s=>s.ariaOwns}"
                aria-relevant="${s=>s.ariaRelevant}"
                aria-roledescription="${s=>s.ariaRoledescription}"
                ${Re("control")}
            />
            ${Qt(t,e)}
        </div>
    </template>
`,Ww=(t,e)=>M`
    <template
        aria-label="${s=>s.ariaLabel}"
        aria-labelledby="${s=>s.ariaLabelledby}"
        aria-orientation="${s=>s.orientation}"
        orientation="${s=>s.orientation}"
        role="toolbar"
        @click="${(s,i)=>s.clickHandler(i.event)}"
        @focusin="${(s,i)=>s.focusinHandler(i.event)}"
        @keydown="${(s,i)=>s.keydownHandler(i.event)}"
        ${El({property:"childItems",attributeFilter:["disabled","hidden"],filter:Ii(),subtree:!0})}
    >
        <slot name="label"></slot>
        <div class="positioning-region" part="positioning-region">
            ${Jt(t,e)}
            <slot
                ${et({filter:Ii(),property:"slottedItems"})}
            ></slot>
            ${Qt(t,e)}
        </div>
    </template>
`,Pf=Object.freeze({[mo.ArrowUp]:{[gt.vertical]:-1},[mo.ArrowDown]:{[gt.vertical]:1},[mo.ArrowLeft]:{[gt.horizontal]:{[Ze.ltr]:-1,[Ze.rtl]:1}},[mo.ArrowRight]:{[gt.horizontal]:{[Ze.ltr]:1,[Ze.rtl]:-1}}});let gn=class Pd extends fe{constructor(){super(...arguments),this._activeIndex=0,this.direction=Ze.ltr,this.orientation=gt.horizontal}get activeIndex(){return le.track(this,"activeIndex"),this._activeIndex}set activeIndex(e){this.$fastController.isConnected&&(this._activeIndex=Al(0,this.focusableElements.length-1,e),le.notify(this,"activeIndex"))}slottedItemsChanged(){this.$fastController.isConnected&&this.reduceFocusableElements()}clickHandler(e){var s;const i=(s=this.focusableElements)===null||s===void 0?void 0:s.indexOf(e.target);return i>-1&&this.activeIndex!==i&&this.setFocusedElement(i),!0}childItemsChanged(e,s){this.$fastController.isConnected&&this.reduceFocusableElements()}connectedCallback(){super.connectedCallback(),this.direction=Hn(this)}focusinHandler(e){const s=e.relatedTarget;!s||this.contains(s)||this.setFocusedElement()}getDirectionalIncrementer(e){var s,i,n,o,r;return(r=(n=(i=(s=Pf[e])===null||s===void 0?void 0:s[this.orientation])===null||i===void 0?void 0:i[this.direction])!==null&&n!==void 0?n:(o=Pf[e])===null||o===void 0?void 0:o[this.orientation])!==null&&r!==void 0?r:0}keydownHandler(e){const s=e.key;if(!(s in mo)||e.defaultPrevented||e.shiftKey)return!0;const i=this.getDirectionalIncrementer(s);if(!i)return!e.target.closest("[role=radiogroup]");const n=this.activeIndex+i;return this.focusableElements[n]&&e.preventDefault(),this.setFocusedElement(n),!0}get allSlottedItems(){return[...this.start.assignedElements(),...this.slottedItems,...this.end.assignedElements()]}reduceFocusableElements(){var e;const s=(e=this.focusableElements)===null||e===void 0?void 0:e[this.activeIndex];this.focusableElements=this.allSlottedItems.reduce(Pd.reduceFocusableItems,[]);const i=this.focusableElements.indexOf(s);this.activeIndex=Math.max(0,i),this.setFocusableElements()}setFocusedElement(e=this.activeIndex){var s;this.activeIndex=e,this.setFocusableElements(),(s=this.focusableElements[this.activeIndex])===null||s===void 0||s.focus()}static reduceFocusableItems(e,s){var i,n,o,r;const a=s.getAttribute("role")==="radio",l=(n=(i=s.$fastController)===null||i===void 0?void 0:i.definition.shadowOptions)===null||n===void 0?void 0:n.delegatesFocus,c=Array.from((r=(o=s.shadowRoot)===null||o===void 0?void 0:o.querySelectorAll("*"))!==null&&r!==void 0?r:[]).some(d=>Ef(d));return!s.hasAttribute("disabled")&&!s.hasAttribute("hidden")&&(Ef(s)||a||l||c)?(e.push(s),e):s.childElementCount?e.concat(Array.from(s.children).reduce(Pd.reduceFocusableItems,[])):e}setFocusableElements(){this.$fastController.isConnected&&this.focusableElements.length>0&&this.focusableElements.forEach((e,s)=>{e.tabIndex=this.activeIndex===s?0:-1})}};h([k],gn.prototype,"direction",void 0);h([p],gn.prototype,"orientation",void 0);h([k],gn.prototype,"slottedItems",void 0);h([k],gn.prototype,"slottedLabel",void 0);h([k],gn.prototype,"childItems",void 0);class Ul{}h([p({attribute:"aria-labelledby"})],Ul.prototype,"ariaLabelledby",void 0);h([p({attribute:"aria-label"})],Ul.prototype,"ariaLabel",void 0);st(Ul,Xe);st(gn,rs,Ul);const qw=(t,e)=>M`
        ${ut(s=>s.tooltipVisible,M`
            <${t.tagFor(ae)}
                fixed-placement="true"
                auto-update-mode="${s=>s.autoUpdateMode}"
                vertical-positioning-mode="${s=>s.verticalPositioningMode}"
                vertical-default-position="${s=>s.verticalDefaultPosition}"
                vertical-inset="${s=>s.verticalInset}"
                vertical-scaling="${s=>s.verticalScaling}"
                horizontal-positioning-mode="${s=>s.horizontalPositioningMode}"
                horizontal-default-position="${s=>s.horizontalDefaultPosition}"
                horizontal-scaling="${s=>s.horizontalScaling}"
                horizontal-inset="${s=>s.horizontalInset}"
                vertical-viewport-lock="${s=>s.horizontalViewportLock}"
                horizontal-viewport-lock="${s=>s.verticalViewportLock}"
                dir="${s=>s.currentDirection}"
                ${Re("region")}
            >
                <div class="tooltip" part="tooltip" role="tooltip">
                    <slot></slot>
                </div>
            </${t.tagFor(ae)}>
        `)}
    `,ts={top:"top",right:"right",bottom:"bottom",left:"left",start:"start",end:"end",topLeft:"top-left",topRight:"top-right",bottomLeft:"bottom-left",bottomRight:"bottom-right",topStart:"top-start",topEnd:"top-end",bottomStart:"bottom-start",bottomEnd:"bottom-end"};let xt=class extends fe{constructor(){super(...arguments),this.anchor="",this.delay=300,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.horizontalInset="false",this.verticalInset="false",this.horizontalScaling="content",this.verticalScaling="content",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition=void 0,this.tooltipVisible=!1,this.currentDirection=Ze.ltr,this.showDelayTimer=null,this.hideDelayTimer=null,this.isAnchorHoveredFocused=!1,this.isRegionHovered=!1,this.handlePositionChange=e=>{this.classList.toggle("top",this.region.verticalPosition==="start"),this.classList.toggle("bottom",this.region.verticalPosition==="end"),this.classList.toggle("inset-top",this.region.verticalPosition==="insetStart"),this.classList.toggle("inset-bottom",this.region.verticalPosition==="insetEnd"),this.classList.toggle("center-vertical",this.region.verticalPosition==="center"),this.classList.toggle("left",this.region.horizontalPosition==="start"),this.classList.toggle("right",this.region.horizontalPosition==="end"),this.classList.toggle("inset-left",this.region.horizontalPosition==="insetStart"),this.classList.toggle("inset-right",this.region.horizontalPosition==="insetEnd"),this.classList.toggle("center-horizontal",this.region.horizontalPosition==="center")},this.handleRegionMouseOver=e=>{this.isRegionHovered=!0},this.handleRegionMouseOut=e=>{this.isRegionHovered=!1,this.startHideDelayTimer()},this.handleAnchorMouseOver=e=>{if(this.tooltipVisible){this.isAnchorHoveredFocused=!0;return}this.startShowDelayTimer()},this.handleAnchorMouseOut=e=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.handleAnchorFocusIn=e=>{this.startShowDelayTimer()},this.handleAnchorFocusOut=e=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.startHideDelayTimer=()=>{this.clearHideDelayTimer(),this.tooltipVisible&&(this.hideDelayTimer=window.setTimeout(()=>{this.updateTooltipVisibility()},60))},this.clearHideDelayTimer=()=>{this.hideDelayTimer!==null&&(clearTimeout(this.hideDelayTimer),this.hideDelayTimer=null)},this.startShowDelayTimer=()=>{if(!this.isAnchorHoveredFocused){if(this.delay>1){this.showDelayTimer===null&&(this.showDelayTimer=window.setTimeout(()=>{this.startHover()},this.delay));return}this.startHover()}},this.startHover=()=>{this.isAnchorHoveredFocused=!0,this.updateTooltipVisibility()},this.clearShowDelayTimer=()=>{this.showDelayTimer!==null&&(clearTimeout(this.showDelayTimer),this.showDelayTimer=null)},this.getAnchor=()=>{const e=this.getRootNode();return e instanceof ShadowRoot?e.getElementById(this.anchor):document.getElementById(this.anchor)},this.handleDocumentKeydown=e=>{if(!e.defaultPrevented&&this.tooltipVisible)switch(e.key){case Yo:this.isAnchorHoveredFocused=!1,this.updateTooltipVisibility(),this.$emit("dismiss");break}},this.updateTooltipVisibility=()=>{if(this.visible===!1)this.hideTooltip();else if(this.visible===!0){this.showTooltip();return}else{if(this.isAnchorHoveredFocused||this.isRegionHovered){this.showTooltip();return}this.hideTooltip()}},this.showTooltip=()=>{this.tooltipVisible||(this.currentDirection=Hn(this),this.tooltipVisible=!0,document.addEventListener("keydown",this.handleDocumentKeydown),de.queueUpdate(this.setRegionProps))},this.hideTooltip=()=>{this.tooltipVisible&&(this.clearHideDelayTimer(),this.region!==null&&this.region!==void 0&&(this.region.removeEventListener("positionchange",this.handlePositionChange),this.region.viewportElement=null,this.region.anchorElement=null,this.region.removeEventListener("mouseover",this.handleRegionMouseOver),this.region.removeEventListener("mouseout",this.handleRegionMouseOut)),document.removeEventListener("keydown",this.handleDocumentKeydown),this.tooltipVisible=!1)},this.setRegionProps=()=>{this.tooltipVisible&&(this.region.viewportElement=this.viewportElement,this.region.anchorElement=this.anchorElement,this.region.addEventListener("positionchange",this.handlePositionChange),this.region.addEventListener("mouseover",this.handleRegionMouseOver,{passive:!0}),this.region.addEventListener("mouseout",this.handleRegionMouseOut,{passive:!0}))}}visibleChanged(){this.$fastController.isConnected&&(this.updateTooltipVisibility(),this.updateLayout())}anchorChanged(){this.$fastController.isConnected&&(this.anchorElement=this.getAnchor())}positionChanged(){this.$fastController.isConnected&&this.updateLayout()}anchorElementChanged(e){if(this.$fastController.isConnected){if(e!=null&&(e.removeEventListener("mouseover",this.handleAnchorMouseOver),e.removeEventListener("mouseout",this.handleAnchorMouseOut),e.removeEventListener("focusin",this.handleAnchorFocusIn),e.removeEventListener("focusout",this.handleAnchorFocusOut)),this.anchorElement!==null&&this.anchorElement!==void 0){this.anchorElement.addEventListener("mouseover",this.handleAnchorMouseOver,{passive:!0}),this.anchorElement.addEventListener("mouseout",this.handleAnchorMouseOut,{passive:!0}),this.anchorElement.addEventListener("focusin",this.handleAnchorFocusIn,{passive:!0}),this.anchorElement.addEventListener("focusout",this.handleAnchorFocusOut,{passive:!0});const s=this.anchorElement.id;this.anchorElement.parentElement!==null&&this.anchorElement.parentElement.querySelectorAll(":hover").forEach(i=>{i.id===s&&this.startShowDelayTimer()})}this.region!==null&&this.region!==void 0&&this.tooltipVisible&&(this.region.anchorElement=this.anchorElement),this.updateLayout()}}viewportElementChanged(){this.region!==null&&this.region!==void 0&&(this.region.viewportElement=this.viewportElement),this.updateLayout()}connectedCallback(){super.connectedCallback(),this.anchorElement=this.getAnchor(),this.updateTooltipVisibility()}disconnectedCallback(){this.hideTooltip(),this.clearShowDelayTimer(),this.clearHideDelayTimer(),super.disconnectedCallback()}updateLayout(){switch(this.verticalPositioningMode="locktodefault",this.horizontalPositioningMode="locktodefault",this.position){case ts.top:case ts.bottom:this.verticalDefaultPosition=this.position,this.horizontalDefaultPosition="center";break;case ts.right:case ts.left:case ts.start:case ts.end:this.verticalDefaultPosition="center",this.horizontalDefaultPosition=this.position;break;case ts.topLeft:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="left";break;case ts.topRight:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="right";break;case ts.bottomLeft:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="left";break;case ts.bottomRight:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="right";break;case ts.topStart:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="start";break;case ts.topEnd:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="end";break;case ts.bottomStart:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="start";break;case ts.bottomEnd:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="end";break;default:this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition="center";break}}};h([p({mode:"boolean"})],xt.prototype,"visible",void 0);h([p],xt.prototype,"anchor",void 0);h([p],xt.prototype,"delay",void 0);h([p],xt.prototype,"position",void 0);h([p({attribute:"auto-update-mode"})],xt.prototype,"autoUpdateMode",void 0);h([p({attribute:"horizontal-viewport-lock"})],xt.prototype,"horizontalViewportLock",void 0);h([p({attribute:"vertical-viewport-lock"})],xt.prototype,"verticalViewportLock",void 0);h([k],xt.prototype,"anchorElement",void 0);h([k],xt.prototype,"viewportElement",void 0);h([k],xt.prototype,"verticalPositioningMode",void 0);h([k],xt.prototype,"horizontalPositioningMode",void 0);h([k],xt.prototype,"horizontalInset",void 0);h([k],xt.prototype,"verticalInset",void 0);h([k],xt.prototype,"horizontalScaling",void 0);h([k],xt.prototype,"verticalScaling",void 0);h([k],xt.prototype,"verticalDefaultPosition",void 0);h([k],xt.prototype,"horizontalDefaultPosition",void 0);h([k],xt.prototype,"tooltipVisible",void 0);h([k],xt.prototype,"currentDirection",void 0);const Gw=(t,e)=>M`
    <template
        role="treeitem"
        slot="${s=>s.isNestedItem()?"item":void 0}"
        tabindex="-1"
        class="${s=>s.expanded?"expanded":""} ${s=>s.selected?"selected":""} ${s=>s.nested?"nested":""}
            ${s=>s.disabled?"disabled":""}"
        aria-expanded="${s=>s.childItems&&s.childItemLength()>0?s.expanded:void 0}"
        aria-selected="${s=>s.selected}"
        aria-disabled="${s=>s.disabled}"
        @focusin="${(s,i)=>s.handleFocus(i.event)}"
        @focusout="${(s,i)=>s.handleBlur(i.event)}"
        ${El({property:"childItems",filter:Ii()})}
    >
        <div class="positioning-region" part="positioning-region">
            <div class="content-region" part="content-region">
                ${ut(s=>s.childItems&&s.childItemLength()>0,M`
                        <div
                            aria-hidden="true"
                            class="expand-collapse-button"
                            part="expand-collapse-button"
                            @click="${(s,i)=>s.handleExpandCollapseButtonClick(i.event)}"
                            ${Re("expandCollapseButton")}
                        >
                            <slot name="expand-collapse-glyph">
                                ${e.expandCollapseGlyph||""}
                            </slot>
                        </div>
                    `)}
                ${Jt(t,e)}
                <slot></slot>
                ${Qt(t,e)}
            </div>
        </div>
        ${ut(s=>s.childItems&&s.childItemLength()>0&&(s.expanded||s.renderCollapsedChildren),M`
                <div role="group" class="items" part="items">
                    <slot name="item" ${et("items")}></slot>
                </div>
            `)}
    </template>
`;function Qi(t){return Ro(t)&&t.getAttribute("role")==="treeitem"}class _t extends fe{constructor(){super(...arguments),this.expanded=!1,this.focusable=!1,this.isNestedItem=()=>Qi(this.parentElement),this.handleExpandCollapseButtonClick=e=>{!this.disabled&&!e.defaultPrevented&&(this.expanded=!this.expanded)},this.handleFocus=e=>{this.setAttribute("tabindex","0")},this.handleBlur=e=>{this.setAttribute("tabindex","-1")}}expandedChanged(){this.$fastController.isConnected&&this.$emit("expanded-change",this)}selectedChanged(){this.$fastController.isConnected&&this.$emit("selected-change",this)}itemsChanged(e,s){this.$fastController.isConnected&&this.items.forEach(i=>{Qi(i)&&(i.nested=!0)})}static focusItem(e){e.focusable=!0,e.focus()}childItemLength(){const e=this.childItems.filter(s=>Qi(s));return e?e.length:0}}h([p({mode:"boolean"})],_t.prototype,"expanded",void 0);h([p({mode:"boolean"})],_t.prototype,"selected",void 0);h([p({mode:"boolean"})],_t.prototype,"disabled",void 0);h([k],_t.prototype,"focusable",void 0);h([k],_t.prototype,"childItems",void 0);h([k],_t.prototype,"items",void 0);h([k],_t.prototype,"nested",void 0);h([k],_t.prototype,"renderCollapsedChildren",void 0);st(_t,rs);const Zw=(t,e)=>M`
    <template
        role="tree"
        ${Re("treeView")}
        @keydown="${(s,i)=>s.handleKeyDown(i.event)}"
        @focusin="${(s,i)=>s.handleFocus(i.event)}"
        @focusout="${(s,i)=>s.handleBlur(i.event)}"
        @click="${(s,i)=>s.handleClick(i.event)}"
        @selected-change="${(s,i)=>s.handleSelectedChange(i.event)}"
    >
        <slot ${et("slottedTreeItems")}></slot>
    </template>
`;class Yl extends fe{constructor(){super(...arguments),this.currentFocused=null,this.handleFocus=e=>{if(!(this.slottedTreeItems.length<1)){if(e.target===this){this.currentFocused===null&&(this.currentFocused=this.getValidFocusableItem()),this.currentFocused!==null&&_t.focusItem(this.currentFocused);return}this.contains(e.target)&&(this.setAttribute("tabindex","-1"),this.currentFocused=e.target)}},this.handleBlur=e=>{e.target instanceof HTMLElement&&(e.relatedTarget===null||!this.contains(e.relatedTarget))&&this.setAttribute("tabindex","0")},this.handleKeyDown=e=>{if(e.defaultPrevented)return;if(this.slottedTreeItems.length<1)return!0;const s=this.getVisibleNodes();switch(e.key){case di:s.length&&_t.focusItem(s[0]);return;case ui:s.length&&_t.focusItem(s[s.length-1]);return;case an:if(e.target&&this.isFocusableElement(e.target)){const i=e.target;i instanceof _t&&i.childItemLength()>0&&i.expanded?i.expanded=!1:i instanceof _t&&i.parentElement instanceof _t&&_t.focusItem(i.parentElement)}return!1;case ln:if(e.target&&this.isFocusableElement(e.target)){const i=e.target;i instanceof _t&&i.childItemLength()>0&&!i.expanded?i.expanded=!0:i instanceof _t&&i.childItemLength()>0&&this.focusNextNode(1,e.target)}return;case Ds:e.target&&this.isFocusableElement(e.target)&&this.focusNextNode(1,e.target);return;case Rs:e.target&&this.isFocusableElement(e.target)&&this.focusNextNode(-1,e.target);return;case Ri:this.handleClick(e);return}return!0},this.handleSelectedChange=e=>{if(e.defaultPrevented)return;if(!(e.target instanceof Element)||!Qi(e.target))return!0;const s=e.target;s.selected?(this.currentSelected&&this.currentSelected!==s&&(this.currentSelected.selected=!1),this.currentSelected=s):!s.selected&&this.currentSelected===s&&(this.currentSelected=null)},this.setItems=()=>{const e=this.treeView.querySelector("[aria-selected='true']");this.currentSelected=e,(this.currentFocused===null||!this.contains(this.currentFocused))&&(this.currentFocused=this.getValidFocusableItem()),this.nested=this.checkForNestedItems(),this.getVisibleNodes().forEach(i=>{Qi(i)&&(i.nested=this.nested)})},this.isFocusableElement=e=>Qi(e),this.isSelectedElement=e=>e.selected}slottedTreeItemsChanged(){this.$fastController.isConnected&&this.setItems()}connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),de.queueUpdate(()=>{this.setItems()})}handleClick(e){if(e.defaultPrevented)return;if(!(e.target instanceof Element)||!Qi(e.target))return!0;const s=e.target;s.disabled||(s.selected=!s.selected)}focusNextNode(e,s){const i=this.getVisibleNodes();if(!i)return;const n=i[i.indexOf(s)+e];Ro(n)&&_t.focusItem(n)}getValidFocusableItem(){const e=this.getVisibleNodes();let s=e.findIndex(this.isSelectedElement);return s===-1&&(s=e.findIndex(this.isFocusableElement)),s!==-1?e[s]:null}checkForNestedItems(){return this.slottedTreeItems.some(e=>Qi(e)&&e.querySelector("[role='treeitem']"))}getVisibleNodes(){return W0(this,"[role='treeitem']")||[]}}h([p({attribute:"render-collapsed-nodes"})],Yl.prototype,"renderCollapsedNodes",void 0);h([k],Yl.prototype,"currentSelected",void 0);h([k],Yl.prototype,"slottedTreeItems",void 0);class Xw{constructor(e){this.listenerCache=new WeakMap,this.query=e}bind(e){const{query:s}=this,i=this.constructListener(e);i.bind(s)(),s.addListener(i),this.listenerCache.set(e,i)}unbind(e){const s=this.listenerCache.get(e);s&&(this.query.removeListener(s),this.listenerCache.delete(e))}}class aa extends Xw{constructor(e,s){super(e),this.styles=s}static with(e){return s=>new aa(e,s)}constructListener(e){let s=!1;const i=this.styles;return function(){const{matches:o}=this;o&&!s?(e.$fastController.addStyles(i),s=o):!o&&s&&(e.$fastController.removeStyles(i),s=o)}}unbind(e){super.unbind(e),e.$fastController.removeStyles(this.styles)}}const _e=aa.with(window.matchMedia("(forced-colors)"));aa.with(window.matchMedia("(prefers-color-scheme: dark)"));aa.with(window.matchMedia("(prefers-color-scheme: light)"));class Qw{constructor(e,s,i){this.propertyName=e,this.value=s,this.styles=i}bind(e){le.getNotifier(e).subscribe(this,this.propertyName),this.handleChange(e,this.propertyName)}unbind(e){le.getNotifier(e).unsubscribe(this,this.propertyName),e.$fastController.removeStyles(this.styles)}handleChange(e,s){e[s]===this.value?e.$fastController.addStyles(this.styles):e.$fastController.removeStyles(this.styles)}}const Os="not-allowed",Jw=":host([hidden]){display:none}";function ke(t){return`${Jw}:host{display:${t}}`}const pe=G0()?"focus-visible":"focus";function In(t,e,s){return isNaN(t)||t<=e?e:t>=s?s:t}function id(t,e,s){return isNaN(t)||t<=e?0:t>=s?1:t/(s-e)}function wn(t,e,s){return isNaN(t)?e:e+t*(s-e)}function Kw(t){const e=Math.round(In(t,0,255)).toString(16);return e.length===1?"0"+e:e}function Fa(t,e,s){return isNaN(t)||t<=0?e:t>=1?s:e+t*(s-e)}function Zt(t,e){const s=Math.pow(10,e);return Math.round(t*s)/s}class Nr{constructor(e,s,i){this.h=e,this.s=s,this.l=i}static fromObject(e){return e&&!isNaN(e.h)&&!isNaN(e.s)&&!isNaN(e.l)?new Nr(e.h,e.s,e.l):null}equalValue(e){return this.h===e.h&&this.s===e.s&&this.l===e.l}roundToPrecision(e){return new Nr(Zt(this.h,e),Zt(this.s,e),Zt(this.l,e))}toObject(){return{h:this.h,s:this.s,l:this.l}}}class Tt{constructor(e,s,i){this.l=e,this.a=s,this.b=i}static fromObject(e){return e&&!isNaN(e.l)&&!isNaN(e.a)&&!isNaN(e.b)?new Tt(e.l,e.a,e.b):null}equalValue(e){return this.l===e.l&&this.a===e.a&&this.b===e.b}roundToPrecision(e){return new Tt(Zt(this.l,e),Zt(this.a,e),Zt(this.b,e))}toObject(){return{l:this.l,a:this.a,b:this.b}}}Tt.epsilon=216/24389;Tt.kappa=24389/27;class yt{constructor(e,s,i,n){this.r=e,this.g=s,this.b=i,this.a=typeof n=="number"&&!isNaN(n)?n:1}static fromObject(e){return e&&!isNaN(e.r)&&!isNaN(e.g)&&!isNaN(e.b)?new yt(e.r,e.g,e.b,e.a):null}equalValue(e){return this.r===e.r&&this.g===e.g&&this.b===e.b&&this.a===e.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(wn(this.r,0,255))},${Math.round(wn(this.g,0,255))},${Math.round(wn(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(wn(this.r,0,255))},${Math.round(wn(this.g,0,255))},${Math.round(wn(this.b,0,255))},${In(this.a,0,1)})`}roundToPrecision(e){return new yt(Zt(this.r,e),Zt(this.g,e),Zt(this.b,e),Zt(this.a,e))}clamp(){return new yt(In(this.r,0,1),In(this.g,0,1),In(this.b,0,1),In(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(e){return Kw(wn(e,0,255))}}class fs{constructor(e,s,i){this.x=e,this.y=s,this.z=i}static fromObject(e){return e&&!isNaN(e.x)&&!isNaN(e.y)&&!isNaN(e.z)?new fs(e.x,e.y,e.z):null}equalValue(e){return this.x===e.x&&this.y===e.y&&this.z===e.z}roundToPrecision(e){return new fs(Zt(this.x,e),Zt(this.y,e),Zt(this.z,e))}toObject(){return{x:this.x,y:this.y,z:this.z}}}fs.whitePoint=new fs(.95047,1,1.08883);function e$(t){return t.r*.2126+t.g*.7152+t.b*.0722}function tg(t){function e(s){return s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4)}return e$(new yt(e(t.r),e(t.g),e(t.b),1))}function nd(t,e,s){return s-e===0?0:(t-e)/(s-e)}function od(t,e,s){const i=nd(t.r,e.r,s.r),n=nd(t.g,e.g,s.g),o=nd(t.b,e.b,s.b);return(i+n+o)/3}function t$(t,e,s=null){let i=0,n=s;return n!==null?i=od(t,e,n):(n=new yt(0,0,0,1),i=od(t,e,n),i<=0&&(n=new yt(1,1,1,1),i=od(t,e,n))),i=Math.round(i*1e3)/1e3,new yt(n.r,n.g,n.b,i)}function Mf(t){const e=Math.max(t.r,t.g,t.b),s=Math.min(t.r,t.g,t.b),i=e-s;let n=0;i!==0&&(e===t.r?n=60*((t.g-t.b)/i%6):e===t.g?n=60*((t.b-t.r)/i+2):n=60*((t.r-t.g)/i+4)),n<0&&(n+=360);const o=(e+s)/2;let r=0;return i!==0&&(r=i/(1-Math.abs(2*o-1))),new Nr(n,r,o)}function s$(t,e=1){const s=(1-Math.abs(2*t.l-1))*t.s,i=s*(1-Math.abs(t.h/60%2-1)),n=t.l-s/2;let o=0,r=0,a=0;return t.h<60?(o=s,r=i,a=0):t.h<120?(o=i,r=s,a=0):t.h<180?(o=0,r=s,a=i):t.h<240?(o=0,r=i,a=s):t.h<300?(o=i,r=0,a=s):t.h<360&&(o=s,r=0,a=i),new yt(o+n,r+n,a+n,e)}function i$(t){const e=(t.l+16)/116,s=e+t.a/500,i=e-t.b/200,n=Math.pow(s,3),o=Math.pow(e,3),r=Math.pow(i,3);let a=0;n>Tt.epsilon?a=n:a=(116*s-16)/Tt.kappa;let l=0;t.l>Tt.epsilon*Tt.kappa?l=o:l=t.l/Tt.kappa;let c=0;return r>Tt.epsilon?c=r:c=(116*i-16)/Tt.kappa,a=fs.whitePoint.x*a,l=fs.whitePoint.y*l,c=fs.whitePoint.z*c,new fs(a,l,c)}function n$(t){function e(l){return l>Tt.epsilon?Math.pow(l,1/3):(Tt.kappa*l+16)/116}const s=e(t.x/fs.whitePoint.x),i=e(t.y/fs.whitePoint.y),n=e(t.z/fs.whitePoint.z),o=116*i-16,r=500*(s-i),a=200*(i-n);return new Tt(o,r,a)}function o$(t){function e(l){return l<=.04045?l/12.92:Math.pow((l+.055)/1.055,2.4)}const s=e(t.r),i=e(t.g),n=e(t.b),o=s*.4124564+i*.3575761+n*.1804375,r=s*.2126729+i*.7151522+n*.072175,a=s*.0193339+i*.119192+n*.9503041;return new fs(o,r,a)}function r$(t,e=1){function s(r){return r<=.0031308?r*12.92:1.055*Math.pow(r,1/2.4)-.055}const i=s(t.x*3.2404542-t.y*1.5371385-t.z*.4985314),n=s(t.x*-.969266+t.y*1.8760108+t.z*.041556),o=s(t.x*.0556434-t.y*.2040259+t.z*1.0572252);return new yt(i,n,o,e)}function a$(t){return n$(o$(t))}function rd(t,e=1){return r$(i$(t),e)}var Lf;(function(t){t[t.Burn=0]="Burn",t[t.Color=1]="Color",t[t.Darken=2]="Darken",t[t.Dodge=3]="Dodge",t[t.Lighten=4]="Lighten",t[t.Multiply=5]="Multiply",t[t.Overlay=6]="Overlay",t[t.Screen=7]="Screen"})(Lf||(Lf={}));function l$(t,e){if(e.a>=1)return e;if(e.a<=0)return new yt(t.r,t.g,t.b,1);const s=e.a*e.r+(1-e.a)*t.r,i=e.a*e.g+(1-e.a)*t.g,n=e.a*e.b+(1-e.a)*t.b;return new yt(s,i,n,1)}function Da(t,e,s){return isNaN(t)||t<=0?e:t>=1?s:new yt(Fa(t,e.r,s.r),Fa(t,e.g,s.g),Fa(t,e.b,s.b),Fa(t,e.a,s.a))}var Vf;(function(t){t[t.RGB=0]="RGB",t[t.HSL=1]="HSL",t[t.HSV=2]="HSV",t[t.XYZ=3]="XYZ",t[t.LAB=4]="LAB",t[t.LCH=5]="LCH"})(Vf||(Vf={}));const c$=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function An(t){const e=c$.exec(t);if(e===null)return null;let s=e[1];if(s.length===3){const n=s.charAt(0),o=s.charAt(1),r=s.charAt(2);s=n.concat(n,o,o,r,r)}const i=parseInt(s,16);return isNaN(i)?null:new yt(id((i&16711680)>>>16,0,255),id((i&65280)>>>8,0,255),id(i&255,0,255),1)}function cl(t,e){const s=t.relativeLuminance>e.relativeLuminance?t:e,i=t.relativeLuminance>e.relativeLuminance?e:t;return(s.relativeLuminance+.05)/(i.relativeLuminance+.05)}const Fs=Object.freeze({create(t,e,s){return new dl(t,e,s)},from(t){return new dl(t.r,t.g,t.b)}});function d$(t){const e={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(const s in e)if(typeof e[s]!=typeof t[s])return!1;return!0}class dl extends yt{constructor(e,s,i){super(e,s,i,1),this.toColorString=this.toStringHexRGB,this.contrast=cl.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=tg(this)}static fromObject(e){return new dl(e.r,e.g,e.b)}}function Md(t,e,s=0,i=t.length-1){if(i===s)return t[s];const n=Math.floor((i-s)/2)+s;return e(t[n])?Md(t,e,s,n):Md(t,e,n+1,i)}const u$=(-.1+Math.sqrt(.21))/2;function la(t){return t.relativeLuminance<=u$}function Wn(t){return la(t)?-1:1}const Hf={stepContrast:1.03,stepContrastRamp:.03,preserveSource:!1};function h$(t,e,s){return typeof t=="number"?zr.from(Fs.create(t,e,s)):zr.from(t)}function f$(t,e){return d$(t)?ni.from(t,e):ni.from(Fs.create(t.r,t.g,t.b),e)}const zr=Object.freeze({create:h$,from:f$});class ni{constructor(e,s){this.closestIndexCache=new Map,this.source=e,this.swatches=s,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(e,s,i,n){i===void 0&&(i=this.closestIndexOf(e));let o=this.swatches;const r=this.lastIndex;let a=i;n===void 0&&(n=Wn(e));const l=c=>cl(e,c)>=s;return n===-1&&(o=this.reversedSwatches,a=r-a),Md(o,l,a,r)}get(e){return this.swatches[e]||this.swatches[In(e,0,this.lastIndex)]}closestIndexOf(e){if(this.closestIndexCache.has(e.relativeLuminance))return this.closestIndexCache.get(e.relativeLuminance);let s=this.swatches.indexOf(e);if(s!==-1)return this.closestIndexCache.set(e.relativeLuminance,s),s;const i=this.swatches.reduce((n,o)=>Math.abs(o.relativeLuminance-e.relativeLuminance)<Math.abs(n.relativeLuminance-e.relativeLuminance)?o:n);return s=this.swatches.indexOf(i),this.closestIndexCache.set(e.relativeLuminance,s),s}static saturationBump(e,s){const n=Mf(e).s,o=Mf(s);if(o.s<n){const r=new Nr(o.h,n,o.l);return s$(r)}return s}static ramp(e){const s=e/100;return s>.5?(s-.5)/.5:2*s}static createHighResolutionPalette(e){const s=[],i=a$(yt.fromObject(e).roundToPrecision(4)),n=rd(new Tt(0,i.a,i.b)).clamp().roundToPrecision(4),o=rd(new Tt(50,i.a,i.b)).clamp().roundToPrecision(4),r=rd(new Tt(100,i.a,i.b)).clamp().roundToPrecision(4),a=new yt(0,0,0),l=new yt(1,1,1),c=r.equalValue(l)?0:14,d=n.equalValue(a)?0:14;for(let u=100+c;u>=0-d;u-=.5){let f;if(u<0){const b=u/d+1;f=Da(b,a,n)}else if(u<=50)f=Da(ni.ramp(u),n,o);else if(u<=100)f=Da(ni.ramp(u),o,r);else{const b=(u-100)/c;f=Da(b,r,l)}f=ni.saturationBump(o,f).roundToPrecision(4),s.push(Fs.from(f))}return new ni(e,s)}static adjustEnd(e,s,i,n){const o=n===-1?s.swatches:s.reversedSwatches,r=c=>{const d=s.closestIndexOf(c);return n===1?s.lastIndex-d:d};n===1&&i.reverse();const a=e(i[i.length-2]);if(Zt(cl(i[i.length-1],i[i.length-2]),2)<a){i.pop();const c=s.colorContrast(o[s.lastIndex],a,void 0,n),d=r(c),u=r(i[i.length-2]),f=d-u;let b=1;for(let w=i.length-f-1;w<i.length;w++){const x=r(i[w]),_=w===i.length-1?s.lastIndex:x+b;i[w]=o[_],b++}}n===1&&i.reverse()}static createColorPaletteByContrast(e,s){const i=ni.createHighResolutionPalette(e),n=a=>{const l=s.stepContrast+s.stepContrast*(1-a.relativeLuminance)*s.stepContrastRamp;return Zt(l,2)},o=[];let r=s.preserveSource?e:i.swatches[0];o.push(r);do{const a=n(r);r=i.colorContrast(r,a,void 0,1),o.push(r)}while(r.relativeLuminance>0);if(s.preserveSource){r=e;do{const a=n(r);r=i.colorContrast(r,a,void 0,-1),o.unshift(r)}while(r.relativeLuminance<1)}return this.adjustEnd(n,i,o,-1),s.preserveSource&&this.adjustEnd(n,i,o,1),o}static from(e,s){const i=s===void 0?Hf:Object.assign(Object.assign({},Hf),s);return new ni(e,Object.freeze(ni.createColorPaletteByContrast(e,i)))}}const ul=Fs.create(1,1,1),Fu=Fs.create(0,0,0),p$=Fs.create(.5,.5,.5),ad=An("#0078D4"),m$=Fs.create(ad.r,ad.g,ad.b);function sg(t,e,s,i,n){const o=d=>d.contrast(ul)>=n?ul:Fu,r=o(t),a=o(e),l=r.relativeLuminance===a.relativeLuminance?r:o(s),c=o(i);return{rest:r,hover:a,active:l,focus:c}}class Wl{constructor(e,s,i,n){this.toColorString=()=>this.cssGradient,this.contrast=cl.bind(null,this),this.createCSS=this.toColorString,this.color=new yt(e,s,i),this.cssGradient=n,this.relativeLuminance=tg(this.color),this.r=e,this.g=s,this.b=i}static fromObject(e,s){return new Wl(e.r,e.g,e.b,s)}}const g$=new yt(0,0,0),v$=new yt(1,1,1);function ig(t,e,s,i,n,o,r,a,l=10,c=!1){const d=t.closestIndexOf(e);a===void 0&&(a=Wn(e));function u(ie){if(c){const U=t.closestIndexOf(e),ge=t.get(U),Fe=ie.relativeLuminance<e.relativeLuminance?g$:v$,ct=t$(An(ie.toColorString()),An(ge.toColorString()),Fe).roundToPrecision(2),Se=l$(An(e.toColorString()),ct);return Fs.from(Se)}else return ie}const f=d+a*s,b=f+a*(i-s),w=f+a*(n-s),x=f+a*(o-s),_=a===-1?0:100-l,R=a===-1?l:100;function H(ie,U){const ge=t.get(ie);if(U){const Fe=t.get(ie+a*r),ct=a===-1?Fe:ge,Se=a===-1?ge:Fe,Ie=`linear-gradient(${u(ct).toColorString()} ${_}%, ${u(Se).toColorString()} ${R}%)`;return Wl.fromObject(ct,Ie)}else return u(ge)}return{rest:H(f,!0),hover:H(b,!0),active:H(w,!1),focus:H(x,!0)}}function b$(t,e,s,i,n,o,r,a){const l=t.closestIndexOf(e),c=Wn(e),d=l+c*s,u=d+c*(i-s),f=d+c*(n-s),b=d+c*(o-s),w=`calc(100% - ${a})`;function x(_,R){const H=t.get(_);if(R){const ie=t.get(_+c*r),U=`linear-gradient(${H.toColorString()} ${w}, ${ie.toColorString()} ${w}, ${ie.toColorString()})`;return Wl.fromObject(H,U)}else return H}return{rest:x(d,!0),hover:x(u,!0),active:x(f,!1),focus:x(b,!0)}}function y$(t,e,s){return t.colorContrast(e,s)}function Ao(t,e,s,i,n,o,r,a){a==null&&(a=Wn(e));const l=t.closestIndexOf(t.colorContrast(e,s));return{rest:t.get(l+a*i),hover:t.get(l+a*n),active:t.get(l+a*o),focus:t.get(l+a*r)}}function x$(t,e,s,i,n,o,r,a=void 0,l,c,d,u,f,b=void 0){return la(e)?Ao(t,e,l,c,d,u,f,b):Ao(t,e,s,i,n,o,r,a)}function w$(t,e,s){return t.get(t.closestIndexOf(e)+Wn(e)*s)}function cn(t,e,s,i,n,o,r){const a=t.closestIndexOf(e);return r==null&&(r=Wn(e)),{rest:t.get(a+r*s),hover:t.get(a+r*i),active:t.get(a+r*n),focus:t.get(a+r*o)}}function Du(t,e,s,i,n,o,r=void 0,a,l,c,d,u=void 0){return la(e)?cn(t,e,a,l,c,d,u):cn(t,e,s,i,n,o,r)}function $$(t,e){return la(e)?ul:Fu}function _$(t,e,s){return la(e)?Fu:ul}function k$(t){return Fs.create(t,t,t)}var Ld;(function(t){t[t.LightMode=.98]="LightMode",t[t.DarkMode=.15]="DarkMode"})(Ld||(Ld={}));function ca(t,e){return t.closestIndexOf(k$(e))}function S$(t,e){return t.get(ca(t,e))}function C$(t,e,s){return t.get(ca(t,e)+s)}function ng(t,e,s){return t.get(ca(t,e)+s*-1)}function I$(t,e,s){return t.get(ca(t,e)+s*-1*2)}function T$(t,e,s){return t.get(ca(t,e)+s*-1*3)}const F$={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Black:900},{create:$}=Be;function V(t){return Be.create({name:t,cssCustomPropertyName:null})}const Qa=$("direction").withDefault(Ze.ltr),xs=$("disabled-opacity").withDefault(.3),ql=$("base-height-multiplier").withDefault(8),D$=$("base-horizontal-spacing-multiplier").withDefault(3),vn=$("density").withDefault(0),Y=$("design-unit").withDefault(4),Me=$("control-corner-radius").withDefault(4),wi=$("layer-corner-radius").withDefault(8),ee=$("stroke-width").withDefault(1),Ht=$("focus-stroke-width").withDefault(2),As=$("body-font").withDefault('"Segoe UI Variable", "Segoe UI", sans-serif'),R$=$("font-weight").withDefault(F$.Normal);function Hi(t){return e=>{const s=t.getValueFor(e),i=R$.getValueFor(e);if(s.endsWith("px")){const n=Number.parseFloat(s.replace("px",""));if(n<=12)return`"wght" ${i}, "opsz" 8`;if(n>24)return`"wght" ${i}, "opsz" 36`}return`"wght" ${i}, "opsz" 10.5`}}const Ru=$("type-ramp-base-font-size").withDefault("14px"),og=$("type-ramp-base-line-height").withDefault("20px"),E$=$("type-ramp-base-font-variations").withDefault(Hi(Ru)),Eu=$("type-ramp-minus-1-font-size").withDefault("12px"),Ou=$("type-ramp-minus-1-line-height").withDefault("16px"),O$=$("type-ramp-minus-1-font-variations").withDefault(Hi(Eu)),Au=$("type-ramp-minus-2-font-size").withDefault("10px"),rg=$("type-ramp-minus-2-line-height").withDefault("14px"),A$=$("type-ramp-minus-2-font-variations").withDefault(Hi(Au)),Pu=$("type-ramp-plus-1-font-size").withDefault("16px"),ag=$("type-ramp-plus-1-line-height").withDefault("22px"),P$=$("type-ramp-plus-1-font-variations").withDefault(Hi(Pu)),Mu=$("type-ramp-plus-2-font-size").withDefault("20px"),lg=$("type-ramp-plus-2-line-height").withDefault("26px"),M$=$("type-ramp-plus-2-font-variations").withDefault(Hi(Mu)),Lu=$("type-ramp-plus-3-font-size").withDefault("24px"),cg=$("type-ramp-plus-3-line-height").withDefault("32px"),L$=$("type-ramp-plus-3-font-variations").withDefault(Hi(Lu)),Vu=$("type-ramp-plus-4-font-size").withDefault("28px"),dg=$("type-ramp-plus-4-line-height").withDefault("36px"),V$=$("type-ramp-plus-4-font-variations").withDefault(Hi(Vu)),Hu=$("type-ramp-plus-5-font-size").withDefault("32px"),ug=$("type-ramp-plus-5-line-height").withDefault("40px"),H$=$("type-ramp-plus-5-font-variations").withDefault(Hi(Hu)),Nu=$("type-ramp-plus-6-font-size").withDefault("40px"),hg=$("type-ramp-plus-6-line-height").withDefault("52px"),N$=$("type-ramp-plus-6-font-variations").withDefault(Hi(Nu)),qn=$("base-layer-luminance").withDefault(Ld.LightMode),Vd=V("accent-fill-rest-delta").withDefault(0),Hd=V("accent-fill-hover-delta").withDefault(-2),Nd=V("accent-fill-active-delta").withDefault(-5),zd=V("accent-fill-focus-delta").withDefault(0),fg=V("accent-foreground-rest-delta").withDefault(0),pg=V("accent-foreground-hover-delta").withDefault(3),mg=V("accent-foreground-active-delta").withDefault(-8),gg=V("accent-foreground-focus-delta").withDefault(0),vg=V("neutral-fill-rest-delta").withDefault(-1),bg=V("neutral-fill-hover-delta").withDefault(1),yg=V("neutral-fill-active-delta").withDefault(0),xg=V("neutral-fill-focus-delta").withDefault(0),wg=V("neutral-fill-input-rest-delta").withDefault(-1),$g=V("neutral-fill-input-hover-delta").withDefault(1),_g=V("neutral-fill-input-active-delta").withDefault(0),kg=V("neutral-fill-input-focus-delta").withDefault(-2),Ra=V("neutral-fill-input-alt-rest-delta").withDefault(2),Nf=V("neutral-fill-input-alt-hover-delta").withDefault(4),zf=V("neutral-fill-input-alt-active-delta").withDefault(6),Bf=V("neutral-fill-input-alt-focus-delta").withDefault(2),dn=V("neutral-fill-layer-rest-delta").withDefault(-2),z$=V("neutral-fill-layer-hover-delta").withDefault(-3),B$=V("neutral-fill-layer-active-delta").withDefault(-3),Ea=V("neutral-fill-layer-alt-rest-delta").withDefault(-1),j$=V("neutral-fill-secondary-rest-delta").withDefault(3),U$=V("neutral-fill-secondary-hover-delta").withDefault(2),Y$=V("neutral-fill-secondary-active-delta").withDefault(1),W$=V("neutral-fill-secondary-focus-delta").withDefault(3),Sg=V("neutral-fill-stealth-rest-delta").withDefault(0),Cg=V("neutral-fill-stealth-hover-delta").withDefault(3),Ig=V("neutral-fill-stealth-active-delta").withDefault(2),Tg=V("neutral-fill-stealth-focus-delta").withDefault(0),q$=V("neutral-fill-strong-rest-delta").withDefault(0),Fg=V("neutral-fill-strong-hover-delta").withDefault(8),Dg=V("neutral-fill-strong-active-delta").withDefault(-5),Rg=V("neutral-fill-strong-focus-delta").withDefault(0),Eg=V("neutral-stroke-rest-delta").withDefault(8),Og=V("neutral-stroke-hover-delta").withDefault(12),Ag=V("neutral-stroke-active-delta").withDefault(6),Pg=V("neutral-stroke-focus-delta").withDefault(8),Mg=V("neutral-stroke-control-rest-delta").withDefault(3),Lg=V("neutral-stroke-control-hover-delta").withDefault(5),Vg=V("neutral-stroke-control-active-delta").withDefault(5),Hg=V("neutral-stroke-control-focus-delta").withDefault(5),Ng=V("neutral-stroke-divider-rest-delta").withDefault(4),jf=V("neutral-stroke-layer-rest-delta").withDefault(3),G$=V("neutral-stroke-layer-hover-delta").withDefault(3),Z$=V("neutral-stroke-layer-active-delta").withDefault(3),X$=V("neutral-stroke-strong-hover-delta").withDefault(0),Q$=V("neutral-stroke-strong-active-delta").withDefault(0),J$=V("neutral-stroke-strong-focus-delta").withDefault(0),zg=$("neutral-base-color").withDefault(p$),Qe=V("neutral-palette").withDefault(t=>zr.from(zg.getValueFor(t))),Bg=$("accent-base-color").withDefault(m$),zu=V("accent-palette").withDefault(t=>zr.from(Bg.getValueFor(t))),K$=V("neutral-layer-card-container-recipe").withDefault({evaluate:t=>ng(Qe.getValueFor(t),qn.getValueFor(t),dn.getValueFor(t))});$("neutral-layer-card-container").withDefault(t=>K$.getValueFor(t).evaluate(t));const e1=V("neutral-layer-floating-recipe").withDefault({evaluate:t=>C$(Qe.getValueFor(t),qn.getValueFor(t),dn.getValueFor(t))}),da=$("neutral-layer-floating").withDefault(t=>e1.getValueFor(t).evaluate(t)),t1=V("neutral-layer-1-recipe").withDefault({evaluate:t=>S$(Qe.getValueFor(t),qn.getValueFor(t))}),s1=$("neutral-layer-1").withDefault(t=>t1.getValueFor(t).evaluate(t)),i1=V("neutral-layer-2-recipe").withDefault({evaluate:t=>ng(Qe.getValueFor(t),qn.getValueFor(t),dn.getValueFor(t))});$("neutral-layer-2").withDefault(t=>i1.getValueFor(t).evaluate(t));const n1=V("neutral-layer-3-recipe").withDefault({evaluate:t=>I$(Qe.getValueFor(t),qn.getValueFor(t),dn.getValueFor(t))});$("neutral-layer-3").withDefault(t=>n1.getValueFor(t).evaluate(t));const o1=V("neutral-layer-4-recipe").withDefault({evaluate:t=>T$(Qe.getValueFor(t),qn.getValueFor(t),dn.getValueFor(t))});$("neutral-layer-4").withDefault(t=>o1.getValueFor(t).evaluate(t));const xe=$("fill-color").withDefault(t=>s1.getValueFor(t));var hl;(function(t){t[t.normal=4.5]="normal",t[t.large=3]="large"})(hl||(hl={}));const Gl=V("accent-fill-recipe").withDefault({evaluate:(t,e)=>x$(zu.getValueFor(t),e||xe.getValueFor(t),5,Vd.getValueFor(t),Hd.getValueFor(t),Nd.getValueFor(t),zd.getValueFor(t),void 0,8,Vd.getValueFor(t),Hd.getValueFor(t),Nd.getValueFor(t),zd.getValueFor(t),void 0)}),We=$("accent-fill-rest").withDefault(t=>Gl.getValueFor(t).evaluate(t).rest),qs=$("accent-fill-hover").withDefault(t=>Gl.getValueFor(t).evaluate(t).hover),Gs=$("accent-fill-active").withDefault(t=>Gl.getValueFor(t).evaluate(t).active),Zl=$("accent-fill-focus").withDefault(t=>Gl.getValueFor(t).evaluate(t).focus),Xl=V("foreground-on-accent-recipe").withDefault({evaluate:t=>sg(We.getValueFor(t),qs.getValueFor(t),Gs.getValueFor(t),Zl.getValueFor(t),hl.normal)}),Nn=$("foreground-on-accent-rest").withDefault(t=>Xl.getValueFor(t).evaluate(t).rest),jg=$("foreground-on-accent-hover").withDefault(t=>Xl.getValueFor(t).evaluate(t).hover),Ug=$("foreground-on-accent-active").withDefault(t=>Xl.getValueFor(t).evaluate(t).active);$("foreground-on-accent-focus").withDefault(t=>Xl.getValueFor(t).evaluate(t).focus);const Ql=V("accent-foreground-recipe").withDefault({evaluate:(t,e)=>Ao(zu.getValueFor(t),e||xe.getValueFor(t),9.5,fg.getValueFor(t),pg.getValueFor(t),mg.getValueFor(t),gg.getValueFor(t))}),Yg=$("accent-foreground-rest").withDefault(t=>Ql.getValueFor(t).evaluate(t).rest),Wg=$("accent-foreground-hover").withDefault(t=>Ql.getValueFor(t).evaluate(t).hover),qg=$("accent-foreground-active").withDefault(t=>Ql.getValueFor(t).evaluate(t).active);$("accent-foreground-focus").withDefault(t=>Ql.getValueFor(t).evaluate(t).focus);const Jl=V("accent-stroke-control-recipe").withDefault({evaluate:(t,e)=>ig(Qe.getValueFor(t),e||xe.getValueFor(t),-3,-3,-3,-3,10,1,void 0,!0)}),r1=$("accent-stroke-control-rest").withDefault(t=>Jl.getValueFor(t).evaluate(t,We.getValueFor(t)).rest),a1=$("accent-stroke-control-hover").withDefault(t=>Jl.getValueFor(t).evaluate(t,qs.getValueFor(t)).hover),l1=$("accent-stroke-control-active").withDefault(t=>Jl.getValueFor(t).evaluate(t,Gs.getValueFor(t)).active);$("accent-stroke-control-focus").withDefault(t=>Jl.getValueFor(t).evaluate(t,Zl.getValueFor(t)).focus);const Kl=V("neutral-fill-recipe").withDefault({evaluate:(t,e)=>Du(Qe.getValueFor(t),e||xe.getValueFor(t),vg.getValueFor(t),bg.getValueFor(t),yg.getValueFor(t),xg.getValueFor(t),void 0,2,3,1,2,void 0)}),Cs=$("neutral-fill-rest").withDefault(t=>Kl.getValueFor(t).evaluate(t).rest),Uf=$("neutral-fill-hover").withDefault(t=>Kl.getValueFor(t).evaluate(t).hover),Yf=$("neutral-fill-active").withDefault(t=>Kl.getValueFor(t).evaluate(t).active);$("neutral-fill-focus").withDefault(t=>Kl.getValueFor(t).evaluate(t).focus);const bn=V("neutral-fill-input-recipe").withDefault({evaluate:(t,e)=>Du(Qe.getValueFor(t),e||xe.getValueFor(t),wg.getValueFor(t),$g.getValueFor(t),_g.getValueFor(t),kg.getValueFor(t),void 0,2,3,1,0,void 0)}),Oa=$("neutral-fill-input-rest").withDefault(t=>bn.getValueFor(t).evaluate(t).rest),Wf=$("neutral-fill-input-hover").withDefault(t=>bn.getValueFor(t).evaluate(t).hover);$("neutral-fill-input-active").withDefault(t=>bn.getValueFor(t).evaluate(t).active);const qf=$("neutral-fill-input-focus").withDefault(t=>bn.getValueFor(t).evaluate(t).focus),ec=V("neutral-fill-input-alt-recipe").withDefault({evaluate:(t,e)=>Du(Qe.getValueFor(t),e||xe.getValueFor(t),Ra.getValueFor(t),Nf.getValueFor(t),zf.getValueFor(t),Bf.getValueFor(t),1,Ra.getValueFor(t),Ra.getValueFor(t)-Nf.getValueFor(t),Ra.getValueFor(t)-zf.getValueFor(t),Bf.getValueFor(t),1)}),Bu=$("neutral-fill-input-alt-rest").withDefault(t=>ec.getValueFor(t).evaluate(t).rest),ju=$("neutral-fill-input-alt-hover").withDefault(t=>ec.getValueFor(t).evaluate(t).hover),Uu=$("neutral-fill-input-alt-active").withDefault(t=>ec.getValueFor(t).evaluate(t).active),Yu=$("neutral-fill-input-alt-focus").withDefault(t=>ec.getValueFor(t).evaluate(t).focus),Gn=V("neutral-fill-layer-recipe").withDefault({evaluate:(t,e)=>cn(Qe.getValueFor(t),e||xe.getValueFor(t),dn.getValueFor(t),z$.getValueFor(t),B$.getValueFor(t),dn.getValueFor(t),1)}),c1=$("neutral-fill-layer-rest").withDefault(t=>Gn.getValueFor(t).evaluate(t).rest);$("neutral-fill-layer-hover").withDefault(t=>Gn.getValueFor(t).evaluate(t).hover);$("neutral-fill-layer-active").withDefault(t=>Gn.getValueFor(t).evaluate(t).active);const d1=V("neutral-fill-layer-alt-recipe").withDefault({evaluate:(t,e)=>cn(Qe.getValueFor(t),e||xe.getValueFor(t),Ea.getValueFor(t),Ea.getValueFor(t),Ea.getValueFor(t),Ea.getValueFor(t))}),u1=$("neutral-fill-layer-alt-rest").withDefault(t=>d1.getValueFor(t).evaluate(t).rest),Zn=V("neutral-fill-secondary-recipe").withDefault({evaluate:(t,e)=>cn(Qe.getValueFor(t),e||xe.getValueFor(t),j$.getValueFor(t),U$.getValueFor(t),Y$.getValueFor(t),W$.getValueFor(t))}),zn=$("neutral-fill-secondary-rest").withDefault(t=>Zn.getValueFor(t).evaluate(t).rest),Wu=$("neutral-fill-secondary-hover").withDefault(t=>Zn.getValueFor(t).evaluate(t).hover),h1=$("neutral-fill-secondary-active").withDefault(t=>Zn.getValueFor(t).evaluate(t).active),f1=$("neutral-fill-secondary-focus").withDefault(t=>Zn.getValueFor(t).evaluate(t).focus),Js=V("neutral-fill-stealth-recipe").withDefault({evaluate:(t,e)=>cn(Qe.getValueFor(t),e||xe.getValueFor(t),Sg.getValueFor(t),Cg.getValueFor(t),Ig.getValueFor(t),Tg.getValueFor(t))}),Po=$("neutral-fill-stealth-rest").withDefault(t=>Js.getValueFor(t).evaluate(t).rest),Mo=$("neutral-fill-stealth-hover").withDefault(t=>Js.getValueFor(t).evaluate(t).hover),Lo=$("neutral-fill-stealth-active").withDefault(t=>Js.getValueFor(t).evaluate(t).active),p1=$("neutral-fill-stealth-focus").withDefault(t=>Js.getValueFor(t).evaluate(t).focus),tc=V("neutral-fill-strong-recipe").withDefault({evaluate:(t,e)=>Ao(Qe.getValueFor(t),e||xe.getValueFor(t),4.5,q$.getValueFor(t),Fg.getValueFor(t),Dg.getValueFor(t),Rg.getValueFor(t))}),Gg=$("neutral-fill-strong-rest").withDefault(t=>tc.getValueFor(t).evaluate(t).rest),m1=$("neutral-fill-strong-hover").withDefault(t=>tc.getValueFor(t).evaluate(t).hover),g1=$("neutral-fill-strong-active").withDefault(t=>tc.getValueFor(t).evaluate(t).active);$("neutral-fill-strong-focus").withDefault(t=>tc.getValueFor(t).evaluate(t).focus);const sc=V("neutral-foreground-recipe").withDefault({evaluate:(t,e)=>Ao(Qe.getValueFor(t),e||xe.getValueFor(t),16,0,-19,-30,0)}),Ne=$("neutral-foreground-rest").withDefault(t=>sc.getValueFor(t).evaluate(t).rest),v1=$("neutral-foreground-hover").withDefault(t=>sc.getValueFor(t).evaluate(t).hover),b1=$("neutral-foreground-active").withDefault(t=>sc.getValueFor(t).evaluate(t).active);$("neutral-foreground-focus").withDefault(t=>sc.getValueFor(t).evaluate(t).focus);const ua=V("neutral-foreground-hint-recipe").withDefault({evaluate:(t,e)=>y$(Qe.getValueFor(t),e||xe.getValueFor(t),4.5)}),Vo=$("neutral-foreground-hint").withDefault(t=>ua.getValueFor(t).evaluate(t)),ic=V("neutral-stroke-recipe").withDefault({evaluate:(t,e)=>cn(Qe.getValueFor(t),e||xe.getValueFor(t),Eg.getValueFor(t),Og.getValueFor(t),Ag.getValueFor(t),Pg.getValueFor(t))}),Br=$("neutral-stroke-rest").withDefault(t=>ic.getValueFor(t).evaluate(t).rest),y1=$("neutral-stroke-hover").withDefault(t=>ic.getValueFor(t).evaluate(t).hover),x1=$("neutral-stroke-active").withDefault(t=>ic.getValueFor(t).evaluate(t).active);$("neutral-stroke-focus").withDefault(t=>ic.getValueFor(t).evaluate(t).focus);const nc=V("neutral-stroke-control-recipe").withDefault({evaluate:(t,e)=>ig(Qe.getValueFor(t),e||xe.getValueFor(t),Mg.getValueFor(t),Lg.getValueFor(t),Vg.getValueFor(t),Hg.getValueFor(t),5)}),qu=$("neutral-stroke-control-rest").withDefault(t=>nc.getValueFor(t).evaluate(t).rest),Zg=$("neutral-stroke-control-hover").withDefault(t=>nc.getValueFor(t).evaluate(t).hover),Xg=$("neutral-stroke-control-active").withDefault(t=>nc.getValueFor(t).evaluate(t).active);$("neutral-stroke-control-focus").withDefault(t=>nc.getValueFor(t).evaluate(t).focus);const w1=V("neutral-stroke-divider-recipe").withDefault({evaluate:(t,e)=>w$(Qe.getValueFor(t),e||xe.getValueFor(t),Ng.getValueFor(t))}),fl=$("neutral-stroke-divider-rest").withDefault(t=>w1.getValueFor(t).evaluate(t)),oc=V("neutral-stroke-input-recipe").withDefault({evaluate:(t,e)=>b$(Qe.getValueFor(t),e||xe.getValueFor(t),Mg.getValueFor(t),Lg.getValueFor(t),Vg.getValueFor(t),Hg.getValueFor(t),20,ee.getValueFor(t)+"px")}),Gf=$("neutral-stroke-input-rest").withDefault(t=>oc.getValueFor(t).evaluate(t).rest),$1=$("neutral-stroke-input-hover").withDefault(t=>oc.getValueFor(t).evaluate(t).hover);$("neutral-stroke-input-active").withDefault(t=>oc.getValueFor(t).evaluate(t).active);$("neutral-stroke-input-focus").withDefault(t=>oc.getValueFor(t).evaluate(t).focus);const Gu=V("neutral-stroke-layer-recipe").withDefault({evaluate:(t,e)=>cn(Qe.getValueFor(t),e||xe.getValueFor(t),jf.getValueFor(t),G$.getValueFor(t),Z$.getValueFor(t),jf.getValueFor(t))}),$o=$("neutral-stroke-layer-rest").withDefault(t=>Gu.getValueFor(t).evaluate(t).rest);$("neutral-stroke-layer-hover").withDefault(t=>Gu.getValueFor(t).evaluate(t).hover);$("neutral-stroke-layer-active").withDefault(t=>Gu.getValueFor(t).evaluate(t).active);const rc=V("neutral-stroke-strong-recipe").withDefault({evaluate:(t,e)=>Ao(Qe.getValueFor(t),e||xe.getValueFor(t),5.5,0,X$.getValueFor(t),Q$.getValueFor(t),J$.getValueFor(t))}),qo=$("neutral-stroke-strong-rest").withDefault(t=>rc.getValueFor(t).evaluate(t).rest),Zu=$("neutral-stroke-strong-hover").withDefault(t=>rc.getValueFor(t).evaluate(t).hover),Xu=$("neutral-stroke-strong-active").withDefault(t=>rc.getValueFor(t).evaluate(t).active);$("neutral-stroke-strong-focus").withDefault(t=>rc.getValueFor(t).evaluate(t).focus);const _1=V("focus-stroke-outer-recipe").withDefault({evaluate:t=>$$(Qe.getValueFor(t),xe.getValueFor(t))}),ac=$("focus-stroke-outer").withDefault(t=>_1.getValueFor(t).evaluate(t)),k1=V("focus-stroke-inner-recipe").withDefault({evaluate:t=>_$(zu.getValueFor(t),xe.getValueFor(t),ac.getValueFor(t))}),S1=$("focus-stroke-inner").withDefault(t=>k1.getValueFor(t).evaluate(t)),lc=V("foreground-on-accent-large-recipe").withDefault({evaluate:t=>sg(We.getValueFor(t),qs.getValueFor(t),Gs.getValueFor(t),Zl.getValueFor(t),hl.large)});$("foreground-on-accent-rest-large").withDefault(t=>lc.getValueFor(t).evaluate(t).rest);$("foreground-on-accent-hover-large").withDefault(t=>lc.getValueFor(t).evaluate(t,qs.getValueFor(t)).hover);$("foreground-on-accent-active-large").withDefault(t=>lc.getValueFor(t).evaluate(t,Gs.getValueFor(t)).active);$("foreground-on-accent-focus-large").withDefault(t=>lc.getValueFor(t).evaluate(t,Zl.getValueFor(t)).focus);const C1=$("neutral-fill-inverse-rest-delta").withDefault(0),I1=$("neutral-fill-inverse-hover-delta").withDefault(-3),T1=$("neutral-fill-inverse-active-delta").withDefault(7),F1=$("neutral-fill-inverse-focus-delta").withDefault(0);function D1(t,e,s,i,n,o){const r=Wn(e),a=t.closestIndexOf(t.colorContrast(e,14)),l=a+r*Math.abs(s-i),c=r===1?s<i:r*s>r*i;let d,u;return c?(d=a,u=l):(d=l,u=a),{rest:t.get(d),hover:t.get(u),active:t.get(d+r*n),focus:t.get(d+r*o)}}const cc=V("neutral-fill-inverse-recipe").withDefault({evaluate:(t,e)=>D1(Qe.getValueFor(t),e||xe.getValueFor(t),C1.getValueFor(t),I1.getValueFor(t),T1.getValueFor(t),F1.getValueFor(t))});$("neutral-fill-inverse-rest").withDefault(t=>cc.getValueFor(t).evaluate(t).rest);$("neutral-fill-inverse-hover").withDefault(t=>cc.getValueFor(t).evaluate(t).hover);$("neutral-fill-inverse-active").withDefault(t=>cc.getValueFor(t).evaluate(t).active);$("neutral-fill-inverse-focus").withDefault(t=>cc.getValueFor(t).evaluate(t).focus);const ht=ms`
  font-family: ${As};
  font-size: ${Ru};
  line-height: ${og};
  font-weight: initial;
  font-variation-settings: ${E$};
`,Qg=ms`
  font-family: ${As};
  font-size: ${Eu};
  line-height: ${Ou};
  font-weight: initial;
  font-variation-settings: ${O$};
`;ms`
  font-family: ${As};
  font-size: ${Au};
  line-height: ${rg};
  font-weight: initial;
  font-variation-settings: ${A$};
`;ms`
  font-family: ${As};
  font-size: ${Pu};
  line-height: ${ag};
  font-weight: initial;
  font-variation-settings: ${P$};
`;ms`
  font-family: ${As};
  font-size: ${Mu};
  line-height: ${lg};
  font-weight: initial;
  font-variation-settings: ${M$};
`;ms`
  font-family: ${As};
  font-size: ${Lu};
  line-height: ${cg};
  font-weight: initial;
  font-variation-settings: ${L$};
`;ms`
  font-family: ${As};
  font-size: ${Vu};
  line-height: ${dg};
  font-weight: initial;
  font-variation-settings: ${V$};
`;ms`
  font-family: ${As};
  font-size: ${Hu};
  line-height: ${ug};
  font-weight: initial;
  font-variation-settings: ${H$};
`;ms`
  font-family: ${As};
  font-size: ${Nu};
  line-height: ${hg};
  font-weight: initial;
  font-variation-settings: ${N$};
`;const R1=(t,e)=>D`
    ${ke("flex")} :host {
      box-sizing: border-box;
      flex-direction: column;
      ${ht}
      color: ${Ne};
      gap: calc(${Y} * 1px);
    }
  `,Ps=ms`
  outline: calc(${Ht} * 1px) solid ${ac};
  outline-offset: calc(${Ht} * -1px);
`,ha=ms`
  outline: calc(${Ht} * 1px) solid ${ac};
  outline-offset: calc(${ee} * 1px);
`,$e=ms`(${ql} + ${vn}) * ${Y}`,E1=Be.create("neutral-fill-stealth-rest-on-neutral-fill-layer-rest").withDefault(t=>{const e=Gn.getValueFor(t);return Js.getValueFor(t).evaluate(t,e.evaluate(t).rest).rest}),O1=Be.create("neutral-fill-stealth-hover-on-neutral-fill-layer-rest").withDefault(t=>{const e=Gn.getValueFor(t);return Js.getValueFor(t).evaluate(t,e.evaluate(t).rest).hover}),A1=Be.create("neutral-fill-stealth-active-on-neutral-fill-layer-rest").withDefault(t=>{const e=Gn.getValueFor(t);return Js.getValueFor(t).evaluate(t,e.evaluate(t).rest).active}),P1=(t,e)=>D`
    ${ke("flex")} :host {
      box-sizing: border-box;
      ${ht};
      flex-direction: column;
      background: ${c1};
      color: ${Ne};
      border: calc(${ee} * 1px) solid ${$o};
      border-radius: calc(${wi} * 1px);
    }

    .region {
      display: none;
      padding: calc(${Y} * 2 * 1px);
      background: ${u1};
    }

    .heading {
      display: grid;
      position: relative;
      grid-template-columns: auto 1fr auto auto;
      align-items: center;
    }

    .button {
      appearance: none;
      border: none;
      background: none;
      grid-column: 2;
      grid-row: 1;
      outline: none;
      margin: calc(${Y} * 3 * 1px) 0;
      padding: 0 calc(${Y} * 2 * 1px);
      text-align: left;
      color: inherit;
      cursor: pointer;
      font: inherit;
    }

    .button::before {
      content: '';
      position: absolute;
      top: calc(${ee} * -1px);
      left: calc(${ee} * -1px);
      right: calc(${ee} * -1px);
      bottom: calc(${ee} * -1px);
      cursor: pointer;
    }

    .button:${pe}::before {
      ${Ps}
      border-radius: calc(${wi} * 1px);
    }

    :host(.expanded) .button:${pe}::before {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    :host(.expanded) .region {
      display: block;
      border-top: calc(${ee} * 1px) solid ${$o};
      border-bottom-left-radius: calc((${wi} - ${ee}) * 1px);
      border-bottom-right-radius: calc((${wi} - ${ee}) * 1px);
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-column: 4;
      pointer-events: none;
      background: ${E1};
      border-radius: calc(${Me} * 1px);
      fill: currentcolor;
      width: calc(${$e} * 1px);
      height: calc(${$e} * 1px);
      margin: calc(${Y} * 2 * 1px);
    }

    .heading:hover .icon {
      background: ${O1};
    }

    .heading:active .icon {
      background: ${A1};
    }

    slot[name='collapsed-icon'] {
      display: flex;
    }

    :host(.expanded) slot[name='collapsed-icon'] {
      display: none;
    }

    slot[name='expanded-icon'] {
      display: none;
    }

    :host(.expanded) slot[name='expanded-icon'] {
      display: flex;
    }

    .start {
      display: flex;
      align-items: center;
      padding-inline-start: calc(${Y} * 2 * 1px);
      justify-content: center;
      grid-column: 1;
    }

    .end {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-column: 3;
    }

    .icon,
    .start,
    .end {
      position: relative;
    }
  `.withBehaviors(_e(D`
        .button:${pe}::before {
          outline-color: ${g.Highlight};
        }
        .icon {
          fill: ${g.ButtonText};
        }
      `)),M1=Vn.compose({baseName:"accordion-item",template:F0,styles:P1,collapsedIcon:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `,expandedIcon:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 7.35c.2.2.5.2.7 0L6 4.21l3.15 3.14a.5.5 0 10.7-.7l-3.5-3.5a.5.5 0 00-.7 0l-3.5 3.5a.5.5 0 000 .7z"/>
    </svg>
  `}),L1=ku.compose({baseName:"accordion",template:j0,styles:R1});function j(t,e,s,i){var n=arguments.length,o=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,s):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,s,o):r(e,s))||o);return n>3&&o&&Object.defineProperty(e,s,o),o}class Go{constructor(e,s){this.cache=new WeakMap,this.ltr=e,this.rtl=s}bind(e){this.attach(e)}unbind(e){const s=this.cache.get(e);s&&Qa.unsubscribe(s)}attach(e){const s=this.cache.get(e)||new V1(this.ltr,this.rtl,e),i=Qa.getValueFor(e);Qa.subscribe(s),s.attach(i),this.cache.set(e,s)}}class V1{constructor(e,s,i){this.ltr=e,this.rtl=s,this.source=i,this.attached=null}handleChange({target:e,token:s}){this.attach(s.getValueFor(this.source))}attach(e){this.attached!==this[e]&&(this.attached!==null&&this.source.$fastController.removeStyles(this.attached),this.attached=this[e],this.attached!==null&&this.source.$fastController.addStyles(this.attached))}}const Xn=Be.create({name:"elevation-shadow",cssCustomPropertyName:null}).withDefault({evaluate:(t,e,s)=>{let i=.12,n=.14;e>16&&(i=.2,n=.24);const o=`0 0 2px rgba(0, 0, 0, ${i})`,r=`0 calc(${e} * 0.5px) calc((${e} * 1px)) rgba(0, 0, 0, ${n})`;return`${o}, ${r}`}}),H1=Be.create("elevation-shadow-card-rest-size").withDefault(4),N1=Be.create("elevation-shadow-card-hover-size").withDefault(8),z1=Be.create("elevation-shadow-card-active-size").withDefault(0),B1=Be.create("elevation-shadow-card-focus-size").withDefault(8),j1=Be.create("elevation-shadow-card-rest").withDefault(t=>Xn.getValueFor(t).evaluate(t,H1.getValueFor(t)));Be.create("elevation-shadow-card-hover").withDefault(t=>Xn.getValueFor(t).evaluate(t,N1.getValueFor(t)));Be.create("elevation-shadow-card-active").withDefault(t=>Xn.getValueFor(t).evaluate(t,z1.getValueFor(t)));Be.create("elevation-shadow-card-focus").withDefault(t=>Xn.getValueFor(t).evaluate(t,B1.getValueFor(t)));const U1=Be.create("elevation-shadow-tooltip-size").withDefault(16),Y1=Be.create("elevation-shadow-tooltip").withDefault(t=>Xn.getValueFor(t).evaluate(t,U1.getValueFor(t))),W1=Be.create("elevation-shadow-flyout-size").withDefault(32),Jg=Be.create("elevation-shadow-flyout").withDefault(t=>Xn.getValueFor(t).evaluate(t,W1.getValueFor(t))),q1=Be.create("elevation-shadow-dialog-size").withDefault(128),G1=Be.create("elevation-shadow-dialog").withDefault(t=>Xn.getValueFor(t).evaluate(t,q1.getValueFor(t))),Kg=(t,e,s,i="[disabled]")=>D`
    ${ke("inline-flex")}
    
    :host {
      position: relative;
      box-sizing: border-box;
      ${ht}
      height: calc(${$e} * 1px);
      min-width: calc(${$e} * 1px);
      color: ${Ne};
      border-radius: calc(${Me} * 1px);
      fill: currentcolor;
    }

    .control {
      border: calc(${ee} * 1px) solid transparent;
      flex-grow: 1;
      box-sizing: border-box;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 calc((10 + (${Y} * 2 * ${vn})) * 1px);
      white-space: nowrap;
      outline: none;
      text-decoration: none;
      color: inherit;
      border-radius: inherit;
      fill: inherit;
      font-family: inherit;
    }

    .control,
    .end,
    .start {
      font: inherit;
    }

    .control.icon-only {
      padding: 0;
      line-height: 0;
    }

    .control:${pe} {
      ${Ps}
    }

    .control::-moz-focus-inner {
      border: 0;
    }

    .content {
      pointer-events: none;
    }

    .start,
    .end {
      display: flex;
      pointer-events: none;
    }

    .start {
      margin-inline-end: 11px;
    }

    .end {
      margin-inline-start: 11px;
    }
  `,Qu=(t,e,s,i="[disabled]")=>D`
    .control {
      background: padding-box linear-gradient(${Cs}, ${Cs}),
        border-box ${qu};
    }

    :host(${s}:hover) .control {
      background: padding-box linear-gradient(${Uf}, ${Uf}),
        border-box ${Zg};
    }

    :host(${s}:active) .control {
      background: padding-box linear-gradient(${Yf}, ${Yf}),
        border-box ${Xg};
    }

    :host(${i}) .control {
      background: padding-box linear-gradient(${Cs}, ${Cs}),
        border-box ${Br};
    }
  `.withBehaviors(_e(D`
        .control {
          background: ${g.ButtonFace};
          border-color: ${g.ButtonText};
          color: ${g.ButtonText};
        }

        :host(${s}:hover) .control,
        :host(${s}:active) .control {
          forced-color-adjust: none;
          background: ${g.HighlightText};
          border-color: ${g.Highlight};
          color: ${g.Highlight};
        }

        :host(${i}) .control {
          background: transparent;
          border-color: ${g.GrayText};
          color: ${g.GrayText};
        }

        .control:${pe} {
          outline-color: ${g.CanvasText};
        }

        :host([href]) .control {
          background: transparent;
          border-color: ${g.LinkText};
          color: ${g.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${g.CanvasText};
          color: ${g.CanvasText};
        }
    `)),ev=(t,e,s,i="[disabled]")=>D`
    .control {
      background: padding-box linear-gradient(${We}, ${We}),
        border-box ${r1};
      color: ${Nn};
    }

    :host(${s}:hover) .control {
      background: padding-box linear-gradient(${qs}, ${qs}),
        border-box ${a1};
      color: ${jg};
    }

    :host(${s}:active) .control {
      background: padding-box linear-gradient(${Gs}, ${Gs}),
        border-box ${l1};
      color: ${Ug};
    }

    :host(${i}) .control {
      background: ${We};
    }

    .control:${pe} {
      box-shadow: 0 0 0 calc(${Ht} * 1px) ${S1} inset !important;
    }
  `.withBehaviors(_e(D`
        .control {
          forced-color-adjust: none;
          background: ${g.Highlight};
          color: ${g.HighlightText};
        }

        :host(${s}:hover) .control,
        :host(${s}:active) .control {
          background: ${g.HighlightText};
          border-color: ${g.Highlight};
          color: ${g.Highlight};
        }

        :host(${i}) .control {
          background: transparent;
          border-color: ${g.GrayText};
          color: ${g.GrayText};
        }

        .control:${pe} {
          outline-color: ${g.CanvasText};
          box-shadow: 0 0 0 calc(${Ht} * 1px) ${g.HighlightText} inset !important;
        }

        :host([href]) .control {
          background: ${g.LinkText};
          color: ${g.HighlightText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: ${g.ButtonFace};
          border-color: ${g.LinkText};
          color: ${g.LinkText};
        }
      `)),Z1=(t,e,s,i="[disabled]")=>D`
    :host {
      height: auto;
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
      min-width: 0;
    }

    .control {
      display: inline;
      padding: 0;
      border: none;
      box-shadow: none;
      line-height: 1;
    }

    :host(${s}) .control {
      color: ${Yg};
      text-decoration: underline 1px;
    }

    :host(${s}:hover) .control {
      color: ${Wg};
      text-decoration: none;
    }

    :host(${s}:active) .control {
      color: ${qg};
      text-decoration: none;
    }

    .control:${pe} {
      ${ha}
    }
  `.withBehaviors(_e(D`
        :host(${s}) .control {
          color: ${g.LinkText};
        }

        :host(${s}:hover) .control,
        :host(${s}:active) .control {
          color: ${g.CanvasText};
        }

        .control:${pe} {
          outline-color: ${g.CanvasText};
        }
      `)),tv=(t,e,s,i="[disabled]")=>D`
    :host {
      color: ${Yg};
    }

    .control {
      background: ${Po};
    }

    :host(${s}:hover) .control {
      background: ${Mo};
      color: ${Wg};
    }

    :host(${s}:active) .control {
      background: ${Lo};
      color: ${qg};
    }

    :host(${i}) .control {
      background: ${Po};
    }
  `.withBehaviors(_e(D`
        :host {
          color: ${g.ButtonText};
        }

        .control {
          forced-color-adjust: none;
          background: transparent;
        }

        :host(${s}:hover) .control,
        :host(${s}:active) .control {
          background: transparent;
          border-color: ${g.ButtonText};
          color: ${g.ButtonText};
        }

        :host(${i}) .control {
          background: transparent;
          color: ${g.GrayText};
        }

        .control:${pe} {
          outline-color: ${g.CanvasText};
        }

        :host([href]) .control {
          color: ${g.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${g.LinkText};
          color: ${g.LinkText};
        }
      `)),sv=(t,e,s,i="[disabled]")=>D`
    .control {
      background: transparent !important;
      border-color: ${Br};
    }

    :host(${s}:hover) .control {
      border-color: ${y1};
    }

    :host(${s}:active) .control {
      border-color: ${x1};
    }

    :host(${i}) .control {
      background: transparent !important;
      border-color: ${Br};
    }
  `.withBehaviors(_e(D`
        .control {
          border-color: ${g.ButtonText};
          color: ${g.ButtonText};
        }

        :host(${s}:hover) .control,
        :host(${s}:active) .control {
          background: ${g.HighlightText};
          border-color: ${g.Highlight};
          color: ${g.Highlight};
        }

        :host(${i}) .control {
          border-color: ${g.GrayText};
          color: ${g.GrayText};
        }

        .control:${pe} {
          outline-color: ${g.CanvasText};
        }

        :host([href]) .control {
          border-color: ${g.LinkText};
          color: ${g.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${g.CanvasText};
          color: ${g.CanvasText};
        }
      `)),Ju=(t,e,s,i="[disabled]")=>D`
    .control {
      background: ${Po};
    }

    :host(${s}:hover) .control {
      background: ${Mo};
    }

    :host(${s}:active) .control {
      background: ${Lo};
    }

    :host(${i}) .control {
      background: ${Po};
    }
  `.withBehaviors(_e(D`
        .control {
          forced-color-adjust: none;
          background: transparent;
          color: ${g.ButtonText};
        }

        :host(${s}:hover) .control,
        :host(${s}:active) .control {
          background: transparent;
          border-color: ${g.ButtonText};
          color: ${g.ButtonText};
        }

        :host(${i}) .control {
          background: transparent;
          color: ${g.GrayText};
        }
        
        .control:${pe} {
          outline-color: ${g.CanvasText};
        }

        :host([href]) .control {
          color: ${g.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${g.LinkText};
          color: ${g.LinkText};
        }
      `)),X1=Be.create("input-placeholder-rest").withDefault(t=>{const e=bn.getValueFor(t);return ua.getValueFor(t).evaluate(t,e.evaluate(t).rest)}),Q1=Be.create("input-placeholder-hover").withDefault(t=>{const e=bn.getValueFor(t);return ua.getValueFor(t).evaluate(t,e.evaluate(t).hover)}),J1=Be.create("input-filled-placeholder-rest").withDefault(t=>{const e=Zn.getValueFor(t);return ua.getValueFor(t).evaluate(t,e.evaluate(t).rest)}),K1=Be.create("input-filled-placeholder-hover").withDefault(t=>{const e=Zn.getValueFor(t);return ua.getValueFor(t).evaluate(t,e.evaluate(t).hover)}),dc=(t,e,s)=>D`
  :host {
    ${ht}
    color: ${Ne};
    fill: currentcolor;
    user-select: none;
    position: relative;
  }

  ${s} {
    box-sizing: border-box;
    position: relative;
    color: inherit;
    border: calc(${ee} * 1px) solid transparent;
    border-radius: calc(${Me} * 1px);
    height: calc(${$e} * 1px);
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  .control {
    width: 100%;
    outline: none;
  }

  .label {
    display: block;
    color: ${Ne};
    cursor: pointer;
    ${ht}
    margin-bottom: 4px;
  }

  .label__hidden {
    display: none;
    visibility: hidden;
  }

  :host([disabled]) ${s},
  :host([readonly]) ${s},
  :host([disabled]) .label,
  :host([readonly]) .label,
  :host([disabled]) .control,
  :host([readonly]) .control {
    cursor: ${Os};
  }

  :host([disabled]) {
    opacity: ${xs};
  }
`,fa=(t,e,s)=>D`
  @media (forced-colors: none) {
    :host(:not([disabled]):active)::after {
      left: 50%;
      width: 40%;
      transform: translateX(-50%);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    :host(:not([disabled]):focus-within)::after {
      left: 0;
      width: 100%;
      transform: none;
    }

    :host(:not([disabled]):active)::after,
    :host(:not([disabled]):focus-within:not(:active))::after {
      content: '';
      position: absolute;
      height: calc(${Ht} * 1px);
      bottom: 0;
      border-bottom: calc(${Ht} * 1px) solid ${We};
      border-bottom-left-radius: calc(${Me} * 1px);
      border-bottom-right-radius: calc(${Me} * 1px);
      z-index: 2;
      transition: all 300ms cubic-bezier(0.1, 0.9, 0.2, 1);
    }
  }
`,pa=(t,e,s,i=":not([disabled]):not(:focus-within)")=>D`
  ${s} {
    background: padding-box linear-gradient(${Oa}, ${Oa}),
      border-box ${Gf};
  }

  :host(${i}:hover) ${s} {
    background: padding-box linear-gradient(${Wf}, ${Wf}),
      border-box ${$1};
  }

  :host(:not([disabled]):focus-within) ${s} {
    background: padding-box linear-gradient(${qf}, ${qf}),
      border-box ${Gf};
  }
  
  :host([disabled]) ${s} {
    background: padding-box linear-gradient(${Oa}, ${Oa}),
      border-box ${Br};
  }

  .control::placeholder {
    color: ${X1};
  }

  :host(${i}:hover) .control::placeholder {
    color: ${Q1};
  }
`,Zo=(t,e,s,i=":not([disabled]):not(:focus-within)")=>D`
  ${s} {
    background: ${zn};
  }

  :host(${i}:hover) ${s} {
    background: ${Wu};
  }

  :host(:not([disabled]):focus-within) ${s} {
    background: ${f1};
  }

  :host([disabled]) ${s} {
    background: ${zn};
  }

  .control::placeholder {
    color: ${J1};
  }

  :host(${i}:hover) .control::placeholder {
    color: ${K1};
  }
`,Xo=(t,e,s,i=":not([disabled]):not(:focus-within)")=>D`
  :host {
    color: ${g.ButtonText};
  }

  ${s} {
    background: ${g.ButtonFace};
    border-color: ${g.ButtonText};
  }

  :host(${i}:hover) ${s},
  :host(:not([disabled]):focus-within) ${s} {
    border-color: ${g.Highlight};
  }

  :host([disabled]) ${s} {
    opacity: 1;
    background: ${g.ButtonFace};
    border-color: ${g.GrayText};
  }

  .control::placeholder,
  :host(${i}:hover) .control::placeholder {
    color: ${g.CanvasText};
  }

  :host(:not([disabled]):focus) ${s} {
    ${Ps}
    outline-color: ${g.Highlight};
  }

  :host([disabled]) {
    opacity: 1;
    color: ${g.GrayText};
  }

  :host([disabled]) ::placeholder,
  :host([disabled]) ::-webkit-input-placeholder {
    color: ${g.GrayText};
  }
`;function ot(t,e){return new Qw("appearance",t,e)}const oo="[href]",e_=(t,e)=>Kg().withBehaviors(ot("neutral",Qu(t,e,oo)),ot("accent",ev(t,e,oo)),ot("hypertext",Z1(t,e,oo)),ot("lightweight",tv(t,e,oo)),ot("outline",sv(t,e,oo)),ot("stealth",Ju(t,e,oo)));class iv extends gs{appearanceChanged(e,s){e!==s&&(this.classList.add(s),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){var e,s;const i=this.defaultSlottedContent.filter(n=>n.nodeType===Node.ELEMENT_NODE);i.length===1&&i[0]instanceof SVGElement?(e=this.control)===null||e===void 0||e.classList.add("icon-only"):(s=this.control)===null||s===void 0||s.classList.remove("icon-only")}}j([p],iv.prototype,"appearance",void 0);const t_=iv.compose({baseName:"anchor",baseClass:gs,template:Hm,styles:e_,shadowOptions:{delegatesFocus:!0}}),s_=(t,e)=>D`
  :host {
    contain: layout;
    display: block;
  }
`,i_=ae.compose({baseName:"anchored-region",template:ex,styles:s_}),n_=(t,e)=>D`
    ${ke("inline-block")} :host {
      box-sizing: border-box;
      ${Qg};
    }

    .control {
      border-radius: calc(${Me} * 1px);
      padding: calc(((${Y} * 0.5) - ${ee}) * 1px) calc((${Y} - ${ee}) * 1px);
      border: calc(${ee} * 1px) solid transparent;
    }

    :host(.lightweight) .control {
      background: transparent;
      color: ${Ne};
      font-weight: 600;
    }

    :host(.accent) .control {
      background: ${We};
      color: ${Nn};
    }

    :host(.neutral) .control {
      background: ${zn};
      color: ${Ne};
    }

    :host([circular]) .control {
      border-radius: 100px;
      min-width: calc(${Ou} - calc(${Y} * 1px));
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;class nv extends na{constructor(){super(...arguments),this.appearance="lightweight"}appearanceChanged(e,s){e!==s&&de.queueUpdate(()=>{this.classList.add(s),this.classList.remove(e)})}}j([p({mode:"fromView"})],nv.prototype,"appearance",void 0);const o_=nv.compose({baseName:"badge",baseClass:na,template:sx,styles:n_}),r_=(t,e)=>D`
  ${ke("inline-block")} :host {
    box-sizing: border-box;
    ${ht};
  }

  .list {
    display: flex;
  }
`,a_=Nm.compose({baseName:"breadcrumb",template:nx,styles:r_}),l_=(t,e)=>D`
    ${ke("inline-flex")} :host {
      background: transparent;
      color: ${Ne};
      fill: currentcolor;
      box-sizing: border-box;
      ${ht};
      min-width: calc(${$e} * 1px);
      border-radius: calc(${Me} * 1px);
    }

    .listitem {
      display: flex;
      align-items: center;
      border-radius: inherit;
    }

    .control {
      position: relative;
      align-items: center;
      box-sizing: border-box;
      color: inherit;
      fill: inherit;
      cursor: pointer;
      display: flex;
      outline: none;
      text-decoration: none;
      white-space: nowrap;
      border-radius: inherit;
    }

    .control:hover {
      color: ${v1};
    }

    .control:active {
      color: ${b1};
    }

    .control:${pe} {
      ${ha}
    }

    :host(:not([href])),
    :host([aria-current]) .control {
      color: ${Ne};
      fill: currentcolor;
      cursor: default;
    }

    .start {
      display: flex;
      margin-inline-end: 6px;
    }

    .end {
      display: flex;
      margin-inline-start: 6px;
    }

    .separator {
      display: flex;
    }
  `.withBehaviors(_e(D`
        :host(:not([href])),
        .start,
        .end,
        .separator {
          background: ${g.ButtonFace};
          color: ${g.ButtonText};
          fill: currentcolor;
        }
        .separator {
          fill: ${g.ButtonText};
        }
        :host([href]) {
          forced-color-adjust: none;
          background: ${g.ButtonFace};
          color: ${g.LinkText};
        }
        :host([href]) .control:hover {
          background: ${g.LinkText};
          color: ${g.HighlightText};
          fill: currentcolor;
        }
        .control:${pe} {
          outline-color: ${g.LinkText};
        }
      `)),c_=Vr.compose({baseName:"breadcrumb-item",template:ix,styles:l_,shadowOptions:{delegatesFocus:!0},separator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>
    </svg>
  `}),$n=":not([disabled])",Yi="[disabled]",d_=(t,e)=>D`
    :host(${$n}) .control {
      cursor: pointer;
    }

    :host(${Yi}) .control {
      cursor: ${Os};
    }

    @media (forced-colors: none) {
      :host(${Yi}) .control {
        opacity: ${xs};
      }
    }

    ${Kg(t,e,$n,Yi)}
  `.withBehaviors(ot("neutral",Qu(t,e,$n,Yi)),ot("accent",ev(t,e,$n,Yi)),ot("lightweight",tv(t,e,$n,Yi)),ot("outline",sv(t,e,$n,Yi)),ot("stealth",Ju(t,e,$n,Yi)));class ov extends vs{appearanceChanged(e,s){e!==s&&(this.classList.add(s),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const e=this.defaultSlottedContent.filter(s=>s.nodeType===Node.ELEMENT_NODE);e.length===1&&e[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}j([p],ov.prototype,"appearance",void 0);const u_=ov.compose({baseName:"button",baseClass:vs,template:ox,styles:d_,shadowOptions:{delegatesFocus:!0}}),h_=D`
.day.disabled::before {
  transform: translate(-50%, 0) rotate(45deg);
}
`,f_=D`
.day.disabled::before {
  transform: translate(50%, 0) rotate(-45deg);
}
`,p_=(t,e)=>D`
${ke("inline-block")} :host {
  --calendar-cell-size: calc((${ql} + 2 + ${vn}) * ${Y} * 1px);
  --calendar-gap: 2px;
  ${ht}
  color: ${Ne};
}

.title {
  padding: calc(${Y} * 2px);
  font-weight: 600;
}

.days {
  text-align: center;
}

.week-days,
.week {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: var(--calendar-gap);
  border: 0;
  padding: 0;
}

.day,
.week-day {
  border: 0;
  width: var(--calendar-cell-size);
  height: var(--calendar-cell-size);
  line-height: var(--calendar-cell-size);
  padding: 0;
  box-sizing: initial;
}

.week-day {
  font-weight: 600;
}

.day {
  border: calc(${ee} * 1px) solid transparent;
  border-radius: calc(${Me} * 1px);
}

.interact .day {
  cursor: pointer;
}

.date {
  height: 100%;
}

.inactive .date,
.inactive.disabled::before {
  color: ${Vo};
}

.disabled::before {
  content: '';
  display: inline-block;
  width: calc(var(--calendar-cell-size) * .8);
  height: calc(${ee} * 1px);
  background: currentColor;
  position: absolute;
  margin-top: calc(var(--calendar-cell-size) / 2);
  transform-origin: center;
  z-index: 1;
}

.selected {
  color: ${We};
  border: 1px solid ${We};
  background: ${xe};
}

.selected + .selected {
  border-start-start-radius: 0;
  border-end-start-radius: 0;
  border-inline-start-width: 0;
  padding-inline-start: calc(var(--calendar-gap) + (${ee} + ${Me}) * 1px);
  margin-inline-start: calc((${Me} * -1px) - var(--calendar-gap));
}

.today.disabled::before {
  color: ${Nn};
}

.today .date {
  color: ${Nn};
  background: ${We};
  border-radius: 50%;
  position: relative;
}
`.withBehaviors(_e(D`
          .day.selected {
              color: ${g.Highlight};
          }

          .today .date {
              background: ${g.Highlight};
              color: ${g.HighlightText};
          }
      `),new Go(h_,f_));class rv extends Es{constructor(){super(...arguments),this.readonly=!0}}j([p({converter:ia})],rv.prototype,"readonly",void 0);const m_=rv.compose({baseName:"calendar",template:_x,styles:p_,title:vx}),g_=(t,e)=>D`
    ${ke("block")} :host {
      display: block;
      contain: content;
      height: var(--card-height, 100%);
      width: var(--card-width, 100%);
      box-sizing: border-box;
      background: ${xe};
      color: ${Ne};
      border: calc(${ee} * 1px) solid ${$o};
      border-radius: calc(${wi} * 1px);
      box-shadow: ${j1};
    }

    :host {
      content-visibility: auto;
    }
  `.withBehaviors(_e(D`
        :host {
          background: ${g.Canvas};
          color: ${g.CanvasText};
        }
      `));class Ku extends zm{cardFillColorChanged(e,s){if(s){const i=An(s);i!==null&&(this.neutralPaletteSource=s,xe.setValueFor(this,Fs.create(i.r,i.g,i.b)))}}neutralPaletteSourceChanged(e,s){if(s){const i=An(s),n=Fs.create(i.r,i.g,i.b);Qe.setValueFor(this,zr.create(n))}}handleChange(e,s){this.cardFillColor||xe.setValueFor(this,i=>Gn.getValueFor(i).evaluate(i,xe.getValueFor(e)).rest)}connectedCallback(){super.connectedCallback();const e=ll(this);if(e){const s=le.getNotifier(e);s.subscribe(this,"fillColor"),s.subscribe(this,"neutralPalette"),this.handleChange(e,"fillColor")}}}j([p({attribute:"card-fill-color",mode:"fromView"})],Ku.prototype,"cardFillColor",void 0);j([p({attribute:"neutral-palette-source",mode:"fromView"})],Ku.prototype,"neutralPaletteSource",void 0);const v_=Ku.compose({baseName:"card",baseClass:zm,template:kx,styles:g_}),b_=(t,e)=>D`
    ${ke("inline-flex")} :host {
      align-items: center;
      outline: none;
      ${""} user-select: none;
    }

    .control {
      position: relative;
      width: calc((${$e} / 2 + ${Y}) * 1px);
      height: calc((${$e} / 2 + ${Y}) * 1px);
      box-sizing: border-box;
      border-radius: calc(${Me} * 1px);
      border: calc(${ee} * 1px) solid ${qo};
      background: ${Bu};
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      ${ht}
      color: ${Ne};
      ${""} padding-inline-start: calc(${Y} * 2px + 2px);
      margin-inline-end: calc(${Y} * 2px + 2px);
      cursor: pointer;
    }

    slot[name='checked-indicator'],
    slot[name='indeterminate-indicator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      fill: ${Ne};
      opacity: 0;
      pointer-events: none;
    }

    slot[name='indeterminate-indicator'] {
      position: absolute;
      top: 0;
    }

    :host(.checked) slot[name='checked-indicator'],
    :host(.checked) slot[name='indeterminate-indicator'] {
      fill: ${Nn};
    }

    :host(:not(.disabled):hover) .control {
      background: ${ju};
      border-color: ${Zu};
    }

    :host(:not(.disabled):active) .control {
      background: ${Uu};
      border-color: ${Xu};
    }

    :host(:${pe}) .control {
      background: ${Yu};
      ${ha}
    }

    :host(.checked) .control {
      background: ${We};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${qs};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${Gs};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${Os};
    }

    :host(.checked:not(.indeterminate)) slot[name='checked-indicator'],
    :host(.indeterminate) slot[name='indeterminate-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${xs};
    }
  `.withBehaviors(_e(D`
        .control {
          border-color: ${g.FieldText};
          background: ${g.Field};
        }
        :host(:not(.disabled):hover) .control,
        :host(:not(.disabled):active) .control {
          border-color: ${g.Highlight};
          background: ${g.Field};
        }
        slot[name='checked-indicator'],
        slot[name='indeterminate-indicator'] {
          fill: ${g.FieldText};
        }
        :host(:${pe}) .control {
          forced-color-adjust: none;
          outline-color: ${g.FieldText};
          background: ${g.Field};
          border-color: ${g.Highlight};
        }
        :host(.checked) .control {
          background: ${g.Highlight};
          border-color: ${g.Highlight};
        }
        :host(.checked:not(.disabled):hover) .control,
        :host(.checked:not(.disabled):active) .control {
          background: ${g.HighlightText};
          border-color: ${g.Highlight};
        }
        :host(.checked) slot[name='checked-indicator'],
        :host(.checked) slot[name='indeterminate-indicator'] {
          fill: ${g.HighlightText};
        }
        :host(.checked:hover ) .control slot[name='checked-indicator'],
        :host(.checked:hover ) .control slot[name='indeterminate-indicator'] {
          fill: ${g.Highlight};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .control {
          border-color: ${g.GrayText};
          background: ${g.Field};
        }
        :host(.disabled) slot[name='checked-indicator'],
        :host(.checked.disabled:hover) .control slot[name='checked-indicator'],
        :host(.disabled) slot[name='indeterminate-indicator'],
        :host(.checked.disabled:hover) .control slot[name='indeterminate-indicator'] {
          fill: ${g.GrayText};
        }
      `)),y_=Ll.compose({baseName:"checkbox",template:Sx,styles:b_,checkedIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>
    </svg>
  `,indeterminateIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 8z"/>
    </svg>
  `}),Zf=".control",Aa=":not([disabled]):not([open])",Xf="[disabled]",av=(t,e)=>D`
    ${ke("inline-flex")}
    
    :host {
      border-radius: calc(${Me} * 1px);
      box-sizing: border-box;
      color: ${Ne};
      fill: currentcolor;
      font-family: ${As};
      position: relative;
      user-select: none;
      min-width: 250px;
      vertical-align: top;
    }

    .listbox {
      box-shadow: ${Jg};
      background: ${xe};
      border-radius: calc(${wi} * 1px);
      box-sizing: border-box;
      display: inline-flex;
      flex-direction: column;
      left: 0;
      max-height: calc(var(--max-height) - (${$e} * 1px));
      padding: calc((${Y} - ${ee} ) * 1px);
      overflow-y: auto;
      position: absolute;
      width: 100%;
      z-index: 1;
      margin: 1px 0;
      border: calc(${ee} * 1px) solid transparent;
    }

    .listbox[hidden] {
      display: none;
    }

    .control {
      border: calc(${ee} * 1px) solid transparent;
      border-radius: calc(${Me} * 1px);
      height: calc(${$e} * 1px);
      align-items: center;
      box-sizing: border-box;
      cursor: pointer;
      display: flex;
      ${ht}
      min-height: 100%;
      padding: 0 calc(${Y} * 2.25px);
      width: 100%;
    }

    :host(:${pe}) {
      ${Ps}
    }

    :host([disabled]) .control {
      cursor: ${Os};
      opacity: ${xs};
      user-select: none;
    }

    :host([open][position='above']) .listbox {
      bottom: calc((${$e} + ${Y} * 2) * 1px);
    }

    :host([open][position='below']) .listbox {
      top: calc((${$e} + ${Y} * 2) * 1px);
    }

    .selected-value {
      font-family: inherit;
      flex: 1 1 auto;
      text-align: start;
    }

    .indicator {
      flex: 0 0 auto;
      margin-inline-start: 1em;
    }

    slot[name='listbox'] {
      display: none;
      width: 100%;
    }

    :host([open]) slot[name='listbox'] {
      display: flex;
      position: absolute;
    }

    .start {
      margin-inline-end: 11px;
    }

    .end {
      margin-inline-start: 11px;
    }

    .start,
    .end,
    .indicator,
    ::slotted(svg) {
      display: flex;
    }

    ::slotted([role='option']) {
      flex: 0 0 auto;
    }
  `,x_=(t,e)=>D`
    :host([open]) .listbox {
      background: ${g.ButtonFace};
      border-color: ${g.CanvasText};
    }
  `,w_=(t,e)=>av().withBehaviors(ot("outline",Qu(t,e,Aa,Xf)),ot("filled",Zo(t,e,Zf,Aa).withBehaviors(_e(Xo(t,e,Zf,Aa)))),ot("stealth",Ju(t,e,Aa,Xf)),_e(x_())),ld=".control",cd=":not([disabled]):not([open])",$_=(t,e)=>D`
    ${av()}

    ${fa()}

    :host(:empty) .listbox {
      display: none;
    }

    :host([disabled]) *,
    :host([disabled]) {
      cursor: ${Os};
      user-select: none;
    }

    :host(:active) .selected-value {
      user-select: none;
    }

    .selected-value {
      -webkit-appearance: none;
      background: transparent;
      border: none;
      color: inherit;
      ${ht}
      height: calc(100% - ${ee} * 1px));
      margin: auto 0;
      width: 100%;
      outline: none;
    }
  `.withBehaviors(ot("outline",pa(t,e,ld,cd)),ot("filled",Zo(t,e,ld,cd)),_e(Xo(t,e,ld,cd)));class lv extends Ai{appearanceChanged(e,s){e!==s&&(this.classList.add(s),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&xe.setValueFor(this.listbox,da)}}j([p({mode:"fromView"})],lv.prototype,"appearance",void 0);const __=lv.compose({baseName:"combobox",baseClass:Ai,shadowOptions:{delegatesFocus:!0},template:Dx,styles:$_,indicator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `}),k_=(t,e)=>D`
  :host {
    display: flex;
    position: relative;
    flex-direction: column;
  }
`,S_=(t,e)=>D`
    :host {
      display: grid;
      padding: 1px 0;
      box-sizing: border-box;
      width: 100%;
      border-bottom: calc(${ee} * 1px) solid ${fl};
    }

    :host(.header) {
    }

    :host(.sticky-header) {
      background: ${xe};
      position: sticky;
      top: 0;
    }
  `.withBehaviors(_e(D`
        :host {
        }
      `)),C_=(t,e)=>D`
    :host {
      padding: calc((${Y} + ${Ht} - ${ee}) * 1px) calc(((${Y} * 3) + ${Ht} - ${ee}) * 1px);
      color: ${Ne};
      box-sizing: border-box;
      ${ht}
      border: transparent calc(${ee} * 1px) solid;
      overflow: hidden;
      white-space: nowrap;
      border-radius: calc(${Me} * 1px);
    }

    :host(.column-header) {
      font-weight: 600;
    }

    :host(:${pe}) {
      ${Ps}
    }
  `.withBehaviors(_e(D`
        :host {
          forced-color-adjust: none;
          background: ${g.Field};
          color: ${g.FieldText};
        }

        :host(:${pe}) {
          outline-color: ${g.FieldText};
        }
      `)),I_=Oi.compose({baseName:"data-grid-cell",template:gx,styles:C_}),T_=At.compose({baseName:"data-grid-row",template:mx,styles:S_}),F_=St.compose({baseName:"data-grid",template:dx,styles:k_}),eh={toView(t){return t==null?null:t==null?void 0:t.toColorString()},fromView(t){if(t==null)return null;const e=An(t);return e?Fs.create(e.r,e.g,e.b):null}},Qf=D`
  :host {
    background-color: ${xe};
    color: ${Ne};
  }
`.withBehaviors(_e(D`
      :host {
        background-color: ${g.Canvas};
        box-shadow: 0 0 0 1px ${g.CanvasText};
        color: ${g.CanvasText};
      }
    `));function J(t){return(e,s)=>{e[s+"Changed"]=function(i,n){n!=null?t.setValueFor(this,n):t.deleteValueFor(this)}}}class Q extends fe{constructor(){super(),this.noPaint=!1;const e={handleChange:this.noPaintChanged.bind(this)};le.getNotifier(this).subscribe(e,"fillColor"),le.getNotifier(this).subscribe(e,"baseLayerLuminance")}connectedCallback(){super.connectedCallback(),this.noPaintChanged()}noPaintChanged(){!this.noPaint&&(this.fillColor!==void 0||this.baseLayerLuminance)?this.$fastController.addStyles(Qf):this.$fastController.removeStyles(Qf)}}j([p({attribute:"no-paint",mode:"boolean"})],Q.prototype,"noPaint",void 0);j([p({attribute:"fill-color",converter:eh,mode:"fromView"}),J(xe)],Q.prototype,"fillColor",void 0);j([p({attribute:"accent-base-color",converter:eh,mode:"fromView"}),J(Bg)],Q.prototype,"accentBaseColor",void 0);j([p({attribute:"neutral-base-color",converter:eh,mode:"fromView"}),J(zg)],Q.prototype,"neutralBaseColor",void 0);j([p({converter:G}),J(vn)],Q.prototype,"density",void 0);j([p({attribute:"design-unit",converter:G}),J(Y)],Q.prototype,"designUnit",void 0);j([p({attribute:"direction"}),J(Qa)],Q.prototype,"direction",void 0);j([p({attribute:"base-height-multiplier",converter:G}),J(ql)],Q.prototype,"baseHeightMultiplier",void 0);j([p({attribute:"base-horizontal-spacing-multiplier",converter:G}),J(D$)],Q.prototype,"baseHorizontalSpacingMultiplier",void 0);j([p({attribute:"control-corner-radius",converter:G}),J(Me)],Q.prototype,"controlCornerRadius",void 0);j([p({attribute:"layer-corner-radius",converter:G}),J(wi)],Q.prototype,"layerCornerRadius",void 0);j([p({attribute:"stroke-width",converter:G}),J(ee)],Q.prototype,"strokeWidth",void 0);j([p({attribute:"focus-stroke-width",converter:G}),J(Ht)],Q.prototype,"focusStrokeWidth",void 0);j([p({attribute:"disabled-opacity",converter:G}),J(xs)],Q.prototype,"disabledOpacity",void 0);j([p({attribute:"type-ramp-minus-2-font-size"}),J(Au)],Q.prototype,"typeRampMinus2FontSize",void 0);j([p({attribute:"type-ramp-minus-2-line-height"}),J(rg)],Q.prototype,"typeRampMinus2LineHeight",void 0);j([p({attribute:"type-ramp-minus-1-font-size"}),J(Eu)],Q.prototype,"typeRampMinus1FontSize",void 0);j([p({attribute:"type-ramp-minus-1-line-height"}),J(Ou)],Q.prototype,"typeRampMinus1LineHeight",void 0);j([p({attribute:"type-ramp-base-font-size"}),J(Ru)],Q.prototype,"typeRampBaseFontSize",void 0);j([p({attribute:"type-ramp-base-line-height"}),J(og)],Q.prototype,"typeRampBaseLineHeight",void 0);j([p({attribute:"type-ramp-plus-1-font-size"}),J(Pu)],Q.prototype,"typeRampPlus1FontSize",void 0);j([p({attribute:"type-ramp-plus-1-line-height"}),J(ag)],Q.prototype,"typeRampPlus1LineHeight",void 0);j([p({attribute:"type-ramp-plus-2-font-size"}),J(Mu)],Q.prototype,"typeRampPlus2FontSize",void 0);j([p({attribute:"type-ramp-plus-2-line-height"}),J(lg)],Q.prototype,"typeRampPlus2LineHeight",void 0);j([p({attribute:"type-ramp-plus-3-font-size"}),J(Lu)],Q.prototype,"typeRampPlus3FontSize",void 0);j([p({attribute:"type-ramp-plus-3-line-height"}),J(cg)],Q.prototype,"typeRampPlus3LineHeight",void 0);j([p({attribute:"type-ramp-plus-4-font-size"}),J(Vu)],Q.prototype,"typeRampPlus4FontSize",void 0);j([p({attribute:"type-ramp-plus-4-line-height"}),J(dg)],Q.prototype,"typeRampPlus4LineHeight",void 0);j([p({attribute:"type-ramp-plus-5-font-size"}),J(Hu)],Q.prototype,"typeRampPlus5FontSize",void 0);j([p({attribute:"type-ramp-plus-5-line-height"}),J(ug)],Q.prototype,"typeRampPlus5LineHeight",void 0);j([p({attribute:"type-ramp-plus-6-font-size"}),J(Nu)],Q.prototype,"typeRampPlus6FontSize",void 0);j([p({attribute:"type-ramp-plus-6-line-height"}),J(hg)],Q.prototype,"typeRampPlus6LineHeight",void 0);j([p({attribute:"accent-fill-rest-delta",converter:G}),J(Vd)],Q.prototype,"accentFillRestDelta",void 0);j([p({attribute:"accent-fill-hover-delta",converter:G}),J(Hd)],Q.prototype,"accentFillHoverDelta",void 0);j([p({attribute:"accent-fill-active-delta",converter:G}),J(Nd)],Q.prototype,"accentFillActiveDelta",void 0);j([p({attribute:"accent-fill-focus-delta",converter:G}),J(zd)],Q.prototype,"accentFillFocusDelta",void 0);j([p({attribute:"accent-foreground-rest-delta",converter:G}),J(fg)],Q.prototype,"accentForegroundRestDelta",void 0);j([p({attribute:"accent-foreground-hover-delta",converter:G}),J(pg)],Q.prototype,"accentForegroundHoverDelta",void 0);j([p({attribute:"accent-foreground-active-delta",converter:G}),J(mg)],Q.prototype,"accentForegroundActiveDelta",void 0);j([p({attribute:"accent-foreground-focus-delta",converter:G}),J(gg)],Q.prototype,"accentForegroundFocusDelta",void 0);j([p({attribute:"neutral-fill-rest-delta",converter:G}),J(vg)],Q.prototype,"neutralFillRestDelta",void 0);j([p({attribute:"neutral-fill-hover-delta",converter:G}),J(bg)],Q.prototype,"neutralFillHoverDelta",void 0);j([p({attribute:"neutral-fill-active-delta",converter:G}),J(yg)],Q.prototype,"neutralFillActiveDelta",void 0);j([p({attribute:"neutral-fill-focus-delta",converter:G}),J(xg)],Q.prototype,"neutralFillFocusDelta",void 0);j([p({attribute:"neutral-fill-input-rest-delta",converter:G}),J(wg)],Q.prototype,"neutralFillInputRestDelta",void 0);j([p({attribute:"neutral-fill-input-hover-delta",converter:G}),J($g)],Q.prototype,"neutralFillInputHoverDelta",void 0);j([p({attribute:"neutral-fill-input-active-delta",converter:G}),J(_g)],Q.prototype,"neutralFillInputActiveDelta",void 0);j([p({attribute:"neutral-fill-input-focus-delta",converter:G}),J(kg)],Q.prototype,"neutralFillInputFocusDelta",void 0);j([p({attribute:"neutral-fill-layer-rest-delta",converter:G}),J(dn)],Q.prototype,"neutralFillLayerRestDelta",void 0);j([p({attribute:"neutral-fill-stealth-rest-delta",converter:G}),J(Sg)],Q.prototype,"neutralFillStealthRestDelta",void 0);j([p({attribute:"neutral-fill-stealth-hover-delta",converter:G}),J(Cg)],Q.prototype,"neutralFillStealthHoverDelta",void 0);j([p({attribute:"neutral-fill-stealth-active-delta",converter:G}),J(Ig)],Q.prototype,"neutralFillStealthActiveDelta",void 0);j([p({attribute:"neutral-fill-stealth-focus-delta",converter:G}),J(Tg)],Q.prototype,"neutralFillStealthFocusDelta",void 0);j([p({attribute:"neutral-fill-strong-hover-delta",converter:G}),J(Fg)],Q.prototype,"neutralFillStrongHoverDelta",void 0);j([p({attribute:"neutral-fill-strong-active-delta",converter:G}),J(Dg)],Q.prototype,"neutralFillStrongActiveDelta",void 0);j([p({attribute:"neutral-fill-strong-focus-delta",converter:G}),J(Rg)],Q.prototype,"neutralFillStrongFocusDelta",void 0);j([p({attribute:"base-layer-luminance",converter:G}),J(qn)],Q.prototype,"baseLayerLuminance",void 0);j([p({attribute:"neutral-stroke-divider-rest-delta",converter:G}),J(Ng)],Q.prototype,"neutralStrokeDividerRestDelta",void 0);j([p({attribute:"neutral-stroke-rest-delta",converter:G}),J(Eg)],Q.prototype,"neutralStrokeRestDelta",void 0);j([p({attribute:"neutral-stroke-hover-delta",converter:G}),J(Og)],Q.prototype,"neutralStrokeHoverDelta",void 0);j([p({attribute:"neutral-stroke-active-delta",converter:G}),J(Ag)],Q.prototype,"neutralStrokeActiveDelta",void 0);j([p({attribute:"neutral-stroke-focus-delta",converter:G}),J(Pg)],Q.prototype,"neutralStrokeFocusDelta",void 0);const D_=Q.compose({baseName:"design-system-provider",template:M` <slot></slot> `,styles:D`
    ${ke("block")}
  `}),R_=(t,e)=>D`
  :host([hidden]) {
    display: none;
  }

  :host {
    --dialog-height: 480px;
    --dialog-width: 640px;
    display: block;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    touch-action: none;
  }

  .positioning-region {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
  }

  .control {
    box-shadow: ${G1};
    margin-top: auto;
    margin-bottom: auto;
    border-radius: calc(${wi} * 1px);
    width: var(--dialog-width);
    height: var(--dialog-height);
    background: ${xe};
    z-index: 1;
    border: calc(${ee} * 1px) solid transparent;
  }
`,E_=Ts.compose({baseName:"dialog",template:Ux,styles:R_}),O_=(t,e)=>D`
    ${ke("block")} :host {
      box-sizing: content-box;
      height: 0;
      border: none;
      border-top: calc(${ee} * 1px) solid ${fl};
    }

    :host([orientation="vertical"]) {
      border: none;
      height: 100%;
      margin: 0 calc(${Y} * 1px);
      border-left: calc(${ee} * 1px) solid ${fl};
  }
  `,A_=Hl.compose({baseName:"divider",template:iw,styles:O_}),P_=(t,e)=>D`
    ${ke("inline-flex")} :host {
      height: calc((${$e} + ${Y}) * 1px);
      justify-content: center;
      align-items: center;
      fill: currentcolor;
      color: ${Gg};
      background: padding-box linear-gradient(${Cs}, ${Cs}),
        border-box ${qu};
      box-sizing: border-box;
      border: calc(${ee} * 1px) solid transparent;
      border-radius: calc(${Me} * 1px);
      padding: 0;
    }

    :host(.disabled) {
      opacity: ${xs};
      cursor: ${Os};
      pointer-events: none;
    }

    .next,
    .previous {
      display: flex;
    }

    :host(:not(.disabled):hover) {
      cursor: pointer;
    }

    :host(:not(.disabled):hover) {
      color: ${m1};
    }

    :host(:not(.disabled):active) {
      color: ${g1};
    }

    :host(:${pe}) {
      ${Ps}
    }

    :host::-moz-focus-inner {
      border: 0;
    }
  `.withBehaviors(_e(D`
        :host {
          background: ${g.ButtonFace};
          border-color: ${g.ButtonText};
        }
        :host .next,
        :host .previous {
          color: ${g.ButtonText};
          fill: currentcolor;
        }
        :host(:not(.disabled):hover) {
          background: ${g.Highlight};
        }
        :host(:not(.disabled):hover) .next,
        :host(:not(.disabled):hover) .previous {
          color: ${g.HighlightText};
          fill: currentcolor;
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled),
        :host(.disabled) .next,
        :host(.disabled) .previous {
          border-color: ${g.GrayText};
          color: ${g.GrayText};
          fill: currentcolor;
        }
        :host(:${pe}) {
          forced-color-adjust: none;
          outline-color: ${g.Highlight};
        }
      `)),M_=Nl.compose({baseName:"flipper",template:ow,styles:P_,next:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.57 11.84A1 1 0 016 11.02V4.98a1 1 0 011.57-.82l3.79 2.62c.85.59.85 1.85 0 2.44l-3.79 2.62z"/>
    </svg>
  `,previous:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.43 11.84a1 1 0 001.57-.82V4.98a1 1 0 00-1.57-.82L5.64 6.78c-.85.59-.85 1.85 0 2.44l3.79 2.62z"/>
    </svg>
  `}),L_=D`
  .scroll-prev {
    right: auto;
    left: 0;
  }

  .scroll.scroll-next::before,
  .scroll-next .scroll-action {
    left: auto;
    right: 0;
  }

  .scroll.scroll-next::before {
    background: linear-gradient(to right, transparent, var(--scroll-fade-next));
  }

  .scroll-next .scroll-action {
    transform: translate(50%, -50%);
  }
`,V_=D`
  .scroll.scroll-next {
    right: auto;
    left: 0;
  }

  .scroll.scroll-next::before {
    background: linear-gradient(to right, var(--scroll-fade-next), transparent);
    left: auto;
    right: 0;
  }

  .scroll.scroll-prev::before {
    background: linear-gradient(to right, transparent, var(--scroll-fade-previous));
  }

  .scroll-prev .scroll-action {
    left: auto;
    right: 0;
    transform: translate(50%, -50%);
  }
`,H_=D`
  .scroll-area {
    position: relative;
  }

  div.scroll-view {
    overflow-x: hidden;
  }

  .scroll {
    bottom: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    user-select: none;
    width: 100px;
  }

  .scroll.disabled {
    display: none;
  }

  .scroll::before,
  .scroll-action {
    left: 0;
    position: absolute;
  }

  .scroll::before {
    background: linear-gradient(to right, var(--scroll-fade-previous), transparent);
    content: '';
    display: block;
    height: 100%;
    width: 100%;
  }

  .scroll-action {
    pointer-events: auto;
    right: auto;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  ::slotted(fluent-flipper) {
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  .scroll-area:hover ::slotted(fluent-flipper) {
    opacity: 1;
  }
`.withBehaviors(new Go(L_,V_)),N_=(t,e)=>D`
  ${ke("block")} :host {
    --scroll-align: center;
    --scroll-item-spacing: 4px;
    contain: layout;
    position: relative;
  }

  .scroll-view {
    overflow-x: auto;
    scrollbar-width: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .content-container {
    align-items: var(--scroll-align);
    display: inline-flex;
    flex-wrap: nowrap;
    position: relative;
  }

  .content-container ::slotted(*) {
    margin-right: var(--scroll-item-spacing);
  }

  .content-container ::slotted(*:last-child) {
    margin-right: 0;
  }
`;class z_ extends Pi{connectedCallback(){super.connectedCallback(),this.view!=="mobile"&&this.$fastController.addStyles(H_)}}const B_=z_.compose({baseName:"horizontal-scroll",baseClass:Pi,template:_w,styles:N_,nextFlipper:M`
    <fluent-flipper @click="${t=>t.scrollToNext()}" aria-hidden="${t=>t.flippersHiddenFromAT}"></fluent-flipper>
  `,previousFlipper:M`
    <fluent-flipper
      @click="${t=>t.scrollToPrevious()}"
      direction="previous"
      aria-hidden="${t=>t.flippersHiddenFromAT}"
    ></fluent-flipper>
  `}),j_=(t,e)=>D`
    ${ke("inline-flex")} :host {
      border: calc(${ee} * 1px) solid ${Br};
      border-radius: calc(${Me} * 1px);
      box-sizing: border-box;
      flex-direction: column;
      padding: calc(${Y} * 1px) 0;
    }

    ::slotted(${t.tagFor(hi)}) {
      margin: 0 calc(${Y} * 1px);
    }

    :host(:focus-within:not([disabled])) {
      ${Ps}
    }
  `;class U_ extends as{}const Y_=U_.compose({baseName:"listbox",template:aw,styles:j_}),W_=(t,e)=>D`
    ${ke("inline-flex")} :host {
      position: relative;
      ${ht}
      background: ${Po};
      border-radius: calc(${Me} * 1px);
      border: calc(${ee} * 1px) solid transparent;
      box-sizing: border-box;
      color: ${Ne};
      cursor: pointer;
      fill: currentcolor;
      height: calc(${$e} * 1px);
      overflow: hidden;
      align-items: center;
      padding: 0 calc(((${Y} * 3) - ${ee} - 1) * 1px);
      user-select: none;
      white-space: nowrap;
    }

    :host::before {
      content: '';
      display: block;
      position: absolute;
      left: calc((${Ht} - ${ee}) * 1px);
      top: calc((${$e} / 4) - ${Ht} * 1px);
      width: 3px;
      height: calc((${$e} / 2) * 1px);
      background: transparent;
      border-radius: calc(${Me} * 1px);
    }

    :host(:not([disabled]):hover) {
      background: ${Mo};
    }

    :host(:not([disabled]):active) {
      background: ${Lo};
    }

    :host(:not([disabled]):active)::before {
      background: ${We};
      height: calc(((${$e} / 2) - 6) * 1px);
    }

    :host([aria-selected='true'])::before {
      background: ${We};
    }

    :host(:${pe}) {
      ${Ps}
      background: ${p1};
    }

    :host([aria-selected='true']) {
      background: ${zn};
    }

    :host(:not([disabled])[aria-selected='true']:hover) {
      background: ${Wu};
    }

    :host(:not([disabled])[aria-selected='true']:active) {
      background: ${h1};
    }

    :host(:not([disabled]):not([aria-selected='true']):hover) {
      background: ${Mo};
    }

    :host(:not([disabled]):not([aria-selected='true']):active) {
      background: ${Lo};
    }

    :host([disabled]) {
      cursor: ${Os};
      opacity: ${xs};
    }

    .content {
      grid-column-start: 2;
      justify-self: start;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .start,
    .end,
    ::slotted(svg) {
      display: flex;
    }

    ::slotted([slot='end']) {
      margin-inline-start: 1ch;
    }

    ::slotted([slot='start']) {
      margin-inline-end: 1ch;
    }
  `.withBehaviors(new Go(null,D`
      :host::before {
        right: calc((${Ht} - ${ee}) * 1px);
      }
    `),_e(D`
        :host {
          background: ${g.ButtonFace};
          border-color: ${g.ButtonFace};
          color: ${g.ButtonText};
        }
        :host(:not([disabled]):not([aria-selected="true"]):hover),
        :host(:not([disabled])[aria-selected="true"]:hover),
        :host([aria-selected="true"]) {
          forced-color-adjust: none;
          background: ${g.Highlight};
          color: ${g.HighlightText};
        }
        :host(:not([disabled]):active)::before,
        :host([aria-selected='true'])::before {
          background: ${g.HighlightText};
        }
        :host([disabled]),
        :host([disabled]:not([aria-selected='true']):hover) {
          background: ${g.Canvas};
          color: ${g.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host(:${pe}) {
          outline-color: ${g.CanvasText};
        }
      `)),q_=hi.compose({baseName:"option",template:rw,styles:W_}),G_=(t,e)=>D`
    ${ke("block")} :host {
      background: ${da};
      border: calc(${ee} * 1px) solid transparent;
      border-radius: calc(${wi} * 1px);
      box-shadow: ${Jg};
      padding: calc((${Y} - ${ee}) * 1px) 0;
      max-width: 368px;
      min-width: 64px;
    }

    :host([slot='submenu']) {
      width: max-content;
      margin: 0 calc(${Y} * 2px);
    }

    ::slotted(${t.tagFor(bs)}) {
      margin: 0 calc(${Y} * 1px);
    }

    ::slotted(${t.tagFor(Hl)}) {
      margin: calc(${Y} * 1px) 0;
    }

    ::slotted(hr) {
      box-sizing: content-box;
      height: 0;
      margin: calc(${Y} * 1px) 0;
      border: none;
      border-top: calc(${ee} * 1px) solid ${fl};
    }
  `.withBehaviors(_e(D`
        :host([slot='submenu']) {
          background: ${g.Canvas};
          border-color: ${g.CanvasText};
        }
      `));class Z_ extends zl{connectedCallback(){super.connectedCallback(),xe.setValueFor(this,da)}}const X_=Z_.compose({baseName:"menu",baseClass:zl,template:dw,styles:G_}),Q_=(t,e)=>D`
    ${ke("grid")} :host {
      contain: layout;
      overflow: visible;
      ${ht}
      box-sizing: border-box;
      height: calc(${$e} * 1px);
      grid-template-columns: minmax(32px, auto) 1fr minmax(32px, auto);
      grid-template-rows: auto;
      justify-items: center;
      align-items: center;
      padding: 0;
      white-space: nowrap;
      color: ${Ne};
      fill: currentcolor;
      cursor: pointer;
      border-radius: calc(${Me} * 1px);
      border: calc(${ee} * 1px) solid transparent;
      position: relative;
    }

    :host(.indent-0) {
      grid-template-columns: auto 1fr minmax(32px, auto);
    }

    :host(.indent-0) .content {
      grid-column: 1;
      grid-row: 1;
      margin-inline-start: 10px;
    }

    :host(.indent-0) .expand-collapse-glyph-container {
      grid-column: 5;
      grid-row: 1;
    }

    :host(.indent-2) {
      grid-template-columns: minmax(32px, auto) minmax(32px, auto) 1fr minmax(32px, auto) minmax(32px, auto);
    }

    :host(.indent-2) .content {
      grid-column: 3;
      grid-row: 1;
      margin-inline-start: 10px;
    }

    :host(.indent-2) .expand-collapse-glyph-container {
      grid-column: 5;
      grid-row: 1;
    }

    :host(.indent-2) .start {
      grid-column: 2;
    }

    :host(.indent-2) .end {
      grid-column: 4;
    }

    :host(:${pe}) {
      ${Ps}
    }

    :host(:not([disabled]):hover) {
      background: ${Mo};
    }

    :host(:not([disabled]):active),
    :host(.expanded) {
      background: ${Lo};
      color: ${Ne};
      z-index: 2;
    }

    :host([disabled]) {
      cursor: ${Os};
      opacity: ${xs};
    }

    .content {
      grid-column-start: 2;
      justify-self: start;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .start,
    .end {
      display: flex;
      justify-content: center;
    }

    :host(.indent-0[aria-haspopup='menu']) {
      display: grid;
      grid-template-columns: minmax(32px, auto) auto 1fr minmax(32px, auto) minmax(32px, auto);
      align-items: center;
      min-height: 32px;
    }

    :host(.indent-1[aria-haspopup='menu']),
    :host(.indent-1[role='menuitemcheckbox']),
    :host(.indent-1[role='menuitemradio']) {
      display: grid;
      grid-template-columns: minmax(32px, auto) auto 1fr minmax(32px, auto) minmax(32px, auto);
      align-items: center;
      min-height: 32px;
    }

    :host(.indent-2:not([aria-haspopup='menu'])) .end {
      grid-column: 5;
    }

    :host .input-container,
    :host .expand-collapse-glyph-container {
      display: none;
    }

    :host([aria-haspopup='menu']) .expand-collapse-glyph-container,
    :host([role='menuitemcheckbox']) .input-container,
    :host([role='menuitemradio']) .input-container {
      display: grid;
    }

    :host([aria-haspopup='menu']) .content,
    :host([role='menuitemcheckbox']) .content,
    :host([role='menuitemradio']) .content {
      grid-column-start: 3;
    }

    :host([aria-haspopup='menu'].indent-0) .content {
      grid-column-start: 1;
    }

    :host([aria-haspopup='menu']) .end,
    :host([role='menuitemcheckbox']) .end,
    :host([role='menuitemradio']) .end {
      grid-column-start: 4;
    }

    :host .expand-collapse,
    :host .checkbox,
    :host .radio {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      box-sizing: border-box;
    }

    :host .checkbox-indicator,
    :host .radio-indicator,
    slot[name='checkbox-indicator'],
    slot[name='radio-indicator'] {
      display: none;
    }

    ::slotted([slot='end']:not(svg)) {
      margin-inline-end: 10px;
      color: ${Vo};
    }

    :host([aria-checked='true']) .checkbox-indicator,
    :host([aria-checked='true']) slot[name='checkbox-indicator'],
    :host([aria-checked='true']) .radio-indicator,
    :host([aria-checked='true']) slot[name='radio-indicator'] {
      display: flex;
    }
  `.withBehaviors(_e(D`
        :host,
        ::slotted([slot='end']:not(svg)) {
          forced-color-adjust: none;
          color: ${g.ButtonText};
          fill: currentcolor;
        }
        :host(:not([disabled]):hover) {
          background: ${g.Highlight};
          color: ${g.HighlightText};
          fill: currentcolor;
        }
        :host(:hover) .start,
        :host(:hover) .end,
        :host(:hover)::slotted(svg),
        :host(:active) .start,
        :host(:active) .end,
        :host(:active)::slotted(svg),
        :host(:hover) ::slotted([slot='end']:not(svg)),
        :host(:${pe}) ::slotted([slot='end']:not(svg)) {
          color: ${g.HighlightText};
          fill: currentcolor;
        }
        :host(.expanded) {
          background: ${g.Highlight};
          color: ${g.HighlightText};
        }
        :host(:${pe}) {
          background: ${g.Highlight};
          outline-color: ${g.ButtonText};
          color: ${g.HighlightText};
          fill: currentcolor;
        }
        :host([disabled]),
        :host([disabled]:hover),
        :host([disabled]:hover) .start,
        :host([disabled]:hover) .end,
        :host([disabled]:hover)::slotted(svg),
        :host([disabled]:${pe}) {
          background: ${g.ButtonFace};
          color: ${g.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host([disabled]:${pe}) {
          outline-color: ${g.GrayText};
        }
        :host .expanded-toggle,
        :host .checkbox,
        :host .radio {
          border-color: ${g.ButtonText};
          background: ${g.HighlightText};
        }
        :host([checked]) .checkbox,
        :host([checked]) .radio {
          background: ${g.HighlightText};
          border-color: ${g.HighlightText};
        }
        :host(:hover) .expanded-toggle,
            :host(:hover) .checkbox,
            :host(:hover) .radio,
            :host(:${pe}) .expanded-toggle,
            :host(:${pe}) .checkbox,
            :host(:${pe}) .radio,
            :host([checked]:hover) .checkbox,
            :host([checked]:hover) .radio,
            :host([checked]:${pe}) .checkbox,
            :host([checked]:${pe}) .radio {
          border-color: ${g.HighlightText};
        }
        :host([aria-checked='true']) {
          background: ${g.Highlight};
          color: ${g.HighlightText};
        }
        :host([aria-checked='true']) .checkbox-indicator,
        :host([aria-checked='true']) ::slotted([slot='checkbox-indicator']),
        :host([aria-checked='true']) ::slotted([slot='radio-indicator']) {
          fill: ${g.Highlight};
        }
        :host([aria-checked='true']) .radio-indicator {
          background: ${g.Highlight};
        }
      `),new Go(D`
        .expand-collapse-glyph-container {
          transform: rotate(0deg);
        }
      `,D`
        .expand-collapse-glyph-container {
          transform: rotate(180deg);
        }
      `)),J_=bs.compose({baseName:"menu-item",template:cw,styles:Q_,checkboxIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>
    </svg>
  `,expandCollapseGlyph:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.65 3.15a.5.5 0 000 .7L9.79 8l-4.14 4.15a.5.5 0 00.7.7l4.5-4.5a.5.5 0 000-.7l-4.5-4.5a.5.5 0 00-.7 0z"/>
    </svg>
  `,radioIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="2"/>
    </svg>
  `}),Pa=".root",K_=(t,e)=>D`
    ${ke("inline-block")}

    ${dc(t,e,Pa)}

    ${fa()}

    .root {
      display: flex;
      flex-direction: row;
    }

    .control {
      -webkit-appearance: none;
      color: inherit;
      background: transparent;
      border: 0;
      height: calc(100% - 4px);
      margin-top: auto;
      margin-bottom: auto;
      padding: 0 calc(${Y} * 2px + 1px);
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }

    .start,
    .end {
      margin: auto;
      fill: currentcolor;
    }

    .start {
      display: flex;
      margin-inline-start: 11px;
    }

    .end {
      display: flex;
      margin-inline-end: 11px;
    }

    .controls {
      opacity: 0;
      position: relative;
      top: -1px;
      z-index: 3;
    }

    :host(:hover:not([disabled])) .controls,
    :host(:focus-within:not([disabled])) .controls {
      opacity: 1;
    }

    .step-up,
    .step-down {
      display: flex;
      padding: 0 8px;
      cursor: pointer;
    }

    .step-up {
      padding-top: 3px;
    }
  `.withBehaviors(ot("outline",pa(t,e,Pa)),ot("filled",Zo(t,e,Pa)),_e(Xo(t,e,Pa)));class cv extends Kt{connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}j([p],cv.prototype,"appearance",void 0);const ek=cv.compose({baseName:"number-field",baseClass:Kt,styles:K_,template:uw,shadowOptions:{delegatesFocus:!0},stepDownGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `,stepUpGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 7.35c.2.2.5.2.7 0L6 4.21l3.15 3.14a.5.5 0 10.7-.7l-3.5-3.5a.5.5 0 00-.7 0l-3.5 3.5a.5.5 0 000 .7z"/>
    </svg>
`}),tk=(t,e)=>D`
    ${ke("flex")} :host {
      align-items: center;
      height: calc((${ee} * 3) * 1px);
    }

    .progress {
      background-color: ${qo};
      border-radius: calc(${Y} * 1px);
      width: 100%;
      height: calc(${ee} * 1px);
      display: flex;
      align-items: center;
      position: relative;
    }

    .determinate {
      background-color: ${We};
      border-radius: calc(${Y} * 1px);
      height: calc((${ee} * 3) * 1px);
      transition: all 0.2s ease-in-out;
      display: flex;
    }

    .indeterminate {
      height: calc((${ee} * 3) * 1px);
      border-radius: calc(${Y} * 1px);
      display: flex;
      width: 100%;
      position: relative;
      overflow: hidden;
    }

    .indeterminate-indicator-1 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${We};
      border-radius: calc(${Y} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 40%;
      animation: indeterminate-1 2s infinite;
    }

    .indeterminate-indicator-2 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${We};
      border-radius: calc(${Y} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 60%;
      animation: indeterminate-2 2s infinite;
    }

    :host(.paused) .indeterminate-indicator-1,
    :host(.paused) .indeterminate-indicator-2 {
      animation: none;
      background-color: ${Vo};
      width: 100%;
      opacity: 1;
    }

    :host(.paused) .determinate {
      background-color: ${Vo};
    }

    @keyframes indeterminate-1 {
      0% {
        opacity: 1;
        transform: translateX(-100%);
      }
      70% {
        opacity: 1;
        transform: translateX(300%);
      }
      70.01% {
        opacity: 0;
      }
      100% {
        opacity: 0;
        transform: translateX(300%);
      }
    }

    @keyframes indeterminate-2 {
      0% {
        opacity: 0;
        transform: translateX(-150%);
      }
      29.99% {
        opacity: 0;
      }
      30% {
        opacity: 1;
        transform: translateX(-150%);
      }
      100% {
        transform: translateX(166.66%);
        opacity: 1;
      }
    }
  `.withBehaviors(_e(D`
        .indeterminate-indicator-1,
        .indeterminate-indicator-2,
        .determinate,
        .progress {
          background-color: ${g.ButtonText};
        }
        :host(.paused) .indeterminate-indicator-1,
        :host(.paused) .indeterminate-indicator-2,
        :host(.paused) .determinate {
          background-color: ${g.GrayText};
        }
      `));class sk extends Yn{}const ik=sk.compose({baseName:"progress",template:bw,styles:tk,indeterminateIndicator1:`
    <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>
  `,indeterminateIndicator2:`
    <span class="indeterminate-indicator-2" part="indeterminate-indicator-2"></span>
  `}),nk=(t,e)=>D`
    ${ke("flex")} :host {
      align-items: center;
      height: calc(${$e} * 1px);
      width: calc(${$e} * 1px);
    }

    .progress {
      height: 100%;
      width: 100%;
    }

    .background {
      fill: none;
      stroke-width: 2px;
    }

    .determinate {
      stroke: ${We};
      fill: none;
      stroke-width: 2px;
      stroke-linecap: round;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
    }

    .indeterminate-indicator-1 {
      stroke: ${We};
      fill: none;
      stroke-width: 2px;
      stroke-linecap: round;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
      animation: spin-infinite 2s linear infinite;
    }

    :host(.paused) .indeterminate-indicator-1 {
      animation: none;
      stroke: ${Vo};
    }

    :host(.paused) .determinate {
      stroke: ${Vo};
    }

    @keyframes spin-infinite {
      0% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(0deg);
      }
      50% {
        stroke-dasharray: 21.99px 21.99px;
        transform: rotate(450deg);
      }
      100% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(1080deg);
      }
    }
  `.withBehaviors(_e(D`
        .background {
          stroke: ${g.Field};
        }
        .determinate,
        .indeterminate-indicator-1 {
          stroke: ${g.ButtonText};
        }
        :host(.paused) .determinate,
        :host(.paused) .indeterminate-indicator-1 {
          stroke: ${g.GrayText};
        }
      `));class ok extends Yn{}const rk=ok.compose({baseName:"progress-ring",template:vw,styles:nk,indeterminateIndicator:`
    <svg class="progress" part="progress" viewBox="0 0 16 16">
        <circle
            class="background"
            part="background"
            cx="8px"
            cy="8px"
            r="7px"
        ></circle>
        <circle
            class="indeterminate-indicator-1"
            part="indeterminate-indicator-1"
            cx="8px"
            cy="8px"
            r="7px"
        ></circle>
    </svg>
  `}),ak=(t,e)=>D`
    ${ke("inline-flex")} :host {
      --input-size: calc((${$e} / 2) + ${Y});
      align-items: center;
      outline: none;
      ${""} user-select: none;
      position: relative;
      flex-direction: row;
      transition: all 0.2s ease-in-out;
    }

    .control {
      position: relative;
      width: calc(var(--input-size) * 1px);
      height: calc(var(--input-size) * 1px);
      box-sizing: border-box;
      border-radius: 50%;
      border: calc(${ee} * 1px) solid ${qo};
      background: ${Bu};
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      ${ht}
      color: ${Ne};
      ${""} padding-inline-start: calc(${Y} * 2px + 2px);
      margin-inline-end: calc(${Y} * 2px + 2px);
      cursor: pointer;
    }

    .control,
    slot[name='checked-indicator'] {
      flex-shrink: 0;
    }

    slot[name='checked-indicator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      fill: ${Nn};
      opacity: 0;
      pointer-events: none;
    }

    :host(:not(.disabled):hover) .control {
      background: ${ju};
      border-color: ${Zu};
    }

    :host(:not(.disabled):active) .control {
      background: ${Uu};
      border-color: ${Xu};
    }

    :host(:not(.disabled):active) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(:${pe}) .control {
      ${ha}
      background: ${Yu};
    }

    :host(.checked) .control {
      background: ${We};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${qs};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${Gs};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${Os};
    }

    :host(.checked) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${xs};
    }
  `.withBehaviors(_e(D`
        .control {
          background: ${g.Field};
          border-color: ${g.FieldText};
        }
        :host(:not(.disabled):hover) .control,
        :host(:not(.disabled):active) .control {
          border-color: ${g.Highlight};
        }
        :host(:${pe}) .control {
          forced-color-adjust: none;
          background: ${g.Field};
          outline-color: ${g.FieldText};
        }
        :host(.checked:not(.disabled):hover) .control,
        :host(.checked:not(.disabled):active) .control {
          border-color: ${g.Highlight};
          background: ${g.Highlight};
        }
        :host(.checked) slot[name='checked-indicator'] {
          fill: ${g.Highlight};
        }
        :host(.checked:hover) .control slot[name='checked-indicator'] {
          fill: ${g.HighlightText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .label {
          color: ${g.GrayText};
        }
        :host(.disabled) .control,
        :host(.checked.disabled) .control {
          background: ${g.Field};
          border-color: ${g.GrayText};
        }
        :host(.disabled) slot[name='checked-indicator'],
        :host(.checked.disabled) slot[name='checked-indicator'] {
          fill: ${g.GrayText};
        }
      `)),lk=jl.compose({baseName:"radio",template:xw,styles:ak,checkedIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="4"/>
    </svg>
  `}),ck=(t,e)=>D`
  ${ke("flex")} :host {
    align-items: flex-start;
    flex-direction: column;
  }

  .positioning-region {
    display: flex;
    flex-wrap: wrap;
  }

  :host([orientation='vertical']) .positioning-region {
    flex-direction: column;
  }

  :host([orientation='horizontal']) .positioning-region {
    flex-direction: row;
  }
`,dk=mn.compose({baseName:"radio-group",template:yw,styles:ck}),uk=(t,e)=>M`
  <template
    class="
            ${s=>s.readOnly?"readonly":""}
        "
  >
    <label
      part="label"
      for="control"
      class="${s=>s.defaultSlottedNodes&&s.defaultSlottedNodes.length?"label":"label label__hidden"}"
    >
      <slot ${et({property:"defaultSlottedNodes",filter:Qm})}></slot>
    </label>
    <div class="root" part="root" ${Re("root")}>
      ${Jt(t,e)}
      <div class="input-wrapper" part="input-wrapper">
        <input
          class="control"
          part="control"
          id="control"
          @input="${s=>s.handleTextInput()}"
          @change="${s=>s.handleChange()}"
          ?autofocus="${s=>s.autofocus}"
          ?disabled="${s=>s.disabled}"
          list="${s=>s.list}"
          maxlength="${s=>s.maxlength}"
          minlength="${s=>s.minlength}"
          pattern="${s=>s.pattern}"
          placeholder="${s=>s.placeholder}"
          ?readonly="${s=>s.readOnly}"
          ?required="${s=>s.required}"
          size="${s=>s.size}"
          ?spellcheck="${s=>s.spellcheck}"
          :value="${s=>s.value}"
          type="search"
          aria-atomic="${s=>s.ariaAtomic}"
          aria-busy="${s=>s.ariaBusy}"
          aria-controls="${s=>s.ariaControls}"
          aria-current="${s=>s.ariaCurrent}"
          aria-describedby="${s=>s.ariaDescribedby}"
          aria-details="${s=>s.ariaDetails}"
          aria-disabled="${s=>s.ariaDisabled}"
          aria-errormessage="${s=>s.ariaErrormessage}"
          aria-flowto="${s=>s.ariaFlowto}"
          aria-haspopup="${s=>s.ariaHaspopup}"
          aria-hidden="${s=>s.ariaHidden}"
          aria-invalid="${s=>s.ariaInvalid}"
          aria-keyshortcuts="${s=>s.ariaKeyshortcuts}"
          aria-label="${s=>s.ariaLabel}"
          aria-labelledby="${s=>s.ariaLabelledby}"
          aria-live="${s=>s.ariaLive}"
          aria-owns="${s=>s.ariaOwns}"
          aria-relevant="${s=>s.ariaRelevant}"
          aria-roledescription="${s=>s.ariaRoledescription}"
          ${Re("control")}
        />
        <slot name="clear-button">
          <button
            class="clear-button ${s=>s.value?"":"clear-button__hidden"}"
            part="clear-button"
            tabindex="-1"
            @click=${s=>s.handleClearInput()}
          >
            <slot name="clear-glyph">
              <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m2.09 2.22.06-.07a.5.5 0 0 1 .63-.06l.07.06L6 5.29l3.15-3.14a.5.5 0 1 1 .7.7L6.71 6l3.14 3.15c.18.17.2.44.06.63l-.06.07a.5.5 0 0 1-.63.06l-.07-.06L6 6.71 2.85 9.85a.5.5 0 0 1-.7-.7L5.29 6 2.15 2.85a.5.5 0 0 1-.06-.63l.06-.07-.06.07Z"
                />
              </svg>
            </slot>
          </button>
        </slot>
      </div>
      ${Qt(t,e)}
    </div>
  </template>
`,Ma=".root",hk=Be.create("clear-button-hover").withDefault(t=>{const e=Js.getValueFor(t),s=bn.getValueFor(t);return e.evaluate(t,s.evaluate(t).focus).hover}),fk=Be.create("clear-button-active").withDefault(t=>{const e=Js.getValueFor(t),s=bn.getValueFor(t);return e.evaluate(t,s.evaluate(t).focus).active}),pk=(t,e)=>D`
    ${ke("inline-block")}

    ${dc(t,e,Ma)}

    ${fa()}

    .root {
      display: flex;
      flex-direction: row;
    }
    .control {
      -webkit-appearance: none;
      color: inherit;
      background: transparent;
      border: 0;
      height: calc(100% - 4px);
      margin-top: auto;
      margin-bottom: auto;
      padding: 0 calc(${Y} * 2px + 1px);
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }
    .clear-button {
      display: inline-flex;
      align-items: center;
      margin: 1px;
      height: calc(100% - 2px);
      opacity: 0;
      background: transparent;
      color: ${Ne};
      fill: currentcolor;
      border: none;
      border-radius: calc(${Me} * 1px);
      min-width: calc(${$e} * 1px);
      ${ht}
      outline: none;
      padding: 0 calc((10 + (${Y} * 2 * ${vn})) * 1px);
    }
    .clear-button:hover {
      background: ${hk};
    }
    .clear-button:active {
      background: ${fk};
    }
    :host(:hover:not([disabled], [readOnly])) .clear-button,
    :host(:active:not([disabled], [readOnly])) .clear-button,
    :host(:focus-within:not([disabled], [readOnly])) .clear-button {
        opacity: 1;
    }
    :host(:hover:not([disabled], [readOnly])) .clear-button__hidden,
    :host(:active:not([disabled], [readOnly])) .clear-button__hidden,
    :host(:focus-within:not([disabled], [readOnly])) .clear-button__hidden {
        opacity: 0;
    }
    .control::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }
    .input-wrapper {
      display: flex;
      position: relative;
      width: 100%;
    }
    .start,
    .end {
      display: flex;
      margin: 1px;
      align-items: center;
    }
    .start {
      display: flex;
      margin-inline-start: 11px;
    }
    ::slotted([slot="end"]) {
      height: 100%
    }
    .clear-button__hidden {
      opacity: 0;
    }
    .end {
        margin-inline-end: 11px;
    }
    ::slotted(${t.tagFor(vs)}) {
      margin-inline-end: 1px;
    }
  `.withBehaviors(ot("outline",pa(t,e,Ma)),ot("filled",Zo(t,e,Ma)),_e(Xo(t,e,Ma)));let dv=class extends ys{constructor(){super(...arguments),this.appearance="outline"}};j([p],dv.prototype,"appearance",void 0);const mk=dv.compose({baseName:"search",baseClass:ys,template:uk,styles:pk,start:'<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg%22%3E"><path d="M8.5 3a5.5 5.5 0 0 1 4.23 9.02l4.12 4.13a.5.5 0 0 1-.63.76l-.07-.06-4.13-4.12A5.5 5.5 0 1 1 8.5 3Zm0 1a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"/></svg>',shadowOptions:{delegatesFocus:!0}});class uv extends Mi{appearanceChanged(e,s){e!==s&&(this.classList.add(s),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&xe.setValueFor(this.listbox,da)}}j([p({mode:"fromView"})],uv.prototype,"appearance",void 0);const gk=uv.compose({baseName:"select",baseClass:Mi,template:Tw,styles:w_,indicator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `}),vk=(t,e)=>D`
    ${ke("block")} :host {
      --skeleton-fill-default: ${zn};
      overflow: hidden;
      width: 100%;
      position: relative;
      background-color: var(--skeleton-fill, var(--skeleton-fill-default));
      --skeleton-animation-gradient-default: linear-gradient(
        270deg,
        var(--skeleton-fill, var(--skeleton-fill-default)) 0%,
        ${Wu} 51%,
        var(--skeleton-fill, var(--skeleton-fill-default)) 100%
      );
      --skeleton-animation-timing-default: ease-in-out;
    }

    :host(.rect) {
      border-radius: calc(${Me} * 1px);
    }

    :host(.circle) {
      border-radius: 100%;
      overflow: hidden;
    }

    object {
      position: absolute;
      width: 100%;
      height: auto;
      z-index: 2;
    }

    object img {
      width: 100%;
      height: auto;
    }

    ${ke("block")} span.shimmer {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: var(--skeleton-animation-gradient, var(--skeleton-animation-gradient-default));
      background-size: 0px 0px / 90% 100%;
      background-repeat: no-repeat;
      background-color: var(--skeleton-animation-fill, ${zn});
      animation: shimmer 2s infinite;
      animation-timing-function: var(--skeleton-animation-timing, var(--skeleton-timing-default));
      animation-direction: normal;
      z-index: 1;
    }

    ::slotted(svg) {
      z-index: 2;
    }

    ::slotted(.pattern) {
      width: 100%;
      height: 100%;
    }

    @keyframes shimmer {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }
  `.withBehaviors(_e(D`
        :host{
          background-color: ${g.CanvasText};
        }
      `)),bk=ra.compose({baseName:"skeleton",template:Fw,styles:vk}),yk=(t,e)=>D`
    ${ke("inline-grid")} :host {
      --thumb-size: calc((${$e} / 2) + ${Y} + (${ee} * 2));
      --thumb-translate: calc(var(--thumb-size) * -0.5 + var(--track-width) / 2);
      --track-overhang: calc((${Y} / 2) * -1);
      --track-width: ${Y};
      align-items: center;
      width: 100%;
      user-select: none;
      box-sizing: border-box;
      border-radius: calc(${Me} * 1px);
      outline: none;
      cursor: pointer;
    }
    :host(.horizontal) .positioning-region {
      position: relative;
      margin: 0 8px;
      display: grid;
      grid-template-rows: calc(var(--thumb-size) * 1px) 1fr;
    }
    :host(.vertical) .positioning-region {
      position: relative;
      margin: 0 8px;
      display: grid;
      height: 100%;
      grid-template-columns: calc(var(--thumb-size) * 1px) 1fr;
    }
    :host(:${pe}) .thumb-cursor {
      box-shadow: 0 0 0 2px ${xe}, 0 0 0 4px ${ac};
    }
    .thumb-container {
      position: absolute;
      height: calc(var(--thumb-size) * 1px);
      width: calc(var(--thumb-size) * 1px);
      transition: all 0.2s ease;
    }
    .thumb-cursor {
      display: flex;
      position: relative;
      border: none;
      width: calc(var(--thumb-size) * 1px);
      height: calc(var(--thumb-size) * 1px);
      background: padding-box linear-gradient(${Cs}, ${Cs}),
        border-box ${qu};
      border: calc(${ee} * 1px) solid transparent;
      border-radius: 50%;
      box-sizing: border-box;
    }
    .thumb-cursor::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 100%;
      margin: 4px;
      background: ${We};
    }
    :host(:not(.disabled)) .thumb-cursor:hover::after {
      background: ${qs};
      margin: 3px;
    }
    :host(:not(.disabled)) .thumb-cursor:active::after {
      background: ${Gs};
      margin: 5px;
    }
    :host(:not(.disabled)) .thumb-cursor:hover {
      background: padding-box linear-gradient(${Cs}, ${Cs}),
        border-box ${Zg};
    }
    :host(:not(.disabled)) .thumb-cursor:active {
      background: padding-box linear-gradient(${Cs}, ${Cs}),
        border-box ${Xg};
    }
    .track-start {
      background: ${We};
      position: absolute;
      height: 100%;
      left: 0;
      border-radius: calc(${Me} * 1px);
    }
    :host(.horizontal) .thumb-container {
      transform: translateX(calc(var(--thumb-size) * 0.5px)) translateY(calc(var(--thumb-translate) * 1px));
    }
    :host(.vertical) .thumb-container {
      transform: translateX(calc(var(--thumb-translate) * 1px)) translateY(calc(var(--thumb-size) * 0.5px));
    }
    :host(.horizontal) {
      min-width: calc(var(--thumb-size) * 1px);
    }
    :host(.horizontal) .track {
      right: calc(var(--track-overhang) * 1px);
      left: calc(var(--track-overhang) * 1px);
      align-self: start;
      height: calc(var(--track-width) * 1px);
    }
    :host(.vertical) .track {
      top: calc(var(--track-overhang) * 1px);
      bottom: calc(var(--track-overhang) * 1px);
      width: calc(var(--track-width) * 1px);
      height: 100%;
    }
    .track {
      background: ${Gg};
      border: 1px solid ${qo};
      border-radius: 2px;
      box-sizing: border-box;
      position: absolute;
    }
    :host(.vertical) {
      height: 100%;
      min-height: calc(${Y} * 60px);
      min-width: calc(${Y} * 20px);
    }
    :host(.vertical) .track-start {
      height: auto;
      width: 100%;
      top: 0;
    }
    :host(.disabled),
    :host(.readonly) {
      cursor: ${Os};
    }
    :host(.disabled) {
      opacity: ${xs};
    }
  `.withBehaviors(_e(D`
        .thumb-cursor {
          forced-color-adjust: none;
          border-color: ${g.FieldText};
          background: ${g.FieldText};
        }
        :host(:not(.disabled)) .thumb-cursor:hover,
        :host(:not(.disabled)) .thumb-cursor:active {
          background: ${g.Highlight};
        }
        .track {
          forced-color-adjust: none;
          background: ${g.FieldText};
        }
        .thumb-cursor::after,
        :host(:not(.disabled)) .thumb-cursor:hover::after,
        :host(:not(.disabled)) .thumb-cursor:active::after {
          background: ${g.Field};
        }
        :host(:${pe}) .thumb-cursor {
          background: ${g.Highlight};
          border-color: ${g.Highlight};
          box-shadow: 0 0 0 1px ${g.Field}, 0 0 0 3px ${g.FieldText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .track,
        :host(.disabled) .thumb-cursor {
          forced-color-adjust: none;
          background: ${g.GrayText};
        }
      `)),xk=Bt.compose({baseName:"slider",template:Rw,styles:yk,thumb:`
    <div class="thumb-cursor"></div>
  `}),wk=(t,e)=>D`
    ${ke("block")} :host {
      ${Qg}
    }
    .root {
      position: absolute;
      display: grid;
    }
    :host(.horizontal) {
      align-self: start;
      grid-row: 2;
      margin-top: -4px;
    }
    :host(.vertical) {
      justify-self: start;
      grid-column: 2;
      margin-left: 2px;
    }
    .container {
      display: grid;
      justify-self: center;
    }
    :host(.horizontal) .container {
      grid-template-rows: auto auto;
      grid-template-columns: 0;
    }
    :host(.vertical) .container {
      grid-template-columns: auto auto;
      grid-template-rows: 0;
      min-width: calc(var(--thumb-size) * 1px);
      height: calc(var(--thumb-size) * 1px);
    }
    .label {
      justify-self: center;
      align-self: center;
      white-space: nowrap;
      max-width: 30px;
      margin: 2px 0;
    }
    .mark {
      width: calc(${ee} * 1px);
      height: calc(${Y} * 1px);
      background: ${qo};
      justify-self: center;
    }
    :host(.vertical) .mark {
      transform: rotate(90deg);
      align-self: center;
    }
    :host(.vertical) .label {
      margin-left: calc((${Y} / 2) * 2px);
      align-self: center;
    }
    :host(.disabled) {
      opacity: ${xs};
    }
  `.withBehaviors(_e(D`
        .mark {
          forced-color-adjust: none;
          background: ${g.FieldText};
        }
        :host(.disabled) {
          forced-color-adjust: none;
          opacity: 1;
        }
        :host(.disabled) .label {
          color: ${g.GrayText};
        }
        :host(.disabled) .mark {
          background: ${g.GrayText};
        }
      `)),$k=Li.compose({baseName:"slider-label",template:Dw,styles:wk}),_k=(t,e)=>D`
    :host([hidden]) {
      display: none;
    }

    ${ke("inline-flex")} :host {
      align-items: center;
      outline: none;
      font-family: ${As};
      ${""} user-select: none;
    }

    :host(.disabled) {
      opacity: ${xs};
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.disabled) .switch,
    :host(.readonly) .switch,
    :host(.disabled) .status-message,
    :host(.readonly) .status-message {
      cursor: ${Os};
    }

    .switch {
      position: relative;
      box-sizing: border-box;
      width: calc(((${$e} / 2) + ${Y}) * 2px);
      height: calc(((${$e} / 2) + ${Y}) * 1px);
      background: ${Bu};
      border-radius: calc(${$e} * 1px);
      border: calc(${ee} * 1px) solid ${qo};
      cursor: pointer;
    }

    :host(:not(.disabled):hover) .switch {
      background: ${ju};
      border-color: ${Zu};
    }

    :host(:not(.disabled):active) .switch {
      background: ${Uu};
      border-color: ${Xu};
    }

    :host(:${pe}) .switch {
      ${ha}
      background: ${Yu};
    }

    :host(.checked) .switch {
      background: ${We};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .switch {
      background: ${qs};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .switch {
      background: ${Gs};
      border-color: transparent;
    }

    slot[name='switch'] {
      position: absolute;
      display: flex;
      border: 1px solid transparent; /* Spacing included in the transform reference box */
      fill: ${Ne};
      transition: all 0.2s ease-in-out;
    }

    .status-message {
      color: ${Ne};
      cursor: pointer;
      ${ht}
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      color: ${Ne};
      ${ht}
      margin-inline-end: calc(${Y} * 2px + 2px);
      cursor: pointer;
    }

    ::slotted([slot="checked-message"]),
    ::slotted([slot="unchecked-message"]) {
        margin-inline-start: calc(${Y} * 2px + 2px);
    }

    :host(.checked) .switch {
      background: ${We};
    }

    :host(.checked) .switch slot[name='switch'] {
      fill: ${Nn};
      filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.15));
    }

    :host(.checked:not(.disabled)) .switch:hover {
      background: ${qs};
    }

    :host(.checked:not(.disabled)) .switch:hover slot[name='switch'] {
      fill: ${jg};
    }

    :host(.checked:not(.disabled)) .switch:active {
      background: ${Gs};
    }

    :host(.checked:not(.disabled)) .switch:active slot[name='switch'] {
      fill: ${Ug};
    }

    .unchecked-message {
      display: block;
    }

    .checked-message {
      display: none;
    }

    :host(.checked) .unchecked-message {
      display: none;
    }

    :host(.checked) .checked-message {
      display: block;
    }
  `.withBehaviors(new Go(D`
        slot[name='switch'] {
          left: 0;
        }

        :host(.checked) slot[name='switch'] {
          left: 100%;
          transform: translateX(-100%);
        }
      `,D`
        slot[name='switch'] {
          right: 0;
        }

        :host(.checked) slot[name='switch'] {
          right: 100%;
          transform: translateX(100%);
        }
      `),_e(D`
        :host(:not(.disabled)) .switch slot[name='switch'] {
          forced-color-adjust: none;
          fill: ${g.FieldText};
        }
        .switch {
          background: ${g.Field};
          border-color: ${g.FieldText};
        }
        :host(.checked) .switch {
          background: ${g.Highlight};
          border-color: ${g.Highlight};
        }
        :host(:not(.disabled):hover) .switch ,
        :host(:not(.disabled):active) .switch,
        :host(.checked:not(.disabled):hover) .switch {
          background: ${g.HighlightText};
          border-color: ${g.Highlight};
        }
        :host(.checked:not(.disabled)) .switch slot[name="switch"] {
          fill: ${g.HighlightText};
        }
        :host(.checked:not(.disabled):hover) .switch slot[name='switch'] {
          fill: ${g.Highlight};
        }
        :host(:${pe}) .switch {
          forced-color-adjust: none;
          background: ${g.Field}; 
          border-color: ${g.Highlight};
          outline-color: ${g.FieldText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) slot[name='switch'] {
          forced-color-adjust: none;
          fill: ${g.GrayText};
        }
        :host(.disabled) .switch {
          background: ${g.Field};
          border-color: ${g.GrayText};
        }
        .status-message,
        .label {
          color: ${g.FieldText};
        }
      `)),kk=Tu.compose({baseName:"switch",template:Pw,styles:_k,switch:`
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="12" height="12" rx="6"/>
    </svg>
  `}),Sk=(t,e)=>D`
      ${ke("grid")} :host {
        box-sizing: border-box;
        ${ht}
        color: ${Ne};
        grid-template-columns: auto 1fr auto;
        grid-template-rows: auto 1fr;
      }

      .tablist {
        display: grid;
        grid-template-rows: calc(${$e} * 1px); auto;
        grid-template-columns: auto;
        position: relative;
        width: max-content;
        align-self: end;
      }

      .start,
      .end {
        align-self: center;
      }

      .activeIndicator {
        grid-row: 2;
        grid-column: 1;
        width: 20px;
        height: 3px;
        border-radius: calc(${Me} * 1px);
        justify-self: center;
        background: ${We};
      }

      .activeIndicatorTransition {
        transition: transform 0.2s ease-in-out;
      }

      .tabpanel {
        grid-row: 2;
        grid-column-start: 1;
        grid-column-end: 4;
        position: relative;
      }

      :host(.vertical) {
        grid-template-rows: auto 1fr auto;
        grid-template-columns: auto 1fr;
      }

      :host(.vertical) .tablist {
        grid-row-start: 2;
        grid-row-end: 2;
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: auto 1fr;
        position: relative;
        width: max-content;
        justify-self: end;
        align-self: flex-start;
        width: 100%;
      }

      :host(.vertical) .tabpanel {
        grid-column: 2;
        grid-row-start: 1;
        grid-row-end: 4;
      }

      :host(.vertical) .end {
        grid-row: 3;
      }

      :host(.vertical) .activeIndicator {
        grid-column: 1;
        grid-row: 1;
        width: 3px;
        height: 20px;
        margin-inline-start: calc(${Ht} * 1px);
        border-radius: calc(${Me} * 1px);
        align-self: center;
        background: ${We};
      }

      :host(.vertical) .activeIndicatorTransition {
        transition: transform 0.2s linear;
      }
    `.withBehaviors(_e(D`
        .activeIndicator,
        :host(.vertical) .activeIndicator {
          background: ${g.Highlight};
        }
      `)),Ck=(t,e)=>D`
      ${ke("inline-flex")} :host {
        box-sizing: border-box;
        ${ht}
        height: calc((${$e} + (${Y} * 2)) * 1px);
        padding: 0 calc((6 + (${Y} * 2 * ${vn})) * 1px);
        color: ${Ne};
        border-radius: calc(${Me} * 1px);
        border: calc(${ee} * 1px) solid transparent;
        align-items: center;
        justify-content: center;
        grid-row: 1 / 3;
        cursor: pointer;
      }

      :host([aria-selected='true']) {
        z-index: 2;
      }

      :host(:hover),
      :host(:active) {
        color: ${Ne};
      }

      :host(:${pe}) {
        ${Ps}
      }

      :host(.vertical) {
        justify-content: start;
        grid-column: 1 / 3;
      }

      :host(.vertical[aria-selected='true']) {
        z-index: 2;
      }

      :host(.vertical:hover),
      :host(.vertical:active) {
        color: ${Ne};
      }

      :host(.vertical:hover[aria-selected='true']) {
      }
    `.withBehaviors(_e(D`
          :host {
            forced-color-adjust: none;
            border-color: transparent;
            color: ${g.ButtonText};
            fill: currentcolor;
          }
          :host(:hover),
          :host(.vertical:hover),
          :host([aria-selected='true']:hover) {
            background: transparent;
            color: ${g.Highlight};
            fill: currentcolor;
          }
          :host([aria-selected='true']) {
            background: transparent;
            color: ${g.Highlight};
            fill: currentcolor;
          }
          :host(:${pe}) {
            background: transparent;
            outline-color: ${g.ButtonText};
          }
        `)),Ik=Km.compose({baseName:"tab",template:Nw,styles:Ck}),Tk=(t,e)=>D`
  ${ke("block")} :host {
    box-sizing: border-box;
    ${ht}
    padding: 0 calc((6 + (${Y} * 2 * ${vn})) * 1px);
  }
`,Fk=Hw.compose({baseName:"tab-panel",template:Vw,styles:Tk}),Dk=Vi.compose({baseName:"tabs",template:zw,styles:Sk}),La=".control",Rk=(t,e)=>D`
    ${ke("inline-flex")}

    ${dc(t,e,La)}

    ${fa()}

    :host {
      flex-direction: column;
      vertical-align: bottom;
    }

    .control {
      height: calc((${$e} * 2) * 1px);
      padding: calc(${Y} * 1.5px) calc(${Y} * 2px + 1px);
    }

    :host .control {
      resize: none;
    }

    :host(.resize-both) .control {
      resize: both;
    }

    :host(.resize-horizontal) .control {
      resize: horizontal;
    }

    :host(.resize-vertical) .control {
      resize: vertical;
    }

    :host([cols]) {
      width: initial;
    }

    :host([rows]) .control {
      height: initial;
    }
  `.withBehaviors(ot("outline",pa(t,e,La)),ot("filled",Zo(t,e,La)),_e(Xo(t,e,La)));class hv extends jt{appearanceChanged(e,s){e!==s&&(this.classList.add(s),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}j([p],hv.prototype,"appearance",void 0);const Ek=hv.compose({baseName:"text-area",baseClass:jt,template:Uw,styles:Rk,shadowOptions:{delegatesFocus:!0}}),Va=".root",Ok=(t,e)=>D`
    ${ke("inline-block")}

    ${dc(t,e,Va)}

    ${fa()}

    .root {
      display: flex;
      flex-direction: row;
    }

    .control {
      -webkit-appearance: none;
      color: inherit;
      background: transparent;
      border: 0;
      height: calc(100% - 4px);
      margin-top: auto;
      margin-bottom: auto;
      padding: 0 calc(${Y} * 2px + 1px);
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }

    .start,
    .end {
      display: flex;
      margin: auto;
    }

    .start {
      display: flex;
      margin-inline-start: 11px;
    }

    .end {
      display: flex;
      margin-inline-end: 11px;
    }
  `.withBehaviors(ot("outline",pa(t,e,Va)),ot("filled",Zo(t,e,Va)),_e(Xo(t,e,Va)));class fv extends ls{appearanceChanged(e,s){e!==s&&(this.classList.add(s),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}j([p],fv.prototype,"appearance",void 0);const Ak=fv.compose({baseName:"text-field",baseClass:ls,template:Yw,styles:Ok,shadowOptions:{delegatesFocus:!0}}),Pk=(t,e)=>D`
    ${ke("inline-flex")} :host {
      --toolbar-item-gap: calc(${Y} * 1px);
      background: ${xe};
      fill: currentcolor;
      padding: var(--toolbar-item-gap);
      box-sizing: border-box;
      align-items: center;
    }

    :host(${pe}) {
      ${Ps}
    }

    .positioning-region {
      align-items: center;
      display: inline-flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      flex-grow: 1;
    }

    :host([orientation='vertical']) .positioning-region {
      flex-direction: column;
      align-items: start;
    }

    ::slotted(:not([slot])) {
      flex: 0 0 auto;
      margin: 0 var(--toolbar-item-gap);
    }

    :host([orientation='vertical']) ::slotted(:not([slot])) {
      margin: var(--toolbar-item-gap) 0;
    }

    :host([orientation='vertical']) {
      display: inline-flex;
      flex-direction: column;
    }

    .start,
    .end {
      display: flex;
      align-items: center;
    }

    .end {
      margin-inline-start: auto;
    }

    .start__hidden,
    .end__hidden {
      display: none;
    }

    ::slotted(svg) {
      ${""}
      width: 16px;
      height: 16px;
    }
  `.withBehaviors(_e(D`
        :host(:${pe}) {
          outline-color: ${g.Highlight};
          color: ${g.ButtonText};
          forced-color-adjust: none;
        }
      `));class Mk extends gn{}const Lk=Mk.compose({baseName:"toolbar",baseClass:gn,template:Ww,styles:Pk}),Vk=(t,e)=>D`
    :host {
      position: relative;
      contain: layout;
      overflow: visible;
      height: 0;
      width: 0;
      z-index: 10000;
    }

    .tooltip {
      box-sizing: border-box;
      border-radius: calc(${Me} * 1px);
      border: calc(${ee} * 1px) solid ${$o};
      background: ${xe};
      color: ${Ne};
      padding: 4px 12px;
      height: fit-content;
      width: fit-content;
      ${ht}
      white-space: nowrap;
      box-shadow: ${Y1};
    }

    ${t.tagFor(ae)} {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: visible;
      flex-direction: row;
    }

    ${t.tagFor(ae)}.right,
    ${t.tagFor(ae)}.left {
      flex-direction: column;
    }

    ${t.tagFor(ae)}.top .tooltip::after,
    ${t.tagFor(ae)}.bottom .tooltip::after,
    ${t.tagFor(ae)}.left .tooltip::after,
    ${t.tagFor(ae)}.right .tooltip::after {
      content: '';
      width: 12px;
      height: 12px;
      background: ${xe};
      border-top: calc(${ee} * 1px) solid ${$o};
      border-left: calc(${ee} * 1px) solid ${$o};
      position: absolute;
    }

    ${t.tagFor(ae)}.top .tooltip::after {
      transform: translateX(-50%) rotate(225deg);
      bottom: 5px;
      left: 50%;
    }

    ${t.tagFor(ae)}.top .tooltip {
      margin-bottom: 12px;
    }

    ${t.tagFor(ae)}.bottom .tooltip::after {
      transform: translateX(-50%) rotate(45deg);
      top: 5px;
      left: 50%;
    }

    ${t.tagFor(ae)}.bottom .tooltip {
      margin-top: 12px;
    }

    ${t.tagFor(ae)}.left .tooltip::after {
      transform: translateY(-50%) rotate(135deg);
      top: 50%;
      right: 5px;
    }

    ${t.tagFor(ae)}.left .tooltip {
      margin-right: 12px;
    }

    ${t.tagFor(ae)}.right .tooltip::after {
      transform: translateY(-50%) rotate(-45deg);
      top: 50%;
      left: 5px;
    }

    ${t.tagFor(ae)}.right .tooltip {
      margin-left: 12px;
    }
  `.withBehaviors(_e(D`
        :host([disabled]) {
          opacity: 1;
        }
        ${t.tagFor(ae)}.top .tooltip::after,
        ${t.tagFor(ae)}.bottom .tooltip::after,
        ${t.tagFor(ae)}.left .tooltip::after,
        ${t.tagFor(ae)}.right .tooltip::after {
          content: '';
          width: unset;
          height: unset;
        }
      `));class Hk extends xt{connectedCallback(){super.connectedCallback(),xe.setValueFor(this,da)}}const Nk=Hk.compose({baseName:"tooltip",baseClass:xt,template:qw,styles:Vk}),zk=(t,e)=>D`
  :host([hidden]) {
    display: none;
  }

  ${ke("flex")} :host {
    flex-direction: column;
    align-items: stretch;
    min-width: fit-content;
    font-size: 0;
  }
`,Bk=Yl.compose({baseName:"tree-view",template:Zw,styles:zk}),jk=D`
  .expand-collapse-button svg {
    transform: rotate(0deg);
  }
  :host(.nested) .expand-collapse-button {
    left: var(--expand-collapse-button-nested-width, calc(${$e} * -1px));
  }
  :host([selected])::after {
    left: calc(${Ht} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,Uk=D`
  .expand-collapse-button svg {
    transform: rotate(180deg);
  }
  :host(.nested) .expand-collapse-button {
    right: var(--expand-collapse-button-nested-width, calc(${$e} * -1px));
  }
  :host([selected])::after {
    right: calc(${Ht} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,Jf=ms`((${ql} / 2) * ${Y}) + ((${Y} * ${vn}) / 2)`,Yk=Be.create("tree-item-expand-collapse-hover").withDefault(t=>{const e=Js.getValueFor(t);return e.evaluate(t,e.evaluate(t).hover).hover}),Wk=Be.create("tree-item-expand-collapse-selected-hover").withDefault(t=>{const e=Zn.getValueFor(t);return Js.getValueFor(t).evaluate(t,e.evaluate(t).rest).hover}),qk=(t,e)=>D`
    ${ke("block")} :host {
      contain: content;
      position: relative;
      outline: none;
      color: ${Ne};
      fill: currentcolor;
      cursor: pointer;
      font-family: ${As};
      --expand-collapse-button-size: calc(${$e} * 1px);
      --tree-item-nested-width: 0;
    }

    .positioning-region {
      display: flex;
      position: relative;
      box-sizing: border-box;
      background: ${Po};
      border: calc(${ee} * 1px) solid transparent;
      border-radius: calc(${Me} * 1px);
      height: calc((${$e} + 1) * 1px);
    }

    :host(:${pe}) .positioning-region {
      ${Ps}
    }

    .positioning-region::before {
      content: '';
      display: block;
      width: var(--tree-item-nested-width);
      flex-shrink: 0;
    }

    :host(:not([disabled])) .positioning-region:hover {
      background: ${Mo};
    }

    :host(:not([disabled])) .positioning-region:active {
      background: ${Lo};
    }

    .content-region {
      display: inline-flex;
      align-items: center;
      white-space: nowrap;
      width: 100%;
      height: calc(${$e} * 1px);
      margin-inline-start: calc(${Y} * 2px + 8px);
      ${ht}
    }

    .items {
      display: none;
      ${""} font-size: calc(1em + (${Y} + 16) * 1px);
    }

    .expand-collapse-button {
      background: none;
      border: none;
      border-radius: calc(${Me} * 1px);
      ${""} width: calc((${Jf} + (${Y} * 2)) * 1px);
      height: calc((${Jf} + (${Y} * 2)) * 1px);
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin: 0 6px;
    }

    .expand-collapse-button svg {
      transition: transform 0.1s linear;
      pointer-events: none;
    }

    .start,
    .end {
      display: flex;
    }

    .start {
      ${""} margin-inline-end: calc(${Y} * 2px + 2px);
    }

    .end {
      ${""} margin-inline-start: calc(${Y} * 2px + 2px);
    }

    :host(.expanded) > .items {
      display: block;
    }

    :host([disabled]) {
      opacity: ${xs};
      cursor: ${Os};
    }

    :host(.nested) .content-region {
      position: relative;
      margin-inline-start: var(--expand-collapse-button-size);
    }

    :host(.nested) .expand-collapse-button {
      position: absolute;
    }

    :host(.nested) .expand-collapse-button:hover {
      background: ${Yk};
    }

    :host(:not([disabled])[selected]) .positioning-region {
      background: ${zn};
    }

    :host(:not([disabled])[selected]) .expand-collapse-button:hover {
      background: ${Wk};
    }

    :host([selected])::after {
      content: '';
      display: block;
      position: absolute;
      top: calc((${$e} / 4) * 1px);
      width: 3px;
      height: calc((${$e} / 2) * 1px);
      ${""} background: ${We};
      border-radius: calc(${Me} * 1px);
    }

    ::slotted(fluent-tree-item) {
      --tree-item-nested-width: 1em;
      --expand-collapse-button-nested-width: calc(${$e} * -1px);
    }
  `.withBehaviors(new Go(jk,Uk),_e(D`
        :host {
          color: ${g.ButtonText};
        }
        .positioning-region {
          border-color: ${g.ButtonFace};
          background: ${g.ButtonFace};
        }
        :host(:not([disabled])) .positioning-region:hover,
        :host(:not([disabled])) .positioning-region:active,
        :host(:not([disabled])[selected]) .positioning-region {
          background: ${g.Highlight};
        }
        :host .positioning-region:hover .content-region,
        :host([selected]) .positioning-region .content-region {
          forced-color-adjust: none;
          color: ${g.HighlightText};
        }
        :host([disabled][selected]) .positioning-region .content-region {
          color: ${g.GrayText};
        }
        :host([selected])::after {
          background: ${g.HighlightText};
        }
        :host(:${pe}) .positioning-region {
          forced-color-adjust: none;
          outline-color: ${g.ButtonFace};
        }
        :host([disabled]),
        :host([disabled]) .content-region,
        :host([disabled]) .positioning-region:hover .content-region {
          opacity: 1;
          color: ${g.GrayText};
        }
        :host(.nested) .expand-collapse-button:hover,
        :host(:not([disabled])[selected]) .expand-collapse-button:hover {
          background: ${g.ButtonFace};
          fill: ${g.ButtonText};
        }
      `)),Gk=_t.compose({baseName:"tree-item",template:Gw,styles:qk,expandCollapseGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>
    </svg>
  `}),Zk={fluentAccordion:L1,fluentAccordionItem:M1,fluentAnchor:t_,fluentAnchoredRegion:i_,fluentBadge:o_,fluentBreadcrumb:a_,fluentBreadcrumbItem:c_,fluentButton:u_,fluentCalendar:m_,fluentCard:v_,fluentCheckbox:y_,fluentCombobox:__,fluentDataGrid:F_,fluentDataGridCell:I_,fluentDataGridRow:T_,fluentDesignSystemProvider:D_,fluentDialog:E_,fluentDivider:A_,fluentFlipper:M_,fluentHorizontalScroll:B_,fluentListbox:Y_,fluentOption:q_,fluentMenu:X_,fluentMenuItem:J_,fluentNumberField:ek,fluentProgress:ik,fluentProgressRing:rk,fluentRadio:lk,fluentRadioGroup:dk,fluentSearch:mk,fluentSelect:gk,fluentSkeleton:bk,fluentSlider:xk,fluentSliderLabel:$k,fluentSwitch:kk,fluentTabs:Dk,fluentTab:Ik,fluentTabPanel:Fk,fluentTextArea:Ek,fluentTextField:Ak,fluentToolbar:Lk,fluentTooltip:Nk,fluentTreeView:Bk,fluentTreeItem:Gk,register(t,...e){if(t)for(const s in this)s!=="register"&&this[s]().register(t,...e)}};function Xk(t){return Um.getOrCreate(t).withPrefix("fluent")}Xk().register(Zk);function th(t,e){const s=Object.create(null),i=t.split(",");for(let n=0;n<i.length;n++)s[i[n]]=!0;return e?n=>!!s[n.toLowerCase()]:n=>!!s[n]}const Je={},_o=[],Ys=()=>{},Qk=()=>!1,Jk=/^on[^a-z]/,uc=t=>Jk.test(t),sh=t=>t.startsWith("onUpdate:"),Rt=Object.assign,ih=(t,e)=>{const s=t.indexOf(e);s>-1&&t.splice(s,1)},Kk=Object.prototype.hasOwnProperty,De=(t,e)=>Kk.call(t,e),he=Array.isArray,ko=t=>hc(t)==="[object Map]",pv=t=>hc(t)==="[object Set]",ye=t=>typeof t=="function",Ct=t=>typeof t=="string",nh=t=>typeof t=="symbol",at=t=>t!==null&&typeof t=="object",mv=t=>at(t)&&ye(t.then)&&ye(t.catch),gv=Object.prototype.toString,hc=t=>gv.call(t),eS=t=>hc(t).slice(8,-1),vv=t=>hc(t)==="[object Object]",oh=t=>Ct(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ja=th(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fc=t=>{const e=Object.create(null);return s=>e[s]||(e[s]=t(s))},tS=/-(\w)/g,li=fc(t=>t.replace(tS,(e,s)=>s?s.toUpperCase():"")),sS=/\B([A-Z])/g,Qn=fc(t=>t.replace(sS,"-$1").toLowerCase()),pc=fc(t=>t.charAt(0).toUpperCase()+t.slice(1)),dd=fc(t=>t?`on${pc(t)}`:""),jr=(t,e)=>!Object.is(t,e),ud=(t,e)=>{for(let s=0;s<t.length;s++)t[s](e)},pl=(t,e,s)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:s})},iS=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Kf;const Bd=()=>Kf||(Kf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function un(t){if(he(t)){const e={};for(let s=0;s<t.length;s++){const i=t[s],n=Ct(i)?aS(i):un(i);if(n)for(const o in n)e[o]=n[o]}return e}else{if(Ct(t))return t;if(at(t))return t}}const nS=/;(?![^(]*\))/g,oS=/:([^]+)/,rS=/\/\*[^]*?\*\//g;function aS(t){const e={};return t.replace(rS,"").split(nS).forEach(s=>{if(s){const i=s.split(oS);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ot(t){let e="";if(Ct(t))e=t;else if(he(t))for(let s=0;s<t.length;s++){const i=Ot(t[s]);i&&(e+=i+" ")}else if(at(t))for(const s in t)t[s]&&(e+=s+" ");return e.trim()}const lS="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cS=th(lS);function bv(t){return!!t||t===""}const rt=t=>Ct(t)?t:t==null?"":he(t)||at(t)&&(t.toString===gv||!ye(t.toString))?JSON.stringify(t,yv,2):String(t),yv=(t,e)=>e&&e.__v_isRef?yv(t,e.value):ko(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((s,[i,n])=>(s[`${i} =>`]=n,s),{})}:pv(e)?{[`Set(${e.size})`]:[...e.values()]}:at(e)&&!he(e)&&!vv(e)?String(e):e;let us;class xv{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=us,!e&&us&&(this.index=(us.scopes||(us.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const s=us;try{return us=this,e()}finally{us=s}}}on(){us=this}off(){us=this.parent}stop(e){if(this._active){let s,i;for(s=0,i=this.effects.length;s<i;s++)this.effects[s].stop();for(s=0,i=this.cleanups.length;s<i;s++)this.cleanups[s]();if(this.scopes)for(s=0,i=this.scopes.length;s<i;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0,this._active=!1}}}function wv(t){return new xv(t)}function dS(t,e=us){e&&e.active&&e.effects.push(t)}function $v(){return us}function uS(t){us&&us.cleanups.push(t)}const rh=t=>{const e=new Set(t);return e.w=0,e.n=0,e},_v=t=>(t.w&hn)>0,kv=t=>(t.n&hn)>0,hS=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=hn},fS=t=>{const{deps:e}=t;if(e.length){let s=0;for(let i=0;i<e.length;i++){const n=e[i];_v(n)&&!kv(n)?n.delete(t):e[s++]=n,n.w&=~hn,n.n&=~hn}e.length=s}},ml=new WeakMap;let gr=0,hn=1;const jd=30;let Bs;const Pn=Symbol(""),Ud=Symbol("");class ah{constructor(e,s=null,i){this.fn=e,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,dS(this,i)}run(){if(!this.active)return this.fn();let e=Bs,s=tn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Bs,Bs=this,tn=!0,hn=1<<++gr,gr<=jd?hS(this):ep(this),this.fn()}finally{gr<=jd&&fS(this),hn=1<<--gr,Bs=this.parent,tn=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Bs===this?this.deferStop=!0:this.active&&(ep(this),this.onStop&&this.onStop(),this.active=!1)}}function ep(t){const{deps:e}=t;if(e.length){for(let s=0;s<e.length;s++)e[s].delete(t);e.length=0}}let tn=!0;const Sv=[];function Qo(){Sv.push(tn),tn=!1}function Jo(){const t=Sv.pop();tn=t===void 0?!0:t}function ns(t,e,s){if(tn&&Bs){let i=ml.get(t);i||ml.set(t,i=new Map);let n=i.get(s);n||i.set(s,n=rh()),Cv(n)}}function Cv(t,e){let s=!1;gr<=jd?kv(t)||(t.n|=hn,s=!_v(t)):s=!t.has(Bs),s&&(t.add(Bs),Bs.deps.push(t))}function Ti(t,e,s,i,n,o){const r=ml.get(t);if(!r)return;let a=[];if(e==="clear")a=[...r.values()];else if(s==="length"&&he(t)){const l=Number(i);r.forEach((c,d)=>{(d==="length"||d>=l)&&a.push(c)})}else switch(s!==void 0&&a.push(r.get(s)),e){case"add":he(t)?oh(s)&&a.push(r.get("length")):(a.push(r.get(Pn)),ko(t)&&a.push(r.get(Ud)));break;case"delete":he(t)||(a.push(r.get(Pn)),ko(t)&&a.push(r.get(Ud)));break;case"set":ko(t)&&a.push(r.get(Pn));break}if(a.length===1)a[0]&&Yd(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Yd(rh(l))}}function Yd(t,e){const s=he(t)?t:[...t];for(const i of s)i.computed&&tp(i);for(const i of s)i.computed||tp(i)}function tp(t,e){(t!==Bs||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function pS(t,e){var s;return(s=ml.get(t))==null?void 0:s.get(e)}const mS=th("__proto__,__v_isRef,__isVue"),Iv=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(nh)),gS=lh(),vS=lh(!1,!0),bS=lh(!0),sp=yS();function yS(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...s){const i=Ee(this);for(let o=0,r=this.length;o<r;o++)ns(i,"get",o+"");const n=i[e](...s);return n===-1||n===!1?i[e](...s.map(Ee)):n}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...s){Qo();const i=Ee(this)[e].apply(this,s);return Jo(),i}}),t}function xS(t){const e=Ee(this);return ns(e,"has",t),e.hasOwnProperty(t)}function lh(t=!1,e=!1){return function(i,n,o){if(n==="__v_isReactive")return!t;if(n==="__v_isReadonly")return t;if(n==="__v_isShallow")return e;if(n==="__v_raw"&&o===(t?e?MS:Ev:e?Rv:Dv).get(i))return i;const r=he(i);if(!t){if(r&&De(sp,n))return Reflect.get(sp,n,o);if(n==="hasOwnProperty")return xS}const a=Reflect.get(i,n,o);return(nh(n)?Iv.has(n):mS(n))||(t||ns(i,"get",n),e)?a:bt(a)?r&&oh(n)?a:a.value:at(a)?t?Av(a):Jn(a):a}}const wS=Tv(),$S=Tv(!0);function Tv(t=!1){return function(s,i,n,o){let r=s[i];if(Ho(r)&&bt(r)&&!bt(n))return!1;if(!t&&(!gl(n)&&!Ho(n)&&(r=Ee(r),n=Ee(n)),!he(s)&&bt(r)&&!bt(n)))return r.value=n,!0;const a=he(s)&&oh(i)?Number(i)<s.length:De(s,i),l=Reflect.set(s,i,n,o);return s===Ee(o)&&(a?jr(n,r)&&Ti(s,"set",i,n):Ti(s,"add",i,n)),l}}function _S(t,e){const s=De(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&s&&Ti(t,"delete",e,void 0),i}function kS(t,e){const s=Reflect.has(t,e);return(!nh(e)||!Iv.has(e))&&ns(t,"has",e),s}function SS(t){return ns(t,"iterate",he(t)?"length":Pn),Reflect.ownKeys(t)}const Fv={get:gS,set:wS,deleteProperty:_S,has:kS,ownKeys:SS},CS={get:bS,set(t,e){return!0},deleteProperty(t,e){return!0}},IS=Rt({},Fv,{get:vS,set:$S}),ch=t=>t,mc=t=>Reflect.getPrototypeOf(t);function Ha(t,e,s=!1,i=!1){t=t.__v_raw;const n=Ee(t),o=Ee(e);s||(e!==o&&ns(n,"get",e),ns(n,"get",o));const{has:r}=mc(n),a=i?ch:s?hh:Ur;if(r.call(n,e))return a(t.get(e));if(r.call(n,o))return a(t.get(o));t!==n&&t.get(e)}function Na(t,e=!1){const s=this.__v_raw,i=Ee(s),n=Ee(t);return e||(t!==n&&ns(i,"has",t),ns(i,"has",n)),t===n?s.has(t):s.has(t)||s.has(n)}function za(t,e=!1){return t=t.__v_raw,!e&&ns(Ee(t),"iterate",Pn),Reflect.get(t,"size",t)}function ip(t){t=Ee(t);const e=Ee(this);return mc(e).has.call(e,t)||(e.add(t),Ti(e,"add",t,t)),this}function np(t,e){e=Ee(e);const s=Ee(this),{has:i,get:n}=mc(s);let o=i.call(s,t);o||(t=Ee(t),o=i.call(s,t));const r=n.call(s,t);return s.set(t,e),o?jr(e,r)&&Ti(s,"set",t,e):Ti(s,"add",t,e),this}function op(t){const e=Ee(this),{has:s,get:i}=mc(e);let n=s.call(e,t);n||(t=Ee(t),n=s.call(e,t)),i&&i.call(e,t);const o=e.delete(t);return n&&Ti(e,"delete",t,void 0),o}function rp(){const t=Ee(this),e=t.size!==0,s=t.clear();return e&&Ti(t,"clear",void 0,void 0),s}function Ba(t,e){return function(i,n){const o=this,r=o.__v_raw,a=Ee(r),l=e?ch:t?hh:Ur;return!t&&ns(a,"iterate",Pn),r.forEach((c,d)=>i.call(n,l(c),l(d),o))}}function ja(t,e,s){return function(...i){const n=this.__v_raw,o=Ee(n),r=ko(o),a=t==="entries"||t===Symbol.iterator&&r,l=t==="keys"&&r,c=n[t](...i),d=s?ch:e?hh:Ur;return!e&&ns(o,"iterate",l?Ud:Pn),{next(){const{value:u,done:f}=c.next();return f?{value:u,done:f}:{value:a?[d(u[0]),d(u[1])]:d(u),done:f}},[Symbol.iterator](){return this}}}}function Wi(t){return function(...e){return t==="delete"?!1:this}}function TS(){const t={get(o){return Ha(this,o)},get size(){return za(this)},has:Na,add:ip,set:np,delete:op,clear:rp,forEach:Ba(!1,!1)},e={get(o){return Ha(this,o,!1,!0)},get size(){return za(this)},has:Na,add:ip,set:np,delete:op,clear:rp,forEach:Ba(!1,!0)},s={get(o){return Ha(this,o,!0)},get size(){return za(this,!0)},has(o){return Na.call(this,o,!0)},add:Wi("add"),set:Wi("set"),delete:Wi("delete"),clear:Wi("clear"),forEach:Ba(!0,!1)},i={get(o){return Ha(this,o,!0,!0)},get size(){return za(this,!0)},has(o){return Na.call(this,o,!0)},add:Wi("add"),set:Wi("set"),delete:Wi("delete"),clear:Wi("clear"),forEach:Ba(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{t[o]=ja(o,!1,!1),s[o]=ja(o,!0,!1),e[o]=ja(o,!1,!0),i[o]=ja(o,!0,!0)}),[t,s,e,i]}const[FS,DS,RS,ES]=TS();function dh(t,e){const s=e?t?ES:RS:t?DS:FS;return(i,n,o)=>n==="__v_isReactive"?!t:n==="__v_isReadonly"?t:n==="__v_raw"?i:Reflect.get(De(s,n)&&n in i?s:i,n,o)}const OS={get:dh(!1,!1)},AS={get:dh(!1,!0)},PS={get:dh(!0,!1)},Dv=new WeakMap,Rv=new WeakMap,Ev=new WeakMap,MS=new WeakMap;function LS(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function VS(t){return t.__v_skip||!Object.isExtensible(t)?0:LS(eS(t))}function Jn(t){return Ho(t)?t:uh(t,!1,Fv,OS,Dv)}function Ov(t){return uh(t,!1,IS,AS,Rv)}function Av(t){return uh(t,!0,CS,PS,Ev)}function uh(t,e,s,i,n){if(!at(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=n.get(t);if(o)return o;const r=VS(t);if(r===0)return t;const a=new Proxy(t,r===2?i:s);return n.set(t,a),a}function sn(t){return Ho(t)?sn(t.__v_raw):!!(t&&t.__v_isReactive)}function Ho(t){return!!(t&&t.__v_isReadonly)}function gl(t){return!!(t&&t.__v_isShallow)}function Pv(t){return sn(t)||Ho(t)}function Ee(t){const e=t&&t.__v_raw;return e?Ee(e):t}function gc(t){return pl(t,"__v_skip",!0),t}const Ur=t=>at(t)?Jn(t):t,hh=t=>at(t)?Av(t):t;function Mv(t){tn&&Bs&&(t=Ee(t),Cv(t.dep||(t.dep=rh())))}function Lv(t,e){t=Ee(t);const s=t.dep;s&&Yd(s)}function bt(t){return!!(t&&t.__v_isRef===!0)}function Ke(t){return Vv(t,!1)}function HS(t){return Vv(t,!0)}function Vv(t,e){return bt(t)?t:new NS(t,e)}class NS{constructor(e,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?e:Ee(e),this._value=s?e:Ur(e)}get value(){return Mv(this),this._value}set value(e){const s=this.__v_isShallow||gl(e)||Ho(e);e=s?e:Ee(e),jr(e,this._rawValue)&&(this._rawValue=e,this._value=s?e:Ur(e),Lv(this))}}function re(t){return bt(t)?t.value:t}const zS={get:(t,e,s)=>re(Reflect.get(t,e,s)),set:(t,e,s,i)=>{const n=t[e];return bt(n)&&!bt(s)?(n.value=s,!0):Reflect.set(t,e,s,i)}};function Hv(t){return sn(t)?t:new Proxy(t,zS)}function BS(t){const e=he(t)?new Array(t.length):{};for(const s in t)e[s]=US(t,s);return e}class jS{constructor(e,s,i){this._object=e,this._key=s,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return pS(Ee(this._object),this._key)}}function US(t,e,s){const i=t[e];return bt(i)?i:new jS(t,e,s)}class YS{constructor(e,s,i,n){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ah(e,()=>{this._dirty||(this._dirty=!0,Lv(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!n,this.__v_isReadonly=i}get value(){const e=Ee(this);return Mv(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function WS(t,e,s=!1){let i,n;const o=ye(t);return o?(i=t,n=Ys):(i=t.get,n=t.set),new YS(i,n,o||!n,s)}function nn(t,e,s,i){let n;try{n=i?t(...i):t()}catch(o){vc(o,e,s)}return n}function Ws(t,e,s,i){if(ye(t)){const o=nn(t,e,s,i);return o&&mv(o)&&o.catch(r=>{vc(r,e,s)}),o}const n=[];for(let o=0;o<t.length;o++)n.push(Ws(t[o],e,s,i));return n}function vc(t,e,s,i=!0){const n=e?e.vnode:null;if(e){let o=e.parent;const r=e.proxy,a=s;for(;o;){const c=o.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](t,r,a)===!1)return}o=o.parent}const l=e.appContext.config.errorHandler;if(l){nn(l,null,10,[t,r,a]);return}}qS(t,s,n,i)}function qS(t,e,s,i=!0){console.error(t)}let Yr=!1,Wd=!1;const Vt=[];let ri=0;const So=[];let bi=null,Tn=0;const Nv=Promise.resolve();let fh=null;function ph(t){const e=fh||Nv;return t?e.then(this?t.bind(this):t):e}function GS(t){let e=ri+1,s=Vt.length;for(;e<s;){const i=e+s>>>1;Wr(Vt[i])<t?e=i+1:s=i}return e}function mh(t){(!Vt.length||!Vt.includes(t,Yr&&t.allowRecurse?ri+1:ri))&&(t.id==null?Vt.push(t):Vt.splice(GS(t.id),0,t),zv())}function zv(){!Yr&&!Wd&&(Wd=!0,fh=Nv.then(jv))}function ZS(t){const e=Vt.indexOf(t);e>ri&&Vt.splice(e,1)}function XS(t){he(t)?So.push(...t):(!bi||!bi.includes(t,t.allowRecurse?Tn+1:Tn))&&So.push(t),zv()}function ap(t,e=Yr?ri+1:0){for(;e<Vt.length;e++){const s=Vt[e];s&&s.pre&&(Vt.splice(e,1),e--,s())}}function Bv(t){if(So.length){const e=[...new Set(So)];if(So.length=0,bi){bi.push(...e);return}for(bi=e,bi.sort((s,i)=>Wr(s)-Wr(i)),Tn=0;Tn<bi.length;Tn++)bi[Tn]();bi=null,Tn=0}}const Wr=t=>t.id==null?1/0:t.id,QS=(t,e)=>{const s=Wr(t)-Wr(e);if(s===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return s};function jv(t){Wd=!1,Yr=!0,Vt.sort(QS);const e=Ys;try{for(ri=0;ri<Vt.length;ri++){const s=Vt[ri];s&&s.active!==!1&&nn(s,null,14)}}finally{ri=0,Vt.length=0,Bv(),Yr=!1,fh=null,(Vt.length||So.length)&&jv()}}function JS(t,e,...s){if(t.isUnmounted)return;const i=t.vnode.props||Je;let n=s;const o=e.startsWith("update:"),r=o&&e.slice(7);if(r&&r in i){const d=`${r==="modelValue"?"model":r}Modifiers`,{number:u,trim:f}=i[d]||Je;f&&(n=s.map(b=>Ct(b)?b.trim():b)),u&&(n=s.map(iS))}let a,l=i[a=dd(e)]||i[a=dd(li(e))];!l&&o&&(l=i[a=dd(Qn(e))]),l&&Ws(l,t,6,n);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ws(c,t,6,n)}}function Uv(t,e,s=!1){const i=e.emitsCache,n=i.get(t);if(n!==void 0)return n;const o=t.emits;let r={},a=!1;if(!ye(t)){const l=c=>{const d=Uv(c,e,!0);d&&(a=!0,Rt(r,d))};!s&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!o&&!a?(at(t)&&i.set(t,null),null):(he(o)?o.forEach(l=>r[l]=null):Rt(r,o),at(t)&&i.set(t,r),r)}function bc(t,e){return!t||!uc(e)?!1:(e=e.slice(2).replace(/Once$/,""),De(t,e[0].toLowerCase()+e.slice(1))||De(t,Qn(e))||De(t,e))}let Et=null,yc=null;function vl(t){const e=Et;return Et=t,yc=t&&t.type.__scopeId||null,e}function xc(t){yc=t}function wc(){yc=null}function A(t,e=Et,s){if(!e||t._n)return t;const i=(...n)=>{i._d&&bp(-1);const o=vl(e);let r;try{r=t(...n)}finally{vl(o),i._d&&bp(1)}return r};return i._n=!0,i._c=!0,i._d=!0,i}function hd(t){const{type:e,vnode:s,proxy:i,withProxy:n,props:o,propsOptions:[r],slots:a,attrs:l,emit:c,render:d,renderCache:u,data:f,setupState:b,ctx:w,inheritAttrs:x}=t;let _,R;const H=vl(t);try{if(s.shapeFlag&4){const U=n||i;_=oi(d.call(U,U,u,o,b,f,w)),R=l}else{const U=e;_=oi(U.length>1?U(o,{attrs:l,slots:a,emit:c}):U(o,null)),R=e.props?l:KS(l)}}catch(U){Sr.length=0,vc(U,t,1),_=T(fn)}let ie=_;if(R&&x!==!1){const U=Object.keys(R),{shapeFlag:ge}=ie;U.length&&ge&7&&(r&&U.some(sh)&&(R=eC(R,r)),ie=Bn(ie,R))}return s.dirs&&(ie=Bn(ie),ie.dirs=ie.dirs?ie.dirs.concat(s.dirs):s.dirs),s.transition&&(ie.transition=s.transition),_=ie,vl(H),_}const KS=t=>{let e;for(const s in t)(s==="class"||s==="style"||uc(s))&&((e||(e={}))[s]=t[s]);return e},eC=(t,e)=>{const s={};for(const i in t)(!sh(i)||!(i.slice(9)in e))&&(s[i]=t[i]);return s};function tC(t,e,s){const{props:i,children:n,component:o}=t,{props:r,children:a,patchFlag:l}=e,c=o.emitsOptions;if(e.dirs||e.transition)return!0;if(s&&l>=0){if(l&1024)return!0;if(l&16)return i?lp(i,r,c):!!r;if(l&8){const d=e.dynamicProps;for(let u=0;u<d.length;u++){const f=d[u];if(r[f]!==i[f]&&!bc(c,f))return!0}}}else return(n||a)&&(!a||!a.$stable)?!0:i===r?!1:i?r?lp(i,r,c):!0:!!r;return!1}function lp(t,e,s){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let n=0;n<i.length;n++){const o=i[n];if(e[o]!==t[o]&&!bc(s,o))return!0}return!1}function sC({vnode:t,parent:e},s){for(;e&&e.subTree===t;)(t=e.vnode).el=s,e=e.parent}const iC=t=>t.__isSuspense;function nC(t,e){e&&e.pendingBranch?he(t)?e.effects.push(...t):e.effects.push(t):XS(t)}function Yv(t,e){return gh(t,null,e)}const Ua={};function ki(t,e,s){return gh(t,e,s)}function gh(t,e,{immediate:s,deep:i,flush:n,onTrack:o,onTrigger:r}=Je){var a;const l=$v()===((a=Dt)==null?void 0:a.scope)?Dt:null;let c,d=!1,u=!1;if(bt(t)?(c=()=>t.value,d=gl(t)):sn(t)?(c=()=>t,i=!0):he(t)?(u=!0,d=t.some(U=>sn(U)||gl(U)),c=()=>t.map(U=>{if(bt(U))return U.value;if(sn(U))return Dn(U);if(ye(U))return nn(U,l,2)})):ye(t)?e?c=()=>nn(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),Ws(t,l,3,[b])}:c=Ys,e&&i){const U=c;c=()=>Dn(U())}let f,b=U=>{f=H.onStop=()=>{nn(U,l,4)}},w;if(Zr)if(b=Ys,e?s&&Ws(e,l,3,[c(),u?[]:void 0,b]):c(),n==="sync"){const U=ZC();w=U.__watcherHandles||(U.__watcherHandles=[])}else return Ys;let x=u?new Array(t.length).fill(Ua):Ua;const _=()=>{if(H.active)if(e){const U=H.run();(i||d||(u?U.some((ge,Fe)=>jr(ge,x[Fe])):jr(U,x)))&&(f&&f(),Ws(e,l,3,[U,x===Ua?void 0:u&&x[0]===Ua?[]:x,b]),x=U)}else H.run()};_.allowRecurse=!!e;let R;n==="sync"?R=_:n==="post"?R=()=>ss(_,l&&l.suspense):(_.pre=!0,l&&(_.id=l.uid),R=()=>mh(_));const H=new ah(c,R);e?s?_():x=H.run():n==="post"?ss(H.run.bind(H),l&&l.suspense):H.run();const ie=()=>{H.stop(),l&&l.scope&&ih(l.scope.effects,H)};return w&&w.push(ie),ie}function oC(t,e,s){const i=this.proxy,n=Ct(t)?t.includes(".")?Wv(i,t):()=>i[t]:t.bind(i,i);let o;ye(e)?o=e:(o=e.handler,s=e);const r=Dt;No(this);const a=gh(n,o.bind(i),s);return r?No(r):Mn(),a}function Wv(t,e){const s=e.split(".");return()=>{let i=t;for(let n=0;n<s.length&&i;n++)i=i[s[n]];return i}}function Dn(t,e){if(!at(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),bt(t))Dn(t.value,e);else if(he(t))for(let s=0;s<t.length;s++)Dn(t[s],e);else if(pv(t)||ko(t))t.forEach(s=>{Dn(s,e)});else if(vv(t))for(const s in t)Dn(t[s],e);return t}function Ko(t,e){const s=Et;if(s===null)return t;const i=Cc(s)||s.proxy,n=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[r,a,l,c=Je]=e[o];r&&(ye(r)&&(r={mounted:r,updated:r}),r.deep&&Dn(a),n.push({dir:r,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function _n(t,e,s,i){const n=t.dirs,o=e&&e.dirs;for(let r=0;r<n.length;r++){const a=n[r];o&&(a.oldValue=o[r].value);let l=a.dir[i];l&&(Qo(),Ws(l,s,8,[t.el,a,t,e]),Jo())}}function ve(t,e){return ye(t)?(()=>Rt({name:t.name},e,{setup:t}))():t}const _r=t=>!!t.type.__asyncLoader,qv=t=>t.type.__isKeepAlive;function rC(t,e){Gv(t,"a",e)}function aC(t,e){Gv(t,"da",e)}function Gv(t,e,s=Dt){const i=t.__wdc||(t.__wdc=()=>{let n=s;for(;n;){if(n.isDeactivated)return;n=n.parent}return t()});if($c(e,i,s),s){let n=s.parent;for(;n&&n.parent;)qv(n.parent.vnode)&&lC(i,e,s,n),n=n.parent}}function lC(t,e,s,i){const n=$c(e,t,i,!0);ws(()=>{ih(i[e],n)},s)}function $c(t,e,s=Dt,i=!1){if(s){const n=s[t]||(s[t]=[]),o=e.__weh||(e.__weh=(...r)=>{if(s.isUnmounted)return;Qo(),No(s);const a=Ws(e,s,t,r);return Mn(),Jo(),a});return i?n.unshift(o):n.push(o),o}}const Ni=t=>(e,s=Dt)=>(!Zr||t==="sp")&&$c(t,(...i)=>e(...i),s),Zv=Ni("bm"),zt=Ni("m"),cC=Ni("bu"),dC=Ni("u"),_c=Ni("bum"),ws=Ni("um"),uC=Ni("sp"),hC=Ni("rtg"),fC=Ni("rtc");function pC(t,e=Dt){$c("ec",t,e)}const Xv="components";function ce(t,e){return gC(Xv,t,!0,e)||t}const mC=Symbol.for("v-ndc");function gC(t,e,s=!0,i=!1){const n=Et||Dt;if(n){const o=n.type;if(t===Xv){const a=WC(o,!1);if(a&&(a===e||a===li(e)||a===pc(li(e))))return o}const r=cp(n[t]||o[t],e)||cp(n.appContext[t],e);return!r&&i?o:r}}function cp(t,e){return t&&(t[e]||t[li(e)]||t[pc(li(e))])}function Kn(t,e,s,i){let n;const o=s&&s[i];if(he(t)||Ct(t)){n=new Array(t.length);for(let r=0,a=t.length;r<a;r++)n[r]=e(t[r],r,void 0,o&&o[r])}else if(typeof t=="number"){n=new Array(t);for(let r=0;r<t;r++)n[r]=e(r+1,r,void 0,o&&o[r])}else if(at(t))if(t[Symbol.iterator])n=Array.from(t,(r,a)=>e(r,a,void 0,o&&o[a]));else{const r=Object.keys(t);n=new Array(r.length);for(let a=0,l=r.length;a<l;a++){const c=r[a];n[a]=e(t[c],c,a,o&&o[a])}}else n=[];return s&&(s[i]=n),n}function os(t,e,s={},i,n){if(Et.isCE||Et.parent&&_r(Et.parent)&&Et.parent.isCE)return e!=="default"&&(s.name=e),T("slot",s,i&&i());let o=t[e];o&&o._c&&(o._d=!1),W();const r=o&&Qv(o(s)),a=lt(ft,{key:s.key||r&&r.key||`_${e}`},r||(i?i():[]),r&&t._===1?64:-2);return!n&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),o&&o._c&&(o._d=!0),a}function Qv(t){return t.some(e=>yl(e)?!(e.type===fn||e.type===ft&&!Qv(e.children)):!0)?t:null}const qd=t=>t?lb(t)?Cc(t)||t.proxy:qd(t.parent):null,kr=Rt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>qd(t.parent),$root:t=>qd(t.root),$emit:t=>t.emit,$options:t=>vh(t),$forceUpdate:t=>t.f||(t.f=()=>mh(t.update)),$nextTick:t=>t.n||(t.n=ph.bind(t.proxy)),$watch:t=>oC.bind(t)}),fd=(t,e)=>t!==Je&&!t.__isScriptSetup&&De(t,e),vC={get({_:t},e){const{ctx:s,setupState:i,data:n,props:o,accessCache:r,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const b=r[e];if(b!==void 0)switch(b){case 1:return i[e];case 2:return n[e];case 4:return s[e];case 3:return o[e]}else{if(fd(i,e))return r[e]=1,i[e];if(n!==Je&&De(n,e))return r[e]=2,n[e];if((c=t.propsOptions[0])&&De(c,e))return r[e]=3,o[e];if(s!==Je&&De(s,e))return r[e]=4,s[e];Gd&&(r[e]=0)}}const d=kr[e];let u,f;if(d)return e==="$attrs"&&ns(t,"get",e),d(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(s!==Je&&De(s,e))return r[e]=4,s[e];if(f=l.config.globalProperties,De(f,e))return f[e]},set({_:t},e,s){const{data:i,setupState:n,ctx:o}=t;return fd(n,e)?(n[e]=s,!0):i!==Je&&De(i,e)?(i[e]=s,!0):De(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=s,!0)},has({_:{data:t,setupState:e,accessCache:s,ctx:i,appContext:n,propsOptions:o}},r){let a;return!!s[r]||t!==Je&&De(t,r)||fd(e,r)||(a=o[0])&&De(a,r)||De(i,r)||De(kr,r)||De(n.config.globalProperties,r)},defineProperty(t,e,s){return s.get!=null?t._.accessCache[e]=0:De(s,"value")&&this.set(t,e,s.value,null),Reflect.defineProperty(t,e,s)}};function dp(t){return he(t)?t.reduce((e,s)=>(e[s]=null,e),{}):t}let Gd=!0;function bC(t){const e=vh(t),s=t.proxy,i=t.ctx;Gd=!1,e.beforeCreate&&up(e.beforeCreate,t,"bc");const{data:n,computed:o,methods:r,watch:a,provide:l,inject:c,created:d,beforeMount:u,mounted:f,beforeUpdate:b,updated:w,activated:x,deactivated:_,beforeDestroy:R,beforeUnmount:H,destroyed:ie,unmounted:U,render:ge,renderTracked:Fe,renderTriggered:ct,errorCaptured:Se,serverPrefetch:Ie,expose:pt,inheritAttrs:Mt,components:cs,directives:_s,filters:yn}=e;if(c&&yC(c,i,null),r)for(const Ye in r){const Le=r[Ye];ye(Le)&&(i[Ye]=Le.bind(s))}if(n){const Ye=n.call(s,s);at(Ye)&&(t.data=Jn(Ye))}if(Gd=!0,o)for(const Ye in o){const Le=o[Ye],mi=ye(Le)?Le.bind(s,s):ye(Le.get)?Le.get.bind(s,s):Ys,ji=!ye(Le)&&ye(Le.set)?Le.set.bind(s):Ys,ti=Ge({get:mi,set:ji});Object.defineProperty(i,Ye,{enumerable:!0,configurable:!0,get:()=>ti.value,set:es=>ti.value=es})}if(a)for(const Ye in a)Jv(a[Ye],i,s,Ye);if(l){const Ye=ye(l)?l.call(s):l;Reflect.ownKeys(Ye).forEach(Le=>{Co(Le,Ye[Le])})}d&&up(d,t,"c");function Pe(Ye,Le){he(Le)?Le.forEach(mi=>Ye(mi.bind(s))):Le&&Ye(Le.bind(s))}if(Pe(Zv,u),Pe(zt,f),Pe(cC,b),Pe(dC,w),Pe(rC,x),Pe(aC,_),Pe(pC,Se),Pe(fC,Fe),Pe(hC,ct),Pe(_c,H),Pe(ws,U),Pe(uC,Ie),he(pt))if(pt.length){const Ye=t.exposed||(t.exposed={});pt.forEach(Le=>{Object.defineProperty(Ye,Le,{get:()=>s[Le],set:mi=>s[Le]=mi})})}else t.exposed||(t.exposed={});ge&&t.render===Ys&&(t.render=ge),Mt!=null&&(t.inheritAttrs=Mt),cs&&(t.components=cs),_s&&(t.directives=_s)}function yC(t,e,s=Ys){he(t)&&(t=Zd(t));for(const i in t){const n=t[i];let o;at(n)?"default"in n?o=ps(n.from||i,n.default,!0):o=ps(n.from||i):o=ps(n),bt(o)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):e[i]=o}}function up(t,e,s){Ws(he(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,s)}function Jv(t,e,s,i){const n=i.includes(".")?Wv(s,i):()=>s[i];if(Ct(t)){const o=e[t];ye(o)&&ki(n,o)}else if(ye(t))ki(n,t.bind(s));else if(at(t))if(he(t))t.forEach(o=>Jv(o,e,s,i));else{const o=ye(t.handler)?t.handler.bind(s):e[t.handler];ye(o)&&ki(n,o,t)}}function vh(t){const e=t.type,{mixins:s,extends:i}=e,{mixins:n,optionsCache:o,config:{optionMergeStrategies:r}}=t.appContext,a=o.get(e);let l;return a?l=a:!n.length&&!s&&!i?l=e:(l={},n.length&&n.forEach(c=>bl(l,c,r,!0)),bl(l,e,r)),at(e)&&o.set(e,l),l}function bl(t,e,s,i=!1){const{mixins:n,extends:o}=e;o&&bl(t,o,s,!0),n&&n.forEach(r=>bl(t,r,s,!0));for(const r in e)if(!(i&&r==="expose")){const a=xC[r]||s&&s[r];t[r]=a?a(t[r],e[r]):e[r]}return t}const xC={data:hp,props:fp,emits:fp,methods:vr,computed:vr,beforeCreate:Wt,created:Wt,beforeMount:Wt,mounted:Wt,beforeUpdate:Wt,updated:Wt,beforeDestroy:Wt,beforeUnmount:Wt,destroyed:Wt,unmounted:Wt,activated:Wt,deactivated:Wt,errorCaptured:Wt,serverPrefetch:Wt,components:vr,directives:vr,watch:$C,provide:hp,inject:wC};function hp(t,e){return e?t?function(){return Rt(ye(t)?t.call(this,this):t,ye(e)?e.call(this,this):e)}:e:t}function wC(t,e){return vr(Zd(t),Zd(e))}function Zd(t){if(he(t)){const e={};for(let s=0;s<t.length;s++)e[t[s]]=t[s];return e}return t}function Wt(t,e){return t?[...new Set([].concat(t,e))]:e}function vr(t,e){return t?Rt(Object.create(null),t,e):e}function fp(t,e){return t?he(t)&&he(e)?[...new Set([...t,...e])]:Rt(Object.create(null),dp(t),dp(e??{})):e}function $C(t,e){if(!t)return e;if(!e)return t;const s=Rt(Object.create(null),t);for(const i in e)s[i]=Wt(t[i],e[i]);return s}function Kv(){return{app:null,config:{isNativeTag:Qk,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _C=0;function kC(t,e){return function(i,n=null){ye(i)||(i=Rt({},i)),n!=null&&!at(n)&&(n=null);const o=Kv(),r=new Set;let a=!1;const l=o.app={_uid:_C++,_component:i,_props:n,_container:null,_context:o,_instance:null,version:XC,get config(){return o.config},set config(c){},use(c,...d){return r.has(c)||(c&&ye(c.install)?(r.add(c),c.install(l,...d)):ye(c)&&(r.add(c),c(l,...d))),l},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),l},component(c,d){return d?(o.components[c]=d,l):o.components[c]},directive(c,d){return d?(o.directives[c]=d,l):o.directives[c]},mount(c,d,u){if(!a){const f=T(i,n);return f.appContext=o,d&&e?e(f,c):t(f,c,u),a=!0,l._container=c,c.__vue_app__=l,Cc(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,d){return o.provides[c]=d,l},runWithContext(c){qr=l;try{return c()}finally{qr=null}}};return l}}let qr=null;function Co(t,e){if(Dt){let s=Dt.provides;const i=Dt.parent&&Dt.parent.provides;i===s&&(s=Dt.provides=Object.create(i)),s[t]=e}}function ps(t,e,s=!1){const i=Dt||Et;if(i||qr){const n=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:qr._context.provides;if(n&&t in n)return n[t];if(arguments.length>1)return s&&ye(e)?e.call(i&&i.proxy):e}}function SC(){return!!(Dt||Et||qr)}function CC(t,e,s,i=!1){const n={},o={};pl(o,Sc,1),t.propsDefaults=Object.create(null),eb(t,e,n,o);for(const r in t.propsOptions[0])r in n||(n[r]=void 0);s?t.props=i?n:Ov(n):t.type.props?t.props=n:t.props=o,t.attrs=o}function IC(t,e,s,i){const{props:n,attrs:o,vnode:{patchFlag:r}}=t,a=Ee(n),[l]=t.propsOptions;let c=!1;if((i||r>0)&&!(r&16)){if(r&8){const d=t.vnode.dynamicProps;for(let u=0;u<d.length;u++){let f=d[u];if(bc(t.emitsOptions,f))continue;const b=e[f];if(l)if(De(o,f))b!==o[f]&&(o[f]=b,c=!0);else{const w=li(f);n[w]=Xd(l,a,w,b,t,!1)}else b!==o[f]&&(o[f]=b,c=!0)}}}else{eb(t,e,n,o)&&(c=!0);let d;for(const u in a)(!e||!De(e,u)&&((d=Qn(u))===u||!De(e,d)))&&(l?s&&(s[u]!==void 0||s[d]!==void 0)&&(n[u]=Xd(l,a,u,void 0,t,!0)):delete n[u]);if(o!==a)for(const u in o)(!e||!De(e,u))&&(delete o[u],c=!0)}c&&Ti(t,"set","$attrs")}function eb(t,e,s,i){const[n,o]=t.propsOptions;let r=!1,a;if(e)for(let l in e){if(Ja(l))continue;const c=e[l];let d;n&&De(n,d=li(l))?!o||!o.includes(d)?s[d]=c:(a||(a={}))[d]=c:bc(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,r=!0)}if(o){const l=Ee(s),c=a||Je;for(let d=0;d<o.length;d++){const u=o[d];s[u]=Xd(n,l,u,c[u],t,!De(c,u))}}return r}function Xd(t,e,s,i,n,o){const r=t[s];if(r!=null){const a=De(r,"default");if(a&&i===void 0){const l=r.default;if(r.type!==Function&&!r.skipFactory&&ye(l)){const{propsDefaults:c}=n;s in c?i=c[s]:(No(n),i=c[s]=l.call(null,e),Mn())}else i=l}r[0]&&(o&&!a?i=!1:r[1]&&(i===""||i===Qn(s))&&(i=!0))}return i}function tb(t,e,s=!1){const i=e.propsCache,n=i.get(t);if(n)return n;const o=t.props,r={},a=[];let l=!1;if(!ye(t)){const d=u=>{l=!0;const[f,b]=tb(u,e,!0);Rt(r,f),b&&a.push(...b)};!s&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!o&&!l)return at(t)&&i.set(t,_o),_o;if(he(o))for(let d=0;d<o.length;d++){const u=li(o[d]);pp(u)&&(r[u]=Je)}else if(o)for(const d in o){const u=li(d);if(pp(u)){const f=o[d],b=r[u]=he(f)||ye(f)?{type:f}:Rt({},f);if(b){const w=vp(Boolean,b.type),x=vp(String,b.type);b[0]=w>-1,b[1]=x<0||w<x,(w>-1||De(b,"default"))&&a.push(u)}}}const c=[r,a];return at(t)&&i.set(t,c),c}function pp(t){return t[0]!=="$"}function mp(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function gp(t,e){return mp(t)===mp(e)}function vp(t,e){return he(e)?e.findIndex(s=>gp(s,t)):ye(e)&&gp(e,t)?0:-1}const sb=t=>t[0]==="_"||t==="$stable",bh=t=>he(t)?t.map(oi):[oi(t)],TC=(t,e,s)=>{if(e._n)return e;const i=A((...n)=>bh(e(...n)),s);return i._c=!1,i},ib=(t,e,s)=>{const i=t._ctx;for(const n in t){if(sb(n))continue;const o=t[n];if(ye(o))e[n]=TC(n,o,i);else if(o!=null){const r=bh(o);e[n]=()=>r}}},nb=(t,e)=>{const s=bh(e);t.slots.default=()=>s},FC=(t,e)=>{if(t.vnode.shapeFlag&32){const s=e._;s?(t.slots=Ee(e),pl(e,"_",s)):ib(e,t.slots={})}else t.slots={},e&&nb(t,e);pl(t.slots,Sc,1)},DC=(t,e,s)=>{const{vnode:i,slots:n}=t;let o=!0,r=Je;if(i.shapeFlag&32){const a=e._;a?s&&a===1?o=!1:(Rt(n,e),!s&&a===1&&delete n._):(o=!e.$stable,ib(e,n)),r=e}else e&&(nb(t,e),r={default:1});if(o)for(const a in n)!sb(a)&&!(a in r)&&delete n[a]};function Qd(t,e,s,i,n=!1){if(he(t)){t.forEach((f,b)=>Qd(f,e&&(he(e)?e[b]:e),s,i,n));return}if(_r(i)&&!n)return;const o=i.shapeFlag&4?Cc(i.component)||i.component.proxy:i.el,r=n?null:o,{i:a,r:l}=t,c=e&&e.r,d=a.refs===Je?a.refs={}:a.refs,u=a.setupState;if(c!=null&&c!==l&&(Ct(c)?(d[c]=null,De(u,c)&&(u[c]=null)):bt(c)&&(c.value=null)),ye(l))nn(l,a,12,[r,d]);else{const f=Ct(l),b=bt(l);if(f||b){const w=()=>{if(t.f){const x=f?De(u,l)?u[l]:d[l]:l.value;n?he(x)&&ih(x,o):he(x)?x.includes(o)||x.push(o):f?(d[l]=[o],De(u,l)&&(u[l]=d[l])):(l.value=[o],t.k&&(d[t.k]=l.value))}else f?(d[l]=r,De(u,l)&&(u[l]=r)):b&&(l.value=r,t.k&&(d[t.k]=r))};r?(w.id=-1,ss(w,s)):w()}}}const ss=nC;function RC(t){return EC(t)}function EC(t,e){const s=Bd();s.__VUE__=!0;const{insert:i,remove:n,patchProp:o,createElement:r,createText:a,createComment:l,setText:c,setElementText:d,parentNode:u,nextSibling:f,setScopeId:b=Ys,insertStaticContent:w}=t,x=(m,v,y,S=null,I=null,E=null,q=!1,L=null,N=!!v.dynamicChildren)=>{if(m===v)return;m&&!dr(m,v)&&(S=C(m),es(m,I,E,!0),m=null),v.patchFlag===-2&&(N=!1,v.dynamicChildren=null);const{type:O,ref:ne,shapeFlag:K}=v;switch(O){case kc:_(m,v,y,S);break;case fn:R(m,v,y,S);break;case pd:m==null&&H(v,y,S,q);break;case ft:cs(m,v,y,S,I,E,q,L,N);break;default:K&1?ge(m,v,y,S,I,E,q,L,N):K&6?_s(m,v,y,S,I,E,q,L,N):(K&64||K&128)&&O.process(m,v,y,S,I,E,q,L,N,B)}ne!=null&&I&&Qd(ne,m&&m.ref,E,v||m,!v)},_=(m,v,y,S)=>{if(m==null)i(v.el=a(v.children),y,S);else{const I=v.el=m.el;v.children!==m.children&&c(I,v.children)}},R=(m,v,y,S)=>{m==null?i(v.el=l(v.children||""),y,S):v.el=m.el},H=(m,v,y,S)=>{[m.el,m.anchor]=w(m.children,v,y,S,m.el,m.anchor)},ie=({el:m,anchor:v},y,S)=>{let I;for(;m&&m!==v;)I=f(m),i(m,y,S),m=I;i(v,y,S)},U=({el:m,anchor:v})=>{let y;for(;m&&m!==v;)y=f(m),n(m),m=y;n(v)},ge=(m,v,y,S,I,E,q,L,N)=>{q=q||v.type==="svg",m==null?Fe(v,y,S,I,E,q,L,N):Ie(m,v,I,E,q,L,N)},Fe=(m,v,y,S,I,E,q,L)=>{let N,O;const{type:ne,props:K,shapeFlag:oe,transition:me,dirs:Ce}=m;if(N=m.el=r(m.type,E,K&&K.is,K),oe&8?d(N,m.children):oe&16&&Se(m.children,N,null,S,I,E&&ne!=="foreignObject",q,L),Ce&&_n(m,null,S,"created"),ct(N,m,m.scopeId,q,S),K){for(const je in K)je!=="value"&&!Ja(je)&&o(N,je,null,K[je],E,m.children,S,I,Lt);"value"in K&&o(N,"value",null,K.value),(O=K.onVnodeBeforeMount)&&ii(O,S,m)}Ce&&_n(m,null,S,"beforeMount");const qe=(!I||I&&!I.pendingBranch)&&me&&!me.persisted;qe&&me.beforeEnter(N),i(N,v,y),((O=K&&K.onVnodeMounted)||qe||Ce)&&ss(()=>{O&&ii(O,S,m),qe&&me.enter(N),Ce&&_n(m,null,S,"mounted")},I)},ct=(m,v,y,S,I)=>{if(y&&b(m,y),S)for(let E=0;E<S.length;E++)b(m,S[E]);if(I){let E=I.subTree;if(v===E){const q=I.vnode;ct(m,q,q.scopeId,q.slotScopeIds,I.parent)}}},Se=(m,v,y,S,I,E,q,L,N=0)=>{for(let O=N;O<m.length;O++){const ne=m[O]=L?Zi(m[O]):oi(m[O]);x(null,ne,v,y,S,I,E,q,L)}},Ie=(m,v,y,S,I,E,q)=>{const L=v.el=m.el;let{patchFlag:N,dynamicChildren:O,dirs:ne}=v;N|=m.patchFlag&16;const K=m.props||Je,oe=v.props||Je;let me;y&&kn(y,!1),(me=oe.onVnodeBeforeUpdate)&&ii(me,y,v,m),ne&&_n(v,m,y,"beforeUpdate"),y&&kn(y,!0);const Ce=I&&v.type!=="foreignObject";if(O?pt(m.dynamicChildren,O,L,y,S,Ce,E):q||Le(m,v,L,null,y,S,Ce,E,!1),N>0){if(N&16)Mt(L,v,K,oe,y,S,I);else if(N&2&&K.class!==oe.class&&o(L,"class",null,oe.class,I),N&4&&o(L,"style",K.style,oe.style,I),N&8){const qe=v.dynamicProps;for(let je=0;je<qe.length;je++){const wt=qe[je],Vs=K[wt],no=oe[wt];(no!==Vs||wt==="value")&&o(L,wt,Vs,no,I,m.children,y,S,Lt)}}N&1&&m.children!==v.children&&d(L,v.children)}else!q&&O==null&&Mt(L,v,K,oe,y,S,I);((me=oe.onVnodeUpdated)||ne)&&ss(()=>{me&&ii(me,y,v,m),ne&&_n(v,m,y,"updated")},S)},pt=(m,v,y,S,I,E,q)=>{for(let L=0;L<v.length;L++){const N=m[L],O=v[L],ne=N.el&&(N.type===ft||!dr(N,O)||N.shapeFlag&70)?u(N.el):y;x(N,O,ne,null,S,I,E,q,!0)}},Mt=(m,v,y,S,I,E,q)=>{if(y!==S){if(y!==Je)for(const L in y)!Ja(L)&&!(L in S)&&o(m,L,y[L],null,q,v.children,I,E,Lt);for(const L in S){if(Ja(L))continue;const N=S[L],O=y[L];N!==O&&L!=="value"&&o(m,L,O,N,q,v.children,I,E,Lt)}"value"in S&&o(m,"value",y.value,S.value)}},cs=(m,v,y,S,I,E,q,L,N)=>{const O=v.el=m?m.el:a(""),ne=v.anchor=m?m.anchor:a("");let{patchFlag:K,dynamicChildren:oe,slotScopeIds:me}=v;me&&(L=L?L.concat(me):me),m==null?(i(O,y,S),i(ne,y,S),Se(v.children,y,ne,I,E,q,L,N)):K>0&&K&64&&oe&&m.dynamicChildren?(pt(m.dynamicChildren,oe,y,I,E,q,L),(v.key!=null||I&&v===I.subTree)&&ob(m,v,!0)):Le(m,v,y,ne,I,E,q,L,N)},_s=(m,v,y,S,I,E,q,L,N)=>{v.slotScopeIds=L,m==null?v.shapeFlag&512?I.ctx.activate(v,y,S,q,N):yn(v,y,S,I,E,q,N):ks(m,v,N)},yn=(m,v,y,S,I,E,q)=>{const L=m.component=zC(m,S,I);if(qv(m)&&(L.ctx.renderer=B),BC(L),L.asyncDep){if(I&&I.registerDep(L,Pe),!m.el){const N=L.subTree=T(fn);R(null,N,v,y)}return}Pe(L,m,v,y,I,E,q)},ks=(m,v,y)=>{const S=v.component=m.component;if(tC(m,v,y))if(S.asyncDep&&!S.asyncResolved){Ye(S,v,y);return}else S.next=v,ZS(S.update),S.update();else v.el=m.el,S.vnode=v},Pe=(m,v,y,S,I,E,q)=>{const L=()=>{if(m.isMounted){let{next:ne,bu:K,u:oe,parent:me,vnode:Ce}=m,qe=ne,je;kn(m,!1),ne?(ne.el=Ce.el,Ye(m,ne,q)):ne=Ce,K&&ud(K),(je=ne.props&&ne.props.onVnodeBeforeUpdate)&&ii(je,me,ne,Ce),kn(m,!0);const wt=hd(m),Vs=m.subTree;m.subTree=wt,x(Vs,wt,u(Vs.el),C(Vs),m,I,E),ne.el=wt.el,qe===null&&sC(m,wt.el),oe&&ss(oe,I),(je=ne.props&&ne.props.onVnodeUpdated)&&ss(()=>ii(je,me,ne,Ce),I)}else{let ne;const{el:K,props:oe}=v,{bm:me,m:Ce,parent:qe}=m,je=_r(v);if(kn(m,!1),me&&ud(me),!je&&(ne=oe&&oe.onVnodeBeforeMount)&&ii(ne,qe,v),kn(m,!0),K&&Ve){const wt=()=>{m.subTree=hd(m),Ve(K,m.subTree,m,I,null)};je?v.type.__asyncLoader().then(()=>!m.isUnmounted&&wt()):wt()}else{const wt=m.subTree=hd(m);x(null,wt,y,S,m,I,E),v.el=wt.el}if(Ce&&ss(Ce,I),!je&&(ne=oe&&oe.onVnodeMounted)){const wt=v;ss(()=>ii(ne,qe,wt),I)}(v.shapeFlag&256||qe&&_r(qe.vnode)&&qe.vnode.shapeFlag&256)&&m.a&&ss(m.a,I),m.isMounted=!0,v=y=S=null}},N=m.effect=new ah(L,()=>mh(O),m.scope),O=m.update=()=>N.run();O.id=m.uid,kn(m,!0),O()},Ye=(m,v,y)=>{v.component=m;const S=m.vnode.props;m.vnode=v,m.next=null,IC(m,v.props,S,y),DC(m,v.children,y),Qo(),ap(),Jo()},Le=(m,v,y,S,I,E,q,L,N=!1)=>{const O=m&&m.children,ne=m?m.shapeFlag:0,K=v.children,{patchFlag:oe,shapeFlag:me}=v;if(oe>0){if(oe&128){ji(O,K,y,S,I,E,q,L,N);return}else if(oe&256){mi(O,K,y,S,I,E,q,L,N);return}}me&8?(ne&16&&Lt(O,I,E),K!==O&&d(y,K)):ne&16?me&16?ji(O,K,y,S,I,E,q,L,N):Lt(O,I,E,!0):(ne&8&&d(y,""),me&16&&Se(K,y,S,I,E,q,L,N))},mi=(m,v,y,S,I,E,q,L,N)=>{m=m||_o,v=v||_o;const O=m.length,ne=v.length,K=Math.min(O,ne);let oe;for(oe=0;oe<K;oe++){const me=v[oe]=N?Zi(v[oe]):oi(v[oe]);x(m[oe],me,y,null,I,E,q,L,N)}O>ne?Lt(m,I,E,!0,!1,K):Se(v,y,S,I,E,q,L,N,K)},ji=(m,v,y,S,I,E,q,L,N)=>{let O=0;const ne=v.length;let K=m.length-1,oe=ne-1;for(;O<=K&&O<=oe;){const me=m[O],Ce=v[O]=N?Zi(v[O]):oi(v[O]);if(dr(me,Ce))x(me,Ce,y,null,I,E,q,L,N);else break;O++}for(;O<=K&&O<=oe;){const me=m[K],Ce=v[oe]=N?Zi(v[oe]):oi(v[oe]);if(dr(me,Ce))x(me,Ce,y,null,I,E,q,L,N);else break;K--,oe--}if(O>K){if(O<=oe){const me=oe+1,Ce=me<ne?v[me].el:S;for(;O<=oe;)x(null,v[O]=N?Zi(v[O]):oi(v[O]),y,Ce,I,E,q,L,N),O++}}else if(O>oe)for(;O<=K;)es(m[O],I,E,!0),O++;else{const me=O,Ce=O,qe=new Map;for(O=Ce;O<=oe;O++){const ds=v[O]=N?Zi(v[O]):oi(v[O]);ds.key!=null&&qe.set(ds.key,O)}let je,wt=0;const Vs=oe-Ce+1;let no=!1,Qh=0;const nr=new Array(Vs);for(O=0;O<Vs;O++)nr[O]=0;for(O=me;O<=K;O++){const ds=m[O];if(wt>=Vs){es(ds,I,E,!0);continue}let si;if(ds.key!=null)si=qe.get(ds.key);else for(je=Ce;je<=oe;je++)if(nr[je-Ce]===0&&dr(ds,v[je])){si=je;break}si===void 0?es(ds,I,E,!0):(nr[si-Ce]=O+1,si>=Qh?Qh=si:no=!0,x(ds,v[si],y,null,I,E,q,L,N),wt++)}const Jh=no?OC(nr):_o;for(je=Jh.length-1,O=Vs-1;O>=0;O--){const ds=Ce+O,si=v[ds],Kh=ds+1<ne?v[ds+1].el:S;nr[O]===0?x(null,si,y,Kh,I,E,q,L,N):no&&(je<0||O!==Jh[je]?ti(si,y,Kh,2):je--)}}},ti=(m,v,y,S,I=null)=>{const{el:E,type:q,transition:L,children:N,shapeFlag:O}=m;if(O&6){ti(m.component.subTree,v,y,S);return}if(O&128){m.suspense.move(v,y,S);return}if(O&64){q.move(m,v,y,B);return}if(q===ft){i(E,v,y);for(let K=0;K<N.length;K++)ti(N[K],v,y,S);i(m.anchor,v,y);return}if(q===pd){ie(m,v,y);return}if(S!==2&&O&1&&L)if(S===0)L.beforeEnter(E),i(E,v,y),ss(()=>L.enter(E),I);else{const{leave:K,delayLeave:oe,afterLeave:me}=L,Ce=()=>i(E,v,y),qe=()=>{K(E,()=>{Ce(),me&&me()})};oe?oe(E,Ce,qe):qe()}else i(E,v,y)},es=(m,v,y,S=!1,I=!1)=>{const{type:E,props:q,ref:L,children:N,dynamicChildren:O,shapeFlag:ne,patchFlag:K,dirs:oe}=m;if(L!=null&&Qd(L,null,y,m,!0),ne&256){v.ctx.deactivate(m);return}const me=ne&1&&oe,Ce=!_r(m);let qe;if(Ce&&(qe=q&&q.onVnodeBeforeUnmount)&&ii(qe,v,m),ne&6)wa(m.component,y,S);else{if(ne&128){m.suspense.unmount(y,S);return}me&&_n(m,null,v,"beforeUnmount"),ne&64?m.type.remove(m,v,y,I,B,S):O&&(E!==ft||K>0&&K&64)?Lt(O,v,y,!1,!0):(E===ft&&K&384||!I&&ne&16)&&Lt(N,v,y),S&&so(m)}(Ce&&(qe=q&&q.onVnodeUnmounted)||me)&&ss(()=>{qe&&ii(qe,v,m),me&&_n(m,null,v,"unmounted")},y)},so=m=>{const{type:v,el:y,anchor:S,transition:I}=m;if(v===ft){io(y,S);return}if(v===pd){U(m);return}const E=()=>{n(y),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(m.shapeFlag&1&&I&&!I.persisted){const{leave:q,delayLeave:L}=I,N=()=>q(y,E);L?L(m.el,E,N):N()}else E()},io=(m,v)=>{let y;for(;m!==v;)y=f(m),n(m),m=y;n(v)},wa=(m,v,y)=>{const{bum:S,scope:I,update:E,subTree:q,um:L}=m;S&&ud(S),I.stop(),E&&(E.active=!1,es(q,m,v,y)),L&&ss(L,v),ss(()=>{m.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},Lt=(m,v,y,S=!1,I=!1,E=0)=>{for(let q=E;q<m.length;q++)es(m[q],v,y,S,I)},C=m=>m.shapeFlag&6?C(m.component.subTree):m.shapeFlag&128?m.suspense.next():f(m.anchor||m.el),X=(m,v,y)=>{m==null?v._vnode&&es(v._vnode,null,null,!0):x(v._vnode||null,m,v,null,null,null,y),ap(),Bv(),v._vnode=m},B={p:x,um:es,m:ti,r:so,mt:yn,mc:Se,pc:Le,pbc:pt,n:C,o:t};let te,Ve;return e&&([te,Ve]=e(B)),{render:X,hydrate:te,createApp:kC(X,te)}}function kn({effect:t,update:e},s){t.allowRecurse=e.allowRecurse=s}function ob(t,e,s=!1){const i=t.children,n=e.children;if(he(i)&&he(n))for(let o=0;o<i.length;o++){const r=i[o];let a=n[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=n[o]=Zi(n[o]),a.el=r.el),s||ob(r,a)),a.type===kc&&(a.el=r.el)}}function OC(t){const e=t.slice(),s=[0];let i,n,o,r,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(n=s[s.length-1],t[n]<c){e[i]=n,s.push(i);continue}for(o=0,r=s.length-1;o<r;)a=o+r>>1,t[s[a]]<c?o=a+1:r=a;c<t[s[o]]&&(o>0&&(e[i]=s[o-1]),s[o]=i)}}for(o=s.length,r=s[o-1];o-- >0;)s[o]=r,r=e[r];return s}const AC=t=>t.__isTeleport,ft=Symbol.for("v-fgt"),kc=Symbol.for("v-txt"),fn=Symbol.for("v-cmt"),pd=Symbol.for("v-stc"),Sr=[];let js=null;function W(t=!1){Sr.push(js=t?null:[])}function PC(){Sr.pop(),js=Sr[Sr.length-1]||null}let Gr=1;function bp(t){Gr+=t}function rb(t){return t.dynamicChildren=Gr>0?js||_o:null,PC(),Gr>0&&js&&js.push(t),t}function ue(t,e,s,i,n,o){return rb(F(t,e,s,i,n,o,!0))}function lt(t,e,s,i,n){return rb(T(t,e,s,i,n,!0))}function yl(t){return t?t.__v_isVNode===!0:!1}function dr(t,e){return t.type===e.type&&t.key===e.key}const Sc="__vInternal",ab=({key:t})=>t??null,Ka=({ref:t,ref_key:e,ref_for:s})=>(typeof t=="number"&&(t=""+t),t!=null?Ct(t)||bt(t)||ye(t)?{i:Et,r:t,k:e,f:!!s}:t:null);function F(t,e=null,s=null,i=0,n=null,o=t===ft?0:1,r=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ab(e),ref:e&&Ka(e),scopeId:yc,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:Et};return a?(yh(l,s),o&128&&t.normalize(l)):s&&(l.shapeFlag|=Ct(s)?8:16),Gr>0&&!r&&js&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&js.push(l),l}const T=MC;function MC(t,e=null,s=null,i=0,n=null,o=!1){if((!t||t===mC)&&(t=fn),yl(t)){const a=Bn(t,e,!0);return s&&yh(a,s),Gr>0&&!o&&js&&(a.shapeFlag&6?js[js.indexOf(t)]=a:js.push(a)),a.patchFlag|=-2,a}if(qC(t)&&(t=t.__vccOpts),e){e=LC(e);let{class:a,style:l}=e;a&&!Ct(a)&&(e.class=Ot(a)),at(l)&&(Pv(l)&&!he(l)&&(l=Rt({},l)),e.style=un(l))}const r=Ct(t)?1:iC(t)?128:AC(t)?64:at(t)?4:ye(t)?2:0;return F(t,e,s,i,n,r,o,!0)}function LC(t){return t?Pv(t)||Sc in t?Rt({},t):t:null}function Bn(t,e,s=!1){const{props:i,ref:n,patchFlag:o,children:r}=t,a=e?VC(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&ab(a),ref:e&&e.ref?s&&n?he(n)?n.concat(Ka(e)):[n,Ka(e)]:Ka(e):n,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:r,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ft?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Bn(t.ssContent),ssFallback:t.ssFallback&&Bn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function He(t=" ",e=0){return T(kc,null,t,e)}function Jd(t="",e=!1){return e?(W(),lt(fn,null,t)):T(fn,null,t)}function oi(t){return t==null||typeof t=="boolean"?T(fn):he(t)?T(ft,null,t.slice()):typeof t=="object"?Zi(t):T(kc,null,String(t))}function Zi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Bn(t)}function yh(t,e){let s=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(he(e))s=16;else if(typeof e=="object")if(i&65){const n=e.default;n&&(n._c&&(n._d=!1),yh(t,n()),n._c&&(n._d=!0));return}else{s=32;const n=e._;!n&&!(Sc in e)?e._ctx=Et:n===3&&Et&&(Et.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ye(e)?(e={default:e,_ctx:Et},s=32):(e=String(e),i&64?(s=16,e=[He(e)]):s=8);t.children=e,t.shapeFlag|=s}function VC(...t){const e={};for(let s=0;s<t.length;s++){const i=t[s];for(const n in i)if(n==="class")e.class!==i.class&&(e.class=Ot([e.class,i.class]));else if(n==="style")e.style=un([e.style,i.style]);else if(uc(n)){const o=e[n],r=i[n];r&&o!==r&&!(he(o)&&o.includes(r))&&(e[n]=o?[].concat(o,r):r)}else n!==""&&(e[n]=i[n])}return e}function ii(t,e,s,i=null){Ws(t,e,7,[s,i])}const HC=Kv();let NC=0;function zC(t,e,s){const i=t.type,n=(e?e.appContext:t.appContext)||HC,o={uid:NC++,vnode:t,type:i,parent:e,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,scope:new xv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(n.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:tb(i,n),emitsOptions:Uv(i,n),emit:null,emitted:null,propsDefaults:Je,inheritAttrs:i.inheritAttrs,ctx:Je,data:Je,props:Je,attrs:Je,slots:Je,refs:Je,setupState:Je,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=JS.bind(null,o),t.ce&&t.ce(o),o}let Dt=null,xh,ro,yp="__VUE_INSTANCE_SETTERS__";(ro=Bd()[yp])||(ro=Bd()[yp]=[]),ro.push(t=>Dt=t),xh=t=>{ro.length>1?ro.forEach(e=>e(t)):ro[0](t)};const No=t=>{xh(t),t.scope.on()},Mn=()=>{Dt&&Dt.scope.off(),xh(null)};function lb(t){return t.vnode.shapeFlag&4}let Zr=!1;function BC(t,e=!1){Zr=e;const{props:s,children:i}=t.vnode,n=lb(t);CC(t,s,n,e),FC(t,i);const o=n?jC(t,e):void 0;return Zr=!1,o}function jC(t,e){const s=t.type;t.accessCache=Object.create(null),t.proxy=gc(new Proxy(t.ctx,vC));const{setup:i}=s;if(i){const n=t.setupContext=i.length>1?YC(t):null;No(t),Qo();const o=nn(i,t,0,[t.props,n]);if(Jo(),Mn(),mv(o)){if(o.then(Mn,Mn),e)return o.then(r=>{xp(t,r,e)}).catch(r=>{vc(r,t,0)});t.asyncDep=o}else xp(t,o,e)}else cb(t,e)}function xp(t,e,s){ye(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:at(e)&&(t.setupState=Hv(e)),cb(t,s)}let wp;function cb(t,e,s){const i=t.type;if(!t.render){if(!e&&wp&&!i.render){const n=i.template||vh(t).template;if(n){const{isCustomElement:o,compilerOptions:r}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Rt(Rt({isCustomElement:o,delimiters:a},r),l);i.render=wp(n,c)}}t.render=i.render||Ys}No(t),Qo(),bC(t),Jo(),Mn()}function UC(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,s){return ns(t,"get","$attrs"),e[s]}}))}function YC(t){const e=s=>{t.exposed=s||{}};return{get attrs(){return UC(t)},slots:t.slots,emit:t.emit,expose:e}}function Cc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Hv(gc(t.exposed)),{get(e,s){if(s in e)return e[s];if(s in kr)return kr[s](t)},has(e,s){return s in e||s in kr}}))}function WC(t,e=!0){return ye(t)?t.displayName||t.name:t.name||e&&t.__name}function qC(t){return ye(t)&&"__vccOpts"in t}const Ge=(t,e)=>WS(t,e,Zr);function Fi(t,e,s){const i=arguments.length;return i===2?at(e)&&!he(e)?yl(e)?T(t,null,[e]):T(t,e):T(t,null,e):(i>3?s=Array.prototype.slice.call(arguments,2):i===3&&yl(s)&&(s=[s]),T(t,e,s))}const GC=Symbol.for("v-scx"),ZC=()=>ps(GC),XC="3.3.4",QC="http://www.w3.org/2000/svg",Fn=typeof document<"u"?document:null,$p=Fn&&Fn.createElement("template"),JC={insert:(t,e,s)=>{e.insertBefore(t,s||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,s,i)=>{const n=e?Fn.createElementNS(QC,t):Fn.createElement(t,s?{is:s}:void 0);return t==="select"&&i&&i.multiple!=null&&n.setAttribute("multiple",i.multiple),n},createText:t=>Fn.createTextNode(t),createComment:t=>Fn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Fn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,s,i,n,o){const r=s?s.previousSibling:e.lastChild;if(n&&(n===o||n.nextSibling))for(;e.insertBefore(n.cloneNode(!0),s),!(n===o||!(n=n.nextSibling)););else{$p.innerHTML=i?`<svg>${t}</svg>`:t;const a=$p.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,s)}return[r?r.nextSibling:e.firstChild,s?s.previousSibling:e.lastChild]}};function KC(t,e,s){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):s?t.setAttribute("class",e):t.className=e}function eI(t,e,s){const i=t.style,n=Ct(s);if(s&&!n){if(e&&!Ct(e))for(const o in e)s[o]==null&&Kd(i,o,"");for(const o in s)Kd(i,o,s[o])}else{const o=i.display;n?e!==s&&(i.cssText=s):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=o)}}const _p=/\s*!important$/;function Kd(t,e,s){if(he(s))s.forEach(i=>Kd(t,e,i));else if(s==null&&(s=""),e.startsWith("--"))t.setProperty(e,s);else{const i=tI(t,e);_p.test(s)?t.setProperty(Qn(i),s.replace(_p,""),"important"):t[i]=s}}const kp=["Webkit","Moz","ms"],md={};function tI(t,e){const s=md[e];if(s)return s;let i=li(e);if(i!=="filter"&&i in t)return md[e]=i;i=pc(i);for(let n=0;n<kp.length;n++){const o=kp[n]+i;if(o in t)return md[e]=o}return e}const Sp="http://www.w3.org/1999/xlink";function sI(t,e,s,i,n){if(i&&e.startsWith("xlink:"))s==null?t.removeAttributeNS(Sp,e.slice(6,e.length)):t.setAttributeNS(Sp,e,s);else{const o=cS(e);s==null||o&&!bv(s)?t.removeAttribute(e):t.setAttribute(e,o?"":s)}}function iI(t,e,s,i,n,o,r){if(e==="innerHTML"||e==="textContent"){i&&r(i,n,o),t[e]=s??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=s;const c=a==="OPTION"?t.getAttribute("value"):t.value,d=s??"";c!==d&&(t.value=d),s==null&&t.removeAttribute(e);return}let l=!1;if(s===""||s==null){const c=typeof t[e];c==="boolean"?s=bv(s):s==null&&c==="string"?(s="",l=!0):c==="number"&&(s=0,l=!0)}try{t[e]=s}catch{}l&&t.removeAttribute(e)}function nI(t,e,s,i){t.addEventListener(e,s,i)}function oI(t,e,s,i){t.removeEventListener(e,s,i)}function rI(t,e,s,i,n=null){const o=t._vei||(t._vei={}),r=o[e];if(i&&r)r.value=i;else{const[a,l]=aI(e);if(i){const c=o[e]=dI(i,n);nI(t,a,c,l)}else r&&(oI(t,a,r,l),o[e]=void 0)}}const Cp=/(?:Once|Passive|Capture)$/;function aI(t){let e;if(Cp.test(t)){e={};let i;for(;i=t.match(Cp);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Qn(t.slice(2)),e]}let gd=0;const lI=Promise.resolve(),cI=()=>gd||(lI.then(()=>gd=0),gd=Date.now());function dI(t,e){const s=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=s.attached)return;Ws(uI(i,s.value),e,5,[i])};return s.value=t,s.attached=cI(),s}function uI(t,e){if(he(e)){const s=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{s.call(t),t._stopped=!0},e.map(i=>n=>!n._stopped&&i&&i(n))}else return e}const Ip=/^on[a-z]/,hI=(t,e,s,i,n=!1,o,r,a,l)=>{e==="class"?KC(t,i,n):e==="style"?eI(t,s,i):uc(e)?sh(e)||rI(t,e,s,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):fI(t,e,i,n))?iI(t,e,i,o,r,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),sI(t,e,i,n))};function fI(t,e,s,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&Ip.test(e)&&ye(s)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ip.test(e)&&Ct(s)?!1:e in t}const pI={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},mI=(t,e)=>s=>{if(!("key"in s))return;const i=Qn(s.key);if(e.some(n=>n===i||pI[n]===i))return t(s)},er={beforeMount(t,{value:e},{transition:s}){t._vod=t.style.display==="none"?"":t.style.display,s&&e?s.beforeEnter(t):ur(t,e)},mounted(t,{value:e},{transition:s}){s&&e&&s.enter(t)},updated(t,{value:e,oldValue:s},{transition:i}){!e!=!s&&(i?e?(i.beforeEnter(t),ur(t,!0),i.enter(t)):i.leave(t,()=>{ur(t,!1)}):ur(t,e))},beforeUnmount(t,{value:e}){ur(t,e)}};function ur(t,e){t.style.display=e?t._vod:"none"}const gI=Rt({patchProp:hI},JC);let Tp;function vI(){return Tp||(Tp=RC(gI))}const Ic=(...t)=>{const e=vI().createApp(...t),{mount:s}=e;return e.mount=i=>{const n=bI(i);if(!n)return;const o=e._component;!ye(o)&&!o.render&&!o.template&&(o.template=n.innerHTML),n.innerHTML="";const r=s(n,!1,n instanceof SVGElement);return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),r},e};function bI(t){return Ct(t)?document.querySelector(t):t}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const uo=typeof window<"u";function yI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ze=Object.assign;function vd(t,e){const s={};for(const i in e){const n=e[i];s[i]=Zs(n)?n.map(t):t(n)}return s}const Cr=()=>{},Zs=Array.isArray,xI=/\/$/,wI=t=>t.replace(xI,"");function bd(t,e,s="/"){let i,n={},o="",r="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),o=e.slice(l+1,a>-1?a:e.length),n=t(o)),a>-1&&(i=i||e.slice(0,a),r=e.slice(a,e.length)),i=SI(i??e,s),{fullPath:i+(o&&"?")+o+r,path:i,query:n,hash:r}}function $I(t,e){const s=e.query?t(e.query):"";return e.path+(s&&"?")+s+(e.hash||"")}function Fp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function _I(t,e,s){const i=e.matched.length-1,n=s.matched.length-1;return i>-1&&i===n&&zo(e.matched[i],s.matched[n])&&db(e.params,s.params)&&t(e.query)===t(s.query)&&e.hash===s.hash}function zo(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function db(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const s in t)if(!kI(t[s],e[s]))return!1;return!0}function kI(t,e){return Zs(t)?Dp(t,e):Zs(e)?Dp(e,t):t===e}function Dp(t,e){return Zs(e)?t.length===e.length&&t.every((s,i)=>s===e[i]):t.length===1&&t[0]===e}function SI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const s=e.split("/"),i=t.split("/"),n=i[i.length-1];(n===".."||n===".")&&i.push("");let o=s.length-1,r,a;for(r=0;r<i.length;r++)if(a=i[r],a!==".")if(a==="..")o>1&&o--;else break;return s.slice(0,o).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var Xr;(function(t){t.pop="pop",t.push="push"})(Xr||(Xr={}));var Ir;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ir||(Ir={}));function CI(t){if(!t)if(uo){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),wI(t)}const II=/^[^#]+#/;function TI(t,e){return t.replace(II,"#")+e}function FI(t,e){const s=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-s.left-(e.left||0),top:i.top-s.top-(e.top||0)}}const Tc=()=>({left:window.pageXOffset,top:window.pageYOffset});function DI(t){let e;if("el"in t){const s=t.el,i=typeof s=="string"&&s.startsWith("#"),n=typeof s=="string"?i?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!n)return;e=FI(n,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Rp(t,e){return(history.state?history.state.position-e:-1)+t}const eu=new Map;function RI(t,e){eu.set(t,e)}function EI(t){const e=eu.get(t);return eu.delete(t),e}let OI=()=>location.protocol+"//"+location.host;function ub(t,e){const{pathname:s,search:i,hash:n}=e,o=t.indexOf("#");if(o>-1){let a=n.includes(t.slice(o))?t.slice(o).length:1,l=n.slice(a);return l[0]!=="/"&&(l="/"+l),Fp(l,"")}return Fp(s,t)+i+n}function AI(t,e,s,i){let n=[],o=[],r=null;const a=({state:f})=>{const b=ub(t,location),w=s.value,x=e.value;let _=0;if(f){if(s.value=b,e.value=f,r&&r===w){r=null;return}_=x?f.position-x.position:0}else i(b);n.forEach(R=>{R(s.value,w,{delta:_,type:Xr.pop,direction:_?_>0?Ir.forward:Ir.back:Ir.unknown})})};function l(){r=s.value}function c(f){n.push(f);const b=()=>{const w=n.indexOf(f);w>-1&&n.splice(w,1)};return o.push(b),b}function d(){const{history:f}=window;f.state&&f.replaceState(ze({},f.state,{scroll:Tc()}),"")}function u(){for(const f of o)f();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:c,destroy:u}}function Ep(t,e,s,i=!1,n=!1){return{back:t,current:e,forward:s,replaced:i,position:window.history.length,scroll:n?Tc():null}}function PI(t){const{history:e,location:s}=window,i={value:ub(t,s)},n={value:e.state};n.value||o(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(l,c,d){const u=t.indexOf("#"),f=u>-1?(s.host&&document.querySelector("base")?t:t.slice(u))+l:OI()+t+l;try{e[d?"replaceState":"pushState"](c,"",f),n.value=c}catch(b){console.error(b),s[d?"replace":"assign"](f)}}function r(l,c){const d=ze({},e.state,Ep(n.value.back,l,n.value.forward,!0),c,{position:n.value.position});o(l,d,!0),i.value=l}function a(l,c){const d=ze({},n.value,e.state,{forward:l,scroll:Tc()});o(d.current,d,!0);const u=ze({},Ep(i.value,l,null),{position:d.position+1},c);o(l,u,!1),i.value=l}return{location:i,state:n,push:a,replace:r}}function MI(t){t=CI(t);const e=PI(t),s=AI(t,e.state,e.location,e.replace);function i(o,r=!0){r||s.pauseListeners(),history.go(o)}const n=ze({location:"",base:t,go:i,createHref:TI.bind(null,t)},e,s);return Object.defineProperty(n,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(n,"state",{enumerable:!0,get:()=>e.state.value}),n}function LI(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),MI(t)}function VI(t){return typeof t=="string"||t&&typeof t=="object"}function hb(t){return typeof t=="string"||typeof t=="symbol"}const qi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},fb=Symbol("");var Op;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Op||(Op={}));function Bo(t,e){return ze(new Error,{type:t,[fb]:!0},e)}function gi(t,e){return t instanceof Error&&fb in t&&(e==null||!!(t.type&e))}const Ap="[^/]+?",HI={sensitive:!1,strict:!1,start:!0,end:!0},NI=/[.+*?^${}()[\]/\\]/g;function zI(t,e){const s=ze({},HI,e),i=[];let n=s.start?"^":"";const o=[];for(const c of t){const d=c.length?[]:[90];s.strict&&!c.length&&(n+="/");for(let u=0;u<c.length;u++){const f=c[u];let b=40+(s.sensitive?.25:0);if(f.type===0)u||(n+="/"),n+=f.value.replace(NI,"\\$&"),b+=40;else if(f.type===1){const{value:w,repeatable:x,optional:_,regexp:R}=f;o.push({name:w,repeatable:x,optional:_});const H=R||Ap;if(H!==Ap){b+=10;try{new RegExp(`(${H})`)}catch(U){throw new Error(`Invalid custom RegExp for param "${w}" (${H}): `+U.message)}}let ie=x?`((?:${H})(?:/(?:${H}))*)`:`(${H})`;u||(ie=_&&c.length<2?`(?:/${ie})`:"/"+ie),_&&(ie+="?"),n+=ie,b+=20,_&&(b+=-8),x&&(b+=-20),H===".*"&&(b+=-50)}d.push(b)}i.push(d)}if(s.strict&&s.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}s.strict||(n+="/?"),s.end?n+="$":s.strict&&(n+="(?:/|$)");const r=new RegExp(n,s.sensitive?"":"i");function a(c){const d=c.match(r),u={};if(!d)return null;for(let f=1;f<d.length;f++){const b=d[f]||"",w=o[f-1];u[w.name]=b&&w.repeatable?b.split("/"):b}return u}function l(c){let d="",u=!1;for(const f of t){(!u||!d.endsWith("/"))&&(d+="/"),u=!1;for(const b of f)if(b.type===0)d+=b.value;else if(b.type===1){const{value:w,repeatable:x,optional:_}=b,R=w in c?c[w]:"";if(Zs(R)&&!x)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const H=Zs(R)?R.join("/"):R;if(!H)if(_)f.length<2&&(d.endsWith("/")?d=d.slice(0,-1):u=!0);else throw new Error(`Missing required param "${w}"`);d+=H}}return d||"/"}return{re:r,score:i,keys:o,parse:a,stringify:l}}function BI(t,e){let s=0;for(;s<t.length&&s<e.length;){const i=e[s]-t[s];if(i)return i;s++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function jI(t,e){let s=0;const i=t.score,n=e.score;for(;s<i.length&&s<n.length;){const o=BI(i[s],n[s]);if(o)return o;s++}if(Math.abs(n.length-i.length)===1){if(Pp(i))return 1;if(Pp(n))return-1}return n.length-i.length}function Pp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const UI={type:0,value:""},YI=/[a-zA-Z0-9_]/;function WI(t){if(!t)return[[]];if(t==="/")return[[UI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(b){throw new Error(`ERR (${s})/"${c}": ${b}`)}let s=0,i=s;const n=[];let o;function r(){o&&n.push(o),o=[]}let a=0,l,c="",d="";function u(){c&&(s===0?o.push({type:0,value:c}):s===1||s===2||s===3?(o.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:c,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&s!==2){i=s,s=4;continue}switch(s){case 0:l==="/"?(c&&u(),r()):l===":"?(u(),s=1):f();break;case 4:f(),s=i;break;case 1:l==="("?s=2:YI.test(l)?f():(u(),s=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:s=3:d+=l;break;case 3:u(),s=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,d="";break;default:e("Unknown state");break}}return s===2&&e(`Unfinished custom RegExp for param "${c}"`),u(),r(),n}function qI(t,e,s){const i=zI(WI(t.path),s),n=ze(i,{record:t,parent:e,children:[],alias:[]});return e&&!n.record.aliasOf==!e.record.aliasOf&&e.children.push(n),n}function GI(t,e){const s=[],i=new Map;e=Vp({strict:!1,end:!0,sensitive:!1},e);function n(d){return i.get(d)}function o(d,u,f){const b=!f,w=ZI(d);w.aliasOf=f&&f.record;const x=Vp(e,d),_=[w];if("alias"in d){const ie=typeof d.alias=="string"?[d.alias]:d.alias;for(const U of ie)_.push(ze({},w,{components:f?f.record.components:w.components,path:U,aliasOf:f?f.record:w}))}let R,H;for(const ie of _){const{path:U}=ie;if(u&&U[0]!=="/"){const ge=u.record.path,Fe=ge[ge.length-1]==="/"?"":"/";ie.path=u.record.path+(U&&Fe+U)}if(R=qI(ie,u,x),f?f.alias.push(R):(H=H||R,H!==R&&H.alias.push(R),b&&d.name&&!Lp(R)&&r(d.name)),w.children){const ge=w.children;for(let Fe=0;Fe<ge.length;Fe++)o(ge[Fe],R,f&&f.children[Fe])}f=f||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&l(R)}return H?()=>{r(H)}:Cr}function r(d){if(hb(d)){const u=i.get(d);u&&(i.delete(d),s.splice(s.indexOf(u),1),u.children.forEach(r),u.alias.forEach(r))}else{const u=s.indexOf(d);u>-1&&(s.splice(u,1),d.record.name&&i.delete(d.record.name),d.children.forEach(r),d.alias.forEach(r))}}function a(){return s}function l(d){let u=0;for(;u<s.length&&jI(d,s[u])>=0&&(d.record.path!==s[u].record.path||!pb(d,s[u]));)u++;s.splice(u,0,d),d.record.name&&!Lp(d)&&i.set(d.record.name,d)}function c(d,u){let f,b={},w,x;if("name"in d&&d.name){if(f=i.get(d.name),!f)throw Bo(1,{location:d});x=f.record.name,b=ze(Mp(u.params,f.keys.filter(H=>!H.optional).map(H=>H.name)),d.params&&Mp(d.params,f.keys.map(H=>H.name))),w=f.stringify(b)}else if("path"in d)w=d.path,f=s.find(H=>H.re.test(w)),f&&(b=f.parse(w),x=f.record.name);else{if(f=u.name?i.get(u.name):s.find(H=>H.re.test(u.path)),!f)throw Bo(1,{location:d,currentLocation:u});x=f.record.name,b=ze({},u.params,d.params),w=f.stringify(b)}const _=[];let R=f;for(;R;)_.unshift(R.record),R=R.parent;return{name:x,path:w,params:b,matched:_,meta:QI(_)}}return t.forEach(d=>o(d)),{addRoute:o,resolve:c,removeRoute:r,getRoutes:a,getRecordMatcher:n}}function Mp(t,e){const s={};for(const i of e)i in t&&(s[i]=t[i]);return s}function ZI(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:XI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function XI(t){const e={},s=t.props||!1;if("component"in t)e.default=s;else for(const i in t.components)e[i]=typeof s=="object"?s[i]:s;return e}function Lp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function QI(t){return t.reduce((e,s)=>ze(e,s.meta),{})}function Vp(t,e){const s={};for(const i in t)s[i]=i in e?e[i]:t[i];return s}function pb(t,e){return e.children.some(s=>s===t||pb(t,s))}const mb=/#/g,JI=/&/g,KI=/\//g,eT=/=/g,tT=/\?/g,gb=/\+/g,sT=/%5B/g,iT=/%5D/g,vb=/%5E/g,nT=/%60/g,bb=/%7B/g,oT=/%7C/g,yb=/%7D/g,rT=/%20/g;function wh(t){return encodeURI(""+t).replace(oT,"|").replace(sT,"[").replace(iT,"]")}function aT(t){return wh(t).replace(bb,"{").replace(yb,"}").replace(vb,"^")}function tu(t){return wh(t).replace(gb,"%2B").replace(rT,"+").replace(mb,"%23").replace(JI,"%26").replace(nT,"`").replace(bb,"{").replace(yb,"}").replace(vb,"^")}function lT(t){return tu(t).replace(eT,"%3D")}function cT(t){return wh(t).replace(mb,"%23").replace(tT,"%3F")}function dT(t){return t==null?"":cT(t).replace(KI,"%2F")}function xl(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function uT(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let n=0;n<i.length;++n){const o=i[n].replace(gb," "),r=o.indexOf("="),a=xl(r<0?o:o.slice(0,r)),l=r<0?null:xl(o.slice(r+1));if(a in e){let c=e[a];Zs(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Hp(t){let e="";for(let s in t){const i=t[s];if(s=lT(s),i==null){i!==void 0&&(e+=(e.length?"&":"")+s);continue}(Zs(i)?i.map(o=>o&&tu(o)):[i&&tu(i)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+s,o!=null&&(e+="="+o))})}return e}function hT(t){const e={};for(const s in t){const i=t[s];i!==void 0&&(e[s]=Zs(i)?i.map(n=>n==null?null:""+n):i==null?i:""+i)}return e}const fT=Symbol(""),Np=Symbol(""),$h=Symbol(""),xb=Symbol(""),su=Symbol("");function hr(){let t=[];function e(i){return t.push(i),()=>{const n=t.indexOf(i);n>-1&&t.splice(n,1)}}function s(){t=[]}return{add:e,list:()=>t.slice(),reset:s}}function Xi(t,e,s,i,n){const o=i&&(i.enterCallbacks[n]=i.enterCallbacks[n]||[]);return()=>new Promise((r,a)=>{const l=u=>{u===!1?a(Bo(4,{from:s,to:e})):u instanceof Error?a(u):VI(u)?a(Bo(2,{from:e,to:u})):(o&&i.enterCallbacks[n]===o&&typeof u=="function"&&o.push(u),r())},c=t.call(i&&i.instances[n],e,s,l);let d=Promise.resolve(c);t.length<3&&(d=d.then(l)),d.catch(u=>a(u))})}function yd(t,e,s,i){const n=[];for(const o of t)for(const r in o.components){let a=o.components[r];if(!(e!=="beforeRouteEnter"&&!o.instances[r]))if(pT(a)){const c=(a.__vccOpts||a)[e];c&&n.push(Xi(c,s,i,o,r))}else{let l=a();n.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${o.path}"`));const d=yI(c)?c.default:c;o.components[r]=d;const f=(d.__vccOpts||d)[e];return f&&Xi(f,s,i,o,r)()}))}}return n}function pT(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function zp(t){const e=ps($h),s=ps(xb),i=Ge(()=>e.resolve(re(t.to))),n=Ge(()=>{const{matched:l}=i.value,{length:c}=l,d=l[c-1],u=s.matched;if(!d||!u.length)return-1;const f=u.findIndex(zo.bind(null,d));if(f>-1)return f;const b=Bp(l[c-2]);return c>1&&Bp(d)===b&&u[u.length-1].path!==b?u.findIndex(zo.bind(null,l[c-2])):f}),o=Ge(()=>n.value>-1&&bT(s.params,i.value.params)),r=Ge(()=>n.value>-1&&n.value===s.matched.length-1&&db(s.params,i.value.params));function a(l={}){return vT(l)?e[re(t.replace)?"replace":"push"](re(t.to)).catch(Cr):Promise.resolve()}return{route:i,href:Ge(()=>i.value.href),isActive:o,isExactActive:r,navigate:a}}const mT=ve({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:zp,setup(t,{slots:e}){const s=Jn(zp(t)),{options:i}=ps($h),n=Ge(()=>({[jp(t.activeClass,i.linkActiveClass,"router-link-active")]:s.isActive,[jp(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const o=e.default&&e.default(s);return t.custom?o:Fi("a",{"aria-current":s.isExactActive?t.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:n.value},o)}}}),gT=mT;function vT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function bT(t,e){for(const s in e){const i=e[s],n=t[s];if(typeof i=="string"){if(i!==n)return!1}else if(!Zs(n)||n.length!==i.length||i.some((o,r)=>o!==n[r]))return!1}return!0}function Bp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const jp=(t,e,s)=>t??e??s,yT=ve({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:s}){const i=ps(su),n=Ge(()=>t.route||i.value),o=ps(Np,0),r=Ge(()=>{let c=re(o);const{matched:d}=n.value;let u;for(;(u=d[c])&&!u.components;)c++;return c}),a=Ge(()=>n.value.matched[r.value]);Co(Np,Ge(()=>r.value+1)),Co(fT,a),Co(su,n);const l=Ke();return ki(()=>[l.value,a.value,t.name],([c,d,u],[f,b,w])=>{d&&(d.instances[u]=c,b&&b!==d&&c&&c===f&&(d.leaveGuards.size||(d.leaveGuards=b.leaveGuards),d.updateGuards.size||(d.updateGuards=b.updateGuards))),c&&d&&(!b||!zo(d,b)||!f)&&(d.enterCallbacks[u]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=n.value,d=t.name,u=a.value,f=u&&u.components[d];if(!f)return Up(s.default,{Component:f,route:c});const b=u.props[d],w=b?b===!0?c.params:typeof b=="function"?b(c):b:null,_=Fi(f,ze({},w,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(u.instances[d]=null)},ref:l}));return Up(s.default,{Component:_,route:c})||_}}});function Up(t,e){if(!t)return null;const s=t(e);return s.length===1?s[0]:s}const xT=yT;function wT(t){const e=GI(t.routes,t),s=t.parseQuery||uT,i=t.stringifyQuery||Hp,n=t.history,o=hr(),r=hr(),a=hr(),l=HS(qi);let c=qi;uo&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=vd.bind(null,C=>""+C),u=vd.bind(null,dT),f=vd.bind(null,xl);function b(C,X){let B,te;return hb(C)?(B=e.getRecordMatcher(C),te=X):te=C,e.addRoute(te,B)}function w(C){const X=e.getRecordMatcher(C);X&&e.removeRoute(X)}function x(){return e.getRoutes().map(C=>C.record)}function _(C){return!!e.getRecordMatcher(C)}function R(C,X){if(X=ze({},X||l.value),typeof C=="string"){const y=bd(s,C,X.path),S=e.resolve({path:y.path},X),I=n.createHref(y.fullPath);return ze(y,S,{params:f(S.params),hash:xl(y.hash),redirectedFrom:void 0,href:I})}let B;if("path"in C)B=ze({},C,{path:bd(s,C.path,X.path).path});else{const y=ze({},C.params);for(const S in y)y[S]==null&&delete y[S];B=ze({},C,{params:u(y)}),X.params=u(X.params)}const te=e.resolve(B,X),Ve=C.hash||"";te.params=d(f(te.params));const m=$I(i,ze({},C,{hash:aT(Ve),path:te.path})),v=n.createHref(m);return ze({fullPath:m,hash:Ve,query:i===Hp?hT(C.query):C.query||{}},te,{redirectedFrom:void 0,href:v})}function H(C){return typeof C=="string"?bd(s,C,l.value.path):ze({},C)}function ie(C,X){if(c!==C)return Bo(8,{from:X,to:C})}function U(C){return ct(C)}function ge(C){return U(ze(H(C),{replace:!0}))}function Fe(C){const X=C.matched[C.matched.length-1];if(X&&X.redirect){const{redirect:B}=X;let te=typeof B=="function"?B(C):B;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=H(te):{path:te},te.params={}),ze({query:C.query,hash:C.hash,params:"path"in te?{}:C.params},te)}}function ct(C,X){const B=c=R(C),te=l.value,Ve=C.state,m=C.force,v=C.replace===!0,y=Fe(B);if(y)return ct(ze(H(y),{state:typeof y=="object"?ze({},Ve,y.state):Ve,force:m,replace:v}),X||B);const S=B;S.redirectedFrom=X;let I;return!m&&_I(i,te,B)&&(I=Bo(16,{to:S,from:te}),ti(te,te,!0,!1)),(I?Promise.resolve(I):pt(S,te)).catch(E=>gi(E)?gi(E,2)?E:ji(E):Le(E,S,te)).then(E=>{if(E){if(gi(E,2))return ct(ze({replace:v},H(E.to),{state:typeof E.to=="object"?ze({},Ve,E.to.state):Ve,force:m}),X||S)}else E=cs(S,te,!0,v,Ve);return Mt(S,te,E),E})}function Se(C,X){const B=ie(C,X);return B?Promise.reject(B):Promise.resolve()}function Ie(C){const X=io.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(C):C()}function pt(C,X){let B;const[te,Ve,m]=$T(C,X);B=yd(te.reverse(),"beforeRouteLeave",C,X);for(const y of te)y.leaveGuards.forEach(S=>{B.push(Xi(S,C,X))});const v=Se.bind(null,C,X);return B.push(v),Lt(B).then(()=>{B=[];for(const y of o.list())B.push(Xi(y,C,X));return B.push(v),Lt(B)}).then(()=>{B=yd(Ve,"beforeRouteUpdate",C,X);for(const y of Ve)y.updateGuards.forEach(S=>{B.push(Xi(S,C,X))});return B.push(v),Lt(B)}).then(()=>{B=[];for(const y of m)if(y.beforeEnter)if(Zs(y.beforeEnter))for(const S of y.beforeEnter)B.push(Xi(S,C,X));else B.push(Xi(y.beforeEnter,C,X));return B.push(v),Lt(B)}).then(()=>(C.matched.forEach(y=>y.enterCallbacks={}),B=yd(m,"beforeRouteEnter",C,X),B.push(v),Lt(B))).then(()=>{B=[];for(const y of r.list())B.push(Xi(y,C,X));return B.push(v),Lt(B)}).catch(y=>gi(y,8)?y:Promise.reject(y))}function Mt(C,X,B){a.list().forEach(te=>Ie(()=>te(C,X,B)))}function cs(C,X,B,te,Ve){const m=ie(C,X);if(m)return m;const v=X===qi,y=uo?history.state:{};B&&(te||v?n.replace(C.fullPath,ze({scroll:v&&y&&y.scroll},Ve)):n.push(C.fullPath,Ve)),l.value=C,ti(C,X,B,v),ji()}let _s;function yn(){_s||(_s=n.listen((C,X,B)=>{if(!wa.listening)return;const te=R(C),Ve=Fe(te);if(Ve){ct(ze(Ve,{replace:!0}),te).catch(Cr);return}c=te;const m=l.value;uo&&RI(Rp(m.fullPath,B.delta),Tc()),pt(te,m).catch(v=>gi(v,12)?v:gi(v,2)?(ct(v.to,te).then(y=>{gi(y,20)&&!B.delta&&B.type===Xr.pop&&n.go(-1,!1)}).catch(Cr),Promise.reject()):(B.delta&&n.go(-B.delta,!1),Le(v,te,m))).then(v=>{v=v||cs(te,m,!1),v&&(B.delta&&!gi(v,8)?n.go(-B.delta,!1):B.type===Xr.pop&&gi(v,20)&&n.go(-1,!1)),Mt(te,m,v)}).catch(Cr)}))}let ks=hr(),Pe=hr(),Ye;function Le(C,X,B){ji(C);const te=Pe.list();return te.length?te.forEach(Ve=>Ve(C,X,B)):console.error(C),Promise.reject(C)}function mi(){return Ye&&l.value!==qi?Promise.resolve():new Promise((C,X)=>{ks.add([C,X])})}function ji(C){return Ye||(Ye=!C,yn(),ks.list().forEach(([X,B])=>C?B(C):X()),ks.reset()),C}function ti(C,X,B,te){const{scrollBehavior:Ve}=t;if(!uo||!Ve)return Promise.resolve();const m=!B&&EI(Rp(C.fullPath,0))||(te||!B)&&history.state&&history.state.scroll||null;return ph().then(()=>Ve(C,X,m)).then(v=>v&&DI(v)).catch(v=>Le(v,C,X))}const es=C=>n.go(C);let so;const io=new Set,wa={currentRoute:l,listening:!0,addRoute:b,removeRoute:w,hasRoute:_,getRoutes:x,resolve:R,options:t,push:U,replace:ge,go:es,back:()=>es(-1),forward:()=>es(1),beforeEach:o.add,beforeResolve:r.add,afterEach:a.add,onError:Pe.add,isReady:mi,install(C){const X=this;C.component("RouterLink",gT),C.component("RouterView",xT),C.config.globalProperties.$router=X,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>re(l)}),uo&&!so&&l.value===qi&&(so=!0,U(n.location).catch(Ve=>{}));const B={};for(const Ve in qi)Object.defineProperty(B,Ve,{get:()=>l.value[Ve],enumerable:!0});C.provide($h,X),C.provide(xb,Ov(B)),C.provide(su,l);const te=C.unmount;io.add(C),C.unmount=function(){io.delete(C),io.size<1&&(c=qi,_s&&_s(),_s=null,l.value=qi,so=!1,Ye=!1),te()}}};function Lt(C){return C.reduce((X,B)=>X.then(()=>Ie(B)),Promise.resolve())}return wa}function $T(t,e){const s=[],i=[],n=[],o=Math.max(e.matched.length,t.matched.length);for(let r=0;r<o;r++){const a=e.matched[r];a&&(t.matched.find(c=>zo(c,a))?i.push(a):s.push(a));const l=t.matched[r];l&&(e.matched.find(c=>zo(c,l))||n.push(l))}return[s,i,n]}const Pt=(t,e)=>{const s=t.__vccOpts||t;for(const[i,n]of e)s[i]=n;return s},_T={};function kT(t,e){return null}const ST=Pt(_T,[["render",kT]]),CT=[{path:"/",name:"Index",component:ST}],IT=wT({history:LI(),routes:CT,linkExactActiveClass:"active"});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const el=globalThis,_h=el.ShadowRoot&&(el.ShadyCSS===void 0||el.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,kh=Symbol(),Yp=new WeakMap;let wb=class{constructor(e,s,i){if(this._$cssResult$=!0,i!==kh)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o;const s=this.t;if(_h&&e===void 0){const i=s!==void 0&&s.length===1;i&&(e=Yp.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Yp.set(s,e))}return e}toString(){return this.cssText}};const TT=t=>new wb(typeof t=="string"?t:t+"",void 0,kh),Wp=(t,...e)=>{const s=t.length===1?t[0]:e.reduce((i,n,o)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[o+1],t[0]);return new wb(s,t,kh)},FT=(t,e)=>{if(_h)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of e){const i=document.createElement("style"),n=el.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=s.cssText,t.appendChild(i)}},qp=_h?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(const i of e.cssRules)s+=i.cssText;return TT(s)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:DT,defineProperty:RT,getOwnPropertyDescriptor:ET,getOwnPropertyNames:OT,getOwnPropertySymbols:AT,getPrototypeOf:PT}=Object,on=globalThis,Gp=on.trustedTypes,MT=Gp?Gp.emptyScript:"",xd=on.reactiveElementPolyfillSupport,Tr=(t,e)=>t,wl={toAttribute(t,e){switch(e){case Boolean:t=t?MT:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},Sh=(t,e)=>!DT(t,e),Zp={attribute:!0,type:String,converter:wl,reflect:!1,hasChanged:Sh};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),on.litPropertyMetadata??(on.litPropertyMetadata=new WeakMap);let ho=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=Zp){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(e,s),!s.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,s);n!==void 0&&RT(this.prototype,e,n)}}static getPropertyDescriptor(e,s,i){const{get:n,set:o}=ET(this.prototype,e)??{get(){return this[s]},set(r){this[s]=r}};return{get(){return n==null?void 0:n.call(this)},set(r){const a=n==null?void 0:n.call(this);o.call(this,r),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Zp}static _$Ei(){if(this.hasOwnProperty(Tr("elementProperties")))return;const e=PT(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Tr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Tr("properties"))){const s=this.properties,i=[...OT(s),...AT(s)];for(const n of i)this.createProperty(n,s[n])}const e=this[Symbol.metadata];if(e!==null){const s=litPropertyMetadata.get(e);if(s!==void 0)for(const[i,n]of s)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[s,i]of this.elementProperties){const n=this._$Eu(s,i);n!==void 0&&this._$Eh.set(n,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const s=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const n of i)s.unshift(qp(n))}else e!==void 0&&s.push(qp(e));return s}static _$Eu(e,s){const i=s.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(s=>s(this))}addController(e){var s;(this._$ES??(this._$ES=[])).push(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)==null||s.call(e))}removeController(e){var s;(s=this._$ES)==null||s.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){const e=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return FT(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)==null||e.forEach(s=>{var i;return(i=s.hostConnected)==null?void 0:i.call(s)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)==null||e.forEach(s=>{var i;return(i=s.hostDisconnected)==null?void 0:i.call(s)})}attributeChangedCallback(e,s,i){this._$AK(e,i)}_$EO(e,s){var o;const i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(n!==void 0&&i.reflect===!0){const r=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:wl).toAttribute(s,i.type);this._$Em=e,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(e,s){var o;const i=this.constructor,n=i._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const r=i.getPropertyOptions(n),a=typeof r.converter=="function"?{fromAttribute:r.converter}:((o=r.converter)==null?void 0:o.fromAttribute)!==void 0?r.converter:wl;this._$Em=n,this[n]=a.fromAttribute(s,r.type),this._$Em=null}}requestUpdate(e,s,i,n=!1,o){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??Sh)(n?o:this[e],s))return;this.C(e,s,i)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,s,i){this._$AL.has(e)||this._$AL.set(e,s),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(s){Promise.reject(s)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[o,r]of this._$Ep)this[o]=r;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[o,r]of n)r.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.C(o,this[o],r)}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(i=this._$ES)==null||i.forEach(n=>{var o;return(o=n.hostUpdate)==null?void 0:o.call(n)}),this.update(s)):this._$ET()}catch(n){throw e=!1,this._$ET(),n}e&&this._$AE(s)}willUpdate(e){}_$AE(e){var s;(s=this._$ES)==null||s.forEach(i=>{var n;return(n=i.hostUpdated)==null?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(s=>this._$EO(s,this[s]))),this._$ET()}updated(e){}firstUpdated(e){}};ho.elementStyles=[],ho.shadowRootOptions={mode:"open"},ho[Tr("elementProperties")]=new Map,ho[Tr("finalized")]=new Map,xd==null||xd({ReactiveElement:ho}),(on.reactiveElementVersions??(on.reactiveElementVersions=[])).push("2.0.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fr=globalThis,$l=Fr.trustedTypes,Xp=$l?$l.createPolicy("lit-html",{createHTML:t=>t}):void 0,$b="$lit$",Ji=`lit$${(Math.random()+"").slice(9)}$`,_b="?"+Ji,LT=`<${_b}>`,jn=document,Qr=()=>jn.createComment(""),Jr=t=>t===null||typeof t!="object"&&typeof t!="function",kb=Array.isArray,VT=t=>kb(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",wd=`[ 	
\f\r]`,fr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Qp=/-->/g,Jp=/>/g,Sn=RegExp(`>|${wd}(?:([^\\s"'>=/]+)(${wd}*=${wd}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Kp=/'/g,em=/"/g,Sb=/^(?:script|style|textarea|title)$/i,HT=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),NT=HT(1),jo=Symbol.for("lit-noChange"),Ft=Symbol.for("lit-nothing"),tm=new WeakMap,Rn=jn.createTreeWalker(jn,129);function Cb(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Xp!==void 0?Xp.createHTML(e):e}const zT=(t,e)=>{const s=t.length-1,i=[];let n,o=e===2?"<svg>":"",r=fr;for(let a=0;a<s;a++){const l=t[a];let c,d,u=-1,f=0;for(;f<l.length&&(r.lastIndex=f,d=r.exec(l),d!==null);)f=r.lastIndex,r===fr?d[1]==="!--"?r=Qp:d[1]!==void 0?r=Jp:d[2]!==void 0?(Sb.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=Sn):d[3]!==void 0&&(r=Sn):r===Sn?d[0]===">"?(r=n??fr,u=-1):d[1]===void 0?u=-2:(u=r.lastIndex-d[2].length,c=d[1],r=d[3]===void 0?Sn:d[3]==='"'?em:Kp):r===em||r===Kp?r=Sn:r===Qp||r===Jp?r=fr:(r=Sn,n=void 0);const b=r===Sn&&t[a+1].startsWith("/>")?" ":"";o+=r===fr?l+LT:u>=0?(i.push(c),l.slice(0,u)+$b+l.slice(u)+Ji+b):l+Ji+(u===-2?a:b)}return[Cb(t,o+(t[s]||"<?>")+(e===2?"</svg>":"")),i]};class Kr{constructor({strings:e,_$litType$:s},i){let n;this.parts=[];let o=0,r=0;const a=e.length-1,l=this.parts,[c,d]=zT(e,s);if(this.el=Kr.createElement(c,i),Rn.currentNode=this.el.content,s===2){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(n=Rn.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes())for(const u of n.getAttributeNames())if(u.endsWith($b)){const f=d[r++],b=n.getAttribute(u).split(Ji),w=/([.?@])?(.*)/.exec(f);l.push({type:1,index:o,name:w[2],strings:b,ctor:w[1]==="."?jT:w[1]==="?"?UT:w[1]==="@"?YT:Fc}),n.removeAttribute(u)}else u.startsWith(Ji)&&(l.push({type:6,index:o}),n.removeAttribute(u));if(Sb.test(n.tagName)){const u=n.textContent.split(Ji),f=u.length-1;if(f>0){n.textContent=$l?$l.emptyScript:"";for(let b=0;b<f;b++)n.append(u[b],Qr()),Rn.nextNode(),l.push({type:2,index:++o});n.append(u[f],Qr())}}}else if(n.nodeType===8)if(n.data===_b)l.push({type:2,index:o});else{let u=-1;for(;(u=n.data.indexOf(Ji,u+1))!==-1;)l.push({type:7,index:o}),u+=Ji.length-1}o++}}static createElement(e,s){const i=jn.createElement("template");return i.innerHTML=e,i}}function Uo(t,e,s=t,i){var r,a;if(e===jo)return e;let n=i!==void 0?(r=s._$Co)==null?void 0:r[i]:s._$Cl;const o=Jr(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==o&&((a=n==null?void 0:n._$AO)==null||a.call(n,!1),o===void 0?n=void 0:(n=new o(t),n._$AT(t,s,i)),i!==void 0?(s._$Co??(s._$Co=[]))[i]=n:s._$Cl=n),n!==void 0&&(e=Uo(t,n._$AS(t,e.values),n,i)),e}let BT=class{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:s},parts:i}=this._$AD,n=((e==null?void 0:e.creationScope)??jn).importNode(s,!0);Rn.currentNode=n;let o=Rn.nextNode(),r=0,a=0,l=i[0];for(;l!==void 0;){if(r===l.index){let c;l.type===2?c=new ma(o,o.nextSibling,this,e):l.type===1?c=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(c=new WT(o,this,e)),this._$AV.push(c),l=i[++a]}r!==(l==null?void 0:l.index)&&(o=Rn.nextNode(),r++)}return Rn.currentNode=jn,n}p(e){let s=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,s),s+=i.strings.length-2):i._$AI(e[s])),s++}};class ma{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,s,i,n){this.type=2,this._$AH=Ft,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=i,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=Uo(this,e,s),Jr(e)?e===Ft||e==null||e===""?(this._$AH!==Ft&&this._$AR(),this._$AH=Ft):e!==this._$AH&&e!==jo&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):VT(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Ft&&Jr(this._$AH)?this._$AA.nextSibling.data=e:this.$(jn.createTextNode(e)),this._$AH=e}g(e){var o;const{values:s,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Kr.createElement(Cb(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===n)this._$AH.p(s);else{const r=new BT(n,this),a=r.u(this.options);r.p(s),this.$(a),this._$AH=r}}_$AC(e){let s=tm.get(e.strings);return s===void 0&&tm.set(e.strings,s=new Kr(e)),s}T(e){kb(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,n=0;for(const o of e)n===s.length?s.push(i=new ma(this.k(Qr()),this.k(Qr()),this,this.options)):i=s[n],i._$AI(o),n++;n<s.length&&(this._$AR(i&&i._$AB.nextSibling,n),s.length=n)}_$AR(e=this._$AA.nextSibling,s){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,s);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var s;this._$AM===void 0&&(this._$Cv=e,(s=this._$AP)==null||s.call(this,e))}}class Fc{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,i,n,o){this.type=1,this._$AH=Ft,this._$AN=void 0,this.element=e,this.name=s,this._$AM=n,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Ft}_$AI(e,s=this,i,n){const o=this.strings;let r=!1;if(o===void 0)e=Uo(this,e,s,0),r=!Jr(e)||e!==this._$AH&&e!==jo,r&&(this._$AH=e);else{const a=e;let l,c;for(e=o[0],l=0;l<o.length-1;l++)c=Uo(this,a[i+l],s,l),c===jo&&(c=this._$AH[l]),r||(r=!Jr(c)||c!==this._$AH[l]),c===Ft?e=Ft:e!==Ft&&(e+=(c??"")+o[l+1]),this._$AH[l]=c}r&&!n&&this.j(e)}j(e){e===Ft?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}let jT=class extends Fc{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Ft?void 0:e}},UT=class extends Fc{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Ft)}},YT=class extends Fc{constructor(e,s,i,n,o){super(e,s,i,n,o),this.type=5}_$AI(e,s=this){if((e=Uo(this,e,s,0)??Ft)===jo)return;const i=this._$AH,n=e===Ft&&i!==Ft||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==Ft&&(i===Ft||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,e):this._$AH.handleEvent(e)}};class WT{constructor(e,s,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Uo(this,e)}}const $d=Fr.litHtmlPolyfillSupport;$d==null||$d(Kr,ma),(Fr.litHtmlVersions??(Fr.litHtmlVersions=[])).push("3.0.0");const qT=(t,e,s)=>{const i=(s==null?void 0:s.renderBefore)??e;let n=i._$litPart$;if(n===void 0){const o=(s==null?void 0:s.renderBefore)??null;i._$litPart$=n=new ma(e.insertBefore(Qr(),o),o,void 0,s??{})}return n._$AI(t),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Dr=class extends ho{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const e=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=e.firstChild),e}update(e){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=qT(s,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return jo}};var gm;Dr._$litElement$=!0,Dr.finalized=!0,(gm=globalThis.litElementHydrateSupport)==null||gm.call(globalThis,{LitElement:Dr});const _d=globalThis.litElementPolyfillSupport;_d==null||_d({LitElement:Dr});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const GT=t=>(e,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ZT={attribute:!0,type:String,converter:wl,reflect:!1,hasChanged:Sh},XT=(t=ZT,e,s)=>{const{kind:i,metadata:n}=s;let o=globalThis.litPropertyMetadata.get(n);if(o===void 0&&globalThis.litPropertyMetadata.set(n,o=new Map),o.set(s.name,t),i==="accessor"){const{name:r}=s;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(r,l,t)},init(a){return a!==void 0&&this.C(r,void 0,t),a}}}if(i==="setter"){const{name:r}=s;return function(a){const l=this[r];e.call(this,a),this.requestUpdate(r,l,t)}}throw Error("Unsupported decorator location: "+i)};function QT(t){return(e,s)=>typeof s=="object"?XT(t,e,s):((i,n,o)=>{const r=n.hasOwnProperty(o);return n.constructor.createProperty(o,r?{...i,wrapped:!0}:i),r?Object.getOwnPropertyDescriptor(n,o):void 0})(t,e,s)}var JT=Object.defineProperty,KT=Object.getOwnPropertyDescriptor,Ib=(t,e,s,i)=>{for(var n=i>1?void 0:i?KT(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&JT(e,s,n),n};class Tb extends Dr{}Tb.styles=[Wp`
            * {
                padding: 0;
                margin: 0;
            }
            :root {
                /* display - large */
                --md-sys-typescale-display-large-font-family-name: Roboto;
                --md-sys-typescale-display-large-font-family-style: Regular;
                --md-sys-typescale-display-large-font-weight: 400px;
                --md-sys-typescale-display-large-font-size: 57px;
                --md-sys-typescale-display-large-line-height: 64px;
                --md-sys-typescale-display-large-letter-spacing: -0.25px;
                /* display - medium */
                --md-sys-typescale-display-medium-font-family-name: Roboto;
                --md-sys-typescale-display-medium-font-family-style: Regular;
                --md-sys-typescale-display-medium-font-weight: 400px;
                --md-sys-typescale-display-medium-font-size: 45px;
                --md-sys-typescale-display-medium-line-height: 52px;
                --md-sys-typescale-display-medium-letter-spacing: 0px;
                /* display - small */
                --md-sys-typescale-display-small-font-family-name: Roboto;
                --md-sys-typescale-display-small-font-family-style: Regular;
                --md-sys-typescale-display-small-font-weight: 400px;
                --md-sys-typescale-display-small-font-size: 36px;
                --md-sys-typescale-display-small-line-height: 44px;
                --md-sys-typescale-display-small-letter-spacing: 0px;
                /* headline - large */
                --md-sys-typescale-headline-large-font-family-name: Roboto;
                --md-sys-typescale-headline-large-font-family-style: Regular;
                --md-sys-typescale-headline-large-font-weight: 400px;
                --md-sys-typescale-headline-large-font-size: 32px;
                --md-sys-typescale-headline-large-line-height: 40px;
                --md-sys-typescale-headline-large-letter-spacing: 0px;
                /* headline - medium */
                --md-sys-typescale-headline-medium-font-family-name: Roboto;
                --md-sys-typescale-headline-medium-font-family-style: Regular;
                --md-sys-typescale-headline-medium-font-weight: 400px;
                --md-sys-typescale-headline-medium-font-size: 28px;
                --md-sys-typescale-headline-medium-line-height: 36px;
                --md-sys-typescale-headline-medium-letter-spacing: 0px;
                /* headline - small */
                --md-sys-typescale-headline-small-font-family-name: Roboto;
                --md-sys-typescale-headline-small-font-family-style: Regular;
                --md-sys-typescale-headline-small-font-weight: 400px;
                --md-sys-typescale-headline-small-font-size: 24px;
                --md-sys-typescale-headline-small-line-height: 32px;
                --md-sys-typescale-headline-small-letter-spacing: 0px;
                /* body - large */
                --md-sys-typescale-body-large-font-family-name: Roboto;
                --md-sys-typescale-body-large-font-family-style: Regular;
                --md-sys-typescale-body-large-font-weight: 400px;
                --md-sys-typescale-body-large-font-size: 16px;
                --md-sys-typescale-body-large-line-height: 24px;
                --md-sys-typescale-body-large-letter-spacing: 0.50px;
                /* body - medium */
                --md-sys-typescale-body-medium-font-family-name: Roboto;
                --md-sys-typescale-body-medium-font-family-style: Regular;
                --md-sys-typescale-body-medium-font-weight: 400px;
                --md-sys-typescale-body-medium-font-size: 14px;
                --md-sys-typescale-body-medium-line-height: 20px;
                --md-sys-typescale-body-medium-letter-spacing: 0.25px;
                /* body - small */
                --md-sys-typescale-body-small-font-family-name: Roboto;
                --md-sys-typescale-body-small-font-family-style: Regular;
                --md-sys-typescale-body-small-font-weight: 400px;
                --md-sys-typescale-body-small-font-size: 12px;
                --md-sys-typescale-body-small-line-height: 16px;
                --md-sys-typescale-body-small-letter-spacing: 0.40px;
                /* label - large */
                --md-sys-typescale-label-large-font-family-name: Roboto;
                --md-sys-typescale-label-large-font-family-style: Medium;
                --md-sys-typescale-label-large-font-weight: 500px;
                --md-sys-typescale-label-large-font-size: 14px;
                --md-sys-typescale-label-large-line-height: 20px;
                --md-sys-typescale-label-large-letter-spacing: 0.10px;
                /* label - medium */
                --md-sys-typescale-label-medium-font-family-name: Roboto;
                --md-sys-typescale-label-medium-font-family-style: Medium;
                --md-sys-typescale-label-medium-font-weight: 500px;
                --md-sys-typescale-label-medium-font-size: 12px;
                --md-sys-typescale-label-medium-line-height: 16px;
                --md-sys-typescale-label-medium-letter-spacing: 0.50px;
                /* label - small */
                --md-sys-typescale-label-small-font-family-name: Roboto;
                --md-sys-typescale-label-small-font-family-style: Medium;
                --md-sys-typescale-label-small-font-weight: 500px;
                --md-sys-typescale-label-small-font-size: 11px;
                --md-sys-typescale-label-small-line-height: 16px;
                --md-sys-typescale-label-small-letter-spacing: 0.50px;
                /* title - large */
                --md-sys-typescale-title-large-font-family-name: Roboto;
                --md-sys-typescale-title-large-font-family-style: Regular;
                --md-sys-typescale-title-large-font-weight: 400px;
                --md-sys-typescale-title-large-font-size: 22px;
                --md-sys-typescale-title-large-line-height: 28px;
                --md-sys-typescale-title-large-letter-spacing: 0px;
                /* title - medium */
                --md-sys-typescale-title-medium-font-family-name: Roboto;
                --md-sys-typescale-title-medium-font-family-style: Medium;
                --md-sys-typescale-title-medium-font-weight: 500px;
                --md-sys-typescale-title-medium-font-size: 16px;
                --md-sys-typescale-title-medium-line-height: 24px;
                --md-sys-typescale-title-medium-letter-spacing: 0.15px;
                /* title - small */
                --md-sys-typescale-title-small-font-family-name: Roboto;
                --md-sys-typescale-title-small-font-family-style: Medium;
                --md-sys-typescale-title-small-font-weight: 500px;
                --md-sys-typescale-title-small-font-size: 14px;
                --md-sys-typescale-title-small-line-height: 20px;
                --md-sys-typescale-title-small-letter-spacing: 0.10px;
            }
        `,Wp`
            .display-large{
                font-family: var(--md-sys-typescale-display-large-font-family-name);
                font-style: var(--md-sys-typescale-display-large-font-family-style);
                font-weight: var(--md-sys-typescale-display-large-font-weight);
                font-size: var(--md-sys-typescale-display-large-font-size);
                letter-spacing: var(--md-sys-typescale-display-large-tracking);
                line-height: var(--md-sys-typescale-display-large-height);
                text-transform: var(--md-sys-typescale-display-large-text-transform);
                text-decoration: var(--md-sys-typescale-display-large-text-decoration);
                }
            .display-medium{
                font-family: var(--md-sys-typescale-display-medium-font-family-name);
                font-style: var(--md-sys-typescale-display-medium-font-family-style);
                font-weight: var(--md-sys-typescale-display-medium-font-weight);
                font-size: var(--md-sys-typescale-display-medium-font-size);
                letter-spacing: var(--md-sys-typescale-display-medium-tracking);
                line-height: var(--md-sys-typescale-display-medium-height);
                text-transform: var(--md-sys-typescale-display-medium-text-transform);
                text-decoration: var(--md-sys-typescale-display-medium-text-decoration);
            }
            .display-small{
                font-family: var(--md-sys-typescale-display-small-font-family-name);
                font-style: var(--md-sys-typescale-display-small-font-family-style);
                font-weight: var(--md-sys-typescale-display-small-font-weight);
                font-size: var(--md-sys-typescale-display-small-font-size);
                letter-spacing: var(--md-sys-typescale-display-small-tracking);
                line-height: var(--md-sys-typescale-display-small-height);
                text-transform: var(--md-sys-typescale-display-small-text-transform);
                text-decoration: var(--md-sys-typescale-display-small-text-decoration);
            }
            .headline-large{
                font-family: var(--md-sys-typescale-headline-large-font-family-name);
                font-style: var(--md-sys-typescale-headline-large-font-family-style);
                font-weight: var(--md-sys-typescale-headline-large-font-weight);
                font-size: var(--md-sys-typescale-headline-large-font-size);
                letter-spacing: var(--md-sys-typescale-headline-large-tracking);
                line-height: var(--md-sys-typescale-headline-large-height);
                text-transform: var(--md-sys-typescale-headline-large-text-transform);
                text-decoration: var(--md-sys-typescale-headline-large-text-decoration);
            }
            .headline-medium{
                font-family: var(--md-sys-typescale-headline-medium-font-family-name);
                font-style: var(--md-sys-typescale-headline-medium-font-family-style);
                font-weight: var(--md-sys-typescale-headline-medium-font-weight);
                font-size: var(--md-sys-typescale-headline-medium-font-size);
                letter-spacing: var(--md-sys-typescale-headline-medium-tracking);
                line-height: var(--md-sys-typescale-headline-medium-height);
                text-transform: var(--md-sys-typescale-headline-medium-text-transform);
                text-decoration: var(--md-sys-typescale-headline-medium-text-decoration);
            }
            .headline-small{
                font-family: var(--md-sys-typescale-headline-small-font-family-name);
                font-style: var(--md-sys-typescale-headline-small-font-family-style);
                font-weight: var(--md-sys-typescale-headline-small-font-weight);
                font-size: var(--md-sys-typescale-headline-small-font-size);
                letter-spacing: var(--md-sys-typescale-headline-small-tracking);
                line-height: var(--md-sys-typescale-headline-small-height);
                text-transform: var(--md-sys-typescale-headline-small-text-transform);
                text-decoration: var(--md-sys-typescale-headline-small-text-decoration);
            }
            .body-large{
                font-family: var(--md-sys-typescale-body-large-font-family-name);
                font-style: var(--md-sys-typescale-body-large-font-family-style);
                font-weight: var(--md-sys-typescale-body-large-font-weight);
                font-size: var(--md-sys-typescale-body-large-font-size);
                letter-spacing: var(--md-sys-typescale-body-large-tracking);
                line-height: var(--md-sys-typescale-body-large-height);
                text-transform: var(--md-sys-typescale-body-large-text-transform);
                text-decoration: var(--md-sys-typescale-body-large-text-decoration);
            }
            .body-medium{
                font-family: var(--md-sys-typescale-body-medium-font-family-name);
                font-style: var(--md-sys-typescale-body-medium-font-family-style);
                font-weight: var(--md-sys-typescale-body-medium-font-weight);
                font-size: var(--md-sys-typescale-body-medium-font-size);
                letter-spacing: var(--md-sys-typescale-body-medium-tracking);
                line-height: var(--md-sys-typescale-body-medium-height);
                text-transform: var(--md-sys-typescale-body-medium-text-transform);
                text-decoration: var(--md-sys-typescale-body-medium-text-decoration);
            }
            .body-small{
                font-family: var(--md-sys-typescale-body-small-font-family-name);
                font-style: var(--md-sys-typescale-body-small-font-family-style);
                font-weight: var(--md-sys-typescale-body-small-font-weight);
                font-size: var(--md-sys-typescale-body-small-font-size);
                letter-spacing: var(--md-sys-typescale-body-small-tracking);
                line-height: var(--md-sys-typescale-body-small-height);
                text-transform: var(--md-sys-typescale-body-small-text-transform);
                text-decoration: var(--md-sys-typescale-body-small-text-decoration);
            }
            .label-large{
                font-family: var(--md-sys-typescale-label-large-font-family-name);
                font-style: var(--md-sys-typescale-label-large-font-family-style);
                font-weight: var(--md-sys-typescale-label-large-font-weight);
                font-size: var(--md-sys-typescale-label-large-font-size);
                letter-spacing: var(--md-sys-typescale-label-large-tracking);
                line-height: var(--md-sys-typescale-label-large-height);
                text-transform: var(--md-sys-typescale-label-large-text-transform);
                text-decoration: var(--md-sys-typescale-label-large-text-decoration);
            }
            .label-medium{
                font-family: var(--md-sys-typescale-label-medium-font-family-name);
                font-style: var(--md-sys-typescale-label-medium-font-family-style);
                font-weight: var(--md-sys-typescale-label-medium-font-weight);
                font-size: var(--md-sys-typescale-label-medium-font-size);
                letter-spacing: var(--md-sys-typescale-label-medium-tracking);
                line-height: var(--md-sys-typescale-label-medium-height);
                text-transform: var(--md-sys-typescale-label-medium-text-transform);
                text-decoration: var(--md-sys-typescale-label-medium-text-decoration);
            }
            .label-small{
                font-family: var(--md-sys-typescale-label-small-font-family-name);
                font-style: var(--md-sys-typescale-label-small-font-family-style);
                font-weight: var(--md-sys-typescale-label-small-font-weight);
                font-size: var(--md-sys-typescale-label-small-font-size);
                letter-spacing: var(--md-sys-typescale-label-small-tracking);
                line-height: var(--md-sys-typescale-label-small-height);
                text-transform: var(--md-sys-typescale-label-small-text-transform);
                text-decoration: var(--md-sys-typescale-label-small-text-decoration);
            }
            .title-large{
                font-family: var(--md-sys-typescale-title-large-font-family-name);
                font-style: var(--md-sys-typescale-title-large-font-family-style);
                font-weight: var(--md-sys-typescale-title-large-font-weight);
                font-size: var(--md-sys-typescale-title-large-font-size);
                letter-spacing: var(--md-sys-typescale-title-large-tracking);
                line-height: var(--md-sys-typescale-title-large-height);
                text-transform: var(--md-sys-typescale-title-large-text-transform);
                text-decoration: var(--md-sys-typescale-title-large-text-decoration);
            }
            .title-medium{
                font-family: var(--md-sys-typescale-title-medium-font-family-name);
                font-style: var(--md-sys-typescale-title-medium-font-family-style);
                font-weight: var(--md-sys-typescale-title-medium-font-weight);
                font-size: var(--md-sys-typescale-title-medium-font-size);
                letter-spacing: var(--md-sys-typescale-title-medium-tracking);
                line-height: var(--md-sys-typescale-title-medium-height);
                text-transform: var(--md-sys-typescale-title-medium-text-transform);
                text-decoration: var(--md-sys-typescale-title-medium-text-decoration);
            }
            .title-small{
                font-family: var(--md-sys-typescale-title-small-font-family-name);
                font-style: var(--md-sys-typescale-title-small-font-family-style);
                font-weight: var(--md-sys-typescale-title-small-font-weight);
                font-size: var(--md-sys-typescale-title-small-font-size);
                letter-spacing: var(--md-sys-typescale-title-small-tracking);
                line-height: var(--md-sys-typescale-title-small-height);
                text-transform: var(--md-sys-typescale-title-small-text-transform);
                text-decoration: var(--md-sys-typescale-title-small-text-decoration);
            }
        `];class eF extends Tb{render(){return NT`
            <p class=${this.type}>
                <slot></slot>
            </p>
        `}}let iu=class extends eF{constructor(){super(...arguments),this.type="body-medium"}};Ib([QT({type:String,attribute:"type"})],iu.prototype,"type",2);iu=Ib([GT("md-text")],iu);const tF=ve({__name:"ExpandLayout",setup(t){const e=Ke(!1),s=i=>{e.value=i};return(i,n)=>(W(),ue("div",null,[os(i.$slots,"actions",{isExpanded:e.value,setIsExpanded:s}),os(i.$slots,"expanded-content",{isExpanded:e.value,setIsExpanded:s})]))}}),sF={},iF={class:"fixed"};function nF(t,e){return W(),ue("div",iF,[os(t.$slots,"default")])}const oF=Pt(sF,[["render",nF]]),rF={},aF={class:"flex"};function lF(t,e){return W(),ue("div",aF,[os(t.$slots,"default")])}const cF=Pt(rF,[["render",lF]]),dF={},uF={class:"relative p-2 h-full w-full"};function hF(t,e){return W(),ue("div",uF,[os(t.$slots,"default")])}const fF=Pt(dF,[["render",hF]]),pF={},mF={class:"sticky top-0"};function gF(t,e){return W(),ue("div",mF,[os(t.$slots,"default")])}const vF=Pt(pF,[["render",gF]]),bF={},yF={class:"grid"};function xF(t,e){return W(),ue("div",yF,[os(t.$slots,"default",{},void 0,!0)])}const wF=Pt(bF,[["render",xF],["__scopeId","data-v-8ad9707e"]]),$F={},_F={class:"material-symbols-outlined relative icon"};function kF(t,e){return W(),ue("span",_F,[os(t.$slots,"default",{},void 0,!0)])}const SF=Pt($F,[["render",kF],["__scopeId","data-v-ba4f84c9"]]),CF=ve({__name:"IconButton",props:{hasHover:{type:Boolean,default:!1},hasActive:{type:Boolean,default:!1},hasFilled:{type:Boolean,default:!1},hasShape:{type:Boolean,default:!0},type:{default:"default"}},setup(t){const e=t;return(s,i)=>(W(),ue("div",{class:Ot([e.hasHover?"icon-has-hover":"",e.hasShape?"rounded overflow-clip":"",e.type==="default"?"hover:bg-white/75":"hover:bg-error-500/75"])},[F("div",{class:Ot([[e.hasActive?"icon-has-active":"",e.hasFilled?"icon-has-filled":""],"transition-all"])},[os(s.$slots,"default",{},void 0,!0)],2)],2))}}),IF=Pt(CF,[["__scopeId","data-v-4ce49fb9"]]),Fb={install:t=>{t.component("ExpandLayout",tF).component("FixedLayout",oF).component("FlexLayout",cF).component("PageLayout",fF).component("StickyLayout",vF).component("GridLayout",wF).component("Icon",SF).component("IconButton",IF)}};var TF=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Db;const Dc=t=>Db=t,Rb=Symbol();function nu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Rr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Rr||(Rr={}));function FF(){const t=wv(!0),e=t.run(()=>Ke({}));let s=[],i=[];const n=gc({install(o){Dc(n),n._a=o,o.provide(Rb,n),o.config.globalProperties.$pinia=n,i.forEach(r=>s.push(r)),i=[]},use(o){return!this._a&&!TF?i.push(o):s.push(o),this},_p:s,_a:null,_e:t,_s:new Map,state:e});return n}const Eb=()=>{};function sm(t,e,s,i=Eb){t.push(e);const n=()=>{const o=t.indexOf(e);o>-1&&(t.splice(o,1),i())};return!s&&$v()&&uS(n),n}function ao(t,...e){t.slice().forEach(s=>{s(...e)})}const DF=t=>t();function ou(t,e){t instanceof Map&&e instanceof Map&&e.forEach((s,i)=>t.set(i,s)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const s in e){if(!e.hasOwnProperty(s))continue;const i=e[s],n=t[s];nu(n)&&nu(i)&&t.hasOwnProperty(s)&&!bt(i)&&!sn(i)?t[s]=ou(n,i):t[s]=i}return t}const RF=Symbol();function EF(t){return!nu(t)||!t.hasOwnProperty(RF)}const{assign:Gi}=Object;function OF(t){return!!(bt(t)&&t.effect)}function AF(t,e,s,i){const{state:n,actions:o,getters:r}=e,a=s.state.value[t];let l;function c(){a||(s.state.value[t]=n?n():{});const d=BS(s.state.value[t]);return Gi(d,o,Object.keys(r||{}).reduce((u,f)=>(u[f]=gc(Ge(()=>{Dc(s);const b=s._s.get(t);return r[f].call(b,b)})),u),{}))}return l=Ob(t,c,e,s,i,!0),l}function Ob(t,e,s={},i,n,o){let r;const a=Gi({actions:{}},s),l={deep:!0};let c,d,u=[],f=[],b;const w=i.state.value[t];!o&&!w&&(i.state.value[t]={}),Ke({});let x;function _(Se){let Ie;c=d=!1,typeof Se=="function"?(Se(i.state.value[t]),Ie={type:Rr.patchFunction,storeId:t,events:b}):(ou(i.state.value[t],Se),Ie={type:Rr.patchObject,payload:Se,storeId:t,events:b});const pt=x=Symbol();ph().then(()=>{x===pt&&(c=!0)}),d=!0,ao(u,Ie,i.state.value[t])}const R=o?function(){const{state:Ie}=s,pt=Ie?Ie():{};this.$patch(Mt=>{Gi(Mt,pt)})}:Eb;function H(){r.stop(),u=[],f=[],i._s.delete(t)}function ie(Se,Ie){return function(){Dc(i);const pt=Array.from(arguments),Mt=[],cs=[];function _s(Pe){Mt.push(Pe)}function yn(Pe){cs.push(Pe)}ao(f,{args:pt,name:Se,store:ge,after:_s,onError:yn});let ks;try{ks=Ie.apply(this&&this.$id===t?this:ge,pt)}catch(Pe){throw ao(cs,Pe),Pe}return ks instanceof Promise?ks.then(Pe=>(ao(Mt,Pe),Pe)).catch(Pe=>(ao(cs,Pe),Promise.reject(Pe))):(ao(Mt,ks),ks)}}const U={_p:i,$id:t,$onAction:sm.bind(null,f),$patch:_,$reset:R,$subscribe(Se,Ie={}){const pt=sm(u,Se,Ie.detached,()=>Mt()),Mt=r.run(()=>ki(()=>i.state.value[t],cs=>{(Ie.flush==="sync"?d:c)&&Se({storeId:t,type:Rr.direct,events:b},cs)},Gi({},l,Ie)));return pt},$dispose:H},ge=Jn(U);i._s.set(t,ge);const Fe=i._a&&i._a.runWithContext||DF,ct=i._e.run(()=>(r=wv(),Fe(()=>r.run(e))));for(const Se in ct){const Ie=ct[Se];if(bt(Ie)&&!OF(Ie)||sn(Ie))o||(w&&EF(Ie)&&(bt(Ie)?Ie.value=w[Se]:ou(Ie,w[Se])),i.state.value[t][Se]=Ie);else if(typeof Ie=="function"){const pt=ie(Se,Ie);ct[Se]=pt,a.actions[Se]=Ie}}return Gi(ge,ct),Gi(Ee(ge),ct),Object.defineProperty(ge,"$state",{get:()=>i.state.value[t],set:Se=>{_(Ie=>{Gi(Ie,Se)})}}),i._p.forEach(Se=>{Gi(ge,r.run(()=>Se({store:ge,app:i._a,pinia:i,options:a})))}),w&&o&&s.hydrate&&s.hydrate(ge.$state,w),c=!0,d=!0,ge}function Ch(t,e,s){let i,n;const o=typeof e=="function";typeof t=="string"?(i=t,n=o?s:e):(n=t,i=t.id);function r(a,l){const c=SC();return a=a||(c?ps(Rb,null):null),a&&Dc(a),a=Db,a._s.has(i)||(o?Ob(i,e,n,a):AF(i,n,a)),a._s.get(i)}return r.$id=i,r}function PF(t){return typeof t=="object"&&t!==null}function im(t,e){return t=PF(t)?t:Object.create(null),new Proxy(t,{get(s,i,n){return i==="key"?Reflect.get(s,i,n):Reflect.get(s,i,n)||Reflect.get(e,i,n)}})}function MF(t,e){return e.reduce((s,i)=>s==null?void 0:s[i],t)}function LF(t,e,s){return e.slice(0,-1).reduce((i,n)=>/^(__proto__)$/.test(n)?{}:i[n]=i[n]||{},t)[e[e.length-1]]=s,t}function VF(t,e){return e.reduce((s,i)=>{const n=i.split(".");return LF(s,n,MF(t,n))},{})}function nm(t,{storage:e,serializer:s,key:i,debug:n}){try{const o=e==null?void 0:e.getItem(i);o&&t.$patch(s==null?void 0:s.deserialize(o))}catch(o){n&&console.error(o)}}function om(t,{storage:e,serializer:s,key:i,paths:n,debug:o}){try{const r=Array.isArray(n)?VF(t,n):t;e.setItem(i,s.serialize(r))}catch(r){o&&console.error(r)}}function HF(t={}){return e=>{const{auto:s=!1}=t,{options:{persist:i=s},store:n,pinia:o}=e;if(!i)return;if(!(n.$id in o.state.value)){const a=o._s.get(n.$id.replace("__hot:",""));a&&Promise.resolve().then(()=>a.$persist());return}const r=(Array.isArray(i)?i.map(a=>im(a,t)):[im(i,t)]).map(({storage:a=localStorage,beforeRestore:l=null,afterRestore:c=null,serializer:d={serialize:JSON.stringify,deserialize:JSON.parse},key:u=n.$id,paths:f=null,debug:b=!1})=>{var w;return{storage:a,beforeRestore:l,afterRestore:c,serializer:d,key:((w=t.key)!=null?w:x=>x)(typeof u=="string"?u:u(n.$id)),paths:f,debug:b}});n.$persist=()=>{r.forEach(a=>{om(n.$state,a)})},n.$hydrate=({runHooks:a=!0}={})=>{r.forEach(l=>{const{beforeRestore:c,afterRestore:d}=l;a&&(c==null||c(e)),nm(n,l),a&&(d==null||d(e))})},r.forEach(a=>{const{beforeRestore:l,afterRestore:c}=a;l==null||l(e),nm(n,a),c==null||c(e),n.$subscribe((d,u)=>{om(u,a)},{detached:!0})})}}var NF=HF();const Ab=FF();Ab.use(NF);//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Pb;function z(){return Pb.apply(null,arguments)}function zF(t){Pb=t}function Xs(t){return t instanceof Array||Object.prototype.toString.call(t)==="[object Array]"}function Ln(t){return t!=null&&Object.prototype.toString.call(t)==="[object Object]"}function Oe(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ih(t){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(t).length===0;var e;for(e in t)if(Oe(t,e))return!1;return!0}function is(t){return t===void 0}function Di(t){return typeof t=="number"||Object.prototype.toString.call(t)==="[object Number]"}function ga(t){return t instanceof Date||Object.prototype.toString.call(t)==="[object Date]"}function Mb(t,e){var s=[],i,n=t.length;for(i=0;i<n;++i)s.push(e(t[i],i));return s}function Ki(t,e){for(var s in e)Oe(e,s)&&(t[s]=e[s]);return Oe(e,"toString")&&(t.toString=e.toString),Oe(e,"valueOf")&&(t.valueOf=e.valueOf),t}function fi(t,e,s,i){return ry(t,e,s,i,!0).utc()}function BF(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function be(t){return t._pf==null&&(t._pf=BF()),t._pf}var ru;Array.prototype.some?ru=Array.prototype.some:ru=function(t){var e=Object(this),s=e.length>>>0,i;for(i=0;i<s;i++)if(i in e&&t.call(this,e[i],i,e))return!0;return!1};function Th(t){if(t._isValid==null){var e=be(t),s=ru.call(e.parsedDateParts,function(n){return n!=null}),i=!isNaN(t._d.getTime())&&e.overflow<0&&!e.empty&&!e.invalidEra&&!e.invalidMonth&&!e.invalidWeekday&&!e.weekdayMismatch&&!e.nullInput&&!e.invalidFormat&&!e.userInvalidated&&(!e.meridiem||e.meridiem&&s);if(t._strict&&(i=i&&e.charsLeftOver===0&&e.unusedTokens.length===0&&e.bigHour===void 0),Object.isFrozen==null||!Object.isFrozen(t))t._isValid=i;else return i}return t._isValid}function Rc(t){var e=fi(NaN);return t!=null?Ki(be(e),t):be(e).userInvalidated=!0,e}var rm=z.momentProperties=[],kd=!1;function Fh(t,e){var s,i,n,o=rm.length;if(is(e._isAMomentObject)||(t._isAMomentObject=e._isAMomentObject),is(e._i)||(t._i=e._i),is(e._f)||(t._f=e._f),is(e._l)||(t._l=e._l),is(e._strict)||(t._strict=e._strict),is(e._tzm)||(t._tzm=e._tzm),is(e._isUTC)||(t._isUTC=e._isUTC),is(e._offset)||(t._offset=e._offset),is(e._pf)||(t._pf=be(e)),is(e._locale)||(t._locale=e._locale),o>0)for(s=0;s<o;s++)i=rm[s],n=e[i],is(n)||(t[i]=n);return t}function va(t){Fh(this,t),this._d=new Date(t._d!=null?t._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),kd===!1&&(kd=!0,z.updateOffset(this),kd=!1)}function Qs(t){return t instanceof va||t!=null&&t._isAMomentObject!=null}function Lb(t){z.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+t)}function Ms(t,e){var s=!0;return Ki(function(){if(z.deprecationHandler!=null&&z.deprecationHandler(null,t),s){var i=[],n,o,r,a=arguments.length;for(o=0;o<a;o++){if(n="",typeof arguments[o]=="object"){n+=`
[`+o+"] ";for(r in arguments[0])Oe(arguments[0],r)&&(n+=r+": "+arguments[0][r]+", ");n=n.slice(0,-2)}else n=arguments[o];i.push(n)}Lb(t+`
Arguments: `+Array.prototype.slice.call(i).join("")+`
`+new Error().stack),s=!1}return e.apply(this,arguments)},e)}var am={};function Vb(t,e){z.deprecationHandler!=null&&z.deprecationHandler(t,e),am[t]||(Lb(e),am[t]=!0)}z.suppressDeprecationWarnings=!1;z.deprecationHandler=null;function pi(t){return typeof Function<"u"&&t instanceof Function||Object.prototype.toString.call(t)==="[object Function]"}function jF(t){var e,s;for(s in t)Oe(t,s)&&(e=t[s],pi(e)?this[s]=e:this["_"+s]=e);this._config=t,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function au(t,e){var s=Ki({},t),i;for(i in e)Oe(e,i)&&(Ln(t[i])&&Ln(e[i])?(s[i]={},Ki(s[i],t[i]),Ki(s[i],e[i])):e[i]!=null?s[i]=e[i]:delete s[i]);for(i in t)Oe(t,i)&&!Oe(e,i)&&Ln(t[i])&&(s[i]=Ki({},s[i]));return s}function Dh(t){t!=null&&this.set(t)}var lu;Object.keys?lu=Object.keys:lu=function(t){var e,s=[];for(e in t)Oe(t,e)&&s.push(e);return s};var UF={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function YF(t,e,s){var i=this._calendar[t]||this._calendar.sameElse;return pi(i)?i.call(e,s):i}function ci(t,e,s){var i=""+Math.abs(t),n=e-i.length,o=t>=0;return(o?s?"+":"":"-")+Math.pow(10,Math.max(0,n)).toString().substr(1)+i}var Rh=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Ya=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Sd={},Io={};function se(t,e,s,i){var n=i;typeof i=="string"&&(n=function(){return this[i]()}),t&&(Io[t]=n),e&&(Io[e[0]]=function(){return ci(n.apply(this,arguments),e[1],e[2])}),s&&(Io[s]=function(){return this.localeData().ordinal(n.apply(this,arguments),t)})}function WF(t){return t.match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function qF(t){var e=t.match(Rh),s,i;for(s=0,i=e.length;s<i;s++)Io[e[s]]?e[s]=Io[e[s]]:e[s]=WF(e[s]);return function(n){var o="",r;for(r=0;r<i;r++)o+=pi(e[r])?e[r].call(n,t):e[r];return o}}function tl(t,e){return t.isValid()?(e=Hb(e,t.localeData()),Sd[e]=Sd[e]||qF(e),Sd[e](t)):t.localeData().invalidDate()}function Hb(t,e){var s=5;function i(n){return e.longDateFormat(n)||n}for(Ya.lastIndex=0;s>=0&&Ya.test(t);)t=t.replace(Ya,i),Ya.lastIndex=0,s-=1;return t}var GF={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function ZF(t){var e=this._longDateFormat[t],s=this._longDateFormat[t.toUpperCase()];return e||!s?e:(this._longDateFormat[t]=s.match(Rh).map(function(i){return i==="MMMM"||i==="MM"||i==="DD"||i==="dddd"?i.slice(1):i}).join(""),this._longDateFormat[t])}var XF="Invalid date";function QF(){return this._invalidDate}var JF="%d",KF=/\d{1,2}/;function eD(t){return this._ordinal.replace("%d",t)}var tD={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function sD(t,e,s,i){var n=this._relativeTime[s];return pi(n)?n(t,e,s,i):n.replace(/%d/i,t)}function iD(t,e){var s=this._relativeTime[t>0?"future":"past"];return pi(s)?s(e):s.replace(/%s/i,e)}var Er={};function Ut(t,e){var s=t.toLowerCase();Er[s]=Er[s+"s"]=Er[e]=t}function Ls(t){return typeof t=="string"?Er[t]||Er[t.toLowerCase()]:void 0}function Eh(t){var e={},s,i;for(i in t)Oe(t,i)&&(s=Ls(i),s&&(e[s]=t[i]));return e}var Nb={};function Yt(t,e){Nb[t]=e}function nD(t){var e=[],s;for(s in t)Oe(t,s)&&e.push({unit:s,priority:Nb[s]});return e.sort(function(i,n){return i.priority-n.priority}),e}function Ec(t){return t%4===0&&t%100!==0||t%400===0}function Is(t){return t<0?Math.ceil(t)||0:Math.floor(t)}function we(t){var e=+t,s=0;return e!==0&&isFinite(e)&&(s=Is(e)),s}function tr(t,e){return function(s){return s!=null?(zb(this,t,s),z.updateOffset(this,e),this):_l(this,t)}}function _l(t,e){return t.isValid()?t._d["get"+(t._isUTC?"UTC":"")+e]():NaN}function zb(t,e,s){t.isValid()&&!isNaN(s)&&(e==="FullYear"&&Ec(t.year())&&t.month()===1&&t.date()===29?(s=we(s),t._d["set"+(t._isUTC?"UTC":"")+e](s,t.month(),Vc(s,t.month()))):t._d["set"+(t._isUTC?"UTC":"")+e](s))}function oD(t){return t=Ls(t),pi(this[t])?this[t]():this}function rD(t,e){if(typeof t=="object"){t=Eh(t);var s=nD(t),i,n=s.length;for(i=0;i<n;i++)this[s[i].unit](t[s[i].unit])}else if(t=Ls(t),pi(this[t]))return this[t](e);return this}var Bb=/\d/,$s=/\d\d/,jb=/\d{3}/,Oh=/\d{4}/,Oc=/[+-]?\d{6}/,it=/\d\d?/,Ub=/\d\d\d\d?/,Yb=/\d\d\d\d\d\d?/,Ac=/\d{1,3}/,Ah=/\d{1,4}/,Pc=/[+-]?\d{1,6}/,sr=/\d+/,Mc=/[+-]?\d+/,aD=/Z|[+-]\d\d:?\d\d/gi,Lc=/Z|[+-]\d\d(?::?\d\d)?/gi,lD=/[+-]?\d+(\.\d{1,3})?/,ba=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,kl;kl={};function Z(t,e,s){kl[t]=pi(e)?e:function(i,n){return i&&s?s:e}}function cD(t,e){return Oe(kl,t)?kl[t](e._strict,e._locale):new RegExp(dD(t))}function dD(t){return hs(t.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,s,i,n,o){return s||i||n||o}))}function hs(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var cu={};function Ue(t,e){var s,i=e,n;for(typeof t=="string"&&(t=[t]),Di(e)&&(i=function(o,r){r[e]=we(o)}),n=t.length,s=0;s<n;s++)cu[t[s]]=i}function ya(t,e){Ue(t,function(s,i,n,o){n._w=n._w||{},e(s,n._w,n,o)})}function uD(t,e,s){e!=null&&Oe(cu,t)&&cu[t](e,s._a,s,t)}var Nt=0,$i=1,ai=2,kt=3,Us=4,_i=5,En=6,hD=7,fD=8;function pD(t,e){return(t%e+e)%e}var mt;Array.prototype.indexOf?mt=Array.prototype.indexOf:mt=function(t){var e;for(e=0;e<this.length;++e)if(this[e]===t)return e;return-1};function Vc(t,e){if(isNaN(t)||isNaN(e))return NaN;var s=pD(e,12);return t+=(e-s)/12,s===1?Ec(t)?29:28:31-s%7%2}se("M",["MM",2],"Mo",function(){return this.month()+1});se("MMM",0,0,function(t){return this.localeData().monthsShort(this,t)});se("MMMM",0,0,function(t){return this.localeData().months(this,t)});Ut("month","M");Yt("month",8);Z("M",it);Z("MM",it,$s);Z("MMM",function(t,e){return e.monthsShortRegex(t)});Z("MMMM",function(t,e){return e.monthsRegex(t)});Ue(["M","MM"],function(t,e){e[$i]=we(t)-1});Ue(["MMM","MMMM"],function(t,e,s,i){var n=s._locale.monthsParse(t,i,s._strict);n!=null?e[$i]=n:be(s).invalidMonth=t});var mD="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Wb="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),qb=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,gD=ba,vD=ba;function bD(t,e){return t?Xs(this._months)?this._months[t.month()]:this._months[(this._months.isFormat||qb).test(e)?"format":"standalone"][t.month()]:Xs(this._months)?this._months:this._months.standalone}function yD(t,e){return t?Xs(this._monthsShort)?this._monthsShort[t.month()]:this._monthsShort[qb.test(e)?"format":"standalone"][t.month()]:Xs(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function xD(t,e,s){var i,n,o,r=t.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],i=0;i<12;++i)o=fi([2e3,i]),this._shortMonthsParse[i]=this.monthsShort(o,"").toLocaleLowerCase(),this._longMonthsParse[i]=this.months(o,"").toLocaleLowerCase();return s?e==="MMM"?(n=mt.call(this._shortMonthsParse,r),n!==-1?n:null):(n=mt.call(this._longMonthsParse,r),n!==-1?n:null):e==="MMM"?(n=mt.call(this._shortMonthsParse,r),n!==-1?n:(n=mt.call(this._longMonthsParse,r),n!==-1?n:null)):(n=mt.call(this._longMonthsParse,r),n!==-1?n:(n=mt.call(this._shortMonthsParse,r),n!==-1?n:null))}function wD(t,e,s){var i,n,o;if(this._monthsParseExact)return xD.call(this,t,e,s);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),i=0;i<12;i++){if(n=fi([2e3,i]),s&&!this._longMonthsParse[i]&&(this._longMonthsParse[i]=new RegExp("^"+this.months(n,"").replace(".","")+"$","i"),this._shortMonthsParse[i]=new RegExp("^"+this.monthsShort(n,"").replace(".","")+"$","i")),!s&&!this._monthsParse[i]&&(o="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[i]=new RegExp(o.replace(".",""),"i")),s&&e==="MMMM"&&this._longMonthsParse[i].test(t))return i;if(s&&e==="MMM"&&this._shortMonthsParse[i].test(t))return i;if(!s&&this._monthsParse[i].test(t))return i}}function Gb(t,e){var s;if(!t.isValid())return t;if(typeof e=="string"){if(/^\d+$/.test(e))e=we(e);else if(e=t.localeData().monthsParse(e),!Di(e))return t}return s=Math.min(t.date(),Vc(t.year(),e)),t._d["set"+(t._isUTC?"UTC":"")+"Month"](e,s),t}function Zb(t){return t!=null?(Gb(this,t),z.updateOffset(this,!0),this):_l(this,"Month")}function $D(){return Vc(this.year(),this.month())}function _D(t){return this._monthsParseExact?(Oe(this,"_monthsRegex")||Xb.call(this),t?this._monthsShortStrictRegex:this._monthsShortRegex):(Oe(this,"_monthsShortRegex")||(this._monthsShortRegex=gD),this._monthsShortStrictRegex&&t?this._monthsShortStrictRegex:this._monthsShortRegex)}function kD(t){return this._monthsParseExact?(Oe(this,"_monthsRegex")||Xb.call(this),t?this._monthsStrictRegex:this._monthsRegex):(Oe(this,"_monthsRegex")||(this._monthsRegex=vD),this._monthsStrictRegex&&t?this._monthsStrictRegex:this._monthsRegex)}function Xb(){function t(r,a){return a.length-r.length}var e=[],s=[],i=[],n,o;for(n=0;n<12;n++)o=fi([2e3,n]),e.push(this.monthsShort(o,"")),s.push(this.months(o,"")),i.push(this.months(o,"")),i.push(this.monthsShort(o,""));for(e.sort(t),s.sort(t),i.sort(t),n=0;n<12;n++)e[n]=hs(e[n]),s[n]=hs(s[n]);for(n=0;n<24;n++)i[n]=hs(i[n]);this._monthsRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+e.join("|")+")","i")}se("Y",0,0,function(){var t=this.year();return t<=9999?ci(t,4):"+"+t});se(0,["YY",2],0,function(){return this.year()%100});se(0,["YYYY",4],0,"year");se(0,["YYYYY",5],0,"year");se(0,["YYYYYY",6,!0],0,"year");Ut("year","y");Yt("year",1);Z("Y",Mc);Z("YY",it,$s);Z("YYYY",Ah,Oh);Z("YYYYY",Pc,Oc);Z("YYYYYY",Pc,Oc);Ue(["YYYYY","YYYYYY"],Nt);Ue("YYYY",function(t,e){e[Nt]=t.length===2?z.parseTwoDigitYear(t):we(t)});Ue("YY",function(t,e){e[Nt]=z.parseTwoDigitYear(t)});Ue("Y",function(t,e){e[Nt]=parseInt(t,10)});function Or(t){return Ec(t)?366:365}z.parseTwoDigitYear=function(t){return we(t)+(we(t)>68?1900:2e3)};var Qb=tr("FullYear",!0);function SD(){return Ec(this.year())}function CD(t,e,s,i,n,o,r){var a;return t<100&&t>=0?(a=new Date(t+400,e,s,i,n,o,r),isFinite(a.getFullYear())&&a.setFullYear(t)):a=new Date(t,e,s,i,n,o,r),a}function ea(t){var e,s;return t<100&&t>=0?(s=Array.prototype.slice.call(arguments),s[0]=t+400,e=new Date(Date.UTC.apply(null,s)),isFinite(e.getUTCFullYear())&&e.setUTCFullYear(t)):e=new Date(Date.UTC.apply(null,arguments)),e}function Sl(t,e,s){var i=7+e-s,n=(7+ea(t,0,i).getUTCDay()-e)%7;return-n+i-1}function Jb(t,e,s,i,n){var o=(7+s-i)%7,r=Sl(t,i,n),a=1+7*(e-1)+o+r,l,c;return a<=0?(l=t-1,c=Or(l)+a):a>Or(t)?(l=t+1,c=a-Or(t)):(l=t,c=a),{year:l,dayOfYear:c}}function ta(t,e,s){var i=Sl(t.year(),e,s),n=Math.floor((t.dayOfYear()-i-1)/7)+1,o,r;return n<1?(r=t.year()-1,o=n+Si(r,e,s)):n>Si(t.year(),e,s)?(o=n-Si(t.year(),e,s),r=t.year()+1):(r=t.year(),o=n),{week:o,year:r}}function Si(t,e,s){var i=Sl(t,e,s),n=Sl(t+1,e,s);return(Or(t)-i+n)/7}se("w",["ww",2],"wo","week");se("W",["WW",2],"Wo","isoWeek");Ut("week","w");Ut("isoWeek","W");Yt("week",5);Yt("isoWeek",5);Z("w",it);Z("ww",it,$s);Z("W",it);Z("WW",it,$s);ya(["w","ww","W","WW"],function(t,e,s,i){e[i.substr(0,1)]=we(t)});function ID(t){return ta(t,this._week.dow,this._week.doy).week}var TD={dow:0,doy:6};function FD(){return this._week.dow}function DD(){return this._week.doy}function RD(t){var e=this.localeData().week(this);return t==null?e:this.add((t-e)*7,"d")}function ED(t){var e=ta(this,1,4).week;return t==null?e:this.add((t-e)*7,"d")}se("d",0,"do","day");se("dd",0,0,function(t){return this.localeData().weekdaysMin(this,t)});se("ddd",0,0,function(t){return this.localeData().weekdaysShort(this,t)});se("dddd",0,0,function(t){return this.localeData().weekdays(this,t)});se("e",0,0,"weekday");se("E",0,0,"isoWeekday");Ut("day","d");Ut("weekday","e");Ut("isoWeekday","E");Yt("day",11);Yt("weekday",11);Yt("isoWeekday",11);Z("d",it);Z("e",it);Z("E",it);Z("dd",function(t,e){return e.weekdaysMinRegex(t)});Z("ddd",function(t,e){return e.weekdaysShortRegex(t)});Z("dddd",function(t,e){return e.weekdaysRegex(t)});ya(["dd","ddd","dddd"],function(t,e,s,i){var n=s._locale.weekdaysParse(t,i,s._strict);n!=null?e.d=n:be(s).invalidWeekday=t});ya(["d","e","E"],function(t,e,s,i){e[i]=we(t)});function OD(t,e){return typeof t!="string"?t:isNaN(t)?(t=e.weekdaysParse(t),typeof t=="number"?t:null):parseInt(t,10)}function AD(t,e){return typeof t=="string"?e.weekdaysParse(t)%7||7:isNaN(t)?null:t}function Ph(t,e){return t.slice(e,7).concat(t.slice(0,e))}var PD="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Kb="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),MD="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),LD=ba,VD=ba,HD=ba;function ND(t,e){var s=Xs(this._weekdays)?this._weekdays:this._weekdays[t&&t!==!0&&this._weekdays.isFormat.test(e)?"format":"standalone"];return t===!0?Ph(s,this._week.dow):t?s[t.day()]:s}function zD(t){return t===!0?Ph(this._weekdaysShort,this._week.dow):t?this._weekdaysShort[t.day()]:this._weekdaysShort}function BD(t){return t===!0?Ph(this._weekdaysMin,this._week.dow):t?this._weekdaysMin[t.day()]:this._weekdaysMin}function jD(t,e,s){var i,n,o,r=t.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],i=0;i<7;++i)o=fi([2e3,1]).day(i),this._minWeekdaysParse[i]=this.weekdaysMin(o,"").toLocaleLowerCase(),this._shortWeekdaysParse[i]=this.weekdaysShort(o,"").toLocaleLowerCase(),this._weekdaysParse[i]=this.weekdays(o,"").toLocaleLowerCase();return s?e==="dddd"?(n=mt.call(this._weekdaysParse,r),n!==-1?n:null):e==="ddd"?(n=mt.call(this._shortWeekdaysParse,r),n!==-1?n:null):(n=mt.call(this._minWeekdaysParse,r),n!==-1?n:null):e==="dddd"?(n=mt.call(this._weekdaysParse,r),n!==-1||(n=mt.call(this._shortWeekdaysParse,r),n!==-1)?n:(n=mt.call(this._minWeekdaysParse,r),n!==-1?n:null)):e==="ddd"?(n=mt.call(this._shortWeekdaysParse,r),n!==-1||(n=mt.call(this._weekdaysParse,r),n!==-1)?n:(n=mt.call(this._minWeekdaysParse,r),n!==-1?n:null)):(n=mt.call(this._minWeekdaysParse,r),n!==-1||(n=mt.call(this._weekdaysParse,r),n!==-1)?n:(n=mt.call(this._shortWeekdaysParse,r),n!==-1?n:null))}function UD(t,e,s){var i,n,o;if(this._weekdaysParseExact)return jD.call(this,t,e,s);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),i=0;i<7;i++){if(n=fi([2e3,1]).day(i),s&&!this._fullWeekdaysParse[i]&&(this._fullWeekdaysParse[i]=new RegExp("^"+this.weekdays(n,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[i]=new RegExp("^"+this.weekdaysShort(n,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[i]=new RegExp("^"+this.weekdaysMin(n,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[i]||(o="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),this._weekdaysParse[i]=new RegExp(o.replace(".",""),"i")),s&&e==="dddd"&&this._fullWeekdaysParse[i].test(t))return i;if(s&&e==="ddd"&&this._shortWeekdaysParse[i].test(t))return i;if(s&&e==="dd"&&this._minWeekdaysParse[i].test(t))return i;if(!s&&this._weekdaysParse[i].test(t))return i}}function YD(t){if(!this.isValid())return t!=null?this:NaN;var e=this._isUTC?this._d.getUTCDay():this._d.getDay();return t!=null?(t=OD(t,this.localeData()),this.add(t-e,"d")):e}function WD(t){if(!this.isValid())return t!=null?this:NaN;var e=(this.day()+7-this.localeData()._week.dow)%7;return t==null?e:this.add(t-e,"d")}function qD(t){if(!this.isValid())return t!=null?this:NaN;if(t!=null){var e=AD(t,this.localeData());return this.day(this.day()%7?e:e-7)}else return this.day()||7}function GD(t){return this._weekdaysParseExact?(Oe(this,"_weekdaysRegex")||Mh.call(this),t?this._weekdaysStrictRegex:this._weekdaysRegex):(Oe(this,"_weekdaysRegex")||(this._weekdaysRegex=LD),this._weekdaysStrictRegex&&t?this._weekdaysStrictRegex:this._weekdaysRegex)}function ZD(t){return this._weekdaysParseExact?(Oe(this,"_weekdaysRegex")||Mh.call(this),t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(Oe(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=VD),this._weekdaysShortStrictRegex&&t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function XD(t){return this._weekdaysParseExact?(Oe(this,"_weekdaysRegex")||Mh.call(this),t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(Oe(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=HD),this._weekdaysMinStrictRegex&&t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Mh(){function t(d,u){return u.length-d.length}var e=[],s=[],i=[],n=[],o,r,a,l,c;for(o=0;o<7;o++)r=fi([2e3,1]).day(o),a=hs(this.weekdaysMin(r,"")),l=hs(this.weekdaysShort(r,"")),c=hs(this.weekdays(r,"")),e.push(a),s.push(l),i.push(c),n.push(a),n.push(l),n.push(c);e.sort(t),s.sort(t),i.sort(t),n.sort(t),this._weekdaysRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+e.join("|")+")","i")}function Lh(){return this.hours()%12||12}function QD(){return this.hours()||24}se("H",["HH",2],0,"hour");se("h",["hh",2],0,Lh);se("k",["kk",2],0,QD);se("hmm",0,0,function(){return""+Lh.apply(this)+ci(this.minutes(),2)});se("hmmss",0,0,function(){return""+Lh.apply(this)+ci(this.minutes(),2)+ci(this.seconds(),2)});se("Hmm",0,0,function(){return""+this.hours()+ci(this.minutes(),2)});se("Hmmss",0,0,function(){return""+this.hours()+ci(this.minutes(),2)+ci(this.seconds(),2)});function ey(t,e){se(t,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),e)})}ey("a",!0);ey("A",!1);Ut("hour","h");Yt("hour",13);function ty(t,e){return e._meridiemParse}Z("a",ty);Z("A",ty);Z("H",it);Z("h",it);Z("k",it);Z("HH",it,$s);Z("hh",it,$s);Z("kk",it,$s);Z("hmm",Ub);Z("hmmss",Yb);Z("Hmm",Ub);Z("Hmmss",Yb);Ue(["H","HH"],kt);Ue(["k","kk"],function(t,e,s){var i=we(t);e[kt]=i===24?0:i});Ue(["a","A"],function(t,e,s){s._isPm=s._locale.isPM(t),s._meridiem=t});Ue(["h","hh"],function(t,e,s){e[kt]=we(t),be(s).bigHour=!0});Ue("hmm",function(t,e,s){var i=t.length-2;e[kt]=we(t.substr(0,i)),e[Us]=we(t.substr(i)),be(s).bigHour=!0});Ue("hmmss",function(t,e,s){var i=t.length-4,n=t.length-2;e[kt]=we(t.substr(0,i)),e[Us]=we(t.substr(i,2)),e[_i]=we(t.substr(n)),be(s).bigHour=!0});Ue("Hmm",function(t,e,s){var i=t.length-2;e[kt]=we(t.substr(0,i)),e[Us]=we(t.substr(i))});Ue("Hmmss",function(t,e,s){var i=t.length-4,n=t.length-2;e[kt]=we(t.substr(0,i)),e[Us]=we(t.substr(i,2)),e[_i]=we(t.substr(n))});function JD(t){return(t+"").toLowerCase().charAt(0)==="p"}var KD=/[ap]\.?m?\.?/i,eR=tr("Hours",!0);function tR(t,e,s){return t>11?s?"pm":"PM":s?"am":"AM"}var sy={calendar:UF,longDateFormat:GF,invalidDate:XF,ordinal:JF,dayOfMonthOrdinalParse:KF,relativeTime:tD,months:mD,monthsShort:Wb,week:TD,weekdays:PD,weekdaysMin:MD,weekdaysShort:Kb,meridiemParse:KD},nt={},pr={},sa;function sR(t,e){var s,i=Math.min(t.length,e.length);for(s=0;s<i;s+=1)if(t[s]!==e[s])return s;return i}function lm(t){return t&&t.toLowerCase().replace("_","-")}function iR(t){for(var e=0,s,i,n,o;e<t.length;){for(o=lm(t[e]).split("-"),s=o.length,i=lm(t[e+1]),i=i?i.split("-"):null;s>0;){if(n=Hc(o.slice(0,s).join("-")),n)return n;if(i&&i.length>=s&&sR(o,i)>=s-1)break;s--}e++}return sa}function nR(t){return t.match("^[^/\\\\]*$")!=null}function Hc(t){var e=null,s;if(nt[t]===void 0&&typeof nl<"u"&&nl&&nl.exports&&nR(t))try{e=sa._abbr,s=require,s("./locale/"+t),rn(e)}catch{nt[t]=null}return nt[t]}function rn(t,e){var s;return t&&(is(e)?s=zi(t):s=Vh(t,e),s?sa=s:typeof console<"u"&&console.warn&&console.warn("Locale "+t+" not found. Did you forget to load it?")),sa._abbr}function Vh(t,e){if(e!==null){var s,i=sy;if(e.abbr=t,nt[t]!=null)Vb("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),i=nt[t]._config;else if(e.parentLocale!=null)if(nt[e.parentLocale]!=null)i=nt[e.parentLocale]._config;else if(s=Hc(e.parentLocale),s!=null)i=s._config;else return pr[e.parentLocale]||(pr[e.parentLocale]=[]),pr[e.parentLocale].push({name:t,config:e}),null;return nt[t]=new Dh(au(i,e)),pr[t]&&pr[t].forEach(function(n){Vh(n.name,n.config)}),rn(t),nt[t]}else return delete nt[t],null}function oR(t,e){if(e!=null){var s,i,n=sy;nt[t]!=null&&nt[t].parentLocale!=null?nt[t].set(au(nt[t]._config,e)):(i=Hc(t),i!=null&&(n=i._config),e=au(n,e),i==null&&(e.abbr=t),s=new Dh(e),s.parentLocale=nt[t],nt[t]=s),rn(t)}else nt[t]!=null&&(nt[t].parentLocale!=null?(nt[t]=nt[t].parentLocale,t===rn()&&rn(t)):nt[t]!=null&&delete nt[t]);return nt[t]}function zi(t){var e;if(t&&t._locale&&t._locale._abbr&&(t=t._locale._abbr),!t)return sa;if(!Xs(t)){if(e=Hc(t),e)return e;t=[t]}return iR(t)}function rR(){return lu(nt)}function Hh(t){var e,s=t._a;return s&&be(t).overflow===-2&&(e=s[$i]<0||s[$i]>11?$i:s[ai]<1||s[ai]>Vc(s[Nt],s[$i])?ai:s[kt]<0||s[kt]>24||s[kt]===24&&(s[Us]!==0||s[_i]!==0||s[En]!==0)?kt:s[Us]<0||s[Us]>59?Us:s[_i]<0||s[_i]>59?_i:s[En]<0||s[En]>999?En:-1,be(t)._overflowDayOfYear&&(e<Nt||e>ai)&&(e=ai),be(t)._overflowWeeks&&e===-1&&(e=hD),be(t)._overflowWeekday&&e===-1&&(e=fD),be(t).overflow=e),t}var aR=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,lR=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,cR=/Z|[+-]\d\d(?::?\d\d)?/,Wa=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],Cd=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],dR=/^\/?Date\((-?\d+)/i,uR=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,hR={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function iy(t){var e,s,i=t._i,n=aR.exec(i)||lR.exec(i),o,r,a,l,c=Wa.length,d=Cd.length;if(n){for(be(t).iso=!0,e=0,s=c;e<s;e++)if(Wa[e][1].exec(n[1])){r=Wa[e][0],o=Wa[e][2]!==!1;break}if(r==null){t._isValid=!1;return}if(n[3]){for(e=0,s=d;e<s;e++)if(Cd[e][1].exec(n[3])){a=(n[2]||" ")+Cd[e][0];break}if(a==null){t._isValid=!1;return}}if(!o&&a!=null){t._isValid=!1;return}if(n[4])if(cR.exec(n[4]))l="Z";else{t._isValid=!1;return}t._f=r+(a||"")+(l||""),zh(t)}else t._isValid=!1}function fR(t,e,s,i,n,o){var r=[pR(t),Wb.indexOf(e),parseInt(s,10),parseInt(i,10),parseInt(n,10)];return o&&r.push(parseInt(o,10)),r}function pR(t){var e=parseInt(t,10);return e<=49?2e3+e:e<=999?1900+e:e}function mR(t){return t.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function gR(t,e,s){if(t){var i=Kb.indexOf(t),n=new Date(e[0],e[1],e[2]).getDay();if(i!==n)return be(s).weekdayMismatch=!0,s._isValid=!1,!1}return!0}function vR(t,e,s){if(t)return hR[t];if(e)return 0;var i=parseInt(s,10),n=i%100,o=(i-n)/100;return o*60+n}function ny(t){var e=uR.exec(mR(t._i)),s;if(e){if(s=fR(e[4],e[3],e[2],e[5],e[6],e[7]),!gR(e[1],s,t))return;t._a=s,t._tzm=vR(e[8],e[9],e[10]),t._d=ea.apply(null,t._a),t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),be(t).rfc2822=!0}else t._isValid=!1}function bR(t){var e=dR.exec(t._i);if(e!==null){t._d=new Date(+e[1]);return}if(iy(t),t._isValid===!1)delete t._isValid;else return;if(ny(t),t._isValid===!1)delete t._isValid;else return;t._strict?t._isValid=!1:z.createFromInputFallback(t)}z.createFromInputFallback=Ms("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(t){t._d=new Date(t._i+(t._useUTC?" UTC":""))});function fo(t,e,s){return t??e??s}function yR(t){var e=new Date(z.now());return t._useUTC?[e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()]:[e.getFullYear(),e.getMonth(),e.getDate()]}function Nh(t){var e,s,i=[],n,o,r;if(!t._d){for(n=yR(t),t._w&&t._a[ai]==null&&t._a[$i]==null&&xR(t),t._dayOfYear!=null&&(r=fo(t._a[Nt],n[Nt]),(t._dayOfYear>Or(r)||t._dayOfYear===0)&&(be(t)._overflowDayOfYear=!0),s=ea(r,0,t._dayOfYear),t._a[$i]=s.getUTCMonth(),t._a[ai]=s.getUTCDate()),e=0;e<3&&t._a[e]==null;++e)t._a[e]=i[e]=n[e];for(;e<7;e++)t._a[e]=i[e]=t._a[e]==null?e===2?1:0:t._a[e];t._a[kt]===24&&t._a[Us]===0&&t._a[_i]===0&&t._a[En]===0&&(t._nextDay=!0,t._a[kt]=0),t._d=(t._useUTC?ea:CD).apply(null,i),o=t._useUTC?t._d.getUTCDay():t._d.getDay(),t._tzm!=null&&t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),t._nextDay&&(t._a[kt]=24),t._w&&typeof t._w.d<"u"&&t._w.d!==o&&(be(t).weekdayMismatch=!0)}}function xR(t){var e,s,i,n,o,r,a,l,c;e=t._w,e.GG!=null||e.W!=null||e.E!=null?(o=1,r=4,s=fo(e.GG,t._a[Nt],ta(tt(),1,4).year),i=fo(e.W,1),n=fo(e.E,1),(n<1||n>7)&&(l=!0)):(o=t._locale._week.dow,r=t._locale._week.doy,c=ta(tt(),o,r),s=fo(e.gg,t._a[Nt],c.year),i=fo(e.w,c.week),e.d!=null?(n=e.d,(n<0||n>6)&&(l=!0)):e.e!=null?(n=e.e+o,(e.e<0||e.e>6)&&(l=!0)):n=o),i<1||i>Si(s,o,r)?be(t)._overflowWeeks=!0:l!=null?be(t)._overflowWeekday=!0:(a=Jb(s,i,n,o,r),t._a[Nt]=a.year,t._dayOfYear=a.dayOfYear)}z.ISO_8601=function(){};z.RFC_2822=function(){};function zh(t){if(t._f===z.ISO_8601){iy(t);return}if(t._f===z.RFC_2822){ny(t);return}t._a=[],be(t).empty=!0;var e=""+t._i,s,i,n,o,r,a=e.length,l=0,c,d;for(n=Hb(t._f,t._locale).match(Rh)||[],d=n.length,s=0;s<d;s++)o=n[s],i=(e.match(cD(o,t))||[])[0],i&&(r=e.substr(0,e.indexOf(i)),r.length>0&&be(t).unusedInput.push(r),e=e.slice(e.indexOf(i)+i.length),l+=i.length),Io[o]?(i?be(t).empty=!1:be(t).unusedTokens.push(o),uD(o,i,t)):t._strict&&!i&&be(t).unusedTokens.push(o);be(t).charsLeftOver=a-l,e.length>0&&be(t).unusedInput.push(e),t._a[kt]<=12&&be(t).bigHour===!0&&t._a[kt]>0&&(be(t).bigHour=void 0),be(t).parsedDateParts=t._a.slice(0),be(t).meridiem=t._meridiem,t._a[kt]=wR(t._locale,t._a[kt],t._meridiem),c=be(t).era,c!==null&&(t._a[Nt]=t._locale.erasConvertYear(c,t._a[Nt])),Nh(t),Hh(t)}function wR(t,e,s){var i;return s==null?e:t.meridiemHour!=null?t.meridiemHour(e,s):(t.isPM!=null&&(i=t.isPM(s),i&&e<12&&(e+=12),!i&&e===12&&(e=0)),e)}function $R(t){var e,s,i,n,o,r,a=!1,l=t._f.length;if(l===0){be(t).invalidFormat=!0,t._d=new Date(NaN);return}for(n=0;n<l;n++)o=0,r=!1,e=Fh({},t),t._useUTC!=null&&(e._useUTC=t._useUTC),e._f=t._f[n],zh(e),Th(e)&&(r=!0),o+=be(e).charsLeftOver,o+=be(e).unusedTokens.length*10,be(e).score=o,a?o<i&&(i=o,s=e):(i==null||o<i||r)&&(i=o,s=e,r&&(a=!0));Ki(t,s||e)}function _R(t){if(!t._d){var e=Eh(t._i),s=e.day===void 0?e.date:e.day;t._a=Mb([e.year,e.month,s,e.hour,e.minute,e.second,e.millisecond],function(i){return i&&parseInt(i,10)}),Nh(t)}}function kR(t){var e=new va(Hh(oy(t)));return e._nextDay&&(e.add(1,"d"),e._nextDay=void 0),e}function oy(t){var e=t._i,s=t._f;return t._locale=t._locale||zi(t._l),e===null||s===void 0&&e===""?Rc({nullInput:!0}):(typeof e=="string"&&(t._i=e=t._locale.preparse(e)),Qs(e)?new va(Hh(e)):(ga(e)?t._d=e:Xs(s)?$R(t):s?zh(t):SR(t),Th(t)||(t._d=null),t))}function SR(t){var e=t._i;is(e)?t._d=new Date(z.now()):ga(e)?t._d=new Date(e.valueOf()):typeof e=="string"?bR(t):Xs(e)?(t._a=Mb(e.slice(0),function(s){return parseInt(s,10)}),Nh(t)):Ln(e)?_R(t):Di(e)?t._d=new Date(e):z.createFromInputFallback(t)}function ry(t,e,s,i,n){var o={};return(e===!0||e===!1)&&(i=e,e=void 0),(s===!0||s===!1)&&(i=s,s=void 0),(Ln(t)&&Ih(t)||Xs(t)&&t.length===0)&&(t=void 0),o._isAMomentObject=!0,o._useUTC=o._isUTC=n,o._l=s,o._i=t,o._f=e,o._strict=i,kR(o)}function tt(t,e,s,i){return ry(t,e,s,i,!1)}var CR=Ms("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=tt.apply(null,arguments);return this.isValid()&&t.isValid()?t<this?this:t:Rc()}),IR=Ms("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=tt.apply(null,arguments);return this.isValid()&&t.isValid()?t>this?this:t:Rc()});function ay(t,e){var s,i;if(e.length===1&&Xs(e[0])&&(e=e[0]),!e.length)return tt();for(s=e[0],i=1;i<e.length;++i)(!e[i].isValid()||e[i][t](s))&&(s=e[i]);return s}function TR(){var t=[].slice.call(arguments,0);return ay("isBefore",t)}function FR(){var t=[].slice.call(arguments,0);return ay("isAfter",t)}var DR=function(){return Date.now?Date.now():+new Date},mr=["year","quarter","month","week","day","hour","minute","second","millisecond"];function RR(t){var e,s=!1,i,n=mr.length;for(e in t)if(Oe(t,e)&&!(mt.call(mr,e)!==-1&&(t[e]==null||!isNaN(t[e]))))return!1;for(i=0;i<n;++i)if(t[mr[i]]){if(s)return!1;parseFloat(t[mr[i]])!==we(t[mr[i]])&&(s=!0)}return!0}function ER(){return this._isValid}function OR(){return Ks(NaN)}function Nc(t){var e=Eh(t),s=e.year||0,i=e.quarter||0,n=e.month||0,o=e.week||e.isoWeek||0,r=e.day||0,a=e.hour||0,l=e.minute||0,c=e.second||0,d=e.millisecond||0;this._isValid=RR(e),this._milliseconds=+d+c*1e3+l*6e4+a*1e3*60*60,this._days=+r+o*7,this._months=+n+i*3+s*12,this._data={},this._locale=zi(),this._bubble()}function sl(t){return t instanceof Nc}function du(t){return t<0?Math.round(-1*t)*-1:Math.round(t)}function AR(t,e,s){var i=Math.min(t.length,e.length),n=Math.abs(t.length-e.length),o=0,r;for(r=0;r<i;r++)(s&&t[r]!==e[r]||!s&&we(t[r])!==we(e[r]))&&o++;return o+n}function ly(t,e){se(t,0,0,function(){var s=this.utcOffset(),i="+";return s<0&&(s=-s,i="-"),i+ci(~~(s/60),2)+e+ci(~~s%60,2)})}ly("Z",":");ly("ZZ","");Z("Z",Lc);Z("ZZ",Lc);Ue(["Z","ZZ"],function(t,e,s){s._useUTC=!0,s._tzm=Bh(Lc,t)});var PR=/([\+\-]|\d\d)/gi;function Bh(t,e){var s=(e||"").match(t),i,n,o;return s===null?null:(i=s[s.length-1]||[],n=(i+"").match(PR)||["-",0,0],o=+(n[1]*60)+we(n[2]),o===0?0:n[0]==="+"?o:-o)}function jh(t,e){var s,i;return e._isUTC?(s=e.clone(),i=(Qs(t)||ga(t)?t.valueOf():tt(t).valueOf())-s.valueOf(),s._d.setTime(s._d.valueOf()+i),z.updateOffset(s,!1),s):tt(t).local()}function uu(t){return-Math.round(t._d.getTimezoneOffset())}z.updateOffset=function(){};function MR(t,e,s){var i=this._offset||0,n;if(!this.isValid())return t!=null?this:NaN;if(t!=null){if(typeof t=="string"){if(t=Bh(Lc,t),t===null)return this}else Math.abs(t)<16&&!s&&(t=t*60);return!this._isUTC&&e&&(n=uu(this)),this._offset=t,this._isUTC=!0,n!=null&&this.add(n,"m"),i!==t&&(!e||this._changeInProgress?uy(this,Ks(t-i,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,z.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?i:uu(this)}function LR(t,e){return t!=null?(typeof t!="string"&&(t=-t),this.utcOffset(t,e),this):-this.utcOffset()}function VR(t){return this.utcOffset(0,t)}function HR(t){return this._isUTC&&(this.utcOffset(0,t),this._isUTC=!1,t&&this.subtract(uu(this),"m")),this}function NR(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var t=Bh(aD,this._i);t!=null?this.utcOffset(t):this.utcOffset(0,!0)}return this}function zR(t){return this.isValid()?(t=t?tt(t).utcOffset():0,(this.utcOffset()-t)%60===0):!1}function BR(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function jR(){if(!is(this._isDSTShifted))return this._isDSTShifted;var t={},e;return Fh(t,this),t=oy(t),t._a?(e=t._isUTC?fi(t._a):tt(t._a),this._isDSTShifted=this.isValid()&&AR(t._a,e.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function UR(){return this.isValid()?!this._isUTC:!1}function YR(){return this.isValid()?this._isUTC:!1}function cy(){return this.isValid()?this._isUTC&&this._offset===0:!1}var WR=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,qR=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Ks(t,e){var s=t,i=null,n,o,r;return sl(t)?s={ms:t._milliseconds,d:t._days,M:t._months}:Di(t)||!isNaN(+t)?(s={},e?s[e]=+t:s.milliseconds=+t):(i=WR.exec(t))?(n=i[1]==="-"?-1:1,s={y:0,d:we(i[ai])*n,h:we(i[kt])*n,m:we(i[Us])*n,s:we(i[_i])*n,ms:we(du(i[En]*1e3))*n}):(i=qR.exec(t))?(n=i[1]==="-"?-1:1,s={y:Cn(i[2],n),M:Cn(i[3],n),w:Cn(i[4],n),d:Cn(i[5],n),h:Cn(i[6],n),m:Cn(i[7],n),s:Cn(i[8],n)}):s==null?s={}:typeof s=="object"&&("from"in s||"to"in s)&&(r=GR(tt(s.from),tt(s.to)),s={},s.ms=r.milliseconds,s.M=r.months),o=new Nc(s),sl(t)&&Oe(t,"_locale")&&(o._locale=t._locale),sl(t)&&Oe(t,"_isValid")&&(o._isValid=t._isValid),o}Ks.fn=Nc.prototype;Ks.invalid=OR;function Cn(t,e){var s=t&&parseFloat(t.replace(",","."));return(isNaN(s)?0:s)*e}function cm(t,e){var s={};return s.months=e.month()-t.month()+(e.year()-t.year())*12,t.clone().add(s.months,"M").isAfter(e)&&--s.months,s.milliseconds=+e-+t.clone().add(s.months,"M"),s}function GR(t,e){var s;return t.isValid()&&e.isValid()?(e=jh(e,t),t.isBefore(e)?s=cm(t,e):(s=cm(e,t),s.milliseconds=-s.milliseconds,s.months=-s.months),s):{milliseconds:0,months:0}}function dy(t,e){return function(s,i){var n,o;return i!==null&&!isNaN(+i)&&(Vb(e,"moment()."+e+"(period, number) is deprecated. Please use moment()."+e+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),o=s,s=i,i=o),n=Ks(s,i),uy(this,n,t),this}}function uy(t,e,s,i){var n=e._milliseconds,o=du(e._days),r=du(e._months);t.isValid()&&(i=i??!0,r&&Gb(t,_l(t,"Month")+r*s),o&&zb(t,"Date",_l(t,"Date")+o*s),n&&t._d.setTime(t._d.valueOf()+n*s),i&&z.updateOffset(t,o||r))}var ZR=dy(1,"add"),XR=dy(-1,"subtract");function hy(t){return typeof t=="string"||t instanceof String}function QR(t){return Qs(t)||ga(t)||hy(t)||Di(t)||KR(t)||JR(t)||t===null||t===void 0}function JR(t){var e=Ln(t)&&!Ih(t),s=!1,i=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],n,o,r=i.length;for(n=0;n<r;n+=1)o=i[n],s=s||Oe(t,o);return e&&s}function KR(t){var e=Xs(t),s=!1;return e&&(s=t.filter(function(i){return!Di(i)&&hy(t)}).length===0),e&&s}function eE(t){var e=Ln(t)&&!Ih(t),s=!1,i=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],n,o;for(n=0;n<i.length;n+=1)o=i[n],s=s||Oe(t,o);return e&&s}function tE(t,e){var s=t.diff(e,"days",!0);return s<-6?"sameElse":s<-1?"lastWeek":s<0?"lastDay":s<1?"sameDay":s<2?"nextDay":s<7?"nextWeek":"sameElse"}function sE(t,e){arguments.length===1&&(arguments[0]?QR(arguments[0])?(t=arguments[0],e=void 0):eE(arguments[0])&&(e=arguments[0],t=void 0):(t=void 0,e=void 0));var s=t||tt(),i=jh(s,this).startOf("day"),n=z.calendarFormat(this,i)||"sameElse",o=e&&(pi(e[n])?e[n].call(this,s):e[n]);return this.format(o||this.localeData().calendar(n,this,tt(s)))}function iE(){return new va(this)}function nE(t,e){var s=Qs(t)?t:tt(t);return this.isValid()&&s.isValid()?(e=Ls(e)||"millisecond",e==="millisecond"?this.valueOf()>s.valueOf():s.valueOf()<this.clone().startOf(e).valueOf()):!1}function oE(t,e){var s=Qs(t)?t:tt(t);return this.isValid()&&s.isValid()?(e=Ls(e)||"millisecond",e==="millisecond"?this.valueOf()<s.valueOf():this.clone().endOf(e).valueOf()<s.valueOf()):!1}function rE(t,e,s,i){var n=Qs(t)?t:tt(t),o=Qs(e)?e:tt(e);return this.isValid()&&n.isValid()&&o.isValid()?(i=i||"()",(i[0]==="("?this.isAfter(n,s):!this.isBefore(n,s))&&(i[1]===")"?this.isBefore(o,s):!this.isAfter(o,s))):!1}function aE(t,e){var s=Qs(t)?t:tt(t),i;return this.isValid()&&s.isValid()?(e=Ls(e)||"millisecond",e==="millisecond"?this.valueOf()===s.valueOf():(i=s.valueOf(),this.clone().startOf(e).valueOf()<=i&&i<=this.clone().endOf(e).valueOf())):!1}function lE(t,e){return this.isSame(t,e)||this.isAfter(t,e)}function cE(t,e){return this.isSame(t,e)||this.isBefore(t,e)}function dE(t,e,s){var i,n,o;if(!this.isValid())return NaN;if(i=jh(t,this),!i.isValid())return NaN;switch(n=(i.utcOffset()-this.utcOffset())*6e4,e=Ls(e),e){case"year":o=il(this,i)/12;break;case"month":o=il(this,i);break;case"quarter":o=il(this,i)/3;break;case"second":o=(this-i)/1e3;break;case"minute":o=(this-i)/6e4;break;case"hour":o=(this-i)/36e5;break;case"day":o=(this-i-n)/864e5;break;case"week":o=(this-i-n)/6048e5;break;default:o=this-i}return s?o:Is(o)}function il(t,e){if(t.date()<e.date())return-il(e,t);var s=(e.year()-t.year())*12+(e.month()-t.month()),i=t.clone().add(s,"months"),n,o;return e-i<0?(n=t.clone().add(s-1,"months"),o=(e-i)/(i-n)):(n=t.clone().add(s+1,"months"),o=(e-i)/(n-i)),-(s+o)||0}z.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";z.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function uE(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function hE(t){if(!this.isValid())return null;var e=t!==!0,s=e?this.clone().utc():this;return s.year()<0||s.year()>9999?tl(s,e?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):pi(Date.prototype.toISOString)?e?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",tl(s,"Z")):tl(s,e?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function fE(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var t="moment",e="",s,i,n,o;return this.isLocal()||(t=this.utcOffset()===0?"moment.utc":"moment.parseZone",e="Z"),s="["+t+'("]',i=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",n="-MM-DD[T]HH:mm:ss.SSS",o=e+'[")]',this.format(s+i+n+o)}function pE(t){t||(t=this.isUtc()?z.defaultFormatUtc:z.defaultFormat);var e=tl(this,t);return this.localeData().postformat(e)}function mE(t,e){return this.isValid()&&(Qs(t)&&t.isValid()||tt(t).isValid())?Ks({to:this,from:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function gE(t){return this.from(tt(),t)}function vE(t,e){return this.isValid()&&(Qs(t)&&t.isValid()||tt(t).isValid())?Ks({from:this,to:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function bE(t){return this.to(tt(),t)}function fy(t){var e;return t===void 0?this._locale._abbr:(e=zi(t),e!=null&&(this._locale=e),this)}var py=Ms("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(t){return t===void 0?this.localeData():this.locale(t)});function my(){return this._locale}var Cl=1e3,To=60*Cl,Il=60*To,gy=(365*400+97)*24*Il;function Fo(t,e){return(t%e+e)%e}function vy(t,e,s){return t<100&&t>=0?new Date(t+400,e,s)-gy:new Date(t,e,s).valueOf()}function by(t,e,s){return t<100&&t>=0?Date.UTC(t+400,e,s)-gy:Date.UTC(t,e,s)}function yE(t){var e,s;if(t=Ls(t),t===void 0||t==="millisecond"||!this.isValid())return this;switch(s=this._isUTC?by:vy,t){case"year":e=s(this.year(),0,1);break;case"quarter":e=s(this.year(),this.month()-this.month()%3,1);break;case"month":e=s(this.year(),this.month(),1);break;case"week":e=s(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":e=s(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":e=s(this.year(),this.month(),this.date());break;case"hour":e=this._d.valueOf(),e-=Fo(e+(this._isUTC?0:this.utcOffset()*To),Il);break;case"minute":e=this._d.valueOf(),e-=Fo(e,To);break;case"second":e=this._d.valueOf(),e-=Fo(e,Cl);break}return this._d.setTime(e),z.updateOffset(this,!0),this}function xE(t){var e,s;if(t=Ls(t),t===void 0||t==="millisecond"||!this.isValid())return this;switch(s=this._isUTC?by:vy,t){case"year":e=s(this.year()+1,0,1)-1;break;case"quarter":e=s(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":e=s(this.year(),this.month()+1,1)-1;break;case"week":e=s(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":e=s(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":e=s(this.year(),this.month(),this.date()+1)-1;break;case"hour":e=this._d.valueOf(),e+=Il-Fo(e+(this._isUTC?0:this.utcOffset()*To),Il)-1;break;case"minute":e=this._d.valueOf(),e+=To-Fo(e,To)-1;break;case"second":e=this._d.valueOf(),e+=Cl-Fo(e,Cl)-1;break}return this._d.setTime(e),z.updateOffset(this,!0),this}function wE(){return this._d.valueOf()-(this._offset||0)*6e4}function $E(){return Math.floor(this.valueOf()/1e3)}function _E(){return new Date(this.valueOf())}function kE(){var t=this;return[t.year(),t.month(),t.date(),t.hour(),t.minute(),t.second(),t.millisecond()]}function SE(){var t=this;return{years:t.year(),months:t.month(),date:t.date(),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds(),milliseconds:t.milliseconds()}}function CE(){return this.isValid()?this.toISOString():null}function IE(){return Th(this)}function TE(){return Ki({},be(this))}function FE(){return be(this).overflow}function DE(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}se("N",0,0,"eraAbbr");se("NN",0,0,"eraAbbr");se("NNN",0,0,"eraAbbr");se("NNNN",0,0,"eraName");se("NNNNN",0,0,"eraNarrow");se("y",["y",1],"yo","eraYear");se("y",["yy",2],0,"eraYear");se("y",["yyy",3],0,"eraYear");se("y",["yyyy",4],0,"eraYear");Z("N",Uh);Z("NN",Uh);Z("NNN",Uh);Z("NNNN",zE);Z("NNNNN",BE);Ue(["N","NN","NNN","NNNN","NNNNN"],function(t,e,s,i){var n=s._locale.erasParse(t,i,s._strict);n?be(s).era=n:be(s).invalidEra=t});Z("y",sr);Z("yy",sr);Z("yyy",sr);Z("yyyy",sr);Z("yo",jE);Ue(["y","yy","yyy","yyyy"],Nt);Ue(["yo"],function(t,e,s,i){var n;s._locale._eraYearOrdinalRegex&&(n=t.match(s._locale._eraYearOrdinalRegex)),s._locale.eraYearOrdinalParse?e[Nt]=s._locale.eraYearOrdinalParse(t,n):e[Nt]=parseInt(t,10)});function RE(t,e){var s,i,n,o=this._eras||zi("en")._eras;for(s=0,i=o.length;s<i;++s){switch(typeof o[s].since){case"string":n=z(o[s].since).startOf("day"),o[s].since=n.valueOf();break}switch(typeof o[s].until){case"undefined":o[s].until=1/0;break;case"string":n=z(o[s].until).startOf("day").valueOf(),o[s].until=n.valueOf();break}}return o}function EE(t,e,s){var i,n,o=this.eras(),r,a,l;for(t=t.toUpperCase(),i=0,n=o.length;i<n;++i)if(r=o[i].name.toUpperCase(),a=o[i].abbr.toUpperCase(),l=o[i].narrow.toUpperCase(),s)switch(e){case"N":case"NN":case"NNN":if(a===t)return o[i];break;case"NNNN":if(r===t)return o[i];break;case"NNNNN":if(l===t)return o[i];break}else if([r,a,l].indexOf(t)>=0)return o[i]}function OE(t,e){var s=t.since<=t.until?1:-1;return e===void 0?z(t.since).year():z(t.since).year()+(e-t.offset)*s}function AE(){var t,e,s,i=this.localeData().eras();for(t=0,e=i.length;t<e;++t)if(s=this.clone().startOf("day").valueOf(),i[t].since<=s&&s<=i[t].until||i[t].until<=s&&s<=i[t].since)return i[t].name;return""}function PE(){var t,e,s,i=this.localeData().eras();for(t=0,e=i.length;t<e;++t)if(s=this.clone().startOf("day").valueOf(),i[t].since<=s&&s<=i[t].until||i[t].until<=s&&s<=i[t].since)return i[t].narrow;return""}function ME(){var t,e,s,i=this.localeData().eras();for(t=0,e=i.length;t<e;++t)if(s=this.clone().startOf("day").valueOf(),i[t].since<=s&&s<=i[t].until||i[t].until<=s&&s<=i[t].since)return i[t].abbr;return""}function LE(){var t,e,s,i,n=this.localeData().eras();for(t=0,e=n.length;t<e;++t)if(s=n[t].since<=n[t].until?1:-1,i=this.clone().startOf("day").valueOf(),n[t].since<=i&&i<=n[t].until||n[t].until<=i&&i<=n[t].since)return(this.year()-z(n[t].since).year())*s+n[t].offset;return this.year()}function VE(t){return Oe(this,"_erasNameRegex")||Yh.call(this),t?this._erasNameRegex:this._erasRegex}function HE(t){return Oe(this,"_erasAbbrRegex")||Yh.call(this),t?this._erasAbbrRegex:this._erasRegex}function NE(t){return Oe(this,"_erasNarrowRegex")||Yh.call(this),t?this._erasNarrowRegex:this._erasRegex}function Uh(t,e){return e.erasAbbrRegex(t)}function zE(t,e){return e.erasNameRegex(t)}function BE(t,e){return e.erasNarrowRegex(t)}function jE(t,e){return e._eraYearOrdinalRegex||sr}function Yh(){var t=[],e=[],s=[],i=[],n,o,r=this.eras();for(n=0,o=r.length;n<o;++n)e.push(hs(r[n].name)),t.push(hs(r[n].abbr)),s.push(hs(r[n].narrow)),i.push(hs(r[n].name)),i.push(hs(r[n].abbr)),i.push(hs(r[n].narrow));this._erasRegex=new RegExp("^("+i.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+e.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+t.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+s.join("|")+")","i")}se(0,["gg",2],0,function(){return this.weekYear()%100});se(0,["GG",2],0,function(){return this.isoWeekYear()%100});function zc(t,e){se(0,[t,t.length],0,e)}zc("gggg","weekYear");zc("ggggg","weekYear");zc("GGGG","isoWeekYear");zc("GGGGG","isoWeekYear");Ut("weekYear","gg");Ut("isoWeekYear","GG");Yt("weekYear",1);Yt("isoWeekYear",1);Z("G",Mc);Z("g",Mc);Z("GG",it,$s);Z("gg",it,$s);Z("GGGG",Ah,Oh);Z("gggg",Ah,Oh);Z("GGGGG",Pc,Oc);Z("ggggg",Pc,Oc);ya(["gggg","ggggg","GGGG","GGGGG"],function(t,e,s,i){e[i.substr(0,2)]=we(t)});ya(["gg","GG"],function(t,e,s,i){e[i]=z.parseTwoDigitYear(t)});function UE(t){return yy.call(this,t,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function YE(t){return yy.call(this,t,this.isoWeek(),this.isoWeekday(),1,4)}function WE(){return Si(this.year(),1,4)}function qE(){return Si(this.isoWeekYear(),1,4)}function GE(){var t=this.localeData()._week;return Si(this.year(),t.dow,t.doy)}function ZE(){var t=this.localeData()._week;return Si(this.weekYear(),t.dow,t.doy)}function yy(t,e,s,i,n){var o;return t==null?ta(this,i,n).year:(o=Si(t,i,n),e>o&&(e=o),XE.call(this,t,e,s,i,n))}function XE(t,e,s,i,n){var o=Jb(t,e,s,i,n),r=ea(o.year,0,o.dayOfYear);return this.year(r.getUTCFullYear()),this.month(r.getUTCMonth()),this.date(r.getUTCDate()),this}se("Q",0,"Qo","quarter");Ut("quarter","Q");Yt("quarter",7);Z("Q",Bb);Ue("Q",function(t,e){e[$i]=(we(t)-1)*3});function QE(t){return t==null?Math.ceil((this.month()+1)/3):this.month((t-1)*3+this.month()%3)}se("D",["DD",2],"Do","date");Ut("date","D");Yt("date",9);Z("D",it);Z("DD",it,$s);Z("Do",function(t,e){return t?e._dayOfMonthOrdinalParse||e._ordinalParse:e._dayOfMonthOrdinalParseLenient});Ue(["D","DD"],ai);Ue("Do",function(t,e){e[ai]=we(t.match(it)[0])});var xy=tr("Date",!0);se("DDD",["DDDD",3],"DDDo","dayOfYear");Ut("dayOfYear","DDD");Yt("dayOfYear",4);Z("DDD",Ac);Z("DDDD",jb);Ue(["DDD","DDDD"],function(t,e,s){s._dayOfYear=we(t)});function JE(t){var e=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return t==null?e:this.add(t-e,"d")}se("m",["mm",2],0,"minute");Ut("minute","m");Yt("minute",14);Z("m",it);Z("mm",it,$s);Ue(["m","mm"],Us);var KE=tr("Minutes",!1);se("s",["ss",2],0,"second");Ut("second","s");Yt("second",15);Z("s",it);Z("ss",it,$s);Ue(["s","ss"],_i);var eO=tr("Seconds",!1);se("S",0,0,function(){return~~(this.millisecond()/100)});se(0,["SS",2],0,function(){return~~(this.millisecond()/10)});se(0,["SSS",3],0,"millisecond");se(0,["SSSS",4],0,function(){return this.millisecond()*10});se(0,["SSSSS",5],0,function(){return this.millisecond()*100});se(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});se(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});se(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});se(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});Ut("millisecond","ms");Yt("millisecond",16);Z("S",Ac,Bb);Z("SS",Ac,$s);Z("SSS",Ac,jb);var en,wy;for(en="SSSS";en.length<=9;en+="S")Z(en,sr);function tO(t,e){e[En]=we(("0."+t)*1e3)}for(en="S";en.length<=9;en+="S")Ue(en,tO);wy=tr("Milliseconds",!1);se("z",0,0,"zoneAbbr");se("zz",0,0,"zoneName");function sO(){return this._isUTC?"UTC":""}function iO(){return this._isUTC?"Coordinated Universal Time":""}var P=va.prototype;P.add=ZR;P.calendar=sE;P.clone=iE;P.diff=dE;P.endOf=xE;P.format=pE;P.from=mE;P.fromNow=gE;P.to=vE;P.toNow=bE;P.get=oD;P.invalidAt=FE;P.isAfter=nE;P.isBefore=oE;P.isBetween=rE;P.isSame=aE;P.isSameOrAfter=lE;P.isSameOrBefore=cE;P.isValid=IE;P.lang=py;P.locale=fy;P.localeData=my;P.max=IR;P.min=CR;P.parsingFlags=TE;P.set=rD;P.startOf=yE;P.subtract=XR;P.toArray=kE;P.toObject=SE;P.toDate=_E;P.toISOString=hE;P.inspect=fE;typeof Symbol<"u"&&Symbol.for!=null&&(P[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});P.toJSON=CE;P.toString=uE;P.unix=$E;P.valueOf=wE;P.creationData=DE;P.eraName=AE;P.eraNarrow=PE;P.eraAbbr=ME;P.eraYear=LE;P.year=Qb;P.isLeapYear=SD;P.weekYear=UE;P.isoWeekYear=YE;P.quarter=P.quarters=QE;P.month=Zb;P.daysInMonth=$D;P.week=P.weeks=RD;P.isoWeek=P.isoWeeks=ED;P.weeksInYear=GE;P.weeksInWeekYear=ZE;P.isoWeeksInYear=WE;P.isoWeeksInISOWeekYear=qE;P.date=xy;P.day=P.days=YD;P.weekday=WD;P.isoWeekday=qD;P.dayOfYear=JE;P.hour=P.hours=eR;P.minute=P.minutes=KE;P.second=P.seconds=eO;P.millisecond=P.milliseconds=wy;P.utcOffset=MR;P.utc=VR;P.local=HR;P.parseZone=NR;P.hasAlignedHourOffset=zR;P.isDST=BR;P.isLocal=UR;P.isUtcOffset=YR;P.isUtc=cy;P.isUTC=cy;P.zoneAbbr=sO;P.zoneName=iO;P.dates=Ms("dates accessor is deprecated. Use date instead.",xy);P.months=Ms("months accessor is deprecated. Use month instead",Zb);P.years=Ms("years accessor is deprecated. Use year instead",Qb);P.zone=Ms("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",LR);P.isDSTShifted=Ms("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",jR);function nO(t){return tt(t*1e3)}function oO(){return tt.apply(null,arguments).parseZone()}function $y(t){return t}var Ae=Dh.prototype;Ae.calendar=YF;Ae.longDateFormat=ZF;Ae.invalidDate=QF;Ae.ordinal=eD;Ae.preparse=$y;Ae.postformat=$y;Ae.relativeTime=sD;Ae.pastFuture=iD;Ae.set=jF;Ae.eras=RE;Ae.erasParse=EE;Ae.erasConvertYear=OE;Ae.erasAbbrRegex=HE;Ae.erasNameRegex=VE;Ae.erasNarrowRegex=NE;Ae.months=bD;Ae.monthsShort=yD;Ae.monthsParse=wD;Ae.monthsRegex=kD;Ae.monthsShortRegex=_D;Ae.week=ID;Ae.firstDayOfYear=DD;Ae.firstDayOfWeek=FD;Ae.weekdays=ND;Ae.weekdaysMin=BD;Ae.weekdaysShort=zD;Ae.weekdaysParse=UD;Ae.weekdaysRegex=GD;Ae.weekdaysShortRegex=ZD;Ae.weekdaysMinRegex=XD;Ae.isPM=JD;Ae.meridiem=tR;function Tl(t,e,s,i){var n=zi(),o=fi().set(i,e);return n[s](o,t)}function _y(t,e,s){if(Di(t)&&(e=t,t=void 0),t=t||"",e!=null)return Tl(t,e,s,"month");var i,n=[];for(i=0;i<12;i++)n[i]=Tl(t,i,s,"month");return n}function Wh(t,e,s,i){typeof t=="boolean"?(Di(e)&&(s=e,e=void 0),e=e||""):(e=t,s=e,t=!1,Di(e)&&(s=e,e=void 0),e=e||"");var n=zi(),o=t?n._week.dow:0,r,a=[];if(s!=null)return Tl(e,(s+o)%7,i,"day");for(r=0;r<7;r++)a[r]=Tl(e,(r+o)%7,i,"day");return a}function rO(t,e){return _y(t,e,"months")}function aO(t,e){return _y(t,e,"monthsShort")}function lO(t,e,s){return Wh(t,e,s,"weekdays")}function cO(t,e,s){return Wh(t,e,s,"weekdaysShort")}function dO(t,e,s){return Wh(t,e,s,"weekdaysMin")}rn("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(t){var e=t%10,s=we(t%100/10)===1?"th":e===1?"st":e===2?"nd":e===3?"rd":"th";return t+s}});z.lang=Ms("moment.lang is deprecated. Use moment.locale instead.",rn);z.langData=Ms("moment.langData is deprecated. Use moment.localeData instead.",zi);var vi=Math.abs;function uO(){var t=this._data;return this._milliseconds=vi(this._milliseconds),this._days=vi(this._days),this._months=vi(this._months),t.milliseconds=vi(t.milliseconds),t.seconds=vi(t.seconds),t.minutes=vi(t.minutes),t.hours=vi(t.hours),t.months=vi(t.months),t.years=vi(t.years),this}function ky(t,e,s,i){var n=Ks(e,s);return t._milliseconds+=i*n._milliseconds,t._days+=i*n._days,t._months+=i*n._months,t._bubble()}function hO(t,e){return ky(this,t,e,1)}function fO(t,e){return ky(this,t,e,-1)}function dm(t){return t<0?Math.floor(t):Math.ceil(t)}function pO(){var t=this._milliseconds,e=this._days,s=this._months,i=this._data,n,o,r,a,l;return t>=0&&e>=0&&s>=0||t<=0&&e<=0&&s<=0||(t+=dm(hu(s)+e)*864e5,e=0,s=0),i.milliseconds=t%1e3,n=Is(t/1e3),i.seconds=n%60,o=Is(n/60),i.minutes=o%60,r=Is(o/60),i.hours=r%24,e+=Is(r/24),l=Is(Sy(e)),s+=l,e-=dm(hu(l)),a=Is(s/12),s%=12,i.days=e,i.months=s,i.years=a,this}function Sy(t){return t*4800/146097}function hu(t){return t*146097/4800}function mO(t){if(!this.isValid())return NaN;var e,s,i=this._milliseconds;if(t=Ls(t),t==="month"||t==="quarter"||t==="year")switch(e=this._days+i/864e5,s=this._months+Sy(e),t){case"month":return s;case"quarter":return s/3;case"year":return s/12}else switch(e=this._days+Math.round(hu(this._months)),t){case"week":return e/7+i/6048e5;case"day":return e+i/864e5;case"hour":return e*24+i/36e5;case"minute":return e*1440+i/6e4;case"second":return e*86400+i/1e3;case"millisecond":return Math.floor(e*864e5)+i;default:throw new Error("Unknown unit "+t)}}function gO(){return this.isValid()?this._milliseconds+this._days*864e5+this._months%12*2592e6+we(this._months/12)*31536e6:NaN}function Bi(t){return function(){return this.as(t)}}var vO=Bi("ms"),bO=Bi("s"),yO=Bi("m"),xO=Bi("h"),wO=Bi("d"),$O=Bi("w"),_O=Bi("M"),kO=Bi("Q"),SO=Bi("y");function CO(){return Ks(this)}function IO(t){return t=Ls(t),this.isValid()?this[t+"s"]():NaN}function eo(t){return function(){return this.isValid()?this._data[t]:NaN}}var TO=eo("milliseconds"),FO=eo("seconds"),DO=eo("minutes"),RO=eo("hours"),EO=eo("days"),OO=eo("months"),AO=eo("years");function PO(){return Is(this.days()/7)}var yi=Math.round,vo={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function MO(t,e,s,i,n){return n.relativeTime(e||1,!!s,t,i)}function LO(t,e,s,i){var n=Ks(t).abs(),o=yi(n.as("s")),r=yi(n.as("m")),a=yi(n.as("h")),l=yi(n.as("d")),c=yi(n.as("M")),d=yi(n.as("w")),u=yi(n.as("y")),f=o<=s.ss&&["s",o]||o<s.s&&["ss",o]||r<=1&&["m"]||r<s.m&&["mm",r]||a<=1&&["h"]||a<s.h&&["hh",a]||l<=1&&["d"]||l<s.d&&["dd",l];return s.w!=null&&(f=f||d<=1&&["w"]||d<s.w&&["ww",d]),f=f||c<=1&&["M"]||c<s.M&&["MM",c]||u<=1&&["y"]||["yy",u],f[2]=e,f[3]=+t>0,f[4]=i,MO.apply(null,f)}function VO(t){return t===void 0?yi:typeof t=="function"?(yi=t,!0):!1}function HO(t,e){return vo[t]===void 0?!1:e===void 0?vo[t]:(vo[t]=e,t==="s"&&(vo.ss=e-1),!0)}function NO(t,e){if(!this.isValid())return this.localeData().invalidDate();var s=!1,i=vo,n,o;return typeof t=="object"&&(e=t,t=!1),typeof t=="boolean"&&(s=t),typeof e=="object"&&(i=Object.assign({},vo,e),e.s!=null&&e.ss==null&&(i.ss=e.s-1)),n=this.localeData(),o=LO(this,!s,i,n),s&&(o=n.pastFuture(+this,o)),n.postformat(o)}var Id=Math.abs;function lo(t){return(t>0)-(t<0)||+t}function Bc(){if(!this.isValid())return this.localeData().invalidDate();var t=Id(this._milliseconds)/1e3,e=Id(this._days),s=Id(this._months),i,n,o,r,a=this.asSeconds(),l,c,d,u;return a?(i=Is(t/60),n=Is(i/60),t%=60,i%=60,o=Is(s/12),s%=12,r=t?t.toFixed(3).replace(/\.?0+$/,""):"",l=a<0?"-":"",c=lo(this._months)!==lo(a)?"-":"",d=lo(this._days)!==lo(a)?"-":"",u=lo(this._milliseconds)!==lo(a)?"-":"",l+"P"+(o?c+o+"Y":"")+(s?c+s+"M":"")+(e?d+e+"D":"")+(n||i||t?"T":"")+(n?u+n+"H":"")+(i?u+i+"M":"")+(t?u+r+"S":"")):"P0D"}var Te=Nc.prototype;Te.isValid=ER;Te.abs=uO;Te.add=hO;Te.subtract=fO;Te.as=mO;Te.asMilliseconds=vO;Te.asSeconds=bO;Te.asMinutes=yO;Te.asHours=xO;Te.asDays=wO;Te.asWeeks=$O;Te.asMonths=_O;Te.asQuarters=kO;Te.asYears=SO;Te.valueOf=gO;Te._bubble=pO;Te.clone=CO;Te.get=IO;Te.milliseconds=TO;Te.seconds=FO;Te.minutes=DO;Te.hours=RO;Te.days=EO;Te.weeks=PO;Te.months=OO;Te.years=AO;Te.humanize=NO;Te.toISOString=Bc;Te.toString=Bc;Te.toJSON=Bc;Te.locale=fy;Te.localeData=my;Te.toIsoString=Ms("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Bc);Te.lang=py;se("X",0,0,"unix");se("x",0,0,"valueOf");Z("x",Mc);Z("X",lD);Ue("X",function(t,e,s){s._d=new Date(parseFloat(t)*1e3)});Ue("x",function(t,e,s){s._d=new Date(we(t))});//! moment.js
z.version="2.29.4";zF(tt);z.fn=P;z.min=TR;z.max=FR;z.now=DR;z.utc=fi;z.unix=nO;z.months=rO;z.isDate=ga;z.locale=rn;z.invalid=Rc;z.duration=Ks;z.isMoment=Qs;z.weekdays=lO;z.parseZone=oO;z.localeData=zi;z.isDuration=sl;z.monthsShort=aO;z.weekdaysMin=dO;z.defineLocale=Vh;z.updateLocale=oR;z.locales=rR;z.weekdaysShort=cO;z.normalizeUnits=Ls;z.relativeTimeRounding=VO;z.relativeTimeThreshold=HO;z.calendarFormat=tE;z.prototype=P;z.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};const um=ve({__name:"Time",props:{format:{}},setup(t){const e=t,s=Ke(z().format(e.format)),i=()=>{s.value=z().format(e.format)};var n=void 0;return zt(()=>{n=setInterval(i,1e3)}),ws(()=>{clearInterval(n)}),(o,r)=>rt(s.value)}}),zO={class:"text-center mt-16 text-white"},BO=ve({__name:"ScreenSaver",props:{setIsTyped:{type:Function}},setup(t){const e=t,s=Ke(!1),i=async()=>new Promise(()=>setTimeout(()=>{e.setIsTyped(!0)},300)),n=async()=>{s.value=!0,await i()},o=Jn({start:0,end:0,cur:0,curMax:0,active:!1}),r=d=>{o.active=!0,o.start=d.screenY},a=d=>{o.active=!1,o.end=d.screenY,o.cur=0},l=d=>{o.active&&(o.start>d.screenY?o.cur=o.start-d.screenY:(o.curMax=d.screenY,o.cur=0,o.start=o.curMax))},c=async d=>{a(d),o.start-o.end>=d.view.innerHeight/3&&(s.value=!0,await i())};return zt(()=>{window.addEventListener("mousedown",r),window.addEventListener("mousemove",l),window.addEventListener("mouseup",c),window.addEventListener("keypress",n)}),ws(()=>{window.removeEventListener("dragstart",r),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",c),window.removeEventListener("keypress",n)}),(d,u)=>{const f=ce("DisplayLarge"),b=ce("TitleLarge");return W(),ue("div",{graggable:"true",class:Ot([[s.value?"-translate-y-[10%] opacity-0 transition-all":"",o.active?"":"transition-all"],"relative left-0 full-screen grid justify-center select-none"]),style:un({top:-o.cur/8+"px"})},[F("div",zO,[T(f,null,{default:A(()=>[T(um,{format:"HH:mm"})]),_:1}),T(b,null,{default:A(()=>[T(um,{format:"MM-DD-YYYY"})]),_:1})])],6)}}}),jc=Ch("user_store",{state:()=>({accountState:{name:"t",password:"p"},isLogout:!0}),getters:{getUserAccountState:t=>t.accountState,getUserIsLogout:t=>t.isLogout},actions:{setIsLogout(t){this.isLogout=t}},persist:!0}),jO={},UO={class:"avatar-panel bg-black/25 backdrop-blur-lg text-white flex-none font-semibold text-8xl grid place-content-center"};function YO(t,e){const s=ce("Icon"),i=ce("IconButton");return W(),ue("div",UO,[T(i,{"has-filled":"",class:"w-full h-full scale-[4] icon-filled"},{default:A(()=>[T(s,null,{default:A(()=>[He(" person ")]),_:1})]),_:1})])}const WO=Pt(jO,[["render",YO]]),qO={class:"drop-shadow-md shadow-black text-4xl text-white"},GO=ve({__name:"ProfileName",setup(t){const e=jc();return(s,i)=>(W(),ue("div",qO,rt(re(e).accountState.name),1))}}),ei=Ch("system_store",{state:()=>({brightness:100,isNightlight:!1,isLocked:!0,needShutdown:!1,isShutdown:!1,starts:{isOpening:!1}}),getters:{getSystemBrightness:t=>t.brightness,getSystemIsNightlight:t=>t.isNightlight,getSystemIsLocked:t=>t.isLocked,getSystemNeedShutdown:t=>t.needShutdown,getSystemIsShutdown:t=>t.isShutdown,getSystemStarts:t=>t.starts},actions:{setBrightness(t){this.brightness=t},setIsNightlight(t){this.isNightlight=t},toggleIsNightlight(){this.isNightlight=!this.isNightlight},setIsLocked(t){this.isLocked=t},setNeedShutdown(t){this.needShutdown=t},setIsShutdown(t){this.isShutdown=t},setStarts(t){this.starts=t}},persist:!0}),ZO={class:"relative full-screen flex flex-col gap-16 items-center justify-center"},XO={class:"flex items-center relative"},QO=["onKeyup"],JO={key:0},KO={key:0,type:"label-large"},eA={key:1,type:"label-large"},tA={key:1},sA=ve({__name:"Login",setup(t){const e=ei(),s=jc(),i=Jn({password:"",pending:!1,isError:!1,isTyped:!1}),n=async c=>{i.pending=c},o=async c=>{i.isError=c},r=async c=>{i.isTyped=c},a=async c=>await new Promise(()=>setTimeout(()=>{c()},500)),l=async()=>{r(!0),n(!0),o(!1),i.password===s.accountState.password&&await a(()=>{n(!1),s.setIsLogout(!1),e.setIsLocked(!1)}),await a(()=>{o(!0),n(!1)})};return(c,d)=>{const u=ce("Icon");return W(),ue("div",ZO,[T(WO),T(GO),F("form",XO,[F("fluent-text-field",{autofocus:"",type:"password",onInput:d[0]||(d[0]=f=>i.password=f.target.value),appearance:"filled",onKeyup:mI(l,["enter"]),placeholder:"Password"},null,40,QO),F("fluent-button",{onClick:l,class:"absolute right-0 z-[1] p-0.5 grid place-content-center"},[T(u,null,{default:A(()=>[He("arrow_forward")]),_:1})])]),i.pending?(W(),ue("fluent-progress-ring",tA)):(W(),ue("div",JO,[i.isError?(W(),ue("md-text",KO,"Typed password is incorrect")):re(e).getSystemIsLocked&&i.isTyped?(W(),ue("md-text",eA,"Welcome")):Jd("",!0)]))])}}}),iA={class:"relative full-screen overflow-clip"},nA=ve({__name:"LockScreen",setup(t){const e=Ke(!1),s=o=>{e.value=o};var i=void 0;const n=()=>{clearTimeout(i),i=setTimeout(()=>{s(!1)},1e4)};return zt(()=>{window.addEventListener("mousemove",n),window.addEventListener("keypress",n)}),ws(()=>{window.removeEventListener("mousemove",n),window.removeEventListener("keypress",n)}),(o,r)=>(W(),ue("div",iA,[F("div",{class:Ot([[e.value?"blur scale-125 brightness-75":""],"absolute full-screen transition-all duration-500 lock-screen-wallpaper"])},null,2),e.value?(W(),lt(sA,{key:1})):(W(),lt(BO,{key:0,"set-is-typed":s}))]))}}),oA={},rA={placeholder:"Type here to search"};function aA(t,e){return W(),ue("fluent-search",rA)}const lA=Pt(oA,[["render",aA]]);function Do(t,e,...s){if(t in e){let n=e[t];return typeof n=="function"?n(...s):n}let i=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(n=>`"${n}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,Do),i}var fu=(t=>(t[t.None=0]="None",t[t.RenderStrategy=1]="RenderStrategy",t[t.Static=2]="Static",t))(fu||{}),cA=(t=>(t[t.Unmount=0]="Unmount",t[t.Hidden=1]="Hidden",t))(cA||{});function ir({visible:t=!0,features:e=0,ourProps:s,theirProps:i,...n}){var o;let r=Iy(i,s),a=Object.assign(n,{props:r});if(t||e&2&&r.static)return Td(a);if(e&1){let l=(o=r.unmount)==null||o?0:1;return Do(l,{0(){return null},1(){return Td({...n,props:{...r,hidden:!0,style:{display:"none"}}})}})}return Td(a)}function Td({props:t,attrs:e,slots:s,slot:i,name:n}){var o,r;let{as:a,...l}=Ty(t,["unmount","static"]),c=(o=s.default)==null?void 0:o.call(s,i),d={};if(i){let u=!1,f=[];for(let[b,w]of Object.entries(i))typeof w=="boolean"&&(u=!0),w===!0&&f.push(b);u&&(d["data-headlessui-state"]=f.join(" "))}if(a==="template"){if(c=Cy(c??[]),Object.keys(l).length>0||Object.keys(e).length>0){let[u,...f]=c??[];if(!dA(u)||f.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${n} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(l).concat(Object.keys(e)).map(x=>x.trim()).filter((x,_,R)=>R.indexOf(x)===_).sort((x,_)=>x.localeCompare(_)).map(x=>`  - ${x}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(x=>`  - ${x}`).join(`
`)].join(`
`));let b=Iy((r=u.props)!=null?r:{},l),w=Bn(u,b);for(let x in b)x.startsWith("on")&&(w.props||(w.props={}),w.props[x]=b[x]);return w}return Array.isArray(c)&&c.length===1?c[0]:c}return Fi(a,Object.assign({},l,d),{default:()=>c})}function Cy(t){return t.flatMap(e=>e.type===ft?Cy(e.children):[e])}function Iy(...t){if(t.length===0)return{};if(t.length===1)return t[0];let e={},s={};for(let i of t)for(let n in i)n.startsWith("on")&&typeof i[n]=="function"?(s[n]!=null||(s[n]=[]),s[n].push(i[n])):e[n]=i[n];if(e.disabled||e["aria-disabled"])return Object.assign(e,Object.fromEntries(Object.keys(s).map(i=>[i,void 0])));for(let i in s)Object.assign(e,{[i](n,...o){let r=s[i];for(let a of r){if(n instanceof Event&&n.defaultPrevented)return;a(n,...o)}}});return e}function Ty(t,e=[]){let s=Object.assign({},t);for(let i of e)i in s&&delete s[i];return s}function dA(t){return t==null?!1:typeof t.type=="string"||typeof t.type=="object"||typeof t.type=="function"}let uA=0;function hA(){return++uA}function Fy(){return hA()}var Hs=(t=>(t.Space=" ",t.Enter="Enter",t.Escape="Escape",t.Backspace="Backspace",t.Delete="Delete",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.Home="Home",t.End="End",t.PageUp="PageUp",t.PageDown="PageDown",t.Tab="Tab",t))(Hs||{});function $t(t){var e;return t==null||t.value==null?null:(e=t.value.$el)!=null?e:t.value}function hm(t,e){if(t)return t;let s=e??"button";if(typeof s=="string"&&s.toLowerCase()==="button")return"button"}function fA(t,e){let s=Ke(hm(t.value.type,t.value.as));return zt(()=>{s.value=hm(t.value.type,t.value.as)}),Yv(()=>{var i;s.value||$t(e)&&$t(e)instanceof HTMLButtonElement&&!((i=$t(e))!=null&&i.hasAttribute("type"))&&(s.value="button")}),s}var pA=Object.defineProperty,mA=(t,e,s)=>e in t?pA(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,fm=(t,e,s)=>(mA(t,typeof e!="symbol"?e+"":e,s),s);class gA{constructor(){fm(this,"current",this.detect()),fm(this,"currentId",0)}set(e){this.current!==e&&(this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let vA=new gA;function bA(t){if(vA.isServer)return null;if(t instanceof Node)return t.ownerDocument;if(t!=null&&t.hasOwnProperty("value")){let e=$t(t);if(e)return e.ownerDocument}return document}let yA=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");var Ns=(t=>(t[t.First=1]="First",t[t.Previous=2]="Previous",t[t.Next=4]="Next",t[t.Last=8]="Last",t[t.WrapAround=16]="WrapAround",t[t.NoScroll=32]="NoScroll",t))(Ns||{}),br=(t=>(t[t.Error=0]="Error",t[t.Overflow=1]="Overflow",t[t.Success=2]="Success",t[t.Underflow=3]="Underflow",t))(br||{}),xA=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(xA||{});function wA(t=document.body){return t==null?[]:Array.from(t.querySelectorAll(yA)).sort((e,s)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(s.tabIndex||Number.MAX_SAFE_INTEGER)))}var $A=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))($A||{}),_A=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(_A||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",t=>{t.metaKey||t.altKey||t.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",t=>{t.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:t.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));let kA=["textarea","input"].join(",");function SA(t){var e,s;return(s=(e=t==null?void 0:t.matches)==null?void 0:e.call(t,kA))!=null?s:!1}function po(t,e=s=>s){return t.slice().sort((s,i)=>{let n=e(s),o=e(i);if(n===null||o===null)return 0;let r=n.compareDocumentPosition(o);return r&Node.DOCUMENT_POSITION_FOLLOWING?-1:r&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function co(t,e,{sorted:s=!0,relativeTo:i=null,skipElements:n=[]}={}){var o;let r=(o=Array.isArray(t)?t.length>0?t[0].ownerDocument:document:t==null?void 0:t.ownerDocument)!=null?o:document,a=Array.isArray(t)?s?po(t):t:wA(t);n.length>0&&a.length>1&&(a=a.filter(w=>!n.includes(w))),i=i??r.activeElement;let l=(()=>{if(e&5)return 1;if(e&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(e&1)return 0;if(e&2)return Math.max(0,a.indexOf(i))-1;if(e&4)return Math.max(0,a.indexOf(i))+1;if(e&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=e&32?{preventScroll:!0}:{},u=0,f=a.length,b;do{if(u>=f||u+f<=0)return 0;let w=c+u;if(e&16)w=(w+f)%f;else{if(w<0)return 3;if(w>=f)return 1}b=a[w],b==null||b.focus(d),u+=l}while(b!==r.activeElement);return e&6&&SA(b)&&b.select(),2}var Dy=(t=>(t[t.None=1]="None",t[t.Focusable=2]="Focusable",t[t.Hidden=4]="Hidden",t))(Dy||{});let Ry=ve({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(t,{slots:e,attrs:s}){return()=>{let{features:i,...n}=t,o={"aria-hidden":(i&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(i&4)===4&&(i&2)!==2&&{display:"none"}}};return ir({ourProps:o,theirProps:n,slot:{},attrs:s,slots:e,name:"Hidden"})}}});function CA(t){typeof queueMicrotask=="function"?queueMicrotask(t):Promise.resolve().then(t).catch(e=>setTimeout(()=>{throw e}))}let IA=ve({props:{onFocus:{type:Function,required:!0}},setup(t){let e=Ke(!0);return()=>e.value?Fi(Ry,{as:"button",type:"button",features:Dy.Focusable,onFocus(s){s.preventDefault();let i,n=50;function o(){var r;if(n--<=0){i&&cancelAnimationFrame(i);return}if((r=t.onFocus)!=null&&r.call(t)){e.value=!1,cancelAnimationFrame(i);return}i=requestAnimationFrame(o)}i=requestAnimationFrame(o)}}):null}});var TA=(t=>(t[t.Forwards=0]="Forwards",t[t.Backwards=1]="Backwards",t))(TA||{}),FA=(t=>(t[t.Less=-1]="Less",t[t.Equal=0]="Equal",t[t.Greater=1]="Greater",t))(FA||{});let Ey=Symbol("TabsContext");function xa(t){let e=ps(Ey,null);if(e===null){let s=new Error(`<${t} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,xa),s}return e}let qh=Symbol("TabsSSRContext"),Oy=ve({name:"TabGroup",emits:{change:t=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(t,{slots:e,attrs:s,emit:i}){var n;let o=Ke((n=t.selectedIndex)!=null?n:t.defaultIndex),r=Ke([]),a=Ke([]),l=Ge(()=>t.selectedIndex!==null),c=Ge(()=>l.value?t.selectedIndex:o.value);function d(x){var _;let R=po(u.tabs.value,$t),H=po(u.panels.value,$t),ie=R.filter(U=>{var ge;return!((ge=$t(U))!=null&&ge.hasAttribute("disabled"))});if(x<0||x>R.length-1){let U=Do(o.value===null?0:Math.sign(x-o.value),{[-1]:()=>1,0:()=>Do(Math.sign(x),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});o.value=Do(U,{0:()=>R.indexOf(ie[0]),1:()=>R.indexOf(ie[ie.length-1])}),u.tabs.value=R,u.panels.value=H}else{let U=R.slice(0,x),ge=[...R.slice(x),...U].find(ct=>ie.includes(ct));if(!ge)return;let Fe=(_=R.indexOf(ge))!=null?_:u.selectedIndex.value;Fe===-1&&(Fe=u.selectedIndex.value),o.value=Fe,u.tabs.value=R,u.panels.value=H}}let u={selectedIndex:Ge(()=>{var x,_;return(_=(x=o.value)!=null?x:t.defaultIndex)!=null?_:null}),orientation:Ge(()=>t.vertical?"vertical":"horizontal"),activation:Ge(()=>t.manual?"manual":"auto"),tabs:r,panels:a,setSelectedIndex(x){c.value!==x&&i("change",x),l.value||d(x)},registerTab(x){var _;if(r.value.includes(x))return;let R=r.value[o.value];r.value.push(x),r.value=po(r.value,$t);let H=(_=r.value.indexOf(R))!=null?_:o.value;H!==-1&&(o.value=H)},unregisterTab(x){let _=r.value.indexOf(x);_!==-1&&r.value.splice(_,1)},registerPanel(x){a.value.includes(x)||(a.value.push(x),a.value=po(a.value,$t))},unregisterPanel(x){let _=a.value.indexOf(x);_!==-1&&a.value.splice(_,1)}};Co(Ey,u);let f=Ke({tabs:[],panels:[]}),b=Ke(!1);zt(()=>{b.value=!0}),Co(qh,Ge(()=>b.value?null:f.value));let w=Ge(()=>t.selectedIndex);return zt(()=>{ki([w],()=>{var x;return d((x=t.selectedIndex)!=null?x:t.defaultIndex)},{immediate:!0})}),Yv(()=>{if(!l.value||c.value==null||u.tabs.value.length<=0)return;let x=po(u.tabs.value,$t);x.some((_,R)=>$t(u.tabs.value[R])!==$t(_))&&u.setSelectedIndex(x.findIndex(_=>$t(_)===$t(u.tabs.value[c.value])))}),()=>{let x={selectedIndex:o.value};return Fi(ft,[r.value.length<=0&&Fi(IA,{onFocus:()=>{for(let _ of r.value){let R=$t(_);if((R==null?void 0:R.tabIndex)===0)return R.focus(),!0}return!1}}),ir({theirProps:{...s,...Ty(t,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:x,slots:e,attrs:s,name:"TabGroup"})])}}}),Ay=ve({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(t,{attrs:e,slots:s}){let i=xa("TabList");return()=>{let n={selectedIndex:i.selectedIndex.value},o={role:"tablist","aria-orientation":i.orientation.value};return ir({ourProps:o,theirProps:t,slot:n,attrs:e,slots:s,name:"TabList"})}}}),pu=ve({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-tabs-tab-${Fy()}`}},setup(t,{attrs:e,slots:s,expose:i}){let n=xa("Tab"),o=Ke(null);i({el:o,$el:o}),zt(()=>n.registerTab(o)),ws(()=>n.unregisterTab(o));let r=ps(qh),a=Ge(()=>{if(r.value){let _=r.value.tabs.indexOf(t.id);return _===-1?r.value.tabs.push(t.id)-1:_}return-1}),l=Ge(()=>{let _=n.tabs.value.indexOf(o);return _===-1?a.value:_}),c=Ge(()=>l.value===n.selectedIndex.value);function d(_){var R;let H=_();if(H===br.Success&&n.activation.value==="auto"){let ie=(R=bA(o))==null?void 0:R.activeElement,U=n.tabs.value.findIndex(ge=>$t(ge)===ie);U!==-1&&n.setSelectedIndex(U)}return H}function u(_){let R=n.tabs.value.map(H=>$t(H)).filter(Boolean);if(_.key===Hs.Space||_.key===Hs.Enter){_.preventDefault(),_.stopPropagation(),n.setSelectedIndex(l.value);return}switch(_.key){case Hs.Home:case Hs.PageUp:return _.preventDefault(),_.stopPropagation(),d(()=>co(R,Ns.First));case Hs.End:case Hs.PageDown:return _.preventDefault(),_.stopPropagation(),d(()=>co(R,Ns.Last))}if(d(()=>Do(n.orientation.value,{vertical(){return _.key===Hs.ArrowUp?co(R,Ns.Previous|Ns.WrapAround):_.key===Hs.ArrowDown?co(R,Ns.Next|Ns.WrapAround):br.Error},horizontal(){return _.key===Hs.ArrowLeft?co(R,Ns.Previous|Ns.WrapAround):_.key===Hs.ArrowRight?co(R,Ns.Next|Ns.WrapAround):br.Error}}))===br.Success)return _.preventDefault()}let f=Ke(!1);function b(){var _;f.value||(f.value=!0,!t.disabled&&((_=$t(o))==null||_.focus(),n.setSelectedIndex(l.value),CA(()=>{f.value=!1})))}function w(_){_.preventDefault()}let x=fA(Ge(()=>({as:t.as,type:e.type})),o);return()=>{var _;let R={selected:c.value},{id:H,...ie}=t,U={ref:o,onKeydown:u,onMousedown:w,onClick:b,id:H,role:"tab",type:x.value,"aria-controls":(_=$t(n.panels.value[l.value]))==null?void 0:_.id,"aria-selected":c.value,tabIndex:c.value?0:-1,disabled:t.disabled?!0:void 0};return ir({ourProps:U,theirProps:ie,slot:R,attrs:e,slots:s,name:"Tab"})}}}),Py=ve({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(t,{slots:e,attrs:s}){let i=xa("TabPanels");return()=>{let n={selectedIndex:i.selectedIndex.value};return ir({theirProps:t,ourProps:{},slot:n,attrs:s,slots:e,name:"TabPanels"})}}}),bo=ve({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-tabs-panel-${Fy()}`},tabIndex:{type:Number,default:0}},setup(t,{attrs:e,slots:s,expose:i}){let n=xa("TabPanel"),o=Ke(null);i({el:o,$el:o}),zt(()=>n.registerPanel(o)),ws(()=>n.unregisterPanel(o));let r=ps(qh),a=Ge(()=>{if(r.value){let d=r.value.panels.indexOf(t.id);return d===-1?r.value.panels.push(t.id)-1:d}return-1}),l=Ge(()=>{let d=n.panels.value.indexOf(o);return d===-1?a.value:d}),c=Ge(()=>l.value===n.selectedIndex.value);return()=>{var d;let u={selected:c.value},{id:f,tabIndex:b,...w}=t,x={ref:o,id:f,role:"tabpanel","aria-labelledby":(d=$t(n.tabs.value[l.value]))==null?void 0:d.id,tabIndex:c.value?b:-1};return!c.value&&t.unmount&&!t.static?Fi(Ry,{as:"span",...x}):ir({ourProps:x,theirProps:w,slot:u,attrs:e,slots:s,features:fu.Static|fu.RenderStrategy,visible:c.value,name:"TabPanel"})}}});const DA=["data-active","onClick"],RA={class:"text-3xl font-semibold mb-4"},EA={class:"bg-white/75 w-full h-full rounded-container"},OA=ve({__name:"Settings",setup(t){const e=(n,o)=>({label:n,icon:o}),s=[e("Account","person"),e("Personalization","brush"),e("Gaming","sports_esports"),e("Windows Update","update")],i=Ke("Account");return(n,o)=>{const r=ce("Icon"),a=ce("FlexLayout"),l=ce("PageLayout");return W(),lt(l,null,{default:A(()=>[T(a,{class:"h-full gap-1"},{default:A(()=>[T(re(Oy),null,{default:A(()=>[T(re(Ay),{as:"div",class:"setting-list flex flex-col flex-none gap-2"},{default:A(()=>[(W(),ue(ft,null,Kn(s,(c,d)=>T(re(pu),{key:d,as:"template"},{default:A(({selected:u})=>[F("div",{"data-active":u,onClick:f=>i.value=c.label,class:"outline-none"},[T(r,null,{default:A(()=>[He(rt(c.icon),1)]),_:2},1024),He(" "+rt(c.label),1)],8,DA)]),_:2},1024)),64))]),_:1}),T(re(Py),{as:"div",class:"flex flex-col w-full h-full"},{default:A(()=>[F("h1",RA,rt(i.value),1),F("div",EA,[T(re(bo),null,{default:A(()=>[He("1")]),_:1}),T(re(bo),null,{default:A(()=>[He("2")]),_:1}),T(re(bo),null,{default:A(()=>[He("3")]),_:1}),T(re(bo),null,{default:A(()=>[He("4")]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})}}});var AA=0;function PA(){return AA++}function MA(t,e={maximizable:!0,minimizable:!0,fullscreen:!1},s={runningInBackground:!1,processId:PA()}){var i,n,o,r;return{window:{info:{title:t.info.title,icon:t.info.icon,activeZIndex:s.processId},position:{x:((i=t.position)==null?void 0:i.x)||0,y:((n=t.position)==null?void 0:n.y)||0},size:{width:((o=t.size)==null?void 0:o.width)||400,height:((r=t.size)==null?void 0:r.height)||300}},accessibility:{maximizable:e.maximizable,minimizable:e.minimizable,focus:!1,active:!1,maximize:!1,minimize:!1,fullscreen:e.fullscreen},process:{runningInBackground:s.runningInBackground,processId:s.processId}}}const LA={class:"flex-none select-none w-full h-8 bg-white/75 backdrop-blur-lg"},VA={class:"w-full h-full flex items-center justify-between px-1"},HA={class:"flex-none h-full aspect-square scale-75 grid place-content-center"},NA={class:"w-full whitespace-nowrap overflow-clip"},zA={class:"flex-none w-fit h-full flex items-center justify-end"},BA={class:"relative w-full h-full backdrop-blur-lg bg-white/75 overflow-auto"},jA=ve({__name:"WindowTemplate",props:{getProcessStateInstance:{type:Function}},emits:["close","maximize","minimize","focus","unfocus","active","inactive","fullscreen","unFullscreen","gragwindow","changeWindowSize"],setup(t,{emit:e}){const s=t,i=to(),n=()=>{i.cleanActive(),i.cleanFocus(),e("focus"),e("active"),i.setTopZIndex(i.getProcessByProcessId(s.getProcessStateInstance().process.processId))};var o=[];const r=a=>{if(s.getProcessStateInstance().accessibility.active){if(o.length===0){o[0]=a.code;return}else o.length===1?o[1]=a.code:a.code!==o[1]&&(o.shift(),o[1]=a.code);o=Array.from(new Set(o)),o.length===2&&["ShiftLeft","ShiftRight"].includes(o[0])&&(o[1]==="KeyK"?s.getProcessStateInstance().accessibility.fullscreen?e("unFullscreen"):e("fullscreen"):o[1]==="ArrowUp"?e("maximize"):o[1]==="ArrowDown"?e("minimize"):o[1]==="F4"&&e("close"),o=[])}};return zt(()=>{n(),document.addEventListener("keyup",r)}),ws(()=>{document.removeEventListener("keyup",r)}),(a,l)=>{const c=ce("Icon"),d=ce("IconButton"),u=ce("FlexLayout");return W(),ue("div",{ref:"windowRef",onMousedown:n,onMouseover:l[4]||(l[4]=f=>e("focus")),onMouseout:l[5]||(l[5]=f=>e("unfocus")),class:Ot(["select-none fixed overflow-hidden transition-all active:transition-none",[s.getProcessStateInstance().accessibility.active?"shadow-lg":"",s.getProcessStateInstance().accessibility.minimize?"hidden-window ":"open-window",s.getProcessStateInstance().accessibility.fullscreen?"":"resize"]]),style:un({left:s.getProcessStateInstance().accessibility.maximize?"0":s.getProcessStateInstance().window.position.x+"px",top:s.getProcessStateInstance().accessibility.maximize?"0":s.getProcessStateInstance().window.position.y+"px",width:s.getProcessStateInstance().accessibility.maximize?"100%":s.getProcessStateInstance().window.size.width+"px",height:s.getProcessStateInstance().accessibility.maximize?"100%":s.getProcessStateInstance().window.size.height+"px","z-index":s.getProcessStateInstance().accessibility.fullscreen?"999":s.getProcessStateInstance().window.info.activeZIndex+10,"padding-bottom":s.getProcessStateInstance().accessibility.maximize?s.getProcessStateInstance().accessibility.fullscreen?"0":"3rem":"0"})},[T(u,{class:"rounded-container w-full h-full flex-col overflow-clip border"},{default:A(()=>[Ko(F("header",LA,[F("div",VA,[F("div",{onMousedown:l[0]||(l[0]=f=>e("gragwindow",f)),class:"h-full flex items-center justify-start w-full text-ellipsis overflow-clip"},[F("div",HA,[T(c,null,{default:A(()=>[He(rt(s.getProcessStateInstance().window.info.icon),1)]),_:1})]),F("h1",NA,rt(s.getProcessStateInstance().window.info.title),1)],32),F("nav",zA,[s.getProcessStateInstance().accessibility.minimizable?(W(),lt(d,{key:0,onClick:l[1]||(l[1]=f=>e("minimize")),"has-hover":"","has-active":""},{default:A(()=>[T(c,{class:"scale-75"},{default:A(()=>[He("minimize")]),_:1})]),_:1})):Jd("",!0),s.getProcessStateInstance().accessibility.maximizable?(W(),lt(d,{key:1,onClick:l[2]||(l[2]=f=>e("maximize")),"has-hover":"","has-active":""},{default:A(()=>[T(c,{class:"scale-75"},{default:A(()=>[He("check_box_outline_blank")]),_:1})]),_:1})):Jd("",!0),T(d,{onClick:l[3]||(l[3]=f=>e("close")),"has-hover":"","has-active":"",type:"error"},{default:A(()=>[T(c,{class:"scale-75"},{default:A(()=>[He("close")]),_:1})]),_:1})])])],512),[[er,!s.getProcessStateInstance().accessibility.fullscreen]]),F("main",BA,[os(a.$slots,"default")])]),_:3})],38)}}}),UA=()=>document.getElementById("window-workspace").appendChild(document.createElement("div")),YA=t=>{const e=UA(),s=Ic(t);return s.use(Fb),{mount:()=>{s.mount(e)},unmount:()=>{s&&s.unmount(),e.remove()},instance:s}};function WA(t,e,s){const i=YA(Fi(jA,{},{default:()=>Fi(s)}));return i.instance._component.props={...e,getProcessStateInstance:t},{...i,getProcessStateInstance:t}}const to=Ch("process_store",{state:()=>({processes:[]}),getters:{getAllProcesses:t=>t.processes,getAllProcessByRunningInBackground:t=>t.processes.filter(e=>e.getProcessStateInstance().process.runningInBackground),getAllProcessByMinimize:t=>t.processes.filter(e=>e.getProcessStateInstance().accessibility.minimize),getProcessByProcessId:t=>e=>t.processes.filter(s=>e===s.getProcessStateInstance().process.processId)[0]},actions:{createNewProcess({title:t,icon:e="bug_report"},s){const i=Ke(MA({info:{title:t,icon:e}})),n=()=>{const r=o.instance._container.children.item(0);r.style.width.includes("%")||r.style.height.includes("%")||(i.value.window.size.width=parseInt(r.style.width),i.value.window.size.height=parseInt(r.style.height))},o=WA(()=>i.value,{onClose:async()=>{await(()=>new Promise(a=>{o.instance._container.children.item(0).classList.remove("open-window"),o.instance._container.children.item(0).classList.add("hidden-window"),setTimeout(()=>{a()},150)}))(),this.killProcessByProcessId(i.value.process.processId),o.unmount()},onMaximize:()=>{i.value.accessibility.maximize=!i.value.accessibility.maximize},onChangeWindowSize:()=>n(),onMinimize:()=>{n(),i.value.accessibility.minimize=!0},onFocus:()=>{i.value.accessibility.focus=!0},onUnfocus:()=>{n(),i.value.accessibility.focus=!1},onActive:()=>{i.value.accessibility.active=!0},onInactive:()=>{i.value.accessibility.active=!1},onFullscreen:()=>{i.value.accessibility.maximize=!0,i.value.accessibility.fullscreen=!0},onUnFullscreen:()=>{i.value.accessibility.maximize=!1,i.value.accessibility.fullscreen=!1},onGragwindow:r=>{if(i.value.accessibility.maximize)return!1;const a=o.instance._container.children.item(0),l={x:r.clientX-a.offsetLeft,y:r.clientY-a.offsetTop};return document.onmousemove=c=>{const d={x:0,y:0};d.x=c.clientX-l.x,d.y=c.clientY-l.y,i.value.window.position.x=d.x,i.value.window.position.y=d.y},document.onmouseup=()=>{document.onmousemove=null,document.onmouseup=null},!1}},s);return this.processes.push(o),o},killAllProcesses(){this.processes.map(t=>t.instance.unmount()),this.processes=[]},cleanFocus(){this.processes=this.processes.map(t=>(t.getProcessStateInstance().accessibility.focus=!1,t))},cleanActive(){this.processes=this.processes.map(t=>(t.getProcessStateInstance().accessibility.active=!1,t))},swapZIndex(t,e){if(t===e||this.processes.length<=1)return;const s={x:this.processes.filter(i=>i.getProcessStateInstance().window.info.activeZIndex===t)[0],y:this.processes.filter(i=>i.getProcessStateInstance().window.info.activeZIndex===e)[0]};s.x.getProcessStateInstance().window.info.activeZIndex=e,s.y.getProcessStateInstance().window.info.activeZIndex=t},setTopZIndex(t){if(this.processes.length<=1)return;const s=Object.assign([],this.processes).sort((r,a)=>a.getProcessStateInstance().window.info.activeZIndex-r.getProcessStateInstance().window.info.activeZIndex),i=s.filter(r=>r===t)[0],n=s[0],o=i.getProcessStateInstance().window.info.activeZIndex;i.getProcessStateInstance().window.info.activeZIndex=n.getProcessStateInstance().window.info.activeZIndex,n.getProcessStateInstance().window.info.activeZIndex=o},killProcessByProcessId(t){if(this.processes.length===0)return;const e=this.processes.filter(s=>t===s.getProcessStateInstance().process.processId)[0];e.instance.unmount(),this.processes.splice(this.processes.indexOf(e),1)},setRunningInBackground(t,e){t.getProcessStateInstance().process.runningInBackground=e},setMinimize(t,e){t.getProcessStateInstance().accessibility.minimize=e},setAllProcessMinimize(){this.processes.map(t=>t.getProcessStateInstance().accessibility.minimize=!0)}}}),qA=ve({__name:"KillProcessButton",props:{currentProcess:{}},setup(t){const e=t,s=to();return(i,n)=>(W(),ue("fluent-button",{onClick:n[0]||(n[0]=()=>{e.currentProcess!==null&&re(s).killProcessByProcessId(e.currentProcess.getProcessStateInstance().process.processId)}),appearance:"neutral"},"End Process"))}}),GA=["onClick"],pm=ve({__name:"ProcessList",props:{currentProcess:{}},emits:["setCurrentProcess"],setup(t,{emit:e}){const s=t,i=to();return(n,o)=>(W(!0),ue(ft,null,Kn(re(i).getAllProcesses,r=>(W(),ue("li",{key:r.getProcessStateInstance().process.processId,onClick:a=>e("setCurrentProcess",r),class:Ot(["transition-all active:bg-white px-4 py-2 rounded flex gap-2 overflow-auto",[r===s.currentProcess?"bg-blue-500/25 hover:bg-blue-500/50":"hover:bg-white/75"]])},[os(n.$slots,"default",{e:r})],10,GA))),128))}}),ZA=t=>(xc("data-v-2203b3a7"),t=t(),wc(),t),XA=ZA(()=>F("fluent-divider",{class:"w-[1px] h-6 bg-black/10"},null,-1)),QA=ve({__name:"Manager",setup(t){const e=Ke(null),s=i=>{e.value=i};return(i,n)=>{const o=ce("FlexLayout"),r=ce("PageLayout");return W(),lt(r,null,{default:A(()=>[T(o,{class:"flex-col gap-1 h-full"},{default:A(()=>[T(o,{class:"justify-end items-center bg-white/50 w-full p-2 rounded-container"},{default:A(()=>[T(qA,{"current-process":e.value},null,8,["current-process"])]),_:1}),T(re(Oy),{as:"div",class:"flex w-full h-full gap-1"},{default:A(()=>[T(re(Ay),{as:"fluent-listbox",class:"gap-1 transition-all"},{default:A(()=>[T(re(pu),{as:"fluent-option",value:"processes",selected:""},{default:A(()=>[He("Processes")]),_:1}),T(re(pu),{as:"fluent-option",value:"details"},{default:A(()=>[He("Details")]),_:1})]),_:1}),T(re(Py),{as:"div",class:"bg-white/75 rounded-container w-full h-full"},{default:A(()=>[T(re(bo),{as:"ul",class:"p-2 h-full"},{default:A(()=>[T(pm,{onSetCurrentProcess:s,"current-process":e.value},{default:A(({e:a})=>[F("h1",null,rt(a.getProcessStateInstance().window.info.title),1)]),_:1},8,["current-process"])]),_:1}),T(re(bo),{as:"ul",class:"p-2 h-full"},{default:A(()=>[T(pm,{onSetCurrentProcess:s,"current-process":e.value},{default:A(({e:a})=>[F("h1",null,rt(a.getProcessStateInstance().window.info.title),1),XA,F("h1",null,rt(a.getProcessStateInstance().process.processId),1)]),_:1},8,["current-process"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),JA=Pt(QA,[["__scopeId","data-v-2203b3a7"]]),KA={},eP=F("div",{class:"relative overflow-clip p-2 h-full"},[F("header",null,[F("md-text",{type:"title-large"},"Notepad Beta")]),F("div",{class:"w-full h-full rounded overflow-clip"},[F("fluent-text-area",{autofocus:"",placeholder:"Notepad beta, type here.",resize:"vertical",appearance:"outline",class:"w-full h-full"})])],-1);function tP(t,e){const s=ce("PageLayout");return W(),lt(s,null,{default:A(()=>[eP]),_:1})}const sP=Pt(KA,[["render",tP]]),iP=ve({__name:"Camera",setup(t){const e=Ke(),s=Ke(),i=()=>{let n=document.createElement("canvas");n.getContext("2d").drawImage(e.value,0,0,n.width,n.height),n.style.width="8rem",n.style.aspectRatio="1 / 1",s.value.appendChild(n)};return zt(()=>{navigator&&navigator.mediaDevices?navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"user",width:300,height:300}}).then(n=>{e.value.srcObject=n,e.value.onloadedmetadata=()=>e.value.play()}).catch(()=>{console.log("Unknown error.")}):console.log("camera API is not supported by your browser")}),_c(()=>{e.value.onloadedmetadata=null}),ws(()=>{}),(n,o)=>{const r=ce("FlexLayout"),a=ce("PageLayout");return W(),lt(a,null,{default:A(()=>[T(r,{class:"flex-col h-full w-full gap-2 items-center justify-center"},{default:A(()=>[F("video",{ref_key:"cameraVideoRef",ref:e,class:"rounded-container h-full aspect-square"},null,512),F("fluent-button",{type:"button",appearance:"accent",onClick:i},"Take Photo")]),_:1}),T(r,{class:"gap-2 items-center flex-row flex-wrap"},{default:A(()=>[F("div",{ref_key:"cameraResultListRef",ref:s,class:"flex-none"},null,512)]),_:1})]),_:1})}}}),qa=(t,e,s,i)=>({label:t,icon:e,slot:s,title:i}),nP=[qa("Settings","settings",OA,"Settings Demo"),qa("Task Manager","man",JA,"Task Manager Demo"),qa("NotePad","note",sP,"Notepad Demo"),qa("Camera","camera",iP,"Camera Demo")];function Gh(){return nP}function Zh(t,e,s="bug_report"){to().createNewProcess({title:e,icon:s},t).mount()}const oP={class:"p-2 grid place-content-center"},rP={type:"label-small",class:"select-none mt-2"},aP=ve({__name:"PinnedApps",emits:["closeStartsMenu"],setup(t,{emit:e}){return(s,i)=>{const n=ce("Icon"),o=ce("IconButton"),r=ce("GridLayout");return W(),lt(r,{class:"relative gap-2 grid-cols-4 md:grid-cols-6 grid-rows-auto overflow-y-auto h-40 items-start"},{default:A(()=>[(W(!0),ue(ft,null,Kn(re(Gh)(),a=>(W(),lt(o,{"has-hover":"","has-active":"",onClick:()=>{e("closeStartsMenu"),re(Zh)(a.slot,a.title,a.icon)},key:a.slot,class:"h-16 w-24"},{default:A(()=>[F("div",oP,[T(n,null,{default:A(()=>[He(rt(a.icon),1)]),_:2},1024),F("md-text",rP,rt(a.label),1)])]),_:2},1032,["onClick"]))),128))]),_:1})}}}),lP=["onClick"],cP=F("div",{class:"rounded-full w-8 h-8 bg-white/75"},null,-1),dP={class:"max-w-[12rem] overflow-clip text-ellipsis"},uP=F("fluent-menu-item",null,"Lock",-1),hP=["onClick"],fP=ve({__name:"SimpleUserProfile",setup(t){const e=ei(),s=jc(),i=()=>{s.setIsLogout(!0),e.setIsLocked(!0)};return(n,o)=>{const r=ce("ExpandLayout");return W(),lt(r,null,{actions:A(({isExpanded:a,setIsExpanded:l})=>[F("div",{onClick:c=>l(!a),class:"inline-flex items-center gap-2 px-4 py-2 rounded-[4px] hover:bg-white/75"},[cP,F("span",dP,rt(re(s).getUserAccountState.name),1)],8,lP)]),"expanded-content":A(({isExpanded:a,setIsExpanded:l})=>[F("div",{class:Ot(["relative z-0",[a?"opacity-100":"opacity-0 pointer-events-none"]])},[F("fluent-menu",{class:"absolute bottom-10 left-0 w-32 z-0"},[F("fluent-menu-item",{onClick:i},"Sign-out"),uP]),Ko(F("div",{onClick:c=>l(!1),class:"fixed full-screen bottom-0 right-0 -z-[1]"},null,8,hP),[[er,a]])],2)]),_:1})}}}),pP={class:"h-full aspect-square p-2"},mP={class:"absolute bottom-10 right-0 w-32 z-0"},gP=F("fluent-menu-item",null,"Sleep",-1),vP=F("fluent-menu-item",null,"Restart",-1),bP=["onClick"],yP=ve({__name:"ShutdownMenu",setup(t){const e=ei();return(s,i)=>{const n=ce("Icon"),o=ce("IconButton"),r=ce("ExpandLayout");return W(),lt(r,{class:"relative"},{actions:A(({isExpanded:a,setIsExpanded:l})=>[T(o,{"has-hover":"","has-active":"",onClick:c=>l(!a)},{default:A(()=>[F("div",pP,[T(n,null,{default:A(()=>[He(" power_settings_new ")]),_:1})])]),_:2},1032,["onClick"])]),"expanded-content":A(({isExpanded:a,setIsExpanded:l})=>[F("div",{class:Ot(["fixed z-0",[a?"opacity-100":"opacity-0 pointer-events-none"]])},[F("fluent-menu",mP,[gP,F("fluent-menu-item",{onClick:i[0]||(i[0]=c=>re(e).setNeedShutdown(!0))},"Shut down"),vP]),Ko(F("div",{onClick:c=>l(!1),class:"fixed w-screen h-screen bottom-0 right-0 -z-[1]"},null,8,bP),[[er,a]])],2)]),_:1})}}}),xP=t=>(xc("data-v-91e537d5"),t=t(),wc(),t),wP={class:"rounded hover:bg-white/75 h-full aspect-square overflow-clip"},$P=xP(()=>F("div",{class:"starts-button-group relative windows-starts-icon-special-shape overflow-clip w-6 h-6 grid grid-cols-2 grid-rows-2 gap-[1.25px]"},[F("div",{class:"first-block-highlight"}),F("div"),F("div"),F("div")],-1)),_P=[$P],kP=ve({__name:"StartsButton",props:{isExpanded:{type:Boolean}},emits:["setIsExpanded"],setup(t,{emit:e}){const s=t,i=ei();var n=[];const o=r=>{if(n.length===0){n[0]=r.code;return}else n.length===1?n[1]=r.code:r.code!==n[1]&&(n.shift(),n[1]=r.code);["ShiftLeft","ShiftRight"].includes(n[0])&&(n[1]==="MetaLeft"&&(i.setStarts({...i.getSystemStarts,isOpening:!s.isExpanded}),e("setIsExpanded",!s.isExpanded)),n=[])};return zt(()=>{document.addEventListener("keydown",o)}),ws(()=>{document.removeEventListener("keydown",o)}),(r,a)=>(W(),ue("div",wP,[F("div",{onClick:a[0]||(a[0]=()=>{re(i).setStarts({...re(i).getSystemStarts,isOpening:!s.isExpanded}),e("setIsExpanded",!s.isExpanded)}),class:"w-full h-full transition-all active:scale-75 grid place-content-center"},_P)]))}}),SP=Pt(kP,[["__scopeId","data-v-91e537d5"]]),CP={appearance:"neutral"},IP={slot:"end",class:"material-symbols-outlined"},mm=ve({__name:"ApplicationListButton",props:{label:{},icon:{}},setup(t){const e=t;return(s,i)=>(W(),ue("fluent-button",CP,[He(rt(e.label)+" ",1),F("span",IP,rt(e.icon),1)]))}}),TP={class:"relative overflow-clip text-ellipsis w-full h-full"},FP={class:"flex flex-row items-center gap-2 p-2"},DP={type:"label-large",class:"select-none"},RP=ve({__name:"ApplicationListItem",props:{app:{}},emits:["closeStartsMenu"],setup(t,{emit:e}){const s=t;return(i,n)=>{const o=ce("Icon"),r=ce("IconButton");return W(),ue("div",TP,[(W(),lt(r,{"has-hover":"","has-active":"",onClick:n[0]||(n[0]=()=>{e("closeStartsMenu"),re(Zh)(s.app.slot,s.app.title,s.app.icon)}),key:s.app.slot},{default:A(()=>[F("div",FP,[T(o,null,{default:A(()=>[He(rt(s.app.icon),1)]),_:1}),F("md-text",DP,rt(s.app.label),1)])]),_:1}))])}}}),EP=ve({__name:"ApplicationList",emits:["closeStartsMenu"],setup(t,{emit:e}){const s=Gh();return(i,n)=>{const o=ce("FlexLayout");return W(),lt(o,{class:"flex-col gap-2"},{default:A(()=>[(W(!0),ue(ft,null,Kn(re(s),(r,a)=>(W(),lt(RP,{index:a,app:r,onCloseStartsMenu:n[0]||(n[0]=l=>e("closeStartsMenu"))},null,8,["index","app"]))),256))]),_:1})}}}),OP=ve({__name:"TablePanel",setup(t){const e=Ke("page-one"),s=i=>{e.value=i};return(i,n)=>(W(),ue("div",null,[os(i.$slots,"app-one",{currentPage:e.value,setCurrentPage:s}),os(i.$slots,"app-two",{currentPage:e.value,setCurrentPage:s})]))}}),My=t=>(xc("data-v-d9c72db0"),t=t(),wc(),t),AP={class:"relative backdrop-blur-lg bg-white/[0.85] bottom-0 w-screen mx-auto max-w-2xl overflow-auto max-h-[32rem]"},PP={class:"start-panel-content-aera"},MP=My(()=>F("md-text",{type:"label-large"},"Pinned",-1)),LP=My(()=>F("md-text",{type:"label-large"},"All Apps",-1)),VP=["onClick"],HP=ve({__name:"Starts",setup(t){const e=ei();return(s,i)=>{const n=ce("FlexLayout"),o=ce("ExpandLayout");return W(),lt(o,{class:"relative flex items-center justify-center h-full aspect-square"},{actions:A(({isExpanded:r,setIsExpanded:a})=>[T(SP,{onSetIsExpanded:a,"is-expanded":r},null,8,["onSetIsExpanded","is-expanded"])]),"expanded-content":A(({isExpanded:r,setIsExpanded:a})=>[F("div",{class:Ot(["start-panel full-screen fixed top-0 left-0 grid justify-center items-end pb-14 px-2 transition-all",[r?"active":"inactive"]])},[F("fluent-card",AP,[F("div",PP,[T(lA,{class:"px-8 pt-8 row-span-1"}),T(n,{class:"w-full flex-col px-8 gap-4 overflow-auto",style:{"grid-row":"span 10 / span 10"}},{default:A(()=>[T(OP,{class:"w-full relative overflow-x-clip"},{"app-one":A(({currentPage:l,setCurrentPage:c})=>[F("div",{class:Ot(["w-full absolute top-0 space-y-2 table-transition",[l!=="page-one"?"-left-[200%]":"left-0"]])},[T(n,{class:"justify-between items-center px-4"},{default:A(()=>[MP,T(mm,{onClick:d=>c("page-two"),class:"self-end",label:"All Apps",icon:"arrow_forward"},null,8,["onClick"])]),_:2},1024),T(aP,{onCloseStartsMenu:d=>a(!1)},null,8,["onCloseStartsMenu"])],2)]),"app-two":A(({currentPage:l,setCurrentPage:c})=>[F("div",{class:Ot(["w-full absolute top-0 space-y-2 table-transition",[l!=="page-two"?"left-[200%]":"left-0"]])},[T(n,{class:"justify-between items-center px-4"},{default:A(()=>[LP,T(mm,{onClick:d=>c("page-one"),label:"Back",icon:"arrow_back"},null,8,["onClick"])]),_:2},1024),T(EP,{onCloseStartsMenu:d=>a(!1)},null,8,["onCloseStartsMenu"])],2)]),_:2},1024)]),_:2},1024),T(n,{class:"row-span-1 justify-between items-center bg-black/5 px-8 py-2 border-t"},{default:A(()=>[T(fP),T(yP)]),_:1})])]),Ko(F("div",{onClick:()=>{re(e).setStarts({...re(e).getSystemStarts,isOpening:!r}),a(!1)},class:"fixed left-0 bottom-0 w-screen h-screen -z-[1]"},null,8,VP),[[er,r]])],2)]),_:1})}}}),NP=Pt(HP,[["__scopeId","data-v-d9c72db0"]]),zP={class:"relative hover:bg-white/75 rounded"},BP={type:"label-small"},jP={type:"label-small"},UP=ve({__name:"DateButton",setup(t){const e=Ke(z().format("MM-DD-YYYY")),s=Ke(z().format("HH:mm")),i=()=>{e.value=z().format("MM-DD-YYYY"),s.value=z().format("HH:mm")};var n=null;return zt(()=>{n=setInterval(i,1e3)}),ws(()=>{clearInterval(n)}),(o,r)=>{const a=ce("FlexLayout");return W(),ue("div",zP,[T(a,{class:"select-none w-full h-full active:scale-75 transition-all px-2 flex flex-col items-end justify-around text-end whitespace-nowrap"},{default:A(()=>[F("md-text",BP,rt(s.value),1),F("md-text",jP,rt(e.value),1)]),_:1})])}}}),YP={class:"relative backdrop-blur-lg bg-white/[0.85] w-full max-w-2xl overflow-auto max-h-[24rem]"},WP=F("fluent-calendar",null,null,-1),qP=["onClick"],GP=ve({__name:"CalendarPanel",setup(t){return(e,s)=>{const i=ce("FlexLayout"),n=ce("ExpandLayout");return W(),lt(n,null,{actions:A(({isExpanded:o,setIsExpanded:r})=>[T(UP,{onClick:a=>r(!o),class:"hidden xs:block"},null,8,["onClick"])]),"expanded-content":A(({isExpanded:o,setIsExpanded:r})=>[F("div",{class:Ot(["start-panel full-screen fixed top-0 left-0 grid justify-end items-end pb-14 px-2 transition-all",[o?"active":"inactive"]])},[F("fluent-card",YP,[T(i,{class:"flex-col p-4 gap-8 justify-between h-full"},{default:A(()=>[WP]),_:1})]),Ko(F("div",{onClick:a=>r(!1),class:"fixed left-0 bottom-0 w-screen h-screen -z-[1]"},null,8,qP),[[er,o]])],2)]),_:1})}}}),ZP={class:"space-y-8"},XP=["value"],QP=F("fluent-slider",{value:"00"},null,-1),JP=ve({__name:"NavigationSystemControl",setup(t){const e=ei(),s=i=>{e.setBrightness(i.target.valueAsNumber)};return(i,n)=>{const o=ce("Icon"),r=ce("FlexLayout");return W(),ue("div",ZP,[T(r,{class:"gap-4"},{default:A(()=>[T(o,{class:"relative -top-2"},{default:A(()=>[He("light")]),_:1}),F("fluent-slider",{onChange:s,id:"systemBrightnessSliderRef",value:re(e).getSystemBrightness,min:"30",max:"100"},null,40,XP)]),_:1}),T(r,{class:"gap-4"},{default:A(()=>[T(o,{class:"relative -top-2"},{default:A(()=>[He("volume_up")]),_:1}),QP]),_:1})])}}}),KP={class:"px-8 py-4"},eM=ve({__name:"NightLightNavigationButton",setup(t){const e=ei();return(s,i)=>{const n=ce("Icon"),o=ce("IconButton");return W(),lt(o,{"has-hover":"","has-active":"",onClick:re(e).toggleIsNightlight,class:Ot({"bg-primary-500":re(e).getSystemIsNightlight})},{default:A(()=>[F("div",KP,[T(n,null,{default:A(()=>[He(" light ")]),_:1})])]),_:1},8,["onClick","class"])}}}),tM={class:"w-full h-full active:scale-75 transition-all px-2"},sM={class:"w-full h-full grid place-content-center"},iM=ve({__name:"NavigationToggleButton",props:{isExpanded:{type:Boolean}},emits:["setIsExpanded"],setup(t,{emit:e}){const s=t;return(i,n)=>{const o=ce("Icon"),r=ce("FlexLayout");return W(),ue("div",{onClick:n[0]||(n[0]=a=>e("setIsExpanded",!s.isExpanded)),class:"rounded hover:bg-white/75 transition-all w-full h-full"},[F("div",tM,[F("div",sM,[T(r,null,{default:A(()=>[T(o,{class:"scale-75"},{default:A(()=>[He("wifi")]),_:1}),T(o,{class:"scale-75 hidden md:block"},{default:A(()=>[He("volume_up")]),_:1}),T(o,{class:"scale-75 hidden md:block"},{default:A(()=>[He("power")]),_:1})]),_:1})])])])}}}),nM={class:"relative backdrop-blur-lg bg-white/[0.85] w-full max-w-2xl overflow-auto max-h-[24rem]"},oM={class:"px-8 py-4 grid place-content-center"},rM={class:"px-8 py-4 grid place-content-center"},aM={class:"px-8 py-4 grid place-content-center"},lM=["onClick"],cM={__name:"ControlPanel",setup(t){return(e,s)=>{const i=ce("Icon"),n=ce("IconButton"),o=ce("GridLayout"),r=ce("FlexLayout"),a=ce("ExpandLayout");return W(),lt(a,{class:"relative h-full"},{actions:A(({isExpanded:l,setIsExpanded:c})=>[T(iM,{onSetIsExpanded:c,"is-expanded":l},null,8,["onSetIsExpanded","is-expanded"])]),"expanded-content":A(({isExpanded:l,setIsExpanded:c})=>[F("div",{class:Ot(["start-panel full-screen fixed top-0 left-0 grid justify-end items-end pb-14 px-2 transition-all",[l?"active":"inactive"]])},[F("fluent-card",nM,[T(r,{class:"flex-col p-4 gap-8 justify-between h-full"},{default:A(()=>[T(o,{class:"grid-cols-3 gap-2"},{default:A(()=>[T(n,{"has-hover":"","has-active":""},{default:A(()=>[F("div",oM,[T(i,null,{default:A(()=>[He("wifi")]),_:1})])]),_:1}),T(n,{"has-hover":"","has-active":""},{default:A(()=>[F("div",rM,[T(i,null,{default:A(()=>[He("bluetooth")]),_:1})])]),_:1}),T(n,{"has-hover":"","has-active":""},{default:A(()=>[F("div",aM,[T(i,null,{default:A(()=>[He("air")]),_:1})])]),_:1}),T(eM)]),_:1}),T(JP)]),_:1})]),Ko(F("div",{onClick:d=>c(!1),class:"fixed left-0 bottom-0 w-screen h-screen -z-[1]"},null,8,lM),[[er,l]])],2)]),_:1})}}},dM=ve({__name:"Navigation",setup(t){return(e,s)=>{const i=ce("FlexLayout");return W(),lt(i,{class:"h-full gap-2"},{default:A(()=>[T(cM),T(GP)]),_:1})}}}),uM=Pt(dM,[["__scopeId","data-v-19be6558"]]),hM={class:"relative h-full flex gap-1 select-none overflow-auto"},fM=["onClick"],pM={class:"h-full aspect-square grid"},mM=["anchor"],gM=ve({__name:"MinimizeApps",setup(t){const e=to();return(s,i)=>{const n=ce("Icon"),o=ce("IconButton");return W(),ue("ul",hM,[(W(!0),ue(ft,null,Kn(re(e).getAllProcesses,r=>(W(),ue("div",{key:r.getProcessStateInstance().process.processId,onClick:()=>{re(e).setMinimize(r,!r.getProcessStateInstance().accessibility.minimize),re(e).cleanActive(),re(e).cleanFocus(),r.getProcessStateInstance().accessibility.active=!0,r.getProcessStateInstance().accessibility.focus=!0,re(e).setTopZIndex(r)}},[T(o,{"has-hover":"","has-active":"",id:"process"+r.getProcessStateInstance().process.processId,class:"h-full aspect-square"},{default:A(()=>[F("div",pM,[T(n,null,{default:A(()=>[He(rt(r.getProcessStateInstance().window.info.icon),1)]),_:2},1024)])]),_:2},1032,["id"]),F("fluent-tooltip",{position:"top",anchor:"process"+r.getProcessStateInstance().process.processId},rt(r.getProcessStateInstance().window.info.title),9,mM)],8,fM))),128))])}}}),vM={class:"relative w-full h-12 border-t border-black/20 back-blur p-1"},bM=F("div",{class:"hidden flex-initial w-1/4 md:block h-full self-start overflow-auto"},null,-1),yM={class:"relative h-full flex-1 duration-1000 transition-all overflow-clip"},xM={class:"flex-none w-fit md:w-1/4 h-full flex justify-end"},wM=ve({__name:"StartsBar",setup(t){return(e,s)=>{const i=ce("FlexLayout");return W(),ue("div",vM,[T(i,{class:"relative w-full h-full items-center justify-between overflow-clip"},{default:A(()=>[bM,F("div",yM,[T(i,{class:"h-full items-center justify-start md:justify-center gap-1"},{default:A(()=>[T(NP),T(gM)]),_:1})]),F("div",xM,[T(uM)])]),_:1})])}}}),$M={class:"relative wallpaper full-screen overflow-clip"},_M={class:"flex flex-col gap-2 flex-wrap p-2"},kM={class:"grid place-content-center w-16 h-16"},SM=ve({__name:"Desktop",setup(t){const e=Gh();return(s,i)=>{const n=ce("Icon"),o=ce("IconButton");return W(),ue("div",$M,[F("ul",_M,[(W(!0),ue(ft,null,Kn(re(e),r=>(W(),ue("li",null,[T(o,{"has-hover":"","has-active":"",class:"w-fit h-fit",onClick:()=>{re(Zh)(r.slot,r.title,r.icon)}},{default:A(()=>[F("div",kM,[T(n,null,{default:A(()=>[He(rt(r.icon),1)]),_:2},1024)])]),_:2},1032,["onClick"])]))),256))])])}}}),CM={class:"relative max-h-[100svh] h-[100svh] w-screen overflow-clip"},IM={class:"flex-grow h-full max-h-[100svh] overflow-clip"},TM=ve({__name:"Windows",setup(t){const e=to(),s=ei(),i=jc();Zv(()=>{i.setIsLogout(!0),s.setIsShutdown(!1),s.setNeedShutdown(!1),s.setStarts({...s.getSystemStarts,isOpenning:!1})}),_c(()=>{i.setIsLogout(!0)});var n=[];const o=r=>{if(n.length===0){n[0]=r.code;return}else n.length===1?n[1]=r.code:r.code!==n[1]&&(n.shift(),n[1]=r.code);["ShiftLeft","ShiftRight"].includes(n[0])&&(n[1]==="KeyD"&&e.setAllProcessMinimize(),n=[])};return zt(()=>{document.addEventListener("keydown",o)}),ws(()=>{document.removeEventListener("keydown",o)}),(r,a)=>(W(),ue("div",CM,[re(s).getSystemIsLocked?(W(),ue(ft,{key:1},[F("div",IM,[T(SM)]),F("nav",{class:"fixed bottom-0 left-0 w-full h-12",style:un({zIndex:re(s).getSystemStarts.isOpening?"99999":"999"})},[T(wM)],4)],64)):(W(),lt(nA,{key:0}))]))}}),Ly=Ic(TM),FM=ve({__name:"ScreenMask",setup(t){const e=ei();return zt(()=>{e.setIsLocked(!0)}),ws(()=>{e.setIsLocked(!0)}),(s,i)=>(W(),ue(ft,null,[F("div",{class:"brightness",style:un({"--system-bright":100-re(e).getSystemBrightness+"%"})},null,4),F("div",{class:"nightlight",style:un({"--system-nightlight-enabled":re(e).getSystemIsNightlight?"35%":"0"})},null,4)],64))}}),Vy=Ic(FM),DM={},RM={class:"fixed full-screen top-0 right-0 bg-black"};function EM(t,e){return W(),ue("div",RM,[os(t.$slots,"default")])}const OM=Pt(DM,[["render",EM]]),Xh=t=>(xc("data-v-a25f2464"),t=t(),wc(),t),AM={key:0,class:"full-screen flex flex-col items-center justify-center gap-8"},PM=Xh(()=>F("h1",{class:"text-white font-bold text-xl"},"Shutdown",-1)),MM=Xh(()=>F("fluent-progress-ring",null,null,-1)),LM=[PM,MM],VM={key:1,class:"container h-full max-h-96 flex flex-col gap-8 p-4 overflow-auto"},HM={class:"space-y-4 w-full h-full"},NM=Xh(()=>F("h1",{class:"text-white font-bold text-xl"},"Some processes is running",-1)),zM={class:"transition-all flex items-center justify-between py-1 px-2 hover:bg-white/25 rounded"},BM={class:"inline-flex gap-2"},jM={class:"material-symbols-outlined"},UM={class:"flex items-center justify-end"},YM=["onClick"],WM={class:"flex gap-2 items-center justify-end"},qM=ve({__name:"Shutdown",setup(t){const e=to(),s=ei();ki(()=>e.getAllProcesses.length,()=>{e.getAllProcesses.length===0&&s.setIsShutdown(!0)},{immediate:!0});var i;return zt(()=>{i=setTimeout(()=>{e.killAllProcesses()},12e4)}),_c(()=>{clearTimeout(i)}),(n,o)=>(W(),lt(OM,{class:"z-highest shutdown flex justify-center items-center"},{default:A(()=>[re(e).getAllProcesses.length===0?(W(),ue("div",AM,LM)):(W(),ue("div",VM,[F("div",HM,[NM,(W(!0),ue(ft,null,Kn(re(e).getAllProcesses,r=>(W(),ue("ul",{key:r.getProcessStateInstance().process.processId,class:"text-white flex flex-col overflow-auto"},[F("li",zM,[F("div",BM,[F("span",jM,rt(r.getProcessStateInstance().window.info.icon),1),F("p",null,rt(r.getProcessStateInstance().window.info.title),1)]),F("div",UM,[F("span",{onClick:a=>re(e).killProcessByProcessId(r.getProcessStateInstance().process.processId),class:"scale-75 p-2 rounded-full select-none hover:bg-white/25 material-symbols-outlined"},"close",8,YM)])])]))),128))]),F("div",WM,[F("fluent-button",{onClick:o[0]||(o[0]=()=>{re(e).killAllProcesses()})},"End All Processes")])]))]),_:1}))}}),GM=Pt(qM,[["__scopeId","data-v-a25f2464"]]),Hy=Ic(GM);Ly.use(Ab).use(Fb).use(IT).mount("#window");Vy.mount("#window-screen-mask");const mu=ei();ki(()=>mu.needShutdown,()=>{Ly.unmount(),Vy.unmount(),Hy.mount("#window")});ki(()=>mu.isShutdown,()=>{mu.isShutdown&&setTimeout(()=>{document.documentElement.style.backgroundColor="#000",document.body.remove(),Hy.unmount()},500)})});export default ZM();
//# sourceMappingURL=index-6aee1e5c.js.map
