function t(t,e,i,s){var o,n=arguments.length,a=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a}Object.create;Object.create;"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;let n=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new n(i,t,s)},c=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:h,defineProperty:l,getOwnPropertyDescriptor:r,getOwnPropertyNames:d,getOwnPropertySymbols:g,getPrototypeOf:f}=Object,p=globalThis,u=p.trustedTypes,_=u?u.emptyScript:"",v=p.reactiveElementPolyfillSupport,$=(t,e)=>t,m={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!h(t,e),y={attribute:!0,type:String,converter:m,reflect:!1,useDefault:!1,hasChanged:b};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&l(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=r(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const n=s?.call(this);o?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=f(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...d(t),...g(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),o=e.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:m).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:m;this._$Em=s;const n=o.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const s=this.constructor,o=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??b)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==o||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[$("elementProperties")]=new Map,w[$("finalized")]=new Map,v?.({ReactiveElement:w}),(p.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,E=x.trustedTypes,C=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,A="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,k="?"+S,O=`<${k}>`,P=document,T=()=>P.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,z=t=>U(t)||"function"==typeof t?.[Symbol.iterator],D="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,L=/>/g,I=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,j=/"/g,B=/^(?:script|style|textarea|title)$/i,W=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),q=W(1),V=(W(2),W(3),Symbol.for("lit-noChange")),K=Symbol.for("lit-nothing"),F=new WeakMap,J=P.createTreeWalker(P,129);function G(t,e){if(!U(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}const Z=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":3===e?"<math>":"",a=H;for(let e=0;e<i;e++){const i=t[e];let c,h,l=-1,r=0;for(;r<i.length&&(a.lastIndex=r,h=a.exec(i),null!==h);)r=a.lastIndex,a===H?"!--"===h[1]?a=N:void 0!==h[1]?a=L:void 0!==h[2]?(B.test(h[2])&&(o=RegExp("</"+h[2],"g")),a=I):void 0!==h[3]&&(a=I):a===I?">"===h[0]?(a=o??H,l=-1):void 0===h[1]?l=-2:(l=a.lastIndex-h[2].length,c=h[1],a=void 0===h[3]?I:'"'===h[3]?j:R):a===j||a===R?a=I:a===N||a===L?a=H:(a=I,o=void 0);const d=a===I&&t[e+1].startsWith("/>")?" ":"";n+=a===H?i+O:l>=0?(s.push(c),i.slice(0,l)+A+i.slice(l)+S+d):i+S+(-2===l?e:d)}return[G(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class Y{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const a=t.length-1,c=this.parts,[h,l]=Z(t,e);if(this.el=Y.createElement(h,i),J.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=J.nextNode())&&c.length<a;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(A)){const e=l[n++],i=s.getAttribute(t).split(S),a=/([.?@])?(.*)/.exec(e);c.push({type:1,index:o,name:a[2],strings:i,ctor:"."===a[1]?it:"?"===a[1]?st:"@"===a[1]?ot:et}),s.removeAttribute(t)}else t.startsWith(S)&&(c.push({type:6,index:o}),s.removeAttribute(t));if(B.test(s.tagName)){const t=s.textContent.split(S),e=t.length-1;if(e>0){s.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],T()),J.nextNode(),c.push({type:2,index:++o});s.append(t[e],T())}}}else if(8===s.nodeType)if(s.data===k)c.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(S,t+1));)c.push({type:7,index:o}),t+=S.length-1}o++}}static createElement(t,e){const i=P.createElement("template");return i.innerHTML=t,i}}function Q(t,e,i=t,s){if(e===V)return e;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const n=M(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(e=Q(t,o._$AS(t,e.values),o,s)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??P).importNode(e,!0);J.currentNode=s;let o=J.nextNode(),n=0,a=0,c=i[0];for(;void 0!==c;){if(n===c.index){let e;2===c.type?e=new tt(o,o.nextSibling,this,t):1===c.type?e=new c.ctor(o,c.name,c.strings,this,t):6===c.type&&(e=new nt(o,this,t)),this._$AV.push(e),c=i[++a]}n!==c?.index&&(o=J.nextNode(),n++)}return J.currentNode=P,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),M(t)?t===K||null==t||""===t?(this._$AH!==K&&this._$AR(),this._$AH=K):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):z(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==K&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Y.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new X(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new Y(t)),e}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new tt(this.O(T()),this.O(T()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=K,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=K}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=Q(this,t,e,0),n=!M(t)||t!==this._$AH&&t!==V,n&&(this._$AH=t);else{const s=t;let a,c;for(t=o[0],a=0;a<o.length-1;a++)c=Q(this,s[i+a],e,a),c===V&&(c=this._$AH[a]),n||=!M(c)||c!==this._$AH[a],c===K?t=K:t!==K&&(t+=(c??"")+o[a+1]),this._$AH[a]=c}n&&!s&&this.j(t)}j(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class it extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===K?void 0:t}}class st extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==K)}}class ot extends et{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??K)===V)return;const i=this._$AH,s=t===K&&i!==K||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==K&&(i===K||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const at=x.litHtmlPolyfillSupport;at?.(Y,tt),(x.litHtmlVersions??=[]).push("3.3.1");const ct=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ht extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new tt(e.insertBefore(T(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}ht._$litElement$=!0,ht.finalized=!0,ct.litElementHydrateSupport?.({LitElement:ht});const lt=ct.litElementPolyfillSupport;lt?.({LitElement:ht});(ct.litElementVersions??=[]).push("4.2.1");
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const rt=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},dt={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:b},gt=(t=dt,e,i)=>{const{kind:s,metadata:o}=i;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,o,t)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const o=this[s];e.call(this,i),this.requestUpdate(s,o,t)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ft(t){return(e,i)=>"object"==typeof i?gt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */console.info("%c MK-NETWORK-DEVICE-CARD %c Version 1.0.0 ","color: white; background: #4caf50; font-weight: 700;","color: #4caf50; background: white; font-weight: 700;");let pt=class extends ht{setConfig(t){this._config={show_history:!0,show_last_seen:!0,show_wol_button:!0,history_hours:24,online_color:"#4caf50",offline_color:"#f44336",layout:"default",...t}}_valueChanged(t){if(!this._config)return;const e=t.target,i=e.configValue||e.id,s=void 0!==t.detail?.value?t.detail.value:e.value;i&&(this._config={...this._config,[i]:s},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}render(){return this.hass&&this._config?q`
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
            <ha-switch
              .checked=${this._config.show_wol_button??!0}
              @change=${t=>{this._config&&(this._config={...this._config,show_wol_button:t.target.checked},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}}
            >
              Show WOL Button
            </ha-switch>

            ${this._config.show_wol_button?q`
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

        <ha-expansion-panel .header=${"History & Display"} .expanded=${!0} .leftChevron=${!0}>
          <div slot="icons">
            <ha-icon icon="mdi:chart-line"></ha-icon>
          </div>
          <div class="panel-content">
            <ha-switch
              .checked=${this._config.show_history??!0}
              @change=${t=>{this._config&&(this._config={...this._config,show_history:t.target.checked},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}}
            >
              Show History Graph
            </ha-switch>

            ${this._config.show_history?q`
              <ha-selector
                .hass=${this.hass}
                .selector=${{number:{min:1,max:168,step:1,mode:"box",unit_of_measurement:"hours"}}}
                .value=${this._config.history_hours||24}
                .label=${"History Hours"}
                @value-changed=${t=>{this._config&&(this._config={...this._config,history_hours:t.detail.value},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}}
              ></ha-selector>
            `:""}

            <ha-switch
              .checked=${this._config.show_last_seen??!0}
              @change=${t=>{this._config&&(this._config={...this._config,show_last_seen:t.target.checked},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}}
            >
              Show Last Seen
            </ha-switch>

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
    `:q``}};pt.styles=a`
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
  `,t([ft({attribute:!1})],pt.prototype,"hass",void 0),t([ft({attribute:!1})],pt.prototype,"_config",void 0),pt=t([rt("mk-network-device-card-editor")],pt);let ut=class extends ht{setConfig(t){if(!t.entity)throw new Error("You need to define an entity (ping binary_sensor)");this.config={show_history:!0,show_last_seen:!0,show_wol_button:!0,history_hours:24,online_color:"#4caf50",offline_color:"#f44336",layout:"default",...t}}getCardSize(){return this.config?.show_history?3:1}async _loadHistory(){if(!this.hass||!this.config?.entity||!this.config.show_history)return;const t=new Date,e=new Date(t.getTime()-60*(this.config.history_hours||24)*60*1e3);try{const i=await this.hass.callApi("GET",`history/period/${e.toISOString()}?filter_entity_id=${this.config.entity}&end_time=${t.toISOString()}`);this._historyData=i}catch(t){console.error("Failed to load history:",t)}}firstUpdated(){this._loadHistory(),setInterval(()=>this._loadHistory(),3e5)}_handleWol(){if(this.hass&&this.config)if(this.config.wol_entity){const t=this.config.wol_entity.split(".")[0];"button"===t?this.hass.callService("button","press",{entity_id:this.config.wol_entity}):"switch"===t&&this.hass.callService("switch","turn_on",{entity_id:this.config.wol_entity})}else this.config.mac_address&&this.hass.callService("wake_on_lan","send_magic_packet",{mac:this.config.mac_address})}_handleTap(){if(!this.config||!this.hass)return;if("more-info"===(this.config.tap_action||{action:"more-info"}).action){const t=new CustomEvent("hass-more-info",{detail:{entityId:this.config.entity},bubbles:!0,composed:!0});this.dispatchEvent(t)}}_formatLastSeen(t){const e=new Date(t),i=(new Date).getTime()-e.getTime(),s=Math.floor(i/6e4),o=Math.floor(s/60),n=Math.floor(o/24);return s<1?"Just now":s<60?`${s} minute${s>1?"s":""} ago`:o<24?`${o} hour${o>1?"s":""} ago`:`${n} day${n>1?"s":""} ago`}render(){if(!this.config||!this.hass)return q``;const t=this.hass.states[this.config.entity];if(!t)return q`
        <ha-card>
          <div class="header">
            <div>Entity not found: ${this.config.entity}</div>
          </div>
        </ha-card>
      `;const e="on"===t.state,i=e?this.config.online_color:this.config.offline_color,s=this.config.icon||"mdi:lan",o=this.config.name||t.attributes.friendly_name||this.config.entity,n=this.config.layout||"default",a=this.config.show_wol_button&&(this.config.wol_entity||this.config.mac_address);return q`
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
              ?disabled=${e}
            >
              <ha-icon icon="mdi:power" slot="icon"></ha-icon>
              Wake
            </mwc-button>
          `:""}
        </div>

        ${this.config.show_history?q`
          <div class="divider"></div>
          <div class="history">
            <ha-chart-base
              .hass=${this.hass}
              .data=${this._historyData}
              .unit=${t.attributes.unit_of_measurement}
              .isSingleDevice=${!0}
              chart-type="timeline"
              .hideLegend=${!0}
            ></ha-chart-base>
          </div>
        `:""}
      </ha-card>
    `}};ut.styles=a`
    :host {
      display: block;
      container-type: inline-size;
    }
    ha-card {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .header {
      display: flex;
      align-items: center;
      padding: 16px;
      gap: 12px;
      cursor: pointer;
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
    .history {
      padding: 0 16px 16px;
      flex: 1;
      min-height: 100px;
    }
    .divider {
      height: 1px;
      background: var(--divider-color);
      margin: 0 16px;
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
    .layout-compact .history {
      padding: 0 12px 12px;
      min-height: 80px;
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
    .layout-detailed .history {
      padding: 0 20px 20px;
      min-height: 150px;
    }
  `,t([ft({attribute:!1})],ut.prototype,"hass",void 0),t([ft({attribute:!1})],ut.prototype,"config",void 0),t([function(t){return ft({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */()],ut.prototype,"_historyData",void 0),ut=t([rt("mk-network-device-card")],ut),ut.getConfigElement=()=>document.createElement("mk-network-device-card-editor"),ut.getStubConfig=()=>({type:"custom:mk-network-device-card",entity:"",show_history:!0,show_last_seen:!0,show_wol_button:!0,history_hours:24,online_color:"#4caf50",offline_color:"#f44336",layout:"default"}),window.customCards=window.customCards||[],window.customCards.push({type:"mk-network-device-card",name:"MK Network Device Card",description:"Monitor network devices with ping status, WOL, and history",preview:!0}),console.info("%c MK-STATE-CARD %c Version 1.0.0 ","color: white; background: #03a9f4; font-weight: 700;","color: #03a9f4; background: white; font-weight: 700;");let _t=class extends ht{setConfig(t){this._config={state_colors:{},state_labels:{},hidden_states:[],...t}}_valueChanged(t){if(!this._config)return;const e=t.target,i=e.configValue||e.id,s=void 0!==t.detail?.value?t.detail.value:e.value;i&&(this._config={...this._config,[i]:s},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}_colorChanged(t,e){if(!this._config)return;const i=e.target.value,s={...this._config.state_colors};s[t]=i,this._config={...this._config,state_colors:s},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}_labelChanged(t,e){if(!this._config)return;const i=e.target.value,s={...this._config.state_labels};i?s[t]=i:delete s[t],this._config={...this._config,state_labels:s},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}_visibilityChanged(t,e){if(!this._config)return;const i=e.target.checked,s=[...this._config.hidden_states||[]];i||s.includes(t)?i&&s.includes(t)&&s.splice(s.indexOf(t),1):s.push(t),this._config={...this._config,hidden_states:s},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}_getEntityStates(){if(!this._config?.entity||!this.hass)return["off","on"];const t=this.hass.states[this._config.entity];if(!t)return["off","on"];const e=this._config.entity.split(".")[0];return"input_select"===e&&t.attributes.options?t.attributes.options:"input_boolean"===e||"switch"===e?["on","off"]:"light"===e?["on","off","unavailable"]:["on","off"]}render(){if(!this.hass||!this._config)return q``;const t=this._getEntityStates();return q`
      <div class="card-config">
        <ha-expansion-panel .header=${"Entity"} .expanded=${!0} .leftChevron=${!0}>
          <div slot="icons">
            <ha-icon icon="mdi:devices"></ha-icon>
          </div>
          <div class="panel-content">
            <ha-selector
              .hass=${this.hass}
              .selector=${{entity:{domain:["input_boolean","input_select","switch","light"]}}}
              .value=${this._config.entity}
              .label=${"Entity"}
              .required=${!0}
              @value-changed=${t=>{this._config&&(this._config={...this._config,entity:t.detail.value},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})),this.requestUpdate())}}
            ></ha-selector>
          </div>
        </ha-expansion-panel>

        <ha-expansion-panel .header=${"Appearance"} .expanded=${!0} .leftChevron=${!0}>
          <div slot="icons">
            <ha-icon icon="mdi:palette"></ha-icon>
          </div>
          <div class="panel-content">
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
              .selector=${{select:{options:[{value:"toggle",label:"Cycle Next State"},{value:"more-info",label:"Show More Info"},{value:"none",label:"Do Nothing"}]}}}
              .value=${this._config.default_action||"toggle"}
              .label=${"Default Click Behavior"}
              @value-changed=${t=>{this._config&&(this._config={...this._config,default_action:t.detail.value},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}}
            ></ha-selector>
            <ha-selector
              .hass=${this.hass}
              .selector=${{number:{min:0,max:1,step:.1,mode:"slider"}}}
              .value=${this._config.opacity??1}
              .label=${"Background Opacity"}
              @value-changed=${t=>{this._config&&(this._config={...this._config,opacity:t.detail.value},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}}
            ></ha-selector>
            <ha-switch
              .checked=${this._config.show_name??!0}
              @change=${t=>{this._config&&(this._config={...this._config,show_name:t.target.checked},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}}
            >
              Show Name
            </ha-switch>
            <ha-switch
              .checked=${this._config.show_state??!0}
              @change=${t=>{this._config&&(this._config={...this._config,show_state:t.target.checked},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}}
            >
              Show State Label
            </ha-switch>
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
        </ha-expansion-panel>

        ${this._config.entity?q`
          <ha-expansion-panel .header=${"States"} .expanded=${!0} .leftChevron=${!0}>
            <div slot="icons">
              <ha-icon icon="mdi:toggle-switch"></ha-icon>
            </div>
            <div class="panel-content">
          <div class="states">
            ${t.map(t=>{const e=!this._config?.hidden_states?.includes(t);return q`
                <div class="state-config">
                  <div class="state-header">
                    <ha-switch
                      .checked=${e}
                      @change=${e=>this._visibilityChanged(t,e)}
                    ></ha-switch>
                    <span style="text-transform: capitalize;">${t}</span>
                  </div>
                  ${e?q`
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
                      .label=${"State Icon (overrides default)"}
                      @value-changed=${e=>{if(!this._config)return;const i={...this._config.state_icons};e.detail.value?i[t]=e.detail.value:delete i[t],this._config={...this._config,state_icons:i},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}}
                    ></ha-selector>
                    <div class="color-row">
                      <ha-switch
                        .checked=${!!this._config?.state_colors?.[t]}
                        @change=${e=>{if(!this._config)return;const i=e.target.checked,s={...this._config.state_colors};i?s[t]="#5294e2":delete s[t],this._config={...this._config,state_colors:s},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}}
                      ></ha-switch>
                      ${this._config?.state_colors?.[t]?q`
                        <ha-selector
                          .hass=${this.hass}
                          .selector=${{color_rgb:{}}}
                          .value=${(()=>{const e=this._config?.state_colors?.[t];if(!e)return[82,148,226];const i=e.replace("#","");return[parseInt(i.substr(0,2),16),parseInt(i.substr(2,2),16),parseInt(i.substr(4,2),16)]})()}
                          .label=${"Background Color"}
                          @value-changed=${e=>{if(!this._config)return;const i=`#${e.detail.value.map(t=>t.toString(16).padStart(2,"0")).join("")}`,s={...this._config.state_colors};s[t]=i,this._config={...this._config,state_colors:s},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}}
                        ></ha-selector>
                      `:q`<span>Background Color (Transparent)</span>`}
                    </div>
                    <ha-selector
                      .hass=${this.hass}
                      .selector=${{color_rgb:{}}}
                      .value=${this._config?.icon_colors?.[t]||[255,255,255]}
                      .label=${"Icon Color"}
                      @value-changed=${e=>{if(!this._config)return;const i=`#${e.detail.value.map(t=>t.toString(16).padStart(2,"0")).join("")}`,s={...this._config.icon_colors};s[t]=i,this._config={...this._config,icon_colors:s},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}}
                    ></ha-selector>
                    <ha-selector
                      .hass=${this.hass}
                      .selector=${{color_rgb:{}}}
                      .value=${this._config?.text_colors?.[t]||[255,255,255]}
                      .label=${"Text Color"}
                      @value-changed=${e=>{if(!this._config)return;const i=`#${e.detail.value.map(t=>t.toString(16).padStart(2,"0")).join("")}`,s={...this._config.text_colors};s[t]=i,this._config={...this._config,text_colors:s},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}}
                    ></ha-selector>
                  `:""}
                </div>
              `})}
            </div>
          </ha-expansion-panel>
        `:""}

        <ha-expansion-panel .header=${"Interactions"} .leftChevron=${!0}>
          <div slot="icons">
            <ha-icon icon="mdi:gesture-tap"></ha-icon>
          </div>
          <div class="panel-content">
        <ha-selector
          .hass=${this.hass}
          .selector=${{"ui-action":{}}}
          .value=${this._config.tap_action||{action:"toggle"}}
          .label=${"Tap Action"}
          @value-changed=${t=>{this._config&&(this._config={...this._config,tap_action:t.detail.value},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}}
        ></ha-selector>

        <ha-selector
          .hass=${this.hass}
          .selector=${{"ui-action":{}}}
          .value=${this._config.hold_action||{action:"more-info"}}
          .label=${"Hold Action"}
          @value-changed=${t=>{this._config&&(this._config={...this._config,hold_action:t.detail.value},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}}
        ></ha-selector>

        <ha-selector
          .hass=${this.hass}
          .selector=${{"ui-action":{}}}
          .value=${this._config.double_tap_action||{action:"none"}}
          .label=${"Double Tap Action"}
          @value-changed=${t=>{this._config&&(this._config={...this._config,double_tap_action:t.detail.value},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}}
        ></ha-selector>
          </div>
        </ha-expansion-panel>

        <ha-expansion-panel .header=${"Badge Overlay (Optional)"} .leftChevron=${!0}>
          <div slot="icons">
            <ha-icon icon="mdi:circle-outline"></ha-icon>
          </div>
          <div class="panel-content">
            <ha-selector
              .hass=${this.hass}
              .selector=${{entity:{domain:["input_boolean","input_select","switch","light","binary_sensor","sensor"]}}}
              .value=${this._config.badge_entity||""}
              .label=${"Badge Entity (Optional)"}
              @value-changed=${t=>{this._config&&(this._config={...this._config,badge_entity:t.detail.value},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})),this.requestUpdate())}}
            ></ha-selector>

            ${this._config.badge_entity?q`
              <ha-selector
                .hass=${this.hass}
                .selector=${{select:{options:[{value:"top-left",label:"Top Left"},{value:"top-right",label:"Top Right"},{value:"bottom-left",label:"Bottom Left"},{value:"bottom-right",label:"Bottom Right"}]}}}
                .value=${this._config.badge_position||"top-right"}
                .label=${"Position"}
                @value-changed=${t=>{this._config&&(this._config={...this._config,badge_position:t.detail.value},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}}
              ></ha-selector>

              <ha-selector
                .hass=${this.hass}
                .selector=${{number:{min:16,max:48,step:2,mode:"slider"}}}
                .value=${this._config.badge_size||24}
                .label=${"Size (px)"}
                @value-changed=${t=>{this._config&&(this._config={...this._config,badge_size:t.detail.value},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}}
              ></ha-selector>

              <ha-selector
                .hass=${this.hass}
                .selector=${{number:{min:0,max:50,step:2,mode:"slider"}}}
                .value=${this._config.badge_offset??8}
                .label=${"Offset (px)"}
                @value-changed=${t=>{this._config&&(this._config={...this._config,badge_offset:t.detail.value},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}}
              ></ha-selector>

              <ha-switch
                .checked=${this._config.badge_show_state??!1}
                @change=${t=>{this._config&&(this._config={...this._config,badge_show_state:t.target.checked},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}}
              >
                Show State Text
              </ha-switch>

              ${(()=>{const t=this._config.badge_entity?this.hass?.states[this._config.badge_entity]:null;if(!t)return"";const e=this._config.badge_entity.split(".")[0];let i=[];if("input_select"===e&&t.attributes.options?i=t.attributes.options:"input_boolean"!==e&&"switch"!==e&&"light"!==e||(i=["on","off"]),0===i.length)return"";return q`
                  <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--divider-color);">
                    <div style="font-weight: 500; margin-bottom: 12px;">Badge State Colors</div>
                    ${i.map(t=>{let e=(t=>{const e=t.toLowerCase();return["on","yes","true","active","enabled","open","home","unlocked","playing","running"].includes(e)?[102,147,6]:["off","no","false","inactive","disabled","closed","away","locked","paused","stopped","unavailable"].includes(e)?[244,67,54]:[3,169,244]})(t);if(this._config?.badge_colors?.[t]){const i=this._config.badge_colors[t].replace("#","");e=[parseInt(i.substr(0,2),16),parseInt(i.substr(2,2),16),parseInt(i.substr(4,2),16)]}return q`
                        <ha-selector
                          .hass=${this.hass}
                          .selector=${{color_rgb:{}}}
                          .value=${e}
                          .label=${t}
                          @value-changed=${e=>{if(!this._config)return;const i=`#${e.detail.value.map(t=>t.toString(16).padStart(2,"0")).join("")}`,s={...this._config.badge_colors};s[t]=i,this._config={...this._config,badge_colors:s},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}}
                        ></ha-selector>
                      `})}
                  </div>
                `})()}
            `:""}
          </div>
        </ha-expansion-panel>
      </div>
    `}};_t.styles=a`
    .card-config {
      display: flex;
      flex-direction: column;
    }
    .card-config > * {
      margin-bottom: 8px;
    }
    .card-config > *:last-child {
      margin-bottom: 0;
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
    .state-config {
      padding: 16px;
      background: var(--card-background-color);
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .state-header {
      font-weight: 500;
      text-transform: capitalize;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 14px;
      color: var(--primary-text-color);
    }
    ha-switch {
      --mdc-switch-selected-track-color: var(--primary-color);
      --mdc-switch-selected-handle-color: var(--primary-color);
    }
    .states {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  `,t([ft({attribute:!1})],_t.prototype,"hass",void 0),t([ft({attribute:!1})],_t.prototype,"_config",void 0),_t=t([rt("mk-state-card-editor")],_t);let vt=class extends ht{setConfig(t){this.config=t}getCardSize(){return 1}_handleAction(t){if(!this.config||!this.hass)return;const e=this.config.default_action||"toggle",i=this.config[`${t}_action`]||("tap"===t?{action:e}:"hold"===t?{action:"more-info"}:{action:"none"});switch(i.action){case"toggle":const t=this.config.entity,e=t.split(".")[0],s=this.hass.states[t];if("input_select"===e&&s.attributes.options){const e=s.attributes.options,i=this.config.hidden_states||[],o=e.filter(t=>!i.includes(t));if(0===o.length)return;const n=(o.indexOf(s.state)+1)%o.length;this.hass.callService("input_select","select_option",{entity_id:t,option:o[n]})}else"input_boolean"!==e&&"switch"!==e&&"light"!==e||this.hass.callService(e,"toggle",{entity_id:t});break;case"more-info":const o=new CustomEvent("hass-more-info",{detail:{entityId:this.config.entity},bubbles:!0,composed:!0});this.dispatchEvent(o);break;case"navigate":if(i.navigation_path){window.history.pushState(null,"",i.navigation_path);const t=new CustomEvent("location-changed",{bubbles:!0,composed:!0});this.dispatchEvent(t)}break;case"url":i.url_path&&window.open(i.url_path);break;case"call-service":if(i.service){const[t,e]=i.service.split(".");this.hass.callService(t,e,i.service_data)}}}_handleClick(){this._handleAction("tap")}_handleHold(){this._handleAction("hold")}_handleDoubleClick(){this._handleAction("double_tap")}render(){if(!this.config||!this.hass)return q``;if(!this.config.entity)return q`<ha-card><div class="content">Please select an entity in card configuration</div></ha-card>`;const t=this.hass.states[this.config.entity];if(!t)return q`<ha-card><div class="content">Entity not found: ${this.config.entity}</div></ha-card>`;const e=t.state,i=this.config.state_colors?.[e],s=this.config.opacity??1,o=this.config.state_icons?.[e]||this.config.icon||t.attributes.icon||"mdi:toggle-switch",n=this.config.icon_colors?.[e]||"#ffffff",a=this.config.text_colors?.[e]||"#ffffff",c=this.config.name||t.attributes.friendly_name||this.config.entity,h=this.config.state_labels?.[e]||e,l=this.config.show_name??!0,r=this.config.show_state??!0,d=this.config.layout||"default",g=this.config.custom_css||"",f=this.config.badge_entity?this.hass.states[this.config.badge_entity]:null,p=f?.state||"",u=this.config.badge_colors?.[p]||(t=>{const e=t.toLowerCase();return["on","yes","true","active","enabled","open","home","unlocked","playing","running"].includes(e)?"#669306":["off","no","false","inactive","disabled","closed","away","locked","paused","stopped","unavailable"].includes(e)?"#f44336":"#03a9f4"})(p),_=this.config.badge_size||24,v=this.config.badge_offset??8,$=this.config.badge_position||"top-right",m=this.config.badge_show_state??!1;return q`
      <style>
        ${g?`\n          :host {\n            ${g}\n          }\n        `:""}
      </style>
      <ha-card
        class="layout-${d}"
        style="${i?`background-color: ${i};`:""} opacity: ${s}; position: relative;"
        @click=${this._handleClick}
        @dblclick=${this._handleDoubleClick}
        @contextmenu=${t=>{t.preventDefault(),this._handleHold()}}
      >
        ${f?q`
          <div
            class="badge ${$}"
            style="background-color: ${u}; width: ${_}px; height: ${_}px; font-size: ${.5*_}px; top: ${$.includes("top")?v:"auto"}px; bottom: ${$.includes("bottom")?v:"auto"}px; left: ${$.includes("left")?v:"auto"}px; right: ${$.includes("right")?v:"auto"}px;"
          >
            ${m?p:"●"}
          </div>
        `:""}
        <div class="content" style="color: ${a};">
          ${l&&this.config.name?q`<div style="font-size: 14px; opacity: 0.8; margin-bottom: 8px;">${c}</div>`:""}
          <ha-icon icon="${o}" style="color: ${n};"></ha-icon>
          ${r?q`<div class="state">${h}</div>`:""}
        </div>
      </ha-card>
    `}};vt.styles=a`
    ha-card {
      cursor: pointer;
      transition: transform 0.1s;
    }
    ha-card:active { transform: scale(0.98); }
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
    .badge {
      position: absolute;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 700;
      color: white;
      z-index: 10;
      transition: all 0.3s ease;
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
  `,t([ft({attribute:!1})],vt.prototype,"hass",void 0),t([ft({attribute:!1})],vt.prototype,"config",void 0),vt=t([rt("mk-state-card")],vt),vt.getConfigElement=()=>document.createElement("mk-state-card-editor"),vt.getStubConfig=()=>({type:"custom:mk-state-card",entity:"",layout:"default",custom_css:"",state_colors:{},state_labels:{},state_icons:{},icon_colors:{},text_colors:{},hidden_states:[],opacity:1,show_name:!0,show_state:!0,default_action:"toggle"}),window.customCards=window.customCards||[],window.customCards.push({type:"mk-state-card",name:"MK State Card",description:"Toggle entities with colored states",preview:!0}),console.info("%c MK COLLECTION LOADED ","color: white; background: #607d8b; font-weight: bold; padding: 4px; border-radius: 4px;");
//# sourceMappingURL=mk-ha-collection.js.map
