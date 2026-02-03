function t(t,e,i,s){var o,n=arguments.length,a=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;let n=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new n(i,t,s)},r=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:h,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,f=globalThis,_=f.trustedTypes,g=_?_.emptyScript:"",$=f.reactiveElementPolyfillSupport,v=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},m=(t,e)=>!h(t,e),b={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:m};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const n=s?.call(this);o?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),o=e.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=s;const n=o.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const s=this.constructor,o=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??m)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==o||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[v("elementProperties")]=new Map,w[v("finalized")]=new Map,$?.({ReactiveElement:w}),(f.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A=globalThis,E=A.trustedTypes,x=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+C,P=`<${O}>`,k=document,U=()=>k.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,H="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,R=/>/g,L=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,z=/"/g,j=/^(?:script|style|textarea|title)$/i,W=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),B=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),q=new WeakMap,K=k.createTreeWalker(k,129);function F(t,e){if(!T(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(e):e}const J=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":3===e?"<math>":"",a=N;for(let e=0;e<i;e++){const i=t[e];let r,h,c=-1,l=0;for(;l<i.length&&(a.lastIndex=l,h=a.exec(i),null!==h);)l=a.lastIndex,a===N?"!--"===h[1]?a=D:void 0!==h[1]?a=R:void 0!==h[2]?(j.test(h[2])&&(o=RegExp("</"+h[2],"g")),a=L):void 0!==h[3]&&(a=L):a===L?">"===h[0]?(a=o??N,c=-1):void 0===h[1]?c=-2:(c=a.lastIndex-h[2].length,r=h[1],a=void 0===h[3]?L:'"'===h[3]?z:I):a===z||a===I?a=L:a===D||a===R?a=N:(a=L,o=void 0);const d=a===L&&t[e+1].startsWith("/>")?" ":"";n+=a===N?i+P:c>=0?(s.push(r),i.slice(0,c)+S+i.slice(c)+C+d):i+C+(-2===c?e:d)}return[F(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class G{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const a=t.length-1,r=this.parts,[h,c]=J(t,e);if(this.el=G.createElement(h,i),K.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=K.nextNode())&&r.length<a;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(S)){const e=c[n++],i=s.getAttribute(t).split(C),a=/([.?@])?(.*)/.exec(e);r.push({type:1,index:o,name:a[2],strings:i,ctor:"."===a[1]?tt:"?"===a[1]?et:"@"===a[1]?it:X}),s.removeAttribute(t)}else t.startsWith(C)&&(r.push({type:6,index:o}),s.removeAttribute(t));if(j.test(s.tagName)){const t=s.textContent.split(C),e=t.length-1;if(e>0){s.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],U()),K.nextNode(),r.push({type:2,index:++o});s.append(t[e],U())}}}else if(8===s.nodeType)if(s.data===O)r.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(C,t+1));)r.push({type:7,index:o}),t+=C.length-1}o++}}static createElement(t,e){const i=k.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,s){if(e===B)return e;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const n=M(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(e=Z(t,o._$AS(t,e.values),o,s)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??k).importNode(e,!0);K.currentNode=s;let o=K.nextNode(),n=0,a=0,r=i[0];for(;void 0!==r;){if(n===r.index){let e;2===r.type?e=new Q(o,o.nextSibling,this,t):1===r.type?e=new r.ctor(o,r.name,r.strings,this,t):6===r.type&&(e=new st(o,this,t)),this._$AV.push(e),r=i[++a]}n!==r?.index&&(o=K.nextNode(),n++)}return K.currentNode=k,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),M(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>T(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(k.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=G.createElement(F(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Y(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new G(t)),e}k(t){T(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Q(this.O(U()),this.O(U()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=Z(this,t,e,0),n=!M(t)||t!==this._$AH&&t!==B,n&&(this._$AH=t);else{const s=t;let a,r;for(t=o[0],a=0;a<o.length-1;a++)r=Z(this,s[i+a],e,a),r===B&&(r=this._$AH[a]),n||=!M(r)||r!==this._$AH[a],r===V?t=V:t!==V&&(t+=(r??"")+o[a+1]),this._$AH[a]=r}n&&!s&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class et extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class it extends X{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??V)===B)return;const i=this._$AH,s=t===V&&i!==V||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==V&&(i===V||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const ot=A.litHtmlPolyfillSupport;ot?.(G,Q),(A.litHtmlVersions??=[]).push("3.3.1");const nt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class at extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new Q(e.insertBefore(U(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}}at._$litElement$=!0,at.finalized=!0,nt.litElementHydrateSupport?.({LitElement:at});const rt=nt.litElementPolyfillSupport;rt?.({LitElement:at}),(nt.litElementVersions??=[]).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ht=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ct={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:m},lt=(t=ct,e,i)=>{const{kind:s,metadata:o}=i;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,o,t)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const o=this[s];e.call(this,i),this.requestUpdate(s,o,t)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function dt(t){return(e,i)=>"object"==typeof i?lt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */console.info("%c MK-NETWORK-DEVICE-CARD %c Version 1.0.0 ","color: white; background: #4caf50; font-weight: 700;","color: #4caf50; background: white; font-weight: 700;");let pt=class extends at{setConfig(t){this._config={show_history:!0,show_last_seen:!0,show_wol_button:!0,history_hours:24,online_color:"#4caf50",offline_color:"#f44336",layout:"default",...t}}_valueChanged(t){if(!this._config)return;const e=t.target,i=e.configValue||e.id,s=void 0!==t.detail?.value?t.detail.value:e.value;i&&(this._config={...this._config,[i]:s},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}render(){return this.hass&&this._config?W`
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

            ${this._config.show_wol_button?W`
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

            ${this._config.show_history?W`
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
    `:W``}};pt.styles=a`
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
  `,t([dt({attribute:!1})],pt.prototype,"hass",void 0),t([dt({attribute:!1})],pt.prototype,"_config",void 0),pt=t([ht("mk-network-device-card-editor")],pt);let ut=class extends at{setConfig(t){if(!t.entity)throw new Error("You need to define an entity (ping binary_sensor)");this.config={show_history:!0,show_last_seen:!0,show_wol_button:!0,history_hours:24,online_color:"#4caf50",offline_color:"#f44336",layout:"default",...t}}getCardSize(){return this.config?.show_history?3:1}async _loadHistory(){if(!this.hass||!this.config?.entity||!this.config.show_history)return;const t=new Date,e=new Date(t.getTime()-60*(this.config.history_hours||24)*60*1e3);try{const i=await this.hass.callApi("GET",`history/period/${e.toISOString()}?filter_entity_id=${this.config.entity}&end_time=${t.toISOString()}`);this._historyData=i}catch(t){console.error("Failed to load history:",t)}}firstUpdated(){this._loadHistory(),setInterval(()=>this._loadHistory(),3e5)}_handleWol(){if(this.hass&&this.config)if(this.config.wol_entity){const t=this.config.wol_entity.split(".")[0];"button"===t?this.hass.callService("button","press",{entity_id:this.config.wol_entity}):"switch"===t&&this.hass.callService("switch","turn_on",{entity_id:this.config.wol_entity})}else this.config.mac_address&&this.hass.callService("wake_on_lan","send_magic_packet",{mac:this.config.mac_address})}_handleTap(){if(!this.config||!this.hass)return;if("more-info"===(this.config.tap_action||{action:"more-info"}).action){const t=new CustomEvent("hass-more-info",{detail:{entityId:this.config.entity},bubbles:!0,composed:!0});this.dispatchEvent(t)}}_formatLastSeen(t){const e=new Date(t),i=(new Date).getTime()-e.getTime(),s=Math.floor(i/6e4),o=Math.floor(s/60),n=Math.floor(o/24);return s<1?"Just now":s<60?`${s} minute${s>1?"s":""} ago`:o<24?`${o} hour${o>1?"s":""} ago`:`${n} day${n>1?"s":""} ago`}render(){if(!this.config||!this.hass)return W``;const t=this.hass.states[this.config.entity];if(!t)return W`
        <ha-card>
          <div class="header">
            <div>Entity not found: ${this.config.entity}</div>
          </div>
        </ha-card>
      `;const e="on"===t.state,i=e?this.config.online_color:this.config.offline_color,s=this.config.icon||"mdi:lan",o=this.config.name||t.attributes.friendly_name||this.config.entity,n=this.config.layout||"default",a=this.config.show_wol_button&&(this.config.wol_entity||this.config.mac_address);return W`
      <ha-card class="layout-${n}">
        <div class="header" @click=${this._handleTap}>
          <ha-icon icon="${s}" style="color: ${i};"></ha-icon>
          <div class="header-info">
            <div class="device-name">${o}</div>
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
              ?disabled=${e}
            >
              <ha-icon icon="mdi:power" slot="icon"></ha-icon>
              Wake
            </mwc-button>
          `:""}
        </div>

        ${this.config.show_history?W`
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
  `,t([dt({attribute:!1})],ut.prototype,"hass",void 0),t([dt({attribute:!1})],ut.prototype,"config",void 0),t([function(t){return dt({...t,state:!0,attribute:!1})}()],ut.prototype,"_historyData",void 0),ut=t([ht("mk-network-device-card")],ut),ut.getConfigElement=()=>document.createElement("mk-network-device-card-editor"),ut.getStubConfig=()=>({type:"custom:mk-network-device-card",entity:"",show_history:!0,show_last_seen:!0,show_wol_button:!0,history_hours:24,online_color:"#4caf50",offline_color:"#f44336",layout:"default"}),window.customCards=window.customCards||[],window.customCards.push({type:"mk-network-device-card",name:"MK Network Device Card",description:"Monitor network devices with ping status, WOL, and history",preview:!0});export{ut as MkNetworkDeviceCard,pt as MkNetworkDeviceCardEditor};
//# sourceMappingURL=mk-network-device-card.js.map
