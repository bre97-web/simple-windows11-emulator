var By=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var bM=By((zM,dl)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const Li=function(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof self<"u")return self;if(typeof window<"u")return window;try{return new Function("return this")()}catch{return{}}}();Li.trustedTypes===void 0&&(Li.trustedTypes={createPolicy:(t,e)=>e});const _m={configurable:!1,enumerable:!1,writable:!1};Li.FAST===void 0&&Reflect.defineProperty(Li,"FAST",Object.assign({value:Object.create(null)},_m));const Hr=Li.FAST;if(Hr.getById===void 0){const t=Object.create(null);Reflect.defineProperty(Hr,"getById",Object.assign({value(e,s){let i=t[e];return i===void 0&&(i=s?t[e]=s():null),i}},_m))}const Un=Object.freeze([]);function Sm(){const t=new WeakMap;return function(e){let s=t.get(e);if(s===void 0){let i=Reflect.getPrototypeOf(e);for(;s===void 0&&i!==null;)s=t.get(i),i=Reflect.getPrototypeOf(i);s=s===void 0?[]:s.slice(0),t.set(e,s)}return s}}const Kc=Li.FAST.getById(1,()=>{const t=[],e=[];function s(){if(e.length)throw e.shift()}function i(r){try{r.call()}catch(a){e.push(a),setTimeout(s,0)}}function n(){let a=0;for(;a<t.length;)if(i(t[a]),a++,a>1024){for(let l=0,c=t.length-a;l<c;l++)t[l]=t[l+a];t.length-=a,a=0}t.length=0}function o(r){t.length<1&&Li.requestAnimationFrame(n),t.push(r)}return Object.freeze({enqueue:o,process:n})}),Cm=Li.trustedTypes.createPolicy("fast-html",{createHTML:t=>t});let ed=Cm;const _r=`fast-${Math.random().toString(36).substring(2,8)}`,Im=`${_r}{`,ku=`}${_r}`,me=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(t){if(ed!==Cm)throw new Error("The HTML policy can only be set once.");ed=t},createHTML(t){return ed.createHTML(t)},isMarker(t){return t&&t.nodeType===8&&t.data.startsWith(_r)},extractDirectiveIndexFromMarker(t){return parseInt(t.data.replace(`${_r}:`,""))},createInterpolationPlaceholder(t){return`${Im}${t}${ku}`},createCustomAttributePlaceholder(t,e){return`${t}="${this.createInterpolationPlaceholder(e)}"`},createBlockPlaceholder(t){return`<!--${_r}:${t}-->`},queueUpdate:Kc.enqueue,processUpdates:Kc.process,nextUpdate(){return new Promise(Kc.enqueue)},setAttribute(t,e,s){s==null?t.removeAttribute(e):t.setAttribute(e,s)},setBooleanAttribute(t,e,s){s?t.setAttribute(e,""):t.removeAttribute(e)},removeChildNodes(t){for(let e=t.firstChild;e!==null;e=t.firstChild)t.removeChild(e)},createTemplateWalker(t){return document.createTreeWalker(t,133,null,!1)}});class ul{constructor(e,s){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=s}has(e){return this.spillover===void 0?this.sub1===e||this.sub2===e:this.spillover.indexOf(e)!==-1}subscribe(e){const s=this.spillover;if(s===void 0){if(this.has(e))return;if(this.sub1===void 0){this.sub1=e;return}if(this.sub2===void 0){this.sub2=e;return}this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else s.indexOf(e)===-1&&s.push(e)}unsubscribe(e){const s=this.spillover;if(s===void 0)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const i=s.indexOf(e);i!==-1&&s.splice(i,1)}}notify(e){const s=this.spillover,i=this.source;if(s===void 0){const n=this.sub1,o=this.sub2;n!==void 0&&n.handleChange(i,e),o!==void 0&&o.handleChange(i,e)}else for(let n=0,o=s.length;n<o;++n)s[n].handleChange(i,e)}}class Tm{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var s;const i=this.subscribers[e];i!==void 0&&i.notify(e),(s=this.sourceSubscribers)===null||s===void 0||s.notify(e)}subscribe(e,s){var i;if(s){let n=this.subscribers[s];n===void 0&&(this.subscribers[s]=n=new ul(this.source)),n.subscribe(e)}else this.sourceSubscribers=(i=this.sourceSubscribers)!==null&&i!==void 0?i:new ul(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,s){var i;if(s){const n=this.subscribers[s];n!==void 0&&n.unsubscribe(e)}else(i=this.sourceSubscribers)===null||i===void 0||i.unsubscribe(e)}}const fe=Hr.getById(2,()=>{const t=/(:|&&|\|\||if)/,e=new WeakMap,s=me.queueUpdate;let i,n=c=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function o(c){let d=c.$fastController||e.get(c);return d===void 0&&(Array.isArray(c)?d=n(c):e.set(c,d=new Tm(c))),d}const r=Sm();class a{constructor(d){this.name=d,this.field=`_${d}`,this.callback=`${d}Changed`}getValue(d){return i!==void 0&&i.watch(d,this.name),d[this.field]}setValue(d,u){const f=this.field,y=d[f];if(y!==u){d[f]=u;const w=d[this.callback];typeof w=="function"&&w.call(d,y,u),o(d).notify(this.name)}}}class l extends ul{constructor(d,u,f=!1){super(d,u),this.binding=d,this.isVolatileBinding=f,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(d,u){this.needsRefresh&&this.last!==null&&this.disconnect();const f=i;i=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const y=this.binding(d,u);return i=f,y}disconnect(){if(this.last!==null){let d=this.first;for(;d!==void 0;)d.notifier.unsubscribe(this,d.propertyName),d=d.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(d,u){const f=this.last,y=o(d),w=f===null?this.first:{};if(w.propertySource=d,w.propertyName=u,w.notifier=y,y.subscribe(this,u),f!==null){if(!this.needsRefresh){let $;i=void 0,$=f.propertySource[f.propertyName],i=this,d===$&&(this.needsRefresh=!0)}f.next=w}this.last=w}handleChange(){this.needsQueue&&(this.needsQueue=!1,s(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let d=this.first;return{next:()=>{const u=d;return u===void 0?{value:void 0,done:!0}:(d=d.next,{value:u,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(c){n=c},getNotifier:o,track(c,d){i!==void 0&&i.watch(c,d)},trackVolatile(){i!==void 0&&(i.needsRefresh=!0)},notify(c,d){o(c).notify(d)},defineProperty(c,d){typeof d=="string"&&(d=new a(d)),r(c).push(d),Reflect.defineProperty(c,d.name,{enumerable:!0,get:function(){return d.getValue(this)},set:function(u){d.setValue(this,u)}})},getAccessors:r,binding(c,d,u=this.isVolatileBinding(c)){return new l(c,d,u)},isVolatileBinding(c){return t.test(c.toString())}})});function I(t,e){fe.defineProperty(t,e)}function jy(t,e,s){return Object.assign({},s,{get:function(){return fe.trackVolatile(),s.get.apply(this)}})}const rf=Hr.getById(3,()=>{let t=null;return{get(){return t},set(e){t=e}}});class Nr{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return rf.get()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){rf.set(e)}}fe.defineProperty(Nr.prototype,"index");fe.defineProperty(Nr.prototype,"length");const Sr=Object.seal(new Nr);class Pl{constructor(){this.targetIndex=0}}class Fm extends Pl{constructor(){super(...arguments),this.createPlaceholder=me.createInterpolationPlaceholder}}class _u extends Pl{constructor(e,s,i){super(),this.name=e,this.behavior=s,this.options=i}createPlaceholder(e){return me.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function Uy(t,e){this.source=t,this.context=e,this.bindingObserver===null&&(this.bindingObserver=fe.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(t,e))}function Yy(t,e){this.source=t,this.context=e,this.target.addEventListener(this.targetName,this)}function Wy(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function qy(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const t=this.target.$fastView;t!==void 0&&t.isComposed&&(t.unbind(),t.needsBindOnly=!0)}function Gy(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function Zy(t){me.setAttribute(this.target,this.targetName,t)}function Xy(t){me.setBooleanAttribute(this.target,this.targetName,t)}function Qy(t){if(t==null&&(t=""),t.create){this.target.textContent="";let e=this.target.$fastView;e===void 0?e=t.create():this.target.$fastTemplate!==t&&(e.isComposed&&(e.remove(),e.unbind()),e=t.create()),e.isComposed?e.needsBindOnly&&(e.needsBindOnly=!1,e.bind(this.source,this.context)):(e.isComposed=!0,e.bind(this.source,this.context),e.insertBefore(this.target),this.target.$fastView=e,this.target.$fastTemplate=t)}else{const e=this.target.$fastView;e!==void 0&&e.isComposed&&(e.isComposed=!1,e.remove(),e.needsBindOnly?e.needsBindOnly=!1:e.unbind()),this.target.textContent=t}}function Jy(t){this.target[this.targetName]=t}function Ky(t){const e=this.classVersions||Object.create(null),s=this.target;let i=this.version||0;if(t!=null&&t.length){const n=t.split(/\s+/);for(let o=0,r=n.length;o<r;++o){const a=n[o];a!==""&&(e[a]=i,s.classList.add(a))}}if(this.classVersions=e,this.version=i+1,i!==0){i-=1;for(const n in e)e[n]===i&&s.classList.remove(n)}}class Su extends Fm{constructor(e){super(),this.binding=e,this.bind=Uy,this.unbind=Wy,this.updateTarget=Zy,this.isBindingVolatile=fe.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,e!==void 0)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=Jy,this.cleanedTargetName==="innerHTML"){const s=this.binding;this.binding=(i,n)=>me.createHTML(s(i,n))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=Xy;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=Yy,this.unbind=Gy;break;default:this.cleanedTargetName=e,e==="class"&&(this.updateTarget=Ky);break}}targetAtContent(){this.updateTarget=Qy,this.unbind=qy}createBehavior(e){return new e0(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class e0{constructor(e,s,i,n,o,r,a){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=s,this.isBindingVolatile=i,this.bind=n,this.unbind=o,this.updateTarget=r,this.targetName=a}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){Nr.setEvent(e);const s=this.binding(this.source,this.context);Nr.setEvent(null),s!==!0&&e.preventDefault()}}let td=null;class Cu{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){td=this}static borrow(e){const s=td||new Cu;return s.directives=e,s.reset(),td=null,s}}function t0(t){if(t.length===1)return t[0];let e;const s=t.length,i=t.map(r=>typeof r=="string"?()=>r:(e=r.targetName||e,r.binding)),n=(r,a)=>{let l="";for(let c=0;c<s;++c)l+=i[c](r,a);return l},o=new Su(n);return o.targetName=e,o}const s0=ku.length;function Dm(t,e){const s=e.split(Im);if(s.length===1)return null;const i=[];for(let n=0,o=s.length;n<o;++n){const r=s[n],a=r.indexOf(ku);let l;if(a===-1)l=r;else{const c=parseInt(r.substring(0,a));i.push(t.directives[c]),l=r.substring(a+s0)}l!==""&&i.push(l)}return i}function af(t,e,s=!1){const i=e.attributes;for(let n=0,o=i.length;n<o;++n){const r=i[n],a=r.value,l=Dm(t,a);let c=null;l===null?s&&(c=new Su(()=>a),c.targetName=r.name):c=t0(l),c!==null&&(e.removeAttributeNode(r),n--,o--,t.addFactory(c))}}function i0(t,e,s){const i=Dm(t,e.textContent);if(i!==null){let n=e;for(let o=0,r=i.length;o<r;++o){const a=i[o],l=o===0?e:n.parentNode.insertBefore(document.createTextNode(""),n.nextSibling);typeof a=="string"?l.textContent=a:(l.textContent=" ",t.captureContentBinding(a)),n=l,t.targetIndex++,l!==e&&s.nextNode()}t.targetIndex--}}function n0(t,e){const s=t.content;document.adoptNode(s);const i=Cu.borrow(e);af(i,t,!0);const n=i.behaviorFactories;i.reset();const o=me.createTemplateWalker(s);let r;for(;r=o.nextNode();)switch(i.targetIndex++,r.nodeType){case 1:af(i,r);break;case 3:i0(i,r,o);break;case 8:me.isMarker(r)&&i.addFactory(e[me.extractDirectiveIndexFromMarker(r)])}let a=0;(me.isMarker(s.firstChild)||s.childNodes.length===1&&e.length)&&(s.insertBefore(document.createComment(""),s.firstChild),a=-1);const l=i.behaviorFactories;return i.release(),{fragment:s,viewBehaviorFactories:l,hostBehaviorFactories:n,targetOffset:a}}const sd=document.createRange();class Rm{constructor(e,s){this.fragment=e,this.behaviors=s,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const s=this.lastChild;if(e.previousSibling===s)return;const i=e.parentNode;let n=this.firstChild,o;for(;n!==s;)o=n.nextSibling,i.insertBefore(n,e),n=o;i.insertBefore(s,e)}}remove(){const e=this.fragment,s=this.lastChild;let i=this.firstChild,n;for(;i!==s;)n=i.nextSibling,e.appendChild(i),i=n;e.appendChild(s)}dispose(){const e=this.firstChild.parentNode,s=this.lastChild;let i=this.firstChild,n;for(;i!==s;)n=i.nextSibling,e.removeChild(i),i=n;e.removeChild(s);const o=this.behaviors,r=this.source;for(let a=0,l=o.length;a<l;++a)o[a].unbind(r)}bind(e,s){const i=this.behaviors;if(this.source!==e)if(this.source!==null){const n=this.source;this.source=e,this.context=s;for(let o=0,r=i.length;o<r;++o){const a=i[o];a.unbind(n),a.bind(e,s)}}else{this.source=e,this.context=s;for(let n=0,o=i.length;n<o;++n)i[n].bind(e,s)}}unbind(){if(this.source===null)return;const e=this.behaviors,s=this.source;for(let i=0,n=e.length;i<n;++i)e[i].unbind(s);this.source=null}static disposeContiguousBatch(e){if(e.length!==0){sd.setStartBefore(e[0].firstChild),sd.setEndAfter(e[e.length-1].lastChild),sd.deleteContents();for(let s=0,i=e.length;s<i;++s){const n=e[s],o=n.behaviors,r=n.source;for(let a=0,l=o.length;a<l;++a)o[a].unbind(r)}}}}class lf{constructor(e,s){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=s}create(e){if(this.fragment===null){let c;const d=this.html;if(typeof d=="string"){c=document.createElement("template"),c.innerHTML=me.createHTML(d);const f=c.content.firstElementChild;f!==null&&f.tagName==="TEMPLATE"&&(c=f)}else c=d;const u=n0(c,this.directives);this.fragment=u.fragment,this.viewBehaviorFactories=u.viewBehaviorFactories,this.hostBehaviorFactories=u.hostBehaviorFactories,this.targetOffset=u.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const s=this.fragment.cloneNode(!0),i=this.viewBehaviorFactories,n=new Array(this.behaviorCount),o=me.createTemplateWalker(s);let r=0,a=this.targetOffset,l=o.nextNode();for(let c=i.length;r<c;++r){const d=i[r],u=d.targetIndex;for(;l!==null;)if(a===u){n[r]=d.createBehavior(l);break}else l=o.nextNode(),a++}if(this.hasHostBehaviors){const c=this.hostBehaviorFactories;for(let d=0,u=c.length;d<u;++d,++r)n[r]=c[d].createBehavior(e)}return new Rm(s,n)}render(e,s,i){typeof s=="string"&&(s=document.getElementById(s)),i===void 0&&(i=s);const n=this.create(i);return n.bind(e,Sr),n.appendTo(s),n}}const o0=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function N(t,...e){const s=[];let i="";for(let n=0,o=t.length-1;n<o;++n){const r=t[n];let a=e[n];if(i+=r,a instanceof lf){const l=a;a=()=>l}if(typeof a=="function"&&(a=new Su(a)),a instanceof Fm){const l=o0.exec(r);l!==null&&(a.targetName=l[2])}a instanceof Pl?(i+=a.createPlaceholder(s.length),s.push(a)):i+=a}return i+=t[t.length-1],new lf(i,s)}class cs{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=this.behaviors===null?e:this.behaviors.concat(e),this}}cs.create=(()=>{if(me.supportsAdoptedStyleSheets){const t=new Map;return e=>new r0(e,t)}return t=>new c0(t)})();function Iu(t){return t.map(e=>e instanceof cs?Iu(e.styles):[e]).reduce((e,s)=>e.concat(s),[])}function Em(t){return t.map(e=>e instanceof cs?e.behaviors:null).reduce((e,s)=>s===null?e:(e===null&&(e=[]),e.concat(s)),null)}let Om=(t,e)=>{t.adoptedStyleSheets=[...t.adoptedStyleSheets,...e]},Am=(t,e)=>{t.adoptedStyleSheets=t.adoptedStyleSheets.filter(s=>e.indexOf(s)===-1)};if(me.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),Om=(t,e)=>{t.adoptedStyleSheets.push(...e)},Am=(t,e)=>{for(const s of e){const i=t.adoptedStyleSheets.indexOf(s);i!==-1&&t.adoptedStyleSheets.splice(i,1)}}}catch{}class r0 extends cs{constructor(e,s){super(),this.styles=e,this.styleSheetCache=s,this._styleSheets=void 0,this.behaviors=Em(e)}get styleSheets(){if(this._styleSheets===void 0){const e=this.styles,s=this.styleSheetCache;this._styleSheets=Iu(e).map(i=>{if(i instanceof CSSStyleSheet)return i;let n=s.get(i);return n===void 0&&(n=new CSSStyleSheet,n.replaceSync(i),s.set(i,n)),n})}return this._styleSheets}addStylesTo(e){Om(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){Am(e,this.styleSheets),super.removeStylesFrom(e)}}let a0=0;function l0(){return`fast-style-class-${++a0}`}class c0 extends cs{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=Em(e),this.styleSheets=Iu(e),this.styleClass=l0()}addStylesTo(e){const s=this.styleSheets,i=this.styleClass;e=this.normalizeTarget(e);for(let n=0;n<s.length;n++){const o=document.createElement("style");o.innerHTML=s[n],o.className=i,e.append(o)}super.addStylesTo(e)}removeStylesFrom(e){e=this.normalizeTarget(e);const s=e.querySelectorAll(`.${this.styleClass}`);for(let i=0,n=s.length;i<n;++i)e.removeChild(s[i]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const hl=Object.freeze({locate:Sm()}),ca={toView(t){return t?"true":"false"},fromView(t){return!(t==null||t==="false"||t===!1||t===0)}},se={toView(t){if(t==null)return null;const e=t*1;return isNaN(e)?null:e.toString()},fromView(t){if(t==null)return null;const e=t*1;return isNaN(e)?null:e}};class fl{constructor(e,s,i=s.toLowerCase(),n="reflect",o){this.guards=new Set,this.Owner=e,this.name=s,this.attribute=i,this.mode=n,this.converter=o,this.fieldName=`_${s}`,this.callbackName=`${s}Changed`,this.hasCallback=this.callbackName in e.prototype,n==="boolean"&&o===void 0&&(this.converter=ca)}setValue(e,s){const i=e[this.fieldName],n=this.converter;n!==void 0&&(s=n.fromView(s)),i!==s&&(e[this.fieldName]=s,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](i,s),e.$fastController.notify(this.name))}getValue(e){return fe.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,s){this.guards.has(e)||(this.guards.add(e),this.setValue(e,s),this.guards.delete(e))}tryReflectToAttribute(e){const s=this.mode,i=this.guards;i.has(e)||s==="fromView"||me.queueUpdate(()=>{i.add(e);const n=e[this.fieldName];switch(s){case"reflect":const o=this.converter;me.setAttribute(e,this.attribute,o!==void 0?o.toView(n):n);break;case"boolean":me.setBooleanAttribute(e,this.attribute,n);break}i.delete(e)})}static collect(e,...s){const i=[];s.push(hl.locate(e));for(let n=0,o=s.length;n<o;++n){const r=s[n];if(r!==void 0)for(let a=0,l=r.length;a<l;++a){const c=r[a];typeof c=="string"?i.push(new fl(e,c)):i.push(new fl(e,c.property,c.attribute,c.mode,c.converter))}}return i}}function p(t,e){let s;function i(n,o){arguments.length>1&&(s.property=o),hl.locate(n.constructor).push(s)}if(arguments.length>1){s={},i(t,e);return}return s=t===void 0?{}:t,i}const cf={mode:"open"},df={},Vd=Hr.getById(4,()=>{const t=new Map;return Object.freeze({register(e){return t.has(e.type)?!1:(t.set(e.type,e),!0)},getByType(e){return t.get(e)}})});class Ll{constructor(e,s=e.definition){typeof s=="string"&&(s={name:s}),this.type=e,this.name=s.name,this.template=s.template;const i=fl.collect(e,s.attributes),n=new Array(i.length),o={},r={};for(let a=0,l=i.length;a<l;++a){const c=i[a];n[a]=c.attribute,o[c.name]=c,r[c.attribute]=c}this.attributes=i,this.observedAttributes=n,this.propertyLookup=o,this.attributeLookup=r,this.shadowOptions=s.shadowOptions===void 0?cf:s.shadowOptions===null?void 0:Object.assign(Object.assign({},cf),s.shadowOptions),this.elementOptions=s.elementOptions===void 0?df:Object.assign(Object.assign({},df),s.elementOptions),this.styles=s.styles===void 0?void 0:Array.isArray(s.styles)?cs.create(s.styles):s.styles instanceof cs?s.styles:cs.create([s.styles])}get isDefined(){return!!Vd.getByType(this.type)}define(e=customElements){const s=this.type;if(Vd.register(this)){const i=this.attributes,n=s.prototype;for(let o=0,r=i.length;o<r;++o)fe.defineProperty(n,i[o]);Reflect.defineProperty(s,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,s,this.elementOptions),this}}Ll.forType=Vd.getByType;const Pm=new WeakMap,d0={bubbles:!0,composed:!0,cancelable:!0};function id(t){return t.shadowRoot||Pm.get(t)||null}class Tu extends Tm{constructor(e,s){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=s;const i=s.shadowOptions;if(i!==void 0){const o=e.attachShadow(i);i.mode==="closed"&&Pm.set(e,o)}const n=fe.getAccessors(e);if(n.length>0){const o=this.boundObservables=Object.create(null);for(let r=0,a=n.length;r<a;++r){const l=n[r].name,c=e[l];c!==void 0&&(delete e[l],o[l]=c)}}}get isConnected(){return fe.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,fe.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=e,!this.needsInitialization&&e!==null&&this.addStyles(e))}addStyles(e){const s=id(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)s.append(e);else if(!e.isAttachedTo(s)){const i=e.behaviors;e.addStylesTo(s),i!==null&&this.addBehaviors(i)}}removeStyles(e){const s=id(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)s.removeChild(e);else if(e.isAttachedTo(s)){const i=e.behaviors;e.removeStylesFrom(s),i!==null&&this.removeBehaviors(i)}}addBehaviors(e){const s=this.behaviors||(this.behaviors=new Map),i=e.length,n=[];for(let o=0;o<i;++o){const r=e[o];s.has(r)?s.set(r,s.get(r)+1):(s.set(r,1),n.push(r))}if(this._isConnected){const o=this.element;for(let r=0;r<n.length;++r)n[r].bind(o,Sr)}}removeBehaviors(e,s=!1){const i=this.behaviors;if(i===null)return;const n=e.length,o=[];for(let r=0;r<n;++r){const a=e[r];if(i.has(a)){const l=i.get(a)-1;l===0||s?i.delete(a)&&o.push(a):i.set(a,l)}}if(this._isConnected){const r=this.element;for(let a=0;a<o.length;++a)o[a].unbind(r)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(e,Sr);const s=this.behaviors;if(s!==null)for(const[i]of s)i.bind(e,Sr);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;e!==null&&e.unbind();const s=this.behaviors;if(s!==null){const i=this.element;for(const[n]of s)n.unbind(i)}}onAttributeChangedCallback(e,s,i){const n=this.definition.attributeLookup[e];n!==void 0&&n.onAttributeChangedCallback(this.element,i)}emit(e,s,i){return this._isConnected?this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:s},d0),i))):!1}finishInitialization(){const e=this.element,s=this.boundObservables;if(s!==null){const n=Object.keys(s);for(let o=0,r=n.length;o<r;++o){const a=n[o];e[a]=s[a]}this.boundObservables=null}const i=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():i.template&&(this._template=i.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():i.styles&&(this._styles=i.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const s=this.element,i=id(s)||s;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||me.removeChildNodes(i),e&&(this.view=e.render(s,i,s))}static forCustomElement(e){const s=e.$fastController;if(s!==void 0)return s;const i=Ll.forType(e.constructor);if(i===void 0)throw new Error("Missing FASTElement definition.");return e.$fastController=new Tu(e,i)}}function uf(t){return class extends t{constructor(){super(),Tu.forCustomElement(this)}$emit(e,s,i){return this.$fastController.emit(e,s,i)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,s,i){this.$fastController.onAttributeChangedCallback(e,s,i)}}}const Ml=Object.assign(uf(HTMLElement),{from(t){return uf(t)},define(t,e){return new Ll(t,e).define().type}});class Fu{createCSS(){return""}createBehavior(){}}function Lm(t,e){const s=[];let i="";const n=[];for(let o=0,r=t.length-1;o<r;++o){i+=t[o];let a=e[o];if(a instanceof Fu){const l=a.createBehavior();a=a.createCSS(),l&&n.push(l)}a instanceof cs||a instanceof CSSStyleSheet?(i.trim()!==""&&(s.push(i),i=""),s.push(a)):i+=a}return i+=t[t.length-1],i.trim()!==""&&s.push(i),{styles:s,behaviors:n}}function M(t,...e){const{styles:s,behaviors:i}=Lm(t,e),n=cs.create(s);return i.length&&n.withBehaviors(...i),n}class u0 extends Fu{constructor(e,s){super(),this.behaviors=s,this.css="";const i=e.reduce((n,o)=>(typeof o=="string"?this.css+=o:n.push(o),n),[]);i.length&&(this.styles=cs.create(i))}createBehavior(){return this}createCSS(){return this.css}bind(e){this.styles&&e.$fastController.addStyles(this.styles),this.behaviors.length&&e.$fastController.addBehaviors(this.behaviors)}unbind(e){this.styles&&e.$fastController.removeStyles(this.styles),this.behaviors.length&&e.$fastController.removeBehaviors(this.behaviors)}}function Fs(t,...e){const{styles:s,behaviors:i}=Lm(t,e);return new u0(s,i)}function Js(t,e,s){return{index:t,removed:e,addedCount:s}}const Mm=0,Vm=1,Hd=2,Nd=3;function h0(t,e,s,i,n,o){const r=o-n+1,a=s-e+1,l=new Array(r);let c,d;for(let u=0;u<r;++u)l[u]=new Array(a),l[u][0]=u;for(let u=0;u<a;++u)l[0][u]=u;for(let u=1;u<r;++u)for(let f=1;f<a;++f)t[e+f-1]===i[n+u-1]?l[u][f]=l[u-1][f-1]:(c=l[u-1][f]+1,d=l[u][f-1]+1,l[u][f]=c<d?c:d);return l}function f0(t){let e=t.length-1,s=t[0].length-1,i=t[e][s];const n=[];for(;e>0||s>0;){if(e===0){n.push(Hd),s--;continue}if(s===0){n.push(Nd),e--;continue}const o=t[e-1][s-1],r=t[e-1][s],a=t[e][s-1];let l;r<a?l=r<o?r:o:l=a<o?a:o,l===o?(o===i?n.push(Mm):(n.push(Vm),i=o),e--,s--):l===r?(n.push(Nd),e--,i=r):(n.push(Hd),s--,i=a)}return n.reverse(),n}function p0(t,e,s){for(let i=0;i<s;++i)if(t[i]!==e[i])return i;return s}function m0(t,e,s){let i=t.length,n=e.length,o=0;for(;o<s&&t[--i]===e[--n];)o++;return o}function g0(t,e,s,i){return e<s||i<t?-1:e===s||i===t?0:t<s?e<i?e-s:i-s:i<e?i-t:e-t}function Hm(t,e,s,i,n,o){let r=0,a=0;const l=Math.min(s-e,o-n);if(e===0&&n===0&&(r=p0(t,i,l)),s===t.length&&o===i.length&&(a=m0(t,i,l-r)),e+=r,n+=r,s-=a,o-=a,s-e===0&&o-n===0)return Un;if(e===s){const w=Js(e,[],0);for(;n<o;)w.removed.push(i[n++]);return[w]}else if(n===o)return[Js(e,[],s-e)];const c=f0(h0(t,e,s,i,n,o)),d=[];let u,f=e,y=n;for(let w=0;w<c.length;++w)switch(c[w]){case Mm:u!==void 0&&(d.push(u),u=void 0),f++,y++;break;case Vm:u===void 0&&(u=Js(f,[],0)),u.addedCount++,f++,u.removed.push(i[y]),y++;break;case Hd:u===void 0&&(u=Js(f,[],0)),u.addedCount++,f++;break;case Nd:u===void 0&&(u=Js(f,[],0)),u.removed.push(i[y]),y++;break}return u!==void 0&&d.push(u),d}const hf=Array.prototype.push;function v0(t,e,s,i){const n=Js(e,s,i);let o=!1,r=0;for(let a=0;a<t.length;a++){const l=t[a];if(l.index+=r,o)continue;const c=g0(n.index,n.index+n.removed.length,l.index,l.index+l.addedCount);if(c>=0){t.splice(a,1),a--,r-=l.addedCount-l.removed.length,n.addedCount+=l.addedCount-c;const d=n.removed.length+l.removed.length-c;if(!n.addedCount&&!d)o=!0;else{let u=l.removed;if(n.index<l.index){const f=n.removed.slice(0,l.index-n.index);hf.apply(f,u),u=f}if(n.index+n.removed.length>l.index+l.addedCount){const f=n.removed.slice(l.index+l.addedCount-n.index);hf.apply(u,f)}n.removed=u,l.index<n.index&&(n.index=l.index)}}else if(n.index<l.index){o=!0,t.splice(a,0,n),a++;const d=n.addedCount-n.removed.length;l.index+=d,r+=d}}o||t.push(n)}function b0(t){const e=[];for(let s=0,i=t.length;s<i;s++){const n=t[s];v0(e,n.index,n.removed,n.addedCount)}return e}function y0(t,e){let s=[];const i=b0(e);for(let n=0,o=i.length;n<o;++n){const r=i[n];if(r.addedCount===1&&r.removed.length===1){r.removed[0]!==t[r.index]&&s.push(r);continue}s=s.concat(Hm(t,r.index,r.index+r.addedCount,r.removed,0,r.removed.length))}return s}let ff=!1;function nd(t,e){let s=t.index;const i=e.length;return s>i?s=i-t.addedCount:s<0&&(s=i+t.removed.length+s-t.addedCount),s<0&&(s=0),t.index=s,t}class x0 extends ul{constructor(e){super(e),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(e,"$fastController",{value:this,enumerable:!1})}subscribe(e){this.flush(),super.subscribe(e)}addSplice(e){this.splices===void 0?this.splices=[e]:this.splices.push(e),this.needsQueue&&(this.needsQueue=!1,me.queueUpdate(this))}reset(e){this.oldCollection=e,this.needsQueue&&(this.needsQueue=!1,me.queueUpdate(this))}flush(){const e=this.splices,s=this.oldCollection;if(e===void 0&&s===void 0)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const i=s===void 0?y0(this.source,e):Hm(this.source,0,this.source.length,s,0,s.length);this.notify(i)}}function w0(){if(ff)return;ff=!0,fe.setArrayObserverFactory(l=>new x0(l));const t=Array.prototype;if(t.$fastPatch)return;Reflect.defineProperty(t,"$fastPatch",{value:1,enumerable:!1});const e=t.pop,s=t.push,i=t.reverse,n=t.shift,o=t.sort,r=t.splice,a=t.unshift;t.pop=function(){const l=this.length>0,c=e.apply(this,arguments),d=this.$fastController;return d!==void 0&&l&&d.addSplice(Js(this.length,[c],0)),c},t.push=function(){const l=s.apply(this,arguments),c=this.$fastController;return c!==void 0&&c.addSplice(nd(Js(this.length-arguments.length,[],arguments.length),this)),l},t.reverse=function(){let l;const c=this.$fastController;c!==void 0&&(c.flush(),l=this.slice());const d=i.apply(this,arguments);return c!==void 0&&c.reset(l),d},t.shift=function(){const l=this.length>0,c=n.apply(this,arguments),d=this.$fastController;return d!==void 0&&l&&d.addSplice(Js(0,[c],0)),c},t.sort=function(){let l;const c=this.$fastController;c!==void 0&&(c.flush(),l=this.slice());const d=o.apply(this,arguments);return c!==void 0&&c.reset(l),d},t.splice=function(){const l=r.apply(this,arguments),c=this.$fastController;return c!==void 0&&c.addSplice(nd(Js(+arguments[0],l,arguments.length>2?arguments.length-2:0),this)),l},t.unshift=function(){const l=a.apply(this,arguments),c=this.$fastController;return c!==void 0&&c.addSplice(nd(Js(0,[],arguments.length),this)),l}}class $0{constructor(e,s){this.target=e,this.propertyName=s}bind(e){e[this.propertyName]=this.target}unbind(){}}function Be(t){return new _u("fast-ref",$0,t)}const Nm=t=>typeof t=="function",k0=()=>null;function pf(t){return t===void 0?k0:Nm(t)?t:()=>t}function xt(t,e,s){const i=Nm(t)?t:()=>t,n=pf(e),o=pf(s);return(r,a)=>i(r,a)?n(r,a):o(r,a)}const mf=Object.freeze({positioning:!1,recycle:!0});function _0(t,e,s,i){t.bind(e[s],i)}function S0(t,e,s,i){const n=Object.create(i);n.index=s,n.length=e.length,t.bind(e[s],n)}class C0{constructor(e,s,i,n,o,r){this.location=e,this.itemsBinding=s,this.templateBinding=n,this.options=r,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=_0,this.itemsBindingObserver=fe.binding(s,this,i),this.templateBindingObserver=fe.binding(n,this,o),r.positioning&&(this.bindView=S0)}bind(e,s){this.source=e,this.originalContext=s,this.childContext=Object.create(s),this.childContext.parent=e,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(e,this.originalContext),this.template=this.templateBindingObserver.observe(e,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,this.itemsObserver!==null&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(e,s){e===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):e===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(s)}observeItems(e=!1){if(!this.items){this.items=Un;return}const s=this.itemsObserver,i=this.itemsObserver=fe.getNotifier(this.items),n=s!==i;n&&s!==null&&s.unsubscribe(this),(n||e)&&i.subscribe(this)}updateViews(e){const s=this.childContext,i=this.views,n=this.bindView,o=this.items,r=this.template,a=this.options.recycle,l=[];let c=0,d=0;for(let u=0,f=e.length;u<f;++u){const y=e[u],w=y.removed;let $=0,_=y.index;const A=_+y.addedCount,P=i.splice(y.index,w.length),re=d=l.length+P.length;for(;_<A;++_){const Y=i[_],ge=Y?Y.firstChild:this.location;let be;a&&d>0?($<=re&&P.length>0?(be=P[$],$++):(be=l[c],c++),d--):be=r.create(),i.splice(_,0,be),n(be,o,_,s),be.insertBefore(ge)}P[$]&&l.push(...P.slice($))}for(let u=c,f=l.length;u<f;++u)l[u].dispose();if(this.options.positioning)for(let u=0,f=i.length;u<f;++u){const y=i[u].context;y.length=f,y.index=u}}refreshAllViews(e=!1){const s=this.items,i=this.childContext,n=this.template,o=this.location,r=this.bindView;let a=s.length,l=this.views,c=l.length;if((a===0||e||!this.options.recycle)&&(Rm.disposeContiguousBatch(l),c=0),c===0){this.views=l=new Array(a);for(let d=0;d<a;++d){const u=n.create();r(u,s,d,i),l[d]=u,u.insertBefore(o)}}else{let d=0;for(;d<a;++d)if(d<c){const f=l[d];r(f,s,d,i)}else{const f=n.create();r(f,s,d,i),l.push(f),f.insertBefore(o)}const u=l.splice(d,c-d);for(d=0,a=u.length;d<a;++d)u[d].dispose()}}unbindAllViews(){const e=this.views;for(let s=0,i=e.length;s<i;++s)e[s].unbind()}}class Du extends Pl{constructor(e,s,i){super(),this.itemsBinding=e,this.templateBinding=s,this.options=i,this.createPlaceholder=me.createBlockPlaceholder,w0(),this.isItemsBindingVolatile=fe.isVolatileBinding(e),this.isTemplateBindingVolatile=fe.isVolatileBinding(s)}createBehavior(e){return new C0(e,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}function So(t,e,s=mf){const i=typeof e=="function"?e:()=>e;return new Du(t,i,Object.assign(Object.assign({},mf),s))}function Mi(t){return t?function(e,s,i){return e.nodeType===1&&e.matches(t)}:function(e,s,i){return e.nodeType===1}}class zm{constructor(e,s){this.target=e,this.options=s,this.source=null}bind(e){const s=this.options.property;this.shouldUpdate=fe.getAccessors(e).some(i=>i.name===s),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(Un),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return this.options.filter!==void 0&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class I0 extends zm{constructor(e,s){super(e,s)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function ut(t){return typeof t=="string"&&(t={property:t}),new _u("fast-slotted",I0,t)}class T0 extends zm{constructor(e,s){super(e,s),this.observer=null,s.childList=!0}observe(){this.observer===null&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function Vl(t){return typeof t=="string"&&(t={property:t}),new _u("fast-children",T0,t)}class ws{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const ds=(t,e)=>N`
    <span
        part="end"
        ${Be("endContainer")}
        class=${s=>e.end?"end":void 0}
    >
        <slot name="end" ${Be("end")} @slotchange="${s=>s.handleEndContentChange()}">
            ${e.end||""}
        </slot>
    </span>
`,us=(t,e)=>N`
    <span
        part="start"
        ${Be("startContainer")}
        class="${s=>e.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Be("start")}
            @slotchange="${s=>s.handleStartContentChange()}"
        >
            ${e.start||""}
        </slot>
    </span>
`,F0=N`
    <span part="end" ${Be("endContainer")}>
        <slot
            name="end"
            ${Be("end")}
            @slotchange="${t=>t.handleEndContentChange()}"
        ></slot>
    </span>
`,D0=N`
    <span part="start" ${Be("startContainer")}>
        <slot
            name="start"
            ${Be("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        ></slot>
    </span>
`,R0=(t,e)=>N`
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
                ${Be("expandbutton")}
                aria-expanded="${s=>s.expanded}"
                aria-controls="${s=>s.id}-panel"
                id="${s=>s.id}"
                @click="${(s,i)=>s.clickHandler(i.event)}"
            >
                <span class="heading-content" part="heading-content">
                    <slot name="heading"></slot>
                </span>
            </button>
            ${us(t,e)}
            ${ds(t,e)}
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
***************************************************************************** */function h(t,e,s,i){var n=arguments.length,o=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,s):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,s,o):r(e,s))||o);return n>3&&o&&Object.defineProperty(e,s,o),o}const od=new Map;"metadata"in Reflect||(Reflect.metadata=function(t,e){return function(s){Reflect.defineMetadata(t,e,s)}},Reflect.defineMetadata=function(t,e,s){let i=od.get(s);i===void 0&&od.set(s,i=new Map),i.set(t,e)},Reflect.getOwnMetadata=function(t,e){const s=od.get(e);if(s!==void 0)return s.get(t)});class E0{constructor(e,s){this.container=e,this.key=s}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,jm(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,s){const{container:i,key:n}=this;return this.container=this.key=void 0,i.registerResolver(n,new Vs(n,e,s))}}function dr(t){const e=t.slice(),s=Object.keys(t),i=s.length;let n;for(let o=0;o<i;++o)n=s[o],Um(n)||(e[n]=t[n]);return e}const O0=Object.freeze({none(t){throw Error(`${t.toString()} not registered, did you forget to add @singleton()?`)},singleton(t){return new Vs(t,1,t)},transient(t){return new Vs(t,2,t)}}),rd=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:O0.singleton})}),gf=new Map;function vf(t){return e=>Reflect.getOwnMetadata(t,e)}let bf=null;const bt=Object.freeze({createContainer(t){return new Cr(null,Object.assign({},rd.default,t))},findResponsibleContainer(t){const e=t.$$container$$;return e&&e.responsibleForOwnerRequests?e:bt.findParentContainer(t)},findParentContainer(t){const e=new CustomEvent(Bm,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return t.dispatchEvent(e),e.detail.container||bt.getOrCreateDOMContainer()},getOrCreateDOMContainer(t,e){return t?t.$$container$$||new Cr(t,Object.assign({},rd.default,e,{parentLocator:bt.findParentContainer})):bf||(bf=new Cr(null,Object.assign({},rd.default,e,{parentLocator:()=>null})))},getDesignParamtypes:vf("design:paramtypes"),getAnnotationParamtypes:vf("di:paramtypes"),getOrCreateAnnotationParamTypes(t){let e=this.getAnnotationParamtypes(t);return e===void 0&&Reflect.defineMetadata("di:paramtypes",e=[],t),e},getDependencies(t){let e=gf.get(t);if(e===void 0){const s=t.inject;if(s===void 0){const i=bt.getDesignParamtypes(t),n=bt.getAnnotationParamtypes(t);if(i===void 0)if(n===void 0){const o=Object.getPrototypeOf(t);typeof o=="function"&&o!==Function.prototype?e=dr(bt.getDependencies(o)):e=[]}else e=dr(n);else if(n===void 0)e=dr(i);else{e=dr(i);let o=n.length,r;for(let c=0;c<o;++c)r=n[c],r!==void 0&&(e[c]=r);const a=Object.keys(n);o=a.length;let l;for(let c=0;c<o;++c)l=a[c],Um(l)||(e[l]=n[l])}}else e=dr(s);gf.set(t,e)}return e},defineProperty(t,e,s,i=!1){const n=`$di_${e}`;Reflect.defineProperty(t,e,{get:function(){let o=this[n];if(o===void 0&&(o=(this instanceof HTMLElement?bt.findResponsibleContainer(this):bt.getOrCreateDOMContainer()).get(s),this[n]=o,i&&this instanceof Ml)){const a=this.$fastController,l=()=>{const d=bt.findResponsibleContainer(this).get(s),u=this[n];d!==u&&(this[n]=o,a.notify(e))};a.subscribe({handleChange:l},"isConnected")}return o}})},createInterface(t,e){const s=typeof t=="function"?t:e,i=typeof t=="string"?t:t&&"friendlyName"in t&&t.friendlyName||$f,n=typeof t=="string"?!1:t&&"respectConnection"in t&&t.respectConnection||!1,o=function(r,a,l){if(r==null||new.target!==void 0)throw new Error(`No registration for interface: '${o.friendlyName}'`);if(a)bt.defineProperty(r,a,o,n);else{const c=bt.getOrCreateAnnotationParamTypes(r);c[l]=o}};return o.$isInterface=!0,o.friendlyName=i??"(anonymous)",s!=null&&(o.register=function(r,a){return s(new E0(r,a??o))}),o.toString=function(){return`InterfaceSymbol<${o.friendlyName}>`},o},inject(...t){return function(e,s,i){if(typeof i=="number"){const n=bt.getOrCreateAnnotationParamTypes(e),o=t[0];o!==void 0&&(n[i]=o)}else if(s)bt.defineProperty(e,s,t[0]);else{const n=i?bt.getOrCreateAnnotationParamTypes(i.value):bt.getOrCreateAnnotationParamTypes(e);let o;for(let r=0;r<t.length;++r)o=t[r],o!==void 0&&(n[r]=o)}}},transient(t){return t.register=function(s){return zr.transient(t,t).register(s)},t.registerInRequestor=!1,t},singleton(t,e=P0){return t.register=function(i){return zr.singleton(t,t).register(i)},t.registerInRequestor=e.scoped,t}}),A0=bt.createInterface("Container");bt.inject;const P0={scoped:!1};class Vs{constructor(e,s,i){this.key=e,this.strategy=s,this.state=i,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,s){switch(this.strategy){case 0:return this.state;case 1:{if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(s),this.strategy=0,this.resolving=!1,this.state}case 2:{const i=e.getFactory(this.state);if(i===null)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return i.construct(s)}case 3:return this.state(e,s,this);case 4:return this.state[0].resolve(e,s);case 5:return s.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var s,i,n;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return(n=(i=(s=e.getResolver(this.state))===null||s===void 0?void 0:s.getFactory)===null||i===void 0?void 0:i.call(s,e))!==null&&n!==void 0?n:null;default:return null}}}function yf(t){return this.get(t)}function L0(t,e){return e(t)}class M0{constructor(e,s){this.Type=e,this.dependencies=s,this.transformers=null}construct(e,s){let i;return s===void 0?i=new this.Type(...this.dependencies.map(yf,e)):i=new this.Type(...this.dependencies.map(yf,e),...s),this.transformers==null?i:this.transformers.reduce(L0,i)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const V0={$isResolver:!0,resolve(t,e){return e}};function el(t){return typeof t.register=="function"}function H0(t){return el(t)&&typeof t.registerInRequestor=="boolean"}function xf(t){return H0(t)&&t.registerInRequestor}function N0(t){return t.prototype!==void 0}const z0=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),Bm="__DI_LOCATE_PARENT__",ad=new Map;class Cr{constructor(e,s){this.owner=e,this.config=s,this._parent=void 0,this.registerDepth=0,this.context=null,e!==null&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(A0,V0),e instanceof Node&&e.addEventListener(Bm,i=>{i.composedPath()[0]!==this.owner&&(i.detail.container=this,i.stopImmediatePropagation())})}get parent(){return this._parent===void 0&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return this.parent===null?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...s){return this.context=e,this.register(...s),this.context=null,this}register(...e){if(++this.registerDepth===100)throw new Error("Unable to autoregister dependency");let s,i,n,o,r;const a=this.context;for(let l=0,c=e.length;l<c;++l)if(s=e[l],!!kf(s))if(el(s))s.register(this,a);else if(N0(s))zr.singleton(s,s).register(this);else for(i=Object.keys(s),o=0,r=i.length;o<r;++o)n=s[i[o]],kf(n)&&(el(n)?n.register(this,a):this.register(n));return--this.registerDepth,this}registerResolver(e,s){Ta(e);const i=this.resolvers,n=i.get(e);return n==null?i.set(e,s):n instanceof Vs&&n.strategy===4?n.state.push(s):i.set(e,new Vs(e,4,[n,s])),s}registerTransformer(e,s){const i=this.getResolver(e);if(i==null)return!1;if(i.getFactory){const n=i.getFactory(this);return n==null?!1:(n.registerTransformer(s),!0)}return!1}getResolver(e,s=!0){if(Ta(e),e.resolve!==void 0)return e;let i=this,n;for(;i!=null;)if(n=i.resolvers.get(e),n==null){if(i.parent==null){const o=xf(e)?this:i;return s?this.jitRegister(e,o):null}i=i.parent}else return n;return null}has(e,s=!1){return this.resolvers.has(e)?!0:s&&this.parent!=null?this.parent.has(e,!0):!1}get(e){if(Ta(e),e.$isResolver)return e.resolve(this,this);let s=this,i;for(;s!=null;)if(i=s.resolvers.get(e),i==null){if(s.parent==null){const n=xf(e)?this:s;return i=this.jitRegister(e,n),i.resolve(s,this)}s=s.parent}else return i.resolve(s,this);throw new Error(`Unable to resolve key: ${e}`)}getAll(e,s=!1){Ta(e);const i=this;let n=i,o;if(s){let r=Un;for(;n!=null;)o=n.resolvers.get(e),o!=null&&(r=r.concat(wf(o,n,i))),n=n.parent;return r}else for(;n!=null;)if(o=n.resolvers.get(e),o==null){if(n=n.parent,n==null)return Un}else return wf(o,n,i);return Un}getFactory(e){let s=ad.get(e);if(s===void 0){if(B0(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);ad.set(e,s=new M0(e,bt.getDependencies(e)))}return s}registerFactory(e,s){ad.set(e,s)}createChild(e){return new Cr(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,s){if(typeof e!="function")throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(z0.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(el(e)){const i=e.register(s);if(!(i instanceof Object)||i.resolve==null){const n=s.resolvers.get(e);if(n!=null)return n;throw new Error("A valid resolver was not returned from the static register method")}return i}else{if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const i=this.config.defaultResolver(e,s);return s.resolvers.set(e,i),i}}}}const ld=new WeakMap;function jm(t){return function(e,s,i){if(ld.has(i))return ld.get(i);const n=t(e,s,i);return ld.set(i,n),n}}const zr=Object.freeze({instance(t,e){return new Vs(t,0,e)},singleton(t,e){return new Vs(t,1,e)},transient(t,e){return new Vs(t,2,e)},callback(t,e){return new Vs(t,3,e)},cachedCallback(t,e){return new Vs(t,3,jm(e))},aliasTo(t,e){return new Vs(e,5,t)}});function Ta(t){if(t==null)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function wf(t,e,s){if(t instanceof Vs&&t.strategy===4){const i=t.state;let n=i.length;const o=new Array(n);for(;n--;)o[n]=i[n].resolve(e,s);return o}return[t.resolve(e,s)]}const $f="(anonymous)";function kf(t){return typeof t=="object"&&t!==null||typeof t=="function"}const B0=function(){const t=new WeakMap;let e=!1,s="",i=0;return function(n){return e=t.get(n),e===void 0&&(s=n.toString(),i=s.length,e=i>=29&&i<=100&&s.charCodeAt(i-1)===125&&s.charCodeAt(i-2)<=32&&s.charCodeAt(i-3)===93&&s.charCodeAt(i-4)===101&&s.charCodeAt(i-5)===100&&s.charCodeAt(i-6)===111&&s.charCodeAt(i-7)===99&&s.charCodeAt(i-8)===32&&s.charCodeAt(i-9)===101&&s.charCodeAt(i-10)===118&&s.charCodeAt(i-11)===105&&s.charCodeAt(i-12)===116&&s.charCodeAt(i-13)===97&&s.charCodeAt(i-14)===110&&s.charCodeAt(i-15)===88,t.set(n,e)),e}}(),Fa={};function Um(t){switch(typeof t){case"number":return t>=0&&(t|0)===t;case"string":{const e=Fa[t];if(e!==void 0)return e;const s=t.length;if(s===0)return Fa[t]=!1;let i=0;for(let n=0;n<s;++n)if(i=t.charCodeAt(n),n===0&&i===48&&s>1||i<48||i>57)return Fa[t]=!1;return Fa[t]=!0}default:return!1}}function _f(t){return`${t.toLowerCase()}:presentation`}const Da=new Map,Ym=Object.freeze({define(t,e,s){const i=_f(t);Da.get(i)===void 0?Da.set(i,e):Da.set(i,!1),s.register(zr.instance(i,e))},forTag(t,e){const s=_f(t),i=Da.get(s);return i===!1?bt.findResponsibleContainer(e).get(s):i||null}});class j0{constructor(e,s){this.template=e||null,this.styles=s===void 0?null:Array.isArray(s)?cs.create(s):s instanceof cs?s:cs.create([s])}applyTo(e){const s=e.$fastController;s.template===null&&(s.template=this.template),s.styles===null&&(s.styles=this.styles)}}class $e extends Ml{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return this._presentation===void 0&&(this._presentation=Ym.forTag(this.tagName,this)),this._presentation}templateChanged(){this.template!==void 0&&(this.$fastController.template=this.template)}stylesChanged(){this.styles!==void 0&&(this.$fastController.styles=this.styles)}connectedCallback(){this.$presentation!==null&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(s={})=>new U0(this===$e?class extends $e{}:this,e,s)}}h([I],$e.prototype,"template",void 0);h([I],$e.prototype,"styles",void 0);function ur(t,e,s){return typeof t=="function"?t(e,s):t}class U0{constructor(e,s,i){this.type=e,this.elementDefinition=s,this.overrideDefinition=i,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,s){const i=this.definition,n=this.overrideDefinition,r=`${i.prefix||s.elementPrefix}-${i.baseName}`;s.tryDefineElement({name:r,type:this.type,baseClass:this.elementDefinition.baseClass,callback:a=>{const l=new j0(ur(i.template,a,i),ur(i.styles,a,i));a.definePresentation(l);let c=ur(i.shadowOptions,a,i);a.shadowRootMode&&(c?n.shadowOptions||(c.mode=a.shadowRootMode):c!==null&&(c={mode:a.shadowRootMode})),a.defineElement({elementOptions:ur(i.elementOptions,a,i),shadowOptions:c,attributes:ur(i.attributes,a,i)})}})}}function ft(t,...e){const s=hl.locate(t);e.forEach(i=>{Object.getOwnPropertyNames(i.prototype).forEach(o=>{o!=="constructor"&&Object.defineProperty(t.prototype,o,Object.getOwnPropertyDescriptor(i.prototype,o))}),hl.locate(i).forEach(o=>s.push(o))})}class Zn extends $e{constructor(){super(...arguments),this.headinglevel=2,this.expanded=!1,this.clickHandler=e=>{this.expanded=!this.expanded,this.change()},this.change=()=>{this.$emit("change")}}}h([p({attribute:"heading-level",mode:"fromView",converter:se})],Zn.prototype,"headinglevel",void 0);h([p({mode:"boolean"})],Zn.prototype,"expanded",void 0);h([p],Zn.prototype,"id",void 0);ft(Zn,ws);const Y0=(t,e)=>N`
    <template>
        <slot ${ut({property:"accordionItems",filter:Mi()})}></slot>
        <slot name="item" part="item" ${ut("accordionItems")}></slot>
    </template>
`,St={horizontal:"horizontal",vertical:"vertical"};function W0(t,e){let s=t.length;for(;s--;)if(e(t[s],s,t))return s;return-1}function q0(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Mo(...t){return t.every(e=>e instanceof HTMLElement)}function G0(t,e){return!t||!e||!Mo(t)?void 0:Array.from(t.querySelectorAll(e)).filter(i=>i.offsetParent!==null)}function Z0(){const t=document.querySelector('meta[property="csp-nonce"]');return t?t.getAttribute("content"):null}let Rn;function X0(){if(typeof Rn=="boolean")return Rn;if(!q0())return Rn=!1,Rn;const t=document.createElement("style"),e=Z0();e!==null&&t.setAttribute("nonce",e),document.head.appendChild(t);try{t.sheet.insertRule("foo:focus-visible {color:inherit}",0),Rn=!0}catch{Rn=!1}finally{document.head.removeChild(t)}return Rn}const Sf="focus",Cf="focusin",Vo="focusout",Ho="keydown",If="resize",Tf="scroll";var Ff;(function(t){t[t.alt=18]="alt",t[t.arrowDown=40]="arrowDown",t[t.arrowLeft=37]="arrowLeft",t[t.arrowRight=39]="arrowRight",t[t.arrowUp=38]="arrowUp",t[t.back=8]="back",t[t.backSlash=220]="backSlash",t[t.break=19]="break",t[t.capsLock=20]="capsLock",t[t.closeBracket=221]="closeBracket",t[t.colon=186]="colon",t[t.colon2=59]="colon2",t[t.comma=188]="comma",t[t.ctrl=17]="ctrl",t[t.delete=46]="delete",t[t.end=35]="end",t[t.enter=13]="enter",t[t.equals=187]="equals",t[t.equals2=61]="equals2",t[t.equals3=107]="equals3",t[t.escape=27]="escape",t[t.forwardSlash=191]="forwardSlash",t[t.function1=112]="function1",t[t.function10=121]="function10",t[t.function11=122]="function11",t[t.function12=123]="function12",t[t.function2=113]="function2",t[t.function3=114]="function3",t[t.function4=115]="function4",t[t.function5=116]="function5",t[t.function6=117]="function6",t[t.function7=118]="function7",t[t.function8=119]="function8",t[t.function9=120]="function9",t[t.home=36]="home",t[t.insert=45]="insert",t[t.menu=93]="menu",t[t.minus=189]="minus",t[t.minus2=109]="minus2",t[t.numLock=144]="numLock",t[t.numPad0=96]="numPad0",t[t.numPad1=97]="numPad1",t[t.numPad2=98]="numPad2",t[t.numPad3=99]="numPad3",t[t.numPad4=100]="numPad4",t[t.numPad5=101]="numPad5",t[t.numPad6=102]="numPad6",t[t.numPad7=103]="numPad7",t[t.numPad8=104]="numPad8",t[t.numPad9=105]="numPad9",t[t.numPadDivide=111]="numPadDivide",t[t.numPadDot=110]="numPadDot",t[t.numPadMinus=109]="numPadMinus",t[t.numPadMultiply=106]="numPadMultiply",t[t.numPadPlus=107]="numPadPlus",t[t.openBracket=219]="openBracket",t[t.pageDown=34]="pageDown",t[t.pageUp=33]="pageUp",t[t.period=190]="period",t[t.print=44]="print",t[t.quote=222]="quote",t[t.scrollLock=145]="scrollLock",t[t.shift=16]="shift",t[t.space=32]="space",t[t.tab=9]="tab",t[t.tilde=192]="tilde",t[t.windowsLeft=91]="windowsLeft",t[t.windowsOpera=219]="windowsOpera",t[t.windowsRight=92]="windowsRight"})(Ff||(Ff={}));const Bs="ArrowDown",gn="ArrowLeft",vn="ArrowRight",js="ArrowUp",zi="Enter",Qo="Escape",yi="Home",xi="End",Q0="F2",J0="PageDown",K0="PageUp",to=" ",Hl="Tab",$o={ArrowDown:Bs,ArrowLeft:gn,ArrowRight:vn,ArrowUp:js};var ot;(function(t){t.ltr="ltr",t.rtl="rtl"})(ot||(ot={}));function ex(t,e,s){return s<t?e:s>e?t:s}function Nl(t,e,s){return Math.min(Math.max(s,t),e)}function Ra(t,e,s=0){return[e,s]=[e,s].sort((i,n)=>i-n),e<=t&&t<s}let tx=0;function Br(t=""){return`${t}${tx++}`}var b;(function(t){t.Canvas="Canvas",t.CanvasText="CanvasText",t.LinkText="LinkText",t.VisitedText="VisitedText",t.ActiveText="ActiveText",t.ButtonFace="ButtonFace",t.ButtonText="ButtonText",t.Field="Field",t.FieldText="FieldText",t.Highlight="Highlight",t.HighlightText="HighlightText",t.GrayText="GrayText"})(b||(b={}));const Df={single:"single",multi:"multi"};class Ru extends $e{constructor(){super(...arguments),this.expandmode=Df.multi,this.activeItemIndex=0,this.change=()=>{this.$emit("change",this.activeid)},this.setItems=()=>{var e;this.accordionItems.length!==0&&(this.accordionIds=this.getItemIds(),this.accordionItems.forEach((s,i)=>{s instanceof Zn&&(s.addEventListener("change",this.activeItemChange),this.isSingleExpandMode()&&(this.activeItemIndex!==i?s.expanded=!1:s.expanded=!0));const n=this.accordionIds[i];s.setAttribute("id",typeof n!="string"?`accordion-${i+1}`:n),this.activeid=this.accordionIds[this.activeItemIndex],s.addEventListener("keydown",this.handleItemKeyDown),s.addEventListener("focus",this.handleItemFocus)}),this.isSingleExpandMode()&&((e=this.findExpandedItem())!==null&&e!==void 0?e:this.accordionItems[0]).setAttribute("aria-disabled","true"))},this.removeItemListeners=e=>{e.forEach((s,i)=>{s.removeEventListener("change",this.activeItemChange),s.removeEventListener("keydown",this.handleItemKeyDown),s.removeEventListener("focus",this.handleItemFocus)})},this.activeItemChange=e=>{if(e.defaultPrevented||e.target!==e.currentTarget)return;e.preventDefault();const s=e.target;this.activeid=s.getAttribute("id"),this.isSingleExpandMode()&&(this.resetItems(),s.expanded=!0,s.setAttribute("aria-disabled","true"),this.accordionItems.forEach(i=>{!i.hasAttribute("disabled")&&i.id!==this.activeid&&i.removeAttribute("aria-disabled")})),this.activeItemIndex=Array.from(this.accordionItems).indexOf(s),this.change()},this.handleItemKeyDown=e=>{if(e.target===e.currentTarget)switch(this.accordionIds=this.getItemIds(),e.key){case js:e.preventDefault(),this.adjust(-1);break;case Bs:e.preventDefault(),this.adjust(1);break;case yi:this.activeItemIndex=0,this.focusItem();break;case xi:this.activeItemIndex=this.accordionItems.length-1,this.focusItem();break}},this.handleItemFocus=e=>{if(e.target===e.currentTarget){const s=e.target,i=this.activeItemIndex=Array.from(this.accordionItems).indexOf(s);this.activeItemIndex!==i&&i!==-1&&(this.activeItemIndex=i,this.activeid=this.accordionIds[this.activeItemIndex])}}}accordionItemsChanged(e,s){this.$fastController.isConnected&&(this.removeItemListeners(e),this.setItems())}findExpandedItem(){for(let e=0;e<this.accordionItems.length;e++)if(this.accordionItems[e].getAttribute("expanded")==="true")return this.accordionItems[e];return null}resetItems(){this.accordionItems.forEach((e,s)=>{e.expanded=!1})}getItemIds(){return this.accordionItems.map(e=>e.getAttribute("id"))}isSingleExpandMode(){return this.expandmode===Df.single}adjust(e){this.activeItemIndex=ex(0,this.accordionItems.length-1,this.activeItemIndex+e),this.focusItem()}focusItem(){const e=this.accordionItems[this.activeItemIndex];e instanceof Zn&&e.expandbutton.focus()}}h([p({attribute:"expand-mode"})],Ru.prototype,"expandmode",void 0);h([I],Ru.prototype,"accordionItems",void 0);const Wm=(t,e)=>N`
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
        ${Be("control")}
    >
        ${us(t,e)}
        <span class="content" part="content">
            <slot ${ut("defaultSlottedContent")}></slot>
        </span>
        ${ds(t,e)}
    </a>
`;class rt{}h([p({attribute:"aria-atomic"})],rt.prototype,"ariaAtomic",void 0);h([p({attribute:"aria-busy"})],rt.prototype,"ariaBusy",void 0);h([p({attribute:"aria-controls"})],rt.prototype,"ariaControls",void 0);h([p({attribute:"aria-current"})],rt.prototype,"ariaCurrent",void 0);h([p({attribute:"aria-describedby"})],rt.prototype,"ariaDescribedby",void 0);h([p({attribute:"aria-details"})],rt.prototype,"ariaDetails",void 0);h([p({attribute:"aria-disabled"})],rt.prototype,"ariaDisabled",void 0);h([p({attribute:"aria-errormessage"})],rt.prototype,"ariaErrormessage",void 0);h([p({attribute:"aria-flowto"})],rt.prototype,"ariaFlowto",void 0);h([p({attribute:"aria-haspopup"})],rt.prototype,"ariaHaspopup",void 0);h([p({attribute:"aria-hidden"})],rt.prototype,"ariaHidden",void 0);h([p({attribute:"aria-invalid"})],rt.prototype,"ariaInvalid",void 0);h([p({attribute:"aria-keyshortcuts"})],rt.prototype,"ariaKeyshortcuts",void 0);h([p({attribute:"aria-label"})],rt.prototype,"ariaLabel",void 0);h([p({attribute:"aria-labelledby"})],rt.prototype,"ariaLabelledby",void 0);h([p({attribute:"aria-live"})],rt.prototype,"ariaLive",void 0);h([p({attribute:"aria-owns"})],rt.prototype,"ariaOwns",void 0);h([p({attribute:"aria-relevant"})],rt.prototype,"ariaRelevant",void 0);h([p({attribute:"aria-roledescription"})],rt.prototype,"ariaRoledescription",void 0);let Ds=class extends $e{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((e=this.$fastController.definition.shadowOptions)===null||e===void 0)&&e.delegatesFocus)&&(this.focus=()=>{var s;(s=this.control)===null||s===void 0||s.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}};h([p],Ds.prototype,"download",void 0);h([p],Ds.prototype,"href",void 0);h([p],Ds.prototype,"hreflang",void 0);h([p],Ds.prototype,"ping",void 0);h([p],Ds.prototype,"referrerpolicy",void 0);h([p],Ds.prototype,"rel",void 0);h([p],Ds.prototype,"target",void 0);h([p],Ds.prototype,"type",void 0);h([I],Ds.prototype,"defaultSlottedContent",void 0);class zl{}h([p({attribute:"aria-expanded"})],zl.prototype,"ariaExpanded",void 0);ft(zl,rt);ft(Ds,ws,zl);const sx=(t,e)=>N`
    <template class="${s=>s.initialLayoutComplete?"loaded":""}">
        ${xt(s=>s.initialLayoutComplete,N`
                <slot></slot>
            `)}
    </template>
`,Xn=t=>{const e=t.closest("[dir]");return e!==null&&e.dir==="rtl"?ot.rtl:ot.ltr};class ix{constructor(){this.intersectionDetector=null,this.observedElements=new Map,this.requestPosition=(e,s)=>{var i;if(this.intersectionDetector!==null){if(this.observedElements.has(e)){(i=this.observedElements.get(e))===null||i===void 0||i.push(s);return}this.observedElements.set(e,[s]),this.intersectionDetector.observe(e)}},this.cancelRequestPosition=(e,s)=>{const i=this.observedElements.get(e);if(i!==void 0){const n=i.indexOf(s);n!==-1&&i.splice(n,1)}},this.initializeIntersectionDetector=()=>{Li.IntersectionObserver&&(this.intersectionDetector=new IntersectionObserver(this.handleIntersection,{root:null,rootMargin:"0px",threshold:[0,1]}))},this.handleIntersection=e=>{if(this.intersectionDetector===null)return;const s=[],i=[];e.forEach(n=>{var o;(o=this.intersectionDetector)===null||o===void 0||o.unobserve(n.target);const r=this.observedElements.get(n.target);r!==void 0&&(r.forEach(a=>{let l=s.indexOf(a);l===-1&&(l=s.length,s.push(a),i.push([])),i[l].push(n)}),this.observedElements.delete(n.target))}),s.forEach((n,o)=>{n(i[o])})},this.initializeIntersectionDetector()}}class he extends $e{constructor(){super(...arguments),this.anchor="",this.viewport="",this.horizontalPositioningMode="uncontrolled",this.horizontalDefaultPosition="unset",this.horizontalViewportLock=!1,this.horizontalInset=!1,this.horizontalScaling="content",this.verticalPositioningMode="uncontrolled",this.verticalDefaultPosition="unset",this.verticalViewportLock=!1,this.verticalInset=!1,this.verticalScaling="content",this.fixedPlacement=!1,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.initialLayoutComplete=!1,this.resizeDetector=null,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.pendingPositioningUpdate=!1,this.pendingReset=!1,this.currentDirection=ot.ltr,this.regionVisible=!1,this.forceUpdate=!1,this.updateThreshold=.5,this.update=()=>{this.pendingPositioningUpdate||this.requestPositionUpdates()},this.startObservers=()=>{this.stopObservers(),this.anchorElement!==null&&(this.requestPositionUpdates(),this.resizeDetector!==null&&(this.resizeDetector.observe(this.anchorElement),this.resizeDetector.observe(this)))},this.requestPositionUpdates=()=>{this.anchorElement===null||this.pendingPositioningUpdate||(he.intersectionService.requestPosition(this,this.handleIntersection),he.intersectionService.requestPosition(this.anchorElement,this.handleIntersection),this.viewportElement!==null&&he.intersectionService.requestPosition(this.viewportElement,this.handleIntersection),this.pendingPositioningUpdate=!0)},this.stopObservers=()=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,he.intersectionService.cancelRequestPosition(this,this.handleIntersection),this.anchorElement!==null&&he.intersectionService.cancelRequestPosition(this.anchorElement,this.handleIntersection),this.viewportElement!==null&&he.intersectionService.cancelRequestPosition(this.viewportElement,this.handleIntersection)),this.resizeDetector!==null&&this.resizeDetector.disconnect()},this.getViewport=()=>typeof this.viewport!="string"||this.viewport===""?document.documentElement:document.getElementById(this.viewport),this.getAnchor=()=>document.getElementById(this.anchor),this.handleIntersection=e=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,this.applyIntersectionEntries(e)&&this.updateLayout())},this.applyIntersectionEntries=e=>{const s=e.find(o=>o.target===this),i=e.find(o=>o.target===this.anchorElement),n=e.find(o=>o.target===this.viewportElement);return s===void 0||n===void 0||i===void 0?!1:!this.regionVisible||this.forceUpdate||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0||this.isRectDifferent(this.anchorRect,i.boundingClientRect)||this.isRectDifferent(this.viewportRect,n.boundingClientRect)||this.isRectDifferent(this.regionRect,s.boundingClientRect)?(this.regionRect=s.boundingClientRect,this.anchorRect=i.boundingClientRect,this.viewportElement===document.documentElement?this.viewportRect=new DOMRectReadOnly(n.boundingClientRect.x+document.documentElement.scrollLeft,n.boundingClientRect.y+document.documentElement.scrollTop,n.boundingClientRect.width,n.boundingClientRect.height):this.viewportRect=n.boundingClientRect,this.updateRegionOffset(),this.forceUpdate=!1,!0):!1},this.updateRegionOffset=()=>{this.anchorRect&&this.regionRect&&(this.baseHorizontalOffset=this.baseHorizontalOffset+(this.anchorRect.left-this.regionRect.left)+(this.translateX-this.baseHorizontalOffset),this.baseVerticalOffset=this.baseVerticalOffset+(this.anchorRect.top-this.regionRect.top)+(this.translateY-this.baseVerticalOffset))},this.isRectDifferent=(e,s)=>Math.abs(e.top-s.top)>this.updateThreshold||Math.abs(e.right-s.right)>this.updateThreshold||Math.abs(e.bottom-s.bottom)>this.updateThreshold||Math.abs(e.left-s.left)>this.updateThreshold,this.handleResize=e=>{this.update()},this.reset=()=>{this.pendingReset&&(this.pendingReset=!1,this.anchorElement===null&&(this.anchorElement=this.getAnchor()),this.viewportElement===null&&(this.viewportElement=this.getViewport()),this.currentDirection=Xn(this),this.startObservers())},this.updateLayout=()=>{let e,s;if(this.horizontalPositioningMode!=="uncontrolled"){const o=this.getPositioningOptions(this.horizontalInset);if(this.horizontalDefaultPosition==="center")s="center";else if(this.horizontalDefaultPosition!=="unset"){let f=this.horizontalDefaultPosition;if(f==="start"||f==="end"){const y=Xn(this);if(y!==this.currentDirection){this.currentDirection=y,this.initialize();return}this.currentDirection===ot.ltr?f=f==="start"?"left":"right":f=f==="start"?"right":"left"}switch(f){case"left":s=this.horizontalInset?"insetStart":"start";break;case"right":s=this.horizontalInset?"insetEnd":"end";break}}const r=this.horizontalThreshold!==void 0?this.horizontalThreshold:this.regionRect!==void 0?this.regionRect.width:0,a=this.anchorRect!==void 0?this.anchorRect.left:0,l=this.anchorRect!==void 0?this.anchorRect.right:0,c=this.anchorRect!==void 0?this.anchorRect.width:0,d=this.viewportRect!==void 0?this.viewportRect.left:0,u=this.viewportRect!==void 0?this.viewportRect.right:0;(s===void 0||this.horizontalPositioningMode!=="locktodefault"&&this.getAvailableSpace(s,a,l,c,d,u)<r)&&(s=this.getAvailableSpace(o[0],a,l,c,d,u)>this.getAvailableSpace(o[1],a,l,c,d,u)?o[0]:o[1])}if(this.verticalPositioningMode!=="uncontrolled"){const o=this.getPositioningOptions(this.verticalInset);if(this.verticalDefaultPosition==="center")e="center";else if(this.verticalDefaultPosition!=="unset")switch(this.verticalDefaultPosition){case"top":e=this.verticalInset?"insetStart":"start";break;case"bottom":e=this.verticalInset?"insetEnd":"end";break}const r=this.verticalThreshold!==void 0?this.verticalThreshold:this.regionRect!==void 0?this.regionRect.height:0,a=this.anchorRect!==void 0?this.anchorRect.top:0,l=this.anchorRect!==void 0?this.anchorRect.bottom:0,c=this.anchorRect!==void 0?this.anchorRect.height:0,d=this.viewportRect!==void 0?this.viewportRect.top:0,u=this.viewportRect!==void 0?this.viewportRect.bottom:0;(e===void 0||this.verticalPositioningMode!=="locktodefault"&&this.getAvailableSpace(e,a,l,c,d,u)<r)&&(e=this.getAvailableSpace(o[0],a,l,c,d,u)>this.getAvailableSpace(o[1],a,l,c,d,u)?o[0]:o[1])}const i=this.getNextRegionDimension(s,e),n=this.horizontalPosition!==s||this.verticalPosition!==e;if(this.setHorizontalPosition(s,i),this.setVerticalPosition(e,i),this.updateRegionStyle(),!this.initialLayoutComplete){this.initialLayoutComplete=!0,this.requestPositionUpdates();return}this.regionVisible||(this.regionVisible=!0,this.style.removeProperty("pointer-events"),this.style.removeProperty("opacity"),this.classList.toggle("loaded",!0),this.$emit("loaded",this,{bubbles:!1})),this.updatePositionClasses(),n&&this.$emit("positionchange",this,{bubbles:!1})},this.updateRegionStyle=()=>{this.style.width=this.regionWidth,this.style.height=this.regionHeight,this.style.transform=`translate(${this.translateX}px, ${this.translateY}px)`},this.updatePositionClasses=()=>{this.classList.toggle("top",this.verticalPosition==="start"),this.classList.toggle("bottom",this.verticalPosition==="end"),this.classList.toggle("inset-top",this.verticalPosition==="insetStart"),this.classList.toggle("inset-bottom",this.verticalPosition==="insetEnd"),this.classList.toggle("vertical-center",this.verticalPosition==="center"),this.classList.toggle("left",this.horizontalPosition==="start"),this.classList.toggle("right",this.horizontalPosition==="end"),this.classList.toggle("inset-left",this.horizontalPosition==="insetStart"),this.classList.toggle("inset-right",this.horizontalPosition==="insetEnd"),this.classList.toggle("horizontal-center",this.horizontalPosition==="center")},this.setHorizontalPosition=(e,s)=>{if(e===void 0||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0)return;let i=0;switch(this.horizontalScaling){case"anchor":case"fill":i=this.horizontalViewportLock?this.viewportRect.width:s.width,this.regionWidth=`${i}px`;break;case"content":i=this.regionRect.width,this.regionWidth="unset";break}let n=0;switch(e){case"start":this.translateX=this.baseHorizontalOffset-i,this.horizontalViewportLock&&this.anchorRect.left>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.right));break;case"insetStart":this.translateX=this.baseHorizontalOffset-i+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.right));break;case"insetEnd":this.translateX=this.baseHorizontalOffset,this.horizontalViewportLock&&this.anchorRect.left<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.left));break;case"end":this.translateX=this.baseHorizontalOffset+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.left));break;case"center":if(n=(this.anchorRect.width-i)/2,this.translateX=this.baseHorizontalOffset+n,this.horizontalViewportLock){const o=this.anchorRect.left+n,r=this.anchorRect.right-n;o<this.viewportRect.left&&!(r>this.viewportRect.right)?this.translateX=this.translateX-(o-this.viewportRect.left):r>this.viewportRect.right&&!(o<this.viewportRect.left)&&(this.translateX=this.translateX-(r-this.viewportRect.right))}break}this.horizontalPosition=e},this.setVerticalPosition=(e,s)=>{if(e===void 0||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0)return;let i=0;switch(this.verticalScaling){case"anchor":case"fill":i=this.verticalViewportLock?this.viewportRect.height:s.height,this.regionHeight=`${i}px`;break;case"content":i=this.regionRect.height,this.regionHeight="unset";break}let n=0;switch(e){case"start":this.translateY=this.baseVerticalOffset-i,this.verticalViewportLock&&this.anchorRect.top>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.bottom));break;case"insetStart":this.translateY=this.baseVerticalOffset-i+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.bottom));break;case"insetEnd":this.translateY=this.baseVerticalOffset,this.verticalViewportLock&&this.anchorRect.top<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.top));break;case"end":this.translateY=this.baseVerticalOffset+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.top));break;case"center":if(n=(this.anchorRect.height-i)/2,this.translateY=this.baseVerticalOffset+n,this.verticalViewportLock){const o=this.anchorRect.top+n,r=this.anchorRect.bottom-n;o<this.viewportRect.top&&!(r>this.viewportRect.bottom)?this.translateY=this.translateY-(o-this.viewportRect.top):r>this.viewportRect.bottom&&!(o<this.viewportRect.top)&&(this.translateY=this.translateY-(r-this.viewportRect.bottom))}}this.verticalPosition=e},this.getPositioningOptions=e=>e?["insetStart","insetEnd"]:["start","end"],this.getAvailableSpace=(e,s,i,n,o,r)=>{const a=s-o,l=r-(s+n);switch(e){case"start":return a;case"insetStart":return a+n;case"insetEnd":return l+n;case"end":return l;case"center":return Math.min(a,l)*2+n}},this.getNextRegionDimension=(e,s)=>{const i={height:this.regionRect!==void 0?this.regionRect.height:0,width:this.regionRect!==void 0?this.regionRect.width:0};return e!==void 0&&this.horizontalScaling==="fill"?i.width=this.getAvailableSpace(e,this.anchorRect!==void 0?this.anchorRect.left:0,this.anchorRect!==void 0?this.anchorRect.right:0,this.anchorRect!==void 0?this.anchorRect.width:0,this.viewportRect!==void 0?this.viewportRect.left:0,this.viewportRect!==void 0?this.viewportRect.right:0):this.horizontalScaling==="anchor"&&(i.width=this.anchorRect!==void 0?this.anchorRect.width:0),s!==void 0&&this.verticalScaling==="fill"?i.height=this.getAvailableSpace(s,this.anchorRect!==void 0?this.anchorRect.top:0,this.anchorRect!==void 0?this.anchorRect.bottom:0,this.anchorRect!==void 0?this.anchorRect.height:0,this.viewportRect!==void 0?this.viewportRect.top:0,this.viewportRect!==void 0?this.viewportRect.bottom:0):this.verticalScaling==="anchor"&&(i.height=this.anchorRect!==void 0?this.anchorRect.height:0),i},this.startAutoUpdateEventListeners=()=>{window.addEventListener(If,this.update,{passive:!0}),window.addEventListener(Tf,this.update,{passive:!0,capture:!0}),this.resizeDetector!==null&&this.viewportElement!==null&&this.resizeDetector.observe(this.viewportElement)},this.stopAutoUpdateEventListeners=()=>{window.removeEventListener(If,this.update),window.removeEventListener(Tf,this.update),this.resizeDetector!==null&&this.viewportElement!==null&&this.resizeDetector.unobserve(this.viewportElement)}}anchorChanged(){this.initialLayoutComplete&&(this.anchorElement=this.getAnchor())}viewportChanged(){this.initialLayoutComplete&&(this.viewportElement=this.getViewport())}horizontalPositioningModeChanged(){this.requestReset()}horizontalDefaultPositionChanged(){this.updateForAttributeChange()}horizontalViewportLockChanged(){this.updateForAttributeChange()}horizontalInsetChanged(){this.updateForAttributeChange()}horizontalThresholdChanged(){this.updateForAttributeChange()}horizontalScalingChanged(){this.updateForAttributeChange()}verticalPositioningModeChanged(){this.requestReset()}verticalDefaultPositionChanged(){this.updateForAttributeChange()}verticalViewportLockChanged(){this.updateForAttributeChange()}verticalInsetChanged(){this.updateForAttributeChange()}verticalThresholdChanged(){this.updateForAttributeChange()}verticalScalingChanged(){this.updateForAttributeChange()}fixedPlacementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}autoUpdateModeChanged(e,s){this.$fastController.isConnected&&this.initialLayoutComplete&&(e==="auto"&&this.stopAutoUpdateEventListeners(),s==="auto"&&this.startAutoUpdateEventListeners())}anchorElementChanged(){this.requestReset()}viewportElementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}connectedCallback(){super.connectedCallback(),this.autoUpdateMode==="auto"&&this.startAutoUpdateEventListeners(),this.initialize()}disconnectedCallback(){super.disconnectedCallback(),this.autoUpdateMode==="auto"&&this.stopAutoUpdateEventListeners(),this.stopObservers(),this.disconnectResizeDetector()}adoptedCallback(){this.initialize()}disconnectResizeDetector(){this.resizeDetector!==null&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.handleResize)}updateForAttributeChange(){this.$fastController.isConnected&&this.initialLayoutComplete&&(this.forceUpdate=!0,this.update())}initialize(){this.initializeResizeDetector(),this.anchorElement===null&&(this.anchorElement=this.getAnchor()),this.requestReset()}requestReset(){this.$fastController.isConnected&&this.pendingReset===!1&&(this.setInitialState(),me.queueUpdate(()=>this.reset()),this.pendingReset=!0)}setInitialState(){this.initialLayoutComplete=!1,this.regionVisible=!1,this.translateX=0,this.translateY=0,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.viewportRect=void 0,this.regionRect=void 0,this.anchorRect=void 0,this.verticalPosition=void 0,this.horizontalPosition=void 0,this.style.opacity="0",this.style.pointerEvents="none",this.forceUpdate=!1,this.style.position=this.fixedPlacement?"fixed":"absolute",this.updatePositionClasses(),this.updateRegionStyle()}}he.intersectionService=new ix;h([p],he.prototype,"anchor",void 0);h([p],he.prototype,"viewport",void 0);h([p({attribute:"horizontal-positioning-mode"})],he.prototype,"horizontalPositioningMode",void 0);h([p({attribute:"horizontal-default-position"})],he.prototype,"horizontalDefaultPosition",void 0);h([p({attribute:"horizontal-viewport-lock",mode:"boolean"})],he.prototype,"horizontalViewportLock",void 0);h([p({attribute:"horizontal-inset",mode:"boolean"})],he.prototype,"horizontalInset",void 0);h([p({attribute:"horizontal-threshold"})],he.prototype,"horizontalThreshold",void 0);h([p({attribute:"horizontal-scaling"})],he.prototype,"horizontalScaling",void 0);h([p({attribute:"vertical-positioning-mode"})],he.prototype,"verticalPositioningMode",void 0);h([p({attribute:"vertical-default-position"})],he.prototype,"verticalDefaultPosition",void 0);h([p({attribute:"vertical-viewport-lock",mode:"boolean"})],he.prototype,"verticalViewportLock",void 0);h([p({attribute:"vertical-inset",mode:"boolean"})],he.prototype,"verticalInset",void 0);h([p({attribute:"vertical-threshold"})],he.prototype,"verticalThreshold",void 0);h([p({attribute:"vertical-scaling"})],he.prototype,"verticalScaling",void 0);h([p({attribute:"fixed-placement",mode:"boolean"})],he.prototype,"fixedPlacement",void 0);h([p({attribute:"auto-update-mode"})],he.prototype,"autoUpdateMode",void 0);h([I],he.prototype,"anchorElement",void 0);h([I],he.prototype,"viewportElement",void 0);h([I],he.prototype,"initialLayoutComplete",void 0);const nx=(t,e)=>N`
    <template class="${s=>s.circular?"circular":""}">
        <div class="control" part="control" style="${s=>s.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`;let da=class extends $e{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const e=`background-color: var(--badge-fill-${this.fill});`,s=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?e:this.color&&!this.fill?s:`${s} ${e}`}}};h([p({attribute:"fill"})],da.prototype,"fill",void 0);h([p({attribute:"color"})],da.prototype,"color",void 0);h([p({mode:"boolean"})],da.prototype,"circular",void 0);const ox=(t,e)=>N`
    <div role="listitem" class="listitem" part="listitem">
        ${xt(s=>s.href&&s.href.length>0,N`
                ${Wm(t,e)}
            `)}
        ${xt(s=>!s.href,N`
                ${us(t,e)}
                <slot></slot>
                ${ds(t,e)}
            `)}
        ${xt(s=>s.separator,N`
                <span class="separator" part="separator" aria-hidden="true">
                    <slot name="separator">${e.separator||""}</slot>
                </span>
            `)}
    </div>
`;class jr extends Ds{constructor(){super(...arguments),this.separator=!0}}h([I],jr.prototype,"separator",void 0);ft(jr,ws,zl);const rx=(t,e)=>N`
    <template role="navigation">
        <div role="list" class="list" part="list">
            <slot
                ${ut({property:"slottedBreadcrumbItems",filter:Mi()})}
            ></slot>
        </div>
    </template>
`;class qm extends $e{slottedBreadcrumbItemsChanged(){if(this.$fastController.isConnected){if(this.slottedBreadcrumbItems===void 0||this.slottedBreadcrumbItems.length===0)return;const e=this.slottedBreadcrumbItems[this.slottedBreadcrumbItems.length-1];this.slottedBreadcrumbItems.forEach(s=>{const i=s===e;this.setItemSeparator(s,i),this.setAriaCurrent(s,i)})}}setItemSeparator(e,s){e instanceof jr&&(e.separator=!s)}findChildWithHref(e){var s,i;return e.childElementCount>0?e.querySelector("a[href]"):!((s=e.shadowRoot)===null||s===void 0)&&s.childElementCount?(i=e.shadowRoot)===null||i===void 0?void 0:i.querySelector("a[href]"):null}setAriaCurrent(e,s){const i=this.findChildWithHref(e);i===null&&e.hasAttribute("href")&&e instanceof jr?s?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current"):i!==null&&(s?i.setAttribute("aria-current","page"):i.removeAttribute("aria-current"))}}h([I],qm.prototype,"slottedBreadcrumbItems",void 0);const ax=(t,e)=>N`
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
        ${Be("control")}
    >
        ${us(t,e)}
        <span class="content" part="content">
            <slot ${ut("defaultSlottedContent")}></slot>
        </span>
        ${ds(t,e)}
    </button>
`,Rf="form-associated-proxy",Ef="ElementInternals",Of=Ef in window&&"setFormValue"in window[Ef].prototype,Af=new WeakMap;function Bi(t){const e=class extends t{constructor(...s){super(...s),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Of}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const s=this.proxy.labels,i=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),n=s?i.concat(Array.from(s)):i;return Object.freeze(n)}else return Un}valueChanged(s,i){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(s,i){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(s,i){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),me.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(s,i){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(s,i){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),me.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!Of)return null;let s=Af.get(this);return s||(s=this.attachInternals(),Af.set(this,s)),s}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach(s=>this.proxy.removeEventListener(s,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(s,i,n){this.elementInternals?this.elementInternals.setValidity(s,i,n):typeof i=="string"&&this.proxy.setCustomValidity(i)}formDisabledCallback(s){this.disabled=s}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var s;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(i=>this.proxy.addEventListener(i,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Rf),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Rf)),(s=this.shadowRoot)===null||s===void 0||s.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var s;this.removeChild(this.proxy),(s=this.shadowRoot)===null||s===void 0||s.removeChild(this.proxySlot)}validate(s){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,s)}setFormValue(s,i){this.elementInternals&&this.elementInternals.setFormValue(s,i||s)}_keypressHandler(s){switch(s.key){case zi:if(this.form instanceof HTMLFormElement){const i=this.form.querySelector("[type=submit]");i==null||i.click()}break}}stopPropagation(s){s.stopPropagation()}};return p({mode:"boolean"})(e.prototype,"disabled"),p({mode:"fromView",attribute:"value"})(e.prototype,"initialValue"),p({attribute:"current-value"})(e.prototype,"currentValue"),p(e.prototype,"name"),p({mode:"boolean"})(e.prototype,"required"),I(e.prototype,"value"),e}function Eu(t){class e extends Bi(t){}class s extends e{constructor(...n){super(n),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(n,o){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),n!==void 0&&this.$emit("change"),this.validate()}currentCheckedChanged(n,o){this.checked=this.currentChecked}updateForm(){const n=this.checked?this.value:null;this.setFormValue(n,n)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return p({attribute:"checked",mode:"boolean"})(s.prototype,"checkedAttribute"),p({attribute:"current-checked",converter:ca})(s.prototype,"currentChecked"),I(s.prototype,"defaultChecked"),I(s.prototype,"checked"),s}class lx extends $e{}class cx extends Bi(lx){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let Rs=class extends cx{constructor(){super(...arguments),this.handleClick=e=>{var s;this.disabled&&((s=this.defaultSlottedContent)===null||s===void 0?void 0:s.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),typeof this.form.requestSubmit=="function"?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;(e=this.form)===null||e===void 0||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((e=this.$fastController.definition.shadowOptions)===null||e===void 0)&&e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,s){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),s==="submit"&&this.addEventListener("click",this.handleSubmission),e==="submit"&&this.removeEventListener("click",this.handleSubmission),s==="reset"&&this.addEventListener("click",this.handleFormReset),e==="reset"&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const s=Array.from((e=this.control)===null||e===void 0?void 0:e.children);s&&s.forEach(i=>{i.addEventListener("click",this.handleClick)})}disconnectedCallback(){var e;super.disconnectedCallback();const s=Array.from((e=this.control)===null||e===void 0?void 0:e.children);s&&s.forEach(i=>{i.removeEventListener("click",this.handleClick)})}};h([p({mode:"boolean"})],Rs.prototype,"autofocus",void 0);h([p({attribute:"form"})],Rs.prototype,"formId",void 0);h([p],Rs.prototype,"formaction",void 0);h([p],Rs.prototype,"formenctype",void 0);h([p],Rs.prototype,"formmethod",void 0);h([p({mode:"boolean"})],Rs.prototype,"formnovalidate",void 0);h([p],Rs.prototype,"formtarget",void 0);h([p],Rs.prototype,"type",void 0);h([I],Rs.prototype,"defaultSlottedContent",void 0);class Bl{}h([p({attribute:"aria-expanded"})],Bl.prototype,"ariaExpanded",void 0);h([p({attribute:"aria-pressed"})],Bl.prototype,"ariaPressed",void 0);ft(Bl,rt);ft(Rs,ws,Bl);class dx{constructor(e){if(this.dayFormat="numeric",this.weekdayFormat="long",this.monthFormat="long",this.yearFormat="numeric",this.date=new Date,e)for(const s in e){const i=e[s];s==="date"?this.date=this.getDateObject(i):this[s]=i}}getDateObject(e){if(typeof e=="string"){const s=e.split(/[/-]/);return s.length<3?new Date:new Date(parseInt(s[2],10),parseInt(s[0],10)-1,parseInt(s[1],10))}else if("day"in e&&"month"in e&&"year"in e){const{day:s,month:i,year:n}=e;return new Date(n,i-1,s)}return e}getDate(e=this.date,s={weekday:this.weekdayFormat,month:this.monthFormat,day:this.dayFormat,year:this.yearFormat},i=this.locale){const n=this.getDateObject(e);if(!n.getTime())return"";const o=Object.assign({timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone},s);return new Intl.DateTimeFormat(i,o).format(n)}getDay(e=this.date.getDate(),s=this.dayFormat,i=this.locale){return this.getDate({month:1,day:e,year:2020},{day:s},i)}getMonth(e=this.date.getMonth()+1,s=this.monthFormat,i=this.locale){return this.getDate({month:e,day:2,year:2020},{month:s},i)}getYear(e=this.date.getFullYear(),s=this.yearFormat,i=this.locale){return this.getDate({month:2,day:2,year:e},{year:s},i)}getWeekday(e=0,s=this.weekdayFormat,i=this.locale){const n=`1-${e+1}-2017`;return this.getDate(n,{weekday:s},i)}getWeekdays(e=this.weekdayFormat,s=this.locale){return Array(7).fill(null).map((i,n)=>this.getWeekday(n,e,s))}}let Us=class extends $e{constructor(){super(...arguments),this.dateFormatter=new dx,this.readonly=!1,this.locale="en-US",this.month=new Date().getMonth()+1,this.year=new Date().getFullYear(),this.dayFormat="numeric",this.weekdayFormat="short",this.monthFormat="long",this.yearFormat="numeric",this.minWeeks=0,this.disabledDates="",this.selectedDates="",this.oneDayInMs=864e5}localeChanged(){this.dateFormatter.locale=this.locale}dayFormatChanged(){this.dateFormatter.dayFormat=this.dayFormat}weekdayFormatChanged(){this.dateFormatter.weekdayFormat=this.weekdayFormat}monthFormatChanged(){this.dateFormatter.monthFormat=this.monthFormat}yearFormatChanged(){this.dateFormatter.yearFormat=this.yearFormat}getMonthInfo(e=this.month,s=this.year){const i=l=>new Date(l.getFullYear(),l.getMonth(),1).getDay(),n=l=>{const c=new Date(l.getFullYear(),l.getMonth()+1,1);return new Date(c.getTime()-this.oneDayInMs).getDate()},o=new Date(s,e-1),r=new Date(s,e),a=new Date(s,e-2);return{length:n(o),month:e,start:i(o),year:s,previous:{length:n(a),month:a.getMonth()+1,start:i(a),year:a.getFullYear()},next:{length:n(r),month:r.getMonth()+1,start:i(r),year:r.getFullYear()}}}getDays(e=this.getMonthInfo(),s=this.minWeeks){s=s>10?10:s;const{start:i,length:n,previous:o,next:r}=e,a=[];let l=1-i;for(;l<n+1||a.length<s||a[a.length-1].length%7!==0;){const{month:c,year:d}=l<1?o:l>n?r:e,u=l<1?o.length+l:l>n?l-n:l,f=`${c}-${u}-${d}`,y=this.dateInString(f,this.disabledDates),w=this.dateInString(f,this.selectedDates),$={day:u,month:c,year:d,disabled:y,selected:w},_=a[a.length-1];a.length===0||_.length%7===0?a.push([$]):_.push($),l++}return a}dateInString(e,s){const i=s.split(",").map(n=>n.trim());return e=typeof e=="string"?e:`${e.getMonth()+1}-${e.getDate()}-${e.getFullYear()}`,i.some(n=>n===e)}getDayClassNames(e,s){const{day:i,month:n,year:o,disabled:r,selected:a}=e,l=s===`${n}-${i}-${o}`,c=this.month!==n;return["day",l&&"today",c&&"inactive",r&&"disabled",a&&"selected"].filter(Boolean).join(" ")}getWeekdayText(){const e=this.dateFormatter.getWeekdays().map(s=>({text:s}));if(this.weekdayFormat!=="long"){const s=this.dateFormatter.getWeekdays("long");e.forEach((i,n)=>{i.abbr=s[n]})}return e}handleDateSelect(e,s){e.preventDefault,this.$emit("dateselected",s)}handleKeydown(e,s){return e.key===zi&&this.handleDateSelect(e,s),!0}};h([p({mode:"boolean"})],Us.prototype,"readonly",void 0);h([p],Us.prototype,"locale",void 0);h([p({converter:se})],Us.prototype,"month",void 0);h([p({converter:se})],Us.prototype,"year",void 0);h([p({attribute:"day-format",mode:"fromView"})],Us.prototype,"dayFormat",void 0);h([p({attribute:"weekday-format",mode:"fromView"})],Us.prototype,"weekdayFormat",void 0);h([p({attribute:"month-format",mode:"fromView"})],Us.prototype,"monthFormat",void 0);h([p({attribute:"year-format",mode:"fromView"})],Us.prototype,"yearFormat",void 0);h([p({attribute:"min-weeks",converter:se})],Us.prototype,"minWeeks",void 0);h([p({attribute:"disabled-dates"})],Us.prototype,"disabledDates",void 0);h([p({attribute:"selected-dates"})],Us.prototype,"selectedDates",void 0);const Ea={none:"none",default:"default",sticky:"sticky"},Ki={default:"default",columnHeader:"columnheader",rowHeader:"rowheader"},Ir={default:"default",header:"header",stickyHeader:"sticky-header"};class Wt extends $e{constructor(){super(...arguments),this.rowType=Ir.default,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){if(this.rowData!==null&&this.isActiveRow){this.refocusOnLoad=!0;return}}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),this.cellsRepeatBehavior===null&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new Du(e=>e.columnDefinitions,e=>e.activeCellItemTemplate,{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(Vo,this.handleFocusout),this.addEventListener(Ho,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(Vo,this.handleFocusout),this.removeEventListener(Ho,this.handleKeydown)}handleFocusout(e){this.contains(e.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(e){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(e.target),this.$emit("row-focused",this)}handleKeydown(e){if(e.defaultPrevented)return;let s=0;switch(e.key){case gn:s=Math.max(0,this.focusColumnIndex-1),this.cellElements[s].focus(),e.preventDefault();break;case vn:s=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[s].focus(),e.preventDefault();break;case yi:e.ctrlKey||(this.cellElements[0].focus(),e.preventDefault());break;case xi:e.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),e.preventDefault());break}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===Ir.default&&this.cellItemTemplate!==void 0?this.cellItemTemplate:this.rowType===Ir.default&&this.cellItemTemplate===void 0?this.defaultCellItemTemplate:this.headerCellItemTemplate!==void 0?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}}h([p({attribute:"grid-template-columns"})],Wt.prototype,"gridTemplateColumns",void 0);h([p({attribute:"row-type"})],Wt.prototype,"rowType",void 0);h([I],Wt.prototype,"rowData",void 0);h([I],Wt.prototype,"columnDefinitions",void 0);h([I],Wt.prototype,"cellItemTemplate",void 0);h([I],Wt.prototype,"headerCellItemTemplate",void 0);h([I],Wt.prototype,"rowIndex",void 0);h([I],Wt.prototype,"isActiveRow",void 0);h([I],Wt.prototype,"activeCellItemTemplate",void 0);h([I],Wt.prototype,"defaultCellItemTemplate",void 0);h([I],Wt.prototype,"defaultHeaderCellItemTemplate",void 0);h([I],Wt.prototype,"cellElements",void 0);function ux(t){const e=t.tagFor(Wt);return N`
    <${e}
        :rowData="${s=>s}"
        :cellItemTemplate="${(s,i)=>i.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(s,i)=>i.parent.headerCellItemTemplate}"
    ></${e}>
`}const hx=(t,e)=>{const s=ux(t),i=t.tagFor(Wt);return N`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>i}"
            :defaultRowItemTemplate="${s}"
            ${Vl({property:"rowElements",filter:Mi("[role=row]")})}
        >
            <slot></slot>
        </template>
    `};class Ot extends $e{constructor(){super(),this.noTabbing=!1,this.generateHeader=Ea.default,this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(e,s,i)=>{if(this.rowElements.length===0){this.focusRowIndex=0,this.focusColumnIndex=0;return}const n=Math.max(0,Math.min(this.rowElements.length-1,e)),r=this.rowElements[n].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),a=Math.max(0,Math.min(r.length-1,s)),l=r[a];i&&this.scrollHeight!==this.clientHeight&&(n<this.focusRowIndex&&this.scrollTop>0||n>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&l.scrollIntoView({block:"center",inline:"center"}),l.focus()},this.onChildListChange=(e,s)=>{e&&e.length&&(e.forEach(i=>{i.addedNodes.forEach(n=>{n.nodeType===1&&n.getAttribute("role")==="row"&&(n.columnDefinitions=this.columnDefinitions)})}),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,me.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let e=this.gridTemplateColumns;if(e===void 0){if(this.generatedGridTemplateColumns===""&&this.rowElements.length>0){const s=this.rowElements[0];this.generatedGridTemplateColumns=new Array(s.cellElements.length).fill("1fr").join(" ")}e=this.generatedGridTemplateColumns}this.rowElements.forEach((s,i)=>{const n=s;n.rowIndex=i,n.gridTemplateColumns=e,this.columnDefinitionsStale&&(n.columnDefinitions=this.columnDefinitions)}),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(e){let s="";return e.forEach(i=>{s=`${s}${s===""?"":" "}1fr`}),s}noTabbingChanged(){this.$fastController.isConnected&&(this.noTabbing?this.setAttribute("tabIndex","-1"):this.setAttribute("tabIndex",this.contains(document.activeElement)||this===document.activeElement?"-1":"0"))}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){this.columnDefinitions===null&&this.rowsData.length>0&&(this.columnDefinitions=Ot.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){if(this.columnDefinitions===null){this.generatedGridTemplateColumns="";return}this.generatedGridTemplateColumns=Ot.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())}headerCellItemTemplateChanged(){this.$fastController.isConnected&&this.generatedHeader!==null&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),this.rowItemTemplate===void 0&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new Du(e=>e.rowsData,e=>e.rowItemTemplate,{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(Sf,this.handleFocus),this.addEventListener(Ho,this.handleKeydown),this.addEventListener(Vo,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),me.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(Sf,this.handleFocus),this.removeEventListener(Ho,this.handleKeydown),this.removeEventListener(Vo,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(e){this.isUpdatingFocus=!0;const s=e.target;this.focusRowIndex=this.rowElements.indexOf(s),this.focusColumnIndex=s.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(e){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(e){(e.relatedTarget===null||!this.contains(e.relatedTarget))&&this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(e){if(e.defaultPrevented)return;let s;const i=this.rowElements.length-1,n=this.offsetHeight+this.scrollTop,o=this.rowElements[i];switch(e.key){case js:e.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case Bs:e.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case K0:if(e.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex===0){this.focusOnCell(0,this.focusColumnIndex,!1);return}for(s=this.focusRowIndex-1,s;s>=0;s--){const r=this.rowElements[s];if(r.offsetTop<this.scrollTop){this.scrollTop=r.offsetTop+r.clientHeight-this.clientHeight;break}}this.focusOnCell(s,this.focusColumnIndex,!1);break;case J0:if(e.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=i||o.offsetTop+o.offsetHeight<=n){this.focusOnCell(i,this.focusColumnIndex,!1);return}for(s=this.focusRowIndex+1,s;s<=i;s++){const r=this.rowElements[s];if(r.offsetTop+r.offsetHeight>n){let a=0;this.generateHeader===Ea.sticky&&this.generatedHeader!==null&&(a=this.generatedHeader.clientHeight),this.scrollTop=r.offsetTop-a;break}}this.focusOnCell(s,this.focusColumnIndex,!1);break;case yi:e.ctrlKey&&(e.preventDefault(),this.focusOnCell(0,0,!0));break;case xi:e.ctrlKey&&this.columnDefinitions!==null&&(e.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0));break}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||this.pendingFocusUpdate===!1&&(this.pendingFocusUpdate=!0,me.queueUpdate(()=>this.updateFocus()))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(this.generatedHeader!==null&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),this.generateHeader!==Ea.none&&this.rowsData.length>0){const e=document.createElement(this.rowElementTag);this.generatedHeader=e,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===Ea.sticky?Ir.stickyHeader:Ir.header,(this.firstChild!==null||this.rowsPlaceholder!==null)&&this.insertBefore(e,this.firstChild!==null?this.firstChild:this.rowsPlaceholder);return}}}Ot.generateColumns=t=>Object.getOwnPropertyNames(t).map((e,s)=>({columnDataKey:e,gridColumn:`${s}`}));h([p({attribute:"no-tabbing",mode:"boolean"})],Ot.prototype,"noTabbing",void 0);h([p({attribute:"generate-header"})],Ot.prototype,"generateHeader",void 0);h([p({attribute:"grid-template-columns"})],Ot.prototype,"gridTemplateColumns",void 0);h([I],Ot.prototype,"rowsData",void 0);h([I],Ot.prototype,"columnDefinitions",void 0);h([I],Ot.prototype,"rowItemTemplate",void 0);h([I],Ot.prototype,"cellItemTemplate",void 0);h([I],Ot.prototype,"headerCellItemTemplate",void 0);h([I],Ot.prototype,"focusRowIndex",void 0);h([I],Ot.prototype,"focusColumnIndex",void 0);h([I],Ot.prototype,"defaultRowItemTemplate",void 0);h([I],Ot.prototype,"rowElementTag",void 0);h([I],Ot.prototype,"rowElements",void 0);const fx=N`
    <template>
        ${t=>t.rowData===null||t.columnDefinition===null||t.columnDefinition.columnDataKey===null?null:t.rowData[t.columnDefinition.columnDataKey]}
    </template>
`,px=N`
    <template>
        ${t=>t.columnDefinition===null?null:t.columnDefinition.title===void 0?t.columnDefinition.columnDataKey:t.columnDefinition.title}
    </template>
`;class ji extends $e{constructor(){super(...arguments),this.cellType=Ki.default,this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(e,s){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var e;super.connectedCallback(),this.addEventListener(Cf,this.handleFocusin),this.addEventListener(Vo,this.handleFocusout),this.addEventListener(Ho,this.handleKeydown),this.style.gridColumn=`${((e=this.columnDefinition)===null||e===void 0?void 0:e.gridColumn)===void 0?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(Cf,this.handleFocusin),this.removeEventListener(Vo,this.handleFocusout),this.removeEventListener(Ho,this.handleKeydown),this.disconnectCellView()}handleFocusin(e){if(!this.isActiveCell){switch(this.isActiveCell=!0,this.cellType){case Ki.columnHeader:if(this.columnDefinition!==null&&this.columnDefinition.headerCellInternalFocusQueue!==!0&&typeof this.columnDefinition.headerCellFocusTargetCallback=="function"){const s=this.columnDefinition.headerCellFocusTargetCallback(this);s!==null&&s.focus()}break;default:if(this.columnDefinition!==null&&this.columnDefinition.cellInternalFocusQueue!==!0&&typeof this.columnDefinition.cellFocusTargetCallback=="function"){const s=this.columnDefinition.cellFocusTargetCallback(this);s!==null&&s.focus()}break}this.$emit("cell-focused",this)}}handleFocusout(e){this!==document.activeElement&&!this.contains(document.activeElement)&&(this.isActiveCell=!1)}handleKeydown(e){if(!(e.defaultPrevented||this.columnDefinition===null||this.cellType===Ki.default&&this.columnDefinition.cellInternalFocusQueue!==!0||this.cellType===Ki.columnHeader&&this.columnDefinition.headerCellInternalFocusQueue!==!0))switch(e.key){case zi:case Q0:if(this.contains(document.activeElement)&&document.activeElement!==this)return;switch(this.cellType){case Ki.columnHeader:if(this.columnDefinition.headerCellFocusTargetCallback!==void 0){const s=this.columnDefinition.headerCellFocusTargetCallback(this);s!==null&&s.focus(),e.preventDefault()}break;default:if(this.columnDefinition.cellFocusTargetCallback!==void 0){const s=this.columnDefinition.cellFocusTargetCallback(this);s!==null&&s.focus(),e.preventDefault()}break}break;case Qo:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),e.preventDefault());break}}updateCellView(){if(this.disconnectCellView(),this.columnDefinition!==null)switch(this.cellType){case Ki.columnHeader:this.columnDefinition.headerCellTemplate!==void 0?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=px.render(this,this);break;case void 0:case Ki.rowHeader:case Ki.default:this.columnDefinition.cellTemplate!==void 0?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=fx.render(this,this);break}}disconnectCellView(){this.customCellView!==null&&(this.customCellView.dispose(),this.customCellView=null)}}h([p({attribute:"cell-type"})],ji.prototype,"cellType",void 0);h([p({attribute:"grid-column"})],ji.prototype,"gridColumn",void 0);h([I],ji.prototype,"rowData",void 0);h([I],ji.prototype,"columnDefinition",void 0);function mx(t){const e=t.tagFor(ji);return N`
    <${e}
        cell-type="${s=>s.isRowHeader?"rowheader":void 0}"
        grid-column="${(s,i)=>i.index+1}"
        :rowData="${(s,i)=>i.parent.rowData}"
        :columnDefinition="${s=>s}"
    ></${e}>
`}function gx(t){const e=t.tagFor(ji);return N`
    <${e}
        cell-type="columnheader"
        grid-column="${(s,i)=>i.index+1}"
        :columnDefinition="${s=>s}"
    ></${e}>
`}const vx=(t,e)=>{const s=mx(t),i=gx(t);return N`
        <template
            role="row"
            class="${n=>n.rowType!=="default"?n.rowType:""}"
            :defaultCellItemTemplate="${s}"
            :defaultHeaderCellItemTemplate="${i}"
            ${Vl({property:"cellElements",filter:Mi('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${ut("slottedCellElements")}></slot>
        </template>
    `},bx=(t,e)=>N`
        <template
            tabindex="-1"
            role="${s=>!s.cellType||s.cellType==="default"?"gridcell":s.cellType}"
            class="
            ${s=>s.cellType==="columnheader"?"column-header":s.cellType==="rowheader"?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `,yx=N`
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
`,xx=t=>{const e=t.tagFor(ji);return N`
        <${e}
            class="week-day"
            part="week-day"
            tabindex="-1"
            grid-column="${(s,i)=>i.index+1}"
            abbr="${s=>s.abbr}"
        >
            ${s=>s.text}
        </${e}>
    `},wx=(t,e)=>{const s=t.tagFor(ji);return N`
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
    `},$x=(t,e)=>{const s=t.tagFor(Wt);return N`
        <${s}
            class="week"
            part="week"
            role="row"
            role-type="default"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
        ${So(i=>i,wx(t,e),{positioning:!0})}
        </${s}>
    `},kx=(t,e)=>{const s=t.tagFor(Ot),i=t.tagFor(Wt);return N`
    <${s} class="days interact" part="days" generate-header="none">
        <${i}
            class="week-days"
            part="week-days"
            role="row"
            row-type="header"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
            ${So(n=>n.getWeekdayText(),xx(t),{positioning:!0})}
        </${i}>
        ${So(n=>n.getDays(),$x(t,e))}
    </${s}>
`},_x=t=>N`
        <div class="days" part="days">
            <div class="week-days" part="week-days">
                ${So(e=>e.getWeekdayText(),N`
                        <div class="week-day" part="week-day" abbr="${e=>e.abbr}">
                            ${e=>e.text}
                        </div>
                    `)}
            </div>
            ${So(e=>e.getDays(),N`
                    <div class="week">
                        ${So(e=>e,N`
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
    `,Sx=(t,e)=>{var s;const i=new Date,n=`${i.getMonth()+1}-${i.getDate()}-${i.getFullYear()}`;return N`
        <template>
            ${D0}
            ${e.title instanceof Function?e.title(t,e):(s=e.title)!==null&&s!==void 0?s:""}
            <slot></slot>
            ${xt(o=>o.readonly,_x(n),kx(t,n))}
            ${F0}
        </template>
    `},Cx=(t,e)=>N`
    <slot></slot>
`;let Gm=class extends $e{};const Ix=(t,e)=>N`
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
            <slot ${ut("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class Tx extends $e{}class Fx extends Eu(Tx){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class jl extends Fx{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{if(!this.readOnly)switch(e.key){case to:this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked;break}},this.clickHandler=e=>{!this.disabled&&!this.readOnly&&(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}h([p({attribute:"readonly",mode:"boolean"})],jl.prototype,"readOnly",void 0);h([I],jl.prototype,"defaultSlottedNodes",void 0);h([I],jl.prototype,"indeterminate",void 0);function Zm(t){return Mo(t)&&(t.getAttribute("role")==="option"||t instanceof HTMLOptionElement)}class wi extends $e{constructor(e,s,i,n){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),s&&(this.initialValue=s),i&&(this.defaultSelected=i),n&&(this.selected=n),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,s){if(typeof s=="boolean"){this.ariaChecked=s?"true":"false";return}this.ariaChecked=null}contentChanged(e,s){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,s){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,s){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return(e=this.value)!==null&&e!==void 0?e:this.text}get text(){var e,s;return(s=(e=this.textContent)===null||e===void 0?void 0:e.replace(/\s+/g," ").trim())!==null&&s!==void 0?s:""}set value(e){const s=`${e??""}`;this._value=s,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=s),fe.notify(this,"value")}get value(){var e;return fe.track(this,"value"),(e=this._value)!==null&&e!==void 0?e:this.text}get form(){return this.proxy?this.proxy.form:null}}h([I],wi.prototype,"checked",void 0);h([I],wi.prototype,"content",void 0);h([I],wi.prototype,"defaultSelected",void 0);h([p({mode:"boolean"})],wi.prototype,"disabled",void 0);h([p({attribute:"selected",mode:"boolean"})],wi.prototype,"selectedAttribute",void 0);h([I],wi.prototype,"selected",void 0);h([p({attribute:"value",mode:"fromView"})],wi.prototype,"initialValue",void 0);class Jo{}h([I],Jo.prototype,"ariaChecked",void 0);h([I],Jo.prototype,"ariaPosInSet",void 0);h([I],Jo.prototype,"ariaSelected",void 0);h([I],Jo.prototype,"ariaSetSize",void 0);ft(Jo,rt);ft(wi,ws,Jo);let $s=class tl extends $e{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return(e=this.selectedOptions[0])!==null&&e!==void 0?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(e=>e.disabled)}get length(){var e,s;return(s=(e=this.options)===null||e===void 0?void 0:e.length)!==null&&s!==void 0?s:0}get options(){return fe.track(this,"options"),this._options}set options(e){this._options=e,fe.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){const s=e.target.closest("option,[role=option]");if(s&&!s.disabled)return this.selectedIndex=this.options.indexOf(s),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&e!==null&&(e.focus(),requestAnimationFrame(()=>{e.scrollIntoView({block:"nearest"})}))}focusinHandler(e){!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),s=new RegExp(`^${e}`,"gi");return this.options.filter(i=>i.text.trim().match(s))}getSelectableIndex(e=this.selectedIndex,s){const i=e>s?-1:e<s?1:0,n=e+i;let o=null;switch(i){case-1:{o=this.options.reduceRight((r,a,l)=>!r&&!a.disabled&&l<n?a:r,o);break}case 1:{o=this.options.reduce((r,a,l)=>!r&&!a.disabled&&l>n?a:r,o);break}}return this.options.indexOf(o)}handleChange(e,s){switch(s){case"selected":{tl.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions();break}}}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,tl.TYPE_AHEAD_TIMEOUT_MS),!(e.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;const s=e.key;switch(s){case yi:{e.shiftKey||(e.preventDefault(),this.selectFirstOption());break}case Bs:{e.shiftKey||(e.preventDefault(),this.selectNextOption());break}case js:{e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break}case xi:{e.preventDefault(),this.selectLastOption();break}case Hl:return this.focusAndScrollOptionIntoView(),!0;case zi:case Qo:return!0;case to:if(this.typeaheadExpired)return!0;default:return s.length===1&&this.handleTypeAhead(`${s}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,s){this.ariaMultiSelectable=s?"true":null}selectedIndexChanged(e,s){var i;if(!this.hasSelectableOptions){this.selectedIndex=-1;return}if(!((i=this.options[this.selectedIndex])===null||i===void 0)&&i.disabled&&typeof e=="number"){const n=this.getSelectableIndex(e,s),o=n>-1?n:e;this.selectedIndex=o,s===o&&this.selectedIndexChanged(s,o);return}this.setSelectedOptions()}selectedOptionsChanged(e,s){var i;const n=s.filter(tl.slottedOptionFilter);(i=this.options)===null||i===void 0||i.forEach(o=>{const r=fe.getNotifier(o);r.unsubscribe(this,"selected"),o.selected=n.includes(o),r.subscribe(this,"selected")})}selectFirstOption(){var e,s;this.disabled||(this.selectedIndex=(s=(e=this.options)===null||e===void 0?void 0:e.findIndex(i=>!i.disabled))!==null&&s!==void 0?s:-1)}selectLastOption(){this.disabled||(this.selectedIndex=W0(this.options,e=>!e.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,s;this.selectedIndex=(s=(e=this.options)===null||e===void 0?void 0:e.findIndex(i=>i.defaultSelected))!==null&&s!==void 0?s:-1}setSelectedOptions(){var e,s,i;!((e=this.options)===null||e===void 0)&&e.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=(i=(s=this.firstSelectedOption)===null||s===void 0?void 0:s.id)!==null&&i!==void 0?i:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,s){this.options=s.reduce((n,o)=>(Zm(o)&&n.push(o),n),[]);const i=`${this.options.length}`;this.options.forEach((n,o)=>{n.id||(n.id=Br("option-")),n.ariaPosInSet=`${o+1}`,n.ariaSetSize=i}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,s){if(this.$fastController.isConnected){const i=this.getTypeaheadMatches();if(i.length){const n=this.options.indexOf(i[0]);n>-1&&(this.selectedIndex=n)}this.typeaheadExpired=!1}}};$s.slottedOptionFilter=t=>Zm(t)&&!t.hidden;$s.TYPE_AHEAD_TIMEOUT_MS=1e3;h([p({mode:"boolean"})],$s.prototype,"disabled",void 0);h([I],$s.prototype,"selectedIndex",void 0);h([I],$s.prototype,"selectedOptions",void 0);h([I],$s.prototype,"slottedOptions",void 0);h([I],$s.prototype,"typeaheadBuffer",void 0);class kn{}h([I],kn.prototype,"ariaActiveDescendant",void 0);h([I],kn.prototype,"ariaDisabled",void 0);h([I],kn.prototype,"ariaExpanded",void 0);h([I],kn.prototype,"ariaMultiSelectable",void 0);ft(kn,rt);ft($s,kn);const Co={above:"above",below:"below"};class Dx extends $s{}class Rx extends Bi(Dx){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const Oa={inline:"inline",list:"list",both:"both",none:"none"};let Ui=class extends Rx{constructor(){super(...arguments),this._value="",this.filteredOptions=[],this.filter="",this.forcedPosition=!1,this.listboxId=Br("listbox-"),this.maxHeight=0,this.open=!1}formResetCallback(){super.formResetCallback(),this.setDefaultSelectedOption(),this.updateValue()}validate(){super.validate(this.control)}get isAutocompleteInline(){return this.autocomplete===Oa.inline||this.isAutocompleteBoth}get isAutocompleteList(){return this.autocomplete===Oa.list||this.isAutocompleteBoth}get isAutocompleteBoth(){return this.autocomplete===Oa.both}openChanged(){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),me.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}get options(){return fe.track(this,"options"),this.filteredOptions.length?this.filteredOptions:this._options}set options(e){this._options=e,fe.notify(this,"options")}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}positionChanged(e,s){this.positionAttribute=s,this.setPositioning()}get value(){return fe.track(this,"value"),this._value}set value(e){var s,i,n;const o=`${this._value}`;if(this.$fastController.isConnected&&this.options){const r=this.options.findIndex(c=>c.text.toLowerCase()===e.toLowerCase()),a=(s=this.options[this.selectedIndex])===null||s===void 0?void 0:s.text,l=(i=this.options[r])===null||i===void 0?void 0:i.text;this.selectedIndex=a!==l?r:this.selectedIndex,e=((n=this.firstSelectedOption)===null||n===void 0?void 0:n.text)||e}o!==e&&(this._value=e,super.valueChanged(o,e),fe.notify(this,"value"))}clickHandler(e){if(!this.disabled){if(this.open){const s=e.target.closest("option,[role=option]");if(!s||s.disabled)return;this.selectedOptions=[s],this.control.value=s.text,this.clearSelectionRange(),this.updateValue(!0)}return this.open=!this.open,this.open&&this.control.focus(),!0}}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.value&&(this.initialValue=this.value)}disabledChanged(e,s){super.disabledChanged&&super.disabledChanged(e,s),this.ariaDisabled=this.disabled?"true":"false"}filterOptions(){(!this.autocomplete||this.autocomplete===Oa.none)&&(this.filter="");const e=this.filter.toLowerCase();this.filteredOptions=this._options.filter(s=>s.text.toLowerCase().startsWith(this.filter.toLowerCase())),this.isAutocompleteList&&(!this.filteredOptions.length&&!e&&(this.filteredOptions=this._options),this._options.forEach(s=>{s.hidden=!this.filteredOptions.includes(s)}))}focusAndScrollOptionIntoView(){this.contains(document.activeElement)&&(this.control.focus(),this.firstSelectedOption&&requestAnimationFrame(()=>{var e;(e=this.firstSelectedOption)===null||e===void 0||e.scrollIntoView({block:"nearest"})}))}focusoutHandler(e){if(this.syncValue(),!this.open)return!0;const s=e.relatedTarget;if(this.isSameNode(s)){this.focus();return}(!this.options||!this.options.includes(s))&&(this.open=!1)}inputHandler(e){if(this.filter=this.control.value,this.filterOptions(),this.isAutocompleteInline||(this.selectedIndex=this.options.map(s=>s.text).indexOf(this.control.value)),e.inputType.includes("deleteContent")||!this.filter.length)return!0;this.isAutocompleteList&&!this.open&&(this.open=!0),this.isAutocompleteInline&&(this.filteredOptions.length?(this.selectedOptions=[this.filteredOptions[0]],this.selectedIndex=this.options.indexOf(this.firstSelectedOption),this.setInlineSelection()):this.selectedIndex=-1)}keydownHandler(e){const s=e.key;if(e.ctrlKey||e.shiftKey)return!0;switch(s){case"Enter":{this.syncValue(),this.isAutocompleteInline&&(this.filter=this.value),this.open=!1,this.clearSelectionRange();break}case"Escape":{if(this.isAutocompleteInline||(this.selectedIndex=-1),this.open){this.open=!1;break}this.value="",this.control.value="",this.filter="",this.filterOptions();break}case"Tab":{if(this.setInputToSelection(),!this.open)return!0;e.preventDefault(),this.open=!1;break}case"ArrowUp":case"ArrowDown":{if(this.filterOptions(),!this.open){this.open=!0;break}this.filteredOptions.length>0&&super.keydownHandler(e),this.isAutocompleteInline&&this.setInlineSelection();break}default:return!0}}keyupHandler(e){switch(e.key){case"ArrowLeft":case"ArrowRight":case"Backspace":case"Delete":case"Home":case"End":{this.filter=this.control.value,this.selectedIndex=-1,this.filterOptions();break}}}selectedIndexChanged(e,s){if(this.$fastController.isConnected){if(s=Nl(-1,this.options.length-1,s),s!==this.selectedIndex){this.selectedIndex=s;return}super.selectedIndexChanged(e,s)}}selectPreviousOption(){!this.disabled&&this.selectedIndex>=0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){if(this.$fastController.isConnected&&this.options){const e=this.options.findIndex(s=>s.getAttribute("selected")!==null||s.selected);this.selectedIndex=e,!this.dirtyValue&&this.firstSelectedOption&&(this.value=this.firstSelectedOption.text),this.setSelectedOptions()}}setInputToSelection(){this.firstSelectedOption&&(this.control.value=this.firstSelectedOption.text,this.control.focus())}setInlineSelection(){this.firstSelectedOption&&(this.setInputToSelection(),this.control.setSelectionRange(this.filter.length,this.control.value.length,"backward"))}syncValue(){var e;const s=this.selectedIndex>-1?(e=this.firstSelectedOption)===null||e===void 0?void 0:e.text:this.control.value;this.updateValue(this.value!==s)}setPositioning(){const e=this.getBoundingClientRect(),i=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>i?Co.above:Co.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Co.above?~~e.top:~~i}selectedOptionsChanged(e,s){this.$fastController.isConnected&&this._options.forEach(i=>{i.selected=s.includes(i)})}slottedOptionsChanged(e,s){super.slottedOptionsChanged(e,s),this.updateValue()}updateValue(e){var s;this.$fastController.isConnected&&(this.value=((s=this.firstSelectedOption)===null||s===void 0?void 0:s.text)||this.control.value,this.control.value=this.value),e&&this.$emit("change")}clearSelectionRange(){const e=this.control.value.length;this.control.setSelectionRange(e,e)}};h([p({attribute:"autocomplete",mode:"fromView"})],Ui.prototype,"autocomplete",void 0);h([I],Ui.prototype,"maxHeight",void 0);h([p({attribute:"open",mode:"boolean"})],Ui.prototype,"open",void 0);h([p],Ui.prototype,"placeholder",void 0);h([p({attribute:"position"})],Ui.prototype,"positionAttribute",void 0);h([I],Ui.prototype,"position",void 0);class Ul{}h([I],Ul.prototype,"ariaAutoComplete",void 0);h([I],Ul.prototype,"ariaControls",void 0);ft(Ul,kn);ft(Ui,ws,Ul);const Ex=(t,e)=>N`
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
            ${us(t,e)}
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
                    ${Be("control")}
                />
                <div class="indicator" part="indicator" aria-hidden="true">
                    <slot name="indicator">
                        ${e.indicator||""}
                    </slot>
                </div>
            </slot>
            ${ds(t,e)}
        </div>
        <div
            class="listbox"
            id="${s=>s.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${s=>s.disabled}"
            ?hidden="${s=>!s.open}"
            ${Be("listbox")}
        >
            <slot
                ${ut({filter:$s.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`;function pl(t){const e=t.parentElement;if(e)return e;{const s=t.getRootNode();if(s.host instanceof HTMLElement)return s.host}return null}function Ox(t,e){let s=e;for(;s!==null;){if(s===t)return!0;s=pl(s)}return!1}const Di=document.createElement("div");function Ax(t){return t instanceof Ml}class Ou{setProperty(e,s){me.queueUpdate(()=>this.target.setProperty(e,s))}removeProperty(e){me.queueUpdate(()=>this.target.removeProperty(e))}}class Px extends Ou{constructor(e){super();const s=new CSSStyleSheet;this.target=s.cssRules[s.insertRule(":host{}")].style,e.$fastController.addStyles(cs.create([s]))}}class Lx extends Ou{constructor(){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}class Mx extends Ou{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:e}=this.style;if(e){const s=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[s].style}}}class Xm{constructor(e){this.store=new Map,this.target=null;const s=e.$fastController;this.style=document.createElement("style"),s.addStyles(this.style),fe.getNotifier(s).subscribe(this,"isConnected"),this.handleChange(s,"isConnected")}targetChanged(){if(this.target!==null)for(const[e,s]of this.store.entries())this.target.setProperty(e,s)}setProperty(e,s){this.store.set(e,s),me.queueUpdate(()=>{this.target!==null&&this.target.setProperty(e,s)})}removeProperty(e){this.store.delete(e),me.queueUpdate(()=>{this.target!==null&&this.target.removeProperty(e)})}handleChange(e,s){const{sheet:i}=this.style;if(i){const n=i.insertRule(":host{}",i.cssRules.length);this.target=i.cssRules[n].style}else this.target=null}}h([I],Xm.prototype,"target",void 0);class Vx{constructor(e){this.target=e.style}setProperty(e,s){me.queueUpdate(()=>this.target.setProperty(e,s))}removeProperty(e){me.queueUpdate(()=>this.target.removeProperty(e))}}class Vt{setProperty(e,s){Vt.properties[e]=s;for(const i of Vt.roots.values())ko.getOrCreate(Vt.normalizeRoot(i)).setProperty(e,s)}removeProperty(e){delete Vt.properties[e];for(const s of Vt.roots.values())ko.getOrCreate(Vt.normalizeRoot(s)).removeProperty(e)}static registerRoot(e){const{roots:s}=Vt;if(!s.has(e)){s.add(e);const i=ko.getOrCreate(this.normalizeRoot(e));for(const n in Vt.properties)i.setProperty(n,Vt.properties[n])}}static unregisterRoot(e){const{roots:s}=Vt;if(s.has(e)){s.delete(e);const i=ko.getOrCreate(Vt.normalizeRoot(e));for(const n in Vt.properties)i.removeProperty(n)}}static normalizeRoot(e){return e===Di?document:e}}Vt.roots=new Set;Vt.properties={};const cd=new WeakMap,Hx=me.supportsAdoptedStyleSheets?Px:Xm,ko=Object.freeze({getOrCreate(t){if(cd.has(t))return cd.get(t);let e;return t===Di?e=new Vt:t instanceof Document?e=me.supportsAdoptedStyleSheets?new Lx:new Mx:Ax(t)?e=new Hx(t):e=new Vx(t),cd.set(t,e),e}});class rs extends Fu{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,e.cssCustomPropertyName!==null&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=rs.uniqueId(),rs.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new rs({name:typeof e=="string"?e:e.name,cssCustomPropertyName:typeof e=="string"?e:e.cssCustomPropertyName===void 0?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return typeof e.cssCustomProperty=="string"}static isDerivedDesignTokenValue(e){return typeof e=="function"}static getTokenById(e){return rs.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const s=Ct.getOrCreate(e).get(this);if(s!==void 0)return s;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,s){return this._appliedTo.add(e),s instanceof rs&&(s=this.alias(s)),Ct.getOrCreate(e).set(this,s),this}deleteValueFor(e){return this._appliedTo.delete(e),Ct.existsFor(e)&&Ct.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(Di,e),this}subscribe(e,s){const i=this.getOrCreateSubscriberSet(s);s&&!Ct.existsFor(s)&&Ct.getOrCreate(s),i.has(e)||i.add(e)}unsubscribe(e,s){const i=this.subscribers.get(s||this);i&&i.has(e)&&i.delete(e)}notify(e){const s=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach(i=>i.handleChange(s)),this.subscribers.has(e)&&this.subscribers.get(e).forEach(i=>i.handleChange(s))}alias(e){return s=>e.getValueFor(s)}}rs.uniqueId=(()=>{let t=0;return()=>(t++,t.toString(16))})();rs.tokensById=new Map;class Nx{startReflection(e,s){e.subscribe(this,s),this.handleChange({token:e,target:s})}stopReflection(e,s){e.unsubscribe(this,s),this.remove(e,s)}handleChange(e){const{token:s,target:i}=e;this.add(s,i)}add(e,s){ko.getOrCreate(s).setProperty(e.cssCustomProperty,this.resolveCSSValue(Ct.getOrCreate(s).get(e)))}remove(e,s){ko.getOrCreate(s).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&typeof e.createCSS=="function"?e.createCSS():e}}class zx{constructor(e,s,i){this.source=e,this.token=s,this.node=i,this.dependencies=new Set,this.observer=fe.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,Sr))}}class Bx{constructor(){this.values=new Map}set(e,s){this.values.get(e)!==s&&(this.values.set(e,s),fe.getNotifier(this).notify(e.id))}get(e){return fe.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e)}all(){return this.values.entries()}}const hr=new WeakMap,fr=new WeakMap;class Ct{constructor(e){this.target=e,this.store=new Bx,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(s,i)=>{const n=rs.getTokenById(i);if(n&&(n.notify(this.target),rs.isCSSDesignToken(n))){const o=this.parent,r=this.isReflecting(n);if(o){const a=o.get(n),l=s.get(n);a!==l&&!r?this.reflectToCSS(n):a===l&&r&&this.stopReflectToCSS(n)}else r||this.reflectToCSS(n)}}},hr.set(e,this),fe.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof Ml?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return hr.get(e)||new Ct(e)}static existsFor(e){return hr.has(e)}static findParent(e){if(Di!==e.target){let s=pl(e.target);for(;s!==null;){if(hr.has(s))return hr.get(s);s=pl(s)}return Ct.getOrCreate(Di)}return null}static findClosestAssignedNode(e,s){let i=s;do{if(i.has(e))return i;i=i.parent?i.parent:i.target!==Di?Ct.getOrCreate(Di):null}while(i!==null);return null}get parent(){return fr.get(this)||null}has(e){return this.assignedValues.has(e)}get(e){const s=this.store.get(e);if(s!==void 0)return s;const i=this.getRaw(e);if(i!==void 0)return this.hydrate(e,i),this.get(e)}getRaw(e){var s;return this.assignedValues.has(e)?this.assignedValues.get(e):(s=Ct.findClosestAssignedNode(e,this))===null||s===void 0?void 0:s.getRaw(e)}set(e,s){rs.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,s),rs.isDerivedDesignTokenValue(s)?this.setupBindingObserver(e,s):this.store.set(e,s)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const s=this.getRaw(e);s?this.hydrate(e,s):this.store.delete(e)}bind(){const e=Ct.findParent(this);e&&e.appendChild(this);for(const s of this.assignedValues.keys())s.notify(this.target)}unbind(){this.parent&&fr.get(this).removeChild(this)}appendChild(e){e.parent&&fr.get(e).removeChild(e);const s=this.children.filter(i=>e.contains(i));fr.set(e,this),this.children.push(e),s.forEach(i=>e.appendChild(i)),fe.getNotifier(this.store).subscribe(e);for(const[i,n]of this.store.all())e.hydrate(i,this.bindingObservers.has(i)?this.getRaw(i):n)}removeChild(e){const s=this.children.indexOf(e);return s!==-1&&this.children.splice(s,1),fe.getNotifier(this.store).unsubscribe(e),e.parent===this?fr.delete(e):!1}contains(e){return Ox(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),Ct.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),Ct.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,s){const i=rs.getTokenById(s);i&&this.hydrate(i,this.getRaw(i))}hydrate(e,s){if(!this.has(e)){const i=this.bindingObservers.get(e);rs.isDerivedDesignTokenValue(s)?i?i.source!==s&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,s)):this.setupBindingObserver(e,s):(i&&this.tearDownBindingObserver(e),this.store.set(e,s))}}setupBindingObserver(e,s){const i=new zx(s,e,this);return this.bindingObservers.set(e,i),i}tearDownBindingObserver(e){return this.bindingObservers.has(e)?(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0):!1}}Ct.cssCustomPropertyReflector=new Nx;h([I],Ct.prototype,"children",void 0);function jx(t){return rs.from(t)}const Je=Object.freeze({create:jx,notifyConnection(t){return!t.isConnected||!Ct.existsFor(t)?!1:(Ct.getOrCreate(t).bind(),!0)},notifyDisconnection(t){return t.isConnected||!Ct.existsFor(t)?!1:(Ct.getOrCreate(t).unbind(),!0)},registerRoot(t=Di){Vt.registerRoot(t)},unregisterRoot(t=Di){Vt.unregisterRoot(t)}}),dd=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),ud=new Map,sl=new Map;let Io=null;const pr=bt.createInterface(t=>t.cachedCallback(e=>(Io===null&&(Io=new Jm(null,e)),Io))),Qm=Object.freeze({tagFor(t){return sl.get(t)},responsibleFor(t){const e=t.$$designSystem$$;return e||bt.findResponsibleContainer(t).get(pr)},getOrCreate(t){if(!t)return Io===null&&(Io=bt.getOrCreateDOMContainer().get(pr)),Io;const e=t.$$designSystem$$;if(e)return e;const s=bt.getOrCreateDOMContainer(t);if(s.has(pr,!1))return s.get(pr);{const i=new Jm(t,s);return s.register(zr.instance(pr,i)),i}}});function Ux(t,e,s){return typeof t=="string"?{name:t,type:e,callback:s}:t}class Jm{constructor(e,s){this.owner=e,this.container=s,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>dd.definitionCallbackOnly,e!==null&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){const s=this.container,i=[],n=this.disambiguate,o=this.shadowRootMode,r={elementPrefix:this.prefix,tryDefineElement(a,l,c){const d=Ux(a,l,c),{name:u,callback:f,baseClass:y}=d;let{type:w}=d,$=u,_=ud.get($),A=!0;for(;_;){const P=n($,w,_);switch(P){case dd.ignoreDuplicate:return;case dd.definitionCallbackOnly:A=!1,_=void 0;break;default:$=P,_=ud.get($);break}}A&&((sl.has(w)||w===$e)&&(w=class extends w{}),ud.set($,w),sl.set(w,$),y&&sl.set(y,$)),i.push(new Yx(s,$,w,o,f,A))}};this.designTokensInitialized||(this.designTokensInitialized=!0,this.designTokenRoot!==null&&Je.registerRoot(this.designTokenRoot)),s.registerWithContext(r,...e);for(const a of i)a.callback(a),a.willDefine&&a.definition!==null&&a.definition.define();return this}}class Yx{constructor(e,s,i,n,o,r){this.container=e,this.name=s,this.type=i,this.shadowRootMode=n,this.callback=o,this.willDefine=r,this.definition=null}definePresentation(e){Ym.define(this.name,e,this.container)}defineElement(e){this.definition=new Ll(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return Qm.tagFor(e)}}const Wx=(t,e)=>N`
    <div class="positioning-region" part="positioning-region">
        ${xt(s=>s.modal,N`
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
            ${Be("dialog")}
        >
            <slot></slot>
        </div>
    </div>
`;/*!
* tabbable 5.3.3
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var Km=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],qx=Km.join(","),eg=typeof Element>"u",Ur=eg?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,zd=!eg&&Element.prototype.getRootNode?function(t){return t.getRootNode()}:function(t){return t.ownerDocument},Gx=function(e,s){return e.tabIndex<0&&(s||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},tg=function(e){return e.tagName==="INPUT"},Zx=function(e){return tg(e)&&e.type==="hidden"},Xx=function(e){var s=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(i){return i.tagName==="SUMMARY"});return s},Qx=function(e,s){for(var i=0;i<e.length;i++)if(e[i].checked&&e[i].form===s)return e[i]},Jx=function(e){if(!e.name)return!0;var s=e.form||zd(e),i=function(a){return s.querySelectorAll('input[type="radio"][name="'+a+'"]')},n;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")n=i(window.CSS.escape(e.name));else try{n=i(e.name)}catch(r){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",r.message),!1}var o=Qx(n,e.form);return!o||o===e},Kx=function(e){return tg(e)&&e.type==="radio"},ew=function(e){return Kx(e)&&!Jx(e)},Pf=function(e){var s=e.getBoundingClientRect(),i=s.width,n=s.height;return i===0&&n===0},tw=function(e,s){var i=s.displayCheck,n=s.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var o=Ur.call(e,"details>summary:first-of-type"),r=o?e.parentElement:e;if(Ur.call(r,"details:not([open]) *"))return!0;var a=zd(e).host,l=(a==null?void 0:a.ownerDocument.contains(a))||e.ownerDocument.contains(e);if(!i||i==="full"){if(typeof n=="function"){for(var c=e;e;){var d=e.parentElement,u=zd(e);if(d&&!d.shadowRoot&&n(d)===!0)return Pf(e);e.assignedSlot?e=e.assignedSlot:!d&&u!==e.ownerDocument?e=u.host:e=d}e=c}if(l)return!e.getClientRects().length}else if(i==="non-zero-area")return Pf(e);return!1},sw=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var s=e.parentElement;s;){if(s.tagName==="FIELDSET"&&s.disabled){for(var i=0;i<s.children.length;i++){var n=s.children.item(i);if(n.tagName==="LEGEND")return Ur.call(s,"fieldset[disabled] *")?!0:!n.contains(e)}return!0}s=s.parentElement}return!1},sg=function(e,s){return!(s.disabled||Zx(s)||tw(s,e)||Xx(s)||sw(s))},iw=function(e,s){return!(ew(s)||Gx(s)<0||!sg(e,s))},Lf=function(e,s){if(s=s||{},!e)throw new Error("No node provided");return Ur.call(e,qx)===!1?!1:iw(s,e)},nw=Km.concat("iframe").join(","),Mf=function(e,s){if(s=s||{},!e)throw new Error("No node provided");return Ur.call(e,nw)===!1?!1:sg(s,e)};class zs extends $e{constructor(){super(...arguments),this.modal=!0,this.hidden=!1,this.trapFocus=!0,this.trapFocusChanged=()=>{this.$fastController.isConnected&&this.updateTrapFocus()},this.isTrappingFocus=!1,this.handleDocumentKeydown=e=>{if(!e.defaultPrevented&&!this.hidden)switch(e.key){case Qo:this.dismiss(),e.preventDefault();break;case Hl:this.handleTabKeyDown(e);break}},this.handleDocumentFocus=e=>{!e.defaultPrevented&&this.shouldForceFocus(e.target)&&(this.focusFirstElement(),e.preventDefault())},this.handleTabKeyDown=e=>{if(!this.trapFocus||this.hidden)return;const s=this.getTabQueueBounds();if(s.length!==0){if(s.length===1){s[0].focus(),e.preventDefault();return}e.shiftKey&&e.target===s[0]?(s[s.length-1].focus(),e.preventDefault()):!e.shiftKey&&e.target===s[s.length-1]&&(s[0].focus(),e.preventDefault())}},this.getTabQueueBounds=()=>{const e=[];return zs.reduceTabbableItems(e,this)},this.focusFirstElement=()=>{const e=this.getTabQueueBounds();e.length>0?e[0].focus():this.dialog instanceof HTMLElement&&this.dialog.focus()},this.shouldForceFocus=e=>this.isTrappingFocus&&!this.contains(e),this.shouldTrapFocus=()=>this.trapFocus&&!this.hidden,this.updateTrapFocus=e=>{const s=e===void 0?this.shouldTrapFocus():e;s&&!this.isTrappingFocus?(this.isTrappingFocus=!0,document.addEventListener("focusin",this.handleDocumentFocus),me.queueUpdate(()=>{this.shouldForceFocus(document.activeElement)&&this.focusFirstElement()})):!s&&this.isTrappingFocus&&(this.isTrappingFocus=!1,document.removeEventListener("focusin",this.handleDocumentFocus))}}dismiss(){this.$emit("dismiss"),this.$emit("cancel")}show(){this.hidden=!1}hide(){this.hidden=!0,this.$emit("close")}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.handleDocumentKeydown),this.notifier=fe.getNotifier(this),this.notifier.subscribe(this,"hidden"),this.updateTrapFocus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeydown),this.updateTrapFocus(!1),this.notifier.unsubscribe(this,"hidden")}handleChange(e,s){switch(s){case"hidden":this.updateTrapFocus();break}}static reduceTabbableItems(e,s){return s.getAttribute("tabindex")==="-1"?e:Lf(s)||zs.isFocusableFastElement(s)&&zs.hasTabbableShadow(s)?(e.push(s),e):s.childElementCount?e.concat(Array.from(s.children).reduce(zs.reduceTabbableItems,[])):e}static isFocusableFastElement(e){var s,i;return!!(!((i=(s=e.$fastController)===null||s===void 0?void 0:s.definition.shadowOptions)===null||i===void 0)&&i.delegatesFocus)}static hasTabbableShadow(e){var s,i;return Array.from((i=(s=e.shadowRoot)===null||s===void 0?void 0:s.querySelectorAll("*"))!==null&&i!==void 0?i:[]).some(n=>Lf(n))}}h([p({mode:"boolean"})],zs.prototype,"modal",void 0);h([p({mode:"boolean"})],zs.prototype,"hidden",void 0);h([p({attribute:"trap-focus",mode:"boolean"})],zs.prototype,"trapFocus",void 0);h([p({attribute:"aria-describedby"})],zs.prototype,"ariaDescribedby",void 0);h([p({attribute:"aria-labelledby"})],zs.prototype,"ariaLabelledby",void 0);h([p({attribute:"aria-label"})],zs.prototype,"ariaLabel",void 0);const ow=(t,e)=>N`
    <template role="${s=>s.role}" aria-orientation="${s=>s.orientation}"></template>
`,rw={separator:"separator",presentation:"presentation"};class Yl extends $e{constructor(){super(...arguments),this.role=rw.separator,this.orientation=St.horizontal}}h([p],Yl.prototype,"role",void 0);h([p],Yl.prototype,"orientation",void 0);const Bd={next:"next",previous:"previous"},aw=(t,e)=>N`
    <template
        role="button"
        aria-disabled="${s=>s.disabled?!0:void 0}"
        tabindex="${s=>s.hiddenFromAT?-1:0}"
        class="${s=>s.direction} ${s=>s.disabled?"disabled":""}"
        @keyup="${(s,i)=>s.keyupHandler(i.event)}"
    >
        ${xt(s=>s.direction===Bd.next,N`
                <span part="next" class="next">
                    <slot name="next">
                        ${e.next||""}
                    </slot>
                </span>
            `)}
        ${xt(s=>s.direction===Bd.previous,N`
                <span part="previous" class="previous">
                    <slot name="previous">
                        ${e.previous||""}
                    </slot>
                </span>
            `)}
    </template>
`;class Wl extends $e{constructor(){super(...arguments),this.hiddenFromAT=!0,this.direction=Bd.next}keyupHandler(e){if(!this.hiddenFromAT){const s=e.key;(s==="Enter"||s==="Space")&&this.$emit("click",e),s==="Escape"&&this.blur()}}}h([p({mode:"boolean"})],Wl.prototype,"disabled",void 0);h([p({attribute:"aria-hidden",converter:ca})],Wl.prototype,"hiddenFromAT",void 0);h([p],Wl.prototype,"direction",void 0);const lw=(t,e)=>N`
    <template
        aria-checked="${s=>s.ariaChecked}"
        aria-disabled="${s=>s.ariaDisabled}"
        aria-posinset="${s=>s.ariaPosInSet}"
        aria-selected="${s=>s.ariaSelected}"
        aria-setsize="${s=>s.ariaSetSize}"
        class="${s=>[s.checked&&"checked",s.selected&&"selected",s.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${us(t,e)}
        <span class="content" part="content">
            <slot ${ut("content")}></slot>
        </span>
        ${ds(t,e)}
    </template>
`;class ua extends $s{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return(e=this.options)===null||e===void 0?void 0:e.filter(s=>s.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,s){var i,n;this.ariaActiveDescendant=(n=(i=this.options[s])===null||i===void 0?void 0:i.id)!==null&&n!==void 0?n:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((s,i)=>{s.checked=Ra(i,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((s,i)=>{s.checked=Ra(i,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((s,i)=>{s.checked=Ra(i,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.checkedOptions.length===1&&(this.rangeStartIndex+=1),this.options.forEach((s,i)=>{s.checked=Ra(i,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var s;if(!this.multiple)return super.clickHandler(e);const i=(s=e.target)===null||s===void 0?void 0:s.closest("[role=option]");if(!(!i||i.disabled))return this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(i),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.uncheckAllOptions(),this.activeIndex===-1&&(this.activeIndex=this.firstSelectedOptionIndex!==-1?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;const{key:s,shiftKey:i}=e;switch(this.shouldSkipFocus=!1,s){case yi:{this.checkFirstOption(i);return}case Bs:{this.checkNextOption(i);return}case js:{this.checkPreviousOption(i);return}case xi:{this.checkLastOption(i);return}case Hl:return this.focusAndScrollOptionIntoView(),!0;case Qo:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case to:if(e.preventDefault(),this.typeAheadExpired){this.toggleSelectedForAllCheckedOptions();return}default:return s.length===1&&this.handleTypeAhead(`${s}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,s){var i;this.ariaMultiSelectable=s?"true":null,(i=this.options)===null||i===void 0||i.forEach(n=>{n.checked=s?!1:void 0}),this.setSelectedOptions()}setSelectedOptions(){if(!this.multiple){super.setSelectedOptions();return}this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(e=>e.selected),this.focusAndScrollOptionIntoView())}sizeChanged(e,s){var i;const n=Math.max(0,parseInt((i=s==null?void 0:s.toFixed())!==null&&i!==void 0?i:"",10));n!==s&&me.queueUpdate(()=>{this.size=n})}toggleSelectedForAllCheckedOptions(){const e=this.checkedOptions.filter(i=>!i.disabled),s=!e.every(i=>i.selected);e.forEach(i=>i.selected=s),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,s){if(!this.multiple){super.typeaheadBufferChanged(e,s);return}if(this.$fastController.isConnected){const i=this.getTypeaheadMatches(),n=this.options.indexOf(i[0]);n>-1&&(this.activeIndex=n,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}uncheckAllOptions(e=!1){this.options.forEach(s=>s.checked=this.multiple?!1:void 0),e||(this.rangeStartIndex=-1)}}h([I],ua.prototype,"activeIndex",void 0);h([p({mode:"boolean"})],ua.prototype,"multiple",void 0);h([p({converter:se})],ua.prototype,"size",void 0);const cw=(t,e)=>N`
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
            ${ut({filter:ua.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
        ></slot>
    </template>
`,as={menuitem:"menuitem",menuitemcheckbox:"menuitemcheckbox",menuitemradio:"menuitemradio"},dw={[as.menuitem]:"menuitem",[as.menuitemcheckbox]:"menuitemcheckbox",[as.menuitemradio]:"menuitemradio"};class Es extends $e{constructor(){super(...arguments),this.role=as.menuitem,this.hasSubmenu=!1,this.currentDirection=ot.ltr,this.focusSubmenuOnLoad=!1,this.handleMenuItemKeyDown=e=>{if(e.defaultPrevented)return!1;switch(e.key){case zi:case to:return this.invoke(),!1;case vn:return this.expandAndFocus(),!1;case gn:if(this.expanded)return this.expanded=!1,this.focus(),!1}return!0},this.handleMenuItemClick=e=>(e.defaultPrevented||this.disabled||this.invoke(),!1),this.submenuLoaded=()=>{this.focusSubmenuOnLoad&&(this.focusSubmenuOnLoad=!1,this.hasSubmenu&&(this.submenu.focus(),this.setAttribute("tabindex","-1")))},this.handleMouseOver=e=>(this.disabled||!this.hasSubmenu||this.expanded||(this.expanded=!0),!1),this.handleMouseOut=e=>(!this.expanded||this.contains(document.activeElement)||(this.expanded=!1),!1),this.expandAndFocus=()=>{this.hasSubmenu&&(this.focusSubmenuOnLoad=!0,this.expanded=!0)},this.invoke=()=>{if(!this.disabled)switch(this.role){case as.menuitemcheckbox:this.checked=!this.checked;break;case as.menuitem:this.updateSubmenu(),this.hasSubmenu?this.expandAndFocus():this.$emit("change");break;case as.menuitemradio:this.checked||(this.checked=!0);break}},this.updateSubmenu=()=>{this.submenu=this.domChildren().find(e=>e.getAttribute("role")==="menu"),this.hasSubmenu=this.submenu!==void 0}}expandedChanged(e){if(this.$fastController.isConnected){if(this.submenu===void 0)return;this.expanded===!1?this.submenu.collapseExpandedItem():this.currentDirection=Xn(this),this.$emit("expanded-change",this,{bubbles:!1})}}checkedChanged(e,s){this.$fastController.isConnected&&this.$emit("change")}connectedCallback(){super.connectedCallback(),me.queueUpdate(()=>{this.updateSubmenu()}),this.startColumnCount||(this.startColumnCount=1),this.observer=new MutationObserver(this.updateSubmenu)}disconnectedCallback(){super.disconnectedCallback(),this.submenu=void 0,this.observer!==void 0&&(this.observer.disconnect(),this.observer=void 0)}domChildren(){return Array.from(this.children).filter(e=>!e.hasAttribute("hidden"))}}h([p({mode:"boolean"})],Es.prototype,"disabled",void 0);h([p({mode:"boolean"})],Es.prototype,"expanded",void 0);h([I],Es.prototype,"startColumnCount",void 0);h([p],Es.prototype,"role",void 0);h([p({mode:"boolean"})],Es.prototype,"checked",void 0);h([I],Es.prototype,"submenuRegion",void 0);h([I],Es.prototype,"hasSubmenu",void 0);h([I],Es.prototype,"currentDirection",void 0);h([I],Es.prototype,"submenu",void 0);ft(Es,ws);const uw=(t,e)=>N`
    <template
        role="${s=>s.role}"
        aria-haspopup="${s=>s.hasSubmenu?"menu":void 0}"
        aria-checked="${s=>s.role!==as.menuitem?s.checked:void 0}"
        aria-disabled="${s=>s.disabled}"
        aria-expanded="${s=>s.expanded}"
        @keydown="${(s,i)=>s.handleMenuItemKeyDown(i.event)}"
        @click="${(s,i)=>s.handleMenuItemClick(i.event)}"
        @mouseover="${(s,i)=>s.handleMouseOver(i.event)}"
        @mouseout="${(s,i)=>s.handleMouseOut(i.event)}"
        class="${s=>s.disabled?"disabled":""} ${s=>s.expanded?"expanded":""} ${s=>`indent-${s.startColumnCount}`}"
    >
            ${xt(s=>s.role===as.menuitemcheckbox,N`
                    <div part="input-container" class="input-container">
                        <span part="checkbox" class="checkbox">
                            <slot name="checkbox-indicator">
                                ${e.checkboxIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
            ${xt(s=>s.role===as.menuitemradio,N`
                    <div part="input-container" class="input-container">
                        <span part="radio" class="radio">
                            <slot name="radio-indicator">
                                ${e.radioIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
        </div>
        ${us(t,e)}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${ds(t,e)}
        ${xt(s=>s.hasSubmenu,N`
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
        ${xt(s=>s.expanded,N`
                <${t.tagFor(he)}
                    :anchorElement="${s=>s}"
                    vertical-positioning-mode="dynamic"
                    vertical-default-position="bottom"
                    vertical-inset="true"
                    horizontal-positioning-mode="dynamic"
                    horizontal-default-position="end"
                    class="submenu-region"
                    dir="${s=>s.currentDirection}"
                    @loaded="${s=>s.submenuLoaded()}"
                    ${Be("submenuRegion")}
                    part="submenu-region"
                >
                    <slot name="submenu"></slot>
                </${t.tagFor(he)}>
            `)}
    </template>
`,hw=(t,e)=>N`
    <template
        slot="${s=>s.slot?s.slot:s.isNestedMenu()?"submenu":void 0}"
        role="menu"
        @keydown="${(s,i)=>s.handleMenuKeyDown(i.event)}"
        @focusout="${(s,i)=>s.handleFocusOut(i.event)}"
    >
        <slot ${ut("items")}></slot>
    </template>
`;let ql=class ig extends $e{constructor(){super(...arguments),this.expandedItem=null,this.focusIndex=-1,this.isNestedMenu=()=>this.parentElement!==null&&Mo(this.parentElement)&&this.parentElement.getAttribute("role")==="menuitem",this.handleFocusOut=e=>{if(!this.contains(e.relatedTarget)&&this.menuItems!==void 0){this.collapseExpandedItem();const s=this.menuItems.findIndex(this.isFocusableElement);this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.menuItems[s].setAttribute("tabindex","0"),this.focusIndex=s}},this.handleItemFocus=e=>{const s=e.target;this.menuItems!==void 0&&s!==this.menuItems[this.focusIndex]&&(this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=this.menuItems.indexOf(s),s.setAttribute("tabindex","0"))},this.handleExpandedChanged=e=>{if(e.defaultPrevented||e.target===null||this.menuItems===void 0||this.menuItems.indexOf(e.target)<0)return;e.preventDefault();const s=e.target;if(this.expandedItem!==null&&s===this.expandedItem&&s.expanded===!1){this.expandedItem=null;return}s.expanded&&(this.expandedItem!==null&&this.expandedItem!==s&&(this.expandedItem.expanded=!1),this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.expandedItem=s,this.focusIndex=this.menuItems.indexOf(s),s.setAttribute("tabindex","0"))},this.removeItemListeners=()=>{this.menuItems!==void 0&&this.menuItems.forEach(e=>{e.removeEventListener("expanded-change",this.handleExpandedChanged),e.removeEventListener("focus",this.handleItemFocus)})},this.setItems=()=>{const e=this.domChildren();this.removeItemListeners(),this.menuItems=e;const s=this.menuItems.filter(this.isMenuItemElement);s.length&&(this.focusIndex=0);function i(o){const r=o.getAttribute("role"),a=o.querySelector("[slot=start]");return r!==as.menuitem&&a===null||r===as.menuitem&&a!==null?1:r!==as.menuitem&&a!==null?2:0}const n=s.reduce((o,r)=>{const a=i(r);return o>a?o:a},0);s.forEach((o,r)=>{o.setAttribute("tabindex",r===0?"0":"-1"),o.addEventListener("expanded-change",this.handleExpandedChanged),o.addEventListener("focus",this.handleItemFocus),o instanceof Es&&(o.startColumnCount=n)})},this.changeHandler=e=>{if(this.menuItems===void 0)return;const s=e.target,i=this.menuItems.indexOf(s);if(i!==-1&&s.role==="menuitemradio"&&s.checked===!0){for(let o=i-1;o>=0;--o){const r=this.menuItems[o],a=r.getAttribute("role");if(a===as.menuitemradio&&(r.checked=!1),a==="separator")break}const n=this.menuItems.length-1;for(let o=i+1;o<=n;++o){const r=this.menuItems[o],a=r.getAttribute("role");if(a===as.menuitemradio&&(r.checked=!1),a==="separator")break}}},this.isMenuItemElement=e=>Mo(e)&&ig.focusableElementRoles.hasOwnProperty(e.getAttribute("role")),this.isFocusableElement=e=>this.isMenuItemElement(e)}itemsChanged(e,s){this.$fastController.isConnected&&this.menuItems!==void 0&&this.setItems()}connectedCallback(){super.connectedCallback(),me.queueUpdate(()=>{this.setItems()}),this.addEventListener("change",this.changeHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeItemListeners(),this.menuItems=void 0,this.removeEventListener("change",this.changeHandler)}focus(){this.setFocus(0,1)}collapseExpandedItem(){this.expandedItem!==null&&(this.expandedItem.expanded=!1,this.expandedItem=null)}handleMenuKeyDown(e){if(!(e.defaultPrevented||this.menuItems===void 0))switch(e.key){case Bs:this.setFocus(this.focusIndex+1,1);return;case js:this.setFocus(this.focusIndex-1,-1);return;case xi:this.setFocus(this.menuItems.length-1,-1);return;case yi:this.setFocus(0,1);return;default:return!0}}domChildren(){return Array.from(this.children).filter(e=>!e.hasAttribute("hidden"))}setFocus(e,s){if(this.menuItems!==void 0)for(;e>=0&&e<this.menuItems.length;){const i=this.menuItems[e];if(this.isFocusableElement(i)){this.focusIndex>-1&&this.menuItems.length>=this.focusIndex-1&&this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=e,i.setAttribute("tabindex","0"),i.focus();break}e+=s}}};ql.focusableElementRoles=dw;h([I],ql.prototype,"items",void 0);const fw=(t,e)=>N`
    <template class="${s=>s.readOnly?"readonly":""}">
        <label
            part="label"
            for="control"
            class="${s=>s.defaultSlottedNodes&&s.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${ut("defaultSlottedNodes")}></slot>
        </label>
        <div class="root" part="root">
            ${us(t,e)}
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
                ${Be("control")}
            />
            ${xt(s=>!s.hideStep&&!s.readOnly&&!s.disabled,N`
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
            ${ds(t,e)}
        </div>
    </template>
`;class pw extends $e{}class mw extends Bi(pw){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const gw={email:"email",password:"password",tel:"tel",text:"text",url:"url"};let ks=class extends mw{constructor(){super(...arguments),this.type=gw.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&me.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};h([p({attribute:"readonly",mode:"boolean"})],ks.prototype,"readOnly",void 0);h([p({mode:"boolean"})],ks.prototype,"autofocus",void 0);h([p],ks.prototype,"placeholder",void 0);h([p],ks.prototype,"type",void 0);h([p],ks.prototype,"list",void 0);h([p({converter:se})],ks.prototype,"maxlength",void 0);h([p({converter:se})],ks.prototype,"minlength",void 0);h([p],ks.prototype,"pattern",void 0);h([p({converter:se})],ks.prototype,"size",void 0);h([p({mode:"boolean"})],ks.prototype,"spellcheck",void 0);h([I],ks.prototype,"defaultSlottedNodes",void 0);class Gl{}ft(Gl,rt);ft(ks,ws,Gl);class vw extends $e{}class bw extends Bi(vw){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let hs=class extends bw{constructor(){super(...arguments),this.hideStep=!1,this.step=1,this.isUserInput=!1}maxChanged(e,s){var i;this.max=Math.max(s,(i=this.min)!==null&&i!==void 0?i:s);const n=Math.min(this.min,this.max);this.min!==void 0&&this.min!==n&&(this.min=n),this.value=this.getValidValue(this.value)}minChanged(e,s){var i;this.min=Math.min(s,(i=this.max)!==null&&i!==void 0?i:s);const n=Math.max(this.min,this.max);this.max!==void 0&&this.max!==n&&(this.max=n),this.value=this.getValidValue(this.value)}get valueAsNumber(){return parseFloat(super.value)}set valueAsNumber(e){this.value=e.toString()}valueChanged(e,s){this.value=this.getValidValue(s),s===this.value&&(this.control&&!this.isUserInput&&(this.control.value=this.value),super.valueChanged(e,this.value),e!==void 0&&!this.isUserInput&&(this.$emit("input"),this.$emit("change")),this.isUserInput=!1)}validate(){super.validate(this.control)}getValidValue(e){var s,i;let n=parseFloat(parseFloat(e).toPrecision(12));return isNaN(n)?n="":(n=Math.min(n,(s=this.max)!==null&&s!==void 0?s:n),n=Math.max(n,(i=this.min)!==null&&i!==void 0?i:n).toString()),n}stepUp(){const e=parseFloat(this.value),s=isNaN(e)?this.min>0?this.min:this.max<0?this.max:this.min?0:this.step:e+this.step;this.value=s.toString()}stepDown(){const e=parseFloat(this.value),s=isNaN(e)?this.min>0?this.min:this.max<0?this.max:this.min?0:0-this.step:e-this.step;this.value=s.toString()}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","number"),this.validate(),this.control.value=this.value,this.autofocus&&me.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.control.value=this.control.value.replace(/[^0-9\-+e.]/g,""),this.isUserInput=!0,this.value=this.control.value}handleChange(){this.$emit("change")}handleKeyDown(e){switch(e.key){case js:return this.stepUp(),!1;case Bs:return this.stepDown(),!1}return!0}handleBlur(){this.control.value=this.value}};h([p({attribute:"readonly",mode:"boolean"})],hs.prototype,"readOnly",void 0);h([p({mode:"boolean"})],hs.prototype,"autofocus",void 0);h([p({attribute:"hide-step",mode:"boolean"})],hs.prototype,"hideStep",void 0);h([p],hs.prototype,"placeholder",void 0);h([p],hs.prototype,"list",void 0);h([p({converter:se})],hs.prototype,"maxlength",void 0);h([p({converter:se})],hs.prototype,"minlength",void 0);h([p({converter:se})],hs.prototype,"size",void 0);h([p({converter:se})],hs.prototype,"step",void 0);h([p({converter:se})],hs.prototype,"max",void 0);h([p({converter:se})],hs.prototype,"min",void 0);h([I],hs.prototype,"defaultSlottedNodes",void 0);ft(hs,ws,Gl);const Vf=44,yw=(t,e)=>N`
    <template
        role="progressbar"
        aria-valuenow="${s=>s.value}"
        aria-valuemin="${s=>s.min}"
        aria-valuemax="${s=>s.max}"
        class="${s=>s.paused?"paused":""}"
    >
        ${xt(s=>typeof s.value=="number",N`
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
                        style="stroke-dasharray: ${s=>Vf*s.percentComplete/100}px ${Vf}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `,N`
                <slot name="indeterminate" slot="indeterminate">
                    ${e.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`;class so extends $e{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const e=typeof this.min=="number"?this.min:0,s=typeof this.max=="number"?this.max:100,i=typeof this.value=="number"?this.value:0,n=s-e;this.percentComplete=n===0?0:Math.fround((i-e)/n*100)}}h([p({converter:se})],so.prototype,"value",void 0);h([p({converter:se})],so.prototype,"min",void 0);h([p({converter:se})],so.prototype,"max",void 0);h([p({mode:"boolean"})],so.prototype,"paused",void 0);h([I],so.prototype,"percentComplete",void 0);const xw=(t,e)=>N`
    <template
        role="progressbar"
        aria-valuenow="${s=>s.value}"
        aria-valuemin="${s=>s.min}"
        aria-valuemax="${s=>s.max}"
        class="${s=>s.paused?"paused":""}"
    >
        ${xt(s=>typeof s.value=="number",N`
                <div class="progress" part="progress" slot="determinate">
                    <div
                        class="determinate"
                        part="determinate"
                        style="width: ${s=>s.percentComplete}%"
                    ></div>
                </div>
            `,N`
                <div class="progress" part="progress" slot="indeterminate">
                    <slot class="indeterminate" name="indeterminate">
                        ${e.indeterminateIndicator1||""}
                        ${e.indeterminateIndicator2||""}
                    </slot>
                </div>
            `)}
    </template>
`,ww=(t,e)=>N`
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
            class="positioning-region ${s=>s.orientation===St.horizontal?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${ut({property:"slottedRadioButtons",filter:Mi("[role=radio]")})}
            ></slot>
        </div>
    </template>
`;class _n extends $e{constructor(){super(...arguments),this.orientation=St.horizontal,this.radioChangeHandler=e=>{const s=e.target;s.checked&&(this.slottedRadioButtons.forEach(i=>{i!==s&&(i.checked=!1,this.isInsideFoundationToolbar||i.setAttribute("tabindex","-1"))}),this.selectedRadio=s,this.value=s.value,s.setAttribute("tabindex","0"),this.focusedRadio=s),e.stopPropagation()},this.moveToRadioByIndex=(e,s)=>{const i=e[s];this.isInsideToolbar||(i.setAttribute("tabindex","0"),i.readOnly?this.slottedRadioButtons.forEach(n=>{n!==i&&n.setAttribute("tabindex","-1")}):(i.checked=!0,this.selectedRadio=i)),this.focusedRadio=i,i.focus()},this.moveRightOffGroup=()=>{var e;(e=this.nextElementSibling)===null||e===void 0||e.focus()},this.moveLeftOffGroup=()=>{var e;(e=this.previousElementSibling)===null||e===void 0||e.focus()},this.focusOutHandler=e=>{const s=this.slottedRadioButtons,i=e.target,n=i!==null?s.indexOf(i):0,o=this.focusedRadio?s.indexOf(this.focusedRadio):-1;return(o===0&&n===o||o===s.length-1&&o===n)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),s.forEach(r=>{r!==this.selectedRadio&&r.setAttribute("tabindex","-1")}))):(this.focusedRadio=s[0],this.focusedRadio.setAttribute("tabindex","0"),s.forEach(r=>{r!==this.focusedRadio&&r.setAttribute("tabindex","-1")}))),!0},this.clickHandler=e=>{const s=e.target;if(s){const i=this.slottedRadioButtons;s.checked||i.indexOf(s)===0?(s.setAttribute("tabindex","0"),this.selectedRadio=s):(s.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=s}e.preventDefault()},this.shouldMoveOffGroupToTheRight=(e,s,i)=>e===s.length&&this.isInsideToolbar&&i===vn,this.shouldMoveOffGroupToTheLeft=(e,s)=>(this.focusedRadio?e.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&s===gn,this.checkFocusedRadio=()=>{this.focusedRadio!==null&&!this.focusedRadio.readOnly&&!this.focusedRadio.checked&&(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=e=>{const s=this.slottedRadioButtons;let i=0;if(i=this.focusedRadio?s.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(i,s,e.key)){this.moveRightOffGroup();return}else i===s.length&&(i=0);for(;i<s.length&&s.length>1;)if(s[i].disabled){if(this.focusedRadio&&i===s.indexOf(this.focusedRadio))break;if(i+1>=s.length){if(this.isInsideToolbar)break;i=0}else i+=1}else{this.moveToRadioByIndex(s,i);break}},this.moveLeft=e=>{const s=this.slottedRadioButtons;let i=0;if(i=this.focusedRadio?s.indexOf(this.focusedRadio)-1:0,i=i<0?s.length-1:i,this.shouldMoveOffGroupToTheLeft(s,e.key)){this.moveLeftOffGroup();return}for(;i>=0&&s.length>1;)if(s[i].disabled){if(this.focusedRadio&&i===s.indexOf(this.focusedRadio))break;i-1<0?i=s.length-1:i-=1}else{this.moveToRadioByIndex(s,i);break}},this.keydownHandler=e=>{const s=e.key;if(s in $o&&this.isInsideFoundationToolbar)return!0;switch(s){case zi:{this.checkFocusedRadio();break}case vn:case Bs:{this.direction===ot.ltr?this.moveRight(e):this.moveLeft(e);break}case gn:case js:{this.direction===ot.ltr?this.moveLeft(e):this.moveRight(e);break}default:return!0}}}readOnlyChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(e=>{this.readOnly?e.readOnly=!0:e.readOnly=!1})}disabledChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(e=>{this.disabled?e.disabled=!0:e.disabled=!1})}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{e.setAttribute("name",this.name)})}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{e.value===this.value&&(e.checked=!0,this.selectedRadio=e)}),this.$emit("change")}slottedRadioButtonsChanged(e,s){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var e;return(e=this.parentToolbar)!==null&&e!==void 0?e:!1}get isInsideFoundationToolbar(){var e;return!!(!((e=this.parentToolbar)===null||e===void 0)&&e.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=Xn(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach(e=>{e.removeEventListener("change",this.radioChangeHandler)})}setupRadioButtons(){const e=this.slottedRadioButtons.filter(n=>n.hasAttribute("checked")),s=e?e.length:0;if(s>1){const n=e[s-1];n.checked=!0}let i=!1;if(this.slottedRadioButtons.forEach(n=>{this.name!==void 0&&n.setAttribute("name",this.name),this.disabled&&(n.disabled=!0),this.readOnly&&(n.readOnly=!0),this.value&&this.value===n.value?(this.selectedRadio=n,this.focusedRadio=n,n.checked=!0,n.setAttribute("tabindex","0"),i=!0):(this.isInsideFoundationToolbar||n.setAttribute("tabindex","-1"),n.checked=!1),n.addEventListener("change",this.radioChangeHandler)}),this.value===void 0&&this.slottedRadioButtons.length>0){const n=this.slottedRadioButtons.filter(r=>r.hasAttribute("checked")),o=n!==null?n.length:0;if(o>0&&!i){const r=n[o-1];r.checked=!0,this.focusedRadio=r,r.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}h([p({attribute:"readonly",mode:"boolean"})],_n.prototype,"readOnly",void 0);h([p({attribute:"disabled",mode:"boolean"})],_n.prototype,"disabled",void 0);h([p],_n.prototype,"name",void 0);h([p],_n.prototype,"value",void 0);h([p],_n.prototype,"orientation",void 0);h([I],_n.prototype,"childItems",void 0);h([I],_n.prototype,"slottedRadioButtons",void 0);const $w=(t,e)=>N`
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
            <slot ${ut("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class kw extends $e{}class _w extends Eu(kw){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Zl extends _w{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{switch(e.key){case to:!this.checked&&!this.readOnly&&(this.checked=!0);return}return!0},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var e;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=(e=this.defaultChecked)!==null&&e!==void 0?e:!1,this.dirtyChecked=!1))}connectedCallback(){var e,s;super.connectedCallback(),this.validate(),((e=this.parentElement)===null||e===void 0?void 0:e.getAttribute("role"))!=="radiogroup"&&this.getAttribute("tabindex")===null&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=(s=this.defaultChecked)!==null&&s!==void 0?s:!1,this.dirtyChecked=!1))}isInsideRadioGroup(){return this.closest("[role=radiogroup]")!==null}clickHandler(e){!this.disabled&&!this.readOnly&&!this.checked&&(this.checked=!0)}}h([p({attribute:"readonly",mode:"boolean"})],Zl.prototype,"readOnly",void 0);h([I],Zl.prototype,"name",void 0);h([I],Zl.prototype,"defaultSlottedNodes",void 0);let Yi=class extends $e{constructor(){super(...arguments),this.framesPerSecond=60,this.updatingItems=!1,this.speed=600,this.easing="ease-in-out",this.flippersHiddenFromAT=!1,this.scrolling=!1,this.resizeDetector=null}get frameTime(){return 1e3/this.framesPerSecond}scrollingChanged(e,s){if(this.scrollContainer){const i=this.scrolling==!0?"scrollstart":"scrollend";this.$emit(i,this.scrollContainer.scrollLeft)}}get isRtl(){return this.scrollItems.length>1&&this.scrollItems[0].offsetLeft>this.scrollItems[1].offsetLeft}connectedCallback(){super.connectedCallback(),this.initializeResizeDetector()}disconnectedCallback(){this.disconnectResizeDetector(),super.disconnectedCallback()}scrollItemsChanged(e,s){s&&!this.updatingItems&&me.queueUpdate(()=>this.setStops())}disconnectResizeDetector(){this.resizeDetector&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.resized.bind(this)),this.resizeDetector.observe(this)}updateScrollStops(){this.updatingItems=!0;const e=this.scrollItems.reduce((s,i)=>i instanceof HTMLSlotElement?s.concat(i.assignedElements()):(s.push(i),s),[]);this.scrollItems=e,this.updatingItems=!1}setStops(){this.updateScrollStops();const{scrollContainer:e}=this,{scrollLeft:s}=e,{width:i,left:n}=e.getBoundingClientRect();this.width=i;let o=0,r=this.scrollItems.map((a,l)=>{const{left:c,width:d}=a.getBoundingClientRect(),u=Math.round(c+s-n),f=Math.round(u+d);return this.isRtl?-f:(o=f,l===0?0:u)}).concat(o);r=this.fixScrollMisalign(r),r.sort((a,l)=>Math.abs(a)-Math.abs(l)),this.scrollStops=r,this.setFlippers()}validateStops(e=!0){const s=()=>!!this.scrollStops.find(i=>i>0);return!s()&&e&&this.setStops(),s()}fixScrollMisalign(e){if(this.isRtl&&e.some(s=>s>0)){e.sort((i,n)=>n-i);const s=e[0];e=e.map(i=>i-s)}return e}setFlippers(){var e,s;const i=this.scrollContainer.scrollLeft;if((e=this.previousFlipperContainer)===null||e===void 0||e.classList.toggle("disabled",i===0),this.scrollStops){const n=Math.abs(this.scrollStops[this.scrollStops.length-1]);(s=this.nextFlipperContainer)===null||s===void 0||s.classList.toggle("disabled",this.validateStops(!1)&&Math.abs(i)+this.width>=n)}}scrollInView(e,s=0,i){var n;if(typeof e!="number"&&e&&(e=this.scrollItems.findIndex(o=>o===e||o.contains(e))),e!==void 0){i=i??s;const{scrollContainer:o,scrollStops:r,scrollItems:a}=this,{scrollLeft:l}=this.scrollContainer,{width:c}=o.getBoundingClientRect(),d=r[e],{width:u}=a[e].getBoundingClientRect(),f=d+u,y=l+s>d;if(y||l+c-i<f){const $=(n=[...r].sort((_,A)=>y?A-_:_-A).find(_=>y?_+s<d:_+c-(i??0)>f))!==null&&n!==void 0?n:0;this.scrollToPosition($)}}}keyupHandler(e){switch(e.key){case"ArrowLeft":this.scrollToPrevious();break;case"ArrowRight":this.scrollToNext();break}}scrollToPrevious(){this.validateStops();const e=this.scrollContainer.scrollLeft,s=this.scrollStops.findIndex((o,r)=>o>=e&&(this.isRtl||r===this.scrollStops.length-1||this.scrollStops[r+1]>e)),i=Math.abs(this.scrollStops[s+1]);let n=this.scrollStops.findIndex(o=>Math.abs(o)+this.width>i);(n>=s||n===-1)&&(n=s>0?s-1:0),this.scrollToPosition(this.scrollStops[n],e)}scrollToNext(){this.validateStops();const e=this.scrollContainer.scrollLeft,s=this.scrollStops.findIndex(o=>Math.abs(o)>=Math.abs(e)),i=this.scrollStops.findIndex(o=>Math.abs(e)+this.width<=Math.abs(o));let n=s;i>s+2?n=i-2:s<this.scrollStops.length-2&&(n=s+1),this.scrollToPosition(this.scrollStops[n],e)}scrollToPosition(e,s=this.scrollContainer.scrollLeft){var i;if(this.scrolling)return;this.scrolling=!0;const n=(i=this.duration)!==null&&i!==void 0?i:`${Math.abs(e-s)/this.speed}s`;this.content.style.setProperty("transition-duration",n);const o=parseFloat(getComputedStyle(this.content).getPropertyValue("transition-duration")),r=c=>{c&&c.target!==c.currentTarget||(this.content.style.setProperty("transition-duration","0s"),this.content.style.removeProperty("transform"),this.scrollContainer.style.setProperty("scroll-behavior","auto"),this.scrollContainer.scrollLeft=e,this.setFlippers(),this.content.removeEventListener("transitionend",r),this.scrolling=!1)};if(o===0){r();return}this.content.addEventListener("transitionend",r);const a=this.scrollContainer.scrollWidth-this.scrollContainer.clientWidth;let l=this.scrollContainer.scrollLeft-Math.min(e,a);this.isRtl&&(l=this.scrollContainer.scrollLeft+Math.min(Math.abs(e),a)),this.content.style.setProperty("transition-property","transform"),this.content.style.setProperty("transition-timing-function",this.easing),this.content.style.setProperty("transform",`translateX(${l}px)`)}resized(){this.resizeTimeout&&(this.resizeTimeout=clearTimeout(this.resizeTimeout)),this.resizeTimeout=setTimeout(()=>{this.width=this.scrollContainer.offsetWidth,this.setFlippers()},this.frameTime)}scrolled(){this.scrollTimeout&&(this.scrollTimeout=clearTimeout(this.scrollTimeout)),this.scrollTimeout=setTimeout(()=>{this.setFlippers()},this.frameTime)}};h([p({converter:se})],Yi.prototype,"speed",void 0);h([p],Yi.prototype,"duration",void 0);h([p],Yi.prototype,"easing",void 0);h([p({attribute:"flippers-hidden-from-at",converter:ca})],Yi.prototype,"flippersHiddenFromAT",void 0);h([I],Yi.prototype,"scrolling",void 0);h([I],Yi.prototype,"scrollItems",void 0);h([p({attribute:"view"})],Yi.prototype,"view",void 0);const Sw=(t,e)=>{var s,i;return N`
    <template
        class="horizontal-scroll"
        @keyup="${(n,o)=>n.keyupHandler(o.event)}"
    >
        ${us(t,e)}
        <div class="scroll-area" part="scroll-area">
            <div
                class="scroll-view"
                part="scroll-view"
                @scroll="${n=>n.scrolled()}"
                ${Be("scrollContainer")}
            >
                <div class="content-container" part="content-container" ${Be("content")}>
                    <slot
                        ${ut({property:"scrollItems",filter:Mi()})}
                    ></slot>
                </div>
            </div>
            ${xt(n=>n.view!=="mobile",N`
                    <div
                        class="scroll scroll-prev"
                        part="scroll-prev"
                        ${Be("previousFlipperContainer")}
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
                        ${Be("nextFlipperContainer")}
                    >
                        <div class="scroll-action" part="scroll-action-next">
                            <slot name="next-flipper">
                                ${e.nextFlipper instanceof Function?e.nextFlipper(t,e):(i=e.nextFlipper)!==null&&i!==void 0?i:""}
                            </slot>
                        </div>
                    </div>
                `)}
        </div>
        ${ds(t,e)}
    </template>
`};function ng(t,e,s){return t.nodeType!==Node.TEXT_NODE?!0:typeof t.nodeValue=="string"&&!!t.nodeValue.trim().length}class Cw extends $e{}class Iw extends Bi(Cw){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let Os=class extends Iw{readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.validate(),this.autofocus&&me.queueUpdate(()=>{this.focus()})}validate(){super.validate(this.control)}handleTextInput(){this.value=this.control.value}handleClearInput(){this.value="",this.control.focus(),this.handleChange()}handleChange(){this.$emit("change")}};h([p({attribute:"readonly",mode:"boolean"})],Os.prototype,"readOnly",void 0);h([p({mode:"boolean"})],Os.prototype,"autofocus",void 0);h([p],Os.prototype,"placeholder",void 0);h([p],Os.prototype,"list",void 0);h([p({converter:se})],Os.prototype,"maxlength",void 0);h([p({converter:se})],Os.prototype,"minlength",void 0);h([p],Os.prototype,"pattern",void 0);h([p({converter:se})],Os.prototype,"size",void 0);h([p({mode:"boolean"})],Os.prototype,"spellcheck",void 0);h([I],Os.prototype,"defaultSlottedNodes",void 0);class og{}ft(og,rt);ft(Os,ws,og);class Tw extends ua{}class Fw extends Bi(Tw){constructor(){super(...arguments),this.proxy=document.createElement("select")}}let Wi=class extends Fw{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=Br("listbox-"),this.maxHeight=0}openChanged(e,s){if(this.collapsible){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,me.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||typeof this.size=="number")}get value(){return fe.track(this,"value"),this._value}set value(e){var s,i,n,o,r,a,l;const c=`${this._value}`;if(!((s=this._options)===null||s===void 0)&&s.length){const d=this._options.findIndex(y=>y.value===e),u=(n=(i=this._options[this.selectedIndex])===null||i===void 0?void 0:i.value)!==null&&n!==void 0?n:null,f=(r=(o=this._options[d])===null||o===void 0?void 0:o.value)!==null&&r!==void 0?r:null;(d===-1||u!==f)&&(e="",this.selectedIndex=d),e=(l=(a=this.firstSelectedOption)===null||a===void 0?void 0:a.value)!==null&&l!==void 0?l:e}c!==e&&(this._value=e,super.valueChanged(c,e),fe.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var s,i;this.$fastController.isConnected&&(this.value=(i=(s=this.firstSelectedOption)===null||s===void 0?void 0:s.value)!==null&&i!==void 0?i:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,s){super.selectedIndexChanged(e,s),this.updateValue()}positionChanged(e,s){this.positionAttribute=s,this.setPositioning()}setPositioning(){const e=this.getBoundingClientRect(),i=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>i?Co.above:Co.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Co.above?~~e.top:~~i}get displayValue(){var e,s;return fe.track(this,"displayValue"),(s=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.text)!==null&&s!==void 0?s:""}disabledChanged(e,s){super.disabledChanged&&super.disabledChanged(e,s),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),this.selectedIndex===-1&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){const s=e.target.closest("option,[role=option]");if(s&&s.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(e){var s;if(super.focusoutHandler(e),!this.open)return!0;const i=e.relatedTarget;if(this.isSameNode(i)){this.focus();return}!((s=this.options)===null||s===void 0)&&s.includes(i)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,s){super.handleChange(e,s),s==="value"&&this.updateValue()}slottedOptionsChanged(e,s){this.options.forEach(i=>{fe.getNotifier(i).unsubscribe(this,"value")}),super.slottedOptionsChanged(e,s),this.options.forEach(i=>{fe.getNotifier(i).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var s;return e.offsetX>=0&&e.offsetX<=((s=this.listbox)===null||s===void 0?void 0:s.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,s){super.multipleChanged(e,s),this.proxy&&(this.proxy.multiple=s)}selectedOptionsChanged(e,s){var i;super.selectedOptionsChanged(e,s),(i=this.options)===null||i===void 0||i.forEach((n,o)=>{var r;const a=(r=this.proxy)===null||r===void 0?void 0:r.options.item(o);a&&(a.selected=n.selected)})}setDefaultSelectedOption(){var e;const s=(e=this.options)!==null&&e!==void 0?e:Array.from(this.children).filter($s.slottedOptionFilter),i=s==null?void 0:s.findIndex(n=>n.hasAttribute("selected")||n.selected||n.value===this.value);if(i!==-1){this.selectedIndex=i;return}this.selectedIndex=0}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(e=>{const s=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);s&&this.proxy.options.add(s)}))}keydownHandler(e){super.keydownHandler(e);const s=e.key||e.key.charCodeAt(0);switch(s){case to:{e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break}case yi:case xi:{e.preventDefault();break}case zi:{e.preventDefault(),this.open=!this.open;break}case Qo:{this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break}case Hl:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(s===Bs||s===js)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,s){super.sizeChanged(e,s),this.proxy&&(this.proxy.size=s)}updateDisplayValue(){this.collapsible&&fe.notify(this,"displayValue")}};h([p({attribute:"open",mode:"boolean"})],Wi.prototype,"open",void 0);h([jy],Wi.prototype,"collapsible",null);h([I],Wi.prototype,"control",void 0);h([p({attribute:"position"})],Wi.prototype,"positionAttribute",void 0);h([I],Wi.prototype,"position",void 0);h([I],Wi.prototype,"maxHeight",void 0);class Au{}h([I],Au.prototype,"ariaControls",void 0);ft(Au,kn);ft(Wi,ws,Au);const Dw=(t,e)=>N`
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
        ${xt(s=>s.collapsible,N`
                <div
                    class="control"
                    part="control"
                    ?disabled="${s=>s.disabled}"
                    ${Be("control")}
                >
                    ${us(t,e)}
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
                    ${ds(t,e)}
                </div>
            `)}
        <div
            class="listbox"
            id="${s=>s.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${s=>s.disabled}"
            ?hidden="${s=>s.collapsible?!s.open:!1}"
            ${Be("listbox")}
        >
            <slot
                ${ut({filter:$s.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,Rw=(t,e)=>N`
    <template
        class="${s=>s.shape==="circle"?"circle":"rect"}"
        pattern="${s=>s.pattern}"
        ?shimmer="${s=>s.shimmer}"
    >
        ${xt(s=>s.shimmer===!0,N`
                <span class="shimmer"></span>
            `)}
        <object type="image/svg+xml" data="${s=>s.pattern}" role="presentation">
            <img class="pattern" src="${s=>s.pattern}" />
        </object>
        <slot></slot>
    </template>
`;class ha extends $e{constructor(){super(...arguments),this.shape="rect"}}h([p],ha.prototype,"fill",void 0);h([p],ha.prototype,"shape",void 0);h([p],ha.prototype,"pattern",void 0);h([p({mode:"boolean"})],ha.prototype,"shimmer",void 0);const Ew=(t,e)=>N`
    <template
        aria-disabled="${s=>s.disabled}"
        class="${s=>s.sliderOrientation||St.horizontal}
            ${s=>s.disabled?"disabled":""}"
    >
        <div ${Be("root")} part="root" class="root" style="${s=>s.positionStyle}">
            <div class="container">
                ${xt(s=>!s.hideMark,N`
                        <div class="mark"></div>
                    `)}
                <div class="label">
                    <slot></slot>
                </div>
            </div>
        </div>
    </template>
`;function jd(t,e,s,i){let n=Nl(0,1,(t-e)/(s-e));return i===ot.rtl&&(n=1-n),n}const Aa={min:0,max:0,direction:ot.ltr,orientation:St.horizontal,disabled:!1};class qi extends $e{constructor(){super(...arguments),this.hideMark=!1,this.sliderDirection=ot.ltr,this.getSliderConfiguration=()=>{if(!this.isSliderConfig(this.parentNode))this.sliderDirection=Aa.direction||ot.ltr,this.sliderOrientation=Aa.orientation,this.sliderMaxPosition=Aa.max,this.sliderMinPosition=Aa.min;else{const e=this.parentNode,{min:s,max:i,direction:n,orientation:o,disabled:r}=e;r!==void 0&&(this.disabled=r),this.sliderDirection=n||ot.ltr,this.sliderOrientation=o||St.horizontal,this.sliderMaxPosition=i,this.sliderMinPosition=s}},this.positionAsStyle=()=>{const e=this.sliderDirection?this.sliderDirection:ot.ltr,s=jd(Number(this.position),Number(this.sliderMinPosition),Number(this.sliderMaxPosition));let i=Math.round((1-s)*100),n=Math.round(s*100);return Number.isNaN(n)&&Number.isNaN(i)&&(i=50,n=50),this.sliderOrientation===St.horizontal?e===ot.rtl?`right: ${n}%; left: ${i}%;`:`left: ${n}%; right: ${i}%;`:`top: ${n}%; bottom: ${i}%;`}}positionChanged(){this.positionStyle=this.positionAsStyle()}sliderOrientationChanged(){}connectedCallback(){super.connectedCallback(),this.getSliderConfiguration(),this.positionStyle=this.positionAsStyle(),this.notifier=fe.getNotifier(this.parentNode),this.notifier.subscribe(this,"orientation"),this.notifier.subscribe(this,"direction"),this.notifier.subscribe(this,"max"),this.notifier.subscribe(this,"min")}disconnectedCallback(){super.disconnectedCallback(),this.notifier.unsubscribe(this,"orientation"),this.notifier.unsubscribe(this,"direction"),this.notifier.unsubscribe(this,"max"),this.notifier.unsubscribe(this,"min")}handleChange(e,s){switch(s){case"direction":this.sliderDirection=e.direction;break;case"orientation":this.sliderOrientation=e.orientation;break;case"max":this.sliderMaxPosition=e.max;break;case"min":this.sliderMinPosition=e.min;break}this.positionStyle=this.positionAsStyle()}isSliderConfig(e){return e.max!==void 0&&e.min!==void 0}}h([I],qi.prototype,"positionStyle",void 0);h([p],qi.prototype,"position",void 0);h([p({attribute:"hide-mark",mode:"boolean"})],qi.prototype,"hideMark",void 0);h([p({attribute:"disabled",mode:"boolean"})],qi.prototype,"disabled",void 0);h([I],qi.prototype,"sliderOrientation",void 0);h([I],qi.prototype,"sliderMinPosition",void 0);h([I],qi.prototype,"sliderMaxPosition",void 0);h([I],qi.prototype,"sliderDirection",void 0);const Ow=(t,e)=>N`
    <template
        role="slider"
        class="${s=>s.readOnly?"readonly":""}
        ${s=>s.orientation||St.horizontal}"
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
            <div ${Be("track")} part="track-container" class="track">
                <slot name="track"></slot>
                <div part="track-start" class="track-start" style="${s=>s.position}">
                    <slot name="track-start"></slot>
                </div>
            </div>
            <slot></slot>
            <div
                ${Be("thumb")}
                part="thumb-container"
                class="thumb-container"
                style="${s=>s.position}"
            >
                <slot name="thumb">${e.thumb||""}</slot>
            </div>
        </div>
    </template>
`;class Aw extends $e{}class Pw extends Bi(Aw){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const Lw={singleValue:"single-value"};class Jt extends Pw{constructor(){super(...arguments),this.direction=ot.ltr,this.isDragging=!1,this.trackWidth=0,this.trackMinWidth=0,this.trackHeight=0,this.trackLeft=0,this.trackMinHeight=0,this.valueTextFormatter=()=>null,this.min=0,this.max=10,this.step=1,this.orientation=St.horizontal,this.mode=Lw.singleValue,this.keypressHandler=e=>{if(!this.readOnly){if(e.key===yi)e.preventDefault(),this.value=`${this.min}`;else if(e.key===xi)e.preventDefault(),this.value=`${this.max}`;else if(!e.shiftKey)switch(e.key){case vn:case js:e.preventDefault(),this.increment();break;case gn:case Bs:e.preventDefault(),this.decrement();break}}},this.setupTrackConstraints=()=>{const e=this.track.getBoundingClientRect();this.trackWidth=this.track.clientWidth,this.trackMinWidth=this.track.clientLeft,this.trackHeight=e.bottom,this.trackMinHeight=e.top,this.trackLeft=this.getBoundingClientRect().left,this.trackWidth===0&&(this.trackWidth=1)},this.setupListeners=(e=!1)=>{const s=`${e?"remove":"add"}EventListener`;this[s]("keydown",this.keypressHandler),this[s]("mousedown",this.handleMouseDown),this.thumb[s]("mousedown",this.handleThumbMouseDown,{passive:!0}),this.thumb[s]("touchstart",this.handleThumbMouseDown,{passive:!0}),e&&(this.handleMouseDown(null),this.handleThumbMouseDown(null))},this.initialValue="",this.handleThumbMouseDown=e=>{if(e){if(this.readOnly||this.disabled||e.defaultPrevented)return;e.target.focus()}const s=`${e!==null?"add":"remove"}EventListener`;window[s]("mouseup",this.handleWindowMouseUp),window[s]("mousemove",this.handleMouseMove,{passive:!0}),window[s]("touchmove",this.handleMouseMove,{passive:!0}),window[s]("touchend",this.handleWindowMouseUp),this.isDragging=e!==null},this.handleMouseMove=e=>{if(this.readOnly||this.disabled||e.defaultPrevented)return;const s=window.TouchEvent&&e instanceof TouchEvent?e.touches[0]:e,i=this.orientation===St.horizontal?s.pageX-document.documentElement.scrollLeft-this.trackLeft:s.pageY-document.documentElement.scrollTop;this.value=`${this.calculateNewValue(i)}`},this.calculateNewValue=e=>{const s=jd(e,this.orientation===St.horizontal?this.trackMinWidth:this.trackMinHeight,this.orientation===St.horizontal?this.trackWidth:this.trackHeight,this.direction),i=(this.max-this.min)*s+this.min;return this.convertToConstrainedValue(i)},this.handleWindowMouseUp=e=>{this.stopDragging()},this.stopDragging=()=>{this.isDragging=!1,this.handleMouseDown(null),this.handleThumbMouseDown(null)},this.handleMouseDown=e=>{const s=`${e!==null?"add":"remove"}EventListener`;if((e===null||!this.disabled&&!this.readOnly)&&(window[s]("mouseup",this.handleWindowMouseUp),window.document[s]("mouseleave",this.handleWindowMouseUp),window[s]("mousemove",this.handleMouseMove),e)){e.preventDefault(),this.setupTrackConstraints(),e.target.focus();const i=this.orientation===St.horizontal?e.pageX-document.documentElement.scrollLeft-this.trackLeft:e.pageY-document.documentElement.scrollTop;this.value=`${this.calculateNewValue(i)}`}},this.convertToConstrainedValue=e=>{isNaN(e)&&(e=this.min);let s=e-this.min;const i=Math.round(s/this.step),n=s-i*(this.stepMultiplier*this.step)/this.stepMultiplier;return s=n>=Number(this.step)/2?s-n+Number(this.step):s-n,s+this.min}}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}get valueAsNumber(){return parseFloat(super.value)}set valueAsNumber(e){this.value=e.toString()}valueChanged(e,s){super.valueChanged(e,s),this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction),this.$emit("change")}minChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.min=`${this.min}`),this.validate()}maxChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.max=`${this.max}`),this.validate()}stepChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.step=`${this.step}`),this.updateStepMultiplier(),this.validate()}orientationChanged(){this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","range"),this.direction=Xn(this),this.updateStepMultiplier(),this.setupTrackConstraints(),this.setupListeners(),this.setupDefaultValue(),this.setThumbPositionForOrientation(this.direction)}disconnectedCallback(){this.setupListeners(!0)}increment(){const e=this.direction!==ot.rtl&&this.orientation!==St.vertical?Number(this.value)+Number(this.step):Number(this.value)-Number(this.step),s=this.convertToConstrainedValue(e),i=s<Number(this.max)?`${s}`:`${this.max}`;this.value=i}decrement(){const e=this.direction!==ot.rtl&&this.orientation!==St.vertical?Number(this.value)-Number(this.step):Number(this.value)+Number(this.step),s=this.convertToConstrainedValue(e),i=s>Number(this.min)?`${s}`:`${this.min}`;this.value=i}setThumbPositionForOrientation(e){const i=(1-jd(Number(this.value),Number(this.min),Number(this.max),e))*100;this.orientation===St.horizontal?this.position=this.isDragging?`right: ${i}%; transition: none;`:`right: ${i}%; transition: all 0.2s ease;`:this.position=this.isDragging?`bottom: ${i}%; transition: none;`:`bottom: ${i}%; transition: all 0.2s ease;`}updateStepMultiplier(){const e=this.step+"",s=this.step%1?e.length-e.indexOf(".")-1:0;this.stepMultiplier=Math.pow(10,s)}get midpoint(){return`${this.convertToConstrainedValue((this.max+this.min)/2)}`}setupDefaultValue(){if(typeof this.value=="string")if(this.value.length===0)this.initialValue=this.midpoint;else{const e=parseFloat(this.value);!Number.isNaN(e)&&(e<this.min||e>this.max)&&(this.value=this.midpoint)}}}h([p({attribute:"readonly",mode:"boolean"})],Jt.prototype,"readOnly",void 0);h([I],Jt.prototype,"direction",void 0);h([I],Jt.prototype,"isDragging",void 0);h([I],Jt.prototype,"position",void 0);h([I],Jt.prototype,"trackWidth",void 0);h([I],Jt.prototype,"trackMinWidth",void 0);h([I],Jt.prototype,"trackHeight",void 0);h([I],Jt.prototype,"trackLeft",void 0);h([I],Jt.prototype,"trackMinHeight",void 0);h([I],Jt.prototype,"valueTextFormatter",void 0);h([p({converter:se})],Jt.prototype,"min",void 0);h([p({converter:se})],Jt.prototype,"max",void 0);h([p({converter:se})],Jt.prototype,"step",void 0);h([p],Jt.prototype,"orientation",void 0);h([p],Jt.prototype,"mode",void 0);const Mw=(t,e)=>N`
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
            <slot ${ut("defaultSlottedNodes")}></slot>
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
`;class Vw extends $e{}class Hw extends Eu(Vw){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Pu extends Hw{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{if(!this.readOnly)switch(e.key){case zi:case to:this.checked=!this.checked;break}},this.clickHandler=e=>{!this.disabled&&!this.readOnly&&(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly),this.readOnly?this.classList.add("readonly"):this.classList.remove("readonly")}checkedChanged(e,s){super.checkedChanged(e,s),this.checked?this.classList.add("checked"):this.classList.remove("checked")}}h([p({attribute:"readonly",mode:"boolean"})],Pu.prototype,"readOnly",void 0);h([I],Pu.prototype,"defaultSlottedNodes",void 0);const Nw=(t,e)=>N`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`;class zw extends $e{}const Bw=(t,e)=>N`
    <template slot="tab" role="tab" aria-disabled="${s=>s.disabled}">
        <slot></slot>
    </template>
`;class rg extends $e{}h([p({mode:"boolean"})],rg.prototype,"disabled",void 0);const jw=(t,e)=>N`
    <template class="${s=>s.orientation}">
        ${us(t,e)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${ut("tabs")}></slot>

            ${xt(s=>s.showActiveIndicator,N`
                    <div
                        ${Be("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${ds(t,e)}
        <div class="tabpanel" part="tabpanel">
            <slot name="tabpanel" ${ut("tabpanels")}></slot>
        </div>
    </template>
`,Hf={vertical:"vertical",horizontal:"horizontal"};class Gi extends $e{constructor(){super(...arguments),this.orientation=Hf.horizontal,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=e=>e.getAttribute("aria-disabled")==="true",this.isHiddenElement=e=>e.hasAttribute("hidden"),this.isFocusableElement=e=>!this.isDisabledElement(e)&&!this.isHiddenElement(e),this.setTabs=()=>{const e="gridColumn",s="gridRow",i=this.isHorizontal()?e:s;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach((n,o)=>{if(n.slot==="tab"){const r=this.activeTabIndex===o&&this.isFocusableElement(n);this.activeindicator&&this.isFocusableElement(n)&&(this.showActiveIndicator=!0);const a=this.tabIds[o],l=this.tabpanelIds[o];n.setAttribute("id",a),n.setAttribute("aria-selected",r?"true":"false"),n.setAttribute("aria-controls",l),n.addEventListener("click",this.handleTabClick),n.addEventListener("keydown",this.handleTabKeyDown),n.setAttribute("tabindex",r?"0":"-1"),r&&(this.activetab=n,this.activeid=a)}n.style[e]="",n.style[s]="",n.style[i]=`${o+1}`,this.isHorizontal()?n.classList.remove("vertical"):n.classList.add("vertical")})},this.setTabPanels=()=>{this.tabpanels.forEach((e,s)=>{const i=this.tabIds[s],n=this.tabpanelIds[s];e.setAttribute("id",n),e.setAttribute("aria-labelledby",i),this.activeTabIndex!==s?e.setAttribute("hidden",""):e.removeAttribute("hidden")})},this.handleTabClick=e=>{const s=e.currentTarget;s.nodeType===1&&this.isFocusableElement(s)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(s),this.setComponent())},this.handleTabKeyDown=e=>{if(this.isHorizontal())switch(e.key){case gn:e.preventDefault(),this.adjustBackward(e);break;case vn:e.preventDefault(),this.adjustForward(e);break}else switch(e.key){case js:e.preventDefault(),this.adjustBackward(e);break;case Bs:e.preventDefault(),this.adjustForward(e);break}switch(e.key){case yi:e.preventDefault(),this.adjust(-this.activeTabIndex);break;case xi:e.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1);break}},this.adjustForward=e=>{const s=this.tabs;let i=0;for(i=this.activetab?s.indexOf(this.activetab)+1:1,i===s.length&&(i=0);i<s.length&&s.length>1;)if(this.isFocusableElement(s[i])){this.moveToTabByIndex(s,i);break}else{if(this.activetab&&i===s.indexOf(this.activetab))break;i+1>=s.length?i=0:i+=1}},this.adjustBackward=e=>{const s=this.tabs;let i=0;for(i=this.activetab?s.indexOf(this.activetab)-1:0,i=i<0?s.length-1:i;i>=0&&s.length>1;)if(this.isFocusableElement(s[i])){this.moveToTabByIndex(s,i);break}else i-1<0?i=s.length-1:i-=1},this.moveToTabByIndex=(e,s)=>{const i=e[s];this.activetab=i,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=s,i.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(e,s){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex(i=>i.id===e),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return this.activeid!==void 0?this.tabIds.indexOf(this.activeid)===-1?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map(e=>{var s;return(s=e.getAttribute("id"))!==null&&s!==void 0?s:`tab-${Br()}`})}getTabPanelIds(){return this.tabpanels.map(e=>{var s;return(s=e.getAttribute("id"))!==null&&s!==void 0?s:`panel-${Br()}`})}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===Hf.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const e=this.isHorizontal()?"gridColumn":"gridRow",s=this.isHorizontal()?"translateX":"translateY",i=this.isHorizontal()?"offsetLeft":"offsetTop",n=this.activeIndicatorRef[i];this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`;const o=this.activeIndicatorRef[i];this.activeIndicatorRef.style[e]=`${this.prevActiveTabIndex+1}`;const r=o-n;this.activeIndicatorRef.style.transform=`${s}(${r}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",()=>{this.ticking=!1,this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${s}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")})}adjust(e){const s=this.tabs.filter(r=>this.isFocusableElement(r)),i=s.indexOf(this.activetab),n=Nl(0,s.length-1,i+e),o=this.tabs.indexOf(s[n]);o>-1&&this.moveToTabByIndex(this.tabs,o)}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}h([p],Gi.prototype,"orientation",void 0);h([p],Gi.prototype,"activeid",void 0);h([I],Gi.prototype,"tabs",void 0);h([I],Gi.prototype,"tabpanels",void 0);h([p({mode:"boolean"})],Gi.prototype,"activeindicator",void 0);h([I],Gi.prototype,"activeIndicatorRef",void 0);h([I],Gi.prototype,"showActiveIndicator",void 0);ft(Gi,ws);class Uw extends $e{}class Yw extends Bi(Uw){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}const ag={none:"none",both:"both",horizontal:"horizontal",vertical:"vertical"};let Kt=class extends Yw{constructor(){super(...arguments),this.resize=ag.none,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};h([p({mode:"boolean"})],Kt.prototype,"readOnly",void 0);h([p],Kt.prototype,"resize",void 0);h([p({mode:"boolean"})],Kt.prototype,"autofocus",void 0);h([p({attribute:"form"})],Kt.prototype,"formId",void 0);h([p],Kt.prototype,"list",void 0);h([p({converter:se})],Kt.prototype,"maxlength",void 0);h([p({converter:se})],Kt.prototype,"minlength",void 0);h([p],Kt.prototype,"name",void 0);h([p],Kt.prototype,"placeholder",void 0);h([p({converter:se,mode:"fromView"})],Kt.prototype,"cols",void 0);h([p({converter:se,mode:"fromView"})],Kt.prototype,"rows",void 0);h([p({mode:"boolean"})],Kt.prototype,"spellcheck",void 0);h([I],Kt.prototype,"defaultSlottedNodes",void 0);ft(Kt,Gl);const Ww=(t,e)=>N`
    <template
        class="
            ${s=>s.readOnly?"readonly":""}
            ${s=>s.resize!==ag.none?`resize-${s.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${s=>s.defaultSlottedNodes&&s.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${ut("defaultSlottedNodes")}></slot>
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
            ${Be("control")}
        ></textarea>
    </template>
`,qw=(t,e)=>N`
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
                ${ut({property:"defaultSlottedNodes",filter:ng})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${us(t,e)}
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
                ${Be("control")}
            />
            ${ds(t,e)}
        </div>
    </template>
`,Gw=(t,e)=>N`
    <template
        aria-label="${s=>s.ariaLabel}"
        aria-labelledby="${s=>s.ariaLabelledby}"
        aria-orientation="${s=>s.orientation}"
        orientation="${s=>s.orientation}"
        role="toolbar"
        @click="${(s,i)=>s.clickHandler(i.event)}"
        @focusin="${(s,i)=>s.focusinHandler(i.event)}"
        @keydown="${(s,i)=>s.keydownHandler(i.event)}"
        ${Vl({property:"childItems",attributeFilter:["disabled","hidden"],filter:Mi(),subtree:!0})}
    >
        <slot name="label"></slot>
        <div class="positioning-region" part="positioning-region">
            ${us(t,e)}
            <slot
                ${ut({filter:Mi(),property:"slottedItems"})}
            ></slot>
            ${ds(t,e)}
        </div>
    </template>
`,Nf=Object.freeze({[$o.ArrowUp]:{[St.vertical]:-1},[$o.ArrowDown]:{[St.vertical]:1},[$o.ArrowLeft]:{[St.horizontal]:{[ot.ltr]:-1,[ot.rtl]:1}},[$o.ArrowRight]:{[St.horizontal]:{[ot.ltr]:1,[ot.rtl]:-1}}});let Sn=class Ud extends $e{constructor(){super(...arguments),this._activeIndex=0,this.direction=ot.ltr,this.orientation=St.horizontal}get activeIndex(){return fe.track(this,"activeIndex"),this._activeIndex}set activeIndex(e){this.$fastController.isConnected&&(this._activeIndex=Nl(0,this.focusableElements.length-1,e),fe.notify(this,"activeIndex"))}slottedItemsChanged(){this.$fastController.isConnected&&this.reduceFocusableElements()}clickHandler(e){var s;const i=(s=this.focusableElements)===null||s===void 0?void 0:s.indexOf(e.target);return i>-1&&this.activeIndex!==i&&this.setFocusedElement(i),!0}childItemsChanged(e,s){this.$fastController.isConnected&&this.reduceFocusableElements()}connectedCallback(){super.connectedCallback(),this.direction=Xn(this)}focusinHandler(e){const s=e.relatedTarget;!s||this.contains(s)||this.setFocusedElement()}getDirectionalIncrementer(e){var s,i,n,o,r;return(r=(n=(i=(s=Nf[e])===null||s===void 0?void 0:s[this.orientation])===null||i===void 0?void 0:i[this.direction])!==null&&n!==void 0?n:(o=Nf[e])===null||o===void 0?void 0:o[this.orientation])!==null&&r!==void 0?r:0}keydownHandler(e){const s=e.key;if(!(s in $o)||e.defaultPrevented||e.shiftKey)return!0;const i=this.getDirectionalIncrementer(s);if(!i)return!e.target.closest("[role=radiogroup]");const n=this.activeIndex+i;return this.focusableElements[n]&&e.preventDefault(),this.setFocusedElement(n),!0}get allSlottedItems(){return[...this.start.assignedElements(),...this.slottedItems,...this.end.assignedElements()]}reduceFocusableElements(){var e;const s=(e=this.focusableElements)===null||e===void 0?void 0:e[this.activeIndex];this.focusableElements=this.allSlottedItems.reduce(Ud.reduceFocusableItems,[]);const i=this.focusableElements.indexOf(s);this.activeIndex=Math.max(0,i),this.setFocusableElements()}setFocusedElement(e=this.activeIndex){var s;this.activeIndex=e,this.setFocusableElements(),(s=this.focusableElements[this.activeIndex])===null||s===void 0||s.focus()}static reduceFocusableItems(e,s){var i,n,o,r;const a=s.getAttribute("role")==="radio",l=(n=(i=s.$fastController)===null||i===void 0?void 0:i.definition.shadowOptions)===null||n===void 0?void 0:n.delegatesFocus,c=Array.from((r=(o=s.shadowRoot)===null||o===void 0?void 0:o.querySelectorAll("*"))!==null&&r!==void 0?r:[]).some(d=>Mf(d));return!s.hasAttribute("disabled")&&!s.hasAttribute("hidden")&&(Mf(s)||a||l||c)?(e.push(s),e):s.childElementCount?e.concat(Array.from(s.children).reduce(Ud.reduceFocusableItems,[])):e}setFocusableElements(){this.$fastController.isConnected&&this.focusableElements.length>0&&this.focusableElements.forEach((e,s)=>{e.tabIndex=this.activeIndex===s?0:-1})}};h([I],Sn.prototype,"direction",void 0);h([p],Sn.prototype,"orientation",void 0);h([I],Sn.prototype,"slottedItems",void 0);h([I],Sn.prototype,"slottedLabel",void 0);h([I],Sn.prototype,"childItems",void 0);class Xl{}h([p({attribute:"aria-labelledby"})],Xl.prototype,"ariaLabelledby",void 0);h([p({attribute:"aria-label"})],Xl.prototype,"ariaLabel",void 0);ft(Xl,rt);ft(Sn,ws,Xl);const Zw=(t,e)=>N`
        ${xt(s=>s.tooltipVisible,N`
            <${t.tagFor(he)}
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
                ${Be("region")}
            >
                <div class="tooltip" part="tooltip" role="tooltip">
                    <slot></slot>
                </div>
            </${t.tagFor(he)}>
        `)}
    `,ms={top:"top",right:"right",bottom:"bottom",left:"left",start:"start",end:"end",topLeft:"top-left",topRight:"top-right",bottomLeft:"bottom-left",bottomRight:"bottom-right",topStart:"top-start",topEnd:"top-end",bottomStart:"bottom-start",bottomEnd:"bottom-end"};let Ft=class extends $e{constructor(){super(...arguments),this.anchor="",this.delay=300,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.horizontalInset="false",this.verticalInset="false",this.horizontalScaling="content",this.verticalScaling="content",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition=void 0,this.tooltipVisible=!1,this.currentDirection=ot.ltr,this.showDelayTimer=null,this.hideDelayTimer=null,this.isAnchorHoveredFocused=!1,this.isRegionHovered=!1,this.handlePositionChange=e=>{this.classList.toggle("top",this.region.verticalPosition==="start"),this.classList.toggle("bottom",this.region.verticalPosition==="end"),this.classList.toggle("inset-top",this.region.verticalPosition==="insetStart"),this.classList.toggle("inset-bottom",this.region.verticalPosition==="insetEnd"),this.classList.toggle("center-vertical",this.region.verticalPosition==="center"),this.classList.toggle("left",this.region.horizontalPosition==="start"),this.classList.toggle("right",this.region.horizontalPosition==="end"),this.classList.toggle("inset-left",this.region.horizontalPosition==="insetStart"),this.classList.toggle("inset-right",this.region.horizontalPosition==="insetEnd"),this.classList.toggle("center-horizontal",this.region.horizontalPosition==="center")},this.handleRegionMouseOver=e=>{this.isRegionHovered=!0},this.handleRegionMouseOut=e=>{this.isRegionHovered=!1,this.startHideDelayTimer()},this.handleAnchorMouseOver=e=>{if(this.tooltipVisible){this.isAnchorHoveredFocused=!0;return}this.startShowDelayTimer()},this.handleAnchorMouseOut=e=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.handleAnchorFocusIn=e=>{this.startShowDelayTimer()},this.handleAnchorFocusOut=e=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.startHideDelayTimer=()=>{this.clearHideDelayTimer(),this.tooltipVisible&&(this.hideDelayTimer=window.setTimeout(()=>{this.updateTooltipVisibility()},60))},this.clearHideDelayTimer=()=>{this.hideDelayTimer!==null&&(clearTimeout(this.hideDelayTimer),this.hideDelayTimer=null)},this.startShowDelayTimer=()=>{if(!this.isAnchorHoveredFocused){if(this.delay>1){this.showDelayTimer===null&&(this.showDelayTimer=window.setTimeout(()=>{this.startHover()},this.delay));return}this.startHover()}},this.startHover=()=>{this.isAnchorHoveredFocused=!0,this.updateTooltipVisibility()},this.clearShowDelayTimer=()=>{this.showDelayTimer!==null&&(clearTimeout(this.showDelayTimer),this.showDelayTimer=null)},this.getAnchor=()=>{const e=this.getRootNode();return e instanceof ShadowRoot?e.getElementById(this.anchor):document.getElementById(this.anchor)},this.handleDocumentKeydown=e=>{if(!e.defaultPrevented&&this.tooltipVisible)switch(e.key){case Qo:this.isAnchorHoveredFocused=!1,this.updateTooltipVisibility(),this.$emit("dismiss");break}},this.updateTooltipVisibility=()=>{if(this.visible===!1)this.hideTooltip();else if(this.visible===!0){this.showTooltip();return}else{if(this.isAnchorHoveredFocused||this.isRegionHovered){this.showTooltip();return}this.hideTooltip()}},this.showTooltip=()=>{this.tooltipVisible||(this.currentDirection=Xn(this),this.tooltipVisible=!0,document.addEventListener("keydown",this.handleDocumentKeydown),me.queueUpdate(this.setRegionProps))},this.hideTooltip=()=>{this.tooltipVisible&&(this.clearHideDelayTimer(),this.region!==null&&this.region!==void 0&&(this.region.removeEventListener("positionchange",this.handlePositionChange),this.region.viewportElement=null,this.region.anchorElement=null,this.region.removeEventListener("mouseover",this.handleRegionMouseOver),this.region.removeEventListener("mouseout",this.handleRegionMouseOut)),document.removeEventListener("keydown",this.handleDocumentKeydown),this.tooltipVisible=!1)},this.setRegionProps=()=>{this.tooltipVisible&&(this.region.viewportElement=this.viewportElement,this.region.anchorElement=this.anchorElement,this.region.addEventListener("positionchange",this.handlePositionChange),this.region.addEventListener("mouseover",this.handleRegionMouseOver,{passive:!0}),this.region.addEventListener("mouseout",this.handleRegionMouseOut,{passive:!0}))}}visibleChanged(){this.$fastController.isConnected&&(this.updateTooltipVisibility(),this.updateLayout())}anchorChanged(){this.$fastController.isConnected&&(this.anchorElement=this.getAnchor())}positionChanged(){this.$fastController.isConnected&&this.updateLayout()}anchorElementChanged(e){if(this.$fastController.isConnected){if(e!=null&&(e.removeEventListener("mouseover",this.handleAnchorMouseOver),e.removeEventListener("mouseout",this.handleAnchorMouseOut),e.removeEventListener("focusin",this.handleAnchorFocusIn),e.removeEventListener("focusout",this.handleAnchorFocusOut)),this.anchorElement!==null&&this.anchorElement!==void 0){this.anchorElement.addEventListener("mouseover",this.handleAnchorMouseOver,{passive:!0}),this.anchorElement.addEventListener("mouseout",this.handleAnchorMouseOut,{passive:!0}),this.anchorElement.addEventListener("focusin",this.handleAnchorFocusIn,{passive:!0}),this.anchorElement.addEventListener("focusout",this.handleAnchorFocusOut,{passive:!0});const s=this.anchorElement.id;this.anchorElement.parentElement!==null&&this.anchorElement.parentElement.querySelectorAll(":hover").forEach(i=>{i.id===s&&this.startShowDelayTimer()})}this.region!==null&&this.region!==void 0&&this.tooltipVisible&&(this.region.anchorElement=this.anchorElement),this.updateLayout()}}viewportElementChanged(){this.region!==null&&this.region!==void 0&&(this.region.viewportElement=this.viewportElement),this.updateLayout()}connectedCallback(){super.connectedCallback(),this.anchorElement=this.getAnchor(),this.updateTooltipVisibility()}disconnectedCallback(){this.hideTooltip(),this.clearShowDelayTimer(),this.clearHideDelayTimer(),super.disconnectedCallback()}updateLayout(){switch(this.verticalPositioningMode="locktodefault",this.horizontalPositioningMode="locktodefault",this.position){case ms.top:case ms.bottom:this.verticalDefaultPosition=this.position,this.horizontalDefaultPosition="center";break;case ms.right:case ms.left:case ms.start:case ms.end:this.verticalDefaultPosition="center",this.horizontalDefaultPosition=this.position;break;case ms.topLeft:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="left";break;case ms.topRight:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="right";break;case ms.bottomLeft:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="left";break;case ms.bottomRight:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="right";break;case ms.topStart:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="start";break;case ms.topEnd:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="end";break;case ms.bottomStart:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="start";break;case ms.bottomEnd:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="end";break;default:this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition="center";break}}};h([p({mode:"boolean"})],Ft.prototype,"visible",void 0);h([p],Ft.prototype,"anchor",void 0);h([p],Ft.prototype,"delay",void 0);h([p],Ft.prototype,"position",void 0);h([p({attribute:"auto-update-mode"})],Ft.prototype,"autoUpdateMode",void 0);h([p({attribute:"horizontal-viewport-lock"})],Ft.prototype,"horizontalViewportLock",void 0);h([p({attribute:"vertical-viewport-lock"})],Ft.prototype,"verticalViewportLock",void 0);h([I],Ft.prototype,"anchorElement",void 0);h([I],Ft.prototype,"viewportElement",void 0);h([I],Ft.prototype,"verticalPositioningMode",void 0);h([I],Ft.prototype,"horizontalPositioningMode",void 0);h([I],Ft.prototype,"horizontalInset",void 0);h([I],Ft.prototype,"verticalInset",void 0);h([I],Ft.prototype,"horizontalScaling",void 0);h([I],Ft.prototype,"verticalScaling",void 0);h([I],Ft.prototype,"verticalDefaultPosition",void 0);h([I],Ft.prototype,"horizontalDefaultPosition",void 0);h([I],Ft.prototype,"tooltipVisible",void 0);h([I],Ft.prototype,"currentDirection",void 0);const Xw=(t,e)=>N`
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
        ${Vl({property:"childItems",filter:Mi()})}
    >
        <div class="positioning-region" part="positioning-region">
            <div class="content-region" part="content-region">
                ${xt(s=>s.childItems&&s.childItemLength()>0,N`
                        <div
                            aria-hidden="true"
                            class="expand-collapse-button"
                            part="expand-collapse-button"
                            @click="${(s,i)=>s.handleExpandCollapseButtonClick(i.event)}"
                            ${Be("expandCollapseButton")}
                        >
                            <slot name="expand-collapse-glyph">
                                ${e.expandCollapseGlyph||""}
                            </slot>
                        </div>
                    `)}
                ${us(t,e)}
                <slot></slot>
                ${ds(t,e)}
            </div>
        </div>
        ${xt(s=>s.childItems&&s.childItemLength()>0&&(s.expanded||s.renderCollapsedChildren),N`
                <div role="group" class="items" part="items">
                    <slot name="item" ${ut("items")}></slot>
                </div>
            `)}
    </template>
`;function an(t){return Mo(t)&&t.getAttribute("role")==="treeitem"}class Rt extends $e{constructor(){super(...arguments),this.expanded=!1,this.focusable=!1,this.isNestedItem=()=>an(this.parentElement),this.handleExpandCollapseButtonClick=e=>{!this.disabled&&!e.defaultPrevented&&(this.expanded=!this.expanded)},this.handleFocus=e=>{this.setAttribute("tabindex","0")},this.handleBlur=e=>{this.setAttribute("tabindex","-1")}}expandedChanged(){this.$fastController.isConnected&&this.$emit("expanded-change",this)}selectedChanged(){this.$fastController.isConnected&&this.$emit("selected-change",this)}itemsChanged(e,s){this.$fastController.isConnected&&this.items.forEach(i=>{an(i)&&(i.nested=!0)})}static focusItem(e){e.focusable=!0,e.focus()}childItemLength(){const e=this.childItems.filter(s=>an(s));return e?e.length:0}}h([p({mode:"boolean"})],Rt.prototype,"expanded",void 0);h([p({mode:"boolean"})],Rt.prototype,"selected",void 0);h([p({mode:"boolean"})],Rt.prototype,"disabled",void 0);h([I],Rt.prototype,"focusable",void 0);h([I],Rt.prototype,"childItems",void 0);h([I],Rt.prototype,"items",void 0);h([I],Rt.prototype,"nested",void 0);h([I],Rt.prototype,"renderCollapsedChildren",void 0);ft(Rt,ws);const Qw=(t,e)=>N`
    <template
        role="tree"
        ${Be("treeView")}
        @keydown="${(s,i)=>s.handleKeyDown(i.event)}"
        @focusin="${(s,i)=>s.handleFocus(i.event)}"
        @focusout="${(s,i)=>s.handleBlur(i.event)}"
        @click="${(s,i)=>s.handleClick(i.event)}"
        @selected-change="${(s,i)=>s.handleSelectedChange(i.event)}"
    >
        <slot ${ut("slottedTreeItems")}></slot>
    </template>
`;class Ql extends $e{constructor(){super(...arguments),this.currentFocused=null,this.handleFocus=e=>{if(!(this.slottedTreeItems.length<1)){if(e.target===this){this.currentFocused===null&&(this.currentFocused=this.getValidFocusableItem()),this.currentFocused!==null&&Rt.focusItem(this.currentFocused);return}this.contains(e.target)&&(this.setAttribute("tabindex","-1"),this.currentFocused=e.target)}},this.handleBlur=e=>{e.target instanceof HTMLElement&&(e.relatedTarget===null||!this.contains(e.relatedTarget))&&this.setAttribute("tabindex","0")},this.handleKeyDown=e=>{if(e.defaultPrevented)return;if(this.slottedTreeItems.length<1)return!0;const s=this.getVisibleNodes();switch(e.key){case yi:s.length&&Rt.focusItem(s[0]);return;case xi:s.length&&Rt.focusItem(s[s.length-1]);return;case gn:if(e.target&&this.isFocusableElement(e.target)){const i=e.target;i instanceof Rt&&i.childItemLength()>0&&i.expanded?i.expanded=!1:i instanceof Rt&&i.parentElement instanceof Rt&&Rt.focusItem(i.parentElement)}return!1;case vn:if(e.target&&this.isFocusableElement(e.target)){const i=e.target;i instanceof Rt&&i.childItemLength()>0&&!i.expanded?i.expanded=!0:i instanceof Rt&&i.childItemLength()>0&&this.focusNextNode(1,e.target)}return;case Bs:e.target&&this.isFocusableElement(e.target)&&this.focusNextNode(1,e.target);return;case js:e.target&&this.isFocusableElement(e.target)&&this.focusNextNode(-1,e.target);return;case zi:this.handleClick(e);return}return!0},this.handleSelectedChange=e=>{if(e.defaultPrevented)return;if(!(e.target instanceof Element)||!an(e.target))return!0;const s=e.target;s.selected?(this.currentSelected&&this.currentSelected!==s&&(this.currentSelected.selected=!1),this.currentSelected=s):!s.selected&&this.currentSelected===s&&(this.currentSelected=null)},this.setItems=()=>{const e=this.treeView.querySelector("[aria-selected='true']");this.currentSelected=e,(this.currentFocused===null||!this.contains(this.currentFocused))&&(this.currentFocused=this.getValidFocusableItem()),this.nested=this.checkForNestedItems(),this.getVisibleNodes().forEach(i=>{an(i)&&(i.nested=this.nested)})},this.isFocusableElement=e=>an(e),this.isSelectedElement=e=>e.selected}slottedTreeItemsChanged(){this.$fastController.isConnected&&this.setItems()}connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),me.queueUpdate(()=>{this.setItems()})}handleClick(e){if(e.defaultPrevented)return;if(!(e.target instanceof Element)||!an(e.target))return!0;const s=e.target;s.disabled||(s.selected=!s.selected)}focusNextNode(e,s){const i=this.getVisibleNodes();if(!i)return;const n=i[i.indexOf(s)+e];Mo(n)&&Rt.focusItem(n)}getValidFocusableItem(){const e=this.getVisibleNodes();let s=e.findIndex(this.isSelectedElement);return s===-1&&(s=e.findIndex(this.isFocusableElement)),s!==-1?e[s]:null}checkForNestedItems(){return this.slottedTreeItems.some(e=>an(e)&&e.querySelector("[role='treeitem']"))}getVisibleNodes(){return G0(this,"[role='treeitem']")||[]}}h([p({attribute:"render-collapsed-nodes"})],Ql.prototype,"renderCollapsedNodes",void 0);h([I],Ql.prototype,"currentSelected",void 0);h([I],Ql.prototype,"slottedTreeItems",void 0);class Jw{constructor(e){this.listenerCache=new WeakMap,this.query=e}bind(e){const{query:s}=this,i=this.constructListener(e);i.bind(s)(),s.addListener(i),this.listenerCache.set(e,i)}unbind(e){const s=this.listenerCache.get(e);s&&(this.query.removeListener(s),this.listenerCache.delete(e))}}class fa extends Jw{constructor(e,s){super(e),this.styles=s}static with(e){return s=>new fa(e,s)}constructListener(e){let s=!1;const i=this.styles;return function(){const{matches:o}=this;o&&!s?(e.$fastController.addStyles(i),s=o):!o&&s&&(e.$fastController.removeStyles(i),s=o)}}unbind(e){super.unbind(e),e.$fastController.removeStyles(this.styles)}}const Le=fa.with(window.matchMedia("(forced-colors)"));fa.with(window.matchMedia("(prefers-color-scheme: dark)"));fa.with(window.matchMedia("(prefers-color-scheme: light)"));class Kw{constructor(e,s,i){this.propertyName=e,this.value=s,this.styles=i}bind(e){fe.getNotifier(e).subscribe(this,this.propertyName),this.handleChange(e,this.propertyName)}unbind(e){fe.getNotifier(e).unsubscribe(this,this.propertyName),e.$fastController.removeStyles(this.styles)}handleChange(e,s){e[s]===this.value?e.$fastController.addStyles(this.styles):e.$fastController.removeStyles(this.styles)}}const Ys="not-allowed",e$=":host([hidden]){display:none}";function Me(t){return`${e$}:host{display:${t}}`}const _e=X0()?"focus-visible":"focus";function Vn(t,e,s){return isNaN(t)||t<=e?e:t>=s?s:t}function hd(t,e,s){return isNaN(t)||t<=e?0:t>=s?1:t/(s-e)}function En(t,e,s){return isNaN(t)?e:e+t*(s-e)}function t$(t){const e=Math.round(Vn(t,0,255)).toString(16);return e.length===1?"0"+e:e}function Pa(t,e,s){return isNaN(t)||t<=0?e:t>=1?s:e+t*(s-e)}function ls(t,e){const s=Math.pow(10,e);return Math.round(t*s)/s}class Yr{constructor(e,s,i){this.h=e,this.s=s,this.l=i}static fromObject(e){return e&&!isNaN(e.h)&&!isNaN(e.s)&&!isNaN(e.l)?new Yr(e.h,e.s,e.l):null}equalValue(e){return this.h===e.h&&this.s===e.s&&this.l===e.l}roundToPrecision(e){return new Yr(ls(this.h,e),ls(this.s,e),ls(this.l,e))}toObject(){return{h:this.h,s:this.s,l:this.l}}}class Ht{constructor(e,s,i){this.l=e,this.a=s,this.b=i}static fromObject(e){return e&&!isNaN(e.l)&&!isNaN(e.a)&&!isNaN(e.b)?new Ht(e.l,e.a,e.b):null}equalValue(e){return this.l===e.l&&this.a===e.a&&this.b===e.b}roundToPrecision(e){return new Ht(ls(this.l,e),ls(this.a,e),ls(this.b,e))}toObject(){return{l:this.l,a:this.a,b:this.b}}}Ht.epsilon=216/24389;Ht.kappa=24389/27;class Tt{constructor(e,s,i,n){this.r=e,this.g=s,this.b=i,this.a=typeof n=="number"&&!isNaN(n)?n:1}static fromObject(e){return e&&!isNaN(e.r)&&!isNaN(e.g)&&!isNaN(e.b)?new Tt(e.r,e.g,e.b,e.a):null}equalValue(e){return this.r===e.r&&this.g===e.g&&this.b===e.b&&this.a===e.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(En(this.r,0,255))},${Math.round(En(this.g,0,255))},${Math.round(En(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(En(this.r,0,255))},${Math.round(En(this.g,0,255))},${Math.round(En(this.b,0,255))},${Vn(this.a,0,1)})`}roundToPrecision(e){return new Tt(ls(this.r,e),ls(this.g,e),ls(this.b,e),ls(this.a,e))}clamp(){return new Tt(Vn(this.r,0,1),Vn(this.g,0,1),Vn(this.b,0,1),Vn(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(e){return t$(En(e,0,255))}}class Is{constructor(e,s,i){this.x=e,this.y=s,this.z=i}static fromObject(e){return e&&!isNaN(e.x)&&!isNaN(e.y)&&!isNaN(e.z)?new Is(e.x,e.y,e.z):null}equalValue(e){return this.x===e.x&&this.y===e.y&&this.z===e.z}roundToPrecision(e){return new Is(ls(this.x,e),ls(this.y,e),ls(this.z,e))}toObject(){return{x:this.x,y:this.y,z:this.z}}}Is.whitePoint=new Is(.95047,1,1.08883);function s$(t){return t.r*.2126+t.g*.7152+t.b*.0722}function lg(t){function e(s){return s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4)}return s$(new Tt(e(t.r),e(t.g),e(t.b),1))}function fd(t,e,s){return s-e===0?0:(t-e)/(s-e)}function pd(t,e,s){const i=fd(t.r,e.r,s.r),n=fd(t.g,e.g,s.g),o=fd(t.b,e.b,s.b);return(i+n+o)/3}function i$(t,e,s=null){let i=0,n=s;return n!==null?i=pd(t,e,n):(n=new Tt(0,0,0,1),i=pd(t,e,n),i<=0&&(n=new Tt(1,1,1,1),i=pd(t,e,n))),i=Math.round(i*1e3)/1e3,new Tt(n.r,n.g,n.b,i)}function zf(t){const e=Math.max(t.r,t.g,t.b),s=Math.min(t.r,t.g,t.b),i=e-s;let n=0;i!==0&&(e===t.r?n=60*((t.g-t.b)/i%6):e===t.g?n=60*((t.b-t.r)/i+2):n=60*((t.r-t.g)/i+4)),n<0&&(n+=360);const o=(e+s)/2;let r=0;return i!==0&&(r=i/(1-Math.abs(2*o-1))),new Yr(n,r,o)}function n$(t,e=1){const s=(1-Math.abs(2*t.l-1))*t.s,i=s*(1-Math.abs(t.h/60%2-1)),n=t.l-s/2;let o=0,r=0,a=0;return t.h<60?(o=s,r=i,a=0):t.h<120?(o=i,r=s,a=0):t.h<180?(o=0,r=s,a=i):t.h<240?(o=0,r=i,a=s):t.h<300?(o=i,r=0,a=s):t.h<360&&(o=s,r=0,a=i),new Tt(o+n,r+n,a+n,e)}function o$(t){const e=(t.l+16)/116,s=e+t.a/500,i=e-t.b/200,n=Math.pow(s,3),o=Math.pow(e,3),r=Math.pow(i,3);let a=0;n>Ht.epsilon?a=n:a=(116*s-16)/Ht.kappa;let l=0;t.l>Ht.epsilon*Ht.kappa?l=o:l=t.l/Ht.kappa;let c=0;return r>Ht.epsilon?c=r:c=(116*i-16)/Ht.kappa,a=Is.whitePoint.x*a,l=Is.whitePoint.y*l,c=Is.whitePoint.z*c,new Is(a,l,c)}function r$(t){function e(l){return l>Ht.epsilon?Math.pow(l,1/3):(Ht.kappa*l+16)/116}const s=e(t.x/Is.whitePoint.x),i=e(t.y/Is.whitePoint.y),n=e(t.z/Is.whitePoint.z),o=116*i-16,r=500*(s-i),a=200*(i-n);return new Ht(o,r,a)}function a$(t){function e(l){return l<=.04045?l/12.92:Math.pow((l+.055)/1.055,2.4)}const s=e(t.r),i=e(t.g),n=e(t.b),o=s*.4124564+i*.3575761+n*.1804375,r=s*.2126729+i*.7151522+n*.072175,a=s*.0193339+i*.119192+n*.9503041;return new Is(o,r,a)}function l$(t,e=1){function s(r){return r<=.0031308?r*12.92:1.055*Math.pow(r,1/2.4)-.055}const i=s(t.x*3.2404542-t.y*1.5371385-t.z*.4985314),n=s(t.x*-.969266+t.y*1.8760108+t.z*.041556),o=s(t.x*.0556434-t.y*.2040259+t.z*1.0572252);return new Tt(i,n,o,e)}function c$(t){return r$(a$(t))}function md(t,e=1){return l$(o$(t),e)}var Bf;(function(t){t[t.Burn=0]="Burn",t[t.Color=1]="Color",t[t.Darken=2]="Darken",t[t.Dodge=3]="Dodge",t[t.Lighten=4]="Lighten",t[t.Multiply=5]="Multiply",t[t.Overlay=6]="Overlay",t[t.Screen=7]="Screen"})(Bf||(Bf={}));function d$(t,e){if(e.a>=1)return e;if(e.a<=0)return new Tt(t.r,t.g,t.b,1);const s=e.a*e.r+(1-e.a)*t.r,i=e.a*e.g+(1-e.a)*t.g,n=e.a*e.b+(1-e.a)*t.b;return new Tt(s,i,n,1)}function La(t,e,s){return isNaN(t)||t<=0?e:t>=1?s:new Tt(Pa(t,e.r,s.r),Pa(t,e.g,s.g),Pa(t,e.b,s.b),Pa(t,e.a,s.a))}var jf;(function(t){t[t.RGB=0]="RGB",t[t.HSL=1]="HSL",t[t.HSV=2]="HSV",t[t.XYZ=3]="XYZ",t[t.LAB=4]="LAB",t[t.LCH=5]="LCH"})(jf||(jf={}));const u$=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function Yn(t){const e=u$.exec(t);if(e===null)return null;let s=e[1];if(s.length===3){const n=s.charAt(0),o=s.charAt(1),r=s.charAt(2);s=n.concat(n,o,o,r,r)}const i=parseInt(s,16);return isNaN(i)?null:new Tt(hd((i&16711680)>>>16,0,255),hd((i&65280)>>>8,0,255),hd(i&255,0,255),1)}function ml(t,e){const s=t.relativeLuminance>e.relativeLuminance?t:e,i=t.relativeLuminance>e.relativeLuminance?e:t;return(s.relativeLuminance+.05)/(i.relativeLuminance+.05)}const bs=Object.freeze({create(t,e,s){return new gl(t,e,s)},from(t){return new gl(t.r,t.g,t.b)}});function h$(t){const e={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(const s in e)if(typeof e[s]!=typeof t[s])return!1;return!0}class gl extends Tt{constructor(e,s,i){super(e,s,i,1),this.toColorString=this.toStringHexRGB,this.contrast=ml.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=lg(this)}static fromObject(e){return new gl(e.r,e.g,e.b)}}function Yd(t,e,s=0,i=t.length-1){if(i===s)return t[s];const n=Math.floor((i-s)/2)+s;return e(t[n])?Yd(t,e,s,n):Yd(t,e,n+1,i)}const f$=(-.1+Math.sqrt(.21))/2;function pa(t){return t.relativeLuminance<=f$}function io(t){return pa(t)?-1:1}const Uf={stepContrast:1.03,stepContrastRamp:.03,preserveSource:!1};function p$(t,e,s){return typeof t=="number"?Wr.from(bs.create(t,e,s)):Wr.from(t)}function m$(t,e){return h$(t)?fi.from(t,e):fi.from(bs.create(t.r,t.g,t.b),e)}const Wr=Object.freeze({create:p$,from:m$});class fi{constructor(e,s){this.closestIndexCache=new Map,this.source=e,this.swatches=s,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(e,s,i,n){i===void 0&&(i=this.closestIndexOf(e));let o=this.swatches;const r=this.lastIndex;let a=i;n===void 0&&(n=io(e));const l=c=>ml(e,c)>=s;return n===-1&&(o=this.reversedSwatches,a=r-a),Yd(o,l,a,r)}get(e){return this.swatches[e]||this.swatches[Vn(e,0,this.lastIndex)]}closestIndexOf(e){if(this.closestIndexCache.has(e.relativeLuminance))return this.closestIndexCache.get(e.relativeLuminance);let s=this.swatches.indexOf(e);if(s!==-1)return this.closestIndexCache.set(e.relativeLuminance,s),s;const i=this.swatches.reduce((n,o)=>Math.abs(o.relativeLuminance-e.relativeLuminance)<Math.abs(n.relativeLuminance-e.relativeLuminance)?o:n);return s=this.swatches.indexOf(i),this.closestIndexCache.set(e.relativeLuminance,s),s}static saturationBump(e,s){const n=zf(e).s,o=zf(s);if(o.s<n){const r=new Yr(o.h,n,o.l);return n$(r)}return s}static ramp(e){const s=e/100;return s>.5?(s-.5)/.5:2*s}static createHighResolutionPalette(e){const s=[],i=c$(Tt.fromObject(e).roundToPrecision(4)),n=md(new Ht(0,i.a,i.b)).clamp().roundToPrecision(4),o=md(new Ht(50,i.a,i.b)).clamp().roundToPrecision(4),r=md(new Ht(100,i.a,i.b)).clamp().roundToPrecision(4),a=new Tt(0,0,0),l=new Tt(1,1,1),c=r.equalValue(l)?0:14,d=n.equalValue(a)?0:14;for(let u=100+c;u>=0-d;u-=.5){let f;if(u<0){const y=u/d+1;f=La(y,a,n)}else if(u<=50)f=La(fi.ramp(u),n,o);else if(u<=100)f=La(fi.ramp(u),o,r);else{const y=(u-100)/c;f=La(y,r,l)}f=fi.saturationBump(o,f).roundToPrecision(4),s.push(bs.from(f))}return new fi(e,s)}static adjustEnd(e,s,i,n){const o=n===-1?s.swatches:s.reversedSwatches,r=c=>{const d=s.closestIndexOf(c);return n===1?s.lastIndex-d:d};n===1&&i.reverse();const a=e(i[i.length-2]);if(ls(ml(i[i.length-1],i[i.length-2]),2)<a){i.pop();const c=s.colorContrast(o[s.lastIndex],a,void 0,n),d=r(c),u=r(i[i.length-2]),f=d-u;let y=1;for(let w=i.length-f-1;w<i.length;w++){const $=r(i[w]),_=w===i.length-1?s.lastIndex:$+y;i[w]=o[_],y++}}n===1&&i.reverse()}static createColorPaletteByContrast(e,s){const i=fi.createHighResolutionPalette(e),n=a=>{const l=s.stepContrast+s.stepContrast*(1-a.relativeLuminance)*s.stepContrastRamp;return ls(l,2)},o=[];let r=s.preserveSource?e:i.swatches[0];o.push(r);do{const a=n(r);r=i.colorContrast(r,a,void 0,1),o.push(r)}while(r.relativeLuminance>0);if(s.preserveSource){r=e;do{const a=n(r);r=i.colorContrast(r,a,void 0,-1),o.unshift(r)}while(r.relativeLuminance<1)}return this.adjustEnd(n,i,o,-1),s.preserveSource&&this.adjustEnd(n,i,o,1),o}static from(e,s){const i=s===void 0?Uf:Object.assign(Object.assign({},Uf),s);return new fi(e,Object.freeze(fi.createColorPaletteByContrast(e,i)))}}const vl=bs.create(1,1,1),Lu=bs.create(0,0,0),g$=bs.create(.5,.5,.5),gd=Yn("#0078D4"),v$=bs.create(gd.r,gd.g,gd.b);function cg(t,e,s,i,n){const o=d=>d.contrast(vl)>=n?vl:Lu,r=o(t),a=o(e),l=r.relativeLuminance===a.relativeLuminance?r:o(s),c=o(i);return{rest:r,hover:a,active:l,focus:c}}class Jl{constructor(e,s,i,n){this.toColorString=()=>this.cssGradient,this.contrast=ml.bind(null,this),this.createCSS=this.toColorString,this.color=new Tt(e,s,i),this.cssGradient=n,this.relativeLuminance=lg(this.color),this.r=e,this.g=s,this.b=i}static fromObject(e,s){return new Jl(e.r,e.g,e.b,s)}}const b$=new Tt(0,0,0),y$=new Tt(1,1,1);function dg(t,e,s,i,n,o,r,a,l=10,c=!1){const d=t.closestIndexOf(e);a===void 0&&(a=io(e));function u(re){if(c){const Y=t.closestIndexOf(e),ge=t.get(Y),be=re.relativeLuminance<e.relativeLuminance?b$:y$,R=i$(Yn(re.toColorString()),Yn(ge.toColorString()),be).roundToPrecision(2),Ce=d$(Yn(e.toColorString()),R);return bs.from(Ce)}else return re}const f=d+a*s,y=f+a*(i-s),w=f+a*(n-s),$=f+a*(o-s),_=a===-1?0:100-l,A=a===-1?l:100;function P(re,Y){const ge=t.get(re);if(Y){const be=t.get(re+a*r),R=a===-1?be:ge,Ce=a===-1?ge:be,Ee=`linear-gradient(${u(R).toColorString()} ${_}%, ${u(Ce).toColorString()} ${A}%)`;return Jl.fromObject(R,Ee)}else return u(ge)}return{rest:P(f,!0),hover:P(y,!0),active:P(w,!1),focus:P($,!0)}}function x$(t,e,s,i,n,o,r,a){const l=t.closestIndexOf(e),c=io(e),d=l+c*s,u=d+c*(i-s),f=d+c*(n-s),y=d+c*(o-s),w=`calc(100% - ${a})`;function $(_,A){const P=t.get(_);if(A){const re=t.get(_+c*r),Y=`linear-gradient(${P.toColorString()} ${w}, ${re.toColorString()} ${w}, ${re.toColorString()})`;return Jl.fromObject(P,Y)}else return P}return{rest:$(d,!0),hover:$(u,!0),active:$(f,!1),focus:$(y,!0)}}function w$(t,e,s){return t.colorContrast(e,s)}function No(t,e,s,i,n,o,r,a){a==null&&(a=io(e));const l=t.closestIndexOf(t.colorContrast(e,s));return{rest:t.get(l+a*i),hover:t.get(l+a*n),active:t.get(l+a*o),focus:t.get(l+a*r)}}function $$(t,e,s,i,n,o,r,a=void 0,l,c,d,u,f,y=void 0){return pa(e)?No(t,e,l,c,d,u,f,y):No(t,e,s,i,n,o,r,a)}function k$(t,e,s){return t.get(t.closestIndexOf(e)+io(e)*s)}function bn(t,e,s,i,n,o,r){const a=t.closestIndexOf(e);return r==null&&(r=io(e)),{rest:t.get(a+r*s),hover:t.get(a+r*i),active:t.get(a+r*n),focus:t.get(a+r*o)}}function Mu(t,e,s,i,n,o,r=void 0,a,l,c,d,u=void 0){return pa(e)?bn(t,e,a,l,c,d,u):bn(t,e,s,i,n,o,r)}function _$(t,e){return pa(e)?vl:Lu}function S$(t,e,s){return pa(e)?Lu:vl}function C$(t){return bs.create(t,t,t)}var qr;(function(t){t[t.LightMode=.98]="LightMode",t[t.DarkMode=.15]="DarkMode"})(qr||(qr={}));function ma(t,e){return t.closestIndexOf(C$(e))}function I$(t,e){return t.get(ma(t,e))}function T$(t,e,s){return t.get(ma(t,e)+s)}function ug(t,e,s){return t.get(ma(t,e)+s*-1)}function F$(t,e,s){return t.get(ma(t,e)+s*-1*2)}function D$(t,e,s){return t.get(ma(t,e)+s*-1*3)}const R$={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Black:900},{create:S}=Je;function U(t){return Je.create({name:t,cssCustomPropertyName:null})}const il=S("direction").withDefault(ot.ltr),As=S("disabled-opacity").withDefault(.3),Kl=S("base-height-multiplier").withDefault(8),E$=S("base-horizontal-spacing-multiplier").withDefault(3),Cn=S("density").withDefault(0),K=S("design-unit").withDefault(4),Ze=S("control-corner-radius").withDefault(4),Ri=S("layer-corner-radius").withDefault(8),ce=S("stroke-width").withDefault(1),Xt=S("focus-stroke-width").withDefault(2),Ws=S("body-font").withDefault('"Segoe UI Variable", "Segoe UI", sans-serif'),O$=S("font-weight").withDefault(R$.Normal);function Zi(t){return e=>{const s=t.getValueFor(e),i=O$.getValueFor(e);if(s.endsWith("px")){const n=Number.parseFloat(s.replace("px",""));if(n<=12)return`"wght" ${i}, "opsz" 8`;if(n>24)return`"wght" ${i}, "opsz" 36`}return`"wght" ${i}, "opsz" 10.5`}}const Vu=S("type-ramp-base-font-size").withDefault("14px"),hg=S("type-ramp-base-line-height").withDefault("20px"),A$=S("type-ramp-base-font-variations").withDefault(Zi(Vu)),Hu=S("type-ramp-minus-1-font-size").withDefault("12px"),Nu=S("type-ramp-minus-1-line-height").withDefault("16px"),P$=S("type-ramp-minus-1-font-variations").withDefault(Zi(Hu)),zu=S("type-ramp-minus-2-font-size").withDefault("10px"),fg=S("type-ramp-minus-2-line-height").withDefault("14px"),L$=S("type-ramp-minus-2-font-variations").withDefault(Zi(zu)),Bu=S("type-ramp-plus-1-font-size").withDefault("16px"),pg=S("type-ramp-plus-1-line-height").withDefault("22px"),M$=S("type-ramp-plus-1-font-variations").withDefault(Zi(Bu)),ju=S("type-ramp-plus-2-font-size").withDefault("20px"),mg=S("type-ramp-plus-2-line-height").withDefault("26px"),V$=S("type-ramp-plus-2-font-variations").withDefault(Zi(ju)),Uu=S("type-ramp-plus-3-font-size").withDefault("24px"),gg=S("type-ramp-plus-3-line-height").withDefault("32px"),H$=S("type-ramp-plus-3-font-variations").withDefault(Zi(Uu)),Yu=S("type-ramp-plus-4-font-size").withDefault("28px"),vg=S("type-ramp-plus-4-line-height").withDefault("36px"),N$=S("type-ramp-plus-4-font-variations").withDefault(Zi(Yu)),Wu=S("type-ramp-plus-5-font-size").withDefault("32px"),bg=S("type-ramp-plus-5-line-height").withDefault("40px"),z$=S("type-ramp-plus-5-font-variations").withDefault(Zi(Wu)),qu=S("type-ramp-plus-6-font-size").withDefault("40px"),yg=S("type-ramp-plus-6-line-height").withDefault("52px"),B$=S("type-ramp-plus-6-font-variations").withDefault(Zi(qu)),In=S("base-layer-luminance").withDefault(qr.LightMode),Wd=U("accent-fill-rest-delta").withDefault(0),qd=U("accent-fill-hover-delta").withDefault(-2),Gd=U("accent-fill-active-delta").withDefault(-5),Zd=U("accent-fill-focus-delta").withDefault(0),xg=U("accent-foreground-rest-delta").withDefault(0),wg=U("accent-foreground-hover-delta").withDefault(3),$g=U("accent-foreground-active-delta").withDefault(-8),kg=U("accent-foreground-focus-delta").withDefault(0),_g=U("neutral-fill-rest-delta").withDefault(-1),Sg=U("neutral-fill-hover-delta").withDefault(1),Cg=U("neutral-fill-active-delta").withDefault(0),Ig=U("neutral-fill-focus-delta").withDefault(0),Tg=U("neutral-fill-input-rest-delta").withDefault(-1),Fg=U("neutral-fill-input-hover-delta").withDefault(1),Dg=U("neutral-fill-input-active-delta").withDefault(0),Rg=U("neutral-fill-input-focus-delta").withDefault(-2),Ma=U("neutral-fill-input-alt-rest-delta").withDefault(2),Yf=U("neutral-fill-input-alt-hover-delta").withDefault(4),Wf=U("neutral-fill-input-alt-active-delta").withDefault(6),qf=U("neutral-fill-input-alt-focus-delta").withDefault(2),yn=U("neutral-fill-layer-rest-delta").withDefault(-2),j$=U("neutral-fill-layer-hover-delta").withDefault(-3),U$=U("neutral-fill-layer-active-delta").withDefault(-3),Va=U("neutral-fill-layer-alt-rest-delta").withDefault(-1),Y$=U("neutral-fill-secondary-rest-delta").withDefault(3),W$=U("neutral-fill-secondary-hover-delta").withDefault(2),q$=U("neutral-fill-secondary-active-delta").withDefault(1),G$=U("neutral-fill-secondary-focus-delta").withDefault(3),Eg=U("neutral-fill-stealth-rest-delta").withDefault(0),Og=U("neutral-fill-stealth-hover-delta").withDefault(3),Ag=U("neutral-fill-stealth-active-delta").withDefault(2),Pg=U("neutral-fill-stealth-focus-delta").withDefault(0),Z$=U("neutral-fill-strong-rest-delta").withDefault(0),Lg=U("neutral-fill-strong-hover-delta").withDefault(8),Mg=U("neutral-fill-strong-active-delta").withDefault(-5),Vg=U("neutral-fill-strong-focus-delta").withDefault(0),Hg=U("neutral-stroke-rest-delta").withDefault(8),Ng=U("neutral-stroke-hover-delta").withDefault(12),zg=U("neutral-stroke-active-delta").withDefault(6),Bg=U("neutral-stroke-focus-delta").withDefault(8),jg=U("neutral-stroke-control-rest-delta").withDefault(3),Ug=U("neutral-stroke-control-hover-delta").withDefault(5),Yg=U("neutral-stroke-control-active-delta").withDefault(5),Wg=U("neutral-stroke-control-focus-delta").withDefault(5),qg=U("neutral-stroke-divider-rest-delta").withDefault(4),Gf=U("neutral-stroke-layer-rest-delta").withDefault(3),X$=U("neutral-stroke-layer-hover-delta").withDefault(3),Q$=U("neutral-stroke-layer-active-delta").withDefault(3),J$=U("neutral-stroke-strong-hover-delta").withDefault(0),K$=U("neutral-stroke-strong-active-delta").withDefault(0),e1=U("neutral-stroke-strong-focus-delta").withDefault(0),ec=S("neutral-base-color").withDefault(g$),at=U("neutral-palette").withDefault(t=>Wr.from(ec.getValueFor(t))),tc=S("accent-base-color").withDefault(v$),Gu=U("accent-palette").withDefault(t=>Wr.from(tc.getValueFor(t))),t1=U("neutral-layer-card-container-recipe").withDefault({evaluate:t=>ug(at.getValueFor(t),In.getValueFor(t),yn.getValueFor(t))});S("neutral-layer-card-container").withDefault(t=>t1.getValueFor(t).evaluate(t));const s1=U("neutral-layer-floating-recipe").withDefault({evaluate:t=>T$(at.getValueFor(t),In.getValueFor(t),yn.getValueFor(t))}),ga=S("neutral-layer-floating").withDefault(t=>s1.getValueFor(t).evaluate(t)),i1=U("neutral-layer-1-recipe").withDefault({evaluate:t=>I$(at.getValueFor(t),In.getValueFor(t))}),n1=S("neutral-layer-1").withDefault(t=>i1.getValueFor(t).evaluate(t)),o1=U("neutral-layer-2-recipe").withDefault({evaluate:t=>ug(at.getValueFor(t),In.getValueFor(t),yn.getValueFor(t))});S("neutral-layer-2").withDefault(t=>o1.getValueFor(t).evaluate(t));const r1=U("neutral-layer-3-recipe").withDefault({evaluate:t=>F$(at.getValueFor(t),In.getValueFor(t),yn.getValueFor(t))});S("neutral-layer-3").withDefault(t=>r1.getValueFor(t).evaluate(t));const a1=U("neutral-layer-4-recipe").withDefault({evaluate:t=>D$(at.getValueFor(t),In.getValueFor(t),yn.getValueFor(t))});S("neutral-layer-4").withDefault(t=>a1.getValueFor(t).evaluate(t));const Re=S("fill-color").withDefault(t=>n1.getValueFor(t));var bl;(function(t){t[t.normal=4.5]="normal",t[t.large=3]="large"})(bl||(bl={}));const sc=U("accent-fill-recipe").withDefault({evaluate:(t,e)=>$$(Gu.getValueFor(t),e||Re.getValueFor(t),5,Wd.getValueFor(t),qd.getValueFor(t),Gd.getValueFor(t),Zd.getValueFor(t),void 0,8,Wd.getValueFor(t),qd.getValueFor(t),Gd.getValueFor(t),Zd.getValueFor(t),void 0)}),nt=S("accent-fill-rest").withDefault(t=>sc.getValueFor(t).evaluate(t).rest),ni=S("accent-fill-hover").withDefault(t=>sc.getValueFor(t).evaluate(t).hover),oi=S("accent-fill-active").withDefault(t=>sc.getValueFor(t).evaluate(t).active),ic=S("accent-fill-focus").withDefault(t=>sc.getValueFor(t).evaluate(t).focus),nc=U("foreground-on-accent-recipe").withDefault({evaluate:t=>cg(nt.getValueFor(t),ni.getValueFor(t),oi.getValueFor(t),ic.getValueFor(t),bl.normal)}),Qn=S("foreground-on-accent-rest").withDefault(t=>nc.getValueFor(t).evaluate(t).rest),Gg=S("foreground-on-accent-hover").withDefault(t=>nc.getValueFor(t).evaluate(t).hover),Zg=S("foreground-on-accent-active").withDefault(t=>nc.getValueFor(t).evaluate(t).active);S("foreground-on-accent-focus").withDefault(t=>nc.getValueFor(t).evaluate(t).focus);const oc=U("accent-foreground-recipe").withDefault({evaluate:(t,e)=>No(Gu.getValueFor(t),e||Re.getValueFor(t),9.5,xg.getValueFor(t),wg.getValueFor(t),$g.getValueFor(t),kg.getValueFor(t))}),Xg=S("accent-foreground-rest").withDefault(t=>oc.getValueFor(t).evaluate(t).rest),Qg=S("accent-foreground-hover").withDefault(t=>oc.getValueFor(t).evaluate(t).hover),Jg=S("accent-foreground-active").withDefault(t=>oc.getValueFor(t).evaluate(t).active);S("accent-foreground-focus").withDefault(t=>oc.getValueFor(t).evaluate(t).focus);const rc=U("accent-stroke-control-recipe").withDefault({evaluate:(t,e)=>dg(at.getValueFor(t),e||Re.getValueFor(t),-3,-3,-3,-3,10,1,void 0,!0)}),l1=S("accent-stroke-control-rest").withDefault(t=>rc.getValueFor(t).evaluate(t,nt.getValueFor(t)).rest),c1=S("accent-stroke-control-hover").withDefault(t=>rc.getValueFor(t).evaluate(t,ni.getValueFor(t)).hover),d1=S("accent-stroke-control-active").withDefault(t=>rc.getValueFor(t).evaluate(t,oi.getValueFor(t)).active);S("accent-stroke-control-focus").withDefault(t=>rc.getValueFor(t).evaluate(t,ic.getValueFor(t)).focus);const ac=U("neutral-fill-recipe").withDefault({evaluate:(t,e)=>Mu(at.getValueFor(t),e||Re.getValueFor(t),_g.getValueFor(t),Sg.getValueFor(t),Cg.getValueFor(t),Ig.getValueFor(t),void 0,2,3,1,2,void 0)}),Hs=S("neutral-fill-rest").withDefault(t=>ac.getValueFor(t).evaluate(t).rest),Zf=S("neutral-fill-hover").withDefault(t=>ac.getValueFor(t).evaluate(t).hover),Xf=S("neutral-fill-active").withDefault(t=>ac.getValueFor(t).evaluate(t).active);S("neutral-fill-focus").withDefault(t=>ac.getValueFor(t).evaluate(t).focus);const Tn=U("neutral-fill-input-recipe").withDefault({evaluate:(t,e)=>Mu(at.getValueFor(t),e||Re.getValueFor(t),Tg.getValueFor(t),Fg.getValueFor(t),Dg.getValueFor(t),Rg.getValueFor(t),void 0,2,3,1,0,void 0)}),Ha=S("neutral-fill-input-rest").withDefault(t=>Tn.getValueFor(t).evaluate(t).rest),Qf=S("neutral-fill-input-hover").withDefault(t=>Tn.getValueFor(t).evaluate(t).hover);S("neutral-fill-input-active").withDefault(t=>Tn.getValueFor(t).evaluate(t).active);const Jf=S("neutral-fill-input-focus").withDefault(t=>Tn.getValueFor(t).evaluate(t).focus),lc=U("neutral-fill-input-alt-recipe").withDefault({evaluate:(t,e)=>Mu(at.getValueFor(t),e||Re.getValueFor(t),Ma.getValueFor(t),Yf.getValueFor(t),Wf.getValueFor(t),qf.getValueFor(t),1,Ma.getValueFor(t),Ma.getValueFor(t)-Yf.getValueFor(t),Ma.getValueFor(t)-Wf.getValueFor(t),qf.getValueFor(t),1)}),Zu=S("neutral-fill-input-alt-rest").withDefault(t=>lc.getValueFor(t).evaluate(t).rest),Xu=S("neutral-fill-input-alt-hover").withDefault(t=>lc.getValueFor(t).evaluate(t).hover),Qu=S("neutral-fill-input-alt-active").withDefault(t=>lc.getValueFor(t).evaluate(t).active),Ju=S("neutral-fill-input-alt-focus").withDefault(t=>lc.getValueFor(t).evaluate(t).focus),no=U("neutral-fill-layer-recipe").withDefault({evaluate:(t,e)=>bn(at.getValueFor(t),e||Re.getValueFor(t),yn.getValueFor(t),j$.getValueFor(t),U$.getValueFor(t),yn.getValueFor(t),1)}),u1=S("neutral-fill-layer-rest").withDefault(t=>no.getValueFor(t).evaluate(t).rest);S("neutral-fill-layer-hover").withDefault(t=>no.getValueFor(t).evaluate(t).hover);S("neutral-fill-layer-active").withDefault(t=>no.getValueFor(t).evaluate(t).active);const h1=U("neutral-fill-layer-alt-recipe").withDefault({evaluate:(t,e)=>bn(at.getValueFor(t),e||Re.getValueFor(t),Va.getValueFor(t),Va.getValueFor(t),Va.getValueFor(t),Va.getValueFor(t))}),f1=S("neutral-fill-layer-alt-rest").withDefault(t=>h1.getValueFor(t).evaluate(t).rest),oo=U("neutral-fill-secondary-recipe").withDefault({evaluate:(t,e)=>bn(at.getValueFor(t),e||Re.getValueFor(t),Y$.getValueFor(t),W$.getValueFor(t),q$.getValueFor(t),G$.getValueFor(t))}),Jn=S("neutral-fill-secondary-rest").withDefault(t=>oo.getValueFor(t).evaluate(t).rest),Ku=S("neutral-fill-secondary-hover").withDefault(t=>oo.getValueFor(t).evaluate(t).hover),p1=S("neutral-fill-secondary-active").withDefault(t=>oo.getValueFor(t).evaluate(t).active),m1=S("neutral-fill-secondary-focus").withDefault(t=>oo.getValueFor(t).evaluate(t).focus),ci=U("neutral-fill-stealth-recipe").withDefault({evaluate:(t,e)=>bn(at.getValueFor(t),e||Re.getValueFor(t),Eg.getValueFor(t),Og.getValueFor(t),Ag.getValueFor(t),Pg.getValueFor(t))}),zo=S("neutral-fill-stealth-rest").withDefault(t=>ci.getValueFor(t).evaluate(t).rest),Bo=S("neutral-fill-stealth-hover").withDefault(t=>ci.getValueFor(t).evaluate(t).hover),jo=S("neutral-fill-stealth-active").withDefault(t=>ci.getValueFor(t).evaluate(t).active),g1=S("neutral-fill-stealth-focus").withDefault(t=>ci.getValueFor(t).evaluate(t).focus),cc=U("neutral-fill-strong-recipe").withDefault({evaluate:(t,e)=>No(at.getValueFor(t),e||Re.getValueFor(t),4.5,Z$.getValueFor(t),Lg.getValueFor(t),Mg.getValueFor(t),Vg.getValueFor(t))}),Kg=S("neutral-fill-strong-rest").withDefault(t=>cc.getValueFor(t).evaluate(t).rest),v1=S("neutral-fill-strong-hover").withDefault(t=>cc.getValueFor(t).evaluate(t).hover),b1=S("neutral-fill-strong-active").withDefault(t=>cc.getValueFor(t).evaluate(t).active);S("neutral-fill-strong-focus").withDefault(t=>cc.getValueFor(t).evaluate(t).focus);const dc=U("neutral-foreground-recipe").withDefault({evaluate:(t,e)=>No(at.getValueFor(t),e||Re.getValueFor(t),16,0,-19,-30,0)}),Xe=S("neutral-foreground-rest").withDefault(t=>dc.getValueFor(t).evaluate(t).rest),y1=S("neutral-foreground-hover").withDefault(t=>dc.getValueFor(t).evaluate(t).hover),x1=S("neutral-foreground-active").withDefault(t=>dc.getValueFor(t).evaluate(t).active);S("neutral-foreground-focus").withDefault(t=>dc.getValueFor(t).evaluate(t).focus);const va=U("neutral-foreground-hint-recipe").withDefault({evaluate:(t,e)=>w$(at.getValueFor(t),e||Re.getValueFor(t),4.5)}),Uo=S("neutral-foreground-hint").withDefault(t=>va.getValueFor(t).evaluate(t)),uc=U("neutral-stroke-recipe").withDefault({evaluate:(t,e)=>bn(at.getValueFor(t),e||Re.getValueFor(t),Hg.getValueFor(t),Ng.getValueFor(t),zg.getValueFor(t),Bg.getValueFor(t))}),Gr=S("neutral-stroke-rest").withDefault(t=>uc.getValueFor(t).evaluate(t).rest),w1=S("neutral-stroke-hover").withDefault(t=>uc.getValueFor(t).evaluate(t).hover),$1=S("neutral-stroke-active").withDefault(t=>uc.getValueFor(t).evaluate(t).active);S("neutral-stroke-focus").withDefault(t=>uc.getValueFor(t).evaluate(t).focus);const hc=U("neutral-stroke-control-recipe").withDefault({evaluate:(t,e)=>dg(at.getValueFor(t),e||Re.getValueFor(t),jg.getValueFor(t),Ug.getValueFor(t),Yg.getValueFor(t),Wg.getValueFor(t),5)}),eh=S("neutral-stroke-control-rest").withDefault(t=>hc.getValueFor(t).evaluate(t).rest),ev=S("neutral-stroke-control-hover").withDefault(t=>hc.getValueFor(t).evaluate(t).hover),tv=S("neutral-stroke-control-active").withDefault(t=>hc.getValueFor(t).evaluate(t).active);S("neutral-stroke-control-focus").withDefault(t=>hc.getValueFor(t).evaluate(t).focus);const k1=U("neutral-stroke-divider-recipe").withDefault({evaluate:(t,e)=>k$(at.getValueFor(t),e||Re.getValueFor(t),qg.getValueFor(t))}),yl=S("neutral-stroke-divider-rest").withDefault(t=>k1.getValueFor(t).evaluate(t)),fc=U("neutral-stroke-input-recipe").withDefault({evaluate:(t,e)=>x$(at.getValueFor(t),e||Re.getValueFor(t),jg.getValueFor(t),Ug.getValueFor(t),Yg.getValueFor(t),Wg.getValueFor(t),20,ce.getValueFor(t)+"px")}),Kf=S("neutral-stroke-input-rest").withDefault(t=>fc.getValueFor(t).evaluate(t).rest),_1=S("neutral-stroke-input-hover").withDefault(t=>fc.getValueFor(t).evaluate(t).hover);S("neutral-stroke-input-active").withDefault(t=>fc.getValueFor(t).evaluate(t).active);S("neutral-stroke-input-focus").withDefault(t=>fc.getValueFor(t).evaluate(t).focus);const th=U("neutral-stroke-layer-recipe").withDefault({evaluate:(t,e)=>bn(at.getValueFor(t),e||Re.getValueFor(t),Gf.getValueFor(t),X$.getValueFor(t),Q$.getValueFor(t),Gf.getValueFor(t))}),To=S("neutral-stroke-layer-rest").withDefault(t=>th.getValueFor(t).evaluate(t).rest);S("neutral-stroke-layer-hover").withDefault(t=>th.getValueFor(t).evaluate(t).hover);S("neutral-stroke-layer-active").withDefault(t=>th.getValueFor(t).evaluate(t).active);const pc=U("neutral-stroke-strong-recipe").withDefault({evaluate:(t,e)=>No(at.getValueFor(t),e||Re.getValueFor(t),5.5,0,J$.getValueFor(t),K$.getValueFor(t),e1.getValueFor(t))}),Ko=S("neutral-stroke-strong-rest").withDefault(t=>pc.getValueFor(t).evaluate(t).rest),sh=S("neutral-stroke-strong-hover").withDefault(t=>pc.getValueFor(t).evaluate(t).hover),ih=S("neutral-stroke-strong-active").withDefault(t=>pc.getValueFor(t).evaluate(t).active);S("neutral-stroke-strong-focus").withDefault(t=>pc.getValueFor(t).evaluate(t).focus);const S1=U("focus-stroke-outer-recipe").withDefault({evaluate:t=>_$(at.getValueFor(t),Re.getValueFor(t))}),mc=S("focus-stroke-outer").withDefault(t=>S1.getValueFor(t).evaluate(t)),C1=U("focus-stroke-inner-recipe").withDefault({evaluate:t=>S$(Gu.getValueFor(t),Re.getValueFor(t),mc.getValueFor(t))}),I1=S("focus-stroke-inner").withDefault(t=>C1.getValueFor(t).evaluate(t)),gc=U("foreground-on-accent-large-recipe").withDefault({evaluate:t=>cg(nt.getValueFor(t),ni.getValueFor(t),oi.getValueFor(t),ic.getValueFor(t),bl.large)});S("foreground-on-accent-rest-large").withDefault(t=>gc.getValueFor(t).evaluate(t).rest);S("foreground-on-accent-hover-large").withDefault(t=>gc.getValueFor(t).evaluate(t,ni.getValueFor(t)).hover);S("foreground-on-accent-active-large").withDefault(t=>gc.getValueFor(t).evaluate(t,oi.getValueFor(t)).active);S("foreground-on-accent-focus-large").withDefault(t=>gc.getValueFor(t).evaluate(t,ic.getValueFor(t)).focus);const T1=S("neutral-fill-inverse-rest-delta").withDefault(0),F1=S("neutral-fill-inverse-hover-delta").withDefault(-3),D1=S("neutral-fill-inverse-active-delta").withDefault(7),R1=S("neutral-fill-inverse-focus-delta").withDefault(0);function E1(t,e,s,i,n,o){const r=io(e),a=t.closestIndexOf(t.colorContrast(e,14)),l=a+r*Math.abs(s-i),c=r===1?s<i:r*s>r*i;let d,u;return c?(d=a,u=l):(d=l,u=a),{rest:t.get(d),hover:t.get(u),active:t.get(d+r*n),focus:t.get(d+r*o)}}const vc=U("neutral-fill-inverse-recipe").withDefault({evaluate:(t,e)=>E1(at.getValueFor(t),e||Re.getValueFor(t),T1.getValueFor(t),F1.getValueFor(t),D1.getValueFor(t),R1.getValueFor(t))});S("neutral-fill-inverse-rest").withDefault(t=>vc.getValueFor(t).evaluate(t).rest);S("neutral-fill-inverse-hover").withDefault(t=>vc.getValueFor(t).evaluate(t).hover);S("neutral-fill-inverse-active").withDefault(t=>vc.getValueFor(t).evaluate(t).active);S("neutral-fill-inverse-focus").withDefault(t=>vc.getValueFor(t).evaluate(t).focus);const $t=Fs`
  font-family: ${Ws};
  font-size: ${Vu};
  line-height: ${hg};
  font-weight: initial;
  font-variation-settings: ${A$};
`,sv=Fs`
  font-family: ${Ws};
  font-size: ${Hu};
  line-height: ${Nu};
  font-weight: initial;
  font-variation-settings: ${P$};
`;Fs`
  font-family: ${Ws};
  font-size: ${zu};
  line-height: ${fg};
  font-weight: initial;
  font-variation-settings: ${L$};
`;Fs`
  font-family: ${Ws};
  font-size: ${Bu};
  line-height: ${pg};
  font-weight: initial;
  font-variation-settings: ${M$};
`;Fs`
  font-family: ${Ws};
  font-size: ${ju};
  line-height: ${mg};
  font-weight: initial;
  font-variation-settings: ${V$};
`;Fs`
  font-family: ${Ws};
  font-size: ${Uu};
  line-height: ${gg};
  font-weight: initial;
  font-variation-settings: ${H$};
`;Fs`
  font-family: ${Ws};
  font-size: ${Yu};
  line-height: ${vg};
  font-weight: initial;
  font-variation-settings: ${N$};
`;Fs`
  font-family: ${Ws};
  font-size: ${Wu};
  line-height: ${bg};
  font-weight: initial;
  font-variation-settings: ${z$};
`;Fs`
  font-family: ${Ws};
  font-size: ${qu};
  line-height: ${yg};
  font-weight: initial;
  font-variation-settings: ${B$};
`;const O1=(t,e)=>M`
    ${Me("flex")} :host {
      box-sizing: border-box;
      flex-direction: column;
      ${$t}
      color: ${Xe};
      gap: calc(${K} * 1px);
    }
  `,qs=Fs`
  outline: calc(${Xt} * 1px) solid ${mc};
  outline-offset: calc(${Xt} * -1px);
`,ba=Fs`
  outline: calc(${Xt} * 1px) solid ${mc};
  outline-offset: calc(${ce} * 1px);
`,Pe=Fs`(${Kl} + ${Cn}) * ${K}`,A1=Je.create("neutral-fill-stealth-rest-on-neutral-fill-layer-rest").withDefault(t=>{const e=no.getValueFor(t);return ci.getValueFor(t).evaluate(t,e.evaluate(t).rest).rest}),P1=Je.create("neutral-fill-stealth-hover-on-neutral-fill-layer-rest").withDefault(t=>{const e=no.getValueFor(t);return ci.getValueFor(t).evaluate(t,e.evaluate(t).rest).hover}),L1=Je.create("neutral-fill-stealth-active-on-neutral-fill-layer-rest").withDefault(t=>{const e=no.getValueFor(t);return ci.getValueFor(t).evaluate(t,e.evaluate(t).rest).active}),M1=(t,e)=>M`
    ${Me("flex")} :host {
      box-sizing: border-box;
      ${$t};
      flex-direction: column;
      background: ${u1};
      color: ${Xe};
      border: calc(${ce} * 1px) solid ${To};
      border-radius: calc(${Ri} * 1px);
    }

    .region {
      display: none;
      padding: calc(${K} * 2 * 1px);
      background: ${f1};
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
      margin: calc(${K} * 3 * 1px) 0;
      padding: 0 calc(${K} * 2 * 1px);
      text-align: left;
      color: inherit;
      cursor: pointer;
      font: inherit;
    }

    .button::before {
      content: '';
      position: absolute;
      top: calc(${ce} * -1px);
      left: calc(${ce} * -1px);
      right: calc(${ce} * -1px);
      bottom: calc(${ce} * -1px);
      cursor: pointer;
    }

    .button:${_e}::before {
      ${qs}
      border-radius: calc(${Ri} * 1px);
    }

    :host(.expanded) .button:${_e}::before {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    :host(.expanded) .region {
      display: block;
      border-top: calc(${ce} * 1px) solid ${To};
      border-bottom-left-radius: calc((${Ri} - ${ce}) * 1px);
      border-bottom-right-radius: calc((${Ri} - ${ce}) * 1px);
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-column: 4;
      pointer-events: none;
      background: ${A1};
      border-radius: calc(${Ze} * 1px);
      fill: currentcolor;
      width: calc(${Pe} * 1px);
      height: calc(${Pe} * 1px);
      margin: calc(${K} * 2 * 1px);
    }

    .heading:hover .icon {
      background: ${P1};
    }

    .heading:active .icon {
      background: ${L1};
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
      padding-inline-start: calc(${K} * 2 * 1px);
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
  `.withBehaviors(Le(M`
        .button:${_e}::before {
          outline-color: ${b.Highlight};
        }
        .icon {
          fill: ${b.ButtonText};
        }
      `)),V1=Zn.compose({baseName:"accordion-item",template:R0,styles:M1,collapsedIcon:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `,expandedIcon:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 7.35c.2.2.5.2.7 0L6 4.21l3.15 3.14a.5.5 0 10.7-.7l-3.5-3.5a.5.5 0 00-.7 0l-3.5 3.5a.5.5 0 000 .7z"/>
    </svg>
  `}),H1=Ru.compose({baseName:"accordion",template:Y0,styles:O1});function X(t,e,s,i){var n=arguments.length,o=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,s):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,s,o):r(e,s))||o);return n>3&&o&&Object.defineProperty(e,s,o),o}class er{constructor(e,s){this.cache=new WeakMap,this.ltr=e,this.rtl=s}bind(e){this.attach(e)}unbind(e){const s=this.cache.get(e);s&&il.unsubscribe(s)}attach(e){const s=this.cache.get(e)||new N1(this.ltr,this.rtl,e),i=il.getValueFor(e);il.subscribe(s),s.attach(i),this.cache.set(e,s)}}class N1{constructor(e,s,i){this.ltr=e,this.rtl=s,this.source=i,this.attached=null}handleChange({target:e,token:s}){this.attach(s.getValueFor(this.source))}attach(e){this.attached!==this[e]&&(this.attached!==null&&this.source.$fastController.removeStyles(this.attached),this.attached=this[e],this.attached!==null&&this.source.$fastController.addStyles(this.attached))}}const ro=Je.create({name:"elevation-shadow",cssCustomPropertyName:null}).withDefault({evaluate:(t,e,s)=>{let i=.12,n=.14;e>16&&(i=.2,n=.24);const o=`0 0 2px rgba(0, 0, 0, ${i})`,r=`0 calc(${e} * 0.5px) calc((${e} * 1px)) rgba(0, 0, 0, ${n})`;return`${o}, ${r}`}}),z1=Je.create("elevation-shadow-card-rest-size").withDefault(4),B1=Je.create("elevation-shadow-card-hover-size").withDefault(8),j1=Je.create("elevation-shadow-card-active-size").withDefault(0),U1=Je.create("elevation-shadow-card-focus-size").withDefault(8),Y1=Je.create("elevation-shadow-card-rest").withDefault(t=>ro.getValueFor(t).evaluate(t,z1.getValueFor(t)));Je.create("elevation-shadow-card-hover").withDefault(t=>ro.getValueFor(t).evaluate(t,B1.getValueFor(t)));Je.create("elevation-shadow-card-active").withDefault(t=>ro.getValueFor(t).evaluate(t,j1.getValueFor(t)));Je.create("elevation-shadow-card-focus").withDefault(t=>ro.getValueFor(t).evaluate(t,U1.getValueFor(t)));const W1=Je.create("elevation-shadow-tooltip-size").withDefault(16),q1=Je.create("elevation-shadow-tooltip").withDefault(t=>ro.getValueFor(t).evaluate(t,W1.getValueFor(t))),G1=Je.create("elevation-shadow-flyout-size").withDefault(32),iv=Je.create("elevation-shadow-flyout").withDefault(t=>ro.getValueFor(t).evaluate(t,G1.getValueFor(t))),Z1=Je.create("elevation-shadow-dialog-size").withDefault(128),X1=Je.create("elevation-shadow-dialog").withDefault(t=>ro.getValueFor(t).evaluate(t,Z1.getValueFor(t))),nv=(t,e,s,i="[disabled]")=>M`
    ${Me("inline-flex")}
    
    :host {
      position: relative;
      box-sizing: border-box;
      ${$t}
      height: calc(${Pe} * 1px);
      min-width: calc(${Pe} * 1px);
      color: ${Xe};
      border-radius: calc(${Ze} * 1px);
      fill: currentcolor;
    }

    .control {
      border: calc(${ce} * 1px) solid transparent;
      flex-grow: 1;
      box-sizing: border-box;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 calc((10 + (${K} * 2 * ${Cn})) * 1px);
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

    .control:${_e} {
      ${qs}
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
  `,nh=(t,e,s,i="[disabled]")=>M`
    .control {
      background: padding-box linear-gradient(${Hs}, ${Hs}),
        border-box ${eh};
    }

    :host(${s}:hover) .control {
      background: padding-box linear-gradient(${Zf}, ${Zf}),
        border-box ${ev};
    }

    :host(${s}:active) .control {
      background: padding-box linear-gradient(${Xf}, ${Xf}),
        border-box ${tv};
    }

    :host(${i}) .control {
      background: padding-box linear-gradient(${Hs}, ${Hs}),
        border-box ${Gr};
    }
  `.withBehaviors(Le(M`
        .control {
          background: ${b.ButtonFace};
          border-color: ${b.ButtonText};
          color: ${b.ButtonText};
        }

        :host(${s}:hover) .control,
        :host(${s}:active) .control {
          forced-color-adjust: none;
          background: ${b.HighlightText};
          border-color: ${b.Highlight};
          color: ${b.Highlight};
        }

        :host(${i}) .control {
          background: transparent;
          border-color: ${b.GrayText};
          color: ${b.GrayText};
        }

        .control:${_e} {
          outline-color: ${b.CanvasText};
        }

        :host([href]) .control {
          background: transparent;
          border-color: ${b.LinkText};
          color: ${b.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${b.CanvasText};
          color: ${b.CanvasText};
        }
    `)),ov=(t,e,s,i="[disabled]")=>M`
    .control {
      background: padding-box linear-gradient(${nt}, ${nt}),
        border-box ${l1};
      color: ${Qn};
    }

    :host(${s}:hover) .control {
      background: padding-box linear-gradient(${ni}, ${ni}),
        border-box ${c1};
      color: ${Gg};
    }

    :host(${s}:active) .control {
      background: padding-box linear-gradient(${oi}, ${oi}),
        border-box ${d1};
      color: ${Zg};
    }

    :host(${i}) .control {
      background: ${nt};
    }

    .control:${_e} {
      box-shadow: 0 0 0 calc(${Xt} * 1px) ${I1} inset !important;
    }
  `.withBehaviors(Le(M`
        .control {
          forced-color-adjust: none;
          background: ${b.Highlight};
          color: ${b.HighlightText};
        }

        :host(${s}:hover) .control,
        :host(${s}:active) .control {
          background: ${b.HighlightText};
          border-color: ${b.Highlight};
          color: ${b.Highlight};
        }

        :host(${i}) .control {
          background: transparent;
          border-color: ${b.GrayText};
          color: ${b.GrayText};
        }

        .control:${_e} {
          outline-color: ${b.CanvasText};
          box-shadow: 0 0 0 calc(${Xt} * 1px) ${b.HighlightText} inset !important;
        }

        :host([href]) .control {
          background: ${b.LinkText};
          color: ${b.HighlightText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: ${b.ButtonFace};
          border-color: ${b.LinkText};
          color: ${b.LinkText};
        }
      `)),Q1=(t,e,s,i="[disabled]")=>M`
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
      color: ${Xg};
      text-decoration: underline 1px;
    }

    :host(${s}:hover) .control {
      color: ${Qg};
      text-decoration: none;
    }

    :host(${s}:active) .control {
      color: ${Jg};
      text-decoration: none;
    }

    .control:${_e} {
      ${ba}
    }
  `.withBehaviors(Le(M`
        :host(${s}) .control {
          color: ${b.LinkText};
        }

        :host(${s}:hover) .control,
        :host(${s}:active) .control {
          color: ${b.CanvasText};
        }

        .control:${_e} {
          outline-color: ${b.CanvasText};
        }
      `)),rv=(t,e,s,i="[disabled]")=>M`
    :host {
      color: ${Xg};
    }

    .control {
      background: ${zo};
    }

    :host(${s}:hover) .control {
      background: ${Bo};
      color: ${Qg};
    }

    :host(${s}:active) .control {
      background: ${jo};
      color: ${Jg};
    }

    :host(${i}) .control {
      background: ${zo};
    }
  `.withBehaviors(Le(M`
        :host {
          color: ${b.ButtonText};
        }

        .control {
          forced-color-adjust: none;
          background: transparent;
        }

        :host(${s}:hover) .control,
        :host(${s}:active) .control {
          background: transparent;
          border-color: ${b.ButtonText};
          color: ${b.ButtonText};
        }

        :host(${i}) .control {
          background: transparent;
          color: ${b.GrayText};
        }

        .control:${_e} {
          outline-color: ${b.CanvasText};
        }

        :host([href]) .control {
          color: ${b.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${b.LinkText};
          color: ${b.LinkText};
        }
      `)),av=(t,e,s,i="[disabled]")=>M`
    .control {
      background: transparent !important;
      border-color: ${Gr};
    }

    :host(${s}:hover) .control {
      border-color: ${w1};
    }

    :host(${s}:active) .control {
      border-color: ${$1};
    }

    :host(${i}) .control {
      background: transparent !important;
      border-color: ${Gr};
    }
  `.withBehaviors(Le(M`
        .control {
          border-color: ${b.ButtonText};
          color: ${b.ButtonText};
        }

        :host(${s}:hover) .control,
        :host(${s}:active) .control {
          background: ${b.HighlightText};
          border-color: ${b.Highlight};
          color: ${b.Highlight};
        }

        :host(${i}) .control {
          border-color: ${b.GrayText};
          color: ${b.GrayText};
        }

        .control:${_e} {
          outline-color: ${b.CanvasText};
        }

        :host([href]) .control {
          border-color: ${b.LinkText};
          color: ${b.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${b.CanvasText};
          color: ${b.CanvasText};
        }
      `)),oh=(t,e,s,i="[disabled]")=>M`
    .control {
      background: ${zo};
    }

    :host(${s}:hover) .control {
      background: ${Bo};
    }

    :host(${s}:active) .control {
      background: ${jo};
    }

    :host(${i}) .control {
      background: ${zo};
    }
  `.withBehaviors(Le(M`
        .control {
          forced-color-adjust: none;
          background: transparent;
          color: ${b.ButtonText};
        }

        :host(${s}:hover) .control,
        :host(${s}:active) .control {
          background: transparent;
          border-color: ${b.ButtonText};
          color: ${b.ButtonText};
        }

        :host(${i}) .control {
          background: transparent;
          color: ${b.GrayText};
        }
        
        .control:${_e} {
          outline-color: ${b.CanvasText};
        }

        :host([href]) .control {
          color: ${b.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${b.LinkText};
          color: ${b.LinkText};
        }
      `)),J1=Je.create("input-placeholder-rest").withDefault(t=>{const e=Tn.getValueFor(t);return va.getValueFor(t).evaluate(t,e.evaluate(t).rest)}),K1=Je.create("input-placeholder-hover").withDefault(t=>{const e=Tn.getValueFor(t);return va.getValueFor(t).evaluate(t,e.evaluate(t).hover)}),ek=Je.create("input-filled-placeholder-rest").withDefault(t=>{const e=oo.getValueFor(t);return va.getValueFor(t).evaluate(t,e.evaluate(t).rest)}),tk=Je.create("input-filled-placeholder-hover").withDefault(t=>{const e=oo.getValueFor(t);return va.getValueFor(t).evaluate(t,e.evaluate(t).hover)}),bc=(t,e,s)=>M`
  :host {
    ${$t}
    color: ${Xe};
    fill: currentcolor;
    user-select: none;
    position: relative;
  }

  ${s} {
    box-sizing: border-box;
    position: relative;
    color: inherit;
    border: calc(${ce} * 1px) solid transparent;
    border-radius: calc(${Ze} * 1px);
    height: calc(${Pe} * 1px);
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
    color: ${Xe};
    cursor: pointer;
    ${$t}
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
    cursor: ${Ys};
  }

  :host([disabled]) {
    opacity: ${As};
  }
`,ya=(t,e,s)=>M`
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
      height: calc(${Xt} * 1px);
      bottom: 0;
      border-bottom: calc(${Xt} * 1px) solid ${nt};
      border-bottom-left-radius: calc(${Ze} * 1px);
      border-bottom-right-radius: calc(${Ze} * 1px);
      z-index: 2;
      transition: all 300ms cubic-bezier(0.1, 0.9, 0.2, 1);
    }
  }
`,xa=(t,e,s,i=":not([disabled]):not(:focus-within)")=>M`
  ${s} {
    background: padding-box linear-gradient(${Ha}, ${Ha}),
      border-box ${Kf};
  }

  :host(${i}:hover) ${s} {
    background: padding-box linear-gradient(${Qf}, ${Qf}),
      border-box ${_1};
  }

  :host(:not([disabled]):focus-within) ${s} {
    background: padding-box linear-gradient(${Jf}, ${Jf}),
      border-box ${Kf};
  }
  
  :host([disabled]) ${s} {
    background: padding-box linear-gradient(${Ha}, ${Ha}),
      border-box ${Gr};
  }

  .control::placeholder {
    color: ${J1};
  }

  :host(${i}:hover) .control::placeholder {
    color: ${K1};
  }
`,tr=(t,e,s,i=":not([disabled]):not(:focus-within)")=>M`
  ${s} {
    background: ${Jn};
  }

  :host(${i}:hover) ${s} {
    background: ${Ku};
  }

  :host(:not([disabled]):focus-within) ${s} {
    background: ${m1};
  }

  :host([disabled]) ${s} {
    background: ${Jn};
  }

  .control::placeholder {
    color: ${ek};
  }

  :host(${i}:hover) .control::placeholder {
    color: ${tk};
  }
`,sr=(t,e,s,i=":not([disabled]):not(:focus-within)")=>M`
  :host {
    color: ${b.ButtonText};
  }

  ${s} {
    background: ${b.ButtonFace};
    border-color: ${b.ButtonText};
  }

  :host(${i}:hover) ${s},
  :host(:not([disabled]):focus-within) ${s} {
    border-color: ${b.Highlight};
  }

  :host([disabled]) ${s} {
    opacity: 1;
    background: ${b.ButtonFace};
    border-color: ${b.GrayText};
  }

  .control::placeholder,
  :host(${i}:hover) .control::placeholder {
    color: ${b.CanvasText};
  }

  :host(:not([disabled]):focus) ${s} {
    ${qs}
    outline-color: ${b.Highlight};
  }

  :host([disabled]) {
    opacity: 1;
    color: ${b.GrayText};
  }

  :host([disabled]) ::placeholder,
  :host([disabled]) ::-webkit-input-placeholder {
    color: ${b.GrayText};
  }
`;function gt(t,e){return new Kw("appearance",t,e)}const fo="[href]",sk=(t,e)=>nv().withBehaviors(gt("neutral",nh(t,e,fo)),gt("accent",ov(t,e,fo)),gt("hypertext",Q1(t,e,fo)),gt("lightweight",rv(t,e,fo)),gt("outline",av(t,e,fo)),gt("stealth",oh(t,e,fo)));class lv extends Ds{appearanceChanged(e,s){e!==s&&(this.classList.add(s),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){var e,s;const i=this.defaultSlottedContent.filter(n=>n.nodeType===Node.ELEMENT_NODE);i.length===1&&i[0]instanceof SVGElement?(e=this.control)===null||e===void 0||e.classList.add("icon-only"):(s=this.control)===null||s===void 0||s.classList.remove("icon-only")}}X([p],lv.prototype,"appearance",void 0);const ik=lv.compose({baseName:"anchor",baseClass:Ds,template:Wm,styles:sk,shadowOptions:{delegatesFocus:!0}}),nk=(t,e)=>M`
  :host {
    contain: layout;
    display: block;
  }
`,ok=he.compose({baseName:"anchored-region",template:sx,styles:nk}),rk=(t,e)=>M`
    ${Me("inline-block")} :host {
      box-sizing: border-box;
      ${sv};
    }

    .control {
      border-radius: calc(${Ze} * 1px);
      padding: calc(((${K} * 0.5) - ${ce}) * 1px) calc((${K} - ${ce}) * 1px);
      border: calc(${ce} * 1px) solid transparent;
    }

    :host(.lightweight) .control {
      background: transparent;
      color: ${Xe};
      font-weight: 600;
    }

    :host(.accent) .control {
      background: ${nt};
      color: ${Qn};
    }

    :host(.neutral) .control {
      background: ${Jn};
      color: ${Xe};
    }

    :host([circular]) .control {
      border-radius: 100px;
      min-width: calc(${Nu} - calc(${K} * 1px));
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;class cv extends da{constructor(){super(...arguments),this.appearance="lightweight"}appearanceChanged(e,s){e!==s&&me.queueUpdate(()=>{this.classList.add(s),this.classList.remove(e)})}}X([p({mode:"fromView"})],cv.prototype,"appearance",void 0);const ak=cv.compose({baseName:"badge",baseClass:da,template:nx,styles:rk}),lk=(t,e)=>M`
  ${Me("inline-block")} :host {
    box-sizing: border-box;
    ${$t};
  }

  .list {
    display: flex;
  }
`,ck=qm.compose({baseName:"breadcrumb",template:rx,styles:lk}),dk=(t,e)=>M`
    ${Me("inline-flex")} :host {
      background: transparent;
      color: ${Xe};
      fill: currentcolor;
      box-sizing: border-box;
      ${$t};
      min-width: calc(${Pe} * 1px);
      border-radius: calc(${Ze} * 1px);
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
      color: ${y1};
    }

    .control:active {
      color: ${x1};
    }

    .control:${_e} {
      ${ba}
    }

    :host(:not([href])),
    :host([aria-current]) .control {
      color: ${Xe};
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
  `.withBehaviors(Le(M`
        :host(:not([href])),
        .start,
        .end,
        .separator {
          background: ${b.ButtonFace};
          color: ${b.ButtonText};
          fill: currentcolor;
        }
        .separator {
          fill: ${b.ButtonText};
        }
        :host([href]) {
          forced-color-adjust: none;
          background: ${b.ButtonFace};
          color: ${b.LinkText};
        }
        :host([href]) .control:hover {
          background: ${b.LinkText};
          color: ${b.HighlightText};
          fill: currentcolor;
        }
        .control:${_e} {
          outline-color: ${b.LinkText};
        }
      `)),uk=jr.compose({baseName:"breadcrumb-item",template:ox,styles:dk,shadowOptions:{delegatesFocus:!0},separator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>
    </svg>
  `}),On=":not([disabled])",en="[disabled]",hk=(t,e)=>M`
    :host(${On}) .control {
      cursor: pointer;
    }

    :host(${en}) .control {
      cursor: ${Ys};
    }

    @media (forced-colors: none) {
      :host(${en}) .control {
        opacity: ${As};
      }
    }

    ${nv(t,e,On,en)}
  `.withBehaviors(gt("neutral",nh(t,e,On,en)),gt("accent",ov(t,e,On,en)),gt("lightweight",rv(t,e,On,en)),gt("outline",av(t,e,On,en)),gt("stealth",oh(t,e,On,en)));class dv extends Rs{appearanceChanged(e,s){e!==s&&(this.classList.add(s),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const e=this.defaultSlottedContent.filter(s=>s.nodeType===Node.ELEMENT_NODE);e.length===1&&e[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}X([p],dv.prototype,"appearance",void 0);const fk=dv.compose({baseName:"button",baseClass:Rs,template:ax,styles:hk,shadowOptions:{delegatesFocus:!0}}),pk=M`
.day.disabled::before {
  transform: translate(-50%, 0) rotate(45deg);
}
`,mk=M`
.day.disabled::before {
  transform: translate(50%, 0) rotate(-45deg);
}
`,gk=(t,e)=>M`
${Me("inline-block")} :host {
  --calendar-cell-size: calc((${Kl} + 2 + ${Cn}) * ${K} * 1px);
  --calendar-gap: 2px;
  ${$t}
  color: ${Xe};
}

.title {
  padding: calc(${K} * 2px);
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
  border: calc(${ce} * 1px) solid transparent;
  border-radius: calc(${Ze} * 1px);
}

.interact .day {
  cursor: pointer;
}

.date {
  height: 100%;
}

.inactive .date,
.inactive.disabled::before {
  color: ${Uo};
}

.disabled::before {
  content: '';
  display: inline-block;
  width: calc(var(--calendar-cell-size) * .8);
  height: calc(${ce} * 1px);
  background: currentColor;
  position: absolute;
  margin-top: calc(var(--calendar-cell-size) / 2);
  transform-origin: center;
  z-index: 1;
}

.selected {
  color: ${nt};
  border: 1px solid ${nt};
  background: ${Re};
}

.selected + .selected {
  border-start-start-radius: 0;
  border-end-start-radius: 0;
  border-inline-start-width: 0;
  padding-inline-start: calc(var(--calendar-gap) + (${ce} + ${Ze}) * 1px);
  margin-inline-start: calc((${Ze} * -1px) - var(--calendar-gap));
}

.today.disabled::before {
  color: ${Qn};
}

.today .date {
  color: ${Qn};
  background: ${nt};
  border-radius: 50%;
  position: relative;
}
`.withBehaviors(Le(M`
          .day.selected {
              color: ${b.Highlight};
          }

          .today .date {
              background: ${b.Highlight};
              color: ${b.HighlightText};
          }
      `),new er(pk,mk));class uv extends Us{constructor(){super(...arguments),this.readonly=!0}}X([p({converter:ca})],uv.prototype,"readonly",void 0);const vk=uv.compose({baseName:"calendar",template:Sx,styles:gk,title:yx}),bk=(t,e)=>M`
    ${Me("block")} :host {
      display: block;
      contain: content;
      height: var(--card-height, 100%);
      width: var(--card-width, 100%);
      box-sizing: border-box;
      background: ${Re};
      color: ${Xe};
      border: calc(${ce} * 1px) solid ${To};
      border-radius: calc(${Ri} * 1px);
      box-shadow: ${Y1};
    }

    :host {
      content-visibility: auto;
    }
  `.withBehaviors(Le(M`
        :host {
          background: ${b.Canvas};
          color: ${b.CanvasText};
        }
      `));class rh extends Gm{cardFillColorChanged(e,s){if(s){const i=Yn(s);i!==null&&(this.neutralPaletteSource=s,Re.setValueFor(this,bs.create(i.r,i.g,i.b)))}}neutralPaletteSourceChanged(e,s){if(s){const i=Yn(s),n=bs.create(i.r,i.g,i.b);at.setValueFor(this,Wr.create(n))}}handleChange(e,s){this.cardFillColor||Re.setValueFor(this,i=>no.getValueFor(i).evaluate(i,Re.getValueFor(e)).rest)}connectedCallback(){super.connectedCallback();const e=pl(this);if(e){const s=fe.getNotifier(e);s.subscribe(this,"fillColor"),s.subscribe(this,"neutralPalette"),this.handleChange(e,"fillColor")}}}X([p({attribute:"card-fill-color",mode:"fromView"})],rh.prototype,"cardFillColor",void 0);X([p({attribute:"neutral-palette-source",mode:"fromView"})],rh.prototype,"neutralPaletteSource",void 0);const yk=rh.compose({baseName:"card",baseClass:Gm,template:Cx,styles:bk}),xk=(t,e)=>M`
    ${Me("inline-flex")} :host {
      align-items: center;
      outline: none;
      ${""} user-select: none;
    }

    .control {
      position: relative;
      width: calc((${Pe} / 2 + ${K}) * 1px);
      height: calc((${Pe} / 2 + ${K}) * 1px);
      box-sizing: border-box;
      border-radius: calc(${Ze} * 1px);
      border: calc(${ce} * 1px) solid ${Ko};
      background: ${Zu};
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      ${$t}
      color: ${Xe};
      ${""} padding-inline-start: calc(${K} * 2px + 2px);
      margin-inline-end: calc(${K} * 2px + 2px);
      cursor: pointer;
    }

    slot[name='checked-indicator'],
    slot[name='indeterminate-indicator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      fill: ${Xe};
      opacity: 0;
      pointer-events: none;
    }

    slot[name='indeterminate-indicator'] {
      position: absolute;
      top: 0;
    }

    :host(.checked) slot[name='checked-indicator'],
    :host(.checked) slot[name='indeterminate-indicator'] {
      fill: ${Qn};
    }

    :host(:not(.disabled):hover) .control {
      background: ${Xu};
      border-color: ${sh};
    }

    :host(:not(.disabled):active) .control {
      background: ${Qu};
      border-color: ${ih};
    }

    :host(:${_e}) .control {
      background: ${Ju};
      ${ba}
    }

    :host(.checked) .control {
      background: ${nt};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${ni};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${oi};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${Ys};
    }

    :host(.checked:not(.indeterminate)) slot[name='checked-indicator'],
    :host(.indeterminate) slot[name='indeterminate-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${As};
    }
  `.withBehaviors(Le(M`
        .control {
          border-color: ${b.FieldText};
          background: ${b.Field};
        }
        :host(:not(.disabled):hover) .control,
        :host(:not(.disabled):active) .control {
          border-color: ${b.Highlight};
          background: ${b.Field};
        }
        slot[name='checked-indicator'],
        slot[name='indeterminate-indicator'] {
          fill: ${b.FieldText};
        }
        :host(:${_e}) .control {
          forced-color-adjust: none;
          outline-color: ${b.FieldText};
          background: ${b.Field};
          border-color: ${b.Highlight};
        }
        :host(.checked) .control {
          background: ${b.Highlight};
          border-color: ${b.Highlight};
        }
        :host(.checked:not(.disabled):hover) .control,
        :host(.checked:not(.disabled):active) .control {
          background: ${b.HighlightText};
          border-color: ${b.Highlight};
        }
        :host(.checked) slot[name='checked-indicator'],
        :host(.checked) slot[name='indeterminate-indicator'] {
          fill: ${b.HighlightText};
        }
        :host(.checked:hover ) .control slot[name='checked-indicator'],
        :host(.checked:hover ) .control slot[name='indeterminate-indicator'] {
          fill: ${b.Highlight};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .control {
          border-color: ${b.GrayText};
          background: ${b.Field};
        }
        :host(.disabled) slot[name='checked-indicator'],
        :host(.checked.disabled:hover) .control slot[name='checked-indicator'],
        :host(.disabled) slot[name='indeterminate-indicator'],
        :host(.checked.disabled:hover) .control slot[name='indeterminate-indicator'] {
          fill: ${b.GrayText};
        }
      `)),wk=jl.compose({baseName:"checkbox",template:Ix,styles:xk,checkedIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>
    </svg>
  `,indeterminateIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 8z"/>
    </svg>
  `}),ep=".control",Na=":not([disabled]):not([open])",tp="[disabled]",hv=(t,e)=>M`
    ${Me("inline-flex")}
    
    :host {
      border-radius: calc(${Ze} * 1px);
      box-sizing: border-box;
      color: ${Xe};
      fill: currentcolor;
      font-family: ${Ws};
      position: relative;
      user-select: none;
      min-width: 250px;
      vertical-align: top;
    }

    .listbox {
      box-shadow: ${iv};
      background: ${Re};
      border-radius: calc(${Ri} * 1px);
      box-sizing: border-box;
      display: inline-flex;
      flex-direction: column;
      left: 0;
      max-height: calc(var(--max-height) - (${Pe} * 1px));
      padding: calc((${K} - ${ce} ) * 1px);
      overflow-y: auto;
      position: absolute;
      width: 100%;
      z-index: 1;
      margin: 1px 0;
      border: calc(${ce} * 1px) solid transparent;
    }

    .listbox[hidden] {
      display: none;
    }

    .control {
      border: calc(${ce} * 1px) solid transparent;
      border-radius: calc(${Ze} * 1px);
      height: calc(${Pe} * 1px);
      align-items: center;
      box-sizing: border-box;
      cursor: pointer;
      display: flex;
      ${$t}
      min-height: 100%;
      padding: 0 calc(${K} * 2.25px);
      width: 100%;
    }

    :host(:${_e}) {
      ${qs}
    }

    :host([disabled]) .control {
      cursor: ${Ys};
      opacity: ${As};
      user-select: none;
    }

    :host([open][position='above']) .listbox {
      bottom: calc((${Pe} + ${K} * 2) * 1px);
    }

    :host([open][position='below']) .listbox {
      top: calc((${Pe} + ${K} * 2) * 1px);
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
  `,$k=(t,e)=>M`
    :host([open]) .listbox {
      background: ${b.ButtonFace};
      border-color: ${b.CanvasText};
    }
  `,kk=(t,e)=>hv().withBehaviors(gt("outline",nh(t,e,Na,tp)),gt("filled",tr(t,e,ep,Na).withBehaviors(Le(sr(t,e,ep,Na)))),gt("stealth",oh(t,e,Na,tp)),Le($k())),vd=".control",bd=":not([disabled]):not([open])",_k=(t,e)=>M`
    ${hv()}

    ${ya()}

    :host(:empty) .listbox {
      display: none;
    }

    :host([disabled]) *,
    :host([disabled]) {
      cursor: ${Ys};
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
      ${$t}
      height: calc(100% - ${ce} * 1px));
      margin: auto 0;
      width: 100%;
      outline: none;
    }
  `.withBehaviors(gt("outline",xa(t,e,vd,bd)),gt("filled",tr(t,e,vd,bd)),Le(sr(t,e,vd,bd)));class fv extends Ui{appearanceChanged(e,s){e!==s&&(this.classList.add(s),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&Re.setValueFor(this.listbox,ga)}}X([p({mode:"fromView"})],fv.prototype,"appearance",void 0);const Sk=fv.compose({baseName:"combobox",baseClass:Ui,shadowOptions:{delegatesFocus:!0},template:Ex,styles:_k,indicator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `}),Ck=(t,e)=>M`
  :host {
    display: flex;
    position: relative;
    flex-direction: column;
  }
`,Ik=(t,e)=>M`
    :host {
      display: grid;
      padding: 1px 0;
      box-sizing: border-box;
      width: 100%;
      border-bottom: calc(${ce} * 1px) solid ${yl};
    }

    :host(.header) {
    }

    :host(.sticky-header) {
      background: ${Re};
      position: sticky;
      top: 0;
    }
  `.withBehaviors(Le(M`
        :host {
        }
      `)),Tk=(t,e)=>M`
    :host {
      padding: calc((${K} + ${Xt} - ${ce}) * 1px) calc(((${K} * 3) + ${Xt} - ${ce}) * 1px);
      color: ${Xe};
      box-sizing: border-box;
      ${$t}
      border: transparent calc(${ce} * 1px) solid;
      overflow: hidden;
      white-space: nowrap;
      border-radius: calc(${Ze} * 1px);
    }

    :host(.column-header) {
      font-weight: 600;
    }

    :host(:${_e}) {
      ${qs}
    }
  `.withBehaviors(Le(M`
        :host {
          forced-color-adjust: none;
          background: ${b.Field};
          color: ${b.FieldText};
        }

        :host(:${_e}) {
          outline-color: ${b.FieldText};
        }
      `)),Fk=ji.compose({baseName:"data-grid-cell",template:bx,styles:Tk}),Dk=Wt.compose({baseName:"data-grid-row",template:vx,styles:Ik}),Rk=Ot.compose({baseName:"data-grid",template:hx,styles:Ck}),ah={toView(t){return t==null?null:t==null?void 0:t.toColorString()},fromView(t){if(t==null)return null;const e=Yn(t);return e?bs.create(e.r,e.g,e.b):null}},sp=M`
  :host {
    background-color: ${Re};
    color: ${Xe};
  }
`.withBehaviors(Le(M`
      :host {
        background-color: ${b.Canvas};
        box-shadow: 0 0 0 1px ${b.CanvasText};
        color: ${b.CanvasText};
      }
    `));function oe(t){return(e,s)=>{e[s+"Changed"]=function(i,n){n!=null?t.setValueFor(this,n):t.deleteValueFor(this)}}}class ne extends $e{constructor(){super(),this.noPaint=!1;const e={handleChange:this.noPaintChanged.bind(this)};fe.getNotifier(this).subscribe(e,"fillColor"),fe.getNotifier(this).subscribe(e,"baseLayerLuminance")}connectedCallback(){super.connectedCallback(),this.noPaintChanged()}noPaintChanged(){!this.noPaint&&(this.fillColor!==void 0||this.baseLayerLuminance)?this.$fastController.addStyles(sp):this.$fastController.removeStyles(sp)}}X([p({attribute:"no-paint",mode:"boolean"})],ne.prototype,"noPaint",void 0);X([p({attribute:"fill-color",converter:ah,mode:"fromView"}),oe(Re)],ne.prototype,"fillColor",void 0);X([p({attribute:"accent-base-color",converter:ah,mode:"fromView"}),oe(tc)],ne.prototype,"accentBaseColor",void 0);X([p({attribute:"neutral-base-color",converter:ah,mode:"fromView"}),oe(ec)],ne.prototype,"neutralBaseColor",void 0);X([p({converter:se}),oe(Cn)],ne.prototype,"density",void 0);X([p({attribute:"design-unit",converter:se}),oe(K)],ne.prototype,"designUnit",void 0);X([p({attribute:"direction"}),oe(il)],ne.prototype,"direction",void 0);X([p({attribute:"base-height-multiplier",converter:se}),oe(Kl)],ne.prototype,"baseHeightMultiplier",void 0);X([p({attribute:"base-horizontal-spacing-multiplier",converter:se}),oe(E$)],ne.prototype,"baseHorizontalSpacingMultiplier",void 0);X([p({attribute:"control-corner-radius",converter:se}),oe(Ze)],ne.prototype,"controlCornerRadius",void 0);X([p({attribute:"layer-corner-radius",converter:se}),oe(Ri)],ne.prototype,"layerCornerRadius",void 0);X([p({attribute:"stroke-width",converter:se}),oe(ce)],ne.prototype,"strokeWidth",void 0);X([p({attribute:"focus-stroke-width",converter:se}),oe(Xt)],ne.prototype,"focusStrokeWidth",void 0);X([p({attribute:"disabled-opacity",converter:se}),oe(As)],ne.prototype,"disabledOpacity",void 0);X([p({attribute:"type-ramp-minus-2-font-size"}),oe(zu)],ne.prototype,"typeRampMinus2FontSize",void 0);X([p({attribute:"type-ramp-minus-2-line-height"}),oe(fg)],ne.prototype,"typeRampMinus2LineHeight",void 0);X([p({attribute:"type-ramp-minus-1-font-size"}),oe(Hu)],ne.prototype,"typeRampMinus1FontSize",void 0);X([p({attribute:"type-ramp-minus-1-line-height"}),oe(Nu)],ne.prototype,"typeRampMinus1LineHeight",void 0);X([p({attribute:"type-ramp-base-font-size"}),oe(Vu)],ne.prototype,"typeRampBaseFontSize",void 0);X([p({attribute:"type-ramp-base-line-height"}),oe(hg)],ne.prototype,"typeRampBaseLineHeight",void 0);X([p({attribute:"type-ramp-plus-1-font-size"}),oe(Bu)],ne.prototype,"typeRampPlus1FontSize",void 0);X([p({attribute:"type-ramp-plus-1-line-height"}),oe(pg)],ne.prototype,"typeRampPlus1LineHeight",void 0);X([p({attribute:"type-ramp-plus-2-font-size"}),oe(ju)],ne.prototype,"typeRampPlus2FontSize",void 0);X([p({attribute:"type-ramp-plus-2-line-height"}),oe(mg)],ne.prototype,"typeRampPlus2LineHeight",void 0);X([p({attribute:"type-ramp-plus-3-font-size"}),oe(Uu)],ne.prototype,"typeRampPlus3FontSize",void 0);X([p({attribute:"type-ramp-plus-3-line-height"}),oe(gg)],ne.prototype,"typeRampPlus3LineHeight",void 0);X([p({attribute:"type-ramp-plus-4-font-size"}),oe(Yu)],ne.prototype,"typeRampPlus4FontSize",void 0);X([p({attribute:"type-ramp-plus-4-line-height"}),oe(vg)],ne.prototype,"typeRampPlus4LineHeight",void 0);X([p({attribute:"type-ramp-plus-5-font-size"}),oe(Wu)],ne.prototype,"typeRampPlus5FontSize",void 0);X([p({attribute:"type-ramp-plus-5-line-height"}),oe(bg)],ne.prototype,"typeRampPlus5LineHeight",void 0);X([p({attribute:"type-ramp-plus-6-font-size"}),oe(qu)],ne.prototype,"typeRampPlus6FontSize",void 0);X([p({attribute:"type-ramp-plus-6-line-height"}),oe(yg)],ne.prototype,"typeRampPlus6LineHeight",void 0);X([p({attribute:"accent-fill-rest-delta",converter:se}),oe(Wd)],ne.prototype,"accentFillRestDelta",void 0);X([p({attribute:"accent-fill-hover-delta",converter:se}),oe(qd)],ne.prototype,"accentFillHoverDelta",void 0);X([p({attribute:"accent-fill-active-delta",converter:se}),oe(Gd)],ne.prototype,"accentFillActiveDelta",void 0);X([p({attribute:"accent-fill-focus-delta",converter:se}),oe(Zd)],ne.prototype,"accentFillFocusDelta",void 0);X([p({attribute:"accent-foreground-rest-delta",converter:se}),oe(xg)],ne.prototype,"accentForegroundRestDelta",void 0);X([p({attribute:"accent-foreground-hover-delta",converter:se}),oe(wg)],ne.prototype,"accentForegroundHoverDelta",void 0);X([p({attribute:"accent-foreground-active-delta",converter:se}),oe($g)],ne.prototype,"accentForegroundActiveDelta",void 0);X([p({attribute:"accent-foreground-focus-delta",converter:se}),oe(kg)],ne.prototype,"accentForegroundFocusDelta",void 0);X([p({attribute:"neutral-fill-rest-delta",converter:se}),oe(_g)],ne.prototype,"neutralFillRestDelta",void 0);X([p({attribute:"neutral-fill-hover-delta",converter:se}),oe(Sg)],ne.prototype,"neutralFillHoverDelta",void 0);X([p({attribute:"neutral-fill-active-delta",converter:se}),oe(Cg)],ne.prototype,"neutralFillActiveDelta",void 0);X([p({attribute:"neutral-fill-focus-delta",converter:se}),oe(Ig)],ne.prototype,"neutralFillFocusDelta",void 0);X([p({attribute:"neutral-fill-input-rest-delta",converter:se}),oe(Tg)],ne.prototype,"neutralFillInputRestDelta",void 0);X([p({attribute:"neutral-fill-input-hover-delta",converter:se}),oe(Fg)],ne.prototype,"neutralFillInputHoverDelta",void 0);X([p({attribute:"neutral-fill-input-active-delta",converter:se}),oe(Dg)],ne.prototype,"neutralFillInputActiveDelta",void 0);X([p({attribute:"neutral-fill-input-focus-delta",converter:se}),oe(Rg)],ne.prototype,"neutralFillInputFocusDelta",void 0);X([p({attribute:"neutral-fill-layer-rest-delta",converter:se}),oe(yn)],ne.prototype,"neutralFillLayerRestDelta",void 0);X([p({attribute:"neutral-fill-stealth-rest-delta",converter:se}),oe(Eg)],ne.prototype,"neutralFillStealthRestDelta",void 0);X([p({attribute:"neutral-fill-stealth-hover-delta",converter:se}),oe(Og)],ne.prototype,"neutralFillStealthHoverDelta",void 0);X([p({attribute:"neutral-fill-stealth-active-delta",converter:se}),oe(Ag)],ne.prototype,"neutralFillStealthActiveDelta",void 0);X([p({attribute:"neutral-fill-stealth-focus-delta",converter:se}),oe(Pg)],ne.prototype,"neutralFillStealthFocusDelta",void 0);X([p({attribute:"neutral-fill-strong-hover-delta",converter:se}),oe(Lg)],ne.prototype,"neutralFillStrongHoverDelta",void 0);X([p({attribute:"neutral-fill-strong-active-delta",converter:se}),oe(Mg)],ne.prototype,"neutralFillStrongActiveDelta",void 0);X([p({attribute:"neutral-fill-strong-focus-delta",converter:se}),oe(Vg)],ne.prototype,"neutralFillStrongFocusDelta",void 0);X([p({attribute:"base-layer-luminance",converter:se}),oe(In)],ne.prototype,"baseLayerLuminance",void 0);X([p({attribute:"neutral-stroke-divider-rest-delta",converter:se}),oe(qg)],ne.prototype,"neutralStrokeDividerRestDelta",void 0);X([p({attribute:"neutral-stroke-rest-delta",converter:se}),oe(Hg)],ne.prototype,"neutralStrokeRestDelta",void 0);X([p({attribute:"neutral-stroke-hover-delta",converter:se}),oe(Ng)],ne.prototype,"neutralStrokeHoverDelta",void 0);X([p({attribute:"neutral-stroke-active-delta",converter:se}),oe(zg)],ne.prototype,"neutralStrokeActiveDelta",void 0);X([p({attribute:"neutral-stroke-focus-delta",converter:se}),oe(Bg)],ne.prototype,"neutralStrokeFocusDelta",void 0);const Ek=ne.compose({baseName:"design-system-provider",template:N` <slot></slot> `,styles:M`
    ${Me("block")}
  `}),Ok=(t,e)=>M`
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
    box-shadow: ${X1};
    margin-top: auto;
    margin-bottom: auto;
    border-radius: calc(${Ri} * 1px);
    width: var(--dialog-width);
    height: var(--dialog-height);
    background: ${Re};
    z-index: 1;
    border: calc(${ce} * 1px) solid transparent;
  }
`,Ak=zs.compose({baseName:"dialog",template:Wx,styles:Ok}),Pk=(t,e)=>M`
    ${Me("block")} :host {
      box-sizing: content-box;
      height: 0;
      border: none;
      border-top: calc(${ce} * 1px) solid ${yl};
    }

    :host([orientation="vertical"]) {
      border: none;
      height: 100%;
      margin: 0 calc(${K} * 1px);
      border-left: calc(${ce} * 1px) solid ${yl};
  }
  `,Lk=Yl.compose({baseName:"divider",template:ow,styles:Pk}),Mk=(t,e)=>M`
    ${Me("inline-flex")} :host {
      height: calc((${Pe} + ${K}) * 1px);
      justify-content: center;
      align-items: center;
      fill: currentcolor;
      color: ${Kg};
      background: padding-box linear-gradient(${Hs}, ${Hs}),
        border-box ${eh};
      box-sizing: border-box;
      border: calc(${ce} * 1px) solid transparent;
      border-radius: calc(${Ze} * 1px);
      padding: 0;
    }

    :host(.disabled) {
      opacity: ${As};
      cursor: ${Ys};
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
      color: ${v1};
    }

    :host(:not(.disabled):active) {
      color: ${b1};
    }

    :host(:${_e}) {
      ${qs}
    }

    :host::-moz-focus-inner {
      border: 0;
    }
  `.withBehaviors(Le(M`
        :host {
          background: ${b.ButtonFace};
          border-color: ${b.ButtonText};
        }
        :host .next,
        :host .previous {
          color: ${b.ButtonText};
          fill: currentcolor;
        }
        :host(:not(.disabled):hover) {
          background: ${b.Highlight};
        }
        :host(:not(.disabled):hover) .next,
        :host(:not(.disabled):hover) .previous {
          color: ${b.HighlightText};
          fill: currentcolor;
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled),
        :host(.disabled) .next,
        :host(.disabled) .previous {
          border-color: ${b.GrayText};
          color: ${b.GrayText};
          fill: currentcolor;
        }
        :host(:${_e}) {
          forced-color-adjust: none;
          outline-color: ${b.Highlight};
        }
      `)),Vk=Wl.compose({baseName:"flipper",template:aw,styles:Mk,next:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.57 11.84A1 1 0 016 11.02V4.98a1 1 0 011.57-.82l3.79 2.62c.85.59.85 1.85 0 2.44l-3.79 2.62z"/>
    </svg>
  `,previous:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.43 11.84a1 1 0 001.57-.82V4.98a1 1 0 00-1.57-.82L5.64 6.78c-.85.59-.85 1.85 0 2.44l3.79 2.62z"/>
    </svg>
  `}),Hk=M`
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
`,Nk=M`
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
`,zk=M`
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
`.withBehaviors(new er(Hk,Nk)),Bk=(t,e)=>M`
  ${Me("block")} :host {
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
`;class jk extends Yi{connectedCallback(){super.connectedCallback(),this.view!=="mobile"&&this.$fastController.addStyles(zk)}}const Uk=jk.compose({baseName:"horizontal-scroll",baseClass:Yi,template:Sw,styles:Bk,nextFlipper:N`
    <fluent-flipper @click="${t=>t.scrollToNext()}" aria-hidden="${t=>t.flippersHiddenFromAT}"></fluent-flipper>
  `,previousFlipper:N`
    <fluent-flipper
      @click="${t=>t.scrollToPrevious()}"
      direction="previous"
      aria-hidden="${t=>t.flippersHiddenFromAT}"
    ></fluent-flipper>
  `}),Yk=(t,e)=>M`
    ${Me("inline-flex")} :host {
      border: calc(${ce} * 1px) solid ${Gr};
      border-radius: calc(${Ze} * 1px);
      box-sizing: border-box;
      flex-direction: column;
      padding: calc(${K} * 1px) 0;
    }

    ::slotted(${t.tagFor(wi)}) {
      margin: 0 calc(${K} * 1px);
    }

    :host(:focus-within:not([disabled])) {
      ${qs}
    }
  `;class Wk extends $s{}const qk=Wk.compose({baseName:"listbox",template:cw,styles:Yk}),Gk=(t,e)=>M`
    ${Me("inline-flex")} :host {
      position: relative;
      ${$t}
      background: ${zo};
      border-radius: calc(${Ze} * 1px);
      border: calc(${ce} * 1px) solid transparent;
      box-sizing: border-box;
      color: ${Xe};
      cursor: pointer;
      fill: currentcolor;
      height: calc(${Pe} * 1px);
      overflow: hidden;
      align-items: center;
      padding: 0 calc(((${K} * 3) - ${ce} - 1) * 1px);
      user-select: none;
      white-space: nowrap;
    }

    :host::before {
      content: '';
      display: block;
      position: absolute;
      left: calc((${Xt} - ${ce}) * 1px);
      top: calc((${Pe} / 4) - ${Xt} * 1px);
      width: 3px;
      height: calc((${Pe} / 2) * 1px);
      background: transparent;
      border-radius: calc(${Ze} * 1px);
    }

    :host(:not([disabled]):hover) {
      background: ${Bo};
    }

    :host(:not([disabled]):active) {
      background: ${jo};
    }

    :host(:not([disabled]):active)::before {
      background: ${nt};
      height: calc(((${Pe} / 2) - 6) * 1px);
    }

    :host([aria-selected='true'])::before {
      background: ${nt};
    }

    :host(:${_e}) {
      ${qs}
      background: ${g1};
    }

    :host([aria-selected='true']) {
      background: ${Jn};
    }

    :host(:not([disabled])[aria-selected='true']:hover) {
      background: ${Ku};
    }

    :host(:not([disabled])[aria-selected='true']:active) {
      background: ${p1};
    }

    :host(:not([disabled]):not([aria-selected='true']):hover) {
      background: ${Bo};
    }

    :host(:not([disabled]):not([aria-selected='true']):active) {
      background: ${jo};
    }

    :host([disabled]) {
      cursor: ${Ys};
      opacity: ${As};
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
  `.withBehaviors(new er(null,M`
      :host::before {
        right: calc((${Xt} - ${ce}) * 1px);
      }
    `),Le(M`
        :host {
          background: ${b.ButtonFace};
          border-color: ${b.ButtonFace};
          color: ${b.ButtonText};
        }
        :host(:not([disabled]):not([aria-selected="true"]):hover),
        :host(:not([disabled])[aria-selected="true"]:hover),
        :host([aria-selected="true"]) {
          forced-color-adjust: none;
          background: ${b.Highlight};
          color: ${b.HighlightText};
        }
        :host(:not([disabled]):active)::before,
        :host([aria-selected='true'])::before {
          background: ${b.HighlightText};
        }
        :host([disabled]),
        :host([disabled]:not([aria-selected='true']):hover) {
          background: ${b.Canvas};
          color: ${b.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host(:${_e}) {
          outline-color: ${b.CanvasText};
        }
      `)),Zk=wi.compose({baseName:"option",template:lw,styles:Gk}),Xk=(t,e)=>M`
    ${Me("block")} :host {
      background: ${ga};
      border: calc(${ce} * 1px) solid transparent;
      border-radius: calc(${Ri} * 1px);
      box-shadow: ${iv};
      padding: calc((${K} - ${ce}) * 1px) 0;
      max-width: 368px;
      min-width: 64px;
    }

    :host([slot='submenu']) {
      width: max-content;
      margin: 0 calc(${K} * 2px);
    }

    ::slotted(${t.tagFor(Es)}) {
      margin: 0 calc(${K} * 1px);
    }

    ::slotted(${t.tagFor(Yl)}) {
      margin: calc(${K} * 1px) 0;
    }

    ::slotted(hr) {
      box-sizing: content-box;
      height: 0;
      margin: calc(${K} * 1px) 0;
      border: none;
      border-top: calc(${ce} * 1px) solid ${yl};
    }
  `.withBehaviors(Le(M`
        :host([slot='submenu']) {
          background: ${b.Canvas};
          border-color: ${b.CanvasText};
        }
      `));class Qk extends ql{connectedCallback(){super.connectedCallback(),Re.setValueFor(this,ga)}}const Jk=Qk.compose({baseName:"menu",baseClass:ql,template:hw,styles:Xk}),Kk=(t,e)=>M`
    ${Me("grid")} :host {
      contain: layout;
      overflow: visible;
      ${$t}
      box-sizing: border-box;
      height: calc(${Pe} * 1px);
      grid-template-columns: minmax(32px, auto) 1fr minmax(32px, auto);
      grid-template-rows: auto;
      justify-items: center;
      align-items: center;
      padding: 0;
      white-space: nowrap;
      color: ${Xe};
      fill: currentcolor;
      cursor: pointer;
      border-radius: calc(${Ze} * 1px);
      border: calc(${ce} * 1px) solid transparent;
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

    :host(:${_e}) {
      ${qs}
    }

    :host(:not([disabled]):hover) {
      background: ${Bo};
    }

    :host(:not([disabled]):active),
    :host(.expanded) {
      background: ${jo};
      color: ${Xe};
      z-index: 2;
    }

    :host([disabled]) {
      cursor: ${Ys};
      opacity: ${As};
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
      color: ${Uo};
    }

    :host([aria-checked='true']) .checkbox-indicator,
    :host([aria-checked='true']) slot[name='checkbox-indicator'],
    :host([aria-checked='true']) .radio-indicator,
    :host([aria-checked='true']) slot[name='radio-indicator'] {
      display: flex;
    }
  `.withBehaviors(Le(M`
        :host,
        ::slotted([slot='end']:not(svg)) {
          forced-color-adjust: none;
          color: ${b.ButtonText};
          fill: currentcolor;
        }
        :host(:not([disabled]):hover) {
          background: ${b.Highlight};
          color: ${b.HighlightText};
          fill: currentcolor;
        }
        :host(:hover) .start,
        :host(:hover) .end,
        :host(:hover)::slotted(svg),
        :host(:active) .start,
        :host(:active) .end,
        :host(:active)::slotted(svg),
        :host(:hover) ::slotted([slot='end']:not(svg)),
        :host(:${_e}) ::slotted([slot='end']:not(svg)) {
          color: ${b.HighlightText};
          fill: currentcolor;
        }
        :host(.expanded) {
          background: ${b.Highlight};
          color: ${b.HighlightText};
        }
        :host(:${_e}) {
          background: ${b.Highlight};
          outline-color: ${b.ButtonText};
          color: ${b.HighlightText};
          fill: currentcolor;
        }
        :host([disabled]),
        :host([disabled]:hover),
        :host([disabled]:hover) .start,
        :host([disabled]:hover) .end,
        :host([disabled]:hover)::slotted(svg),
        :host([disabled]:${_e}) {
          background: ${b.ButtonFace};
          color: ${b.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host([disabled]:${_e}) {
          outline-color: ${b.GrayText};
        }
        :host .expanded-toggle,
        :host .checkbox,
        :host .radio {
          border-color: ${b.ButtonText};
          background: ${b.HighlightText};
        }
        :host([checked]) .checkbox,
        :host([checked]) .radio {
          background: ${b.HighlightText};
          border-color: ${b.HighlightText};
        }
        :host(:hover) .expanded-toggle,
            :host(:hover) .checkbox,
            :host(:hover) .radio,
            :host(:${_e}) .expanded-toggle,
            :host(:${_e}) .checkbox,
            :host(:${_e}) .radio,
            :host([checked]:hover) .checkbox,
            :host([checked]:hover) .radio,
            :host([checked]:${_e}) .checkbox,
            :host([checked]:${_e}) .radio {
          border-color: ${b.HighlightText};
        }
        :host([aria-checked='true']) {
          background: ${b.Highlight};
          color: ${b.HighlightText};
        }
        :host([aria-checked='true']) .checkbox-indicator,
        :host([aria-checked='true']) ::slotted([slot='checkbox-indicator']),
        :host([aria-checked='true']) ::slotted([slot='radio-indicator']) {
          fill: ${b.Highlight};
        }
        :host([aria-checked='true']) .radio-indicator {
          background: ${b.Highlight};
        }
      `),new er(M`
        .expand-collapse-glyph-container {
          transform: rotate(0deg);
        }
      `,M`
        .expand-collapse-glyph-container {
          transform: rotate(180deg);
        }
      `)),e_=Es.compose({baseName:"menu-item",template:uw,styles:Kk,checkboxIndicator:`
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
  `}),za=".root",t_=(t,e)=>M`
    ${Me("inline-block")}

    ${bc(t,e,za)}

    ${ya()}

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
      padding: 0 calc(${K} * 2px + 1px);
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
  `.withBehaviors(gt("outline",xa(t,e,za)),gt("filled",tr(t,e,za)),Le(sr(t,e,za)));class pv extends hs{connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}X([p],pv.prototype,"appearance",void 0);const s_=pv.compose({baseName:"number-field",baseClass:hs,styles:t_,template:fw,shadowOptions:{delegatesFocus:!0},stepDownGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `,stepUpGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 7.35c.2.2.5.2.7 0L6 4.21l3.15 3.14a.5.5 0 10.7-.7l-3.5-3.5a.5.5 0 00-.7 0l-3.5 3.5a.5.5 0 000 .7z"/>
    </svg>
`}),i_=(t,e)=>M`
    ${Me("flex")} :host {
      align-items: center;
      height: calc((${ce} * 3) * 1px);
    }

    .progress {
      background-color: ${Ko};
      border-radius: calc(${K} * 1px);
      width: 100%;
      height: calc(${ce} * 1px);
      display: flex;
      align-items: center;
      position: relative;
    }

    .determinate {
      background-color: ${nt};
      border-radius: calc(${K} * 1px);
      height: calc((${ce} * 3) * 1px);
      transition: all 0.2s ease-in-out;
      display: flex;
    }

    .indeterminate {
      height: calc((${ce} * 3) * 1px);
      border-radius: calc(${K} * 1px);
      display: flex;
      width: 100%;
      position: relative;
      overflow: hidden;
    }

    .indeterminate-indicator-1 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${nt};
      border-radius: calc(${K} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 40%;
      animation: indeterminate-1 2s infinite;
    }

    .indeterminate-indicator-2 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${nt};
      border-radius: calc(${K} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 60%;
      animation: indeterminate-2 2s infinite;
    }

    :host(.paused) .indeterminate-indicator-1,
    :host(.paused) .indeterminate-indicator-2 {
      animation: none;
      background-color: ${Uo};
      width: 100%;
      opacity: 1;
    }

    :host(.paused) .determinate {
      background-color: ${Uo};
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
  `.withBehaviors(Le(M`
        .indeterminate-indicator-1,
        .indeterminate-indicator-2,
        .determinate,
        .progress {
          background-color: ${b.ButtonText};
        }
        :host(.paused) .indeterminate-indicator-1,
        :host(.paused) .indeterminate-indicator-2,
        :host(.paused) .determinate {
          background-color: ${b.GrayText};
        }
      `));class n_ extends so{}const o_=n_.compose({baseName:"progress",template:xw,styles:i_,indeterminateIndicator1:`
    <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>
  `,indeterminateIndicator2:`
    <span class="indeterminate-indicator-2" part="indeterminate-indicator-2"></span>
  `}),r_=(t,e)=>M`
    ${Me("flex")} :host {
      align-items: center;
      height: calc(${Pe} * 1px);
      width: calc(${Pe} * 1px);
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
      stroke: ${nt};
      fill: none;
      stroke-width: 2px;
      stroke-linecap: round;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
    }

    .indeterminate-indicator-1 {
      stroke: ${nt};
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
      stroke: ${Uo};
    }

    :host(.paused) .determinate {
      stroke: ${Uo};
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
  `.withBehaviors(Le(M`
        .background {
          stroke: ${b.Field};
        }
        .determinate,
        .indeterminate-indicator-1 {
          stroke: ${b.ButtonText};
        }
        :host(.paused) .determinate,
        :host(.paused) .indeterminate-indicator-1 {
          stroke: ${b.GrayText};
        }
      `));class a_ extends so{}const l_=a_.compose({baseName:"progress-ring",template:yw,styles:r_,indeterminateIndicator:`
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
  `}),c_=(t,e)=>M`
    ${Me("inline-flex")} :host {
      --input-size: calc((${Pe} / 2) + ${K});
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
      border: calc(${ce} * 1px) solid ${Ko};
      background: ${Zu};
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      ${$t}
      color: ${Xe};
      ${""} padding-inline-start: calc(${K} * 2px + 2px);
      margin-inline-end: calc(${K} * 2px + 2px);
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
      fill: ${Qn};
      opacity: 0;
      pointer-events: none;
    }

    :host(:not(.disabled):hover) .control {
      background: ${Xu};
      border-color: ${sh};
    }

    :host(:not(.disabled):active) .control {
      background: ${Qu};
      border-color: ${ih};
    }

    :host(:not(.disabled):active) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(:${_e}) .control {
      ${ba}
      background: ${Ju};
    }

    :host(.checked) .control {
      background: ${nt};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${ni};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${oi};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${Ys};
    }

    :host(.checked) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${As};
    }
  `.withBehaviors(Le(M`
        .control {
          background: ${b.Field};
          border-color: ${b.FieldText};
        }
        :host(:not(.disabled):hover) .control,
        :host(:not(.disabled):active) .control {
          border-color: ${b.Highlight};
        }
        :host(:${_e}) .control {
          forced-color-adjust: none;
          background: ${b.Field};
          outline-color: ${b.FieldText};
        }
        :host(.checked:not(.disabled):hover) .control,
        :host(.checked:not(.disabled):active) .control {
          border-color: ${b.Highlight};
          background: ${b.Highlight};
        }
        :host(.checked) slot[name='checked-indicator'] {
          fill: ${b.Highlight};
        }
        :host(.checked:hover) .control slot[name='checked-indicator'] {
          fill: ${b.HighlightText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .label {
          color: ${b.GrayText};
        }
        :host(.disabled) .control,
        :host(.checked.disabled) .control {
          background: ${b.Field};
          border-color: ${b.GrayText};
        }
        :host(.disabled) slot[name='checked-indicator'],
        :host(.checked.disabled) slot[name='checked-indicator'] {
          fill: ${b.GrayText};
        }
      `)),d_=Zl.compose({baseName:"radio",template:$w,styles:c_,checkedIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="4"/>
    </svg>
  `}),u_=(t,e)=>M`
  ${Me("flex")} :host {
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
`,h_=_n.compose({baseName:"radio-group",template:ww,styles:u_}),f_=(t,e)=>N`
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
      <slot ${ut({property:"defaultSlottedNodes",filter:ng})}></slot>
    </label>
    <div class="root" part="root" ${Be("root")}>
      ${us(t,e)}
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
          ${Be("control")}
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
      ${ds(t,e)}
    </div>
  </template>
`,Ba=".root",p_=Je.create("clear-button-hover").withDefault(t=>{const e=ci.getValueFor(t),s=Tn.getValueFor(t);return e.evaluate(t,s.evaluate(t).focus).hover}),m_=Je.create("clear-button-active").withDefault(t=>{const e=ci.getValueFor(t),s=Tn.getValueFor(t);return e.evaluate(t,s.evaluate(t).focus).active}),g_=(t,e)=>M`
    ${Me("inline-block")}

    ${bc(t,e,Ba)}

    ${ya()}

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
      padding: 0 calc(${K} * 2px + 1px);
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
      color: ${Xe};
      fill: currentcolor;
      border: none;
      border-radius: calc(${Ze} * 1px);
      min-width: calc(${Pe} * 1px);
      ${$t}
      outline: none;
      padding: 0 calc((10 + (${K} * 2 * ${Cn})) * 1px);
    }
    .clear-button:hover {
      background: ${p_};
    }
    .clear-button:active {
      background: ${m_};
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
    ::slotted(${t.tagFor(Rs)}) {
      margin-inline-end: 1px;
    }
  `.withBehaviors(gt("outline",xa(t,e,Ba)),gt("filled",tr(t,e,Ba)),Le(sr(t,e,Ba)));let mv=class extends Os{constructor(){super(...arguments),this.appearance="outline"}};X([p],mv.prototype,"appearance",void 0);const v_=mv.compose({baseName:"search",baseClass:Os,template:f_,styles:g_,start:'<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg%22%3E"><path d="M8.5 3a5.5 5.5 0 0 1 4.23 9.02l4.12 4.13a.5.5 0 0 1-.63.76l-.07-.06-4.13-4.12A5.5 5.5 0 1 1 8.5 3Zm0 1a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"/></svg>',shadowOptions:{delegatesFocus:!0}});class gv extends Wi{appearanceChanged(e,s){e!==s&&(this.classList.add(s),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&Re.setValueFor(this.listbox,ga)}}X([p({mode:"fromView"})],gv.prototype,"appearance",void 0);const b_=gv.compose({baseName:"select",baseClass:Wi,template:Dw,styles:kk,indicator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `}),y_=(t,e)=>M`
    ${Me("block")} :host {
      --skeleton-fill-default: ${Jn};
      overflow: hidden;
      width: 100%;
      position: relative;
      background-color: var(--skeleton-fill, var(--skeleton-fill-default));
      --skeleton-animation-gradient-default: linear-gradient(
        270deg,
        var(--skeleton-fill, var(--skeleton-fill-default)) 0%,
        ${Ku} 51%,
        var(--skeleton-fill, var(--skeleton-fill-default)) 100%
      );
      --skeleton-animation-timing-default: ease-in-out;
    }

    :host(.rect) {
      border-radius: calc(${Ze} * 1px);
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

    ${Me("block")} span.shimmer {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: var(--skeleton-animation-gradient, var(--skeleton-animation-gradient-default));
      background-size: 0px 0px / 90% 100%;
      background-repeat: no-repeat;
      background-color: var(--skeleton-animation-fill, ${Jn});
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
  `.withBehaviors(Le(M`
        :host{
          background-color: ${b.CanvasText};
        }
      `)),x_=ha.compose({baseName:"skeleton",template:Rw,styles:y_}),w_=(t,e)=>M`
    ${Me("inline-grid")} :host {
      --thumb-size: calc((${Pe} / 2) + ${K} + (${ce} * 2));
      --thumb-translate: calc(var(--thumb-size) * -0.5 + var(--track-width) / 2);
      --track-overhang: calc((${K} / 2) * -1);
      --track-width: ${K};
      align-items: center;
      width: 100%;
      user-select: none;
      box-sizing: border-box;
      border-radius: calc(${Ze} * 1px);
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
    :host(:${_e}) .thumb-cursor {
      box-shadow: 0 0 0 2px ${Re}, 0 0 0 4px ${mc};
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
      background: padding-box linear-gradient(${Hs}, ${Hs}),
        border-box ${eh};
      border: calc(${ce} * 1px) solid transparent;
      border-radius: 50%;
      box-sizing: border-box;
    }
    .thumb-cursor::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 100%;
      margin: 4px;
      background: ${nt};
    }
    :host(:not(.disabled)) .thumb-cursor:hover::after {
      background: ${ni};
      margin: 3px;
    }
    :host(:not(.disabled)) .thumb-cursor:active::after {
      background: ${oi};
      margin: 5px;
    }
    :host(:not(.disabled)) .thumb-cursor:hover {
      background: padding-box linear-gradient(${Hs}, ${Hs}),
        border-box ${ev};
    }
    :host(:not(.disabled)) .thumb-cursor:active {
      background: padding-box linear-gradient(${Hs}, ${Hs}),
        border-box ${tv};
    }
    .track-start {
      background: ${nt};
      position: absolute;
      height: 100%;
      left: 0;
      border-radius: calc(${Ze} * 1px);
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
      background: ${Kg};
      border: 1px solid ${Ko};
      border-radius: 2px;
      box-sizing: border-box;
      position: absolute;
    }
    :host(.vertical) {
      height: 100%;
      min-height: calc(${K} * 60px);
      min-width: calc(${K} * 20px);
    }
    :host(.vertical) .track-start {
      height: auto;
      width: 100%;
      top: 0;
    }
    :host(.disabled),
    :host(.readonly) {
      cursor: ${Ys};
    }
    :host(.disabled) {
      opacity: ${As};
    }
  `.withBehaviors(Le(M`
        .thumb-cursor {
          forced-color-adjust: none;
          border-color: ${b.FieldText};
          background: ${b.FieldText};
        }
        :host(:not(.disabled)) .thumb-cursor:hover,
        :host(:not(.disabled)) .thumb-cursor:active {
          background: ${b.Highlight};
        }
        .track {
          forced-color-adjust: none;
          background: ${b.FieldText};
        }
        .thumb-cursor::after,
        :host(:not(.disabled)) .thumb-cursor:hover::after,
        :host(:not(.disabled)) .thumb-cursor:active::after {
          background: ${b.Field};
        }
        :host(:${_e}) .thumb-cursor {
          background: ${b.Highlight};
          border-color: ${b.Highlight};
          box-shadow: 0 0 0 1px ${b.Field}, 0 0 0 3px ${b.FieldText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .track,
        :host(.disabled) .thumb-cursor {
          forced-color-adjust: none;
          background: ${b.GrayText};
        }
      `)),$_=Jt.compose({baseName:"slider",template:Ow,styles:w_,thumb:`
    <div class="thumb-cursor"></div>
  `}),k_=(t,e)=>M`
    ${Me("block")} :host {
      ${sv}
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
      width: calc(${ce} * 1px);
      height: calc(${K} * 1px);
      background: ${Ko};
      justify-self: center;
    }
    :host(.vertical) .mark {
      transform: rotate(90deg);
      align-self: center;
    }
    :host(.vertical) .label {
      margin-left: calc((${K} / 2) * 2px);
      align-self: center;
    }
    :host(.disabled) {
      opacity: ${As};
    }
  `.withBehaviors(Le(M`
        .mark {
          forced-color-adjust: none;
          background: ${b.FieldText};
        }
        :host(.disabled) {
          forced-color-adjust: none;
          opacity: 1;
        }
        :host(.disabled) .label {
          color: ${b.GrayText};
        }
        :host(.disabled) .mark {
          background: ${b.GrayText};
        }
      `)),__=qi.compose({baseName:"slider-label",template:Ew,styles:k_}),S_=(t,e)=>M`
    :host([hidden]) {
      display: none;
    }

    ${Me("inline-flex")} :host {
      align-items: center;
      outline: none;
      font-family: ${Ws};
      ${""} user-select: none;
    }

    :host(.disabled) {
      opacity: ${As};
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.disabled) .switch,
    :host(.readonly) .switch,
    :host(.disabled) .status-message,
    :host(.readonly) .status-message {
      cursor: ${Ys};
    }

    .switch {
      position: relative;
      box-sizing: border-box;
      width: calc(((${Pe} / 2) + ${K}) * 2px);
      height: calc(((${Pe} / 2) + ${K}) * 1px);
      background: ${Zu};
      border-radius: calc(${Pe} * 1px);
      border: calc(${ce} * 1px) solid ${Ko};
      cursor: pointer;
    }

    :host(:not(.disabled):hover) .switch {
      background: ${Xu};
      border-color: ${sh};
    }

    :host(:not(.disabled):active) .switch {
      background: ${Qu};
      border-color: ${ih};
    }

    :host(:${_e}) .switch {
      ${ba}
      background: ${Ju};
    }

    :host(.checked) .switch {
      background: ${nt};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .switch {
      background: ${ni};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .switch {
      background: ${oi};
      border-color: transparent;
    }

    slot[name='switch'] {
      position: absolute;
      display: flex;
      border: 1px solid transparent; /* Spacing included in the transform reference box */
      fill: ${Xe};
      transition: all 0.2s ease-in-out;
    }

    .status-message {
      color: ${Xe};
      cursor: pointer;
      ${$t}
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      color: ${Xe};
      ${$t}
      margin-inline-end: calc(${K} * 2px + 2px);
      cursor: pointer;
    }

    ::slotted([slot="checked-message"]),
    ::slotted([slot="unchecked-message"]) {
        margin-inline-start: calc(${K} * 2px + 2px);
    }

    :host(.checked) .switch {
      background: ${nt};
    }

    :host(.checked) .switch slot[name='switch'] {
      fill: ${Qn};
      filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.15));
    }

    :host(.checked:not(.disabled)) .switch:hover {
      background: ${ni};
    }

    :host(.checked:not(.disabled)) .switch:hover slot[name='switch'] {
      fill: ${Gg};
    }

    :host(.checked:not(.disabled)) .switch:active {
      background: ${oi};
    }

    :host(.checked:not(.disabled)) .switch:active slot[name='switch'] {
      fill: ${Zg};
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
  `.withBehaviors(new er(M`
        slot[name='switch'] {
          left: 0;
        }

        :host(.checked) slot[name='switch'] {
          left: 100%;
          transform: translateX(-100%);
        }
      `,M`
        slot[name='switch'] {
          right: 0;
        }

        :host(.checked) slot[name='switch'] {
          right: 100%;
          transform: translateX(100%);
        }
      `),Le(M`
        :host(:not(.disabled)) .switch slot[name='switch'] {
          forced-color-adjust: none;
          fill: ${b.FieldText};
        }
        .switch {
          background: ${b.Field};
          border-color: ${b.FieldText};
        }
        :host(.checked) .switch {
          background: ${b.Highlight};
          border-color: ${b.Highlight};
        }
        :host(:not(.disabled):hover) .switch ,
        :host(:not(.disabled):active) .switch,
        :host(.checked:not(.disabled):hover) .switch {
          background: ${b.HighlightText};
          border-color: ${b.Highlight};
        }
        :host(.checked:not(.disabled)) .switch slot[name="switch"] {
          fill: ${b.HighlightText};
        }
        :host(.checked:not(.disabled):hover) .switch slot[name='switch'] {
          fill: ${b.Highlight};
        }
        :host(:${_e}) .switch {
          forced-color-adjust: none;
          background: ${b.Field}; 
          border-color: ${b.Highlight};
          outline-color: ${b.FieldText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) slot[name='switch'] {
          forced-color-adjust: none;
          fill: ${b.GrayText};
        }
        :host(.disabled) .switch {
          background: ${b.Field};
          border-color: ${b.GrayText};
        }
        .status-message,
        .label {
          color: ${b.FieldText};
        }
      `)),C_=Pu.compose({baseName:"switch",template:Mw,styles:S_,switch:`
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="12" height="12" rx="6"/>
    </svg>
  `}),I_=(t,e)=>M`
      ${Me("grid")} :host {
        box-sizing: border-box;
        ${$t}
        color: ${Xe};
        grid-template-columns: auto 1fr auto;
        grid-template-rows: auto 1fr;
      }

      .tablist {
        display: grid;
        grid-template-rows: calc(${Pe} * 1px); auto;
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
        border-radius: calc(${Ze} * 1px);
        justify-self: center;
        background: ${nt};
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
        margin-inline-start: calc(${Xt} * 1px);
        border-radius: calc(${Ze} * 1px);
        align-self: center;
        background: ${nt};
      }

      :host(.vertical) .activeIndicatorTransition {
        transition: transform 0.2s linear;
      }
    `.withBehaviors(Le(M`
        .activeIndicator,
        :host(.vertical) .activeIndicator {
          background: ${b.Highlight};
        }
      `)),T_=(t,e)=>M`
      ${Me("inline-flex")} :host {
        box-sizing: border-box;
        ${$t}
        height: calc((${Pe} + (${K} * 2)) * 1px);
        padding: 0 calc((6 + (${K} * 2 * ${Cn})) * 1px);
        color: ${Xe};
        border-radius: calc(${Ze} * 1px);
        border: calc(${ce} * 1px) solid transparent;
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
        color: ${Xe};
      }

      :host(:${_e}) {
        ${qs}
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
        color: ${Xe};
      }

      :host(.vertical:hover[aria-selected='true']) {
      }
    `.withBehaviors(Le(M`
          :host {
            forced-color-adjust: none;
            border-color: transparent;
            color: ${b.ButtonText};
            fill: currentcolor;
          }
          :host(:hover),
          :host(.vertical:hover),
          :host([aria-selected='true']:hover) {
            background: transparent;
            color: ${b.Highlight};
            fill: currentcolor;
          }
          :host([aria-selected='true']) {
            background: transparent;
            color: ${b.Highlight};
            fill: currentcolor;
          }
          :host(:${_e}) {
            background: transparent;
            outline-color: ${b.ButtonText};
          }
        `)),F_=rg.compose({baseName:"tab",template:Bw,styles:T_}),D_=(t,e)=>M`
  ${Me("block")} :host {
    box-sizing: border-box;
    ${$t}
    padding: 0 calc((6 + (${K} * 2 * ${Cn})) * 1px);
  }
`,R_=zw.compose({baseName:"tab-panel",template:Nw,styles:D_}),E_=Gi.compose({baseName:"tabs",template:jw,styles:I_}),ja=".control",O_=(t,e)=>M`
    ${Me("inline-flex")}

    ${bc(t,e,ja)}

    ${ya()}

    :host {
      flex-direction: column;
      vertical-align: bottom;
    }

    .control {
      height: calc((${Pe} * 2) * 1px);
      padding: calc(${K} * 1.5px) calc(${K} * 2px + 1px);
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
  `.withBehaviors(gt("outline",xa(t,e,ja)),gt("filled",tr(t,e,ja)),Le(sr(t,e,ja)));class vv extends Kt{appearanceChanged(e,s){e!==s&&(this.classList.add(s),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}X([p],vv.prototype,"appearance",void 0);const A_=vv.compose({baseName:"text-area",baseClass:Kt,template:Ww,styles:O_,shadowOptions:{delegatesFocus:!0}}),Ua=".root",P_=(t,e)=>M`
    ${Me("inline-block")}

    ${bc(t,e,Ua)}

    ${ya()}

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
      padding: 0 calc(${K} * 2px + 1px);
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
  `.withBehaviors(gt("outline",xa(t,e,Ua)),gt("filled",tr(t,e,Ua)),Le(sr(t,e,Ua)));class bv extends ks{appearanceChanged(e,s){e!==s&&(this.classList.add(s),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}X([p],bv.prototype,"appearance",void 0);const L_=bv.compose({baseName:"text-field",baseClass:ks,template:qw,styles:P_,shadowOptions:{delegatesFocus:!0}}),M_=(t,e)=>M`
    ${Me("inline-flex")} :host {
      --toolbar-item-gap: calc(${K} * 1px);
      background: ${Re};
      fill: currentcolor;
      padding: var(--toolbar-item-gap);
      box-sizing: border-box;
      align-items: center;
    }

    :host(${_e}) {
      ${qs}
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
  `.withBehaviors(Le(M`
        :host(:${_e}) {
          outline-color: ${b.Highlight};
          color: ${b.ButtonText};
          forced-color-adjust: none;
        }
      `));class V_ extends Sn{}const H_=V_.compose({baseName:"toolbar",baseClass:Sn,template:Gw,styles:M_}),N_=(t,e)=>M`
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
      border-radius: calc(${Ze} * 1px);
      border: calc(${ce} * 1px) solid ${To};
      background: ${Re};
      color: ${Xe};
      padding: 4px 12px;
      height: fit-content;
      width: fit-content;
      ${$t}
      white-space: nowrap;
      box-shadow: ${q1};
    }

    ${t.tagFor(he)} {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: visible;
      flex-direction: row;
    }

    ${t.tagFor(he)}.right,
    ${t.tagFor(he)}.left {
      flex-direction: column;
    }

    ${t.tagFor(he)}.top .tooltip::after,
    ${t.tagFor(he)}.bottom .tooltip::after,
    ${t.tagFor(he)}.left .tooltip::after,
    ${t.tagFor(he)}.right .tooltip::after {
      content: '';
      width: 12px;
      height: 12px;
      background: ${Re};
      border-top: calc(${ce} * 1px) solid ${To};
      border-left: calc(${ce} * 1px) solid ${To};
      position: absolute;
    }

    ${t.tagFor(he)}.top .tooltip::after {
      transform: translateX(-50%) rotate(225deg);
      bottom: 5px;
      left: 50%;
    }

    ${t.tagFor(he)}.top .tooltip {
      margin-bottom: 12px;
    }

    ${t.tagFor(he)}.bottom .tooltip::after {
      transform: translateX(-50%) rotate(45deg);
      top: 5px;
      left: 50%;
    }

    ${t.tagFor(he)}.bottom .tooltip {
      margin-top: 12px;
    }

    ${t.tagFor(he)}.left .tooltip::after {
      transform: translateY(-50%) rotate(135deg);
      top: 50%;
      right: 5px;
    }

    ${t.tagFor(he)}.left .tooltip {
      margin-right: 12px;
    }

    ${t.tagFor(he)}.right .tooltip::after {
      transform: translateY(-50%) rotate(-45deg);
      top: 50%;
      left: 5px;
    }

    ${t.tagFor(he)}.right .tooltip {
      margin-left: 12px;
    }
  `.withBehaviors(Le(M`
        :host([disabled]) {
          opacity: 1;
        }
        ${t.tagFor(he)}.top .tooltip::after,
        ${t.tagFor(he)}.bottom .tooltip::after,
        ${t.tagFor(he)}.left .tooltip::after,
        ${t.tagFor(he)}.right .tooltip::after {
          content: '';
          width: unset;
          height: unset;
        }
      `));class z_ extends Ft{connectedCallback(){super.connectedCallback(),Re.setValueFor(this,ga)}}const B_=z_.compose({baseName:"tooltip",baseClass:Ft,template:Zw,styles:N_}),j_=(t,e)=>M`
  :host([hidden]) {
    display: none;
  }

  ${Me("flex")} :host {
    flex-direction: column;
    align-items: stretch;
    min-width: fit-content;
    font-size: 0;
  }
`,U_=Ql.compose({baseName:"tree-view",template:Qw,styles:j_}),Y_=M`
  .expand-collapse-button svg {
    transform: rotate(0deg);
  }
  :host(.nested) .expand-collapse-button {
    left: var(--expand-collapse-button-nested-width, calc(${Pe} * -1px));
  }
  :host([selected])::after {
    left: calc(${Xt} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,W_=M`
  .expand-collapse-button svg {
    transform: rotate(180deg);
  }
  :host(.nested) .expand-collapse-button {
    right: var(--expand-collapse-button-nested-width, calc(${Pe} * -1px));
  }
  :host([selected])::after {
    right: calc(${Xt} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,ip=Fs`((${Kl} / 2) * ${K}) + ((${K} * ${Cn}) / 2)`,q_=Je.create("tree-item-expand-collapse-hover").withDefault(t=>{const e=ci.getValueFor(t);return e.evaluate(t,e.evaluate(t).hover).hover}),G_=Je.create("tree-item-expand-collapse-selected-hover").withDefault(t=>{const e=oo.getValueFor(t);return ci.getValueFor(t).evaluate(t,e.evaluate(t).rest).hover}),Z_=(t,e)=>M`
    ${Me("block")} :host {
      contain: content;
      position: relative;
      outline: none;
      color: ${Xe};
      fill: currentcolor;
      cursor: pointer;
      font-family: ${Ws};
      --expand-collapse-button-size: calc(${Pe} * 1px);
      --tree-item-nested-width: 0;
    }

    .positioning-region {
      display: flex;
      position: relative;
      box-sizing: border-box;
      background: ${zo};
      border: calc(${ce} * 1px) solid transparent;
      border-radius: calc(${Ze} * 1px);
      height: calc((${Pe} + 1) * 1px);
    }

    :host(:${_e}) .positioning-region {
      ${qs}
    }

    .positioning-region::before {
      content: '';
      display: block;
      width: var(--tree-item-nested-width);
      flex-shrink: 0;
    }

    :host(:not([disabled])) .positioning-region:hover {
      background: ${Bo};
    }

    :host(:not([disabled])) .positioning-region:active {
      background: ${jo};
    }

    .content-region {
      display: inline-flex;
      align-items: center;
      white-space: nowrap;
      width: 100%;
      height: calc(${Pe} * 1px);
      margin-inline-start: calc(${K} * 2px + 8px);
      ${$t}
    }

    .items {
      display: none;
      ${""} font-size: calc(1em + (${K} + 16) * 1px);
    }

    .expand-collapse-button {
      background: none;
      border: none;
      border-radius: calc(${Ze} * 1px);
      ${""} width: calc((${ip} + (${K} * 2)) * 1px);
      height: calc((${ip} + (${K} * 2)) * 1px);
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
      ${""} margin-inline-end: calc(${K} * 2px + 2px);
    }

    .end {
      ${""} margin-inline-start: calc(${K} * 2px + 2px);
    }

    :host(.expanded) > .items {
      display: block;
    }

    :host([disabled]) {
      opacity: ${As};
      cursor: ${Ys};
    }

    :host(.nested) .content-region {
      position: relative;
      margin-inline-start: var(--expand-collapse-button-size);
    }

    :host(.nested) .expand-collapse-button {
      position: absolute;
    }

    :host(.nested) .expand-collapse-button:hover {
      background: ${q_};
    }

    :host(:not([disabled])[selected]) .positioning-region {
      background: ${Jn};
    }

    :host(:not([disabled])[selected]) .expand-collapse-button:hover {
      background: ${G_};
    }

    :host([selected])::after {
      content: '';
      display: block;
      position: absolute;
      top: calc((${Pe} / 4) * 1px);
      width: 3px;
      height: calc((${Pe} / 2) * 1px);
      ${""} background: ${nt};
      border-radius: calc(${Ze} * 1px);
    }

    ::slotted(fluent-tree-item) {
      --tree-item-nested-width: 1em;
      --expand-collapse-button-nested-width: calc(${Pe} * -1px);
    }
  `.withBehaviors(new er(Y_,W_),Le(M`
        :host {
          color: ${b.ButtonText};
        }
        .positioning-region {
          border-color: ${b.ButtonFace};
          background: ${b.ButtonFace};
        }
        :host(:not([disabled])) .positioning-region:hover,
        :host(:not([disabled])) .positioning-region:active,
        :host(:not([disabled])[selected]) .positioning-region {
          background: ${b.Highlight};
        }
        :host .positioning-region:hover .content-region,
        :host([selected]) .positioning-region .content-region {
          forced-color-adjust: none;
          color: ${b.HighlightText};
        }
        :host([disabled][selected]) .positioning-region .content-region {
          color: ${b.GrayText};
        }
        :host([selected])::after {
          background: ${b.HighlightText};
        }
        :host(:${_e}) .positioning-region {
          forced-color-adjust: none;
          outline-color: ${b.ButtonFace};
        }
        :host([disabled]),
        :host([disabled]) .content-region,
        :host([disabled]) .positioning-region:hover .content-region {
          opacity: 1;
          color: ${b.GrayText};
        }
        :host(.nested) .expand-collapse-button:hover,
        :host(:not([disabled])[selected]) .expand-collapse-button:hover {
          background: ${b.ButtonFace};
          fill: ${b.ButtonText};
        }
      `)),X_=Rt.compose({baseName:"tree-item",template:Xw,styles:Z_,expandCollapseGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>
    </svg>
  `}),Q_={fluentAccordion:H1,fluentAccordionItem:V1,fluentAnchor:ik,fluentAnchoredRegion:ok,fluentBadge:ak,fluentBreadcrumb:ck,fluentBreadcrumbItem:uk,fluentButton:fk,fluentCalendar:vk,fluentCard:yk,fluentCheckbox:wk,fluentCombobox:Sk,fluentDataGrid:Rk,fluentDataGridCell:Fk,fluentDataGridRow:Dk,fluentDesignSystemProvider:Ek,fluentDialog:Ak,fluentDivider:Lk,fluentFlipper:Vk,fluentHorizontalScroll:Uk,fluentListbox:qk,fluentOption:Zk,fluentMenu:Jk,fluentMenuItem:e_,fluentNumberField:s_,fluentProgress:o_,fluentProgressRing:l_,fluentRadio:d_,fluentRadioGroup:h_,fluentSearch:v_,fluentSelect:b_,fluentSkeleton:x_,fluentSlider:$_,fluentSliderLabel:__,fluentSwitch:C_,fluentTabs:E_,fluentTab:F_,fluentTabPanel:R_,fluentTextArea:A_,fluentTextField:L_,fluentToolbar:H_,fluentTooltip:B_,fluentTreeView:U_,fluentTreeItem:X_,register(t,...e){if(t)for(const s in this)s!=="register"&&this[s]().register(t,...e)}};function J_(t){return Qm.getOrCreate(t).withPrefix("fluent")}J_().register(Q_);function lh(t,e){const s=Object.create(null),i=t.split(",");for(let n=0;n<i.length;n++)s[i[n]]=!0;return e?n=>!!s[n.toLowerCase()]:n=>!!s[n]}const ct={},Fo=[],si=()=>{},K_=()=>!1,eS=/^on[^a-z]/,yc=t=>eS.test(t),ch=t=>t.startsWith("onUpdate:"),Bt=Object.assign,dh=(t,e)=>{const s=t.indexOf(e);s>-1&&t.splice(s,1)},tS=Object.prototype.hasOwnProperty,ze=(t,e)=>tS.call(t,e),we=Array.isArray,Do=t=>xc(t)==="[object Map]",yv=t=>xc(t)==="[object Set]",Fe=t=>typeof t=="function",At=t=>typeof t=="string",uh=t=>typeof t=="symbol",vt=t=>t!==null&&typeof t=="object",xv=t=>vt(t)&&Fe(t.then)&&Fe(t.catch),wv=Object.prototype.toString,xc=t=>wv.call(t),sS=t=>xc(t).slice(8,-1),$v=t=>xc(t)==="[object Object]",hh=t=>At(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,nl=lh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wc=t=>{const e=Object.create(null);return s=>e[s]||(e[s]=t(s))},iS=/-(\w)/g,vi=wc(t=>t.replace(iS,(e,s)=>s?s.toUpperCase():"")),nS=/\B([A-Z])/g,ao=wc(t=>t.replace(nS,"-$1").toLowerCase()),$c=wc(t=>t.charAt(0).toUpperCase()+t.slice(1)),yd=wc(t=>t?`on${$c(t)}`:""),Zr=(t,e)=>!Object.is(t,e),xd=(t,e)=>{for(let s=0;s<t.length;s++)t[s](e)},xl=(t,e,s)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:s})},oS=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let np;const Xd=()=>np||(np=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xn(t){if(we(t)){const e={};for(let s=0;s<t.length;s++){const i=t[s],n=At(i)?cS(i):xn(i);if(n)for(const o in n)e[o]=n[o]}return e}else{if(At(t))return t;if(vt(t))return t}}const rS=/;(?![^(]*\))/g,aS=/:([^]+)/,lS=/\/\*[^]*?\*\//g;function cS(t){const e={};return t.replace(lS,"").split(rS).forEach(s=>{if(s){const i=s.split(aS);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ut(t){let e="";if(At(t))e=t;else if(we(t))for(let s=0;s<t.length;s++){const i=Ut(t[s]);i&&(e+=i+" ")}else if(vt(t))for(const s in t)t[s]&&(e+=s+" ");return e.trim()}const dS="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",uS=lh(dS);function kv(t){return!!t||t===""}const wt=t=>At(t)?t:t==null?"":we(t)||vt(t)&&(t.toString===wv||!Fe(t.toString))?JSON.stringify(t,_v,2):String(t),_v=(t,e)=>e&&e.__v_isRef?_v(t,e.value):Do(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((s,[i,n])=>(s[`${i} =>`]=n,s),{})}:yv(e)?{[`Set(${e.size})`]:[...e.values()]}:vt(e)&&!we(e)&&!$v(e)?String(e):e;let Ss;class Sv{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ss,!e&&Ss&&(this.index=(Ss.scopes||(Ss.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const s=Ss;try{return Ss=this,e()}finally{Ss=s}}}on(){Ss=this}off(){Ss=this.parent}stop(e){if(this._active){let s,i;for(s=0,i=this.effects.length;s<i;s++)this.effects[s].stop();for(s=0,i=this.cleanups.length;s<i;s++)this.cleanups[s]();if(this.scopes)for(s=0,i=this.scopes.length;s<i;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0,this._active=!1}}}function Cv(t){return new Sv(t)}function hS(t,e=Ss){e&&e.active&&e.effects.push(t)}function Iv(){return Ss}function fS(t){Ss&&Ss.cleanups.push(t)}const fh=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Tv=t=>(t.w&wn)>0,Fv=t=>(t.n&wn)>0,pS=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=wn},mS=t=>{const{deps:e}=t;if(e.length){let s=0;for(let i=0;i<e.length;i++){const n=e[i];Tv(n)&&!Fv(n)?n.delete(t):e[s++]=n,n.w&=~wn,n.n&=~wn}e.length=s}},wl=new WeakMap;let wr=0,wn=1;const Qd=30;let Ks;const Wn=Symbol(""),Jd=Symbol("");class ph{constructor(e,s=null,i){this.fn=e,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,hS(this,i)}run(){if(!this.active)return this.fn();let e=Ks,s=un;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ks,Ks=this,un=!0,wn=1<<++wr,wr<=Qd?pS(this):op(this),this.fn()}finally{wr<=Qd&&mS(this),wn=1<<--wr,Ks=this.parent,un=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ks===this?this.deferStop=!0:this.active&&(op(this),this.onStop&&this.onStop(),this.active=!1)}}function op(t){const{deps:e}=t;if(e.length){for(let s=0;s<e.length;s++)e[s].delete(t);e.length=0}}let un=!0;const Dv=[];function ir(){Dv.push(un),un=!1}function nr(){const t=Dv.pop();un=t===void 0?!0:t}function ys(t,e,s){if(un&&Ks){let i=wl.get(t);i||wl.set(t,i=new Map);let n=i.get(s);n||i.set(s,n=fh()),Rv(n)}}function Rv(t,e){let s=!1;wr<=Qd?Fv(t)||(t.n|=wn,s=!Tv(t)):s=!t.has(Ks),s&&(t.add(Ks),Ks.deps.push(t))}function Vi(t,e,s,i,n,o){const r=wl.get(t);if(!r)return;let a=[];if(e==="clear")a=[...r.values()];else if(s==="length"&&we(t)){const l=Number(i);r.forEach((c,d)=>{(d==="length"||d>=l)&&a.push(c)})}else switch(s!==void 0&&a.push(r.get(s)),e){case"add":we(t)?hh(s)&&a.push(r.get("length")):(a.push(r.get(Wn)),Do(t)&&a.push(r.get(Jd)));break;case"delete":we(t)||(a.push(r.get(Wn)),Do(t)&&a.push(r.get(Jd)));break;case"set":Do(t)&&a.push(r.get(Wn));break}if(a.length===1)a[0]&&Kd(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Kd(fh(l))}}function Kd(t,e){const s=we(t)?t:[...t];for(const i of s)i.computed&&rp(i);for(const i of s)i.computed||rp(i)}function rp(t,e){(t!==Ks||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function gS(t,e){var s;return(s=wl.get(t))==null?void 0:s.get(e)}const vS=lh("__proto__,__v_isRef,__isVue"),Ev=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(uh)),bS=mh(),yS=mh(!1,!0),xS=mh(!0),ap=wS();function wS(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...s){const i=je(this);for(let o=0,r=this.length;o<r;o++)ys(i,"get",o+"");const n=i[e](...s);return n===-1||n===!1?i[e](...s.map(je)):n}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...s){ir();const i=je(this)[e].apply(this,s);return nr(),i}}),t}function $S(t){const e=je(this);return ys(e,"has",t),e.hasOwnProperty(t)}function mh(t=!1,e=!1){return function(i,n,o){if(n==="__v_isReactive")return!t;if(n==="__v_isReadonly")return t;if(n==="__v_isShallow")return e;if(n==="__v_raw"&&o===(t?e?VS:Mv:e?Lv:Pv).get(i))return i;const r=we(i);if(!t){if(r&&ze(ap,n))return Reflect.get(ap,n,o);if(n==="hasOwnProperty")return $S}const a=Reflect.get(i,n,o);return(uh(n)?Ev.has(n):vS(n))||(t||ys(i,"get",n),e)?a:It(a)?r&&hh(n)?a:a.value:vt(a)?t?Hv(a):lo(a):a}}const kS=Ov(),_S=Ov(!0);function Ov(t=!1){return function(s,i,n,o){let r=s[i];if(Yo(r)&&It(r)&&!It(n))return!1;if(!t&&(!$l(n)&&!Yo(n)&&(r=je(r),n=je(n)),!we(s)&&It(r)&&!It(n)))return r.value=n,!0;const a=we(s)&&hh(i)?Number(i)<s.length:ze(s,i),l=Reflect.set(s,i,n,o);return s===je(o)&&(a?Zr(n,r)&&Vi(s,"set",i,n):Vi(s,"add",i,n)),l}}function SS(t,e){const s=ze(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&s&&Vi(t,"delete",e,void 0),i}function CS(t,e){const s=Reflect.has(t,e);return(!uh(e)||!Ev.has(e))&&ys(t,"has",e),s}function IS(t){return ys(t,"iterate",we(t)?"length":Wn),Reflect.ownKeys(t)}const Av={get:bS,set:kS,deleteProperty:SS,has:CS,ownKeys:IS},TS={get:xS,set(t,e){return!0},deleteProperty(t,e){return!0}},FS=Bt({},Av,{get:yS,set:_S}),gh=t=>t,kc=t=>Reflect.getPrototypeOf(t);function Ya(t,e,s=!1,i=!1){t=t.__v_raw;const n=je(t),o=je(e);s||(e!==o&&ys(n,"get",e),ys(n,"get",o));const{has:r}=kc(n),a=i?gh:s?yh:Xr;if(r.call(n,e))return a(t.get(e));if(r.call(n,o))return a(t.get(o));t!==n&&t.get(e)}function Wa(t,e=!1){const s=this.__v_raw,i=je(s),n=je(t);return e||(t!==n&&ys(i,"has",t),ys(i,"has",n)),t===n?s.has(t):s.has(t)||s.has(n)}function qa(t,e=!1){return t=t.__v_raw,!e&&ys(je(t),"iterate",Wn),Reflect.get(t,"size",t)}function lp(t){t=je(t);const e=je(this);return kc(e).has.call(e,t)||(e.add(t),Vi(e,"add",t,t)),this}function cp(t,e){e=je(e);const s=je(this),{has:i,get:n}=kc(s);let o=i.call(s,t);o||(t=je(t),o=i.call(s,t));const r=n.call(s,t);return s.set(t,e),o?Zr(e,r)&&Vi(s,"set",t,e):Vi(s,"add",t,e),this}function dp(t){const e=je(this),{has:s,get:i}=kc(e);let n=s.call(e,t);n||(t=je(t),n=s.call(e,t)),i&&i.call(e,t);const o=e.delete(t);return n&&Vi(e,"delete",t,void 0),o}function up(){const t=je(this),e=t.size!==0,s=t.clear();return e&&Vi(t,"clear",void 0,void 0),s}function Ga(t,e){return function(i,n){const o=this,r=o.__v_raw,a=je(r),l=e?gh:t?yh:Xr;return!t&&ys(a,"iterate",Wn),r.forEach((c,d)=>i.call(n,l(c),l(d),o))}}function Za(t,e,s){return function(...i){const n=this.__v_raw,o=je(n),r=Do(o),a=t==="entries"||t===Symbol.iterator&&r,l=t==="keys"&&r,c=n[t](...i),d=s?gh:e?yh:Xr;return!e&&ys(o,"iterate",l?Jd:Wn),{next(){const{value:u,done:f}=c.next();return f?{value:u,done:f}:{value:a?[d(u[0]),d(u[1])]:d(u),done:f}},[Symbol.iterator](){return this}}}}function tn(t){return function(...e){return t==="delete"?!1:this}}function DS(){const t={get(o){return Ya(this,o)},get size(){return qa(this)},has:Wa,add:lp,set:cp,delete:dp,clear:up,forEach:Ga(!1,!1)},e={get(o){return Ya(this,o,!1,!0)},get size(){return qa(this)},has:Wa,add:lp,set:cp,delete:dp,clear:up,forEach:Ga(!1,!0)},s={get(o){return Ya(this,o,!0)},get size(){return qa(this,!0)},has(o){return Wa.call(this,o,!0)},add:tn("add"),set:tn("set"),delete:tn("delete"),clear:tn("clear"),forEach:Ga(!0,!1)},i={get(o){return Ya(this,o,!0,!0)},get size(){return qa(this,!0)},has(o){return Wa.call(this,o,!0)},add:tn("add"),set:tn("set"),delete:tn("delete"),clear:tn("clear"),forEach:Ga(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{t[o]=Za(o,!1,!1),s[o]=Za(o,!0,!1),e[o]=Za(o,!1,!0),i[o]=Za(o,!0,!0)}),[t,s,e,i]}const[RS,ES,OS,AS]=DS();function vh(t,e){const s=e?t?AS:OS:t?ES:RS;return(i,n,o)=>n==="__v_isReactive"?!t:n==="__v_isReadonly"?t:n==="__v_raw"?i:Reflect.get(ze(s,n)&&n in i?s:i,n,o)}const PS={get:vh(!1,!1)},LS={get:vh(!1,!0)},MS={get:vh(!0,!1)},Pv=new WeakMap,Lv=new WeakMap,Mv=new WeakMap,VS=new WeakMap;function HS(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function NS(t){return t.__v_skip||!Object.isExtensible(t)?0:HS(sS(t))}function lo(t){return Yo(t)?t:bh(t,!1,Av,PS,Pv)}function Vv(t){return bh(t,!1,FS,LS,Lv)}function Hv(t){return bh(t,!0,TS,MS,Mv)}function bh(t,e,s,i,n){if(!vt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=n.get(t);if(o)return o;const r=NS(t);if(r===0)return t;const a=new Proxy(t,r===2?i:s);return n.set(t,a),a}function hn(t){return Yo(t)?hn(t.__v_raw):!!(t&&t.__v_isReactive)}function Yo(t){return!!(t&&t.__v_isReadonly)}function $l(t){return!!(t&&t.__v_isShallow)}function Nv(t){return hn(t)||Yo(t)}function je(t){const e=t&&t.__v_raw;return e?je(e):t}function _c(t){return xl(t,"__v_skip",!0),t}const Xr=t=>vt(t)?lo(t):t,yh=t=>vt(t)?Hv(t):t;function zv(t){un&&Ks&&(t=je(t),Rv(t.dep||(t.dep=fh())))}function Bv(t,e){t=je(t);const s=t.dep;s&&Kd(s)}function It(t){return!!(t&&t.__v_isRef===!0)}function dt(t){return jv(t,!1)}function zS(t){return jv(t,!0)}function jv(t,e){return It(t)?t:new BS(t,e)}class BS{constructor(e,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?e:je(e),this._value=s?e:Xr(e)}get value(){return zv(this),this._value}set value(e){const s=this.__v_isShallow||$l(e)||Yo(e);e=s?e:je(e),Zr(e,this._rawValue)&&(this._rawValue=e,this._value=s?e:Xr(e),Bv(this))}}function ve(t){return It(t)?t.value:t}const jS={get:(t,e,s)=>ve(Reflect.get(t,e,s)),set:(t,e,s,i)=>{const n=t[e];return It(n)&&!It(s)?(n.value=s,!0):Reflect.set(t,e,s,i)}};function Uv(t){return hn(t)?t:new Proxy(t,jS)}function US(t){const e=we(t)?new Array(t.length):{};for(const s in t)e[s]=WS(t,s);return e}class YS{constructor(e,s,i){this._object=e,this._key=s,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return gS(je(this._object),this._key)}}function WS(t,e,s){const i=t[e];return It(i)?i:new YS(t,e,s)}class qS{constructor(e,s,i,n){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ph(e,()=>{this._dirty||(this._dirty=!0,Bv(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!n,this.__v_isReadonly=i}get value(){const e=je(this);return zv(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function GS(t,e,s=!1){let i,n;const o=Fe(t);return o?(i=t,n=si):(i=t.get,n=t.set),new qS(i,n,o||!n,s)}function fn(t,e,s,i){let n;try{n=i?t(...i):t()}catch(o){Sc(o,e,s)}return n}function ii(t,e,s,i){if(Fe(t)){const o=fn(t,e,s,i);return o&&xv(o)&&o.catch(r=>{Sc(r,e,s)}),o}const n=[];for(let o=0;o<t.length;o++)n.push(ii(t[o],e,s,i));return n}function Sc(t,e,s,i=!0){const n=e?e.vnode:null;if(e){let o=e.parent;const r=e.proxy,a=s;for(;o;){const c=o.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](t,r,a)===!1)return}o=o.parent}const l=e.appContext.config.errorHandler;if(l){fn(l,null,10,[t,r,a]);return}}ZS(t,s,n,i)}function ZS(t,e,s,i=!0){console.error(t)}let Qr=!1,eu=!1;const Zt=[];let mi=0;const Ro=[];let Ti=null,Hn=0;const Yv=Promise.resolve();let xh=null;function wh(t){const e=xh||Yv;return t?e.then(this?t.bind(this):t):e}function XS(t){let e=mi+1,s=Zt.length;for(;e<s;){const i=e+s>>>1;Jr(Zt[i])<t?e=i+1:s=i}return e}function $h(t){(!Zt.length||!Zt.includes(t,Qr&&t.allowRecurse?mi+1:mi))&&(t.id==null?Zt.push(t):Zt.splice(XS(t.id),0,t),Wv())}function Wv(){!Qr&&!eu&&(eu=!0,xh=Yv.then(Gv))}function QS(t){const e=Zt.indexOf(t);e>mi&&Zt.splice(e,1)}function JS(t){we(t)?Ro.push(...t):(!Ti||!Ti.includes(t,t.allowRecurse?Hn+1:Hn))&&Ro.push(t),Wv()}function hp(t,e=Qr?mi+1:0){for(;e<Zt.length;e++){const s=Zt[e];s&&s.pre&&(Zt.splice(e,1),e--,s())}}function qv(t){if(Ro.length){const e=[...new Set(Ro)];if(Ro.length=0,Ti){Ti.push(...e);return}for(Ti=e,Ti.sort((s,i)=>Jr(s)-Jr(i)),Hn=0;Hn<Ti.length;Hn++)Ti[Hn]();Ti=null,Hn=0}}const Jr=t=>t.id==null?1/0:t.id,KS=(t,e)=>{const s=Jr(t)-Jr(e);if(s===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return s};function Gv(t){eu=!1,Qr=!0,Zt.sort(KS);const e=si;try{for(mi=0;mi<Zt.length;mi++){const s=Zt[mi];s&&s.active!==!1&&fn(s,null,14)}}finally{mi=0,Zt.length=0,qv(),Qr=!1,xh=null,(Zt.length||Ro.length)&&Gv()}}function eC(t,e,...s){if(t.isUnmounted)return;const i=t.vnode.props||ct;let n=s;const o=e.startsWith("update:"),r=o&&e.slice(7);if(r&&r in i){const d=`${r==="modelValue"?"model":r}Modifiers`,{number:u,trim:f}=i[d]||ct;f&&(n=s.map(y=>At(y)?y.trim():y)),u&&(n=s.map(oS))}let a,l=i[a=yd(e)]||i[a=yd(vi(e))];!l&&o&&(l=i[a=yd(ao(e))]),l&&ii(l,t,6,n);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ii(c,t,6,n)}}function Zv(t,e,s=!1){const i=e.emitsCache,n=i.get(t);if(n!==void 0)return n;const o=t.emits;let r={},a=!1;if(!Fe(t)){const l=c=>{const d=Zv(c,e,!0);d&&(a=!0,Bt(r,d))};!s&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!o&&!a?(vt(t)&&i.set(t,null),null):(we(o)?o.forEach(l=>r[l]=null):Bt(r,o),vt(t)&&i.set(t,r),r)}function Cc(t,e){return!t||!yc(e)?!1:(e=e.slice(2).replace(/Once$/,""),ze(t,e[0].toLowerCase()+e.slice(1))||ze(t,ao(e))||ze(t,e))}let jt=null,Ic=null;function kl(t){const e=jt;return jt=t,Ic=t&&t.type.__scopeId||null,e}function Tc(t){Ic=t}function Fc(){Ic=null}function z(t,e=jt,s){if(!e||t._n)return t;const i=(...n)=>{i._d&&kp(-1);const o=kl(e);let r;try{r=t(...n)}finally{kl(o),i._d&&kp(1)}return r};return i._n=!0,i._c=!0,i._d=!0,i}function wd(t){const{type:e,vnode:s,proxy:i,withProxy:n,props:o,propsOptions:[r],slots:a,attrs:l,emit:c,render:d,renderCache:u,data:f,setupState:y,ctx:w,inheritAttrs:$}=t;let _,A;const P=kl(t);try{if(s.shapeFlag&4){const Y=n||i;_=pi(d.call(Y,Y,u,o,y,f,w)),A=l}else{const Y=e;_=pi(Y.length>1?Y(o,{attrs:l,slots:a,emit:c}):Y(o,null)),A=e.props?l:tC(l)}}catch(Y){Dr.length=0,Sc(Y,t,1),_=E($n)}let re=_;if(A&&$!==!1){const Y=Object.keys(A),{shapeFlag:ge}=re;Y.length&&ge&7&&(r&&Y.some(ch)&&(A=sC(A,r)),re=Kn(re,A))}return s.dirs&&(re=Kn(re),re.dirs=re.dirs?re.dirs.concat(s.dirs):s.dirs),s.transition&&(re.transition=s.transition),_=re,kl(P),_}const tC=t=>{let e;for(const s in t)(s==="class"||s==="style"||yc(s))&&((e||(e={}))[s]=t[s]);return e},sC=(t,e)=>{const s={};for(const i in t)(!ch(i)||!(i.slice(9)in e))&&(s[i]=t[i]);return s};function iC(t,e,s){const{props:i,children:n,component:o}=t,{props:r,children:a,patchFlag:l}=e,c=o.emitsOptions;if(e.dirs||e.transition)return!0;if(s&&l>=0){if(l&1024)return!0;if(l&16)return i?fp(i,r,c):!!r;if(l&8){const d=e.dynamicProps;for(let u=0;u<d.length;u++){const f=d[u];if(r[f]!==i[f]&&!Cc(c,f))return!0}}}else return(n||a)&&(!a||!a.$stable)?!0:i===r?!1:i?r?fp(i,r,c):!0:!!r;return!1}function fp(t,e,s){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let n=0;n<i.length;n++){const o=i[n];if(e[o]!==t[o]&&!Cc(s,o))return!0}return!1}function nC({vnode:t,parent:e},s){for(;e&&e.subTree===t;)(t=e.vnode).el=s,e=e.parent}const oC=t=>t.__isSuspense;function rC(t,e){e&&e.pendingBranch?we(t)?e.effects.push(...t):e.effects.push(t):JS(t)}function Xv(t,e){return kh(t,null,e)}const Xa={};function Ai(t,e,s){return kh(t,e,s)}function kh(t,e,{immediate:s,deep:i,flush:n,onTrack:o,onTrigger:r}=ct){var a;const l=Iv()===((a=zt)==null?void 0:a.scope)?zt:null;let c,d=!1,u=!1;if(It(t)?(c=()=>t.value,d=$l(t)):hn(t)?(c=()=>t,i=!0):we(t)?(u=!0,d=t.some(Y=>hn(Y)||$l(Y)),c=()=>t.map(Y=>{if(It(Y))return Y.value;if(hn(Y))return zn(Y);if(Fe(Y))return fn(Y,l,2)})):Fe(t)?e?c=()=>fn(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),ii(t,l,3,[y])}:c=si,e&&i){const Y=c;c=()=>zn(Y())}let f,y=Y=>{f=P.onStop=()=>{fn(Y,l,4)}},w;if(ta)if(y=si,e?s&&ii(e,l,3,[c(),u?[]:void 0,y]):c(),n==="sync"){const Y=QC();w=Y.__watcherHandles||(Y.__watcherHandles=[])}else return si;let $=u?new Array(t.length).fill(Xa):Xa;const _=()=>{if(P.active)if(e){const Y=P.run();(i||d||(u?Y.some((ge,be)=>Zr(ge,$[be])):Zr(Y,$)))&&(f&&f(),ii(e,l,3,[Y,$===Xa?void 0:u&&$[0]===Xa?[]:$,y]),$=Y)}else P.run()};_.allowRecurse=!!e;let A;n==="sync"?A=_:n==="post"?A=()=>gs(_,l&&l.suspense):(_.pre=!0,l&&(_.id=l.uid),A=()=>$h(_));const P=new ph(c,A);e?s?_():$=P.run():n==="post"?gs(P.run.bind(P),l&&l.suspense):P.run();const re=()=>{P.stop(),l&&l.scope&&dh(l.scope.effects,P)};return w&&w.push(re),re}function aC(t,e,s){const i=this.proxy,n=At(t)?t.includes(".")?Qv(i,t):()=>i[t]:t.bind(i,i);let o;Fe(e)?o=e:(o=e.handler,s=e);const r=zt;Wo(this);const a=kh(n,o.bind(i),s);return r?Wo(r):qn(),a}function Qv(t,e){const s=e.split(".");return()=>{let i=t;for(let n=0;n<s.length&&i;n++)i=i[s[n]];return i}}function zn(t,e){if(!vt(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),It(t))zn(t.value,e);else if(we(t))for(let s=0;s<t.length;s++)zn(t[s],e);else if(yv(t)||Do(t))t.forEach(s=>{zn(s,e)});else if($v(t))for(const s in t)zn(t[s],e);return t}function or(t,e){const s=jt;if(s===null)return t;const i=Ac(s)||s.proxy,n=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[r,a,l,c=ct]=e[o];r&&(Fe(r)&&(r={mounted:r,updated:r}),r.deep&&zn(a),n.push({dir:r,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function An(t,e,s,i){const n=t.dirs,o=e&&e.dirs;for(let r=0;r<n.length;r++){const a=n[r];o&&(a.oldValue=o[r].value);let l=a.dir[i];l&&(ir(),ii(l,s,8,[t.el,a,t,e]),nr())}}function ke(t,e){return Fe(t)?(()=>Bt({name:t.name},e,{setup:t}))():t}const Tr=t=>!!t.type.__asyncLoader,Jv=t=>t.type.__isKeepAlive;function lC(t,e){Kv(t,"a",e)}function cC(t,e){Kv(t,"da",e)}function Kv(t,e,s=zt){const i=t.__wdc||(t.__wdc=()=>{let n=s;for(;n;){if(n.isDeactivated)return;n=n.parent}return t()});if(Dc(e,i,s),s){let n=s.parent;for(;n&&n.parent;)Jv(n.parent.vnode)&&dC(i,e,s,n),n=n.parent}}function dC(t,e,s,i){const n=Dc(e,t,i,!0);Ps(()=>{dh(i[e],n)},s)}function Dc(t,e,s=zt,i=!1){if(s){const n=s[t]||(s[t]=[]),o=e.__weh||(e.__weh=(...r)=>{if(s.isUnmounted)return;ir(),Wo(s);const a=ii(e,s,t,r);return qn(),nr(),a});return i?n.unshift(o):n.push(o),o}}const Xi=t=>(e,s=zt)=>(!ta||t==="sp")&&Dc(t,(...i)=>e(...i),s),eb=Xi("bm"),Yt=Xi("m"),uC=Xi("bu"),hC=Xi("u"),Rc=Xi("bum"),Ps=Xi("um"),fC=Xi("sp"),pC=Xi("rtg"),mC=Xi("rtc");function gC(t,e=zt){Dc("ec",t,e)}const tb="components";function pe(t,e){return bC(tb,t,!0,e)||t}const vC=Symbol.for("v-ndc");function bC(t,e,s=!0,i=!1){const n=jt||zt;if(n){const o=n.type;if(t===tb){const a=GC(o,!1);if(a&&(a===e||a===vi(e)||a===$c(vi(e))))return o}const r=pp(n[t]||o[t],e)||pp(n.appContext[t],e);return!r&&i?o:r}}function pp(t,e){return t&&(t[e]||t[vi(e)]||t[$c(vi(e))])}function co(t,e,s,i){let n;const o=s&&s[i];if(we(t)||At(t)){n=new Array(t.length);for(let r=0,a=t.length;r<a;r++)n[r]=e(t[r],r,void 0,o&&o[r])}else if(typeof t=="number"){n=new Array(t);for(let r=0;r<t;r++)n[r]=e(r+1,r,void 0,o&&o[r])}else if(vt(t))if(t[Symbol.iterator])n=Array.from(t,(r,a)=>e(r,a,void 0,o&&o[a]));else{const r=Object.keys(t);n=new Array(r.length);for(let a=0,l=r.length;a<l;a++){const c=r[a];n[a]=e(t[c],c,a,o&&o[a])}}else n=[];return s&&(s[i]=n),n}function xs(t,e,s={},i,n){if(jt.isCE||jt.parent&&Tr(jt.parent)&&jt.parent.isCE)return e!=="default"&&(s.name=e),E("slot",s,i&&i());let o=t[e];o&&o._c&&(o._d=!1),Q();const r=o&&sb(o(s)),a=et(yt,{key:s.key||r&&r.key||`_${e}`},r||(i?i():[]),r&&t._===1?64:-2);return!n&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),o&&o._c&&(o._d=!0),a}function sb(t){return t.some(e=>Sl(e)?!(e.type===$n||e.type===yt&&!sb(e.children)):!0)?t:null}const tu=t=>t?fb(t)?Ac(t)||t.proxy:tu(t.parent):null,Fr=Bt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>tu(t.parent),$root:t=>tu(t.root),$emit:t=>t.emit,$options:t=>_h(t),$forceUpdate:t=>t.f||(t.f=()=>$h(t.update)),$nextTick:t=>t.n||(t.n=wh.bind(t.proxy)),$watch:t=>aC.bind(t)}),$d=(t,e)=>t!==ct&&!t.__isScriptSetup&&ze(t,e),yC={get({_:t},e){const{ctx:s,setupState:i,data:n,props:o,accessCache:r,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const y=r[e];if(y!==void 0)switch(y){case 1:return i[e];case 2:return n[e];case 4:return s[e];case 3:return o[e]}else{if($d(i,e))return r[e]=1,i[e];if(n!==ct&&ze(n,e))return r[e]=2,n[e];if((c=t.propsOptions[0])&&ze(c,e))return r[e]=3,o[e];if(s!==ct&&ze(s,e))return r[e]=4,s[e];su&&(r[e]=0)}}const d=Fr[e];let u,f;if(d)return e==="$attrs"&&ys(t,"get",e),d(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(s!==ct&&ze(s,e))return r[e]=4,s[e];if(f=l.config.globalProperties,ze(f,e))return f[e]},set({_:t},e,s){const{data:i,setupState:n,ctx:o}=t;return $d(n,e)?(n[e]=s,!0):i!==ct&&ze(i,e)?(i[e]=s,!0):ze(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=s,!0)},has({_:{data:t,setupState:e,accessCache:s,ctx:i,appContext:n,propsOptions:o}},r){let a;return!!s[r]||t!==ct&&ze(t,r)||$d(e,r)||(a=o[0])&&ze(a,r)||ze(i,r)||ze(Fr,r)||ze(n.config.globalProperties,r)},defineProperty(t,e,s){return s.get!=null?t._.accessCache[e]=0:ze(s,"value")&&this.set(t,e,s.value,null),Reflect.defineProperty(t,e,s)}};function mp(t){return we(t)?t.reduce((e,s)=>(e[s]=null,e),{}):t}let su=!0;function xC(t){const e=_h(t),s=t.proxy,i=t.ctx;su=!1,e.beforeCreate&&gp(e.beforeCreate,t,"bc");const{data:n,computed:o,methods:r,watch:a,provide:l,inject:c,created:d,beforeMount:u,mounted:f,beforeUpdate:y,updated:w,activated:$,deactivated:_,beforeDestroy:A,beforeUnmount:P,destroyed:re,unmounted:Y,render:ge,renderTracked:be,renderTriggered:R,errorCaptured:Ce,serverPrefetch:Ee,expose:st,inheritAttrs:kt,components:Pt,directives:fs,filters:_i}=e;if(c&&wC(c,i,null),r)for(const Ge in r){const Ve=r[Ge];Fe(Ve)&&(i[Ge]=Ve.bind(s))}if(n){const Ge=n.call(s,s);vt(Ge)&&(t.data=lo(Ge))}if(su=!0,o)for(const Ge in o){const Ve=o[Ge],ps=Fe(Ve)?Ve.bind(s,s):Fe(Ve.get)?Ve.get.bind(s,s):si,is=!Fe(Ve)&&Fe(Ve.set)?Ve.set.bind(s):si,Gt=Ke({get:ps,set:is});Object.defineProperty(i,Ge,{enumerable:!0,configurable:!0,get:()=>Gt.value,set:Lt=>Gt.value=Lt})}if(a)for(const Ge in a)ib(a[Ge],i,s,Ge);if(l){const Ge=Fe(l)?l.call(s):l;Reflect.ownKeys(Ge).forEach(Ve=>{Eo(Ve,Ge[Ve])})}d&&gp(d,t,"c");function He(Ge,Ve){we(Ve)?Ve.forEach(ps=>Ge(ps.bind(s))):Ve&&Ge(Ve.bind(s))}if(He(eb,u),He(Yt,f),He(uC,y),He(hC,w),He(lC,$),He(cC,_),He(gC,Ce),He(mC,be),He(pC,R),He(Rc,P),He(Ps,Y),He(fC,Ee),we(st))if(st.length){const Ge=t.exposed||(t.exposed={});st.forEach(Ve=>{Object.defineProperty(Ge,Ve,{get:()=>s[Ve],set:ps=>s[Ve]=ps})})}else t.exposed||(t.exposed={});ge&&t.render===si&&(t.render=ge),kt!=null&&(t.inheritAttrs=kt),Pt&&(t.components=Pt),fs&&(t.directives=fs)}function wC(t,e,s=si){we(t)&&(t=iu(t));for(const i in t){const n=t[i];let o;vt(n)?"default"in n?o=Ts(n.from||i,n.default,!0):o=Ts(n.from||i):o=Ts(n),It(o)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):e[i]=o}}function gp(t,e,s){ii(we(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,s)}function ib(t,e,s,i){const n=i.includes(".")?Qv(s,i):()=>s[i];if(At(t)){const o=e[t];Fe(o)&&Ai(n,o)}else if(Fe(t))Ai(n,t.bind(s));else if(vt(t))if(we(t))t.forEach(o=>ib(o,e,s,i));else{const o=Fe(t.handler)?t.handler.bind(s):e[t.handler];Fe(o)&&Ai(n,o,t)}}function _h(t){const e=t.type,{mixins:s,extends:i}=e,{mixins:n,optionsCache:o,config:{optionMergeStrategies:r}}=t.appContext,a=o.get(e);let l;return a?l=a:!n.length&&!s&&!i?l=e:(l={},n.length&&n.forEach(c=>_l(l,c,r,!0)),_l(l,e,r)),vt(e)&&o.set(e,l),l}function _l(t,e,s,i=!1){const{mixins:n,extends:o}=e;o&&_l(t,o,s,!0),n&&n.forEach(r=>_l(t,r,s,!0));for(const r in e)if(!(i&&r==="expose")){const a=$C[r]||s&&s[r];t[r]=a?a(t[r],e[r]):e[r]}return t}const $C={data:vp,props:bp,emits:bp,methods:$r,computed:$r,beforeCreate:os,created:os,beforeMount:os,mounted:os,beforeUpdate:os,updated:os,beforeDestroy:os,beforeUnmount:os,destroyed:os,unmounted:os,activated:os,deactivated:os,errorCaptured:os,serverPrefetch:os,components:$r,directives:$r,watch:_C,provide:vp,inject:kC};function vp(t,e){return e?t?function(){return Bt(Fe(t)?t.call(this,this):t,Fe(e)?e.call(this,this):e)}:e:t}function kC(t,e){return $r(iu(t),iu(e))}function iu(t){if(we(t)){const e={};for(let s=0;s<t.length;s++)e[t[s]]=t[s];return e}return t}function os(t,e){return t?[...new Set([].concat(t,e))]:e}function $r(t,e){return t?Bt(Object.create(null),t,e):e}function bp(t,e){return t?we(t)&&we(e)?[...new Set([...t,...e])]:Bt(Object.create(null),mp(t),mp(e??{})):e}function _C(t,e){if(!t)return e;if(!e)return t;const s=Bt(Object.create(null),t);for(const i in e)s[i]=os(t[i],e[i]);return s}function nb(){return{app:null,config:{isNativeTag:K_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let SC=0;function CC(t,e){return function(i,n=null){Fe(i)||(i=Bt({},i)),n!=null&&!vt(n)&&(n=null);const o=nb(),r=new Set;let a=!1;const l=o.app={_uid:SC++,_component:i,_props:n,_container:null,_context:o,_instance:null,version:JC,get config(){return o.config},set config(c){},use(c,...d){return r.has(c)||(c&&Fe(c.install)?(r.add(c),c.install(l,...d)):Fe(c)&&(r.add(c),c(l,...d))),l},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),l},component(c,d){return d?(o.components[c]=d,l):o.components[c]},directive(c,d){return d?(o.directives[c]=d,l):o.directives[c]},mount(c,d,u){if(!a){const f=E(i,n);return f.appContext=o,d&&e?e(f,c):t(f,c,u),a=!0,l._container=c,c.__vue_app__=l,Ac(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,d){return o.provides[c]=d,l},runWithContext(c){Kr=l;try{return c()}finally{Kr=null}}};return l}}let Kr=null;function Eo(t,e){if(zt){let s=zt.provides;const i=zt.parent&&zt.parent.provides;i===s&&(s=zt.provides=Object.create(i)),s[t]=e}}function Ts(t,e,s=!1){const i=zt||jt;if(i||Kr){const n=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Kr._context.provides;if(n&&t in n)return n[t];if(arguments.length>1)return s&&Fe(e)?e.call(i&&i.proxy):e}}function IC(){return!!(zt||jt||Kr)}function TC(t,e,s,i=!1){const n={},o={};xl(o,Oc,1),t.propsDefaults=Object.create(null),ob(t,e,n,o);for(const r in t.propsOptions[0])r in n||(n[r]=void 0);s?t.props=i?n:Vv(n):t.type.props?t.props=n:t.props=o,t.attrs=o}function FC(t,e,s,i){const{props:n,attrs:o,vnode:{patchFlag:r}}=t,a=je(n),[l]=t.propsOptions;let c=!1;if((i||r>0)&&!(r&16)){if(r&8){const d=t.vnode.dynamicProps;for(let u=0;u<d.length;u++){let f=d[u];if(Cc(t.emitsOptions,f))continue;const y=e[f];if(l)if(ze(o,f))y!==o[f]&&(o[f]=y,c=!0);else{const w=vi(f);n[w]=nu(l,a,w,y,t,!1)}else y!==o[f]&&(o[f]=y,c=!0)}}}else{ob(t,e,n,o)&&(c=!0);let d;for(const u in a)(!e||!ze(e,u)&&((d=ao(u))===u||!ze(e,d)))&&(l?s&&(s[u]!==void 0||s[d]!==void 0)&&(n[u]=nu(l,a,u,void 0,t,!0)):delete n[u]);if(o!==a)for(const u in o)(!e||!ze(e,u))&&(delete o[u],c=!0)}c&&Vi(t,"set","$attrs")}function ob(t,e,s,i){const[n,o]=t.propsOptions;let r=!1,a;if(e)for(let l in e){if(nl(l))continue;const c=e[l];let d;n&&ze(n,d=vi(l))?!o||!o.includes(d)?s[d]=c:(a||(a={}))[d]=c:Cc(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,r=!0)}if(o){const l=je(s),c=a||ct;for(let d=0;d<o.length;d++){const u=o[d];s[u]=nu(n,l,u,c[u],t,!ze(c,u))}}return r}function nu(t,e,s,i,n,o){const r=t[s];if(r!=null){const a=ze(r,"default");if(a&&i===void 0){const l=r.default;if(r.type!==Function&&!r.skipFactory&&Fe(l)){const{propsDefaults:c}=n;s in c?i=c[s]:(Wo(n),i=c[s]=l.call(null,e),qn())}else i=l}r[0]&&(o&&!a?i=!1:r[1]&&(i===""||i===ao(s))&&(i=!0))}return i}function rb(t,e,s=!1){const i=e.propsCache,n=i.get(t);if(n)return n;const o=t.props,r={},a=[];let l=!1;if(!Fe(t)){const d=u=>{l=!0;const[f,y]=rb(u,e,!0);Bt(r,f),y&&a.push(...y)};!s&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!o&&!l)return vt(t)&&i.set(t,Fo),Fo;if(we(o))for(let d=0;d<o.length;d++){const u=vi(o[d]);yp(u)&&(r[u]=ct)}else if(o)for(const d in o){const u=vi(d);if(yp(u)){const f=o[d],y=r[u]=we(f)||Fe(f)?{type:f}:Bt({},f);if(y){const w=$p(Boolean,y.type),$=$p(String,y.type);y[0]=w>-1,y[1]=$<0||w<$,(w>-1||ze(y,"default"))&&a.push(u)}}}const c=[r,a];return vt(t)&&i.set(t,c),c}function yp(t){return t[0]!=="$"}function xp(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function wp(t,e){return xp(t)===xp(e)}function $p(t,e){return we(e)?e.findIndex(s=>wp(s,t)):Fe(e)&&wp(e,t)?0:-1}const ab=t=>t[0]==="_"||t==="$stable",Sh=t=>we(t)?t.map(pi):[pi(t)],DC=(t,e,s)=>{if(e._n)return e;const i=z((...n)=>Sh(e(...n)),s);return i._c=!1,i},lb=(t,e,s)=>{const i=t._ctx;for(const n in t){if(ab(n))continue;const o=t[n];if(Fe(o))e[n]=DC(n,o,i);else if(o!=null){const r=Sh(o);e[n]=()=>r}}},cb=(t,e)=>{const s=Sh(e);t.slots.default=()=>s},RC=(t,e)=>{if(t.vnode.shapeFlag&32){const s=e._;s?(t.slots=je(e),xl(e,"_",s)):lb(e,t.slots={})}else t.slots={},e&&cb(t,e);xl(t.slots,Oc,1)},EC=(t,e,s)=>{const{vnode:i,slots:n}=t;let o=!0,r=ct;if(i.shapeFlag&32){const a=e._;a?s&&a===1?o=!1:(Bt(n,e),!s&&a===1&&delete n._):(o=!e.$stable,lb(e,n)),r=e}else e&&(cb(t,e),r={default:1});if(o)for(const a in n)!ab(a)&&!(a in r)&&delete n[a]};function ou(t,e,s,i,n=!1){if(we(t)){t.forEach((f,y)=>ou(f,e&&(we(e)?e[y]:e),s,i,n));return}if(Tr(i)&&!n)return;const o=i.shapeFlag&4?Ac(i.component)||i.component.proxy:i.el,r=n?null:o,{i:a,r:l}=t,c=e&&e.r,d=a.refs===ct?a.refs={}:a.refs,u=a.setupState;if(c!=null&&c!==l&&(At(c)?(d[c]=null,ze(u,c)&&(u[c]=null)):It(c)&&(c.value=null)),Fe(l))fn(l,a,12,[r,d]);else{const f=At(l),y=It(l);if(f||y){const w=()=>{if(t.f){const $=f?ze(u,l)?u[l]:d[l]:l.value;n?we($)&&dh($,o):we($)?$.includes(o)||$.push(o):f?(d[l]=[o],ze(u,l)&&(u[l]=d[l])):(l.value=[o],t.k&&(d[t.k]=l.value))}else f?(d[l]=r,ze(u,l)&&(u[l]=r)):y&&(l.value=r,t.k&&(d[t.k]=r))};r?(w.id=-1,gs(w,s)):w()}}}const gs=rC;function OC(t){return AC(t)}function AC(t,e){const s=Xd();s.__VUE__=!0;const{insert:i,remove:n,patchProp:o,createElement:r,createText:a,createComment:l,setText:c,setElementText:d,parentNode:u,nextSibling:f,setScopeId:y=si,insertStaticContent:w}=t,$=(m,v,x,T=null,O=null,L=null,J=!1,B=null,q=!!v.dynamicChildren)=>{if(m===v)return;m&&!mr(m,v)&&(T=F(m),Lt(m,O,L,!0),m=null),v.patchFlag===-2&&(q=!1,v.dynamicChildren=null);const{type:V,ref:ee,shapeFlag:j}=v;switch(V){case Ec:_(m,v,x,T);break;case $n:A(m,v,x,T);break;case kd:m==null&&P(v,x,T,J);break;case yt:Pt(m,v,x,T,O,L,J,B,q);break;default:j&1?ge(m,v,x,T,O,L,J,B,q):j&6?fs(m,v,x,T,O,L,J,B,q):(j&64||j&128)&&V.process(m,v,x,T,O,L,J,B,q,W)}ee!=null&&O&&ou(ee,m&&m.ref,L,v||m,!v)},_=(m,v,x,T)=>{if(m==null)i(v.el=a(v.children),x,T);else{const O=v.el=m.el;v.children!==m.children&&c(O,v.children)}},A=(m,v,x,T)=>{m==null?i(v.el=l(v.children||""),x,T):v.el=m.el},P=(m,v,x,T)=>{[m.el,m.anchor]=w(m.children,v,x,T,m.el,m.anchor)},re=({el:m,anchor:v},x,T)=>{let O;for(;m&&m!==v;)O=f(m),i(m,x,T),m=O;i(v,x,T)},Y=({el:m,anchor:v})=>{let x;for(;m&&m!==v;)x=f(m),n(m),m=x;n(v)},ge=(m,v,x,T,O,L,J,B,q)=>{J=J||v.type==="svg",m==null?be(v,x,T,O,L,J,B,q):Ee(m,v,O,L,J,B,q)},be=(m,v,x,T,O,L,J,B)=>{let q,V;const{type:ee,props:j,shapeFlag:le,transition:ye,dirs:De}=m;if(q=m.el=r(m.type,L,j&&j.is,j),le&8?d(q,m.children):le&16&&Ce(m.children,q,null,T,O,L&&ee!=="foreignObject",J,B),De&&An(m,null,T,"created"),R(q,m,m.scopeId,J,T),j){for(const k in j)k!=="value"&&!nl(k)&&o(q,k,null,j[k],L,m.children,T,O,Mt);"value"in j&&o(q,"value",null,j.value),(V=j.onVnodeBeforeMount)&&hi(V,T,m)}De&&An(m,null,T,"beforeMount");const g=(!O||O&&!O.pendingBranch)&&ye&&!ye.persisted;g&&ye.beforeEnter(q),i(q,v,x),((V=j&&j.onVnodeMounted)||g||De)&&gs(()=>{V&&hi(V,T,m),g&&ye.enter(q),De&&An(m,null,T,"mounted")},O)},R=(m,v,x,T,O)=>{if(x&&y(m,x),T)for(let L=0;L<T.length;L++)y(m,T[L]);if(O){let L=O.subTree;if(v===L){const J=O.vnode;R(m,J,J.scopeId,J.slotScopeIds,O.parent)}}},Ce=(m,v,x,T,O,L,J,B,q=0)=>{for(let V=q;V<m.length;V++){const ee=m[V]=B?on(m[V]):pi(m[V]);$(null,ee,v,x,T,O,L,J,B)}},Ee=(m,v,x,T,O,L,J)=>{const B=v.el=m.el;let{patchFlag:q,dynamicChildren:V,dirs:ee}=v;q|=m.patchFlag&16;const j=m.props||ct,le=v.props||ct;let ye;x&&Pn(x,!1),(ye=le.onVnodeBeforeUpdate)&&hi(ye,x,v,m),ee&&An(v,m,x,"beforeUpdate"),x&&Pn(x,!0);const De=O&&v.type!=="foreignObject";if(V?st(m.dynamicChildren,V,B,x,T,De,L):J||Ve(m,v,B,null,x,T,De,L,!1),q>0){if(q&16)kt(B,v,j,le,x,T,O);else if(q&2&&j.class!==le.class&&o(B,"class",null,le.class,O),q&4&&o(B,"style",j.style,le.style,O),q&8){const g=v.dynamicProps;for(let k=0;k<g.length;k++){const D=g[k],G=j[D],de=le[D];(de!==G||D==="value")&&o(B,D,G,de,O,m.children,x,T,Mt)}}q&1&&m.children!==v.children&&d(B,v.children)}else!J&&V==null&&kt(B,v,j,le,x,T,O);((ye=le.onVnodeUpdated)||ee)&&gs(()=>{ye&&hi(ye,x,v,m),ee&&An(v,m,x,"updated")},T)},st=(m,v,x,T,O,L,J)=>{for(let B=0;B<v.length;B++){const q=m[B],V=v[B],ee=q.el&&(q.type===yt||!mr(q,V)||q.shapeFlag&70)?u(q.el):x;$(q,V,ee,null,T,O,L,J,!0)}},kt=(m,v,x,T,O,L,J)=>{if(x!==T){if(x!==ct)for(const B in x)!nl(B)&&!(B in T)&&o(m,B,x[B],null,J,v.children,O,L,Mt);for(const B in T){if(nl(B))continue;const q=T[B],V=x[B];q!==V&&B!=="value"&&o(m,B,V,q,J,v.children,O,L,Mt)}"value"in T&&o(m,"value",x.value,T.value)}},Pt=(m,v,x,T,O,L,J,B,q)=>{const V=v.el=m?m.el:a(""),ee=v.anchor=m?m.anchor:a("");let{patchFlag:j,dynamicChildren:le,slotScopeIds:ye}=v;ye&&(B=B?B.concat(ye):ye),m==null?(i(V,x,T),i(ee,x,T),Ce(v.children,x,ee,O,L,J,B,q)):j>0&&j&64&&le&&m.dynamicChildren?(st(m.dynamicChildren,le,x,O,L,J,B),(v.key!=null||O&&v===O.subTree)&&db(m,v,!0)):Ve(m,v,x,ee,O,L,J,B,q)},fs=(m,v,x,T,O,L,J,B,q)=>{v.slotScopeIds=B,m==null?v.shapeFlag&512?O.ctx.activate(v,x,T,J,q):_i(v,x,T,O,L,J,q):ss(m,v,q)},_i=(m,v,x,T,O,L,J)=>{const B=m.component=jC(m,T,O);if(Jv(m)&&(B.ctx.renderer=W),UC(B),B.asyncDep){if(O&&O.registerDep(B,He),!m.el){const q=B.subTree=E($n);A(null,q,v,x)}return}He(B,m,v,x,O,L,J)},ss=(m,v,x)=>{const T=v.component=m.component;if(iC(m,v,x))if(T.asyncDep&&!T.asyncResolved){Ge(T,v,x);return}else T.next=v,QS(T.update),T.update();else v.el=m.el,T.vnode=v},He=(m,v,x,T,O,L,J)=>{const B=()=>{if(m.isMounted){let{next:ee,bu:j,u:le,parent:ye,vnode:De}=m,g=ee,k;Pn(m,!1),ee?(ee.el=De.el,Ge(m,ee,J)):ee=De,j&&xd(j),(k=ee.props&&ee.props.onVnodeBeforeUpdate)&&hi(k,ye,ee,De),Pn(m,!0);const D=wd(m),G=m.subTree;m.subTree=D,$(G,D,u(G.el),F(G),m,O,L),ee.el=D.el,g===null&&nC(m,D.el),le&&gs(le,O),(k=ee.props&&ee.props.onVnodeUpdated)&&gs(()=>hi(k,ye,ee,De),O)}else{let ee;const{el:j,props:le}=v,{bm:ye,m:De,parent:g}=m,k=Tr(v);if(Pn(m,!1),ye&&xd(ye),!k&&(ee=le&&le.onVnodeBeforeMount)&&hi(ee,g,v),Pn(m,!0),j&&Ue){const D=()=>{m.subTree=wd(m),Ue(j,m.subTree,m,O,null)};k?v.type.__asyncLoader().then(()=>!m.isUnmounted&&D()):D()}else{const D=m.subTree=wd(m);$(null,D,x,T,m,O,L),v.el=D.el}if(De&&gs(De,O),!k&&(ee=le&&le.onVnodeMounted)){const D=v;gs(()=>hi(ee,g,D),O)}(v.shapeFlag&256||g&&Tr(g.vnode)&&g.vnode.shapeFlag&256)&&m.a&&gs(m.a,O),m.isMounted=!0,v=x=T=null}},q=m.effect=new ph(B,()=>$h(V),m.scope),V=m.update=()=>q.run();V.id=m.uid,Pn(m,!0),V()},Ge=(m,v,x)=>{v.component=m;const T=m.vnode.props;m.vnode=v,m.next=null,FC(m,v.props,T,x),EC(m,v.children,x),ir(),hp(),nr()},Ve=(m,v,x,T,O,L,J,B,q=!1)=>{const V=m&&m.children,ee=m?m.shapeFlag:0,j=v.children,{patchFlag:le,shapeFlag:ye}=v;if(le>0){if(le&128){is(V,j,x,T,O,L,J,B,q);return}else if(le&256){ps(V,j,x,T,O,L,J,B,q);return}}ye&8?(ee&16&&Mt(V,O,L),j!==V&&d(x,j)):ee&16?ye&16?is(V,j,x,T,O,L,J,B,q):Mt(V,O,L,!0):(ee&8&&d(x,""),ye&16&&Ce(j,x,T,O,L,J,B,q))},ps=(m,v,x,T,O,L,J,B,q)=>{m=m||Fo,v=v||Fo;const V=m.length,ee=v.length,j=Math.min(V,ee);let le;for(le=0;le<j;le++){const ye=v[le]=q?on(v[le]):pi(v[le]);$(m[le],ye,x,null,O,L,J,B,q)}V>ee?Mt(m,O,L,!0,!1,j):Ce(v,x,T,O,L,J,B,q,j)},is=(m,v,x,T,O,L,J,B,q)=>{let V=0;const ee=v.length;let j=m.length-1,le=ee-1;for(;V<=j&&V<=le;){const ye=m[V],De=v[V]=q?on(v[V]):pi(v[V]);if(mr(ye,De))$(ye,De,x,null,O,L,J,B,q);else break;V++}for(;V<=j&&V<=le;){const ye=m[j],De=v[le]=q?on(v[le]):pi(v[le]);if(mr(ye,De))$(ye,De,x,null,O,L,J,B,q);else break;j--,le--}if(V>j){if(V<=le){const ye=le+1,De=ye<ee?v[ye].el:T;for(;V<=le;)$(null,v[V]=q?on(v[V]):pi(v[V]),x,De,O,L,J,B,q),V++}}else if(V>le)for(;V<=j;)Lt(m[V],O,L,!0),V++;else{const ye=V,De=V,g=new Map;for(V=De;V<=le;V++){const xe=v[V]=q?on(v[V]):pi(v[V]);xe.key!=null&&g.set(xe.key,V)}let k,D=0;const G=le-De+1;let de=!1,Oe=0;const Ie=new Array(G);for(V=0;V<G;V++)Ie[V]=0;for(V=ye;V<=j;V++){const xe=m[V];if(D>=G){Lt(xe,O,L,!0);continue}let it;if(xe.key!=null)it=g.get(xe.key);else for(k=De;k<=le;k++)if(Ie[k-De]===0&&mr(xe,v[k])){it=k;break}it===void 0?Lt(xe,O,L,!0):(Ie[it-De]=V+1,it>=Oe?Oe=it:de=!0,$(xe,v[it],x,null,O,L,J,B,q),D++)}const lt=de?PC(Ie):Fo;for(k=lt.length-1,V=G-1;V>=0;V--){const xe=De+V,it=v[xe],_s=xe+1<ee?v[xe+1].el:T;Ie[V]===0?$(null,it,x,_s,O,L,J,B,q):de&&(k<0||V!==lt[k]?Gt(it,x,_s,2):k--)}}},Gt=(m,v,x,T,O=null)=>{const{el:L,type:J,transition:B,children:q,shapeFlag:V}=m;if(V&6){Gt(m.component.subTree,v,x,T);return}if(V&128){m.suspense.move(v,x,T);return}if(V&64){J.move(m,v,x,W);return}if(J===yt){i(L,v,x);for(let j=0;j<q.length;j++)Gt(q[j],v,x,T);i(m.anchor,v,x);return}if(J===kd){re(m,v,x);return}if(T!==2&&V&1&&B)if(T===0)B.beforeEnter(L),i(L,v,x),gs(()=>B.enter(L),O);else{const{leave:j,delayLeave:le,afterLeave:ye}=B,De=()=>i(L,v,x),g=()=>{j(L,()=>{De(),ye&&ye()})};le?le(L,De,g):g()}else i(L,v,x)},Lt=(m,v,x,T=!1,O=!1)=>{const{type:L,props:J,ref:B,children:q,dynamicChildren:V,shapeFlag:ee,patchFlag:j,dirs:le}=m;if(B!=null&&ou(B,null,x,m,!0),ee&256){v.ctx.deactivate(m);return}const ye=ee&1&&le,De=!Tr(m);let g;if(De&&(g=J&&J.onVnodeBeforeUnmount)&&hi(g,v,m),ee&6)Dn(m.component,x,T);else{if(ee&128){m.suspense.unmount(x,T);return}ye&&An(m,null,v,"beforeUnmount"),ee&64?m.type.remove(m,v,x,O,W,T):V&&(L!==yt||j>0&&j&64)?Mt(V,v,x,!1,!0):(L===yt&&j&384||!O&&ee&16)&&Mt(q,v,x),T&&ns(m)}(De&&(g=J&&J.onVnodeUnmounted)||ye)&&gs(()=>{g&&hi(g,v,m),ye&&An(m,null,v,"unmounted")},x)},ns=m=>{const{type:v,el:x,anchor:T,transition:O}=m;if(v===yt){Si(x,T);return}if(v===kd){Y(m);return}const L=()=>{n(x),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(m.shapeFlag&1&&O&&!O.persisted){const{leave:J,delayLeave:B}=O,q=()=>J(x,L);B?B(m.el,L,q):q()}else L()},Si=(m,v)=>{let x;for(;m!==v;)x=f(m),n(m),m=x;n(v)},Dn=(m,v,x)=>{const{bum:T,scope:O,update:L,subTree:J,um:B}=m;T&&xd(T),O.stop(),L&&(L.active=!1,Lt(J,m,v,x)),B&&gs(B,v),gs(()=>{m.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},Mt=(m,v,x,T=!1,O=!1,L=0)=>{for(let J=L;J<m.length;J++)Lt(m[J],v,x,T,O)},F=m=>m.shapeFlag&6?F(m.component.subTree):m.shapeFlag&128?m.suspense.next():f(m.anchor||m.el),te=(m,v,x)=>{m==null?v._vnode&&Lt(v._vnode,null,null,!0):$(v._vnode||null,m,v,null,null,null,x),hp(),qv(),v._vnode=m},W={p:$,um:Lt,m:Gt,r:ns,mt:_i,mc:Ce,pc:Ve,pbc:st,n:F,o:t};let ae,Ue;return e&&([ae,Ue]=e(W)),{render:te,hydrate:ae,createApp:CC(te,ae)}}function Pn({effect:t,update:e},s){t.allowRecurse=e.allowRecurse=s}function db(t,e,s=!1){const i=t.children,n=e.children;if(we(i)&&we(n))for(let o=0;o<i.length;o++){const r=i[o];let a=n[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=n[o]=on(n[o]),a.el=r.el),s||db(r,a)),a.type===Ec&&(a.el=r.el)}}function PC(t){const e=t.slice(),s=[0];let i,n,o,r,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(n=s[s.length-1],t[n]<c){e[i]=n,s.push(i);continue}for(o=0,r=s.length-1;o<r;)a=o+r>>1,t[s[a]]<c?o=a+1:r=a;c<t[s[o]]&&(o>0&&(e[i]=s[o-1]),s[o]=i)}}for(o=s.length,r=s[o-1];o-- >0;)s[o]=r,r=e[r];return s}const LC=t=>t.__isTeleport,yt=Symbol.for("v-fgt"),Ec=Symbol.for("v-txt"),$n=Symbol.for("v-cmt"),kd=Symbol.for("v-stc"),Dr=[];let ei=null;function Q(t=!1){Dr.push(ei=t?null:[])}function MC(){Dr.pop(),ei=Dr[Dr.length-1]||null}let ea=1;function kp(t){ea+=t}function ub(t){return t.dynamicChildren=ea>0?ei||Fo:null,MC(),ea>0&&ei&&ei.push(t),t}function Se(t,e,s,i,n,o){return ub(C(t,e,s,i,n,o,!0))}function et(t,e,s,i,n){return ub(E(t,e,s,i,n,!0))}function Sl(t){return t?t.__v_isVNode===!0:!1}function mr(t,e){return t.type===e.type&&t.key===e.key}const Oc="__vInternal",hb=({key:t})=>t??null,ol=({ref:t,ref_key:e,ref_for:s})=>(typeof t=="number"&&(t=""+t),t!=null?At(t)||It(t)||Fe(t)?{i:jt,r:t,k:e,f:!!s}:t:null);function C(t,e=null,s=null,i=0,n=null,o=t===yt?0:1,r=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&hb(e),ref:e&&ol(e),scopeId:Ic,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:jt};return a?(Ch(l,s),o&128&&t.normalize(l)):s&&(l.shapeFlag|=At(s)?8:16),ea>0&&!r&&ei&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&ei.push(l),l}const E=VC;function VC(t,e=null,s=null,i=0,n=null,o=!1){if((!t||t===vC)&&(t=$n),Sl(t)){const a=Kn(t,e,!0);return s&&Ch(a,s),ea>0&&!o&&ei&&(a.shapeFlag&6?ei[ei.indexOf(t)]=a:ei.push(a)),a.patchFlag|=-2,a}if(ZC(t)&&(t=t.__vccOpts),e){e=HC(e);let{class:a,style:l}=e;a&&!At(a)&&(e.class=Ut(a)),vt(l)&&(Nv(l)&&!we(l)&&(l=Bt({},l)),e.style=xn(l))}const r=At(t)?1:oC(t)?128:LC(t)?64:vt(t)?4:Fe(t)?2:0;return C(t,e,s,i,n,r,o,!0)}function HC(t){return t?Nv(t)||Oc in t?Bt({},t):t:null}function Kn(t,e,s=!1){const{props:i,ref:n,patchFlag:o,children:r}=t,a=e?NC(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&hb(a),ref:e&&e.ref?s&&n?we(n)?n.concat(ol(e)):[n,ol(e)]:ol(e):n,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:r,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==yt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Kn(t.ssContent),ssFallback:t.ssFallback&&Kn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ye(t=" ",e=0){return E(Ec,null,t,e)}function ru(t="",e=!1){return e?(Q(),et($n,null,t)):E($n,null,t)}function pi(t){return t==null||typeof t=="boolean"?E($n):we(t)?E(yt,null,t.slice()):typeof t=="object"?on(t):E(Ec,null,String(t))}function on(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Kn(t)}function Ch(t,e){let s=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(we(e))s=16;else if(typeof e=="object")if(i&65){const n=e.default;n&&(n._c&&(n._d=!1),Ch(t,n()),n._c&&(n._d=!0));return}else{s=32;const n=e._;!n&&!(Oc in e)?e._ctx=jt:n===3&&jt&&(jt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Fe(e)?(e={default:e,_ctx:jt},s=32):(e=String(e),i&64?(s=16,e=[Ye(e)]):s=8);t.children=e,t.shapeFlag|=s}function NC(...t){const e={};for(let s=0;s<t.length;s++){const i=t[s];for(const n in i)if(n==="class")e.class!==i.class&&(e.class=Ut([e.class,i.class]));else if(n==="style")e.style=xn([e.style,i.style]);else if(yc(n)){const o=e[n],r=i[n];r&&o!==r&&!(we(o)&&o.includes(r))&&(e[n]=o?[].concat(o,r):r)}else n!==""&&(e[n]=i[n])}return e}function hi(t,e,s,i=null){ii(t,e,7,[s,i])}const zC=nb();let BC=0;function jC(t,e,s){const i=t.type,n=(e?e.appContext:t.appContext)||zC,o={uid:BC++,vnode:t,type:i,parent:e,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,scope:new Sv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(n.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:rb(i,n),emitsOptions:Zv(i,n),emit:null,emitted:null,propsDefaults:ct,inheritAttrs:i.inheritAttrs,ctx:ct,data:ct,props:ct,attrs:ct,slots:ct,refs:ct,setupState:ct,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=eC.bind(null,o),t.ce&&t.ce(o),o}let zt=null,Ih,po,_p="__VUE_INSTANCE_SETTERS__";(po=Xd()[_p])||(po=Xd()[_p]=[]),po.push(t=>zt=t),Ih=t=>{po.length>1?po.forEach(e=>e(t)):po[0](t)};const Wo=t=>{Ih(t),t.scope.on()},qn=()=>{zt&&zt.scope.off(),Ih(null)};function fb(t){return t.vnode.shapeFlag&4}let ta=!1;function UC(t,e=!1){ta=e;const{props:s,children:i}=t.vnode,n=fb(t);TC(t,s,n,e),RC(t,i);const o=n?YC(t,e):void 0;return ta=!1,o}function YC(t,e){const s=t.type;t.accessCache=Object.create(null),t.proxy=_c(new Proxy(t.ctx,yC));const{setup:i}=s;if(i){const n=t.setupContext=i.length>1?qC(t):null;Wo(t),ir();const o=fn(i,t,0,[t.props,n]);if(nr(),qn(),xv(o)){if(o.then(qn,qn),e)return o.then(r=>{Sp(t,r,e)}).catch(r=>{Sc(r,t,0)});t.asyncDep=o}else Sp(t,o,e)}else pb(t,e)}function Sp(t,e,s){Fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:vt(e)&&(t.setupState=Uv(e)),pb(t,s)}let Cp;function pb(t,e,s){const i=t.type;if(!t.render){if(!e&&Cp&&!i.render){const n=i.template||_h(t).template;if(n){const{isCustomElement:o,compilerOptions:r}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Bt(Bt({isCustomElement:o,delimiters:a},r),l);i.render=Cp(n,c)}}t.render=i.render||si}Wo(t),ir(),xC(t),nr(),qn()}function WC(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,s){return ys(t,"get","$attrs"),e[s]}}))}function qC(t){const e=s=>{t.exposed=s||{}};return{get attrs(){return WC(t)},slots:t.slots,emit:t.emit,expose:e}}function Ac(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Uv(_c(t.exposed)),{get(e,s){if(s in e)return e[s];if(s in Fr)return Fr[s](t)},has(e,s){return s in e||s in Fr}}))}function GC(t,e=!0){return Fe(t)?t.displayName||t.name:t.name||e&&t.__name}function ZC(t){return Fe(t)&&"__vccOpts"in t}const Ke=(t,e)=>GS(t,e,ta);function Hi(t,e,s){const i=arguments.length;return i===2?vt(e)&&!we(e)?Sl(e)?E(t,null,[e]):E(t,e):E(t,null,e):(i>3?s=Array.prototype.slice.call(arguments,2):i===3&&Sl(s)&&(s=[s]),E(t,e,s))}const XC=Symbol.for("v-scx"),QC=()=>Ts(XC),JC="3.3.4",KC="http://www.w3.org/2000/svg",Nn=typeof document<"u"?document:null,Ip=Nn&&Nn.createElement("template"),eI={insert:(t,e,s)=>{e.insertBefore(t,s||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,s,i)=>{const n=e?Nn.createElementNS(KC,t):Nn.createElement(t,s?{is:s}:void 0);return t==="select"&&i&&i.multiple!=null&&n.setAttribute("multiple",i.multiple),n},createText:t=>Nn.createTextNode(t),createComment:t=>Nn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Nn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,s,i,n,o){const r=s?s.previousSibling:e.lastChild;if(n&&(n===o||n.nextSibling))for(;e.insertBefore(n.cloneNode(!0),s),!(n===o||!(n=n.nextSibling)););else{Ip.innerHTML=i?`<svg>${t}</svg>`:t;const a=Ip.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,s)}return[r?r.nextSibling:e.firstChild,s?s.previousSibling:e.lastChild]}};function tI(t,e,s){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):s?t.setAttribute("class",e):t.className=e}function sI(t,e,s){const i=t.style,n=At(s);if(s&&!n){if(e&&!At(e))for(const o in e)s[o]==null&&au(i,o,"");for(const o in s)au(i,o,s[o])}else{const o=i.display;n?e!==s&&(i.cssText=s):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=o)}}const Tp=/\s*!important$/;function au(t,e,s){if(we(s))s.forEach(i=>au(t,e,i));else if(s==null&&(s=""),e.startsWith("--"))t.setProperty(e,s);else{const i=iI(t,e);Tp.test(s)?t.setProperty(ao(i),s.replace(Tp,""),"important"):t[i]=s}}const Fp=["Webkit","Moz","ms"],_d={};function iI(t,e){const s=_d[e];if(s)return s;let i=vi(e);if(i!=="filter"&&i in t)return _d[e]=i;i=$c(i);for(let n=0;n<Fp.length;n++){const o=Fp[n]+i;if(o in t)return _d[e]=o}return e}const Dp="http://www.w3.org/1999/xlink";function nI(t,e,s,i,n){if(i&&e.startsWith("xlink:"))s==null?t.removeAttributeNS(Dp,e.slice(6,e.length)):t.setAttributeNS(Dp,e,s);else{const o=uS(e);s==null||o&&!kv(s)?t.removeAttribute(e):t.setAttribute(e,o?"":s)}}function oI(t,e,s,i,n,o,r){if(e==="innerHTML"||e==="textContent"){i&&r(i,n,o),t[e]=s??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=s;const c=a==="OPTION"?t.getAttribute("value"):t.value,d=s??"";c!==d&&(t.value=d),s==null&&t.removeAttribute(e);return}let l=!1;if(s===""||s==null){const c=typeof t[e];c==="boolean"?s=kv(s):s==null&&c==="string"?(s="",l=!0):c==="number"&&(s=0,l=!0)}try{t[e]=s}catch{}l&&t.removeAttribute(e)}function rI(t,e,s,i){t.addEventListener(e,s,i)}function aI(t,e,s,i){t.removeEventListener(e,s,i)}function lI(t,e,s,i,n=null){const o=t._vei||(t._vei={}),r=o[e];if(i&&r)r.value=i;else{const[a,l]=cI(e);if(i){const c=o[e]=hI(i,n);rI(t,a,c,l)}else r&&(aI(t,a,r,l),o[e]=void 0)}}const Rp=/(?:Once|Passive|Capture)$/;function cI(t){let e;if(Rp.test(t)){e={};let i;for(;i=t.match(Rp);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ao(t.slice(2)),e]}let Sd=0;const dI=Promise.resolve(),uI=()=>Sd||(dI.then(()=>Sd=0),Sd=Date.now());function hI(t,e){const s=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=s.attached)return;ii(fI(i,s.value),e,5,[i])};return s.value=t,s.attached=uI(),s}function fI(t,e){if(we(e)){const s=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{s.call(t),t._stopped=!0},e.map(i=>n=>!n._stopped&&i&&i(n))}else return e}const Ep=/^on[a-z]/,pI=(t,e,s,i,n=!1,o,r,a,l)=>{e==="class"?tI(t,i,n):e==="style"?sI(t,s,i):yc(e)?ch(e)||lI(t,e,s,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):mI(t,e,i,n))?oI(t,e,i,o,r,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),nI(t,e,i,n))};function mI(t,e,s,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&Ep.test(e)&&Fe(s)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ep.test(e)&&At(s)?!1:e in t}const gI={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},vI=(t,e)=>s=>{if(!("key"in s))return;const i=ao(s.key);if(e.some(n=>n===i||gI[n]===i))return t(s)},rr={beforeMount(t,{value:e},{transition:s}){t._vod=t.style.display==="none"?"":t.style.display,s&&e?s.beforeEnter(t):gr(t,e)},mounted(t,{value:e},{transition:s}){s&&e&&s.enter(t)},updated(t,{value:e,oldValue:s},{transition:i}){!e!=!s&&(i?e?(i.beforeEnter(t),gr(t,!0),i.enter(t)):i.leave(t,()=>{gr(t,!1)}):gr(t,e))},beforeUnmount(t,{value:e}){gr(t,e)}};function gr(t,e){t.style.display=e?t._vod:"none"}const bI=Bt({patchProp:pI},eI);let Op;function yI(){return Op||(Op=OC(bI))}const Pc=(...t)=>{const e=yI().createApp(...t),{mount:s}=e;return e.mount=i=>{const n=xI(i);if(!n)return;const o=e._component;!Fe(o)&&!o.render&&!o.template&&(o.template=n.innerHTML),n.innerHTML="";const r=s(n,!1,n instanceof SVGElement);return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),r},e};function xI(t){return At(t)?document.querySelector(t):t}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const bo=typeof window<"u";function wI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Qe=Object.assign;function Cd(t,e){const s={};for(const i in e){const n=e[i];s[i]=ri(n)?n.map(t):t(n)}return s}const Rr=()=>{},ri=Array.isArray,$I=/\/$/,kI=t=>t.replace($I,"");function Id(t,e,s="/"){let i,n={},o="",r="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),o=e.slice(l+1,a>-1?a:e.length),n=t(o)),a>-1&&(i=i||e.slice(0,a),r=e.slice(a,e.length)),i=II(i??e,s),{fullPath:i+(o&&"?")+o+r,path:i,query:n,hash:r}}function _I(t,e){const s=e.query?t(e.query):"";return e.path+(s&&"?")+s+(e.hash||"")}function Ap(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function SI(t,e,s){const i=e.matched.length-1,n=s.matched.length-1;return i>-1&&i===n&&qo(e.matched[i],s.matched[n])&&mb(e.params,s.params)&&t(e.query)===t(s.query)&&e.hash===s.hash}function qo(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function mb(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const s in t)if(!CI(t[s],e[s]))return!1;return!0}function CI(t,e){return ri(t)?Pp(t,e):ri(e)?Pp(e,t):t===e}function Pp(t,e){return ri(e)?t.length===e.length&&t.every((s,i)=>s===e[i]):t.length===1&&t[0]===e}function II(t,e){if(t.startsWith("/"))return t;if(!t)return e;const s=e.split("/"),i=t.split("/"),n=i[i.length-1];(n===".."||n===".")&&i.push("");let o=s.length-1,r,a;for(r=0;r<i.length;r++)if(a=i[r],a!==".")if(a==="..")o>1&&o--;else break;return s.slice(0,o).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var sa;(function(t){t.pop="pop",t.push="push"})(sa||(sa={}));var Er;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Er||(Er={}));function TI(t){if(!t)if(bo){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),kI(t)}const FI=/^[^#]+#/;function DI(t,e){return t.replace(FI,"#")+e}function RI(t,e){const s=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-s.left-(e.left||0),top:i.top-s.top-(e.top||0)}}const Lc=()=>({left:window.pageXOffset,top:window.pageYOffset});function EI(t){let e;if("el"in t){const s=t.el,i=typeof s=="string"&&s.startsWith("#"),n=typeof s=="string"?i?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!n)return;e=RI(n,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Lp(t,e){return(history.state?history.state.position-e:-1)+t}const lu=new Map;function OI(t,e){lu.set(t,e)}function AI(t){const e=lu.get(t);return lu.delete(t),e}let PI=()=>location.protocol+"//"+location.host;function gb(t,e){const{pathname:s,search:i,hash:n}=e,o=t.indexOf("#");if(o>-1){let a=n.includes(t.slice(o))?t.slice(o).length:1,l=n.slice(a);return l[0]!=="/"&&(l="/"+l),Ap(l,"")}return Ap(s,t)+i+n}function LI(t,e,s,i){let n=[],o=[],r=null;const a=({state:f})=>{const y=gb(t,location),w=s.value,$=e.value;let _=0;if(f){if(s.value=y,e.value=f,r&&r===w){r=null;return}_=$?f.position-$.position:0}else i(y);n.forEach(A=>{A(s.value,w,{delta:_,type:sa.pop,direction:_?_>0?Er.forward:Er.back:Er.unknown})})};function l(){r=s.value}function c(f){n.push(f);const y=()=>{const w=n.indexOf(f);w>-1&&n.splice(w,1)};return o.push(y),y}function d(){const{history:f}=window;f.state&&f.replaceState(Qe({},f.state,{scroll:Lc()}),"")}function u(){for(const f of o)f();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:c,destroy:u}}function Mp(t,e,s,i=!1,n=!1){return{back:t,current:e,forward:s,replaced:i,position:window.history.length,scroll:n?Lc():null}}function MI(t){const{history:e,location:s}=window,i={value:gb(t,s)},n={value:e.state};n.value||o(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(l,c,d){const u=t.indexOf("#"),f=u>-1?(s.host&&document.querySelector("base")?t:t.slice(u))+l:PI()+t+l;try{e[d?"replaceState":"pushState"](c,"",f),n.value=c}catch(y){console.error(y),s[d?"replace":"assign"](f)}}function r(l,c){const d=Qe({},e.state,Mp(n.value.back,l,n.value.forward,!0),c,{position:n.value.position});o(l,d,!0),i.value=l}function a(l,c){const d=Qe({},n.value,e.state,{forward:l,scroll:Lc()});o(d.current,d,!0);const u=Qe({},Mp(i.value,l,null),{position:d.position+1},c);o(l,u,!1),i.value=l}return{location:i,state:n,push:a,replace:r}}function VI(t){t=TI(t);const e=MI(t),s=LI(t,e.state,e.location,e.replace);function i(o,r=!0){r||s.pauseListeners(),history.go(o)}const n=Qe({location:"",base:t,go:i,createHref:DI.bind(null,t)},e,s);return Object.defineProperty(n,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(n,"state",{enumerable:!0,get:()=>e.state.value}),n}function HI(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),VI(t)}function NI(t){return typeof t=="string"||t&&typeof t=="object"}function vb(t){return typeof t=="string"||typeof t=="symbol"}const sn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},bb=Symbol("");var Vp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Vp||(Vp={}));function Go(t,e){return Qe(new Error,{type:t,[bb]:!0},e)}function Ci(t,e){return t instanceof Error&&bb in t&&(e==null||!!(t.type&e))}const Hp="[^/]+?",zI={sensitive:!1,strict:!1,start:!0,end:!0},BI=/[.+*?^${}()[\]/\\]/g;function jI(t,e){const s=Qe({},zI,e),i=[];let n=s.start?"^":"";const o=[];for(const c of t){const d=c.length?[]:[90];s.strict&&!c.length&&(n+="/");for(let u=0;u<c.length;u++){const f=c[u];let y=40+(s.sensitive?.25:0);if(f.type===0)u||(n+="/"),n+=f.value.replace(BI,"\\$&"),y+=40;else if(f.type===1){const{value:w,repeatable:$,optional:_,regexp:A}=f;o.push({name:w,repeatable:$,optional:_});const P=A||Hp;if(P!==Hp){y+=10;try{new RegExp(`(${P})`)}catch(Y){throw new Error(`Invalid custom RegExp for param "${w}" (${P}): `+Y.message)}}let re=$?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;u||(re=_&&c.length<2?`(?:/${re})`:"/"+re),_&&(re+="?"),n+=re,y+=20,_&&(y+=-8),$&&(y+=-20),P===".*"&&(y+=-50)}d.push(y)}i.push(d)}if(s.strict&&s.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}s.strict||(n+="/?"),s.end?n+="$":s.strict&&(n+="(?:/|$)");const r=new RegExp(n,s.sensitive?"":"i");function a(c){const d=c.match(r),u={};if(!d)return null;for(let f=1;f<d.length;f++){const y=d[f]||"",w=o[f-1];u[w.name]=y&&w.repeatable?y.split("/"):y}return u}function l(c){let d="",u=!1;for(const f of t){(!u||!d.endsWith("/"))&&(d+="/"),u=!1;for(const y of f)if(y.type===0)d+=y.value;else if(y.type===1){const{value:w,repeatable:$,optional:_}=y,A=w in c?c[w]:"";if(ri(A)&&!$)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const P=ri(A)?A.join("/"):A;if(!P)if(_)f.length<2&&(d.endsWith("/")?d=d.slice(0,-1):u=!0);else throw new Error(`Missing required param "${w}"`);d+=P}}return d||"/"}return{re:r,score:i,keys:o,parse:a,stringify:l}}function UI(t,e){let s=0;for(;s<t.length&&s<e.length;){const i=e[s]-t[s];if(i)return i;s++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function YI(t,e){let s=0;const i=t.score,n=e.score;for(;s<i.length&&s<n.length;){const o=UI(i[s],n[s]);if(o)return o;s++}if(Math.abs(n.length-i.length)===1){if(Np(i))return 1;if(Np(n))return-1}return n.length-i.length}function Np(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const WI={type:0,value:""},qI=/[a-zA-Z0-9_]/;function GI(t){if(!t)return[[]];if(t==="/")return[[WI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${s})/"${c}": ${y}`)}let s=0,i=s;const n=[];let o;function r(){o&&n.push(o),o=[]}let a=0,l,c="",d="";function u(){c&&(s===0?o.push({type:0,value:c}):s===1||s===2||s===3?(o.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:c,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&s!==2){i=s,s=4;continue}switch(s){case 0:l==="/"?(c&&u(),r()):l===":"?(u(),s=1):f();break;case 4:f(),s=i;break;case 1:l==="("?s=2:qI.test(l)?f():(u(),s=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:s=3:d+=l;break;case 3:u(),s=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,d="";break;default:e("Unknown state");break}}return s===2&&e(`Unfinished custom RegExp for param "${c}"`),u(),r(),n}function ZI(t,e,s){const i=jI(GI(t.path),s),n=Qe(i,{record:t,parent:e,children:[],alias:[]});return e&&!n.record.aliasOf==!e.record.aliasOf&&e.children.push(n),n}function XI(t,e){const s=[],i=new Map;e=jp({strict:!1,end:!0,sensitive:!1},e);function n(d){return i.get(d)}function o(d,u,f){const y=!f,w=QI(d);w.aliasOf=f&&f.record;const $=jp(e,d),_=[w];if("alias"in d){const re=typeof d.alias=="string"?[d.alias]:d.alias;for(const Y of re)_.push(Qe({},w,{components:f?f.record.components:w.components,path:Y,aliasOf:f?f.record:w}))}let A,P;for(const re of _){const{path:Y}=re;if(u&&Y[0]!=="/"){const ge=u.record.path,be=ge[ge.length-1]==="/"?"":"/";re.path=u.record.path+(Y&&be+Y)}if(A=ZI(re,u,$),f?f.alias.push(A):(P=P||A,P!==A&&P.alias.push(A),y&&d.name&&!Bp(A)&&r(d.name)),w.children){const ge=w.children;for(let be=0;be<ge.length;be++)o(ge[be],A,f&&f.children[be])}f=f||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&l(A)}return P?()=>{r(P)}:Rr}function r(d){if(vb(d)){const u=i.get(d);u&&(i.delete(d),s.splice(s.indexOf(u),1),u.children.forEach(r),u.alias.forEach(r))}else{const u=s.indexOf(d);u>-1&&(s.splice(u,1),d.record.name&&i.delete(d.record.name),d.children.forEach(r),d.alias.forEach(r))}}function a(){return s}function l(d){let u=0;for(;u<s.length&&YI(d,s[u])>=0&&(d.record.path!==s[u].record.path||!yb(d,s[u]));)u++;s.splice(u,0,d),d.record.name&&!Bp(d)&&i.set(d.record.name,d)}function c(d,u){let f,y={},w,$;if("name"in d&&d.name){if(f=i.get(d.name),!f)throw Go(1,{location:d});$=f.record.name,y=Qe(zp(u.params,f.keys.filter(P=>!P.optional).map(P=>P.name)),d.params&&zp(d.params,f.keys.map(P=>P.name))),w=f.stringify(y)}else if("path"in d)w=d.path,f=s.find(P=>P.re.test(w)),f&&(y=f.parse(w),$=f.record.name);else{if(f=u.name?i.get(u.name):s.find(P=>P.re.test(u.path)),!f)throw Go(1,{location:d,currentLocation:u});$=f.record.name,y=Qe({},u.params,d.params),w=f.stringify(y)}const _=[];let A=f;for(;A;)_.unshift(A.record),A=A.parent;return{name:$,path:w,params:y,matched:_,meta:KI(_)}}return t.forEach(d=>o(d)),{addRoute:o,resolve:c,removeRoute:r,getRoutes:a,getRecordMatcher:n}}function zp(t,e){const s={};for(const i of e)i in t&&(s[i]=t[i]);return s}function QI(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:JI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function JI(t){const e={},s=t.props||!1;if("component"in t)e.default=s;else for(const i in t.components)e[i]=typeof s=="object"?s[i]:s;return e}function Bp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function KI(t){return t.reduce((e,s)=>Qe(e,s.meta),{})}function jp(t,e){const s={};for(const i in t)s[i]=i in e?e[i]:t[i];return s}function yb(t,e){return e.children.some(s=>s===t||yb(t,s))}const xb=/#/g,eT=/&/g,tT=/\//g,sT=/=/g,iT=/\?/g,wb=/\+/g,nT=/%5B/g,oT=/%5D/g,$b=/%5E/g,rT=/%60/g,kb=/%7B/g,aT=/%7C/g,_b=/%7D/g,lT=/%20/g;function Th(t){return encodeURI(""+t).replace(aT,"|").replace(nT,"[").replace(oT,"]")}function cT(t){return Th(t).replace(kb,"{").replace(_b,"}").replace($b,"^")}function cu(t){return Th(t).replace(wb,"%2B").replace(lT,"+").replace(xb,"%23").replace(eT,"%26").replace(rT,"`").replace(kb,"{").replace(_b,"}").replace($b,"^")}function dT(t){return cu(t).replace(sT,"%3D")}function uT(t){return Th(t).replace(xb,"%23").replace(iT,"%3F")}function hT(t){return t==null?"":uT(t).replace(tT,"%2F")}function Cl(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function fT(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let n=0;n<i.length;++n){const o=i[n].replace(wb," "),r=o.indexOf("="),a=Cl(r<0?o:o.slice(0,r)),l=r<0?null:Cl(o.slice(r+1));if(a in e){let c=e[a];ri(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Up(t){let e="";for(let s in t){const i=t[s];if(s=dT(s),i==null){i!==void 0&&(e+=(e.length?"&":"")+s);continue}(ri(i)?i.map(o=>o&&cu(o)):[i&&cu(i)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+s,o!=null&&(e+="="+o))})}return e}function pT(t){const e={};for(const s in t){const i=t[s];i!==void 0&&(e[s]=ri(i)?i.map(n=>n==null?null:""+n):i==null?i:""+i)}return e}const mT=Symbol(""),Yp=Symbol(""),Fh=Symbol(""),Sb=Symbol(""),du=Symbol("");function vr(){let t=[];function e(i){return t.push(i),()=>{const n=t.indexOf(i);n>-1&&t.splice(n,1)}}function s(){t=[]}return{add:e,list:()=>t.slice(),reset:s}}function rn(t,e,s,i,n){const o=i&&(i.enterCallbacks[n]=i.enterCallbacks[n]||[]);return()=>new Promise((r,a)=>{const l=u=>{u===!1?a(Go(4,{from:s,to:e})):u instanceof Error?a(u):NI(u)?a(Go(2,{from:e,to:u})):(o&&i.enterCallbacks[n]===o&&typeof u=="function"&&o.push(u),r())},c=t.call(i&&i.instances[n],e,s,l);let d=Promise.resolve(c);t.length<3&&(d=d.then(l)),d.catch(u=>a(u))})}function Td(t,e,s,i){const n=[];for(const o of t)for(const r in o.components){let a=o.components[r];if(!(e!=="beforeRouteEnter"&&!o.instances[r]))if(gT(a)){const c=(a.__vccOpts||a)[e];c&&n.push(rn(c,s,i,o,r))}else{let l=a();n.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${o.path}"`));const d=wI(c)?c.default:c;o.components[r]=d;const f=(d.__vccOpts||d)[e];return f&&rn(f,s,i,o,r)()}))}}return n}function gT(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Wp(t){const e=Ts(Fh),s=Ts(Sb),i=Ke(()=>e.resolve(ve(t.to))),n=Ke(()=>{const{matched:l}=i.value,{length:c}=l,d=l[c-1],u=s.matched;if(!d||!u.length)return-1;const f=u.findIndex(qo.bind(null,d));if(f>-1)return f;const y=qp(l[c-2]);return c>1&&qp(d)===y&&u[u.length-1].path!==y?u.findIndex(qo.bind(null,l[c-2])):f}),o=Ke(()=>n.value>-1&&xT(s.params,i.value.params)),r=Ke(()=>n.value>-1&&n.value===s.matched.length-1&&mb(s.params,i.value.params));function a(l={}){return yT(l)?e[ve(t.replace)?"replace":"push"](ve(t.to)).catch(Rr):Promise.resolve()}return{route:i,href:Ke(()=>i.value.href),isActive:o,isExactActive:r,navigate:a}}const vT=ke({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Wp,setup(t,{slots:e}){const s=lo(Wp(t)),{options:i}=Ts(Fh),n=Ke(()=>({[Gp(t.activeClass,i.linkActiveClass,"router-link-active")]:s.isActive,[Gp(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const o=e.default&&e.default(s);return t.custom?o:Hi("a",{"aria-current":s.isExactActive?t.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:n.value},o)}}}),bT=vT;function yT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function xT(t,e){for(const s in e){const i=e[s],n=t[s];if(typeof i=="string"){if(i!==n)return!1}else if(!ri(n)||n.length!==i.length||i.some((o,r)=>o!==n[r]))return!1}return!0}function qp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Gp=(t,e,s)=>t??e??s,wT=ke({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:s}){const i=Ts(du),n=Ke(()=>t.route||i.value),o=Ts(Yp,0),r=Ke(()=>{let c=ve(o);const{matched:d}=n.value;let u;for(;(u=d[c])&&!u.components;)c++;return c}),a=Ke(()=>n.value.matched[r.value]);Eo(Yp,Ke(()=>r.value+1)),Eo(mT,a),Eo(du,n);const l=dt();return Ai(()=>[l.value,a.value,t.name],([c,d,u],[f,y,w])=>{d&&(d.instances[u]=c,y&&y!==d&&c&&c===f&&(d.leaveGuards.size||(d.leaveGuards=y.leaveGuards),d.updateGuards.size||(d.updateGuards=y.updateGuards))),c&&d&&(!y||!qo(d,y)||!f)&&(d.enterCallbacks[u]||[]).forEach($=>$(c))},{flush:"post"}),()=>{const c=n.value,d=t.name,u=a.value,f=u&&u.components[d];if(!f)return Zp(s.default,{Component:f,route:c});const y=u.props[d],w=y?y===!0?c.params:typeof y=="function"?y(c):y:null,_=Hi(f,Qe({},w,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(u.instances[d]=null)},ref:l}));return Zp(s.default,{Component:_,route:c})||_}}});function Zp(t,e){if(!t)return null;const s=t(e);return s.length===1?s[0]:s}const $T=wT;function kT(t){const e=XI(t.routes,t),s=t.parseQuery||fT,i=t.stringifyQuery||Up,n=t.history,o=vr(),r=vr(),a=vr(),l=zS(sn);let c=sn;bo&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Cd.bind(null,F=>""+F),u=Cd.bind(null,hT),f=Cd.bind(null,Cl);function y(F,te){let W,ae;return vb(F)?(W=e.getRecordMatcher(F),ae=te):ae=F,e.addRoute(ae,W)}function w(F){const te=e.getRecordMatcher(F);te&&e.removeRoute(te)}function $(){return e.getRoutes().map(F=>F.record)}function _(F){return!!e.getRecordMatcher(F)}function A(F,te){if(te=Qe({},te||l.value),typeof F=="string"){const x=Id(s,F,te.path),T=e.resolve({path:x.path},te),O=n.createHref(x.fullPath);return Qe(x,T,{params:f(T.params),hash:Cl(x.hash),redirectedFrom:void 0,href:O})}let W;if("path"in F)W=Qe({},F,{path:Id(s,F.path,te.path).path});else{const x=Qe({},F.params);for(const T in x)x[T]==null&&delete x[T];W=Qe({},F,{params:u(x)}),te.params=u(te.params)}const ae=e.resolve(W,te),Ue=F.hash||"";ae.params=d(f(ae.params));const m=_I(i,Qe({},F,{hash:cT(Ue),path:ae.path})),v=n.createHref(m);return Qe({fullPath:m,hash:Ue,query:i===Up?pT(F.query):F.query||{}},ae,{redirectedFrom:void 0,href:v})}function P(F){return typeof F=="string"?Id(s,F,l.value.path):Qe({},F)}function re(F,te){if(c!==F)return Go(8,{from:te,to:F})}function Y(F){return R(F)}function ge(F){return Y(Qe(P(F),{replace:!0}))}function be(F){const te=F.matched[F.matched.length-1];if(te&&te.redirect){const{redirect:W}=te;let ae=typeof W=="function"?W(F):W;return typeof ae=="string"&&(ae=ae.includes("?")||ae.includes("#")?ae=P(ae):{path:ae},ae.params={}),Qe({query:F.query,hash:F.hash,params:"path"in ae?{}:F.params},ae)}}function R(F,te){const W=c=A(F),ae=l.value,Ue=F.state,m=F.force,v=F.replace===!0,x=be(W);if(x)return R(Qe(P(x),{state:typeof x=="object"?Qe({},Ue,x.state):Ue,force:m,replace:v}),te||W);const T=W;T.redirectedFrom=te;let O;return!m&&SI(i,ae,W)&&(O=Go(16,{to:T,from:ae}),Gt(ae,ae,!0,!1)),(O?Promise.resolve(O):st(T,ae)).catch(L=>Ci(L)?Ci(L,2)?L:is(L):Ve(L,T,ae)).then(L=>{if(L){if(Ci(L,2))return R(Qe({replace:v},P(L.to),{state:typeof L.to=="object"?Qe({},Ue,L.to.state):Ue,force:m}),te||T)}else L=Pt(T,ae,!0,v,Ue);return kt(T,ae,L),L})}function Ce(F,te){const W=re(F,te);return W?Promise.reject(W):Promise.resolve()}function Ee(F){const te=Si.values().next().value;return te&&typeof te.runWithContext=="function"?te.runWithContext(F):F()}function st(F,te){let W;const[ae,Ue,m]=_T(F,te);W=Td(ae.reverse(),"beforeRouteLeave",F,te);for(const x of ae)x.leaveGuards.forEach(T=>{W.push(rn(T,F,te))});const v=Ce.bind(null,F,te);return W.push(v),Mt(W).then(()=>{W=[];for(const x of o.list())W.push(rn(x,F,te));return W.push(v),Mt(W)}).then(()=>{W=Td(Ue,"beforeRouteUpdate",F,te);for(const x of Ue)x.updateGuards.forEach(T=>{W.push(rn(T,F,te))});return W.push(v),Mt(W)}).then(()=>{W=[];for(const x of m)if(x.beforeEnter)if(ri(x.beforeEnter))for(const T of x.beforeEnter)W.push(rn(T,F,te));else W.push(rn(x.beforeEnter,F,te));return W.push(v),Mt(W)}).then(()=>(F.matched.forEach(x=>x.enterCallbacks={}),W=Td(m,"beforeRouteEnter",F,te),W.push(v),Mt(W))).then(()=>{W=[];for(const x of r.list())W.push(rn(x,F,te));return W.push(v),Mt(W)}).catch(x=>Ci(x,8)?x:Promise.reject(x))}function kt(F,te,W){a.list().forEach(ae=>Ee(()=>ae(F,te,W)))}function Pt(F,te,W,ae,Ue){const m=re(F,te);if(m)return m;const v=te===sn,x=bo?history.state:{};W&&(ae||v?n.replace(F.fullPath,Qe({scroll:v&&x&&x.scroll},Ue)):n.push(F.fullPath,Ue)),l.value=F,Gt(F,te,W,v),is()}let fs;function _i(){fs||(fs=n.listen((F,te,W)=>{if(!Dn.listening)return;const ae=A(F),Ue=be(ae);if(Ue){R(Qe(Ue,{replace:!0}),ae).catch(Rr);return}c=ae;const m=l.value;bo&&OI(Lp(m.fullPath,W.delta),Lc()),st(ae,m).catch(v=>Ci(v,12)?v:Ci(v,2)?(R(v.to,ae).then(x=>{Ci(x,20)&&!W.delta&&W.type===sa.pop&&n.go(-1,!1)}).catch(Rr),Promise.reject()):(W.delta&&n.go(-W.delta,!1),Ve(v,ae,m))).then(v=>{v=v||Pt(ae,m,!1),v&&(W.delta&&!Ci(v,8)?n.go(-W.delta,!1):W.type===sa.pop&&Ci(v,20)&&n.go(-1,!1)),kt(ae,m,v)}).catch(Rr)}))}let ss=vr(),He=vr(),Ge;function Ve(F,te,W){is(F);const ae=He.list();return ae.length?ae.forEach(Ue=>Ue(F,te,W)):console.error(F),Promise.reject(F)}function ps(){return Ge&&l.value!==sn?Promise.resolve():new Promise((F,te)=>{ss.add([F,te])})}function is(F){return Ge||(Ge=!F,_i(),ss.list().forEach(([te,W])=>F?W(F):te()),ss.reset()),F}function Gt(F,te,W,ae){const{scrollBehavior:Ue}=t;if(!bo||!Ue)return Promise.resolve();const m=!W&&AI(Lp(F.fullPath,0))||(ae||!W)&&history.state&&history.state.scroll||null;return wh().then(()=>Ue(F,te,m)).then(v=>v&&EI(v)).catch(v=>Ve(v,F,te))}const Lt=F=>n.go(F);let ns;const Si=new Set,Dn={currentRoute:l,listening:!0,addRoute:y,removeRoute:w,hasRoute:_,getRoutes:$,resolve:A,options:t,push:Y,replace:ge,go:Lt,back:()=>Lt(-1),forward:()=>Lt(1),beforeEach:o.add,beforeResolve:r.add,afterEach:a.add,onError:He.add,isReady:ps,install(F){const te=this;F.component("RouterLink",bT),F.component("RouterView",$T),F.config.globalProperties.$router=te,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>ve(l)}),bo&&!ns&&l.value===sn&&(ns=!0,Y(n.location).catch(Ue=>{}));const W={};for(const Ue in sn)Object.defineProperty(W,Ue,{get:()=>l.value[Ue],enumerable:!0});F.provide(Fh,te),F.provide(Sb,Vv(W)),F.provide(du,l);const ae=F.unmount;Si.add(F),F.unmount=function(){Si.delete(F),Si.size<1&&(c=sn,fs&&fs(),fs=null,l.value=sn,ns=!1,Ge=!1),ae()}}};function Mt(F){return F.reduce((te,W)=>te.then(()=>Ee(W)),Promise.resolve())}return Dn}function _T(t,e){const s=[],i=[],n=[],o=Math.max(e.matched.length,t.matched.length);for(let r=0;r<o;r++){const a=e.matched[r];a&&(t.matched.find(c=>qo(c,a))?i.push(a):s.push(a));const l=t.matched[r];l&&(e.matched.find(c=>qo(c,l))||n.push(l))}return[s,i,n]}const qt=(t,e)=>{const s=t.__vccOpts||t;for(const[i,n]of e)s[i]=n;return s},ST={};function CT(t,e){return null}const IT=qt(ST,[["render",CT]]),TT=[{path:"/",name:"Index",component:IT}],FT=kT({history:HI(),routes:TT,linkExactActiveClass:"active"});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rl=globalThis,Dh=rl.ShadowRoot&&(rl.ShadyCSS===void 0||rl.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Rh=Symbol(),Xp=new WeakMap;let Cb=class{constructor(e,s,i){if(this._$cssResult$=!0,i!==Rh)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o;const s=this.t;if(Dh&&e===void 0){const i=s!==void 0&&s.length===1;i&&(e=Xp.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Xp.set(s,e))}return e}toString(){return this.cssText}};const DT=t=>new Cb(typeof t=="string"?t:t+"",void 0,Rh),Qp=(t,...e)=>{const s=t.length===1?t[0]:e.reduce((i,n,o)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[o+1],t[0]);return new Cb(s,t,Rh)},RT=(t,e)=>{if(Dh)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of e){const i=document.createElement("style"),n=rl.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=s.cssText,t.appendChild(i)}},Jp=Dh?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(const i of e.cssRules)s+=i.cssText;return DT(s)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ET,defineProperty:OT,getOwnPropertyDescriptor:AT,getOwnPropertyNames:PT,getOwnPropertySymbols:LT,getPrototypeOf:MT}=Object,pn=globalThis,Kp=pn.trustedTypes,VT=Kp?Kp.emptyScript:"",Fd=pn.reactiveElementPolyfillSupport,Or=(t,e)=>t,Il={toAttribute(t,e){switch(e){case Boolean:t=t?VT:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},Eh=(t,e)=>!ET(t,e),em={attribute:!0,type:String,converter:Il,reflect:!1,hasChanged:Eh};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),pn.litPropertyMetadata??(pn.litPropertyMetadata=new WeakMap);let yo=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=em){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(e,s),!s.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,s);n!==void 0&&OT(this.prototype,e,n)}}static getPropertyDescriptor(e,s,i){const{get:n,set:o}=AT(this.prototype,e)??{get(){return this[s]},set(r){this[s]=r}};return{get(){return n==null?void 0:n.call(this)},set(r){const a=n==null?void 0:n.call(this);o.call(this,r),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??em}static _$Ei(){if(this.hasOwnProperty(Or("elementProperties")))return;const e=MT(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Or("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Or("properties"))){const s=this.properties,i=[...PT(s),...LT(s)];for(const n of i)this.createProperty(n,s[n])}const e=this[Symbol.metadata];if(e!==null){const s=litPropertyMetadata.get(e);if(s!==void 0)for(const[i,n]of s)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[s,i]of this.elementProperties){const n=this._$Eu(s,i);n!==void 0&&this._$Eh.set(n,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const s=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const n of i)s.unshift(Jp(n))}else e!==void 0&&s.push(Jp(e));return s}static _$Eu(e,s){const i=s.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(s=>s(this))}addController(e){var s;(this._$ES??(this._$ES=[])).push(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)==null||s.call(e))}removeController(e){var s;(s=this._$ES)==null||s.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){const e=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return RT(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)==null||e.forEach(s=>{var i;return(i=s.hostConnected)==null?void 0:i.call(s)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)==null||e.forEach(s=>{var i;return(i=s.hostDisconnected)==null?void 0:i.call(s)})}attributeChangedCallback(e,s,i){this._$AK(e,i)}_$EO(e,s){var o;const i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(n!==void 0&&i.reflect===!0){const r=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:Il).toAttribute(s,i.type);this._$Em=e,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(e,s){var o;const i=this.constructor,n=i._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const r=i.getPropertyOptions(n),a=typeof r.converter=="function"?{fromAttribute:r.converter}:((o=r.converter)==null?void 0:o.fromAttribute)!==void 0?r.converter:Il;this._$Em=n,this[n]=a.fromAttribute(s,r.type),this._$Em=null}}requestUpdate(e,s,i,n=!1,o){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??Eh)(n?o:this[e],s))return;this.C(e,s,i)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,s,i){this._$AL.has(e)||this._$AL.set(e,s),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(s){Promise.reject(s)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[o,r]of this._$Ep)this[o]=r;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[o,r]of n)r.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.C(o,this[o],r)}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(i=this._$ES)==null||i.forEach(n=>{var o;return(o=n.hostUpdate)==null?void 0:o.call(n)}),this.update(s)):this._$ET()}catch(n){throw e=!1,this._$ET(),n}e&&this._$AE(s)}willUpdate(e){}_$AE(e){var s;(s=this._$ES)==null||s.forEach(i=>{var n;return(n=i.hostUpdated)==null?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(s=>this._$EO(s,this[s]))),this._$ET()}updated(e){}firstUpdated(e){}};yo.elementStyles=[],yo.shadowRootOptions={mode:"open"},yo[Or("elementProperties")]=new Map,yo[Or("finalized")]=new Map,Fd==null||Fd({ReactiveElement:yo}),(pn.reactiveElementVersions??(pn.reactiveElementVersions=[])).push("2.0.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ar=globalThis,Tl=Ar.trustedTypes,tm=Tl?Tl.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ib="$lit$",ln=`lit$${(Math.random()+"").slice(9)}$`,Tb="?"+ln,HT=`<${Tb}>`,eo=document,ia=()=>eo.createComment(""),na=t=>t===null||typeof t!="object"&&typeof t!="function",Fb=Array.isArray,NT=t=>Fb(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Dd=`[ 	
\f\r]`,br=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,sm=/-->/g,im=/>/g,Ln=RegExp(`>|${Dd}(?:([^\\s"'>=/]+)(${Dd}*=${Dd}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nm=/'/g,om=/"/g,Db=/^(?:script|style|textarea|title)$/i,zT=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),BT=zT(1),Zo=Symbol.for("lit-noChange"),Nt=Symbol.for("lit-nothing"),rm=new WeakMap,Bn=eo.createTreeWalker(eo,129);function Rb(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return tm!==void 0?tm.createHTML(e):e}const jT=(t,e)=>{const s=t.length-1,i=[];let n,o=e===2?"<svg>":"",r=br;for(let a=0;a<s;a++){const l=t[a];let c,d,u=-1,f=0;for(;f<l.length&&(r.lastIndex=f,d=r.exec(l),d!==null);)f=r.lastIndex,r===br?d[1]==="!--"?r=sm:d[1]!==void 0?r=im:d[2]!==void 0?(Db.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=Ln):d[3]!==void 0&&(r=Ln):r===Ln?d[0]===">"?(r=n??br,u=-1):d[1]===void 0?u=-2:(u=r.lastIndex-d[2].length,c=d[1],r=d[3]===void 0?Ln:d[3]==='"'?om:nm):r===om||r===nm?r=Ln:r===sm||r===im?r=br:(r=Ln,n=void 0);const y=r===Ln&&t[a+1].startsWith("/>")?" ":"";o+=r===br?l+HT:u>=0?(i.push(c),l.slice(0,u)+Ib+l.slice(u)+ln+y):l+ln+(u===-2?a:y)}return[Rb(t,o+(t[s]||"<?>")+(e===2?"</svg>":"")),i]};class oa{constructor({strings:e,_$litType$:s},i){let n;this.parts=[];let o=0,r=0;const a=e.length-1,l=this.parts,[c,d]=jT(e,s);if(this.el=oa.createElement(c,i),Bn.currentNode=this.el.content,s===2){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(n=Bn.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes())for(const u of n.getAttributeNames())if(u.endsWith(Ib)){const f=d[r++],y=n.getAttribute(u).split(ln),w=/([.?@])?(.*)/.exec(f);l.push({type:1,index:o,name:w[2],strings:y,ctor:w[1]==="."?YT:w[1]==="?"?WT:w[1]==="@"?qT:Mc}),n.removeAttribute(u)}else u.startsWith(ln)&&(l.push({type:6,index:o}),n.removeAttribute(u));if(Db.test(n.tagName)){const u=n.textContent.split(ln),f=u.length-1;if(f>0){n.textContent=Tl?Tl.emptyScript:"";for(let y=0;y<f;y++)n.append(u[y],ia()),Bn.nextNode(),l.push({type:2,index:++o});n.append(u[f],ia())}}}else if(n.nodeType===8)if(n.data===Tb)l.push({type:2,index:o});else{let u=-1;for(;(u=n.data.indexOf(ln,u+1))!==-1;)l.push({type:7,index:o}),u+=ln.length-1}o++}}static createElement(e,s){const i=eo.createElement("template");return i.innerHTML=e,i}}function Xo(t,e,s=t,i){var r,a;if(e===Zo)return e;let n=i!==void 0?(r=s._$Co)==null?void 0:r[i]:s._$Cl;const o=na(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==o&&((a=n==null?void 0:n._$AO)==null||a.call(n,!1),o===void 0?n=void 0:(n=new o(t),n._$AT(t,s,i)),i!==void 0?(s._$Co??(s._$Co=[]))[i]=n:s._$Cl=n),n!==void 0&&(e=Xo(t,n._$AS(t,e.values),n,i)),e}let UT=class{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:s},parts:i}=this._$AD,n=((e==null?void 0:e.creationScope)??eo).importNode(s,!0);Bn.currentNode=n;let o=Bn.nextNode(),r=0,a=0,l=i[0];for(;l!==void 0;){if(r===l.index){let c;l.type===2?c=new wa(o,o.nextSibling,this,e):l.type===1?c=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(c=new GT(o,this,e)),this._$AV.push(c),l=i[++a]}r!==(l==null?void 0:l.index)&&(o=Bn.nextNode(),r++)}return Bn.currentNode=eo,n}p(e){let s=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,s),s+=i.strings.length-2):i._$AI(e[s])),s++}};class wa{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,s,i,n){this.type=2,this._$AH=Nt,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=i,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=Xo(this,e,s),na(e)?e===Nt||e==null||e===""?(this._$AH!==Nt&&this._$AR(),this._$AH=Nt):e!==this._$AH&&e!==Zo&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):NT(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Nt&&na(this._$AH)?this._$AA.nextSibling.data=e:this.$(eo.createTextNode(e)),this._$AH=e}g(e){var o;const{values:s,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=oa.createElement(Rb(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===n)this._$AH.p(s);else{const r=new UT(n,this),a=r.u(this.options);r.p(s),this.$(a),this._$AH=r}}_$AC(e){let s=rm.get(e.strings);return s===void 0&&rm.set(e.strings,s=new oa(e)),s}T(e){Fb(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,n=0;for(const o of e)n===s.length?s.push(i=new wa(this.k(ia()),this.k(ia()),this,this.options)):i=s[n],i._$AI(o),n++;n<s.length&&(this._$AR(i&&i._$AB.nextSibling,n),s.length=n)}_$AR(e=this._$AA.nextSibling,s){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,s);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var s;this._$AM===void 0&&(this._$Cv=e,(s=this._$AP)==null||s.call(this,e))}}class Mc{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,i,n,o){this.type=1,this._$AH=Nt,this._$AN=void 0,this.element=e,this.name=s,this._$AM=n,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Nt}_$AI(e,s=this,i,n){const o=this.strings;let r=!1;if(o===void 0)e=Xo(this,e,s,0),r=!na(e)||e!==this._$AH&&e!==Zo,r&&(this._$AH=e);else{const a=e;let l,c;for(e=o[0],l=0;l<o.length-1;l++)c=Xo(this,a[i+l],s,l),c===Zo&&(c=this._$AH[l]),r||(r=!na(c)||c!==this._$AH[l]),c===Nt?e=Nt:e!==Nt&&(e+=(c??"")+o[l+1]),this._$AH[l]=c}r&&!n&&this.j(e)}j(e){e===Nt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}let YT=class extends Mc{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Nt?void 0:e}},WT=class extends Mc{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Nt)}},qT=class extends Mc{constructor(e,s,i,n,o){super(e,s,i,n,o),this.type=5}_$AI(e,s=this){if((e=Xo(this,e,s,0)??Nt)===Zo)return;const i=this._$AH,n=e===Nt&&i!==Nt||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==Nt&&(i===Nt||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,e):this._$AH.handleEvent(e)}};class GT{constructor(e,s,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Xo(this,e)}}const Rd=Ar.litHtmlPolyfillSupport;Rd==null||Rd(oa,wa),(Ar.litHtmlVersions??(Ar.litHtmlVersions=[])).push("3.0.0");const ZT=(t,e,s)=>{const i=(s==null?void 0:s.renderBefore)??e;let n=i._$litPart$;if(n===void 0){const o=(s==null?void 0:s.renderBefore)??null;i._$litPart$=n=new wa(e.insertBefore(ia(),o),o,void 0,s??{})}return n._$AI(t),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Pr=class extends yo{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const e=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=e.firstChild),e}update(e){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ZT(s,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Zo}};var km;Pr._$litElement$=!0,Pr.finalized=!0,(km=globalThis.litElementHydrateSupport)==null||km.call(globalThis,{LitElement:Pr});const Ed=globalThis.litElementPolyfillSupport;Ed==null||Ed({LitElement:Pr});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const XT=t=>(e,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const QT={attribute:!0,type:String,converter:Il,reflect:!1,hasChanged:Eh},JT=(t=QT,e,s)=>{const{kind:i,metadata:n}=s;let o=globalThis.litPropertyMetadata.get(n);if(o===void 0&&globalThis.litPropertyMetadata.set(n,o=new Map),o.set(s.name,t),i==="accessor"){const{name:r}=s;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(r,l,t)},init(a){return a!==void 0&&this.C(r,void 0,t),a}}}if(i==="setter"){const{name:r}=s;return function(a){const l=this[r];e.call(this,a),this.requestUpdate(r,l,t)}}throw Error("Unsupported decorator location: "+i)};function KT(t){return(e,s)=>typeof s=="object"?JT(t,e,s):((i,n,o)=>{const r=n.hasOwnProperty(o);return n.constructor.createProperty(o,r?{...i,wrapped:!0}:i),r?Object.getOwnPropertyDescriptor(n,o):void 0})(t,e,s)}var eF=Object.defineProperty,tF=Object.getOwnPropertyDescriptor,Eb=(t,e,s,i)=>{for(var n=i>1?void 0:i?tF(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&eF(e,s,n),n};class Ob extends Pr{}Ob.styles=[Qp`
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
        `,Qp`
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
        `];class sF extends Ob{render(){return BT`
            <p class=${this.type}>
                <slot></slot>
            </p>
        `}}let uu=class extends sF{constructor(){super(...arguments),this.type="body-medium"}};Eb([KT({type:String,attribute:"type"})],uu.prototype,"type",2);uu=Eb([XT("md-text")],uu);const iF=ke({__name:"ExpandLayout",setup(t){const e=dt(!1),s=i=>{e.value=i};return(i,n)=>(Q(),Se("div",null,[xs(i.$slots,"actions",{isExpanded:e.value,setIsExpanded:s}),xs(i.$slots,"expanded-content",{isExpanded:e.value,setIsExpanded:s})]))}}),nF={},oF={class:"fixed"};function rF(t,e){return Q(),Se("div",oF,[xs(t.$slots,"default")])}const aF=qt(nF,[["render",rF]]),lF={},cF={class:"flex"};function dF(t,e){return Q(),Se("div",cF,[xs(t.$slots,"default")])}const uF=qt(lF,[["render",dF]]),hF={},fF={class:"relative p-2 h-full w-full"};function pF(t,e){return Q(),Se("div",fF,[xs(t.$slots,"default")])}const mF=qt(hF,[["render",pF]]),gF={},vF={class:"sticky top-0"};function bF(t,e){return Q(),Se("div",vF,[xs(t.$slots,"default")])}const yF=qt(gF,[["render",bF]]),xF={},wF={class:"grid"};function $F(t,e){return Q(),Se("div",wF,[xs(t.$slots,"default",{},void 0,!0)])}const kF=qt(xF,[["render",$F],["__scopeId","data-v-8ad9707e"]]),_F={},SF={class:"material-symbols-outlined relative icon dark:text-white"};function CF(t,e){return Q(),Se("span",SF,[xs(t.$slots,"default",{},void 0,!0)])}const IF=qt(_F,[["render",CF],["__scopeId","data-v-970071d6"]]),TF=ke({__name:"IconButton",props:{hasHover:{type:Boolean,default:!1},hasActive:{type:Boolean,default:!1},hasFilled:{type:Boolean,default:!1},hasShape:{type:Boolean,default:!0},type:{default:"default"}},setup(t){const e=t;return(s,i)=>(Q(),Se("div",{class:Ut([e.hasHover?"icon-has-hover":"",e.hasShape?"rounded-control overflow-clip":"",e.type==="default"?"hover:bg-white/75 dark:hover:bg-black/75":"hover:bg-error-500/75"])},[C("div",{class:Ut([[e.hasActive?"icon-has-active":"",e.hasFilled?"icon-has-filled":""],"transition-all grid place-content-center w-full h-full"])},[xs(s.$slots,"default",{},void 0,!0)],2)],2))}}),FF=qt(TF,[["__scopeId","data-v-a8042e3a"]]),Ab={install:t=>{t.component("ExpandLayout",iF).component("FixedLayout",aF).component("FlexLayout",uF).component("PageLayout",mF).component("StickyLayout",yF).component("GridLayout",kF).component("Icon",IF).component("IconButton",FF)}};var DF=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Pb;const Vc=t=>Pb=t,Lb=Symbol();function hu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Lr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Lr||(Lr={}));function RF(){const t=Cv(!0),e=t.run(()=>dt({}));let s=[],i=[];const n=_c({install(o){Vc(n),n._a=o,o.provide(Lb,n),o.config.globalProperties.$pinia=n,i.forEach(r=>s.push(r)),i=[]},use(o){return!this._a&&!DF?i.push(o):s.push(o),this},_p:s,_a:null,_e:t,_s:new Map,state:e});return n}const Mb=()=>{};function am(t,e,s,i=Mb){t.push(e);const n=()=>{const o=t.indexOf(e);o>-1&&(t.splice(o,1),i())};return!s&&Iv()&&fS(n),n}function mo(t,...e){t.slice().forEach(s=>{s(...e)})}const EF=t=>t();function fu(t,e){t instanceof Map&&e instanceof Map&&e.forEach((s,i)=>t.set(i,s)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const s in e){if(!e.hasOwnProperty(s))continue;const i=e[s],n=t[s];hu(n)&&hu(i)&&t.hasOwnProperty(s)&&!It(i)&&!hn(i)?t[s]=fu(n,i):t[s]=i}return t}const OF=Symbol();function AF(t){return!hu(t)||!t.hasOwnProperty(OF)}const{assign:nn}=Object;function PF(t){return!!(It(t)&&t.effect)}function LF(t,e,s,i){const{state:n,actions:o,getters:r}=e,a=s.state.value[t];let l;function c(){a||(s.state.value[t]=n?n():{});const d=US(s.state.value[t]);return nn(d,o,Object.keys(r||{}).reduce((u,f)=>(u[f]=_c(Ke(()=>{Vc(s);const y=s._s.get(t);return r[f].call(y,y)})),u),{}))}return l=Vb(t,c,e,s,i,!0),l}function Vb(t,e,s={},i,n,o){let r;const a=nn({actions:{}},s),l={deep:!0};let c,d,u=[],f=[],y;const w=i.state.value[t];!o&&!w&&(i.state.value[t]={}),dt({});let $;function _(Ce){let Ee;c=d=!1,typeof Ce=="function"?(Ce(i.state.value[t]),Ee={type:Lr.patchFunction,storeId:t,events:y}):(fu(i.state.value[t],Ce),Ee={type:Lr.patchObject,payload:Ce,storeId:t,events:y});const st=$=Symbol();wh().then(()=>{$===st&&(c=!0)}),d=!0,mo(u,Ee,i.state.value[t])}const A=o?function(){const{state:Ee}=s,st=Ee?Ee():{};this.$patch(kt=>{nn(kt,st)})}:Mb;function P(){r.stop(),u=[],f=[],i._s.delete(t)}function re(Ce,Ee){return function(){Vc(i);const st=Array.from(arguments),kt=[],Pt=[];function fs(He){kt.push(He)}function _i(He){Pt.push(He)}mo(f,{args:st,name:Ce,store:ge,after:fs,onError:_i});let ss;try{ss=Ee.apply(this&&this.$id===t?this:ge,st)}catch(He){throw mo(Pt,He),He}return ss instanceof Promise?ss.then(He=>(mo(kt,He),He)).catch(He=>(mo(Pt,He),Promise.reject(He))):(mo(kt,ss),ss)}}const Y={_p:i,$id:t,$onAction:am.bind(null,f),$patch:_,$reset:A,$subscribe(Ce,Ee={}){const st=am(u,Ce,Ee.detached,()=>kt()),kt=r.run(()=>Ai(()=>i.state.value[t],Pt=>{(Ee.flush==="sync"?d:c)&&Ce({storeId:t,type:Lr.direct,events:y},Pt)},nn({},l,Ee)));return st},$dispose:P},ge=lo(Y);i._s.set(t,ge);const be=i._a&&i._a.runWithContext||EF,R=i._e.run(()=>(r=Cv(),be(()=>r.run(e))));for(const Ce in R){const Ee=R[Ce];if(It(Ee)&&!PF(Ee)||hn(Ee))o||(w&&AF(Ee)&&(It(Ee)?Ee.value=w[Ce]:fu(Ee,w[Ce])),i.state.value[t][Ce]=Ee);else if(typeof Ee=="function"){const st=re(Ce,Ee);R[Ce]=st,a.actions[Ce]=Ee}}return nn(ge,R),nn(je(ge),R),Object.defineProperty(ge,"$state",{get:()=>i.state.value[t],set:Ce=>{_(Ee=>{nn(Ee,Ce)})}}),i._p.forEach(Ce=>{nn(ge,r.run(()=>Ce({store:ge,app:i._a,pinia:i,options:a})))}),w&&o&&s.hydrate&&s.hydrate(ge.$state,w),c=!0,d=!0,ge}function Hc(t,e,s){let i,n;const o=typeof e=="function";typeof t=="string"?(i=t,n=o?s:e):(n=t,i=t.id);function r(a,l){const c=IC();return a=a||(c?Ts(Lb,null):null),a&&Vc(a),a=Pb,a._s.has(i)||(o?Vb(i,e,n,a):LF(i,n,a)),a._s.get(i)}return r.$id=i,r}function MF(t){return typeof t=="object"&&t!==null}function lm(t,e){return t=MF(t)?t:Object.create(null),new Proxy(t,{get(s,i,n){return i==="key"?Reflect.get(s,i,n):Reflect.get(s,i,n)||Reflect.get(e,i,n)}})}function VF(t,e){return e.reduce((s,i)=>s==null?void 0:s[i],t)}function HF(t,e,s){return e.slice(0,-1).reduce((i,n)=>/^(__proto__)$/.test(n)?{}:i[n]=i[n]||{},t)[e[e.length-1]]=s,t}function NF(t,e){return e.reduce((s,i)=>{const n=i.split(".");return HF(s,n,VF(t,n))},{})}function cm(t,{storage:e,serializer:s,key:i,debug:n}){try{const o=e==null?void 0:e.getItem(i);o&&t.$patch(s==null?void 0:s.deserialize(o))}catch(o){n&&console.error(o)}}function dm(t,{storage:e,serializer:s,key:i,paths:n,debug:o}){try{const r=Array.isArray(n)?NF(t,n):t;e.setItem(i,s.serialize(r))}catch(r){o&&console.error(r)}}function zF(t={}){return e=>{const{auto:s=!1}=t,{options:{persist:i=s},store:n,pinia:o}=e;if(!i)return;if(!(n.$id in o.state.value)){const a=o._s.get(n.$id.replace("__hot:",""));a&&Promise.resolve().then(()=>a.$persist());return}const r=(Array.isArray(i)?i.map(a=>lm(a,t)):[lm(i,t)]).map(({storage:a=localStorage,beforeRestore:l=null,afterRestore:c=null,serializer:d={serialize:JSON.stringify,deserialize:JSON.parse},key:u=n.$id,paths:f=null,debug:y=!1})=>{var w;return{storage:a,beforeRestore:l,afterRestore:c,serializer:d,key:((w=t.key)!=null?w:$=>$)(typeof u=="string"?u:u(n.$id)),paths:f,debug:y}});n.$persist=()=>{r.forEach(a=>{dm(n.$state,a)})},n.$hydrate=({runHooks:a=!0}={})=>{r.forEach(l=>{const{beforeRestore:c,afterRestore:d}=l;a&&(c==null||c(e)),cm(n,l),a&&(d==null||d(e))})},r.forEach(a=>{const{beforeRestore:l,afterRestore:c}=a;l==null||l(e),cm(n,a),c==null||c(e),n.$subscribe((d,u)=>{dm(u,a)},{detached:!0})})}}var BF=zF();const Hb=RF();Hb.use(BF);//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Nb;function Z(){return Nb.apply(null,arguments)}function jF(t){Nb=t}function ai(t){return t instanceof Array||Object.prototype.toString.call(t)==="[object Array]"}function Gn(t){return t!=null&&Object.prototype.toString.call(t)==="[object Object]"}function We(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Oh(t){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(t).length===0;var e;for(e in t)if(We(t,e))return!1;return!0}function vs(t){return t===void 0}function Ni(t){return typeof t=="number"||Object.prototype.toString.call(t)==="[object Number]"}function $a(t){return t instanceof Date||Object.prototype.toString.call(t)==="[object Date]"}function zb(t,e){var s=[],i,n=t.length;for(i=0;i<n;++i)s.push(e(t[i],i));return s}function cn(t,e){for(var s in e)We(e,s)&&(t[s]=e[s]);return We(e,"toString")&&(t.toString=e.toString),We(e,"valueOf")&&(t.valueOf=e.valueOf),t}function $i(t,e,s,i){return uy(t,e,s,i,!0).utc()}function UF(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function Te(t){return t._pf==null&&(t._pf=UF()),t._pf}var pu;Array.prototype.some?pu=Array.prototype.some:pu=function(t){var e=Object(this),s=e.length>>>0,i;for(i=0;i<s;i++)if(i in e&&t.call(this,e[i],i,e))return!0;return!1};function Ah(t){if(t._isValid==null){var e=Te(t),s=pu.call(e.parsedDateParts,function(n){return n!=null}),i=!isNaN(t._d.getTime())&&e.overflow<0&&!e.empty&&!e.invalidEra&&!e.invalidMonth&&!e.invalidWeekday&&!e.weekdayMismatch&&!e.nullInput&&!e.invalidFormat&&!e.userInvalidated&&(!e.meridiem||e.meridiem&&s);if(t._strict&&(i=i&&e.charsLeftOver===0&&e.unusedTokens.length===0&&e.bigHour===void 0),Object.isFrozen==null||!Object.isFrozen(t))t._isValid=i;else return i}return t._isValid}function Nc(t){var e=$i(NaN);return t!=null?cn(Te(e),t):Te(e).userInvalidated=!0,e}var um=Z.momentProperties=[],Od=!1;function Ph(t,e){var s,i,n,o=um.length;if(vs(e._isAMomentObject)||(t._isAMomentObject=e._isAMomentObject),vs(e._i)||(t._i=e._i),vs(e._f)||(t._f=e._f),vs(e._l)||(t._l=e._l),vs(e._strict)||(t._strict=e._strict),vs(e._tzm)||(t._tzm=e._tzm),vs(e._isUTC)||(t._isUTC=e._isUTC),vs(e._offset)||(t._offset=e._offset),vs(e._pf)||(t._pf=Te(e)),vs(e._locale)||(t._locale=e._locale),o>0)for(s=0;s<o;s++)i=um[s],n=e[i],vs(n)||(t[i]=n);return t}function ka(t){Ph(this,t),this._d=new Date(t._d!=null?t._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),Od===!1&&(Od=!0,Z.updateOffset(this),Od=!1)}function li(t){return t instanceof ka||t!=null&&t._isAMomentObject!=null}function Bb(t){Z.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+t)}function Gs(t,e){var s=!0;return cn(function(){if(Z.deprecationHandler!=null&&Z.deprecationHandler(null,t),s){var i=[],n,o,r,a=arguments.length;for(o=0;o<a;o++){if(n="",typeof arguments[o]=="object"){n+=`
[`+o+"] ";for(r in arguments[0])We(arguments[0],r)&&(n+=r+": "+arguments[0][r]+", ");n=n.slice(0,-2)}else n=arguments[o];i.push(n)}Bb(t+`
Arguments: `+Array.prototype.slice.call(i).join("")+`
`+new Error().stack),s=!1}return e.apply(this,arguments)},e)}var hm={};function jb(t,e){Z.deprecationHandler!=null&&Z.deprecationHandler(t,e),hm[t]||(Bb(e),hm[t]=!0)}Z.suppressDeprecationWarnings=!1;Z.deprecationHandler=null;function ki(t){return typeof Function<"u"&&t instanceof Function||Object.prototype.toString.call(t)==="[object Function]"}function YF(t){var e,s;for(s in t)We(t,s)&&(e=t[s],ki(e)?this[s]=e:this["_"+s]=e);this._config=t,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function mu(t,e){var s=cn({},t),i;for(i in e)We(e,i)&&(Gn(t[i])&&Gn(e[i])?(s[i]={},cn(s[i],t[i]),cn(s[i],e[i])):e[i]!=null?s[i]=e[i]:delete s[i]);for(i in t)We(t,i)&&!We(e,i)&&Gn(t[i])&&(s[i]=cn({},s[i]));return s}function Lh(t){t!=null&&this.set(t)}var gu;Object.keys?gu=Object.keys:gu=function(t){var e,s=[];for(e in t)We(t,e)&&s.push(e);return s};var WF={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function qF(t,e,s){var i=this._calendar[t]||this._calendar.sameElse;return ki(i)?i.call(e,s):i}function bi(t,e,s){var i=""+Math.abs(t),n=e-i.length,o=t>=0;return(o?s?"+":"":"-")+Math.pow(10,Math.max(0,n)).toString().substr(1)+i}var Mh=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Qa=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Ad={},Oo={};function ue(t,e,s,i){var n=i;typeof i=="string"&&(n=function(){return this[i]()}),t&&(Oo[t]=n),e&&(Oo[e[0]]=function(){return bi(n.apply(this,arguments),e[1],e[2])}),s&&(Oo[s]=function(){return this.localeData().ordinal(n.apply(this,arguments),t)})}function GF(t){return t.match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function ZF(t){var e=t.match(Mh),s,i;for(s=0,i=e.length;s<i;s++)Oo[e[s]]?e[s]=Oo[e[s]]:e[s]=GF(e[s]);return function(n){var o="",r;for(r=0;r<i;r++)o+=ki(e[r])?e[r].call(n,t):e[r];return o}}function al(t,e){return t.isValid()?(e=Ub(e,t.localeData()),Ad[e]=Ad[e]||ZF(e),Ad[e](t)):t.localeData().invalidDate()}function Ub(t,e){var s=5;function i(n){return e.longDateFormat(n)||n}for(Qa.lastIndex=0;s>=0&&Qa.test(t);)t=t.replace(Qa,i),Qa.lastIndex=0,s-=1;return t}var XF={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function QF(t){var e=this._longDateFormat[t],s=this._longDateFormat[t.toUpperCase()];return e||!s?e:(this._longDateFormat[t]=s.match(Mh).map(function(i){return i==="MMMM"||i==="MM"||i==="DD"||i==="dddd"?i.slice(1):i}).join(""),this._longDateFormat[t])}var JF="Invalid date";function KF(){return this._invalidDate}var eD="%d",tD=/\d{1,2}/;function sD(t){return this._ordinal.replace("%d",t)}var iD={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function nD(t,e,s,i){var n=this._relativeTime[s];return ki(n)?n(t,e,s,i):n.replace(/%d/i,t)}function oD(t,e){var s=this._relativeTime[t>0?"future":"past"];return ki(s)?s(e):s.replace(/%s/i,e)}var Mr={};function es(t,e){var s=t.toLowerCase();Mr[s]=Mr[s+"s"]=Mr[e]=t}function Zs(t){return typeof t=="string"?Mr[t]||Mr[t.toLowerCase()]:void 0}function Vh(t){var e={},s,i;for(i in t)We(t,i)&&(s=Zs(i),s&&(e[s]=t[i]));return e}var Yb={};function ts(t,e){Yb[t]=e}function rD(t){var e=[],s;for(s in t)We(t,s)&&e.push({unit:s,priority:Yb[s]});return e.sort(function(i,n){return i.priority-n.priority}),e}function zc(t){return t%4===0&&t%100!==0||t%400===0}function Ns(t){return t<0?Math.ceil(t)||0:Math.floor(t)}function Ae(t){var e=+t,s=0;return e!==0&&isFinite(e)&&(s=Ns(e)),s}function ar(t,e){return function(s){return s!=null?(Wb(this,t,s),Z.updateOffset(this,e),this):Fl(this,t)}}function Fl(t,e){return t.isValid()?t._d["get"+(t._isUTC?"UTC":"")+e]():NaN}function Wb(t,e,s){t.isValid()&&!isNaN(s)&&(e==="FullYear"&&zc(t.year())&&t.month()===1&&t.date()===29?(s=Ae(s),t._d["set"+(t._isUTC?"UTC":"")+e](s,t.month(),qc(s,t.month()))):t._d["set"+(t._isUTC?"UTC":"")+e](s))}function aD(t){return t=Zs(t),ki(this[t])?this[t]():this}function lD(t,e){if(typeof t=="object"){t=Vh(t);var s=rD(t),i,n=s.length;for(i=0;i<n;i++)this[s[i].unit](t[s[i].unit])}else if(t=Zs(t),ki(this[t]))return this[t](e);return this}var qb=/\d/,Ls=/\d\d/,Gb=/\d{3}/,Hh=/\d{4}/,Bc=/[+-]?\d{6}/,pt=/\d\d?/,Zb=/\d\d\d\d?/,Xb=/\d\d\d\d\d\d?/,jc=/\d{1,3}/,Nh=/\d{1,4}/,Uc=/[+-]?\d{1,6}/,lr=/\d+/,Yc=/[+-]?\d+/,cD=/Z|[+-]\d\d:?\d\d/gi,Wc=/Z|[+-]\d\d(?::?\d\d)?/gi,dD=/[+-]?\d+(\.\d{1,3})?/,_a=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,Dl;Dl={};function ie(t,e,s){Dl[t]=ki(e)?e:function(i,n){return i&&s?s:e}}function uD(t,e){return We(Dl,t)?Dl[t](e._strict,e._locale):new RegExp(hD(t))}function hD(t){return Cs(t.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,s,i,n,o){return s||i||n||o}))}function Cs(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var vu={};function tt(t,e){var s,i=e,n;for(typeof t=="string"&&(t=[t]),Ni(e)&&(i=function(o,r){r[e]=Ae(o)}),n=t.length,s=0;s<n;s++)vu[t[s]]=i}function Sa(t,e){tt(t,function(s,i,n,o){n._w=n._w||{},e(s,n._w,n,o)})}function fD(t,e,s){e!=null&&We(vu,t)&&vu[t](e,s._a,s,t)}var Qt=0,Ei=1,gi=2,Et=3,ti=4,Oi=5,jn=6,pD=7,mD=8;function gD(t,e){return(t%e+e)%e}var _t;Array.prototype.indexOf?_t=Array.prototype.indexOf:_t=function(t){var e;for(e=0;e<this.length;++e)if(this[e]===t)return e;return-1};function qc(t,e){if(isNaN(t)||isNaN(e))return NaN;var s=gD(e,12);return t+=(e-s)/12,s===1?zc(t)?29:28:31-s%7%2}ue("M",["MM",2],"Mo",function(){return this.month()+1});ue("MMM",0,0,function(t){return this.localeData().monthsShort(this,t)});ue("MMMM",0,0,function(t){return this.localeData().months(this,t)});es("month","M");ts("month",8);ie("M",pt);ie("MM",pt,Ls);ie("MMM",function(t,e){return e.monthsShortRegex(t)});ie("MMMM",function(t,e){return e.monthsRegex(t)});tt(["M","MM"],function(t,e){e[Ei]=Ae(t)-1});tt(["MMM","MMMM"],function(t,e,s,i){var n=s._locale.monthsParse(t,i,s._strict);n!=null?e[Ei]=n:Te(s).invalidMonth=t});var vD="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Qb="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Jb=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,bD=_a,yD=_a;function xD(t,e){return t?ai(this._months)?this._months[t.month()]:this._months[(this._months.isFormat||Jb).test(e)?"format":"standalone"][t.month()]:ai(this._months)?this._months:this._months.standalone}function wD(t,e){return t?ai(this._monthsShort)?this._monthsShort[t.month()]:this._monthsShort[Jb.test(e)?"format":"standalone"][t.month()]:ai(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function $D(t,e,s){var i,n,o,r=t.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],i=0;i<12;++i)o=$i([2e3,i]),this._shortMonthsParse[i]=this.monthsShort(o,"").toLocaleLowerCase(),this._longMonthsParse[i]=this.months(o,"").toLocaleLowerCase();return s?e==="MMM"?(n=_t.call(this._shortMonthsParse,r),n!==-1?n:null):(n=_t.call(this._longMonthsParse,r),n!==-1?n:null):e==="MMM"?(n=_t.call(this._shortMonthsParse,r),n!==-1?n:(n=_t.call(this._longMonthsParse,r),n!==-1?n:null)):(n=_t.call(this._longMonthsParse,r),n!==-1?n:(n=_t.call(this._shortMonthsParse,r),n!==-1?n:null))}function kD(t,e,s){var i,n,o;if(this._monthsParseExact)return $D.call(this,t,e,s);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),i=0;i<12;i++){if(n=$i([2e3,i]),s&&!this._longMonthsParse[i]&&(this._longMonthsParse[i]=new RegExp("^"+this.months(n,"").replace(".","")+"$","i"),this._shortMonthsParse[i]=new RegExp("^"+this.monthsShort(n,"").replace(".","")+"$","i")),!s&&!this._monthsParse[i]&&(o="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[i]=new RegExp(o.replace(".",""),"i")),s&&e==="MMMM"&&this._longMonthsParse[i].test(t))return i;if(s&&e==="MMM"&&this._shortMonthsParse[i].test(t))return i;if(!s&&this._monthsParse[i].test(t))return i}}function Kb(t,e){var s;if(!t.isValid())return t;if(typeof e=="string"){if(/^\d+$/.test(e))e=Ae(e);else if(e=t.localeData().monthsParse(e),!Ni(e))return t}return s=Math.min(t.date(),qc(t.year(),e)),t._d["set"+(t._isUTC?"UTC":"")+"Month"](e,s),t}function ey(t){return t!=null?(Kb(this,t),Z.updateOffset(this,!0),this):Fl(this,"Month")}function _D(){return qc(this.year(),this.month())}function SD(t){return this._monthsParseExact?(We(this,"_monthsRegex")||ty.call(this),t?this._monthsShortStrictRegex:this._monthsShortRegex):(We(this,"_monthsShortRegex")||(this._monthsShortRegex=bD),this._monthsShortStrictRegex&&t?this._monthsShortStrictRegex:this._monthsShortRegex)}function CD(t){return this._monthsParseExact?(We(this,"_monthsRegex")||ty.call(this),t?this._monthsStrictRegex:this._monthsRegex):(We(this,"_monthsRegex")||(this._monthsRegex=yD),this._monthsStrictRegex&&t?this._monthsStrictRegex:this._monthsRegex)}function ty(){function t(r,a){return a.length-r.length}var e=[],s=[],i=[],n,o;for(n=0;n<12;n++)o=$i([2e3,n]),e.push(this.monthsShort(o,"")),s.push(this.months(o,"")),i.push(this.months(o,"")),i.push(this.monthsShort(o,""));for(e.sort(t),s.sort(t),i.sort(t),n=0;n<12;n++)e[n]=Cs(e[n]),s[n]=Cs(s[n]);for(n=0;n<24;n++)i[n]=Cs(i[n]);this._monthsRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+e.join("|")+")","i")}ue("Y",0,0,function(){var t=this.year();return t<=9999?bi(t,4):"+"+t});ue(0,["YY",2],0,function(){return this.year()%100});ue(0,["YYYY",4],0,"year");ue(0,["YYYYY",5],0,"year");ue(0,["YYYYYY",6,!0],0,"year");es("year","y");ts("year",1);ie("Y",Yc);ie("YY",pt,Ls);ie("YYYY",Nh,Hh);ie("YYYYY",Uc,Bc);ie("YYYYYY",Uc,Bc);tt(["YYYYY","YYYYYY"],Qt);tt("YYYY",function(t,e){e[Qt]=t.length===2?Z.parseTwoDigitYear(t):Ae(t)});tt("YY",function(t,e){e[Qt]=Z.parseTwoDigitYear(t)});tt("Y",function(t,e){e[Qt]=parseInt(t,10)});function Vr(t){return zc(t)?366:365}Z.parseTwoDigitYear=function(t){return Ae(t)+(Ae(t)>68?1900:2e3)};var sy=ar("FullYear",!0);function ID(){return zc(this.year())}function TD(t,e,s,i,n,o,r){var a;return t<100&&t>=0?(a=new Date(t+400,e,s,i,n,o,r),isFinite(a.getFullYear())&&a.setFullYear(t)):a=new Date(t,e,s,i,n,o,r),a}function ra(t){var e,s;return t<100&&t>=0?(s=Array.prototype.slice.call(arguments),s[0]=t+400,e=new Date(Date.UTC.apply(null,s)),isFinite(e.getUTCFullYear())&&e.setUTCFullYear(t)):e=new Date(Date.UTC.apply(null,arguments)),e}function Rl(t,e,s){var i=7+e-s,n=(7+ra(t,0,i).getUTCDay()-e)%7;return-n+i-1}function iy(t,e,s,i,n){var o=(7+s-i)%7,r=Rl(t,i,n),a=1+7*(e-1)+o+r,l,c;return a<=0?(l=t-1,c=Vr(l)+a):a>Vr(t)?(l=t+1,c=a-Vr(t)):(l=t,c=a),{year:l,dayOfYear:c}}function aa(t,e,s){var i=Rl(t.year(),e,s),n=Math.floor((t.dayOfYear()-i-1)/7)+1,o,r;return n<1?(r=t.year()-1,o=n+Pi(r,e,s)):n>Pi(t.year(),e,s)?(o=n-Pi(t.year(),e,s),r=t.year()+1):(r=t.year(),o=n),{week:o,year:r}}function Pi(t,e,s){var i=Rl(t,e,s),n=Rl(t+1,e,s);return(Vr(t)-i+n)/7}ue("w",["ww",2],"wo","week");ue("W",["WW",2],"Wo","isoWeek");es("week","w");es("isoWeek","W");ts("week",5);ts("isoWeek",5);ie("w",pt);ie("ww",pt,Ls);ie("W",pt);ie("WW",pt,Ls);Sa(["w","ww","W","WW"],function(t,e,s,i){e[i.substr(0,1)]=Ae(t)});function FD(t){return aa(t,this._week.dow,this._week.doy).week}var DD={dow:0,doy:6};function RD(){return this._week.dow}function ED(){return this._week.doy}function OD(t){var e=this.localeData().week(this);return t==null?e:this.add((t-e)*7,"d")}function AD(t){var e=aa(this,1,4).week;return t==null?e:this.add((t-e)*7,"d")}ue("d",0,"do","day");ue("dd",0,0,function(t){return this.localeData().weekdaysMin(this,t)});ue("ddd",0,0,function(t){return this.localeData().weekdaysShort(this,t)});ue("dddd",0,0,function(t){return this.localeData().weekdays(this,t)});ue("e",0,0,"weekday");ue("E",0,0,"isoWeekday");es("day","d");es("weekday","e");es("isoWeekday","E");ts("day",11);ts("weekday",11);ts("isoWeekday",11);ie("d",pt);ie("e",pt);ie("E",pt);ie("dd",function(t,e){return e.weekdaysMinRegex(t)});ie("ddd",function(t,e){return e.weekdaysShortRegex(t)});ie("dddd",function(t,e){return e.weekdaysRegex(t)});Sa(["dd","ddd","dddd"],function(t,e,s,i){var n=s._locale.weekdaysParse(t,i,s._strict);n!=null?e.d=n:Te(s).invalidWeekday=t});Sa(["d","e","E"],function(t,e,s,i){e[i]=Ae(t)});function PD(t,e){return typeof t!="string"?t:isNaN(t)?(t=e.weekdaysParse(t),typeof t=="number"?t:null):parseInt(t,10)}function LD(t,e){return typeof t=="string"?e.weekdaysParse(t)%7||7:isNaN(t)?null:t}function zh(t,e){return t.slice(e,7).concat(t.slice(0,e))}var MD="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),ny="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),VD="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),HD=_a,ND=_a,zD=_a;function BD(t,e){var s=ai(this._weekdays)?this._weekdays:this._weekdays[t&&t!==!0&&this._weekdays.isFormat.test(e)?"format":"standalone"];return t===!0?zh(s,this._week.dow):t?s[t.day()]:s}function jD(t){return t===!0?zh(this._weekdaysShort,this._week.dow):t?this._weekdaysShort[t.day()]:this._weekdaysShort}function UD(t){return t===!0?zh(this._weekdaysMin,this._week.dow):t?this._weekdaysMin[t.day()]:this._weekdaysMin}function YD(t,e,s){var i,n,o,r=t.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],i=0;i<7;++i)o=$i([2e3,1]).day(i),this._minWeekdaysParse[i]=this.weekdaysMin(o,"").toLocaleLowerCase(),this._shortWeekdaysParse[i]=this.weekdaysShort(o,"").toLocaleLowerCase(),this._weekdaysParse[i]=this.weekdays(o,"").toLocaleLowerCase();return s?e==="dddd"?(n=_t.call(this._weekdaysParse,r),n!==-1?n:null):e==="ddd"?(n=_t.call(this._shortWeekdaysParse,r),n!==-1?n:null):(n=_t.call(this._minWeekdaysParse,r),n!==-1?n:null):e==="dddd"?(n=_t.call(this._weekdaysParse,r),n!==-1||(n=_t.call(this._shortWeekdaysParse,r),n!==-1)?n:(n=_t.call(this._minWeekdaysParse,r),n!==-1?n:null)):e==="ddd"?(n=_t.call(this._shortWeekdaysParse,r),n!==-1||(n=_t.call(this._weekdaysParse,r),n!==-1)?n:(n=_t.call(this._minWeekdaysParse,r),n!==-1?n:null)):(n=_t.call(this._minWeekdaysParse,r),n!==-1||(n=_t.call(this._weekdaysParse,r),n!==-1)?n:(n=_t.call(this._shortWeekdaysParse,r),n!==-1?n:null))}function WD(t,e,s){var i,n,o;if(this._weekdaysParseExact)return YD.call(this,t,e,s);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),i=0;i<7;i++){if(n=$i([2e3,1]).day(i),s&&!this._fullWeekdaysParse[i]&&(this._fullWeekdaysParse[i]=new RegExp("^"+this.weekdays(n,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[i]=new RegExp("^"+this.weekdaysShort(n,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[i]=new RegExp("^"+this.weekdaysMin(n,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[i]||(o="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),this._weekdaysParse[i]=new RegExp(o.replace(".",""),"i")),s&&e==="dddd"&&this._fullWeekdaysParse[i].test(t))return i;if(s&&e==="ddd"&&this._shortWeekdaysParse[i].test(t))return i;if(s&&e==="dd"&&this._minWeekdaysParse[i].test(t))return i;if(!s&&this._weekdaysParse[i].test(t))return i}}function qD(t){if(!this.isValid())return t!=null?this:NaN;var e=this._isUTC?this._d.getUTCDay():this._d.getDay();return t!=null?(t=PD(t,this.localeData()),this.add(t-e,"d")):e}function GD(t){if(!this.isValid())return t!=null?this:NaN;var e=(this.day()+7-this.localeData()._week.dow)%7;return t==null?e:this.add(t-e,"d")}function ZD(t){if(!this.isValid())return t!=null?this:NaN;if(t!=null){var e=LD(t,this.localeData());return this.day(this.day()%7?e:e-7)}else return this.day()||7}function XD(t){return this._weekdaysParseExact?(We(this,"_weekdaysRegex")||Bh.call(this),t?this._weekdaysStrictRegex:this._weekdaysRegex):(We(this,"_weekdaysRegex")||(this._weekdaysRegex=HD),this._weekdaysStrictRegex&&t?this._weekdaysStrictRegex:this._weekdaysRegex)}function QD(t){return this._weekdaysParseExact?(We(this,"_weekdaysRegex")||Bh.call(this),t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(We(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=ND),this._weekdaysShortStrictRegex&&t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function JD(t){return this._weekdaysParseExact?(We(this,"_weekdaysRegex")||Bh.call(this),t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(We(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=zD),this._weekdaysMinStrictRegex&&t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Bh(){function t(d,u){return u.length-d.length}var e=[],s=[],i=[],n=[],o,r,a,l,c;for(o=0;o<7;o++)r=$i([2e3,1]).day(o),a=Cs(this.weekdaysMin(r,"")),l=Cs(this.weekdaysShort(r,"")),c=Cs(this.weekdays(r,"")),e.push(a),s.push(l),i.push(c),n.push(a),n.push(l),n.push(c);e.sort(t),s.sort(t),i.sort(t),n.sort(t),this._weekdaysRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+e.join("|")+")","i")}function jh(){return this.hours()%12||12}function KD(){return this.hours()||24}ue("H",["HH",2],0,"hour");ue("h",["hh",2],0,jh);ue("k",["kk",2],0,KD);ue("hmm",0,0,function(){return""+jh.apply(this)+bi(this.minutes(),2)});ue("hmmss",0,0,function(){return""+jh.apply(this)+bi(this.minutes(),2)+bi(this.seconds(),2)});ue("Hmm",0,0,function(){return""+this.hours()+bi(this.minutes(),2)});ue("Hmmss",0,0,function(){return""+this.hours()+bi(this.minutes(),2)+bi(this.seconds(),2)});function oy(t,e){ue(t,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),e)})}oy("a",!0);oy("A",!1);es("hour","h");ts("hour",13);function ry(t,e){return e._meridiemParse}ie("a",ry);ie("A",ry);ie("H",pt);ie("h",pt);ie("k",pt);ie("HH",pt,Ls);ie("hh",pt,Ls);ie("kk",pt,Ls);ie("hmm",Zb);ie("hmmss",Xb);ie("Hmm",Zb);ie("Hmmss",Xb);tt(["H","HH"],Et);tt(["k","kk"],function(t,e,s){var i=Ae(t);e[Et]=i===24?0:i});tt(["a","A"],function(t,e,s){s._isPm=s._locale.isPM(t),s._meridiem=t});tt(["h","hh"],function(t,e,s){e[Et]=Ae(t),Te(s).bigHour=!0});tt("hmm",function(t,e,s){var i=t.length-2;e[Et]=Ae(t.substr(0,i)),e[ti]=Ae(t.substr(i)),Te(s).bigHour=!0});tt("hmmss",function(t,e,s){var i=t.length-4,n=t.length-2;e[Et]=Ae(t.substr(0,i)),e[ti]=Ae(t.substr(i,2)),e[Oi]=Ae(t.substr(n)),Te(s).bigHour=!0});tt("Hmm",function(t,e,s){var i=t.length-2;e[Et]=Ae(t.substr(0,i)),e[ti]=Ae(t.substr(i))});tt("Hmmss",function(t,e,s){var i=t.length-4,n=t.length-2;e[Et]=Ae(t.substr(0,i)),e[ti]=Ae(t.substr(i,2)),e[Oi]=Ae(t.substr(n))});function eR(t){return(t+"").toLowerCase().charAt(0)==="p"}var tR=/[ap]\.?m?\.?/i,sR=ar("Hours",!0);function iR(t,e,s){return t>11?s?"pm":"PM":s?"am":"AM"}var ay={calendar:WF,longDateFormat:XF,invalidDate:JF,ordinal:eD,dayOfMonthOrdinalParse:tD,relativeTime:iD,months:vD,monthsShort:Qb,week:DD,weekdays:MD,weekdaysMin:VD,weekdaysShort:ny,meridiemParse:tR},mt={},yr={},la;function nR(t,e){var s,i=Math.min(t.length,e.length);for(s=0;s<i;s+=1)if(t[s]!==e[s])return s;return i}function fm(t){return t&&t.toLowerCase().replace("_","-")}function oR(t){for(var e=0,s,i,n,o;e<t.length;){for(o=fm(t[e]).split("-"),s=o.length,i=fm(t[e+1]),i=i?i.split("-"):null;s>0;){if(n=Gc(o.slice(0,s).join("-")),n)return n;if(i&&i.length>=s&&nR(o,i)>=s-1)break;s--}e++}return la}function rR(t){return t.match("^[^/\\\\]*$")!=null}function Gc(t){var e=null,s;if(mt[t]===void 0&&typeof dl<"u"&&dl&&dl.exports&&rR(t))try{e=la._abbr,s=require,s("./locale/"+t),mn(e)}catch{mt[t]=null}return mt[t]}function mn(t,e){var s;return t&&(vs(e)?s=Qi(t):s=Uh(t,e),s?la=s:typeof console<"u"&&console.warn&&console.warn("Locale "+t+" not found. Did you forget to load it?")),la._abbr}function Uh(t,e){if(e!==null){var s,i=ay;if(e.abbr=t,mt[t]!=null)jb("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),i=mt[t]._config;else if(e.parentLocale!=null)if(mt[e.parentLocale]!=null)i=mt[e.parentLocale]._config;else if(s=Gc(e.parentLocale),s!=null)i=s._config;else return yr[e.parentLocale]||(yr[e.parentLocale]=[]),yr[e.parentLocale].push({name:t,config:e}),null;return mt[t]=new Lh(mu(i,e)),yr[t]&&yr[t].forEach(function(n){Uh(n.name,n.config)}),mn(t),mt[t]}else return delete mt[t],null}function aR(t,e){if(e!=null){var s,i,n=ay;mt[t]!=null&&mt[t].parentLocale!=null?mt[t].set(mu(mt[t]._config,e)):(i=Gc(t),i!=null&&(n=i._config),e=mu(n,e),i==null&&(e.abbr=t),s=new Lh(e),s.parentLocale=mt[t],mt[t]=s),mn(t)}else mt[t]!=null&&(mt[t].parentLocale!=null?(mt[t]=mt[t].parentLocale,t===mn()&&mn(t)):mt[t]!=null&&delete mt[t]);return mt[t]}function Qi(t){var e;if(t&&t._locale&&t._locale._abbr&&(t=t._locale._abbr),!t)return la;if(!ai(t)){if(e=Gc(t),e)return e;t=[t]}return oR(t)}function lR(){return gu(mt)}function Yh(t){var e,s=t._a;return s&&Te(t).overflow===-2&&(e=s[Ei]<0||s[Ei]>11?Ei:s[gi]<1||s[gi]>qc(s[Qt],s[Ei])?gi:s[Et]<0||s[Et]>24||s[Et]===24&&(s[ti]!==0||s[Oi]!==0||s[jn]!==0)?Et:s[ti]<0||s[ti]>59?ti:s[Oi]<0||s[Oi]>59?Oi:s[jn]<0||s[jn]>999?jn:-1,Te(t)._overflowDayOfYear&&(e<Qt||e>gi)&&(e=gi),Te(t)._overflowWeeks&&e===-1&&(e=pD),Te(t)._overflowWeekday&&e===-1&&(e=mD),Te(t).overflow=e),t}var cR=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,dR=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,uR=/Z|[+-]\d\d(?::?\d\d)?/,Ja=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],Pd=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],hR=/^\/?Date\((-?\d+)/i,fR=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,pR={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function ly(t){var e,s,i=t._i,n=cR.exec(i)||dR.exec(i),o,r,a,l,c=Ja.length,d=Pd.length;if(n){for(Te(t).iso=!0,e=0,s=c;e<s;e++)if(Ja[e][1].exec(n[1])){r=Ja[e][0],o=Ja[e][2]!==!1;break}if(r==null){t._isValid=!1;return}if(n[3]){for(e=0,s=d;e<s;e++)if(Pd[e][1].exec(n[3])){a=(n[2]||" ")+Pd[e][0];break}if(a==null){t._isValid=!1;return}}if(!o&&a!=null){t._isValid=!1;return}if(n[4])if(uR.exec(n[4]))l="Z";else{t._isValid=!1;return}t._f=r+(a||"")+(l||""),qh(t)}else t._isValid=!1}function mR(t,e,s,i,n,o){var r=[gR(t),Qb.indexOf(e),parseInt(s,10),parseInt(i,10),parseInt(n,10)];return o&&r.push(parseInt(o,10)),r}function gR(t){var e=parseInt(t,10);return e<=49?2e3+e:e<=999?1900+e:e}function vR(t){return t.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function bR(t,e,s){if(t){var i=ny.indexOf(t),n=new Date(e[0],e[1],e[2]).getDay();if(i!==n)return Te(s).weekdayMismatch=!0,s._isValid=!1,!1}return!0}function yR(t,e,s){if(t)return pR[t];if(e)return 0;var i=parseInt(s,10),n=i%100,o=(i-n)/100;return o*60+n}function cy(t){var e=fR.exec(vR(t._i)),s;if(e){if(s=mR(e[4],e[3],e[2],e[5],e[6],e[7]),!bR(e[1],s,t))return;t._a=s,t._tzm=yR(e[8],e[9],e[10]),t._d=ra.apply(null,t._a),t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),Te(t).rfc2822=!0}else t._isValid=!1}function xR(t){var e=hR.exec(t._i);if(e!==null){t._d=new Date(+e[1]);return}if(ly(t),t._isValid===!1)delete t._isValid;else return;if(cy(t),t._isValid===!1)delete t._isValid;else return;t._strict?t._isValid=!1:Z.createFromInputFallback(t)}Z.createFromInputFallback=Gs("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(t){t._d=new Date(t._i+(t._useUTC?" UTC":""))});function xo(t,e,s){return t??e??s}function wR(t){var e=new Date(Z.now());return t._useUTC?[e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()]:[e.getFullYear(),e.getMonth(),e.getDate()]}function Wh(t){var e,s,i=[],n,o,r;if(!t._d){for(n=wR(t),t._w&&t._a[gi]==null&&t._a[Ei]==null&&$R(t),t._dayOfYear!=null&&(r=xo(t._a[Qt],n[Qt]),(t._dayOfYear>Vr(r)||t._dayOfYear===0)&&(Te(t)._overflowDayOfYear=!0),s=ra(r,0,t._dayOfYear),t._a[Ei]=s.getUTCMonth(),t._a[gi]=s.getUTCDate()),e=0;e<3&&t._a[e]==null;++e)t._a[e]=i[e]=n[e];for(;e<7;e++)t._a[e]=i[e]=t._a[e]==null?e===2?1:0:t._a[e];t._a[Et]===24&&t._a[ti]===0&&t._a[Oi]===0&&t._a[jn]===0&&(t._nextDay=!0,t._a[Et]=0),t._d=(t._useUTC?ra:TD).apply(null,i),o=t._useUTC?t._d.getUTCDay():t._d.getDay(),t._tzm!=null&&t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),t._nextDay&&(t._a[Et]=24),t._w&&typeof t._w.d<"u"&&t._w.d!==o&&(Te(t).weekdayMismatch=!0)}}function $R(t){var e,s,i,n,o,r,a,l,c;e=t._w,e.GG!=null||e.W!=null||e.E!=null?(o=1,r=4,s=xo(e.GG,t._a[Qt],aa(ht(),1,4).year),i=xo(e.W,1),n=xo(e.E,1),(n<1||n>7)&&(l=!0)):(o=t._locale._week.dow,r=t._locale._week.doy,c=aa(ht(),o,r),s=xo(e.gg,t._a[Qt],c.year),i=xo(e.w,c.week),e.d!=null?(n=e.d,(n<0||n>6)&&(l=!0)):e.e!=null?(n=e.e+o,(e.e<0||e.e>6)&&(l=!0)):n=o),i<1||i>Pi(s,o,r)?Te(t)._overflowWeeks=!0:l!=null?Te(t)._overflowWeekday=!0:(a=iy(s,i,n,o,r),t._a[Qt]=a.year,t._dayOfYear=a.dayOfYear)}Z.ISO_8601=function(){};Z.RFC_2822=function(){};function qh(t){if(t._f===Z.ISO_8601){ly(t);return}if(t._f===Z.RFC_2822){cy(t);return}t._a=[],Te(t).empty=!0;var e=""+t._i,s,i,n,o,r,a=e.length,l=0,c,d;for(n=Ub(t._f,t._locale).match(Mh)||[],d=n.length,s=0;s<d;s++)o=n[s],i=(e.match(uD(o,t))||[])[0],i&&(r=e.substr(0,e.indexOf(i)),r.length>0&&Te(t).unusedInput.push(r),e=e.slice(e.indexOf(i)+i.length),l+=i.length),Oo[o]?(i?Te(t).empty=!1:Te(t).unusedTokens.push(o),fD(o,i,t)):t._strict&&!i&&Te(t).unusedTokens.push(o);Te(t).charsLeftOver=a-l,e.length>0&&Te(t).unusedInput.push(e),t._a[Et]<=12&&Te(t).bigHour===!0&&t._a[Et]>0&&(Te(t).bigHour=void 0),Te(t).parsedDateParts=t._a.slice(0),Te(t).meridiem=t._meridiem,t._a[Et]=kR(t._locale,t._a[Et],t._meridiem),c=Te(t).era,c!==null&&(t._a[Qt]=t._locale.erasConvertYear(c,t._a[Qt])),Wh(t),Yh(t)}function kR(t,e,s){var i;return s==null?e:t.meridiemHour!=null?t.meridiemHour(e,s):(t.isPM!=null&&(i=t.isPM(s),i&&e<12&&(e+=12),!i&&e===12&&(e=0)),e)}function _R(t){var e,s,i,n,o,r,a=!1,l=t._f.length;if(l===0){Te(t).invalidFormat=!0,t._d=new Date(NaN);return}for(n=0;n<l;n++)o=0,r=!1,e=Ph({},t),t._useUTC!=null&&(e._useUTC=t._useUTC),e._f=t._f[n],qh(e),Ah(e)&&(r=!0),o+=Te(e).charsLeftOver,o+=Te(e).unusedTokens.length*10,Te(e).score=o,a?o<i&&(i=o,s=e):(i==null||o<i||r)&&(i=o,s=e,r&&(a=!0));cn(t,s||e)}function SR(t){if(!t._d){var e=Vh(t._i),s=e.day===void 0?e.date:e.day;t._a=zb([e.year,e.month,s,e.hour,e.minute,e.second,e.millisecond],function(i){return i&&parseInt(i,10)}),Wh(t)}}function CR(t){var e=new ka(Yh(dy(t)));return e._nextDay&&(e.add(1,"d"),e._nextDay=void 0),e}function dy(t){var e=t._i,s=t._f;return t._locale=t._locale||Qi(t._l),e===null||s===void 0&&e===""?Nc({nullInput:!0}):(typeof e=="string"&&(t._i=e=t._locale.preparse(e)),li(e)?new ka(Yh(e)):($a(e)?t._d=e:ai(s)?_R(t):s?qh(t):IR(t),Ah(t)||(t._d=null),t))}function IR(t){var e=t._i;vs(e)?t._d=new Date(Z.now()):$a(e)?t._d=new Date(e.valueOf()):typeof e=="string"?xR(t):ai(e)?(t._a=zb(e.slice(0),function(s){return parseInt(s,10)}),Wh(t)):Gn(e)?SR(t):Ni(e)?t._d=new Date(e):Z.createFromInputFallback(t)}function uy(t,e,s,i,n){var o={};return(e===!0||e===!1)&&(i=e,e=void 0),(s===!0||s===!1)&&(i=s,s=void 0),(Gn(t)&&Oh(t)||ai(t)&&t.length===0)&&(t=void 0),o._isAMomentObject=!0,o._useUTC=o._isUTC=n,o._l=s,o._i=t,o._f=e,o._strict=i,CR(o)}function ht(t,e,s,i){return uy(t,e,s,i,!1)}var TR=Gs("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=ht.apply(null,arguments);return this.isValid()&&t.isValid()?t<this?this:t:Nc()}),FR=Gs("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=ht.apply(null,arguments);return this.isValid()&&t.isValid()?t>this?this:t:Nc()});function hy(t,e){var s,i;if(e.length===1&&ai(e[0])&&(e=e[0]),!e.length)return ht();for(s=e[0],i=1;i<e.length;++i)(!e[i].isValid()||e[i][t](s))&&(s=e[i]);return s}function DR(){var t=[].slice.call(arguments,0);return hy("isBefore",t)}function RR(){var t=[].slice.call(arguments,0);return hy("isAfter",t)}var ER=function(){return Date.now?Date.now():+new Date},xr=["year","quarter","month","week","day","hour","minute","second","millisecond"];function OR(t){var e,s=!1,i,n=xr.length;for(e in t)if(We(t,e)&&!(_t.call(xr,e)!==-1&&(t[e]==null||!isNaN(t[e]))))return!1;for(i=0;i<n;++i)if(t[xr[i]]){if(s)return!1;parseFloat(t[xr[i]])!==Ae(t[xr[i]])&&(s=!0)}return!0}function AR(){return this._isValid}function PR(){return di(NaN)}function Zc(t){var e=Vh(t),s=e.year||0,i=e.quarter||0,n=e.month||0,o=e.week||e.isoWeek||0,r=e.day||0,a=e.hour||0,l=e.minute||0,c=e.second||0,d=e.millisecond||0;this._isValid=OR(e),this._milliseconds=+d+c*1e3+l*6e4+a*1e3*60*60,this._days=+r+o*7,this._months=+n+i*3+s*12,this._data={},this._locale=Qi(),this._bubble()}function ll(t){return t instanceof Zc}function bu(t){return t<0?Math.round(-1*t)*-1:Math.round(t)}function LR(t,e,s){var i=Math.min(t.length,e.length),n=Math.abs(t.length-e.length),o=0,r;for(r=0;r<i;r++)(s&&t[r]!==e[r]||!s&&Ae(t[r])!==Ae(e[r]))&&o++;return o+n}function fy(t,e){ue(t,0,0,function(){var s=this.utcOffset(),i="+";return s<0&&(s=-s,i="-"),i+bi(~~(s/60),2)+e+bi(~~s%60,2)})}fy("Z",":");fy("ZZ","");ie("Z",Wc);ie("ZZ",Wc);tt(["Z","ZZ"],function(t,e,s){s._useUTC=!0,s._tzm=Gh(Wc,t)});var MR=/([\+\-]|\d\d)/gi;function Gh(t,e){var s=(e||"").match(t),i,n,o;return s===null?null:(i=s[s.length-1]||[],n=(i+"").match(MR)||["-",0,0],o=+(n[1]*60)+Ae(n[2]),o===0?0:n[0]==="+"?o:-o)}function Zh(t,e){var s,i;return e._isUTC?(s=e.clone(),i=(li(t)||$a(t)?t.valueOf():ht(t).valueOf())-s.valueOf(),s._d.setTime(s._d.valueOf()+i),Z.updateOffset(s,!1),s):ht(t).local()}function yu(t){return-Math.round(t._d.getTimezoneOffset())}Z.updateOffset=function(){};function VR(t,e,s){var i=this._offset||0,n;if(!this.isValid())return t!=null?this:NaN;if(t!=null){if(typeof t=="string"){if(t=Gh(Wc,t),t===null)return this}else Math.abs(t)<16&&!s&&(t=t*60);return!this._isUTC&&e&&(n=yu(this)),this._offset=t,this._isUTC=!0,n!=null&&this.add(n,"m"),i!==t&&(!e||this._changeInProgress?gy(this,di(t-i,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,Z.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?i:yu(this)}function HR(t,e){return t!=null?(typeof t!="string"&&(t=-t),this.utcOffset(t,e),this):-this.utcOffset()}function NR(t){return this.utcOffset(0,t)}function zR(t){return this._isUTC&&(this.utcOffset(0,t),this._isUTC=!1,t&&this.subtract(yu(this),"m")),this}function BR(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var t=Gh(cD,this._i);t!=null?this.utcOffset(t):this.utcOffset(0,!0)}return this}function jR(t){return this.isValid()?(t=t?ht(t).utcOffset():0,(this.utcOffset()-t)%60===0):!1}function UR(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function YR(){if(!vs(this._isDSTShifted))return this._isDSTShifted;var t={},e;return Ph(t,this),t=dy(t),t._a?(e=t._isUTC?$i(t._a):ht(t._a),this._isDSTShifted=this.isValid()&&LR(t._a,e.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function WR(){return this.isValid()?!this._isUTC:!1}function qR(){return this.isValid()?this._isUTC:!1}function py(){return this.isValid()?this._isUTC&&this._offset===0:!1}var GR=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,ZR=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function di(t,e){var s=t,i=null,n,o,r;return ll(t)?s={ms:t._milliseconds,d:t._days,M:t._months}:Ni(t)||!isNaN(+t)?(s={},e?s[e]=+t:s.milliseconds=+t):(i=GR.exec(t))?(n=i[1]==="-"?-1:1,s={y:0,d:Ae(i[gi])*n,h:Ae(i[Et])*n,m:Ae(i[ti])*n,s:Ae(i[Oi])*n,ms:Ae(bu(i[jn]*1e3))*n}):(i=ZR.exec(t))?(n=i[1]==="-"?-1:1,s={y:Mn(i[2],n),M:Mn(i[3],n),w:Mn(i[4],n),d:Mn(i[5],n),h:Mn(i[6],n),m:Mn(i[7],n),s:Mn(i[8],n)}):s==null?s={}:typeof s=="object"&&("from"in s||"to"in s)&&(r=XR(ht(s.from),ht(s.to)),s={},s.ms=r.milliseconds,s.M=r.months),o=new Zc(s),ll(t)&&We(t,"_locale")&&(o._locale=t._locale),ll(t)&&We(t,"_isValid")&&(o._isValid=t._isValid),o}di.fn=Zc.prototype;di.invalid=PR;function Mn(t,e){var s=t&&parseFloat(t.replace(",","."));return(isNaN(s)?0:s)*e}function pm(t,e){var s={};return s.months=e.month()-t.month()+(e.year()-t.year())*12,t.clone().add(s.months,"M").isAfter(e)&&--s.months,s.milliseconds=+e-+t.clone().add(s.months,"M"),s}function XR(t,e){var s;return t.isValid()&&e.isValid()?(e=Zh(e,t),t.isBefore(e)?s=pm(t,e):(s=pm(e,t),s.milliseconds=-s.milliseconds,s.months=-s.months),s):{milliseconds:0,months:0}}function my(t,e){return function(s,i){var n,o;return i!==null&&!isNaN(+i)&&(jb(e,"moment()."+e+"(period, number) is deprecated. Please use moment()."+e+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),o=s,s=i,i=o),n=di(s,i),gy(this,n,t),this}}function gy(t,e,s,i){var n=e._milliseconds,o=bu(e._days),r=bu(e._months);t.isValid()&&(i=i??!0,r&&Kb(t,Fl(t,"Month")+r*s),o&&Wb(t,"Date",Fl(t,"Date")+o*s),n&&t._d.setTime(t._d.valueOf()+n*s),i&&Z.updateOffset(t,o||r))}var QR=my(1,"add"),JR=my(-1,"subtract");function vy(t){return typeof t=="string"||t instanceof String}function KR(t){return li(t)||$a(t)||vy(t)||Ni(t)||tE(t)||eE(t)||t===null||t===void 0}function eE(t){var e=Gn(t)&&!Oh(t),s=!1,i=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],n,o,r=i.length;for(n=0;n<r;n+=1)o=i[n],s=s||We(t,o);return e&&s}function tE(t){var e=ai(t),s=!1;return e&&(s=t.filter(function(i){return!Ni(i)&&vy(t)}).length===0),e&&s}function sE(t){var e=Gn(t)&&!Oh(t),s=!1,i=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],n,o;for(n=0;n<i.length;n+=1)o=i[n],s=s||We(t,o);return e&&s}function iE(t,e){var s=t.diff(e,"days",!0);return s<-6?"sameElse":s<-1?"lastWeek":s<0?"lastDay":s<1?"sameDay":s<2?"nextDay":s<7?"nextWeek":"sameElse"}function nE(t,e){arguments.length===1&&(arguments[0]?KR(arguments[0])?(t=arguments[0],e=void 0):sE(arguments[0])&&(e=arguments[0],t=void 0):(t=void 0,e=void 0));var s=t||ht(),i=Zh(s,this).startOf("day"),n=Z.calendarFormat(this,i)||"sameElse",o=e&&(ki(e[n])?e[n].call(this,s):e[n]);return this.format(o||this.localeData().calendar(n,this,ht(s)))}function oE(){return new ka(this)}function rE(t,e){var s=li(t)?t:ht(t);return this.isValid()&&s.isValid()?(e=Zs(e)||"millisecond",e==="millisecond"?this.valueOf()>s.valueOf():s.valueOf()<this.clone().startOf(e).valueOf()):!1}function aE(t,e){var s=li(t)?t:ht(t);return this.isValid()&&s.isValid()?(e=Zs(e)||"millisecond",e==="millisecond"?this.valueOf()<s.valueOf():this.clone().endOf(e).valueOf()<s.valueOf()):!1}function lE(t,e,s,i){var n=li(t)?t:ht(t),o=li(e)?e:ht(e);return this.isValid()&&n.isValid()&&o.isValid()?(i=i||"()",(i[0]==="("?this.isAfter(n,s):!this.isBefore(n,s))&&(i[1]===")"?this.isBefore(o,s):!this.isAfter(o,s))):!1}function cE(t,e){var s=li(t)?t:ht(t),i;return this.isValid()&&s.isValid()?(e=Zs(e)||"millisecond",e==="millisecond"?this.valueOf()===s.valueOf():(i=s.valueOf(),this.clone().startOf(e).valueOf()<=i&&i<=this.clone().endOf(e).valueOf())):!1}function dE(t,e){return this.isSame(t,e)||this.isAfter(t,e)}function uE(t,e){return this.isSame(t,e)||this.isBefore(t,e)}function hE(t,e,s){var i,n,o;if(!this.isValid())return NaN;if(i=Zh(t,this),!i.isValid())return NaN;switch(n=(i.utcOffset()-this.utcOffset())*6e4,e=Zs(e),e){case"year":o=cl(this,i)/12;break;case"month":o=cl(this,i);break;case"quarter":o=cl(this,i)/3;break;case"second":o=(this-i)/1e3;break;case"minute":o=(this-i)/6e4;break;case"hour":o=(this-i)/36e5;break;case"day":o=(this-i-n)/864e5;break;case"week":o=(this-i-n)/6048e5;break;default:o=this-i}return s?o:Ns(o)}function cl(t,e){if(t.date()<e.date())return-cl(e,t);var s=(e.year()-t.year())*12+(e.month()-t.month()),i=t.clone().add(s,"months"),n,o;return e-i<0?(n=t.clone().add(s-1,"months"),o=(e-i)/(i-n)):(n=t.clone().add(s+1,"months"),o=(e-i)/(n-i)),-(s+o)||0}Z.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";Z.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function fE(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function pE(t){if(!this.isValid())return null;var e=t!==!0,s=e?this.clone().utc():this;return s.year()<0||s.year()>9999?al(s,e?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):ki(Date.prototype.toISOString)?e?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",al(s,"Z")):al(s,e?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function mE(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var t="moment",e="",s,i,n,o;return this.isLocal()||(t=this.utcOffset()===0?"moment.utc":"moment.parseZone",e="Z"),s="["+t+'("]',i=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",n="-MM-DD[T]HH:mm:ss.SSS",o=e+'[")]',this.format(s+i+n+o)}function gE(t){t||(t=this.isUtc()?Z.defaultFormatUtc:Z.defaultFormat);var e=al(this,t);return this.localeData().postformat(e)}function vE(t,e){return this.isValid()&&(li(t)&&t.isValid()||ht(t).isValid())?di({to:this,from:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function bE(t){return this.from(ht(),t)}function yE(t,e){return this.isValid()&&(li(t)&&t.isValid()||ht(t).isValid())?di({from:this,to:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function xE(t){return this.to(ht(),t)}function by(t){var e;return t===void 0?this._locale._abbr:(e=Qi(t),e!=null&&(this._locale=e),this)}var yy=Gs("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(t){return t===void 0?this.localeData():this.locale(t)});function xy(){return this._locale}var El=1e3,Ao=60*El,Ol=60*Ao,wy=(365*400+97)*24*Ol;function Po(t,e){return(t%e+e)%e}function $y(t,e,s){return t<100&&t>=0?new Date(t+400,e,s)-wy:new Date(t,e,s).valueOf()}function ky(t,e,s){return t<100&&t>=0?Date.UTC(t+400,e,s)-wy:Date.UTC(t,e,s)}function wE(t){var e,s;if(t=Zs(t),t===void 0||t==="millisecond"||!this.isValid())return this;switch(s=this._isUTC?ky:$y,t){case"year":e=s(this.year(),0,1);break;case"quarter":e=s(this.year(),this.month()-this.month()%3,1);break;case"month":e=s(this.year(),this.month(),1);break;case"week":e=s(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":e=s(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":e=s(this.year(),this.month(),this.date());break;case"hour":e=this._d.valueOf(),e-=Po(e+(this._isUTC?0:this.utcOffset()*Ao),Ol);break;case"minute":e=this._d.valueOf(),e-=Po(e,Ao);break;case"second":e=this._d.valueOf(),e-=Po(e,El);break}return this._d.setTime(e),Z.updateOffset(this,!0),this}function $E(t){var e,s;if(t=Zs(t),t===void 0||t==="millisecond"||!this.isValid())return this;switch(s=this._isUTC?ky:$y,t){case"year":e=s(this.year()+1,0,1)-1;break;case"quarter":e=s(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":e=s(this.year(),this.month()+1,1)-1;break;case"week":e=s(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":e=s(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":e=s(this.year(),this.month(),this.date()+1)-1;break;case"hour":e=this._d.valueOf(),e+=Ol-Po(e+(this._isUTC?0:this.utcOffset()*Ao),Ol)-1;break;case"minute":e=this._d.valueOf(),e+=Ao-Po(e,Ao)-1;break;case"second":e=this._d.valueOf(),e+=El-Po(e,El)-1;break}return this._d.setTime(e),Z.updateOffset(this,!0),this}function kE(){return this._d.valueOf()-(this._offset||0)*6e4}function _E(){return Math.floor(this.valueOf()/1e3)}function SE(){return new Date(this.valueOf())}function CE(){var t=this;return[t.year(),t.month(),t.date(),t.hour(),t.minute(),t.second(),t.millisecond()]}function IE(){var t=this;return{years:t.year(),months:t.month(),date:t.date(),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds(),milliseconds:t.milliseconds()}}function TE(){return this.isValid()?this.toISOString():null}function FE(){return Ah(this)}function DE(){return cn({},Te(this))}function RE(){return Te(this).overflow}function EE(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}ue("N",0,0,"eraAbbr");ue("NN",0,0,"eraAbbr");ue("NNN",0,0,"eraAbbr");ue("NNNN",0,0,"eraName");ue("NNNNN",0,0,"eraNarrow");ue("y",["y",1],"yo","eraYear");ue("y",["yy",2],0,"eraYear");ue("y",["yyy",3],0,"eraYear");ue("y",["yyyy",4],0,"eraYear");ie("N",Xh);ie("NN",Xh);ie("NNN",Xh);ie("NNNN",jE);ie("NNNNN",UE);tt(["N","NN","NNN","NNNN","NNNNN"],function(t,e,s,i){var n=s._locale.erasParse(t,i,s._strict);n?Te(s).era=n:Te(s).invalidEra=t});ie("y",lr);ie("yy",lr);ie("yyy",lr);ie("yyyy",lr);ie("yo",YE);tt(["y","yy","yyy","yyyy"],Qt);tt(["yo"],function(t,e,s,i){var n;s._locale._eraYearOrdinalRegex&&(n=t.match(s._locale._eraYearOrdinalRegex)),s._locale.eraYearOrdinalParse?e[Qt]=s._locale.eraYearOrdinalParse(t,n):e[Qt]=parseInt(t,10)});function OE(t,e){var s,i,n,o=this._eras||Qi("en")._eras;for(s=0,i=o.length;s<i;++s){switch(typeof o[s].since){case"string":n=Z(o[s].since).startOf("day"),o[s].since=n.valueOf();break}switch(typeof o[s].until){case"undefined":o[s].until=1/0;break;case"string":n=Z(o[s].until).startOf("day").valueOf(),o[s].until=n.valueOf();break}}return o}function AE(t,e,s){var i,n,o=this.eras(),r,a,l;for(t=t.toUpperCase(),i=0,n=o.length;i<n;++i)if(r=o[i].name.toUpperCase(),a=o[i].abbr.toUpperCase(),l=o[i].narrow.toUpperCase(),s)switch(e){case"N":case"NN":case"NNN":if(a===t)return o[i];break;case"NNNN":if(r===t)return o[i];break;case"NNNNN":if(l===t)return o[i];break}else if([r,a,l].indexOf(t)>=0)return o[i]}function PE(t,e){var s=t.since<=t.until?1:-1;return e===void 0?Z(t.since).year():Z(t.since).year()+(e-t.offset)*s}function LE(){var t,e,s,i=this.localeData().eras();for(t=0,e=i.length;t<e;++t)if(s=this.clone().startOf("day").valueOf(),i[t].since<=s&&s<=i[t].until||i[t].until<=s&&s<=i[t].since)return i[t].name;return""}function ME(){var t,e,s,i=this.localeData().eras();for(t=0,e=i.length;t<e;++t)if(s=this.clone().startOf("day").valueOf(),i[t].since<=s&&s<=i[t].until||i[t].until<=s&&s<=i[t].since)return i[t].narrow;return""}function VE(){var t,e,s,i=this.localeData().eras();for(t=0,e=i.length;t<e;++t)if(s=this.clone().startOf("day").valueOf(),i[t].since<=s&&s<=i[t].until||i[t].until<=s&&s<=i[t].since)return i[t].abbr;return""}function HE(){var t,e,s,i,n=this.localeData().eras();for(t=0,e=n.length;t<e;++t)if(s=n[t].since<=n[t].until?1:-1,i=this.clone().startOf("day").valueOf(),n[t].since<=i&&i<=n[t].until||n[t].until<=i&&i<=n[t].since)return(this.year()-Z(n[t].since).year())*s+n[t].offset;return this.year()}function NE(t){return We(this,"_erasNameRegex")||Qh.call(this),t?this._erasNameRegex:this._erasRegex}function zE(t){return We(this,"_erasAbbrRegex")||Qh.call(this),t?this._erasAbbrRegex:this._erasRegex}function BE(t){return We(this,"_erasNarrowRegex")||Qh.call(this),t?this._erasNarrowRegex:this._erasRegex}function Xh(t,e){return e.erasAbbrRegex(t)}function jE(t,e){return e.erasNameRegex(t)}function UE(t,e){return e.erasNarrowRegex(t)}function YE(t,e){return e._eraYearOrdinalRegex||lr}function Qh(){var t=[],e=[],s=[],i=[],n,o,r=this.eras();for(n=0,o=r.length;n<o;++n)e.push(Cs(r[n].name)),t.push(Cs(r[n].abbr)),s.push(Cs(r[n].narrow)),i.push(Cs(r[n].name)),i.push(Cs(r[n].abbr)),i.push(Cs(r[n].narrow));this._erasRegex=new RegExp("^("+i.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+e.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+t.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+s.join("|")+")","i")}ue(0,["gg",2],0,function(){return this.weekYear()%100});ue(0,["GG",2],0,function(){return this.isoWeekYear()%100});function Xc(t,e){ue(0,[t,t.length],0,e)}Xc("gggg","weekYear");Xc("ggggg","weekYear");Xc("GGGG","isoWeekYear");Xc("GGGGG","isoWeekYear");es("weekYear","gg");es("isoWeekYear","GG");ts("weekYear",1);ts("isoWeekYear",1);ie("G",Yc);ie("g",Yc);ie("GG",pt,Ls);ie("gg",pt,Ls);ie("GGGG",Nh,Hh);ie("gggg",Nh,Hh);ie("GGGGG",Uc,Bc);ie("ggggg",Uc,Bc);Sa(["gggg","ggggg","GGGG","GGGGG"],function(t,e,s,i){e[i.substr(0,2)]=Ae(t)});Sa(["gg","GG"],function(t,e,s,i){e[i]=Z.parseTwoDigitYear(t)});function WE(t){return _y.call(this,t,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function qE(t){return _y.call(this,t,this.isoWeek(),this.isoWeekday(),1,4)}function GE(){return Pi(this.year(),1,4)}function ZE(){return Pi(this.isoWeekYear(),1,4)}function XE(){var t=this.localeData()._week;return Pi(this.year(),t.dow,t.doy)}function QE(){var t=this.localeData()._week;return Pi(this.weekYear(),t.dow,t.doy)}function _y(t,e,s,i,n){var o;return t==null?aa(this,i,n).year:(o=Pi(t,i,n),e>o&&(e=o),JE.call(this,t,e,s,i,n))}function JE(t,e,s,i,n){var o=iy(t,e,s,i,n),r=ra(o.year,0,o.dayOfYear);return this.year(r.getUTCFullYear()),this.month(r.getUTCMonth()),this.date(r.getUTCDate()),this}ue("Q",0,"Qo","quarter");es("quarter","Q");ts("quarter",7);ie("Q",qb);tt("Q",function(t,e){e[Ei]=(Ae(t)-1)*3});function KE(t){return t==null?Math.ceil((this.month()+1)/3):this.month((t-1)*3+this.month()%3)}ue("D",["DD",2],"Do","date");es("date","D");ts("date",9);ie("D",pt);ie("DD",pt,Ls);ie("Do",function(t,e){return t?e._dayOfMonthOrdinalParse||e._ordinalParse:e._dayOfMonthOrdinalParseLenient});tt(["D","DD"],gi);tt("Do",function(t,e){e[gi]=Ae(t.match(pt)[0])});var Sy=ar("Date",!0);ue("DDD",["DDDD",3],"DDDo","dayOfYear");es("dayOfYear","DDD");ts("dayOfYear",4);ie("DDD",jc);ie("DDDD",Gb);tt(["DDD","DDDD"],function(t,e,s){s._dayOfYear=Ae(t)});function eO(t){var e=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return t==null?e:this.add(t-e,"d")}ue("m",["mm",2],0,"minute");es("minute","m");ts("minute",14);ie("m",pt);ie("mm",pt,Ls);tt(["m","mm"],ti);var tO=ar("Minutes",!1);ue("s",["ss",2],0,"second");es("second","s");ts("second",15);ie("s",pt);ie("ss",pt,Ls);tt(["s","ss"],Oi);var sO=ar("Seconds",!1);ue("S",0,0,function(){return~~(this.millisecond()/100)});ue(0,["SS",2],0,function(){return~~(this.millisecond()/10)});ue(0,["SSS",3],0,"millisecond");ue(0,["SSSS",4],0,function(){return this.millisecond()*10});ue(0,["SSSSS",5],0,function(){return this.millisecond()*100});ue(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});ue(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});ue(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});ue(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});es("millisecond","ms");ts("millisecond",16);ie("S",jc,qb);ie("SS",jc,Ls);ie("SSS",jc,Gb);var dn,Cy;for(dn="SSSS";dn.length<=9;dn+="S")ie(dn,lr);function iO(t,e){e[jn]=Ae(("0."+t)*1e3)}for(dn="S";dn.length<=9;dn+="S")tt(dn,iO);Cy=ar("Milliseconds",!1);ue("z",0,0,"zoneAbbr");ue("zz",0,0,"zoneName");function nO(){return this._isUTC?"UTC":""}function oO(){return this._isUTC?"Coordinated Universal Time":""}var H=ka.prototype;H.add=QR;H.calendar=nE;H.clone=oE;H.diff=hE;H.endOf=$E;H.format=gE;H.from=vE;H.fromNow=bE;H.to=yE;H.toNow=xE;H.get=aD;H.invalidAt=RE;H.isAfter=rE;H.isBefore=aE;H.isBetween=lE;H.isSame=cE;H.isSameOrAfter=dE;H.isSameOrBefore=uE;H.isValid=FE;H.lang=yy;H.locale=by;H.localeData=xy;H.max=FR;H.min=TR;H.parsingFlags=DE;H.set=lD;H.startOf=wE;H.subtract=JR;H.toArray=CE;H.toObject=IE;H.toDate=SE;H.toISOString=pE;H.inspect=mE;typeof Symbol<"u"&&Symbol.for!=null&&(H[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});H.toJSON=TE;H.toString=fE;H.unix=_E;H.valueOf=kE;H.creationData=EE;H.eraName=LE;H.eraNarrow=ME;H.eraAbbr=VE;H.eraYear=HE;H.year=sy;H.isLeapYear=ID;H.weekYear=WE;H.isoWeekYear=qE;H.quarter=H.quarters=KE;H.month=ey;H.daysInMonth=_D;H.week=H.weeks=OD;H.isoWeek=H.isoWeeks=AD;H.weeksInYear=XE;H.weeksInWeekYear=QE;H.isoWeeksInYear=GE;H.isoWeeksInISOWeekYear=ZE;H.date=Sy;H.day=H.days=qD;H.weekday=GD;H.isoWeekday=ZD;H.dayOfYear=eO;H.hour=H.hours=sR;H.minute=H.minutes=tO;H.second=H.seconds=sO;H.millisecond=H.milliseconds=Cy;H.utcOffset=VR;H.utc=NR;H.local=zR;H.parseZone=BR;H.hasAlignedHourOffset=jR;H.isDST=UR;H.isLocal=WR;H.isUtcOffset=qR;H.isUtc=py;H.isUTC=py;H.zoneAbbr=nO;H.zoneName=oO;H.dates=Gs("dates accessor is deprecated. Use date instead.",Sy);H.months=Gs("months accessor is deprecated. Use month instead",ey);H.years=Gs("years accessor is deprecated. Use year instead",sy);H.zone=Gs("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",HR);H.isDSTShifted=Gs("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",YR);function rO(t){return ht(t*1e3)}function aO(){return ht.apply(null,arguments).parseZone()}function Iy(t){return t}var qe=Lh.prototype;qe.calendar=qF;qe.longDateFormat=QF;qe.invalidDate=KF;qe.ordinal=sD;qe.preparse=Iy;qe.postformat=Iy;qe.relativeTime=nD;qe.pastFuture=oD;qe.set=YF;qe.eras=OE;qe.erasParse=AE;qe.erasConvertYear=PE;qe.erasAbbrRegex=zE;qe.erasNameRegex=NE;qe.erasNarrowRegex=BE;qe.months=xD;qe.monthsShort=wD;qe.monthsParse=kD;qe.monthsRegex=CD;qe.monthsShortRegex=SD;qe.week=FD;qe.firstDayOfYear=ED;qe.firstDayOfWeek=RD;qe.weekdays=BD;qe.weekdaysMin=UD;qe.weekdaysShort=jD;qe.weekdaysParse=WD;qe.weekdaysRegex=XD;qe.weekdaysShortRegex=QD;qe.weekdaysMinRegex=JD;qe.isPM=eR;qe.meridiem=iR;function Al(t,e,s,i){var n=Qi(),o=$i().set(i,e);return n[s](o,t)}function Ty(t,e,s){if(Ni(t)&&(e=t,t=void 0),t=t||"",e!=null)return Al(t,e,s,"month");var i,n=[];for(i=0;i<12;i++)n[i]=Al(t,i,s,"month");return n}function Jh(t,e,s,i){typeof t=="boolean"?(Ni(e)&&(s=e,e=void 0),e=e||""):(e=t,s=e,t=!1,Ni(e)&&(s=e,e=void 0),e=e||"");var n=Qi(),o=t?n._week.dow:0,r,a=[];if(s!=null)return Al(e,(s+o)%7,i,"day");for(r=0;r<7;r++)a[r]=Al(e,(r+o)%7,i,"day");return a}function lO(t,e){return Ty(t,e,"months")}function cO(t,e){return Ty(t,e,"monthsShort")}function dO(t,e,s){return Jh(t,e,s,"weekdays")}function uO(t,e,s){return Jh(t,e,s,"weekdaysShort")}function hO(t,e,s){return Jh(t,e,s,"weekdaysMin")}mn("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(t){var e=t%10,s=Ae(t%100/10)===1?"th":e===1?"st":e===2?"nd":e===3?"rd":"th";return t+s}});Z.lang=Gs("moment.lang is deprecated. Use moment.locale instead.",mn);Z.langData=Gs("moment.langData is deprecated. Use moment.localeData instead.",Qi);var Ii=Math.abs;function fO(){var t=this._data;return this._milliseconds=Ii(this._milliseconds),this._days=Ii(this._days),this._months=Ii(this._months),t.milliseconds=Ii(t.milliseconds),t.seconds=Ii(t.seconds),t.minutes=Ii(t.minutes),t.hours=Ii(t.hours),t.months=Ii(t.months),t.years=Ii(t.years),this}function Fy(t,e,s,i){var n=di(e,s);return t._milliseconds+=i*n._milliseconds,t._days+=i*n._days,t._months+=i*n._months,t._bubble()}function pO(t,e){return Fy(this,t,e,1)}function mO(t,e){return Fy(this,t,e,-1)}function mm(t){return t<0?Math.floor(t):Math.ceil(t)}function gO(){var t=this._milliseconds,e=this._days,s=this._months,i=this._data,n,o,r,a,l;return t>=0&&e>=0&&s>=0||t<=0&&e<=0&&s<=0||(t+=mm(xu(s)+e)*864e5,e=0,s=0),i.milliseconds=t%1e3,n=Ns(t/1e3),i.seconds=n%60,o=Ns(n/60),i.minutes=o%60,r=Ns(o/60),i.hours=r%24,e+=Ns(r/24),l=Ns(Dy(e)),s+=l,e-=mm(xu(l)),a=Ns(s/12),s%=12,i.days=e,i.months=s,i.years=a,this}function Dy(t){return t*4800/146097}function xu(t){return t*146097/4800}function vO(t){if(!this.isValid())return NaN;var e,s,i=this._milliseconds;if(t=Zs(t),t==="month"||t==="quarter"||t==="year")switch(e=this._days+i/864e5,s=this._months+Dy(e),t){case"month":return s;case"quarter":return s/3;case"year":return s/12}else switch(e=this._days+Math.round(xu(this._months)),t){case"week":return e/7+i/6048e5;case"day":return e+i/864e5;case"hour":return e*24+i/36e5;case"minute":return e*1440+i/6e4;case"second":return e*86400+i/1e3;case"millisecond":return Math.floor(e*864e5)+i;default:throw new Error("Unknown unit "+t)}}function bO(){return this.isValid()?this._milliseconds+this._days*864e5+this._months%12*2592e6+Ae(this._months/12)*31536e6:NaN}function Ji(t){return function(){return this.as(t)}}var yO=Ji("ms"),xO=Ji("s"),wO=Ji("m"),$O=Ji("h"),kO=Ji("d"),_O=Ji("w"),SO=Ji("M"),CO=Ji("Q"),IO=Ji("y");function TO(){return di(this)}function FO(t){return t=Zs(t),this.isValid()?this[t+"s"]():NaN}function uo(t){return function(){return this.isValid()?this._data[t]:NaN}}var DO=uo("milliseconds"),RO=uo("seconds"),EO=uo("minutes"),OO=uo("hours"),AO=uo("days"),PO=uo("months"),LO=uo("years");function MO(){return Ns(this.days()/7)}var Fi=Math.round,_o={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function VO(t,e,s,i,n){return n.relativeTime(e||1,!!s,t,i)}function HO(t,e,s,i){var n=di(t).abs(),o=Fi(n.as("s")),r=Fi(n.as("m")),a=Fi(n.as("h")),l=Fi(n.as("d")),c=Fi(n.as("M")),d=Fi(n.as("w")),u=Fi(n.as("y")),f=o<=s.ss&&["s",o]||o<s.s&&["ss",o]||r<=1&&["m"]||r<s.m&&["mm",r]||a<=1&&["h"]||a<s.h&&["hh",a]||l<=1&&["d"]||l<s.d&&["dd",l];return s.w!=null&&(f=f||d<=1&&["w"]||d<s.w&&["ww",d]),f=f||c<=1&&["M"]||c<s.M&&["MM",c]||u<=1&&["y"]||["yy",u],f[2]=e,f[3]=+t>0,f[4]=i,VO.apply(null,f)}function NO(t){return t===void 0?Fi:typeof t=="function"?(Fi=t,!0):!1}function zO(t,e){return _o[t]===void 0?!1:e===void 0?_o[t]:(_o[t]=e,t==="s"&&(_o.ss=e-1),!0)}function BO(t,e){if(!this.isValid())return this.localeData().invalidDate();var s=!1,i=_o,n,o;return typeof t=="object"&&(e=t,t=!1),typeof t=="boolean"&&(s=t),typeof e=="object"&&(i=Object.assign({},_o,e),e.s!=null&&e.ss==null&&(i.ss=e.s-1)),n=this.localeData(),o=HO(this,!s,i,n),s&&(o=n.pastFuture(+this,o)),n.postformat(o)}var Ld=Math.abs;function go(t){return(t>0)-(t<0)||+t}function Qc(){if(!this.isValid())return this.localeData().invalidDate();var t=Ld(this._milliseconds)/1e3,e=Ld(this._days),s=Ld(this._months),i,n,o,r,a=this.asSeconds(),l,c,d,u;return a?(i=Ns(t/60),n=Ns(i/60),t%=60,i%=60,o=Ns(s/12),s%=12,r=t?t.toFixed(3).replace(/\.?0+$/,""):"",l=a<0?"-":"",c=go(this._months)!==go(a)?"-":"",d=go(this._days)!==go(a)?"-":"",u=go(this._milliseconds)!==go(a)?"-":"",l+"P"+(o?c+o+"Y":"")+(s?c+s+"M":"")+(e?d+e+"D":"")+(n||i||t?"T":"")+(n?u+n+"H":"")+(i?u+i+"M":"")+(t?u+r+"S":"")):"P0D"}var Ne=Zc.prototype;Ne.isValid=AR;Ne.abs=fO;Ne.add=pO;Ne.subtract=mO;Ne.as=vO;Ne.asMilliseconds=yO;Ne.asSeconds=xO;Ne.asMinutes=wO;Ne.asHours=$O;Ne.asDays=kO;Ne.asWeeks=_O;Ne.asMonths=SO;Ne.asQuarters=CO;Ne.asYears=IO;Ne.valueOf=bO;Ne._bubble=gO;Ne.clone=TO;Ne.get=FO;Ne.milliseconds=DO;Ne.seconds=RO;Ne.minutes=EO;Ne.hours=OO;Ne.days=AO;Ne.weeks=MO;Ne.months=PO;Ne.years=LO;Ne.humanize=BO;Ne.toISOString=Qc;Ne.toString=Qc;Ne.toJSON=Qc;Ne.locale=by;Ne.localeData=xy;Ne.toIsoString=Gs("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Qc);Ne.lang=yy;ue("X",0,0,"unix");ue("x",0,0,"valueOf");ie("x",Yc);ie("X",dD);tt("X",function(t,e,s){s._d=new Date(parseFloat(t)*1e3)});tt("x",function(t,e,s){s._d=new Date(Ae(t))});//! moment.js
Z.version="2.29.4";jF(ht);Z.fn=H;Z.min=DR;Z.max=RR;Z.now=ER;Z.utc=$i;Z.unix=rO;Z.months=lO;Z.isDate=$a;Z.locale=mn;Z.invalid=Nc;Z.duration=di;Z.isMoment=li;Z.weekdays=dO;Z.parseZone=aO;Z.localeData=Qi;Z.isDuration=ll;Z.monthsShort=cO;Z.weekdaysMin=hO;Z.defineLocale=Uh;Z.updateLocale=aR;Z.locales=lR;Z.weekdaysShort=uO;Z.normalizeUnits=Zs;Z.relativeTimeRounding=NO;Z.relativeTimeThreshold=zO;Z.calendarFormat=iE;Z.prototype=H;Z.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};const gm=ke({__name:"Time",props:{format:{}},setup(t){const e=t,s=dt(Z().format(e.format)),i=()=>{s.value=Z().format(e.format)};var n=void 0;return Yt(()=>{n=setInterval(i,1e3)}),Ps(()=>{clearInterval(n)}),(o,r)=>wt(s.value)}}),jO={class:"text-center mt-16 text-white"},UO={class:"text-rp-6"},YO={class:"text-rp-3"},WO=ke({__name:"ScreenSaver",props:{setIsTyped:{type:Function}},setup(t){const e=t,s=dt(!1),i=async()=>new Promise(()=>setTimeout(()=>{e.setIsTyped(!0)},300)),n=async()=>{s.value=!0,await i()},o=lo({start:0,end:0,cur:0,curMax:0,active:!1}),r=d=>{o.active=!0,o.start=d.screenY},a=d=>{o.active=!1,o.end=d.screenY,o.cur=0},l=d=>{o.active&&(o.start>d.screenY?o.cur=o.start-d.screenY:(o.curMax=d.screenY,o.cur=0,o.start=o.curMax))},c=async d=>{a(d),o.start-o.end>=d.view.innerHeight/3&&(s.value=!0,await i())};return Yt(()=>{window.addEventListener("mousedown",r),window.addEventListener("mousemove",l),window.addEventListener("mouseup",c),window.addEventListener("keypress",n)}),Ps(()=>{window.removeEventListener("dragstart",r),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",c),window.removeEventListener("keypress",n)}),(d,u)=>(Q(),Se("div",{graggable:"true",class:Ut([[s.value?"-translate-y-[10%] opacity-0 transition-all":"",o.active?"":"transition-all"],"relative left-0 full-screen grid justify-center select-none"]),style:xn({top:-o.cur/8+"px"})},[C("div",jO,[C("p",UO,[E(gm,{format:"HH:mm"})]),C("p",YO,[E(gm,{format:"MM-DD-YYYY"})])])],6))}}),Jc=Hc("user_store",{state:()=>({accountState:{name:"t",password:"p"},isLogout:!0}),getters:{getUserAccountState:t=>t.accountState,getUserIsLogout:t=>t.isLogout},actions:{setIsLogout(t){this.isLogout=t}},persist:!0}),qO={},GO={class:"avatar-panel bg-black/25 backdrop-blur-lg text-white flex-none font-semibold text-8xl grid place-content-center"};function ZO(t,e){const s=pe("Icon"),i=pe("IconButton");return Q(),Se("div",GO,[E(i,{"has-filled":"",class:"w-full h-full scale-[4] icon-filled"},{default:z(()=>[E(s,null,{default:z(()=>[Ye(" person ")]),_:1})]),_:1})])}const XO=qt(qO,[["render",ZO]]),QO={class:"drop-shadow-md shadow-black text-4xl text-white"},JO=ke({__name:"ProfileName",setup(t){const e=Jc();return(s,i)=>(Q(),Se("p",QO,wt(ve(e).accountState.name),1))}}),ui=Hc("system_store",{state:()=>({brightness:100,isNightlight:!1,isLocked:!0,needShutdown:!1,isShutdown:!1,starts:{isOpening:!1}}),getters:{getSystemBrightness:t=>t.brightness,getSystemIsNightlight:t=>t.isNightlight,getSystemIsLocked:t=>t.isLocked,getSystemNeedShutdown:t=>t.needShutdown,getSystemIsShutdown:t=>t.isShutdown,getSystemStarts:t=>t.starts},actions:{setBrightness(t){this.brightness=t},setIsNightlight(t){this.isNightlight=t},toggleIsNightlight(){this.isNightlight=!this.isNightlight},setIsLocked(t){this.isLocked=t},setNeedShutdown(t){this.needShutdown=t},setIsShutdown(t){this.isShutdown=t},setStarts(t){this.starts=t}},persist:!0}),KO={class:"relative full-screen flex flex-col gap-16 items-center justify-center"},eA={class:"flex items-center relative"},tA=["onKeyup"],sA={key:0},iA={key:0,class:"text-rb"},nA={key:1,class:"text-rb"},oA={key:1},rA=ke({__name:"Login",setup(t){const e=ui(),s=Jc(),i=lo({password:"",pending:!1,isError:!1,isTyped:!1}),n=async c=>{i.pending=c},o=async c=>{i.isError=c},r=async c=>{i.isTyped=c},a=async c=>await new Promise(()=>setTimeout(()=>{c()},500)),l=async()=>{r(!0),n(!0),o(!1),i.password===s.accountState.password&&await a(()=>{n(!1),s.setIsLogout(!1),e.setIsLocked(!1)}),await a(()=>{o(!0),n(!1)})};return(c,d)=>{const u=pe("Icon");return Q(),Se("div",KO,[E(XO),E(JO),C("form",eA,[C("fluent-text-field",{autofocus:"",type:"password",onInput:d[0]||(d[0]=f=>i.password=f.target.value),appearance:"filled",onKeyup:vI(l,["enter"]),placeholder:"Password"},null,40,tA),C("fluent-button",{onClick:l,class:"absolute right-0 z-[1] p-0.5 grid place-content-center"},[E(u,null,{default:z(()=>[Ye("arrow_forward")]),_:1})])]),i.pending?(Q(),Se("fluent-progress-ring",oA)):(Q(),Se("div",sA,[i.isError?(Q(),Se("p",iA,"Typed password is incorrect")):ve(e).getSystemIsLocked&&i.isTyped?(Q(),Se("p",nA,"Welcome")):ru("",!0)]))])}}}),aA={class:"relative full-screen overflow-clip"},lA=ke({__name:"LockScreen",setup(t){const e=dt(!1),s=o=>{e.value=o};var i=void 0;const n=()=>{clearTimeout(i),i=setTimeout(()=>{s(!1)},1e4)};return Yt(()=>{window.addEventListener("mousemove",n),window.addEventListener("keypress",n)}),Ps(()=>{window.removeEventListener("mousemove",n),window.removeEventListener("keypress",n)}),(o,r)=>(Q(),Se("div",aA,[C("div",{class:Ut([[e.value?"blur scale-125 brightness-75":""],"absolute full-screen transition-all duration-500 lock-screen-wallpaper"])},null,2),e.value?(Q(),et(rA,{key:1})):(Q(),et(WO,{key:0,"set-is-typed":s}))]))}}),cA={},dA={placeholder:"Type here to search"};function uA(t,e){return Q(),Se("fluent-search",dA)}const hA=qt(cA,[["render",uA]]),Ca=Hc("theme_store",{state:()=>({theme:{darkModeEnabled:!1,baseLayerValue:0,swatchColor:{r:0,g:120,b:215},blurEnabled:!0}}),getters:{getTheme:t=>t.theme},actions:{setBlurenabled(t){this.theme.blurEnabled=t},setIsDarkMode(t){this.theme.darkModeEnabled=t},setBaseLayerValue(t){this.theme.baseLayerValue=t},setSwatchColor(t,e,s){this.theme.swatchColor={r:t,g:e,b:s}}},persist:!0}),fA={class:"flex gap-4"},pA=C("h1",{class:"text-rb"},"Blur",-1),mA=ke({__name:"BlurCheckbox",setup(t){const e=dt(),s=Ca(),i=n=>{s.setBlurenabled(n.target.checked)};return Yt(()=>{e.value.checked=s.getTheme.blurEnabled}),(n,o)=>(Q(),Se("label",fA,[pA,C("fluent-checkbox",{ref_key:"checkbox",ref:e,onChange:i},null,544)]))}});var Fn=function(){/*!
* Copyright (c) 2021-2023 Momo Bassit.
* Licensed under the MIT License (MIT)
* https://github.com/mdbassit/Coloris
* Version: 0.21.1
* NPM: https://github.com/melloware/coloris-npm
*/return function(t,e,s,i){var n=e.createElement("canvas").getContext("2d"),o={r:0,g:0,b:0,h:0,s:0,v:0,a:1},r,a,l,c,d,u,f,y,w,$,_,A,P,re,Y,ge,be={},R={el:"[data-coloris]",parent:"body",theme:"default",themeMode:"light",rtl:!1,wrap:!0,margin:2,format:"hex",formatToggle:!1,swatches:[],swatchesOnly:!1,alpha:!0,forceAlpha:!1,focusInput:!0,selectInput:!1,inline:!1,defaultColor:"#000000",clearButton:!1,clearLabel:"Clear",closeButton:!1,closeLabel:"Close",onChange:function(){return i},a11y:{open:"Open color picker",close:"Close color picker",clear:"Clear the selected color",marker:"Saturation: {s}. Brightness: {v}.",hueSlider:"Hue slider",alphaSlider:"Opacity slider",input:"Color value field",format:"Color format",swatch:"Color swatch",instruction:"Saturation and brightness selector. Use up, down, left and right arrow keys to select."}},Ce={},Ee="",st={},kt=!1;function Pt(g){if(typeof g=="object"){var k=function(){switch(D){case"el":Ge(g.el),g.wrap!==!1&&ps(g.el);break;case"parent":r=e.querySelector(g.parent),r&&(r.appendChild(a),R.parent=g.parent,r===e.body&&(r=i));break;case"themeMode":R.themeMode=g.themeMode,g.themeMode==="auto"&&t.matchMedia&&t.matchMedia("(prefers-color-scheme: dark)").matches&&(R.themeMode="dark");case"theme":g.theme&&(R.theme=g.theme),a.className="clr-picker clr-"+R.theme+" clr-"+R.themeMode,R.inline&&Ve();break;case"rtl":R.rtl=!!g.rtl,e.querySelectorAll(".clr-field").forEach(function(Ms){return Ms.classList.toggle("clr-rtl",R.rtl)});break;case"margin":g.margin*=1,R.margin=isNaN(g.margin)?R.margin:g.margin;break;case"wrap":g.el&&g.wrap&&ps(g.el);break;case"formatToggle":R.formatToggle=!!g.formatToggle,ee("clr-format").style.display=R.formatToggle?"block":"none",R.formatToggle&&(R.format="auto");break;case"swatches":if(Array.isArray(g.swatches)){var de=[];g.swatches.forEach(function(Ms,of){de.push('<button type="button" id="clr-swatch-'+of+'" aria-labelledby="clr-swatch-label clr-swatch-'+of+'" style="color: '+Ms+';">'+Ms+"</button>")}),ee("clr-swatches").innerHTML=de.length?"<div>"+de.join("")+"</div>":"",R.swatches=g.swatches.slice()}break;case"swatchesOnly":R.swatchesOnly=!!g.swatchesOnly,a.setAttribute("data-minimal",R.swatchesOnly);break;case"alpha":R.alpha=!!g.alpha,a.setAttribute("data-alpha",R.alpha);break;case"inline":if(R.inline=!!g.inline,a.setAttribute("data-inline",R.inline),R.inline){var Oe=g.defaultColor||R.defaultColor;re=Lt(Oe),Ve(),Gt(Oe)}break;case"clearButton":typeof g.clearButton=="object"&&(g.clearButton.label&&(R.clearLabel=g.clearButton.label,f.innerHTML=R.clearLabel),g.clearButton=g.clearButton.show),R.clearButton=!!g.clearButton,f.style.display=R.clearButton?"block":"none";break;case"clearLabel":R.clearLabel=g.clearLabel,f.innerHTML=R.clearLabel;break;case"closeButton":R.closeButton=!!g.closeButton,R.closeButton?a.insertBefore(y,d):d.appendChild(y);break;case"closeLabel":R.closeLabel=g.closeLabel,y.innerHTML=R.closeLabel;break;case"a11y":var Ie=g.a11y,lt=!1;if(typeof Ie=="object")for(var xe in Ie)Ie[xe]&&R.a11y[xe]&&(R.a11y[xe]=Ie[xe],lt=!0);if(lt){var it=ee("clr-open-label"),_s=ee("clr-swatch-label");it.innerHTML=R.a11y.open,_s.innerHTML=R.a11y.swatch,y.setAttribute("aria-label",R.a11y.close),f.setAttribute("aria-label",R.a11y.clear),w.setAttribute("aria-label",R.a11y.hueSlider),_.setAttribute("aria-label",R.a11y.alphaSlider),u.setAttribute("aria-label",R.a11y.input),l.setAttribute("aria-label",R.a11y.instruction)}break;default:R[D]=g[D]}};for(var D in g)k()}}function fs(g,k){typeof g=="string"&&typeof k=="object"&&(Ce[g]=k,kt=!0)}function _i(g){delete Ce[g],Object.keys(Ce).length===0&&(kt=!1,g===Ee&&He())}function ss(g){if(kt){var k=["el","wrap","rtl","inline","defaultColor","a11y"],D=function(){var Ie=Ce[G];if(g.matches(G)){Ee=G,st={},k.forEach(function(xe){return delete Ie[xe]});for(var lt in Ie)st[lt]=Array.isArray(R[lt])?R[lt].slice():R[lt];return Pt(Ie),"break"}};for(var G in Ce){var de=D();if(de==="break")break}}}function He(){Object.keys(st).length>0&&(Pt(st),Ee="",st={})}function Ge(g){j(e,"click",g,function(k){R.inline||(ss(k.target),P=k.target,Y=P.value,re=Lt(Y),a.classList.add("clr-open"),Ve(),Gt(Y),(R.focusInput||R.selectInput)&&(u.focus({preventScroll:!0}),u.setSelectionRange(P.selectionStart,P.selectionEnd)),R.selectInput&&u.select(),(ge||R.swatchesOnly)&&V().shift().focus(),P.dispatchEvent(new Event("open",{bubbles:!0})))}),j(e,"input",g,function(k){var D=k.target.parentNode;D.classList.contains("clr-field")&&(D.style.color=k.target.value)})}function Ve(){if(!(!a||!P&&!R.inline)){var g=r,k=t.scrollY,D=a.offsetWidth,G=a.offsetHeight,de={left:!1,top:!1},Oe,Ie,lt,xe={x:0,y:0};if(g&&(Oe=t.getComputedStyle(g),Ie=parseFloat(Oe.marginTop),lt=parseFloat(Oe.borderTopWidth),xe=g.getBoundingClientRect(),xe.y+=lt+k),!R.inline){var it=P.getBoundingClientRect(),_s=it.x,Ms=k+it.y+it.height+R.margin;g?(_s-=xe.x,Ms-=xe.y,_s+D>g.clientWidth&&(_s+=it.width-D,de.left=!0),Ms+G>g.clientHeight-Ie&&G+R.margin<=it.top-(xe.y-k)&&(Ms-=it.height+G+R.margin*2,de.top=!0),Ms+=g.scrollTop):(_s+D>e.documentElement.clientWidth&&(_s+=it.width-D,de.left=!0),Ms+G-k>e.documentElement.clientHeight&&G+R.margin<=it.top&&(Ms=k+it.y-G-R.margin,de.top=!0)),a.classList.toggle("clr-left",de.left),a.classList.toggle("clr-top",de.top),a.style.left=_s+"px",a.style.top=Ms+"px",xe.x+=a.offsetLeft,xe.y+=a.offsetTop}be={width:l.offsetWidth,height:l.offsetHeight,x:l.offsetLeft+xe.x,y:l.offsetTop+xe.y}}}function ps(g){e.querySelectorAll(g).forEach(function(k){var D=k.parentNode;if(!D.classList.contains("clr-field")){var G=e.createElement("div"),de="clr-field";(R.rtl||k.classList.contains("clr-rtl"))&&(de+=" clr-rtl"),G.innerHTML='<button type="button" aria-labelledby="clr-open-label"></button>',D.insertBefore(G,k),G.setAttribute("class",de),G.style.color=k.value,G.appendChild(k)}})}function is(g){if(P&&!R.inline){var k=P;g&&(P=i,Y!==k.value&&(k.value=Y,k.dispatchEvent(new Event("input",{bubbles:!0})))),setTimeout(function(){Y!==k.value&&k.dispatchEvent(new Event("change",{bubbles:!0}))}),a.classList.remove("clr-open"),kt&&He(),k.dispatchEvent(new Event("close",{bubbles:!0})),R.focusInput&&k.focus({preventScroll:!0}),P=i}}function Gt(g){var k=O(g),D=T(k);Dn(D.s,D.v),ae(k,D),w.value=D.h,a.style.color="hsl("+D.h+", 100%, 50%)",$.style.left=D.h/360*100+"%",c.style.left=be.width*D.s/100+"px",c.style.top=be.height-be.height*D.v/100+"px",_.value=D.a*100,A.style.left=D.a*100+"%"}function Lt(g){var k=g.substring(0,3).toLowerCase();return k==="rgb"||k==="hsl"?k:"hex"}function ns(g){g=g!==i?g:u.value,P&&(P.value=g,P.dispatchEvent(new Event("input",{bubbles:!0}))),R.onChange&&R.onChange.call(t,g,P),e.dispatchEvent(new CustomEvent("coloris:pick",{detail:{color:g,currentEl:P}}))}function Si(g,k){var D={h:w.value*1,s:g/be.width*100,v:100-k/be.height*100,a:_.value/100},G=v(D);Dn(D.s,D.v),ae(G,D),ns()}function Dn(g,k){var D=R.a11y.marker;g=g.toFixed(1)*1,k=k.toFixed(1)*1,D=D.replace("{s}",g),D=D.replace("{v}",k),c.setAttribute("aria-label",D)}function Mt(g){return{pageX:g.changedTouches?g.changedTouches[0].pageX:g.pageX,pageY:g.changedTouches?g.changedTouches[0].pageY:g.pageY}}function F(g){var k=Mt(g),D=k.pageX-be.x,G=k.pageY-be.y;r&&(G+=r.scrollTop),W(D,G),g.preventDefault(),g.stopPropagation()}function te(g,k){var D=c.style.left.replace("px","")*1+g,G=c.style.top.replace("px","")*1+k;W(D,G)}function W(g,k){g=g<0?0:g>be.width?be.width:g,k=k<0?0:k>be.height?be.height:k,c.style.left=g+"px",c.style.top=k+"px",Si(g,k),c.focus()}function ae(g,k){g===void 0&&(g={}),k===void 0&&(k={});var D=R.format;for(var G in g)o[G]=g[G];for(var de in k)o[de]=k[de];var Oe=L(o),Ie=Oe.substring(0,7);switch(c.style.color=Ie,A.parentNode.style.color=Ie,A.style.color=Oe,d.style.color=Oe,l.style.display="none",l.offsetHeight,l.style.display="",A.nextElementSibling.style.display="none",A.nextElementSibling.offsetHeight,A.nextElementSibling.style.display="",D==="mixed"?D=o.a===1?"hex":"rgb":D==="auto"&&(D=re),D){case"hex":u.value=Oe;break;case"rgb":u.value=J(o);break;case"hsl":u.value=B(x(o));break}e.querySelector('.clr-format [value="'+D+'"]').checked=!0}function Ue(){var g=w.value*1,k=c.style.left.replace("px","")*1,D=c.style.top.replace("px","")*1;a.style.color="hsl("+g+", 100%, 50%)",$.style.left=g/360*100+"%",Si(k,D)}function m(){var g=_.value/100;A.style.left=g*100+"%",ae({a:g}),ns()}function v(g){var k=g.s/100,D=g.v/100,G=k*D,de=g.h/60,Oe=G*(1-s.abs(de%2-1)),Ie=D-G;G=G+Ie,Oe=Oe+Ie;var lt=s.floor(de)%6,xe=[G,Oe,Ie,Ie,Oe,G][lt],it=[Oe,G,G,Oe,Ie,Ie][lt],_s=[Ie,Ie,Oe,G,G,Oe][lt];return{r:s.round(xe*255),g:s.round(it*255),b:s.round(_s*255),a:g.a}}function x(g){var k=g.v/100,D=k*(1-g.s/100/2),G;return D>0&&D<1&&(G=s.round((k-D)/s.min(D,1-D)*100)),{h:g.h,s:G||0,l:s.round(D*100),a:g.a}}function T(g){var k=g.r/255,D=g.g/255,G=g.b/255,de=s.max(k,D,G),Oe=s.min(k,D,G),Ie=de-Oe,lt=de,xe=0,it=0;return Ie&&(de===k&&(xe=(D-G)/Ie),de===D&&(xe=2+(G-k)/Ie),de===G&&(xe=4+(k-D)/Ie),de&&(it=Ie/de)),xe=s.floor(xe*60),{h:xe<0?xe+360:xe,s:s.round(it*100),v:s.round(lt*100),a:g.a}}function O(g){var k=/^((rgba)|rgb)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,D,G;return n.fillStyle="#000",n.fillStyle=g,D=k.exec(n.fillStyle),D?(G={r:D[3]*1,g:D[4]*1,b:D[5]*1,a:D[6]*1},G.a=+G.a.toFixed(2)):(D=n.fillStyle.replace("#","").match(/.{2}/g).map(function(de){return parseInt(de,16)}),G={r:D[0],g:D[1],b:D[2],a:1}),G}function L(g){var k=g.r.toString(16),D=g.g.toString(16),G=g.b.toString(16),de="";if(g.r<16&&(k="0"+k),g.g<16&&(D="0"+D),g.b<16&&(G="0"+G),R.alpha&&(g.a<1||R.forceAlpha)){var Oe=g.a*255|0;de=Oe.toString(16),Oe<16&&(de="0"+de)}return"#"+k+D+G+de}function J(g){return!R.alpha||g.a===1&&!R.forceAlpha?"rgb("+g.r+", "+g.g+", "+g.b+")":"rgba("+g.r+", "+g.g+", "+g.b+", "+g.a+")"}function B(g){return!R.alpha||g.a===1&&!R.forceAlpha?"hsl("+g.h+", "+g.s+"%, "+g.l+"%)":"hsla("+g.h+", "+g.s+"%, "+g.l+"%, "+g.a+")"}function q(){e.getElementById("clr-picker")||(r=i,a=e.createElement("div"),a.setAttribute("id","clr-picker"),a.className="clr-picker",a.innerHTML='<input id="clr-color-value" name="clr-color-value" class="clr-color" type="text" value="" spellcheck="false" aria-label="'+R.a11y.input+'">'+('<div id="clr-color-area" class="clr-gradient" role="application" aria-label="'+R.a11y.instruction+'">')+'<div id="clr-color-marker" class="clr-marker" tabindex="0"></div></div><div class="clr-hue">'+('<input id="clr-hue-slider" name="clr-hue-slider" type="range" min="0" max="360" step="1" aria-label="'+R.a11y.hueSlider+'">')+'<div id="clr-hue-marker"></div></div><div class="clr-alpha">'+('<input id="clr-alpha-slider" name="clr-alpha-slider" type="range" min="0" max="100" step="1" aria-label="'+R.a11y.alphaSlider+'">')+'<div id="clr-alpha-marker"></div><span></span></div><div id="clr-format" class="clr-format"><fieldset class="clr-segmented">'+("<legend>"+R.a11y.format+"</legend>")+'<input id="clr-f1" type="radio" name="clr-format" value="hex"><label for="clr-f1">Hex</label><input id="clr-f2" type="radio" name="clr-format" value="rgb"><label for="clr-f2">RGB</label><input id="clr-f3" type="radio" name="clr-format" value="hsl"><label for="clr-f3">HSL</label><span></span></fieldset></div><div id="clr-swatches" class="clr-swatches"></div>'+('<button type="button" id="clr-clear" class="clr-clear" aria-label="'+R.a11y.clear+'">'+R.clearLabel+"</button>")+'<div id="clr-color-preview" class="clr-preview">'+('<button type="button" id="clr-close" class="clr-close" aria-label="'+R.a11y.close+'">'+R.closeLabel+"</button>")+"</div>"+('<span id="clr-open-label" hidden>'+R.a11y.open+"</span>")+('<span id="clr-swatch-label" hidden>'+R.a11y.swatch+"</span>"),e.body.appendChild(a),l=ee("clr-color-area"),c=ee("clr-color-marker"),f=ee("clr-clear"),y=ee("clr-close"),d=ee("clr-color-preview"),u=ee("clr-color-value"),w=ee("clr-hue-slider"),$=ee("clr-hue-marker"),_=ee("clr-alpha-slider"),A=ee("clr-alpha-marker"),Ge(R.el),ps(R.el),j(a,"mousedown",function(g){a.classList.remove("clr-keyboard-nav"),g.stopPropagation()}),j(l,"mousedown",function(g){j(e,"mousemove",F)}),j(l,"touchstart",function(g){e.addEventListener("touchmove",F,{passive:!1})}),j(c,"mousedown",function(g){j(e,"mousemove",F)}),j(c,"touchstart",function(g){e.addEventListener("touchmove",F,{passive:!1})}),j(u,"change",function(g){var k=u.value;if(P||R.inline){var D=k===""?k:Gt(k);ns(D)}}),j(f,"click",function(g){ns(""),is()}),j(y,"click",function(g){ns(),is()}),j(ee("clr-format"),"click",".clr-format input",function(g){re=g.target.value,ae(),ns()}),j(a,"click",".clr-swatches button",function(g){Gt(g.target.textContent),ns(),R.swatchesOnly&&is()}),j(e,"mouseup",function(g){e.removeEventListener("mousemove",F)}),j(e,"touchend",function(g){e.removeEventListener("touchmove",F)}),j(e,"mousedown",function(g){ge=!1,a.classList.remove("clr-keyboard-nav"),is()}),j(e,"keydown",function(g){var k=g.key,D=g.target,G=g.shiftKey,de=["Tab","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"];if(k==="Escape"?is(!0):de.includes(k)&&(ge=!0,a.classList.add("clr-keyboard-nav")),k==="Tab"&&D.matches(".clr-picker *")){var Oe=V(),Ie=Oe.shift(),lt=Oe.pop();G&&D===Ie?(lt.focus(),g.preventDefault()):!G&&D===lt&&(Ie.focus(),g.preventDefault())}}),j(e,"click",".clr-field button",function(g){kt&&He(),g.target.nextElementSibling.dispatchEvent(new Event("click",{bubbles:!0}))}),j(c,"keydown",function(g){var k={ArrowUp:[0,-1],ArrowDown:[0,1],ArrowLeft:[-1,0],ArrowRight:[1,0]};Object.keys(k).includes(g.key)&&(te.apply(void 0,k[g.key]),g.preventDefault())}),j(l,"click",F),j(w,"input",Ue),j(_,"input",m))}function V(){var g=Array.from(a.querySelectorAll("input, button")),k=g.filter(function(D){return!!D.offsetWidth});return k}function ee(g){return e.getElementById(g)}function j(g,k,D,G){var de=Element.prototype.matches||Element.prototype.msMatchesSelector;typeof D=="string"?g.addEventListener(k,function(Oe){de.call(Oe.target,D)&&G.call(Oe.target,Oe)}):(G=D,g.addEventListener(k,G))}function le(g,k){k=k!==i?k:[],e.readyState!=="loading"?g.apply(void 0,k):e.addEventListener("DOMContentLoaded",function(){g.apply(void 0,k)})}NodeList!==i&&NodeList.prototype&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach);function ye(g,k){P=k,Y=P.value,ss(k),re=Lt(g),Ve(),Gt(g),ns(),Y!==g&&P.dispatchEvent(new Event("change",{bubbles:!0}))}var De=function(){var g={init:q,set:Pt,wrap:ps,close:is,setInstance:fs,setColor:ye,removeInstance:_i,updatePosition:Ve};function k(de){le(function(){de&&(typeof de=="string"?Ge(de):Pt(de))})}var D=function(Oe){k[Oe]=function(){for(var Ie=arguments.length,lt=new Array(Ie),xe=0;xe<Ie;xe++)lt[xe]=arguments[xe];le(g[Oe],lt)}};for(var G in g)D(G);return le(function(){t.addEventListener("resize",function(de){k.updatePosition()}),t.addEventListener("scroll",function(de){k.updatePosition()})}),k}();return De.coloris=De,De}(window,document,Math)}(),gA=Fn.coloris,vA=Fn.init;Fn.set;Fn.wrap;var bA=Fn.close;Fn.setInstance;Fn.removeInstance;Fn.updatePosition;const yA=()=>{const t=Ca();Kh().setValueFor(document.body,t.getTheme.baseLayerValue),t.getTheme.darkModeEnabled&&document.documentElement.classList.add("dark");let e=bs.from({...t.getTheme.swatchColor});tc.setValueFor(document.body,e),ec.setValueFor(document.body,e)},Kh=()=>In;function xA(){const t=Ca();return E("fluent-select",{appearance:"accent",value:t.getTheme.darkModeEnabled?"DarkMode":"LightMode",onChange:e=>{t.setIsDarkMode(e.target.value==="DarkMode"),document.documentElement.classList[t.getTheme.darkModeEnabled?"add":"remove"]("dark"),Kh().setValueFor(document.body,e.target.value==="DarkMode"?qr.DarkMode:qr.LightMode)}},[E("fluent-option",{value:"LightMode"},[Ye("Light")]),E("fluent-option",{value:"DarkMode"},[Ye("Dark")])])}function wA(){const t=Ca(),e=({max:s,min:i})=>E("fluent-slider",{max:s,min:i,initialValue:t.getTheme.baseLayerValue*100,onChange:n=>{let o=parseInt(n.target.value)/100;Kh().setValueFor(document.body,o),t.setBaseLayerValue(o)}},null);return E(yt,null,[t.getTheme.darkModeEnabled?E(e,{min:0,max:45},null):E(e,{min:46,max:100},null)])}function $A(){const t=Ca();return vA(),gA({el:"#coloris",format:"rgb"}),bA(),E("fluent-button",{id:"coloris",appearance:"accent",onInput:e=>{const[s,i,n]=e.target.value.replace("rgb(","").replace(")","").split(",");t.setSwatchColor(parseInt(s),parseInt(i),parseInt(n));let o=bs.from({r:parseInt(s),g:parseInt(i),b:parseInt(n)});tc.setValueFor(document.body,o),ec.setValueFor(document.body,o)}},[Ye("Choose a different color")])}const kA={class:"p-4"},_A={ref:"chooseYourModeRef"},SA=C("h1",{slot:"heading"}," Choose Your Mode ",-1),CA={class:"flex flex-col items-start gap-4"},IA=C("h1",{slot:"heading"}," Enable Blur Effect ",-1),TA={class:"flex flex-col items-start gap-4"},FA=C("h1",{slot:"heading"}," Accent Color ",-1),DA={class:"flex flex-col items-start gap-4"},RA=ke({__name:"Personalization",setup(t){return(e,s)=>{const i=pe("Icon");return Q(),Se("div",kA,[C("fluent-accordion",null,[C("fluent-accordion-item",_A,[E(i,{slot:"start"},{default:z(()=>[Ye("dark_mode")]),_:1}),SA,C("div",CA,[E(ve(xA)),E(ve(wA))])],512),C("fluent-accordion-item",null,[E(i,{slot:"start"},{default:z(()=>[Ye("blur_on")]),_:1}),IA,C("div",TA,[E(mA)])]),C("fluent-accordion-item",null,[E(i,{slot:"start"},{default:z(()=>[Ye("palette")]),_:1}),FA,C("div",DA,[E(ve($A))])])])])}}}),EA={orientation:"vertical",class:"min-h-full"},OA=["id"],AA=C("fluent-tab-panel",{id:"accountPanel",class:"max-h-full h-full"},[C("ul",{class:"bg-white/75 dark:bg-black/75 w-full h-full overflow-auto rounded-layer"},[C("li",null,"1")])],-1),PA={id:"personalizationPanel",class:"max-h-full h-full overflow-auto"},LA={class:"bg-white/75 dark:bg-black/75 w-full h-full overflow-auto rounded-layer"},MA=C("fluent-tab-panel",{id:"gamingPanel",class:"max-h-full h-full overflow-auto"},[C("ul",{class:"bg-white/75 dark:bg-black/75 w-full h-full overflow-auto rounded-layer"},[C("li",null,"1")])],-1),VA=C("fluent-tab-panel",{id:"windows-updatePanel",class:"max-h-full h-full overflow-auto"},[C("ul",{class:"bg-white/75 dark:bg-black/75 w-full h-full overflow-auto rounded-layer"},[C("li",null,"1")])],-1),HA=ke({__name:"Settings",setup(t){const e=(i,n)=>({label:i,icon:n}),s=[e("Account","person"),e("Personalization","brush"),e("Gaming","sports_esports"),e("Windows Update","update")];return(i,n)=>{const o=pe("Icon"),r=pe("PageLayout");return Q(),et(r,null,{default:z(()=>[C("fluent-tabs",EA,[(Q(),Se(yt,null,co(s,(a,l)=>C("fluent-tab",{key:l,id:a.label.toLowerCase().replace(" ","-"),class:"gap-2 w-full"},[E(o,null,{default:z(()=>[Ye(wt(a.icon),1)]),_:2},1024),Ye(" "+wt(a.label),1)],8,OA)),64)),AA,C("fluent-tab-panel",PA,[C("ul",LA,[C("li",null,[E(RA)])])]),MA,VA])]),_:1})}}});function Lo(t,e,...s){if(t in e){let n=e[t];return typeof n=="function"?n(...s):n}let i=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(n=>`"${n}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,Lo),i}var wu=(t=>(t[t.None=0]="None",t[t.RenderStrategy=1]="RenderStrategy",t[t.Static=2]="Static",t))(wu||{}),NA=(t=>(t[t.Unmount=0]="Unmount",t[t.Hidden=1]="Hidden",t))(NA||{});function cr({visible:t=!0,features:e=0,ourProps:s,theirProps:i,...n}){var o;let r=Ey(i,s),a=Object.assign(n,{props:r});if(t||e&2&&r.static)return Md(a);if(e&1){let l=(o=r.unmount)==null||o?0:1;return Lo(l,{0(){return null},1(){return Md({...n,props:{...r,hidden:!0,style:{display:"none"}}})}})}return Md(a)}function Md({props:t,attrs:e,slots:s,slot:i,name:n}){var o,r;let{as:a,...l}=Oy(t,["unmount","static"]),c=(o=s.default)==null?void 0:o.call(s,i),d={};if(i){let u=!1,f=[];for(let[y,w]of Object.entries(i))typeof w=="boolean"&&(u=!0),w===!0&&f.push(y);u&&(d["data-headlessui-state"]=f.join(" "))}if(a==="template"){if(c=Ry(c??[]),Object.keys(l).length>0||Object.keys(e).length>0){let[u,...f]=c??[];if(!zA(u)||f.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${n} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(l).concat(Object.keys(e)).map($=>$.trim()).filter(($,_,A)=>A.indexOf($)===_).sort(($,_)=>$.localeCompare(_)).map($=>`  - ${$}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map($=>`  - ${$}`).join(`
`)].join(`
`));let y=Ey((r=u.props)!=null?r:{},l),w=Kn(u,y);for(let $ in y)$.startsWith("on")&&(w.props||(w.props={}),w.props[$]=y[$]);return w}return Array.isArray(c)&&c.length===1?c[0]:c}return Hi(a,Object.assign({},l,d),{default:()=>c})}function Ry(t){return t.flatMap(e=>e.type===yt?Ry(e.children):[e])}function Ey(...t){if(t.length===0)return{};if(t.length===1)return t[0];let e={},s={};for(let i of t)for(let n in i)n.startsWith("on")&&typeof i[n]=="function"?(s[n]!=null||(s[n]=[]),s[n].push(i[n])):e[n]=i[n];if(e.disabled||e["aria-disabled"])return Object.assign(e,Object.fromEntries(Object.keys(s).map(i=>[i,void 0])));for(let i in s)Object.assign(e,{[i](n,...o){let r=s[i];for(let a of r){if(n instanceof Event&&n.defaultPrevented)return;a(n,...o)}}});return e}function Oy(t,e=[]){let s=Object.assign({},t);for(let i of e)i in s&&delete s[i];return s}function zA(t){return t==null?!1:typeof t.type=="string"||typeof t.type=="object"||typeof t.type=="function"}let BA=0;function jA(){return++BA}function Ay(){return jA()}var Xs=(t=>(t.Space=" ",t.Enter="Enter",t.Escape="Escape",t.Backspace="Backspace",t.Delete="Delete",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.Home="Home",t.End="End",t.PageUp="PageUp",t.PageDown="PageDown",t.Tab="Tab",t))(Xs||{});function Dt(t){var e;return t==null||t.value==null?null:(e=t.value.$el)!=null?e:t.value}function vm(t,e){if(t)return t;let s=e??"button";if(typeof s=="string"&&s.toLowerCase()==="button")return"button"}function UA(t,e){let s=dt(vm(t.value.type,t.value.as));return Yt(()=>{s.value=vm(t.value.type,t.value.as)}),Xv(()=>{var i;s.value||Dt(e)&&Dt(e)instanceof HTMLButtonElement&&!((i=Dt(e))!=null&&i.hasAttribute("type"))&&(s.value="button")}),s}var YA=Object.defineProperty,WA=(t,e,s)=>e in t?YA(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,bm=(t,e,s)=>(WA(t,typeof e!="symbol"?e+"":e,s),s);class qA{constructor(){bm(this,"current",this.detect()),bm(this,"currentId",0)}set(e){this.current!==e&&(this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let GA=new qA;function ZA(t){if(GA.isServer)return null;if(t instanceof Node)return t.ownerDocument;if(t!=null&&t.hasOwnProperty("value")){let e=Dt(t);if(e)return e.ownerDocument}return document}let XA=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");var Qs=(t=>(t[t.First=1]="First",t[t.Previous=2]="Previous",t[t.Next=4]="Next",t[t.Last=8]="Last",t[t.WrapAround=16]="WrapAround",t[t.NoScroll=32]="NoScroll",t))(Qs||{}),kr=(t=>(t[t.Error=0]="Error",t[t.Overflow=1]="Overflow",t[t.Success=2]="Success",t[t.Underflow=3]="Underflow",t))(kr||{}),QA=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(QA||{});function JA(t=document.body){return t==null?[]:Array.from(t.querySelectorAll(XA)).sort((e,s)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(s.tabIndex||Number.MAX_SAFE_INTEGER)))}var KA=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(KA||{}),eP=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(eP||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",t=>{t.metaKey||t.altKey||t.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",t=>{t.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:t.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));let tP=["textarea","input"].join(",");function sP(t){var e,s;return(s=(e=t==null?void 0:t.matches)==null?void 0:e.call(t,tP))!=null?s:!1}function wo(t,e=s=>s){return t.slice().sort((s,i)=>{let n=e(s),o=e(i);if(n===null||o===null)return 0;let r=n.compareDocumentPosition(o);return r&Node.DOCUMENT_POSITION_FOLLOWING?-1:r&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function vo(t,e,{sorted:s=!0,relativeTo:i=null,skipElements:n=[]}={}){var o;let r=(o=Array.isArray(t)?t.length>0?t[0].ownerDocument:document:t==null?void 0:t.ownerDocument)!=null?o:document,a=Array.isArray(t)?s?wo(t):t:JA(t);n.length>0&&a.length>1&&(a=a.filter(w=>!n.includes(w))),i=i??r.activeElement;let l=(()=>{if(e&5)return 1;if(e&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(e&1)return 0;if(e&2)return Math.max(0,a.indexOf(i))-1;if(e&4)return Math.max(0,a.indexOf(i))+1;if(e&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=e&32?{preventScroll:!0}:{},u=0,f=a.length,y;do{if(u>=f||u+f<=0)return 0;let w=c+u;if(e&16)w=(w+f)%f;else{if(w<0)return 3;if(w>=f)return 1}y=a[w],y==null||y.focus(d),u+=l}while(y!==r.activeElement);return e&6&&sP(y)&&y.select(),2}var Py=(t=>(t[t.None=1]="None",t[t.Focusable=2]="Focusable",t[t.Hidden=4]="Hidden",t))(Py||{});let Ly=ke({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(t,{slots:e,attrs:s}){return()=>{let{features:i,...n}=t,o={"aria-hidden":(i&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(i&4)===4&&(i&2)!==2&&{display:"none"}}};return cr({ourProps:o,theirProps:n,slot:{},attrs:s,slots:e,name:"Hidden"})}}});function iP(t){typeof queueMicrotask=="function"?queueMicrotask(t):Promise.resolve().then(t).catch(e=>setTimeout(()=>{throw e}))}let nP=ke({props:{onFocus:{type:Function,required:!0}},setup(t){let e=dt(!0);return()=>e.value?Hi(Ly,{as:"button",type:"button",features:Py.Focusable,onFocus(s){s.preventDefault();let i,n=50;function o(){var r;if(n--<=0){i&&cancelAnimationFrame(i);return}if((r=t.onFocus)!=null&&r.call(t)){e.value=!1,cancelAnimationFrame(i);return}i=requestAnimationFrame(o)}i=requestAnimationFrame(o)}}):null}});var oP=(t=>(t[t.Forwards=0]="Forwards",t[t.Backwards=1]="Backwards",t))(oP||{}),rP=(t=>(t[t.Less=-1]="Less",t[t.Equal=0]="Equal",t[t.Greater=1]="Greater",t))(rP||{});let My=Symbol("TabsContext");function Ia(t){let e=Ts(My,null);if(e===null){let s=new Error(`<${t} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,Ia),s}return e}let ef=Symbol("TabsSSRContext"),aP=ke({name:"TabGroup",emits:{change:t=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(t,{slots:e,attrs:s,emit:i}){var n;let o=dt((n=t.selectedIndex)!=null?n:t.defaultIndex),r=dt([]),a=dt([]),l=Ke(()=>t.selectedIndex!==null),c=Ke(()=>l.value?t.selectedIndex:o.value);function d($){var _;let A=wo(u.tabs.value,Dt),P=wo(u.panels.value,Dt),re=A.filter(Y=>{var ge;return!((ge=Dt(Y))!=null&&ge.hasAttribute("disabled"))});if($<0||$>A.length-1){let Y=Lo(o.value===null?0:Math.sign($-o.value),{[-1]:()=>1,0:()=>Lo(Math.sign($),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});o.value=Lo(Y,{0:()=>A.indexOf(re[0]),1:()=>A.indexOf(re[re.length-1])}),u.tabs.value=A,u.panels.value=P}else{let Y=A.slice(0,$),ge=[...A.slice($),...Y].find(R=>re.includes(R));if(!ge)return;let be=(_=A.indexOf(ge))!=null?_:u.selectedIndex.value;be===-1&&(be=u.selectedIndex.value),o.value=be,u.tabs.value=A,u.panels.value=P}}let u={selectedIndex:Ke(()=>{var $,_;return(_=($=o.value)!=null?$:t.defaultIndex)!=null?_:null}),orientation:Ke(()=>t.vertical?"vertical":"horizontal"),activation:Ke(()=>t.manual?"manual":"auto"),tabs:r,panels:a,setSelectedIndex($){c.value!==$&&i("change",$),l.value||d($)},registerTab($){var _;if(r.value.includes($))return;let A=r.value[o.value];r.value.push($),r.value=wo(r.value,Dt);let P=(_=r.value.indexOf(A))!=null?_:o.value;P!==-1&&(o.value=P)},unregisterTab($){let _=r.value.indexOf($);_!==-1&&r.value.splice(_,1)},registerPanel($){a.value.includes($)||(a.value.push($),a.value=wo(a.value,Dt))},unregisterPanel($){let _=a.value.indexOf($);_!==-1&&a.value.splice(_,1)}};Eo(My,u);let f=dt({tabs:[],panels:[]}),y=dt(!1);Yt(()=>{y.value=!0}),Eo(ef,Ke(()=>y.value?null:f.value));let w=Ke(()=>t.selectedIndex);return Yt(()=>{Ai([w],()=>{var $;return d(($=t.selectedIndex)!=null?$:t.defaultIndex)},{immediate:!0})}),Xv(()=>{if(!l.value||c.value==null||u.tabs.value.length<=0)return;let $=wo(u.tabs.value,Dt);$.some((_,A)=>Dt(u.tabs.value[A])!==Dt(_))&&u.setSelectedIndex($.findIndex(_=>Dt(_)===Dt(u.tabs.value[c.value])))}),()=>{let $={selectedIndex:o.value};return Hi(yt,[r.value.length<=0&&Hi(nP,{onFocus:()=>{for(let _ of r.value){let A=Dt(_);if((A==null?void 0:A.tabIndex)===0)return A.focus(),!0}return!1}}),cr({theirProps:{...s,...Oy(t,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:$,slots:e,attrs:s,name:"TabGroup"})])}}}),lP=ke({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(t,{attrs:e,slots:s}){let i=Ia("TabList");return()=>{let n={selectedIndex:i.selectedIndex.value},o={role:"tablist","aria-orientation":i.orientation.value};return cr({ourProps:o,theirProps:t,slot:n,attrs:e,slots:s,name:"TabList"})}}}),ym=ke({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-tabs-tab-${Ay()}`}},setup(t,{attrs:e,slots:s,expose:i}){let n=Ia("Tab"),o=dt(null);i({el:o,$el:o}),Yt(()=>n.registerTab(o)),Ps(()=>n.unregisterTab(o));let r=Ts(ef),a=Ke(()=>{if(r.value){let _=r.value.tabs.indexOf(t.id);return _===-1?r.value.tabs.push(t.id)-1:_}return-1}),l=Ke(()=>{let _=n.tabs.value.indexOf(o);return _===-1?a.value:_}),c=Ke(()=>l.value===n.selectedIndex.value);function d(_){var A;let P=_();if(P===kr.Success&&n.activation.value==="auto"){let re=(A=ZA(o))==null?void 0:A.activeElement,Y=n.tabs.value.findIndex(ge=>Dt(ge)===re);Y!==-1&&n.setSelectedIndex(Y)}return P}function u(_){let A=n.tabs.value.map(P=>Dt(P)).filter(Boolean);if(_.key===Xs.Space||_.key===Xs.Enter){_.preventDefault(),_.stopPropagation(),n.setSelectedIndex(l.value);return}switch(_.key){case Xs.Home:case Xs.PageUp:return _.preventDefault(),_.stopPropagation(),d(()=>vo(A,Qs.First));case Xs.End:case Xs.PageDown:return _.preventDefault(),_.stopPropagation(),d(()=>vo(A,Qs.Last))}if(d(()=>Lo(n.orientation.value,{vertical(){return _.key===Xs.ArrowUp?vo(A,Qs.Previous|Qs.WrapAround):_.key===Xs.ArrowDown?vo(A,Qs.Next|Qs.WrapAround):kr.Error},horizontal(){return _.key===Xs.ArrowLeft?vo(A,Qs.Previous|Qs.WrapAround):_.key===Xs.ArrowRight?vo(A,Qs.Next|Qs.WrapAround):kr.Error}}))===kr.Success)return _.preventDefault()}let f=dt(!1);function y(){var _;f.value||(f.value=!0,!t.disabled&&((_=Dt(o))==null||_.focus(),n.setSelectedIndex(l.value),iP(()=>{f.value=!1})))}function w(_){_.preventDefault()}let $=UA(Ke(()=>({as:t.as,type:e.type})),o);return()=>{var _;let A={selected:c.value},{id:P,...re}=t,Y={ref:o,onKeydown:u,onMousedown:w,onClick:y,id:P,role:"tab",type:$.value,"aria-controls":(_=Dt(n.panels.value[l.value]))==null?void 0:_.id,"aria-selected":c.value,tabIndex:c.value?0:-1,disabled:t.disabled?!0:void 0};return cr({ourProps:Y,theirProps:re,slot:A,attrs:e,slots:s,name:"Tab"})}}}),cP=ke({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(t,{slots:e,attrs:s}){let i=Ia("TabPanels");return()=>{let n={selectedIndex:i.selectedIndex.value};return cr({theirProps:t,ourProps:{},slot:n,attrs:s,slots:e,name:"TabPanels"})}}}),xm=ke({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-tabs-panel-${Ay()}`},tabIndex:{type:Number,default:0}},setup(t,{attrs:e,slots:s,expose:i}){let n=Ia("TabPanel"),o=dt(null);i({el:o,$el:o}),Yt(()=>n.registerPanel(o)),Ps(()=>n.unregisterPanel(o));let r=Ts(ef),a=Ke(()=>{if(r.value){let d=r.value.panels.indexOf(t.id);return d===-1?r.value.panels.push(t.id)-1:d}return-1}),l=Ke(()=>{let d=n.panels.value.indexOf(o);return d===-1?a.value:d}),c=Ke(()=>l.value===n.selectedIndex.value);return()=>{var d;let u={selected:c.value},{id:f,tabIndex:y,...w}=t,$={ref:o,id:f,role:"tabpanel","aria-labelledby":(d=Dt(n.tabs.value[l.value]))==null?void 0:d.id,tabIndex:c.value?y:-1};return!c.value&&t.unmount&&!t.static?Hi(Ly,{as:"span",...$}):cr({ourProps:$,theirProps:w,slot:u,attrs:e,slots:s,features:wu.Static|wu.RenderStrategy,visible:c.value,name:"TabPanel"})}}});var dP=0;function uP(){return dP++}function hP(t,e={maximizable:!0,minimizable:!0,fullscreen:!1},s={runningInBackground:!1,processId:uP()}){var i,n,o,r;return{window:{info:{title:t.info.title,icon:t.info.icon,activeZIndex:s.processId},position:{x:((i=t.position)==null?void 0:i.x)||0,y:((n=t.position)==null?void 0:n.y)||0},size:{width:((o=t.size)==null?void 0:o.width)||400,height:((r=t.size)==null?void 0:r.height)||300}},accessibility:{maximizable:e.maximizable,minimizable:e.minimizable,focus:!1,active:!1,maximize:!1,minimize:!1,fullscreen:e.fullscreen},process:{runningInBackground:s.runningInBackground,processId:s.processId}}}const fP={class:"flex-none select-none w-full h-8 bg-white/75 dark:bg-black/75 backdrop-blur-lg"},pP={class:"w-full h-full flex items-center justify-between p-1"},mP={class:"flex-none h-full aspect-square scale-75 grid place-content-center"},gP={class:"w-full whitespace-nowrap overflow-clip text-black dark:text-white rm-1"},vP={class:"flex-none w-fit h-full flex items-center justify-end"},bP={class:"relative w-full h-full backdrop-blur-lg bg-white/75 dark:bg-black/75 overflow-auto"},yP=ke({__name:"WindowTemplate",props:{getProcessStateInstance:{type:Function}},emits:["close","maximize","minimize","focus","unfocus","active","inactive","fullscreen","unFullscreen","gragwindow","changeWindowSize"],setup(t,{emit:e}){const s=t,i=ho(),n=()=>{i.cleanActive(),i.cleanFocus(),e("focus"),e("active"),i.setTopZIndex(i.getProcessByProcessId(s.getProcessStateInstance().process.processId))},o=Ke(()=>{const c=s.getProcessStateInstance();return[c.accessibility.active?"shadow-lg":"",c.accessibility.minimize?"hidden-window ":"open-window",c.accessibility.fullscreen?"":"resize"]}),r=Ke(()=>{const c=s.getProcessStateInstance();return{left:(c.accessibility.maximize?"0":c.window.position.x)+"px",top:(c.accessibility.maximize?"0":c.window.position.y)+"px",width:c.accessibility.maximize?"100%":c.window.size.width+"px",height:c.accessibility.maximize?"100%":c.window.size.height+"px","z-index":c.accessibility.fullscreen?"999":c.window.info.activeZIndex+10,"padding-bottom":c.accessibility.maximize?c.accessibility.fullscreen?"0":"3rem":"0"}});var a=[];const l=c=>{if(s.getProcessStateInstance().accessibility.active){if(a.length===0){a[0]=c.code;return}else a.length===1?a[1]=c.code:c.code!==a[1]&&(a.shift(),a[1]=c.code);a=Array.from(new Set(a)),a.length===2&&["ShiftLeft","ShiftRight"].includes(a[0])&&(a[1]==="KeyK"?s.getProcessStateInstance().accessibility.fullscreen?e("unFullscreen"):e("fullscreen"):a[1]==="ArrowUp"?e("maximize"):a[1]==="ArrowDown"?e("minimize"):a[1]==="F4"&&e("close"),a=[])}};return Yt(()=>{n(),document.addEventListener("keyup",l)}),Ps(()=>{document.removeEventListener("keyup",l)}),(c,d)=>{const u=pe("Icon"),f=pe("IconButton"),y=pe("FlexLayout");return Q(),Se("div",{ref:"windowRef",onMousedown:n,onMouseover:d[4]||(d[4]=w=>e("focus")),onMouseout:d[5]||(d[5]=w=>e("unfocus")),class:Ut(["select-none fixed overflow-hidden transition-all active:transition-none",o.value]),style:xn(r.value)},[E(y,{class:"rounded-layer w-full h-full flex-col overflow-clip border"},{default:z(()=>[or(C("header",fP,[C("div",pP,[C("div",{onMousedown:d[0]||(d[0]=w=>e("gragwindow",w)),class:"h-full flex items-center justify-start w-full text-ellipsis overflow-clip"},[C("div",mP,[E(u,null,{default:z(()=>[Ye(wt(s.getProcessStateInstance().window.info.icon),1)]),_:1})]),C("h1",gP,wt(s.getProcessStateInstance().window.info.title),1)],32),C("nav",vP,[s.getProcessStateInstance().accessibility.minimizable?(Q(),et(f,{key:0,onClick:d[1]||(d[1]=w=>e("minimize")),"has-hover":"","has-active":""},{default:z(()=>[E(u,{class:"scale-75"},{default:z(()=>[Ye("minimize")]),_:1})]),_:1})):ru("",!0),s.getProcessStateInstance().accessibility.maximizable?(Q(),et(f,{key:1,onClick:d[2]||(d[2]=w=>e("maximize")),"has-hover":"","has-active":""},{default:z(()=>[E(u,{class:"scale-75"},{default:z(()=>[Ye("check_box_outline_blank")]),_:1})]),_:1})):ru("",!0),E(f,{onClick:d[3]||(d[3]=w=>e("close")),"has-hover":"","has-active":""},{default:z(()=>[E(u,{class:"scale-75"},{default:z(()=>[Ye("close")]),_:1})]),_:1})])])],512),[[rr,!s.getProcessStateInstance().accessibility.fullscreen]]),C("main",bP,[xs(c.$slots,"default")])]),_:3})],38)}}}),xP=()=>document.getElementById("window-workspace").appendChild(document.createElement("div")),wP=t=>{const e=xP(),s=Pc(t);return s.use(Ab),{mount:()=>{s.mount(e)},unmount:()=>{s&&(s.unmount(),e.remove())},instance:s}};function $P(t,e,s){const i=wP(Hi(yP,{},{default:()=>Hi(s)}));return i.instance._component.props={...e,getProcessStateInstance:t},{...i,getProcessStateInstance:t}}const ho=Hc("process_store",{state:()=>({processes:[]}),getters:{getAllProcesses:t=>t.processes,getAllProcessByRunningInBackground:t=>t.processes.filter(e=>e.getProcessStateInstance().process.runningInBackground),getAllProcessByMinimize:t=>t.processes.filter(e=>e.getProcessStateInstance().accessibility.minimize),getProcessByProcessId:t=>e=>t.processes.filter(s=>e===s.getProcessStateInstance().process.processId)[0]},actions:{createNewProcess({title:t,icon:e="bug_report"},s){const i=dt(hP({info:{title:t,icon:e}})),n=()=>{const r=o.instance._container.children.item(0);r.style.width.includes("%")||r.style.height.includes("%")||(i.value.window.size.width=parseInt(r.style.width),i.value.window.size.height=parseInt(r.style.height))},o=$P(()=>i.value,{onClose:async()=>{await(async()=>new Promise(a=>{o.instance._container.children.item(0).classList.contains("open-window")&&o.instance._container.children.item(0).classList.remove("open-window"),o.instance._container.children.item(0).classList.add("hidden-window"),setTimeout(()=>{a()},150)}))(),this.removeProcessFromProcessesByProcessId(i.value.process.processId),o.unmount()},onMaximize:()=>{i.value.accessibility.maximize=!i.value.accessibility.maximize},onChangeWindowSize:()=>n(),onMinimize:()=>{n(),i.value.accessibility.minimize=!0},onFocus:()=>{i.value.accessibility.focus=!0},onUnfocus:()=>{n(),i.value.accessibility.focus=!1},onActive:()=>{i.value.accessibility.active=!0},onInactive:()=>{i.value.accessibility.active=!1},onFullscreen:()=>{i.value.accessibility.maximize=!0,i.value.accessibility.fullscreen=!0},onUnFullscreen:()=>{i.value.accessibility.maximize=!1,i.value.accessibility.fullscreen=!1},onGragwindow:r=>{if(i.value.accessibility.maximize)return!1;const a=o.instance._container.children.item(0),l={x:r.clientX-a.offsetLeft,y:r.clientY-a.offsetTop};return document.onmousemove=c=>{const d={x:0,y:0};d.x=c.clientX-l.x,d.y=c.clientY-l.y,i.value.window.position.x=d.x,i.value.window.position.y=d.y},document.onmouseup=()=>{document.onmousemove=null,document.onmouseup=null},!1}},s);return this.processes.push(o),o},killAllProcesses(){this.processes.map(t=>t.instance.unmount()),this.processes=[]},cleanFocus(){this.processes=this.processes.map(t=>(t.getProcessStateInstance().accessibility.focus=!1,t))},cleanActive(){this.processes=this.processes.map(t=>(t.getProcessStateInstance().accessibility.active=!1,t))},swapZIndex(t,e){if(t===e||this.processes.length<=1)return;const s={x:this.processes.filter(i=>i.getProcessStateInstance().window.info.activeZIndex===t)[0],y:this.processes.filter(i=>i.getProcessStateInstance().window.info.activeZIndex===e)[0]};s.x.getProcessStateInstance().window.info.activeZIndex=e,s.y.getProcessStateInstance().window.info.activeZIndex=t},setTopZIndex(t){if(this.processes.length<=1)return;const s=Object.assign([],this.processes).sort((r,a)=>a.getProcessStateInstance().window.info.activeZIndex-r.getProcessStateInstance().window.info.activeZIndex),i=s.filter(r=>r===t)[0],n=s[0],o=i.getProcessStateInstance().window.info.activeZIndex;i.getProcessStateInstance().window.info.activeZIndex=n.getProcessStateInstance().window.info.activeZIndex,n.getProcessStateInstance().window.info.activeZIndex=o},killProcessByProcessId(t){if(this.processes.length===0)return;this.processes.filter(s=>t===s.getProcessStateInstance().process.processId)[0].instance._component.props.onClose()},setRunningInBackground(t,e){t.getProcessStateInstance().process.runningInBackground=e},setMinimize(t,e){t.getProcessStateInstance().accessibility.minimize=e},setAllProcessMinimize(){this.processes.map(t=>t.getProcessStateInstance().accessibility.minimize=!0)},removeProcessFromProcessesByProcessId(t){if(this.processes.length===0)return;const e=this.processes.filter(s=>t===s.getProcessStateInstance().process.processId)[0];this.processes.splice(this.processes.indexOf(e),1)}}}),kP=ke({__name:"KillProcessButton",props:{currentProcess:{}},setup(t){const e=t,s=ho();return(i,n)=>(Q(),Se("fluent-button",{onClick:n[0]||(n[0]=()=>{e.currentProcess!==null&&ve(s).killProcessByProcessId(e.currentProcess.getProcessStateInstance().process.processId)}),appearance:"neutral"},"End Process"))}}),_P=["onClick"],wm=ke({__name:"ProcessList",props:{currentProcess:{}},emits:["setCurrentProcess"],setup(t,{emit:e}){const s=t,i=ho();return(n,o)=>(Q(!0),Se(yt,null,co(ve(i).getAllProcesses,r=>(Q(),Se("li",{key:r.getProcessStateInstance().process.processId,onClick:a=>e("setCurrentProcess",r),class:Ut(["transition-all active:bg-white px-4 py-2 rounded-layer flex gap-2 overflow-auto",[r===s.currentProcess?"bg-blue-500/25 hover:bg-blue-500/50":"hover:bg-white/75"]])},[xs(n.$slots,"default",{e:r})],10,_P))),128))}}),SP=t=>(Tc("data-v-a3814684"),t=t(),Fc(),t),CP=SP(()=>C("fluent-divider",{class:"w-[1px] h-6 bg-black/10"},null,-1)),IP=ke({__name:"Manager",setup(t){const e=dt(null),s=i=>{e.value=i};return(i,n)=>{const o=pe("FlexLayout"),r=pe("PageLayout");return Q(),et(r,null,{default:z(()=>[E(o,{class:"flex-col gap-1 h-full"},{default:z(()=>[E(o,{class:"justify-end items-center bg-white/50 w-full p-2 rounded-layer"},{default:z(()=>[E(kP,{"current-process":e.value},null,8,["current-process"])]),_:1}),E(ve(aP),{as:"div",class:"flex w-full h-full gap-1"},{default:z(()=>[E(ve(lP),{as:"fluent-listbox",class:"gap-1 transition-all"},{default:z(()=>[E(ve(ym),{as:"fluent-option",value:"processes",selected:""},{default:z(()=>[Ye("Processes")]),_:1}),E(ve(ym),{as:"fluent-option",value:"details"},{default:z(()=>[Ye("Details")]),_:1})]),_:1}),E(ve(cP),{as:"div",class:"bg-white/75 rounded-layer w-full h-full"},{default:z(()=>[E(ve(xm),{as:"ul",class:"p-2 h-full"},{default:z(()=>[E(wm,{onSetCurrentProcess:s,"current-process":e.value},{default:z(({e:a})=>[C("h1",null,wt(a.getProcessStateInstance().window.info.title),1)]),_:1},8,["current-process"])]),_:1}),E(ve(xm),{as:"ul",class:"p-2 h-full"},{default:z(()=>[E(wm,{onSetCurrentProcess:s,"current-process":e.value},{default:z(({e:a})=>[C("h1",null,wt(a.getProcessStateInstance().window.info.title),1),CP,C("h1",null,wt(a.getProcessStateInstance().process.processId),1)]),_:1},8,["current-process"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),TP=qt(IP,[["__scopeId","data-v-a3814684"]]),FP={},DP=C("div",{class:"relative overflow-clip p-2 h-full"},[C("header",null,[C("md-text",{type:"title-large"},"Notepad Beta")]),C("div",{class:"w-full h-full rounded-layer overflow-clip"},[C("fluent-text-area",{autofocus:"",placeholder:"Notepad beta, type here.",resize:"vertical",appearance:"outline",class:"w-full h-full"})])],-1);function RP(t,e){const s=pe("PageLayout");return Q(),et(s,null,{default:z(()=>[DP]),_:1})}const EP=qt(FP,[["render",RP]]),OP=ke({__name:"Camera",setup(t){const e=dt(),s=dt(),i=()=>{let n=document.createElement("canvas");n.getContext("2d").drawImage(e.value,0,0,n.width,n.height),n.style.width="8rem",n.style.aspectRatio="1 / 1",s.value.appendChild(n)};return Yt(()=>{navigator&&navigator.mediaDevices?navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"user",width:300,height:300}}).then(n=>{e.value.srcObject=n,e.value.onloadedmetadata=()=>e.value.play()}).catch(()=>{console.log("Unknown error.")}):console.log("camera API is not supported by your browser")}),Rc(()=>{e.value.onloadedmetadata=null}),Ps(()=>{}),(n,o)=>{const r=pe("FlexLayout"),a=pe("PageLayout");return Q(),et(a,null,{default:z(()=>[E(r,{class:"flex-col h-full w-full gap-2 items-center justify-center"},{default:z(()=>[C("video",{ref_key:"cameraVideoRef",ref:e,class:"rounded-container h-full aspect-square"},null,512),C("fluent-button",{type:"button",appearance:"accent",onClick:i},"Take Photo")]),_:1}),E(r,{class:"gap-2 items-center flex-row flex-wrap"},{default:z(()=>[C("div",{ref_key:"cameraResultListRef",ref:s,class:"flex-none"},null,512)]),_:1})]),_:1})}}}),Ka=(t,e,s,i)=>({label:t,icon:e,slot:s,title:i}),AP=[Ka("Settings","settings",HA,"Settings Demo"),Ka("Task Manager","man",TP,"Task Manager Demo"),Ka("NotePad","note",EP,"Notepad Demo"),Ka("Camera","camera",OP,"Camera Demo")];function tf(){return AP}function sf(t,e,s="bug_report"){ho().createNewProcess({title:e,icon:s},t).mount()}const PP={class:"text-rm-1 select-none mt-2 overflow-clip text-ellipsis whitespace-nowrap text-center"},LP=ke({__name:"PinnedApps",emits:["closeStartsMenu"],setup(t,{emit:e}){return(s,i)=>{const n=pe("Icon"),o=pe("IconButton"),r=pe("GridLayout");return Q(),et(r,{class:"relative gap-2 grid-cols-4 md:grid-cols-6 grid-rows-auto overflow-y-auto h-40 items-start"},{default:z(()=>[(Q(!0),Se(yt,null,co(ve(tf)(),a=>(Q(),et(o,{"has-hover":"","has-active":"",onClick:()=>{e("closeStartsMenu"),ve(sf)(a.slot,a.title,a.icon)},key:a.slot,class:"h-16 w-24"},{default:z(()=>[E(n,null,{default:z(()=>[Ye(wt(a.icon),1)]),_:2},1024),C("p",PP,wt(a.label),1)]),_:2},1032,["onClick"]))),128))]),_:1})}}}),MP=["onClick"],VP=C("div",{class:"rounded-full w-8 h-8 bg-white/75"},null,-1),HP={class:"max-w-[12rem] overflow-clip text-ellipsis"},NP=C("fluent-menu-item",null,"Lock",-1),zP=["onClick"],BP=ke({__name:"SimpleUserProfile",setup(t){const e=ui(),s=Jc(),i=()=>{s.setIsLogout(!0),e.setIsLocked(!0)};return(n,o)=>{const r=pe("ExpandLayout");return Q(),et(r,null,{actions:z(({isExpanded:a,setIsExpanded:l})=>[C("div",{onClick:c=>l(!a),class:"inline-flex items-center gap-2 px-4 py-2 rounded-control hover:bg-white/75 dark:hover:bg-black/75"},[VP,C("span",HP,wt(ve(s).getUserAccountState.name),1)],8,MP)]),"expanded-content":z(({isExpanded:a,setIsExpanded:l})=>[C("div",{class:Ut(["relative z-0",[a?"opacity-100":"opacity-0 pointer-events-none"]])},[C("fluent-menu",{class:"absolute bottom-10 left-0 w-32 z-0"},[C("fluent-menu-item",{onClick:i},"Sign-out"),NP]),or(C("div",{onClick:c=>l(!1),class:"fixed full-screen bottom-0 right-0 -z-[1]"},null,8,zP),[[rr,a]])],2)]),_:1})}}}),jP={class:"absolute bottom-10 right-0 w-32 z-0"},UP=C("fluent-menu-item",null,"Sleep",-1),YP=C("fluent-menu-item",null,"Restart",-1),WP=["onClick"],qP=ke({__name:"ShutdownMenu",setup(t){const e=ui();return(s,i)=>{const n=pe("Icon"),o=pe("IconButton"),r=pe("ExpandLayout");return Q(),et(r,{class:"relative"},{actions:z(({isExpanded:a,setIsExpanded:l})=>[E(o,{"has-hover":"","has-active":"",onClick:c=>l(!a),class:"p-2"},{default:z(()=>[E(n,null,{default:z(()=>[Ye(" power_settings_new ")]),_:1})]),_:2},1032,["onClick"])]),"expanded-content":z(({isExpanded:a,setIsExpanded:l})=>[C("div",{class:Ut(["fixed z-0",[a?"opacity-100":"opacity-0 pointer-events-none"]])},[C("fluent-menu",jP,[UP,C("fluent-menu-item",{onClick:i[0]||(i[0]=c=>ve(e).setNeedShutdown(!0))},"Shut down"),YP]),or(C("div",{onClick:c=>l(!1),class:"fixed w-screen h-screen bottom-0 right-0 -z-[1]"},null,8,WP),[[rr,a]])],2)]),_:1})}}}),GP=t=>(Tc("data-v-e8fca1cb"),t=t(),Fc(),t),ZP=GP(()=>C("div",{class:"starts-button-group relative windows-starts-icon-special-shape overflow-clip w-6 h-6 grid grid-cols-2 grid-rows-2 gap-[1.25px]"},[C("div",{class:"first-block-highlight"}),C("div"),C("div"),C("div")],-1)),XP=ke({__name:"StartsButton",props:{isExpanded:{type:Boolean}},emits:["setIsExpanded"],setup(t,{emit:e}){const s=t,i=ui();var n=[];const o=r=>{if(n.length===0){n[0]=r.code;return}else n.length===1?n[1]=r.code:r.code!==n[1]&&(n.shift(),n[1]=r.code);["ShiftLeft","ShiftRight"].includes(n[0])&&(n[1]==="MetaLeft"&&(i.setStarts({...i.getSystemStarts,isOpening:!s.isExpanded}),e("setIsExpanded",!s.isExpanded)),n=[])};return Yt(()=>{document.addEventListener("keydown",o)}),Ps(()=>{document.removeEventListener("keydown",o)}),(r,a)=>{const l=pe("IconButton");return Q(),et(l,{"has-hover":"","has-active":"",class:"h-full aspect-square",onClick:a[0]||(a[0]=()=>{ve(i).setStarts({...ve(i).getSystemStarts,isOpening:!s.isExpanded}),e("setIsExpanded",!s.isExpanded)})},{default:z(()=>[ZP]),_:1})}}}),QP=qt(XP,[["__scopeId","data-v-e8fca1cb"]]),JP={appearance:"neutral"},KP={slot:"end",class:"material-symbols-outlined"},$m=ke({__name:"ApplicationListButton",props:{label:{},icon:{}},setup(t){const e=t;return(s,i)=>(Q(),Se("fluent-button",JP,[Ye(wt(e.label)+" ",1),C("span",KP,wt(e.icon),1)]))}}),eL={class:"inline-flex items-center justify-start h-full gap-2 p-2"},tL={class:"text-rm-1 select-none"},sL=ke({__name:"ApplicationListItem",props:{app:{}},emits:["closeStartsMenu"],setup(t,{emit:e}){const s=t;return(i,n)=>{const o=pe("Icon"),r=pe("IconButton");return Q(),Se("div",{onClick:n[0]||(n[0]=()=>{e("closeStartsMenu"),ve(sf)(s.app.slot,s.app.title,s.app.icon)}),key:s.app.slot,class:"hover:bg-white/75 dark:hover:bg-black/75"},[C("div",eL,[E(r,null,{default:z(()=>[E(o,null,{default:z(()=>[Ye(wt(s.app.icon),1)]),_:1})]),_:1}),C("p",tL,wt(s.app.label),1)])])}}}),iL=ke({__name:"ApplicationList",emits:["closeStartsMenu"],setup(t,{emit:e}){const s=tf();return(i,n)=>{const o=pe("FlexLayout");return Q(),et(o,{class:"grid grid-cols-1 place-items-stretch gap-2"},{default:z(()=>[(Q(!0),Se(yt,null,co(ve(s),(r,a)=>(Q(),et(sL,{index:a,app:r,onCloseStartsMenu:n[0]||(n[0]=l=>e("closeStartsMenu"))},null,8,["index","app"]))),256))]),_:1})}}}),nL=ke({__name:"TablePanel",setup(t){const e=dt("page-one"),s=i=>{e.value=i};return(i,n)=>(Q(),Se("div",null,[xs(i.$slots,"app-one",{currentPage:e.value,setCurrentPage:s}),xs(i.$slots,"app-two",{currentPage:e.value,setCurrentPage:s})]))}}),Vy=t=>(Tc("data-v-43ce8b9d"),t=t(),Fc(),t),oL={class:"relative backdrop-blur-lg bg-white/80 dark:bg-black/80 bottom-0 w-screen mx-auto max-w-2xl overflow-auto max-h-[32rem]"},rL={class:"start-panel-content-aera"},aL=Vy(()=>C("h1",{class:"text-rp-1"},"Pinned",-1)),lL=Vy(()=>C("h1",{class:"text-rp-1"},"All Apps",-1)),cL=["onClick"],dL=ke({__name:"Starts",setup(t){const e=ui();return(s,i)=>{const n=pe("FlexLayout"),o=pe("ExpandLayout");return Q(),et(o,{class:"relative flex items-center justify-center h-full aspect-square"},{actions:z(({isExpanded:r,setIsExpanded:a})=>[E(QP,{onSetIsExpanded:a,"is-expanded":r},null,8,["onSetIsExpanded","is-expanded"])]),"expanded-content":z(({isExpanded:r,setIsExpanded:a})=>[C("div",{class:Ut(["start-panel full-screen fixed top-0 left-0 grid justify-center items-end pb-14 px-2 transition-all",[r?"active":"inactive"]])},[C("fluent-card",oL,[C("div",rL,[E(hA,{class:"px-8 pt-8 row-span-1"}),E(n,{class:"w-full flex-col px-8 gap-4 overflow-auto",style:{"grid-row":"span 10 / span 10"}},{default:z(()=>[E(nL,{class:"w-full relative overflow-x-clip"},{"app-one":z(({currentPage:l,setCurrentPage:c})=>[C("div",{class:Ut(["w-full absolute top-0 space-y-2 table-transition",[l!=="page-one"?"-left-[200%]":"left-0"]])},[E(n,{class:"justify-between items-center px-4"},{default:z(()=>[aL,E($m,{onClick:d=>c("page-two"),class:"self-end",label:"All Apps",icon:"arrow_forward"},null,8,["onClick"])]),_:2},1024),E(LP,{onCloseStartsMenu:d=>a(!1)},null,8,["onCloseStartsMenu"])],2)]),"app-two":z(({currentPage:l,setCurrentPage:c})=>[C("div",{class:Ut(["w-full absolute top-0 space-y-2 table-transition",[l!=="page-two"?"left-[200%]":"left-0"]])},[E(n,{class:"justify-between items-center px-4"},{default:z(()=>[lL,E($m,{onClick:d=>c("page-one"),label:"Back",icon:"arrow_back"},null,8,["onClick"])]),_:2},1024),E(iL,{onCloseStartsMenu:d=>a(!1)},null,8,["onCloseStartsMenu"])],2)]),_:2},1024)]),_:2},1024),E(n,{class:"row-span-1 justify-between items-center bg-black/5 px-8 py-2 border-t"},{default:z(()=>[E(BP),E(qP)]),_:1})])]),or(C("div",{onClick:()=>{ve(e).setStarts({...ve(e).getSystemStarts,isOpening:!r}),a(!1)},class:"fixed left-0 bottom-0 w-screen h-screen -z-[1]"},null,8,cL),[[rr,r]])],2)]),_:1})}}}),uL=qt(dL,[["__scopeId","data-v-43ce8b9d"]]),hL={class:"text-rm-1 text-black dark:text-white"},fL={class:"text-rm-1 text-black dark:text-white"},pL=ke({__name:"DateButton",setup(t){const e=dt(Z().format("MM-DD-YYYY")),s=dt(Z().format("HH:mm")),i=()=>{e.value=Z().format("MM-DD-YYYY"),s.value=Z().format("HH:mm")};var n=null;return Yt(()=>{n=setInterval(i,1e3)}),Ps(()=>{clearInterval(n)}),(o,r)=>{const a=pe("IconButton");return Q(),et(a,{"has-hover":"","has-active":"",class:"h-full select-none text-end px-2 flex justify-around"},{default:z(()=>[C("p",hL,wt(s.value),1),C("p",fL,wt(e.value),1)]),_:1})}}}),mL={class:"relative backdrop-blur-lg bg-white/80 dark:bg-black/80 w-full max-w-2xl overflow-auto max-h-[24rem]"},gL=C("fluent-calendar",null,null,-1),vL=["onClick"],bL=ke({__name:"CalendarPanel",setup(t){return(e,s)=>{const i=pe("FlexLayout"),n=pe("ExpandLayout");return Q(),et(n,null,{actions:z(({isExpanded:o,setIsExpanded:r})=>[E(pL,{onClick:a=>r(!o),class:"invisible xs:visible"},null,8,["onClick"])]),"expanded-content":z(({isExpanded:o,setIsExpanded:r})=>[C("div",{class:Ut(["start-panel full-screen fixed top-0 left-0 grid justify-end items-end pb-14 px-2 transition-all",[o?"active":"inactive"]])},[C("fluent-card",mL,[E(i,{class:"flex-col p-4 gap-8 justify-between h-full"},{default:z(()=>[gL]),_:1})]),or(C("div",{onClick:a=>r(!1),class:"fixed left-0 bottom-0 w-screen h-screen -z-[1]"},null,8,vL),[[rr,o]])],2)]),_:1})}}}),yL={class:"space-y-8"},xL=["value"],wL=C("fluent-slider",{value:"00"},null,-1),$L=ke({__name:"NavigationSystemControl",setup(t){const e=ui(),s=i=>{e.setBrightness(i.target.valueAsNumber)};return(i,n)=>{const o=pe("Icon"),r=pe("FlexLayout");return Q(),Se("div",yL,[E(r,{class:"gap-4"},{default:z(()=>[E(o,{class:"relative -top-2"},{default:z(()=>[Ye("light")]),_:1}),C("fluent-slider",{onChange:s,id:"systemBrightnessSliderRef",value:ve(e).getSystemBrightness,min:"30",max:"100"},null,40,xL)]),_:1}),E(r,{class:"gap-4"},{default:z(()=>[E(o,{class:"relative -top-2"},{default:z(()=>[Ye("volume_up")]),_:1}),wL]),_:1})])}}}),kL={class:"px-8 py-4"},_L=ke({__name:"NightLightNavigationButton",setup(t){const e=ui();return(s,i)=>{const n=pe("Icon"),o=pe("IconButton");return Q(),et(o,{"has-hover":"","has-active":"",onClick:ve(e).toggleIsNightlight,class:Ut({"bg-primary-500":ve(e).getSystemIsNightlight})},{default:z(()=>[C("div",kL,[E(n,null,{default:z(()=>[Ye(" light ")]),_:1})])]),_:1},8,["onClick","class"])}}}),SL=ke({__name:"NavigationToggleButton",props:{isExpanded:{type:Boolean}},emits:["setIsExpanded"],setup(t,{emit:e}){const s=t;return(i,n)=>{const o=pe("Icon"),r=pe("FlexLayout"),a=pe("IconButton");return Q(),et(a,{"has-hover":"","has-active":"",onClick:n[0]||(n[0]=l=>e("setIsExpanded",!s.isExpanded)),class:"h-full px-2"},{default:z(()=>[E(r,null,{default:z(()=>[E(o,{class:"scale-75"},{default:z(()=>[Ye("wifi")]),_:1}),E(o,{class:"scale-75 hidden md:block"},{default:z(()=>[Ye("volume_up")]),_:1}),E(o,{class:"scale-75 hidden md:block"},{default:z(()=>[Ye("power")]),_:1})]),_:1})]),_:1})}}}),CL={class:"relative backdrop-blur-lg bg-white/80 dark:bg-black/80 w-full max-w-2xl overflow-auto max-h-[24rem]"},IL={class:"px-8 py-4 grid place-content-center"},TL={class:"px-8 py-4 grid place-content-center"},FL={class:"px-8 py-4 grid place-content-center"},DL=["onClick"],RL={__name:"ControlPanel",setup(t){return(e,s)=>{const i=pe("Icon"),n=pe("IconButton"),o=pe("GridLayout"),r=pe("FlexLayout"),a=pe("ExpandLayout");return Q(),et(a,{class:"relative h-full"},{actions:z(({isExpanded:l,setIsExpanded:c})=>[E(SL,{onSetIsExpanded:c,"is-expanded":l},null,8,["onSetIsExpanded","is-expanded"])]),"expanded-content":z(({isExpanded:l,setIsExpanded:c})=>[C("div",{class:Ut(["start-panel full-screen fixed top-0 left-0 grid justify-end items-end pb-14 px-2 transition-all",[l?"active":"inactive"]])},[C("fluent-card",CL,[E(r,{class:"flex-col p-4 gap-8 justify-between h-full"},{default:z(()=>[E(o,{class:"grid-cols-3 gap-2"},{default:z(()=>[E(n,{"has-hover":"","has-active":""},{default:z(()=>[C("div",IL,[E(i,null,{default:z(()=>[Ye("wifi")]),_:1})])]),_:1}),E(n,{"has-hover":"","has-active":""},{default:z(()=>[C("div",TL,[E(i,null,{default:z(()=>[Ye("bluetooth")]),_:1})])]),_:1}),E(n,{"has-hover":"","has-active":""},{default:z(()=>[C("div",FL,[E(i,null,{default:z(()=>[Ye("air")]),_:1})])]),_:1}),E(_L)]),_:1}),E($L)]),_:1})]),or(C("div",{onClick:d=>c(!1),class:"fixed left-0 bottom-0 w-screen h-screen -z-[1]"},null,8,DL),[[rr,l]])],2)]),_:1})}}},EL=ke({__name:"Navigation",setup(t){return(e,s)=>{const i=pe("FlexLayout");return Q(),et(i,{class:"h-full gap-2"},{default:z(()=>[E(RL),E(bL)]),_:1})}}}),OL=qt(EL,[["__scopeId","data-v-19be6558"]]),AL={class:"relative h-full flex gap-1 select-none overflow-auto"},PL=["onClick"],LL={class:"h-full aspect-square grid"},ML=["anchor"],VL=ke({__name:"MinimizeApps",setup(t){const e=ho();return(s,i)=>{const n=pe("Icon"),o=pe("IconButton");return Q(),Se("ul",AL,[(Q(!0),Se(yt,null,co(ve(e).getAllProcesses,r=>(Q(),Se("div",{key:r.getProcessStateInstance().process.processId,onClick:()=>{ve(e).setMinimize(r,!r.getProcessStateInstance().accessibility.minimize),ve(e).cleanActive(),ve(e).cleanFocus(),r.getProcessStateInstance().accessibility.active=!0,r.getProcessStateInstance().accessibility.focus=!0,ve(e).setTopZIndex(r)}},[E(o,{"has-hover":"","has-active":"",id:"process"+r.getProcessStateInstance().process.processId,class:"h-full aspect-square"},{default:z(()=>[C("div",LL,[E(n,null,{default:z(()=>[Ye(wt(r.getProcessStateInstance().window.info.icon),1)]),_:2},1024)])]),_:2},1032,["id"]),C("fluent-tooltip",{position:"top",anchor:"process"+r.getProcessStateInstance().process.processId},wt(r.getProcessStateInstance().window.info.title),9,ML)],8,PL))),128))])}}}),HL={class:"relative w-full h-12 border-t border-black/20 back-blur bg-white/25 dark:bg-black/75 p-1"},NL=C("div",{class:"hidden flex-initial w-1/4 md:block h-full self-start overflow-auto"},null,-1),zL={class:"relative h-full flex-1 duration-1000 transition-all overflow-clip"},BL={class:"flex-none w-fit md:w-1/4 h-full flex justify-end"},jL=ke({__name:"StartsBar",setup(t){return(e,s)=>{const i=pe("FlexLayout");return Q(),Se("div",HL,[E(i,{class:"relative w-full h-full items-center justify-between overflow-clip"},{default:z(()=>[NL,C("div",zL,[E(i,{class:"h-full items-center justify-start md:justify-center gap-1"},{default:z(()=>[E(uL),E(VL)]),_:1})]),C("div",BL,[E(OL)])]),_:1})])}}}),UL={class:"grid place-content-center w-16 h-16"},YL=ke({__name:"DesktopIcon",props:{e:{}},setup(t){const e=t;var s=0,i=null;const n=()=>{if(s!==0){sf(e.e.slot,e.e.title,e.e.icon),s=0;return}s=200,i=setInterval(()=>{s-=10,s<=0&&(s=0,clearInterval(i))},10)};return(o,r)=>{const a=pe("Icon"),l=pe("IconButton");return Q(),et(l,{"has-hover":"","has-active":"",class:"w-fit h-fit",onClick:n},{default:z(()=>[C("div",UL,[E(a,null,{default:z(()=>[Ye(wt(o.e.icon),1)]),_:1})])]),_:1})}}}),WL={class:"relative wallpaper full-screen overflow-clip"},qL={class:"flex flex-col gap-2 flex-wrap p-2"},GL=ke({__name:"Desktop",setup(t){const e=tf();return(s,i)=>(Q(),Se("div",WL,[C("ul",qL,[(Q(!0),Se(yt,null,co(ve(e),(n,o)=>(Q(),et(YL,{e:n,key:o},null,8,["e"]))),128))])]))}}),ZL={class:"relative max-h-[100svh] h-[100svh] w-screen overflow-clip"},XL={class:"flex-grow h-full max-h-[100svh] overflow-clip"},QL=ke({__name:"Windows",setup(t){const e=ho(),s=ui(),i=Jc();eb(()=>{i.setIsLogout(!0),s.setIsShutdown(!1),s.setNeedShutdown(!1),s.setStarts({...s.getSystemStarts,isOpenning:!1})}),Rc(()=>{i.setIsLogout(!0)});var n=[];const o=r=>{if(n.length===0){n[0]=r.code;return}else n.length===1?n[1]=r.code:r.code!==n[1]&&(n.shift(),n[1]=r.code);["ShiftLeft","ShiftRight"].includes(n[0])&&(n[1]==="KeyD"&&e.setAllProcessMinimize(),n=[])};return Yt(()=>{document.addEventListener("keydown",o)}),Ps(()=>{document.removeEventListener("keydown",o)}),(r,a)=>(Q(),Se("div",ZL,[ve(s).getSystemIsLocked?(Q(),Se(yt,{key:1},[C("div",XL,[E(GL)]),C("nav",{class:"fixed bottom-0 left-0 w-full h-12",style:xn({zIndex:ve(s).getSystemStarts.isOpening?"99999":"999"})},[E(jL)],4)],64)):(Q(),et(lA,{key:0}))]))}}),Hy=Pc(QL),JL=ke({__name:"ScreenMask",setup(t){const e=ui();return Yt(()=>{e.setIsLocked(!0)}),Ps(()=>{e.setIsLocked(!0)}),(s,i)=>(Q(),Se(yt,null,[C("div",{class:"brightness",style:xn({"--system-bright":100-ve(e).getSystemBrightness+"%"})},null,4),C("div",{class:"nightlight",style:xn({"--system-nightlight-enabled":ve(e).getSystemIsNightlight?"35%":"0"})},null,4)],64))}}),Ny=Pc(JL),KL={},eM={class:"fixed full-screen top-0 right-0 bg-black"};function tM(t,e){return Q(),Se("div",eM,[xs(t.$slots,"default")])}const sM=qt(KL,[["render",tM]]),nf=t=>(Tc("data-v-a25f2464"),t=t(),Fc(),t),iM={key:0,class:"full-screen flex flex-col items-center justify-center gap-8"},nM=nf(()=>C("h1",{class:"text-white font-bold text-xl"},"Shutdown",-1)),oM=nf(()=>C("fluent-progress-ring",null,null,-1)),rM=[nM,oM],aM={key:1,class:"container h-full max-h-96 flex flex-col gap-8 p-4 overflow-auto"},lM={class:"space-y-4 w-full h-full"},cM=nf(()=>C("h1",{class:"text-white font-bold text-xl"},"Some processes is running",-1)),dM={class:"transition-all flex items-center justify-between py-1 px-2 hover:bg-white/25 rounded"},uM={class:"inline-flex gap-2"},hM={class:"material-symbols-outlined"},fM={class:"flex items-center justify-end"},pM=["onClick"],mM={class:"flex gap-2 items-center justify-end"},gM=ke({__name:"Shutdown",setup(t){const e=ho(),s=ui();Ai(()=>e.getAllProcesses.length,()=>{e.getAllProcesses.length===0&&s.setIsShutdown(!0)},{immediate:!0});var i;return Yt(()=>{i=setTimeout(()=>{e.killAllProcesses()},12e4)}),Rc(()=>{clearTimeout(i)}),(n,o)=>(Q(),et(sM,{class:"z-highest shutdown flex justify-center items-center"},{default:z(()=>[ve(e).getAllProcesses.length===0?(Q(),Se("div",iM,rM)):(Q(),Se("div",aM,[C("div",lM,[cM,(Q(!0),Se(yt,null,co(ve(e).getAllProcesses,r=>(Q(),Se("ul",{key:r.getProcessStateInstance().process.processId,class:"text-white flex flex-col overflow-auto"},[C("li",dM,[C("div",uM,[C("span",hM,wt(r.getProcessStateInstance().window.info.icon),1),C("p",null,wt(r.getProcessStateInstance().window.info.title),1)]),C("div",fM,[C("span",{onClick:a=>ve(e).killProcessByProcessId(r.getProcessStateInstance().process.processId),class:"scale-75 p-2 rounded-full select-none hover:bg-white/25 material-symbols-outlined"},"close",8,pM)])])]))),128))]),C("div",mM,[C("fluent-button",{onClick:o[0]||(o[0]=()=>{ve(e).killAllProcesses()})},"End All Processes")])]))]),_:1}))}}),vM=qt(gM,[["__scopeId","data-v-a25f2464"]]),zy=Pc(vM);Hy.use(Hb).use(Ab).use(FT).mount("#window");yA();Ny.mount("#window-screen-mask");const $u=ui();Ai(()=>$u.needShutdown,()=>{Hy.unmount(),Ny.unmount(),zy.mount("#window")});Ai(()=>$u.isShutdown,()=>{$u.isShutdown&&setTimeout(()=>{document.documentElement.style.backgroundColor="#000",document.body.remove(),zy.unmount()},500)})});export default bM();
//# sourceMappingURL=index-edda9bdb.js.map
