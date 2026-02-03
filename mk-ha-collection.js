function t(t,e,i,s){var o,n=arguments.length,a=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a}Object.create;Object.create;"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;let n=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new n(i,t,s)},c=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:l,defineProperty:r,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:g}=Object,f=globalThis,u=f.trustedTypes,_=u?u.emptyScript:"",v=f.reactiveElementPolyfillSupport,m=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},$=(t,e)=>!l(t,e),y={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:$};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&r(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const n=s?.call(this);o?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=g(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),o=e.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=s;const n=o.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const s=this.constructor,o=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??$)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==o||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[m("elementProperties")]=new Map,w[m("finalized")]=new Map,v?.({ReactiveElement:w}),(f.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,E=x.trustedTypes,A=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,k="?"+S,O=`<${k}>`,T=document,P=()=>T.createComment(""),I=t=>null===t||"object"!=typeof t&&"function"!=typeof t,z=Array.isArray,M=t=>z(t)||"function"==typeof t?.[Symbol.iterator],U="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,R=/>/g,D=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,B=/"/g,j=/^(?:script|style|textarea|title)$/i,W=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),q=W(1),V=(W(2),W(3),Symbol.for("lit-noChange")),K=Symbol.for("lit-nothing"),F=new WeakMap,J=T.createTreeWalker(T,129);function Y(t,e){if(!z(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const G=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":3===e?"<math>":"",a=H;for(let e=0;e<i;e++){const i=t[e];let c,l,r=-1,h=0;for(;h<i.length&&(a.lastIndex=h,l=a.exec(i),null!==l);)h=a.lastIndex,a===H?"!--"===l[1]?a=N:void 0!==l[1]?a=R:void 0!==l[2]?(j.test(l[2])&&(o=RegExp("</"+l[2],"g")),a=D):void 0!==l[3]&&(a=D):a===D?">"===l[0]?(a=o??H,r=-1):void 0===l[1]?r=-2:(r=a.lastIndex-l[2].length,c=l[1],a=void 0===l[3]?D:'"'===l[3]?B:L):a===B||a===L?a=D:a===N||a===R?a=H:(a=D,o=void 0);const d=a===D&&t[e+1].startsWith("/>")?" ":"";n+=a===H?i+O:r>=0?(s.push(c),i.slice(0,r)+C+i.slice(r)+S+d):i+S+(-2===r?e:d)}return[Y(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class Z{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const a=t.length-1,c=this.parts,[l,r]=G(t,e);if(this.el=Z.createElement(l,i),J.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=J.nextNode())&&c.length<a;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(C)){const e=r[n++],i=s.getAttribute(t).split(S),a=/([.?@])?(.*)/.exec(e);c.push({type:1,index:o,name:a[2],strings:i,ctor:"."===a[1]?it:"?"===a[1]?st:"@"===a[1]?ot:et}),s.removeAttribute(t)}else t.startsWith(S)&&(c.push({type:6,index:o}),s.removeAttribute(t));if(j.test(s.tagName)){const t=s.textContent.split(S),e=t.length-1;if(e>0){s.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],P()),J.nextNode(),c.push({type:2,index:++o});s.append(t[e],P())}}}else if(8===s.nodeType)if(s.data===k)c.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(S,t+1));)c.push({type:7,index:o}),t+=S.length-1}o++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function Q(t,e,i=t,s){if(e===V)return e;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const n=I(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(e=Q(t,o._$AS(t,e.values),o,s)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??T).importNode(e,!0);J.currentNode=s;let o=J.nextNode(),n=0,a=0,c=i[0];for(;void 0!==c;){if(n===c.index){let e;2===c.type?e=new tt(o,o.nextSibling,this,t):1===c.type?e=new c.ctor(o,c.name,c.strings,this,t):6===c.type&&(e=new nt(o,this,t)),this._$AV.push(e),c=i[++a]}n!==c?.index&&(o=J.nextNode(),n++)}return J.currentNode=T,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),I(t)?t===K||null==t||""===t?(this._$AH!==K&&this._$AR(),this._$AH=K):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):M(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==K&&I(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Z.createElement(Y(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new X(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new Z(t)),e}k(t){z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new tt(this.O(P()),this.O(P()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=K,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=K}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=Q(this,t,e,0),n=!I(t)||t!==this._$AH&&t!==V,n&&(this._$AH=t);else{const s=t;let a,c;for(t=o[0],a=0;a<o.length-1;a++)c=Q(this,s[i+a],e,a),c===V&&(c=this._$AH[a]),n||=!I(c)||c!==this._$AH[a],c===K?t=K:t!==K&&(t+=(c??"")+o[a+1]),this._$AH[a]=c}n&&!s&&this.j(t)}j(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class it extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===K?void 0:t}}class st extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==K)}}class ot extends et{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??K)===V)return;const i=this._$AH,s=t===K&&i!==K||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==K&&(i===K||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const at=x.litHtmlPolyfillSupport;at?.(Z,tt),(x.litHtmlVersions??=[]).push("3.3.1");const ct=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class lt extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new tt(e.insertBefore(P(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}lt._$litElement$=!0,lt.finalized=!0,ct.litElementHydrateSupport?.({LitElement:lt});const rt=ct.litElementPolyfillSupport;rt?.({LitElement:lt});(ct.litElementVersions??=[]).push("4.2.1");
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ht=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},dt={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:$},pt=(t=dt,e,i)=>{const{kind:s,metadata:o}=i;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,o,t)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const o=this[s];e.call(this,i),this.requestUpdate(s,o,t)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function gt(t){return(e,i)=>"object"==typeof i?pt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ft=a`
  :host {
    display: block;
    container-type: inline-size;
  }
  ha-card {
    height: 100%;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: transform 0.1s;
    touch-action: manipulation;
  }
  ha-card:active {
    transform: scale(0.98);
  }
  .header {
    display: flex;
    align-items: center;
    padding: 16px;
    gap: 12px;
  }
  .header ha-icon {
    --mdc-icon-size: 40px;
  }
  .header-info {
    flex: 1;
  }
  .device-name {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 4px;
  }
  .status {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
  }
  .status-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    animation: pulse 2s infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
  .status-dot.offline {
    animation: none;
    opacity: 0.7;
  }
  .last-seen {
    font-size: 12px;
    color: var(--secondary-text-color);
    margin-top: 4px;
  }
  .wol-button {
    margin-left: auto;
  }
  
  /* Compact layout */
  .layout-compact .header {
    padding: 12px;
  }
  .layout-compact .header ha-icon {
    --mdc-icon-size: 32px;
  }
  .layout-compact .device-name {
    font-size: 16px;
  }
  
  /* Detailed layout */
  .layout-detailed .header {
    padding: 20px;
  }
  .layout-detailed .header ha-icon {
    --mdc-icon-size: 48px;
  }
  .layout-detailed .device-name {
    font-size: 20px;
  }
`,ut=a`
  .card-config {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  ha-expansion-panel {
    --expansion-panel-summary-padding: 0 16px;
    --expansion-panel-content-padding: 0 16px 16px;
    background: var(--secondary-background-color);
    border-radius: 12px;
    overflow: hidden;
  }
  .panel-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 16px;
  }
  ha-alert {
    display: block;
    margin-bottom: 16px;
  }
  .switch-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
  }
  .switch-row span {
    font-weight: 500;
  }
`;let _t=class extends lt{setConfig(t){this._config={show_last_seen:!0,show_wol_button:!0,confirm_wol:!0,online_color:"#4caf50",offline_color:"#f44336",layout:"default",...t}}_valueChanged(t){if(!this._config)return;const e=t.target,i=e.configValue||e.id,s=void 0!==t.detail?.value?t.detail.value:e.value;i&&(this._config={...this._config,[i]:s},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}render(){return this.hass&&this._config?q`
      <div class="card-config">
        <ha-alert alert-type="info">
          Configure a ping binary_sensor for status monitoring. Optionally add MAC address or WOL button entity for Wake on LAN functionality.
        </ha-alert>

        <ha-expansion-panel .header=${"Device"} .expanded=${!0} .leftChevron=${!0}>
          <div slot="icons">
            <ha-icon icon="mdi:devices"></ha-icon>
          </div>
          <div class="panel-content">
            <ha-selector
              .hass=${this.hass}
              .selector=${{entity:{domain:["binary_sensor"]}}}
              .value=${this._config.entity}
              .label=${"Ping Binary Sensor"}
              .required=${!0}
              @value-changed=${t=>{this._config&&(this._config={...this._config,entity:t.detail.value},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}}
            ></ha-selector>

            <ha-textfield
              id="name"
              label="Name (Optional)"
              .value=${this._config.name||""}
              @input=${this._valueChanged}
            ></ha-textfield>

            <ha-selector
              .hass=${this.hass}
              .selector=${{icon:{}}}
              .value=${this._config.icon||"mdi:lan"}
              .label=${"Icon"}
              @value-changed=${t=>{this._config&&(this._config={...this._config,icon:t.detail.value},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}}
            ></ha-selector>
          </div>
        </ha-expansion-panel>

        <ha-expansion-panel .header=${"Wake on LAN"} .expanded=${!0} .leftChevron=${!0}>
          <div slot="icons">
            <ha-icon icon="mdi:power"></ha-icon>
          </div>
          <div class="panel-content">
            <div class="switch-row">
              <span>Show WOL Button</span>
              <ha-switch
                .checked=${this._config.show_wol_button??!0}
                @change=${t=>{this._config&&(this._config={...this._config,show_wol_button:t.target.checked},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}}
              ></ha-switch>
            </div>

            ${this._config.show_wol_button?q`
              <div class="switch-row">
                <span>Confirm WOL Action</span>
                <ha-switch
                  .checked=${this._config.confirm_wol??!0}
                  @change=${t=>{this._config&&(this._config={...this._config,confirm_wol:t.target.checked},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}}
                ></ha-switch>
              </div>

              <ha-selector
                .hass=${this.hass}
                .selector=${{entity:{domain:["button","switch"]}}}
                .value=${this._config.wol_entity||""}
                .label=${"WOL Entity (Optional)"}
                @value-changed=${t=>{this._config&&(this._config={...this._config,wol_entity:t.detail.value},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}}
              ></ha-selector>

              <ha-textfield
                id="mac_address"
                label="MAC Address (Alternative to WOL Entity)"
                placeholder="AA:BB:CC:DD:EE:FF"
                .value=${this._config.mac_address||""}
                @input=${this._valueChanged}
              ></ha-textfield>

              <ha-alert alert-type="info" style="margin-top: 8px;">
                Either use a WOL button entity OR enter MAC address to call wake_on_lan service directly.
              </ha-alert>
            `:""}
          </div>
        </ha-expansion-panel>

        <ha-expansion-panel .header=${"Display"} .expanded=${!0} .leftChevron=${!0}>
          <div slot="icons">
            <ha-icon icon="mdi:monitor-dashboard"></ha-icon>
          </div>
          <div class="panel-content">
            <div class="switch-row">
              <span>Show Last Seen</span>
              <ha-switch
                .checked=${this._config.show_last_seen??!0}
                @change=${t=>{this._config&&(this._config={...this._config,show_last_seen:t.target.checked},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}}
              ></ha-switch>
            </div>

            <ha-selector
              .hass=${this.hass}
              .selector=${{select:{options:[{value:"default",label:"Default"},{value:"compact",label:"Compact"},{value:"detailed",label:"Detailed"}]}}}
              .value=${this._config.layout||"default"}
              .label=${"Layout"}
              @value-changed=${t=>{this._config&&(this._config={...this._config,layout:t.detail.value},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}}
            ></ha-selector>
          </div>
        </ha-expansion-panel>

        <ha-expansion-panel .header=${"Colors"} .leftChevron=${!0}>
          <div slot="icons">
            <ha-icon icon="mdi:palette"></ha-icon>
          </div>
          <div class="panel-content">
            <ha-selector
              .hass=${this.hass}
              .selector=${{color_rgb:{}}}
              .value=${(()=>{const t=(this._config.online_color||"#4caf50").replace("#","");return[parseInt(t.substr(0,2),16),parseInt(t.substr(2,2),16),parseInt(t.substr(4,2),16)]})()}
              .label=${"Online Color"}
              @value-changed=${t=>{if(!this._config)return;const e=`#${t.detail.value.map(t=>t.toString(16).padStart(2,"0")).join("")}`;this._config={...this._config,online_color:e},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}}
            ></ha-selector>

            <ha-selector
              .hass=${this.hass}
              .selector=${{color_rgb:{}}}
              .value=${(()=>{const t=(this._config.offline_color||"#f44336").replace("#","");return[parseInt(t.substr(0,2),16),parseInt(t.substr(2,2),16),parseInt(t.substr(4,2),16)]})()}
              .label=${"Offline Color"}
              @value-changed=${t=>{if(!this._config)return;const e=`#${t.detail.value.map(t=>t.toString(16).padStart(2,"0")).join("")}`;this._config={...this._config,offline_color:e},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}}
            ></ha-selector>
          </div>
        </ha-expansion-panel>

        <ha-expansion-panel .header=${"Interactions"} .leftChevron=${!0}>
          <div slot="icons">
            <ha-icon icon="mdi:gesture-tap"></ha-icon>
          </div>
          <div class="panel-content">
            <ha-selector
              .hass=${this.hass}
              .selector=${{"ui-action":{}}}
              .value=${this._config.tap_action||{action:"more-info"}}
              .label=${"Tap Action"}
              @value-changed=${t=>{this._config&&(this._config={...this._config,tap_action:t.detail.value},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}}
            ></ha-selector>
          </div>
        </ha-expansion-panel>
      </div>
    `:q``}};_t.styles=ut,t([gt({attribute:!1})],_t.prototype,"hass",void 0),t([gt({attribute:!1})],_t.prototype,"_config",void 0),_t=t([ht("mk-network-device-card-editor")],_t),console.info("%c MK-NETWORK-DEVICE-CARD %c Version 0.0.4 ","color: white; background: #4caf50; font-weight: 700;","color: #4caf50; background: white; font-weight: 700;");let vt=class extends lt{setConfig(t){if(!t.entity)throw new Error("You need to define an entity (ping binary_sensor)");this.config={show_last_seen:!0,show_wol_button:!0,confirm_wol:!0,online_color:"#4caf50",offline_color:"#f44336",layout:"default",...t}}getCardSize(){return 1}_handleWol(){if(this.hass&&this.config&&(!1===this.config.confirm_wol||confirm("Are you sure you want to wake this device?")))if(this.config.wol_entity){const t=this.config.wol_entity.split(".")[0];"button"===t?this.hass.callService("button","press",{entity_id:this.config.wol_entity}):"switch"===t&&this.hass.callService("switch","turn_on",{entity_id:this.config.wol_entity})}else this.config.mac_address&&this.hass.callService("wake_on_lan","send_magic_packet",{mac:this.config.mac_address})}_handleTap(){if(!this.config||!this.hass)return;const t=this.config.tap_action||{action:"more-info"};if("more-info"===t.action){const t=new CustomEvent("hass-more-info",{detail:{entityId:this.config.entity},bubbles:!0,composed:!0});this.dispatchEvent(t)}else if("navigate"===t.action&&t.navigation_path){history.pushState(null,"",t.navigation_path);const e=new Event("location-changed",{bubbles:!0,composed:!0});window.dispatchEvent(e)}else if("url"===t.action&&t.url_path)window.open(t.url_path);else if("call-service"===t.action&&t.service){const[e,i]=t.service.split(".");this.hass.callService(e,i,t.service_data||{})}else"toggle"===t.action&&this.hass.callService("homeassistant","toggle",{entity_id:this.config.entity})}_formatLastSeen(t){const e=new Date(t),i=(new Date).getTime()-e.getTime(),s=Math.floor(i/6e4),o=Math.floor(s/60),n=Math.floor(o/24);return s<1?"Just now":s<60?`${s} minute${s>1?"s":""} ago`:o<24?`${o} hour${o>1?"s":""} ago`:`${n} day${n>1?"s":""} ago`}render(){if(!this.config||!this.hass)return q``;const t=this.hass.states[this.config.entity];if(!t)return q`
        <ha-card>
          <div class="header">
            <div>Entity not found: ${this.config.entity}</div>
          </div>
        </ha-card>
      `;const e="on"===t.state,i=e?this.config.online_color:this.config.offline_color,s=this.config.icon||"mdi:lan",o=this.config.name||t.attributes.friendly_name||this.config.entity,n=this.config.layout||"default",a=this.config.show_wol_button&&(this.config.wol_entity||this.config.mac_address)&&!e;return q`
      <ha-card class="layout-${n}">
        <div class="header" @click=${this._handleTap}>
          <ha-icon icon="${s}" style="color: ${i};"></ha-icon>
          <div class="header-info">
            <div class="device-name">${o}</div>
            <div class="status">
              <div class="status-dot ${e?"online":"offline"}" style="background-color: ${i};"></div>
              <span>${e?"Online":"Offline"}</span>
            </div>
            ${this.config.show_last_seen&&!e&&t.last_changed?q`
              <div class="last-seen">Last seen: ${this._formatLastSeen(t.last_changed)}</div>
            `:""}
          </div>
          ${a?q`
            <mwc-button
              class="wol-button"
              raised
              @click=${t=>{t.stopPropagation(),this._handleWol()}}
            >
              <ha-icon icon="mdi:power" slot="icon"></ha-icon>
              Wake
            </mwc-button>
          `:""}
        </div>
      </ha-card>
    `}};vt.styles=ft,t([gt({attribute:!1})],vt.prototype,"hass",void 0),t([gt({attribute:!1})],vt.prototype,"config",void 0),vt=t([ht("mk-network-device-card")],vt),vt.getConfigElement=()=>document.createElement("mk-network-device-card-editor"),vt.getStubConfig=()=>({type:"custom:mk-network-device-card",entity:"",show_last_seen:!0,show_wol_button:!0,confirm_wol:!0,online_color:"#4caf50",offline_color:"#f44336",layout:"default"}),window.customCards=window.customCards||[],window.customCards.push({type:"mk-network-device-card",name:"MK Network Device Card",description:"Monitor network devices with ping status and WOL support",preview:!0});const mt=a`
  .card-config {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  
  ha-expansion-panel {
    --expansion-panel-summary-padding: 12px 16px;
    --expansion-panel-content-padding: 0 16px 16px;
    background: var(--secondary-background-color);
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 8px;
  }
  
  .panel-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 16px;
  }
  
  /* Section Headers */
  .section-header {
    font-size: 14px;
    font-weight: 600;
    color: var(--primary-text-color);
    margin: 24px 0 12px 0;
    padding-top: 16px;
    border-top: 2px solid var(--divider-color);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .section-header:first-child {
    margin-top: 0;
    padding-top: 0;
    border-top: none;
  }
  
  /* Toggle Rows */
  .toggle-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
  }
  
  .toggle-row span {
    font-size: 14px;
    color: var(--primary-text-color);
  }
  
  /* Color Rows */
  .color-row {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  .color-row ha-selector {
    flex: 1;
  }
  
  .color-row span {
    flex: 1;
    color: var(--secondary-text-color);
    font-style: italic;
  }
  
  /* Subsections (Appearance, States, etc.) */
  .subsection-details {
    margin-top: 16px;
  }
  
  .subsection-summary {
    list-style: none;
    cursor: pointer;
    padding: 8px 0;
    font-size: 13px;
    font-weight: 600;
    color: var(--primary-text-color);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    user-select: none;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .subsection-summary::-webkit-details-marker {
    display: none;
  }
  
  .subsection-summary::before {
    content: '▶';
    font-size: 10px;
    transition: transform 0.2s;
  }
  
  .subsection-details[open] .subsection-summary::before {
    transform: rotate(90deg);
  }
  
  .subsection-content {
    padding-top: 12px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  
  /* State Configuration */
  .states {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  .state-details {
    border: 1px solid var(--divider-color);
    border-radius: 8px;
    overflow: hidden;
  }
  
  .state-summary {
    list-style: none;
    cursor: pointer;
    padding: 12px 16px;
    background: var(--card-background-color);
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    color: var(--primary-text-color);
    font-weight: 600;
    user-select: none;
  }
  
  .state-summary:hover {
    background: var(--secondary-background-color);
  }
  
  .state-summary::-webkit-details-marker {
    display: none;
  }
  
  .state-summary::before {
    content: '▶';
    font-size: 12px;
    transition: transform 0.2s;
  }
  
  .state-details[open] .state-summary::before {
    transform: rotate(90deg);
  }
  
  .state-config {
    padding: 16px;
    background: var(--secondary-background-color);
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  
  /* Form Elements */
  ha-switch {
    --mdc-switch-selected-track-color: var(--primary-color);
    --mdc-switch-selected-handle-color: var(--primary-color);
  }
  
  ha-selector,
  ha-textfield {
    width: 100%;
  }
`;let bt=class extends lt{setConfig(t){this._config={state_colors:{},state_labels:{},state_icons:{},icon_colors:{},text_colors:{},hidden_states:[],...t}}_valueChanged(t){if(!this._config)return;const e=t.target,i=e.configValue||e.id,s=void 0!==t.detail?.value?t.detail.value:e.value;i&&(this._config={...this._config,[i]:s},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}_visibilityChanged(t,e){if(!this._config)return;const i=e.target.checked,s=[...this._config.hidden_states||[]];i||s.includes(t)?i&&s.includes(t)&&s.splice(s.indexOf(t),1):s.push(t),this._config={...this._config,hidden_states:s},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}_getEntityStates(){if(!this._config?.entity||!this.hass)return["off","on"];const t=this.hass.states[this._config.entity];if(!t)return["off","on"];const e=this._config.entity.split(".")[0];return"input_select"===e&&t.attributes.options?t.attributes.options:"input_boolean"===e||"switch"===e?["on","off"]:"light"===e?["on","off","unavailable"]:["on","off"]}render(){if(!this.hass||!this._config)return q``;const t=this._getEntityStates();return q`
      <div class="card-config">
        
        <!-- ========== ENTITY CONFIGURATION ========== -->
        <ha-expansion-panel .header=${"Entity Configuration"} .expanded=${!0} .leftChevron=${!0}>
          <div slot="icons">
            <ha-icon icon="mdi:card-bulleted"></ha-icon>
          </div>
          <div class="panel-content">
            
            <!-- Entity Selector -->
            <ha-selector
              .hass=${this.hass}
              .selector=${{entity:{domain:["input_boolean","input_select","switch","light"]}}}
              .value=${this._config.entity}
              .label=${"Entity"}
              .required=${!0}
              @value-changed=${t=>{this._config&&(this._config={...this._config,entity:t.detail.value},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})),this.requestUpdate())}}
            ></ha-selector>

            
            <!-- Appearance Subsection -->
            <details class="subsection-details" open>
              <summary class="subsection-summary">Appearance</summary>
              <div class="subsection-content">
                <ha-textfield
              id="name"
              label="Name (Optional)"
              .value=${this._config.name||""}
              @input=${this._valueChanged}
            ></ha-textfield>

            <ha-selector
              .hass=${this.hass}
              .selector=${{icon:{}}}
              .value=${this._config.icon}
              .label=${"Icon"}
              @value-changed=${t=>{this._config&&(this._config={...this._config,icon:t.detail.value},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}}
            ></ha-selector>

            <ha-selector
              .hass=${this.hass}
              .selector=${{number:{min:0,max:1,step:.1,mode:"slider"}}}
              .value=${this._config.opacity??1}
              .label=${"Background Opacity"}
              @value-changed=${t=>{this._config&&(this._config={...this._config,opacity:t.detail.value},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}}
            ></ha-selector>

            <div class="toggle-row">
              <span>Show Name</span>
              <ha-switch
                .checked=${this._config.show_name??!0}
                @change=${t=>{this._config&&(this._config={...this._config,show_name:t.target.checked},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}}
              ></ha-switch>
            </div>

            <div class="toggle-row">
              <span>Show State Label</span>
              <ha-switch
                .checked=${this._config.show_state??!0}
                @change=${t=>{this._config&&(this._config={...this._config,show_state:t.target.checked},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}}
              ></ha-switch>
            </div>

            <ha-selector
              .hass=${this.hass}
              .selector=${{select:{options:[{value:"default",label:"Default"},{value:"compact",label:"Compact"},{value:"minimal",label:"Minimal"},{value:"large",label:"Large"}]}}}
              .value=${this._config.layout||"default"}
              .label=${"Layout Preset"}
              @value-changed=${t=>{this._config&&(this._config={...this._config,layout:t.detail.value},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}}
            ></ha-selector>

            <ha-selector
              .hass=${this.hass}
              .selector=${{text:{multiline:!0}}}
              .value=${this._config.custom_css||""}
              .label=${"Custom CSS"}
              @value-changed=${t=>{this._config&&(this._config={...this._config,custom_css:t.detail.value},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}}
            ></ha-selector>
              </div>
            </details>

            <!-- States Subsection -->
            ${this._config.entity?q`
              <details class="subsection-details" open>
                <summary class="subsection-summary">States</summary>
                <div class="subsection-content">
                  <div class="states">
                ${t.map(t=>{const e=!this._config?.hidden_states?.includes(t);return q`
                    <details class="state-details" ?open=${e}>
                      <summary class="state-summary">
                        <ha-switch
                          .checked=${e}
                          @change=${e=>this._visibilityChanged(t,e)}
                          @click=${t=>t.stopPropagation()}
                        ></ha-switch>
                        <span>State: "${t}"</span>
                      </summary>
                      ${e?q`
                        <div class="state-config">
                          <ha-selector
                            .hass=${this.hass}
                            .selector=${{text:{}}}
                            .value=${this._config?.state_labels?.[t]||""}
                            .label=${"Custom Label"}
                            @value-changed=${e=>{if(!this._config)return;const i={...this._config.state_labels};e.detail.value?i[t]=e.detail.value:delete i[t],this._config={...this._config,state_labels:i},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}}
                          ></ha-selector>

                          <ha-selector
                            .hass=${this.hass}
                            .selector=${{icon:{}}}
                            .value=${this._config?.state_icons?.[t]||""}
                            .label=${"State Icon"}
                            @value-changed=${e=>{if(!this._config)return;const i={...this._config.state_icons};e.detail.value?i[t]=e.detail.value:delete i[t],this._config={...this._config,state_icons:i},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}}
                          ></ha-selector>

                          <div class="color-row">
                            <ha-switch
                              .checked=${!!this._config?.state_colors?.[t]}
                              @change=${e=>{if(!this._config)return;const i=e.target.checked,s={...this._config.state_colors};i?s[t]="#5294e2":delete s[t],this._config={...this._config,state_colors:s},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}}
                            ></ha-switch>
                            <span>Custom Background Color</span>
                            ${this._config?.state_colors?.[t]?q`
                              <ha-selector
                                .hass=${this.hass}
                                .selector=${{color_rgb:{}}}
                                .value=${(()=>{const e=this._config?.state_colors?.[t];if(!e)return[82,148,226];const i=e.replace("#","");return[parseInt(i.substr(0,2),16),parseInt(i.substr(2,2),16),parseInt(i.substr(4,2),16)]})()}
                                @value-changed=${e=>{if(!this._config)return;const i=`#${e.detail.value.map(t=>t.toString(16).padStart(2,"0")).join("")}`,s={...this._config.state_colors};s[t]=i,this._config={...this._config,state_colors:s},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}}
                              ></ha-selector>
                            `:""}
                          </div>

                          <ha-selector
                            .hass=${this.hass}
                            .selector=${{color_rgb:{}}}
                            .value=${(()=>{const e=(this._config?.icon_colors?.[t]||"#ffffff").replace("#","");return[parseInt(e.substr(0,2),16),parseInt(e.substr(2,2),16),parseInt(e.substr(4,2),16)]})()}
                            .label=${"Icon Color"}
                            @value-changed=${e=>{if(!this._config)return;const i=`#${e.detail.value.map(t=>t.toString(16).padStart(2,"0")).join("")}`,s={...this._config.icon_colors};s[t]=i,this._config={...this._config,icon_colors:s},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}}
                          ></ha-selector>

                          <ha-selector
                            .hass=${this.hass}
                            .selector=${{color_rgb:{}}}
                            .value=${(()=>{const e=(this._config?.text_colors?.[t]||"#ffffff").replace("#","");return[parseInt(e.substr(0,2),16),parseInt(e.substr(2,2),16),parseInt(e.substr(4,2),16)]})()}
                            .label=${"Text Color"}
                            @value-changed=${e=>{if(!this._config)return;const i=`#${e.detail.value.map(t=>t.toString(16).padStart(2,"0")).join("")}`,s={...this._config.text_colors};s[t]=i,this._config={...this._config,text_colors:s},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}}
                          ></ha-selector>
                        </div>
                      `:""}
                    </details>
                  `})}
                  </div>
                </div>
              </details>
            `:""}
          </div>
        </ha-expansion-panel>

        <!-- ========== BADGE (INDICATOR) ========== -->
        <ha-expansion-panel .header=${"Badge (Indicator)"} .expanded=${!1} .leftChevron=${!0}>
          <div slot="icons">
            <ha-icon icon="mdi:circle-small"></ha-icon>
          </div>
          <div class="panel-content">
            
            <ha-selector
              .hass=${this.hass}
              .selector=${{entity:{}}}
              .value=${this._config.badge_entity}
              .label=${"Badge Entity (Optional)"}
              @value-changed=${t=>{this._config&&(this._config={...this._config,badge_entity:t.detail.value},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})),this.requestUpdate())}}
            ></ha-selector>

            ${this._config.badge_entity?q`
              <details class="subsection-details" open>
                <summary class="subsection-summary">Appearance</summary>
                <div class="subsection-content">
                  <ha-selector
                .hass=${this.hass}
                .selector=${{select:{options:[{value:"top-left",label:"Top Left"},{value:"top-right",label:"Top Right"},{value:"bottom-left",label:"Bottom Left"},{value:"bottom-right",label:"Bottom Right"}]}}}
                .value=${this._config.badge_position||"top-right"}
                .label=${"Badge Position"}
                @value-changed=${t=>{this._config&&(this._config={...this._config,badge_position:t.detail.value},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}}
              ></ha-selector>

              <ha-selector
                .hass=${this.hass}
                .selector=${{number:{min:16,max:64,step:2,mode:"slider"}}}
                .value=${this._config.badge_size||32}
                .label=${"Badge Size"}
                @value-changed=${t=>{this._config&&(this._config={...this._config,badge_size:t.detail.value},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}}
              ></ha-selector>

              <ha-selector
                .hass=${this.hass}
                .selector=${{number:{min:0,max:32,step:2,mode:"slider"}}}
                .value=${this._config.badge_offset||8}
                .label=${"Badge Offset"}
                @value-changed=${t=>{this._config&&(this._config={...this._config,badge_offset:t.detail.value},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}}
              ></ha-selector>

              <div class="toggle-row">
                <span>Show State Text on Badge</span>
                <ha-switch
                  .checked=${this._config.badge_show_state??!1}
                  @change=${t=>{this._config&&(this._config={...this._config,badge_show_state:t.target.checked},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}}
                ></ha-switch>
              </div>


                </div>
              </details>
            `:""}
          </div>
        </ha-expansion-panel>

        <!-- ========== INTERACTIONS ========== -->
        <ha-expansion-panel .header=${"Interactions"} .expanded=${!1} .leftChevron=${!0}>
          <div slot="icons">
            <ha-icon icon="mdi:gesture-tap"></ha-icon>
          </div>
          <div class="panel-content">

            <div style="background: var(--secondary-background-color); padding: 12px; border-radius: 4px; margin-bottom: 16px; font-size: 13px; color: var(--secondary-text-color);">
              💡 <strong>Tap</strong> always cycles through entity states
            </div>
            
            <div class="section-header">Hold Action</div>

            <ha-selector
              .hass=${this.hass}
              .selector=${{select:{options:[{value:"entity",label:"Show Entity Info"},...this._config.badge_entity?[{value:"badge",label:"Show Badge Info"}]:[]]}}}
              .value=${this._config.hold_target||"entity"}
              .label=${"Hold Target"}
              @value-changed=${t=>{this._config&&(this._config={...this._config,hold_target:t.detail.value},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}}
            ></ha-selector>

            <ha-selector
              .hass=${this.hass}
              .selector=${{"ui-action":{}}}
              .value=${this._config.hold_action||{action:"more-info"}}
              .label=${"Hold Action"}
              @value-changed=${t=>{this._config&&(this._config={...this._config,hold_action:t.detail.value},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}}
            ></ha-selector>

            <div class="section-header">Double Tap Action</div>

            <ha-selector
              .hass=${this.hass}
              .selector=${{select:{options:[{value:"entity",label:"Show Entity Info"},...this._config.badge_entity?[{value:"badge",label:"Show Badge Info"}]:[]]}}}
              .value=${this._config.double_tap_target||"entity"}
              .label=${"Double Tap Target"}
              @value-changed=${t=>{this._config&&(this._config={...this._config,double_tap_target:t.detail.value},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}}
            ></ha-selector>

            <ha-selector
              .hass=${this.hass}
              .selector=${{"ui-action":{}}}
              .value=${this._config.double_tap_action||{action:"none"}}
              .label=${"Double Tap Action"}
              @value-changed=${t=>{this._config&&(this._config={...this._config,double_tap_action:t.detail.value},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}}
            ></ha-selector>

            ${this._config.badge_entity?q`
              <div class="section-header">Badge Tap Action</div>

              <ha-selector
                .hass=${this.hass}
                .selector=${{"ui-action":{}}}
                .value=${this._config.badge_tap_action||{action:"more-info"}}
                .label=${"Badge Tap Action"}
                @value-changed=${t=>{this._config&&(this._config={...this._config,badge_tap_action:t.detail.value},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}}
              ></ha-selector>
            `:""}

          </div>
        </ha-expansion-panel>

      </div>
    `}};bt.styles=mt,t([gt({attribute:!1})],bt.prototype,"hass",void 0),t([gt({attribute:!1})],bt.prototype,"_config",void 0),bt=t([ht("mk-state-card-editor")],bt);const $t=a`
  ha-card {
    cursor: pointer;
    transition: transform 0.1s;
    touch-action: manipulation;
  }
  ha-card:active {
    transform: scale(0.98);
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
    min-height: 100px;
  }
  ha-icon {
    --mdc-icon-size: 48px;
    margin-bottom: 12px;
  }
  .state {
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
  }
  
  /* Layout Presets */
  .layout-compact .content {
    padding: 12px;
    min-height: 60px;
  }
  .layout-compact ha-icon {
    --mdc-icon-size: 32px;
    margin-bottom: 6px;
  }
  .layout-compact .state {
    font-size: 14px;
  }
  
  .layout-minimal .content {
    padding: 8px;
    min-height: 40px;
  }
  .layout-minimal ha-icon {
    --mdc-icon-size: 24px;
    margin-bottom: 4px;
  }
  .layout-minimal .state {
    font-size: 12px;
  }
  
  .layout-large .content {
    padding: 32px;
    min-height: 140px;
  }
  .layout-large ha-icon {
    --mdc-icon-size: 64px;
    margin-bottom: 16px;
  }
  .layout-large .state {
    font-size: 24px;
  }
  
  /* Badge Styles */
  .badge {
    position: absolute;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
    color: white;
    z-index: 1;
    transition: all 0.3s ease;
    cursor: pointer;
  }
  .badge.top-left {
    top: 8px;
    left: 8px;
  }
  .badge.top-right {
    top: 8px;
    right: 8px;
  }
  .badge.bottom-left {
    bottom: 8px;
    left: 8px;
  }
  .badge.bottom-right {
    bottom: 8px;
    right: 8px;
  }
`;console.info("%c MK-STATE-CARD %c Version 1.0.1 ","color: white; background: #03a9f4; font-weight: 700;","color: #03a9f4; background: white; font-weight: 700;");let yt=class extends lt{constructor(){super(...arguments),this._holdTriggered=!1}static getConfigElement(){return document.createElement("mk-state-card-editor")}static getStubConfig(){return{type:"mk-state-card",entity:"",show_name:!0,show_state:!0,layout:"default",state_colors:{},state_labels:{},hidden_states:[]}}setConfig(t){if(!t.entity)throw new Error("You must define an entity");this.config=t}getCardSize(){return 1}_handleAction(t){if(!this.config||!this.hass)return;if("tap"===t){const t=this.config.entity,e=t.split(".")[0],i=this.hass.states[t];if("input_select"===e&&i.attributes.options){const e=i.attributes.options,s=this.config.hidden_states||[],o=e.filter(t=>!s.includes(t)),n=o.indexOf(i.state),a=o[(n+1)%o.length];this.hass.callService("input_select","select_option",{entity_id:t,option:a})}else this.hass.callService("homeassistant","toggle",{entity_id:t});return}const e=this.config[`${t}_action`]||("hold"===t?{action:"more-info"}:{action:"none"});let i=this.config.entity;switch(("hold"===t&&"badge"===this.config.hold_target&&this.config.badge_entity||"double_tap"===t&&"badge"===this.config.double_tap_target&&this.config.badge_entity)&&(i=this.config.badge_entity),e.action){case"more-info":const t=new Event("hass-more-info",{bubbles:!0,composed:!0});t.detail={entityId:i},this.dispatchEvent(t);break;case"toggle":this.hass.callService("homeassistant","toggle",{entity_id:i});break;case"navigate":if(e.navigation_path){history.pushState(null,"",e.navigation_path);const t=new Event("location-changed",{bubbles:!0,composed:!0});window.dispatchEvent(t)}break;case"url":e.url_path&&window.open(e.url_path);break;case"call-service":if(e.service){const[t,i]=e.service.split(".");this.hass.callService(t,i,e.service_data||{})}}}_handleClick(){this._handleAction("tap")}_handleHold(){this._handleAction("hold")}_handleDoubleClick(){this._handleAction("double_tap")}_startHold(){this._holdTriggered=!1,this._holdTimer=window.setTimeout(()=>{this._holdTriggered=!0,this._handleAction("hold")},500)}_endHold(){this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=void 0)}_handleBadgeClick(){if(!this.config||!this.hass||!this.config.badge_entity)return;const t=this.config.badge_tap_action||{action:"more-info"};switch(t.action){case"more-info":const e=new Event("hass-more-info",{bubbles:!0,composed:!0});e.detail={entityId:this.config.badge_entity},this.dispatchEvent(e);break;case"toggle":const i=this.config.badge_entity,s=i.split(".")[0],o=this.hass.states[i];if("input_select"===s&&o.attributes.options){const t=o.attributes.options,e=t.indexOf(o.state),s=t[(e+1)%t.length];this.hass.callService("input_select","select_option",{entity_id:i,option:s})}else this.hass.callService("homeassistant","toggle",{entity_id:i});break;case"navigate":if(t.navigation_path){history.pushState(null,"",t.navigation_path);const e=new Event("location-changed",{bubbles:!0,composed:!0});window.dispatchEvent(e)}break;case"url":t.url_path&&window.open(t.url_path);break;case"call-service":if(t.service){const[e,i]=t.service.split(".");this.hass.callService(e,i,t.service_data||{})}}}render(){if(!this.config||!this.hass)return q``;if(!this.config.entity)return q`<ha-card><div class="content">Please select an entity in card configuration</div></ha-card>`;const t=this.hass.states[this.config.entity];if(!t)return q`<ha-card><div class="content">Entity not found: ${this.config.entity}</div></ha-card>`;const e=t.state,i=this.config.state_colors?.[e],s=this.config.opacity??1,o=this.config.state_icons?.[e]||this.config.icon||t.attributes.icon||"mdi:toggle-switch",n=this.config.icon_colors?.[e]||"#ffffff",a=this.config.text_colors?.[e]||"#ffffff",c=this.config.name||t.attributes.friendly_name||this.config.entity,l=this.config.state_labels?.[e]||e,r=this.config.show_name??!0,h=this.config.show_state??!0,d=this.config.layout||"default",p=this.config.custom_css||"",g=this.config.badge_entity?this.hass.states[this.config.badge_entity]:null,f=g?.state||"",u=this.config.badge_colors?.[f]||(t=>{const e=t.toLowerCase();return["on","yes","true","active","enabled","open","home","unlocked","playing","running"].includes(e)?"#4caf50":["off","no","false","inactive","disabled","closed","away","locked","paused","stopped","unavailable"].includes(e)?"#f44336":"#03a9f4"})(f),_=this.config.badge_size||24,v=(this.config.badge_offset,this.config.badge_position||"top-right"),m=this.config.badge_show_state??!1;return q`
      <style>
        ${p?`:host { ${p} }`:""}
      </style>
      <ha-card
        class="layout-${d}"
        style="${i?`background-color: ${i};`:""} opacity: ${s}; position: relative;"
        @click=${t=>{this._holdTriggered||this._handleClick(),this._endHold()}}
        @dblclick=${this._handleDoubleClick}
        @pointerdown=${this._startHold}
        @pointerup=${this._endHold}
        @pointercancel=${this._endHold}
      >
        ${g?q`
          <div
            class="badge ${v}"
            style="background-color: ${u}; width: ${_}px; height: ${_}px; font-size: ${.5*_}px;"
            @click=${t=>{t.stopPropagation(),this._handleBadgeClick()}}
          >
            ${m?f:"●"}
          </div>
        `:""}
        <div class="content" style="color: ${a};">
          ${r?q`<div style="font-size: 14px; opacity: 0.8; margin-bottom: 8px;">${c}</div>`:""}
          <ha-icon icon="${o}" style="color: ${n};"></ha-icon>
          ${h?q`<div class="state">${l}</div>`:""}
        </div>
      </ha-card>
    `}};yt.styles=$t,t([gt({attribute:!1})],yt.prototype,"hass",void 0),t([gt({attribute:!1})],yt.prototype,"config",void 0),yt=t([ht("mk-state-card")],yt),window.customCards=window.customCards||[],window.customCards.push({type:"mk-state-card",name:"MK State",description:"Toggle entities with colored states",preview:!0}),console.info("%c MK COLLECTION LOADED ","color: white; background: #607d8b; font-weight: bold; padding: 4px; border-radius: 4px;");
//# sourceMappingURL=mk-ha-collection.js.map
