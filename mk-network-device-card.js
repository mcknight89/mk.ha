function t(t,e,i,s){var n,o=arguments.length,a=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(a=(o<3?n(a):o>3?n(e,i,a):n(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new o(i,t,s)},r=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:c,defineProperty:h,getOwnPropertyDescriptor:l,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,f=globalThis,_=f.trustedTypes,g=_?_.emptyScript:"",$=f.reactiveElementPolyfillSupport,v=(t,e)=>t,m={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!c(t,e),b={attribute:!0,type:String,converter:m,reflect:!1,useDefault:!1,hasChanged:y};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&h(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const o=s?.call(this);n?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),n=e.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:m).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:m;this._$Em=s;const o=n.fromAttribute(e,t.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const s=this.constructor,n=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??y)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==n||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[v("elementProperties")]=new Map,w[v("finalized")]=new Map,$?.({ReactiveElement:w}),(f.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A=globalThis,E=A.trustedTypes,x=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+S,P=`<${O}>`,k=document,M=()=>k.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,N="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,D=/>/g,L=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,j=/"/g,I=/^(?:script|style|textarea|title)$/i,W=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),B=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),q=new WeakMap,K=k.createTreeWalker(k,129);function F(t,e){if(!T(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(e):e}const J=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":3===e?"<math>":"",a=R;for(let e=0;e<i;e++){const i=t[e];let r,c,h=-1,l=0;for(;l<i.length&&(a.lastIndex=l,c=a.exec(i),null!==c);)l=a.lastIndex,a===R?"!--"===c[1]?a=H:void 0!==c[1]?a=D:void 0!==c[2]?(I.test(c[2])&&(n=RegExp("</"+c[2],"g")),a=L):void 0!==c[3]&&(a=L):a===L?">"===c[0]?(a=n??R,h=-1):void 0===c[1]?h=-2:(h=a.lastIndex-c[2].length,r=c[1],a=void 0===c[3]?L:'"'===c[3]?j:z):a===j||a===z?a=L:a===H||a===D?a=R:(a=L,n=void 0);const d=a===L&&t[e+1].startsWith("/>")?" ":"";o+=a===R?i+P:h>=0?(s.push(r),i.slice(0,h)+C+i.slice(h)+S+d):i+S+(-2===h?e:d)}return[F(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class Z{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const a=t.length-1,r=this.parts,[c,h]=J(t,e);if(this.el=Z.createElement(c,i),K.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=K.nextNode())&&r.length<a;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(C)){const e=h[o++],i=s.getAttribute(t).split(S),a=/([.?@])?(.*)/.exec(e);r.push({type:1,index:n,name:a[2],strings:i,ctor:"."===a[1]?tt:"?"===a[1]?et:"@"===a[1]?it:X}),s.removeAttribute(t)}else t.startsWith(S)&&(r.push({type:6,index:n}),s.removeAttribute(t));if(I.test(s.tagName)){const t=s.textContent.split(S),e=t.length-1;if(e>0){s.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],M()),K.nextNode(),r.push({type:2,index:++n});s.append(t[e],M())}}}else if(8===s.nodeType)if(s.data===O)r.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(S,t+1));)r.push({type:7,index:n}),t+=S.length-1}n++}}static createElement(t,e){const i=k.createElement("template");return i.innerHTML=t,i}}function Y(t,e,i=t,s){if(e===B)return e;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const o=U(e)?void 0:e._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(t),n._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(e=Y(t,n._$AS(t,e.values),n,s)),e}class G{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??k).importNode(e,!0);K.currentNode=s;let n=K.nextNode(),o=0,a=0,r=i[0];for(;void 0!==r;){if(o===r.index){let e;2===r.type?e=new Q(n,n.nextSibling,this,t):1===r.type?e=new r.ctor(n,r.name,r.strings,this,t):6===r.type&&(e=new st(n,this,t)),this._$AV.push(e),r=i[++a]}o!==r?.index&&(n=K.nextNode(),o++)}return K.currentNode=k,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),U(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>T(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(k.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Z.createElement(F(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new G(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new Z(t)),e}k(t){T(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new Q(this.O(M()),this.O(M()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=Y(this,t,e,0),o=!U(t)||t!==this._$AH&&t!==B,o&&(this._$AH=t);else{const s=t;let a,r;for(t=n[0],a=0;a<n.length-1;a++)r=Y(this,s[i+a],e,a),r===B&&(r=this._$AH[a]),o||=!U(r)||r!==this._$AH[a],r===V?t=V:t!==V&&(t+=(r??"")+n[a+1]),this._$AH[a]=r}o&&!s&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class et extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class it extends X{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??V)===B)return;const i=this._$AH,s=t===V&&i!==V||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==V&&(i===V||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const nt=A.litHtmlPolyfillSupport;nt?.(Z,Q),(A.litHtmlVersions??=[]).push("3.3.1");const ot=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class at extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let n=s._$litPart$;if(void 0===n){const t=i?.renderBefore??null;s._$litPart$=n=new Q(e.insertBefore(M(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}}at._$litElement$=!0,at.finalized=!0,ot.litElementHydrateSupport?.({LitElement:at});const rt=ot.litElementPolyfillSupport;rt?.({LitElement:at}),(ot.litElementVersions??=[]).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ht={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:y},lt=(t=ht,e,i)=>{const{kind:s,metadata:n}=i;let o=globalThis.litPropertyMetadata.get(n);if(void 0===o&&globalThis.litPropertyMetadata.set(n,o=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,n,t)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const n=this[s];e.call(this,i),this.requestUpdate(s,n,t)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function dt(t){return(e,i)=>"object"==typeof i?lt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}const pt=a`
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
`;let ft=class extends at{setConfig(t){this._config={show_last_seen:!0,show_wol_button:!0,confirm_wol:!0,online_color:"#4caf50",offline_color:"#f44336",layout:"default",...t}}_valueChanged(t){if(!this._config)return;const e=t.target,i=e.configValue||e.id,s=void 0!==t.detail?.value?t.detail.value:e.value;i&&(this._config={...this._config,[i]:s},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}render(){return this.hass&&this._config?W`
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

            ${this._config.show_wol_button?W`
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
    `:W``}};ft.styles=ut,t([dt({attribute:!1})],ft.prototype,"hass",void 0),t([dt({attribute:!1})],ft.prototype,"_config",void 0),ft=t([ct("mk-network-device-card-editor")],ft),console.info("%c MK-NETWORK-DEVICE-CARD %c Version 1.0.1 ","color: white; background: #4caf50; font-weight: 700;","color: #4caf50; background: white; font-weight: 700;");let _t=class extends at{setConfig(t){if(!t.entity)throw new Error("You need to define an entity (ping binary_sensor)");this.config={show_last_seen:!0,show_wol_button:!0,confirm_wol:!0,online_color:"#4caf50",offline_color:"#f44336",layout:"default",...t}}getCardSize(){return 1}_handleWol(){if(this.hass&&this.config&&(!1===this.config.confirm_wol||confirm("Are you sure you want to wake this device?")))if(this.config.wol_entity){const t=this.config.wol_entity.split(".")[0];"button"===t?this.hass.callService("button","press",{entity_id:this.config.wol_entity}):"switch"===t&&this.hass.callService("switch","turn_on",{entity_id:this.config.wol_entity})}else this.config.mac_address&&this.hass.callService("wake_on_lan","send_magic_packet",{mac:this.config.mac_address})}_handleTap(){if(!this.config||!this.hass)return;const t=this.config.tap_action||{action:"more-info"};if("more-info"===t.action){const t=new CustomEvent("hass-more-info",{detail:{entityId:this.config.entity},bubbles:!0,composed:!0});this.dispatchEvent(t)}else if("navigate"===t.action&&t.navigation_path){history.pushState(null,"",t.navigation_path);const e=new Event("location-changed",{bubbles:!0,composed:!0});window.dispatchEvent(e)}else if("url"===t.action&&t.url_path)window.open(t.url_path);else if("call-service"===t.action&&t.service){const[e,i]=t.service.split(".");this.hass.callService(e,i,t.service_data||{})}else"toggle"===t.action&&this.hass.callService("homeassistant","toggle",{entity_id:this.config.entity})}_formatLastSeen(t){const e=new Date(t),i=(new Date).getTime()-e.getTime(),s=Math.floor(i/6e4),n=Math.floor(s/60),o=Math.floor(n/24);return s<1?"Just now":s<60?`${s} minute${s>1?"s":""} ago`:n<24?`${n} hour${n>1?"s":""} ago`:`${o} day${o>1?"s":""} ago`}render(){if(!this.config||!this.hass)return W``;const t=this.hass.states[this.config.entity];if(!t)return W`
        <ha-card>
          <div class="header">
            <div>Entity not found: ${this.config.entity}</div>
          </div>
        </ha-card>
      `;const e="on"===t.state,i=e?this.config.online_color:this.config.offline_color,s=this.config.icon||"mdi:lan",n=this.config.name||t.attributes.friendly_name||this.config.entity,o=this.config.layout||"default",a=this.config.show_wol_button&&(this.config.wol_entity||this.config.mac_address)&&!e;return W`
      <ha-card class="layout-${o}">
        <div class="header" @click=${this._handleTap}>
          <ha-icon icon="${s}" style="color: ${i};"></ha-icon>
          <div class="header-info">
            <div class="device-name">${n}</div>
            <div class="status">
              <div class="status-dot ${e?"online":"offline"}" style="background-color: ${i};"></div>
              <span>${e?"Online":"Offline"}</span>
            </div>
            ${this.config.show_last_seen&&!e&&t.last_changed?W`
              <div class="last-seen">Last seen: ${this._formatLastSeen(t.last_changed)}</div>
            `:""}
          </div>
          ${a?W`
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
    `}};_t.styles=pt,t([dt({attribute:!1})],_t.prototype,"hass",void 0),t([dt({attribute:!1})],_t.prototype,"config",void 0),_t=t([ct("mk-network-device-card")],_t),_t.getConfigElement=()=>document.createElement("mk-network-device-card-editor"),_t.getStubConfig=()=>({type:"custom:mk-network-device-card",entity:"",show_last_seen:!0,show_wol_button:!0,confirm_wol:!0,online_color:"#4caf50",offline_color:"#f44336",layout:"default"}),window.customCards=window.customCards||[],window.customCards.push({type:"mk-network-device-card",name:"MK Network Device Card",description:"Monitor network devices with ping status and WOL support",preview:!0});export{_t as MkNetworkDeviceCard};
//# sourceMappingURL=mk-network-device-card.js.map
