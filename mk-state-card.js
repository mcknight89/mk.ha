function t(t,e,s,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,s,i);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(n<3?o(a):n>3?o(e,s,a):o(e,s))||a);return n>3&&a&&Object.defineProperty(e,s,a),a}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),o=new WeakMap;let n=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&o.set(e,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new n(s,t,i)},c=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:r,defineProperty:h,getOwnPropertyDescriptor:l,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:g}=Object,u=globalThis,f=u.trustedTypes,_=f?f.emptyScript:"",m=u.reactiveElementPolyfillSupport,b=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},v=(t,e)=>!r(t,e),y={attribute:!0,type:String,converter:$,reflect:!1,useDefault:!1,hasChanged:v};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&h(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const n=i?.call(this);o?.call(this,e),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=g(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of i){const i=document.createElement("style"),o=e.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const o=(void 0!==s.converter?.toAttribute?s.converter:$).toAttribute(e,s.type);this._$Em=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=i;const n=o.fromAttribute(e,t.type);this[i]=n??this._$Ej?.get(i)??n,this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){const i=this.constructor,o=this[t];if(s??=i.getPropertyOptions(t),!((s.hasChanged??v)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:o},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==o||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[b("elementProperties")]=new Map,w[b("finalized")]=new Map,m?.({ReactiveElement:w}),(u.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,E=x.trustedTypes,A=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,k="?"+C,T=`<${k}>`,P=document,O=()=>P.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,R="[ \t\n\f\r]",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,N=/>/g,M=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,D=/"/g,j=/^(?:script|style|textarea|title)$/i,L=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),q=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),W=new WeakMap,K=P.createTreeWalker(P,129);function F(t,e){if(!H(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const G=(t,e)=>{const s=t.length-1,i=[];let o,n=2===e?"<svg>":3===e?"<math>":"",a=z;for(let e=0;e<s;e++){const s=t[e];let c,r,h=-1,l=0;for(;l<s.length&&(a.lastIndex=l,r=a.exec(s),null!==r);)l=a.lastIndex,a===z?"!--"===r[1]?a=I:void 0!==r[1]?a=N:void 0!==r[2]?(j.test(r[2])&&(o=RegExp("</"+r[2],"g")),a=M):void 0!==r[3]&&(a=M):a===M?">"===r[0]?(a=o??z,h=-1):void 0===r[1]?h=-2:(h=a.lastIndex-r[2].length,c=r[1],a=void 0===r[3]?M:'"'===r[3]?D:B):a===D||a===B?a=M:a===I||a===N?a=z:(a=M,o=void 0);const d=a===M&&t[e+1].startsWith("/>")?" ":"";n+=a===z?s+T:h>=0?(i.push(c),s.slice(0,h)+S+s.slice(h)+C+d):s+C+(-2===h?e:d)}return[F(t,n+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class J{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const a=t.length-1,c=this.parts,[r,h]=G(t,e);if(this.el=J.createElement(r,s),K.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=K.nextNode())&&c.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(S)){const e=h[n++],s=i.getAttribute(t).split(C),a=/([.?@])?(.*)/.exec(e);c.push({type:1,index:o,name:a[2],strings:s,ctor:"."===a[1]?tt:"?"===a[1]?et:"@"===a[1]?st:X}),i.removeAttribute(t)}else t.startsWith(C)&&(c.push({type:6,index:o}),i.removeAttribute(t));if(j.test(i.tagName)){const t=i.textContent.split(C),e=t.length-1;if(e>0){i.textContent=E?E.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],O()),K.nextNode(),c.push({type:2,index:++o});i.append(t[e],O())}}}else if(8===i.nodeType)if(i.data===k)c.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(C,t+1));)c.push({type:7,index:o}),t+=C.length-1}o++}}static createElement(t,e){const s=P.createElement("template");return s.innerHTML=t,s}}function Y(t,e,s=t,i){if(e===q)return e;let o=void 0!==i?s._$Co?.[i]:s._$Cl;const n=U(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=o:s._$Cl=o),void 0!==o&&(e=Y(t,o._$AS(t,e.values),o,i)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??P).importNode(e,!0);K.currentNode=i;let o=K.nextNode(),n=0,a=0,c=s[0];for(;void 0!==c;){if(n===c.index){let e;2===c.type?e=new Q(o,o.nextSibling,this,t):1===c.type?e=new c.ctor(o,c.name,c.strings,this,t):6===c.type&&(e=new it(o,this,t)),this._$AV.push(e),c=s[++a]}n!==c?.index&&(o=K.nextNode(),n++)}return K.currentNode=P,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),U(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>H(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=J.createElement(F(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Z(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new J(t)),e}k(t){H(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new Q(this.O(O()),this.O(O()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=V}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(void 0===o)t=Y(this,t,e,0),n=!U(t)||t!==this._$AH&&t!==q,n&&(this._$AH=t);else{const i=t;let a,c;for(t=o[0],a=0;a<o.length-1;a++)c=Y(this,i[s+a],e,a),c===q&&(c=this._$AH[a]),n||=!U(c)||c!==this._$AH[a],c===V?t=V:t!==V&&(t+=(c??"")+o[a+1]),this._$AH[a]=c}n&&!i&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class et extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class st extends X{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??V)===q)return;const s=this._$AH,i=t===V&&s!==V||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==V&&(s===V||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const ot=x.litHtmlPolyfillSupport;ot?.(J,Q),(x.litHtmlVersions??=[]).push("3.3.1");const nt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class at extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let o=i._$litPart$;if(void 0===o){const t=s?.renderBefore??null;i._$litPart$=o=new Q(e.insertBefore(O(),t),t,void 0,s??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}at._$litElement$=!0,at.finalized=!0,nt.litElementHydrateSupport?.({LitElement:at});const ct=nt.litElementPolyfillSupport;ct?.({LitElement:at}),(nt.litElementVersions??=[]).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const rt=t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ht={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:v},lt=(t=ht,e,s)=>{const{kind:i,metadata:o}=s;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),n.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const o=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,o,t)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const o=this[i];e.call(this,s),this.requestUpdate(i,o,t)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function dt(t){return(e,s)=>"object"==typeof s?lt(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}const pt=a`
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
`;let gt=class extends at{setConfig(t){this._config={state_colors:{},state_labels:{},state_icons:{},icon_colors:{},text_colors:{},hidden_states:[],...t}}_valueChanged(t){if(!this._config)return;const e=t.target,s=e.configValue||e.id,i=void 0!==t.detail?.value?t.detail.value:e.value;s&&(this._config={...this._config,[s]:i},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}_visibilityChanged(t,e){if(!this._config)return;const s=e.target.checked,i=[...this._config.hidden_states||[]];s||i.includes(t)?s&&i.includes(t)&&i.splice(i.indexOf(t),1):i.push(t),this._config={...this._config,hidden_states:i},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}_getEntityStates(){if(!this._config?.entity||!this.hass)return["off","on"];const t=this.hass.states[this._config.entity];if(!t)return["off","on"];const e=this._config.entity.split(".")[0];return"input_select"===e&&t.attributes.options?t.attributes.options:"input_boolean"===e||"switch"===e?["on","off"]:"light"===e?["on","off","unavailable"]:["on","off"]}render(){if(!this.hass||!this._config)return L``;const t=this._getEntityStates();return L`
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
            ${this._config.entity?L`
              <details class="subsection-details" open>
                <summary class="subsection-summary">States</summary>
                <div class="subsection-content">
                  <div class="states">
                ${t.map(t=>{const e=!this._config?.hidden_states?.includes(t);return L`
                    <details class="state-details" ?open=${e}>
                      <summary class="state-summary">
                        <ha-switch
                          .checked=${e}
                          @change=${e=>this._visibilityChanged(t,e)}
                          @click=${t=>t.stopPropagation()}
                        ></ha-switch>
                        <span>State: "${t}"</span>
                      </summary>
                      ${e?L`
                        <div class="state-config">
                          <ha-selector
                            .hass=${this.hass}
                            .selector=${{text:{}}}
                            .value=${this._config?.state_labels?.[t]||""}
                            .label=${"Custom Label"}
                            @value-changed=${e=>{if(!this._config)return;const s={...this._config.state_labels};e.detail.value?s[t]=e.detail.value:delete s[t],this._config={...this._config,state_labels:s},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}}
                          ></ha-selector>

                          <ha-selector
                            .hass=${this.hass}
                            .selector=${{icon:{}}}
                            .value=${this._config?.state_icons?.[t]||""}
                            .label=${"State Icon"}
                            @value-changed=${e=>{if(!this._config)return;const s={...this._config.state_icons};e.detail.value?s[t]=e.detail.value:delete s[t],this._config={...this._config,state_icons:s},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}}
                          ></ha-selector>

                          <div class="color-row">
                            <ha-switch
                              .checked=${!!this._config?.state_colors?.[t]}
                              @change=${e=>{if(!this._config)return;const s=e.target.checked,i={...this._config.state_colors};s?i[t]="#5294e2":delete i[t],this._config={...this._config,state_colors:i},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}}
                            ></ha-switch>
                            <span>Custom Background Color</span>
                            ${this._config?.state_colors?.[t]?L`
                              <ha-selector
                                .hass=${this.hass}
                                .selector=${{color_rgb:{}}}
                                .value=${(()=>{const e=this._config?.state_colors?.[t];if(!e)return[82,148,226];const s=e.replace("#","");return[parseInt(s.substr(0,2),16),parseInt(s.substr(2,2),16),parseInt(s.substr(4,2),16)]})()}
                                @value-changed=${e=>{if(!this._config)return;const s=`#${e.detail.value.map(t=>t.toString(16).padStart(2,"0")).join("")}`,i={...this._config.state_colors};i[t]=s,this._config={...this._config,state_colors:i},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}}
                              ></ha-selector>
                            `:""}
                          </div>

                          <ha-selector
                            .hass=${this.hass}
                            .selector=${{color_rgb:{}}}
                            .value=${(()=>{const e=(this._config?.icon_colors?.[t]||"#ffffff").replace("#","");return[parseInt(e.substr(0,2),16),parseInt(e.substr(2,2),16),parseInt(e.substr(4,2),16)]})()}
                            .label=${"Icon Color"}
                            @value-changed=${e=>{if(!this._config)return;const s=`#${e.detail.value.map(t=>t.toString(16).padStart(2,"0")).join("")}`,i={...this._config.icon_colors};i[t]=s,this._config={...this._config,icon_colors:i},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}}
                          ></ha-selector>

                          <ha-selector
                            .hass=${this.hass}
                            .selector=${{color_rgb:{}}}
                            .value=${(()=>{const e=(this._config?.text_colors?.[t]||"#ffffff").replace("#","");return[parseInt(e.substr(0,2),16),parseInt(e.substr(2,2),16),parseInt(e.substr(4,2),16)]})()}
                            .label=${"Text Color"}
                            @value-changed=${e=>{if(!this._config)return;const s=`#${e.detail.value.map(t=>t.toString(16).padStart(2,"0")).join("")}`,i={...this._config.text_colors};i[t]=s,this._config={...this._config,text_colors:i},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}}
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

            ${this._config.badge_entity?L`
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

            ${this._config.badge_entity?L`
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
    `}};gt.styles=pt,t([dt({attribute:!1})],gt.prototype,"hass",void 0),t([dt({attribute:!1})],gt.prototype,"_config",void 0),gt=t([rt("mk-state-card-editor")],gt);const ut=a`
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
`;console.info("%c MK-STATE-CARD %c Version 1.0.1 ","color: white; background: #03a9f4; font-weight: 700;","color: #03a9f4; background: white; font-weight: 700;");let ft=class extends at{constructor(){super(...arguments),this._holdTriggered=!1}static getConfigElement(){return document.createElement("mk-state-card-editor")}static getStubConfig(){return{type:"mk-state-card",entity:"",show_name:!0,show_state:!0,layout:"default",state_colors:{},state_labels:{},hidden_states:[]}}setConfig(t){if(!t.entity)throw new Error("You must define an entity");this.config=t}getCardSize(){return 1}_handleAction(t){if(!this.config||!this.hass)return;if("tap"===t){const t=this.config.entity,e=t.split(".")[0],s=this.hass.states[t];if("input_select"===e&&s.attributes.options){const e=s.attributes.options,i=this.config.hidden_states||[],o=e.filter(t=>!i.includes(t)),n=o.indexOf(s.state),a=o[(n+1)%o.length];this.hass.callService("input_select","select_option",{entity_id:t,option:a})}else this.hass.callService("homeassistant","toggle",{entity_id:t});return}const e=this.config[`${t}_action`]||("hold"===t?{action:"more-info"}:{action:"none"});let s=this.config.entity;switch(("hold"===t&&"badge"===this.config.hold_target&&this.config.badge_entity||"double_tap"===t&&"badge"===this.config.double_tap_target&&this.config.badge_entity)&&(s=this.config.badge_entity),e.action){case"more-info":const t=new Event("hass-more-info",{bubbles:!0,composed:!0});t.detail={entityId:s},this.dispatchEvent(t);break;case"toggle":this.hass.callService("homeassistant","toggle",{entity_id:s});break;case"navigate":if(e.navigation_path){history.pushState(null,"",e.navigation_path);const t=new Event("location-changed",{bubbles:!0,composed:!0});window.dispatchEvent(t)}break;case"url":e.url_path&&window.open(e.url_path);break;case"call-service":if(e.service){const[t,s]=e.service.split(".");this.hass.callService(t,s,e.service_data||{})}}}_handleClick(){this._handleAction("tap")}_handleHold(){this._handleAction("hold")}_handleDoubleClick(){this._handleAction("double_tap")}_startHold(){this._holdTriggered=!1,this._holdTimer=window.setTimeout(()=>{this._holdTriggered=!0,this._handleAction("hold")},500)}_endHold(){this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=void 0)}_handleBadgeClick(){if(!this.config||!this.hass||!this.config.badge_entity)return;const t=this.config.badge_tap_action||{action:"more-info"};switch(t.action){case"more-info":const e=new Event("hass-more-info",{bubbles:!0,composed:!0});e.detail={entityId:this.config.badge_entity},this.dispatchEvent(e);break;case"toggle":const s=this.config.badge_entity,i=s.split(".")[0],o=this.hass.states[s];if("input_select"===i&&o.attributes.options){const t=o.attributes.options,e=t.indexOf(o.state),i=t[(e+1)%t.length];this.hass.callService("input_select","select_option",{entity_id:s,option:i})}else this.hass.callService("homeassistant","toggle",{entity_id:s});break;case"navigate":if(t.navigation_path){history.pushState(null,"",t.navigation_path);const e=new Event("location-changed",{bubbles:!0,composed:!0});window.dispatchEvent(e)}break;case"url":t.url_path&&window.open(t.url_path);break;case"call-service":if(t.service){const[e,s]=t.service.split(".");this.hass.callService(e,s,t.service_data||{})}}}render(){if(!this.config||!this.hass)return L``;if(!this.config.entity)return L`<ha-card><div class="content">Please select an entity in card configuration</div></ha-card>`;const t=this.hass.states[this.config.entity];if(!t)return L`<ha-card><div class="content">Entity not found: ${this.config.entity}</div></ha-card>`;const e=t.state,s=this.config.state_colors?.[e],i=this.config.opacity??1,o=this.config.state_icons?.[e]||this.config.icon||t.attributes.icon||"mdi:toggle-switch",n=this.config.icon_colors?.[e]||"#ffffff",a=this.config.text_colors?.[e]||"#ffffff",c=this.config.name||t.attributes.friendly_name||this.config.entity,r=this.config.state_labels?.[e]||e,h=this.config.show_name??!0,l=this.config.show_state??!0,d=this.config.layout||"default",p=this.config.custom_css||"",g=this.config.badge_entity?this.hass.states[this.config.badge_entity]:null,u=g?.state||"",f=this.config.badge_colors?.[u]||(t=>{const e=t.toLowerCase();return["on","yes","true","active","enabled","open","home","unlocked","playing","running"].includes(e)?"#4caf50":["off","no","false","inactive","disabled","closed","away","locked","paused","stopped","unavailable"].includes(e)?"#f44336":"#03a9f4"})(u),_=this.config.badge_size||24;this.config.badge_offset;const m=this.config.badge_position||"top-right",b=this.config.badge_show_state??!1;return L`
      <style>
        ${p?`:host { ${p} }`:""}
      </style>
      <ha-card
        class="layout-${d}"
        style="${s?`background-color: ${s};`:""} opacity: ${i}; position: relative;"
        @click=${t=>{this._holdTriggered||this._handleClick(),this._endHold()}}
        @dblclick=${this._handleDoubleClick}
        @pointerdown=${this._startHold}
        @pointerup=${this._endHold}
        @pointercancel=${this._endHold}
      >
        ${g?L`
          <div
            class="badge ${m}"
            style="background-color: ${f}; width: ${_}px; height: ${_}px; font-size: ${.5*_}px;"
            @click=${t=>{t.stopPropagation(),this._handleBadgeClick()}}
          >
            ${b?u:"●"}
          </div>
        `:""}
        <div class="content" style="color: ${a};">
          ${h?L`<div style="font-size: 14px; opacity: 0.8; margin-bottom: 8px;">${c}</div>`:""}
          <ha-icon icon="${o}" style="color: ${n};"></ha-icon>
          ${l?L`<div class="state">${r}</div>`:""}
        </div>
      </ha-card>
    `}};ft.styles=ut,t([dt({attribute:!1})],ft.prototype,"hass",void 0),t([dt({attribute:!1})],ft.prototype,"config",void 0),ft=t([rt("mk-state-card")],ft),window.customCards=window.customCards||[],window.customCards.push({type:"mk-state-card",name:"MK State",description:"Toggle entities with colored states",preview:!0});export{ft as MkStateCard};
//# sourceMappingURL=mk-state-card.js.map
