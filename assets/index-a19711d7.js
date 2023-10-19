var Xv=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var AE=Xv((QE,Ea)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=i(n);fetch(n.href,o)}})();const _s=function(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof self<"u")return self;if(typeof window<"u")return window;try{return new Function("return this")()}catch{return{}}}();_s.trustedTypes===void 0&&(_s.trustedTypes={createPolicy:(t,e)=>e});const Qf={configurable:!1,enumerable:!1,writable:!1};_s.FAST===void 0&&Reflect.defineProperty(_s,"FAST",Object.assign({value:Object.create(null)},Qf));const ur=_s.FAST;if(ur.getById===void 0){const t=Object.create(null);Reflect.defineProperty(ur,"getById",Object.assign({value(e,i){let s=t[e];return s===void 0&&(s=i?t[e]=i():null),s}},Qf))}const Fn=Object.freeze([]);function Jf(){const t=new WeakMap;return function(e){let i=t.get(e);if(i===void 0){let s=Reflect.getPrototypeOf(e);for(;i===void 0&&s!==null;)i=t.get(s),s=Reflect.getPrototypeOf(s);i=i===void 0?[]:i.slice(0),t.set(e,i)}return i}}const mc=_s.FAST.getById(1,()=>{const t=[],e=[];function i(){if(e.length)throw e.shift()}function s(r){try{r.call()}catch(a){e.push(a),setTimeout(i,0)}}function n(){let a=0;for(;a<t.length;)if(s(t[a]),a++,a>1024){for(let l=0,c=t.length-a;l<c;l++)t[l]=t[l+a];t.length-=a,a=0}t.length=0}function o(r){t.length<1&&_s.requestAnimationFrame(n),t.push(r)}return Object.freeze({enqueue:o,process:n})}),Kf=_s.trustedTypes.createPolicy("fast-html",{createHTML:t=>t});let vc=Kf;const tr=`fast-${Math.random().toString(36).substring(2,8)}`,ep=`${tr}{`,Dd=`}${tr}`,de=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(t){if(vc!==Kf)throw new Error("The HTML policy can only be set once.");vc=t},createHTML(t){return vc.createHTML(t)},isMarker(t){return t&&t.nodeType===8&&t.data.startsWith(tr)},extractDirectiveIndexFromMarker(t){return parseInt(t.data.replace(`${tr}:`,""))},createInterpolationPlaceholder(t){return`${ep}${t}${Dd}`},createCustomAttributePlaceholder(t,e){return`${t}="${this.createInterpolationPlaceholder(e)}"`},createBlockPlaceholder(t){return`<!--${tr}:${t}-->`},queueUpdate:mc.enqueue,processUpdates:mc.process,nextUpdate(){return new Promise(mc.enqueue)},setAttribute(t,e,i){i==null?t.removeAttribute(e):t.setAttribute(e,i)},setBooleanAttribute(t,e,i){i?t.setAttribute(e,""):t.removeAttribute(e)},removeChildNodes(t){for(let e=t.firstChild;e!==null;e=t.firstChild)t.removeChild(e)},createTemplateWalker(t){return document.createTreeWalker(t,133,null,!1)}});class La{constructor(e,i){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=i}has(e){return this.spillover===void 0?this.sub1===e||this.sub2===e:this.spillover.indexOf(e)!==-1}subscribe(e){const i=this.spillover;if(i===void 0){if(this.has(e))return;if(this.sub1===void 0){this.sub1=e;return}if(this.sub2===void 0){this.sub2=e;return}this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else i.indexOf(e)===-1&&i.push(e)}unsubscribe(e){const i=this.spillover;if(i===void 0)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}notify(e){const i=this.spillover,s=this.source;if(i===void 0){const n=this.sub1,o=this.sub2;n!==void 0&&n.handleChange(s,e),o!==void 0&&o.handleChange(s,e)}else for(let n=0,o=i.length;n<o;++n)i[n].handleChange(s,e)}}class tp{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var i;const s=this.subscribers[e];s!==void 0&&s.notify(e),(i=this.sourceSubscribers)===null||i===void 0||i.notify(e)}subscribe(e,i){var s;if(i){let n=this.subscribers[i];n===void 0&&(this.subscribers[i]=n=new La(this.source)),n.subscribe(e)}else this.sourceSubscribers=(s=this.sourceSubscribers)!==null&&s!==void 0?s:new La(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,i){var s;if(i){const n=this.subscribers[i];n!==void 0&&n.unsubscribe(e)}else(s=this.sourceSubscribers)===null||s===void 0||s.unsubscribe(e)}}const le=ur.getById(2,()=>{const t=/(:|&&|\|\||if)/,e=new WeakMap,i=de.queueUpdate;let s,n=c=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function o(c){let d=c.$fastController||e.get(c);return d===void 0&&(Array.isArray(c)?d=n(c):e.set(c,d=new tp(c))),d}const r=Jf();class a{constructor(d){this.name=d,this.field=`_${d}`,this.callback=`${d}Changed`}getValue(d){return s!==void 0&&s.watch(d,this.name),d[this.field]}setValue(d,h){const v=this.field,w=d[v];if(w!==h){d[v]=h;const F=d[this.callback];typeof F=="function"&&F.call(d,w,h),o(d).notify(this.name)}}}class l extends La{constructor(d,h,v=!1){super(d,h),this.binding=d,this.isVolatileBinding=v,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(d,h){this.needsRefresh&&this.last!==null&&this.disconnect();const v=s;s=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const w=this.binding(d,h);return s=v,w}disconnect(){if(this.last!==null){let d=this.first;for(;d!==void 0;)d.notifier.unsubscribe(this,d.propertyName),d=d.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(d,h){const v=this.last,w=o(d),F=v===null?this.first:{};if(F.propertySource=d,F.propertyName=h,F.notifier=w,w.subscribe(this,h),v!==null){if(!this.needsRefresh){let $;s=void 0,$=v.propertySource[v.propertyName],s=this,d===$&&(this.needsRefresh=!0)}v.next=F}this.last=F}handleChange(){this.needsQueue&&(this.needsQueue=!1,i(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let d=this.first;return{next:()=>{const h=d;return h===void 0?{value:void 0,done:!0}:(d=d.next,{value:h,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(c){n=c},getNotifier:o,track(c,d){s!==void 0&&s.watch(c,d)},trackVolatile(){s!==void 0&&(s.needsRefresh=!0)},notify(c,d){o(c).notify(d)},defineProperty(c,d){typeof d=="string"&&(d=new a(d)),r(c).push(d),Reflect.defineProperty(c,d.name,{enumerable:!0,get:function(){return d.getValue(this)},set:function(h){d.setValue(this,h)}})},getAccessors:r,binding(c,d,h=this.isVolatileBinding(c)){return new l(c,d,h)},isVolatileBinding(c){return t.test(c.toString())}})});function _(t,e){le.defineProperty(t,e)}function Qv(t,e,i){return Object.assign({},i,{get:function(){return le.trackVolatile(),i.get.apply(this)}})}const rh=ur.getById(3,()=>{let t=null;return{get(){return t},set(e){t=e}}});class hr{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return rh.get()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){rh.set(e)}}le.defineProperty(hr.prototype,"index");le.defineProperty(hr.prototype,"length");const ir=Object.seal(new hr);class tl{constructor(){this.targetIndex=0}}class ip extends tl{constructor(){super(...arguments),this.createPlaceholder=de.createInterpolationPlaceholder}}class Rd extends tl{constructor(e,i,s){super(),this.name=e,this.behavior=i,this.options=s}createPlaceholder(e){return de.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function Jv(t,e){this.source=t,this.context=e,this.bindingObserver===null&&(this.bindingObserver=le.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(t,e))}function Kv(t,e){this.source=t,this.context=e,this.target.addEventListener(this.targetName,this)}function eb(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function tb(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const t=this.target.$fastView;t!==void 0&&t.isComposed&&(t.unbind(),t.needsBindOnly=!0)}function ib(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function sb(t){de.setAttribute(this.target,this.targetName,t)}function nb(t){de.setBooleanAttribute(this.target,this.targetName,t)}function ob(t){if(t==null&&(t=""),t.create){this.target.textContent="";let e=this.target.$fastView;e===void 0?e=t.create():this.target.$fastTemplate!==t&&(e.isComposed&&(e.remove(),e.unbind()),e=t.create()),e.isComposed?e.needsBindOnly&&(e.needsBindOnly=!1,e.bind(this.source,this.context)):(e.isComposed=!0,e.bind(this.source,this.context),e.insertBefore(this.target),this.target.$fastView=e,this.target.$fastTemplate=t)}else{const e=this.target.$fastView;e!==void 0&&e.isComposed&&(e.isComposed=!1,e.remove(),e.needsBindOnly?e.needsBindOnly=!1:e.unbind()),this.target.textContent=t}}function rb(t){this.target[this.targetName]=t}function ab(t){const e=this.classVersions||Object.create(null),i=this.target;let s=this.version||0;if(t!=null&&t.length){const n=t.split(/\s+/);for(let o=0,r=n.length;o<r;++o){const a=n[o];a!==""&&(e[a]=s,i.classList.add(a))}}if(this.classVersions=e,this.version=s+1,s!==0){s-=1;for(const n in e)e[n]===s&&i.classList.remove(n)}}class Od extends ip{constructor(e){super(),this.binding=e,this.bind=Jv,this.unbind=eb,this.updateTarget=sb,this.isBindingVolatile=le.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,e!==void 0)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=rb,this.cleanedTargetName==="innerHTML"){const i=this.binding;this.binding=(s,n)=>de.createHTML(i(s,n))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=nb;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=Kv,this.unbind=ib;break;default:this.cleanedTargetName=e,e==="class"&&(this.updateTarget=ab);break}}targetAtContent(){this.updateTarget=ob,this.unbind=tb}createBehavior(e){return new lb(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class lb{constructor(e,i,s,n,o,r,a){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=i,this.isBindingVolatile=s,this.bind=n,this.unbind=o,this.updateTarget=r,this.targetName=a}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){hr.setEvent(e);const i=this.binding(this.source,this.context);hr.setEvent(null),i!==!0&&e.preventDefault()}}let bc=null;class Ed{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){bc=this}static borrow(e){const i=bc||new Ed;return i.directives=e,i.reset(),bc=null,i}}function cb(t){if(t.length===1)return t[0];let e;const i=t.length,s=t.map(r=>typeof r=="string"?()=>r:(e=r.targetName||e,r.binding)),n=(r,a)=>{let l="";for(let c=0;c<i;++c)l+=s[c](r,a);return l},o=new Od(n);return o.targetName=e,o}const db=Dd.length;function sp(t,e){const i=e.split(ep);if(i.length===1)return null;const s=[];for(let n=0,o=i.length;n<o;++n){const r=i[n],a=r.indexOf(Dd);let l;if(a===-1)l=r;else{const c=parseInt(r.substring(0,a));s.push(t.directives[c]),l=r.substring(a+db)}l!==""&&s.push(l)}return s}function ah(t,e,i=!1){const s=e.attributes;for(let n=0,o=s.length;n<o;++n){const r=s[n],a=r.value,l=sp(t,a);let c=null;l===null?i&&(c=new Od(()=>a),c.targetName=r.name):c=cb(l),c!==null&&(e.removeAttributeNode(r),n--,o--,t.addFactory(c))}}function ub(t,e,i){const s=sp(t,e.textContent);if(s!==null){let n=e;for(let o=0,r=s.length;o<r;++o){const a=s[o],l=o===0?e:n.parentNode.insertBefore(document.createTextNode(""),n.nextSibling);typeof a=="string"?l.textContent=a:(l.textContent=" ",t.captureContentBinding(a)),n=l,t.targetIndex++,l!==e&&i.nextNode()}t.targetIndex--}}function hb(t,e){const i=t.content;document.adoptNode(i);const s=Ed.borrow(e);ah(s,t,!0);const n=s.behaviorFactories;s.reset();const o=de.createTemplateWalker(i);let r;for(;r=o.nextNode();)switch(s.targetIndex++,r.nodeType){case 1:ah(s,r);break;case 3:ub(s,r,o);break;case 8:de.isMarker(r)&&s.addFactory(e[de.extractDirectiveIndexFromMarker(r)])}let a=0;(de.isMarker(i.firstChild)||i.childNodes.length===1&&e.length)&&(i.insertBefore(document.createComment(""),i.firstChild),a=-1);const l=s.behaviorFactories;return s.release(),{fragment:i,viewBehaviorFactories:l,hostBehaviorFactories:n,targetOffset:a}}const yc=document.createRange();class np{constructor(e,i){this.fragment=e,this.behaviors=i,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const i=this.lastChild;if(e.previousSibling===i)return;const s=e.parentNode;let n=this.firstChild,o;for(;n!==i;)o=n.nextSibling,s.insertBefore(n,e),n=o;s.insertBefore(i,e)}}remove(){const e=this.fragment,i=this.lastChild;let s=this.firstChild,n;for(;s!==i;)n=s.nextSibling,e.appendChild(s),s=n;e.appendChild(i)}dispose(){const e=this.firstChild.parentNode,i=this.lastChild;let s=this.firstChild,n;for(;s!==i;)n=s.nextSibling,e.removeChild(s),s=n;e.removeChild(i);const o=this.behaviors,r=this.source;for(let a=0,l=o.length;a<l;++a)o[a].unbind(r)}bind(e,i){const s=this.behaviors;if(this.source!==e)if(this.source!==null){const n=this.source;this.source=e,this.context=i;for(let o=0,r=s.length;o<r;++o){const a=s[o];a.unbind(n),a.bind(e,i)}}else{this.source=e,this.context=i;for(let n=0,o=s.length;n<o;++n)s[n].bind(e,i)}}unbind(){if(this.source===null)return;const e=this.behaviors,i=this.source;for(let s=0,n=e.length;s<n;++s)e[s].unbind(i);this.source=null}static disposeContiguousBatch(e){if(e.length!==0){yc.setStartBefore(e[0].firstChild),yc.setEndAfter(e[e.length-1].lastChild),yc.deleteContents();for(let i=0,s=e.length;i<s;++i){const n=e[i],o=n.behaviors,r=n.source;for(let a=0,l=o.length;a<l;++a)o[a].unbind(r)}}}}class lh{constructor(e,i){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=i}create(e){if(this.fragment===null){let c;const d=this.html;if(typeof d=="string"){c=document.createElement("template"),c.innerHTML=de.createHTML(d);const v=c.content.firstElementChild;v!==null&&v.tagName==="TEMPLATE"&&(c=v)}else c=d;const h=hb(c,this.directives);this.fragment=h.fragment,this.viewBehaviorFactories=h.viewBehaviorFactories,this.hostBehaviorFactories=h.hostBehaviorFactories,this.targetOffset=h.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const i=this.fragment.cloneNode(!0),s=this.viewBehaviorFactories,n=new Array(this.behaviorCount),o=de.createTemplateWalker(i);let r=0,a=this.targetOffset,l=o.nextNode();for(let c=s.length;r<c;++r){const d=s[r],h=d.targetIndex;for(;l!==null;)if(a===h){n[r]=d.createBehavior(l);break}else l=o.nextNode(),a++}if(this.hasHostBehaviors){const c=this.hostBehaviorFactories;for(let d=0,h=c.length;d<h;++d,++r)n[r]=c[d].createBehavior(e)}return new np(i,n)}render(e,i,s){typeof i=="string"&&(i=document.getElementById(i)),s===void 0&&(s=i);const n=this.create(s);return n.bind(e,ir),n.appendTo(i),n}}const fb=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function P(t,...e){const i=[];let s="";for(let n=0,o=t.length-1;n<o;++n){const r=t[n];let a=e[n];if(s+=r,a instanceof lh){const l=a;a=()=>l}if(typeof a=="function"&&(a=new Od(a)),a instanceof ip){const l=fb.exec(r);l!==null&&(a.targetName=l[2])}a instanceof tl?(s+=a.createPlaceholder(i.length),i.push(a)):s+=a}return s+=t[t.length-1],new lh(s,i)}class qt{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=this.behaviors===null?e:this.behaviors.concat(e),this}}qt.create=(()=>{if(de.supportsAdoptedStyleSheets){const t=new Map;return e=>new pb(e,t)}return t=>new vb(t)})();function Ld(t){return t.map(e=>e instanceof qt?Ld(e.styles):[e]).reduce((e,i)=>e.concat(i),[])}function op(t){return t.map(e=>e instanceof qt?e.behaviors:null).reduce((e,i)=>i===null?e:(e===null&&(e=[]),e.concat(i)),null)}let rp=(t,e)=>{t.adoptedStyleSheets=[...t.adoptedStyleSheets,...e]},ap=(t,e)=>{t.adoptedStyleSheets=t.adoptedStyleSheets.filter(i=>e.indexOf(i)===-1)};if(de.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),rp=(t,e)=>{t.adoptedStyleSheets.push(...e)},ap=(t,e)=>{for(const i of e){const s=t.adoptedStyleSheets.indexOf(i);s!==-1&&t.adoptedStyleSheets.splice(s,1)}}}catch{}class pb extends qt{constructor(e,i){super(),this.styles=e,this.styleSheetCache=i,this._styleSheets=void 0,this.behaviors=op(e)}get styleSheets(){if(this._styleSheets===void 0){const e=this.styles,i=this.styleSheetCache;this._styleSheets=Ld(e).map(s=>{if(s instanceof CSSStyleSheet)return s;let n=i.get(s);return n===void 0&&(n=new CSSStyleSheet,n.replaceSync(s),i.set(s,n)),n})}return this._styleSheets}addStylesTo(e){rp(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){ap(e,this.styleSheets),super.removeStylesFrom(e)}}let gb=0;function mb(){return`fast-style-class-${++gb}`}class vb extends qt{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=op(e),this.styleSheets=Ld(e),this.styleClass=mb()}addStylesTo(e){const i=this.styleSheets,s=this.styleClass;e=this.normalizeTarget(e);for(let n=0;n<i.length;n++){const o=document.createElement("style");o.innerHTML=i[n],o.className=s,e.append(o)}super.addStylesTo(e)}removeStylesFrom(e){e=this.normalizeTarget(e);const i=e.querySelectorAll(`.${this.styleClass}`);for(let s=0,n=i.length;s<n;++s)e.removeChild(i[s]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const Aa=Object.freeze({locate:Jf()}),Rr={toView(t){return t?"true":"false"},fromView(t){return!(t==null||t==="false"||t===!1||t===0)}},K={toView(t){if(t==null)return null;const e=t*1;return isNaN(e)?null:e.toString()},fromView(t){if(t==null)return null;const e=t*1;return isNaN(e)?null:e}};class Pa{constructor(e,i,s=i.toLowerCase(),n="reflect",o){this.guards=new Set,this.Owner=e,this.name=i,this.attribute=s,this.mode=n,this.converter=o,this.fieldName=`_${i}`,this.callbackName=`${i}Changed`,this.hasCallback=this.callbackName in e.prototype,n==="boolean"&&o===void 0&&(this.converter=Rr)}setValue(e,i){const s=e[this.fieldName],n=this.converter;n!==void 0&&(i=n.fromView(i)),s!==i&&(e[this.fieldName]=i,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](s,i),e.$fastController.notify(this.name))}getValue(e){return le.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,i){this.guards.has(e)||(this.guards.add(e),this.setValue(e,i),this.guards.delete(e))}tryReflectToAttribute(e){const i=this.mode,s=this.guards;s.has(e)||i==="fromView"||de.queueUpdate(()=>{s.add(e);const n=e[this.fieldName];switch(i){case"reflect":const o=this.converter;de.setAttribute(e,this.attribute,o!==void 0?o.toView(n):n);break;case"boolean":de.setBooleanAttribute(e,this.attribute,n);break}s.delete(e)})}static collect(e,...i){const s=[];i.push(Aa.locate(e));for(let n=0,o=i.length;n<o;++n){const r=i[n];if(r!==void 0)for(let a=0,l=r.length;a<l;++a){const c=r[a];typeof c=="string"?s.push(new Pa(e,c)):s.push(new Pa(e,c.property,c.attribute,c.mode,c.converter))}}return s}}function f(t,e){let i;function s(n,o){arguments.length>1&&(i.property=o),Aa.locate(n.constructor).push(i)}if(arguments.length>1){i={},s(t,e);return}return i=t===void 0?{}:t,s}const ch={mode:"open"},dh={},qc=ur.getById(4,()=>{const t=new Map;return Object.freeze({register(e){return t.has(e.type)?!1:(t.set(e.type,e),!0)},getByType(e){return t.get(e)}})});class il{constructor(e,i=e.definition){typeof i=="string"&&(i={name:i}),this.type=e,this.name=i.name,this.template=i.template;const s=Pa.collect(e,i.attributes),n=new Array(s.length),o={},r={};for(let a=0,l=s.length;a<l;++a){const c=s[a];n[a]=c.attribute,o[c.name]=c,r[c.attribute]=c}this.attributes=s,this.observedAttributes=n,this.propertyLookup=o,this.attributeLookup=r,this.shadowOptions=i.shadowOptions===void 0?ch:i.shadowOptions===null?void 0:Object.assign(Object.assign({},ch),i.shadowOptions),this.elementOptions=i.elementOptions===void 0?dh:Object.assign(Object.assign({},dh),i.elementOptions),this.styles=i.styles===void 0?void 0:Array.isArray(i.styles)?qt.create(i.styles):i.styles instanceof qt?i.styles:qt.create([i.styles])}get isDefined(){return!!qc.getByType(this.type)}define(e=customElements){const i=this.type;if(qc.register(this)){const s=this.attributes,n=i.prototype;for(let o=0,r=s.length;o<r;++o)le.defineProperty(n,s[o]);Reflect.defineProperty(i,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,i,this.elementOptions),this}}il.forType=qc.getByType;const lp=new WeakMap,bb={bubbles:!0,composed:!0,cancelable:!0};function xc(t){return t.shadowRoot||lp.get(t)||null}class Ad extends tp{constructor(e,i){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=i;const s=i.shadowOptions;if(s!==void 0){const o=e.attachShadow(s);s.mode==="closed"&&lp.set(e,o)}const n=le.getAccessors(e);if(n.length>0){const o=this.boundObservables=Object.create(null);for(let r=0,a=n.length;r<a;++r){const l=n[r].name,c=e[l];c!==void 0&&(delete e[l],o[l]=c)}}}get isConnected(){return le.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,le.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=e,!this.needsInitialization&&e!==null&&this.addStyles(e))}addStyles(e){const i=xc(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)i.append(e);else if(!e.isAttachedTo(i)){const s=e.behaviors;e.addStylesTo(i),s!==null&&this.addBehaviors(s)}}removeStyles(e){const i=xc(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)i.removeChild(e);else if(e.isAttachedTo(i)){const s=e.behaviors;e.removeStylesFrom(i),s!==null&&this.removeBehaviors(s)}}addBehaviors(e){const i=this.behaviors||(this.behaviors=new Map),s=e.length,n=[];for(let o=0;o<s;++o){const r=e[o];i.has(r)?i.set(r,i.get(r)+1):(i.set(r,1),n.push(r))}if(this._isConnected){const o=this.element;for(let r=0;r<n.length;++r)n[r].bind(o,ir)}}removeBehaviors(e,i=!1){const s=this.behaviors;if(s===null)return;const n=e.length,o=[];for(let r=0;r<n;++r){const a=e[r];if(s.has(a)){const l=s.get(a)-1;l===0||i?s.delete(a)&&o.push(a):s.set(a,l)}}if(this._isConnected){const r=this.element;for(let a=0;a<o.length;++a)o[a].unbind(r)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(e,ir);const i=this.behaviors;if(i!==null)for(const[s]of i)s.bind(e,ir);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;e!==null&&e.unbind();const i=this.behaviors;if(i!==null){const s=this.element;for(const[n]of i)n.unbind(s)}}onAttributeChangedCallback(e,i,s){const n=this.definition.attributeLookup[e];n!==void 0&&n.onAttributeChangedCallback(this.element,s)}emit(e,i,s){return this._isConnected?this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:i},bb),s))):!1}finishInitialization(){const e=this.element,i=this.boundObservables;if(i!==null){const n=Object.keys(i);for(let o=0,r=n.length;o<r;++o){const a=n[o];e[a]=i[a]}this.boundObservables=null}const s=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():s.template&&(this._template=s.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():s.styles&&(this._styles=s.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const i=this.element,s=xc(i)||i;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||de.removeChildNodes(s),e&&(this.view=e.render(i,s,i))}static forCustomElement(e){const i=e.$fastController;if(i!==void 0)return i;const s=il.forType(e.constructor);if(s===void 0)throw new Error("Missing FASTElement definition.");return e.$fastController=new Ad(e,s)}}function uh(t){return class extends t{constructor(){super(),Ad.forCustomElement(this)}$emit(e,i,s){return this.$fastController.emit(e,i,s)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,i,s){this.$fastController.onAttributeChangedCallback(e,i,s)}}}const sl=Object.assign(uh(HTMLElement),{from(t){return uh(t)},define(t,e){return new il(t,e).define().type}});class Pd{createCSS(){return""}createBehavior(){}}function cp(t,e){const i=[];let s="";const n=[];for(let o=0,r=t.length-1;o<r;++o){s+=t[o];let a=e[o];if(a instanceof Pd){const l=a.createBehavior();a=a.createCSS(),l&&n.push(l)}a instanceof qt||a instanceof CSSStyleSheet?(s.trim()!==""&&(i.push(s),s=""),i.push(a)):s+=a}return s+=t[t.length-1],s.trim()!==""&&i.push(s),{styles:i,behaviors:n}}function E(t,...e){const{styles:i,behaviors:s}=cp(t,e),n=qt.create(i);return s.length&&n.withBehaviors(...s),n}class yb extends Pd{constructor(e,i){super(),this.behaviors=i,this.css="";const s=e.reduce((n,o)=>(typeof o=="string"?this.css+=o:n.push(o),n),[]);s.length&&(this.styles=qt.create(s))}createBehavior(){return this}createCSS(){return this.css}bind(e){this.styles&&e.$fastController.addStyles(this.styles),this.behaviors.length&&e.$fastController.addBehaviors(this.behaviors)}unbind(e){this.styles&&e.$fastController.removeStyles(this.styles),this.behaviors.length&&e.$fastController.removeBehaviors(this.behaviors)}}function fi(t,...e){const{styles:i,behaviors:s}=cp(t,e);return new yb(i,s)}function ji(t,e,i){return{index:t,removed:e,addedCount:i}}const dp=0,up=1,Zc=2,Xc=3;function xb(t,e,i,s,n,o){const r=o-n+1,a=i-e+1,l=new Array(r);let c,d;for(let h=0;h<r;++h)l[h]=new Array(a),l[h][0]=h;for(let h=0;h<a;++h)l[0][h]=h;for(let h=1;h<r;++h)for(let v=1;v<a;++v)t[e+v-1]===s[n+h-1]?l[h][v]=l[h-1][v-1]:(c=l[h-1][v]+1,d=l[h][v-1]+1,l[h][v]=c<d?c:d);return l}function wb(t){let e=t.length-1,i=t[0].length-1,s=t[e][i];const n=[];for(;e>0||i>0;){if(e===0){n.push(Zc),i--;continue}if(i===0){n.push(Xc),e--;continue}const o=t[e-1][i-1],r=t[e-1][i],a=t[e][i-1];let l;r<a?l=r<o?r:o:l=a<o?a:o,l===o?(o===s?n.push(dp):(n.push(up),s=o),e--,i--):l===r?(n.push(Xc),e--,s=r):(n.push(Zc),i--,s=a)}return n.reverse(),n}function $b(t,e,i){for(let s=0;s<i;++s)if(t[s]!==e[s])return s;return i}function kb(t,e,i){let s=t.length,n=e.length,o=0;for(;o<i&&t[--s]===e[--n];)o++;return o}function _b(t,e,i,s){return e<i||s<t?-1:e===i||s===t?0:t<i?e<s?e-i:s-i:s<e?s-t:e-t}function hp(t,e,i,s,n,o){let r=0,a=0;const l=Math.min(i-e,o-n);if(e===0&&n===0&&(r=$b(t,s,l)),i===t.length&&o===s.length&&(a=kb(t,s,l-r)),e+=r,n+=r,i-=a,o-=a,i-e===0&&o-n===0)return Fn;if(e===i){const F=ji(e,[],0);for(;n<o;)F.removed.push(s[n++]);return[F]}else if(n===o)return[ji(e,[],i-e)];const c=wb(xb(t,e,i,s,n,o)),d=[];let h,v=e,w=n;for(let F=0;F<c.length;++F)switch(c[F]){case dp:h!==void 0&&(d.push(h),h=void 0),v++,w++;break;case up:h===void 0&&(h=ji(v,[],0)),h.addedCount++,v++,h.removed.push(s[w]),w++;break;case Zc:h===void 0&&(h=ji(v,[],0)),h.addedCount++,v++;break;case Xc:h===void 0&&(h=ji(v,[],0)),h.removed.push(s[w]),w++;break}return h!==void 0&&d.push(h),d}const hh=Array.prototype.push;function Sb(t,e,i,s){const n=ji(e,i,s);let o=!1,r=0;for(let a=0;a<t.length;a++){const l=t[a];if(l.index+=r,o)continue;const c=_b(n.index,n.index+n.removed.length,l.index,l.index+l.addedCount);if(c>=0){t.splice(a,1),a--,r-=l.addedCount-l.removed.length,n.addedCount+=l.addedCount-c;const d=n.removed.length+l.removed.length-c;if(!n.addedCount&&!d)o=!0;else{let h=l.removed;if(n.index<l.index){const v=n.removed.slice(0,l.index-n.index);hh.apply(v,h),h=v}if(n.index+n.removed.length>l.index+l.addedCount){const v=n.removed.slice(l.index+l.addedCount-n.index);hh.apply(h,v)}n.removed=h,l.index<n.index&&(n.index=l.index)}}else if(n.index<l.index){o=!0,t.splice(a,0,n),a++;const d=n.addedCount-n.removed.length;l.index+=d,r+=d}}o||t.push(n)}function Cb(t){const e=[];for(let i=0,s=t.length;i<s;i++){const n=t[i];Sb(e,n.index,n.removed,n.addedCount)}return e}function Ib(t,e){let i=[];const s=Cb(e);for(let n=0,o=s.length;n<o;++n){const r=s[n];if(r.addedCount===1&&r.removed.length===1){r.removed[0]!==t[r.index]&&i.push(r);continue}i=i.concat(hp(t,r.index,r.index+r.addedCount,r.removed,0,r.removed.length))}return i}let fh=!1;function wc(t,e){let i=t.index;const s=e.length;return i>s?i=s-t.addedCount:i<0&&(i=s+t.removed.length+i-t.addedCount),i<0&&(i=0),t.index=i,t}class Tb extends La{constructor(e){super(e),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(e,"$fastController",{value:this,enumerable:!1})}subscribe(e){this.flush(),super.subscribe(e)}addSplice(e){this.splices===void 0?this.splices=[e]:this.splices.push(e),this.needsQueue&&(this.needsQueue=!1,de.queueUpdate(this))}reset(e){this.oldCollection=e,this.needsQueue&&(this.needsQueue=!1,de.queueUpdate(this))}flush(){const e=this.splices,i=this.oldCollection;if(e===void 0&&i===void 0)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const s=i===void 0?Ib(this.source,e):hp(this.source,0,this.source.length,i,0,i.length);this.notify(s)}}function Fb(){if(fh)return;fh=!0,le.setArrayObserverFactory(l=>new Tb(l));const t=Array.prototype;if(t.$fastPatch)return;Reflect.defineProperty(t,"$fastPatch",{value:1,enumerable:!1});const e=t.pop,i=t.push,s=t.reverse,n=t.shift,o=t.sort,r=t.splice,a=t.unshift;t.pop=function(){const l=this.length>0,c=e.apply(this,arguments),d=this.$fastController;return d!==void 0&&l&&d.addSplice(ji(this.length,[c],0)),c},t.push=function(){const l=i.apply(this,arguments),c=this.$fastController;return c!==void 0&&c.addSplice(wc(ji(this.length-arguments.length,[],arguments.length),this)),l},t.reverse=function(){let l;const c=this.$fastController;c!==void 0&&(c.flush(),l=this.slice());const d=s.apply(this,arguments);return c!==void 0&&c.reset(l),d},t.shift=function(){const l=this.length>0,c=n.apply(this,arguments),d=this.$fastController;return d!==void 0&&l&&d.addSplice(ji(0,[c],0)),c},t.sort=function(){let l;const c=this.$fastController;c!==void 0&&(c.flush(),l=this.slice());const d=o.apply(this,arguments);return c!==void 0&&c.reset(l),d},t.splice=function(){const l=r.apply(this,arguments),c=this.$fastController;return c!==void 0&&c.addSplice(wc(ji(+arguments[0],l,arguments.length>2?arguments.length-2:0),this)),l},t.unshift=function(){const l=a.apply(this,arguments),c=this.$fastController;return c!==void 0&&c.addSplice(wc(ji(0,[],arguments.length),this)),l}}class Db{constructor(e,i){this.target=e,this.propertyName=i}bind(e){e[this.propertyName]=this.target}unbind(){}}function Pe(t){return new Rd("fast-ref",Db,t)}const fp=t=>typeof t=="function",Rb=()=>null;function ph(t){return t===void 0?Rb:fp(t)?t:()=>t}function pt(t,e,i){const s=fp(t)?t:()=>t,n=ph(e),o=ph(i);return(r,a)=>s(r,a)?n(r,a):o(r,a)}const gh=Object.freeze({positioning:!1,recycle:!0});function Ob(t,e,i,s){t.bind(e[i],s)}function Eb(t,e,i,s){const n=Object.create(s);n.index=i,n.length=e.length,t.bind(e[i],n)}class Lb{constructor(e,i,s,n,o,r){this.location=e,this.itemsBinding=i,this.templateBinding=n,this.options=r,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=Ob,this.itemsBindingObserver=le.binding(i,this,s),this.templateBindingObserver=le.binding(n,this,o),r.positioning&&(this.bindView=Eb)}bind(e,i){this.source=e,this.originalContext=i,this.childContext=Object.create(i),this.childContext.parent=e,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(e,this.originalContext),this.template=this.templateBindingObserver.observe(e,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,this.itemsObserver!==null&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(e,i){e===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):e===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(i)}observeItems(e=!1){if(!this.items){this.items=Fn;return}const i=this.itemsObserver,s=this.itemsObserver=le.getNotifier(this.items),n=i!==s;n&&i!==null&&i.unsubscribe(this),(n||e)&&s.subscribe(this)}updateViews(e){const i=this.childContext,s=this.views,n=this.bindView,o=this.items,r=this.template,a=this.options.recycle,l=[];let c=0,d=0;for(let h=0,v=e.length;h<v;++h){const w=e[h],F=w.removed;let $=0,T=w.index;const W=T+w.addedCount,Z=s.splice(w.index,F.length),ge=d=l.length+Z.length;for(;T<W;++T){const J=s[T],Ce=J?J.firstChild:this.location;let Oe;a&&d>0?($<=ge&&Z.length>0?(Oe=Z[$],$++):(Oe=l[c],c++),d--):Oe=r.create(),s.splice(T,0,Oe),n(Oe,o,T,i),Oe.insertBefore(Ce)}Z[$]&&l.push(...Z.slice($))}for(let h=c,v=l.length;h<v;++h)l[h].dispose();if(this.options.positioning)for(let h=0,v=s.length;h<v;++h){const w=s[h].context;w.length=v,w.index=h}}refreshAllViews(e=!1){const i=this.items,s=this.childContext,n=this.template,o=this.location,r=this.bindView;let a=i.length,l=this.views,c=l.length;if((a===0||e||!this.options.recycle)&&(np.disposeContiguousBatch(l),c=0),c===0){this.views=l=new Array(a);for(let d=0;d<a;++d){const h=n.create();r(h,i,d,s),l[d]=h,h.insertBefore(o)}}else{let d=0;for(;d<a;++d)if(d<c){const v=l[d];r(v,i,d,s)}else{const v=n.create();r(v,i,d,s),l.push(v),v.insertBefore(o)}const h=l.splice(d,c-d);for(d=0,a=h.length;d<a;++d)h[d].dispose()}}unbindAllViews(){const e=this.views;for(let i=0,s=e.length;i<s;++i)e[i].unbind()}}class Md extends tl{constructor(e,i,s){super(),this.itemsBinding=e,this.templateBinding=i,this.options=s,this.createPlaceholder=de.createBlockPlaceholder,Fb(),this.isItemsBindingVolatile=le.isVolatileBinding(e),this.isTemplateBindingVolatile=le.isVolatileBinding(i)}createBehavior(e){return new Lb(e,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}function ro(t,e,i=gh){const s=typeof e=="function"?e:()=>e;return new Md(t,s,Object.assign(Object.assign({},gh),i))}function Ss(t){return t?function(e,i,s){return e.nodeType===1&&e.matches(t)}:function(e,i,s){return e.nodeType===1}}class pp{constructor(e,i){this.target=e,this.options=i,this.source=null}bind(e){const i=this.options.property;this.shouldUpdate=le.getAccessors(e).some(s=>s.name===i),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(Fn),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return this.options.filter!==void 0&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class Ab extends pp{constructor(e,i){super(e,i)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function st(t){return typeof t=="string"&&(t={property:t}),new Rd("fast-slotted",Ab,t)}class Pb extends pp{constructor(e,i){super(e,i),this.observer=null,i.childList=!0}observe(){this.observer===null&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function nl(t){return typeof t=="string"&&(t={property:t}),new Rd("fast-children",Pb,t)}class oi{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const Zt=(t,e)=>P`
    <span
        part="end"
        ${Pe("endContainer")}
        class=${i=>e.end?"end":void 0}
    >
        <slot name="end" ${Pe("end")} @slotchange="${i=>i.handleEndContentChange()}">
            ${e.end||""}
        </slot>
    </span>
`,Xt=(t,e)=>P`
    <span
        part="start"
        ${Pe("startContainer")}
        class="${i=>e.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Pe("start")}
            @slotchange="${i=>i.handleStartContentChange()}"
        >
            ${e.start||""}
        </slot>
    </span>
`,Mb=P`
    <span part="end" ${Pe("endContainer")}>
        <slot
            name="end"
            ${Pe("end")}
            @slotchange="${t=>t.handleEndContentChange()}"
        ></slot>
    </span>
`,Vb=P`
    <span part="start" ${Pe("startContainer")}>
        <slot
            name="start"
            ${Pe("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        ></slot>
    </span>
`,Hb=(t,e)=>P`
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
                ${Pe("expandbutton")}
                aria-expanded="${i=>i.expanded}"
                aria-controls="${i=>i.id}-panel"
                id="${i=>i.id}"
                @click="${(i,s)=>i.clickHandler(s.event)}"
            >
                <span class="heading-content" part="heading-content">
                    <slot name="heading"></slot>
                </span>
            </button>
            ${Xt(t,e)}
            ${Zt(t,e)}
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
***************************************************************************** */function u(t,e,i,s){var n=arguments.length,o=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o}const $c=new Map;"metadata"in Reflect||(Reflect.metadata=function(t,e){return function(i){Reflect.defineMetadata(t,e,i)}},Reflect.defineMetadata=function(t,e,i){let s=$c.get(i);s===void 0&&$c.set(i,s=new Map),s.set(t,e)},Reflect.getOwnMetadata=function(t,e){const i=$c.get(e);if(i!==void 0)return i.get(t)});class Nb{constructor(e,i){this.container=e,this.key=i}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,mp(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,i){const{container:s,key:n}=this;return this.container=this.key=void 0,s.registerResolver(n,new Si(n,e,i))}}function jo(t){const e=t.slice(),i=Object.keys(t),s=i.length;let n;for(let o=0;o<s;++o)n=i[o],vp(n)||(e[n]=t[n]);return e}const zb=Object.freeze({none(t){throw Error(`${t.toString()} not registered, did you forget to add @singleton()?`)},singleton(t){return new Si(t,1,t)},transient(t){return new Si(t,2,t)}}),kc=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:zb.singleton})}),mh=new Map;function vh(t){return e=>Reflect.getOwnMetadata(t,e)}let bh=null;const ht=Object.freeze({createContainer(t){return new sr(null,Object.assign({},kc.default,t))},findResponsibleContainer(t){const e=t.$$container$$;return e&&e.responsibleForOwnerRequests?e:ht.findParentContainer(t)},findParentContainer(t){const e=new CustomEvent(gp,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return t.dispatchEvent(e),e.detail.container||ht.getOrCreateDOMContainer()},getOrCreateDOMContainer(t,e){return t?t.$$container$$||new sr(t,Object.assign({},kc.default,e,{parentLocator:ht.findParentContainer})):bh||(bh=new sr(null,Object.assign({},kc.default,e,{parentLocator:()=>null})))},getDesignParamtypes:vh("design:paramtypes"),getAnnotationParamtypes:vh("di:paramtypes"),getOrCreateAnnotationParamTypes(t){let e=this.getAnnotationParamtypes(t);return e===void 0&&Reflect.defineMetadata("di:paramtypes",e=[],t),e},getDependencies(t){let e=mh.get(t);if(e===void 0){const i=t.inject;if(i===void 0){const s=ht.getDesignParamtypes(t),n=ht.getAnnotationParamtypes(t);if(s===void 0)if(n===void 0){const o=Object.getPrototypeOf(t);typeof o=="function"&&o!==Function.prototype?e=jo(ht.getDependencies(o)):e=[]}else e=jo(n);else if(n===void 0)e=jo(s);else{e=jo(s);let o=n.length,r;for(let c=0;c<o;++c)r=n[c],r!==void 0&&(e[c]=r);const a=Object.keys(n);o=a.length;let l;for(let c=0;c<o;++c)l=a[c],vp(l)||(e[l]=n[l])}}else e=jo(i);mh.set(t,e)}return e},defineProperty(t,e,i,s=!1){const n=`$di_${e}`;Reflect.defineProperty(t,e,{get:function(){let o=this[n];if(o===void 0&&(o=(this instanceof HTMLElement?ht.findResponsibleContainer(this):ht.getOrCreateDOMContainer()).get(i),this[n]=o,s&&this instanceof sl)){const a=this.$fastController,l=()=>{const d=ht.findResponsibleContainer(this).get(i),h=this[n];d!==h&&(this[n]=o,a.notify(e))};a.subscribe({handleChange:l},"isConnected")}return o}})},createInterface(t,e){const i=typeof t=="function"?t:e,s=typeof t=="string"?t:t&&"friendlyName"in t&&t.friendlyName||$h,n=typeof t=="string"?!1:t&&"respectConnection"in t&&t.respectConnection||!1,o=function(r,a,l){if(r==null||new.target!==void 0)throw new Error(`No registration for interface: '${o.friendlyName}'`);if(a)ht.defineProperty(r,a,o,n);else{const c=ht.getOrCreateAnnotationParamTypes(r);c[l]=o}};return o.$isInterface=!0,o.friendlyName=s??"(anonymous)",i!=null&&(o.register=function(r,a){return i(new Nb(r,a??o))}),o.toString=function(){return`InterfaceSymbol<${o.friendlyName}>`},o},inject(...t){return function(e,i,s){if(typeof s=="number"){const n=ht.getOrCreateAnnotationParamTypes(e),o=t[0];o!==void 0&&(n[s]=o)}else if(i)ht.defineProperty(e,i,t[0]);else{const n=s?ht.getOrCreateAnnotationParamTypes(s.value):ht.getOrCreateAnnotationParamTypes(e);let o;for(let r=0;r<t.length;++r)o=t[r],o!==void 0&&(n[r]=o)}}},transient(t){return t.register=function(i){return fr.transient(t,t).register(i)},t.registerInRequestor=!1,t},singleton(t,e=jb){return t.register=function(s){return fr.singleton(t,t).register(s)},t.registerInRequestor=e.scoped,t}}),Bb=ht.createInterface("Container");ht.inject;const jb={scoped:!1};class Si{constructor(e,i,s){this.key=e,this.strategy=i,this.state=s,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,i){switch(this.strategy){case 0:return this.state;case 1:{if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(i),this.strategy=0,this.resolving=!1,this.state}case 2:{const s=e.getFactory(this.state);if(s===null)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return s.construct(i)}case 3:return this.state(e,i,this);case 4:return this.state[0].resolve(e,i);case 5:return i.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var i,s,n;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return(n=(s=(i=e.getResolver(this.state))===null||i===void 0?void 0:i.getFactory)===null||s===void 0?void 0:s.call(i,e))!==null&&n!==void 0?n:null;default:return null}}}function yh(t){return this.get(t)}function Yb(t,e){return e(t)}class Ub{constructor(e,i){this.Type=e,this.dependencies=i,this.transformers=null}construct(e,i){let s;return i===void 0?s=new this.Type(...this.dependencies.map(yh,e)):s=new this.Type(...this.dependencies.map(yh,e),...i),this.transformers==null?s:this.transformers.reduce(Yb,s)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const Wb={$isResolver:!0,resolve(t,e){return e}};function _a(t){return typeof t.register=="function"}function Gb(t){return _a(t)&&typeof t.registerInRequestor=="boolean"}function xh(t){return Gb(t)&&t.registerInRequestor}function qb(t){return t.prototype!==void 0}const Zb=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),gp="__DI_LOCATE_PARENT__",_c=new Map;class sr{constructor(e,i){this.owner=e,this.config=i,this._parent=void 0,this.registerDepth=0,this.context=null,e!==null&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(Bb,Wb),e instanceof Node&&e.addEventListener(gp,s=>{s.composedPath()[0]!==this.owner&&(s.detail.container=this,s.stopImmediatePropagation())})}get parent(){return this._parent===void 0&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return this.parent===null?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...i){return this.context=e,this.register(...i),this.context=null,this}register(...e){if(++this.registerDepth===100)throw new Error("Unable to autoregister dependency");let i,s,n,o,r;const a=this.context;for(let l=0,c=e.length;l<c;++l)if(i=e[l],!!kh(i))if(_a(i))i.register(this,a);else if(qb(i))fr.singleton(i,i).register(this);else for(s=Object.keys(i),o=0,r=s.length;o<r;++o)n=i[s[o]],kh(n)&&(_a(n)?n.register(this,a):this.register(n));return--this.registerDepth,this}registerResolver(e,i){Jr(e);const s=this.resolvers,n=s.get(e);return n==null?s.set(e,i):n instanceof Si&&n.strategy===4?n.state.push(i):s.set(e,new Si(e,4,[n,i])),i}registerTransformer(e,i){const s=this.getResolver(e);if(s==null)return!1;if(s.getFactory){const n=s.getFactory(this);return n==null?!1:(n.registerTransformer(i),!0)}return!1}getResolver(e,i=!0){if(Jr(e),e.resolve!==void 0)return e;let s=this,n;for(;s!=null;)if(n=s.resolvers.get(e),n==null){if(s.parent==null){const o=xh(e)?this:s;return i?this.jitRegister(e,o):null}s=s.parent}else return n;return null}has(e,i=!1){return this.resolvers.has(e)?!0:i&&this.parent!=null?this.parent.has(e,!0):!1}get(e){if(Jr(e),e.$isResolver)return e.resolve(this,this);let i=this,s;for(;i!=null;)if(s=i.resolvers.get(e),s==null){if(i.parent==null){const n=xh(e)?this:i;return s=this.jitRegister(e,n),s.resolve(i,this)}i=i.parent}else return s.resolve(i,this);throw new Error(`Unable to resolve key: ${e}`)}getAll(e,i=!1){Jr(e);const s=this;let n=s,o;if(i){let r=Fn;for(;n!=null;)o=n.resolvers.get(e),o!=null&&(r=r.concat(wh(o,n,s))),n=n.parent;return r}else for(;n!=null;)if(o=n.resolvers.get(e),o==null){if(n=n.parent,n==null)return Fn}else return wh(o,n,s);return Fn}getFactory(e){let i=_c.get(e);if(i===void 0){if(Xb(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);_c.set(e,i=new Ub(e,ht.getDependencies(e)))}return i}registerFactory(e,i){_c.set(e,i)}createChild(e){return new sr(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,i){if(typeof e!="function")throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(Zb.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(_a(e)){const s=e.register(i);if(!(s instanceof Object)||s.resolve==null){const n=i.resolvers.get(e);if(n!=null)return n;throw new Error("A valid resolver was not returned from the static register method")}return s}else{if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const s=this.config.defaultResolver(e,i);return i.resolvers.set(e,s),s}}}}const Sc=new WeakMap;function mp(t){return function(e,i,s){if(Sc.has(s))return Sc.get(s);const n=t(e,i,s);return Sc.set(s,n),n}}const fr=Object.freeze({instance(t,e){return new Si(t,0,e)},singleton(t,e){return new Si(t,1,e)},transient(t,e){return new Si(t,2,e)},callback(t,e){return new Si(t,3,e)},cachedCallback(t,e){return new Si(t,3,mp(e))},aliasTo(t,e){return new Si(e,5,t)}});function Jr(t){if(t==null)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function wh(t,e,i){if(t instanceof Si&&t.strategy===4){const s=t.state;let n=s.length;const o=new Array(n);for(;n--;)o[n]=s[n].resolve(e,i);return o}return[t.resolve(e,i)]}const $h="(anonymous)";function kh(t){return typeof t=="object"&&t!==null||typeof t=="function"}const Xb=function(){const t=new WeakMap;let e=!1,i="",s=0;return function(n){return e=t.get(n),e===void 0&&(i=n.toString(),s=i.length,e=s>=29&&s<=100&&i.charCodeAt(s-1)===125&&i.charCodeAt(s-2)<=32&&i.charCodeAt(s-3)===93&&i.charCodeAt(s-4)===101&&i.charCodeAt(s-5)===100&&i.charCodeAt(s-6)===111&&i.charCodeAt(s-7)===99&&i.charCodeAt(s-8)===32&&i.charCodeAt(s-9)===101&&i.charCodeAt(s-10)===118&&i.charCodeAt(s-11)===105&&i.charCodeAt(s-12)===116&&i.charCodeAt(s-13)===97&&i.charCodeAt(s-14)===110&&i.charCodeAt(s-15)===88,t.set(n,e)),e}}(),Kr={};function vp(t){switch(typeof t){case"number":return t>=0&&(t|0)===t;case"string":{const e=Kr[t];if(e!==void 0)return e;const i=t.length;if(i===0)return Kr[t]=!1;let s=0;for(let n=0;n<i;++n)if(s=t.charCodeAt(n),n===0&&s===48&&i>1||s<48||s>57)return Kr[t]=!1;return Kr[t]=!0}default:return!1}}function _h(t){return`${t.toLowerCase()}:presentation`}const ea=new Map,bp=Object.freeze({define(t,e,i){const s=_h(t);ea.get(s)===void 0?ea.set(s,e):ea.set(s,!1),i.register(fr.instance(s,e))},forTag(t,e){const i=_h(t),s=ea.get(i);return s===!1?ht.findResponsibleContainer(e).get(i):s||null}});class Qb{constructor(e,i){this.template=e||null,this.styles=i===void 0?null:Array.isArray(i)?qt.create(i):i instanceof qt?i:qt.create([i])}applyTo(e){const i=e.$fastController;i.template===null&&(i.template=this.template),i.styles===null&&(i.styles=this.styles)}}class pe extends sl{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return this._presentation===void 0&&(this._presentation=bp.forTag(this.tagName,this)),this._presentation}templateChanged(){this.template!==void 0&&(this.$fastController.template=this.template)}stylesChanged(){this.styles!==void 0&&(this.$fastController.styles=this.styles)}connectedCallback(){this.$presentation!==null&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(i={})=>new Jb(this===pe?class extends pe{}:this,e,i)}}u([_],pe.prototype,"template",void 0);u([_],pe.prototype,"styles",void 0);function Yo(t,e,i){return typeof t=="function"?t(e,i):t}class Jb{constructor(e,i,s){this.type=e,this.elementDefinition=i,this.overrideDefinition=s,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,i){const s=this.definition,n=this.overrideDefinition,r=`${s.prefix||i.elementPrefix}-${s.baseName}`;i.tryDefineElement({name:r,type:this.type,baseClass:this.elementDefinition.baseClass,callback:a=>{const l=new Qb(Yo(s.template,a,s),Yo(s.styles,a,s));a.definePresentation(l);let c=Yo(s.shadowOptions,a,s);a.shadowRootMode&&(c?n.shadowOptions||(c.mode=a.shadowRootMode):c!==null&&(c={mode:a.shadowRootMode})),a.defineElement({elementOptions:Yo(s.elementOptions,a,s),shadowOptions:c,attributes:Yo(s.attributes,a,s)})}})}}function ot(t,...e){const i=Aa.locate(t);e.forEach(s=>{Object.getOwnPropertyNames(s.prototype).forEach(o=>{o!=="constructor"&&Object.defineProperty(t.prototype,o,Object.getOwnPropertyDescriptor(s.prototype,o))}),Aa.locate(s).forEach(o=>i.push(o))})}class Ln extends pe{constructor(){super(...arguments),this.headinglevel=2,this.expanded=!1,this.clickHandler=e=>{this.expanded=!this.expanded,this.change()},this.change=()=>{this.$emit("change")}}}u([f({attribute:"heading-level",mode:"fromView",converter:K})],Ln.prototype,"headinglevel",void 0);u([f({mode:"boolean"})],Ln.prototype,"expanded",void 0);u([f],Ln.prototype,"id",void 0);ot(Ln,oi);const Kb=(t,e)=>P`
    <template>
        <slot ${st({property:"accordionItems",filter:Ss()})}></slot>
        <slot name="item" part="item" ${st("accordionItems")}></slot>
    </template>
`,vt={horizontal:"horizontal",vertical:"vertical"};function ey(t,e){let i=t.length;for(;i--;)if(e(t[i],i,t))return i;return-1}function ty(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function bo(...t){return t.every(e=>e instanceof HTMLElement)}function iy(t,e){return!t||!e||!bo(t)?void 0:Array.from(t.querySelectorAll(e)).filter(s=>s.offsetParent!==null)}function sy(){const t=document.querySelector('meta[property="csp-nonce"]');return t?t.getAttribute("content"):null}let bn;function ny(){if(typeof bn=="boolean")return bn;if(!ty())return bn=!1,bn;const t=document.createElement("style"),e=sy();e!==null&&t.setAttribute("nonce",e),document.head.appendChild(t);try{t.sheet.insertRule("foo:focus-visible {color:inherit}",0),bn=!0}catch{bn=!1}finally{document.head.removeChild(t)}return bn}const Sh="focus",Ch="focusin",yo="focusout",xo="keydown",Ih="resize",Th="scroll";var Fh;(function(t){t[t.alt=18]="alt",t[t.arrowDown=40]="arrowDown",t[t.arrowLeft=37]="arrowLeft",t[t.arrowRight=39]="arrowRight",t[t.arrowUp=38]="arrowUp",t[t.back=8]="back",t[t.backSlash=220]="backSlash",t[t.break=19]="break",t[t.capsLock=20]="capsLock",t[t.closeBracket=221]="closeBracket",t[t.colon=186]="colon",t[t.colon2=59]="colon2",t[t.comma=188]="comma",t[t.ctrl=17]="ctrl",t[t.delete=46]="delete",t[t.end=35]="end",t[t.enter=13]="enter",t[t.equals=187]="equals",t[t.equals2=61]="equals2",t[t.equals3=107]="equals3",t[t.escape=27]="escape",t[t.forwardSlash=191]="forwardSlash",t[t.function1=112]="function1",t[t.function10=121]="function10",t[t.function11=122]="function11",t[t.function12=123]="function12",t[t.function2=113]="function2",t[t.function3=114]="function3",t[t.function4=115]="function4",t[t.function5=116]="function5",t[t.function6=117]="function6",t[t.function7=118]="function7",t[t.function8=119]="function8",t[t.function9=120]="function9",t[t.home=36]="home",t[t.insert=45]="insert",t[t.menu=93]="menu",t[t.minus=189]="minus",t[t.minus2=109]="minus2",t[t.numLock=144]="numLock",t[t.numPad0=96]="numPad0",t[t.numPad1=97]="numPad1",t[t.numPad2=98]="numPad2",t[t.numPad3=99]="numPad3",t[t.numPad4=100]="numPad4",t[t.numPad5=101]="numPad5",t[t.numPad6=102]="numPad6",t[t.numPad7=103]="numPad7",t[t.numPad8=104]="numPad8",t[t.numPad9=105]="numPad9",t[t.numPadDivide=111]="numPadDivide",t[t.numPadDot=110]="numPadDot",t[t.numPadMinus=109]="numPadMinus",t[t.numPadMultiply=106]="numPadMultiply",t[t.numPadPlus=107]="numPadPlus",t[t.openBracket=219]="openBracket",t[t.pageDown=34]="pageDown",t[t.pageUp=33]="pageUp",t[t.period=190]="period",t[t.print=44]="print",t[t.quote=222]="quote",t[t.scrollLock=145]="scrollLock",t[t.shift=16]="shift",t[t.space=32]="space",t[t.tab=9]="tab",t[t.tilde=192]="tilde",t[t.windowsLeft=91]="windowsLeft",t[t.windowsOpera=219]="windowsOpera",t[t.windowsRight=92]="windowsRight"})(Fh||(Fh={}));const Fi="ArrowDown",sn="ArrowLeft",nn="ArrowRight",Di="ArrowUp",Ts="Enter",To="Escape",ds="Home",us="End",oy="F2",ry="PageDown",ay="PageUp",Nn=" ",ol="Tab",so={ArrowDown:Fi,ArrowLeft:sn,ArrowRight:nn,ArrowUp:Di};var Qe;(function(t){t.ltr="ltr",t.rtl="rtl"})(Qe||(Qe={}));function ly(t,e,i){return i<t?e:i>e?t:i}function rl(t,e,i){return Math.min(Math.max(i,t),e)}function ta(t,e,i=0){return[e,i]=[e,i].sort((s,n)=>s-n),e<=t&&t<i}let cy=0;function pr(t=""){return`${t}${cy++}`}var m;(function(t){t.Canvas="Canvas",t.CanvasText="CanvasText",t.LinkText="LinkText",t.VisitedText="VisitedText",t.ActiveText="ActiveText",t.ButtonFace="ButtonFace",t.ButtonText="ButtonText",t.Field="Field",t.FieldText="FieldText",t.Highlight="Highlight",t.HighlightText="HighlightText",t.GrayText="GrayText"})(m||(m={}));const Dh={single:"single",multi:"multi"};class Vd extends pe{constructor(){super(...arguments),this.expandmode=Dh.multi,this.activeItemIndex=0,this.change=()=>{this.$emit("change",this.activeid)},this.setItems=()=>{var e;this.accordionItems.length!==0&&(this.accordionIds=this.getItemIds(),this.accordionItems.forEach((i,s)=>{i instanceof Ln&&(i.addEventListener("change",this.activeItemChange),this.isSingleExpandMode()&&(this.activeItemIndex!==s?i.expanded=!1:i.expanded=!0));const n=this.accordionIds[s];i.setAttribute("id",typeof n!="string"?`accordion-${s+1}`:n),this.activeid=this.accordionIds[this.activeItemIndex],i.addEventListener("keydown",this.handleItemKeyDown),i.addEventListener("focus",this.handleItemFocus)}),this.isSingleExpandMode()&&((e=this.findExpandedItem())!==null&&e!==void 0?e:this.accordionItems[0]).setAttribute("aria-disabled","true"))},this.removeItemListeners=e=>{e.forEach((i,s)=>{i.removeEventListener("change",this.activeItemChange),i.removeEventListener("keydown",this.handleItemKeyDown),i.removeEventListener("focus",this.handleItemFocus)})},this.activeItemChange=e=>{if(e.defaultPrevented||e.target!==e.currentTarget)return;e.preventDefault();const i=e.target;this.activeid=i.getAttribute("id"),this.isSingleExpandMode()&&(this.resetItems(),i.expanded=!0,i.setAttribute("aria-disabled","true"),this.accordionItems.forEach(s=>{!s.hasAttribute("disabled")&&s.id!==this.activeid&&s.removeAttribute("aria-disabled")})),this.activeItemIndex=Array.from(this.accordionItems).indexOf(i),this.change()},this.handleItemKeyDown=e=>{if(e.target===e.currentTarget)switch(this.accordionIds=this.getItemIds(),e.key){case Di:e.preventDefault(),this.adjust(-1);break;case Fi:e.preventDefault(),this.adjust(1);break;case ds:this.activeItemIndex=0,this.focusItem();break;case us:this.activeItemIndex=this.accordionItems.length-1,this.focusItem();break}},this.handleItemFocus=e=>{if(e.target===e.currentTarget){const i=e.target,s=this.activeItemIndex=Array.from(this.accordionItems).indexOf(i);this.activeItemIndex!==s&&s!==-1&&(this.activeItemIndex=s,this.activeid=this.accordionIds[this.activeItemIndex])}}}accordionItemsChanged(e,i){this.$fastController.isConnected&&(this.removeItemListeners(e),this.setItems())}findExpandedItem(){for(let e=0;e<this.accordionItems.length;e++)if(this.accordionItems[e].getAttribute("expanded")==="true")return this.accordionItems[e];return null}resetItems(){this.accordionItems.forEach((e,i)=>{e.expanded=!1})}getItemIds(){return this.accordionItems.map(e=>e.getAttribute("id"))}isSingleExpandMode(){return this.expandmode===Dh.single}adjust(e){this.activeItemIndex=ly(0,this.accordionItems.length-1,this.activeItemIndex+e),this.focusItem()}focusItem(){const e=this.accordionItems[this.activeItemIndex];e instanceof Ln&&e.expandbutton.focus()}}u([f({attribute:"expand-mode"})],Vd.prototype,"expandmode",void 0);u([_],Vd.prototype,"accordionItems",void 0);const yp=(t,e)=>P`
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
        ${Pe("control")}
    >
        ${Xt(t,e)}
        <span class="content" part="content">
            <slot ${st("defaultSlottedContent")}></slot>
        </span>
        ${Zt(t,e)}
    </a>
`;class Je{}u([f({attribute:"aria-atomic"})],Je.prototype,"ariaAtomic",void 0);u([f({attribute:"aria-busy"})],Je.prototype,"ariaBusy",void 0);u([f({attribute:"aria-controls"})],Je.prototype,"ariaControls",void 0);u([f({attribute:"aria-current"})],Je.prototype,"ariaCurrent",void 0);u([f({attribute:"aria-describedby"})],Je.prototype,"ariaDescribedby",void 0);u([f({attribute:"aria-details"})],Je.prototype,"ariaDetails",void 0);u([f({attribute:"aria-disabled"})],Je.prototype,"ariaDisabled",void 0);u([f({attribute:"aria-errormessage"})],Je.prototype,"ariaErrormessage",void 0);u([f({attribute:"aria-flowto"})],Je.prototype,"ariaFlowto",void 0);u([f({attribute:"aria-haspopup"})],Je.prototype,"ariaHaspopup",void 0);u([f({attribute:"aria-hidden"})],Je.prototype,"ariaHidden",void 0);u([f({attribute:"aria-invalid"})],Je.prototype,"ariaInvalid",void 0);u([f({attribute:"aria-keyshortcuts"})],Je.prototype,"ariaKeyshortcuts",void 0);u([f({attribute:"aria-label"})],Je.prototype,"ariaLabel",void 0);u([f({attribute:"aria-labelledby"})],Je.prototype,"ariaLabelledby",void 0);u([f({attribute:"aria-live"})],Je.prototype,"ariaLive",void 0);u([f({attribute:"aria-owns"})],Je.prototype,"ariaOwns",void 0);u([f({attribute:"aria-relevant"})],Je.prototype,"ariaRelevant",void 0);u([f({attribute:"aria-roledescription"})],Je.prototype,"ariaRoledescription",void 0);let pi=class extends pe{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((e=this.$fastController.definition.shadowOptions)===null||e===void 0)&&e.delegatesFocus)&&(this.focus=()=>{var i;(i=this.control)===null||i===void 0||i.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}};u([f],pi.prototype,"download",void 0);u([f],pi.prototype,"href",void 0);u([f],pi.prototype,"hreflang",void 0);u([f],pi.prototype,"ping",void 0);u([f],pi.prototype,"referrerpolicy",void 0);u([f],pi.prototype,"rel",void 0);u([f],pi.prototype,"target",void 0);u([f],pi.prototype,"type",void 0);u([_],pi.prototype,"defaultSlottedContent",void 0);class al{}u([f({attribute:"aria-expanded"})],al.prototype,"ariaExpanded",void 0);ot(al,Je);ot(pi,oi,al);const dy=(t,e)=>P`
    <template class="${i=>i.initialLayoutComplete?"loaded":""}">
        ${pt(i=>i.initialLayoutComplete,P`
                <slot></slot>
            `)}
    </template>
`,An=t=>{const e=t.closest("[dir]");return e!==null&&e.dir==="rtl"?Qe.rtl:Qe.ltr};class uy{constructor(){this.intersectionDetector=null,this.observedElements=new Map,this.requestPosition=(e,i)=>{var s;if(this.intersectionDetector!==null){if(this.observedElements.has(e)){(s=this.observedElements.get(e))===null||s===void 0||s.push(i);return}this.observedElements.set(e,[i]),this.intersectionDetector.observe(e)}},this.cancelRequestPosition=(e,i)=>{const s=this.observedElements.get(e);if(s!==void 0){const n=s.indexOf(i);n!==-1&&s.splice(n,1)}},this.initializeIntersectionDetector=()=>{_s.IntersectionObserver&&(this.intersectionDetector=new IntersectionObserver(this.handleIntersection,{root:null,rootMargin:"0px",threshold:[0,1]}))},this.handleIntersection=e=>{if(this.intersectionDetector===null)return;const i=[],s=[];e.forEach(n=>{var o;(o=this.intersectionDetector)===null||o===void 0||o.unobserve(n.target);const r=this.observedElements.get(n.target);r!==void 0&&(r.forEach(a=>{let l=i.indexOf(a);l===-1&&(l=i.length,i.push(a),s.push([])),s[l].push(n)}),this.observedElements.delete(n.target))}),i.forEach((n,o)=>{n(s[o])})},this.initializeIntersectionDetector()}}class ae extends pe{constructor(){super(...arguments),this.anchor="",this.viewport="",this.horizontalPositioningMode="uncontrolled",this.horizontalDefaultPosition="unset",this.horizontalViewportLock=!1,this.horizontalInset=!1,this.horizontalScaling="content",this.verticalPositioningMode="uncontrolled",this.verticalDefaultPosition="unset",this.verticalViewportLock=!1,this.verticalInset=!1,this.verticalScaling="content",this.fixedPlacement=!1,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.initialLayoutComplete=!1,this.resizeDetector=null,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.pendingPositioningUpdate=!1,this.pendingReset=!1,this.currentDirection=Qe.ltr,this.regionVisible=!1,this.forceUpdate=!1,this.updateThreshold=.5,this.update=()=>{this.pendingPositioningUpdate||this.requestPositionUpdates()},this.startObservers=()=>{this.stopObservers(),this.anchorElement!==null&&(this.requestPositionUpdates(),this.resizeDetector!==null&&(this.resizeDetector.observe(this.anchorElement),this.resizeDetector.observe(this)))},this.requestPositionUpdates=()=>{this.anchorElement===null||this.pendingPositioningUpdate||(ae.intersectionService.requestPosition(this,this.handleIntersection),ae.intersectionService.requestPosition(this.anchorElement,this.handleIntersection),this.viewportElement!==null&&ae.intersectionService.requestPosition(this.viewportElement,this.handleIntersection),this.pendingPositioningUpdate=!0)},this.stopObservers=()=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,ae.intersectionService.cancelRequestPosition(this,this.handleIntersection),this.anchorElement!==null&&ae.intersectionService.cancelRequestPosition(this.anchorElement,this.handleIntersection),this.viewportElement!==null&&ae.intersectionService.cancelRequestPosition(this.viewportElement,this.handleIntersection)),this.resizeDetector!==null&&this.resizeDetector.disconnect()},this.getViewport=()=>typeof this.viewport!="string"||this.viewport===""?document.documentElement:document.getElementById(this.viewport),this.getAnchor=()=>document.getElementById(this.anchor),this.handleIntersection=e=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,this.applyIntersectionEntries(e)&&this.updateLayout())},this.applyIntersectionEntries=e=>{const i=e.find(o=>o.target===this),s=e.find(o=>o.target===this.anchorElement),n=e.find(o=>o.target===this.viewportElement);return i===void 0||n===void 0||s===void 0?!1:!this.regionVisible||this.forceUpdate||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0||this.isRectDifferent(this.anchorRect,s.boundingClientRect)||this.isRectDifferent(this.viewportRect,n.boundingClientRect)||this.isRectDifferent(this.regionRect,i.boundingClientRect)?(this.regionRect=i.boundingClientRect,this.anchorRect=s.boundingClientRect,this.viewportElement===document.documentElement?this.viewportRect=new DOMRectReadOnly(n.boundingClientRect.x+document.documentElement.scrollLeft,n.boundingClientRect.y+document.documentElement.scrollTop,n.boundingClientRect.width,n.boundingClientRect.height):this.viewportRect=n.boundingClientRect,this.updateRegionOffset(),this.forceUpdate=!1,!0):!1},this.updateRegionOffset=()=>{this.anchorRect&&this.regionRect&&(this.baseHorizontalOffset=this.baseHorizontalOffset+(this.anchorRect.left-this.regionRect.left)+(this.translateX-this.baseHorizontalOffset),this.baseVerticalOffset=this.baseVerticalOffset+(this.anchorRect.top-this.regionRect.top)+(this.translateY-this.baseVerticalOffset))},this.isRectDifferent=(e,i)=>Math.abs(e.top-i.top)>this.updateThreshold||Math.abs(e.right-i.right)>this.updateThreshold||Math.abs(e.bottom-i.bottom)>this.updateThreshold||Math.abs(e.left-i.left)>this.updateThreshold,this.handleResize=e=>{this.update()},this.reset=()=>{this.pendingReset&&(this.pendingReset=!1,this.anchorElement===null&&(this.anchorElement=this.getAnchor()),this.viewportElement===null&&(this.viewportElement=this.getViewport()),this.currentDirection=An(this),this.startObservers())},this.updateLayout=()=>{let e,i;if(this.horizontalPositioningMode!=="uncontrolled"){const o=this.getPositioningOptions(this.horizontalInset);if(this.horizontalDefaultPosition==="center")i="center";else if(this.horizontalDefaultPosition!=="unset"){let v=this.horizontalDefaultPosition;if(v==="start"||v==="end"){const w=An(this);if(w!==this.currentDirection){this.currentDirection=w,this.initialize();return}this.currentDirection===Qe.ltr?v=v==="start"?"left":"right":v=v==="start"?"right":"left"}switch(v){case"left":i=this.horizontalInset?"insetStart":"start";break;case"right":i=this.horizontalInset?"insetEnd":"end";break}}const r=this.horizontalThreshold!==void 0?this.horizontalThreshold:this.regionRect!==void 0?this.regionRect.width:0,a=this.anchorRect!==void 0?this.anchorRect.left:0,l=this.anchorRect!==void 0?this.anchorRect.right:0,c=this.anchorRect!==void 0?this.anchorRect.width:0,d=this.viewportRect!==void 0?this.viewportRect.left:0,h=this.viewportRect!==void 0?this.viewportRect.right:0;(i===void 0||this.horizontalPositioningMode!=="locktodefault"&&this.getAvailableSpace(i,a,l,c,d,h)<r)&&(i=this.getAvailableSpace(o[0],a,l,c,d,h)>this.getAvailableSpace(o[1],a,l,c,d,h)?o[0]:o[1])}if(this.verticalPositioningMode!=="uncontrolled"){const o=this.getPositioningOptions(this.verticalInset);if(this.verticalDefaultPosition==="center")e="center";else if(this.verticalDefaultPosition!=="unset")switch(this.verticalDefaultPosition){case"top":e=this.verticalInset?"insetStart":"start";break;case"bottom":e=this.verticalInset?"insetEnd":"end";break}const r=this.verticalThreshold!==void 0?this.verticalThreshold:this.regionRect!==void 0?this.regionRect.height:0,a=this.anchorRect!==void 0?this.anchorRect.top:0,l=this.anchorRect!==void 0?this.anchorRect.bottom:0,c=this.anchorRect!==void 0?this.anchorRect.height:0,d=this.viewportRect!==void 0?this.viewportRect.top:0,h=this.viewportRect!==void 0?this.viewportRect.bottom:0;(e===void 0||this.verticalPositioningMode!=="locktodefault"&&this.getAvailableSpace(e,a,l,c,d,h)<r)&&(e=this.getAvailableSpace(o[0],a,l,c,d,h)>this.getAvailableSpace(o[1],a,l,c,d,h)?o[0]:o[1])}const s=this.getNextRegionDimension(i,e),n=this.horizontalPosition!==i||this.verticalPosition!==e;if(this.setHorizontalPosition(i,s),this.setVerticalPosition(e,s),this.updateRegionStyle(),!this.initialLayoutComplete){this.initialLayoutComplete=!0,this.requestPositionUpdates();return}this.regionVisible||(this.regionVisible=!0,this.style.removeProperty("pointer-events"),this.style.removeProperty("opacity"),this.classList.toggle("loaded",!0),this.$emit("loaded",this,{bubbles:!1})),this.updatePositionClasses(),n&&this.$emit("positionchange",this,{bubbles:!1})},this.updateRegionStyle=()=>{this.style.width=this.regionWidth,this.style.height=this.regionHeight,this.style.transform=`translate(${this.translateX}px, ${this.translateY}px)`},this.updatePositionClasses=()=>{this.classList.toggle("top",this.verticalPosition==="start"),this.classList.toggle("bottom",this.verticalPosition==="end"),this.classList.toggle("inset-top",this.verticalPosition==="insetStart"),this.classList.toggle("inset-bottom",this.verticalPosition==="insetEnd"),this.classList.toggle("vertical-center",this.verticalPosition==="center"),this.classList.toggle("left",this.horizontalPosition==="start"),this.classList.toggle("right",this.horizontalPosition==="end"),this.classList.toggle("inset-left",this.horizontalPosition==="insetStart"),this.classList.toggle("inset-right",this.horizontalPosition==="insetEnd"),this.classList.toggle("horizontal-center",this.horizontalPosition==="center")},this.setHorizontalPosition=(e,i)=>{if(e===void 0||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0)return;let s=0;switch(this.horizontalScaling){case"anchor":case"fill":s=this.horizontalViewportLock?this.viewportRect.width:i.width,this.regionWidth=`${s}px`;break;case"content":s=this.regionRect.width,this.regionWidth="unset";break}let n=0;switch(e){case"start":this.translateX=this.baseHorizontalOffset-s,this.horizontalViewportLock&&this.anchorRect.left>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.right));break;case"insetStart":this.translateX=this.baseHorizontalOffset-s+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.right));break;case"insetEnd":this.translateX=this.baseHorizontalOffset,this.horizontalViewportLock&&this.anchorRect.left<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.left));break;case"end":this.translateX=this.baseHorizontalOffset+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.left));break;case"center":if(n=(this.anchorRect.width-s)/2,this.translateX=this.baseHorizontalOffset+n,this.horizontalViewportLock){const o=this.anchorRect.left+n,r=this.anchorRect.right-n;o<this.viewportRect.left&&!(r>this.viewportRect.right)?this.translateX=this.translateX-(o-this.viewportRect.left):r>this.viewportRect.right&&!(o<this.viewportRect.left)&&(this.translateX=this.translateX-(r-this.viewportRect.right))}break}this.horizontalPosition=e},this.setVerticalPosition=(e,i)=>{if(e===void 0||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0)return;let s=0;switch(this.verticalScaling){case"anchor":case"fill":s=this.verticalViewportLock?this.viewportRect.height:i.height,this.regionHeight=`${s}px`;break;case"content":s=this.regionRect.height,this.regionHeight="unset";break}let n=0;switch(e){case"start":this.translateY=this.baseVerticalOffset-s,this.verticalViewportLock&&this.anchorRect.top>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.bottom));break;case"insetStart":this.translateY=this.baseVerticalOffset-s+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.bottom));break;case"insetEnd":this.translateY=this.baseVerticalOffset,this.verticalViewportLock&&this.anchorRect.top<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.top));break;case"end":this.translateY=this.baseVerticalOffset+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.top));break;case"center":if(n=(this.anchorRect.height-s)/2,this.translateY=this.baseVerticalOffset+n,this.verticalViewportLock){const o=this.anchorRect.top+n,r=this.anchorRect.bottom-n;o<this.viewportRect.top&&!(r>this.viewportRect.bottom)?this.translateY=this.translateY-(o-this.viewportRect.top):r>this.viewportRect.bottom&&!(o<this.viewportRect.top)&&(this.translateY=this.translateY-(r-this.viewportRect.bottom))}}this.verticalPosition=e},this.getPositioningOptions=e=>e?["insetStart","insetEnd"]:["start","end"],this.getAvailableSpace=(e,i,s,n,o,r)=>{const a=i-o,l=r-(i+n);switch(e){case"start":return a;case"insetStart":return a+n;case"insetEnd":return l+n;case"end":return l;case"center":return Math.min(a,l)*2+n}},this.getNextRegionDimension=(e,i)=>{const s={height:this.regionRect!==void 0?this.regionRect.height:0,width:this.regionRect!==void 0?this.regionRect.width:0};return e!==void 0&&this.horizontalScaling==="fill"?s.width=this.getAvailableSpace(e,this.anchorRect!==void 0?this.anchorRect.left:0,this.anchorRect!==void 0?this.anchorRect.right:0,this.anchorRect!==void 0?this.anchorRect.width:0,this.viewportRect!==void 0?this.viewportRect.left:0,this.viewportRect!==void 0?this.viewportRect.right:0):this.horizontalScaling==="anchor"&&(s.width=this.anchorRect!==void 0?this.anchorRect.width:0),i!==void 0&&this.verticalScaling==="fill"?s.height=this.getAvailableSpace(i,this.anchorRect!==void 0?this.anchorRect.top:0,this.anchorRect!==void 0?this.anchorRect.bottom:0,this.anchorRect!==void 0?this.anchorRect.height:0,this.viewportRect!==void 0?this.viewportRect.top:0,this.viewportRect!==void 0?this.viewportRect.bottom:0):this.verticalScaling==="anchor"&&(s.height=this.anchorRect!==void 0?this.anchorRect.height:0),s},this.startAutoUpdateEventListeners=()=>{window.addEventListener(Ih,this.update,{passive:!0}),window.addEventListener(Th,this.update,{passive:!0,capture:!0}),this.resizeDetector!==null&&this.viewportElement!==null&&this.resizeDetector.observe(this.viewportElement)},this.stopAutoUpdateEventListeners=()=>{window.removeEventListener(Ih,this.update),window.removeEventListener(Th,this.update),this.resizeDetector!==null&&this.viewportElement!==null&&this.resizeDetector.unobserve(this.viewportElement)}}anchorChanged(){this.initialLayoutComplete&&(this.anchorElement=this.getAnchor())}viewportChanged(){this.initialLayoutComplete&&(this.viewportElement=this.getViewport())}horizontalPositioningModeChanged(){this.requestReset()}horizontalDefaultPositionChanged(){this.updateForAttributeChange()}horizontalViewportLockChanged(){this.updateForAttributeChange()}horizontalInsetChanged(){this.updateForAttributeChange()}horizontalThresholdChanged(){this.updateForAttributeChange()}horizontalScalingChanged(){this.updateForAttributeChange()}verticalPositioningModeChanged(){this.requestReset()}verticalDefaultPositionChanged(){this.updateForAttributeChange()}verticalViewportLockChanged(){this.updateForAttributeChange()}verticalInsetChanged(){this.updateForAttributeChange()}verticalThresholdChanged(){this.updateForAttributeChange()}verticalScalingChanged(){this.updateForAttributeChange()}fixedPlacementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}autoUpdateModeChanged(e,i){this.$fastController.isConnected&&this.initialLayoutComplete&&(e==="auto"&&this.stopAutoUpdateEventListeners(),i==="auto"&&this.startAutoUpdateEventListeners())}anchorElementChanged(){this.requestReset()}viewportElementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}connectedCallback(){super.connectedCallback(),this.autoUpdateMode==="auto"&&this.startAutoUpdateEventListeners(),this.initialize()}disconnectedCallback(){super.disconnectedCallback(),this.autoUpdateMode==="auto"&&this.stopAutoUpdateEventListeners(),this.stopObservers(),this.disconnectResizeDetector()}adoptedCallback(){this.initialize()}disconnectResizeDetector(){this.resizeDetector!==null&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.handleResize)}updateForAttributeChange(){this.$fastController.isConnected&&this.initialLayoutComplete&&(this.forceUpdate=!0,this.update())}initialize(){this.initializeResizeDetector(),this.anchorElement===null&&(this.anchorElement=this.getAnchor()),this.requestReset()}requestReset(){this.$fastController.isConnected&&this.pendingReset===!1&&(this.setInitialState(),de.queueUpdate(()=>this.reset()),this.pendingReset=!0)}setInitialState(){this.initialLayoutComplete=!1,this.regionVisible=!1,this.translateX=0,this.translateY=0,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.viewportRect=void 0,this.regionRect=void 0,this.anchorRect=void 0,this.verticalPosition=void 0,this.horizontalPosition=void 0,this.style.opacity="0",this.style.pointerEvents="none",this.forceUpdate=!1,this.style.position=this.fixedPlacement?"fixed":"absolute",this.updatePositionClasses(),this.updateRegionStyle()}}ae.intersectionService=new uy;u([f],ae.prototype,"anchor",void 0);u([f],ae.prototype,"viewport",void 0);u([f({attribute:"horizontal-positioning-mode"})],ae.prototype,"horizontalPositioningMode",void 0);u([f({attribute:"horizontal-default-position"})],ae.prototype,"horizontalDefaultPosition",void 0);u([f({attribute:"horizontal-viewport-lock",mode:"boolean"})],ae.prototype,"horizontalViewportLock",void 0);u([f({attribute:"horizontal-inset",mode:"boolean"})],ae.prototype,"horizontalInset",void 0);u([f({attribute:"horizontal-threshold"})],ae.prototype,"horizontalThreshold",void 0);u([f({attribute:"horizontal-scaling"})],ae.prototype,"horizontalScaling",void 0);u([f({attribute:"vertical-positioning-mode"})],ae.prototype,"verticalPositioningMode",void 0);u([f({attribute:"vertical-default-position"})],ae.prototype,"verticalDefaultPosition",void 0);u([f({attribute:"vertical-viewport-lock",mode:"boolean"})],ae.prototype,"verticalViewportLock",void 0);u([f({attribute:"vertical-inset",mode:"boolean"})],ae.prototype,"verticalInset",void 0);u([f({attribute:"vertical-threshold"})],ae.prototype,"verticalThreshold",void 0);u([f({attribute:"vertical-scaling"})],ae.prototype,"verticalScaling",void 0);u([f({attribute:"fixed-placement",mode:"boolean"})],ae.prototype,"fixedPlacement",void 0);u([f({attribute:"auto-update-mode"})],ae.prototype,"autoUpdateMode",void 0);u([_],ae.prototype,"anchorElement",void 0);u([_],ae.prototype,"viewportElement",void 0);u([_],ae.prototype,"initialLayoutComplete",void 0);const hy=(t,e)=>P`
    <template class="${i=>i.circular?"circular":""}">
        <div class="control" part="control" style="${i=>i.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`;let Or=class extends pe{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const e=`background-color: var(--badge-fill-${this.fill});`,i=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?e:this.color&&!this.fill?i:`${i} ${e}`}}};u([f({attribute:"fill"})],Or.prototype,"fill",void 0);u([f({attribute:"color"})],Or.prototype,"color",void 0);u([f({mode:"boolean"})],Or.prototype,"circular",void 0);const fy=(t,e)=>P`
    <div role="listitem" class="listitem" part="listitem">
        ${pt(i=>i.href&&i.href.length>0,P`
                ${yp(t,e)}
            `)}
        ${pt(i=>!i.href,P`
                ${Xt(t,e)}
                <slot></slot>
                ${Zt(t,e)}
            `)}
        ${pt(i=>i.separator,P`
                <span class="separator" part="separator" aria-hidden="true">
                    <slot name="separator">${e.separator||""}</slot>
                </span>
            `)}
    </div>
`;class gr extends pi{constructor(){super(...arguments),this.separator=!0}}u([_],gr.prototype,"separator",void 0);ot(gr,oi,al);const py=(t,e)=>P`
    <template role="navigation">
        <div role="list" class="list" part="list">
            <slot
                ${st({property:"slottedBreadcrumbItems",filter:Ss()})}
            ></slot>
        </div>
    </template>
`;class xp extends pe{slottedBreadcrumbItemsChanged(){if(this.$fastController.isConnected){if(this.slottedBreadcrumbItems===void 0||this.slottedBreadcrumbItems.length===0)return;const e=this.slottedBreadcrumbItems[this.slottedBreadcrumbItems.length-1];this.slottedBreadcrumbItems.forEach(i=>{const s=i===e;this.setItemSeparator(i,s),this.setAriaCurrent(i,s)})}}setItemSeparator(e,i){e instanceof gr&&(e.separator=!i)}findChildWithHref(e){var i,s;return e.childElementCount>0?e.querySelector("a[href]"):!((i=e.shadowRoot)===null||i===void 0)&&i.childElementCount?(s=e.shadowRoot)===null||s===void 0?void 0:s.querySelector("a[href]"):null}setAriaCurrent(e,i){const s=this.findChildWithHref(e);s===null&&e.hasAttribute("href")&&e instanceof gr?i?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current"):s!==null&&(i?s.setAttribute("aria-current","page"):s.removeAttribute("aria-current"))}}u([_],xp.prototype,"slottedBreadcrumbItems",void 0);const gy=(t,e)=>P`
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
        ${Pe("control")}
    >
        ${Xt(t,e)}
        <span class="content" part="content">
            <slot ${st("defaultSlottedContent")}></slot>
        </span>
        ${Zt(t,e)}
    </button>
`,Rh="form-associated-proxy",Oh="ElementInternals",Eh=Oh in window&&"setFormValue"in window[Oh].prototype,Lh=new WeakMap;function Fs(t){const e=class extends t{constructor(...i){super(...i),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Eh}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const i=this.proxy.labels,s=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),n=i?s.concat(Array.from(i)):s;return Object.freeze(n)}else return Fn}valueChanged(i,s){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(i,s){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(i,s){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),de.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(i,s){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(i,s){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),de.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!Eh)return null;let i=Lh.get(this);return i||(i=this.attachInternals(),Lh.set(this,i)),i}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach(i=>this.proxy.removeEventListener(i,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(i,s,n){this.elementInternals?this.elementInternals.setValidity(i,s,n):typeof s=="string"&&this.proxy.setCustomValidity(s)}formDisabledCallback(i){this.disabled=i}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var i;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(s=>this.proxy.addEventListener(s,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Rh),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Rh)),(i=this.shadowRoot)===null||i===void 0||i.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var i;this.removeChild(this.proxy),(i=this.shadowRoot)===null||i===void 0||i.removeChild(this.proxySlot)}validate(i){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,i)}setFormValue(i,s){this.elementInternals&&this.elementInternals.setFormValue(i,s||i)}_keypressHandler(i){switch(i.key){case Ts:if(this.form instanceof HTMLFormElement){const s=this.form.querySelector("[type=submit]");s==null||s.click()}break}}stopPropagation(i){i.stopPropagation()}};return f({mode:"boolean"})(e.prototype,"disabled"),f({mode:"fromView",attribute:"value"})(e.prototype,"initialValue"),f({attribute:"current-value"})(e.prototype,"currentValue"),f(e.prototype,"name"),f({mode:"boolean"})(e.prototype,"required"),_(e.prototype,"value"),e}function Hd(t){class e extends Fs(t){}class i extends e{constructor(...n){super(n),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(n,o){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),n!==void 0&&this.$emit("change"),this.validate()}currentCheckedChanged(n,o){this.checked=this.currentChecked}updateForm(){const n=this.checked?this.value:null;this.setFormValue(n,n)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return f({attribute:"checked",mode:"boolean"})(i.prototype,"checkedAttribute"),f({attribute:"current-checked",converter:Rr})(i.prototype,"currentChecked"),_(i.prototype,"defaultChecked"),_(i.prototype,"checked"),i}class my extends pe{}class vy extends Fs(my){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let gi=class extends vy{constructor(){super(...arguments),this.handleClick=e=>{var i;this.disabled&&((i=this.defaultSlottedContent)===null||i===void 0?void 0:i.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),typeof this.form.requestSubmit=="function"?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;(e=this.form)===null||e===void 0||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((e=this.$fastController.definition.shadowOptions)===null||e===void 0)&&e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,i){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),i==="submit"&&this.addEventListener("click",this.handleSubmission),e==="submit"&&this.removeEventListener("click",this.handleSubmission),i==="reset"&&this.addEventListener("click",this.handleFormReset),e==="reset"&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const i=Array.from((e=this.control)===null||e===void 0?void 0:e.children);i&&i.forEach(s=>{s.addEventListener("click",this.handleClick)})}disconnectedCallback(){var e;super.disconnectedCallback();const i=Array.from((e=this.control)===null||e===void 0?void 0:e.children);i&&i.forEach(s=>{s.removeEventListener("click",this.handleClick)})}};u([f({mode:"boolean"})],gi.prototype,"autofocus",void 0);u([f({attribute:"form"})],gi.prototype,"formId",void 0);u([f],gi.prototype,"formaction",void 0);u([f],gi.prototype,"formenctype",void 0);u([f],gi.prototype,"formmethod",void 0);u([f({mode:"boolean"})],gi.prototype,"formnovalidate",void 0);u([f],gi.prototype,"formtarget",void 0);u([f],gi.prototype,"type",void 0);u([_],gi.prototype,"defaultSlottedContent",void 0);class ll{}u([f({attribute:"aria-expanded"})],ll.prototype,"ariaExpanded",void 0);u([f({attribute:"aria-pressed"})],ll.prototype,"ariaPressed",void 0);ot(ll,Je);ot(gi,oi,ll);class by{constructor(e){if(this.dayFormat="numeric",this.weekdayFormat="long",this.monthFormat="long",this.yearFormat="numeric",this.date=new Date,e)for(const i in e){const s=e[i];i==="date"?this.date=this.getDateObject(s):this[i]=s}}getDateObject(e){if(typeof e=="string"){const i=e.split(/[/-]/);return i.length<3?new Date:new Date(parseInt(i[2],10),parseInt(i[0],10)-1,parseInt(i[1],10))}else if("day"in e&&"month"in e&&"year"in e){const{day:i,month:s,year:n}=e;return new Date(n,s-1,i)}return e}getDate(e=this.date,i={weekday:this.weekdayFormat,month:this.monthFormat,day:this.dayFormat,year:this.yearFormat},s=this.locale){const n=this.getDateObject(e);if(!n.getTime())return"";const o=Object.assign({timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone},i);return new Intl.DateTimeFormat(s,o).format(n)}getDay(e=this.date.getDate(),i=this.dayFormat,s=this.locale){return this.getDate({month:1,day:e,year:2020},{day:i},s)}getMonth(e=this.date.getMonth()+1,i=this.monthFormat,s=this.locale){return this.getDate({month:e,day:2,year:2020},{month:i},s)}getYear(e=this.date.getFullYear(),i=this.yearFormat,s=this.locale){return this.getDate({month:2,day:2,year:e},{year:i},s)}getWeekday(e=0,i=this.weekdayFormat,s=this.locale){const n=`1-${e+1}-2017`;return this.getDate(n,{weekday:i},s)}getWeekdays(e=this.weekdayFormat,i=this.locale){return Array(7).fill(null).map((s,n)=>this.getWeekday(n,e,i))}}let Ri=class extends pe{constructor(){super(...arguments),this.dateFormatter=new by,this.readonly=!1,this.locale="en-US",this.month=new Date().getMonth()+1,this.year=new Date().getFullYear(),this.dayFormat="numeric",this.weekdayFormat="short",this.monthFormat="long",this.yearFormat="numeric",this.minWeeks=0,this.disabledDates="",this.selectedDates="",this.oneDayInMs=864e5}localeChanged(){this.dateFormatter.locale=this.locale}dayFormatChanged(){this.dateFormatter.dayFormat=this.dayFormat}weekdayFormatChanged(){this.dateFormatter.weekdayFormat=this.weekdayFormat}monthFormatChanged(){this.dateFormatter.monthFormat=this.monthFormat}yearFormatChanged(){this.dateFormatter.yearFormat=this.yearFormat}getMonthInfo(e=this.month,i=this.year){const s=l=>new Date(l.getFullYear(),l.getMonth(),1).getDay(),n=l=>{const c=new Date(l.getFullYear(),l.getMonth()+1,1);return new Date(c.getTime()-this.oneDayInMs).getDate()},o=new Date(i,e-1),r=new Date(i,e),a=new Date(i,e-2);return{length:n(o),month:e,start:s(o),year:i,previous:{length:n(a),month:a.getMonth()+1,start:s(a),year:a.getFullYear()},next:{length:n(r),month:r.getMonth()+1,start:s(r),year:r.getFullYear()}}}getDays(e=this.getMonthInfo(),i=this.minWeeks){i=i>10?10:i;const{start:s,length:n,previous:o,next:r}=e,a=[];let l=1-s;for(;l<n+1||a.length<i||a[a.length-1].length%7!==0;){const{month:c,year:d}=l<1?o:l>n?r:e,h=l<1?o.length+l:l>n?l-n:l,v=`${c}-${h}-${d}`,w=this.dateInString(v,this.disabledDates),F=this.dateInString(v,this.selectedDates),$={day:h,month:c,year:d,disabled:w,selected:F},T=a[a.length-1];a.length===0||T.length%7===0?a.push([$]):T.push($),l++}return a}dateInString(e,i){const s=i.split(",").map(n=>n.trim());return e=typeof e=="string"?e:`${e.getMonth()+1}-${e.getDate()}-${e.getFullYear()}`,s.some(n=>n===e)}getDayClassNames(e,i){const{day:s,month:n,year:o,disabled:r,selected:a}=e,l=i===`${n}-${s}-${o}`,c=this.month!==n;return["day",l&&"today",c&&"inactive",r&&"disabled",a&&"selected"].filter(Boolean).join(" ")}getWeekdayText(){const e=this.dateFormatter.getWeekdays().map(i=>({text:i}));if(this.weekdayFormat!=="long"){const i=this.dateFormatter.getWeekdays("long");e.forEach((s,n)=>{s.abbr=i[n]})}return e}handleDateSelect(e,i){e.preventDefault,this.$emit("dateselected",i)}handleKeydown(e,i){return e.key===Ts&&this.handleDateSelect(e,i),!0}};u([f({mode:"boolean"})],Ri.prototype,"readonly",void 0);u([f],Ri.prototype,"locale",void 0);u([f({converter:K})],Ri.prototype,"month",void 0);u([f({converter:K})],Ri.prototype,"year",void 0);u([f({attribute:"day-format",mode:"fromView"})],Ri.prototype,"dayFormat",void 0);u([f({attribute:"weekday-format",mode:"fromView"})],Ri.prototype,"weekdayFormat",void 0);u([f({attribute:"month-format",mode:"fromView"})],Ri.prototype,"monthFormat",void 0);u([f({attribute:"year-format",mode:"fromView"})],Ri.prototype,"yearFormat",void 0);u([f({attribute:"min-weeks",converter:K})],Ri.prototype,"minWeeks",void 0);u([f({attribute:"disabled-dates"})],Ri.prototype,"disabledDates",void 0);u([f({attribute:"selected-dates"})],Ri.prototype,"selectedDates",void 0);const ia={none:"none",default:"default",sticky:"sticky"},Bs={default:"default",columnHeader:"columnheader",rowHeader:"rowheader"},nr={default:"default",header:"header",stickyHeader:"sticky-header"};class At extends pe{constructor(){super(...arguments),this.rowType=nr.default,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){if(this.rowData!==null&&this.isActiveRow){this.refocusOnLoad=!0;return}}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),this.cellsRepeatBehavior===null&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new Md(e=>e.columnDefinitions,e=>e.activeCellItemTemplate,{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(yo,this.handleFocusout),this.addEventListener(xo,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(yo,this.handleFocusout),this.removeEventListener(xo,this.handleKeydown)}handleFocusout(e){this.contains(e.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(e){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(e.target),this.$emit("row-focused",this)}handleKeydown(e){if(e.defaultPrevented)return;let i=0;switch(e.key){case sn:i=Math.max(0,this.focusColumnIndex-1),this.cellElements[i].focus(),e.preventDefault();break;case nn:i=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[i].focus(),e.preventDefault();break;case ds:e.ctrlKey||(this.cellElements[0].focus(),e.preventDefault());break;case us:e.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),e.preventDefault());break}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===nr.default&&this.cellItemTemplate!==void 0?this.cellItemTemplate:this.rowType===nr.default&&this.cellItemTemplate===void 0?this.defaultCellItemTemplate:this.headerCellItemTemplate!==void 0?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}}u([f({attribute:"grid-template-columns"})],At.prototype,"gridTemplateColumns",void 0);u([f({attribute:"row-type"})],At.prototype,"rowType",void 0);u([_],At.prototype,"rowData",void 0);u([_],At.prototype,"columnDefinitions",void 0);u([_],At.prototype,"cellItemTemplate",void 0);u([_],At.prototype,"headerCellItemTemplate",void 0);u([_],At.prototype,"rowIndex",void 0);u([_],At.prototype,"isActiveRow",void 0);u([_],At.prototype,"activeCellItemTemplate",void 0);u([_],At.prototype,"defaultCellItemTemplate",void 0);u([_],At.prototype,"defaultHeaderCellItemTemplate",void 0);u([_],At.prototype,"cellElements",void 0);function yy(t){const e=t.tagFor(At);return P`
    <${e}
        :rowData="${i=>i}"
        :cellItemTemplate="${(i,s)=>s.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(i,s)=>s.parent.headerCellItemTemplate}"
    ></${e}>
`}const xy=(t,e)=>{const i=yy(t),s=t.tagFor(At);return P`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>s}"
            :defaultRowItemTemplate="${i}"
            ${nl({property:"rowElements",filter:Ss("[role=row]")})}
        >
            <slot></slot>
        </template>
    `};class Ct extends pe{constructor(){super(),this.noTabbing=!1,this.generateHeader=ia.default,this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(e,i,s)=>{if(this.rowElements.length===0){this.focusRowIndex=0,this.focusColumnIndex=0;return}const n=Math.max(0,Math.min(this.rowElements.length-1,e)),r=this.rowElements[n].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),a=Math.max(0,Math.min(r.length-1,i)),l=r[a];s&&this.scrollHeight!==this.clientHeight&&(n<this.focusRowIndex&&this.scrollTop>0||n>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&l.scrollIntoView({block:"center",inline:"center"}),l.focus()},this.onChildListChange=(e,i)=>{e&&e.length&&(e.forEach(s=>{s.addedNodes.forEach(n=>{n.nodeType===1&&n.getAttribute("role")==="row"&&(n.columnDefinitions=this.columnDefinitions)})}),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,de.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let e=this.gridTemplateColumns;if(e===void 0){if(this.generatedGridTemplateColumns===""&&this.rowElements.length>0){const i=this.rowElements[0];this.generatedGridTemplateColumns=new Array(i.cellElements.length).fill("1fr").join(" ")}e=this.generatedGridTemplateColumns}this.rowElements.forEach((i,s)=>{const n=i;n.rowIndex=s,n.gridTemplateColumns=e,this.columnDefinitionsStale&&(n.columnDefinitions=this.columnDefinitions)}),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(e){let i="";return e.forEach(s=>{i=`${i}${i===""?"":" "}1fr`}),i}noTabbingChanged(){this.$fastController.isConnected&&(this.noTabbing?this.setAttribute("tabIndex","-1"):this.setAttribute("tabIndex",this.contains(document.activeElement)||this===document.activeElement?"-1":"0"))}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){this.columnDefinitions===null&&this.rowsData.length>0&&(this.columnDefinitions=Ct.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){if(this.columnDefinitions===null){this.generatedGridTemplateColumns="";return}this.generatedGridTemplateColumns=Ct.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())}headerCellItemTemplateChanged(){this.$fastController.isConnected&&this.generatedHeader!==null&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),this.rowItemTemplate===void 0&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new Md(e=>e.rowsData,e=>e.rowItemTemplate,{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(Sh,this.handleFocus),this.addEventListener(xo,this.handleKeydown),this.addEventListener(yo,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),de.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(Sh,this.handleFocus),this.removeEventListener(xo,this.handleKeydown),this.removeEventListener(yo,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(e){this.isUpdatingFocus=!0;const i=e.target;this.focusRowIndex=this.rowElements.indexOf(i),this.focusColumnIndex=i.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(e){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(e){(e.relatedTarget===null||!this.contains(e.relatedTarget))&&this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(e){if(e.defaultPrevented)return;let i;const s=this.rowElements.length-1,n=this.offsetHeight+this.scrollTop,o=this.rowElements[s];switch(e.key){case Di:e.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case Fi:e.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case ay:if(e.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex===0){this.focusOnCell(0,this.focusColumnIndex,!1);return}for(i=this.focusRowIndex-1,i;i>=0;i--){const r=this.rowElements[i];if(r.offsetTop<this.scrollTop){this.scrollTop=r.offsetTop+r.clientHeight-this.clientHeight;break}}this.focusOnCell(i,this.focusColumnIndex,!1);break;case ry:if(e.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=s||o.offsetTop+o.offsetHeight<=n){this.focusOnCell(s,this.focusColumnIndex,!1);return}for(i=this.focusRowIndex+1,i;i<=s;i++){const r=this.rowElements[i];if(r.offsetTop+r.offsetHeight>n){let a=0;this.generateHeader===ia.sticky&&this.generatedHeader!==null&&(a=this.generatedHeader.clientHeight),this.scrollTop=r.offsetTop-a;break}}this.focusOnCell(i,this.focusColumnIndex,!1);break;case ds:e.ctrlKey&&(e.preventDefault(),this.focusOnCell(0,0,!0));break;case us:e.ctrlKey&&this.columnDefinitions!==null&&(e.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0));break}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||this.pendingFocusUpdate===!1&&(this.pendingFocusUpdate=!0,de.queueUpdate(()=>this.updateFocus()))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(this.generatedHeader!==null&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),this.generateHeader!==ia.none&&this.rowsData.length>0){const e=document.createElement(this.rowElementTag);this.generatedHeader=e,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===ia.sticky?nr.stickyHeader:nr.header,(this.firstChild!==null||this.rowsPlaceholder!==null)&&this.insertBefore(e,this.firstChild!==null?this.firstChild:this.rowsPlaceholder);return}}}Ct.generateColumns=t=>Object.getOwnPropertyNames(t).map((e,i)=>({columnDataKey:e,gridColumn:`${i}`}));u([f({attribute:"no-tabbing",mode:"boolean"})],Ct.prototype,"noTabbing",void 0);u([f({attribute:"generate-header"})],Ct.prototype,"generateHeader",void 0);u([f({attribute:"grid-template-columns"})],Ct.prototype,"gridTemplateColumns",void 0);u([_],Ct.prototype,"rowsData",void 0);u([_],Ct.prototype,"columnDefinitions",void 0);u([_],Ct.prototype,"rowItemTemplate",void 0);u([_],Ct.prototype,"cellItemTemplate",void 0);u([_],Ct.prototype,"headerCellItemTemplate",void 0);u([_],Ct.prototype,"focusRowIndex",void 0);u([_],Ct.prototype,"focusColumnIndex",void 0);u([_],Ct.prototype,"defaultRowItemTemplate",void 0);u([_],Ct.prototype,"rowElementTag",void 0);u([_],Ct.prototype,"rowElements",void 0);const wy=P`
    <template>
        ${t=>t.rowData===null||t.columnDefinition===null||t.columnDefinition.columnDataKey===null?null:t.rowData[t.columnDefinition.columnDataKey]}
    </template>
`,$y=P`
    <template>
        ${t=>t.columnDefinition===null?null:t.columnDefinition.title===void 0?t.columnDefinition.columnDataKey:t.columnDefinition.title}
    </template>
`;class Ds extends pe{constructor(){super(...arguments),this.cellType=Bs.default,this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(e,i){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var e;super.connectedCallback(),this.addEventListener(Ch,this.handleFocusin),this.addEventListener(yo,this.handleFocusout),this.addEventListener(xo,this.handleKeydown),this.style.gridColumn=`${((e=this.columnDefinition)===null||e===void 0?void 0:e.gridColumn)===void 0?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(Ch,this.handleFocusin),this.removeEventListener(yo,this.handleFocusout),this.removeEventListener(xo,this.handleKeydown),this.disconnectCellView()}handleFocusin(e){if(!this.isActiveCell){switch(this.isActiveCell=!0,this.cellType){case Bs.columnHeader:if(this.columnDefinition!==null&&this.columnDefinition.headerCellInternalFocusQueue!==!0&&typeof this.columnDefinition.headerCellFocusTargetCallback=="function"){const i=this.columnDefinition.headerCellFocusTargetCallback(this);i!==null&&i.focus()}break;default:if(this.columnDefinition!==null&&this.columnDefinition.cellInternalFocusQueue!==!0&&typeof this.columnDefinition.cellFocusTargetCallback=="function"){const i=this.columnDefinition.cellFocusTargetCallback(this);i!==null&&i.focus()}break}this.$emit("cell-focused",this)}}handleFocusout(e){this!==document.activeElement&&!this.contains(document.activeElement)&&(this.isActiveCell=!1)}handleKeydown(e){if(!(e.defaultPrevented||this.columnDefinition===null||this.cellType===Bs.default&&this.columnDefinition.cellInternalFocusQueue!==!0||this.cellType===Bs.columnHeader&&this.columnDefinition.headerCellInternalFocusQueue!==!0))switch(e.key){case Ts:case oy:if(this.contains(document.activeElement)&&document.activeElement!==this)return;switch(this.cellType){case Bs.columnHeader:if(this.columnDefinition.headerCellFocusTargetCallback!==void 0){const i=this.columnDefinition.headerCellFocusTargetCallback(this);i!==null&&i.focus(),e.preventDefault()}break;default:if(this.columnDefinition.cellFocusTargetCallback!==void 0){const i=this.columnDefinition.cellFocusTargetCallback(this);i!==null&&i.focus(),e.preventDefault()}break}break;case To:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),e.preventDefault());break}}updateCellView(){if(this.disconnectCellView(),this.columnDefinition!==null)switch(this.cellType){case Bs.columnHeader:this.columnDefinition.headerCellTemplate!==void 0?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=$y.render(this,this);break;case void 0:case Bs.rowHeader:case Bs.default:this.columnDefinition.cellTemplate!==void 0?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=wy.render(this,this);break}}disconnectCellView(){this.customCellView!==null&&(this.customCellView.dispose(),this.customCellView=null)}}u([f({attribute:"cell-type"})],Ds.prototype,"cellType",void 0);u([f({attribute:"grid-column"})],Ds.prototype,"gridColumn",void 0);u([_],Ds.prototype,"rowData",void 0);u([_],Ds.prototype,"columnDefinition",void 0);function ky(t){const e=t.tagFor(Ds);return P`
    <${e}
        cell-type="${i=>i.isRowHeader?"rowheader":void 0}"
        grid-column="${(i,s)=>s.index+1}"
        :rowData="${(i,s)=>s.parent.rowData}"
        :columnDefinition="${i=>i}"
    ></${e}>
`}function _y(t){const e=t.tagFor(Ds);return P`
    <${e}
        cell-type="columnheader"
        grid-column="${(i,s)=>s.index+1}"
        :columnDefinition="${i=>i}"
    ></${e}>
`}const Sy=(t,e)=>{const i=ky(t),s=_y(t);return P`
        <template
            role="row"
            class="${n=>n.rowType!=="default"?n.rowType:""}"
            :defaultCellItemTemplate="${i}"
            :defaultHeaderCellItemTemplate="${s}"
            ${nl({property:"cellElements",filter:Ss('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${st("slottedCellElements")}></slot>
        </template>
    `},Cy=(t,e)=>P`
        <template
            tabindex="-1"
            role="${i=>!i.cellType||i.cellType==="default"?"gridcell":i.cellType}"
            class="
            ${i=>i.cellType==="columnheader"?"column-header":i.cellType==="rowheader"?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `,Iy=P`
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
`,Ty=t=>{const e=t.tagFor(Ds);return P`
        <${e}
            class="week-day"
            part="week-day"
            tabindex="-1"
            grid-column="${(i,s)=>s.index+1}"
            abbr="${i=>i.abbr}"
        >
            ${i=>i.text}
        </${e}>
    `},Fy=(t,e)=>{const i=t.tagFor(Ds);return P`
        <${i}
            class="${(s,n)=>n.parentContext.parent.getDayClassNames(s,e)}"
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
                part="${s=>e===`${s.month}-${s.day}-${s.year}`?"today":"date"}"
            >
                ${(s,n)=>n.parentContext.parent.dateFormatter.getDay(s.day)}
            </div>
            <slot name="${s=>s.month}-${s=>s.day}-${s=>s.year}"></slot>
        </${i}>
    `},Dy=(t,e)=>{const i=t.tagFor(At);return P`
        <${i}
            class="week"
            part="week"
            role="row"
            role-type="default"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
        ${ro(s=>s,Fy(t,e),{positioning:!0})}
        </${i}>
    `},Ry=(t,e)=>{const i=t.tagFor(Ct),s=t.tagFor(At);return P`
    <${i} class="days interact" part="days" generate-header="none">
        <${s}
            class="week-days"
            part="week-days"
            role="row"
            row-type="header"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
            ${ro(n=>n.getWeekdayText(),Ty(t),{positioning:!0})}
        </${s}>
        ${ro(n=>n.getDays(),Dy(t,e))}
    </${i}>
`},Oy=t=>P`
        <div class="days" part="days">
            <div class="week-days" part="week-days">
                ${ro(e=>e.getWeekdayText(),P`
                        <div class="week-day" part="week-day" abbr="${e=>e.abbr}">
                            ${e=>e.text}
                        </div>
                    `)}
            </div>
            ${ro(e=>e.getDays(),P`
                    <div class="week">
                        ${ro(e=>e,P`
                                <div
                                    class="${(e,i)=>i.parentContext.parent.getDayClassNames(e,t)}"
                                    part="day"
                                    aria-label="${(e,i)=>i.parentContext.parent.dateFormatter.getDate(`${e.month}-${e.day}-${e.year}`,{month:"long",day:"numeric"})}"
                                >
                                    <div
                                        class="date"
                                        part="${e=>t===`${e.month}-${e.day}-${e.year}`?"today":"date"}"
                                    >
                                        ${(e,i)=>i.parentContext.parent.dateFormatter.getDay(e.day)}
                                    </div>
                                    <slot
                                        name="${e=>e.month}-${e=>e.day}-${e=>e.year}"
                                    ></slot>
                                </div>
                            `)}
                    </div>
                `)}
        </div>
    `,Ey=(t,e)=>{var i;const s=new Date,n=`${s.getMonth()+1}-${s.getDate()}-${s.getFullYear()}`;return P`
        <template>
            ${Vb}
            ${e.title instanceof Function?e.title(t,e):(i=e.title)!==null&&i!==void 0?i:""}
            <slot></slot>
            ${pt(o=>o.readonly,Oy(n),Ry(t,n))}
            ${Mb}
        </template>
    `},Ly=(t,e)=>P`
    <slot></slot>
`;let wp=class extends pe{};const Ay=(t,e)=>P`
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
                ${e.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${e.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${i=>i.defaultSlottedNodes&&i.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${st("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class Py extends pe{}class My extends Hd(Py){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class cl extends My{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{if(!this.readOnly)switch(e.key){case Nn:this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked;break}},this.clickHandler=e=>{!this.disabled&&!this.readOnly&&(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}u([f({attribute:"readonly",mode:"boolean"})],cl.prototype,"readOnly",void 0);u([_],cl.prototype,"defaultSlottedNodes",void 0);u([_],cl.prototype,"indeterminate",void 0);function $p(t){return bo(t)&&(t.getAttribute("role")==="option"||t instanceof HTMLOptionElement)}class hs extends pe{constructor(e,i,s,n){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),i&&(this.initialValue=i),s&&(this.defaultSelected=s),n&&(this.selected=n),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,i){if(typeof i=="boolean"){this.ariaChecked=i?"true":"false";return}this.ariaChecked=null}contentChanged(e,i){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,i){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,i){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return(e=this.value)!==null&&e!==void 0?e:this.text}get text(){var e,i;return(i=(e=this.textContent)===null||e===void 0?void 0:e.replace(/\s+/g," ").trim())!==null&&i!==void 0?i:""}set value(e){const i=`${e??""}`;this._value=i,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=i),le.notify(this,"value")}get value(){var e;return le.track(this,"value"),(e=this._value)!==null&&e!==void 0?e:this.text}get form(){return this.proxy?this.proxy.form:null}}u([_],hs.prototype,"checked",void 0);u([_],hs.prototype,"content",void 0);u([_],hs.prototype,"defaultSelected",void 0);u([f({mode:"boolean"})],hs.prototype,"disabled",void 0);u([f({attribute:"selected",mode:"boolean"})],hs.prototype,"selectedAttribute",void 0);u([_],hs.prototype,"selected",void 0);u([f({attribute:"value",mode:"fromView"})],hs.prototype,"initialValue",void 0);class Fo{}u([_],Fo.prototype,"ariaChecked",void 0);u([_],Fo.prototype,"ariaPosInSet",void 0);u([_],Fo.prototype,"ariaSelected",void 0);u([_],Fo.prototype,"ariaSetSize",void 0);ot(Fo,Je);ot(hs,oi,Fo);let ri=class Sa extends pe{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return(e=this.selectedOptions[0])!==null&&e!==void 0?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(e=>e.disabled)}get length(){var e,i;return(i=(e=this.options)===null||e===void 0?void 0:e.length)!==null&&i!==void 0?i:0}get options(){return le.track(this,"options"),this._options}set options(e){this._options=e,le.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){const i=e.target.closest("option,[role=option]");if(i&&!i.disabled)return this.selectedIndex=this.options.indexOf(i),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&e!==null&&(e.focus(),requestAnimationFrame(()=>{e.scrollIntoView({block:"nearest"})}))}focusinHandler(e){!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),i=new RegExp(`^${e}`,"gi");return this.options.filter(s=>s.text.trim().match(i))}getSelectableIndex(e=this.selectedIndex,i){const s=e>i?-1:e<i?1:0,n=e+s;let o=null;switch(s){case-1:{o=this.options.reduceRight((r,a,l)=>!r&&!a.disabled&&l<n?a:r,o);break}case 1:{o=this.options.reduce((r,a,l)=>!r&&!a.disabled&&l>n?a:r,o);break}}return this.options.indexOf(o)}handleChange(e,i){switch(i){case"selected":{Sa.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions();break}}}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,Sa.TYPE_AHEAD_TIMEOUT_MS),!(e.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;const i=e.key;switch(i){case ds:{e.shiftKey||(e.preventDefault(),this.selectFirstOption());break}case Fi:{e.shiftKey||(e.preventDefault(),this.selectNextOption());break}case Di:{e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break}case us:{e.preventDefault(),this.selectLastOption();break}case ol:return this.focusAndScrollOptionIntoView(),!0;case Ts:case To:return!0;case Nn:if(this.typeaheadExpired)return!0;default:return i.length===1&&this.handleTypeAhead(`${i}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,i){this.ariaMultiSelectable=i?"true":null}selectedIndexChanged(e,i){var s;if(!this.hasSelectableOptions){this.selectedIndex=-1;return}if(!((s=this.options[this.selectedIndex])===null||s===void 0)&&s.disabled&&typeof e=="number"){const n=this.getSelectableIndex(e,i),o=n>-1?n:e;this.selectedIndex=o,i===o&&this.selectedIndexChanged(i,o);return}this.setSelectedOptions()}selectedOptionsChanged(e,i){var s;const n=i.filter(Sa.slottedOptionFilter);(s=this.options)===null||s===void 0||s.forEach(o=>{const r=le.getNotifier(o);r.unsubscribe(this,"selected"),o.selected=n.includes(o),r.subscribe(this,"selected")})}selectFirstOption(){var e,i;this.disabled||(this.selectedIndex=(i=(e=this.options)===null||e===void 0?void 0:e.findIndex(s=>!s.disabled))!==null&&i!==void 0?i:-1)}selectLastOption(){this.disabled||(this.selectedIndex=ey(this.options,e=>!e.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,i;this.selectedIndex=(i=(e=this.options)===null||e===void 0?void 0:e.findIndex(s=>s.defaultSelected))!==null&&i!==void 0?i:-1}setSelectedOptions(){var e,i,s;!((e=this.options)===null||e===void 0)&&e.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=(s=(i=this.firstSelectedOption)===null||i===void 0?void 0:i.id)!==null&&s!==void 0?s:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,i){this.options=i.reduce((n,o)=>($p(o)&&n.push(o),n),[]);const s=`${this.options.length}`;this.options.forEach((n,o)=>{n.id||(n.id=pr("option-")),n.ariaPosInSet=`${o+1}`,n.ariaSetSize=s}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,i){if(this.$fastController.isConnected){const s=this.getTypeaheadMatches();if(s.length){const n=this.options.indexOf(s[0]);n>-1&&(this.selectedIndex=n)}this.typeaheadExpired=!1}}};ri.slottedOptionFilter=t=>$p(t)&&!t.hidden;ri.TYPE_AHEAD_TIMEOUT_MS=1e3;u([f({mode:"boolean"})],ri.prototype,"disabled",void 0);u([_],ri.prototype,"selectedIndex",void 0);u([_],ri.prototype,"selectedOptions",void 0);u([_],ri.prototype,"slottedOptions",void 0);u([_],ri.prototype,"typeaheadBuffer",void 0);class dn{}u([_],dn.prototype,"ariaActiveDescendant",void 0);u([_],dn.prototype,"ariaDisabled",void 0);u([_],dn.prototype,"ariaExpanded",void 0);u([_],dn.prototype,"ariaMultiSelectable",void 0);ot(dn,Je);ot(ri,dn);const ao={above:"above",below:"below"};class Vy extends ri{}class Hy extends Fs(Vy){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const sa={inline:"inline",list:"list",both:"both",none:"none"};let Rs=class extends Hy{constructor(){super(...arguments),this._value="",this.filteredOptions=[],this.filter="",this.forcedPosition=!1,this.listboxId=pr("listbox-"),this.maxHeight=0,this.open=!1}formResetCallback(){super.formResetCallback(),this.setDefaultSelectedOption(),this.updateValue()}validate(){super.validate(this.control)}get isAutocompleteInline(){return this.autocomplete===sa.inline||this.isAutocompleteBoth}get isAutocompleteList(){return this.autocomplete===sa.list||this.isAutocompleteBoth}get isAutocompleteBoth(){return this.autocomplete===sa.both}openChanged(){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),de.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}get options(){return le.track(this,"options"),this.filteredOptions.length?this.filteredOptions:this._options}set options(e){this._options=e,le.notify(this,"options")}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}positionChanged(e,i){this.positionAttribute=i,this.setPositioning()}get value(){return le.track(this,"value"),this._value}set value(e){var i,s,n;const o=`${this._value}`;if(this.$fastController.isConnected&&this.options){const r=this.options.findIndex(c=>c.text.toLowerCase()===e.toLowerCase()),a=(i=this.options[this.selectedIndex])===null||i===void 0?void 0:i.text,l=(s=this.options[r])===null||s===void 0?void 0:s.text;this.selectedIndex=a!==l?r:this.selectedIndex,e=((n=this.firstSelectedOption)===null||n===void 0?void 0:n.text)||e}o!==e&&(this._value=e,super.valueChanged(o,e),le.notify(this,"value"))}clickHandler(e){if(!this.disabled){if(this.open){const i=e.target.closest("option,[role=option]");if(!i||i.disabled)return;this.selectedOptions=[i],this.control.value=i.text,this.clearSelectionRange(),this.updateValue(!0)}return this.open=!this.open,this.open&&this.control.focus(),!0}}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.value&&(this.initialValue=this.value)}disabledChanged(e,i){super.disabledChanged&&super.disabledChanged(e,i),this.ariaDisabled=this.disabled?"true":"false"}filterOptions(){(!this.autocomplete||this.autocomplete===sa.none)&&(this.filter="");const e=this.filter.toLowerCase();this.filteredOptions=this._options.filter(i=>i.text.toLowerCase().startsWith(this.filter.toLowerCase())),this.isAutocompleteList&&(!this.filteredOptions.length&&!e&&(this.filteredOptions=this._options),this._options.forEach(i=>{i.hidden=!this.filteredOptions.includes(i)}))}focusAndScrollOptionIntoView(){this.contains(document.activeElement)&&(this.control.focus(),this.firstSelectedOption&&requestAnimationFrame(()=>{var e;(e=this.firstSelectedOption)===null||e===void 0||e.scrollIntoView({block:"nearest"})}))}focusoutHandler(e){if(this.syncValue(),!this.open)return!0;const i=e.relatedTarget;if(this.isSameNode(i)){this.focus();return}(!this.options||!this.options.includes(i))&&(this.open=!1)}inputHandler(e){if(this.filter=this.control.value,this.filterOptions(),this.isAutocompleteInline||(this.selectedIndex=this.options.map(i=>i.text).indexOf(this.control.value)),e.inputType.includes("deleteContent")||!this.filter.length)return!0;this.isAutocompleteList&&!this.open&&(this.open=!0),this.isAutocompleteInline&&(this.filteredOptions.length?(this.selectedOptions=[this.filteredOptions[0]],this.selectedIndex=this.options.indexOf(this.firstSelectedOption),this.setInlineSelection()):this.selectedIndex=-1)}keydownHandler(e){const i=e.key;if(e.ctrlKey||e.shiftKey)return!0;switch(i){case"Enter":{this.syncValue(),this.isAutocompleteInline&&(this.filter=this.value),this.open=!1,this.clearSelectionRange();break}case"Escape":{if(this.isAutocompleteInline||(this.selectedIndex=-1),this.open){this.open=!1;break}this.value="",this.control.value="",this.filter="",this.filterOptions();break}case"Tab":{if(this.setInputToSelection(),!this.open)return!0;e.preventDefault(),this.open=!1;break}case"ArrowUp":case"ArrowDown":{if(this.filterOptions(),!this.open){this.open=!0;break}this.filteredOptions.length>0&&super.keydownHandler(e),this.isAutocompleteInline&&this.setInlineSelection();break}default:return!0}}keyupHandler(e){switch(e.key){case"ArrowLeft":case"ArrowRight":case"Backspace":case"Delete":case"Home":case"End":{this.filter=this.control.value,this.selectedIndex=-1,this.filterOptions();break}}}selectedIndexChanged(e,i){if(this.$fastController.isConnected){if(i=rl(-1,this.options.length-1,i),i!==this.selectedIndex){this.selectedIndex=i;return}super.selectedIndexChanged(e,i)}}selectPreviousOption(){!this.disabled&&this.selectedIndex>=0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){if(this.$fastController.isConnected&&this.options){const e=this.options.findIndex(i=>i.getAttribute("selected")!==null||i.selected);this.selectedIndex=e,!this.dirtyValue&&this.firstSelectedOption&&(this.value=this.firstSelectedOption.text),this.setSelectedOptions()}}setInputToSelection(){this.firstSelectedOption&&(this.control.value=this.firstSelectedOption.text,this.control.focus())}setInlineSelection(){this.firstSelectedOption&&(this.setInputToSelection(),this.control.setSelectionRange(this.filter.length,this.control.value.length,"backward"))}syncValue(){var e;const i=this.selectedIndex>-1?(e=this.firstSelectedOption)===null||e===void 0?void 0:e.text:this.control.value;this.updateValue(this.value!==i)}setPositioning(){const e=this.getBoundingClientRect(),s=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>s?ao.above:ao.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===ao.above?~~e.top:~~s}selectedOptionsChanged(e,i){this.$fastController.isConnected&&this._options.forEach(s=>{s.selected=i.includes(s)})}slottedOptionsChanged(e,i){super.slottedOptionsChanged(e,i),this.updateValue()}updateValue(e){var i;this.$fastController.isConnected&&(this.value=((i=this.firstSelectedOption)===null||i===void 0?void 0:i.text)||this.control.value,this.control.value=this.value),e&&this.$emit("change")}clearSelectionRange(){const e=this.control.value.length;this.control.setSelectionRange(e,e)}};u([f({attribute:"autocomplete",mode:"fromView"})],Rs.prototype,"autocomplete",void 0);u([_],Rs.prototype,"maxHeight",void 0);u([f({attribute:"open",mode:"boolean"})],Rs.prototype,"open",void 0);u([f],Rs.prototype,"placeholder",void 0);u([f({attribute:"position"})],Rs.prototype,"positionAttribute",void 0);u([_],Rs.prototype,"position",void 0);class dl{}u([_],dl.prototype,"ariaAutoComplete",void 0);u([_],dl.prototype,"ariaControls",void 0);ot(dl,dn);ot(Rs,oi,dl);const Ny=(t,e)=>P`
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
            ${Xt(t,e)}
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
                    ${Pe("control")}
                />
                <div class="indicator" part="indicator" aria-hidden="true">
                    <slot name="indicator">
                        ${e.indicator||""}
                    </slot>
                </div>
            </slot>
            ${Zt(t,e)}
        </div>
        <div
            class="listbox"
            id="${i=>i.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${i=>i.disabled}"
            ?hidden="${i=>!i.open}"
            ${Pe("listbox")}
        >
            <slot
                ${st({filter:ri.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`;function Ma(t){const e=t.parentElement;if(e)return e;{const i=t.getRootNode();if(i.host instanceof HTMLElement)return i.host}return null}function zy(t,e){let i=e;for(;i!==null;){if(i===t)return!0;i=Ma(i)}return!1}const ys=document.createElement("div");function By(t){return t instanceof sl}class Nd{setProperty(e,i){de.queueUpdate(()=>this.target.setProperty(e,i))}removeProperty(e){de.queueUpdate(()=>this.target.removeProperty(e))}}class jy extends Nd{constructor(e){super();const i=new CSSStyleSheet;this.target=i.cssRules[i.insertRule(":host{}")].style,e.$fastController.addStyles(qt.create([i]))}}class Yy extends Nd{constructor(){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}class Uy extends Nd{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:e}=this.style;if(e){const i=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[i].style}}}class kp{constructor(e){this.store=new Map,this.target=null;const i=e.$fastController;this.style=document.createElement("style"),i.addStyles(this.style),le.getNotifier(i).subscribe(this,"isConnected"),this.handleChange(i,"isConnected")}targetChanged(){if(this.target!==null)for(const[e,i]of this.store.entries())this.target.setProperty(e,i)}setProperty(e,i){this.store.set(e,i),de.queueUpdate(()=>{this.target!==null&&this.target.setProperty(e,i)})}removeProperty(e){this.store.delete(e),de.queueUpdate(()=>{this.target!==null&&this.target.removeProperty(e)})}handleChange(e,i){const{sheet:s}=this.style;if(s){const n=s.insertRule(":host{}",s.cssRules.length);this.target=s.cssRules[n].style}else this.target=null}}u([_],kp.prototype,"target",void 0);class Wy{constructor(e){this.target=e.style}setProperty(e,i){de.queueUpdate(()=>this.target.setProperty(e,i))}removeProperty(e){de.queueUpdate(()=>this.target.removeProperty(e))}}class Tt{setProperty(e,i){Tt.properties[e]=i;for(const s of Tt.roots.values())no.getOrCreate(Tt.normalizeRoot(s)).setProperty(e,i)}removeProperty(e){delete Tt.properties[e];for(const i of Tt.roots.values())no.getOrCreate(Tt.normalizeRoot(i)).removeProperty(e)}static registerRoot(e){const{roots:i}=Tt;if(!i.has(e)){i.add(e);const s=no.getOrCreate(this.normalizeRoot(e));for(const n in Tt.properties)s.setProperty(n,Tt.properties[n])}}static unregisterRoot(e){const{roots:i}=Tt;if(i.has(e)){i.delete(e);const s=no.getOrCreate(Tt.normalizeRoot(e));for(const n in Tt.properties)s.removeProperty(n)}}static normalizeRoot(e){return e===ys?document:e}}Tt.roots=new Set;Tt.properties={};const Cc=new WeakMap,Gy=de.supportsAdoptedStyleSheets?jy:kp,no=Object.freeze({getOrCreate(t){if(Cc.has(t))return Cc.get(t);let e;return t===ys?e=new Tt:t instanceof Document?e=de.supportsAdoptedStyleSheets?new Yy:new Uy:By(t)?e=new Gy(t):e=new Wy(t),Cc.set(t,e),e}});class Ut extends Pd{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,e.cssCustomPropertyName!==null&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=Ut.uniqueId(),Ut.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new Ut({name:typeof e=="string"?e:e.name,cssCustomPropertyName:typeof e=="string"?e:e.cssCustomPropertyName===void 0?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return typeof e.cssCustomProperty=="string"}static isDerivedDesignTokenValue(e){return typeof e=="function"}static getTokenById(e){return Ut.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const i=bt.getOrCreate(e).get(this);if(i!==void 0)return i;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,i){return this._appliedTo.add(e),i instanceof Ut&&(i=this.alias(i)),bt.getOrCreate(e).set(this,i),this}deleteValueFor(e){return this._appliedTo.delete(e),bt.existsFor(e)&&bt.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(ys,e),this}subscribe(e,i){const s=this.getOrCreateSubscriberSet(i);i&&!bt.existsFor(i)&&bt.getOrCreate(i),s.has(e)||s.add(e)}unsubscribe(e,i){const s=this.subscribers.get(i||this);s&&s.has(e)&&s.delete(e)}notify(e){const i=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach(s=>s.handleChange(i)),this.subscribers.has(e)&&this.subscribers.get(e).forEach(s=>s.handleChange(i))}alias(e){return i=>e.getValueFor(i)}}Ut.uniqueId=(()=>{let t=0;return()=>(t++,t.toString(16))})();Ut.tokensById=new Map;class qy{startReflection(e,i){e.subscribe(this,i),this.handleChange({token:e,target:i})}stopReflection(e,i){e.unsubscribe(this,i),this.remove(e,i)}handleChange(e){const{token:i,target:s}=e;this.add(i,s)}add(e,i){no.getOrCreate(i).setProperty(e.cssCustomProperty,this.resolveCSSValue(bt.getOrCreate(i).get(e)))}remove(e,i){no.getOrCreate(i).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&typeof e.createCSS=="function"?e.createCSS():e}}class Zy{constructor(e,i,s){this.source=e,this.token=i,this.node=s,this.dependencies=new Set,this.observer=le.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,ir))}}class Xy{constructor(){this.values=new Map}set(e,i){this.values.get(e)!==i&&(this.values.set(e,i),le.getNotifier(this).notify(e.id))}get(e){return le.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e)}all(){return this.values.entries()}}const Uo=new WeakMap,Wo=new WeakMap;class bt{constructor(e){this.target=e,this.store=new Xy,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(i,s)=>{const n=Ut.getTokenById(s);if(n&&(n.notify(this.target),Ut.isCSSDesignToken(n))){const o=this.parent,r=this.isReflecting(n);if(o){const a=o.get(n),l=i.get(n);a!==l&&!r?this.reflectToCSS(n):a===l&&r&&this.stopReflectToCSS(n)}else r||this.reflectToCSS(n)}}},Uo.set(e,this),le.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof sl?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return Uo.get(e)||new bt(e)}static existsFor(e){return Uo.has(e)}static findParent(e){if(ys!==e.target){let i=Ma(e.target);for(;i!==null;){if(Uo.has(i))return Uo.get(i);i=Ma(i)}return bt.getOrCreate(ys)}return null}static findClosestAssignedNode(e,i){let s=i;do{if(s.has(e))return s;s=s.parent?s.parent:s.target!==ys?bt.getOrCreate(ys):null}while(s!==null);return null}get parent(){return Wo.get(this)||null}has(e){return this.assignedValues.has(e)}get(e){const i=this.store.get(e);if(i!==void 0)return i;const s=this.getRaw(e);if(s!==void 0)return this.hydrate(e,s),this.get(e)}getRaw(e){var i;return this.assignedValues.has(e)?this.assignedValues.get(e):(i=bt.findClosestAssignedNode(e,this))===null||i===void 0?void 0:i.getRaw(e)}set(e,i){Ut.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,i),Ut.isDerivedDesignTokenValue(i)?this.setupBindingObserver(e,i):this.store.set(e,i)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const i=this.getRaw(e);i?this.hydrate(e,i):this.store.delete(e)}bind(){const e=bt.findParent(this);e&&e.appendChild(this);for(const i of this.assignedValues.keys())i.notify(this.target)}unbind(){this.parent&&Wo.get(this).removeChild(this)}appendChild(e){e.parent&&Wo.get(e).removeChild(e);const i=this.children.filter(s=>e.contains(s));Wo.set(e,this),this.children.push(e),i.forEach(s=>e.appendChild(s)),le.getNotifier(this.store).subscribe(e);for(const[s,n]of this.store.all())e.hydrate(s,this.bindingObservers.has(s)?this.getRaw(s):n)}removeChild(e){const i=this.children.indexOf(e);return i!==-1&&this.children.splice(i,1),le.getNotifier(this.store).unsubscribe(e),e.parent===this?Wo.delete(e):!1}contains(e){return zy(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),bt.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),bt.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,i){const s=Ut.getTokenById(i);s&&this.hydrate(s,this.getRaw(s))}hydrate(e,i){if(!this.has(e)){const s=this.bindingObservers.get(e);Ut.isDerivedDesignTokenValue(i)?s?s.source!==i&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,i)):this.setupBindingObserver(e,i):(s&&this.tearDownBindingObserver(e),this.store.set(e,i))}}setupBindingObserver(e,i){const s=new Zy(i,e,this);return this.bindingObservers.set(e,s),s}tearDownBindingObserver(e){return this.bindingObservers.has(e)?(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0):!1}}bt.cssCustomPropertyReflector=new qy;u([_],bt.prototype,"children",void 0);function Qy(t){return Ut.from(t)}const Ue=Object.freeze({create:Qy,notifyConnection(t){return!t.isConnected||!bt.existsFor(t)?!1:(bt.getOrCreate(t).bind(),!0)},notifyDisconnection(t){return t.isConnected||!bt.existsFor(t)?!1:(bt.getOrCreate(t).unbind(),!0)},registerRoot(t=ys){Tt.registerRoot(t)},unregisterRoot(t=ys){Tt.unregisterRoot(t)}}),Ic=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),Tc=new Map,Ca=new Map;let lo=null;const Go=ht.createInterface(t=>t.cachedCallback(e=>(lo===null&&(lo=new Sp(null,e)),lo))),_p=Object.freeze({tagFor(t){return Ca.get(t)},responsibleFor(t){const e=t.$$designSystem$$;return e||ht.findResponsibleContainer(t).get(Go)},getOrCreate(t){if(!t)return lo===null&&(lo=ht.getOrCreateDOMContainer().get(Go)),lo;const e=t.$$designSystem$$;if(e)return e;const i=ht.getOrCreateDOMContainer(t);if(i.has(Go,!1))return i.get(Go);{const s=new Sp(t,i);return i.register(fr.instance(Go,s)),s}}});function Jy(t,e,i){return typeof t=="string"?{name:t,type:e,callback:i}:t}class Sp{constructor(e,i){this.owner=e,this.container=i,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>Ic.definitionCallbackOnly,e!==null&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){const i=this.container,s=[],n=this.disambiguate,o=this.shadowRootMode,r={elementPrefix:this.prefix,tryDefineElement(a,l,c){const d=Jy(a,l,c),{name:h,callback:v,baseClass:w}=d;let{type:F}=d,$=h,T=Tc.get($),W=!0;for(;T;){const Z=n($,F,T);switch(Z){case Ic.ignoreDuplicate:return;case Ic.definitionCallbackOnly:W=!1,T=void 0;break;default:$=Z,T=Tc.get($);break}}W&&((Ca.has(F)||F===pe)&&(F=class extends F{}),Tc.set($,F),Ca.set(F,$),w&&Ca.set(w,$)),s.push(new Ky(i,$,F,o,v,W))}};this.designTokensInitialized||(this.designTokensInitialized=!0,this.designTokenRoot!==null&&Ue.registerRoot(this.designTokenRoot)),i.registerWithContext(r,...e);for(const a of s)a.callback(a),a.willDefine&&a.definition!==null&&a.definition.define();return this}}class Ky{constructor(e,i,s,n,o,r){this.container=e,this.name=i,this.type=s,this.shadowRootMode=n,this.callback=o,this.willDefine=r,this.definition=null}definePresentation(e){bp.define(this.name,e,this.container)}defineElement(e){this.definition=new il(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return _p.tagFor(e)}}const e0=(t,e)=>P`
    <div class="positioning-region" part="positioning-region">
        ${pt(i=>i.modal,P`
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
            ${Pe("dialog")}
        >
            <slot></slot>
        </div>
    </div>
`;/*!
* tabbable 5.3.3
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var Cp=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],t0=Cp.join(","),Ip=typeof Element>"u",mr=Ip?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Qc=!Ip&&Element.prototype.getRootNode?function(t){return t.getRootNode()}:function(t){return t.ownerDocument},i0=function(e,i){return e.tabIndex<0&&(i||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},Tp=function(e){return e.tagName==="INPUT"},s0=function(e){return Tp(e)&&e.type==="hidden"},n0=function(e){var i=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(s){return s.tagName==="SUMMARY"});return i},o0=function(e,i){for(var s=0;s<e.length;s++)if(e[s].checked&&e[s].form===i)return e[s]},r0=function(e){if(!e.name)return!0;var i=e.form||Qc(e),s=function(a){return i.querySelectorAll('input[type="radio"][name="'+a+'"]')},n;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")n=s(window.CSS.escape(e.name));else try{n=s(e.name)}catch(r){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",r.message),!1}var o=o0(n,e.form);return!o||o===e},a0=function(e){return Tp(e)&&e.type==="radio"},l0=function(e){return a0(e)&&!r0(e)},Ah=function(e){var i=e.getBoundingClientRect(),s=i.width,n=i.height;return s===0&&n===0},c0=function(e,i){var s=i.displayCheck,n=i.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var o=mr.call(e,"details>summary:first-of-type"),r=o?e.parentElement:e;if(mr.call(r,"details:not([open]) *"))return!0;var a=Qc(e).host,l=(a==null?void 0:a.ownerDocument.contains(a))||e.ownerDocument.contains(e);if(!s||s==="full"){if(typeof n=="function"){for(var c=e;e;){var d=e.parentElement,h=Qc(e);if(d&&!d.shadowRoot&&n(d)===!0)return Ah(e);e.assignedSlot?e=e.assignedSlot:!d&&h!==e.ownerDocument?e=h.host:e=d}e=c}if(l)return!e.getClientRects().length}else if(s==="non-zero-area")return Ah(e);return!1},d0=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var i=e.parentElement;i;){if(i.tagName==="FIELDSET"&&i.disabled){for(var s=0;s<i.children.length;s++){var n=i.children.item(s);if(n.tagName==="LEGEND")return mr.call(i,"fieldset[disabled] *")?!0:!n.contains(e)}return!0}i=i.parentElement}return!1},Fp=function(e,i){return!(i.disabled||s0(i)||c0(i,e)||n0(i)||d0(i))},u0=function(e,i){return!(l0(i)||i0(i)<0||!Fp(e,i))},Ph=function(e,i){if(i=i||{},!e)throw new Error("No node provided");return mr.call(e,t0)===!1?!1:u0(i,e)},h0=Cp.concat("iframe").join(","),Mh=function(e,i){if(i=i||{},!e)throw new Error("No node provided");return mr.call(e,h0)===!1?!1:Fp(i,e)};class Ti extends pe{constructor(){super(...arguments),this.modal=!0,this.hidden=!1,this.trapFocus=!0,this.trapFocusChanged=()=>{this.$fastController.isConnected&&this.updateTrapFocus()},this.isTrappingFocus=!1,this.handleDocumentKeydown=e=>{if(!e.defaultPrevented&&!this.hidden)switch(e.key){case To:this.dismiss(),e.preventDefault();break;case ol:this.handleTabKeyDown(e);break}},this.handleDocumentFocus=e=>{!e.defaultPrevented&&this.shouldForceFocus(e.target)&&(this.focusFirstElement(),e.preventDefault())},this.handleTabKeyDown=e=>{if(!this.trapFocus||this.hidden)return;const i=this.getTabQueueBounds();if(i.length!==0){if(i.length===1){i[0].focus(),e.preventDefault();return}e.shiftKey&&e.target===i[0]?(i[i.length-1].focus(),e.preventDefault()):!e.shiftKey&&e.target===i[i.length-1]&&(i[0].focus(),e.preventDefault())}},this.getTabQueueBounds=()=>{const e=[];return Ti.reduceTabbableItems(e,this)},this.focusFirstElement=()=>{const e=this.getTabQueueBounds();e.length>0?e[0].focus():this.dialog instanceof HTMLElement&&this.dialog.focus()},this.shouldForceFocus=e=>this.isTrappingFocus&&!this.contains(e),this.shouldTrapFocus=()=>this.trapFocus&&!this.hidden,this.updateTrapFocus=e=>{const i=e===void 0?this.shouldTrapFocus():e;i&&!this.isTrappingFocus?(this.isTrappingFocus=!0,document.addEventListener("focusin",this.handleDocumentFocus),de.queueUpdate(()=>{this.shouldForceFocus(document.activeElement)&&this.focusFirstElement()})):!i&&this.isTrappingFocus&&(this.isTrappingFocus=!1,document.removeEventListener("focusin",this.handleDocumentFocus))}}dismiss(){this.$emit("dismiss"),this.$emit("cancel")}show(){this.hidden=!1}hide(){this.hidden=!0,this.$emit("close")}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.handleDocumentKeydown),this.notifier=le.getNotifier(this),this.notifier.subscribe(this,"hidden"),this.updateTrapFocus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeydown),this.updateTrapFocus(!1),this.notifier.unsubscribe(this,"hidden")}handleChange(e,i){switch(i){case"hidden":this.updateTrapFocus();break}}static reduceTabbableItems(e,i){return i.getAttribute("tabindex")==="-1"?e:Ph(i)||Ti.isFocusableFastElement(i)&&Ti.hasTabbableShadow(i)?(e.push(i),e):i.childElementCount?e.concat(Array.from(i.children).reduce(Ti.reduceTabbableItems,[])):e}static isFocusableFastElement(e){var i,s;return!!(!((s=(i=e.$fastController)===null||i===void 0?void 0:i.definition.shadowOptions)===null||s===void 0)&&s.delegatesFocus)}static hasTabbableShadow(e){var i,s;return Array.from((s=(i=e.shadowRoot)===null||i===void 0?void 0:i.querySelectorAll("*"))!==null&&s!==void 0?s:[]).some(n=>Ph(n))}}u([f({mode:"boolean"})],Ti.prototype,"modal",void 0);u([f({mode:"boolean"})],Ti.prototype,"hidden",void 0);u([f({attribute:"trap-focus",mode:"boolean"})],Ti.prototype,"trapFocus",void 0);u([f({attribute:"aria-describedby"})],Ti.prototype,"ariaDescribedby",void 0);u([f({attribute:"aria-labelledby"})],Ti.prototype,"ariaLabelledby",void 0);u([f({attribute:"aria-label"})],Ti.prototype,"ariaLabel",void 0);const f0=(t,e)=>P`
    <template role="${i=>i.role}" aria-orientation="${i=>i.orientation}"></template>
`,p0={separator:"separator",presentation:"presentation"};class ul extends pe{constructor(){super(...arguments),this.role=p0.separator,this.orientation=vt.horizontal}}u([f],ul.prototype,"role",void 0);u([f],ul.prototype,"orientation",void 0);const Jc={next:"next",previous:"previous"},g0=(t,e)=>P`
    <template
        role="button"
        aria-disabled="${i=>i.disabled?!0:void 0}"
        tabindex="${i=>i.hiddenFromAT?-1:0}"
        class="${i=>i.direction} ${i=>i.disabled?"disabled":""}"
        @keyup="${(i,s)=>i.keyupHandler(s.event)}"
    >
        ${pt(i=>i.direction===Jc.next,P`
                <span part="next" class="next">
                    <slot name="next">
                        ${e.next||""}
                    </slot>
                </span>
            `)}
        ${pt(i=>i.direction===Jc.previous,P`
                <span part="previous" class="previous">
                    <slot name="previous">
                        ${e.previous||""}
                    </slot>
                </span>
            `)}
    </template>
`;class hl extends pe{constructor(){super(...arguments),this.hiddenFromAT=!0,this.direction=Jc.next}keyupHandler(e){if(!this.hiddenFromAT){const i=e.key;(i==="Enter"||i==="Space")&&this.$emit("click",e),i==="Escape"&&this.blur()}}}u([f({mode:"boolean"})],hl.prototype,"disabled",void 0);u([f({attribute:"aria-hidden",converter:Rr})],hl.prototype,"hiddenFromAT",void 0);u([f],hl.prototype,"direction",void 0);const m0=(t,e)=>P`
    <template
        aria-checked="${i=>i.ariaChecked}"
        aria-disabled="${i=>i.ariaDisabled}"
        aria-posinset="${i=>i.ariaPosInSet}"
        aria-selected="${i=>i.ariaSelected}"
        aria-setsize="${i=>i.ariaSetSize}"
        class="${i=>[i.checked&&"checked",i.selected&&"selected",i.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${Xt(t,e)}
        <span class="content" part="content">
            <slot ${st("content")}></slot>
        </span>
        ${Zt(t,e)}
    </template>
`;class Er extends ri{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return(e=this.options)===null||e===void 0?void 0:e.filter(i=>i.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,i){var s,n;this.ariaActiveDescendant=(n=(s=this.options[i])===null||s===void 0?void 0:s.id)!==null&&n!==void 0?n:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((i,s)=>{i.checked=ta(s,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((i,s)=>{i.checked=ta(s,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((i,s)=>{i.checked=ta(s,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.checkedOptions.length===1&&(this.rangeStartIndex+=1),this.options.forEach((i,s)=>{i.checked=ta(s,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var i;if(!this.multiple)return super.clickHandler(e);const s=(i=e.target)===null||i===void 0?void 0:i.closest("[role=option]");if(!(!s||s.disabled))return this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(s),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.uncheckAllOptions(),this.activeIndex===-1&&(this.activeIndex=this.firstSelectedOptionIndex!==-1?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;const{key:i,shiftKey:s}=e;switch(this.shouldSkipFocus=!1,i){case ds:{this.checkFirstOption(s);return}case Fi:{this.checkNextOption(s);return}case Di:{this.checkPreviousOption(s);return}case us:{this.checkLastOption(s);return}case ol:return this.focusAndScrollOptionIntoView(),!0;case To:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case Nn:if(e.preventDefault(),this.typeAheadExpired){this.toggleSelectedForAllCheckedOptions();return}default:return i.length===1&&this.handleTypeAhead(`${i}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,i){var s;this.ariaMultiSelectable=i?"true":null,(s=this.options)===null||s===void 0||s.forEach(n=>{n.checked=i?!1:void 0}),this.setSelectedOptions()}setSelectedOptions(){if(!this.multiple){super.setSelectedOptions();return}this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(e=>e.selected),this.focusAndScrollOptionIntoView())}sizeChanged(e,i){var s;const n=Math.max(0,parseInt((s=i==null?void 0:i.toFixed())!==null&&s!==void 0?s:"",10));n!==i&&de.queueUpdate(()=>{this.size=n})}toggleSelectedForAllCheckedOptions(){const e=this.checkedOptions.filter(s=>!s.disabled),i=!e.every(s=>s.selected);e.forEach(s=>s.selected=i),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,i){if(!this.multiple){super.typeaheadBufferChanged(e,i);return}if(this.$fastController.isConnected){const s=this.getTypeaheadMatches(),n=this.options.indexOf(s[0]);n>-1&&(this.activeIndex=n,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}uncheckAllOptions(e=!1){this.options.forEach(i=>i.checked=this.multiple?!1:void 0),e||(this.rangeStartIndex=-1)}}u([_],Er.prototype,"activeIndex",void 0);u([f({mode:"boolean"})],Er.prototype,"multiple",void 0);u([f({converter:K})],Er.prototype,"size",void 0);const v0=(t,e)=>P`
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
            ${st({filter:Er.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
        ></slot>
    </template>
`,Wt={menuitem:"menuitem",menuitemcheckbox:"menuitemcheckbox",menuitemradio:"menuitemradio"},b0={[Wt.menuitem]:"menuitem",[Wt.menuitemcheckbox]:"menuitemcheckbox",[Wt.menuitemradio]:"menuitemradio"};class mi extends pe{constructor(){super(...arguments),this.role=Wt.menuitem,this.hasSubmenu=!1,this.currentDirection=Qe.ltr,this.focusSubmenuOnLoad=!1,this.handleMenuItemKeyDown=e=>{if(e.defaultPrevented)return!1;switch(e.key){case Ts:case Nn:return this.invoke(),!1;case nn:return this.expandAndFocus(),!1;case sn:if(this.expanded)return this.expanded=!1,this.focus(),!1}return!0},this.handleMenuItemClick=e=>(e.defaultPrevented||this.disabled||this.invoke(),!1),this.submenuLoaded=()=>{this.focusSubmenuOnLoad&&(this.focusSubmenuOnLoad=!1,this.hasSubmenu&&(this.submenu.focus(),this.setAttribute("tabindex","-1")))},this.handleMouseOver=e=>(this.disabled||!this.hasSubmenu||this.expanded||(this.expanded=!0),!1),this.handleMouseOut=e=>(!this.expanded||this.contains(document.activeElement)||(this.expanded=!1),!1),this.expandAndFocus=()=>{this.hasSubmenu&&(this.focusSubmenuOnLoad=!0,this.expanded=!0)},this.invoke=()=>{if(!this.disabled)switch(this.role){case Wt.menuitemcheckbox:this.checked=!this.checked;break;case Wt.menuitem:this.updateSubmenu(),this.hasSubmenu?this.expandAndFocus():this.$emit("change");break;case Wt.menuitemradio:this.checked||(this.checked=!0);break}},this.updateSubmenu=()=>{this.submenu=this.domChildren().find(e=>e.getAttribute("role")==="menu"),this.hasSubmenu=this.submenu!==void 0}}expandedChanged(e){if(this.$fastController.isConnected){if(this.submenu===void 0)return;this.expanded===!1?this.submenu.collapseExpandedItem():this.currentDirection=An(this),this.$emit("expanded-change",this,{bubbles:!1})}}checkedChanged(e,i){this.$fastController.isConnected&&this.$emit("change")}connectedCallback(){super.connectedCallback(),de.queueUpdate(()=>{this.updateSubmenu()}),this.startColumnCount||(this.startColumnCount=1),this.observer=new MutationObserver(this.updateSubmenu)}disconnectedCallback(){super.disconnectedCallback(),this.submenu=void 0,this.observer!==void 0&&(this.observer.disconnect(),this.observer=void 0)}domChildren(){return Array.from(this.children).filter(e=>!e.hasAttribute("hidden"))}}u([f({mode:"boolean"})],mi.prototype,"disabled",void 0);u([f({mode:"boolean"})],mi.prototype,"expanded",void 0);u([_],mi.prototype,"startColumnCount",void 0);u([f],mi.prototype,"role",void 0);u([f({mode:"boolean"})],mi.prototype,"checked",void 0);u([_],mi.prototype,"submenuRegion",void 0);u([_],mi.prototype,"hasSubmenu",void 0);u([_],mi.prototype,"currentDirection",void 0);u([_],mi.prototype,"submenu",void 0);ot(mi,oi);const y0=(t,e)=>P`
    <template
        role="${i=>i.role}"
        aria-haspopup="${i=>i.hasSubmenu?"menu":void 0}"
        aria-checked="${i=>i.role!==Wt.menuitem?i.checked:void 0}"
        aria-disabled="${i=>i.disabled}"
        aria-expanded="${i=>i.expanded}"
        @keydown="${(i,s)=>i.handleMenuItemKeyDown(s.event)}"
        @click="${(i,s)=>i.handleMenuItemClick(s.event)}"
        @mouseover="${(i,s)=>i.handleMouseOver(s.event)}"
        @mouseout="${(i,s)=>i.handleMouseOut(s.event)}"
        class="${i=>i.disabled?"disabled":""} ${i=>i.expanded?"expanded":""} ${i=>`indent-${i.startColumnCount}`}"
    >
            ${pt(i=>i.role===Wt.menuitemcheckbox,P`
                    <div part="input-container" class="input-container">
                        <span part="checkbox" class="checkbox">
                            <slot name="checkbox-indicator">
                                ${e.checkboxIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
            ${pt(i=>i.role===Wt.menuitemradio,P`
                    <div part="input-container" class="input-container">
                        <span part="radio" class="radio">
                            <slot name="radio-indicator">
                                ${e.radioIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
        </div>
        ${Xt(t,e)}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${Zt(t,e)}
        ${pt(i=>i.hasSubmenu,P`
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
        ${pt(i=>i.expanded,P`
                <${t.tagFor(ae)}
                    :anchorElement="${i=>i}"
                    vertical-positioning-mode="dynamic"
                    vertical-default-position="bottom"
                    vertical-inset="true"
                    horizontal-positioning-mode="dynamic"
                    horizontal-default-position="end"
                    class="submenu-region"
                    dir="${i=>i.currentDirection}"
                    @loaded="${i=>i.submenuLoaded()}"
                    ${Pe("submenuRegion")}
                    part="submenu-region"
                >
                    <slot name="submenu"></slot>
                </${t.tagFor(ae)}>
            `)}
    </template>
`,x0=(t,e)=>P`
    <template
        slot="${i=>i.slot?i.slot:i.isNestedMenu()?"submenu":void 0}"
        role="menu"
        @keydown="${(i,s)=>i.handleMenuKeyDown(s.event)}"
        @focusout="${(i,s)=>i.handleFocusOut(s.event)}"
    >
        <slot ${st("items")}></slot>
    </template>
`;let fl=class Dp extends pe{constructor(){super(...arguments),this.expandedItem=null,this.focusIndex=-1,this.isNestedMenu=()=>this.parentElement!==null&&bo(this.parentElement)&&this.parentElement.getAttribute("role")==="menuitem",this.handleFocusOut=e=>{if(!this.contains(e.relatedTarget)&&this.menuItems!==void 0){this.collapseExpandedItem();const i=this.menuItems.findIndex(this.isFocusableElement);this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.menuItems[i].setAttribute("tabindex","0"),this.focusIndex=i}},this.handleItemFocus=e=>{const i=e.target;this.menuItems!==void 0&&i!==this.menuItems[this.focusIndex]&&(this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=this.menuItems.indexOf(i),i.setAttribute("tabindex","0"))},this.handleExpandedChanged=e=>{if(e.defaultPrevented||e.target===null||this.menuItems===void 0||this.menuItems.indexOf(e.target)<0)return;e.preventDefault();const i=e.target;if(this.expandedItem!==null&&i===this.expandedItem&&i.expanded===!1){this.expandedItem=null;return}i.expanded&&(this.expandedItem!==null&&this.expandedItem!==i&&(this.expandedItem.expanded=!1),this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.expandedItem=i,this.focusIndex=this.menuItems.indexOf(i),i.setAttribute("tabindex","0"))},this.removeItemListeners=()=>{this.menuItems!==void 0&&this.menuItems.forEach(e=>{e.removeEventListener("expanded-change",this.handleExpandedChanged),e.removeEventListener("focus",this.handleItemFocus)})},this.setItems=()=>{const e=this.domChildren();this.removeItemListeners(),this.menuItems=e;const i=this.menuItems.filter(this.isMenuItemElement);i.length&&(this.focusIndex=0);function s(o){const r=o.getAttribute("role"),a=o.querySelector("[slot=start]");return r!==Wt.menuitem&&a===null||r===Wt.menuitem&&a!==null?1:r!==Wt.menuitem&&a!==null?2:0}const n=i.reduce((o,r)=>{const a=s(r);return o>a?o:a},0);i.forEach((o,r)=>{o.setAttribute("tabindex",r===0?"0":"-1"),o.addEventListener("expanded-change",this.handleExpandedChanged),o.addEventListener("focus",this.handleItemFocus),o instanceof mi&&(o.startColumnCount=n)})},this.changeHandler=e=>{if(this.menuItems===void 0)return;const i=e.target,s=this.menuItems.indexOf(i);if(s!==-1&&i.role==="menuitemradio"&&i.checked===!0){for(let o=s-1;o>=0;--o){const r=this.menuItems[o],a=r.getAttribute("role");if(a===Wt.menuitemradio&&(r.checked=!1),a==="separator")break}const n=this.menuItems.length-1;for(let o=s+1;o<=n;++o){const r=this.menuItems[o],a=r.getAttribute("role");if(a===Wt.menuitemradio&&(r.checked=!1),a==="separator")break}}},this.isMenuItemElement=e=>bo(e)&&Dp.focusableElementRoles.hasOwnProperty(e.getAttribute("role")),this.isFocusableElement=e=>this.isMenuItemElement(e)}itemsChanged(e,i){this.$fastController.isConnected&&this.menuItems!==void 0&&this.setItems()}connectedCallback(){super.connectedCallback(),de.queueUpdate(()=>{this.setItems()}),this.addEventListener("change",this.changeHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeItemListeners(),this.menuItems=void 0,this.removeEventListener("change",this.changeHandler)}focus(){this.setFocus(0,1)}collapseExpandedItem(){this.expandedItem!==null&&(this.expandedItem.expanded=!1,this.expandedItem=null)}handleMenuKeyDown(e){if(!(e.defaultPrevented||this.menuItems===void 0))switch(e.key){case Fi:this.setFocus(this.focusIndex+1,1);return;case Di:this.setFocus(this.focusIndex-1,-1);return;case us:this.setFocus(this.menuItems.length-1,-1);return;case ds:this.setFocus(0,1);return;default:return!0}}domChildren(){return Array.from(this.children).filter(e=>!e.hasAttribute("hidden"))}setFocus(e,i){if(this.menuItems!==void 0)for(;e>=0&&e<this.menuItems.length;){const s=this.menuItems[e];if(this.isFocusableElement(s)){this.focusIndex>-1&&this.menuItems.length>=this.focusIndex-1&&this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=e,s.setAttribute("tabindex","0"),s.focus();break}e+=i}}};fl.focusableElementRoles=b0;u([_],fl.prototype,"items",void 0);const w0=(t,e)=>P`
    <template class="${i=>i.readOnly?"readonly":""}">
        <label
            part="label"
            for="control"
            class="${i=>i.defaultSlottedNodes&&i.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${st("defaultSlottedNodes")}></slot>
        </label>
        <div class="root" part="root">
            ${Xt(t,e)}
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
                ${Pe("control")}
            />
            ${pt(i=>!i.hideStep&&!i.readOnly&&!i.disabled,P`
                    <div class="controls" part="controls">
                        <div class="step-up" part="step-up" @click="${i=>i.stepUp()}">
                            <slot name="step-up-glyph">
                                ${e.stepUpGlyph||""}
                            </slot>
                        </div>
                        <div
                            class="step-down"
                            part="step-down"
                            @click="${i=>i.stepDown()}"
                        >
                            <slot name="step-down-glyph">
                                ${e.stepDownGlyph||""}
                            </slot>
                        </div>
                    </div>
                `)}
            ${Zt(t,e)}
        </div>
    </template>
`;class $0 extends pe{}class k0 extends Fs($0){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const _0={email:"email",password:"password",tel:"tel",text:"text",url:"url"};let ai=class extends k0{constructor(){super(...arguments),this.type=_0.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&de.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};u([f({attribute:"readonly",mode:"boolean"})],ai.prototype,"readOnly",void 0);u([f({mode:"boolean"})],ai.prototype,"autofocus",void 0);u([f],ai.prototype,"placeholder",void 0);u([f],ai.prototype,"type",void 0);u([f],ai.prototype,"list",void 0);u([f({converter:K})],ai.prototype,"maxlength",void 0);u([f({converter:K})],ai.prototype,"minlength",void 0);u([f],ai.prototype,"pattern",void 0);u([f({converter:K})],ai.prototype,"size",void 0);u([f({mode:"boolean"})],ai.prototype,"spellcheck",void 0);u([_],ai.prototype,"defaultSlottedNodes",void 0);class pl{}ot(pl,Je);ot(ai,oi,pl);class S0 extends pe{}class C0 extends Fs(S0){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let Qt=class extends C0{constructor(){super(...arguments),this.hideStep=!1,this.step=1,this.isUserInput=!1}maxChanged(e,i){var s;this.max=Math.max(i,(s=this.min)!==null&&s!==void 0?s:i);const n=Math.min(this.min,this.max);this.min!==void 0&&this.min!==n&&(this.min=n),this.value=this.getValidValue(this.value)}minChanged(e,i){var s;this.min=Math.min(i,(s=this.max)!==null&&s!==void 0?s:i);const n=Math.max(this.min,this.max);this.max!==void 0&&this.max!==n&&(this.max=n),this.value=this.getValidValue(this.value)}get valueAsNumber(){return parseFloat(super.value)}set valueAsNumber(e){this.value=e.toString()}valueChanged(e,i){this.value=this.getValidValue(i),i===this.value&&(this.control&&!this.isUserInput&&(this.control.value=this.value),super.valueChanged(e,this.value),e!==void 0&&!this.isUserInput&&(this.$emit("input"),this.$emit("change")),this.isUserInput=!1)}validate(){super.validate(this.control)}getValidValue(e){var i,s;let n=parseFloat(parseFloat(e).toPrecision(12));return isNaN(n)?n="":(n=Math.min(n,(i=this.max)!==null&&i!==void 0?i:n),n=Math.max(n,(s=this.min)!==null&&s!==void 0?s:n).toString()),n}stepUp(){const e=parseFloat(this.value),i=isNaN(e)?this.min>0?this.min:this.max<0?this.max:this.min?0:this.step:e+this.step;this.value=i.toString()}stepDown(){const e=parseFloat(this.value),i=isNaN(e)?this.min>0?this.min:this.max<0?this.max:this.min?0:0-this.step:e-this.step;this.value=i.toString()}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","number"),this.validate(),this.control.value=this.value,this.autofocus&&de.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.control.value=this.control.value.replace(/[^0-9\-+e.]/g,""),this.isUserInput=!0,this.value=this.control.value}handleChange(){this.$emit("change")}handleKeyDown(e){switch(e.key){case Di:return this.stepUp(),!1;case Fi:return this.stepDown(),!1}return!0}handleBlur(){this.control.value=this.value}};u([f({attribute:"readonly",mode:"boolean"})],Qt.prototype,"readOnly",void 0);u([f({mode:"boolean"})],Qt.prototype,"autofocus",void 0);u([f({attribute:"hide-step",mode:"boolean"})],Qt.prototype,"hideStep",void 0);u([f],Qt.prototype,"placeholder",void 0);u([f],Qt.prototype,"list",void 0);u([f({converter:K})],Qt.prototype,"maxlength",void 0);u([f({converter:K})],Qt.prototype,"minlength",void 0);u([f({converter:K})],Qt.prototype,"size",void 0);u([f({converter:K})],Qt.prototype,"step",void 0);u([f({converter:K})],Qt.prototype,"max",void 0);u([f({converter:K})],Qt.prototype,"min",void 0);u([_],Qt.prototype,"defaultSlottedNodes",void 0);ot(Qt,oi,pl);const Vh=44,I0=(t,e)=>P`
    <template
        role="progressbar"
        aria-valuenow="${i=>i.value}"
        aria-valuemin="${i=>i.min}"
        aria-valuemax="${i=>i.max}"
        class="${i=>i.paused?"paused":""}"
    >
        ${pt(i=>typeof i.value=="number",P`
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
                        style="stroke-dasharray: ${i=>Vh*i.percentComplete/100}px ${Vh}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `,P`
                <slot name="indeterminate" slot="indeterminate">
                    ${e.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`;class zn extends pe{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const e=typeof this.min=="number"?this.min:0,i=typeof this.max=="number"?this.max:100,s=typeof this.value=="number"?this.value:0,n=i-e;this.percentComplete=n===0?0:Math.fround((s-e)/n*100)}}u([f({converter:K})],zn.prototype,"value",void 0);u([f({converter:K})],zn.prototype,"min",void 0);u([f({converter:K})],zn.prototype,"max",void 0);u([f({mode:"boolean"})],zn.prototype,"paused",void 0);u([_],zn.prototype,"percentComplete",void 0);const T0=(t,e)=>P`
    <template
        role="progressbar"
        aria-valuenow="${i=>i.value}"
        aria-valuemin="${i=>i.min}"
        aria-valuemax="${i=>i.max}"
        class="${i=>i.paused?"paused":""}"
    >
        ${pt(i=>typeof i.value=="number",P`
                <div class="progress" part="progress" slot="determinate">
                    <div
                        class="determinate"
                        part="determinate"
                        style="width: ${i=>i.percentComplete}%"
                    ></div>
                </div>
            `,P`
                <div class="progress" part="progress" slot="indeterminate">
                    <slot class="indeterminate" name="indeterminate">
                        ${e.indeterminateIndicator1||""}
                        ${e.indeterminateIndicator2||""}
                    </slot>
                </div>
            `)}
    </template>
`,F0=(t,e)=>P`
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
            class="positioning-region ${i=>i.orientation===vt.horizontal?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${st({property:"slottedRadioButtons",filter:Ss("[role=radio]")})}
            ></slot>
        </div>
    </template>
`;class un extends pe{constructor(){super(...arguments),this.orientation=vt.horizontal,this.radioChangeHandler=e=>{const i=e.target;i.checked&&(this.slottedRadioButtons.forEach(s=>{s!==i&&(s.checked=!1,this.isInsideFoundationToolbar||s.setAttribute("tabindex","-1"))}),this.selectedRadio=i,this.value=i.value,i.setAttribute("tabindex","0"),this.focusedRadio=i),e.stopPropagation()},this.moveToRadioByIndex=(e,i)=>{const s=e[i];this.isInsideToolbar||(s.setAttribute("tabindex","0"),s.readOnly?this.slottedRadioButtons.forEach(n=>{n!==s&&n.setAttribute("tabindex","-1")}):(s.checked=!0,this.selectedRadio=s)),this.focusedRadio=s,s.focus()},this.moveRightOffGroup=()=>{var e;(e=this.nextElementSibling)===null||e===void 0||e.focus()},this.moveLeftOffGroup=()=>{var e;(e=this.previousElementSibling)===null||e===void 0||e.focus()},this.focusOutHandler=e=>{const i=this.slottedRadioButtons,s=e.target,n=s!==null?i.indexOf(s):0,o=this.focusedRadio?i.indexOf(this.focusedRadio):-1;return(o===0&&n===o||o===i.length-1&&o===n)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),i.forEach(r=>{r!==this.selectedRadio&&r.setAttribute("tabindex","-1")}))):(this.focusedRadio=i[0],this.focusedRadio.setAttribute("tabindex","0"),i.forEach(r=>{r!==this.focusedRadio&&r.setAttribute("tabindex","-1")}))),!0},this.clickHandler=e=>{const i=e.target;if(i){const s=this.slottedRadioButtons;i.checked||s.indexOf(i)===0?(i.setAttribute("tabindex","0"),this.selectedRadio=i):(i.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=i}e.preventDefault()},this.shouldMoveOffGroupToTheRight=(e,i,s)=>e===i.length&&this.isInsideToolbar&&s===nn,this.shouldMoveOffGroupToTheLeft=(e,i)=>(this.focusedRadio?e.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&i===sn,this.checkFocusedRadio=()=>{this.focusedRadio!==null&&!this.focusedRadio.readOnly&&!this.focusedRadio.checked&&(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=e=>{const i=this.slottedRadioButtons;let s=0;if(s=this.focusedRadio?i.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(s,i,e.key)){this.moveRightOffGroup();return}else s===i.length&&(s=0);for(;s<i.length&&i.length>1;)if(i[s].disabled){if(this.focusedRadio&&s===i.indexOf(this.focusedRadio))break;if(s+1>=i.length){if(this.isInsideToolbar)break;s=0}else s+=1}else{this.moveToRadioByIndex(i,s);break}},this.moveLeft=e=>{const i=this.slottedRadioButtons;let s=0;if(s=this.focusedRadio?i.indexOf(this.focusedRadio)-1:0,s=s<0?i.length-1:s,this.shouldMoveOffGroupToTheLeft(i,e.key)){this.moveLeftOffGroup();return}for(;s>=0&&i.length>1;)if(i[s].disabled){if(this.focusedRadio&&s===i.indexOf(this.focusedRadio))break;s-1<0?s=i.length-1:s-=1}else{this.moveToRadioByIndex(i,s);break}},this.keydownHandler=e=>{const i=e.key;if(i in so&&this.isInsideFoundationToolbar)return!0;switch(i){case Ts:{this.checkFocusedRadio();break}case nn:case Fi:{this.direction===Qe.ltr?this.moveRight(e):this.moveLeft(e);break}case sn:case Di:{this.direction===Qe.ltr?this.moveLeft(e):this.moveRight(e);break}default:return!0}}}readOnlyChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(e=>{this.readOnly?e.readOnly=!0:e.readOnly=!1})}disabledChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(e=>{this.disabled?e.disabled=!0:e.disabled=!1})}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{e.setAttribute("name",this.name)})}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{e.value===this.value&&(e.checked=!0,this.selectedRadio=e)}),this.$emit("change")}slottedRadioButtonsChanged(e,i){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var e;return(e=this.parentToolbar)!==null&&e!==void 0?e:!1}get isInsideFoundationToolbar(){var e;return!!(!((e=this.parentToolbar)===null||e===void 0)&&e.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=An(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach(e=>{e.removeEventListener("change",this.radioChangeHandler)})}setupRadioButtons(){const e=this.slottedRadioButtons.filter(n=>n.hasAttribute("checked")),i=e?e.length:0;if(i>1){const n=e[i-1];n.checked=!0}let s=!1;if(this.slottedRadioButtons.forEach(n=>{this.name!==void 0&&n.setAttribute("name",this.name),this.disabled&&(n.disabled=!0),this.readOnly&&(n.readOnly=!0),this.value&&this.value===n.value?(this.selectedRadio=n,this.focusedRadio=n,n.checked=!0,n.setAttribute("tabindex","0"),s=!0):(this.isInsideFoundationToolbar||n.setAttribute("tabindex","-1"),n.checked=!1),n.addEventListener("change",this.radioChangeHandler)}),this.value===void 0&&this.slottedRadioButtons.length>0){const n=this.slottedRadioButtons.filter(r=>r.hasAttribute("checked")),o=n!==null?n.length:0;if(o>0&&!s){const r=n[o-1];r.checked=!0,this.focusedRadio=r,r.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}u([f({attribute:"readonly",mode:"boolean"})],un.prototype,"readOnly",void 0);u([f({attribute:"disabled",mode:"boolean"})],un.prototype,"disabled",void 0);u([f],un.prototype,"name",void 0);u([f],un.prototype,"value",void 0);u([f],un.prototype,"orientation",void 0);u([_],un.prototype,"childItems",void 0);u([_],un.prototype,"slottedRadioButtons",void 0);const D0=(t,e)=>P`
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
                ${e.checkedIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${i=>i.defaultSlottedNodes&&i.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${st("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class R0 extends pe{}class O0 extends Hd(R0){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class gl extends O0{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{switch(e.key){case Nn:!this.checked&&!this.readOnly&&(this.checked=!0);return}return!0},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var e;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=(e=this.defaultChecked)!==null&&e!==void 0?e:!1,this.dirtyChecked=!1))}connectedCallback(){var e,i;super.connectedCallback(),this.validate(),((e=this.parentElement)===null||e===void 0?void 0:e.getAttribute("role"))!=="radiogroup"&&this.getAttribute("tabindex")===null&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=(i=this.defaultChecked)!==null&&i!==void 0?i:!1,this.dirtyChecked=!1))}isInsideRadioGroup(){return this.closest("[role=radiogroup]")!==null}clickHandler(e){!this.disabled&&!this.readOnly&&!this.checked&&(this.checked=!0)}}u([f({attribute:"readonly",mode:"boolean"})],gl.prototype,"readOnly",void 0);u([_],gl.prototype,"name",void 0);u([_],gl.prototype,"defaultSlottedNodes",void 0);let Os=class extends pe{constructor(){super(...arguments),this.framesPerSecond=60,this.updatingItems=!1,this.speed=600,this.easing="ease-in-out",this.flippersHiddenFromAT=!1,this.scrolling=!1,this.resizeDetector=null}get frameTime(){return 1e3/this.framesPerSecond}scrollingChanged(e,i){if(this.scrollContainer){const s=this.scrolling==!0?"scrollstart":"scrollend";this.$emit(s,this.scrollContainer.scrollLeft)}}get isRtl(){return this.scrollItems.length>1&&this.scrollItems[0].offsetLeft>this.scrollItems[1].offsetLeft}connectedCallback(){super.connectedCallback(),this.initializeResizeDetector()}disconnectedCallback(){this.disconnectResizeDetector(),super.disconnectedCallback()}scrollItemsChanged(e,i){i&&!this.updatingItems&&de.queueUpdate(()=>this.setStops())}disconnectResizeDetector(){this.resizeDetector&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.resized.bind(this)),this.resizeDetector.observe(this)}updateScrollStops(){this.updatingItems=!0;const e=this.scrollItems.reduce((i,s)=>s instanceof HTMLSlotElement?i.concat(s.assignedElements()):(i.push(s),i),[]);this.scrollItems=e,this.updatingItems=!1}setStops(){this.updateScrollStops();const{scrollContainer:e}=this,{scrollLeft:i}=e,{width:s,left:n}=e.getBoundingClientRect();this.width=s;let o=0,r=this.scrollItems.map((a,l)=>{const{left:c,width:d}=a.getBoundingClientRect(),h=Math.round(c+i-n),v=Math.round(h+d);return this.isRtl?-v:(o=v,l===0?0:h)}).concat(o);r=this.fixScrollMisalign(r),r.sort((a,l)=>Math.abs(a)-Math.abs(l)),this.scrollStops=r,this.setFlippers()}validateStops(e=!0){const i=()=>!!this.scrollStops.find(s=>s>0);return!i()&&e&&this.setStops(),i()}fixScrollMisalign(e){if(this.isRtl&&e.some(i=>i>0)){e.sort((s,n)=>n-s);const i=e[0];e=e.map(s=>s-i)}return e}setFlippers(){var e,i;const s=this.scrollContainer.scrollLeft;if((e=this.previousFlipperContainer)===null||e===void 0||e.classList.toggle("disabled",s===0),this.scrollStops){const n=Math.abs(this.scrollStops[this.scrollStops.length-1]);(i=this.nextFlipperContainer)===null||i===void 0||i.classList.toggle("disabled",this.validateStops(!1)&&Math.abs(s)+this.width>=n)}}scrollInView(e,i=0,s){var n;if(typeof e!="number"&&e&&(e=this.scrollItems.findIndex(o=>o===e||o.contains(e))),e!==void 0){s=s??i;const{scrollContainer:o,scrollStops:r,scrollItems:a}=this,{scrollLeft:l}=this.scrollContainer,{width:c}=o.getBoundingClientRect(),d=r[e],{width:h}=a[e].getBoundingClientRect(),v=d+h,w=l+i>d;if(w||l+c-s<v){const $=(n=[...r].sort((T,W)=>w?W-T:T-W).find(T=>w?T+i<d:T+c-(s??0)>v))!==null&&n!==void 0?n:0;this.scrollToPosition($)}}}keyupHandler(e){switch(e.key){case"ArrowLeft":this.scrollToPrevious();break;case"ArrowRight":this.scrollToNext();break}}scrollToPrevious(){this.validateStops();const e=this.scrollContainer.scrollLeft,i=this.scrollStops.findIndex((o,r)=>o>=e&&(this.isRtl||r===this.scrollStops.length-1||this.scrollStops[r+1]>e)),s=Math.abs(this.scrollStops[i+1]);let n=this.scrollStops.findIndex(o=>Math.abs(o)+this.width>s);(n>=i||n===-1)&&(n=i>0?i-1:0),this.scrollToPosition(this.scrollStops[n],e)}scrollToNext(){this.validateStops();const e=this.scrollContainer.scrollLeft,i=this.scrollStops.findIndex(o=>Math.abs(o)>=Math.abs(e)),s=this.scrollStops.findIndex(o=>Math.abs(e)+this.width<=Math.abs(o));let n=i;s>i+2?n=s-2:i<this.scrollStops.length-2&&(n=i+1),this.scrollToPosition(this.scrollStops[n],e)}scrollToPosition(e,i=this.scrollContainer.scrollLeft){var s;if(this.scrolling)return;this.scrolling=!0;const n=(s=this.duration)!==null&&s!==void 0?s:`${Math.abs(e-i)/this.speed}s`;this.content.style.setProperty("transition-duration",n);const o=parseFloat(getComputedStyle(this.content).getPropertyValue("transition-duration")),r=c=>{c&&c.target!==c.currentTarget||(this.content.style.setProperty("transition-duration","0s"),this.content.style.removeProperty("transform"),this.scrollContainer.style.setProperty("scroll-behavior","auto"),this.scrollContainer.scrollLeft=e,this.setFlippers(),this.content.removeEventListener("transitionend",r),this.scrolling=!1)};if(o===0){r();return}this.content.addEventListener("transitionend",r);const a=this.scrollContainer.scrollWidth-this.scrollContainer.clientWidth;let l=this.scrollContainer.scrollLeft-Math.min(e,a);this.isRtl&&(l=this.scrollContainer.scrollLeft+Math.min(Math.abs(e),a)),this.content.style.setProperty("transition-property","transform"),this.content.style.setProperty("transition-timing-function",this.easing),this.content.style.setProperty("transform",`translateX(${l}px)`)}resized(){this.resizeTimeout&&(this.resizeTimeout=clearTimeout(this.resizeTimeout)),this.resizeTimeout=setTimeout(()=>{this.width=this.scrollContainer.offsetWidth,this.setFlippers()},this.frameTime)}scrolled(){this.scrollTimeout&&(this.scrollTimeout=clearTimeout(this.scrollTimeout)),this.scrollTimeout=setTimeout(()=>{this.setFlippers()},this.frameTime)}};u([f({converter:K})],Os.prototype,"speed",void 0);u([f],Os.prototype,"duration",void 0);u([f],Os.prototype,"easing",void 0);u([f({attribute:"flippers-hidden-from-at",converter:Rr})],Os.prototype,"flippersHiddenFromAT",void 0);u([_],Os.prototype,"scrolling",void 0);u([_],Os.prototype,"scrollItems",void 0);u([f({attribute:"view"})],Os.prototype,"view",void 0);const E0=(t,e)=>{var i,s;return P`
    <template
        class="horizontal-scroll"
        @keyup="${(n,o)=>n.keyupHandler(o.event)}"
    >
        ${Xt(t,e)}
        <div class="scroll-area" part="scroll-area">
            <div
                class="scroll-view"
                part="scroll-view"
                @scroll="${n=>n.scrolled()}"
                ${Pe("scrollContainer")}
            >
                <div class="content-container" part="content-container" ${Pe("content")}>
                    <slot
                        ${st({property:"scrollItems",filter:Ss()})}
                    ></slot>
                </div>
            </div>
            ${pt(n=>n.view!=="mobile",P`
                    <div
                        class="scroll scroll-prev"
                        part="scroll-prev"
                        ${Pe("previousFlipperContainer")}
                    >
                        <div class="scroll-action" part="scroll-action-previous">
                            <slot name="previous-flipper">
                                ${e.previousFlipper instanceof Function?e.previousFlipper(t,e):(i=e.previousFlipper)!==null&&i!==void 0?i:""}
                            </slot>
                        </div>
                    </div>
                    <div
                        class="scroll scroll-next"
                        part="scroll-next"
                        ${Pe("nextFlipperContainer")}
                    >
                        <div class="scroll-action" part="scroll-action-next">
                            <slot name="next-flipper">
                                ${e.nextFlipper instanceof Function?e.nextFlipper(t,e):(s=e.nextFlipper)!==null&&s!==void 0?s:""}
                            </slot>
                        </div>
                    </div>
                `)}
        </div>
        ${Zt(t,e)}
    </template>
`};function Rp(t,e,i){return t.nodeType!==Node.TEXT_NODE?!0:typeof t.nodeValue=="string"&&!!t.nodeValue.trim().length}class L0 extends pe{}class A0 extends Fs(L0){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let vi=class extends A0{readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.validate(),this.autofocus&&de.queueUpdate(()=>{this.focus()})}validate(){super.validate(this.control)}handleTextInput(){this.value=this.control.value}handleClearInput(){this.value="",this.control.focus(),this.handleChange()}handleChange(){this.$emit("change")}};u([f({attribute:"readonly",mode:"boolean"})],vi.prototype,"readOnly",void 0);u([f({mode:"boolean"})],vi.prototype,"autofocus",void 0);u([f],vi.prototype,"placeholder",void 0);u([f],vi.prototype,"list",void 0);u([f({converter:K})],vi.prototype,"maxlength",void 0);u([f({converter:K})],vi.prototype,"minlength",void 0);u([f],vi.prototype,"pattern",void 0);u([f({converter:K})],vi.prototype,"size",void 0);u([f({mode:"boolean"})],vi.prototype,"spellcheck",void 0);u([_],vi.prototype,"defaultSlottedNodes",void 0);class Op{}ot(Op,Je);ot(vi,oi,Op);class P0 extends Er{}class M0 extends Fs(P0){constructor(){super(...arguments),this.proxy=document.createElement("select")}}let Es=class extends M0{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=pr("listbox-"),this.maxHeight=0}openChanged(e,i){if(this.collapsible){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,de.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||typeof this.size=="number")}get value(){return le.track(this,"value"),this._value}set value(e){var i,s,n,o,r,a,l;const c=`${this._value}`;if(!((i=this._options)===null||i===void 0)&&i.length){const d=this._options.findIndex(w=>w.value===e),h=(n=(s=this._options[this.selectedIndex])===null||s===void 0?void 0:s.value)!==null&&n!==void 0?n:null,v=(r=(o=this._options[d])===null||o===void 0?void 0:o.value)!==null&&r!==void 0?r:null;(d===-1||h!==v)&&(e="",this.selectedIndex=d),e=(l=(a=this.firstSelectedOption)===null||a===void 0?void 0:a.value)!==null&&l!==void 0?l:e}c!==e&&(this._value=e,super.valueChanged(c,e),le.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var i,s;this.$fastController.isConnected&&(this.value=(s=(i=this.firstSelectedOption)===null||i===void 0?void 0:i.value)!==null&&s!==void 0?s:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,i){super.selectedIndexChanged(e,i),this.updateValue()}positionChanged(e,i){this.positionAttribute=i,this.setPositioning()}setPositioning(){const e=this.getBoundingClientRect(),s=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>s?ao.above:ao.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===ao.above?~~e.top:~~s}get displayValue(){var e,i;return le.track(this,"displayValue"),(i=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.text)!==null&&i!==void 0?i:""}disabledChanged(e,i){super.disabledChanged&&super.disabledChanged(e,i),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),this.selectedIndex===-1&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){const i=e.target.closest("option,[role=option]");if(i&&i.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(e){var i;if(super.focusoutHandler(e),!this.open)return!0;const s=e.relatedTarget;if(this.isSameNode(s)){this.focus();return}!((i=this.options)===null||i===void 0)&&i.includes(s)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,i){super.handleChange(e,i),i==="value"&&this.updateValue()}slottedOptionsChanged(e,i){this.options.forEach(s=>{le.getNotifier(s).unsubscribe(this,"value")}),super.slottedOptionsChanged(e,i),this.options.forEach(s=>{le.getNotifier(s).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var i;return e.offsetX>=0&&e.offsetX<=((i=this.listbox)===null||i===void 0?void 0:i.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,i){super.multipleChanged(e,i),this.proxy&&(this.proxy.multiple=i)}selectedOptionsChanged(e,i){var s;super.selectedOptionsChanged(e,i),(s=this.options)===null||s===void 0||s.forEach((n,o)=>{var r;const a=(r=this.proxy)===null||r===void 0?void 0:r.options.item(o);a&&(a.selected=n.selected)})}setDefaultSelectedOption(){var e;const i=(e=this.options)!==null&&e!==void 0?e:Array.from(this.children).filter(ri.slottedOptionFilter),s=i==null?void 0:i.findIndex(n=>n.hasAttribute("selected")||n.selected||n.value===this.value);if(s!==-1){this.selectedIndex=s;return}this.selectedIndex=0}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(e=>{const i=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);i&&this.proxy.options.add(i)}))}keydownHandler(e){super.keydownHandler(e);const i=e.key||e.key.charCodeAt(0);switch(i){case Nn:{e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break}case ds:case us:{e.preventDefault();break}case Ts:{e.preventDefault(),this.open=!this.open;break}case To:{this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break}case ol:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(i===Fi||i===Di)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,i){super.sizeChanged(e,i),this.proxy&&(this.proxy.size=i)}updateDisplayValue(){this.collapsible&&le.notify(this,"displayValue")}};u([f({attribute:"open",mode:"boolean"})],Es.prototype,"open",void 0);u([Qv],Es.prototype,"collapsible",null);u([_],Es.prototype,"control",void 0);u([f({attribute:"position"})],Es.prototype,"positionAttribute",void 0);u([_],Es.prototype,"position",void 0);u([_],Es.prototype,"maxHeight",void 0);class zd{}u([_],zd.prototype,"ariaControls",void 0);ot(zd,dn);ot(Es,oi,zd);const V0=(t,e)=>P`
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
        ${pt(i=>i.collapsible,P`
                <div
                    class="control"
                    part="control"
                    ?disabled="${i=>i.disabled}"
                    ${Pe("control")}
                >
                    ${Xt(t,e)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${i=>i.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${e.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${Zt(t,e)}
                </div>
            `)}
        <div
            class="listbox"
            id="${i=>i.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${i=>i.disabled}"
            ?hidden="${i=>i.collapsible?!i.open:!1}"
            ${Pe("listbox")}
        >
            <slot
                ${st({filter:ri.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,H0=(t,e)=>P`
    <template
        class="${i=>i.shape==="circle"?"circle":"rect"}"
        pattern="${i=>i.pattern}"
        ?shimmer="${i=>i.shimmer}"
    >
        ${pt(i=>i.shimmer===!0,P`
                <span class="shimmer"></span>
            `)}
        <object type="image/svg+xml" data="${i=>i.pattern}" role="presentation">
            <img class="pattern" src="${i=>i.pattern}" />
        </object>
        <slot></slot>
    </template>
`;class Lr extends pe{constructor(){super(...arguments),this.shape="rect"}}u([f],Lr.prototype,"fill",void 0);u([f],Lr.prototype,"shape",void 0);u([f],Lr.prototype,"pattern",void 0);u([f({mode:"boolean"})],Lr.prototype,"shimmer",void 0);const N0=(t,e)=>P`
    <template
        aria-disabled="${i=>i.disabled}"
        class="${i=>i.sliderOrientation||vt.horizontal}
            ${i=>i.disabled?"disabled":""}"
    >
        <div ${Pe("root")} part="root" class="root" style="${i=>i.positionStyle}">
            <div class="container">
                ${pt(i=>!i.hideMark,P`
                        <div class="mark"></div>
                    `)}
                <div class="label">
                    <slot></slot>
                </div>
            </div>
        </div>
    </template>
`;function Kc(t,e,i,s){let n=rl(0,1,(t-e)/(i-e));return s===Qe.rtl&&(n=1-n),n}const na={min:0,max:0,direction:Qe.ltr,orientation:vt.horizontal,disabled:!1};class Ls extends pe{constructor(){super(...arguments),this.hideMark=!1,this.sliderDirection=Qe.ltr,this.getSliderConfiguration=()=>{if(!this.isSliderConfig(this.parentNode))this.sliderDirection=na.direction||Qe.ltr,this.sliderOrientation=na.orientation,this.sliderMaxPosition=na.max,this.sliderMinPosition=na.min;else{const e=this.parentNode,{min:i,max:s,direction:n,orientation:o,disabled:r}=e;r!==void 0&&(this.disabled=r),this.sliderDirection=n||Qe.ltr,this.sliderOrientation=o||vt.horizontal,this.sliderMaxPosition=s,this.sliderMinPosition=i}},this.positionAsStyle=()=>{const e=this.sliderDirection?this.sliderDirection:Qe.ltr,i=Kc(Number(this.position),Number(this.sliderMinPosition),Number(this.sliderMaxPosition));let s=Math.round((1-i)*100),n=Math.round(i*100);return Number.isNaN(n)&&Number.isNaN(s)&&(s=50,n=50),this.sliderOrientation===vt.horizontal?e===Qe.rtl?`right: ${n}%; left: ${s}%;`:`left: ${n}%; right: ${s}%;`:`top: ${n}%; bottom: ${s}%;`}}positionChanged(){this.positionStyle=this.positionAsStyle()}sliderOrientationChanged(){}connectedCallback(){super.connectedCallback(),this.getSliderConfiguration(),this.positionStyle=this.positionAsStyle(),this.notifier=le.getNotifier(this.parentNode),this.notifier.subscribe(this,"orientation"),this.notifier.subscribe(this,"direction"),this.notifier.subscribe(this,"max"),this.notifier.subscribe(this,"min")}disconnectedCallback(){super.disconnectedCallback(),this.notifier.unsubscribe(this,"orientation"),this.notifier.unsubscribe(this,"direction"),this.notifier.unsubscribe(this,"max"),this.notifier.unsubscribe(this,"min")}handleChange(e,i){switch(i){case"direction":this.sliderDirection=e.direction;break;case"orientation":this.sliderOrientation=e.orientation;break;case"max":this.sliderMaxPosition=e.max;break;case"min":this.sliderMinPosition=e.min;break}this.positionStyle=this.positionAsStyle()}isSliderConfig(e){return e.max!==void 0&&e.min!==void 0}}u([_],Ls.prototype,"positionStyle",void 0);u([f],Ls.prototype,"position",void 0);u([f({attribute:"hide-mark",mode:"boolean"})],Ls.prototype,"hideMark",void 0);u([f({attribute:"disabled",mode:"boolean"})],Ls.prototype,"disabled",void 0);u([_],Ls.prototype,"sliderOrientation",void 0);u([_],Ls.prototype,"sliderMinPosition",void 0);u([_],Ls.prototype,"sliderMaxPosition",void 0);u([_],Ls.prototype,"sliderDirection",void 0);const z0=(t,e)=>P`
    <template
        role="slider"
        class="${i=>i.readOnly?"readonly":""}
        ${i=>i.orientation||vt.horizontal}"
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
            <div ${Pe("track")} part="track-container" class="track">
                <slot name="track"></slot>
                <div part="track-start" class="track-start" style="${i=>i.position}">
                    <slot name="track-start"></slot>
                </div>
            </div>
            <slot></slot>
            <div
                ${Pe("thumb")}
                part="thumb-container"
                class="thumb-container"
                style="${i=>i.position}"
            >
                <slot name="thumb">${e.thumb||""}</slot>
            </div>
        </div>
    </template>
`;class B0 extends pe{}class j0 extends Fs(B0){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const Y0={singleValue:"single-value"};class Ht extends j0{constructor(){super(...arguments),this.direction=Qe.ltr,this.isDragging=!1,this.trackWidth=0,this.trackMinWidth=0,this.trackHeight=0,this.trackLeft=0,this.trackMinHeight=0,this.valueTextFormatter=()=>null,this.min=0,this.max=10,this.step=1,this.orientation=vt.horizontal,this.mode=Y0.singleValue,this.keypressHandler=e=>{if(!this.readOnly){if(e.key===ds)e.preventDefault(),this.value=`${this.min}`;else if(e.key===us)e.preventDefault(),this.value=`${this.max}`;else if(!e.shiftKey)switch(e.key){case nn:case Di:e.preventDefault(),this.increment();break;case sn:case Fi:e.preventDefault(),this.decrement();break}}},this.setupTrackConstraints=()=>{const e=this.track.getBoundingClientRect();this.trackWidth=this.track.clientWidth,this.trackMinWidth=this.track.clientLeft,this.trackHeight=e.bottom,this.trackMinHeight=e.top,this.trackLeft=this.getBoundingClientRect().left,this.trackWidth===0&&(this.trackWidth=1)},this.setupListeners=(e=!1)=>{const i=`${e?"remove":"add"}EventListener`;this[i]("keydown",this.keypressHandler),this[i]("mousedown",this.handleMouseDown),this.thumb[i]("mousedown",this.handleThumbMouseDown,{passive:!0}),this.thumb[i]("touchstart",this.handleThumbMouseDown,{passive:!0}),e&&(this.handleMouseDown(null),this.handleThumbMouseDown(null))},this.initialValue="",this.handleThumbMouseDown=e=>{if(e){if(this.readOnly||this.disabled||e.defaultPrevented)return;e.target.focus()}const i=`${e!==null?"add":"remove"}EventListener`;window[i]("mouseup",this.handleWindowMouseUp),window[i]("mousemove",this.handleMouseMove,{passive:!0}),window[i]("touchmove",this.handleMouseMove,{passive:!0}),window[i]("touchend",this.handleWindowMouseUp),this.isDragging=e!==null},this.handleMouseMove=e=>{if(this.readOnly||this.disabled||e.defaultPrevented)return;const i=window.TouchEvent&&e instanceof TouchEvent?e.touches[0]:e,s=this.orientation===vt.horizontal?i.pageX-document.documentElement.scrollLeft-this.trackLeft:i.pageY-document.documentElement.scrollTop;this.value=`${this.calculateNewValue(s)}`},this.calculateNewValue=e=>{const i=Kc(e,this.orientation===vt.horizontal?this.trackMinWidth:this.trackMinHeight,this.orientation===vt.horizontal?this.trackWidth:this.trackHeight,this.direction),s=(this.max-this.min)*i+this.min;return this.convertToConstrainedValue(s)},this.handleWindowMouseUp=e=>{this.stopDragging()},this.stopDragging=()=>{this.isDragging=!1,this.handleMouseDown(null),this.handleThumbMouseDown(null)},this.handleMouseDown=e=>{const i=`${e!==null?"add":"remove"}EventListener`;if((e===null||!this.disabled&&!this.readOnly)&&(window[i]("mouseup",this.handleWindowMouseUp),window.document[i]("mouseleave",this.handleWindowMouseUp),window[i]("mousemove",this.handleMouseMove),e)){e.preventDefault(),this.setupTrackConstraints(),e.target.focus();const s=this.orientation===vt.horizontal?e.pageX-document.documentElement.scrollLeft-this.trackLeft:e.pageY-document.documentElement.scrollTop;this.value=`${this.calculateNewValue(s)}`}},this.convertToConstrainedValue=e=>{isNaN(e)&&(e=this.min);let i=e-this.min;const s=Math.round(i/this.step),n=i-s*(this.stepMultiplier*this.step)/this.stepMultiplier;return i=n>=Number(this.step)/2?i-n+Number(this.step):i-n,i+this.min}}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}get valueAsNumber(){return parseFloat(super.value)}set valueAsNumber(e){this.value=e.toString()}valueChanged(e,i){super.valueChanged(e,i),this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction),this.$emit("change")}minChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.min=`${this.min}`),this.validate()}maxChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.max=`${this.max}`),this.validate()}stepChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.step=`${this.step}`),this.updateStepMultiplier(),this.validate()}orientationChanged(){this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","range"),this.direction=An(this),this.updateStepMultiplier(),this.setupTrackConstraints(),this.setupListeners(),this.setupDefaultValue(),this.setThumbPositionForOrientation(this.direction)}disconnectedCallback(){this.setupListeners(!0)}increment(){const e=this.direction!==Qe.rtl&&this.orientation!==vt.vertical?Number(this.value)+Number(this.step):Number(this.value)-Number(this.step),i=this.convertToConstrainedValue(e),s=i<Number(this.max)?`${i}`:`${this.max}`;this.value=s}decrement(){const e=this.direction!==Qe.rtl&&this.orientation!==vt.vertical?Number(this.value)-Number(this.step):Number(this.value)+Number(this.step),i=this.convertToConstrainedValue(e),s=i>Number(this.min)?`${i}`:`${this.min}`;this.value=s}setThumbPositionForOrientation(e){const s=(1-Kc(Number(this.value),Number(this.min),Number(this.max),e))*100;this.orientation===vt.horizontal?this.position=this.isDragging?`right: ${s}%; transition: none;`:`right: ${s}%; transition: all 0.2s ease;`:this.position=this.isDragging?`bottom: ${s}%; transition: none;`:`bottom: ${s}%; transition: all 0.2s ease;`}updateStepMultiplier(){const e=this.step+"",i=this.step%1?e.length-e.indexOf(".")-1:0;this.stepMultiplier=Math.pow(10,i)}get midpoint(){return`${this.convertToConstrainedValue((this.max+this.min)/2)}`}setupDefaultValue(){if(typeof this.value=="string")if(this.value.length===0)this.initialValue=this.midpoint;else{const e=parseFloat(this.value);!Number.isNaN(e)&&(e<this.min||e>this.max)&&(this.value=this.midpoint)}}}u([f({attribute:"readonly",mode:"boolean"})],Ht.prototype,"readOnly",void 0);u([_],Ht.prototype,"direction",void 0);u([_],Ht.prototype,"isDragging",void 0);u([_],Ht.prototype,"position",void 0);u([_],Ht.prototype,"trackWidth",void 0);u([_],Ht.prototype,"trackMinWidth",void 0);u([_],Ht.prototype,"trackHeight",void 0);u([_],Ht.prototype,"trackLeft",void 0);u([_],Ht.prototype,"trackMinHeight",void 0);u([_],Ht.prototype,"valueTextFormatter",void 0);u([f({converter:K})],Ht.prototype,"min",void 0);u([f({converter:K})],Ht.prototype,"max",void 0);u([f({converter:K})],Ht.prototype,"step",void 0);u([f],Ht.prototype,"orientation",void 0);u([f],Ht.prototype,"mode",void 0);const U0=(t,e)=>P`
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
            <slot ${st("defaultSlottedNodes")}></slot>
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
`;class W0 extends pe{}class G0 extends Hd(W0){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Bd extends G0{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{if(!this.readOnly)switch(e.key){case Ts:case Nn:this.checked=!this.checked;break}},this.clickHandler=e=>{!this.disabled&&!this.readOnly&&(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly),this.readOnly?this.classList.add("readonly"):this.classList.remove("readonly")}checkedChanged(e,i){super.checkedChanged(e,i),this.checked?this.classList.add("checked"):this.classList.remove("checked")}}u([f({attribute:"readonly",mode:"boolean"})],Bd.prototype,"readOnly",void 0);u([_],Bd.prototype,"defaultSlottedNodes",void 0);const q0=(t,e)=>P`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`;class Z0 extends pe{}const X0=(t,e)=>P`
    <template slot="tab" role="tab" aria-disabled="${i=>i.disabled}">
        <slot></slot>
    </template>
`;class Ep extends pe{}u([f({mode:"boolean"})],Ep.prototype,"disabled",void 0);const Q0=(t,e)=>P`
    <template class="${i=>i.orientation}">
        ${Xt(t,e)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${st("tabs")}></slot>

            ${pt(i=>i.showActiveIndicator,P`
                    <div
                        ${Pe("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${Zt(t,e)}
        <div class="tabpanel" part="tabpanel">
            <slot name="tabpanel" ${st("tabpanels")}></slot>
        </div>
    </template>
`,Hh={vertical:"vertical",horizontal:"horizontal"};class As extends pe{constructor(){super(...arguments),this.orientation=Hh.horizontal,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=e=>e.getAttribute("aria-disabled")==="true",this.isHiddenElement=e=>e.hasAttribute("hidden"),this.isFocusableElement=e=>!this.isDisabledElement(e)&&!this.isHiddenElement(e),this.setTabs=()=>{const e="gridColumn",i="gridRow",s=this.isHorizontal()?e:i;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach((n,o)=>{if(n.slot==="tab"){const r=this.activeTabIndex===o&&this.isFocusableElement(n);this.activeindicator&&this.isFocusableElement(n)&&(this.showActiveIndicator=!0);const a=this.tabIds[o],l=this.tabpanelIds[o];n.setAttribute("id",a),n.setAttribute("aria-selected",r?"true":"false"),n.setAttribute("aria-controls",l),n.addEventListener("click",this.handleTabClick),n.addEventListener("keydown",this.handleTabKeyDown),n.setAttribute("tabindex",r?"0":"-1"),r&&(this.activetab=n,this.activeid=a)}n.style[e]="",n.style[i]="",n.style[s]=`${o+1}`,this.isHorizontal()?n.classList.remove("vertical"):n.classList.add("vertical")})},this.setTabPanels=()=>{this.tabpanels.forEach((e,i)=>{const s=this.tabIds[i],n=this.tabpanelIds[i];e.setAttribute("id",n),e.setAttribute("aria-labelledby",s),this.activeTabIndex!==i?e.setAttribute("hidden",""):e.removeAttribute("hidden")})},this.handleTabClick=e=>{const i=e.currentTarget;i.nodeType===1&&this.isFocusableElement(i)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(i),this.setComponent())},this.handleTabKeyDown=e=>{if(this.isHorizontal())switch(e.key){case sn:e.preventDefault(),this.adjustBackward(e);break;case nn:e.preventDefault(),this.adjustForward(e);break}else switch(e.key){case Di:e.preventDefault(),this.adjustBackward(e);break;case Fi:e.preventDefault(),this.adjustForward(e);break}switch(e.key){case ds:e.preventDefault(),this.adjust(-this.activeTabIndex);break;case us:e.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1);break}},this.adjustForward=e=>{const i=this.tabs;let s=0;for(s=this.activetab?i.indexOf(this.activetab)+1:1,s===i.length&&(s=0);s<i.length&&i.length>1;)if(this.isFocusableElement(i[s])){this.moveToTabByIndex(i,s);break}else{if(this.activetab&&s===i.indexOf(this.activetab))break;s+1>=i.length?s=0:s+=1}},this.adjustBackward=e=>{const i=this.tabs;let s=0;for(s=this.activetab?i.indexOf(this.activetab)-1:0,s=s<0?i.length-1:s;s>=0&&i.length>1;)if(this.isFocusableElement(i[s])){this.moveToTabByIndex(i,s);break}else s-1<0?s=i.length-1:s-=1},this.moveToTabByIndex=(e,i)=>{const s=e[i];this.activetab=s,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=i,s.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(e,i){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex(s=>s.id===e),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return this.activeid!==void 0?this.tabIds.indexOf(this.activeid)===-1?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map(e=>{var i;return(i=e.getAttribute("id"))!==null&&i!==void 0?i:`tab-${pr()}`})}getTabPanelIds(){return this.tabpanels.map(e=>{var i;return(i=e.getAttribute("id"))!==null&&i!==void 0?i:`panel-${pr()}`})}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===Hh.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const e=this.isHorizontal()?"gridColumn":"gridRow",i=this.isHorizontal()?"translateX":"translateY",s=this.isHorizontal()?"offsetLeft":"offsetTop",n=this.activeIndicatorRef[s];this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`;const o=this.activeIndicatorRef[s];this.activeIndicatorRef.style[e]=`${this.prevActiveTabIndex+1}`;const r=o-n;this.activeIndicatorRef.style.transform=`${i}(${r}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",()=>{this.ticking=!1,this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${i}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")})}adjust(e){const i=this.tabs.filter(r=>this.isFocusableElement(r)),s=i.indexOf(this.activetab),n=rl(0,i.length-1,s+e),o=this.tabs.indexOf(i[n]);o>-1&&this.moveToTabByIndex(this.tabs,o)}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}u([f],As.prototype,"orientation",void 0);u([f],As.prototype,"activeid",void 0);u([_],As.prototype,"tabs",void 0);u([_],As.prototype,"tabpanels",void 0);u([f({mode:"boolean"})],As.prototype,"activeindicator",void 0);u([_],As.prototype,"activeIndicatorRef",void 0);u([_],As.prototype,"showActiveIndicator",void 0);ot(As,oi);class J0 extends pe{}class K0 extends Fs(J0){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}const Lp={none:"none",both:"both",horizontal:"horizontal",vertical:"vertical"};let Nt=class extends K0{constructor(){super(...arguments),this.resize=Lp.none,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};u([f({mode:"boolean"})],Nt.prototype,"readOnly",void 0);u([f],Nt.prototype,"resize",void 0);u([f({mode:"boolean"})],Nt.prototype,"autofocus",void 0);u([f({attribute:"form"})],Nt.prototype,"formId",void 0);u([f],Nt.prototype,"list",void 0);u([f({converter:K})],Nt.prototype,"maxlength",void 0);u([f({converter:K})],Nt.prototype,"minlength",void 0);u([f],Nt.prototype,"name",void 0);u([f],Nt.prototype,"placeholder",void 0);u([f({converter:K,mode:"fromView"})],Nt.prototype,"cols",void 0);u([f({converter:K,mode:"fromView"})],Nt.prototype,"rows",void 0);u([f({mode:"boolean"})],Nt.prototype,"spellcheck",void 0);u([_],Nt.prototype,"defaultSlottedNodes",void 0);ot(Nt,pl);const ex=(t,e)=>P`
    <template
        class="
            ${i=>i.readOnly?"readonly":""}
            ${i=>i.resize!==Lp.none?`resize-${i.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${i=>i.defaultSlottedNodes&&i.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${st("defaultSlottedNodes")}></slot>
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
            ${Pe("control")}
        ></textarea>
    </template>
`,tx=(t,e)=>P`
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
                ${st({property:"defaultSlottedNodes",filter:Rp})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${Xt(t,e)}
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
                ${Pe("control")}
            />
            ${Zt(t,e)}
        </div>
    </template>
`,ix=(t,e)=>P`
    <template
        aria-label="${i=>i.ariaLabel}"
        aria-labelledby="${i=>i.ariaLabelledby}"
        aria-orientation="${i=>i.orientation}"
        orientation="${i=>i.orientation}"
        role="toolbar"
        @click="${(i,s)=>i.clickHandler(s.event)}"
        @focusin="${(i,s)=>i.focusinHandler(s.event)}"
        @keydown="${(i,s)=>i.keydownHandler(s.event)}"
        ${nl({property:"childItems",attributeFilter:["disabled","hidden"],filter:Ss(),subtree:!0})}
    >
        <slot name="label"></slot>
        <div class="positioning-region" part="positioning-region">
            ${Xt(t,e)}
            <slot
                ${st({filter:Ss(),property:"slottedItems"})}
            ></slot>
            ${Zt(t,e)}
        </div>
    </template>
`,Nh=Object.freeze({[so.ArrowUp]:{[vt.vertical]:-1},[so.ArrowDown]:{[vt.vertical]:1},[so.ArrowLeft]:{[vt.horizontal]:{[Qe.ltr]:-1,[Qe.rtl]:1}},[so.ArrowRight]:{[vt.horizontal]:{[Qe.ltr]:1,[Qe.rtl]:-1}}});let hn=class ed extends pe{constructor(){super(...arguments),this._activeIndex=0,this.direction=Qe.ltr,this.orientation=vt.horizontal}get activeIndex(){return le.track(this,"activeIndex"),this._activeIndex}set activeIndex(e){this.$fastController.isConnected&&(this._activeIndex=rl(0,this.focusableElements.length-1,e),le.notify(this,"activeIndex"))}slottedItemsChanged(){this.$fastController.isConnected&&this.reduceFocusableElements()}clickHandler(e){var i;const s=(i=this.focusableElements)===null||i===void 0?void 0:i.indexOf(e.target);return s>-1&&this.activeIndex!==s&&this.setFocusedElement(s),!0}childItemsChanged(e,i){this.$fastController.isConnected&&this.reduceFocusableElements()}connectedCallback(){super.connectedCallback(),this.direction=An(this)}focusinHandler(e){const i=e.relatedTarget;!i||this.contains(i)||this.setFocusedElement()}getDirectionalIncrementer(e){var i,s,n,o,r;return(r=(n=(s=(i=Nh[e])===null||i===void 0?void 0:i[this.orientation])===null||s===void 0?void 0:s[this.direction])!==null&&n!==void 0?n:(o=Nh[e])===null||o===void 0?void 0:o[this.orientation])!==null&&r!==void 0?r:0}keydownHandler(e){const i=e.key;if(!(i in so)||e.defaultPrevented||e.shiftKey)return!0;const s=this.getDirectionalIncrementer(i);if(!s)return!e.target.closest("[role=radiogroup]");const n=this.activeIndex+s;return this.focusableElements[n]&&e.preventDefault(),this.setFocusedElement(n),!0}get allSlottedItems(){return[...this.start.assignedElements(),...this.slottedItems,...this.end.assignedElements()]}reduceFocusableElements(){var e;const i=(e=this.focusableElements)===null||e===void 0?void 0:e[this.activeIndex];this.focusableElements=this.allSlottedItems.reduce(ed.reduceFocusableItems,[]);const s=this.focusableElements.indexOf(i);this.activeIndex=Math.max(0,s),this.setFocusableElements()}setFocusedElement(e=this.activeIndex){var i;this.activeIndex=e,this.setFocusableElements(),(i=this.focusableElements[this.activeIndex])===null||i===void 0||i.focus()}static reduceFocusableItems(e,i){var s,n,o,r;const a=i.getAttribute("role")==="radio",l=(n=(s=i.$fastController)===null||s===void 0?void 0:s.definition.shadowOptions)===null||n===void 0?void 0:n.delegatesFocus,c=Array.from((r=(o=i.shadowRoot)===null||o===void 0?void 0:o.querySelectorAll("*"))!==null&&r!==void 0?r:[]).some(d=>Mh(d));return!i.hasAttribute("disabled")&&!i.hasAttribute("hidden")&&(Mh(i)||a||l||c)?(e.push(i),e):i.childElementCount?e.concat(Array.from(i.children).reduce(ed.reduceFocusableItems,[])):e}setFocusableElements(){this.$fastController.isConnected&&this.focusableElements.length>0&&this.focusableElements.forEach((e,i)=>{e.tabIndex=this.activeIndex===i?0:-1})}};u([_],hn.prototype,"direction",void 0);u([f],hn.prototype,"orientation",void 0);u([_],hn.prototype,"slottedItems",void 0);u([_],hn.prototype,"slottedLabel",void 0);u([_],hn.prototype,"childItems",void 0);class ml{}u([f({attribute:"aria-labelledby"})],ml.prototype,"ariaLabelledby",void 0);u([f({attribute:"aria-label"})],ml.prototype,"ariaLabel",void 0);ot(ml,Je);ot(hn,oi,ml);const sx=(t,e)=>P`
        ${pt(i=>i.tooltipVisible,P`
            <${t.tagFor(ae)}
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
                ${Pe("region")}
            >
                <div class="tooltip" part="tooltip" role="tooltip">
                    <slot></slot>
                </div>
            </${t.tagFor(ae)}>
        `)}
    `,Kt={top:"top",right:"right",bottom:"bottom",left:"left",start:"start",end:"end",topLeft:"top-left",topRight:"top-right",bottomLeft:"bottom-left",bottomRight:"bottom-right",topStart:"top-start",topEnd:"top-end",bottomStart:"bottom-start",bottomEnd:"bottom-end"};let wt=class extends pe{constructor(){super(...arguments),this.anchor="",this.delay=300,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.horizontalInset="false",this.verticalInset="false",this.horizontalScaling="content",this.verticalScaling="content",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition=void 0,this.tooltipVisible=!1,this.currentDirection=Qe.ltr,this.showDelayTimer=null,this.hideDelayTimer=null,this.isAnchorHoveredFocused=!1,this.isRegionHovered=!1,this.handlePositionChange=e=>{this.classList.toggle("top",this.region.verticalPosition==="start"),this.classList.toggle("bottom",this.region.verticalPosition==="end"),this.classList.toggle("inset-top",this.region.verticalPosition==="insetStart"),this.classList.toggle("inset-bottom",this.region.verticalPosition==="insetEnd"),this.classList.toggle("center-vertical",this.region.verticalPosition==="center"),this.classList.toggle("left",this.region.horizontalPosition==="start"),this.classList.toggle("right",this.region.horizontalPosition==="end"),this.classList.toggle("inset-left",this.region.horizontalPosition==="insetStart"),this.classList.toggle("inset-right",this.region.horizontalPosition==="insetEnd"),this.classList.toggle("center-horizontal",this.region.horizontalPosition==="center")},this.handleRegionMouseOver=e=>{this.isRegionHovered=!0},this.handleRegionMouseOut=e=>{this.isRegionHovered=!1,this.startHideDelayTimer()},this.handleAnchorMouseOver=e=>{if(this.tooltipVisible){this.isAnchorHoveredFocused=!0;return}this.startShowDelayTimer()},this.handleAnchorMouseOut=e=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.handleAnchorFocusIn=e=>{this.startShowDelayTimer()},this.handleAnchorFocusOut=e=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.startHideDelayTimer=()=>{this.clearHideDelayTimer(),this.tooltipVisible&&(this.hideDelayTimer=window.setTimeout(()=>{this.updateTooltipVisibility()},60))},this.clearHideDelayTimer=()=>{this.hideDelayTimer!==null&&(clearTimeout(this.hideDelayTimer),this.hideDelayTimer=null)},this.startShowDelayTimer=()=>{if(!this.isAnchorHoveredFocused){if(this.delay>1){this.showDelayTimer===null&&(this.showDelayTimer=window.setTimeout(()=>{this.startHover()},this.delay));return}this.startHover()}},this.startHover=()=>{this.isAnchorHoveredFocused=!0,this.updateTooltipVisibility()},this.clearShowDelayTimer=()=>{this.showDelayTimer!==null&&(clearTimeout(this.showDelayTimer),this.showDelayTimer=null)},this.getAnchor=()=>{const e=this.getRootNode();return e instanceof ShadowRoot?e.getElementById(this.anchor):document.getElementById(this.anchor)},this.handleDocumentKeydown=e=>{if(!e.defaultPrevented&&this.tooltipVisible)switch(e.key){case To:this.isAnchorHoveredFocused=!1,this.updateTooltipVisibility(),this.$emit("dismiss");break}},this.updateTooltipVisibility=()=>{if(this.visible===!1)this.hideTooltip();else if(this.visible===!0){this.showTooltip();return}else{if(this.isAnchorHoveredFocused||this.isRegionHovered){this.showTooltip();return}this.hideTooltip()}},this.showTooltip=()=>{this.tooltipVisible||(this.currentDirection=An(this),this.tooltipVisible=!0,document.addEventListener("keydown",this.handleDocumentKeydown),de.queueUpdate(this.setRegionProps))},this.hideTooltip=()=>{this.tooltipVisible&&(this.clearHideDelayTimer(),this.region!==null&&this.region!==void 0&&(this.region.removeEventListener("positionchange",this.handlePositionChange),this.region.viewportElement=null,this.region.anchorElement=null,this.region.removeEventListener("mouseover",this.handleRegionMouseOver),this.region.removeEventListener("mouseout",this.handleRegionMouseOut)),document.removeEventListener("keydown",this.handleDocumentKeydown),this.tooltipVisible=!1)},this.setRegionProps=()=>{this.tooltipVisible&&(this.region.viewportElement=this.viewportElement,this.region.anchorElement=this.anchorElement,this.region.addEventListener("positionchange",this.handlePositionChange),this.region.addEventListener("mouseover",this.handleRegionMouseOver,{passive:!0}),this.region.addEventListener("mouseout",this.handleRegionMouseOut,{passive:!0}))}}visibleChanged(){this.$fastController.isConnected&&(this.updateTooltipVisibility(),this.updateLayout())}anchorChanged(){this.$fastController.isConnected&&(this.anchorElement=this.getAnchor())}positionChanged(){this.$fastController.isConnected&&this.updateLayout()}anchorElementChanged(e){if(this.$fastController.isConnected){if(e!=null&&(e.removeEventListener("mouseover",this.handleAnchorMouseOver),e.removeEventListener("mouseout",this.handleAnchorMouseOut),e.removeEventListener("focusin",this.handleAnchorFocusIn),e.removeEventListener("focusout",this.handleAnchorFocusOut)),this.anchorElement!==null&&this.anchorElement!==void 0){this.anchorElement.addEventListener("mouseover",this.handleAnchorMouseOver,{passive:!0}),this.anchorElement.addEventListener("mouseout",this.handleAnchorMouseOut,{passive:!0}),this.anchorElement.addEventListener("focusin",this.handleAnchorFocusIn,{passive:!0}),this.anchorElement.addEventListener("focusout",this.handleAnchorFocusOut,{passive:!0});const i=this.anchorElement.id;this.anchorElement.parentElement!==null&&this.anchorElement.parentElement.querySelectorAll(":hover").forEach(s=>{s.id===i&&this.startShowDelayTimer()})}this.region!==null&&this.region!==void 0&&this.tooltipVisible&&(this.region.anchorElement=this.anchorElement),this.updateLayout()}}viewportElementChanged(){this.region!==null&&this.region!==void 0&&(this.region.viewportElement=this.viewportElement),this.updateLayout()}connectedCallback(){super.connectedCallback(),this.anchorElement=this.getAnchor(),this.updateTooltipVisibility()}disconnectedCallback(){this.hideTooltip(),this.clearShowDelayTimer(),this.clearHideDelayTimer(),super.disconnectedCallback()}updateLayout(){switch(this.verticalPositioningMode="locktodefault",this.horizontalPositioningMode="locktodefault",this.position){case Kt.top:case Kt.bottom:this.verticalDefaultPosition=this.position,this.horizontalDefaultPosition="center";break;case Kt.right:case Kt.left:case Kt.start:case Kt.end:this.verticalDefaultPosition="center",this.horizontalDefaultPosition=this.position;break;case Kt.topLeft:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="left";break;case Kt.topRight:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="right";break;case Kt.bottomLeft:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="left";break;case Kt.bottomRight:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="right";break;case Kt.topStart:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="start";break;case Kt.topEnd:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="end";break;case Kt.bottomStart:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="start";break;case Kt.bottomEnd:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="end";break;default:this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition="center";break}}};u([f({mode:"boolean"})],wt.prototype,"visible",void 0);u([f],wt.prototype,"anchor",void 0);u([f],wt.prototype,"delay",void 0);u([f],wt.prototype,"position",void 0);u([f({attribute:"auto-update-mode"})],wt.prototype,"autoUpdateMode",void 0);u([f({attribute:"horizontal-viewport-lock"})],wt.prototype,"horizontalViewportLock",void 0);u([f({attribute:"vertical-viewport-lock"})],wt.prototype,"verticalViewportLock",void 0);u([_],wt.prototype,"anchorElement",void 0);u([_],wt.prototype,"viewportElement",void 0);u([_],wt.prototype,"verticalPositioningMode",void 0);u([_],wt.prototype,"horizontalPositioningMode",void 0);u([_],wt.prototype,"horizontalInset",void 0);u([_],wt.prototype,"verticalInset",void 0);u([_],wt.prototype,"horizontalScaling",void 0);u([_],wt.prototype,"verticalScaling",void 0);u([_],wt.prototype,"verticalDefaultPosition",void 0);u([_],wt.prototype,"horizontalDefaultPosition",void 0);u([_],wt.prototype,"tooltipVisible",void 0);u([_],wt.prototype,"currentDirection",void 0);const nx=(t,e)=>P`
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
        ${nl({property:"childItems",filter:Ss()})}
    >
        <div class="positioning-region" part="positioning-region">
            <div class="content-region" part="content-region">
                ${pt(i=>i.childItems&&i.childItemLength()>0,P`
                        <div
                            aria-hidden="true"
                            class="expand-collapse-button"
                            part="expand-collapse-button"
                            @click="${(i,s)=>i.handleExpandCollapseButtonClick(s.event)}"
                            ${Pe("expandCollapseButton")}
                        >
                            <slot name="expand-collapse-glyph">
                                ${e.expandCollapseGlyph||""}
                            </slot>
                        </div>
                    `)}
                ${Xt(t,e)}
                <slot></slot>
                ${Zt(t,e)}
            </div>
        </div>
        ${pt(i=>i.childItems&&i.childItemLength()>0&&(i.expanded||i.renderCollapsedChildren),P`
                <div role="group" class="items" part="items">
                    <slot name="item" ${st("items")}></slot>
                </div>
            `)}
    </template>
`;function Gs(t){return bo(t)&&t.getAttribute("role")==="treeitem"}class kt extends pe{constructor(){super(...arguments),this.expanded=!1,this.focusable=!1,this.isNestedItem=()=>Gs(this.parentElement),this.handleExpandCollapseButtonClick=e=>{!this.disabled&&!e.defaultPrevented&&(this.expanded=!this.expanded)},this.handleFocus=e=>{this.setAttribute("tabindex","0")},this.handleBlur=e=>{this.setAttribute("tabindex","-1")}}expandedChanged(){this.$fastController.isConnected&&this.$emit("expanded-change",this)}selectedChanged(){this.$fastController.isConnected&&this.$emit("selected-change",this)}itemsChanged(e,i){this.$fastController.isConnected&&this.items.forEach(s=>{Gs(s)&&(s.nested=!0)})}static focusItem(e){e.focusable=!0,e.focus()}childItemLength(){const e=this.childItems.filter(i=>Gs(i));return e?e.length:0}}u([f({mode:"boolean"})],kt.prototype,"expanded",void 0);u([f({mode:"boolean"})],kt.prototype,"selected",void 0);u([f({mode:"boolean"})],kt.prototype,"disabled",void 0);u([_],kt.prototype,"focusable",void 0);u([_],kt.prototype,"childItems",void 0);u([_],kt.prototype,"items",void 0);u([_],kt.prototype,"nested",void 0);u([_],kt.prototype,"renderCollapsedChildren",void 0);ot(kt,oi);const ox=(t,e)=>P`
    <template
        role="tree"
        ${Pe("treeView")}
        @keydown="${(i,s)=>i.handleKeyDown(s.event)}"
        @focusin="${(i,s)=>i.handleFocus(s.event)}"
        @focusout="${(i,s)=>i.handleBlur(s.event)}"
        @click="${(i,s)=>i.handleClick(s.event)}"
        @selected-change="${(i,s)=>i.handleSelectedChange(s.event)}"
    >
        <slot ${st("slottedTreeItems")}></slot>
    </template>
`;class vl extends pe{constructor(){super(...arguments),this.currentFocused=null,this.handleFocus=e=>{if(!(this.slottedTreeItems.length<1)){if(e.target===this){this.currentFocused===null&&(this.currentFocused=this.getValidFocusableItem()),this.currentFocused!==null&&kt.focusItem(this.currentFocused);return}this.contains(e.target)&&(this.setAttribute("tabindex","-1"),this.currentFocused=e.target)}},this.handleBlur=e=>{e.target instanceof HTMLElement&&(e.relatedTarget===null||!this.contains(e.relatedTarget))&&this.setAttribute("tabindex","0")},this.handleKeyDown=e=>{if(e.defaultPrevented)return;if(this.slottedTreeItems.length<1)return!0;const i=this.getVisibleNodes();switch(e.key){case ds:i.length&&kt.focusItem(i[0]);return;case us:i.length&&kt.focusItem(i[i.length-1]);return;case sn:if(e.target&&this.isFocusableElement(e.target)){const s=e.target;s instanceof kt&&s.childItemLength()>0&&s.expanded?s.expanded=!1:s instanceof kt&&s.parentElement instanceof kt&&kt.focusItem(s.parentElement)}return!1;case nn:if(e.target&&this.isFocusableElement(e.target)){const s=e.target;s instanceof kt&&s.childItemLength()>0&&!s.expanded?s.expanded=!0:s instanceof kt&&s.childItemLength()>0&&this.focusNextNode(1,e.target)}return;case Fi:e.target&&this.isFocusableElement(e.target)&&this.focusNextNode(1,e.target);return;case Di:e.target&&this.isFocusableElement(e.target)&&this.focusNextNode(-1,e.target);return;case Ts:this.handleClick(e);return}return!0},this.handleSelectedChange=e=>{if(e.defaultPrevented)return;if(!(e.target instanceof Element)||!Gs(e.target))return!0;const i=e.target;i.selected?(this.currentSelected&&this.currentSelected!==i&&(this.currentSelected.selected=!1),this.currentSelected=i):!i.selected&&this.currentSelected===i&&(this.currentSelected=null)},this.setItems=()=>{const e=this.treeView.querySelector("[aria-selected='true']");this.currentSelected=e,(this.currentFocused===null||!this.contains(this.currentFocused))&&(this.currentFocused=this.getValidFocusableItem()),this.nested=this.checkForNestedItems(),this.getVisibleNodes().forEach(s=>{Gs(s)&&(s.nested=this.nested)})},this.isFocusableElement=e=>Gs(e),this.isSelectedElement=e=>e.selected}slottedTreeItemsChanged(){this.$fastController.isConnected&&this.setItems()}connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),de.queueUpdate(()=>{this.setItems()})}handleClick(e){if(e.defaultPrevented)return;if(!(e.target instanceof Element)||!Gs(e.target))return!0;const i=e.target;i.disabled||(i.selected=!i.selected)}focusNextNode(e,i){const s=this.getVisibleNodes();if(!s)return;const n=s[s.indexOf(i)+e];bo(n)&&kt.focusItem(n)}getValidFocusableItem(){const e=this.getVisibleNodes();let i=e.findIndex(this.isSelectedElement);return i===-1&&(i=e.findIndex(this.isFocusableElement)),i!==-1?e[i]:null}checkForNestedItems(){return this.slottedTreeItems.some(e=>Gs(e)&&e.querySelector("[role='treeitem']"))}getVisibleNodes(){return iy(this,"[role='treeitem']")||[]}}u([f({attribute:"render-collapsed-nodes"})],vl.prototype,"renderCollapsedNodes",void 0);u([_],vl.prototype,"currentSelected",void 0);u([_],vl.prototype,"slottedTreeItems",void 0);class rx{constructor(e){this.listenerCache=new WeakMap,this.query=e}bind(e){const{query:i}=this,s=this.constructListener(e);s.bind(i)(),i.addListener(s),this.listenerCache.set(e,s)}unbind(e){const i=this.listenerCache.get(e);i&&(this.query.removeListener(i),this.listenerCache.delete(e))}}class Ar extends rx{constructor(e,i){super(e),this.styles=i}static with(e){return i=>new Ar(e,i)}constructListener(e){let i=!1;const s=this.styles;return function(){const{matches:o}=this;o&&!i?(e.$fastController.addStyles(s),i=o):!o&&i&&(e.$fastController.removeStyles(s),i=o)}}unbind(e){super.unbind(e),e.$fastController.removeStyles(this.styles)}}const De=Ar.with(window.matchMedia("(forced-colors)"));Ar.with(window.matchMedia("(prefers-color-scheme: dark)"));Ar.with(window.matchMedia("(prefers-color-scheme: light)"));class ax{constructor(e,i,s){this.propertyName=e,this.value=i,this.styles=s}bind(e){le.getNotifier(e).subscribe(this,this.propertyName),this.handleChange(e,this.propertyName)}unbind(e){le.getNotifier(e).unsubscribe(this,this.propertyName),e.$fastController.removeStyles(this.styles)}handleChange(e,i){e[i]===this.value?e.$fastController.addStyles(this.styles):e.$fastController.removeStyles(this.styles)}}const Oi="not-allowed",lx=":host([hidden]){display:none}";function Re(t){return`${lx}:host{display:${t}}`}const me=ny()?"focus-visible":"focus";function _n(t,e,i){return isNaN(t)||t<=e?e:t>=i?i:t}function Fc(t,e,i){return isNaN(t)||t<=e?0:t>=i?1:t/(i-e)}function yn(t,e,i){return isNaN(t)?e:e+t*(i-e)}function cx(t){const e=Math.round(_n(t,0,255)).toString(16);return e.length===1?"0"+e:e}function oa(t,e,i){return isNaN(t)||t<=0?e:t>=1?i:e+t*(i-e)}function Gt(t,e){const i=Math.pow(10,e);return Math.round(t*i)/i}class vr{constructor(e,i,s){this.h=e,this.s=i,this.l=s}static fromObject(e){return e&&!isNaN(e.h)&&!isNaN(e.s)&&!isNaN(e.l)?new vr(e.h,e.s,e.l):null}equalValue(e){return this.h===e.h&&this.s===e.s&&this.l===e.l}roundToPrecision(e){return new vr(Gt(this.h,e),Gt(this.s,e),Gt(this.l,e))}toObject(){return{h:this.h,s:this.s,l:this.l}}}class Ft{constructor(e,i,s){this.l=e,this.a=i,this.b=s}static fromObject(e){return e&&!isNaN(e.l)&&!isNaN(e.a)&&!isNaN(e.b)?new Ft(e.l,e.a,e.b):null}equalValue(e){return this.l===e.l&&this.a===e.a&&this.b===e.b}roundToPrecision(e){return new Ft(Gt(this.l,e),Gt(this.a,e),Gt(this.b,e))}toObject(){return{l:this.l,a:this.a,b:this.b}}}Ft.epsilon=216/24389;Ft.kappa=24389/27;class xt{constructor(e,i,s,n){this.r=e,this.g=i,this.b=s,this.a=typeof n=="number"&&!isNaN(n)?n:1}static fromObject(e){return e&&!isNaN(e.r)&&!isNaN(e.g)&&!isNaN(e.b)?new xt(e.r,e.g,e.b,e.a):null}equalValue(e){return this.r===e.r&&this.g===e.g&&this.b===e.b&&this.a===e.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(yn(this.r,0,255))},${Math.round(yn(this.g,0,255))},${Math.round(yn(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(yn(this.r,0,255))},${Math.round(yn(this.g,0,255))},${Math.round(yn(this.b,0,255))},${_n(this.a,0,1)})`}roundToPrecision(e){return new xt(Gt(this.r,e),Gt(this.g,e),Gt(this.b,e),Gt(this.a,e))}clamp(){return new xt(_n(this.r,0,1),_n(this.g,0,1),_n(this.b,0,1),_n(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(e){return cx(yn(e,0,255))}}class hi{constructor(e,i,s){this.x=e,this.y=i,this.z=s}static fromObject(e){return e&&!isNaN(e.x)&&!isNaN(e.y)&&!isNaN(e.z)?new hi(e.x,e.y,e.z):null}equalValue(e){return this.x===e.x&&this.y===e.y&&this.z===e.z}roundToPrecision(e){return new hi(Gt(this.x,e),Gt(this.y,e),Gt(this.z,e))}toObject(){return{x:this.x,y:this.y,z:this.z}}}hi.whitePoint=new hi(.95047,1,1.08883);function dx(t){return t.r*.2126+t.g*.7152+t.b*.0722}function Ap(t){function e(i){return i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4)}return dx(new xt(e(t.r),e(t.g),e(t.b),1))}function Dc(t,e,i){return i-e===0?0:(t-e)/(i-e)}function Rc(t,e,i){const s=Dc(t.r,e.r,i.r),n=Dc(t.g,e.g,i.g),o=Dc(t.b,e.b,i.b);return(s+n+o)/3}function ux(t,e,i=null){let s=0,n=i;return n!==null?s=Rc(t,e,n):(n=new xt(0,0,0,1),s=Rc(t,e,n),s<=0&&(n=new xt(1,1,1,1),s=Rc(t,e,n))),s=Math.round(s*1e3)/1e3,new xt(n.r,n.g,n.b,s)}function zh(t){const e=Math.max(t.r,t.g,t.b),i=Math.min(t.r,t.g,t.b),s=e-i;let n=0;s!==0&&(e===t.r?n=60*((t.g-t.b)/s%6):e===t.g?n=60*((t.b-t.r)/s+2):n=60*((t.r-t.g)/s+4)),n<0&&(n+=360);const o=(e+i)/2;let r=0;return s!==0&&(r=s/(1-Math.abs(2*o-1))),new vr(n,r,o)}function hx(t,e=1){const i=(1-Math.abs(2*t.l-1))*t.s,s=i*(1-Math.abs(t.h/60%2-1)),n=t.l-i/2;let o=0,r=0,a=0;return t.h<60?(o=i,r=s,a=0):t.h<120?(o=s,r=i,a=0):t.h<180?(o=0,r=i,a=s):t.h<240?(o=0,r=s,a=i):t.h<300?(o=s,r=0,a=i):t.h<360&&(o=i,r=0,a=s),new xt(o+n,r+n,a+n,e)}function fx(t){const e=(t.l+16)/116,i=e+t.a/500,s=e-t.b/200,n=Math.pow(i,3),o=Math.pow(e,3),r=Math.pow(s,3);let a=0;n>Ft.epsilon?a=n:a=(116*i-16)/Ft.kappa;let l=0;t.l>Ft.epsilon*Ft.kappa?l=o:l=t.l/Ft.kappa;let c=0;return r>Ft.epsilon?c=r:c=(116*s-16)/Ft.kappa,a=hi.whitePoint.x*a,l=hi.whitePoint.y*l,c=hi.whitePoint.z*c,new hi(a,l,c)}function px(t){function e(l){return l>Ft.epsilon?Math.pow(l,1/3):(Ft.kappa*l+16)/116}const i=e(t.x/hi.whitePoint.x),s=e(t.y/hi.whitePoint.y),n=e(t.z/hi.whitePoint.z),o=116*s-16,r=500*(i-s),a=200*(s-n);return new Ft(o,r,a)}function gx(t){function e(l){return l<=.04045?l/12.92:Math.pow((l+.055)/1.055,2.4)}const i=e(t.r),s=e(t.g),n=e(t.b),o=i*.4124564+s*.3575761+n*.1804375,r=i*.2126729+s*.7151522+n*.072175,a=i*.0193339+s*.119192+n*.9503041;return new hi(o,r,a)}function mx(t,e=1){function i(r){return r<=.0031308?r*12.92:1.055*Math.pow(r,1/2.4)-.055}const s=i(t.x*3.2404542-t.y*1.5371385-t.z*.4985314),n=i(t.x*-.969266+t.y*1.8760108+t.z*.041556),o=i(t.x*.0556434-t.y*.2040259+t.z*1.0572252);return new xt(s,n,o,e)}function vx(t){return px(gx(t))}function Oc(t,e=1){return mx(fx(t),e)}var Bh;(function(t){t[t.Burn=0]="Burn",t[t.Color=1]="Color",t[t.Darken=2]="Darken",t[t.Dodge=3]="Dodge",t[t.Lighten=4]="Lighten",t[t.Multiply=5]="Multiply",t[t.Overlay=6]="Overlay",t[t.Screen=7]="Screen"})(Bh||(Bh={}));function bx(t,e){if(e.a>=1)return e;if(e.a<=0)return new xt(t.r,t.g,t.b,1);const i=e.a*e.r+(1-e.a)*t.r,s=e.a*e.g+(1-e.a)*t.g,n=e.a*e.b+(1-e.a)*t.b;return new xt(i,s,n,1)}function ra(t,e,i){return isNaN(t)||t<=0?e:t>=1?i:new xt(oa(t,e.r,i.r),oa(t,e.g,i.g),oa(t,e.b,i.b),oa(t,e.a,i.a))}var jh;(function(t){t[t.RGB=0]="RGB",t[t.HSL=1]="HSL",t[t.HSV=2]="HSV",t[t.XYZ=3]="XYZ",t[t.LAB=4]="LAB",t[t.LCH=5]="LCH"})(jh||(jh={}));const yx=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function Dn(t){const e=yx.exec(t);if(e===null)return null;let i=e[1];if(i.length===3){const n=i.charAt(0),o=i.charAt(1),r=i.charAt(2);i=n.concat(n,o,o,r,r)}const s=parseInt(i,16);return isNaN(s)?null:new xt(Fc((s&16711680)>>>16,0,255),Fc((s&65280)>>>8,0,255),Fc(s&255,0,255),1)}function Va(t,e){const i=t.relativeLuminance>e.relativeLuminance?t:e,s=t.relativeLuminance>e.relativeLuminance?e:t;return(i.relativeLuminance+.05)/(s.relativeLuminance+.05)}const si=Object.freeze({create(t,e,i){return new Ha(t,e,i)},from(t){return new Ha(t.r,t.g,t.b)}});function xx(t){const e={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(const i in e)if(typeof e[i]!=typeof t[i])return!1;return!0}class Ha extends xt{constructor(e,i,s){super(e,i,s,1),this.toColorString=this.toStringHexRGB,this.contrast=Va.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=Ap(this)}static fromObject(e){return new Ha(e.r,e.g,e.b)}}function td(t,e,i=0,s=t.length-1){if(s===i)return t[i];const n=Math.floor((s-i)/2)+i;return e(t[n])?td(t,e,i,n):td(t,e,n+1,s)}const wx=(-.1+Math.sqrt(.21))/2;function Pr(t){return t.relativeLuminance<=wx}function Bn(t){return Pr(t)?-1:1}const Yh={stepContrast:1.03,stepContrastRamp:.03,preserveSource:!1};function $x(t,e,i){return typeof t=="number"?br.from(si.create(t,e,i)):br.from(t)}function kx(t,e){return xx(t)?ns.from(t,e):ns.from(si.create(t.r,t.g,t.b),e)}const br=Object.freeze({create:$x,from:kx});class ns{constructor(e,i){this.closestIndexCache=new Map,this.source=e,this.swatches=i,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(e,i,s,n){s===void 0&&(s=this.closestIndexOf(e));let o=this.swatches;const r=this.lastIndex;let a=s;n===void 0&&(n=Bn(e));const l=c=>Va(e,c)>=i;return n===-1&&(o=this.reversedSwatches,a=r-a),td(o,l,a,r)}get(e){return this.swatches[e]||this.swatches[_n(e,0,this.lastIndex)]}closestIndexOf(e){if(this.closestIndexCache.has(e.relativeLuminance))return this.closestIndexCache.get(e.relativeLuminance);let i=this.swatches.indexOf(e);if(i!==-1)return this.closestIndexCache.set(e.relativeLuminance,i),i;const s=this.swatches.reduce((n,o)=>Math.abs(o.relativeLuminance-e.relativeLuminance)<Math.abs(n.relativeLuminance-e.relativeLuminance)?o:n);return i=this.swatches.indexOf(s),this.closestIndexCache.set(e.relativeLuminance,i),i}static saturationBump(e,i){const n=zh(e).s,o=zh(i);if(o.s<n){const r=new vr(o.h,n,o.l);return hx(r)}return i}static ramp(e){const i=e/100;return i>.5?(i-.5)/.5:2*i}static createHighResolutionPalette(e){const i=[],s=vx(xt.fromObject(e).roundToPrecision(4)),n=Oc(new Ft(0,s.a,s.b)).clamp().roundToPrecision(4),o=Oc(new Ft(50,s.a,s.b)).clamp().roundToPrecision(4),r=Oc(new Ft(100,s.a,s.b)).clamp().roundToPrecision(4),a=new xt(0,0,0),l=new xt(1,1,1),c=r.equalValue(l)?0:14,d=n.equalValue(a)?0:14;for(let h=100+c;h>=0-d;h-=.5){let v;if(h<0){const w=h/d+1;v=ra(w,a,n)}else if(h<=50)v=ra(ns.ramp(h),n,o);else if(h<=100)v=ra(ns.ramp(h),o,r);else{const w=(h-100)/c;v=ra(w,r,l)}v=ns.saturationBump(o,v).roundToPrecision(4),i.push(si.from(v))}return new ns(e,i)}static adjustEnd(e,i,s,n){const o=n===-1?i.swatches:i.reversedSwatches,r=c=>{const d=i.closestIndexOf(c);return n===1?i.lastIndex-d:d};n===1&&s.reverse();const a=e(s[s.length-2]);if(Gt(Va(s[s.length-1],s[s.length-2]),2)<a){s.pop();const c=i.colorContrast(o[i.lastIndex],a,void 0,n),d=r(c),h=r(s[s.length-2]),v=d-h;let w=1;for(let F=s.length-v-1;F<s.length;F++){const $=r(s[F]),T=F===s.length-1?i.lastIndex:$+w;s[F]=o[T],w++}}n===1&&s.reverse()}static createColorPaletteByContrast(e,i){const s=ns.createHighResolutionPalette(e),n=a=>{const l=i.stepContrast+i.stepContrast*(1-a.relativeLuminance)*i.stepContrastRamp;return Gt(l,2)},o=[];let r=i.preserveSource?e:s.swatches[0];o.push(r);do{const a=n(r);r=s.colorContrast(r,a,void 0,1),o.push(r)}while(r.relativeLuminance>0);if(i.preserveSource){r=e;do{const a=n(r);r=s.colorContrast(r,a,void 0,-1),o.unshift(r)}while(r.relativeLuminance<1)}return this.adjustEnd(n,s,o,-1),i.preserveSource&&this.adjustEnd(n,s,o,1),o}static from(e,i){const s=i===void 0?Yh:Object.assign(Object.assign({},Yh),i);return new ns(e,Object.freeze(ns.createColorPaletteByContrast(e,s)))}}const Na=si.create(1,1,1),jd=si.create(0,0,0),_x=si.create(.5,.5,.5),Ec=Dn("#0078D4"),Sx=si.create(Ec.r,Ec.g,Ec.b);function Pp(t,e,i,s,n){const o=d=>d.contrast(Na)>=n?Na:jd,r=o(t),a=o(e),l=r.relativeLuminance===a.relativeLuminance?r:o(i),c=o(s);return{rest:r,hover:a,active:l,focus:c}}class bl{constructor(e,i,s,n){this.toColorString=()=>this.cssGradient,this.contrast=Va.bind(null,this),this.createCSS=this.toColorString,this.color=new xt(e,i,s),this.cssGradient=n,this.relativeLuminance=Ap(this.color),this.r=e,this.g=i,this.b=s}static fromObject(e,i){return new bl(e.r,e.g,e.b,i)}}const Cx=new xt(0,0,0),Ix=new xt(1,1,1);function Mp(t,e,i,s,n,o,r,a,l=10,c=!1){const d=t.closestIndexOf(e);a===void 0&&(a=Bn(e));function h(ge){if(c){const J=t.closestIndexOf(e),Ce=t.get(J),Oe=ge.relativeLuminance<e.relativeLuminance?Cx:Ix,D=ux(Dn(ge.toColorString()),Dn(Ce.toColorString()),Oe).roundToPrecision(2),ke=bx(Dn(e.toColorString()),D);return si.from(ke)}else return ge}const v=d+a*i,w=v+a*(s-i),F=v+a*(n-i),$=v+a*(o-i),T=a===-1?0:100-l,W=a===-1?l:100;function Z(ge,J){const Ce=t.get(ge);if(J){const Oe=t.get(ge+a*r),D=a===-1?Oe:Ce,ke=a===-1?Ce:Oe,Ee=`linear-gradient(${h(D).toColorString()} ${T}%, ${h(ke).toColorString()} ${W}%)`;return bl.fromObject(D,Ee)}else return h(Ce)}return{rest:Z(v,!0),hover:Z(w,!0),active:Z(F,!1),focus:Z($,!0)}}function Tx(t,e,i,s,n,o,r,a){const l=t.closestIndexOf(e),c=Bn(e),d=l+c*i,h=d+c*(s-i),v=d+c*(n-i),w=d+c*(o-i),F=`calc(100% - ${a})`;function $(T,W){const Z=t.get(T);if(W){const ge=t.get(T+c*r),J=`linear-gradient(${Z.toColorString()} ${F}, ${ge.toColorString()} ${F}, ${ge.toColorString()})`;return bl.fromObject(Z,J)}else return Z}return{rest:$(d,!0),hover:$(h,!0),active:$(v,!1),focus:$(w,!0)}}function Fx(t,e,i){return t.colorContrast(e,i)}function wo(t,e,i,s,n,o,r,a){a==null&&(a=Bn(e));const l=t.closestIndexOf(t.colorContrast(e,i));return{rest:t.get(l+a*s),hover:t.get(l+a*n),active:t.get(l+a*o),focus:t.get(l+a*r)}}function Dx(t,e,i,s,n,o,r,a=void 0,l,c,d,h,v,w=void 0){return Pr(e)?wo(t,e,l,c,d,h,v,w):wo(t,e,i,s,n,o,r,a)}function Rx(t,e,i){return t.get(t.closestIndexOf(e)+Bn(e)*i)}function on(t,e,i,s,n,o,r){const a=t.closestIndexOf(e);return r==null&&(r=Bn(e)),{rest:t.get(a+r*i),hover:t.get(a+r*s),active:t.get(a+r*n),focus:t.get(a+r*o)}}function Yd(t,e,i,s,n,o,r=void 0,a,l,c,d,h=void 0){return Pr(e)?on(t,e,a,l,c,d,h):on(t,e,i,s,n,o,r)}function Ox(t,e){return Pr(e)?Na:jd}function Ex(t,e,i){return Pr(e)?jd:Na}function Lx(t){return si.create(t,t,t)}var yr;(function(t){t[t.LightMode=.98]="LightMode",t[t.DarkMode=.15]="DarkMode"})(yr||(yr={}));function Mr(t,e){return t.closestIndexOf(Lx(e))}function Ax(t,e){return t.get(Mr(t,e))}function Px(t,e,i){return t.get(Mr(t,e)+i)}function Vp(t,e,i){return t.get(Mr(t,e)+i*-1)}function Mx(t,e,i){return t.get(Mr(t,e)+i*-1*2)}function Vx(t,e,i){return t.get(Mr(t,e)+i*-1*3)}const Hx={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Black:900},{create:x}=Ue;function z(t){return Ue.create({name:t,cssCustomPropertyName:null})}const Ia=x("direction").withDefault(Qe.ltr),bi=x("disabled-opacity").withDefault(.3),yl=x("base-height-multiplier").withDefault(8),Nx=x("base-horizontal-spacing-multiplier").withDefault(3),fn=x("density").withDefault(0),q=x("design-unit").withDefault(4),je=x("control-corner-radius").withDefault(4),xs=x("layer-corner-radius").withDefault(8),ne=x("stroke-width").withDefault(1),Mt=x("focus-stroke-width").withDefault(2),Ei=x("body-font").withDefault('"Segoe UI Variable", "Segoe UI", sans-serif'),zx=x("font-weight").withDefault(Hx.Normal);function Ps(t){return e=>{const i=t.getValueFor(e),s=zx.getValueFor(e);if(i.endsWith("px")){const n=Number.parseFloat(i.replace("px",""));if(n<=12)return`"wght" ${s}, "opsz" 8`;if(n>24)return`"wght" ${s}, "opsz" 36`}return`"wght" ${s}, "opsz" 10.5`}}const Ud=x("type-ramp-base-font-size").withDefault("14px"),Hp=x("type-ramp-base-line-height").withDefault("20px"),Bx=x("type-ramp-base-font-variations").withDefault(Ps(Ud)),Wd=x("type-ramp-minus-1-font-size").withDefault("12px"),Gd=x("type-ramp-minus-1-line-height").withDefault("16px"),jx=x("type-ramp-minus-1-font-variations").withDefault(Ps(Wd)),qd=x("type-ramp-minus-2-font-size").withDefault("10px"),Np=x("type-ramp-minus-2-line-height").withDefault("14px"),Yx=x("type-ramp-minus-2-font-variations").withDefault(Ps(qd)),Zd=x("type-ramp-plus-1-font-size").withDefault("16px"),zp=x("type-ramp-plus-1-line-height").withDefault("22px"),Ux=x("type-ramp-plus-1-font-variations").withDefault(Ps(Zd)),Xd=x("type-ramp-plus-2-font-size").withDefault("20px"),Bp=x("type-ramp-plus-2-line-height").withDefault("26px"),Wx=x("type-ramp-plus-2-font-variations").withDefault(Ps(Xd)),Qd=x("type-ramp-plus-3-font-size").withDefault("24px"),jp=x("type-ramp-plus-3-line-height").withDefault("32px"),Gx=x("type-ramp-plus-3-font-variations").withDefault(Ps(Qd)),Jd=x("type-ramp-plus-4-font-size").withDefault("28px"),Yp=x("type-ramp-plus-4-line-height").withDefault("36px"),qx=x("type-ramp-plus-4-font-variations").withDefault(Ps(Jd)),Kd=x("type-ramp-plus-5-font-size").withDefault("32px"),Up=x("type-ramp-plus-5-line-height").withDefault("40px"),Zx=x("type-ramp-plus-5-font-variations").withDefault(Ps(Kd)),eu=x("type-ramp-plus-6-font-size").withDefault("40px"),Wp=x("type-ramp-plus-6-line-height").withDefault("52px"),Xx=x("type-ramp-plus-6-font-variations").withDefault(Ps(eu)),pn=x("base-layer-luminance").withDefault(yr.LightMode),id=z("accent-fill-rest-delta").withDefault(0),sd=z("accent-fill-hover-delta").withDefault(-2),nd=z("accent-fill-active-delta").withDefault(-5),od=z("accent-fill-focus-delta").withDefault(0),Gp=z("accent-foreground-rest-delta").withDefault(0),qp=z("accent-foreground-hover-delta").withDefault(3),Zp=z("accent-foreground-active-delta").withDefault(-8),Xp=z("accent-foreground-focus-delta").withDefault(0),Qp=z("neutral-fill-rest-delta").withDefault(-1),Jp=z("neutral-fill-hover-delta").withDefault(1),Kp=z("neutral-fill-active-delta").withDefault(0),eg=z("neutral-fill-focus-delta").withDefault(0),tg=z("neutral-fill-input-rest-delta").withDefault(-1),ig=z("neutral-fill-input-hover-delta").withDefault(1),sg=z("neutral-fill-input-active-delta").withDefault(0),ng=z("neutral-fill-input-focus-delta").withDefault(-2),aa=z("neutral-fill-input-alt-rest-delta").withDefault(2),Uh=z("neutral-fill-input-alt-hover-delta").withDefault(4),Wh=z("neutral-fill-input-alt-active-delta").withDefault(6),Gh=z("neutral-fill-input-alt-focus-delta").withDefault(2),rn=z("neutral-fill-layer-rest-delta").withDefault(-2),Qx=z("neutral-fill-layer-hover-delta").withDefault(-3),Jx=z("neutral-fill-layer-active-delta").withDefault(-3),la=z("neutral-fill-layer-alt-rest-delta").withDefault(-1),Kx=z("neutral-fill-secondary-rest-delta").withDefault(3),ew=z("neutral-fill-secondary-hover-delta").withDefault(2),tw=z("neutral-fill-secondary-active-delta").withDefault(1),iw=z("neutral-fill-secondary-focus-delta").withDefault(3),og=z("neutral-fill-stealth-rest-delta").withDefault(0),rg=z("neutral-fill-stealth-hover-delta").withDefault(3),ag=z("neutral-fill-stealth-active-delta").withDefault(2),lg=z("neutral-fill-stealth-focus-delta").withDefault(0),sw=z("neutral-fill-strong-rest-delta").withDefault(0),cg=z("neutral-fill-strong-hover-delta").withDefault(8),dg=z("neutral-fill-strong-active-delta").withDefault(-5),ug=z("neutral-fill-strong-focus-delta").withDefault(0),hg=z("neutral-stroke-rest-delta").withDefault(8),fg=z("neutral-stroke-hover-delta").withDefault(12),pg=z("neutral-stroke-active-delta").withDefault(6),gg=z("neutral-stroke-focus-delta").withDefault(8),mg=z("neutral-stroke-control-rest-delta").withDefault(3),vg=z("neutral-stroke-control-hover-delta").withDefault(5),bg=z("neutral-stroke-control-active-delta").withDefault(5),yg=z("neutral-stroke-control-focus-delta").withDefault(5),xg=z("neutral-stroke-divider-rest-delta").withDefault(4),qh=z("neutral-stroke-layer-rest-delta").withDefault(3),nw=z("neutral-stroke-layer-hover-delta").withDefault(3),ow=z("neutral-stroke-layer-active-delta").withDefault(3),rw=z("neutral-stroke-strong-hover-delta").withDefault(0),aw=z("neutral-stroke-strong-active-delta").withDefault(0),lw=z("neutral-stroke-strong-focus-delta").withDefault(0),wg=x("neutral-base-color").withDefault(_x),Ke=z("neutral-palette").withDefault(t=>br.from(wg.getValueFor(t))),xl=x("accent-base-color").withDefault(Sx),tu=z("accent-palette").withDefault(t=>br.from(xl.getValueFor(t))),cw=z("neutral-layer-card-container-recipe").withDefault({evaluate:t=>Vp(Ke.getValueFor(t),pn.getValueFor(t),rn.getValueFor(t))});x("neutral-layer-card-container").withDefault(t=>cw.getValueFor(t).evaluate(t));const dw=z("neutral-layer-floating-recipe").withDefault({evaluate:t=>Px(Ke.getValueFor(t),pn.getValueFor(t),rn.getValueFor(t))}),Vr=x("neutral-layer-floating").withDefault(t=>dw.getValueFor(t).evaluate(t)),uw=z("neutral-layer-1-recipe").withDefault({evaluate:t=>Ax(Ke.getValueFor(t),pn.getValueFor(t))}),hw=x("neutral-layer-1").withDefault(t=>uw.getValueFor(t).evaluate(t)),fw=z("neutral-layer-2-recipe").withDefault({evaluate:t=>Vp(Ke.getValueFor(t),pn.getValueFor(t),rn.getValueFor(t))});x("neutral-layer-2").withDefault(t=>fw.getValueFor(t).evaluate(t));const pw=z("neutral-layer-3-recipe").withDefault({evaluate:t=>Mx(Ke.getValueFor(t),pn.getValueFor(t),rn.getValueFor(t))});x("neutral-layer-3").withDefault(t=>pw.getValueFor(t).evaluate(t));const gw=z("neutral-layer-4-recipe").withDefault({evaluate:t=>Vx(Ke.getValueFor(t),pn.getValueFor(t),rn.getValueFor(t))});x("neutral-layer-4").withDefault(t=>gw.getValueFor(t).evaluate(t));const Se=x("fill-color").withDefault(t=>hw.getValueFor(t));var za;(function(t){t[t.normal=4.5]="normal",t[t.large=3]="large"})(za||(za={}));const wl=z("accent-fill-recipe").withDefault({evaluate:(t,e)=>Dx(tu.getValueFor(t),e||Se.getValueFor(t),5,id.getValueFor(t),sd.getValueFor(t),nd.getValueFor(t),od.getValueFor(t),void 0,8,id.getValueFor(t),sd.getValueFor(t),nd.getValueFor(t),od.getValueFor(t),void 0)}),Ze=x("accent-fill-rest").withDefault(t=>wl.getValueFor(t).evaluate(t).rest),Zi=x("accent-fill-hover").withDefault(t=>wl.getValueFor(t).evaluate(t).hover),Xi=x("accent-fill-active").withDefault(t=>wl.getValueFor(t).evaluate(t).active),$l=x("accent-fill-focus").withDefault(t=>wl.getValueFor(t).evaluate(t).focus),kl=z("foreground-on-accent-recipe").withDefault({evaluate:t=>Pp(Ze.getValueFor(t),Zi.getValueFor(t),Xi.getValueFor(t),$l.getValueFor(t),za.normal)}),Pn=x("foreground-on-accent-rest").withDefault(t=>kl.getValueFor(t).evaluate(t).rest),$g=x("foreground-on-accent-hover").withDefault(t=>kl.getValueFor(t).evaluate(t).hover),kg=x("foreground-on-accent-active").withDefault(t=>kl.getValueFor(t).evaluate(t).active);x("foreground-on-accent-focus").withDefault(t=>kl.getValueFor(t).evaluate(t).focus);const _l=z("accent-foreground-recipe").withDefault({evaluate:(t,e)=>wo(tu.getValueFor(t),e||Se.getValueFor(t),9.5,Gp.getValueFor(t),qp.getValueFor(t),Zp.getValueFor(t),Xp.getValueFor(t))}),_g=x("accent-foreground-rest").withDefault(t=>_l.getValueFor(t).evaluate(t).rest),Sg=x("accent-foreground-hover").withDefault(t=>_l.getValueFor(t).evaluate(t).hover),Cg=x("accent-foreground-active").withDefault(t=>_l.getValueFor(t).evaluate(t).active);x("accent-foreground-focus").withDefault(t=>_l.getValueFor(t).evaluate(t).focus);const Sl=z("accent-stroke-control-recipe").withDefault({evaluate:(t,e)=>Mp(Ke.getValueFor(t),e||Se.getValueFor(t),-3,-3,-3,-3,10,1,void 0,!0)}),mw=x("accent-stroke-control-rest").withDefault(t=>Sl.getValueFor(t).evaluate(t,Ze.getValueFor(t)).rest),vw=x("accent-stroke-control-hover").withDefault(t=>Sl.getValueFor(t).evaluate(t,Zi.getValueFor(t)).hover),bw=x("accent-stroke-control-active").withDefault(t=>Sl.getValueFor(t).evaluate(t,Xi.getValueFor(t)).active);x("accent-stroke-control-focus").withDefault(t=>Sl.getValueFor(t).evaluate(t,$l.getValueFor(t)).focus);const Cl=z("neutral-fill-recipe").withDefault({evaluate:(t,e)=>Yd(Ke.getValueFor(t),e||Se.getValueFor(t),Qp.getValueFor(t),Jp.getValueFor(t),Kp.getValueFor(t),eg.getValueFor(t),void 0,2,3,1,2,void 0)}),Ci=x("neutral-fill-rest").withDefault(t=>Cl.getValueFor(t).evaluate(t).rest),Zh=x("neutral-fill-hover").withDefault(t=>Cl.getValueFor(t).evaluate(t).hover),Xh=x("neutral-fill-active").withDefault(t=>Cl.getValueFor(t).evaluate(t).active);x("neutral-fill-focus").withDefault(t=>Cl.getValueFor(t).evaluate(t).focus);const gn=z("neutral-fill-input-recipe").withDefault({evaluate:(t,e)=>Yd(Ke.getValueFor(t),e||Se.getValueFor(t),tg.getValueFor(t),ig.getValueFor(t),sg.getValueFor(t),ng.getValueFor(t),void 0,2,3,1,0,void 0)}),ca=x("neutral-fill-input-rest").withDefault(t=>gn.getValueFor(t).evaluate(t).rest),Qh=x("neutral-fill-input-hover").withDefault(t=>gn.getValueFor(t).evaluate(t).hover);x("neutral-fill-input-active").withDefault(t=>gn.getValueFor(t).evaluate(t).active);const Jh=x("neutral-fill-input-focus").withDefault(t=>gn.getValueFor(t).evaluate(t).focus),Il=z("neutral-fill-input-alt-recipe").withDefault({evaluate:(t,e)=>Yd(Ke.getValueFor(t),e||Se.getValueFor(t),aa.getValueFor(t),Uh.getValueFor(t),Wh.getValueFor(t),Gh.getValueFor(t),1,aa.getValueFor(t),aa.getValueFor(t)-Uh.getValueFor(t),aa.getValueFor(t)-Wh.getValueFor(t),Gh.getValueFor(t),1)}),iu=x("neutral-fill-input-alt-rest").withDefault(t=>Il.getValueFor(t).evaluate(t).rest),su=x("neutral-fill-input-alt-hover").withDefault(t=>Il.getValueFor(t).evaluate(t).hover),nu=x("neutral-fill-input-alt-active").withDefault(t=>Il.getValueFor(t).evaluate(t).active),ou=x("neutral-fill-input-alt-focus").withDefault(t=>Il.getValueFor(t).evaluate(t).focus),jn=z("neutral-fill-layer-recipe").withDefault({evaluate:(t,e)=>on(Ke.getValueFor(t),e||Se.getValueFor(t),rn.getValueFor(t),Qx.getValueFor(t),Jx.getValueFor(t),rn.getValueFor(t),1)}),yw=x("neutral-fill-layer-rest").withDefault(t=>jn.getValueFor(t).evaluate(t).rest);x("neutral-fill-layer-hover").withDefault(t=>jn.getValueFor(t).evaluate(t).hover);x("neutral-fill-layer-active").withDefault(t=>jn.getValueFor(t).evaluate(t).active);const xw=z("neutral-fill-layer-alt-recipe").withDefault({evaluate:(t,e)=>on(Ke.getValueFor(t),e||Se.getValueFor(t),la.getValueFor(t),la.getValueFor(t),la.getValueFor(t),la.getValueFor(t))}),ww=x("neutral-fill-layer-alt-rest").withDefault(t=>xw.getValueFor(t).evaluate(t).rest),Yn=z("neutral-fill-secondary-recipe").withDefault({evaluate:(t,e)=>on(Ke.getValueFor(t),e||Se.getValueFor(t),Kx.getValueFor(t),ew.getValueFor(t),tw.getValueFor(t),iw.getValueFor(t))}),Mn=x("neutral-fill-secondary-rest").withDefault(t=>Yn.getValueFor(t).evaluate(t).rest),ru=x("neutral-fill-secondary-hover").withDefault(t=>Yn.getValueFor(t).evaluate(t).hover),$w=x("neutral-fill-secondary-active").withDefault(t=>Yn.getValueFor(t).evaluate(t).active),kw=x("neutral-fill-secondary-focus").withDefault(t=>Yn.getValueFor(t).evaluate(t).focus),es=z("neutral-fill-stealth-recipe").withDefault({evaluate:(t,e)=>on(Ke.getValueFor(t),e||Se.getValueFor(t),og.getValueFor(t),rg.getValueFor(t),ag.getValueFor(t),lg.getValueFor(t))}),$o=x("neutral-fill-stealth-rest").withDefault(t=>es.getValueFor(t).evaluate(t).rest),ko=x("neutral-fill-stealth-hover").withDefault(t=>es.getValueFor(t).evaluate(t).hover),_o=x("neutral-fill-stealth-active").withDefault(t=>es.getValueFor(t).evaluate(t).active),_w=x("neutral-fill-stealth-focus").withDefault(t=>es.getValueFor(t).evaluate(t).focus),Tl=z("neutral-fill-strong-recipe").withDefault({evaluate:(t,e)=>wo(Ke.getValueFor(t),e||Se.getValueFor(t),4.5,sw.getValueFor(t),cg.getValueFor(t),dg.getValueFor(t),ug.getValueFor(t))}),Ig=x("neutral-fill-strong-rest").withDefault(t=>Tl.getValueFor(t).evaluate(t).rest),Sw=x("neutral-fill-strong-hover").withDefault(t=>Tl.getValueFor(t).evaluate(t).hover),Cw=x("neutral-fill-strong-active").withDefault(t=>Tl.getValueFor(t).evaluate(t).active);x("neutral-fill-strong-focus").withDefault(t=>Tl.getValueFor(t).evaluate(t).focus);const Fl=z("neutral-foreground-recipe").withDefault({evaluate:(t,e)=>wo(Ke.getValueFor(t),e||Se.getValueFor(t),16,0,-19,-30,0)}),Ye=x("neutral-foreground-rest").withDefault(t=>Fl.getValueFor(t).evaluate(t).rest),Iw=x("neutral-foreground-hover").withDefault(t=>Fl.getValueFor(t).evaluate(t).hover),Tw=x("neutral-foreground-active").withDefault(t=>Fl.getValueFor(t).evaluate(t).active);x("neutral-foreground-focus").withDefault(t=>Fl.getValueFor(t).evaluate(t).focus);const Hr=z("neutral-foreground-hint-recipe").withDefault({evaluate:(t,e)=>Fx(Ke.getValueFor(t),e||Se.getValueFor(t),4.5)}),So=x("neutral-foreground-hint").withDefault(t=>Hr.getValueFor(t).evaluate(t)),Dl=z("neutral-stroke-recipe").withDefault({evaluate:(t,e)=>on(Ke.getValueFor(t),e||Se.getValueFor(t),hg.getValueFor(t),fg.getValueFor(t),pg.getValueFor(t),gg.getValueFor(t))}),xr=x("neutral-stroke-rest").withDefault(t=>Dl.getValueFor(t).evaluate(t).rest),Fw=x("neutral-stroke-hover").withDefault(t=>Dl.getValueFor(t).evaluate(t).hover),Dw=x("neutral-stroke-active").withDefault(t=>Dl.getValueFor(t).evaluate(t).active);x("neutral-stroke-focus").withDefault(t=>Dl.getValueFor(t).evaluate(t).focus);const Rl=z("neutral-stroke-control-recipe").withDefault({evaluate:(t,e)=>Mp(Ke.getValueFor(t),e||Se.getValueFor(t),mg.getValueFor(t),vg.getValueFor(t),bg.getValueFor(t),yg.getValueFor(t),5)}),au=x("neutral-stroke-control-rest").withDefault(t=>Rl.getValueFor(t).evaluate(t).rest),Tg=x("neutral-stroke-control-hover").withDefault(t=>Rl.getValueFor(t).evaluate(t).hover),Fg=x("neutral-stroke-control-active").withDefault(t=>Rl.getValueFor(t).evaluate(t).active);x("neutral-stroke-control-focus").withDefault(t=>Rl.getValueFor(t).evaluate(t).focus);const Rw=z("neutral-stroke-divider-recipe").withDefault({evaluate:(t,e)=>Rx(Ke.getValueFor(t),e||Se.getValueFor(t),xg.getValueFor(t))}),Ba=x("neutral-stroke-divider-rest").withDefault(t=>Rw.getValueFor(t).evaluate(t)),Ol=z("neutral-stroke-input-recipe").withDefault({evaluate:(t,e)=>Tx(Ke.getValueFor(t),e||Se.getValueFor(t),mg.getValueFor(t),vg.getValueFor(t),bg.getValueFor(t),yg.getValueFor(t),20,ne.getValueFor(t)+"px")}),Kh=x("neutral-stroke-input-rest").withDefault(t=>Ol.getValueFor(t).evaluate(t).rest),Ow=x("neutral-stroke-input-hover").withDefault(t=>Ol.getValueFor(t).evaluate(t).hover);x("neutral-stroke-input-active").withDefault(t=>Ol.getValueFor(t).evaluate(t).active);x("neutral-stroke-input-focus").withDefault(t=>Ol.getValueFor(t).evaluate(t).focus);const lu=z("neutral-stroke-layer-recipe").withDefault({evaluate:(t,e)=>on(Ke.getValueFor(t),e||Se.getValueFor(t),qh.getValueFor(t),nw.getValueFor(t),ow.getValueFor(t),qh.getValueFor(t))}),co=x("neutral-stroke-layer-rest").withDefault(t=>lu.getValueFor(t).evaluate(t).rest);x("neutral-stroke-layer-hover").withDefault(t=>lu.getValueFor(t).evaluate(t).hover);x("neutral-stroke-layer-active").withDefault(t=>lu.getValueFor(t).evaluate(t).active);const El=z("neutral-stroke-strong-recipe").withDefault({evaluate:(t,e)=>wo(Ke.getValueFor(t),e||Se.getValueFor(t),5.5,0,rw.getValueFor(t),aw.getValueFor(t),lw.getValueFor(t))}),Do=x("neutral-stroke-strong-rest").withDefault(t=>El.getValueFor(t).evaluate(t).rest),cu=x("neutral-stroke-strong-hover").withDefault(t=>El.getValueFor(t).evaluate(t).hover),du=x("neutral-stroke-strong-active").withDefault(t=>El.getValueFor(t).evaluate(t).active);x("neutral-stroke-strong-focus").withDefault(t=>El.getValueFor(t).evaluate(t).focus);const Ew=z("focus-stroke-outer-recipe").withDefault({evaluate:t=>Ox(Ke.getValueFor(t),Se.getValueFor(t))}),Ll=x("focus-stroke-outer").withDefault(t=>Ew.getValueFor(t).evaluate(t)),Lw=z("focus-stroke-inner-recipe").withDefault({evaluate:t=>Ex(tu.getValueFor(t),Se.getValueFor(t),Ll.getValueFor(t))}),Aw=x("focus-stroke-inner").withDefault(t=>Lw.getValueFor(t).evaluate(t)),Al=z("foreground-on-accent-large-recipe").withDefault({evaluate:t=>Pp(Ze.getValueFor(t),Zi.getValueFor(t),Xi.getValueFor(t),$l.getValueFor(t),za.large)});x("foreground-on-accent-rest-large").withDefault(t=>Al.getValueFor(t).evaluate(t).rest);x("foreground-on-accent-hover-large").withDefault(t=>Al.getValueFor(t).evaluate(t,Zi.getValueFor(t)).hover);x("foreground-on-accent-active-large").withDefault(t=>Al.getValueFor(t).evaluate(t,Xi.getValueFor(t)).active);x("foreground-on-accent-focus-large").withDefault(t=>Al.getValueFor(t).evaluate(t,$l.getValueFor(t)).focus);const Pw=x("neutral-fill-inverse-rest-delta").withDefault(0),Mw=x("neutral-fill-inverse-hover-delta").withDefault(-3),Vw=x("neutral-fill-inverse-active-delta").withDefault(7),Hw=x("neutral-fill-inverse-focus-delta").withDefault(0);function Nw(t,e,i,s,n,o){const r=Bn(e),a=t.closestIndexOf(t.colorContrast(e,14)),l=a+r*Math.abs(i-s),c=r===1?i<s:r*i>r*s;let d,h;return c?(d=a,h=l):(d=l,h=a),{rest:t.get(d),hover:t.get(h),active:t.get(d+r*n),focus:t.get(d+r*o)}}const Pl=z("neutral-fill-inverse-recipe").withDefault({evaluate:(t,e)=>Nw(Ke.getValueFor(t),e||Se.getValueFor(t),Pw.getValueFor(t),Mw.getValueFor(t),Vw.getValueFor(t),Hw.getValueFor(t))});x("neutral-fill-inverse-rest").withDefault(t=>Pl.getValueFor(t).evaluate(t).rest);x("neutral-fill-inverse-hover").withDefault(t=>Pl.getValueFor(t).evaluate(t).hover);x("neutral-fill-inverse-active").withDefault(t=>Pl.getValueFor(t).evaluate(t).active);x("neutral-fill-inverse-focus").withDefault(t=>Pl.getValueFor(t).evaluate(t).focus);const gt=fi`
  font-family: ${Ei};
  font-size: ${Ud};
  line-height: ${Hp};
  font-weight: initial;
  font-variation-settings: ${Bx};
`,Dg=fi`
  font-family: ${Ei};
  font-size: ${Wd};
  line-height: ${Gd};
  font-weight: initial;
  font-variation-settings: ${jx};
`;fi`
  font-family: ${Ei};
  font-size: ${qd};
  line-height: ${Np};
  font-weight: initial;
  font-variation-settings: ${Yx};
`;fi`
  font-family: ${Ei};
  font-size: ${Zd};
  line-height: ${zp};
  font-weight: initial;
  font-variation-settings: ${Ux};
`;fi`
  font-family: ${Ei};
  font-size: ${Xd};
  line-height: ${Bp};
  font-weight: initial;
  font-variation-settings: ${Wx};
`;fi`
  font-family: ${Ei};
  font-size: ${Qd};
  line-height: ${jp};
  font-weight: initial;
  font-variation-settings: ${Gx};
`;fi`
  font-family: ${Ei};
  font-size: ${Jd};
  line-height: ${Yp};
  font-weight: initial;
  font-variation-settings: ${qx};
`;fi`
  font-family: ${Ei};
  font-size: ${Kd};
  line-height: ${Up};
  font-weight: initial;
  font-variation-settings: ${Zx};
`;fi`
  font-family: ${Ei};
  font-size: ${eu};
  line-height: ${Wp};
  font-weight: initial;
  font-variation-settings: ${Xx};
`;const zw=(t,e)=>E`
    ${Re("flex")} :host {
      box-sizing: border-box;
      flex-direction: column;
      ${gt}
      color: ${Ye};
      gap: calc(${q} * 1px);
    }
  `,Li=fi`
  outline: calc(${Mt} * 1px) solid ${Ll};
  outline-offset: calc(${Mt} * -1px);
`,Nr=fi`
  outline: calc(${Mt} * 1px) solid ${Ll};
  outline-offset: calc(${ne} * 1px);
`,Fe=fi`(${yl} + ${fn}) * ${q}`,Bw=Ue.create("neutral-fill-stealth-rest-on-neutral-fill-layer-rest").withDefault(t=>{const e=jn.getValueFor(t);return es.getValueFor(t).evaluate(t,e.evaluate(t).rest).rest}),jw=Ue.create("neutral-fill-stealth-hover-on-neutral-fill-layer-rest").withDefault(t=>{const e=jn.getValueFor(t);return es.getValueFor(t).evaluate(t,e.evaluate(t).rest).hover}),Yw=Ue.create("neutral-fill-stealth-active-on-neutral-fill-layer-rest").withDefault(t=>{const e=jn.getValueFor(t);return es.getValueFor(t).evaluate(t,e.evaluate(t).rest).active}),Uw=(t,e)=>E`
    ${Re("flex")} :host {
      box-sizing: border-box;
      ${gt};
      flex-direction: column;
      background: ${yw};
      color: ${Ye};
      border: calc(${ne} * 1px) solid ${co};
      border-radius: calc(${xs} * 1px);
    }

    .region {
      display: none;
      padding: calc(${q} * 2 * 1px);
      background: ${ww};
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
      margin: calc(${q} * 3 * 1px) 0;
      padding: 0 calc(${q} * 2 * 1px);
      text-align: left;
      color: inherit;
      cursor: pointer;
      font: inherit;
    }

    .button::before {
      content: '';
      position: absolute;
      top: calc(${ne} * -1px);
      left: calc(${ne} * -1px);
      right: calc(${ne} * -1px);
      bottom: calc(${ne} * -1px);
      cursor: pointer;
    }

    .button:${me}::before {
      ${Li}
      border-radius: calc(${xs} * 1px);
    }

    :host(.expanded) .button:${me}::before {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    :host(.expanded) .region {
      display: block;
      border-top: calc(${ne} * 1px) solid ${co};
      border-bottom-left-radius: calc((${xs} - ${ne}) * 1px);
      border-bottom-right-radius: calc((${xs} - ${ne}) * 1px);
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-column: 4;
      pointer-events: none;
      background: ${Bw};
      border-radius: calc(${je} * 1px);
      fill: currentcolor;
      width: calc(${Fe} * 1px);
      height: calc(${Fe} * 1px);
      margin: calc(${q} * 2 * 1px);
    }

    .heading:hover .icon {
      background: ${jw};
    }

    .heading:active .icon {
      background: ${Yw};
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
      padding-inline-start: calc(${q} * 2 * 1px);
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
  `.withBehaviors(De(E`
        .button:${me}::before {
          outline-color: ${m.Highlight};
        }
        .icon {
          fill: ${m.ButtonText};
        }
      `)),Ww=Ln.compose({baseName:"accordion-item",template:Hb,styles:Uw,collapsedIcon:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `,expandedIcon:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 7.35c.2.2.5.2.7 0L6 4.21l3.15 3.14a.5.5 0 10.7-.7l-3.5-3.5a.5.5 0 00-.7 0l-3.5 3.5a.5.5 0 000 .7z"/>
    </svg>
  `}),Gw=Vd.compose({baseName:"accordion",template:Kb,styles:zw});function U(t,e,i,s){var n=arguments.length,o=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o}class Ro{constructor(e,i){this.cache=new WeakMap,this.ltr=e,this.rtl=i}bind(e){this.attach(e)}unbind(e){const i=this.cache.get(e);i&&Ia.unsubscribe(i)}attach(e){const i=this.cache.get(e)||new qw(this.ltr,this.rtl,e),s=Ia.getValueFor(e);Ia.subscribe(i),i.attach(s),this.cache.set(e,i)}}class qw{constructor(e,i,s){this.ltr=e,this.rtl=i,this.source=s,this.attached=null}handleChange({target:e,token:i}){this.attach(i.getValueFor(this.source))}attach(e){this.attached!==this[e]&&(this.attached!==null&&this.source.$fastController.removeStyles(this.attached),this.attached=this[e],this.attached!==null&&this.source.$fastController.addStyles(this.attached))}}const Un=Ue.create({name:"elevation-shadow",cssCustomPropertyName:null}).withDefault({evaluate:(t,e,i)=>{let s=.12,n=.14;e>16&&(s=.2,n=.24);const o=`0 0 2px rgba(0, 0, 0, ${s})`,r=`0 calc(${e} * 0.5px) calc((${e} * 1px)) rgba(0, 0, 0, ${n})`;return`${o}, ${r}`}}),Zw=Ue.create("elevation-shadow-card-rest-size").withDefault(4),Xw=Ue.create("elevation-shadow-card-hover-size").withDefault(8),Qw=Ue.create("elevation-shadow-card-active-size").withDefault(0),Jw=Ue.create("elevation-shadow-card-focus-size").withDefault(8),Kw=Ue.create("elevation-shadow-card-rest").withDefault(t=>Un.getValueFor(t).evaluate(t,Zw.getValueFor(t)));Ue.create("elevation-shadow-card-hover").withDefault(t=>Un.getValueFor(t).evaluate(t,Xw.getValueFor(t)));Ue.create("elevation-shadow-card-active").withDefault(t=>Un.getValueFor(t).evaluate(t,Qw.getValueFor(t)));Ue.create("elevation-shadow-card-focus").withDefault(t=>Un.getValueFor(t).evaluate(t,Jw.getValueFor(t)));const e$=Ue.create("elevation-shadow-tooltip-size").withDefault(16),t$=Ue.create("elevation-shadow-tooltip").withDefault(t=>Un.getValueFor(t).evaluate(t,e$.getValueFor(t))),i$=Ue.create("elevation-shadow-flyout-size").withDefault(32),Rg=Ue.create("elevation-shadow-flyout").withDefault(t=>Un.getValueFor(t).evaluate(t,i$.getValueFor(t))),s$=Ue.create("elevation-shadow-dialog-size").withDefault(128),n$=Ue.create("elevation-shadow-dialog").withDefault(t=>Un.getValueFor(t).evaluate(t,s$.getValueFor(t))),Og=(t,e,i,s="[disabled]")=>E`
    ${Re("inline-flex")}
    
    :host {
      position: relative;
      box-sizing: border-box;
      ${gt}
      height: calc(${Fe} * 1px);
      min-width: calc(${Fe} * 1px);
      color: ${Ye};
      border-radius: calc(${je} * 1px);
      fill: currentcolor;
    }

    .control {
      border: calc(${ne} * 1px) solid transparent;
      flex-grow: 1;
      box-sizing: border-box;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 calc((10 + (${q} * 2 * ${fn})) * 1px);
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

    .control:${me} {
      ${Li}
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
  `,uu=(t,e,i,s="[disabled]")=>E`
    .control {
      background: padding-box linear-gradient(${Ci}, ${Ci}),
        border-box ${au};
    }

    :host(${i}:hover) .control {
      background: padding-box linear-gradient(${Zh}, ${Zh}),
        border-box ${Tg};
    }

    :host(${i}:active) .control {
      background: padding-box linear-gradient(${Xh}, ${Xh}),
        border-box ${Fg};
    }

    :host(${s}) .control {
      background: padding-box linear-gradient(${Ci}, ${Ci}),
        border-box ${xr};
    }
  `.withBehaviors(De(E`
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

        .control:${me} {
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
    `)),Eg=(t,e,i,s="[disabled]")=>E`
    .control {
      background: padding-box linear-gradient(${Ze}, ${Ze}),
        border-box ${mw};
      color: ${Pn};
    }

    :host(${i}:hover) .control {
      background: padding-box linear-gradient(${Zi}, ${Zi}),
        border-box ${vw};
      color: ${$g};
    }

    :host(${i}:active) .control {
      background: padding-box linear-gradient(${Xi}, ${Xi}),
        border-box ${bw};
      color: ${kg};
    }

    :host(${s}) .control {
      background: ${Ze};
    }

    .control:${me} {
      box-shadow: 0 0 0 calc(${Mt} * 1px) ${Aw} inset !important;
    }
  `.withBehaviors(De(E`
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

        .control:${me} {
          outline-color: ${m.CanvasText};
          box-shadow: 0 0 0 calc(${Mt} * 1px) ${m.HighlightText} inset !important;
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
      `)),o$=(t,e,i,s="[disabled]")=>E`
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
      color: ${_g};
      text-decoration: underline 1px;
    }

    :host(${i}:hover) .control {
      color: ${Sg};
      text-decoration: none;
    }

    :host(${i}:active) .control {
      color: ${Cg};
      text-decoration: none;
    }

    .control:${me} {
      ${Nr}
    }
  `.withBehaviors(De(E`
        :host(${i}) .control {
          color: ${m.LinkText};
        }

        :host(${i}:hover) .control,
        :host(${i}:active) .control {
          color: ${m.CanvasText};
        }

        .control:${me} {
          outline-color: ${m.CanvasText};
        }
      `)),Lg=(t,e,i,s="[disabled]")=>E`
    :host {
      color: ${_g};
    }

    .control {
      background: ${$o};
    }

    :host(${i}:hover) .control {
      background: ${ko};
      color: ${Sg};
    }

    :host(${i}:active) .control {
      background: ${_o};
      color: ${Cg};
    }

    :host(${s}) .control {
      background: ${$o};
    }
  `.withBehaviors(De(E`
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

        .control:${me} {
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
      `)),Ag=(t,e,i,s="[disabled]")=>E`
    .control {
      background: transparent !important;
      border-color: ${xr};
    }

    :host(${i}:hover) .control {
      border-color: ${Fw};
    }

    :host(${i}:active) .control {
      border-color: ${Dw};
    }

    :host(${s}) .control {
      background: transparent !important;
      border-color: ${xr};
    }
  `.withBehaviors(De(E`
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

        .control:${me} {
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
      `)),hu=(t,e,i,s="[disabled]")=>E`
    .control {
      background: ${$o};
    }

    :host(${i}:hover) .control {
      background: ${ko};
    }

    :host(${i}:active) .control {
      background: ${_o};
    }

    :host(${s}) .control {
      background: ${$o};
    }
  `.withBehaviors(De(E`
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
        
        .control:${me} {
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
      `)),r$=Ue.create("input-placeholder-rest").withDefault(t=>{const e=gn.getValueFor(t);return Hr.getValueFor(t).evaluate(t,e.evaluate(t).rest)}),a$=Ue.create("input-placeholder-hover").withDefault(t=>{const e=gn.getValueFor(t);return Hr.getValueFor(t).evaluate(t,e.evaluate(t).hover)}),l$=Ue.create("input-filled-placeholder-rest").withDefault(t=>{const e=Yn.getValueFor(t);return Hr.getValueFor(t).evaluate(t,e.evaluate(t).rest)}),c$=Ue.create("input-filled-placeholder-hover").withDefault(t=>{const e=Yn.getValueFor(t);return Hr.getValueFor(t).evaluate(t,e.evaluate(t).hover)}),Ml=(t,e,i)=>E`
  :host {
    ${gt}
    color: ${Ye};
    fill: currentcolor;
    user-select: none;
    position: relative;
  }

  ${i} {
    box-sizing: border-box;
    position: relative;
    color: inherit;
    border: calc(${ne} * 1px) solid transparent;
    border-radius: calc(${je} * 1px);
    height: calc(${Fe} * 1px);
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
    color: ${Ye};
    cursor: pointer;
    ${gt}
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
    cursor: ${Oi};
  }

  :host([disabled]) {
    opacity: ${bi};
  }
`,zr=(t,e,i)=>E`
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
      height: calc(${Mt} * 1px);
      bottom: 0;
      border-bottom: calc(${Mt} * 1px) solid ${Ze};
      border-bottom-left-radius: calc(${je} * 1px);
      border-bottom-right-radius: calc(${je} * 1px);
      z-index: 2;
      transition: all 300ms cubic-bezier(0.1, 0.9, 0.2, 1);
    }
  }
`,Br=(t,e,i,s=":not([disabled]):not(:focus-within)")=>E`
  ${i} {
    background: padding-box linear-gradient(${ca}, ${ca}),
      border-box ${Kh};
  }

  :host(${s}:hover) ${i} {
    background: padding-box linear-gradient(${Qh}, ${Qh}),
      border-box ${Ow};
  }

  :host(:not([disabled]):focus-within) ${i} {
    background: padding-box linear-gradient(${Jh}, ${Jh}),
      border-box ${Kh};
  }
  
  :host([disabled]) ${i} {
    background: padding-box linear-gradient(${ca}, ${ca}),
      border-box ${xr};
  }

  .control::placeholder {
    color: ${r$};
  }

  :host(${s}:hover) .control::placeholder {
    color: ${a$};
  }
`,Oo=(t,e,i,s=":not([disabled]):not(:focus-within)")=>E`
  ${i} {
    background: ${Mn};
  }

  :host(${s}:hover) ${i} {
    background: ${ru};
  }

  :host(:not([disabled]):focus-within) ${i} {
    background: ${kw};
  }

  :host([disabled]) ${i} {
    background: ${Mn};
  }

  .control::placeholder {
    color: ${l$};
  }

  :host(${s}:hover) .control::placeholder {
    color: ${c$};
  }
`,Eo=(t,e,i,s=":not([disabled]):not(:focus-within)")=>E`
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
    ${Li}
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
`;function ct(t,e){return new ax("appearance",t,e)}const Xn="[href]",d$=(t,e)=>Og().withBehaviors(ct("neutral",uu(t,e,Xn)),ct("accent",Eg(t,e,Xn)),ct("hypertext",o$(t,e,Xn)),ct("lightweight",Lg(t,e,Xn)),ct("outline",Ag(t,e,Xn)),ct("stealth",hu(t,e,Xn)));class Pg extends pi{appearanceChanged(e,i){e!==i&&(this.classList.add(i),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){var e,i;const s=this.defaultSlottedContent.filter(n=>n.nodeType===Node.ELEMENT_NODE);s.length===1&&s[0]instanceof SVGElement?(e=this.control)===null||e===void 0||e.classList.add("icon-only"):(i=this.control)===null||i===void 0||i.classList.remove("icon-only")}}U([f],Pg.prototype,"appearance",void 0);const u$=Pg.compose({baseName:"anchor",baseClass:pi,template:yp,styles:d$,shadowOptions:{delegatesFocus:!0}}),h$=(t,e)=>E`
  :host {
    contain: layout;
    display: block;
  }
`,f$=ae.compose({baseName:"anchored-region",template:dy,styles:h$}),p$=(t,e)=>E`
    ${Re("inline-block")} :host {
      box-sizing: border-box;
      ${Dg};
    }

    .control {
      border-radius: calc(${je} * 1px);
      padding: calc(((${q} * 0.5) - ${ne}) * 1px) calc((${q} - ${ne}) * 1px);
      border: calc(${ne} * 1px) solid transparent;
    }

    :host(.lightweight) .control {
      background: transparent;
      color: ${Ye};
      font-weight: 600;
    }

    :host(.accent) .control {
      background: ${Ze};
      color: ${Pn};
    }

    :host(.neutral) .control {
      background: ${Mn};
      color: ${Ye};
    }

    :host([circular]) .control {
      border-radius: 100px;
      min-width: calc(${Gd} - calc(${q} * 1px));
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;class Mg extends Or{constructor(){super(...arguments),this.appearance="lightweight"}appearanceChanged(e,i){e!==i&&de.queueUpdate(()=>{this.classList.add(i),this.classList.remove(e)})}}U([f({mode:"fromView"})],Mg.prototype,"appearance",void 0);const g$=Mg.compose({baseName:"badge",baseClass:Or,template:hy,styles:p$}),m$=(t,e)=>E`
  ${Re("inline-block")} :host {
    box-sizing: border-box;
    ${gt};
  }

  .list {
    display: flex;
  }
`,v$=xp.compose({baseName:"breadcrumb",template:py,styles:m$}),b$=(t,e)=>E`
    ${Re("inline-flex")} :host {
      background: transparent;
      color: ${Ye};
      fill: currentcolor;
      box-sizing: border-box;
      ${gt};
      min-width: calc(${Fe} * 1px);
      border-radius: calc(${je} * 1px);
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
      color: ${Iw};
    }

    .control:active {
      color: ${Tw};
    }

    .control:${me} {
      ${Nr}
    }

    :host(:not([href])),
    :host([aria-current]) .control {
      color: ${Ye};
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
  `.withBehaviors(De(E`
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
        .control:${me} {
          outline-color: ${m.LinkText};
        }
      `)),y$=gr.compose({baseName:"breadcrumb-item",template:fy,styles:b$,shadowOptions:{delegatesFocus:!0},separator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>
    </svg>
  `}),xn=":not([disabled])",js="[disabled]",x$=(t,e)=>E`
    :host(${xn}) .control {
      cursor: pointer;
    }

    :host(${js}) .control {
      cursor: ${Oi};
    }

    @media (forced-colors: none) {
      :host(${js}) .control {
        opacity: ${bi};
      }
    }

    ${Og(t,e,xn,js)}
  `.withBehaviors(ct("neutral",uu(t,e,xn,js)),ct("accent",Eg(t,e,xn,js)),ct("lightweight",Lg(t,e,xn,js)),ct("outline",Ag(t,e,xn,js)),ct("stealth",hu(t,e,xn,js)));class Vg extends gi{appearanceChanged(e,i){e!==i&&(this.classList.add(i),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const e=this.defaultSlottedContent.filter(i=>i.nodeType===Node.ELEMENT_NODE);e.length===1&&e[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}U([f],Vg.prototype,"appearance",void 0);const w$=Vg.compose({baseName:"button",baseClass:gi,template:gy,styles:x$,shadowOptions:{delegatesFocus:!0}}),$$=E`
.day.disabled::before {
  transform: translate(-50%, 0) rotate(45deg);
}
`,k$=E`
.day.disabled::before {
  transform: translate(50%, 0) rotate(-45deg);
}
`,_$=(t,e)=>E`
${Re("inline-block")} :host {
  --calendar-cell-size: calc((${yl} + 2 + ${fn}) * ${q} * 1px);
  --calendar-gap: 2px;
  ${gt}
  color: ${Ye};
}

.title {
  padding: calc(${q} * 2px);
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
  border: calc(${ne} * 1px) solid transparent;
  border-radius: calc(${je} * 1px);
}

.interact .day {
  cursor: pointer;
}

.date {
  height: 100%;
}

.inactive .date,
.inactive.disabled::before {
  color: ${So};
}

.disabled::before {
  content: '';
  display: inline-block;
  width: calc(var(--calendar-cell-size) * .8);
  height: calc(${ne} * 1px);
  background: currentColor;
  position: absolute;
  margin-top: calc(var(--calendar-cell-size) / 2);
  transform-origin: center;
  z-index: 1;
}

.selected {
  color: ${Ze};
  border: 1px solid ${Ze};
  background: ${Se};
}

.selected + .selected {
  border-start-start-radius: 0;
  border-end-start-radius: 0;
  border-inline-start-width: 0;
  padding-inline-start: calc(var(--calendar-gap) + (${ne} + ${je}) * 1px);
  margin-inline-start: calc((${je} * -1px) - var(--calendar-gap));
}

.today.disabled::before {
  color: ${Pn};
}

.today .date {
  color: ${Pn};
  background: ${Ze};
  border-radius: 50%;
  position: relative;
}
`.withBehaviors(De(E`
          .day.selected {
              color: ${m.Highlight};
          }

          .today .date {
              background: ${m.Highlight};
              color: ${m.HighlightText};
          }
      `),new Ro($$,k$));class Hg extends Ri{constructor(){super(...arguments),this.readonly=!0}}U([f({converter:Rr})],Hg.prototype,"readonly",void 0);const S$=Hg.compose({baseName:"calendar",template:Ey,styles:_$,title:Iy}),C$=(t,e)=>E`
    ${Re("block")} :host {
      display: block;
      contain: content;
      height: var(--card-height, 100%);
      width: var(--card-width, 100%);
      box-sizing: border-box;
      background: ${Se};
      color: ${Ye};
      border: calc(${ne} * 1px) solid ${co};
      border-radius: calc(${xs} * 1px);
      box-shadow: ${Kw};
    }

    :host {
      content-visibility: auto;
    }
  `.withBehaviors(De(E`
        :host {
          background: ${m.Canvas};
          color: ${m.CanvasText};
        }
      `));class fu extends wp{cardFillColorChanged(e,i){if(i){const s=Dn(i);s!==null&&(this.neutralPaletteSource=i,Se.setValueFor(this,si.create(s.r,s.g,s.b)))}}neutralPaletteSourceChanged(e,i){if(i){const s=Dn(i),n=si.create(s.r,s.g,s.b);Ke.setValueFor(this,br.create(n))}}handleChange(e,i){this.cardFillColor||Se.setValueFor(this,s=>jn.getValueFor(s).evaluate(s,Se.getValueFor(e)).rest)}connectedCallback(){super.connectedCallback();const e=Ma(this);if(e){const i=le.getNotifier(e);i.subscribe(this,"fillColor"),i.subscribe(this,"neutralPalette"),this.handleChange(e,"fillColor")}}}U([f({attribute:"card-fill-color",mode:"fromView"})],fu.prototype,"cardFillColor",void 0);U([f({attribute:"neutral-palette-source",mode:"fromView"})],fu.prototype,"neutralPaletteSource",void 0);const I$=fu.compose({baseName:"card",baseClass:wp,template:Ly,styles:C$}),T$=(t,e)=>E`
    ${Re("inline-flex")} :host {
      align-items: center;
      outline: none;
      ${""} user-select: none;
    }

    .control {
      position: relative;
      width: calc((${Fe} / 2 + ${q}) * 1px);
      height: calc((${Fe} / 2 + ${q}) * 1px);
      box-sizing: border-box;
      border-radius: calc(${je} * 1px);
      border: calc(${ne} * 1px) solid ${Do};
      background: ${iu};
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      ${gt}
      color: ${Ye};
      ${""} padding-inline-start: calc(${q} * 2px + 2px);
      margin-inline-end: calc(${q} * 2px + 2px);
      cursor: pointer;
    }

    slot[name='checked-indicator'],
    slot[name='indeterminate-indicator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      fill: ${Ye};
      opacity: 0;
      pointer-events: none;
    }

    slot[name='indeterminate-indicator'] {
      position: absolute;
      top: 0;
    }

    :host(.checked) slot[name='checked-indicator'],
    :host(.checked) slot[name='indeterminate-indicator'] {
      fill: ${Pn};
    }

    :host(:not(.disabled):hover) .control {
      background: ${su};
      border-color: ${cu};
    }

    :host(:not(.disabled):active) .control {
      background: ${nu};
      border-color: ${du};
    }

    :host(:${me}) .control {
      background: ${ou};
      ${Nr}
    }

    :host(.checked) .control {
      background: ${Ze};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${Zi};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${Xi};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${Oi};
    }

    :host(.checked:not(.indeterminate)) slot[name='checked-indicator'],
    :host(.indeterminate) slot[name='indeterminate-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${bi};
    }
  `.withBehaviors(De(E`
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
        :host(:${me}) .control {
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
      `)),F$=cl.compose({baseName:"checkbox",template:Ay,styles:T$,checkedIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>
    </svg>
  `,indeterminateIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 8z"/>
    </svg>
  `}),ef=".control",da=":not([disabled]):not([open])",tf="[disabled]",Ng=(t,e)=>E`
    ${Re("inline-flex")}
    
    :host {
      border-radius: calc(${je} * 1px);
      box-sizing: border-box;
      color: ${Ye};
      fill: currentcolor;
      font-family: ${Ei};
      position: relative;
      user-select: none;
      min-width: 250px;
      vertical-align: top;
    }

    .listbox {
      box-shadow: ${Rg};
      background: ${Se};
      border-radius: calc(${xs} * 1px);
      box-sizing: border-box;
      display: inline-flex;
      flex-direction: column;
      left: 0;
      max-height: calc(var(--max-height) - (${Fe} * 1px));
      padding: calc((${q} - ${ne} ) * 1px);
      overflow-y: auto;
      position: absolute;
      width: 100%;
      z-index: 1;
      margin: 1px 0;
      border: calc(${ne} * 1px) solid transparent;
    }

    .listbox[hidden] {
      display: none;
    }

    .control {
      border: calc(${ne} * 1px) solid transparent;
      border-radius: calc(${je} * 1px);
      height: calc(${Fe} * 1px);
      align-items: center;
      box-sizing: border-box;
      cursor: pointer;
      display: flex;
      ${gt}
      min-height: 100%;
      padding: 0 calc(${q} * 2.25px);
      width: 100%;
    }

    :host(:${me}) {
      ${Li}
    }

    :host([disabled]) .control {
      cursor: ${Oi};
      opacity: ${bi};
      user-select: none;
    }

    :host([open][position='above']) .listbox {
      bottom: calc((${Fe} + ${q} * 2) * 1px);
    }

    :host([open][position='below']) .listbox {
      top: calc((${Fe} + ${q} * 2) * 1px);
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
  `,D$=(t,e)=>E`
    :host([open]) .listbox {
      background: ${m.ButtonFace};
      border-color: ${m.CanvasText};
    }
  `,R$=(t,e)=>Ng().withBehaviors(ct("outline",uu(t,e,da,tf)),ct("filled",Oo(t,e,ef,da).withBehaviors(De(Eo(t,e,ef,da)))),ct("stealth",hu(t,e,da,tf)),De(D$())),Lc=".control",Ac=":not([disabled]):not([open])",O$=(t,e)=>E`
    ${Ng()}

    ${zr()}

    :host(:empty) .listbox {
      display: none;
    }

    :host([disabled]) *,
    :host([disabled]) {
      cursor: ${Oi};
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
      ${gt}
      height: calc(100% - ${ne} * 1px));
      margin: auto 0;
      width: 100%;
      outline: none;
    }
  `.withBehaviors(ct("outline",Br(t,e,Lc,Ac)),ct("filled",Oo(t,e,Lc,Ac)),De(Eo(t,e,Lc,Ac)));class zg extends Rs{appearanceChanged(e,i){e!==i&&(this.classList.add(i),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&Se.setValueFor(this.listbox,Vr)}}U([f({mode:"fromView"})],zg.prototype,"appearance",void 0);const E$=zg.compose({baseName:"combobox",baseClass:Rs,shadowOptions:{delegatesFocus:!0},template:Ny,styles:O$,indicator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `}),L$=(t,e)=>E`
  :host {
    display: flex;
    position: relative;
    flex-direction: column;
  }
`,A$=(t,e)=>E`
    :host {
      display: grid;
      padding: 1px 0;
      box-sizing: border-box;
      width: 100%;
      border-bottom: calc(${ne} * 1px) solid ${Ba};
    }

    :host(.header) {
    }

    :host(.sticky-header) {
      background: ${Se};
      position: sticky;
      top: 0;
    }
  `.withBehaviors(De(E`
        :host {
        }
      `)),P$=(t,e)=>E`
    :host {
      padding: calc((${q} + ${Mt} - ${ne}) * 1px) calc(((${q} * 3) + ${Mt} - ${ne}) * 1px);
      color: ${Ye};
      box-sizing: border-box;
      ${gt}
      border: transparent calc(${ne} * 1px) solid;
      overflow: hidden;
      white-space: nowrap;
      border-radius: calc(${je} * 1px);
    }

    :host(.column-header) {
      font-weight: 600;
    }

    :host(:${me}) {
      ${Li}
    }
  `.withBehaviors(De(E`
        :host {
          forced-color-adjust: none;
          background: ${m.Field};
          color: ${m.FieldText};
        }

        :host(:${me}) {
          outline-color: ${m.FieldText};
        }
      `)),M$=Ds.compose({baseName:"data-grid-cell",template:Cy,styles:P$}),V$=At.compose({baseName:"data-grid-row",template:Sy,styles:A$}),H$=Ct.compose({baseName:"data-grid",template:xy,styles:L$}),pu={toView(t){return t==null?null:t==null?void 0:t.toColorString()},fromView(t){if(t==null)return null;const e=Dn(t);return e?si.create(e.r,e.g,e.b):null}},sf=E`
  :host {
    background-color: ${Se};
    color: ${Ye};
  }
`.withBehaviors(De(E`
      :host {
        background-color: ${m.Canvas};
        box-shadow: 0 0 0 1px ${m.CanvasText};
        color: ${m.CanvasText};
      }
    `));function ie(t){return(e,i)=>{e[i+"Changed"]=function(s,n){n!=null?t.setValueFor(this,n):t.deleteValueFor(this)}}}class te extends pe{constructor(){super(),this.noPaint=!1;const e={handleChange:this.noPaintChanged.bind(this)};le.getNotifier(this).subscribe(e,"fillColor"),le.getNotifier(this).subscribe(e,"baseLayerLuminance")}connectedCallback(){super.connectedCallback(),this.noPaintChanged()}noPaintChanged(){!this.noPaint&&(this.fillColor!==void 0||this.baseLayerLuminance)?this.$fastController.addStyles(sf):this.$fastController.removeStyles(sf)}}U([f({attribute:"no-paint",mode:"boolean"})],te.prototype,"noPaint",void 0);U([f({attribute:"fill-color",converter:pu,mode:"fromView"}),ie(Se)],te.prototype,"fillColor",void 0);U([f({attribute:"accent-base-color",converter:pu,mode:"fromView"}),ie(xl)],te.prototype,"accentBaseColor",void 0);U([f({attribute:"neutral-base-color",converter:pu,mode:"fromView"}),ie(wg)],te.prototype,"neutralBaseColor",void 0);U([f({converter:K}),ie(fn)],te.prototype,"density",void 0);U([f({attribute:"design-unit",converter:K}),ie(q)],te.prototype,"designUnit",void 0);U([f({attribute:"direction"}),ie(Ia)],te.prototype,"direction",void 0);U([f({attribute:"base-height-multiplier",converter:K}),ie(yl)],te.prototype,"baseHeightMultiplier",void 0);U([f({attribute:"base-horizontal-spacing-multiplier",converter:K}),ie(Nx)],te.prototype,"baseHorizontalSpacingMultiplier",void 0);U([f({attribute:"control-corner-radius",converter:K}),ie(je)],te.prototype,"controlCornerRadius",void 0);U([f({attribute:"layer-corner-radius",converter:K}),ie(xs)],te.prototype,"layerCornerRadius",void 0);U([f({attribute:"stroke-width",converter:K}),ie(ne)],te.prototype,"strokeWidth",void 0);U([f({attribute:"focus-stroke-width",converter:K}),ie(Mt)],te.prototype,"focusStrokeWidth",void 0);U([f({attribute:"disabled-opacity",converter:K}),ie(bi)],te.prototype,"disabledOpacity",void 0);U([f({attribute:"type-ramp-minus-2-font-size"}),ie(qd)],te.prototype,"typeRampMinus2FontSize",void 0);U([f({attribute:"type-ramp-minus-2-line-height"}),ie(Np)],te.prototype,"typeRampMinus2LineHeight",void 0);U([f({attribute:"type-ramp-minus-1-font-size"}),ie(Wd)],te.prototype,"typeRampMinus1FontSize",void 0);U([f({attribute:"type-ramp-minus-1-line-height"}),ie(Gd)],te.prototype,"typeRampMinus1LineHeight",void 0);U([f({attribute:"type-ramp-base-font-size"}),ie(Ud)],te.prototype,"typeRampBaseFontSize",void 0);U([f({attribute:"type-ramp-base-line-height"}),ie(Hp)],te.prototype,"typeRampBaseLineHeight",void 0);U([f({attribute:"type-ramp-plus-1-font-size"}),ie(Zd)],te.prototype,"typeRampPlus1FontSize",void 0);U([f({attribute:"type-ramp-plus-1-line-height"}),ie(zp)],te.prototype,"typeRampPlus1LineHeight",void 0);U([f({attribute:"type-ramp-plus-2-font-size"}),ie(Xd)],te.prototype,"typeRampPlus2FontSize",void 0);U([f({attribute:"type-ramp-plus-2-line-height"}),ie(Bp)],te.prototype,"typeRampPlus2LineHeight",void 0);U([f({attribute:"type-ramp-plus-3-font-size"}),ie(Qd)],te.prototype,"typeRampPlus3FontSize",void 0);U([f({attribute:"type-ramp-plus-3-line-height"}),ie(jp)],te.prototype,"typeRampPlus3LineHeight",void 0);U([f({attribute:"type-ramp-plus-4-font-size"}),ie(Jd)],te.prototype,"typeRampPlus4FontSize",void 0);U([f({attribute:"type-ramp-plus-4-line-height"}),ie(Yp)],te.prototype,"typeRampPlus4LineHeight",void 0);U([f({attribute:"type-ramp-plus-5-font-size"}),ie(Kd)],te.prototype,"typeRampPlus5FontSize",void 0);U([f({attribute:"type-ramp-plus-5-line-height"}),ie(Up)],te.prototype,"typeRampPlus5LineHeight",void 0);U([f({attribute:"type-ramp-plus-6-font-size"}),ie(eu)],te.prototype,"typeRampPlus6FontSize",void 0);U([f({attribute:"type-ramp-plus-6-line-height"}),ie(Wp)],te.prototype,"typeRampPlus6LineHeight",void 0);U([f({attribute:"accent-fill-rest-delta",converter:K}),ie(id)],te.prototype,"accentFillRestDelta",void 0);U([f({attribute:"accent-fill-hover-delta",converter:K}),ie(sd)],te.prototype,"accentFillHoverDelta",void 0);U([f({attribute:"accent-fill-active-delta",converter:K}),ie(nd)],te.prototype,"accentFillActiveDelta",void 0);U([f({attribute:"accent-fill-focus-delta",converter:K}),ie(od)],te.prototype,"accentFillFocusDelta",void 0);U([f({attribute:"accent-foreground-rest-delta",converter:K}),ie(Gp)],te.prototype,"accentForegroundRestDelta",void 0);U([f({attribute:"accent-foreground-hover-delta",converter:K}),ie(qp)],te.prototype,"accentForegroundHoverDelta",void 0);U([f({attribute:"accent-foreground-active-delta",converter:K}),ie(Zp)],te.prototype,"accentForegroundActiveDelta",void 0);U([f({attribute:"accent-foreground-focus-delta",converter:K}),ie(Xp)],te.prototype,"accentForegroundFocusDelta",void 0);U([f({attribute:"neutral-fill-rest-delta",converter:K}),ie(Qp)],te.prototype,"neutralFillRestDelta",void 0);U([f({attribute:"neutral-fill-hover-delta",converter:K}),ie(Jp)],te.prototype,"neutralFillHoverDelta",void 0);U([f({attribute:"neutral-fill-active-delta",converter:K}),ie(Kp)],te.prototype,"neutralFillActiveDelta",void 0);U([f({attribute:"neutral-fill-focus-delta",converter:K}),ie(eg)],te.prototype,"neutralFillFocusDelta",void 0);U([f({attribute:"neutral-fill-input-rest-delta",converter:K}),ie(tg)],te.prototype,"neutralFillInputRestDelta",void 0);U([f({attribute:"neutral-fill-input-hover-delta",converter:K}),ie(ig)],te.prototype,"neutralFillInputHoverDelta",void 0);U([f({attribute:"neutral-fill-input-active-delta",converter:K}),ie(sg)],te.prototype,"neutralFillInputActiveDelta",void 0);U([f({attribute:"neutral-fill-input-focus-delta",converter:K}),ie(ng)],te.prototype,"neutralFillInputFocusDelta",void 0);U([f({attribute:"neutral-fill-layer-rest-delta",converter:K}),ie(rn)],te.prototype,"neutralFillLayerRestDelta",void 0);U([f({attribute:"neutral-fill-stealth-rest-delta",converter:K}),ie(og)],te.prototype,"neutralFillStealthRestDelta",void 0);U([f({attribute:"neutral-fill-stealth-hover-delta",converter:K}),ie(rg)],te.prototype,"neutralFillStealthHoverDelta",void 0);U([f({attribute:"neutral-fill-stealth-active-delta",converter:K}),ie(ag)],te.prototype,"neutralFillStealthActiveDelta",void 0);U([f({attribute:"neutral-fill-stealth-focus-delta",converter:K}),ie(lg)],te.prototype,"neutralFillStealthFocusDelta",void 0);U([f({attribute:"neutral-fill-strong-hover-delta",converter:K}),ie(cg)],te.prototype,"neutralFillStrongHoverDelta",void 0);U([f({attribute:"neutral-fill-strong-active-delta",converter:K}),ie(dg)],te.prototype,"neutralFillStrongActiveDelta",void 0);U([f({attribute:"neutral-fill-strong-focus-delta",converter:K}),ie(ug)],te.prototype,"neutralFillStrongFocusDelta",void 0);U([f({attribute:"base-layer-luminance",converter:K}),ie(pn)],te.prototype,"baseLayerLuminance",void 0);U([f({attribute:"neutral-stroke-divider-rest-delta",converter:K}),ie(xg)],te.prototype,"neutralStrokeDividerRestDelta",void 0);U([f({attribute:"neutral-stroke-rest-delta",converter:K}),ie(hg)],te.prototype,"neutralStrokeRestDelta",void 0);U([f({attribute:"neutral-stroke-hover-delta",converter:K}),ie(fg)],te.prototype,"neutralStrokeHoverDelta",void 0);U([f({attribute:"neutral-stroke-active-delta",converter:K}),ie(pg)],te.prototype,"neutralStrokeActiveDelta",void 0);U([f({attribute:"neutral-stroke-focus-delta",converter:K}),ie(gg)],te.prototype,"neutralStrokeFocusDelta",void 0);const N$=te.compose({baseName:"design-system-provider",template:P` <slot></slot> `,styles:E`
    ${Re("block")}
  `}),z$=(t,e)=>E`
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
    box-shadow: ${n$};
    margin-top: auto;
    margin-bottom: auto;
    border-radius: calc(${xs} * 1px);
    width: var(--dialog-width);
    height: var(--dialog-height);
    background: ${Se};
    z-index: 1;
    border: calc(${ne} * 1px) solid transparent;
  }
`,B$=Ti.compose({baseName:"dialog",template:e0,styles:z$}),j$=(t,e)=>E`
    ${Re("block")} :host {
      box-sizing: content-box;
      height: 0;
      border: none;
      border-top: calc(${ne} * 1px) solid ${Ba};
    }

    :host([orientation="vertical"]) {
      border: none;
      height: 100%;
      margin: 0 calc(${q} * 1px);
      border-left: calc(${ne} * 1px) solid ${Ba};
  }
  `,Y$=ul.compose({baseName:"divider",template:f0,styles:j$}),U$=(t,e)=>E`
    ${Re("inline-flex")} :host {
      height: calc((${Fe} + ${q}) * 1px);
      justify-content: center;
      align-items: center;
      fill: currentcolor;
      color: ${Ig};
      background: padding-box linear-gradient(${Ci}, ${Ci}),
        border-box ${au};
      box-sizing: border-box;
      border: calc(${ne} * 1px) solid transparent;
      border-radius: calc(${je} * 1px);
      padding: 0;
    }

    :host(.disabled) {
      opacity: ${bi};
      cursor: ${Oi};
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
      color: ${Sw};
    }

    :host(:not(.disabled):active) {
      color: ${Cw};
    }

    :host(:${me}) {
      ${Li}
    }

    :host::-moz-focus-inner {
      border: 0;
    }
  `.withBehaviors(De(E`
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
        :host(:${me}) {
          forced-color-adjust: none;
          outline-color: ${m.Highlight};
        }
      `)),W$=hl.compose({baseName:"flipper",template:g0,styles:U$,next:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.57 11.84A1 1 0 016 11.02V4.98a1 1 0 011.57-.82l3.79 2.62c.85.59.85 1.85 0 2.44l-3.79 2.62z"/>
    </svg>
  `,previous:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.43 11.84a1 1 0 001.57-.82V4.98a1 1 0 00-1.57-.82L5.64 6.78c-.85.59-.85 1.85 0 2.44l3.79 2.62z"/>
    </svg>
  `}),G$=E`
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
`,q$=E`
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
`,Z$=E`
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
`.withBehaviors(new Ro(G$,q$)),X$=(t,e)=>E`
  ${Re("block")} :host {
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
`;class Q$ extends Os{connectedCallback(){super.connectedCallback(),this.view!=="mobile"&&this.$fastController.addStyles(Z$)}}const J$=Q$.compose({baseName:"horizontal-scroll",baseClass:Os,template:E0,styles:X$,nextFlipper:P`
    <fluent-flipper @click="${t=>t.scrollToNext()}" aria-hidden="${t=>t.flippersHiddenFromAT}"></fluent-flipper>
  `,previousFlipper:P`
    <fluent-flipper
      @click="${t=>t.scrollToPrevious()}"
      direction="previous"
      aria-hidden="${t=>t.flippersHiddenFromAT}"
    ></fluent-flipper>
  `}),K$=(t,e)=>E`
    ${Re("inline-flex")} :host {
      border: calc(${ne} * 1px) solid ${xr};
      border-radius: calc(${je} * 1px);
      box-sizing: border-box;
      flex-direction: column;
      padding: calc(${q} * 1px) 0;
    }

    ::slotted(${t.tagFor(hs)}) {
      margin: 0 calc(${q} * 1px);
    }

    :host(:focus-within:not([disabled])) {
      ${Li}
    }
  `;class e1 extends ri{}const t1=e1.compose({baseName:"listbox",template:v0,styles:K$}),i1=(t,e)=>E`
    ${Re("inline-flex")} :host {
      position: relative;
      ${gt}
      background: ${$o};
      border-radius: calc(${je} * 1px);
      border: calc(${ne} * 1px) solid transparent;
      box-sizing: border-box;
      color: ${Ye};
      cursor: pointer;
      fill: currentcolor;
      height: calc(${Fe} * 1px);
      overflow: hidden;
      align-items: center;
      padding: 0 calc(((${q} * 3) - ${ne} - 1) * 1px);
      user-select: none;
      white-space: nowrap;
    }

    :host::before {
      content: '';
      display: block;
      position: absolute;
      left: calc((${Mt} - ${ne}) * 1px);
      top: calc((${Fe} / 4) - ${Mt} * 1px);
      width: 3px;
      height: calc((${Fe} / 2) * 1px);
      background: transparent;
      border-radius: calc(${je} * 1px);
    }

    :host(:not([disabled]):hover) {
      background: ${ko};
    }

    :host(:not([disabled]):active) {
      background: ${_o};
    }

    :host(:not([disabled]):active)::before {
      background: ${Ze};
      height: calc(((${Fe} / 2) - 6) * 1px);
    }

    :host([aria-selected='true'])::before {
      background: ${Ze};
    }

    :host(:${me}) {
      ${Li}
      background: ${_w};
    }

    :host([aria-selected='true']) {
      background: ${Mn};
    }

    :host(:not([disabled])[aria-selected='true']:hover) {
      background: ${ru};
    }

    :host(:not([disabled])[aria-selected='true']:active) {
      background: ${$w};
    }

    :host(:not([disabled]):not([aria-selected='true']):hover) {
      background: ${ko};
    }

    :host(:not([disabled]):not([aria-selected='true']):active) {
      background: ${_o};
    }

    :host([disabled]) {
      cursor: ${Oi};
      opacity: ${bi};
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
  `.withBehaviors(new Ro(null,E`
      :host::before {
        right: calc((${Mt} - ${ne}) * 1px);
      }
    `),De(E`
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
        :host(:${me}) {
          outline-color: ${m.CanvasText};
        }
      `)),s1=hs.compose({baseName:"option",template:m0,styles:i1}),n1=(t,e)=>E`
    ${Re("block")} :host {
      background: ${Vr};
      border: calc(${ne} * 1px) solid transparent;
      border-radius: calc(${xs} * 1px);
      box-shadow: ${Rg};
      padding: calc((${q} - ${ne}) * 1px) 0;
      max-width: 368px;
      min-width: 64px;
    }

    :host([slot='submenu']) {
      width: max-content;
      margin: 0 calc(${q} * 2px);
    }

    ::slotted(${t.tagFor(mi)}) {
      margin: 0 calc(${q} * 1px);
    }

    ::slotted(${t.tagFor(ul)}) {
      margin: calc(${q} * 1px) 0;
    }

    ::slotted(hr) {
      box-sizing: content-box;
      height: 0;
      margin: calc(${q} * 1px) 0;
      border: none;
      border-top: calc(${ne} * 1px) solid ${Ba};
    }
  `.withBehaviors(De(E`
        :host([slot='submenu']) {
          background: ${m.Canvas};
          border-color: ${m.CanvasText};
        }
      `));class o1 extends fl{connectedCallback(){super.connectedCallback(),Se.setValueFor(this,Vr)}}const r1=o1.compose({baseName:"menu",baseClass:fl,template:x0,styles:n1}),a1=(t,e)=>E`
    ${Re("grid")} :host {
      contain: layout;
      overflow: visible;
      ${gt}
      box-sizing: border-box;
      height: calc(${Fe} * 1px);
      grid-template-columns: minmax(32px, auto) 1fr minmax(32px, auto);
      grid-template-rows: auto;
      justify-items: center;
      align-items: center;
      padding: 0;
      white-space: nowrap;
      color: ${Ye};
      fill: currentcolor;
      cursor: pointer;
      border-radius: calc(${je} * 1px);
      border: calc(${ne} * 1px) solid transparent;
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

    :host(:${me}) {
      ${Li}
    }

    :host(:not([disabled]):hover) {
      background: ${ko};
    }

    :host(:not([disabled]):active),
    :host(.expanded) {
      background: ${_o};
      color: ${Ye};
      z-index: 2;
    }

    :host([disabled]) {
      cursor: ${Oi};
      opacity: ${bi};
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
      color: ${So};
    }

    :host([aria-checked='true']) .checkbox-indicator,
    :host([aria-checked='true']) slot[name='checkbox-indicator'],
    :host([aria-checked='true']) .radio-indicator,
    :host([aria-checked='true']) slot[name='radio-indicator'] {
      display: flex;
    }
  `.withBehaviors(De(E`
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
        :host(:${me}) ::slotted([slot='end']:not(svg)) {
          color: ${m.HighlightText};
          fill: currentcolor;
        }
        :host(.expanded) {
          background: ${m.Highlight};
          color: ${m.HighlightText};
        }
        :host(:${me}) {
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
        :host([disabled]:${me}) {
          background: ${m.ButtonFace};
          color: ${m.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host([disabled]:${me}) {
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
            :host(:${me}) .expanded-toggle,
            :host(:${me}) .checkbox,
            :host(:${me}) .radio,
            :host([checked]:hover) .checkbox,
            :host([checked]:hover) .radio,
            :host([checked]:${me}) .checkbox,
            :host([checked]:${me}) .radio {
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
      `),new Ro(E`
        .expand-collapse-glyph-container {
          transform: rotate(0deg);
        }
      `,E`
        .expand-collapse-glyph-container {
          transform: rotate(180deg);
        }
      `)),l1=mi.compose({baseName:"menu-item",template:y0,styles:a1,checkboxIndicator:`
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
  `}),ua=".root",c1=(t,e)=>E`
    ${Re("inline-block")}

    ${Ml(t,e,ua)}

    ${zr()}

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
      padding: 0 calc(${q} * 2px + 1px);
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
  `.withBehaviors(ct("outline",Br(t,e,ua)),ct("filled",Oo(t,e,ua)),De(Eo(t,e,ua)));class Bg extends Qt{connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}U([f],Bg.prototype,"appearance",void 0);const d1=Bg.compose({baseName:"number-field",baseClass:Qt,styles:c1,template:w0,shadowOptions:{delegatesFocus:!0},stepDownGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `,stepUpGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 7.35c.2.2.5.2.7 0L6 4.21l3.15 3.14a.5.5 0 10.7-.7l-3.5-3.5a.5.5 0 00-.7 0l-3.5 3.5a.5.5 0 000 .7z"/>
    </svg>
`}),u1=(t,e)=>E`
    ${Re("flex")} :host {
      align-items: center;
      height: calc((${ne} * 3) * 1px);
    }

    .progress {
      background-color: ${Do};
      border-radius: calc(${q} * 1px);
      width: 100%;
      height: calc(${ne} * 1px);
      display: flex;
      align-items: center;
      position: relative;
    }

    .determinate {
      background-color: ${Ze};
      border-radius: calc(${q} * 1px);
      height: calc((${ne} * 3) * 1px);
      transition: all 0.2s ease-in-out;
      display: flex;
    }

    .indeterminate {
      height: calc((${ne} * 3) * 1px);
      border-radius: calc(${q} * 1px);
      display: flex;
      width: 100%;
      position: relative;
      overflow: hidden;
    }

    .indeterminate-indicator-1 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${Ze};
      border-radius: calc(${q} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 40%;
      animation: indeterminate-1 2s infinite;
    }

    .indeterminate-indicator-2 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${Ze};
      border-radius: calc(${q} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 60%;
      animation: indeterminate-2 2s infinite;
    }

    :host(.paused) .indeterminate-indicator-1,
    :host(.paused) .indeterminate-indicator-2 {
      animation: none;
      background-color: ${So};
      width: 100%;
      opacity: 1;
    }

    :host(.paused) .determinate {
      background-color: ${So};
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
  `.withBehaviors(De(E`
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
      `));class h1 extends zn{}const f1=h1.compose({baseName:"progress",template:T0,styles:u1,indeterminateIndicator1:`
    <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>
  `,indeterminateIndicator2:`
    <span class="indeterminate-indicator-2" part="indeterminate-indicator-2"></span>
  `}),p1=(t,e)=>E`
    ${Re("flex")} :host {
      align-items: center;
      height: calc(${Fe} * 1px);
      width: calc(${Fe} * 1px);
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
      stroke: ${Ze};
      fill: none;
      stroke-width: 2px;
      stroke-linecap: round;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
    }

    .indeterminate-indicator-1 {
      stroke: ${Ze};
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
      stroke: ${So};
    }

    :host(.paused) .determinate {
      stroke: ${So};
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
  `.withBehaviors(De(E`
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
      `));class g1 extends zn{}const m1=g1.compose({baseName:"progress-ring",template:I0,styles:p1,indeterminateIndicator:`
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
  `}),v1=(t,e)=>E`
    ${Re("inline-flex")} :host {
      --input-size: calc((${Fe} / 2) + ${q});
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
      border: calc(${ne} * 1px) solid ${Do};
      background: ${iu};
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      ${gt}
      color: ${Ye};
      ${""} padding-inline-start: calc(${q} * 2px + 2px);
      margin-inline-end: calc(${q} * 2px + 2px);
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
      fill: ${Pn};
      opacity: 0;
      pointer-events: none;
    }

    :host(:not(.disabled):hover) .control {
      background: ${su};
      border-color: ${cu};
    }

    :host(:not(.disabled):active) .control {
      background: ${nu};
      border-color: ${du};
    }

    :host(:not(.disabled):active) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(:${me}) .control {
      ${Nr}
      background: ${ou};
    }

    :host(.checked) .control {
      background: ${Ze};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${Zi};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${Xi};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${Oi};
    }

    :host(.checked) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${bi};
    }
  `.withBehaviors(De(E`
        .control {
          background: ${m.Field};
          border-color: ${m.FieldText};
        }
        :host(:not(.disabled):hover) .control,
        :host(:not(.disabled):active) .control {
          border-color: ${m.Highlight};
        }
        :host(:${me}) .control {
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
      `)),b1=gl.compose({baseName:"radio",template:D0,styles:v1,checkedIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="4"/>
    </svg>
  `}),y1=(t,e)=>E`
  ${Re("flex")} :host {
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
`,x1=un.compose({baseName:"radio-group",template:F0,styles:y1}),w1=(t,e)=>P`
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
      <slot ${st({property:"defaultSlottedNodes",filter:Rp})}></slot>
    </label>
    <div class="root" part="root" ${Pe("root")}>
      ${Xt(t,e)}
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
          ${Pe("control")}
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
      ${Zt(t,e)}
    </div>
  </template>
`,ha=".root",$1=Ue.create("clear-button-hover").withDefault(t=>{const e=es.getValueFor(t),i=gn.getValueFor(t);return e.evaluate(t,i.evaluate(t).focus).hover}),k1=Ue.create("clear-button-active").withDefault(t=>{const e=es.getValueFor(t),i=gn.getValueFor(t);return e.evaluate(t,i.evaluate(t).focus).active}),_1=(t,e)=>E`
    ${Re("inline-block")}

    ${Ml(t,e,ha)}

    ${zr()}

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
      padding: 0 calc(${q} * 2px + 1px);
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
      color: ${Ye};
      fill: currentcolor;
      border: none;
      border-radius: calc(${je} * 1px);
      min-width: calc(${Fe} * 1px);
      ${gt}
      outline: none;
      padding: 0 calc((10 + (${q} * 2 * ${fn})) * 1px);
    }
    .clear-button:hover {
      background: ${$1};
    }
    .clear-button:active {
      background: ${k1};
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
    ::slotted(${t.tagFor(gi)}) {
      margin-inline-end: 1px;
    }
  `.withBehaviors(ct("outline",Br(t,e,ha)),ct("filled",Oo(t,e,ha)),De(Eo(t,e,ha)));let jg=class extends vi{constructor(){super(...arguments),this.appearance="outline"}};U([f],jg.prototype,"appearance",void 0);const S1=jg.compose({baseName:"search",baseClass:vi,template:w1,styles:_1,start:'<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg%22%3E"><path d="M8.5 3a5.5 5.5 0 0 1 4.23 9.02l4.12 4.13a.5.5 0 0 1-.63.76l-.07-.06-4.13-4.12A5.5 5.5 0 1 1 8.5 3Zm0 1a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"/></svg>',shadowOptions:{delegatesFocus:!0}});class Yg extends Es{appearanceChanged(e,i){e!==i&&(this.classList.add(i),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&Se.setValueFor(this.listbox,Vr)}}U([f({mode:"fromView"})],Yg.prototype,"appearance",void 0);const C1=Yg.compose({baseName:"select",baseClass:Es,template:V0,styles:R$,indicator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `}),I1=(t,e)=>E`
    ${Re("block")} :host {
      --skeleton-fill-default: ${Mn};
      overflow: hidden;
      width: 100%;
      position: relative;
      background-color: var(--skeleton-fill, var(--skeleton-fill-default));
      --skeleton-animation-gradient-default: linear-gradient(
        270deg,
        var(--skeleton-fill, var(--skeleton-fill-default)) 0%,
        ${ru} 51%,
        var(--skeleton-fill, var(--skeleton-fill-default)) 100%
      );
      --skeleton-animation-timing-default: ease-in-out;
    }

    :host(.rect) {
      border-radius: calc(${je} * 1px);
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

    ${Re("block")} span.shimmer {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: var(--skeleton-animation-gradient, var(--skeleton-animation-gradient-default));
      background-size: 0px 0px / 90% 100%;
      background-repeat: no-repeat;
      background-color: var(--skeleton-animation-fill, ${Mn});
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
  `.withBehaviors(De(E`
        :host{
          background-color: ${m.CanvasText};
        }
      `)),T1=Lr.compose({baseName:"skeleton",template:H0,styles:I1}),F1=(t,e)=>E`
    ${Re("inline-grid")} :host {
      --thumb-size: calc((${Fe} / 2) + ${q} + (${ne} * 2));
      --thumb-translate: calc(var(--thumb-size) * -0.5 + var(--track-width) / 2);
      --track-overhang: calc((${q} / 2) * -1);
      --track-width: ${q};
      align-items: center;
      width: 100%;
      user-select: none;
      box-sizing: border-box;
      border-radius: calc(${je} * 1px);
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
    :host(:${me}) .thumb-cursor {
      box-shadow: 0 0 0 2px ${Se}, 0 0 0 4px ${Ll};
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
      background: padding-box linear-gradient(${Ci}, ${Ci}),
        border-box ${au};
      border: calc(${ne} * 1px) solid transparent;
      border-radius: 50%;
      box-sizing: border-box;
    }
    .thumb-cursor::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 100%;
      margin: 4px;
      background: ${Ze};
    }
    :host(:not(.disabled)) .thumb-cursor:hover::after {
      background: ${Zi};
      margin: 3px;
    }
    :host(:not(.disabled)) .thumb-cursor:active::after {
      background: ${Xi};
      margin: 5px;
    }
    :host(:not(.disabled)) .thumb-cursor:hover {
      background: padding-box linear-gradient(${Ci}, ${Ci}),
        border-box ${Tg};
    }
    :host(:not(.disabled)) .thumb-cursor:active {
      background: padding-box linear-gradient(${Ci}, ${Ci}),
        border-box ${Fg};
    }
    .track-start {
      background: ${Ze};
      position: absolute;
      height: 100%;
      left: 0;
      border-radius: calc(${je} * 1px);
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
      background: ${Ig};
      border: 1px solid ${Do};
      border-radius: 2px;
      box-sizing: border-box;
      position: absolute;
    }
    :host(.vertical) {
      height: 100%;
      min-height: calc(${q} * 60px);
      min-width: calc(${q} * 20px);
    }
    :host(.vertical) .track-start {
      height: auto;
      width: 100%;
      top: 0;
    }
    :host(.disabled),
    :host(.readonly) {
      cursor: ${Oi};
    }
    :host(.disabled) {
      opacity: ${bi};
    }
  `.withBehaviors(De(E`
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
        :host(:${me}) .thumb-cursor {
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
      `)),D1=Ht.compose({baseName:"slider",template:z0,styles:F1,thumb:`
    <div class="thumb-cursor"></div>
  `}),R1=(t,e)=>E`
    ${Re("block")} :host {
      ${Dg}
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
      width: calc(${ne} * 1px);
      height: calc(${q} * 1px);
      background: ${Do};
      justify-self: center;
    }
    :host(.vertical) .mark {
      transform: rotate(90deg);
      align-self: center;
    }
    :host(.vertical) .label {
      margin-left: calc((${q} / 2) * 2px);
      align-self: center;
    }
    :host(.disabled) {
      opacity: ${bi};
    }
  `.withBehaviors(De(E`
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
      `)),O1=Ls.compose({baseName:"slider-label",template:N0,styles:R1}),E1=(t,e)=>E`
    :host([hidden]) {
      display: none;
    }

    ${Re("inline-flex")} :host {
      align-items: center;
      outline: none;
      font-family: ${Ei};
      ${""} user-select: none;
    }

    :host(.disabled) {
      opacity: ${bi};
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.disabled) .switch,
    :host(.readonly) .switch,
    :host(.disabled) .status-message,
    :host(.readonly) .status-message {
      cursor: ${Oi};
    }

    .switch {
      position: relative;
      box-sizing: border-box;
      width: calc(((${Fe} / 2) + ${q}) * 2px);
      height: calc(((${Fe} / 2) + ${q}) * 1px);
      background: ${iu};
      border-radius: calc(${Fe} * 1px);
      border: calc(${ne} * 1px) solid ${Do};
      cursor: pointer;
    }

    :host(:not(.disabled):hover) .switch {
      background: ${su};
      border-color: ${cu};
    }

    :host(:not(.disabled):active) .switch {
      background: ${nu};
      border-color: ${du};
    }

    :host(:${me}) .switch {
      ${Nr}
      background: ${ou};
    }

    :host(.checked) .switch {
      background: ${Ze};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .switch {
      background: ${Zi};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .switch {
      background: ${Xi};
      border-color: transparent;
    }

    slot[name='switch'] {
      position: absolute;
      display: flex;
      border: 1px solid transparent; /* Spacing included in the transform reference box */
      fill: ${Ye};
      transition: all 0.2s ease-in-out;
    }

    .status-message {
      color: ${Ye};
      cursor: pointer;
      ${gt}
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      color: ${Ye};
      ${gt}
      margin-inline-end: calc(${q} * 2px + 2px);
      cursor: pointer;
    }

    ::slotted([slot="checked-message"]),
    ::slotted([slot="unchecked-message"]) {
        margin-inline-start: calc(${q} * 2px + 2px);
    }

    :host(.checked) .switch {
      background: ${Ze};
    }

    :host(.checked) .switch slot[name='switch'] {
      fill: ${Pn};
      filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.15));
    }

    :host(.checked:not(.disabled)) .switch:hover {
      background: ${Zi};
    }

    :host(.checked:not(.disabled)) .switch:hover slot[name='switch'] {
      fill: ${$g};
    }

    :host(.checked:not(.disabled)) .switch:active {
      background: ${Xi};
    }

    :host(.checked:not(.disabled)) .switch:active slot[name='switch'] {
      fill: ${kg};
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
  `.withBehaviors(new Ro(E`
        slot[name='switch'] {
          left: 0;
        }

        :host(.checked) slot[name='switch'] {
          left: 100%;
          transform: translateX(-100%);
        }
      `,E`
        slot[name='switch'] {
          right: 0;
        }

        :host(.checked) slot[name='switch'] {
          right: 100%;
          transform: translateX(100%);
        }
      `),De(E`
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
        :host(:${me}) .switch {
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
      `)),L1=Bd.compose({baseName:"switch",template:U0,styles:E1,switch:`
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="12" height="12" rx="6"/>
    </svg>
  `}),A1=(t,e)=>E`
      ${Re("grid")} :host {
        box-sizing: border-box;
        ${gt}
        color: ${Ye};
        grid-template-columns: auto 1fr auto;
        grid-template-rows: auto 1fr;
      }

      .tablist {
        display: grid;
        grid-template-rows: calc(${Fe} * 1px); auto;
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
        border-radius: calc(${je} * 1px);
        justify-self: center;
        background: ${Ze};
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
        margin-inline-start: calc(${Mt} * 1px);
        border-radius: calc(${je} * 1px);
        align-self: center;
        background: ${Ze};
      }

      :host(.vertical) .activeIndicatorTransition {
        transition: transform 0.2s linear;
      }
    `.withBehaviors(De(E`
        .activeIndicator,
        :host(.vertical) .activeIndicator {
          background: ${m.Highlight};
        }
      `)),P1=(t,e)=>E`
      ${Re("inline-flex")} :host {
        box-sizing: border-box;
        ${gt}
        height: calc((${Fe} + (${q} * 2)) * 1px);
        padding: 0 calc((6 + (${q} * 2 * ${fn})) * 1px);
        color: ${Ye};
        border-radius: calc(${je} * 1px);
        border: calc(${ne} * 1px) solid transparent;
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
        color: ${Ye};
      }

      :host(:${me}) {
        ${Li}
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
        color: ${Ye};
      }

      :host(.vertical:hover[aria-selected='true']) {
      }
    `.withBehaviors(De(E`
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
          :host(:${me}) {
            background: transparent;
            outline-color: ${m.ButtonText};
          }
        `)),M1=Ep.compose({baseName:"tab",template:X0,styles:P1}),V1=(t,e)=>E`
  ${Re("block")} :host {
    box-sizing: border-box;
    ${gt}
    padding: 0 calc((6 + (${q} * 2 * ${fn})) * 1px);
  }
`,H1=Z0.compose({baseName:"tab-panel",template:q0,styles:V1}),N1=As.compose({baseName:"tabs",template:Q0,styles:A1}),fa=".control",z1=(t,e)=>E`
    ${Re("inline-flex")}

    ${Ml(t,e,fa)}

    ${zr()}

    :host {
      flex-direction: column;
      vertical-align: bottom;
    }

    .control {
      height: calc((${Fe} * 2) * 1px);
      padding: calc(${q} * 1.5px) calc(${q} * 2px + 1px);
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
  `.withBehaviors(ct("outline",Br(t,e,fa)),ct("filled",Oo(t,e,fa)),De(Eo(t,e,fa)));class Ug extends Nt{appearanceChanged(e,i){e!==i&&(this.classList.add(i),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}U([f],Ug.prototype,"appearance",void 0);const B1=Ug.compose({baseName:"text-area",baseClass:Nt,template:ex,styles:z1,shadowOptions:{delegatesFocus:!0}}),pa=".root",j1=(t,e)=>E`
    ${Re("inline-block")}

    ${Ml(t,e,pa)}

    ${zr()}

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
      padding: 0 calc(${q} * 2px + 1px);
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
  `.withBehaviors(ct("outline",Br(t,e,pa)),ct("filled",Oo(t,e,pa)),De(Eo(t,e,pa)));class Wg extends ai{appearanceChanged(e,i){e!==i&&(this.classList.add(i),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}U([f],Wg.prototype,"appearance",void 0);const Y1=Wg.compose({baseName:"text-field",baseClass:ai,template:tx,styles:j1,shadowOptions:{delegatesFocus:!0}}),U1=(t,e)=>E`
    ${Re("inline-flex")} :host {
      --toolbar-item-gap: calc(${q} * 1px);
      background: ${Se};
      fill: currentcolor;
      padding: var(--toolbar-item-gap);
      box-sizing: border-box;
      align-items: center;
    }

    :host(${me}) {
      ${Li}
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
  `.withBehaviors(De(E`
        :host(:${me}) {
          outline-color: ${m.Highlight};
          color: ${m.ButtonText};
          forced-color-adjust: none;
        }
      `));class W1 extends hn{}const G1=W1.compose({baseName:"toolbar",baseClass:hn,template:ix,styles:U1}),q1=(t,e)=>E`
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
      border-radius: calc(${je} * 1px);
      border: calc(${ne} * 1px) solid ${co};
      background: ${Se};
      color: ${Ye};
      padding: 4px 12px;
      height: fit-content;
      width: fit-content;
      ${gt}
      white-space: nowrap;
      box-shadow: ${t$};
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
      background: ${Se};
      border-top: calc(${ne} * 1px) solid ${co};
      border-left: calc(${ne} * 1px) solid ${co};
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
  `.withBehaviors(De(E`
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
      `));class Z1 extends wt{connectedCallback(){super.connectedCallback(),Se.setValueFor(this,Vr)}}const X1=Z1.compose({baseName:"tooltip",baseClass:wt,template:sx,styles:q1}),Q1=(t,e)=>E`
  :host([hidden]) {
    display: none;
  }

  ${Re("flex")} :host {
    flex-direction: column;
    align-items: stretch;
    min-width: fit-content;
    font-size: 0;
  }
`,J1=vl.compose({baseName:"tree-view",template:ox,styles:Q1}),K1=E`
  .expand-collapse-button svg {
    transform: rotate(0deg);
  }
  :host(.nested) .expand-collapse-button {
    left: var(--expand-collapse-button-nested-width, calc(${Fe} * -1px));
  }
  :host([selected])::after {
    left: calc(${Mt} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,ek=E`
  .expand-collapse-button svg {
    transform: rotate(180deg);
  }
  :host(.nested) .expand-collapse-button {
    right: var(--expand-collapse-button-nested-width, calc(${Fe} * -1px));
  }
  :host([selected])::after {
    right: calc(${Mt} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,nf=fi`((${yl} / 2) * ${q}) + ((${q} * ${fn}) / 2)`,tk=Ue.create("tree-item-expand-collapse-hover").withDefault(t=>{const e=es.getValueFor(t);return e.evaluate(t,e.evaluate(t).hover).hover}),ik=Ue.create("tree-item-expand-collapse-selected-hover").withDefault(t=>{const e=Yn.getValueFor(t);return es.getValueFor(t).evaluate(t,e.evaluate(t).rest).hover}),sk=(t,e)=>E`
    ${Re("block")} :host {
      contain: content;
      position: relative;
      outline: none;
      color: ${Ye};
      fill: currentcolor;
      cursor: pointer;
      font-family: ${Ei};
      --expand-collapse-button-size: calc(${Fe} * 1px);
      --tree-item-nested-width: 0;
    }

    .positioning-region {
      display: flex;
      position: relative;
      box-sizing: border-box;
      background: ${$o};
      border: calc(${ne} * 1px) solid transparent;
      border-radius: calc(${je} * 1px);
      height: calc((${Fe} + 1) * 1px);
    }

    :host(:${me}) .positioning-region {
      ${Li}
    }

    .positioning-region::before {
      content: '';
      display: block;
      width: var(--tree-item-nested-width);
      flex-shrink: 0;
    }

    :host(:not([disabled])) .positioning-region:hover {
      background: ${ko};
    }

    :host(:not([disabled])) .positioning-region:active {
      background: ${_o};
    }

    .content-region {
      display: inline-flex;
      align-items: center;
      white-space: nowrap;
      width: 100%;
      height: calc(${Fe} * 1px);
      margin-inline-start: calc(${q} * 2px + 8px);
      ${gt}
    }

    .items {
      display: none;
      ${""} font-size: calc(1em + (${q} + 16) * 1px);
    }

    .expand-collapse-button {
      background: none;
      border: none;
      border-radius: calc(${je} * 1px);
      ${""} width: calc((${nf} + (${q} * 2)) * 1px);
      height: calc((${nf} + (${q} * 2)) * 1px);
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
      ${""} margin-inline-end: calc(${q} * 2px + 2px);
    }

    .end {
      ${""} margin-inline-start: calc(${q} * 2px + 2px);
    }

    :host(.expanded) > .items {
      display: block;
    }

    :host([disabled]) {
      opacity: ${bi};
      cursor: ${Oi};
    }

    :host(.nested) .content-region {
      position: relative;
      margin-inline-start: var(--expand-collapse-button-size);
    }

    :host(.nested) .expand-collapse-button {
      position: absolute;
    }

    :host(.nested) .expand-collapse-button:hover {
      background: ${tk};
    }

    :host(:not([disabled])[selected]) .positioning-region {
      background: ${Mn};
    }

    :host(:not([disabled])[selected]) .expand-collapse-button:hover {
      background: ${ik};
    }

    :host([selected])::after {
      content: '';
      display: block;
      position: absolute;
      top: calc((${Fe} / 4) * 1px);
      width: 3px;
      height: calc((${Fe} / 2) * 1px);
      ${""} background: ${Ze};
      border-radius: calc(${je} * 1px);
    }

    ::slotted(fluent-tree-item) {
      --tree-item-nested-width: 1em;
      --expand-collapse-button-nested-width: calc(${Fe} * -1px);
    }
  `.withBehaviors(new Ro(K1,ek),De(E`
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
        :host(:${me}) .positioning-region {
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
      `)),nk=kt.compose({baseName:"tree-item",template:nx,styles:sk,expandCollapseGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>
    </svg>
  `}),ok={fluentAccordion:Gw,fluentAccordionItem:Ww,fluentAnchor:u$,fluentAnchoredRegion:f$,fluentBadge:g$,fluentBreadcrumb:v$,fluentBreadcrumbItem:y$,fluentButton:w$,fluentCalendar:S$,fluentCard:I$,fluentCheckbox:F$,fluentCombobox:E$,fluentDataGrid:H$,fluentDataGridCell:M$,fluentDataGridRow:V$,fluentDesignSystemProvider:N$,fluentDialog:B$,fluentDivider:Y$,fluentFlipper:W$,fluentHorizontalScroll:J$,fluentListbox:t1,fluentOption:s1,fluentMenu:r1,fluentMenuItem:l1,fluentNumberField:d1,fluentProgress:f1,fluentProgressRing:m1,fluentRadio:b1,fluentRadioGroup:x1,fluentSearch:S1,fluentSelect:C1,fluentSkeleton:T1,fluentSlider:D1,fluentSliderLabel:O1,fluentSwitch:L1,fluentTabs:N1,fluentTab:M1,fluentTabPanel:H1,fluentTextArea:B1,fluentTextField:Y1,fluentToolbar:G1,fluentTooltip:X1,fluentTreeView:J1,fluentTreeItem:nk,register(t,...e){if(t)for(const i in this)i!=="register"&&this[i]().register(t,...e)}};function rk(t){return _p.getOrCreate(t).withPrefix("fluent")}rk().register(ok).withDesignTokenRoot(document.body);function gu(t,e){const i=Object.create(null),s=t.split(",");for(let n=0;n<s.length;n++)i[s[n]]=!0;return e?n=>!!i[n.toLowerCase()]:n=>!!i[n]}const tt={},uo=[],Gi=()=>{},ak=()=>!1,lk=/^on[^a-z]/,Vl=t=>lk.test(t),mu=t=>t.startsWith("onUpdate:"),Ot=Object.assign,vu=(t,e)=>{const i=t.indexOf(e);i>-1&&t.splice(i,1)},ck=Object.prototype.hasOwnProperty,Ae=(t,e)=>ck.call(t,e),fe=Array.isArray,ho=t=>Hl(t)==="[object Map]",Gg=t=>Hl(t)==="[object Set]",$e=t=>typeof t=="function",It=t=>typeof t=="string",bu=t=>typeof t=="symbol",ut=t=>t!==null&&typeof t=="object",qg=t=>ut(t)&&$e(t.then)&&$e(t.catch),Zg=Object.prototype.toString,Hl=t=>Zg.call(t),dk=t=>Hl(t).slice(8,-1),Xg=t=>Hl(t)==="[object Object]",yu=t=>It(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ta=gu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Nl=t=>{const e=Object.create(null);return i=>e[i]||(e[i]=t(i))},uk=/-(\w)/g,ls=Nl(t=>t.replace(uk,(e,i)=>i?i.toUpperCase():"")),hk=/\B([A-Z])/g,Wn=Nl(t=>t.replace(hk,"-$1").toLowerCase()),zl=Nl(t=>t.charAt(0).toUpperCase()+t.slice(1)),Pc=Nl(t=>t?`on${zl(t)}`:""),wr=(t,e)=>!Object.is(t,e),Mc=(t,e)=>{for(let i=0;i<t.length;i++)t[i](e)},ja=(t,e,i)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:i})},fk=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let of;const rd=()=>of||(of=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function an(t){if(fe(t)){const e={};for(let i=0;i<t.length;i++){const s=t[i],n=It(s)?vk(s):an(s);if(n)for(const o in n)e[o]=n[o]}return e}else{if(It(t))return t;if(ut(t))return t}}const pk=/;(?![^(]*\))/g,gk=/:([^]+)/,mk=/\/\*[^]*?\*\//g;function vk(t){const e={};return t.replace(mk,"").split(pk).forEach(i=>{if(i){const s=i.split(gk);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ii(t){let e="";if(It(t))e=t;else if(fe(t))for(let i=0;i<t.length;i++){const s=ii(t[i]);s&&(e+=s+" ")}else if(ut(t))for(const i in t)t[i]&&(e+=i+" ");return e.trim()}const bk="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yk=gu(bk);function Qg(t){return!!t||t===""}const dt=t=>It(t)?t:t==null?"":fe(t)||ut(t)&&(t.toString===Zg||!$e(t.toString))?JSON.stringify(t,Jg,2):String(t),Jg=(t,e)=>e&&e.__v_isRef?Jg(t,e.value):ho(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((i,[s,n])=>(i[`${s} =>`]=n,i),{})}:Gg(e)?{[`Set(${e.size})`]:[...e.values()]}:ut(e)&&!fe(e)&&!Xg(e)?String(e):e;let di;class Kg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=di,!e&&di&&(this.index=(di.scopes||(di.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const i=di;try{return di=this,e()}finally{di=i}}}on(){di=this}off(){di=this.parent}stop(e){if(this._active){let i,s;for(i=0,s=this.effects.length;i<s;i++)this.effects[i].stop();for(i=0,s=this.cleanups.length;i<s;i++)this.cleanups[i]();if(this.scopes)for(i=0,s=this.scopes.length;i<s;i++)this.scopes[i].stop(!0);if(!this.detached&&this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0,this._active=!1}}}function em(t){return new Kg(t)}function xk(t,e=di){e&&e.active&&e.effects.push(t)}function tm(){return di}function wk(t){di&&di.cleanups.push(t)}const xu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},im=t=>(t.w&ln)>0,sm=t=>(t.n&ln)>0,$k=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ln},kk=t=>{const{deps:e}=t;if(e.length){let i=0;for(let s=0;s<e.length;s++){const n=e[s];im(n)&&!sm(n)?n.delete(t):e[i++]=n,n.w&=~ln,n.n&=~ln}e.length=i}},Ya=new WeakMap;let Jo=0,ln=1;const ad=30;let Yi;const Rn=Symbol(""),ld=Symbol("");class wu{constructor(e,i=null,s){this.fn=e,this.scheduler=i,this.active=!0,this.deps=[],this.parent=void 0,xk(this,s)}run(){if(!this.active)return this.fn();let e=Yi,i=Xs;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Yi,Yi=this,Xs=!0,ln=1<<++Jo,Jo<=ad?$k(this):rf(this),this.fn()}finally{Jo<=ad&&kk(this),ln=1<<--Jo,Yi=this.parent,Xs=i,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Yi===this?this.deferStop=!0:this.active&&(rf(this),this.onStop&&this.onStop(),this.active=!1)}}function rf(t){const{deps:e}=t;if(e.length){for(let i=0;i<e.length;i++)e[i].delete(t);e.length=0}}let Xs=!0;const nm=[];function Lo(){nm.push(Xs),Xs=!1}function Ao(){const t=nm.pop();Xs=t===void 0?!0:t}function ni(t,e,i){if(Xs&&Yi){let s=Ya.get(t);s||Ya.set(t,s=new Map);let n=s.get(i);n||s.set(i,n=xu()),om(n)}}function om(t,e){let i=!1;Jo<=ad?sm(t)||(t.n|=ln,i=!im(t)):i=!t.has(Yi),i&&(t.add(Yi),Yi.deps.push(t))}function Cs(t,e,i,s,n,o){const r=Ya.get(t);if(!r)return;let a=[];if(e==="clear")a=[...r.values()];else if(i==="length"&&fe(t)){const l=Number(s);r.forEach((c,d)=>{(d==="length"||d>=l)&&a.push(c)})}else switch(i!==void 0&&a.push(r.get(i)),e){case"add":fe(t)?yu(i)&&a.push(r.get("length")):(a.push(r.get(Rn)),ho(t)&&a.push(r.get(ld)));break;case"delete":fe(t)||(a.push(r.get(Rn)),ho(t)&&a.push(r.get(ld)));break;case"set":ho(t)&&a.push(r.get(Rn));break}if(a.length===1)a[0]&&cd(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);cd(xu(l))}}function cd(t,e){const i=fe(t)?t:[...t];for(const s of i)s.computed&&af(s);for(const s of i)s.computed||af(s)}function af(t,e){(t!==Yi||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function _k(t,e){var i;return(i=Ya.get(t))==null?void 0:i.get(e)}const Sk=gu("__proto__,__v_isRef,__isVue"),rm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(bu)),Ck=$u(),Ik=$u(!1,!0),Tk=$u(!0),lf=Fk();function Fk(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...i){const s=Me(this);for(let o=0,r=this.length;o<r;o++)ni(s,"get",o+"");const n=s[e](...i);return n===-1||n===!1?s[e](...i.map(Me)):n}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...i){Lo();const s=Me(this)[e].apply(this,i);return Ao(),s}}),t}function Dk(t){const e=Me(this);return ni(e,"has",t),e.hasOwnProperty(t)}function $u(t=!1,e=!1){return function(s,n,o){if(n==="__v_isReactive")return!t;if(n==="__v_isReadonly")return t;if(n==="__v_isShallow")return e;if(n==="__v_raw"&&o===(t?e?Wk:um:e?dm:cm).get(s))return s;const r=fe(s);if(!t){if(r&&Ae(lf,n))return Reflect.get(lf,n,o);if(n==="hasOwnProperty")return Dk}const a=Reflect.get(s,n,o);return(bu(n)?rm.has(n):Sk(n))||(t||ni(s,"get",n),e)?a:yt(a)?r&&yu(n)?a:a.value:ut(a)?t?hm(a):Po(a):a}}const Rk=am(),Ok=am(!0);function am(t=!1){return function(i,s,n,o){let r=i[s];if(Co(r)&&yt(r)&&!yt(n))return!1;if(!t&&(!Ua(n)&&!Co(n)&&(r=Me(r),n=Me(n)),!fe(i)&&yt(r)&&!yt(n)))return r.value=n,!0;const a=fe(i)&&yu(s)?Number(s)<i.length:Ae(i,s),l=Reflect.set(i,s,n,o);return i===Me(o)&&(a?wr(n,r)&&Cs(i,"set",s,n):Cs(i,"add",s,n)),l}}function Ek(t,e){const i=Ae(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&Cs(t,"delete",e,void 0),s}function Lk(t,e){const i=Reflect.has(t,e);return(!bu(e)||!rm.has(e))&&ni(t,"has",e),i}function Ak(t){return ni(t,"iterate",fe(t)?"length":Rn),Reflect.ownKeys(t)}const lm={get:Ck,set:Rk,deleteProperty:Ek,has:Lk,ownKeys:Ak},Pk={get:Tk,set(t,e){return!0},deleteProperty(t,e){return!0}},Mk=Ot({},lm,{get:Ik,set:Ok}),ku=t=>t,Bl=t=>Reflect.getPrototypeOf(t);function ga(t,e,i=!1,s=!1){t=t.__v_raw;const n=Me(t),o=Me(e);i||(e!==o&&ni(n,"get",e),ni(n,"get",o));const{has:r}=Bl(n),a=s?ku:i?Cu:$r;if(r.call(n,e))return a(t.get(e));if(r.call(n,o))return a(t.get(o));t!==n&&t.get(e)}function ma(t,e=!1){const i=this.__v_raw,s=Me(i),n=Me(t);return e||(t!==n&&ni(s,"has",t),ni(s,"has",n)),t===n?i.has(t):i.has(t)||i.has(n)}function va(t,e=!1){return t=t.__v_raw,!e&&ni(Me(t),"iterate",Rn),Reflect.get(t,"size",t)}function cf(t){t=Me(t);const e=Me(this);return Bl(e).has.call(e,t)||(e.add(t),Cs(e,"add",t,t)),this}function df(t,e){e=Me(e);const i=Me(this),{has:s,get:n}=Bl(i);let o=s.call(i,t);o||(t=Me(t),o=s.call(i,t));const r=n.call(i,t);return i.set(t,e),o?wr(e,r)&&Cs(i,"set",t,e):Cs(i,"add",t,e),this}function uf(t){const e=Me(this),{has:i,get:s}=Bl(e);let n=i.call(e,t);n||(t=Me(t),n=i.call(e,t)),s&&s.call(e,t);const o=e.delete(t);return n&&Cs(e,"delete",t,void 0),o}function hf(){const t=Me(this),e=t.size!==0,i=t.clear();return e&&Cs(t,"clear",void 0,void 0),i}function ba(t,e){return function(s,n){const o=this,r=o.__v_raw,a=Me(r),l=e?ku:t?Cu:$r;return!t&&ni(a,"iterate",Rn),r.forEach((c,d)=>s.call(n,l(c),l(d),o))}}function ya(t,e,i){return function(...s){const n=this.__v_raw,o=Me(n),r=ho(o),a=t==="entries"||t===Symbol.iterator&&r,l=t==="keys"&&r,c=n[t](...s),d=i?ku:e?Cu:$r;return!e&&ni(o,"iterate",l?ld:Rn),{next(){const{value:h,done:v}=c.next();return v?{value:h,done:v}:{value:a?[d(h[0]),d(h[1])]:d(h),done:v}},[Symbol.iterator](){return this}}}}function Ys(t){return function(...e){return t==="delete"?!1:this}}function Vk(){const t={get(o){return ga(this,o)},get size(){return va(this)},has:ma,add:cf,set:df,delete:uf,clear:hf,forEach:ba(!1,!1)},e={get(o){return ga(this,o,!1,!0)},get size(){return va(this)},has:ma,add:cf,set:df,delete:uf,clear:hf,forEach:ba(!1,!0)},i={get(o){return ga(this,o,!0)},get size(){return va(this,!0)},has(o){return ma.call(this,o,!0)},add:Ys("add"),set:Ys("set"),delete:Ys("delete"),clear:Ys("clear"),forEach:ba(!0,!1)},s={get(o){return ga(this,o,!0,!0)},get size(){return va(this,!0)},has(o){return ma.call(this,o,!0)},add:Ys("add"),set:Ys("set"),delete:Ys("delete"),clear:Ys("clear"),forEach:ba(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{t[o]=ya(o,!1,!1),i[o]=ya(o,!0,!1),e[o]=ya(o,!1,!0),s[o]=ya(o,!0,!0)}),[t,i,e,s]}const[Hk,Nk,zk,Bk]=Vk();function _u(t,e){const i=e?t?Bk:zk:t?Nk:Hk;return(s,n,o)=>n==="__v_isReactive"?!t:n==="__v_isReadonly"?t:n==="__v_raw"?s:Reflect.get(Ae(i,n)&&n in s?i:s,n,o)}const jk={get:_u(!1,!1)},Yk={get:_u(!1,!0)},Uk={get:_u(!0,!1)},cm=new WeakMap,dm=new WeakMap,um=new WeakMap,Wk=new WeakMap;function Gk(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qk(t){return t.__v_skip||!Object.isExtensible(t)?0:Gk(dk(t))}function Po(t){return Co(t)?t:Su(t,!1,lm,jk,cm)}function Zk(t){return Su(t,!1,Mk,Yk,dm)}function hm(t){return Su(t,!0,Pk,Uk,um)}function Su(t,e,i,s,n){if(!ut(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=n.get(t);if(o)return o;const r=qk(t);if(r===0)return t;const a=new Proxy(t,r===2?s:i);return n.set(t,a),a}function Qs(t){return Co(t)?Qs(t.__v_raw):!!(t&&t.__v_isReactive)}function Co(t){return!!(t&&t.__v_isReadonly)}function Ua(t){return!!(t&&t.__v_isShallow)}function fm(t){return Qs(t)||Co(t)}function Me(t){const e=t&&t.__v_raw;return e?Me(e):t}function jl(t){return ja(t,"__v_skip",!0),t}const $r=t=>ut(t)?Po(t):t,Cu=t=>ut(t)?hm(t):t;function pm(t){Xs&&Yi&&(t=Me(t),om(t.dep||(t.dep=xu())))}function gm(t,e){t=Me(t);const i=t.dep;i&&cd(i)}function yt(t){return!!(t&&t.__v_isRef===!0)}function it(t){return Xk(t,!1)}function Xk(t,e){return yt(t)?t:new Qk(t,e)}class Qk{constructor(e,i){this.__v_isShallow=i,this.dep=void 0,this.__v_isRef=!0,this._rawValue=i?e:Me(e),this._value=i?e:$r(e)}get value(){return pm(this),this._value}set value(e){const i=this.__v_isShallow||Ua(e)||Co(e);e=i?e:Me(e),wr(e,this._rawValue)&&(this._rawValue=e,this._value=i?e:$r(e),gm(this))}}function we(t){return yt(t)?t.value:t}const Jk={get:(t,e,i)=>we(Reflect.get(t,e,i)),set:(t,e,i,s)=>{const n=t[e];return yt(n)&&!yt(i)?(n.value=i,!0):Reflect.set(t,e,i,s)}};function mm(t){return Qs(t)?t:new Proxy(t,Jk)}function Kk(t){const e=fe(t)?new Array(t.length):{};for(const i in t)e[i]=t_(t,i);return e}class e_{constructor(e,i,s){this._object=e,this._key=i,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return _k(Me(this._object),this._key)}}function t_(t,e,i){const s=t[e];return yt(s)?s:new e_(t,e,i)}class i_{constructor(e,i,s,n){this._setter=i,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new wu(e,()=>{this._dirty||(this._dirty=!0,gm(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!n,this.__v_isReadonly=s}get value(){const e=Me(this);return pm(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function s_(t,e,i=!1){let s,n;const o=$e(t);return o?(s=t,n=Gi):(s=t.get,n=t.set),new i_(s,n,o||!n,i)}function Js(t,e,i,s){let n;try{n=s?t(...s):t()}catch(o){Yl(o,e,i)}return n}function qi(t,e,i,s){if($e(t)){const o=Js(t,e,i,s);return o&&qg(o)&&o.catch(r=>{Yl(r,e,i)}),o}const n=[];for(let o=0;o<t.length;o++)n.push(qi(t[o],e,i,s));return n}function Yl(t,e,i,s=!0){const n=e?e.vnode:null;if(e){let o=e.parent;const r=e.proxy,a=i;for(;o;){const c=o.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](t,r,a)===!1)return}o=o.parent}const l=e.appContext.config.errorHandler;if(l){Js(l,null,10,[t,r,a]);return}}n_(t,i,n,s)}function n_(t,e,i,s=!0){console.error(t)}let kr=!1,dd=!1;const Pt=[];let rs=0;const fo=[];let vs=null,Sn=0;const vm=Promise.resolve();let Iu=null;function bm(t){const e=Iu||vm;return t?e.then(this?t.bind(this):t):e}function o_(t){let e=rs+1,i=Pt.length;for(;e<i;){const s=e+i>>>1;_r(Pt[s])<t?e=s+1:i=s}return e}function Tu(t){(!Pt.length||!Pt.includes(t,kr&&t.allowRecurse?rs+1:rs))&&(t.id==null?Pt.push(t):Pt.splice(o_(t.id),0,t),ym())}function ym(){!kr&&!dd&&(dd=!0,Iu=vm.then(wm))}function r_(t){const e=Pt.indexOf(t);e>rs&&Pt.splice(e,1)}function a_(t){fe(t)?fo.push(...t):(!vs||!vs.includes(t,t.allowRecurse?Sn+1:Sn))&&fo.push(t),ym()}function ff(t,e=kr?rs+1:0){for(;e<Pt.length;e++){const i=Pt[e];i&&i.pre&&(Pt.splice(e,1),e--,i())}}function xm(t){if(fo.length){const e=[...new Set(fo)];if(fo.length=0,vs){vs.push(...e);return}for(vs=e,vs.sort((i,s)=>_r(i)-_r(s)),Sn=0;Sn<vs.length;Sn++)vs[Sn]();vs=null,Sn=0}}const _r=t=>t.id==null?1/0:t.id,l_=(t,e)=>{const i=_r(t)-_r(e);if(i===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return i};function wm(t){dd=!1,kr=!0,Pt.sort(l_);const e=Gi;try{for(rs=0;rs<Pt.length;rs++){const i=Pt[rs];i&&i.active!==!1&&Js(i,null,14)}}finally{rs=0,Pt.length=0,xm(),kr=!1,Iu=null,(Pt.length||fo.length)&&wm()}}function c_(t,e,...i){if(t.isUnmounted)return;const s=t.vnode.props||tt;let n=i;const o=e.startsWith("update:"),r=o&&e.slice(7);if(r&&r in s){const d=`${r==="modelValue"?"model":r}Modifiers`,{number:h,trim:v}=s[d]||tt;v&&(n=i.map(w=>It(w)?w.trim():w)),h&&(n=i.map(fk))}let a,l=s[a=Pc(e)]||s[a=Pc(ls(e))];!l&&o&&(l=s[a=Pc(Wn(e))]),l&&qi(l,t,6,n);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,qi(c,t,6,n)}}function $m(t,e,i=!1){const s=e.emitsCache,n=s.get(t);if(n!==void 0)return n;const o=t.emits;let r={},a=!1;if(!$e(t)){const l=c=>{const d=$m(c,e,!0);d&&(a=!0,Ot(r,d))};!i&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!o&&!a?(ut(t)&&s.set(t,null),null):(fe(o)?o.forEach(l=>r[l]=null):Ot(r,o),ut(t)&&s.set(t,r),r)}function Ul(t,e){return!t||!Vl(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ae(t,e[0].toLowerCase()+e.slice(1))||Ae(t,Wn(e))||Ae(t,e))}let Et=null,Wl=null;function Wa(t){const e=Et;return Et=t,Wl=t&&t.type.__scopeId||null,e}function Gl(t){Wl=t}function ql(){Wl=null}function M(t,e=Et,i){if(!e||t._n)return t;const s=(...n)=>{s._d&&_f(-1);const o=Wa(e);let r;try{r=t(...n)}finally{Wa(o),s._d&&_f(1)}return r};return s._n=!0,s._c=!0,s._d=!0,s}function Vc(t){const{type:e,vnode:i,proxy:s,withProxy:n,props:o,propsOptions:[r],slots:a,attrs:l,emit:c,render:d,renderCache:h,data:v,setupState:w,ctx:F,inheritAttrs:$}=t;let T,W;const Z=Wa(t);try{if(i.shapeFlag&4){const J=n||s;T=os(d.call(J,J,h,o,w,v,F)),W=l}else{const J=e;T=os(J.length>1?J(o,{attrs:l,slots:a,emit:c}):J(o,null)),W=e.props?l:d_(l)}}catch(J){ar.length=0,Yl(J,t,1),T=I(cn)}let ge=T;if(W&&$!==!1){const J=Object.keys(W),{shapeFlag:Ce}=ge;J.length&&Ce&7&&(r&&J.some(mu)&&(W=u_(W,r)),ge=Vn(ge,W))}return i.dirs&&(ge=Vn(ge),ge.dirs=ge.dirs?ge.dirs.concat(i.dirs):i.dirs),i.transition&&(ge.transition=i.transition),T=ge,Wa(Z),T}const d_=t=>{let e;for(const i in t)(i==="class"||i==="style"||Vl(i))&&((e||(e={}))[i]=t[i]);return e},u_=(t,e)=>{const i={};for(const s in t)(!mu(s)||!(s.slice(9)in e))&&(i[s]=t[s]);return i};function h_(t,e,i){const{props:s,children:n,component:o}=t,{props:r,children:a,patchFlag:l}=e,c=o.emitsOptions;if(e.dirs||e.transition)return!0;if(i&&l>=0){if(l&1024)return!0;if(l&16)return s?pf(s,r,c):!!r;if(l&8){const d=e.dynamicProps;for(let h=0;h<d.length;h++){const v=d[h];if(r[v]!==s[v]&&!Ul(c,v))return!0}}}else return(n||a)&&(!a||!a.$stable)?!0:s===r?!1:s?r?pf(s,r,c):!0:!!r;return!1}function pf(t,e,i){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let n=0;n<s.length;n++){const o=s[n];if(e[o]!==t[o]&&!Ul(i,o))return!0}return!1}function f_({vnode:t,parent:e},i){for(;e&&e.subTree===t;)(t=e.vnode).el=i,e=e.parent}const p_=t=>t.__isSuspense;function g_(t,e){e&&e.pendingBranch?fe(t)?e.effects.push(...t):e.effects.push(t):a_(t)}function km(t,e){return Fu(t,null,e)}const xa={};function Ks(t,e,i){return Fu(t,e,i)}function Fu(t,e,{immediate:i,deep:s,flush:n,onTrack:o,onTrigger:r}=tt){var a;const l=tm()===((a=Rt)==null?void 0:a.scope)?Rt:null;let c,d=!1,h=!1;if(yt(t)?(c=()=>t.value,d=Ua(t)):Qs(t)?(c=()=>t,s=!0):fe(t)?(h=!0,d=t.some(J=>Qs(J)||Ua(J)),c=()=>t.map(J=>{if(yt(J))return J.value;if(Qs(J))return In(J);if($e(J))return Js(J,l,2)})):$e(t)?e?c=()=>Js(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return v&&v(),qi(t,l,3,[w])}:c=Gi,e&&s){const J=c;c=()=>In(J())}let v,w=J=>{v=Z.onStop=()=>{Js(J,l,4)}},F;if(Ir)if(w=Gi,e?i&&qi(e,l,3,[c(),h?[]:void 0,w]):c(),n==="sync"){const J=rS();F=J.__watcherHandles||(J.__watcherHandles=[])}else return Gi;let $=h?new Array(t.length).fill(xa):xa;const T=()=>{if(Z.active)if(e){const J=Z.run();(s||d||(h?J.some((Ce,Oe)=>wr(Ce,$[Oe])):wr(J,$)))&&(v&&v(),qi(e,l,3,[J,$===xa?void 0:h&&$[0]===xa?[]:$,w]),$=J)}else Z.run()};T.allowRecurse=!!e;let W;n==="sync"?W=T:n==="post"?W=()=>ei(T,l&&l.suspense):(T.pre=!0,l&&(T.id=l.uid),W=()=>Tu(T));const Z=new wu(c,W);e?i?T():$=Z.run():n==="post"?ei(Z.run.bind(Z),l&&l.suspense):Z.run();const ge=()=>{Z.stop(),l&&l.scope&&vu(l.scope.effects,Z)};return F&&F.push(ge),ge}function m_(t,e,i){const s=this.proxy,n=It(t)?t.includes(".")?_m(s,t):()=>s[t]:t.bind(s,s);let o;$e(e)?o=e:(o=e.handler,i=e);const r=Rt;Io(this);const a=Fu(n,o.bind(s),i);return r?Io(r):On(),a}function _m(t,e){const i=e.split(".");return()=>{let s=t;for(let n=0;n<i.length&&s;n++)s=s[i[n]];return s}}function In(t,e){if(!ut(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),yt(t))In(t.value,e);else if(fe(t))for(let i=0;i<t.length;i++)In(t[i],e);else if(Gg(t)||ho(t))t.forEach(i=>{In(i,e)});else if(Xg(t))for(const i in t)In(t[i],e);return t}function Mo(t,e){const i=Et;if(i===null)return t;const s=Kl(i)||i.proxy,n=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[r,a,l,c=tt]=e[o];r&&($e(r)&&(r={mounted:r,updated:r}),r.deep&&In(a),n.push({dir:r,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function wn(t,e,i,s){const n=t.dirs,o=e&&e.dirs;for(let r=0;r<n.length;r++){const a=n[r];o&&(a.oldValue=o[r].value);let l=a.dir[s];l&&(Lo(),qi(l,i,8,[t.el,a,t,e]),Ao())}}function ve(t,e){return $e(t)?(()=>Ot({name:t.name},e,{setup:t}))():t}const or=t=>!!t.type.__asyncLoader,Sm=t=>t.type.__isKeepAlive;function v_(t,e){Cm(t,"a",e)}function b_(t,e){Cm(t,"da",e)}function Cm(t,e,i=Rt){const s=t.__wdc||(t.__wdc=()=>{let n=i;for(;n;){if(n.isDeactivated)return;n=n.parent}return t()});if(Zl(e,s,i),i){let n=i.parent;for(;n&&n.parent;)Sm(n.parent.vnode)&&y_(s,e,i,n),n=n.parent}}function y_(t,e,i,s){const n=Zl(e,t,s,!0);yi(()=>{vu(s[e],n)},i)}function Zl(t,e,i=Rt,s=!1){if(i){const n=i[t]||(i[t]=[]),o=e.__weh||(e.__weh=(...r)=>{if(i.isUnmounted)return;Lo(),Io(i);const a=qi(e,i,t,r);return On(),Ao(),a});return s?n.unshift(o):n.push(o),o}}const Ms=t=>(e,i=Rt)=>(!Ir||t==="sp")&&Zl(t,(...s)=>e(...s),i),Im=Ms("bm"),Lt=Ms("m"),x_=Ms("bu"),w_=Ms("u"),Xl=Ms("bum"),yi=Ms("um"),$_=Ms("sp"),k_=Ms("rtg"),__=Ms("rtc");function S_(t,e=Rt){Zl("ec",t,e)}const Tm="components";function ce(t,e){return I_(Tm,t,!0,e)||t}const C_=Symbol.for("v-ndc");function I_(t,e,i=!0,s=!1){const n=Et||Rt;if(n){const o=n.type;if(t===Tm){const a=sS(o,!1);if(a&&(a===e||a===ls(e)||a===zl(ls(e))))return o}const r=gf(n[t]||o[t],e)||gf(n.appContext[t],e);return!r&&s?o:r}}function gf(t,e){return t&&(t[e]||t[ls(e)]||t[zl(ls(e))])}function Gn(t,e,i,s){let n;const o=i&&i[s];if(fe(t)||It(t)){n=new Array(t.length);for(let r=0,a=t.length;r<a;r++)n[r]=e(t[r],r,void 0,o&&o[r])}else if(typeof t=="number"){n=new Array(t);for(let r=0;r<t;r++)n[r]=e(r+1,r,void 0,o&&o[r])}else if(ut(t))if(t[Symbol.iterator])n=Array.from(t,(r,a)=>e(r,a,void 0,o&&o[a]));else{const r=Object.keys(t);n=new Array(r.length);for(let a=0,l=r.length;a<l;a++){const c=r[a];n[a]=e(t[c],c,a,o&&o[a])}}else n=[];return i&&(i[s]=n),n}function Qi(t,e,i={},s,n){if(Et.isCE||Et.parent&&or(Et.parent)&&Et.parent.isCE)return e!=="default"&&(i.name=e),I("slot",i,s&&s());let o=t[e];o&&o._c&&(o._d=!1),X();const r=o&&Fm(o(i)),a=We(ft,{key:i.key||r&&r.key||`_${e}`},r||(s?s():[]),r&&t._===1?64:-2);return!n&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),o&&o._c&&(o._d=!0),a}function Fm(t){return t.some(e=>qa(e)?!(e.type===cn||e.type===ft&&!Fm(e.children)):!0)?t:null}const ud=t=>t?Nm(t)?Kl(t)||t.proxy:ud(t.parent):null,rr=Ot(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ud(t.parent),$root:t=>ud(t.root),$emit:t=>t.emit,$options:t=>Du(t),$forceUpdate:t=>t.f||(t.f=()=>Tu(t.update)),$nextTick:t=>t.n||(t.n=bm.bind(t.proxy)),$watch:t=>m_.bind(t)}),Hc=(t,e)=>t!==tt&&!t.__isScriptSetup&&Ae(t,e),T_={get({_:t},e){const{ctx:i,setupState:s,data:n,props:o,accessCache:r,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const w=r[e];if(w!==void 0)switch(w){case 1:return s[e];case 2:return n[e];case 4:return i[e];case 3:return o[e]}else{if(Hc(s,e))return r[e]=1,s[e];if(n!==tt&&Ae(n,e))return r[e]=2,n[e];if((c=t.propsOptions[0])&&Ae(c,e))return r[e]=3,o[e];if(i!==tt&&Ae(i,e))return r[e]=4,i[e];hd&&(r[e]=0)}}const d=rr[e];let h,v;if(d)return e==="$attrs"&&ni(t,"get",e),d(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(i!==tt&&Ae(i,e))return r[e]=4,i[e];if(v=l.config.globalProperties,Ae(v,e))return v[e]},set({_:t},e,i){const{data:s,setupState:n,ctx:o}=t;return Hc(n,e)?(n[e]=i,!0):s!==tt&&Ae(s,e)?(s[e]=i,!0):Ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=i,!0)},has({_:{data:t,setupState:e,accessCache:i,ctx:s,appContext:n,propsOptions:o}},r){let a;return!!i[r]||t!==tt&&Ae(t,r)||Hc(e,r)||(a=o[0])&&Ae(a,r)||Ae(s,r)||Ae(rr,r)||Ae(n.config.globalProperties,r)},defineProperty(t,e,i){return i.get!=null?t._.accessCache[e]=0:Ae(i,"value")&&this.set(t,e,i.value,null),Reflect.defineProperty(t,e,i)}};function mf(t){return fe(t)?t.reduce((e,i)=>(e[i]=null,e),{}):t}let hd=!0;function F_(t){const e=Du(t),i=t.proxy,s=t.ctx;hd=!1,e.beforeCreate&&vf(e.beforeCreate,t,"bc");const{data:n,computed:o,methods:r,watch:a,provide:l,inject:c,created:d,beforeMount:h,mounted:v,beforeUpdate:w,updated:F,activated:$,deactivated:T,beforeDestroy:W,beforeUnmount:Z,destroyed:ge,unmounted:J,render:Ce,renderTracked:Oe,renderTriggered:D,errorCaptured:ke,serverPrefetch:Ee,expose:at,inheritAttrs:_t,components:jt,directives:Ns,filters:vn}=e;if(c&&D_(c,s,null),r)for(const Xe in r){const He=r[Xe];$e(He)&&(s[Xe]=He.bind(i))}if(n){const Xe=n.call(i,i);ut(Xe)&&(t.data=Po(Xe))}if(hd=!0,o)for(const Xe in o){const He=o[Xe],$i=$e(He)?He.bind(i,i):$e(He.get)?He.get.bind(i,i):Gi,Vi=!$e(He)&&$e(He.set)?He.set.bind(i):Gi,li=Dt({get:$i,set:Vi});Object.defineProperty(s,Xe,{enumerable:!0,configurable:!0,get:()=>li.value,set:Jt=>li.value=Jt})}if(a)for(const Xe in a)Dm(a[Xe],s,i,Xe);if(l){const Xe=$e(l)?l.call(i):l;Reflect.ownKeys(Xe).forEach(He=>{pd(He,Xe[He])})}d&&vf(d,t,"c");function Ve(Xe,He){fe(He)?He.forEach($i=>Xe($i.bind(i))):He&&Xe(He.bind(i))}if(Ve(Im,h),Ve(Lt,v),Ve(x_,w),Ve(w_,F),Ve(v_,$),Ve(b_,T),Ve(S_,ke),Ve(__,Oe),Ve(k_,D),Ve(Xl,Z),Ve(yi,J),Ve($_,Ee),fe(at))if(at.length){const Xe=t.exposed||(t.exposed={});at.forEach(He=>{Object.defineProperty(Xe,He,{get:()=>i[He],set:$i=>i[He]=$i})})}else t.exposed||(t.exposed={});Ce&&t.render===Gi&&(t.render=Ce),_t!=null&&(t.inheritAttrs=_t),jt&&(t.components=jt),Ns&&(t.directives=Ns)}function D_(t,e,i=Gi){fe(t)&&(t=fd(t));for(const s in t){const n=t[s];let o;ut(n)?"default"in n?o=en(n.from||s,n.default,!0):o=en(n.from||s):o=en(n),yt(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):e[s]=o}}function vf(t,e,i){qi(fe(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,i)}function Dm(t,e,i,s){const n=s.includes(".")?_m(i,s):()=>i[s];if(It(t)){const o=e[t];$e(o)&&Ks(n,o)}else if($e(t))Ks(n,t.bind(i));else if(ut(t))if(fe(t))t.forEach(o=>Dm(o,e,i,s));else{const o=$e(t.handler)?t.handler.bind(i):e[t.handler];$e(o)&&Ks(n,o,t)}}function Du(t){const e=t.type,{mixins:i,extends:s}=e,{mixins:n,optionsCache:o,config:{optionMergeStrategies:r}}=t.appContext,a=o.get(e);let l;return a?l=a:!n.length&&!i&&!s?l=e:(l={},n.length&&n.forEach(c=>Ga(l,c,r,!0)),Ga(l,e,r)),ut(e)&&o.set(e,l),l}function Ga(t,e,i,s=!1){const{mixins:n,extends:o}=e;o&&Ga(t,o,i,!0),n&&n.forEach(r=>Ga(t,r,i,!0));for(const r in e)if(!(s&&r==="expose")){const a=R_[r]||i&&i[r];t[r]=a?a(t[r],e[r]):e[r]}return t}const R_={data:bf,props:yf,emits:yf,methods:Ko,computed:Ko,beforeCreate:Yt,created:Yt,beforeMount:Yt,mounted:Yt,beforeUpdate:Yt,updated:Yt,beforeDestroy:Yt,beforeUnmount:Yt,destroyed:Yt,unmounted:Yt,activated:Yt,deactivated:Yt,errorCaptured:Yt,serverPrefetch:Yt,components:Ko,directives:Ko,watch:E_,provide:bf,inject:O_};function bf(t,e){return e?t?function(){return Ot($e(t)?t.call(this,this):t,$e(e)?e.call(this,this):e)}:e:t}function O_(t,e){return Ko(fd(t),fd(e))}function fd(t){if(fe(t)){const e={};for(let i=0;i<t.length;i++)e[t[i]]=t[i];return e}return t}function Yt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ko(t,e){return t?Ot(Object.create(null),t,e):e}function yf(t,e){return t?fe(t)&&fe(e)?[...new Set([...t,...e])]:Ot(Object.create(null),mf(t),mf(e??{})):e}function E_(t,e){if(!t)return e;if(!e)return t;const i=Ot(Object.create(null),t);for(const s in e)i[s]=Yt(t[s],e[s]);return i}function Rm(){return{app:null,config:{isNativeTag:ak,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let L_=0;function A_(t,e){return function(s,n=null){$e(s)||(s=Ot({},s)),n!=null&&!ut(n)&&(n=null);const o=Rm(),r=new Set;let a=!1;const l=o.app={_uid:L_++,_component:s,_props:n,_container:null,_context:o,_instance:null,version:aS,get config(){return o.config},set config(c){},use(c,...d){return r.has(c)||(c&&$e(c.install)?(r.add(c),c.install(l,...d)):$e(c)&&(r.add(c),c(l,...d))),l},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),l},component(c,d){return d?(o.components[c]=d,l):o.components[c]},directive(c,d){return d?(o.directives[c]=d,l):o.directives[c]},mount(c,d,h){if(!a){const v=I(s,n);return v.appContext=o,d&&e?e(v,c):t(v,c,h),a=!0,l._container=c,c.__vue_app__=l,Kl(v.component)||v.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,d){return o.provides[c]=d,l},runWithContext(c){Sr=l;try{return c()}finally{Sr=null}}};return l}}let Sr=null;function pd(t,e){if(Rt){let i=Rt.provides;const s=Rt.parent&&Rt.parent.provides;s===i&&(i=Rt.provides=Object.create(s)),i[t]=e}}function en(t,e,i=!1){const s=Rt||Et;if(s||Sr){const n=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Sr._context.provides;if(n&&t in n)return n[t];if(arguments.length>1)return i&&$e(e)?e.call(s&&s.proxy):e}}function P_(){return!!(Rt||Et||Sr)}function M_(t,e,i,s=!1){const n={},o={};ja(o,Jl,1),t.propsDefaults=Object.create(null),Om(t,e,n,o);for(const r in t.propsOptions[0])r in n||(n[r]=void 0);i?t.props=s?n:Zk(n):t.type.props?t.props=n:t.props=o,t.attrs=o}function V_(t,e,i,s){const{props:n,attrs:o,vnode:{patchFlag:r}}=t,a=Me(n),[l]=t.propsOptions;let c=!1;if((s||r>0)&&!(r&16)){if(r&8){const d=t.vnode.dynamicProps;for(let h=0;h<d.length;h++){let v=d[h];if(Ul(t.emitsOptions,v))continue;const w=e[v];if(l)if(Ae(o,v))w!==o[v]&&(o[v]=w,c=!0);else{const F=ls(v);n[F]=gd(l,a,F,w,t,!1)}else w!==o[v]&&(o[v]=w,c=!0)}}}else{Om(t,e,n,o)&&(c=!0);let d;for(const h in a)(!e||!Ae(e,h)&&((d=Wn(h))===h||!Ae(e,d)))&&(l?i&&(i[h]!==void 0||i[d]!==void 0)&&(n[h]=gd(l,a,h,void 0,t,!0)):delete n[h]);if(o!==a)for(const h in o)(!e||!Ae(e,h))&&(delete o[h],c=!0)}c&&Cs(t,"set","$attrs")}function Om(t,e,i,s){const[n,o]=t.propsOptions;let r=!1,a;if(e)for(let l in e){if(Ta(l))continue;const c=e[l];let d;n&&Ae(n,d=ls(l))?!o||!o.includes(d)?i[d]=c:(a||(a={}))[d]=c:Ul(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,r=!0)}if(o){const l=Me(i),c=a||tt;for(let d=0;d<o.length;d++){const h=o[d];i[h]=gd(n,l,h,c[h],t,!Ae(c,h))}}return r}function gd(t,e,i,s,n,o){const r=t[i];if(r!=null){const a=Ae(r,"default");if(a&&s===void 0){const l=r.default;if(r.type!==Function&&!r.skipFactory&&$e(l)){const{propsDefaults:c}=n;i in c?s=c[i]:(Io(n),s=c[i]=l.call(null,e),On())}else s=l}r[0]&&(o&&!a?s=!1:r[1]&&(s===""||s===Wn(i))&&(s=!0))}return s}function Em(t,e,i=!1){const s=e.propsCache,n=s.get(t);if(n)return n;const o=t.props,r={},a=[];let l=!1;if(!$e(t)){const d=h=>{l=!0;const[v,w]=Em(h,e,!0);Ot(r,v),w&&a.push(...w)};!i&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!o&&!l)return ut(t)&&s.set(t,uo),uo;if(fe(o))for(let d=0;d<o.length;d++){const h=ls(o[d]);xf(h)&&(r[h]=tt)}else if(o)for(const d in o){const h=ls(d);if(xf(h)){const v=o[d],w=r[h]=fe(v)||$e(v)?{type:v}:Ot({},v);if(w){const F=kf(Boolean,w.type),$=kf(String,w.type);w[0]=F>-1,w[1]=$<0||F<$,(F>-1||Ae(w,"default"))&&a.push(h)}}}const c=[r,a];return ut(t)&&s.set(t,c),c}function xf(t){return t[0]!=="$"}function wf(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function $f(t,e){return wf(t)===wf(e)}function kf(t,e){return fe(e)?e.findIndex(i=>$f(i,t)):$e(e)&&$f(e,t)?0:-1}const Lm=t=>t[0]==="_"||t==="$stable",Ru=t=>fe(t)?t.map(os):[os(t)],H_=(t,e,i)=>{if(e._n)return e;const s=M((...n)=>Ru(e(...n)),i);return s._c=!1,s},Am=(t,e,i)=>{const s=t._ctx;for(const n in t){if(Lm(n))continue;const o=t[n];if($e(o))e[n]=H_(n,o,s);else if(o!=null){const r=Ru(o);e[n]=()=>r}}},Pm=(t,e)=>{const i=Ru(e);t.slots.default=()=>i},N_=(t,e)=>{if(t.vnode.shapeFlag&32){const i=e._;i?(t.slots=Me(e),ja(e,"_",i)):Am(e,t.slots={})}else t.slots={},e&&Pm(t,e);ja(t.slots,Jl,1)},z_=(t,e,i)=>{const{vnode:s,slots:n}=t;let o=!0,r=tt;if(s.shapeFlag&32){const a=e._;a?i&&a===1?o=!1:(Ot(n,e),!i&&a===1&&delete n._):(o=!e.$stable,Am(e,n)),r=e}else e&&(Pm(t,e),r={default:1});if(o)for(const a in n)!Lm(a)&&!(a in r)&&delete n[a]};function md(t,e,i,s,n=!1){if(fe(t)){t.forEach((v,w)=>md(v,e&&(fe(e)?e[w]:e),i,s,n));return}if(or(s)&&!n)return;const o=s.shapeFlag&4?Kl(s.component)||s.component.proxy:s.el,r=n?null:o,{i:a,r:l}=t,c=e&&e.r,d=a.refs===tt?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(It(c)?(d[c]=null,Ae(h,c)&&(h[c]=null)):yt(c)&&(c.value=null)),$e(l))Js(l,a,12,[r,d]);else{const v=It(l),w=yt(l);if(v||w){const F=()=>{if(t.f){const $=v?Ae(h,l)?h[l]:d[l]:l.value;n?fe($)&&vu($,o):fe($)?$.includes(o)||$.push(o):v?(d[l]=[o],Ae(h,l)&&(h[l]=d[l])):(l.value=[o],t.k&&(d[t.k]=l.value))}else v?(d[l]=r,Ae(h,l)&&(h[l]=r)):w&&(l.value=r,t.k&&(d[t.k]=r))};r?(F.id=-1,ei(F,i)):F()}}}const ei=g_;function B_(t){return j_(t)}function j_(t,e){const i=rd();i.__VUE__=!0;const{insert:s,remove:n,patchProp:o,createElement:r,createText:a,createComment:l,setText:c,setElementText:d,parentNode:h,nextSibling:v,setScopeId:w=Gi,insertStaticContent:F}=t,$=(g,b,k,O=null,R=null,H=null,G=!1,V=null,B=!!b.dynamicChildren)=>{if(g===b)return;g&&!qo(g,b)&&(O=ki(g),Jt(g,R,H,!0),g=null),b.patchFlag===-2&&(B=!1,b.dynamicChildren=null);const{type:L,ref:Q,shapeFlag:N}=b;switch(L){case Ql:T(g,b,k,O);break;case cn:W(g,b,k,O);break;case Nc:g==null&&Z(b,k,O,G);break;case ft:jt(g,b,k,O,R,H,G,V,B);break;default:N&1?Ce(g,b,k,O,R,H,G,V,B):N&6?Ns(g,b,k,O,R,H,G,V,B):(N&64||N&128)&&L.process(g,b,k,O,R,H,G,V,B,gs)}Q!=null&&R&&md(Q,g&&g.ref,H,b||g,!b)},T=(g,b,k,O)=>{if(g==null)s(b.el=a(b.children),k,O);else{const R=b.el=g.el;b.children!==g.children&&c(R,b.children)}},W=(g,b,k,O)=>{g==null?s(b.el=l(b.children||""),k,O):b.el=g.el},Z=(g,b,k,O)=>{[g.el,g.anchor]=F(g.children,b,k,O,g.el,g.anchor)},ge=({el:g,anchor:b},k,O)=>{let R;for(;g&&g!==b;)R=v(g),s(g,k,O),g=R;s(b,k,O)},J=({el:g,anchor:b})=>{let k;for(;g&&g!==b;)k=v(g),n(g),g=k;n(b)},Ce=(g,b,k,O,R,H,G,V,B)=>{G=G||b.type==="svg",g==null?Oe(b,k,O,R,H,G,V,B):Ee(g,b,R,H,G,V,B)},Oe=(g,b,k,O,R,H,G,V)=>{let B,L;const{type:Q,props:N,shapeFlag:se,transition:ue,dirs:_e}=g;if(B=g.el=r(g.type,H,N&&N.is,N),se&8?d(B,g.children):se&16&&ke(g.children,B,null,O,R,H&&Q!=="foreignObject",G,V),_e&&wn(g,null,O,"created"),D(B,g,g.scopeId,G,O),N){for(const y in N)y!=="value"&&!Ta(y)&&o(B,y,null,N[y],H,g.children,O,R,Ni);"value"in N&&o(B,"value",null,N.value),(L=N.onVnodeBeforeMount)&&ss(L,O,g)}_e&&wn(g,null,O,"beforeMount");const p=(!R||R&&!R.pendingBranch)&&ue&&!ue.persisted;p&&ue.beforeEnter(B),s(B,b,k),((L=N&&N.onVnodeMounted)||p||_e)&&ei(()=>{L&&ss(L,O,g),p&&ue.enter(B),_e&&wn(g,null,O,"mounted")},R)},D=(g,b,k,O,R)=>{if(k&&w(g,k),O)for(let H=0;H<O.length;H++)w(g,O[H]);if(R){let H=R.subTree;if(b===H){const G=R.vnode;D(g,G,G.scopeId,G.slotScopeIds,R.parent)}}},ke=(g,b,k,O,R,H,G,V,B=0)=>{for(let L=B;L<g.length;L++){const Q=g[L]=V?Ws(g[L]):os(g[L]);$(null,Q,b,k,O,R,H,G,V)}},Ee=(g,b,k,O,R,H,G)=>{const V=b.el=g.el;let{patchFlag:B,dynamicChildren:L,dirs:Q}=b;B|=g.patchFlag&16;const N=g.props||tt,se=b.props||tt;let ue;k&&$n(k,!1),(ue=se.onVnodeBeforeUpdate)&&ss(ue,k,b,g),Q&&wn(b,g,k,"beforeUpdate"),k&&$n(k,!0);const _e=R&&b.type!=="foreignObject";if(L?at(g.dynamicChildren,L,V,k,O,_e,H):G||He(g,b,V,null,k,O,_e,H,!1),B>0){if(B&16)_t(V,b,N,se,k,O,R);else if(B&2&&N.class!==se.class&&o(V,"class",null,se.class,R),B&4&&o(V,"style",N.style,se.style,R),B&8){const p=b.dynamicProps;for(let y=0;y<p.length;y++){const C=p[y],j=N[C],oe=se[C];(oe!==j||C==="value")&&o(V,C,j,oe,R,g.children,k,O,Ni)}}B&1&&g.children!==b.children&&d(V,b.children)}else!G&&L==null&&_t(V,b,N,se,k,O,R);((ue=se.onVnodeUpdated)||Q)&&ei(()=>{ue&&ss(ue,k,b,g),Q&&wn(b,g,k,"updated")},O)},at=(g,b,k,O,R,H,G)=>{for(let V=0;V<b.length;V++){const B=g[V],L=b[V],Q=B.el&&(B.type===ft||!qo(B,L)||B.shapeFlag&70)?h(B.el):k;$(B,L,Q,null,O,R,H,G,!0)}},_t=(g,b,k,O,R,H,G)=>{if(k!==O){if(k!==tt)for(const V in k)!Ta(V)&&!(V in O)&&o(g,V,k[V],null,G,b.children,R,H,Ni);for(const V in O){if(Ta(V))continue;const B=O[V],L=k[V];B!==L&&V!=="value"&&o(g,V,L,B,G,b.children,R,H,Ni)}"value"in O&&o(g,"value",k.value,O.value)}},jt=(g,b,k,O,R,H,G,V,B)=>{const L=b.el=g?g.el:a(""),Q=b.anchor=g?g.anchor:a("");let{patchFlag:N,dynamicChildren:se,slotScopeIds:ue}=b;ue&&(V=V?V.concat(ue):ue),g==null?(s(L,k,O),s(Q,k,O),ke(b.children,k,Q,R,H,G,V,B)):N>0&&N&64&&se&&g.dynamicChildren?(at(g.dynamicChildren,se,k,R,H,G,V),(b.key!=null||R&&b===R.subTree)&&Mm(g,b,!0)):He(g,b,k,Q,R,H,G,V,B)},Ns=(g,b,k,O,R,H,G,V,B)=>{b.slotScopeIds=V,g==null?b.shapeFlag&512?R.ctx.activate(b,k,O,G,B):vn(b,k,O,R,H,G,B):Mi(g,b,B)},vn=(g,b,k,O,R,H,G)=>{const V=g.component=J_(g,O,R);if(Sm(g)&&(V.ctx.renderer=gs),K_(V),V.asyncDep){if(R&&R.registerDep(V,Ve),!g.el){const B=V.subTree=I(cn);W(null,B,b,k)}return}Ve(V,g,b,k,R,H,G)},Mi=(g,b,k)=>{const O=b.component=g.component;if(h_(g,b,k))if(O.asyncDep&&!O.asyncResolved){Xe(O,b,k);return}else O.next=b,r_(O.update),O.update();else b.el=g.el,O.vnode=b},Ve=(g,b,k,O,R,H,G)=>{const V=()=>{if(g.isMounted){let{next:Q,bu:N,u:se,parent:ue,vnode:_e}=g,p=Q,y;$n(g,!1),Q?(Q.el=_e.el,Xe(g,Q,G)):Q=_e,N&&Mc(N),(y=Q.props&&Q.props.onVnodeBeforeUpdate)&&ss(y,ue,Q,_e),$n(g,!0);const C=Vc(g),j=g.subTree;g.subTree=C,$(j,C,h(j.el),ki(j),g,R,H),Q.el=C.el,p===null&&f_(g,C.el),se&&ei(se,R),(y=Q.props&&Q.props.onVnodeUpdated)&&ei(()=>ss(y,ue,Q,_e),R)}else{let Q;const{el:N,props:se}=b,{bm:ue,m:_e,parent:p}=g,y=or(b);if($n(g,!1),ue&&Mc(ue),!y&&(Q=se&&se.onVnodeBeforeMount)&&ss(Q,p,b),$n(g,!0),N&&Bo){const C=()=>{g.subTree=Vc(g),Bo(N,g.subTree,g,R,null)};y?b.type.__asyncLoader().then(()=>!g.isUnmounted&&C()):C()}else{const C=g.subTree=Vc(g);$(null,C,k,O,g,R,H),b.el=C.el}if(_e&&ei(_e,R),!y&&(Q=se&&se.onVnodeMounted)){const C=b;ei(()=>ss(Q,p,C),R)}(b.shapeFlag&256||p&&or(p.vnode)&&p.vnode.shapeFlag&256)&&g.a&&ei(g.a,R),g.isMounted=!0,b=k=O=null}},B=g.effect=new wu(V,()=>Tu(L),g.scope),L=g.update=()=>B.run();L.id=g.uid,$n(g,!0),L()},Xe=(g,b,k)=>{b.component=g;const O=g.vnode.props;g.vnode=b,g.next=null,V_(g,b.props,O,k),z_(g,b.children,k),Lo(),ff(),Ao()},He=(g,b,k,O,R,H,G,V,B=!1)=>{const L=g&&g.children,Q=g?g.shapeFlag:0,N=b.children,{patchFlag:se,shapeFlag:ue}=b;if(se>0){if(se&128){Vi(L,N,k,O,R,H,G,V,B);return}else if(se&256){$i(L,N,k,O,R,H,G,V,B);return}}ue&8?(Q&16&&Ni(L,R,H),N!==L&&d(k,N)):Q&16?ue&16?Vi(L,N,k,O,R,H,G,V,B):Ni(L,R,H,!0):(Q&8&&d(k,""),ue&16&&ke(N,k,O,R,H,G,V,B))},$i=(g,b,k,O,R,H,G,V,B)=>{g=g||uo,b=b||uo;const L=g.length,Q=b.length,N=Math.min(L,Q);let se;for(se=0;se<N;se++){const ue=b[se]=B?Ws(b[se]):os(b[se]);$(g[se],ue,k,null,R,H,G,V,B)}L>Q?Ni(g,R,H,!0,!1,N):ke(b,k,O,R,H,G,V,B,N)},Vi=(g,b,k,O,R,H,G,V,B)=>{let L=0;const Q=b.length;let N=g.length-1,se=Q-1;for(;L<=N&&L<=se;){const ue=g[L],_e=b[L]=B?Ws(b[L]):os(b[L]);if(qo(ue,_e))$(ue,_e,k,null,R,H,G,V,B);else break;L++}for(;L<=N&&L<=se;){const ue=g[N],_e=b[se]=B?Ws(b[se]):os(b[se]);if(qo(ue,_e))$(ue,_e,k,null,R,H,G,V,B);else break;N--,se--}if(L>N){if(L<=se){const ue=se+1,_e=ue<Q?b[ue].el:O;for(;L<=se;)$(null,b[L]=B?Ws(b[L]):os(b[L]),k,_e,R,H,G,V,B),L++}}else if(L>se)for(;L<=N;)Jt(g[L],R,H,!0),L++;else{const ue=L,_e=L,p=new Map;for(L=_e;L<=se;L++){const he=b[L]=B?Ws(b[L]):os(b[L]);he.key!=null&&p.set(he.key,L)}let y,C=0;const j=se-_e+1;let oe=!1,Ie=0;const ye=new Array(j);for(L=0;L<j;L++)ye[L]=0;for(L=ue;L<=N;L++){const he=g[L];if(C>=j){Jt(he,R,H,!0);continue}let qe;if(he.key!=null)qe=p.get(he.key);else for(y=_e;y<=se;y++)if(ye[y-_e]===0&&qo(he,b[y])){qe=y;break}qe===void 0?Jt(he,R,H,!0):(ye[qe-_e]=L+1,qe>=Ie?Ie=qe:oe=!0,$(he,b[qe],k,null,R,H,G,V,B),C++)}const et=oe?Y_(ye):uo;for(y=et.length-1,L=j-1;L>=0;L--){const he=_e+L,qe=b[he],ci=he+1<Q?b[he+1].el:O;ye[L]===0?$(null,qe,k,ci,R,H,G,V,B):oe&&(y<0||L!==et[y]?li(qe,k,ci,2):y--)}}},li=(g,b,k,O,R=null)=>{const{el:H,type:G,transition:V,children:B,shapeFlag:L}=g;if(L&6){li(g.component.subTree,b,k,O);return}if(L&128){g.suspense.move(b,k,O);return}if(L&64){G.move(g,b,k,gs);return}if(G===ft){s(H,b,k);for(let N=0;N<B.length;N++)li(B[N],b,k,O);s(g.anchor,b,k);return}if(G===Nc){ge(g,b,k);return}if(O!==2&&L&1&&V)if(O===0)V.beforeEnter(H),s(H,b,k),ei(()=>V.enter(H),R);else{const{leave:N,delayLeave:se,afterLeave:ue}=V,_e=()=>s(H,b,k),p=()=>{N(H,()=>{_e(),ue&&ue()})};se?se(H,_e,p):p()}else s(H,b,k)},Jt=(g,b,k,O=!1,R=!1)=>{const{type:H,props:G,ref:V,children:B,dynamicChildren:L,shapeFlag:Q,patchFlag:N,dirs:se}=g;if(V!=null&&md(V,null,k,g,!0),Q&256){b.ctx.deactivate(g);return}const ue=Q&1&&se,_e=!or(g);let p;if(_e&&(p=G&&G.onVnodeBeforeUnmount)&&ss(p,b,g),Q&6)Xr(g.component,k,O);else{if(Q&128){g.suspense.unmount(k,O);return}ue&&wn(g,null,b,"beforeUnmount"),Q&64?g.type.remove(g,b,k,R,gs,O):L&&(H!==ft||N>0&&N&64)?Ni(L,b,k,!1,!0):(H===ft&&N&384||!R&&Q&16)&&Ni(B,b,k),O&&Hi(g)}(_e&&(p=G&&G.onVnodeUnmounted)||ue)&&ei(()=>{p&&ss(p,b,g),ue&&wn(g,null,b,"unmounted")},k)},Hi=g=>{const{type:b,el:k,anchor:O,transition:R}=g;if(b===ft){Zr(k,O);return}if(b===Nc){J(g);return}const H=()=>{n(k),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(g.shapeFlag&1&&R&&!R.persisted){const{leave:G,delayLeave:V}=R,B=()=>G(k,H);V?V(g.el,H,B):B()}else H()},Zr=(g,b)=>{let k;for(;g!==b;)k=v(g),n(g),g=k;n(b)},Xr=(g,b,k)=>{const{bum:O,scope:R,update:H,subTree:G,um:V}=g;O&&Mc(O),R.stop(),H&&(H.active=!1,Jt(G,g,b,k)),V&&ei(V,b),ei(()=>{g.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},Ni=(g,b,k,O=!1,R=!1,H=0)=>{for(let G=H;G<g.length;G++)Jt(g[G],b,k,O,R)},ki=g=>g.shapeFlag&6?ki(g.component.subTree):g.shapeFlag&128?g.suspense.next():v(g.anchor||g.el),Qr=(g,b,k)=>{g==null?b._vnode&&Jt(b._vnode,null,null,!0):$(b._vnode||null,g,b,null,null,null,k),ff(),xm(),b._vnode=g},gs={p:$,um:Jt,m:li,r:Hi,mt:vn,mc:ke,pc:He,pbc:at,n:ki,o:t};let zs,Bo;return e&&([zs,Bo]=e(gs)),{render:Qr,hydrate:zs,createApp:A_(Qr,zs)}}function $n({effect:t,update:e},i){t.allowRecurse=e.allowRecurse=i}function Mm(t,e,i=!1){const s=t.children,n=e.children;if(fe(s)&&fe(n))for(let o=0;o<s.length;o++){const r=s[o];let a=n[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=n[o]=Ws(n[o]),a.el=r.el),i||Mm(r,a)),a.type===Ql&&(a.el=r.el)}}function Y_(t){const e=t.slice(),i=[0];let s,n,o,r,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(n=i[i.length-1],t[n]<c){e[s]=n,i.push(s);continue}for(o=0,r=i.length-1;o<r;)a=o+r>>1,t[i[a]]<c?o=a+1:r=a;c<t[i[o]]&&(o>0&&(e[s]=i[o-1]),i[o]=s)}}for(o=i.length,r=i[o-1];o-- >0;)i[o]=r,r=e[r];return i}const U_=t=>t.__isTeleport,ft=Symbol.for("v-fgt"),Ql=Symbol.for("v-txt"),cn=Symbol.for("v-cmt"),Nc=Symbol.for("v-stc"),ar=[];let Ui=null;function X(t=!1){ar.push(Ui=t?null:[])}function W_(){ar.pop(),Ui=ar[ar.length-1]||null}let Cr=1;function _f(t){Cr+=t}function Vm(t){return t.dynamicChildren=Cr>0?Ui||uo:null,W_(),Cr>0&&Ui&&Ui.push(t),t}function be(t,e,i,s,n,o){return Vm(S(t,e,i,s,n,o,!0))}function We(t,e,i,s,n){return Vm(I(t,e,i,s,n,!0))}function qa(t){return t?t.__v_isVNode===!0:!1}function qo(t,e){return t.type===e.type&&t.key===e.key}const Jl="__vInternal",Hm=({key:t})=>t??null,Fa=({ref:t,ref_key:e,ref_for:i})=>(typeof t=="number"&&(t=""+t),t!=null?It(t)||yt(t)||$e(t)?{i:Et,r:t,k:e,f:!!i}:t:null);function S(t,e=null,i=null,s=0,n=null,o=t===ft?0:1,r=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Hm(e),ref:e&&Fa(e),scopeId:Wl,slotScopeIds:null,children:i,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:Et};return a?(Ou(l,i),o&128&&t.normalize(l)):i&&(l.shapeFlag|=It(i)?8:16),Cr>0&&!r&&Ui&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&Ui.push(l),l}const I=G_;function G_(t,e=null,i=null,s=0,n=null,o=!1){if((!t||t===C_)&&(t=cn),qa(t)){const a=Vn(t,e,!0);return i&&Ou(a,i),Cr>0&&!o&&Ui&&(a.shapeFlag&6?Ui[Ui.indexOf(t)]=a:Ui.push(a)),a.patchFlag|=-2,a}if(nS(t)&&(t=t.__vccOpts),e){e=q_(e);let{class:a,style:l}=e;a&&!It(a)&&(e.class=ii(a)),ut(l)&&(fm(l)&&!fe(l)&&(l=Ot({},l)),e.style=an(l))}const r=It(t)?1:p_(t)?128:U_(t)?64:ut(t)?4:$e(t)?2:0;return S(t,e,i,s,n,r,o,!0)}function q_(t){return t?fm(t)||Jl in t?Ot({},t):t:null}function Vn(t,e,i=!1){const{props:s,ref:n,patchFlag:o,children:r}=t,a=e?Z_(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Hm(a),ref:e&&e.ref?i&&n?fe(n)?n.concat(Fa(e)):[n,Fa(e)]:Fa(e):n,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:r,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ft?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Vn(t.ssContent),ssFallback:t.ssFallback&&Vn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ne(t=" ",e=0){return I(Ql,null,t,e)}function vd(t="",e=!1){return e?(X(),We(cn,null,t)):I(cn,null,t)}function os(t){return t==null||typeof t=="boolean"?I(cn):fe(t)?I(ft,null,t.slice()):typeof t=="object"?Ws(t):I(Ql,null,String(t))}function Ws(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Vn(t)}function Ou(t,e){let i=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(fe(e))i=16;else if(typeof e=="object")if(s&65){const n=e.default;n&&(n._c&&(n._d=!1),Ou(t,n()),n._c&&(n._d=!0));return}else{i=32;const n=e._;!n&&!(Jl in e)?e._ctx=Et:n===3&&Et&&(Et.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $e(e)?(e={default:e,_ctx:Et},i=32):(e=String(e),s&64?(i=16,e=[Ne(e)]):i=8);t.children=e,t.shapeFlag|=i}function Z_(...t){const e={};for(let i=0;i<t.length;i++){const s=t[i];for(const n in s)if(n==="class")e.class!==s.class&&(e.class=ii([e.class,s.class]));else if(n==="style")e.style=an([e.style,s.style]);else if(Vl(n)){const o=e[n],r=s[n];r&&o!==r&&!(fe(o)&&o.includes(r))&&(e[n]=o?[].concat(o,r):r)}else n!==""&&(e[n]=s[n])}return e}function ss(t,e,i,s=null){qi(t,e,7,[i,s])}const X_=Rm();let Q_=0;function J_(t,e,i){const s=t.type,n=(e?e.appContext:t.appContext)||X_,o={uid:Q_++,vnode:t,type:s,parent:e,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,scope:new Kg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(n.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Em(s,n),emitsOptions:$m(s,n),emit:null,emitted:null,propsDefaults:tt,inheritAttrs:s.inheritAttrs,ctx:tt,data:tt,props:tt,attrs:tt,slots:tt,refs:tt,setupState:tt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:i,suspenseId:i?i.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=c_.bind(null,o),t.ce&&t.ce(o),o}let Rt=null,Eu,Qn,Sf="__VUE_INSTANCE_SETTERS__";(Qn=rd()[Sf])||(Qn=rd()[Sf]=[]),Qn.push(t=>Rt=t),Eu=t=>{Qn.length>1?Qn.forEach(e=>e(t)):Qn[0](t)};const Io=t=>{Eu(t),t.scope.on()},On=()=>{Rt&&Rt.scope.off(),Eu(null)};function Nm(t){return t.vnode.shapeFlag&4}let Ir=!1;function K_(t,e=!1){Ir=e;const{props:i,children:s}=t.vnode,n=Nm(t);M_(t,i,n,e),N_(t,s);const o=n?eS(t,e):void 0;return Ir=!1,o}function eS(t,e){const i=t.type;t.accessCache=Object.create(null),t.proxy=jl(new Proxy(t.ctx,T_));const{setup:s}=i;if(s){const n=t.setupContext=s.length>1?iS(t):null;Io(t),Lo();const o=Js(s,t,0,[t.props,n]);if(Ao(),On(),qg(o)){if(o.then(On,On),e)return o.then(r=>{Cf(t,r,e)}).catch(r=>{Yl(r,t,0)});t.asyncDep=o}else Cf(t,o,e)}else zm(t,e)}function Cf(t,e,i){$e(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ut(e)&&(t.setupState=mm(e)),zm(t,i)}let If;function zm(t,e,i){const s=t.type;if(!t.render){if(!e&&If&&!s.render){const n=s.template||Du(t).template;if(n){const{isCustomElement:o,compilerOptions:r}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Ot(Ot({isCustomElement:o,delimiters:a},r),l);s.render=If(n,c)}}t.render=s.render||Gi}Io(t),Lo(),F_(t),Ao(),On()}function tS(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,i){return ni(t,"get","$attrs"),e[i]}}))}function iS(t){const e=i=>{t.exposed=i||{}};return{get attrs(){return tS(t)},slots:t.slots,emit:t.emit,expose:e}}function Kl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(mm(jl(t.exposed)),{get(e,i){if(i in e)return e[i];if(i in rr)return rr[i](t)},has(e,i){return i in e||i in rr}}))}function sS(t,e=!0){return $e(t)?t.displayName||t.name:t.name||e&&t.__name}function nS(t){return $e(t)&&"__vccOpts"in t}const Dt=(t,e)=>s_(t,e,Ir);function Hn(t,e,i){const s=arguments.length;return s===2?ut(e)&&!fe(e)?qa(e)?I(t,null,[e]):I(t,e):I(t,null,e):(s>3?i=Array.prototype.slice.call(arguments,2):s===3&&qa(i)&&(i=[i]),I(t,e,i))}const oS=Symbol.for("v-scx"),rS=()=>en(oS),aS="3.3.4",lS="http://www.w3.org/2000/svg",Cn=typeof document<"u"?document:null,Tf=Cn&&Cn.createElement("template"),cS={insert:(t,e,i)=>{e.insertBefore(t,i||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,i,s)=>{const n=e?Cn.createElementNS(lS,t):Cn.createElement(t,i?{is:i}:void 0);return t==="select"&&s&&s.multiple!=null&&n.setAttribute("multiple",s.multiple),n},createText:t=>Cn.createTextNode(t),createComment:t=>Cn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Cn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,i,s,n,o){const r=i?i.previousSibling:e.lastChild;if(n&&(n===o||n.nextSibling))for(;e.insertBefore(n.cloneNode(!0),i),!(n===o||!(n=n.nextSibling)););else{Tf.innerHTML=s?`<svg>${t}</svg>`:t;const a=Tf.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,i)}return[r?r.nextSibling:e.firstChild,i?i.previousSibling:e.lastChild]}};function dS(t,e,i){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):i?t.setAttribute("class",e):t.className=e}function uS(t,e,i){const s=t.style,n=It(i);if(i&&!n){if(e&&!It(e))for(const o in e)i[o]==null&&bd(s,o,"");for(const o in i)bd(s,o,i[o])}else{const o=s.display;n?e!==i&&(s.cssText=i):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=o)}}const Ff=/\s*!important$/;function bd(t,e,i){if(fe(i))i.forEach(s=>bd(t,e,s));else if(i==null&&(i=""),e.startsWith("--"))t.setProperty(e,i);else{const s=hS(t,e);Ff.test(i)?t.setProperty(Wn(s),i.replace(Ff,""),"important"):t[s]=i}}const Df=["Webkit","Moz","ms"],zc={};function hS(t,e){const i=zc[e];if(i)return i;let s=ls(e);if(s!=="filter"&&s in t)return zc[e]=s;s=zl(s);for(let n=0;n<Df.length;n++){const o=Df[n]+s;if(o in t)return zc[e]=o}return e}const Rf="http://www.w3.org/1999/xlink";function fS(t,e,i,s,n){if(s&&e.startsWith("xlink:"))i==null?t.removeAttributeNS(Rf,e.slice(6,e.length)):t.setAttributeNS(Rf,e,i);else{const o=yk(e);i==null||o&&!Qg(i)?t.removeAttribute(e):t.setAttribute(e,o?"":i)}}function pS(t,e,i,s,n,o,r){if(e==="innerHTML"||e==="textContent"){s&&r(s,n,o),t[e]=i??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=i;const c=a==="OPTION"?t.getAttribute("value"):t.value,d=i??"";c!==d&&(t.value=d),i==null&&t.removeAttribute(e);return}let l=!1;if(i===""||i==null){const c=typeof t[e];c==="boolean"?i=Qg(i):i==null&&c==="string"?(i="",l=!0):c==="number"&&(i=0,l=!0)}try{t[e]=i}catch{}l&&t.removeAttribute(e)}function gS(t,e,i,s){t.addEventListener(e,i,s)}function mS(t,e,i,s){t.removeEventListener(e,i,s)}function vS(t,e,i,s,n=null){const o=t._vei||(t._vei={}),r=o[e];if(s&&r)r.value=s;else{const[a,l]=bS(e);if(s){const c=o[e]=wS(s,n);gS(t,a,c,l)}else r&&(mS(t,a,r,l),o[e]=void 0)}}const Of=/(?:Once|Passive|Capture)$/;function bS(t){let e;if(Of.test(t)){e={};let s;for(;s=t.match(Of);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Wn(t.slice(2)),e]}let Bc=0;const yS=Promise.resolve(),xS=()=>Bc||(yS.then(()=>Bc=0),Bc=Date.now());function wS(t,e){const i=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=i.attached)return;qi($S(s,i.value),e,5,[s])};return i.value=t,i.attached=xS(),i}function $S(t,e){if(fe(e)){const i=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{i.call(t),t._stopped=!0},e.map(s=>n=>!n._stopped&&s&&s(n))}else return e}const Ef=/^on[a-z]/,kS=(t,e,i,s,n=!1,o,r,a,l)=>{e==="class"?dS(t,s,n):e==="style"?uS(t,i,s):Vl(e)?mu(e)||vS(t,e,i,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):_S(t,e,s,n))?pS(t,e,s,o,r,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),fS(t,e,s,n))};function _S(t,e,i,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Ef.test(e)&&$e(i)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ef.test(e)&&It(i)?!1:e in t}const SS={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},CS=(t,e)=>i=>{if(!("key"in i))return;const s=Wn(i.key);if(e.some(n=>n===s||SS[n]===s))return t(i)},Vo={beforeMount(t,{value:e},{transition:i}){t._vod=t.style.display==="none"?"":t.style.display,i&&e?i.beforeEnter(t):Zo(t,e)},mounted(t,{value:e},{transition:i}){i&&e&&i.enter(t)},updated(t,{value:e,oldValue:i},{transition:s}){!e!=!i&&(s?e?(s.beforeEnter(t),Zo(t,!0),s.enter(t)):s.leave(t,()=>{Zo(t,!1)}):Zo(t,e))},beforeUnmount(t,{value:e}){Zo(t,e)}};function Zo(t,e){t.style.display=e?t._vod:"none"}const IS=Ot({patchProp:kS},cS);let Lf;function TS(){return Lf||(Lf=B_(IS))}const ec=(...t)=>{const e=TS().createApp(...t),{mount:i}=e;return e.mount=s=>{const n=FS(s);if(!n)return;const o=e._component;!$e(o)&&!o.render&&!o.template&&(o.template=n.innerHTML),n.innerHTML="";const r=i(n,!1,n instanceof SVGElement);return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),r},e};function FS(t){return It(t)?document.querySelector(t):t}const DS=ve({__name:"ExpandLayout",setup(t){const e=it(!1),i=s=>{e.value=s};return(s,n)=>(X(),be("div",null,[Qi(s.$slots,"actions",{isExpanded:e.value,setIsExpanded:i}),Qi(s.$slots,"expanded-content",{isExpanded:e.value,setIsExpanded:i})]))}}),xi=(t,e)=>{const i=t.__vccOpts||t;for(const[s,n]of e)i[s]=n;return i},RS={},OS={class:"fixed"};function ES(t,e){return X(),be("div",OS,[Qi(t.$slots,"default")])}const LS=xi(RS,[["render",ES]]),AS={},PS={class:"flex"};function MS(t,e){return X(),be("div",PS,[Qi(t.$slots,"default")])}const VS=xi(AS,[["render",MS]]),HS={},NS={class:"relative p-2 h-full w-full"};function zS(t,e){return X(),be("div",NS,[Qi(t.$slots,"default")])}const BS=xi(HS,[["render",zS]]),jS={},YS={class:"sticky top-0"};function US(t,e){return X(),be("div",YS,[Qi(t.$slots,"default")])}const WS=xi(jS,[["render",US]]),GS={},qS={class:"grid"};function ZS(t,e){return X(),be("div",qS,[Qi(t.$slots,"default",{},void 0,!0)])}const XS=xi(GS,[["render",ZS],["__scopeId","data-v-8ad9707e"]]);function QS(t,{slots:e}){return I("span",{class:"material-symbols-outlined icon"},[e!=null&&e.default?e.default():""])}function JS({direction:t="horizontal"},{slots:e}){return I("div",{class:"scaling-button"},[I("div",{style:{flexDirection:t==="vertical"?"column":"row"}},[e!=null&&e.default?e.default():""])])}function KS(t,{slots:e}){return I("div",{class:"icon-button"},[e!=null&&e.default?e.default():""])}const Bm={install:t=>{t.component("ExpandLayout",DS).component("FixedLayout",LS).component("FlexLayout",VS).component("PageLayout",BS).component("StickyLayout",WS).component("GridLayout",XS).component("Icon",QS).component("IconButton",KS).component("ScalingButton",JS)}};var eC=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let jm;const tc=t=>jm=t,Ym=Symbol();function yd(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var lr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(lr||(lr={}));function tC(){const t=em(!0),e=t.run(()=>it({}));let i=[],s=[];const n=jl({install(o){tc(n),n._a=o,o.provide(Ym,n),o.config.globalProperties.$pinia=n,s.forEach(r=>i.push(r)),s=[]},use(o){return!this._a&&!eC?s.push(o):i.push(o),this},_p:i,_a:null,_e:t,_s:new Map,state:e});return n}const Um=()=>{};function Af(t,e,i,s=Um){t.push(e);const n=()=>{const o=t.indexOf(e);o>-1&&(t.splice(o,1),s())};return!i&&tm()&&wk(n),n}function Jn(t,...e){t.slice().forEach(i=>{i(...e)})}const iC=t=>t();function xd(t,e){t instanceof Map&&e instanceof Map&&e.forEach((i,s)=>t.set(s,i)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const i in e){if(!e.hasOwnProperty(i))continue;const s=e[i],n=t[i];yd(n)&&yd(s)&&t.hasOwnProperty(i)&&!yt(s)&&!Qs(s)?t[i]=xd(n,s):t[i]=s}return t}const sC=Symbol();function nC(t){return!yd(t)||!t.hasOwnProperty(sC)}const{assign:Us}=Object;function oC(t){return!!(yt(t)&&t.effect)}function rC(t,e,i,s){const{state:n,actions:o,getters:r}=e,a=i.state.value[t];let l;function c(){a||(i.state.value[t]=n?n():{});const d=Kk(i.state.value[t]);return Us(d,o,Object.keys(r||{}).reduce((h,v)=>(h[v]=jl(Dt(()=>{tc(i);const w=i._s.get(t);return r[v].call(w,w)})),h),{}))}return l=Wm(t,c,e,i,s,!0),l}function Wm(t,e,i={},s,n,o){let r;const a=Us({actions:{}},i),l={deep:!0};let c,d,h=[],v=[],w;const F=s.state.value[t];!o&&!F&&(s.state.value[t]={}),it({});let $;function T(ke){let Ee;c=d=!1,typeof ke=="function"?(ke(s.state.value[t]),Ee={type:lr.patchFunction,storeId:t,events:w}):(xd(s.state.value[t],ke),Ee={type:lr.patchObject,payload:ke,storeId:t,events:w});const at=$=Symbol();bm().then(()=>{$===at&&(c=!0)}),d=!0,Jn(h,Ee,s.state.value[t])}const W=o?function(){const{state:Ee}=i,at=Ee?Ee():{};this.$patch(_t=>{Us(_t,at)})}:Um;function Z(){r.stop(),h=[],v=[],s._s.delete(t)}function ge(ke,Ee){return function(){tc(s);const at=Array.from(arguments),_t=[],jt=[];function Ns(Ve){_t.push(Ve)}function vn(Ve){jt.push(Ve)}Jn(v,{args:at,name:ke,store:Ce,after:Ns,onError:vn});let Mi;try{Mi=Ee.apply(this&&this.$id===t?this:Ce,at)}catch(Ve){throw Jn(jt,Ve),Ve}return Mi instanceof Promise?Mi.then(Ve=>(Jn(_t,Ve),Ve)).catch(Ve=>(Jn(jt,Ve),Promise.reject(Ve))):(Jn(_t,Mi),Mi)}}const J={_p:s,$id:t,$onAction:Af.bind(null,v),$patch:T,$reset:W,$subscribe(ke,Ee={}){const at=Af(h,ke,Ee.detached,()=>_t()),_t=r.run(()=>Ks(()=>s.state.value[t],jt=>{(Ee.flush==="sync"?d:c)&&ke({storeId:t,type:lr.direct,events:w},jt)},Us({},l,Ee)));return at},$dispose:Z},Ce=Po(J);s._s.set(t,Ce);const Oe=s._a&&s._a.runWithContext||iC,D=s._e.run(()=>(r=em(),Oe(()=>r.run(e))));for(const ke in D){const Ee=D[ke];if(yt(Ee)&&!oC(Ee)||Qs(Ee))o||(F&&nC(Ee)&&(yt(Ee)?Ee.value=F[ke]:xd(Ee,F[ke])),s.state.value[t][ke]=Ee);else if(typeof Ee=="function"){const at=ge(ke,Ee);D[ke]=at,a.actions[ke]=Ee}}return Us(Ce,D),Us(Me(Ce),D),Object.defineProperty(Ce,"$state",{get:()=>s.state.value[t],set:ke=>{T(Ee=>{Us(Ee,ke)})}}),s._p.forEach(ke=>{Us(Ce,r.run(()=>ke({store:Ce,app:s._a,pinia:s,options:a})))}),F&&o&&i.hydrate&&i.hydrate(Ce.$state,F),c=!0,d=!0,Ce}function ic(t,e,i){let s,n;const o=typeof e=="function";typeof t=="string"?(s=t,n=o?i:e):(n=t,s=t.id);function r(a,l){const c=P_();return a=a||(c?en(Ym,null):null),a&&tc(a),a=jm,a._s.has(s)||(o?Wm(s,e,n,a):rC(s,n,a)),a._s.get(s)}return r.$id=s,r}function aC(t){return typeof t=="object"&&t!==null}function Pf(t,e){return t=aC(t)?t:Object.create(null),new Proxy(t,{get(i,s,n){return s==="key"?Reflect.get(i,s,n):Reflect.get(i,s,n)||Reflect.get(e,s,n)}})}function lC(t,e){return e.reduce((i,s)=>i==null?void 0:i[s],t)}function cC(t,e,i){return e.slice(0,-1).reduce((s,n)=>/^(__proto__)$/.test(n)?{}:s[n]=s[n]||{},t)[e[e.length-1]]=i,t}function dC(t,e){return e.reduce((i,s)=>{const n=s.split(".");return cC(i,n,lC(t,n))},{})}function Mf(t,{storage:e,serializer:i,key:s,debug:n}){try{const o=e==null?void 0:e.getItem(s);o&&t.$patch(i==null?void 0:i.deserialize(o))}catch(o){n&&console.error(o)}}function Vf(t,{storage:e,serializer:i,key:s,paths:n,debug:o}){try{const r=Array.isArray(n)?dC(t,n):t;e.setItem(s,i.serialize(r))}catch(r){o&&console.error(r)}}function uC(t={}){return e=>{const{auto:i=!1}=t,{options:{persist:s=i},store:n,pinia:o}=e;if(!s)return;if(!(n.$id in o.state.value)){const a=o._s.get(n.$id.replace("__hot:",""));a&&Promise.resolve().then(()=>a.$persist());return}const r=(Array.isArray(s)?s.map(a=>Pf(a,t)):[Pf(s,t)]).map(({storage:a=localStorage,beforeRestore:l=null,afterRestore:c=null,serializer:d={serialize:JSON.stringify,deserialize:JSON.parse},key:h=n.$id,paths:v=null,debug:w=!1})=>{var F;return{storage:a,beforeRestore:l,afterRestore:c,serializer:d,key:((F=t.key)!=null?F:$=>$)(typeof h=="string"?h:h(n.$id)),paths:v,debug:w}});n.$persist=()=>{r.forEach(a=>{Vf(n.$state,a)})},n.$hydrate=({runHooks:a=!0}={})=>{r.forEach(l=>{const{beforeRestore:c,afterRestore:d}=l;a&&(c==null||c(e)),Mf(n,l),a&&(d==null||d(e))})},r.forEach(a=>{const{beforeRestore:l,afterRestore:c}=a;l==null||l(e),Mf(n,a),c==null||c(e),n.$subscribe((d,h)=>{Vf(h,a)},{detached:!0})})}}var hC=uC();const Gm=tC();Gm.use(hC);//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var qm;function Y(){return qm.apply(null,arguments)}function fC(t){qm=t}function Ji(t){return t instanceof Array||Object.prototype.toString.call(t)==="[object Array]"}function En(t){return t!=null&&Object.prototype.toString.call(t)==="[object Object]"}function ze(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Lu(t){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(t).length===0;var e;for(e in t)if(ze(t,e))return!1;return!0}function ti(t){return t===void 0}function Is(t){return typeof t=="number"||Object.prototype.toString.call(t)==="[object Number]"}function jr(t){return t instanceof Date||Object.prototype.toString.call(t)==="[object Date]"}function Zm(t,e){var i=[],s,n=t.length;for(s=0;s<n;++s)i.push(e(t[s],s));return i}function qs(t,e){for(var i in e)ze(e,i)&&(t[i]=e[i]);return ze(e,"toString")&&(t.toString=e.toString),ze(e,"valueOf")&&(t.valueOf=e.valueOf),t}function fs(t,e,i,s){return yv(t,e,i,s,!0).utc()}function pC(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function xe(t){return t._pf==null&&(t._pf=pC()),t._pf}var wd;Array.prototype.some?wd=Array.prototype.some:wd=function(t){var e=Object(this),i=e.length>>>0,s;for(s=0;s<i;s++)if(s in e&&t.call(this,e[s],s,e))return!0;return!1};function Au(t){if(t._isValid==null){var e=xe(t),i=wd.call(e.parsedDateParts,function(n){return n!=null}),s=!isNaN(t._d.getTime())&&e.overflow<0&&!e.empty&&!e.invalidEra&&!e.invalidMonth&&!e.invalidWeekday&&!e.weekdayMismatch&&!e.nullInput&&!e.invalidFormat&&!e.userInvalidated&&(!e.meridiem||e.meridiem&&i);if(t._strict&&(s=s&&e.charsLeftOver===0&&e.unusedTokens.length===0&&e.bigHour===void 0),Object.isFrozen==null||!Object.isFrozen(t))t._isValid=s;else return s}return t._isValid}function sc(t){var e=fs(NaN);return t!=null?qs(xe(e),t):xe(e).userInvalidated=!0,e}var Hf=Y.momentProperties=[],jc=!1;function Pu(t,e){var i,s,n,o=Hf.length;if(ti(e._isAMomentObject)||(t._isAMomentObject=e._isAMomentObject),ti(e._i)||(t._i=e._i),ti(e._f)||(t._f=e._f),ti(e._l)||(t._l=e._l),ti(e._strict)||(t._strict=e._strict),ti(e._tzm)||(t._tzm=e._tzm),ti(e._isUTC)||(t._isUTC=e._isUTC),ti(e._offset)||(t._offset=e._offset),ti(e._pf)||(t._pf=xe(e)),ti(e._locale)||(t._locale=e._locale),o>0)for(i=0;i<o;i++)s=Hf[i],n=e[s],ti(n)||(t[s]=n);return t}function Yr(t){Pu(this,t),this._d=new Date(t._d!=null?t._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),jc===!1&&(jc=!0,Y.updateOffset(this),jc=!1)}function Ki(t){return t instanceof Yr||t!=null&&t._isAMomentObject!=null}function Xm(t){Y.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+t)}function Ai(t,e){var i=!0;return qs(function(){if(Y.deprecationHandler!=null&&Y.deprecationHandler(null,t),i){var s=[],n,o,r,a=arguments.length;for(o=0;o<a;o++){if(n="",typeof arguments[o]=="object"){n+=`
[`+o+"] ";for(r in arguments[0])ze(arguments[0],r)&&(n+=r+": "+arguments[0][r]+", ");n=n.slice(0,-2)}else n=arguments[o];s.push(n)}Xm(t+`
Arguments: `+Array.prototype.slice.call(s).join("")+`
`+new Error().stack),i=!1}return e.apply(this,arguments)},e)}var Nf={};function Qm(t,e){Y.deprecationHandler!=null&&Y.deprecationHandler(t,e),Nf[t]||(Xm(e),Nf[t]=!0)}Y.suppressDeprecationWarnings=!1;Y.deprecationHandler=null;function ps(t){return typeof Function<"u"&&t instanceof Function||Object.prototype.toString.call(t)==="[object Function]"}function gC(t){var e,i;for(i in t)ze(t,i)&&(e=t[i],ps(e)?this[i]=e:this["_"+i]=e);this._config=t,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function $d(t,e){var i=qs({},t),s;for(s in e)ze(e,s)&&(En(t[s])&&En(e[s])?(i[s]={},qs(i[s],t[s]),qs(i[s],e[s])):e[s]!=null?i[s]=e[s]:delete i[s]);for(s in t)ze(t,s)&&!ze(e,s)&&En(t[s])&&(i[s]=qs({},i[s]));return i}function Mu(t){t!=null&&this.set(t)}var kd;Object.keys?kd=Object.keys:kd=function(t){var e,i=[];for(e in t)ze(t,e)&&i.push(e);return i};var mC={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function vC(t,e,i){var s=this._calendar[t]||this._calendar.sameElse;return ps(s)?s.call(e,i):s}function cs(t,e,i){var s=""+Math.abs(t),n=e-s.length,o=t>=0;return(o?i?"+":"":"-")+Math.pow(10,Math.max(0,n)).toString().substr(1)+s}var Vu=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,wa=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Yc={},po={};function re(t,e,i,s){var n=s;typeof s=="string"&&(n=function(){return this[s]()}),t&&(po[t]=n),e&&(po[e[0]]=function(){return cs(n.apply(this,arguments),e[1],e[2])}),i&&(po[i]=function(){return this.localeData().ordinal(n.apply(this,arguments),t)})}function bC(t){return t.match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function yC(t){var e=t.match(Vu),i,s;for(i=0,s=e.length;i<s;i++)po[e[i]]?e[i]=po[e[i]]:e[i]=bC(e[i]);return function(n){var o="",r;for(r=0;r<s;r++)o+=ps(e[r])?e[r].call(n,t):e[r];return o}}function Da(t,e){return t.isValid()?(e=Jm(e,t.localeData()),Yc[e]=Yc[e]||yC(e),Yc[e](t)):t.localeData().invalidDate()}function Jm(t,e){var i=5;function s(n){return e.longDateFormat(n)||n}for(wa.lastIndex=0;i>=0&&wa.test(t);)t=t.replace(wa,s),wa.lastIndex=0,i-=1;return t}var xC={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function wC(t){var e=this._longDateFormat[t],i=this._longDateFormat[t.toUpperCase()];return e||!i?e:(this._longDateFormat[t]=i.match(Vu).map(function(s){return s==="MMMM"||s==="MM"||s==="DD"||s==="dddd"?s.slice(1):s}).join(""),this._longDateFormat[t])}var $C="Invalid date";function kC(){return this._invalidDate}var _C="%d",SC=/\d{1,2}/;function CC(t){return this._ordinal.replace("%d",t)}var IC={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function TC(t,e,i,s){var n=this._relativeTime[i];return ps(n)?n(t,e,i,s):n.replace(/%d/i,t)}function FC(t,e){var i=this._relativeTime[t>0?"future":"past"];return ps(i)?i(e):i.replace(/%s/i,e)}var cr={};function zt(t,e){var i=t.toLowerCase();cr[i]=cr[i+"s"]=cr[e]=t}function Pi(t){return typeof t=="string"?cr[t]||cr[t.toLowerCase()]:void 0}function Hu(t){var e={},i,s;for(s in t)ze(t,s)&&(i=Pi(s),i&&(e[i]=t[s]));return e}var Km={};function Bt(t,e){Km[t]=e}function DC(t){var e=[],i;for(i in t)ze(t,i)&&e.push({unit:i,priority:Km[i]});return e.sort(function(s,n){return s.priority-n.priority}),e}function nc(t){return t%4===0&&t%100!==0||t%400===0}function Ii(t){return t<0?Math.ceil(t)||0:Math.floor(t)}function Te(t){var e=+t,i=0;return e!==0&&isFinite(e)&&(i=Ii(e)),i}function Ho(t,e){return function(i){return i!=null?(ev(this,t,i),Y.updateOffset(this,e),this):Za(this,t)}}function Za(t,e){return t.isValid()?t._d["get"+(t._isUTC?"UTC":"")+e]():NaN}function ev(t,e,i){t.isValid()&&!isNaN(i)&&(e==="FullYear"&&nc(t.year())&&t.month()===1&&t.date()===29?(i=Te(i),t._d["set"+(t._isUTC?"UTC":"")+e](i,t.month(),dc(i,t.month()))):t._d["set"+(t._isUTC?"UTC":"")+e](i))}function RC(t){return t=Pi(t),ps(this[t])?this[t]():this}function OC(t,e){if(typeof t=="object"){t=Hu(t);var i=DC(t),s,n=i.length;for(s=0;s<n;s++)this[i[s].unit](t[i[s].unit])}else if(t=Pi(t),ps(this[t]))return this[t](e);return this}var tv=/\d/,wi=/\d\d/,iv=/\d{3}/,Nu=/\d{4}/,oc=/[+-]?\d{6}/,rt=/\d\d?/,sv=/\d\d\d\d?/,nv=/\d\d\d\d\d\d?/,rc=/\d{1,3}/,zu=/\d{1,4}/,ac=/[+-]?\d{1,6}/,No=/\d+/,lc=/[+-]?\d+/,EC=/Z|[+-]\d\d:?\d\d/gi,cc=/Z|[+-]\d\d(?::?\d\d)?/gi,LC=/[+-]?\d+(\.\d{1,3})?/,Ur=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,Xa;Xa={};function ee(t,e,i){Xa[t]=ps(e)?e:function(s,n){return s&&i?i:e}}function AC(t,e){return ze(Xa,t)?Xa[t](e._strict,e._locale):new RegExp(PC(t))}function PC(t){return ui(t.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,i,s,n,o){return i||s||n||o}))}function ui(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var _d={};function Ge(t,e){var i,s=e,n;for(typeof t=="string"&&(t=[t]),Is(e)&&(s=function(o,r){r[e]=Te(o)}),n=t.length,i=0;i<n;i++)_d[t[i]]=s}function Wr(t,e){Ge(t,function(i,s,n,o){n._w=n._w||{},e(i,n._w,n,o)})}function MC(t,e,i){e!=null&&ze(_d,t)&&_d[t](e,i._a,i,t)}var Vt=0,ws=1,as=2,St=3,Wi=4,$s=5,Tn=6,VC=7,HC=8;function NC(t,e){return(t%e+e)%e}var mt;Array.prototype.indexOf?mt=Array.prototype.indexOf:mt=function(t){var e;for(e=0;e<this.length;++e)if(this[e]===t)return e;return-1};function dc(t,e){if(isNaN(t)||isNaN(e))return NaN;var i=NC(e,12);return t+=(e-i)/12,i===1?nc(t)?29:28:31-i%7%2}re("M",["MM",2],"Mo",function(){return this.month()+1});re("MMM",0,0,function(t){return this.localeData().monthsShort(this,t)});re("MMMM",0,0,function(t){return this.localeData().months(this,t)});zt("month","M");Bt("month",8);ee("M",rt);ee("MM",rt,wi);ee("MMM",function(t,e){return e.monthsShortRegex(t)});ee("MMMM",function(t,e){return e.monthsRegex(t)});Ge(["M","MM"],function(t,e){e[ws]=Te(t)-1});Ge(["MMM","MMMM"],function(t,e,i,s){var n=i._locale.monthsParse(t,s,i._strict);n!=null?e[ws]=n:xe(i).invalidMonth=t});var zC="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ov="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),rv=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,BC=Ur,jC=Ur;function YC(t,e){return t?Ji(this._months)?this._months[t.month()]:this._months[(this._months.isFormat||rv).test(e)?"format":"standalone"][t.month()]:Ji(this._months)?this._months:this._months.standalone}function UC(t,e){return t?Ji(this._monthsShort)?this._monthsShort[t.month()]:this._monthsShort[rv.test(e)?"format":"standalone"][t.month()]:Ji(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function WC(t,e,i){var s,n,o,r=t.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)o=fs([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(o,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(o,"").toLocaleLowerCase();return i?e==="MMM"?(n=mt.call(this._shortMonthsParse,r),n!==-1?n:null):(n=mt.call(this._longMonthsParse,r),n!==-1?n:null):e==="MMM"?(n=mt.call(this._shortMonthsParse,r),n!==-1?n:(n=mt.call(this._longMonthsParse,r),n!==-1?n:null)):(n=mt.call(this._longMonthsParse,r),n!==-1?n:(n=mt.call(this._shortMonthsParse,r),n!==-1?n:null))}function GC(t,e,i){var s,n,o;if(this._monthsParseExact)return WC.call(this,t,e,i);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(n=fs([2e3,s]),i&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(n,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(n,"").replace(".","")+"$","i")),!i&&!this._monthsParse[s]&&(o="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[s]=new RegExp(o.replace(".",""),"i")),i&&e==="MMMM"&&this._longMonthsParse[s].test(t))return s;if(i&&e==="MMM"&&this._shortMonthsParse[s].test(t))return s;if(!i&&this._monthsParse[s].test(t))return s}}function av(t,e){var i;if(!t.isValid())return t;if(typeof e=="string"){if(/^\d+$/.test(e))e=Te(e);else if(e=t.localeData().monthsParse(e),!Is(e))return t}return i=Math.min(t.date(),dc(t.year(),e)),t._d["set"+(t._isUTC?"UTC":"")+"Month"](e,i),t}function lv(t){return t!=null?(av(this,t),Y.updateOffset(this,!0),this):Za(this,"Month")}function qC(){return dc(this.year(),this.month())}function ZC(t){return this._monthsParseExact?(ze(this,"_monthsRegex")||cv.call(this),t?this._monthsShortStrictRegex:this._monthsShortRegex):(ze(this,"_monthsShortRegex")||(this._monthsShortRegex=BC),this._monthsShortStrictRegex&&t?this._monthsShortStrictRegex:this._monthsShortRegex)}function XC(t){return this._monthsParseExact?(ze(this,"_monthsRegex")||cv.call(this),t?this._monthsStrictRegex:this._monthsRegex):(ze(this,"_monthsRegex")||(this._monthsRegex=jC),this._monthsStrictRegex&&t?this._monthsStrictRegex:this._monthsRegex)}function cv(){function t(r,a){return a.length-r.length}var e=[],i=[],s=[],n,o;for(n=0;n<12;n++)o=fs([2e3,n]),e.push(this.monthsShort(o,"")),i.push(this.months(o,"")),s.push(this.months(o,"")),s.push(this.monthsShort(o,""));for(e.sort(t),i.sort(t),s.sort(t),n=0;n<12;n++)e[n]=ui(e[n]),i[n]=ui(i[n]);for(n=0;n<24;n++)s[n]=ui(s[n]);this._monthsRegex=new RegExp("^("+s.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+e.join("|")+")","i")}re("Y",0,0,function(){var t=this.year();return t<=9999?cs(t,4):"+"+t});re(0,["YY",2],0,function(){return this.year()%100});re(0,["YYYY",4],0,"year");re(0,["YYYYY",5],0,"year");re(0,["YYYYYY",6,!0],0,"year");zt("year","y");Bt("year",1);ee("Y",lc);ee("YY",rt,wi);ee("YYYY",zu,Nu);ee("YYYYY",ac,oc);ee("YYYYYY",ac,oc);Ge(["YYYYY","YYYYYY"],Vt);Ge("YYYY",function(t,e){e[Vt]=t.length===2?Y.parseTwoDigitYear(t):Te(t)});Ge("YY",function(t,e){e[Vt]=Y.parseTwoDigitYear(t)});Ge("Y",function(t,e){e[Vt]=parseInt(t,10)});function dr(t){return nc(t)?366:365}Y.parseTwoDigitYear=function(t){return Te(t)+(Te(t)>68?1900:2e3)};var dv=Ho("FullYear",!0);function QC(){return nc(this.year())}function JC(t,e,i,s,n,o,r){var a;return t<100&&t>=0?(a=new Date(t+400,e,i,s,n,o,r),isFinite(a.getFullYear())&&a.setFullYear(t)):a=new Date(t,e,i,s,n,o,r),a}function Tr(t){var e,i;return t<100&&t>=0?(i=Array.prototype.slice.call(arguments),i[0]=t+400,e=new Date(Date.UTC.apply(null,i)),isFinite(e.getUTCFullYear())&&e.setUTCFullYear(t)):e=new Date(Date.UTC.apply(null,arguments)),e}function Qa(t,e,i){var s=7+e-i,n=(7+Tr(t,0,s).getUTCDay()-e)%7;return-n+s-1}function uv(t,e,i,s,n){var o=(7+i-s)%7,r=Qa(t,s,n),a=1+7*(e-1)+o+r,l,c;return a<=0?(l=t-1,c=dr(l)+a):a>dr(t)?(l=t+1,c=a-dr(t)):(l=t,c=a),{year:l,dayOfYear:c}}function Fr(t,e,i){var s=Qa(t.year(),e,i),n=Math.floor((t.dayOfYear()-s-1)/7)+1,o,r;return n<1?(r=t.year()-1,o=n+ks(r,e,i)):n>ks(t.year(),e,i)?(o=n-ks(t.year(),e,i),r=t.year()+1):(r=t.year(),o=n),{week:o,year:r}}function ks(t,e,i){var s=Qa(t,e,i),n=Qa(t+1,e,i);return(dr(t)-s+n)/7}re("w",["ww",2],"wo","week");re("W",["WW",2],"Wo","isoWeek");zt("week","w");zt("isoWeek","W");Bt("week",5);Bt("isoWeek",5);ee("w",rt);ee("ww",rt,wi);ee("W",rt);ee("WW",rt,wi);Wr(["w","ww","W","WW"],function(t,e,i,s){e[s.substr(0,1)]=Te(t)});function KC(t){return Fr(t,this._week.dow,this._week.doy).week}var eI={dow:0,doy:6};function tI(){return this._week.dow}function iI(){return this._week.doy}function sI(t){var e=this.localeData().week(this);return t==null?e:this.add((t-e)*7,"d")}function nI(t){var e=Fr(this,1,4).week;return t==null?e:this.add((t-e)*7,"d")}re("d",0,"do","day");re("dd",0,0,function(t){return this.localeData().weekdaysMin(this,t)});re("ddd",0,0,function(t){return this.localeData().weekdaysShort(this,t)});re("dddd",0,0,function(t){return this.localeData().weekdays(this,t)});re("e",0,0,"weekday");re("E",0,0,"isoWeekday");zt("day","d");zt("weekday","e");zt("isoWeekday","E");Bt("day",11);Bt("weekday",11);Bt("isoWeekday",11);ee("d",rt);ee("e",rt);ee("E",rt);ee("dd",function(t,e){return e.weekdaysMinRegex(t)});ee("ddd",function(t,e){return e.weekdaysShortRegex(t)});ee("dddd",function(t,e){return e.weekdaysRegex(t)});Wr(["dd","ddd","dddd"],function(t,e,i,s){var n=i._locale.weekdaysParse(t,s,i._strict);n!=null?e.d=n:xe(i).invalidWeekday=t});Wr(["d","e","E"],function(t,e,i,s){e[s]=Te(t)});function oI(t,e){return typeof t!="string"?t:isNaN(t)?(t=e.weekdaysParse(t),typeof t=="number"?t:null):parseInt(t,10)}function rI(t,e){return typeof t=="string"?e.weekdaysParse(t)%7||7:isNaN(t)?null:t}function Bu(t,e){return t.slice(e,7).concat(t.slice(0,e))}var aI="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),hv="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),lI="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),cI=Ur,dI=Ur,uI=Ur;function hI(t,e){var i=Ji(this._weekdays)?this._weekdays:this._weekdays[t&&t!==!0&&this._weekdays.isFormat.test(e)?"format":"standalone"];return t===!0?Bu(i,this._week.dow):t?i[t.day()]:i}function fI(t){return t===!0?Bu(this._weekdaysShort,this._week.dow):t?this._weekdaysShort[t.day()]:this._weekdaysShort}function pI(t){return t===!0?Bu(this._weekdaysMin,this._week.dow):t?this._weekdaysMin[t.day()]:this._weekdaysMin}function gI(t,e,i){var s,n,o,r=t.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)o=fs([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(o,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(o,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(o,"").toLocaleLowerCase();return i?e==="dddd"?(n=mt.call(this._weekdaysParse,r),n!==-1?n:null):e==="ddd"?(n=mt.call(this._shortWeekdaysParse,r),n!==-1?n:null):(n=mt.call(this._minWeekdaysParse,r),n!==-1?n:null):e==="dddd"?(n=mt.call(this._weekdaysParse,r),n!==-1||(n=mt.call(this._shortWeekdaysParse,r),n!==-1)?n:(n=mt.call(this._minWeekdaysParse,r),n!==-1?n:null)):e==="ddd"?(n=mt.call(this._shortWeekdaysParse,r),n!==-1||(n=mt.call(this._weekdaysParse,r),n!==-1)?n:(n=mt.call(this._minWeekdaysParse,r),n!==-1?n:null)):(n=mt.call(this._minWeekdaysParse,r),n!==-1||(n=mt.call(this._weekdaysParse,r),n!==-1)?n:(n=mt.call(this._shortWeekdaysParse,r),n!==-1?n:null))}function mI(t,e,i){var s,n,o;if(this._weekdaysParseExact)return gI.call(this,t,e,i);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(n=fs([2e3,1]).day(s),i&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(n,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(n,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(n,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[s]||(o="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),this._weekdaysParse[s]=new RegExp(o.replace(".",""),"i")),i&&e==="dddd"&&this._fullWeekdaysParse[s].test(t))return s;if(i&&e==="ddd"&&this._shortWeekdaysParse[s].test(t))return s;if(i&&e==="dd"&&this._minWeekdaysParse[s].test(t))return s;if(!i&&this._weekdaysParse[s].test(t))return s}}function vI(t){if(!this.isValid())return t!=null?this:NaN;var e=this._isUTC?this._d.getUTCDay():this._d.getDay();return t!=null?(t=oI(t,this.localeData()),this.add(t-e,"d")):e}function bI(t){if(!this.isValid())return t!=null?this:NaN;var e=(this.day()+7-this.localeData()._week.dow)%7;return t==null?e:this.add(t-e,"d")}function yI(t){if(!this.isValid())return t!=null?this:NaN;if(t!=null){var e=rI(t,this.localeData());return this.day(this.day()%7?e:e-7)}else return this.day()||7}function xI(t){return this._weekdaysParseExact?(ze(this,"_weekdaysRegex")||ju.call(this),t?this._weekdaysStrictRegex:this._weekdaysRegex):(ze(this,"_weekdaysRegex")||(this._weekdaysRegex=cI),this._weekdaysStrictRegex&&t?this._weekdaysStrictRegex:this._weekdaysRegex)}function wI(t){return this._weekdaysParseExact?(ze(this,"_weekdaysRegex")||ju.call(this),t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(ze(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=dI),this._weekdaysShortStrictRegex&&t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function $I(t){return this._weekdaysParseExact?(ze(this,"_weekdaysRegex")||ju.call(this),t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(ze(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=uI),this._weekdaysMinStrictRegex&&t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function ju(){function t(d,h){return h.length-d.length}var e=[],i=[],s=[],n=[],o,r,a,l,c;for(o=0;o<7;o++)r=fs([2e3,1]).day(o),a=ui(this.weekdaysMin(r,"")),l=ui(this.weekdaysShort(r,"")),c=ui(this.weekdays(r,"")),e.push(a),i.push(l),s.push(c),n.push(a),n.push(l),n.push(c);e.sort(t),i.sort(t),s.sort(t),n.sort(t),this._weekdaysRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+e.join("|")+")","i")}function Yu(){return this.hours()%12||12}function kI(){return this.hours()||24}re("H",["HH",2],0,"hour");re("h",["hh",2],0,Yu);re("k",["kk",2],0,kI);re("hmm",0,0,function(){return""+Yu.apply(this)+cs(this.minutes(),2)});re("hmmss",0,0,function(){return""+Yu.apply(this)+cs(this.minutes(),2)+cs(this.seconds(),2)});re("Hmm",0,0,function(){return""+this.hours()+cs(this.minutes(),2)});re("Hmmss",0,0,function(){return""+this.hours()+cs(this.minutes(),2)+cs(this.seconds(),2)});function fv(t,e){re(t,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),e)})}fv("a",!0);fv("A",!1);zt("hour","h");Bt("hour",13);function pv(t,e){return e._meridiemParse}ee("a",pv);ee("A",pv);ee("H",rt);ee("h",rt);ee("k",rt);ee("HH",rt,wi);ee("hh",rt,wi);ee("kk",rt,wi);ee("hmm",sv);ee("hmmss",nv);ee("Hmm",sv);ee("Hmmss",nv);Ge(["H","HH"],St);Ge(["k","kk"],function(t,e,i){var s=Te(t);e[St]=s===24?0:s});Ge(["a","A"],function(t,e,i){i._isPm=i._locale.isPM(t),i._meridiem=t});Ge(["h","hh"],function(t,e,i){e[St]=Te(t),xe(i).bigHour=!0});Ge("hmm",function(t,e,i){var s=t.length-2;e[St]=Te(t.substr(0,s)),e[Wi]=Te(t.substr(s)),xe(i).bigHour=!0});Ge("hmmss",function(t,e,i){var s=t.length-4,n=t.length-2;e[St]=Te(t.substr(0,s)),e[Wi]=Te(t.substr(s,2)),e[$s]=Te(t.substr(n)),xe(i).bigHour=!0});Ge("Hmm",function(t,e,i){var s=t.length-2;e[St]=Te(t.substr(0,s)),e[Wi]=Te(t.substr(s))});Ge("Hmmss",function(t,e,i){var s=t.length-4,n=t.length-2;e[St]=Te(t.substr(0,s)),e[Wi]=Te(t.substr(s,2)),e[$s]=Te(t.substr(n))});function _I(t){return(t+"").toLowerCase().charAt(0)==="p"}var SI=/[ap]\.?m?\.?/i,CI=Ho("Hours",!0);function II(t,e,i){return t>11?i?"pm":"PM":i?"am":"AM"}var gv={calendar:mC,longDateFormat:xC,invalidDate:$C,ordinal:_C,dayOfMonthOrdinalParse:SC,relativeTime:IC,months:zC,monthsShort:ov,week:eI,weekdays:aI,weekdaysMin:lI,weekdaysShort:hv,meridiemParse:SI},lt={},Xo={},Dr;function TI(t,e){var i,s=Math.min(t.length,e.length);for(i=0;i<s;i+=1)if(t[i]!==e[i])return i;return s}function zf(t){return t&&t.toLowerCase().replace("_","-")}function FI(t){for(var e=0,i,s,n,o;e<t.length;){for(o=zf(t[e]).split("-"),i=o.length,s=zf(t[e+1]),s=s?s.split("-"):null;i>0;){if(n=uc(o.slice(0,i).join("-")),n)return n;if(s&&s.length>=i&&TI(o,s)>=i-1)break;i--}e++}return Dr}function DI(t){return t.match("^[^/\\\\]*$")!=null}function uc(t){var e=null,i;if(lt[t]===void 0&&typeof Ea<"u"&&Ea&&Ea.exports&&DI(t))try{e=Dr._abbr,i=require,i("./locale/"+t),tn(e)}catch{lt[t]=null}return lt[t]}function tn(t,e){var i;return t&&(ti(e)?i=Vs(t):i=Uu(t,e),i?Dr=i:typeof console<"u"&&console.warn&&console.warn("Locale "+t+" not found. Did you forget to load it?")),Dr._abbr}function Uu(t,e){if(e!==null){var i,s=gv;if(e.abbr=t,lt[t]!=null)Qm("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=lt[t]._config;else if(e.parentLocale!=null)if(lt[e.parentLocale]!=null)s=lt[e.parentLocale]._config;else if(i=uc(e.parentLocale),i!=null)s=i._config;else return Xo[e.parentLocale]||(Xo[e.parentLocale]=[]),Xo[e.parentLocale].push({name:t,config:e}),null;return lt[t]=new Mu($d(s,e)),Xo[t]&&Xo[t].forEach(function(n){Uu(n.name,n.config)}),tn(t),lt[t]}else return delete lt[t],null}function RI(t,e){if(e!=null){var i,s,n=gv;lt[t]!=null&&lt[t].parentLocale!=null?lt[t].set($d(lt[t]._config,e)):(s=uc(t),s!=null&&(n=s._config),e=$d(n,e),s==null&&(e.abbr=t),i=new Mu(e),i.parentLocale=lt[t],lt[t]=i),tn(t)}else lt[t]!=null&&(lt[t].parentLocale!=null?(lt[t]=lt[t].parentLocale,t===tn()&&tn(t)):lt[t]!=null&&delete lt[t]);return lt[t]}function Vs(t){var e;if(t&&t._locale&&t._locale._abbr&&(t=t._locale._abbr),!t)return Dr;if(!Ji(t)){if(e=uc(t),e)return e;t=[t]}return FI(t)}function OI(){return kd(lt)}function Wu(t){var e,i=t._a;return i&&xe(t).overflow===-2&&(e=i[ws]<0||i[ws]>11?ws:i[as]<1||i[as]>dc(i[Vt],i[ws])?as:i[St]<0||i[St]>24||i[St]===24&&(i[Wi]!==0||i[$s]!==0||i[Tn]!==0)?St:i[Wi]<0||i[Wi]>59?Wi:i[$s]<0||i[$s]>59?$s:i[Tn]<0||i[Tn]>999?Tn:-1,xe(t)._overflowDayOfYear&&(e<Vt||e>as)&&(e=as),xe(t)._overflowWeeks&&e===-1&&(e=VC),xe(t)._overflowWeekday&&e===-1&&(e=HC),xe(t).overflow=e),t}var EI=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,LI=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,AI=/Z|[+-]\d\d(?::?\d\d)?/,$a=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],Uc=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],PI=/^\/?Date\((-?\d+)/i,MI=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,VI={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function mv(t){var e,i,s=t._i,n=EI.exec(s)||LI.exec(s),o,r,a,l,c=$a.length,d=Uc.length;if(n){for(xe(t).iso=!0,e=0,i=c;e<i;e++)if($a[e][1].exec(n[1])){r=$a[e][0],o=$a[e][2]!==!1;break}if(r==null){t._isValid=!1;return}if(n[3]){for(e=0,i=d;e<i;e++)if(Uc[e][1].exec(n[3])){a=(n[2]||" ")+Uc[e][0];break}if(a==null){t._isValid=!1;return}}if(!o&&a!=null){t._isValid=!1;return}if(n[4])if(AI.exec(n[4]))l="Z";else{t._isValid=!1;return}t._f=r+(a||"")+(l||""),qu(t)}else t._isValid=!1}function HI(t,e,i,s,n,o){var r=[NI(t),ov.indexOf(e),parseInt(i,10),parseInt(s,10),parseInt(n,10)];return o&&r.push(parseInt(o,10)),r}function NI(t){var e=parseInt(t,10);return e<=49?2e3+e:e<=999?1900+e:e}function zI(t){return t.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function BI(t,e,i){if(t){var s=hv.indexOf(t),n=new Date(e[0],e[1],e[2]).getDay();if(s!==n)return xe(i).weekdayMismatch=!0,i._isValid=!1,!1}return!0}function jI(t,e,i){if(t)return VI[t];if(e)return 0;var s=parseInt(i,10),n=s%100,o=(s-n)/100;return o*60+n}function vv(t){var e=MI.exec(zI(t._i)),i;if(e){if(i=HI(e[4],e[3],e[2],e[5],e[6],e[7]),!BI(e[1],i,t))return;t._a=i,t._tzm=jI(e[8],e[9],e[10]),t._d=Tr.apply(null,t._a),t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),xe(t).rfc2822=!0}else t._isValid=!1}function YI(t){var e=PI.exec(t._i);if(e!==null){t._d=new Date(+e[1]);return}if(mv(t),t._isValid===!1)delete t._isValid;else return;if(vv(t),t._isValid===!1)delete t._isValid;else return;t._strict?t._isValid=!1:Y.createFromInputFallback(t)}Y.createFromInputFallback=Ai("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(t){t._d=new Date(t._i+(t._useUTC?" UTC":""))});function to(t,e,i){return t??e??i}function UI(t){var e=new Date(Y.now());return t._useUTC?[e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()]:[e.getFullYear(),e.getMonth(),e.getDate()]}function Gu(t){var e,i,s=[],n,o,r;if(!t._d){for(n=UI(t),t._w&&t._a[as]==null&&t._a[ws]==null&&WI(t),t._dayOfYear!=null&&(r=to(t._a[Vt],n[Vt]),(t._dayOfYear>dr(r)||t._dayOfYear===0)&&(xe(t)._overflowDayOfYear=!0),i=Tr(r,0,t._dayOfYear),t._a[ws]=i.getUTCMonth(),t._a[as]=i.getUTCDate()),e=0;e<3&&t._a[e]==null;++e)t._a[e]=s[e]=n[e];for(;e<7;e++)t._a[e]=s[e]=t._a[e]==null?e===2?1:0:t._a[e];t._a[St]===24&&t._a[Wi]===0&&t._a[$s]===0&&t._a[Tn]===0&&(t._nextDay=!0,t._a[St]=0),t._d=(t._useUTC?Tr:JC).apply(null,s),o=t._useUTC?t._d.getUTCDay():t._d.getDay(),t._tzm!=null&&t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),t._nextDay&&(t._a[St]=24),t._w&&typeof t._w.d<"u"&&t._w.d!==o&&(xe(t).weekdayMismatch=!0)}}function WI(t){var e,i,s,n,o,r,a,l,c;e=t._w,e.GG!=null||e.W!=null||e.E!=null?(o=1,r=4,i=to(e.GG,t._a[Vt],Fr(nt(),1,4).year),s=to(e.W,1),n=to(e.E,1),(n<1||n>7)&&(l=!0)):(o=t._locale._week.dow,r=t._locale._week.doy,c=Fr(nt(),o,r),i=to(e.gg,t._a[Vt],c.year),s=to(e.w,c.week),e.d!=null?(n=e.d,(n<0||n>6)&&(l=!0)):e.e!=null?(n=e.e+o,(e.e<0||e.e>6)&&(l=!0)):n=o),s<1||s>ks(i,o,r)?xe(t)._overflowWeeks=!0:l!=null?xe(t)._overflowWeekday=!0:(a=uv(i,s,n,o,r),t._a[Vt]=a.year,t._dayOfYear=a.dayOfYear)}Y.ISO_8601=function(){};Y.RFC_2822=function(){};function qu(t){if(t._f===Y.ISO_8601){mv(t);return}if(t._f===Y.RFC_2822){vv(t);return}t._a=[],xe(t).empty=!0;var e=""+t._i,i,s,n,o,r,a=e.length,l=0,c,d;for(n=Jm(t._f,t._locale).match(Vu)||[],d=n.length,i=0;i<d;i++)o=n[i],s=(e.match(AC(o,t))||[])[0],s&&(r=e.substr(0,e.indexOf(s)),r.length>0&&xe(t).unusedInput.push(r),e=e.slice(e.indexOf(s)+s.length),l+=s.length),po[o]?(s?xe(t).empty=!1:xe(t).unusedTokens.push(o),MC(o,s,t)):t._strict&&!s&&xe(t).unusedTokens.push(o);xe(t).charsLeftOver=a-l,e.length>0&&xe(t).unusedInput.push(e),t._a[St]<=12&&xe(t).bigHour===!0&&t._a[St]>0&&(xe(t).bigHour=void 0),xe(t).parsedDateParts=t._a.slice(0),xe(t).meridiem=t._meridiem,t._a[St]=GI(t._locale,t._a[St],t._meridiem),c=xe(t).era,c!==null&&(t._a[Vt]=t._locale.erasConvertYear(c,t._a[Vt])),Gu(t),Wu(t)}function GI(t,e,i){var s;return i==null?e:t.meridiemHour!=null?t.meridiemHour(e,i):(t.isPM!=null&&(s=t.isPM(i),s&&e<12&&(e+=12),!s&&e===12&&(e=0)),e)}function qI(t){var e,i,s,n,o,r,a=!1,l=t._f.length;if(l===0){xe(t).invalidFormat=!0,t._d=new Date(NaN);return}for(n=0;n<l;n++)o=0,r=!1,e=Pu({},t),t._useUTC!=null&&(e._useUTC=t._useUTC),e._f=t._f[n],qu(e),Au(e)&&(r=!0),o+=xe(e).charsLeftOver,o+=xe(e).unusedTokens.length*10,xe(e).score=o,a?o<s&&(s=o,i=e):(s==null||o<s||r)&&(s=o,i=e,r&&(a=!0));qs(t,i||e)}function ZI(t){if(!t._d){var e=Hu(t._i),i=e.day===void 0?e.date:e.day;t._a=Zm([e.year,e.month,i,e.hour,e.minute,e.second,e.millisecond],function(s){return s&&parseInt(s,10)}),Gu(t)}}function XI(t){var e=new Yr(Wu(bv(t)));return e._nextDay&&(e.add(1,"d"),e._nextDay=void 0),e}function bv(t){var e=t._i,i=t._f;return t._locale=t._locale||Vs(t._l),e===null||i===void 0&&e===""?sc({nullInput:!0}):(typeof e=="string"&&(t._i=e=t._locale.preparse(e)),Ki(e)?new Yr(Wu(e)):(jr(e)?t._d=e:Ji(i)?qI(t):i?qu(t):QI(t),Au(t)||(t._d=null),t))}function QI(t){var e=t._i;ti(e)?t._d=new Date(Y.now()):jr(e)?t._d=new Date(e.valueOf()):typeof e=="string"?YI(t):Ji(e)?(t._a=Zm(e.slice(0),function(i){return parseInt(i,10)}),Gu(t)):En(e)?ZI(t):Is(e)?t._d=new Date(e):Y.createFromInputFallback(t)}function yv(t,e,i,s,n){var o={};return(e===!0||e===!1)&&(s=e,e=void 0),(i===!0||i===!1)&&(s=i,i=void 0),(En(t)&&Lu(t)||Ji(t)&&t.length===0)&&(t=void 0),o._isAMomentObject=!0,o._useUTC=o._isUTC=n,o._l=i,o._i=t,o._f=e,o._strict=s,XI(o)}function nt(t,e,i,s){return yv(t,e,i,s,!1)}var JI=Ai("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=nt.apply(null,arguments);return this.isValid()&&t.isValid()?t<this?this:t:sc()}),KI=Ai("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=nt.apply(null,arguments);return this.isValid()&&t.isValid()?t>this?this:t:sc()});function xv(t,e){var i,s;if(e.length===1&&Ji(e[0])&&(e=e[0]),!e.length)return nt();for(i=e[0],s=1;s<e.length;++s)(!e[s].isValid()||e[s][t](i))&&(i=e[s]);return i}function eT(){var t=[].slice.call(arguments,0);return xv("isBefore",t)}function tT(){var t=[].slice.call(arguments,0);return xv("isAfter",t)}var iT=function(){return Date.now?Date.now():+new Date},Qo=["year","quarter","month","week","day","hour","minute","second","millisecond"];function sT(t){var e,i=!1,s,n=Qo.length;for(e in t)if(ze(t,e)&&!(mt.call(Qo,e)!==-1&&(t[e]==null||!isNaN(t[e]))))return!1;for(s=0;s<n;++s)if(t[Qo[s]]){if(i)return!1;parseFloat(t[Qo[s]])!==Te(t[Qo[s]])&&(i=!0)}return!0}function nT(){return this._isValid}function oT(){return ts(NaN)}function hc(t){var e=Hu(t),i=e.year||0,s=e.quarter||0,n=e.month||0,o=e.week||e.isoWeek||0,r=e.day||0,a=e.hour||0,l=e.minute||0,c=e.second||0,d=e.millisecond||0;this._isValid=sT(e),this._milliseconds=+d+c*1e3+l*6e4+a*1e3*60*60,this._days=+r+o*7,this._months=+n+s*3+i*12,this._data={},this._locale=Vs(),this._bubble()}function Ra(t){return t instanceof hc}function Sd(t){return t<0?Math.round(-1*t)*-1:Math.round(t)}function rT(t,e,i){var s=Math.min(t.length,e.length),n=Math.abs(t.length-e.length),o=0,r;for(r=0;r<s;r++)(i&&t[r]!==e[r]||!i&&Te(t[r])!==Te(e[r]))&&o++;return o+n}function wv(t,e){re(t,0,0,function(){var i=this.utcOffset(),s="+";return i<0&&(i=-i,s="-"),s+cs(~~(i/60),2)+e+cs(~~i%60,2)})}wv("Z",":");wv("ZZ","");ee("Z",cc);ee("ZZ",cc);Ge(["Z","ZZ"],function(t,e,i){i._useUTC=!0,i._tzm=Zu(cc,t)});var aT=/([\+\-]|\d\d)/gi;function Zu(t,e){var i=(e||"").match(t),s,n,o;return i===null?null:(s=i[i.length-1]||[],n=(s+"").match(aT)||["-",0,0],o=+(n[1]*60)+Te(n[2]),o===0?0:n[0]==="+"?o:-o)}function Xu(t,e){var i,s;return e._isUTC?(i=e.clone(),s=(Ki(t)||jr(t)?t.valueOf():nt(t).valueOf())-i.valueOf(),i._d.setTime(i._d.valueOf()+s),Y.updateOffset(i,!1),i):nt(t).local()}function Cd(t){return-Math.round(t._d.getTimezoneOffset())}Y.updateOffset=function(){};function lT(t,e,i){var s=this._offset||0,n;if(!this.isValid())return t!=null?this:NaN;if(t!=null){if(typeof t=="string"){if(t=Zu(cc,t),t===null)return this}else Math.abs(t)<16&&!i&&(t=t*60);return!this._isUTC&&e&&(n=Cd(this)),this._offset=t,this._isUTC=!0,n!=null&&this.add(n,"m"),s!==t&&(!e||this._changeInProgress?_v(this,ts(t-s,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,Y.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?s:Cd(this)}function cT(t,e){return t!=null?(typeof t!="string"&&(t=-t),this.utcOffset(t,e),this):-this.utcOffset()}function dT(t){return this.utcOffset(0,t)}function uT(t){return this._isUTC&&(this.utcOffset(0,t),this._isUTC=!1,t&&this.subtract(Cd(this),"m")),this}function hT(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var t=Zu(EC,this._i);t!=null?this.utcOffset(t):this.utcOffset(0,!0)}return this}function fT(t){return this.isValid()?(t=t?nt(t).utcOffset():0,(this.utcOffset()-t)%60===0):!1}function pT(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function gT(){if(!ti(this._isDSTShifted))return this._isDSTShifted;var t={},e;return Pu(t,this),t=bv(t),t._a?(e=t._isUTC?fs(t._a):nt(t._a),this._isDSTShifted=this.isValid()&&rT(t._a,e.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function mT(){return this.isValid()?!this._isUTC:!1}function vT(){return this.isValid()?this._isUTC:!1}function $v(){return this.isValid()?this._isUTC&&this._offset===0:!1}var bT=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,yT=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function ts(t,e){var i=t,s=null,n,o,r;return Ra(t)?i={ms:t._milliseconds,d:t._days,M:t._months}:Is(t)||!isNaN(+t)?(i={},e?i[e]=+t:i.milliseconds=+t):(s=bT.exec(t))?(n=s[1]==="-"?-1:1,i={y:0,d:Te(s[as])*n,h:Te(s[St])*n,m:Te(s[Wi])*n,s:Te(s[$s])*n,ms:Te(Sd(s[Tn]*1e3))*n}):(s=yT.exec(t))?(n=s[1]==="-"?-1:1,i={y:kn(s[2],n),M:kn(s[3],n),w:kn(s[4],n),d:kn(s[5],n),h:kn(s[6],n),m:kn(s[7],n),s:kn(s[8],n)}):i==null?i={}:typeof i=="object"&&("from"in i||"to"in i)&&(r=xT(nt(i.from),nt(i.to)),i={},i.ms=r.milliseconds,i.M=r.months),o=new hc(i),Ra(t)&&ze(t,"_locale")&&(o._locale=t._locale),Ra(t)&&ze(t,"_isValid")&&(o._isValid=t._isValid),o}ts.fn=hc.prototype;ts.invalid=oT;function kn(t,e){var i=t&&parseFloat(t.replace(",","."));return(isNaN(i)?0:i)*e}function Bf(t,e){var i={};return i.months=e.month()-t.month()+(e.year()-t.year())*12,t.clone().add(i.months,"M").isAfter(e)&&--i.months,i.milliseconds=+e-+t.clone().add(i.months,"M"),i}function xT(t,e){var i;return t.isValid()&&e.isValid()?(e=Xu(e,t),t.isBefore(e)?i=Bf(t,e):(i=Bf(e,t),i.milliseconds=-i.milliseconds,i.months=-i.months),i):{milliseconds:0,months:0}}function kv(t,e){return function(i,s){var n,o;return s!==null&&!isNaN(+s)&&(Qm(e,"moment()."+e+"(period, number) is deprecated. Please use moment()."+e+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),o=i,i=s,s=o),n=ts(i,s),_v(this,n,t),this}}function _v(t,e,i,s){var n=e._milliseconds,o=Sd(e._days),r=Sd(e._months);t.isValid()&&(s=s??!0,r&&av(t,Za(t,"Month")+r*i),o&&ev(t,"Date",Za(t,"Date")+o*i),n&&t._d.setTime(t._d.valueOf()+n*i),s&&Y.updateOffset(t,o||r))}var wT=kv(1,"add"),$T=kv(-1,"subtract");function Sv(t){return typeof t=="string"||t instanceof String}function kT(t){return Ki(t)||jr(t)||Sv(t)||Is(t)||ST(t)||_T(t)||t===null||t===void 0}function _T(t){var e=En(t)&&!Lu(t),i=!1,s=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],n,o,r=s.length;for(n=0;n<r;n+=1)o=s[n],i=i||ze(t,o);return e&&i}function ST(t){var e=Ji(t),i=!1;return e&&(i=t.filter(function(s){return!Is(s)&&Sv(t)}).length===0),e&&i}function CT(t){var e=En(t)&&!Lu(t),i=!1,s=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],n,o;for(n=0;n<s.length;n+=1)o=s[n],i=i||ze(t,o);return e&&i}function IT(t,e){var i=t.diff(e,"days",!0);return i<-6?"sameElse":i<-1?"lastWeek":i<0?"lastDay":i<1?"sameDay":i<2?"nextDay":i<7?"nextWeek":"sameElse"}function TT(t,e){arguments.length===1&&(arguments[0]?kT(arguments[0])?(t=arguments[0],e=void 0):CT(arguments[0])&&(e=arguments[0],t=void 0):(t=void 0,e=void 0));var i=t||nt(),s=Xu(i,this).startOf("day"),n=Y.calendarFormat(this,s)||"sameElse",o=e&&(ps(e[n])?e[n].call(this,i):e[n]);return this.format(o||this.localeData().calendar(n,this,nt(i)))}function FT(){return new Yr(this)}function DT(t,e){var i=Ki(t)?t:nt(t);return this.isValid()&&i.isValid()?(e=Pi(e)||"millisecond",e==="millisecond"?this.valueOf()>i.valueOf():i.valueOf()<this.clone().startOf(e).valueOf()):!1}function RT(t,e){var i=Ki(t)?t:nt(t);return this.isValid()&&i.isValid()?(e=Pi(e)||"millisecond",e==="millisecond"?this.valueOf()<i.valueOf():this.clone().endOf(e).valueOf()<i.valueOf()):!1}function OT(t,e,i,s){var n=Ki(t)?t:nt(t),o=Ki(e)?e:nt(e);return this.isValid()&&n.isValid()&&o.isValid()?(s=s||"()",(s[0]==="("?this.isAfter(n,i):!this.isBefore(n,i))&&(s[1]===")"?this.isBefore(o,i):!this.isAfter(o,i))):!1}function ET(t,e){var i=Ki(t)?t:nt(t),s;return this.isValid()&&i.isValid()?(e=Pi(e)||"millisecond",e==="millisecond"?this.valueOf()===i.valueOf():(s=i.valueOf(),this.clone().startOf(e).valueOf()<=s&&s<=this.clone().endOf(e).valueOf())):!1}function LT(t,e){return this.isSame(t,e)||this.isAfter(t,e)}function AT(t,e){return this.isSame(t,e)||this.isBefore(t,e)}function PT(t,e,i){var s,n,o;if(!this.isValid())return NaN;if(s=Xu(t,this),!s.isValid())return NaN;switch(n=(s.utcOffset()-this.utcOffset())*6e4,e=Pi(e),e){case"year":o=Oa(this,s)/12;break;case"month":o=Oa(this,s);break;case"quarter":o=Oa(this,s)/3;break;case"second":o=(this-s)/1e3;break;case"minute":o=(this-s)/6e4;break;case"hour":o=(this-s)/36e5;break;case"day":o=(this-s-n)/864e5;break;case"week":o=(this-s-n)/6048e5;break;default:o=this-s}return i?o:Ii(o)}function Oa(t,e){if(t.date()<e.date())return-Oa(e,t);var i=(e.year()-t.year())*12+(e.month()-t.month()),s=t.clone().add(i,"months"),n,o;return e-s<0?(n=t.clone().add(i-1,"months"),o=(e-s)/(s-n)):(n=t.clone().add(i+1,"months"),o=(e-s)/(n-s)),-(i+o)||0}Y.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";Y.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function MT(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function VT(t){if(!this.isValid())return null;var e=t!==!0,i=e?this.clone().utc():this;return i.year()<0||i.year()>9999?Da(i,e?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):ps(Date.prototype.toISOString)?e?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Da(i,"Z")):Da(i,e?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function HT(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var t="moment",e="",i,s,n,o;return this.isLocal()||(t=this.utcOffset()===0?"moment.utc":"moment.parseZone",e="Z"),i="["+t+'("]',s=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",n="-MM-DD[T]HH:mm:ss.SSS",o=e+'[")]',this.format(i+s+n+o)}function NT(t){t||(t=this.isUtc()?Y.defaultFormatUtc:Y.defaultFormat);var e=Da(this,t);return this.localeData().postformat(e)}function zT(t,e){return this.isValid()&&(Ki(t)&&t.isValid()||nt(t).isValid())?ts({to:this,from:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function BT(t){return this.from(nt(),t)}function jT(t,e){return this.isValid()&&(Ki(t)&&t.isValid()||nt(t).isValid())?ts({from:this,to:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function YT(t){return this.to(nt(),t)}function Cv(t){var e;return t===void 0?this._locale._abbr:(e=Vs(t),e!=null&&(this._locale=e),this)}var Iv=Ai("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(t){return t===void 0?this.localeData():this.locale(t)});function Tv(){return this._locale}var Ja=1e3,go=60*Ja,Ka=60*go,Fv=(365*400+97)*24*Ka;function mo(t,e){return(t%e+e)%e}function Dv(t,e,i){return t<100&&t>=0?new Date(t+400,e,i)-Fv:new Date(t,e,i).valueOf()}function Rv(t,e,i){return t<100&&t>=0?Date.UTC(t+400,e,i)-Fv:Date.UTC(t,e,i)}function UT(t){var e,i;if(t=Pi(t),t===void 0||t==="millisecond"||!this.isValid())return this;switch(i=this._isUTC?Rv:Dv,t){case"year":e=i(this.year(),0,1);break;case"quarter":e=i(this.year(),this.month()-this.month()%3,1);break;case"month":e=i(this.year(),this.month(),1);break;case"week":e=i(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":e=i(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":e=i(this.year(),this.month(),this.date());break;case"hour":e=this._d.valueOf(),e-=mo(e+(this._isUTC?0:this.utcOffset()*go),Ka);break;case"minute":e=this._d.valueOf(),e-=mo(e,go);break;case"second":e=this._d.valueOf(),e-=mo(e,Ja);break}return this._d.setTime(e),Y.updateOffset(this,!0),this}function WT(t){var e,i;if(t=Pi(t),t===void 0||t==="millisecond"||!this.isValid())return this;switch(i=this._isUTC?Rv:Dv,t){case"year":e=i(this.year()+1,0,1)-1;break;case"quarter":e=i(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":e=i(this.year(),this.month()+1,1)-1;break;case"week":e=i(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":e=i(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":e=i(this.year(),this.month(),this.date()+1)-1;break;case"hour":e=this._d.valueOf(),e+=Ka-mo(e+(this._isUTC?0:this.utcOffset()*go),Ka)-1;break;case"minute":e=this._d.valueOf(),e+=go-mo(e,go)-1;break;case"second":e=this._d.valueOf(),e+=Ja-mo(e,Ja)-1;break}return this._d.setTime(e),Y.updateOffset(this,!0),this}function GT(){return this._d.valueOf()-(this._offset||0)*6e4}function qT(){return Math.floor(this.valueOf()/1e3)}function ZT(){return new Date(this.valueOf())}function XT(){var t=this;return[t.year(),t.month(),t.date(),t.hour(),t.minute(),t.second(),t.millisecond()]}function QT(){var t=this;return{years:t.year(),months:t.month(),date:t.date(),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds(),milliseconds:t.milliseconds()}}function JT(){return this.isValid()?this.toISOString():null}function KT(){return Au(this)}function eF(){return qs({},xe(this))}function tF(){return xe(this).overflow}function iF(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}re("N",0,0,"eraAbbr");re("NN",0,0,"eraAbbr");re("NNN",0,0,"eraAbbr");re("NNNN",0,0,"eraName");re("NNNNN",0,0,"eraNarrow");re("y",["y",1],"yo","eraYear");re("y",["yy",2],0,"eraYear");re("y",["yyy",3],0,"eraYear");re("y",["yyyy",4],0,"eraYear");ee("N",Qu);ee("NN",Qu);ee("NNN",Qu);ee("NNNN",fF);ee("NNNNN",pF);Ge(["N","NN","NNN","NNNN","NNNNN"],function(t,e,i,s){var n=i._locale.erasParse(t,s,i._strict);n?xe(i).era=n:xe(i).invalidEra=t});ee("y",No);ee("yy",No);ee("yyy",No);ee("yyyy",No);ee("yo",gF);Ge(["y","yy","yyy","yyyy"],Vt);Ge(["yo"],function(t,e,i,s){var n;i._locale._eraYearOrdinalRegex&&(n=t.match(i._locale._eraYearOrdinalRegex)),i._locale.eraYearOrdinalParse?e[Vt]=i._locale.eraYearOrdinalParse(t,n):e[Vt]=parseInt(t,10)});function sF(t,e){var i,s,n,o=this._eras||Vs("en")._eras;for(i=0,s=o.length;i<s;++i){switch(typeof o[i].since){case"string":n=Y(o[i].since).startOf("day"),o[i].since=n.valueOf();break}switch(typeof o[i].until){case"undefined":o[i].until=1/0;break;case"string":n=Y(o[i].until).startOf("day").valueOf(),o[i].until=n.valueOf();break}}return o}function nF(t,e,i){var s,n,o=this.eras(),r,a,l;for(t=t.toUpperCase(),s=0,n=o.length;s<n;++s)if(r=o[s].name.toUpperCase(),a=o[s].abbr.toUpperCase(),l=o[s].narrow.toUpperCase(),i)switch(e){case"N":case"NN":case"NNN":if(a===t)return o[s];break;case"NNNN":if(r===t)return o[s];break;case"NNNNN":if(l===t)return o[s];break}else if([r,a,l].indexOf(t)>=0)return o[s]}function oF(t,e){var i=t.since<=t.until?1:-1;return e===void 0?Y(t.since).year():Y(t.since).year()+(e-t.offset)*i}function rF(){var t,e,i,s=this.localeData().eras();for(t=0,e=s.length;t<e;++t)if(i=this.clone().startOf("day").valueOf(),s[t].since<=i&&i<=s[t].until||s[t].until<=i&&i<=s[t].since)return s[t].name;return""}function aF(){var t,e,i,s=this.localeData().eras();for(t=0,e=s.length;t<e;++t)if(i=this.clone().startOf("day").valueOf(),s[t].since<=i&&i<=s[t].until||s[t].until<=i&&i<=s[t].since)return s[t].narrow;return""}function lF(){var t,e,i,s=this.localeData().eras();for(t=0,e=s.length;t<e;++t)if(i=this.clone().startOf("day").valueOf(),s[t].since<=i&&i<=s[t].until||s[t].until<=i&&i<=s[t].since)return s[t].abbr;return""}function cF(){var t,e,i,s,n=this.localeData().eras();for(t=0,e=n.length;t<e;++t)if(i=n[t].since<=n[t].until?1:-1,s=this.clone().startOf("day").valueOf(),n[t].since<=s&&s<=n[t].until||n[t].until<=s&&s<=n[t].since)return(this.year()-Y(n[t].since).year())*i+n[t].offset;return this.year()}function dF(t){return ze(this,"_erasNameRegex")||Ju.call(this),t?this._erasNameRegex:this._erasRegex}function uF(t){return ze(this,"_erasAbbrRegex")||Ju.call(this),t?this._erasAbbrRegex:this._erasRegex}function hF(t){return ze(this,"_erasNarrowRegex")||Ju.call(this),t?this._erasNarrowRegex:this._erasRegex}function Qu(t,e){return e.erasAbbrRegex(t)}function fF(t,e){return e.erasNameRegex(t)}function pF(t,e){return e.erasNarrowRegex(t)}function gF(t,e){return e._eraYearOrdinalRegex||No}function Ju(){var t=[],e=[],i=[],s=[],n,o,r=this.eras();for(n=0,o=r.length;n<o;++n)e.push(ui(r[n].name)),t.push(ui(r[n].abbr)),i.push(ui(r[n].narrow)),s.push(ui(r[n].name)),s.push(ui(r[n].abbr)),s.push(ui(r[n].narrow));this._erasRegex=new RegExp("^("+s.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+e.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+t.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+i.join("|")+")","i")}re(0,["gg",2],0,function(){return this.weekYear()%100});re(0,["GG",2],0,function(){return this.isoWeekYear()%100});function fc(t,e){re(0,[t,t.length],0,e)}fc("gggg","weekYear");fc("ggggg","weekYear");fc("GGGG","isoWeekYear");fc("GGGGG","isoWeekYear");zt("weekYear","gg");zt("isoWeekYear","GG");Bt("weekYear",1);Bt("isoWeekYear",1);ee("G",lc);ee("g",lc);ee("GG",rt,wi);ee("gg",rt,wi);ee("GGGG",zu,Nu);ee("gggg",zu,Nu);ee("GGGGG",ac,oc);ee("ggggg",ac,oc);Wr(["gggg","ggggg","GGGG","GGGGG"],function(t,e,i,s){e[s.substr(0,2)]=Te(t)});Wr(["gg","GG"],function(t,e,i,s){e[s]=Y.parseTwoDigitYear(t)});function mF(t){return Ov.call(this,t,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function vF(t){return Ov.call(this,t,this.isoWeek(),this.isoWeekday(),1,4)}function bF(){return ks(this.year(),1,4)}function yF(){return ks(this.isoWeekYear(),1,4)}function xF(){var t=this.localeData()._week;return ks(this.year(),t.dow,t.doy)}function wF(){var t=this.localeData()._week;return ks(this.weekYear(),t.dow,t.doy)}function Ov(t,e,i,s,n){var o;return t==null?Fr(this,s,n).year:(o=ks(t,s,n),e>o&&(e=o),$F.call(this,t,e,i,s,n))}function $F(t,e,i,s,n){var o=uv(t,e,i,s,n),r=Tr(o.year,0,o.dayOfYear);return this.year(r.getUTCFullYear()),this.month(r.getUTCMonth()),this.date(r.getUTCDate()),this}re("Q",0,"Qo","quarter");zt("quarter","Q");Bt("quarter",7);ee("Q",tv);Ge("Q",function(t,e){e[ws]=(Te(t)-1)*3});function kF(t){return t==null?Math.ceil((this.month()+1)/3):this.month((t-1)*3+this.month()%3)}re("D",["DD",2],"Do","date");zt("date","D");Bt("date",9);ee("D",rt);ee("DD",rt,wi);ee("Do",function(t,e){return t?e._dayOfMonthOrdinalParse||e._ordinalParse:e._dayOfMonthOrdinalParseLenient});Ge(["D","DD"],as);Ge("Do",function(t,e){e[as]=Te(t.match(rt)[0])});var Ev=Ho("Date",!0);re("DDD",["DDDD",3],"DDDo","dayOfYear");zt("dayOfYear","DDD");Bt("dayOfYear",4);ee("DDD",rc);ee("DDDD",iv);Ge(["DDD","DDDD"],function(t,e,i){i._dayOfYear=Te(t)});function _F(t){var e=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return t==null?e:this.add(t-e,"d")}re("m",["mm",2],0,"minute");zt("minute","m");Bt("minute",14);ee("m",rt);ee("mm",rt,wi);Ge(["m","mm"],Wi);var SF=Ho("Minutes",!1);re("s",["ss",2],0,"second");zt("second","s");Bt("second",15);ee("s",rt);ee("ss",rt,wi);Ge(["s","ss"],$s);var CF=Ho("Seconds",!1);re("S",0,0,function(){return~~(this.millisecond()/100)});re(0,["SS",2],0,function(){return~~(this.millisecond()/10)});re(0,["SSS",3],0,"millisecond");re(0,["SSSS",4],0,function(){return this.millisecond()*10});re(0,["SSSSS",5],0,function(){return this.millisecond()*100});re(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});re(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});re(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});re(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});zt("millisecond","ms");Bt("millisecond",16);ee("S",rc,tv);ee("SS",rc,wi);ee("SSS",rc,iv);var Zs,Lv;for(Zs="SSSS";Zs.length<=9;Zs+="S")ee(Zs,No);function IF(t,e){e[Tn]=Te(("0."+t)*1e3)}for(Zs="S";Zs.length<=9;Zs+="S")Ge(Zs,IF);Lv=Ho("Milliseconds",!1);re("z",0,0,"zoneAbbr");re("zz",0,0,"zoneName");function TF(){return this._isUTC?"UTC":""}function FF(){return this._isUTC?"Coordinated Universal Time":""}var A=Yr.prototype;A.add=wT;A.calendar=TT;A.clone=FT;A.diff=PT;A.endOf=WT;A.format=NT;A.from=zT;A.fromNow=BT;A.to=jT;A.toNow=YT;A.get=RC;A.invalidAt=tF;A.isAfter=DT;A.isBefore=RT;A.isBetween=OT;A.isSame=ET;A.isSameOrAfter=LT;A.isSameOrBefore=AT;A.isValid=KT;A.lang=Iv;A.locale=Cv;A.localeData=Tv;A.max=KI;A.min=JI;A.parsingFlags=eF;A.set=OC;A.startOf=UT;A.subtract=$T;A.toArray=XT;A.toObject=QT;A.toDate=ZT;A.toISOString=VT;A.inspect=HT;typeof Symbol<"u"&&Symbol.for!=null&&(A[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});A.toJSON=JT;A.toString=MT;A.unix=qT;A.valueOf=GT;A.creationData=iF;A.eraName=rF;A.eraNarrow=aF;A.eraAbbr=lF;A.eraYear=cF;A.year=dv;A.isLeapYear=QC;A.weekYear=mF;A.isoWeekYear=vF;A.quarter=A.quarters=kF;A.month=lv;A.daysInMonth=qC;A.week=A.weeks=sI;A.isoWeek=A.isoWeeks=nI;A.weeksInYear=xF;A.weeksInWeekYear=wF;A.isoWeeksInYear=bF;A.isoWeeksInISOWeekYear=yF;A.date=Ev;A.day=A.days=vI;A.weekday=bI;A.isoWeekday=yI;A.dayOfYear=_F;A.hour=A.hours=CI;A.minute=A.minutes=SF;A.second=A.seconds=CF;A.millisecond=A.milliseconds=Lv;A.utcOffset=lT;A.utc=dT;A.local=uT;A.parseZone=hT;A.hasAlignedHourOffset=fT;A.isDST=pT;A.isLocal=mT;A.isUtcOffset=vT;A.isUtc=$v;A.isUTC=$v;A.zoneAbbr=TF;A.zoneName=FF;A.dates=Ai("dates accessor is deprecated. Use date instead.",Ev);A.months=Ai("months accessor is deprecated. Use month instead",lv);A.years=Ai("years accessor is deprecated. Use year instead",dv);A.zone=Ai("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",cT);A.isDSTShifted=Ai("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",gT);function DF(t){return nt(t*1e3)}function RF(){return nt.apply(null,arguments).parseZone()}function Av(t){return t}var Be=Mu.prototype;Be.calendar=vC;Be.longDateFormat=wC;Be.invalidDate=kC;Be.ordinal=CC;Be.preparse=Av;Be.postformat=Av;Be.relativeTime=TC;Be.pastFuture=FC;Be.set=gC;Be.eras=sF;Be.erasParse=nF;Be.erasConvertYear=oF;Be.erasAbbrRegex=uF;Be.erasNameRegex=dF;Be.erasNarrowRegex=hF;Be.months=YC;Be.monthsShort=UC;Be.monthsParse=GC;Be.monthsRegex=XC;Be.monthsShortRegex=ZC;Be.week=KC;Be.firstDayOfYear=iI;Be.firstDayOfWeek=tI;Be.weekdays=hI;Be.weekdaysMin=pI;Be.weekdaysShort=fI;Be.weekdaysParse=mI;Be.weekdaysRegex=xI;Be.weekdaysShortRegex=wI;Be.weekdaysMinRegex=$I;Be.isPM=_I;Be.meridiem=II;function el(t,e,i,s){var n=Vs(),o=fs().set(s,e);return n[i](o,t)}function Pv(t,e,i){if(Is(t)&&(e=t,t=void 0),t=t||"",e!=null)return el(t,e,i,"month");var s,n=[];for(s=0;s<12;s++)n[s]=el(t,s,i,"month");return n}function Ku(t,e,i,s){typeof t=="boolean"?(Is(e)&&(i=e,e=void 0),e=e||""):(e=t,i=e,t=!1,Is(e)&&(i=e,e=void 0),e=e||"");var n=Vs(),o=t?n._week.dow:0,r,a=[];if(i!=null)return el(e,(i+o)%7,s,"day");for(r=0;r<7;r++)a[r]=el(e,(r+o)%7,s,"day");return a}function OF(t,e){return Pv(t,e,"months")}function EF(t,e){return Pv(t,e,"monthsShort")}function LF(t,e,i){return Ku(t,e,i,"weekdays")}function AF(t,e,i){return Ku(t,e,i,"weekdaysShort")}function PF(t,e,i){return Ku(t,e,i,"weekdaysMin")}tn("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(t){var e=t%10,i=Te(t%100/10)===1?"th":e===1?"st":e===2?"nd":e===3?"rd":"th";return t+i}});Y.lang=Ai("moment.lang is deprecated. Use moment.locale instead.",tn);Y.langData=Ai("moment.langData is deprecated. Use moment.localeData instead.",Vs);var ms=Math.abs;function MF(){var t=this._data;return this._milliseconds=ms(this._milliseconds),this._days=ms(this._days),this._months=ms(this._months),t.milliseconds=ms(t.milliseconds),t.seconds=ms(t.seconds),t.minutes=ms(t.minutes),t.hours=ms(t.hours),t.months=ms(t.months),t.years=ms(t.years),this}function Mv(t,e,i,s){var n=ts(e,i);return t._milliseconds+=s*n._milliseconds,t._days+=s*n._days,t._months+=s*n._months,t._bubble()}function VF(t,e){return Mv(this,t,e,1)}function HF(t,e){return Mv(this,t,e,-1)}function jf(t){return t<0?Math.floor(t):Math.ceil(t)}function NF(){var t=this._milliseconds,e=this._days,i=this._months,s=this._data,n,o,r,a,l;return t>=0&&e>=0&&i>=0||t<=0&&e<=0&&i<=0||(t+=jf(Id(i)+e)*864e5,e=0,i=0),s.milliseconds=t%1e3,n=Ii(t/1e3),s.seconds=n%60,o=Ii(n/60),s.minutes=o%60,r=Ii(o/60),s.hours=r%24,e+=Ii(r/24),l=Ii(Vv(e)),i+=l,e-=jf(Id(l)),a=Ii(i/12),i%=12,s.days=e,s.months=i,s.years=a,this}function Vv(t){return t*4800/146097}function Id(t){return t*146097/4800}function zF(t){if(!this.isValid())return NaN;var e,i,s=this._milliseconds;if(t=Pi(t),t==="month"||t==="quarter"||t==="year")switch(e=this._days+s/864e5,i=this._months+Vv(e),t){case"month":return i;case"quarter":return i/3;case"year":return i/12}else switch(e=this._days+Math.round(Id(this._months)),t){case"week":return e/7+s/6048e5;case"day":return e+s/864e5;case"hour":return e*24+s/36e5;case"minute":return e*1440+s/6e4;case"second":return e*86400+s/1e3;case"millisecond":return Math.floor(e*864e5)+s;default:throw new Error("Unknown unit "+t)}}function BF(){return this.isValid()?this._milliseconds+this._days*864e5+this._months%12*2592e6+Te(this._months/12)*31536e6:NaN}function Hs(t){return function(){return this.as(t)}}var jF=Hs("ms"),YF=Hs("s"),UF=Hs("m"),WF=Hs("h"),GF=Hs("d"),qF=Hs("w"),ZF=Hs("M"),XF=Hs("Q"),QF=Hs("y");function JF(){return ts(this)}function KF(t){return t=Pi(t),this.isValid()?this[t+"s"]():NaN}function qn(t){return function(){return this.isValid()?this._data[t]:NaN}}var eD=qn("milliseconds"),tD=qn("seconds"),iD=qn("minutes"),sD=qn("hours"),nD=qn("days"),oD=qn("months"),rD=qn("years");function aD(){return Ii(this.days()/7)}var bs=Math.round,oo={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function lD(t,e,i,s,n){return n.relativeTime(e||1,!!i,t,s)}function cD(t,e,i,s){var n=ts(t).abs(),o=bs(n.as("s")),r=bs(n.as("m")),a=bs(n.as("h")),l=bs(n.as("d")),c=bs(n.as("M")),d=bs(n.as("w")),h=bs(n.as("y")),v=o<=i.ss&&["s",o]||o<i.s&&["ss",o]||r<=1&&["m"]||r<i.m&&["mm",r]||a<=1&&["h"]||a<i.h&&["hh",a]||l<=1&&["d"]||l<i.d&&["dd",l];return i.w!=null&&(v=v||d<=1&&["w"]||d<i.w&&["ww",d]),v=v||c<=1&&["M"]||c<i.M&&["MM",c]||h<=1&&["y"]||["yy",h],v[2]=e,v[3]=+t>0,v[4]=s,lD.apply(null,v)}function dD(t){return t===void 0?bs:typeof t=="function"?(bs=t,!0):!1}function uD(t,e){return oo[t]===void 0?!1:e===void 0?oo[t]:(oo[t]=e,t==="s"&&(oo.ss=e-1),!0)}function hD(t,e){if(!this.isValid())return this.localeData().invalidDate();var i=!1,s=oo,n,o;return typeof t=="object"&&(e=t,t=!1),typeof t=="boolean"&&(i=t),typeof e=="object"&&(s=Object.assign({},oo,e),e.s!=null&&e.ss==null&&(s.ss=e.s-1)),n=this.localeData(),o=cD(this,!i,s,n),i&&(o=n.pastFuture(+this,o)),n.postformat(o)}var Wc=Math.abs;function Kn(t){return(t>0)-(t<0)||+t}function pc(){if(!this.isValid())return this.localeData().invalidDate();var t=Wc(this._milliseconds)/1e3,e=Wc(this._days),i=Wc(this._months),s,n,o,r,a=this.asSeconds(),l,c,d,h;return a?(s=Ii(t/60),n=Ii(s/60),t%=60,s%=60,o=Ii(i/12),i%=12,r=t?t.toFixed(3).replace(/\.?0+$/,""):"",l=a<0?"-":"",c=Kn(this._months)!==Kn(a)?"-":"",d=Kn(this._days)!==Kn(a)?"-":"",h=Kn(this._milliseconds)!==Kn(a)?"-":"",l+"P"+(o?c+o+"Y":"")+(i?c+i+"M":"")+(e?d+e+"D":"")+(n||s||t?"T":"")+(n?h+n+"H":"")+(s?h+s+"M":"")+(t?h+r+"S":"")):"P0D"}var Le=hc.prototype;Le.isValid=nT;Le.abs=MF;Le.add=VF;Le.subtract=HF;Le.as=zF;Le.asMilliseconds=jF;Le.asSeconds=YF;Le.asMinutes=UF;Le.asHours=WF;Le.asDays=GF;Le.asWeeks=qF;Le.asMonths=ZF;Le.asQuarters=XF;Le.asYears=QF;Le.valueOf=BF;Le._bubble=NF;Le.clone=JF;Le.get=KF;Le.milliseconds=eD;Le.seconds=tD;Le.minutes=iD;Le.hours=sD;Le.days=nD;Le.weeks=aD;Le.months=oD;Le.years=rD;Le.humanize=hD;Le.toISOString=pc;Le.toString=pc;Le.toJSON=pc;Le.locale=Cv;Le.localeData=Tv;Le.toIsoString=Ai("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",pc);Le.lang=Iv;re("X",0,0,"unix");re("x",0,0,"valueOf");ee("x",lc);ee("X",LC);Ge("X",function(t,e,i){i._d=new Date(parseFloat(t)*1e3)});Ge("x",function(t,e,i){i._d=new Date(Te(t))});//! moment.js
Y.version="2.29.4";fC(nt);Y.fn=A;Y.min=eT;Y.max=tT;Y.now=iT;Y.utc=fs;Y.unix=DF;Y.months=OF;Y.isDate=jr;Y.locale=tn;Y.invalid=sc;Y.duration=ts;Y.isMoment=Ki;Y.weekdays=LF;Y.parseZone=RF;Y.localeData=Vs;Y.isDuration=Ra;Y.monthsShort=EF;Y.weekdaysMin=PF;Y.defineLocale=Uu;Y.updateLocale=RI;Y.locales=OI;Y.weekdaysShort=AF;Y.normalizeUnits=Pi;Y.relativeTimeRounding=dD;Y.relativeTimeThreshold=uD;Y.calendarFormat=IT;Y.prototype=A;Y.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};const Yf=ve({__name:"Time",props:{format:{}},setup(t){const e=t,i=it(Y().format(e.format)),s=()=>{i.value=Y().format(e.format)};var n=void 0;return Lt(()=>{n=setInterval(s,1e3)}),yi(()=>{clearInterval(n)}),(o,r)=>dt(i.value)}}),fD={class:"text-center mt-16 text-white"},pD={class:"text-rp-6"},gD={class:"text-rp-3"},mD=ve({__name:"ScreenSaver",props:{setIsTyped:{type:Function}},setup(t){const e=t,i=it(!1),s=async()=>new Promise(()=>setTimeout(()=>{e.setIsTyped(!0)},300)),n=async()=>{i.value=!0,await s()},o=Po({start:0,end:0,cur:0,curMax:0,active:!1}),r=d=>{o.active=!0,o.start=d.screenY},a=d=>{o.active=!1,o.end=d.screenY,o.cur=0},l=d=>{o.active&&(o.start>d.screenY?o.cur=o.start-d.screenY:(o.curMax=d.screenY,o.cur=0,o.start=o.curMax))},c=async d=>{a(d),o.start-o.end>=d.view.innerHeight/3&&(i.value=!0,await s())};return Lt(()=>{window.addEventListener("mousedown",r),window.addEventListener("mousemove",l),window.addEventListener("mouseup",c),window.addEventListener("keypress",n)}),yi(()=>{window.removeEventListener("dragstart",r),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",c),window.removeEventListener("keypress",n)}),(d,h)=>(X(),be("div",{graggable:"true",class:ii([[i.value?"-translate-y-[10%] opacity-0 transition-all":"",o.active?"":"transition-all"],"relative left-0 full-screen grid justify-center select-none"]),style:an({top:-o.cur/8+"px"})},[S("div",fD,[S("p",pD,[I(Yf,{format:"HH:mm"})]),S("p",gD,[I(Yf,{format:"MM-DD-YYYY"})])])],6))}}),gc=ic("user_store",{state:()=>({accountState:{name:"t",password:"p"},isLogout:!0}),getters:{getUserAccountState:t=>t.accountState,getUserIsLogout:t=>t.isLogout},actions:{setIsLogout(t){this.isLogout=t}},persist:!0}),vD={},bD={class:"avatar-panel bg-black/25 backdrop-blur-lg text-white flex-none font-semibold text-8xl grid place-content-center"};function yD(t,e){const i=ce("Icon"),s=ce("IconButton");return X(),be("div",bD,[I(s,{"has-filled":"",class:"w-full h-full scale-[4] icon-filled"},{default:M(()=>[I(i,null,{default:M(()=>[Ne("person")]),_:1})]),_:1})])}const xD=xi(vD,[["render",yD]]),wD={class:"drop-shadow-md shadow-black text-4xl text-white"},$D=ve({__name:"ProfileName",setup(t){const e=gc();return(i,s)=>(X(),be("p",wD,dt(we(e).accountState.name),1))}}),is=ic("system_store",{state:()=>({brightness:100,isNightlight:!1,isLocked:!0,needShutdown:!1,isShutdown:!1,starts:{isOpening:!1}}),getters:{getSystemBrightness:t=>t.brightness,getSystemIsNightlight:t=>t.isNightlight,getSystemIsLocked:t=>t.isLocked,getSystemNeedShutdown:t=>t.needShutdown,getSystemIsShutdown:t=>t.isShutdown,getSystemStarts:t=>t.starts},actions:{setBrightness(t){this.brightness=t},setIsNightlight(t){this.isNightlight=t},toggleIsNightlight(){this.isNightlight=!this.isNightlight},setIsLocked(t){this.isLocked=t},setNeedShutdown(t){this.needShutdown=t},setIsShutdown(t){this.isShutdown=t},setStarts(t){this.starts=t}},persist:!0}),kD={class:"relative full-screen flex flex-col gap-16 items-center justify-center"},_D={class:"flex items-center relative"},SD=["onKeyup"],CD={key:0},ID={key:0,class:"text-rb"},TD={key:1,class:"text-rb"},FD={key:1},DD=ve({__name:"Login",setup(t){const e=is(),i=gc(),s=Po({password:"",pending:!1,isError:!1,isTyped:!1}),n=async c=>{s.pending=c},o=async c=>{s.isError=c},r=async c=>{s.isTyped=c},a=async c=>await new Promise(()=>setTimeout(()=>{c()},500)),l=async()=>{r(!0),n(!0),o(!1),s.password===i.accountState.password&&await a(()=>{n(!1),i.setIsLogout(!1),e.setIsLocked(!1)}),await a(()=>{o(!0),n(!1)})};return(c,d)=>{const h=ce("Icon");return X(),be("div",kD,[I(xD),I($D),S("form",_D,[S("fluent-text-field",{autofocus:"",type:"password",onInput:d[0]||(d[0]=v=>s.password=v.target.value),appearance:"filled",onKeyup:CS(l,["enter"]),placeholder:"Password"},null,40,SD),S("fluent-button",{onClick:l,class:"absolute right-0 z-[1] p-0.5 grid place-content-center"},[I(h,null,{default:M(()=>[Ne("arrow_forward")]),_:1})])]),s.pending?(X(),be("fluent-progress-ring",FD)):(X(),be("div",CD,[s.isError?(X(),be("p",ID,"Typed password is incorrect")):we(e).getSystemIsLocked&&s.isTyped?(X(),be("p",TD,"Welcome")):vd("",!0)]))])}}}),RD={class:"relative full-screen overflow-clip"},OD=ve({__name:"LockScreen",setup(t){const e=it(!1),i=o=>{e.value=o};var s=void 0;const n=()=>{clearTimeout(s),s=setTimeout(()=>{i(!1)},1e4)};return Lt(()=>{window.addEventListener("mousemove",n),window.addEventListener("keypress",n)}),yi(()=>{window.removeEventListener("mousemove",n),window.removeEventListener("keypress",n)}),(o,r)=>(X(),be("div",RD,[S("div",{class:ii([[e.value?"blur scale-125 brightness-75":""],"absolute full-screen transition-all duration-500 lock-screen-wallpaper"])},null,2),e.value?(X(),We(DD,{key:1})):(X(),We(mD,{key:0,"set-is-typed":i}))]))}}),ED={},LD={placeholder:"Type here to search"};function AD(t,e){return X(),be("fluent-search",LD)}const PD=xi(ED,[["render",AD]]),Gr=ic("theme_store",{state:()=>({theme:{darkModeEnabled:!1,baseLayerValue:0,swatchColor:{r:0,g:120,b:215},blurEnabled:!0}}),getters:{getTheme:t=>t.theme},actions:{setBlurenabled(t){this.theme.blurEnabled=t},setIsDarkMode(t){this.theme.darkModeEnabled=t},setBaseLayerValue(t){this.theme.baseLayerValue=t},setSwatchColor(t,e,i){this.theme.swatchColor={r:t,g:e,b:i}}},persist:!0}),MD={class:"flex gap-4"},VD=S("h1",{class:"text-rb"},"Blur",-1),HD=ve({__name:"BlurCheckbox",setup(t){const e=it(),i=Gr(),s=n=>{i.setBlurenabled(n.target.checked)};return Lt(()=>{e.value.checked=i.getTheme.blurEnabled}),(n,o)=>(X(),be("label",MD,[VD,S("fluent-checkbox",{ref_key:"checkbox",ref:e,onChange:s},null,544)]))}});var mn=function(){/*!
* Copyright (c) 2021-2023 Momo Bassit.
* Licensed under the MIT License (MIT)
* https://github.com/mdbassit/Coloris
* Version: 0.21.1
* NPM: https://github.com/melloware/coloris-npm
*/return function(t,e,i,s){var n=e.createElement("canvas").getContext("2d"),o={r:0,g:0,b:0,h:0,s:0,v:0,a:1},r,a,l,c,d,h,v,w,F,$,T,W,Z,ge,J,Ce,Oe={},D={el:"[data-coloris]",parent:"body",theme:"default",themeMode:"light",rtl:!1,wrap:!0,margin:2,format:"hex",formatToggle:!1,swatches:[],swatchesOnly:!1,alpha:!0,forceAlpha:!1,focusInput:!0,selectInput:!1,inline:!1,defaultColor:"#000000",clearButton:!1,clearLabel:"Clear",closeButton:!1,closeLabel:"Close",onChange:function(){return s},a11y:{open:"Open color picker",close:"Close color picker",clear:"Clear the selected color",marker:"Saturation: {s}. Brightness: {v}.",hueSlider:"Hue slider",alphaSlider:"Opacity slider",input:"Color value field",format:"Color format",swatch:"Color swatch",instruction:"Saturation and brightness selector. Use up, down, left and right arrow keys to select."}},ke={},Ee="",at={},_t=!1;function jt(p){if(typeof p=="object"){var y=function(){switch(C){case"el":Xe(p.el),p.wrap!==!1&&$i(p.el);break;case"parent":r=e.querySelector(p.parent),r&&(r.appendChild(a),D.parent=p.parent,r===e.body&&(r=s));break;case"themeMode":D.themeMode=p.themeMode,p.themeMode==="auto"&&t.matchMedia&&t.matchMedia("(prefers-color-scheme: dark)").matches&&(D.themeMode="dark");case"theme":p.theme&&(D.theme=p.theme),a.className="clr-picker clr-"+D.theme+" clr-"+D.themeMode,D.inline&&He();break;case"rtl":D.rtl=!!p.rtl,e.querySelectorAll(".clr-field").forEach(function(_i){return _i.classList.toggle("clr-rtl",D.rtl)});break;case"margin":p.margin*=1,D.margin=isNaN(p.margin)?D.margin:p.margin;break;case"wrap":p.el&&p.wrap&&$i(p.el);break;case"formatToggle":D.formatToggle=!!p.formatToggle,Q("clr-format").style.display=D.formatToggle?"block":"none",D.formatToggle&&(D.format="auto");break;case"swatches":if(Array.isArray(p.swatches)){var oe=[];p.swatches.forEach(function(_i,oh){oe.push('<button type="button" id="clr-swatch-'+oh+'" aria-labelledby="clr-swatch-label clr-swatch-'+oh+'" style="color: '+_i+';">'+_i+"</button>")}),Q("clr-swatches").innerHTML=oe.length?"<div>"+oe.join("")+"</div>":"",D.swatches=p.swatches.slice()}break;case"swatchesOnly":D.swatchesOnly=!!p.swatchesOnly,a.setAttribute("data-minimal",D.swatchesOnly);break;case"alpha":D.alpha=!!p.alpha,a.setAttribute("data-alpha",D.alpha);break;case"inline":if(D.inline=!!p.inline,a.setAttribute("data-inline",D.inline),D.inline){var Ie=p.defaultColor||D.defaultColor;ge=Jt(Ie),He(),li(Ie)}break;case"clearButton":typeof p.clearButton=="object"&&(p.clearButton.label&&(D.clearLabel=p.clearButton.label,v.innerHTML=D.clearLabel),p.clearButton=p.clearButton.show),D.clearButton=!!p.clearButton,v.style.display=D.clearButton?"block":"none";break;case"clearLabel":D.clearLabel=p.clearLabel,v.innerHTML=D.clearLabel;break;case"closeButton":D.closeButton=!!p.closeButton,D.closeButton?a.insertBefore(w,d):d.appendChild(w);break;case"closeLabel":D.closeLabel=p.closeLabel,w.innerHTML=D.closeLabel;break;case"a11y":var ye=p.a11y,et=!1;if(typeof ye=="object")for(var he in ye)ye[he]&&D.a11y[he]&&(D.a11y[he]=ye[he],et=!0);if(et){var qe=Q("clr-open-label"),ci=Q("clr-swatch-label");qe.innerHTML=D.a11y.open,ci.innerHTML=D.a11y.swatch,w.setAttribute("aria-label",D.a11y.close),v.setAttribute("aria-label",D.a11y.clear),F.setAttribute("aria-label",D.a11y.hueSlider),T.setAttribute("aria-label",D.a11y.alphaSlider),h.setAttribute("aria-label",D.a11y.input),l.setAttribute("aria-label",D.a11y.instruction)}break;default:D[C]=p[C]}};for(var C in p)y()}}function Ns(p,y){typeof p=="string"&&typeof y=="object"&&(ke[p]=y,_t=!0)}function vn(p){delete ke[p],Object.keys(ke).length===0&&(_t=!1,p===Ee&&Ve())}function Mi(p){if(_t){var y=["el","wrap","rtl","inline","defaultColor","a11y"],C=function(){var ye=ke[j];if(p.matches(j)){Ee=j,at={},y.forEach(function(he){return delete ye[he]});for(var et in ye)at[et]=Array.isArray(D[et])?D[et].slice():D[et];return jt(ye),"break"}};for(var j in ke){var oe=C();if(oe==="break")break}}}function Ve(){Object.keys(at).length>0&&(jt(at),Ee="",at={})}function Xe(p){N(e,"click",p,function(y){D.inline||(Mi(y.target),Z=y.target,J=Z.value,ge=Jt(J),a.classList.add("clr-open"),He(),li(J),(D.focusInput||D.selectInput)&&(h.focus({preventScroll:!0}),h.setSelectionRange(Z.selectionStart,Z.selectionEnd)),D.selectInput&&h.select(),(Ce||D.swatchesOnly)&&L().shift().focus(),Z.dispatchEvent(new Event("open",{bubbles:!0})))}),N(e,"input",p,function(y){var C=y.target.parentNode;C.classList.contains("clr-field")&&(C.style.color=y.target.value)})}function He(){if(!(!a||!Z&&!D.inline)){var p=r,y=t.scrollY,C=a.offsetWidth,j=a.offsetHeight,oe={left:!1,top:!1},Ie,ye,et,he={x:0,y:0};if(p&&(Ie=t.getComputedStyle(p),ye=parseFloat(Ie.marginTop),et=parseFloat(Ie.borderTopWidth),he=p.getBoundingClientRect(),he.y+=et+y),!D.inline){var qe=Z.getBoundingClientRect(),ci=qe.x,_i=y+qe.y+qe.height+D.margin;p?(ci-=he.x,_i-=he.y,ci+C>p.clientWidth&&(ci+=qe.width-C,oe.left=!0),_i+j>p.clientHeight-ye&&j+D.margin<=qe.top-(he.y-y)&&(_i-=qe.height+j+D.margin*2,oe.top=!0),_i+=p.scrollTop):(ci+C>e.documentElement.clientWidth&&(ci+=qe.width-C,oe.left=!0),_i+j-y>e.documentElement.clientHeight&&j+D.margin<=qe.top&&(_i=y+qe.y-j-D.margin,oe.top=!0)),a.classList.toggle("clr-left",oe.left),a.classList.toggle("clr-top",oe.top),a.style.left=ci+"px",a.style.top=_i+"px",he.x+=a.offsetLeft,he.y+=a.offsetTop}Oe={width:l.offsetWidth,height:l.offsetHeight,x:l.offsetLeft+he.x,y:l.offsetTop+he.y}}}function $i(p){e.querySelectorAll(p).forEach(function(y){var C=y.parentNode;if(!C.classList.contains("clr-field")){var j=e.createElement("div"),oe="clr-field";(D.rtl||y.classList.contains("clr-rtl"))&&(oe+=" clr-rtl"),j.innerHTML='<button type="button" aria-labelledby="clr-open-label"></button>',C.insertBefore(j,y),j.setAttribute("class",oe),j.style.color=y.value,j.appendChild(y)}})}function Vi(p){if(Z&&!D.inline){var y=Z;p&&(Z=s,J!==y.value&&(y.value=J,y.dispatchEvent(new Event("input",{bubbles:!0})))),setTimeout(function(){J!==y.value&&y.dispatchEvent(new Event("change",{bubbles:!0}))}),a.classList.remove("clr-open"),_t&&Ve(),y.dispatchEvent(new Event("close",{bubbles:!0})),D.focusInput&&y.focus({preventScroll:!0}),Z=s}}function li(p){var y=R(p),C=O(y);Xr(C.s,C.v),zs(y,C),F.value=C.h,a.style.color="hsl("+C.h+", 100%, 50%)",$.style.left=C.h/360*100+"%",c.style.left=Oe.width*C.s/100+"px",c.style.top=Oe.height-Oe.height*C.v/100+"px",T.value=C.a*100,W.style.left=C.a*100+"%"}function Jt(p){var y=p.substring(0,3).toLowerCase();return y==="rgb"||y==="hsl"?y:"hex"}function Hi(p){p=p!==s?p:h.value,Z&&(Z.value=p,Z.dispatchEvent(new Event("input",{bubbles:!0}))),D.onChange&&D.onChange.call(t,p,Z),e.dispatchEvent(new CustomEvent("coloris:pick",{detail:{color:p,currentEl:Z}}))}function Zr(p,y){var C={h:F.value*1,s:p/Oe.width*100,v:100-y/Oe.height*100,a:T.value/100},j=b(C);Xr(C.s,C.v),zs(j,C),Hi()}function Xr(p,y){var C=D.a11y.marker;p=p.toFixed(1)*1,y=y.toFixed(1)*1,C=C.replace("{s}",p),C=C.replace("{v}",y),c.setAttribute("aria-label",C)}function Ni(p){return{pageX:p.changedTouches?p.changedTouches[0].pageX:p.pageX,pageY:p.changedTouches?p.changedTouches[0].pageY:p.pageY}}function ki(p){var y=Ni(p),C=y.pageX-Oe.x,j=y.pageY-Oe.y;r&&(j+=r.scrollTop),gs(C,j),p.preventDefault(),p.stopPropagation()}function Qr(p,y){var C=c.style.left.replace("px","")*1+p,j=c.style.top.replace("px","")*1+y;gs(C,j)}function gs(p,y){p=p<0?0:p>Oe.width?Oe.width:p,y=y<0?0:y>Oe.height?Oe.height:y,c.style.left=p+"px",c.style.top=y+"px",Zr(p,y),c.focus()}function zs(p,y){p===void 0&&(p={}),y===void 0&&(y={});var C=D.format;for(var j in p)o[j]=p[j];for(var oe in y)o[oe]=y[oe];var Ie=H(o),ye=Ie.substring(0,7);switch(c.style.color=ye,W.parentNode.style.color=ye,W.style.color=Ie,d.style.color=Ie,l.style.display="none",l.offsetHeight,l.style.display="",W.nextElementSibling.style.display="none",W.nextElementSibling.offsetHeight,W.nextElementSibling.style.display="",C==="mixed"?C=o.a===1?"hex":"rgb":C==="auto"&&(C=ge),C){case"hex":h.value=Ie;break;case"rgb":h.value=G(o);break;case"hsl":h.value=V(k(o));break}e.querySelector('.clr-format [value="'+C+'"]').checked=!0}function Bo(){var p=F.value*1,y=c.style.left.replace("px","")*1,C=c.style.top.replace("px","")*1;a.style.color="hsl("+p+", 100%, 50%)",$.style.left=p/360*100+"%",Zr(y,C)}function g(){var p=T.value/100;W.style.left=p*100+"%",zs({a:p}),Hi()}function b(p){var y=p.s/100,C=p.v/100,j=y*C,oe=p.h/60,Ie=j*(1-i.abs(oe%2-1)),ye=C-j;j=j+ye,Ie=Ie+ye;var et=i.floor(oe)%6,he=[j,Ie,ye,ye,Ie,j][et],qe=[Ie,j,j,Ie,ye,ye][et],ci=[ye,ye,Ie,j,j,Ie][et];return{r:i.round(he*255),g:i.round(qe*255),b:i.round(ci*255),a:p.a}}function k(p){var y=p.v/100,C=y*(1-p.s/100/2),j;return C>0&&C<1&&(j=i.round((y-C)/i.min(C,1-C)*100)),{h:p.h,s:j||0,l:i.round(C*100),a:p.a}}function O(p){var y=p.r/255,C=p.g/255,j=p.b/255,oe=i.max(y,C,j),Ie=i.min(y,C,j),ye=oe-Ie,et=oe,he=0,qe=0;return ye&&(oe===y&&(he=(C-j)/ye),oe===C&&(he=2+(j-y)/ye),oe===j&&(he=4+(y-C)/ye),oe&&(qe=ye/oe)),he=i.floor(he*60),{h:he<0?he+360:he,s:i.round(qe*100),v:i.round(et*100),a:p.a}}function R(p){var y=/^((rgba)|rgb)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,C,j;return n.fillStyle="#000",n.fillStyle=p,C=y.exec(n.fillStyle),C?(j={r:C[3]*1,g:C[4]*1,b:C[5]*1,a:C[6]*1},j.a=+j.a.toFixed(2)):(C=n.fillStyle.replace("#","").match(/.{2}/g).map(function(oe){return parseInt(oe,16)}),j={r:C[0],g:C[1],b:C[2],a:1}),j}function H(p){var y=p.r.toString(16),C=p.g.toString(16),j=p.b.toString(16),oe="";if(p.r<16&&(y="0"+y),p.g<16&&(C="0"+C),p.b<16&&(j="0"+j),D.alpha&&(p.a<1||D.forceAlpha)){var Ie=p.a*255|0;oe=Ie.toString(16),Ie<16&&(oe="0"+oe)}return"#"+y+C+j+oe}function G(p){return!D.alpha||p.a===1&&!D.forceAlpha?"rgb("+p.r+", "+p.g+", "+p.b+")":"rgba("+p.r+", "+p.g+", "+p.b+", "+p.a+")"}function V(p){return!D.alpha||p.a===1&&!D.forceAlpha?"hsl("+p.h+", "+p.s+"%, "+p.l+"%)":"hsla("+p.h+", "+p.s+"%, "+p.l+"%, "+p.a+")"}function B(){e.getElementById("clr-picker")||(r=s,a=e.createElement("div"),a.setAttribute("id","clr-picker"),a.className="clr-picker",a.innerHTML='<input id="clr-color-value" name="clr-color-value" class="clr-color" type="text" value="" spellcheck="false" aria-label="'+D.a11y.input+'">'+('<div id="clr-color-area" class="clr-gradient" role="application" aria-label="'+D.a11y.instruction+'">')+'<div id="clr-color-marker" class="clr-marker" tabindex="0"></div></div><div class="clr-hue">'+('<input id="clr-hue-slider" name="clr-hue-slider" type="range" min="0" max="360" step="1" aria-label="'+D.a11y.hueSlider+'">')+'<div id="clr-hue-marker"></div></div><div class="clr-alpha">'+('<input id="clr-alpha-slider" name="clr-alpha-slider" type="range" min="0" max="100" step="1" aria-label="'+D.a11y.alphaSlider+'">')+'<div id="clr-alpha-marker"></div><span></span></div><div id="clr-format" class="clr-format"><fieldset class="clr-segmented">'+("<legend>"+D.a11y.format+"</legend>")+'<input id="clr-f1" type="radio" name="clr-format" value="hex"><label for="clr-f1">Hex</label><input id="clr-f2" type="radio" name="clr-format" value="rgb"><label for="clr-f2">RGB</label><input id="clr-f3" type="radio" name="clr-format" value="hsl"><label for="clr-f3">HSL</label><span></span></fieldset></div><div id="clr-swatches" class="clr-swatches"></div>'+('<button type="button" id="clr-clear" class="clr-clear" aria-label="'+D.a11y.clear+'">'+D.clearLabel+"</button>")+'<div id="clr-color-preview" class="clr-preview">'+('<button type="button" id="clr-close" class="clr-close" aria-label="'+D.a11y.close+'">'+D.closeLabel+"</button>")+"</div>"+('<span id="clr-open-label" hidden>'+D.a11y.open+"</span>")+('<span id="clr-swatch-label" hidden>'+D.a11y.swatch+"</span>"),e.body.appendChild(a),l=Q("clr-color-area"),c=Q("clr-color-marker"),v=Q("clr-clear"),w=Q("clr-close"),d=Q("clr-color-preview"),h=Q("clr-color-value"),F=Q("clr-hue-slider"),$=Q("clr-hue-marker"),T=Q("clr-alpha-slider"),W=Q("clr-alpha-marker"),Xe(D.el),$i(D.el),N(a,"mousedown",function(p){a.classList.remove("clr-keyboard-nav"),p.stopPropagation()}),N(l,"mousedown",function(p){N(e,"mousemove",ki)}),N(l,"touchstart",function(p){e.addEventListener("touchmove",ki,{passive:!1})}),N(c,"mousedown",function(p){N(e,"mousemove",ki)}),N(c,"touchstart",function(p){e.addEventListener("touchmove",ki,{passive:!1})}),N(h,"change",function(p){var y=h.value;if(Z||D.inline){var C=y===""?y:li(y);Hi(C)}}),N(v,"click",function(p){Hi(""),Vi()}),N(w,"click",function(p){Hi(),Vi()}),N(Q("clr-format"),"click",".clr-format input",function(p){ge=p.target.value,zs(),Hi()}),N(a,"click",".clr-swatches button",function(p){li(p.target.textContent),Hi(),D.swatchesOnly&&Vi()}),N(e,"mouseup",function(p){e.removeEventListener("mousemove",ki)}),N(e,"touchend",function(p){e.removeEventListener("touchmove",ki)}),N(e,"mousedown",function(p){Ce=!1,a.classList.remove("clr-keyboard-nav"),Vi()}),N(e,"keydown",function(p){var y=p.key,C=p.target,j=p.shiftKey,oe=["Tab","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"];if(y==="Escape"?Vi(!0):oe.includes(y)&&(Ce=!0,a.classList.add("clr-keyboard-nav")),y==="Tab"&&C.matches(".clr-picker *")){var Ie=L(),ye=Ie.shift(),et=Ie.pop();j&&C===ye?(et.focus(),p.preventDefault()):!j&&C===et&&(ye.focus(),p.preventDefault())}}),N(e,"click",".clr-field button",function(p){_t&&Ve(),p.target.nextElementSibling.dispatchEvent(new Event("click",{bubbles:!0}))}),N(c,"keydown",function(p){var y={ArrowUp:[0,-1],ArrowDown:[0,1],ArrowLeft:[-1,0],ArrowRight:[1,0]};Object.keys(y).includes(p.key)&&(Qr.apply(void 0,y[p.key]),p.preventDefault())}),N(l,"click",ki),N(F,"input",Bo),N(T,"input",g))}function L(){var p=Array.from(a.querySelectorAll("input, button")),y=p.filter(function(C){return!!C.offsetWidth});return y}function Q(p){return e.getElementById(p)}function N(p,y,C,j){var oe=Element.prototype.matches||Element.prototype.msMatchesSelector;typeof C=="string"?p.addEventListener(y,function(Ie){oe.call(Ie.target,C)&&j.call(Ie.target,Ie)}):(j=C,p.addEventListener(y,j))}function se(p,y){y=y!==s?y:[],e.readyState!=="loading"?p.apply(void 0,y):e.addEventListener("DOMContentLoaded",function(){p.apply(void 0,y)})}NodeList!==s&&NodeList.prototype&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach);function ue(p,y){Z=y,J=Z.value,Mi(y),ge=Jt(p),He(),li(p),Hi(),J!==p&&Z.dispatchEvent(new Event("change",{bubbles:!0}))}var _e=function(){var p={init:B,set:jt,wrap:$i,close:Vi,setInstance:Ns,setColor:ue,removeInstance:vn,updatePosition:He};function y(oe){se(function(){oe&&(typeof oe=="string"?Xe(oe):jt(oe))})}var C=function(Ie){y[Ie]=function(){for(var ye=arguments.length,et=new Array(ye),he=0;he<ye;he++)et[he]=arguments[he];se(p[Ie],et)}};for(var j in p)C(j);return se(function(){t.addEventListener("resize",function(oe){y.updatePosition()}),t.addEventListener("scroll",function(oe){y.updatePosition()})}),y}();return _e.coloris=_e,_e}(window,document,Math)}(),ND=mn.coloris,zD=mn.init;mn.set;mn.wrap;var BD=mn.close;mn.setInstance;mn.removeInstance;mn.updatePosition;const jD=()=>{const t=Gr();eh().setValueFor(document.body,t.getTheme.baseLayerValue),t.getTheme.darkModeEnabled&&document.documentElement.classList.add("dark");let e=si.from({...t.getTheme.swatchColor});xl.setValueFor(document.body,e)},eh=()=>pn;function YD(){const t=Gr();return I("fluent-select",{appearance:"accent",value:t.getTheme.darkModeEnabled?"DarkMode":"LightMode",onChange:e=>{t.setIsDarkMode(e.target.value==="DarkMode"),document.documentElement.classList[t.getTheme.darkModeEnabled?"add":"remove"]("dark"),eh().setValueFor(document.body,e.target.value==="DarkMode"?yr.DarkMode:yr.LightMode)}},[I("fluent-option",{value:"LightMode"},[Ne("Light")]),I("fluent-option",{value:"DarkMode"},[Ne("Dark")])])}function UD(){const t=Gr(),e=({max:i,min:s})=>I("fluent-slider",{max:i,min:s,initialValue:t.getTheme.baseLayerValue*100,onChange:n=>{let o=parseInt(n.target.value)/100;eh().setValueFor(document.body,o),t.setBaseLayerValue(o)}},null);return I(ft,null,[t.getTheme.darkModeEnabled?I(e,{min:0,max:40},null):I(e,{min:50,max:100},null)])}function WD(){const t=Gr();return zD(),ND({el:"#coloris",format:"rgb"}),BD(),I("fluent-button",{id:"coloris",appearance:"accent",onInput:e=>{const[i,s,n]=e.target.value.replace("rgb(","").replace(")","").split(",");t.setSwatchColor(parseInt(i),parseInt(s),parseInt(n));let o=si.from({r:parseInt(i),g:parseInt(s),b:parseInt(n)});xl.setValueFor(document.body,o)}},[Ne("Choose a different color")])}const GD={class:"p-4"},qD=S("h1",{slot:"heading"}," Choose Your Mode ",-1),ZD={class:"flex flex-col items-start gap-4"},XD=S("h1",{slot:"heading"}," Enable Blur Effect ",-1),QD={class:"flex flex-col items-start gap-4"},JD=S("h1",{slot:"heading"}," Accent Color ",-1),KD={class:"flex flex-col items-start gap-4"},eR=ve({__name:"Personalization",setup(t){return(e,i)=>{const s=ce("Icon");return X(),be("div",GD,[S("fluent-accordion",null,[S("fluent-accordion-item",null,[I(s,{slot:"start"},{default:M(()=>[Ne("dark_mode")]),_:1}),qD,S("div",ZD,[I(we(YD)),I(we(UD))])]),S("fluent-accordion-item",null,[I(s,{slot:"start"},{default:M(()=>[Ne("blur_on")]),_:1}),XD,S("div",QD,[I(HD)])]),S("fluent-accordion-item",null,[I(s,{slot:"start"},{default:M(()=>[Ne("palette")]),_:1}),JD,S("div",KD,[I(we(WD))])])])])}}}),tR={orientation:"vertical",class:"min-h-full min-w-md"},iR=["id"],sR=S("fluent-tab-panel",{id:"accountPanel",class:"max-h-full h-full"},[S("ul",{class:"bg-white/75 dark:bg-black/75 w-full h-full overflow-auto rounded-layer"},[S("li",null,"1")])],-1),nR={id:"personalizationPanel",class:"max-h-full h-full"},oR={class:"bg-white/75 dark:bg-black/75 w-full h-full overflow-auto rounded-layer"},rR=S("fluent-tab-panel",{id:"gamingPanel",class:"max-h-full h-full overflow-auto"},[S("ul",{class:"bg-white/75 dark:bg-black/75 w-full h-full overflow-auto rounded-layer"},[S("li",null,"1")])],-1),aR=S("fluent-tab-panel",{id:"windows-updatePanel",class:"max-h-full h-full overflow-auto"},[S("ul",{class:"bg-white/75 dark:bg-black/75 w-full h-full overflow-auto rounded-layer"},[S("li",null,"1")])],-1),lR=ve({__name:"Settings",setup(t){const e=(s,n)=>({label:s,icon:n}),i=[e("Account","person"),e("Personalization","brush"),e("Gaming","sports_esports"),e("Windows Update","update")];return(s,n)=>{const o=ce("Icon"),r=ce("PageLayout");return X(),We(r,null,{default:M(()=>[S("fluent-tabs",tR,[(X(),be(ft,null,Gn(i,(a,l)=>S("fluent-tab",{key:l,id:a.label.toLowerCase().replace(" ","-"),class:"gap-2 max-w-md"},[I(o,null,{default:M(()=>[Ne(dt(a.icon),1)]),_:2},1024),Ne(" "+dt(a.label),1)],8,iR)),64)),sR,S("fluent-tab-panel",nR,[S("ul",oR,[S("li",null,[I(eR)])])]),rR,aR])]),_:1})}}});function vo(t,e,...i){if(t in e){let n=e[t];return typeof n=="function"?n(...i):n}let s=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(n=>`"${n}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,vo),s}var Td=(t=>(t[t.None=0]="None",t[t.RenderStrategy=1]="RenderStrategy",t[t.Static=2]="Static",t))(Td||{}),cR=(t=>(t[t.Unmount=0]="Unmount",t[t.Hidden=1]="Hidden",t))(cR||{});function zo({visible:t=!0,features:e=0,ourProps:i,theirProps:s,...n}){var o;let r=Nv(s,i),a=Object.assign(n,{props:r});if(t||e&2&&r.static)return Gc(a);if(e&1){let l=(o=r.unmount)==null||o?0:1;return vo(l,{0(){return null},1(){return Gc({...n,props:{...r,hidden:!0,style:{display:"none"}}})}})}return Gc(a)}function Gc({props:t,attrs:e,slots:i,slot:s,name:n}){var o,r;let{as:a,...l}=zv(t,["unmount","static"]),c=(o=i.default)==null?void 0:o.call(i,s),d={};if(s){let h=!1,v=[];for(let[w,F]of Object.entries(s))typeof F=="boolean"&&(h=!0),F===!0&&v.push(w);h&&(d["data-headlessui-state"]=v.join(" "))}if(a==="template"){if(c=Hv(c??[]),Object.keys(l).length>0||Object.keys(e).length>0){let[h,...v]=c??[];if(!dR(h)||v.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${n} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(l).concat(Object.keys(e)).map($=>$.trim()).filter(($,T,W)=>W.indexOf($)===T).sort(($,T)=>$.localeCompare(T)).map($=>`  - ${$}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map($=>`  - ${$}`).join(`
`)].join(`
`));let w=Nv((r=h.props)!=null?r:{},l),F=Vn(h,w);for(let $ in w)$.startsWith("on")&&(F.props||(F.props={}),F.props[$]=w[$]);return F}return Array.isArray(c)&&c.length===1?c[0]:c}return Hn(a,Object.assign({},l,d),{default:()=>c})}function Hv(t){return t.flatMap(e=>e.type===ft?Hv(e.children):[e])}function Nv(...t){if(t.length===0)return{};if(t.length===1)return t[0];let e={},i={};for(let s of t)for(let n in s)n.startsWith("on")&&typeof s[n]=="function"?(i[n]!=null||(i[n]=[]),i[n].push(s[n])):e[n]=s[n];if(e.disabled||e["aria-disabled"])return Object.assign(e,Object.fromEntries(Object.keys(i).map(s=>[s,void 0])));for(let s in i)Object.assign(e,{[s](n,...o){let r=i[s];for(let a of r){if(n instanceof Event&&n.defaultPrevented)return;a(n,...o)}}});return e}function zv(t,e=[]){let i=Object.assign({},t);for(let s of e)s in i&&delete i[s];return i}function dR(t){return t==null?!1:typeof t.type=="string"||typeof t.type=="object"||typeof t.type=="function"}let uR=0;function hR(){return++uR}function Bv(){return hR()}var zi=(t=>(t.Space=" ",t.Enter="Enter",t.Escape="Escape",t.Backspace="Backspace",t.Delete="Delete",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.Home="Home",t.End="End",t.PageUp="PageUp",t.PageDown="PageDown",t.Tab="Tab",t))(zi||{});function $t(t){var e;return t==null||t.value==null?null:(e=t.value.$el)!=null?e:t.value}function Uf(t,e){if(t)return t;let i=e??"button";if(typeof i=="string"&&i.toLowerCase()==="button")return"button"}function fR(t,e){let i=it(Uf(t.value.type,t.value.as));return Lt(()=>{i.value=Uf(t.value.type,t.value.as)}),km(()=>{var s;i.value||$t(e)&&$t(e)instanceof HTMLButtonElement&&!((s=$t(e))!=null&&s.hasAttribute("type"))&&(i.value="button")}),i}var pR=Object.defineProperty,gR=(t,e,i)=>e in t?pR(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Wf=(t,e,i)=>(gR(t,typeof e!="symbol"?e+"":e,i),i);class mR{constructor(){Wf(this,"current",this.detect()),Wf(this,"currentId",0)}set(e){this.current!==e&&(this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let vR=new mR;function bR(t){if(vR.isServer)return null;if(t instanceof Node)return t.ownerDocument;if(t!=null&&t.hasOwnProperty("value")){let e=$t(t);if(e)return e.ownerDocument}return document}let yR=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");var Bi=(t=>(t[t.First=1]="First",t[t.Previous=2]="Previous",t[t.Next=4]="Next",t[t.Last=8]="Last",t[t.WrapAround=16]="WrapAround",t[t.NoScroll=32]="NoScroll",t))(Bi||{}),er=(t=>(t[t.Error=0]="Error",t[t.Overflow=1]="Overflow",t[t.Success=2]="Success",t[t.Underflow=3]="Underflow",t))(er||{}),xR=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(xR||{});function wR(t=document.body){return t==null?[]:Array.from(t.querySelectorAll(yR)).sort((e,i)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(i.tabIndex||Number.MAX_SAFE_INTEGER)))}var $R=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))($R||{}),kR=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(kR||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",t=>{t.metaKey||t.altKey||t.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",t=>{t.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:t.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));let _R=["textarea","input"].join(",");function SR(t){var e,i;return(i=(e=t==null?void 0:t.matches)==null?void 0:e.call(t,_R))!=null?i:!1}function io(t,e=i=>i){return t.slice().sort((i,s)=>{let n=e(i),o=e(s);if(n===null||o===null)return 0;let r=n.compareDocumentPosition(o);return r&Node.DOCUMENT_POSITION_FOLLOWING?-1:r&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function eo(t,e,{sorted:i=!0,relativeTo:s=null,skipElements:n=[]}={}){var o;let r=(o=Array.isArray(t)?t.length>0?t[0].ownerDocument:document:t==null?void 0:t.ownerDocument)!=null?o:document,a=Array.isArray(t)?i?io(t):t:wR(t);n.length>0&&a.length>1&&(a=a.filter(F=>!n.includes(F))),s=s??r.activeElement;let l=(()=>{if(e&5)return 1;if(e&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(e&1)return 0;if(e&2)return Math.max(0,a.indexOf(s))-1;if(e&4)return Math.max(0,a.indexOf(s))+1;if(e&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=e&32?{preventScroll:!0}:{},h=0,v=a.length,w;do{if(h>=v||h+v<=0)return 0;let F=c+h;if(e&16)F=(F+v)%v;else{if(F<0)return 3;if(F>=v)return 1}w=a[F],w==null||w.focus(d),h+=l}while(w!==r.activeElement);return e&6&&SR(w)&&w.select(),2}var jv=(t=>(t[t.None=1]="None",t[t.Focusable=2]="Focusable",t[t.Hidden=4]="Hidden",t))(jv||{});let Yv=ve({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(t,{slots:e,attrs:i}){return()=>{let{features:s,...n}=t,o={"aria-hidden":(s&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(s&4)===4&&(s&2)!==2&&{display:"none"}}};return zo({ourProps:o,theirProps:n,slot:{},attrs:i,slots:e,name:"Hidden"})}}});function CR(t){typeof queueMicrotask=="function"?queueMicrotask(t):Promise.resolve().then(t).catch(e=>setTimeout(()=>{throw e}))}let IR=ve({props:{onFocus:{type:Function,required:!0}},setup(t){let e=it(!0);return()=>e.value?Hn(Yv,{as:"button",type:"button",features:jv.Focusable,onFocus(i){i.preventDefault();let s,n=50;function o(){var r;if(n--<=0){s&&cancelAnimationFrame(s);return}if((r=t.onFocus)!=null&&r.call(t)){e.value=!1,cancelAnimationFrame(s);return}s=requestAnimationFrame(o)}s=requestAnimationFrame(o)}}):null}});var TR=(t=>(t[t.Forwards=0]="Forwards",t[t.Backwards=1]="Backwards",t))(TR||{}),FR=(t=>(t[t.Less=-1]="Less",t[t.Equal=0]="Equal",t[t.Greater=1]="Greater",t))(FR||{});let Uv=Symbol("TabsContext");function qr(t){let e=en(Uv,null);if(e===null){let i=new Error(`<${t} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,qr),i}return e}let th=Symbol("TabsSSRContext"),DR=ve({name:"TabGroup",emits:{change:t=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(t,{slots:e,attrs:i,emit:s}){var n;let o=it((n=t.selectedIndex)!=null?n:t.defaultIndex),r=it([]),a=it([]),l=Dt(()=>t.selectedIndex!==null),c=Dt(()=>l.value?t.selectedIndex:o.value);function d($){var T;let W=io(h.tabs.value,$t),Z=io(h.panels.value,$t),ge=W.filter(J=>{var Ce;return!((Ce=$t(J))!=null&&Ce.hasAttribute("disabled"))});if($<0||$>W.length-1){let J=vo(o.value===null?0:Math.sign($-o.value),{[-1]:()=>1,0:()=>vo(Math.sign($),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});o.value=vo(J,{0:()=>W.indexOf(ge[0]),1:()=>W.indexOf(ge[ge.length-1])}),h.tabs.value=W,h.panels.value=Z}else{let J=W.slice(0,$),Ce=[...W.slice($),...J].find(D=>ge.includes(D));if(!Ce)return;let Oe=(T=W.indexOf(Ce))!=null?T:h.selectedIndex.value;Oe===-1&&(Oe=h.selectedIndex.value),o.value=Oe,h.tabs.value=W,h.panels.value=Z}}let h={selectedIndex:Dt(()=>{var $,T;return(T=($=o.value)!=null?$:t.defaultIndex)!=null?T:null}),orientation:Dt(()=>t.vertical?"vertical":"horizontal"),activation:Dt(()=>t.manual?"manual":"auto"),tabs:r,panels:a,setSelectedIndex($){c.value!==$&&s("change",$),l.value||d($)},registerTab($){var T;if(r.value.includes($))return;let W=r.value[o.value];r.value.push($),r.value=io(r.value,$t);let Z=(T=r.value.indexOf(W))!=null?T:o.value;Z!==-1&&(o.value=Z)},unregisterTab($){let T=r.value.indexOf($);T!==-1&&r.value.splice(T,1)},registerPanel($){a.value.includes($)||(a.value.push($),a.value=io(a.value,$t))},unregisterPanel($){let T=a.value.indexOf($);T!==-1&&a.value.splice(T,1)}};pd(Uv,h);let v=it({tabs:[],panels:[]}),w=it(!1);Lt(()=>{w.value=!0}),pd(th,Dt(()=>w.value?null:v.value));let F=Dt(()=>t.selectedIndex);return Lt(()=>{Ks([F],()=>{var $;return d(($=t.selectedIndex)!=null?$:t.defaultIndex)},{immediate:!0})}),km(()=>{if(!l.value||c.value==null||h.tabs.value.length<=0)return;let $=io(h.tabs.value,$t);$.some((T,W)=>$t(h.tabs.value[W])!==$t(T))&&h.setSelectedIndex($.findIndex(T=>$t(T)===$t(h.tabs.value[c.value])))}),()=>{let $={selectedIndex:o.value};return Hn(ft,[r.value.length<=0&&Hn(IR,{onFocus:()=>{for(let T of r.value){let W=$t(T);if((W==null?void 0:W.tabIndex)===0)return W.focus(),!0}return!1}}),zo({theirProps:{...i,...zv(t,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:$,slots:e,attrs:i,name:"TabGroup"})])}}}),RR=ve({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(t,{attrs:e,slots:i}){let s=qr("TabList");return()=>{let n={selectedIndex:s.selectedIndex.value},o={role:"tablist","aria-orientation":s.orientation.value};return zo({ourProps:o,theirProps:t,slot:n,attrs:e,slots:i,name:"TabList"})}}}),Gf=ve({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-tabs-tab-${Bv()}`}},setup(t,{attrs:e,slots:i,expose:s}){let n=qr("Tab"),o=it(null);s({el:o,$el:o}),Lt(()=>n.registerTab(o)),yi(()=>n.unregisterTab(o));let r=en(th),a=Dt(()=>{if(r.value){let T=r.value.tabs.indexOf(t.id);return T===-1?r.value.tabs.push(t.id)-1:T}return-1}),l=Dt(()=>{let T=n.tabs.value.indexOf(o);return T===-1?a.value:T}),c=Dt(()=>l.value===n.selectedIndex.value);function d(T){var W;let Z=T();if(Z===er.Success&&n.activation.value==="auto"){let ge=(W=bR(o))==null?void 0:W.activeElement,J=n.tabs.value.findIndex(Ce=>$t(Ce)===ge);J!==-1&&n.setSelectedIndex(J)}return Z}function h(T){let W=n.tabs.value.map(Z=>$t(Z)).filter(Boolean);if(T.key===zi.Space||T.key===zi.Enter){T.preventDefault(),T.stopPropagation(),n.setSelectedIndex(l.value);return}switch(T.key){case zi.Home:case zi.PageUp:return T.preventDefault(),T.stopPropagation(),d(()=>eo(W,Bi.First));case zi.End:case zi.PageDown:return T.preventDefault(),T.stopPropagation(),d(()=>eo(W,Bi.Last))}if(d(()=>vo(n.orientation.value,{vertical(){return T.key===zi.ArrowUp?eo(W,Bi.Previous|Bi.WrapAround):T.key===zi.ArrowDown?eo(W,Bi.Next|Bi.WrapAround):er.Error},horizontal(){return T.key===zi.ArrowLeft?eo(W,Bi.Previous|Bi.WrapAround):T.key===zi.ArrowRight?eo(W,Bi.Next|Bi.WrapAround):er.Error}}))===er.Success)return T.preventDefault()}let v=it(!1);function w(){var T;v.value||(v.value=!0,!t.disabled&&((T=$t(o))==null||T.focus(),n.setSelectedIndex(l.value),CR(()=>{v.value=!1})))}function F(T){T.preventDefault()}let $=fR(Dt(()=>({as:t.as,type:e.type})),o);return()=>{var T;let W={selected:c.value},{id:Z,...ge}=t,J={ref:o,onKeydown:h,onMousedown:F,onClick:w,id:Z,role:"tab",type:$.value,"aria-controls":(T=$t(n.panels.value[l.value]))==null?void 0:T.id,"aria-selected":c.value,tabIndex:c.value?0:-1,disabled:t.disabled?!0:void 0};return zo({ourProps:J,theirProps:ge,slot:W,attrs:e,slots:i,name:"Tab"})}}}),OR=ve({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(t,{slots:e,attrs:i}){let s=qr("TabPanels");return()=>{let n={selectedIndex:s.selectedIndex.value};return zo({theirProps:t,ourProps:{},slot:n,attrs:i,slots:e,name:"TabPanels"})}}}),qf=ve({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-tabs-panel-${Bv()}`},tabIndex:{type:Number,default:0}},setup(t,{attrs:e,slots:i,expose:s}){let n=qr("TabPanel"),o=it(null);s({el:o,$el:o}),Lt(()=>n.registerPanel(o)),yi(()=>n.unregisterPanel(o));let r=en(th),a=Dt(()=>{if(r.value){let d=r.value.panels.indexOf(t.id);return d===-1?r.value.panels.push(t.id)-1:d}return-1}),l=Dt(()=>{let d=n.panels.value.indexOf(o);return d===-1?a.value:d}),c=Dt(()=>l.value===n.selectedIndex.value);return()=>{var d;let h={selected:c.value},{id:v,tabIndex:w,...F}=t,$={ref:o,id:v,role:"tabpanel","aria-labelledby":(d=$t(n.tabs.value[l.value]))==null?void 0:d.id,tabIndex:c.value?w:-1};return!c.value&&t.unmount&&!t.static?Hn(Yv,{as:"span",...$}):zo({ourProps:$,theirProps:F,slot:h,attrs:e,slots:i,features:Td.Static|Td.RenderStrategy,visible:c.value,name:"TabPanel"})}}});var ER=0;function LR(){return ER++}function AR(t,e={maximizable:!0,minimizable:!0,fullscreen:!1},i={runningInBackground:!1,processId:LR()}){var s,n,o,r;return{window:{info:{title:t.info.title,icon:t.info.icon,activeZIndex:i.processId},position:{x:((s=t.position)==null?void 0:s.x)||0,y:((n=t.position)==null?void 0:n.y)||0},size:{width:((o=t.size)==null?void 0:o.width)||400,height:((r=t.size)==null?void 0:r.height)||300}},accessibility:{maximizable:e.maximizable,minimizable:e.minimizable,focus:!1,active:!1,maximize:!1,minimize:!1,fullscreen:e.fullscreen},process:{runningInBackground:i.runningInBackground,processId:i.processId}}}const PR={class:"flex-none select-none w-full h-8 bg-white/75 dark:bg-black/75 backdrop-blur-lg"},MR={class:"w-full h-full flex items-center justify-between p-1"},VR={class:"w-full whitespace-nowrap overflow-clip text-black dark:text-white rm-1"},HR={class:"flex-none w-fit h-full flex items-center justify-end"},NR={class:"relative w-full h-full backdrop-blur-lg bg-white/75 dark:bg-black/75 overflow-auto"},zR=ve({__name:"WindowTemplate",props:{getProcessStateInstance:{type:Function}},emits:["close","maximize","minimize","focus","unfocus","active","inactive","fullscreen","unFullscreen","gragwindow","changeWindowSize"],setup(t,{emit:e}){const i=t,s=Zn(),n=()=>{s.cleanActive(),s.cleanFocus(),e("focus"),e("active"),s.setTopZIndex(s.getProcessByProcessId(i.getProcessStateInstance().process.processId))},o=Dt(()=>{const c=i.getProcessStateInstance();return[c.accessibility.active?"shadow-lg":"",c.accessibility.minimize?"hidden-window ":"open-window",c.accessibility.fullscreen?"":"resize"]}),r=Dt(()=>{const c=i.getProcessStateInstance();return{left:(c.accessibility.maximize?"0":c.window.position.x)+"px",top:(c.accessibility.maximize?"0":c.window.position.y)+"px",width:c.accessibility.maximize?"100%":c.window.size.width+"px",height:c.accessibility.maximize?"100%":c.window.size.height+"px","z-index":c.accessibility.fullscreen?"999":c.window.info.activeZIndex+10,"padding-bottom":c.accessibility.maximize?c.accessibility.fullscreen?"0":"3rem":"0"}});var a=[];const l=c=>{if(i.getProcessStateInstance().accessibility.active){if(a.length===0){a[0]=c.code;return}else a.length===1?a[1]=c.code:c.code!==a[1]&&(a.shift(),a[1]=c.code);a=Array.from(new Set(a)),a.length===2&&["ShiftLeft","ShiftRight"].includes(a[0])&&(a[1]==="KeyK"?i.getProcessStateInstance().accessibility.fullscreen?e("unFullscreen"):e("fullscreen"):a[1]==="ArrowUp"?e("maximize"):a[1]==="ArrowDown"?e("minimize"):a[1]==="F4"&&e("close"),a=[])}};return Lt(()=>{n(),document.addEventListener("keyup",l)}),yi(()=>{document.removeEventListener("keyup",l)}),(c,d)=>{const h=ce("Icon"),v=ce("ScalingButton"),w=ce("FlexLayout");return X(),be("div",{ref:"windowRef",onMousedown:n,onMouseover:d[4]||(d[4]=F=>e("focus")),onMouseout:d[5]||(d[5]=F=>e("unfocus")),class:ii(["select-none fixed overflow-hidden transition-all active:transition-none",o.value]),style:an(r.value)},[I(w,{class:"rounded-layer w-full h-full flex-col overflow-clip border"},{default:M(()=>[Mo(S("header",PR,[S("div",MR,[S("div",{onMousedown:d[0]||(d[0]=F=>e("gragwindow",F)),class:"h-full flex items-center justify-start w-full text-ellipsis overflow-clip"},[I(h,{class:"scale-75"},{default:M(()=>[Ne(dt(i.getProcessStateInstance().window.info.icon),1)]),_:1}),S("h1",VR,dt(i.getProcessStateInstance().window.info.title),1)],32),S("nav",HR,[i.getProcessStateInstance().accessibility.minimizable?(X(),We(v,{key:0,onClick:d[1]||(d[1]=F=>e("minimize"))},{default:M(()=>[I(h,{class:"scale-75"},{default:M(()=>[Ne("minimize")]),_:1})]),_:1})):vd("",!0),i.getProcessStateInstance().accessibility.maximizable?(X(),We(v,{key:1,onClick:d[2]||(d[2]=F=>e("maximize"))},{default:M(()=>[I(h,{class:"scale-75"},{default:M(()=>[Ne("check_box_outline_blank")]),_:1})]),_:1})):vd("",!0),I(v,{onClick:d[3]||(d[3]=F=>e("close"))},{default:M(()=>[I(h,{class:"scale-75"},{default:M(()=>[Ne("close")]),_:1})]),_:1})])])],512),[[Vo,!i.getProcessStateInstance().accessibility.fullscreen]]),S("main",NR,[Qi(c.$slots,"default")])]),_:3})],38)}}}),BR=()=>document.getElementById("window-workspace").appendChild(document.createElement("div")),jR=t=>{const e=BR(),i=ec(t);return i.use(Bm),{mount:()=>{i.mount(e)},unmount:()=>{i&&(i.unmount(),e.remove())},instance:i}};function YR(t,e,i){const s=jR(Hn(zR,{},{default:()=>Hn(i)}));return s.instance._component.props={...e,getProcessStateInstance:t},{...s,getProcessStateInstance:t}}const Zn=ic("process_store",{state:()=>({processes:[]}),getters:{getAllProcesses:t=>t.processes,getAllProcessByRunningInBackground:t=>t.processes.filter(e=>e.getProcessStateInstance().process.runningInBackground),getAllProcessByMinimize:t=>t.processes.filter(e=>e.getProcessStateInstance().accessibility.minimize),getProcessByProcessId:t=>e=>t.processes.filter(i=>e===i.getProcessStateInstance().process.processId)[0]},actions:{createNewProcess({title:t,icon:e="bug_report"},i){const s=it(AR({info:{title:t,icon:e}})),n=()=>{const r=o.instance._container.children.item(0);r.style.width.includes("%")||r.style.height.includes("%")||(s.value.window.size.width=parseInt(r.style.width),s.value.window.size.height=parseInt(r.style.height))},o=YR(()=>s.value,{onClose:async()=>{await(async()=>new Promise(a=>{o.instance._container.children.item(0).classList.contains("open-window")&&o.instance._container.children.item(0).classList.remove("open-window"),o.instance._container.children.item(0).classList.add("hidden-window"),setTimeout(()=>{a()},150)}))(),this.removeProcessFromProcessesByProcessId(s.value.process.processId),o.unmount()},onMaximize:()=>{s.value.accessibility.maximize=!s.value.accessibility.maximize},onChangeWindowSize:()=>n(),onMinimize:()=>{n(),s.value.accessibility.minimize=!0},onFocus:()=>{s.value.accessibility.focus=!0},onUnfocus:()=>{n(),s.value.accessibility.focus=!1},onActive:()=>{s.value.accessibility.active=!0},onInactive:()=>{s.value.accessibility.active=!1},onFullscreen:()=>{s.value.accessibility.maximize=!0,s.value.accessibility.fullscreen=!0},onUnFullscreen:()=>{s.value.accessibility.maximize=!1,s.value.accessibility.fullscreen=!1},onGragwindow:r=>{if(s.value.accessibility.maximize)return!1;const a=o.instance._container.children.item(0),l={x:r.clientX-a.offsetLeft,y:r.clientY-a.offsetTop};return document.onmousemove=c=>{const d={x:0,y:0};d.x=c.clientX-l.x,d.y=c.clientY-l.y,s.value.window.position.x=d.x,s.value.window.position.y=d.y},document.onmouseup=()=>{document.onmousemove=null,document.onmouseup=null},!1}},i);return this.processes.push(o),o},killAllProcesses(){this.processes.map(t=>t.instance.unmount()),this.processes=[]},cleanFocus(){this.processes=this.processes.map(t=>(t.getProcessStateInstance().accessibility.focus=!1,t))},cleanActive(){this.processes=this.processes.map(t=>(t.getProcessStateInstance().accessibility.active=!1,t))},swapZIndex(t,e){if(t===e||this.processes.length<=1)return;const i={x:this.processes.filter(s=>s.getProcessStateInstance().window.info.activeZIndex===t)[0],y:this.processes.filter(s=>s.getProcessStateInstance().window.info.activeZIndex===e)[0]};i.x.getProcessStateInstance().window.info.activeZIndex=e,i.y.getProcessStateInstance().window.info.activeZIndex=t},setTopZIndex(t){if(this.processes.length<=1)return;const i=Object.assign([],this.processes).sort((r,a)=>a.getProcessStateInstance().window.info.activeZIndex-r.getProcessStateInstance().window.info.activeZIndex),s=i.filter(r=>r===t)[0],n=i[0],o=s.getProcessStateInstance().window.info.activeZIndex;s.getProcessStateInstance().window.info.activeZIndex=n.getProcessStateInstance().window.info.activeZIndex,n.getProcessStateInstance().window.info.activeZIndex=o},killProcessByProcessId(t){if(this.processes.length===0)return;this.processes.filter(i=>t===i.getProcessStateInstance().process.processId)[0].instance._component.props.onClose()},setRunningInBackground(t,e){t.getProcessStateInstance().process.runningInBackground=e},setMinimize(t,e){t.getProcessStateInstance().accessibility.minimize=e},setAllProcessMinimize(){this.processes.map(t=>t.getProcessStateInstance().accessibility.minimize=!0)},removeProcessFromProcessesByProcessId(t){if(this.processes.length===0)return;const e=this.processes.filter(i=>t===i.getProcessStateInstance().process.processId)[0];this.processes.splice(this.processes.indexOf(e),1)}}}),UR=ve({__name:"KillProcessButton",props:{currentProcess:{}},setup(t){const e=t,i=Zn();return(s,n)=>(X(),be("fluent-button",{onClick:n[0]||(n[0]=()=>{e.currentProcess!==null&&we(i).killProcessByProcessId(e.currentProcess.getProcessStateInstance().process.processId)}),appearance:"neutral"},"End Process"))}}),WR=["onClick"],Zf=ve({__name:"ProcessList",props:{currentProcess:{}},emits:["setCurrentProcess"],setup(t,{emit:e}){const i=t,s=Zn();return(n,o)=>(X(!0),be(ft,null,Gn(we(s).getAllProcesses,r=>(X(),be("li",{key:r.getProcessStateInstance().process.processId,onClick:a=>e("setCurrentProcess",r),class:ii(["transition-all active:bg-white px-4 py-2 rounded-layer flex gap-2 overflow-auto",[r===i.currentProcess?"bg-blue-500/25 hover:bg-blue-500/50":"hover:bg-white/75"]])},[Qi(n.$slots,"default",{e:r})],10,WR))),128))}}),GR=t=>(Gl("data-v-416f62b7"),t=t(),ql(),t),qR=GR(()=>S("fluent-divider",{class:"w-[1px] h-6 bg-black/10"},null,-1)),ZR=ve({__name:"Manager",setup(t){const e=it(null),i=s=>{e.value=s};return(s,n)=>{const o=ce("FlexLayout"),r=ce("PageLayout");return X(),We(r,null,{default:M(()=>[I(o,{class:"flex-col gap-1 h-full"},{default:M(()=>[I(o,{class:"justify-end items-center bg-white/50 w-full p-2 rounded-layer"},{default:M(()=>[I(UR,{"current-process":e.value},null,8,["current-process"])]),_:1}),I(we(DR),{as:"div",class:"flex w-full h-full gap-1"},{default:M(()=>[I(we(RR),{as:"fluent-listbox",class:"gap-1 transition-all"},{default:M(()=>[I(we(Gf),{as:"fluent-option",value:"processes",selected:""},{default:M(()=>[Ne("Processes")]),_:1}),I(we(Gf),{as:"fluent-option",value:"details"},{default:M(()=>[Ne("Details")]),_:1})]),_:1}),I(we(OR),{as:"div",class:"bg-white/75 rounded-layer w-full h-full"},{default:M(()=>[I(we(qf),{as:"ul",class:"p-2 h-full"},{default:M(()=>[I(Zf,{onSetCurrentProcess:i,"current-process":e.value},{default:M(({e:a})=>[S("h1",null,dt(a.getProcessStateInstance().window.info.title),1)]),_:1},8,["current-process"])]),_:1}),I(we(qf),{as:"ul",class:"p-2 h-full"},{default:M(()=>[I(Zf,{onSetCurrentProcess:i,"current-process":e.value},{default:M(({e:a})=>[S("h1",null,dt(a.getProcessStateInstance().window.info.title),1),qR,S("h1",null,dt(a.getProcessStateInstance().process.processId),1)]),_:1},8,["current-process"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),XR=xi(ZR,[["__scopeId","data-v-416f62b7"]]),QR={},JR=S("div",{class:"relative overflow-clip p-2 h-full"},[S("header",null,[S("md-text",{type:"title-large"},"Notepad Beta")]),S("div",{class:"w-full h-full rounded-layer overflow-clip"},[S("fluent-text-area",{autofocus:"",placeholder:"Notepad beta, type here.",resize:"vertical",appearance:"outline",class:"w-full h-full"})])],-1);function KR(t,e){const i=ce("PageLayout");return X(),We(i,null,{default:M(()=>[JR]),_:1})}const eO=xi(QR,[["render",KR]]),tO=ve({__name:"Camera",setup(t){const e=it(),i=it(),s=()=>{let n=document.createElement("canvas");n.getContext("2d").drawImage(e.value,0,0,n.width,n.height),n.style.width="8rem",n.style.aspectRatio="1 / 1",i.value.appendChild(n)};return Lt(()=>{navigator&&navigator.mediaDevices?navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"user",width:300,height:300}}).then(n=>{e.value.srcObject=n,e.value.onloadedmetadata=()=>e.value.play()}).catch(()=>{console.log("Unknown error.")}):console.log("camera API is not supported by your browser")}),Xl(()=>{e.value.onloadedmetadata=null}),yi(()=>{}),(n,o)=>{const r=ce("FlexLayout"),a=ce("PageLayout");return X(),We(a,null,{default:M(()=>[I(r,{class:"flex-col h-full w-full gap-2 items-center justify-center"},{default:M(()=>[S("video",{ref_key:"cameraVideoRef",ref:e,class:"rounded-container h-full aspect-square"},null,512),S("fluent-button",{type:"button",appearance:"accent",onClick:s},"Take Photo")]),_:1}),I(r,{class:"gap-2 items-center flex-row flex-wrap"},{default:M(()=>[S("div",{ref_key:"cameraResultListRef",ref:i,class:"flex-none"},null,512)]),_:1})]),_:1})}}}),ka=(t,e,i,s)=>({label:t,icon:e,slot:i,title:s}),iO=[ka("Settings","settings",lR,"Settings Demo"),ka("Task Manager","man",XR,"Task Manager Demo"),ka("NotePad","note",eO,"Notepad Demo"),ka("Camera","camera",tO,"Camera Demo")];function ih(){return iO}function sh(t,e,i="bug_report"){Zn().createNewProcess({title:e,icon:i},t).mount()}const sO={class:"text-rm-1 select-none overflow-clip text-ellipsis whitespace-nowrap"},nO=ve({__name:"PinnedApps",emits:["closeStartsMenu"],setup(t,{emit:e}){return(i,s)=>{const n=ce("Icon"),o=ce("ScalingButton"),r=ce("GridLayout");return X(),We(r,{class:"relative gap-2 grid-cols-4 md:grid-cols-6 grid-rows-auto overflow-y-auto h-40 items-start"},{default:M(()=>[(X(!0),be(ft,null,Gn(we(ih)(),a=>(X(),We(o,{onClick:()=>{e("closeStartsMenu"),we(sh)(a.slot,a.title,a.icon)},key:a.slot,class:"h-16 w-24",direction:"vertical"},{default:M(()=>[I(n,null,{default:M(()=>[Ne(dt(a.icon),1)]),_:2},1024),S("p",sO,dt(a.label),1)]),_:2},1032,["onClick"]))),128))]),_:1})}}}),oO={class:"flex items-center gap-2"},rO=S("div",{class:"rounded-full w-8 h-8 border"},null,-1),aO={class:"text-rb max-w-[12rem] overflow-clip text-ellipsis"},lO=S("fluent-menu-item",null,"Lock",-1),cO=["onClick"],dO=ve({__name:"SimpleUserProfile",setup(t){const e=is(),i=gc(),s=()=>{i.setIsLogout(!0),e.setIsLocked(!0)};return(n,o)=>{const r=ce("IconButton"),a=ce("ExpandLayout");return X(),We(a,null,{actions:M(({isExpanded:l,setIsExpanded:c})=>[I(r,{onClick:d=>c(!l),class:"px-2 py-1"},{default:M(()=>[S("div",oO,[rO,S("span",aO,dt(we(i).getUserAccountState.name),1)])]),_:2},1032,["onClick"])]),"expanded-content":M(({isExpanded:l,setIsExpanded:c})=>[S("div",{class:ii(["relative z-0",[l?"opacity-100":"opacity-0 pointer-events-none"]])},[S("fluent-menu",{class:"absolute bottom-10 left-0 w-32 z-0"},[S("fluent-menu-item",{onClick:s},"Sign-out"),lO]),Mo(S("div",{onClick:d=>c(!1),class:"fixed full-screen bottom-0 right-0 -z-[1]"},null,8,cO),[[Vo,l]])],2)]),_:1})}}}),uO={class:"absolute bottom-10 right-0 w-32 z-0"},hO=S("fluent-menu-item",null,"Sleep",-1),fO=S("fluent-menu-item",null,"Restart",-1),pO=["onClick"],gO=ve({__name:"ShutdownMenu",setup(t){const e=is();return(i,s)=>{const n=ce("Icon"),o=ce("IconButton"),r=ce("ExpandLayout");return X(),We(r,{class:"relative"},{actions:M(({isExpanded:a,setIsExpanded:l})=>[I(o,{onClick:c=>l(!a),class:"p-2"},{default:M(()=>[I(n,null,{default:M(()=>[Ne("power_settings_new")]),_:1})]),_:2},1032,["onClick"])]),"expanded-content":M(({isExpanded:a,setIsExpanded:l})=>[S("div",{class:ii(["fixed z-0",[a?"opacity-100":"opacity-0 pointer-events-none"]])},[S("fluent-menu",uO,[hO,S("fluent-menu-item",{onClick:s[0]||(s[0]=c=>we(e).setNeedShutdown(!0))},"Shut down"),fO]),Mo(S("div",{onClick:c=>l(!1),class:"fixed w-screen h-screen bottom-0 right-0 -z-[1]"},null,8,pO),[[Vo,a]])],2)]),_:1})}}}),mO=t=>(Gl("data-v-e64bba2b"),t=t(),ql(),t),vO=mO(()=>S("div",{class:"starts-button-group relative windows-starts-icon-special-shape overflow-clip w-6 h-6 grid grid-cols-2 grid-rows-2 gap-[1.25px]"},[S("div",{class:"first-block-highlight"}),S("div"),S("div"),S("div")],-1)),bO=ve({__name:"StartsButton",props:{isExpanded:{type:Boolean}},emits:["setIsExpanded"],setup(t,{emit:e}){const i=t,s=is();var n=[];const o=r=>{if(n.length===0){n[0]=r.code;return}else n.length===1?n[1]=r.code:r.code!==n[1]&&(n.shift(),n[1]=r.code);["ShiftLeft","ShiftRight"].includes(n[0])&&(n[1]==="MetaLeft"&&(s.setStarts({...s.getSystemStarts,isOpening:!i.isExpanded}),e("setIsExpanded",!i.isExpanded)),n=[])};return Lt(()=>{document.addEventListener("keydown",o)}),yi(()=>{document.removeEventListener("keydown",o)}),(r,a)=>{const l=ce("ScalingButton");return X(),We(l,{class:"h-full aspect-square",onClick:a[0]||(a[0]=()=>{we(s).setStarts({...we(s).getSystemStarts,isOpening:!i.isExpanded}),e("setIsExpanded",!i.isExpanded)})},{default:M(()=>[vO]),_:1})}}}),yO=xi(bO,[["__scopeId","data-v-e64bba2b"]]),xO={appearance:"neutral"},wO={slot:"end",class:"material-symbols-outlined"},Xf=ve({__name:"ApplicationListButton",props:{label:{},icon:{}},setup(t){const e=t;return(i,s)=>(X(),be("fluent-button",xO,[Ne(dt(e.label)+" ",1),S("span",wO,dt(e.icon),1)]))}}),$O={class:"inline-flex items-center justify-start w-full h-full gap-2 p-2"},kO={class:"text-rm-1 select-none"},_O=ve({__name:"ApplicationListItem",props:{app:{}},emits:["closeStartsMenu"],setup(t,{emit:e}){const i=t;return(s,n)=>{const o=ce("Icon"),r=ce("IconButton");return X(),We(r,{onClick:n[0]||(n[0]=()=>{e("closeStartsMenu"),we(sh)(i.app.slot,i.app.title,i.app.icon)}),key:i.app.slot},{default:M(()=>[S("div",$O,[I(o,null,{default:M(()=>[Ne(dt(i.app.icon),1)]),_:1}),S("p",kO,dt(i.app.label),1)])]),_:1})}}}),SO=ve({__name:"ApplicationList",emits:["closeStartsMenu"],setup(t,{emit:e}){const i=ih();return(s,n)=>{const o=ce("FlexLayout");return X(),We(o,{class:"grid gap-1"},{default:M(()=>[(X(!0),be(ft,null,Gn(we(i),(r,a)=>(X(),We(_O,{index:a,app:r,onCloseStartsMenu:n[0]||(n[0]=l=>e("closeStartsMenu"))},null,8,["index","app"]))),256))]),_:1})}}}),CO=ve({__name:"TablePanel",setup(t){const e=it("page-one"),i=s=>{e.value=s};return(s,n)=>(X(),be("div",null,[Qi(s.$slots,"app-one",{currentPage:e.value,setCurrentPage:i}),Qi(s.$slots,"app-two",{currentPage:e.value,setCurrentPage:i})]))}}),Wv=t=>(Gl("data-v-00569cfb"),t=t(),ql(),t),IO={class:"relative backdrop-blur-lg bg-white/80 dark:bg-black/80 bottom-0 w-screen mx-auto max-w-2xl overflow-auto max-h-[32rem]"},TO={class:"start-panel-content-aera"},FO=Wv(()=>S("h1",{class:"text-rp-1"},"Pinned",-1)),DO=Wv(()=>S("h1",{class:"text-rp-1"},"All Apps",-1)),RO=["onClick"],OO=ve({__name:"Starts",setup(t){const e=is();return(i,s)=>{const n=ce("FlexLayout"),o=ce("ExpandLayout");return X(),We(o,{class:"relative flex items-center justify-center h-full aspect-square"},{actions:M(({isExpanded:r,setIsExpanded:a})=>[I(yO,{onSetIsExpanded:a,"is-expanded":r},null,8,["onSetIsExpanded","is-expanded"])]),"expanded-content":M(({isExpanded:r,setIsExpanded:a})=>[S("div",{class:ii(["start-panel full-screen fixed top-0 left-0 grid justify-center items-end pb-14 px-2 transition-all",[r?"active":"inactive"]])},[S("fluent-card",IO,[S("div",TO,[I(PD,{class:"px-8 pt-8 row-span-1"}),I(n,{class:"w-full flex-col px-8 gap-4 overflow-auto",style:{"grid-row":"span 10 / span 10"}},{default:M(()=>[I(CO,{class:"w-full relative overflow-x-clip"},{"app-one":M(({currentPage:l,setCurrentPage:c})=>[S("div",{class:ii(["w-full absolute top-0 space-y-2 table-transition",[l!=="page-one"?"-left-[200%]":"left-0"]])},[I(n,{class:"justify-between items-center px-4"},{default:M(()=>[FO,I(Xf,{onClick:d=>c("page-two"),class:"self-end",label:"All Apps",icon:"arrow_forward"},null,8,["onClick"])]),_:2},1024),I(nO,{onCloseStartsMenu:d=>a(!1)},null,8,["onCloseStartsMenu"])],2)]),"app-two":M(({currentPage:l,setCurrentPage:c})=>[S("div",{class:ii(["w-full absolute top-0 space-y-2 table-transition",[l!=="page-two"?"left-[200%]":"left-0"]])},[I(n,{class:"justify-between items-center px-4"},{default:M(()=>[DO,I(Xf,{onClick:d=>c("page-one"),label:"Back",icon:"arrow_back"},null,8,["onClick"])]),_:2},1024),I(SO,{onCloseStartsMenu:d=>a(!1)},null,8,["onCloseStartsMenu"])],2)]),_:2},1024)]),_:2},1024),I(n,{class:"row-span-1 justify-between items-center bg-black/5 px-8 border-t"},{default:M(()=>[I(dO),I(gO)]),_:1})])]),Mo(S("div",{onClick:()=>{we(e).setStarts({...we(e).getSystemStarts,isOpening:!r}),a(!1)},class:"fixed left-0 bottom-0 w-screen h-screen -z-[1]"},null,8,RO),[[Vo,r]])],2)]),_:1})}}}),EO=xi(OO,[["__scopeId","data-v-00569cfb"]]),LO={class:"text-end place-items-end place-content-between h-full"},AO={class:"text-rm-1 text-black dark:text-white"},PO={class:"text-rm-1 text-black dark:text-white"},MO=ve({__name:"DateButton",setup(t){const e=it(Y().format("MM-DD-YYYY")),i=it(Y().format("HH:mm")),s=()=>{e.value=Y().format("MM-DD-YYYY"),i.value=Y().format("HH:mm")};var n=null;return Lt(()=>{n=setInterval(s,1e3)}),yi(()=>{clearInterval(n)}),(o,r)=>{const a=ce("IconButton");return X(),We(a,{class:"px-2 h-full"},{default:M(()=>[S("div",LO,[S("p",AO,dt(i.value),1),S("p",PO,dt(e.value),1)])]),_:1})}}}),VO={class:"relative backdrop-blur-lg bg-white/80 dark:bg-black/80 w-full max-w-2xl overflow-auto max-h-[24rem]"},HO=S("fluent-calendar",null,null,-1),NO=["onClick"],zO=ve({__name:"CalendarPanel",setup(t){return(e,i)=>{const s=ce("FlexLayout"),n=ce("ExpandLayout");return X(),We(n,null,{actions:M(({isExpanded:o,setIsExpanded:r})=>[I(MO,{onClick:a=>r(!o),class:"invisible xs:visible"},null,8,["onClick"])]),"expanded-content":M(({isExpanded:o,setIsExpanded:r})=>[S("div",{class:ii(["start-panel full-screen fixed top-0 left-0 grid justify-end items-end pb-14 px-2 transition-all",[o?"active":"inactive"]])},[S("fluent-card",VO,[I(s,{class:"flex-col p-4 gap-8 justify-between h-full"},{default:M(()=>[HO]),_:1})]),Mo(S("div",{onClick:a=>r(!1),class:"fixed left-0 bottom-0 w-screen h-screen -z-[1]"},null,8,NO),[[Vo,o]])],2)]),_:1})}}}),BO={class:"space-y-8"},jO=["value"],YO=S("fluent-slider",{value:"00"},null,-1),UO=ve({__name:"NavigationSystemControl",setup(t){const e=is(),i=s=>{e.setBrightness(s.target.valueAsNumber)};return(s,n)=>{const o=ce("Icon"),r=ce("FlexLayout");return X(),be("div",BO,[I(r,{class:"gap-4"},{default:M(()=>[I(o,{class:"relative -top-2"},{default:M(()=>[Ne("light")]),_:1}),S("fluent-slider",{onChange:i,id:"systemBrightnessSliderRef",value:we(e).getSystemBrightness,min:"30",max:"100"},null,40,jO)]),_:1}),I(r,{class:"gap-4"},{default:M(()=>[I(o,{class:"relative -top-2"},{default:M(()=>[Ne("volume_up")]),_:1}),YO]),_:1})])}}}),WO=ve({__name:"NightLightNavigationButton",setup(t){const e=is();return(i,s)=>{const n=ce("Icon"),o=ce("IconButton");return X(),We(o,{onClick:we(e).toggleIsNightlight},{default:M(()=>[I(n,null,{default:M(()=>[Ne(" light ")]),_:1})]),_:1},8,["onClick"])}}}),GO=ve({__name:"NavigationToggleButton",props:{isExpanded:{type:Boolean}},emits:["setIsExpanded"],setup(t,{emit:e}){const i=t;return(s,n)=>{const o=ce("Icon"),r=ce("FlexLayout"),a=ce("IconButton");return X(),We(a,{onClick:n[0]||(n[0]=l=>e("setIsExpanded",!i.isExpanded)),class:"h-full px-2"},{default:M(()=>[I(r,null,{default:M(()=>[I(o,{class:"scale-75"},{default:M(()=>[Ne("wifi")]),_:1}),I(o,{class:"scale-75 hidden md:block"},{default:M(()=>[Ne("volume_up")]),_:1}),I(o,{class:"scale-75 hidden md:block"},{default:M(()=>[Ne("power")]),_:1})]),_:1})]),_:1})}}}),qO={class:"relative backdrop-blur-lg bg-white/80 dark:bg-black/80 w-full max-w-2xl overflow-auto max-h-[24rem]"},ZO={class:"px-8 py-4 grid place-content-center"},XO={class:"px-8 py-4 grid place-content-center"},QO={class:"px-8 py-4 grid place-content-center"},JO=["onClick"],KO={__name:"ControlPanel",setup(t){return(e,i)=>{const s=ce("Icon"),n=ce("IconButton"),o=ce("GridLayout"),r=ce("FlexLayout"),a=ce("ExpandLayout");return X(),We(a,{class:"relative h-full"},{actions:M(({isExpanded:l,setIsExpanded:c})=>[I(GO,{onSetIsExpanded:c,"is-expanded":l},null,8,["onSetIsExpanded","is-expanded"])]),"expanded-content":M(({isExpanded:l,setIsExpanded:c})=>[S("div",{class:ii(["start-panel full-screen fixed top-0 left-0 grid justify-end items-end pb-14 px-2 transition-all",[l?"active":"inactive"]])},[S("fluent-card",qO,[I(r,{class:"flex-col p-4 gap-8 justify-between h-full"},{default:M(()=>[I(o,{class:"grid-cols-3 gap-2"},{default:M(()=>[I(n,{"has-hover":"","has-active":""},{default:M(()=>[S("div",ZO,[I(s,null,{default:M(()=>[Ne("wifi")]),_:1})])]),_:1}),I(n,{"has-hover":"","has-active":""},{default:M(()=>[S("div",XO,[I(s,null,{default:M(()=>[Ne("bluetooth")]),_:1})])]),_:1}),I(n,{"has-hover":"","has-active":""},{default:M(()=>[S("div",QO,[I(s,null,{default:M(()=>[Ne("air")]),_:1})])]),_:1}),I(WO)]),_:1}),I(UO)]),_:1})]),Mo(S("div",{onClick:d=>c(!1),class:"fixed left-0 bottom-0 w-screen h-screen -z-[1]"},null,8,JO),[[Vo,l]])],2)]),_:1})}}},eE=ve({__name:"Navigation",setup(t){return(e,i)=>{const s=ce("FlexLayout");return X(),We(s,{class:"h-full gap-2"},{default:M(()=>[I(KO),I(zO)]),_:1})}}}),tE=xi(eE,[["__scopeId","data-v-50455c22"]]),iE={class:"relative h-full flex gap-1 select-none overflow-auto"},sE=["onClick"],nE=["anchor"],oE=ve({__name:"MinimizeApps",setup(t){const e=Zn();return(i,s)=>{const n=ce("Icon"),o=ce("ScalingButton");return X(),be("ul",iE,[(X(!0),be(ft,null,Gn(we(e).getAllProcesses,r=>(X(),be("div",{key:r.getProcessStateInstance().process.processId,onClick:()=>{we(e).setMinimize(r,!r.getProcessStateInstance().accessibility.minimize),we(e).cleanActive(),we(e).cleanFocus(),r.getProcessStateInstance().accessibility.active=!0,r.getProcessStateInstance().accessibility.focus=!0,we(e).setTopZIndex(r)}},[I(o,{id:"process"+r.getProcessStateInstance().process.processId,class:"h-full aspect-square"},{default:M(()=>[I(n,null,{default:M(()=>[Ne(dt(r.getProcessStateInstance().window.info.icon),1)]),_:2},1024)]),_:2},1032,["id"]),S("fluent-tooltip",{position:"top",anchor:"process"+r.getProcessStateInstance().process.processId},dt(r.getProcessStateInstance().window.info.title),9,nE)],8,sE))),128))])}}}),rE={class:"relative w-full h-12 border-t border-black/20 back-blur bg-white/25 dark:bg-black/75 p-1"},aE=S("div",{class:"hidden flex-initial w-1/4 md:block h-full self-start overflow-auto"},null,-1),lE={class:"relative h-full flex-1 duration-1000 transition-all overflow-clip"},cE={class:"flex-none w-fit md:w-1/4 h-full flex justify-end"},dE=ve({__name:"StartsBar",setup(t){return(e,i)=>{const s=ce("FlexLayout");return X(),be("div",rE,[I(s,{class:"relative w-full h-full items-center justify-between overflow-clip"},{default:M(()=>[aE,S("div",lE,[I(s,{class:"h-full items-center justify-start md:justify-center gap-1"},{default:M(()=>[I(EO),I(oE)]),_:1})]),S("div",cE,[I(tE)])]),_:1})])}}}),uE=ve({__name:"DesktopIcon",props:{e:{}},setup(t){const e=t;var i=0,s=null;const n=()=>{if(i!==0){sh(e.e.slot,e.e.title,e.e.icon),i=0;return}i=200,s=setInterval(()=>{i-=10,i<=0&&(i=0,clearInterval(s))},10)};return(o,r)=>{const a=ce("Icon"),l=ce("IconButton");return X(),We(l,{class:"w-16 aspect-square",onClick:n},{default:M(()=>[I(a,null,{default:M(()=>[Ne(dt(o.e.icon),1)]),_:1})]),_:1})}}}),hE={class:"relative wallpaper full-screen overflow-clip"},fE={class:"flex flex-col gap-2 flex-wrap p-2"},pE=ve({__name:"Desktop",setup(t){const e=ih();return(i,s)=>(X(),be("div",hE,[S("ul",fE,[(X(!0),be(ft,null,Gn(we(e),(n,o)=>(X(),We(uE,{e:n,key:o},null,8,["e"]))),128))])]))}}),gE={class:"relative max-h-[100svh] h-[100svh] w-screen overflow-clip"},mE={class:"flex-grow h-full max-h-[100svh] overflow-clip"},vE=ve({__name:"Windows",setup(t){const e=Zn(),i=is(),s=gc();Im(()=>{s.setIsLogout(!0),i.setIsShutdown(!1),i.setNeedShutdown(!1),i.setStarts({...i.getSystemStarts,isOpenning:!1})}),Xl(()=>{s.setIsLogout(!0)});var n=[];const o=r=>{if(n.length===0){n[0]=r.code;return}else n.length===1?n[1]=r.code:r.code!==n[1]&&(n.shift(),n[1]=r.code);["ShiftLeft","ShiftRight"].includes(n[0])&&(n[1]==="KeyD"&&e.setAllProcessMinimize(),n=[])};return Lt(()=>{document.addEventListener("keydown",o)}),yi(()=>{document.removeEventListener("keydown",o)}),(r,a)=>(X(),be("div",gE,[we(i).getSystemIsLocked?(X(),be(ft,{key:1},[S("div",mE,[I(pE)]),S("nav",{class:"fixed bottom-0 left-0 w-full h-12",style:an({zIndex:we(i).getSystemStarts.isOpening?"99999":"999"})},[I(dE)],4)],64)):(X(),We(OD,{key:0}))]))}}),Gv=ec(vE),bE=ve({__name:"ScreenMask",setup(t){const e=is();return Lt(()=>{e.setIsLocked(!0)}),yi(()=>{e.setIsLocked(!0)}),(i,s)=>(X(),be(ft,null,[S("div",{class:"brightness",style:an({"--system-bright":100-we(e).getSystemBrightness+"%"})},null,4),S("div",{class:"nightlight",style:an({"--system-nightlight-enabled":we(e).getSystemIsNightlight?"35%":"0"})},null,4)],64))}}),qv=ec(bE),nh=t=>(Gl("data-v-dce5a362"),t=t(),ql(),t),yE={class:"z-highest shutdown flex justify-center items-center fixed full-screen top-0 right-0 bg-black"},xE={key:0,class:"full-screen flex flex-col items-center justify-center gap-8"},wE=nh(()=>S("h1",{class:"text-white font-bold text-xl"},"Shutdown",-1)),$E=nh(()=>S("fluent-progress-ring",null,null,-1)),kE=[wE,$E],_E={key:1,class:"container h-full max-h-96 flex flex-col gap-8 p-4 overflow-auto"},SE={class:"space-y-4 w-full h-full"},CE=nh(()=>S("h1",{class:"text-white font-bold text-xl"},"Some processes is running",-1)),IE={class:"transition-all flex items-center justify-between py-1 px-2 hover:bg-white/25 rounded"},TE={class:"inline-flex gap-2"},FE={class:"material-symbols-outlined"},DE={class:"flex items-center justify-end"},RE=["onClick"],OE={class:"flex gap-2 items-center justify-end"},EE=ve({__name:"Shutdown",setup(t){const e=Zn(),i=is();Ks(()=>e.getAllProcesses.length,()=>{e.getAllProcesses.length===0&&i.setIsShutdown(!0)},{immediate:!0});var s;const n=it(3);return Lt(()=>{s=setInterval(()=>{n.value--,n.value<=-1&&(e.killAllProcesses(),clearInterval(s))},1e3)}),Xl(()=>{clearInterval(s)}),(o,r)=>(X(),be("div",yE,[we(e).getAllProcesses.length===0?(X(),be("div",xE,kE)):(X(),be("div",_E,[S("div",SE,[CE,(X(!0),be(ft,null,Gn(we(e).getAllProcesses,a=>(X(),be("ul",{key:a.getProcessStateInstance().process.processId,class:"text-white flex flex-col overflow-auto"},[S("li",IE,[S("div",TE,[S("span",FE,dt(a.getProcessStateInstance().window.info.icon),1),S("p",null,dt(a.getProcessStateInstance().window.info.title),1)]),S("div",DE,[S("span",{onClick:l=>we(e).killProcessByProcessId(a.getProcessStateInstance().process.processId),class:"scale-75 p-2 rounded-full select-none hover:bg-white/25 material-symbols-outlined"},"close",8,RE)])])]))),128))]),S("div",OE,[S("fluent-button",{onClick:r[0]||(r[0]=()=>{we(e).killAllProcesses()})},"End All Processes("+dt(n.value)+")",1)])]))]))}}),LE=xi(EE,[["__scopeId","data-v-dce5a362"]]),Zv=ec(LE);Gv.use(Gm).use(Bm).mount("#window");qv.mount("#window-screen-mask");jD();const Fd=is();Ks(()=>Fd.needShutdown,()=>{Gv.unmount(),qv.unmount(),Zv.mount("#window")});Ks(()=>Fd.isShutdown,()=>{Fd.isShutdown&&setTimeout(()=>{document.documentElement.style.backgroundColor="#000",document.body.remove(),Zv.unmount()},500)})});export default AE();
//# sourceMappingURL=index-a19711d7.js.map
