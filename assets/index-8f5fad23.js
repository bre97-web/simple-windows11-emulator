var ny=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var NL=ny((iA,Ma)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=i(n);fetch(n.href,o)}})();const ks=function(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof self<"u")return self;if(typeof window<"u")return window;try{return new Function("return this")()}catch{return{}}}();ks.trustedTypes===void 0&&(ks.trustedTypes={createPolicy:(e,t)=>t});const kp={configurable:!1,enumerable:!1,writable:!1};ks.FAST===void 0&&Reflect.defineProperty(ks,"FAST",Object.assign({value:Object.create(null)},kp));const vr=ks.FAST;if(vr.getById===void 0){const e=Object.create(null);Reflect.defineProperty(vr,"getById",Object.assign({value(t,i){let s=e[t];return s===void 0&&(s=i?e[t]=i():null),s}},kp))}const Sn=Object.freeze([]);function _p(){const e=new WeakMap;return function(t){let i=e.get(t);if(i===void 0){let s=Reflect.getPrototypeOf(t);for(;i===void 0&&s!==null;)i=e.get(s),s=Reflect.getPrototypeOf(s);i=i===void 0?[]:i.slice(0),e.set(t,i)}return i}}const yc=ks.FAST.getById(1,()=>{const e=[],t=[];function i(){if(t.length)throw t.shift()}function s(r){try{r.call()}catch(a){t.push(a),setTimeout(i,0)}}function n(){let a=0;for(;a<e.length;)if(s(e[a]),a++,a>1024){for(let l=0,c=e.length-a;l<c;l++)e[l]=e[l+a];e.length-=a,a=0}e.length=0}function o(r){e.length<1&&ks.requestAnimationFrame(n),e.push(r)}return Object.freeze({enqueue:o,process:n})}),Sp=ks.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let xc=Sp;const or=`fast-${Math.random().toString(36).substring(2,8)}`,Cp=`${or}{`,Hu=`}${or}`,ce=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(xc!==Sp)throw new Error("The HTML policy can only be set once.");xc=e},createHTML(e){return xc.createHTML(e)},isMarker(e){return e&&e.nodeType===8&&e.data.startsWith(or)},extractDirectiveIndexFromMarker(e){return parseInt(e.data.replace(`${or}:`,""))},createInterpolationPlaceholder(e){return`${Cp}${e}${Hu}`},createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder(e){return`<!--${or}:${e}-->`},queueUpdate:yc.enqueue,processUpdates:yc.process,nextUpdate(){return new Promise(yc.enqueue)},setAttribute(e,t,i){i==null?e.removeAttribute(t):e.setAttribute(t,i)},setBooleanAttribute(e,t,i){i?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;t!==null;t=e.firstChild)e.removeChild(t)},createTemplateWalker(e){return document.createTreeWalker(e,133,null,!1)}});class Va{constructor(t,i){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=t,this.sub1=i}has(t){return this.spillover===void 0?this.sub1===t||this.sub2===t:this.spillover.indexOf(t)!==-1}subscribe(t){const i=this.spillover;if(i===void 0){if(this.has(t))return;if(this.sub1===void 0){this.sub1=t;return}if(this.sub2===void 0){this.sub2=t;return}this.spillover=[this.sub1,this.sub2,t],this.sub1=void 0,this.sub2=void 0}else i.indexOf(t)===-1&&i.push(t)}unsubscribe(t){const i=this.spillover;if(i===void 0)this.sub1===t?this.sub1=void 0:this.sub2===t&&(this.sub2=void 0);else{const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}notify(t){const i=this.spillover,s=this.source;if(i===void 0){const n=this.sub1,o=this.sub2;n!==void 0&&n.handleChange(s,t),o!==void 0&&o.handleChange(s,t)}else for(let n=0,o=i.length;n<o;++n)i[n].handleChange(s,t)}}class Ip{constructor(t){this.subscribers={},this.sourceSubscribers=null,this.source=t}notify(t){var i;const s=this.subscribers[t];s!==void 0&&s.notify(t),(i=this.sourceSubscribers)===null||i===void 0||i.notify(t)}subscribe(t,i){var s;if(i){let n=this.subscribers[i];n===void 0&&(this.subscribers[i]=n=new Va(this.source)),n.subscribe(t)}else this.sourceSubscribers=(s=this.sourceSubscribers)!==null&&s!==void 0?s:new Va(this.source),this.sourceSubscribers.subscribe(t)}unsubscribe(t,i){var s;if(i){const n=this.subscribers[i];n!==void 0&&n.unsubscribe(t)}else(s=this.sourceSubscribers)===null||s===void 0||s.unsubscribe(t)}}const le=vr.getById(2,()=>{const e=/(:|&&|\|\||if)/,t=new WeakMap,i=ce.queueUpdate;let s,n=c=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function o(c){let u=c.$fastController||t.get(c);return u===void 0&&(Array.isArray(c)?u=n(c):t.set(c,u=new Ip(c))),u}const r=_p();class a{constructor(u){this.name=u,this.field=`_${u}`,this.callback=`${u}Changed`}getValue(u){return s!==void 0&&s.watch(u,this.name),u[this.field]}setValue(u,d){const p=this.field,b=u[p];if(b!==d){u[p]=d;const $=u[this.callback];typeof $=="function"&&$.call(u,b,d),o(u).notify(this.name)}}}class l extends Va{constructor(u,d,p=!1){super(u,d),this.binding=u,this.isVolatileBinding=p,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(u,d){this.needsRefresh&&this.last!==null&&this.disconnect();const p=s;s=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const b=this.binding(u,d);return s=p,b}disconnect(){if(this.last!==null){let u=this.first;for(;u!==void 0;)u.notifier.unsubscribe(this,u.propertyName),u=u.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(u,d){const p=this.last,b=o(u),$=p===null?this.first:{};if($.propertySource=u,$.propertyName=d,$.notifier=b,b.subscribe(this,d),p!==null){if(!this.needsRefresh){let x;s=void 0,x=p.propertySource[p.propertyName],s=this,u===x&&(this.needsRefresh=!0)}p.next=$}this.last=$}handleChange(){this.needsQueue&&(this.needsQueue=!1,i(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let u=this.first;return{next:()=>{const d=u;return d===void 0?{value:void 0,done:!0}:(u=u.next,{value:d,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(c){n=c},getNotifier:o,track(c,u){s!==void 0&&s.watch(c,u)},trackVolatile(){s!==void 0&&(s.needsRefresh=!0)},notify(c,u){o(c).notify(u)},defineProperty(c,u){typeof u=="string"&&(u=new a(u)),r(c).push(u),Reflect.defineProperty(c,u.name,{enumerable:!0,get:function(){return u.getValue(this)},set:function(d){u.setValue(this,d)}})},getAccessors:r,binding(c,u,d=this.isVolatileBinding(c)){return new l(c,u,d)},isVolatileBinding(c){return e.test(c.toString())}})});function _(e,t){le.defineProperty(e,t)}function oy(e,t,i){return Object.assign({},i,{get:function(){return le.trackVolatile(),i.get.apply(this)}})}const yh=vr.getById(3,()=>{let e=null;return{get(){return e},set(t){e=t}}});class br{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return yh.get()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(t){yh.set(t)}}le.defineProperty(br.prototype,"index");le.defineProperty(br.prototype,"length");const rr=Object.seal(new br);class rl{constructor(){this.targetIndex=0}}class Tp extends rl{constructor(){super(...arguments),this.createPlaceholder=ce.createInterpolationPlaceholder}}class Nu extends rl{constructor(t,i,s){super(),this.name=t,this.behavior=i,this.options=s}createPlaceholder(t){return ce.createCustomAttributePlaceholder(this.name,t)}createBehavior(t){return new this.behavior(t,this.options)}}function ry(e,t){this.source=e,this.context=t,this.bindingObserver===null&&(this.bindingObserver=le.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function ay(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function ly(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function cy(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;e!==void 0&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function uy(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function dy(e){ce.setAttribute(this.target,this.targetName,e)}function hy(e){ce.setBooleanAttribute(this.target,this.targetName,e)}function fy(e){if(e==null&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;t===void 0?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{const t=this.target.$fastView;t!==void 0&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function py(e){this.target[this.targetName]=e}function gy(e){const t=this.classVersions||Object.create(null),i=this.target;let s=this.version||0;if(e!=null&&e.length){const n=e.split(/\s+/);for(let o=0,r=n.length;o<r;++o){const a=n[o];a!==""&&(t[a]=s,i.classList.add(a))}}if(this.classVersions=t,this.version=s+1,s!==0){s-=1;for(const n in t)t[n]===s&&i.classList.remove(n)}}class zu extends Tp{constructor(t){super(),this.binding=t,this.bind=ry,this.unbind=ly,this.updateTarget=dy,this.isBindingVolatile=le.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(t){if(this.originalTargetName=t,t!==void 0)switch(t[0]){case":":if(this.cleanedTargetName=t.substr(1),this.updateTarget=py,this.cleanedTargetName==="innerHTML"){const i=this.binding;this.binding=(s,n)=>ce.createHTML(i(s,n))}break;case"?":this.cleanedTargetName=t.substr(1),this.updateTarget=hy;break;case"@":this.cleanedTargetName=t.substr(1),this.bind=ay,this.unbind=uy;break;default:this.cleanedTargetName=t,t==="class"&&(this.updateTarget=gy);break}}targetAtContent(){this.updateTarget=fy,this.unbind=cy}createBehavior(t){return new my(t,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class my{constructor(t,i,s,n,o,r,a){this.source=null,this.context=null,this.bindingObserver=null,this.target=t,this.binding=i,this.isBindingVolatile=s,this.bind=n,this.unbind=o,this.updateTarget=r,this.targetName=a}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(t){br.setEvent(t);const i=this.binding(this.source,this.context);br.setEvent(null),i!==!0&&t.preventDefault()}}let wc=null;class Bu{addFactory(t){t.targetIndex=this.targetIndex,this.behaviorFactories.push(t)}captureContentBinding(t){t.targetAtContent(),this.addFactory(t)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){wc=this}static borrow(t){const i=wc||new Bu;return i.directives=t,i.reset(),wc=null,i}}function vy(e){if(e.length===1)return e[0];let t;const i=e.length,s=e.map(r=>typeof r=="string"?()=>r:(t=r.targetName||t,r.binding)),n=(r,a)=>{let l="";for(let c=0;c<i;++c)l+=s[c](r,a);return l},o=new zu(n);return o.targetName=t,o}const by=Hu.length;function Fp(e,t){const i=t.split(Cp);if(i.length===1)return null;const s=[];for(let n=0,o=i.length;n<o;++n){const r=i[n],a=r.indexOf(Hu);let l;if(a===-1)l=r;else{const c=parseInt(r.substring(0,a));s.push(e.directives[c]),l=r.substring(a+by)}l!==""&&s.push(l)}return s}function xh(e,t,i=!1){const s=t.attributes;for(let n=0,o=s.length;n<o;++n){const r=s[n],a=r.value,l=Fp(e,a);let c=null;l===null?i&&(c=new zu(()=>a),c.targetName=r.name):c=vy(l),c!==null&&(t.removeAttributeNode(r),n--,o--,e.addFactory(c))}}function yy(e,t,i){const s=Fp(e,t.textContent);if(s!==null){let n=t;for(let o=0,r=s.length;o<r;++o){const a=s[o],l=o===0?t:n.parentNode.insertBefore(document.createTextNode(""),n.nextSibling);typeof a=="string"?l.textContent=a:(l.textContent=" ",e.captureContentBinding(a)),n=l,e.targetIndex++,l!==t&&i.nextNode()}e.targetIndex--}}function xy(e,t){const i=e.content;document.adoptNode(i);const s=Bu.borrow(t);xh(s,e,!0);const n=s.behaviorFactories;s.reset();const o=ce.createTemplateWalker(i);let r;for(;r=o.nextNode();)switch(s.targetIndex++,r.nodeType){case 1:xh(s,r);break;case 3:yy(s,r,o);break;case 8:ce.isMarker(r)&&s.addFactory(t[ce.extractDirectiveIndexFromMarker(r)])}let a=0;(ce.isMarker(i.firstChild)||i.childNodes.length===1&&t.length)&&(i.insertBefore(document.createComment(""),i.firstChild),a=-1);const l=s.behaviorFactories;return s.release(),{fragment:i,viewBehaviorFactories:l,hostBehaviorFactories:n,targetOffset:a}}const $c=document.createRange();class Dp{constructor(t,i){this.fragment=t,this.behaviors=i,this.source=null,this.context=null,this.firstChild=t.firstChild,this.lastChild=t.lastChild}appendTo(t){t.appendChild(this.fragment)}insertBefore(t){if(this.fragment.hasChildNodes())t.parentNode.insertBefore(this.fragment,t);else{const i=this.lastChild;if(t.previousSibling===i)return;const s=t.parentNode;let n=this.firstChild,o;for(;n!==i;)o=n.nextSibling,s.insertBefore(n,t),n=o;s.insertBefore(i,t)}}remove(){const t=this.fragment,i=this.lastChild;let s=this.firstChild,n;for(;s!==i;)n=s.nextSibling,t.appendChild(s),s=n;t.appendChild(i)}dispose(){const t=this.firstChild.parentNode,i=this.lastChild;let s=this.firstChild,n;for(;s!==i;)n=s.nextSibling,t.removeChild(s),s=n;t.removeChild(i);const o=this.behaviors,r=this.source;for(let a=0,l=o.length;a<l;++a)o[a].unbind(r)}bind(t,i){const s=this.behaviors;if(this.source!==t)if(this.source!==null){const n=this.source;this.source=t,this.context=i;for(let o=0,r=s.length;o<r;++o){const a=s[o];a.unbind(n),a.bind(t,i)}}else{this.source=t,this.context=i;for(let n=0,o=s.length;n<o;++n)s[n].bind(t,i)}}unbind(){if(this.source===null)return;const t=this.behaviors,i=this.source;for(let s=0,n=t.length;s<n;++s)t[s].unbind(i);this.source=null}static disposeContiguousBatch(t){if(t.length!==0){$c.setStartBefore(t[0].firstChild),$c.setEndAfter(t[t.length-1].lastChild),$c.deleteContents();for(let i=0,s=t.length;i<s;++i){const n=t[i],o=n.behaviors,r=n.source;for(let a=0,l=o.length;a<l;++a)o[a].unbind(r)}}}}class wh{constructor(t,i){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=t,this.directives=i}create(t){if(this.fragment===null){let c;const u=this.html;if(typeof u=="string"){c=document.createElement("template"),c.innerHTML=ce.createHTML(u);const p=c.content.firstElementChild;p!==null&&p.tagName==="TEMPLATE"&&(c=p)}else c=u;const d=xy(c,this.directives);this.fragment=d.fragment,this.viewBehaviorFactories=d.viewBehaviorFactories,this.hostBehaviorFactories=d.hostBehaviorFactories,this.targetOffset=d.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const i=this.fragment.cloneNode(!0),s=this.viewBehaviorFactories,n=new Array(this.behaviorCount),o=ce.createTemplateWalker(i);let r=0,a=this.targetOffset,l=o.nextNode();for(let c=s.length;r<c;++r){const u=s[r],d=u.targetIndex;for(;l!==null;)if(a===d){n[r]=u.createBehavior(l);break}else l=o.nextNode(),a++}if(this.hasHostBehaviors){const c=this.hostBehaviorFactories;for(let u=0,d=c.length;u<d;++u,++r)n[r]=c[u].createBehavior(t)}return new Dp(i,n)}render(t,i,s){typeof i=="string"&&(i=document.getElementById(i)),s===void 0&&(s=i);const n=this.create(s);return n.bind(t,rr),n.appendTo(i),n}}const wy=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function P(e,...t){const i=[];let s="";for(let n=0,o=e.length-1;n<o;++n){const r=e[n];let a=t[n];if(s+=r,a instanceof wh){const l=a;a=()=>l}if(typeof a=="function"&&(a=new zu(a)),a instanceof Tp){const l=wy.exec(r);l!==null&&(a.targetName=l[2])}a instanceof rl?(s+=a.createPlaceholder(i.length),i.push(a)):s+=a}return s+=e[e.length-1],new wh(s,i)}class qt{constructor(){this.targets=new WeakSet}addStylesTo(t){this.targets.add(t)}removeStylesFrom(t){this.targets.delete(t)}isAttachedTo(t){return this.targets.has(t)}withBehaviors(...t){return this.behaviors=this.behaviors===null?t:this.behaviors.concat(t),this}}qt.create=(()=>{if(ce.supportsAdoptedStyleSheets){const e=new Map;return t=>new $y(t,e)}return e=>new Sy(e)})();function ju(e){return e.map(t=>t instanceof qt?ju(t.styles):[t]).reduce((t,i)=>t.concat(i),[])}function Rp(e){return e.map(t=>t instanceof qt?t.behaviors:null).reduce((t,i)=>i===null?t:(t===null&&(t=[]),t.concat(i)),null)}let Ep=(e,t)=>{e.adoptedStyleSheets=[...e.adoptedStyleSheets,...t]},Op=(e,t)=>{e.adoptedStyleSheets=e.adoptedStyleSheets.filter(i=>t.indexOf(i)===-1)};if(ce.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),Ep=(e,t)=>{e.adoptedStyleSheets.push(...t)},Op=(e,t)=>{for(const i of t){const s=e.adoptedStyleSheets.indexOf(i);s!==-1&&e.adoptedStyleSheets.splice(s,1)}}}catch{}class $y extends qt{constructor(t,i){super(),this.styles=t,this.styleSheetCache=i,this._styleSheets=void 0,this.behaviors=Rp(t)}get styleSheets(){if(this._styleSheets===void 0){const t=this.styles,i=this.styleSheetCache;this._styleSheets=ju(t).map(s=>{if(s instanceof CSSStyleSheet)return s;let n=i.get(s);return n===void 0&&(n=new CSSStyleSheet,n.replaceSync(s),i.set(s,n)),n})}return this._styleSheets}addStylesTo(t){Ep(t,this.styleSheets),super.addStylesTo(t)}removeStylesFrom(t){Op(t,this.styleSheets),super.removeStylesFrom(t)}}let ky=0;function _y(){return`fast-style-class-${++ky}`}class Sy extends qt{constructor(t){super(),this.styles=t,this.behaviors=null,this.behaviors=Rp(t),this.styleSheets=ju(t),this.styleClass=_y()}addStylesTo(t){const i=this.styleSheets,s=this.styleClass;t=this.normalizeTarget(t);for(let n=0;n<i.length;n++){const o=document.createElement("style");o.innerHTML=i[n],o.className=s,t.append(o)}super.addStylesTo(t)}removeStylesFrom(t){t=this.normalizeTarget(t);const i=t.querySelectorAll(`.${this.styleClass}`);for(let s=0,n=i.length;s<n;++s)t.removeChild(i[s]);super.removeStylesFrom(t)}isAttachedTo(t){return super.isAttachedTo(this.normalizeTarget(t))}normalizeTarget(t){return t===document?document.body:t}}const Ha=Object.freeze({locate:_p()}),Mr={toView(e){return e?"true":"false"},fromView(e){return!(e==null||e==="false"||e===!1||e===0)}},q={toView(e){if(e==null)return null;const t=e*1;return isNaN(t)?null:t.toString()},fromView(e){if(e==null)return null;const t=e*1;return isNaN(t)?null:t}};class Na{constructor(t,i,s=i.toLowerCase(),n="reflect",o){this.guards=new Set,this.Owner=t,this.name=i,this.attribute=s,this.mode=n,this.converter=o,this.fieldName=`_${i}`,this.callbackName=`${i}Changed`,this.hasCallback=this.callbackName in t.prototype,n==="boolean"&&o===void 0&&(this.converter=Mr)}setValue(t,i){const s=t[this.fieldName],n=this.converter;n!==void 0&&(i=n.fromView(i)),s!==i&&(t[this.fieldName]=i,this.tryReflectToAttribute(t),this.hasCallback&&t[this.callbackName](s,i),t.$fastController.notify(this.name))}getValue(t){return le.track(t,this.name),t[this.fieldName]}onAttributeChangedCallback(t,i){this.guards.has(t)||(this.guards.add(t),this.setValue(t,i),this.guards.delete(t))}tryReflectToAttribute(t){const i=this.mode,s=this.guards;s.has(t)||i==="fromView"||ce.queueUpdate(()=>{s.add(t);const n=t[this.fieldName];switch(i){case"reflect":const o=this.converter;ce.setAttribute(t,this.attribute,o!==void 0?o.toView(n):n);break;case"boolean":ce.setBooleanAttribute(t,this.attribute,n);break}s.delete(t)})}static collect(t,...i){const s=[];i.push(Ha.locate(t));for(let n=0,o=i.length;n<o;++n){const r=i[n];if(r!==void 0)for(let a=0,l=r.length;a<l;++a){const c=r[a];typeof c=="string"?s.push(new Na(t,c)):s.push(new Na(t,c.property,c.attribute,c.mode,c.converter))}}return s}}function f(e,t){let i;function s(n,o){arguments.length>1&&(i.property=o),Ha.locate(n.constructor).push(i)}if(arguments.length>1){i={},s(e,t);return}return i=e===void 0?{}:e,s}const $h={mode:"open"},kh={},eu=vr.getById(4,()=>{const e=new Map;return Object.freeze({register(t){return e.has(t.type)?!1:(e.set(t.type,t),!0)},getByType(t){return e.get(t)}})});class al{constructor(t,i=t.definition){typeof i=="string"&&(i={name:i}),this.type=t,this.name=i.name,this.template=i.template;const s=Na.collect(t,i.attributes),n=new Array(s.length),o={},r={};for(let a=0,l=s.length;a<l;++a){const c=s[a];n[a]=c.attribute,o[c.name]=c,r[c.attribute]=c}this.attributes=s,this.observedAttributes=n,this.propertyLookup=o,this.attributeLookup=r,this.shadowOptions=i.shadowOptions===void 0?$h:i.shadowOptions===null?void 0:Object.assign(Object.assign({},$h),i.shadowOptions),this.elementOptions=i.elementOptions===void 0?kh:Object.assign(Object.assign({},kh),i.elementOptions),this.styles=i.styles===void 0?void 0:Array.isArray(i.styles)?qt.create(i.styles):i.styles instanceof qt?i.styles:qt.create([i.styles])}get isDefined(){return!!eu.getByType(this.type)}define(t=customElements){const i=this.type;if(eu.register(this)){const s=this.attributes,n=i.prototype;for(let o=0,r=s.length;o<r;++o)le.defineProperty(n,s[o]);Reflect.defineProperty(i,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return t.get(this.name)||t.define(this.name,i,this.elementOptions),this}}al.forType=eu.getByType;const Pp=new WeakMap,Cy={bubbles:!0,composed:!0,cancelable:!0};function kc(e){return e.shadowRoot||Pp.get(e)||null}class Yu extends Ip{constructor(t,i){super(t),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=t,this.definition=i;const s=i.shadowOptions;if(s!==void 0){const o=t.attachShadow(s);s.mode==="closed"&&Pp.set(t,o)}const n=le.getAccessors(t);if(n.length>0){const o=this.boundObservables=Object.create(null);for(let r=0,a=n.length;r<a;++r){const l=n[r].name,c=t[l];c!==void 0&&(delete t[l],o[l]=c)}}}get isConnected(){return le.track(this,"isConnected"),this._isConnected}setIsConnected(t){this._isConnected=t,le.notify(this,"isConnected")}get template(){return this._template}set template(t){this._template!==t&&(this._template=t,this.needsInitialization||this.renderTemplate(t))}get styles(){return this._styles}set styles(t){this._styles!==t&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=t,!this.needsInitialization&&t!==null&&this.addStyles(t))}addStyles(t){const i=kc(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)i.append(t);else if(!t.isAttachedTo(i)){const s=t.behaviors;t.addStylesTo(i),s!==null&&this.addBehaviors(s)}}removeStyles(t){const i=kc(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)i.removeChild(t);else if(t.isAttachedTo(i)){const s=t.behaviors;t.removeStylesFrom(i),s!==null&&this.removeBehaviors(s)}}addBehaviors(t){const i=this.behaviors||(this.behaviors=new Map),s=t.length,n=[];for(let o=0;o<s;++o){const r=t[o];i.has(r)?i.set(r,i.get(r)+1):(i.set(r,1),n.push(r))}if(this._isConnected){const o=this.element;for(let r=0;r<n.length;++r)n[r].bind(o,rr)}}removeBehaviors(t,i=!1){const s=this.behaviors;if(s===null)return;const n=t.length,o=[];for(let r=0;r<n;++r){const a=t[r];if(s.has(a)){const l=s.get(a)-1;l===0||i?s.delete(a)&&o.push(a):s.set(a,l)}}if(this._isConnected){const r=this.element;for(let a=0;a<o.length;++a)o[a].unbind(r)}}onConnectedCallback(){if(this._isConnected)return;const t=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(t,rr);const i=this.behaviors;if(i!==null)for(const[s]of i)s.bind(t,rr);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const t=this.view;t!==null&&t.unbind();const i=this.behaviors;if(i!==null){const s=this.element;for(const[n]of i)n.unbind(s)}}onAttributeChangedCallback(t,i,s){const n=this.definition.attributeLookup[t];n!==void 0&&n.onAttributeChangedCallback(this.element,s)}emit(t,i,s){return this._isConnected?this.element.dispatchEvent(new CustomEvent(t,Object.assign(Object.assign({detail:i},Cy),s))):!1}finishInitialization(){const t=this.element,i=this.boundObservables;if(i!==null){const n=Object.keys(i);for(let o=0,r=n.length;o<r;++o){const a=n[o];t[a]=i[a]}this.boundObservables=null}const s=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():s.template&&(this._template=s.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():s.styles&&(this._styles=s.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(t){const i=this.element,s=kc(i)||i;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||ce.removeChildNodes(s),t&&(this.view=t.render(i,s,i))}static forCustomElement(t){const i=t.$fastController;if(i!==void 0)return i;const s=al.forType(t.constructor);if(s===void 0)throw new Error("Missing FASTElement definition.");return t.$fastController=new Yu(t,s)}}function _h(e){return class extends e{constructor(){super(),Yu.forCustomElement(this)}$emit(t,i,s){return this.$fastController.emit(t,i,s)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(t,i,s){this.$fastController.onAttributeChangedCallback(t,i,s)}}}const ll=Object.assign(_h(HTMLElement),{from(e){return _h(e)},define(e,t){return new al(e,t).define().type}});class Uu{createCSS(){return""}createBehavior(){}}function Lp(e,t){const i=[];let s="";const n=[];for(let o=0,r=e.length-1;o<r;++o){s+=e[o];let a=t[o];if(a instanceof Uu){const l=a.createBehavior();a=a.createCSS(),l&&n.push(l)}a instanceof qt||a instanceof CSSStyleSheet?(s.trim()!==""&&(i.push(s),s=""),i.push(a)):s+=a}return s+=e[e.length-1],s.trim()!==""&&i.push(s),{styles:i,behaviors:n}}function T(e,...t){const{styles:i,behaviors:s}=Lp(e,t),n=qt.create(i);return s.length&&n.withBehaviors(...s),n}class Iy extends Uu{constructor(t,i){super(),this.behaviors=i,this.css="";const s=t.reduce((n,o)=>(typeof o=="string"?this.css+=o:n.push(o),n),[]);s.length&&(this.styles=qt.create(s))}createBehavior(){return this}createCSS(){return this.css}bind(t){this.styles&&t.$fastController.addStyles(this.styles),this.behaviors.length&&t.$fastController.addBehaviors(this.behaviors)}unbind(t){this.styles&&t.$fastController.removeStyles(this.styles),this.behaviors.length&&t.$fastController.removeBehaviors(this.behaviors)}}function pi(e,...t){const{styles:i,behaviors:s}=Lp(e,t);return new Iy(i,s)}function Hi(e,t,i){return{index:e,removed:t,addedCount:i}}const Ap=0,Mp=1,tu=2,iu=3;function Ty(e,t,i,s,n,o){const r=o-n+1,a=i-t+1,l=new Array(r);let c,u;for(let d=0;d<r;++d)l[d]=new Array(a),l[d][0]=d;for(let d=0;d<a;++d)l[0][d]=d;for(let d=1;d<r;++d)for(let p=1;p<a;++p)e[t+p-1]===s[n+d-1]?l[d][p]=l[d-1][p-1]:(c=l[d-1][p]+1,u=l[d][p-1]+1,l[d][p]=c<u?c:u);return l}function Fy(e){let t=e.length-1,i=e[0].length-1,s=e[t][i];const n=[];for(;t>0||i>0;){if(t===0){n.push(tu),i--;continue}if(i===0){n.push(iu),t--;continue}const o=e[t-1][i-1],r=e[t-1][i],a=e[t][i-1];let l;r<a?l=r<o?r:o:l=a<o?a:o,l===o?(o===s?n.push(Ap):(n.push(Mp),s=o),t--,i--):l===r?(n.push(iu),t--,s=r):(n.push(tu),i--,s=a)}return n.reverse(),n}function Dy(e,t,i){for(let s=0;s<i;++s)if(e[s]!==t[s])return s;return i}function Ry(e,t,i){let s=e.length,n=t.length,o=0;for(;o<i&&e[--s]===t[--n];)o++;return o}function Ey(e,t,i,s){return t<i||s<e?-1:t===i||s===e?0:e<i?t<s?t-i:s-i:s<t?s-e:t-e}function Vp(e,t,i,s,n,o){let r=0,a=0;const l=Math.min(i-t,o-n);if(t===0&&n===0&&(r=Dy(e,s,l)),i===e.length&&o===s.length&&(a=Ry(e,s,l-r)),t+=r,n+=r,i-=a,o-=a,i-t===0&&o-n===0)return Sn;if(t===i){const $=Hi(t,[],0);for(;n<o;)$.removed.push(s[n++]);return[$]}else if(n===o)return[Hi(t,[],i-t)];const c=Fy(Ty(e,t,i,s,n,o)),u=[];let d,p=t,b=n;for(let $=0;$<c.length;++$)switch(c[$]){case Ap:d!==void 0&&(u.push(d),d=void 0),p++,b++;break;case Mp:d===void 0&&(d=Hi(p,[],0)),d.addedCount++,p++,d.removed.push(s[b]),b++;break;case tu:d===void 0&&(d=Hi(p,[],0)),d.addedCount++,p++;break;case iu:d===void 0&&(d=Hi(p,[],0)),d.removed.push(s[b]),b++;break}return d!==void 0&&u.push(d),u}const Sh=Array.prototype.push;function Oy(e,t,i,s){const n=Hi(t,i,s);let o=!1,r=0;for(let a=0;a<e.length;a++){const l=e[a];if(l.index+=r,o)continue;const c=Ey(n.index,n.index+n.removed.length,l.index,l.index+l.addedCount);if(c>=0){e.splice(a,1),a--,r-=l.addedCount-l.removed.length,n.addedCount+=l.addedCount-c;const u=n.removed.length+l.removed.length-c;if(!n.addedCount&&!u)o=!0;else{let d=l.removed;if(n.index<l.index){const p=n.removed.slice(0,l.index-n.index);Sh.apply(p,d),d=p}if(n.index+n.removed.length>l.index+l.addedCount){const p=n.removed.slice(l.index+l.addedCount-n.index);Sh.apply(d,p)}n.removed=d,l.index<n.index&&(n.index=l.index)}}else if(n.index<l.index){o=!0,e.splice(a,0,n),a++;const u=n.addedCount-n.removed.length;l.index+=u,r+=u}}o||e.push(n)}function Py(e){const t=[];for(let i=0,s=e.length;i<s;i++){const n=e[i];Oy(t,n.index,n.removed,n.addedCount)}return t}function Ly(e,t){let i=[];const s=Py(t);for(let n=0,o=s.length;n<o;++n){const r=s[n];if(r.addedCount===1&&r.removed.length===1){r.removed[0]!==e[r.index]&&i.push(r);continue}i=i.concat(Vp(e,r.index,r.index+r.addedCount,r.removed,0,r.removed.length))}return i}let Ch=!1;function _c(e,t){let i=e.index;const s=t.length;return i>s?i=s-e.addedCount:i<0&&(i=s+e.removed.length+i-e.addedCount),i<0&&(i=0),e.index=i,e}class Ay extends Va{constructor(t){super(t),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(t,"$fastController",{value:this,enumerable:!1})}subscribe(t){this.flush(),super.subscribe(t)}addSplice(t){this.splices===void 0?this.splices=[t]:this.splices.push(t),this.needsQueue&&(this.needsQueue=!1,ce.queueUpdate(this))}reset(t){this.oldCollection=t,this.needsQueue&&(this.needsQueue=!1,ce.queueUpdate(this))}flush(){const t=this.splices,i=this.oldCollection;if(t===void 0&&i===void 0)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const s=i===void 0?Ly(this.source,t):Vp(this.source,0,this.source.length,i,0,i.length);this.notify(s)}}function My(){if(Ch)return;Ch=!0,le.setArrayObserverFactory(l=>new Ay(l));const e=Array.prototype;if(e.$fastPatch)return;Reflect.defineProperty(e,"$fastPatch",{value:1,enumerable:!1});const t=e.pop,i=e.push,s=e.reverse,n=e.shift,o=e.sort,r=e.splice,a=e.unshift;e.pop=function(){const l=this.length>0,c=t.apply(this,arguments),u=this.$fastController;return u!==void 0&&l&&u.addSplice(Hi(this.length,[c],0)),c},e.push=function(){const l=i.apply(this,arguments),c=this.$fastController;return c!==void 0&&c.addSplice(_c(Hi(this.length-arguments.length,[],arguments.length),this)),l},e.reverse=function(){let l;const c=this.$fastController;c!==void 0&&(c.flush(),l=this.slice());const u=s.apply(this,arguments);return c!==void 0&&c.reset(l),u},e.shift=function(){const l=this.length>0,c=n.apply(this,arguments),u=this.$fastController;return u!==void 0&&l&&u.addSplice(Hi(0,[c],0)),c},e.sort=function(){let l;const c=this.$fastController;c!==void 0&&(c.flush(),l=this.slice());const u=o.apply(this,arguments);return c!==void 0&&c.reset(l),u},e.splice=function(){const l=r.apply(this,arguments),c=this.$fastController;return c!==void 0&&c.addSplice(_c(Hi(+arguments[0],l,arguments.length>2?arguments.length-2:0),this)),l},e.unshift=function(){const l=a.apply(this,arguments),c=this.$fastController;return c!==void 0&&c.addSplice(_c(Hi(0,[],arguments.length),this)),l}}class Vy{constructor(t,i){this.target=t,this.propertyName=i}bind(t){t[this.propertyName]=this.target}unbind(){}}function Ee(e){return new Nu("fast-ref",Vy,e)}const Hp=e=>typeof e=="function",Hy=()=>null;function Ih(e){return e===void 0?Hy:Hp(e)?e:()=>e}function dt(e,t,i){const s=Hp(e)?e:()=>e,n=Ih(t),o=Ih(i);return(r,a)=>s(r,a)?n(r,a):o(r,a)}const Th=Object.freeze({positioning:!1,recycle:!0});function Ny(e,t,i,s){e.bind(t[i],s)}function zy(e,t,i,s){const n=Object.create(s);n.index=i,n.length=t.length,e.bind(t[i],n)}class By{constructor(t,i,s,n,o,r){this.location=t,this.itemsBinding=i,this.templateBinding=n,this.options=r,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=Ny,this.itemsBindingObserver=le.binding(i,this,s),this.templateBindingObserver=le.binding(n,this,o),r.positioning&&(this.bindView=zy)}bind(t,i){this.source=t,this.originalContext=i,this.childContext=Object.create(i),this.childContext.parent=t,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(t,this.originalContext),this.template=this.templateBindingObserver.observe(t,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,this.itemsObserver!==null&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(t,i){t===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):t===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(i)}observeItems(t=!1){if(!this.items){this.items=Sn;return}const i=this.itemsObserver,s=this.itemsObserver=le.getNotifier(this.items),n=i!==s;n&&i!==null&&i.unsubscribe(this),(n||t)&&s.subscribe(this)}updateViews(t){const i=this.childContext,s=this.views,n=this.bindView,o=this.items,r=this.template,a=this.options.recycle,l=[];let c=0,u=0;for(let d=0,p=t.length;d<p;++d){const b=t[d],$=b.removed;let x=0,k=b.index;const F=k+b.addedCount,M=s.splice(b.index,$.length),se=u=l.length+M.length;for(;k<F;++k){const j=s[k],pe=j?j.firstChild:this.location;let Fe;a&&u>0?(x<=se&&M.length>0?(Fe=M[x],x++):(Fe=l[c],c++),u--):Fe=r.create(),s.splice(k,0,Fe),n(Fe,o,k,i),Fe.insertBefore(pe)}M[x]&&l.push(...M.slice(x))}for(let d=c,p=l.length;d<p;++d)l[d].dispose();if(this.options.positioning)for(let d=0,p=s.length;d<p;++d){const b=s[d].context;b.length=p,b.index=d}}refreshAllViews(t=!1){const i=this.items,s=this.childContext,n=this.template,o=this.location,r=this.bindView;let a=i.length,l=this.views,c=l.length;if((a===0||t||!this.options.recycle)&&(Dp.disposeContiguousBatch(l),c=0),c===0){this.views=l=new Array(a);for(let u=0;u<a;++u){const d=n.create();r(d,i,u,s),l[u]=d,d.insertBefore(o)}}else{let u=0;for(;u<a;++u)if(u<c){const p=l[u];r(p,i,u,s)}else{const p=n.create();r(p,i,u,s),l.push(p),p.insertBefore(o)}const d=l.splice(u,c-u);for(u=0,a=d.length;u<a;++u)d[u].dispose()}}unbindAllViews(){const t=this.views;for(let i=0,s=t.length;i<s;++i)t[i].unbind()}}class Wu extends rl{constructor(t,i,s){super(),this.itemsBinding=t,this.templateBinding=i,this.options=s,this.createPlaceholder=ce.createBlockPlaceholder,My(),this.isItemsBindingVolatile=le.isVolatileBinding(t),this.isTemplateBindingVolatile=le.isVolatileBinding(i)}createBehavior(t){return new By(t,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}function ao(e,t,i=Th){const s=typeof t=="function"?t:()=>t;return new Wu(e,s,Object.assign(Object.assign({},Th),i))}function _s(e){return e?function(t,i,s){return t.nodeType===1&&t.matches(e)}:function(t,i,s){return t.nodeType===1}}class Np{constructor(t,i){this.target=t,this.options=i,this.source=null}bind(t){const i=this.options.property;this.shouldUpdate=le.getAccessors(t).some(s=>s.name===i),this.source=t,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(Sn),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let t=this.getNodes();return this.options.filter!==void 0&&(t=t.filter(this.options.filter)),t}updateTarget(t){this.source[this.options.property]=t}}class jy extends Np{constructor(t,i){super(t,i)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function tt(e){return typeof e=="string"&&(e={property:e}),new Nu("fast-slotted",jy,e)}class Yy extends Np{constructor(t,i){super(t,i),this.observer=null,i.childList=!0}observe(){this.observer===null&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function cl(e){return typeof e=="string"&&(e={property:e}),new Nu("fast-children",Yy,e)}class ni{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const Zt=(e,t)=>P`
    <span
        part="end"
        ${Ee("endContainer")}
        class=${i=>t.end?"end":void 0}
    >
        <slot name="end" ${Ee("end")} @slotchange="${i=>i.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,Xt=(e,t)=>P`
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
`,Uy=P`
    <span part="end" ${Ee("endContainer")}>
        <slot
            name="end"
            ${Ee("end")}
            @slotchange="${e=>e.handleEndContentChange()}"
        ></slot>
    </span>
`,Wy=P`
    <span part="start" ${Ee("startContainer")}>
        <slot
            name="start"
            ${Ee("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        ></slot>
    </span>
`,Gy=(e,t)=>P`
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
            ${Xt(e,t)}
            ${Zt(e,t)}
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
***************************************************************************** */function h(e,t,i,s){var n=arguments.length,o=n<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,i):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o}const Sc=new Map;"metadata"in Reflect||(Reflect.metadata=function(e,t){return function(i){Reflect.defineMetadata(e,t,i)}},Reflect.defineMetadata=function(e,t,i){let s=Sc.get(i);s===void 0&&Sc.set(i,s=new Map),s.set(e,t)},Reflect.getOwnMetadata=function(e,t){const i=Sc.get(t);if(i!==void 0)return i.get(e)});class qy{constructor(t,i){this.container=t,this.key=i}instance(t){return this.registerResolver(0,t)}singleton(t){return this.registerResolver(1,t)}transient(t){return this.registerResolver(2,t)}callback(t){return this.registerResolver(3,t)}cachedCallback(t){return this.registerResolver(3,Bp(t))}aliasTo(t){return this.registerResolver(5,t)}registerResolver(t,i){const{container:s,key:n}=this;return this.container=this.key=void 0,s.registerResolver(n,new ki(n,t,i))}}function Wo(e){const t=e.slice(),i=Object.keys(e),s=i.length;let n;for(let o=0;o<s;++o)n=i[o],jp(n)||(t[n]=e[n]);return t}const Zy=Object.freeze({none(e){throw Error(`${e.toString()} not registered, did you forget to add @singleton()?`)},singleton(e){return new ki(e,1,e)},transient(e){return new ki(e,2,e)}}),Cc=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:Zy.singleton})}),Fh=new Map;function Dh(e){return t=>Reflect.getOwnMetadata(e,t)}let Rh=null;const ut=Object.freeze({createContainer(e){return new ar(null,Object.assign({},Cc.default,e))},findResponsibleContainer(e){const t=e.$$container$$;return t&&t.responsibleForOwnerRequests?t:ut.findParentContainer(e)},findParentContainer(e){const t=new CustomEvent(zp,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return e.dispatchEvent(t),t.detail.container||ut.getOrCreateDOMContainer()},getOrCreateDOMContainer(e,t){return e?e.$$container$$||new ar(e,Object.assign({},Cc.default,t,{parentLocator:ut.findParentContainer})):Rh||(Rh=new ar(null,Object.assign({},Cc.default,t,{parentLocator:()=>null})))},getDesignParamtypes:Dh("design:paramtypes"),getAnnotationParamtypes:Dh("di:paramtypes"),getOrCreateAnnotationParamTypes(e){let t=this.getAnnotationParamtypes(e);return t===void 0&&Reflect.defineMetadata("di:paramtypes",t=[],e),t},getDependencies(e){let t=Fh.get(e);if(t===void 0){const i=e.inject;if(i===void 0){const s=ut.getDesignParamtypes(e),n=ut.getAnnotationParamtypes(e);if(s===void 0)if(n===void 0){const o=Object.getPrototypeOf(e);typeof o=="function"&&o!==Function.prototype?t=Wo(ut.getDependencies(o)):t=[]}else t=Wo(n);else if(n===void 0)t=Wo(s);else{t=Wo(s);let o=n.length,r;for(let c=0;c<o;++c)r=n[c],r!==void 0&&(t[c]=r);const a=Object.keys(n);o=a.length;let l;for(let c=0;c<o;++c)l=a[c],jp(l)||(t[l]=n[l])}}else t=Wo(i);Fh.set(e,t)}return t},defineProperty(e,t,i,s=!1){const n=`$di_${t}`;Reflect.defineProperty(e,t,{get:function(){let o=this[n];if(o===void 0&&(o=(this instanceof HTMLElement?ut.findResponsibleContainer(this):ut.getOrCreateDOMContainer()).get(i),this[n]=o,s&&this instanceof ll)){const a=this.$fastController,l=()=>{const u=ut.findResponsibleContainer(this).get(i),d=this[n];u!==d&&(this[n]=o,a.notify(t))};a.subscribe({handleChange:l},"isConnected")}return o}})},createInterface(e,t){const i=typeof e=="function"?e:t,s=typeof e=="string"?e:e&&"friendlyName"in e&&e.friendlyName||Lh,n=typeof e=="string"?!1:e&&"respectConnection"in e&&e.respectConnection||!1,o=function(r,a,l){if(r==null||new.target!==void 0)throw new Error(`No registration for interface: '${o.friendlyName}'`);if(a)ut.defineProperty(r,a,o,n);else{const c=ut.getOrCreateAnnotationParamTypes(r);c[l]=o}};return o.$isInterface=!0,o.friendlyName=s??"(anonymous)",i!=null&&(o.register=function(r,a){return i(new qy(r,a??o))}),o.toString=function(){return`InterfaceSymbol<${o.friendlyName}>`},o},inject(...e){return function(t,i,s){if(typeof s=="number"){const n=ut.getOrCreateAnnotationParamTypes(t),o=e[0];o!==void 0&&(n[s]=o)}else if(i)ut.defineProperty(t,i,e[0]);else{const n=s?ut.getOrCreateAnnotationParamTypes(s.value):ut.getOrCreateAnnotationParamTypes(t);let o;for(let r=0;r<e.length;++r)o=e[r],o!==void 0&&(n[r]=o)}}},transient(e){return e.register=function(i){return yr.transient(e,e).register(i)},e.registerInRequestor=!1,e},singleton(e,t=Qy){return e.register=function(s){return yr.singleton(e,e).register(s)},e.registerInRequestor=t.scoped,e}}),Xy=ut.createInterface("Container");ut.inject;const Qy={scoped:!1};class ki{constructor(t,i,s){this.key=t,this.strategy=i,this.state=s,this.resolving=!1}get $isResolver(){return!0}register(t){return t.registerResolver(this.key,this)}resolve(t,i){switch(this.strategy){case 0:return this.state;case 1:{if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=t.getFactory(this.state).construct(i),this.strategy=0,this.resolving=!1,this.state}case 2:{const s=t.getFactory(this.state);if(s===null)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return s.construct(i)}case 3:return this.state(t,i,this);case 4:return this.state[0].resolve(t,i);case 5:return i.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(t){var i,s,n;switch(this.strategy){case 1:case 2:return t.getFactory(this.state);case 5:return(n=(s=(i=t.getResolver(this.state))===null||i===void 0?void 0:i.getFactory)===null||s===void 0?void 0:s.call(i,t))!==null&&n!==void 0?n:null;default:return null}}}function Eh(e){return this.get(e)}function Jy(e,t){return t(e)}class Ky{constructor(t,i){this.Type=t,this.dependencies=i,this.transformers=null}construct(t,i){let s;return i===void 0?s=new this.Type(...this.dependencies.map(Eh,t)):s=new this.Type(...this.dependencies.map(Eh,t),...i),this.transformers==null?s:this.transformers.reduce(Jy,s)}registerTransformer(t){(this.transformers||(this.transformers=[])).push(t)}}const e0={$isResolver:!0,resolve(e,t){return t}};function Ta(e){return typeof e.register=="function"}function t0(e){return Ta(e)&&typeof e.registerInRequestor=="boolean"}function Oh(e){return t0(e)&&e.registerInRequestor}function i0(e){return e.prototype!==void 0}const s0=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),zp="__DI_LOCATE_PARENT__",Ic=new Map;class ar{constructor(t,i){this.owner=t,this.config=i,this._parent=void 0,this.registerDepth=0,this.context=null,t!==null&&(t.$$container$$=this),this.resolvers=new Map,this.resolvers.set(Xy,e0),t instanceof Node&&t.addEventListener(zp,s=>{s.composedPath()[0]!==this.owner&&(s.detail.container=this,s.stopImmediatePropagation())})}get parent(){return this._parent===void 0&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return this.parent===null?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(t,...i){return this.context=t,this.register(...i),this.context=null,this}register(...t){if(++this.registerDepth===100)throw new Error("Unable to autoregister dependency");let i,s,n,o,r;const a=this.context;for(let l=0,c=t.length;l<c;++l)if(i=t[l],!!Ah(i))if(Ta(i))i.register(this,a);else if(i0(i))yr.singleton(i,i).register(this);else for(s=Object.keys(i),o=0,r=s.length;o<r;++o)n=i[s[o]],Ah(n)&&(Ta(n)?n.register(this,a):this.register(n));return--this.registerDepth,this}registerResolver(t,i){ia(t);const s=this.resolvers,n=s.get(t);return n==null?s.set(t,i):n instanceof ki&&n.strategy===4?n.state.push(i):s.set(t,new ki(t,4,[n,i])),i}registerTransformer(t,i){const s=this.getResolver(t);if(s==null)return!1;if(s.getFactory){const n=s.getFactory(this);return n==null?!1:(n.registerTransformer(i),!0)}return!1}getResolver(t,i=!0){if(ia(t),t.resolve!==void 0)return t;let s=this,n;for(;s!=null;)if(n=s.resolvers.get(t),n==null){if(s.parent==null){const o=Oh(t)?this:s;return i?this.jitRegister(t,o):null}s=s.parent}else return n;return null}has(t,i=!1){return this.resolvers.has(t)?!0:i&&this.parent!=null?this.parent.has(t,!0):!1}get(t){if(ia(t),t.$isResolver)return t.resolve(this,this);let i=this,s;for(;i!=null;)if(s=i.resolvers.get(t),s==null){if(i.parent==null){const n=Oh(t)?this:i;return s=this.jitRegister(t,n),s.resolve(i,this)}i=i.parent}else return s.resolve(i,this);throw new Error(`Unable to resolve key: ${t}`)}getAll(t,i=!1){ia(t);const s=this;let n=s,o;if(i){let r=Sn;for(;n!=null;)o=n.resolvers.get(t),o!=null&&(r=r.concat(Ph(o,n,s))),n=n.parent;return r}else for(;n!=null;)if(o=n.resolvers.get(t),o==null){if(n=n.parent,n==null)return Sn}else return Ph(o,n,s);return Sn}getFactory(t){let i=Ic.get(t);if(i===void 0){if(n0(t))throw new Error(`${t.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);Ic.set(t,i=new Ky(t,ut.getDependencies(t)))}return i}registerFactory(t,i){Ic.set(t,i)}createChild(t){return new ar(null,Object.assign({},this.config,t,{parentLocator:()=>this}))}jitRegister(t,i){if(typeof t!="function")throw new Error(`Attempted to jitRegister something that is not a constructor: '${t}'. Did you forget to register this dependency?`);if(s0.has(t.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${t.name}. Did you forget to add @inject(Key)`);if(Ta(t)){const s=t.register(i);if(!(s instanceof Object)||s.resolve==null){const n=i.resolvers.get(t);if(n!=null)return n;throw new Error("A valid resolver was not returned from the static register method")}return s}else{if(t.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${t.friendlyName}`);{const s=this.config.defaultResolver(t,i);return i.resolvers.set(t,s),s}}}}const Tc=new WeakMap;function Bp(e){return function(t,i,s){if(Tc.has(s))return Tc.get(s);const n=e(t,i,s);return Tc.set(s,n),n}}const yr=Object.freeze({instance(e,t){return new ki(e,0,t)},singleton(e,t){return new ki(e,1,t)},transient(e,t){return new ki(e,2,t)},callback(e,t){return new ki(e,3,t)},cachedCallback(e,t){return new ki(e,3,Bp(t))},aliasTo(e,t){return new ki(t,5,e)}});function ia(e){if(e==null)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function Ph(e,t,i){if(e instanceof ki&&e.strategy===4){const s=e.state;let n=s.length;const o=new Array(n);for(;n--;)o[n]=s[n].resolve(t,i);return o}return[e.resolve(t,i)]}const Lh="(anonymous)";function Ah(e){return typeof e=="object"&&e!==null||typeof e=="function"}const n0=function(){const e=new WeakMap;let t=!1,i="",s=0;return function(n){return t=e.get(n),t===void 0&&(i=n.toString(),s=i.length,t=s>=29&&s<=100&&i.charCodeAt(s-1)===125&&i.charCodeAt(s-2)<=32&&i.charCodeAt(s-3)===93&&i.charCodeAt(s-4)===101&&i.charCodeAt(s-5)===100&&i.charCodeAt(s-6)===111&&i.charCodeAt(s-7)===99&&i.charCodeAt(s-8)===32&&i.charCodeAt(s-9)===101&&i.charCodeAt(s-10)===118&&i.charCodeAt(s-11)===105&&i.charCodeAt(s-12)===116&&i.charCodeAt(s-13)===97&&i.charCodeAt(s-14)===110&&i.charCodeAt(s-15)===88,e.set(n,t)),t}}(),sa={};function jp(e){switch(typeof e){case"number":return e>=0&&(e|0)===e;case"string":{const t=sa[e];if(t!==void 0)return t;const i=e.length;if(i===0)return sa[e]=!1;let s=0;for(let n=0;n<i;++n)if(s=e.charCodeAt(n),n===0&&s===48&&i>1||s<48||s>57)return sa[e]=!1;return sa[e]=!0}default:return!1}}function Mh(e){return`${e.toLowerCase()}:presentation`}const na=new Map,Yp=Object.freeze({define(e,t,i){const s=Mh(e);na.get(s)===void 0?na.set(s,t):na.set(s,!1),i.register(yr.instance(s,t))},forTag(e,t){const i=Mh(e),s=na.get(i);return s===!1?ut.findResponsibleContainer(t).get(i):s||null}});class o0{constructor(t,i){this.template=t||null,this.styles=i===void 0?null:Array.isArray(i)?qt.create(i):i instanceof qt?i:qt.create([i])}applyTo(t){const i=t.$fastController;i.template===null&&(i.template=this.template),i.styles===null&&(i.styles=this.styles)}}class de extends ll{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return this._presentation===void 0&&(this._presentation=Yp.forTag(this.tagName,this)),this._presentation}templateChanged(){this.template!==void 0&&(this.$fastController.template=this.template)}stylesChanged(){this.styles!==void 0&&(this.$fastController.styles=this.styles)}connectedCallback(){this.$presentation!==null&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(t){return(i={})=>new r0(this===de?class extends de{}:this,t,i)}}h([_],de.prototype,"template",void 0);h([_],de.prototype,"styles",void 0);function Go(e,t,i){return typeof e=="function"?e(t,i):e}class r0{constructor(t,i,s){this.type=t,this.elementDefinition=i,this.overrideDefinition=s,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(t,i){const s=this.definition,n=this.overrideDefinition,r=`${s.prefix||i.elementPrefix}-${s.baseName}`;i.tryDefineElement({name:r,type:this.type,baseClass:this.elementDefinition.baseClass,callback:a=>{const l=new o0(Go(s.template,a,s),Go(s.styles,a,s));a.definePresentation(l);let c=Go(s.shadowOptions,a,s);a.shadowRootMode&&(c?n.shadowOptions||(c.mode=a.shadowRootMode):c!==null&&(c={mode:a.shadowRootMode})),a.defineElement({elementOptions:Go(s.elementOptions,a,s),shadowOptions:c,attributes:Go(s.attributes,a,s)})}})}}function st(e,...t){const i=Ha.locate(e);t.forEach(s=>{Object.getOwnPropertyNames(s.prototype).forEach(o=>{o!=="constructor"&&Object.defineProperty(e.prototype,o,Object.getOwnPropertyDescriptor(s.prototype,o))}),Ha.locate(s).forEach(o=>i.push(o))})}class Dn extends de{constructor(){super(...arguments),this.headinglevel=2,this.expanded=!1,this.clickHandler=t=>{this.expanded=!this.expanded,this.change()},this.change=()=>{this.$emit("change")}}}h([f({attribute:"heading-level",mode:"fromView",converter:q})],Dn.prototype,"headinglevel",void 0);h([f({mode:"boolean"})],Dn.prototype,"expanded",void 0);h([f],Dn.prototype,"id",void 0);st(Dn,ni);const a0=(e,t)=>P`
    <template>
        <slot ${tt({property:"accordionItems",filter:_s()})}></slot>
        <slot name="item" part="item" ${tt("accordionItems")}></slot>
    </template>
`,gt={horizontal:"horizontal",vertical:"vertical"};function l0(e,t){let i=e.length;for(;i--;)if(t(e[i],i,e))return i;return-1}function c0(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function wo(...e){return e.every(t=>t instanceof HTMLElement)}function u0(e,t){return!e||!t||!wo(e)?void 0:Array.from(e.querySelectorAll(t)).filter(s=>s.offsetParent!==null)}function d0(){const e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}let pn;function h0(){if(typeof pn=="boolean")return pn;if(!c0())return pn=!1,pn;const e=document.createElement("style"),t=d0();t!==null&&e.setAttribute("nonce",t),document.head.appendChild(e);try{e.sheet.insertRule("foo:focus-visible {color:inherit}",0),pn=!0}catch{pn=!1}finally{document.head.removeChild(e)}return pn}const Vh="focus",Hh="focusin",$o="focusout",ko="keydown",Nh="resize",zh="scroll";var Bh;(function(e){e[e.alt=18]="alt",e[e.arrowDown=40]="arrowDown",e[e.arrowLeft=37]="arrowLeft",e[e.arrowRight=39]="arrowRight",e[e.arrowUp=38]="arrowUp",e[e.back=8]="back",e[e.backSlash=220]="backSlash",e[e.break=19]="break",e[e.capsLock=20]="capsLock",e[e.closeBracket=221]="closeBracket",e[e.colon=186]="colon",e[e.colon2=59]="colon2",e[e.comma=188]="comma",e[e.ctrl=17]="ctrl",e[e.delete=46]="delete",e[e.end=35]="end",e[e.enter=13]="enter",e[e.equals=187]="equals",e[e.equals2=61]="equals2",e[e.equals3=107]="equals3",e[e.escape=27]="escape",e[e.forwardSlash=191]="forwardSlash",e[e.function1=112]="function1",e[e.function10=121]="function10",e[e.function11=122]="function11",e[e.function12=123]="function12",e[e.function2=113]="function2",e[e.function3=114]="function3",e[e.function4=115]="function4",e[e.function5=116]="function5",e[e.function6=117]="function6",e[e.function7=118]="function7",e[e.function8=119]="function8",e[e.function9=120]="function9",e[e.home=36]="home",e[e.insert=45]="insert",e[e.menu=93]="menu",e[e.minus=189]="minus",e[e.minus2=109]="minus2",e[e.numLock=144]="numLock",e[e.numPad0=96]="numPad0",e[e.numPad1=97]="numPad1",e[e.numPad2=98]="numPad2",e[e.numPad3=99]="numPad3",e[e.numPad4=100]="numPad4",e[e.numPad5=101]="numPad5",e[e.numPad6=102]="numPad6",e[e.numPad7=103]="numPad7",e[e.numPad8=104]="numPad8",e[e.numPad9=105]="numPad9",e[e.numPadDivide=111]="numPadDivide",e[e.numPadDot=110]="numPadDot",e[e.numPadMinus=109]="numPadMinus",e[e.numPadMultiply=106]="numPadMultiply",e[e.numPadPlus=107]="numPadPlus",e[e.openBracket=219]="openBracket",e[e.pageDown=34]="pageDown",e[e.pageUp=33]="pageUp",e[e.period=190]="period",e[e.print=44]="print",e[e.quote=222]="quote",e[e.scrollLock=145]="scrollLock",e[e.shift=16]="shift",e[e.space=32]="space",e[e.tab=9]="tab",e[e.tilde=192]="tilde",e[e.windowsLeft=91]="windowsLeft",e[e.windowsOpera=219]="windowsOpera",e[e.windowsRight=92]="windowsRight"})(Bh||(Bh={}));const Ti="ArrowDown",tn="ArrowLeft",sn="ArrowRight",Fi="ArrowUp",Ts="Enter",Oo="Escape",ls="Home",cs="End",f0="F2",p0="PageDown",g0="PageUp",An=" ",ul="Tab",so={ArrowDown:Ti,ArrowLeft:tn,ArrowRight:sn,ArrowUp:Fi};var Xe;(function(e){e.ltr="ltr",e.rtl="rtl"})(Xe||(Xe={}));function m0(e,t,i){return i<e?t:i>t?e:i}function dl(e,t,i){return Math.min(Math.max(i,e),t)}function oa(e,t,i=0){return[t,i]=[t,i].sort((s,n)=>s-n),t<=e&&e<i}let v0=0;function xr(e=""){return`${e}${v0++}`}var m;(function(e){e.Canvas="Canvas",e.CanvasText="CanvasText",e.LinkText="LinkText",e.VisitedText="VisitedText",e.ActiveText="ActiveText",e.ButtonFace="ButtonFace",e.ButtonText="ButtonText",e.Field="Field",e.FieldText="FieldText",e.Highlight="Highlight",e.HighlightText="HighlightText",e.GrayText="GrayText"})(m||(m={}));const jh={single:"single",multi:"multi"};class Gu extends de{constructor(){super(...arguments),this.expandmode=jh.multi,this.activeItemIndex=0,this.change=()=>{this.$emit("change",this.activeid)},this.setItems=()=>{var t;this.accordionItems.length!==0&&(this.accordionIds=this.getItemIds(),this.accordionItems.forEach((i,s)=>{i instanceof Dn&&(i.addEventListener("change",this.activeItemChange),this.isSingleExpandMode()&&(this.activeItemIndex!==s?i.expanded=!1:i.expanded=!0));const n=this.accordionIds[s];i.setAttribute("id",typeof n!="string"?`accordion-${s+1}`:n),this.activeid=this.accordionIds[this.activeItemIndex],i.addEventListener("keydown",this.handleItemKeyDown),i.addEventListener("focus",this.handleItemFocus)}),this.isSingleExpandMode()&&((t=this.findExpandedItem())!==null&&t!==void 0?t:this.accordionItems[0]).setAttribute("aria-disabled","true"))},this.removeItemListeners=t=>{t.forEach((i,s)=>{i.removeEventListener("change",this.activeItemChange),i.removeEventListener("keydown",this.handleItemKeyDown),i.removeEventListener("focus",this.handleItemFocus)})},this.activeItemChange=t=>{if(t.defaultPrevented||t.target!==t.currentTarget)return;t.preventDefault();const i=t.target;this.activeid=i.getAttribute("id"),this.isSingleExpandMode()&&(this.resetItems(),i.expanded=!0,i.setAttribute("aria-disabled","true"),this.accordionItems.forEach(s=>{!s.hasAttribute("disabled")&&s.id!==this.activeid&&s.removeAttribute("aria-disabled")})),this.activeItemIndex=Array.from(this.accordionItems).indexOf(i),this.change()},this.handleItemKeyDown=t=>{if(t.target===t.currentTarget)switch(this.accordionIds=this.getItemIds(),t.key){case Fi:t.preventDefault(),this.adjust(-1);break;case Ti:t.preventDefault(),this.adjust(1);break;case ls:this.activeItemIndex=0,this.focusItem();break;case cs:this.activeItemIndex=this.accordionItems.length-1,this.focusItem();break}},this.handleItemFocus=t=>{if(t.target===t.currentTarget){const i=t.target,s=this.activeItemIndex=Array.from(this.accordionItems).indexOf(i);this.activeItemIndex!==s&&s!==-1&&(this.activeItemIndex=s,this.activeid=this.accordionIds[this.activeItemIndex])}}}accordionItemsChanged(t,i){this.$fastController.isConnected&&(this.removeItemListeners(t),this.setItems())}findExpandedItem(){for(let t=0;t<this.accordionItems.length;t++)if(this.accordionItems[t].getAttribute("expanded")==="true")return this.accordionItems[t];return null}resetItems(){this.accordionItems.forEach((t,i)=>{t.expanded=!1})}getItemIds(){return this.accordionItems.map(t=>t.getAttribute("id"))}isSingleExpandMode(){return this.expandmode===jh.single}adjust(t){this.activeItemIndex=m0(0,this.accordionItems.length-1,this.activeItemIndex+t),this.focusItem()}focusItem(){const t=this.accordionItems[this.activeItemIndex];t instanceof Dn&&t.expandbutton.focus()}}h([f({attribute:"expand-mode"})],Gu.prototype,"expandmode",void 0);h([_],Gu.prototype,"accordionItems",void 0);const Up=(e,t)=>P`
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
        ${Xt(e,t)}
        <span class="content" part="content">
            <slot ${tt("defaultSlottedContent")}></slot>
        </span>
        ${Zt(e,t)}
    </a>
`;class Je{}h([f({attribute:"aria-atomic"})],Je.prototype,"ariaAtomic",void 0);h([f({attribute:"aria-busy"})],Je.prototype,"ariaBusy",void 0);h([f({attribute:"aria-controls"})],Je.prototype,"ariaControls",void 0);h([f({attribute:"aria-current"})],Je.prototype,"ariaCurrent",void 0);h([f({attribute:"aria-describedby"})],Je.prototype,"ariaDescribedby",void 0);h([f({attribute:"aria-details"})],Je.prototype,"ariaDetails",void 0);h([f({attribute:"aria-disabled"})],Je.prototype,"ariaDisabled",void 0);h([f({attribute:"aria-errormessage"})],Je.prototype,"ariaErrormessage",void 0);h([f({attribute:"aria-flowto"})],Je.prototype,"ariaFlowto",void 0);h([f({attribute:"aria-haspopup"})],Je.prototype,"ariaHaspopup",void 0);h([f({attribute:"aria-hidden"})],Je.prototype,"ariaHidden",void 0);h([f({attribute:"aria-invalid"})],Je.prototype,"ariaInvalid",void 0);h([f({attribute:"aria-keyshortcuts"})],Je.prototype,"ariaKeyshortcuts",void 0);h([f({attribute:"aria-label"})],Je.prototype,"ariaLabel",void 0);h([f({attribute:"aria-labelledby"})],Je.prototype,"ariaLabelledby",void 0);h([f({attribute:"aria-live"})],Je.prototype,"ariaLive",void 0);h([f({attribute:"aria-owns"})],Je.prototype,"ariaOwns",void 0);h([f({attribute:"aria-relevant"})],Je.prototype,"ariaRelevant",void 0);h([f({attribute:"aria-roledescription"})],Je.prototype,"ariaRoledescription",void 0);let gi=class extends de{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((t=this.$fastController.definition.shadowOptions)===null||t===void 0)&&t.delegatesFocus)&&(this.focus=()=>{var i;(i=this.control)===null||i===void 0||i.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}};h([f],gi.prototype,"download",void 0);h([f],gi.prototype,"href",void 0);h([f],gi.prototype,"hreflang",void 0);h([f],gi.prototype,"ping",void 0);h([f],gi.prototype,"referrerpolicy",void 0);h([f],gi.prototype,"rel",void 0);h([f],gi.prototype,"target",void 0);h([f],gi.prototype,"type",void 0);h([_],gi.prototype,"defaultSlottedContent",void 0);class hl{}h([f({attribute:"aria-expanded"})],hl.prototype,"ariaExpanded",void 0);st(hl,Je);st(gi,ni,hl);const b0=(e,t)=>P`
    <template class="${i=>i.initialLayoutComplete?"loaded":""}">
        ${dt(i=>i.initialLayoutComplete,P`
                <slot></slot>
            `)}
    </template>
`,Rn=e=>{const t=e.closest("[dir]");return t!==null&&t.dir==="rtl"?Xe.rtl:Xe.ltr};class y0{constructor(){this.intersectionDetector=null,this.observedElements=new Map,this.requestPosition=(t,i)=>{var s;if(this.intersectionDetector!==null){if(this.observedElements.has(t)){(s=this.observedElements.get(t))===null||s===void 0||s.push(i);return}this.observedElements.set(t,[i]),this.intersectionDetector.observe(t)}},this.cancelRequestPosition=(t,i)=>{const s=this.observedElements.get(t);if(s!==void 0){const n=s.indexOf(i);n!==-1&&s.splice(n,1)}},this.initializeIntersectionDetector=()=>{ks.IntersectionObserver&&(this.intersectionDetector=new IntersectionObserver(this.handleIntersection,{root:null,rootMargin:"0px",threshold:[0,1]}))},this.handleIntersection=t=>{if(this.intersectionDetector===null)return;const i=[],s=[];t.forEach(n=>{var o;(o=this.intersectionDetector)===null||o===void 0||o.unobserve(n.target);const r=this.observedElements.get(n.target);r!==void 0&&(r.forEach(a=>{let l=i.indexOf(a);l===-1&&(l=i.length,i.push(a),s.push([])),s[l].push(n)}),this.observedElements.delete(n.target))}),i.forEach((n,o)=>{n(s[o])})},this.initializeIntersectionDetector()}}class re extends de{constructor(){super(...arguments),this.anchor="",this.viewport="",this.horizontalPositioningMode="uncontrolled",this.horizontalDefaultPosition="unset",this.horizontalViewportLock=!1,this.horizontalInset=!1,this.horizontalScaling="content",this.verticalPositioningMode="uncontrolled",this.verticalDefaultPosition="unset",this.verticalViewportLock=!1,this.verticalInset=!1,this.verticalScaling="content",this.fixedPlacement=!1,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.initialLayoutComplete=!1,this.resizeDetector=null,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.pendingPositioningUpdate=!1,this.pendingReset=!1,this.currentDirection=Xe.ltr,this.regionVisible=!1,this.forceUpdate=!1,this.updateThreshold=.5,this.update=()=>{this.pendingPositioningUpdate||this.requestPositionUpdates()},this.startObservers=()=>{this.stopObservers(),this.anchorElement!==null&&(this.requestPositionUpdates(),this.resizeDetector!==null&&(this.resizeDetector.observe(this.anchorElement),this.resizeDetector.observe(this)))},this.requestPositionUpdates=()=>{this.anchorElement===null||this.pendingPositioningUpdate||(re.intersectionService.requestPosition(this,this.handleIntersection),re.intersectionService.requestPosition(this.anchorElement,this.handleIntersection),this.viewportElement!==null&&re.intersectionService.requestPosition(this.viewportElement,this.handleIntersection),this.pendingPositioningUpdate=!0)},this.stopObservers=()=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,re.intersectionService.cancelRequestPosition(this,this.handleIntersection),this.anchorElement!==null&&re.intersectionService.cancelRequestPosition(this.anchorElement,this.handleIntersection),this.viewportElement!==null&&re.intersectionService.cancelRequestPosition(this.viewportElement,this.handleIntersection)),this.resizeDetector!==null&&this.resizeDetector.disconnect()},this.getViewport=()=>typeof this.viewport!="string"||this.viewport===""?document.documentElement:document.getElementById(this.viewport),this.getAnchor=()=>document.getElementById(this.anchor),this.handleIntersection=t=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,this.applyIntersectionEntries(t)&&this.updateLayout())},this.applyIntersectionEntries=t=>{const i=t.find(o=>o.target===this),s=t.find(o=>o.target===this.anchorElement),n=t.find(o=>o.target===this.viewportElement);return i===void 0||n===void 0||s===void 0?!1:!this.regionVisible||this.forceUpdate||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0||this.isRectDifferent(this.anchorRect,s.boundingClientRect)||this.isRectDifferent(this.viewportRect,n.boundingClientRect)||this.isRectDifferent(this.regionRect,i.boundingClientRect)?(this.regionRect=i.boundingClientRect,this.anchorRect=s.boundingClientRect,this.viewportElement===document.documentElement?this.viewportRect=new DOMRectReadOnly(n.boundingClientRect.x+document.documentElement.scrollLeft,n.boundingClientRect.y+document.documentElement.scrollTop,n.boundingClientRect.width,n.boundingClientRect.height):this.viewportRect=n.boundingClientRect,this.updateRegionOffset(),this.forceUpdate=!1,!0):!1},this.updateRegionOffset=()=>{this.anchorRect&&this.regionRect&&(this.baseHorizontalOffset=this.baseHorizontalOffset+(this.anchorRect.left-this.regionRect.left)+(this.translateX-this.baseHorizontalOffset),this.baseVerticalOffset=this.baseVerticalOffset+(this.anchorRect.top-this.regionRect.top)+(this.translateY-this.baseVerticalOffset))},this.isRectDifferent=(t,i)=>Math.abs(t.top-i.top)>this.updateThreshold||Math.abs(t.right-i.right)>this.updateThreshold||Math.abs(t.bottom-i.bottom)>this.updateThreshold||Math.abs(t.left-i.left)>this.updateThreshold,this.handleResize=t=>{this.update()},this.reset=()=>{this.pendingReset&&(this.pendingReset=!1,this.anchorElement===null&&(this.anchorElement=this.getAnchor()),this.viewportElement===null&&(this.viewportElement=this.getViewport()),this.currentDirection=Rn(this),this.startObservers())},this.updateLayout=()=>{let t,i;if(this.horizontalPositioningMode!=="uncontrolled"){const o=this.getPositioningOptions(this.horizontalInset);if(this.horizontalDefaultPosition==="center")i="center";else if(this.horizontalDefaultPosition!=="unset"){let p=this.horizontalDefaultPosition;if(p==="start"||p==="end"){const b=Rn(this);if(b!==this.currentDirection){this.currentDirection=b,this.initialize();return}this.currentDirection===Xe.ltr?p=p==="start"?"left":"right":p=p==="start"?"right":"left"}switch(p){case"left":i=this.horizontalInset?"insetStart":"start";break;case"right":i=this.horizontalInset?"insetEnd":"end";break}}const r=this.horizontalThreshold!==void 0?this.horizontalThreshold:this.regionRect!==void 0?this.regionRect.width:0,a=this.anchorRect!==void 0?this.anchorRect.left:0,l=this.anchorRect!==void 0?this.anchorRect.right:0,c=this.anchorRect!==void 0?this.anchorRect.width:0,u=this.viewportRect!==void 0?this.viewportRect.left:0,d=this.viewportRect!==void 0?this.viewportRect.right:0;(i===void 0||this.horizontalPositioningMode!=="locktodefault"&&this.getAvailableSpace(i,a,l,c,u,d)<r)&&(i=this.getAvailableSpace(o[0],a,l,c,u,d)>this.getAvailableSpace(o[1],a,l,c,u,d)?o[0]:o[1])}if(this.verticalPositioningMode!=="uncontrolled"){const o=this.getPositioningOptions(this.verticalInset);if(this.verticalDefaultPosition==="center")t="center";else if(this.verticalDefaultPosition!=="unset")switch(this.verticalDefaultPosition){case"top":t=this.verticalInset?"insetStart":"start";break;case"bottom":t=this.verticalInset?"insetEnd":"end";break}const r=this.verticalThreshold!==void 0?this.verticalThreshold:this.regionRect!==void 0?this.regionRect.height:0,a=this.anchorRect!==void 0?this.anchorRect.top:0,l=this.anchorRect!==void 0?this.anchorRect.bottom:0,c=this.anchorRect!==void 0?this.anchorRect.height:0,u=this.viewportRect!==void 0?this.viewportRect.top:0,d=this.viewportRect!==void 0?this.viewportRect.bottom:0;(t===void 0||this.verticalPositioningMode!=="locktodefault"&&this.getAvailableSpace(t,a,l,c,u,d)<r)&&(t=this.getAvailableSpace(o[0],a,l,c,u,d)>this.getAvailableSpace(o[1],a,l,c,u,d)?o[0]:o[1])}const s=this.getNextRegionDimension(i,t),n=this.horizontalPosition!==i||this.verticalPosition!==t;if(this.setHorizontalPosition(i,s),this.setVerticalPosition(t,s),this.updateRegionStyle(),!this.initialLayoutComplete){this.initialLayoutComplete=!0,this.requestPositionUpdates();return}this.regionVisible||(this.regionVisible=!0,this.style.removeProperty("pointer-events"),this.style.removeProperty("opacity"),this.classList.toggle("loaded",!0),this.$emit("loaded",this,{bubbles:!1})),this.updatePositionClasses(),n&&this.$emit("positionchange",this,{bubbles:!1})},this.updateRegionStyle=()=>{this.style.width=this.regionWidth,this.style.height=this.regionHeight,this.style.transform=`translate(${this.translateX}px, ${this.translateY}px)`},this.updatePositionClasses=()=>{this.classList.toggle("top",this.verticalPosition==="start"),this.classList.toggle("bottom",this.verticalPosition==="end"),this.classList.toggle("inset-top",this.verticalPosition==="insetStart"),this.classList.toggle("inset-bottom",this.verticalPosition==="insetEnd"),this.classList.toggle("vertical-center",this.verticalPosition==="center"),this.classList.toggle("left",this.horizontalPosition==="start"),this.classList.toggle("right",this.horizontalPosition==="end"),this.classList.toggle("inset-left",this.horizontalPosition==="insetStart"),this.classList.toggle("inset-right",this.horizontalPosition==="insetEnd"),this.classList.toggle("horizontal-center",this.horizontalPosition==="center")},this.setHorizontalPosition=(t,i)=>{if(t===void 0||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0)return;let s=0;switch(this.horizontalScaling){case"anchor":case"fill":s=this.horizontalViewportLock?this.viewportRect.width:i.width,this.regionWidth=`${s}px`;break;case"content":s=this.regionRect.width,this.regionWidth="unset";break}let n=0;switch(t){case"start":this.translateX=this.baseHorizontalOffset-s,this.horizontalViewportLock&&this.anchorRect.left>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.right));break;case"insetStart":this.translateX=this.baseHorizontalOffset-s+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.right));break;case"insetEnd":this.translateX=this.baseHorizontalOffset,this.horizontalViewportLock&&this.anchorRect.left<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.left));break;case"end":this.translateX=this.baseHorizontalOffset+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.left));break;case"center":if(n=(this.anchorRect.width-s)/2,this.translateX=this.baseHorizontalOffset+n,this.horizontalViewportLock){const o=this.anchorRect.left+n,r=this.anchorRect.right-n;o<this.viewportRect.left&&!(r>this.viewportRect.right)?this.translateX=this.translateX-(o-this.viewportRect.left):r>this.viewportRect.right&&!(o<this.viewportRect.left)&&(this.translateX=this.translateX-(r-this.viewportRect.right))}break}this.horizontalPosition=t},this.setVerticalPosition=(t,i)=>{if(t===void 0||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0)return;let s=0;switch(this.verticalScaling){case"anchor":case"fill":s=this.verticalViewportLock?this.viewportRect.height:i.height,this.regionHeight=`${s}px`;break;case"content":s=this.regionRect.height,this.regionHeight="unset";break}let n=0;switch(t){case"start":this.translateY=this.baseVerticalOffset-s,this.verticalViewportLock&&this.anchorRect.top>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.bottom));break;case"insetStart":this.translateY=this.baseVerticalOffset-s+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.bottom));break;case"insetEnd":this.translateY=this.baseVerticalOffset,this.verticalViewportLock&&this.anchorRect.top<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.top));break;case"end":this.translateY=this.baseVerticalOffset+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.top));break;case"center":if(n=(this.anchorRect.height-s)/2,this.translateY=this.baseVerticalOffset+n,this.verticalViewportLock){const o=this.anchorRect.top+n,r=this.anchorRect.bottom-n;o<this.viewportRect.top&&!(r>this.viewportRect.bottom)?this.translateY=this.translateY-(o-this.viewportRect.top):r>this.viewportRect.bottom&&!(o<this.viewportRect.top)&&(this.translateY=this.translateY-(r-this.viewportRect.bottom))}}this.verticalPosition=t},this.getPositioningOptions=t=>t?["insetStart","insetEnd"]:["start","end"],this.getAvailableSpace=(t,i,s,n,o,r)=>{const a=i-o,l=r-(i+n);switch(t){case"start":return a;case"insetStart":return a+n;case"insetEnd":return l+n;case"end":return l;case"center":return Math.min(a,l)*2+n}},this.getNextRegionDimension=(t,i)=>{const s={height:this.regionRect!==void 0?this.regionRect.height:0,width:this.regionRect!==void 0?this.regionRect.width:0};return t!==void 0&&this.horizontalScaling==="fill"?s.width=this.getAvailableSpace(t,this.anchorRect!==void 0?this.anchorRect.left:0,this.anchorRect!==void 0?this.anchorRect.right:0,this.anchorRect!==void 0?this.anchorRect.width:0,this.viewportRect!==void 0?this.viewportRect.left:0,this.viewportRect!==void 0?this.viewportRect.right:0):this.horizontalScaling==="anchor"&&(s.width=this.anchorRect!==void 0?this.anchorRect.width:0),i!==void 0&&this.verticalScaling==="fill"?s.height=this.getAvailableSpace(i,this.anchorRect!==void 0?this.anchorRect.top:0,this.anchorRect!==void 0?this.anchorRect.bottom:0,this.anchorRect!==void 0?this.anchorRect.height:0,this.viewportRect!==void 0?this.viewportRect.top:0,this.viewportRect!==void 0?this.viewportRect.bottom:0):this.verticalScaling==="anchor"&&(s.height=this.anchorRect!==void 0?this.anchorRect.height:0),s},this.startAutoUpdateEventListeners=()=>{window.addEventListener(Nh,this.update,{passive:!0}),window.addEventListener(zh,this.update,{passive:!0,capture:!0}),this.resizeDetector!==null&&this.viewportElement!==null&&this.resizeDetector.observe(this.viewportElement)},this.stopAutoUpdateEventListeners=()=>{window.removeEventListener(Nh,this.update),window.removeEventListener(zh,this.update),this.resizeDetector!==null&&this.viewportElement!==null&&this.resizeDetector.unobserve(this.viewportElement)}}anchorChanged(){this.initialLayoutComplete&&(this.anchorElement=this.getAnchor())}viewportChanged(){this.initialLayoutComplete&&(this.viewportElement=this.getViewport())}horizontalPositioningModeChanged(){this.requestReset()}horizontalDefaultPositionChanged(){this.updateForAttributeChange()}horizontalViewportLockChanged(){this.updateForAttributeChange()}horizontalInsetChanged(){this.updateForAttributeChange()}horizontalThresholdChanged(){this.updateForAttributeChange()}horizontalScalingChanged(){this.updateForAttributeChange()}verticalPositioningModeChanged(){this.requestReset()}verticalDefaultPositionChanged(){this.updateForAttributeChange()}verticalViewportLockChanged(){this.updateForAttributeChange()}verticalInsetChanged(){this.updateForAttributeChange()}verticalThresholdChanged(){this.updateForAttributeChange()}verticalScalingChanged(){this.updateForAttributeChange()}fixedPlacementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}autoUpdateModeChanged(t,i){this.$fastController.isConnected&&this.initialLayoutComplete&&(t==="auto"&&this.stopAutoUpdateEventListeners(),i==="auto"&&this.startAutoUpdateEventListeners())}anchorElementChanged(){this.requestReset()}viewportElementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}connectedCallback(){super.connectedCallback(),this.autoUpdateMode==="auto"&&this.startAutoUpdateEventListeners(),this.initialize()}disconnectedCallback(){super.disconnectedCallback(),this.autoUpdateMode==="auto"&&this.stopAutoUpdateEventListeners(),this.stopObservers(),this.disconnectResizeDetector()}adoptedCallback(){this.initialize()}disconnectResizeDetector(){this.resizeDetector!==null&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.handleResize)}updateForAttributeChange(){this.$fastController.isConnected&&this.initialLayoutComplete&&(this.forceUpdate=!0,this.update())}initialize(){this.initializeResizeDetector(),this.anchorElement===null&&(this.anchorElement=this.getAnchor()),this.requestReset()}requestReset(){this.$fastController.isConnected&&this.pendingReset===!1&&(this.setInitialState(),ce.queueUpdate(()=>this.reset()),this.pendingReset=!0)}setInitialState(){this.initialLayoutComplete=!1,this.regionVisible=!1,this.translateX=0,this.translateY=0,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.viewportRect=void 0,this.regionRect=void 0,this.anchorRect=void 0,this.verticalPosition=void 0,this.horizontalPosition=void 0,this.style.opacity="0",this.style.pointerEvents="none",this.forceUpdate=!1,this.style.position=this.fixedPlacement?"fixed":"absolute",this.updatePositionClasses(),this.updateRegionStyle()}}re.intersectionService=new y0;h([f],re.prototype,"anchor",void 0);h([f],re.prototype,"viewport",void 0);h([f({attribute:"horizontal-positioning-mode"})],re.prototype,"horizontalPositioningMode",void 0);h([f({attribute:"horizontal-default-position"})],re.prototype,"horizontalDefaultPosition",void 0);h([f({attribute:"horizontal-viewport-lock",mode:"boolean"})],re.prototype,"horizontalViewportLock",void 0);h([f({attribute:"horizontal-inset",mode:"boolean"})],re.prototype,"horizontalInset",void 0);h([f({attribute:"horizontal-threshold"})],re.prototype,"horizontalThreshold",void 0);h([f({attribute:"horizontal-scaling"})],re.prototype,"horizontalScaling",void 0);h([f({attribute:"vertical-positioning-mode"})],re.prototype,"verticalPositioningMode",void 0);h([f({attribute:"vertical-default-position"})],re.prototype,"verticalDefaultPosition",void 0);h([f({attribute:"vertical-viewport-lock",mode:"boolean"})],re.prototype,"verticalViewportLock",void 0);h([f({attribute:"vertical-inset",mode:"boolean"})],re.prototype,"verticalInset",void 0);h([f({attribute:"vertical-threshold"})],re.prototype,"verticalThreshold",void 0);h([f({attribute:"vertical-scaling"})],re.prototype,"verticalScaling",void 0);h([f({attribute:"fixed-placement",mode:"boolean"})],re.prototype,"fixedPlacement",void 0);h([f({attribute:"auto-update-mode"})],re.prototype,"autoUpdateMode",void 0);h([_],re.prototype,"anchorElement",void 0);h([_],re.prototype,"viewportElement",void 0);h([_],re.prototype,"initialLayoutComplete",void 0);const x0=(e,t)=>P`
    <template class="${i=>i.circular?"circular":""}">
        <div class="control" part="control" style="${i=>i.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`;let Vr=class extends de{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const t=`background-color: var(--badge-fill-${this.fill});`,i=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?t:this.color&&!this.fill?i:`${i} ${t}`}}};h([f({attribute:"fill"})],Vr.prototype,"fill",void 0);h([f({attribute:"color"})],Vr.prototype,"color",void 0);h([f({mode:"boolean"})],Vr.prototype,"circular",void 0);const w0=(e,t)=>P`
    <div role="listitem" class="listitem" part="listitem">
        ${dt(i=>i.href&&i.href.length>0,P`
                ${Up(e,t)}
            `)}
        ${dt(i=>!i.href,P`
                ${Xt(e,t)}
                <slot></slot>
                ${Zt(e,t)}
            `)}
        ${dt(i=>i.separator,P`
                <span class="separator" part="separator" aria-hidden="true">
                    <slot name="separator">${t.separator||""}</slot>
                </span>
            `)}
    </div>
`;class wr extends gi{constructor(){super(...arguments),this.separator=!0}}h([_],wr.prototype,"separator",void 0);st(wr,ni,hl);const $0=(e,t)=>P`
    <template role="navigation">
        <div role="list" class="list" part="list">
            <slot
                ${tt({property:"slottedBreadcrumbItems",filter:_s()})}
            ></slot>
        </div>
    </template>
`;class Wp extends de{slottedBreadcrumbItemsChanged(){if(this.$fastController.isConnected){if(this.slottedBreadcrumbItems===void 0||this.slottedBreadcrumbItems.length===0)return;const t=this.slottedBreadcrumbItems[this.slottedBreadcrumbItems.length-1];this.slottedBreadcrumbItems.forEach(i=>{const s=i===t;this.setItemSeparator(i,s),this.setAriaCurrent(i,s)})}}setItemSeparator(t,i){t instanceof wr&&(t.separator=!i)}findChildWithHref(t){var i,s;return t.childElementCount>0?t.querySelector("a[href]"):!((i=t.shadowRoot)===null||i===void 0)&&i.childElementCount?(s=t.shadowRoot)===null||s===void 0?void 0:s.querySelector("a[href]"):null}setAriaCurrent(t,i){const s=this.findChildWithHref(t);s===null&&t.hasAttribute("href")&&t instanceof wr?i?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current"):s!==null&&(i?s.setAttribute("aria-current","page"):s.removeAttribute("aria-current"))}}h([_],Wp.prototype,"slottedBreadcrumbItems",void 0);const k0=(e,t)=>P`
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
        ${Xt(e,t)}
        <span class="content" part="content">
            <slot ${tt("defaultSlottedContent")}></slot>
        </span>
        ${Zt(e,t)}
    </button>
`,Yh="form-associated-proxy",Uh="ElementInternals",Wh=Uh in window&&"setFormValue"in window[Uh].prototype,Gh=new WeakMap;function Fs(e){const t=class extends e{constructor(...i){super(...i),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Wh}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const i=this.proxy.labels,s=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),n=i?s.concat(Array.from(i)):s;return Object.freeze(n)}else return Sn}valueChanged(i,s){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(i,s){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(i,s){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),ce.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(i,s){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(i,s){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),ce.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!Wh)return null;let i=Gh.get(this);return i||(i=this.attachInternals(),Gh.set(this,i)),i}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach(i=>this.proxy.removeEventListener(i,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(i,s,n){this.elementInternals?this.elementInternals.setValidity(i,s,n):typeof s=="string"&&this.proxy.setCustomValidity(s)}formDisabledCallback(i){this.disabled=i}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var i;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(s=>this.proxy.addEventListener(s,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Yh),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Yh)),(i=this.shadowRoot)===null||i===void 0||i.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var i;this.removeChild(this.proxy),(i=this.shadowRoot)===null||i===void 0||i.removeChild(this.proxySlot)}validate(i){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,i)}setFormValue(i,s){this.elementInternals&&this.elementInternals.setFormValue(i,s||i)}_keypressHandler(i){switch(i.key){case Ts:if(this.form instanceof HTMLFormElement){const s=this.form.querySelector("[type=submit]");s==null||s.click()}break}}stopPropagation(i){i.stopPropagation()}};return f({mode:"boolean"})(t.prototype,"disabled"),f({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),f({attribute:"current-value"})(t.prototype,"currentValue"),f(t.prototype,"name"),f({mode:"boolean"})(t.prototype,"required"),_(t.prototype,"value"),t}function qu(e){class t extends Fs(e){}class i extends t{constructor(...n){super(n),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(n,o){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),n!==void 0&&this.$emit("change"),this.validate()}currentCheckedChanged(n,o){this.checked=this.currentChecked}updateForm(){const n=this.checked?this.value:null;this.setFormValue(n,n)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return f({attribute:"checked",mode:"boolean"})(i.prototype,"checkedAttribute"),f({attribute:"current-checked",converter:Mr})(i.prototype,"currentChecked"),_(i.prototype,"defaultChecked"),_(i.prototype,"checked"),i}class _0 extends de{}class S0 extends Fs(_0){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let mi=class extends S0{constructor(){super(...arguments),this.handleClick=t=>{var i;this.disabled&&((i=this.defaultSlottedContent)===null||i===void 0?void 0:i.length)<=1&&t.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const t=this.proxy.isConnected;t||this.attachProxy(),typeof this.form.requestSubmit=="function"?this.form.requestSubmit(this.proxy):this.proxy.click(),t||this.detachProxy()},this.handleFormReset=()=>{var t;(t=this.form)===null||t===void 0||t.reset()},this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((t=this.$fastController.definition.shadowOptions)===null||t===void 0)&&t.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(t,i){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),i==="submit"&&this.addEventListener("click",this.handleSubmission),t==="submit"&&this.removeEventListener("click",this.handleSubmission),i==="reset"&&this.addEventListener("click",this.handleFormReset),t==="reset"&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var t;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const i=Array.from((t=this.control)===null||t===void 0?void 0:t.children);i&&i.forEach(s=>{s.addEventListener("click",this.handleClick)})}disconnectedCallback(){var t;super.disconnectedCallback();const i=Array.from((t=this.control)===null||t===void 0?void 0:t.children);i&&i.forEach(s=>{s.removeEventListener("click",this.handleClick)})}};h([f({mode:"boolean"})],mi.prototype,"autofocus",void 0);h([f({attribute:"form"})],mi.prototype,"formId",void 0);h([f],mi.prototype,"formaction",void 0);h([f],mi.prototype,"formenctype",void 0);h([f],mi.prototype,"formmethod",void 0);h([f({mode:"boolean"})],mi.prototype,"formnovalidate",void 0);h([f],mi.prototype,"formtarget",void 0);h([f],mi.prototype,"type",void 0);h([_],mi.prototype,"defaultSlottedContent",void 0);class fl{}h([f({attribute:"aria-expanded"})],fl.prototype,"ariaExpanded",void 0);h([f({attribute:"aria-pressed"})],fl.prototype,"ariaPressed",void 0);st(fl,Je);st(mi,ni,fl);class C0{constructor(t){if(this.dayFormat="numeric",this.weekdayFormat="long",this.monthFormat="long",this.yearFormat="numeric",this.date=new Date,t)for(const i in t){const s=t[i];i==="date"?this.date=this.getDateObject(s):this[i]=s}}getDateObject(t){if(typeof t=="string"){const i=t.split(/[/-]/);return i.length<3?new Date:new Date(parseInt(i[2],10),parseInt(i[0],10)-1,parseInt(i[1],10))}else if("day"in t&&"month"in t&&"year"in t){const{day:i,month:s,year:n}=t;return new Date(n,s-1,i)}return t}getDate(t=this.date,i={weekday:this.weekdayFormat,month:this.monthFormat,day:this.dayFormat,year:this.yearFormat},s=this.locale){const n=this.getDateObject(t);if(!n.getTime())return"";const o=Object.assign({timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone},i);return new Intl.DateTimeFormat(s,o).format(n)}getDay(t=this.date.getDate(),i=this.dayFormat,s=this.locale){return this.getDate({month:1,day:t,year:2020},{day:i},s)}getMonth(t=this.date.getMonth()+1,i=this.monthFormat,s=this.locale){return this.getDate({month:t,day:2,year:2020},{month:i},s)}getYear(t=this.date.getFullYear(),i=this.yearFormat,s=this.locale){return this.getDate({month:2,day:2,year:t},{year:i},s)}getWeekday(t=0,i=this.weekdayFormat,s=this.locale){const n=`1-${t+1}-2017`;return this.getDate(n,{weekday:i},s)}getWeekdays(t=this.weekdayFormat,i=this.locale){return Array(7).fill(null).map((s,n)=>this.getWeekday(n,t,i))}}let Di=class extends de{constructor(){super(...arguments),this.dateFormatter=new C0,this.readonly=!1,this.locale="en-US",this.month=new Date().getMonth()+1,this.year=new Date().getFullYear(),this.dayFormat="numeric",this.weekdayFormat="short",this.monthFormat="long",this.yearFormat="numeric",this.minWeeks=0,this.disabledDates="",this.selectedDates="",this.oneDayInMs=864e5}localeChanged(){this.dateFormatter.locale=this.locale}dayFormatChanged(){this.dateFormatter.dayFormat=this.dayFormat}weekdayFormatChanged(){this.dateFormatter.weekdayFormat=this.weekdayFormat}monthFormatChanged(){this.dateFormatter.monthFormat=this.monthFormat}yearFormatChanged(){this.dateFormatter.yearFormat=this.yearFormat}getMonthInfo(t=this.month,i=this.year){const s=l=>new Date(l.getFullYear(),l.getMonth(),1).getDay(),n=l=>{const c=new Date(l.getFullYear(),l.getMonth()+1,1);return new Date(c.getTime()-this.oneDayInMs).getDate()},o=new Date(i,t-1),r=new Date(i,t),a=new Date(i,t-2);return{length:n(o),month:t,start:s(o),year:i,previous:{length:n(a),month:a.getMonth()+1,start:s(a),year:a.getFullYear()},next:{length:n(r),month:r.getMonth()+1,start:s(r),year:r.getFullYear()}}}getDays(t=this.getMonthInfo(),i=this.minWeeks){i=i>10?10:i;const{start:s,length:n,previous:o,next:r}=t,a=[];let l=1-s;for(;l<n+1||a.length<i||a[a.length-1].length%7!==0;){const{month:c,year:u}=l<1?o:l>n?r:t,d=l<1?o.length+l:l>n?l-n:l,p=`${c}-${d}-${u}`,b=this.dateInString(p,this.disabledDates),$=this.dateInString(p,this.selectedDates),x={day:d,month:c,year:u,disabled:b,selected:$},k=a[a.length-1];a.length===0||k.length%7===0?a.push([x]):k.push(x),l++}return a}dateInString(t,i){const s=i.split(",").map(n=>n.trim());return t=typeof t=="string"?t:`${t.getMonth()+1}-${t.getDate()}-${t.getFullYear()}`,s.some(n=>n===t)}getDayClassNames(t,i){const{day:s,month:n,year:o,disabled:r,selected:a}=t,l=i===`${n}-${s}-${o}`,c=this.month!==n;return["day",l&&"today",c&&"inactive",r&&"disabled",a&&"selected"].filter(Boolean).join(" ")}getWeekdayText(){const t=this.dateFormatter.getWeekdays().map(i=>({text:i}));if(this.weekdayFormat!=="long"){const i=this.dateFormatter.getWeekdays("long");t.forEach((s,n)=>{s.abbr=i[n]})}return t}handleDateSelect(t,i){t.preventDefault,this.$emit("dateselected",i)}handleKeydown(t,i){return t.key===Ts&&this.handleDateSelect(t,i),!0}};h([f({mode:"boolean"})],Di.prototype,"readonly",void 0);h([f],Di.prototype,"locale",void 0);h([f({converter:q})],Di.prototype,"month",void 0);h([f({converter:q})],Di.prototype,"year",void 0);h([f({attribute:"day-format",mode:"fromView"})],Di.prototype,"dayFormat",void 0);h([f({attribute:"weekday-format",mode:"fromView"})],Di.prototype,"weekdayFormat",void 0);h([f({attribute:"month-format",mode:"fromView"})],Di.prototype,"monthFormat",void 0);h([f({attribute:"year-format",mode:"fromView"})],Di.prototype,"yearFormat",void 0);h([f({attribute:"min-weeks",converter:q})],Di.prototype,"minWeeks",void 0);h([f({attribute:"disabled-dates"})],Di.prototype,"disabledDates",void 0);h([f({attribute:"selected-dates"})],Di.prototype,"selectedDates",void 0);const ra={none:"none",default:"default",sticky:"sticky"},zs={default:"default",columnHeader:"columnheader",rowHeader:"rowheader"},lr={default:"default",header:"header",stickyHeader:"sticky-header"};class Pt extends de{constructor(){super(...arguments),this.rowType=lr.default,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){if(this.rowData!==null&&this.isActiveRow){this.refocusOnLoad=!0;return}}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),this.cellsRepeatBehavior===null&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new Wu(t=>t.columnDefinitions,t=>t.activeCellItemTemplate,{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener($o,this.handleFocusout),this.addEventListener(ko,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener($o,this.handleFocusout),this.removeEventListener(ko,this.handleKeydown)}handleFocusout(t){this.contains(t.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(t){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(t.target),this.$emit("row-focused",this)}handleKeydown(t){if(t.defaultPrevented)return;let i=0;switch(t.key){case tn:i=Math.max(0,this.focusColumnIndex-1),this.cellElements[i].focus(),t.preventDefault();break;case sn:i=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[i].focus(),t.preventDefault();break;case ls:t.ctrlKey||(this.cellElements[0].focus(),t.preventDefault());break;case cs:t.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),t.preventDefault());break}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===lr.default&&this.cellItemTemplate!==void 0?this.cellItemTemplate:this.rowType===lr.default&&this.cellItemTemplate===void 0?this.defaultCellItemTemplate:this.headerCellItemTemplate!==void 0?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}}h([f({attribute:"grid-template-columns"})],Pt.prototype,"gridTemplateColumns",void 0);h([f({attribute:"row-type"})],Pt.prototype,"rowType",void 0);h([_],Pt.prototype,"rowData",void 0);h([_],Pt.prototype,"columnDefinitions",void 0);h([_],Pt.prototype,"cellItemTemplate",void 0);h([_],Pt.prototype,"headerCellItemTemplate",void 0);h([_],Pt.prototype,"rowIndex",void 0);h([_],Pt.prototype,"isActiveRow",void 0);h([_],Pt.prototype,"activeCellItemTemplate",void 0);h([_],Pt.prototype,"defaultCellItemTemplate",void 0);h([_],Pt.prototype,"defaultHeaderCellItemTemplate",void 0);h([_],Pt.prototype,"cellElements",void 0);function I0(e){const t=e.tagFor(Pt);return P`
    <${t}
        :rowData="${i=>i}"
        :cellItemTemplate="${(i,s)=>s.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(i,s)=>s.parent.headerCellItemTemplate}"
    ></${t}>
`}const T0=(e,t)=>{const i=I0(e),s=e.tagFor(Pt);return P`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>s}"
            :defaultRowItemTemplate="${i}"
            ${cl({property:"rowElements",filter:_s("[role=row]")})}
        >
            <slot></slot>
        </template>
    `};class St extends de{constructor(){super(),this.noTabbing=!1,this.generateHeader=ra.default,this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(t,i,s)=>{if(this.rowElements.length===0){this.focusRowIndex=0,this.focusColumnIndex=0;return}const n=Math.max(0,Math.min(this.rowElements.length-1,t)),r=this.rowElements[n].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),a=Math.max(0,Math.min(r.length-1,i)),l=r[a];s&&this.scrollHeight!==this.clientHeight&&(n<this.focusRowIndex&&this.scrollTop>0||n>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&l.scrollIntoView({block:"center",inline:"center"}),l.focus()},this.onChildListChange=(t,i)=>{t&&t.length&&(t.forEach(s=>{s.addedNodes.forEach(n=>{n.nodeType===1&&n.getAttribute("role")==="row"&&(n.columnDefinitions=this.columnDefinitions)})}),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,ce.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let t=this.gridTemplateColumns;if(t===void 0){if(this.generatedGridTemplateColumns===""&&this.rowElements.length>0){const i=this.rowElements[0];this.generatedGridTemplateColumns=new Array(i.cellElements.length).fill("1fr").join(" ")}t=this.generatedGridTemplateColumns}this.rowElements.forEach((i,s)=>{const n=i;n.rowIndex=s,n.gridTemplateColumns=t,this.columnDefinitionsStale&&(n.columnDefinitions=this.columnDefinitions)}),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(t){let i="";return t.forEach(s=>{i=`${i}${i===""?"":" "}1fr`}),i}noTabbingChanged(){this.$fastController.isConnected&&(this.noTabbing?this.setAttribute("tabIndex","-1"):this.setAttribute("tabIndex",this.contains(document.activeElement)||this===document.activeElement?"-1":"0"))}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){this.columnDefinitions===null&&this.rowsData.length>0&&(this.columnDefinitions=St.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){if(this.columnDefinitions===null){this.generatedGridTemplateColumns="";return}this.generatedGridTemplateColumns=St.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())}headerCellItemTemplateChanged(){this.$fastController.isConnected&&this.generatedHeader!==null&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),this.rowItemTemplate===void 0&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new Wu(t=>t.rowsData,t=>t.rowItemTemplate,{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(Vh,this.handleFocus),this.addEventListener(ko,this.handleKeydown),this.addEventListener($o,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),ce.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(Vh,this.handleFocus),this.removeEventListener(ko,this.handleKeydown),this.removeEventListener($o,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(t){this.isUpdatingFocus=!0;const i=t.target;this.focusRowIndex=this.rowElements.indexOf(i),this.focusColumnIndex=i.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(t){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(t){(t.relatedTarget===null||!this.contains(t.relatedTarget))&&this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(t){if(t.defaultPrevented)return;let i;const s=this.rowElements.length-1,n=this.offsetHeight+this.scrollTop,o=this.rowElements[s];switch(t.key){case Fi:t.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case Ti:t.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case g0:if(t.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex===0){this.focusOnCell(0,this.focusColumnIndex,!1);return}for(i=this.focusRowIndex-1,i;i>=0;i--){const r=this.rowElements[i];if(r.offsetTop<this.scrollTop){this.scrollTop=r.offsetTop+r.clientHeight-this.clientHeight;break}}this.focusOnCell(i,this.focusColumnIndex,!1);break;case p0:if(t.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=s||o.offsetTop+o.offsetHeight<=n){this.focusOnCell(s,this.focusColumnIndex,!1);return}for(i=this.focusRowIndex+1,i;i<=s;i++){const r=this.rowElements[i];if(r.offsetTop+r.offsetHeight>n){let a=0;this.generateHeader===ra.sticky&&this.generatedHeader!==null&&(a=this.generatedHeader.clientHeight),this.scrollTop=r.offsetTop-a;break}}this.focusOnCell(i,this.focusColumnIndex,!1);break;case ls:t.ctrlKey&&(t.preventDefault(),this.focusOnCell(0,0,!0));break;case cs:t.ctrlKey&&this.columnDefinitions!==null&&(t.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0));break}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||this.pendingFocusUpdate===!1&&(this.pendingFocusUpdate=!0,ce.queueUpdate(()=>this.updateFocus()))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(this.generatedHeader!==null&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),this.generateHeader!==ra.none&&this.rowsData.length>0){const t=document.createElement(this.rowElementTag);this.generatedHeader=t,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===ra.sticky?lr.stickyHeader:lr.header,(this.firstChild!==null||this.rowsPlaceholder!==null)&&this.insertBefore(t,this.firstChild!==null?this.firstChild:this.rowsPlaceholder);return}}}St.generateColumns=e=>Object.getOwnPropertyNames(e).map((t,i)=>({columnDataKey:t,gridColumn:`${i}`}));h([f({attribute:"no-tabbing",mode:"boolean"})],St.prototype,"noTabbing",void 0);h([f({attribute:"generate-header"})],St.prototype,"generateHeader",void 0);h([f({attribute:"grid-template-columns"})],St.prototype,"gridTemplateColumns",void 0);h([_],St.prototype,"rowsData",void 0);h([_],St.prototype,"columnDefinitions",void 0);h([_],St.prototype,"rowItemTemplate",void 0);h([_],St.prototype,"cellItemTemplate",void 0);h([_],St.prototype,"headerCellItemTemplate",void 0);h([_],St.prototype,"focusRowIndex",void 0);h([_],St.prototype,"focusColumnIndex",void 0);h([_],St.prototype,"defaultRowItemTemplate",void 0);h([_],St.prototype,"rowElementTag",void 0);h([_],St.prototype,"rowElements",void 0);const F0=P`
    <template>
        ${e=>e.rowData===null||e.columnDefinition===null||e.columnDefinition.columnDataKey===null?null:e.rowData[e.columnDefinition.columnDataKey]}
    </template>
`,D0=P`
    <template>
        ${e=>e.columnDefinition===null?null:e.columnDefinition.title===void 0?e.columnDefinition.columnDataKey:e.columnDefinition.title}
    </template>
`;class Ds extends de{constructor(){super(...arguments),this.cellType=zs.default,this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(t,i){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var t;super.connectedCallback(),this.addEventListener(Hh,this.handleFocusin),this.addEventListener($o,this.handleFocusout),this.addEventListener(ko,this.handleKeydown),this.style.gridColumn=`${((t=this.columnDefinition)===null||t===void 0?void 0:t.gridColumn)===void 0?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(Hh,this.handleFocusin),this.removeEventListener($o,this.handleFocusout),this.removeEventListener(ko,this.handleKeydown),this.disconnectCellView()}handleFocusin(t){if(!this.isActiveCell){switch(this.isActiveCell=!0,this.cellType){case zs.columnHeader:if(this.columnDefinition!==null&&this.columnDefinition.headerCellInternalFocusQueue!==!0&&typeof this.columnDefinition.headerCellFocusTargetCallback=="function"){const i=this.columnDefinition.headerCellFocusTargetCallback(this);i!==null&&i.focus()}break;default:if(this.columnDefinition!==null&&this.columnDefinition.cellInternalFocusQueue!==!0&&typeof this.columnDefinition.cellFocusTargetCallback=="function"){const i=this.columnDefinition.cellFocusTargetCallback(this);i!==null&&i.focus()}break}this.$emit("cell-focused",this)}}handleFocusout(t){this!==document.activeElement&&!this.contains(document.activeElement)&&(this.isActiveCell=!1)}handleKeydown(t){if(!(t.defaultPrevented||this.columnDefinition===null||this.cellType===zs.default&&this.columnDefinition.cellInternalFocusQueue!==!0||this.cellType===zs.columnHeader&&this.columnDefinition.headerCellInternalFocusQueue!==!0))switch(t.key){case Ts:case f0:if(this.contains(document.activeElement)&&document.activeElement!==this)return;switch(this.cellType){case zs.columnHeader:if(this.columnDefinition.headerCellFocusTargetCallback!==void 0){const i=this.columnDefinition.headerCellFocusTargetCallback(this);i!==null&&i.focus(),t.preventDefault()}break;default:if(this.columnDefinition.cellFocusTargetCallback!==void 0){const i=this.columnDefinition.cellFocusTargetCallback(this);i!==null&&i.focus(),t.preventDefault()}break}break;case Oo:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),t.preventDefault());break}}updateCellView(){if(this.disconnectCellView(),this.columnDefinition!==null)switch(this.cellType){case zs.columnHeader:this.columnDefinition.headerCellTemplate!==void 0?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=D0.render(this,this);break;case void 0:case zs.rowHeader:case zs.default:this.columnDefinition.cellTemplate!==void 0?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=F0.render(this,this);break}}disconnectCellView(){this.customCellView!==null&&(this.customCellView.dispose(),this.customCellView=null)}}h([f({attribute:"cell-type"})],Ds.prototype,"cellType",void 0);h([f({attribute:"grid-column"})],Ds.prototype,"gridColumn",void 0);h([_],Ds.prototype,"rowData",void 0);h([_],Ds.prototype,"columnDefinition",void 0);function R0(e){const t=e.tagFor(Ds);return P`
    <${t}
        cell-type="${i=>i.isRowHeader?"rowheader":void 0}"
        grid-column="${(i,s)=>s.index+1}"
        :rowData="${(i,s)=>s.parent.rowData}"
        :columnDefinition="${i=>i}"
    ></${t}>
`}function E0(e){const t=e.tagFor(Ds);return P`
    <${t}
        cell-type="columnheader"
        grid-column="${(i,s)=>s.index+1}"
        :columnDefinition="${i=>i}"
    ></${t}>
`}const O0=(e,t)=>{const i=R0(e),s=E0(e);return P`
        <template
            role="row"
            class="${n=>n.rowType!=="default"?n.rowType:""}"
            :defaultCellItemTemplate="${i}"
            :defaultHeaderCellItemTemplate="${s}"
            ${cl({property:"cellElements",filter:_s('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${tt("slottedCellElements")}></slot>
        </template>
    `},P0=(e,t)=>P`
        <template
            tabindex="-1"
            role="${i=>!i.cellType||i.cellType==="default"?"gridcell":i.cellType}"
            class="
            ${i=>i.cellType==="columnheader"?"column-header":i.cellType==="rowheader"?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `,L0=P`
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
`,A0=e=>{const t=e.tagFor(Ds);return P`
        <${t}
            class="week-day"
            part="week-day"
            tabindex="-1"
            grid-column="${(i,s)=>s.index+1}"
            abbr="${i=>i.abbr}"
        >
            ${i=>i.text}
        </${t}>
    `},M0=(e,t)=>{const i=e.tagFor(Ds);return P`
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
    `},V0=(e,t)=>{const i=e.tagFor(Pt);return P`
        <${i}
            class="week"
            part="week"
            role="row"
            role-type="default"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
        ${ao(s=>s,M0(e,t),{positioning:!0})}
        </${i}>
    `},H0=(e,t)=>{const i=e.tagFor(St),s=e.tagFor(Pt);return P`
    <${i} class="days interact" part="days" generate-header="none">
        <${s}
            class="week-days"
            part="week-days"
            role="row"
            row-type="header"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
            ${ao(n=>n.getWeekdayText(),A0(e),{positioning:!0})}
        </${s}>
        ${ao(n=>n.getDays(),V0(e,t))}
    </${i}>
`},N0=e=>P`
        <div class="days" part="days">
            <div class="week-days" part="week-days">
                ${ao(t=>t.getWeekdayText(),P`
                        <div class="week-day" part="week-day" abbr="${t=>t.abbr}">
                            ${t=>t.text}
                        </div>
                    `)}
            </div>
            ${ao(t=>t.getDays(),P`
                    <div class="week">
                        ${ao(t=>t,P`
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
    `,z0=(e,t)=>{var i;const s=new Date,n=`${s.getMonth()+1}-${s.getDate()}-${s.getFullYear()}`;return P`
        <template>
            ${Wy}
            ${t.title instanceof Function?t.title(e,t):(i=t.title)!==null&&i!==void 0?i:""}
            <slot></slot>
            ${dt(o=>o.readonly,N0(n),H0(e,n))}
            ${Uy}
        </template>
    `},B0=(e,t)=>P`
    <slot></slot>
`;let Gp=class extends de{};const j0=(e,t)=>P`
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
            <slot ${tt("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class Y0 extends de{}class U0 extends qu(Y0){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class pl extends U0{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=t=>{if(!this.readOnly)switch(t.key){case An:this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked;break}},this.clickHandler=t=>{!this.disabled&&!this.readOnly&&(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}h([f({attribute:"readonly",mode:"boolean"})],pl.prototype,"readOnly",void 0);h([_],pl.prototype,"defaultSlottedNodes",void 0);h([_],pl.prototype,"indeterminate",void 0);function qp(e){return wo(e)&&(e.getAttribute("role")==="option"||e instanceof HTMLOptionElement)}class us extends de{constructor(t,i,s,n){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,t&&(this.textContent=t),i&&(this.initialValue=i),s&&(this.defaultSelected=s),n&&(this.selected=n),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(t,i){if(typeof i=="boolean"){this.ariaChecked=i?"true":"false";return}this.ariaChecked=null}contentChanged(t,i){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(t,i){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(t,i){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var t;return(t=this.value)!==null&&t!==void 0?t:this.text}get text(){var t,i;return(i=(t=this.textContent)===null||t===void 0?void 0:t.replace(/\s+/g," ").trim())!==null&&i!==void 0?i:""}set value(t){const i=`${t??""}`;this._value=i,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=i),le.notify(this,"value")}get value(){var t;return le.track(this,"value"),(t=this._value)!==null&&t!==void 0?t:this.text}get form(){return this.proxy?this.proxy.form:null}}h([_],us.prototype,"checked",void 0);h([_],us.prototype,"content",void 0);h([_],us.prototype,"defaultSelected",void 0);h([f({mode:"boolean"})],us.prototype,"disabled",void 0);h([f({attribute:"selected",mode:"boolean"})],us.prototype,"selectedAttribute",void 0);h([_],us.prototype,"selected",void 0);h([f({attribute:"value",mode:"fromView"})],us.prototype,"initialValue",void 0);class Po{}h([_],Po.prototype,"ariaChecked",void 0);h([_],Po.prototype,"ariaPosInSet",void 0);h([_],Po.prototype,"ariaSelected",void 0);h([_],Po.prototype,"ariaSetSize",void 0);st(Po,Je);st(us,ni,Po);let oi=class Fa extends de{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var t;return(t=this.selectedOptions[0])!==null&&t!==void 0?t:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(t=>t.disabled)}get length(){var t,i;return(i=(t=this.options)===null||t===void 0?void 0:t.length)!==null&&i!==void 0?i:0}get options(){return le.track(this,"options"),this._options}set options(t){this._options=t,le.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(t){this.typeaheadExpired=t}clickHandler(t){const i=t.target.closest("option,[role=option]");if(i&&!i.disabled)return this.selectedIndex=this.options.indexOf(i),!0}focusAndScrollOptionIntoView(t=this.firstSelectedOption){this.contains(document.activeElement)&&t!==null&&(t.focus(),requestAnimationFrame(()=>{t.scrollIntoView({block:"nearest"})}))}focusinHandler(t){!this.shouldSkipFocus&&t.target===t.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const t=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),i=new RegExp(`^${t}`,"gi");return this.options.filter(s=>s.text.trim().match(i))}getSelectableIndex(t=this.selectedIndex,i){const s=t>i?-1:t<i?1:0,n=t+s;let o=null;switch(s){case-1:{o=this.options.reduceRight((r,a,l)=>!r&&!a.disabled&&l<n?a:r,o);break}case 1:{o=this.options.reduce((r,a,l)=>!r&&!a.disabled&&l>n?a:r,o);break}}return this.options.indexOf(o)}handleChange(t,i){switch(i){case"selected":{Fa.slottedOptionFilter(t)&&(this.selectedIndex=this.options.indexOf(t)),this.setSelectedOptions();break}}}handleTypeAhead(t){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,Fa.TYPE_AHEAD_TIMEOUT_MS),!(t.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${t}`)}keydownHandler(t){if(this.disabled)return!0;this.shouldSkipFocus=!1;const i=t.key;switch(i){case ls:{t.shiftKey||(t.preventDefault(),this.selectFirstOption());break}case Ti:{t.shiftKey||(t.preventDefault(),this.selectNextOption());break}case Fi:{t.shiftKey||(t.preventDefault(),this.selectPreviousOption());break}case cs:{t.preventDefault(),this.selectLastOption();break}case ul:return this.focusAndScrollOptionIntoView(),!0;case Ts:case Oo:return!0;case An:if(this.typeaheadExpired)return!0;default:return i.length===1&&this.handleTypeAhead(`${i}`),!0}}mousedownHandler(t){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(t,i){this.ariaMultiSelectable=i?"true":null}selectedIndexChanged(t,i){var s;if(!this.hasSelectableOptions){this.selectedIndex=-1;return}if(!((s=this.options[this.selectedIndex])===null||s===void 0)&&s.disabled&&typeof t=="number"){const n=this.getSelectableIndex(t,i),o=n>-1?n:t;this.selectedIndex=o,i===o&&this.selectedIndexChanged(i,o);return}this.setSelectedOptions()}selectedOptionsChanged(t,i){var s;const n=i.filter(Fa.slottedOptionFilter);(s=this.options)===null||s===void 0||s.forEach(o=>{const r=le.getNotifier(o);r.unsubscribe(this,"selected"),o.selected=n.includes(o),r.subscribe(this,"selected")})}selectFirstOption(){var t,i;this.disabled||(this.selectedIndex=(i=(t=this.options)===null||t===void 0?void 0:t.findIndex(s=>!s.disabled))!==null&&i!==void 0?i:-1)}selectLastOption(){this.disabled||(this.selectedIndex=l0(this.options,t=>!t.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var t,i;this.selectedIndex=(i=(t=this.options)===null||t===void 0?void 0:t.findIndex(s=>s.defaultSelected))!==null&&i!==void 0?i:-1}setSelectedOptions(){var t,i,s;!((t=this.options)===null||t===void 0)&&t.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=(s=(i=this.firstSelectedOption)===null||i===void 0?void 0:i.id)!==null&&s!==void 0?s:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(t,i){this.options=i.reduce((n,o)=>(qp(o)&&n.push(o),n),[]);const s=`${this.options.length}`;this.options.forEach((n,o)=>{n.id||(n.id=xr("option-")),n.ariaPosInSet=`${o+1}`,n.ariaSetSize=s}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(t,i){if(this.$fastController.isConnected){const s=this.getTypeaheadMatches();if(s.length){const n=this.options.indexOf(s[0]);n>-1&&(this.selectedIndex=n)}this.typeaheadExpired=!1}}};oi.slottedOptionFilter=e=>qp(e)&&!e.hidden;oi.TYPE_AHEAD_TIMEOUT_MS=1e3;h([f({mode:"boolean"})],oi.prototype,"disabled",void 0);h([_],oi.prototype,"selectedIndex",void 0);h([_],oi.prototype,"selectedOptions",void 0);h([_],oi.prototype,"slottedOptions",void 0);h([_],oi.prototype,"typeaheadBuffer",void 0);class ln{}h([_],ln.prototype,"ariaActiveDescendant",void 0);h([_],ln.prototype,"ariaDisabled",void 0);h([_],ln.prototype,"ariaExpanded",void 0);h([_],ln.prototype,"ariaMultiSelectable",void 0);st(ln,Je);st(oi,ln);const lo={above:"above",below:"below"};class W0 extends oi{}class G0 extends Fs(W0){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const aa={inline:"inline",list:"list",both:"both",none:"none"};let Rs=class extends G0{constructor(){super(...arguments),this._value="",this.filteredOptions=[],this.filter="",this.forcedPosition=!1,this.listboxId=xr("listbox-"),this.maxHeight=0,this.open=!1}formResetCallback(){super.formResetCallback(),this.setDefaultSelectedOption(),this.updateValue()}validate(){super.validate(this.control)}get isAutocompleteInline(){return this.autocomplete===aa.inline||this.isAutocompleteBoth}get isAutocompleteList(){return this.autocomplete===aa.list||this.isAutocompleteBoth}get isAutocompleteBoth(){return this.autocomplete===aa.both}openChanged(){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),ce.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}get options(){return le.track(this,"options"),this.filteredOptions.length?this.filteredOptions:this._options}set options(t){this._options=t,le.notify(this,"options")}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}positionChanged(t,i){this.positionAttribute=i,this.setPositioning()}get value(){return le.track(this,"value"),this._value}set value(t){var i,s,n;const o=`${this._value}`;if(this.$fastController.isConnected&&this.options){const r=this.options.findIndex(c=>c.text.toLowerCase()===t.toLowerCase()),a=(i=this.options[this.selectedIndex])===null||i===void 0?void 0:i.text,l=(s=this.options[r])===null||s===void 0?void 0:s.text;this.selectedIndex=a!==l?r:this.selectedIndex,t=((n=this.firstSelectedOption)===null||n===void 0?void 0:n.text)||t}o!==t&&(this._value=t,super.valueChanged(o,t),le.notify(this,"value"))}clickHandler(t){if(!this.disabled){if(this.open){const i=t.target.closest("option,[role=option]");if(!i||i.disabled)return;this.selectedOptions=[i],this.control.value=i.text,this.clearSelectionRange(),this.updateValue(!0)}return this.open=!this.open,this.open&&this.control.focus(),!0}}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.value&&(this.initialValue=this.value)}disabledChanged(t,i){super.disabledChanged&&super.disabledChanged(t,i),this.ariaDisabled=this.disabled?"true":"false"}filterOptions(){(!this.autocomplete||this.autocomplete===aa.none)&&(this.filter="");const t=this.filter.toLowerCase();this.filteredOptions=this._options.filter(i=>i.text.toLowerCase().startsWith(this.filter.toLowerCase())),this.isAutocompleteList&&(!this.filteredOptions.length&&!t&&(this.filteredOptions=this._options),this._options.forEach(i=>{i.hidden=!this.filteredOptions.includes(i)}))}focusAndScrollOptionIntoView(){this.contains(document.activeElement)&&(this.control.focus(),this.firstSelectedOption&&requestAnimationFrame(()=>{var t;(t=this.firstSelectedOption)===null||t===void 0||t.scrollIntoView({block:"nearest"})}))}focusoutHandler(t){if(this.syncValue(),!this.open)return!0;const i=t.relatedTarget;if(this.isSameNode(i)){this.focus();return}(!this.options||!this.options.includes(i))&&(this.open=!1)}inputHandler(t){if(this.filter=this.control.value,this.filterOptions(),this.isAutocompleteInline||(this.selectedIndex=this.options.map(i=>i.text).indexOf(this.control.value)),t.inputType.includes("deleteContent")||!this.filter.length)return!0;this.isAutocompleteList&&!this.open&&(this.open=!0),this.isAutocompleteInline&&(this.filteredOptions.length?(this.selectedOptions=[this.filteredOptions[0]],this.selectedIndex=this.options.indexOf(this.firstSelectedOption),this.setInlineSelection()):this.selectedIndex=-1)}keydownHandler(t){const i=t.key;if(t.ctrlKey||t.shiftKey)return!0;switch(i){case"Enter":{this.syncValue(),this.isAutocompleteInline&&(this.filter=this.value),this.open=!1,this.clearSelectionRange();break}case"Escape":{if(this.isAutocompleteInline||(this.selectedIndex=-1),this.open){this.open=!1;break}this.value="",this.control.value="",this.filter="",this.filterOptions();break}case"Tab":{if(this.setInputToSelection(),!this.open)return!0;t.preventDefault(),this.open=!1;break}case"ArrowUp":case"ArrowDown":{if(this.filterOptions(),!this.open){this.open=!0;break}this.filteredOptions.length>0&&super.keydownHandler(t),this.isAutocompleteInline&&this.setInlineSelection();break}default:return!0}}keyupHandler(t){switch(t.key){case"ArrowLeft":case"ArrowRight":case"Backspace":case"Delete":case"Home":case"End":{this.filter=this.control.value,this.selectedIndex=-1,this.filterOptions();break}}}selectedIndexChanged(t,i){if(this.$fastController.isConnected){if(i=dl(-1,this.options.length-1,i),i!==this.selectedIndex){this.selectedIndex=i;return}super.selectedIndexChanged(t,i)}}selectPreviousOption(){!this.disabled&&this.selectedIndex>=0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){if(this.$fastController.isConnected&&this.options){const t=this.options.findIndex(i=>i.getAttribute("selected")!==null||i.selected);this.selectedIndex=t,!this.dirtyValue&&this.firstSelectedOption&&(this.value=this.firstSelectedOption.text),this.setSelectedOptions()}}setInputToSelection(){this.firstSelectedOption&&(this.control.value=this.firstSelectedOption.text,this.control.focus())}setInlineSelection(){this.firstSelectedOption&&(this.setInputToSelection(),this.control.setSelectionRange(this.filter.length,this.control.value.length,"backward"))}syncValue(){var t;const i=this.selectedIndex>-1?(t=this.firstSelectedOption)===null||t===void 0?void 0:t.text:this.control.value;this.updateValue(this.value!==i)}setPositioning(){const t=this.getBoundingClientRect(),s=window.innerHeight-t.bottom;this.position=this.forcedPosition?this.positionAttribute:t.top>s?lo.above:lo.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===lo.above?~~t.top:~~s}selectedOptionsChanged(t,i){this.$fastController.isConnected&&this._options.forEach(s=>{s.selected=i.includes(s)})}slottedOptionsChanged(t,i){super.slottedOptionsChanged(t,i),this.updateValue()}updateValue(t){var i;this.$fastController.isConnected&&(this.value=((i=this.firstSelectedOption)===null||i===void 0?void 0:i.text)||this.control.value,this.control.value=this.value),t&&this.$emit("change")}clearSelectionRange(){const t=this.control.value.length;this.control.setSelectionRange(t,t)}};h([f({attribute:"autocomplete",mode:"fromView"})],Rs.prototype,"autocomplete",void 0);h([_],Rs.prototype,"maxHeight",void 0);h([f({attribute:"open",mode:"boolean"})],Rs.prototype,"open",void 0);h([f],Rs.prototype,"placeholder",void 0);h([f({attribute:"position"})],Rs.prototype,"positionAttribute",void 0);h([_],Rs.prototype,"position",void 0);class gl{}h([_],gl.prototype,"ariaAutoComplete",void 0);h([_],gl.prototype,"ariaControls",void 0);st(gl,ln);st(Rs,ni,gl);const q0=(e,t)=>P`
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
            ${Xt(e,t)}
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
            ${Zt(e,t)}
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
                ${tt({filter:oi.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`;function za(e){const t=e.parentElement;if(t)return t;{const i=e.getRootNode();if(i.host instanceof HTMLElement)return i.host}return null}function Z0(e,t){let i=t;for(;i!==null;){if(i===e)return!0;i=za(i)}return!1}const bs=document.createElement("div");function X0(e){return e instanceof ll}class Zu{setProperty(t,i){ce.queueUpdate(()=>this.target.setProperty(t,i))}removeProperty(t){ce.queueUpdate(()=>this.target.removeProperty(t))}}class Q0 extends Zu{constructor(t){super();const i=new CSSStyleSheet;this.target=i.cssRules[i.insertRule(":host{}")].style,t.$fastController.addStyles(qt.create([i]))}}class J0 extends Zu{constructor(){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,t]}}class K0 extends Zu{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:t}=this.style;if(t){const i=t.insertRule(":root{}",t.cssRules.length);this.target=t.cssRules[i].style}}}class Zp{constructor(t){this.store=new Map,this.target=null;const i=t.$fastController;this.style=document.createElement("style"),i.addStyles(this.style),le.getNotifier(i).subscribe(this,"isConnected"),this.handleChange(i,"isConnected")}targetChanged(){if(this.target!==null)for(const[t,i]of this.store.entries())this.target.setProperty(t,i)}setProperty(t,i){this.store.set(t,i),ce.queueUpdate(()=>{this.target!==null&&this.target.setProperty(t,i)})}removeProperty(t){this.store.delete(t),ce.queueUpdate(()=>{this.target!==null&&this.target.removeProperty(t)})}handleChange(t,i){const{sheet:s}=this.style;if(s){const n=s.insertRule(":host{}",s.cssRules.length);this.target=s.cssRules[n].style}else this.target=null}}h([_],Zp.prototype,"target",void 0);class ex{constructor(t){this.target=t.style}setProperty(t,i){ce.queueUpdate(()=>this.target.setProperty(t,i))}removeProperty(t){ce.queueUpdate(()=>this.target.removeProperty(t))}}class Tt{setProperty(t,i){Tt.properties[t]=i;for(const s of Tt.roots.values())no.getOrCreate(Tt.normalizeRoot(s)).setProperty(t,i)}removeProperty(t){delete Tt.properties[t];for(const i of Tt.roots.values())no.getOrCreate(Tt.normalizeRoot(i)).removeProperty(t)}static registerRoot(t){const{roots:i}=Tt;if(!i.has(t)){i.add(t);const s=no.getOrCreate(this.normalizeRoot(t));for(const n in Tt.properties)s.setProperty(n,Tt.properties[n])}}static unregisterRoot(t){const{roots:i}=Tt;if(i.has(t)){i.delete(t);const s=no.getOrCreate(Tt.normalizeRoot(t));for(const n in Tt.properties)s.removeProperty(n)}}static normalizeRoot(t){return t===bs?document:t}}Tt.roots=new Set;Tt.properties={};const Fc=new WeakMap,tx=ce.supportsAdoptedStyleSheets?Q0:Zp,no=Object.freeze({getOrCreate(e){if(Fc.has(e))return Fc.get(e);let t;return e===bs?t=new Tt:e instanceof Document?t=ce.supportsAdoptedStyleSheets?new J0:new K0:X0(e)?t=new tx(e):t=new ex(e),Fc.set(e,t),t}});class Ut extends Uu{constructor(t){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=t.name,t.cssCustomPropertyName!==null&&(this.cssCustomProperty=`--${t.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=Ut.uniqueId(),Ut.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(t){return new Ut({name:typeof t=="string"?t:t.name,cssCustomPropertyName:typeof t=="string"?t:t.cssCustomPropertyName===void 0?t.name:t.cssCustomPropertyName})}static isCSSDesignToken(t){return typeof t.cssCustomProperty=="string"}static isDerivedDesignTokenValue(t){return typeof t=="function"}static getTokenById(t){return Ut.tokensById.get(t)}getOrCreateSubscriberSet(t=this){return this.subscribers.get(t)||this.subscribers.set(t,new Set)&&this.subscribers.get(t)}createCSS(){return this.cssVar||""}getValueFor(t){const i=mt.getOrCreate(t).get(this);if(i!==void 0)return i;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${t} or an ancestor of ${t}.`)}setValueFor(t,i){return this._appliedTo.add(t),i instanceof Ut&&(i=this.alias(i)),mt.getOrCreate(t).set(this,i),this}deleteValueFor(t){return this._appliedTo.delete(t),mt.existsFor(t)&&mt.getOrCreate(t).delete(this),this}withDefault(t){return this.setValueFor(bs,t),this}subscribe(t,i){const s=this.getOrCreateSubscriberSet(i);i&&!mt.existsFor(i)&&mt.getOrCreate(i),s.has(t)||s.add(t)}unsubscribe(t,i){const s=this.subscribers.get(i||this);s&&s.has(t)&&s.delete(t)}notify(t){const i=Object.freeze({token:this,target:t});this.subscribers.has(this)&&this.subscribers.get(this).forEach(s=>s.handleChange(i)),this.subscribers.has(t)&&this.subscribers.get(t).forEach(s=>s.handleChange(i))}alias(t){return i=>t.getValueFor(i)}}Ut.uniqueId=(()=>{let e=0;return()=>(e++,e.toString(16))})();Ut.tokensById=new Map;class ix{startReflection(t,i){t.subscribe(this,i),this.handleChange({token:t,target:i})}stopReflection(t,i){t.unsubscribe(this,i),this.remove(t,i)}handleChange(t){const{token:i,target:s}=t;this.add(i,s)}add(t,i){no.getOrCreate(i).setProperty(t.cssCustomProperty,this.resolveCSSValue(mt.getOrCreate(i).get(t)))}remove(t,i){no.getOrCreate(i).removeProperty(t.cssCustomProperty)}resolveCSSValue(t){return t&&typeof t.createCSS=="function"?t.createCSS():t}}class sx{constructor(t,i,s){this.source=t,this.token=i,this.node=s,this.dependencies=new Set,this.observer=le.binding(t,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,rr))}}class nx{constructor(){this.values=new Map}set(t,i){this.values.get(t)!==i&&(this.values.set(t,i),le.getNotifier(this).notify(t.id))}get(t){return le.track(this,t.id),this.values.get(t)}delete(t){this.values.delete(t)}all(){return this.values.entries()}}const qo=new WeakMap,Zo=new WeakMap;class mt{constructor(t){this.target=t,this.store=new nx,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(i,s)=>{const n=Ut.getTokenById(s);if(n&&(n.notify(this.target),Ut.isCSSDesignToken(n))){const o=this.parent,r=this.isReflecting(n);if(o){const a=o.get(n),l=i.get(n);a!==l&&!r?this.reflectToCSS(n):a===l&&r&&this.stopReflectToCSS(n)}else r||this.reflectToCSS(n)}}},qo.set(t,this),le.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),t instanceof ll?t.$fastController.addBehaviors([this]):t.isConnected&&this.bind()}static getOrCreate(t){return qo.get(t)||new mt(t)}static existsFor(t){return qo.has(t)}static findParent(t){if(bs!==t.target){let i=za(t.target);for(;i!==null;){if(qo.has(i))return qo.get(i);i=za(i)}return mt.getOrCreate(bs)}return null}static findClosestAssignedNode(t,i){let s=i;do{if(s.has(t))return s;s=s.parent?s.parent:s.target!==bs?mt.getOrCreate(bs):null}while(s!==null);return null}get parent(){return Zo.get(this)||null}has(t){return this.assignedValues.has(t)}get(t){const i=this.store.get(t);if(i!==void 0)return i;const s=this.getRaw(t);if(s!==void 0)return this.hydrate(t,s),this.get(t)}getRaw(t){var i;return this.assignedValues.has(t)?this.assignedValues.get(t):(i=mt.findClosestAssignedNode(t,this))===null||i===void 0?void 0:i.getRaw(t)}set(t,i){Ut.isDerivedDesignTokenValue(this.assignedValues.get(t))&&this.tearDownBindingObserver(t),this.assignedValues.set(t,i),Ut.isDerivedDesignTokenValue(i)?this.setupBindingObserver(t,i):this.store.set(t,i)}delete(t){this.assignedValues.delete(t),this.tearDownBindingObserver(t);const i=this.getRaw(t);i?this.hydrate(t,i):this.store.delete(t)}bind(){const t=mt.findParent(this);t&&t.appendChild(this);for(const i of this.assignedValues.keys())i.notify(this.target)}unbind(){this.parent&&Zo.get(this).removeChild(this)}appendChild(t){t.parent&&Zo.get(t).removeChild(t);const i=this.children.filter(s=>t.contains(s));Zo.set(t,this),this.children.push(t),i.forEach(s=>t.appendChild(s)),le.getNotifier(this.store).subscribe(t);for(const[s,n]of this.store.all())t.hydrate(s,this.bindingObservers.has(s)?this.getRaw(s):n)}removeChild(t){const i=this.children.indexOf(t);return i!==-1&&this.children.splice(i,1),le.getNotifier(this.store).unsubscribe(t),t.parent===this?Zo.delete(t):!1}contains(t){return Z0(this.target,t.target)}reflectToCSS(t){this.isReflecting(t)||(this.reflecting.add(t),mt.cssCustomPropertyReflector.startReflection(t,this.target))}stopReflectToCSS(t){this.isReflecting(t)&&(this.reflecting.delete(t),mt.cssCustomPropertyReflector.stopReflection(t,this.target))}isReflecting(t){return this.reflecting.has(t)}handleChange(t,i){const s=Ut.getTokenById(i);s&&this.hydrate(s,this.getRaw(s))}hydrate(t,i){if(!this.has(t)){const s=this.bindingObservers.get(t);Ut.isDerivedDesignTokenValue(i)?s?s.source!==i&&(this.tearDownBindingObserver(t),this.setupBindingObserver(t,i)):this.setupBindingObserver(t,i):(s&&this.tearDownBindingObserver(t),this.store.set(t,i))}}setupBindingObserver(t,i){const s=new sx(i,t,this);return this.bindingObservers.set(t,s),s}tearDownBindingObserver(t){return this.bindingObservers.has(t)?(this.bindingObservers.get(t).disconnect(),this.bindingObservers.delete(t),!0):!1}}mt.cssCustomPropertyReflector=new ix;h([_],mt.prototype,"children",void 0);function ox(e){return Ut.from(e)}const je=Object.freeze({create:ox,notifyConnection(e){return!e.isConnected||!mt.existsFor(e)?!1:(mt.getOrCreate(e).bind(),!0)},notifyDisconnection(e){return e.isConnected||!mt.existsFor(e)?!1:(mt.getOrCreate(e).unbind(),!0)},registerRoot(e=bs){Tt.registerRoot(e)},unregisterRoot(e=bs){Tt.unregisterRoot(e)}}),Dc=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),Rc=new Map,Da=new Map;let co=null;const Xo=ut.createInterface(e=>e.cachedCallback(t=>(co===null&&(co=new Qp(null,t)),co))),Xp=Object.freeze({tagFor(e){return Da.get(e)},responsibleFor(e){const t=e.$$designSystem$$;return t||ut.findResponsibleContainer(e).get(Xo)},getOrCreate(e){if(!e)return co===null&&(co=ut.getOrCreateDOMContainer().get(Xo)),co;const t=e.$$designSystem$$;if(t)return t;const i=ut.getOrCreateDOMContainer(e);if(i.has(Xo,!1))return i.get(Xo);{const s=new Qp(e,i);return i.register(yr.instance(Xo,s)),s}}});function rx(e,t,i){return typeof e=="string"?{name:e,type:t,callback:i}:e}class Qp{constructor(t,i){this.owner=t,this.container=i,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>Dc.definitionCallbackOnly,t!==null&&(t.$$designSystem$$=this)}withPrefix(t){return this.prefix=t,this}withShadowRootMode(t){return this.shadowRootMode=t,this}withElementDisambiguation(t){return this.disambiguate=t,this}withDesignTokenRoot(t){return this.designTokenRoot=t,this}register(...t){const i=this.container,s=[],n=this.disambiguate,o=this.shadowRootMode,r={elementPrefix:this.prefix,tryDefineElement(a,l,c){const u=rx(a,l,c),{name:d,callback:p,baseClass:b}=u;let{type:$}=u,x=d,k=Rc.get(x),F=!0;for(;k;){const M=n(x,$,k);switch(M){case Dc.ignoreDuplicate:return;case Dc.definitionCallbackOnly:F=!1,k=void 0;break;default:x=M,k=Rc.get(x);break}}F&&((Da.has($)||$===de)&&($=class extends ${}),Rc.set(x,$),Da.set($,x),b&&Da.set(b,x)),s.push(new ax(i,x,$,o,p,F))}};this.designTokensInitialized||(this.designTokensInitialized=!0,this.designTokenRoot!==null&&je.registerRoot(this.designTokenRoot)),i.registerWithContext(r,...t);for(const a of s)a.callback(a),a.willDefine&&a.definition!==null&&a.definition.define();return this}}class ax{constructor(t,i,s,n,o,r){this.container=t,this.name=i,this.type=s,this.shadowRootMode=n,this.callback=o,this.willDefine=r,this.definition=null}definePresentation(t){Yp.define(this.name,t,this.container)}defineElement(t){this.definition=new al(this.type,Object.assign(Object.assign({},t),{name:this.name}))}tagFor(t){return Xp.tagFor(t)}}const lx=(e,t)=>P`
    <div class="positioning-region" part="positioning-region">
        ${dt(i=>i.modal,P`
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
*/var Jp=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],cx=Jp.join(","),Kp=typeof Element>"u",$r=Kp?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,su=!Kp&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},ux=function(t,i){return t.tabIndex<0&&(i||/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||t.isContentEditable)&&isNaN(parseInt(t.getAttribute("tabindex"),10))?0:t.tabIndex},eg=function(t){return t.tagName==="INPUT"},dx=function(t){return eg(t)&&t.type==="hidden"},hx=function(t){var i=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(s){return s.tagName==="SUMMARY"});return i},fx=function(t,i){for(var s=0;s<t.length;s++)if(t[s].checked&&t[s].form===i)return t[s]},px=function(t){if(!t.name)return!0;var i=t.form||su(t),s=function(a){return i.querySelectorAll('input[type="radio"][name="'+a+'"]')},n;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")n=s(window.CSS.escape(t.name));else try{n=s(t.name)}catch(r){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",r.message),!1}var o=fx(n,t.form);return!o||o===t},gx=function(t){return eg(t)&&t.type==="radio"},mx=function(t){return gx(t)&&!px(t)},qh=function(t){var i=t.getBoundingClientRect(),s=i.width,n=i.height;return s===0&&n===0},vx=function(t,i){var s=i.displayCheck,n=i.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var o=$r.call(t,"details>summary:first-of-type"),r=o?t.parentElement:t;if($r.call(r,"details:not([open]) *"))return!0;var a=su(t).host,l=(a==null?void 0:a.ownerDocument.contains(a))||t.ownerDocument.contains(t);if(!s||s==="full"){if(typeof n=="function"){for(var c=t;t;){var u=t.parentElement,d=su(t);if(u&&!u.shadowRoot&&n(u)===!0)return qh(t);t.assignedSlot?t=t.assignedSlot:!u&&d!==t.ownerDocument?t=d.host:t=u}t=c}if(l)return!t.getClientRects().length}else if(s==="non-zero-area")return qh(t);return!1},bx=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var i=t.parentElement;i;){if(i.tagName==="FIELDSET"&&i.disabled){for(var s=0;s<i.children.length;s++){var n=i.children.item(s);if(n.tagName==="LEGEND")return $r.call(i,"fieldset[disabled] *")?!0:!n.contains(t)}return!0}i=i.parentElement}return!1},tg=function(t,i){return!(i.disabled||dx(i)||vx(i,t)||hx(i)||bx(i))},yx=function(t,i){return!(mx(i)||ux(i)<0||!tg(t,i))},Zh=function(t,i){if(i=i||{},!t)throw new Error("No node provided");return $r.call(t,cx)===!1?!1:yx(i,t)},xx=Jp.concat("iframe").join(","),Xh=function(t,i){if(i=i||{},!t)throw new Error("No node provided");return $r.call(t,xx)===!1?!1:tg(i,t)};class Ci extends de{constructor(){super(...arguments),this.modal=!0,this.hidden=!1,this.trapFocus=!0,this.trapFocusChanged=()=>{this.$fastController.isConnected&&this.updateTrapFocus()},this.isTrappingFocus=!1,this.handleDocumentKeydown=t=>{if(!t.defaultPrevented&&!this.hidden)switch(t.key){case Oo:this.dismiss(),t.preventDefault();break;case ul:this.handleTabKeyDown(t);break}},this.handleDocumentFocus=t=>{!t.defaultPrevented&&this.shouldForceFocus(t.target)&&(this.focusFirstElement(),t.preventDefault())},this.handleTabKeyDown=t=>{if(!this.trapFocus||this.hidden)return;const i=this.getTabQueueBounds();if(i.length!==0){if(i.length===1){i[0].focus(),t.preventDefault();return}t.shiftKey&&t.target===i[0]?(i[i.length-1].focus(),t.preventDefault()):!t.shiftKey&&t.target===i[i.length-1]&&(i[0].focus(),t.preventDefault())}},this.getTabQueueBounds=()=>{const t=[];return Ci.reduceTabbableItems(t,this)},this.focusFirstElement=()=>{const t=this.getTabQueueBounds();t.length>0?t[0].focus():this.dialog instanceof HTMLElement&&this.dialog.focus()},this.shouldForceFocus=t=>this.isTrappingFocus&&!this.contains(t),this.shouldTrapFocus=()=>this.trapFocus&&!this.hidden,this.updateTrapFocus=t=>{const i=t===void 0?this.shouldTrapFocus():t;i&&!this.isTrappingFocus?(this.isTrappingFocus=!0,document.addEventListener("focusin",this.handleDocumentFocus),ce.queueUpdate(()=>{this.shouldForceFocus(document.activeElement)&&this.focusFirstElement()})):!i&&this.isTrappingFocus&&(this.isTrappingFocus=!1,document.removeEventListener("focusin",this.handleDocumentFocus))}}dismiss(){this.$emit("dismiss"),this.$emit("cancel")}show(){this.hidden=!1}hide(){this.hidden=!0,this.$emit("close")}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.handleDocumentKeydown),this.notifier=le.getNotifier(this),this.notifier.subscribe(this,"hidden"),this.updateTrapFocus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeydown),this.updateTrapFocus(!1),this.notifier.unsubscribe(this,"hidden")}handleChange(t,i){switch(i){case"hidden":this.updateTrapFocus();break}}static reduceTabbableItems(t,i){return i.getAttribute("tabindex")==="-1"?t:Zh(i)||Ci.isFocusableFastElement(i)&&Ci.hasTabbableShadow(i)?(t.push(i),t):i.childElementCount?t.concat(Array.from(i.children).reduce(Ci.reduceTabbableItems,[])):t}static isFocusableFastElement(t){var i,s;return!!(!((s=(i=t.$fastController)===null||i===void 0?void 0:i.definition.shadowOptions)===null||s===void 0)&&s.delegatesFocus)}static hasTabbableShadow(t){var i,s;return Array.from((s=(i=t.shadowRoot)===null||i===void 0?void 0:i.querySelectorAll("*"))!==null&&s!==void 0?s:[]).some(n=>Zh(n))}}h([f({mode:"boolean"})],Ci.prototype,"modal",void 0);h([f({mode:"boolean"})],Ci.prototype,"hidden",void 0);h([f({attribute:"trap-focus",mode:"boolean"})],Ci.prototype,"trapFocus",void 0);h([f({attribute:"aria-describedby"})],Ci.prototype,"ariaDescribedby",void 0);h([f({attribute:"aria-labelledby"})],Ci.prototype,"ariaLabelledby",void 0);h([f({attribute:"aria-label"})],Ci.prototype,"ariaLabel",void 0);const wx=(e,t)=>P`
    <template role="${i=>i.role}" aria-orientation="${i=>i.orientation}"></template>
`,$x={separator:"separator",presentation:"presentation"};class ml extends de{constructor(){super(...arguments),this.role=$x.separator,this.orientation=gt.horizontal}}h([f],ml.prototype,"role",void 0);h([f],ml.prototype,"orientation",void 0);const nu={next:"next",previous:"previous"},kx=(e,t)=>P`
    <template
        role="button"
        aria-disabled="${i=>i.disabled?!0:void 0}"
        tabindex="${i=>i.hiddenFromAT?-1:0}"
        class="${i=>i.direction} ${i=>i.disabled?"disabled":""}"
        @keyup="${(i,s)=>i.keyupHandler(s.event)}"
    >
        ${dt(i=>i.direction===nu.next,P`
                <span part="next" class="next">
                    <slot name="next">
                        ${t.next||""}
                    </slot>
                </span>
            `)}
        ${dt(i=>i.direction===nu.previous,P`
                <span part="previous" class="previous">
                    <slot name="previous">
                        ${t.previous||""}
                    </slot>
                </span>
            `)}
    </template>
`;class vl extends de{constructor(){super(...arguments),this.hiddenFromAT=!0,this.direction=nu.next}keyupHandler(t){if(!this.hiddenFromAT){const i=t.key;(i==="Enter"||i==="Space")&&this.$emit("click",t),i==="Escape"&&this.blur()}}}h([f({mode:"boolean"})],vl.prototype,"disabled",void 0);h([f({attribute:"aria-hidden",converter:Mr})],vl.prototype,"hiddenFromAT",void 0);h([f],vl.prototype,"direction",void 0);const _x=(e,t)=>P`
    <template
        aria-checked="${i=>i.ariaChecked}"
        aria-disabled="${i=>i.ariaDisabled}"
        aria-posinset="${i=>i.ariaPosInSet}"
        aria-selected="${i=>i.ariaSelected}"
        aria-setsize="${i=>i.ariaSetSize}"
        class="${i=>[i.checked&&"checked",i.selected&&"selected",i.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${Xt(e,t)}
        <span class="content" part="content">
            <slot ${tt("content")}></slot>
        </span>
        ${Zt(e,t)}
    </template>
`;class Hr extends oi{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var t;return(t=this.options)===null||t===void 0?void 0:t.filter(i=>i.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(t,i){var s,n;this.ariaActiveDescendant=(n=(s=this.options[i])===null||s===void 0?void 0:s.id)!==null&&n!==void 0?n:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const t=this.activeOption;t&&(t.checked=!0)}checkFirstOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((i,s)=>{i.checked=oa(s,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((i,s)=>{i.checked=oa(s,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((i,s)=>{i.checked=oa(s,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.checkedOptions.length===1&&(this.rangeStartIndex+=1),this.options.forEach((i,s)=>{i.checked=oa(s,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(t){var i;if(!this.multiple)return super.clickHandler(t);const s=(i=t.target)===null||i===void 0?void 0:i.closest("[role=option]");if(!(!s||s.disabled))return this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(s),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(t){if(!this.multiple)return super.focusinHandler(t);!this.shouldSkipFocus&&t.target===t.currentTarget&&(this.uncheckAllOptions(),this.activeIndex===-1&&(this.activeIndex=this.firstSelectedOptionIndex!==-1?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(t){this.multiple&&this.uncheckAllOptions()}keydownHandler(t){if(!this.multiple)return super.keydownHandler(t);if(this.disabled)return!0;const{key:i,shiftKey:s}=t;switch(this.shouldSkipFocus=!1,i){case ls:{this.checkFirstOption(s);return}case Ti:{this.checkNextOption(s);return}case Fi:{this.checkPreviousOption(s);return}case cs:{this.checkLastOption(s);return}case ul:return this.focusAndScrollOptionIntoView(),!0;case Oo:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case An:if(t.preventDefault(),this.typeAheadExpired){this.toggleSelectedForAllCheckedOptions();return}default:return i.length===1&&this.handleTypeAhead(`${i}`),!0}}mousedownHandler(t){if(t.offsetX>=0&&t.offsetX<=this.scrollWidth)return super.mousedownHandler(t)}multipleChanged(t,i){var s;this.ariaMultiSelectable=i?"true":null,(s=this.options)===null||s===void 0||s.forEach(n=>{n.checked=i?!1:void 0}),this.setSelectedOptions()}setSelectedOptions(){if(!this.multiple){super.setSelectedOptions();return}this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(t=>t.selected),this.focusAndScrollOptionIntoView())}sizeChanged(t,i){var s;const n=Math.max(0,parseInt((s=i==null?void 0:i.toFixed())!==null&&s!==void 0?s:"",10));n!==i&&ce.queueUpdate(()=>{this.size=n})}toggleSelectedForAllCheckedOptions(){const t=this.checkedOptions.filter(s=>!s.disabled),i=!t.every(s=>s.selected);t.forEach(s=>s.selected=i),this.selectedIndex=this.options.indexOf(t[t.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(t,i){if(!this.multiple){super.typeaheadBufferChanged(t,i);return}if(this.$fastController.isConnected){const s=this.getTypeaheadMatches(),n=this.options.indexOf(s[0]);n>-1&&(this.activeIndex=n,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}uncheckAllOptions(t=!1){this.options.forEach(i=>i.checked=this.multiple?!1:void 0),t||(this.rangeStartIndex=-1)}}h([_],Hr.prototype,"activeIndex",void 0);h([f({mode:"boolean"})],Hr.prototype,"multiple",void 0);h([f({converter:q})],Hr.prototype,"size",void 0);const Sx=(e,t)=>P`
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
            ${tt({filter:Hr.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
        ></slot>
    </template>
`,Wt={menuitem:"menuitem",menuitemcheckbox:"menuitemcheckbox",menuitemradio:"menuitemradio"},Cx={[Wt.menuitem]:"menuitem",[Wt.menuitemcheckbox]:"menuitemcheckbox",[Wt.menuitemradio]:"menuitemradio"};class vi extends de{constructor(){super(...arguments),this.role=Wt.menuitem,this.hasSubmenu=!1,this.currentDirection=Xe.ltr,this.focusSubmenuOnLoad=!1,this.handleMenuItemKeyDown=t=>{if(t.defaultPrevented)return!1;switch(t.key){case Ts:case An:return this.invoke(),!1;case sn:return this.expandAndFocus(),!1;case tn:if(this.expanded)return this.expanded=!1,this.focus(),!1}return!0},this.handleMenuItemClick=t=>(t.defaultPrevented||this.disabled||this.invoke(),!1),this.submenuLoaded=()=>{this.focusSubmenuOnLoad&&(this.focusSubmenuOnLoad=!1,this.hasSubmenu&&(this.submenu.focus(),this.setAttribute("tabindex","-1")))},this.handleMouseOver=t=>(this.disabled||!this.hasSubmenu||this.expanded||(this.expanded=!0),!1),this.handleMouseOut=t=>(!this.expanded||this.contains(document.activeElement)||(this.expanded=!1),!1),this.expandAndFocus=()=>{this.hasSubmenu&&(this.focusSubmenuOnLoad=!0,this.expanded=!0)},this.invoke=()=>{if(!this.disabled)switch(this.role){case Wt.menuitemcheckbox:this.checked=!this.checked;break;case Wt.menuitem:this.updateSubmenu(),this.hasSubmenu?this.expandAndFocus():this.$emit("change");break;case Wt.menuitemradio:this.checked||(this.checked=!0);break}},this.updateSubmenu=()=>{this.submenu=this.domChildren().find(t=>t.getAttribute("role")==="menu"),this.hasSubmenu=this.submenu!==void 0}}expandedChanged(t){if(this.$fastController.isConnected){if(this.submenu===void 0)return;this.expanded===!1?this.submenu.collapseExpandedItem():this.currentDirection=Rn(this),this.$emit("expanded-change",this,{bubbles:!1})}}checkedChanged(t,i){this.$fastController.isConnected&&this.$emit("change")}connectedCallback(){super.connectedCallback(),ce.queueUpdate(()=>{this.updateSubmenu()}),this.startColumnCount||(this.startColumnCount=1),this.observer=new MutationObserver(this.updateSubmenu)}disconnectedCallback(){super.disconnectedCallback(),this.submenu=void 0,this.observer!==void 0&&(this.observer.disconnect(),this.observer=void 0)}domChildren(){return Array.from(this.children).filter(t=>!t.hasAttribute("hidden"))}}h([f({mode:"boolean"})],vi.prototype,"disabled",void 0);h([f({mode:"boolean"})],vi.prototype,"expanded",void 0);h([_],vi.prototype,"startColumnCount",void 0);h([f],vi.prototype,"role",void 0);h([f({mode:"boolean"})],vi.prototype,"checked",void 0);h([_],vi.prototype,"submenuRegion",void 0);h([_],vi.prototype,"hasSubmenu",void 0);h([_],vi.prototype,"currentDirection",void 0);h([_],vi.prototype,"submenu",void 0);st(vi,ni);const Ix=(e,t)=>P`
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
            ${dt(i=>i.role===Wt.menuitemcheckbox,P`
                    <div part="input-container" class="input-container">
                        <span part="checkbox" class="checkbox">
                            <slot name="checkbox-indicator">
                                ${t.checkboxIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
            ${dt(i=>i.role===Wt.menuitemradio,P`
                    <div part="input-container" class="input-container">
                        <span part="radio" class="radio">
                            <slot name="radio-indicator">
                                ${t.radioIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
        </div>
        ${Xt(e,t)}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${Zt(e,t)}
        ${dt(i=>i.hasSubmenu,P`
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
        ${dt(i=>i.expanded,P`
                <${e.tagFor(re)}
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
                </${e.tagFor(re)}>
            `)}
    </template>
`,Tx=(e,t)=>P`
    <template
        slot="${i=>i.slot?i.slot:i.isNestedMenu()?"submenu":void 0}"
        role="menu"
        @keydown="${(i,s)=>i.handleMenuKeyDown(s.event)}"
        @focusout="${(i,s)=>i.handleFocusOut(s.event)}"
    >
        <slot ${tt("items")}></slot>
    </template>
`;let bl=class ig extends de{constructor(){super(...arguments),this.expandedItem=null,this.focusIndex=-1,this.isNestedMenu=()=>this.parentElement!==null&&wo(this.parentElement)&&this.parentElement.getAttribute("role")==="menuitem",this.handleFocusOut=t=>{if(!this.contains(t.relatedTarget)&&this.menuItems!==void 0){this.collapseExpandedItem();const i=this.menuItems.findIndex(this.isFocusableElement);this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.menuItems[i].setAttribute("tabindex","0"),this.focusIndex=i}},this.handleItemFocus=t=>{const i=t.target;this.menuItems!==void 0&&i!==this.menuItems[this.focusIndex]&&(this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=this.menuItems.indexOf(i),i.setAttribute("tabindex","0"))},this.handleExpandedChanged=t=>{if(t.defaultPrevented||t.target===null||this.menuItems===void 0||this.menuItems.indexOf(t.target)<0)return;t.preventDefault();const i=t.target;if(this.expandedItem!==null&&i===this.expandedItem&&i.expanded===!1){this.expandedItem=null;return}i.expanded&&(this.expandedItem!==null&&this.expandedItem!==i&&(this.expandedItem.expanded=!1),this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.expandedItem=i,this.focusIndex=this.menuItems.indexOf(i),i.setAttribute("tabindex","0"))},this.removeItemListeners=()=>{this.menuItems!==void 0&&this.menuItems.forEach(t=>{t.removeEventListener("expanded-change",this.handleExpandedChanged),t.removeEventListener("focus",this.handleItemFocus)})},this.setItems=()=>{const t=this.domChildren();this.removeItemListeners(),this.menuItems=t;const i=this.menuItems.filter(this.isMenuItemElement);i.length&&(this.focusIndex=0);function s(o){const r=o.getAttribute("role"),a=o.querySelector("[slot=start]");return r!==Wt.menuitem&&a===null||r===Wt.menuitem&&a!==null?1:r!==Wt.menuitem&&a!==null?2:0}const n=i.reduce((o,r)=>{const a=s(r);return o>a?o:a},0);i.forEach((o,r)=>{o.setAttribute("tabindex",r===0?"0":"-1"),o.addEventListener("expanded-change",this.handleExpandedChanged),o.addEventListener("focus",this.handleItemFocus),o instanceof vi&&(o.startColumnCount=n)})},this.changeHandler=t=>{if(this.menuItems===void 0)return;const i=t.target,s=this.menuItems.indexOf(i);if(s!==-1&&i.role==="menuitemradio"&&i.checked===!0){for(let o=s-1;o>=0;--o){const r=this.menuItems[o],a=r.getAttribute("role");if(a===Wt.menuitemradio&&(r.checked=!1),a==="separator")break}const n=this.menuItems.length-1;for(let o=s+1;o<=n;++o){const r=this.menuItems[o],a=r.getAttribute("role");if(a===Wt.menuitemradio&&(r.checked=!1),a==="separator")break}}},this.isMenuItemElement=t=>wo(t)&&ig.focusableElementRoles.hasOwnProperty(t.getAttribute("role")),this.isFocusableElement=t=>this.isMenuItemElement(t)}itemsChanged(t,i){this.$fastController.isConnected&&this.menuItems!==void 0&&this.setItems()}connectedCallback(){super.connectedCallback(),ce.queueUpdate(()=>{this.setItems()}),this.addEventListener("change",this.changeHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeItemListeners(),this.menuItems=void 0,this.removeEventListener("change",this.changeHandler)}focus(){this.setFocus(0,1)}collapseExpandedItem(){this.expandedItem!==null&&(this.expandedItem.expanded=!1,this.expandedItem=null)}handleMenuKeyDown(t){if(!(t.defaultPrevented||this.menuItems===void 0))switch(t.key){case Ti:this.setFocus(this.focusIndex+1,1);return;case Fi:this.setFocus(this.focusIndex-1,-1);return;case cs:this.setFocus(this.menuItems.length-1,-1);return;case ls:this.setFocus(0,1);return;default:return!0}}domChildren(){return Array.from(this.children).filter(t=>!t.hasAttribute("hidden"))}setFocus(t,i){if(this.menuItems!==void 0)for(;t>=0&&t<this.menuItems.length;){const s=this.menuItems[t];if(this.isFocusableElement(s)){this.focusIndex>-1&&this.menuItems.length>=this.focusIndex-1&&this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=t,s.setAttribute("tabindex","0"),s.focus();break}t+=i}}};bl.focusableElementRoles=Cx;h([_],bl.prototype,"items",void 0);const Fx=(e,t)=>P`
    <template class="${i=>i.readOnly?"readonly":""}">
        <label
            part="label"
            for="control"
            class="${i=>i.defaultSlottedNodes&&i.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${tt("defaultSlottedNodes")}></slot>
        </label>
        <div class="root" part="root">
            ${Xt(e,t)}
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
            ${dt(i=>!i.hideStep&&!i.readOnly&&!i.disabled,P`
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
            ${Zt(e,t)}
        </div>
    </template>
`;class Dx extends de{}class Rx extends Fs(Dx){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const Ex={email:"email",password:"password",tel:"tel",text:"text",url:"url"};let ri=class extends Rx{constructor(){super(...arguments),this.type=Ex.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&ce.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};h([f({attribute:"readonly",mode:"boolean"})],ri.prototype,"readOnly",void 0);h([f({mode:"boolean"})],ri.prototype,"autofocus",void 0);h([f],ri.prototype,"placeholder",void 0);h([f],ri.prototype,"type",void 0);h([f],ri.prototype,"list",void 0);h([f({converter:q})],ri.prototype,"maxlength",void 0);h([f({converter:q})],ri.prototype,"minlength",void 0);h([f],ri.prototype,"pattern",void 0);h([f({converter:q})],ri.prototype,"size",void 0);h([f({mode:"boolean"})],ri.prototype,"spellcheck",void 0);h([_],ri.prototype,"defaultSlottedNodes",void 0);class yl{}st(yl,Je);st(ri,ni,yl);class Ox extends de{}class Px extends Fs(Ox){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let Qt=class extends Px{constructor(){super(...arguments),this.hideStep=!1,this.step=1,this.isUserInput=!1}maxChanged(t,i){var s;this.max=Math.max(i,(s=this.min)!==null&&s!==void 0?s:i);const n=Math.min(this.min,this.max);this.min!==void 0&&this.min!==n&&(this.min=n),this.value=this.getValidValue(this.value)}minChanged(t,i){var s;this.min=Math.min(i,(s=this.max)!==null&&s!==void 0?s:i);const n=Math.max(this.min,this.max);this.max!==void 0&&this.max!==n&&(this.max=n),this.value=this.getValidValue(this.value)}get valueAsNumber(){return parseFloat(super.value)}set valueAsNumber(t){this.value=t.toString()}valueChanged(t,i){this.value=this.getValidValue(i),i===this.value&&(this.control&&!this.isUserInput&&(this.control.value=this.value),super.valueChanged(t,this.value),t!==void 0&&!this.isUserInput&&(this.$emit("input"),this.$emit("change")),this.isUserInput=!1)}validate(){super.validate(this.control)}getValidValue(t){var i,s;let n=parseFloat(parseFloat(t).toPrecision(12));return isNaN(n)?n="":(n=Math.min(n,(i=this.max)!==null&&i!==void 0?i:n),n=Math.max(n,(s=this.min)!==null&&s!==void 0?s:n).toString()),n}stepUp(){const t=parseFloat(this.value),i=isNaN(t)?this.min>0?this.min:this.max<0?this.max:this.min?0:this.step:t+this.step;this.value=i.toString()}stepDown(){const t=parseFloat(this.value),i=isNaN(t)?this.min>0?this.min:this.max<0?this.max:this.min?0:0-this.step:t-this.step;this.value=i.toString()}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","number"),this.validate(),this.control.value=this.value,this.autofocus&&ce.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.control.value=this.control.value.replace(/[^0-9\-+e.]/g,""),this.isUserInput=!0,this.value=this.control.value}handleChange(){this.$emit("change")}handleKeyDown(t){switch(t.key){case Fi:return this.stepUp(),!1;case Ti:return this.stepDown(),!1}return!0}handleBlur(){this.control.value=this.value}};h([f({attribute:"readonly",mode:"boolean"})],Qt.prototype,"readOnly",void 0);h([f({mode:"boolean"})],Qt.prototype,"autofocus",void 0);h([f({attribute:"hide-step",mode:"boolean"})],Qt.prototype,"hideStep",void 0);h([f],Qt.prototype,"placeholder",void 0);h([f],Qt.prototype,"list",void 0);h([f({converter:q})],Qt.prototype,"maxlength",void 0);h([f({converter:q})],Qt.prototype,"minlength",void 0);h([f({converter:q})],Qt.prototype,"size",void 0);h([f({converter:q})],Qt.prototype,"step",void 0);h([f({converter:q})],Qt.prototype,"max",void 0);h([f({converter:q})],Qt.prototype,"min",void 0);h([_],Qt.prototype,"defaultSlottedNodes",void 0);st(Qt,ni,yl);const Qh=44,Lx=(e,t)=>P`
    <template
        role="progressbar"
        aria-valuenow="${i=>i.value}"
        aria-valuemin="${i=>i.min}"
        aria-valuemax="${i=>i.max}"
        class="${i=>i.paused?"paused":""}"
    >
        ${dt(i=>typeof i.value=="number",P`
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
                        style="stroke-dasharray: ${i=>Qh*i.percentComplete/100}px ${Qh}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `,P`
                <slot name="indeterminate" slot="indeterminate">
                    ${t.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`;class Mn extends de{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const t=typeof this.min=="number"?this.min:0,i=typeof this.max=="number"?this.max:100,s=typeof this.value=="number"?this.value:0,n=i-t;this.percentComplete=n===0?0:Math.fround((s-t)/n*100)}}h([f({converter:q})],Mn.prototype,"value",void 0);h([f({converter:q})],Mn.prototype,"min",void 0);h([f({converter:q})],Mn.prototype,"max",void 0);h([f({mode:"boolean"})],Mn.prototype,"paused",void 0);h([_],Mn.prototype,"percentComplete",void 0);const Ax=(e,t)=>P`
    <template
        role="progressbar"
        aria-valuenow="${i=>i.value}"
        aria-valuemin="${i=>i.min}"
        aria-valuemax="${i=>i.max}"
        class="${i=>i.paused?"paused":""}"
    >
        ${dt(i=>typeof i.value=="number",P`
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
                        ${t.indeterminateIndicator1||""}
                        ${t.indeterminateIndicator2||""}
                    </slot>
                </div>
            `)}
    </template>
`,Mx=(e,t)=>P`
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
            class="positioning-region ${i=>i.orientation===gt.horizontal?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${tt({property:"slottedRadioButtons",filter:_s("[role=radio]")})}
            ></slot>
        </div>
    </template>
`;class cn extends de{constructor(){super(...arguments),this.orientation=gt.horizontal,this.radioChangeHandler=t=>{const i=t.target;i.checked&&(this.slottedRadioButtons.forEach(s=>{s!==i&&(s.checked=!1,this.isInsideFoundationToolbar||s.setAttribute("tabindex","-1"))}),this.selectedRadio=i,this.value=i.value,i.setAttribute("tabindex","0"),this.focusedRadio=i),t.stopPropagation()},this.moveToRadioByIndex=(t,i)=>{const s=t[i];this.isInsideToolbar||(s.setAttribute("tabindex","0"),s.readOnly?this.slottedRadioButtons.forEach(n=>{n!==s&&n.setAttribute("tabindex","-1")}):(s.checked=!0,this.selectedRadio=s)),this.focusedRadio=s,s.focus()},this.moveRightOffGroup=()=>{var t;(t=this.nextElementSibling)===null||t===void 0||t.focus()},this.moveLeftOffGroup=()=>{var t;(t=this.previousElementSibling)===null||t===void 0||t.focus()},this.focusOutHandler=t=>{const i=this.slottedRadioButtons,s=t.target,n=s!==null?i.indexOf(s):0,o=this.focusedRadio?i.indexOf(this.focusedRadio):-1;return(o===0&&n===o||o===i.length-1&&o===n)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),i.forEach(r=>{r!==this.selectedRadio&&r.setAttribute("tabindex","-1")}))):(this.focusedRadio=i[0],this.focusedRadio.setAttribute("tabindex","0"),i.forEach(r=>{r!==this.focusedRadio&&r.setAttribute("tabindex","-1")}))),!0},this.clickHandler=t=>{const i=t.target;if(i){const s=this.slottedRadioButtons;i.checked||s.indexOf(i)===0?(i.setAttribute("tabindex","0"),this.selectedRadio=i):(i.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=i}t.preventDefault()},this.shouldMoveOffGroupToTheRight=(t,i,s)=>t===i.length&&this.isInsideToolbar&&s===sn,this.shouldMoveOffGroupToTheLeft=(t,i)=>(this.focusedRadio?t.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&i===tn,this.checkFocusedRadio=()=>{this.focusedRadio!==null&&!this.focusedRadio.readOnly&&!this.focusedRadio.checked&&(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=t=>{const i=this.slottedRadioButtons;let s=0;if(s=this.focusedRadio?i.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(s,i,t.key)){this.moveRightOffGroup();return}else s===i.length&&(s=0);for(;s<i.length&&i.length>1;)if(i[s].disabled){if(this.focusedRadio&&s===i.indexOf(this.focusedRadio))break;if(s+1>=i.length){if(this.isInsideToolbar)break;s=0}else s+=1}else{this.moveToRadioByIndex(i,s);break}},this.moveLeft=t=>{const i=this.slottedRadioButtons;let s=0;if(s=this.focusedRadio?i.indexOf(this.focusedRadio)-1:0,s=s<0?i.length-1:s,this.shouldMoveOffGroupToTheLeft(i,t.key)){this.moveLeftOffGroup();return}for(;s>=0&&i.length>1;)if(i[s].disabled){if(this.focusedRadio&&s===i.indexOf(this.focusedRadio))break;s-1<0?s=i.length-1:s-=1}else{this.moveToRadioByIndex(i,s);break}},this.keydownHandler=t=>{const i=t.key;if(i in so&&this.isInsideFoundationToolbar)return!0;switch(i){case Ts:{this.checkFocusedRadio();break}case sn:case Ti:{this.direction===Xe.ltr?this.moveRight(t):this.moveLeft(t);break}case tn:case Fi:{this.direction===Xe.ltr?this.moveLeft(t):this.moveRight(t);break}default:return!0}}}readOnlyChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(t=>{this.readOnly?t.readOnly=!0:t.readOnly=!1})}disabledChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(t=>{this.disabled?t.disabled=!0:t.disabled=!1})}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(t=>{t.setAttribute("name",this.name)})}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(t=>{t.value===this.value&&(t.checked=!0,this.selectedRadio=t)}),this.$emit("change")}slottedRadioButtonsChanged(t,i){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var t;return(t=this.parentToolbar)!==null&&t!==void 0?t:!1}get isInsideFoundationToolbar(){var t;return!!(!((t=this.parentToolbar)===null||t===void 0)&&t.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=Rn(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach(t=>{t.removeEventListener("change",this.radioChangeHandler)})}setupRadioButtons(){const t=this.slottedRadioButtons.filter(n=>n.hasAttribute("checked")),i=t?t.length:0;if(i>1){const n=t[i-1];n.checked=!0}let s=!1;if(this.slottedRadioButtons.forEach(n=>{this.name!==void 0&&n.setAttribute("name",this.name),this.disabled&&(n.disabled=!0),this.readOnly&&(n.readOnly=!0),this.value&&this.value===n.value?(this.selectedRadio=n,this.focusedRadio=n,n.checked=!0,n.setAttribute("tabindex","0"),s=!0):(this.isInsideFoundationToolbar||n.setAttribute("tabindex","-1"),n.checked=!1),n.addEventListener("change",this.radioChangeHandler)}),this.value===void 0&&this.slottedRadioButtons.length>0){const n=this.slottedRadioButtons.filter(r=>r.hasAttribute("checked")),o=n!==null?n.length:0;if(o>0&&!s){const r=n[o-1];r.checked=!0,this.focusedRadio=r,r.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}h([f({attribute:"readonly",mode:"boolean"})],cn.prototype,"readOnly",void 0);h([f({attribute:"disabled",mode:"boolean"})],cn.prototype,"disabled",void 0);h([f],cn.prototype,"name",void 0);h([f],cn.prototype,"value",void 0);h([f],cn.prototype,"orientation",void 0);h([_],cn.prototype,"childItems",void 0);h([_],cn.prototype,"slottedRadioButtons",void 0);const Vx=(e,t)=>P`
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
            <slot ${tt("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class Hx extends de{}class Nx extends qu(Hx){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class xl extends Nx{constructor(){super(),this.initialValue="on",this.keypressHandler=t=>{switch(t.key){case An:!this.checked&&!this.readOnly&&(this.checked=!0);return}return!0},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var t;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=(t=this.defaultChecked)!==null&&t!==void 0?t:!1,this.dirtyChecked=!1))}connectedCallback(){var t,i;super.connectedCallback(),this.validate(),((t=this.parentElement)===null||t===void 0?void 0:t.getAttribute("role"))!=="radiogroup"&&this.getAttribute("tabindex")===null&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=(i=this.defaultChecked)!==null&&i!==void 0?i:!1,this.dirtyChecked=!1))}isInsideRadioGroup(){return this.closest("[role=radiogroup]")!==null}clickHandler(t){!this.disabled&&!this.readOnly&&!this.checked&&(this.checked=!0)}}h([f({attribute:"readonly",mode:"boolean"})],xl.prototype,"readOnly",void 0);h([_],xl.prototype,"name",void 0);h([_],xl.prototype,"defaultSlottedNodes",void 0);let Es=class extends de{constructor(){super(...arguments),this.framesPerSecond=60,this.updatingItems=!1,this.speed=600,this.easing="ease-in-out",this.flippersHiddenFromAT=!1,this.scrolling=!1,this.resizeDetector=null}get frameTime(){return 1e3/this.framesPerSecond}scrollingChanged(t,i){if(this.scrollContainer){const s=this.scrolling==!0?"scrollstart":"scrollend";this.$emit(s,this.scrollContainer.scrollLeft)}}get isRtl(){return this.scrollItems.length>1&&this.scrollItems[0].offsetLeft>this.scrollItems[1].offsetLeft}connectedCallback(){super.connectedCallback(),this.initializeResizeDetector()}disconnectedCallback(){this.disconnectResizeDetector(),super.disconnectedCallback()}scrollItemsChanged(t,i){i&&!this.updatingItems&&ce.queueUpdate(()=>this.setStops())}disconnectResizeDetector(){this.resizeDetector&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.resized.bind(this)),this.resizeDetector.observe(this)}updateScrollStops(){this.updatingItems=!0;const t=this.scrollItems.reduce((i,s)=>s instanceof HTMLSlotElement?i.concat(s.assignedElements()):(i.push(s),i),[]);this.scrollItems=t,this.updatingItems=!1}setStops(){this.updateScrollStops();const{scrollContainer:t}=this,{scrollLeft:i}=t,{width:s,left:n}=t.getBoundingClientRect();this.width=s;let o=0,r=this.scrollItems.map((a,l)=>{const{left:c,width:u}=a.getBoundingClientRect(),d=Math.round(c+i-n),p=Math.round(d+u);return this.isRtl?-p:(o=p,l===0?0:d)}).concat(o);r=this.fixScrollMisalign(r),r.sort((a,l)=>Math.abs(a)-Math.abs(l)),this.scrollStops=r,this.setFlippers()}validateStops(t=!0){const i=()=>!!this.scrollStops.find(s=>s>0);return!i()&&t&&this.setStops(),i()}fixScrollMisalign(t){if(this.isRtl&&t.some(i=>i>0)){t.sort((s,n)=>n-s);const i=t[0];t=t.map(s=>s-i)}return t}setFlippers(){var t,i;const s=this.scrollContainer.scrollLeft;if((t=this.previousFlipperContainer)===null||t===void 0||t.classList.toggle("disabled",s===0),this.scrollStops){const n=Math.abs(this.scrollStops[this.scrollStops.length-1]);(i=this.nextFlipperContainer)===null||i===void 0||i.classList.toggle("disabled",this.validateStops(!1)&&Math.abs(s)+this.width>=n)}}scrollInView(t,i=0,s){var n;if(typeof t!="number"&&t&&(t=this.scrollItems.findIndex(o=>o===t||o.contains(t))),t!==void 0){s=s??i;const{scrollContainer:o,scrollStops:r,scrollItems:a}=this,{scrollLeft:l}=this.scrollContainer,{width:c}=o.getBoundingClientRect(),u=r[t],{width:d}=a[t].getBoundingClientRect(),p=u+d,b=l+i>u;if(b||l+c-s<p){const x=(n=[...r].sort((k,F)=>b?F-k:k-F).find(k=>b?k+i<u:k+c-(s??0)>p))!==null&&n!==void 0?n:0;this.scrollToPosition(x)}}}keyupHandler(t){switch(t.key){case"ArrowLeft":this.scrollToPrevious();break;case"ArrowRight":this.scrollToNext();break}}scrollToPrevious(){this.validateStops();const t=this.scrollContainer.scrollLeft,i=this.scrollStops.findIndex((o,r)=>o>=t&&(this.isRtl||r===this.scrollStops.length-1||this.scrollStops[r+1]>t)),s=Math.abs(this.scrollStops[i+1]);let n=this.scrollStops.findIndex(o=>Math.abs(o)+this.width>s);(n>=i||n===-1)&&(n=i>0?i-1:0),this.scrollToPosition(this.scrollStops[n],t)}scrollToNext(){this.validateStops();const t=this.scrollContainer.scrollLeft,i=this.scrollStops.findIndex(o=>Math.abs(o)>=Math.abs(t)),s=this.scrollStops.findIndex(o=>Math.abs(t)+this.width<=Math.abs(o));let n=i;s>i+2?n=s-2:i<this.scrollStops.length-2&&(n=i+1),this.scrollToPosition(this.scrollStops[n],t)}scrollToPosition(t,i=this.scrollContainer.scrollLeft){var s;if(this.scrolling)return;this.scrolling=!0;const n=(s=this.duration)!==null&&s!==void 0?s:`${Math.abs(t-i)/this.speed}s`;this.content.style.setProperty("transition-duration",n);const o=parseFloat(getComputedStyle(this.content).getPropertyValue("transition-duration")),r=c=>{c&&c.target!==c.currentTarget||(this.content.style.setProperty("transition-duration","0s"),this.content.style.removeProperty("transform"),this.scrollContainer.style.setProperty("scroll-behavior","auto"),this.scrollContainer.scrollLeft=t,this.setFlippers(),this.content.removeEventListener("transitionend",r),this.scrolling=!1)};if(o===0){r();return}this.content.addEventListener("transitionend",r);const a=this.scrollContainer.scrollWidth-this.scrollContainer.clientWidth;let l=this.scrollContainer.scrollLeft-Math.min(t,a);this.isRtl&&(l=this.scrollContainer.scrollLeft+Math.min(Math.abs(t),a)),this.content.style.setProperty("transition-property","transform"),this.content.style.setProperty("transition-timing-function",this.easing),this.content.style.setProperty("transform",`translateX(${l}px)`)}resized(){this.resizeTimeout&&(this.resizeTimeout=clearTimeout(this.resizeTimeout)),this.resizeTimeout=setTimeout(()=>{this.width=this.scrollContainer.offsetWidth,this.setFlippers()},this.frameTime)}scrolled(){this.scrollTimeout&&(this.scrollTimeout=clearTimeout(this.scrollTimeout)),this.scrollTimeout=setTimeout(()=>{this.setFlippers()},this.frameTime)}};h([f({converter:q})],Es.prototype,"speed",void 0);h([f],Es.prototype,"duration",void 0);h([f],Es.prototype,"easing",void 0);h([f({attribute:"flippers-hidden-from-at",converter:Mr})],Es.prototype,"flippersHiddenFromAT",void 0);h([_],Es.prototype,"scrolling",void 0);h([_],Es.prototype,"scrollItems",void 0);h([f({attribute:"view"})],Es.prototype,"view",void 0);const zx=(e,t)=>{var i,s;return P`
    <template
        class="horizontal-scroll"
        @keyup="${(n,o)=>n.keyupHandler(o.event)}"
    >
        ${Xt(e,t)}
        <div class="scroll-area" part="scroll-area">
            <div
                class="scroll-view"
                part="scroll-view"
                @scroll="${n=>n.scrolled()}"
                ${Ee("scrollContainer")}
            >
                <div class="content-container" part="content-container" ${Ee("content")}>
                    <slot
                        ${tt({property:"scrollItems",filter:_s()})}
                    ></slot>
                </div>
            </div>
            ${dt(n=>n.view!=="mobile",P`
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
        ${Zt(e,t)}
    </template>
`};function sg(e,t,i){return e.nodeType!==Node.TEXT_NODE?!0:typeof e.nodeValue=="string"&&!!e.nodeValue.trim().length}class Bx extends de{}class jx extends Fs(Bx){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let bi=class extends jx{readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.validate(),this.autofocus&&ce.queueUpdate(()=>{this.focus()})}validate(){super.validate(this.control)}handleTextInput(){this.value=this.control.value}handleClearInput(){this.value="",this.control.focus(),this.handleChange()}handleChange(){this.$emit("change")}};h([f({attribute:"readonly",mode:"boolean"})],bi.prototype,"readOnly",void 0);h([f({mode:"boolean"})],bi.prototype,"autofocus",void 0);h([f],bi.prototype,"placeholder",void 0);h([f],bi.prototype,"list",void 0);h([f({converter:q})],bi.prototype,"maxlength",void 0);h([f({converter:q})],bi.prototype,"minlength",void 0);h([f],bi.prototype,"pattern",void 0);h([f({converter:q})],bi.prototype,"size",void 0);h([f({mode:"boolean"})],bi.prototype,"spellcheck",void 0);h([_],bi.prototype,"defaultSlottedNodes",void 0);class ng{}st(ng,Je);st(bi,ni,ng);class Yx extends Hr{}class Ux extends Fs(Yx){constructor(){super(...arguments),this.proxy=document.createElement("select")}}let Os=class extends Ux{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=xr("listbox-"),this.maxHeight=0}openChanged(t,i){if(this.collapsible){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,ce.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||typeof this.size=="number")}get value(){return le.track(this,"value"),this._value}set value(t){var i,s,n,o,r,a,l;const c=`${this._value}`;if(!((i=this._options)===null||i===void 0)&&i.length){const u=this._options.findIndex(b=>b.value===t),d=(n=(s=this._options[this.selectedIndex])===null||s===void 0?void 0:s.value)!==null&&n!==void 0?n:null,p=(r=(o=this._options[u])===null||o===void 0?void 0:o.value)!==null&&r!==void 0?r:null;(u===-1||d!==p)&&(t="",this.selectedIndex=u),t=(l=(a=this.firstSelectedOption)===null||a===void 0?void 0:a.value)!==null&&l!==void 0?l:t}c!==t&&(this._value=t,super.valueChanged(c,t),le.notify(this,"value"),this.updateDisplayValue())}updateValue(t){var i,s;this.$fastController.isConnected&&(this.value=(s=(i=this.firstSelectedOption)===null||i===void 0?void 0:i.value)!==null&&s!==void 0?s:""),t&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(t,i){super.selectedIndexChanged(t,i),this.updateValue()}positionChanged(t,i){this.positionAttribute=i,this.setPositioning()}setPositioning(){const t=this.getBoundingClientRect(),s=window.innerHeight-t.bottom;this.position=this.forcedPosition?this.positionAttribute:t.top>s?lo.above:lo.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===lo.above?~~t.top:~~s}get displayValue(){var t,i;return le.track(this,"displayValue"),(i=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.text)!==null&&i!==void 0?i:""}disabledChanged(t,i){super.disabledChanged&&super.disabledChanged(t,i),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),this.selectedIndex===-1&&(this.selectedIndex=0)}clickHandler(t){if(!this.disabled){if(this.open){const i=t.target.closest("option,[role=option]");if(i&&i.disabled)return}return super.clickHandler(t),this.open=this.collapsible&&!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(t){var i;if(super.focusoutHandler(t),!this.open)return!0;const s=t.relatedTarget;if(this.isSameNode(s)){this.focus();return}!((i=this.options)===null||i===void 0)&&i.includes(s)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(t,i){super.handleChange(t,i),i==="value"&&this.updateValue()}slottedOptionsChanged(t,i){this.options.forEach(s=>{le.getNotifier(s).unsubscribe(this,"value")}),super.slottedOptionsChanged(t,i),this.options.forEach(s=>{le.getNotifier(s).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(t){var i;return t.offsetX>=0&&t.offsetX<=((i=this.listbox)===null||i===void 0?void 0:i.scrollWidth)?super.mousedownHandler(t):this.collapsible}multipleChanged(t,i){super.multipleChanged(t,i),this.proxy&&(this.proxy.multiple=i)}selectedOptionsChanged(t,i){var s;super.selectedOptionsChanged(t,i),(s=this.options)===null||s===void 0||s.forEach((n,o)=>{var r;const a=(r=this.proxy)===null||r===void 0?void 0:r.options.item(o);a&&(a.selected=n.selected)})}setDefaultSelectedOption(){var t;const i=(t=this.options)!==null&&t!==void 0?t:Array.from(this.children).filter(oi.slottedOptionFilter),s=i==null?void 0:i.findIndex(n=>n.hasAttribute("selected")||n.selected||n.value===this.value);if(s!==-1){this.selectedIndex=s;return}this.selectedIndex=0}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(t=>{const i=t.proxy||(t instanceof HTMLOptionElement?t.cloneNode():null);i&&this.proxy.options.add(i)}))}keydownHandler(t){super.keydownHandler(t);const i=t.key||t.key.charCodeAt(0);switch(i){case An:{t.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break}case ls:case cs:{t.preventDefault();break}case Ts:{t.preventDefault(),this.open=!this.open;break}case Oo:{this.collapsible&&this.open&&(t.preventDefault(),this.open=!1);break}case ul:return this.collapsible&&this.open&&(t.preventDefault(),this.open=!1),!0}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(i===Ti||i===Fi)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(t,i){super.sizeChanged(t,i),this.proxy&&(this.proxy.size=i)}updateDisplayValue(){this.collapsible&&le.notify(this,"displayValue")}};h([f({attribute:"open",mode:"boolean"})],Os.prototype,"open",void 0);h([oy],Os.prototype,"collapsible",null);h([_],Os.prototype,"control",void 0);h([f({attribute:"position"})],Os.prototype,"positionAttribute",void 0);h([_],Os.prototype,"position",void 0);h([_],Os.prototype,"maxHeight",void 0);class Xu{}h([_],Xu.prototype,"ariaControls",void 0);st(Xu,ln);st(Os,ni,Xu);const Wx=(e,t)=>P`
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
        ${dt(i=>i.collapsible,P`
                <div
                    class="control"
                    part="control"
                    ?disabled="${i=>i.disabled}"
                    ${Ee("control")}
                >
                    ${Xt(e,t)}
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
                    ${Zt(e,t)}
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
                ${tt({filter:oi.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,Gx=(e,t)=>P`
    <template
        class="${i=>i.shape==="circle"?"circle":"rect"}"
        pattern="${i=>i.pattern}"
        ?shimmer="${i=>i.shimmer}"
    >
        ${dt(i=>i.shimmer===!0,P`
                <span class="shimmer"></span>
            `)}
        <object type="image/svg+xml" data="${i=>i.pattern}" role="presentation">
            <img class="pattern" src="${i=>i.pattern}" />
        </object>
        <slot></slot>
    </template>
`;class Nr extends de{constructor(){super(...arguments),this.shape="rect"}}h([f],Nr.prototype,"fill",void 0);h([f],Nr.prototype,"shape",void 0);h([f],Nr.prototype,"pattern",void 0);h([f({mode:"boolean"})],Nr.prototype,"shimmer",void 0);const qx=(e,t)=>P`
    <template
        aria-disabled="${i=>i.disabled}"
        class="${i=>i.sliderOrientation||gt.horizontal}
            ${i=>i.disabled?"disabled":""}"
    >
        <div ${Ee("root")} part="root" class="root" style="${i=>i.positionStyle}">
            <div class="container">
                ${dt(i=>!i.hideMark,P`
                        <div class="mark"></div>
                    `)}
                <div class="label">
                    <slot></slot>
                </div>
            </div>
        </div>
    </template>
`;function ou(e,t,i,s){let n=dl(0,1,(e-t)/(i-t));return s===Xe.rtl&&(n=1-n),n}const la={min:0,max:0,direction:Xe.ltr,orientation:gt.horizontal,disabled:!1};class Ps extends de{constructor(){super(...arguments),this.hideMark=!1,this.sliderDirection=Xe.ltr,this.getSliderConfiguration=()=>{if(!this.isSliderConfig(this.parentNode))this.sliderDirection=la.direction||Xe.ltr,this.sliderOrientation=la.orientation,this.sliderMaxPosition=la.max,this.sliderMinPosition=la.min;else{const t=this.parentNode,{min:i,max:s,direction:n,orientation:o,disabled:r}=t;r!==void 0&&(this.disabled=r),this.sliderDirection=n||Xe.ltr,this.sliderOrientation=o||gt.horizontal,this.sliderMaxPosition=s,this.sliderMinPosition=i}},this.positionAsStyle=()=>{const t=this.sliderDirection?this.sliderDirection:Xe.ltr,i=ou(Number(this.position),Number(this.sliderMinPosition),Number(this.sliderMaxPosition));let s=Math.round((1-i)*100),n=Math.round(i*100);return Number.isNaN(n)&&Number.isNaN(s)&&(s=50,n=50),this.sliderOrientation===gt.horizontal?t===Xe.rtl?`right: ${n}%; left: ${s}%;`:`left: ${n}%; right: ${s}%;`:`top: ${n}%; bottom: ${s}%;`}}positionChanged(){this.positionStyle=this.positionAsStyle()}sliderOrientationChanged(){}connectedCallback(){super.connectedCallback(),this.getSliderConfiguration(),this.positionStyle=this.positionAsStyle(),this.notifier=le.getNotifier(this.parentNode),this.notifier.subscribe(this,"orientation"),this.notifier.subscribe(this,"direction"),this.notifier.subscribe(this,"max"),this.notifier.subscribe(this,"min")}disconnectedCallback(){super.disconnectedCallback(),this.notifier.unsubscribe(this,"orientation"),this.notifier.unsubscribe(this,"direction"),this.notifier.unsubscribe(this,"max"),this.notifier.unsubscribe(this,"min")}handleChange(t,i){switch(i){case"direction":this.sliderDirection=t.direction;break;case"orientation":this.sliderOrientation=t.orientation;break;case"max":this.sliderMaxPosition=t.max;break;case"min":this.sliderMinPosition=t.min;break}this.positionStyle=this.positionAsStyle()}isSliderConfig(t){return t.max!==void 0&&t.min!==void 0}}h([_],Ps.prototype,"positionStyle",void 0);h([f],Ps.prototype,"position",void 0);h([f({attribute:"hide-mark",mode:"boolean"})],Ps.prototype,"hideMark",void 0);h([f({attribute:"disabled",mode:"boolean"})],Ps.prototype,"disabled",void 0);h([_],Ps.prototype,"sliderOrientation",void 0);h([_],Ps.prototype,"sliderMinPosition",void 0);h([_],Ps.prototype,"sliderMaxPosition",void 0);h([_],Ps.prototype,"sliderDirection",void 0);const Zx=(e,t)=>P`
    <template
        role="slider"
        class="${i=>i.readOnly?"readonly":""}
        ${i=>i.orientation||gt.horizontal}"
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
`;class Xx extends de{}class Qx extends Fs(Xx){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const Jx={singleValue:"single-value"};class Nt extends Qx{constructor(){super(...arguments),this.direction=Xe.ltr,this.isDragging=!1,this.trackWidth=0,this.trackMinWidth=0,this.trackHeight=0,this.trackLeft=0,this.trackMinHeight=0,this.valueTextFormatter=()=>null,this.min=0,this.max=10,this.step=1,this.orientation=gt.horizontal,this.mode=Jx.singleValue,this.keypressHandler=t=>{if(!this.readOnly){if(t.key===ls)t.preventDefault(),this.value=`${this.min}`;else if(t.key===cs)t.preventDefault(),this.value=`${this.max}`;else if(!t.shiftKey)switch(t.key){case sn:case Fi:t.preventDefault(),this.increment();break;case tn:case Ti:t.preventDefault(),this.decrement();break}}},this.setupTrackConstraints=()=>{const t=this.track.getBoundingClientRect();this.trackWidth=this.track.clientWidth,this.trackMinWidth=this.track.clientLeft,this.trackHeight=t.bottom,this.trackMinHeight=t.top,this.trackLeft=this.getBoundingClientRect().left,this.trackWidth===0&&(this.trackWidth=1)},this.setupListeners=(t=!1)=>{const i=`${t?"remove":"add"}EventListener`;this[i]("keydown",this.keypressHandler),this[i]("mousedown",this.handleMouseDown),this.thumb[i]("mousedown",this.handleThumbMouseDown,{passive:!0}),this.thumb[i]("touchstart",this.handleThumbMouseDown,{passive:!0}),t&&(this.handleMouseDown(null),this.handleThumbMouseDown(null))},this.initialValue="",this.handleThumbMouseDown=t=>{if(t){if(this.readOnly||this.disabled||t.defaultPrevented)return;t.target.focus()}const i=`${t!==null?"add":"remove"}EventListener`;window[i]("mouseup",this.handleWindowMouseUp),window[i]("mousemove",this.handleMouseMove,{passive:!0}),window[i]("touchmove",this.handleMouseMove,{passive:!0}),window[i]("touchend",this.handleWindowMouseUp),this.isDragging=t!==null},this.handleMouseMove=t=>{if(this.readOnly||this.disabled||t.defaultPrevented)return;const i=window.TouchEvent&&t instanceof TouchEvent?t.touches[0]:t,s=this.orientation===gt.horizontal?i.pageX-document.documentElement.scrollLeft-this.trackLeft:i.pageY-document.documentElement.scrollTop;this.value=`${this.calculateNewValue(s)}`},this.calculateNewValue=t=>{const i=ou(t,this.orientation===gt.horizontal?this.trackMinWidth:this.trackMinHeight,this.orientation===gt.horizontal?this.trackWidth:this.trackHeight,this.direction),s=(this.max-this.min)*i+this.min;return this.convertToConstrainedValue(s)},this.handleWindowMouseUp=t=>{this.stopDragging()},this.stopDragging=()=>{this.isDragging=!1,this.handleMouseDown(null),this.handleThumbMouseDown(null)},this.handleMouseDown=t=>{const i=`${t!==null?"add":"remove"}EventListener`;if((t===null||!this.disabled&&!this.readOnly)&&(window[i]("mouseup",this.handleWindowMouseUp),window.document[i]("mouseleave",this.handleWindowMouseUp),window[i]("mousemove",this.handleMouseMove),t)){t.preventDefault(),this.setupTrackConstraints(),t.target.focus();const s=this.orientation===gt.horizontal?t.pageX-document.documentElement.scrollLeft-this.trackLeft:t.pageY-document.documentElement.scrollTop;this.value=`${this.calculateNewValue(s)}`}},this.convertToConstrainedValue=t=>{isNaN(t)&&(t=this.min);let i=t-this.min;const s=Math.round(i/this.step),n=i-s*(this.stepMultiplier*this.step)/this.stepMultiplier;return i=n>=Number(this.step)/2?i-n+Number(this.step):i-n,i+this.min}}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}get valueAsNumber(){return parseFloat(super.value)}set valueAsNumber(t){this.value=t.toString()}valueChanged(t,i){super.valueChanged(t,i),this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction),this.$emit("change")}minChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.min=`${this.min}`),this.validate()}maxChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.max=`${this.max}`),this.validate()}stepChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.step=`${this.step}`),this.updateStepMultiplier(),this.validate()}orientationChanged(){this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","range"),this.direction=Rn(this),this.updateStepMultiplier(),this.setupTrackConstraints(),this.setupListeners(),this.setupDefaultValue(),this.setThumbPositionForOrientation(this.direction)}disconnectedCallback(){this.setupListeners(!0)}increment(){const t=this.direction!==Xe.rtl&&this.orientation!==gt.vertical?Number(this.value)+Number(this.step):Number(this.value)-Number(this.step),i=this.convertToConstrainedValue(t),s=i<Number(this.max)?`${i}`:`${this.max}`;this.value=s}decrement(){const t=this.direction!==Xe.rtl&&this.orientation!==gt.vertical?Number(this.value)-Number(this.step):Number(this.value)+Number(this.step),i=this.convertToConstrainedValue(t),s=i>Number(this.min)?`${i}`:`${this.min}`;this.value=s}setThumbPositionForOrientation(t){const s=(1-ou(Number(this.value),Number(this.min),Number(this.max),t))*100;this.orientation===gt.horizontal?this.position=this.isDragging?`right: ${s}%; transition: none;`:`right: ${s}%; transition: all 0.2s ease;`:this.position=this.isDragging?`bottom: ${s}%; transition: none;`:`bottom: ${s}%; transition: all 0.2s ease;`}updateStepMultiplier(){const t=this.step+"",i=this.step%1?t.length-t.indexOf(".")-1:0;this.stepMultiplier=Math.pow(10,i)}get midpoint(){return`${this.convertToConstrainedValue((this.max+this.min)/2)}`}setupDefaultValue(){if(typeof this.value=="string")if(this.value.length===0)this.initialValue=this.midpoint;else{const t=parseFloat(this.value);!Number.isNaN(t)&&(t<this.min||t>this.max)&&(this.value=this.midpoint)}}}h([f({attribute:"readonly",mode:"boolean"})],Nt.prototype,"readOnly",void 0);h([_],Nt.prototype,"direction",void 0);h([_],Nt.prototype,"isDragging",void 0);h([_],Nt.prototype,"position",void 0);h([_],Nt.prototype,"trackWidth",void 0);h([_],Nt.prototype,"trackMinWidth",void 0);h([_],Nt.prototype,"trackHeight",void 0);h([_],Nt.prototype,"trackLeft",void 0);h([_],Nt.prototype,"trackMinHeight",void 0);h([_],Nt.prototype,"valueTextFormatter",void 0);h([f({converter:q})],Nt.prototype,"min",void 0);h([f({converter:q})],Nt.prototype,"max",void 0);h([f({converter:q})],Nt.prototype,"step",void 0);h([f],Nt.prototype,"orientation",void 0);h([f],Nt.prototype,"mode",void 0);const Kx=(e,t)=>P`
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
            <slot ${tt("defaultSlottedNodes")}></slot>
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
`;class ew extends de{}class tw extends qu(ew){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Qu extends tw{constructor(){super(),this.initialValue="on",this.keypressHandler=t=>{if(!this.readOnly)switch(t.key){case Ts:case An:this.checked=!this.checked;break}},this.clickHandler=t=>{!this.disabled&&!this.readOnly&&(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly),this.readOnly?this.classList.add("readonly"):this.classList.remove("readonly")}checkedChanged(t,i){super.checkedChanged(t,i),this.checked?this.classList.add("checked"):this.classList.remove("checked")}}h([f({attribute:"readonly",mode:"boolean"})],Qu.prototype,"readOnly",void 0);h([_],Qu.prototype,"defaultSlottedNodes",void 0);const iw=(e,t)=>P`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`;class sw extends de{}const nw=(e,t)=>P`
    <template slot="tab" role="tab" aria-disabled="${i=>i.disabled}">
        <slot></slot>
    </template>
`;class og extends de{}h([f({mode:"boolean"})],og.prototype,"disabled",void 0);const ow=(e,t)=>P`
    <template class="${i=>i.orientation}">
        ${Xt(e,t)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${tt("tabs")}></slot>

            ${dt(i=>i.showActiveIndicator,P`
                    <div
                        ${Ee("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${Zt(e,t)}
        <div class="tabpanel" part="tabpanel">
            <slot name="tabpanel" ${tt("tabpanels")}></slot>
        </div>
    </template>
`,Jh={vertical:"vertical",horizontal:"horizontal"};class Ls extends de{constructor(){super(...arguments),this.orientation=Jh.horizontal,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=t=>t.getAttribute("aria-disabled")==="true",this.isHiddenElement=t=>t.hasAttribute("hidden"),this.isFocusableElement=t=>!this.isDisabledElement(t)&&!this.isHiddenElement(t),this.setTabs=()=>{const t="gridColumn",i="gridRow",s=this.isHorizontal()?t:i;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach((n,o)=>{if(n.slot==="tab"){const r=this.activeTabIndex===o&&this.isFocusableElement(n);this.activeindicator&&this.isFocusableElement(n)&&(this.showActiveIndicator=!0);const a=this.tabIds[o],l=this.tabpanelIds[o];n.setAttribute("id",a),n.setAttribute("aria-selected",r?"true":"false"),n.setAttribute("aria-controls",l),n.addEventListener("click",this.handleTabClick),n.addEventListener("keydown",this.handleTabKeyDown),n.setAttribute("tabindex",r?"0":"-1"),r&&(this.activetab=n,this.activeid=a)}n.style[t]="",n.style[i]="",n.style[s]=`${o+1}`,this.isHorizontal()?n.classList.remove("vertical"):n.classList.add("vertical")})},this.setTabPanels=()=>{this.tabpanels.forEach((t,i)=>{const s=this.tabIds[i],n=this.tabpanelIds[i];t.setAttribute("id",n),t.setAttribute("aria-labelledby",s),this.activeTabIndex!==i?t.setAttribute("hidden",""):t.removeAttribute("hidden")})},this.handleTabClick=t=>{const i=t.currentTarget;i.nodeType===1&&this.isFocusableElement(i)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(i),this.setComponent())},this.handleTabKeyDown=t=>{if(this.isHorizontal())switch(t.key){case tn:t.preventDefault(),this.adjustBackward(t);break;case sn:t.preventDefault(),this.adjustForward(t);break}else switch(t.key){case Fi:t.preventDefault(),this.adjustBackward(t);break;case Ti:t.preventDefault(),this.adjustForward(t);break}switch(t.key){case ls:t.preventDefault(),this.adjust(-this.activeTabIndex);break;case cs:t.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1);break}},this.adjustForward=t=>{const i=this.tabs;let s=0;for(s=this.activetab?i.indexOf(this.activetab)+1:1,s===i.length&&(s=0);s<i.length&&i.length>1;)if(this.isFocusableElement(i[s])){this.moveToTabByIndex(i,s);break}else{if(this.activetab&&s===i.indexOf(this.activetab))break;s+1>=i.length?s=0:s+=1}},this.adjustBackward=t=>{const i=this.tabs;let s=0;for(s=this.activetab?i.indexOf(this.activetab)-1:0,s=s<0?i.length-1:s;s>=0&&i.length>1;)if(this.isFocusableElement(i[s])){this.moveToTabByIndex(i,s);break}else s-1<0?s=i.length-1:s-=1},this.moveToTabByIndex=(t,i)=>{const s=t[i];this.activetab=s,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=i,s.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(t,i){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex(s=>s.id===t),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return this.activeid!==void 0?this.tabIds.indexOf(this.activeid)===-1?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map(t=>{var i;return(i=t.getAttribute("id"))!==null&&i!==void 0?i:`tab-${xr()}`})}getTabPanelIds(){return this.tabpanels.map(t=>{var i;return(i=t.getAttribute("id"))!==null&&i!==void 0?i:`panel-${xr()}`})}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===Jh.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const t=this.isHorizontal()?"gridColumn":"gridRow",i=this.isHorizontal()?"translateX":"translateY",s=this.isHorizontal()?"offsetLeft":"offsetTop",n=this.activeIndicatorRef[s];this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`;const o=this.activeIndicatorRef[s];this.activeIndicatorRef.style[t]=`${this.prevActiveTabIndex+1}`;const r=o-n;this.activeIndicatorRef.style.transform=`${i}(${r}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",()=>{this.ticking=!1,this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${i}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")})}adjust(t){const i=this.tabs.filter(r=>this.isFocusableElement(r)),s=i.indexOf(this.activetab),n=dl(0,i.length-1,s+t),o=this.tabs.indexOf(i[n]);o>-1&&this.moveToTabByIndex(this.tabs,o)}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}h([f],Ls.prototype,"orientation",void 0);h([f],Ls.prototype,"activeid",void 0);h([_],Ls.prototype,"tabs",void 0);h([_],Ls.prototype,"tabpanels",void 0);h([f({mode:"boolean"})],Ls.prototype,"activeindicator",void 0);h([_],Ls.prototype,"activeIndicatorRef",void 0);h([_],Ls.prototype,"showActiveIndicator",void 0);st(Ls,ni);class rw extends de{}class aw extends Fs(rw){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}const rg={none:"none",both:"both",horizontal:"horizontal",vertical:"vertical"};let zt=class extends aw{constructor(){super(...arguments),this.resize=rg.none,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};h([f({mode:"boolean"})],zt.prototype,"readOnly",void 0);h([f],zt.prototype,"resize",void 0);h([f({mode:"boolean"})],zt.prototype,"autofocus",void 0);h([f({attribute:"form"})],zt.prototype,"formId",void 0);h([f],zt.prototype,"list",void 0);h([f({converter:q})],zt.prototype,"maxlength",void 0);h([f({converter:q})],zt.prototype,"minlength",void 0);h([f],zt.prototype,"name",void 0);h([f],zt.prototype,"placeholder",void 0);h([f({converter:q,mode:"fromView"})],zt.prototype,"cols",void 0);h([f({converter:q,mode:"fromView"})],zt.prototype,"rows",void 0);h([f({mode:"boolean"})],zt.prototype,"spellcheck",void 0);h([_],zt.prototype,"defaultSlottedNodes",void 0);st(zt,yl);const lw=(e,t)=>P`
    <template
        class="
            ${i=>i.readOnly?"readonly":""}
            ${i=>i.resize!==rg.none?`resize-${i.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${i=>i.defaultSlottedNodes&&i.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${tt("defaultSlottedNodes")}></slot>
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
`,cw=(e,t)=>P`
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
                ${tt({property:"defaultSlottedNodes",filter:sg})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${Xt(e,t)}
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
            ${Zt(e,t)}
        </div>
    </template>
`,uw=(e,t)=>P`
    <template
        aria-label="${i=>i.ariaLabel}"
        aria-labelledby="${i=>i.ariaLabelledby}"
        aria-orientation="${i=>i.orientation}"
        orientation="${i=>i.orientation}"
        role="toolbar"
        @click="${(i,s)=>i.clickHandler(s.event)}"
        @focusin="${(i,s)=>i.focusinHandler(s.event)}"
        @keydown="${(i,s)=>i.keydownHandler(s.event)}"
        ${cl({property:"childItems",attributeFilter:["disabled","hidden"],filter:_s(),subtree:!0})}
    >
        <slot name="label"></slot>
        <div class="positioning-region" part="positioning-region">
            ${Xt(e,t)}
            <slot
                ${tt({filter:_s(),property:"slottedItems"})}
            ></slot>
            ${Zt(e,t)}
        </div>
    </template>
`,Kh=Object.freeze({[so.ArrowUp]:{[gt.vertical]:-1},[so.ArrowDown]:{[gt.vertical]:1},[so.ArrowLeft]:{[gt.horizontal]:{[Xe.ltr]:-1,[Xe.rtl]:1}},[so.ArrowRight]:{[gt.horizontal]:{[Xe.ltr]:1,[Xe.rtl]:-1}}});let un=class ru extends de{constructor(){super(...arguments),this._activeIndex=0,this.direction=Xe.ltr,this.orientation=gt.horizontal}get activeIndex(){return le.track(this,"activeIndex"),this._activeIndex}set activeIndex(t){this.$fastController.isConnected&&(this._activeIndex=dl(0,this.focusableElements.length-1,t),le.notify(this,"activeIndex"))}slottedItemsChanged(){this.$fastController.isConnected&&this.reduceFocusableElements()}clickHandler(t){var i;const s=(i=this.focusableElements)===null||i===void 0?void 0:i.indexOf(t.target);return s>-1&&this.activeIndex!==s&&this.setFocusedElement(s),!0}childItemsChanged(t,i){this.$fastController.isConnected&&this.reduceFocusableElements()}connectedCallback(){super.connectedCallback(),this.direction=Rn(this)}focusinHandler(t){const i=t.relatedTarget;!i||this.contains(i)||this.setFocusedElement()}getDirectionalIncrementer(t){var i,s,n,o,r;return(r=(n=(s=(i=Kh[t])===null||i===void 0?void 0:i[this.orientation])===null||s===void 0?void 0:s[this.direction])!==null&&n!==void 0?n:(o=Kh[t])===null||o===void 0?void 0:o[this.orientation])!==null&&r!==void 0?r:0}keydownHandler(t){const i=t.key;if(!(i in so)||t.defaultPrevented||t.shiftKey)return!0;const s=this.getDirectionalIncrementer(i);if(!s)return!t.target.closest("[role=radiogroup]");const n=this.activeIndex+s;return this.focusableElements[n]&&t.preventDefault(),this.setFocusedElement(n),!0}get allSlottedItems(){return[...this.start.assignedElements(),...this.slottedItems,...this.end.assignedElements()]}reduceFocusableElements(){var t;const i=(t=this.focusableElements)===null||t===void 0?void 0:t[this.activeIndex];this.focusableElements=this.allSlottedItems.reduce(ru.reduceFocusableItems,[]);const s=this.focusableElements.indexOf(i);this.activeIndex=Math.max(0,s),this.setFocusableElements()}setFocusedElement(t=this.activeIndex){var i;this.activeIndex=t,this.setFocusableElements(),(i=this.focusableElements[this.activeIndex])===null||i===void 0||i.focus()}static reduceFocusableItems(t,i){var s,n,o,r;const a=i.getAttribute("role")==="radio",l=(n=(s=i.$fastController)===null||s===void 0?void 0:s.definition.shadowOptions)===null||n===void 0?void 0:n.delegatesFocus,c=Array.from((r=(o=i.shadowRoot)===null||o===void 0?void 0:o.querySelectorAll("*"))!==null&&r!==void 0?r:[]).some(u=>Xh(u));return!i.hasAttribute("disabled")&&!i.hasAttribute("hidden")&&(Xh(i)||a||l||c)?(t.push(i),t):i.childElementCount?t.concat(Array.from(i.children).reduce(ru.reduceFocusableItems,[])):t}setFocusableElements(){this.$fastController.isConnected&&this.focusableElements.length>0&&this.focusableElements.forEach((t,i)=>{t.tabIndex=this.activeIndex===i?0:-1})}};h([_],un.prototype,"direction",void 0);h([f],un.prototype,"orientation",void 0);h([_],un.prototype,"slottedItems",void 0);h([_],un.prototype,"slottedLabel",void 0);h([_],un.prototype,"childItems",void 0);class wl{}h([f({attribute:"aria-labelledby"})],wl.prototype,"ariaLabelledby",void 0);h([f({attribute:"aria-label"})],wl.prototype,"ariaLabel",void 0);st(wl,Je);st(un,ni,wl);const dw=(e,t)=>P`
        ${dt(i=>i.tooltipVisible,P`
            <${e.tagFor(re)}
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
            </${e.tagFor(re)}>
        `)}
    `,Kt={top:"top",right:"right",bottom:"bottom",left:"left",start:"start",end:"end",topLeft:"top-left",topRight:"top-right",bottomLeft:"bottom-left",bottomRight:"bottom-right",topStart:"top-start",topEnd:"top-end",bottomStart:"bottom-start",bottomEnd:"bottom-end"};let yt=class extends de{constructor(){super(...arguments),this.anchor="",this.delay=300,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.horizontalInset="false",this.verticalInset="false",this.horizontalScaling="content",this.verticalScaling="content",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition=void 0,this.tooltipVisible=!1,this.currentDirection=Xe.ltr,this.showDelayTimer=null,this.hideDelayTimer=null,this.isAnchorHoveredFocused=!1,this.isRegionHovered=!1,this.handlePositionChange=t=>{this.classList.toggle("top",this.region.verticalPosition==="start"),this.classList.toggle("bottom",this.region.verticalPosition==="end"),this.classList.toggle("inset-top",this.region.verticalPosition==="insetStart"),this.classList.toggle("inset-bottom",this.region.verticalPosition==="insetEnd"),this.classList.toggle("center-vertical",this.region.verticalPosition==="center"),this.classList.toggle("left",this.region.horizontalPosition==="start"),this.classList.toggle("right",this.region.horizontalPosition==="end"),this.classList.toggle("inset-left",this.region.horizontalPosition==="insetStart"),this.classList.toggle("inset-right",this.region.horizontalPosition==="insetEnd"),this.classList.toggle("center-horizontal",this.region.horizontalPosition==="center")},this.handleRegionMouseOver=t=>{this.isRegionHovered=!0},this.handleRegionMouseOut=t=>{this.isRegionHovered=!1,this.startHideDelayTimer()},this.handleAnchorMouseOver=t=>{if(this.tooltipVisible){this.isAnchorHoveredFocused=!0;return}this.startShowDelayTimer()},this.handleAnchorMouseOut=t=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.handleAnchorFocusIn=t=>{this.startShowDelayTimer()},this.handleAnchorFocusOut=t=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.startHideDelayTimer=()=>{this.clearHideDelayTimer(),this.tooltipVisible&&(this.hideDelayTimer=window.setTimeout(()=>{this.updateTooltipVisibility()},60))},this.clearHideDelayTimer=()=>{this.hideDelayTimer!==null&&(clearTimeout(this.hideDelayTimer),this.hideDelayTimer=null)},this.startShowDelayTimer=()=>{if(!this.isAnchorHoveredFocused){if(this.delay>1){this.showDelayTimer===null&&(this.showDelayTimer=window.setTimeout(()=>{this.startHover()},this.delay));return}this.startHover()}},this.startHover=()=>{this.isAnchorHoveredFocused=!0,this.updateTooltipVisibility()},this.clearShowDelayTimer=()=>{this.showDelayTimer!==null&&(clearTimeout(this.showDelayTimer),this.showDelayTimer=null)},this.getAnchor=()=>{const t=this.getRootNode();return t instanceof ShadowRoot?t.getElementById(this.anchor):document.getElementById(this.anchor)},this.handleDocumentKeydown=t=>{if(!t.defaultPrevented&&this.tooltipVisible)switch(t.key){case Oo:this.isAnchorHoveredFocused=!1,this.updateTooltipVisibility(),this.$emit("dismiss");break}},this.updateTooltipVisibility=()=>{if(this.visible===!1)this.hideTooltip();else if(this.visible===!0){this.showTooltip();return}else{if(this.isAnchorHoveredFocused||this.isRegionHovered){this.showTooltip();return}this.hideTooltip()}},this.showTooltip=()=>{this.tooltipVisible||(this.currentDirection=Rn(this),this.tooltipVisible=!0,document.addEventListener("keydown",this.handleDocumentKeydown),ce.queueUpdate(this.setRegionProps))},this.hideTooltip=()=>{this.tooltipVisible&&(this.clearHideDelayTimer(),this.region!==null&&this.region!==void 0&&(this.region.removeEventListener("positionchange",this.handlePositionChange),this.region.viewportElement=null,this.region.anchorElement=null,this.region.removeEventListener("mouseover",this.handleRegionMouseOver),this.region.removeEventListener("mouseout",this.handleRegionMouseOut)),document.removeEventListener("keydown",this.handleDocumentKeydown),this.tooltipVisible=!1)},this.setRegionProps=()=>{this.tooltipVisible&&(this.region.viewportElement=this.viewportElement,this.region.anchorElement=this.anchorElement,this.region.addEventListener("positionchange",this.handlePositionChange),this.region.addEventListener("mouseover",this.handleRegionMouseOver,{passive:!0}),this.region.addEventListener("mouseout",this.handleRegionMouseOut,{passive:!0}))}}visibleChanged(){this.$fastController.isConnected&&(this.updateTooltipVisibility(),this.updateLayout())}anchorChanged(){this.$fastController.isConnected&&(this.anchorElement=this.getAnchor())}positionChanged(){this.$fastController.isConnected&&this.updateLayout()}anchorElementChanged(t){if(this.$fastController.isConnected){if(t!=null&&(t.removeEventListener("mouseover",this.handleAnchorMouseOver),t.removeEventListener("mouseout",this.handleAnchorMouseOut),t.removeEventListener("focusin",this.handleAnchorFocusIn),t.removeEventListener("focusout",this.handleAnchorFocusOut)),this.anchorElement!==null&&this.anchorElement!==void 0){this.anchorElement.addEventListener("mouseover",this.handleAnchorMouseOver,{passive:!0}),this.anchorElement.addEventListener("mouseout",this.handleAnchorMouseOut,{passive:!0}),this.anchorElement.addEventListener("focusin",this.handleAnchorFocusIn,{passive:!0}),this.anchorElement.addEventListener("focusout",this.handleAnchorFocusOut,{passive:!0});const i=this.anchorElement.id;this.anchorElement.parentElement!==null&&this.anchorElement.parentElement.querySelectorAll(":hover").forEach(s=>{s.id===i&&this.startShowDelayTimer()})}this.region!==null&&this.region!==void 0&&this.tooltipVisible&&(this.region.anchorElement=this.anchorElement),this.updateLayout()}}viewportElementChanged(){this.region!==null&&this.region!==void 0&&(this.region.viewportElement=this.viewportElement),this.updateLayout()}connectedCallback(){super.connectedCallback(),this.anchorElement=this.getAnchor(),this.updateTooltipVisibility()}disconnectedCallback(){this.hideTooltip(),this.clearShowDelayTimer(),this.clearHideDelayTimer(),super.disconnectedCallback()}updateLayout(){switch(this.verticalPositioningMode="locktodefault",this.horizontalPositioningMode="locktodefault",this.position){case Kt.top:case Kt.bottom:this.verticalDefaultPosition=this.position,this.horizontalDefaultPosition="center";break;case Kt.right:case Kt.left:case Kt.start:case Kt.end:this.verticalDefaultPosition="center",this.horizontalDefaultPosition=this.position;break;case Kt.topLeft:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="left";break;case Kt.topRight:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="right";break;case Kt.bottomLeft:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="left";break;case Kt.bottomRight:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="right";break;case Kt.topStart:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="start";break;case Kt.topEnd:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="end";break;case Kt.bottomStart:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="start";break;case Kt.bottomEnd:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="end";break;default:this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition="center";break}}};h([f({mode:"boolean"})],yt.prototype,"visible",void 0);h([f],yt.prototype,"anchor",void 0);h([f],yt.prototype,"delay",void 0);h([f],yt.prototype,"position",void 0);h([f({attribute:"auto-update-mode"})],yt.prototype,"autoUpdateMode",void 0);h([f({attribute:"horizontal-viewport-lock"})],yt.prototype,"horizontalViewportLock",void 0);h([f({attribute:"vertical-viewport-lock"})],yt.prototype,"verticalViewportLock",void 0);h([_],yt.prototype,"anchorElement",void 0);h([_],yt.prototype,"viewportElement",void 0);h([_],yt.prototype,"verticalPositioningMode",void 0);h([_],yt.prototype,"horizontalPositioningMode",void 0);h([_],yt.prototype,"horizontalInset",void 0);h([_],yt.prototype,"verticalInset",void 0);h([_],yt.prototype,"horizontalScaling",void 0);h([_],yt.prototype,"verticalScaling",void 0);h([_],yt.prototype,"verticalDefaultPosition",void 0);h([_],yt.prototype,"horizontalDefaultPosition",void 0);h([_],yt.prototype,"tooltipVisible",void 0);h([_],yt.prototype,"currentDirection",void 0);const hw=(e,t)=>P`
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
        ${cl({property:"childItems",filter:_s()})}
    >
        <div class="positioning-region" part="positioning-region">
            <div class="content-region" part="content-region">
                ${dt(i=>i.childItems&&i.childItemLength()>0,P`
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
                ${Xt(e,t)}
                <slot></slot>
                ${Zt(e,t)}
            </div>
        </div>
        ${dt(i=>i.childItems&&i.childItemLength()>0&&(i.expanded||i.renderCollapsedChildren),P`
                <div role="group" class="items" part="items">
                    <slot name="item" ${tt("items")}></slot>
                </div>
            `)}
    </template>
`;function qs(e){return wo(e)&&e.getAttribute("role")==="treeitem"}class $t extends de{constructor(){super(...arguments),this.expanded=!1,this.focusable=!1,this.isNestedItem=()=>qs(this.parentElement),this.handleExpandCollapseButtonClick=t=>{!this.disabled&&!t.defaultPrevented&&(this.expanded=!this.expanded)},this.handleFocus=t=>{this.setAttribute("tabindex","0")},this.handleBlur=t=>{this.setAttribute("tabindex","-1")}}expandedChanged(){this.$fastController.isConnected&&this.$emit("expanded-change",this)}selectedChanged(){this.$fastController.isConnected&&this.$emit("selected-change",this)}itemsChanged(t,i){this.$fastController.isConnected&&this.items.forEach(s=>{qs(s)&&(s.nested=!0)})}static focusItem(t){t.focusable=!0,t.focus()}childItemLength(){const t=this.childItems.filter(i=>qs(i));return t?t.length:0}}h([f({mode:"boolean"})],$t.prototype,"expanded",void 0);h([f({mode:"boolean"})],$t.prototype,"selected",void 0);h([f({mode:"boolean"})],$t.prototype,"disabled",void 0);h([_],$t.prototype,"focusable",void 0);h([_],$t.prototype,"childItems",void 0);h([_],$t.prototype,"items",void 0);h([_],$t.prototype,"nested",void 0);h([_],$t.prototype,"renderCollapsedChildren",void 0);st($t,ni);const fw=(e,t)=>P`
    <template
        role="tree"
        ${Ee("treeView")}
        @keydown="${(i,s)=>i.handleKeyDown(s.event)}"
        @focusin="${(i,s)=>i.handleFocus(s.event)}"
        @focusout="${(i,s)=>i.handleBlur(s.event)}"
        @click="${(i,s)=>i.handleClick(s.event)}"
        @selected-change="${(i,s)=>i.handleSelectedChange(s.event)}"
    >
        <slot ${tt("slottedTreeItems")}></slot>
    </template>
`;class $l extends de{constructor(){super(...arguments),this.currentFocused=null,this.handleFocus=t=>{if(!(this.slottedTreeItems.length<1)){if(t.target===this){this.currentFocused===null&&(this.currentFocused=this.getValidFocusableItem()),this.currentFocused!==null&&$t.focusItem(this.currentFocused);return}this.contains(t.target)&&(this.setAttribute("tabindex","-1"),this.currentFocused=t.target)}},this.handleBlur=t=>{t.target instanceof HTMLElement&&(t.relatedTarget===null||!this.contains(t.relatedTarget))&&this.setAttribute("tabindex","0")},this.handleKeyDown=t=>{if(t.defaultPrevented)return;if(this.slottedTreeItems.length<1)return!0;const i=this.getVisibleNodes();switch(t.key){case ls:i.length&&$t.focusItem(i[0]);return;case cs:i.length&&$t.focusItem(i[i.length-1]);return;case tn:if(t.target&&this.isFocusableElement(t.target)){const s=t.target;s instanceof $t&&s.childItemLength()>0&&s.expanded?s.expanded=!1:s instanceof $t&&s.parentElement instanceof $t&&$t.focusItem(s.parentElement)}return!1;case sn:if(t.target&&this.isFocusableElement(t.target)){const s=t.target;s instanceof $t&&s.childItemLength()>0&&!s.expanded?s.expanded=!0:s instanceof $t&&s.childItemLength()>0&&this.focusNextNode(1,t.target)}return;case Ti:t.target&&this.isFocusableElement(t.target)&&this.focusNextNode(1,t.target);return;case Fi:t.target&&this.isFocusableElement(t.target)&&this.focusNextNode(-1,t.target);return;case Ts:this.handleClick(t);return}return!0},this.handleSelectedChange=t=>{if(t.defaultPrevented)return;if(!(t.target instanceof Element)||!qs(t.target))return!0;const i=t.target;i.selected?(this.currentSelected&&this.currentSelected!==i&&(this.currentSelected.selected=!1),this.currentSelected=i):!i.selected&&this.currentSelected===i&&(this.currentSelected=null)},this.setItems=()=>{const t=this.treeView.querySelector("[aria-selected='true']");this.currentSelected=t,(this.currentFocused===null||!this.contains(this.currentFocused))&&(this.currentFocused=this.getValidFocusableItem()),this.nested=this.checkForNestedItems(),this.getVisibleNodes().forEach(s=>{qs(s)&&(s.nested=this.nested)})},this.isFocusableElement=t=>qs(t),this.isSelectedElement=t=>t.selected}slottedTreeItemsChanged(){this.$fastController.isConnected&&this.setItems()}connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),ce.queueUpdate(()=>{this.setItems()})}handleClick(t){if(t.defaultPrevented)return;if(!(t.target instanceof Element)||!qs(t.target))return!0;const i=t.target;i.disabled||(i.selected=!i.selected)}focusNextNode(t,i){const s=this.getVisibleNodes();if(!s)return;const n=s[s.indexOf(i)+t];wo(n)&&$t.focusItem(n)}getValidFocusableItem(){const t=this.getVisibleNodes();let i=t.findIndex(this.isSelectedElement);return i===-1&&(i=t.findIndex(this.isFocusableElement)),i!==-1?t[i]:null}checkForNestedItems(){return this.slottedTreeItems.some(t=>qs(t)&&t.querySelector("[role='treeitem']"))}getVisibleNodes(){return u0(this,"[role='treeitem']")||[]}}h([f({attribute:"render-collapsed-nodes"})],$l.prototype,"renderCollapsedNodes",void 0);h([_],$l.prototype,"currentSelected",void 0);h([_],$l.prototype,"slottedTreeItems",void 0);class pw{constructor(t){this.listenerCache=new WeakMap,this.query=t}bind(t){const{query:i}=this,s=this.constructListener(t);s.bind(i)(),i.addListener(s),this.listenerCache.set(t,s)}unbind(t){const i=this.listenerCache.get(t);i&&(this.query.removeListener(i),this.listenerCache.delete(t))}}class zr extends pw{constructor(t,i){super(t),this.styles=i}static with(t){return i=>new zr(t,i)}constructListener(t){let i=!1;const s=this.styles;return function(){const{matches:o}=this;o&&!i?(t.$fastController.addStyles(s),i=o):!o&&i&&(t.$fastController.removeStyles(s),i=o)}}unbind(t){super.unbind(t),t.$fastController.removeStyles(this.styles)}}const $e=zr.with(window.matchMedia("(forced-colors)"));zr.with(window.matchMedia("(prefers-color-scheme: dark)"));zr.with(window.matchMedia("(prefers-color-scheme: light)"));class gw{constructor(t,i,s){this.propertyName=t,this.value=i,this.styles=s}bind(t){le.getNotifier(t).subscribe(this,this.propertyName),this.handleChange(t,this.propertyName)}unbind(t){le.getNotifier(t).unsubscribe(this,this.propertyName),t.$fastController.removeStyles(this.styles)}handleChange(t,i){t[i]===this.value?t.$fastController.addStyles(this.styles):t.$fastController.removeStyles(this.styles)}}const Ri="not-allowed",mw=":host([hidden]){display:none}";function ke(e){return`${mw}:host{display:${e}}`}const he=h0()?"focus-visible":"focus";function xn(e,t,i){return isNaN(e)||e<=t?t:e>=i?i:e}function Ec(e,t,i){return isNaN(e)||e<=t?0:e>=i?1:e/(i-t)}function gn(e,t,i){return isNaN(e)?t:t+e*(i-t)}function vw(e){const t=Math.round(xn(e,0,255)).toString(16);return t.length===1?"0"+t:t}function ca(e,t,i){return isNaN(e)||e<=0?t:e>=1?i:t+e*(i-t)}function Gt(e,t){const i=Math.pow(10,t);return Math.round(e*i)/i}class kr{constructor(t,i,s){this.h=t,this.s=i,this.l=s}static fromObject(t){return t&&!isNaN(t.h)&&!isNaN(t.s)&&!isNaN(t.l)?new kr(t.h,t.s,t.l):null}equalValue(t){return this.h===t.h&&this.s===t.s&&this.l===t.l}roundToPrecision(t){return new kr(Gt(this.h,t),Gt(this.s,t),Gt(this.l,t))}toObject(){return{h:this.h,s:this.s,l:this.l}}}class Ft{constructor(t,i,s){this.l=t,this.a=i,this.b=s}static fromObject(t){return t&&!isNaN(t.l)&&!isNaN(t.a)&&!isNaN(t.b)?new Ft(t.l,t.a,t.b):null}equalValue(t){return this.l===t.l&&this.a===t.a&&this.b===t.b}roundToPrecision(t){return new Ft(Gt(this.l,t),Gt(this.a,t),Gt(this.b,t))}toObject(){return{l:this.l,a:this.a,b:this.b}}}Ft.epsilon=216/24389;Ft.kappa=24389/27;class bt{constructor(t,i,s,n){this.r=t,this.g=i,this.b=s,this.a=typeof n=="number"&&!isNaN(n)?n:1}static fromObject(t){return t&&!isNaN(t.r)&&!isNaN(t.g)&&!isNaN(t.b)?new bt(t.r,t.g,t.b,t.a):null}equalValue(t){return this.r===t.r&&this.g===t.g&&this.b===t.b&&this.a===t.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(gn(this.r,0,255))},${Math.round(gn(this.g,0,255))},${Math.round(gn(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(gn(this.r,0,255))},${Math.round(gn(this.g,0,255))},${Math.round(gn(this.b,0,255))},${xn(this.a,0,1)})`}roundToPrecision(t){return new bt(Gt(this.r,t),Gt(this.g,t),Gt(this.b,t),Gt(this.a,t))}clamp(){return new bt(xn(this.r,0,1),xn(this.g,0,1),xn(this.b,0,1),xn(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(t){return vw(gn(t,0,255))}}class di{constructor(t,i,s){this.x=t,this.y=i,this.z=s}static fromObject(t){return t&&!isNaN(t.x)&&!isNaN(t.y)&&!isNaN(t.z)?new di(t.x,t.y,t.z):null}equalValue(t){return this.x===t.x&&this.y===t.y&&this.z===t.z}roundToPrecision(t){return new di(Gt(this.x,t),Gt(this.y,t),Gt(this.z,t))}toObject(){return{x:this.x,y:this.y,z:this.z}}}di.whitePoint=new di(.95047,1,1.08883);function bw(e){return e.r*.2126+e.g*.7152+e.b*.0722}function ag(e){function t(i){return i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4)}return bw(new bt(t(e.r),t(e.g),t(e.b),1))}function Oc(e,t,i){return i-t===0?0:(e-t)/(i-t)}function Pc(e,t,i){const s=Oc(e.r,t.r,i.r),n=Oc(e.g,t.g,i.g),o=Oc(e.b,t.b,i.b);return(s+n+o)/3}function yw(e,t,i=null){let s=0,n=i;return n!==null?s=Pc(e,t,n):(n=new bt(0,0,0,1),s=Pc(e,t,n),s<=0&&(n=new bt(1,1,1,1),s=Pc(e,t,n))),s=Math.round(s*1e3)/1e3,new bt(n.r,n.g,n.b,s)}function ef(e){const t=Math.max(e.r,e.g,e.b),i=Math.min(e.r,e.g,e.b),s=t-i;let n=0;s!==0&&(t===e.r?n=60*((e.g-e.b)/s%6):t===e.g?n=60*((e.b-e.r)/s+2):n=60*((e.r-e.g)/s+4)),n<0&&(n+=360);const o=(t+i)/2;let r=0;return s!==0&&(r=s/(1-Math.abs(2*o-1))),new kr(n,r,o)}function xw(e,t=1){const i=(1-Math.abs(2*e.l-1))*e.s,s=i*(1-Math.abs(e.h/60%2-1)),n=e.l-i/2;let o=0,r=0,a=0;return e.h<60?(o=i,r=s,a=0):e.h<120?(o=s,r=i,a=0):e.h<180?(o=0,r=i,a=s):e.h<240?(o=0,r=s,a=i):e.h<300?(o=s,r=0,a=i):e.h<360&&(o=i,r=0,a=s),new bt(o+n,r+n,a+n,t)}function ww(e){const t=(e.l+16)/116,i=t+e.a/500,s=t-e.b/200,n=Math.pow(i,3),o=Math.pow(t,3),r=Math.pow(s,3);let a=0;n>Ft.epsilon?a=n:a=(116*i-16)/Ft.kappa;let l=0;e.l>Ft.epsilon*Ft.kappa?l=o:l=e.l/Ft.kappa;let c=0;return r>Ft.epsilon?c=r:c=(116*s-16)/Ft.kappa,a=di.whitePoint.x*a,l=di.whitePoint.y*l,c=di.whitePoint.z*c,new di(a,l,c)}function $w(e){function t(l){return l>Ft.epsilon?Math.pow(l,1/3):(Ft.kappa*l+16)/116}const i=t(e.x/di.whitePoint.x),s=t(e.y/di.whitePoint.y),n=t(e.z/di.whitePoint.z),o=116*s-16,r=500*(i-s),a=200*(s-n);return new Ft(o,r,a)}function kw(e){function t(l){return l<=.04045?l/12.92:Math.pow((l+.055)/1.055,2.4)}const i=t(e.r),s=t(e.g),n=t(e.b),o=i*.4124564+s*.3575761+n*.1804375,r=i*.2126729+s*.7151522+n*.072175,a=i*.0193339+s*.119192+n*.9503041;return new di(o,r,a)}function _w(e,t=1){function i(r){return r<=.0031308?r*12.92:1.055*Math.pow(r,1/2.4)-.055}const s=i(e.x*3.2404542-e.y*1.5371385-e.z*.4985314),n=i(e.x*-.969266+e.y*1.8760108+e.z*.041556),o=i(e.x*.0556434-e.y*.2040259+e.z*1.0572252);return new bt(s,n,o,t)}function Sw(e){return $w(kw(e))}function Lc(e,t=1){return _w(ww(e),t)}var tf;(function(e){e[e.Burn=0]="Burn",e[e.Color=1]="Color",e[e.Darken=2]="Darken",e[e.Dodge=3]="Dodge",e[e.Lighten=4]="Lighten",e[e.Multiply=5]="Multiply",e[e.Overlay=6]="Overlay",e[e.Screen=7]="Screen"})(tf||(tf={}));function Cw(e,t){if(t.a>=1)return t;if(t.a<=0)return new bt(e.r,e.g,e.b,1);const i=t.a*t.r+(1-t.a)*e.r,s=t.a*t.g+(1-t.a)*e.g,n=t.a*t.b+(1-t.a)*e.b;return new bt(i,s,n,1)}function ua(e,t,i){return isNaN(e)||e<=0?t:e>=1?i:new bt(ca(e,t.r,i.r),ca(e,t.g,i.g),ca(e,t.b,i.b),ca(e,t.a,i.a))}var sf;(function(e){e[e.RGB=0]="RGB",e[e.HSL=1]="HSL",e[e.HSV=2]="HSV",e[e.XYZ=3]="XYZ",e[e.LAB=4]="LAB",e[e.LCH=5]="LCH"})(sf||(sf={}));const Iw=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function Cn(e){const t=Iw.exec(e);if(t===null)return null;let i=t[1];if(i.length===3){const n=i.charAt(0),o=i.charAt(1),r=i.charAt(2);i=n.concat(n,o,o,r,r)}const s=parseInt(i,16);return isNaN(s)?null:new bt(Ec((s&16711680)>>>16,0,255),Ec((s&65280)>>>8,0,255),Ec(s&255,0,255),1)}function Ba(e,t){const i=e.relativeLuminance>t.relativeLuminance?e:t,s=e.relativeLuminance>t.relativeLuminance?t:e;return(i.relativeLuminance+.05)/(s.relativeLuminance+.05)}const Ii=Object.freeze({create(e,t,i){return new ja(e,t,i)},from(e){return new ja(e.r,e.g,e.b)}});function Tw(e){const t={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(const i in t)if(typeof t[i]!=typeof e[i])return!1;return!0}class ja extends bt{constructor(t,i,s){super(t,i,s,1),this.toColorString=this.toStringHexRGB,this.contrast=Ba.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=ag(this)}static fromObject(t){return new ja(t.r,t.g,t.b)}}function au(e,t,i=0,s=e.length-1){if(s===i)return e[i];const n=Math.floor((s-i)/2)+i;return t(e[n])?au(e,t,i,n):au(e,t,n+1,s)}const Fw=(-.1+Math.sqrt(.21))/2;function Br(e){return e.relativeLuminance<=Fw}function Vn(e){return Br(e)?-1:1}const nf={stepContrast:1.03,stepContrastRamp:.03,preserveSource:!1};function Dw(e,t,i){return typeof e=="number"?_r.from(Ii.create(e,t,i)):_r.from(e)}function Rw(e,t){return Tw(e)?is.from(e,t):is.from(Ii.create(e.r,e.g,e.b),t)}const _r=Object.freeze({create:Dw,from:Rw});class is{constructor(t,i){this.closestIndexCache=new Map,this.source=t,this.swatches=i,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(t,i,s,n){s===void 0&&(s=this.closestIndexOf(t));let o=this.swatches;const r=this.lastIndex;let a=s;n===void 0&&(n=Vn(t));const l=c=>Ba(t,c)>=i;return n===-1&&(o=this.reversedSwatches,a=r-a),au(o,l,a,r)}get(t){return this.swatches[t]||this.swatches[xn(t,0,this.lastIndex)]}closestIndexOf(t){if(this.closestIndexCache.has(t.relativeLuminance))return this.closestIndexCache.get(t.relativeLuminance);let i=this.swatches.indexOf(t);if(i!==-1)return this.closestIndexCache.set(t.relativeLuminance,i),i;const s=this.swatches.reduce((n,o)=>Math.abs(o.relativeLuminance-t.relativeLuminance)<Math.abs(n.relativeLuminance-t.relativeLuminance)?o:n);return i=this.swatches.indexOf(s),this.closestIndexCache.set(t.relativeLuminance,i),i}static saturationBump(t,i){const n=ef(t).s,o=ef(i);if(o.s<n){const r=new kr(o.h,n,o.l);return xw(r)}return i}static ramp(t){const i=t/100;return i>.5?(i-.5)/.5:2*i}static createHighResolutionPalette(t){const i=[],s=Sw(bt.fromObject(t).roundToPrecision(4)),n=Lc(new Ft(0,s.a,s.b)).clamp().roundToPrecision(4),o=Lc(new Ft(50,s.a,s.b)).clamp().roundToPrecision(4),r=Lc(new Ft(100,s.a,s.b)).clamp().roundToPrecision(4),a=new bt(0,0,0),l=new bt(1,1,1),c=r.equalValue(l)?0:14,u=n.equalValue(a)?0:14;for(let d=100+c;d>=0-u;d-=.5){let p;if(d<0){const b=d/u+1;p=ua(b,a,n)}else if(d<=50)p=ua(is.ramp(d),n,o);else if(d<=100)p=ua(is.ramp(d),o,r);else{const b=(d-100)/c;p=ua(b,r,l)}p=is.saturationBump(o,p).roundToPrecision(4),i.push(Ii.from(p))}return new is(t,i)}static adjustEnd(t,i,s,n){const o=n===-1?i.swatches:i.reversedSwatches,r=c=>{const u=i.closestIndexOf(c);return n===1?i.lastIndex-u:u};n===1&&s.reverse();const a=t(s[s.length-2]);if(Gt(Ba(s[s.length-1],s[s.length-2]),2)<a){s.pop();const c=i.colorContrast(o[i.lastIndex],a,void 0,n),u=r(c),d=r(s[s.length-2]),p=u-d;let b=1;for(let $=s.length-p-1;$<s.length;$++){const x=r(s[$]),k=$===s.length-1?i.lastIndex:x+b;s[$]=o[k],b++}}n===1&&s.reverse()}static createColorPaletteByContrast(t,i){const s=is.createHighResolutionPalette(t),n=a=>{const l=i.stepContrast+i.stepContrast*(1-a.relativeLuminance)*i.stepContrastRamp;return Gt(l,2)},o=[];let r=i.preserveSource?t:s.swatches[0];o.push(r);do{const a=n(r);r=s.colorContrast(r,a,void 0,1),o.push(r)}while(r.relativeLuminance>0);if(i.preserveSource){r=t;do{const a=n(r);r=s.colorContrast(r,a,void 0,-1),o.unshift(r)}while(r.relativeLuminance<1)}return this.adjustEnd(n,s,o,-1),i.preserveSource&&this.adjustEnd(n,s,o,1),o}static from(t,i){const s=i===void 0?nf:Object.assign(Object.assign({},nf),i);return new is(t,Object.freeze(is.createColorPaletteByContrast(t,s)))}}const Ya=Ii.create(1,1,1),Ju=Ii.create(0,0,0),Ew=Ii.create(.5,.5,.5),Ac=Cn("#0078D4"),Ow=Ii.create(Ac.r,Ac.g,Ac.b);function lg(e,t,i,s,n){const o=u=>u.contrast(Ya)>=n?Ya:Ju,r=o(e),a=o(t),l=r.relativeLuminance===a.relativeLuminance?r:o(i),c=o(s);return{rest:r,hover:a,active:l,focus:c}}class kl{constructor(t,i,s,n){this.toColorString=()=>this.cssGradient,this.contrast=Ba.bind(null,this),this.createCSS=this.toColorString,this.color=new bt(t,i,s),this.cssGradient=n,this.relativeLuminance=ag(this.color),this.r=t,this.g=i,this.b=s}static fromObject(t,i){return new kl(t.r,t.g,t.b,i)}}const Pw=new bt(0,0,0),Lw=new bt(1,1,1);function cg(e,t,i,s,n,o,r,a,l=10,c=!1){const u=e.closestIndexOf(t);a===void 0&&(a=Vn(t));function d(se){if(c){const j=e.closestIndexOf(t),pe=e.get(j),Fe=se.relativeLuminance<t.relativeLuminance?Pw:Lw,ct=yw(Cn(se.toColorString()),Cn(pe.toColorString()),Fe).roundToPrecision(2),_e=Cw(Cn(t.toColorString()),ct);return Ii.from(_e)}else return se}const p=u+a*i,b=p+a*(s-i),$=p+a*(n-i),x=p+a*(o-i),k=a===-1?0:100-l,F=a===-1?l:100;function M(se,j){const pe=e.get(se);if(j){const Fe=e.get(se+a*r),ct=a===-1?Fe:pe,_e=a===-1?pe:Fe,Ie=`linear-gradient(${d(ct).toColorString()} ${k}%, ${d(_e).toColorString()} ${F}%)`;return kl.fromObject(ct,Ie)}else return d(pe)}return{rest:M(p,!0),hover:M(b,!0),active:M($,!1),focus:M(x,!0)}}function Aw(e,t,i,s,n,o,r,a){const l=e.closestIndexOf(t),c=Vn(t),u=l+c*i,d=u+c*(s-i),p=u+c*(n-i),b=u+c*(o-i),$=`calc(100% - ${a})`;function x(k,F){const M=e.get(k);if(F){const se=e.get(k+c*r),j=`linear-gradient(${M.toColorString()} ${$}, ${se.toColorString()} ${$}, ${se.toColorString()})`;return kl.fromObject(M,j)}else return M}return{rest:x(u,!0),hover:x(d,!0),active:x(p,!1),focus:x(b,!0)}}function Mw(e,t,i){return e.colorContrast(t,i)}function _o(e,t,i,s,n,o,r,a){a==null&&(a=Vn(t));const l=e.closestIndexOf(e.colorContrast(t,i));return{rest:e.get(l+a*s),hover:e.get(l+a*n),active:e.get(l+a*o),focus:e.get(l+a*r)}}function Vw(e,t,i,s,n,o,r,a=void 0,l,c,u,d,p,b=void 0){return Br(t)?_o(e,t,l,c,u,d,p,b):_o(e,t,i,s,n,o,r,a)}function Hw(e,t,i){return e.get(e.closestIndexOf(t)+Vn(t)*i)}function nn(e,t,i,s,n,o,r){const a=e.closestIndexOf(t);return r==null&&(r=Vn(t)),{rest:e.get(a+r*i),hover:e.get(a+r*s),active:e.get(a+r*n),focus:e.get(a+r*o)}}function Ku(e,t,i,s,n,o,r=void 0,a,l,c,u,d=void 0){return Br(t)?nn(e,t,a,l,c,u,d):nn(e,t,i,s,n,o,r)}function Nw(e,t){return Br(t)?Ya:Ju}function zw(e,t,i){return Br(t)?Ju:Ya}function Bw(e){return Ii.create(e,e,e)}var lu;(function(e){e[e.LightMode=.98]="LightMode",e[e.DarkMode=.15]="DarkMode"})(lu||(lu={}));function jr(e,t){return e.closestIndexOf(Bw(t))}function jw(e,t){return e.get(jr(e,t))}function Yw(e,t,i){return e.get(jr(e,t)+i)}function ug(e,t,i){return e.get(jr(e,t)+i*-1)}function Uw(e,t,i){return e.get(jr(e,t)+i*-1*2)}function Ww(e,t,i){return e.get(jr(e,t)+i*-1*3)}const Gw={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Black:900},{create:w}=je;function A(e){return je.create({name:e,cssCustomPropertyName:null})}const Ra=w("direction").withDefault(Xe.ltr),yi=w("disabled-opacity").withDefault(.3),_l=w("base-height-multiplier").withDefault(8),qw=w("base-horizontal-spacing-multiplier").withDefault(3),dn=w("density").withDefault(0),Y=w("design-unit").withDefault(4),Ve=w("control-corner-radius").withDefault(4),ys=w("layer-corner-radius").withDefault(8),ee=w("stroke-width").withDefault(1),Vt=w("focus-stroke-width").withDefault(2),Ei=w("body-font").withDefault('"Segoe UI Variable", "Segoe UI", sans-serif'),Zw=w("font-weight").withDefault(Gw.Normal);function As(e){return t=>{const i=e.getValueFor(t),s=Zw.getValueFor(t);if(i.endsWith("px")){const n=Number.parseFloat(i.replace("px",""));if(n<=12)return`"wght" ${s}, "opsz" 8`;if(n>24)return`"wght" ${s}, "opsz" 36`}return`"wght" ${s}, "opsz" 10.5`}}const ed=w("type-ramp-base-font-size").withDefault("14px"),dg=w("type-ramp-base-line-height").withDefault("20px"),Xw=w("type-ramp-base-font-variations").withDefault(As(ed)),td=w("type-ramp-minus-1-font-size").withDefault("12px"),id=w("type-ramp-minus-1-line-height").withDefault("16px"),Qw=w("type-ramp-minus-1-font-variations").withDefault(As(td)),sd=w("type-ramp-minus-2-font-size").withDefault("10px"),hg=w("type-ramp-minus-2-line-height").withDefault("14px"),Jw=w("type-ramp-minus-2-font-variations").withDefault(As(sd)),nd=w("type-ramp-plus-1-font-size").withDefault("16px"),fg=w("type-ramp-plus-1-line-height").withDefault("22px"),Kw=w("type-ramp-plus-1-font-variations").withDefault(As(nd)),od=w("type-ramp-plus-2-font-size").withDefault("20px"),pg=w("type-ramp-plus-2-line-height").withDefault("26px"),e$=w("type-ramp-plus-2-font-variations").withDefault(As(od)),rd=w("type-ramp-plus-3-font-size").withDefault("24px"),gg=w("type-ramp-plus-3-line-height").withDefault("32px"),t$=w("type-ramp-plus-3-font-variations").withDefault(As(rd)),ad=w("type-ramp-plus-4-font-size").withDefault("28px"),mg=w("type-ramp-plus-4-line-height").withDefault("36px"),i$=w("type-ramp-plus-4-font-variations").withDefault(As(ad)),ld=w("type-ramp-plus-5-font-size").withDefault("32px"),vg=w("type-ramp-plus-5-line-height").withDefault("40px"),s$=w("type-ramp-plus-5-font-variations").withDefault(As(ld)),cd=w("type-ramp-plus-6-font-size").withDefault("40px"),bg=w("type-ramp-plus-6-line-height").withDefault("52px"),n$=w("type-ramp-plus-6-font-variations").withDefault(As(cd)),Hn=w("base-layer-luminance").withDefault(lu.LightMode),cu=A("accent-fill-rest-delta").withDefault(0),uu=A("accent-fill-hover-delta").withDefault(-2),du=A("accent-fill-active-delta").withDefault(-5),hu=A("accent-fill-focus-delta").withDefault(0),yg=A("accent-foreground-rest-delta").withDefault(0),xg=A("accent-foreground-hover-delta").withDefault(3),wg=A("accent-foreground-active-delta").withDefault(-8),$g=A("accent-foreground-focus-delta").withDefault(0),kg=A("neutral-fill-rest-delta").withDefault(-1),_g=A("neutral-fill-hover-delta").withDefault(1),Sg=A("neutral-fill-active-delta").withDefault(0),Cg=A("neutral-fill-focus-delta").withDefault(0),Ig=A("neutral-fill-input-rest-delta").withDefault(-1),Tg=A("neutral-fill-input-hover-delta").withDefault(1),Fg=A("neutral-fill-input-active-delta").withDefault(0),Dg=A("neutral-fill-input-focus-delta").withDefault(-2),da=A("neutral-fill-input-alt-rest-delta").withDefault(2),of=A("neutral-fill-input-alt-hover-delta").withDefault(4),rf=A("neutral-fill-input-alt-active-delta").withDefault(6),af=A("neutral-fill-input-alt-focus-delta").withDefault(2),on=A("neutral-fill-layer-rest-delta").withDefault(-2),o$=A("neutral-fill-layer-hover-delta").withDefault(-3),r$=A("neutral-fill-layer-active-delta").withDefault(-3),ha=A("neutral-fill-layer-alt-rest-delta").withDefault(-1),a$=A("neutral-fill-secondary-rest-delta").withDefault(3),l$=A("neutral-fill-secondary-hover-delta").withDefault(2),c$=A("neutral-fill-secondary-active-delta").withDefault(1),u$=A("neutral-fill-secondary-focus-delta").withDefault(3),Rg=A("neutral-fill-stealth-rest-delta").withDefault(0),Eg=A("neutral-fill-stealth-hover-delta").withDefault(3),Og=A("neutral-fill-stealth-active-delta").withDefault(2),Pg=A("neutral-fill-stealth-focus-delta").withDefault(0),d$=A("neutral-fill-strong-rest-delta").withDefault(0),Lg=A("neutral-fill-strong-hover-delta").withDefault(8),Ag=A("neutral-fill-strong-active-delta").withDefault(-5),Mg=A("neutral-fill-strong-focus-delta").withDefault(0),Vg=A("neutral-stroke-rest-delta").withDefault(8),Hg=A("neutral-stroke-hover-delta").withDefault(12),Ng=A("neutral-stroke-active-delta").withDefault(6),zg=A("neutral-stroke-focus-delta").withDefault(8),Bg=A("neutral-stroke-control-rest-delta").withDefault(3),jg=A("neutral-stroke-control-hover-delta").withDefault(5),Yg=A("neutral-stroke-control-active-delta").withDefault(5),Ug=A("neutral-stroke-control-focus-delta").withDefault(5),Wg=A("neutral-stroke-divider-rest-delta").withDefault(4),lf=A("neutral-stroke-layer-rest-delta").withDefault(3),h$=A("neutral-stroke-layer-hover-delta").withDefault(3),f$=A("neutral-stroke-layer-active-delta").withDefault(3),p$=A("neutral-stroke-strong-hover-delta").withDefault(0),g$=A("neutral-stroke-strong-active-delta").withDefault(0),m$=A("neutral-stroke-strong-focus-delta").withDefault(0),Gg=w("neutral-base-color").withDefault(Ew),Ke=A("neutral-palette").withDefault(e=>_r.from(Gg.getValueFor(e))),qg=w("accent-base-color").withDefault(Ow),ud=A("accent-palette").withDefault(e=>_r.from(qg.getValueFor(e))),v$=A("neutral-layer-card-container-recipe").withDefault({evaluate:e=>ug(Ke.getValueFor(e),Hn.getValueFor(e),on.getValueFor(e))});w("neutral-layer-card-container").withDefault(e=>v$.getValueFor(e).evaluate(e));const b$=A("neutral-layer-floating-recipe").withDefault({evaluate:e=>Yw(Ke.getValueFor(e),Hn.getValueFor(e),on.getValueFor(e))}),Yr=w("neutral-layer-floating").withDefault(e=>b$.getValueFor(e).evaluate(e)),y$=A("neutral-layer-1-recipe").withDefault({evaluate:e=>jw(Ke.getValueFor(e),Hn.getValueFor(e))}),x$=w("neutral-layer-1").withDefault(e=>y$.getValueFor(e).evaluate(e)),w$=A("neutral-layer-2-recipe").withDefault({evaluate:e=>ug(Ke.getValueFor(e),Hn.getValueFor(e),on.getValueFor(e))});w("neutral-layer-2").withDefault(e=>w$.getValueFor(e).evaluate(e));const $$=A("neutral-layer-3-recipe").withDefault({evaluate:e=>Uw(Ke.getValueFor(e),Hn.getValueFor(e),on.getValueFor(e))});w("neutral-layer-3").withDefault(e=>$$.getValueFor(e).evaluate(e));const k$=A("neutral-layer-4-recipe").withDefault({evaluate:e=>Ww(Ke.getValueFor(e),Hn.getValueFor(e),on.getValueFor(e))});w("neutral-layer-4").withDefault(e=>k$.getValueFor(e).evaluate(e));const be=w("fill-color").withDefault(e=>x$.getValueFor(e));var Ua;(function(e){e[e.normal=4.5]="normal",e[e.large=3]="large"})(Ua||(Ua={}));const Sl=A("accent-fill-recipe").withDefault({evaluate:(e,t)=>Vw(ud.getValueFor(e),t||be.getValueFor(e),5,cu.getValueFor(e),uu.getValueFor(e),du.getValueFor(e),hu.getValueFor(e),void 0,8,cu.getValueFor(e),uu.getValueFor(e),du.getValueFor(e),hu.getValueFor(e),void 0)}),Ge=w("accent-fill-rest").withDefault(e=>Sl.getValueFor(e).evaluate(e).rest),Ui=w("accent-fill-hover").withDefault(e=>Sl.getValueFor(e).evaluate(e).hover),Wi=w("accent-fill-active").withDefault(e=>Sl.getValueFor(e).evaluate(e).active),Cl=w("accent-fill-focus").withDefault(e=>Sl.getValueFor(e).evaluate(e).focus),Il=A("foreground-on-accent-recipe").withDefault({evaluate:e=>lg(Ge.getValueFor(e),Ui.getValueFor(e),Wi.getValueFor(e),Cl.getValueFor(e),Ua.normal)}),En=w("foreground-on-accent-rest").withDefault(e=>Il.getValueFor(e).evaluate(e).rest),Zg=w("foreground-on-accent-hover").withDefault(e=>Il.getValueFor(e).evaluate(e).hover),Xg=w("foreground-on-accent-active").withDefault(e=>Il.getValueFor(e).evaluate(e).active);w("foreground-on-accent-focus").withDefault(e=>Il.getValueFor(e).evaluate(e).focus);const Tl=A("accent-foreground-recipe").withDefault({evaluate:(e,t)=>_o(ud.getValueFor(e),t||be.getValueFor(e),9.5,yg.getValueFor(e),xg.getValueFor(e),wg.getValueFor(e),$g.getValueFor(e))}),Qg=w("accent-foreground-rest").withDefault(e=>Tl.getValueFor(e).evaluate(e).rest),Jg=w("accent-foreground-hover").withDefault(e=>Tl.getValueFor(e).evaluate(e).hover),Kg=w("accent-foreground-active").withDefault(e=>Tl.getValueFor(e).evaluate(e).active);w("accent-foreground-focus").withDefault(e=>Tl.getValueFor(e).evaluate(e).focus);const Fl=A("accent-stroke-control-recipe").withDefault({evaluate:(e,t)=>cg(Ke.getValueFor(e),t||be.getValueFor(e),-3,-3,-3,-3,10,1,void 0,!0)}),_$=w("accent-stroke-control-rest").withDefault(e=>Fl.getValueFor(e).evaluate(e,Ge.getValueFor(e)).rest),S$=w("accent-stroke-control-hover").withDefault(e=>Fl.getValueFor(e).evaluate(e,Ui.getValueFor(e)).hover),C$=w("accent-stroke-control-active").withDefault(e=>Fl.getValueFor(e).evaluate(e,Wi.getValueFor(e)).active);w("accent-stroke-control-focus").withDefault(e=>Fl.getValueFor(e).evaluate(e,Cl.getValueFor(e)).focus);const Dl=A("neutral-fill-recipe").withDefault({evaluate:(e,t)=>Ku(Ke.getValueFor(e),t||be.getValueFor(e),kg.getValueFor(e),_g.getValueFor(e),Sg.getValueFor(e),Cg.getValueFor(e),void 0,2,3,1,2,void 0)}),_i=w("neutral-fill-rest").withDefault(e=>Dl.getValueFor(e).evaluate(e).rest),cf=w("neutral-fill-hover").withDefault(e=>Dl.getValueFor(e).evaluate(e).hover),uf=w("neutral-fill-active").withDefault(e=>Dl.getValueFor(e).evaluate(e).active);w("neutral-fill-focus").withDefault(e=>Dl.getValueFor(e).evaluate(e).focus);const hn=A("neutral-fill-input-recipe").withDefault({evaluate:(e,t)=>Ku(Ke.getValueFor(e),t||be.getValueFor(e),Ig.getValueFor(e),Tg.getValueFor(e),Fg.getValueFor(e),Dg.getValueFor(e),void 0,2,3,1,0,void 0)}),fa=w("neutral-fill-input-rest").withDefault(e=>hn.getValueFor(e).evaluate(e).rest),df=w("neutral-fill-input-hover").withDefault(e=>hn.getValueFor(e).evaluate(e).hover);w("neutral-fill-input-active").withDefault(e=>hn.getValueFor(e).evaluate(e).active);const hf=w("neutral-fill-input-focus").withDefault(e=>hn.getValueFor(e).evaluate(e).focus),Rl=A("neutral-fill-input-alt-recipe").withDefault({evaluate:(e,t)=>Ku(Ke.getValueFor(e),t||be.getValueFor(e),da.getValueFor(e),of.getValueFor(e),rf.getValueFor(e),af.getValueFor(e),1,da.getValueFor(e),da.getValueFor(e)-of.getValueFor(e),da.getValueFor(e)-rf.getValueFor(e),af.getValueFor(e),1)}),dd=w("neutral-fill-input-alt-rest").withDefault(e=>Rl.getValueFor(e).evaluate(e).rest),hd=w("neutral-fill-input-alt-hover").withDefault(e=>Rl.getValueFor(e).evaluate(e).hover),fd=w("neutral-fill-input-alt-active").withDefault(e=>Rl.getValueFor(e).evaluate(e).active),pd=w("neutral-fill-input-alt-focus").withDefault(e=>Rl.getValueFor(e).evaluate(e).focus),Nn=A("neutral-fill-layer-recipe").withDefault({evaluate:(e,t)=>nn(Ke.getValueFor(e),t||be.getValueFor(e),on.getValueFor(e),o$.getValueFor(e),r$.getValueFor(e),on.getValueFor(e),1)}),I$=w("neutral-fill-layer-rest").withDefault(e=>Nn.getValueFor(e).evaluate(e).rest);w("neutral-fill-layer-hover").withDefault(e=>Nn.getValueFor(e).evaluate(e).hover);w("neutral-fill-layer-active").withDefault(e=>Nn.getValueFor(e).evaluate(e).active);const T$=A("neutral-fill-layer-alt-recipe").withDefault({evaluate:(e,t)=>nn(Ke.getValueFor(e),t||be.getValueFor(e),ha.getValueFor(e),ha.getValueFor(e),ha.getValueFor(e),ha.getValueFor(e))}),F$=w("neutral-fill-layer-alt-rest").withDefault(e=>T$.getValueFor(e).evaluate(e).rest),zn=A("neutral-fill-secondary-recipe").withDefault({evaluate:(e,t)=>nn(Ke.getValueFor(e),t||be.getValueFor(e),a$.getValueFor(e),l$.getValueFor(e),c$.getValueFor(e),u$.getValueFor(e))}),On=w("neutral-fill-secondary-rest").withDefault(e=>zn.getValueFor(e).evaluate(e).rest),gd=w("neutral-fill-secondary-hover").withDefault(e=>zn.getValueFor(e).evaluate(e).hover),D$=w("neutral-fill-secondary-active").withDefault(e=>zn.getValueFor(e).evaluate(e).active),R$=w("neutral-fill-secondary-focus").withDefault(e=>zn.getValueFor(e).evaluate(e).focus),Xi=A("neutral-fill-stealth-recipe").withDefault({evaluate:(e,t)=>nn(Ke.getValueFor(e),t||be.getValueFor(e),Rg.getValueFor(e),Eg.getValueFor(e),Og.getValueFor(e),Pg.getValueFor(e))}),So=w("neutral-fill-stealth-rest").withDefault(e=>Xi.getValueFor(e).evaluate(e).rest),Co=w("neutral-fill-stealth-hover").withDefault(e=>Xi.getValueFor(e).evaluate(e).hover),Io=w("neutral-fill-stealth-active").withDefault(e=>Xi.getValueFor(e).evaluate(e).active),E$=w("neutral-fill-stealth-focus").withDefault(e=>Xi.getValueFor(e).evaluate(e).focus),El=A("neutral-fill-strong-recipe").withDefault({evaluate:(e,t)=>_o(Ke.getValueFor(e),t||be.getValueFor(e),4.5,d$.getValueFor(e),Lg.getValueFor(e),Ag.getValueFor(e),Mg.getValueFor(e))}),em=w("neutral-fill-strong-rest").withDefault(e=>El.getValueFor(e).evaluate(e).rest),O$=w("neutral-fill-strong-hover").withDefault(e=>El.getValueFor(e).evaluate(e).hover),P$=w("neutral-fill-strong-active").withDefault(e=>El.getValueFor(e).evaluate(e).active);w("neutral-fill-strong-focus").withDefault(e=>El.getValueFor(e).evaluate(e).focus);const Ol=A("neutral-foreground-recipe").withDefault({evaluate:(e,t)=>_o(Ke.getValueFor(e),t||be.getValueFor(e),16,0,-19,-30,0)}),ze=w("neutral-foreground-rest").withDefault(e=>Ol.getValueFor(e).evaluate(e).rest),L$=w("neutral-foreground-hover").withDefault(e=>Ol.getValueFor(e).evaluate(e).hover),A$=w("neutral-foreground-active").withDefault(e=>Ol.getValueFor(e).evaluate(e).active);w("neutral-foreground-focus").withDefault(e=>Ol.getValueFor(e).evaluate(e).focus);const Ur=A("neutral-foreground-hint-recipe").withDefault({evaluate:(e,t)=>Mw(Ke.getValueFor(e),t||be.getValueFor(e),4.5)}),To=w("neutral-foreground-hint").withDefault(e=>Ur.getValueFor(e).evaluate(e)),Pl=A("neutral-stroke-recipe").withDefault({evaluate:(e,t)=>nn(Ke.getValueFor(e),t||be.getValueFor(e),Vg.getValueFor(e),Hg.getValueFor(e),Ng.getValueFor(e),zg.getValueFor(e))}),Sr=w("neutral-stroke-rest").withDefault(e=>Pl.getValueFor(e).evaluate(e).rest),M$=w("neutral-stroke-hover").withDefault(e=>Pl.getValueFor(e).evaluate(e).hover),V$=w("neutral-stroke-active").withDefault(e=>Pl.getValueFor(e).evaluate(e).active);w("neutral-stroke-focus").withDefault(e=>Pl.getValueFor(e).evaluate(e).focus);const Ll=A("neutral-stroke-control-recipe").withDefault({evaluate:(e,t)=>cg(Ke.getValueFor(e),t||be.getValueFor(e),Bg.getValueFor(e),jg.getValueFor(e),Yg.getValueFor(e),Ug.getValueFor(e),5)}),md=w("neutral-stroke-control-rest").withDefault(e=>Ll.getValueFor(e).evaluate(e).rest),tm=w("neutral-stroke-control-hover").withDefault(e=>Ll.getValueFor(e).evaluate(e).hover),im=w("neutral-stroke-control-active").withDefault(e=>Ll.getValueFor(e).evaluate(e).active);w("neutral-stroke-control-focus").withDefault(e=>Ll.getValueFor(e).evaluate(e).focus);const H$=A("neutral-stroke-divider-recipe").withDefault({evaluate:(e,t)=>Hw(Ke.getValueFor(e),t||be.getValueFor(e),Wg.getValueFor(e))}),Wa=w("neutral-stroke-divider-rest").withDefault(e=>H$.getValueFor(e).evaluate(e)),Al=A("neutral-stroke-input-recipe").withDefault({evaluate:(e,t)=>Aw(Ke.getValueFor(e),t||be.getValueFor(e),Bg.getValueFor(e),jg.getValueFor(e),Yg.getValueFor(e),Ug.getValueFor(e),20,ee.getValueFor(e)+"px")}),ff=w("neutral-stroke-input-rest").withDefault(e=>Al.getValueFor(e).evaluate(e).rest),N$=w("neutral-stroke-input-hover").withDefault(e=>Al.getValueFor(e).evaluate(e).hover);w("neutral-stroke-input-active").withDefault(e=>Al.getValueFor(e).evaluate(e).active);w("neutral-stroke-input-focus").withDefault(e=>Al.getValueFor(e).evaluate(e).focus);const vd=A("neutral-stroke-layer-recipe").withDefault({evaluate:(e,t)=>nn(Ke.getValueFor(e),t||be.getValueFor(e),lf.getValueFor(e),h$.getValueFor(e),f$.getValueFor(e),lf.getValueFor(e))}),uo=w("neutral-stroke-layer-rest").withDefault(e=>vd.getValueFor(e).evaluate(e).rest);w("neutral-stroke-layer-hover").withDefault(e=>vd.getValueFor(e).evaluate(e).hover);w("neutral-stroke-layer-active").withDefault(e=>vd.getValueFor(e).evaluate(e).active);const Ml=A("neutral-stroke-strong-recipe").withDefault({evaluate:(e,t)=>_o(Ke.getValueFor(e),t||be.getValueFor(e),5.5,0,p$.getValueFor(e),g$.getValueFor(e),m$.getValueFor(e))}),Lo=w("neutral-stroke-strong-rest").withDefault(e=>Ml.getValueFor(e).evaluate(e).rest),bd=w("neutral-stroke-strong-hover").withDefault(e=>Ml.getValueFor(e).evaluate(e).hover),yd=w("neutral-stroke-strong-active").withDefault(e=>Ml.getValueFor(e).evaluate(e).active);w("neutral-stroke-strong-focus").withDefault(e=>Ml.getValueFor(e).evaluate(e).focus);const z$=A("focus-stroke-outer-recipe").withDefault({evaluate:e=>Nw(Ke.getValueFor(e),be.getValueFor(e))}),Vl=w("focus-stroke-outer").withDefault(e=>z$.getValueFor(e).evaluate(e)),B$=A("focus-stroke-inner-recipe").withDefault({evaluate:e=>zw(ud.getValueFor(e),be.getValueFor(e),Vl.getValueFor(e))}),j$=w("focus-stroke-inner").withDefault(e=>B$.getValueFor(e).evaluate(e)),Hl=A("foreground-on-accent-large-recipe").withDefault({evaluate:e=>lg(Ge.getValueFor(e),Ui.getValueFor(e),Wi.getValueFor(e),Cl.getValueFor(e),Ua.large)});w("foreground-on-accent-rest-large").withDefault(e=>Hl.getValueFor(e).evaluate(e).rest);w("foreground-on-accent-hover-large").withDefault(e=>Hl.getValueFor(e).evaluate(e,Ui.getValueFor(e)).hover);w("foreground-on-accent-active-large").withDefault(e=>Hl.getValueFor(e).evaluate(e,Wi.getValueFor(e)).active);w("foreground-on-accent-focus-large").withDefault(e=>Hl.getValueFor(e).evaluate(e,Cl.getValueFor(e)).focus);const Y$=w("neutral-fill-inverse-rest-delta").withDefault(0),U$=w("neutral-fill-inverse-hover-delta").withDefault(-3),W$=w("neutral-fill-inverse-active-delta").withDefault(7),G$=w("neutral-fill-inverse-focus-delta").withDefault(0);function q$(e,t,i,s,n,o){const r=Vn(t),a=e.closestIndexOf(e.colorContrast(t,14)),l=a+r*Math.abs(i-s),c=r===1?i<s:r*i>r*s;let u,d;return c?(u=a,d=l):(u=l,d=a),{rest:e.get(u),hover:e.get(d),active:e.get(u+r*n),focus:e.get(u+r*o)}}const Nl=A("neutral-fill-inverse-recipe").withDefault({evaluate:(e,t)=>q$(Ke.getValueFor(e),t||be.getValueFor(e),Y$.getValueFor(e),U$.getValueFor(e),W$.getValueFor(e),G$.getValueFor(e))});w("neutral-fill-inverse-rest").withDefault(e=>Nl.getValueFor(e).evaluate(e).rest);w("neutral-fill-inverse-hover").withDefault(e=>Nl.getValueFor(e).evaluate(e).hover);w("neutral-fill-inverse-active").withDefault(e=>Nl.getValueFor(e).evaluate(e).active);w("neutral-fill-inverse-focus").withDefault(e=>Nl.getValueFor(e).evaluate(e).focus);const ht=pi`
  font-family: ${Ei};
  font-size: ${ed};
  line-height: ${dg};
  font-weight: initial;
  font-variation-settings: ${Xw};
`,sm=pi`
  font-family: ${Ei};
  font-size: ${td};
  line-height: ${id};
  font-weight: initial;
  font-variation-settings: ${Qw};
`;pi`
  font-family: ${Ei};
  font-size: ${sd};
  line-height: ${hg};
  font-weight: initial;
  font-variation-settings: ${Jw};
`;pi`
  font-family: ${Ei};
  font-size: ${nd};
  line-height: ${fg};
  font-weight: initial;
  font-variation-settings: ${Kw};
`;pi`
  font-family: ${Ei};
  font-size: ${od};
  line-height: ${pg};
  font-weight: initial;
  font-variation-settings: ${e$};
`;pi`
  font-family: ${Ei};
  font-size: ${rd};
  line-height: ${gg};
  font-weight: initial;
  font-variation-settings: ${t$};
`;pi`
  font-family: ${Ei};
  font-size: ${ad};
  line-height: ${mg};
  font-weight: initial;
  font-variation-settings: ${i$};
`;pi`
  font-family: ${Ei};
  font-size: ${ld};
  line-height: ${vg};
  font-weight: initial;
  font-variation-settings: ${s$};
`;pi`
  font-family: ${Ei};
  font-size: ${cd};
  line-height: ${bg};
  font-weight: initial;
  font-variation-settings: ${n$};
`;const Z$=(e,t)=>T`
    ${ke("flex")} :host {
      box-sizing: border-box;
      flex-direction: column;
      ${ht}
      color: ${ze};
      gap: calc(${Y} * 1px);
    }
  `,Oi=pi`
  outline: calc(${Vt} * 1px) solid ${Vl};
  outline-offset: calc(${Vt} * -1px);
`,Wr=pi`
  outline: calc(${Vt} * 1px) solid ${Vl};
  outline-offset: calc(${ee} * 1px);
`,we=pi`(${_l} + ${dn}) * ${Y}`,X$=je.create("neutral-fill-stealth-rest-on-neutral-fill-layer-rest").withDefault(e=>{const t=Nn.getValueFor(e);return Xi.getValueFor(e).evaluate(e,t.evaluate(e).rest).rest}),Q$=je.create("neutral-fill-stealth-hover-on-neutral-fill-layer-rest").withDefault(e=>{const t=Nn.getValueFor(e);return Xi.getValueFor(e).evaluate(e,t.evaluate(e).rest).hover}),J$=je.create("neutral-fill-stealth-active-on-neutral-fill-layer-rest").withDefault(e=>{const t=Nn.getValueFor(e);return Xi.getValueFor(e).evaluate(e,t.evaluate(e).rest).active}),K$=(e,t)=>T`
    ${ke("flex")} :host {
      box-sizing: border-box;
      ${ht};
      flex-direction: column;
      background: ${I$};
      color: ${ze};
      border: calc(${ee} * 1px) solid ${uo};
      border-radius: calc(${ys} * 1px);
    }

    .region {
      display: none;
      padding: calc(${Y} * 2 * 1px);
      background: ${F$};
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

    .button:${he}::before {
      ${Oi}
      border-radius: calc(${ys} * 1px);
    }

    :host(.expanded) .button:${he}::before {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    :host(.expanded) .region {
      display: block;
      border-top: calc(${ee} * 1px) solid ${uo};
      border-bottom-left-radius: calc((${ys} - ${ee}) * 1px);
      border-bottom-right-radius: calc((${ys} - ${ee}) * 1px);
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-column: 4;
      pointer-events: none;
      background: ${X$};
      border-radius: calc(${Ve} * 1px);
      fill: currentcolor;
      width: calc(${we} * 1px);
      height: calc(${we} * 1px);
      margin: calc(${Y} * 2 * 1px);
    }

    .heading:hover .icon {
      background: ${Q$};
    }

    .heading:active .icon {
      background: ${J$};
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
  `.withBehaviors($e(T`
        .button:${he}::before {
          outline-color: ${m.Highlight};
        }
        .icon {
          fill: ${m.ButtonText};
        }
      `)),e1=Dn.compose({baseName:"accordion-item",template:Gy,styles:K$,collapsedIcon:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `,expandedIcon:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 7.35c.2.2.5.2.7 0L6 4.21l3.15 3.14a.5.5 0 10.7-.7l-3.5-3.5a.5.5 0 00-.7 0l-3.5 3.5a.5.5 0 000 .7z"/>
    </svg>
  `}),t1=Gu.compose({baseName:"accordion",template:a0,styles:Z$});function B(e,t,i,s){var n=arguments.length,o=n<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,i):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o}class Ao{constructor(t,i){this.cache=new WeakMap,this.ltr=t,this.rtl=i}bind(t){this.attach(t)}unbind(t){const i=this.cache.get(t);i&&Ra.unsubscribe(i)}attach(t){const i=this.cache.get(t)||new i1(this.ltr,this.rtl,t),s=Ra.getValueFor(t);Ra.subscribe(i),i.attach(s),this.cache.set(t,i)}}class i1{constructor(t,i,s){this.ltr=t,this.rtl=i,this.source=s,this.attached=null}handleChange({target:t,token:i}){this.attach(i.getValueFor(this.source))}attach(t){this.attached!==this[t]&&(this.attached!==null&&this.source.$fastController.removeStyles(this.attached),this.attached=this[t],this.attached!==null&&this.source.$fastController.addStyles(this.attached))}}const Bn=je.create({name:"elevation-shadow",cssCustomPropertyName:null}).withDefault({evaluate:(e,t,i)=>{let s=.12,n=.14;t>16&&(s=.2,n=.24);const o=`0 0 2px rgba(0, 0, 0, ${s})`,r=`0 calc(${t} * 0.5px) calc((${t} * 1px)) rgba(0, 0, 0, ${n})`;return`${o}, ${r}`}}),s1=je.create("elevation-shadow-card-rest-size").withDefault(4),n1=je.create("elevation-shadow-card-hover-size").withDefault(8),o1=je.create("elevation-shadow-card-active-size").withDefault(0),r1=je.create("elevation-shadow-card-focus-size").withDefault(8),a1=je.create("elevation-shadow-card-rest").withDefault(e=>Bn.getValueFor(e).evaluate(e,s1.getValueFor(e)));je.create("elevation-shadow-card-hover").withDefault(e=>Bn.getValueFor(e).evaluate(e,n1.getValueFor(e)));je.create("elevation-shadow-card-active").withDefault(e=>Bn.getValueFor(e).evaluate(e,o1.getValueFor(e)));je.create("elevation-shadow-card-focus").withDefault(e=>Bn.getValueFor(e).evaluate(e,r1.getValueFor(e)));const l1=je.create("elevation-shadow-tooltip-size").withDefault(16),c1=je.create("elevation-shadow-tooltip").withDefault(e=>Bn.getValueFor(e).evaluate(e,l1.getValueFor(e))),u1=je.create("elevation-shadow-flyout-size").withDefault(32),nm=je.create("elevation-shadow-flyout").withDefault(e=>Bn.getValueFor(e).evaluate(e,u1.getValueFor(e))),d1=je.create("elevation-shadow-dialog-size").withDefault(128),h1=je.create("elevation-shadow-dialog").withDefault(e=>Bn.getValueFor(e).evaluate(e,d1.getValueFor(e))),om=(e,t,i,s="[disabled]")=>T`
    ${ke("inline-flex")}
    
    :host {
      position: relative;
      box-sizing: border-box;
      ${ht}
      height: calc(${we} * 1px);
      min-width: calc(${we} * 1px);
      color: ${ze};
      border-radius: calc(${Ve} * 1px);
      fill: currentcolor;
    }

    .control {
      border: calc(${ee} * 1px) solid transparent;
      flex-grow: 1;
      box-sizing: border-box;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 calc((10 + (${Y} * 2 * ${dn})) * 1px);
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

    .control:${he} {
      ${Oi}
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
  `,xd=(e,t,i,s="[disabled]")=>T`
    .control {
      background: padding-box linear-gradient(${_i}, ${_i}),
        border-box ${md};
    }

    :host(${i}:hover) .control {
      background: padding-box linear-gradient(${cf}, ${cf}),
        border-box ${tm};
    }

    :host(${i}:active) .control {
      background: padding-box linear-gradient(${uf}, ${uf}),
        border-box ${im};
    }

    :host(${s}) .control {
      background: padding-box linear-gradient(${_i}, ${_i}),
        border-box ${Sr};
    }
  `.withBehaviors($e(T`
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

        .control:${he} {
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
    `)),rm=(e,t,i,s="[disabled]")=>T`
    .control {
      background: padding-box linear-gradient(${Ge}, ${Ge}),
        border-box ${_$};
      color: ${En};
    }

    :host(${i}:hover) .control {
      background: padding-box linear-gradient(${Ui}, ${Ui}),
        border-box ${S$};
      color: ${Zg};
    }

    :host(${i}:active) .control {
      background: padding-box linear-gradient(${Wi}, ${Wi}),
        border-box ${C$};
      color: ${Xg};
    }

    :host(${s}) .control {
      background: ${Ge};
    }

    .control:${he} {
      box-shadow: 0 0 0 calc(${Vt} * 1px) ${j$} inset !important;
    }
  `.withBehaviors($e(T`
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

        .control:${he} {
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
      `)),f1=(e,t,i,s="[disabled]")=>T`
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
      color: ${Qg};
      text-decoration: underline 1px;
    }

    :host(${i}:hover) .control {
      color: ${Jg};
      text-decoration: none;
    }

    :host(${i}:active) .control {
      color: ${Kg};
      text-decoration: none;
    }

    .control:${he} {
      ${Wr}
    }
  `.withBehaviors($e(T`
        :host(${i}) .control {
          color: ${m.LinkText};
        }

        :host(${i}:hover) .control,
        :host(${i}:active) .control {
          color: ${m.CanvasText};
        }

        .control:${he} {
          outline-color: ${m.CanvasText};
        }
      `)),am=(e,t,i,s="[disabled]")=>T`
    :host {
      color: ${Qg};
    }

    .control {
      background: ${So};
    }

    :host(${i}:hover) .control {
      background: ${Co};
      color: ${Jg};
    }

    :host(${i}:active) .control {
      background: ${Io};
      color: ${Kg};
    }

    :host(${s}) .control {
      background: ${So};
    }
  `.withBehaviors($e(T`
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

        .control:${he} {
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
      `)),lm=(e,t,i,s="[disabled]")=>T`
    .control {
      background: transparent !important;
      border-color: ${Sr};
    }

    :host(${i}:hover) .control {
      border-color: ${M$};
    }

    :host(${i}:active) .control {
      border-color: ${V$};
    }

    :host(${s}) .control {
      background: transparent !important;
      border-color: ${Sr};
    }
  `.withBehaviors($e(T`
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

        .control:${he} {
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
      `)),wd=(e,t,i,s="[disabled]")=>T`
    .control {
      background: ${So};
    }

    :host(${i}:hover) .control {
      background: ${Co};
    }

    :host(${i}:active) .control {
      background: ${Io};
    }

    :host(${s}) .control {
      background: ${So};
    }
  `.withBehaviors($e(T`
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
        
        .control:${he} {
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
      `)),p1=je.create("input-placeholder-rest").withDefault(e=>{const t=hn.getValueFor(e);return Ur.getValueFor(e).evaluate(e,t.evaluate(e).rest)}),g1=je.create("input-placeholder-hover").withDefault(e=>{const t=hn.getValueFor(e);return Ur.getValueFor(e).evaluate(e,t.evaluate(e).hover)}),m1=je.create("input-filled-placeholder-rest").withDefault(e=>{const t=zn.getValueFor(e);return Ur.getValueFor(e).evaluate(e,t.evaluate(e).rest)}),v1=je.create("input-filled-placeholder-hover").withDefault(e=>{const t=zn.getValueFor(e);return Ur.getValueFor(e).evaluate(e,t.evaluate(e).hover)}),zl=(e,t,i)=>T`
  :host {
    ${ht}
    color: ${ze};
    fill: currentcolor;
    user-select: none;
    position: relative;
  }

  ${i} {
    box-sizing: border-box;
    position: relative;
    color: inherit;
    border: calc(${ee} * 1px) solid transparent;
    border-radius: calc(${Ve} * 1px);
    height: calc(${we} * 1px);
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
    ${ht}
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
    cursor: ${Ri};
  }

  :host([disabled]) {
    opacity: ${yi};
  }
`,Gr=(e,t,i)=>T`
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
      border-bottom: calc(${Vt} * 1px) solid ${Ge};
      border-bottom-left-radius: calc(${Ve} * 1px);
      border-bottom-right-radius: calc(${Ve} * 1px);
      z-index: 2;
      transition: all 300ms cubic-bezier(0.1, 0.9, 0.2, 1);
    }
  }
`,qr=(e,t,i,s=":not([disabled]):not(:focus-within)")=>T`
  ${i} {
    background: padding-box linear-gradient(${fa}, ${fa}),
      border-box ${ff};
  }

  :host(${s}:hover) ${i} {
    background: padding-box linear-gradient(${df}, ${df}),
      border-box ${N$};
  }

  :host(:not([disabled]):focus-within) ${i} {
    background: padding-box linear-gradient(${hf}, ${hf}),
      border-box ${ff};
  }
  
  :host([disabled]) ${i} {
    background: padding-box linear-gradient(${fa}, ${fa}),
      border-box ${Sr};
  }

  .control::placeholder {
    color: ${p1};
  }

  :host(${s}:hover) .control::placeholder {
    color: ${g1};
  }
`,Mo=(e,t,i,s=":not([disabled]):not(:focus-within)")=>T`
  ${i} {
    background: ${On};
  }

  :host(${s}:hover) ${i} {
    background: ${gd};
  }

  :host(:not([disabled]):focus-within) ${i} {
    background: ${R$};
  }

  :host([disabled]) ${i} {
    background: ${On};
  }

  .control::placeholder {
    color: ${m1};
  }

  :host(${s}:hover) .control::placeholder {
    color: ${v1};
  }
`,Vo=(e,t,i,s=":not([disabled]):not(:focus-within)")=>T`
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
    ${Oi}
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
`;function rt(e,t){return new gw("appearance",e,t)}const Zn="[href]",b1=(e,t)=>om().withBehaviors(rt("neutral",xd(e,t,Zn)),rt("accent",rm(e,t,Zn)),rt("hypertext",f1(e,t,Zn)),rt("lightweight",am(e,t,Zn)),rt("outline",lm(e,t,Zn)),rt("stealth",wd(e,t,Zn)));class cm extends gi{appearanceChanged(t,i){t!==i&&(this.classList.add(i),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){var t,i;const s=this.defaultSlottedContent.filter(n=>n.nodeType===Node.ELEMENT_NODE);s.length===1&&s[0]instanceof SVGElement?(t=this.control)===null||t===void 0||t.classList.add("icon-only"):(i=this.control)===null||i===void 0||i.classList.remove("icon-only")}}B([f],cm.prototype,"appearance",void 0);const y1=cm.compose({baseName:"anchor",baseClass:gi,template:Up,styles:b1,shadowOptions:{delegatesFocus:!0}}),x1=(e,t)=>T`
  :host {
    contain: layout;
    display: block;
  }
`,w1=re.compose({baseName:"anchored-region",template:b0,styles:x1}),$1=(e,t)=>T`
    ${ke("inline-block")} :host {
      box-sizing: border-box;
      ${sm};
    }

    .control {
      border-radius: calc(${Ve} * 1px);
      padding: calc(((${Y} * 0.5) - ${ee}) * 1px) calc((${Y} - ${ee}) * 1px);
      border: calc(${ee} * 1px) solid transparent;
    }

    :host(.lightweight) .control {
      background: transparent;
      color: ${ze};
      font-weight: 600;
    }

    :host(.accent) .control {
      background: ${Ge};
      color: ${En};
    }

    :host(.neutral) .control {
      background: ${On};
      color: ${ze};
    }

    :host([circular]) .control {
      border-radius: 100px;
      min-width: calc(${id} - calc(${Y} * 1px));
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;class um extends Vr{constructor(){super(...arguments),this.appearance="lightweight"}appearanceChanged(t,i){t!==i&&ce.queueUpdate(()=>{this.classList.add(i),this.classList.remove(t)})}}B([f({mode:"fromView"})],um.prototype,"appearance",void 0);const k1=um.compose({baseName:"badge",baseClass:Vr,template:x0,styles:$1}),_1=(e,t)=>T`
  ${ke("inline-block")} :host {
    box-sizing: border-box;
    ${ht};
  }

  .list {
    display: flex;
  }
`,S1=Wp.compose({baseName:"breadcrumb",template:$0,styles:_1}),C1=(e,t)=>T`
    ${ke("inline-flex")} :host {
      background: transparent;
      color: ${ze};
      fill: currentcolor;
      box-sizing: border-box;
      ${ht};
      min-width: calc(${we} * 1px);
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
      color: ${L$};
    }

    .control:active {
      color: ${A$};
    }

    .control:${he} {
      ${Wr}
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
  `.withBehaviors($e(T`
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
        .control:${he} {
          outline-color: ${m.LinkText};
        }
      `)),I1=wr.compose({baseName:"breadcrumb-item",template:w0,styles:C1,shadowOptions:{delegatesFocus:!0},separator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>
    </svg>
  `}),mn=":not([disabled])",Bs="[disabled]",T1=(e,t)=>T`
    :host(${mn}) .control {
      cursor: pointer;
    }

    :host(${Bs}) .control {
      cursor: ${Ri};
    }

    @media (forced-colors: none) {
      :host(${Bs}) .control {
        opacity: ${yi};
      }
    }

    ${om(e,t,mn,Bs)}
  `.withBehaviors(rt("neutral",xd(e,t,mn,Bs)),rt("accent",rm(e,t,mn,Bs)),rt("lightweight",am(e,t,mn,Bs)),rt("outline",lm(e,t,mn,Bs)),rt("stealth",wd(e,t,mn,Bs)));class dm extends mi{appearanceChanged(t,i){t!==i&&(this.classList.add(i),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const t=this.defaultSlottedContent.filter(i=>i.nodeType===Node.ELEMENT_NODE);t.length===1&&t[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}B([f],dm.prototype,"appearance",void 0);const F1=dm.compose({baseName:"button",baseClass:mi,template:k0,styles:T1,shadowOptions:{delegatesFocus:!0}}),D1=T`
.day.disabled::before {
  transform: translate(-50%, 0) rotate(45deg);
}
`,R1=T`
.day.disabled::before {
  transform: translate(50%, 0) rotate(-45deg);
}
`,E1=(e,t)=>T`
${ke("inline-block")} :host {
  --calendar-cell-size: calc((${_l} + 2 + ${dn}) * ${Y} * 1px);
  --calendar-gap: 2px;
  ${ht}
  color: ${ze};
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
  color: ${To};
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
  color: ${Ge};
  border: 1px solid ${Ge};
  background: ${be};
}

.selected + .selected {
  border-start-start-radius: 0;
  border-end-start-radius: 0;
  border-inline-start-width: 0;
  padding-inline-start: calc(var(--calendar-gap) + (${ee} + ${Ve}) * 1px);
  margin-inline-start: calc((${Ve} * -1px) - var(--calendar-gap));
}

.today.disabled::before {
  color: ${En};
}

.today .date {
  color: ${En};
  background: ${Ge};
  border-radius: 50%;
  position: relative;
}
`.withBehaviors($e(T`
          .day.selected {
              color: ${m.Highlight};
          }

          .today .date {
              background: ${m.Highlight};
              color: ${m.HighlightText};
          }
      `),new Ao(D1,R1));class hm extends Di{constructor(){super(...arguments),this.readonly=!0}}B([f({converter:Mr})],hm.prototype,"readonly",void 0);const O1=hm.compose({baseName:"calendar",template:z0,styles:E1,title:L0}),P1=(e,t)=>T`
    ${ke("block")} :host {
      display: block;
      contain: content;
      height: var(--card-height, 100%);
      width: var(--card-width, 100%);
      box-sizing: border-box;
      background: ${be};
      color: ${ze};
      border: calc(${ee} * 1px) solid ${uo};
      border-radius: calc(${ys} * 1px);
      box-shadow: ${a1};
    }

    :host {
      content-visibility: auto;
    }
  `.withBehaviors($e(T`
        :host {
          background: ${m.Canvas};
          color: ${m.CanvasText};
        }
      `));class $d extends Gp{cardFillColorChanged(t,i){if(i){const s=Cn(i);s!==null&&(this.neutralPaletteSource=i,be.setValueFor(this,Ii.create(s.r,s.g,s.b)))}}neutralPaletteSourceChanged(t,i){if(i){const s=Cn(i),n=Ii.create(s.r,s.g,s.b);Ke.setValueFor(this,_r.create(n))}}handleChange(t,i){this.cardFillColor||be.setValueFor(this,s=>Nn.getValueFor(s).evaluate(s,be.getValueFor(t)).rest)}connectedCallback(){super.connectedCallback();const t=za(this);if(t){const i=le.getNotifier(t);i.subscribe(this,"fillColor"),i.subscribe(this,"neutralPalette"),this.handleChange(t,"fillColor")}}}B([f({attribute:"card-fill-color",mode:"fromView"})],$d.prototype,"cardFillColor",void 0);B([f({attribute:"neutral-palette-source",mode:"fromView"})],$d.prototype,"neutralPaletteSource",void 0);const L1=$d.compose({baseName:"card",baseClass:Gp,template:B0,styles:P1}),A1=(e,t)=>T`
    ${ke("inline-flex")} :host {
      align-items: center;
      outline: none;
      ${""} user-select: none;
    }

    .control {
      position: relative;
      width: calc((${we} / 2 + ${Y}) * 1px);
      height: calc((${we} / 2 + ${Y}) * 1px);
      box-sizing: border-box;
      border-radius: calc(${Ve} * 1px);
      border: calc(${ee} * 1px) solid ${Lo};
      background: ${dd};
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      ${ht}
      color: ${ze};
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
      fill: ${En};
    }

    :host(:not(.disabled):hover) .control {
      background: ${hd};
      border-color: ${bd};
    }

    :host(:not(.disabled):active) .control {
      background: ${fd};
      border-color: ${yd};
    }

    :host(:${he}) .control {
      background: ${pd};
      ${Wr}
    }

    :host(.checked) .control {
      background: ${Ge};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${Ui};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${Wi};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${Ri};
    }

    :host(.checked:not(.indeterminate)) slot[name='checked-indicator'],
    :host(.indeterminate) slot[name='indeterminate-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${yi};
    }
  `.withBehaviors($e(T`
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
        :host(:${he}) .control {
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
      `)),M1=pl.compose({baseName:"checkbox",template:j0,styles:A1,checkedIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>
    </svg>
  `,indeterminateIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 8z"/>
    </svg>
  `}),pf=".control",pa=":not([disabled]):not([open])",gf="[disabled]",fm=(e,t)=>T`
    ${ke("inline-flex")}
    
    :host {
      border-radius: calc(${Ve} * 1px);
      box-sizing: border-box;
      color: ${ze};
      fill: currentcolor;
      font-family: ${Ei};
      position: relative;
      user-select: none;
      min-width: 250px;
      vertical-align: top;
    }

    .listbox {
      box-shadow: ${nm};
      background: ${be};
      border-radius: calc(${ys} * 1px);
      box-sizing: border-box;
      display: inline-flex;
      flex-direction: column;
      left: 0;
      max-height: calc(var(--max-height) - (${we} * 1px));
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
      border-radius: calc(${Ve} * 1px);
      height: calc(${we} * 1px);
      align-items: center;
      box-sizing: border-box;
      cursor: pointer;
      display: flex;
      ${ht}
      min-height: 100%;
      padding: 0 calc(${Y} * 2.25px);
      width: 100%;
    }

    :host(:${he}) {
      ${Oi}
    }

    :host([disabled]) .control {
      cursor: ${Ri};
      opacity: ${yi};
      user-select: none;
    }

    :host([open][position='above']) .listbox {
      bottom: calc((${we} + ${Y} * 2) * 1px);
    }

    :host([open][position='below']) .listbox {
      top: calc((${we} + ${Y} * 2) * 1px);
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
  `,V1=(e,t)=>T`
    :host([open]) .listbox {
      background: ${m.ButtonFace};
      border-color: ${m.CanvasText};
    }
  `,H1=(e,t)=>fm().withBehaviors(rt("outline",xd(e,t,pa,gf)),rt("filled",Mo(e,t,pf,pa).withBehaviors($e(Vo(e,t,pf,pa)))),rt("stealth",wd(e,t,pa,gf)),$e(V1())),Mc=".control",Vc=":not([disabled]):not([open])",N1=(e,t)=>T`
    ${fm()}

    ${Gr()}

    :host(:empty) .listbox {
      display: none;
    }

    :host([disabled]) *,
    :host([disabled]) {
      cursor: ${Ri};
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
  `.withBehaviors(rt("outline",qr(e,t,Mc,Vc)),rt("filled",Mo(e,t,Mc,Vc)),$e(Vo(e,t,Mc,Vc)));class pm extends Rs{appearanceChanged(t,i){t!==i&&(this.classList.add(i),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&be.setValueFor(this.listbox,Yr)}}B([f({mode:"fromView"})],pm.prototype,"appearance",void 0);const z1=pm.compose({baseName:"combobox",baseClass:Rs,shadowOptions:{delegatesFocus:!0},template:q0,styles:N1,indicator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `}),B1=(e,t)=>T`
  :host {
    display: flex;
    position: relative;
    flex-direction: column;
  }
`,j1=(e,t)=>T`
    :host {
      display: grid;
      padding: 1px 0;
      box-sizing: border-box;
      width: 100%;
      border-bottom: calc(${ee} * 1px) solid ${Wa};
    }

    :host(.header) {
    }

    :host(.sticky-header) {
      background: ${be};
      position: sticky;
      top: 0;
    }
  `.withBehaviors($e(T`
        :host {
        }
      `)),Y1=(e,t)=>T`
    :host {
      padding: calc((${Y} + ${Vt} - ${ee}) * 1px) calc(((${Y} * 3) + ${Vt} - ${ee}) * 1px);
      color: ${ze};
      box-sizing: border-box;
      ${ht}
      border: transparent calc(${ee} * 1px) solid;
      overflow: hidden;
      white-space: nowrap;
      border-radius: calc(${Ve} * 1px);
    }

    :host(.column-header) {
      font-weight: 600;
    }

    :host(:${he}) {
      ${Oi}
    }
  `.withBehaviors($e(T`
        :host {
          forced-color-adjust: none;
          background: ${m.Field};
          color: ${m.FieldText};
        }

        :host(:${he}) {
          outline-color: ${m.FieldText};
        }
      `)),U1=Ds.compose({baseName:"data-grid-cell",template:P0,styles:Y1}),W1=Pt.compose({baseName:"data-grid-row",template:O0,styles:j1}),G1=St.compose({baseName:"data-grid",template:T0,styles:B1}),kd={toView(e){return e==null?null:e==null?void 0:e.toColorString()},fromView(e){if(e==null)return null;const t=Cn(e);return t?Ii.create(t.r,t.g,t.b):null}},mf=T`
  :host {
    background-color: ${be};
    color: ${ze};
  }
`.withBehaviors($e(T`
      :host {
        background-color: ${m.Canvas};
        box-shadow: 0 0 0 1px ${m.CanvasText};
        color: ${m.CanvasText};
      }
    `));function J(e){return(t,i)=>{t[i+"Changed"]=function(s,n){n!=null?e.setValueFor(this,n):e.deleteValueFor(this)}}}class Q extends de{constructor(){super(),this.noPaint=!1;const t={handleChange:this.noPaintChanged.bind(this)};le.getNotifier(this).subscribe(t,"fillColor"),le.getNotifier(this).subscribe(t,"baseLayerLuminance")}connectedCallback(){super.connectedCallback(),this.noPaintChanged()}noPaintChanged(){!this.noPaint&&(this.fillColor!==void 0||this.baseLayerLuminance)?this.$fastController.addStyles(mf):this.$fastController.removeStyles(mf)}}B([f({attribute:"no-paint",mode:"boolean"})],Q.prototype,"noPaint",void 0);B([f({attribute:"fill-color",converter:kd,mode:"fromView"}),J(be)],Q.prototype,"fillColor",void 0);B([f({attribute:"accent-base-color",converter:kd,mode:"fromView"}),J(qg)],Q.prototype,"accentBaseColor",void 0);B([f({attribute:"neutral-base-color",converter:kd,mode:"fromView"}),J(Gg)],Q.prototype,"neutralBaseColor",void 0);B([f({converter:q}),J(dn)],Q.prototype,"density",void 0);B([f({attribute:"design-unit",converter:q}),J(Y)],Q.prototype,"designUnit",void 0);B([f({attribute:"direction"}),J(Ra)],Q.prototype,"direction",void 0);B([f({attribute:"base-height-multiplier",converter:q}),J(_l)],Q.prototype,"baseHeightMultiplier",void 0);B([f({attribute:"base-horizontal-spacing-multiplier",converter:q}),J(qw)],Q.prototype,"baseHorizontalSpacingMultiplier",void 0);B([f({attribute:"control-corner-radius",converter:q}),J(Ve)],Q.prototype,"controlCornerRadius",void 0);B([f({attribute:"layer-corner-radius",converter:q}),J(ys)],Q.prototype,"layerCornerRadius",void 0);B([f({attribute:"stroke-width",converter:q}),J(ee)],Q.prototype,"strokeWidth",void 0);B([f({attribute:"focus-stroke-width",converter:q}),J(Vt)],Q.prototype,"focusStrokeWidth",void 0);B([f({attribute:"disabled-opacity",converter:q}),J(yi)],Q.prototype,"disabledOpacity",void 0);B([f({attribute:"type-ramp-minus-2-font-size"}),J(sd)],Q.prototype,"typeRampMinus2FontSize",void 0);B([f({attribute:"type-ramp-minus-2-line-height"}),J(hg)],Q.prototype,"typeRampMinus2LineHeight",void 0);B([f({attribute:"type-ramp-minus-1-font-size"}),J(td)],Q.prototype,"typeRampMinus1FontSize",void 0);B([f({attribute:"type-ramp-minus-1-line-height"}),J(id)],Q.prototype,"typeRampMinus1LineHeight",void 0);B([f({attribute:"type-ramp-base-font-size"}),J(ed)],Q.prototype,"typeRampBaseFontSize",void 0);B([f({attribute:"type-ramp-base-line-height"}),J(dg)],Q.prototype,"typeRampBaseLineHeight",void 0);B([f({attribute:"type-ramp-plus-1-font-size"}),J(nd)],Q.prototype,"typeRampPlus1FontSize",void 0);B([f({attribute:"type-ramp-plus-1-line-height"}),J(fg)],Q.prototype,"typeRampPlus1LineHeight",void 0);B([f({attribute:"type-ramp-plus-2-font-size"}),J(od)],Q.prototype,"typeRampPlus2FontSize",void 0);B([f({attribute:"type-ramp-plus-2-line-height"}),J(pg)],Q.prototype,"typeRampPlus2LineHeight",void 0);B([f({attribute:"type-ramp-plus-3-font-size"}),J(rd)],Q.prototype,"typeRampPlus3FontSize",void 0);B([f({attribute:"type-ramp-plus-3-line-height"}),J(gg)],Q.prototype,"typeRampPlus3LineHeight",void 0);B([f({attribute:"type-ramp-plus-4-font-size"}),J(ad)],Q.prototype,"typeRampPlus4FontSize",void 0);B([f({attribute:"type-ramp-plus-4-line-height"}),J(mg)],Q.prototype,"typeRampPlus4LineHeight",void 0);B([f({attribute:"type-ramp-plus-5-font-size"}),J(ld)],Q.prototype,"typeRampPlus5FontSize",void 0);B([f({attribute:"type-ramp-plus-5-line-height"}),J(vg)],Q.prototype,"typeRampPlus5LineHeight",void 0);B([f({attribute:"type-ramp-plus-6-font-size"}),J(cd)],Q.prototype,"typeRampPlus6FontSize",void 0);B([f({attribute:"type-ramp-plus-6-line-height"}),J(bg)],Q.prototype,"typeRampPlus6LineHeight",void 0);B([f({attribute:"accent-fill-rest-delta",converter:q}),J(cu)],Q.prototype,"accentFillRestDelta",void 0);B([f({attribute:"accent-fill-hover-delta",converter:q}),J(uu)],Q.prototype,"accentFillHoverDelta",void 0);B([f({attribute:"accent-fill-active-delta",converter:q}),J(du)],Q.prototype,"accentFillActiveDelta",void 0);B([f({attribute:"accent-fill-focus-delta",converter:q}),J(hu)],Q.prototype,"accentFillFocusDelta",void 0);B([f({attribute:"accent-foreground-rest-delta",converter:q}),J(yg)],Q.prototype,"accentForegroundRestDelta",void 0);B([f({attribute:"accent-foreground-hover-delta",converter:q}),J(xg)],Q.prototype,"accentForegroundHoverDelta",void 0);B([f({attribute:"accent-foreground-active-delta",converter:q}),J(wg)],Q.prototype,"accentForegroundActiveDelta",void 0);B([f({attribute:"accent-foreground-focus-delta",converter:q}),J($g)],Q.prototype,"accentForegroundFocusDelta",void 0);B([f({attribute:"neutral-fill-rest-delta",converter:q}),J(kg)],Q.prototype,"neutralFillRestDelta",void 0);B([f({attribute:"neutral-fill-hover-delta",converter:q}),J(_g)],Q.prototype,"neutralFillHoverDelta",void 0);B([f({attribute:"neutral-fill-active-delta",converter:q}),J(Sg)],Q.prototype,"neutralFillActiveDelta",void 0);B([f({attribute:"neutral-fill-focus-delta",converter:q}),J(Cg)],Q.prototype,"neutralFillFocusDelta",void 0);B([f({attribute:"neutral-fill-input-rest-delta",converter:q}),J(Ig)],Q.prototype,"neutralFillInputRestDelta",void 0);B([f({attribute:"neutral-fill-input-hover-delta",converter:q}),J(Tg)],Q.prototype,"neutralFillInputHoverDelta",void 0);B([f({attribute:"neutral-fill-input-active-delta",converter:q}),J(Fg)],Q.prototype,"neutralFillInputActiveDelta",void 0);B([f({attribute:"neutral-fill-input-focus-delta",converter:q}),J(Dg)],Q.prototype,"neutralFillInputFocusDelta",void 0);B([f({attribute:"neutral-fill-layer-rest-delta",converter:q}),J(on)],Q.prototype,"neutralFillLayerRestDelta",void 0);B([f({attribute:"neutral-fill-stealth-rest-delta",converter:q}),J(Rg)],Q.prototype,"neutralFillStealthRestDelta",void 0);B([f({attribute:"neutral-fill-stealth-hover-delta",converter:q}),J(Eg)],Q.prototype,"neutralFillStealthHoverDelta",void 0);B([f({attribute:"neutral-fill-stealth-active-delta",converter:q}),J(Og)],Q.prototype,"neutralFillStealthActiveDelta",void 0);B([f({attribute:"neutral-fill-stealth-focus-delta",converter:q}),J(Pg)],Q.prototype,"neutralFillStealthFocusDelta",void 0);B([f({attribute:"neutral-fill-strong-hover-delta",converter:q}),J(Lg)],Q.prototype,"neutralFillStrongHoverDelta",void 0);B([f({attribute:"neutral-fill-strong-active-delta",converter:q}),J(Ag)],Q.prototype,"neutralFillStrongActiveDelta",void 0);B([f({attribute:"neutral-fill-strong-focus-delta",converter:q}),J(Mg)],Q.prototype,"neutralFillStrongFocusDelta",void 0);B([f({attribute:"base-layer-luminance",converter:q}),J(Hn)],Q.prototype,"baseLayerLuminance",void 0);B([f({attribute:"neutral-stroke-divider-rest-delta",converter:q}),J(Wg)],Q.prototype,"neutralStrokeDividerRestDelta",void 0);B([f({attribute:"neutral-stroke-rest-delta",converter:q}),J(Vg)],Q.prototype,"neutralStrokeRestDelta",void 0);B([f({attribute:"neutral-stroke-hover-delta",converter:q}),J(Hg)],Q.prototype,"neutralStrokeHoverDelta",void 0);B([f({attribute:"neutral-stroke-active-delta",converter:q}),J(Ng)],Q.prototype,"neutralStrokeActiveDelta",void 0);B([f({attribute:"neutral-stroke-focus-delta",converter:q}),J(zg)],Q.prototype,"neutralStrokeFocusDelta",void 0);const q1=Q.compose({baseName:"design-system-provider",template:P` <slot></slot> `,styles:T`
    ${ke("block")}
  `}),Z1=(e,t)=>T`
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
    box-shadow: ${h1};
    margin-top: auto;
    margin-bottom: auto;
    border-radius: calc(${ys} * 1px);
    width: var(--dialog-width);
    height: var(--dialog-height);
    background: ${be};
    z-index: 1;
    border: calc(${ee} * 1px) solid transparent;
  }
`,X1=Ci.compose({baseName:"dialog",template:lx,styles:Z1}),Q1=(e,t)=>T`
    ${ke("block")} :host {
      box-sizing: content-box;
      height: 0;
      border: none;
      border-top: calc(${ee} * 1px) solid ${Wa};
    }

    :host([orientation="vertical"]) {
      border: none;
      height: 100%;
      margin: 0 calc(${Y} * 1px);
      border-left: calc(${ee} * 1px) solid ${Wa};
  }
  `,J1=ml.compose({baseName:"divider",template:wx,styles:Q1}),K1=(e,t)=>T`
    ${ke("inline-flex")} :host {
      height: calc((${we} + ${Y}) * 1px);
      justify-content: center;
      align-items: center;
      fill: currentcolor;
      color: ${em};
      background: padding-box linear-gradient(${_i}, ${_i}),
        border-box ${md};
      box-sizing: border-box;
      border: calc(${ee} * 1px) solid transparent;
      border-radius: calc(${Ve} * 1px);
      padding: 0;
    }

    :host(.disabled) {
      opacity: ${yi};
      cursor: ${Ri};
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
      color: ${O$};
    }

    :host(:not(.disabled):active) {
      color: ${P$};
    }

    :host(:${he}) {
      ${Oi}
    }

    :host::-moz-focus-inner {
      border: 0;
    }
  `.withBehaviors($e(T`
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
        :host(:${he}) {
          forced-color-adjust: none;
          outline-color: ${m.Highlight};
        }
      `)),ek=vl.compose({baseName:"flipper",template:kx,styles:K1,next:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.57 11.84A1 1 0 016 11.02V4.98a1 1 0 011.57-.82l3.79 2.62c.85.59.85 1.85 0 2.44l-3.79 2.62z"/>
    </svg>
  `,previous:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.43 11.84a1 1 0 001.57-.82V4.98a1 1 0 00-1.57-.82L5.64 6.78c-.85.59-.85 1.85 0 2.44l3.79 2.62z"/>
    </svg>
  `}),tk=T`
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
`,ik=T`
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
`,sk=T`
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
`.withBehaviors(new Ao(tk,ik)),nk=(e,t)=>T`
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
`;class ok extends Es{connectedCallback(){super.connectedCallback(),this.view!=="mobile"&&this.$fastController.addStyles(sk)}}const rk=ok.compose({baseName:"horizontal-scroll",baseClass:Es,template:zx,styles:nk,nextFlipper:P`
    <fluent-flipper @click="${e=>e.scrollToNext()}" aria-hidden="${e=>e.flippersHiddenFromAT}"></fluent-flipper>
  `,previousFlipper:P`
    <fluent-flipper
      @click="${e=>e.scrollToPrevious()}"
      direction="previous"
      aria-hidden="${e=>e.flippersHiddenFromAT}"
    ></fluent-flipper>
  `}),ak=(e,t)=>T`
    ${ke("inline-flex")} :host {
      border: calc(${ee} * 1px) solid ${Sr};
      border-radius: calc(${Ve} * 1px);
      box-sizing: border-box;
      flex-direction: column;
      padding: calc(${Y} * 1px) 0;
    }

    ::slotted(${e.tagFor(us)}) {
      margin: 0 calc(${Y} * 1px);
    }

    :host(:focus-within:not([disabled])) {
      ${Oi}
    }
  `;class lk extends oi{}const ck=lk.compose({baseName:"listbox",template:Sx,styles:ak}),uk=(e,t)=>T`
    ${ke("inline-flex")} :host {
      position: relative;
      ${ht}
      background: ${So};
      border-radius: calc(${Ve} * 1px);
      border: calc(${ee} * 1px) solid transparent;
      box-sizing: border-box;
      color: ${ze};
      cursor: pointer;
      fill: currentcolor;
      height: calc(${we} * 1px);
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
      left: calc((${Vt} - ${ee}) * 1px);
      top: calc((${we} / 4) - ${Vt} * 1px);
      width: 3px;
      height: calc((${we} / 2) * 1px);
      background: transparent;
      border-radius: calc(${Ve} * 1px);
    }

    :host(:not([disabled]):hover) {
      background: ${Co};
    }

    :host(:not([disabled]):active) {
      background: ${Io};
    }

    :host(:not([disabled]):active)::before {
      background: ${Ge};
      height: calc(((${we} / 2) - 6) * 1px);
    }

    :host([aria-selected='true'])::before {
      background: ${Ge};
    }

    :host(:${he}) {
      ${Oi}
      background: ${E$};
    }

    :host([aria-selected='true']) {
      background: ${On};
    }

    :host(:not([disabled])[aria-selected='true']:hover) {
      background: ${gd};
    }

    :host(:not([disabled])[aria-selected='true']:active) {
      background: ${D$};
    }

    :host(:not([disabled]):not([aria-selected='true']):hover) {
      background: ${Co};
    }

    :host(:not([disabled]):not([aria-selected='true']):active) {
      background: ${Io};
    }

    :host([disabled]) {
      cursor: ${Ri};
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
  `.withBehaviors(new Ao(null,T`
      :host::before {
        right: calc((${Vt} - ${ee}) * 1px);
      }
    `),$e(T`
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
        :host(:${he}) {
          outline-color: ${m.CanvasText};
        }
      `)),dk=us.compose({baseName:"option",template:_x,styles:uk}),hk=(e,t)=>T`
    ${ke("block")} :host {
      background: ${Yr};
      border: calc(${ee} * 1px) solid transparent;
      border-radius: calc(${ys} * 1px);
      box-shadow: ${nm};
      padding: calc((${Y} - ${ee}) * 1px) 0;
      max-width: 368px;
      min-width: 64px;
    }

    :host([slot='submenu']) {
      width: max-content;
      margin: 0 calc(${Y} * 2px);
    }

    ::slotted(${e.tagFor(vi)}) {
      margin: 0 calc(${Y} * 1px);
    }

    ::slotted(${e.tagFor(ml)}) {
      margin: calc(${Y} * 1px) 0;
    }

    ::slotted(hr) {
      box-sizing: content-box;
      height: 0;
      margin: calc(${Y} * 1px) 0;
      border: none;
      border-top: calc(${ee} * 1px) solid ${Wa};
    }
  `.withBehaviors($e(T`
        :host([slot='submenu']) {
          background: ${m.Canvas};
          border-color: ${m.CanvasText};
        }
      `));class fk extends bl{connectedCallback(){super.connectedCallback(),be.setValueFor(this,Yr)}}const pk=fk.compose({baseName:"menu",baseClass:bl,template:Tx,styles:hk}),gk=(e,t)=>T`
    ${ke("grid")} :host {
      contain: layout;
      overflow: visible;
      ${ht}
      box-sizing: border-box;
      height: calc(${we} * 1px);
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

    :host(:${he}) {
      ${Oi}
    }

    :host(:not([disabled]):hover) {
      background: ${Co};
    }

    :host(:not([disabled]):active),
    :host(.expanded) {
      background: ${Io};
      color: ${ze};
      z-index: 2;
    }

    :host([disabled]) {
      cursor: ${Ri};
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
      color: ${To};
    }

    :host([aria-checked='true']) .checkbox-indicator,
    :host([aria-checked='true']) slot[name='checkbox-indicator'],
    :host([aria-checked='true']) .radio-indicator,
    :host([aria-checked='true']) slot[name='radio-indicator'] {
      display: flex;
    }
  `.withBehaviors($e(T`
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
        :host(:${he}) ::slotted([slot='end']:not(svg)) {
          color: ${m.HighlightText};
          fill: currentcolor;
        }
        :host(.expanded) {
          background: ${m.Highlight};
          color: ${m.HighlightText};
        }
        :host(:${he}) {
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
        :host([disabled]:${he}) {
          background: ${m.ButtonFace};
          color: ${m.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host([disabled]:${he}) {
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
            :host(:${he}) .expanded-toggle,
            :host(:${he}) .checkbox,
            :host(:${he}) .radio,
            :host([checked]:hover) .checkbox,
            :host([checked]:hover) .radio,
            :host([checked]:${he}) .checkbox,
            :host([checked]:${he}) .radio {
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
      `),new Ao(T`
        .expand-collapse-glyph-container {
          transform: rotate(0deg);
        }
      `,T`
        .expand-collapse-glyph-container {
          transform: rotate(180deg);
        }
      `)),mk=vi.compose({baseName:"menu-item",template:Ix,styles:gk,checkboxIndicator:`
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
  `}),ga=".root",vk=(e,t)=>T`
    ${ke("inline-block")}

    ${zl(e,t,ga)}

    ${Gr()}

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
  `.withBehaviors(rt("outline",qr(e,t,ga)),rt("filled",Mo(e,t,ga)),$e(Vo(e,t,ga)));class gm extends Qt{connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}B([f],gm.prototype,"appearance",void 0);const bk=gm.compose({baseName:"number-field",baseClass:Qt,styles:vk,template:Fx,shadowOptions:{delegatesFocus:!0},stepDownGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `,stepUpGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 7.35c.2.2.5.2.7 0L6 4.21l3.15 3.14a.5.5 0 10.7-.7l-3.5-3.5a.5.5 0 00-.7 0l-3.5 3.5a.5.5 0 000 .7z"/>
    </svg>
`}),yk=(e,t)=>T`
    ${ke("flex")} :host {
      align-items: center;
      height: calc((${ee} * 3) * 1px);
    }

    .progress {
      background-color: ${Lo};
      border-radius: calc(${Y} * 1px);
      width: 100%;
      height: calc(${ee} * 1px);
      display: flex;
      align-items: center;
      position: relative;
    }

    .determinate {
      background-color: ${Ge};
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
      background-color: ${Ge};
      border-radius: calc(${Y} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 40%;
      animation: indeterminate-1 2s infinite;
    }

    .indeterminate-indicator-2 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${Ge};
      border-radius: calc(${Y} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 60%;
      animation: indeterminate-2 2s infinite;
    }

    :host(.paused) .indeterminate-indicator-1,
    :host(.paused) .indeterminate-indicator-2 {
      animation: none;
      background-color: ${To};
      width: 100%;
      opacity: 1;
    }

    :host(.paused) .determinate {
      background-color: ${To};
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
  `.withBehaviors($e(T`
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
      `));class xk extends Mn{}const wk=xk.compose({baseName:"progress",template:Ax,styles:yk,indeterminateIndicator1:`
    <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>
  `,indeterminateIndicator2:`
    <span class="indeterminate-indicator-2" part="indeterminate-indicator-2"></span>
  `}),$k=(e,t)=>T`
    ${ke("flex")} :host {
      align-items: center;
      height: calc(${we} * 1px);
      width: calc(${we} * 1px);
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
      stroke: ${Ge};
      fill: none;
      stroke-width: 2px;
      stroke-linecap: round;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
    }

    .indeterminate-indicator-1 {
      stroke: ${Ge};
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
      stroke: ${To};
    }

    :host(.paused) .determinate {
      stroke: ${To};
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
  `.withBehaviors($e(T`
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
      `));class kk extends Mn{}const _k=kk.compose({baseName:"progress-ring",template:Lx,styles:$k,indeterminateIndicator:`
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
  `}),Sk=(e,t)=>T`
    ${ke("inline-flex")} :host {
      --input-size: calc((${we} / 2) + ${Y});
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
      border: calc(${ee} * 1px) solid ${Lo};
      background: ${dd};
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      ${ht}
      color: ${ze};
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
      fill: ${En};
      opacity: 0;
      pointer-events: none;
    }

    :host(:not(.disabled):hover) .control {
      background: ${hd};
      border-color: ${bd};
    }

    :host(:not(.disabled):active) .control {
      background: ${fd};
      border-color: ${yd};
    }

    :host(:not(.disabled):active) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(:${he}) .control {
      ${Wr}
      background: ${pd};
    }

    :host(.checked) .control {
      background: ${Ge};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${Ui};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${Wi};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${Ri};
    }

    :host(.checked) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${yi};
    }
  `.withBehaviors($e(T`
        .control {
          background: ${m.Field};
          border-color: ${m.FieldText};
        }
        :host(:not(.disabled):hover) .control,
        :host(:not(.disabled):active) .control {
          border-color: ${m.Highlight};
        }
        :host(:${he}) .control {
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
      `)),Ck=xl.compose({baseName:"radio",template:Vx,styles:Sk,checkedIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="4"/>
    </svg>
  `}),Ik=(e,t)=>T`
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
`,Tk=cn.compose({baseName:"radio-group",template:Mx,styles:Ik}),Fk=(e,t)=>P`
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
      <slot ${tt({property:"defaultSlottedNodes",filter:sg})}></slot>
    </label>
    <div class="root" part="root" ${Ee("root")}>
      ${Xt(e,t)}
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
      ${Zt(e,t)}
    </div>
  </template>
`,ma=".root",Dk=je.create("clear-button-hover").withDefault(e=>{const t=Xi.getValueFor(e),i=hn.getValueFor(e);return t.evaluate(e,i.evaluate(e).focus).hover}),Rk=je.create("clear-button-active").withDefault(e=>{const t=Xi.getValueFor(e),i=hn.getValueFor(e);return t.evaluate(e,i.evaluate(e).focus).active}),Ek=(e,t)=>T`
    ${ke("inline-block")}

    ${zl(e,t,ma)}

    ${Gr()}

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
      color: ${ze};
      fill: currentcolor;
      border: none;
      border-radius: calc(${Ve} * 1px);
      min-width: calc(${we} * 1px);
      ${ht}
      outline: none;
      padding: 0 calc((10 + (${Y} * 2 * ${dn})) * 1px);
    }
    .clear-button:hover {
      background: ${Dk};
    }
    .clear-button:active {
      background: ${Rk};
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
  `.withBehaviors(rt("outline",qr(e,t,ma)),rt("filled",Mo(e,t,ma)),$e(Vo(e,t,ma)));let mm=class extends bi{constructor(){super(...arguments),this.appearance="outline"}};B([f],mm.prototype,"appearance",void 0);const Ok=mm.compose({baseName:"search",baseClass:bi,template:Fk,styles:Ek,start:'<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg%22%3E"><path d="M8.5 3a5.5 5.5 0 0 1 4.23 9.02l4.12 4.13a.5.5 0 0 1-.63.76l-.07-.06-4.13-4.12A5.5 5.5 0 1 1 8.5 3Zm0 1a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"/></svg>',shadowOptions:{delegatesFocus:!0}});class vm extends Os{appearanceChanged(t,i){t!==i&&(this.classList.add(i),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&be.setValueFor(this.listbox,Yr)}}B([f({mode:"fromView"})],vm.prototype,"appearance",void 0);const Pk=vm.compose({baseName:"select",baseClass:Os,template:Wx,styles:H1,indicator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `}),Lk=(e,t)=>T`
    ${ke("block")} :host {
      --skeleton-fill-default: ${On};
      overflow: hidden;
      width: 100%;
      position: relative;
      background-color: var(--skeleton-fill, var(--skeleton-fill-default));
      --skeleton-animation-gradient-default: linear-gradient(
        270deg,
        var(--skeleton-fill, var(--skeleton-fill-default)) 0%,
        ${gd} 51%,
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

    ${ke("block")} span.shimmer {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: var(--skeleton-animation-gradient, var(--skeleton-animation-gradient-default));
      background-size: 0px 0px / 90% 100%;
      background-repeat: no-repeat;
      background-color: var(--skeleton-animation-fill, ${On});
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
  `.withBehaviors($e(T`
        :host{
          background-color: ${m.CanvasText};
        }
      `)),Ak=Nr.compose({baseName:"skeleton",template:Gx,styles:Lk}),Mk=(e,t)=>T`
    ${ke("inline-grid")} :host {
      --thumb-size: calc((${we} / 2) + ${Y} + (${ee} * 2));
      --thumb-translate: calc(var(--thumb-size) * -0.5 + var(--track-width) / 2);
      --track-overhang: calc((${Y} / 2) * -1);
      --track-width: ${Y};
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
    :host(:${he}) .thumb-cursor {
      box-shadow: 0 0 0 2px ${be}, 0 0 0 4px ${Vl};
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
      background: padding-box linear-gradient(${_i}, ${_i}),
        border-box ${md};
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
      background: ${Ge};
    }
    :host(:not(.disabled)) .thumb-cursor:hover::after {
      background: ${Ui};
      margin: 3px;
    }
    :host(:not(.disabled)) .thumb-cursor:active::after {
      background: ${Wi};
      margin: 5px;
    }
    :host(:not(.disabled)) .thumb-cursor:hover {
      background: padding-box linear-gradient(${_i}, ${_i}),
        border-box ${tm};
    }
    :host(:not(.disabled)) .thumb-cursor:active {
      background: padding-box linear-gradient(${_i}, ${_i}),
        border-box ${im};
    }
    .track-start {
      background: ${Ge};
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
      background: ${em};
      border: 1px solid ${Lo};
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
      cursor: ${Ri};
    }
    :host(.disabled) {
      opacity: ${yi};
    }
  `.withBehaviors($e(T`
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
        :host(:${he}) .thumb-cursor {
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
      `)),Vk=Nt.compose({baseName:"slider",template:Zx,styles:Mk,thumb:`
    <div class="thumb-cursor"></div>
  `}),Hk=(e,t)=>T`
    ${ke("block")} :host {
      ${sm}
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
      background: ${Lo};
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
      opacity: ${yi};
    }
  `.withBehaviors($e(T`
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
      `)),Nk=Ps.compose({baseName:"slider-label",template:qx,styles:Hk}),zk=(e,t)=>T`
    :host([hidden]) {
      display: none;
    }

    ${ke("inline-flex")} :host {
      align-items: center;
      outline: none;
      font-family: ${Ei};
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
      cursor: ${Ri};
    }

    .switch {
      position: relative;
      box-sizing: border-box;
      width: calc(((${we} / 2) + ${Y}) * 2px);
      height: calc(((${we} / 2) + ${Y}) * 1px);
      background: ${dd};
      border-radius: calc(${we} * 1px);
      border: calc(${ee} * 1px) solid ${Lo};
      cursor: pointer;
    }

    :host(:not(.disabled):hover) .switch {
      background: ${hd};
      border-color: ${bd};
    }

    :host(:not(.disabled):active) .switch {
      background: ${fd};
      border-color: ${yd};
    }

    :host(:${he}) .switch {
      ${Wr}
      background: ${pd};
    }

    :host(.checked) .switch {
      background: ${Ge};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .switch {
      background: ${Ui};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .switch {
      background: ${Wi};
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
      ${ht}
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      color: ${ze};
      ${ht}
      margin-inline-end: calc(${Y} * 2px + 2px);
      cursor: pointer;
    }

    ::slotted([slot="checked-message"]),
    ::slotted([slot="unchecked-message"]) {
        margin-inline-start: calc(${Y} * 2px + 2px);
    }

    :host(.checked) .switch {
      background: ${Ge};
    }

    :host(.checked) .switch slot[name='switch'] {
      fill: ${En};
      filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.15));
    }

    :host(.checked:not(.disabled)) .switch:hover {
      background: ${Ui};
    }

    :host(.checked:not(.disabled)) .switch:hover slot[name='switch'] {
      fill: ${Zg};
    }

    :host(.checked:not(.disabled)) .switch:active {
      background: ${Wi};
    }

    :host(.checked:not(.disabled)) .switch:active slot[name='switch'] {
      fill: ${Xg};
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
  `.withBehaviors(new Ao(T`
        slot[name='switch'] {
          left: 0;
        }

        :host(.checked) slot[name='switch'] {
          left: 100%;
          transform: translateX(-100%);
        }
      `,T`
        slot[name='switch'] {
          right: 0;
        }

        :host(.checked) slot[name='switch'] {
          right: 100%;
          transform: translateX(100%);
        }
      `),$e(T`
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
        :host(:${he}) .switch {
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
      `)),Bk=Qu.compose({baseName:"switch",template:Kx,styles:zk,switch:`
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="12" height="12" rx="6"/>
    </svg>
  `}),jk=(e,t)=>T`
      ${ke("grid")} :host {
        box-sizing: border-box;
        ${ht}
        color: ${ze};
        grid-template-columns: auto 1fr auto;
        grid-template-rows: auto 1fr;
      }

      .tablist {
        display: grid;
        grid-template-rows: calc(${we} * 1px); auto;
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
        background: ${Ge};
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
        background: ${Ge};
      }

      :host(.vertical) .activeIndicatorTransition {
        transition: transform 0.2s linear;
      }
    `.withBehaviors($e(T`
        .activeIndicator,
        :host(.vertical) .activeIndicator {
          background: ${m.Highlight};
        }
      `)),Yk=(e,t)=>T`
      ${ke("inline-flex")} :host {
        box-sizing: border-box;
        ${ht}
        height: calc((${we} + (${Y} * 2)) * 1px);
        padding: 0 calc((6 + (${Y} * 2 * ${dn})) * 1px);
        color: ${ze};
        border-radius: calc(${Ve} * 1px);
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
        color: ${ze};
      }

      :host(:${he}) {
        ${Oi}
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
    `.withBehaviors($e(T`
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
          :host(:${he}) {
            background: transparent;
            outline-color: ${m.ButtonText};
          }
        `)),Uk=og.compose({baseName:"tab",template:nw,styles:Yk}),Wk=(e,t)=>T`
  ${ke("block")} :host {
    box-sizing: border-box;
    ${ht}
    padding: 0 calc((6 + (${Y} * 2 * ${dn})) * 1px);
  }
`,Gk=sw.compose({baseName:"tab-panel",template:iw,styles:Wk}),qk=Ls.compose({baseName:"tabs",template:ow,styles:jk}),va=".control",Zk=(e,t)=>T`
    ${ke("inline-flex")}

    ${zl(e,t,va)}

    ${Gr()}

    :host {
      flex-direction: column;
      vertical-align: bottom;
    }

    .control {
      height: calc((${we} * 2) * 1px);
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
  `.withBehaviors(rt("outline",qr(e,t,va)),rt("filled",Mo(e,t,va)),$e(Vo(e,t,va)));class bm extends zt{appearanceChanged(t,i){t!==i&&(this.classList.add(i),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}B([f],bm.prototype,"appearance",void 0);const Xk=bm.compose({baseName:"text-area",baseClass:zt,template:lw,styles:Zk,shadowOptions:{delegatesFocus:!0}}),ba=".root",Qk=(e,t)=>T`
    ${ke("inline-block")}

    ${zl(e,t,ba)}

    ${Gr()}

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
  `.withBehaviors(rt("outline",qr(e,t,ba)),rt("filled",Mo(e,t,ba)),$e(Vo(e,t,ba)));class ym extends ri{appearanceChanged(t,i){t!==i&&(this.classList.add(i),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}B([f],ym.prototype,"appearance",void 0);const Jk=ym.compose({baseName:"text-field",baseClass:ri,template:cw,styles:Qk,shadowOptions:{delegatesFocus:!0}}),Kk=(e,t)=>T`
    ${ke("inline-flex")} :host {
      --toolbar-item-gap: calc(${Y} * 1px);
      background: ${be};
      fill: currentcolor;
      padding: var(--toolbar-item-gap);
      box-sizing: border-box;
      align-items: center;
    }

    :host(${he}) {
      ${Oi}
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
  `.withBehaviors($e(T`
        :host(:${he}) {
          outline-color: ${m.Highlight};
          color: ${m.ButtonText};
          forced-color-adjust: none;
        }
      `));class e_ extends un{}const t_=e_.compose({baseName:"toolbar",baseClass:un,template:uw,styles:Kk}),i_=(e,t)=>T`
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
      border: calc(${ee} * 1px) solid ${uo};
      background: ${be};
      color: ${ze};
      padding: 4px 12px;
      height: fit-content;
      width: fit-content;
      ${ht}
      white-space: nowrap;
      box-shadow: ${c1};
    }

    ${e.tagFor(re)} {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: visible;
      flex-direction: row;
    }

    ${e.tagFor(re)}.right,
    ${e.tagFor(re)}.left {
      flex-direction: column;
    }

    ${e.tagFor(re)}.top .tooltip::after,
    ${e.tagFor(re)}.bottom .tooltip::after,
    ${e.tagFor(re)}.left .tooltip::after,
    ${e.tagFor(re)}.right .tooltip::after {
      content: '';
      width: 12px;
      height: 12px;
      background: ${be};
      border-top: calc(${ee} * 1px) solid ${uo};
      border-left: calc(${ee} * 1px) solid ${uo};
      position: absolute;
    }

    ${e.tagFor(re)}.top .tooltip::after {
      transform: translateX(-50%) rotate(225deg);
      bottom: 5px;
      left: 50%;
    }

    ${e.tagFor(re)}.top .tooltip {
      margin-bottom: 12px;
    }

    ${e.tagFor(re)}.bottom .tooltip::after {
      transform: translateX(-50%) rotate(45deg);
      top: 5px;
      left: 50%;
    }

    ${e.tagFor(re)}.bottom .tooltip {
      margin-top: 12px;
    }

    ${e.tagFor(re)}.left .tooltip::after {
      transform: translateY(-50%) rotate(135deg);
      top: 50%;
      right: 5px;
    }

    ${e.tagFor(re)}.left .tooltip {
      margin-right: 12px;
    }

    ${e.tagFor(re)}.right .tooltip::after {
      transform: translateY(-50%) rotate(-45deg);
      top: 50%;
      left: 5px;
    }

    ${e.tagFor(re)}.right .tooltip {
      margin-left: 12px;
    }
  `.withBehaviors($e(T`
        :host([disabled]) {
          opacity: 1;
        }
        ${e.tagFor(re)}.top .tooltip::after,
        ${e.tagFor(re)}.bottom .tooltip::after,
        ${e.tagFor(re)}.left .tooltip::after,
        ${e.tagFor(re)}.right .tooltip::after {
          content: '';
          width: unset;
          height: unset;
        }
      `));class s_ extends yt{connectedCallback(){super.connectedCallback(),be.setValueFor(this,Yr)}}const n_=s_.compose({baseName:"tooltip",baseClass:yt,template:dw,styles:i_}),o_=(e,t)=>T`
  :host([hidden]) {
    display: none;
  }

  ${ke("flex")} :host {
    flex-direction: column;
    align-items: stretch;
    min-width: fit-content;
    font-size: 0;
  }
`,r_=$l.compose({baseName:"tree-view",template:fw,styles:o_}),a_=T`
  .expand-collapse-button svg {
    transform: rotate(0deg);
  }
  :host(.nested) .expand-collapse-button {
    left: var(--expand-collapse-button-nested-width, calc(${we} * -1px));
  }
  :host([selected])::after {
    left: calc(${Vt} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,l_=T`
  .expand-collapse-button svg {
    transform: rotate(180deg);
  }
  :host(.nested) .expand-collapse-button {
    right: var(--expand-collapse-button-nested-width, calc(${we} * -1px));
  }
  :host([selected])::after {
    right: calc(${Vt} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,vf=pi`((${_l} / 2) * ${Y}) + ((${Y} * ${dn}) / 2)`,c_=je.create("tree-item-expand-collapse-hover").withDefault(e=>{const t=Xi.getValueFor(e);return t.evaluate(e,t.evaluate(e).hover).hover}),u_=je.create("tree-item-expand-collapse-selected-hover").withDefault(e=>{const t=zn.getValueFor(e);return Xi.getValueFor(e).evaluate(e,t.evaluate(e).rest).hover}),d_=(e,t)=>T`
    ${ke("block")} :host {
      contain: content;
      position: relative;
      outline: none;
      color: ${ze};
      fill: currentcolor;
      cursor: pointer;
      font-family: ${Ei};
      --expand-collapse-button-size: calc(${we} * 1px);
      --tree-item-nested-width: 0;
    }

    .positioning-region {
      display: flex;
      position: relative;
      box-sizing: border-box;
      background: ${So};
      border: calc(${ee} * 1px) solid transparent;
      border-radius: calc(${Ve} * 1px);
      height: calc((${we} + 1) * 1px);
    }

    :host(:${he}) .positioning-region {
      ${Oi}
    }

    .positioning-region::before {
      content: '';
      display: block;
      width: var(--tree-item-nested-width);
      flex-shrink: 0;
    }

    :host(:not([disabled])) .positioning-region:hover {
      background: ${Co};
    }

    :host(:not([disabled])) .positioning-region:active {
      background: ${Io};
    }

    .content-region {
      display: inline-flex;
      align-items: center;
      white-space: nowrap;
      width: 100%;
      height: calc(${we} * 1px);
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
      border-radius: calc(${Ve} * 1px);
      ${""} width: calc((${vf} + (${Y} * 2)) * 1px);
      height: calc((${vf} + (${Y} * 2)) * 1px);
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
      opacity: ${yi};
      cursor: ${Ri};
    }

    :host(.nested) .content-region {
      position: relative;
      margin-inline-start: var(--expand-collapse-button-size);
    }

    :host(.nested) .expand-collapse-button {
      position: absolute;
    }

    :host(.nested) .expand-collapse-button:hover {
      background: ${c_};
    }

    :host(:not([disabled])[selected]) .positioning-region {
      background: ${On};
    }

    :host(:not([disabled])[selected]) .expand-collapse-button:hover {
      background: ${u_};
    }

    :host([selected])::after {
      content: '';
      display: block;
      position: absolute;
      top: calc((${we} / 4) * 1px);
      width: 3px;
      height: calc((${we} / 2) * 1px);
      ${""} background: ${Ge};
      border-radius: calc(${Ve} * 1px);
    }

    ::slotted(fluent-tree-item) {
      --tree-item-nested-width: 1em;
      --expand-collapse-button-nested-width: calc(${we} * -1px);
    }
  `.withBehaviors(new Ao(a_,l_),$e(T`
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
        :host(:${he}) .positioning-region {
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
      `)),h_=$t.compose({baseName:"tree-item",template:hw,styles:d_,expandCollapseGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>
    </svg>
  `}),f_={fluentAccordion:t1,fluentAccordionItem:e1,fluentAnchor:y1,fluentAnchoredRegion:w1,fluentBadge:k1,fluentBreadcrumb:S1,fluentBreadcrumbItem:I1,fluentButton:F1,fluentCalendar:O1,fluentCard:L1,fluentCheckbox:M1,fluentCombobox:z1,fluentDataGrid:G1,fluentDataGridCell:U1,fluentDataGridRow:W1,fluentDesignSystemProvider:q1,fluentDialog:X1,fluentDivider:J1,fluentFlipper:ek,fluentHorizontalScroll:rk,fluentListbox:ck,fluentOption:dk,fluentMenu:pk,fluentMenuItem:mk,fluentNumberField:bk,fluentProgress:wk,fluentProgressRing:_k,fluentRadio:Ck,fluentRadioGroup:Tk,fluentSearch:Ok,fluentSelect:Pk,fluentSkeleton:Ak,fluentSlider:Vk,fluentSliderLabel:Nk,fluentSwitch:Bk,fluentTabs:qk,fluentTab:Uk,fluentTabPanel:Gk,fluentTextArea:Xk,fluentTextField:Jk,fluentToolbar:t_,fluentTooltip:n_,fluentTreeView:r_,fluentTreeItem:h_,register(e,...t){if(e)for(const i in this)i!=="register"&&this[i]().register(e,...t)}};function p_(e){return Xp.getOrCreate(e).withPrefix("fluent")}p_().register(f_);function _d(e,t){const i=Object.create(null),s=e.split(",");for(let n=0;n<s.length;n++)i[s[n]]=!0;return t?n=>!!i[n.toLowerCase()]:n=>!!i[n]}const et={},ho=[],ji=()=>{},g_=()=>!1,m_=/^on[^a-z]/,Bl=e=>m_.test(e),Sd=e=>e.startsWith("onUpdate:"),Rt=Object.assign,Cd=(e,t)=>{const i=e.indexOf(t);i>-1&&e.splice(i,1)},v_=Object.prototype.hasOwnProperty,De=(e,t)=>v_.call(e,t),ue=Array.isArray,fo=e=>jl(e)==="[object Map]",xm=e=>jl(e)==="[object Set]",me=e=>typeof e=="function",Ct=e=>typeof e=="string",Id=e=>typeof e=="symbol",lt=e=>e!==null&&typeof e=="object",wm=e=>lt(e)&&me(e.then)&&me(e.catch),$m=Object.prototype.toString,jl=e=>$m.call(e),b_=e=>jl(e).slice(8,-1),km=e=>jl(e)==="[object Object]",Td=e=>Ct(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ea=_d(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yl=e=>{const t=Object.create(null);return i=>t[i]||(t[i]=e(i))},y_=/-(\w)/g,rs=Yl(e=>e.replace(y_,(t,i)=>i?i.toUpperCase():"")),x_=/\B([A-Z])/g,jn=Yl(e=>e.replace(x_,"-$1").toLowerCase()),Ul=Yl(e=>e.charAt(0).toUpperCase()+e.slice(1)),Hc=Yl(e=>e?`on${Ul(e)}`:""),Cr=(e,t)=>!Object.is(e,t),Nc=(e,t)=>{for(let i=0;i<e.length;i++)e[i](t)},Ga=(e,t,i)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:i})},w_=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let bf;const fu=()=>bf||(bf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Pn(e){if(ue(e)){const t={};for(let i=0;i<e.length;i++){const s=e[i],n=Ct(s)?S_(s):Pn(s);if(n)for(const o in n)t[o]=n[o]}return t}else{if(Ct(e))return e;if(lt(e))return e}}const $_=/;(?![^(]*\))/g,k_=/:([^]+)/,__=/\/\*[^]*?\*\//g;function S_(e){const t={};return e.replace(__,"").split($_).forEach(i=>{if(i){const s=i.split(k_);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function ii(e){let t="";if(Ct(e))t=e;else if(ue(e))for(let i=0;i<e.length;i++){const s=ii(e[i]);s&&(t+=s+" ")}else if(lt(e))for(const i in e)e[i]&&(t+=i+" ");return t.trim()}const C_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",I_=_d(C_);function _m(e){return!!e||e===""}const Ot=e=>Ct(e)?e:e==null?"":ue(e)||lt(e)&&(e.toString===$m||!me(e.toString))?JSON.stringify(e,Sm,2):String(e),Sm=(e,t)=>t&&t.__v_isRef?Sm(e,t.value):fo(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((i,[s,n])=>(i[`${s} =>`]=n,i),{})}:xm(t)?{[`Set(${t.size})`]:[...t.values()]}:lt(t)&&!ue(t)&&!km(t)?String(t):t;let ci;class Cm{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ci,!t&&ci&&(this.index=(ci.scopes||(ci.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const i=ci;try{return ci=this,t()}finally{ci=i}}}on(){ci=this}off(){ci=this.parent}stop(t){if(this._active){let i,s;for(i=0,s=this.effects.length;i<s;i++)this.effects[i].stop();for(i=0,s=this.cleanups.length;i<s;i++)this.cleanups[i]();if(this.scopes)for(i=0,s=this.scopes.length;i<s;i++)this.scopes[i].stop(!0);if(!this.detached&&this.parent&&!t){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0,this._active=!1}}}function Im(e){return new Cm(e)}function T_(e,t=ci){t&&t.active&&t.effects.push(e)}function Tm(){return ci}function F_(e){ci&&ci.cleanups.push(e)}const Fd=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Fm=e=>(e.w&rn)>0,Dm=e=>(e.n&rn)>0,D_=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=rn},R_=e=>{const{deps:t}=e;if(t.length){let i=0;for(let s=0;s<t.length;s++){const n=t[s];Fm(n)&&!Dm(n)?n.delete(e):t[i++]=n,n.w&=~rn,n.n&=~rn}t.length=i}},qa=new WeakMap;let ir=0,rn=1;const pu=30;let Ni;const In=Symbol(""),gu=Symbol("");class Dd{constructor(t,i=null,s){this.fn=t,this.scheduler=i,this.active=!0,this.deps=[],this.parent=void 0,T_(this,s)}run(){if(!this.active)return this.fn();let t=Ni,i=Qs;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ni,Ni=this,Qs=!0,rn=1<<++ir,ir<=pu?D_(this):yf(this),this.fn()}finally{ir<=pu&&R_(this),rn=1<<--ir,Ni=this.parent,Qs=i,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ni===this?this.deferStop=!0:this.active&&(yf(this),this.onStop&&this.onStop(),this.active=!1)}}function yf(e){const{deps:t}=e;if(t.length){for(let i=0;i<t.length;i++)t[i].delete(e);t.length=0}}let Qs=!0;const Rm=[];function Ho(){Rm.push(Qs),Qs=!1}function No(){const e=Rm.pop();Qs=e===void 0?!0:e}function si(e,t,i){if(Qs&&Ni){let s=qa.get(e);s||qa.set(e,s=new Map);let n=s.get(i);n||s.set(i,n=Fd()),Em(n)}}function Em(e,t){let i=!1;ir<=pu?Dm(e)||(e.n|=rn,i=!Fm(e)):i=!e.has(Ni),i&&(e.add(Ni),Ni.deps.push(e))}function Ss(e,t,i,s,n,o){const r=qa.get(e);if(!r)return;let a=[];if(t==="clear")a=[...r.values()];else if(i==="length"&&ue(e)){const l=Number(s);r.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(i!==void 0&&a.push(r.get(i)),t){case"add":ue(e)?Td(i)&&a.push(r.get("length")):(a.push(r.get(In)),fo(e)&&a.push(r.get(gu)));break;case"delete":ue(e)||(a.push(r.get(In)),fo(e)&&a.push(r.get(gu)));break;case"set":fo(e)&&a.push(r.get(In));break}if(a.length===1)a[0]&&mu(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);mu(Fd(l))}}function mu(e,t){const i=ue(e)?e:[...e];for(const s of i)s.computed&&xf(s);for(const s of i)s.computed||xf(s)}function xf(e,t){(e!==Ni||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function E_(e,t){var i;return(i=qa.get(e))==null?void 0:i.get(t)}const O_=_d("__proto__,__v_isRef,__isVue"),Om=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Id)),P_=Rd(),L_=Rd(!1,!0),A_=Rd(!0),wf=M_();function M_(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...i){const s=Oe(this);for(let o=0,r=this.length;o<r;o++)si(s,"get",o+"");const n=s[t](...i);return n===-1||n===!1?s[t](...i.map(Oe)):n}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...i){Ho();const s=Oe(this)[t].apply(this,i);return No(),s}}),e}function V_(e){const t=Oe(this);return si(t,"has",e),t.hasOwnProperty(e)}function Rd(e=!1,t=!1){return function(s,n,o){if(n==="__v_isReactive")return!e;if(n==="__v_isReadonly")return e;if(n==="__v_isShallow")return t;if(n==="__v_raw"&&o===(e?t?eS:Vm:t?Mm:Am).get(s))return s;const r=ue(s);if(!e){if(r&&De(wf,n))return Reflect.get(wf,n,o);if(n==="hasOwnProperty")return V_}const a=Reflect.get(s,n,o);return(Id(n)?Om.has(n):O_(n))||(e||si(s,"get",n),t)?a:vt(a)?r&&Td(n)?a:a.value:lt(a)?e?Nm(a):Yn(a):a}}const H_=Pm(),N_=Pm(!0);function Pm(e=!1){return function(i,s,n,o){let r=i[s];if(Fo(r)&&vt(r)&&!vt(n))return!1;if(!e&&(!Za(n)&&!Fo(n)&&(r=Oe(r),n=Oe(n)),!ue(i)&&vt(r)&&!vt(n)))return r.value=n,!0;const a=ue(i)&&Td(s)?Number(s)<i.length:De(i,s),l=Reflect.set(i,s,n,o);return i===Oe(o)&&(a?Cr(n,r)&&Ss(i,"set",s,n):Ss(i,"add",s,n)),l}}function z_(e,t){const i=De(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Ss(e,"delete",t,void 0),s}function B_(e,t){const i=Reflect.has(e,t);return(!Id(t)||!Om.has(t))&&si(e,"has",t),i}function j_(e){return si(e,"iterate",ue(e)?"length":In),Reflect.ownKeys(e)}const Lm={get:P_,set:H_,deleteProperty:z_,has:B_,ownKeys:j_},Y_={get:A_,set(e,t){return!0},deleteProperty(e,t){return!0}},U_=Rt({},Lm,{get:L_,set:N_}),Ed=e=>e,Wl=e=>Reflect.getPrototypeOf(e);function ya(e,t,i=!1,s=!1){e=e.__v_raw;const n=Oe(e),o=Oe(t);i||(t!==o&&si(n,"get",t),si(n,"get",o));const{has:r}=Wl(n),a=s?Ed:i?Ld:Ir;if(r.call(n,t))return a(e.get(t));if(r.call(n,o))return a(e.get(o));e!==n&&e.get(t)}function xa(e,t=!1){const i=this.__v_raw,s=Oe(i),n=Oe(e);return t||(e!==n&&si(s,"has",e),si(s,"has",n)),e===n?i.has(e):i.has(e)||i.has(n)}function wa(e,t=!1){return e=e.__v_raw,!t&&si(Oe(e),"iterate",In),Reflect.get(e,"size",e)}function $f(e){e=Oe(e);const t=Oe(this);return Wl(t).has.call(t,e)||(t.add(e),Ss(t,"add",e,e)),this}function kf(e,t){t=Oe(t);const i=Oe(this),{has:s,get:n}=Wl(i);let o=s.call(i,e);o||(e=Oe(e),o=s.call(i,e));const r=n.call(i,e);return i.set(e,t),o?Cr(t,r)&&Ss(i,"set",e,t):Ss(i,"add",e,t),this}function _f(e){const t=Oe(this),{has:i,get:s}=Wl(t);let n=i.call(t,e);n||(e=Oe(e),n=i.call(t,e)),s&&s.call(t,e);const o=t.delete(e);return n&&Ss(t,"delete",e,void 0),o}function Sf(){const e=Oe(this),t=e.size!==0,i=e.clear();return t&&Ss(e,"clear",void 0,void 0),i}function $a(e,t){return function(s,n){const o=this,r=o.__v_raw,a=Oe(r),l=t?Ed:e?Ld:Ir;return!e&&si(a,"iterate",In),r.forEach((c,u)=>s.call(n,l(c),l(u),o))}}function ka(e,t,i){return function(...s){const n=this.__v_raw,o=Oe(n),r=fo(o),a=e==="entries"||e===Symbol.iterator&&r,l=e==="keys"&&r,c=n[e](...s),u=i?Ed:t?Ld:Ir;return!t&&si(o,"iterate",l?gu:In),{next(){const{value:d,done:p}=c.next();return p?{value:d,done:p}:{value:a?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function js(e){return function(...t){return e==="delete"?!1:this}}function W_(){const e={get(o){return ya(this,o)},get size(){return wa(this)},has:xa,add:$f,set:kf,delete:_f,clear:Sf,forEach:$a(!1,!1)},t={get(o){return ya(this,o,!1,!0)},get size(){return wa(this)},has:xa,add:$f,set:kf,delete:_f,clear:Sf,forEach:$a(!1,!0)},i={get(o){return ya(this,o,!0)},get size(){return wa(this,!0)},has(o){return xa.call(this,o,!0)},add:js("add"),set:js("set"),delete:js("delete"),clear:js("clear"),forEach:$a(!0,!1)},s={get(o){return ya(this,o,!0,!0)},get size(){return wa(this,!0)},has(o){return xa.call(this,o,!0)},add:js("add"),set:js("set"),delete:js("delete"),clear:js("clear"),forEach:$a(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=ka(o,!1,!1),i[o]=ka(o,!0,!1),t[o]=ka(o,!1,!0),s[o]=ka(o,!0,!0)}),[e,i,t,s]}const[G_,q_,Z_,X_]=W_();function Od(e,t){const i=t?e?X_:Z_:e?q_:G_;return(s,n,o)=>n==="__v_isReactive"?!e:n==="__v_isReadonly"?e:n==="__v_raw"?s:Reflect.get(De(i,n)&&n in s?i:s,n,o)}const Q_={get:Od(!1,!1)},J_={get:Od(!1,!0)},K_={get:Od(!0,!1)},Am=new WeakMap,Mm=new WeakMap,Vm=new WeakMap,eS=new WeakMap;function tS(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function iS(e){return e.__v_skip||!Object.isExtensible(e)?0:tS(b_(e))}function Yn(e){return Fo(e)?e:Pd(e,!1,Lm,Q_,Am)}function Hm(e){return Pd(e,!1,U_,J_,Mm)}function Nm(e){return Pd(e,!0,Y_,K_,Vm)}function Pd(e,t,i,s,n){if(!lt(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=n.get(e);if(o)return o;const r=iS(e);if(r===0)return e;const a=new Proxy(e,r===2?s:i);return n.set(e,a),a}function Js(e){return Fo(e)?Js(e.__v_raw):!!(e&&e.__v_isReactive)}function Fo(e){return!!(e&&e.__v_isReadonly)}function Za(e){return!!(e&&e.__v_isShallow)}function zm(e){return Js(e)||Fo(e)}function Oe(e){const t=e&&e.__v_raw;return t?Oe(t):e}function Gl(e){return Ga(e,"__v_skip",!0),e}const Ir=e=>lt(e)?Yn(e):e,Ld=e=>lt(e)?Nm(e):e;function Bm(e){Qs&&Ni&&(e=Oe(e),Em(e.dep||(e.dep=Fd())))}function jm(e,t){e=Oe(e);const i=e.dep;i&&mu(i)}function vt(e){return!!(e&&e.__v_isRef===!0)}function at(e){return Ym(e,!1)}function sS(e){return Ym(e,!0)}function Ym(e,t){return vt(e)?e:new nS(e,t)}class nS{constructor(t,i){this.__v_isShallow=i,this.dep=void 0,this.__v_isRef=!0,this._rawValue=i?t:Oe(t),this._value=i?t:Ir(t)}get value(){return Bm(this),this._value}set value(t){const i=this.__v_isShallow||Za(t)||Fo(t);t=i?t:Oe(t),Cr(t,this._rawValue)&&(this._rawValue=t,this._value=i?t:Ir(t),jm(this))}}function ye(e){return vt(e)?e.value:e}const oS={get:(e,t,i)=>ye(Reflect.get(e,t,i)),set:(e,t,i,s)=>{const n=e[t];return vt(n)&&!vt(i)?(n.value=i,!0):Reflect.set(e,t,i,s)}};function Um(e){return Js(e)?e:new Proxy(e,oS)}function rS(e){const t=ue(e)?new Array(e.length):{};for(const i in e)t[i]=lS(e,i);return t}class aS{constructor(t,i,s){this._object=t,this._key=i,this._defaultValue=s,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return E_(Oe(this._object),this._key)}}function lS(e,t,i){const s=e[t];return vt(s)?s:new aS(e,t,i)}class cS{constructor(t,i,s,n){this._setter=i,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Dd(t,()=>{this._dirty||(this._dirty=!0,jm(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!n,this.__v_isReadonly=s}get value(){const t=Oe(this);return Bm(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function uS(e,t,i=!1){let s,n;const o=me(e);return o?(s=e,n=ji):(s=e.get,n=e.set),new cS(s,n,o||!n,i)}function Ks(e,t,i,s){let n;try{n=s?e(...s):e()}catch(o){ql(o,t,i)}return n}function Yi(e,t,i,s){if(me(e)){const o=Ks(e,t,i,s);return o&&wm(o)&&o.catch(r=>{ql(r,t,i)}),o}const n=[];for(let o=0;o<e.length;o++)n.push(Yi(e[o],t,i,s));return n}function ql(e,t,i,s=!0){const n=t?t.vnode:null;if(t){let o=t.parent;const r=t.proxy,a=i;for(;o;){const c=o.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,r,a)===!1)return}o=o.parent}const l=t.appContext.config.errorHandler;if(l){Ks(l,null,10,[e,r,a]);return}}dS(e,i,n,s)}function dS(e,t,i,s=!0){console.error(e)}let Tr=!1,vu=!1;const Mt=[];let ns=0;const po=[];let ms=null,wn=0;const Wm=Promise.resolve();let Ad=null;function Md(e){const t=Ad||Wm;return e?t.then(this?e.bind(this):e):t}function hS(e){let t=ns+1,i=Mt.length;for(;t<i;){const s=t+i>>>1;Fr(Mt[s])<e?t=s+1:i=s}return t}function Vd(e){(!Mt.length||!Mt.includes(e,Tr&&e.allowRecurse?ns+1:ns))&&(e.id==null?Mt.push(e):Mt.splice(hS(e.id),0,e),Gm())}function Gm(){!Tr&&!vu&&(vu=!0,Ad=Wm.then(Zm))}function fS(e){const t=Mt.indexOf(e);t>ns&&Mt.splice(t,1)}function pS(e){ue(e)?po.push(...e):(!ms||!ms.includes(e,e.allowRecurse?wn+1:wn))&&po.push(e),Gm()}function Cf(e,t=Tr?ns+1:0){for(;t<Mt.length;t++){const i=Mt[t];i&&i.pre&&(Mt.splice(t,1),t--,i())}}function qm(e){if(po.length){const t=[...new Set(po)];if(po.length=0,ms){ms.push(...t);return}for(ms=t,ms.sort((i,s)=>Fr(i)-Fr(s)),wn=0;wn<ms.length;wn++)ms[wn]();ms=null,wn=0}}const Fr=e=>e.id==null?1/0:e.id,gS=(e,t)=>{const i=Fr(e)-Fr(t);if(i===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return i};function Zm(e){vu=!1,Tr=!0,Mt.sort(gS);const t=ji;try{for(ns=0;ns<Mt.length;ns++){const i=Mt[ns];i&&i.active!==!1&&Ks(i,null,14)}}finally{ns=0,Mt.length=0,qm(),Tr=!1,Ad=null,(Mt.length||po.length)&&Zm()}}function mS(e,t,...i){if(e.isUnmounted)return;const s=e.vnode.props||et;let n=i;const o=t.startsWith("update:"),r=o&&t.slice(7);if(r&&r in s){const u=`${r==="modelValue"?"model":r}Modifiers`,{number:d,trim:p}=s[u]||et;p&&(n=i.map(b=>Ct(b)?b.trim():b)),d&&(n=i.map(w_))}let a,l=s[a=Hc(t)]||s[a=Hc(rs(t))];!l&&o&&(l=s[a=Hc(jn(t))]),l&&Yi(l,e,6,n);const c=s[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Yi(c,e,6,n)}}function Xm(e,t,i=!1){const s=t.emitsCache,n=s.get(e);if(n!==void 0)return n;const o=e.emits;let r={},a=!1;if(!me(e)){const l=c=>{const u=Xm(c,t,!0);u&&(a=!0,Rt(r,u))};!i&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!o&&!a?(lt(e)&&s.set(e,null),null):(ue(o)?o.forEach(l=>r[l]=null):Rt(r,o),lt(e)&&s.set(e,r),r)}function Zl(e,t){return!e||!Bl(t)?!1:(t=t.slice(2).replace(/Once$/,""),De(e,t[0].toLowerCase()+t.slice(1))||De(e,jn(t))||De(e,t))}let Et=null,Xl=null;function Xa(e){const t=Et;return Et=e,Xl=e&&e.type.__scopeId||null,t}function Qm(e){Xl=e}function Jm(){Xl=null}function H(e,t=Et,i){if(!t||e._n)return e;const s=(...n)=>{s._d&&Mf(-1);const o=Xa(t);let r;try{r=e(...n)}finally{Xa(o),s._d&&Mf(1)}return r};return s._n=!0,s._c=!0,s._d=!0,s}function zc(e){const{type:t,vnode:i,proxy:s,withProxy:n,props:o,propsOptions:[r],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:p,setupState:b,ctx:$,inheritAttrs:x}=e;let k,F;const M=Xa(e);try{if(i.shapeFlag&4){const j=n||s;k=ss(u.call(j,j,d,o,b,p,$)),F=l}else{const j=t;k=ss(j.length>1?j(o,{attrs:l,slots:a,emit:c}):j(o,null)),F=t.props?l:vS(l)}}catch(j){dr.length=0,ql(j,e,1),k=E(an)}let se=k;if(F&&x!==!1){const j=Object.keys(F),{shapeFlag:pe}=se;j.length&&pe&7&&(r&&j.some(Sd)&&(F=bS(F,r)),se=Ln(se,F))}return i.dirs&&(se=Ln(se),se.dirs=se.dirs?se.dirs.concat(i.dirs):i.dirs),i.transition&&(se.transition=i.transition),k=se,Xa(M),k}const vS=e=>{let t;for(const i in e)(i==="class"||i==="style"||Bl(i))&&((t||(t={}))[i]=e[i]);return t},bS=(e,t)=>{const i={};for(const s in e)(!Sd(s)||!(s.slice(9)in t))&&(i[s]=e[s]);return i};function yS(e,t,i){const{props:s,children:n,component:o}=e,{props:r,children:a,patchFlag:l}=t,c=o.emitsOptions;if(t.dirs||t.transition)return!0;if(i&&l>=0){if(l&1024)return!0;if(l&16)return s?If(s,r,c):!!r;if(l&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(r[p]!==s[p]&&!Zl(c,p))return!0}}}else return(n||a)&&(!a||!a.$stable)?!0:s===r?!1:s?r?If(s,r,c):!0:!!r;return!1}function If(e,t,i){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let n=0;n<s.length;n++){const o=s[n];if(t[o]!==e[o]&&!Zl(i,o))return!0}return!1}function xS({vnode:e,parent:t},i){for(;t&&t.subTree===e;)(e=t.vnode).el=i,t=t.parent}const wS=e=>e.__isSuspense;function $S(e,t){t&&t.pendingBranch?ue(e)?t.effects.push(...e):t.effects.push(e):pS(e)}function Km(e,t){return Hd(e,null,t)}const _a={};function go(e,t,i){return Hd(e,t,i)}function Hd(e,t,{immediate:i,deep:s,flush:n,onTrack:o,onTrigger:r}=et){var a;const l=Tm()===((a=Dt)==null?void 0:a.scope)?Dt:null;let c,u=!1,d=!1;if(vt(e)?(c=()=>e.value,u=Za(e)):Js(e)?(c=()=>e,s=!0):ue(e)?(d=!0,u=e.some(j=>Js(j)||Za(j)),c=()=>e.map(j=>{if(vt(j))return j.value;if(Js(j))return kn(j);if(me(j))return Ks(j,l,2)})):me(e)?t?c=()=>Ks(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return p&&p(),Yi(e,l,3,[b])}:c=ji,t&&s){const j=c;c=()=>kn(j())}let p,b=j=>{p=M.onStop=()=>{Ks(j,l,4)}},$;if(Er)if(b=ji,t?i&&Yi(t,l,3,[c(),d?[]:void 0,b]):c(),n==="sync"){const j=pC();$=j.__watcherHandles||(j.__watcherHandles=[])}else return ji;let x=d?new Array(e.length).fill(_a):_a;const k=()=>{if(M.active)if(t){const j=M.run();(s||u||(d?j.some((pe,Fe)=>Cr(pe,x[Fe])):Cr(j,x)))&&(p&&p(),Yi(t,l,3,[j,x===_a?void 0:d&&x[0]===_a?[]:x,b]),x=j)}else M.run()};k.allowRecurse=!!t;let F;n==="sync"?F=k:n==="post"?F=()=>ei(k,l&&l.suspense):(k.pre=!0,l&&(k.id=l.uid),F=()=>Vd(k));const M=new Dd(c,F);t?i?k():x=M.run():n==="post"?ei(M.run.bind(M),l&&l.suspense):M.run();const se=()=>{M.stop(),l&&l.scope&&Cd(l.scope.effects,M)};return $&&$.push(se),se}function kS(e,t,i){const s=this.proxy,n=Ct(e)?e.includes(".")?ev(s,e):()=>s[e]:e.bind(s,s);let o;me(t)?o=t:(o=t.handler,i=t);const r=Dt;Do(this);const a=Hd(n,o.bind(s),i);return r?Do(r):Tn(),a}function ev(e,t){const i=t.split(".");return()=>{let s=e;for(let n=0;n<i.length&&s;n++)s=s[i[n]];return s}}function kn(e,t){if(!lt(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),vt(e))kn(e.value,t);else if(ue(e))for(let i=0;i<e.length;i++)kn(e[i],t);else if(xm(e)||fo(e))e.forEach(i=>{kn(i,t)});else if(km(e))for(const i in e)kn(e[i],t);return e}function Ql(e,t){const i=Et;if(i===null)return e;const s=ic(i)||i.proxy,n=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[r,a,l,c=et]=t[o];r&&(me(r)&&(r={mounted:r,updated:r}),r.deep&&kn(a),n.push({dir:r,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return e}function vn(e,t,i,s){const n=e.dirs,o=t&&t.dirs;for(let r=0;r<n.length;r++){const a=n[r];o&&(a.oldValue=o[r].value);let l=a.dir[s];l&&(Ho(),Yi(l,i,8,[e.el,a,e,t]),No())}}function Ce(e,t){return me(e)?(()=>Rt({name:e.name},t,{setup:e}))():e}const cr=e=>!!e.type.__asyncLoader,tv=e=>e.type.__isKeepAlive;function _S(e,t){iv(e,"a",t)}function SS(e,t){iv(e,"da",t)}function iv(e,t,i=Dt){const s=e.__wdc||(e.__wdc=()=>{let n=i;for(;n;){if(n.isDeactivated)return;n=n.parent}return e()});if(Jl(t,s,i),i){let n=i.parent;for(;n&&n.parent;)tv(n.parent.vnode)&&CS(s,t,i,n),n=n.parent}}function CS(e,t,i,s){const n=Jl(t,e,s,!0);Qi(()=>{Cd(s[t],n)},i)}function Jl(e,t,i=Dt,s=!1){if(i){const n=i[e]||(i[e]=[]),o=t.__weh||(t.__weh=(...r)=>{if(i.isUnmounted)return;Ho(),Do(i);const a=Yi(t,i,e,r);return Tn(),No(),a});return s?n.unshift(o):n.push(o),o}}const Ms=e=>(t,i=Dt)=>(!Er||e==="sp")&&Jl(e,(...s)=>t(...s),i),IS=Ms("bm"),fi=Ms("m"),TS=Ms("bu"),FS=Ms("u"),sv=Ms("bum"),Qi=Ms("um"),DS=Ms("sp"),RS=Ms("rtg"),ES=Ms("rtc");function OS(e,t=Dt){Jl("ec",e,t)}const nv="components";function ve(e,t){return LS(nv,e,!0,t)||e}const PS=Symbol.for("v-ndc");function LS(e,t,i=!0,s=!1){const n=Et||Dt;if(n){const o=n.type;if(e===nv){const a=dC(o,!1);if(a&&(a===t||a===rs(t)||a===Ul(rs(t))))return o}const r=Tf(n[e]||o[e],t)||Tf(n.appContext[e],t);return!r&&s?o:r}}function Tf(e,t){return e&&(e[t]||e[rs(t)]||e[Ul(rs(t))])}function Kl(e,t,i,s){let n;const o=i&&i[s];if(ue(e)||Ct(e)){n=new Array(e.length);for(let r=0,a=e.length;r<a;r++)n[r]=t(e[r],r,void 0,o&&o[r])}else if(typeof e=="number"){n=new Array(e);for(let r=0;r<e;r++)n[r]=t(r+1,r,void 0,o&&o[r])}else if(lt(e))if(e[Symbol.iterator])n=Array.from(e,(r,a)=>t(r,a,void 0,o&&o[a]));else{const r=Object.keys(e);n=new Array(r.length);for(let a=0,l=r.length;a<l;a++){const c=r[a];n[a]=t(e[c],c,a,o&&o[a])}}else n=[];return i&&(i[s]=n),n}function Qe(e,t,i={},s,n){if(Et.isCE||Et.parent&&cr(Et.parent)&&Et.parent.isCE)return t!=="default"&&(i.name=t),E("slot",i,s&&s());let o=e[t];o&&o._c&&(o._d=!1),G();const r=o&&ov(o(i)),a=It(kt,{key:i.key||r&&r.key||`_${t}`},r||(s?s():[]),r&&e._===1?64:-2);return!n&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),o&&o._c&&(o._d=!0),a}function ov(e){return e.some(t=>Ja(t)?!(t.type===an||t.type===kt&&!ov(t.children)):!0)?e:null}const bu=e=>e?mv(e)?ic(e)||e.proxy:bu(e.parent):null,ur=Rt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>bu(e.parent),$root:e=>bu(e.root),$emit:e=>e.emit,$options:e=>Nd(e),$forceUpdate:e=>e.f||(e.f=()=>Vd(e.update)),$nextTick:e=>e.n||(e.n=Md.bind(e.proxy)),$watch:e=>kS.bind(e)}),Bc=(e,t)=>e!==et&&!e.__isScriptSetup&&De(e,t),AS={get({_:e},t){const{ctx:i,setupState:s,data:n,props:o,accessCache:r,type:a,appContext:l}=e;let c;if(t[0]!=="$"){const b=r[t];if(b!==void 0)switch(b){case 1:return s[t];case 2:return n[t];case 4:return i[t];case 3:return o[t]}else{if(Bc(s,t))return r[t]=1,s[t];if(n!==et&&De(n,t))return r[t]=2,n[t];if((c=e.propsOptions[0])&&De(c,t))return r[t]=3,o[t];if(i!==et&&De(i,t))return r[t]=4,i[t];yu&&(r[t]=0)}}const u=ur[t];let d,p;if(u)return t==="$attrs"&&si(e,"get",t),u(e);if((d=a.__cssModules)&&(d=d[t]))return d;if(i!==et&&De(i,t))return r[t]=4,i[t];if(p=l.config.globalProperties,De(p,t))return p[t]},set({_:e},t,i){const{data:s,setupState:n,ctx:o}=e;return Bc(n,t)?(n[t]=i,!0):s!==et&&De(s,t)?(s[t]=i,!0):De(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=i,!0)},has({_:{data:e,setupState:t,accessCache:i,ctx:s,appContext:n,propsOptions:o}},r){let a;return!!i[r]||e!==et&&De(e,r)||Bc(t,r)||(a=o[0])&&De(a,r)||De(s,r)||De(ur,r)||De(n.config.globalProperties,r)},defineProperty(e,t,i){return i.get!=null?e._.accessCache[t]=0:De(i,"value")&&this.set(e,t,i.value,null),Reflect.defineProperty(e,t,i)}};function Ff(e){return ue(e)?e.reduce((t,i)=>(t[i]=null,t),{}):e}let yu=!0;function MS(e){const t=Nd(e),i=e.proxy,s=e.ctx;yu=!1,t.beforeCreate&&Df(t.beforeCreate,e,"bc");const{data:n,computed:o,methods:r,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:p,beforeUpdate:b,updated:$,activated:x,deactivated:k,beforeDestroy:F,beforeUnmount:M,destroyed:se,unmounted:j,render:pe,renderTracked:Fe,renderTriggered:ct,errorCaptured:_e,serverPrefetch:Ie,expose:ft,inheritAttrs:Lt,components:ai,directives:wi,filters:fn}=t;if(c&&VS(c,s,null),r)for(const We in r){const He=r[We];me(He)&&(s[We]=He.bind(i))}if(n){const We=n.call(i,i);lt(We)&&(e.data=Yn(We))}if(yu=!0,o)for(const We in o){const He=o[We],fs=me(He)?He.bind(i,i):me(He.get)?He.get.bind(i,i):ji,Ns=!me(He)&&me(He.set)?He.set.bind(i):ji,Ki=Ze({get:fs,set:Ns});Object.defineProperty(s,We,{enumerable:!0,configurable:!0,get:()=>Ki.value,set:Jt=>Ki.value=Jt})}if(a)for(const We in a)rv(a[We],s,i,We);if(l){const We=me(l)?l.call(i):l;Reflect.ownKeys(We).forEach(He=>{mo(He,We[He])})}u&&Df(u,e,"c");function Me(We,He){ue(He)?He.forEach(fs=>We(fs.bind(i))):He&&We(He.bind(i))}if(Me(IS,d),Me(fi,p),Me(TS,b),Me(FS,$),Me(_S,x),Me(SS,k),Me(OS,_e),Me(ES,Fe),Me(RS,ct),Me(sv,M),Me(Qi,j),Me(DS,Ie),ue(ft))if(ft.length){const We=e.exposed||(e.exposed={});ft.forEach(He=>{Object.defineProperty(We,He,{get:()=>i[He],set:fs=>i[He]=fs})})}else e.exposed||(e.exposed={});pe&&e.render===ji&&(e.render=pe),Lt!=null&&(e.inheritAttrs=Lt),ai&&(e.components=ai),wi&&(e.directives=wi)}function VS(e,t,i=ji){ue(e)&&(e=xu(e));for(const s in e){const n=e[s];let o;lt(n)?"default"in n?o=hi(n.from||s,n.default,!0):o=hi(n.from||s):o=hi(n),vt(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):t[s]=o}}function Df(e,t,i){Yi(ue(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,i)}function rv(e,t,i,s){const n=s.includes(".")?ev(i,s):()=>i[s];if(Ct(e)){const o=t[e];me(o)&&go(n,o)}else if(me(e))go(n,e.bind(i));else if(lt(e))if(ue(e))e.forEach(o=>rv(o,t,i,s));else{const o=me(e.handler)?e.handler.bind(i):t[e.handler];me(o)&&go(n,o,e)}}function Nd(e){const t=e.type,{mixins:i,extends:s}=t,{mixins:n,optionsCache:o,config:{optionMergeStrategies:r}}=e.appContext,a=o.get(t);let l;return a?l=a:!n.length&&!i&&!s?l=t:(l={},n.length&&n.forEach(c=>Qa(l,c,r,!0)),Qa(l,t,r)),lt(t)&&o.set(t,l),l}function Qa(e,t,i,s=!1){const{mixins:n,extends:o}=t;o&&Qa(e,o,i,!0),n&&n.forEach(r=>Qa(e,r,i,!0));for(const r in t)if(!(s&&r==="expose")){const a=HS[r]||i&&i[r];e[r]=a?a(e[r],t[r]):t[r]}return e}const HS={data:Rf,props:Ef,emits:Ef,methods:sr,computed:sr,beforeCreate:Yt,created:Yt,beforeMount:Yt,mounted:Yt,beforeUpdate:Yt,updated:Yt,beforeDestroy:Yt,beforeUnmount:Yt,destroyed:Yt,unmounted:Yt,activated:Yt,deactivated:Yt,errorCaptured:Yt,serverPrefetch:Yt,components:sr,directives:sr,watch:zS,provide:Rf,inject:NS};function Rf(e,t){return t?e?function(){return Rt(me(e)?e.call(this,this):e,me(t)?t.call(this,this):t)}:t:e}function NS(e,t){return sr(xu(e),xu(t))}function xu(e){if(ue(e)){const t={};for(let i=0;i<e.length;i++)t[e[i]]=e[i];return t}return e}function Yt(e,t){return e?[...new Set([].concat(e,t))]:t}function sr(e,t){return e?Rt(Object.create(null),e,t):t}function Ef(e,t){return e?ue(e)&&ue(t)?[...new Set([...e,...t])]:Rt(Object.create(null),Ff(e),Ff(t??{})):t}function zS(e,t){if(!e)return t;if(!t)return e;const i=Rt(Object.create(null),e);for(const s in t)i[s]=Yt(e[s],t[s]);return i}function av(){return{app:null,config:{isNativeTag:g_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let BS=0;function jS(e,t){return function(s,n=null){me(s)||(s=Rt({},s)),n!=null&&!lt(n)&&(n=null);const o=av(),r=new Set;let a=!1;const l=o.app={_uid:BS++,_component:s,_props:n,_container:null,_context:o,_instance:null,version:gC,get config(){return o.config},set config(c){},use(c,...u){return r.has(c)||(c&&me(c.install)?(r.add(c),c.install(l,...u)):me(c)&&(r.add(c),c(l,...u))),l},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),l},component(c,u){return u?(o.components[c]=u,l):o.components[c]},directive(c,u){return u?(o.directives[c]=u,l):o.directives[c]},mount(c,u,d){if(!a){const p=E(s,n);return p.appContext=o,u&&t?t(p,c):e(p,c,d),a=!0,l._container=c,c.__vue_app__=l,ic(p.component)||p.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return o.provides[c]=u,l},runWithContext(c){Dr=l;try{return c()}finally{Dr=null}}};return l}}let Dr=null;function mo(e,t){if(Dt){let i=Dt.provides;const s=Dt.parent&&Dt.parent.provides;s===i&&(i=Dt.provides=Object.create(s)),i[e]=t}}function hi(e,t,i=!1){const s=Dt||Et;if(s||Dr){const n=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Dr._context.provides;if(n&&e in n)return n[e];if(arguments.length>1)return i&&me(t)?t.call(s&&s.proxy):t}}function YS(){return!!(Dt||Et||Dr)}function US(e,t,i,s=!1){const n={},o={};Ga(o,tc,1),e.propsDefaults=Object.create(null),lv(e,t,n,o);for(const r in e.propsOptions[0])r in n||(n[r]=void 0);i?e.props=s?n:Hm(n):e.type.props?e.props=n:e.props=o,e.attrs=o}function WS(e,t,i,s){const{props:n,attrs:o,vnode:{patchFlag:r}}=e,a=Oe(n),[l]=e.propsOptions;let c=!1;if((s||r>0)&&!(r&16)){if(r&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(Zl(e.emitsOptions,p))continue;const b=t[p];if(l)if(De(o,p))b!==o[p]&&(o[p]=b,c=!0);else{const $=rs(p);n[$]=wu(l,a,$,b,e,!1)}else b!==o[p]&&(o[p]=b,c=!0)}}}else{lv(e,t,n,o)&&(c=!0);let u;for(const d in a)(!t||!De(t,d)&&((u=jn(d))===d||!De(t,u)))&&(l?i&&(i[d]!==void 0||i[u]!==void 0)&&(n[d]=wu(l,a,d,void 0,e,!0)):delete n[d]);if(o!==a)for(const d in o)(!t||!De(t,d))&&(delete o[d],c=!0)}c&&Ss(e,"set","$attrs")}function lv(e,t,i,s){const[n,o]=e.propsOptions;let r=!1,a;if(t)for(let l in t){if(Ea(l))continue;const c=t[l];let u;n&&De(n,u=rs(l))?!o||!o.includes(u)?i[u]=c:(a||(a={}))[u]=c:Zl(e.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,r=!0)}if(o){const l=Oe(i),c=a||et;for(let u=0;u<o.length;u++){const d=o[u];i[d]=wu(n,l,d,c[d],e,!De(c,d))}}return r}function wu(e,t,i,s,n,o){const r=e[i];if(r!=null){const a=De(r,"default");if(a&&s===void 0){const l=r.default;if(r.type!==Function&&!r.skipFactory&&me(l)){const{propsDefaults:c}=n;i in c?s=c[i]:(Do(n),s=c[i]=l.call(null,t),Tn())}else s=l}r[0]&&(o&&!a?s=!1:r[1]&&(s===""||s===jn(i))&&(s=!0))}return s}function cv(e,t,i=!1){const s=t.propsCache,n=s.get(e);if(n)return n;const o=e.props,r={},a=[];let l=!1;if(!me(e)){const u=d=>{l=!0;const[p,b]=cv(d,t,!0);Rt(r,p),b&&a.push(...b)};!i&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!o&&!l)return lt(e)&&s.set(e,ho),ho;if(ue(o))for(let u=0;u<o.length;u++){const d=rs(o[u]);Of(d)&&(r[d]=et)}else if(o)for(const u in o){const d=rs(u);if(Of(d)){const p=o[u],b=r[d]=ue(p)||me(p)?{type:p}:Rt({},p);if(b){const $=Af(Boolean,b.type),x=Af(String,b.type);b[0]=$>-1,b[1]=x<0||$<x,($>-1||De(b,"default"))&&a.push(d)}}}const c=[r,a];return lt(e)&&s.set(e,c),c}function Of(e){return e[0]!=="$"}function Pf(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Lf(e,t){return Pf(e)===Pf(t)}function Af(e,t){return ue(t)?t.findIndex(i=>Lf(i,e)):me(t)&&Lf(t,e)?0:-1}const uv=e=>e[0]==="_"||e==="$stable",zd=e=>ue(e)?e.map(ss):[ss(e)],GS=(e,t,i)=>{if(t._n)return t;const s=H((...n)=>zd(t(...n)),i);return s._c=!1,s},dv=(e,t,i)=>{const s=e._ctx;for(const n in e){if(uv(n))continue;const o=e[n];if(me(o))t[n]=GS(n,o,s);else if(o!=null){const r=zd(o);t[n]=()=>r}}},hv=(e,t)=>{const i=zd(t);e.slots.default=()=>i},qS=(e,t)=>{if(e.vnode.shapeFlag&32){const i=t._;i?(e.slots=Oe(t),Ga(t,"_",i)):dv(t,e.slots={})}else e.slots={},t&&hv(e,t);Ga(e.slots,tc,1)},ZS=(e,t,i)=>{const{vnode:s,slots:n}=e;let o=!0,r=et;if(s.shapeFlag&32){const a=t._;a?i&&a===1?o=!1:(Rt(n,t),!i&&a===1&&delete n._):(o=!t.$stable,dv(t,n)),r=t}else t&&(hv(e,t),r={default:1});if(o)for(const a in n)!uv(a)&&!(a in r)&&delete n[a]};function $u(e,t,i,s,n=!1){if(ue(e)){e.forEach((p,b)=>$u(p,t&&(ue(t)?t[b]:t),i,s,n));return}if(cr(s)&&!n)return;const o=s.shapeFlag&4?ic(s.component)||s.component.proxy:s.el,r=n?null:o,{i:a,r:l}=e,c=t&&t.r,u=a.refs===et?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(Ct(c)?(u[c]=null,De(d,c)&&(d[c]=null)):vt(c)&&(c.value=null)),me(l))Ks(l,a,12,[r,u]);else{const p=Ct(l),b=vt(l);if(p||b){const $=()=>{if(e.f){const x=p?De(d,l)?d[l]:u[l]:l.value;n?ue(x)&&Cd(x,o):ue(x)?x.includes(o)||x.push(o):p?(u[l]=[o],De(d,l)&&(d[l]=u[l])):(l.value=[o],e.k&&(u[e.k]=l.value))}else p?(u[l]=r,De(d,l)&&(d[l]=r)):b&&(l.value=r,e.k&&(u[e.k]=r))};r?($.id=-1,ei($,i)):$()}}}const ei=$S;function XS(e){return QS(e)}function QS(e,t){const i=fu();i.__VUE__=!0;const{insert:s,remove:n,patchProp:o,createElement:r,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:p,setScopeId:b=ji,insertStaticContent:$}=e,x=(g,v,y,S=null,I=null,D=null,U=!1,L=null,V=!!v.dynamicChildren)=>{if(g===v)return;g&&!Qo(g,v)&&(S=C(g),Jt(g,I,D,!0),g=null),v.patchFlag===-2&&(V=!1,v.dynamicChildren=null);const{type:R,ref:ne,shapeFlag:K}=v;switch(R){case ec:k(g,v,y,S);break;case an:F(g,v,y,S);break;case jc:g==null&&M(v,y,S,U);break;case kt:ai(g,v,y,S,I,D,U,L,V);break;default:K&1?pe(g,v,y,S,I,D,U,L,V):K&6?wi(g,v,y,S,I,D,U,L,V):(K&64||K&128)&&R.process(g,v,y,S,I,D,U,L,V,z)}ne!=null&&I&&$u(ne,g&&g.ref,D,v||g,!v)},k=(g,v,y,S)=>{if(g==null)s(v.el=a(v.children),y,S);else{const I=v.el=g.el;v.children!==g.children&&c(I,v.children)}},F=(g,v,y,S)=>{g==null?s(v.el=l(v.children||""),y,S):v.el=g.el},M=(g,v,y,S)=>{[g.el,g.anchor]=$(g.children,v,y,S,g.el,g.anchor)},se=({el:g,anchor:v},y,S)=>{let I;for(;g&&g!==v;)I=p(g),s(g,y,S),g=I;s(v,y,S)},j=({el:g,anchor:v})=>{let y;for(;g&&g!==v;)y=p(g),n(g),g=y;n(v)},pe=(g,v,y,S,I,D,U,L,V)=>{U=U||v.type==="svg",g==null?Fe(v,y,S,I,D,U,L,V):Ie(g,v,I,D,U,L,V)},Fe=(g,v,y,S,I,D,U,L)=>{let V,R;const{type:ne,props:K,shapeFlag:oe,transition:fe,dirs:Se}=g;if(V=g.el=r(g.type,D,K&&K.is,K),oe&8?u(V,g.children):oe&16&&_e(g.children,V,null,S,I,D&&ne!=="foreignObject",U,L),Se&&vn(g,null,S,"created"),ct(V,g,g.scopeId,U,S),K){for(const Ye in K)Ye!=="value"&&!Ea(Ye)&&o(V,Ye,null,K[Ye],D,g.children,S,I,At);"value"in K&&o(V,"value",null,K.value),(R=K.onVnodeBeforeMount)&&ts(R,S,g)}Se&&vn(g,null,S,"beforeMount");const qe=(!I||I&&!I.pendingBranch)&&fe&&!fe.persisted;qe&&fe.beforeEnter(V),s(V,v,y),((R=K&&K.onVnodeMounted)||qe||Se)&&ei(()=>{R&&ts(R,S,g),qe&&fe.enter(V),Se&&vn(g,null,S,"mounted")},I)},ct=(g,v,y,S,I)=>{if(y&&b(g,y),S)for(let D=0;D<S.length;D++)b(g,S[D]);if(I){let D=I.subTree;if(v===D){const U=I.vnode;ct(g,U,U.scopeId,U.slotScopeIds,I.parent)}}},_e=(g,v,y,S,I,D,U,L,V=0)=>{for(let R=V;R<g.length;R++){const ne=g[R]=L?Ws(g[R]):ss(g[R]);x(null,ne,v,y,S,I,D,U,L)}},Ie=(g,v,y,S,I,D,U)=>{const L=v.el=g.el;let{patchFlag:V,dynamicChildren:R,dirs:ne}=v;V|=g.patchFlag&16;const K=g.props||et,oe=v.props||et;let fe;y&&bn(y,!1),(fe=oe.onVnodeBeforeUpdate)&&ts(fe,y,v,g),ne&&vn(v,g,y,"beforeUpdate"),y&&bn(y,!0);const Se=I&&v.type!=="foreignObject";if(R?ft(g.dynamicChildren,R,L,y,S,Se,D):U||He(g,v,L,null,y,S,Se,D,!1),V>0){if(V&16)Lt(L,v,K,oe,y,S,I);else if(V&2&&K.class!==oe.class&&o(L,"class",null,oe.class,I),V&4&&o(L,"style",K.style,oe.style,I),V&8){const qe=v.dynamicProps;for(let Ye=0;Ye<qe.length;Ye++){const xt=qe[Ye],Ai=K[xt],qn=oe[xt];(qn!==Ai||xt==="value")&&o(L,xt,Ai,qn,I,g.children,y,S,At)}}V&1&&g.children!==v.children&&u(L,v.children)}else!U&&R==null&&Lt(L,v,K,oe,y,S,I);((fe=oe.onVnodeUpdated)||ne)&&ei(()=>{fe&&ts(fe,y,v,g),ne&&vn(v,g,y,"updated")},S)},ft=(g,v,y,S,I,D,U)=>{for(let L=0;L<v.length;L++){const V=g[L],R=v[L],ne=V.el&&(V.type===kt||!Qo(V,R)||V.shapeFlag&70)?d(V.el):y;x(V,R,ne,null,S,I,D,U,!0)}},Lt=(g,v,y,S,I,D,U)=>{if(y!==S){if(y!==et)for(const L in y)!Ea(L)&&!(L in S)&&o(g,L,y[L],null,U,v.children,I,D,At);for(const L in S){if(Ea(L))continue;const V=S[L],R=y[L];V!==R&&L!=="value"&&o(g,L,R,V,U,v.children,I,D,At)}"value"in S&&o(g,"value",y.value,S.value)}},ai=(g,v,y,S,I,D,U,L,V)=>{const R=v.el=g?g.el:a(""),ne=v.anchor=g?g.anchor:a("");let{patchFlag:K,dynamicChildren:oe,slotScopeIds:fe}=v;fe&&(L=L?L.concat(fe):fe),g==null?(s(R,y,S),s(ne,y,S),_e(v.children,y,ne,I,D,U,L,V)):K>0&&K&64&&oe&&g.dynamicChildren?(ft(g.dynamicChildren,oe,y,I,D,U,L),(v.key!=null||I&&v===I.subTree)&&fv(g,v,!0)):He(g,v,y,ne,I,D,U,L,V)},wi=(g,v,y,S,I,D,U,L,V)=>{v.slotScopeIds=L,g==null?v.shapeFlag&512?I.ctx.activate(v,y,S,U,V):fn(v,y,S,I,D,U,V):$i(g,v,V)},fn=(g,v,y,S,I,D,U)=>{const L=g.component=rC(g,S,I);if(tv(g)&&(L.ctx.renderer=z),aC(L),L.asyncDep){if(I&&I.registerDep(L,Me),!g.el){const V=L.subTree=E(an);F(null,V,v,y)}return}Me(L,g,v,y,I,D,U)},$i=(g,v,y)=>{const S=v.component=g.component;if(yS(g,v,y))if(S.asyncDep&&!S.asyncResolved){We(S,v,y);return}else S.next=v,fS(S.update),S.update();else v.el=g.el,S.vnode=v},Me=(g,v,y,S,I,D,U)=>{const L=()=>{if(g.isMounted){let{next:ne,bu:K,u:oe,parent:fe,vnode:Se}=g,qe=ne,Ye;bn(g,!1),ne?(ne.el=Se.el,We(g,ne,U)):ne=Se,K&&Nc(K),(Ye=ne.props&&ne.props.onVnodeBeforeUpdate)&&ts(Ye,fe,ne,Se),bn(g,!0);const xt=zc(g),Ai=g.subTree;g.subTree=xt,x(Ai,xt,d(Ai.el),C(Ai),g,I,D),ne.el=xt.el,qe===null&&xS(g,xt.el),oe&&ei(oe,I),(Ye=ne.props&&ne.props.onVnodeUpdated)&&ei(()=>ts(Ye,fe,ne,Se),I)}else{let ne;const{el:K,props:oe}=v,{bm:fe,m:Se,parent:qe}=g,Ye=cr(v);if(bn(g,!1),fe&&Nc(fe),!Ye&&(ne=oe&&oe.onVnodeBeforeMount)&&ts(ne,qe,v),bn(g,!0),K&&Ne){const xt=()=>{g.subTree=zc(g),Ne(K,g.subTree,g,I,null)};Ye?v.type.__asyncLoader().then(()=>!g.isUnmounted&&xt()):xt()}else{const xt=g.subTree=zc(g);x(null,xt,y,S,g,I,D),v.el=xt.el}if(Se&&ei(Se,I),!Ye&&(ne=oe&&oe.onVnodeMounted)){const xt=v;ei(()=>ts(ne,qe,xt),I)}(v.shapeFlag&256||qe&&cr(qe.vnode)&&qe.vnode.shapeFlag&256)&&g.a&&ei(g.a,I),g.isMounted=!0,v=y=S=null}},V=g.effect=new Dd(L,()=>Vd(R),g.scope),R=g.update=()=>V.run();R.id=g.uid,bn(g,!0),R()},We=(g,v,y)=>{v.component=g;const S=g.vnode.props;g.vnode=v,g.next=null,WS(g,v.props,S,y),ZS(g,v.children,y),Ho(),Cf(),No()},He=(g,v,y,S,I,D,U,L,V=!1)=>{const R=g&&g.children,ne=g?g.shapeFlag:0,K=v.children,{patchFlag:oe,shapeFlag:fe}=v;if(oe>0){if(oe&128){Ns(R,K,y,S,I,D,U,L,V);return}else if(oe&256){fs(R,K,y,S,I,D,U,L,V);return}}fe&8?(ne&16&&At(R,I,D),K!==R&&u(y,K)):ne&16?fe&16?Ns(R,K,y,S,I,D,U,L,V):At(R,I,D,!0):(ne&8&&u(y,""),fe&16&&_e(K,y,S,I,D,U,L,V))},fs=(g,v,y,S,I,D,U,L,V)=>{g=g||ho,v=v||ho;const R=g.length,ne=v.length,K=Math.min(R,ne);let oe;for(oe=0;oe<K;oe++){const fe=v[oe]=V?Ws(v[oe]):ss(v[oe]);x(g[oe],fe,y,null,I,D,U,L,V)}R>ne?At(g,I,D,!0,!1,K):_e(v,y,S,I,D,U,L,V,K)},Ns=(g,v,y,S,I,D,U,L,V)=>{let R=0;const ne=v.length;let K=g.length-1,oe=ne-1;for(;R<=K&&R<=oe;){const fe=g[R],Se=v[R]=V?Ws(v[R]):ss(v[R]);if(Qo(fe,Se))x(fe,Se,y,null,I,D,U,L,V);else break;R++}for(;R<=K&&R<=oe;){const fe=g[K],Se=v[oe]=V?Ws(v[oe]):ss(v[oe]);if(Qo(fe,Se))x(fe,Se,y,null,I,D,U,L,V);else break;K--,oe--}if(R>K){if(R<=oe){const fe=oe+1,Se=fe<ne?v[fe].el:S;for(;R<=oe;)x(null,v[R]=V?Ws(v[R]):ss(v[R]),y,Se,I,D,U,L,V),R++}}else if(R>oe)for(;R<=K;)Jt(g[R],I,D,!0),R++;else{const fe=R,Se=R,qe=new Map;for(R=Se;R<=oe;R++){const li=v[R]=V?Ws(v[R]):ss(v[R]);li.key!=null&&qe.set(li.key,R)}let Ye,xt=0;const Ai=oe-Se+1;let qn=!1,mh=0;const Uo=new Array(Ai);for(R=0;R<Ai;R++)Uo[R]=0;for(R=fe;R<=K;R++){const li=g[R];if(xt>=Ai){Jt(li,I,D,!0);continue}let es;if(li.key!=null)es=qe.get(li.key);else for(Ye=Se;Ye<=oe;Ye++)if(Uo[Ye-Se]===0&&Qo(li,v[Ye])){es=Ye;break}es===void 0?Jt(li,I,D,!0):(Uo[es-Se]=R+1,es>=mh?mh=es:qn=!0,x(li,v[es],y,null,I,D,U,L,V),xt++)}const vh=qn?JS(Uo):ho;for(Ye=vh.length-1,R=Ai-1;R>=0;R--){const li=Se+R,es=v[li],bh=li+1<ne?v[li+1].el:S;Uo[R]===0?x(null,es,y,bh,I,D,U,L,V):qn&&(Ye<0||R!==vh[Ye]?Ki(es,y,bh,2):Ye--)}}},Ki=(g,v,y,S,I=null)=>{const{el:D,type:U,transition:L,children:V,shapeFlag:R}=g;if(R&6){Ki(g.component.subTree,v,y,S);return}if(R&128){g.suspense.move(v,y,S);return}if(R&64){U.move(g,v,y,z);return}if(U===kt){s(D,v,y);for(let K=0;K<V.length;K++)Ki(V[K],v,y,S);s(g.anchor,v,y);return}if(U===jc){se(g,v,y);return}if(S!==2&&R&1&&L)if(S===0)L.beforeEnter(D),s(D,v,y),ei(()=>L.enter(D),I);else{const{leave:K,delayLeave:oe,afterLeave:fe}=L,Se=()=>s(D,v,y),qe=()=>{K(D,()=>{Se(),fe&&fe()})};oe?oe(D,Se,qe):qe()}else s(D,v,y)},Jt=(g,v,y,S=!1,I=!1)=>{const{type:D,props:U,ref:L,children:V,dynamicChildren:R,shapeFlag:ne,patchFlag:K,dirs:oe}=g;if(L!=null&&$u(L,null,y,g,!0),ne&256){v.ctx.deactivate(g);return}const fe=ne&1&&oe,Se=!cr(g);let qe;if(Se&&(qe=U&&U.onVnodeBeforeUnmount)&&ts(qe,v,g),ne&6)ta(g.component,y,S);else{if(ne&128){g.suspense.unmount(y,S);return}fe&&vn(g,null,v,"beforeUnmount"),ne&64?g.type.remove(g,v,y,I,z,S):R&&(D!==kt||K>0&&K&64)?At(R,v,y,!1,!0):(D===kt&&K&384||!I&&ne&16)&&At(V,v,y),S&&Wn(g)}(Se&&(qe=U&&U.onVnodeUnmounted)||fe)&&ei(()=>{qe&&ts(qe,v,g),fe&&vn(g,null,v,"unmounted")},y)},Wn=g=>{const{type:v,el:y,anchor:S,transition:I}=g;if(v===kt){Gn(y,S);return}if(v===jc){j(g);return}const D=()=>{n(y),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(g.shapeFlag&1&&I&&!I.persisted){const{leave:U,delayLeave:L}=I,V=()=>U(y,D);L?L(g.el,D,V):V()}else D()},Gn=(g,v)=>{let y;for(;g!==v;)y=p(g),n(g),g=y;n(v)},ta=(g,v,y)=>{const{bum:S,scope:I,update:D,subTree:U,um:L}=g;S&&Nc(S),I.stop(),D&&(D.active=!1,Jt(U,g,v,y)),L&&ei(L,v),ei(()=>{g.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},At=(g,v,y,S=!1,I=!1,D=0)=>{for(let U=D;U<g.length;U++)Jt(g[U],v,y,S,I)},C=g=>g.shapeFlag&6?C(g.component.subTree):g.shapeFlag&128?g.suspense.next():p(g.anchor||g.el),X=(g,v,y)=>{g==null?v._vnode&&Jt(v._vnode,null,null,!0):x(v._vnode||null,g,v,null,null,null,y),Cf(),qm(),v._vnode=g},z={p:x,um:Jt,m:Ki,r:Wn,mt:fn,mc:_e,pc:He,pbc:ft,n:C,o:e};let te,Ne;return t&&([te,Ne]=t(z)),{render:X,hydrate:te,createApp:jS(X,te)}}function bn({effect:e,update:t},i){e.allowRecurse=t.allowRecurse=i}function fv(e,t,i=!1){const s=e.children,n=t.children;if(ue(s)&&ue(n))for(let o=0;o<s.length;o++){const r=s[o];let a=n[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=n[o]=Ws(n[o]),a.el=r.el),i||fv(r,a)),a.type===ec&&(a.el=r.el)}}function JS(e){const t=e.slice(),i=[0];let s,n,o,r,a;const l=e.length;for(s=0;s<l;s++){const c=e[s];if(c!==0){if(n=i[i.length-1],e[n]<c){t[s]=n,i.push(s);continue}for(o=0,r=i.length-1;o<r;)a=o+r>>1,e[i[a]]<c?o=a+1:r=a;c<e[i[o]]&&(o>0&&(t[s]=i[o-1]),i[o]=s)}}for(o=i.length,r=i[o-1];o-- >0;)i[o]=r,r=t[r];return i}const KS=e=>e.__isTeleport,kt=Symbol.for("v-fgt"),ec=Symbol.for("v-txt"),an=Symbol.for("v-cmt"),jc=Symbol.for("v-stc"),dr=[];let zi=null;function G(e=!1){dr.push(zi=e?null:[])}function eC(){dr.pop(),zi=dr[dr.length-1]||null}let Rr=1;function Mf(e){Rr+=e}function pv(e){return e.dynamicChildren=Rr>0?zi||ho:null,eC(),Rr>0&&zi&&zi.push(e),e}function ae(e,t,i,s,n,o){return pv(W(e,t,i,s,n,o,!0))}function It(e,t,i,s,n){return pv(E(e,t,i,s,n,!0))}function Ja(e){return e?e.__v_isVNode===!0:!1}function Qo(e,t){return e.type===t.type&&e.key===t.key}const tc="__vInternal",gv=({key:e})=>e??null,Oa=({ref:e,ref_key:t,ref_for:i})=>(typeof e=="number"&&(e=""+e),e!=null?Ct(e)||vt(e)||me(e)?{i:Et,r:e,k:t,f:!!i}:e:null);function W(e,t=null,i=null,s=0,n=null,o=e===kt?0:1,r=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&gv(t),ref:t&&Oa(t),scopeId:Xl,slotScopeIds:null,children:i,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:Et};return a?(Bd(l,i),o&128&&e.normalize(l)):i&&(l.shapeFlag|=Ct(i)?8:16),Rr>0&&!r&&zi&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&zi.push(l),l}const E=tC;function tC(e,t=null,i=null,s=0,n=null,o=!1){if((!e||e===PS)&&(e=an),Ja(e)){const a=Ln(e,t,!0);return i&&Bd(a,i),Rr>0&&!o&&zi&&(a.shapeFlag&6?zi[zi.indexOf(e)]=a:zi.push(a)),a.patchFlag|=-2,a}if(hC(e)&&(e=e.__vccOpts),t){t=iC(t);let{class:a,style:l}=t;a&&!Ct(a)&&(t.class=ii(a)),lt(l)&&(zm(l)&&!ue(l)&&(l=Rt({},l)),t.style=Pn(l))}const r=Ct(e)?1:wS(e)?128:KS(e)?64:lt(e)?4:me(e)?2:0;return W(e,t,i,s,n,r,o,!0)}function iC(e){return e?zm(e)||tc in e?Rt({},e):e:null}function Ln(e,t,i=!1){const{props:s,ref:n,patchFlag:o,children:r}=e,a=t?sC(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&gv(a),ref:t&&t.ref?i&&n?ue(n)?n.concat(Oa(t)):[n,Oa(t)]:Oa(t):n,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==kt?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ln(e.ssContent),ssFallback:e.ssFallback&&Ln(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Re(e=" ",t=0){return E(ec,null,e,t)}function ku(e="",t=!1){return t?(G(),It(an,null,e)):E(an,null,e)}function ss(e){return e==null||typeof e=="boolean"?E(an):ue(e)?E(kt,null,e.slice()):typeof e=="object"?Ws(e):E(ec,null,String(e))}function Ws(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ln(e)}function Bd(e,t){let i=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(ue(t))i=16;else if(typeof t=="object")if(s&65){const n=t.default;n&&(n._c&&(n._d=!1),Bd(e,n()),n._c&&(n._d=!0));return}else{i=32;const n=t._;!n&&!(tc in t)?t._ctx=Et:n===3&&Et&&(Et.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else me(t)?(t={default:t,_ctx:Et},i=32):(t=String(t),s&64?(i=16,t=[Re(t)]):i=8);e.children=t,e.shapeFlag|=i}function sC(...e){const t={};for(let i=0;i<e.length;i++){const s=e[i];for(const n in s)if(n==="class")t.class!==s.class&&(t.class=ii([t.class,s.class]));else if(n==="style")t.style=Pn([t.style,s.style]);else if(Bl(n)){const o=t[n],r=s[n];r&&o!==r&&!(ue(o)&&o.includes(r))&&(t[n]=o?[].concat(o,r):r)}else n!==""&&(t[n]=s[n])}return t}function ts(e,t,i,s=null){Yi(e,t,7,[i,s])}const nC=av();let oC=0;function rC(e,t,i){const s=e.type,n=(t?t.appContext:e.appContext)||nC,o={uid:oC++,vnode:e,type:s,parent:t,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,scope:new Cm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(n.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cv(s,n),emitsOptions:Xm(s,n),emit:null,emitted:null,propsDefaults:et,inheritAttrs:s.inheritAttrs,ctx:et,data:et,props:et,attrs:et,slots:et,refs:et,setupState:et,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:i,suspenseId:i?i.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=mS.bind(null,o),e.ce&&e.ce(o),o}let Dt=null,jd,Xn,Vf="__VUE_INSTANCE_SETTERS__";(Xn=fu()[Vf])||(Xn=fu()[Vf]=[]),Xn.push(e=>Dt=e),jd=e=>{Xn.length>1?Xn.forEach(t=>t(e)):Xn[0](e)};const Do=e=>{jd(e),e.scope.on()},Tn=()=>{Dt&&Dt.scope.off(),jd(null)};function mv(e){return e.vnode.shapeFlag&4}let Er=!1;function aC(e,t=!1){Er=t;const{props:i,children:s}=e.vnode,n=mv(e);US(e,i,n,t),qS(e,s);const o=n?lC(e,t):void 0;return Er=!1,o}function lC(e,t){const i=e.type;e.accessCache=Object.create(null),e.proxy=Gl(new Proxy(e.ctx,AS));const{setup:s}=i;if(s){const n=e.setupContext=s.length>1?uC(e):null;Do(e),Ho();const o=Ks(s,e,0,[e.props,n]);if(No(),Tn(),wm(o)){if(o.then(Tn,Tn),t)return o.then(r=>{Hf(e,r,t)}).catch(r=>{ql(r,e,0)});e.asyncDep=o}else Hf(e,o,t)}else vv(e,t)}function Hf(e,t,i){me(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:lt(t)&&(e.setupState=Um(t)),vv(e,i)}let Nf;function vv(e,t,i){const s=e.type;if(!e.render){if(!t&&Nf&&!s.render){const n=s.template||Nd(e).template;if(n){const{isCustomElement:o,compilerOptions:r}=e.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Rt(Rt({isCustomElement:o,delimiters:a},r),l);s.render=Nf(n,c)}}e.render=s.render||ji}Do(e),Ho(),MS(e),No(),Tn()}function cC(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,i){return si(e,"get","$attrs"),t[i]}}))}function uC(e){const t=i=>{e.exposed=i||{}};return{get attrs(){return cC(e)},slots:e.slots,emit:e.emit,expose:t}}function ic(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Um(Gl(e.exposed)),{get(t,i){if(i in t)return t[i];if(i in ur)return ur[i](e)},has(t,i){return i in t||i in ur}}))}function dC(e,t=!0){return me(e)?e.displayName||e.name:e.name||t&&e.__name}function hC(e){return me(e)&&"__vccOpts"in e}const Ze=(e,t)=>uS(e,t,Er);function Cs(e,t,i){const s=arguments.length;return s===2?lt(t)&&!ue(t)?Ja(t)?E(e,null,[t]):E(e,t):E(e,null,t):(s>3?i=Array.prototype.slice.call(arguments,2):s===3&&Ja(i)&&(i=[i]),E(e,t,i))}const fC=Symbol.for("v-scx"),pC=()=>hi(fC),gC="3.3.4",mC="http://www.w3.org/2000/svg",$n=typeof document<"u"?document:null,zf=$n&&$n.createElement("template"),vC={insert:(e,t,i)=>{t.insertBefore(e,i||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,i,s)=>{const n=t?$n.createElementNS(mC,e):$n.createElement(e,i?{is:i}:void 0);return e==="select"&&s&&s.multiple!=null&&n.setAttribute("multiple",s.multiple),n},createText:e=>$n.createTextNode(e),createComment:e=>$n.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>$n.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,i,s,n,o){const r=i?i.previousSibling:t.lastChild;if(n&&(n===o||n.nextSibling))for(;t.insertBefore(n.cloneNode(!0),i),!(n===o||!(n=n.nextSibling)););else{zf.innerHTML=s?`<svg>${e}</svg>`:e;const a=zf.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,i)}return[r?r.nextSibling:t.firstChild,i?i.previousSibling:t.lastChild]}};function bC(e,t,i){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):i?e.setAttribute("class",t):e.className=t}function yC(e,t,i){const s=e.style,n=Ct(i);if(i&&!n){if(t&&!Ct(t))for(const o in t)i[o]==null&&_u(s,o,"");for(const o in i)_u(s,o,i[o])}else{const o=s.display;n?t!==i&&(s.cssText=i):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=o)}}const Bf=/\s*!important$/;function _u(e,t,i){if(ue(i))i.forEach(s=>_u(e,t,s));else if(i==null&&(i=""),t.startsWith("--"))e.setProperty(t,i);else{const s=xC(e,t);Bf.test(i)?e.setProperty(jn(s),i.replace(Bf,""),"important"):e[s]=i}}const jf=["Webkit","Moz","ms"],Yc={};function xC(e,t){const i=Yc[t];if(i)return i;let s=rs(t);if(s!=="filter"&&s in e)return Yc[t]=s;s=Ul(s);for(let n=0;n<jf.length;n++){const o=jf[n]+s;if(o in e)return Yc[t]=o}return t}const Yf="http://www.w3.org/1999/xlink";function wC(e,t,i,s,n){if(s&&t.startsWith("xlink:"))i==null?e.removeAttributeNS(Yf,t.slice(6,t.length)):e.setAttributeNS(Yf,t,i);else{const o=I_(t);i==null||o&&!_m(i)?e.removeAttribute(t):e.setAttribute(t,o?"":i)}}function $C(e,t,i,s,n,o,r){if(t==="innerHTML"||t==="textContent"){s&&r(s,n,o),e[t]=i??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=i;const c=a==="OPTION"?e.getAttribute("value"):e.value,u=i??"";c!==u&&(e.value=u),i==null&&e.removeAttribute(t);return}let l=!1;if(i===""||i==null){const c=typeof e[t];c==="boolean"?i=_m(i):i==null&&c==="string"?(i="",l=!0):c==="number"&&(i=0,l=!0)}try{e[t]=i}catch{}l&&e.removeAttribute(t)}function kC(e,t,i,s){e.addEventListener(t,i,s)}function _C(e,t,i,s){e.removeEventListener(t,i,s)}function SC(e,t,i,s,n=null){const o=e._vei||(e._vei={}),r=o[t];if(s&&r)r.value=s;else{const[a,l]=CC(t);if(s){const c=o[t]=FC(s,n);kC(e,a,c,l)}else r&&(_C(e,a,r,l),o[t]=void 0)}}const Uf=/(?:Once|Passive|Capture)$/;function CC(e){let t;if(Uf.test(e)){t={};let s;for(;s=e.match(Uf);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):jn(e.slice(2)),t]}let Uc=0;const IC=Promise.resolve(),TC=()=>Uc||(IC.then(()=>Uc=0),Uc=Date.now());function FC(e,t){const i=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=i.attached)return;Yi(DC(s,i.value),t,5,[s])};return i.value=e,i.attached=TC(),i}function DC(e,t){if(ue(t)){const i=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{i.call(e),e._stopped=!0},t.map(s=>n=>!n._stopped&&s&&s(n))}else return t}const Wf=/^on[a-z]/,RC=(e,t,i,s,n=!1,o,r,a,l)=>{t==="class"?bC(e,s,n):t==="style"?yC(e,i,s):Bl(t)?Sd(t)||SC(e,t,i,s,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):EC(e,t,s,n))?$C(e,t,s,o,r,a,l):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),wC(e,t,s,n))};function EC(e,t,i,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&Wf.test(t)&&me(i)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Wf.test(t)&&Ct(i)?!1:t in e}const OC={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},PC=(e,t)=>i=>{if(!("key"in i))return;const s=jn(i.key);if(t.some(n=>n===s||OC[n]===s))return e(i)},sc={beforeMount(e,{value:t},{transition:i}){e._vod=e.style.display==="none"?"":e.style.display,i&&t?i.beforeEnter(e):Jo(e,t)},mounted(e,{value:t},{transition:i}){i&&t&&i.enter(e)},updated(e,{value:t,oldValue:i},{transition:s}){!t!=!i&&(s?t?(s.beforeEnter(e),Jo(e,!0),s.enter(e)):s.leave(e,()=>{Jo(e,!1)}):Jo(e,t))},beforeUnmount(e,{value:t}){Jo(e,t)}};function Jo(e,t){e.style.display=t?e._vod:"none"}const LC=Rt({patchProp:RC},vC);let Gf;function AC(){return Gf||(Gf=XS(LC))}const Yd=(...e)=>{const t=AC().createApp(...e),{mount:i}=t;return t.mount=s=>{const n=MC(s);if(!n)return;const o=t._component;!me(o)&&!o.render&&!o.template&&(o.template=n.innerHTML),n.innerHTML="";const r=i(n,!1,n instanceof SVGElement);return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),r},t};function MC(e){return Ct(e)?document.querySelector(e):e}//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var bv;function N(){return bv.apply(null,arguments)}function VC(e){bv=e}function Gi(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function Fn(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function Le(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Ud(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(Le(e,t))return!1;return!0}function ti(e){return e===void 0}function Is(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function Zr(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function yv(e,t){var i=[],s,n=e.length;for(s=0;s<n;++s)i.push(t(e[s],s));return i}function Zs(e,t){for(var i in t)Le(t,i)&&(e[i]=t[i]);return Le(t,"toString")&&(e.toString=t.toString),Le(t,"valueOf")&&(e.valueOf=t.valueOf),e}function ds(e,t,i,s){return jv(e,t,i,s,!0).utc()}function HC(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function ge(e){return e._pf==null&&(e._pf=HC()),e._pf}var Su;Array.prototype.some?Su=Array.prototype.some:Su=function(e){var t=Object(this),i=t.length>>>0,s;for(s=0;s<i;s++)if(s in t&&e.call(this,t[s],s,t))return!0;return!1};function Wd(e){if(e._isValid==null){var t=ge(e),i=Su.call(t.parsedDateParts,function(n){return n!=null}),s=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&i);if(e._strict&&(s=s&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=s;else return s}return e._isValid}function nc(e){var t=ds(NaN);return e!=null?Zs(ge(t),e):ge(t).userInvalidated=!0,t}var qf=N.momentProperties=[],Wc=!1;function Gd(e,t){var i,s,n,o=qf.length;if(ti(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),ti(t._i)||(e._i=t._i),ti(t._f)||(e._f=t._f),ti(t._l)||(e._l=t._l),ti(t._strict)||(e._strict=t._strict),ti(t._tzm)||(e._tzm=t._tzm),ti(t._isUTC)||(e._isUTC=t._isUTC),ti(t._offset)||(e._offset=t._offset),ti(t._pf)||(e._pf=ge(t)),ti(t._locale)||(e._locale=t._locale),o>0)for(i=0;i<o;i++)s=qf[i],n=t[s],ti(n)||(e[s]=n);return e}function Xr(e){Gd(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),Wc===!1&&(Wc=!0,N.updateOffset(this),Wc=!1)}function qi(e){return e instanceof Xr||e!=null&&e._isAMomentObject!=null}function xv(e){N.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function Pi(e,t){var i=!0;return Zs(function(){if(N.deprecationHandler!=null&&N.deprecationHandler(null,e),i){var s=[],n,o,r,a=arguments.length;for(o=0;o<a;o++){if(n="",typeof arguments[o]=="object"){n+=`
[`+o+"] ";for(r in arguments[0])Le(arguments[0],r)&&(n+=r+": "+arguments[0][r]+", ");n=n.slice(0,-2)}else n=arguments[o];s.push(n)}xv(e+`
Arguments: `+Array.prototype.slice.call(s).join("")+`
`+new Error().stack),i=!1}return t.apply(this,arguments)},t)}var Zf={};function wv(e,t){N.deprecationHandler!=null&&N.deprecationHandler(e,t),Zf[e]||(xv(t),Zf[e]=!0)}N.suppressDeprecationWarnings=!1;N.deprecationHandler=null;function hs(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function NC(e){var t,i;for(i in e)Le(e,i)&&(t=e[i],hs(t)?this[i]=t:this["_"+i]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function Cu(e,t){var i=Zs({},e),s;for(s in t)Le(t,s)&&(Fn(e[s])&&Fn(t[s])?(i[s]={},Zs(i[s],e[s]),Zs(i[s],t[s])):t[s]!=null?i[s]=t[s]:delete i[s]);for(s in e)Le(e,s)&&!Le(t,s)&&Fn(e[s])&&(i[s]=Zs({},i[s]));return i}function qd(e){e!=null&&this.set(e)}var Iu;Object.keys?Iu=Object.keys:Iu=function(e){var t,i=[];for(t in e)Le(e,t)&&i.push(t);return i};var zC={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function BC(e,t,i){var s=this._calendar[e]||this._calendar.sameElse;return hs(s)?s.call(t,i):s}function as(e,t,i){var s=""+Math.abs(e),n=t-s.length,o=e>=0;return(o?i?"+":"":"-")+Math.pow(10,Math.max(0,n)).toString().substr(1)+s}var Zd=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Sa=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Gc={},vo={};function ie(e,t,i,s){var n=s;typeof s=="string"&&(n=function(){return this[s]()}),e&&(vo[e]=n),t&&(vo[t[0]]=function(){return as(n.apply(this,arguments),t[1],t[2])}),i&&(vo[i]=function(){return this.localeData().ordinal(n.apply(this,arguments),e)})}function jC(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function YC(e){var t=e.match(Zd),i,s;for(i=0,s=t.length;i<s;i++)vo[t[i]]?t[i]=vo[t[i]]:t[i]=jC(t[i]);return function(n){var o="",r;for(r=0;r<s;r++)o+=hs(t[r])?t[r].call(n,e):t[r];return o}}function Pa(e,t){return e.isValid()?(t=$v(t,e.localeData()),Gc[t]=Gc[t]||YC(t),Gc[t](e)):e.localeData().invalidDate()}function $v(e,t){var i=5;function s(n){return t.longDateFormat(n)||n}for(Sa.lastIndex=0;i>=0&&Sa.test(e);)e=e.replace(Sa,s),Sa.lastIndex=0,i-=1;return e}var UC={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function WC(e){var t=this._longDateFormat[e],i=this._longDateFormat[e.toUpperCase()];return t||!i?t:(this._longDateFormat[e]=i.match(Zd).map(function(s){return s==="MMMM"||s==="MM"||s==="DD"||s==="dddd"?s.slice(1):s}).join(""),this._longDateFormat[e])}var GC="Invalid date";function qC(){return this._invalidDate}var ZC="%d",XC=/\d{1,2}/;function QC(e){return this._ordinal.replace("%d",e)}var JC={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function KC(e,t,i,s){var n=this._relativeTime[i];return hs(n)?n(e,t,i,s):n.replace(/%d/i,e)}function eI(e,t){var i=this._relativeTime[e>0?"future":"past"];return hs(i)?i(t):i.replace(/%s/i,t)}var hr={};function Bt(e,t){var i=e.toLowerCase();hr[i]=hr[i+"s"]=hr[t]=e}function Li(e){return typeof e=="string"?hr[e]||hr[e.toLowerCase()]:void 0}function Xd(e){var t={},i,s;for(s in e)Le(e,s)&&(i=Li(s),i&&(t[i]=e[s]));return t}var kv={};function jt(e,t){kv[e]=t}function tI(e){var t=[],i;for(i in e)Le(e,i)&&t.push({unit:i,priority:kv[i]});return t.sort(function(s,n){return s.priority-n.priority}),t}function oc(e){return e%4===0&&e%100!==0||e%400===0}function Si(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function xe(e){var t=+e,i=0;return t!==0&&isFinite(t)&&(i=Si(t)),i}function zo(e,t){return function(i){return i!=null?(_v(this,e,i),N.updateOffset(this,t),this):Ka(this,e)}}function Ka(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function _v(e,t,i){e.isValid()&&!isNaN(i)&&(t==="FullYear"&&oc(e.year())&&e.month()===1&&e.date()===29?(i=xe(i),e._d["set"+(e._isUTC?"UTC":"")+t](i,e.month(),dc(i,e.month()))):e._d["set"+(e._isUTC?"UTC":"")+t](i))}function iI(e){return e=Li(e),hs(this[e])?this[e]():this}function sI(e,t){if(typeof e=="object"){e=Xd(e);var i=tI(e),s,n=i.length;for(s=0;s<n;s++)this[i[s].unit](e[i[s].unit])}else if(e=Li(e),hs(this[e]))return this[e](t);return this}var Sv=/\d/,xi=/\d\d/,Cv=/\d{3}/,Qd=/\d{4}/,rc=/[+-]?\d{6}/,nt=/\d\d?/,Iv=/\d\d\d\d?/,Tv=/\d\d\d\d\d\d?/,ac=/\d{1,3}/,Jd=/\d{1,4}/,lc=/[+-]?\d{1,6}/,Bo=/\d+/,cc=/[+-]?\d+/,nI=/Z|[+-]\d\d:?\d\d/gi,uc=/Z|[+-]\d\d(?::?\d\d)?/gi,oI=/[+-]?\d+(\.\d{1,3})?/,Qr=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,el;el={};function Z(e,t,i){el[e]=hs(t)?t:function(s,n){return s&&i?i:t}}function rI(e,t){return Le(el,e)?el[e](t._strict,t._locale):new RegExp(aI(e))}function aI(e){return ui(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,i,s,n,o){return i||s||n||o}))}function ui(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var Tu={};function Ue(e,t){var i,s=t,n;for(typeof e=="string"&&(e=[e]),Is(t)&&(s=function(o,r){r[t]=xe(o)}),n=e.length,i=0;i<n;i++)Tu[e[i]]=s}function Jr(e,t){Ue(e,function(i,s,n,o){n._w=n._w||{},t(i,n._w,n,o)})}function lI(e,t,i){t!=null&&Le(Tu,e)&&Tu[e](t,i._a,i,e)}var Ht=0,xs=1,os=2,_t=3,Bi=4,ws=5,_n=6,cI=7,uI=8;function dI(e,t){return(e%t+t)%t}var pt;Array.prototype.indexOf?pt=Array.prototype.indexOf:pt=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function dc(e,t){if(isNaN(e)||isNaN(t))return NaN;var i=dI(t,12);return e+=(t-i)/12,i===1?oc(e)?29:28:31-i%7%2}ie("M",["MM",2],"Mo",function(){return this.month()+1});ie("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});ie("MMMM",0,0,function(e){return this.localeData().months(this,e)});Bt("month","M");jt("month",8);Z("M",nt);Z("MM",nt,xi);Z("MMM",function(e,t){return t.monthsShortRegex(e)});Z("MMMM",function(e,t){return t.monthsRegex(e)});Ue(["M","MM"],function(e,t){t[xs]=xe(e)-1});Ue(["MMM","MMMM"],function(e,t,i,s){var n=i._locale.monthsParse(e,s,i._strict);n!=null?t[xs]=n:ge(i).invalidMonth=e});var hI="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Fv="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Dv=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,fI=Qr,pI=Qr;function gI(e,t){return e?Gi(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||Dv).test(t)?"format":"standalone"][e.month()]:Gi(this._months)?this._months:this._months.standalone}function mI(e,t){return e?Gi(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[Dv.test(t)?"format":"standalone"][e.month()]:Gi(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function vI(e,t,i){var s,n,o,r=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)o=ds([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(o,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(o,"").toLocaleLowerCase();return i?t==="MMM"?(n=pt.call(this._shortMonthsParse,r),n!==-1?n:null):(n=pt.call(this._longMonthsParse,r),n!==-1?n:null):t==="MMM"?(n=pt.call(this._shortMonthsParse,r),n!==-1?n:(n=pt.call(this._longMonthsParse,r),n!==-1?n:null)):(n=pt.call(this._longMonthsParse,r),n!==-1?n:(n=pt.call(this._shortMonthsParse,r),n!==-1?n:null))}function bI(e,t,i){var s,n,o;if(this._monthsParseExact)return vI.call(this,e,t,i);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(n=ds([2e3,s]),i&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(n,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(n,"").replace(".","")+"$","i")),!i&&!this._monthsParse[s]&&(o="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[s]=new RegExp(o.replace(".",""),"i")),i&&t==="MMMM"&&this._longMonthsParse[s].test(e))return s;if(i&&t==="MMM"&&this._shortMonthsParse[s].test(e))return s;if(!i&&this._monthsParse[s].test(e))return s}}function Rv(e,t){var i;if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=xe(t);else if(t=e.localeData().monthsParse(t),!Is(t))return e}return i=Math.min(e.date(),dc(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,i),e}function Ev(e){return e!=null?(Rv(this,e),N.updateOffset(this,!0),this):Ka(this,"Month")}function yI(){return dc(this.year(),this.month())}function xI(e){return this._monthsParseExact?(Le(this,"_monthsRegex")||Ov.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(Le(this,"_monthsShortRegex")||(this._monthsShortRegex=fI),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function wI(e){return this._monthsParseExact?(Le(this,"_monthsRegex")||Ov.call(this),e?this._monthsStrictRegex:this._monthsRegex):(Le(this,"_monthsRegex")||(this._monthsRegex=pI),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function Ov(){function e(r,a){return a.length-r.length}var t=[],i=[],s=[],n,o;for(n=0;n<12;n++)o=ds([2e3,n]),t.push(this.monthsShort(o,"")),i.push(this.months(o,"")),s.push(this.months(o,"")),s.push(this.monthsShort(o,""));for(t.sort(e),i.sort(e),s.sort(e),n=0;n<12;n++)t[n]=ui(t[n]),i[n]=ui(i[n]);for(n=0;n<24;n++)s[n]=ui(s[n]);this._monthsRegex=new RegExp("^("+s.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}ie("Y",0,0,function(){var e=this.year();return e<=9999?as(e,4):"+"+e});ie(0,["YY",2],0,function(){return this.year()%100});ie(0,["YYYY",4],0,"year");ie(0,["YYYYY",5],0,"year");ie(0,["YYYYYY",6,!0],0,"year");Bt("year","y");jt("year",1);Z("Y",cc);Z("YY",nt,xi);Z("YYYY",Jd,Qd);Z("YYYYY",lc,rc);Z("YYYYYY",lc,rc);Ue(["YYYYY","YYYYYY"],Ht);Ue("YYYY",function(e,t){t[Ht]=e.length===2?N.parseTwoDigitYear(e):xe(e)});Ue("YY",function(e,t){t[Ht]=N.parseTwoDigitYear(e)});Ue("Y",function(e,t){t[Ht]=parseInt(e,10)});function fr(e){return oc(e)?366:365}N.parseTwoDigitYear=function(e){return xe(e)+(xe(e)>68?1900:2e3)};var Pv=zo("FullYear",!0);function $I(){return oc(this.year())}function kI(e,t,i,s,n,o,r){var a;return e<100&&e>=0?(a=new Date(e+400,t,i,s,n,o,r),isFinite(a.getFullYear())&&a.setFullYear(e)):a=new Date(e,t,i,s,n,o,r),a}function Or(e){var t,i;return e<100&&e>=0?(i=Array.prototype.slice.call(arguments),i[0]=e+400,t=new Date(Date.UTC.apply(null,i)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function tl(e,t,i){var s=7+t-i,n=(7+Or(e,0,s).getUTCDay()-t)%7;return-n+s-1}function Lv(e,t,i,s,n){var o=(7+i-s)%7,r=tl(e,s,n),a=1+7*(t-1)+o+r,l,c;return a<=0?(l=e-1,c=fr(l)+a):a>fr(e)?(l=e+1,c=a-fr(e)):(l=e,c=a),{year:l,dayOfYear:c}}function Pr(e,t,i){var s=tl(e.year(),t,i),n=Math.floor((e.dayOfYear()-s-1)/7)+1,o,r;return n<1?(r=e.year()-1,o=n+$s(r,t,i)):n>$s(e.year(),t,i)?(o=n-$s(e.year(),t,i),r=e.year()+1):(r=e.year(),o=n),{week:o,year:r}}function $s(e,t,i){var s=tl(e,t,i),n=tl(e+1,t,i);return(fr(e)-s+n)/7}ie("w",["ww",2],"wo","week");ie("W",["WW",2],"Wo","isoWeek");Bt("week","w");Bt("isoWeek","W");jt("week",5);jt("isoWeek",5);Z("w",nt);Z("ww",nt,xi);Z("W",nt);Z("WW",nt,xi);Jr(["w","ww","W","WW"],function(e,t,i,s){t[s.substr(0,1)]=xe(e)});function _I(e){return Pr(e,this._week.dow,this._week.doy).week}var SI={dow:0,doy:6};function CI(){return this._week.dow}function II(){return this._week.doy}function TI(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function FI(e){var t=Pr(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}ie("d",0,"do","day");ie("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});ie("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});ie("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});ie("e",0,0,"weekday");ie("E",0,0,"isoWeekday");Bt("day","d");Bt("weekday","e");Bt("isoWeekday","E");jt("day",11);jt("weekday",11);jt("isoWeekday",11);Z("d",nt);Z("e",nt);Z("E",nt);Z("dd",function(e,t){return t.weekdaysMinRegex(e)});Z("ddd",function(e,t){return t.weekdaysShortRegex(e)});Z("dddd",function(e,t){return t.weekdaysRegex(e)});Jr(["dd","ddd","dddd"],function(e,t,i,s){var n=i._locale.weekdaysParse(e,s,i._strict);n!=null?t.d=n:ge(i).invalidWeekday=e});Jr(["d","e","E"],function(e,t,i,s){t[s]=xe(e)});function DI(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function RI(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Kd(e,t){return e.slice(t,7).concat(e.slice(0,t))}var EI="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Av="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),OI="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),PI=Qr,LI=Qr,AI=Qr;function MI(e,t){var i=Gi(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?Kd(i,this._week.dow):e?i[e.day()]:i}function VI(e){return e===!0?Kd(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function HI(e){return e===!0?Kd(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function NI(e,t,i){var s,n,o,r=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)o=ds([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(o,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(o,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(o,"").toLocaleLowerCase();return i?t==="dddd"?(n=pt.call(this._weekdaysParse,r),n!==-1?n:null):t==="ddd"?(n=pt.call(this._shortWeekdaysParse,r),n!==-1?n:null):(n=pt.call(this._minWeekdaysParse,r),n!==-1?n:null):t==="dddd"?(n=pt.call(this._weekdaysParse,r),n!==-1||(n=pt.call(this._shortWeekdaysParse,r),n!==-1)?n:(n=pt.call(this._minWeekdaysParse,r),n!==-1?n:null)):t==="ddd"?(n=pt.call(this._shortWeekdaysParse,r),n!==-1||(n=pt.call(this._weekdaysParse,r),n!==-1)?n:(n=pt.call(this._minWeekdaysParse,r),n!==-1?n:null)):(n=pt.call(this._minWeekdaysParse,r),n!==-1||(n=pt.call(this._weekdaysParse,r),n!==-1)?n:(n=pt.call(this._shortWeekdaysParse,r),n!==-1?n:null))}function zI(e,t,i){var s,n,o;if(this._weekdaysParseExact)return NI.call(this,e,t,i);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(n=ds([2e3,1]).day(s),i&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(n,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(n,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(n,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[s]||(o="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),this._weekdaysParse[s]=new RegExp(o.replace(".",""),"i")),i&&t==="dddd"&&this._fullWeekdaysParse[s].test(e))return s;if(i&&t==="ddd"&&this._shortWeekdaysParse[s].test(e))return s;if(i&&t==="dd"&&this._minWeekdaysParse[s].test(e))return s;if(!i&&this._weekdaysParse[s].test(e))return s}}function BI(e){if(!this.isValid())return e!=null?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return e!=null?(e=DI(e,this.localeData()),this.add(e-t,"d")):t}function jI(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function YI(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=RI(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function UI(e){return this._weekdaysParseExact?(Le(this,"_weekdaysRegex")||eh.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(Le(this,"_weekdaysRegex")||(this._weekdaysRegex=PI),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function WI(e){return this._weekdaysParseExact?(Le(this,"_weekdaysRegex")||eh.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(Le(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=LI),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function GI(e){return this._weekdaysParseExact?(Le(this,"_weekdaysRegex")||eh.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(Le(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=AI),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function eh(){function e(u,d){return d.length-u.length}var t=[],i=[],s=[],n=[],o,r,a,l,c;for(o=0;o<7;o++)r=ds([2e3,1]).day(o),a=ui(this.weekdaysMin(r,"")),l=ui(this.weekdaysShort(r,"")),c=ui(this.weekdays(r,"")),t.push(a),i.push(l),s.push(c),n.push(a),n.push(l),n.push(c);t.sort(e),i.sort(e),s.sort(e),n.sort(e),this._weekdaysRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function th(){return this.hours()%12||12}function qI(){return this.hours()||24}ie("H",["HH",2],0,"hour");ie("h",["hh",2],0,th);ie("k",["kk",2],0,qI);ie("hmm",0,0,function(){return""+th.apply(this)+as(this.minutes(),2)});ie("hmmss",0,0,function(){return""+th.apply(this)+as(this.minutes(),2)+as(this.seconds(),2)});ie("Hmm",0,0,function(){return""+this.hours()+as(this.minutes(),2)});ie("Hmmss",0,0,function(){return""+this.hours()+as(this.minutes(),2)+as(this.seconds(),2)});function Mv(e,t){ie(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}Mv("a",!0);Mv("A",!1);Bt("hour","h");jt("hour",13);function Vv(e,t){return t._meridiemParse}Z("a",Vv);Z("A",Vv);Z("H",nt);Z("h",nt);Z("k",nt);Z("HH",nt,xi);Z("hh",nt,xi);Z("kk",nt,xi);Z("hmm",Iv);Z("hmmss",Tv);Z("Hmm",Iv);Z("Hmmss",Tv);Ue(["H","HH"],_t);Ue(["k","kk"],function(e,t,i){var s=xe(e);t[_t]=s===24?0:s});Ue(["a","A"],function(e,t,i){i._isPm=i._locale.isPM(e),i._meridiem=e});Ue(["h","hh"],function(e,t,i){t[_t]=xe(e),ge(i).bigHour=!0});Ue("hmm",function(e,t,i){var s=e.length-2;t[_t]=xe(e.substr(0,s)),t[Bi]=xe(e.substr(s)),ge(i).bigHour=!0});Ue("hmmss",function(e,t,i){var s=e.length-4,n=e.length-2;t[_t]=xe(e.substr(0,s)),t[Bi]=xe(e.substr(s,2)),t[ws]=xe(e.substr(n)),ge(i).bigHour=!0});Ue("Hmm",function(e,t,i){var s=e.length-2;t[_t]=xe(e.substr(0,s)),t[Bi]=xe(e.substr(s))});Ue("Hmmss",function(e,t,i){var s=e.length-4,n=e.length-2;t[_t]=xe(e.substr(0,s)),t[Bi]=xe(e.substr(s,2)),t[ws]=xe(e.substr(n))});function ZI(e){return(e+"").toLowerCase().charAt(0)==="p"}var XI=/[ap]\.?m?\.?/i,QI=zo("Hours",!0);function JI(e,t,i){return e>11?i?"pm":"PM":i?"am":"AM"}var Hv={calendar:zC,longDateFormat:UC,invalidDate:GC,ordinal:ZC,dayOfMonthOrdinalParse:XC,relativeTime:JC,months:hI,monthsShort:Fv,week:SI,weekdays:EI,weekdaysMin:OI,weekdaysShort:Av,meridiemParse:XI},ot={},Ko={},Lr;function KI(e,t){var i,s=Math.min(e.length,t.length);for(i=0;i<s;i+=1)if(e[i]!==t[i])return i;return s}function Xf(e){return e&&e.toLowerCase().replace("_","-")}function eT(e){for(var t=0,i,s,n,o;t<e.length;){for(o=Xf(e[t]).split("-"),i=o.length,s=Xf(e[t+1]),s=s?s.split("-"):null;i>0;){if(n=hc(o.slice(0,i).join("-")),n)return n;if(s&&s.length>=i&&KI(o,s)>=i-1)break;i--}t++}return Lr}function tT(e){return e.match("^[^/\\\\]*$")!=null}function hc(e){var t=null,i;if(ot[e]===void 0&&typeof Ma<"u"&&Ma&&Ma.exports&&tT(e))try{t=Lr._abbr,i=require,i("./locale/"+e),en(t)}catch{ot[e]=null}return ot[e]}function en(e,t){var i;return e&&(ti(t)?i=Vs(e):i=ih(e,t),i?Lr=i:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),Lr._abbr}function ih(e,t){if(t!==null){var i,s=Hv;if(t.abbr=e,ot[e]!=null)wv("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=ot[e]._config;else if(t.parentLocale!=null)if(ot[t.parentLocale]!=null)s=ot[t.parentLocale]._config;else if(i=hc(t.parentLocale),i!=null)s=i._config;else return Ko[t.parentLocale]||(Ko[t.parentLocale]=[]),Ko[t.parentLocale].push({name:e,config:t}),null;return ot[e]=new qd(Cu(s,t)),Ko[e]&&Ko[e].forEach(function(n){ih(n.name,n.config)}),en(e),ot[e]}else return delete ot[e],null}function iT(e,t){if(t!=null){var i,s,n=Hv;ot[e]!=null&&ot[e].parentLocale!=null?ot[e].set(Cu(ot[e]._config,t)):(s=hc(e),s!=null&&(n=s._config),t=Cu(n,t),s==null&&(t.abbr=e),i=new qd(t),i.parentLocale=ot[e],ot[e]=i),en(e)}else ot[e]!=null&&(ot[e].parentLocale!=null?(ot[e]=ot[e].parentLocale,e===en()&&en(e)):ot[e]!=null&&delete ot[e]);return ot[e]}function Vs(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Lr;if(!Gi(e)){if(t=hc(e),t)return t;e=[e]}return eT(e)}function sT(){return Iu(ot)}function sh(e){var t,i=e._a;return i&&ge(e).overflow===-2&&(t=i[xs]<0||i[xs]>11?xs:i[os]<1||i[os]>dc(i[Ht],i[xs])?os:i[_t]<0||i[_t]>24||i[_t]===24&&(i[Bi]!==0||i[ws]!==0||i[_n]!==0)?_t:i[Bi]<0||i[Bi]>59?Bi:i[ws]<0||i[ws]>59?ws:i[_n]<0||i[_n]>999?_n:-1,ge(e)._overflowDayOfYear&&(t<Ht||t>os)&&(t=os),ge(e)._overflowWeeks&&t===-1&&(t=cI),ge(e)._overflowWeekday&&t===-1&&(t=uI),ge(e).overflow=t),e}var nT=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,oT=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,rT=/Z|[+-]\d\d(?::?\d\d)?/,Ca=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],qc=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],aT=/^\/?Date\((-?\d+)/i,lT=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,cT={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Nv(e){var t,i,s=e._i,n=nT.exec(s)||oT.exec(s),o,r,a,l,c=Ca.length,u=qc.length;if(n){for(ge(e).iso=!0,t=0,i=c;t<i;t++)if(Ca[t][1].exec(n[1])){r=Ca[t][0],o=Ca[t][2]!==!1;break}if(r==null){e._isValid=!1;return}if(n[3]){for(t=0,i=u;t<i;t++)if(qc[t][1].exec(n[3])){a=(n[2]||" ")+qc[t][0];break}if(a==null){e._isValid=!1;return}}if(!o&&a!=null){e._isValid=!1;return}if(n[4])if(rT.exec(n[4]))l="Z";else{e._isValid=!1;return}e._f=r+(a||"")+(l||""),oh(e)}else e._isValid=!1}function uT(e,t,i,s,n,o){var r=[dT(e),Fv.indexOf(t),parseInt(i,10),parseInt(s,10),parseInt(n,10)];return o&&r.push(parseInt(o,10)),r}function dT(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function hT(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function fT(e,t,i){if(e){var s=Av.indexOf(e),n=new Date(t[0],t[1],t[2]).getDay();if(s!==n)return ge(i).weekdayMismatch=!0,i._isValid=!1,!1}return!0}function pT(e,t,i){if(e)return cT[e];if(t)return 0;var s=parseInt(i,10),n=s%100,o=(s-n)/100;return o*60+n}function zv(e){var t=lT.exec(hT(e._i)),i;if(t){if(i=uT(t[4],t[3],t[2],t[5],t[6],t[7]),!fT(t[1],i,e))return;e._a=i,e._tzm=pT(t[8],t[9],t[10]),e._d=Or.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),ge(e).rfc2822=!0}else e._isValid=!1}function gT(e){var t=aT.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(Nv(e),e._isValid===!1)delete e._isValid;else return;if(zv(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:N.createFromInputFallback(e)}N.createFromInputFallback=Pi("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function eo(e,t,i){return e??t??i}function mT(e){var t=new Date(N.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function nh(e){var t,i,s=[],n,o,r;if(!e._d){for(n=mT(e),e._w&&e._a[os]==null&&e._a[xs]==null&&vT(e),e._dayOfYear!=null&&(r=eo(e._a[Ht],n[Ht]),(e._dayOfYear>fr(r)||e._dayOfYear===0)&&(ge(e)._overflowDayOfYear=!0),i=Or(r,0,e._dayOfYear),e._a[xs]=i.getUTCMonth(),e._a[os]=i.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=s[t]=n[t];for(;t<7;t++)e._a[t]=s[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[_t]===24&&e._a[Bi]===0&&e._a[ws]===0&&e._a[_n]===0&&(e._nextDay=!0,e._a[_t]=0),e._d=(e._useUTC?Or:kI).apply(null,s),o=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[_t]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==o&&(ge(e).weekdayMismatch=!0)}}function vT(e){var t,i,s,n,o,r,a,l,c;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(o=1,r=4,i=eo(t.GG,e._a[Ht],Pr(it(),1,4).year),s=eo(t.W,1),n=eo(t.E,1),(n<1||n>7)&&(l=!0)):(o=e._locale._week.dow,r=e._locale._week.doy,c=Pr(it(),o,r),i=eo(t.gg,e._a[Ht],c.year),s=eo(t.w,c.week),t.d!=null?(n=t.d,(n<0||n>6)&&(l=!0)):t.e!=null?(n=t.e+o,(t.e<0||t.e>6)&&(l=!0)):n=o),s<1||s>$s(i,o,r)?ge(e)._overflowWeeks=!0:l!=null?ge(e)._overflowWeekday=!0:(a=Lv(i,s,n,o,r),e._a[Ht]=a.year,e._dayOfYear=a.dayOfYear)}N.ISO_8601=function(){};N.RFC_2822=function(){};function oh(e){if(e._f===N.ISO_8601){Nv(e);return}if(e._f===N.RFC_2822){zv(e);return}e._a=[],ge(e).empty=!0;var t=""+e._i,i,s,n,o,r,a=t.length,l=0,c,u;for(n=$v(e._f,e._locale).match(Zd)||[],u=n.length,i=0;i<u;i++)o=n[i],s=(t.match(rI(o,e))||[])[0],s&&(r=t.substr(0,t.indexOf(s)),r.length>0&&ge(e).unusedInput.push(r),t=t.slice(t.indexOf(s)+s.length),l+=s.length),vo[o]?(s?ge(e).empty=!1:ge(e).unusedTokens.push(o),lI(o,s,e)):e._strict&&!s&&ge(e).unusedTokens.push(o);ge(e).charsLeftOver=a-l,t.length>0&&ge(e).unusedInput.push(t),e._a[_t]<=12&&ge(e).bigHour===!0&&e._a[_t]>0&&(ge(e).bigHour=void 0),ge(e).parsedDateParts=e._a.slice(0),ge(e).meridiem=e._meridiem,e._a[_t]=bT(e._locale,e._a[_t],e._meridiem),c=ge(e).era,c!==null&&(e._a[Ht]=e._locale.erasConvertYear(c,e._a[Ht])),nh(e),sh(e)}function bT(e,t,i){var s;return i==null?t:e.meridiemHour!=null?e.meridiemHour(t,i):(e.isPM!=null&&(s=e.isPM(i),s&&t<12&&(t+=12),!s&&t===12&&(t=0)),t)}function yT(e){var t,i,s,n,o,r,a=!1,l=e._f.length;if(l===0){ge(e).invalidFormat=!0,e._d=new Date(NaN);return}for(n=0;n<l;n++)o=0,r=!1,t=Gd({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[n],oh(t),Wd(t)&&(r=!0),o+=ge(t).charsLeftOver,o+=ge(t).unusedTokens.length*10,ge(t).score=o,a?o<s&&(s=o,i=t):(s==null||o<s||r)&&(s=o,i=t,r&&(a=!0));Zs(e,i||t)}function xT(e){if(!e._d){var t=Xd(e._i),i=t.day===void 0?t.date:t.day;e._a=yv([t.year,t.month,i,t.hour,t.minute,t.second,t.millisecond],function(s){return s&&parseInt(s,10)}),nh(e)}}function wT(e){var t=new Xr(sh(Bv(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function Bv(e){var t=e._i,i=e._f;return e._locale=e._locale||Vs(e._l),t===null||i===void 0&&t===""?nc({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),qi(t)?new Xr(sh(t)):(Zr(t)?e._d=t:Gi(i)?yT(e):i?oh(e):$T(e),Wd(e)||(e._d=null),e))}function $T(e){var t=e._i;ti(t)?e._d=new Date(N.now()):Zr(t)?e._d=new Date(t.valueOf()):typeof t=="string"?gT(e):Gi(t)?(e._a=yv(t.slice(0),function(i){return parseInt(i,10)}),nh(e)):Fn(t)?xT(e):Is(t)?e._d=new Date(t):N.createFromInputFallback(e)}function jv(e,t,i,s,n){var o={};return(t===!0||t===!1)&&(s=t,t=void 0),(i===!0||i===!1)&&(s=i,i=void 0),(Fn(e)&&Ud(e)||Gi(e)&&e.length===0)&&(e=void 0),o._isAMomentObject=!0,o._useUTC=o._isUTC=n,o._l=i,o._i=e,o._f=t,o._strict=s,wT(o)}function it(e,t,i,s){return jv(e,t,i,s,!1)}var kT=Pi("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=it.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:nc()}),_T=Pi("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=it.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:nc()});function Yv(e,t){var i,s;if(t.length===1&&Gi(t[0])&&(t=t[0]),!t.length)return it();for(i=t[0],s=1;s<t.length;++s)(!t[s].isValid()||t[s][e](i))&&(i=t[s]);return i}function ST(){var e=[].slice.call(arguments,0);return Yv("isBefore",e)}function CT(){var e=[].slice.call(arguments,0);return Yv("isAfter",e)}var IT=function(){return Date.now?Date.now():+new Date},er=["year","quarter","month","week","day","hour","minute","second","millisecond"];function TT(e){var t,i=!1,s,n=er.length;for(t in e)if(Le(e,t)&&!(pt.call(er,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(s=0;s<n;++s)if(e[er[s]]){if(i)return!1;parseFloat(e[er[s]])!==xe(e[er[s]])&&(i=!0)}return!0}function FT(){return this._isValid}function DT(){return Ji(NaN)}function fc(e){var t=Xd(e),i=t.year||0,s=t.quarter||0,n=t.month||0,o=t.week||t.isoWeek||0,r=t.day||0,a=t.hour||0,l=t.minute||0,c=t.second||0,u=t.millisecond||0;this._isValid=TT(t),this._milliseconds=+u+c*1e3+l*6e4+a*1e3*60*60,this._days=+r+o*7,this._months=+n+s*3+i*12,this._data={},this._locale=Vs(),this._bubble()}function La(e){return e instanceof fc}function Fu(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function RT(e,t,i){var s=Math.min(e.length,t.length),n=Math.abs(e.length-t.length),o=0,r;for(r=0;r<s;r++)(i&&e[r]!==t[r]||!i&&xe(e[r])!==xe(t[r]))&&o++;return o+n}function Uv(e,t){ie(e,0,0,function(){var i=this.utcOffset(),s="+";return i<0&&(i=-i,s="-"),s+as(~~(i/60),2)+t+as(~~i%60,2)})}Uv("Z",":");Uv("ZZ","");Z("Z",uc);Z("ZZ",uc);Ue(["Z","ZZ"],function(e,t,i){i._useUTC=!0,i._tzm=rh(uc,e)});var ET=/([\+\-]|\d\d)/gi;function rh(e,t){var i=(t||"").match(e),s,n,o;return i===null?null:(s=i[i.length-1]||[],n=(s+"").match(ET)||["-",0,0],o=+(n[1]*60)+xe(n[2]),o===0?0:n[0]==="+"?o:-o)}function ah(e,t){var i,s;return t._isUTC?(i=t.clone(),s=(qi(e)||Zr(e)?e.valueOf():it(e).valueOf())-i.valueOf(),i._d.setTime(i._d.valueOf()+s),N.updateOffset(i,!1),i):it(e).local()}function Du(e){return-Math.round(e._d.getTimezoneOffset())}N.updateOffset=function(){};function OT(e,t,i){var s=this._offset||0,n;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=rh(uc,e),e===null)return this}else Math.abs(e)<16&&!i&&(e=e*60);return!this._isUTC&&t&&(n=Du(this)),this._offset=e,this._isUTC=!0,n!=null&&this.add(n,"m"),s!==e&&(!t||this._changeInProgress?qv(this,Ji(e-s,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,N.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?s:Du(this)}function PT(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function LT(e){return this.utcOffset(0,e)}function AT(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Du(this),"m")),this}function MT(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=rh(nI,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function VT(e){return this.isValid()?(e=e?it(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function HT(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function NT(){if(!ti(this._isDSTShifted))return this._isDSTShifted;var e={},t;return Gd(e,this),e=Bv(e),e._a?(t=e._isUTC?ds(e._a):it(e._a),this._isDSTShifted=this.isValid()&&RT(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function zT(){return this.isValid()?!this._isUTC:!1}function BT(){return this.isValid()?this._isUTC:!1}function Wv(){return this.isValid()?this._isUTC&&this._offset===0:!1}var jT=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,YT=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Ji(e,t){var i=e,s=null,n,o,r;return La(e)?i={ms:e._milliseconds,d:e._days,M:e._months}:Is(e)||!isNaN(+e)?(i={},t?i[t]=+e:i.milliseconds=+e):(s=jT.exec(e))?(n=s[1]==="-"?-1:1,i={y:0,d:xe(s[os])*n,h:xe(s[_t])*n,m:xe(s[Bi])*n,s:xe(s[ws])*n,ms:xe(Fu(s[_n]*1e3))*n}):(s=YT.exec(e))?(n=s[1]==="-"?-1:1,i={y:yn(s[2],n),M:yn(s[3],n),w:yn(s[4],n),d:yn(s[5],n),h:yn(s[6],n),m:yn(s[7],n),s:yn(s[8],n)}):i==null?i={}:typeof i=="object"&&("from"in i||"to"in i)&&(r=UT(it(i.from),it(i.to)),i={},i.ms=r.milliseconds,i.M=r.months),o=new fc(i),La(e)&&Le(e,"_locale")&&(o._locale=e._locale),La(e)&&Le(e,"_isValid")&&(o._isValid=e._isValid),o}Ji.fn=fc.prototype;Ji.invalid=DT;function yn(e,t){var i=e&&parseFloat(e.replace(",","."));return(isNaN(i)?0:i)*t}function Qf(e,t){var i={};return i.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(i.months,"M").isAfter(t)&&--i.months,i.milliseconds=+t-+e.clone().add(i.months,"M"),i}function UT(e,t){var i;return e.isValid()&&t.isValid()?(t=ah(t,e),e.isBefore(t)?i=Qf(e,t):(i=Qf(t,e),i.milliseconds=-i.milliseconds,i.months=-i.months),i):{milliseconds:0,months:0}}function Gv(e,t){return function(i,s){var n,o;return s!==null&&!isNaN(+s)&&(wv(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),o=i,i=s,s=o),n=Ji(i,s),qv(this,n,e),this}}function qv(e,t,i,s){var n=t._milliseconds,o=Fu(t._days),r=Fu(t._months);e.isValid()&&(s=s??!0,r&&Rv(e,Ka(e,"Month")+r*i),o&&_v(e,"Date",Ka(e,"Date")+o*i),n&&e._d.setTime(e._d.valueOf()+n*i),s&&N.updateOffset(e,o||r))}var WT=Gv(1,"add"),GT=Gv(-1,"subtract");function Zv(e){return typeof e=="string"||e instanceof String}function qT(e){return qi(e)||Zr(e)||Zv(e)||Is(e)||XT(e)||ZT(e)||e===null||e===void 0}function ZT(e){var t=Fn(e)&&!Ud(e),i=!1,s=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],n,o,r=s.length;for(n=0;n<r;n+=1)o=s[n],i=i||Le(e,o);return t&&i}function XT(e){var t=Gi(e),i=!1;return t&&(i=e.filter(function(s){return!Is(s)&&Zv(e)}).length===0),t&&i}function QT(e){var t=Fn(e)&&!Ud(e),i=!1,s=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],n,o;for(n=0;n<s.length;n+=1)o=s[n],i=i||Le(e,o);return t&&i}function JT(e,t){var i=e.diff(t,"days",!0);return i<-6?"sameElse":i<-1?"lastWeek":i<0?"lastDay":i<1?"sameDay":i<2?"nextDay":i<7?"nextWeek":"sameElse"}function KT(e,t){arguments.length===1&&(arguments[0]?qT(arguments[0])?(e=arguments[0],t=void 0):QT(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var i=e||it(),s=ah(i,this).startOf("day"),n=N.calendarFormat(this,s)||"sameElse",o=t&&(hs(t[n])?t[n].call(this,i):t[n]);return this.format(o||this.localeData().calendar(n,this,it(i)))}function eF(){return new Xr(this)}function tF(e,t){var i=qi(e)?e:it(e);return this.isValid()&&i.isValid()?(t=Li(t)||"millisecond",t==="millisecond"?this.valueOf()>i.valueOf():i.valueOf()<this.clone().startOf(t).valueOf()):!1}function iF(e,t){var i=qi(e)?e:it(e);return this.isValid()&&i.isValid()?(t=Li(t)||"millisecond",t==="millisecond"?this.valueOf()<i.valueOf():this.clone().endOf(t).valueOf()<i.valueOf()):!1}function sF(e,t,i,s){var n=qi(e)?e:it(e),o=qi(t)?t:it(t);return this.isValid()&&n.isValid()&&o.isValid()?(s=s||"()",(s[0]==="("?this.isAfter(n,i):!this.isBefore(n,i))&&(s[1]===")"?this.isBefore(o,i):!this.isAfter(o,i))):!1}function nF(e,t){var i=qi(e)?e:it(e),s;return this.isValid()&&i.isValid()?(t=Li(t)||"millisecond",t==="millisecond"?this.valueOf()===i.valueOf():(s=i.valueOf(),this.clone().startOf(t).valueOf()<=s&&s<=this.clone().endOf(t).valueOf())):!1}function oF(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function rF(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function aF(e,t,i){var s,n,o;if(!this.isValid())return NaN;if(s=ah(e,this),!s.isValid())return NaN;switch(n=(s.utcOffset()-this.utcOffset())*6e4,t=Li(t),t){case"year":o=Aa(this,s)/12;break;case"month":o=Aa(this,s);break;case"quarter":o=Aa(this,s)/3;break;case"second":o=(this-s)/1e3;break;case"minute":o=(this-s)/6e4;break;case"hour":o=(this-s)/36e5;break;case"day":o=(this-s-n)/864e5;break;case"week":o=(this-s-n)/6048e5;break;default:o=this-s}return i?o:Si(o)}function Aa(e,t){if(e.date()<t.date())return-Aa(t,e);var i=(t.year()-e.year())*12+(t.month()-e.month()),s=e.clone().add(i,"months"),n,o;return t-s<0?(n=e.clone().add(i-1,"months"),o=(t-s)/(s-n)):(n=e.clone().add(i+1,"months"),o=(t-s)/(n-s)),-(i+o)||0}N.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";N.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function lF(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function cF(e){if(!this.isValid())return null;var t=e!==!0,i=t?this.clone().utc():this;return i.year()<0||i.year()>9999?Pa(i,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):hs(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Pa(i,"Z")):Pa(i,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function uF(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",i,s,n,o;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),i="["+e+'("]',s=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",n="-MM-DD[T]HH:mm:ss.SSS",o=t+'[")]',this.format(i+s+n+o)}function dF(e){e||(e=this.isUtc()?N.defaultFormatUtc:N.defaultFormat);var t=Pa(this,e);return this.localeData().postformat(t)}function hF(e,t){return this.isValid()&&(qi(e)&&e.isValid()||it(e).isValid())?Ji({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function fF(e){return this.from(it(),e)}function pF(e,t){return this.isValid()&&(qi(e)&&e.isValid()||it(e).isValid())?Ji({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function gF(e){return this.to(it(),e)}function Xv(e){var t;return e===void 0?this._locale._abbr:(t=Vs(e),t!=null&&(this._locale=t),this)}var Qv=Pi("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function Jv(){return this._locale}var il=1e3,bo=60*il,sl=60*bo,Kv=(365*400+97)*24*sl;function yo(e,t){return(e%t+t)%t}function eb(e,t,i){return e<100&&e>=0?new Date(e+400,t,i)-Kv:new Date(e,t,i).valueOf()}function tb(e,t,i){return e<100&&e>=0?Date.UTC(e+400,t,i)-Kv:Date.UTC(e,t,i)}function mF(e){var t,i;if(e=Li(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(i=this._isUTC?tb:eb,e){case"year":t=i(this.year(),0,1);break;case"quarter":t=i(this.year(),this.month()-this.month()%3,1);break;case"month":t=i(this.year(),this.month(),1);break;case"week":t=i(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=i(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=i(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=yo(t+(this._isUTC?0:this.utcOffset()*bo),sl);break;case"minute":t=this._d.valueOf(),t-=yo(t,bo);break;case"second":t=this._d.valueOf(),t-=yo(t,il);break}return this._d.setTime(t),N.updateOffset(this,!0),this}function vF(e){var t,i;if(e=Li(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(i=this._isUTC?tb:eb,e){case"year":t=i(this.year()+1,0,1)-1;break;case"quarter":t=i(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=i(this.year(),this.month()+1,1)-1;break;case"week":t=i(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=i(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=i(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=sl-yo(t+(this._isUTC?0:this.utcOffset()*bo),sl)-1;break;case"minute":t=this._d.valueOf(),t+=bo-yo(t,bo)-1;break;case"second":t=this._d.valueOf(),t+=il-yo(t,il)-1;break}return this._d.setTime(t),N.updateOffset(this,!0),this}function bF(){return this._d.valueOf()-(this._offset||0)*6e4}function yF(){return Math.floor(this.valueOf()/1e3)}function xF(){return new Date(this.valueOf())}function wF(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function $F(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function kF(){return this.isValid()?this.toISOString():null}function _F(){return Wd(this)}function SF(){return Zs({},ge(this))}function CF(){return ge(this).overflow}function IF(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}ie("N",0,0,"eraAbbr");ie("NN",0,0,"eraAbbr");ie("NNN",0,0,"eraAbbr");ie("NNNN",0,0,"eraName");ie("NNNNN",0,0,"eraNarrow");ie("y",["y",1],"yo","eraYear");ie("y",["yy",2],0,"eraYear");ie("y",["yyy",3],0,"eraYear");ie("y",["yyyy",4],0,"eraYear");Z("N",lh);Z("NN",lh);Z("NNN",lh);Z("NNNN",VF);Z("NNNNN",HF);Ue(["N","NN","NNN","NNNN","NNNNN"],function(e,t,i,s){var n=i._locale.erasParse(e,s,i._strict);n?ge(i).era=n:ge(i).invalidEra=e});Z("y",Bo);Z("yy",Bo);Z("yyy",Bo);Z("yyyy",Bo);Z("yo",NF);Ue(["y","yy","yyy","yyyy"],Ht);Ue(["yo"],function(e,t,i,s){var n;i._locale._eraYearOrdinalRegex&&(n=e.match(i._locale._eraYearOrdinalRegex)),i._locale.eraYearOrdinalParse?t[Ht]=i._locale.eraYearOrdinalParse(e,n):t[Ht]=parseInt(e,10)});function TF(e,t){var i,s,n,o=this._eras||Vs("en")._eras;for(i=0,s=o.length;i<s;++i){switch(typeof o[i].since){case"string":n=N(o[i].since).startOf("day"),o[i].since=n.valueOf();break}switch(typeof o[i].until){case"undefined":o[i].until=1/0;break;case"string":n=N(o[i].until).startOf("day").valueOf(),o[i].until=n.valueOf();break}}return o}function FF(e,t,i){var s,n,o=this.eras(),r,a,l;for(e=e.toUpperCase(),s=0,n=o.length;s<n;++s)if(r=o[s].name.toUpperCase(),a=o[s].abbr.toUpperCase(),l=o[s].narrow.toUpperCase(),i)switch(t){case"N":case"NN":case"NNN":if(a===e)return o[s];break;case"NNNN":if(r===e)return o[s];break;case"NNNNN":if(l===e)return o[s];break}else if([r,a,l].indexOf(e)>=0)return o[s]}function DF(e,t){var i=e.since<=e.until?1:-1;return t===void 0?N(e.since).year():N(e.since).year()+(t-e.offset)*i}function RF(){var e,t,i,s=this.localeData().eras();for(e=0,t=s.length;e<t;++e)if(i=this.clone().startOf("day").valueOf(),s[e].since<=i&&i<=s[e].until||s[e].until<=i&&i<=s[e].since)return s[e].name;return""}function EF(){var e,t,i,s=this.localeData().eras();for(e=0,t=s.length;e<t;++e)if(i=this.clone().startOf("day").valueOf(),s[e].since<=i&&i<=s[e].until||s[e].until<=i&&i<=s[e].since)return s[e].narrow;return""}function OF(){var e,t,i,s=this.localeData().eras();for(e=0,t=s.length;e<t;++e)if(i=this.clone().startOf("day").valueOf(),s[e].since<=i&&i<=s[e].until||s[e].until<=i&&i<=s[e].since)return s[e].abbr;return""}function PF(){var e,t,i,s,n=this.localeData().eras();for(e=0,t=n.length;e<t;++e)if(i=n[e].since<=n[e].until?1:-1,s=this.clone().startOf("day").valueOf(),n[e].since<=s&&s<=n[e].until||n[e].until<=s&&s<=n[e].since)return(this.year()-N(n[e].since).year())*i+n[e].offset;return this.year()}function LF(e){return Le(this,"_erasNameRegex")||ch.call(this),e?this._erasNameRegex:this._erasRegex}function AF(e){return Le(this,"_erasAbbrRegex")||ch.call(this),e?this._erasAbbrRegex:this._erasRegex}function MF(e){return Le(this,"_erasNarrowRegex")||ch.call(this),e?this._erasNarrowRegex:this._erasRegex}function lh(e,t){return t.erasAbbrRegex(e)}function VF(e,t){return t.erasNameRegex(e)}function HF(e,t){return t.erasNarrowRegex(e)}function NF(e,t){return t._eraYearOrdinalRegex||Bo}function ch(){var e=[],t=[],i=[],s=[],n,o,r=this.eras();for(n=0,o=r.length;n<o;++n)t.push(ui(r[n].name)),e.push(ui(r[n].abbr)),i.push(ui(r[n].narrow)),s.push(ui(r[n].name)),s.push(ui(r[n].abbr)),s.push(ui(r[n].narrow));this._erasRegex=new RegExp("^("+s.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+i.join("|")+")","i")}ie(0,["gg",2],0,function(){return this.weekYear()%100});ie(0,["GG",2],0,function(){return this.isoWeekYear()%100});function pc(e,t){ie(0,[e,e.length],0,t)}pc("gggg","weekYear");pc("ggggg","weekYear");pc("GGGG","isoWeekYear");pc("GGGGG","isoWeekYear");Bt("weekYear","gg");Bt("isoWeekYear","GG");jt("weekYear",1);jt("isoWeekYear",1);Z("G",cc);Z("g",cc);Z("GG",nt,xi);Z("gg",nt,xi);Z("GGGG",Jd,Qd);Z("gggg",Jd,Qd);Z("GGGGG",lc,rc);Z("ggggg",lc,rc);Jr(["gggg","ggggg","GGGG","GGGGG"],function(e,t,i,s){t[s.substr(0,2)]=xe(e)});Jr(["gg","GG"],function(e,t,i,s){t[s]=N.parseTwoDigitYear(e)});function zF(e){return ib.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function BF(e){return ib.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function jF(){return $s(this.year(),1,4)}function YF(){return $s(this.isoWeekYear(),1,4)}function UF(){var e=this.localeData()._week;return $s(this.year(),e.dow,e.doy)}function WF(){var e=this.localeData()._week;return $s(this.weekYear(),e.dow,e.doy)}function ib(e,t,i,s,n){var o;return e==null?Pr(this,s,n).year:(o=$s(e,s,n),t>o&&(t=o),GF.call(this,e,t,i,s,n))}function GF(e,t,i,s,n){var o=Lv(e,t,i,s,n),r=Or(o.year,0,o.dayOfYear);return this.year(r.getUTCFullYear()),this.month(r.getUTCMonth()),this.date(r.getUTCDate()),this}ie("Q",0,"Qo","quarter");Bt("quarter","Q");jt("quarter",7);Z("Q",Sv);Ue("Q",function(e,t){t[xs]=(xe(e)-1)*3});function qF(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}ie("D",["DD",2],"Do","date");Bt("date","D");jt("date",9);Z("D",nt);Z("DD",nt,xi);Z("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient});Ue(["D","DD"],os);Ue("Do",function(e,t){t[os]=xe(e.match(nt)[0])});var sb=zo("Date",!0);ie("DDD",["DDDD",3],"DDDo","dayOfYear");Bt("dayOfYear","DDD");jt("dayOfYear",4);Z("DDD",ac);Z("DDDD",Cv);Ue(["DDD","DDDD"],function(e,t,i){i._dayOfYear=xe(e)});function ZF(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}ie("m",["mm",2],0,"minute");Bt("minute","m");jt("minute",14);Z("m",nt);Z("mm",nt,xi);Ue(["m","mm"],Bi);var XF=zo("Minutes",!1);ie("s",["ss",2],0,"second");Bt("second","s");jt("second",15);Z("s",nt);Z("ss",nt,xi);Ue(["s","ss"],ws);var QF=zo("Seconds",!1);ie("S",0,0,function(){return~~(this.millisecond()/100)});ie(0,["SS",2],0,function(){return~~(this.millisecond()/10)});ie(0,["SSS",3],0,"millisecond");ie(0,["SSSS",4],0,function(){return this.millisecond()*10});ie(0,["SSSSS",5],0,function(){return this.millisecond()*100});ie(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});ie(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});ie(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});ie(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});Bt("millisecond","ms");jt("millisecond",16);Z("S",ac,Sv);Z("SS",ac,xi);Z("SSS",ac,Cv);var Xs,nb;for(Xs="SSSS";Xs.length<=9;Xs+="S")Z(Xs,Bo);function JF(e,t){t[_n]=xe(("0."+e)*1e3)}for(Xs="S";Xs.length<=9;Xs+="S")Ue(Xs,JF);nb=zo("Milliseconds",!1);ie("z",0,0,"zoneAbbr");ie("zz",0,0,"zoneName");function KF(){return this._isUTC?"UTC":""}function eD(){return this._isUTC?"Coordinated Universal Time":""}var O=Xr.prototype;O.add=WT;O.calendar=KT;O.clone=eF;O.diff=aF;O.endOf=vF;O.format=dF;O.from=hF;O.fromNow=fF;O.to=pF;O.toNow=gF;O.get=iI;O.invalidAt=CF;O.isAfter=tF;O.isBefore=iF;O.isBetween=sF;O.isSame=nF;O.isSameOrAfter=oF;O.isSameOrBefore=rF;O.isValid=_F;O.lang=Qv;O.locale=Xv;O.localeData=Jv;O.max=_T;O.min=kT;O.parsingFlags=SF;O.set=sI;O.startOf=mF;O.subtract=GT;O.toArray=wF;O.toObject=$F;O.toDate=xF;O.toISOString=cF;O.inspect=uF;typeof Symbol<"u"&&Symbol.for!=null&&(O[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});O.toJSON=kF;O.toString=lF;O.unix=yF;O.valueOf=bF;O.creationData=IF;O.eraName=RF;O.eraNarrow=EF;O.eraAbbr=OF;O.eraYear=PF;O.year=Pv;O.isLeapYear=$I;O.weekYear=zF;O.isoWeekYear=BF;O.quarter=O.quarters=qF;O.month=Ev;O.daysInMonth=yI;O.week=O.weeks=TI;O.isoWeek=O.isoWeeks=FI;O.weeksInYear=UF;O.weeksInWeekYear=WF;O.isoWeeksInYear=jF;O.isoWeeksInISOWeekYear=YF;O.date=sb;O.day=O.days=BI;O.weekday=jI;O.isoWeekday=YI;O.dayOfYear=ZF;O.hour=O.hours=QI;O.minute=O.minutes=XF;O.second=O.seconds=QF;O.millisecond=O.milliseconds=nb;O.utcOffset=OT;O.utc=LT;O.local=AT;O.parseZone=MT;O.hasAlignedHourOffset=VT;O.isDST=HT;O.isLocal=zT;O.isUtcOffset=BT;O.isUtc=Wv;O.isUTC=Wv;O.zoneAbbr=KF;O.zoneName=eD;O.dates=Pi("dates accessor is deprecated. Use date instead.",sb);O.months=Pi("months accessor is deprecated. Use month instead",Ev);O.years=Pi("years accessor is deprecated. Use year instead",Pv);O.zone=Pi("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",PT);O.isDSTShifted=Pi("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",NT);function tD(e){return it(e*1e3)}function iD(){return it.apply(null,arguments).parseZone()}function ob(e){return e}var Ae=qd.prototype;Ae.calendar=BC;Ae.longDateFormat=WC;Ae.invalidDate=qC;Ae.ordinal=QC;Ae.preparse=ob;Ae.postformat=ob;Ae.relativeTime=KC;Ae.pastFuture=eI;Ae.set=NC;Ae.eras=TF;Ae.erasParse=FF;Ae.erasConvertYear=DF;Ae.erasAbbrRegex=AF;Ae.erasNameRegex=LF;Ae.erasNarrowRegex=MF;Ae.months=gI;Ae.monthsShort=mI;Ae.monthsParse=bI;Ae.monthsRegex=wI;Ae.monthsShortRegex=xI;Ae.week=_I;Ae.firstDayOfYear=II;Ae.firstDayOfWeek=CI;Ae.weekdays=MI;Ae.weekdaysMin=HI;Ae.weekdaysShort=VI;Ae.weekdaysParse=zI;Ae.weekdaysRegex=UI;Ae.weekdaysShortRegex=WI;Ae.weekdaysMinRegex=GI;Ae.isPM=ZI;Ae.meridiem=JI;function nl(e,t,i,s){var n=Vs(),o=ds().set(s,t);return n[i](o,e)}function rb(e,t,i){if(Is(e)&&(t=e,e=void 0),e=e||"",t!=null)return nl(e,t,i,"month");var s,n=[];for(s=0;s<12;s++)n[s]=nl(e,s,i,"month");return n}function uh(e,t,i,s){typeof e=="boolean"?(Is(t)&&(i=t,t=void 0),t=t||""):(t=e,i=t,e=!1,Is(t)&&(i=t,t=void 0),t=t||"");var n=Vs(),o=e?n._week.dow:0,r,a=[];if(i!=null)return nl(t,(i+o)%7,s,"day");for(r=0;r<7;r++)a[r]=nl(t,(r+o)%7,s,"day");return a}function sD(e,t){return rb(e,t,"months")}function nD(e,t){return rb(e,t,"monthsShort")}function oD(e,t,i){return uh(e,t,i,"weekdays")}function rD(e,t,i){return uh(e,t,i,"weekdaysShort")}function aD(e,t,i){return uh(e,t,i,"weekdaysMin")}en("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,i=xe(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+i}});N.lang=Pi("moment.lang is deprecated. Use moment.locale instead.",en);N.langData=Pi("moment.langData is deprecated. Use moment.localeData instead.",Vs);var ps=Math.abs;function lD(){var e=this._data;return this._milliseconds=ps(this._milliseconds),this._days=ps(this._days),this._months=ps(this._months),e.milliseconds=ps(e.milliseconds),e.seconds=ps(e.seconds),e.minutes=ps(e.minutes),e.hours=ps(e.hours),e.months=ps(e.months),e.years=ps(e.years),this}function ab(e,t,i,s){var n=Ji(t,i);return e._milliseconds+=s*n._milliseconds,e._days+=s*n._days,e._months+=s*n._months,e._bubble()}function cD(e,t){return ab(this,e,t,1)}function uD(e,t){return ab(this,e,t,-1)}function Jf(e){return e<0?Math.floor(e):Math.ceil(e)}function dD(){var e=this._milliseconds,t=this._days,i=this._months,s=this._data,n,o,r,a,l;return e>=0&&t>=0&&i>=0||e<=0&&t<=0&&i<=0||(e+=Jf(Ru(i)+t)*864e5,t=0,i=0),s.milliseconds=e%1e3,n=Si(e/1e3),s.seconds=n%60,o=Si(n/60),s.minutes=o%60,r=Si(o/60),s.hours=r%24,t+=Si(r/24),l=Si(lb(t)),i+=l,t-=Jf(Ru(l)),a=Si(i/12),i%=12,s.days=t,s.months=i,s.years=a,this}function lb(e){return e*4800/146097}function Ru(e){return e*146097/4800}function hD(e){if(!this.isValid())return NaN;var t,i,s=this._milliseconds;if(e=Li(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+s/864e5,i=this._months+lb(t),e){case"month":return i;case"quarter":return i/3;case"year":return i/12}else switch(t=this._days+Math.round(Ru(this._months)),e){case"week":return t/7+s/6048e5;case"day":return t+s/864e5;case"hour":return t*24+s/36e5;case"minute":return t*1440+s/6e4;case"second":return t*86400+s/1e3;case"millisecond":return Math.floor(t*864e5)+s;default:throw new Error("Unknown unit "+e)}}function fD(){return this.isValid()?this._milliseconds+this._days*864e5+this._months%12*2592e6+xe(this._months/12)*31536e6:NaN}function Hs(e){return function(){return this.as(e)}}var pD=Hs("ms"),gD=Hs("s"),mD=Hs("m"),vD=Hs("h"),bD=Hs("d"),yD=Hs("w"),xD=Hs("M"),wD=Hs("Q"),$D=Hs("y");function kD(){return Ji(this)}function _D(e){return e=Li(e),this.isValid()?this[e+"s"]():NaN}function Un(e){return function(){return this.isValid()?this._data[e]:NaN}}var SD=Un("milliseconds"),CD=Un("seconds"),ID=Un("minutes"),TD=Un("hours"),FD=Un("days"),DD=Un("months"),RD=Un("years");function ED(){return Si(this.days()/7)}var vs=Math.round,oo={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function OD(e,t,i,s,n){return n.relativeTime(t||1,!!i,e,s)}function PD(e,t,i,s){var n=Ji(e).abs(),o=vs(n.as("s")),r=vs(n.as("m")),a=vs(n.as("h")),l=vs(n.as("d")),c=vs(n.as("M")),u=vs(n.as("w")),d=vs(n.as("y")),p=o<=i.ss&&["s",o]||o<i.s&&["ss",o]||r<=1&&["m"]||r<i.m&&["mm",r]||a<=1&&["h"]||a<i.h&&["hh",a]||l<=1&&["d"]||l<i.d&&["dd",l];return i.w!=null&&(p=p||u<=1&&["w"]||u<i.w&&["ww",u]),p=p||c<=1&&["M"]||c<i.M&&["MM",c]||d<=1&&["y"]||["yy",d],p[2]=t,p[3]=+e>0,p[4]=s,OD.apply(null,p)}function LD(e){return e===void 0?vs:typeof e=="function"?(vs=e,!0):!1}function AD(e,t){return oo[e]===void 0?!1:t===void 0?oo[e]:(oo[e]=t,e==="s"&&(oo.ss=t-1),!0)}function MD(e,t){if(!this.isValid())return this.localeData().invalidDate();var i=!1,s=oo,n,o;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(i=e),typeof t=="object"&&(s=Object.assign({},oo,t),t.s!=null&&t.ss==null&&(s.ss=t.s-1)),n=this.localeData(),o=PD(this,!i,s,n),i&&(o=n.pastFuture(+this,o)),n.postformat(o)}var Zc=Math.abs;function Qn(e){return(e>0)-(e<0)||+e}function gc(){if(!this.isValid())return this.localeData().invalidDate();var e=Zc(this._milliseconds)/1e3,t=Zc(this._days),i=Zc(this._months),s,n,o,r,a=this.asSeconds(),l,c,u,d;return a?(s=Si(e/60),n=Si(s/60),e%=60,s%=60,o=Si(i/12),i%=12,r=e?e.toFixed(3).replace(/\.?0+$/,""):"",l=a<0?"-":"",c=Qn(this._months)!==Qn(a)?"-":"",u=Qn(this._days)!==Qn(a)?"-":"",d=Qn(this._milliseconds)!==Qn(a)?"-":"",l+"P"+(o?c+o+"Y":"")+(i?c+i+"M":"")+(t?u+t+"D":"")+(n||s||e?"T":"")+(n?d+n+"H":"")+(s?d+s+"M":"")+(e?d+r+"S":"")):"P0D"}var Te=fc.prototype;Te.isValid=FT;Te.abs=lD;Te.add=cD;Te.subtract=uD;Te.as=hD;Te.asMilliseconds=pD;Te.asSeconds=gD;Te.asMinutes=mD;Te.asHours=vD;Te.asDays=bD;Te.asWeeks=yD;Te.asMonths=xD;Te.asQuarters=wD;Te.asYears=$D;Te.valueOf=fD;Te._bubble=dD;Te.clone=kD;Te.get=_D;Te.milliseconds=SD;Te.seconds=CD;Te.minutes=ID;Te.hours=TD;Te.days=FD;Te.weeks=ED;Te.months=DD;Te.years=RD;Te.humanize=MD;Te.toISOString=gc;Te.toString=gc;Te.toJSON=gc;Te.locale=Xv;Te.localeData=Jv;Te.toIsoString=Pi("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",gc);Te.lang=Qv;ie("X",0,0,"unix");ie("x",0,0,"valueOf");Z("x",cc);Z("X",oI);Ue("X",function(e,t,i){i._d=new Date(parseFloat(e)*1e3)});Ue("x",function(e,t,i){i._d=new Date(xe(e))});//! moment.js
N.version="2.29.4";VC(it);N.fn=O;N.min=ST;N.max=CT;N.now=IT;N.utc=ds;N.unix=tD;N.months=sD;N.isDate=Zr;N.locale=en;N.invalid=nc;N.duration=Ji;N.isMoment=qi;N.weekdays=oD;N.parseZone=iD;N.localeData=Vs;N.isDuration=La;N.monthsShort=nD;N.weekdaysMin=aD;N.defineLocale=ih;N.updateLocale=iT;N.locales=sT;N.weekdaysShort=rD;N.normalizeUnits=Li;N.relativeTimeRounding=LD;N.relativeTimeThreshold=AD;N.calendarFormat=JT;N.prototype=O;N.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};const Kf=Ce({__name:"Time",props:{format:{}},setup(e){const t=e,i=at(N().format(t.format)),s=()=>{i.value=N().format(t.format)};var n=void 0;return fi(()=>{n=setInterval(s,1e3)}),Qi(()=>{clearInterval(n)}),(o,r)=>Ot(i.value)}}),VD={class:"text-center mt-16 text-white"},HD=Ce({__name:"ScreenSaver",props:{setIsTyped:{type:Function}},setup(e){const t=e,i=at(!1),s=async()=>new Promise(()=>setTimeout(()=>{t.setIsTyped(!0)},300)),n=async()=>{i.value=!0,await s()},o=Yn({start:0,end:0,cur:0,curMax:0,active:!1}),r=u=>{o.active=!0,o.start=u.screenY},a=u=>{o.active=!1,o.end=u.screenY,o.cur=0},l=u=>{o.active&&(o.start>u.screenY?o.cur=o.start-u.screenY:(o.curMax=u.screenY,o.cur=0,o.start=o.curMax))},c=async u=>{a(u),o.start-o.end>=u.view.innerHeight/3&&(i.value=!0,await s())};return fi(()=>{window.addEventListener("mousedown",r),window.addEventListener("mousemove",l),window.addEventListener("mouseup",c),window.addEventListener("keypress",n)}),Qi(()=>{window.removeEventListener("dragstart",r),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",c),window.removeEventListener("keypress",n)}),(u,d)=>{const p=ve("DisplayLarge"),b=ve("TitleLarge");return G(),ae("div",{graggable:"true",class:ii([[i.value?"-translate-y-[10%] opacity-0 transition-all":"",o.active?"":"transition-all"],"relative left-0 full-screen grid justify-center select-none"]),style:Pn({top:-o.cur/8+"px"})},[W("div",VD,[E(p,null,{default:H(()=>[E(Kf,{format:"HH:mm"})]),_:1}),E(b,null,{default:H(()=>[E(Kf,{format:"MM-DD-YYYY"})]),_:1})])],6)}}});var ND=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let cb;const mc=e=>cb=e,ub=Symbol();function Eu(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var pr;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(pr||(pr={}));function zD(){const e=Im(!0),t=e.run(()=>at({}));let i=[],s=[];const n=Gl({install(o){mc(n),n._a=o,o.provide(ub,n),o.config.globalProperties.$pinia=n,s.forEach(r=>i.push(r)),s=[]},use(o){return!this._a&&!ND?s.push(o):i.push(o),this},_p:i,_a:null,_e:e,_s:new Map,state:t});return n}const db=()=>{};function ep(e,t,i,s=db){e.push(t);const n=()=>{const o=e.indexOf(t);o>-1&&(e.splice(o,1),s())};return!i&&Tm()&&F_(n),n}function Jn(e,...t){e.slice().forEach(i=>{i(...t)})}const BD=e=>e();function Ou(e,t){e instanceof Map&&t instanceof Map&&t.forEach((i,s)=>e.set(s,i)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const i in t){if(!t.hasOwnProperty(i))continue;const s=t[i],n=e[i];Eu(n)&&Eu(s)&&e.hasOwnProperty(i)&&!vt(s)&&!Js(s)?e[i]=Ou(n,s):e[i]=s}return e}const jD=Symbol();function YD(e){return!Eu(e)||!e.hasOwnProperty(jD)}const{assign:Us}=Object;function UD(e){return!!(vt(e)&&e.effect)}function WD(e,t,i,s){const{state:n,actions:o,getters:r}=t,a=i.state.value[e];let l;function c(){a||(i.state.value[e]=n?n():{});const u=rS(i.state.value[e]);return Us(u,o,Object.keys(r||{}).reduce((d,p)=>(d[p]=Gl(Ze(()=>{mc(i);const b=i._s.get(e);return r[p].call(b,b)})),d),{}))}return l=hb(e,c,t,i,s,!0),l}function hb(e,t,i={},s,n,o){let r;const a=Us({actions:{}},i),l={deep:!0};let c,u,d=[],p=[],b;const $=s.state.value[e];!o&&!$&&(s.state.value[e]={}),at({});let x;function k(_e){let Ie;c=u=!1,typeof _e=="function"?(_e(s.state.value[e]),Ie={type:pr.patchFunction,storeId:e,events:b}):(Ou(s.state.value[e],_e),Ie={type:pr.patchObject,payload:_e,storeId:e,events:b});const ft=x=Symbol();Md().then(()=>{x===ft&&(c=!0)}),u=!0,Jn(d,Ie,s.state.value[e])}const F=o?function(){const{state:Ie}=i,ft=Ie?Ie():{};this.$patch(Lt=>{Us(Lt,ft)})}:db;function M(){r.stop(),d=[],p=[],s._s.delete(e)}function se(_e,Ie){return function(){mc(s);const ft=Array.from(arguments),Lt=[],ai=[];function wi(Me){Lt.push(Me)}function fn(Me){ai.push(Me)}Jn(p,{args:ft,name:_e,store:pe,after:wi,onError:fn});let $i;try{$i=Ie.apply(this&&this.$id===e?this:pe,ft)}catch(Me){throw Jn(ai,Me),Me}return $i instanceof Promise?$i.then(Me=>(Jn(Lt,Me),Me)).catch(Me=>(Jn(ai,Me),Promise.reject(Me))):(Jn(Lt,$i),$i)}}const j={_p:s,$id:e,$onAction:ep.bind(null,p),$patch:k,$reset:F,$subscribe(_e,Ie={}){const ft=ep(d,_e,Ie.detached,()=>Lt()),Lt=r.run(()=>go(()=>s.state.value[e],ai=>{(Ie.flush==="sync"?u:c)&&_e({storeId:e,type:pr.direct,events:b},ai)},Us({},l,Ie)));return ft},$dispose:M},pe=Yn(j);s._s.set(e,pe);const Fe=s._a&&s._a.runWithContext||BD,ct=s._e.run(()=>(r=Im(),Fe(()=>r.run(t))));for(const _e in ct){const Ie=ct[_e];if(vt(Ie)&&!UD(Ie)||Js(Ie))o||($&&YD(Ie)&&(vt(Ie)?Ie.value=$[_e]:Ou(Ie,$[_e])),s.state.value[e][_e]=Ie);else if(typeof Ie=="function"){const ft=se(_e,Ie);ct[_e]=ft,a.actions[_e]=Ie}}return Us(pe,ct),Us(Oe(pe),ct),Object.defineProperty(pe,"$state",{get:()=>s.state.value[e],set:_e=>{k(Ie=>{Us(Ie,_e)})}}),s._p.forEach(_e=>{Us(pe,r.run(()=>_e({store:pe,app:s._a,pinia:s,options:a})))}),$&&o&&i.hydrate&&i.hydrate(pe.$state,$),c=!0,u=!0,pe}function dh(e,t,i){let s,n;const o=typeof t=="function";typeof e=="string"?(s=e,n=o?i:t):(n=e,s=e.id);function r(a,l){const c=YS();return a=a||(c?hi(ub,null):null),a&&mc(a),a=cb,a._s.has(s)||(o?hb(s,t,n,a):WD(s,n,a)),a._s.get(s)}return r.$id=s,r}const vc=dh("user_store",{state:()=>({accountState:{name:"t",password:"p"},isLogout:!0}),getters:{getUserAccountState:e=>e.accountState,getUserIsLogout:e=>e.isLogout},actions:{setIsLogout(e){this.isLogout=e}},persist:!0}),Pe=(e,t)=>{const i=e.__vccOpts||e;for(const[s,n]of t)i[s]=n;return i},GD={},qD={class:"avatar-panel bg-black/25 backdrop-blur-lg text-white flex-none font-semibold text-8xl grid place-content-center"};function ZD(e,t){const i=ve("IconButton");return G(),ae("div",qD,[E(i,{"has-filled":"",class:"w-full h-full scale-[4] icon-filled"},{default:H(()=>[Re("person")]),_:1})])}const XD=Pe(GD,[["render",ZD]]),QD={class:"drop-shadow-md shadow-black text-4xl text-white"},JD=Ce({__name:"ProfileName",setup(e){const t=vc();return(i,s)=>(G(),ae("div",QD,Ot(ye(t).accountState.name),1))}}),jo=dh("system_store",{state:()=>({brightness:100,isNightlight:!1,isLocked:!0}),getters:{getSystemBrightness:e=>e.brightness,getSystemIsNightlight:e=>e.isNightlight,getSystemIsLocked:e=>e.isLocked},actions:{setBrightness(e){this.brightness=e},setIsNightlight(e){this.isNightlight=e},toggleIsNightlight(){this.isNightlight=!this.isNightlight},setIsLocked(e){this.isLocked=e}},persist:!0}),KD={class:"relative full-screen flex flex-col gap-16 items-center justify-center"},eR={class:"flex items-center relative"},tR=["onKeyup"],iR={key:0},sR={key:1},nR=Ce({__name:"Login",setup(e){const t=jo(),i=vc(),s=Yn({password:"",pending:!1,isError:!1,isTyped:!1}),n=async c=>{s.pending=c},o=async c=>{s.isError=c},r=async c=>{s.isTyped=c},a=async c=>await new Promise(()=>setTimeout(()=>{c()},500)),l=async()=>{r(!0),n(!0),o(!1),s.password===i.accountState.password&&await a(()=>{n(!1),i.setIsLogout(!1),t.setIsLocked(!1)}),await a(()=>{o(!0),n(!1)})};return(c,u)=>{const d=ve("Icon"),p=ve("LabelLarge");return G(),ae("div",KD,[E(XD),E(JD),W("form",eR,[W("fluent-text-field",{autofocus:"",type:"password",onInput:u[0]||(u[0]=b=>s.password=b.target.value),appearance:"filled",onKeyup:PC(l,["enter"]),placeholder:"Password"},null,40,tR),W("fluent-button",{onClick:l,class:"absolute right-0 z-[1] p-0.5 grid place-content-center"},[E(d,null,{default:H(()=>[Re("arrow_forward")]),_:1})])]),s.pending?(G(),ae("fluent-progress-ring",sR)):(G(),ae("div",iR,[s.isError?(G(),It(p,{key:0},{default:H(()=>[Re("Typed password is incorrect")]),_:1})):ye(t).getSystemIsLocked&&s.isTyped?(G(),It(p,{key:1},{default:H(()=>[Re("Welcome")]),_:1})):ku("",!0)]))])}}}),oR={class:"relative full-screen overflow-clip"},rR=Ce({__name:"LockScreen",setup(e){const t=at(!1),i=o=>{t.value=o};var s=void 0;const n=()=>{clearTimeout(s),s=setTimeout(()=>{i(!1)},1e4)};return fi(()=>{window.addEventListener("mousemove",n),window.addEventListener("keypress",n)}),Qi(()=>{window.removeEventListener("mousemove",n),window.removeEventListener("keypress",n)}),(o,r)=>(G(),ae("div",oR,[W("div",{class:ii([[t.value?"blur scale-125 brightness-75":""],"absolute full-screen transition-all duration-500 lock-screen-wallpaper"])},null,2),t.value?(G(),It(nR,{key:1})):(G(),It(HD,{key:0,"set-is-typed":i}))]))}}),aR={},lR={placeholder:"Type here to search"};function cR(e,t){return G(),ae("fluent-search",lR)}const uR=Pe(aR,[["render",cR]]);function xo(e,t,...i){if(e in t){let n=t[e];return typeof n=="function"?n(...i):n}let s=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(n=>`"${n}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,xo),s}var Pu=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(Pu||{}),dR=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(dR||{});function Yo({visible:e=!0,features:t=0,ourProps:i,theirProps:s,...n}){var o;let r=pb(s,i),a=Object.assign(n,{props:r});if(e||t&2&&r.static)return Xc(a);if(t&1){let l=(o=r.unmount)==null||o?0:1;return xo(l,{0(){return null},1(){return Xc({...n,props:{...r,hidden:!0,style:{display:"none"}}})}})}return Xc(a)}function Xc({props:e,attrs:t,slots:i,slot:s,name:n}){var o,r;let{as:a,...l}=gb(e,["unmount","static"]),c=(o=i.default)==null?void 0:o.call(i,s),u={};if(s){let d=!1,p=[];for(let[b,$]of Object.entries(s))typeof $=="boolean"&&(d=!0),$===!0&&p.push(b);d&&(u["data-headlessui-state"]=p.join(" "))}if(a==="template"){if(c=fb(c??[]),Object.keys(l).length>0||Object.keys(t).length>0){let[d,...p]=c??[];if(!hR(d)||p.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${n} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(l).concat(Object.keys(t)).map(x=>x.trim()).filter((x,k,F)=>F.indexOf(x)===k).sort((x,k)=>x.localeCompare(k)).map(x=>`  - ${x}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(x=>`  - ${x}`).join(`
`)].join(`
`));let b=pb((r=d.props)!=null?r:{},l),$=Ln(d,b);for(let x in b)x.startsWith("on")&&($.props||($.props={}),$.props[x]=b[x]);return $}return Array.isArray(c)&&c.length===1?c[0]:c}return Cs(a,Object.assign({},l,u),{default:()=>c})}function fb(e){return e.flatMap(t=>t.type===kt?fb(t.children):[t])}function pb(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},i={};for(let s of e)for(let n in s)n.startsWith("on")&&typeof s[n]=="function"?(i[n]!=null||(i[n]=[]),i[n].push(s[n])):t[n]=s[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(i).map(s=>[s,void 0])));for(let s in i)Object.assign(t,{[s](n,...o){let r=i[s];for(let a of r){if(n instanceof Event&&n.defaultPrevented)return;a(n,...o)}}});return t}function gb(e,t=[]){let i=Object.assign({},e);for(let s of t)s in i&&delete i[s];return i}function hR(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let fR=0;function pR(){return++fR}function mb(){return pR()}var Mi=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Mi||{});function wt(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}function tp(e,t){if(e)return e;let i=t??"button";if(typeof i=="string"&&i.toLowerCase()==="button")return"button"}function gR(e,t){let i=at(tp(e.value.type,e.value.as));return fi(()=>{i.value=tp(e.value.type,e.value.as)}),Km(()=>{var s;i.value||wt(t)&&wt(t)instanceof HTMLButtonElement&&!((s=wt(t))!=null&&s.hasAttribute("type"))&&(i.value="button")}),i}var mR=Object.defineProperty,vR=(e,t,i)=>t in e?mR(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,ip=(e,t,i)=>(vR(e,typeof t!="symbol"?t+"":t,i),i);class bR{constructor(){ip(this,"current",this.detect()),ip(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let yR=new bR;function xR(e){if(yR.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=wt(e);if(t)return t.ownerDocument}return document}let wR=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var Vi=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(Vi||{}),nr=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(nr||{}),$R=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))($R||{});function kR(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(wR)).sort((t,i)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(i.tabIndex||Number.MAX_SAFE_INTEGER)))}var _R=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(_R||{}),SR=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(SR||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));let CR=["textarea","input"].join(",");function IR(e){var t,i;return(i=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,CR))!=null?i:!1}function to(e,t=i=>i){return e.slice().sort((i,s)=>{let n=t(i),o=t(s);if(n===null||o===null)return 0;let r=n.compareDocumentPosition(o);return r&Node.DOCUMENT_POSITION_FOLLOWING?-1:r&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Kn(e,t,{sorted:i=!0,relativeTo:s=null,skipElements:n=[]}={}){var o;let r=(o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?o:document,a=Array.isArray(e)?i?to(e):e:kR(e);n.length>0&&a.length>1&&(a=a.filter($=>!n.includes($))),s=s??r.activeElement;let l=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,a.indexOf(s))-1;if(t&4)return Math.max(0,a.indexOf(s))+1;if(t&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=t&32?{preventScroll:!0}:{},d=0,p=a.length,b;do{if(d>=p||d+p<=0)return 0;let $=c+d;if(t&16)$=($+p)%p;else{if($<0)return 3;if($>=p)return 1}b=a[$],b==null||b.focus(u),d+=l}while(b!==r.activeElement);return t&6&&IR(b)&&b.select(),2}var vb=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(vb||{});let bb=Ce({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:i}){return()=>{let{features:s,...n}=e,o={"aria-hidden":(s&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(s&4)===4&&(s&2)!==2&&{display:"none"}}};return Yo({ourProps:o,theirProps:n,slot:{},attrs:i,slots:t,name:"Hidden"})}}});function TR(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}let FR=Ce({props:{onFocus:{type:Function,required:!0}},setup(e){let t=at(!0);return()=>t.value?Cs(bb,{as:"button",type:"button",features:vb.Focusable,onFocus(i){i.preventDefault();let s,n=50;function o(){var r;if(n--<=0){s&&cancelAnimationFrame(s);return}if((r=e.onFocus)!=null&&r.call(e)){t.value=!1,cancelAnimationFrame(s);return}s=requestAnimationFrame(o)}s=requestAnimationFrame(o)}}):null}});var DR=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(DR||{}),RR=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(RR||{});let yb=Symbol("TabsContext");function Kr(e){let t=hi(yb,null);if(t===null){let i=new Error(`<${e} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,Kr),i}return t}let hh=Symbol("TabsSSRContext"),xb=Ce({name:"TabGroup",emits:{change:e=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:t,attrs:i,emit:s}){var n;let o=at((n=e.selectedIndex)!=null?n:e.defaultIndex),r=at([]),a=at([]),l=Ze(()=>e.selectedIndex!==null),c=Ze(()=>l.value?e.selectedIndex:o.value);function u(x){var k;let F=to(d.tabs.value,wt),M=to(d.panels.value,wt),se=F.filter(j=>{var pe;return!((pe=wt(j))!=null&&pe.hasAttribute("disabled"))});if(x<0||x>F.length-1){let j=xo(o.value===null?0:Math.sign(x-o.value),{[-1]:()=>1,0:()=>xo(Math.sign(x),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});o.value=xo(j,{0:()=>F.indexOf(se[0]),1:()=>F.indexOf(se[se.length-1])}),d.tabs.value=F,d.panels.value=M}else{let j=F.slice(0,x),pe=[...F.slice(x),...j].find(ct=>se.includes(ct));if(!pe)return;let Fe=(k=F.indexOf(pe))!=null?k:d.selectedIndex.value;Fe===-1&&(Fe=d.selectedIndex.value),o.value=Fe,d.tabs.value=F,d.panels.value=M}}let d={selectedIndex:Ze(()=>{var x,k;return(k=(x=o.value)!=null?x:e.defaultIndex)!=null?k:null}),orientation:Ze(()=>e.vertical?"vertical":"horizontal"),activation:Ze(()=>e.manual?"manual":"auto"),tabs:r,panels:a,setSelectedIndex(x){c.value!==x&&s("change",x),l.value||u(x)},registerTab(x){var k;if(r.value.includes(x))return;let F=r.value[o.value];r.value.push(x),r.value=to(r.value,wt);let M=(k=r.value.indexOf(F))!=null?k:o.value;M!==-1&&(o.value=M)},unregisterTab(x){let k=r.value.indexOf(x);k!==-1&&r.value.splice(k,1)},registerPanel(x){a.value.includes(x)||(a.value.push(x),a.value=to(a.value,wt))},unregisterPanel(x){let k=a.value.indexOf(x);k!==-1&&a.value.splice(k,1)}};mo(yb,d);let p=at({tabs:[],panels:[]}),b=at(!1);fi(()=>{b.value=!0}),mo(hh,Ze(()=>b.value?null:p.value));let $=Ze(()=>e.selectedIndex);return fi(()=>{go([$],()=>{var x;return u((x=e.selectedIndex)!=null?x:e.defaultIndex)},{immediate:!0})}),Km(()=>{if(!l.value||c.value==null||d.tabs.value.length<=0)return;let x=to(d.tabs.value,wt);x.some((k,F)=>wt(d.tabs.value[F])!==wt(k))&&d.setSelectedIndex(x.findIndex(k=>wt(k)===wt(d.tabs.value[c.value])))}),()=>{let x={selectedIndex:o.value};return Cs(kt,[r.value.length<=0&&Cs(FR,{onFocus:()=>{for(let k of r.value){let F=wt(k);if((F==null?void 0:F.tabIndex)===0)return F.focus(),!0}return!1}}),Yo({theirProps:{...i,...gb(e,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:x,slots:t,attrs:i,name:"TabGroup"})])}}}),wb=Ce({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:t,slots:i}){let s=Kr("TabList");return()=>{let n={selectedIndex:s.selectedIndex.value},o={role:"tablist","aria-orientation":s.orientation.value};return Yo({ourProps:o,theirProps:e,slot:n,attrs:t,slots:i,name:"TabList"})}}}),Lu=Ce({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-tabs-tab-${mb()}`}},setup(e,{attrs:t,slots:i,expose:s}){let n=Kr("Tab"),o=at(null);s({el:o,$el:o}),fi(()=>n.registerTab(o)),Qi(()=>n.unregisterTab(o));let r=hi(hh),a=Ze(()=>{if(r.value){let k=r.value.tabs.indexOf(e.id);return k===-1?r.value.tabs.push(e.id)-1:k}return-1}),l=Ze(()=>{let k=n.tabs.value.indexOf(o);return k===-1?a.value:k}),c=Ze(()=>l.value===n.selectedIndex.value);function u(k){var F;let M=k();if(M===nr.Success&&n.activation.value==="auto"){let se=(F=xR(o))==null?void 0:F.activeElement,j=n.tabs.value.findIndex(pe=>wt(pe)===se);j!==-1&&n.setSelectedIndex(j)}return M}function d(k){let F=n.tabs.value.map(M=>wt(M)).filter(Boolean);if(k.key===Mi.Space||k.key===Mi.Enter){k.preventDefault(),k.stopPropagation(),n.setSelectedIndex(l.value);return}switch(k.key){case Mi.Home:case Mi.PageUp:return k.preventDefault(),k.stopPropagation(),u(()=>Kn(F,Vi.First));case Mi.End:case Mi.PageDown:return k.preventDefault(),k.stopPropagation(),u(()=>Kn(F,Vi.Last))}if(u(()=>xo(n.orientation.value,{vertical(){return k.key===Mi.ArrowUp?Kn(F,Vi.Previous|Vi.WrapAround):k.key===Mi.ArrowDown?Kn(F,Vi.Next|Vi.WrapAround):nr.Error},horizontal(){return k.key===Mi.ArrowLeft?Kn(F,Vi.Previous|Vi.WrapAround):k.key===Mi.ArrowRight?Kn(F,Vi.Next|Vi.WrapAround):nr.Error}}))===nr.Success)return k.preventDefault()}let p=at(!1);function b(){var k;p.value||(p.value=!0,!e.disabled&&((k=wt(o))==null||k.focus(),n.setSelectedIndex(l.value),TR(()=>{p.value=!1})))}function $(k){k.preventDefault()}let x=gR(Ze(()=>({as:e.as,type:t.type})),o);return()=>{var k;let F={selected:c.value},{id:M,...se}=e,j={ref:o,onKeydown:d,onMousedown:$,onClick:b,id:M,role:"tab",type:x.value,"aria-controls":(k=wt(n.panels.value[l.value]))==null?void 0:k.id,"aria-selected":c.value,tabIndex:c.value?0:-1,disabled:e.disabled?!0:void 0};return Yo({ourProps:j,theirProps:se,slot:F,attrs:t,slots:i,name:"Tab"})}}}),$b=Ce({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:i}){let s=Kr("TabPanels");return()=>{let n={selectedIndex:s.selectedIndex.value};return Yo({theirProps:e,ourProps:{},slot:n,attrs:i,slots:t,name:"TabPanels"})}}}),ro=Ce({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-tabs-panel-${mb()}`},tabIndex:{type:Number,default:0}},setup(e,{attrs:t,slots:i,expose:s}){let n=Kr("TabPanel"),o=at(null);s({el:o,$el:o}),fi(()=>n.registerPanel(o)),Qi(()=>n.unregisterPanel(o));let r=hi(hh),a=Ze(()=>{if(r.value){let u=r.value.panels.indexOf(e.id);return u===-1?r.value.panels.push(e.id)-1:u}return-1}),l=Ze(()=>{let u=n.panels.value.indexOf(o);return u===-1?a.value:u}),c=Ze(()=>l.value===n.selectedIndex.value);return()=>{var u;let d={selected:c.value},{id:p,tabIndex:b,...$}=e,x={ref:o,id:p,role:"tabpanel","aria-labelledby":(u=wt(n.tabs.value[l.value]))==null?void 0:u.id,tabIndex:c.value?b:-1};return!c.value&&e.unmount&&!e.static?Cs(bb,{as:"span",...x}):Yo({ourProps:x,theirProps:$,slot:d,attrs:t,slots:i,features:Pu.Static|Pu.RenderStrategy,visible:c.value,name:"TabPanel"})}}});const ER=["data-active","onClick"],OR={class:"text-3xl font-semibold mb-4"},PR={class:"bg-white/75 w-full h-full rounded-container"},LR=Ce({__name:"Settings",setup(e){const t=(n,o)=>({label:n,icon:o}),i=[t("Account","person"),t("Personalization","brush"),t("Gaming","sports_esports"),t("Windows Update","update")],s=at("Account");return(n,o)=>{const r=ve("Icon"),a=ve("FlexLayout"),l=ve("PageLayout");return G(),It(l,null,{default:H(()=>[E(a,{class:"h-full gap-1"},{default:H(()=>[E(ye(xb),null,{default:H(()=>[E(ye(wb),{as:"div",class:"setting-list flex flex-col flex-none gap-2"},{default:H(()=>[(G(),ae(kt,null,Kl(i,(c,u)=>E(ye(Lu),{key:u,as:"template"},{default:H(({selected:d})=>[W("div",{"data-active":d,onClick:p=>s.value=c.label,class:"outline-none"},[E(r,null,{default:H(()=>[Re(Ot(c.icon),1)]),_:2},1024),Re(" "+Ot(c.label),1)],8,ER)]),_:2},1024)),64))]),_:1}),E(ye($b),{as:"div",class:"flex flex-col w-full h-full"},{default:H(()=>[W("h1",OR,Ot(s.value),1),W("div",PR,[E(ye(ro),null,{default:H(()=>[Re("1")]),_:1}),E(ye(ro),null,{default:H(()=>[Re("2")]),_:1}),E(ye(ro),null,{default:H(()=>[Re("3")]),_:1}),E(ye(ro),null,{default:H(()=>[Re("4")]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})}}});var AR=0;function MR(){return AR++}function VR(e,t={maximizable:!0,minimizable:!0},i={runningInBackground:!1,processId:MR()}){var s,n,o,r;return{window:{info:{title:e.info.title,icon:e.info.icon,activeZIndex:i.processId},position:{x:((s=e.position)==null?void 0:s.x)||0,y:((n=e.position)==null?void 0:n.y)||0},size:{width:((o=e.size)==null?void 0:o.width)||400,height:((r=e.size)==null?void 0:r.height)||300}},accessibility:{maximizable:t.maximizable,minimizable:t.minimizable,focus:!1,active:!1,maximize:!1,minimize:!1},process:{runningInBackground:i.runningInBackground,processId:i.processId}}}const HR={class:"flex-none select-none w-full h-8 bg-white/75 backdrop-blur-lg"},NR={class:"w-full h-full flex items-center justify-between"},zR={class:"flex-none h-full aspect-square scale-75 grid place-content-center"},BR={class:"w-full whitespace-nowrap overflow-clip"},jR={class:"flex-none w-fit h-full flex items-center justify-end"},YR={class:"icon icon-has-active px-2 h-full scale-75"},UR={class:"icon icon-has-active px-2 h-full scale-75"},WR={class:"icon icon-has-active px-2 h-full scale-75"},GR={class:"relative w-full h-full backdrop-blur-lg bg-white/75 overflow-auto"},qR=Ce({__name:"WindowTemplate",props:{getProcessStateInstance:{type:Function}},emits:["close","maximize","minimize","focus","unfocus","active","inactive","gragwindow","changeWindowSize"],setup(e,{emit:t}){const i=e,s=ea(),n=()=>{if(s.getAllProcesses.length<=1)return;const o=i.getProcessStateInstance().window.info.activeZIndex,a=s.getAllProcesses.map(l=>l.getProcessStateInstance().window.info.activeZIndex).reduce((l,c)=>l>c?l:c);s.swapZIndex(o,a)};return(o,r)=>{const a=ve("Icon"),l=ve("FlexLayout");return G(),ae("div",{ref:"windowRef",onMousedown:r[4]||(r[4]=()=>{ye(s).cleanActive(),ye(s).cleanFocus(),t("focus"),t("active"),n()}),onMouseover:r[5]||(r[5]=c=>t("focus")),onMouseout:r[6]||(r[6]=()=>{t("unfocus")}),class:ii(["select-none fixed leadin-animation resize overflow-hidden transition-all active:transition-none",[i.getProcessStateInstance().accessibility.active?"shadow-lg":"",i.getProcessStateInstance().accessibility.minimize?"opacity-0 scale-0 translate-y-full select-none pointer-events-none -z-[99999]":""]]),style:Pn({left:i.getProcessStateInstance().accessibility.maximize?"0":i.getProcessStateInstance().window.position.x+"px",top:i.getProcessStateInstance().accessibility.maximize?"0":i.getProcessStateInstance().window.position.y+"px",width:i.getProcessStateInstance().accessibility.maximize?"100%":i.getProcessStateInstance().window.size.width+"px",height:i.getProcessStateInstance().accessibility.maximize?"100%":i.getProcessStateInstance().window.size.height+"px","z-index":i.getProcessStateInstance().window.info.activeZIndex+1e3,"padding-bottom":i.getProcessStateInstance().accessibility.maximize?"3rem":"0"})},[E(l,{class:"rounded-container w-full h-full flex-col overflow-clip border"},{default:H(()=>[W("header",HR,[W("div",NR,[W("div",{onMousedown:r[0]||(r[0]=c=>t("gragwindow",c)),class:"h-full flex items-center justify-start w-full text-ellipsis overflow-clip"},[W("div",zR,[E(a,null,{default:H(()=>[Re(Ot(i.getProcessStateInstance().window.info.icon),1)]),_:1})]),W("h1",BR,Ot(i.getProcessStateInstance().window.info.title),1)],32),W("nav",jR,[i.getProcessStateInstance().accessibility.minimizable?(G(),ae("div",{key:0,onClick:r[1]||(r[1]=c=>t("minimize")),class:"w-full h-full icon-has-hover"},[W("div",YR,[E(a,null,{default:H(()=>[Re("minimize")]),_:1})])])):ku("",!0),i.getProcessStateInstance().accessibility.maximizable?(G(),ae("div",{key:1,onClick:r[2]||(r[2]=c=>t("maximize")),class:"w-full h-full icon-has-hover"},[W("div",UR,[E(a,null,{default:H(()=>[Re("check_box_outline_blank")]),_:1})])])):ku("",!0),W("div",{onClick:r[3]||(r[3]=()=>{ye(s).killProcessByProcessId(i.getProcessStateInstance().process.processId)}),class:"w-full h-full icon-has-hover",type:"error"},[W("div",WR,[E(a,null,{default:H(()=>[Re("Close")]),_:1})])])])])]),W("main",GR,[Qe(o.$slots,"default",{},void 0,!0)])]),_:3})],38)}}}),ZR=Pe(qR,[["__scopeId","data-v-2eb2eea2"]]),XR={},QR={class:"display-large"};function JR(e,t){return G(),ae("div",QR,[Qe(e.$slots,"default")])}const kb=Pe(XR,[["render",JR]]),KR={},eE={class:"display-medium"};function tE(e,t){return G(),ae("div",eE,[Qe(e.$slots,"default")])}const _b=Pe(KR,[["render",tE]]),iE={},sE={class:"display-small"};function nE(e,t){return G(),ae("div",sE,[Qe(e.$slots,"default")])}const Sb=Pe(iE,[["render",nE]]),oE={},rE={class:"headline-large"};function aE(e,t){return G(),ae("div",rE,[Qe(e.$slots,"default")])}const Cb=Pe(oE,[["render",aE]]),lE={},cE={class:"headline-medium"};function uE(e,t){return G(),ae("div",cE,[Qe(e.$slots,"default")])}const Ib=Pe(lE,[["render",uE]]),dE={},hE={class:"headline-small"};function fE(e,t){return G(),ae("div",hE,[Qe(e.$slots,"default")])}const Tb=Pe(dE,[["render",fE]]),pE={},gE={class:"title-large"};function mE(e,t){return G(),ae("div",gE,[Qe(e.$slots,"default")])}const Fb=Pe(pE,[["render",mE]]),vE={},bE={class:"title-medium"};function yE(e,t){return G(),ae("div",bE,[Qe(e.$slots,"default")])}const Db=Pe(vE,[["render",yE]]),xE={},wE={class:"title-small"};function $E(e,t){return G(),ae("div",wE,[Qe(e.$slots,"default")])}const Rb=Pe(xE,[["render",$E]]),kE={},_E={class:"label-large"};function SE(e,t){return G(),ae("div",_E,[Qe(e.$slots,"default")])}const Eb=Pe(kE,[["render",SE]]),CE={},IE={class:"label-medium"};function TE(e,t){return G(),ae("div",IE,[Qe(e.$slots,"default")])}const Ob=Pe(CE,[["render",TE]]),FE={},DE={class:"label-small"};function RE(e,t){return G(),ae("div",DE,[Qe(e.$slots,"default")])}const Pb=Pe(FE,[["render",RE]]),EE={},OE={class:"body-large"};function PE(e,t){return G(),ae("div",OE,[Qe(e.$slots,"default")])}const Lb=Pe(EE,[["render",PE]]),LE={},AE={class:"body-medium"};function ME(e,t){return G(),ae("div",AE,[Qe(e.$slots,"default")])}const Ab=Pe(LE,[["render",ME]]),VE={},HE={class:"body-small"};function NE(e,t){return G(),ae("div",HE,[Qe(e.$slots,"default")])}const Mb=Pe(VE,[["render",NE]]),Vb=Ce({__name:"ExpandLayout",setup(e){const t=at(!1),i=s=>{t.value=s};return(s,n)=>(G(),ae("div",null,[Qe(s.$slots,"actions",{isExpanded:t.value,setIsExpanded:i}),Qe(s.$slots,"expanded-content",{isExpanded:t.value,setIsExpanded:i})]))}}),zE={},BE={class:"fixed"};function jE(e,t){return G(),ae("div",BE,[Qe(e.$slots,"default")])}const Hb=Pe(zE,[["render",jE]]),YE={},UE={class:"flex"};function WE(e,t){return G(),ae("div",UE,[Qe(e.$slots,"default")])}const Nb=Pe(YE,[["render",WE]]),GE={},qE={class:"relative p-2 h-full w-full"};function ZE(e,t){return G(),ae("div",qE,[Qe(e.$slots,"default")])}const zb=Pe(GE,[["render",ZE]]),XE={},QE={class:"sticky top-0"};function JE(e,t){return G(),ae("div",QE,[Qe(e.$slots,"default")])}const Bb=Pe(XE,[["render",JE]]),KE={},eO={class:"grid"};function tO(e,t){return G(),ae("div",eO,[Qe(e.$slots,"default",{},void 0,!0)])}const jb=Pe(KE,[["render",tO],["__scopeId","data-v-8ad9707e"]]),iO={},sO={class:"material-symbols-outlined relative icon"};function nO(e,t){return G(),ae("span",sO,[Qe(e.$slots,"default",{},void 0,!0)])}const Yb=Pe(iO,[["render",nO],["__scopeId","data-v-ba4f84c9"]]),oO=Ce({__name:"IconButton",props:{hasHover:{type:Boolean,default:!1},hasActive:{type:Boolean,default:!1},hasFilled:{type:Boolean,default:!1},hasShape:{type:Boolean,default:!0}},setup(e){const t=e;return(i,s)=>{const n=ve("Icon");return G(),ae("div",{class:ii([[t.hasHover?"icon-has-hover":"",t.hasShape?"rounded overflow-clip":""],"p-2"])},[E(n,{class:ii([[t.hasActive?"icon-has-active":"",t.hasFilled?"icon-has-filled":""],"transition-all"])},{default:H(()=>[Qe(i.$slots,"default",{},void 0,!0)]),_:3},8,["class"])],2)}}}),Ub=Pe(oO,[["__scopeId","data-v-2edebd8b"]]),rO=()=>document.getElementById("window-workspace").appendChild(document.createElement("div")),aO=e=>{const t=rO(),i=Yd(e);return i.component("DisplayLarge",kb).component("DisplayMedium",_b).component("DisplaySmall",Sb).component("HeadlineLarge",Cb).component("HeadlineMedium",Ib).component("HeadlineSmall",Tb).component("TitleLarge",Fb).component("TitleMedium",Db).component("TitleSmall",Rb).component("LabelLarge",Eb).component("LabelMedium",Ob).component("LabelSmall",Pb).component("BodyLarge",Lb).component("BodyMedium",Ab).component("BodySmall",Mb).component("ExpandLayout",Vb).component("FixedLayout",Hb).component("FlexLayout",Nb).component("PageLayout",zb).component("StickyLayout",Bb).component("GridLayout",jb).component("Icon",Yb).component("IconButton",Ub),{mount:()=>{i.mount(t)},unmount:()=>{i&&i.unmount(),t.remove()},instance:i}};function lO(e,t,i){const s=aO(Cs(ZR,{},{default:()=>Cs(i)}));return s.instance._component.props={...t,getProcessStateInstance:e},{...s,getProcessStateInstance:e}}const ea=dh("process_store",{state:()=>({processes:[]}),getters:{getAllProcesses:e=>e.processes,getAllProcessByRunningInBackground:e=>e.processes.filter(t=>t.getProcessStateInstance().process.runningInBackground),getAllProcessByMinimize:e=>e.processes.filter(t=>t.getProcessStateInstance().accessibility.minimize),getProcessByProcessId:e=>t=>e.processes.filter(i=>t===i.getProcessStateInstance().process.processId)[0]},actions:{createNewProcess({title:e,icon:t="bug_report"},i){const s=at(VR({info:{title:e,icon:t}})),n=()=>{const r=o.instance._container.children.item(0);r.style.width.includes("%")||r.style.height.includes("%")||(s.value.window.size.width=parseInt(r.style.width),s.value.window.size.height=parseInt(r.style.height),console.log(s.value.window.size))},o=lO(()=>s.value,{onClose:()=>o.unmount(),onMaximize:()=>{s.value.accessibility.maximize=!s.value.accessibility.maximize},onChangeWindowSize:()=>n(),onMinimize:()=>{n(),s.value.accessibility.minimize=!0},onFocus:()=>{s.value.accessibility.focus=!0},onUnfocus:()=>{n(),s.value.accessibility.focus=!1},onActive:()=>{s.value.accessibility.active=!0},onInactive:()=>{s.value.accessibility.active=!1},onGragwindow:r=>{if(s.value.accessibility.maximize)return!1;const a=o.instance._container.children.item(0),l={x:r.clientX-a.offsetLeft,y:r.clientY-a.offsetTop};return document.onmousemove=c=>{const u={x:0,y:0};u.x=c.clientX-l.x,u.y=c.clientY-l.y,s.value.window.position.x=u.x,s.value.window.position.y=u.y},document.onmouseup=()=>{document.onmousemove=null,document.onmouseup=null},!1}},i);return this.processes.push(o),o},cleanProcesses(){this.processes.map(e=>e.instance.unmount()),this.processes=[]},cleanFocus(){this.processes=this.processes.map(e=>(e.getProcessStateInstance().accessibility.focus=!1,e))},cleanActive(){this.processes=this.processes.map(e=>(e.getProcessStateInstance().accessibility.active=!1,e))},swapZIndex(e,t){if(e===t||this.processes.length<=1)return;const i={x:this.processes.filter(s=>s.getProcessStateInstance().window.info.activeZIndex===e)[0],y:this.processes.filter(s=>s.getProcessStateInstance().window.info.activeZIndex===t)[0]};i.x.getProcessStateInstance().window.info.activeZIndex=t,i.y.getProcessStateInstance().window.info.activeZIndex=e},killProcessByProcessId(e){if(this.processes.length===0)return;const t=this.processes.filter(i=>e===i.getProcessStateInstance().process.processId)[0];t.instance.unmount(),this.processes.splice(this.processes.indexOf(t),1)},setRunningInBackground(e,t){e.getProcessStateInstance().process.runningInBackground=t},setMinimize(e,t){e.getProcessStateInstance().accessibility.minimize=t}}}),cO=Ce({__name:"KillProcessButton",props:{currentProcess:{}},setup(e){const t=e,i=ea();return(s,n)=>(G(),ae("fluent-button",{onClick:n[0]||(n[0]=()=>{t.currentProcess!==null&&ye(i).killProcessByProcessId(t.currentProcess.getProcessStateInstance().process.processId)}),appearance:"neutral"},"End Process"))}}),uO=["onClick"],sp=Ce({__name:"ProcessList",props:{currentProcess:{}},emits:["setCurrentProcess"],setup(e,{emit:t}){const i=e,s=ea();return(n,o)=>(G(!0),ae(kt,null,Kl(ye(s).getAllProcesses,r=>(G(),ae("li",{key:r.getProcessStateInstance().process.processId,onClick:a=>t("setCurrentProcess",r),class:ii(["transition-all active:bg-white px-4 py-2 rounded flex gap-2 overflow-auto",[r===i.currentProcess?"bg-blue-500/25 hover:bg-blue-500/50":"hover:bg-white/75"]])},[Qe(n.$slots,"default",{e:r})],10,uO))),128))}}),dO=e=>(Qm("data-v-2203b3a7"),e=e(),Jm(),e),hO=dO(()=>W("fluent-divider",{class:"w-[1px] h-6 bg-black/10"},null,-1)),fO=Ce({__name:"Manager",setup(e){const t=at(null),i=s=>{t.value=s};return(s,n)=>{const o=ve("FlexLayout"),r=ve("PageLayout");return G(),It(r,null,{default:H(()=>[E(o,{class:"flex-col gap-1 h-full"},{default:H(()=>[E(o,{class:"justify-end items-center bg-white/50 w-full p-2 rounded-container"},{default:H(()=>[E(cO,{"current-process":t.value},null,8,["current-process"])]),_:1}),E(ye(xb),{as:"div",class:"flex w-full h-full gap-1"},{default:H(()=>[E(ye(wb),{as:"fluent-listbox",class:"gap-1 transition-all"},{default:H(()=>[E(ye(Lu),{as:"fluent-option",value:"processes",selected:""},{default:H(()=>[Re("Processes")]),_:1}),E(ye(Lu),{as:"fluent-option",value:"details"},{default:H(()=>[Re("Details")]),_:1})]),_:1}),E(ye($b),{as:"div",class:"bg-white/75 rounded-container w-full h-full"},{default:H(()=>[E(ye(ro),{as:"ul",class:"p-2 h-full"},{default:H(()=>[E(sp,{onSetCurrentProcess:i,"current-process":t.value},{default:H(({e:a})=>[W("h1",null,Ot(a.getProcessStateInstance().window.info.title),1)]),_:1},8,["current-process"])]),_:1}),E(ye(ro),{as:"ul",class:"p-2 h-full"},{default:H(()=>[E(sp,{onSetCurrentProcess:i,"current-process":t.value},{default:H(({e:a})=>[W("h1",null,Ot(a.getProcessStateInstance().window.info.title),1),hO,W("h1",null,Ot(a.getProcessStateInstance().process.processId),1)]),_:1},8,["current-process"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),pO=Pe(fO,[["__scopeId","data-v-2203b3a7"]]),gO={},mO={class:"relative overflow-clip p-2 h-full"},vO=W("div",{class:"w-full h-full rounded overflow-clip"},[W("fluent-text-area",{autofocus:"",placeholder:"Notepad beta, type here.",resize:"vertical",appearance:"outline",class:"w-full h-full"})],-1);function bO(e,t){const i=ve("TitleLarge"),s=ve("PageLayout");return G(),It(s,null,{default:H(()=>[W("div",mO,[W("header",null,[E(i,null,{default:H(()=>[Re("Notepad Beta")]),_:1})]),vO])]),_:1})}const yO=Pe(gO,[["render",bO]]),xO=Ce({__name:"Camera",setup(e){const t=at(),i=at(),s=()=>{let n=document.createElement("canvas");n.getContext("2d").drawImage(t.value,0,0,n.width,n.height),n.style.width="8rem",n.style.aspectRatio="1 / 1",i.value.appendChild(n)};return fi(()=>{navigator&&navigator.mediaDevices?navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"user",width:300,height:300}}).then(n=>{t.value.srcObject=n,t.value.onloadedmetadata=()=>t.value.play()}).catch(()=>{console.log("Unknown error.")}):console.log("camera API is not supported by your browser")}),sv(()=>{t.value.onloadedmetadata=null}),Qi(()=>{}),(n,o)=>{const r=ve("FlexLayout"),a=ve("PageLayout");return G(),It(a,null,{default:H(()=>[E(r,{class:"flex-col h-full w-full gap-2 items-center justify-center"},{default:H(()=>[W("video",{ref_key:"cameraVideoRef",ref:t,class:"rounded-container h-full aspect-square"},null,512),W("fluent-button",{type:"button",appearance:"accent",onClick:s},"Take Photo")]),_:1}),E(r,{class:"gap-2 items-center flex-row flex-wrap"},{default:H(()=>[W("div",{ref_key:"cameraResultListRef",ref:i,class:"flex-none"},null,512)]),_:1})]),_:1})}}}),Ia=(e,t,i,s)=>({label:e,icon:t,slot:i,title:s}),wO=[Ia("Settings","settings",LR,"Settings Demo"),Ia("Task Manager","man",pO,"Task Manager Demo"),Ia("NotePad","note",yO,"Notepad Demo"),Ia("Camera","camera",xO,"Camera Demo")];function $O(){return wO}const kO=Ce({__name:"PinnedApps",setup(e){const t=ea(),i=(s,n,o="bug_report")=>{t.createNewProcess({title:n,icon:o},s).mount()};return(s,n)=>{const o=ve("Icon"),r=ve("LabelSmall"),a=ve("IconButton"),l=ve("GridLayout");return G(),It(l,{class:"relative gap-2 grid-cols-4 md:grid-cols-6 grid-rows-auto overflow-y-auto h-40 items-start"},{default:H(()=>[(G(!0),ae(kt,null,Kl(ye($O)(),c=>(G(),It(a,{"has-hover":"","has-active":"",onClick:u=>i(c.slot,c.title,c.icon),key:c.slot,class:"h-16 w-24"},{default:H(()=>[E(o,null,{default:H(()=>[Re(Ot(c.icon),1)]),_:2},1024),E(r,{class:"select-none mt-2"},{default:H(()=>[Re(Ot(c.label),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})}}}),_O=["onClick"],SO=W("div",{class:"rounded-full w-8 h-8 bg-white/75"},null,-1),CO={class:"max-w-[12rem] overflow-clip text-ellipsis"},IO=W("fluent-menu-item",null,"Lock",-1),TO=["onClick"],FO=Ce({__name:"SimpleUserProfile",setup(e){const t=jo(),i=vc(),s=()=>{i.setIsLogout(!0),t.setIsLocked(!0)};return(n,o)=>{const r=ve("ExpandLayout");return G(),It(r,null,{actions:H(({isExpanded:a,setIsExpanded:l})=>[W("div",{onClick:c=>l(!a),class:"inline-flex items-center gap-2 px-4 py-2 rounded-[4px] hover:bg-black/5"},[SO,W("span",CO,Ot(ye(i).getUserAccountState.name),1)],8,_O)]),"expanded-content":H(({isExpanded:a,setIsExpanded:l})=>[W("div",{class:ii(["relative z-0",[a?"opacity-100":"opacity-0 pointer-events-none"]])},[W("fluent-menu",{class:"absolute bottom-10 left-0 w-32 z-0"},[W("fluent-menu-item",{onClick:s},"Sign-out"),IO]),Ql(W("div",{onClick:c=>l(!1),class:"fixed full-screen bottom-0 right-0 -z-[1]"},null,8,TO),[[sc,a]])],2)]),_:1})}}}),DO={},RO=W("fluent-menu",{class:"absolute bottom-10 right-0 w-32 z-0"},[W("fluent-menu-item",null,"Sleep"),W("fluent-menu-item",null,"Shut down"),W("fluent-menu-item",null,"Restart")],-1),EO=["onClick"];function OO(e,t){const i=ve("IconButton"),s=ve("ExpandLayout");return G(),It(s,null,{actions:H(({isExpanded:n,setIsExpanded:o})=>[E(i,{"has-hover":"","has-active":"",onClick:r=>o(!n)},{default:H(()=>[Re("power_settings_new")]),_:2},1032,["onClick"])]),"expanded-content":H(({isExpanded:n,setIsExpanded:o})=>[W("div",{class:ii(["relative z-0",[n?"opacity-100":"opacity-0 pointer-events-none"]])},[RO,Ql(W("div",{onClick:r=>o(!1),class:"fixed full-screen bottom-0 right-0 -z-[1]"},null,8,EO),[[sc,n]])],2)]),_:1})}const PO=Pe(DO,[["render",OO]]),LO=e=>(Qm("data-v-e649c03e"),e=e(),Jm(),e),AO={class:"rounded hover:bg-white/75 h-full aspect-square overflow-clip"},MO=LO(()=>W("div",{class:"starts-button-group relative windows-starts-icon-special-shape overflow-clip w-6 h-6 grid grid-cols-2 grid-rows-2 gap-[1.25px]"},[W("div",{class:"first-block-highlight"}),W("div"),W("div"),W("div")],-1)),VO=[MO],HO=Ce({__name:"StartsButton",props:{isExpanded:{type:Boolean}},emits:["setIsExpanded"],setup(e,{emit:t}){const i=e;return(s,n)=>(G(),ae("div",AO,[W("div",{onClick:n[0]||(n[0]=o=>t("setIsExpanded",!i.isExpanded)),class:"w-full h-full transition-all active:scale-75 grid place-content-center"},VO)]))}}),NO=Pe(HO,[["__scopeId","data-v-e649c03e"]]),zO={class:"relative backdrop-blur-lg bg-white/[0.85] bottom-0 w-auto mx-auto max-w-3xl overflow-auto max-h-[32rem]"},BO=["onClick"],jO=Ce({__name:"Starts",setup(e){return(t,i)=>{const s=ve("FlexLayout"),n=ve("ExpandLayout");return G(),It(n,{class:"relative flex items-center justify-center max-w-fit flex-grow h-full aspect-square"},{actions:H(({isExpanded:o,setIsExpanded:r})=>[E(NO,{onSetIsExpanded:r,"is-expanded":o},null,8,["onSetIsExpanded","is-expanded"])]),"expanded-content":H(({isExpanded:o,setIsExpanded:r})=>[W("div",{class:ii(["full-screen fixed top-0 left-0 grid justify-center items-end pb-16",[o?"active opacity-100":"opacity-0 select-none pointer-events-none"]])},[W("fluent-card",zO,[E(s,{class:"flex-col justify-between h-full"},{default:H(()=>[E(s,{class:"flex-col px-8 py-4 pt-8 gap-8 justify-between overflow-auto"},{default:H(()=>[E(uR),E(kO)]),_:1}),E(s,{class:"justify-between items-center bg-black/5 px-8 py-2 border-t"},{default:H(()=>[E(FO),E(PO)]),_:1})]),_:1})]),Ql(W("div",{onClick:a=>r(!1),class:"fixed left-0 bottom-0 w-screen h-screen -z-[1]"},null,8,BO),[[sc,o]])],2)]),_:1})}}}),YO=Pe(jO,[["__scopeId","data-v-b19704a7"]]),UO=Ce({__name:"NightLightNavigationButton",setup(e){const t=jo();return(i,s)=>{const n=ve("IconButton");return G(),It(n,{"has-hover":"","has-active":"",onClick:ye(t).toggleIsNightlight,class:ii({"bg-primary-500":ye(t).getSystemIsNightlight})},{default:H(()=>[Re("light")]),_:1},8,["onClick","class"])}}}),WO=Ce({__name:"NavigationButtons",setup(e){return(t,i)=>{const s=ve("IconButton"),n=ve("GridLayout");return G(),It(n,{class:"grid-cols-3 gap-2"},{default:H(()=>[E(s,{class:"px-8 py-4","has-hover":"","has-active":""},{default:H(()=>[Re("wifi")]),_:1}),E(s,{class:"px-8 py-4","has-hover":"","has-active":""},{default:H(()=>[Re("bluetooth")]),_:1}),E(s,{class:"px-8 py-4","has-hover":"","has-active":""},{default:H(()=>[Re("air")]),_:1}),E(UO,{class:"px-8 py-4"})]),_:1})}}}),GO={class:"w-full h-full active:scale-75 transition-all px-2"},qO={class:"w-full h-full grid place-content-center"},ZO=Ce({__name:"NavigationToggleButton",props:{isExpanded:{type:Boolean}},emits:["setIsExpanded"],setup(e,{emit:t}){const i=e;return(s,n)=>{const o=ve("Icon"),r=ve("FlexLayout");return G(),ae("div",{onClick:n[0]||(n[0]=a=>t("setIsExpanded",!i.isExpanded)),class:"rounded-container hover:bg-white/75 transition-all w-full h-full"},[W("div",GO,[W("div",qO,[E(r,null,{default:H(()=>[E(o,{class:"scale-75"},{default:H(()=>[Re("wifi")]),_:1}),E(o,{class:"scale-75 hidden md:block"},{default:H(()=>[Re("volume_up")]),_:1}),E(o,{class:"scale-75 hidden md:block"},{default:H(()=>[Re("power")]),_:1})]),_:1})])])])}}}),XO={class:"space-y-8"},QO=["value"],JO=W("fluent-slider",{value:"00"},null,-1),KO=Ce({__name:"NavigationSystemControl",setup(e){const t=jo(),i=s=>{t.setBrightness(s.target.valueAsNumber)};return(s,n)=>{const o=ve("Icon"),r=ve("FlexLayout");return G(),ae("div",XO,[E(r,{class:"gap-4"},{default:H(()=>[E(o,{class:"relative -top-2"},{default:H(()=>[Re("light")]),_:1}),W("fluent-slider",{onChange:i,id:"systemBrightnessSliderRef",value:ye(t).getSystemBrightness,min:"30",max:"100"},null,40,QO)]),_:1}),E(r,{class:"gap-4"},{default:H(()=>[E(o,{class:"relative -top-2"},{default:H(()=>[Re("volume_up")]),_:1}),JO]),_:1})])}}}),eP={class:"relative hover:bg-white/75 rounded-default"},tP=Ce({__name:"DateAndTimeButton",setup(e){const t=at(N().format("MM-DD-YYYY")),i=at(N().format("HH:mm")),s=()=>{t.value=N().format("MM-DD-YYYY"),i.value=N().format("HH:mm")};var n=void 0;return fi(()=>{n=setInterval(s,1e3)}),Qi(()=>{clearInterval(n)}),(o,r)=>{const a=ve("LabelMedium"),l=ve("LabelSmall"),c=ve("FlexLayout");return G(),ae("div",eP,[E(c,{class:"select-none w-full h-full active:scale-75 transition-all px-2 flex flex-col items-end justify-around text-end"},{default:H(()=>[E(a,null,{default:H(()=>[Re(Ot(i.value),1)]),_:1}),E(l,null,{default:H(()=>[Re(Ot(t.value),1)]),_:1})]),_:1})])}}}),iP={class:"relative backdrop-blur-lg bg-white/[0.85] w-full max-w-2xl overflow-auto max-h-[24rem]"},sP=["onClick"],nP=Ce({__name:"Navigation",setup(e){return(t,i)=>{const s=ve("FlexLayout"),n=ve("ExpandLayout");return G(),It(s,{class:"h-full gap-2"},{default:H(()=>[E(n,{class:"relative h-full"},{actions:H(({isExpanded:o,setIsExpanded:r})=>[E(ZO,{onSetIsExpanded:r,"is-expanded":o},null,8,["onSetIsExpanded","is-expanded"])]),"expanded-content":H(({isExpanded:o,setIsExpanded:r})=>[W("div",{class:ii(["full-screen fixed top-0 left-0 grid justify-end items-end pb-16 pr-2",[o?"active opacity-100":"opacity-0 select-none pointer-events-none"]])},[W("fluent-card",iP,[E(s,{class:"flex-col p-4 gap-8 justify-between h-full"},{default:H(()=>[E(WO),E(KO)]),_:1})]),Ql(W("div",{onClick:a=>r(!1),class:"fixed left-0 bottom-0 w-screen h-screen -z-[1]"},null,8,sP),[[sc,o]])],2)]),_:1}),E(tP)]),_:1})}}}),oP=Pe(nP,[["__scopeId","data-v-1f84e556"]]),rP={class:"relative h-full w-fit flex gap-1 select-none"},aP=["onClick"],lP=["anchor"],cP=Ce({__name:"MinimizeApps",setup(e){const t=ea();return(i,s)=>{const n=ve("IconButton");return G(),ae("ul",rP,[(G(!0),ae(kt,null,Kl(ye(t).getAllProcesses,o=>(G(),ae("div",{key:o.getProcessStateInstance().process.processId,onClick:r=>ye(t).setMinimize(o,!o.getProcessStateInstance().accessibility.minimize)},[E(n,{"has-hover":"","has-active":"",id:"process"+o.getProcessStateInstance().process.processId},{default:H(()=>[Re(Ot(o.getProcessStateInstance().window.info.icon),1)]),_:2},1032,["id"]),W("fluent-tooltip",{position:"top",anchor:"process"+o.getProcessStateInstance().process.processId},Ot(o.getProcessStateInstance().window.info.title),9,lP)],8,aP))),128))])}}}),uP={class:"relative w-full h-12 border-t border-black/20 back-blur p-1"},dP=W("div",{class:"flex-none w-1/4 flex justify-start"},null,-1),hP={class:"flex-none relative w-2/4 h-full duration-1000 transition-all flex gap-1 justify-center items-center overflow-auto"},fP={class:"flex-none w-1/4 h-full flex justify-end"},pP=Ce({__name:"StartsBar",setup(e){return(t,i)=>{const s=ve("FlexLayout");return G(),ae("div",uP,[E(s,{class:"relative w-full h-full items-center justify-between overflow-clip"},{default:H(()=>[dP,W("div",hP,[E(YO),E(cP)]),W("div",fP,[E(oP)])]),_:1})])}}}),gP={},mP={class:"wallpaper full-screen relative overflow-clip"};function vP(e,t){return G(),ae("div",mP)}const bP=Pe(gP,[["render",vP]]),yP={class:"relative max-h-screen h-full w-screen overflow-clip"},xP={class:"flex-grow h-full max-h-screen overflow-clip"},wP={class:"fixed bottom-0 z-[9999] left-0 w-full h-12"},$P=Ce({__name:"App",setup(e){const t=jo(),i=vc();return fi(()=>{i.setIsLogout(!0)}),Qi(()=>{i.setIsLogout(!0)}),(s,n)=>(G(),ae("div",yP,[ye(t).getSystemIsLocked?(G(),It(rR,{key:0})):(G(),ae(kt,{key:1},[W("div",xP,[E(bP)]),W("nav",wP,[E(pP)])],64))]))}});/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const io=typeof window<"u";function kP(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Be=Object.assign;function Qc(e,t){const i={};for(const s in t){const n=t[s];i[s]=Zi(n)?n.map(e):e(n)}return i}const gr=()=>{},Zi=Array.isArray,_P=/\/$/,SP=e=>e.replace(_P,"");function Jc(e,t,i="/"){let s,n={},o="",r="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=t.slice(0,l),o=t.slice(l+1,a>-1?a:t.length),n=e(o)),a>-1&&(s=s||t.slice(0,a),r=t.slice(a,t.length)),s=FP(s??t,i),{fullPath:s+(o&&"?")+o+r,path:s,query:n,hash:r}}function CP(e,t){const i=t.query?e(t.query):"";return t.path+(i&&"?")+i+(t.hash||"")}function np(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function IP(e,t,i){const s=t.matched.length-1,n=i.matched.length-1;return s>-1&&s===n&&Ro(t.matched[s],i.matched[n])&&Wb(t.params,i.params)&&e(t.query)===e(i.query)&&t.hash===i.hash}function Ro(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Wb(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const i in e)if(!TP(e[i],t[i]))return!1;return!0}function TP(e,t){return Zi(e)?op(e,t):Zi(t)?op(t,e):e===t}function op(e,t){return Zi(t)?e.length===t.length&&e.every((i,s)=>i===t[s]):e.length===1&&e[0]===t}function FP(e,t){if(e.startsWith("/"))return e;if(!e)return t;const i=t.split("/"),s=e.split("/"),n=s[s.length-1];(n===".."||n===".")&&s.push("");let o=i.length-1,r,a;for(r=0;r<s.length;r++)if(a=s[r],a!==".")if(a==="..")o>1&&o--;else break;return i.slice(0,o).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var Ar;(function(e){e.pop="pop",e.push="push"})(Ar||(Ar={}));var mr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(mr||(mr={}));function DP(e){if(!e)if(io){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),SP(e)}const RP=/^[^#]+#/;function EP(e,t){return e.replace(RP,"#")+t}function OP(e,t){const i=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-i.left-(t.left||0),top:s.top-i.top-(t.top||0)}}const bc=()=>({left:window.pageXOffset,top:window.pageYOffset});function PP(e){let t;if("el"in e){const i=e.el,s=typeof i=="string"&&i.startsWith("#"),n=typeof i=="string"?s?document.getElementById(i.slice(1)):document.querySelector(i):i;if(!n)return;t=OP(n,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function rp(e,t){return(history.state?history.state.position-t:-1)+e}const Au=new Map;function LP(e,t){Au.set(e,t)}function AP(e){const t=Au.get(e);return Au.delete(e),t}let MP=()=>location.protocol+"//"+location.host;function Gb(e,t){const{pathname:i,search:s,hash:n}=t,o=e.indexOf("#");if(o>-1){let a=n.includes(e.slice(o))?e.slice(o).length:1,l=n.slice(a);return l[0]!=="/"&&(l="/"+l),np(l,"")}return np(i,e)+s+n}function VP(e,t,i,s){let n=[],o=[],r=null;const a=({state:p})=>{const b=Gb(e,location),$=i.value,x=t.value;let k=0;if(p){if(i.value=b,t.value=p,r&&r===$){r=null;return}k=x?p.position-x.position:0}else s(b);n.forEach(F=>{F(i.value,$,{delta:k,type:Ar.pop,direction:k?k>0?mr.forward:mr.back:mr.unknown})})};function l(){r=i.value}function c(p){n.push(p);const b=()=>{const $=n.indexOf(p);$>-1&&n.splice($,1)};return o.push(b),b}function u(){const{history:p}=window;p.state&&p.replaceState(Be({},p.state,{scroll:bc()}),"")}function d(){for(const p of o)p();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function ap(e,t,i,s=!1,n=!1){return{back:e,current:t,forward:i,replaced:s,position:window.history.length,scroll:n?bc():null}}function HP(e){const{history:t,location:i}=window,s={value:Gb(e,i)},n={value:t.state};n.value||o(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(l,c,u){const d=e.indexOf("#"),p=d>-1?(i.host&&document.querySelector("base")?e:e.slice(d))+l:MP()+e+l;try{t[u?"replaceState":"pushState"](c,"",p),n.value=c}catch(b){console.error(b),i[u?"replace":"assign"](p)}}function r(l,c){const u=Be({},t.state,ap(n.value.back,l,n.value.forward,!0),c,{position:n.value.position});o(l,u,!0),s.value=l}function a(l,c){const u=Be({},n.value,t.state,{forward:l,scroll:bc()});o(u.current,u,!0);const d=Be({},ap(s.value,l,null),{position:u.position+1},c);o(l,d,!1),s.value=l}return{location:s,state:n,push:a,replace:r}}function NP(e){e=DP(e);const t=HP(e),i=VP(e,t.state,t.location,t.replace);function s(o,r=!0){r||i.pauseListeners(),history.go(o)}const n=Be({location:"",base:e,go:s,createHref:EP.bind(null,e)},t,i);return Object.defineProperty(n,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(n,"state",{enumerable:!0,get:()=>t.state.value}),n}function zP(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),NP(e)}function BP(e){return typeof e=="string"||e&&typeof e=="object"}function qb(e){return typeof e=="string"||typeof e=="symbol"}const Ys={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Zb=Symbol("");var lp;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(lp||(lp={}));function Eo(e,t){return Be(new Error,{type:e,[Zb]:!0},t)}function gs(e,t){return e instanceof Error&&Zb in e&&(t==null||!!(e.type&t))}const cp="[^/]+?",jP={sensitive:!1,strict:!1,start:!0,end:!0},YP=/[.+*?^${}()[\]/\\]/g;function UP(e,t){const i=Be({},jP,t),s=[];let n=i.start?"^":"";const o=[];for(const c of e){const u=c.length?[]:[90];i.strict&&!c.length&&(n+="/");for(let d=0;d<c.length;d++){const p=c[d];let b=40+(i.sensitive?.25:0);if(p.type===0)d||(n+="/"),n+=p.value.replace(YP,"\\$&"),b+=40;else if(p.type===1){const{value:$,repeatable:x,optional:k,regexp:F}=p;o.push({name:$,repeatable:x,optional:k});const M=F||cp;if(M!==cp){b+=10;try{new RegExp(`(${M})`)}catch(j){throw new Error(`Invalid custom RegExp for param "${$}" (${M}): `+j.message)}}let se=x?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;d||(se=k&&c.length<2?`(?:/${se})`:"/"+se),k&&(se+="?"),n+=se,b+=20,k&&(b+=-8),x&&(b+=-20),M===".*"&&(b+=-50)}u.push(b)}s.push(u)}if(i.strict&&i.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}i.strict||(n+="/?"),i.end?n+="$":i.strict&&(n+="(?:/|$)");const r=new RegExp(n,i.sensitive?"":"i");function a(c){const u=c.match(r),d={};if(!u)return null;for(let p=1;p<u.length;p++){const b=u[p]||"",$=o[p-1];d[$.name]=b&&$.repeatable?b.split("/"):b}return d}function l(c){let u="",d=!1;for(const p of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const b of p)if(b.type===0)u+=b.value;else if(b.type===1){const{value:$,repeatable:x,optional:k}=b,F=$ in c?c[$]:"";if(Zi(F)&&!x)throw new Error(`Provided param "${$}" is an array but it is not repeatable (* or + modifiers)`);const M=Zi(F)?F.join("/"):F;if(!M)if(k)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${$}"`);u+=M}}return u||"/"}return{re:r,score:s,keys:o,parse:a,stringify:l}}function WP(e,t){let i=0;for(;i<e.length&&i<t.length;){const s=t[i]-e[i];if(s)return s;i++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function GP(e,t){let i=0;const s=e.score,n=t.score;for(;i<s.length&&i<n.length;){const o=WP(s[i],n[i]);if(o)return o;i++}if(Math.abs(n.length-s.length)===1){if(up(s))return 1;if(up(n))return-1}return n.length-s.length}function up(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const qP={type:0,value:""},ZP=/[a-zA-Z0-9_]/;function XP(e){if(!e)return[[]];if(e==="/")return[[qP]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(b){throw new Error(`ERR (${i})/"${c}": ${b}`)}let i=0,s=i;const n=[];let o;function r(){o&&n.push(o),o=[]}let a=0,l,c="",u="";function d(){c&&(i===0?o.push({type:0,value:c}):i===1||i===2||i===3?(o.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&i!==2){s=i,i=4;continue}switch(i){case 0:l==="/"?(c&&d(),r()):l===":"?(d(),i=1):p();break;case 4:p(),i=s;break;case 1:l==="("?i=2:ZP.test(l)?p():(d(),i=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:i=3:u+=l;break;case 3:d(),i=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return i===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),r(),n}function QP(e,t,i){const s=UP(XP(e.path),i),n=Be(s,{record:e,parent:t,children:[],alias:[]});return t&&!n.record.aliasOf==!t.record.aliasOf&&t.children.push(n),n}function JP(e,t){const i=[],s=new Map;t=fp({strict:!1,end:!0,sensitive:!1},t);function n(u){return s.get(u)}function o(u,d,p){const b=!p,$=KP(u);$.aliasOf=p&&p.record;const x=fp(t,u),k=[$];if("alias"in u){const se=typeof u.alias=="string"?[u.alias]:u.alias;for(const j of se)k.push(Be({},$,{components:p?p.record.components:$.components,path:j,aliasOf:p?p.record:$}))}let F,M;for(const se of k){const{path:j}=se;if(d&&j[0]!=="/"){const pe=d.record.path,Fe=pe[pe.length-1]==="/"?"":"/";se.path=d.record.path+(j&&Fe+j)}if(F=QP(se,d,x),p?p.alias.push(F):(M=M||F,M!==F&&M.alias.push(F),b&&u.name&&!hp(F)&&r(u.name)),$.children){const pe=$.children;for(let Fe=0;Fe<pe.length;Fe++)o(pe[Fe],F,p&&p.children[Fe])}p=p||F,(F.record.components&&Object.keys(F.record.components).length||F.record.name||F.record.redirect)&&l(F)}return M?()=>{r(M)}:gr}function r(u){if(qb(u)){const d=s.get(u);d&&(s.delete(u),i.splice(i.indexOf(d),1),d.children.forEach(r),d.alias.forEach(r))}else{const d=i.indexOf(u);d>-1&&(i.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(r),u.alias.forEach(r))}}function a(){return i}function l(u){let d=0;for(;d<i.length&&GP(u,i[d])>=0&&(u.record.path!==i[d].record.path||!Xb(u,i[d]));)d++;i.splice(d,0,u),u.record.name&&!hp(u)&&s.set(u.record.name,u)}function c(u,d){let p,b={},$,x;if("name"in u&&u.name){if(p=s.get(u.name),!p)throw Eo(1,{location:u});x=p.record.name,b=Be(dp(d.params,p.keys.filter(M=>!M.optional).map(M=>M.name)),u.params&&dp(u.params,p.keys.map(M=>M.name))),$=p.stringify(b)}else if("path"in u)$=u.path,p=i.find(M=>M.re.test($)),p&&(b=p.parse($),x=p.record.name);else{if(p=d.name?s.get(d.name):i.find(M=>M.re.test(d.path)),!p)throw Eo(1,{location:u,currentLocation:d});x=p.record.name,b=Be({},d.params,u.params),$=p.stringify(b)}const k=[];let F=p;for(;F;)k.unshift(F.record),F=F.parent;return{name:x,path:$,params:b,matched:k,meta:tL(k)}}return e.forEach(u=>o(u)),{addRoute:o,resolve:c,removeRoute:r,getRoutes:a,getRecordMatcher:n}}function dp(e,t){const i={};for(const s of t)s in e&&(i[s]=e[s]);return i}function KP(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:eL(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function eL(e){const t={},i=e.props||!1;if("component"in e)t.default=i;else for(const s in e.components)t[s]=typeof i=="object"?i[s]:i;return t}function hp(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function tL(e){return e.reduce((t,i)=>Be(t,i.meta),{})}function fp(e,t){const i={};for(const s in e)i[s]=s in t?t[s]:e[s];return i}function Xb(e,t){return t.children.some(i=>i===e||Xb(e,i))}const Qb=/#/g,iL=/&/g,sL=/\//g,nL=/=/g,oL=/\?/g,Jb=/\+/g,rL=/%5B/g,aL=/%5D/g,Kb=/%5E/g,lL=/%60/g,ey=/%7B/g,cL=/%7C/g,ty=/%7D/g,uL=/%20/g;function fh(e){return encodeURI(""+e).replace(cL,"|").replace(rL,"[").replace(aL,"]")}function dL(e){return fh(e).replace(ey,"{").replace(ty,"}").replace(Kb,"^")}function Mu(e){return fh(e).replace(Jb,"%2B").replace(uL,"+").replace(Qb,"%23").replace(iL,"%26").replace(lL,"`").replace(ey,"{").replace(ty,"}").replace(Kb,"^")}function hL(e){return Mu(e).replace(nL,"%3D")}function fL(e){return fh(e).replace(Qb,"%23").replace(oL,"%3F")}function pL(e){return e==null?"":fL(e).replace(sL,"%2F")}function ol(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function gL(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let n=0;n<s.length;++n){const o=s[n].replace(Jb," "),r=o.indexOf("="),a=ol(r<0?o:o.slice(0,r)),l=r<0?null:ol(o.slice(r+1));if(a in t){let c=t[a];Zi(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function pp(e){let t="";for(let i in e){const s=e[i];if(i=hL(i),s==null){s!==void 0&&(t+=(t.length?"&":"")+i);continue}(Zi(s)?s.map(o=>o&&Mu(o)):[s&&Mu(s)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+i,o!=null&&(t+="="+o))})}return t}function mL(e){const t={};for(const i in e){const s=e[i];s!==void 0&&(t[i]=Zi(s)?s.map(n=>n==null?null:""+n):s==null?s:""+s)}return t}const vL=Symbol(""),gp=Symbol(""),ph=Symbol(""),iy=Symbol(""),Vu=Symbol("");function tr(){let e=[];function t(s){return e.push(s),()=>{const n=e.indexOf(s);n>-1&&e.splice(n,1)}}function i(){e=[]}return{add:t,list:()=>e.slice(),reset:i}}function Gs(e,t,i,s,n){const o=s&&(s.enterCallbacks[n]=s.enterCallbacks[n]||[]);return()=>new Promise((r,a)=>{const l=d=>{d===!1?a(Eo(4,{from:i,to:t})):d instanceof Error?a(d):BP(d)?a(Eo(2,{from:t,to:d})):(o&&s.enterCallbacks[n]===o&&typeof d=="function"&&o.push(d),r())},c=e.call(s&&s.instances[n],t,i,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function Kc(e,t,i,s){const n=[];for(const o of e)for(const r in o.components){let a=o.components[r];if(!(t!=="beforeRouteEnter"&&!o.instances[r]))if(bL(a)){const c=(a.__vccOpts||a)[t];c&&n.push(Gs(c,i,s,o,r))}else{let l=a();n.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${o.path}"`));const u=kP(c)?c.default:c;o.components[r]=u;const p=(u.__vccOpts||u)[t];return p&&Gs(p,i,s,o,r)()}))}}return n}function bL(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function mp(e){const t=hi(ph),i=hi(iy),s=Ze(()=>t.resolve(ye(e.to))),n=Ze(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=i.matched;if(!u||!d.length)return-1;const p=d.findIndex(Ro.bind(null,u));if(p>-1)return p;const b=vp(l[c-2]);return c>1&&vp(u)===b&&d[d.length-1].path!==b?d.findIndex(Ro.bind(null,l[c-2])):p}),o=Ze(()=>n.value>-1&&$L(i.params,s.value.params)),r=Ze(()=>n.value>-1&&n.value===i.matched.length-1&&Wb(i.params,s.value.params));function a(l={}){return wL(l)?t[ye(e.replace)?"replace":"push"](ye(e.to)).catch(gr):Promise.resolve()}return{route:s,href:Ze(()=>s.value.href),isActive:o,isExactActive:r,navigate:a}}const yL=Ce({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:mp,setup(e,{slots:t}){const i=Yn(mp(e)),{options:s}=hi(ph),n=Ze(()=>({[bp(e.activeClass,s.linkActiveClass,"router-link-active")]:i.isActive,[bp(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:i.isExactActive}));return()=>{const o=t.default&&t.default(i);return e.custom?o:Cs("a",{"aria-current":i.isExactActive?e.ariaCurrentValue:null,href:i.href,onClick:i.navigate,class:n.value},o)}}}),xL=yL;function wL(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function $L(e,t){for(const i in t){const s=t[i],n=e[i];if(typeof s=="string"){if(s!==n)return!1}else if(!Zi(n)||n.length!==s.length||s.some((o,r)=>o!==n[r]))return!1}return!0}function vp(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const bp=(e,t,i)=>e??t??i,kL=Ce({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:i}){const s=hi(Vu),n=Ze(()=>e.route||s.value),o=hi(gp,0),r=Ze(()=>{let c=ye(o);const{matched:u}=n.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=Ze(()=>n.value.matched[r.value]);mo(gp,Ze(()=>r.value+1)),mo(vL,a),mo(Vu,n);const l=at();return go(()=>[l.value,a.value,e.name],([c,u,d],[p,b,$])=>{u&&(u.instances[d]=c,b&&b!==u&&c&&c===p&&(u.leaveGuards.size||(u.leaveGuards=b.leaveGuards),u.updateGuards.size||(u.updateGuards=b.updateGuards))),c&&u&&(!b||!Ro(u,b)||!p)&&(u.enterCallbacks[d]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=n.value,u=e.name,d=a.value,p=d&&d.components[u];if(!p)return yp(i.default,{Component:p,route:c});const b=d.props[u],$=b?b===!0?c.params:typeof b=="function"?b(c):b:null,k=Cs(p,Be({},$,t,{onVnodeUnmounted:F=>{F.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return yp(i.default,{Component:k,route:c})||k}}});function yp(e,t){if(!e)return null;const i=e(t);return i.length===1?i[0]:i}const _L=kL;function SL(e){const t=JP(e.routes,e),i=e.parseQuery||gL,s=e.stringifyQuery||pp,n=e.history,o=tr(),r=tr(),a=tr(),l=sS(Ys);let c=Ys;io&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Qc.bind(null,C=>""+C),d=Qc.bind(null,pL),p=Qc.bind(null,ol);function b(C,X){let z,te;return qb(C)?(z=t.getRecordMatcher(C),te=X):te=C,t.addRoute(te,z)}function $(C){const X=t.getRecordMatcher(C);X&&t.removeRoute(X)}function x(){return t.getRoutes().map(C=>C.record)}function k(C){return!!t.getRecordMatcher(C)}function F(C,X){if(X=Be({},X||l.value),typeof C=="string"){const y=Jc(i,C,X.path),S=t.resolve({path:y.path},X),I=n.createHref(y.fullPath);return Be(y,S,{params:p(S.params),hash:ol(y.hash),redirectedFrom:void 0,href:I})}let z;if("path"in C)z=Be({},C,{path:Jc(i,C.path,X.path).path});else{const y=Be({},C.params);for(const S in y)y[S]==null&&delete y[S];z=Be({},C,{params:d(y)}),X.params=d(X.params)}const te=t.resolve(z,X),Ne=C.hash||"";te.params=u(p(te.params));const g=CP(s,Be({},C,{hash:dL(Ne),path:te.path})),v=n.createHref(g);return Be({fullPath:g,hash:Ne,query:s===pp?mL(C.query):C.query||{}},te,{redirectedFrom:void 0,href:v})}function M(C){return typeof C=="string"?Jc(i,C,l.value.path):Be({},C)}function se(C,X){if(c!==C)return Eo(8,{from:X,to:C})}function j(C){return ct(C)}function pe(C){return j(Be(M(C),{replace:!0}))}function Fe(C){const X=C.matched[C.matched.length-1];if(X&&X.redirect){const{redirect:z}=X;let te=typeof z=="function"?z(C):z;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=M(te):{path:te},te.params={}),Be({query:C.query,hash:C.hash,params:"path"in te?{}:C.params},te)}}function ct(C,X){const z=c=F(C),te=l.value,Ne=C.state,g=C.force,v=C.replace===!0,y=Fe(z);if(y)return ct(Be(M(y),{state:typeof y=="object"?Be({},Ne,y.state):Ne,force:g,replace:v}),X||z);const S=z;S.redirectedFrom=X;let I;return!g&&IP(s,te,z)&&(I=Eo(16,{to:S,from:te}),Ki(te,te,!0,!1)),(I?Promise.resolve(I):ft(S,te)).catch(D=>gs(D)?gs(D,2)?D:Ns(D):He(D,S,te)).then(D=>{if(D){if(gs(D,2))return ct(Be({replace:v},M(D.to),{state:typeof D.to=="object"?Be({},Ne,D.to.state):Ne,force:g}),X||S)}else D=ai(S,te,!0,v,Ne);return Lt(S,te,D),D})}function _e(C,X){const z=se(C,X);return z?Promise.reject(z):Promise.resolve()}function Ie(C){const X=Gn.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(C):C()}function ft(C,X){let z;const[te,Ne,g]=CL(C,X);z=Kc(te.reverse(),"beforeRouteLeave",C,X);for(const y of te)y.leaveGuards.forEach(S=>{z.push(Gs(S,C,X))});const v=_e.bind(null,C,X);return z.push(v),At(z).then(()=>{z=[];for(const y of o.list())z.push(Gs(y,C,X));return z.push(v),At(z)}).then(()=>{z=Kc(Ne,"beforeRouteUpdate",C,X);for(const y of Ne)y.updateGuards.forEach(S=>{z.push(Gs(S,C,X))});return z.push(v),At(z)}).then(()=>{z=[];for(const y of g)if(y.beforeEnter)if(Zi(y.beforeEnter))for(const S of y.beforeEnter)z.push(Gs(S,C,X));else z.push(Gs(y.beforeEnter,C,X));return z.push(v),At(z)}).then(()=>(C.matched.forEach(y=>y.enterCallbacks={}),z=Kc(g,"beforeRouteEnter",C,X),z.push(v),At(z))).then(()=>{z=[];for(const y of r.list())z.push(Gs(y,C,X));return z.push(v),At(z)}).catch(y=>gs(y,8)?y:Promise.reject(y))}function Lt(C,X,z){a.list().forEach(te=>Ie(()=>te(C,X,z)))}function ai(C,X,z,te,Ne){const g=se(C,X);if(g)return g;const v=X===Ys,y=io?history.state:{};z&&(te||v?n.replace(C.fullPath,Be({scroll:v&&y&&y.scroll},Ne)):n.push(C.fullPath,Ne)),l.value=C,Ki(C,X,z,v),Ns()}let wi;function fn(){wi||(wi=n.listen((C,X,z)=>{if(!ta.listening)return;const te=F(C),Ne=Fe(te);if(Ne){ct(Be(Ne,{replace:!0}),te).catch(gr);return}c=te;const g=l.value;io&&LP(rp(g.fullPath,z.delta),bc()),ft(te,g).catch(v=>gs(v,12)?v:gs(v,2)?(ct(v.to,te).then(y=>{gs(y,20)&&!z.delta&&z.type===Ar.pop&&n.go(-1,!1)}).catch(gr),Promise.reject()):(z.delta&&n.go(-z.delta,!1),He(v,te,g))).then(v=>{v=v||ai(te,g,!1),v&&(z.delta&&!gs(v,8)?n.go(-z.delta,!1):z.type===Ar.pop&&gs(v,20)&&n.go(-1,!1)),Lt(te,g,v)}).catch(gr)}))}let $i=tr(),Me=tr(),We;function He(C,X,z){Ns(C);const te=Me.list();return te.length?te.forEach(Ne=>Ne(C,X,z)):console.error(C),Promise.reject(C)}function fs(){return We&&l.value!==Ys?Promise.resolve():new Promise((C,X)=>{$i.add([C,X])})}function Ns(C){return We||(We=!C,fn(),$i.list().forEach(([X,z])=>C?z(C):X()),$i.reset()),C}function Ki(C,X,z,te){const{scrollBehavior:Ne}=e;if(!io||!Ne)return Promise.resolve();const g=!z&&AP(rp(C.fullPath,0))||(te||!z)&&history.state&&history.state.scroll||null;return Md().then(()=>Ne(C,X,g)).then(v=>v&&PP(v)).catch(v=>He(v,C,X))}const Jt=C=>n.go(C);let Wn;const Gn=new Set,ta={currentRoute:l,listening:!0,addRoute:b,removeRoute:$,hasRoute:k,getRoutes:x,resolve:F,options:e,push:j,replace:pe,go:Jt,back:()=>Jt(-1),forward:()=>Jt(1),beforeEach:o.add,beforeResolve:r.add,afterEach:a.add,onError:Me.add,isReady:fs,install(C){const X=this;C.component("RouterLink",xL),C.component("RouterView",_L),C.config.globalProperties.$router=X,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>ye(l)}),io&&!Wn&&l.value===Ys&&(Wn=!0,j(n.location).catch(Ne=>{}));const z={};for(const Ne in Ys)Object.defineProperty(z,Ne,{get:()=>l.value[Ne],enumerable:!0});C.provide(ph,X),C.provide(iy,Hm(z)),C.provide(Vu,l);const te=C.unmount;Gn.add(C),C.unmount=function(){Gn.delete(C),Gn.size<1&&(c=Ys,wi&&wi(),wi=null,l.value=Ys,Wn=!1,We=!1),te()}}};function At(C){return C.reduce((X,z)=>X.then(()=>Ie(z)),Promise.resolve())}return ta}function CL(e,t){const i=[],s=[],n=[],o=Math.max(t.matched.length,e.matched.length);for(let r=0;r<o;r++){const a=t.matched[r];a&&(e.matched.find(c=>Ro(c,a))?s.push(a):i.push(a));const l=e.matched[r];l&&(t.matched.find(c=>Ro(c,l))||n.push(l))}return[i,s,n]}const IL={};function TL(e,t){return null}const FL=Pe(IL,[["render",TL]]),DL=[{path:"/",name:"Index",component:FL}],RL=SL({history:zP(),routes:DL,linkExactActiveClass:"active"});function EL(e){return typeof e=="object"&&e!==null}function xp(e,t){return e=EL(e)?e:Object.create(null),new Proxy(e,{get(i,s,n){return s==="key"?Reflect.get(i,s,n):Reflect.get(i,s,n)||Reflect.get(t,s,n)}})}function OL(e,t){return t.reduce((i,s)=>i==null?void 0:i[s],e)}function PL(e,t,i){return t.slice(0,-1).reduce((s,n)=>/^(__proto__)$/.test(n)?{}:s[n]=s[n]||{},e)[t[t.length-1]]=i,e}function LL(e,t){return t.reduce((i,s)=>{const n=s.split(".");return PL(i,n,OL(e,n))},{})}function wp(e,{storage:t,serializer:i,key:s,debug:n}){try{const o=t==null?void 0:t.getItem(s);o&&e.$patch(i==null?void 0:i.deserialize(o))}catch(o){n&&console.error(o)}}function $p(e,{storage:t,serializer:i,key:s,paths:n,debug:o}){try{const r=Array.isArray(n)?LL(e,n):e;t.setItem(s,i.serialize(r))}catch(r){o&&console.error(r)}}function AL(e={}){return t=>{const{auto:i=!1}=e,{options:{persist:s=i},store:n,pinia:o}=t;if(!s)return;if(!(n.$id in o.state.value)){const a=o._s.get(n.$id.replace("__hot:",""));a&&Promise.resolve().then(()=>a.$persist());return}const r=(Array.isArray(s)?s.map(a=>xp(a,e)):[xp(s,e)]).map(({storage:a=localStorage,beforeRestore:l=null,afterRestore:c=null,serializer:u={serialize:JSON.stringify,deserialize:JSON.parse},key:d=n.$id,paths:p=null,debug:b=!1})=>{var $;return{storage:a,beforeRestore:l,afterRestore:c,serializer:u,key:(($=e.key)!=null?$:x=>x)(typeof d=="string"?d:d(n.$id)),paths:p,debug:b}});n.$persist=()=>{r.forEach(a=>{$p(n.$state,a)})},n.$hydrate=({runHooks:a=!0}={})=>{r.forEach(l=>{const{beforeRestore:c,afterRestore:u}=l;a&&(c==null||c(t)),wp(n,l),a&&(u==null||u(t))})},r.forEach(a=>{const{beforeRestore:l,afterRestore:c}=a;l==null||l(t),wp(n,a),c==null||c(t),n.$subscribe((u,d)=>{$p(d,a)},{detached:!0})})}}var ML=AL();const VL=Ce({__name:"ScreenMask",setup(e){const t=jo();return fi(()=>{t.setIsLocked(!0)}),Qi(()=>{t.setIsLocked(!0)}),(i,s)=>(G(),ae(kt,null,[W("div",{class:"brightness",style:Pn({"--system-bright":100-ye(t).getSystemBrightness+"%"})},null,4),W("div",{class:"nightlight",style:Pn({"--system-nightlight-enabled":ye(t).getSystemIsNightlight?"35%":"0"})},null,4)],64))}}),sy=zD();sy.use(ML);const gh=Yd($P);gh.component("DisplayLarge",kb).component("DisplayMedium",_b).component("DisplaySmall",Sb).component("HeadlineLarge",Cb).component("HeadlineMedium",Ib).component("HeadlineSmall",Tb).component("TitleLarge",Fb).component("TitleMedium",Db).component("TitleSmall",Rb).component("LabelLarge",Eb).component("LabelMedium",Ob).component("LabelSmall",Pb).component("BodyLarge",Lb).component("BodyMedium",Ab).component("BodySmall",Mb).component("ExpandLayout",Vb).component("FixedLayout",Hb).component("FlexLayout",Nb).component("PageLayout",zb).component("StickyLayout",Bb).component("GridLayout",jb).component("Icon",Yb).component("IconButton",Ub);gh.use(sy).use(RL);gh.mount("#app");const HL=Yd(VL);HL.mount("#screen-mask")});export default NL();
//# sourceMappingURL=index-8f5fad23.js.map
