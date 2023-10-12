var hy=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var $A=hy((VA,Na)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=i(n);fetch(n.href,o)}})();const Ss=function(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof self<"u")return self;if(typeof window<"u")return window;try{return new Function("return this")()}catch{return{}}}();Ss.trustedTypes===void 0&&(Ss.trustedTypes={createPolicy:(e,t)=>t});const Rp={configurable:!1,enumerable:!1,writable:!1};Ss.FAST===void 0&&Reflect.defineProperty(Ss,"FAST",Object.assign({value:Object.create(null)},Rp));const yr=Ss.FAST;if(yr.getById===void 0){const e=Object.create(null);Reflect.defineProperty(yr,"getById",Object.assign({value(t,i){let s=e[t];return s===void 0&&(s=i?e[t]=i():null),s}},Rp))}const Tn=Object.freeze([]);function Ep(){const e=new WeakMap;return function(t){let i=e.get(t);if(i===void 0){let s=Reflect.getPrototypeOf(t);for(;i===void 0&&s!==null;)i=e.get(s),s=Reflect.getPrototypeOf(s);i=i===void 0?[]:i.slice(0),e.set(t,i)}return i}}const $c=Ss.FAST.getById(1,()=>{const e=[],t=[];function i(){if(t.length)throw t.shift()}function s(r){try{r.call()}catch(a){t.push(a),setTimeout(i,0)}}function n(){let a=0;for(;a<e.length;)if(s(e[a]),a++,a>1024){for(let l=0,c=e.length-a;l<c;l++)e[l]=e[l+a];e.length-=a,a=0}e.length=0}function o(r){e.length<1&&Ss.requestAnimationFrame(n),e.push(r)}return Object.freeze({enqueue:o,process:n})}),Op=Ss.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let _c=Op;const ar=`fast-${Math.random().toString(36).substring(2,8)}`,Pp=`${ar}{`,ju=`}${ar}`,de=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(_c!==Op)throw new Error("The HTML policy can only be set once.");_c=e},createHTML(e){return _c.createHTML(e)},isMarker(e){return e&&e.nodeType===8&&e.data.startsWith(ar)},extractDirectiveIndexFromMarker(e){return parseInt(e.data.replace(`${ar}:`,""))},createInterpolationPlaceholder(e){return`${Pp}${e}${ju}`},createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder(e){return`<!--${ar}:${e}-->`},queueUpdate:$c.enqueue,processUpdates:$c.process,nextUpdate(){return new Promise($c.enqueue)},setAttribute(e,t,i){i==null?e.removeAttribute(t):e.setAttribute(t,i)},setBooleanAttribute(e,t,i){i?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;t!==null;t=e.firstChild)e.removeChild(t)},createTemplateWalker(e){return document.createTreeWalker(e,133,null,!1)}});class za{constructor(t,i){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=t,this.sub1=i}has(t){return this.spillover===void 0?this.sub1===t||this.sub2===t:this.spillover.indexOf(t)!==-1}subscribe(t){const i=this.spillover;if(i===void 0){if(this.has(t))return;if(this.sub1===void 0){this.sub1=t;return}if(this.sub2===void 0){this.sub2=t;return}this.spillover=[this.sub1,this.sub2,t],this.sub1=void 0,this.sub2=void 0}else i.indexOf(t)===-1&&i.push(t)}unsubscribe(t){const i=this.spillover;if(i===void 0)this.sub1===t?this.sub1=void 0:this.sub2===t&&(this.sub2=void 0);else{const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}notify(t){const i=this.spillover,s=this.source;if(i===void 0){const n=this.sub1,o=this.sub2;n!==void 0&&n.handleChange(s,t),o!==void 0&&o.handleChange(s,t)}else for(let n=0,o=i.length;n<o;++n)i[n].handleChange(s,t)}}class Lp{constructor(t){this.subscribers={},this.sourceSubscribers=null,this.source=t}notify(t){var i;const s=this.subscribers[t];s!==void 0&&s.notify(t),(i=this.sourceSubscribers)===null||i===void 0||i.notify(t)}subscribe(t,i){var s;if(i){let n=this.subscribers[i];n===void 0&&(this.subscribers[i]=n=new za(this.source)),n.subscribe(t)}else this.sourceSubscribers=(s=this.sourceSubscribers)!==null&&s!==void 0?s:new za(this.source),this.sourceSubscribers.subscribe(t)}unsubscribe(t,i){var s;if(i){const n=this.subscribers[i];n!==void 0&&n.unsubscribe(t)}else(s=this.sourceSubscribers)===null||s===void 0||s.unsubscribe(t)}}const ue=yr.getById(2,()=>{const e=/(:|&&|\|\||if)/,t=new WeakMap,i=de.queueUpdate;let s,n=c=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function o(c){let u=c.$fastController||t.get(c);return u===void 0&&(Array.isArray(c)?u=n(c):t.set(c,u=new Lp(c))),u}const r=Ep();class a{constructor(u){this.name=u,this.field=`_${u}`,this.callback=`${u}Changed`}getValue(u){return s!==void 0&&s.watch(u,this.name),u[this.field]}setValue(u,d){const f=this.field,b=u[f];if(b!==d){u[f]=d;const $=u[this.callback];typeof $=="function"&&$.call(u,b,d),o(u).notify(this.name)}}}class l extends za{constructor(u,d,f=!1){super(u,d),this.binding=u,this.isVolatileBinding=f,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(u,d){this.needsRefresh&&this.last!==null&&this.disconnect();const f=s;s=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const b=this.binding(u,d);return s=f,b}disconnect(){if(this.last!==null){let u=this.first;for(;u!==void 0;)u.notifier.unsubscribe(this,u.propertyName),u=u.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(u,d){const f=this.last,b=o(u),$=f===null?this.first:{};if($.propertySource=u,$.propertyName=d,$.notifier=b,b.subscribe(this,d),f!==null){if(!this.needsRefresh){let x;s=void 0,x=f.propertySource[f.propertyName],s=this,u===x&&(this.needsRefresh=!0)}f.next=$}this.last=$}handleChange(){this.needsQueue&&(this.needsQueue=!1,i(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let u=this.first;return{next:()=>{const d=u;return d===void 0?{value:void 0,done:!0}:(u=u.next,{value:d,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(c){n=c},getNotifier:o,track(c,u){s!==void 0&&s.watch(c,u)},trackVolatile(){s!==void 0&&(s.needsRefresh=!0)},notify(c,u){o(c).notify(u)},defineProperty(c,u){typeof u=="string"&&(u=new a(u)),r(c).push(u),Reflect.defineProperty(c,u.name,{enumerable:!0,get:function(){return u.getValue(this)},set:function(d){u.setValue(this,d)}})},getAccessors:r,binding(c,u,d=this.isVolatileBinding(c)){return new l(c,u,d)},isVolatileBinding(c){return e.test(c.toString())}})});function k(e,t){ue.defineProperty(e,t)}function fy(e,t,i){return Object.assign({},i,{get:function(){return ue.trackVolatile(),i.get.apply(this)}})}const Ch=yr.getById(3,()=>{let e=null;return{get(){return e},set(t){e=t}}});class xr{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return Ch.get()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(t){Ch.set(t)}}ue.defineProperty(xr.prototype,"index");ue.defineProperty(xr.prototype,"length");const lr=Object.seal(new xr);class cl{constructor(){this.targetIndex=0}}class Ap extends cl{constructor(){super(...arguments),this.createPlaceholder=de.createInterpolationPlaceholder}}class Yu extends cl{constructor(t,i,s){super(),this.name=t,this.behavior=i,this.options=s}createPlaceholder(t){return de.createCustomAttributePlaceholder(this.name,t)}createBehavior(t){return new this.behavior(t,this.options)}}function py(e,t){this.source=e,this.context=t,this.bindingObserver===null&&(this.bindingObserver=ue.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function gy(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function my(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function vy(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;e!==void 0&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function by(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function yy(e){de.setAttribute(this.target,this.targetName,e)}function xy(e){de.setBooleanAttribute(this.target,this.targetName,e)}function wy(e){if(e==null&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;t===void 0?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{const t=this.target.$fastView;t!==void 0&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function $y(e){this.target[this.targetName]=e}function _y(e){const t=this.classVersions||Object.create(null),i=this.target;let s=this.version||0;if(e!=null&&e.length){const n=e.split(/\s+/);for(let o=0,r=n.length;o<r;++o){const a=n[o];a!==""&&(t[a]=s,i.classList.add(a))}}if(this.classVersions=t,this.version=s+1,s!==0){s-=1;for(const n in t)t[n]===s&&i.classList.remove(n)}}class Uu extends Ap{constructor(t){super(),this.binding=t,this.bind=py,this.unbind=my,this.updateTarget=yy,this.isBindingVolatile=ue.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(t){if(this.originalTargetName=t,t!==void 0)switch(t[0]){case":":if(this.cleanedTargetName=t.substr(1),this.updateTarget=$y,this.cleanedTargetName==="innerHTML"){const i=this.binding;this.binding=(s,n)=>de.createHTML(i(s,n))}break;case"?":this.cleanedTargetName=t.substr(1),this.updateTarget=xy;break;case"@":this.cleanedTargetName=t.substr(1),this.bind=gy,this.unbind=by;break;default:this.cleanedTargetName=t,t==="class"&&(this.updateTarget=_y);break}}targetAtContent(){this.updateTarget=wy,this.unbind=vy}createBehavior(t){return new ky(t,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class ky{constructor(t,i,s,n,o,r,a){this.source=null,this.context=null,this.bindingObserver=null,this.target=t,this.binding=i,this.isBindingVolatile=s,this.bind=n,this.unbind=o,this.updateTarget=r,this.targetName=a}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(t){xr.setEvent(t);const i=this.binding(this.source,this.context);xr.setEvent(null),i!==!0&&t.preventDefault()}}let kc=null;class Wu{addFactory(t){t.targetIndex=this.targetIndex,this.behaviorFactories.push(t)}captureContentBinding(t){t.targetAtContent(),this.addFactory(t)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){kc=this}static borrow(t){const i=kc||new Wu;return i.directives=t,i.reset(),kc=null,i}}function Sy(e){if(e.length===1)return e[0];let t;const i=e.length,s=e.map(r=>typeof r=="string"?()=>r:(t=r.targetName||t,r.binding)),n=(r,a)=>{let l="";for(let c=0;c<i;++c)l+=s[c](r,a);return l},o=new Uu(n);return o.targetName=t,o}const Cy=ju.length;function Mp(e,t){const i=t.split(Pp);if(i.length===1)return null;const s=[];for(let n=0,o=i.length;n<o;++n){const r=i[n],a=r.indexOf(ju);let l;if(a===-1)l=r;else{const c=parseInt(r.substring(0,a));s.push(e.directives[c]),l=r.substring(a+Cy)}l!==""&&s.push(l)}return s}function Ih(e,t,i=!1){const s=t.attributes;for(let n=0,o=s.length;n<o;++n){const r=s[n],a=r.value,l=Mp(e,a);let c=null;l===null?i&&(c=new Uu(()=>a),c.targetName=r.name):c=Sy(l),c!==null&&(t.removeAttributeNode(r),n--,o--,e.addFactory(c))}}function Iy(e,t,i){const s=Mp(e,t.textContent);if(s!==null){let n=t;for(let o=0,r=s.length;o<r;++o){const a=s[o],l=o===0?t:n.parentNode.insertBefore(document.createTextNode(""),n.nextSibling);typeof a=="string"?l.textContent=a:(l.textContent=" ",e.captureContentBinding(a)),n=l,e.targetIndex++,l!==t&&i.nextNode()}e.targetIndex--}}function Ty(e,t){const i=e.content;document.adoptNode(i);const s=Wu.borrow(t);Ih(s,e,!0);const n=s.behaviorFactories;s.reset();const o=de.createTemplateWalker(i);let r;for(;r=o.nextNode();)switch(s.targetIndex++,r.nodeType){case 1:Ih(s,r);break;case 3:Iy(s,r,o);break;case 8:de.isMarker(r)&&s.addFactory(t[de.extractDirectiveIndexFromMarker(r)])}let a=0;(de.isMarker(i.firstChild)||i.childNodes.length===1&&t.length)&&(i.insertBefore(document.createComment(""),i.firstChild),a=-1);const l=s.behaviorFactories;return s.release(),{fragment:i,viewBehaviorFactories:l,hostBehaviorFactories:n,targetOffset:a}}const Sc=document.createRange();class Vp{constructor(t,i){this.fragment=t,this.behaviors=i,this.source=null,this.context=null,this.firstChild=t.firstChild,this.lastChild=t.lastChild}appendTo(t){t.appendChild(this.fragment)}insertBefore(t){if(this.fragment.hasChildNodes())t.parentNode.insertBefore(this.fragment,t);else{const i=this.lastChild;if(t.previousSibling===i)return;const s=t.parentNode;let n=this.firstChild,o;for(;n!==i;)o=n.nextSibling,s.insertBefore(n,t),n=o;s.insertBefore(i,t)}}remove(){const t=this.fragment,i=this.lastChild;let s=this.firstChild,n;for(;s!==i;)n=s.nextSibling,t.appendChild(s),s=n;t.appendChild(i)}dispose(){const t=this.firstChild.parentNode,i=this.lastChild;let s=this.firstChild,n;for(;s!==i;)n=s.nextSibling,t.removeChild(s),s=n;t.removeChild(i);const o=this.behaviors,r=this.source;for(let a=0,l=o.length;a<l;++a)o[a].unbind(r)}bind(t,i){const s=this.behaviors;if(this.source!==t)if(this.source!==null){const n=this.source;this.source=t,this.context=i;for(let o=0,r=s.length;o<r;++o){const a=s[o];a.unbind(n),a.bind(t,i)}}else{this.source=t,this.context=i;for(let n=0,o=s.length;n<o;++n)s[n].bind(t,i)}}unbind(){if(this.source===null)return;const t=this.behaviors,i=this.source;for(let s=0,n=t.length;s<n;++s)t[s].unbind(i);this.source=null}static disposeContiguousBatch(t){if(t.length!==0){Sc.setStartBefore(t[0].firstChild),Sc.setEndAfter(t[t.length-1].lastChild),Sc.deleteContents();for(let i=0,s=t.length;i<s;++i){const n=t[i],o=n.behaviors,r=n.source;for(let a=0,l=o.length;a<l;++a)o[a].unbind(r)}}}}class Th{constructor(t,i){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=t,this.directives=i}create(t){if(this.fragment===null){let c;const u=this.html;if(typeof u=="string"){c=document.createElement("template"),c.innerHTML=de.createHTML(u);const f=c.content.firstElementChild;f!==null&&f.tagName==="TEMPLATE"&&(c=f)}else c=u;const d=Ty(c,this.directives);this.fragment=d.fragment,this.viewBehaviorFactories=d.viewBehaviorFactories,this.hostBehaviorFactories=d.hostBehaviorFactories,this.targetOffset=d.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const i=this.fragment.cloneNode(!0),s=this.viewBehaviorFactories,n=new Array(this.behaviorCount),o=de.createTemplateWalker(i);let r=0,a=this.targetOffset,l=o.nextNode();for(let c=s.length;r<c;++r){const u=s[r],d=u.targetIndex;for(;l!==null;)if(a===d){n[r]=u.createBehavior(l);break}else l=o.nextNode(),a++}if(this.hasHostBehaviors){const c=this.hostBehaviorFactories;for(let u=0,d=c.length;u<d;++u,++r)n[r]=c[u].createBehavior(t)}return new Vp(i,n)}render(t,i,s){typeof i=="string"&&(i=document.getElementById(i)),s===void 0&&(s=i);const n=this.create(s);return n.bind(t,lr),n.appendTo(i),n}}const Fy=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function A(e,...t){const i=[];let s="";for(let n=0,o=e.length-1;n<o;++n){const r=e[n];let a=t[n];if(s+=r,a instanceof Th){const l=a;a=()=>l}if(typeof a=="function"&&(a=new Uu(a)),a instanceof Ap){const l=Fy.exec(r);l!==null&&(a.targetName=l[2])}a instanceof cl?(s+=a.createPlaceholder(i.length),i.push(a)):s+=a}return s+=e[e.length-1],new Th(s,i)}class Xt{constructor(){this.targets=new WeakSet}addStylesTo(t){this.targets.add(t)}removeStylesFrom(t){this.targets.delete(t)}isAttachedTo(t){return this.targets.has(t)}withBehaviors(...t){return this.behaviors=this.behaviors===null?t:this.behaviors.concat(t),this}}Xt.create=(()=>{if(de.supportsAdoptedStyleSheets){const e=new Map;return t=>new Dy(t,e)}return e=>new Oy(e)})();function Gu(e){return e.map(t=>t instanceof Xt?Gu(t.styles):[t]).reduce((t,i)=>t.concat(i),[])}function Hp(e){return e.map(t=>t instanceof Xt?t.behaviors:null).reduce((t,i)=>i===null?t:(t===null&&(t=[]),t.concat(i)),null)}let Np=(e,t)=>{e.adoptedStyleSheets=[...e.adoptedStyleSheets,...t]},zp=(e,t)=>{e.adoptedStyleSheets=e.adoptedStyleSheets.filter(i=>t.indexOf(i)===-1)};if(de.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),Np=(e,t)=>{e.adoptedStyleSheets.push(...t)},zp=(e,t)=>{for(const i of t){const s=e.adoptedStyleSheets.indexOf(i);s!==-1&&e.adoptedStyleSheets.splice(s,1)}}}catch{}class Dy extends Xt{constructor(t,i){super(),this.styles=t,this.styleSheetCache=i,this._styleSheets=void 0,this.behaviors=Hp(t)}get styleSheets(){if(this._styleSheets===void 0){const t=this.styles,i=this.styleSheetCache;this._styleSheets=Gu(t).map(s=>{if(s instanceof CSSStyleSheet)return s;let n=i.get(s);return n===void 0&&(n=new CSSStyleSheet,n.replaceSync(s),i.set(s,n)),n})}return this._styleSheets}addStylesTo(t){Np(t,this.styleSheets),super.addStylesTo(t)}removeStylesFrom(t){zp(t,this.styleSheets),super.removeStylesFrom(t)}}let Ry=0;function Ey(){return`fast-style-class-${++Ry}`}class Oy extends Xt{constructor(t){super(),this.styles=t,this.behaviors=null,this.behaviors=Hp(t),this.styleSheets=Gu(t),this.styleClass=Ey()}addStylesTo(t){const i=this.styleSheets,s=this.styleClass;t=this.normalizeTarget(t);for(let n=0;n<i.length;n++){const o=document.createElement("style");o.innerHTML=i[n],o.className=s,t.append(o)}super.addStylesTo(t)}removeStylesFrom(t){t=this.normalizeTarget(t);const i=t.querySelectorAll(`.${this.styleClass}`);for(let s=0,n=i.length;s<n;++s)t.removeChild(i[s]);super.removeStylesFrom(t)}isAttachedTo(t){return super.isAttachedTo(this.normalizeTarget(t))}normalizeTarget(t){return t===document?document.body:t}}const Ba=Object.freeze({locate:Ep()}),Hr={toView(e){return e?"true":"false"},fromView(e){return!(e==null||e==="false"||e===!1||e===0)}},q={toView(e){if(e==null)return null;const t=e*1;return isNaN(t)?null:t.toString()},fromView(e){if(e==null)return null;const t=e*1;return isNaN(t)?null:t}};class ja{constructor(t,i,s=i.toLowerCase(),n="reflect",o){this.guards=new Set,this.Owner=t,this.name=i,this.attribute=s,this.mode=n,this.converter=o,this.fieldName=`_${i}`,this.callbackName=`${i}Changed`,this.hasCallback=this.callbackName in t.prototype,n==="boolean"&&o===void 0&&(this.converter=Hr)}setValue(t,i){const s=t[this.fieldName],n=this.converter;n!==void 0&&(i=n.fromView(i)),s!==i&&(t[this.fieldName]=i,this.tryReflectToAttribute(t),this.hasCallback&&t[this.callbackName](s,i),t.$fastController.notify(this.name))}getValue(t){return ue.track(t,this.name),t[this.fieldName]}onAttributeChangedCallback(t,i){this.guards.has(t)||(this.guards.add(t),this.setValue(t,i),this.guards.delete(t))}tryReflectToAttribute(t){const i=this.mode,s=this.guards;s.has(t)||i==="fromView"||de.queueUpdate(()=>{s.add(t);const n=t[this.fieldName];switch(i){case"reflect":const o=this.converter;de.setAttribute(t,this.attribute,o!==void 0?o.toView(n):n);break;case"boolean":de.setBooleanAttribute(t,this.attribute,n);break}s.delete(t)})}static collect(t,...i){const s=[];i.push(Ba.locate(t));for(let n=0,o=i.length;n<o;++n){const r=i[n];if(r!==void 0)for(let a=0,l=r.length;a<l;++a){const c=r[a];typeof c=="string"?s.push(new ja(t,c)):s.push(new ja(t,c.property,c.attribute,c.mode,c.converter))}}return s}}function p(e,t){let i;function s(n,o){arguments.length>1&&(i.property=o),Ba.locate(n.constructor).push(i)}if(arguments.length>1){i={},s(e,t);return}return i=e===void 0?{}:e,s}const Fh={mode:"open"},Dh={},su=yr.getById(4,()=>{const e=new Map;return Object.freeze({register(t){return e.has(t.type)?!1:(e.set(t.type,t),!0)},getByType(t){return e.get(t)}})});class ul{constructor(t,i=t.definition){typeof i=="string"&&(i={name:i}),this.type=t,this.name=i.name,this.template=i.template;const s=ja.collect(t,i.attributes),n=new Array(s.length),o={},r={};for(let a=0,l=s.length;a<l;++a){const c=s[a];n[a]=c.attribute,o[c.name]=c,r[c.attribute]=c}this.attributes=s,this.observedAttributes=n,this.propertyLookup=o,this.attributeLookup=r,this.shadowOptions=i.shadowOptions===void 0?Fh:i.shadowOptions===null?void 0:Object.assign(Object.assign({},Fh),i.shadowOptions),this.elementOptions=i.elementOptions===void 0?Dh:Object.assign(Object.assign({},Dh),i.elementOptions),this.styles=i.styles===void 0?void 0:Array.isArray(i.styles)?Xt.create(i.styles):i.styles instanceof Xt?i.styles:Xt.create([i.styles])}get isDefined(){return!!su.getByType(this.type)}define(t=customElements){const i=this.type;if(su.register(this)){const s=this.attributes,n=i.prototype;for(let o=0,r=s.length;o<r;++o)ue.defineProperty(n,s[o]);Reflect.defineProperty(i,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return t.get(this.name)||t.define(this.name,i,this.elementOptions),this}}ul.forType=su.getByType;const Bp=new WeakMap,Py={bubbles:!0,composed:!0,cancelable:!0};function Cc(e){return e.shadowRoot||Bp.get(e)||null}class qu extends Lp{constructor(t,i){super(t),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=t,this.definition=i;const s=i.shadowOptions;if(s!==void 0){const o=t.attachShadow(s);s.mode==="closed"&&Bp.set(t,o)}const n=ue.getAccessors(t);if(n.length>0){const o=this.boundObservables=Object.create(null);for(let r=0,a=n.length;r<a;++r){const l=n[r].name,c=t[l];c!==void 0&&(delete t[l],o[l]=c)}}}get isConnected(){return ue.track(this,"isConnected"),this._isConnected}setIsConnected(t){this._isConnected=t,ue.notify(this,"isConnected")}get template(){return this._template}set template(t){this._template!==t&&(this._template=t,this.needsInitialization||this.renderTemplate(t))}get styles(){return this._styles}set styles(t){this._styles!==t&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=t,!this.needsInitialization&&t!==null&&this.addStyles(t))}addStyles(t){const i=Cc(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)i.append(t);else if(!t.isAttachedTo(i)){const s=t.behaviors;t.addStylesTo(i),s!==null&&this.addBehaviors(s)}}removeStyles(t){const i=Cc(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)i.removeChild(t);else if(t.isAttachedTo(i)){const s=t.behaviors;t.removeStylesFrom(i),s!==null&&this.removeBehaviors(s)}}addBehaviors(t){const i=this.behaviors||(this.behaviors=new Map),s=t.length,n=[];for(let o=0;o<s;++o){const r=t[o];i.has(r)?i.set(r,i.get(r)+1):(i.set(r,1),n.push(r))}if(this._isConnected){const o=this.element;for(let r=0;r<n.length;++r)n[r].bind(o,lr)}}removeBehaviors(t,i=!1){const s=this.behaviors;if(s===null)return;const n=t.length,o=[];for(let r=0;r<n;++r){const a=t[r];if(s.has(a)){const l=s.get(a)-1;l===0||i?s.delete(a)&&o.push(a):s.set(a,l)}}if(this._isConnected){const r=this.element;for(let a=0;a<o.length;++a)o[a].unbind(r)}}onConnectedCallback(){if(this._isConnected)return;const t=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(t,lr);const i=this.behaviors;if(i!==null)for(const[s]of i)s.bind(t,lr);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const t=this.view;t!==null&&t.unbind();const i=this.behaviors;if(i!==null){const s=this.element;for(const[n]of i)n.unbind(s)}}onAttributeChangedCallback(t,i,s){const n=this.definition.attributeLookup[t];n!==void 0&&n.onAttributeChangedCallback(this.element,s)}emit(t,i,s){return this._isConnected?this.element.dispatchEvent(new CustomEvent(t,Object.assign(Object.assign({detail:i},Py),s))):!1}finishInitialization(){const t=this.element,i=this.boundObservables;if(i!==null){const n=Object.keys(i);for(let o=0,r=n.length;o<r;++o){const a=n[o];t[a]=i[a]}this.boundObservables=null}const s=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():s.template&&(this._template=s.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():s.styles&&(this._styles=s.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(t){const i=this.element,s=Cc(i)||i;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||de.removeChildNodes(s),t&&(this.view=t.render(i,s,i))}static forCustomElement(t){const i=t.$fastController;if(i!==void 0)return i;const s=ul.forType(t.constructor);if(s===void 0)throw new Error("Missing FASTElement definition.");return t.$fastController=new qu(t,s)}}function Rh(e){return class extends e{constructor(){super(),qu.forCustomElement(this)}$emit(t,i,s){return this.$fastController.emit(t,i,s)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(t,i,s){this.$fastController.onAttributeChangedCallback(t,i,s)}}}const dl=Object.assign(Rh(HTMLElement),{from(e){return Rh(e)},define(e,t){return new ul(e,t).define().type}});class Zu{createCSS(){return""}createBehavior(){}}function jp(e,t){const i=[];let s="";const n=[];for(let o=0,r=e.length-1;o<r;++o){s+=e[o];let a=t[o];if(a instanceof Zu){const l=a.createBehavior();a=a.createCSS(),l&&n.push(l)}a instanceof Xt||a instanceof CSSStyleSheet?(s.trim()!==""&&(i.push(s),s=""),i.push(a)):s+=a}return s+=e[e.length-1],s.trim()!==""&&i.push(s),{styles:i,behaviors:n}}function D(e,...t){const{styles:i,behaviors:s}=jp(e,t),n=Xt.create(i);return s.length&&n.withBehaviors(...s),n}class Ly extends Zu{constructor(t,i){super(),this.behaviors=i,this.css="";const s=t.reduce((n,o)=>(typeof o=="string"?this.css+=o:n.push(o),n),[]);s.length&&(this.styles=Xt.create(s))}createBehavior(){return this}createCSS(){return this.css}bind(t){this.styles&&t.$fastController.addStyles(this.styles),this.behaviors.length&&t.$fastController.addBehaviors(this.behaviors)}unbind(t){this.styles&&t.$fastController.removeStyles(this.styles),this.behaviors.length&&t.$fastController.removeBehaviors(this.behaviors)}}function pi(e,...t){const{styles:i,behaviors:s}=jp(e,t);return new Ly(i,s)}function Ni(e,t,i){return{index:e,removed:t,addedCount:i}}const Yp=0,Up=1,nu=2,ou=3;function Ay(e,t,i,s,n,o){const r=o-n+1,a=i-t+1,l=new Array(r);let c,u;for(let d=0;d<r;++d)l[d]=new Array(a),l[d][0]=d;for(let d=0;d<a;++d)l[0][d]=d;for(let d=1;d<r;++d)for(let f=1;f<a;++f)e[t+f-1]===s[n+d-1]?l[d][f]=l[d-1][f-1]:(c=l[d-1][f]+1,u=l[d][f-1]+1,l[d][f]=c<u?c:u);return l}function My(e){let t=e.length-1,i=e[0].length-1,s=e[t][i];const n=[];for(;t>0||i>0;){if(t===0){n.push(nu),i--;continue}if(i===0){n.push(ou),t--;continue}const o=e[t-1][i-1],r=e[t-1][i],a=e[t][i-1];let l;r<a?l=r<o?r:o:l=a<o?a:o,l===o?(o===s?n.push(Yp):(n.push(Up),s=o),t--,i--):l===r?(n.push(ou),t--,s=r):(n.push(nu),i--,s=a)}return n.reverse(),n}function Vy(e,t,i){for(let s=0;s<i;++s)if(e[s]!==t[s])return s;return i}function Hy(e,t,i){let s=e.length,n=t.length,o=0;for(;o<i&&e[--s]===t[--n];)o++;return o}function Ny(e,t,i,s){return t<i||s<e?-1:t===i||s===e?0:e<i?t<s?t-i:s-i:s<t?s-e:t-e}function Wp(e,t,i,s,n,o){let r=0,a=0;const l=Math.min(i-t,o-n);if(t===0&&n===0&&(r=Vy(e,s,l)),i===e.length&&o===s.length&&(a=Hy(e,s,l-r)),t+=r,n+=r,i-=a,o-=a,i-t===0&&o-n===0)return Tn;if(t===i){const $=Ni(t,[],0);for(;n<o;)$.removed.push(s[n++]);return[$]}else if(n===o)return[Ni(t,[],i-t)];const c=My(Ay(e,t,i,s,n,o)),u=[];let d,f=t,b=n;for(let $=0;$<c.length;++$)switch(c[$]){case Yp:d!==void 0&&(u.push(d),d=void 0),f++,b++;break;case Up:d===void 0&&(d=Ni(f,[],0)),d.addedCount++,f++,d.removed.push(s[b]),b++;break;case nu:d===void 0&&(d=Ni(f,[],0)),d.addedCount++,f++;break;case ou:d===void 0&&(d=Ni(f,[],0)),d.removed.push(s[b]),b++;break}return d!==void 0&&u.push(d),u}const Eh=Array.prototype.push;function zy(e,t,i,s){const n=Ni(t,i,s);let o=!1,r=0;for(let a=0;a<e.length;a++){const l=e[a];if(l.index+=r,o)continue;const c=Ny(n.index,n.index+n.removed.length,l.index,l.index+l.addedCount);if(c>=0){e.splice(a,1),a--,r-=l.addedCount-l.removed.length,n.addedCount+=l.addedCount-c;const u=n.removed.length+l.removed.length-c;if(!n.addedCount&&!u)o=!0;else{let d=l.removed;if(n.index<l.index){const f=n.removed.slice(0,l.index-n.index);Eh.apply(f,d),d=f}if(n.index+n.removed.length>l.index+l.addedCount){const f=n.removed.slice(l.index+l.addedCount-n.index);Eh.apply(d,f)}n.removed=d,l.index<n.index&&(n.index=l.index)}}else if(n.index<l.index){o=!0,e.splice(a,0,n),a++;const u=n.addedCount-n.removed.length;l.index+=u,r+=u}}o||e.push(n)}function By(e){const t=[];for(let i=0,s=e.length;i<s;i++){const n=e[i];zy(t,n.index,n.removed,n.addedCount)}return t}function jy(e,t){let i=[];const s=By(t);for(let n=0,o=s.length;n<o;++n){const r=s[n];if(r.addedCount===1&&r.removed.length===1){r.removed[0]!==e[r.index]&&i.push(r);continue}i=i.concat(Wp(e,r.index,r.index+r.addedCount,r.removed,0,r.removed.length))}return i}let Oh=!1;function Ic(e,t){let i=e.index;const s=t.length;return i>s?i=s-e.addedCount:i<0&&(i=s+e.removed.length+i-e.addedCount),i<0&&(i=0),e.index=i,e}class Yy extends za{constructor(t){super(t),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(t,"$fastController",{value:this,enumerable:!1})}subscribe(t){this.flush(),super.subscribe(t)}addSplice(t){this.splices===void 0?this.splices=[t]:this.splices.push(t),this.needsQueue&&(this.needsQueue=!1,de.queueUpdate(this))}reset(t){this.oldCollection=t,this.needsQueue&&(this.needsQueue=!1,de.queueUpdate(this))}flush(){const t=this.splices,i=this.oldCollection;if(t===void 0&&i===void 0)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const s=i===void 0?jy(this.source,t):Wp(this.source,0,this.source.length,i,0,i.length);this.notify(s)}}function Uy(){if(Oh)return;Oh=!0,ue.setArrayObserverFactory(l=>new Yy(l));const e=Array.prototype;if(e.$fastPatch)return;Reflect.defineProperty(e,"$fastPatch",{value:1,enumerable:!1});const t=e.pop,i=e.push,s=e.reverse,n=e.shift,o=e.sort,r=e.splice,a=e.unshift;e.pop=function(){const l=this.length>0,c=t.apply(this,arguments),u=this.$fastController;return u!==void 0&&l&&u.addSplice(Ni(this.length,[c],0)),c},e.push=function(){const l=i.apply(this,arguments),c=this.$fastController;return c!==void 0&&c.addSplice(Ic(Ni(this.length-arguments.length,[],arguments.length),this)),l},e.reverse=function(){let l;const c=this.$fastController;c!==void 0&&(c.flush(),l=this.slice());const u=s.apply(this,arguments);return c!==void 0&&c.reset(l),u},e.shift=function(){const l=this.length>0,c=n.apply(this,arguments),u=this.$fastController;return u!==void 0&&l&&u.addSplice(Ni(0,[c],0)),c},e.sort=function(){let l;const c=this.$fastController;c!==void 0&&(c.flush(),l=this.slice());const u=o.apply(this,arguments);return c!==void 0&&c.reset(l),u},e.splice=function(){const l=r.apply(this,arguments),c=this.$fastController;return c!==void 0&&c.addSplice(Ic(Ni(+arguments[0],l,arguments.length>2?arguments.length-2:0),this)),l},e.unshift=function(){const l=a.apply(this,arguments),c=this.$fastController;return c!==void 0&&c.addSplice(Ic(Ni(0,[],arguments.length),this)),l}}class Wy{constructor(t,i){this.target=t,this.propertyName=i}bind(t){t[this.propertyName]=this.target}unbind(){}}function Ee(e){return new Yu("fast-ref",Wy,e)}const Gp=e=>typeof e=="function",Gy=()=>null;function Ph(e){return e===void 0?Gy:Gp(e)?e:()=>e}function ft(e,t,i){const s=Gp(e)?e:()=>e,n=Ph(t),o=Ph(i);return(r,a)=>s(r,a)?n(r,a):o(r,a)}const Lh=Object.freeze({positioning:!1,recycle:!0});function qy(e,t,i,s){e.bind(t[i],s)}function Zy(e,t,i,s){const n=Object.create(s);n.index=i,n.length=t.length,e.bind(t[i],n)}class Xy{constructor(t,i,s,n,o,r){this.location=t,this.itemsBinding=i,this.templateBinding=n,this.options=r,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=qy,this.itemsBindingObserver=ue.binding(i,this,s),this.templateBindingObserver=ue.binding(n,this,o),r.positioning&&(this.bindView=Zy)}bind(t,i){this.source=t,this.originalContext=i,this.childContext=Object.create(i),this.childContext.parent=t,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(t,this.originalContext),this.template=this.templateBindingObserver.observe(t,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,this.itemsObserver!==null&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(t,i){t===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):t===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(i)}observeItems(t=!1){if(!this.items){this.items=Tn;return}const i=this.itemsObserver,s=this.itemsObserver=ue.getNotifier(this.items),n=i!==s;n&&i!==null&&i.unsubscribe(this),(n||t)&&s.subscribe(this)}updateViews(t){const i=this.childContext,s=this.views,n=this.bindView,o=this.items,r=this.template,a=this.options.recycle,l=[];let c=0,u=0;for(let d=0,f=t.length;d<f;++d){const b=t[d],$=b.removed;let x=0,_=b.index;const R=_+b.addedCount,N=s.splice(b.index,$.length),ne=u=l.length+N.length;for(;_<R;++_){const U=s[_],me=U?U.firstChild:this.location;let De;a&&u>0?(x<=ne&&N.length>0?(De=N[x],x++):(De=l[c],c++),u--):De=r.create(),s.splice(_,0,De),n(De,o,_,i),De.insertBefore(me)}N[x]&&l.push(...N.slice(x))}for(let d=c,f=l.length;d<f;++d)l[d].dispose();if(this.options.positioning)for(let d=0,f=s.length;d<f;++d){const b=s[d].context;b.length=f,b.index=d}}refreshAllViews(t=!1){const i=this.items,s=this.childContext,n=this.template,o=this.location,r=this.bindView;let a=i.length,l=this.views,c=l.length;if((a===0||t||!this.options.recycle)&&(Vp.disposeContiguousBatch(l),c=0),c===0){this.views=l=new Array(a);for(let u=0;u<a;++u){const d=n.create();r(d,i,u,s),l[u]=d,d.insertBefore(o)}}else{let u=0;for(;u<a;++u)if(u<c){const f=l[u];r(f,i,u,s)}else{const f=n.create();r(f,i,u,s),l.push(f),f.insertBefore(o)}const d=l.splice(u,c-u);for(u=0,a=d.length;u<a;++u)d[u].dispose()}}unbindAllViews(){const t=this.views;for(let i=0,s=t.length;i<s;++i)t[i].unbind()}}class Xu extends cl{constructor(t,i,s){super(),this.itemsBinding=t,this.templateBinding=i,this.options=s,this.createPlaceholder=de.createBlockPlaceholder,Uy(),this.isItemsBindingVolatile=ue.isVolatileBinding(t),this.isTemplateBindingVolatile=ue.isVolatileBinding(i)}createBehavior(t){return new Xy(t,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}function ho(e,t,i=Lh){const s=typeof t=="function"?t:()=>t;return new Xu(e,s,Object.assign(Object.assign({},Lh),i))}function Cs(e){return e?function(t,i,s){return t.nodeType===1&&t.matches(e)}:function(t,i,s){return t.nodeType===1}}class qp{constructor(t,i){this.target=t,this.options=i,this.source=null}bind(t){const i=this.options.property;this.shouldUpdate=ue.getAccessors(t).some(s=>s.name===i),this.source=t,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(Tn),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let t=this.getNodes();return this.options.filter!==void 0&&(t=t.filter(this.options.filter)),t}updateTarget(t){this.source[this.options.property]=t}}class Qy extends qp{constructor(t,i){super(t,i)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function it(e){return typeof e=="string"&&(e={property:e}),new Yu("fast-slotted",Qy,e)}class Jy extends qp{constructor(t,i){super(t,i),this.observer=null,i.childList=!0}observe(){this.observer===null&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function hl(e){return typeof e=="string"&&(e={property:e}),new Yu("fast-children",Jy,e)}class oi{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const Qt=(e,t)=>A`
    <span
        part="end"
        ${Ee("endContainer")}
        class=${i=>t.end?"end":void 0}
    >
        <slot name="end" ${Ee("end")} @slotchange="${i=>i.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,Jt=(e,t)=>A`
    <span
        part="start"
        ${Ee("startContainer")}
        class="${i=>t.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Ee("start")}
            @slotchange="${i=>i.handleStartContentChange()}"
        >
            ${t.start||""}
        </slot>
    </span>
`,Ky=A`
    <span part="end" ${Ee("endContainer")}>
        <slot
            name="end"
            ${Ee("end")}
            @slotchange="${e=>e.handleEndContentChange()}"
        ></slot>
    </span>
`,e0=A`
    <span part="start" ${Ee("startContainer")}>
        <slot
            name="start"
            ${Ee("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        ></slot>
    </span>
`,t0=(e,t)=>A`
    <template class="${i=>i.expanded?"expanded":""}">
        <div
            class="heading"
            part="heading"
            role="heading"
            aria-level="${i=>i.headinglevel}"
        >
            <button
                class="button"
                part="button"
                ${Ee("expandbutton")}
                aria-expanded="${i=>i.expanded}"
                aria-controls="${i=>i.id}-panel"
                id="${i=>i.id}"
                @click="${(i,s)=>i.clickHandler(s.event)}"
            >
                <span class="heading-content" part="heading-content">
                    <slot name="heading"></slot>
                </span>
            </button>
            ${Jt(e,t)}
            ${Qt(e,t)}
            <span class="icon" part="icon" aria-hidden="true">
                <slot name="expanded-icon" part="expanded-icon">
                    ${t.expandedIcon||""}
                </slot>
                <slot name="collapsed-icon" part="collapsed-icon">
                    ${t.collapsedIcon||""}
                </slot>
            <span>
        </div>
        <div
            class="region"
            part="region"
            id="${i=>i.id}-panel"
            role="region"
            aria-labelledby="${i=>i.id}"
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
***************************************************************************** */function h(e,t,i,s){var n=arguments.length,o=n<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,i):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o}const Tc=new Map;"metadata"in Reflect||(Reflect.metadata=function(e,t){return function(i){Reflect.defineMetadata(e,t,i)}},Reflect.defineMetadata=function(e,t,i){let s=Tc.get(i);s===void 0&&Tc.set(i,s=new Map),s.set(e,t)},Reflect.getOwnMetadata=function(e,t){const i=Tc.get(t);if(i!==void 0)return i.get(e)});class i0{constructor(t,i){this.container=t,this.key=i}instance(t){return this.registerResolver(0,t)}singleton(t){return this.registerResolver(1,t)}transient(t){return this.registerResolver(2,t)}callback(t){return this.registerResolver(3,t)}cachedCallback(t){return this.registerResolver(3,Xp(t))}aliasTo(t){return this.registerResolver(5,t)}registerResolver(t,i){const{container:s,key:n}=this;return this.container=this.key=void 0,s.registerResolver(n,new ki(n,t,i))}}function qo(e){const t=e.slice(),i=Object.keys(e),s=i.length;let n;for(let o=0;o<s;++o)n=i[o],Qp(n)||(t[n]=e[n]);return t}const s0=Object.freeze({none(e){throw Error(`${e.toString()} not registered, did you forget to add @singleton()?`)},singleton(e){return new ki(e,1,e)},transient(e){return new ki(e,2,e)}}),Fc=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:s0.singleton})}),Ah=new Map;function Mh(e){return t=>Reflect.getOwnMetadata(e,t)}let Vh=null;const ht=Object.freeze({createContainer(e){return new cr(null,Object.assign({},Fc.default,e))},findResponsibleContainer(e){const t=e.$$container$$;return t&&t.responsibleForOwnerRequests?t:ht.findParentContainer(e)},findParentContainer(e){const t=new CustomEvent(Zp,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return e.dispatchEvent(t),t.detail.container||ht.getOrCreateDOMContainer()},getOrCreateDOMContainer(e,t){return e?e.$$container$$||new cr(e,Object.assign({},Fc.default,t,{parentLocator:ht.findParentContainer})):Vh||(Vh=new cr(null,Object.assign({},Fc.default,t,{parentLocator:()=>null})))},getDesignParamtypes:Mh("design:paramtypes"),getAnnotationParamtypes:Mh("di:paramtypes"),getOrCreateAnnotationParamTypes(e){let t=this.getAnnotationParamtypes(e);return t===void 0&&Reflect.defineMetadata("di:paramtypes",t=[],e),t},getDependencies(e){let t=Ah.get(e);if(t===void 0){const i=e.inject;if(i===void 0){const s=ht.getDesignParamtypes(e),n=ht.getAnnotationParamtypes(e);if(s===void 0)if(n===void 0){const o=Object.getPrototypeOf(e);typeof o=="function"&&o!==Function.prototype?t=qo(ht.getDependencies(o)):t=[]}else t=qo(n);else if(n===void 0)t=qo(s);else{t=qo(s);let o=n.length,r;for(let c=0;c<o;++c)r=n[c],r!==void 0&&(t[c]=r);const a=Object.keys(n);o=a.length;let l;for(let c=0;c<o;++c)l=a[c],Qp(l)||(t[l]=n[l])}}else t=qo(i);Ah.set(e,t)}return t},defineProperty(e,t,i,s=!1){const n=`$di_${t}`;Reflect.defineProperty(e,t,{get:function(){let o=this[n];if(o===void 0&&(o=(this instanceof HTMLElement?ht.findResponsibleContainer(this):ht.getOrCreateDOMContainer()).get(i),this[n]=o,s&&this instanceof dl)){const a=this.$fastController,l=()=>{const u=ht.findResponsibleContainer(this).get(i),d=this[n];u!==d&&(this[n]=o,a.notify(t))};a.subscribe({handleChange:l},"isConnected")}return o}})},createInterface(e,t){const i=typeof e=="function"?e:t,s=typeof e=="string"?e:e&&"friendlyName"in e&&e.friendlyName||Bh,n=typeof e=="string"?!1:e&&"respectConnection"in e&&e.respectConnection||!1,o=function(r,a,l){if(r==null||new.target!==void 0)throw new Error(`No registration for interface: '${o.friendlyName}'`);if(a)ht.defineProperty(r,a,o,n);else{const c=ht.getOrCreateAnnotationParamTypes(r);c[l]=o}};return o.$isInterface=!0,o.friendlyName=s??"(anonymous)",i!=null&&(o.register=function(r,a){return i(new i0(r,a??o))}),o.toString=function(){return`InterfaceSymbol<${o.friendlyName}>`},o},inject(...e){return function(t,i,s){if(typeof s=="number"){const n=ht.getOrCreateAnnotationParamTypes(t),o=e[0];o!==void 0&&(n[s]=o)}else if(i)ht.defineProperty(t,i,e[0]);else{const n=s?ht.getOrCreateAnnotationParamTypes(s.value):ht.getOrCreateAnnotationParamTypes(t);let o;for(let r=0;r<e.length;++r)o=e[r],o!==void 0&&(n[r]=o)}}},transient(e){return e.register=function(i){return wr.transient(e,e).register(i)},e.registerInRequestor=!1,e},singleton(e,t=o0){return e.register=function(s){return wr.singleton(e,e).register(s)},e.registerInRequestor=t.scoped,e}}),n0=ht.createInterface("Container");ht.inject;const o0={scoped:!1};class ki{constructor(t,i,s){this.key=t,this.strategy=i,this.state=s,this.resolving=!1}get $isResolver(){return!0}register(t){return t.registerResolver(this.key,this)}resolve(t,i){switch(this.strategy){case 0:return this.state;case 1:{if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=t.getFactory(this.state).construct(i),this.strategy=0,this.resolving=!1,this.state}case 2:{const s=t.getFactory(this.state);if(s===null)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return s.construct(i)}case 3:return this.state(t,i,this);case 4:return this.state[0].resolve(t,i);case 5:return i.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(t){var i,s,n;switch(this.strategy){case 1:case 2:return t.getFactory(this.state);case 5:return(n=(s=(i=t.getResolver(this.state))===null||i===void 0?void 0:i.getFactory)===null||s===void 0?void 0:s.call(i,t))!==null&&n!==void 0?n:null;default:return null}}}function Hh(e){return this.get(e)}function r0(e,t){return t(e)}class a0{constructor(t,i){this.Type=t,this.dependencies=i,this.transformers=null}construct(t,i){let s;return i===void 0?s=new this.Type(...this.dependencies.map(Hh,t)):s=new this.Type(...this.dependencies.map(Hh,t),...i),this.transformers==null?s:this.transformers.reduce(r0,s)}registerTransformer(t){(this.transformers||(this.transformers=[])).push(t)}}const l0={$isResolver:!0,resolve(e,t){return t}};function Ra(e){return typeof e.register=="function"}function c0(e){return Ra(e)&&typeof e.registerInRequestor=="boolean"}function Nh(e){return c0(e)&&e.registerInRequestor}function u0(e){return e.prototype!==void 0}const d0=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),Zp="__DI_LOCATE_PARENT__",Dc=new Map;class cr{constructor(t,i){this.owner=t,this.config=i,this._parent=void 0,this.registerDepth=0,this.context=null,t!==null&&(t.$$container$$=this),this.resolvers=new Map,this.resolvers.set(n0,l0),t instanceof Node&&t.addEventListener(Zp,s=>{s.composedPath()[0]!==this.owner&&(s.detail.container=this,s.stopImmediatePropagation())})}get parent(){return this._parent===void 0&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return this.parent===null?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(t,...i){return this.context=t,this.register(...i),this.context=null,this}register(...t){if(++this.registerDepth===100)throw new Error("Unable to autoregister dependency");let i,s,n,o,r;const a=this.context;for(let l=0,c=t.length;l<c;++l)if(i=t[l],!!jh(i))if(Ra(i))i.register(this,a);else if(u0(i))wr.singleton(i,i).register(this);else for(s=Object.keys(i),o=0,r=s.length;o<r;++o)n=i[s[o]],jh(n)&&(Ra(n)?n.register(this,a):this.register(n));return--this.registerDepth,this}registerResolver(t,i){oa(t);const s=this.resolvers,n=s.get(t);return n==null?s.set(t,i):n instanceof ki&&n.strategy===4?n.state.push(i):s.set(t,new ki(t,4,[n,i])),i}registerTransformer(t,i){const s=this.getResolver(t);if(s==null)return!1;if(s.getFactory){const n=s.getFactory(this);return n==null?!1:(n.registerTransformer(i),!0)}return!1}getResolver(t,i=!0){if(oa(t),t.resolve!==void 0)return t;let s=this,n;for(;s!=null;)if(n=s.resolvers.get(t),n==null){if(s.parent==null){const o=Nh(t)?this:s;return i?this.jitRegister(t,o):null}s=s.parent}else return n;return null}has(t,i=!1){return this.resolvers.has(t)?!0:i&&this.parent!=null?this.parent.has(t,!0):!1}get(t){if(oa(t),t.$isResolver)return t.resolve(this,this);let i=this,s;for(;i!=null;)if(s=i.resolvers.get(t),s==null){if(i.parent==null){const n=Nh(t)?this:i;return s=this.jitRegister(t,n),s.resolve(i,this)}i=i.parent}else return s.resolve(i,this);throw new Error(`Unable to resolve key: ${t}`)}getAll(t,i=!1){oa(t);const s=this;let n=s,o;if(i){let r=Tn;for(;n!=null;)o=n.resolvers.get(t),o!=null&&(r=r.concat(zh(o,n,s))),n=n.parent;return r}else for(;n!=null;)if(o=n.resolvers.get(t),o==null){if(n=n.parent,n==null)return Tn}else return zh(o,n,s);return Tn}getFactory(t){let i=Dc.get(t);if(i===void 0){if(h0(t))throw new Error(`${t.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);Dc.set(t,i=new a0(t,ht.getDependencies(t)))}return i}registerFactory(t,i){Dc.set(t,i)}createChild(t){return new cr(null,Object.assign({},this.config,t,{parentLocator:()=>this}))}jitRegister(t,i){if(typeof t!="function")throw new Error(`Attempted to jitRegister something that is not a constructor: '${t}'. Did you forget to register this dependency?`);if(d0.has(t.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${t.name}. Did you forget to add @inject(Key)`);if(Ra(t)){const s=t.register(i);if(!(s instanceof Object)||s.resolve==null){const n=i.resolvers.get(t);if(n!=null)return n;throw new Error("A valid resolver was not returned from the static register method")}return s}else{if(t.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${t.friendlyName}`);{const s=this.config.defaultResolver(t,i);return i.resolvers.set(t,s),s}}}}const Rc=new WeakMap;function Xp(e){return function(t,i,s){if(Rc.has(s))return Rc.get(s);const n=e(t,i,s);return Rc.set(s,n),n}}const wr=Object.freeze({instance(e,t){return new ki(e,0,t)},singleton(e,t){return new ki(e,1,t)},transient(e,t){return new ki(e,2,t)},callback(e,t){return new ki(e,3,t)},cachedCallback(e,t){return new ki(e,3,Xp(t))},aliasTo(e,t){return new ki(t,5,e)}});function oa(e){if(e==null)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function zh(e,t,i){if(e instanceof ki&&e.strategy===4){const s=e.state;let n=s.length;const o=new Array(n);for(;n--;)o[n]=s[n].resolve(t,i);return o}return[e.resolve(t,i)]}const Bh="(anonymous)";function jh(e){return typeof e=="object"&&e!==null||typeof e=="function"}const h0=function(){const e=new WeakMap;let t=!1,i="",s=0;return function(n){return t=e.get(n),t===void 0&&(i=n.toString(),s=i.length,t=s>=29&&s<=100&&i.charCodeAt(s-1)===125&&i.charCodeAt(s-2)<=32&&i.charCodeAt(s-3)===93&&i.charCodeAt(s-4)===101&&i.charCodeAt(s-5)===100&&i.charCodeAt(s-6)===111&&i.charCodeAt(s-7)===99&&i.charCodeAt(s-8)===32&&i.charCodeAt(s-9)===101&&i.charCodeAt(s-10)===118&&i.charCodeAt(s-11)===105&&i.charCodeAt(s-12)===116&&i.charCodeAt(s-13)===97&&i.charCodeAt(s-14)===110&&i.charCodeAt(s-15)===88,e.set(n,t)),t}}(),ra={};function Qp(e){switch(typeof e){case"number":return e>=0&&(e|0)===e;case"string":{const t=ra[e];if(t!==void 0)return t;const i=e.length;if(i===0)return ra[e]=!1;let s=0;for(let n=0;n<i;++n)if(s=e.charCodeAt(n),n===0&&s===48&&i>1||s<48||s>57)return ra[e]=!1;return ra[e]=!0}default:return!1}}function Yh(e){return`${e.toLowerCase()}:presentation`}const aa=new Map,Jp=Object.freeze({define(e,t,i){const s=Yh(e);aa.get(s)===void 0?aa.set(s,t):aa.set(s,!1),i.register(wr.instance(s,t))},forTag(e,t){const i=Yh(e),s=aa.get(i);return s===!1?ht.findResponsibleContainer(t).get(i):s||null}});class f0{constructor(t,i){this.template=t||null,this.styles=i===void 0?null:Array.isArray(i)?Xt.create(i):i instanceof Xt?i:Xt.create([i])}applyTo(t){const i=t.$fastController;i.template===null&&(i.template=this.template),i.styles===null&&(i.styles=this.styles)}}class fe extends dl{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return this._presentation===void 0&&(this._presentation=Jp.forTag(this.tagName,this)),this._presentation}templateChanged(){this.template!==void 0&&(this.$fastController.template=this.template)}stylesChanged(){this.styles!==void 0&&(this.$fastController.styles=this.styles)}connectedCallback(){this.$presentation!==null&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(t){return(i={})=>new p0(this===fe?class extends fe{}:this,t,i)}}h([k],fe.prototype,"template",void 0);h([k],fe.prototype,"styles",void 0);function Zo(e,t,i){return typeof e=="function"?e(t,i):e}class p0{constructor(t,i,s){this.type=t,this.elementDefinition=i,this.overrideDefinition=s,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(t,i){const s=this.definition,n=this.overrideDefinition,r=`${s.prefix||i.elementPrefix}-${s.baseName}`;i.tryDefineElement({name:r,type:this.type,baseClass:this.elementDefinition.baseClass,callback:a=>{const l=new f0(Zo(s.template,a,s),Zo(s.styles,a,s));a.definePresentation(l);let c=Zo(s.shadowOptions,a,s);a.shadowRootMode&&(c?n.shadowOptions||(c.mode=a.shadowRootMode):c!==null&&(c={mode:a.shadowRootMode})),a.defineElement({elementOptions:Zo(s.elementOptions,a,s),shadowOptions:c,attributes:Zo(s.attributes,a,s)})}})}}function ot(e,...t){const i=Ba.locate(e);t.forEach(s=>{Object.getOwnPropertyNames(s.prototype).forEach(o=>{o!=="constructor"&&Object.defineProperty(e.prototype,o,Object.getOwnPropertyDescriptor(s.prototype,o))}),Ba.locate(s).forEach(o=>i.push(o))})}class On extends fe{constructor(){super(...arguments),this.headinglevel=2,this.expanded=!1,this.clickHandler=t=>{this.expanded=!this.expanded,this.change()},this.change=()=>{this.$emit("change")}}}h([p({attribute:"heading-level",mode:"fromView",converter:q})],On.prototype,"headinglevel",void 0);h([p({mode:"boolean"})],On.prototype,"expanded",void 0);h([p],On.prototype,"id",void 0);ot(On,oi);const g0=(e,t)=>A`
    <template>
        <slot ${it({property:"accordionItems",filter:Cs()})}></slot>
        <slot name="item" part="item" ${it("accordionItems")}></slot>
    </template>
`,bt={horizontal:"horizontal",vertical:"vertical"};function m0(e,t){let i=e.length;for(;i--;)if(t(e[i],i,e))return i;return-1}function v0(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function ko(...e){return e.every(t=>t instanceof HTMLElement)}function b0(e,t){return!e||!t||!ko(e)?void 0:Array.from(e.querySelectorAll(t)).filter(s=>s.offsetParent!==null)}function y0(){const e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}let vn;function x0(){if(typeof vn=="boolean")return vn;if(!v0())return vn=!1,vn;const e=document.createElement("style"),t=y0();t!==null&&e.setAttribute("nonce",t),document.head.appendChild(e);try{e.sheet.insertRule("foo:focus-visible {color:inherit}",0),vn=!0}catch{vn=!1}finally{document.head.removeChild(e)}return vn}const Uh="focus",Wh="focusin",So="focusout",Co="keydown",Gh="resize",qh="scroll";var Zh;(function(e){e[e.alt=18]="alt",e[e.arrowDown=40]="arrowDown",e[e.arrowLeft=37]="arrowLeft",e[e.arrowRight=39]="arrowRight",e[e.arrowUp=38]="arrowUp",e[e.back=8]="back",e[e.backSlash=220]="backSlash",e[e.break=19]="break",e[e.capsLock=20]="capsLock",e[e.closeBracket=221]="closeBracket",e[e.colon=186]="colon",e[e.colon2=59]="colon2",e[e.comma=188]="comma",e[e.ctrl=17]="ctrl",e[e.delete=46]="delete",e[e.end=35]="end",e[e.enter=13]="enter",e[e.equals=187]="equals",e[e.equals2=61]="equals2",e[e.equals3=107]="equals3",e[e.escape=27]="escape",e[e.forwardSlash=191]="forwardSlash",e[e.function1=112]="function1",e[e.function10=121]="function10",e[e.function11=122]="function11",e[e.function12=123]="function12",e[e.function2=113]="function2",e[e.function3=114]="function3",e[e.function4=115]="function4",e[e.function5=116]="function5",e[e.function6=117]="function6",e[e.function7=118]="function7",e[e.function8=119]="function8",e[e.function9=120]="function9",e[e.home=36]="home",e[e.insert=45]="insert",e[e.menu=93]="menu",e[e.minus=189]="minus",e[e.minus2=109]="minus2",e[e.numLock=144]="numLock",e[e.numPad0=96]="numPad0",e[e.numPad1=97]="numPad1",e[e.numPad2=98]="numPad2",e[e.numPad3=99]="numPad3",e[e.numPad4=100]="numPad4",e[e.numPad5=101]="numPad5",e[e.numPad6=102]="numPad6",e[e.numPad7=103]="numPad7",e[e.numPad8=104]="numPad8",e[e.numPad9=105]="numPad9",e[e.numPadDivide=111]="numPadDivide",e[e.numPadDot=110]="numPadDot",e[e.numPadMinus=109]="numPadMinus",e[e.numPadMultiply=106]="numPadMultiply",e[e.numPadPlus=107]="numPadPlus",e[e.openBracket=219]="openBracket",e[e.pageDown=34]="pageDown",e[e.pageUp=33]="pageUp",e[e.period=190]="period",e[e.print=44]="print",e[e.quote=222]="quote",e[e.scrollLock=145]="scrollLock",e[e.shift=16]="shift",e[e.space=32]="space",e[e.tab=9]="tab",e[e.tilde=192]="tilde",e[e.windowsLeft=91]="windowsLeft",e[e.windowsOpera=219]="windowsOpera",e[e.windowsRight=92]="windowsRight"})(Zh||(Zh={}));const Fi="ArrowDown",nn="ArrowLeft",on="ArrowRight",Di="ArrowUp",Ds="Enter",Ao="Escape",cs="Home",us="End",w0="F2",$0="PageDown",_0="PageUp",Vn=" ",fl="Tab",ao={ArrowDown:Fi,ArrowLeft:nn,ArrowRight:on,ArrowUp:Di};var Qe;(function(e){e.ltr="ltr",e.rtl="rtl"})(Qe||(Qe={}));function k0(e,t,i){return i<e?t:i>t?e:i}function pl(e,t,i){return Math.min(Math.max(i,e),t)}function la(e,t,i=0){return[t,i]=[t,i].sort((s,n)=>s-n),t<=e&&e<i}let S0=0;function $r(e=""){return`${e}${S0++}`}var m;(function(e){e.Canvas="Canvas",e.CanvasText="CanvasText",e.LinkText="LinkText",e.VisitedText="VisitedText",e.ActiveText="ActiveText",e.ButtonFace="ButtonFace",e.ButtonText="ButtonText",e.Field="Field",e.FieldText="FieldText",e.Highlight="Highlight",e.HighlightText="HighlightText",e.GrayText="GrayText"})(m||(m={}));const Xh={single:"single",multi:"multi"};class Qu extends fe{constructor(){super(...arguments),this.expandmode=Xh.multi,this.activeItemIndex=0,this.change=()=>{this.$emit("change",this.activeid)},this.setItems=()=>{var t;this.accordionItems.length!==0&&(this.accordionIds=this.getItemIds(),this.accordionItems.forEach((i,s)=>{i instanceof On&&(i.addEventListener("change",this.activeItemChange),this.isSingleExpandMode()&&(this.activeItemIndex!==s?i.expanded=!1:i.expanded=!0));const n=this.accordionIds[s];i.setAttribute("id",typeof n!="string"?`accordion-${s+1}`:n),this.activeid=this.accordionIds[this.activeItemIndex],i.addEventListener("keydown",this.handleItemKeyDown),i.addEventListener("focus",this.handleItemFocus)}),this.isSingleExpandMode()&&((t=this.findExpandedItem())!==null&&t!==void 0?t:this.accordionItems[0]).setAttribute("aria-disabled","true"))},this.removeItemListeners=t=>{t.forEach((i,s)=>{i.removeEventListener("change",this.activeItemChange),i.removeEventListener("keydown",this.handleItemKeyDown),i.removeEventListener("focus",this.handleItemFocus)})},this.activeItemChange=t=>{if(t.defaultPrevented||t.target!==t.currentTarget)return;t.preventDefault();const i=t.target;this.activeid=i.getAttribute("id"),this.isSingleExpandMode()&&(this.resetItems(),i.expanded=!0,i.setAttribute("aria-disabled","true"),this.accordionItems.forEach(s=>{!s.hasAttribute("disabled")&&s.id!==this.activeid&&s.removeAttribute("aria-disabled")})),this.activeItemIndex=Array.from(this.accordionItems).indexOf(i),this.change()},this.handleItemKeyDown=t=>{if(t.target===t.currentTarget)switch(this.accordionIds=this.getItemIds(),t.key){case Di:t.preventDefault(),this.adjust(-1);break;case Fi:t.preventDefault(),this.adjust(1);break;case cs:this.activeItemIndex=0,this.focusItem();break;case us:this.activeItemIndex=this.accordionItems.length-1,this.focusItem();break}},this.handleItemFocus=t=>{if(t.target===t.currentTarget){const i=t.target,s=this.activeItemIndex=Array.from(this.accordionItems).indexOf(i);this.activeItemIndex!==s&&s!==-1&&(this.activeItemIndex=s,this.activeid=this.accordionIds[this.activeItemIndex])}}}accordionItemsChanged(t,i){this.$fastController.isConnected&&(this.removeItemListeners(t),this.setItems())}findExpandedItem(){for(let t=0;t<this.accordionItems.length;t++)if(this.accordionItems[t].getAttribute("expanded")==="true")return this.accordionItems[t];return null}resetItems(){this.accordionItems.forEach((t,i)=>{t.expanded=!1})}getItemIds(){return this.accordionItems.map(t=>t.getAttribute("id"))}isSingleExpandMode(){return this.expandmode===Xh.single}adjust(t){this.activeItemIndex=k0(0,this.accordionItems.length-1,this.activeItemIndex+t),this.focusItem()}focusItem(){const t=this.accordionItems[this.activeItemIndex];t instanceof On&&t.expandbutton.focus()}}h([p({attribute:"expand-mode"})],Qu.prototype,"expandmode",void 0);h([k],Qu.prototype,"accordionItems",void 0);const Kp=(e,t)=>A`
    <a
        class="control"
        part="control"
        download="${i=>i.download}"
        href="${i=>i.href}"
        hreflang="${i=>i.hreflang}"
        ping="${i=>i.ping}"
        referrerpolicy="${i=>i.referrerpolicy}"
        rel="${i=>i.rel}"
        target="${i=>i.target}"
        type="${i=>i.type}"
        aria-atomic="${i=>i.ariaAtomic}"
        aria-busy="${i=>i.ariaBusy}"
        aria-controls="${i=>i.ariaControls}"
        aria-current="${i=>i.ariaCurrent}"
        aria-describedby="${i=>i.ariaDescribedby}"
        aria-details="${i=>i.ariaDetails}"
        aria-disabled="${i=>i.ariaDisabled}"
        aria-errormessage="${i=>i.ariaErrormessage}"
        aria-expanded="${i=>i.ariaExpanded}"
        aria-flowto="${i=>i.ariaFlowto}"
        aria-haspopup="${i=>i.ariaHaspopup}"
        aria-hidden="${i=>i.ariaHidden}"
        aria-invalid="${i=>i.ariaInvalid}"
        aria-keyshortcuts="${i=>i.ariaKeyshortcuts}"
        aria-label="${i=>i.ariaLabel}"
        aria-labelledby="${i=>i.ariaLabelledby}"
        aria-live="${i=>i.ariaLive}"
        aria-owns="${i=>i.ariaOwns}"
        aria-relevant="${i=>i.ariaRelevant}"
        aria-roledescription="${i=>i.ariaRoledescription}"
        ${Ee("control")}
    >
        ${Jt(e,t)}
        <span class="content" part="content">
            <slot ${it("defaultSlottedContent")}></slot>
        </span>
        ${Qt(e,t)}
    </a>
`;class Je{}h([p({attribute:"aria-atomic"})],Je.prototype,"ariaAtomic",void 0);h([p({attribute:"aria-busy"})],Je.prototype,"ariaBusy",void 0);h([p({attribute:"aria-controls"})],Je.prototype,"ariaControls",void 0);h([p({attribute:"aria-current"})],Je.prototype,"ariaCurrent",void 0);h([p({attribute:"aria-describedby"})],Je.prototype,"ariaDescribedby",void 0);h([p({attribute:"aria-details"})],Je.prototype,"ariaDetails",void 0);h([p({attribute:"aria-disabled"})],Je.prototype,"ariaDisabled",void 0);h([p({attribute:"aria-errormessage"})],Je.prototype,"ariaErrormessage",void 0);h([p({attribute:"aria-flowto"})],Je.prototype,"ariaFlowto",void 0);h([p({attribute:"aria-haspopup"})],Je.prototype,"ariaHaspopup",void 0);h([p({attribute:"aria-hidden"})],Je.prototype,"ariaHidden",void 0);h([p({attribute:"aria-invalid"})],Je.prototype,"ariaInvalid",void 0);h([p({attribute:"aria-keyshortcuts"})],Je.prototype,"ariaKeyshortcuts",void 0);h([p({attribute:"aria-label"})],Je.prototype,"ariaLabel",void 0);h([p({attribute:"aria-labelledby"})],Je.prototype,"ariaLabelledby",void 0);h([p({attribute:"aria-live"})],Je.prototype,"ariaLive",void 0);h([p({attribute:"aria-owns"})],Je.prototype,"ariaOwns",void 0);h([p({attribute:"aria-relevant"})],Je.prototype,"ariaRelevant",void 0);h([p({attribute:"aria-roledescription"})],Je.prototype,"ariaRoledescription",void 0);let gi=class extends fe{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((t=this.$fastController.definition.shadowOptions)===null||t===void 0)&&t.delegatesFocus)&&(this.focus=()=>{var i;(i=this.control)===null||i===void 0||i.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}};h([p],gi.prototype,"download",void 0);h([p],gi.prototype,"href",void 0);h([p],gi.prototype,"hreflang",void 0);h([p],gi.prototype,"ping",void 0);h([p],gi.prototype,"referrerpolicy",void 0);h([p],gi.prototype,"rel",void 0);h([p],gi.prototype,"target",void 0);h([p],gi.prototype,"type",void 0);h([k],gi.prototype,"defaultSlottedContent",void 0);class gl{}h([p({attribute:"aria-expanded"})],gl.prototype,"ariaExpanded",void 0);ot(gl,Je);ot(gi,oi,gl);const C0=(e,t)=>A`
    <template class="${i=>i.initialLayoutComplete?"loaded":""}">
        ${ft(i=>i.initialLayoutComplete,A`
                <slot></slot>
            `)}
    </template>
`,Pn=e=>{const t=e.closest("[dir]");return t!==null&&t.dir==="rtl"?Qe.rtl:Qe.ltr};class I0{constructor(){this.intersectionDetector=null,this.observedElements=new Map,this.requestPosition=(t,i)=>{var s;if(this.intersectionDetector!==null){if(this.observedElements.has(t)){(s=this.observedElements.get(t))===null||s===void 0||s.push(i);return}this.observedElements.set(t,[i]),this.intersectionDetector.observe(t)}},this.cancelRequestPosition=(t,i)=>{const s=this.observedElements.get(t);if(s!==void 0){const n=s.indexOf(i);n!==-1&&s.splice(n,1)}},this.initializeIntersectionDetector=()=>{Ss.IntersectionObserver&&(this.intersectionDetector=new IntersectionObserver(this.handleIntersection,{root:null,rootMargin:"0px",threshold:[0,1]}))},this.handleIntersection=t=>{if(this.intersectionDetector===null)return;const i=[],s=[];t.forEach(n=>{var o;(o=this.intersectionDetector)===null||o===void 0||o.unobserve(n.target);const r=this.observedElements.get(n.target);r!==void 0&&(r.forEach(a=>{let l=i.indexOf(a);l===-1&&(l=i.length,i.push(a),s.push([])),s[l].push(n)}),this.observedElements.delete(n.target))}),i.forEach((n,o)=>{n(s[o])})},this.initializeIntersectionDetector()}}class ce extends fe{constructor(){super(...arguments),this.anchor="",this.viewport="",this.horizontalPositioningMode="uncontrolled",this.horizontalDefaultPosition="unset",this.horizontalViewportLock=!1,this.horizontalInset=!1,this.horizontalScaling="content",this.verticalPositioningMode="uncontrolled",this.verticalDefaultPosition="unset",this.verticalViewportLock=!1,this.verticalInset=!1,this.verticalScaling="content",this.fixedPlacement=!1,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.initialLayoutComplete=!1,this.resizeDetector=null,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.pendingPositioningUpdate=!1,this.pendingReset=!1,this.currentDirection=Qe.ltr,this.regionVisible=!1,this.forceUpdate=!1,this.updateThreshold=.5,this.update=()=>{this.pendingPositioningUpdate||this.requestPositionUpdates()},this.startObservers=()=>{this.stopObservers(),this.anchorElement!==null&&(this.requestPositionUpdates(),this.resizeDetector!==null&&(this.resizeDetector.observe(this.anchorElement),this.resizeDetector.observe(this)))},this.requestPositionUpdates=()=>{this.anchorElement===null||this.pendingPositioningUpdate||(ce.intersectionService.requestPosition(this,this.handleIntersection),ce.intersectionService.requestPosition(this.anchorElement,this.handleIntersection),this.viewportElement!==null&&ce.intersectionService.requestPosition(this.viewportElement,this.handleIntersection),this.pendingPositioningUpdate=!0)},this.stopObservers=()=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,ce.intersectionService.cancelRequestPosition(this,this.handleIntersection),this.anchorElement!==null&&ce.intersectionService.cancelRequestPosition(this.anchorElement,this.handleIntersection),this.viewportElement!==null&&ce.intersectionService.cancelRequestPosition(this.viewportElement,this.handleIntersection)),this.resizeDetector!==null&&this.resizeDetector.disconnect()},this.getViewport=()=>typeof this.viewport!="string"||this.viewport===""?document.documentElement:document.getElementById(this.viewport),this.getAnchor=()=>document.getElementById(this.anchor),this.handleIntersection=t=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,this.applyIntersectionEntries(t)&&this.updateLayout())},this.applyIntersectionEntries=t=>{const i=t.find(o=>o.target===this),s=t.find(o=>o.target===this.anchorElement),n=t.find(o=>o.target===this.viewportElement);return i===void 0||n===void 0||s===void 0?!1:!this.regionVisible||this.forceUpdate||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0||this.isRectDifferent(this.anchorRect,s.boundingClientRect)||this.isRectDifferent(this.viewportRect,n.boundingClientRect)||this.isRectDifferent(this.regionRect,i.boundingClientRect)?(this.regionRect=i.boundingClientRect,this.anchorRect=s.boundingClientRect,this.viewportElement===document.documentElement?this.viewportRect=new DOMRectReadOnly(n.boundingClientRect.x+document.documentElement.scrollLeft,n.boundingClientRect.y+document.documentElement.scrollTop,n.boundingClientRect.width,n.boundingClientRect.height):this.viewportRect=n.boundingClientRect,this.updateRegionOffset(),this.forceUpdate=!1,!0):!1},this.updateRegionOffset=()=>{this.anchorRect&&this.regionRect&&(this.baseHorizontalOffset=this.baseHorizontalOffset+(this.anchorRect.left-this.regionRect.left)+(this.translateX-this.baseHorizontalOffset),this.baseVerticalOffset=this.baseVerticalOffset+(this.anchorRect.top-this.regionRect.top)+(this.translateY-this.baseVerticalOffset))},this.isRectDifferent=(t,i)=>Math.abs(t.top-i.top)>this.updateThreshold||Math.abs(t.right-i.right)>this.updateThreshold||Math.abs(t.bottom-i.bottom)>this.updateThreshold||Math.abs(t.left-i.left)>this.updateThreshold,this.handleResize=t=>{this.update()},this.reset=()=>{this.pendingReset&&(this.pendingReset=!1,this.anchorElement===null&&(this.anchorElement=this.getAnchor()),this.viewportElement===null&&(this.viewportElement=this.getViewport()),this.currentDirection=Pn(this),this.startObservers())},this.updateLayout=()=>{let t,i;if(this.horizontalPositioningMode!=="uncontrolled"){const o=this.getPositioningOptions(this.horizontalInset);if(this.horizontalDefaultPosition==="center")i="center";else if(this.horizontalDefaultPosition!=="unset"){let f=this.horizontalDefaultPosition;if(f==="start"||f==="end"){const b=Pn(this);if(b!==this.currentDirection){this.currentDirection=b,this.initialize();return}this.currentDirection===Qe.ltr?f=f==="start"?"left":"right":f=f==="start"?"right":"left"}switch(f){case"left":i=this.horizontalInset?"insetStart":"start";break;case"right":i=this.horizontalInset?"insetEnd":"end";break}}const r=this.horizontalThreshold!==void 0?this.horizontalThreshold:this.regionRect!==void 0?this.regionRect.width:0,a=this.anchorRect!==void 0?this.anchorRect.left:0,l=this.anchorRect!==void 0?this.anchorRect.right:0,c=this.anchorRect!==void 0?this.anchorRect.width:0,u=this.viewportRect!==void 0?this.viewportRect.left:0,d=this.viewportRect!==void 0?this.viewportRect.right:0;(i===void 0||this.horizontalPositioningMode!=="locktodefault"&&this.getAvailableSpace(i,a,l,c,u,d)<r)&&(i=this.getAvailableSpace(o[0],a,l,c,u,d)>this.getAvailableSpace(o[1],a,l,c,u,d)?o[0]:o[1])}if(this.verticalPositioningMode!=="uncontrolled"){const o=this.getPositioningOptions(this.verticalInset);if(this.verticalDefaultPosition==="center")t="center";else if(this.verticalDefaultPosition!=="unset")switch(this.verticalDefaultPosition){case"top":t=this.verticalInset?"insetStart":"start";break;case"bottom":t=this.verticalInset?"insetEnd":"end";break}const r=this.verticalThreshold!==void 0?this.verticalThreshold:this.regionRect!==void 0?this.regionRect.height:0,a=this.anchorRect!==void 0?this.anchorRect.top:0,l=this.anchorRect!==void 0?this.anchorRect.bottom:0,c=this.anchorRect!==void 0?this.anchorRect.height:0,u=this.viewportRect!==void 0?this.viewportRect.top:0,d=this.viewportRect!==void 0?this.viewportRect.bottom:0;(t===void 0||this.verticalPositioningMode!=="locktodefault"&&this.getAvailableSpace(t,a,l,c,u,d)<r)&&(t=this.getAvailableSpace(o[0],a,l,c,u,d)>this.getAvailableSpace(o[1],a,l,c,u,d)?o[0]:o[1])}const s=this.getNextRegionDimension(i,t),n=this.horizontalPosition!==i||this.verticalPosition!==t;if(this.setHorizontalPosition(i,s),this.setVerticalPosition(t,s),this.updateRegionStyle(),!this.initialLayoutComplete){this.initialLayoutComplete=!0,this.requestPositionUpdates();return}this.regionVisible||(this.regionVisible=!0,this.style.removeProperty("pointer-events"),this.style.removeProperty("opacity"),this.classList.toggle("loaded",!0),this.$emit("loaded",this,{bubbles:!1})),this.updatePositionClasses(),n&&this.$emit("positionchange",this,{bubbles:!1})},this.updateRegionStyle=()=>{this.style.width=this.regionWidth,this.style.height=this.regionHeight,this.style.transform=`translate(${this.translateX}px, ${this.translateY}px)`},this.updatePositionClasses=()=>{this.classList.toggle("top",this.verticalPosition==="start"),this.classList.toggle("bottom",this.verticalPosition==="end"),this.classList.toggle("inset-top",this.verticalPosition==="insetStart"),this.classList.toggle("inset-bottom",this.verticalPosition==="insetEnd"),this.classList.toggle("vertical-center",this.verticalPosition==="center"),this.classList.toggle("left",this.horizontalPosition==="start"),this.classList.toggle("right",this.horizontalPosition==="end"),this.classList.toggle("inset-left",this.horizontalPosition==="insetStart"),this.classList.toggle("inset-right",this.horizontalPosition==="insetEnd"),this.classList.toggle("horizontal-center",this.horizontalPosition==="center")},this.setHorizontalPosition=(t,i)=>{if(t===void 0||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0)return;let s=0;switch(this.horizontalScaling){case"anchor":case"fill":s=this.horizontalViewportLock?this.viewportRect.width:i.width,this.regionWidth=`${s}px`;break;case"content":s=this.regionRect.width,this.regionWidth="unset";break}let n=0;switch(t){case"start":this.translateX=this.baseHorizontalOffset-s,this.horizontalViewportLock&&this.anchorRect.left>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.right));break;case"insetStart":this.translateX=this.baseHorizontalOffset-s+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.right));break;case"insetEnd":this.translateX=this.baseHorizontalOffset,this.horizontalViewportLock&&this.anchorRect.left<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.left));break;case"end":this.translateX=this.baseHorizontalOffset+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.left));break;case"center":if(n=(this.anchorRect.width-s)/2,this.translateX=this.baseHorizontalOffset+n,this.horizontalViewportLock){const o=this.anchorRect.left+n,r=this.anchorRect.right-n;o<this.viewportRect.left&&!(r>this.viewportRect.right)?this.translateX=this.translateX-(o-this.viewportRect.left):r>this.viewportRect.right&&!(o<this.viewportRect.left)&&(this.translateX=this.translateX-(r-this.viewportRect.right))}break}this.horizontalPosition=t},this.setVerticalPosition=(t,i)=>{if(t===void 0||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0)return;let s=0;switch(this.verticalScaling){case"anchor":case"fill":s=this.verticalViewportLock?this.viewportRect.height:i.height,this.regionHeight=`${s}px`;break;case"content":s=this.regionRect.height,this.regionHeight="unset";break}let n=0;switch(t){case"start":this.translateY=this.baseVerticalOffset-s,this.verticalViewportLock&&this.anchorRect.top>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.bottom));break;case"insetStart":this.translateY=this.baseVerticalOffset-s+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.bottom));break;case"insetEnd":this.translateY=this.baseVerticalOffset,this.verticalViewportLock&&this.anchorRect.top<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.top));break;case"end":this.translateY=this.baseVerticalOffset+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.top));break;case"center":if(n=(this.anchorRect.height-s)/2,this.translateY=this.baseVerticalOffset+n,this.verticalViewportLock){const o=this.anchorRect.top+n,r=this.anchorRect.bottom-n;o<this.viewportRect.top&&!(r>this.viewportRect.bottom)?this.translateY=this.translateY-(o-this.viewportRect.top):r>this.viewportRect.bottom&&!(o<this.viewportRect.top)&&(this.translateY=this.translateY-(r-this.viewportRect.bottom))}}this.verticalPosition=t},this.getPositioningOptions=t=>t?["insetStart","insetEnd"]:["start","end"],this.getAvailableSpace=(t,i,s,n,o,r)=>{const a=i-o,l=r-(i+n);switch(t){case"start":return a;case"insetStart":return a+n;case"insetEnd":return l+n;case"end":return l;case"center":return Math.min(a,l)*2+n}},this.getNextRegionDimension=(t,i)=>{const s={height:this.regionRect!==void 0?this.regionRect.height:0,width:this.regionRect!==void 0?this.regionRect.width:0};return t!==void 0&&this.horizontalScaling==="fill"?s.width=this.getAvailableSpace(t,this.anchorRect!==void 0?this.anchorRect.left:0,this.anchorRect!==void 0?this.anchorRect.right:0,this.anchorRect!==void 0?this.anchorRect.width:0,this.viewportRect!==void 0?this.viewportRect.left:0,this.viewportRect!==void 0?this.viewportRect.right:0):this.horizontalScaling==="anchor"&&(s.width=this.anchorRect!==void 0?this.anchorRect.width:0),i!==void 0&&this.verticalScaling==="fill"?s.height=this.getAvailableSpace(i,this.anchorRect!==void 0?this.anchorRect.top:0,this.anchorRect!==void 0?this.anchorRect.bottom:0,this.anchorRect!==void 0?this.anchorRect.height:0,this.viewportRect!==void 0?this.viewportRect.top:0,this.viewportRect!==void 0?this.viewportRect.bottom:0):this.verticalScaling==="anchor"&&(s.height=this.anchorRect!==void 0?this.anchorRect.height:0),s},this.startAutoUpdateEventListeners=()=>{window.addEventListener(Gh,this.update,{passive:!0}),window.addEventListener(qh,this.update,{passive:!0,capture:!0}),this.resizeDetector!==null&&this.viewportElement!==null&&this.resizeDetector.observe(this.viewportElement)},this.stopAutoUpdateEventListeners=()=>{window.removeEventListener(Gh,this.update),window.removeEventListener(qh,this.update),this.resizeDetector!==null&&this.viewportElement!==null&&this.resizeDetector.unobserve(this.viewportElement)}}anchorChanged(){this.initialLayoutComplete&&(this.anchorElement=this.getAnchor())}viewportChanged(){this.initialLayoutComplete&&(this.viewportElement=this.getViewport())}horizontalPositioningModeChanged(){this.requestReset()}horizontalDefaultPositionChanged(){this.updateForAttributeChange()}horizontalViewportLockChanged(){this.updateForAttributeChange()}horizontalInsetChanged(){this.updateForAttributeChange()}horizontalThresholdChanged(){this.updateForAttributeChange()}horizontalScalingChanged(){this.updateForAttributeChange()}verticalPositioningModeChanged(){this.requestReset()}verticalDefaultPositionChanged(){this.updateForAttributeChange()}verticalViewportLockChanged(){this.updateForAttributeChange()}verticalInsetChanged(){this.updateForAttributeChange()}verticalThresholdChanged(){this.updateForAttributeChange()}verticalScalingChanged(){this.updateForAttributeChange()}fixedPlacementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}autoUpdateModeChanged(t,i){this.$fastController.isConnected&&this.initialLayoutComplete&&(t==="auto"&&this.stopAutoUpdateEventListeners(),i==="auto"&&this.startAutoUpdateEventListeners())}anchorElementChanged(){this.requestReset()}viewportElementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}connectedCallback(){super.connectedCallback(),this.autoUpdateMode==="auto"&&this.startAutoUpdateEventListeners(),this.initialize()}disconnectedCallback(){super.disconnectedCallback(),this.autoUpdateMode==="auto"&&this.stopAutoUpdateEventListeners(),this.stopObservers(),this.disconnectResizeDetector()}adoptedCallback(){this.initialize()}disconnectResizeDetector(){this.resizeDetector!==null&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.handleResize)}updateForAttributeChange(){this.$fastController.isConnected&&this.initialLayoutComplete&&(this.forceUpdate=!0,this.update())}initialize(){this.initializeResizeDetector(),this.anchorElement===null&&(this.anchorElement=this.getAnchor()),this.requestReset()}requestReset(){this.$fastController.isConnected&&this.pendingReset===!1&&(this.setInitialState(),de.queueUpdate(()=>this.reset()),this.pendingReset=!0)}setInitialState(){this.initialLayoutComplete=!1,this.regionVisible=!1,this.translateX=0,this.translateY=0,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.viewportRect=void 0,this.regionRect=void 0,this.anchorRect=void 0,this.verticalPosition=void 0,this.horizontalPosition=void 0,this.style.opacity="0",this.style.pointerEvents="none",this.forceUpdate=!1,this.style.position=this.fixedPlacement?"fixed":"absolute",this.updatePositionClasses(),this.updateRegionStyle()}}ce.intersectionService=new I0;h([p],ce.prototype,"anchor",void 0);h([p],ce.prototype,"viewport",void 0);h([p({attribute:"horizontal-positioning-mode"})],ce.prototype,"horizontalPositioningMode",void 0);h([p({attribute:"horizontal-default-position"})],ce.prototype,"horizontalDefaultPosition",void 0);h([p({attribute:"horizontal-viewport-lock",mode:"boolean"})],ce.prototype,"horizontalViewportLock",void 0);h([p({attribute:"horizontal-inset",mode:"boolean"})],ce.prototype,"horizontalInset",void 0);h([p({attribute:"horizontal-threshold"})],ce.prototype,"horizontalThreshold",void 0);h([p({attribute:"horizontal-scaling"})],ce.prototype,"horizontalScaling",void 0);h([p({attribute:"vertical-positioning-mode"})],ce.prototype,"verticalPositioningMode",void 0);h([p({attribute:"vertical-default-position"})],ce.prototype,"verticalDefaultPosition",void 0);h([p({attribute:"vertical-viewport-lock",mode:"boolean"})],ce.prototype,"verticalViewportLock",void 0);h([p({attribute:"vertical-inset",mode:"boolean"})],ce.prototype,"verticalInset",void 0);h([p({attribute:"vertical-threshold"})],ce.prototype,"verticalThreshold",void 0);h([p({attribute:"vertical-scaling"})],ce.prototype,"verticalScaling",void 0);h([p({attribute:"fixed-placement",mode:"boolean"})],ce.prototype,"fixedPlacement",void 0);h([p({attribute:"auto-update-mode"})],ce.prototype,"autoUpdateMode",void 0);h([k],ce.prototype,"anchorElement",void 0);h([k],ce.prototype,"viewportElement",void 0);h([k],ce.prototype,"initialLayoutComplete",void 0);const T0=(e,t)=>A`
    <template class="${i=>i.circular?"circular":""}">
        <div class="control" part="control" style="${i=>i.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`;let Nr=class extends fe{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const t=`background-color: var(--badge-fill-${this.fill});`,i=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?t:this.color&&!this.fill?i:`${i} ${t}`}}};h([p({attribute:"fill"})],Nr.prototype,"fill",void 0);h([p({attribute:"color"})],Nr.prototype,"color",void 0);h([p({mode:"boolean"})],Nr.prototype,"circular",void 0);const F0=(e,t)=>A`
    <div role="listitem" class="listitem" part="listitem">
        ${ft(i=>i.href&&i.href.length>0,A`
                ${Kp(e,t)}
            `)}
        ${ft(i=>!i.href,A`
                ${Jt(e,t)}
                <slot></slot>
                ${Qt(e,t)}
            `)}
        ${ft(i=>i.separator,A`
                <span class="separator" part="separator" aria-hidden="true">
                    <slot name="separator">${t.separator||""}</slot>
                </span>
            `)}
    </div>
`;class _r extends gi{constructor(){super(...arguments),this.separator=!0}}h([k],_r.prototype,"separator",void 0);ot(_r,oi,gl);const D0=(e,t)=>A`
    <template role="navigation">
        <div role="list" class="list" part="list">
            <slot
                ${it({property:"slottedBreadcrumbItems",filter:Cs()})}
            ></slot>
        </div>
    </template>
`;class eg extends fe{slottedBreadcrumbItemsChanged(){if(this.$fastController.isConnected){if(this.slottedBreadcrumbItems===void 0||this.slottedBreadcrumbItems.length===0)return;const t=this.slottedBreadcrumbItems[this.slottedBreadcrumbItems.length-1];this.slottedBreadcrumbItems.forEach(i=>{const s=i===t;this.setItemSeparator(i,s),this.setAriaCurrent(i,s)})}}setItemSeparator(t,i){t instanceof _r&&(t.separator=!i)}findChildWithHref(t){var i,s;return t.childElementCount>0?t.querySelector("a[href]"):!((i=t.shadowRoot)===null||i===void 0)&&i.childElementCount?(s=t.shadowRoot)===null||s===void 0?void 0:s.querySelector("a[href]"):null}setAriaCurrent(t,i){const s=this.findChildWithHref(t);s===null&&t.hasAttribute("href")&&t instanceof _r?i?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current"):s!==null&&(i?s.setAttribute("aria-current","page"):s.removeAttribute("aria-current"))}}h([k],eg.prototype,"slottedBreadcrumbItems",void 0);const R0=(e,t)=>A`
    <button
        class="control"
        part="control"
        ?autofocus="${i=>i.autofocus}"
        ?disabled="${i=>i.disabled}"
        form="${i=>i.formId}"
        formaction="${i=>i.formaction}"
        formenctype="${i=>i.formenctype}"
        formmethod="${i=>i.formmethod}"
        formnovalidate="${i=>i.formnovalidate}"
        formtarget="${i=>i.formtarget}"
        name="${i=>i.name}"
        type="${i=>i.type}"
        value="${i=>i.value}"
        aria-atomic="${i=>i.ariaAtomic}"
        aria-busy="${i=>i.ariaBusy}"
        aria-controls="${i=>i.ariaControls}"
        aria-current="${i=>i.ariaCurrent}"
        aria-describedby="${i=>i.ariaDescribedby}"
        aria-details="${i=>i.ariaDetails}"
        aria-disabled="${i=>i.ariaDisabled}"
        aria-errormessage="${i=>i.ariaErrormessage}"
        aria-expanded="${i=>i.ariaExpanded}"
        aria-flowto="${i=>i.ariaFlowto}"
        aria-haspopup="${i=>i.ariaHaspopup}"
        aria-hidden="${i=>i.ariaHidden}"
        aria-invalid="${i=>i.ariaInvalid}"
        aria-keyshortcuts="${i=>i.ariaKeyshortcuts}"
        aria-label="${i=>i.ariaLabel}"
        aria-labelledby="${i=>i.ariaLabelledby}"
        aria-live="${i=>i.ariaLive}"
        aria-owns="${i=>i.ariaOwns}"
        aria-pressed="${i=>i.ariaPressed}"
        aria-relevant="${i=>i.ariaRelevant}"
        aria-roledescription="${i=>i.ariaRoledescription}"
        ${Ee("control")}
    >
        ${Jt(e,t)}
        <span class="content" part="content">
            <slot ${it("defaultSlottedContent")}></slot>
        </span>
        ${Qt(e,t)}
    </button>
`,Qh="form-associated-proxy",Jh="ElementInternals",Kh=Jh in window&&"setFormValue"in window[Jh].prototype,ef=new WeakMap;function Rs(e){const t=class extends e{constructor(...i){super(...i),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Kh}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const i=this.proxy.labels,s=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),n=i?s.concat(Array.from(i)):s;return Object.freeze(n)}else return Tn}valueChanged(i,s){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(i,s){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(i,s){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),de.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(i,s){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(i,s){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),de.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!Kh)return null;let i=ef.get(this);return i||(i=this.attachInternals(),ef.set(this,i)),i}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach(i=>this.proxy.removeEventListener(i,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(i,s,n){this.elementInternals?this.elementInternals.setValidity(i,s,n):typeof s=="string"&&this.proxy.setCustomValidity(s)}formDisabledCallback(i){this.disabled=i}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var i;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(s=>this.proxy.addEventListener(s,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Qh),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Qh)),(i=this.shadowRoot)===null||i===void 0||i.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var i;this.removeChild(this.proxy),(i=this.shadowRoot)===null||i===void 0||i.removeChild(this.proxySlot)}validate(i){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,i)}setFormValue(i,s){this.elementInternals&&this.elementInternals.setFormValue(i,s||i)}_keypressHandler(i){switch(i.key){case Ds:if(this.form instanceof HTMLFormElement){const s=this.form.querySelector("[type=submit]");s==null||s.click()}break}}stopPropagation(i){i.stopPropagation()}};return p({mode:"boolean"})(t.prototype,"disabled"),p({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),p({attribute:"current-value"})(t.prototype,"currentValue"),p(t.prototype,"name"),p({mode:"boolean"})(t.prototype,"required"),k(t.prototype,"value"),t}function Ju(e){class t extends Rs(e){}class i extends t{constructor(...n){super(n),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(n,o){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),n!==void 0&&this.$emit("change"),this.validate()}currentCheckedChanged(n,o){this.checked=this.currentChecked}updateForm(){const n=this.checked?this.value:null;this.setFormValue(n,n)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return p({attribute:"checked",mode:"boolean"})(i.prototype,"checkedAttribute"),p({attribute:"current-checked",converter:Hr})(i.prototype,"currentChecked"),k(i.prototype,"defaultChecked"),k(i.prototype,"checked"),i}class E0 extends fe{}class O0 extends Rs(E0){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let mi=class extends O0{constructor(){super(...arguments),this.handleClick=t=>{var i;this.disabled&&((i=this.defaultSlottedContent)===null||i===void 0?void 0:i.length)<=1&&t.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const t=this.proxy.isConnected;t||this.attachProxy(),typeof this.form.requestSubmit=="function"?this.form.requestSubmit(this.proxy):this.proxy.click(),t||this.detachProxy()},this.handleFormReset=()=>{var t;(t=this.form)===null||t===void 0||t.reset()},this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((t=this.$fastController.definition.shadowOptions)===null||t===void 0)&&t.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(t,i){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),i==="submit"&&this.addEventListener("click",this.handleSubmission),t==="submit"&&this.removeEventListener("click",this.handleSubmission),i==="reset"&&this.addEventListener("click",this.handleFormReset),t==="reset"&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var t;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const i=Array.from((t=this.control)===null||t===void 0?void 0:t.children);i&&i.forEach(s=>{s.addEventListener("click",this.handleClick)})}disconnectedCallback(){var t;super.disconnectedCallback();const i=Array.from((t=this.control)===null||t===void 0?void 0:t.children);i&&i.forEach(s=>{s.removeEventListener("click",this.handleClick)})}};h([p({mode:"boolean"})],mi.prototype,"autofocus",void 0);h([p({attribute:"form"})],mi.prototype,"formId",void 0);h([p],mi.prototype,"formaction",void 0);h([p],mi.prototype,"formenctype",void 0);h([p],mi.prototype,"formmethod",void 0);h([p({mode:"boolean"})],mi.prototype,"formnovalidate",void 0);h([p],mi.prototype,"formtarget",void 0);h([p],mi.prototype,"type",void 0);h([k],mi.prototype,"defaultSlottedContent",void 0);class ml{}h([p({attribute:"aria-expanded"})],ml.prototype,"ariaExpanded",void 0);h([p({attribute:"aria-pressed"})],ml.prototype,"ariaPressed",void 0);ot(ml,Je);ot(mi,oi,ml);class P0{constructor(t){if(this.dayFormat="numeric",this.weekdayFormat="long",this.monthFormat="long",this.yearFormat="numeric",this.date=new Date,t)for(const i in t){const s=t[i];i==="date"?this.date=this.getDateObject(s):this[i]=s}}getDateObject(t){if(typeof t=="string"){const i=t.split(/[/-]/);return i.length<3?new Date:new Date(parseInt(i[2],10),parseInt(i[0],10)-1,parseInt(i[1],10))}else if("day"in t&&"month"in t&&"year"in t){const{day:i,month:s,year:n}=t;return new Date(n,s-1,i)}return t}getDate(t=this.date,i={weekday:this.weekdayFormat,month:this.monthFormat,day:this.dayFormat,year:this.yearFormat},s=this.locale){const n=this.getDateObject(t);if(!n.getTime())return"";const o=Object.assign({timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone},i);return new Intl.DateTimeFormat(s,o).format(n)}getDay(t=this.date.getDate(),i=this.dayFormat,s=this.locale){return this.getDate({month:1,day:t,year:2020},{day:i},s)}getMonth(t=this.date.getMonth()+1,i=this.monthFormat,s=this.locale){return this.getDate({month:t,day:2,year:2020},{month:i},s)}getYear(t=this.date.getFullYear(),i=this.yearFormat,s=this.locale){return this.getDate({month:2,day:2,year:t},{year:i},s)}getWeekday(t=0,i=this.weekdayFormat,s=this.locale){const n=`1-${t+1}-2017`;return this.getDate(n,{weekday:i},s)}getWeekdays(t=this.weekdayFormat,i=this.locale){return Array(7).fill(null).map((s,n)=>this.getWeekday(n,t,i))}}let Ri=class extends fe{constructor(){super(...arguments),this.dateFormatter=new P0,this.readonly=!1,this.locale="en-US",this.month=new Date().getMonth()+1,this.year=new Date().getFullYear(),this.dayFormat="numeric",this.weekdayFormat="short",this.monthFormat="long",this.yearFormat="numeric",this.minWeeks=0,this.disabledDates="",this.selectedDates="",this.oneDayInMs=864e5}localeChanged(){this.dateFormatter.locale=this.locale}dayFormatChanged(){this.dateFormatter.dayFormat=this.dayFormat}weekdayFormatChanged(){this.dateFormatter.weekdayFormat=this.weekdayFormat}monthFormatChanged(){this.dateFormatter.monthFormat=this.monthFormat}yearFormatChanged(){this.dateFormatter.yearFormat=this.yearFormat}getMonthInfo(t=this.month,i=this.year){const s=l=>new Date(l.getFullYear(),l.getMonth(),1).getDay(),n=l=>{const c=new Date(l.getFullYear(),l.getMonth()+1,1);return new Date(c.getTime()-this.oneDayInMs).getDate()},o=new Date(i,t-1),r=new Date(i,t),a=new Date(i,t-2);return{length:n(o),month:t,start:s(o),year:i,previous:{length:n(a),month:a.getMonth()+1,start:s(a),year:a.getFullYear()},next:{length:n(r),month:r.getMonth()+1,start:s(r),year:r.getFullYear()}}}getDays(t=this.getMonthInfo(),i=this.minWeeks){i=i>10?10:i;const{start:s,length:n,previous:o,next:r}=t,a=[];let l=1-s;for(;l<n+1||a.length<i||a[a.length-1].length%7!==0;){const{month:c,year:u}=l<1?o:l>n?r:t,d=l<1?o.length+l:l>n?l-n:l,f=`${c}-${d}-${u}`,b=this.dateInString(f,this.disabledDates),$=this.dateInString(f,this.selectedDates),x={day:d,month:c,year:u,disabled:b,selected:$},_=a[a.length-1];a.length===0||_.length%7===0?a.push([x]):_.push(x),l++}return a}dateInString(t,i){const s=i.split(",").map(n=>n.trim());return t=typeof t=="string"?t:`${t.getMonth()+1}-${t.getDate()}-${t.getFullYear()}`,s.some(n=>n===t)}getDayClassNames(t,i){const{day:s,month:n,year:o,disabled:r,selected:a}=t,l=i===`${n}-${s}-${o}`,c=this.month!==n;return["day",l&&"today",c&&"inactive",r&&"disabled",a&&"selected"].filter(Boolean).join(" ")}getWeekdayText(){const t=this.dateFormatter.getWeekdays().map(i=>({text:i}));if(this.weekdayFormat!=="long"){const i=this.dateFormatter.getWeekdays("long");t.forEach((s,n)=>{s.abbr=i[n]})}return t}handleDateSelect(t,i){t.preventDefault,this.$emit("dateselected",i)}handleKeydown(t,i){return t.key===Ds&&this.handleDateSelect(t,i),!0}};h([p({mode:"boolean"})],Ri.prototype,"readonly",void 0);h([p],Ri.prototype,"locale",void 0);h([p({converter:q})],Ri.prototype,"month",void 0);h([p({converter:q})],Ri.prototype,"year",void 0);h([p({attribute:"day-format",mode:"fromView"})],Ri.prototype,"dayFormat",void 0);h([p({attribute:"weekday-format",mode:"fromView"})],Ri.prototype,"weekdayFormat",void 0);h([p({attribute:"month-format",mode:"fromView"})],Ri.prototype,"monthFormat",void 0);h([p({attribute:"year-format",mode:"fromView"})],Ri.prototype,"yearFormat",void 0);h([p({attribute:"min-weeks",converter:q})],Ri.prototype,"minWeeks",void 0);h([p({attribute:"disabled-dates"})],Ri.prototype,"disabledDates",void 0);h([p({attribute:"selected-dates"})],Ri.prototype,"selectedDates",void 0);const ca={none:"none",default:"default",sticky:"sticky"},js={default:"default",columnHeader:"columnheader",rowHeader:"rowheader"},ur={default:"default",header:"header",stickyHeader:"sticky-header"};class Pt extends fe{constructor(){super(...arguments),this.rowType=ur.default,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){if(this.rowData!==null&&this.isActiveRow){this.refocusOnLoad=!0;return}}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),this.cellsRepeatBehavior===null&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new Xu(t=>t.columnDefinitions,t=>t.activeCellItemTemplate,{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(So,this.handleFocusout),this.addEventListener(Co,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(So,this.handleFocusout),this.removeEventListener(Co,this.handleKeydown)}handleFocusout(t){this.contains(t.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(t){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(t.target),this.$emit("row-focused",this)}handleKeydown(t){if(t.defaultPrevented)return;let i=0;switch(t.key){case nn:i=Math.max(0,this.focusColumnIndex-1),this.cellElements[i].focus(),t.preventDefault();break;case on:i=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[i].focus(),t.preventDefault();break;case cs:t.ctrlKey||(this.cellElements[0].focus(),t.preventDefault());break;case us:t.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),t.preventDefault());break}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===ur.default&&this.cellItemTemplate!==void 0?this.cellItemTemplate:this.rowType===ur.default&&this.cellItemTemplate===void 0?this.defaultCellItemTemplate:this.headerCellItemTemplate!==void 0?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}}h([p({attribute:"grid-template-columns"})],Pt.prototype,"gridTemplateColumns",void 0);h([p({attribute:"row-type"})],Pt.prototype,"rowType",void 0);h([k],Pt.prototype,"rowData",void 0);h([k],Pt.prototype,"columnDefinitions",void 0);h([k],Pt.prototype,"cellItemTemplate",void 0);h([k],Pt.prototype,"headerCellItemTemplate",void 0);h([k],Pt.prototype,"rowIndex",void 0);h([k],Pt.prototype,"isActiveRow",void 0);h([k],Pt.prototype,"activeCellItemTemplate",void 0);h([k],Pt.prototype,"defaultCellItemTemplate",void 0);h([k],Pt.prototype,"defaultHeaderCellItemTemplate",void 0);h([k],Pt.prototype,"cellElements",void 0);function L0(e){const t=e.tagFor(Pt);return A`
    <${t}
        :rowData="${i=>i}"
        :cellItemTemplate="${(i,s)=>s.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(i,s)=>s.parent.headerCellItemTemplate}"
    ></${t}>
`}const A0=(e,t)=>{const i=L0(e),s=e.tagFor(Pt);return A`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>s}"
            :defaultRowItemTemplate="${i}"
            ${hl({property:"rowElements",filter:Cs("[role=row]")})}
        >
            <slot></slot>
        </template>
    `};class It extends fe{constructor(){super(),this.noTabbing=!1,this.generateHeader=ca.default,this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(t,i,s)=>{if(this.rowElements.length===0){this.focusRowIndex=0,this.focusColumnIndex=0;return}const n=Math.max(0,Math.min(this.rowElements.length-1,t)),r=this.rowElements[n].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),a=Math.max(0,Math.min(r.length-1,i)),l=r[a];s&&this.scrollHeight!==this.clientHeight&&(n<this.focusRowIndex&&this.scrollTop>0||n>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&l.scrollIntoView({block:"center",inline:"center"}),l.focus()},this.onChildListChange=(t,i)=>{t&&t.length&&(t.forEach(s=>{s.addedNodes.forEach(n=>{n.nodeType===1&&n.getAttribute("role")==="row"&&(n.columnDefinitions=this.columnDefinitions)})}),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,de.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let t=this.gridTemplateColumns;if(t===void 0){if(this.generatedGridTemplateColumns===""&&this.rowElements.length>0){const i=this.rowElements[0];this.generatedGridTemplateColumns=new Array(i.cellElements.length).fill("1fr").join(" ")}t=this.generatedGridTemplateColumns}this.rowElements.forEach((i,s)=>{const n=i;n.rowIndex=s,n.gridTemplateColumns=t,this.columnDefinitionsStale&&(n.columnDefinitions=this.columnDefinitions)}),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(t){let i="";return t.forEach(s=>{i=`${i}${i===""?"":" "}1fr`}),i}noTabbingChanged(){this.$fastController.isConnected&&(this.noTabbing?this.setAttribute("tabIndex","-1"):this.setAttribute("tabIndex",this.contains(document.activeElement)||this===document.activeElement?"-1":"0"))}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){this.columnDefinitions===null&&this.rowsData.length>0&&(this.columnDefinitions=It.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){if(this.columnDefinitions===null){this.generatedGridTemplateColumns="";return}this.generatedGridTemplateColumns=It.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())}headerCellItemTemplateChanged(){this.$fastController.isConnected&&this.generatedHeader!==null&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),this.rowItemTemplate===void 0&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new Xu(t=>t.rowsData,t=>t.rowItemTemplate,{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(Uh,this.handleFocus),this.addEventListener(Co,this.handleKeydown),this.addEventListener(So,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),de.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(Uh,this.handleFocus),this.removeEventListener(Co,this.handleKeydown),this.removeEventListener(So,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(t){this.isUpdatingFocus=!0;const i=t.target;this.focusRowIndex=this.rowElements.indexOf(i),this.focusColumnIndex=i.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(t){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(t){(t.relatedTarget===null||!this.contains(t.relatedTarget))&&this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(t){if(t.defaultPrevented)return;let i;const s=this.rowElements.length-1,n=this.offsetHeight+this.scrollTop,o=this.rowElements[s];switch(t.key){case Di:t.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case Fi:t.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case _0:if(t.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex===0){this.focusOnCell(0,this.focusColumnIndex,!1);return}for(i=this.focusRowIndex-1,i;i>=0;i--){const r=this.rowElements[i];if(r.offsetTop<this.scrollTop){this.scrollTop=r.offsetTop+r.clientHeight-this.clientHeight;break}}this.focusOnCell(i,this.focusColumnIndex,!1);break;case $0:if(t.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=s||o.offsetTop+o.offsetHeight<=n){this.focusOnCell(s,this.focusColumnIndex,!1);return}for(i=this.focusRowIndex+1,i;i<=s;i++){const r=this.rowElements[i];if(r.offsetTop+r.offsetHeight>n){let a=0;this.generateHeader===ca.sticky&&this.generatedHeader!==null&&(a=this.generatedHeader.clientHeight),this.scrollTop=r.offsetTop-a;break}}this.focusOnCell(i,this.focusColumnIndex,!1);break;case cs:t.ctrlKey&&(t.preventDefault(),this.focusOnCell(0,0,!0));break;case us:t.ctrlKey&&this.columnDefinitions!==null&&(t.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0));break}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||this.pendingFocusUpdate===!1&&(this.pendingFocusUpdate=!0,de.queueUpdate(()=>this.updateFocus()))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(this.generatedHeader!==null&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),this.generateHeader!==ca.none&&this.rowsData.length>0){const t=document.createElement(this.rowElementTag);this.generatedHeader=t,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===ca.sticky?ur.stickyHeader:ur.header,(this.firstChild!==null||this.rowsPlaceholder!==null)&&this.insertBefore(t,this.firstChild!==null?this.firstChild:this.rowsPlaceholder);return}}}It.generateColumns=e=>Object.getOwnPropertyNames(e).map((t,i)=>({columnDataKey:t,gridColumn:`${i}`}));h([p({attribute:"no-tabbing",mode:"boolean"})],It.prototype,"noTabbing",void 0);h([p({attribute:"generate-header"})],It.prototype,"generateHeader",void 0);h([p({attribute:"grid-template-columns"})],It.prototype,"gridTemplateColumns",void 0);h([k],It.prototype,"rowsData",void 0);h([k],It.prototype,"columnDefinitions",void 0);h([k],It.prototype,"rowItemTemplate",void 0);h([k],It.prototype,"cellItemTemplate",void 0);h([k],It.prototype,"headerCellItemTemplate",void 0);h([k],It.prototype,"focusRowIndex",void 0);h([k],It.prototype,"focusColumnIndex",void 0);h([k],It.prototype,"defaultRowItemTemplate",void 0);h([k],It.prototype,"rowElementTag",void 0);h([k],It.prototype,"rowElements",void 0);const M0=A`
    <template>
        ${e=>e.rowData===null||e.columnDefinition===null||e.columnDefinition.columnDataKey===null?null:e.rowData[e.columnDefinition.columnDataKey]}
    </template>
`,V0=A`
    <template>
        ${e=>e.columnDefinition===null?null:e.columnDefinition.title===void 0?e.columnDefinition.columnDataKey:e.columnDefinition.title}
    </template>
`;class Es extends fe{constructor(){super(...arguments),this.cellType=js.default,this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(t,i){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var t;super.connectedCallback(),this.addEventListener(Wh,this.handleFocusin),this.addEventListener(So,this.handleFocusout),this.addEventListener(Co,this.handleKeydown),this.style.gridColumn=`${((t=this.columnDefinition)===null||t===void 0?void 0:t.gridColumn)===void 0?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(Wh,this.handleFocusin),this.removeEventListener(So,this.handleFocusout),this.removeEventListener(Co,this.handleKeydown),this.disconnectCellView()}handleFocusin(t){if(!this.isActiveCell){switch(this.isActiveCell=!0,this.cellType){case js.columnHeader:if(this.columnDefinition!==null&&this.columnDefinition.headerCellInternalFocusQueue!==!0&&typeof this.columnDefinition.headerCellFocusTargetCallback=="function"){const i=this.columnDefinition.headerCellFocusTargetCallback(this);i!==null&&i.focus()}break;default:if(this.columnDefinition!==null&&this.columnDefinition.cellInternalFocusQueue!==!0&&typeof this.columnDefinition.cellFocusTargetCallback=="function"){const i=this.columnDefinition.cellFocusTargetCallback(this);i!==null&&i.focus()}break}this.$emit("cell-focused",this)}}handleFocusout(t){this!==document.activeElement&&!this.contains(document.activeElement)&&(this.isActiveCell=!1)}handleKeydown(t){if(!(t.defaultPrevented||this.columnDefinition===null||this.cellType===js.default&&this.columnDefinition.cellInternalFocusQueue!==!0||this.cellType===js.columnHeader&&this.columnDefinition.headerCellInternalFocusQueue!==!0))switch(t.key){case Ds:case w0:if(this.contains(document.activeElement)&&document.activeElement!==this)return;switch(this.cellType){case js.columnHeader:if(this.columnDefinition.headerCellFocusTargetCallback!==void 0){const i=this.columnDefinition.headerCellFocusTargetCallback(this);i!==null&&i.focus(),t.preventDefault()}break;default:if(this.columnDefinition.cellFocusTargetCallback!==void 0){const i=this.columnDefinition.cellFocusTargetCallback(this);i!==null&&i.focus(),t.preventDefault()}break}break;case Ao:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),t.preventDefault());break}}updateCellView(){if(this.disconnectCellView(),this.columnDefinition!==null)switch(this.cellType){case js.columnHeader:this.columnDefinition.headerCellTemplate!==void 0?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=V0.render(this,this);break;case void 0:case js.rowHeader:case js.default:this.columnDefinition.cellTemplate!==void 0?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=M0.render(this,this);break}}disconnectCellView(){this.customCellView!==null&&(this.customCellView.dispose(),this.customCellView=null)}}h([p({attribute:"cell-type"})],Es.prototype,"cellType",void 0);h([p({attribute:"grid-column"})],Es.prototype,"gridColumn",void 0);h([k],Es.prototype,"rowData",void 0);h([k],Es.prototype,"columnDefinition",void 0);function H0(e){const t=e.tagFor(Es);return A`
    <${t}
        cell-type="${i=>i.isRowHeader?"rowheader":void 0}"
        grid-column="${(i,s)=>s.index+1}"
        :rowData="${(i,s)=>s.parent.rowData}"
        :columnDefinition="${i=>i}"
    ></${t}>
`}function N0(e){const t=e.tagFor(Es);return A`
    <${t}
        cell-type="columnheader"
        grid-column="${(i,s)=>s.index+1}"
        :columnDefinition="${i=>i}"
    ></${t}>
`}const z0=(e,t)=>{const i=H0(e),s=N0(e);return A`
        <template
            role="row"
            class="${n=>n.rowType!=="default"?n.rowType:""}"
            :defaultCellItemTemplate="${i}"
            :defaultHeaderCellItemTemplate="${s}"
            ${hl({property:"cellElements",filter:Cs('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${it("slottedCellElements")}></slot>
        </template>
    `},B0=(e,t)=>A`
        <template
            tabindex="-1"
            role="${i=>!i.cellType||i.cellType==="default"?"gridcell":i.cellType}"
            class="
            ${i=>i.cellType==="columnheader"?"column-header":i.cellType==="rowheader"?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `,j0=A`
    <div
        class="title"
        part="title"
        aria-label="${e=>e.dateFormatter.getDate(`${e.month}-2-${e.year}`,{month:"long",year:"numeric"})}"
    >
        <span part="month">
            ${e=>e.dateFormatter.getMonth(e.month)}
        </span>
        <span part="year">${e=>e.dateFormatter.getYear(e.year)}</span>
    </div>
`,Y0=e=>{const t=e.tagFor(Es);return A`
        <${t}
            class="week-day"
            part="week-day"
            tabindex="-1"
            grid-column="${(i,s)=>s.index+1}"
            abbr="${i=>i.abbr}"
        >
            ${i=>i.text}
        </${t}>
    `},U0=(e,t)=>{const i=e.tagFor(Es);return A`
        <${i}
            class="${(s,n)=>n.parentContext.parent.getDayClassNames(s,t)}"
            part="day"
            tabindex="-1"
            role="gridcell"
            grid-column="${(s,n)=>n.index+1}"
            @click="${(s,n)=>n.parentContext.parent.handleDateSelect(n.event,s)}"
            @keydown="${(s,n)=>n.parentContext.parent.handleKeydown(n.event,s)}"
            aria-label="${(s,n)=>n.parentContext.parent.dateFormatter.getDate(`${s.month}-${s.day}-${s.year}`,{month:"long",day:"numeric"})}"
        >
            <div
                class="date"
                part="${s=>t===`${s.month}-${s.day}-${s.year}`?"today":"date"}"
            >
                ${(s,n)=>n.parentContext.parent.dateFormatter.getDay(s.day)}
            </div>
            <slot name="${s=>s.month}-${s=>s.day}-${s=>s.year}"></slot>
        </${i}>
    `},W0=(e,t)=>{const i=e.tagFor(Pt);return A`
        <${i}
            class="week"
            part="week"
            role="row"
            role-type="default"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
        ${ho(s=>s,U0(e,t),{positioning:!0})}
        </${i}>
    `},G0=(e,t)=>{const i=e.tagFor(It),s=e.tagFor(Pt);return A`
    <${i} class="days interact" part="days" generate-header="none">
        <${s}
            class="week-days"
            part="week-days"
            role="row"
            row-type="header"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
            ${ho(n=>n.getWeekdayText(),Y0(e),{positioning:!0})}
        </${s}>
        ${ho(n=>n.getDays(),W0(e,t))}
    </${i}>
`},q0=e=>A`
        <div class="days" part="days">
            <div class="week-days" part="week-days">
                ${ho(t=>t.getWeekdayText(),A`
                        <div class="week-day" part="week-day" abbr="${t=>t.abbr}">
                            ${t=>t.text}
                        </div>
                    `)}
            </div>
            ${ho(t=>t.getDays(),A`
                    <div class="week">
                        ${ho(t=>t,A`
                                <div
                                    class="${(t,i)=>i.parentContext.parent.getDayClassNames(t,e)}"
                                    part="day"
                                    aria-label="${(t,i)=>i.parentContext.parent.dateFormatter.getDate(`${t.month}-${t.day}-${t.year}`,{month:"long",day:"numeric"})}"
                                >
                                    <div
                                        class="date"
                                        part="${t=>e===`${t.month}-${t.day}-${t.year}`?"today":"date"}"
                                    >
                                        ${(t,i)=>i.parentContext.parent.dateFormatter.getDay(t.day)}
                                    </div>
                                    <slot
                                        name="${t=>t.month}-${t=>t.day}-${t=>t.year}"
                                    ></slot>
                                </div>
                            `)}
                    </div>
                `)}
        </div>
    `,Z0=(e,t)=>{var i;const s=new Date,n=`${s.getMonth()+1}-${s.getDate()}-${s.getFullYear()}`;return A`
        <template>
            ${e0}
            ${t.title instanceof Function?t.title(e,t):(i=t.title)!==null&&i!==void 0?i:""}
            <slot></slot>
            ${ft(o=>o.readonly,q0(n),G0(e,n))}
            ${Ky}
        </template>
    `},X0=(e,t)=>A`
    <slot></slot>
`;let tg=class extends fe{};const Q0=(e,t)=>A`
    <template
        role="checkbox"
        aria-checked="${i=>i.checked}"
        aria-required="${i=>i.required}"
        aria-disabled="${i=>i.disabled}"
        aria-readonly="${i=>i.readOnly}"
        tabindex="${i=>i.disabled?null:0}"
        @keypress="${(i,s)=>i.keypressHandler(s.event)}"
        @click="${(i,s)=>i.clickHandler(s.event)}"
        class="${i=>i.readOnly?"readonly":""} ${i=>i.checked?"checked":""} ${i=>i.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${t.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${i=>i.defaultSlottedNodes&&i.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${it("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class J0 extends fe{}class K0 extends Ju(J0){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class vl extends K0{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=t=>{if(!this.readOnly)switch(t.key){case Vn:this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked;break}},this.clickHandler=t=>{!this.disabled&&!this.readOnly&&(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}h([p({attribute:"readonly",mode:"boolean"})],vl.prototype,"readOnly",void 0);h([k],vl.prototype,"defaultSlottedNodes",void 0);h([k],vl.prototype,"indeterminate",void 0);function ig(e){return ko(e)&&(e.getAttribute("role")==="option"||e instanceof HTMLOptionElement)}class ds extends fe{constructor(t,i,s,n){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,t&&(this.textContent=t),i&&(this.initialValue=i),s&&(this.defaultSelected=s),n&&(this.selected=n),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(t,i){if(typeof i=="boolean"){this.ariaChecked=i?"true":"false";return}this.ariaChecked=null}contentChanged(t,i){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(t,i){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(t,i){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var t;return(t=this.value)!==null&&t!==void 0?t:this.text}get text(){var t,i;return(i=(t=this.textContent)===null||t===void 0?void 0:t.replace(/\s+/g," ").trim())!==null&&i!==void 0?i:""}set value(t){const i=`${t??""}`;this._value=i,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=i),ue.notify(this,"value")}get value(){var t;return ue.track(this,"value"),(t=this._value)!==null&&t!==void 0?t:this.text}get form(){return this.proxy?this.proxy.form:null}}h([k],ds.prototype,"checked",void 0);h([k],ds.prototype,"content",void 0);h([k],ds.prototype,"defaultSelected",void 0);h([p({mode:"boolean"})],ds.prototype,"disabled",void 0);h([p({attribute:"selected",mode:"boolean"})],ds.prototype,"selectedAttribute",void 0);h([k],ds.prototype,"selected",void 0);h([p({attribute:"value",mode:"fromView"})],ds.prototype,"initialValue",void 0);class Mo{}h([k],Mo.prototype,"ariaChecked",void 0);h([k],Mo.prototype,"ariaPosInSet",void 0);h([k],Mo.prototype,"ariaSelected",void 0);h([k],Mo.prototype,"ariaSetSize",void 0);ot(Mo,Je);ot(ds,oi,Mo);let ri=class Ea extends fe{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var t;return(t=this.selectedOptions[0])!==null&&t!==void 0?t:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(t=>t.disabled)}get length(){var t,i;return(i=(t=this.options)===null||t===void 0?void 0:t.length)!==null&&i!==void 0?i:0}get options(){return ue.track(this,"options"),this._options}set options(t){this._options=t,ue.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(t){this.typeaheadExpired=t}clickHandler(t){const i=t.target.closest("option,[role=option]");if(i&&!i.disabled)return this.selectedIndex=this.options.indexOf(i),!0}focusAndScrollOptionIntoView(t=this.firstSelectedOption){this.contains(document.activeElement)&&t!==null&&(t.focus(),requestAnimationFrame(()=>{t.scrollIntoView({block:"nearest"})}))}focusinHandler(t){!this.shouldSkipFocus&&t.target===t.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const t=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),i=new RegExp(`^${t}`,"gi");return this.options.filter(s=>s.text.trim().match(i))}getSelectableIndex(t=this.selectedIndex,i){const s=t>i?-1:t<i?1:0,n=t+s;let o=null;switch(s){case-1:{o=this.options.reduceRight((r,a,l)=>!r&&!a.disabled&&l<n?a:r,o);break}case 1:{o=this.options.reduce((r,a,l)=>!r&&!a.disabled&&l>n?a:r,o);break}}return this.options.indexOf(o)}handleChange(t,i){switch(i){case"selected":{Ea.slottedOptionFilter(t)&&(this.selectedIndex=this.options.indexOf(t)),this.setSelectedOptions();break}}}handleTypeAhead(t){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,Ea.TYPE_AHEAD_TIMEOUT_MS),!(t.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${t}`)}keydownHandler(t){if(this.disabled)return!0;this.shouldSkipFocus=!1;const i=t.key;switch(i){case cs:{t.shiftKey||(t.preventDefault(),this.selectFirstOption());break}case Fi:{t.shiftKey||(t.preventDefault(),this.selectNextOption());break}case Di:{t.shiftKey||(t.preventDefault(),this.selectPreviousOption());break}case us:{t.preventDefault(),this.selectLastOption();break}case fl:return this.focusAndScrollOptionIntoView(),!0;case Ds:case Ao:return!0;case Vn:if(this.typeaheadExpired)return!0;default:return i.length===1&&this.handleTypeAhead(`${i}`),!0}}mousedownHandler(t){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(t,i){this.ariaMultiSelectable=i?"true":null}selectedIndexChanged(t,i){var s;if(!this.hasSelectableOptions){this.selectedIndex=-1;return}if(!((s=this.options[this.selectedIndex])===null||s===void 0)&&s.disabled&&typeof t=="number"){const n=this.getSelectableIndex(t,i),o=n>-1?n:t;this.selectedIndex=o,i===o&&this.selectedIndexChanged(i,o);return}this.setSelectedOptions()}selectedOptionsChanged(t,i){var s;const n=i.filter(Ea.slottedOptionFilter);(s=this.options)===null||s===void 0||s.forEach(o=>{const r=ue.getNotifier(o);r.unsubscribe(this,"selected"),o.selected=n.includes(o),r.subscribe(this,"selected")})}selectFirstOption(){var t,i;this.disabled||(this.selectedIndex=(i=(t=this.options)===null||t===void 0?void 0:t.findIndex(s=>!s.disabled))!==null&&i!==void 0?i:-1)}selectLastOption(){this.disabled||(this.selectedIndex=m0(this.options,t=>!t.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var t,i;this.selectedIndex=(i=(t=this.options)===null||t===void 0?void 0:t.findIndex(s=>s.defaultSelected))!==null&&i!==void 0?i:-1}setSelectedOptions(){var t,i,s;!((t=this.options)===null||t===void 0)&&t.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=(s=(i=this.firstSelectedOption)===null||i===void 0?void 0:i.id)!==null&&s!==void 0?s:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(t,i){this.options=i.reduce((n,o)=>(ig(o)&&n.push(o),n),[]);const s=`${this.options.length}`;this.options.forEach((n,o)=>{n.id||(n.id=$r("option-")),n.ariaPosInSet=`${o+1}`,n.ariaSetSize=s}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(t,i){if(this.$fastController.isConnected){const s=this.getTypeaheadMatches();if(s.length){const n=this.options.indexOf(s[0]);n>-1&&(this.selectedIndex=n)}this.typeaheadExpired=!1}}};ri.slottedOptionFilter=e=>ig(e)&&!e.hidden;ri.TYPE_AHEAD_TIMEOUT_MS=1e3;h([p({mode:"boolean"})],ri.prototype,"disabled",void 0);h([k],ri.prototype,"selectedIndex",void 0);h([k],ri.prototype,"selectedOptions",void 0);h([k],ri.prototype,"slottedOptions",void 0);h([k],ri.prototype,"typeaheadBuffer",void 0);class dn{}h([k],dn.prototype,"ariaActiveDescendant",void 0);h([k],dn.prototype,"ariaDisabled",void 0);h([k],dn.prototype,"ariaExpanded",void 0);h([k],dn.prototype,"ariaMultiSelectable",void 0);ot(dn,Je);ot(ri,dn);const fo={above:"above",below:"below"};class ex extends ri{}class tx extends Rs(ex){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const ua={inline:"inline",list:"list",both:"both",none:"none"};let Os=class extends tx{constructor(){super(...arguments),this._value="",this.filteredOptions=[],this.filter="",this.forcedPosition=!1,this.listboxId=$r("listbox-"),this.maxHeight=0,this.open=!1}formResetCallback(){super.formResetCallback(),this.setDefaultSelectedOption(),this.updateValue()}validate(){super.validate(this.control)}get isAutocompleteInline(){return this.autocomplete===ua.inline||this.isAutocompleteBoth}get isAutocompleteList(){return this.autocomplete===ua.list||this.isAutocompleteBoth}get isAutocompleteBoth(){return this.autocomplete===ua.both}openChanged(){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),de.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}get options(){return ue.track(this,"options"),this.filteredOptions.length?this.filteredOptions:this._options}set options(t){this._options=t,ue.notify(this,"options")}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}positionChanged(t,i){this.positionAttribute=i,this.setPositioning()}get value(){return ue.track(this,"value"),this._value}set value(t){var i,s,n;const o=`${this._value}`;if(this.$fastController.isConnected&&this.options){const r=this.options.findIndex(c=>c.text.toLowerCase()===t.toLowerCase()),a=(i=this.options[this.selectedIndex])===null||i===void 0?void 0:i.text,l=(s=this.options[r])===null||s===void 0?void 0:s.text;this.selectedIndex=a!==l?r:this.selectedIndex,t=((n=this.firstSelectedOption)===null||n===void 0?void 0:n.text)||t}o!==t&&(this._value=t,super.valueChanged(o,t),ue.notify(this,"value"))}clickHandler(t){if(!this.disabled){if(this.open){const i=t.target.closest("option,[role=option]");if(!i||i.disabled)return;this.selectedOptions=[i],this.control.value=i.text,this.clearSelectionRange(),this.updateValue(!0)}return this.open=!this.open,this.open&&this.control.focus(),!0}}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.value&&(this.initialValue=this.value)}disabledChanged(t,i){super.disabledChanged&&super.disabledChanged(t,i),this.ariaDisabled=this.disabled?"true":"false"}filterOptions(){(!this.autocomplete||this.autocomplete===ua.none)&&(this.filter="");const t=this.filter.toLowerCase();this.filteredOptions=this._options.filter(i=>i.text.toLowerCase().startsWith(this.filter.toLowerCase())),this.isAutocompleteList&&(!this.filteredOptions.length&&!t&&(this.filteredOptions=this._options),this._options.forEach(i=>{i.hidden=!this.filteredOptions.includes(i)}))}focusAndScrollOptionIntoView(){this.contains(document.activeElement)&&(this.control.focus(),this.firstSelectedOption&&requestAnimationFrame(()=>{var t;(t=this.firstSelectedOption)===null||t===void 0||t.scrollIntoView({block:"nearest"})}))}focusoutHandler(t){if(this.syncValue(),!this.open)return!0;const i=t.relatedTarget;if(this.isSameNode(i)){this.focus();return}(!this.options||!this.options.includes(i))&&(this.open=!1)}inputHandler(t){if(this.filter=this.control.value,this.filterOptions(),this.isAutocompleteInline||(this.selectedIndex=this.options.map(i=>i.text).indexOf(this.control.value)),t.inputType.includes("deleteContent")||!this.filter.length)return!0;this.isAutocompleteList&&!this.open&&(this.open=!0),this.isAutocompleteInline&&(this.filteredOptions.length?(this.selectedOptions=[this.filteredOptions[0]],this.selectedIndex=this.options.indexOf(this.firstSelectedOption),this.setInlineSelection()):this.selectedIndex=-1)}keydownHandler(t){const i=t.key;if(t.ctrlKey||t.shiftKey)return!0;switch(i){case"Enter":{this.syncValue(),this.isAutocompleteInline&&(this.filter=this.value),this.open=!1,this.clearSelectionRange();break}case"Escape":{if(this.isAutocompleteInline||(this.selectedIndex=-1),this.open){this.open=!1;break}this.value="",this.control.value="",this.filter="",this.filterOptions();break}case"Tab":{if(this.setInputToSelection(),!this.open)return!0;t.preventDefault(),this.open=!1;break}case"ArrowUp":case"ArrowDown":{if(this.filterOptions(),!this.open){this.open=!0;break}this.filteredOptions.length>0&&super.keydownHandler(t),this.isAutocompleteInline&&this.setInlineSelection();break}default:return!0}}keyupHandler(t){switch(t.key){case"ArrowLeft":case"ArrowRight":case"Backspace":case"Delete":case"Home":case"End":{this.filter=this.control.value,this.selectedIndex=-1,this.filterOptions();break}}}selectedIndexChanged(t,i){if(this.$fastController.isConnected){if(i=pl(-1,this.options.length-1,i),i!==this.selectedIndex){this.selectedIndex=i;return}super.selectedIndexChanged(t,i)}}selectPreviousOption(){!this.disabled&&this.selectedIndex>=0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){if(this.$fastController.isConnected&&this.options){const t=this.options.findIndex(i=>i.getAttribute("selected")!==null||i.selected);this.selectedIndex=t,!this.dirtyValue&&this.firstSelectedOption&&(this.value=this.firstSelectedOption.text),this.setSelectedOptions()}}setInputToSelection(){this.firstSelectedOption&&(this.control.value=this.firstSelectedOption.text,this.control.focus())}setInlineSelection(){this.firstSelectedOption&&(this.setInputToSelection(),this.control.setSelectionRange(this.filter.length,this.control.value.length,"backward"))}syncValue(){var t;const i=this.selectedIndex>-1?(t=this.firstSelectedOption)===null||t===void 0?void 0:t.text:this.control.value;this.updateValue(this.value!==i)}setPositioning(){const t=this.getBoundingClientRect(),s=window.innerHeight-t.bottom;this.position=this.forcedPosition?this.positionAttribute:t.top>s?fo.above:fo.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===fo.above?~~t.top:~~s}selectedOptionsChanged(t,i){this.$fastController.isConnected&&this._options.forEach(s=>{s.selected=i.includes(s)})}slottedOptionsChanged(t,i){super.slottedOptionsChanged(t,i),this.updateValue()}updateValue(t){var i;this.$fastController.isConnected&&(this.value=((i=this.firstSelectedOption)===null||i===void 0?void 0:i.text)||this.control.value,this.control.value=this.value),t&&this.$emit("change")}clearSelectionRange(){const t=this.control.value.length;this.control.setSelectionRange(t,t)}};h([p({attribute:"autocomplete",mode:"fromView"})],Os.prototype,"autocomplete",void 0);h([k],Os.prototype,"maxHeight",void 0);h([p({attribute:"open",mode:"boolean"})],Os.prototype,"open",void 0);h([p],Os.prototype,"placeholder",void 0);h([p({attribute:"position"})],Os.prototype,"positionAttribute",void 0);h([k],Os.prototype,"position",void 0);class bl{}h([k],bl.prototype,"ariaAutoComplete",void 0);h([k],bl.prototype,"ariaControls",void 0);ot(bl,dn);ot(Os,oi,bl);const ix=(e,t)=>A`
    <template
        aria-disabled="${i=>i.ariaDisabled}"
        autocomplete="${i=>i.autocomplete}"
        class="${i=>i.open?"open":""} ${i=>i.disabled?"disabled":""} ${i=>i.position}"
        ?open="${i=>i.open}"
        tabindex="${i=>i.disabled?null:"0"}"
        @click="${(i,s)=>i.clickHandler(s.event)}"
        @focusout="${(i,s)=>i.focusoutHandler(s.event)}"
        @keydown="${(i,s)=>i.keydownHandler(s.event)}"
    >
        <div class="control" part="control">
            ${Jt(e,t)}
            <slot name="control">
                <input
                    aria-activedescendant="${i=>i.open?i.ariaActiveDescendant:null}"
                    aria-autocomplete="${i=>i.ariaAutoComplete}"
                    aria-controls="${i=>i.ariaControls}"
                    aria-disabled="${i=>i.ariaDisabled}"
                    aria-expanded="${i=>i.ariaExpanded}"
                    aria-haspopup="listbox"
                    class="selected-value"
                    part="selected-value"
                    placeholder="${i=>i.placeholder}"
                    role="combobox"
                    type="text"
                    ?disabled="${i=>i.disabled}"
                    :value="${i=>i.value}"
                    @input="${(i,s)=>i.inputHandler(s.event)}"
                    @keyup="${(i,s)=>i.keyupHandler(s.event)}"
                    ${Ee("control")}
                />
                <div class="indicator" part="indicator" aria-hidden="true">
                    <slot name="indicator">
                        ${t.indicator||""}
                    </slot>
                </div>
            </slot>
            ${Qt(e,t)}
        </div>
        <div
            class="listbox"
            id="${i=>i.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${i=>i.disabled}"
            ?hidden="${i=>!i.open}"
            ${Ee("listbox")}
        >
            <slot
                ${it({filter:ri.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`;function Ya(e){const t=e.parentElement;if(t)return t;{const i=e.getRootNode();if(i.host instanceof HTMLElement)return i.host}return null}function sx(e,t){let i=t;for(;i!==null;){if(i===e)return!0;i=Ya(i)}return!1}const ys=document.createElement("div");function nx(e){return e instanceof dl}class Ku{setProperty(t,i){de.queueUpdate(()=>this.target.setProperty(t,i))}removeProperty(t){de.queueUpdate(()=>this.target.removeProperty(t))}}class ox extends Ku{constructor(t){super();const i=new CSSStyleSheet;this.target=i.cssRules[i.insertRule(":host{}")].style,t.$fastController.addStyles(Xt.create([i]))}}class rx extends Ku{constructor(){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,t]}}class ax extends Ku{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:t}=this.style;if(t){const i=t.insertRule(":root{}",t.cssRules.length);this.target=t.cssRules[i].style}}}class sg{constructor(t){this.store=new Map,this.target=null;const i=t.$fastController;this.style=document.createElement("style"),i.addStyles(this.style),ue.getNotifier(i).subscribe(this,"isConnected"),this.handleChange(i,"isConnected")}targetChanged(){if(this.target!==null)for(const[t,i]of this.store.entries())this.target.setProperty(t,i)}setProperty(t,i){this.store.set(t,i),de.queueUpdate(()=>{this.target!==null&&this.target.setProperty(t,i)})}removeProperty(t){this.store.delete(t),de.queueUpdate(()=>{this.target!==null&&this.target.removeProperty(t)})}handleChange(t,i){const{sheet:s}=this.style;if(s){const n=s.insertRule(":host{}",s.cssRules.length);this.target=s.cssRules[n].style}else this.target=null}}h([k],sg.prototype,"target",void 0);class lx{constructor(t){this.target=t.style}setProperty(t,i){de.queueUpdate(()=>this.target.setProperty(t,i))}removeProperty(t){de.queueUpdate(()=>this.target.removeProperty(t))}}class Ft{setProperty(t,i){Ft.properties[t]=i;for(const s of Ft.roots.values())lo.getOrCreate(Ft.normalizeRoot(s)).setProperty(t,i)}removeProperty(t){delete Ft.properties[t];for(const i of Ft.roots.values())lo.getOrCreate(Ft.normalizeRoot(i)).removeProperty(t)}static registerRoot(t){const{roots:i}=Ft;if(!i.has(t)){i.add(t);const s=lo.getOrCreate(this.normalizeRoot(t));for(const n in Ft.properties)s.setProperty(n,Ft.properties[n])}}static unregisterRoot(t){const{roots:i}=Ft;if(i.has(t)){i.delete(t);const s=lo.getOrCreate(Ft.normalizeRoot(t));for(const n in Ft.properties)s.removeProperty(n)}}static normalizeRoot(t){return t===ys?document:t}}Ft.roots=new Set;Ft.properties={};const Ec=new WeakMap,cx=de.supportsAdoptedStyleSheets?ox:sg,lo=Object.freeze({getOrCreate(e){if(Ec.has(e))return Ec.get(e);let t;return e===ys?t=new Ft:e instanceof Document?t=de.supportsAdoptedStyleSheets?new rx:new ax:nx(e)?t=new cx(e):t=new lx(e),Ec.set(e,t),t}});class Gt extends Zu{constructor(t){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=t.name,t.cssCustomPropertyName!==null&&(this.cssCustomProperty=`--${t.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=Gt.uniqueId(),Gt.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(t){return new Gt({name:typeof t=="string"?t:t.name,cssCustomPropertyName:typeof t=="string"?t:t.cssCustomPropertyName===void 0?t.name:t.cssCustomPropertyName})}static isCSSDesignToken(t){return typeof t.cssCustomProperty=="string"}static isDerivedDesignTokenValue(t){return typeof t=="function"}static getTokenById(t){return Gt.tokensById.get(t)}getOrCreateSubscriberSet(t=this){return this.subscribers.get(t)||this.subscribers.set(t,new Set)&&this.subscribers.get(t)}createCSS(){return this.cssVar||""}getValueFor(t){const i=yt.getOrCreate(t).get(this);if(i!==void 0)return i;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${t} or an ancestor of ${t}.`)}setValueFor(t,i){return this._appliedTo.add(t),i instanceof Gt&&(i=this.alias(i)),yt.getOrCreate(t).set(this,i),this}deleteValueFor(t){return this._appliedTo.delete(t),yt.existsFor(t)&&yt.getOrCreate(t).delete(this),this}withDefault(t){return this.setValueFor(ys,t),this}subscribe(t,i){const s=this.getOrCreateSubscriberSet(i);i&&!yt.existsFor(i)&&yt.getOrCreate(i),s.has(t)||s.add(t)}unsubscribe(t,i){const s=this.subscribers.get(i||this);s&&s.has(t)&&s.delete(t)}notify(t){const i=Object.freeze({token:this,target:t});this.subscribers.has(this)&&this.subscribers.get(this).forEach(s=>s.handleChange(i)),this.subscribers.has(t)&&this.subscribers.get(t).forEach(s=>s.handleChange(i))}alias(t){return i=>t.getValueFor(i)}}Gt.uniqueId=(()=>{let e=0;return()=>(e++,e.toString(16))})();Gt.tokensById=new Map;class ux{startReflection(t,i){t.subscribe(this,i),this.handleChange({token:t,target:i})}stopReflection(t,i){t.unsubscribe(this,i),this.remove(t,i)}handleChange(t){const{token:i,target:s}=t;this.add(i,s)}add(t,i){lo.getOrCreate(i).setProperty(t.cssCustomProperty,this.resolveCSSValue(yt.getOrCreate(i).get(t)))}remove(t,i){lo.getOrCreate(i).removeProperty(t.cssCustomProperty)}resolveCSSValue(t){return t&&typeof t.createCSS=="function"?t.createCSS():t}}class dx{constructor(t,i,s){this.source=t,this.token=i,this.node=s,this.dependencies=new Set,this.observer=ue.binding(t,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,lr))}}class hx{constructor(){this.values=new Map}set(t,i){this.values.get(t)!==i&&(this.values.set(t,i),ue.getNotifier(this).notify(t.id))}get(t){return ue.track(this,t.id),this.values.get(t)}delete(t){this.values.delete(t)}all(){return this.values.entries()}}const Xo=new WeakMap,Qo=new WeakMap;class yt{constructor(t){this.target=t,this.store=new hx,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(i,s)=>{const n=Gt.getTokenById(s);if(n&&(n.notify(this.target),Gt.isCSSDesignToken(n))){const o=this.parent,r=this.isReflecting(n);if(o){const a=o.get(n),l=i.get(n);a!==l&&!r?this.reflectToCSS(n):a===l&&r&&this.stopReflectToCSS(n)}else r||this.reflectToCSS(n)}}},Xo.set(t,this),ue.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),t instanceof dl?t.$fastController.addBehaviors([this]):t.isConnected&&this.bind()}static getOrCreate(t){return Xo.get(t)||new yt(t)}static existsFor(t){return Xo.has(t)}static findParent(t){if(ys!==t.target){let i=Ya(t.target);for(;i!==null;){if(Xo.has(i))return Xo.get(i);i=Ya(i)}return yt.getOrCreate(ys)}return null}static findClosestAssignedNode(t,i){let s=i;do{if(s.has(t))return s;s=s.parent?s.parent:s.target!==ys?yt.getOrCreate(ys):null}while(s!==null);return null}get parent(){return Qo.get(this)||null}has(t){return this.assignedValues.has(t)}get(t){const i=this.store.get(t);if(i!==void 0)return i;const s=this.getRaw(t);if(s!==void 0)return this.hydrate(t,s),this.get(t)}getRaw(t){var i;return this.assignedValues.has(t)?this.assignedValues.get(t):(i=yt.findClosestAssignedNode(t,this))===null||i===void 0?void 0:i.getRaw(t)}set(t,i){Gt.isDerivedDesignTokenValue(this.assignedValues.get(t))&&this.tearDownBindingObserver(t),this.assignedValues.set(t,i),Gt.isDerivedDesignTokenValue(i)?this.setupBindingObserver(t,i):this.store.set(t,i)}delete(t){this.assignedValues.delete(t),this.tearDownBindingObserver(t);const i=this.getRaw(t);i?this.hydrate(t,i):this.store.delete(t)}bind(){const t=yt.findParent(this);t&&t.appendChild(this);for(const i of this.assignedValues.keys())i.notify(this.target)}unbind(){this.parent&&Qo.get(this).removeChild(this)}appendChild(t){t.parent&&Qo.get(t).removeChild(t);const i=this.children.filter(s=>t.contains(s));Qo.set(t,this),this.children.push(t),i.forEach(s=>t.appendChild(s)),ue.getNotifier(this.store).subscribe(t);for(const[s,n]of this.store.all())t.hydrate(s,this.bindingObservers.has(s)?this.getRaw(s):n)}removeChild(t){const i=this.children.indexOf(t);return i!==-1&&this.children.splice(i,1),ue.getNotifier(this.store).unsubscribe(t),t.parent===this?Qo.delete(t):!1}contains(t){return sx(this.target,t.target)}reflectToCSS(t){this.isReflecting(t)||(this.reflecting.add(t),yt.cssCustomPropertyReflector.startReflection(t,this.target))}stopReflectToCSS(t){this.isReflecting(t)&&(this.reflecting.delete(t),yt.cssCustomPropertyReflector.stopReflection(t,this.target))}isReflecting(t){return this.reflecting.has(t)}handleChange(t,i){const s=Gt.getTokenById(i);s&&this.hydrate(s,this.getRaw(s))}hydrate(t,i){if(!this.has(t)){const s=this.bindingObservers.get(t);Gt.isDerivedDesignTokenValue(i)?s?s.source!==i&&(this.tearDownBindingObserver(t),this.setupBindingObserver(t,i)):this.setupBindingObserver(t,i):(s&&this.tearDownBindingObserver(t),this.store.set(t,i))}}setupBindingObserver(t,i){const s=new dx(i,t,this);return this.bindingObservers.set(t,s),s}tearDownBindingObserver(t){return this.bindingObservers.has(t)?(this.bindingObservers.get(t).disconnect(),this.bindingObservers.delete(t),!0):!1}}yt.cssCustomPropertyReflector=new ux;h([k],yt.prototype,"children",void 0);function fx(e){return Gt.from(e)}const Ye=Object.freeze({create:fx,notifyConnection(e){return!e.isConnected||!yt.existsFor(e)?!1:(yt.getOrCreate(e).bind(),!0)},notifyDisconnection(e){return e.isConnected||!yt.existsFor(e)?!1:(yt.getOrCreate(e).unbind(),!0)},registerRoot(e=ys){Ft.registerRoot(e)},unregisterRoot(e=ys){Ft.unregisterRoot(e)}}),Oc=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),Pc=new Map,Oa=new Map;let po=null;const Jo=ht.createInterface(e=>e.cachedCallback(t=>(po===null&&(po=new og(null,t)),po))),ng=Object.freeze({tagFor(e){return Oa.get(e)},responsibleFor(e){const t=e.$$designSystem$$;return t||ht.findResponsibleContainer(e).get(Jo)},getOrCreate(e){if(!e)return po===null&&(po=ht.getOrCreateDOMContainer().get(Jo)),po;const t=e.$$designSystem$$;if(t)return t;const i=ht.getOrCreateDOMContainer(e);if(i.has(Jo,!1))return i.get(Jo);{const s=new og(e,i);return i.register(wr.instance(Jo,s)),s}}});function px(e,t,i){return typeof e=="string"?{name:e,type:t,callback:i}:e}class og{constructor(t,i){this.owner=t,this.container=i,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>Oc.definitionCallbackOnly,t!==null&&(t.$$designSystem$$=this)}withPrefix(t){return this.prefix=t,this}withShadowRootMode(t){return this.shadowRootMode=t,this}withElementDisambiguation(t){return this.disambiguate=t,this}withDesignTokenRoot(t){return this.designTokenRoot=t,this}register(...t){const i=this.container,s=[],n=this.disambiguate,o=this.shadowRootMode,r={elementPrefix:this.prefix,tryDefineElement(a,l,c){const u=px(a,l,c),{name:d,callback:f,baseClass:b}=u;let{type:$}=u,x=d,_=Pc.get(x),R=!0;for(;_;){const N=n(x,$,_);switch(N){case Oc.ignoreDuplicate:return;case Oc.definitionCallbackOnly:R=!1,_=void 0;break;default:x=N,_=Pc.get(x);break}}R&&((Oa.has($)||$===fe)&&($=class extends ${}),Pc.set(x,$),Oa.set($,x),b&&Oa.set(b,x)),s.push(new gx(i,x,$,o,f,R))}};this.designTokensInitialized||(this.designTokensInitialized=!0,this.designTokenRoot!==null&&Ye.registerRoot(this.designTokenRoot)),i.registerWithContext(r,...t);for(const a of s)a.callback(a),a.willDefine&&a.definition!==null&&a.definition.define();return this}}class gx{constructor(t,i,s,n,o,r){this.container=t,this.name=i,this.type=s,this.shadowRootMode=n,this.callback=o,this.willDefine=r,this.definition=null}definePresentation(t){Jp.define(this.name,t,this.container)}defineElement(t){this.definition=new ul(this.type,Object.assign(Object.assign({},t),{name:this.name}))}tagFor(t){return ng.tagFor(t)}}const mx=(e,t)=>A`
    <div class="positioning-region" part="positioning-region">
        ${ft(i=>i.modal,A`
                <div
                    class="overlay"
                    part="overlay"
                    role="presentation"
                    @click="${i=>i.dismiss()}"
                ></div>
            `)}
        <div
            role="dialog"
            tabindex="-1"
            class="control"
            part="control"
            aria-modal="${i=>i.modal}"
            aria-describedby="${i=>i.ariaDescribedby}"
            aria-labelledby="${i=>i.ariaLabelledby}"
            aria-label="${i=>i.ariaLabel}"
            ${Ee("dialog")}
        >
            <slot></slot>
        </div>
    </div>
`;/*!
* tabbable 5.3.3
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var rg=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],vx=rg.join(","),ag=typeof Element>"u",kr=ag?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,ru=!ag&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},bx=function(t,i){return t.tabIndex<0&&(i||/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||t.isContentEditable)&&isNaN(parseInt(t.getAttribute("tabindex"),10))?0:t.tabIndex},lg=function(t){return t.tagName==="INPUT"},yx=function(t){return lg(t)&&t.type==="hidden"},xx=function(t){var i=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(s){return s.tagName==="SUMMARY"});return i},wx=function(t,i){for(var s=0;s<t.length;s++)if(t[s].checked&&t[s].form===i)return t[s]},$x=function(t){if(!t.name)return!0;var i=t.form||ru(t),s=function(a){return i.querySelectorAll('input[type="radio"][name="'+a+'"]')},n;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")n=s(window.CSS.escape(t.name));else try{n=s(t.name)}catch(r){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",r.message),!1}var o=wx(n,t.form);return!o||o===t},_x=function(t){return lg(t)&&t.type==="radio"},kx=function(t){return _x(t)&&!$x(t)},tf=function(t){var i=t.getBoundingClientRect(),s=i.width,n=i.height;return s===0&&n===0},Sx=function(t,i){var s=i.displayCheck,n=i.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var o=kr.call(t,"details>summary:first-of-type"),r=o?t.parentElement:t;if(kr.call(r,"details:not([open]) *"))return!0;var a=ru(t).host,l=(a==null?void 0:a.ownerDocument.contains(a))||t.ownerDocument.contains(t);if(!s||s==="full"){if(typeof n=="function"){for(var c=t;t;){var u=t.parentElement,d=ru(t);if(u&&!u.shadowRoot&&n(u)===!0)return tf(t);t.assignedSlot?t=t.assignedSlot:!u&&d!==t.ownerDocument?t=d.host:t=u}t=c}if(l)return!t.getClientRects().length}else if(s==="non-zero-area")return tf(t);return!1},Cx=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var i=t.parentElement;i;){if(i.tagName==="FIELDSET"&&i.disabled){for(var s=0;s<i.children.length;s++){var n=i.children.item(s);if(n.tagName==="LEGEND")return kr.call(i,"fieldset[disabled] *")?!0:!n.contains(t)}return!0}i=i.parentElement}return!1},cg=function(t,i){return!(i.disabled||yx(i)||Sx(i,t)||xx(i)||Cx(i))},Ix=function(t,i){return!(kx(i)||bx(i)<0||!cg(t,i))},sf=function(t,i){if(i=i||{},!t)throw new Error("No node provided");return kr.call(t,vx)===!1?!1:Ix(i,t)},Tx=rg.concat("iframe").join(","),nf=function(t,i){if(i=i||{},!t)throw new Error("No node provided");return kr.call(t,Tx)===!1?!1:cg(i,t)};class Ii extends fe{constructor(){super(...arguments),this.modal=!0,this.hidden=!1,this.trapFocus=!0,this.trapFocusChanged=()=>{this.$fastController.isConnected&&this.updateTrapFocus()},this.isTrappingFocus=!1,this.handleDocumentKeydown=t=>{if(!t.defaultPrevented&&!this.hidden)switch(t.key){case Ao:this.dismiss(),t.preventDefault();break;case fl:this.handleTabKeyDown(t);break}},this.handleDocumentFocus=t=>{!t.defaultPrevented&&this.shouldForceFocus(t.target)&&(this.focusFirstElement(),t.preventDefault())},this.handleTabKeyDown=t=>{if(!this.trapFocus||this.hidden)return;const i=this.getTabQueueBounds();if(i.length!==0){if(i.length===1){i[0].focus(),t.preventDefault();return}t.shiftKey&&t.target===i[0]?(i[i.length-1].focus(),t.preventDefault()):!t.shiftKey&&t.target===i[i.length-1]&&(i[0].focus(),t.preventDefault())}},this.getTabQueueBounds=()=>{const t=[];return Ii.reduceTabbableItems(t,this)},this.focusFirstElement=()=>{const t=this.getTabQueueBounds();t.length>0?t[0].focus():this.dialog instanceof HTMLElement&&this.dialog.focus()},this.shouldForceFocus=t=>this.isTrappingFocus&&!this.contains(t),this.shouldTrapFocus=()=>this.trapFocus&&!this.hidden,this.updateTrapFocus=t=>{const i=t===void 0?this.shouldTrapFocus():t;i&&!this.isTrappingFocus?(this.isTrappingFocus=!0,document.addEventListener("focusin",this.handleDocumentFocus),de.queueUpdate(()=>{this.shouldForceFocus(document.activeElement)&&this.focusFirstElement()})):!i&&this.isTrappingFocus&&(this.isTrappingFocus=!1,document.removeEventListener("focusin",this.handleDocumentFocus))}}dismiss(){this.$emit("dismiss"),this.$emit("cancel")}show(){this.hidden=!1}hide(){this.hidden=!0,this.$emit("close")}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.handleDocumentKeydown),this.notifier=ue.getNotifier(this),this.notifier.subscribe(this,"hidden"),this.updateTrapFocus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeydown),this.updateTrapFocus(!1),this.notifier.unsubscribe(this,"hidden")}handleChange(t,i){switch(i){case"hidden":this.updateTrapFocus();break}}static reduceTabbableItems(t,i){return i.getAttribute("tabindex")==="-1"?t:sf(i)||Ii.isFocusableFastElement(i)&&Ii.hasTabbableShadow(i)?(t.push(i),t):i.childElementCount?t.concat(Array.from(i.children).reduce(Ii.reduceTabbableItems,[])):t}static isFocusableFastElement(t){var i,s;return!!(!((s=(i=t.$fastController)===null||i===void 0?void 0:i.definition.shadowOptions)===null||s===void 0)&&s.delegatesFocus)}static hasTabbableShadow(t){var i,s;return Array.from((s=(i=t.shadowRoot)===null||i===void 0?void 0:i.querySelectorAll("*"))!==null&&s!==void 0?s:[]).some(n=>sf(n))}}h([p({mode:"boolean"})],Ii.prototype,"modal",void 0);h([p({mode:"boolean"})],Ii.prototype,"hidden",void 0);h([p({attribute:"trap-focus",mode:"boolean"})],Ii.prototype,"trapFocus",void 0);h([p({attribute:"aria-describedby"})],Ii.prototype,"ariaDescribedby",void 0);h([p({attribute:"aria-labelledby"})],Ii.prototype,"ariaLabelledby",void 0);h([p({attribute:"aria-label"})],Ii.prototype,"ariaLabel",void 0);const Fx=(e,t)=>A`
    <template role="${i=>i.role}" aria-orientation="${i=>i.orientation}"></template>
`,Dx={separator:"separator",presentation:"presentation"};class yl extends fe{constructor(){super(...arguments),this.role=Dx.separator,this.orientation=bt.horizontal}}h([p],yl.prototype,"role",void 0);h([p],yl.prototype,"orientation",void 0);const au={next:"next",previous:"previous"},Rx=(e,t)=>A`
    <template
        role="button"
        aria-disabled="${i=>i.disabled?!0:void 0}"
        tabindex="${i=>i.hiddenFromAT?-1:0}"
        class="${i=>i.direction} ${i=>i.disabled?"disabled":""}"
        @keyup="${(i,s)=>i.keyupHandler(s.event)}"
    >
        ${ft(i=>i.direction===au.next,A`
                <span part="next" class="next">
                    <slot name="next">
                        ${t.next||""}
                    </slot>
                </span>
            `)}
        ${ft(i=>i.direction===au.previous,A`
                <span part="previous" class="previous">
                    <slot name="previous">
                        ${t.previous||""}
                    </slot>
                </span>
            `)}
    </template>
`;class xl extends fe{constructor(){super(...arguments),this.hiddenFromAT=!0,this.direction=au.next}keyupHandler(t){if(!this.hiddenFromAT){const i=t.key;(i==="Enter"||i==="Space")&&this.$emit("click",t),i==="Escape"&&this.blur()}}}h([p({mode:"boolean"})],xl.prototype,"disabled",void 0);h([p({attribute:"aria-hidden",converter:Hr})],xl.prototype,"hiddenFromAT",void 0);h([p],xl.prototype,"direction",void 0);const Ex=(e,t)=>A`
    <template
        aria-checked="${i=>i.ariaChecked}"
        aria-disabled="${i=>i.ariaDisabled}"
        aria-posinset="${i=>i.ariaPosInSet}"
        aria-selected="${i=>i.ariaSelected}"
        aria-setsize="${i=>i.ariaSetSize}"
        class="${i=>[i.checked&&"checked",i.selected&&"selected",i.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${Jt(e,t)}
        <span class="content" part="content">
            <slot ${it("content")}></slot>
        </span>
        ${Qt(e,t)}
    </template>
`;class zr extends ri{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var t;return(t=this.options)===null||t===void 0?void 0:t.filter(i=>i.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(t,i){var s,n;this.ariaActiveDescendant=(n=(s=this.options[i])===null||s===void 0?void 0:s.id)!==null&&n!==void 0?n:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const t=this.activeOption;t&&(t.checked=!0)}checkFirstOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((i,s)=>{i.checked=la(s,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((i,s)=>{i.checked=la(s,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((i,s)=>{i.checked=la(s,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.checkedOptions.length===1&&(this.rangeStartIndex+=1),this.options.forEach((i,s)=>{i.checked=la(s,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(t){var i;if(!this.multiple)return super.clickHandler(t);const s=(i=t.target)===null||i===void 0?void 0:i.closest("[role=option]");if(!(!s||s.disabled))return this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(s),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(t){if(!this.multiple)return super.focusinHandler(t);!this.shouldSkipFocus&&t.target===t.currentTarget&&(this.uncheckAllOptions(),this.activeIndex===-1&&(this.activeIndex=this.firstSelectedOptionIndex!==-1?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(t){this.multiple&&this.uncheckAllOptions()}keydownHandler(t){if(!this.multiple)return super.keydownHandler(t);if(this.disabled)return!0;const{key:i,shiftKey:s}=t;switch(this.shouldSkipFocus=!1,i){case cs:{this.checkFirstOption(s);return}case Fi:{this.checkNextOption(s);return}case Di:{this.checkPreviousOption(s);return}case us:{this.checkLastOption(s);return}case fl:return this.focusAndScrollOptionIntoView(),!0;case Ao:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case Vn:if(t.preventDefault(),this.typeAheadExpired){this.toggleSelectedForAllCheckedOptions();return}default:return i.length===1&&this.handleTypeAhead(`${i}`),!0}}mousedownHandler(t){if(t.offsetX>=0&&t.offsetX<=this.scrollWidth)return super.mousedownHandler(t)}multipleChanged(t,i){var s;this.ariaMultiSelectable=i?"true":null,(s=this.options)===null||s===void 0||s.forEach(n=>{n.checked=i?!1:void 0}),this.setSelectedOptions()}setSelectedOptions(){if(!this.multiple){super.setSelectedOptions();return}this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(t=>t.selected),this.focusAndScrollOptionIntoView())}sizeChanged(t,i){var s;const n=Math.max(0,parseInt((s=i==null?void 0:i.toFixed())!==null&&s!==void 0?s:"",10));n!==i&&de.queueUpdate(()=>{this.size=n})}toggleSelectedForAllCheckedOptions(){const t=this.checkedOptions.filter(s=>!s.disabled),i=!t.every(s=>s.selected);t.forEach(s=>s.selected=i),this.selectedIndex=this.options.indexOf(t[t.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(t,i){if(!this.multiple){super.typeaheadBufferChanged(t,i);return}if(this.$fastController.isConnected){const s=this.getTypeaheadMatches(),n=this.options.indexOf(s[0]);n>-1&&(this.activeIndex=n,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}uncheckAllOptions(t=!1){this.options.forEach(i=>i.checked=this.multiple?!1:void 0),t||(this.rangeStartIndex=-1)}}h([k],zr.prototype,"activeIndex",void 0);h([p({mode:"boolean"})],zr.prototype,"multiple",void 0);h([p({converter:q})],zr.prototype,"size",void 0);const Ox=(e,t)=>A`
    <template
        aria-activedescendant="${i=>i.ariaActiveDescendant}"
        aria-multiselectable="${i=>i.ariaMultiSelectable}"
        class="listbox"
        role="listbox"
        tabindex="${i=>i.disabled?null:"0"}"
        @click="${(i,s)=>i.clickHandler(s.event)}"
        @focusin="${(i,s)=>i.focusinHandler(s.event)}"
        @keydown="${(i,s)=>i.keydownHandler(s.event)}"
        @mousedown="${(i,s)=>i.mousedownHandler(s.event)}"
    >
        <slot
            ${it({filter:zr.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
        ></slot>
    </template>
`,qt={menuitem:"menuitem",menuitemcheckbox:"menuitemcheckbox",menuitemradio:"menuitemradio"},Px={[qt.menuitem]:"menuitem",[qt.menuitemcheckbox]:"menuitemcheckbox",[qt.menuitemradio]:"menuitemradio"};class vi extends fe{constructor(){super(...arguments),this.role=qt.menuitem,this.hasSubmenu=!1,this.currentDirection=Qe.ltr,this.focusSubmenuOnLoad=!1,this.handleMenuItemKeyDown=t=>{if(t.defaultPrevented)return!1;switch(t.key){case Ds:case Vn:return this.invoke(),!1;case on:return this.expandAndFocus(),!1;case nn:if(this.expanded)return this.expanded=!1,this.focus(),!1}return!0},this.handleMenuItemClick=t=>(t.defaultPrevented||this.disabled||this.invoke(),!1),this.submenuLoaded=()=>{this.focusSubmenuOnLoad&&(this.focusSubmenuOnLoad=!1,this.hasSubmenu&&(this.submenu.focus(),this.setAttribute("tabindex","-1")))},this.handleMouseOver=t=>(this.disabled||!this.hasSubmenu||this.expanded||(this.expanded=!0),!1),this.handleMouseOut=t=>(!this.expanded||this.contains(document.activeElement)||(this.expanded=!1),!1),this.expandAndFocus=()=>{this.hasSubmenu&&(this.focusSubmenuOnLoad=!0,this.expanded=!0)},this.invoke=()=>{if(!this.disabled)switch(this.role){case qt.menuitemcheckbox:this.checked=!this.checked;break;case qt.menuitem:this.updateSubmenu(),this.hasSubmenu?this.expandAndFocus():this.$emit("change");break;case qt.menuitemradio:this.checked||(this.checked=!0);break}},this.updateSubmenu=()=>{this.submenu=this.domChildren().find(t=>t.getAttribute("role")==="menu"),this.hasSubmenu=this.submenu!==void 0}}expandedChanged(t){if(this.$fastController.isConnected){if(this.submenu===void 0)return;this.expanded===!1?this.submenu.collapseExpandedItem():this.currentDirection=Pn(this),this.$emit("expanded-change",this,{bubbles:!1})}}checkedChanged(t,i){this.$fastController.isConnected&&this.$emit("change")}connectedCallback(){super.connectedCallback(),de.queueUpdate(()=>{this.updateSubmenu()}),this.startColumnCount||(this.startColumnCount=1),this.observer=new MutationObserver(this.updateSubmenu)}disconnectedCallback(){super.disconnectedCallback(),this.submenu=void 0,this.observer!==void 0&&(this.observer.disconnect(),this.observer=void 0)}domChildren(){return Array.from(this.children).filter(t=>!t.hasAttribute("hidden"))}}h([p({mode:"boolean"})],vi.prototype,"disabled",void 0);h([p({mode:"boolean"})],vi.prototype,"expanded",void 0);h([k],vi.prototype,"startColumnCount",void 0);h([p],vi.prototype,"role",void 0);h([p({mode:"boolean"})],vi.prototype,"checked",void 0);h([k],vi.prototype,"submenuRegion",void 0);h([k],vi.prototype,"hasSubmenu",void 0);h([k],vi.prototype,"currentDirection",void 0);h([k],vi.prototype,"submenu",void 0);ot(vi,oi);const Lx=(e,t)=>A`
    <template
        role="${i=>i.role}"
        aria-haspopup="${i=>i.hasSubmenu?"menu":void 0}"
        aria-checked="${i=>i.role!==qt.menuitem?i.checked:void 0}"
        aria-disabled="${i=>i.disabled}"
        aria-expanded="${i=>i.expanded}"
        @keydown="${(i,s)=>i.handleMenuItemKeyDown(s.event)}"
        @click="${(i,s)=>i.handleMenuItemClick(s.event)}"
        @mouseover="${(i,s)=>i.handleMouseOver(s.event)}"
        @mouseout="${(i,s)=>i.handleMouseOut(s.event)}"
        class="${i=>i.disabled?"disabled":""} ${i=>i.expanded?"expanded":""} ${i=>`indent-${i.startColumnCount}`}"
    >
            ${ft(i=>i.role===qt.menuitemcheckbox,A`
                    <div part="input-container" class="input-container">
                        <span part="checkbox" class="checkbox">
                            <slot name="checkbox-indicator">
                                ${t.checkboxIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
            ${ft(i=>i.role===qt.menuitemradio,A`
                    <div part="input-container" class="input-container">
                        <span part="radio" class="radio">
                            <slot name="radio-indicator">
                                ${t.radioIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
        </div>
        ${Jt(e,t)}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${Qt(e,t)}
        ${ft(i=>i.hasSubmenu,A`
                <div
                    part="expand-collapse-glyph-container"
                    class="expand-collapse-glyph-container"
                >
                    <span part="expand-collapse" class="expand-collapse">
                        <slot name="expand-collapse-indicator">
                            ${t.expandCollapseGlyph||""}
                        </slot>
                    </span>
                </div>
            `)}
        ${ft(i=>i.expanded,A`
                <${e.tagFor(ce)}
                    :anchorElement="${i=>i}"
                    vertical-positioning-mode="dynamic"
                    vertical-default-position="bottom"
                    vertical-inset="true"
                    horizontal-positioning-mode="dynamic"
                    horizontal-default-position="end"
                    class="submenu-region"
                    dir="${i=>i.currentDirection}"
                    @loaded="${i=>i.submenuLoaded()}"
                    ${Ee("submenuRegion")}
                    part="submenu-region"
                >
                    <slot name="submenu"></slot>
                </${e.tagFor(ce)}>
            `)}
    </template>
`,Ax=(e,t)=>A`
    <template
        slot="${i=>i.slot?i.slot:i.isNestedMenu()?"submenu":void 0}"
        role="menu"
        @keydown="${(i,s)=>i.handleMenuKeyDown(s.event)}"
        @focusout="${(i,s)=>i.handleFocusOut(s.event)}"
    >
        <slot ${it("items")}></slot>
    </template>
`;let wl=class ug extends fe{constructor(){super(...arguments),this.expandedItem=null,this.focusIndex=-1,this.isNestedMenu=()=>this.parentElement!==null&&ko(this.parentElement)&&this.parentElement.getAttribute("role")==="menuitem",this.handleFocusOut=t=>{if(!this.contains(t.relatedTarget)&&this.menuItems!==void 0){this.collapseExpandedItem();const i=this.menuItems.findIndex(this.isFocusableElement);this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.menuItems[i].setAttribute("tabindex","0"),this.focusIndex=i}},this.handleItemFocus=t=>{const i=t.target;this.menuItems!==void 0&&i!==this.menuItems[this.focusIndex]&&(this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=this.menuItems.indexOf(i),i.setAttribute("tabindex","0"))},this.handleExpandedChanged=t=>{if(t.defaultPrevented||t.target===null||this.menuItems===void 0||this.menuItems.indexOf(t.target)<0)return;t.preventDefault();const i=t.target;if(this.expandedItem!==null&&i===this.expandedItem&&i.expanded===!1){this.expandedItem=null;return}i.expanded&&(this.expandedItem!==null&&this.expandedItem!==i&&(this.expandedItem.expanded=!1),this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.expandedItem=i,this.focusIndex=this.menuItems.indexOf(i),i.setAttribute("tabindex","0"))},this.removeItemListeners=()=>{this.menuItems!==void 0&&this.menuItems.forEach(t=>{t.removeEventListener("expanded-change",this.handleExpandedChanged),t.removeEventListener("focus",this.handleItemFocus)})},this.setItems=()=>{const t=this.domChildren();this.removeItemListeners(),this.menuItems=t;const i=this.menuItems.filter(this.isMenuItemElement);i.length&&(this.focusIndex=0);function s(o){const r=o.getAttribute("role"),a=o.querySelector("[slot=start]");return r!==qt.menuitem&&a===null||r===qt.menuitem&&a!==null?1:r!==qt.menuitem&&a!==null?2:0}const n=i.reduce((o,r)=>{const a=s(r);return o>a?o:a},0);i.forEach((o,r)=>{o.setAttribute("tabindex",r===0?"0":"-1"),o.addEventListener("expanded-change",this.handleExpandedChanged),o.addEventListener("focus",this.handleItemFocus),o instanceof vi&&(o.startColumnCount=n)})},this.changeHandler=t=>{if(this.menuItems===void 0)return;const i=t.target,s=this.menuItems.indexOf(i);if(s!==-1&&i.role==="menuitemradio"&&i.checked===!0){for(let o=s-1;o>=0;--o){const r=this.menuItems[o],a=r.getAttribute("role");if(a===qt.menuitemradio&&(r.checked=!1),a==="separator")break}const n=this.menuItems.length-1;for(let o=s+1;o<=n;++o){const r=this.menuItems[o],a=r.getAttribute("role");if(a===qt.menuitemradio&&(r.checked=!1),a==="separator")break}}},this.isMenuItemElement=t=>ko(t)&&ug.focusableElementRoles.hasOwnProperty(t.getAttribute("role")),this.isFocusableElement=t=>this.isMenuItemElement(t)}itemsChanged(t,i){this.$fastController.isConnected&&this.menuItems!==void 0&&this.setItems()}connectedCallback(){super.connectedCallback(),de.queueUpdate(()=>{this.setItems()}),this.addEventListener("change",this.changeHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeItemListeners(),this.menuItems=void 0,this.removeEventListener("change",this.changeHandler)}focus(){this.setFocus(0,1)}collapseExpandedItem(){this.expandedItem!==null&&(this.expandedItem.expanded=!1,this.expandedItem=null)}handleMenuKeyDown(t){if(!(t.defaultPrevented||this.menuItems===void 0))switch(t.key){case Fi:this.setFocus(this.focusIndex+1,1);return;case Di:this.setFocus(this.focusIndex-1,-1);return;case us:this.setFocus(this.menuItems.length-1,-1);return;case cs:this.setFocus(0,1);return;default:return!0}}domChildren(){return Array.from(this.children).filter(t=>!t.hasAttribute("hidden"))}setFocus(t,i){if(this.menuItems!==void 0)for(;t>=0&&t<this.menuItems.length;){const s=this.menuItems[t];if(this.isFocusableElement(s)){this.focusIndex>-1&&this.menuItems.length>=this.focusIndex-1&&this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=t,s.setAttribute("tabindex","0"),s.focus();break}t+=i}}};wl.focusableElementRoles=Px;h([k],wl.prototype,"items",void 0);const Mx=(e,t)=>A`
    <template class="${i=>i.readOnly?"readonly":""}">
        <label
            part="label"
            for="control"
            class="${i=>i.defaultSlottedNodes&&i.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${it("defaultSlottedNodes")}></slot>
        </label>
        <div class="root" part="root">
            ${Jt(e,t)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${i=>i.handleTextInput()}"
                @change="${i=>i.handleChange()}"
                @keydown="${(i,s)=>i.handleKeyDown(s.event)}"
                @blur="${(i,s)=>i.handleBlur()}"
                ?autofocus="${i=>i.autofocus}"
                ?disabled="${i=>i.disabled}"
                list="${i=>i.list}"
                maxlength="${i=>i.maxlength}"
                minlength="${i=>i.minlength}"
                placeholder="${i=>i.placeholder}"
                ?readonly="${i=>i.readOnly}"
                ?required="${i=>i.required}"
                size="${i=>i.size}"
                type="text"
                inputmode="numeric"
                min="${i=>i.min}"
                max="${i=>i.max}"
                step="${i=>i.step}"
                aria-atomic="${i=>i.ariaAtomic}"
                aria-busy="${i=>i.ariaBusy}"
                aria-controls="${i=>i.ariaControls}"
                aria-current="${i=>i.ariaCurrent}"
                aria-describedby="${i=>i.ariaDescribedby}"
                aria-details="${i=>i.ariaDetails}"
                aria-disabled="${i=>i.ariaDisabled}"
                aria-errormessage="${i=>i.ariaErrormessage}"
                aria-flowto="${i=>i.ariaFlowto}"
                aria-haspopup="${i=>i.ariaHaspopup}"
                aria-hidden="${i=>i.ariaHidden}"
                aria-invalid="${i=>i.ariaInvalid}"
                aria-keyshortcuts="${i=>i.ariaKeyshortcuts}"
                aria-label="${i=>i.ariaLabel}"
                aria-labelledby="${i=>i.ariaLabelledby}"
                aria-live="${i=>i.ariaLive}"
                aria-owns="${i=>i.ariaOwns}"
                aria-relevant="${i=>i.ariaRelevant}"
                aria-roledescription="${i=>i.ariaRoledescription}"
                ${Ee("control")}
            />
            ${ft(i=>!i.hideStep&&!i.readOnly&&!i.disabled,A`
                    <div class="controls" part="controls">
                        <div class="step-up" part="step-up" @click="${i=>i.stepUp()}">
                            <slot name="step-up-glyph">
                                ${t.stepUpGlyph||""}
                            </slot>
                        </div>
                        <div
                            class="step-down"
                            part="step-down"
                            @click="${i=>i.stepDown()}"
                        >
                            <slot name="step-down-glyph">
                                ${t.stepDownGlyph||""}
                            </slot>
                        </div>
                    </div>
                `)}
            ${Qt(e,t)}
        </div>
    </template>
`;class Vx extends fe{}class Hx extends Rs(Vx){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const Nx={email:"email",password:"password",tel:"tel",text:"text",url:"url"};let ai=class extends Hx{constructor(){super(...arguments),this.type=Nx.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&de.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};h([p({attribute:"readonly",mode:"boolean"})],ai.prototype,"readOnly",void 0);h([p({mode:"boolean"})],ai.prototype,"autofocus",void 0);h([p],ai.prototype,"placeholder",void 0);h([p],ai.prototype,"type",void 0);h([p],ai.prototype,"list",void 0);h([p({converter:q})],ai.prototype,"maxlength",void 0);h([p({converter:q})],ai.prototype,"minlength",void 0);h([p],ai.prototype,"pattern",void 0);h([p({converter:q})],ai.prototype,"size",void 0);h([p({mode:"boolean"})],ai.prototype,"spellcheck",void 0);h([k],ai.prototype,"defaultSlottedNodes",void 0);class $l{}ot($l,Je);ot(ai,oi,$l);class zx extends fe{}class Bx extends Rs(zx){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let Kt=class extends Bx{constructor(){super(...arguments),this.hideStep=!1,this.step=1,this.isUserInput=!1}maxChanged(t,i){var s;this.max=Math.max(i,(s=this.min)!==null&&s!==void 0?s:i);const n=Math.min(this.min,this.max);this.min!==void 0&&this.min!==n&&(this.min=n),this.value=this.getValidValue(this.value)}minChanged(t,i){var s;this.min=Math.min(i,(s=this.max)!==null&&s!==void 0?s:i);const n=Math.max(this.min,this.max);this.max!==void 0&&this.max!==n&&(this.max=n),this.value=this.getValidValue(this.value)}get valueAsNumber(){return parseFloat(super.value)}set valueAsNumber(t){this.value=t.toString()}valueChanged(t,i){this.value=this.getValidValue(i),i===this.value&&(this.control&&!this.isUserInput&&(this.control.value=this.value),super.valueChanged(t,this.value),t!==void 0&&!this.isUserInput&&(this.$emit("input"),this.$emit("change")),this.isUserInput=!1)}validate(){super.validate(this.control)}getValidValue(t){var i,s;let n=parseFloat(parseFloat(t).toPrecision(12));return isNaN(n)?n="":(n=Math.min(n,(i=this.max)!==null&&i!==void 0?i:n),n=Math.max(n,(s=this.min)!==null&&s!==void 0?s:n).toString()),n}stepUp(){const t=parseFloat(this.value),i=isNaN(t)?this.min>0?this.min:this.max<0?this.max:this.min?0:this.step:t+this.step;this.value=i.toString()}stepDown(){const t=parseFloat(this.value),i=isNaN(t)?this.min>0?this.min:this.max<0?this.max:this.min?0:0-this.step:t-this.step;this.value=i.toString()}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","number"),this.validate(),this.control.value=this.value,this.autofocus&&de.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.control.value=this.control.value.replace(/[^0-9\-+e.]/g,""),this.isUserInput=!0,this.value=this.control.value}handleChange(){this.$emit("change")}handleKeyDown(t){switch(t.key){case Di:return this.stepUp(),!1;case Fi:return this.stepDown(),!1}return!0}handleBlur(){this.control.value=this.value}};h([p({attribute:"readonly",mode:"boolean"})],Kt.prototype,"readOnly",void 0);h([p({mode:"boolean"})],Kt.prototype,"autofocus",void 0);h([p({attribute:"hide-step",mode:"boolean"})],Kt.prototype,"hideStep",void 0);h([p],Kt.prototype,"placeholder",void 0);h([p],Kt.prototype,"list",void 0);h([p({converter:q})],Kt.prototype,"maxlength",void 0);h([p({converter:q})],Kt.prototype,"minlength",void 0);h([p({converter:q})],Kt.prototype,"size",void 0);h([p({converter:q})],Kt.prototype,"step",void 0);h([p({converter:q})],Kt.prototype,"max",void 0);h([p({converter:q})],Kt.prototype,"min",void 0);h([k],Kt.prototype,"defaultSlottedNodes",void 0);ot(Kt,oi,$l);const of=44,jx=(e,t)=>A`
    <template
        role="progressbar"
        aria-valuenow="${i=>i.value}"
        aria-valuemin="${i=>i.min}"
        aria-valuemax="${i=>i.max}"
        class="${i=>i.paused?"paused":""}"
    >
        ${ft(i=>typeof i.value=="number",A`
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
                        style="stroke-dasharray: ${i=>of*i.percentComplete/100}px ${of}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `,A`
                <slot name="indeterminate" slot="indeterminate">
                    ${t.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`;class Hn extends fe{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const t=typeof this.min=="number"?this.min:0,i=typeof this.max=="number"?this.max:100,s=typeof this.value=="number"?this.value:0,n=i-t;this.percentComplete=n===0?0:Math.fround((s-t)/n*100)}}h([p({converter:q})],Hn.prototype,"value",void 0);h([p({converter:q})],Hn.prototype,"min",void 0);h([p({converter:q})],Hn.prototype,"max",void 0);h([p({mode:"boolean"})],Hn.prototype,"paused",void 0);h([k],Hn.prototype,"percentComplete",void 0);const Yx=(e,t)=>A`
    <template
        role="progressbar"
        aria-valuenow="${i=>i.value}"
        aria-valuemin="${i=>i.min}"
        aria-valuemax="${i=>i.max}"
        class="${i=>i.paused?"paused":""}"
    >
        ${ft(i=>typeof i.value=="number",A`
                <div class="progress" part="progress" slot="determinate">
                    <div
                        class="determinate"
                        part="determinate"
                        style="width: ${i=>i.percentComplete}%"
                    ></div>
                </div>
            `,A`
                <div class="progress" part="progress" slot="indeterminate">
                    <slot class="indeterminate" name="indeterminate">
                        ${t.indeterminateIndicator1||""}
                        ${t.indeterminateIndicator2||""}
                    </slot>
                </div>
            `)}
    </template>
`,Ux=(e,t)=>A`
    <template
        role="radiogroup"
        aria-disabled="${i=>i.disabled}"
        aria-readonly="${i=>i.readOnly}"
        @click="${(i,s)=>i.clickHandler(s.event)}"
        @keydown="${(i,s)=>i.keydownHandler(s.event)}"
        @focusout="${(i,s)=>i.focusOutHandler(s.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${i=>i.orientation===bt.horizontal?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${it({property:"slottedRadioButtons",filter:Cs("[role=radio]")})}
            ></slot>
        </div>
    </template>
`;class hn extends fe{constructor(){super(...arguments),this.orientation=bt.horizontal,this.radioChangeHandler=t=>{const i=t.target;i.checked&&(this.slottedRadioButtons.forEach(s=>{s!==i&&(s.checked=!1,this.isInsideFoundationToolbar||s.setAttribute("tabindex","-1"))}),this.selectedRadio=i,this.value=i.value,i.setAttribute("tabindex","0"),this.focusedRadio=i),t.stopPropagation()},this.moveToRadioByIndex=(t,i)=>{const s=t[i];this.isInsideToolbar||(s.setAttribute("tabindex","0"),s.readOnly?this.slottedRadioButtons.forEach(n=>{n!==s&&n.setAttribute("tabindex","-1")}):(s.checked=!0,this.selectedRadio=s)),this.focusedRadio=s,s.focus()},this.moveRightOffGroup=()=>{var t;(t=this.nextElementSibling)===null||t===void 0||t.focus()},this.moveLeftOffGroup=()=>{var t;(t=this.previousElementSibling)===null||t===void 0||t.focus()},this.focusOutHandler=t=>{const i=this.slottedRadioButtons,s=t.target,n=s!==null?i.indexOf(s):0,o=this.focusedRadio?i.indexOf(this.focusedRadio):-1;return(o===0&&n===o||o===i.length-1&&o===n)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),i.forEach(r=>{r!==this.selectedRadio&&r.setAttribute("tabindex","-1")}))):(this.focusedRadio=i[0],this.focusedRadio.setAttribute("tabindex","0"),i.forEach(r=>{r!==this.focusedRadio&&r.setAttribute("tabindex","-1")}))),!0},this.clickHandler=t=>{const i=t.target;if(i){const s=this.slottedRadioButtons;i.checked||s.indexOf(i)===0?(i.setAttribute("tabindex","0"),this.selectedRadio=i):(i.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=i}t.preventDefault()},this.shouldMoveOffGroupToTheRight=(t,i,s)=>t===i.length&&this.isInsideToolbar&&s===on,this.shouldMoveOffGroupToTheLeft=(t,i)=>(this.focusedRadio?t.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&i===nn,this.checkFocusedRadio=()=>{this.focusedRadio!==null&&!this.focusedRadio.readOnly&&!this.focusedRadio.checked&&(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=t=>{const i=this.slottedRadioButtons;let s=0;if(s=this.focusedRadio?i.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(s,i,t.key)){this.moveRightOffGroup();return}else s===i.length&&(s=0);for(;s<i.length&&i.length>1;)if(i[s].disabled){if(this.focusedRadio&&s===i.indexOf(this.focusedRadio))break;if(s+1>=i.length){if(this.isInsideToolbar)break;s=0}else s+=1}else{this.moveToRadioByIndex(i,s);break}},this.moveLeft=t=>{const i=this.slottedRadioButtons;let s=0;if(s=this.focusedRadio?i.indexOf(this.focusedRadio)-1:0,s=s<0?i.length-1:s,this.shouldMoveOffGroupToTheLeft(i,t.key)){this.moveLeftOffGroup();return}for(;s>=0&&i.length>1;)if(i[s].disabled){if(this.focusedRadio&&s===i.indexOf(this.focusedRadio))break;s-1<0?s=i.length-1:s-=1}else{this.moveToRadioByIndex(i,s);break}},this.keydownHandler=t=>{const i=t.key;if(i in ao&&this.isInsideFoundationToolbar)return!0;switch(i){case Ds:{this.checkFocusedRadio();break}case on:case Fi:{this.direction===Qe.ltr?this.moveRight(t):this.moveLeft(t);break}case nn:case Di:{this.direction===Qe.ltr?this.moveLeft(t):this.moveRight(t);break}default:return!0}}}readOnlyChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(t=>{this.readOnly?t.readOnly=!0:t.readOnly=!1})}disabledChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(t=>{this.disabled?t.disabled=!0:t.disabled=!1})}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(t=>{t.setAttribute("name",this.name)})}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(t=>{t.value===this.value&&(t.checked=!0,this.selectedRadio=t)}),this.$emit("change")}slottedRadioButtonsChanged(t,i){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var t;return(t=this.parentToolbar)!==null&&t!==void 0?t:!1}get isInsideFoundationToolbar(){var t;return!!(!((t=this.parentToolbar)===null||t===void 0)&&t.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=Pn(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach(t=>{t.removeEventListener("change",this.radioChangeHandler)})}setupRadioButtons(){const t=this.slottedRadioButtons.filter(n=>n.hasAttribute("checked")),i=t?t.length:0;if(i>1){const n=t[i-1];n.checked=!0}let s=!1;if(this.slottedRadioButtons.forEach(n=>{this.name!==void 0&&n.setAttribute("name",this.name),this.disabled&&(n.disabled=!0),this.readOnly&&(n.readOnly=!0),this.value&&this.value===n.value?(this.selectedRadio=n,this.focusedRadio=n,n.checked=!0,n.setAttribute("tabindex","0"),s=!0):(this.isInsideFoundationToolbar||n.setAttribute("tabindex","-1"),n.checked=!1),n.addEventListener("change",this.radioChangeHandler)}),this.value===void 0&&this.slottedRadioButtons.length>0){const n=this.slottedRadioButtons.filter(r=>r.hasAttribute("checked")),o=n!==null?n.length:0;if(o>0&&!s){const r=n[o-1];r.checked=!0,this.focusedRadio=r,r.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}h([p({attribute:"readonly",mode:"boolean"})],hn.prototype,"readOnly",void 0);h([p({attribute:"disabled",mode:"boolean"})],hn.prototype,"disabled",void 0);h([p],hn.prototype,"name",void 0);h([p],hn.prototype,"value",void 0);h([p],hn.prototype,"orientation",void 0);h([k],hn.prototype,"childItems",void 0);h([k],hn.prototype,"slottedRadioButtons",void 0);const Wx=(e,t)=>A`
    <template
        role="radio"
        class="${i=>i.checked?"checked":""} ${i=>i.readOnly?"readonly":""}"
        aria-checked="${i=>i.checked}"
        aria-required="${i=>i.required}"
        aria-disabled="${i=>i.disabled}"
        aria-readonly="${i=>i.readOnly}"
        @keypress="${(i,s)=>i.keypressHandler(s.event)}"
        @click="${(i,s)=>i.clickHandler(s.event)}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${i=>i.defaultSlottedNodes&&i.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${it("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class Gx extends fe{}class qx extends Ju(Gx){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class _l extends qx{constructor(){super(),this.initialValue="on",this.keypressHandler=t=>{switch(t.key){case Vn:!this.checked&&!this.readOnly&&(this.checked=!0);return}return!0},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var t;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=(t=this.defaultChecked)!==null&&t!==void 0?t:!1,this.dirtyChecked=!1))}connectedCallback(){var t,i;super.connectedCallback(),this.validate(),((t=this.parentElement)===null||t===void 0?void 0:t.getAttribute("role"))!=="radiogroup"&&this.getAttribute("tabindex")===null&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=(i=this.defaultChecked)!==null&&i!==void 0?i:!1,this.dirtyChecked=!1))}isInsideRadioGroup(){return this.closest("[role=radiogroup]")!==null}clickHandler(t){!this.disabled&&!this.readOnly&&!this.checked&&(this.checked=!0)}}h([p({attribute:"readonly",mode:"boolean"})],_l.prototype,"readOnly",void 0);h([k],_l.prototype,"name",void 0);h([k],_l.prototype,"defaultSlottedNodes",void 0);let Ps=class extends fe{constructor(){super(...arguments),this.framesPerSecond=60,this.updatingItems=!1,this.speed=600,this.easing="ease-in-out",this.flippersHiddenFromAT=!1,this.scrolling=!1,this.resizeDetector=null}get frameTime(){return 1e3/this.framesPerSecond}scrollingChanged(t,i){if(this.scrollContainer){const s=this.scrolling==!0?"scrollstart":"scrollend";this.$emit(s,this.scrollContainer.scrollLeft)}}get isRtl(){return this.scrollItems.length>1&&this.scrollItems[0].offsetLeft>this.scrollItems[1].offsetLeft}connectedCallback(){super.connectedCallback(),this.initializeResizeDetector()}disconnectedCallback(){this.disconnectResizeDetector(),super.disconnectedCallback()}scrollItemsChanged(t,i){i&&!this.updatingItems&&de.queueUpdate(()=>this.setStops())}disconnectResizeDetector(){this.resizeDetector&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.resized.bind(this)),this.resizeDetector.observe(this)}updateScrollStops(){this.updatingItems=!0;const t=this.scrollItems.reduce((i,s)=>s instanceof HTMLSlotElement?i.concat(s.assignedElements()):(i.push(s),i),[]);this.scrollItems=t,this.updatingItems=!1}setStops(){this.updateScrollStops();const{scrollContainer:t}=this,{scrollLeft:i}=t,{width:s,left:n}=t.getBoundingClientRect();this.width=s;let o=0,r=this.scrollItems.map((a,l)=>{const{left:c,width:u}=a.getBoundingClientRect(),d=Math.round(c+i-n),f=Math.round(d+u);return this.isRtl?-f:(o=f,l===0?0:d)}).concat(o);r=this.fixScrollMisalign(r),r.sort((a,l)=>Math.abs(a)-Math.abs(l)),this.scrollStops=r,this.setFlippers()}validateStops(t=!0){const i=()=>!!this.scrollStops.find(s=>s>0);return!i()&&t&&this.setStops(),i()}fixScrollMisalign(t){if(this.isRtl&&t.some(i=>i>0)){t.sort((s,n)=>n-s);const i=t[0];t=t.map(s=>s-i)}return t}setFlippers(){var t,i;const s=this.scrollContainer.scrollLeft;if((t=this.previousFlipperContainer)===null||t===void 0||t.classList.toggle("disabled",s===0),this.scrollStops){const n=Math.abs(this.scrollStops[this.scrollStops.length-1]);(i=this.nextFlipperContainer)===null||i===void 0||i.classList.toggle("disabled",this.validateStops(!1)&&Math.abs(s)+this.width>=n)}}scrollInView(t,i=0,s){var n;if(typeof t!="number"&&t&&(t=this.scrollItems.findIndex(o=>o===t||o.contains(t))),t!==void 0){s=s??i;const{scrollContainer:o,scrollStops:r,scrollItems:a}=this,{scrollLeft:l}=this.scrollContainer,{width:c}=o.getBoundingClientRect(),u=r[t],{width:d}=a[t].getBoundingClientRect(),f=u+d,b=l+i>u;if(b||l+c-s<f){const x=(n=[...r].sort((_,R)=>b?R-_:_-R).find(_=>b?_+i<u:_+c-(s??0)>f))!==null&&n!==void 0?n:0;this.scrollToPosition(x)}}}keyupHandler(t){switch(t.key){case"ArrowLeft":this.scrollToPrevious();break;case"ArrowRight":this.scrollToNext();break}}scrollToPrevious(){this.validateStops();const t=this.scrollContainer.scrollLeft,i=this.scrollStops.findIndex((o,r)=>o>=t&&(this.isRtl||r===this.scrollStops.length-1||this.scrollStops[r+1]>t)),s=Math.abs(this.scrollStops[i+1]);let n=this.scrollStops.findIndex(o=>Math.abs(o)+this.width>s);(n>=i||n===-1)&&(n=i>0?i-1:0),this.scrollToPosition(this.scrollStops[n],t)}scrollToNext(){this.validateStops();const t=this.scrollContainer.scrollLeft,i=this.scrollStops.findIndex(o=>Math.abs(o)>=Math.abs(t)),s=this.scrollStops.findIndex(o=>Math.abs(t)+this.width<=Math.abs(o));let n=i;s>i+2?n=s-2:i<this.scrollStops.length-2&&(n=i+1),this.scrollToPosition(this.scrollStops[n],t)}scrollToPosition(t,i=this.scrollContainer.scrollLeft){var s;if(this.scrolling)return;this.scrolling=!0;const n=(s=this.duration)!==null&&s!==void 0?s:`${Math.abs(t-i)/this.speed}s`;this.content.style.setProperty("transition-duration",n);const o=parseFloat(getComputedStyle(this.content).getPropertyValue("transition-duration")),r=c=>{c&&c.target!==c.currentTarget||(this.content.style.setProperty("transition-duration","0s"),this.content.style.removeProperty("transform"),this.scrollContainer.style.setProperty("scroll-behavior","auto"),this.scrollContainer.scrollLeft=t,this.setFlippers(),this.content.removeEventListener("transitionend",r),this.scrolling=!1)};if(o===0){r();return}this.content.addEventListener("transitionend",r);const a=this.scrollContainer.scrollWidth-this.scrollContainer.clientWidth;let l=this.scrollContainer.scrollLeft-Math.min(t,a);this.isRtl&&(l=this.scrollContainer.scrollLeft+Math.min(Math.abs(t),a)),this.content.style.setProperty("transition-property","transform"),this.content.style.setProperty("transition-timing-function",this.easing),this.content.style.setProperty("transform",`translateX(${l}px)`)}resized(){this.resizeTimeout&&(this.resizeTimeout=clearTimeout(this.resizeTimeout)),this.resizeTimeout=setTimeout(()=>{this.width=this.scrollContainer.offsetWidth,this.setFlippers()},this.frameTime)}scrolled(){this.scrollTimeout&&(this.scrollTimeout=clearTimeout(this.scrollTimeout)),this.scrollTimeout=setTimeout(()=>{this.setFlippers()},this.frameTime)}};h([p({converter:q})],Ps.prototype,"speed",void 0);h([p],Ps.prototype,"duration",void 0);h([p],Ps.prototype,"easing",void 0);h([p({attribute:"flippers-hidden-from-at",converter:Hr})],Ps.prototype,"flippersHiddenFromAT",void 0);h([k],Ps.prototype,"scrolling",void 0);h([k],Ps.prototype,"scrollItems",void 0);h([p({attribute:"view"})],Ps.prototype,"view",void 0);const Zx=(e,t)=>{var i,s;return A`
    <template
        class="horizontal-scroll"
        @keyup="${(n,o)=>n.keyupHandler(o.event)}"
    >
        ${Jt(e,t)}
        <div class="scroll-area" part="scroll-area">
            <div
                class="scroll-view"
                part="scroll-view"
                @scroll="${n=>n.scrolled()}"
                ${Ee("scrollContainer")}
            >
                <div class="content-container" part="content-container" ${Ee("content")}>
                    <slot
                        ${it({property:"scrollItems",filter:Cs()})}
                    ></slot>
                </div>
            </div>
            ${ft(n=>n.view!=="mobile",A`
                    <div
                        class="scroll scroll-prev"
                        part="scroll-prev"
                        ${Ee("previousFlipperContainer")}
                    >
                        <div class="scroll-action" part="scroll-action-previous">
                            <slot name="previous-flipper">
                                ${t.previousFlipper instanceof Function?t.previousFlipper(e,t):(i=t.previousFlipper)!==null&&i!==void 0?i:""}
                            </slot>
                        </div>
                    </div>
                    <div
                        class="scroll scroll-next"
                        part="scroll-next"
                        ${Ee("nextFlipperContainer")}
                    >
                        <div class="scroll-action" part="scroll-action-next">
                            <slot name="next-flipper">
                                ${t.nextFlipper instanceof Function?t.nextFlipper(e,t):(s=t.nextFlipper)!==null&&s!==void 0?s:""}
                            </slot>
                        </div>
                    </div>
                `)}
        </div>
        ${Qt(e,t)}
    </template>
`};function dg(e,t,i){return e.nodeType!==Node.TEXT_NODE?!0:typeof e.nodeValue=="string"&&!!e.nodeValue.trim().length}class Xx extends fe{}class Qx extends Rs(Xx){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let bi=class extends Qx{readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.validate(),this.autofocus&&de.queueUpdate(()=>{this.focus()})}validate(){super.validate(this.control)}handleTextInput(){this.value=this.control.value}handleClearInput(){this.value="",this.control.focus(),this.handleChange()}handleChange(){this.$emit("change")}};h([p({attribute:"readonly",mode:"boolean"})],bi.prototype,"readOnly",void 0);h([p({mode:"boolean"})],bi.prototype,"autofocus",void 0);h([p],bi.prototype,"placeholder",void 0);h([p],bi.prototype,"list",void 0);h([p({converter:q})],bi.prototype,"maxlength",void 0);h([p({converter:q})],bi.prototype,"minlength",void 0);h([p],bi.prototype,"pattern",void 0);h([p({converter:q})],bi.prototype,"size",void 0);h([p({mode:"boolean"})],bi.prototype,"spellcheck",void 0);h([k],bi.prototype,"defaultSlottedNodes",void 0);class hg{}ot(hg,Je);ot(bi,oi,hg);class Jx extends zr{}class Kx extends Rs(Jx){constructor(){super(...arguments),this.proxy=document.createElement("select")}}let Ls=class extends Kx{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=$r("listbox-"),this.maxHeight=0}openChanged(t,i){if(this.collapsible){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,de.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||typeof this.size=="number")}get value(){return ue.track(this,"value"),this._value}set value(t){var i,s,n,o,r,a,l;const c=`${this._value}`;if(!((i=this._options)===null||i===void 0)&&i.length){const u=this._options.findIndex(b=>b.value===t),d=(n=(s=this._options[this.selectedIndex])===null||s===void 0?void 0:s.value)!==null&&n!==void 0?n:null,f=(r=(o=this._options[u])===null||o===void 0?void 0:o.value)!==null&&r!==void 0?r:null;(u===-1||d!==f)&&(t="",this.selectedIndex=u),t=(l=(a=this.firstSelectedOption)===null||a===void 0?void 0:a.value)!==null&&l!==void 0?l:t}c!==t&&(this._value=t,super.valueChanged(c,t),ue.notify(this,"value"),this.updateDisplayValue())}updateValue(t){var i,s;this.$fastController.isConnected&&(this.value=(s=(i=this.firstSelectedOption)===null||i===void 0?void 0:i.value)!==null&&s!==void 0?s:""),t&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(t,i){super.selectedIndexChanged(t,i),this.updateValue()}positionChanged(t,i){this.positionAttribute=i,this.setPositioning()}setPositioning(){const t=this.getBoundingClientRect(),s=window.innerHeight-t.bottom;this.position=this.forcedPosition?this.positionAttribute:t.top>s?fo.above:fo.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===fo.above?~~t.top:~~s}get displayValue(){var t,i;return ue.track(this,"displayValue"),(i=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.text)!==null&&i!==void 0?i:""}disabledChanged(t,i){super.disabledChanged&&super.disabledChanged(t,i),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),this.selectedIndex===-1&&(this.selectedIndex=0)}clickHandler(t){if(!this.disabled){if(this.open){const i=t.target.closest("option,[role=option]");if(i&&i.disabled)return}return super.clickHandler(t),this.open=this.collapsible&&!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(t){var i;if(super.focusoutHandler(t),!this.open)return!0;const s=t.relatedTarget;if(this.isSameNode(s)){this.focus();return}!((i=this.options)===null||i===void 0)&&i.includes(s)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(t,i){super.handleChange(t,i),i==="value"&&this.updateValue()}slottedOptionsChanged(t,i){this.options.forEach(s=>{ue.getNotifier(s).unsubscribe(this,"value")}),super.slottedOptionsChanged(t,i),this.options.forEach(s=>{ue.getNotifier(s).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(t){var i;return t.offsetX>=0&&t.offsetX<=((i=this.listbox)===null||i===void 0?void 0:i.scrollWidth)?super.mousedownHandler(t):this.collapsible}multipleChanged(t,i){super.multipleChanged(t,i),this.proxy&&(this.proxy.multiple=i)}selectedOptionsChanged(t,i){var s;super.selectedOptionsChanged(t,i),(s=this.options)===null||s===void 0||s.forEach((n,o)=>{var r;const a=(r=this.proxy)===null||r===void 0?void 0:r.options.item(o);a&&(a.selected=n.selected)})}setDefaultSelectedOption(){var t;const i=(t=this.options)!==null&&t!==void 0?t:Array.from(this.children).filter(ri.slottedOptionFilter),s=i==null?void 0:i.findIndex(n=>n.hasAttribute("selected")||n.selected||n.value===this.value);if(s!==-1){this.selectedIndex=s;return}this.selectedIndex=0}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(t=>{const i=t.proxy||(t instanceof HTMLOptionElement?t.cloneNode():null);i&&this.proxy.options.add(i)}))}keydownHandler(t){super.keydownHandler(t);const i=t.key||t.key.charCodeAt(0);switch(i){case Vn:{t.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break}case cs:case us:{t.preventDefault();break}case Ds:{t.preventDefault(),this.open=!this.open;break}case Ao:{this.collapsible&&this.open&&(t.preventDefault(),this.open=!1);break}case fl:return this.collapsible&&this.open&&(t.preventDefault(),this.open=!1),!0}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(i===Fi||i===Di)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(t,i){super.sizeChanged(t,i),this.proxy&&(this.proxy.size=i)}updateDisplayValue(){this.collapsible&&ue.notify(this,"displayValue")}};h([p({attribute:"open",mode:"boolean"})],Ls.prototype,"open",void 0);h([fy],Ls.prototype,"collapsible",null);h([k],Ls.prototype,"control",void 0);h([p({attribute:"position"})],Ls.prototype,"positionAttribute",void 0);h([k],Ls.prototype,"position",void 0);h([k],Ls.prototype,"maxHeight",void 0);class ed{}h([k],ed.prototype,"ariaControls",void 0);ot(ed,dn);ot(Ls,oi,ed);const ew=(e,t)=>A`
    <template
        class="${i=>[i.collapsible&&"collapsible",i.collapsible&&i.open&&"open",i.disabled&&"disabled",i.collapsible&&i.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${i=>i.ariaActiveDescendant}"
        aria-controls="${i=>i.ariaControls}"
        aria-disabled="${i=>i.ariaDisabled}"
        aria-expanded="${i=>i.ariaExpanded}"
        aria-haspopup="${i=>i.collapsible?"listbox":null}"
        aria-multiselectable="${i=>i.ariaMultiSelectable}"
        ?open="${i=>i.open}"
        role="combobox"
        tabindex="${i=>i.disabled?null:"0"}"
        @click="${(i,s)=>i.clickHandler(s.event)}"
        @focusin="${(i,s)=>i.focusinHandler(s.event)}"
        @focusout="${(i,s)=>i.focusoutHandler(s.event)}"
        @keydown="${(i,s)=>i.keydownHandler(s.event)}"
        @mousedown="${(i,s)=>i.mousedownHandler(s.event)}"
    >
        ${ft(i=>i.collapsible,A`
                <div
                    class="control"
                    part="control"
                    ?disabled="${i=>i.disabled}"
                    ${Ee("control")}
                >
                    ${Jt(e,t)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${i=>i.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${t.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${Qt(e,t)}
                </div>
            `)}
        <div
            class="listbox"
            id="${i=>i.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${i=>i.disabled}"
            ?hidden="${i=>i.collapsible?!i.open:!1}"
            ${Ee("listbox")}
        >
            <slot
                ${it({filter:ri.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,tw=(e,t)=>A`
    <template
        class="${i=>i.shape==="circle"?"circle":"rect"}"
        pattern="${i=>i.pattern}"
        ?shimmer="${i=>i.shimmer}"
    >
        ${ft(i=>i.shimmer===!0,A`
                <span class="shimmer"></span>
            `)}
        <object type="image/svg+xml" data="${i=>i.pattern}" role="presentation">
            <img class="pattern" src="${i=>i.pattern}" />
        </object>
        <slot></slot>
    </template>
`;class Br extends fe{constructor(){super(...arguments),this.shape="rect"}}h([p],Br.prototype,"fill",void 0);h([p],Br.prototype,"shape",void 0);h([p],Br.prototype,"pattern",void 0);h([p({mode:"boolean"})],Br.prototype,"shimmer",void 0);const iw=(e,t)=>A`
    <template
        aria-disabled="${i=>i.disabled}"
        class="${i=>i.sliderOrientation||bt.horizontal}
            ${i=>i.disabled?"disabled":""}"
    >
        <div ${Ee("root")} part="root" class="root" style="${i=>i.positionStyle}">
            <div class="container">
                ${ft(i=>!i.hideMark,A`
                        <div class="mark"></div>
                    `)}
                <div class="label">
                    <slot></slot>
                </div>
            </div>
        </div>
    </template>
`;function lu(e,t,i,s){let n=pl(0,1,(e-t)/(i-t));return s===Qe.rtl&&(n=1-n),n}const da={min:0,max:0,direction:Qe.ltr,orientation:bt.horizontal,disabled:!1};class As extends fe{constructor(){super(...arguments),this.hideMark=!1,this.sliderDirection=Qe.ltr,this.getSliderConfiguration=()=>{if(!this.isSliderConfig(this.parentNode))this.sliderDirection=da.direction||Qe.ltr,this.sliderOrientation=da.orientation,this.sliderMaxPosition=da.max,this.sliderMinPosition=da.min;else{const t=this.parentNode,{min:i,max:s,direction:n,orientation:o,disabled:r}=t;r!==void 0&&(this.disabled=r),this.sliderDirection=n||Qe.ltr,this.sliderOrientation=o||bt.horizontal,this.sliderMaxPosition=s,this.sliderMinPosition=i}},this.positionAsStyle=()=>{const t=this.sliderDirection?this.sliderDirection:Qe.ltr,i=lu(Number(this.position),Number(this.sliderMinPosition),Number(this.sliderMaxPosition));let s=Math.round((1-i)*100),n=Math.round(i*100);return Number.isNaN(n)&&Number.isNaN(s)&&(s=50,n=50),this.sliderOrientation===bt.horizontal?t===Qe.rtl?`right: ${n}%; left: ${s}%;`:`left: ${n}%; right: ${s}%;`:`top: ${n}%; bottom: ${s}%;`}}positionChanged(){this.positionStyle=this.positionAsStyle()}sliderOrientationChanged(){}connectedCallback(){super.connectedCallback(),this.getSliderConfiguration(),this.positionStyle=this.positionAsStyle(),this.notifier=ue.getNotifier(this.parentNode),this.notifier.subscribe(this,"orientation"),this.notifier.subscribe(this,"direction"),this.notifier.subscribe(this,"max"),this.notifier.subscribe(this,"min")}disconnectedCallback(){super.disconnectedCallback(),this.notifier.unsubscribe(this,"orientation"),this.notifier.unsubscribe(this,"direction"),this.notifier.unsubscribe(this,"max"),this.notifier.unsubscribe(this,"min")}handleChange(t,i){switch(i){case"direction":this.sliderDirection=t.direction;break;case"orientation":this.sliderOrientation=t.orientation;break;case"max":this.sliderMaxPosition=t.max;break;case"min":this.sliderMinPosition=t.min;break}this.positionStyle=this.positionAsStyle()}isSliderConfig(t){return t.max!==void 0&&t.min!==void 0}}h([k],As.prototype,"positionStyle",void 0);h([p],As.prototype,"position",void 0);h([p({attribute:"hide-mark",mode:"boolean"})],As.prototype,"hideMark",void 0);h([p({attribute:"disabled",mode:"boolean"})],As.prototype,"disabled",void 0);h([k],As.prototype,"sliderOrientation",void 0);h([k],As.prototype,"sliderMinPosition",void 0);h([k],As.prototype,"sliderMaxPosition",void 0);h([k],As.prototype,"sliderDirection",void 0);const sw=(e,t)=>A`
    <template
        role="slider"
        class="${i=>i.readOnly?"readonly":""}
        ${i=>i.orientation||bt.horizontal}"
        tabindex="${i=>i.disabled?null:0}"
        aria-valuetext="${i=>i.valueTextFormatter(i.value)}"
        aria-valuenow="${i=>i.value}"
        aria-valuemin="${i=>i.min}"
        aria-valuemax="${i=>i.max}"
        aria-disabled="${i=>i.disabled?!0:void 0}"
        aria-readonly="${i=>i.readOnly?!0:void 0}"
        aria-orientation="${i=>i.orientation}"
        class="${i=>i.orientation}"
    >
        <div part="positioning-region" class="positioning-region">
            <div ${Ee("track")} part="track-container" class="track">
                <slot name="track"></slot>
                <div part="track-start" class="track-start" style="${i=>i.position}">
                    <slot name="track-start"></slot>
                </div>
            </div>
            <slot></slot>
            <div
                ${Ee("thumb")}
                part="thumb-container"
                class="thumb-container"
                style="${i=>i.position}"
            >
                <slot name="thumb">${t.thumb||""}</slot>
            </div>
        </div>
    </template>
`;class nw extends fe{}class ow extends Rs(nw){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const rw={singleValue:"single-value"};class Bt extends ow{constructor(){super(...arguments),this.direction=Qe.ltr,this.isDragging=!1,this.trackWidth=0,this.trackMinWidth=0,this.trackHeight=0,this.trackLeft=0,this.trackMinHeight=0,this.valueTextFormatter=()=>null,this.min=0,this.max=10,this.step=1,this.orientation=bt.horizontal,this.mode=rw.singleValue,this.keypressHandler=t=>{if(!this.readOnly){if(t.key===cs)t.preventDefault(),this.value=`${this.min}`;else if(t.key===us)t.preventDefault(),this.value=`${this.max}`;else if(!t.shiftKey)switch(t.key){case on:case Di:t.preventDefault(),this.increment();break;case nn:case Fi:t.preventDefault(),this.decrement();break}}},this.setupTrackConstraints=()=>{const t=this.track.getBoundingClientRect();this.trackWidth=this.track.clientWidth,this.trackMinWidth=this.track.clientLeft,this.trackHeight=t.bottom,this.trackMinHeight=t.top,this.trackLeft=this.getBoundingClientRect().left,this.trackWidth===0&&(this.trackWidth=1)},this.setupListeners=(t=!1)=>{const i=`${t?"remove":"add"}EventListener`;this[i]("keydown",this.keypressHandler),this[i]("mousedown",this.handleMouseDown),this.thumb[i]("mousedown",this.handleThumbMouseDown,{passive:!0}),this.thumb[i]("touchstart",this.handleThumbMouseDown,{passive:!0}),t&&(this.handleMouseDown(null),this.handleThumbMouseDown(null))},this.initialValue="",this.handleThumbMouseDown=t=>{if(t){if(this.readOnly||this.disabled||t.defaultPrevented)return;t.target.focus()}const i=`${t!==null?"add":"remove"}EventListener`;window[i]("mouseup",this.handleWindowMouseUp),window[i]("mousemove",this.handleMouseMove,{passive:!0}),window[i]("touchmove",this.handleMouseMove,{passive:!0}),window[i]("touchend",this.handleWindowMouseUp),this.isDragging=t!==null},this.handleMouseMove=t=>{if(this.readOnly||this.disabled||t.defaultPrevented)return;const i=window.TouchEvent&&t instanceof TouchEvent?t.touches[0]:t,s=this.orientation===bt.horizontal?i.pageX-document.documentElement.scrollLeft-this.trackLeft:i.pageY-document.documentElement.scrollTop;this.value=`${this.calculateNewValue(s)}`},this.calculateNewValue=t=>{const i=lu(t,this.orientation===bt.horizontal?this.trackMinWidth:this.trackMinHeight,this.orientation===bt.horizontal?this.trackWidth:this.trackHeight,this.direction),s=(this.max-this.min)*i+this.min;return this.convertToConstrainedValue(s)},this.handleWindowMouseUp=t=>{this.stopDragging()},this.stopDragging=()=>{this.isDragging=!1,this.handleMouseDown(null),this.handleThumbMouseDown(null)},this.handleMouseDown=t=>{const i=`${t!==null?"add":"remove"}EventListener`;if((t===null||!this.disabled&&!this.readOnly)&&(window[i]("mouseup",this.handleWindowMouseUp),window.document[i]("mouseleave",this.handleWindowMouseUp),window[i]("mousemove",this.handleMouseMove),t)){t.preventDefault(),this.setupTrackConstraints(),t.target.focus();const s=this.orientation===bt.horizontal?t.pageX-document.documentElement.scrollLeft-this.trackLeft:t.pageY-document.documentElement.scrollTop;this.value=`${this.calculateNewValue(s)}`}},this.convertToConstrainedValue=t=>{isNaN(t)&&(t=this.min);let i=t-this.min;const s=Math.round(i/this.step),n=i-s*(this.stepMultiplier*this.step)/this.stepMultiplier;return i=n>=Number(this.step)/2?i-n+Number(this.step):i-n,i+this.min}}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}get valueAsNumber(){return parseFloat(super.value)}set valueAsNumber(t){this.value=t.toString()}valueChanged(t,i){super.valueChanged(t,i),this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction),this.$emit("change")}minChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.min=`${this.min}`),this.validate()}maxChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.max=`${this.max}`),this.validate()}stepChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.step=`${this.step}`),this.updateStepMultiplier(),this.validate()}orientationChanged(){this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","range"),this.direction=Pn(this),this.updateStepMultiplier(),this.setupTrackConstraints(),this.setupListeners(),this.setupDefaultValue(),this.setThumbPositionForOrientation(this.direction)}disconnectedCallback(){this.setupListeners(!0)}increment(){const t=this.direction!==Qe.rtl&&this.orientation!==bt.vertical?Number(this.value)+Number(this.step):Number(this.value)-Number(this.step),i=this.convertToConstrainedValue(t),s=i<Number(this.max)?`${i}`:`${this.max}`;this.value=s}decrement(){const t=this.direction!==Qe.rtl&&this.orientation!==bt.vertical?Number(this.value)-Number(this.step):Number(this.value)+Number(this.step),i=this.convertToConstrainedValue(t),s=i>Number(this.min)?`${i}`:`${this.min}`;this.value=s}setThumbPositionForOrientation(t){const s=(1-lu(Number(this.value),Number(this.min),Number(this.max),t))*100;this.orientation===bt.horizontal?this.position=this.isDragging?`right: ${s}%; transition: none;`:`right: ${s}%; transition: all 0.2s ease;`:this.position=this.isDragging?`bottom: ${s}%; transition: none;`:`bottom: ${s}%; transition: all 0.2s ease;`}updateStepMultiplier(){const t=this.step+"",i=this.step%1?t.length-t.indexOf(".")-1:0;this.stepMultiplier=Math.pow(10,i)}get midpoint(){return`${this.convertToConstrainedValue((this.max+this.min)/2)}`}setupDefaultValue(){if(typeof this.value=="string")if(this.value.length===0)this.initialValue=this.midpoint;else{const t=parseFloat(this.value);!Number.isNaN(t)&&(t<this.min||t>this.max)&&(this.value=this.midpoint)}}}h([p({attribute:"readonly",mode:"boolean"})],Bt.prototype,"readOnly",void 0);h([k],Bt.prototype,"direction",void 0);h([k],Bt.prototype,"isDragging",void 0);h([k],Bt.prototype,"position",void 0);h([k],Bt.prototype,"trackWidth",void 0);h([k],Bt.prototype,"trackMinWidth",void 0);h([k],Bt.prototype,"trackHeight",void 0);h([k],Bt.prototype,"trackLeft",void 0);h([k],Bt.prototype,"trackMinHeight",void 0);h([k],Bt.prototype,"valueTextFormatter",void 0);h([p({converter:q})],Bt.prototype,"min",void 0);h([p({converter:q})],Bt.prototype,"max",void 0);h([p({converter:q})],Bt.prototype,"step",void 0);h([p],Bt.prototype,"orientation",void 0);h([p],Bt.prototype,"mode",void 0);const aw=(e,t)=>A`
    <template
        role="switch"
        aria-checked="${i=>i.checked}"
        aria-disabled="${i=>i.disabled}"
        aria-readonly="${i=>i.readOnly}"
        tabindex="${i=>i.disabled?null:0}"
        @keypress="${(i,s)=>i.keypressHandler(s.event)}"
        @click="${(i,s)=>i.clickHandler(s.event)}"
        class="${i=>i.checked?"checked":""}"
    >
        <label
            part="label"
            class="${i=>i.defaultSlottedNodes&&i.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${it("defaultSlottedNodes")}></slot>
        </label>
        <div part="switch" class="switch">
            <slot name="switch">${t.switch||""}</slot>
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
`;class lw extends fe{}class cw extends Ju(lw){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class td extends cw{constructor(){super(),this.initialValue="on",this.keypressHandler=t=>{if(!this.readOnly)switch(t.key){case Ds:case Vn:this.checked=!this.checked;break}},this.clickHandler=t=>{!this.disabled&&!this.readOnly&&(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly),this.readOnly?this.classList.add("readonly"):this.classList.remove("readonly")}checkedChanged(t,i){super.checkedChanged(t,i),this.checked?this.classList.add("checked"):this.classList.remove("checked")}}h([p({attribute:"readonly",mode:"boolean"})],td.prototype,"readOnly",void 0);h([k],td.prototype,"defaultSlottedNodes",void 0);const uw=(e,t)=>A`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`;class dw extends fe{}const hw=(e,t)=>A`
    <template slot="tab" role="tab" aria-disabled="${i=>i.disabled}">
        <slot></slot>
    </template>
`;class fg extends fe{}h([p({mode:"boolean"})],fg.prototype,"disabled",void 0);const fw=(e,t)=>A`
    <template class="${i=>i.orientation}">
        ${Jt(e,t)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${it("tabs")}></slot>

            ${ft(i=>i.showActiveIndicator,A`
                    <div
                        ${Ee("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${Qt(e,t)}
        <div class="tabpanel" part="tabpanel">
            <slot name="tabpanel" ${it("tabpanels")}></slot>
        </div>
    </template>
`,rf={vertical:"vertical",horizontal:"horizontal"};class Ms extends fe{constructor(){super(...arguments),this.orientation=rf.horizontal,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=t=>t.getAttribute("aria-disabled")==="true",this.isHiddenElement=t=>t.hasAttribute("hidden"),this.isFocusableElement=t=>!this.isDisabledElement(t)&&!this.isHiddenElement(t),this.setTabs=()=>{const t="gridColumn",i="gridRow",s=this.isHorizontal()?t:i;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach((n,o)=>{if(n.slot==="tab"){const r=this.activeTabIndex===o&&this.isFocusableElement(n);this.activeindicator&&this.isFocusableElement(n)&&(this.showActiveIndicator=!0);const a=this.tabIds[o],l=this.tabpanelIds[o];n.setAttribute("id",a),n.setAttribute("aria-selected",r?"true":"false"),n.setAttribute("aria-controls",l),n.addEventListener("click",this.handleTabClick),n.addEventListener("keydown",this.handleTabKeyDown),n.setAttribute("tabindex",r?"0":"-1"),r&&(this.activetab=n,this.activeid=a)}n.style[t]="",n.style[i]="",n.style[s]=`${o+1}`,this.isHorizontal()?n.classList.remove("vertical"):n.classList.add("vertical")})},this.setTabPanels=()=>{this.tabpanels.forEach((t,i)=>{const s=this.tabIds[i],n=this.tabpanelIds[i];t.setAttribute("id",n),t.setAttribute("aria-labelledby",s),this.activeTabIndex!==i?t.setAttribute("hidden",""):t.removeAttribute("hidden")})},this.handleTabClick=t=>{const i=t.currentTarget;i.nodeType===1&&this.isFocusableElement(i)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(i),this.setComponent())},this.handleTabKeyDown=t=>{if(this.isHorizontal())switch(t.key){case nn:t.preventDefault(),this.adjustBackward(t);break;case on:t.preventDefault(),this.adjustForward(t);break}else switch(t.key){case Di:t.preventDefault(),this.adjustBackward(t);break;case Fi:t.preventDefault(),this.adjustForward(t);break}switch(t.key){case cs:t.preventDefault(),this.adjust(-this.activeTabIndex);break;case us:t.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1);break}},this.adjustForward=t=>{const i=this.tabs;let s=0;for(s=this.activetab?i.indexOf(this.activetab)+1:1,s===i.length&&(s=0);s<i.length&&i.length>1;)if(this.isFocusableElement(i[s])){this.moveToTabByIndex(i,s);break}else{if(this.activetab&&s===i.indexOf(this.activetab))break;s+1>=i.length?s=0:s+=1}},this.adjustBackward=t=>{const i=this.tabs;let s=0;for(s=this.activetab?i.indexOf(this.activetab)-1:0,s=s<0?i.length-1:s;s>=0&&i.length>1;)if(this.isFocusableElement(i[s])){this.moveToTabByIndex(i,s);break}else s-1<0?s=i.length-1:s-=1},this.moveToTabByIndex=(t,i)=>{const s=t[i];this.activetab=s,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=i,s.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(t,i){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex(s=>s.id===t),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return this.activeid!==void 0?this.tabIds.indexOf(this.activeid)===-1?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map(t=>{var i;return(i=t.getAttribute("id"))!==null&&i!==void 0?i:`tab-${$r()}`})}getTabPanelIds(){return this.tabpanels.map(t=>{var i;return(i=t.getAttribute("id"))!==null&&i!==void 0?i:`panel-${$r()}`})}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===rf.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const t=this.isHorizontal()?"gridColumn":"gridRow",i=this.isHorizontal()?"translateX":"translateY",s=this.isHorizontal()?"offsetLeft":"offsetTop",n=this.activeIndicatorRef[s];this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`;const o=this.activeIndicatorRef[s];this.activeIndicatorRef.style[t]=`${this.prevActiveTabIndex+1}`;const r=o-n;this.activeIndicatorRef.style.transform=`${i}(${r}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",()=>{this.ticking=!1,this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${i}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")})}adjust(t){const i=this.tabs.filter(r=>this.isFocusableElement(r)),s=i.indexOf(this.activetab),n=pl(0,i.length-1,s+t),o=this.tabs.indexOf(i[n]);o>-1&&this.moveToTabByIndex(this.tabs,o)}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}h([p],Ms.prototype,"orientation",void 0);h([p],Ms.prototype,"activeid",void 0);h([k],Ms.prototype,"tabs",void 0);h([k],Ms.prototype,"tabpanels",void 0);h([p({mode:"boolean"})],Ms.prototype,"activeindicator",void 0);h([k],Ms.prototype,"activeIndicatorRef",void 0);h([k],Ms.prototype,"showActiveIndicator",void 0);ot(Ms,oi);class pw extends fe{}class gw extends Rs(pw){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}const pg={none:"none",both:"both",horizontal:"horizontal",vertical:"vertical"};let jt=class extends gw{constructor(){super(...arguments),this.resize=pg.none,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};h([p({mode:"boolean"})],jt.prototype,"readOnly",void 0);h([p],jt.prototype,"resize",void 0);h([p({mode:"boolean"})],jt.prototype,"autofocus",void 0);h([p({attribute:"form"})],jt.prototype,"formId",void 0);h([p],jt.prototype,"list",void 0);h([p({converter:q})],jt.prototype,"maxlength",void 0);h([p({converter:q})],jt.prototype,"minlength",void 0);h([p],jt.prototype,"name",void 0);h([p],jt.prototype,"placeholder",void 0);h([p({converter:q,mode:"fromView"})],jt.prototype,"cols",void 0);h([p({converter:q,mode:"fromView"})],jt.prototype,"rows",void 0);h([p({mode:"boolean"})],jt.prototype,"spellcheck",void 0);h([k],jt.prototype,"defaultSlottedNodes",void 0);ot(jt,$l);const mw=(e,t)=>A`
    <template
        class="
            ${i=>i.readOnly?"readonly":""}
            ${i=>i.resize!==pg.none?`resize-${i.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${i=>i.defaultSlottedNodes&&i.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${it("defaultSlottedNodes")}></slot>
        </label>
        <textarea
            part="control"
            class="control"
            id="control"
            ?autofocus="${i=>i.autofocus}"
            cols="${i=>i.cols}"
            ?disabled="${i=>i.disabled}"
            form="${i=>i.form}"
            list="${i=>i.list}"
            maxlength="${i=>i.maxlength}"
            minlength="${i=>i.minlength}"
            name="${i=>i.name}"
            placeholder="${i=>i.placeholder}"
            ?readonly="${i=>i.readOnly}"
            ?required="${i=>i.required}"
            rows="${i=>i.rows}"
            ?spellcheck="${i=>i.spellcheck}"
            :value="${i=>i.value}"
            aria-atomic="${i=>i.ariaAtomic}"
            aria-busy="${i=>i.ariaBusy}"
            aria-controls="${i=>i.ariaControls}"
            aria-current="${i=>i.ariaCurrent}"
            aria-describedby="${i=>i.ariaDescribedby}"
            aria-details="${i=>i.ariaDetails}"
            aria-disabled="${i=>i.ariaDisabled}"
            aria-errormessage="${i=>i.ariaErrormessage}"
            aria-flowto="${i=>i.ariaFlowto}"
            aria-haspopup="${i=>i.ariaHaspopup}"
            aria-hidden="${i=>i.ariaHidden}"
            aria-invalid="${i=>i.ariaInvalid}"
            aria-keyshortcuts="${i=>i.ariaKeyshortcuts}"
            aria-label="${i=>i.ariaLabel}"
            aria-labelledby="${i=>i.ariaLabelledby}"
            aria-live="${i=>i.ariaLive}"
            aria-owns="${i=>i.ariaOwns}"
            aria-relevant="${i=>i.ariaRelevant}"
            aria-roledescription="${i=>i.ariaRoledescription}"
            @input="${(i,s)=>i.handleTextInput()}"
            @change="${i=>i.handleChange()}"
            ${Ee("control")}
        ></textarea>
    </template>
`,vw=(e,t)=>A`
    <template
        class="
            ${i=>i.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${i=>i.defaultSlottedNodes&&i.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${it({property:"defaultSlottedNodes",filter:dg})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${Jt(e,t)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${i=>i.handleTextInput()}"
                @change="${i=>i.handleChange()}"
                ?autofocus="${i=>i.autofocus}"
                ?disabled="${i=>i.disabled}"
                list="${i=>i.list}"
                maxlength="${i=>i.maxlength}"
                minlength="${i=>i.minlength}"
                pattern="${i=>i.pattern}"
                placeholder="${i=>i.placeholder}"
                ?readonly="${i=>i.readOnly}"
                ?required="${i=>i.required}"
                size="${i=>i.size}"
                ?spellcheck="${i=>i.spellcheck}"
                :value="${i=>i.value}"
                type="${i=>i.type}"
                aria-atomic="${i=>i.ariaAtomic}"
                aria-busy="${i=>i.ariaBusy}"
                aria-controls="${i=>i.ariaControls}"
                aria-current="${i=>i.ariaCurrent}"
                aria-describedby="${i=>i.ariaDescribedby}"
                aria-details="${i=>i.ariaDetails}"
                aria-disabled="${i=>i.ariaDisabled}"
                aria-errormessage="${i=>i.ariaErrormessage}"
                aria-flowto="${i=>i.ariaFlowto}"
                aria-haspopup="${i=>i.ariaHaspopup}"
                aria-hidden="${i=>i.ariaHidden}"
                aria-invalid="${i=>i.ariaInvalid}"
                aria-keyshortcuts="${i=>i.ariaKeyshortcuts}"
                aria-label="${i=>i.ariaLabel}"
                aria-labelledby="${i=>i.ariaLabelledby}"
                aria-live="${i=>i.ariaLive}"
                aria-owns="${i=>i.ariaOwns}"
                aria-relevant="${i=>i.ariaRelevant}"
                aria-roledescription="${i=>i.ariaRoledescription}"
                ${Ee("control")}
            />
            ${Qt(e,t)}
        </div>
    </template>
`,bw=(e,t)=>A`
    <template
        aria-label="${i=>i.ariaLabel}"
        aria-labelledby="${i=>i.ariaLabelledby}"
        aria-orientation="${i=>i.orientation}"
        orientation="${i=>i.orientation}"
        role="toolbar"
        @click="${(i,s)=>i.clickHandler(s.event)}"
        @focusin="${(i,s)=>i.focusinHandler(s.event)}"
        @keydown="${(i,s)=>i.keydownHandler(s.event)}"
        ${hl({property:"childItems",attributeFilter:["disabled","hidden"],filter:Cs(),subtree:!0})}
    >
        <slot name="label"></slot>
        <div class="positioning-region" part="positioning-region">
            ${Jt(e,t)}
            <slot
                ${it({filter:Cs(),property:"slottedItems"})}
            ></slot>
            ${Qt(e,t)}
        </div>
    </template>
`,af=Object.freeze({[ao.ArrowUp]:{[bt.vertical]:-1},[ao.ArrowDown]:{[bt.vertical]:1},[ao.ArrowLeft]:{[bt.horizontal]:{[Qe.ltr]:-1,[Qe.rtl]:1}},[ao.ArrowRight]:{[bt.horizontal]:{[Qe.ltr]:1,[Qe.rtl]:-1}}});let fn=class cu extends fe{constructor(){super(...arguments),this._activeIndex=0,this.direction=Qe.ltr,this.orientation=bt.horizontal}get activeIndex(){return ue.track(this,"activeIndex"),this._activeIndex}set activeIndex(t){this.$fastController.isConnected&&(this._activeIndex=pl(0,this.focusableElements.length-1,t),ue.notify(this,"activeIndex"))}slottedItemsChanged(){this.$fastController.isConnected&&this.reduceFocusableElements()}clickHandler(t){var i;const s=(i=this.focusableElements)===null||i===void 0?void 0:i.indexOf(t.target);return s>-1&&this.activeIndex!==s&&this.setFocusedElement(s),!0}childItemsChanged(t,i){this.$fastController.isConnected&&this.reduceFocusableElements()}connectedCallback(){super.connectedCallback(),this.direction=Pn(this)}focusinHandler(t){const i=t.relatedTarget;!i||this.contains(i)||this.setFocusedElement()}getDirectionalIncrementer(t){var i,s,n,o,r;return(r=(n=(s=(i=af[t])===null||i===void 0?void 0:i[this.orientation])===null||s===void 0?void 0:s[this.direction])!==null&&n!==void 0?n:(o=af[t])===null||o===void 0?void 0:o[this.orientation])!==null&&r!==void 0?r:0}keydownHandler(t){const i=t.key;if(!(i in ao)||t.defaultPrevented||t.shiftKey)return!0;const s=this.getDirectionalIncrementer(i);if(!s)return!t.target.closest("[role=radiogroup]");const n=this.activeIndex+s;return this.focusableElements[n]&&t.preventDefault(),this.setFocusedElement(n),!0}get allSlottedItems(){return[...this.start.assignedElements(),...this.slottedItems,...this.end.assignedElements()]}reduceFocusableElements(){var t;const i=(t=this.focusableElements)===null||t===void 0?void 0:t[this.activeIndex];this.focusableElements=this.allSlottedItems.reduce(cu.reduceFocusableItems,[]);const s=this.focusableElements.indexOf(i);this.activeIndex=Math.max(0,s),this.setFocusableElements()}setFocusedElement(t=this.activeIndex){var i;this.activeIndex=t,this.setFocusableElements(),(i=this.focusableElements[this.activeIndex])===null||i===void 0||i.focus()}static reduceFocusableItems(t,i){var s,n,o,r;const a=i.getAttribute("role")==="radio",l=(n=(s=i.$fastController)===null||s===void 0?void 0:s.definition.shadowOptions)===null||n===void 0?void 0:n.delegatesFocus,c=Array.from((r=(o=i.shadowRoot)===null||o===void 0?void 0:o.querySelectorAll("*"))!==null&&r!==void 0?r:[]).some(u=>nf(u));return!i.hasAttribute("disabled")&&!i.hasAttribute("hidden")&&(nf(i)||a||l||c)?(t.push(i),t):i.childElementCount?t.concat(Array.from(i.children).reduce(cu.reduceFocusableItems,[])):t}setFocusableElements(){this.$fastController.isConnected&&this.focusableElements.length>0&&this.focusableElements.forEach((t,i)=>{t.tabIndex=this.activeIndex===i?0:-1})}};h([k],fn.prototype,"direction",void 0);h([p],fn.prototype,"orientation",void 0);h([k],fn.prototype,"slottedItems",void 0);h([k],fn.prototype,"slottedLabel",void 0);h([k],fn.prototype,"childItems",void 0);class kl{}h([p({attribute:"aria-labelledby"})],kl.prototype,"ariaLabelledby",void 0);h([p({attribute:"aria-label"})],kl.prototype,"ariaLabel",void 0);ot(kl,Je);ot(fn,oi,kl);const yw=(e,t)=>A`
        ${ft(i=>i.tooltipVisible,A`
            <${e.tagFor(ce)}
                fixed-placement="true"
                auto-update-mode="${i=>i.autoUpdateMode}"
                vertical-positioning-mode="${i=>i.verticalPositioningMode}"
                vertical-default-position="${i=>i.verticalDefaultPosition}"
                vertical-inset="${i=>i.verticalInset}"
                vertical-scaling="${i=>i.verticalScaling}"
                horizontal-positioning-mode="${i=>i.horizontalPositioningMode}"
                horizontal-default-position="${i=>i.horizontalDefaultPosition}"
                horizontal-scaling="${i=>i.horizontalScaling}"
                horizontal-inset="${i=>i.horizontalInset}"
                vertical-viewport-lock="${i=>i.horizontalViewportLock}"
                horizontal-viewport-lock="${i=>i.verticalViewportLock}"
                dir="${i=>i.currentDirection}"
                ${Ee("region")}
            >
                <div class="tooltip" part="tooltip" role="tooltip">
                    <slot></slot>
                </div>
            </${e.tagFor(ce)}>
        `)}
    `,ti={top:"top",right:"right",bottom:"bottom",left:"left",start:"start",end:"end",topLeft:"top-left",topRight:"top-right",bottomLeft:"bottom-left",bottomRight:"bottom-right",topStart:"top-start",topEnd:"top-end",bottomStart:"bottom-start",bottomEnd:"bottom-end"};let $t=class extends fe{constructor(){super(...arguments),this.anchor="",this.delay=300,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.horizontalInset="false",this.verticalInset="false",this.horizontalScaling="content",this.verticalScaling="content",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition=void 0,this.tooltipVisible=!1,this.currentDirection=Qe.ltr,this.showDelayTimer=null,this.hideDelayTimer=null,this.isAnchorHoveredFocused=!1,this.isRegionHovered=!1,this.handlePositionChange=t=>{this.classList.toggle("top",this.region.verticalPosition==="start"),this.classList.toggle("bottom",this.region.verticalPosition==="end"),this.classList.toggle("inset-top",this.region.verticalPosition==="insetStart"),this.classList.toggle("inset-bottom",this.region.verticalPosition==="insetEnd"),this.classList.toggle("center-vertical",this.region.verticalPosition==="center"),this.classList.toggle("left",this.region.horizontalPosition==="start"),this.classList.toggle("right",this.region.horizontalPosition==="end"),this.classList.toggle("inset-left",this.region.horizontalPosition==="insetStart"),this.classList.toggle("inset-right",this.region.horizontalPosition==="insetEnd"),this.classList.toggle("center-horizontal",this.region.horizontalPosition==="center")},this.handleRegionMouseOver=t=>{this.isRegionHovered=!0},this.handleRegionMouseOut=t=>{this.isRegionHovered=!1,this.startHideDelayTimer()},this.handleAnchorMouseOver=t=>{if(this.tooltipVisible){this.isAnchorHoveredFocused=!0;return}this.startShowDelayTimer()},this.handleAnchorMouseOut=t=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.handleAnchorFocusIn=t=>{this.startShowDelayTimer()},this.handleAnchorFocusOut=t=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.startHideDelayTimer=()=>{this.clearHideDelayTimer(),this.tooltipVisible&&(this.hideDelayTimer=window.setTimeout(()=>{this.updateTooltipVisibility()},60))},this.clearHideDelayTimer=()=>{this.hideDelayTimer!==null&&(clearTimeout(this.hideDelayTimer),this.hideDelayTimer=null)},this.startShowDelayTimer=()=>{if(!this.isAnchorHoveredFocused){if(this.delay>1){this.showDelayTimer===null&&(this.showDelayTimer=window.setTimeout(()=>{this.startHover()},this.delay));return}this.startHover()}},this.startHover=()=>{this.isAnchorHoveredFocused=!0,this.updateTooltipVisibility()},this.clearShowDelayTimer=()=>{this.showDelayTimer!==null&&(clearTimeout(this.showDelayTimer),this.showDelayTimer=null)},this.getAnchor=()=>{const t=this.getRootNode();return t instanceof ShadowRoot?t.getElementById(this.anchor):document.getElementById(this.anchor)},this.handleDocumentKeydown=t=>{if(!t.defaultPrevented&&this.tooltipVisible)switch(t.key){case Ao:this.isAnchorHoveredFocused=!1,this.updateTooltipVisibility(),this.$emit("dismiss");break}},this.updateTooltipVisibility=()=>{if(this.visible===!1)this.hideTooltip();else if(this.visible===!0){this.showTooltip();return}else{if(this.isAnchorHoveredFocused||this.isRegionHovered){this.showTooltip();return}this.hideTooltip()}},this.showTooltip=()=>{this.tooltipVisible||(this.currentDirection=Pn(this),this.tooltipVisible=!0,document.addEventListener("keydown",this.handleDocumentKeydown),de.queueUpdate(this.setRegionProps))},this.hideTooltip=()=>{this.tooltipVisible&&(this.clearHideDelayTimer(),this.region!==null&&this.region!==void 0&&(this.region.removeEventListener("positionchange",this.handlePositionChange),this.region.viewportElement=null,this.region.anchorElement=null,this.region.removeEventListener("mouseover",this.handleRegionMouseOver),this.region.removeEventListener("mouseout",this.handleRegionMouseOut)),document.removeEventListener("keydown",this.handleDocumentKeydown),this.tooltipVisible=!1)},this.setRegionProps=()=>{this.tooltipVisible&&(this.region.viewportElement=this.viewportElement,this.region.anchorElement=this.anchorElement,this.region.addEventListener("positionchange",this.handlePositionChange),this.region.addEventListener("mouseover",this.handleRegionMouseOver,{passive:!0}),this.region.addEventListener("mouseout",this.handleRegionMouseOut,{passive:!0}))}}visibleChanged(){this.$fastController.isConnected&&(this.updateTooltipVisibility(),this.updateLayout())}anchorChanged(){this.$fastController.isConnected&&(this.anchorElement=this.getAnchor())}positionChanged(){this.$fastController.isConnected&&this.updateLayout()}anchorElementChanged(t){if(this.$fastController.isConnected){if(t!=null&&(t.removeEventListener("mouseover",this.handleAnchorMouseOver),t.removeEventListener("mouseout",this.handleAnchorMouseOut),t.removeEventListener("focusin",this.handleAnchorFocusIn),t.removeEventListener("focusout",this.handleAnchorFocusOut)),this.anchorElement!==null&&this.anchorElement!==void 0){this.anchorElement.addEventListener("mouseover",this.handleAnchorMouseOver,{passive:!0}),this.anchorElement.addEventListener("mouseout",this.handleAnchorMouseOut,{passive:!0}),this.anchorElement.addEventListener("focusin",this.handleAnchorFocusIn,{passive:!0}),this.anchorElement.addEventListener("focusout",this.handleAnchorFocusOut,{passive:!0});const i=this.anchorElement.id;this.anchorElement.parentElement!==null&&this.anchorElement.parentElement.querySelectorAll(":hover").forEach(s=>{s.id===i&&this.startShowDelayTimer()})}this.region!==null&&this.region!==void 0&&this.tooltipVisible&&(this.region.anchorElement=this.anchorElement),this.updateLayout()}}viewportElementChanged(){this.region!==null&&this.region!==void 0&&(this.region.viewportElement=this.viewportElement),this.updateLayout()}connectedCallback(){super.connectedCallback(),this.anchorElement=this.getAnchor(),this.updateTooltipVisibility()}disconnectedCallback(){this.hideTooltip(),this.clearShowDelayTimer(),this.clearHideDelayTimer(),super.disconnectedCallback()}updateLayout(){switch(this.verticalPositioningMode="locktodefault",this.horizontalPositioningMode="locktodefault",this.position){case ti.top:case ti.bottom:this.verticalDefaultPosition=this.position,this.horizontalDefaultPosition="center";break;case ti.right:case ti.left:case ti.start:case ti.end:this.verticalDefaultPosition="center",this.horizontalDefaultPosition=this.position;break;case ti.topLeft:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="left";break;case ti.topRight:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="right";break;case ti.bottomLeft:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="left";break;case ti.bottomRight:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="right";break;case ti.topStart:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="start";break;case ti.topEnd:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="end";break;case ti.bottomStart:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="start";break;case ti.bottomEnd:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="end";break;default:this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition="center";break}}};h([p({mode:"boolean"})],$t.prototype,"visible",void 0);h([p],$t.prototype,"anchor",void 0);h([p],$t.prototype,"delay",void 0);h([p],$t.prototype,"position",void 0);h([p({attribute:"auto-update-mode"})],$t.prototype,"autoUpdateMode",void 0);h([p({attribute:"horizontal-viewport-lock"})],$t.prototype,"horizontalViewportLock",void 0);h([p({attribute:"vertical-viewport-lock"})],$t.prototype,"verticalViewportLock",void 0);h([k],$t.prototype,"anchorElement",void 0);h([k],$t.prototype,"viewportElement",void 0);h([k],$t.prototype,"verticalPositioningMode",void 0);h([k],$t.prototype,"horizontalPositioningMode",void 0);h([k],$t.prototype,"horizontalInset",void 0);h([k],$t.prototype,"verticalInset",void 0);h([k],$t.prototype,"horizontalScaling",void 0);h([k],$t.prototype,"verticalScaling",void 0);h([k],$t.prototype,"verticalDefaultPosition",void 0);h([k],$t.prototype,"horizontalDefaultPosition",void 0);h([k],$t.prototype,"tooltipVisible",void 0);h([k],$t.prototype,"currentDirection",void 0);const xw=(e,t)=>A`
    <template
        role="treeitem"
        slot="${i=>i.isNestedItem()?"item":void 0}"
        tabindex="-1"
        class="${i=>i.expanded?"expanded":""} ${i=>i.selected?"selected":""} ${i=>i.nested?"nested":""}
            ${i=>i.disabled?"disabled":""}"
        aria-expanded="${i=>i.childItems&&i.childItemLength()>0?i.expanded:void 0}"
        aria-selected="${i=>i.selected}"
        aria-disabled="${i=>i.disabled}"
        @focusin="${(i,s)=>i.handleFocus(s.event)}"
        @focusout="${(i,s)=>i.handleBlur(s.event)}"
        ${hl({property:"childItems",filter:Cs()})}
    >
        <div class="positioning-region" part="positioning-region">
            <div class="content-region" part="content-region">
                ${ft(i=>i.childItems&&i.childItemLength()>0,A`
                        <div
                            aria-hidden="true"
                            class="expand-collapse-button"
                            part="expand-collapse-button"
                            @click="${(i,s)=>i.handleExpandCollapseButtonClick(s.event)}"
                            ${Ee("expandCollapseButton")}
                        >
                            <slot name="expand-collapse-glyph">
                                ${t.expandCollapseGlyph||""}
                            </slot>
                        </div>
                    `)}
                ${Jt(e,t)}
                <slot></slot>
                ${Qt(e,t)}
            </div>
        </div>
        ${ft(i=>i.childItems&&i.childItemLength()>0&&(i.expanded||i.renderCollapsedChildren),A`
                <div role="group" class="items" part="items">
                    <slot name="item" ${it("items")}></slot>
                </div>
            `)}
    </template>
`;function Xs(e){return ko(e)&&e.getAttribute("role")==="treeitem"}class St extends fe{constructor(){super(...arguments),this.expanded=!1,this.focusable=!1,this.isNestedItem=()=>Xs(this.parentElement),this.handleExpandCollapseButtonClick=t=>{!this.disabled&&!t.defaultPrevented&&(this.expanded=!this.expanded)},this.handleFocus=t=>{this.setAttribute("tabindex","0")},this.handleBlur=t=>{this.setAttribute("tabindex","-1")}}expandedChanged(){this.$fastController.isConnected&&this.$emit("expanded-change",this)}selectedChanged(){this.$fastController.isConnected&&this.$emit("selected-change",this)}itemsChanged(t,i){this.$fastController.isConnected&&this.items.forEach(s=>{Xs(s)&&(s.nested=!0)})}static focusItem(t){t.focusable=!0,t.focus()}childItemLength(){const t=this.childItems.filter(i=>Xs(i));return t?t.length:0}}h([p({mode:"boolean"})],St.prototype,"expanded",void 0);h([p({mode:"boolean"})],St.prototype,"selected",void 0);h([p({mode:"boolean"})],St.prototype,"disabled",void 0);h([k],St.prototype,"focusable",void 0);h([k],St.prototype,"childItems",void 0);h([k],St.prototype,"items",void 0);h([k],St.prototype,"nested",void 0);h([k],St.prototype,"renderCollapsedChildren",void 0);ot(St,oi);const ww=(e,t)=>A`
    <template
        role="tree"
        ${Ee("treeView")}
        @keydown="${(i,s)=>i.handleKeyDown(s.event)}"
        @focusin="${(i,s)=>i.handleFocus(s.event)}"
        @focusout="${(i,s)=>i.handleBlur(s.event)}"
        @click="${(i,s)=>i.handleClick(s.event)}"
        @selected-change="${(i,s)=>i.handleSelectedChange(s.event)}"
    >
        <slot ${it("slottedTreeItems")}></slot>
    </template>
`;class Sl extends fe{constructor(){super(...arguments),this.currentFocused=null,this.handleFocus=t=>{if(!(this.slottedTreeItems.length<1)){if(t.target===this){this.currentFocused===null&&(this.currentFocused=this.getValidFocusableItem()),this.currentFocused!==null&&St.focusItem(this.currentFocused);return}this.contains(t.target)&&(this.setAttribute("tabindex","-1"),this.currentFocused=t.target)}},this.handleBlur=t=>{t.target instanceof HTMLElement&&(t.relatedTarget===null||!this.contains(t.relatedTarget))&&this.setAttribute("tabindex","0")},this.handleKeyDown=t=>{if(t.defaultPrevented)return;if(this.slottedTreeItems.length<1)return!0;const i=this.getVisibleNodes();switch(t.key){case cs:i.length&&St.focusItem(i[0]);return;case us:i.length&&St.focusItem(i[i.length-1]);return;case nn:if(t.target&&this.isFocusableElement(t.target)){const s=t.target;s instanceof St&&s.childItemLength()>0&&s.expanded?s.expanded=!1:s instanceof St&&s.parentElement instanceof St&&St.focusItem(s.parentElement)}return!1;case on:if(t.target&&this.isFocusableElement(t.target)){const s=t.target;s instanceof St&&s.childItemLength()>0&&!s.expanded?s.expanded=!0:s instanceof St&&s.childItemLength()>0&&this.focusNextNode(1,t.target)}return;case Fi:t.target&&this.isFocusableElement(t.target)&&this.focusNextNode(1,t.target);return;case Di:t.target&&this.isFocusableElement(t.target)&&this.focusNextNode(-1,t.target);return;case Ds:this.handleClick(t);return}return!0},this.handleSelectedChange=t=>{if(t.defaultPrevented)return;if(!(t.target instanceof Element)||!Xs(t.target))return!0;const i=t.target;i.selected?(this.currentSelected&&this.currentSelected!==i&&(this.currentSelected.selected=!1),this.currentSelected=i):!i.selected&&this.currentSelected===i&&(this.currentSelected=null)},this.setItems=()=>{const t=this.treeView.querySelector("[aria-selected='true']");this.currentSelected=t,(this.currentFocused===null||!this.contains(this.currentFocused))&&(this.currentFocused=this.getValidFocusableItem()),this.nested=this.checkForNestedItems(),this.getVisibleNodes().forEach(s=>{Xs(s)&&(s.nested=this.nested)})},this.isFocusableElement=t=>Xs(t),this.isSelectedElement=t=>t.selected}slottedTreeItemsChanged(){this.$fastController.isConnected&&this.setItems()}connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),de.queueUpdate(()=>{this.setItems()})}handleClick(t){if(t.defaultPrevented)return;if(!(t.target instanceof Element)||!Xs(t.target))return!0;const i=t.target;i.disabled||(i.selected=!i.selected)}focusNextNode(t,i){const s=this.getVisibleNodes();if(!s)return;const n=s[s.indexOf(i)+t];ko(n)&&St.focusItem(n)}getValidFocusableItem(){const t=this.getVisibleNodes();let i=t.findIndex(this.isSelectedElement);return i===-1&&(i=t.findIndex(this.isFocusableElement)),i!==-1?t[i]:null}checkForNestedItems(){return this.slottedTreeItems.some(t=>Xs(t)&&t.querySelector("[role='treeitem']"))}getVisibleNodes(){return b0(this,"[role='treeitem']")||[]}}h([p({attribute:"render-collapsed-nodes"})],Sl.prototype,"renderCollapsedNodes",void 0);h([k],Sl.prototype,"currentSelected",void 0);h([k],Sl.prototype,"slottedTreeItems",void 0);class $w{constructor(t){this.listenerCache=new WeakMap,this.query=t}bind(t){const{query:i}=this,s=this.constructListener(t);s.bind(i)(),i.addListener(s),this.listenerCache.set(t,s)}unbind(t){const i=this.listenerCache.get(t);i&&(this.query.removeListener(i),this.listenerCache.delete(t))}}class jr extends $w{constructor(t,i){super(t),this.styles=i}static with(t){return i=>new jr(t,i)}constructListener(t){let i=!1;const s=this.styles;return function(){const{matches:o}=this;o&&!i?(t.$fastController.addStyles(s),i=o):!o&&i&&(t.$fastController.removeStyles(s),i=o)}}unbind(t){super.unbind(t),t.$fastController.removeStyles(this.styles)}}const ke=jr.with(window.matchMedia("(forced-colors)"));jr.with(window.matchMedia("(prefers-color-scheme: dark)"));jr.with(window.matchMedia("(prefers-color-scheme: light)"));class _w{constructor(t,i,s){this.propertyName=t,this.value=i,this.styles=s}bind(t){ue.getNotifier(t).subscribe(this,this.propertyName),this.handleChange(t,this.propertyName)}unbind(t){ue.getNotifier(t).unsubscribe(this,this.propertyName),t.$fastController.removeStyles(this.styles)}handleChange(t,i){t[i]===this.value?t.$fastController.addStyles(this.styles):t.$fastController.removeStyles(this.styles)}}const Ei="not-allowed",kw=":host([hidden]){display:none}";function Se(e){return`${kw}:host{display:${e}}`}const pe=x0()?"focus-visible":"focus";function _n(e,t,i){return isNaN(e)||e<=t?t:e>=i?i:e}function Lc(e,t,i){return isNaN(e)||e<=t?0:e>=i?1:e/(i-t)}function bn(e,t,i){return isNaN(e)?t:t+e*(i-t)}function Sw(e){const t=Math.round(_n(e,0,255)).toString(16);return t.length===1?"0"+t:t}function ha(e,t,i){return isNaN(e)||e<=0?t:e>=1?i:t+e*(i-t)}function Zt(e,t){const i=Math.pow(10,t);return Math.round(e*i)/i}class Sr{constructor(t,i,s){this.h=t,this.s=i,this.l=s}static fromObject(t){return t&&!isNaN(t.h)&&!isNaN(t.s)&&!isNaN(t.l)?new Sr(t.h,t.s,t.l):null}equalValue(t){return this.h===t.h&&this.s===t.s&&this.l===t.l}roundToPrecision(t){return new Sr(Zt(this.h,t),Zt(this.s,t),Zt(this.l,t))}toObject(){return{h:this.h,s:this.s,l:this.l}}}class Dt{constructor(t,i,s){this.l=t,this.a=i,this.b=s}static fromObject(t){return t&&!isNaN(t.l)&&!isNaN(t.a)&&!isNaN(t.b)?new Dt(t.l,t.a,t.b):null}equalValue(t){return this.l===t.l&&this.a===t.a&&this.b===t.b}roundToPrecision(t){return new Dt(Zt(this.l,t),Zt(this.a,t),Zt(this.b,t))}toObject(){return{l:this.l,a:this.a,b:this.b}}}Dt.epsilon=216/24389;Dt.kappa=24389/27;class wt{constructor(t,i,s,n){this.r=t,this.g=i,this.b=s,this.a=typeof n=="number"&&!isNaN(n)?n:1}static fromObject(t){return t&&!isNaN(t.r)&&!isNaN(t.g)&&!isNaN(t.b)?new wt(t.r,t.g,t.b,t.a):null}equalValue(t){return this.r===t.r&&this.g===t.g&&this.b===t.b&&this.a===t.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(bn(this.r,0,255))},${Math.round(bn(this.g,0,255))},${Math.round(bn(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(bn(this.r,0,255))},${Math.round(bn(this.g,0,255))},${Math.round(bn(this.b,0,255))},${_n(this.a,0,1)})`}roundToPrecision(t){return new wt(Zt(this.r,t),Zt(this.g,t),Zt(this.b,t),Zt(this.a,t))}clamp(){return new wt(_n(this.r,0,1),_n(this.g,0,1),_n(this.b,0,1),_n(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(t){return Sw(bn(t,0,255))}}class hi{constructor(t,i,s){this.x=t,this.y=i,this.z=s}static fromObject(t){return t&&!isNaN(t.x)&&!isNaN(t.y)&&!isNaN(t.z)?new hi(t.x,t.y,t.z):null}equalValue(t){return this.x===t.x&&this.y===t.y&&this.z===t.z}roundToPrecision(t){return new hi(Zt(this.x,t),Zt(this.y,t),Zt(this.z,t))}toObject(){return{x:this.x,y:this.y,z:this.z}}}hi.whitePoint=new hi(.95047,1,1.08883);function Cw(e){return e.r*.2126+e.g*.7152+e.b*.0722}function gg(e){function t(i){return i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4)}return Cw(new wt(t(e.r),t(e.g),t(e.b),1))}function Ac(e,t,i){return i-t===0?0:(e-t)/(i-t)}function Mc(e,t,i){const s=Ac(e.r,t.r,i.r),n=Ac(e.g,t.g,i.g),o=Ac(e.b,t.b,i.b);return(s+n+o)/3}function Iw(e,t,i=null){let s=0,n=i;return n!==null?s=Mc(e,t,n):(n=new wt(0,0,0,1),s=Mc(e,t,n),s<=0&&(n=new wt(1,1,1,1),s=Mc(e,t,n))),s=Math.round(s*1e3)/1e3,new wt(n.r,n.g,n.b,s)}function lf(e){const t=Math.max(e.r,e.g,e.b),i=Math.min(e.r,e.g,e.b),s=t-i;let n=0;s!==0&&(t===e.r?n=60*((e.g-e.b)/s%6):t===e.g?n=60*((e.b-e.r)/s+2):n=60*((e.r-e.g)/s+4)),n<0&&(n+=360);const o=(t+i)/2;let r=0;return s!==0&&(r=s/(1-Math.abs(2*o-1))),new Sr(n,r,o)}function Tw(e,t=1){const i=(1-Math.abs(2*e.l-1))*e.s,s=i*(1-Math.abs(e.h/60%2-1)),n=e.l-i/2;let o=0,r=0,a=0;return e.h<60?(o=i,r=s,a=0):e.h<120?(o=s,r=i,a=0):e.h<180?(o=0,r=i,a=s):e.h<240?(o=0,r=s,a=i):e.h<300?(o=s,r=0,a=i):e.h<360&&(o=i,r=0,a=s),new wt(o+n,r+n,a+n,t)}function Fw(e){const t=(e.l+16)/116,i=t+e.a/500,s=t-e.b/200,n=Math.pow(i,3),o=Math.pow(t,3),r=Math.pow(s,3);let a=0;n>Dt.epsilon?a=n:a=(116*i-16)/Dt.kappa;let l=0;e.l>Dt.epsilon*Dt.kappa?l=o:l=e.l/Dt.kappa;let c=0;return r>Dt.epsilon?c=r:c=(116*s-16)/Dt.kappa,a=hi.whitePoint.x*a,l=hi.whitePoint.y*l,c=hi.whitePoint.z*c,new hi(a,l,c)}function Dw(e){function t(l){return l>Dt.epsilon?Math.pow(l,1/3):(Dt.kappa*l+16)/116}const i=t(e.x/hi.whitePoint.x),s=t(e.y/hi.whitePoint.y),n=t(e.z/hi.whitePoint.z),o=116*s-16,r=500*(i-s),a=200*(s-n);return new Dt(o,r,a)}function Rw(e){function t(l){return l<=.04045?l/12.92:Math.pow((l+.055)/1.055,2.4)}const i=t(e.r),s=t(e.g),n=t(e.b),o=i*.4124564+s*.3575761+n*.1804375,r=i*.2126729+s*.7151522+n*.072175,a=i*.0193339+s*.119192+n*.9503041;return new hi(o,r,a)}function Ew(e,t=1){function i(r){return r<=.0031308?r*12.92:1.055*Math.pow(r,1/2.4)-.055}const s=i(e.x*3.2404542-e.y*1.5371385-e.z*.4985314),n=i(e.x*-.969266+e.y*1.8760108+e.z*.041556),o=i(e.x*.0556434-e.y*.2040259+e.z*1.0572252);return new wt(s,n,o,t)}function Ow(e){return Dw(Rw(e))}function Vc(e,t=1){return Ew(Fw(e),t)}var cf;(function(e){e[e.Burn=0]="Burn",e[e.Color=1]="Color",e[e.Darken=2]="Darken",e[e.Dodge=3]="Dodge",e[e.Lighten=4]="Lighten",e[e.Multiply=5]="Multiply",e[e.Overlay=6]="Overlay",e[e.Screen=7]="Screen"})(cf||(cf={}));function Pw(e,t){if(t.a>=1)return t;if(t.a<=0)return new wt(e.r,e.g,e.b,1);const i=t.a*t.r+(1-t.a)*e.r,s=t.a*t.g+(1-t.a)*e.g,n=t.a*t.b+(1-t.a)*e.b;return new wt(i,s,n,1)}function fa(e,t,i){return isNaN(e)||e<=0?t:e>=1?i:new wt(ha(e,t.r,i.r),ha(e,t.g,i.g),ha(e,t.b,i.b),ha(e,t.a,i.a))}var uf;(function(e){e[e.RGB=0]="RGB",e[e.HSL=1]="HSL",e[e.HSV=2]="HSV",e[e.XYZ=3]="XYZ",e[e.LAB=4]="LAB",e[e.LCH=5]="LCH"})(uf||(uf={}));const Lw=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function Fn(e){const t=Lw.exec(e);if(t===null)return null;let i=t[1];if(i.length===3){const n=i.charAt(0),o=i.charAt(1),r=i.charAt(2);i=n.concat(n,o,o,r,r)}const s=parseInt(i,16);return isNaN(s)?null:new wt(Lc((s&16711680)>>>16,0,255),Lc((s&65280)>>>8,0,255),Lc(s&255,0,255),1)}function Ua(e,t){const i=e.relativeLuminance>t.relativeLuminance?e:t,s=e.relativeLuminance>t.relativeLuminance?t:e;return(i.relativeLuminance+.05)/(s.relativeLuminance+.05)}const Ti=Object.freeze({create(e,t,i){return new Wa(e,t,i)},from(e){return new Wa(e.r,e.g,e.b)}});function Aw(e){const t={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(const i in t)if(typeof t[i]!=typeof e[i])return!1;return!0}class Wa extends wt{constructor(t,i,s){super(t,i,s,1),this.toColorString=this.toStringHexRGB,this.contrast=Ua.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=gg(this)}static fromObject(t){return new Wa(t.r,t.g,t.b)}}function uu(e,t,i=0,s=e.length-1){if(s===i)return e[i];const n=Math.floor((s-i)/2)+i;return t(e[n])?uu(e,t,i,n):uu(e,t,n+1,s)}const Mw=(-.1+Math.sqrt(.21))/2;function Yr(e){return e.relativeLuminance<=Mw}function Nn(e){return Yr(e)?-1:1}const df={stepContrast:1.03,stepContrastRamp:.03,preserveSource:!1};function Vw(e,t,i){return typeof e=="number"?Cr.from(Ti.create(e,t,i)):Cr.from(e)}function Hw(e,t){return Aw(e)?ss.from(e,t):ss.from(Ti.create(e.r,e.g,e.b),t)}const Cr=Object.freeze({create:Vw,from:Hw});class ss{constructor(t,i){this.closestIndexCache=new Map,this.source=t,this.swatches=i,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(t,i,s,n){s===void 0&&(s=this.closestIndexOf(t));let o=this.swatches;const r=this.lastIndex;let a=s;n===void 0&&(n=Nn(t));const l=c=>Ua(t,c)>=i;return n===-1&&(o=this.reversedSwatches,a=r-a),uu(o,l,a,r)}get(t){return this.swatches[t]||this.swatches[_n(t,0,this.lastIndex)]}closestIndexOf(t){if(this.closestIndexCache.has(t.relativeLuminance))return this.closestIndexCache.get(t.relativeLuminance);let i=this.swatches.indexOf(t);if(i!==-1)return this.closestIndexCache.set(t.relativeLuminance,i),i;const s=this.swatches.reduce((n,o)=>Math.abs(o.relativeLuminance-t.relativeLuminance)<Math.abs(n.relativeLuminance-t.relativeLuminance)?o:n);return i=this.swatches.indexOf(s),this.closestIndexCache.set(t.relativeLuminance,i),i}static saturationBump(t,i){const n=lf(t).s,o=lf(i);if(o.s<n){const r=new Sr(o.h,n,o.l);return Tw(r)}return i}static ramp(t){const i=t/100;return i>.5?(i-.5)/.5:2*i}static createHighResolutionPalette(t){const i=[],s=Ow(wt.fromObject(t).roundToPrecision(4)),n=Vc(new Dt(0,s.a,s.b)).clamp().roundToPrecision(4),o=Vc(new Dt(50,s.a,s.b)).clamp().roundToPrecision(4),r=Vc(new Dt(100,s.a,s.b)).clamp().roundToPrecision(4),a=new wt(0,0,0),l=new wt(1,1,1),c=r.equalValue(l)?0:14,u=n.equalValue(a)?0:14;for(let d=100+c;d>=0-u;d-=.5){let f;if(d<0){const b=d/u+1;f=fa(b,a,n)}else if(d<=50)f=fa(ss.ramp(d),n,o);else if(d<=100)f=fa(ss.ramp(d),o,r);else{const b=(d-100)/c;f=fa(b,r,l)}f=ss.saturationBump(o,f).roundToPrecision(4),i.push(Ti.from(f))}return new ss(t,i)}static adjustEnd(t,i,s,n){const o=n===-1?i.swatches:i.reversedSwatches,r=c=>{const u=i.closestIndexOf(c);return n===1?i.lastIndex-u:u};n===1&&s.reverse();const a=t(s[s.length-2]);if(Zt(Ua(s[s.length-1],s[s.length-2]),2)<a){s.pop();const c=i.colorContrast(o[i.lastIndex],a,void 0,n),u=r(c),d=r(s[s.length-2]),f=u-d;let b=1;for(let $=s.length-f-1;$<s.length;$++){const x=r(s[$]),_=$===s.length-1?i.lastIndex:x+b;s[$]=o[_],b++}}n===1&&s.reverse()}static createColorPaletteByContrast(t,i){const s=ss.createHighResolutionPalette(t),n=a=>{const l=i.stepContrast+i.stepContrast*(1-a.relativeLuminance)*i.stepContrastRamp;return Zt(l,2)},o=[];let r=i.preserveSource?t:s.swatches[0];o.push(r);do{const a=n(r);r=s.colorContrast(r,a,void 0,1),o.push(r)}while(r.relativeLuminance>0);if(i.preserveSource){r=t;do{const a=n(r);r=s.colorContrast(r,a,void 0,-1),o.unshift(r)}while(r.relativeLuminance<1)}return this.adjustEnd(n,s,o,-1),i.preserveSource&&this.adjustEnd(n,s,o,1),o}static from(t,i){const s=i===void 0?df:Object.assign(Object.assign({},df),i);return new ss(t,Object.freeze(ss.createColorPaletteByContrast(t,s)))}}const Ga=Ti.create(1,1,1),id=Ti.create(0,0,0),Nw=Ti.create(.5,.5,.5),Hc=Fn("#0078D4"),zw=Ti.create(Hc.r,Hc.g,Hc.b);function mg(e,t,i,s,n){const o=u=>u.contrast(Ga)>=n?Ga:id,r=o(e),a=o(t),l=r.relativeLuminance===a.relativeLuminance?r:o(i),c=o(s);return{rest:r,hover:a,active:l,focus:c}}class Cl{constructor(t,i,s,n){this.toColorString=()=>this.cssGradient,this.contrast=Ua.bind(null,this),this.createCSS=this.toColorString,this.color=new wt(t,i,s),this.cssGradient=n,this.relativeLuminance=gg(this.color),this.r=t,this.g=i,this.b=s}static fromObject(t,i){return new Cl(t.r,t.g,t.b,i)}}const Bw=new wt(0,0,0),jw=new wt(1,1,1);function vg(e,t,i,s,n,o,r,a,l=10,c=!1){const u=e.closestIndexOf(t);a===void 0&&(a=Nn(t));function d(ne){if(c){const U=e.closestIndexOf(t),me=e.get(U),De=ne.relativeLuminance<t.relativeLuminance?Bw:jw,dt=Iw(Fn(ne.toColorString()),Fn(me.toColorString()),De).roundToPrecision(2),Ce=Pw(Fn(t.toColorString()),dt);return Ti.from(Ce)}else return ne}const f=u+a*i,b=f+a*(s-i),$=f+a*(n-i),x=f+a*(o-i),_=a===-1?0:100-l,R=a===-1?l:100;function N(ne,U){const me=e.get(ne);if(U){const De=e.get(ne+a*r),dt=a===-1?De:me,Ce=a===-1?me:De,Te=`linear-gradient(${d(dt).toColorString()} ${_}%, ${d(Ce).toColorString()} ${R}%)`;return Cl.fromObject(dt,Te)}else return d(me)}return{rest:N(f,!0),hover:N(b,!0),active:N($,!1),focus:N(x,!0)}}function Yw(e,t,i,s,n,o,r,a){const l=e.closestIndexOf(t),c=Nn(t),u=l+c*i,d=u+c*(s-i),f=u+c*(n-i),b=u+c*(o-i),$=`calc(100% - ${a})`;function x(_,R){const N=e.get(_);if(R){const ne=e.get(_+c*r),U=`linear-gradient(${N.toColorString()} ${$}, ${ne.toColorString()} ${$}, ${ne.toColorString()})`;return Cl.fromObject(N,U)}else return N}return{rest:x(u,!0),hover:x(d,!0),active:x(f,!1),focus:x(b,!0)}}function Uw(e,t,i){return e.colorContrast(t,i)}function Io(e,t,i,s,n,o,r,a){a==null&&(a=Nn(t));const l=e.closestIndexOf(e.colorContrast(t,i));return{rest:e.get(l+a*s),hover:e.get(l+a*n),active:e.get(l+a*o),focus:e.get(l+a*r)}}function Ww(e,t,i,s,n,o,r,a=void 0,l,c,u,d,f,b=void 0){return Yr(t)?Io(e,t,l,c,u,d,f,b):Io(e,t,i,s,n,o,r,a)}function Gw(e,t,i){return e.get(e.closestIndexOf(t)+Nn(t)*i)}function rn(e,t,i,s,n,o,r){const a=e.closestIndexOf(t);return r==null&&(r=Nn(t)),{rest:e.get(a+r*i),hover:e.get(a+r*s),active:e.get(a+r*n),focus:e.get(a+r*o)}}function sd(e,t,i,s,n,o,r=void 0,a,l,c,u,d=void 0){return Yr(t)?rn(e,t,a,l,c,u,d):rn(e,t,i,s,n,o,r)}function qw(e,t){return Yr(t)?Ga:id}function Zw(e,t,i){return Yr(t)?id:Ga}function Xw(e){return Ti.create(e,e,e)}var du;(function(e){e[e.LightMode=.98]="LightMode",e[e.DarkMode=.15]="DarkMode"})(du||(du={}));function Ur(e,t){return e.closestIndexOf(Xw(t))}function Qw(e,t){return e.get(Ur(e,t))}function Jw(e,t,i){return e.get(Ur(e,t)+i)}function bg(e,t,i){return e.get(Ur(e,t)+i*-1)}function Kw(e,t,i){return e.get(Ur(e,t)+i*-1*2)}function e$(e,t,i){return e.get(Ur(e,t)+i*-1*3)}const t$={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Black:900},{create:w}=Ye;function H(e){return Ye.create({name:e,cssCustomPropertyName:null})}const Pa=w("direction").withDefault(Qe.ltr),yi=w("disabled-opacity").withDefault(.3),Il=w("base-height-multiplier").withDefault(8),i$=w("base-horizontal-spacing-multiplier").withDefault(3),pn=w("density").withDefault(0),W=w("design-unit").withDefault(4),Ve=w("control-corner-radius").withDefault(4),xs=w("layer-corner-radius").withDefault(8),te=w("stroke-width").withDefault(1),Vt=w("focus-stroke-width").withDefault(2),Oi=w("body-font").withDefault('"Segoe UI Variable", "Segoe UI", sans-serif'),s$=w("font-weight").withDefault(t$.Normal);function Vs(e){return t=>{const i=e.getValueFor(t),s=s$.getValueFor(t);if(i.endsWith("px")){const n=Number.parseFloat(i.replace("px",""));if(n<=12)return`"wght" ${s}, "opsz" 8`;if(n>24)return`"wght" ${s}, "opsz" 36`}return`"wght" ${s}, "opsz" 10.5`}}const nd=w("type-ramp-base-font-size").withDefault("14px"),yg=w("type-ramp-base-line-height").withDefault("20px"),n$=w("type-ramp-base-font-variations").withDefault(Vs(nd)),od=w("type-ramp-minus-1-font-size").withDefault("12px"),rd=w("type-ramp-minus-1-line-height").withDefault("16px"),o$=w("type-ramp-minus-1-font-variations").withDefault(Vs(od)),ad=w("type-ramp-minus-2-font-size").withDefault("10px"),xg=w("type-ramp-minus-2-line-height").withDefault("14px"),r$=w("type-ramp-minus-2-font-variations").withDefault(Vs(ad)),ld=w("type-ramp-plus-1-font-size").withDefault("16px"),wg=w("type-ramp-plus-1-line-height").withDefault("22px"),a$=w("type-ramp-plus-1-font-variations").withDefault(Vs(ld)),cd=w("type-ramp-plus-2-font-size").withDefault("20px"),$g=w("type-ramp-plus-2-line-height").withDefault("26px"),l$=w("type-ramp-plus-2-font-variations").withDefault(Vs(cd)),ud=w("type-ramp-plus-3-font-size").withDefault("24px"),_g=w("type-ramp-plus-3-line-height").withDefault("32px"),c$=w("type-ramp-plus-3-font-variations").withDefault(Vs(ud)),dd=w("type-ramp-plus-4-font-size").withDefault("28px"),kg=w("type-ramp-plus-4-line-height").withDefault("36px"),u$=w("type-ramp-plus-4-font-variations").withDefault(Vs(dd)),hd=w("type-ramp-plus-5-font-size").withDefault("32px"),Sg=w("type-ramp-plus-5-line-height").withDefault("40px"),d$=w("type-ramp-plus-5-font-variations").withDefault(Vs(hd)),fd=w("type-ramp-plus-6-font-size").withDefault("40px"),Cg=w("type-ramp-plus-6-line-height").withDefault("52px"),h$=w("type-ramp-plus-6-font-variations").withDefault(Vs(fd)),zn=w("base-layer-luminance").withDefault(du.LightMode),hu=H("accent-fill-rest-delta").withDefault(0),fu=H("accent-fill-hover-delta").withDefault(-2),pu=H("accent-fill-active-delta").withDefault(-5),gu=H("accent-fill-focus-delta").withDefault(0),Ig=H("accent-foreground-rest-delta").withDefault(0),Tg=H("accent-foreground-hover-delta").withDefault(3),Fg=H("accent-foreground-active-delta").withDefault(-8),Dg=H("accent-foreground-focus-delta").withDefault(0),Rg=H("neutral-fill-rest-delta").withDefault(-1),Eg=H("neutral-fill-hover-delta").withDefault(1),Og=H("neutral-fill-active-delta").withDefault(0),Pg=H("neutral-fill-focus-delta").withDefault(0),Lg=H("neutral-fill-input-rest-delta").withDefault(-1),Ag=H("neutral-fill-input-hover-delta").withDefault(1),Mg=H("neutral-fill-input-active-delta").withDefault(0),Vg=H("neutral-fill-input-focus-delta").withDefault(-2),pa=H("neutral-fill-input-alt-rest-delta").withDefault(2),hf=H("neutral-fill-input-alt-hover-delta").withDefault(4),ff=H("neutral-fill-input-alt-active-delta").withDefault(6),pf=H("neutral-fill-input-alt-focus-delta").withDefault(2),an=H("neutral-fill-layer-rest-delta").withDefault(-2),f$=H("neutral-fill-layer-hover-delta").withDefault(-3),p$=H("neutral-fill-layer-active-delta").withDefault(-3),ga=H("neutral-fill-layer-alt-rest-delta").withDefault(-1),g$=H("neutral-fill-secondary-rest-delta").withDefault(3),m$=H("neutral-fill-secondary-hover-delta").withDefault(2),v$=H("neutral-fill-secondary-active-delta").withDefault(1),b$=H("neutral-fill-secondary-focus-delta").withDefault(3),Hg=H("neutral-fill-stealth-rest-delta").withDefault(0),Ng=H("neutral-fill-stealth-hover-delta").withDefault(3),zg=H("neutral-fill-stealth-active-delta").withDefault(2),Bg=H("neutral-fill-stealth-focus-delta").withDefault(0),y$=H("neutral-fill-strong-rest-delta").withDefault(0),jg=H("neutral-fill-strong-hover-delta").withDefault(8),Yg=H("neutral-fill-strong-active-delta").withDefault(-5),Ug=H("neutral-fill-strong-focus-delta").withDefault(0),Wg=H("neutral-stroke-rest-delta").withDefault(8),Gg=H("neutral-stroke-hover-delta").withDefault(12),qg=H("neutral-stroke-active-delta").withDefault(6),Zg=H("neutral-stroke-focus-delta").withDefault(8),Xg=H("neutral-stroke-control-rest-delta").withDefault(3),Qg=H("neutral-stroke-control-hover-delta").withDefault(5),Jg=H("neutral-stroke-control-active-delta").withDefault(5),Kg=H("neutral-stroke-control-focus-delta").withDefault(5),em=H("neutral-stroke-divider-rest-delta").withDefault(4),gf=H("neutral-stroke-layer-rest-delta").withDefault(3),x$=H("neutral-stroke-layer-hover-delta").withDefault(3),w$=H("neutral-stroke-layer-active-delta").withDefault(3),$$=H("neutral-stroke-strong-hover-delta").withDefault(0),_$=H("neutral-stroke-strong-active-delta").withDefault(0),k$=H("neutral-stroke-strong-focus-delta").withDefault(0),tm=w("neutral-base-color").withDefault(Nw),Ke=H("neutral-palette").withDefault(e=>Cr.from(tm.getValueFor(e))),im=w("accent-base-color").withDefault(zw),pd=H("accent-palette").withDefault(e=>Cr.from(im.getValueFor(e))),S$=H("neutral-layer-card-container-recipe").withDefault({evaluate:e=>bg(Ke.getValueFor(e),zn.getValueFor(e),an.getValueFor(e))});w("neutral-layer-card-container").withDefault(e=>S$.getValueFor(e).evaluate(e));const C$=H("neutral-layer-floating-recipe").withDefault({evaluate:e=>Jw(Ke.getValueFor(e),zn.getValueFor(e),an.getValueFor(e))}),Wr=w("neutral-layer-floating").withDefault(e=>C$.getValueFor(e).evaluate(e)),I$=H("neutral-layer-1-recipe").withDefault({evaluate:e=>Qw(Ke.getValueFor(e),zn.getValueFor(e))}),T$=w("neutral-layer-1").withDefault(e=>I$.getValueFor(e).evaluate(e)),F$=H("neutral-layer-2-recipe").withDefault({evaluate:e=>bg(Ke.getValueFor(e),zn.getValueFor(e),an.getValueFor(e))});w("neutral-layer-2").withDefault(e=>F$.getValueFor(e).evaluate(e));const D$=H("neutral-layer-3-recipe").withDefault({evaluate:e=>Kw(Ke.getValueFor(e),zn.getValueFor(e),an.getValueFor(e))});w("neutral-layer-3").withDefault(e=>D$.getValueFor(e).evaluate(e));const R$=H("neutral-layer-4-recipe").withDefault({evaluate:e=>e$(Ke.getValueFor(e),zn.getValueFor(e),an.getValueFor(e))});w("neutral-layer-4").withDefault(e=>R$.getValueFor(e).evaluate(e));const xe=w("fill-color").withDefault(e=>T$.getValueFor(e));var qa;(function(e){e[e.normal=4.5]="normal",e[e.large=3]="large"})(qa||(qa={}));const Tl=H("accent-fill-recipe").withDefault({evaluate:(e,t)=>Ww(pd.getValueFor(e),t||xe.getValueFor(e),5,hu.getValueFor(e),fu.getValueFor(e),pu.getValueFor(e),gu.getValueFor(e),void 0,8,hu.getValueFor(e),fu.getValueFor(e),pu.getValueFor(e),gu.getValueFor(e),void 0)}),qe=w("accent-fill-rest").withDefault(e=>Tl.getValueFor(e).evaluate(e).rest),Wi=w("accent-fill-hover").withDefault(e=>Tl.getValueFor(e).evaluate(e).hover),Gi=w("accent-fill-active").withDefault(e=>Tl.getValueFor(e).evaluate(e).active),Fl=w("accent-fill-focus").withDefault(e=>Tl.getValueFor(e).evaluate(e).focus),Dl=H("foreground-on-accent-recipe").withDefault({evaluate:e=>mg(qe.getValueFor(e),Wi.getValueFor(e),Gi.getValueFor(e),Fl.getValueFor(e),qa.normal)}),Ln=w("foreground-on-accent-rest").withDefault(e=>Dl.getValueFor(e).evaluate(e).rest),sm=w("foreground-on-accent-hover").withDefault(e=>Dl.getValueFor(e).evaluate(e).hover),nm=w("foreground-on-accent-active").withDefault(e=>Dl.getValueFor(e).evaluate(e).active);w("foreground-on-accent-focus").withDefault(e=>Dl.getValueFor(e).evaluate(e).focus);const Rl=H("accent-foreground-recipe").withDefault({evaluate:(e,t)=>Io(pd.getValueFor(e),t||xe.getValueFor(e),9.5,Ig.getValueFor(e),Tg.getValueFor(e),Fg.getValueFor(e),Dg.getValueFor(e))}),om=w("accent-foreground-rest").withDefault(e=>Rl.getValueFor(e).evaluate(e).rest),rm=w("accent-foreground-hover").withDefault(e=>Rl.getValueFor(e).evaluate(e).hover),am=w("accent-foreground-active").withDefault(e=>Rl.getValueFor(e).evaluate(e).active);w("accent-foreground-focus").withDefault(e=>Rl.getValueFor(e).evaluate(e).focus);const El=H("accent-stroke-control-recipe").withDefault({evaluate:(e,t)=>vg(Ke.getValueFor(e),t||xe.getValueFor(e),-3,-3,-3,-3,10,1,void 0,!0)}),E$=w("accent-stroke-control-rest").withDefault(e=>El.getValueFor(e).evaluate(e,qe.getValueFor(e)).rest),O$=w("accent-stroke-control-hover").withDefault(e=>El.getValueFor(e).evaluate(e,Wi.getValueFor(e)).hover),P$=w("accent-stroke-control-active").withDefault(e=>El.getValueFor(e).evaluate(e,Gi.getValueFor(e)).active);w("accent-stroke-control-focus").withDefault(e=>El.getValueFor(e).evaluate(e,Fl.getValueFor(e)).focus);const Ol=H("neutral-fill-recipe").withDefault({evaluate:(e,t)=>sd(Ke.getValueFor(e),t||xe.getValueFor(e),Rg.getValueFor(e),Eg.getValueFor(e),Og.getValueFor(e),Pg.getValueFor(e),void 0,2,3,1,2,void 0)}),Si=w("neutral-fill-rest").withDefault(e=>Ol.getValueFor(e).evaluate(e).rest),mf=w("neutral-fill-hover").withDefault(e=>Ol.getValueFor(e).evaluate(e).hover),vf=w("neutral-fill-active").withDefault(e=>Ol.getValueFor(e).evaluate(e).active);w("neutral-fill-focus").withDefault(e=>Ol.getValueFor(e).evaluate(e).focus);const gn=H("neutral-fill-input-recipe").withDefault({evaluate:(e,t)=>sd(Ke.getValueFor(e),t||xe.getValueFor(e),Lg.getValueFor(e),Ag.getValueFor(e),Mg.getValueFor(e),Vg.getValueFor(e),void 0,2,3,1,0,void 0)}),ma=w("neutral-fill-input-rest").withDefault(e=>gn.getValueFor(e).evaluate(e).rest),bf=w("neutral-fill-input-hover").withDefault(e=>gn.getValueFor(e).evaluate(e).hover);w("neutral-fill-input-active").withDefault(e=>gn.getValueFor(e).evaluate(e).active);const yf=w("neutral-fill-input-focus").withDefault(e=>gn.getValueFor(e).evaluate(e).focus),Pl=H("neutral-fill-input-alt-recipe").withDefault({evaluate:(e,t)=>sd(Ke.getValueFor(e),t||xe.getValueFor(e),pa.getValueFor(e),hf.getValueFor(e),ff.getValueFor(e),pf.getValueFor(e),1,pa.getValueFor(e),pa.getValueFor(e)-hf.getValueFor(e),pa.getValueFor(e)-ff.getValueFor(e),pf.getValueFor(e),1)}),gd=w("neutral-fill-input-alt-rest").withDefault(e=>Pl.getValueFor(e).evaluate(e).rest),md=w("neutral-fill-input-alt-hover").withDefault(e=>Pl.getValueFor(e).evaluate(e).hover),vd=w("neutral-fill-input-alt-active").withDefault(e=>Pl.getValueFor(e).evaluate(e).active),bd=w("neutral-fill-input-alt-focus").withDefault(e=>Pl.getValueFor(e).evaluate(e).focus),Bn=H("neutral-fill-layer-recipe").withDefault({evaluate:(e,t)=>rn(Ke.getValueFor(e),t||xe.getValueFor(e),an.getValueFor(e),f$.getValueFor(e),p$.getValueFor(e),an.getValueFor(e),1)}),L$=w("neutral-fill-layer-rest").withDefault(e=>Bn.getValueFor(e).evaluate(e).rest);w("neutral-fill-layer-hover").withDefault(e=>Bn.getValueFor(e).evaluate(e).hover);w("neutral-fill-layer-active").withDefault(e=>Bn.getValueFor(e).evaluate(e).active);const A$=H("neutral-fill-layer-alt-recipe").withDefault({evaluate:(e,t)=>rn(Ke.getValueFor(e),t||xe.getValueFor(e),ga.getValueFor(e),ga.getValueFor(e),ga.getValueFor(e),ga.getValueFor(e))}),M$=w("neutral-fill-layer-alt-rest").withDefault(e=>A$.getValueFor(e).evaluate(e).rest),jn=H("neutral-fill-secondary-recipe").withDefault({evaluate:(e,t)=>rn(Ke.getValueFor(e),t||xe.getValueFor(e),g$.getValueFor(e),m$.getValueFor(e),v$.getValueFor(e),b$.getValueFor(e))}),An=w("neutral-fill-secondary-rest").withDefault(e=>jn.getValueFor(e).evaluate(e).rest),yd=w("neutral-fill-secondary-hover").withDefault(e=>jn.getValueFor(e).evaluate(e).hover),V$=w("neutral-fill-secondary-active").withDefault(e=>jn.getValueFor(e).evaluate(e).active),H$=w("neutral-fill-secondary-focus").withDefault(e=>jn.getValueFor(e).evaluate(e).focus),Qi=H("neutral-fill-stealth-recipe").withDefault({evaluate:(e,t)=>rn(Ke.getValueFor(e),t||xe.getValueFor(e),Hg.getValueFor(e),Ng.getValueFor(e),zg.getValueFor(e),Bg.getValueFor(e))}),To=w("neutral-fill-stealth-rest").withDefault(e=>Qi.getValueFor(e).evaluate(e).rest),Fo=w("neutral-fill-stealth-hover").withDefault(e=>Qi.getValueFor(e).evaluate(e).hover),Do=w("neutral-fill-stealth-active").withDefault(e=>Qi.getValueFor(e).evaluate(e).active),N$=w("neutral-fill-stealth-focus").withDefault(e=>Qi.getValueFor(e).evaluate(e).focus),Ll=H("neutral-fill-strong-recipe").withDefault({evaluate:(e,t)=>Io(Ke.getValueFor(e),t||xe.getValueFor(e),4.5,y$.getValueFor(e),jg.getValueFor(e),Yg.getValueFor(e),Ug.getValueFor(e))}),lm=w("neutral-fill-strong-rest").withDefault(e=>Ll.getValueFor(e).evaluate(e).rest),z$=w("neutral-fill-strong-hover").withDefault(e=>Ll.getValueFor(e).evaluate(e).hover),B$=w("neutral-fill-strong-active").withDefault(e=>Ll.getValueFor(e).evaluate(e).active);w("neutral-fill-strong-focus").withDefault(e=>Ll.getValueFor(e).evaluate(e).focus);const Al=H("neutral-foreground-recipe").withDefault({evaluate:(e,t)=>Io(Ke.getValueFor(e),t||xe.getValueFor(e),16,0,-19,-30,0)}),ze=w("neutral-foreground-rest").withDefault(e=>Al.getValueFor(e).evaluate(e).rest),j$=w("neutral-foreground-hover").withDefault(e=>Al.getValueFor(e).evaluate(e).hover),Y$=w("neutral-foreground-active").withDefault(e=>Al.getValueFor(e).evaluate(e).active);w("neutral-foreground-focus").withDefault(e=>Al.getValueFor(e).evaluate(e).focus);const Gr=H("neutral-foreground-hint-recipe").withDefault({evaluate:(e,t)=>Uw(Ke.getValueFor(e),t||xe.getValueFor(e),4.5)}),Ro=w("neutral-foreground-hint").withDefault(e=>Gr.getValueFor(e).evaluate(e)),Ml=H("neutral-stroke-recipe").withDefault({evaluate:(e,t)=>rn(Ke.getValueFor(e),t||xe.getValueFor(e),Wg.getValueFor(e),Gg.getValueFor(e),qg.getValueFor(e),Zg.getValueFor(e))}),Ir=w("neutral-stroke-rest").withDefault(e=>Ml.getValueFor(e).evaluate(e).rest),U$=w("neutral-stroke-hover").withDefault(e=>Ml.getValueFor(e).evaluate(e).hover),W$=w("neutral-stroke-active").withDefault(e=>Ml.getValueFor(e).evaluate(e).active);w("neutral-stroke-focus").withDefault(e=>Ml.getValueFor(e).evaluate(e).focus);const Vl=H("neutral-stroke-control-recipe").withDefault({evaluate:(e,t)=>vg(Ke.getValueFor(e),t||xe.getValueFor(e),Xg.getValueFor(e),Qg.getValueFor(e),Jg.getValueFor(e),Kg.getValueFor(e),5)}),xd=w("neutral-stroke-control-rest").withDefault(e=>Vl.getValueFor(e).evaluate(e).rest),cm=w("neutral-stroke-control-hover").withDefault(e=>Vl.getValueFor(e).evaluate(e).hover),um=w("neutral-stroke-control-active").withDefault(e=>Vl.getValueFor(e).evaluate(e).active);w("neutral-stroke-control-focus").withDefault(e=>Vl.getValueFor(e).evaluate(e).focus);const G$=H("neutral-stroke-divider-recipe").withDefault({evaluate:(e,t)=>Gw(Ke.getValueFor(e),t||xe.getValueFor(e),em.getValueFor(e))}),Za=w("neutral-stroke-divider-rest").withDefault(e=>G$.getValueFor(e).evaluate(e)),Hl=H("neutral-stroke-input-recipe").withDefault({evaluate:(e,t)=>Yw(Ke.getValueFor(e),t||xe.getValueFor(e),Xg.getValueFor(e),Qg.getValueFor(e),Jg.getValueFor(e),Kg.getValueFor(e),20,te.getValueFor(e)+"px")}),xf=w("neutral-stroke-input-rest").withDefault(e=>Hl.getValueFor(e).evaluate(e).rest),q$=w("neutral-stroke-input-hover").withDefault(e=>Hl.getValueFor(e).evaluate(e).hover);w("neutral-stroke-input-active").withDefault(e=>Hl.getValueFor(e).evaluate(e).active);w("neutral-stroke-input-focus").withDefault(e=>Hl.getValueFor(e).evaluate(e).focus);const wd=H("neutral-stroke-layer-recipe").withDefault({evaluate:(e,t)=>rn(Ke.getValueFor(e),t||xe.getValueFor(e),gf.getValueFor(e),x$.getValueFor(e),w$.getValueFor(e),gf.getValueFor(e))}),go=w("neutral-stroke-layer-rest").withDefault(e=>wd.getValueFor(e).evaluate(e).rest);w("neutral-stroke-layer-hover").withDefault(e=>wd.getValueFor(e).evaluate(e).hover);w("neutral-stroke-layer-active").withDefault(e=>wd.getValueFor(e).evaluate(e).active);const Nl=H("neutral-stroke-strong-recipe").withDefault({evaluate:(e,t)=>Io(Ke.getValueFor(e),t||xe.getValueFor(e),5.5,0,$$.getValueFor(e),_$.getValueFor(e),k$.getValueFor(e))}),Vo=w("neutral-stroke-strong-rest").withDefault(e=>Nl.getValueFor(e).evaluate(e).rest),$d=w("neutral-stroke-strong-hover").withDefault(e=>Nl.getValueFor(e).evaluate(e).hover),_d=w("neutral-stroke-strong-active").withDefault(e=>Nl.getValueFor(e).evaluate(e).active);w("neutral-stroke-strong-focus").withDefault(e=>Nl.getValueFor(e).evaluate(e).focus);const Z$=H("focus-stroke-outer-recipe").withDefault({evaluate:e=>qw(Ke.getValueFor(e),xe.getValueFor(e))}),zl=w("focus-stroke-outer").withDefault(e=>Z$.getValueFor(e).evaluate(e)),X$=H("focus-stroke-inner-recipe").withDefault({evaluate:e=>Zw(pd.getValueFor(e),xe.getValueFor(e),zl.getValueFor(e))}),Q$=w("focus-stroke-inner").withDefault(e=>X$.getValueFor(e).evaluate(e)),Bl=H("foreground-on-accent-large-recipe").withDefault({evaluate:e=>mg(qe.getValueFor(e),Wi.getValueFor(e),Gi.getValueFor(e),Fl.getValueFor(e),qa.large)});w("foreground-on-accent-rest-large").withDefault(e=>Bl.getValueFor(e).evaluate(e).rest);w("foreground-on-accent-hover-large").withDefault(e=>Bl.getValueFor(e).evaluate(e,Wi.getValueFor(e)).hover);w("foreground-on-accent-active-large").withDefault(e=>Bl.getValueFor(e).evaluate(e,Gi.getValueFor(e)).active);w("foreground-on-accent-focus-large").withDefault(e=>Bl.getValueFor(e).evaluate(e,Fl.getValueFor(e)).focus);const J$=w("neutral-fill-inverse-rest-delta").withDefault(0),K$=w("neutral-fill-inverse-hover-delta").withDefault(-3),e1=w("neutral-fill-inverse-active-delta").withDefault(7),t1=w("neutral-fill-inverse-focus-delta").withDefault(0);function i1(e,t,i,s,n,o){const r=Nn(t),a=e.closestIndexOf(e.colorContrast(t,14)),l=a+r*Math.abs(i-s),c=r===1?i<s:r*i>r*s;let u,d;return c?(u=a,d=l):(u=l,d=a),{rest:e.get(u),hover:e.get(d),active:e.get(u+r*n),focus:e.get(u+r*o)}}const jl=H("neutral-fill-inverse-recipe").withDefault({evaluate:(e,t)=>i1(Ke.getValueFor(e),t||xe.getValueFor(e),J$.getValueFor(e),K$.getValueFor(e),e1.getValueFor(e),t1.getValueFor(e))});w("neutral-fill-inverse-rest").withDefault(e=>jl.getValueFor(e).evaluate(e).rest);w("neutral-fill-inverse-hover").withDefault(e=>jl.getValueFor(e).evaluate(e).hover);w("neutral-fill-inverse-active").withDefault(e=>jl.getValueFor(e).evaluate(e).active);w("neutral-fill-inverse-focus").withDefault(e=>jl.getValueFor(e).evaluate(e).focus);const pt=pi`
  font-family: ${Oi};
  font-size: ${nd};
  line-height: ${yg};
  font-weight: initial;
  font-variation-settings: ${n$};
`,dm=pi`
  font-family: ${Oi};
  font-size: ${od};
  line-height: ${rd};
  font-weight: initial;
  font-variation-settings: ${o$};
`;pi`
  font-family: ${Oi};
  font-size: ${ad};
  line-height: ${xg};
  font-weight: initial;
  font-variation-settings: ${r$};
`;pi`
  font-family: ${Oi};
  font-size: ${ld};
  line-height: ${wg};
  font-weight: initial;
  font-variation-settings: ${a$};
`;pi`
  font-family: ${Oi};
  font-size: ${cd};
  line-height: ${$g};
  font-weight: initial;
  font-variation-settings: ${l$};
`;pi`
  font-family: ${Oi};
  font-size: ${ud};
  line-height: ${_g};
  font-weight: initial;
  font-variation-settings: ${c$};
`;pi`
  font-family: ${Oi};
  font-size: ${dd};
  line-height: ${kg};
  font-weight: initial;
  font-variation-settings: ${u$};
`;pi`
  font-family: ${Oi};
  font-size: ${hd};
  line-height: ${Sg};
  font-weight: initial;
  font-variation-settings: ${d$};
`;pi`
  font-family: ${Oi};
  font-size: ${fd};
  line-height: ${Cg};
  font-weight: initial;
  font-variation-settings: ${h$};
`;const s1=(e,t)=>D`
    ${Se("flex")} :host {
      box-sizing: border-box;
      flex-direction: column;
      ${pt}
      color: ${ze};
      gap: calc(${W} * 1px);
    }
  `,Pi=pi`
  outline: calc(${Vt} * 1px) solid ${zl};
  outline-offset: calc(${Vt} * -1px);
`,qr=pi`
  outline: calc(${Vt} * 1px) solid ${zl};
  outline-offset: calc(${te} * 1px);
`,_e=pi`(${Il} + ${pn}) * ${W}`,n1=Ye.create("neutral-fill-stealth-rest-on-neutral-fill-layer-rest").withDefault(e=>{const t=Bn.getValueFor(e);return Qi.getValueFor(e).evaluate(e,t.evaluate(e).rest).rest}),o1=Ye.create("neutral-fill-stealth-hover-on-neutral-fill-layer-rest").withDefault(e=>{const t=Bn.getValueFor(e);return Qi.getValueFor(e).evaluate(e,t.evaluate(e).rest).hover}),r1=Ye.create("neutral-fill-stealth-active-on-neutral-fill-layer-rest").withDefault(e=>{const t=Bn.getValueFor(e);return Qi.getValueFor(e).evaluate(e,t.evaluate(e).rest).active}),a1=(e,t)=>D`
    ${Se("flex")} :host {
      box-sizing: border-box;
      ${pt};
      flex-direction: column;
      background: ${L$};
      color: ${ze};
      border: calc(${te} * 1px) solid ${go};
      border-radius: calc(${xs} * 1px);
    }

    .region {
      display: none;
      padding: calc(${W} * 2 * 1px);
      background: ${M$};
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
      margin: calc(${W} * 3 * 1px) 0;
      padding: 0 calc(${W} * 2 * 1px);
      text-align: left;
      color: inherit;
      cursor: pointer;
      font: inherit;
    }

    .button::before {
      content: '';
      position: absolute;
      top: calc(${te} * -1px);
      left: calc(${te} * -1px);
      right: calc(${te} * -1px);
      bottom: calc(${te} * -1px);
      cursor: pointer;
    }

    .button:${pe}::before {
      ${Pi}
      border-radius: calc(${xs} * 1px);
    }

    :host(.expanded) .button:${pe}::before {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    :host(.expanded) .region {
      display: block;
      border-top: calc(${te} * 1px) solid ${go};
      border-bottom-left-radius: calc((${xs} - ${te}) * 1px);
      border-bottom-right-radius: calc((${xs} - ${te}) * 1px);
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-column: 4;
      pointer-events: none;
      background: ${n1};
      border-radius: calc(${Ve} * 1px);
      fill: currentcolor;
      width: calc(${_e} * 1px);
      height: calc(${_e} * 1px);
      margin: calc(${W} * 2 * 1px);
    }

    .heading:hover .icon {
      background: ${o1};
    }

    .heading:active .icon {
      background: ${r1};
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
      padding-inline-start: calc(${W} * 2 * 1px);
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
  `.withBehaviors(ke(D`
        .button:${pe}::before {
          outline-color: ${m.Highlight};
        }
        .icon {
          fill: ${m.ButtonText};
        }
      `)),l1=On.compose({baseName:"accordion-item",template:t0,styles:a1,collapsedIcon:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `,expandedIcon:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 7.35c.2.2.5.2.7 0L6 4.21l3.15 3.14a.5.5 0 10.7-.7l-3.5-3.5a.5.5 0 00-.7 0l-3.5 3.5a.5.5 0 000 .7z"/>
    </svg>
  `}),c1=Qu.compose({baseName:"accordion",template:g0,styles:s1});function Y(e,t,i,s){var n=arguments.length,o=n<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,i):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o}class Ho{constructor(t,i){this.cache=new WeakMap,this.ltr=t,this.rtl=i}bind(t){this.attach(t)}unbind(t){const i=this.cache.get(t);i&&Pa.unsubscribe(i)}attach(t){const i=this.cache.get(t)||new u1(this.ltr,this.rtl,t),s=Pa.getValueFor(t);Pa.subscribe(i),i.attach(s),this.cache.set(t,i)}}class u1{constructor(t,i,s){this.ltr=t,this.rtl=i,this.source=s,this.attached=null}handleChange({target:t,token:i}){this.attach(i.getValueFor(this.source))}attach(t){this.attached!==this[t]&&(this.attached!==null&&this.source.$fastController.removeStyles(this.attached),this.attached=this[t],this.attached!==null&&this.source.$fastController.addStyles(this.attached))}}const Yn=Ye.create({name:"elevation-shadow",cssCustomPropertyName:null}).withDefault({evaluate:(e,t,i)=>{let s=.12,n=.14;t>16&&(s=.2,n=.24);const o=`0 0 2px rgba(0, 0, 0, ${s})`,r=`0 calc(${t} * 0.5px) calc((${t} * 1px)) rgba(0, 0, 0, ${n})`;return`${o}, ${r}`}}),d1=Ye.create("elevation-shadow-card-rest-size").withDefault(4),h1=Ye.create("elevation-shadow-card-hover-size").withDefault(8),f1=Ye.create("elevation-shadow-card-active-size").withDefault(0),p1=Ye.create("elevation-shadow-card-focus-size").withDefault(8),g1=Ye.create("elevation-shadow-card-rest").withDefault(e=>Yn.getValueFor(e).evaluate(e,d1.getValueFor(e)));Ye.create("elevation-shadow-card-hover").withDefault(e=>Yn.getValueFor(e).evaluate(e,h1.getValueFor(e)));Ye.create("elevation-shadow-card-active").withDefault(e=>Yn.getValueFor(e).evaluate(e,f1.getValueFor(e)));Ye.create("elevation-shadow-card-focus").withDefault(e=>Yn.getValueFor(e).evaluate(e,p1.getValueFor(e)));const m1=Ye.create("elevation-shadow-tooltip-size").withDefault(16),v1=Ye.create("elevation-shadow-tooltip").withDefault(e=>Yn.getValueFor(e).evaluate(e,m1.getValueFor(e))),b1=Ye.create("elevation-shadow-flyout-size").withDefault(32),hm=Ye.create("elevation-shadow-flyout").withDefault(e=>Yn.getValueFor(e).evaluate(e,b1.getValueFor(e))),y1=Ye.create("elevation-shadow-dialog-size").withDefault(128),x1=Ye.create("elevation-shadow-dialog").withDefault(e=>Yn.getValueFor(e).evaluate(e,y1.getValueFor(e))),fm=(e,t,i,s="[disabled]")=>D`
    ${Se("inline-flex")}
    
    :host {
      position: relative;
      box-sizing: border-box;
      ${pt}
      height: calc(${_e} * 1px);
      min-width: calc(${_e} * 1px);
      color: ${ze};
      border-radius: calc(${Ve} * 1px);
      fill: currentcolor;
    }

    .control {
      border: calc(${te} * 1px) solid transparent;
      flex-grow: 1;
      box-sizing: border-box;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 calc((10 + (${W} * 2 * ${pn})) * 1px);
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
      ${Pi}
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
  `,kd=(e,t,i,s="[disabled]")=>D`
    .control {
      background: padding-box linear-gradient(${Si}, ${Si}),
        border-box ${xd};
    }

    :host(${i}:hover) .control {
      background: padding-box linear-gradient(${mf}, ${mf}),
        border-box ${cm};
    }

    :host(${i}:active) .control {
      background: padding-box linear-gradient(${vf}, ${vf}),
        border-box ${um};
    }

    :host(${s}) .control {
      background: padding-box linear-gradient(${Si}, ${Si}),
        border-box ${Ir};
    }
  `.withBehaviors(ke(D`
        .control {
          background: ${m.ButtonFace};
          border-color: ${m.ButtonText};
          color: ${m.ButtonText};
        }

        :host(${i}:hover) .control,
        :host(${i}:active) .control {
          forced-color-adjust: none;
          background: ${m.HighlightText};
          border-color: ${m.Highlight};
          color: ${m.Highlight};
        }

        :host(${s}) .control {
          background: transparent;
          border-color: ${m.GrayText};
          color: ${m.GrayText};
        }

        .control:${pe} {
          outline-color: ${m.CanvasText};
        }

        :host([href]) .control {
          background: transparent;
          border-color: ${m.LinkText};
          color: ${m.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${m.CanvasText};
          color: ${m.CanvasText};
        }
    `)),pm=(e,t,i,s="[disabled]")=>D`
    .control {
      background: padding-box linear-gradient(${qe}, ${qe}),
        border-box ${E$};
      color: ${Ln};
    }

    :host(${i}:hover) .control {
      background: padding-box linear-gradient(${Wi}, ${Wi}),
        border-box ${O$};
      color: ${sm};
    }

    :host(${i}:active) .control {
      background: padding-box linear-gradient(${Gi}, ${Gi}),
        border-box ${P$};
      color: ${nm};
    }

    :host(${s}) .control {
      background: ${qe};
    }

    .control:${pe} {
      box-shadow: 0 0 0 calc(${Vt} * 1px) ${Q$} inset !important;
    }
  `.withBehaviors(ke(D`
        .control {
          forced-color-adjust: none;
          background: ${m.Highlight};
          color: ${m.HighlightText};
        }

        :host(${i}:hover) .control,
        :host(${i}:active) .control {
          background: ${m.HighlightText};
          border-color: ${m.Highlight};
          color: ${m.Highlight};
        }

        :host(${s}) .control {
          background: transparent;
          border-color: ${m.GrayText};
          color: ${m.GrayText};
        }

        .control:${pe} {
          outline-color: ${m.CanvasText};
          box-shadow: 0 0 0 calc(${Vt} * 1px) ${m.HighlightText} inset !important;
        }

        :host([href]) .control {
          background: ${m.LinkText};
          color: ${m.HighlightText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: ${m.ButtonFace};
          border-color: ${m.LinkText};
          color: ${m.LinkText};
        }
      `)),w1=(e,t,i,s="[disabled]")=>D`
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

    :host(${i}) .control {
      color: ${om};
      text-decoration: underline 1px;
    }

    :host(${i}:hover) .control {
      color: ${rm};
      text-decoration: none;
    }

    :host(${i}:active) .control {
      color: ${am};
      text-decoration: none;
    }

    .control:${pe} {
      ${qr}
    }
  `.withBehaviors(ke(D`
        :host(${i}) .control {
          color: ${m.LinkText};
        }

        :host(${i}:hover) .control,
        :host(${i}:active) .control {
          color: ${m.CanvasText};
        }

        .control:${pe} {
          outline-color: ${m.CanvasText};
        }
      `)),gm=(e,t,i,s="[disabled]")=>D`
    :host {
      color: ${om};
    }

    .control {
      background: ${To};
    }

    :host(${i}:hover) .control {
      background: ${Fo};
      color: ${rm};
    }

    :host(${i}:active) .control {
      background: ${Do};
      color: ${am};
    }

    :host(${s}) .control {
      background: ${To};
    }
  `.withBehaviors(ke(D`
        :host {
          color: ${m.ButtonText};
        }

        .control {
          forced-color-adjust: none;
          background: transparent;
        }

        :host(${i}:hover) .control,
        :host(${i}:active) .control {
          background: transparent;
          border-color: ${m.ButtonText};
          color: ${m.ButtonText};
        }

        :host(${s}) .control {
          background: transparent;
          color: ${m.GrayText};
        }

        .control:${pe} {
          outline-color: ${m.CanvasText};
        }

        :host([href]) .control {
          color: ${m.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${m.LinkText};
          color: ${m.LinkText};
        }
      `)),mm=(e,t,i,s="[disabled]")=>D`
    .control {
      background: transparent !important;
      border-color: ${Ir};
    }

    :host(${i}:hover) .control {
      border-color: ${U$};
    }

    :host(${i}:active) .control {
      border-color: ${W$};
    }

    :host(${s}) .control {
      background: transparent !important;
      border-color: ${Ir};
    }
  `.withBehaviors(ke(D`
        .control {
          border-color: ${m.ButtonText};
          color: ${m.ButtonText};
        }

        :host(${i}:hover) .control,
        :host(${i}:active) .control {
          background: ${m.HighlightText};
          border-color: ${m.Highlight};
          color: ${m.Highlight};
        }

        :host(${s}) .control {
          border-color: ${m.GrayText};
          color: ${m.GrayText};
        }

        .control:${pe} {
          outline-color: ${m.CanvasText};
        }

        :host([href]) .control {
          border-color: ${m.LinkText};
          color: ${m.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${m.CanvasText};
          color: ${m.CanvasText};
        }
      `)),Sd=(e,t,i,s="[disabled]")=>D`
    .control {
      background: ${To};
    }

    :host(${i}:hover) .control {
      background: ${Fo};
    }

    :host(${i}:active) .control {
      background: ${Do};
    }

    :host(${s}) .control {
      background: ${To};
    }
  `.withBehaviors(ke(D`
        .control {
          forced-color-adjust: none;
          background: transparent;
          color: ${m.ButtonText};
        }

        :host(${i}:hover) .control,
        :host(${i}:active) .control {
          background: transparent;
          border-color: ${m.ButtonText};
          color: ${m.ButtonText};
        }

        :host(${s}) .control {
          background: transparent;
          color: ${m.GrayText};
        }
        
        .control:${pe} {
          outline-color: ${m.CanvasText};
        }

        :host([href]) .control {
          color: ${m.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${m.LinkText};
          color: ${m.LinkText};
        }
      `)),$1=Ye.create("input-placeholder-rest").withDefault(e=>{const t=gn.getValueFor(e);return Gr.getValueFor(e).evaluate(e,t.evaluate(e).rest)}),_1=Ye.create("input-placeholder-hover").withDefault(e=>{const t=gn.getValueFor(e);return Gr.getValueFor(e).evaluate(e,t.evaluate(e).hover)}),k1=Ye.create("input-filled-placeholder-rest").withDefault(e=>{const t=jn.getValueFor(e);return Gr.getValueFor(e).evaluate(e,t.evaluate(e).rest)}),S1=Ye.create("input-filled-placeholder-hover").withDefault(e=>{const t=jn.getValueFor(e);return Gr.getValueFor(e).evaluate(e,t.evaluate(e).hover)}),Yl=(e,t,i)=>D`
  :host {
    ${pt}
    color: ${ze};
    fill: currentcolor;
    user-select: none;
    position: relative;
  }

  ${i} {
    box-sizing: border-box;
    position: relative;
    color: inherit;
    border: calc(${te} * 1px) solid transparent;
    border-radius: calc(${Ve} * 1px);
    height: calc(${_e} * 1px);
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
    color: ${ze};
    cursor: pointer;
    ${pt}
    margin-bottom: 4px;
  }

  .label__hidden {
    display: none;
    visibility: hidden;
  }

  :host([disabled]) ${i},
  :host([readonly]) ${i},
  :host([disabled]) .label,
  :host([readonly]) .label,
  :host([disabled]) .control,
  :host([readonly]) .control {
    cursor: ${Ei};
  }

  :host([disabled]) {
    opacity: ${yi};
  }
`,Zr=(e,t,i)=>D`
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
      height: calc(${Vt} * 1px);
      bottom: 0;
      border-bottom: calc(${Vt} * 1px) solid ${qe};
      border-bottom-left-radius: calc(${Ve} * 1px);
      border-bottom-right-radius: calc(${Ve} * 1px);
      z-index: 2;
      transition: all 300ms cubic-bezier(0.1, 0.9, 0.2, 1);
    }
  }
`,Xr=(e,t,i,s=":not([disabled]):not(:focus-within)")=>D`
  ${i} {
    background: padding-box linear-gradient(${ma}, ${ma}),
      border-box ${xf};
  }

  :host(${s}:hover) ${i} {
    background: padding-box linear-gradient(${bf}, ${bf}),
      border-box ${q$};
  }

  :host(:not([disabled]):focus-within) ${i} {
    background: padding-box linear-gradient(${yf}, ${yf}),
      border-box ${xf};
  }
  
  :host([disabled]) ${i} {
    background: padding-box linear-gradient(${ma}, ${ma}),
      border-box ${Ir};
  }

  .control::placeholder {
    color: ${$1};
  }

  :host(${s}:hover) .control::placeholder {
    color: ${_1};
  }
`,No=(e,t,i,s=":not([disabled]):not(:focus-within)")=>D`
  ${i} {
    background: ${An};
  }

  :host(${s}:hover) ${i} {
    background: ${yd};
  }

  :host(:not([disabled]):focus-within) ${i} {
    background: ${H$};
  }

  :host([disabled]) ${i} {
    background: ${An};
  }

  .control::placeholder {
    color: ${k1};
  }

  :host(${s}:hover) .control::placeholder {
    color: ${S1};
  }
`,zo=(e,t,i,s=":not([disabled]):not(:focus-within)")=>D`
  :host {
    color: ${m.ButtonText};
  }

  ${i} {
    background: ${m.ButtonFace};
    border-color: ${m.ButtonText};
  }

  :host(${s}:hover) ${i},
  :host(:not([disabled]):focus-within) ${i} {
    border-color: ${m.Highlight};
  }

  :host([disabled]) ${i} {
    opacity: 1;
    background: ${m.ButtonFace};
    border-color: ${m.GrayText};
  }

  .control::placeholder,
  :host(${s}:hover) .control::placeholder {
    color: ${m.CanvasText};
  }

  :host(:not([disabled]):focus) ${i} {
    ${Pi}
    outline-color: ${m.Highlight};
  }

  :host([disabled]) {
    opacity: 1;
    color: ${m.GrayText};
  }

  :host([disabled]) ::placeholder,
  :host([disabled]) ::-webkit-input-placeholder {
    color: ${m.GrayText};
  }
`;function lt(e,t){return new _w("appearance",e,t)}const Kn="[href]",C1=(e,t)=>fm().withBehaviors(lt("neutral",kd(e,t,Kn)),lt("accent",pm(e,t,Kn)),lt("hypertext",w1(e,t,Kn)),lt("lightweight",gm(e,t,Kn)),lt("outline",mm(e,t,Kn)),lt("stealth",Sd(e,t,Kn)));class vm extends gi{appearanceChanged(t,i){t!==i&&(this.classList.add(i),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){var t,i;const s=this.defaultSlottedContent.filter(n=>n.nodeType===Node.ELEMENT_NODE);s.length===1&&s[0]instanceof SVGElement?(t=this.control)===null||t===void 0||t.classList.add("icon-only"):(i=this.control)===null||i===void 0||i.classList.remove("icon-only")}}Y([p],vm.prototype,"appearance",void 0);const I1=vm.compose({baseName:"anchor",baseClass:gi,template:Kp,styles:C1,shadowOptions:{delegatesFocus:!0}}),T1=(e,t)=>D`
  :host {
    contain: layout;
    display: block;
  }
`,F1=ce.compose({baseName:"anchored-region",template:C0,styles:T1}),D1=(e,t)=>D`
    ${Se("inline-block")} :host {
      box-sizing: border-box;
      ${dm};
    }

    .control {
      border-radius: calc(${Ve} * 1px);
      padding: calc(((${W} * 0.5) - ${te}) * 1px) calc((${W} - ${te}) * 1px);
      border: calc(${te} * 1px) solid transparent;
    }

    :host(.lightweight) .control {
      background: transparent;
      color: ${ze};
      font-weight: 600;
    }

    :host(.accent) .control {
      background: ${qe};
      color: ${Ln};
    }

    :host(.neutral) .control {
      background: ${An};
      color: ${ze};
    }

    :host([circular]) .control {
      border-radius: 100px;
      min-width: calc(${rd} - calc(${W} * 1px));
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;class bm extends Nr{constructor(){super(...arguments),this.appearance="lightweight"}appearanceChanged(t,i){t!==i&&de.queueUpdate(()=>{this.classList.add(i),this.classList.remove(t)})}}Y([p({mode:"fromView"})],bm.prototype,"appearance",void 0);const R1=bm.compose({baseName:"badge",baseClass:Nr,template:T0,styles:D1}),E1=(e,t)=>D`
  ${Se("inline-block")} :host {
    box-sizing: border-box;
    ${pt};
  }

  .list {
    display: flex;
  }
`,O1=eg.compose({baseName:"breadcrumb",template:D0,styles:E1}),P1=(e,t)=>D`
    ${Se("inline-flex")} :host {
      background: transparent;
      color: ${ze};
      fill: currentcolor;
      box-sizing: border-box;
      ${pt};
      min-width: calc(${_e} * 1px);
      border-radius: calc(${Ve} * 1px);
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
      color: ${j$};
    }

    .control:active {
      color: ${Y$};
    }

    .control:${pe} {
      ${qr}
    }

    :host(:not([href])),
    :host([aria-current]) .control {
      color: ${ze};
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
  `.withBehaviors(ke(D`
        :host(:not([href])),
        .start,
        .end,
        .separator {
          background: ${m.ButtonFace};
          color: ${m.ButtonText};
          fill: currentcolor;
        }
        .separator {
          fill: ${m.ButtonText};
        }
        :host([href]) {
          forced-color-adjust: none;
          background: ${m.ButtonFace};
          color: ${m.LinkText};
        }
        :host([href]) .control:hover {
          background: ${m.LinkText};
          color: ${m.HighlightText};
          fill: currentcolor;
        }
        .control:${pe} {
          outline-color: ${m.LinkText};
        }
      `)),L1=_r.compose({baseName:"breadcrumb-item",template:F0,styles:P1,shadowOptions:{delegatesFocus:!0},separator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>
    </svg>
  `}),yn=":not([disabled])",Ys="[disabled]",A1=(e,t)=>D`
    :host(${yn}) .control {
      cursor: pointer;
    }

    :host(${Ys}) .control {
      cursor: ${Ei};
    }

    @media (forced-colors: none) {
      :host(${Ys}) .control {
        opacity: ${yi};
      }
    }

    ${fm(e,t,yn,Ys)}
  `.withBehaviors(lt("neutral",kd(e,t,yn,Ys)),lt("accent",pm(e,t,yn,Ys)),lt("lightweight",gm(e,t,yn,Ys)),lt("outline",mm(e,t,yn,Ys)),lt("stealth",Sd(e,t,yn,Ys)));class ym extends mi{appearanceChanged(t,i){t!==i&&(this.classList.add(i),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const t=this.defaultSlottedContent.filter(i=>i.nodeType===Node.ELEMENT_NODE);t.length===1&&t[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}Y([p],ym.prototype,"appearance",void 0);const M1=ym.compose({baseName:"button",baseClass:mi,template:R0,styles:A1,shadowOptions:{delegatesFocus:!0}}),V1=D`
.day.disabled::before {
  transform: translate(-50%, 0) rotate(45deg);
}
`,H1=D`
.day.disabled::before {
  transform: translate(50%, 0) rotate(-45deg);
}
`,N1=(e,t)=>D`
${Se("inline-block")} :host {
  --calendar-cell-size: calc((${Il} + 2 + ${pn}) * ${W} * 1px);
  --calendar-gap: 2px;
  ${pt}
  color: ${ze};
}

.title {
  padding: calc(${W} * 2px);
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
  border: calc(${te} * 1px) solid transparent;
  border-radius: calc(${Ve} * 1px);
}

.interact .day {
  cursor: pointer;
}

.date {
  height: 100%;
}

.inactive .date,
.inactive.disabled::before {
  color: ${Ro};
}

.disabled::before {
  content: '';
  display: inline-block;
  width: calc(var(--calendar-cell-size) * .8);
  height: calc(${te} * 1px);
  background: currentColor;
  position: absolute;
  margin-top: calc(var(--calendar-cell-size) / 2);
  transform-origin: center;
  z-index: 1;
}

.selected {
  color: ${qe};
  border: 1px solid ${qe};
  background: ${xe};
}

.selected + .selected {
  border-start-start-radius: 0;
  border-end-start-radius: 0;
  border-inline-start-width: 0;
  padding-inline-start: calc(var(--calendar-gap) + (${te} + ${Ve}) * 1px);
  margin-inline-start: calc((${Ve} * -1px) - var(--calendar-gap));
}

.today.disabled::before {
  color: ${Ln};
}

.today .date {
  color: ${Ln};
  background: ${qe};
  border-radius: 50%;
  position: relative;
}
`.withBehaviors(ke(D`
          .day.selected {
              color: ${m.Highlight};
          }

          .today .date {
              background: ${m.Highlight};
              color: ${m.HighlightText};
          }
      `),new Ho(V1,H1));class xm extends Ri{constructor(){super(...arguments),this.readonly=!0}}Y([p({converter:Hr})],xm.prototype,"readonly",void 0);const z1=xm.compose({baseName:"calendar",template:Z0,styles:N1,title:j0}),B1=(e,t)=>D`
    ${Se("block")} :host {
      display: block;
      contain: content;
      height: var(--card-height, 100%);
      width: var(--card-width, 100%);
      box-sizing: border-box;
      background: ${xe};
      color: ${ze};
      border: calc(${te} * 1px) solid ${go};
      border-radius: calc(${xs} * 1px);
      box-shadow: ${g1};
    }

    :host {
      content-visibility: auto;
    }
  `.withBehaviors(ke(D`
        :host {
          background: ${m.Canvas};
          color: ${m.CanvasText};
        }
      `));class Cd extends tg{cardFillColorChanged(t,i){if(i){const s=Fn(i);s!==null&&(this.neutralPaletteSource=i,xe.setValueFor(this,Ti.create(s.r,s.g,s.b)))}}neutralPaletteSourceChanged(t,i){if(i){const s=Fn(i),n=Ti.create(s.r,s.g,s.b);Ke.setValueFor(this,Cr.create(n))}}handleChange(t,i){this.cardFillColor||xe.setValueFor(this,s=>Bn.getValueFor(s).evaluate(s,xe.getValueFor(t)).rest)}connectedCallback(){super.connectedCallback();const t=Ya(this);if(t){const i=ue.getNotifier(t);i.subscribe(this,"fillColor"),i.subscribe(this,"neutralPalette"),this.handleChange(t,"fillColor")}}}Y([p({attribute:"card-fill-color",mode:"fromView"})],Cd.prototype,"cardFillColor",void 0);Y([p({attribute:"neutral-palette-source",mode:"fromView"})],Cd.prototype,"neutralPaletteSource",void 0);const j1=Cd.compose({baseName:"card",baseClass:tg,template:X0,styles:B1}),Y1=(e,t)=>D`
    ${Se("inline-flex")} :host {
      align-items: center;
      outline: none;
      ${""} user-select: none;
    }

    .control {
      position: relative;
      width: calc((${_e} / 2 + ${W}) * 1px);
      height: calc((${_e} / 2 + ${W}) * 1px);
      box-sizing: border-box;
      border-radius: calc(${Ve} * 1px);
      border: calc(${te} * 1px) solid ${Vo};
      background: ${gd};
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      ${pt}
      color: ${ze};
      ${""} padding-inline-start: calc(${W} * 2px + 2px);
      margin-inline-end: calc(${W} * 2px + 2px);
      cursor: pointer;
    }

    slot[name='checked-indicator'],
    slot[name='indeterminate-indicator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      fill: ${ze};
      opacity: 0;
      pointer-events: none;
    }

    slot[name='indeterminate-indicator'] {
      position: absolute;
      top: 0;
    }

    :host(.checked) slot[name='checked-indicator'],
    :host(.checked) slot[name='indeterminate-indicator'] {
      fill: ${Ln};
    }

    :host(:not(.disabled):hover) .control {
      background: ${md};
      border-color: ${$d};
    }

    :host(:not(.disabled):active) .control {
      background: ${vd};
      border-color: ${_d};
    }

    :host(:${pe}) .control {
      background: ${bd};
      ${qr}
    }

    :host(.checked) .control {
      background: ${qe};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${Wi};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${Gi};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${Ei};
    }

    :host(.checked:not(.indeterminate)) slot[name='checked-indicator'],
    :host(.indeterminate) slot[name='indeterminate-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${yi};
    }
  `.withBehaviors(ke(D`
        .control {
          border-color: ${m.FieldText};
          background: ${m.Field};
        }
        :host(:not(.disabled):hover) .control,
        :host(:not(.disabled):active) .control {
          border-color: ${m.Highlight};
          background: ${m.Field};
        }
        slot[name='checked-indicator'],
        slot[name='indeterminate-indicator'] {
          fill: ${m.FieldText};
        }
        :host(:${pe}) .control {
          forced-color-adjust: none;
          outline-color: ${m.FieldText};
          background: ${m.Field};
          border-color: ${m.Highlight};
        }
        :host(.checked) .control {
          background: ${m.Highlight};
          border-color: ${m.Highlight};
        }
        :host(.checked:not(.disabled):hover) .control,
        :host(.checked:not(.disabled):active) .control {
          background: ${m.HighlightText};
          border-color: ${m.Highlight};
        }
        :host(.checked) slot[name='checked-indicator'],
        :host(.checked) slot[name='indeterminate-indicator'] {
          fill: ${m.HighlightText};
        }
        :host(.checked:hover ) .control slot[name='checked-indicator'],
        :host(.checked:hover ) .control slot[name='indeterminate-indicator'] {
          fill: ${m.Highlight};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .control {
          border-color: ${m.GrayText};
          background: ${m.Field};
        }
        :host(.disabled) slot[name='checked-indicator'],
        :host(.checked.disabled:hover) .control slot[name='checked-indicator'],
        :host(.disabled) slot[name='indeterminate-indicator'],
        :host(.checked.disabled:hover) .control slot[name='indeterminate-indicator'] {
          fill: ${m.GrayText};
        }
      `)),U1=vl.compose({baseName:"checkbox",template:Q0,styles:Y1,checkedIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>
    </svg>
  `,indeterminateIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 8z"/>
    </svg>
  `}),wf=".control",va=":not([disabled]):not([open])",$f="[disabled]",wm=(e,t)=>D`
    ${Se("inline-flex")}
    
    :host {
      border-radius: calc(${Ve} * 1px);
      box-sizing: border-box;
      color: ${ze};
      fill: currentcolor;
      font-family: ${Oi};
      position: relative;
      user-select: none;
      min-width: 250px;
      vertical-align: top;
    }

    .listbox {
      box-shadow: ${hm};
      background: ${xe};
      border-radius: calc(${xs} * 1px);
      box-sizing: border-box;
      display: inline-flex;
      flex-direction: column;
      left: 0;
      max-height: calc(var(--max-height) - (${_e} * 1px));
      padding: calc((${W} - ${te} ) * 1px);
      overflow-y: auto;
      position: absolute;
      width: 100%;
      z-index: 1;
      margin: 1px 0;
      border: calc(${te} * 1px) solid transparent;
    }

    .listbox[hidden] {
      display: none;
    }

    .control {
      border: calc(${te} * 1px) solid transparent;
      border-radius: calc(${Ve} * 1px);
      height: calc(${_e} * 1px);
      align-items: center;
      box-sizing: border-box;
      cursor: pointer;
      display: flex;
      ${pt}
      min-height: 100%;
      padding: 0 calc(${W} * 2.25px);
      width: 100%;
    }

    :host(:${pe}) {
      ${Pi}
    }

    :host([disabled]) .control {
      cursor: ${Ei};
      opacity: ${yi};
      user-select: none;
    }

    :host([open][position='above']) .listbox {
      bottom: calc((${_e} + ${W} * 2) * 1px);
    }

    :host([open][position='below']) .listbox {
      top: calc((${_e} + ${W} * 2) * 1px);
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
  `,W1=(e,t)=>D`
    :host([open]) .listbox {
      background: ${m.ButtonFace};
      border-color: ${m.CanvasText};
    }
  `,G1=(e,t)=>wm().withBehaviors(lt("outline",kd(e,t,va,$f)),lt("filled",No(e,t,wf,va).withBehaviors(ke(zo(e,t,wf,va)))),lt("stealth",Sd(e,t,va,$f)),ke(W1())),Nc=".control",zc=":not([disabled]):not([open])",q1=(e,t)=>D`
    ${wm()}

    ${Zr()}

    :host(:empty) .listbox {
      display: none;
    }

    :host([disabled]) *,
    :host([disabled]) {
      cursor: ${Ei};
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
      ${pt}
      height: calc(100% - ${te} * 1px));
      margin: auto 0;
      width: 100%;
      outline: none;
    }
  `.withBehaviors(lt("outline",Xr(e,t,Nc,zc)),lt("filled",No(e,t,Nc,zc)),ke(zo(e,t,Nc,zc)));class $m extends Os{appearanceChanged(t,i){t!==i&&(this.classList.add(i),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&xe.setValueFor(this.listbox,Wr)}}Y([p({mode:"fromView"})],$m.prototype,"appearance",void 0);const Z1=$m.compose({baseName:"combobox",baseClass:Os,shadowOptions:{delegatesFocus:!0},template:ix,styles:q1,indicator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `}),X1=(e,t)=>D`
  :host {
    display: flex;
    position: relative;
    flex-direction: column;
  }
`,Q1=(e,t)=>D`
    :host {
      display: grid;
      padding: 1px 0;
      box-sizing: border-box;
      width: 100%;
      border-bottom: calc(${te} * 1px) solid ${Za};
    }

    :host(.header) {
    }

    :host(.sticky-header) {
      background: ${xe};
      position: sticky;
      top: 0;
    }
  `.withBehaviors(ke(D`
        :host {
        }
      `)),J1=(e,t)=>D`
    :host {
      padding: calc((${W} + ${Vt} - ${te}) * 1px) calc(((${W} * 3) + ${Vt} - ${te}) * 1px);
      color: ${ze};
      box-sizing: border-box;
      ${pt}
      border: transparent calc(${te} * 1px) solid;
      overflow: hidden;
      white-space: nowrap;
      border-radius: calc(${Ve} * 1px);
    }

    :host(.column-header) {
      font-weight: 600;
    }

    :host(:${pe}) {
      ${Pi}
    }
  `.withBehaviors(ke(D`
        :host {
          forced-color-adjust: none;
          background: ${m.Field};
          color: ${m.FieldText};
        }

        :host(:${pe}) {
          outline-color: ${m.FieldText};
        }
      `)),K1=Es.compose({baseName:"data-grid-cell",template:B0,styles:J1}),e_=Pt.compose({baseName:"data-grid-row",template:z0,styles:Q1}),t_=It.compose({baseName:"data-grid",template:A0,styles:X1}),Id={toView(e){return e==null?null:e==null?void 0:e.toColorString()},fromView(e){if(e==null)return null;const t=Fn(e);return t?Ti.create(t.r,t.g,t.b):null}},_f=D`
  :host {
    background-color: ${xe};
    color: ${ze};
  }
`.withBehaviors(ke(D`
      :host {
        background-color: ${m.Canvas};
        box-shadow: 0 0 0 1px ${m.CanvasText};
        color: ${m.CanvasText};
      }
    `));function J(e){return(t,i)=>{t[i+"Changed"]=function(s,n){n!=null?e.setValueFor(this,n):e.deleteValueFor(this)}}}class Q extends fe{constructor(){super(),this.noPaint=!1;const t={handleChange:this.noPaintChanged.bind(this)};ue.getNotifier(this).subscribe(t,"fillColor"),ue.getNotifier(this).subscribe(t,"baseLayerLuminance")}connectedCallback(){super.connectedCallback(),this.noPaintChanged()}noPaintChanged(){!this.noPaint&&(this.fillColor!==void 0||this.baseLayerLuminance)?this.$fastController.addStyles(_f):this.$fastController.removeStyles(_f)}}Y([p({attribute:"no-paint",mode:"boolean"})],Q.prototype,"noPaint",void 0);Y([p({attribute:"fill-color",converter:Id,mode:"fromView"}),J(xe)],Q.prototype,"fillColor",void 0);Y([p({attribute:"accent-base-color",converter:Id,mode:"fromView"}),J(im)],Q.prototype,"accentBaseColor",void 0);Y([p({attribute:"neutral-base-color",converter:Id,mode:"fromView"}),J(tm)],Q.prototype,"neutralBaseColor",void 0);Y([p({converter:q}),J(pn)],Q.prototype,"density",void 0);Y([p({attribute:"design-unit",converter:q}),J(W)],Q.prototype,"designUnit",void 0);Y([p({attribute:"direction"}),J(Pa)],Q.prototype,"direction",void 0);Y([p({attribute:"base-height-multiplier",converter:q}),J(Il)],Q.prototype,"baseHeightMultiplier",void 0);Y([p({attribute:"base-horizontal-spacing-multiplier",converter:q}),J(i$)],Q.prototype,"baseHorizontalSpacingMultiplier",void 0);Y([p({attribute:"control-corner-radius",converter:q}),J(Ve)],Q.prototype,"controlCornerRadius",void 0);Y([p({attribute:"layer-corner-radius",converter:q}),J(xs)],Q.prototype,"layerCornerRadius",void 0);Y([p({attribute:"stroke-width",converter:q}),J(te)],Q.prototype,"strokeWidth",void 0);Y([p({attribute:"focus-stroke-width",converter:q}),J(Vt)],Q.prototype,"focusStrokeWidth",void 0);Y([p({attribute:"disabled-opacity",converter:q}),J(yi)],Q.prototype,"disabledOpacity",void 0);Y([p({attribute:"type-ramp-minus-2-font-size"}),J(ad)],Q.prototype,"typeRampMinus2FontSize",void 0);Y([p({attribute:"type-ramp-minus-2-line-height"}),J(xg)],Q.prototype,"typeRampMinus2LineHeight",void 0);Y([p({attribute:"type-ramp-minus-1-font-size"}),J(od)],Q.prototype,"typeRampMinus1FontSize",void 0);Y([p({attribute:"type-ramp-minus-1-line-height"}),J(rd)],Q.prototype,"typeRampMinus1LineHeight",void 0);Y([p({attribute:"type-ramp-base-font-size"}),J(nd)],Q.prototype,"typeRampBaseFontSize",void 0);Y([p({attribute:"type-ramp-base-line-height"}),J(yg)],Q.prototype,"typeRampBaseLineHeight",void 0);Y([p({attribute:"type-ramp-plus-1-font-size"}),J(ld)],Q.prototype,"typeRampPlus1FontSize",void 0);Y([p({attribute:"type-ramp-plus-1-line-height"}),J(wg)],Q.prototype,"typeRampPlus1LineHeight",void 0);Y([p({attribute:"type-ramp-plus-2-font-size"}),J(cd)],Q.prototype,"typeRampPlus2FontSize",void 0);Y([p({attribute:"type-ramp-plus-2-line-height"}),J($g)],Q.prototype,"typeRampPlus2LineHeight",void 0);Y([p({attribute:"type-ramp-plus-3-font-size"}),J(ud)],Q.prototype,"typeRampPlus3FontSize",void 0);Y([p({attribute:"type-ramp-plus-3-line-height"}),J(_g)],Q.prototype,"typeRampPlus3LineHeight",void 0);Y([p({attribute:"type-ramp-plus-4-font-size"}),J(dd)],Q.prototype,"typeRampPlus4FontSize",void 0);Y([p({attribute:"type-ramp-plus-4-line-height"}),J(kg)],Q.prototype,"typeRampPlus4LineHeight",void 0);Y([p({attribute:"type-ramp-plus-5-font-size"}),J(hd)],Q.prototype,"typeRampPlus5FontSize",void 0);Y([p({attribute:"type-ramp-plus-5-line-height"}),J(Sg)],Q.prototype,"typeRampPlus5LineHeight",void 0);Y([p({attribute:"type-ramp-plus-6-font-size"}),J(fd)],Q.prototype,"typeRampPlus6FontSize",void 0);Y([p({attribute:"type-ramp-plus-6-line-height"}),J(Cg)],Q.prototype,"typeRampPlus6LineHeight",void 0);Y([p({attribute:"accent-fill-rest-delta",converter:q}),J(hu)],Q.prototype,"accentFillRestDelta",void 0);Y([p({attribute:"accent-fill-hover-delta",converter:q}),J(fu)],Q.prototype,"accentFillHoverDelta",void 0);Y([p({attribute:"accent-fill-active-delta",converter:q}),J(pu)],Q.prototype,"accentFillActiveDelta",void 0);Y([p({attribute:"accent-fill-focus-delta",converter:q}),J(gu)],Q.prototype,"accentFillFocusDelta",void 0);Y([p({attribute:"accent-foreground-rest-delta",converter:q}),J(Ig)],Q.prototype,"accentForegroundRestDelta",void 0);Y([p({attribute:"accent-foreground-hover-delta",converter:q}),J(Tg)],Q.prototype,"accentForegroundHoverDelta",void 0);Y([p({attribute:"accent-foreground-active-delta",converter:q}),J(Fg)],Q.prototype,"accentForegroundActiveDelta",void 0);Y([p({attribute:"accent-foreground-focus-delta",converter:q}),J(Dg)],Q.prototype,"accentForegroundFocusDelta",void 0);Y([p({attribute:"neutral-fill-rest-delta",converter:q}),J(Rg)],Q.prototype,"neutralFillRestDelta",void 0);Y([p({attribute:"neutral-fill-hover-delta",converter:q}),J(Eg)],Q.prototype,"neutralFillHoverDelta",void 0);Y([p({attribute:"neutral-fill-active-delta",converter:q}),J(Og)],Q.prototype,"neutralFillActiveDelta",void 0);Y([p({attribute:"neutral-fill-focus-delta",converter:q}),J(Pg)],Q.prototype,"neutralFillFocusDelta",void 0);Y([p({attribute:"neutral-fill-input-rest-delta",converter:q}),J(Lg)],Q.prototype,"neutralFillInputRestDelta",void 0);Y([p({attribute:"neutral-fill-input-hover-delta",converter:q}),J(Ag)],Q.prototype,"neutralFillInputHoverDelta",void 0);Y([p({attribute:"neutral-fill-input-active-delta",converter:q}),J(Mg)],Q.prototype,"neutralFillInputActiveDelta",void 0);Y([p({attribute:"neutral-fill-input-focus-delta",converter:q}),J(Vg)],Q.prototype,"neutralFillInputFocusDelta",void 0);Y([p({attribute:"neutral-fill-layer-rest-delta",converter:q}),J(an)],Q.prototype,"neutralFillLayerRestDelta",void 0);Y([p({attribute:"neutral-fill-stealth-rest-delta",converter:q}),J(Hg)],Q.prototype,"neutralFillStealthRestDelta",void 0);Y([p({attribute:"neutral-fill-stealth-hover-delta",converter:q}),J(Ng)],Q.prototype,"neutralFillStealthHoverDelta",void 0);Y([p({attribute:"neutral-fill-stealth-active-delta",converter:q}),J(zg)],Q.prototype,"neutralFillStealthActiveDelta",void 0);Y([p({attribute:"neutral-fill-stealth-focus-delta",converter:q}),J(Bg)],Q.prototype,"neutralFillStealthFocusDelta",void 0);Y([p({attribute:"neutral-fill-strong-hover-delta",converter:q}),J(jg)],Q.prototype,"neutralFillStrongHoverDelta",void 0);Y([p({attribute:"neutral-fill-strong-active-delta",converter:q}),J(Yg)],Q.prototype,"neutralFillStrongActiveDelta",void 0);Y([p({attribute:"neutral-fill-strong-focus-delta",converter:q}),J(Ug)],Q.prototype,"neutralFillStrongFocusDelta",void 0);Y([p({attribute:"base-layer-luminance",converter:q}),J(zn)],Q.prototype,"baseLayerLuminance",void 0);Y([p({attribute:"neutral-stroke-divider-rest-delta",converter:q}),J(em)],Q.prototype,"neutralStrokeDividerRestDelta",void 0);Y([p({attribute:"neutral-stroke-rest-delta",converter:q}),J(Wg)],Q.prototype,"neutralStrokeRestDelta",void 0);Y([p({attribute:"neutral-stroke-hover-delta",converter:q}),J(Gg)],Q.prototype,"neutralStrokeHoverDelta",void 0);Y([p({attribute:"neutral-stroke-active-delta",converter:q}),J(qg)],Q.prototype,"neutralStrokeActiveDelta",void 0);Y([p({attribute:"neutral-stroke-focus-delta",converter:q}),J(Zg)],Q.prototype,"neutralStrokeFocusDelta",void 0);const i_=Q.compose({baseName:"design-system-provider",template:A` <slot></slot> `,styles:D`
    ${Se("block")}
  `}),s_=(e,t)=>D`
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
    box-shadow: ${x1};
    margin-top: auto;
    margin-bottom: auto;
    border-radius: calc(${xs} * 1px);
    width: var(--dialog-width);
    height: var(--dialog-height);
    background: ${xe};
    z-index: 1;
    border: calc(${te} * 1px) solid transparent;
  }
`,n_=Ii.compose({baseName:"dialog",template:mx,styles:s_}),o_=(e,t)=>D`
    ${Se("block")} :host {
      box-sizing: content-box;
      height: 0;
      border: none;
      border-top: calc(${te} * 1px) solid ${Za};
    }

    :host([orientation="vertical"]) {
      border: none;
      height: 100%;
      margin: 0 calc(${W} * 1px);
      border-left: calc(${te} * 1px) solid ${Za};
  }
  `,r_=yl.compose({baseName:"divider",template:Fx,styles:o_}),a_=(e,t)=>D`
    ${Se("inline-flex")} :host {
      height: calc((${_e} + ${W}) * 1px);
      justify-content: center;
      align-items: center;
      fill: currentcolor;
      color: ${lm};
      background: padding-box linear-gradient(${Si}, ${Si}),
        border-box ${xd};
      box-sizing: border-box;
      border: calc(${te} * 1px) solid transparent;
      border-radius: calc(${Ve} * 1px);
      padding: 0;
    }

    :host(.disabled) {
      opacity: ${yi};
      cursor: ${Ei};
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
      color: ${z$};
    }

    :host(:not(.disabled):active) {
      color: ${B$};
    }

    :host(:${pe}) {
      ${Pi}
    }

    :host::-moz-focus-inner {
      border: 0;
    }
  `.withBehaviors(ke(D`
        :host {
          background: ${m.ButtonFace};
          border-color: ${m.ButtonText};
        }
        :host .next,
        :host .previous {
          color: ${m.ButtonText};
          fill: currentcolor;
        }
        :host(:not(.disabled):hover) {
          background: ${m.Highlight};
        }
        :host(:not(.disabled):hover) .next,
        :host(:not(.disabled):hover) .previous {
          color: ${m.HighlightText};
          fill: currentcolor;
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled),
        :host(.disabled) .next,
        :host(.disabled) .previous {
          border-color: ${m.GrayText};
          color: ${m.GrayText};
          fill: currentcolor;
        }
        :host(:${pe}) {
          forced-color-adjust: none;
          outline-color: ${m.Highlight};
        }
      `)),l_=xl.compose({baseName:"flipper",template:Rx,styles:a_,next:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.57 11.84A1 1 0 016 11.02V4.98a1 1 0 011.57-.82l3.79 2.62c.85.59.85 1.85 0 2.44l-3.79 2.62z"/>
    </svg>
  `,previous:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.43 11.84a1 1 0 001.57-.82V4.98a1 1 0 00-1.57-.82L5.64 6.78c-.85.59-.85 1.85 0 2.44l3.79 2.62z"/>
    </svg>
  `}),c_=D`
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
`,u_=D`
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
`,d_=D`
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
`.withBehaviors(new Ho(c_,u_)),h_=(e,t)=>D`
  ${Se("block")} :host {
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
`;class f_ extends Ps{connectedCallback(){super.connectedCallback(),this.view!=="mobile"&&this.$fastController.addStyles(d_)}}const p_=f_.compose({baseName:"horizontal-scroll",baseClass:Ps,template:Zx,styles:h_,nextFlipper:A`
    <fluent-flipper @click="${e=>e.scrollToNext()}" aria-hidden="${e=>e.flippersHiddenFromAT}"></fluent-flipper>
  `,previousFlipper:A`
    <fluent-flipper
      @click="${e=>e.scrollToPrevious()}"
      direction="previous"
      aria-hidden="${e=>e.flippersHiddenFromAT}"
    ></fluent-flipper>
  `}),g_=(e,t)=>D`
    ${Se("inline-flex")} :host {
      border: calc(${te} * 1px) solid ${Ir};
      border-radius: calc(${Ve} * 1px);
      box-sizing: border-box;
      flex-direction: column;
      padding: calc(${W} * 1px) 0;
    }

    ::slotted(${e.tagFor(ds)}) {
      margin: 0 calc(${W} * 1px);
    }

    :host(:focus-within:not([disabled])) {
      ${Pi}
    }
  `;class m_ extends ri{}const v_=m_.compose({baseName:"listbox",template:Ox,styles:g_}),b_=(e,t)=>D`
    ${Se("inline-flex")} :host {
      position: relative;
      ${pt}
      background: ${To};
      border-radius: calc(${Ve} * 1px);
      border: calc(${te} * 1px) solid transparent;
      box-sizing: border-box;
      color: ${ze};
      cursor: pointer;
      fill: currentcolor;
      height: calc(${_e} * 1px);
      overflow: hidden;
      align-items: center;
      padding: 0 calc(((${W} * 3) - ${te} - 1) * 1px);
      user-select: none;
      white-space: nowrap;
    }

    :host::before {
      content: '';
      display: block;
      position: absolute;
      left: calc((${Vt} - ${te}) * 1px);
      top: calc((${_e} / 4) - ${Vt} * 1px);
      width: 3px;
      height: calc((${_e} / 2) * 1px);
      background: transparent;
      border-radius: calc(${Ve} * 1px);
    }

    :host(:not([disabled]):hover) {
      background: ${Fo};
    }

    :host(:not([disabled]):active) {
      background: ${Do};
    }

    :host(:not([disabled]):active)::before {
      background: ${qe};
      height: calc(((${_e} / 2) - 6) * 1px);
    }

    :host([aria-selected='true'])::before {
      background: ${qe};
    }

    :host(:${pe}) {
      ${Pi}
      background: ${N$};
    }

    :host([aria-selected='true']) {
      background: ${An};
    }

    :host(:not([disabled])[aria-selected='true']:hover) {
      background: ${yd};
    }

    :host(:not([disabled])[aria-selected='true']:active) {
      background: ${V$};
    }

    :host(:not([disabled]):not([aria-selected='true']):hover) {
      background: ${Fo};
    }

    :host(:not([disabled]):not([aria-selected='true']):active) {
      background: ${Do};
    }

    :host([disabled]) {
      cursor: ${Ei};
      opacity: ${yi};
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
  `.withBehaviors(new Ho(null,D`
      :host::before {
        right: calc((${Vt} - ${te}) * 1px);
      }
    `),ke(D`
        :host {
          background: ${m.ButtonFace};
          border-color: ${m.ButtonFace};
          color: ${m.ButtonText};
        }
        :host(:not([disabled]):not([aria-selected="true"]):hover),
        :host(:not([disabled])[aria-selected="true"]:hover),
        :host([aria-selected="true"]) {
          forced-color-adjust: none;
          background: ${m.Highlight};
          color: ${m.HighlightText};
        }
        :host(:not([disabled]):active)::before,
        :host([aria-selected='true'])::before {
          background: ${m.HighlightText};
        }
        :host([disabled]),
        :host([disabled]:not([aria-selected='true']):hover) {
          background: ${m.Canvas};
          color: ${m.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host(:${pe}) {
          outline-color: ${m.CanvasText};
        }
      `)),y_=ds.compose({baseName:"option",template:Ex,styles:b_}),x_=(e,t)=>D`
    ${Se("block")} :host {
      background: ${Wr};
      border: calc(${te} * 1px) solid transparent;
      border-radius: calc(${xs} * 1px);
      box-shadow: ${hm};
      padding: calc((${W} - ${te}) * 1px) 0;
      max-width: 368px;
      min-width: 64px;
    }

    :host([slot='submenu']) {
      width: max-content;
      margin: 0 calc(${W} * 2px);
    }

    ::slotted(${e.tagFor(vi)}) {
      margin: 0 calc(${W} * 1px);
    }

    ::slotted(${e.tagFor(yl)}) {
      margin: calc(${W} * 1px) 0;
    }

    ::slotted(hr) {
      box-sizing: content-box;
      height: 0;
      margin: calc(${W} * 1px) 0;
      border: none;
      border-top: calc(${te} * 1px) solid ${Za};
    }
  `.withBehaviors(ke(D`
        :host([slot='submenu']) {
          background: ${m.Canvas};
          border-color: ${m.CanvasText};
        }
      `));class w_ extends wl{connectedCallback(){super.connectedCallback(),xe.setValueFor(this,Wr)}}const $_=w_.compose({baseName:"menu",baseClass:wl,template:Ax,styles:x_}),__=(e,t)=>D`
    ${Se("grid")} :host {
      contain: layout;
      overflow: visible;
      ${pt}
      box-sizing: border-box;
      height: calc(${_e} * 1px);
      grid-template-columns: minmax(32px, auto) 1fr minmax(32px, auto);
      grid-template-rows: auto;
      justify-items: center;
      align-items: center;
      padding: 0;
      white-space: nowrap;
      color: ${ze};
      fill: currentcolor;
      cursor: pointer;
      border-radius: calc(${Ve} * 1px);
      border: calc(${te} * 1px) solid transparent;
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
      ${Pi}
    }

    :host(:not([disabled]):hover) {
      background: ${Fo};
    }

    :host(:not([disabled]):active),
    :host(.expanded) {
      background: ${Do};
      color: ${ze};
      z-index: 2;
    }

    :host([disabled]) {
      cursor: ${Ei};
      opacity: ${yi};
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
      color: ${Ro};
    }

    :host([aria-checked='true']) .checkbox-indicator,
    :host([aria-checked='true']) slot[name='checkbox-indicator'],
    :host([aria-checked='true']) .radio-indicator,
    :host([aria-checked='true']) slot[name='radio-indicator'] {
      display: flex;
    }
  `.withBehaviors(ke(D`
        :host,
        ::slotted([slot='end']:not(svg)) {
          forced-color-adjust: none;
          color: ${m.ButtonText};
          fill: currentcolor;
        }
        :host(:not([disabled]):hover) {
          background: ${m.Highlight};
          color: ${m.HighlightText};
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
          color: ${m.HighlightText};
          fill: currentcolor;
        }
        :host(.expanded) {
          background: ${m.Highlight};
          color: ${m.HighlightText};
        }
        :host(:${pe}) {
          background: ${m.Highlight};
          outline-color: ${m.ButtonText};
          color: ${m.HighlightText};
          fill: currentcolor;
        }
        :host([disabled]),
        :host([disabled]:hover),
        :host([disabled]:hover) .start,
        :host([disabled]:hover) .end,
        :host([disabled]:hover)::slotted(svg),
        :host([disabled]:${pe}) {
          background: ${m.ButtonFace};
          color: ${m.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host([disabled]:${pe}) {
          outline-color: ${m.GrayText};
        }
        :host .expanded-toggle,
        :host .checkbox,
        :host .radio {
          border-color: ${m.ButtonText};
          background: ${m.HighlightText};
        }
        :host([checked]) .checkbox,
        :host([checked]) .radio {
          background: ${m.HighlightText};
          border-color: ${m.HighlightText};
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
          border-color: ${m.HighlightText};
        }
        :host([aria-checked='true']) {
          background: ${m.Highlight};
          color: ${m.HighlightText};
        }
        :host([aria-checked='true']) .checkbox-indicator,
        :host([aria-checked='true']) ::slotted([slot='checkbox-indicator']),
        :host([aria-checked='true']) ::slotted([slot='radio-indicator']) {
          fill: ${m.Highlight};
        }
        :host([aria-checked='true']) .radio-indicator {
          background: ${m.Highlight};
        }
      `),new Ho(D`
        .expand-collapse-glyph-container {
          transform: rotate(0deg);
        }
      `,D`
        .expand-collapse-glyph-container {
          transform: rotate(180deg);
        }
      `)),k_=vi.compose({baseName:"menu-item",template:Lx,styles:__,checkboxIndicator:`
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
  `}),ba=".root",S_=(e,t)=>D`
    ${Se("inline-block")}

    ${Yl(e,t,ba)}

    ${Zr()}

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
      padding: 0 calc(${W} * 2px + 1px);
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
  `.withBehaviors(lt("outline",Xr(e,t,ba)),lt("filled",No(e,t,ba)),ke(zo(e,t,ba)));class _m extends Kt{connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}Y([p],_m.prototype,"appearance",void 0);const C_=_m.compose({baseName:"number-field",baseClass:Kt,styles:S_,template:Mx,shadowOptions:{delegatesFocus:!0},stepDownGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `,stepUpGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 7.35c.2.2.5.2.7 0L6 4.21l3.15 3.14a.5.5 0 10.7-.7l-3.5-3.5a.5.5 0 00-.7 0l-3.5 3.5a.5.5 0 000 .7z"/>
    </svg>
`}),I_=(e,t)=>D`
    ${Se("flex")} :host {
      align-items: center;
      height: calc((${te} * 3) * 1px);
    }

    .progress {
      background-color: ${Vo};
      border-radius: calc(${W} * 1px);
      width: 100%;
      height: calc(${te} * 1px);
      display: flex;
      align-items: center;
      position: relative;
    }

    .determinate {
      background-color: ${qe};
      border-radius: calc(${W} * 1px);
      height: calc((${te} * 3) * 1px);
      transition: all 0.2s ease-in-out;
      display: flex;
    }

    .indeterminate {
      height: calc((${te} * 3) * 1px);
      border-radius: calc(${W} * 1px);
      display: flex;
      width: 100%;
      position: relative;
      overflow: hidden;
    }

    .indeterminate-indicator-1 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${qe};
      border-radius: calc(${W} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 40%;
      animation: indeterminate-1 2s infinite;
    }

    .indeterminate-indicator-2 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${qe};
      border-radius: calc(${W} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 60%;
      animation: indeterminate-2 2s infinite;
    }

    :host(.paused) .indeterminate-indicator-1,
    :host(.paused) .indeterminate-indicator-2 {
      animation: none;
      background-color: ${Ro};
      width: 100%;
      opacity: 1;
    }

    :host(.paused) .determinate {
      background-color: ${Ro};
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
  `.withBehaviors(ke(D`
        .indeterminate-indicator-1,
        .indeterminate-indicator-2,
        .determinate,
        .progress {
          background-color: ${m.ButtonText};
        }
        :host(.paused) .indeterminate-indicator-1,
        :host(.paused) .indeterminate-indicator-2,
        :host(.paused) .determinate {
          background-color: ${m.GrayText};
        }
      `));class T_ extends Hn{}const F_=T_.compose({baseName:"progress",template:Yx,styles:I_,indeterminateIndicator1:`
    <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>
  `,indeterminateIndicator2:`
    <span class="indeterminate-indicator-2" part="indeterminate-indicator-2"></span>
  `}),D_=(e,t)=>D`
    ${Se("flex")} :host {
      align-items: center;
      height: calc(${_e} * 1px);
      width: calc(${_e} * 1px);
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
      stroke: ${qe};
      fill: none;
      stroke-width: 2px;
      stroke-linecap: round;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
    }

    .indeterminate-indicator-1 {
      stroke: ${qe};
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
      stroke: ${Ro};
    }

    :host(.paused) .determinate {
      stroke: ${Ro};
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
  `.withBehaviors(ke(D`
        .background {
          stroke: ${m.Field};
        }
        .determinate,
        .indeterminate-indicator-1 {
          stroke: ${m.ButtonText};
        }
        :host(.paused) .determinate,
        :host(.paused) .indeterminate-indicator-1 {
          stroke: ${m.GrayText};
        }
      `));class R_ extends Hn{}const E_=R_.compose({baseName:"progress-ring",template:jx,styles:D_,indeterminateIndicator:`
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
  `}),O_=(e,t)=>D`
    ${Se("inline-flex")} :host {
      --input-size: calc((${_e} / 2) + ${W});
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
      border: calc(${te} * 1px) solid ${Vo};
      background: ${gd};
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      ${pt}
      color: ${ze};
      ${""} padding-inline-start: calc(${W} * 2px + 2px);
      margin-inline-end: calc(${W} * 2px + 2px);
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
      fill: ${Ln};
      opacity: 0;
      pointer-events: none;
    }

    :host(:not(.disabled):hover) .control {
      background: ${md};
      border-color: ${$d};
    }

    :host(:not(.disabled):active) .control {
      background: ${vd};
      border-color: ${_d};
    }

    :host(:not(.disabled):active) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(:${pe}) .control {
      ${qr}
      background: ${bd};
    }

    :host(.checked) .control {
      background: ${qe};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${Wi};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${Gi};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${Ei};
    }

    :host(.checked) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${yi};
    }
  `.withBehaviors(ke(D`
        .control {
          background: ${m.Field};
          border-color: ${m.FieldText};
        }
        :host(:not(.disabled):hover) .control,
        :host(:not(.disabled):active) .control {
          border-color: ${m.Highlight};
        }
        :host(:${pe}) .control {
          forced-color-adjust: none;
          background: ${m.Field};
          outline-color: ${m.FieldText};
        }
        :host(.checked:not(.disabled):hover) .control,
        :host(.checked:not(.disabled):active) .control {
          border-color: ${m.Highlight};
          background: ${m.Highlight};
        }
        :host(.checked) slot[name='checked-indicator'] {
          fill: ${m.Highlight};
        }
        :host(.checked:hover) .control slot[name='checked-indicator'] {
          fill: ${m.HighlightText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .label {
          color: ${m.GrayText};
        }
        :host(.disabled) .control,
        :host(.checked.disabled) .control {
          background: ${m.Field};
          border-color: ${m.GrayText};
        }
        :host(.disabled) slot[name='checked-indicator'],
        :host(.checked.disabled) slot[name='checked-indicator'] {
          fill: ${m.GrayText};
        }
      `)),P_=_l.compose({baseName:"radio",template:Wx,styles:O_,checkedIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="4"/>
    </svg>
  `}),L_=(e,t)=>D`
  ${Se("flex")} :host {
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
`,A_=hn.compose({baseName:"radio-group",template:Ux,styles:L_}),M_=(e,t)=>A`
  <template
    class="
            ${i=>i.readOnly?"readonly":""}
        "
  >
    <label
      part="label"
      for="control"
      class="${i=>i.defaultSlottedNodes&&i.defaultSlottedNodes.length?"label":"label label__hidden"}"
    >
      <slot ${it({property:"defaultSlottedNodes",filter:dg})}></slot>
    </label>
    <div class="root" part="root" ${Ee("root")}>
      ${Jt(e,t)}
      <div class="input-wrapper" part="input-wrapper">
        <input
          class="control"
          part="control"
          id="control"
          @input="${i=>i.handleTextInput()}"
          @change="${i=>i.handleChange()}"
          ?autofocus="${i=>i.autofocus}"
          ?disabled="${i=>i.disabled}"
          list="${i=>i.list}"
          maxlength="${i=>i.maxlength}"
          minlength="${i=>i.minlength}"
          pattern="${i=>i.pattern}"
          placeholder="${i=>i.placeholder}"
          ?readonly="${i=>i.readOnly}"
          ?required="${i=>i.required}"
          size="${i=>i.size}"
          ?spellcheck="${i=>i.spellcheck}"
          :value="${i=>i.value}"
          type="search"
          aria-atomic="${i=>i.ariaAtomic}"
          aria-busy="${i=>i.ariaBusy}"
          aria-controls="${i=>i.ariaControls}"
          aria-current="${i=>i.ariaCurrent}"
          aria-describedby="${i=>i.ariaDescribedby}"
          aria-details="${i=>i.ariaDetails}"
          aria-disabled="${i=>i.ariaDisabled}"
          aria-errormessage="${i=>i.ariaErrormessage}"
          aria-flowto="${i=>i.ariaFlowto}"
          aria-haspopup="${i=>i.ariaHaspopup}"
          aria-hidden="${i=>i.ariaHidden}"
          aria-invalid="${i=>i.ariaInvalid}"
          aria-keyshortcuts="${i=>i.ariaKeyshortcuts}"
          aria-label="${i=>i.ariaLabel}"
          aria-labelledby="${i=>i.ariaLabelledby}"
          aria-live="${i=>i.ariaLive}"
          aria-owns="${i=>i.ariaOwns}"
          aria-relevant="${i=>i.ariaRelevant}"
          aria-roledescription="${i=>i.ariaRoledescription}"
          ${Ee("control")}
        />
        <slot name="clear-button">
          <button
            class="clear-button ${i=>i.value?"":"clear-button__hidden"}"
            part="clear-button"
            tabindex="-1"
            @click=${i=>i.handleClearInput()}
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
      ${Qt(e,t)}
    </div>
  </template>
`,ya=".root",V_=Ye.create("clear-button-hover").withDefault(e=>{const t=Qi.getValueFor(e),i=gn.getValueFor(e);return t.evaluate(e,i.evaluate(e).focus).hover}),H_=Ye.create("clear-button-active").withDefault(e=>{const t=Qi.getValueFor(e),i=gn.getValueFor(e);return t.evaluate(e,i.evaluate(e).focus).active}),N_=(e,t)=>D`
    ${Se("inline-block")}

    ${Yl(e,t,ya)}

    ${Zr()}

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
      padding: 0 calc(${W} * 2px + 1px);
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
      color: ${ze};
      fill: currentcolor;
      border: none;
      border-radius: calc(${Ve} * 1px);
      min-width: calc(${_e} * 1px);
      ${pt}
      outline: none;
      padding: 0 calc((10 + (${W} * 2 * ${pn})) * 1px);
    }
    .clear-button:hover {
      background: ${V_};
    }
    .clear-button:active {
      background: ${H_};
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
    ::slotted(${e.tagFor(mi)}) {
      margin-inline-end: 1px;
    }
  `.withBehaviors(lt("outline",Xr(e,t,ya)),lt("filled",No(e,t,ya)),ke(zo(e,t,ya)));let km=class extends bi{constructor(){super(...arguments),this.appearance="outline"}};Y([p],km.prototype,"appearance",void 0);const z_=km.compose({baseName:"search",baseClass:bi,template:M_,styles:N_,start:'<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg%22%3E"><path d="M8.5 3a5.5 5.5 0 0 1 4.23 9.02l4.12 4.13a.5.5 0 0 1-.63.76l-.07-.06-4.13-4.12A5.5 5.5 0 1 1 8.5 3Zm0 1a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"/></svg>',shadowOptions:{delegatesFocus:!0}});class Sm extends Ls{appearanceChanged(t,i){t!==i&&(this.classList.add(i),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&xe.setValueFor(this.listbox,Wr)}}Y([p({mode:"fromView"})],Sm.prototype,"appearance",void 0);const B_=Sm.compose({baseName:"select",baseClass:Ls,template:ew,styles:G1,indicator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `}),j_=(e,t)=>D`
    ${Se("block")} :host {
      --skeleton-fill-default: ${An};
      overflow: hidden;
      width: 100%;
      position: relative;
      background-color: var(--skeleton-fill, var(--skeleton-fill-default));
      --skeleton-animation-gradient-default: linear-gradient(
        270deg,
        var(--skeleton-fill, var(--skeleton-fill-default)) 0%,
        ${yd} 51%,
        var(--skeleton-fill, var(--skeleton-fill-default)) 100%
      );
      --skeleton-animation-timing-default: ease-in-out;
    }

    :host(.rect) {
      border-radius: calc(${Ve} * 1px);
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

    ${Se("block")} span.shimmer {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: var(--skeleton-animation-gradient, var(--skeleton-animation-gradient-default));
      background-size: 0px 0px / 90% 100%;
      background-repeat: no-repeat;
      background-color: var(--skeleton-animation-fill, ${An});
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
  `.withBehaviors(ke(D`
        :host{
          background-color: ${m.CanvasText};
        }
      `)),Y_=Br.compose({baseName:"skeleton",template:tw,styles:j_}),U_=(e,t)=>D`
    ${Se("inline-grid")} :host {
      --thumb-size: calc((${_e} / 2) + ${W} + (${te} * 2));
      --thumb-translate: calc(var(--thumb-size) * -0.5 + var(--track-width) / 2);
      --track-overhang: calc((${W} / 2) * -1);
      --track-width: ${W};
      align-items: center;
      width: 100%;
      user-select: none;
      box-sizing: border-box;
      border-radius: calc(${Ve} * 1px);
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
      box-shadow: 0 0 0 2px ${xe}, 0 0 0 4px ${zl};
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
      background: padding-box linear-gradient(${Si}, ${Si}),
        border-box ${xd};
      border: calc(${te} * 1px) solid transparent;
      border-radius: 50%;
      box-sizing: border-box;
    }
    .thumb-cursor::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 100%;
      margin: 4px;
      background: ${qe};
    }
    :host(:not(.disabled)) .thumb-cursor:hover::after {
      background: ${Wi};
      margin: 3px;
    }
    :host(:not(.disabled)) .thumb-cursor:active::after {
      background: ${Gi};
      margin: 5px;
    }
    :host(:not(.disabled)) .thumb-cursor:hover {
      background: padding-box linear-gradient(${Si}, ${Si}),
        border-box ${cm};
    }
    :host(:not(.disabled)) .thumb-cursor:active {
      background: padding-box linear-gradient(${Si}, ${Si}),
        border-box ${um};
    }
    .track-start {
      background: ${qe};
      position: absolute;
      height: 100%;
      left: 0;
      border-radius: calc(${Ve} * 1px);
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
      background: ${lm};
      border: 1px solid ${Vo};
      border-radius: 2px;
      box-sizing: border-box;
      position: absolute;
    }
    :host(.vertical) {
      height: 100%;
      min-height: calc(${W} * 60px);
      min-width: calc(${W} * 20px);
    }
    :host(.vertical) .track-start {
      height: auto;
      width: 100%;
      top: 0;
    }
    :host(.disabled),
    :host(.readonly) {
      cursor: ${Ei};
    }
    :host(.disabled) {
      opacity: ${yi};
    }
  `.withBehaviors(ke(D`
        .thumb-cursor {
          forced-color-adjust: none;
          border-color: ${m.FieldText};
          background: ${m.FieldText};
        }
        :host(:not(.disabled)) .thumb-cursor:hover,
        :host(:not(.disabled)) .thumb-cursor:active {
          background: ${m.Highlight};
        }
        .track {
          forced-color-adjust: none;
          background: ${m.FieldText};
        }
        .thumb-cursor::after,
        :host(:not(.disabled)) .thumb-cursor:hover::after,
        :host(:not(.disabled)) .thumb-cursor:active::after {
          background: ${m.Field};
        }
        :host(:${pe}) .thumb-cursor {
          background: ${m.Highlight};
          border-color: ${m.Highlight};
          box-shadow: 0 0 0 1px ${m.Field}, 0 0 0 3px ${m.FieldText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .track,
        :host(.disabled) .thumb-cursor {
          forced-color-adjust: none;
          background: ${m.GrayText};
        }
      `)),W_=Bt.compose({baseName:"slider",template:sw,styles:U_,thumb:`
    <div class="thumb-cursor"></div>
  `}),G_=(e,t)=>D`
    ${Se("block")} :host {
      ${dm}
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
      width: calc(${te} * 1px);
      height: calc(${W} * 1px);
      background: ${Vo};
      justify-self: center;
    }
    :host(.vertical) .mark {
      transform: rotate(90deg);
      align-self: center;
    }
    :host(.vertical) .label {
      margin-left: calc((${W} / 2) * 2px);
      align-self: center;
    }
    :host(.disabled) {
      opacity: ${yi};
    }
  `.withBehaviors(ke(D`
        .mark {
          forced-color-adjust: none;
          background: ${m.FieldText};
        }
        :host(.disabled) {
          forced-color-adjust: none;
          opacity: 1;
        }
        :host(.disabled) .label {
          color: ${m.GrayText};
        }
        :host(.disabled) .mark {
          background: ${m.GrayText};
        }
      `)),q_=As.compose({baseName:"slider-label",template:iw,styles:G_}),Z_=(e,t)=>D`
    :host([hidden]) {
      display: none;
    }

    ${Se("inline-flex")} :host {
      align-items: center;
      outline: none;
      font-family: ${Oi};
      ${""} user-select: none;
    }

    :host(.disabled) {
      opacity: ${yi};
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.disabled) .switch,
    :host(.readonly) .switch,
    :host(.disabled) .status-message,
    :host(.readonly) .status-message {
      cursor: ${Ei};
    }

    .switch {
      position: relative;
      box-sizing: border-box;
      width: calc(((${_e} / 2) + ${W}) * 2px);
      height: calc(((${_e} / 2) + ${W}) * 1px);
      background: ${gd};
      border-radius: calc(${_e} * 1px);
      border: calc(${te} * 1px) solid ${Vo};
      cursor: pointer;
    }

    :host(:not(.disabled):hover) .switch {
      background: ${md};
      border-color: ${$d};
    }

    :host(:not(.disabled):active) .switch {
      background: ${vd};
      border-color: ${_d};
    }

    :host(:${pe}) .switch {
      ${qr}
      background: ${bd};
    }

    :host(.checked) .switch {
      background: ${qe};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .switch {
      background: ${Wi};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .switch {
      background: ${Gi};
      border-color: transparent;
    }

    slot[name='switch'] {
      position: absolute;
      display: flex;
      border: 1px solid transparent; /* Spacing included in the transform reference box */
      fill: ${ze};
      transition: all 0.2s ease-in-out;
    }

    .status-message {
      color: ${ze};
      cursor: pointer;
      ${pt}
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      color: ${ze};
      ${pt}
      margin-inline-end: calc(${W} * 2px + 2px);
      cursor: pointer;
    }

    ::slotted([slot="checked-message"]),
    ::slotted([slot="unchecked-message"]) {
        margin-inline-start: calc(${W} * 2px + 2px);
    }

    :host(.checked) .switch {
      background: ${qe};
    }

    :host(.checked) .switch slot[name='switch'] {
      fill: ${Ln};
      filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.15));
    }

    :host(.checked:not(.disabled)) .switch:hover {
      background: ${Wi};
    }

    :host(.checked:not(.disabled)) .switch:hover slot[name='switch'] {
      fill: ${sm};
    }

    :host(.checked:not(.disabled)) .switch:active {
      background: ${Gi};
    }

    :host(.checked:not(.disabled)) .switch:active slot[name='switch'] {
      fill: ${nm};
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
  `.withBehaviors(new Ho(D`
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
      `),ke(D`
        :host(:not(.disabled)) .switch slot[name='switch'] {
          forced-color-adjust: none;
          fill: ${m.FieldText};
        }
        .switch {
          background: ${m.Field};
          border-color: ${m.FieldText};
        }
        :host(.checked) .switch {
          background: ${m.Highlight};
          border-color: ${m.Highlight};
        }
        :host(:not(.disabled):hover) .switch ,
        :host(:not(.disabled):active) .switch,
        :host(.checked:not(.disabled):hover) .switch {
          background: ${m.HighlightText};
          border-color: ${m.Highlight};
        }
        :host(.checked:not(.disabled)) .switch slot[name="switch"] {
          fill: ${m.HighlightText};
        }
        :host(.checked:not(.disabled):hover) .switch slot[name='switch'] {
          fill: ${m.Highlight};
        }
        :host(:${pe}) .switch {
          forced-color-adjust: none;
          background: ${m.Field}; 
          border-color: ${m.Highlight};
          outline-color: ${m.FieldText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) slot[name='switch'] {
          forced-color-adjust: none;
          fill: ${m.GrayText};
        }
        :host(.disabled) .switch {
          background: ${m.Field};
          border-color: ${m.GrayText};
        }
        .status-message,
        .label {
          color: ${m.FieldText};
        }
      `)),X_=td.compose({baseName:"switch",template:aw,styles:Z_,switch:`
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="12" height="12" rx="6"/>
    </svg>
  `}),Q_=(e,t)=>D`
      ${Se("grid")} :host {
        box-sizing: border-box;
        ${pt}
        color: ${ze};
        grid-template-columns: auto 1fr auto;
        grid-template-rows: auto 1fr;
      }

      .tablist {
        display: grid;
        grid-template-rows: calc(${_e} * 1px); auto;
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
        border-radius: calc(${Ve} * 1px);
        justify-self: center;
        background: ${qe};
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
        margin-inline-start: calc(${Vt} * 1px);
        border-radius: calc(${Ve} * 1px);
        align-self: center;
        background: ${qe};
      }

      :host(.vertical) .activeIndicatorTransition {
        transition: transform 0.2s linear;
      }
    `.withBehaviors(ke(D`
        .activeIndicator,
        :host(.vertical) .activeIndicator {
          background: ${m.Highlight};
        }
      `)),J_=(e,t)=>D`
      ${Se("inline-flex")} :host {
        box-sizing: border-box;
        ${pt}
        height: calc((${_e} + (${W} * 2)) * 1px);
        padding: 0 calc((6 + (${W} * 2 * ${pn})) * 1px);
        color: ${ze};
        border-radius: calc(${Ve} * 1px);
        border: calc(${te} * 1px) solid transparent;
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
        color: ${ze};
      }

      :host(:${pe}) {
        ${Pi}
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
        color: ${ze};
      }

      :host(.vertical:hover[aria-selected='true']) {
      }
    `.withBehaviors(ke(D`
          :host {
            forced-color-adjust: none;
            border-color: transparent;
            color: ${m.ButtonText};
            fill: currentcolor;
          }
          :host(:hover),
          :host(.vertical:hover),
          :host([aria-selected='true']:hover) {
            background: transparent;
            color: ${m.Highlight};
            fill: currentcolor;
          }
          :host([aria-selected='true']) {
            background: transparent;
            color: ${m.Highlight};
            fill: currentcolor;
          }
          :host(:${pe}) {
            background: transparent;
            outline-color: ${m.ButtonText};
          }
        `)),K_=fg.compose({baseName:"tab",template:hw,styles:J_}),ek=(e,t)=>D`
  ${Se("block")} :host {
    box-sizing: border-box;
    ${pt}
    padding: 0 calc((6 + (${W} * 2 * ${pn})) * 1px);
  }
`,tk=dw.compose({baseName:"tab-panel",template:uw,styles:ek}),ik=Ms.compose({baseName:"tabs",template:fw,styles:Q_}),xa=".control",sk=(e,t)=>D`
    ${Se("inline-flex")}

    ${Yl(e,t,xa)}

    ${Zr()}

    :host {
      flex-direction: column;
      vertical-align: bottom;
    }

    .control {
      height: calc((${_e} * 2) * 1px);
      padding: calc(${W} * 1.5px) calc(${W} * 2px + 1px);
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
  `.withBehaviors(lt("outline",Xr(e,t,xa)),lt("filled",No(e,t,xa)),ke(zo(e,t,xa)));class Cm extends jt{appearanceChanged(t,i){t!==i&&(this.classList.add(i),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}Y([p],Cm.prototype,"appearance",void 0);const nk=Cm.compose({baseName:"text-area",baseClass:jt,template:mw,styles:sk,shadowOptions:{delegatesFocus:!0}}),wa=".root",ok=(e,t)=>D`
    ${Se("inline-block")}

    ${Yl(e,t,wa)}

    ${Zr()}

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
      padding: 0 calc(${W} * 2px + 1px);
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
  `.withBehaviors(lt("outline",Xr(e,t,wa)),lt("filled",No(e,t,wa)),ke(zo(e,t,wa)));class Im extends ai{appearanceChanged(t,i){t!==i&&(this.classList.add(i),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}Y([p],Im.prototype,"appearance",void 0);const rk=Im.compose({baseName:"text-field",baseClass:ai,template:vw,styles:ok,shadowOptions:{delegatesFocus:!0}}),ak=(e,t)=>D`
    ${Se("inline-flex")} :host {
      --toolbar-item-gap: calc(${W} * 1px);
      background: ${xe};
      fill: currentcolor;
      padding: var(--toolbar-item-gap);
      box-sizing: border-box;
      align-items: center;
    }

    :host(${pe}) {
      ${Pi}
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
  `.withBehaviors(ke(D`
        :host(:${pe}) {
          outline-color: ${m.Highlight};
          color: ${m.ButtonText};
          forced-color-adjust: none;
        }
      `));class lk extends fn{}const ck=lk.compose({baseName:"toolbar",baseClass:fn,template:bw,styles:ak}),uk=(e,t)=>D`
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
      border-radius: calc(${Ve} * 1px);
      border: calc(${te} * 1px) solid ${go};
      background: ${xe};
      color: ${ze};
      padding: 4px 12px;
      height: fit-content;
      width: fit-content;
      ${pt}
      white-space: nowrap;
      box-shadow: ${v1};
    }

    ${e.tagFor(ce)} {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: visible;
      flex-direction: row;
    }

    ${e.tagFor(ce)}.right,
    ${e.tagFor(ce)}.left {
      flex-direction: column;
    }

    ${e.tagFor(ce)}.top .tooltip::after,
    ${e.tagFor(ce)}.bottom .tooltip::after,
    ${e.tagFor(ce)}.left .tooltip::after,
    ${e.tagFor(ce)}.right .tooltip::after {
      content: '';
      width: 12px;
      height: 12px;
      background: ${xe};
      border-top: calc(${te} * 1px) solid ${go};
      border-left: calc(${te} * 1px) solid ${go};
      position: absolute;
    }

    ${e.tagFor(ce)}.top .tooltip::after {
      transform: translateX(-50%) rotate(225deg);
      bottom: 5px;
      left: 50%;
    }

    ${e.tagFor(ce)}.top .tooltip {
      margin-bottom: 12px;
    }

    ${e.tagFor(ce)}.bottom .tooltip::after {
      transform: translateX(-50%) rotate(45deg);
      top: 5px;
      left: 50%;
    }

    ${e.tagFor(ce)}.bottom .tooltip {
      margin-top: 12px;
    }

    ${e.tagFor(ce)}.left .tooltip::after {
      transform: translateY(-50%) rotate(135deg);
      top: 50%;
      right: 5px;
    }

    ${e.tagFor(ce)}.left .tooltip {
      margin-right: 12px;
    }

    ${e.tagFor(ce)}.right .tooltip::after {
      transform: translateY(-50%) rotate(-45deg);
      top: 50%;
      left: 5px;
    }

    ${e.tagFor(ce)}.right .tooltip {
      margin-left: 12px;
    }
  `.withBehaviors(ke(D`
        :host([disabled]) {
          opacity: 1;
        }
        ${e.tagFor(ce)}.top .tooltip::after,
        ${e.tagFor(ce)}.bottom .tooltip::after,
        ${e.tagFor(ce)}.left .tooltip::after,
        ${e.tagFor(ce)}.right .tooltip::after {
          content: '';
          width: unset;
          height: unset;
        }
      `));class dk extends $t{connectedCallback(){super.connectedCallback(),xe.setValueFor(this,Wr)}}const hk=dk.compose({baseName:"tooltip",baseClass:$t,template:yw,styles:uk}),fk=(e,t)=>D`
  :host([hidden]) {
    display: none;
  }

  ${Se("flex")} :host {
    flex-direction: column;
    align-items: stretch;
    min-width: fit-content;
    font-size: 0;
  }
`,pk=Sl.compose({baseName:"tree-view",template:ww,styles:fk}),gk=D`
  .expand-collapse-button svg {
    transform: rotate(0deg);
  }
  :host(.nested) .expand-collapse-button {
    left: var(--expand-collapse-button-nested-width, calc(${_e} * -1px));
  }
  :host([selected])::after {
    left: calc(${Vt} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,mk=D`
  .expand-collapse-button svg {
    transform: rotate(180deg);
  }
  :host(.nested) .expand-collapse-button {
    right: var(--expand-collapse-button-nested-width, calc(${_e} * -1px));
  }
  :host([selected])::after {
    right: calc(${Vt} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,kf=pi`((${Il} / 2) * ${W}) + ((${W} * ${pn}) / 2)`,vk=Ye.create("tree-item-expand-collapse-hover").withDefault(e=>{const t=Qi.getValueFor(e);return t.evaluate(e,t.evaluate(e).hover).hover}),bk=Ye.create("tree-item-expand-collapse-selected-hover").withDefault(e=>{const t=jn.getValueFor(e);return Qi.getValueFor(e).evaluate(e,t.evaluate(e).rest).hover}),yk=(e,t)=>D`
    ${Se("block")} :host {
      contain: content;
      position: relative;
      outline: none;
      color: ${ze};
      fill: currentcolor;
      cursor: pointer;
      font-family: ${Oi};
      --expand-collapse-button-size: calc(${_e} * 1px);
      --tree-item-nested-width: 0;
    }

    .positioning-region {
      display: flex;
      position: relative;
      box-sizing: border-box;
      background: ${To};
      border: calc(${te} * 1px) solid transparent;
      border-radius: calc(${Ve} * 1px);
      height: calc((${_e} + 1) * 1px);
    }

    :host(:${pe}) .positioning-region {
      ${Pi}
    }

    .positioning-region::before {
      content: '';
      display: block;
      width: var(--tree-item-nested-width);
      flex-shrink: 0;
    }

    :host(:not([disabled])) .positioning-region:hover {
      background: ${Fo};
    }

    :host(:not([disabled])) .positioning-region:active {
      background: ${Do};
    }

    .content-region {
      display: inline-flex;
      align-items: center;
      white-space: nowrap;
      width: 100%;
      height: calc(${_e} * 1px);
      margin-inline-start: calc(${W} * 2px + 8px);
      ${pt}
    }

    .items {
      display: none;
      ${""} font-size: calc(1em + (${W} + 16) * 1px);
    }

    .expand-collapse-button {
      background: none;
      border: none;
      border-radius: calc(${Ve} * 1px);
      ${""} width: calc((${kf} + (${W} * 2)) * 1px);
      height: calc((${kf} + (${W} * 2)) * 1px);
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
      ${""} margin-inline-end: calc(${W} * 2px + 2px);
    }

    .end {
      ${""} margin-inline-start: calc(${W} * 2px + 2px);
    }

    :host(.expanded) > .items {
      display: block;
    }

    :host([disabled]) {
      opacity: ${yi};
      cursor: ${Ei};
    }

    :host(.nested) .content-region {
      position: relative;
      margin-inline-start: var(--expand-collapse-button-size);
    }

    :host(.nested) .expand-collapse-button {
      position: absolute;
    }

    :host(.nested) .expand-collapse-button:hover {
      background: ${vk};
    }

    :host(:not([disabled])[selected]) .positioning-region {
      background: ${An};
    }

    :host(:not([disabled])[selected]) .expand-collapse-button:hover {
      background: ${bk};
    }

    :host([selected])::after {
      content: '';
      display: block;
      position: absolute;
      top: calc((${_e} / 4) * 1px);
      width: 3px;
      height: calc((${_e} / 2) * 1px);
      ${""} background: ${qe};
      border-radius: calc(${Ve} * 1px);
    }

    ::slotted(fluent-tree-item) {
      --tree-item-nested-width: 1em;
      --expand-collapse-button-nested-width: calc(${_e} * -1px);
    }
  `.withBehaviors(new Ho(gk,mk),ke(D`
        :host {
          color: ${m.ButtonText};
        }
        .positioning-region {
          border-color: ${m.ButtonFace};
          background: ${m.ButtonFace};
        }
        :host(:not([disabled])) .positioning-region:hover,
        :host(:not([disabled])) .positioning-region:active,
        :host(:not([disabled])[selected]) .positioning-region {
          background: ${m.Highlight};
        }
        :host .positioning-region:hover .content-region,
        :host([selected]) .positioning-region .content-region {
          forced-color-adjust: none;
          color: ${m.HighlightText};
        }
        :host([disabled][selected]) .positioning-region .content-region {
          color: ${m.GrayText};
        }
        :host([selected])::after {
          background: ${m.HighlightText};
        }
        :host(:${pe}) .positioning-region {
          forced-color-adjust: none;
          outline-color: ${m.ButtonFace};
        }
        :host([disabled]),
        :host([disabled]) .content-region,
        :host([disabled]) .positioning-region:hover .content-region {
          opacity: 1;
          color: ${m.GrayText};
        }
        :host(.nested) .expand-collapse-button:hover,
        :host(:not([disabled])[selected]) .expand-collapse-button:hover {
          background: ${m.ButtonFace};
          fill: ${m.ButtonText};
        }
      `)),xk=St.compose({baseName:"tree-item",template:xw,styles:yk,expandCollapseGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>
    </svg>
  `}),wk={fluentAccordion:c1,fluentAccordionItem:l1,fluentAnchor:I1,fluentAnchoredRegion:F1,fluentBadge:R1,fluentBreadcrumb:O1,fluentBreadcrumbItem:L1,fluentButton:M1,fluentCalendar:z1,fluentCard:j1,fluentCheckbox:U1,fluentCombobox:Z1,fluentDataGrid:t_,fluentDataGridCell:K1,fluentDataGridRow:e_,fluentDesignSystemProvider:i_,fluentDialog:n_,fluentDivider:r_,fluentFlipper:l_,fluentHorizontalScroll:p_,fluentListbox:v_,fluentOption:y_,fluentMenu:$_,fluentMenuItem:k_,fluentNumberField:C_,fluentProgress:F_,fluentProgressRing:E_,fluentRadio:P_,fluentRadioGroup:A_,fluentSearch:z_,fluentSelect:B_,fluentSkeleton:Y_,fluentSlider:W_,fluentSliderLabel:q_,fluentSwitch:X_,fluentTabs:ik,fluentTab:K_,fluentTabPanel:tk,fluentTextArea:nk,fluentTextField:rk,fluentToolbar:ck,fluentTooltip:hk,fluentTreeView:pk,fluentTreeItem:xk,register(e,...t){if(e)for(const i in this)i!=="register"&&this[i]().register(e,...t)}};function $k(e){return ng.getOrCreate(e).withPrefix("fluent")}$k().register(wk);function Td(e,t){const i=Object.create(null),s=e.split(",");for(let n=0;n<s.length;n++)i[s[n]]=!0;return t?n=>!!i[n.toLowerCase()]:n=>!!i[n]}const et={},mo=[],Yi=()=>{},_k=()=>!1,kk=/^on[^a-z]/,Ul=e=>kk.test(e),Fd=e=>e.startsWith("onUpdate:"),Et=Object.assign,Dd=(e,t)=>{const i=e.indexOf(t);i>-1&&e.splice(i,1)},Sk=Object.prototype.hasOwnProperty,Re=(e,t)=>Sk.call(e,t),he=Array.isArray,vo=e=>Wl(e)==="[object Map]",Tm=e=>Wl(e)==="[object Set]",ye=e=>typeof e=="function",Tt=e=>typeof e=="string",Rd=e=>typeof e=="symbol",ut=e=>e!==null&&typeof e=="object",Fm=e=>ut(e)&&ye(e.then)&&ye(e.catch),Dm=Object.prototype.toString,Wl=e=>Dm.call(e),Ck=e=>Wl(e).slice(8,-1),Rm=e=>Wl(e)==="[object Object]",Ed=e=>Tt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,La=Td(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Gl=e=>{const t=Object.create(null);return i=>t[i]||(t[i]=e(i))},Ik=/-(\w)/g,as=Gl(e=>e.replace(Ik,(t,i)=>i?i.toUpperCase():"")),Tk=/\B([A-Z])/g,Un=Gl(e=>e.replace(Tk,"-$1").toLowerCase()),ql=Gl(e=>e.charAt(0).toUpperCase()+e.slice(1)),Bc=Gl(e=>e?`on${ql(e)}`:""),Tr=(e,t)=>!Object.is(e,t),jc=(e,t)=>{for(let i=0;i<e.length;i++)e[i](t)},Xa=(e,t,i)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:i})},Fk=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Sf;const mu=()=>Sf||(Sf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ln(e){if(he(e)){const t={};for(let i=0;i<e.length;i++){const s=e[i],n=Tt(s)?Ok(s):ln(s);if(n)for(const o in n)t[o]=n[o]}return t}else{if(Tt(e))return e;if(ut(e))return e}}const Dk=/;(?![^(]*\))/g,Rk=/:([^]+)/,Ek=/\/\*[^]*?\*\//g;function Ok(e){const t={};return e.replace(Ek,"").split(Dk).forEach(i=>{if(i){const s=i.split(Rk);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Ht(e){let t="";if(Tt(e))t=e;else if(he(e))for(let i=0;i<e.length;i++){const s=Ht(e[i]);s&&(t+=s+" ")}else if(ut(e))for(const i in e)e[i]&&(t+=i+" ");return t.trim()}const Pk="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Lk=Td(Pk);function Em(e){return!!e||e===""}const ct=e=>Tt(e)?e:e==null?"":he(e)||ut(e)&&(e.toString===Dm||!ye(e.toString))?JSON.stringify(e,Om,2):String(e),Om=(e,t)=>t&&t.__v_isRef?Om(e,t.value):vo(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((i,[s,n])=>(i[`${s} =>`]=n,i),{})}:Tm(t)?{[`Set(${t.size})`]:[...t.values()]}:ut(t)&&!he(t)&&!Rm(t)?String(t):t;let ui;class Pm{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ui,!t&&ui&&(this.index=(ui.scopes||(ui.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const i=ui;try{return ui=this,t()}finally{ui=i}}}on(){ui=this}off(){ui=this.parent}stop(t){if(this._active){let i,s;for(i=0,s=this.effects.length;i<s;i++)this.effects[i].stop();for(i=0,s=this.cleanups.length;i<s;i++)this.cleanups[i]();if(this.scopes)for(i=0,s=this.scopes.length;i<s;i++)this.scopes[i].stop(!0);if(!this.detached&&this.parent&&!t){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0,this._active=!1}}}function Lm(e){return new Pm(e)}function Ak(e,t=ui){t&&t.active&&t.effects.push(e)}function Am(){return ui}function Mk(e){ui&&ui.cleanups.push(e)}const Od=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Mm=e=>(e.w&cn)>0,Vm=e=>(e.n&cn)>0,Vk=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=cn},Hk=e=>{const{deps:t}=e;if(t.length){let i=0;for(let s=0;s<t.length;s++){const n=t[s];Mm(n)&&!Vm(n)?n.delete(e):t[i++]=n,n.w&=~cn,n.n&=~cn}t.length=i}},Qa=new WeakMap;let nr=0,cn=1;const vu=30;let zi;const Dn=Symbol(""),bu=Symbol("");class Pd{constructor(t,i=null,s){this.fn=t,this.scheduler=i,this.active=!0,this.deps=[],this.parent=void 0,Ak(this,s)}run(){if(!this.active)return this.fn();let t=zi,i=Ks;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=zi,zi=this,Ks=!0,cn=1<<++nr,nr<=vu?Vk(this):Cf(this),this.fn()}finally{nr<=vu&&Hk(this),cn=1<<--nr,zi=this.parent,Ks=i,this.parent=void 0,this.deferStop&&this.stop()}}stop(){zi===this?this.deferStop=!0:this.active&&(Cf(this),this.onStop&&this.onStop(),this.active=!1)}}function Cf(e){const{deps:t}=e;if(t.length){for(let i=0;i<t.length;i++)t[i].delete(e);t.length=0}}let Ks=!0;const Hm=[];function Bo(){Hm.push(Ks),Ks=!1}function jo(){const e=Hm.pop();Ks=e===void 0?!0:e}function ni(e,t,i){if(Ks&&zi){let s=Qa.get(e);s||Qa.set(e,s=new Map);let n=s.get(i);n||s.set(i,n=Od()),Nm(n)}}function Nm(e,t){let i=!1;nr<=vu?Vm(e)||(e.n|=cn,i=!Mm(e)):i=!e.has(zi),i&&(e.add(zi),zi.deps.push(e))}function Is(e,t,i,s,n,o){const r=Qa.get(e);if(!r)return;let a=[];if(t==="clear")a=[...r.values()];else if(i==="length"&&he(e)){const l=Number(s);r.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(i!==void 0&&a.push(r.get(i)),t){case"add":he(e)?Ed(i)&&a.push(r.get("length")):(a.push(r.get(Dn)),vo(e)&&a.push(r.get(bu)));break;case"delete":he(e)||(a.push(r.get(Dn)),vo(e)&&a.push(r.get(bu)));break;case"set":vo(e)&&a.push(r.get(Dn));break}if(a.length===1)a[0]&&yu(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);yu(Od(l))}}function yu(e,t){const i=he(e)?e:[...e];for(const s of i)s.computed&&If(s);for(const s of i)s.computed||If(s)}function If(e,t){(e!==zi||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function Nk(e,t){var i;return(i=Qa.get(e))==null?void 0:i.get(t)}const zk=Td("__proto__,__v_isRef,__isVue"),zm=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Rd)),Bk=Ld(),jk=Ld(!1,!0),Yk=Ld(!0),Tf=Uk();function Uk(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...i){const s=Oe(this);for(let o=0,r=this.length;o<r;o++)ni(s,"get",o+"");const n=s[t](...i);return n===-1||n===!1?s[t](...i.map(Oe)):n}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...i){Bo();const s=Oe(this)[t].apply(this,i);return jo(),s}}),e}function Wk(e){const t=Oe(this);return ni(t,"has",e),t.hasOwnProperty(e)}function Ld(e=!1,t=!1){return function(s,n,o){if(n==="__v_isReactive")return!e;if(n==="__v_isReadonly")return e;if(n==="__v_isShallow")return t;if(n==="__v_raw"&&o===(e?t?lS:Wm:t?Um:Ym).get(s))return s;const r=he(s);if(!e){if(r&&Re(Tf,n))return Reflect.get(Tf,n,o);if(n==="hasOwnProperty")return Wk}const a=Reflect.get(s,n,o);return(Rd(n)?zm.has(n):zk(n))||(e||ni(s,"get",n),t)?a:xt(a)?r&&Ed(n)?a:a.value:ut(a)?e?qm(a):Wn(a):a}}const Gk=Bm(),qk=Bm(!0);function Bm(e=!1){return function(i,s,n,o){let r=i[s];if(Eo(r)&&xt(r)&&!xt(n))return!1;if(!e&&(!Ja(n)&&!Eo(n)&&(r=Oe(r),n=Oe(n)),!he(i)&&xt(r)&&!xt(n)))return r.value=n,!0;const a=he(i)&&Ed(s)?Number(s)<i.length:Re(i,s),l=Reflect.set(i,s,n,o);return i===Oe(o)&&(a?Tr(n,r)&&Is(i,"set",s,n):Is(i,"add",s,n)),l}}function Zk(e,t){const i=Re(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Is(e,"delete",t,void 0),s}function Xk(e,t){const i=Reflect.has(e,t);return(!Rd(t)||!zm.has(t))&&ni(e,"has",t),i}function Qk(e){return ni(e,"iterate",he(e)?"length":Dn),Reflect.ownKeys(e)}const jm={get:Bk,set:Gk,deleteProperty:Zk,has:Xk,ownKeys:Qk},Jk={get:Yk,set(e,t){return!0},deleteProperty(e,t){return!0}},Kk=Et({},jm,{get:jk,set:qk}),Ad=e=>e,Zl=e=>Reflect.getPrototypeOf(e);function $a(e,t,i=!1,s=!1){e=e.__v_raw;const n=Oe(e),o=Oe(t);i||(t!==o&&ni(n,"get",t),ni(n,"get",o));const{has:r}=Zl(n),a=s?Ad:i?Hd:Fr;if(r.call(n,t))return a(e.get(t));if(r.call(n,o))return a(e.get(o));e!==n&&e.get(t)}function _a(e,t=!1){const i=this.__v_raw,s=Oe(i),n=Oe(e);return t||(e!==n&&ni(s,"has",e),ni(s,"has",n)),e===n?i.has(e):i.has(e)||i.has(n)}function ka(e,t=!1){return e=e.__v_raw,!t&&ni(Oe(e),"iterate",Dn),Reflect.get(e,"size",e)}function Ff(e){e=Oe(e);const t=Oe(this);return Zl(t).has.call(t,e)||(t.add(e),Is(t,"add",e,e)),this}function Df(e,t){t=Oe(t);const i=Oe(this),{has:s,get:n}=Zl(i);let o=s.call(i,e);o||(e=Oe(e),o=s.call(i,e));const r=n.call(i,e);return i.set(e,t),o?Tr(t,r)&&Is(i,"set",e,t):Is(i,"add",e,t),this}function Rf(e){const t=Oe(this),{has:i,get:s}=Zl(t);let n=i.call(t,e);n||(e=Oe(e),n=i.call(t,e)),s&&s.call(t,e);const o=t.delete(e);return n&&Is(t,"delete",e,void 0),o}function Ef(){const e=Oe(this),t=e.size!==0,i=e.clear();return t&&Is(e,"clear",void 0,void 0),i}function Sa(e,t){return function(s,n){const o=this,r=o.__v_raw,a=Oe(r),l=t?Ad:e?Hd:Fr;return!e&&ni(a,"iterate",Dn),r.forEach((c,u)=>s.call(n,l(c),l(u),o))}}function Ca(e,t,i){return function(...s){const n=this.__v_raw,o=Oe(n),r=vo(o),a=e==="entries"||e===Symbol.iterator&&r,l=e==="keys"&&r,c=n[e](...s),u=i?Ad:t?Hd:Fr;return!t&&ni(o,"iterate",l?bu:Dn),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function Us(e){return function(...t){return e==="delete"?!1:this}}function eS(){const e={get(o){return $a(this,o)},get size(){return ka(this)},has:_a,add:Ff,set:Df,delete:Rf,clear:Ef,forEach:Sa(!1,!1)},t={get(o){return $a(this,o,!1,!0)},get size(){return ka(this)},has:_a,add:Ff,set:Df,delete:Rf,clear:Ef,forEach:Sa(!1,!0)},i={get(o){return $a(this,o,!0)},get size(){return ka(this,!0)},has(o){return _a.call(this,o,!0)},add:Us("add"),set:Us("set"),delete:Us("delete"),clear:Us("clear"),forEach:Sa(!0,!1)},s={get(o){return $a(this,o,!0,!0)},get size(){return ka(this,!0)},has(o){return _a.call(this,o,!0)},add:Us("add"),set:Us("set"),delete:Us("delete"),clear:Us("clear"),forEach:Sa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=Ca(o,!1,!1),i[o]=Ca(o,!0,!1),t[o]=Ca(o,!1,!0),s[o]=Ca(o,!0,!0)}),[e,i,t,s]}const[tS,iS,sS,nS]=eS();function Md(e,t){const i=t?e?nS:sS:e?iS:tS;return(s,n,o)=>n==="__v_isReactive"?!e:n==="__v_isReadonly"?e:n==="__v_raw"?s:Reflect.get(Re(i,n)&&n in s?i:s,n,o)}const oS={get:Md(!1,!1)},rS={get:Md(!1,!0)},aS={get:Md(!0,!1)},Ym=new WeakMap,Um=new WeakMap,Wm=new WeakMap,lS=new WeakMap;function cS(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function uS(e){return e.__v_skip||!Object.isExtensible(e)?0:cS(Ck(e))}function Wn(e){return Eo(e)?e:Vd(e,!1,jm,oS,Ym)}function Gm(e){return Vd(e,!1,Kk,rS,Um)}function qm(e){return Vd(e,!0,Jk,aS,Wm)}function Vd(e,t,i,s,n){if(!ut(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=n.get(e);if(o)return o;const r=uS(e);if(r===0)return e;const a=new Proxy(e,r===2?s:i);return n.set(e,a),a}function en(e){return Eo(e)?en(e.__v_raw):!!(e&&e.__v_isReactive)}function Eo(e){return!!(e&&e.__v_isReadonly)}function Ja(e){return!!(e&&e.__v_isShallow)}function Zm(e){return en(e)||Eo(e)}function Oe(e){const t=e&&e.__v_raw;return t?Oe(t):e}function Xl(e){return Xa(e,"__v_skip",!0),e}const Fr=e=>ut(e)?Wn(e):e,Hd=e=>ut(e)?qm(e):e;function Xm(e){Ks&&zi&&(e=Oe(e),Nm(e.dep||(e.dep=Od())))}function Qm(e,t){e=Oe(e);const i=e.dep;i&&yu(i)}function xt(e){return!!(e&&e.__v_isRef===!0)}function tt(e){return Jm(e,!1)}function dS(e){return Jm(e,!0)}function Jm(e,t){return xt(e)?e:new hS(e,t)}class hS{constructor(t,i){this.__v_isShallow=i,this.dep=void 0,this.__v_isRef=!0,this._rawValue=i?t:Oe(t),this._value=i?t:Fr(t)}get value(){return Xm(this),this._value}set value(t){const i=this.__v_isShallow||Ja(t)||Eo(t);t=i?t:Oe(t),Tr(t,this._rawValue)&&(this._rawValue=t,this._value=i?t:Fr(t),Qm(this))}}function oe(e){return xt(e)?e.value:e}const fS={get:(e,t,i)=>oe(Reflect.get(e,t,i)),set:(e,t,i,s)=>{const n=e[t];return xt(n)&&!xt(i)?(n.value=i,!0):Reflect.set(e,t,i,s)}};function Km(e){return en(e)?e:new Proxy(e,fS)}function pS(e){const t=he(e)?new Array(e.length):{};for(const i in e)t[i]=mS(e,i);return t}class gS{constructor(t,i,s){this._object=t,this._key=i,this._defaultValue=s,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Nk(Oe(this._object),this._key)}}function mS(e,t,i){const s=e[t];return xt(s)?s:new gS(e,t,i)}class vS{constructor(t,i,s,n){this._setter=i,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Pd(t,()=>{this._dirty||(this._dirty=!0,Qm(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!n,this.__v_isReadonly=s}get value(){const t=Oe(this);return Xm(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function bS(e,t,i=!1){let s,n;const o=ye(e);return o?(s=e,n=Yi):(s=e.get,n=e.set),new vS(s,n,o||!n,i)}function tn(e,t,i,s){let n;try{n=s?e(...s):e()}catch(o){Ql(o,t,i)}return n}function Ui(e,t,i,s){if(ye(e)){const o=tn(e,t,i,s);return o&&Fm(o)&&o.catch(r=>{Ql(r,t,i)}),o}const n=[];for(let o=0;o<e.length;o++)n.push(Ui(e[o],t,i,s));return n}function Ql(e,t,i,s=!0){const n=t?t.vnode:null;if(t){let o=t.parent;const r=t.proxy,a=i;for(;o;){const c=o.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,r,a)===!1)return}o=o.parent}const l=t.appContext.config.errorHandler;if(l){tn(l,null,10,[e,r,a]);return}}yS(e,i,n,s)}function yS(e,t,i,s=!0){console.error(e)}let Dr=!1,xu=!1;const Mt=[];let os=0;const bo=[];let vs=null,kn=0;const ev=Promise.resolve();let Nd=null;function zd(e){const t=Nd||ev;return e?t.then(this?e.bind(this):e):t}function xS(e){let t=os+1,i=Mt.length;for(;t<i;){const s=t+i>>>1;Rr(Mt[s])<e?t=s+1:i=s}return t}function Bd(e){(!Mt.length||!Mt.includes(e,Dr&&e.allowRecurse?os+1:os))&&(e.id==null?Mt.push(e):Mt.splice(xS(e.id),0,e),tv())}function tv(){!Dr&&!xu&&(xu=!0,Nd=ev.then(sv))}function wS(e){const t=Mt.indexOf(e);t>os&&Mt.splice(t,1)}function $S(e){he(e)?bo.push(...e):(!vs||!vs.includes(e,e.allowRecurse?kn+1:kn))&&bo.push(e),tv()}function Of(e,t=Dr?os+1:0){for(;t<Mt.length;t++){const i=Mt[t];i&&i.pre&&(Mt.splice(t,1),t--,i())}}function iv(e){if(bo.length){const t=[...new Set(bo)];if(bo.length=0,vs){vs.push(...t);return}for(vs=t,vs.sort((i,s)=>Rr(i)-Rr(s)),kn=0;kn<vs.length;kn++)vs[kn]();vs=null,kn=0}}const Rr=e=>e.id==null?1/0:e.id,_S=(e,t)=>{const i=Rr(e)-Rr(t);if(i===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return i};function sv(e){xu=!1,Dr=!0,Mt.sort(_S);const t=Yi;try{for(os=0;os<Mt.length;os++){const i=Mt[os];i&&i.active!==!1&&tn(i,null,14)}}finally{os=0,Mt.length=0,iv(),Dr=!1,Nd=null,(Mt.length||bo.length)&&sv()}}function kS(e,t,...i){if(e.isUnmounted)return;const s=e.vnode.props||et;let n=i;const o=t.startsWith("update:"),r=o&&t.slice(7);if(r&&r in s){const u=`${r==="modelValue"?"model":r}Modifiers`,{number:d,trim:f}=s[u]||et;f&&(n=i.map(b=>Tt(b)?b.trim():b)),d&&(n=i.map(Fk))}let a,l=s[a=Bc(t)]||s[a=Bc(as(t))];!l&&o&&(l=s[a=Bc(Un(t))]),l&&Ui(l,e,6,n);const c=s[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ui(c,e,6,n)}}function nv(e,t,i=!1){const s=t.emitsCache,n=s.get(e);if(n!==void 0)return n;const o=e.emits;let r={},a=!1;if(!ye(e)){const l=c=>{const u=nv(c,t,!0);u&&(a=!0,Et(r,u))};!i&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!o&&!a?(ut(e)&&s.set(e,null),null):(he(o)?o.forEach(l=>r[l]=null):Et(r,o),ut(e)&&s.set(e,r),r)}function Jl(e,t){return!e||!Ul(t)?!1:(t=t.slice(2).replace(/Once$/,""),Re(e,t[0].toLowerCase()+t.slice(1))||Re(e,Un(t))||Re(e,t))}let Ot=null,Kl=null;function Ka(e){const t=Ot;return Ot=e,Kl=e&&e.type.__scopeId||null,t}function jd(e){Kl=e}function Yd(){Kl=null}function F(e,t=Ot,i){if(!t||e._n)return e;const s=(...n)=>{s._d&&Yf(-1);const o=Ka(t);let r;try{r=e(...n)}finally{Ka(o),s._d&&Yf(1)}return r};return s._n=!0,s._c=!0,s._d=!0,s}function Yc(e){const{type:t,vnode:i,proxy:s,withProxy:n,props:o,propsOptions:[r],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:f,setupState:b,ctx:$,inheritAttrs:x}=e;let _,R;const N=Ka(e);try{if(i.shapeFlag&4){const U=n||s;_=ns(u.call(U,U,d,o,b,f,$)),R=l}else{const U=t;_=ns(U.length>1?U(o,{attrs:l,slots:a,emit:c}):U(o,null)),R=t.props?l:SS(l)}}catch(U){fr.length=0,Ql(U,e,1),_=I(un)}let ne=_;if(R&&x!==!1){const U=Object.keys(R),{shapeFlag:me}=ne;U.length&&me&7&&(r&&U.some(Fd)&&(R=CS(R,r)),ne=Mn(ne,R))}return i.dirs&&(ne=Mn(ne),ne.dirs=ne.dirs?ne.dirs.concat(i.dirs):i.dirs),i.transition&&(ne.transition=i.transition),_=ne,Ka(N),_}const SS=e=>{let t;for(const i in e)(i==="class"||i==="style"||Ul(i))&&((t||(t={}))[i]=e[i]);return t},CS=(e,t)=>{const i={};for(const s in e)(!Fd(s)||!(s.slice(9)in t))&&(i[s]=e[s]);return i};function IS(e,t,i){const{props:s,children:n,component:o}=e,{props:r,children:a,patchFlag:l}=t,c=o.emitsOptions;if(t.dirs||t.transition)return!0;if(i&&l>=0){if(l&1024)return!0;if(l&16)return s?Pf(s,r,c):!!r;if(l&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(r[f]!==s[f]&&!Jl(c,f))return!0}}}else return(n||a)&&(!a||!a.$stable)?!0:s===r?!1:s?r?Pf(s,r,c):!0:!!r;return!1}function Pf(e,t,i){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let n=0;n<s.length;n++){const o=s[n];if(t[o]!==e[o]&&!Jl(i,o))return!0}return!1}function TS({vnode:e,parent:t},i){for(;t&&t.subTree===e;)(e=t.vnode).el=i,t=t.parent}const FS=e=>e.__isSuspense;function DS(e,t){t&&t.pendingBranch?he(e)?t.effects.push(...e):t.effects.push(e):$S(e)}function ov(e,t){return Ud(e,null,t)}const Ia={};function _s(e,t,i){return Ud(e,t,i)}function Ud(e,t,{immediate:i,deep:s,flush:n,onTrack:o,onTrigger:r}=et){var a;const l=Am()===((a=Rt)==null?void 0:a.scope)?Rt:null;let c,u=!1,d=!1;if(xt(e)?(c=()=>e.value,u=Ja(e)):en(e)?(c=()=>e,s=!0):he(e)?(d=!0,u=e.some(U=>en(U)||Ja(U)),c=()=>e.map(U=>{if(xt(U))return U.value;if(en(U))return Cn(U);if(ye(U))return tn(U,l,2)})):ye(e)?t?c=()=>tn(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),Ui(e,l,3,[b])}:c=Yi,t&&s){const U=c;c=()=>Cn(U())}let f,b=U=>{f=N.onStop=()=>{tn(U,l,4)}},$;if(Pr)if(b=Yi,t?i&&Ui(t,l,3,[c(),d?[]:void 0,b]):c(),n==="sync"){const U=wC();$=U.__watcherHandles||(U.__watcherHandles=[])}else return Yi;let x=d?new Array(e.length).fill(Ia):Ia;const _=()=>{if(N.active)if(t){const U=N.run();(s||u||(d?U.some((me,De)=>Tr(me,x[De])):Tr(U,x)))&&(f&&f(),Ui(t,l,3,[U,x===Ia?void 0:d&&x[0]===Ia?[]:x,b]),x=U)}else N.run()};_.allowRecurse=!!t;let R;n==="sync"?R=_:n==="post"?R=()=>ii(_,l&&l.suspense):(_.pre=!0,l&&(_.id=l.uid),R=()=>Bd(_));const N=new Pd(c,R);t?i?_():x=N.run():n==="post"?ii(N.run.bind(N),l&&l.suspense):N.run();const ne=()=>{N.stop(),l&&l.scope&&Dd(l.scope.effects,N)};return $&&$.push(ne),ne}function RS(e,t,i){const s=this.proxy,n=Tt(e)?e.includes(".")?rv(s,e):()=>s[e]:e.bind(s,s);let o;ye(t)?o=t:(o=t.handler,i=t);const r=Rt;Oo(this);const a=Ud(n,o.bind(s),i);return r?Oo(r):Rn(),a}function rv(e,t){const i=t.split(".");return()=>{let s=e;for(let n=0;n<i.length&&s;n++)s=s[i[n]];return s}}function Cn(e,t){if(!ut(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),xt(e))Cn(e.value,t);else if(he(e))for(let i=0;i<e.length;i++)Cn(e[i],t);else if(Tm(e)||vo(e))e.forEach(i=>{Cn(i,t)});else if(Rm(e))for(const i in e)Cn(e[i],t);return e}function Qr(e,t){const i=Ot;if(i===null)return e;const s=nc(i)||i.proxy,n=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[r,a,l,c=et]=t[o];r&&(ye(r)&&(r={mounted:r,updated:r}),r.deep&&Cn(a),n.push({dir:r,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return e}function xn(e,t,i,s){const n=e.dirs,o=t&&t.dirs;for(let r=0;r<n.length;r++){const a=n[r];o&&(a.oldValue=o[r].value);let l=a.dir[s];l&&(Bo(),Ui(l,i,8,[e.el,a,e,t]),jo())}}function ve(e,t){return ye(e)?(()=>Et({name:e.name},t,{setup:e}))():e}const dr=e=>!!e.type.__asyncLoader,av=e=>e.type.__isKeepAlive;function ES(e,t){lv(e,"a",t)}function OS(e,t){lv(e,"da",t)}function lv(e,t,i=Rt){const s=e.__wdc||(e.__wdc=()=>{let n=i;for(;n;){if(n.isDeactivated)return;n=n.parent}return e()});if(ec(t,s,i),i){let n=i.parent;for(;n&&n.parent;)av(n.parent.vnode)&&PS(s,t,i,n),n=n.parent}}function PS(e,t,i,s){const n=ec(t,e,s,!0);xi(()=>{Dd(s[t],n)},i)}function ec(e,t,i=Rt,s=!1){if(i){const n=i[e]||(i[e]=[]),o=t.__weh||(t.__weh=(...r)=>{if(i.isUnmounted)return;Bo(),Oo(i);const a=Ui(t,i,e,r);return Rn(),jo(),a});return s?n.unshift(o):n.push(o),o}}const Hs=e=>(t,i=Rt)=>(!Pr||e==="sp")&&ec(e,(...s)=>t(...s),i),cv=Hs("bm"),zt=Hs("m"),LS=Hs("bu"),AS=Hs("u"),tc=Hs("bum"),xi=Hs("um"),MS=Hs("sp"),VS=Hs("rtg"),HS=Hs("rtc");function NS(e,t=Rt){ec("ec",e,t)}const uv="components";function le(e,t){return BS(uv,e,!0,t)||e}const zS=Symbol.for("v-ndc");function BS(e,t,i=!0,s=!1){const n=Ot||Rt;if(n){const o=n.type;if(e===uv){const a=bC(o,!1);if(a&&(a===t||a===as(t)||a===ql(as(t))))return o}const r=Lf(n[e]||o[e],t)||Lf(n.appContext[e],t);return!r&&s?o:r}}function Lf(e,t){return e&&(e[t]||e[as(t)]||e[ql(as(t))])}function Gn(e,t,i,s){let n;const o=i&&i[s];if(he(e)||Tt(e)){n=new Array(e.length);for(let r=0,a=e.length;r<a;r++)n[r]=t(e[r],r,void 0,o&&o[r])}else if(typeof e=="number"){n=new Array(e);for(let r=0;r<e;r++)n[r]=t(r+1,r,void 0,o&&o[r])}else if(ut(e))if(e[Symbol.iterator])n=Array.from(e,(r,a)=>t(r,a,void 0,o&&o[a]));else{const r=Object.keys(e);n=new Array(r.length);for(let a=0,l=r.length;a<l;a++){const c=r[a];n[a]=t(e[c],c,a,o&&o[a])}}else n=[];return i&&(i[s]=n),n}function je(e,t,i={},s,n){if(Ot.isCE||Ot.parent&&dr(Ot.parent)&&Ot.parent.isCE)return t!=="default"&&(i.name=t),I("slot",i,s&&s());let o=e[t];o&&o._c&&(o._d=!1),M();const r=o&&dv(o(i)),a=st(gt,{key:i.key||r&&r.key||`_${t}`},r||(s?s():[]),r&&e._===1?64:-2);return!n&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),o&&o._c&&(o._d=!0),a}function dv(e){return e.some(t=>tl(t)?!(t.type===un||t.type===gt&&!dv(t.children)):!0)?e:null}const wu=e=>e?$v(e)?nc(e)||e.proxy:wu(e.parent):null,hr=Et(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>wu(e.parent),$root:e=>wu(e.root),$emit:e=>e.emit,$options:e=>Wd(e),$forceUpdate:e=>e.f||(e.f=()=>Bd(e.update)),$nextTick:e=>e.n||(e.n=zd.bind(e.proxy)),$watch:e=>RS.bind(e)}),Uc=(e,t)=>e!==et&&!e.__isScriptSetup&&Re(e,t),jS={get({_:e},t){const{ctx:i,setupState:s,data:n,props:o,accessCache:r,type:a,appContext:l}=e;let c;if(t[0]!=="$"){const b=r[t];if(b!==void 0)switch(b){case 1:return s[t];case 2:return n[t];case 4:return i[t];case 3:return o[t]}else{if(Uc(s,t))return r[t]=1,s[t];if(n!==et&&Re(n,t))return r[t]=2,n[t];if((c=e.propsOptions[0])&&Re(c,t))return r[t]=3,o[t];if(i!==et&&Re(i,t))return r[t]=4,i[t];$u&&(r[t]=0)}}const u=hr[t];let d,f;if(u)return t==="$attrs"&&ni(e,"get",t),u(e);if((d=a.__cssModules)&&(d=d[t]))return d;if(i!==et&&Re(i,t))return r[t]=4,i[t];if(f=l.config.globalProperties,Re(f,t))return f[t]},set({_:e},t,i){const{data:s,setupState:n,ctx:o}=e;return Uc(n,t)?(n[t]=i,!0):s!==et&&Re(s,t)?(s[t]=i,!0):Re(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=i,!0)},has({_:{data:e,setupState:t,accessCache:i,ctx:s,appContext:n,propsOptions:o}},r){let a;return!!i[r]||e!==et&&Re(e,r)||Uc(t,r)||(a=o[0])&&Re(a,r)||Re(s,r)||Re(hr,r)||Re(n.config.globalProperties,r)},defineProperty(e,t,i){return i.get!=null?e._.accessCache[t]=0:Re(i,"value")&&this.set(e,t,i.value,null),Reflect.defineProperty(e,t,i)}};function Af(e){return he(e)?e.reduce((t,i)=>(t[i]=null,t),{}):e}let $u=!0;function YS(e){const t=Wd(e),i=e.proxy,s=e.ctx;$u=!1,t.beforeCreate&&Mf(t.beforeCreate,e,"bc");const{data:n,computed:o,methods:r,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:b,updated:$,activated:x,deactivated:_,beforeDestroy:R,beforeUnmount:N,destroyed:ne,unmounted:U,render:me,renderTracked:De,renderTriggered:dt,errorCaptured:Ce,serverPrefetch:Te,expose:mt,inheritAttrs:Lt,components:li,directives:$i,filters:mn}=t;if(c&&US(c,s,null),r)for(const Ge in r){const He=r[Ge];ye(He)&&(s[Ge]=He.bind(i))}if(n){const Ge=n.call(i,i);ut(Ge)&&(e.data=Wn(Ge))}if($u=!0,o)for(const Ge in o){const He=o[Ge],ps=ye(He)?He.bind(i,i):ye(He.get)?He.get.bind(i,i):Yi,Bs=!ye(He)&&ye(He.set)?He.set.bind(i):Yi,es=Xe({get:ps,set:Bs});Object.defineProperty(s,Ge,{enumerable:!0,configurable:!0,get:()=>es.value,set:ei=>es.value=ei})}if(a)for(const Ge in a)hv(a[Ge],s,i,Ge);if(l){const Ge=ye(l)?l.call(i):l;Reflect.ownKeys(Ge).forEach(He=>{yo(He,Ge[He])})}u&&Mf(u,e,"c");function Me(Ge,He){he(He)?He.forEach(ps=>Ge(ps.bind(i))):He&&Ge(He.bind(i))}if(Me(cv,d),Me(zt,f),Me(LS,b),Me(AS,$),Me(ES,x),Me(OS,_),Me(NS,Ce),Me(HS,De),Me(VS,dt),Me(tc,N),Me(xi,U),Me(MS,Te),he(mt))if(mt.length){const Ge=e.exposed||(e.exposed={});mt.forEach(He=>{Object.defineProperty(Ge,He,{get:()=>i[He],set:ps=>i[He]=ps})})}else e.exposed||(e.exposed={});me&&e.render===Yi&&(e.render=me),Lt!=null&&(e.inheritAttrs=Lt),li&&(e.components=li),$i&&(e.directives=$i)}function US(e,t,i=Yi){he(e)&&(e=_u(e));for(const s in e){const n=e[s];let o;ut(n)?"default"in n?o=fi(n.from||s,n.default,!0):o=fi(n.from||s):o=fi(n),xt(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):t[s]=o}}function Mf(e,t,i){Ui(he(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,i)}function hv(e,t,i,s){const n=s.includes(".")?rv(i,s):()=>i[s];if(Tt(e)){const o=t[e];ye(o)&&_s(n,o)}else if(ye(e))_s(n,e.bind(i));else if(ut(e))if(he(e))e.forEach(o=>hv(o,t,i,s));else{const o=ye(e.handler)?e.handler.bind(i):t[e.handler];ye(o)&&_s(n,o,e)}}function Wd(e){const t=e.type,{mixins:i,extends:s}=t,{mixins:n,optionsCache:o,config:{optionMergeStrategies:r}}=e.appContext,a=o.get(t);let l;return a?l=a:!n.length&&!i&&!s?l=t:(l={},n.length&&n.forEach(c=>el(l,c,r,!0)),el(l,t,r)),ut(t)&&o.set(t,l),l}function el(e,t,i,s=!1){const{mixins:n,extends:o}=t;o&&el(e,o,i,!0),n&&n.forEach(r=>el(e,r,i,!0));for(const r in t)if(!(s&&r==="expose")){const a=WS[r]||i&&i[r];e[r]=a?a(e[r],t[r]):t[r]}return e}const WS={data:Vf,props:Hf,emits:Hf,methods:or,computed:or,beforeCreate:Wt,created:Wt,beforeMount:Wt,mounted:Wt,beforeUpdate:Wt,updated:Wt,beforeDestroy:Wt,beforeUnmount:Wt,destroyed:Wt,unmounted:Wt,activated:Wt,deactivated:Wt,errorCaptured:Wt,serverPrefetch:Wt,components:or,directives:or,watch:qS,provide:Vf,inject:GS};function Vf(e,t){return t?e?function(){return Et(ye(e)?e.call(this,this):e,ye(t)?t.call(this,this):t)}:t:e}function GS(e,t){return or(_u(e),_u(t))}function _u(e){if(he(e)){const t={};for(let i=0;i<e.length;i++)t[e[i]]=e[i];return t}return e}function Wt(e,t){return e?[...new Set([].concat(e,t))]:t}function or(e,t){return e?Et(Object.create(null),e,t):t}function Hf(e,t){return e?he(e)&&he(t)?[...new Set([...e,...t])]:Et(Object.create(null),Af(e),Af(t??{})):t}function qS(e,t){if(!e)return t;if(!t)return e;const i=Et(Object.create(null),e);for(const s in t)i[s]=Wt(e[s],t[s]);return i}function fv(){return{app:null,config:{isNativeTag:_k,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ZS=0;function XS(e,t){return function(s,n=null){ye(s)||(s=Et({},s)),n!=null&&!ut(n)&&(n=null);const o=fv(),r=new Set;let a=!1;const l=o.app={_uid:ZS++,_component:s,_props:n,_container:null,_context:o,_instance:null,version:$C,get config(){return o.config},set config(c){},use(c,...u){return r.has(c)||(c&&ye(c.install)?(r.add(c),c.install(l,...u)):ye(c)&&(r.add(c),c(l,...u))),l},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),l},component(c,u){return u?(o.components[c]=u,l):o.components[c]},directive(c,u){return u?(o.directives[c]=u,l):o.directives[c]},mount(c,u,d){if(!a){const f=I(s,n);return f.appContext=o,u&&t?t(f,c):e(f,c,d),a=!0,l._container=c,c.__vue_app__=l,nc(f.component)||f.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return o.provides[c]=u,l},runWithContext(c){Er=l;try{return c()}finally{Er=null}}};return l}}let Er=null;function yo(e,t){if(Rt){let i=Rt.provides;const s=Rt.parent&&Rt.parent.provides;s===i&&(i=Rt.provides=Object.create(s)),i[e]=t}}function fi(e,t,i=!1){const s=Rt||Ot;if(s||Er){const n=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Er._context.provides;if(n&&e in n)return n[e];if(arguments.length>1)return i&&ye(t)?t.call(s&&s.proxy):t}}function QS(){return!!(Rt||Ot||Er)}function JS(e,t,i,s=!1){const n={},o={};Xa(o,sc,1),e.propsDefaults=Object.create(null),pv(e,t,n,o);for(const r in e.propsOptions[0])r in n||(n[r]=void 0);i?e.props=s?n:Gm(n):e.type.props?e.props=n:e.props=o,e.attrs=o}function KS(e,t,i,s){const{props:n,attrs:o,vnode:{patchFlag:r}}=e,a=Oe(n),[l]=e.propsOptions;let c=!1;if((s||r>0)&&!(r&16)){if(r&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Jl(e.emitsOptions,f))continue;const b=t[f];if(l)if(Re(o,f))b!==o[f]&&(o[f]=b,c=!0);else{const $=as(f);n[$]=ku(l,a,$,b,e,!1)}else b!==o[f]&&(o[f]=b,c=!0)}}}else{pv(e,t,n,o)&&(c=!0);let u;for(const d in a)(!t||!Re(t,d)&&((u=Un(d))===d||!Re(t,u)))&&(l?i&&(i[d]!==void 0||i[u]!==void 0)&&(n[d]=ku(l,a,d,void 0,e,!0)):delete n[d]);if(o!==a)for(const d in o)(!t||!Re(t,d))&&(delete o[d],c=!0)}c&&Is(e,"set","$attrs")}function pv(e,t,i,s){const[n,o]=e.propsOptions;let r=!1,a;if(t)for(let l in t){if(La(l))continue;const c=t[l];let u;n&&Re(n,u=as(l))?!o||!o.includes(u)?i[u]=c:(a||(a={}))[u]=c:Jl(e.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,r=!0)}if(o){const l=Oe(i),c=a||et;for(let u=0;u<o.length;u++){const d=o[u];i[d]=ku(n,l,d,c[d],e,!Re(c,d))}}return r}function ku(e,t,i,s,n,o){const r=e[i];if(r!=null){const a=Re(r,"default");if(a&&s===void 0){const l=r.default;if(r.type!==Function&&!r.skipFactory&&ye(l)){const{propsDefaults:c}=n;i in c?s=c[i]:(Oo(n),s=c[i]=l.call(null,t),Rn())}else s=l}r[0]&&(o&&!a?s=!1:r[1]&&(s===""||s===Un(i))&&(s=!0))}return s}function gv(e,t,i=!1){const s=t.propsCache,n=s.get(e);if(n)return n;const o=e.props,r={},a=[];let l=!1;if(!ye(e)){const u=d=>{l=!0;const[f,b]=gv(d,t,!0);Et(r,f),b&&a.push(...b)};!i&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!o&&!l)return ut(e)&&s.set(e,mo),mo;if(he(o))for(let u=0;u<o.length;u++){const d=as(o[u]);Nf(d)&&(r[d]=et)}else if(o)for(const u in o){const d=as(u);if(Nf(d)){const f=o[u],b=r[d]=he(f)||ye(f)?{type:f}:Et({},f);if(b){const $=jf(Boolean,b.type),x=jf(String,b.type);b[0]=$>-1,b[1]=x<0||$<x,($>-1||Re(b,"default"))&&a.push(d)}}}const c=[r,a];return ut(e)&&s.set(e,c),c}function Nf(e){return e[0]!=="$"}function zf(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Bf(e,t){return zf(e)===zf(t)}function jf(e,t){return he(t)?t.findIndex(i=>Bf(i,e)):ye(t)&&Bf(t,e)?0:-1}const mv=e=>e[0]==="_"||e==="$stable",Gd=e=>he(e)?e.map(ns):[ns(e)],eC=(e,t,i)=>{if(t._n)return t;const s=F((...n)=>Gd(t(...n)),i);return s._c=!1,s},vv=(e,t,i)=>{const s=e._ctx;for(const n in e){if(mv(n))continue;const o=e[n];if(ye(o))t[n]=eC(n,o,s);else if(o!=null){const r=Gd(o);t[n]=()=>r}}},bv=(e,t)=>{const i=Gd(t);e.slots.default=()=>i},tC=(e,t)=>{if(e.vnode.shapeFlag&32){const i=t._;i?(e.slots=Oe(t),Xa(t,"_",i)):vv(t,e.slots={})}else e.slots={},t&&bv(e,t);Xa(e.slots,sc,1)},iC=(e,t,i)=>{const{vnode:s,slots:n}=e;let o=!0,r=et;if(s.shapeFlag&32){const a=t._;a?i&&a===1?o=!1:(Et(n,t),!i&&a===1&&delete n._):(o=!t.$stable,vv(t,n)),r=t}else t&&(bv(e,t),r={default:1});if(o)for(const a in n)!mv(a)&&!(a in r)&&delete n[a]};function Su(e,t,i,s,n=!1){if(he(e)){e.forEach((f,b)=>Su(f,t&&(he(t)?t[b]:t),i,s,n));return}if(dr(s)&&!n)return;const o=s.shapeFlag&4?nc(s.component)||s.component.proxy:s.el,r=n?null:o,{i:a,r:l}=e,c=t&&t.r,u=a.refs===et?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(Tt(c)?(u[c]=null,Re(d,c)&&(d[c]=null)):xt(c)&&(c.value=null)),ye(l))tn(l,a,12,[r,u]);else{const f=Tt(l),b=xt(l);if(f||b){const $=()=>{if(e.f){const x=f?Re(d,l)?d[l]:u[l]:l.value;n?he(x)&&Dd(x,o):he(x)?x.includes(o)||x.push(o):f?(u[l]=[o],Re(d,l)&&(d[l]=u[l])):(l.value=[o],e.k&&(u[e.k]=l.value))}else f?(u[l]=r,Re(d,l)&&(d[l]=r)):b&&(l.value=r,e.k&&(u[e.k]=r))};r?($.id=-1,ii($,i)):$()}}}const ii=DS;function sC(e){return nC(e)}function nC(e,t){const i=mu();i.__VUE__=!0;const{insert:s,remove:n,patchProp:o,createElement:r,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:b=Yi,insertStaticContent:$}=e,x=(g,v,y,S=null,T=null,E=null,G=!1,V=null,z=!!v.dynamicChildren)=>{if(g===v)return;g&&!Ko(g,v)&&(S=C(g),ei(g,T,E,!0),g=null),v.patchFlag===-2&&(z=!1,v.dynamicChildren=null);const{type:O,ref:re,shapeFlag:K}=v;switch(O){case ic:_(g,v,y,S);break;case un:R(g,v,y,S);break;case Wc:g==null&&N(v,y,S,G);break;case gt:li(g,v,y,S,T,E,G,V,z);break;default:K&1?me(g,v,y,S,T,E,G,V,z):K&6?$i(g,v,y,S,T,E,G,V,z):(K&64||K&128)&&O.process(g,v,y,S,T,E,G,V,z,j)}re!=null&&T&&Su(re,g&&g.ref,E,v||g,!v)},_=(g,v,y,S)=>{if(g==null)s(v.el=a(v.children),y,S);else{const T=v.el=g.el;v.children!==g.children&&c(T,v.children)}},R=(g,v,y,S)=>{g==null?s(v.el=l(v.children||""),y,S):v.el=g.el},N=(g,v,y,S)=>{[g.el,g.anchor]=$(g.children,v,y,S,g.el,g.anchor)},ne=({el:g,anchor:v},y,S)=>{let T;for(;g&&g!==v;)T=f(g),s(g,y,S),g=T;s(v,y,S)},U=({el:g,anchor:v})=>{let y;for(;g&&g!==v;)y=f(g),n(g),g=y;n(v)},me=(g,v,y,S,T,E,G,V,z)=>{G=G||v.type==="svg",g==null?De(v,y,S,T,E,G,V,z):Te(g,v,T,E,G,V,z)},De=(g,v,y,S,T,E,G,V)=>{let z,O;const{type:re,props:K,shapeFlag:ae,transition:ge,dirs:Ie}=g;if(z=g.el=r(g.type,E,K&&K.is,K),ae&8?u(z,g.children):ae&16&&Ce(g.children,z,null,S,T,E&&re!=="foreignObject",G,V),Ie&&xn(g,null,S,"created"),dt(z,g,g.scopeId,G,S),K){for(const Ue in K)Ue!=="value"&&!La(Ue)&&o(z,Ue,null,K[Ue],E,g.children,S,T,At);"value"in K&&o(z,"value",null,K.value),(O=K.onVnodeBeforeMount)&&is(O,S,g)}Ie&&xn(g,null,S,"beforeMount");const Ze=(!T||T&&!T.pendingBranch)&&ge&&!ge.persisted;Ze&&ge.beforeEnter(z),s(z,v,y),((O=K&&K.onVnodeMounted)||Ze||Ie)&&ii(()=>{O&&is(O,S,g),Ze&&ge.enter(z),Ie&&xn(g,null,S,"mounted")},T)},dt=(g,v,y,S,T)=>{if(y&&b(g,y),S)for(let E=0;E<S.length;E++)b(g,S[E]);if(T){let E=T.subTree;if(v===E){const G=T.vnode;dt(g,G,G.scopeId,G.slotScopeIds,T.parent)}}},Ce=(g,v,y,S,T,E,G,V,z=0)=>{for(let O=z;O<g.length;O++){const re=g[O]=V?qs(g[O]):ns(g[O]);x(null,re,v,y,S,T,E,G,V)}},Te=(g,v,y,S,T,E,G)=>{const V=v.el=g.el;let{patchFlag:z,dynamicChildren:O,dirs:re}=v;z|=g.patchFlag&16;const K=g.props||et,ae=v.props||et;let ge;y&&wn(y,!1),(ge=ae.onVnodeBeforeUpdate)&&is(ge,y,v,g),re&&xn(v,g,y,"beforeUpdate"),y&&wn(y,!0);const Ie=T&&v.type!=="foreignObject";if(O?mt(g.dynamicChildren,O,V,y,S,Ie,E):G||He(g,v,V,null,y,S,Ie,E,!1),z>0){if(z&16)Lt(V,v,K,ae,y,S,T);else if(z&2&&K.class!==ae.class&&o(V,"class",null,ae.class,T),z&4&&o(V,"style",K.style,ae.style,T),z&8){const Ze=v.dynamicProps;for(let Ue=0;Ue<Ze.length;Ue++){const _t=Ze[Ue],Mi=K[_t],Jn=ae[_t];(Jn!==Mi||_t==="value")&&o(V,_t,Mi,Jn,T,g.children,y,S,At)}}z&1&&g.children!==v.children&&u(V,v.children)}else!G&&O==null&&Lt(V,v,K,ae,y,S,T);((ge=ae.onVnodeUpdated)||re)&&ii(()=>{ge&&is(ge,y,v,g),re&&xn(v,g,y,"updated")},S)},mt=(g,v,y,S,T,E,G)=>{for(let V=0;V<v.length;V++){const z=g[V],O=v[V],re=z.el&&(z.type===gt||!Ko(z,O)||z.shapeFlag&70)?d(z.el):y;x(z,O,re,null,S,T,E,G,!0)}},Lt=(g,v,y,S,T,E,G)=>{if(y!==S){if(y!==et)for(const V in y)!La(V)&&!(V in S)&&o(g,V,y[V],null,G,v.children,T,E,At);for(const V in S){if(La(V))continue;const z=S[V],O=y[V];z!==O&&V!=="value"&&o(g,V,O,z,G,v.children,T,E,At)}"value"in S&&o(g,"value",y.value,S.value)}},li=(g,v,y,S,T,E,G,V,z)=>{const O=v.el=g?g.el:a(""),re=v.anchor=g?g.anchor:a("");let{patchFlag:K,dynamicChildren:ae,slotScopeIds:ge}=v;ge&&(V=V?V.concat(ge):ge),g==null?(s(O,y,S),s(re,y,S),Ce(v.children,y,re,T,E,G,V,z)):K>0&&K&64&&ae&&g.dynamicChildren?(mt(g.dynamicChildren,ae,y,T,E,G,V),(v.key!=null||T&&v===T.subTree)&&yv(g,v,!0)):He(g,v,y,re,T,E,G,V,z)},$i=(g,v,y,S,T,E,G,V,z)=>{v.slotScopeIds=V,g==null?v.shapeFlag&512?T.ctx.activate(v,y,S,G,z):mn(v,y,S,T,E,G,z):_i(g,v,z)},mn=(g,v,y,S,T,E,G)=>{const V=g.component=fC(g,S,T);if(av(g)&&(V.ctx.renderer=j),pC(V),V.asyncDep){if(T&&T.registerDep(V,Me),!g.el){const z=V.subTree=I(un);R(null,z,v,y)}return}Me(V,g,v,y,T,E,G)},_i=(g,v,y)=>{const S=v.component=g.component;if(IS(g,v,y))if(S.asyncDep&&!S.asyncResolved){Ge(S,v,y);return}else S.next=v,wS(S.update),S.update();else v.el=g.el,S.vnode=v},Me=(g,v,y,S,T,E,G)=>{const V=()=>{if(g.isMounted){let{next:re,bu:K,u:ae,parent:ge,vnode:Ie}=g,Ze=re,Ue;wn(g,!1),re?(re.el=Ie.el,Ge(g,re,G)):re=Ie,K&&jc(K),(Ue=re.props&&re.props.onVnodeBeforeUpdate)&&is(Ue,ge,re,Ie),wn(g,!0);const _t=Yc(g),Mi=g.subTree;g.subTree=_t,x(Mi,_t,d(Mi.el),C(Mi),g,T,E),re.el=_t.el,Ze===null&&TS(g,_t.el),ae&&ii(ae,T),(Ue=re.props&&re.props.onVnodeUpdated)&&ii(()=>is(Ue,ge,re,Ie),T)}else{let re;const{el:K,props:ae}=v,{bm:ge,m:Ie,parent:Ze}=g,Ue=dr(v);if(wn(g,!1),ge&&jc(ge),!Ue&&(re=ae&&ae.onVnodeBeforeMount)&&is(re,Ze,v),wn(g,!0),K&&Ne){const _t=()=>{g.subTree=Yc(g),Ne(K,g.subTree,g,T,null)};Ue?v.type.__asyncLoader().then(()=>!g.isUnmounted&&_t()):_t()}else{const _t=g.subTree=Yc(g);x(null,_t,y,S,g,T,E),v.el=_t.el}if(Ie&&ii(Ie,T),!Ue&&(re=ae&&ae.onVnodeMounted)){const _t=v;ii(()=>is(re,Ze,_t),T)}(v.shapeFlag&256||Ze&&dr(Ze.vnode)&&Ze.vnode.shapeFlag&256)&&g.a&&ii(g.a,T),g.isMounted=!0,v=y=S=null}},z=g.effect=new Pd(V,()=>Bd(O),g.scope),O=g.update=()=>z.run();O.id=g.uid,wn(g,!0),O()},Ge=(g,v,y)=>{v.component=g;const S=g.vnode.props;g.vnode=v,g.next=null,KS(g,v.props,S,y),iC(g,v.children,y),Bo(),Of(),jo()},He=(g,v,y,S,T,E,G,V,z=!1)=>{const O=g&&g.children,re=g?g.shapeFlag:0,K=v.children,{patchFlag:ae,shapeFlag:ge}=v;if(ae>0){if(ae&128){Bs(O,K,y,S,T,E,G,V,z);return}else if(ae&256){ps(O,K,y,S,T,E,G,V,z);return}}ge&8?(re&16&&At(O,T,E),K!==O&&u(y,K)):re&16?ge&16?Bs(O,K,y,S,T,E,G,V,z):At(O,T,E,!0):(re&8&&u(y,""),ge&16&&Ce(K,y,S,T,E,G,V,z))},ps=(g,v,y,S,T,E,G,V,z)=>{g=g||mo,v=v||mo;const O=g.length,re=v.length,K=Math.min(O,re);let ae;for(ae=0;ae<K;ae++){const ge=v[ae]=z?qs(v[ae]):ns(v[ae]);x(g[ae],ge,y,null,T,E,G,V,z)}O>re?At(g,T,E,!0,!1,K):Ce(v,y,S,T,E,G,V,z,K)},Bs=(g,v,y,S,T,E,G,V,z)=>{let O=0;const re=v.length;let K=g.length-1,ae=re-1;for(;O<=K&&O<=ae;){const ge=g[O],Ie=v[O]=z?qs(v[O]):ns(v[O]);if(Ko(ge,Ie))x(ge,Ie,y,null,T,E,G,V,z);else break;O++}for(;O<=K&&O<=ae;){const ge=g[K],Ie=v[ae]=z?qs(v[ae]):ns(v[ae]);if(Ko(ge,Ie))x(ge,Ie,y,null,T,E,G,V,z);else break;K--,ae--}if(O>K){if(O<=ae){const ge=ae+1,Ie=ge<re?v[ge].el:S;for(;O<=ae;)x(null,v[O]=z?qs(v[O]):ns(v[O]),y,Ie,T,E,G,V,z),O++}}else if(O>ae)for(;O<=K;)ei(g[O],T,E,!0),O++;else{const ge=O,Ie=O,Ze=new Map;for(O=Ie;O<=ae;O++){const ci=v[O]=z?qs(v[O]):ns(v[O]);ci.key!=null&&Ze.set(ci.key,O)}let Ue,_t=0;const Mi=ae-Ie+1;let Jn=!1,_h=0;const Go=new Array(Mi);for(O=0;O<Mi;O++)Go[O]=0;for(O=ge;O<=K;O++){const ci=g[O];if(_t>=Mi){ei(ci,T,E,!0);continue}let ts;if(ci.key!=null)ts=Ze.get(ci.key);else for(Ue=Ie;Ue<=ae;Ue++)if(Go[Ue-Ie]===0&&Ko(ci,v[Ue])){ts=Ue;break}ts===void 0?ei(ci,T,E,!0):(Go[ts-Ie]=O+1,ts>=_h?_h=ts:Jn=!0,x(ci,v[ts],y,null,T,E,G,V,z),_t++)}const kh=Jn?oC(Go):mo;for(Ue=kh.length-1,O=Mi-1;O>=0;O--){const ci=Ie+O,ts=v[ci],Sh=ci+1<re?v[ci+1].el:S;Go[O]===0?x(null,ts,y,Sh,T,E,G,V,z):Jn&&(Ue<0||O!==kh[Ue]?es(ts,y,Sh,2):Ue--)}}},es=(g,v,y,S,T=null)=>{const{el:E,type:G,transition:V,children:z,shapeFlag:O}=g;if(O&6){es(g.component.subTree,v,y,S);return}if(O&128){g.suspense.move(v,y,S);return}if(O&64){G.move(g,v,y,j);return}if(G===gt){s(E,v,y);for(let K=0;K<z.length;K++)es(z[K],v,y,S);s(g.anchor,v,y);return}if(G===Wc){ne(g,v,y);return}if(S!==2&&O&1&&V)if(S===0)V.beforeEnter(E),s(E,v,y),ii(()=>V.enter(E),T);else{const{leave:K,delayLeave:ae,afterLeave:ge}=V,Ie=()=>s(E,v,y),Ze=()=>{K(E,()=>{Ie(),ge&&ge()})};ae?ae(E,Ie,Ze):Ze()}else s(E,v,y)},ei=(g,v,y,S=!1,T=!1)=>{const{type:E,props:G,ref:V,children:z,dynamicChildren:O,shapeFlag:re,patchFlag:K,dirs:ae}=g;if(V!=null&&Su(V,null,y,g,!0),re&256){v.ctx.deactivate(g);return}const ge=re&1&&ae,Ie=!dr(g);let Ze;if(Ie&&(Ze=G&&G.onVnodeBeforeUnmount)&&is(Ze,v,g),re&6)na(g.component,y,S);else{if(re&128){g.suspense.unmount(y,S);return}ge&&xn(g,null,v,"beforeUnmount"),re&64?g.type.remove(g,v,y,T,j,S):O&&(E!==gt||K>0&&K&64)?At(O,v,y,!1,!0):(E===gt&&K&384||!T&&re&16)&&At(z,v,y),S&&Xn(g)}(Ie&&(Ze=G&&G.onVnodeUnmounted)||ge)&&ii(()=>{Ze&&is(Ze,v,g),ge&&xn(g,null,v,"unmounted")},y)},Xn=g=>{const{type:v,el:y,anchor:S,transition:T}=g;if(v===gt){Qn(y,S);return}if(v===Wc){U(g);return}const E=()=>{n(y),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(g.shapeFlag&1&&T&&!T.persisted){const{leave:G,delayLeave:V}=T,z=()=>G(y,E);V?V(g.el,E,z):z()}else E()},Qn=(g,v)=>{let y;for(;g!==v;)y=f(g),n(g),g=y;n(v)},na=(g,v,y)=>{const{bum:S,scope:T,update:E,subTree:G,um:V}=g;S&&jc(S),T.stop(),E&&(E.active=!1,ei(G,g,v,y)),V&&ii(V,v),ii(()=>{g.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},At=(g,v,y,S=!1,T=!1,E=0)=>{for(let G=E;G<g.length;G++)ei(g[G],v,y,S,T)},C=g=>g.shapeFlag&6?C(g.component.subTree):g.shapeFlag&128?g.suspense.next():f(g.anchor||g.el),X=(g,v,y)=>{g==null?v._vnode&&ei(v._vnode,null,null,!0):x(v._vnode||null,g,v,null,null,null,y),Of(),iv(),v._vnode=g},j={p:x,um:ei,m:es,r:Xn,mt:mn,mc:Ce,pc:He,pbc:mt,n:C,o:e};let ie,Ne;return t&&([ie,Ne]=t(j)),{render:X,hydrate:ie,createApp:XS(X,ie)}}function wn({effect:e,update:t},i){e.allowRecurse=t.allowRecurse=i}function yv(e,t,i=!1){const s=e.children,n=t.children;if(he(s)&&he(n))for(let o=0;o<s.length;o++){const r=s[o];let a=n[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=n[o]=qs(n[o]),a.el=r.el),i||yv(r,a)),a.type===ic&&(a.el=r.el)}}function oC(e){const t=e.slice(),i=[0];let s,n,o,r,a;const l=e.length;for(s=0;s<l;s++){const c=e[s];if(c!==0){if(n=i[i.length-1],e[n]<c){t[s]=n,i.push(s);continue}for(o=0,r=i.length-1;o<r;)a=o+r>>1,e[i[a]]<c?o=a+1:r=a;c<e[i[o]]&&(o>0&&(t[s]=i[o-1]),i[o]=s)}}for(o=i.length,r=i[o-1];o-- >0;)i[o]=r,r=t[r];return i}const rC=e=>e.__isTeleport,gt=Symbol.for("v-fgt"),ic=Symbol.for("v-txt"),un=Symbol.for("v-cmt"),Wc=Symbol.for("v-stc"),fr=[];let Bi=null;function M(e=!1){fr.push(Bi=e?null:[])}function aC(){fr.pop(),Bi=fr[fr.length-1]||null}let Or=1;function Yf(e){Or+=e}function xv(e){return e.dynamicChildren=Or>0?Bi||mo:null,aC(),Or>0&&Bi&&Bi.push(e),e}function ee(e,t,i,s,n,o){return xv(P(e,t,i,s,n,o,!0))}function st(e,t,i,s,n){return xv(I(e,t,i,s,n,!0))}function tl(e){return e?e.__v_isVNode===!0:!1}function Ko(e,t){return e.type===t.type&&e.key===t.key}const sc="__vInternal",wv=({key:e})=>e??null,Aa=({ref:e,ref_key:t,ref_for:i})=>(typeof e=="number"&&(e=""+e),e!=null?Tt(e)||xt(e)||ye(e)?{i:Ot,r:e,k:t,f:!!i}:e:null);function P(e,t=null,i=null,s=0,n=null,o=e===gt?0:1,r=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&wv(t),ref:t&&Aa(t),scopeId:Kl,slotScopeIds:null,children:i,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:Ot};return a?(qd(l,i),o&128&&e.normalize(l)):i&&(l.shapeFlag|=Tt(i)?8:16),Or>0&&!r&&Bi&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&Bi.push(l),l}const I=lC;function lC(e,t=null,i=null,s=0,n=null,o=!1){if((!e||e===zS)&&(e=un),tl(e)){const a=Mn(e,t,!0);return i&&qd(a,i),Or>0&&!o&&Bi&&(a.shapeFlag&6?Bi[Bi.indexOf(e)]=a:Bi.push(a)),a.patchFlag|=-2,a}if(yC(e)&&(e=e.__vccOpts),t){t=cC(t);let{class:a,style:l}=t;a&&!Tt(a)&&(t.class=Ht(a)),ut(l)&&(Zm(l)&&!he(l)&&(l=Et({},l)),t.style=ln(l))}const r=Tt(e)?1:FS(e)?128:rC(e)?64:ut(e)?4:ye(e)?2:0;return P(e,t,i,s,n,r,o,!0)}function cC(e){return e?Zm(e)||sc in e?Et({},e):e:null}function Mn(e,t,i=!1){const{props:s,ref:n,patchFlag:o,children:r}=e,a=t?uC(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&wv(a),ref:t&&t.ref?i&&n?he(n)?n.concat(Aa(t)):[n,Aa(t)]:Aa(t):n,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==gt?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Mn(e.ssContent),ssFallback:e.ssFallback&&Mn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function we(e=" ",t=0){return I(ic,null,e,t)}function Cu(e="",t=!1){return t?(M(),st(un,null,e)):I(un,null,e)}function ns(e){return e==null||typeof e=="boolean"?I(un):he(e)?I(gt,null,e.slice()):typeof e=="object"?qs(e):I(ic,null,String(e))}function qs(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Mn(e)}function qd(e,t){let i=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(he(t))i=16;else if(typeof t=="object")if(s&65){const n=t.default;n&&(n._c&&(n._d=!1),qd(e,n()),n._c&&(n._d=!0));return}else{i=32;const n=t._;!n&&!(sc in t)?t._ctx=Ot:n===3&&Ot&&(Ot.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ye(t)?(t={default:t,_ctx:Ot},i=32):(t=String(t),s&64?(i=16,t=[we(t)]):i=8);e.children=t,e.shapeFlag|=i}function uC(...e){const t={};for(let i=0;i<e.length;i++){const s=e[i];for(const n in s)if(n==="class")t.class!==s.class&&(t.class=Ht([t.class,s.class]));else if(n==="style")t.style=ln([t.style,s.style]);else if(Ul(n)){const o=t[n],r=s[n];r&&o!==r&&!(he(o)&&o.includes(r))&&(t[n]=o?[].concat(o,r):r)}else n!==""&&(t[n]=s[n])}return t}function is(e,t,i,s=null){Ui(e,t,7,[i,s])}const dC=fv();let hC=0;function fC(e,t,i){const s=e.type,n=(t?t.appContext:e.appContext)||dC,o={uid:hC++,vnode:e,type:s,parent:t,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,scope:new Pm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(n.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gv(s,n),emitsOptions:nv(s,n),emit:null,emitted:null,propsDefaults:et,inheritAttrs:s.inheritAttrs,ctx:et,data:et,props:et,attrs:et,slots:et,refs:et,setupState:et,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:i,suspenseId:i?i.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=kS.bind(null,o),e.ce&&e.ce(o),o}let Rt=null,Zd,eo,Uf="__VUE_INSTANCE_SETTERS__";(eo=mu()[Uf])||(eo=mu()[Uf]=[]),eo.push(e=>Rt=e),Zd=e=>{eo.length>1?eo.forEach(t=>t(e)):eo[0](e)};const Oo=e=>{Zd(e),e.scope.on()},Rn=()=>{Rt&&Rt.scope.off(),Zd(null)};function $v(e){return e.vnode.shapeFlag&4}let Pr=!1;function pC(e,t=!1){Pr=t;const{props:i,children:s}=e.vnode,n=$v(e);JS(e,i,n,t),tC(e,s);const o=n?gC(e,t):void 0;return Pr=!1,o}function gC(e,t){const i=e.type;e.accessCache=Object.create(null),e.proxy=Xl(new Proxy(e.ctx,jS));const{setup:s}=i;if(s){const n=e.setupContext=s.length>1?vC(e):null;Oo(e),Bo();const o=tn(s,e,0,[e.props,n]);if(jo(),Rn(),Fm(o)){if(o.then(Rn,Rn),t)return o.then(r=>{Wf(e,r,t)}).catch(r=>{Ql(r,e,0)});e.asyncDep=o}else Wf(e,o,t)}else _v(e,t)}function Wf(e,t,i){ye(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ut(t)&&(e.setupState=Km(t)),_v(e,i)}let Gf;function _v(e,t,i){const s=e.type;if(!e.render){if(!t&&Gf&&!s.render){const n=s.template||Wd(e).template;if(n){const{isCustomElement:o,compilerOptions:r}=e.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Et(Et({isCustomElement:o,delimiters:a},r),l);s.render=Gf(n,c)}}e.render=s.render||Yi}Oo(e),Bo(),YS(e),jo(),Rn()}function mC(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,i){return ni(e,"get","$attrs"),t[i]}}))}function vC(e){const t=i=>{e.exposed=i||{}};return{get attrs(){return mC(e)},slots:e.slots,emit:e.emit,expose:t}}function nc(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Km(Xl(e.exposed)),{get(t,i){if(i in t)return t[i];if(i in hr)return hr[i](e)},has(t,i){return i in t||i in hr}}))}function bC(e,t=!0){return ye(e)?e.displayName||e.name:e.name||t&&e.__name}function yC(e){return ye(e)&&"__vccOpts"in e}const Xe=(e,t)=>bS(e,t,Pr);function Ts(e,t,i){const s=arguments.length;return s===2?ut(t)&&!he(t)?tl(t)?I(e,null,[t]):I(e,t):I(e,null,t):(s>3?i=Array.prototype.slice.call(arguments,2):s===3&&tl(i)&&(i=[i]),I(e,t,i))}const xC=Symbol.for("v-scx"),wC=()=>fi(xC),$C="3.3.4",_C="http://www.w3.org/2000/svg",Sn=typeof document<"u"?document:null,qf=Sn&&Sn.createElement("template"),kC={insert:(e,t,i)=>{t.insertBefore(e,i||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,i,s)=>{const n=t?Sn.createElementNS(_C,e):Sn.createElement(e,i?{is:i}:void 0);return e==="select"&&s&&s.multiple!=null&&n.setAttribute("multiple",s.multiple),n},createText:e=>Sn.createTextNode(e),createComment:e=>Sn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Sn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,i,s,n,o){const r=i?i.previousSibling:t.lastChild;if(n&&(n===o||n.nextSibling))for(;t.insertBefore(n.cloneNode(!0),i),!(n===o||!(n=n.nextSibling)););else{qf.innerHTML=s?`<svg>${e}</svg>`:e;const a=qf.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,i)}return[r?r.nextSibling:t.firstChild,i?i.previousSibling:t.lastChild]}};function SC(e,t,i){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):i?e.setAttribute("class",t):e.className=t}function CC(e,t,i){const s=e.style,n=Tt(i);if(i&&!n){if(t&&!Tt(t))for(const o in t)i[o]==null&&Iu(s,o,"");for(const o in i)Iu(s,o,i[o])}else{const o=s.display;n?t!==i&&(s.cssText=i):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=o)}}const Zf=/\s*!important$/;function Iu(e,t,i){if(he(i))i.forEach(s=>Iu(e,t,s));else if(i==null&&(i=""),t.startsWith("--"))e.setProperty(t,i);else{const s=IC(e,t);Zf.test(i)?e.setProperty(Un(s),i.replace(Zf,""),"important"):e[s]=i}}const Xf=["Webkit","Moz","ms"],Gc={};function IC(e,t){const i=Gc[t];if(i)return i;let s=as(t);if(s!=="filter"&&s in e)return Gc[t]=s;s=ql(s);for(let n=0;n<Xf.length;n++){const o=Xf[n]+s;if(o in e)return Gc[t]=o}return t}const Qf="http://www.w3.org/1999/xlink";function TC(e,t,i,s,n){if(s&&t.startsWith("xlink:"))i==null?e.removeAttributeNS(Qf,t.slice(6,t.length)):e.setAttributeNS(Qf,t,i);else{const o=Lk(t);i==null||o&&!Em(i)?e.removeAttribute(t):e.setAttribute(t,o?"":i)}}function FC(e,t,i,s,n,o,r){if(t==="innerHTML"||t==="textContent"){s&&r(s,n,o),e[t]=i??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=i;const c=a==="OPTION"?e.getAttribute("value"):e.value,u=i??"";c!==u&&(e.value=u),i==null&&e.removeAttribute(t);return}let l=!1;if(i===""||i==null){const c=typeof e[t];c==="boolean"?i=Em(i):i==null&&c==="string"?(i="",l=!0):c==="number"&&(i=0,l=!0)}try{e[t]=i}catch{}l&&e.removeAttribute(t)}function DC(e,t,i,s){e.addEventListener(t,i,s)}function RC(e,t,i,s){e.removeEventListener(t,i,s)}function EC(e,t,i,s,n=null){const o=e._vei||(e._vei={}),r=o[t];if(s&&r)r.value=s;else{const[a,l]=OC(t);if(s){const c=o[t]=AC(s,n);DC(e,a,c,l)}else r&&(RC(e,a,r,l),o[t]=void 0)}}const Jf=/(?:Once|Passive|Capture)$/;function OC(e){let t;if(Jf.test(e)){t={};let s;for(;s=e.match(Jf);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Un(e.slice(2)),t]}let qc=0;const PC=Promise.resolve(),LC=()=>qc||(PC.then(()=>qc=0),qc=Date.now());function AC(e,t){const i=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=i.attached)return;Ui(MC(s,i.value),t,5,[s])};return i.value=e,i.attached=LC(),i}function MC(e,t){if(he(t)){const i=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{i.call(e),e._stopped=!0},t.map(s=>n=>!n._stopped&&s&&s(n))}else return t}const Kf=/^on[a-z]/,VC=(e,t,i,s,n=!1,o,r,a,l)=>{t==="class"?SC(e,s,n):t==="style"?CC(e,i,s):Ul(t)?Fd(t)||EC(e,t,i,s,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):HC(e,t,s,n))?FC(e,t,s,o,r,a,l):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),TC(e,t,s,n))};function HC(e,t,i,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&Kf.test(t)&&ye(i)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Kf.test(t)&&Tt(i)?!1:t in e}const NC={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},zC=(e,t)=>i=>{if(!("key"in i))return;const s=Un(i.key);if(t.some(n=>n===s||NC[n]===s))return e(i)},Jr={beforeMount(e,{value:t},{transition:i}){e._vod=e.style.display==="none"?"":e.style.display,i&&t?i.beforeEnter(e):er(e,t)},mounted(e,{value:t},{transition:i}){i&&t&&i.enter(e)},updated(e,{value:t,oldValue:i},{transition:s}){!t!=!i&&(s?t?(s.beforeEnter(e),er(e,!0),s.enter(e)):s.leave(e,()=>{er(e,!1)}):er(e,t))},beforeUnmount(e,{value:t}){er(e,t)}};function er(e,t){e.style.display=t?e._vod:"none"}const BC=Et({patchProp:VC},kC);let ep;function jC(){return ep||(ep=sC(BC))}const oc=(...e)=>{const t=jC().createApp(...e),{mount:i}=t;return t.mount=s=>{const n=YC(s);if(!n)return;const o=t._component;!ye(o)&&!o.render&&!o.template&&(o.template=n.innerHTML),n.innerHTML="";const r=i(n,!1,n instanceof SVGElement);return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),r},t};function YC(e){return Tt(e)?document.querySelector(e):e}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const no=typeof window<"u";function UC(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Be=Object.assign;function Zc(e,t){const i={};for(const s in t){const n=t[s];i[s]=qi(n)?n.map(e):e(n)}return i}const pr=()=>{},qi=Array.isArray,WC=/\/$/,GC=e=>e.replace(WC,"");function Xc(e,t,i="/"){let s,n={},o="",r="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=t.slice(0,l),o=t.slice(l+1,a>-1?a:t.length),n=e(o)),a>-1&&(s=s||t.slice(0,a),r=t.slice(a,t.length)),s=QC(s??t,i),{fullPath:s+(o&&"?")+o+r,path:s,query:n,hash:r}}function qC(e,t){const i=t.query?e(t.query):"";return t.path+(i&&"?")+i+(t.hash||"")}function tp(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function ZC(e,t,i){const s=t.matched.length-1,n=i.matched.length-1;return s>-1&&s===n&&Po(t.matched[s],i.matched[n])&&kv(t.params,i.params)&&e(t.query)===e(i.query)&&t.hash===i.hash}function Po(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function kv(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const i in e)if(!XC(e[i],t[i]))return!1;return!0}function XC(e,t){return qi(e)?ip(e,t):qi(t)?ip(t,e):e===t}function ip(e,t){return qi(t)?e.length===t.length&&e.every((i,s)=>i===t[s]):e.length===1&&e[0]===t}function QC(e,t){if(e.startsWith("/"))return e;if(!e)return t;const i=t.split("/"),s=e.split("/"),n=s[s.length-1];(n===".."||n===".")&&s.push("");let o=i.length-1,r,a;for(r=0;r<s.length;r++)if(a=s[r],a!==".")if(a==="..")o>1&&o--;else break;return i.slice(0,o).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var Lr;(function(e){e.pop="pop",e.push="push"})(Lr||(Lr={}));var gr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(gr||(gr={}));function JC(e){if(!e)if(no){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),GC(e)}const KC=/^[^#]+#/;function eI(e,t){return e.replace(KC,"#")+t}function tI(e,t){const i=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-i.left-(t.left||0),top:s.top-i.top-(t.top||0)}}const rc=()=>({left:window.pageXOffset,top:window.pageYOffset});function iI(e){let t;if("el"in e){const i=e.el,s=typeof i=="string"&&i.startsWith("#"),n=typeof i=="string"?s?document.getElementById(i.slice(1)):document.querySelector(i):i;if(!n)return;t=tI(n,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function sp(e,t){return(history.state?history.state.position-t:-1)+e}const Tu=new Map;function sI(e,t){Tu.set(e,t)}function nI(e){const t=Tu.get(e);return Tu.delete(e),t}let oI=()=>location.protocol+"//"+location.host;function Sv(e,t){const{pathname:i,search:s,hash:n}=t,o=e.indexOf("#");if(o>-1){let a=n.includes(e.slice(o))?e.slice(o).length:1,l=n.slice(a);return l[0]!=="/"&&(l="/"+l),tp(l,"")}return tp(i,e)+s+n}function rI(e,t,i,s){let n=[],o=[],r=null;const a=({state:f})=>{const b=Sv(e,location),$=i.value,x=t.value;let _=0;if(f){if(i.value=b,t.value=f,r&&r===$){r=null;return}_=x?f.position-x.position:0}else s(b);n.forEach(R=>{R(i.value,$,{delta:_,type:Lr.pop,direction:_?_>0?gr.forward:gr.back:gr.unknown})})};function l(){r=i.value}function c(f){n.push(f);const b=()=>{const $=n.indexOf(f);$>-1&&n.splice($,1)};return o.push(b),b}function u(){const{history:f}=window;f.state&&f.replaceState(Be({},f.state,{scroll:rc()}),"")}function d(){for(const f of o)f();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function np(e,t,i,s=!1,n=!1){return{back:e,current:t,forward:i,replaced:s,position:window.history.length,scroll:n?rc():null}}function aI(e){const{history:t,location:i}=window,s={value:Sv(e,i)},n={value:t.state};n.value||o(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(l,c,u){const d=e.indexOf("#"),f=d>-1?(i.host&&document.querySelector("base")?e:e.slice(d))+l:oI()+e+l;try{t[u?"replaceState":"pushState"](c,"",f),n.value=c}catch(b){console.error(b),i[u?"replace":"assign"](f)}}function r(l,c){const u=Be({},t.state,np(n.value.back,l,n.value.forward,!0),c,{position:n.value.position});o(l,u,!0),s.value=l}function a(l,c){const u=Be({},n.value,t.state,{forward:l,scroll:rc()});o(u.current,u,!0);const d=Be({},np(s.value,l,null),{position:u.position+1},c);o(l,d,!1),s.value=l}return{location:s,state:n,push:a,replace:r}}function lI(e){e=JC(e);const t=aI(e),i=rI(e,t.state,t.location,t.replace);function s(o,r=!0){r||i.pauseListeners(),history.go(o)}const n=Be({location:"",base:e,go:s,createHref:eI.bind(null,e)},t,i);return Object.defineProperty(n,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(n,"state",{enumerable:!0,get:()=>t.state.value}),n}function cI(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),lI(e)}function uI(e){return typeof e=="string"||e&&typeof e=="object"}function Cv(e){return typeof e=="string"||typeof e=="symbol"}const Ws={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Iv=Symbol("");var op;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(op||(op={}));function Lo(e,t){return Be(new Error,{type:e,[Iv]:!0},t)}function gs(e,t){return e instanceof Error&&Iv in e&&(t==null||!!(e.type&t))}const rp="[^/]+?",dI={sensitive:!1,strict:!1,start:!0,end:!0},hI=/[.+*?^${}()[\]/\\]/g;function fI(e,t){const i=Be({},dI,t),s=[];let n=i.start?"^":"";const o=[];for(const c of e){const u=c.length?[]:[90];i.strict&&!c.length&&(n+="/");for(let d=0;d<c.length;d++){const f=c[d];let b=40+(i.sensitive?.25:0);if(f.type===0)d||(n+="/"),n+=f.value.replace(hI,"\\$&"),b+=40;else if(f.type===1){const{value:$,repeatable:x,optional:_,regexp:R}=f;o.push({name:$,repeatable:x,optional:_});const N=R||rp;if(N!==rp){b+=10;try{new RegExp(`(${N})`)}catch(U){throw new Error(`Invalid custom RegExp for param "${$}" (${N}): `+U.message)}}let ne=x?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;d||(ne=_&&c.length<2?`(?:/${ne})`:"/"+ne),_&&(ne+="?"),n+=ne,b+=20,_&&(b+=-8),x&&(b+=-20),N===".*"&&(b+=-50)}u.push(b)}s.push(u)}if(i.strict&&i.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}i.strict||(n+="/?"),i.end?n+="$":i.strict&&(n+="(?:/|$)");const r=new RegExp(n,i.sensitive?"":"i");function a(c){const u=c.match(r),d={};if(!u)return null;for(let f=1;f<u.length;f++){const b=u[f]||"",$=o[f-1];d[$.name]=b&&$.repeatable?b.split("/"):b}return d}function l(c){let u="",d=!1;for(const f of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const b of f)if(b.type===0)u+=b.value;else if(b.type===1){const{value:$,repeatable:x,optional:_}=b,R=$ in c?c[$]:"";if(qi(R)&&!x)throw new Error(`Provided param "${$}" is an array but it is not repeatable (* or + modifiers)`);const N=qi(R)?R.join("/"):R;if(!N)if(_)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${$}"`);u+=N}}return u||"/"}return{re:r,score:s,keys:o,parse:a,stringify:l}}function pI(e,t){let i=0;for(;i<e.length&&i<t.length;){const s=t[i]-e[i];if(s)return s;i++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function gI(e,t){let i=0;const s=e.score,n=t.score;for(;i<s.length&&i<n.length;){const o=pI(s[i],n[i]);if(o)return o;i++}if(Math.abs(n.length-s.length)===1){if(ap(s))return 1;if(ap(n))return-1}return n.length-s.length}function ap(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const mI={type:0,value:""},vI=/[a-zA-Z0-9_]/;function bI(e){if(!e)return[[]];if(e==="/")return[[mI]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(b){throw new Error(`ERR (${i})/"${c}": ${b}`)}let i=0,s=i;const n=[];let o;function r(){o&&n.push(o),o=[]}let a=0,l,c="",u="";function d(){c&&(i===0?o.push({type:0,value:c}):i===1||i===2||i===3?(o.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&i!==2){s=i,i=4;continue}switch(i){case 0:l==="/"?(c&&d(),r()):l===":"?(d(),i=1):f();break;case 4:f(),i=s;break;case 1:l==="("?i=2:vI.test(l)?f():(d(),i=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:i=3:u+=l;break;case 3:d(),i=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return i===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),r(),n}function yI(e,t,i){const s=fI(bI(e.path),i),n=Be(s,{record:e,parent:t,children:[],alias:[]});return t&&!n.record.aliasOf==!t.record.aliasOf&&t.children.push(n),n}function xI(e,t){const i=[],s=new Map;t=up({strict:!1,end:!0,sensitive:!1},t);function n(u){return s.get(u)}function o(u,d,f){const b=!f,$=wI(u);$.aliasOf=f&&f.record;const x=up(t,u),_=[$];if("alias"in u){const ne=typeof u.alias=="string"?[u.alias]:u.alias;for(const U of ne)_.push(Be({},$,{components:f?f.record.components:$.components,path:U,aliasOf:f?f.record:$}))}let R,N;for(const ne of _){const{path:U}=ne;if(d&&U[0]!=="/"){const me=d.record.path,De=me[me.length-1]==="/"?"":"/";ne.path=d.record.path+(U&&De+U)}if(R=yI(ne,d,x),f?f.alias.push(R):(N=N||R,N!==R&&N.alias.push(R),b&&u.name&&!cp(R)&&r(u.name)),$.children){const me=$.children;for(let De=0;De<me.length;De++)o(me[De],R,f&&f.children[De])}f=f||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&l(R)}return N?()=>{r(N)}:pr}function r(u){if(Cv(u)){const d=s.get(u);d&&(s.delete(u),i.splice(i.indexOf(d),1),d.children.forEach(r),d.alias.forEach(r))}else{const d=i.indexOf(u);d>-1&&(i.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(r),u.alias.forEach(r))}}function a(){return i}function l(u){let d=0;for(;d<i.length&&gI(u,i[d])>=0&&(u.record.path!==i[d].record.path||!Tv(u,i[d]));)d++;i.splice(d,0,u),u.record.name&&!cp(u)&&s.set(u.record.name,u)}function c(u,d){let f,b={},$,x;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Lo(1,{location:u});x=f.record.name,b=Be(lp(d.params,f.keys.filter(N=>!N.optional).map(N=>N.name)),u.params&&lp(u.params,f.keys.map(N=>N.name))),$=f.stringify(b)}else if("path"in u)$=u.path,f=i.find(N=>N.re.test($)),f&&(b=f.parse($),x=f.record.name);else{if(f=d.name?s.get(d.name):i.find(N=>N.re.test(d.path)),!f)throw Lo(1,{location:u,currentLocation:d});x=f.record.name,b=Be({},d.params,u.params),$=f.stringify(b)}const _=[];let R=f;for(;R;)_.unshift(R.record),R=R.parent;return{name:x,path:$,params:b,matched:_,meta:_I(_)}}return e.forEach(u=>o(u)),{addRoute:o,resolve:c,removeRoute:r,getRoutes:a,getRecordMatcher:n}}function lp(e,t){const i={};for(const s of t)s in e&&(i[s]=e[s]);return i}function wI(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:$I(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function $I(e){const t={},i=e.props||!1;if("component"in e)t.default=i;else for(const s in e.components)t[s]=typeof i=="object"?i[s]:i;return t}function cp(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function _I(e){return e.reduce((t,i)=>Be(t,i.meta),{})}function up(e,t){const i={};for(const s in e)i[s]=s in t?t[s]:e[s];return i}function Tv(e,t){return t.children.some(i=>i===e||Tv(e,i))}const Fv=/#/g,kI=/&/g,SI=/\//g,CI=/=/g,II=/\?/g,Dv=/\+/g,TI=/%5B/g,FI=/%5D/g,Rv=/%5E/g,DI=/%60/g,Ev=/%7B/g,RI=/%7C/g,Ov=/%7D/g,EI=/%20/g;function Xd(e){return encodeURI(""+e).replace(RI,"|").replace(TI,"[").replace(FI,"]")}function OI(e){return Xd(e).replace(Ev,"{").replace(Ov,"}").replace(Rv,"^")}function Fu(e){return Xd(e).replace(Dv,"%2B").replace(EI,"+").replace(Fv,"%23").replace(kI,"%26").replace(DI,"`").replace(Ev,"{").replace(Ov,"}").replace(Rv,"^")}function PI(e){return Fu(e).replace(CI,"%3D")}function LI(e){return Xd(e).replace(Fv,"%23").replace(II,"%3F")}function AI(e){return e==null?"":LI(e).replace(SI,"%2F")}function il(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function MI(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let n=0;n<s.length;++n){const o=s[n].replace(Dv," "),r=o.indexOf("="),a=il(r<0?o:o.slice(0,r)),l=r<0?null:il(o.slice(r+1));if(a in t){let c=t[a];qi(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function dp(e){let t="";for(let i in e){const s=e[i];if(i=PI(i),s==null){s!==void 0&&(t+=(t.length?"&":"")+i);continue}(qi(s)?s.map(o=>o&&Fu(o)):[s&&Fu(s)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+i,o!=null&&(t+="="+o))})}return t}function VI(e){const t={};for(const i in e){const s=e[i];s!==void 0&&(t[i]=qi(s)?s.map(n=>n==null?null:""+n):s==null?s:""+s)}return t}const HI=Symbol(""),hp=Symbol(""),Qd=Symbol(""),Pv=Symbol(""),Du=Symbol("");function tr(){let e=[];function t(s){return e.push(s),()=>{const n=e.indexOf(s);n>-1&&e.splice(n,1)}}function i(){e=[]}return{add:t,list:()=>e.slice(),reset:i}}function Zs(e,t,i,s,n){const o=s&&(s.enterCallbacks[n]=s.enterCallbacks[n]||[]);return()=>new Promise((r,a)=>{const l=d=>{d===!1?a(Lo(4,{from:i,to:t})):d instanceof Error?a(d):uI(d)?a(Lo(2,{from:t,to:d})):(o&&s.enterCallbacks[n]===o&&typeof d=="function"&&o.push(d),r())},c=e.call(s&&s.instances[n],t,i,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function Qc(e,t,i,s){const n=[];for(const o of e)for(const r in o.components){let a=o.components[r];if(!(t!=="beforeRouteEnter"&&!o.instances[r]))if(NI(a)){const c=(a.__vccOpts||a)[t];c&&n.push(Zs(c,i,s,o,r))}else{let l=a();n.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${o.path}"`));const u=UC(c)?c.default:c;o.components[r]=u;const f=(u.__vccOpts||u)[t];return f&&Zs(f,i,s,o,r)()}))}}return n}function NI(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function fp(e){const t=fi(Qd),i=fi(Pv),s=Xe(()=>t.resolve(oe(e.to))),n=Xe(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=i.matched;if(!u||!d.length)return-1;const f=d.findIndex(Po.bind(null,u));if(f>-1)return f;const b=pp(l[c-2]);return c>1&&pp(u)===b&&d[d.length-1].path!==b?d.findIndex(Po.bind(null,l[c-2])):f}),o=Xe(()=>n.value>-1&&YI(i.params,s.value.params)),r=Xe(()=>n.value>-1&&n.value===i.matched.length-1&&kv(i.params,s.value.params));function a(l={}){return jI(l)?t[oe(e.replace)?"replace":"push"](oe(e.to)).catch(pr):Promise.resolve()}return{route:s,href:Xe(()=>s.value.href),isActive:o,isExactActive:r,navigate:a}}const zI=ve({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:fp,setup(e,{slots:t}){const i=Wn(fp(e)),{options:s}=fi(Qd),n=Xe(()=>({[gp(e.activeClass,s.linkActiveClass,"router-link-active")]:i.isActive,[gp(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:i.isExactActive}));return()=>{const o=t.default&&t.default(i);return e.custom?o:Ts("a",{"aria-current":i.isExactActive?e.ariaCurrentValue:null,href:i.href,onClick:i.navigate,class:n.value},o)}}}),BI=zI;function jI(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function YI(e,t){for(const i in t){const s=t[i],n=e[i];if(typeof s=="string"){if(s!==n)return!1}else if(!qi(n)||n.length!==s.length||s.some((o,r)=>o!==n[r]))return!1}return!0}function pp(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const gp=(e,t,i)=>e??t??i,UI=ve({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:i}){const s=fi(Du),n=Xe(()=>e.route||s.value),o=fi(hp,0),r=Xe(()=>{let c=oe(o);const{matched:u}=n.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=Xe(()=>n.value.matched[r.value]);yo(hp,Xe(()=>r.value+1)),yo(HI,a),yo(Du,n);const l=tt();return _s(()=>[l.value,a.value,e.name],([c,u,d],[f,b,$])=>{u&&(u.instances[d]=c,b&&b!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=b.leaveGuards),u.updateGuards.size||(u.updateGuards=b.updateGuards))),c&&u&&(!b||!Po(u,b)||!f)&&(u.enterCallbacks[d]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=n.value,u=e.name,d=a.value,f=d&&d.components[u];if(!f)return mp(i.default,{Component:f,route:c});const b=d.props[u],$=b?b===!0?c.params:typeof b=="function"?b(c):b:null,_=Ts(f,Be({},$,t,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return mp(i.default,{Component:_,route:c})||_}}});function mp(e,t){if(!e)return null;const i=e(t);return i.length===1?i[0]:i}const WI=UI;function GI(e){const t=xI(e.routes,e),i=e.parseQuery||MI,s=e.stringifyQuery||dp,n=e.history,o=tr(),r=tr(),a=tr(),l=dS(Ws);let c=Ws;no&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Zc.bind(null,C=>""+C),d=Zc.bind(null,AI),f=Zc.bind(null,il);function b(C,X){let j,ie;return Cv(C)?(j=t.getRecordMatcher(C),ie=X):ie=C,t.addRoute(ie,j)}function $(C){const X=t.getRecordMatcher(C);X&&t.removeRoute(X)}function x(){return t.getRoutes().map(C=>C.record)}function _(C){return!!t.getRecordMatcher(C)}function R(C,X){if(X=Be({},X||l.value),typeof C=="string"){const y=Xc(i,C,X.path),S=t.resolve({path:y.path},X),T=n.createHref(y.fullPath);return Be(y,S,{params:f(S.params),hash:il(y.hash),redirectedFrom:void 0,href:T})}let j;if("path"in C)j=Be({},C,{path:Xc(i,C.path,X.path).path});else{const y=Be({},C.params);for(const S in y)y[S]==null&&delete y[S];j=Be({},C,{params:d(y)}),X.params=d(X.params)}const ie=t.resolve(j,X),Ne=C.hash||"";ie.params=u(f(ie.params));const g=qC(s,Be({},C,{hash:OI(Ne),path:ie.path})),v=n.createHref(g);return Be({fullPath:g,hash:Ne,query:s===dp?VI(C.query):C.query||{}},ie,{redirectedFrom:void 0,href:v})}function N(C){return typeof C=="string"?Xc(i,C,l.value.path):Be({},C)}function ne(C,X){if(c!==C)return Lo(8,{from:X,to:C})}function U(C){return dt(C)}function me(C){return U(Be(N(C),{replace:!0}))}function De(C){const X=C.matched[C.matched.length-1];if(X&&X.redirect){const{redirect:j}=X;let ie=typeof j=="function"?j(C):j;return typeof ie=="string"&&(ie=ie.includes("?")||ie.includes("#")?ie=N(ie):{path:ie},ie.params={}),Be({query:C.query,hash:C.hash,params:"path"in ie?{}:C.params},ie)}}function dt(C,X){const j=c=R(C),ie=l.value,Ne=C.state,g=C.force,v=C.replace===!0,y=De(j);if(y)return dt(Be(N(y),{state:typeof y=="object"?Be({},Ne,y.state):Ne,force:g,replace:v}),X||j);const S=j;S.redirectedFrom=X;let T;return!g&&ZC(s,ie,j)&&(T=Lo(16,{to:S,from:ie}),es(ie,ie,!0,!1)),(T?Promise.resolve(T):mt(S,ie)).catch(E=>gs(E)?gs(E,2)?E:Bs(E):He(E,S,ie)).then(E=>{if(E){if(gs(E,2))return dt(Be({replace:v},N(E.to),{state:typeof E.to=="object"?Be({},Ne,E.to.state):Ne,force:g}),X||S)}else E=li(S,ie,!0,v,Ne);return Lt(S,ie,E),E})}function Ce(C,X){const j=ne(C,X);return j?Promise.reject(j):Promise.resolve()}function Te(C){const X=Qn.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(C):C()}function mt(C,X){let j;const[ie,Ne,g]=qI(C,X);j=Qc(ie.reverse(),"beforeRouteLeave",C,X);for(const y of ie)y.leaveGuards.forEach(S=>{j.push(Zs(S,C,X))});const v=Ce.bind(null,C,X);return j.push(v),At(j).then(()=>{j=[];for(const y of o.list())j.push(Zs(y,C,X));return j.push(v),At(j)}).then(()=>{j=Qc(Ne,"beforeRouteUpdate",C,X);for(const y of Ne)y.updateGuards.forEach(S=>{j.push(Zs(S,C,X))});return j.push(v),At(j)}).then(()=>{j=[];for(const y of g)if(y.beforeEnter)if(qi(y.beforeEnter))for(const S of y.beforeEnter)j.push(Zs(S,C,X));else j.push(Zs(y.beforeEnter,C,X));return j.push(v),At(j)}).then(()=>(C.matched.forEach(y=>y.enterCallbacks={}),j=Qc(g,"beforeRouteEnter",C,X),j.push(v),At(j))).then(()=>{j=[];for(const y of r.list())j.push(Zs(y,C,X));return j.push(v),At(j)}).catch(y=>gs(y,8)?y:Promise.reject(y))}function Lt(C,X,j){a.list().forEach(ie=>Te(()=>ie(C,X,j)))}function li(C,X,j,ie,Ne){const g=ne(C,X);if(g)return g;const v=X===Ws,y=no?history.state:{};j&&(ie||v?n.replace(C.fullPath,Be({scroll:v&&y&&y.scroll},Ne)):n.push(C.fullPath,Ne)),l.value=C,es(C,X,j,v),Bs()}let $i;function mn(){$i||($i=n.listen((C,X,j)=>{if(!na.listening)return;const ie=R(C),Ne=De(ie);if(Ne){dt(Be(Ne,{replace:!0}),ie).catch(pr);return}c=ie;const g=l.value;no&&sI(sp(g.fullPath,j.delta),rc()),mt(ie,g).catch(v=>gs(v,12)?v:gs(v,2)?(dt(v.to,ie).then(y=>{gs(y,20)&&!j.delta&&j.type===Lr.pop&&n.go(-1,!1)}).catch(pr),Promise.reject()):(j.delta&&n.go(-j.delta,!1),He(v,ie,g))).then(v=>{v=v||li(ie,g,!1),v&&(j.delta&&!gs(v,8)?n.go(-j.delta,!1):j.type===Lr.pop&&gs(v,20)&&n.go(-1,!1)),Lt(ie,g,v)}).catch(pr)}))}let _i=tr(),Me=tr(),Ge;function He(C,X,j){Bs(C);const ie=Me.list();return ie.length?ie.forEach(Ne=>Ne(C,X,j)):console.error(C),Promise.reject(C)}function ps(){return Ge&&l.value!==Ws?Promise.resolve():new Promise((C,X)=>{_i.add([C,X])})}function Bs(C){return Ge||(Ge=!C,mn(),_i.list().forEach(([X,j])=>C?j(C):X()),_i.reset()),C}function es(C,X,j,ie){const{scrollBehavior:Ne}=e;if(!no||!Ne)return Promise.resolve();const g=!j&&nI(sp(C.fullPath,0))||(ie||!j)&&history.state&&history.state.scroll||null;return zd().then(()=>Ne(C,X,g)).then(v=>v&&iI(v)).catch(v=>He(v,C,X))}const ei=C=>n.go(C);let Xn;const Qn=new Set,na={currentRoute:l,listening:!0,addRoute:b,removeRoute:$,hasRoute:_,getRoutes:x,resolve:R,options:e,push:U,replace:me,go:ei,back:()=>ei(-1),forward:()=>ei(1),beforeEach:o.add,beforeResolve:r.add,afterEach:a.add,onError:Me.add,isReady:ps,install(C){const X=this;C.component("RouterLink",BI),C.component("RouterView",WI),C.config.globalProperties.$router=X,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>oe(l)}),no&&!Xn&&l.value===Ws&&(Xn=!0,U(n.location).catch(Ne=>{}));const j={};for(const Ne in Ws)Object.defineProperty(j,Ne,{get:()=>l.value[Ne],enumerable:!0});C.provide(Qd,X),C.provide(Pv,Gm(j)),C.provide(Du,l);const ie=C.unmount;Qn.add(C),C.unmount=function(){Qn.delete(C),Qn.size<1&&(c=Ws,$i&&$i(),$i=null,l.value=Ws,Xn=!1,Ge=!1),ie()}}};function At(C){return C.reduce((X,j)=>X.then(()=>Te(j)),Promise.resolve())}return na}function qI(e,t){const i=[],s=[],n=[],o=Math.max(t.matched.length,e.matched.length);for(let r=0;r<o;r++){const a=t.matched[r];a&&(e.matched.find(c=>Po(c,a))?s.push(a):i.push(a));const l=e.matched[r];l&&(t.matched.find(c=>Po(c,l))||n.push(l))}return[i,s,n]}const Pe=(e,t)=>{const i=e.__vccOpts||e;for(const[s,n]of t)i[s]=n;return i},ZI={};function XI(e,t){return null}const QI=Pe(ZI,[["render",XI]]),JI=[{path:"/",name:"Index",component:QI}],KI=GI({history:cI(),routes:JI,linkExactActiveClass:"active"}),eT={},tT={class:"display-large"};function iT(e,t){return M(),ee("div",tT,[je(e.$slots,"default")])}const Lv=Pe(eT,[["render",iT]]),sT={},nT={class:"display-medium"};function oT(e,t){return M(),ee("div",nT,[je(e.$slots,"default")])}const Av=Pe(sT,[["render",oT]]),rT={},aT={class:"display-small"};function lT(e,t){return M(),ee("div",aT,[je(e.$slots,"default")])}const Mv=Pe(rT,[["render",lT]]),cT={},uT={class:"headline-large"};function dT(e,t){return M(),ee("div",uT,[je(e.$slots,"default")])}const Vv=Pe(cT,[["render",dT]]),hT={},fT={class:"headline-medium"};function pT(e,t){return M(),ee("div",fT,[je(e.$slots,"default")])}const Hv=Pe(hT,[["render",pT]]),gT={},mT={class:"headline-small"};function vT(e,t){return M(),ee("div",mT,[je(e.$slots,"default")])}const Nv=Pe(gT,[["render",vT]]),bT={},yT={class:"title-large"};function xT(e,t){return M(),ee("div",yT,[je(e.$slots,"default")])}const zv=Pe(bT,[["render",xT]]),wT={},$T={class:"title-medium"};function _T(e,t){return M(),ee("div",$T,[je(e.$slots,"default")])}const Bv=Pe(wT,[["render",_T]]),kT={},ST={class:"title-small"};function CT(e,t){return M(),ee("div",ST,[je(e.$slots,"default")])}const jv=Pe(kT,[["render",CT]]),IT={},TT={class:"label-large"};function FT(e,t){return M(),ee("div",TT,[je(e.$slots,"default")])}const Yv=Pe(IT,[["render",FT]]),DT={},RT={class:"label-medium"};function ET(e,t){return M(),ee("div",RT,[je(e.$slots,"default")])}const Uv=Pe(DT,[["render",ET]]),OT={},PT={class:"label-small"};function LT(e,t){return M(),ee("div",PT,[je(e.$slots,"default")])}const Wv=Pe(OT,[["render",LT]]),AT={},MT={class:"body-large"};function VT(e,t){return M(),ee("div",MT,[je(e.$slots,"default")])}const Gv=Pe(AT,[["render",VT]]),HT={},NT={class:"body-medium"};function zT(e,t){return M(),ee("div",NT,[je(e.$slots,"default")])}const qv=Pe(HT,[["render",zT]]),BT={},jT={class:"body-small"};function YT(e,t){return M(),ee("div",jT,[je(e.$slots,"default")])}const Zv=Pe(BT,[["render",YT]]),Xv=ve({__name:"ExpandLayout",setup(e){const t=tt(!1),i=s=>{t.value=s};return(s,n)=>(M(),ee("div",null,[je(s.$slots,"actions",{isExpanded:t.value,setIsExpanded:i}),je(s.$slots,"expanded-content",{isExpanded:t.value,setIsExpanded:i})]))}}),UT={},WT={class:"fixed"};function GT(e,t){return M(),ee("div",WT,[je(e.$slots,"default")])}const Qv=Pe(UT,[["render",GT]]),qT={},ZT={class:"flex"};function XT(e,t){return M(),ee("div",ZT,[je(e.$slots,"default")])}const Jv=Pe(qT,[["render",XT]]),QT={},JT={class:"relative p-2 h-full w-full"};function KT(e,t){return M(),ee("div",JT,[je(e.$slots,"default")])}const Kv=Pe(QT,[["render",KT]]),eF={},tF={class:"sticky top-0"};function iF(e,t){return M(),ee("div",tF,[je(e.$slots,"default")])}const eb=Pe(eF,[["render",iF]]),sF={},nF={class:"grid"};function oF(e,t){return M(),ee("div",nF,[je(e.$slots,"default",{},void 0,!0)])}const tb=Pe(sF,[["render",oF],["__scopeId","data-v-8ad9707e"]]),rF={},aF={class:"material-symbols-outlined relative icon"};function lF(e,t){return M(),ee("span",aF,[je(e.$slots,"default",{},void 0,!0)])}const ib=Pe(rF,[["render",lF],["__scopeId","data-v-ba4f84c9"]]),cF=ve({__name:"IconButton",props:{hasHover:{type:Boolean,default:!1},hasActive:{type:Boolean,default:!1},hasFilled:{type:Boolean,default:!1},hasShape:{type:Boolean,default:!0},type:{default:"default"}},setup(e){const t=e;return(i,s)=>(M(),ee("div",{class:Ht([t.hasHover?"icon-has-hover":"",t.hasShape?"rounded overflow-clip":"",t.type==="default"?"hover:bg-white/75":"hover:bg-error-500/75"])},[P("div",{class:Ht([[t.hasActive?"icon-has-active":"",t.hasFilled?"icon-has-filled":""],"transition-all"])},[je(i.$slots,"default",{},void 0,!0)],2)],2))}}),sb=Pe(cF,[["__scopeId","data-v-4ce49fb9"]]);function uF(e){e.component("DisplayLarge",Lv).component("DisplayMedium",Av).component("DisplaySmall",Mv).component("HeadlineLarge",Vv).component("HeadlineMedium",Hv).component("HeadlineSmall",Nv).component("TitleLarge",zv).component("TitleMedium",Bv).component("TitleSmall",jv).component("LabelLarge",Yv).component("LabelMedium",Uv).component("LabelSmall",Wv).component("BodyLarge",Gv).component("BodyMedium",qv).component("BodySmall",Zv).component("ExpandLayout",Xv).component("FixedLayout",Qv).component("FlexLayout",Jv).component("PageLayout",Kv).component("StickyLayout",eb).component("GridLayout",tb).component("Icon",ib).component("IconButton",sb)}var dF=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let nb;const ac=e=>nb=e,ob=Symbol();function Ru(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var mr;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(mr||(mr={}));function hF(){const e=Lm(!0),t=e.run(()=>tt({}));let i=[],s=[];const n=Xl({install(o){ac(n),n._a=o,o.provide(ob,n),o.config.globalProperties.$pinia=n,s.forEach(r=>i.push(r)),s=[]},use(o){return!this._a&&!dF?s.push(o):i.push(o),this},_p:i,_a:null,_e:e,_s:new Map,state:t});return n}const rb=()=>{};function vp(e,t,i,s=rb){e.push(t);const n=()=>{const o=e.indexOf(t);o>-1&&(e.splice(o,1),s())};return!i&&Am()&&Mk(n),n}function to(e,...t){e.slice().forEach(i=>{i(...t)})}const fF=e=>e();function Eu(e,t){e instanceof Map&&t instanceof Map&&t.forEach((i,s)=>e.set(s,i)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const i in t){if(!t.hasOwnProperty(i))continue;const s=t[i],n=e[i];Ru(n)&&Ru(s)&&e.hasOwnProperty(i)&&!xt(s)&&!en(s)?e[i]=Eu(n,s):e[i]=s}return e}const pF=Symbol();function gF(e){return!Ru(e)||!e.hasOwnProperty(pF)}const{assign:Gs}=Object;function mF(e){return!!(xt(e)&&e.effect)}function vF(e,t,i,s){const{state:n,actions:o,getters:r}=t,a=i.state.value[e];let l;function c(){a||(i.state.value[e]=n?n():{});const u=pS(i.state.value[e]);return Gs(u,o,Object.keys(r||{}).reduce((d,f)=>(d[f]=Xl(Xe(()=>{ac(i);const b=i._s.get(e);return r[f].call(b,b)})),d),{}))}return l=ab(e,c,t,i,s,!0),l}function ab(e,t,i={},s,n,o){let r;const a=Gs({actions:{}},i),l={deep:!0};let c,u,d=[],f=[],b;const $=s.state.value[e];!o&&!$&&(s.state.value[e]={}),tt({});let x;function _(Ce){let Te;c=u=!1,typeof Ce=="function"?(Ce(s.state.value[e]),Te={type:mr.patchFunction,storeId:e,events:b}):(Eu(s.state.value[e],Ce),Te={type:mr.patchObject,payload:Ce,storeId:e,events:b});const mt=x=Symbol();zd().then(()=>{x===mt&&(c=!0)}),u=!0,to(d,Te,s.state.value[e])}const R=o?function(){const{state:Te}=i,mt=Te?Te():{};this.$patch(Lt=>{Gs(Lt,mt)})}:rb;function N(){r.stop(),d=[],f=[],s._s.delete(e)}function ne(Ce,Te){return function(){ac(s);const mt=Array.from(arguments),Lt=[],li=[];function $i(Me){Lt.push(Me)}function mn(Me){li.push(Me)}to(f,{args:mt,name:Ce,store:me,after:$i,onError:mn});let _i;try{_i=Te.apply(this&&this.$id===e?this:me,mt)}catch(Me){throw to(li,Me),Me}return _i instanceof Promise?_i.then(Me=>(to(Lt,Me),Me)).catch(Me=>(to(li,Me),Promise.reject(Me))):(to(Lt,_i),_i)}}const U={_p:s,$id:e,$onAction:vp.bind(null,f),$patch:_,$reset:R,$subscribe(Ce,Te={}){const mt=vp(d,Ce,Te.detached,()=>Lt()),Lt=r.run(()=>_s(()=>s.state.value[e],li=>{(Te.flush==="sync"?u:c)&&Ce({storeId:e,type:mr.direct,events:b},li)},Gs({},l,Te)));return mt},$dispose:N},me=Wn(U);s._s.set(e,me);const De=s._a&&s._a.runWithContext||fF,dt=s._e.run(()=>(r=Lm(),De(()=>r.run(t))));for(const Ce in dt){const Te=dt[Ce];if(xt(Te)&&!mF(Te)||en(Te))o||($&&gF(Te)&&(xt(Te)?Te.value=$[Ce]:Eu(Te,$[Ce])),s.state.value[e][Ce]=Te);else if(typeof Te=="function"){const mt=ne(Ce,Te);dt[Ce]=mt,a.actions[Ce]=Te}}return Gs(me,dt),Gs(Oe(me),dt),Object.defineProperty(me,"$state",{get:()=>s.state.value[e],set:Ce=>{_(Te=>{Gs(Te,Ce)})}}),s._p.forEach(Ce=>{Gs(me,r.run(()=>Ce({store:me,app:s._a,pinia:s,options:a})))}),$&&o&&i.hydrate&&i.hydrate(me.$state,$),c=!0,u=!0,me}function Jd(e,t,i){let s,n;const o=typeof t=="function";typeof e=="string"?(s=e,n=o?i:t):(n=e,s=e.id);function r(a,l){const c=QS();return a=a||(c?fi(ob,null):null),a&&ac(a),a=nb,a._s.has(s)||(o?ab(s,t,n,a):vF(s,n,a)),a._s.get(s)}return r.$id=s,r}function bF(e){return typeof e=="object"&&e!==null}function bp(e,t){return e=bF(e)?e:Object.create(null),new Proxy(e,{get(i,s,n){return s==="key"?Reflect.get(i,s,n):Reflect.get(i,s,n)||Reflect.get(t,s,n)}})}function yF(e,t){return t.reduce((i,s)=>i==null?void 0:i[s],e)}function xF(e,t,i){return t.slice(0,-1).reduce((s,n)=>/^(__proto__)$/.test(n)?{}:s[n]=s[n]||{},e)[t[t.length-1]]=i,e}function wF(e,t){return t.reduce((i,s)=>{const n=s.split(".");return xF(i,n,yF(e,n))},{})}function yp(e,{storage:t,serializer:i,key:s,debug:n}){try{const o=t==null?void 0:t.getItem(s);o&&e.$patch(i==null?void 0:i.deserialize(o))}catch(o){n&&console.error(o)}}function xp(e,{storage:t,serializer:i,key:s,paths:n,debug:o}){try{const r=Array.isArray(n)?wF(e,n):e;t.setItem(s,i.serialize(r))}catch(r){o&&console.error(r)}}function $F(e={}){return t=>{const{auto:i=!1}=e,{options:{persist:s=i},store:n,pinia:o}=t;if(!s)return;if(!(n.$id in o.state.value)){const a=o._s.get(n.$id.replace("__hot:",""));a&&Promise.resolve().then(()=>a.$persist());return}const r=(Array.isArray(s)?s.map(a=>bp(a,e)):[bp(s,e)]).map(({storage:a=localStorage,beforeRestore:l=null,afterRestore:c=null,serializer:u={serialize:JSON.stringify,deserialize:JSON.parse},key:d=n.$id,paths:f=null,debug:b=!1})=>{var $;return{storage:a,beforeRestore:l,afterRestore:c,serializer:u,key:(($=e.key)!=null?$:x=>x)(typeof d=="string"?d:d(n.$id)),paths:f,debug:b}});n.$persist=()=>{r.forEach(a=>{xp(n.$state,a)})},n.$hydrate=({runHooks:a=!0}={})=>{r.forEach(l=>{const{beforeRestore:c,afterRestore:u}=l;a&&(c==null||c(t)),yp(n,l),a&&(u==null||u(t))})},r.forEach(a=>{const{beforeRestore:l,afterRestore:c}=a;l==null||l(t),yp(n,a),c==null||c(t),n.$subscribe((u,d)=>{xp(d,a)},{detached:!0})})}}var _F=$F();//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var lb;function B(){return lb.apply(null,arguments)}function kF(e){lb=e}function Zi(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function En(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function Le(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Kd(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(Le(e,t))return!1;return!0}function si(e){return e===void 0}function Fs(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function Kr(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function cb(e,t){var i=[],s,n=e.length;for(s=0;s<n;++s)i.push(t(e[s],s));return i}function Qs(e,t){for(var i in t)Le(t,i)&&(e[i]=t[i]);return Le(t,"toString")&&(e.toString=t.toString),Le(t,"valueOf")&&(e.valueOf=t.valueOf),e}function hs(e,t,i,s){return Ob(e,t,i,s,!0).utc()}function SF(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function be(e){return e._pf==null&&(e._pf=SF()),e._pf}var Ou;Array.prototype.some?Ou=Array.prototype.some:Ou=function(e){var t=Object(this),i=t.length>>>0,s;for(s=0;s<i;s++)if(s in t&&e.call(this,t[s],s,t))return!0;return!1};function eh(e){if(e._isValid==null){var t=be(e),i=Ou.call(t.parsedDateParts,function(n){return n!=null}),s=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&i);if(e._strict&&(s=s&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=s;else return s}return e._isValid}function lc(e){var t=hs(NaN);return e!=null?Qs(be(t),e):be(t).userInvalidated=!0,t}var wp=B.momentProperties=[],Jc=!1;function th(e,t){var i,s,n,o=wp.length;if(si(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),si(t._i)||(e._i=t._i),si(t._f)||(e._f=t._f),si(t._l)||(e._l=t._l),si(t._strict)||(e._strict=t._strict),si(t._tzm)||(e._tzm=t._tzm),si(t._isUTC)||(e._isUTC=t._isUTC),si(t._offset)||(e._offset=t._offset),si(t._pf)||(e._pf=be(t)),si(t._locale)||(e._locale=t._locale),o>0)for(i=0;i<o;i++)s=wp[i],n=t[s],si(n)||(e[s]=n);return e}function ea(e){th(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),Jc===!1&&(Jc=!0,B.updateOffset(this),Jc=!1)}function Xi(e){return e instanceof ea||e!=null&&e._isAMomentObject!=null}function ub(e){B.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function Li(e,t){var i=!0;return Qs(function(){if(B.deprecationHandler!=null&&B.deprecationHandler(null,e),i){var s=[],n,o,r,a=arguments.length;for(o=0;o<a;o++){if(n="",typeof arguments[o]=="object"){n+=`
[`+o+"] ";for(r in arguments[0])Le(arguments[0],r)&&(n+=r+": "+arguments[0][r]+", ");n=n.slice(0,-2)}else n=arguments[o];s.push(n)}ub(e+`
Arguments: `+Array.prototype.slice.call(s).join("")+`
`+new Error().stack),i=!1}return t.apply(this,arguments)},t)}var $p={};function db(e,t){B.deprecationHandler!=null&&B.deprecationHandler(e,t),$p[e]||(ub(t),$p[e]=!0)}B.suppressDeprecationWarnings=!1;B.deprecationHandler=null;function fs(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function CF(e){var t,i;for(i in e)Le(e,i)&&(t=e[i],fs(t)?this[i]=t:this["_"+i]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function Pu(e,t){var i=Qs({},e),s;for(s in t)Le(t,s)&&(En(e[s])&&En(t[s])?(i[s]={},Qs(i[s],e[s]),Qs(i[s],t[s])):t[s]!=null?i[s]=t[s]:delete i[s]);for(s in e)Le(e,s)&&!Le(t,s)&&En(e[s])&&(i[s]=Qs({},i[s]));return i}function ih(e){e!=null&&this.set(e)}var Lu;Object.keys?Lu=Object.keys:Lu=function(e){var t,i=[];for(t in e)Le(e,t)&&i.push(t);return i};var IF={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function TF(e,t,i){var s=this._calendar[e]||this._calendar.sameElse;return fs(s)?s.call(t,i):s}function ls(e,t,i){var s=""+Math.abs(e),n=t-s.length,o=e>=0;return(o?i?"+":"":"-")+Math.pow(10,Math.max(0,n)).toString().substr(1)+s}var sh=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Ta=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Kc={},xo={};function se(e,t,i,s){var n=s;typeof s=="string"&&(n=function(){return this[s]()}),e&&(xo[e]=n),t&&(xo[t[0]]=function(){return ls(n.apply(this,arguments),t[1],t[2])}),i&&(xo[i]=function(){return this.localeData().ordinal(n.apply(this,arguments),e)})}function FF(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function DF(e){var t=e.match(sh),i,s;for(i=0,s=t.length;i<s;i++)xo[t[i]]?t[i]=xo[t[i]]:t[i]=FF(t[i]);return function(n){var o="",r;for(r=0;r<s;r++)o+=fs(t[r])?t[r].call(n,e):t[r];return o}}function Ma(e,t){return e.isValid()?(t=hb(t,e.localeData()),Kc[t]=Kc[t]||DF(t),Kc[t](e)):e.localeData().invalidDate()}function hb(e,t){var i=5;function s(n){return t.longDateFormat(n)||n}for(Ta.lastIndex=0;i>=0&&Ta.test(e);)e=e.replace(Ta,s),Ta.lastIndex=0,i-=1;return e}var RF={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function EF(e){var t=this._longDateFormat[e],i=this._longDateFormat[e.toUpperCase()];return t||!i?t:(this._longDateFormat[e]=i.match(sh).map(function(s){return s==="MMMM"||s==="MM"||s==="DD"||s==="dddd"?s.slice(1):s}).join(""),this._longDateFormat[e])}var OF="Invalid date";function PF(){return this._invalidDate}var LF="%d",AF=/\d{1,2}/;function MF(e){return this._ordinal.replace("%d",e)}var VF={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function HF(e,t,i,s){var n=this._relativeTime[i];return fs(n)?n(e,t,i,s):n.replace(/%d/i,e)}function NF(e,t){var i=this._relativeTime[e>0?"future":"past"];return fs(i)?i(t):i.replace(/%s/i,t)}var vr={};function Yt(e,t){var i=e.toLowerCase();vr[i]=vr[i+"s"]=vr[t]=e}function Ai(e){return typeof e=="string"?vr[e]||vr[e.toLowerCase()]:void 0}function nh(e){var t={},i,s;for(s in e)Le(e,s)&&(i=Ai(s),i&&(t[i]=e[s]));return t}var fb={};function Ut(e,t){fb[e]=t}function zF(e){var t=[],i;for(i in e)Le(e,i)&&t.push({unit:i,priority:fb[i]});return t.sort(function(s,n){return s.priority-n.priority}),t}function cc(e){return e%4===0&&e%100!==0||e%400===0}function Ci(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function $e(e){var t=+e,i=0;return t!==0&&isFinite(t)&&(i=Ci(t)),i}function Yo(e,t){return function(i){return i!=null?(pb(this,e,i),B.updateOffset(this,t),this):sl(this,e)}}function sl(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function pb(e,t,i){e.isValid()&&!isNaN(i)&&(t==="FullYear"&&cc(e.year())&&e.month()===1&&e.date()===29?(i=$e(i),e._d["set"+(e._isUTC?"UTC":"")+t](i,e.month(),gc(i,e.month()))):e._d["set"+(e._isUTC?"UTC":"")+t](i))}function BF(e){return e=Ai(e),fs(this[e])?this[e]():this}function jF(e,t){if(typeof e=="object"){e=nh(e);var i=zF(e),s,n=i.length;for(s=0;s<n;s++)this[i[s].unit](e[i[s].unit])}else if(e=Ai(e),fs(this[e]))return this[e](t);return this}var gb=/\d/,wi=/\d\d/,mb=/\d{3}/,oh=/\d{4}/,uc=/[+-]?\d{6}/,rt=/\d\d?/,vb=/\d\d\d\d?/,bb=/\d\d\d\d\d\d?/,dc=/\d{1,3}/,rh=/\d{1,4}/,hc=/[+-]?\d{1,6}/,Uo=/\d+/,fc=/[+-]?\d+/,YF=/Z|[+-]\d\d:?\d\d/gi,pc=/Z|[+-]\d\d(?::?\d\d)?/gi,UF=/[+-]?\d+(\.\d{1,3})?/,ta=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,nl;nl={};function Z(e,t,i){nl[e]=fs(t)?t:function(s,n){return s&&i?i:t}}function WF(e,t){return Le(nl,e)?nl[e](t._strict,t._locale):new RegExp(GF(e))}function GF(e){return di(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,i,s,n,o){return i||s||n||o}))}function di(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var Au={};function We(e,t){var i,s=t,n;for(typeof e=="string"&&(e=[e]),Fs(t)&&(s=function(o,r){r[t]=$e(o)}),n=e.length,i=0;i<n;i++)Au[e[i]]=s}function ia(e,t){We(e,function(i,s,n,o){n._w=n._w||{},t(i,n._w,n,o)})}function qF(e,t,i){t!=null&&Le(Au,e)&&Au[e](t,i._a,i,e)}var Nt=0,ws=1,rs=2,Ct=3,ji=4,$s=5,In=6,ZF=7,XF=8;function QF(e,t){return(e%t+t)%t}var vt;Array.prototype.indexOf?vt=Array.prototype.indexOf:vt=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function gc(e,t){if(isNaN(e)||isNaN(t))return NaN;var i=QF(t,12);return e+=(t-i)/12,i===1?cc(e)?29:28:31-i%7%2}se("M",["MM",2],"Mo",function(){return this.month()+1});se("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});se("MMMM",0,0,function(e){return this.localeData().months(this,e)});Yt("month","M");Ut("month",8);Z("M",rt);Z("MM",rt,wi);Z("MMM",function(e,t){return t.monthsShortRegex(e)});Z("MMMM",function(e,t){return t.monthsRegex(e)});We(["M","MM"],function(e,t){t[ws]=$e(e)-1});We(["MMM","MMMM"],function(e,t,i,s){var n=i._locale.monthsParse(e,s,i._strict);n!=null?t[ws]=n:be(i).invalidMonth=e});var JF="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),yb="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),xb=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,KF=ta,eD=ta;function tD(e,t){return e?Zi(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||xb).test(t)?"format":"standalone"][e.month()]:Zi(this._months)?this._months:this._months.standalone}function iD(e,t){return e?Zi(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[xb.test(t)?"format":"standalone"][e.month()]:Zi(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function sD(e,t,i){var s,n,o,r=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)o=hs([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(o,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(o,"").toLocaleLowerCase();return i?t==="MMM"?(n=vt.call(this._shortMonthsParse,r),n!==-1?n:null):(n=vt.call(this._longMonthsParse,r),n!==-1?n:null):t==="MMM"?(n=vt.call(this._shortMonthsParse,r),n!==-1?n:(n=vt.call(this._longMonthsParse,r),n!==-1?n:null)):(n=vt.call(this._longMonthsParse,r),n!==-1?n:(n=vt.call(this._shortMonthsParse,r),n!==-1?n:null))}function nD(e,t,i){var s,n,o;if(this._monthsParseExact)return sD.call(this,e,t,i);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(n=hs([2e3,s]),i&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(n,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(n,"").replace(".","")+"$","i")),!i&&!this._monthsParse[s]&&(o="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[s]=new RegExp(o.replace(".",""),"i")),i&&t==="MMMM"&&this._longMonthsParse[s].test(e))return s;if(i&&t==="MMM"&&this._shortMonthsParse[s].test(e))return s;if(!i&&this._monthsParse[s].test(e))return s}}function wb(e,t){var i;if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=$e(t);else if(t=e.localeData().monthsParse(t),!Fs(t))return e}return i=Math.min(e.date(),gc(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,i),e}function $b(e){return e!=null?(wb(this,e),B.updateOffset(this,!0),this):sl(this,"Month")}function oD(){return gc(this.year(),this.month())}function rD(e){return this._monthsParseExact?(Le(this,"_monthsRegex")||_b.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(Le(this,"_monthsShortRegex")||(this._monthsShortRegex=KF),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function aD(e){return this._monthsParseExact?(Le(this,"_monthsRegex")||_b.call(this),e?this._monthsStrictRegex:this._monthsRegex):(Le(this,"_monthsRegex")||(this._monthsRegex=eD),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function _b(){function e(r,a){return a.length-r.length}var t=[],i=[],s=[],n,o;for(n=0;n<12;n++)o=hs([2e3,n]),t.push(this.monthsShort(o,"")),i.push(this.months(o,"")),s.push(this.months(o,"")),s.push(this.monthsShort(o,""));for(t.sort(e),i.sort(e),s.sort(e),n=0;n<12;n++)t[n]=di(t[n]),i[n]=di(i[n]);for(n=0;n<24;n++)s[n]=di(s[n]);this._monthsRegex=new RegExp("^("+s.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}se("Y",0,0,function(){var e=this.year();return e<=9999?ls(e,4):"+"+e});se(0,["YY",2],0,function(){return this.year()%100});se(0,["YYYY",4],0,"year");se(0,["YYYYY",5],0,"year");se(0,["YYYYYY",6,!0],0,"year");Yt("year","y");Ut("year",1);Z("Y",fc);Z("YY",rt,wi);Z("YYYY",rh,oh);Z("YYYYY",hc,uc);Z("YYYYYY",hc,uc);We(["YYYYY","YYYYYY"],Nt);We("YYYY",function(e,t){t[Nt]=e.length===2?B.parseTwoDigitYear(e):$e(e)});We("YY",function(e,t){t[Nt]=B.parseTwoDigitYear(e)});We("Y",function(e,t){t[Nt]=parseInt(e,10)});function br(e){return cc(e)?366:365}B.parseTwoDigitYear=function(e){return $e(e)+($e(e)>68?1900:2e3)};var kb=Yo("FullYear",!0);function lD(){return cc(this.year())}function cD(e,t,i,s,n,o,r){var a;return e<100&&e>=0?(a=new Date(e+400,t,i,s,n,o,r),isFinite(a.getFullYear())&&a.setFullYear(e)):a=new Date(e,t,i,s,n,o,r),a}function Ar(e){var t,i;return e<100&&e>=0?(i=Array.prototype.slice.call(arguments),i[0]=e+400,t=new Date(Date.UTC.apply(null,i)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function ol(e,t,i){var s=7+t-i,n=(7+Ar(e,0,s).getUTCDay()-t)%7;return-n+s-1}function Sb(e,t,i,s,n){var o=(7+i-s)%7,r=ol(e,s,n),a=1+7*(t-1)+o+r,l,c;return a<=0?(l=e-1,c=br(l)+a):a>br(e)?(l=e+1,c=a-br(e)):(l=e,c=a),{year:l,dayOfYear:c}}function Mr(e,t,i){var s=ol(e.year(),t,i),n=Math.floor((e.dayOfYear()-s-1)/7)+1,o,r;return n<1?(r=e.year()-1,o=n+ks(r,t,i)):n>ks(e.year(),t,i)?(o=n-ks(e.year(),t,i),r=e.year()+1):(r=e.year(),o=n),{week:o,year:r}}function ks(e,t,i){var s=ol(e,t,i),n=ol(e+1,t,i);return(br(e)-s+n)/7}se("w",["ww",2],"wo","week");se("W",["WW",2],"Wo","isoWeek");Yt("week","w");Yt("isoWeek","W");Ut("week",5);Ut("isoWeek",5);Z("w",rt);Z("ww",rt,wi);Z("W",rt);Z("WW",rt,wi);ia(["w","ww","W","WW"],function(e,t,i,s){t[s.substr(0,1)]=$e(e)});function uD(e){return Mr(e,this._week.dow,this._week.doy).week}var dD={dow:0,doy:6};function hD(){return this._week.dow}function fD(){return this._week.doy}function pD(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function gD(e){var t=Mr(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}se("d",0,"do","day");se("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});se("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});se("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});se("e",0,0,"weekday");se("E",0,0,"isoWeekday");Yt("day","d");Yt("weekday","e");Yt("isoWeekday","E");Ut("day",11);Ut("weekday",11);Ut("isoWeekday",11);Z("d",rt);Z("e",rt);Z("E",rt);Z("dd",function(e,t){return t.weekdaysMinRegex(e)});Z("ddd",function(e,t){return t.weekdaysShortRegex(e)});Z("dddd",function(e,t){return t.weekdaysRegex(e)});ia(["dd","ddd","dddd"],function(e,t,i,s){var n=i._locale.weekdaysParse(e,s,i._strict);n!=null?t.d=n:be(i).invalidWeekday=e});ia(["d","e","E"],function(e,t,i,s){t[s]=$e(e)});function mD(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function vD(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function ah(e,t){return e.slice(t,7).concat(e.slice(0,t))}var bD="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Cb="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),yD="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),xD=ta,wD=ta,$D=ta;function _D(e,t){var i=Zi(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?ah(i,this._week.dow):e?i[e.day()]:i}function kD(e){return e===!0?ah(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function SD(e){return e===!0?ah(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function CD(e,t,i){var s,n,o,r=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)o=hs([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(o,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(o,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(o,"").toLocaleLowerCase();return i?t==="dddd"?(n=vt.call(this._weekdaysParse,r),n!==-1?n:null):t==="ddd"?(n=vt.call(this._shortWeekdaysParse,r),n!==-1?n:null):(n=vt.call(this._minWeekdaysParse,r),n!==-1?n:null):t==="dddd"?(n=vt.call(this._weekdaysParse,r),n!==-1||(n=vt.call(this._shortWeekdaysParse,r),n!==-1)?n:(n=vt.call(this._minWeekdaysParse,r),n!==-1?n:null)):t==="ddd"?(n=vt.call(this._shortWeekdaysParse,r),n!==-1||(n=vt.call(this._weekdaysParse,r),n!==-1)?n:(n=vt.call(this._minWeekdaysParse,r),n!==-1?n:null)):(n=vt.call(this._minWeekdaysParse,r),n!==-1||(n=vt.call(this._weekdaysParse,r),n!==-1)?n:(n=vt.call(this._shortWeekdaysParse,r),n!==-1?n:null))}function ID(e,t,i){var s,n,o;if(this._weekdaysParseExact)return CD.call(this,e,t,i);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(n=hs([2e3,1]).day(s),i&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(n,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(n,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(n,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[s]||(o="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),this._weekdaysParse[s]=new RegExp(o.replace(".",""),"i")),i&&t==="dddd"&&this._fullWeekdaysParse[s].test(e))return s;if(i&&t==="ddd"&&this._shortWeekdaysParse[s].test(e))return s;if(i&&t==="dd"&&this._minWeekdaysParse[s].test(e))return s;if(!i&&this._weekdaysParse[s].test(e))return s}}function TD(e){if(!this.isValid())return e!=null?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return e!=null?(e=mD(e,this.localeData()),this.add(e-t,"d")):t}function FD(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function DD(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=vD(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function RD(e){return this._weekdaysParseExact?(Le(this,"_weekdaysRegex")||lh.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(Le(this,"_weekdaysRegex")||(this._weekdaysRegex=xD),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function ED(e){return this._weekdaysParseExact?(Le(this,"_weekdaysRegex")||lh.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(Le(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=wD),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function OD(e){return this._weekdaysParseExact?(Le(this,"_weekdaysRegex")||lh.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(Le(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=$D),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function lh(){function e(u,d){return d.length-u.length}var t=[],i=[],s=[],n=[],o,r,a,l,c;for(o=0;o<7;o++)r=hs([2e3,1]).day(o),a=di(this.weekdaysMin(r,"")),l=di(this.weekdaysShort(r,"")),c=di(this.weekdays(r,"")),t.push(a),i.push(l),s.push(c),n.push(a),n.push(l),n.push(c);t.sort(e),i.sort(e),s.sort(e),n.sort(e),this._weekdaysRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function ch(){return this.hours()%12||12}function PD(){return this.hours()||24}se("H",["HH",2],0,"hour");se("h",["hh",2],0,ch);se("k",["kk",2],0,PD);se("hmm",0,0,function(){return""+ch.apply(this)+ls(this.minutes(),2)});se("hmmss",0,0,function(){return""+ch.apply(this)+ls(this.minutes(),2)+ls(this.seconds(),2)});se("Hmm",0,0,function(){return""+this.hours()+ls(this.minutes(),2)});se("Hmmss",0,0,function(){return""+this.hours()+ls(this.minutes(),2)+ls(this.seconds(),2)});function Ib(e,t){se(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}Ib("a",!0);Ib("A",!1);Yt("hour","h");Ut("hour",13);function Tb(e,t){return t._meridiemParse}Z("a",Tb);Z("A",Tb);Z("H",rt);Z("h",rt);Z("k",rt);Z("HH",rt,wi);Z("hh",rt,wi);Z("kk",rt,wi);Z("hmm",vb);Z("hmmss",bb);Z("Hmm",vb);Z("Hmmss",bb);We(["H","HH"],Ct);We(["k","kk"],function(e,t,i){var s=$e(e);t[Ct]=s===24?0:s});We(["a","A"],function(e,t,i){i._isPm=i._locale.isPM(e),i._meridiem=e});We(["h","hh"],function(e,t,i){t[Ct]=$e(e),be(i).bigHour=!0});We("hmm",function(e,t,i){var s=e.length-2;t[Ct]=$e(e.substr(0,s)),t[ji]=$e(e.substr(s)),be(i).bigHour=!0});We("hmmss",function(e,t,i){var s=e.length-4,n=e.length-2;t[Ct]=$e(e.substr(0,s)),t[ji]=$e(e.substr(s,2)),t[$s]=$e(e.substr(n)),be(i).bigHour=!0});We("Hmm",function(e,t,i){var s=e.length-2;t[Ct]=$e(e.substr(0,s)),t[ji]=$e(e.substr(s))});We("Hmmss",function(e,t,i){var s=e.length-4,n=e.length-2;t[Ct]=$e(e.substr(0,s)),t[ji]=$e(e.substr(s,2)),t[$s]=$e(e.substr(n))});function LD(e){return(e+"").toLowerCase().charAt(0)==="p"}var AD=/[ap]\.?m?\.?/i,MD=Yo("Hours",!0);function VD(e,t,i){return e>11?i?"pm":"PM":i?"am":"AM"}var Fb={calendar:IF,longDateFormat:RF,invalidDate:OF,ordinal:LF,dayOfMonthOrdinalParse:AF,relativeTime:VF,months:JF,monthsShort:yb,week:dD,weekdays:bD,weekdaysMin:yD,weekdaysShort:Cb,meridiemParse:AD},at={},ir={},Vr;function HD(e,t){var i,s=Math.min(e.length,t.length);for(i=0;i<s;i+=1)if(e[i]!==t[i])return i;return s}function _p(e){return e&&e.toLowerCase().replace("_","-")}function ND(e){for(var t=0,i,s,n,o;t<e.length;){for(o=_p(e[t]).split("-"),i=o.length,s=_p(e[t+1]),s=s?s.split("-"):null;i>0;){if(n=mc(o.slice(0,i).join("-")),n)return n;if(s&&s.length>=i&&HD(o,s)>=i-1)break;i--}t++}return Vr}function zD(e){return e.match("^[^/\\\\]*$")!=null}function mc(e){var t=null,i;if(at[e]===void 0&&typeof Na<"u"&&Na&&Na.exports&&zD(e))try{t=Vr._abbr,i=require,i("./locale/"+e),sn(t)}catch{at[e]=null}return at[e]}function sn(e,t){var i;return e&&(si(t)?i=Ns(e):i=uh(e,t),i?Vr=i:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),Vr._abbr}function uh(e,t){if(t!==null){var i,s=Fb;if(t.abbr=e,at[e]!=null)db("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=at[e]._config;else if(t.parentLocale!=null)if(at[t.parentLocale]!=null)s=at[t.parentLocale]._config;else if(i=mc(t.parentLocale),i!=null)s=i._config;else return ir[t.parentLocale]||(ir[t.parentLocale]=[]),ir[t.parentLocale].push({name:e,config:t}),null;return at[e]=new ih(Pu(s,t)),ir[e]&&ir[e].forEach(function(n){uh(n.name,n.config)}),sn(e),at[e]}else return delete at[e],null}function BD(e,t){if(t!=null){var i,s,n=Fb;at[e]!=null&&at[e].parentLocale!=null?at[e].set(Pu(at[e]._config,t)):(s=mc(e),s!=null&&(n=s._config),t=Pu(n,t),s==null&&(t.abbr=e),i=new ih(t),i.parentLocale=at[e],at[e]=i),sn(e)}else at[e]!=null&&(at[e].parentLocale!=null?(at[e]=at[e].parentLocale,e===sn()&&sn(e)):at[e]!=null&&delete at[e]);return at[e]}function Ns(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Vr;if(!Zi(e)){if(t=mc(e),t)return t;e=[e]}return ND(e)}function jD(){return Lu(at)}function dh(e){var t,i=e._a;return i&&be(e).overflow===-2&&(t=i[ws]<0||i[ws]>11?ws:i[rs]<1||i[rs]>gc(i[Nt],i[ws])?rs:i[Ct]<0||i[Ct]>24||i[Ct]===24&&(i[ji]!==0||i[$s]!==0||i[In]!==0)?Ct:i[ji]<0||i[ji]>59?ji:i[$s]<0||i[$s]>59?$s:i[In]<0||i[In]>999?In:-1,be(e)._overflowDayOfYear&&(t<Nt||t>rs)&&(t=rs),be(e)._overflowWeeks&&t===-1&&(t=ZF),be(e)._overflowWeekday&&t===-1&&(t=XF),be(e).overflow=t),e}var YD=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,UD=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,WD=/Z|[+-]\d\d(?::?\d\d)?/,Fa=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],eu=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],GD=/^\/?Date\((-?\d+)/i,qD=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,ZD={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Db(e){var t,i,s=e._i,n=YD.exec(s)||UD.exec(s),o,r,a,l,c=Fa.length,u=eu.length;if(n){for(be(e).iso=!0,t=0,i=c;t<i;t++)if(Fa[t][1].exec(n[1])){r=Fa[t][0],o=Fa[t][2]!==!1;break}if(r==null){e._isValid=!1;return}if(n[3]){for(t=0,i=u;t<i;t++)if(eu[t][1].exec(n[3])){a=(n[2]||" ")+eu[t][0];break}if(a==null){e._isValid=!1;return}}if(!o&&a!=null){e._isValid=!1;return}if(n[4])if(WD.exec(n[4]))l="Z";else{e._isValid=!1;return}e._f=r+(a||"")+(l||""),fh(e)}else e._isValid=!1}function XD(e,t,i,s,n,o){var r=[QD(e),yb.indexOf(t),parseInt(i,10),parseInt(s,10),parseInt(n,10)];return o&&r.push(parseInt(o,10)),r}function QD(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function JD(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function KD(e,t,i){if(e){var s=Cb.indexOf(e),n=new Date(t[0],t[1],t[2]).getDay();if(s!==n)return be(i).weekdayMismatch=!0,i._isValid=!1,!1}return!0}function eR(e,t,i){if(e)return ZD[e];if(t)return 0;var s=parseInt(i,10),n=s%100,o=(s-n)/100;return o*60+n}function Rb(e){var t=qD.exec(JD(e._i)),i;if(t){if(i=XD(t[4],t[3],t[2],t[5],t[6],t[7]),!KD(t[1],i,e))return;e._a=i,e._tzm=eR(t[8],t[9],t[10]),e._d=Ar.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),be(e).rfc2822=!0}else e._isValid=!1}function tR(e){var t=GD.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(Db(e),e._isValid===!1)delete e._isValid;else return;if(Rb(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:B.createFromInputFallback(e)}B.createFromInputFallback=Li("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function oo(e,t,i){return e??t??i}function iR(e){var t=new Date(B.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function hh(e){var t,i,s=[],n,o,r;if(!e._d){for(n=iR(e),e._w&&e._a[rs]==null&&e._a[ws]==null&&sR(e),e._dayOfYear!=null&&(r=oo(e._a[Nt],n[Nt]),(e._dayOfYear>br(r)||e._dayOfYear===0)&&(be(e)._overflowDayOfYear=!0),i=Ar(r,0,e._dayOfYear),e._a[ws]=i.getUTCMonth(),e._a[rs]=i.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=s[t]=n[t];for(;t<7;t++)e._a[t]=s[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[Ct]===24&&e._a[ji]===0&&e._a[$s]===0&&e._a[In]===0&&(e._nextDay=!0,e._a[Ct]=0),e._d=(e._useUTC?Ar:cD).apply(null,s),o=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[Ct]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==o&&(be(e).weekdayMismatch=!0)}}function sR(e){var t,i,s,n,o,r,a,l,c;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(o=1,r=4,i=oo(t.GG,e._a[Nt],Mr(nt(),1,4).year),s=oo(t.W,1),n=oo(t.E,1),(n<1||n>7)&&(l=!0)):(o=e._locale._week.dow,r=e._locale._week.doy,c=Mr(nt(),o,r),i=oo(t.gg,e._a[Nt],c.year),s=oo(t.w,c.week),t.d!=null?(n=t.d,(n<0||n>6)&&(l=!0)):t.e!=null?(n=t.e+o,(t.e<0||t.e>6)&&(l=!0)):n=o),s<1||s>ks(i,o,r)?be(e)._overflowWeeks=!0:l!=null?be(e)._overflowWeekday=!0:(a=Sb(i,s,n,o,r),e._a[Nt]=a.year,e._dayOfYear=a.dayOfYear)}B.ISO_8601=function(){};B.RFC_2822=function(){};function fh(e){if(e._f===B.ISO_8601){Db(e);return}if(e._f===B.RFC_2822){Rb(e);return}e._a=[],be(e).empty=!0;var t=""+e._i,i,s,n,o,r,a=t.length,l=0,c,u;for(n=hb(e._f,e._locale).match(sh)||[],u=n.length,i=0;i<u;i++)o=n[i],s=(t.match(WF(o,e))||[])[0],s&&(r=t.substr(0,t.indexOf(s)),r.length>0&&be(e).unusedInput.push(r),t=t.slice(t.indexOf(s)+s.length),l+=s.length),xo[o]?(s?be(e).empty=!1:be(e).unusedTokens.push(o),qF(o,s,e)):e._strict&&!s&&be(e).unusedTokens.push(o);be(e).charsLeftOver=a-l,t.length>0&&be(e).unusedInput.push(t),e._a[Ct]<=12&&be(e).bigHour===!0&&e._a[Ct]>0&&(be(e).bigHour=void 0),be(e).parsedDateParts=e._a.slice(0),be(e).meridiem=e._meridiem,e._a[Ct]=nR(e._locale,e._a[Ct],e._meridiem),c=be(e).era,c!==null&&(e._a[Nt]=e._locale.erasConvertYear(c,e._a[Nt])),hh(e),dh(e)}function nR(e,t,i){var s;return i==null?t:e.meridiemHour!=null?e.meridiemHour(t,i):(e.isPM!=null&&(s=e.isPM(i),s&&t<12&&(t+=12),!s&&t===12&&(t=0)),t)}function oR(e){var t,i,s,n,o,r,a=!1,l=e._f.length;if(l===0){be(e).invalidFormat=!0,e._d=new Date(NaN);return}for(n=0;n<l;n++)o=0,r=!1,t=th({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[n],fh(t),eh(t)&&(r=!0),o+=be(t).charsLeftOver,o+=be(t).unusedTokens.length*10,be(t).score=o,a?o<s&&(s=o,i=t):(s==null||o<s||r)&&(s=o,i=t,r&&(a=!0));Qs(e,i||t)}function rR(e){if(!e._d){var t=nh(e._i),i=t.day===void 0?t.date:t.day;e._a=cb([t.year,t.month,i,t.hour,t.minute,t.second,t.millisecond],function(s){return s&&parseInt(s,10)}),hh(e)}}function aR(e){var t=new ea(dh(Eb(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function Eb(e){var t=e._i,i=e._f;return e._locale=e._locale||Ns(e._l),t===null||i===void 0&&t===""?lc({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),Xi(t)?new ea(dh(t)):(Kr(t)?e._d=t:Zi(i)?oR(e):i?fh(e):lR(e),eh(e)||(e._d=null),e))}function lR(e){var t=e._i;si(t)?e._d=new Date(B.now()):Kr(t)?e._d=new Date(t.valueOf()):typeof t=="string"?tR(e):Zi(t)?(e._a=cb(t.slice(0),function(i){return parseInt(i,10)}),hh(e)):En(t)?rR(e):Fs(t)?e._d=new Date(t):B.createFromInputFallback(e)}function Ob(e,t,i,s,n){var o={};return(t===!0||t===!1)&&(s=t,t=void 0),(i===!0||i===!1)&&(s=i,i=void 0),(En(e)&&Kd(e)||Zi(e)&&e.length===0)&&(e=void 0),o._isAMomentObject=!0,o._useUTC=o._isUTC=n,o._l=i,o._i=e,o._f=t,o._strict=s,aR(o)}function nt(e,t,i,s){return Ob(e,t,i,s,!1)}var cR=Li("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=nt.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:lc()}),uR=Li("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=nt.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:lc()});function Pb(e,t){var i,s;if(t.length===1&&Zi(t[0])&&(t=t[0]),!t.length)return nt();for(i=t[0],s=1;s<t.length;++s)(!t[s].isValid()||t[s][e](i))&&(i=t[s]);return i}function dR(){var e=[].slice.call(arguments,0);return Pb("isBefore",e)}function hR(){var e=[].slice.call(arguments,0);return Pb("isAfter",e)}var fR=function(){return Date.now?Date.now():+new Date},sr=["year","quarter","month","week","day","hour","minute","second","millisecond"];function pR(e){var t,i=!1,s,n=sr.length;for(t in e)if(Le(e,t)&&!(vt.call(sr,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(s=0;s<n;++s)if(e[sr[s]]){if(i)return!1;parseFloat(e[sr[s]])!==$e(e[sr[s]])&&(i=!0)}return!0}function gR(){return this._isValid}function mR(){return Ji(NaN)}function vc(e){var t=nh(e),i=t.year||0,s=t.quarter||0,n=t.month||0,o=t.week||t.isoWeek||0,r=t.day||0,a=t.hour||0,l=t.minute||0,c=t.second||0,u=t.millisecond||0;this._isValid=pR(t),this._milliseconds=+u+c*1e3+l*6e4+a*1e3*60*60,this._days=+r+o*7,this._months=+n+s*3+i*12,this._data={},this._locale=Ns(),this._bubble()}function Va(e){return e instanceof vc}function Mu(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function vR(e,t,i){var s=Math.min(e.length,t.length),n=Math.abs(e.length-t.length),o=0,r;for(r=0;r<s;r++)(i&&e[r]!==t[r]||!i&&$e(e[r])!==$e(t[r]))&&o++;return o+n}function Lb(e,t){se(e,0,0,function(){var i=this.utcOffset(),s="+";return i<0&&(i=-i,s="-"),s+ls(~~(i/60),2)+t+ls(~~i%60,2)})}Lb("Z",":");Lb("ZZ","");Z("Z",pc);Z("ZZ",pc);We(["Z","ZZ"],function(e,t,i){i._useUTC=!0,i._tzm=ph(pc,e)});var bR=/([\+\-]|\d\d)/gi;function ph(e,t){var i=(t||"").match(e),s,n,o;return i===null?null:(s=i[i.length-1]||[],n=(s+"").match(bR)||["-",0,0],o=+(n[1]*60)+$e(n[2]),o===0?0:n[0]==="+"?o:-o)}function gh(e,t){var i,s;return t._isUTC?(i=t.clone(),s=(Xi(e)||Kr(e)?e.valueOf():nt(e).valueOf())-i.valueOf(),i._d.setTime(i._d.valueOf()+s),B.updateOffset(i,!1),i):nt(e).local()}function Vu(e){return-Math.round(e._d.getTimezoneOffset())}B.updateOffset=function(){};function yR(e,t,i){var s=this._offset||0,n;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=ph(pc,e),e===null)return this}else Math.abs(e)<16&&!i&&(e=e*60);return!this._isUTC&&t&&(n=Vu(this)),this._offset=e,this._isUTC=!0,n!=null&&this.add(n,"m"),s!==e&&(!t||this._changeInProgress?Vb(this,Ji(e-s,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,B.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?s:Vu(this)}function xR(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function wR(e){return this.utcOffset(0,e)}function $R(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Vu(this),"m")),this}function _R(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=ph(YF,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function kR(e){return this.isValid()?(e=e?nt(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function SR(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function CR(){if(!si(this._isDSTShifted))return this._isDSTShifted;var e={},t;return th(e,this),e=Eb(e),e._a?(t=e._isUTC?hs(e._a):nt(e._a),this._isDSTShifted=this.isValid()&&vR(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function IR(){return this.isValid()?!this._isUTC:!1}function TR(){return this.isValid()?this._isUTC:!1}function Ab(){return this.isValid()?this._isUTC&&this._offset===0:!1}var FR=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,DR=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Ji(e,t){var i=e,s=null,n,o,r;return Va(e)?i={ms:e._milliseconds,d:e._days,M:e._months}:Fs(e)||!isNaN(+e)?(i={},t?i[t]=+e:i.milliseconds=+e):(s=FR.exec(e))?(n=s[1]==="-"?-1:1,i={y:0,d:$e(s[rs])*n,h:$e(s[Ct])*n,m:$e(s[ji])*n,s:$e(s[$s])*n,ms:$e(Mu(s[In]*1e3))*n}):(s=DR.exec(e))?(n=s[1]==="-"?-1:1,i={y:$n(s[2],n),M:$n(s[3],n),w:$n(s[4],n),d:$n(s[5],n),h:$n(s[6],n),m:$n(s[7],n),s:$n(s[8],n)}):i==null?i={}:typeof i=="object"&&("from"in i||"to"in i)&&(r=RR(nt(i.from),nt(i.to)),i={},i.ms=r.milliseconds,i.M=r.months),o=new vc(i),Va(e)&&Le(e,"_locale")&&(o._locale=e._locale),Va(e)&&Le(e,"_isValid")&&(o._isValid=e._isValid),o}Ji.fn=vc.prototype;Ji.invalid=mR;function $n(e,t){var i=e&&parseFloat(e.replace(",","."));return(isNaN(i)?0:i)*t}function kp(e,t){var i={};return i.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(i.months,"M").isAfter(t)&&--i.months,i.milliseconds=+t-+e.clone().add(i.months,"M"),i}function RR(e,t){var i;return e.isValid()&&t.isValid()?(t=gh(t,e),e.isBefore(t)?i=kp(e,t):(i=kp(t,e),i.milliseconds=-i.milliseconds,i.months=-i.months),i):{milliseconds:0,months:0}}function Mb(e,t){return function(i,s){var n,o;return s!==null&&!isNaN(+s)&&(db(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),o=i,i=s,s=o),n=Ji(i,s),Vb(this,n,e),this}}function Vb(e,t,i,s){var n=t._milliseconds,o=Mu(t._days),r=Mu(t._months);e.isValid()&&(s=s??!0,r&&wb(e,sl(e,"Month")+r*i),o&&pb(e,"Date",sl(e,"Date")+o*i),n&&e._d.setTime(e._d.valueOf()+n*i),s&&B.updateOffset(e,o||r))}var ER=Mb(1,"add"),OR=Mb(-1,"subtract");function Hb(e){return typeof e=="string"||e instanceof String}function PR(e){return Xi(e)||Kr(e)||Hb(e)||Fs(e)||AR(e)||LR(e)||e===null||e===void 0}function LR(e){var t=En(e)&&!Kd(e),i=!1,s=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],n,o,r=s.length;for(n=0;n<r;n+=1)o=s[n],i=i||Le(e,o);return t&&i}function AR(e){var t=Zi(e),i=!1;return t&&(i=e.filter(function(s){return!Fs(s)&&Hb(e)}).length===0),t&&i}function MR(e){var t=En(e)&&!Kd(e),i=!1,s=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],n,o;for(n=0;n<s.length;n+=1)o=s[n],i=i||Le(e,o);return t&&i}function VR(e,t){var i=e.diff(t,"days",!0);return i<-6?"sameElse":i<-1?"lastWeek":i<0?"lastDay":i<1?"sameDay":i<2?"nextDay":i<7?"nextWeek":"sameElse"}function HR(e,t){arguments.length===1&&(arguments[0]?PR(arguments[0])?(e=arguments[0],t=void 0):MR(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var i=e||nt(),s=gh(i,this).startOf("day"),n=B.calendarFormat(this,s)||"sameElse",o=t&&(fs(t[n])?t[n].call(this,i):t[n]);return this.format(o||this.localeData().calendar(n,this,nt(i)))}function NR(){return new ea(this)}function zR(e,t){var i=Xi(e)?e:nt(e);return this.isValid()&&i.isValid()?(t=Ai(t)||"millisecond",t==="millisecond"?this.valueOf()>i.valueOf():i.valueOf()<this.clone().startOf(t).valueOf()):!1}function BR(e,t){var i=Xi(e)?e:nt(e);return this.isValid()&&i.isValid()?(t=Ai(t)||"millisecond",t==="millisecond"?this.valueOf()<i.valueOf():this.clone().endOf(t).valueOf()<i.valueOf()):!1}function jR(e,t,i,s){var n=Xi(e)?e:nt(e),o=Xi(t)?t:nt(t);return this.isValid()&&n.isValid()&&o.isValid()?(s=s||"()",(s[0]==="("?this.isAfter(n,i):!this.isBefore(n,i))&&(s[1]===")"?this.isBefore(o,i):!this.isAfter(o,i))):!1}function YR(e,t){var i=Xi(e)?e:nt(e),s;return this.isValid()&&i.isValid()?(t=Ai(t)||"millisecond",t==="millisecond"?this.valueOf()===i.valueOf():(s=i.valueOf(),this.clone().startOf(t).valueOf()<=s&&s<=this.clone().endOf(t).valueOf())):!1}function UR(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function WR(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function GR(e,t,i){var s,n,o;if(!this.isValid())return NaN;if(s=gh(e,this),!s.isValid())return NaN;switch(n=(s.utcOffset()-this.utcOffset())*6e4,t=Ai(t),t){case"year":o=Ha(this,s)/12;break;case"month":o=Ha(this,s);break;case"quarter":o=Ha(this,s)/3;break;case"second":o=(this-s)/1e3;break;case"minute":o=(this-s)/6e4;break;case"hour":o=(this-s)/36e5;break;case"day":o=(this-s-n)/864e5;break;case"week":o=(this-s-n)/6048e5;break;default:o=this-s}return i?o:Ci(o)}function Ha(e,t){if(e.date()<t.date())return-Ha(t,e);var i=(t.year()-e.year())*12+(t.month()-e.month()),s=e.clone().add(i,"months"),n,o;return t-s<0?(n=e.clone().add(i-1,"months"),o=(t-s)/(s-n)):(n=e.clone().add(i+1,"months"),o=(t-s)/(n-s)),-(i+o)||0}B.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";B.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function qR(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function ZR(e){if(!this.isValid())return null;var t=e!==!0,i=t?this.clone().utc():this;return i.year()<0||i.year()>9999?Ma(i,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):fs(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Ma(i,"Z")):Ma(i,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function XR(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",i,s,n,o;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),i="["+e+'("]',s=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",n="-MM-DD[T]HH:mm:ss.SSS",o=t+'[")]',this.format(i+s+n+o)}function QR(e){e||(e=this.isUtc()?B.defaultFormatUtc:B.defaultFormat);var t=Ma(this,e);return this.localeData().postformat(t)}function JR(e,t){return this.isValid()&&(Xi(e)&&e.isValid()||nt(e).isValid())?Ji({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function KR(e){return this.from(nt(),e)}function eE(e,t){return this.isValid()&&(Xi(e)&&e.isValid()||nt(e).isValid())?Ji({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function tE(e){return this.to(nt(),e)}function Nb(e){var t;return e===void 0?this._locale._abbr:(t=Ns(e),t!=null&&(this._locale=t),this)}var zb=Li("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function Bb(){return this._locale}var rl=1e3,wo=60*rl,al=60*wo,jb=(365*400+97)*24*al;function $o(e,t){return(e%t+t)%t}function Yb(e,t,i){return e<100&&e>=0?new Date(e+400,t,i)-jb:new Date(e,t,i).valueOf()}function Ub(e,t,i){return e<100&&e>=0?Date.UTC(e+400,t,i)-jb:Date.UTC(e,t,i)}function iE(e){var t,i;if(e=Ai(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(i=this._isUTC?Ub:Yb,e){case"year":t=i(this.year(),0,1);break;case"quarter":t=i(this.year(),this.month()-this.month()%3,1);break;case"month":t=i(this.year(),this.month(),1);break;case"week":t=i(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=i(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=i(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=$o(t+(this._isUTC?0:this.utcOffset()*wo),al);break;case"minute":t=this._d.valueOf(),t-=$o(t,wo);break;case"second":t=this._d.valueOf(),t-=$o(t,rl);break}return this._d.setTime(t),B.updateOffset(this,!0),this}function sE(e){var t,i;if(e=Ai(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(i=this._isUTC?Ub:Yb,e){case"year":t=i(this.year()+1,0,1)-1;break;case"quarter":t=i(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=i(this.year(),this.month()+1,1)-1;break;case"week":t=i(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=i(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=i(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=al-$o(t+(this._isUTC?0:this.utcOffset()*wo),al)-1;break;case"minute":t=this._d.valueOf(),t+=wo-$o(t,wo)-1;break;case"second":t=this._d.valueOf(),t+=rl-$o(t,rl)-1;break}return this._d.setTime(t),B.updateOffset(this,!0),this}function nE(){return this._d.valueOf()-(this._offset||0)*6e4}function oE(){return Math.floor(this.valueOf()/1e3)}function rE(){return new Date(this.valueOf())}function aE(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function lE(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function cE(){return this.isValid()?this.toISOString():null}function uE(){return eh(this)}function dE(){return Qs({},be(this))}function hE(){return be(this).overflow}function fE(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}se("N",0,0,"eraAbbr");se("NN",0,0,"eraAbbr");se("NNN",0,0,"eraAbbr");se("NNNN",0,0,"eraName");se("NNNNN",0,0,"eraNarrow");se("y",["y",1],"yo","eraYear");se("y",["yy",2],0,"eraYear");se("y",["yyy",3],0,"eraYear");se("y",["yyyy",4],0,"eraYear");Z("N",mh);Z("NN",mh);Z("NNN",mh);Z("NNNN",kE);Z("NNNNN",SE);We(["N","NN","NNN","NNNN","NNNNN"],function(e,t,i,s){var n=i._locale.erasParse(e,s,i._strict);n?be(i).era=n:be(i).invalidEra=e});Z("y",Uo);Z("yy",Uo);Z("yyy",Uo);Z("yyyy",Uo);Z("yo",CE);We(["y","yy","yyy","yyyy"],Nt);We(["yo"],function(e,t,i,s){var n;i._locale._eraYearOrdinalRegex&&(n=e.match(i._locale._eraYearOrdinalRegex)),i._locale.eraYearOrdinalParse?t[Nt]=i._locale.eraYearOrdinalParse(e,n):t[Nt]=parseInt(e,10)});function pE(e,t){var i,s,n,o=this._eras||Ns("en")._eras;for(i=0,s=o.length;i<s;++i){switch(typeof o[i].since){case"string":n=B(o[i].since).startOf("day"),o[i].since=n.valueOf();break}switch(typeof o[i].until){case"undefined":o[i].until=1/0;break;case"string":n=B(o[i].until).startOf("day").valueOf(),o[i].until=n.valueOf();break}}return o}function gE(e,t,i){var s,n,o=this.eras(),r,a,l;for(e=e.toUpperCase(),s=0,n=o.length;s<n;++s)if(r=o[s].name.toUpperCase(),a=o[s].abbr.toUpperCase(),l=o[s].narrow.toUpperCase(),i)switch(t){case"N":case"NN":case"NNN":if(a===e)return o[s];break;case"NNNN":if(r===e)return o[s];break;case"NNNNN":if(l===e)return o[s];break}else if([r,a,l].indexOf(e)>=0)return o[s]}function mE(e,t){var i=e.since<=e.until?1:-1;return t===void 0?B(e.since).year():B(e.since).year()+(t-e.offset)*i}function vE(){var e,t,i,s=this.localeData().eras();for(e=0,t=s.length;e<t;++e)if(i=this.clone().startOf("day").valueOf(),s[e].since<=i&&i<=s[e].until||s[e].until<=i&&i<=s[e].since)return s[e].name;return""}function bE(){var e,t,i,s=this.localeData().eras();for(e=0,t=s.length;e<t;++e)if(i=this.clone().startOf("day").valueOf(),s[e].since<=i&&i<=s[e].until||s[e].until<=i&&i<=s[e].since)return s[e].narrow;return""}function yE(){var e,t,i,s=this.localeData().eras();for(e=0,t=s.length;e<t;++e)if(i=this.clone().startOf("day").valueOf(),s[e].since<=i&&i<=s[e].until||s[e].until<=i&&i<=s[e].since)return s[e].abbr;return""}function xE(){var e,t,i,s,n=this.localeData().eras();for(e=0,t=n.length;e<t;++e)if(i=n[e].since<=n[e].until?1:-1,s=this.clone().startOf("day").valueOf(),n[e].since<=s&&s<=n[e].until||n[e].until<=s&&s<=n[e].since)return(this.year()-B(n[e].since).year())*i+n[e].offset;return this.year()}function wE(e){return Le(this,"_erasNameRegex")||vh.call(this),e?this._erasNameRegex:this._erasRegex}function $E(e){return Le(this,"_erasAbbrRegex")||vh.call(this),e?this._erasAbbrRegex:this._erasRegex}function _E(e){return Le(this,"_erasNarrowRegex")||vh.call(this),e?this._erasNarrowRegex:this._erasRegex}function mh(e,t){return t.erasAbbrRegex(e)}function kE(e,t){return t.erasNameRegex(e)}function SE(e,t){return t.erasNarrowRegex(e)}function CE(e,t){return t._eraYearOrdinalRegex||Uo}function vh(){var e=[],t=[],i=[],s=[],n,o,r=this.eras();for(n=0,o=r.length;n<o;++n)t.push(di(r[n].name)),e.push(di(r[n].abbr)),i.push(di(r[n].narrow)),s.push(di(r[n].name)),s.push(di(r[n].abbr)),s.push(di(r[n].narrow));this._erasRegex=new RegExp("^("+s.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+i.join("|")+")","i")}se(0,["gg",2],0,function(){return this.weekYear()%100});se(0,["GG",2],0,function(){return this.isoWeekYear()%100});function bc(e,t){se(0,[e,e.length],0,t)}bc("gggg","weekYear");bc("ggggg","weekYear");bc("GGGG","isoWeekYear");bc("GGGGG","isoWeekYear");Yt("weekYear","gg");Yt("isoWeekYear","GG");Ut("weekYear",1);Ut("isoWeekYear",1);Z("G",fc);Z("g",fc);Z("GG",rt,wi);Z("gg",rt,wi);Z("GGGG",rh,oh);Z("gggg",rh,oh);Z("GGGGG",hc,uc);Z("ggggg",hc,uc);ia(["gggg","ggggg","GGGG","GGGGG"],function(e,t,i,s){t[s.substr(0,2)]=$e(e)});ia(["gg","GG"],function(e,t,i,s){t[s]=B.parseTwoDigitYear(e)});function IE(e){return Wb.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function TE(e){return Wb.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function FE(){return ks(this.year(),1,4)}function DE(){return ks(this.isoWeekYear(),1,4)}function RE(){var e=this.localeData()._week;return ks(this.year(),e.dow,e.doy)}function EE(){var e=this.localeData()._week;return ks(this.weekYear(),e.dow,e.doy)}function Wb(e,t,i,s,n){var o;return e==null?Mr(this,s,n).year:(o=ks(e,s,n),t>o&&(t=o),OE.call(this,e,t,i,s,n))}function OE(e,t,i,s,n){var o=Sb(e,t,i,s,n),r=Ar(o.year,0,o.dayOfYear);return this.year(r.getUTCFullYear()),this.month(r.getUTCMonth()),this.date(r.getUTCDate()),this}se("Q",0,"Qo","quarter");Yt("quarter","Q");Ut("quarter",7);Z("Q",gb);We("Q",function(e,t){t[ws]=($e(e)-1)*3});function PE(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}se("D",["DD",2],"Do","date");Yt("date","D");Ut("date",9);Z("D",rt);Z("DD",rt,wi);Z("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient});We(["D","DD"],rs);We("Do",function(e,t){t[rs]=$e(e.match(rt)[0])});var Gb=Yo("Date",!0);se("DDD",["DDDD",3],"DDDo","dayOfYear");Yt("dayOfYear","DDD");Ut("dayOfYear",4);Z("DDD",dc);Z("DDDD",mb);We(["DDD","DDDD"],function(e,t,i){i._dayOfYear=$e(e)});function LE(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}se("m",["mm",2],0,"minute");Yt("minute","m");Ut("minute",14);Z("m",rt);Z("mm",rt,wi);We(["m","mm"],ji);var AE=Yo("Minutes",!1);se("s",["ss",2],0,"second");Yt("second","s");Ut("second",15);Z("s",rt);Z("ss",rt,wi);We(["s","ss"],$s);var ME=Yo("Seconds",!1);se("S",0,0,function(){return~~(this.millisecond()/100)});se(0,["SS",2],0,function(){return~~(this.millisecond()/10)});se(0,["SSS",3],0,"millisecond");se(0,["SSSS",4],0,function(){return this.millisecond()*10});se(0,["SSSSS",5],0,function(){return this.millisecond()*100});se(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});se(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});se(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});se(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});Yt("millisecond","ms");Ut("millisecond",16);Z("S",dc,gb);Z("SS",dc,wi);Z("SSS",dc,mb);var Js,qb;for(Js="SSSS";Js.length<=9;Js+="S")Z(Js,Uo);function VE(e,t){t[In]=$e(("0."+e)*1e3)}for(Js="S";Js.length<=9;Js+="S")We(Js,VE);qb=Yo("Milliseconds",!1);se("z",0,0,"zoneAbbr");se("zz",0,0,"zoneName");function HE(){return this._isUTC?"UTC":""}function NE(){return this._isUTC?"Coordinated Universal Time":""}var L=ea.prototype;L.add=ER;L.calendar=HR;L.clone=NR;L.diff=GR;L.endOf=sE;L.format=QR;L.from=JR;L.fromNow=KR;L.to=eE;L.toNow=tE;L.get=BF;L.invalidAt=hE;L.isAfter=zR;L.isBefore=BR;L.isBetween=jR;L.isSame=YR;L.isSameOrAfter=UR;L.isSameOrBefore=WR;L.isValid=uE;L.lang=zb;L.locale=Nb;L.localeData=Bb;L.max=uR;L.min=cR;L.parsingFlags=dE;L.set=jF;L.startOf=iE;L.subtract=OR;L.toArray=aE;L.toObject=lE;L.toDate=rE;L.toISOString=ZR;L.inspect=XR;typeof Symbol<"u"&&Symbol.for!=null&&(L[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});L.toJSON=cE;L.toString=qR;L.unix=oE;L.valueOf=nE;L.creationData=fE;L.eraName=vE;L.eraNarrow=bE;L.eraAbbr=yE;L.eraYear=xE;L.year=kb;L.isLeapYear=lD;L.weekYear=IE;L.isoWeekYear=TE;L.quarter=L.quarters=PE;L.month=$b;L.daysInMonth=oD;L.week=L.weeks=pD;L.isoWeek=L.isoWeeks=gD;L.weeksInYear=RE;L.weeksInWeekYear=EE;L.isoWeeksInYear=FE;L.isoWeeksInISOWeekYear=DE;L.date=Gb;L.day=L.days=TD;L.weekday=FD;L.isoWeekday=DD;L.dayOfYear=LE;L.hour=L.hours=MD;L.minute=L.minutes=AE;L.second=L.seconds=ME;L.millisecond=L.milliseconds=qb;L.utcOffset=yR;L.utc=wR;L.local=$R;L.parseZone=_R;L.hasAlignedHourOffset=kR;L.isDST=SR;L.isLocal=IR;L.isUtcOffset=TR;L.isUtc=Ab;L.isUTC=Ab;L.zoneAbbr=HE;L.zoneName=NE;L.dates=Li("dates accessor is deprecated. Use date instead.",Gb);L.months=Li("months accessor is deprecated. Use month instead",$b);L.years=Li("years accessor is deprecated. Use year instead",kb);L.zone=Li("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",xR);L.isDSTShifted=Li("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",CR);function zE(e){return nt(e*1e3)}function BE(){return nt.apply(null,arguments).parseZone()}function Zb(e){return e}var Ae=ih.prototype;Ae.calendar=TF;Ae.longDateFormat=EF;Ae.invalidDate=PF;Ae.ordinal=MF;Ae.preparse=Zb;Ae.postformat=Zb;Ae.relativeTime=HF;Ae.pastFuture=NF;Ae.set=CF;Ae.eras=pE;Ae.erasParse=gE;Ae.erasConvertYear=mE;Ae.erasAbbrRegex=$E;Ae.erasNameRegex=wE;Ae.erasNarrowRegex=_E;Ae.months=tD;Ae.monthsShort=iD;Ae.monthsParse=nD;Ae.monthsRegex=aD;Ae.monthsShortRegex=rD;Ae.week=uD;Ae.firstDayOfYear=fD;Ae.firstDayOfWeek=hD;Ae.weekdays=_D;Ae.weekdaysMin=SD;Ae.weekdaysShort=kD;Ae.weekdaysParse=ID;Ae.weekdaysRegex=RD;Ae.weekdaysShortRegex=ED;Ae.weekdaysMinRegex=OD;Ae.isPM=LD;Ae.meridiem=VD;function ll(e,t,i,s){var n=Ns(),o=hs().set(s,t);return n[i](o,e)}function Xb(e,t,i){if(Fs(e)&&(t=e,e=void 0),e=e||"",t!=null)return ll(e,t,i,"month");var s,n=[];for(s=0;s<12;s++)n[s]=ll(e,s,i,"month");return n}function bh(e,t,i,s){typeof e=="boolean"?(Fs(t)&&(i=t,t=void 0),t=t||""):(t=e,i=t,e=!1,Fs(t)&&(i=t,t=void 0),t=t||"");var n=Ns(),o=e?n._week.dow:0,r,a=[];if(i!=null)return ll(t,(i+o)%7,s,"day");for(r=0;r<7;r++)a[r]=ll(t,(r+o)%7,s,"day");return a}function jE(e,t){return Xb(e,t,"months")}function YE(e,t){return Xb(e,t,"monthsShort")}function UE(e,t,i){return bh(e,t,i,"weekdays")}function WE(e,t,i){return bh(e,t,i,"weekdaysShort")}function GE(e,t,i){return bh(e,t,i,"weekdaysMin")}sn("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,i=$e(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+i}});B.lang=Li("moment.lang is deprecated. Use moment.locale instead.",sn);B.langData=Li("moment.langData is deprecated. Use moment.localeData instead.",Ns);var ms=Math.abs;function qE(){var e=this._data;return this._milliseconds=ms(this._milliseconds),this._days=ms(this._days),this._months=ms(this._months),e.milliseconds=ms(e.milliseconds),e.seconds=ms(e.seconds),e.minutes=ms(e.minutes),e.hours=ms(e.hours),e.months=ms(e.months),e.years=ms(e.years),this}function Qb(e,t,i,s){var n=Ji(t,i);return e._milliseconds+=s*n._milliseconds,e._days+=s*n._days,e._months+=s*n._months,e._bubble()}function ZE(e,t){return Qb(this,e,t,1)}function XE(e,t){return Qb(this,e,t,-1)}function Sp(e){return e<0?Math.floor(e):Math.ceil(e)}function QE(){var e=this._milliseconds,t=this._days,i=this._months,s=this._data,n,o,r,a,l;return e>=0&&t>=0&&i>=0||e<=0&&t<=0&&i<=0||(e+=Sp(Hu(i)+t)*864e5,t=0,i=0),s.milliseconds=e%1e3,n=Ci(e/1e3),s.seconds=n%60,o=Ci(n/60),s.minutes=o%60,r=Ci(o/60),s.hours=r%24,t+=Ci(r/24),l=Ci(Jb(t)),i+=l,t-=Sp(Hu(l)),a=Ci(i/12),i%=12,s.days=t,s.months=i,s.years=a,this}function Jb(e){return e*4800/146097}function Hu(e){return e*146097/4800}function JE(e){if(!this.isValid())return NaN;var t,i,s=this._milliseconds;if(e=Ai(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+s/864e5,i=this._months+Jb(t),e){case"month":return i;case"quarter":return i/3;case"year":return i/12}else switch(t=this._days+Math.round(Hu(this._months)),e){case"week":return t/7+s/6048e5;case"day":return t+s/864e5;case"hour":return t*24+s/36e5;case"minute":return t*1440+s/6e4;case"second":return t*86400+s/1e3;case"millisecond":return Math.floor(t*864e5)+s;default:throw new Error("Unknown unit "+e)}}function KE(){return this.isValid()?this._milliseconds+this._days*864e5+this._months%12*2592e6+$e(this._months/12)*31536e6:NaN}function zs(e){return function(){return this.as(e)}}var eO=zs("ms"),tO=zs("s"),iO=zs("m"),sO=zs("h"),nO=zs("d"),oO=zs("w"),rO=zs("M"),aO=zs("Q"),lO=zs("y");function cO(){return Ji(this)}function uO(e){return e=Ai(e),this.isValid()?this[e+"s"]():NaN}function qn(e){return function(){return this.isValid()?this._data[e]:NaN}}var dO=qn("milliseconds"),hO=qn("seconds"),fO=qn("minutes"),pO=qn("hours"),gO=qn("days"),mO=qn("months"),vO=qn("years");function bO(){return Ci(this.days()/7)}var bs=Math.round,co={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function yO(e,t,i,s,n){return n.relativeTime(t||1,!!i,e,s)}function xO(e,t,i,s){var n=Ji(e).abs(),o=bs(n.as("s")),r=bs(n.as("m")),a=bs(n.as("h")),l=bs(n.as("d")),c=bs(n.as("M")),u=bs(n.as("w")),d=bs(n.as("y")),f=o<=i.ss&&["s",o]||o<i.s&&["ss",o]||r<=1&&["m"]||r<i.m&&["mm",r]||a<=1&&["h"]||a<i.h&&["hh",a]||l<=1&&["d"]||l<i.d&&["dd",l];return i.w!=null&&(f=f||u<=1&&["w"]||u<i.w&&["ww",u]),f=f||c<=1&&["M"]||c<i.M&&["MM",c]||d<=1&&["y"]||["yy",d],f[2]=t,f[3]=+e>0,f[4]=s,yO.apply(null,f)}function wO(e){return e===void 0?bs:typeof e=="function"?(bs=e,!0):!1}function $O(e,t){return co[e]===void 0?!1:t===void 0?co[e]:(co[e]=t,e==="s"&&(co.ss=t-1),!0)}function _O(e,t){if(!this.isValid())return this.localeData().invalidDate();var i=!1,s=co,n,o;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(i=e),typeof t=="object"&&(s=Object.assign({},co,t),t.s!=null&&t.ss==null&&(s.ss=t.s-1)),n=this.localeData(),o=xO(this,!i,s,n),i&&(o=n.pastFuture(+this,o)),n.postformat(o)}var tu=Math.abs;function io(e){return(e>0)-(e<0)||+e}function yc(){if(!this.isValid())return this.localeData().invalidDate();var e=tu(this._milliseconds)/1e3,t=tu(this._days),i=tu(this._months),s,n,o,r,a=this.asSeconds(),l,c,u,d;return a?(s=Ci(e/60),n=Ci(s/60),e%=60,s%=60,o=Ci(i/12),i%=12,r=e?e.toFixed(3).replace(/\.?0+$/,""):"",l=a<0?"-":"",c=io(this._months)!==io(a)?"-":"",u=io(this._days)!==io(a)?"-":"",d=io(this._milliseconds)!==io(a)?"-":"",l+"P"+(o?c+o+"Y":"")+(i?c+i+"M":"")+(t?u+t+"D":"")+(n||s||e?"T":"")+(n?d+n+"H":"")+(s?d+s+"M":"")+(e?d+r+"S":"")):"P0D"}var Fe=vc.prototype;Fe.isValid=gR;Fe.abs=qE;Fe.add=ZE;Fe.subtract=XE;Fe.as=JE;Fe.asMilliseconds=eO;Fe.asSeconds=tO;Fe.asMinutes=iO;Fe.asHours=sO;Fe.asDays=nO;Fe.asWeeks=oO;Fe.asMonths=rO;Fe.asQuarters=aO;Fe.asYears=lO;Fe.valueOf=KE;Fe._bubble=QE;Fe.clone=cO;Fe.get=uO;Fe.milliseconds=dO;Fe.seconds=hO;Fe.minutes=fO;Fe.hours=pO;Fe.days=gO;Fe.weeks=bO;Fe.months=mO;Fe.years=vO;Fe.humanize=_O;Fe.toISOString=yc;Fe.toString=yc;Fe.toJSON=yc;Fe.locale=Nb;Fe.localeData=Bb;Fe.toIsoString=Li("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",yc);Fe.lang=zb;se("X",0,0,"unix");se("x",0,0,"valueOf");Z("x",fc);Z("X",UF);We("X",function(e,t,i){i._d=new Date(parseFloat(e)*1e3)});We("x",function(e,t,i){i._d=new Date($e(e))});//! moment.js
B.version="2.29.4";kF(nt);B.fn=L;B.min=dR;B.max=hR;B.now=fR;B.utc=hs;B.unix=zE;B.months=jE;B.isDate=Kr;B.locale=sn;B.invalid=lc;B.duration=Ji;B.isMoment=Xi;B.weekdays=UE;B.parseZone=BE;B.localeData=Ns;B.isDuration=Va;B.monthsShort=YE;B.weekdaysMin=GE;B.defineLocale=uh;B.updateLocale=BD;B.locales=jD;B.weekdaysShort=WE;B.normalizeUnits=Ai;B.relativeTimeRounding=wO;B.relativeTimeThreshold=$O;B.calendarFormat=VR;B.prototype=L;B.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};const Cp=ve({__name:"Time",props:{format:{}},setup(e){const t=e,i=tt(B().format(t.format)),s=()=>{i.value=B().format(t.format)};var n=void 0;return zt(()=>{n=setInterval(s,1e3)}),xi(()=>{clearInterval(n)}),(o,r)=>ct(i.value)}}),kO={class:"text-center mt-16 text-white"},SO=ve({__name:"ScreenSaver",props:{setIsTyped:{type:Function}},setup(e){const t=e,i=tt(!1),s=async()=>new Promise(()=>setTimeout(()=>{t.setIsTyped(!0)},300)),n=async()=>{i.value=!0,await s()},o=Wn({start:0,end:0,cur:0,curMax:0,active:!1}),r=u=>{o.active=!0,o.start=u.screenY},a=u=>{o.active=!1,o.end=u.screenY,o.cur=0},l=u=>{o.active&&(o.start>u.screenY?o.cur=o.start-u.screenY:(o.curMax=u.screenY,o.cur=0,o.start=o.curMax))},c=async u=>{a(u),o.start-o.end>=u.view.innerHeight/3&&(i.value=!0,await s())};return zt(()=>{window.addEventListener("mousedown",r),window.addEventListener("mousemove",l),window.addEventListener("mouseup",c),window.addEventListener("keypress",n)}),xi(()=>{window.removeEventListener("dragstart",r),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",c),window.removeEventListener("keypress",n)}),(u,d)=>{const f=le("DisplayLarge"),b=le("TitleLarge");return M(),ee("div",{graggable:"true",class:Ht([[i.value?"-translate-y-[10%] opacity-0 transition-all":"",o.active?"":"transition-all"],"relative left-0 full-screen grid justify-center select-none"]),style:ln({top:-o.cur/8+"px"})},[P("div",kO,[I(f,null,{default:F(()=>[I(Cp,{format:"HH:mm"})]),_:1}),I(b,null,{default:F(()=>[I(Cp,{format:"MM-DD-YYYY"})]),_:1})])],6)}}}),xc=Jd("user_store",{state:()=>({accountState:{name:"t",password:"p"},isLogout:!0}),getters:{getUserAccountState:e=>e.accountState,getUserIsLogout:e=>e.isLogout},actions:{setIsLogout(e){this.isLogout=e}},persist:!0}),CO={},IO={class:"avatar-panel bg-black/25 backdrop-blur-lg text-white flex-none font-semibold text-8xl grid place-content-center"};function TO(e,t){const i=le("Icon"),s=le("IconButton");return M(),ee("div",IO,[I(s,{"has-filled":"",class:"w-full h-full scale-[4] icon-filled"},{default:F(()=>[I(i,null,{default:F(()=>[we(" person ")]),_:1})]),_:1})])}const FO=Pe(CO,[["render",TO]]),DO={class:"drop-shadow-md shadow-black text-4xl text-white"},RO=ve({__name:"ProfileName",setup(e){const t=xc();return(i,s)=>(M(),ee("div",DO,ct(oe(t).accountState.name),1))}}),Ki=Jd("system_store",{state:()=>({brightness:100,isNightlight:!1,isLocked:!0,needShutdown:!1,isShutdown:!1,starts:{isOpening:!1}}),getters:{getSystemBrightness:e=>e.brightness,getSystemIsNightlight:e=>e.isNightlight,getSystemIsLocked:e=>e.isLocked,getSystemNeedShutdown:e=>e.needShutdown,getSystemIsShutdown:e=>e.isShutdown,getSystemStarts:e=>e.starts},actions:{setBrightness(e){this.brightness=e},setIsNightlight(e){this.isNightlight=e},toggleIsNightlight(){this.isNightlight=!this.isNightlight},setIsLocked(e){this.isLocked=e},setNeedShutdown(e){this.needShutdown=e},setIsShutdown(e){this.isShutdown=e},setStarts(e){this.starts=e}},persist:!0}),EO={class:"relative full-screen flex flex-col gap-16 items-center justify-center"},OO={class:"flex items-center relative"},PO=["onKeyup"],LO={key:0},AO={key:1},MO=ve({__name:"Login",setup(e){const t=Ki(),i=xc(),s=Wn({password:"",pending:!1,isError:!1,isTyped:!1}),n=async c=>{s.pending=c},o=async c=>{s.isError=c},r=async c=>{s.isTyped=c},a=async c=>await new Promise(()=>setTimeout(()=>{c()},500)),l=async()=>{r(!0),n(!0),o(!1),s.password===i.accountState.password&&await a(()=>{n(!1),i.setIsLogout(!1),t.setIsLocked(!1)}),await a(()=>{o(!0),n(!1)})};return(c,u)=>{const d=le("Icon"),f=le("LabelLarge");return M(),ee("div",EO,[I(FO),I(RO),P("form",OO,[P("fluent-text-field",{autofocus:"",type:"password",onInput:u[0]||(u[0]=b=>s.password=b.target.value),appearance:"filled",onKeyup:zC(l,["enter"]),placeholder:"Password"},null,40,PO),P("fluent-button",{onClick:l,class:"absolute right-0 z-[1] p-0.5 grid place-content-center"},[I(d,null,{default:F(()=>[we("arrow_forward")]),_:1})])]),s.pending?(M(),ee("fluent-progress-ring",AO)):(M(),ee("div",LO,[s.isError?(M(),st(f,{key:0},{default:F(()=>[we("Typed password is incorrect")]),_:1})):oe(t).getSystemIsLocked&&s.isTyped?(M(),st(f,{key:1},{default:F(()=>[we("Welcome")]),_:1})):Cu("",!0)]))])}}}),VO={class:"relative full-screen overflow-clip"},HO=ve({__name:"LockScreen",setup(e){const t=tt(!1),i=o=>{t.value=o};var s=void 0;const n=()=>{clearTimeout(s),s=setTimeout(()=>{i(!1)},1e4)};return zt(()=>{window.addEventListener("mousemove",n),window.addEventListener("keypress",n)}),xi(()=>{window.removeEventListener("mousemove",n),window.removeEventListener("keypress",n)}),(o,r)=>(M(),ee("div",VO,[P("div",{class:Ht([[t.value?"blur scale-125 brightness-75":""],"absolute full-screen transition-all duration-500 lock-screen-wallpaper"])},null,2),t.value?(M(),st(MO,{key:1})):(M(),st(SO,{key:0,"set-is-typed":i}))]))}}),NO={},zO={placeholder:"Type here to search"};function BO(e,t){return M(),ee("fluent-search",zO)}const jO=Pe(NO,[["render",BO]]);function _o(e,t,...i){if(e in t){let n=t[e];return typeof n=="function"?n(...i):n}let s=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(n=>`"${n}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,_o),s}var Nu=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(Nu||{}),YO=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(YO||{});function Wo({visible:e=!0,features:t=0,ourProps:i,theirProps:s,...n}){var o;let r=ey(s,i),a=Object.assign(n,{props:r});if(e||t&2&&r.static)return iu(a);if(t&1){let l=(o=r.unmount)==null||o?0:1;return _o(l,{0(){return null},1(){return iu({...n,props:{...r,hidden:!0,style:{display:"none"}}})}})}return iu(a)}function iu({props:e,attrs:t,slots:i,slot:s,name:n}){var o,r;let{as:a,...l}=ty(e,["unmount","static"]),c=(o=i.default)==null?void 0:o.call(i,s),u={};if(s){let d=!1,f=[];for(let[b,$]of Object.entries(s))typeof $=="boolean"&&(d=!0),$===!0&&f.push(b);d&&(u["data-headlessui-state"]=f.join(" "))}if(a==="template"){if(c=Kb(c??[]),Object.keys(l).length>0||Object.keys(t).length>0){let[d,...f]=c??[];if(!UO(d)||f.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${n} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(l).concat(Object.keys(t)).map(x=>x.trim()).filter((x,_,R)=>R.indexOf(x)===_).sort((x,_)=>x.localeCompare(_)).map(x=>`  - ${x}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(x=>`  - ${x}`).join(`
`)].join(`
`));let b=ey((r=d.props)!=null?r:{},l),$=Mn(d,b);for(let x in b)x.startsWith("on")&&($.props||($.props={}),$.props[x]=b[x]);return $}return Array.isArray(c)&&c.length===1?c[0]:c}return Ts(a,Object.assign({},l,u),{default:()=>c})}function Kb(e){return e.flatMap(t=>t.type===gt?Kb(t.children):[t])}function ey(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},i={};for(let s of e)for(let n in s)n.startsWith("on")&&typeof s[n]=="function"?(i[n]!=null||(i[n]=[]),i[n].push(s[n])):t[n]=s[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(i).map(s=>[s,void 0])));for(let s in i)Object.assign(t,{[s](n,...o){let r=i[s];for(let a of r){if(n instanceof Event&&n.defaultPrevented)return;a(n,...o)}}});return t}function ty(e,t=[]){let i=Object.assign({},e);for(let s of t)s in i&&delete i[s];return i}function UO(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let WO=0;function GO(){return++WO}function iy(){return GO()}var Vi=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Vi||{});function kt(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}function Ip(e,t){if(e)return e;let i=t??"button";if(typeof i=="string"&&i.toLowerCase()==="button")return"button"}function qO(e,t){let i=tt(Ip(e.value.type,e.value.as));return zt(()=>{i.value=Ip(e.value.type,e.value.as)}),ov(()=>{var s;i.value||kt(t)&&kt(t)instanceof HTMLButtonElement&&!((s=kt(t))!=null&&s.hasAttribute("type"))&&(i.value="button")}),i}var ZO=Object.defineProperty,XO=(e,t,i)=>t in e?ZO(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,Tp=(e,t,i)=>(XO(e,typeof t!="symbol"?t+"":t,i),i);class QO{constructor(){Tp(this,"current",this.detect()),Tp(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let JO=new QO;function KO(e){if(JO.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=kt(e);if(t)return t.ownerDocument}return document}let eP=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var Hi=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(Hi||{}),rr=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(rr||{}),tP=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(tP||{});function iP(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(eP)).sort((t,i)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(i.tabIndex||Number.MAX_SAFE_INTEGER)))}var sP=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(sP||{}),nP=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(nP||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));let oP=["textarea","input"].join(",");function rP(e){var t,i;return(i=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,oP))!=null?i:!1}function ro(e,t=i=>i){return e.slice().sort((i,s)=>{let n=t(i),o=t(s);if(n===null||o===null)return 0;let r=n.compareDocumentPosition(o);return r&Node.DOCUMENT_POSITION_FOLLOWING?-1:r&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function so(e,t,{sorted:i=!0,relativeTo:s=null,skipElements:n=[]}={}){var o;let r=(o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?o:document,a=Array.isArray(e)?i?ro(e):e:iP(e);n.length>0&&a.length>1&&(a=a.filter($=>!n.includes($))),s=s??r.activeElement;let l=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,a.indexOf(s))-1;if(t&4)return Math.max(0,a.indexOf(s))+1;if(t&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=t&32?{preventScroll:!0}:{},d=0,f=a.length,b;do{if(d>=f||d+f<=0)return 0;let $=c+d;if(t&16)$=($+f)%f;else{if($<0)return 3;if($>=f)return 1}b=a[$],b==null||b.focus(u),d+=l}while(b!==r.activeElement);return t&6&&rP(b)&&b.select(),2}var sy=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(sy||{});let ny=ve({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:i}){return()=>{let{features:s,...n}=e,o={"aria-hidden":(s&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(s&4)===4&&(s&2)!==2&&{display:"none"}}};return Wo({ourProps:o,theirProps:n,slot:{},attrs:i,slots:t,name:"Hidden"})}}});function aP(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}let lP=ve({props:{onFocus:{type:Function,required:!0}},setup(e){let t=tt(!0);return()=>t.value?Ts(ny,{as:"button",type:"button",features:sy.Focusable,onFocus(i){i.preventDefault();let s,n=50;function o(){var r;if(n--<=0){s&&cancelAnimationFrame(s);return}if((r=e.onFocus)!=null&&r.call(e)){t.value=!1,cancelAnimationFrame(s);return}s=requestAnimationFrame(o)}s=requestAnimationFrame(o)}}):null}});var cP=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(cP||{}),uP=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(uP||{});let oy=Symbol("TabsContext");function sa(e){let t=fi(oy,null);if(t===null){let i=new Error(`<${e} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,sa),i}return t}let yh=Symbol("TabsSSRContext"),ry=ve({name:"TabGroup",emits:{change:e=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:t,attrs:i,emit:s}){var n;let o=tt((n=e.selectedIndex)!=null?n:e.defaultIndex),r=tt([]),a=tt([]),l=Xe(()=>e.selectedIndex!==null),c=Xe(()=>l.value?e.selectedIndex:o.value);function u(x){var _;let R=ro(d.tabs.value,kt),N=ro(d.panels.value,kt),ne=R.filter(U=>{var me;return!((me=kt(U))!=null&&me.hasAttribute("disabled"))});if(x<0||x>R.length-1){let U=_o(o.value===null?0:Math.sign(x-o.value),{[-1]:()=>1,0:()=>_o(Math.sign(x),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});o.value=_o(U,{0:()=>R.indexOf(ne[0]),1:()=>R.indexOf(ne[ne.length-1])}),d.tabs.value=R,d.panels.value=N}else{let U=R.slice(0,x),me=[...R.slice(x),...U].find(dt=>ne.includes(dt));if(!me)return;let De=(_=R.indexOf(me))!=null?_:d.selectedIndex.value;De===-1&&(De=d.selectedIndex.value),o.value=De,d.tabs.value=R,d.panels.value=N}}let d={selectedIndex:Xe(()=>{var x,_;return(_=(x=o.value)!=null?x:e.defaultIndex)!=null?_:null}),orientation:Xe(()=>e.vertical?"vertical":"horizontal"),activation:Xe(()=>e.manual?"manual":"auto"),tabs:r,panels:a,setSelectedIndex(x){c.value!==x&&s("change",x),l.value||u(x)},registerTab(x){var _;if(r.value.includes(x))return;let R=r.value[o.value];r.value.push(x),r.value=ro(r.value,kt);let N=(_=r.value.indexOf(R))!=null?_:o.value;N!==-1&&(o.value=N)},unregisterTab(x){let _=r.value.indexOf(x);_!==-1&&r.value.splice(_,1)},registerPanel(x){a.value.includes(x)||(a.value.push(x),a.value=ro(a.value,kt))},unregisterPanel(x){let _=a.value.indexOf(x);_!==-1&&a.value.splice(_,1)}};yo(oy,d);let f=tt({tabs:[],panels:[]}),b=tt(!1);zt(()=>{b.value=!0}),yo(yh,Xe(()=>b.value?null:f.value));let $=Xe(()=>e.selectedIndex);return zt(()=>{_s([$],()=>{var x;return u((x=e.selectedIndex)!=null?x:e.defaultIndex)},{immediate:!0})}),ov(()=>{if(!l.value||c.value==null||d.tabs.value.length<=0)return;let x=ro(d.tabs.value,kt);x.some((_,R)=>kt(d.tabs.value[R])!==kt(_))&&d.setSelectedIndex(x.findIndex(_=>kt(_)===kt(d.tabs.value[c.value])))}),()=>{let x={selectedIndex:o.value};return Ts(gt,[r.value.length<=0&&Ts(lP,{onFocus:()=>{for(let _ of r.value){let R=kt(_);if((R==null?void 0:R.tabIndex)===0)return R.focus(),!0}return!1}}),Wo({theirProps:{...i,...ty(e,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:x,slots:t,attrs:i,name:"TabGroup"})])}}}),ay=ve({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:t,slots:i}){let s=sa("TabList");return()=>{let n={selectedIndex:s.selectedIndex.value},o={role:"tablist","aria-orientation":s.orientation.value};return Wo({ourProps:o,theirProps:e,slot:n,attrs:t,slots:i,name:"TabList"})}}}),zu=ve({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-tabs-tab-${iy()}`}},setup(e,{attrs:t,slots:i,expose:s}){let n=sa("Tab"),o=tt(null);s({el:o,$el:o}),zt(()=>n.registerTab(o)),xi(()=>n.unregisterTab(o));let r=fi(yh),a=Xe(()=>{if(r.value){let _=r.value.tabs.indexOf(e.id);return _===-1?r.value.tabs.push(e.id)-1:_}return-1}),l=Xe(()=>{let _=n.tabs.value.indexOf(o);return _===-1?a.value:_}),c=Xe(()=>l.value===n.selectedIndex.value);function u(_){var R;let N=_();if(N===rr.Success&&n.activation.value==="auto"){let ne=(R=KO(o))==null?void 0:R.activeElement,U=n.tabs.value.findIndex(me=>kt(me)===ne);U!==-1&&n.setSelectedIndex(U)}return N}function d(_){let R=n.tabs.value.map(N=>kt(N)).filter(Boolean);if(_.key===Vi.Space||_.key===Vi.Enter){_.preventDefault(),_.stopPropagation(),n.setSelectedIndex(l.value);return}switch(_.key){case Vi.Home:case Vi.PageUp:return _.preventDefault(),_.stopPropagation(),u(()=>so(R,Hi.First));case Vi.End:case Vi.PageDown:return _.preventDefault(),_.stopPropagation(),u(()=>so(R,Hi.Last))}if(u(()=>_o(n.orientation.value,{vertical(){return _.key===Vi.ArrowUp?so(R,Hi.Previous|Hi.WrapAround):_.key===Vi.ArrowDown?so(R,Hi.Next|Hi.WrapAround):rr.Error},horizontal(){return _.key===Vi.ArrowLeft?so(R,Hi.Previous|Hi.WrapAround):_.key===Vi.ArrowRight?so(R,Hi.Next|Hi.WrapAround):rr.Error}}))===rr.Success)return _.preventDefault()}let f=tt(!1);function b(){var _;f.value||(f.value=!0,!e.disabled&&((_=kt(o))==null||_.focus(),n.setSelectedIndex(l.value),aP(()=>{f.value=!1})))}function $(_){_.preventDefault()}let x=qO(Xe(()=>({as:e.as,type:t.type})),o);return()=>{var _;let R={selected:c.value},{id:N,...ne}=e,U={ref:o,onKeydown:d,onMousedown:$,onClick:b,id:N,role:"tab",type:x.value,"aria-controls":(_=kt(n.panels.value[l.value]))==null?void 0:_.id,"aria-selected":c.value,tabIndex:c.value?0:-1,disabled:e.disabled?!0:void 0};return Wo({ourProps:U,theirProps:ne,slot:R,attrs:t,slots:i,name:"Tab"})}}}),ly=ve({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:i}){let s=sa("TabPanels");return()=>{let n={selectedIndex:s.selectedIndex.value};return Wo({theirProps:e,ourProps:{},slot:n,attrs:i,slots:t,name:"TabPanels"})}}}),uo=ve({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-tabs-panel-${iy()}`},tabIndex:{type:Number,default:0}},setup(e,{attrs:t,slots:i,expose:s}){let n=sa("TabPanel"),o=tt(null);s({el:o,$el:o}),zt(()=>n.registerPanel(o)),xi(()=>n.unregisterPanel(o));let r=fi(yh),a=Xe(()=>{if(r.value){let u=r.value.panels.indexOf(e.id);return u===-1?r.value.panels.push(e.id)-1:u}return-1}),l=Xe(()=>{let u=n.panels.value.indexOf(o);return u===-1?a.value:u}),c=Xe(()=>l.value===n.selectedIndex.value);return()=>{var u;let d={selected:c.value},{id:f,tabIndex:b,...$}=e,x={ref:o,id:f,role:"tabpanel","aria-labelledby":(u=kt(n.tabs.value[l.value]))==null?void 0:u.id,tabIndex:c.value?b:-1};return!c.value&&e.unmount&&!e.static?Ts(ny,{as:"span",...x}):Wo({ourProps:x,theirProps:$,slot:d,attrs:t,slots:i,features:Nu.Static|Nu.RenderStrategy,visible:c.value,name:"TabPanel"})}}});const dP=["data-active","onClick"],hP={class:"text-3xl font-semibold mb-4"},fP={class:"bg-white/75 w-full h-full rounded-container"},pP=ve({__name:"Settings",setup(e){const t=(n,o)=>({label:n,icon:o}),i=[t("Account","person"),t("Personalization","brush"),t("Gaming","sports_esports"),t("Windows Update","update")],s=tt("Account");return(n,o)=>{const r=le("Icon"),a=le("FlexLayout"),l=le("PageLayout");return M(),st(l,null,{default:F(()=>[I(a,{class:"h-full gap-1"},{default:F(()=>[I(oe(ry),null,{default:F(()=>[I(oe(ay),{as:"div",class:"setting-list flex flex-col flex-none gap-2"},{default:F(()=>[(M(),ee(gt,null,Gn(i,(c,u)=>I(oe(zu),{key:u,as:"template"},{default:F(({selected:d})=>[P("div",{"data-active":d,onClick:f=>s.value=c.label,class:"outline-none"},[I(r,null,{default:F(()=>[we(ct(c.icon),1)]),_:2},1024),we(" "+ct(c.label),1)],8,dP)]),_:2},1024)),64))]),_:1}),I(oe(ly),{as:"div",class:"flex flex-col w-full h-full"},{default:F(()=>[P("h1",hP,ct(s.value),1),P("div",fP,[I(oe(uo),null,{default:F(()=>[we("1")]),_:1}),I(oe(uo),null,{default:F(()=>[we("2")]),_:1}),I(oe(uo),null,{default:F(()=>[we("3")]),_:1}),I(oe(uo),null,{default:F(()=>[we("4")]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})}}});var gP=0;function mP(){return gP++}function vP(e,t={maximizable:!0,minimizable:!0,fullscreen:!1},i={runningInBackground:!1,processId:mP()}){var s,n,o,r;return{window:{info:{title:e.info.title,icon:e.info.icon,activeZIndex:i.processId},position:{x:((s=e.position)==null?void 0:s.x)||0,y:((n=e.position)==null?void 0:n.y)||0},size:{width:((o=e.size)==null?void 0:o.width)||400,height:((r=e.size)==null?void 0:r.height)||300}},accessibility:{maximizable:t.maximizable,minimizable:t.minimizable,focus:!1,active:!1,maximize:!1,minimize:!1,fullscreen:t.fullscreen},process:{runningInBackground:i.runningInBackground,processId:i.processId}}}const bP={class:"flex-none select-none w-full h-8 bg-white/75 backdrop-blur-lg"},yP={class:"w-full h-full flex items-center justify-between"},xP={class:"flex-none h-full aspect-square scale-75 grid place-content-center"},wP={class:"w-full whitespace-nowrap overflow-clip"},$P={class:"flex-none w-fit h-full flex items-center justify-end"},_P={class:"relative w-full h-full backdrop-blur-lg bg-white/75 overflow-auto"},kP=ve({__name:"WindowTemplate",props:{getProcessStateInstance:{type:Function}},emits:["close","maximize","minimize","focus","unfocus","active","inactive","fullscreen","unFullscreen","gragwindow","changeWindowSize"],setup(e,{emit:t}){const i=e,s=Zn(),n=()=>{s.cleanActive(),s.cleanFocus(),t("focus"),t("active"),s.setTopZIndex(s.getProcessByProcessId(i.getProcessStateInstance().process.processId))};var o=[];const r=a=>{if(i.getProcessStateInstance().accessibility.active){if(o.length===0){o[0]=a.code;return}else o.length===1?o[1]=a.code:a.code!==o[1]&&(o.shift(),o[1]=a.code);o=Array.from(new Set(o)),o.length===2&&["ShiftLeft","ShiftRight"].includes(o[0])&&(o[1]==="KeyK"?i.getProcessStateInstance().accessibility.fullscreen?t("unFullscreen"):t("fullscreen"):o[1]==="ArrowUp"?t("maximize"):o[1]==="ArrowDown"?t("minimize"):o[1]==="F4"&&t("close"),o=[])}};return zt(()=>{n(),document.addEventListener("keyup",r)}),xi(()=>{document.removeEventListener("keyup",r)}),(a,l)=>{const c=le("Icon"),u=le("IconButton"),d=le("FlexLayout");return M(),ee("div",{ref:"windowRef",onMousedown:n,onMouseover:l[4]||(l[4]=f=>t("focus")),onMouseout:l[5]||(l[5]=f=>t("unfocus")),class:Ht(["select-none fixed leadin-animation overflow-hidden transition-all active:transition-none",[i.getProcessStateInstance().accessibility.active?"shadow-lg":"",i.getProcessStateInstance().accessibility.minimize?"opacity-0 scale-0 translate-y-full select-none pointer-events-none -z-[99999]":"",i.getProcessStateInstance().accessibility.fullscreen?"":"resize"]]),style:ln({left:i.getProcessStateInstance().accessibility.maximize?"0":i.getProcessStateInstance().window.position.x+"px",top:i.getProcessStateInstance().accessibility.maximize?"0":i.getProcessStateInstance().window.position.y+"px",width:i.getProcessStateInstance().accessibility.maximize?"100%":i.getProcessStateInstance().window.size.width+"px",height:i.getProcessStateInstance().accessibility.maximize?"100%":i.getProcessStateInstance().window.size.height+"px","z-index":i.getProcessStateInstance().accessibility.fullscreen?"999":i.getProcessStateInstance().window.info.activeZIndex+10,"padding-bottom":i.getProcessStateInstance().accessibility.maximize?i.getProcessStateInstance().accessibility.fullscreen?"0":"3rem":"0"})},[I(d,{class:"rounded-container w-full h-full flex-col overflow-clip border"},{default:F(()=>[Qr(P("header",bP,[P("div",yP,[P("div",{onMousedown:l[0]||(l[0]=f=>t("gragwindow",f)),class:"h-full flex items-center justify-start w-full text-ellipsis overflow-clip"},[P("div",xP,[I(c,null,{default:F(()=>[we(ct(i.getProcessStateInstance().window.info.icon),1)]),_:1})]),P("h1",wP,ct(i.getProcessStateInstance().window.info.title),1)],32),P("nav",$P,[i.getProcessStateInstance().accessibility.minimizable?(M(),st(u,{key:0,onClick:l[1]||(l[1]=f=>t("minimize")),"has-hover":"","has-active":""},{default:F(()=>[I(c,{class:"scale-75"},{default:F(()=>[we("minimize")]),_:1})]),_:1})):Cu("",!0),i.getProcessStateInstance().accessibility.maximizable?(M(),st(u,{key:1,onClick:l[2]||(l[2]=f=>t("maximize")),"has-hover":"","has-active":""},{default:F(()=>[I(c,{class:"scale-75"},{default:F(()=>[we("check_box_outline_blank")]),_:1})]),_:1})):Cu("",!0),I(u,{onClick:l[3]||(l[3]=()=>{oe(s).killProcessByProcessId(i.getProcessStateInstance().process.processId)}),"has-hover":"","has-active":"",type:"error"},{default:F(()=>[I(c,{class:"scale-75"},{default:F(()=>[we("close")]),_:1})]),_:1})])])],512),[[Jr,!i.getProcessStateInstance().accessibility.fullscreen]]),P("main",_P,[je(a.$slots,"default",{},void 0,!0)])]),_:3})],38)}}}),SP=Pe(kP,[["__scopeId","data-v-34399b81"]]),CP=()=>document.getElementById("window-workspace").appendChild(document.createElement("div")),IP=e=>{const t=CP(),i=oc(e);return i.component("DisplayLarge",Lv).component("DisplayMedium",Av).component("DisplaySmall",Mv).component("HeadlineLarge",Vv).component("HeadlineMedium",Hv).component("HeadlineSmall",Nv).component("TitleLarge",zv).component("TitleMedium",Bv).component("TitleSmall",jv).component("LabelLarge",Yv).component("LabelMedium",Uv).component("LabelSmall",Wv).component("BodyLarge",Gv).component("BodyMedium",qv).component("BodySmall",Zv).component("ExpandLayout",Xv).component("FixedLayout",Qv).component("FlexLayout",Jv).component("PageLayout",Kv).component("StickyLayout",eb).component("GridLayout",tb).component("Icon",ib).component("IconButton",sb),{mount:()=>{i.mount(t)},unmount:()=>{i&&i.unmount(),t.remove()},instance:i}};function TP(e,t,i){const s=IP(Ts(SP,{},{default:()=>Ts(i)}));return s.instance._component.props={...t,getProcessStateInstance:e},{...s,getProcessStateInstance:e}}const Zn=Jd("process_store",{state:()=>({processes:[]}),getters:{getAllProcesses:e=>e.processes,getAllProcessByRunningInBackground:e=>e.processes.filter(t=>t.getProcessStateInstance().process.runningInBackground),getAllProcessByMinimize:e=>e.processes.filter(t=>t.getProcessStateInstance().accessibility.minimize),getProcessByProcessId:e=>t=>e.processes.filter(i=>t===i.getProcessStateInstance().process.processId)[0]},actions:{createNewProcess({title:e,icon:t="bug_report"},i){const s=tt(vP({info:{title:e,icon:t}})),n=()=>{const r=o.instance._container.children.item(0);r.style.width.includes("%")||r.style.height.includes("%")||(s.value.window.size.width=parseInt(r.style.width),s.value.window.size.height=parseInt(r.style.height))},o=TP(()=>s.value,{onClose:()=>o.unmount(),onMaximize:()=>{s.value.accessibility.maximize=!s.value.accessibility.maximize},onChangeWindowSize:()=>n(),onMinimize:()=>{n(),s.value.accessibility.minimize=!0},onFocus:()=>{s.value.accessibility.focus=!0},onUnfocus:()=>{n(),s.value.accessibility.focus=!1},onActive:()=>{s.value.accessibility.active=!0},onInactive:()=>{s.value.accessibility.active=!1},onFullscreen:()=>{s.value.accessibility.maximize=!0,s.value.accessibility.fullscreen=!0},onUnFullscreen:()=>{s.value.accessibility.maximize=!1,s.value.accessibility.fullscreen=!1},onGragwindow:r=>{if(s.value.accessibility.maximize)return!1;const a=o.instance._container.children.item(0),l={x:r.clientX-a.offsetLeft,y:r.clientY-a.offsetTop};return document.onmousemove=c=>{const u={x:0,y:0};u.x=c.clientX-l.x,u.y=c.clientY-l.y,s.value.window.position.x=u.x,s.value.window.position.y=u.y},document.onmouseup=()=>{document.onmousemove=null,document.onmouseup=null},!1}},i);return this.processes.push(o),o},killAllProcesses(){this.processes.map(e=>e.instance.unmount()),this.processes=[]},cleanFocus(){this.processes=this.processes.map(e=>(e.getProcessStateInstance().accessibility.focus=!1,e))},cleanActive(){this.processes=this.processes.map(e=>(e.getProcessStateInstance().accessibility.active=!1,e))},swapZIndex(e,t){if(e===t||this.processes.length<=1)return;const i={x:this.processes.filter(s=>s.getProcessStateInstance().window.info.activeZIndex===e)[0],y:this.processes.filter(s=>s.getProcessStateInstance().window.info.activeZIndex===t)[0]};i.x.getProcessStateInstance().window.info.activeZIndex=t,i.y.getProcessStateInstance().window.info.activeZIndex=e},setTopZIndex(e){if(this.processes.length<=1)return;const i=Object.assign([],this.processes).sort((r,a)=>a.getProcessStateInstance().window.info.activeZIndex-r.getProcessStateInstance().window.info.activeZIndex),s=i.filter(r=>r===e)[0],n=i[0],o=s.getProcessStateInstance().window.info.activeZIndex;s.getProcessStateInstance().window.info.activeZIndex=n.getProcessStateInstance().window.info.activeZIndex,n.getProcessStateInstance().window.info.activeZIndex=o},killProcessByProcessId(e){if(this.processes.length===0)return;const t=this.processes.filter(i=>e===i.getProcessStateInstance().process.processId)[0];t.instance.unmount(),this.processes.splice(this.processes.indexOf(t),1)},setRunningInBackground(e,t){e.getProcessStateInstance().process.runningInBackground=t},setMinimize(e,t){e.getProcessStateInstance().accessibility.minimize=t},setAllProcessMinimize(){this.processes.map(e=>e.getProcessStateInstance().accessibility.minimize=!0)}}}),FP=ve({__name:"KillProcessButton",props:{currentProcess:{}},setup(e){const t=e,i=Zn();return(s,n)=>(M(),ee("fluent-button",{onClick:n[0]||(n[0]=()=>{t.currentProcess!==null&&oe(i).killProcessByProcessId(t.currentProcess.getProcessStateInstance().process.processId)}),appearance:"neutral"},"End Process"))}}),DP=["onClick"],Fp=ve({__name:"ProcessList",props:{currentProcess:{}},emits:["setCurrentProcess"],setup(e,{emit:t}){const i=e,s=Zn();return(n,o)=>(M(!0),ee(gt,null,Gn(oe(s).getAllProcesses,r=>(M(),ee("li",{key:r.getProcessStateInstance().process.processId,onClick:a=>t("setCurrentProcess",r),class:Ht(["transition-all active:bg-white px-4 py-2 rounded flex gap-2 overflow-auto",[r===i.currentProcess?"bg-blue-500/25 hover:bg-blue-500/50":"hover:bg-white/75"]])},[je(n.$slots,"default",{e:r})],10,DP))),128))}}),RP=e=>(jd("data-v-2203b3a7"),e=e(),Yd(),e),EP=RP(()=>P("fluent-divider",{class:"w-[1px] h-6 bg-black/10"},null,-1)),OP=ve({__name:"Manager",setup(e){const t=tt(null),i=s=>{t.value=s};return(s,n)=>{const o=le("FlexLayout"),r=le("PageLayout");return M(),st(r,null,{default:F(()=>[I(o,{class:"flex-col gap-1 h-full"},{default:F(()=>[I(o,{class:"justify-end items-center bg-white/50 w-full p-2 rounded-container"},{default:F(()=>[I(FP,{"current-process":t.value},null,8,["current-process"])]),_:1}),I(oe(ry),{as:"div",class:"flex w-full h-full gap-1"},{default:F(()=>[I(oe(ay),{as:"fluent-listbox",class:"gap-1 transition-all"},{default:F(()=>[I(oe(zu),{as:"fluent-option",value:"processes",selected:""},{default:F(()=>[we("Processes")]),_:1}),I(oe(zu),{as:"fluent-option",value:"details"},{default:F(()=>[we("Details")]),_:1})]),_:1}),I(oe(ly),{as:"div",class:"bg-white/75 rounded-container w-full h-full"},{default:F(()=>[I(oe(uo),{as:"ul",class:"p-2 h-full"},{default:F(()=>[I(Fp,{onSetCurrentProcess:i,"current-process":t.value},{default:F(({e:a})=>[P("h1",null,ct(a.getProcessStateInstance().window.info.title),1)]),_:1},8,["current-process"])]),_:1}),I(oe(uo),{as:"ul",class:"p-2 h-full"},{default:F(()=>[I(Fp,{onSetCurrentProcess:i,"current-process":t.value},{default:F(({e:a})=>[P("h1",null,ct(a.getProcessStateInstance().window.info.title),1),EP,P("h1",null,ct(a.getProcessStateInstance().process.processId),1)]),_:1},8,["current-process"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),PP=Pe(OP,[["__scopeId","data-v-2203b3a7"]]),LP={},AP={class:"relative overflow-clip p-2 h-full"},MP=P("div",{class:"w-full h-full rounded overflow-clip"},[P("fluent-text-area",{autofocus:"",placeholder:"Notepad beta, type here.",resize:"vertical",appearance:"outline",class:"w-full h-full"})],-1);function VP(e,t){const i=le("TitleLarge"),s=le("PageLayout");return M(),st(s,null,{default:F(()=>[P("div",AP,[P("header",null,[I(i,null,{default:F(()=>[we("Notepad Beta")]),_:1})]),MP])]),_:1})}const HP=Pe(LP,[["render",VP]]),NP=ve({__name:"Camera",setup(e){const t=tt(),i=tt(),s=()=>{let n=document.createElement("canvas");n.getContext("2d").drawImage(t.value,0,0,n.width,n.height),n.style.width="8rem",n.style.aspectRatio="1 / 1",i.value.appendChild(n)};return zt(()=>{navigator&&navigator.mediaDevices?navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"user",width:300,height:300}}).then(n=>{t.value.srcObject=n,t.value.onloadedmetadata=()=>t.value.play()}).catch(()=>{console.log("Unknown error.")}):console.log("camera API is not supported by your browser")}),tc(()=>{t.value.onloadedmetadata=null}),xi(()=>{}),(n,o)=>{const r=le("FlexLayout"),a=le("PageLayout");return M(),st(a,null,{default:F(()=>[I(r,{class:"flex-col h-full w-full gap-2 items-center justify-center"},{default:F(()=>[P("video",{ref_key:"cameraVideoRef",ref:t,class:"rounded-container h-full aspect-square"},null,512),P("fluent-button",{type:"button",appearance:"accent",onClick:s},"Take Photo")]),_:1}),I(r,{class:"gap-2 items-center flex-row flex-wrap"},{default:F(()=>[P("div",{ref_key:"cameraResultListRef",ref:i,class:"flex-none"},null,512)]),_:1})]),_:1})}}}),Da=(e,t,i,s)=>({label:e,icon:t,slot:i,title:s}),zP=[Da("Settings","settings",pP,"Settings Demo"),Da("Task Manager","man",PP,"Task Manager Demo"),Da("NotePad","note",HP,"Notepad Demo"),Da("Camera","camera",NP,"Camera Demo")];function xh(){return zP}function wh(e,t,i="bug_report"){Zn().createNewProcess({title:t,icon:i},e).mount()}const BP={class:"p-2 grid place-content-center"},jP=ve({__name:"PinnedApps",emits:["closeStartsMenu"],setup(e,{emit:t}){return(i,s)=>{const n=le("Icon"),o=le("LabelSmall"),r=le("IconButton"),a=le("GridLayout");return M(),st(a,{class:"relative gap-2 grid-cols-4 md:grid-cols-6 grid-rows-auto overflow-y-auto h-40 items-start"},{default:F(()=>[(M(!0),ee(gt,null,Gn(oe(xh)(),l=>(M(),st(r,{"has-hover":"","has-active":"",onClick:()=>{t("closeStartsMenu"),oe(wh)(l.slot,l.title,l.icon)},key:l.slot,class:"h-16 w-24"},{default:F(()=>[P("div",BP,[I(n,null,{default:F(()=>[we(ct(l.icon),1)]),_:2},1024),I(o,{class:"select-none mt-2"},{default:F(()=>[we(ct(l.label),1)]),_:2},1024)])]),_:2},1032,["onClick"]))),128))]),_:1})}}}),YP=["onClick"],UP=P("div",{class:"rounded-full w-8 h-8 bg-white/75"},null,-1),WP={class:"max-w-[12rem] overflow-clip text-ellipsis"},GP=P("fluent-menu-item",null,"Lock",-1),qP=["onClick"],ZP=ve({__name:"SimpleUserProfile",setup(e){const t=Ki(),i=xc(),s=()=>{i.setIsLogout(!0),t.setIsLocked(!0)};return(n,o)=>{const r=le("ExpandLayout");return M(),st(r,null,{actions:F(({isExpanded:a,setIsExpanded:l})=>[P("div",{onClick:c=>l(!a),class:"inline-flex items-center gap-2 px-4 py-2 rounded-[4px] hover:bg-white/75"},[UP,P("span",WP,ct(oe(i).getUserAccountState.name),1)],8,YP)]),"expanded-content":F(({isExpanded:a,setIsExpanded:l})=>[P("div",{class:Ht(["relative z-0",[a?"opacity-100":"opacity-0 pointer-events-none"]])},[P("fluent-menu",{class:"absolute bottom-10 left-0 w-32 z-0"},[P("fluent-menu-item",{onClick:s},"Sign-out"),GP]),Qr(P("div",{onClick:c=>l(!1),class:"fixed full-screen bottom-0 right-0 -z-[1]"},null,8,qP),[[Jr,a]])],2)]),_:1})}}}),XP={class:"h-full aspect-square p-2"},QP={class:"absolute bottom-10 right-0 w-32 z-0"},JP=P("fluent-menu-item",null,"Sleep",-1),KP=P("fluent-menu-item",null,"Restart",-1),eL=["onClick"],tL=ve({__name:"ShutdownMenu",setup(e){const t=Ki();return(i,s)=>{const n=le("Icon"),o=le("IconButton"),r=le("ExpandLayout");return M(),st(r,{class:"relative"},{actions:F(({isExpanded:a,setIsExpanded:l})=>[I(o,{"has-hover":"","has-active":"",onClick:c=>l(!a)},{default:F(()=>[P("div",XP,[I(n,null,{default:F(()=>[we(" power_settings_new ")]),_:1})])]),_:2},1032,["onClick"])]),"expanded-content":F(({isExpanded:a,setIsExpanded:l})=>[P("div",{class:Ht(["fixed z-0",[a?"opacity-100":"opacity-0 pointer-events-none"]])},[P("fluent-menu",QP,[JP,P("fluent-menu-item",{onClick:s[0]||(s[0]=c=>oe(t).setNeedShutdown(!0))},"Shut down"),KP]),Qr(P("div",{onClick:c=>l(!1),class:"fixed w-screen h-screen bottom-0 right-0 -z-[1]"},null,8,eL),[[Jr,a]])],2)]),_:1})}}}),iL=e=>(jd("data-v-91e537d5"),e=e(),Yd(),e),sL={class:"rounded hover:bg-white/75 h-full aspect-square overflow-clip"},nL=iL(()=>P("div",{class:"starts-button-group relative windows-starts-icon-special-shape overflow-clip w-6 h-6 grid grid-cols-2 grid-rows-2 gap-[1.25px]"},[P("div",{class:"first-block-highlight"}),P("div"),P("div"),P("div")],-1)),oL=[nL],rL=ve({__name:"StartsButton",props:{isExpanded:{type:Boolean}},emits:["setIsExpanded"],setup(e,{emit:t}){const i=e,s=Ki();var n=[];const o=r=>{if(n.length===0){n[0]=r.code;return}else n.length===1?n[1]=r.code:r.code!==n[1]&&(n.shift(),n[1]=r.code);["ShiftLeft","ShiftRight"].includes(n[0])&&(n[1]==="MetaLeft"&&(s.setStarts({...s.getSystemStarts,isOpening:!i.isExpanded}),t("setIsExpanded",!i.isExpanded)),n=[])};return zt(()=>{document.addEventListener("keydown",o)}),xi(()=>{document.removeEventListener("keydown",o)}),(r,a)=>(M(),ee("div",sL,[P("div",{onClick:a[0]||(a[0]=()=>{oe(s).setStarts({...oe(s).getSystemStarts,isOpening:!i.isExpanded}),t("setIsExpanded",!i.isExpanded)}),class:"w-full h-full transition-all active:scale-75 grid place-content-center"},oL)]))}}),aL=Pe(rL,[["__scopeId","data-v-91e537d5"]]),lL={appearance:"neutral"},cL={slot:"end",class:"material-symbols-outlined"},Dp=ve({__name:"ApplicationListButton",props:{label:{},icon:{}},setup(e){const t=e;return(i,s)=>(M(),ee("fluent-button",lL,[we(ct(t.label)+" ",1),P("span",cL,ct(t.icon),1)]))}}),uL={class:"relative overflow-clip text-ellipsis w-full h-full"},dL={class:"flex flex-row items-center gap-2 p-2"},hL=ve({__name:"ApplicationListItem",props:{app:{}},emits:["closeStartsMenu"],setup(e,{emit:t}){const i=e;return(s,n)=>{const o=le("Icon"),r=le("LabelLarge"),a=le("IconButton");return M(),ee("div",uL,[(M(),st(a,{"has-hover":"","has-active":"",onClick:n[0]||(n[0]=()=>{t("closeStartsMenu"),oe(wh)(i.app.slot,i.app.title,i.app.icon)}),key:i.app.slot},{default:F(()=>[P("div",dL,[I(o,null,{default:F(()=>[we(ct(i.app.icon),1)]),_:1}),I(r,{class:"select-none"},{default:F(()=>[we(ct(i.app.label),1)]),_:1})])]),_:1}))])}}}),fL=ve({__name:"ApplicationList",emits:["closeStartsMenu"],setup(e,{emit:t}){const i=xh();return(s,n)=>{const o=le("FlexLayout");return M(),st(o,{class:"flex-col gap-2"},{default:F(()=>[(M(!0),ee(gt,null,Gn(oe(i),(r,a)=>(M(),st(hL,{index:a,app:r,onCloseStartsMenu:n[0]||(n[0]=l=>t("closeStartsMenu"))},null,8,["index","app"]))),256))]),_:1})}}}),pL=ve({__name:"TablePanel",setup(e){const t=tt("page-one"),i=s=>{t.value=s};return(s,n)=>(M(),ee("div",null,[je(s.$slots,"app-one",{currentPage:t.value,setCurrentPage:i}),je(s.$slots,"app-two",{currentPage:t.value,setCurrentPage:i})]))}}),gL={class:"relative backdrop-blur-lg bg-white/[0.85] bottom-0 w-screen mx-auto max-w-2xl overflow-auto max-h-[32rem]"},mL={class:"start-panel-content-aera"},vL=["onClick"],bL=ve({__name:"Starts",setup(e){const t=Ki();return(i,s)=>{const n=le("LabelLarge"),o=le("FlexLayout"),r=le("ExpandLayout");return M(),st(r,{class:"relative flex items-center justify-center h-full aspect-square"},{actions:F(({isExpanded:a,setIsExpanded:l})=>[I(aL,{onSetIsExpanded:l,"is-expanded":a},null,8,["onSetIsExpanded","is-expanded"])]),"expanded-content":F(({isExpanded:a,setIsExpanded:l})=>[P("div",{class:Ht(["full-screen fixed top-0 left-0 grid justify-center items-end pb-16",[a?"active opacity-100":"opacity-0 select-none pointer-events-none"]])},[P("fluent-card",gL,[P("div",mL,[I(jO,{class:"px-8 pt-8 row-span-1"}),I(o,{class:"w-full flex-col px-8 gap-4 overflow-auto",style:{"grid-row":"span 10 / span 10"}},{default:F(()=>[I(pL,{class:"w-full relative overflow-x-clip"},{"app-one":F(({currentPage:c,setCurrentPage:u})=>[P("div",{class:Ht(["w-full absolute top-0 space-y-2 table-transition",[c!=="page-one"?"-left-[200%]":"left-0"]])},[I(o,{class:"justify-between items-center px-4"},{default:F(()=>[I(n,null,{default:F(()=>[we("Pinned")]),_:1}),I(Dp,{onClick:d=>u("page-two"),class:"self-end",label:"All Apps",icon:"arrow_forward"},null,8,["onClick"])]),_:2},1024),I(jP,{onCloseStartsMenu:d=>l(!1)},null,8,["onCloseStartsMenu"])],2)]),"app-two":F(({currentPage:c,setCurrentPage:u})=>[P("div",{class:Ht(["w-full absolute top-0 space-y-2 table-transition",[c!=="page-two"?"left-[200%]":"left-0"]])},[I(o,{class:"justify-between items-center px-4"},{default:F(()=>[I(n,null,{default:F(()=>[we("All Apps")]),_:1}),I(Dp,{onClick:d=>u("page-one"),label:"Back",icon:"arrow_back"},null,8,["onClick"])]),_:2},1024),I(fL,{onCloseStartsMenu:d=>l(!1)},null,8,["onCloseStartsMenu"])],2)]),_:2},1024)]),_:2},1024),I(o,{class:"row-span-1 justify-between items-center bg-black/5 px-8 py-2 border-t"},{default:F(()=>[I(ZP),I(tL)]),_:1})])]),Qr(P("div",{onClick:()=>{oe(t).setStarts({...oe(t).getSystemStarts,isOpening:!a}),l(!1)},class:"fixed left-0 bottom-0 w-screen h-screen -z-[1]"},null,8,vL),[[Jr,a]])],2)]),_:1})}}}),yL=Pe(bL,[["__scopeId","data-v-1eb51cd8"]]),xL={class:"px-8 py-4"},wL=ve({__name:"NightLightNavigationButton",setup(e){const t=Ki();return(i,s)=>{const n=le("Icon"),o=le("IconButton");return M(),st(o,{"has-hover":"","has-active":"",onClick:oe(t).toggleIsNightlight,class:Ht({"bg-primary-500":oe(t).getSystemIsNightlight})},{default:F(()=>[P("div",xL,[I(n,null,{default:F(()=>[we(" light ")]),_:1})])]),_:1},8,["onClick","class"])}}}),$L={class:"px-8 py-4 grid place-content-center"},_L={class:"px-8 py-4 grid place-content-center"},kL={class:"px-8 py-4 grid place-content-center"},SL=ve({__name:"NavigationButtons",setup(e){return(t,i)=>{const s=le("Icon"),n=le("IconButton"),o=le("GridLayout");return M(),st(o,{class:"grid-cols-3 gap-2"},{default:F(()=>[I(n,{"has-hover":"","has-active":""},{default:F(()=>[P("div",$L,[I(s,null,{default:F(()=>[we("wifi")]),_:1})])]),_:1}),I(n,{"has-hover":"","has-active":""},{default:F(()=>[P("div",_L,[I(s,null,{default:F(()=>[we("bluetooth")]),_:1})])]),_:1}),I(n,{"has-hover":"","has-active":""},{default:F(()=>[P("div",kL,[I(s,null,{default:F(()=>[we("air")]),_:1})])]),_:1}),I(wL)]),_:1})}}}),CL={class:"w-full h-full active:scale-75 transition-all px-2"},IL={class:"w-full h-full grid place-content-center"},TL=ve({__name:"NavigationToggleButton",props:{isExpanded:{type:Boolean}},emits:["setIsExpanded"],setup(e,{emit:t}){const i=e;return(s,n)=>{const o=le("Icon"),r=le("FlexLayout");return M(),ee("div",{onClick:n[0]||(n[0]=a=>t("setIsExpanded",!i.isExpanded)),class:"rounded hover:bg-white/75 transition-all w-full h-full"},[P("div",CL,[P("div",IL,[I(r,null,{default:F(()=>[I(o,{class:"scale-75"},{default:F(()=>[we("wifi")]),_:1}),I(o,{class:"scale-75 hidden md:block"},{default:F(()=>[we("volume_up")]),_:1}),I(o,{class:"scale-75 hidden md:block"},{default:F(()=>[we("power")]),_:1})]),_:1})])])])}}}),FL={class:"space-y-8"},DL=["value"],RL=P("fluent-slider",{value:"00"},null,-1),EL=ve({__name:"NavigationSystemControl",setup(e){const t=Ki(),i=s=>{t.setBrightness(s.target.valueAsNumber)};return(s,n)=>{const o=le("Icon"),r=le("FlexLayout");return M(),ee("div",FL,[I(r,{class:"gap-4"},{default:F(()=>[I(o,{class:"relative -top-2"},{default:F(()=>[we("light")]),_:1}),P("fluent-slider",{onChange:i,id:"systemBrightnessSliderRef",value:oe(t).getSystemBrightness,min:"30",max:"100"},null,40,DL)]),_:1}),I(r,{class:"gap-4"},{default:F(()=>[I(o,{class:"relative -top-2"},{default:F(()=>[we("volume_up")]),_:1}),RL]),_:1})])}}}),OL={class:"relative hover:bg-white/75 rounded"},PL=ve({__name:"DateAndTimeButton",setup(e){const t=tt(B().format("MM-DD-YYYY")),i=tt(B().format("HH:mm")),s=()=>{t.value=B().format("MM-DD-YYYY"),i.value=B().format("HH:mm")};var n=void 0;return zt(()=>{n=setInterval(s,1e3)}),xi(()=>{clearInterval(n)}),(o,r)=>{const a=le("LabelMedium"),l=le("LabelSmall"),c=le("FlexLayout");return M(),ee("div",OL,[I(c,{class:"select-none w-full h-full active:scale-75 transition-all px-2 flex flex-col items-end justify-around text-end whitespace-nowrap"},{default:F(()=>[I(a,null,{default:F(()=>[we(ct(i.value),1)]),_:1}),I(l,null,{default:F(()=>[we(ct(t.value),1)]),_:1})]),_:1})])}}}),LL={class:"relative backdrop-blur-lg bg-white/[0.85] w-full max-w-2xl overflow-auto max-h-[24rem]"},AL=["onClick"],ML=ve({__name:"Navigation",setup(e){return(t,i)=>{const s=le("FlexLayout"),n=le("ExpandLayout");return M(),st(s,{class:"h-full gap-2"},{default:F(()=>[I(n,{class:"relative h-full"},{actions:F(({isExpanded:o,setIsExpanded:r})=>[I(TL,{onSetIsExpanded:r,"is-expanded":o},null,8,["onSetIsExpanded","is-expanded"])]),"expanded-content":F(({isExpanded:o,setIsExpanded:r})=>[P("div",{class:Ht(["full-screen fixed top-0 left-0 grid justify-end items-end pb-16 pr-2",[o?"active opacity-100":"opacity-0 select-none pointer-events-none"]])},[P("fluent-card",LL,[I(s,{class:"flex-col p-4 gap-8 justify-between h-full"},{default:F(()=>[I(SL),I(EL)]),_:1})]),Qr(P("div",{onClick:a=>r(!1),class:"fixed left-0 bottom-0 w-screen h-screen -z-[1]"},null,8,AL),[[Jr,o]])],2)]),_:1}),I(PL,{class:"hidden xs:block"})]),_:1})}}}),VL=Pe(ML,[["__scopeId","data-v-87e9073f"]]),HL={class:"relative h-full flex gap-1 select-none overflow-auto"},NL=["onClick"],zL={class:"h-full aspect-square grid"},BL=["anchor"],jL=ve({__name:"MinimizeApps",setup(e){const t=Zn();return(i,s)=>{const n=le("Icon"),o=le("IconButton");return M(),ee("ul",HL,[(M(!0),ee(gt,null,Gn(oe(t).getAllProcesses,r=>(M(),ee("div",{key:r.getProcessStateInstance().process.processId,onClick:()=>{oe(t).setMinimize(r,!r.getProcessStateInstance().accessibility.minimize),oe(t).cleanActive(),oe(t).cleanFocus(),r.getProcessStateInstance().accessibility.active=!0,r.getProcessStateInstance().accessibility.focus=!0,oe(t).setTopZIndex(r)}},[I(o,{"has-hover":"","has-active":"",id:"process"+r.getProcessStateInstance().process.processId,class:"h-full aspect-square"},{default:F(()=>[P("div",zL,[I(n,null,{default:F(()=>[we(ct(r.getProcessStateInstance().window.info.icon),1)]),_:2},1024)])]),_:2},1032,["id"]),P("fluent-tooltip",{position:"top",anchor:"process"+r.getProcessStateInstance().process.processId},ct(r.getProcessStateInstance().window.info.title),9,BL)],8,NL))),128))])}}}),YL={class:"relative w-full h-12 border-t border-black/20 back-blur p-1"},UL=P("div",{class:"hidden flex-initial w-1/4 md:block h-full self-start overflow-auto"},null,-1),WL={class:"relative h-full flex-1 duration-1000 transition-all overflow-clip"},GL={class:"flex-none w-fit md:w-1/4 h-full flex justify-end"},qL=ve({__name:"StartsBar",setup(e){return(t,i)=>{const s=le("FlexLayout");return M(),ee("div",YL,[I(s,{class:"relative w-full h-full items-center justify-between overflow-clip"},{default:F(()=>[UL,P("div",WL,[I(s,{class:"h-full items-center justify-start md:justify-center gap-1"},{default:F(()=>[I(yL),I(jL)]),_:1})]),P("div",GL,[I(VL)])]),_:1})])}}}),ZL={class:"relative wallpaper full-screen overflow-clip"},XL={class:"flex flex-col gap-2 flex-wrap p-2"},QL={class:"grid place-content-center w-16 h-16"},JL=ve({__name:"Desktop",setup(e){const t=xh();return(i,s)=>{const n=le("Icon"),o=le("IconButton");return M(),ee("div",ZL,[P("ul",XL,[(M(!0),ee(gt,null,Gn(oe(t),r=>(M(),ee("li",null,[I(o,{"has-hover":"","has-active":"",class:"w-fit h-fit",onClick:()=>{oe(wh)(r.slot,r.title,r.icon)}},{default:F(()=>[P("div",QL,[I(n,null,{default:F(()=>[we(ct(r.icon),1)]),_:2},1024)])]),_:2},1032,["onClick"])]))),256))])])}}}),KL={class:"relative max-h-[100svh] h-[100svh] w-screen overflow-clip"},eA={class:"flex-grow h-full max-h-[100svh] overflow-clip"},tA=ve({__name:"Windows",setup(e){const t=Zn(),i=Ki(),s=xc();cv(()=>{s.setIsLogout(!0),i.setIsShutdown(!1),i.setNeedShutdown(!1),i.setStarts({...i.getSystemStarts,isOpenning:!1})}),tc(()=>{s.setIsLogout(!0)});var n=[];const o=r=>{if(n.length===0){n[0]=r.code;return}else n.length===1?n[1]=r.code:r.code!==n[1]&&(n.shift(),n[1]=r.code);["ShiftLeft","ShiftRight"].includes(n[0])&&(n[1]==="KeyD"&&t.setAllProcessMinimize(),n=[])};return zt(()=>{document.addEventListener("keydown",o)}),xi(()=>{document.removeEventListener("keydown",o)}),(r,a)=>(M(),ee("div",KL,[oe(i).getSystemIsLocked?(M(),ee(gt,{key:1},[P("div",eA,[I(JL)]),P("nav",{class:"fixed bottom-0 left-0 w-full h-12",style:ln({zIndex:oe(i).getSystemStarts.isOpening?"99999":"999"})},[I(qL)],4)],64)):(M(),st(HO,{key:0}))]))}}),wc=oc(tA),iA=ve({__name:"ScreenMask",setup(e){const t=Ki();return zt(()=>{t.setIsLocked(!0)}),xi(()=>{t.setIsLocked(!0)}),(i,s)=>(M(),ee(gt,null,[P("div",{class:"brightness",style:ln({"--system-bright":100-oe(t).getSystemBrightness+"%"})},null,4),P("div",{class:"nightlight",style:ln({"--system-nightlight-enabled":oe(t).getSystemIsNightlight?"35%":"0"})},null,4)],64))}}),cy=oc(iA),sA={},nA={class:"fixed full-screen top-0 right-0 bg-black"};function oA(e,t){return M(),ee("div",nA,[je(e.$slots,"default")])}const rA=Pe(sA,[["render",oA]]),$h=e=>(jd("data-v-a25f2464"),e=e(),Yd(),e),aA={key:0,class:"full-screen flex flex-col items-center justify-center gap-8"},lA=$h(()=>P("h1",{class:"text-white font-bold text-xl"},"Shutdown",-1)),cA=$h(()=>P("fluent-progress-ring",null,null,-1)),uA=[lA,cA],dA={key:1,class:"container h-full max-h-96 flex flex-col gap-8 p-4 overflow-auto"},hA={class:"space-y-4 w-full h-full"},fA=$h(()=>P("h1",{class:"text-white font-bold text-xl"},"Some processes is running",-1)),pA={class:"transition-all flex items-center justify-between py-1 px-2 hover:bg-white/25 rounded"},gA={class:"inline-flex gap-2"},mA={class:"material-symbols-outlined"},vA={class:"flex items-center justify-end"},bA=["onClick"],yA={class:"flex gap-2 items-center justify-end"},xA=ve({__name:"Shutdown",setup(e){const t=Zn(),i=Ki();_s(()=>t.getAllProcesses.length,()=>{t.getAllProcesses.length===0&&i.setIsShutdown(!0)},{immediate:!0});var s;return zt(()=>{s=setTimeout(()=>{t.killAllProcesses()},12e4)}),tc(()=>{clearTimeout(s)}),(n,o)=>(M(),st(rA,{class:"z-highest shutdown flex justify-center items-center"},{default:F(()=>[oe(t).getAllProcesses.length===0?(M(),ee("div",aA,uA)):(M(),ee("div",dA,[P("div",hA,[fA,(M(!0),ee(gt,null,Gn(oe(t).getAllProcesses,r=>(M(),ee("ul",{key:r.getProcessStateInstance().process.processId,class:"text-white flex flex-col overflow-auto"},[P("li",pA,[P("div",gA,[P("span",mA,ct(r.getProcessStateInstance().window.info.icon),1),P("p",null,ct(r.getProcessStateInstance().window.info.title),1)]),P("div",vA,[P("span",{onClick:a=>oe(t).killProcessByProcessId(r.getProcessStateInstance().process.processId),class:"scale-75 p-2 rounded-full select-none hover:bg-white/25 material-symbols-outlined"},"close",8,bA)])])]))),128))]),P("div",yA,[P("fluent-button",{onClick:o[0]||(o[0]=()=>{oe(t).killAllProcesses()})},"End All Processes")])]))]),_:1}))}}),wA=Pe(xA,[["__scopeId","data-v-a25f2464"]]),uy=oc(wA),dy=hF();dy.use(_F);uF(wc);wc.use(dy).use(KI);wc.mount("#window");cy.mount("#window-screen-mask");const Bu=Ki();_s(()=>Bu.needShutdown,()=>{wc.unmount(),cy.unmount(),uy.mount("#window")});_s(()=>Bu.isShutdown,()=>{Bu.isShutdown&&setTimeout(()=>{document.documentElement.style.backgroundColor="#000",document.body.remove(),uy.unmount()},500)})});export default $A();
//# sourceMappingURL=index-5d73beb0.js.map
