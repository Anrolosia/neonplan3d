Array.prototype.at||Object.defineProperty(Array.prototype,"at",{configurable:!0,writable:!0,value:function(e){let t=Math.trunc(e)||0;return this[t<0?this.length+t:t]}});typeof globalThis.structuredClone!="function"&&(globalThis.structuredClone=o=>o===void 0?o:JSON.parse(JSON.stringify(o)));var Jr=new URL(import.meta.url),Zr=Jr.searchParams.get("v"),Yr=o=>new URL(`./fonts/${o}${Zr?`?v=${Zr}`:""}`,Jr).href,Xr="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD";function Qr(){if(typeof document>"u"||document.getElementById("fp3d-fonts"))return;let o=document.createElement("style");o.id="fp3d-fonts",o.textContent=`
@font-face{font-family:"Figtree";font-style:normal;font-display:swap;font-weight:300 900;src:url(${Yr("figtree.woff2")}) format("woff2");unicode-range:${Xr}}
@font-face{font-family:"Bricolage Grotesque";font-style:normal;font-display:swap;font-weight:200 800;src:url(${Yr("bricolage-grotesque.woff2")}) format("woff2");unicode-range:${Xr}}`,document.head.append(o)}function ei(o,e){return e==="metric"||e==="imperial"?e:o?.config?.unit_system?.length==="mi"?"imperial":"metric"}function Tl(o,e){return String(Number(o.toFixed(e)))}function ti(o,e=2){let t=o<0?"-":"",n=Math.round(Math.abs(o)/.0254*(e>=2?10:1))/(e>=2?10:1),i=Math.floor(n/12+1e-9),r=n-i*12,s=Tl(r,e>=2?1:0);return i?r<.05?`${t}${i}'`:`${t}${i}' ${s}"`:`${t}${s}"`}function ni(o,e){let t=o.trim().toLowerCase().replace(/,/g,".").replace(/[′’]/g,"'").replace(/[″”“]/g,'"').replace(/''/g,'"');if(!t)return null;let n=/(-?\d+(?:\.\d+)?|-?\.\d+)\s*(feet|foot|ft|'|inches|inch|in|"|mm|cm|m)?/g,i=0,r=!1,s=!1,a=t;for(let l of t.matchAll(n)){let d=Number(l[1]);if(!Number.isFinite(d))return null;let c=l[2];r=!0,a=a.replace(l[0],""),c==="feet"||c==="foot"||c==="ft"||c==="'"?(i+=d*.3048,s=!0):c==="inches"||c==="inch"||c==="in"||c==='"'?i+=d*.0254:c==="mm"?i+=d/1e3:c==="cm"?i+=d/100:c==="m"?i+=d:i+=e==="imperial"?d*(s?.0254:.3048):d}return!r||/[^\s+]/.test(a)?null:i}var xn=globalThis,Sn=xn.ShadowRoot&&(xn.ShadyCSS===void 0||xn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ao=Symbol(),oi=new WeakMap,Ct=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==ao)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Sn&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=oi.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&oi.set(t,e))}return e}toString(){return this.cssText}},ri=o=>new Ct(typeof o=="string"?o:o+"",void 0,ao),me=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((n,i,r)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[r+1],o[0]);return new Ct(t,o,ao)},ii=(o,e)=>{if(Sn)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),i=xn.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,o.appendChild(n)}},lo=Sn?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return ri(t)})(o):o;var{is:Fl,defineProperty:Dl,getOwnPropertyDescriptor:Hl,getOwnPropertyNames:Il,getOwnPropertySymbols:Wl,getPrototypeOf:Ll}=Object,$n=globalThis,si=$n.trustedTypes,Cl=si?si.emptyScript:"",Ol=$n.reactiveElementPolyfillSupport,Ot=(o,e)=>o,co={toAttribute(o,e){switch(e){case Boolean:o=o?Cl:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},li=(o,e)=>!Fl(o,e),ai={attribute:!0,type:String,converter:co,reflect:!1,useDefault:!1,hasChanged:li};Symbol.metadata??=Symbol("metadata"),$n.litPropertyMetadata??=new WeakMap;var Re=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ai){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(e,n,t);i!==void 0&&Dl(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){let{get:i,set:r}=Hl(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:i,set(s){let a=i?.call(this);r?.call(this,s),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ai}static _$Ei(){if(this.hasOwnProperty(Ot("elementProperties")))return;let e=Ll(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ot("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ot("properties"))){let t=this.properties,n=[...Il(t),...Wl(t)];for(let i of n)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,i]of t)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let i=this._$Eu(t,n);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let i of n)t.unshift(lo(i))}else e!==void 0&&t.push(lo(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ii(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){let r=(n.converter?.toAttribute!==void 0?n.converter:co).toAttribute(t,n.type);this._$Em=e,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){let n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let r=n.getPropertyOptions(i),s=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:co;this._$Em=i;let a=s.fromAttribute(t,r.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(e,t,n,i=!1,r){if(e!==void 0){let s=this.constructor;if(i===!1&&(r=this[e]),n??=s.getPropertyOptions(e),!((n.hasChanged??li)(r,t)||n.useDefault&&n.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:i,wrapped:r},s){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),r!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,r]of n){let{wrapped:s}=r,a=this[i];s!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,r,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};Re.elementStyles=[],Re.shadowRootOptions={mode:"open"},Re[Ot("elementProperties")]=new Map,Re[Ot("finalized")]=new Map,Ol?.({ReactiveElement:Re}),($n.reactiveElementVersions??=[]).push("2.1.2");var _o=globalThis,ci=o=>o,Mn=_o.trustedTypes,di=Mn?Mn.createPolicy("lit-html",{createHTML:o=>o}):void 0,gi="$lit$",De=`lit$${Math.random().toFixed(9).slice(2)}$`,_i="?"+De,Bl=`<${_i}>`,Xe=document,Nt=()=>Xe.createComment(""),Vt=o=>o===null||typeof o!="object"&&typeof o!="function",bo=Array.isArray,Nl=o=>bo(o)||typeof o?.[Symbol.iterator]=="function",uo=`[ 	
\f\r]`,Bt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ui=/-->/g,hi=/>/g,Ze=RegExp(`>|${uo}(?:([^\\s"'>=/]+)(${uo}*=${uo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pi=/'/g,fi=/"/g,bi=/^(?:script|style|textarea|title)$/i,wo=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),w=wo(1),Ut=wo(2),vu=wo(3),Je=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),mi=new WeakMap,Ye=Xe.createTreeWalker(Xe,129);function wi(o,e){if(!bo(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return di!==void 0?di.createHTML(e):e}var Vl=(o,e)=>{let t=o.length-1,n=[],i,r=e===2?"<svg>":e===3?"<math>":"",s=Bt;for(let a=0;a<t;a++){let l=o[a],d,c,u=-1,h=0;for(;h<l.length&&(s.lastIndex=h,c=s.exec(l),c!==null);)h=s.lastIndex,s===Bt?c[1]==="!--"?s=ui:c[1]!==void 0?s=hi:c[2]!==void 0?(bi.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=Ze):c[3]!==void 0&&(s=Ze):s===Ze?c[0]===">"?(s=i??Bt,u=-1):c[1]===void 0?u=-2:(u=s.lastIndex-c[2].length,d=c[1],s=c[3]===void 0?Ze:c[3]==='"'?fi:pi):s===fi||s===pi?s=Ze:s===ui||s===hi?s=Bt:(s=Ze,i=void 0);let f=s===Ze&&o[a+1].startsWith("/>")?" ":"";r+=s===Bt?l+Bl:u>=0?(n.push(d),l.slice(0,u)+gi+l.slice(u)+De+f):l+De+(u===-2?a:f)}return[wi(o,r+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},Kt=class o{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let r=0,s=0,a=e.length-1,l=this.parts,[d,c]=Vl(e,t);if(this.el=o.createElement(d,n),Ye.currentNode=this.el.content,t===2||t===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=Ye.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let u of i.getAttributeNames())if(u.endsWith(gi)){let h=c[s++],f=i.getAttribute(u).split(De),p=/([.?@])?(.*)/.exec(h);l.push({type:1,index:r,name:p[2],strings:f,ctor:p[1]==="."?po:p[1]==="?"?fo:p[1]==="@"?mo:pt}),i.removeAttribute(u)}else u.startsWith(De)&&(l.push({type:6,index:r}),i.removeAttribute(u));if(bi.test(i.tagName)){let u=i.textContent.split(De),h=u.length-1;if(h>0){i.textContent=Mn?Mn.emptyScript:"";for(let f=0;f<h;f++)i.append(u[f],Nt()),Ye.nextNode(),l.push({type:2,index:++r});i.append(u[h],Nt())}}}else if(i.nodeType===8)if(i.data===_i)l.push({type:2,index:r});else{let u=-1;for(;(u=i.data.indexOf(De,u+1))!==-1;)l.push({type:7,index:r}),u+=De.length-1}r++}}static createElement(e,t){let n=Xe.createElement("template");return n.innerHTML=e,n}};function ht(o,e,t=o,n){if(e===Je)return e;let i=n!==void 0?t._$Co?.[n]:t._$Cl,r=Vt(e)?void 0:e._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(o),i._$AT(o,t,n)),n!==void 0?(t._$Co??=[])[n]=i:t._$Cl=i),i!==void 0&&(e=ht(o,i._$AS(o,e.values),i,n)),e}var ho=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,i=(e?.creationScope??Xe).importNode(t,!0);Ye.currentNode=i;let r=Ye.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let d;l.type===2?d=new Gt(r,r.nextSibling,this,e):l.type===1?d=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(d=new go(r,this,e)),this._$AV.push(d),l=n[++a]}s!==l?.index&&(r=Ye.nextNode(),s++)}return Ye.currentNode=Xe,i}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},Gt=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ht(this,e,t),Vt(e)?e===x||e==null||e===""?(this._$AH!==x&&this._$AR(),this._$AH=x):e!==this._$AH&&e!==Je&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Nl(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==x&&Vt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Xe.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Kt.createElement(wi(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(t);else{let r=new ho(i,this),s=r.u(this.options);r.p(t),this.T(s),this._$AH=r}}_$AC(e){let t=mi.get(e.strings);return t===void 0&&mi.set(e.strings,t=new Kt(e)),t}k(e){bo(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,i=0;for(let r of e)i===t.length?t.push(n=new o(this.O(Nt()),this.O(Nt()),this,this.options)):n=t[i],n._$AI(r),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=ci(e).nextSibling;ci(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},pt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,r){this.type=1,this._$AH=x,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=x}_$AI(e,t=this,n,i){let r=this.strings,s=!1;if(r===void 0)e=ht(this,e,t,0),s=!Vt(e)||e!==this._$AH&&e!==Je,s&&(this._$AH=e);else{let a=e,l,d;for(e=r[0],l=0;l<r.length-1;l++)d=ht(this,a[n+l],t,l),d===Je&&(d=this._$AH[l]),s||=!Vt(d)||d!==this._$AH[l],d===x?e=x:e!==x&&(e+=(d??"")+r[l+1]),this._$AH[l]=d}s&&!i&&this.j(e)}j(e){e===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},po=class extends pt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===x?void 0:e}},fo=class extends pt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==x)}},mo=class extends pt{constructor(e,t,n,i,r){super(e,t,n,i,r),this.type=5}_$AI(e,t=this){if((e=ht(this,e,t,0)??x)===Je)return;let n=this._$AH,i=e===x&&n!==x||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==x&&(n===x||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},go=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ht(this,e)}};var Kl=_o.litHtmlPolyfillSupport;Kl?.(Kt,Gt),(_o.litHtmlVersions??=[]).push("3.3.3");var vi=(o,e,t)=>{let n=t?.renderBefore??e,i=n._$litPart$;if(i===void 0){let r=t?.renderBefore??null;n._$litPart$=i=new Gt(e.insertBefore(Nt(),r),r,void 0,t??{})}return i._$AI(o),i};var vo=globalThis,ue=class extends Re{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=vi(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Je}};ue._$litElement$=!0,ue.finalized=!0,vo.litElementHydrateSupport?.({LitElement:ue});var Gl=vo.litElementPolyfillSupport;Gl?.({LitElement:ue});(vo.litElementVersions??=[]).push("4.2.2");async function yi(o){return o.callWS({type:"neonplan3d/building/get"})}async function Pn(o,e){return(await o.callWS({type:"neonplan3d/building/save",building:e})).revision}function ki(o,e){return o.connection.subscribeMessage(t=>e(t.revision),{type:"neonplan3d/building/subscribe"})}async function xi(o,e){return(await o.callWS({type:"neonplan3d/image/get",image_id:e})).data}async function Si(o){return(await o.callWS({type:"neonplan3d/packs/list"})).packs}var Ul="neonplan3d.seenOffers";function $i(o){let e=[];try{e=JSON.parse(localStorage.getItem(Ul)??"[]")}catch{}return o.filter(t=>!e.includes(t.id))}var jl="neonplan3d.seenUpdates";function Mi(o){let e=[];try{e=JSON.parse(localStorage.getItem(jl)??"[]")}catch{}return o.filter(t=>!e.includes(`${t.id}@${t.release}`))}function Pi(o){return o.callWS({type:"neonplan3d/license/get"})}var ql="1.18.2",Zl="neonplan3d-diagnostics";var Yl="alarm_control_panel|automation|binary_sensor|button|calendar|camera|climate|counter|cover|date|datetime|device_tracker|event|fan|group|humidifier|image|input_boolean|input_button|input_datetime|input_number|input_select|input_text|lawn_mower|light|lock|media_player|notify|number|person|remote|scene|script|select|sensor|siren|sun|switch|text|time|timer|todo|update|vacuum|valve|water_heater|weather|zone",Xl=[[/\b(?:https?|wss?|file|blob|data|ftp):[^\s'"<>)\]]*/gi,"<url>"],[/\beyJ[\w-]+\.[\w-]+\.[\w-]+/g,"<token>"],[/[\w.+-]+@[\w-]+(?:\.[\w-]+)+/g,"<email>"],[/\b\d{1,3}(?:\.\d{1,3}){3}(?::\d+)?\b/g,"<ip>"],[/\b[0-9a-f]{1,4}(?::[0-9a-f]{0,4}){2,7}\b/gi,"<ip>"],[new RegExp(`\\b(?:${Yl})\\.[a-z0-9_]+\\b`,"g"),"<entity>"],[/\b[a-z][a-z0-9_]*\.[a-z0-9]*_[a-z0-9_]*\b/g,"<entity>"],[/\b[0-9a-f]{16,}\b/gi,"<id>"]];function Jl(o){let e=String(o??"");for(let[t,n]of Xl)e=e.replace(t,n);return e.replace(/\s+/g," ").trim().slice(0,200)}var Ql=/(neonplan3d[\w-]*\.js)(?:\?[^:\s)]*)?:(\d+):(\d+)/;function Ti(o,e,t,n){let i=Ql.exec(o??"");if(i)return`${i[1]}:${i[2]}:${i[3]}`;let r=/(neonplan3d[\w-]*\.js)(?:\?|$)/.exec(e??"");return r?`${r[1]}:${t??0}:${n??0}`:null}function ec(o,e,t){return/iPad|Tablet|Silk|\bKF[A-Z]{2,4}\b/.test(o)||/Macintosh/.test(o)&&t>1?"tablet":/iPhone|iPod|Windows Phone/.test(o)?"phone":/Android/.test(o)?/Mobile/.test(o)&&e<600?"phone":"tablet":t>0&&e>0&&e<500?"phone":"desktop"}function tc(o){let e=[[/Edg(?:e|A|iOS)?\/(\d+)/,"Edge"],[/OPR\/(\d+)/,"Opera"],[/SamsungBrowser\/(\d+)/,"Samsung"],[/Silk\/(\d+)/,"Silk"],[/(?:Firefox|FxiOS)\/(\d+)/,"Firefox"],[/CriOS\/(\d+)/,"Chrome"],[/; wv\).*Chrome\/(\d+)/,"WebView"],[/Chrome\/(\d+)/,"Chrome"],[/Version\/(\d+)[\d.]* (?:Mobile\/\w+ )?Safari/,"Safari"]];for(let[t,n]of e){let i=t.exec(o);if(i)return`${n} ${i[1]}`}return/AppleWebKit/.test(o)&&/iPhone|iPad|Macintosh/.test(o)?"WebKit":"other"}function nc(o,e=0){let t;return(t=/Android (\d+)/.exec(o))?`Android ${t[1]}`:(t=/iPad.*? OS (\d+)/.exec(o))?`iPadOS ${t[1]}`:(t=/(?:iPhone|iPod).*? OS (\d+)/.exec(o))?`iOS ${t[1]}`:/Macintosh/.test(o)?e>1?"iPadOS":"macOS":(t=/Windows NT (\d+)/.exec(o))?`Windows ${t[1]}`:/CrOS/.test(o)?"ChromeOS":/Linux/.test(o)?"Linux":"other"}function oc(o){let e=o??"";return e.trim()?/SwiftShader|llvmpipe|Software|Mali-[4T]|Mali-G(?:31|51|52|57)\b|Adreno[^\d]*[2-5]\d\d\b|PowerVR|Vivante|VideoCore|\bGC\d{3,4}\b|Intel.*\bHD Graphics(?:[2-5]\d{3})?\b/i.test(e)?"low":/RTX|GTX|GeForce|Quadro|Radeon (?:RX|Pro)|Apple (?:M\d|GPU)|Adreno[^\d]*[67]\d\d\b|Mali-G7\d|Iris Xe|Intel.*Arc/i.test(e)?"high":"mid":null}var Fi,Ei=!1,Ie=!1,yo,He={},En=0,ft=0,Di=null,Hi=null,Ii=null,Te=[],ko=new Set;function xo(){return Ie}function Wi(o){return ko.add(o),()=>ko.delete(o)}function Li(o){Fi=o,!Ei&&(Ei=!0,window.addEventListener(Zl,e=>{let t=!!e.detail?.enabled;Bi(t)}),So())}function Qe(o){Ie&&(He[o]=(He[o]??0)+1)}function Ci(o){if(!Ie)return;o.fps>0&&(En+=o.fps,ft++),Di=o.low;let e=window.devicePixelRatio||1;Hi=Math.round(o.pixelRatio/e*100)/100,o.gpu!==void 0&&(Ii=oc(o.gpu))}function Oi(o,e){if(!e)return;let t=Jl(o);if(!t)return;let n=Te.find(i=>i.msg===t&&i.where===e);n?n.count++:Te.length<20&&Te.push({msg:t,where:e,count:1,version:ql})}function zi(o){let e=o.error,t=e?`${e.name}: ${e.message}`:o.message;Oi(t,Ti(e?.stack,o.filename,o.lineno,o.colno))}function Ai(o){let e=o.reason;e instanceof Error&&Oi(`${e.name}: ${e.message}`,Ti(e.stack))}function Ri(){So()}function Bi(o){if(o!==Ie){Ie=o,o?(window.addEventListener("error",zi),window.addEventListener("unhandledrejection",Ai),window.addEventListener("pagehide",Ri),yo=setInterval(()=>{So()},6e5)):(window.removeEventListener("error",zi),window.removeEventListener("unhandledrejection",Ai),window.removeEventListener("pagehide",Ri),clearInterval(yo),yo=void 0,He={},En=ft=0,Te=[]);for(let e of ko)e(o)}}function rc(){let o=navigator.userAgent,e=navigator.maxTouchPoints||0,t=Math.min(screen.width||0,screen.height||0);return{device:ec(o,t,e),browser:tc(o),os:nc(o,e),low_end:Di,render_scale:Hi,fps:ft?Math.round(En/ft*10)/10:null,fps_n:ft,gpu_tier:Ii,views:{...He}}}async function So(){let o=Fi;if(!o)return;let e={type:"neonplan3d/diagnostics/client"};Ie&&(e.client=rc(),e.errors=Te);let t=He,n=Te;Ie&&(He={},En=ft=0,Te=[]);try{let i=await o.callWS(e);Bi(!!i?.enabled)}catch{if(Ie){for(let[i,r]of Object.entries(t))He[i]=(He[i]??0)+r;Te=[...n,...Te].slice(0,20)}}}function ic(o){return o.shape==="cyl"&&(o.axis??"y")==="y"&&o.y>.9&&o.h<.02}function Mo(o){let e=he(o);return!!e&&/(hob|cooker|stove|herd)/.test(o)&&e.parts.filter(ic).length>=2}var Ni=[],$o=new Map,Vi=0;function Ki(o){Ni=o,$o=new Map(o.flatMap(e=>e.items.map(t=>[sc(e.id,t.id),t]))),Vi++}function jt(){return Ni}function mt(){return Vi}function sc(o,e){return`pack:${o}:${e}`}function gt(o){return o.startsWith("pack:")}function _t(o){return o==="robot_vacuum"||gt(o)&&o.endsWith(":robot_vacuum")}var ac={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function Gi(o){return he(o)?.parts.find(e=>e.screen)}function he(o){if(!gt(o))return;let e=$o.get(o);if(e)return e;let[,t,...n]=o.split(":"),i=ac[t];return i?$o.get(`pack:${i}:${n.join(":")}`):void 0}function Ui(o,e){let t=e.split("-")[0];return o.name[t]??o.name.en??Object.values(o.name)[0]??o.id}function pe(o,e){let t=he(e.type);if(e.mount_y!=null)return e.mount_y;if(e.type==="lamp_wall")return ji;if(zn.has(e.type))return Math.max(0,o.height-An(e.type,e.h));if(e.type==="led_strip")return Math.max(0,o.height-.04-Math.max(.02,e.h));switch(t?.mount){case"surface":return Rn(o,e.x,e.z);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,o.height-e.h);default:return t?0:qi(e)}}var We={field:null,size:1,right:0,up:0};var Yi=["rain","snow","clouds","lightning","sky"];var cc={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function Xi(o){return o==="hedge"||o==="fence"||o==="pergola"}function dc(o,e,t){let n=o.slope??0;if(!n||o.type==="pool")return 0;let i=o.slope_dir??"x",r=(d,c)=>i==="x"?d:i==="-x"?-d:i==="z"?c:-c,s=1/0,a=-1/0;for(let[d,c]of o.points){let u=r(d,c);s=Math.min(s,u),a=Math.max(a,u)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(r(e,t)-s)/(a-s)));return n*l}function uc(o,e,t,n){return es(o,e)+cc[e.type]-hc(o,e,t,n)}var Eo=-.2,Po={set:!1,level:Eo};function Ji(o){let e=o?.settings.terrain??null;Po={set:e?.level!=null,level:e?.level??Eo}}function Qi(o){return o.elevation>.3?0:Po.set?Po.level-o.elevation:Eo}function es(o,e){return Qi(o)+(e.offset??0)}function hc(o,e,t,n){return e.type==="pool"?0:dc(e,t,n)}function qt(o,e,t){let n=(o.outdoor??[]).filter(r=>!Xi(r.type)&&r.type!=="pool"&&V([e,t],r.points)),i=[...n].reverse().find(r=>r.cut)??n[0];return i?uc(o,i,e,t):Qi(o)}function ts(o,e){return es(o,e)+(e.above?ns(e):Math.min(2,Math.max(-.3,e.rim??.06)))}function pc(o){return o.depth&&o.depth>=.3?Math.min(5,o.depth):o.above?ns(o):1.5}function fc(o,e){return e.above?!1:(o.outdoor??[]).some(t=>t!==e&&t.type!=="pool"&&!Xi(t.type)&&!t.cut&&t.points.length>=3&&e.points.every(n=>V(n,t.points)))}function Zt(o,e){return!e.above&&!fc(o,e)?Yt(o,e)-.05:ts(o,e)-pc(e)}function Yt(o,e){return ts(o,e)-.15}function ns(o){return o.height&&o.height>.3?o.height:1.2}var mc={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null};var os={type:"none",pitch:35,overhang:.4},gc={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...os}};var Xt=["pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve"],rs=.3;var is=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),ji=1.75;function ss(o){if(["lamp_ceiling","lamp_panel","lamp_pendant","stairwell","parking"].includes(o.type)||_c.has(o.type))return!1;let e=he(o.type);return!(e?.mount==="ceiling"&&e.light)}var zn=new Set(["lamp_downlight","lamp_spot"]);function An(o,e){return o==="lamp_spot"?Math.max(.06,e)+.008:.02}var _c=new Set(["stairs","stairs_u"]);function zo(o){return is.has(o)||!!he(o)?.light}var bc=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function qi(o){switch(o.type){case"home_battery":return o.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-o.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return o.variant==="bank"?.75:o.variant==="pole"||o.variant==="pillar"||o.variant==="parcel"?0:1;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function Rn(o,e,t){let n=0;for(let i of o.furniture)!(bc.has(i.type)||he(i.type)?.surface)||!V([e,t],bt(i))||(n=Math.max(n,i.h));return n}var lc=new Set([...is,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),Zi={sofa:[2.2,.9,.82],sofa_l:[2.6,1.8,.82],sofa_u:[3,2.2,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],pool_pump:[.7,.32,.4],pool_filter:[.6,.6,1],pool_heat_pump:[1,.45,.75],pool_dosing:[.4,.2,.5],pool_valve:[.16,.1,.14],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stairs_u:[2.1,2.7,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],ac_unit:[.85,.22,.3],awning:[3,2.5,.22],waste_bin:[.58,.73,1.07],mailbox:[.38,.14,.34],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};function Ao(o){o.energy={...mc,...o.energy??{}},o.presence=o.presence??[],o.settings={...gc,...o.settings,roof:{...os,...o.settings?.roof??{}}};for(let e of o.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(n=>({...n,panel:n.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(n=>({...n,mount:n.mount??null,rotation:n.rotation??0})),e.furniture=e.furniture.map(n=>({...n,entity:n.entity??null,power:n.power??null}));let t=e.placements.filter(n=>n.entity_id.startsWith("light.")&&!n.pin);if(t.length){let n={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let i of t){let r=n[i.mount??"ceiling"],[s,a,l]=Zi[r];e.furniture.push({id:`lamp_${i.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:r,x:i.x,z:i.z,rotation:0,w:s,d:a,h:l,variant:null,entity:i.entity_id,power:null})}e.placements=e.placements.filter(i=>!i.entity_id.startsWith("light.")||i.pin)}e.openings=e.openings.map(n=>({...n,hinge:n.hinge??"left",leaves:n.leaves??1,swing:n.swing??"in",style:n.style??null,cover:n.cover??null,contact:n.contact??null,contact2:n.contact2??null,tilt:n.tilt??null}))}return o}function Le(o){let e=0;for(let t=0;t<o.length;t++){let[n,i]=o[t],[r,s]=o[(t+1)%o.length];e+=n*s-r*i}return e/2}function be(o){let e=Le(o);if(Math.abs(e)<1e-9){let i=o.length||1;return[o.reduce((r,s)=>r+s[0],0)/i,o.reduce((r,s)=>r+s[1],0)/i]}let t=0,n=0;for(let i=0;i<o.length;i++){let[r,s]=o[i],[a,l]=o[(i+1)%o.length],d=r*l-a*s;t+=(r+a)*d,n+=(s+l)*d}return[t/(6*e),n/(6*e)]}function bt(o){let e=o.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),i=o.w/2,r=o.d/2;return[[-i,-r],[i,-r],[i,r],[-i,r]].map(([s,a])=>[o.x+s*t-a*n,o.z+s*n+a*t])}function V(o,e){let t=!1;for(let n=0,i=e.length-1;n<e.length;i=n++){let[r,s]=e[n],[a,l]=e[i];s>o[1]!=l>o[1]&&o[0]<(a-r)*(o[1]-s)/(l-s)+r&&(t=!t)}return t}var as={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var wc=700,To="neonplan3d.unsaved",wt="1.18.2",cs="floorplan-3d.unsaved";function vc(){try{let o=localStorage.getItem(To)??localStorage.getItem(cs);return o?JSON.parse(o):null}catch{return null}}function Ro(o){try{o?localStorage.setItem(To,JSON.stringify(o)):(localStorage.removeItem(To),localStorage.removeItem(cs))}catch{}}var vt=class{building=null;error=null;saveState="idle";saveError=null;backendVersion=null;draft=null;packs=[];packsLoaded=!1;host;hass=null;revision=-1;ownRevisions=new Set;unsubscribe=null;saveTimer;pending=null;saving=null;connected=!1;constructor(e){this.host=e,e.addController(this)}setHass(e){let t=this.hass===null;this.hass=e,t&&this.connected&&this.start()}hostConnected(){this.connected=!0,this.hass&&this.start()}hostDisconnected(){this.connected=!1,this.flush(),this.unsubscribe?.(),this.unsubscribe=null}edit(e){this.building=e,this.pending=e,clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.flush()},wc),this.host.requestUpdate()}get frontendVersion(){return wt}get versionGap(){return!this.backendVersion||wt==="dev"||this.backendVersion===wt?null:yc(this.backendVersion,wt)>0?"frontend":"backend"}get needsRestart(){return this.saveError&&/extra keys not allowed/i.test(this.saveError)?!0:!!this.backendVersion&&wt!=="dev"&&this.backendVersion!==wt}restoreDraft(){let e=this.draft;this.draft=null,e&&this.edit(Ao(e.building))}discardDraft(){this.draft=null,Ro(null),this.host.requestUpdate()}async flush(){clearTimeout(this.saveTimer),this.saving&&await this.saving;let e=this.pending;if(!(!e||!this.hass)){this.pending=null;for(let t of e.floors)for(let n of t.furniture)n.mount_y!=null&&n.mount_y>10&&(n.mount_y=10);this.saveState="saving",this.host.requestUpdate(),this.saving=(async()=>{try{let t=await Pn(this.hass,e);this.ownRevisions.add(t),this.revision=t,this.saveState=this.pending?"saving":"saved",this.saveError=null,Ro(null)}catch(t){this.saveState="error",this.saveError=ls(t),Ro({building:e,savedAt:Date.now()})}this.host.requestUpdate()})(),await this.saving,this.saving=null}}async start(){if(this.hass&&(Li(this.hass),await Promise.all([this.reloadPacks(),this.reload()]),!this.unsubscribe&&this.connected))try{this.unsubscribe=await ki(this.hass,e=>{this.ownRevisions.has(e)||e===this.revision||this.pending||this.saving||this.reload()})}catch{}}async reloadPacks(){if(this.hass){try{this.packs=await Si(this.hass)}catch{this.packs=[]}Ki(this.packs),this.packsLoaded=!0,this.host.requestUpdate()}}async reload(){if(this.hass){try{let e=await yi(this.hass);this.building=Ao(e.building),this.backendVersion=e.version??null,this.draft===null&&!this.pending&&(this.draft=vc()),this.revision=e.revision,this.error=null}catch(e){this.error=ls(e)}this.host.requestUpdate()}}};function ls(o){return o&&typeof o=="object"&&"message"in o?String(o.message):String(o)}function yc(o,e){let t=o.split(/[.-]/).map(i=>Number.parseInt(i,10)||0),n=e.split(/[.-]/).map(i=>Number.parseInt(i,10)||0);for(let i=0;i<Math.max(t.length,n.length);i++){let r=(t[i]??0)-(n[i]??0);if(r)return r}return 0}var ds;function Fo(){let o=new URL("./neonplan3d-editor.js?v=fa65d157e082",new URL(import.meta.url)).href;return ds??=import(o),ds}var kc={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},xc=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure"]),Sc=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx"]),$c=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),Tn=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],ws=new Set(["light","switch","fan"]);function vs(o){return o.slice(0,o.indexOf("."))}function I(o){return kc[vs(o)]??null}function us(o){return o!==null&&o!=="scene"&&o!=="script"}function en(o,e){let t=o.entities?.[e];return t?t.area_id?t.area_id:t.device_id&&o.devices?.[t.device_id]?.area_id||null:null}function hs(o,e){let t=I(e);if(!t)return!1;let n=o.entities?.[e];if(n?.hidden||n?.entity_category)return!1;let i=o.states[e];if(!i)return!1;let r=i.attributes.device_class;return t==="sensor"?r?xc.has(r):Sc.has(String(i.attributes.unit_of_measurement??"")):t==="binary"?r?$c.has(r):!!n?.area_id:!0}var Mc=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function ps(o,e){if(I(e)!=="sensor")return!1;let t=o.entities?.[e];if(t?.hidden||t?.entity_category)return!1;let n=o.states[e];return!n||!n.attributes.unit_of_measurement||Mc.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||N(n)}var Do=null;function Qt(o){let e=Do;if(e&&e.entities===o.entities&&e.devices===o.devices&&(e.states===o.states||(e.states=o.states,Object.keys(o.states).length===e.stateCount)))return e;let t=new Map,n=new Map,i=[],r=new Map,s=new Map;for(let l of Object.keys(o.entities??{})){let d=o.entities[l],c=d.device_id;c&&d.area_id&&(s.get(c)??s.set(c,new Set).get(c)).add(d.area_id),c&&Bo(o,l)&&(n.get(c)??n.set(c,[]).get(c)).push(l),c&&!d.hidden&&!d.entity_category&&(r.get(c)??r.set(c,new Set).get(c)).add(vs(l));let u=hs(o,l),h=en(o,l);if(!h){(u||ps(o,l))&&us(I(l))&&i.push(l);continue}u&&(t.get(h)??t.set(h,[]).get(h)).push(l)}if(o.entities)for(let l of Object.keys(o.states))o.entities[l]||(hs(o,l)||ps(o,l))&&us(I(l))&&i.push(l);i.sort((l,d)=>Tn.indexOf(I(l))-Tn.indexOf(I(d))||Z(o,l).localeCompare(Z(o,d)));for(let[l,d]of t){let c=o.areas?.[l]?.name;d.sort((u,h)=>{let f=Tn.indexOf(I(u)),p=Tn.indexOf(I(h));return f-p||Z(o,u,c).localeCompare(Z(o,h,c))})}let a=new Set([...s].filter(([,l])=>l.size>1).map(([l])=>l));return Do={entities:o.entities,devices:o.devices,states:o.states,stateCount:Object.keys(o.states).length,areas:t,power:n,unassigned:i,domains:r,hubs:a},Do}function se(o,e){return!e||!o.entities?[]:Qt(o).areas.get(e)??[]}var Pc={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},Ec=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),zc=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function Ac(o,e){let t=o.entities?.[e]?.device_id,n=t&&!Qt(o).hubs.has(t)?Qt(o).domains.get(t):void 0;return n&&[...n].some(i=>Ec.has(i))?!1:!zc.test(`${e} ${o.states[e]?.attributes.friendly_name??""}`)}function Ho(o,e,t,n){let i=t.climate?.[n];if(i==="none")return[];if(i)return o.states[i]?[i]:[];let r=Pc[n],s=(f,p)=>V([f,p],t.points),a=e?.placements.filter(f=>f.entity_id.startsWith("sensor."))??[],l=a.filter(f=>s(f.x,f.z)).map(f=>f.entity_id),d=new Set(a.filter(f=>!s(f.x,f.z)).map(f=>f.entity_id)),c=[...new Set([...se(o,t.area_id).filter(f=>!d.has(f)),...l])],u=c.filter(f=>f.startsWith("sensor.")&&o.states[f]?.attributes.device_class===r&&Ac(o,f));if(u.length)return u;let h=ys[n];return h?c.filter(f=>f.startsWith("climate.")&&typeof o.states[f]?.attributes[h]=="number"):[]}var ys={temperature:"current_temperature",humidity:"current_humidity"};function Rc(o,e,t){let n=o.states[e];if(e.startsWith("climate.")){let r=ys[t],s=r?Number(n?.attributes[r]):Number.NaN;return t==="temperature"?fs(s,ke(o)):s}let i=Number(n?.state);return t==="temperature"?fs(i,n?.attributes.unit_of_measurement):i}function ke(o){return o.config?.unit_system?.temperature==="\xB0F"?"\xB0F":"\xB0C"}function fs(o,e){return e==="\xB0F"?(o-32)*5/9:e==="K"?o-273.15:o}function yt(o,e){return ke(o)==="\xB0F"?e*9/5+32:e}function Ce(o,e,t,n){let i=Ho(o,e,t,n).map(r=>Rc(o,r,n)).filter(r=>Number.isFinite(r));return i.length?i.reduce((r,s)=>r+s,0)/i.length:null}function ks(o,e){return!!o.entities&&Qt(o).hubs.has(e)}function Io(o,e){return o.entities?Qt(o).power.get(e)??[]:[]}function Z(o,e,t){let i=o.states[e]?.attributes.friendly_name??o.entities?.[e]?.name??e;if(t&&i.length>t.length+1&&i.toLowerCase().startsWith(t.toLowerCase()+" ")){let r=i.slice(t.length+1);return r.charAt(0).toUpperCase()+r.slice(1)}return i}function N(o){return!o||o.state==="unavailable"||o.state==="unknown"}var Tc=new Set(["run","cooking","running","printing","prepare","preparing","slicing","heating","busy","working","active","washing","rinsing","spinning","drying","cleaning","in_progress","in progress","on"]);function Wo(o){return!!o&&o.entity_id.startsWith("sensor.")&&o.attributes.device_class==="enum"}function Lo(o){return o?o==="cleaning"||/clean|sweep|mop/.test(o.toLowerCase()):!1}function Fe(o){if(!o)return!1;if(o.entity_id.startsWith("vacuum."))return Lo(o.state)||o.state==="returning";switch(I(o.entity_id)){case"light":case"switch":case"fan":case"binary":return o.state==="on";case"cover":return o.state==="open"||o.state==="opening";case"climate":return o.attributes.hvac_action==="heating"||o.attributes.hvac_action==="cooling";case"media":return o.state==="playing";case"lock":return o.state==="unlocked"||o.state==="open";case"sensor":return Wo(o)&&Tc.has(String(o.state).toLowerCase());default:return!1}}function xs(o,e){if(!o||N(o))return e?1:0;let t=String(o.state).toLowerCase();return e||t==="run"||t==="cooking"||t==="on"?1:t==="ready"||t==="standby"||t==="pause"||t==="paused"?.3:0}function Ss(o){if(!o||N(o))return null;let e=String(o.state).toLowerCase();if(e==="off")return null;let t=String(o.attributes.hvac_action??"").toLowerCase(),n=e==="heat"?[1,.32,.12]:e==="cool"?[.3,.65,1]:e==="dry"?[1,.85,.3]:e==="fan_only"?[.85,.92,1]:[.3,1,.5],i=["heating","cooling","drying","fan"].includes(t);return{color:n,level:i||!t?1:.45}}function $s(o,e){if(!o||!e||!/^#[0-9a-f]{6}$/i.test(e))return o;let t=[1,3,5].map(a=>parseInt(e.slice(a,a+2),16)/255),n=a=>{let l=Math.max(...a),d=Math.min(...a),c=l-d;return l<=0||c/l<.25?[-1,0]:[(l===a[0]?((a[1]-a[2])/c+6)%6:l===a[1]?(a[2]-a[0])/c+2:(a[0]-a[1])/c+4)*60,c/l]},[i]=n(t),[r]=n(o.color);if(i<0||r<0)return i<0&&r<0?o:null;let s=Math.abs(i-r);return Math.min(s,360-s)<=30?o:null}function Oe(o,e){if(!o||o.state!=="on")return null;let t=e&&!["unavailable","unknown"].includes(e.state)?e.attributes:o.attributes,n=typeof t.brightness=="number"?.2+.8*Math.sqrt(Math.min(1,Math.max(0,t.brightness/255))):1,i=t.rgb_color,r;return i&&t.color_mode!=="color_temp"&&t.color_mode!=="brightness"&&t.color_mode!=="onoff"?r=[i[0]/255,i[1]/255,i[2]/255]:typeof t.color_temp_kelvin=="number"?r=Fc(t.color_temp_kelvin):r=[1,.71,.28],{color:r,level:n}}function Fc(o){let e=Math.min(1,Math.max(0,(o-2200)/4300)),t=[1,.66,.26],n=[.78,.9,1];return[t[0]+(n[0]-t[0])*e,t[1]+(n[1]-t[1])*e,t[2]+(n[2]-t[2])*e]}function kt(o,e,t=null){if(o==="camera")return t==="ceiling"?Math.max(.5,e-.05):2.2;if(o==="light"&&t){if(t==="floor")return 1.95;if(t==="table")return 1.25;if(t==="wall")return 1.95}switch(o){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var Dc=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),Hc=new Set(["garage","gate"]),Ic=new Set(["window","opening"]);function Jt(o,e,t=!1){let n=new Map;return e.length&&o.forEach((i,r)=>{let s=t&&e.length===1?e[0]:e[r];s&&n.set(i.id,s)}),n}function tn(o,e){let t=new Map,n=(r,s)=>r==="none"?null:r??s??null,i=(r,s,a)=>({cover:n(r.cover,s),contact:r.sensor==="handle"&&r.contact==null?null:n(r.contact,a),tilt:r.tilt==="none"?null:r.tilt,contact2:r.leaves===2&&r.contact2&&r.contact2!=="none"?r.contact2:null,tilt2:r.leaves===2&&r.tilt2&&r.tilt2!=="none"?r.tilt2:null,position:r.position&&r.position!=="none"?r.position:null,positionInverted:!!r.position_inverted,tiltAngle:r.tilt_angle&&r.tilt_angle!=="none"?r.tilt_angle:null,tiltMax:r.tilt_max??null,tiltOffset:r.tilt_offset??null,tiltInvert:!!r.tilt_invert,shut:!!r.shut,...r.contact_invert?{contactInvert:!0}:{}});for(let r of e){for(let s of r.rooms){let a=r.openings.filter(b=>b.room_id===s.id).sort((b,k)=>b.edge-k.edge||b.offset-k.offset);if(!a.length)continue;let l=se(o,s.area_id),d=b=>o.states[b]?.attributes.device_class,c=l.filter(b=>I(b)==="cover"&&Dc.has(d(b))),u=a.filter(b=>b.type==="window"),h=a.filter(b=>b.type==="door"),f=a.filter(b=>b.type==="garage"),p=Jt(u,c,!0),g=Jt(u,l.filter(b=>I(b)==="binary"&&Ic.has(d(b)))),m=Jt(h,l.filter(b=>I(b)==="binary"&&d(b)==="door")),y=Jt(f,l.filter(b=>I(b)==="cover"&&Hc.has(d(b)??""))),_=Jt(f,l.filter(b=>I(b)==="binary"&&d(b)==="garage_door"));for(let b of a){let k=b.type==="window"?p:b.type==="garage"?y:null,z=b.type==="window"?g:b.type==="garage"?_:m;t.set(b.id,i(b,k?.get(b.id),z.get(b.id)))}}for(let s of r.openings)t.has(s.id)||t.set(s.id,i(s))}return t}var Wc=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function Lc(o){if(!o||N(o))return null;let e=o.attributes.window_state;for(let t of[typeof e=="string"?e:null,o.state]){if(!t)continue;let n=Wc.find(([i])=>i.test(t.trim()));if(n)return n[1]}return null}var Cc=.5;function Be(o,e,t="window"){let n=m=>!!m&&o.states[m]?.state==="on",i=m=>!!m&&!!o.states[m]&&!N(o.states[m]),r=m=>m?Lc(o.states[m]):null,s=m=>{let y=r(m);return e.contactInvert&&m&&m!==e.tilt&&m!==e.tilt2&&y!=="tilted"&&y?y==="open"?"closed":"open":y},a=n(e.tilt2)||s(e.tilt2)==="tilted"||s(e.contact2)==="tilted",l=s(e.contact2)==="open"&&!a?1:0,d=n(e.tilt)||s(e.tilt)==="tilted"||s(e.contact)==="tilted",c=d?1:0,u=e.tiltAngle?Number(o.states[e.tiltAngle]?.state):NaN;if(Number.isFinite(u)){let m=(u-(e.tiltOffset??0))*(e.tiltInvert?-1:1);c=Math.min(1,Math.max(0,m/(e.tiltMax||15))),c<.08&&(c=0),d=c>0}let h=s(e.contact)==="open"&&!d?1:0,f=null,p=e.cover?o.states[e.cover]:void 0,g=Oc(o,e.position);if(g!==null)f=e.positionInverted?g:1-g;else if(p&&!N(p)){let m=p.attributes.current_position;typeof m=="number"?f=1-Math.min(100,Math.max(0,m))/100:f=p.state==="closed"?1:p.state==="opening"||p.state==="closing"?.5:0}else e.cover&&(f=0);if(t==="door"){let m=s(e.contact);return{open:m===null?e.shut?0:Cc:m==="closed"?0:1,open2:s(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:f,sensed:m!==null||f!==null}}if(t==="garage"){let m=s(e.contact),y=f!==null||m!==null;return f===null&&(f=m===null||m==="closed"?1:0),{open:0,open2:0,tilt:0,tilt2:0,cover:f,sensed:y}}return{open:h,open2:l,tilt:c,tilt2:a?1:0,cover:f,sensed:i(e.contact)||i(e.tilt)||Number.isFinite(u)}}function Oc(o,e){let t=e?o.states[e]:void 0;if(!t||N(t))return null;let n=Number(t.state);if(!Number.isFinite(n))return null;let i=t.attributes.unit_of_measurement==="%"||n>1;return Math.min(1,Math.max(0,i?n/100:n))}function Co(o,e){let t=new Map,n=[];for(let s of e){let a=I(s)==="camera"?`camera:${s}`:o.entities?.[s]?.device_id??`entity:${s}`,l=t.get(a);l||(t.set(a,l=[]),n.push(a)),l.push(s)}let i=n.map(s=>{let a=t.get(s),l=a.find(d=>!o.entities?.[d]?.name)??a[0];return{primary:l,others:a.filter(d=>d!==l)}}),r=new Map(e.map((s,a)=>[s,a]));return i.sort((s,a)=>r.get(s.primary)-r.get(a.primary))}function Fn(o,e){return Co(o,e).map(t=>t.primary)}var ms={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i,ac_unit:/(klima|air ?con|aircon|airco|split|\bac\b|clim)/i,awning:/(markise|awning|sonnensegel|beschattung|store|zonnescherm)/i},Ms=new Set(["tv_board","tv_wall"]);function Ps(o,e){let t=o.states[e.entity];if(!t)return!1;let n=e.attribute?t.attributes[e.attribute]:t.state;if(n==null)return!1;let i=String(n).toLowerCase(),r=e.state.trim().toLowerCase();return e.state.trim()==="*"||i===r||r.length>=3&&i.includes(r)}function Es(o){return Ms.has(o)||!!Gi(o)}function Dn(o){return Es(o)||o==="desk"||o==="fridge_smart"}function xt(o,e){let t=new Set,n=et(o,e),i=e.some(r=>r.openings.some(s=>s.confirm))?tn(o,e):null;for(let r of e){for(let s of r.placements)s.confirm&&t.add(s.entity_id);for(let s of r.openings){let a=s.confirm?i?.get(s.id)?.cover:null;a&&a!=="none"&&t.add(a)}for(let s of r.furniture){let a=s.confirm?n.get(s.id)?.entity:null;a&&a!=="none"&&t.add(a)}}return t}function zs(o,e){let t=new Map;for(let n of e)for(let i of n.furniture){if(i.type!=="awning")continue;let r=i.entity&&i.entity!=="none"?i.entity:null,s=r?o.states[r]:void 0,a=i.awning_position&&i.awning_position!=="none"?o.states[i.awning_position]:void 0,l=i.awning_time??20;if(!s||N(s)){t.set(i.id,{out:0,moving:0,time:l});continue}let d=h=>i.awning_invert?1-h:h,c=a&&Number.isFinite(Number(a.state))?Number(a.state):s.attributes.current_position,u=s.state==="opening"?i.awning_invert?-1:1:s.state==="closing"?i.awning_invert?1:-1:0;typeof c=="number"&&Number.isFinite(c)?t.set(i.id,{out:d(Math.min(1,Math.max(0,c/100))),moving:0,time:l}):u?t.set(i.id,{out:null,moving:u,time:l}):t.set(i.id,{out:d(s.state==="open"?1:0),moving:0,time:l})}return t}function Oo(o,e){let t=i=>{if(!i||i==="none")return!1;let r=o.states[i]?.state;return r==="on"||r==="open"},n=new Map;for(let i of e)for(let r of i.furniture)r.type==="fridge_smart"&&n.set(r.id,{left:t(r.door_left),right:t(r.door_right)});return n}var gs={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function Bo(o,e){return e.startsWith("sensor.")&&o.states[e]?.attributes.device_class==="power"}function Bc(o,e){if(Bo(o,e))return e;let t=o.entities?.[e]?.device_id;return t?Io(o,t).find(n=>n!==e)??null:null}function et(o,e){let t=new Map;for(let n of e){let i=new Set([...n.furniture.flatMap(r=>[r.entity,r.power]),...n.placements.map(r=>r.entity_id)].filter(r=>!!r&&r!=="none"));for(let r of n.furniture){let s=r.type in gs,a=s?gs[r.type]:ms[r.type]??(_t(r.type)?ms.robot_vacuum:void 0);if(!a&&r.entity==null&&r.power==null)continue;let l=n.rooms.find(f=>f.points.length>=3&&V([r.x,r.z],f.points)),d=l?Fn(o,se(o,l.area_id)):[],c=f=>`${f} ${Z(o,f)}`,u=r.entity==="none"?null:r.entity??null;if(r.entity==null){let f=d.filter(p=>!i.has(p));if(s){let p=f.filter(g=>I(g)==="light");u=p.find(g=>a.test(c(g)))??p[0]??null}else if(_t(r.type)){let p=l?.area_id??null;u=Object.keys(o.entities??{}).find(g=>g.startsWith("vacuum.")&&!i.has(g)&&en(o,g)===p)??null}else if(r.type==="radiator"||r.type==="ac_unit"){let p=f.filter(g=>I(g)==="climate");u=p.find(g=>a.test(c(g)))??p[0]??null}else if(Es(r.type)){let p=f.filter(g=>I(g)==="media");u=p.find(g=>o.states[g]?.attributes.device_class==="tv")??p.find(g=>a?.test(c(g)))??(Ms.has(r.type)?p[0]??null:null)}else a&&(u=f.find(p=>["switch","media","fan"].includes(I(p)??"")&&a.test(c(p)))??null);u&&i.add(u)}let h=r.power==="none"?null:r.power??null;r.power==null&&(h=u?Bc(o,u):null,!h&&a&&l&&!s&&(h=se(o,l.area_id).find(p=>Bo(o,p)&&!i.has(p)&&a.test(c(p)))??null),h&&i.add(h)),(u||h)&&t.set(r.id,{entity:u,power:h})}}return t}function No(o){if(!o||o.state==="off"||o.state==="standby"||N(o))return null;let e=o.attributes,t=`${e.app_name??""} ${e.source??""} ${e.app_id??""}`.toLowerCase();return t.includes("netflix")?[.9,.04,.08]:t.includes("youtube")?[1,.1,.15]:t.includes("prime")||t.includes("amazon")?[.1,.6,.95]:t.includes("disney")?[.2,.35,1]:t.includes("spotify")?[.12,.85,.4]:t.includes("zdf")||t.includes("ard")||t.includes("mediathek")?[1,.5,.1]:[.22,.88,1]}function As(o,e,t,n=[]){let i=(u,h)=>V([u,h],t.points),r=et(o,[e]),s=tn(o,[e]),a=[...e.placements.filter(u=>i(u.x,u.z)).map(u=>u.entity_id),...e.furniture.filter(u=>i(u.x,u.z)).flatMap(u=>[r.get(u.id)?.entity,r.get(u.id)?.power]),...e.openings.filter(u=>u.room_id===t.id).flatMap(u=>{let h=s.get(u.id);return h?[h.cover,h.contact,h.tilt,h.contact2]:[]}),...n.flatMap(u=>[u.window,u.cover,u.contact,u.tilt]),...t.panel??[]].filter(u=>!!u&&!!o.states[u]),l=new Set(t.hidden??[]),d=[...new Set(a)].filter(u=>!l.has(u)),c=new Set(d);return{shown:d,more:se(o,t.area_id).filter(u=>!c.has(u)&&!l.has(u))}}var _s=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/,Nc={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./};function Hn(o,e){let t=e.car??{},n=u=>u&&u!=="none"?u:null,i=n(t.device)??n(e.entity),r=i?o.entities?.[i]?.device_id:null,s=r&&o.entities?Object.values(o.entities).filter(u=>u.device_id===r).map(u=>u.entity_id):[],a=u=>`${u} ${o.states[u]?.attributes.friendly_name??""} ${o.entities?.[u]?.translation_key??""}`.toLowerCase().replace(/[\s-]+/g,"_"),l=(u,h,f)=>s.find(p=>h.includes(p.split(".")[0])&&Nc[u].test(a(p))&&(!f||f(p)))??null,d=u=>String(o.states[u]?.attributes.unit_of_measurement??""),c=u=>String(o.states[u]?.attributes.device_class??"");return{soc:n(t.soc)??s.find(u=>u.startsWith("sensor.")&&c(u)==="battery")??l("soc",["sensor"],u=>d(u)==="%"),range:n(t.range)??l("range",["sensor"],u=>/km|mi/.test(d(u)))??l("range",["sensor"]),charging:n(t.charging)??l("charging",["sensor"],u=>/^k?W$/.test(d(u)))??l("charging",["binary_sensor","switch"]),plugged:n(t.plugged)??s.find(u=>u.startsWith("binary_sensor.")&&c(u)==="plug")??l("plugged",["binary_sensor"]),lock:n(t.lock)??s.find(u=>u.startsWith("lock."))??l("lock",["binary_sensor"]),climate:n(t.climate)??s.find(u=>u.startsWith("climate."))??l("climate",["switch","binary_sensor"]),tracker:n(t.tracker)??s.find(u=>u.startsWith("device_tracker."))??null}}function Vc(o){let e=o.entity_id,t=String(o.state).toLowerCase().trim();return e.startsWith("lock.")?t==="locked":e.startsWith("binary_sensor.")?o.attributes.device_class==="lock"?t==="off":t==="on":e.startsWith("sensor.")?/^(locked|secured|double_locked|verriegelt|gesichert|abgeschlossen)$/.test(t)?!0:/^(unlocked|unsecured|selective_locked|partially_locked|open|entriegelt|offen|unverriegelt)$/.test(t)?!1:null:t==="on"}function In(o,e){let t=Hn(o,e),n=m=>m?o.states[m]:void 0,i=m=>{let y=Number(n(m)?.state);return m&&Number.isFinite(y)?y:null},r=i(t.soc),s=i(t.range),a=n(t.charging),l=String(a?.attributes.unit_of_measurement??""),d=a&&/^k?W$/.test(l)?(i(t.charging)??0)*(l==="kW"?1e3:1):null,c=d!==null?d>50:!!a&&["on","charging","laden"].includes(a.state.toLowerCase()),u=n(t.plugged),h=n(t.lock),f=n(t.climate),p=n(t.tracker),g=p?.state.toLowerCase()??"";return{entities:t,soc:r!==null?Math.max(0,Math.min(100,r)):null,range:s,rangeUnit:String(n(t.range)?.attributes.unit_of_measurement??"km"),chargingW:d,charging:c,plugged:u?u.state==="on":null,locked:h?Vc(h):null,climateOn:f?f.entity_id.startsWith("climate.")?f.state!=="off"&&f.state!=="unavailable":f.state==="on":null,away:p&&g!=="home"&&!N(p)?g==="not_home"?"":p.state:null}}function Rs(o,e){return e.flatMap(t=>t.furniture.filter(n=>n.type==="parking"&&n.car).flatMap(n=>Object.values(Hn(o,n)))).filter(t=>!!t)}function nn(o,e,t){if(t==="none")return null;if(t)return t;let n=e?o.entities?.[e]?.device_id:null;if(!n||!o.entities)return null;for(let i of Object.values(o.entities))if(!(i.device_id!==n||!i.entity_id.startsWith("sensor."))&&(_s.test(i.translation_key??"")||_s.test(i.entity_id.split(".")[1])))return i.entity_id;return null}function bs(o){return o.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss").replace(/ae/g,"a").replace(/oe/g,"o").replace(/ue/g,"u").normalize("NFD").replace(/[^a-z0-9]/g,"")}function Ts(o,e,t,n){let i=t?o.states[t]?.attributes:void 0;for(let r of[n?o.states[n]?.state:void 0,i?.current_room,i?.room,i?.current_segment]){let s=Vo(o,e,r);if(s)return s}return null}function Vo(o,e,t){if(typeof t!="string"||!t||t==="unknown"||t==="unavailable")return null;let n=bs(t);if(!n)return null;let i=r=>[r.name,r.area_id??"",r.area_id&&o.areas?.[r.area_id]?.name||""].map(bs).filter(Boolean);return e.find(r=>i(r).includes(n))??e.find(r=>i(r).some(s=>s.length>=3&&(s.includes(n)||n.includes(s))))??null}var Kc=new Set(["garage","gate","door"]);function Ko(o,e){let t=new Set,n=new Set,i=r=>{if(!r||r==="none"||!o.states[r])return;let s=I(r);s==="light"?t.add(r):s==="cover"&&!Kc.has(String(o.states[r].attributes.device_class??""))&&n.add(r)};for(let r of e.rooms){let s=new Set(r.hidden??[]);for(let a of Fn(o,se(o,r.area_id)))s.has(a)||i(a)}for(let r of e.placements)i(r.entity_id);for(let r of e.furniture)i(r.entity);return{lights:[...t],covers:[...n]}}function Fs(o){let e=o.split(".")[0];return e==="scene"||e==="script"?[e,"turn_on"]:e==="automation"?[e,"trigger"]:e==="button"||e==="input_button"?[e,"press"]:["homeassistant","toggle"]}function Ds(o,e,t){let n=t.target?.trim()??"";if(t.action==="navigate"&&n)history.pushState(null,"",n),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}));else if(t.action==="more_info"&&n)e.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:n},bubbles:!0,composed:!0}));else if(t.action==="service"&&n.includes(".")){let[i,r]=n.split(".",2);o.callService(i,r,t.data??{})}else t.action==="fire_dom_event"&&e.dispatchEvent(new CustomEvent("ll-custom",{detail:t.data??{},bubbles:!0,composed:!0}))}var Hs={view:"3D",editor:"Editor",all_floors:"Alle Etagen",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",open_editor:"Editor \xF6ffnen",phone_hint:"Zeichnen geht am besten am PC oder Tablet \u2013 auf dem Handy kannst du ansehen und bedienen.",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",save_failed_detail:"Speichern fehlgeschlagen: {error}. Deine \xC4nderungen bleiben in diesem Browser erhalten.",needs_restart:"Eine neue Version von NeonPlan 3D ({frontend}) ist installiert, aber Home Assistant l\xE4uft noch mit {version}. Bitte Home Assistant neu starten \u2013 bis dahin kann das Speichern fehlschlagen.",needs_reload:"Diese Seite zeigt noch NeonPlan 3D {frontend}, Home Assistant hat schon {backend}. Bitte die Seite neu laden; in der Companion-App: Einstellungen \u2192 Companion-App \u2192 Frontend-Cache zur\xFCcksetzen.",reload_page:"Neu laden",needs_restart_old:"Eine neue Version von NeonPlan 3D ist installiert, aber Home Assistant l\xE4uft noch mit einer \xE4lteren. Bitte Home Assistant neu starten \u2013 bis dahin schl\xE4gt das Speichern fehl.",draft_found:"Nicht gespeicherte \xC4nderungen vom {time} gefunden.",draft_restore:"\xDCbernehmen und speichern",draft_discard:"Verwerfen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",add_floor:"Etage hinzuf\xFCgen",floor_from_ha:"Etagen aus Home Assistant:",floor_empty:"Leere Etage",level:"Ebene {n}",ha_floor:"Etage in Home Assistant",no_ha_floor:"\u2013 keine \u2013",area_rooms:"R\xE4ume aus HA-Bereichen anlegen ({n})",area_rooms_hint:"Legt f\xFCr jeden Bereich dieser Etage einen Raum an (4 \xD7 3 m) \u2013 danach an die richtige Stelle ziehen und die Ecken anpassen",floor_name:"Name",elevation:"H\xF6he \xFCber Boden (m)",floor_shift:"Etage verschieben (m)",floor_shift_apply:"Verschieben",floor_shift_hint:"Verschiebt alle R\xE4ume, M\xF6bel, Ger\xE4te, Au\xDFenfl\xE4chen, freien W\xE4nde und das Hintergrundbild dieser Etage um X und Z. Dachfl\xE4chen und Leitungen bleiben liegen.",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",delete_floor:"Etage l\xF6schen",delete_floor_confirm:"Etage \u201E{name}\u201C mit allen R\xE4umen l\xF6schen?",move_up:"Nach oben",move_down:"Nach unten",default_floor:"Erdgeschoss",new_floor:"Etage {n}",tool_select:"Ausw\xE4hlen",show_menu:"Anzeige",tool_menu:"Werkzeug",floor_label:"Etage:",floor_settings:"Etagen-Einstellungen",floor_settings_of:"Etage {floor}",floor_none_hint:"Lege oben mit \u201EEtage\u201C \u2192 \u201EEtage hinzuf\xFCgen\u201C deine erste Etage an.",tool_group_build:"Bauen",tool_group_outside:"Drau\xDFen",tool_room:"Raum",view_menu:"Ansicht",tool_rect:"Rechteck",tool_polygon:"Freie Form",undo:"R\xFCckg\xE4ngig",redo:"Wiederholen",fit:"Grundriss komplett",fit_hint:"Den ganzen Grundriss der Etage ins Bild holen (bei Drau\xDFen mit Garten)",room:"Raum",rooms:"R\xE4ume",room_name:"Name",room_id:"ID (Karten-Option room:)",room_openings:"T\xFCren und Fenster",area:"Bereich",no_area:"Kein Bereich",material:"Boden",x:"X (m)",z:"Y (m)",width:"Breite (m)",depth:"Tiefe (m)",points:"Eckpunkte",delete_point:"Punkt l\xF6schen",duplicate:"Duplizieren",tech_open:"Technikraum zeichnen",tech_open_hint:"Danach auf die Wand im Plan tippen, an der deine Anlage h\xE4ngt.",tech_step:"Schritt {n}",tech_step_feed:"Tippe links auf \u201E{name}\u201C und dann auf die Stelle an der Wand, wo die Leitung hereinkommt (ganz unten: aus dem Boden).",tech_step_devices:"Tippe links auf Filterpumpe und Sandfilter \u2013 sie stellen sich an die Wand. W\xE4rmepumpe und Dosieranlage, wenn du sie hast.",tech_step_line:"Zieh eine Linie: von \u201E{a}\u201C zu \u201E{b}\u201C. Einfach auf das eine dr\xFCcken und zum anderen ziehen.",tech_step_loose:"Ein Rohr endet noch lose \u2013 zieh es weiter zu einem Ger\xE4t oder einer Leitung, oder l\xF6sche es (\u270B Ausw\xE4hlen).",tech_step_drawing:"Zieh weiter oder tippe Punkt f\xFCr Punkt \u2013 auf einem Ger\xE4t, einer Leitung oder einem Rohr endet die Linie.",tech_step_fit:"Tippe auf das Rohr, in das der Hahn (das Sichtglas) soll \u2013 es leuchtet orange auf.",tech_mode:"Pooltechnik",tech_mode_hint:"Den Technikraum auf dieser Wand zeichnen: Leitungen vom Pool hereinf\xFChren, Ger\xE4te hinstellen, Rohre ziehen",tech_draw:"Zeichnen",tech_pick:"Ausw\xE4hlen",pool_delete_confirm:"Den Pool mit allen {n} Rohren l\xF6schen?",tech_erase:"Radieren",tech_erase_hint:"Tippe auf ein Rohr, einen Kugelhahn, ein Sichtglas oder ein Loch \u2013 es wird gel\xF6scht. Verzeichnet? R\xFCckg\xE4ngig hilft auch.",tech_feeds:"Leitungen vom Pool",tech_devices:"Ger\xE4te",tech_fittings:"Armaturen",tech_hint:"Linie ziehen: auf ein Ger\xE4t, eine Leitung oder ein Rohr tippen und zum n\xE4chsten ziehen (oder Punkt f\xFCr Punkt tippen). Auf ein Rohr gezogen entsteht ein T-St\xFCck. Die Richtung des Wassers und den Anschluss am Ger\xE4t erkennt NeonPlan selbst.",tech_no_ports:"Setz zuerst mit dem Pool-Werkzeug Skimmer, Bodenablauf und Einl\xE4ufe an den Pool.",tech_ok:"Alles verbunden \u2013 das Wasser flie\xDFt.",tech_issue_loose:"{n} lose Rohrenden",tech_issue_port:"{name} nicht verbunden",tech_issue_feed:"{name} noch nicht hereingef\xFChrt",tech_feed_place:"Tipp auf die Stelle, wo die Leitung in den Raum kommt \u2013 ganz unten: aus dem Boden, h\xF6her: durch die Wand.",tech_start:"Auf ein Ger\xE4t oder eine Leitung tippen und eine Linie ziehen.",feed_skimmer:"Skimmer",feed_drain:"Bodenablauf",feed_inlet:"Einl\xE4ufe",feed_waste:"Kanal (R\xFCcksp\xFClen)",hp_ports:"Anschl\xFCsse",hp_side_right:"rechts",hp_side_left:"links",hp_side_back:"hinten",pool_depth:"Beckentiefe (m)",pool_rim:"Rand \xFCber dem Rasen (m)",pool_depth_hint:"Beckentiefe: vom Rand bis zum Boden. Ein 1,50 m tiefer Pool, der 20 cm aus dem Rasen schaut: Tiefe 1,50, Rand 0,20. Das Wasser steht 15 cm unter dem Rand.",pool_depth_ground:"Die Tiefe zeigt sich in 3D, sobald der Pool in einer Rasen-, Terrassen- oder anderen Fl\xE4che liegt \u2013 ohne Boden drumherum w\xE4re das Becken von au\xDFen zu sehen.",pool_port_depth:"Tiefe",pool_port_depth_hint:"Wie tief unter der Wasserlinie (m): Einl\xE4ufe meist 0,30, der Skimmer an der Wasserlinie",pool_valves:"Kugelh\xE4hne",pool_valve_shut:"zu",pool_valve_toggle:"Tippen stellt um \u2013 so, wie der Hahn wirklich steht",pool_joint:"Verbindung",block_some_fixed:"\u{1F512} Ein Teil davon ist fixiert \u2013 der Block l\xE4sst sich erst verschieben, wenn alle gel\xF6st sind.",unfix_all:"Alle l\xF6sen",wv_block_all:"Ganzer Block",wv_block_one:"Nur dieses Teil",wv_gap:"L\xFCcke: {w} \u2013 das passt hinein:",wv_gap_hint:"Tipp auf eine freie Stelle an der Wand: Hier erscheint, was hineinpasst.",wv_kit_title:"An die Wand",wv_recent:"Zuletzt benutzt",wv_none_fits:"Nichts passt in diese L\xFCcke.",wv_cat_base:"Unterschr\xE4nke & Boards",wv_cat_hang:"H\xE4ngend",wv_cat_tall:"Hochschr\xE4nke",wv_cat_living:"Sitzen & Liegen",wv_cat_light:"Leuchten",wv_cat_pack:"Aus deinen Packs",wv_cat_energy:"Energie",block_title:"M\xF6bel-Block",multi_title:"{n} M\xF6bel ausgew\xE4hlt",block_hint:"Ein Klick w\xE4hlt den ganzen Block, Ziehen verschiebt ihn. Ein einzelnes Teil: doppelt antippen oder unten seinen Namen w\xE4hlen.",multi_hint:"Umschalt + Klick nimmt M\xF6bel dazu oder heraus, Umschalt + Ziehen \xFCber freie Fl\xE4che zieht einen Rahmen. Zusammen verschieben, drehen, kopieren oder als Block zusammenfassen.",block_part_edit:"Nur dieses Teil bearbeiten",block_break:"Block aufl\xF6sen",block_make:"Als Block zusammenfassen",multi_mode:"Mehrere ausw\xE4hlen (Tippen nimmt dazu, Ziehen zieht einen Rahmen)",block_part:"Teil eines Blocks.",block_select:"Ganzen Block w\xE4hlen",block_delete:"{n} M\xF6bel l\xF6schen?",block_delete_fixed:"{n} M\xF6bel l\xF6schen? Einige davon sind fixiert.",delete:"L\xF6schen",new_room:"Raum {n}",settings:"Einstellungen",pendant_shape:"Form",pendant_shade:"Schirm",pendant_globe:"Kugel",pendant_cone:"Kegel",pendant_drum:"Trommel",pkg_open:"Einrichten \u2026",pkg_hint:"Die M\xF6bel kommen an die W\xE4nde des Raums; Leuchten verbinden sich mit den Lichtern des Bereichs. Danach einzeln anpassen \u2013 Strg+Z nimmt alles zur\xFCck.",pkg_done:"{n} M\xF6bel gesetzt \u2013 Strg+Z nimmt es zur\xFCck.",pkg_kitchen_row:"K\xFCchenzeile",pkg_kitchen_row_desc:"Zeile an der R\xFCckwand mit K\xFChlschrank, Backofen, Sp\xFCle, Sp\xFClmaschine und Herd, Oberschrank, Esstisch mit Pendelleuchte",pkg_kitchen_l:"K\xFCche in L-Form",pkg_kitchen_l_desc:"Zeile hinten und links, Kochinsel mit Barhockern",pkg_bath:"Bad",pkg_bath_desc:"Waschtisch, WC, Badewanne, Waschmaschine, Einbauspot",pkg_bedroom:"Schlafzimmer",pkg_bedroom_desc:"Doppelbett mit zwei Nachttischen, Schrank, Kommode, Deckenleuchte",pkg_living:"Wohnzimmer",pkg_living_desc:"TV-Board, Sofa, Couchtisch, Teppich, Sessel, Regal, Stehlampe, Pflanze",pkg_dining:"Esszimmer",pkg_dining_desc:"Esstisch mit vier St\xFChlen, Sideboard, Pendelleuchte",pkg_office:"B\xFCro",pkg_office_desc:"Schreibtisch mit B\xFCrostuhl, zwei Regale, Deckenleuchte",pkg_kids:"Kinderzimmer",pkg_kids_desc:"Einzelbett, Schreibtisch, Regal, Teppich",pkg_hall:"Flur",pkg_hall_desc:"Garderobe, zwei Einbauspots",spots_place:"Spots setzen",spots_type:"Leuchte",spots_cols:"Spalten (links\u2013rechts)",spots_rows:"Reihen (vorne\u2013hinten)",spots_add:"{n} Leuchten setzen",spots_placed:"{n} Leuchten gesetzt.",spots_hint:"Alle Leuchten folgen dem gew\xE4hlten Licht (z. B. Spots an einem Dimmer). Einzeln verschieben und ein anderes Licht w\xE4hlen geht danach wie bei jedem M\xF6bel.",cancel:"Abbrechen",backup:"Sicherung",backup_history:"Wiederherstellungspunkte",backup_none:"Noch keine. Beim Bearbeiten entsteht h\xF6chstens alle 10 Minuten ein Punkt.",backup_summary:"{rooms} R\xE4ume, {furniture} M\xF6bel",backup_restore:"Wiederherstellen",backup_restore_confirm:"Den Stand vom {time} wiederherstellen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_restored:"Wiederhergestellt.",backup_file:"Datei",backup_export:"Exportieren",backup_export_share:"Als Vorlage teilen",backup_export_share_hint:"Ohne Bereiche, Ger\xE4te, Sensoren und Bilder \u2013 zum Weitergeben an andere.",backup_import:"Importieren \u2026",backup_import_confirm:"Den ganzen Grundriss durch die Datei ersetzen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_import_error:"Die Datei ist kein Floorplan-3D-Plan ({error}).",backup_imported:"Importiert.",backup_hint:"Hintergrundbilder sind nicht in der Datei enthalten.",backup_other_hint:"Grundriss aus Sweet Home 3D, einem iPhone-Scan, CAD (DXF), Blender/SketchUp oder einer Saugroboterkarte?",backup_other:"Zur Import-Seite",backup_full:"Komplett-Backup",backup_full_export:"Alles sichern (Plan, Bilder, Packs)",backup_full_import:"Komplett-Backup wiederherstellen \u2026",backup_full_hint:"Eine Datei mit dem Plan, allen Hintergrund- und Bildschirmbildern und den installierten Packs. Beim Wiederherstellen wird jedes Pack erneut gepr\xFCft; der Lizenzschl\xFCssel ist nicht enthalten.",backup_full_confirm:"Plan, Bilder und Packs durch das Backup ersetzen? Der aktuelle Stand bleibt als Wiederherstellungspunkt erhalten.",backup_full_not_backup:"Das ist kein Komplett-Backup von NeonPlan 3D.",backup_full_restored:"Backup wiederhergestellt: {packs} Packs, {pictures} Bilder.",backup_full_skipped:"\xDCbersprungen (nicht pr\xFCfbar oder f\xFCr eine andere Installation): {packs}.",export_name_full:"komplett",device_confirm:"Vor dem Schalten nachfragen",device_confirm_hint:"Beim Antippen in 3D, im Schnellmen\xFC und im Raumfenster erscheint erst eine R\xFCckfrage. Doppeltipp auf den Raum l\xE4sst dieses Ger\xE4t aus.",cover_confirm_hint:"Auf, Zu und Positionen fragen im Schnellmen\xFC und im Raumfenster erst nach, und Wischen \xFCber das Symbol bewegt den Rollladen nicht mehr (es dreht dann die Ansicht). Stopp fragt nie.",confirm_switch:"{name} wirklich schalten?",split_handle_hint:"Ziehen: Breite von Plan und 3D-Ansicht",wall_exterior:"Au\xDFenwand (m)",wall_interior:"Innenwand (m)",grid:"Raster (m)",background:"Vorlage (Grundriss-Bild)",background_upload:"Bild w\xE4hlen \u2026",background_width:"Breite im Plan (m)",background_opacity:"Deckkraft",background_rotation:"Drehung (\xB0)",background_edit:"Verschieben, skalieren und drehen",background_edit_done:"Fertig",background_edit_hint:"Solange der Modus an ist: Bild ziehen verschiebt es, der Griff unten rechts zieht es gr\xF6\xDFer oder kleiner. Erst das Bild an den Ma\xDFstab anpassen, dann drehen.",background_remove:"Vorlage entfernen",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Pfeiltasten verschieben \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",hint_empty:"Lege zuerst eine Etage an.",area_m2:"{a} m\xB2",overlap_warning:"R\xE4ume \xFCberlappen sich \u2013 die W\xE4nde dort sind unvollst\xE4ndig.",read_only:"Nur Administratoren k\xF6nnen den Grundriss bearbeiten.",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"NeonPlan 3D",card_description:"Deine Wohnung in 3D (Neon).",stats:"{calls} Draw-Calls \xB7 {tris} Dreiecke",stats_fps:"{fps} B/s (langsamstes Bild {ms} ms)",stats_idle:"Ruhe (0 B/s)",stats_busy_camera:"Kamera",stats_busy_floors:"Etagen",stats_busy_openings:"T\xFCren/Fenster",stats_busy_flash:"Blitz",stats_busy_roof:"Dach",stats_busy_flow:"Stromfluss",stats_busy_effect:"Farbeffekt",stats_busy_robot:"Roboter",stats_busy_orbit:"Kamerafahrt",stats_busy_tint:"Raumfarbe",stats_busy_solar:"Solarmodule",stats_busy_sound:"Musik",stats_low:"Stufe Tablet, Pixeldichte {r}",stats_full:"volle Stufe, Pixeldichte {r}",floors_apart:"Auseinander",floors_stacked:"Gestapelt",roof_keep:"Dach bleibt",roof_keep_hint:"Das Dach bleibt beim Heranzoomen auf dem Haus, statt sich zu heben und auszublenden",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch",state_on:"An",state_off:"Aus",state_open:"Offen",state_closed:"Zu",state_opening:"\xD6ffnet",state_closing:"Schlie\xDFt",state_playing:"Spielt",state_paused:"Pause",state_idle:"Bereit",state_locked:"Verriegelt",state_unlocked:"Entriegelt",state_detected:"Erkannt",state_clear:"Frei",state_unavailable:"Nicht verf\xFCgbar",state_heat:"Heizen",state_cool:"K\xFChlen",state_auto:"Automatik",state_heat_cool:"Heizen/K\xFChlen",state_dry:"Entfeuchten",state_fan_only:"L\xFCften",devices:"Ger\xE4te",devices_none_area:"Verkn\xFCpfe den Raum mit einem Bereich, dann erscheinen dessen Ger\xE4te hier.",devices_none:"Im Bereich gibt es keine passenden Ger\xE4te.",devices_place_all_n:"Alle {n} platzieren \u2026",devices_place_all_confirm:"{n} Ger\xE4te auf einmal in den Raum setzen? (Strg+Z bzw. \u201ER\xFCckg\xE4ngig\u201C nimmt alle in einem Schritt zur\xFCck.)",devices_src_area:"Dieser Bereich",devices_src_other:"Andere Bereiche",devices_src_none:"Ohne Bereich",panel_hide:"Im Raumfenster ausblenden",panel_unhide:"Im Raumfenster wieder zeigen",panel_state_hide:"Zustand im Raumfenster ausblenden (z. B. ein Rollladen, der nur \u201Eunbekannt\u201C meldet)",panel_state_show:"Zustand im Raumfenster wieder zeigen",devices_place:"Platzieren",devices_remove:"Entfernen",devices_hint:"Platzierte Ger\xE4te erscheinen in 3D. Im Plan lassen sie sich verschieben.",panel_lights:"Licht",panel_covers:"Rolll\xE4den",panel_climate:"Heizung",panel_media:"Medien",panel_switches:"Schalter",panel_sensors:"Sensoren",panel_scenes:"Szenen & Skripte",panel_cameras:"Kameras",camera_live:"Livebild \xF6ffnen",through_camera:"Durch die Kamera schauen",through_blend:"\xDCberblendung",through_back:"Zur\xFCck zur Ansicht",camera_mount:"Montage",camera_mount_wall:"Wand (Blickrichtung = Drehung)",camera_mount_ceiling:"Decke (Dome, rundum)",camera_fov:"Sichtwinkel (\xB0)",camera_reach:"Reichweite (m)",camera_fov_short:"Winkel \xB0",camera_reach_short:"Reichweite m",camera_tilt:"Neigung nach unten (\xB0)",camera_tilt_short:"Neigung \xB0",camera_aim_hint:"Im Plan zeigt der Kegel, wohin die Kamera schaut. Der Griff an seiner Spitze dreht die Kamera und setzt die Reichweite. In 3D endet der Kegel an der ersten Wand.",camera_detect_found:"Erkennung (Kamera-Cockpit): {n} Sensoren am Ger\xE4t gefunden \u2013 {kinds}. Meldet einer gerade etwas, steht in der 3D-Ansicht ein Pin vor der Kamera; die Kamera-Wand (Schalter \u201EKameras\u201C unten in der 3D-Ansicht) zeigt alle Livebilder.",camera_detect_none:"Erkennung (Kamera-Cockpit): Am Ger\xE4t dieser Kamera gibt es keine Bewegungs- oder Erkennungssensoren. Pins erscheinen, sobald die Integration welche liefert (Frigate, UniFi Protect, Reolink \u2026).",camera_cone:"Sichtkegel in 3D zeigen",camera_detect_pins:"Erkennungs-Symbole zeigen (Person, Auto, Tier)",camera_detect_pins_hint:"Aus: Bei einer Erkennung erscheinen keine Symbole \xFCber der Kamera, nur der Sichtkegel f\xE4rbt sich rot \u2013 dezenter auf dem Wandtablet.",state_recording:"Nimmt auf",state_streaming:"Streamt",panel_all_off:"Alle aus",panel_all_on:"Alle an",view_options:"Ansicht: Qualit\xE4t, Look, Symbole, FPS",panel_all_open:"Alle auf",panel_all_close:"Alle zu",central:"Zentral: alle Lichter, Rolll\xE4den und Favoriten",central_house:"Ganzes Haus",central_lights:"Lichter",central_covers:"Rolll\xE4den",central_on:"An",central_off:"Aus",central_open:"Auf",central_close:"Zu",central_sure:"Sicher?",central_favorites:"Favoriten",central_no_favorites:"Noch keine Favoriten. Im Editor unter \u201EFavoriten\u201C legst du Szenen, Skripte und Schalter fest.",card_central:"Stern mit Zentral-Men\xFC",card_central_hint:"Alle Lichter und Rolll\xE4den der Etage oder des Hauses und die Favoriten aus dem Editor.",favorites:"Favoriten",favorites_hint:"Szenen, Skripte, Automationen, Tasten und Schalter f\xFCr das Zentral-Men\xFC (Stern) der 3D-Ansicht \u2013 Party, Anwesenheitssimulation, Verschattung, Bew\xE4sserung.",favorites_add:"Favorit hinzuf\xFCgen",background_handles_hint:"Das Bild hat jetzt Griffe wie ein M\xF6bel: ziehen verschiebt es, die Ecke unten rechts skaliert, der runde Griff oben dreht (mit Umschalt in 15\xB0-Schritten). Passt es, \u201EFertig\u201C tippen \u2013 dann liegt es fest.",background_fixed_hint:"Das Bild liegt fest, du kannst dar\xFCber zeichnen. Zum Anpassen \u201EVerschieben, skalieren und drehen\u201C tippen.",bg_level:"Gerade ausrichten",bg_level_cancel:"Ausrichten abbrechen",bg_level_first:"Tippe auf den Anfang einer Wand im Bild, die gerade (waagerecht oder senkrecht) sein soll.",bg_level_second:"Jetzt auf das Ende dieser Wand tippen \u2013 das Bild dreht sich passend.",bg_ruler:"Ma\xDFstab mit Lineal",bg_ruler_cancel:"Lineal abbrechen",bg_ruler_first:"Tippe im Bild auf den Anfang einer Strecke, deren L\xE4nge du kennst \u2013 etwa eine bema\xDFte Wand.",bg_ruler_second:"Jetzt auf das Ende der Strecke tippen.",bg_ruler_length_hint:"Im Plan gemessen: {m}. Gib die echte L\xE4nge ein, das Bild wird passend skaliert.",bg_ruler_length:"Echte L\xE4nge (m)",bg_ruler_apply:"Ma\xDFstab \xFCbernehmen",thumbs_fold:"Etagenbilder zu Kn\xF6pfen einklappen",thumbs_show:"Etagenbilder wieder zeigen",room_start_view:"Ansicht als Start des Raums",room_start_view_hint:"Tippst du den Raum in 3D an, fliegt die Kamera genau so hin, wie die 3D-Ansicht rechts gerade steht \u2013 Blickwinkel, Zoom und Bildausschnitt. Erst 3D daneben einschalten, den Raum drehen und heranzoomen, dann tippen.",room_start_view_reset:"Startansicht des Raums entfernen (wieder von oben)",room_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh und zoom den Raum so, wie er sich \xF6ffnen soll.",floor_start_view:"Ansicht als Start der Etage",floor_start_view_hint:"Diese Etage \xF6ffnet sich in 3D so, wie die 3D-Ansicht rechts gerade steht \u2013 etwa das Erdgeschoss von vorn und das Obergeschoss von hinten. Erst 3D daneben einschalten, drehen, dann tippen.",floor_start_view_reset:"Startansicht der Etage entfernen (wieder wie das Haus)",floor_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh die Etage so, wie sie sich \xF6ffnen soll.",glow_scale:"Leuchtst\xE4rke in 3D (%)",glow_scale_hint:"Wie kr\xE4ftig die Leuchte in 3D leuchtet: unter 100 % d\xE4mpft helle LED-Streifen, damit der Raum nicht \xFCberstrahlt; \xFCber 100 % l\xE4sst eine schwache Lampe st\xE4rker leuchten. Schaltet nichts in Home Assistant.",vehicle_to_spot:"In Stellplatz umwandeln",vehicle_to_spot_hint:"Ein Fahrzeug als einfaches M\xF6bel steht immer da. Als Stellplatz erscheint es nur, wenn ein Sensor das Auto meldet, und dort stellst du auch Auto Pro ein (Ladestand, Reichweite, Schloss, Klima).",as_furniture:"Als M\xF6bel darstellen",as_furniture_hint:"Ersetzt den Pin durch ein M\xF6bel an derselben Stelle, das mit diesem Ger\xE4t verkn\xFCpft ist \u2013 etwa ein Lautsprecher f\xFCr einen Media Player oder eine Leuchte f\xFCr ein Licht. Strg+Z nimmt es zur\xFCck.",as_furniture_pick:"M\xF6bel w\xE4hlen \u2026",as_device:"Wieder als Ger\xE4te-Pin",as_device_hint:"Ersetzt das M\xF6bel durch den einfachen Pin seines Ger\xE4ts an derselben Stelle.",presets:"Sender und Playlists (Klang & Kino)",presets_hint:"Erscheinen im Schnellmen\xFC jedes Lautsprechers unter \u201EAbspielen\u201C, neben den Quellen des Players. F\xFCr einen Echo (Alexa Media Player): Art SPOTIFY, AMAZON_MUSIC oder TUNEIN und als Inhalt, was du sagen w\xFCrdest (\u201ERock Antenne\u201C). F\xFCr Sonos, Music Assistant und andere: Art music oder url mit einer Stream-Adresse oder einer URI.",preset_type:"Art",preset_type_hint:"media_content_type von play_media, z. B. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Inhalt",preset_content_hint:"media_content_id: Stream-URL, URI (spotify:playlist:\u2026) oder bei Alexa ein Suchbegriff",preset_add:"Sender oder Playlist",media_play_head:"Abspielen",own_buttons:"Eigene Kn\xF6pfe",own_buttons_hint:"Erscheinen im Zentral-Men\xFC (Stern) unter den Favoriten: eine Dashboard-Seite \xF6ffnen, die Details einer Entit\xE4t zeigen, einen Dienst aufrufen oder ein browser_mod-Popup mit deiner eigenen Karte \xF6ffnen.",own_button_label:"Beschriftung",own_button_action:"Aktion",own_button_new:"Neuer Knopf",own_button_add:"Eigener Knopf",own_action_navigate:"Seite \xF6ffnen",own_action_more_info:"Details einer Entit\xE4t",own_action_service:"Dienst aufrufen",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Pfad",own_target_more_info:"Entit\xE4t",own_target_service:"Dienst (domain.service)",own_data:"Daten (JSON)",own_data_hint:'F\xFCr einen Dienst seine Daten, f\xFCr fire-dom-event der Inhalt des Ereignisses, z. B. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.',own_data_bad:"Kein g\xFCltiges JSON-Objekt.",panel_no_area:"Dieser Raum ist mit keinem Bereich verkn\xFCpft. Im Editor kannst du ihn verkn\xFCpfen.",panel_empty:"F\xFCr diesen Raum sind keine Ger\xE4te im Grundriss. Im Editor lassen sich Ger\xE4te platzieren oder mit \u2606 f\xFCrs Raumfenster ausw\xE4hlen.",close:"Schlie\xDFen",wall_view:"Wandansicht",walk_start:"Rundgang durchs Haus",walk_title:"Rundgang",walk_end:"Beenden",walk_hint:"Ziehen: umsehen \xB7 Tippen auf den Boden: hinlaufen \xB7 W A S D / Pfeiltasten oder der Kn\xFCppel: laufen \xB7 Esc: beenden",card_next:"n\xE4chster Schritt \u2026",card_step_hole:"Durch ein Loch",card_step_fit:"Einbauen",card_step_end:"Oder ans Ziel",card_lay:"Verlegen",card_hole_out:"nach au\xDFen",card_hole_in:"nach innen",card_to:"Verbinden mit",card_through:"\xDCber (in Reihenfolge, wenn n\xF6tig)",card_group_pool:"Am Pool",card_group_tech:"Technik",card_group_joints:"T- und Y-St\xFCcke",card_group_holes:"L\xF6cher",card_open:"Anschl\xFCsse",card_open_other:"Karte dieses Teils \xF6ffnen",card_port:"Anschluss",card_via:"\xFCber",card_reroute:"Neu verlegen",card_disconnect:"Trennen",card_with:"verbinden mit \u2026",card_connect:"Verbinden",card_connect_with:"Verbinden mit \u2026",card_status:"{a} von {b} verbunden",card_show_plan:"Im Grundriss zeigen",card_show_wall:"In der Wandansicht zeigen",joint_name:"Name (z. B. Loch Skimmer)",conn_hole_out:"{name}: von innen nach au\xDFen",conn_hole_in:"{name}: von au\xDFen nach innen",hint_joint_place:"T- oder Y-St\xFCck: im Grundriss tippen \u2013 auf ein Rohr getippt, wird es ins Rohr eingesetzt",port_suction:"Saugseite",port_pressure:"Druckseite",port_pump:"Von der Pumpe",port_return:"R\xFCcklauf",port_waste:"Abwasser",port_in:"Eingang",port_out:"Ausgang",port_out1:"Ausgang 1",port_out2:"Ausgang 2",port_inside:"innen",port_outside:"au\xDFen",port_used:"belegt",joint_tee:"T-St\xFCck {n}",joint_y:"Y-St\xFCck {n}",joint_wall:"Loch {n} (Wand)",joint_floor:"Loch {n} (Boden)",joint_add_tee:"T-St\xFCck",joint_add_y:"Y-St\xFCck",wall_kit_hole_wall:"Loch in der Wand",wall_kit_hole_floor:"Loch im Boden",wall_kit_tee:"T-St\xFCck",wall_kit_y:"Y-St\xFCck",wall_run_place:"Auf die Wand tippen, wo es hin soll",valve_top6:"6-Wege-Ventil oben",valve_side6:"6-Wege-Ventil seitlich",valve_four:"4-Wege-Ventil",pool_valve_type:"Mehrwegeventil",pool_loose_end:"offenes Ende",pool_holes_hint:"L\xF6cher in Wand und Boden setzt du in der Wandansicht (Leiste links).",conn_add:"Rohr hinzuf\xFCgen",conn_from:"Von",conn_via:"\xDCber (in Reihenfolge)",conn_add_via:"+ Loch, Kugelhahn, Sichtglas \u2026",conn_to:"Nach",conn_and:"Und nach (zweites Ziel, mit T-St\xFCck davor)",conn_choose:"w\xE4hlen \u2026",conn_create:"Anlegen",conn_hint:"Der Weg wird automatisch gelegt \u2013 drinnen an den Anschl\xFCssen entlang, drau\xDFen rechtwinklig unter der Erde. Feinverlegen in der Wandansicht und im Grundriss.",wall_kit_pool:"Pooltechnik",wall_kit_energy:"Energie",wall_run_add:"+ Rohr",wall_run_start:"Rohr: am Ger\xE4t, auf einem Rohr (T-St\xFCck) oder auf der Wand anfangen",wall_run_next:"Weitere Punkte setzen \u2013 am Ger\xE4t oder auf einem Rohr endet es, Doppelklick oder Enter beendet",wall_run_down:"\u2193 In den Boden",wall_run_through:"\u27C2 Durch die Wand",wall_run_done:"Fertig",wall_run_fit:"Auf das Rohr tippen, wo es hin soll",wall_run_valve:"Kugelhahn",wall_run_sight:"Sichtglas",wall_run_pipe:"Rohr",wall_run_pt:"H\xF6he des Punkts (m)",wall_run_more:"Weiterzeichnen",wall_run_tip:"Punkte ziehen \xB7 Doppelklick entfernt \xB7 Kugelhahn antippen: auf/zu",wall_view_turn:"Um 45\xB0 drehen \u2013 an der Wand r\xFCckt es in den Raum",wall_view_fixed:"Fixiert \u2013 zum Ziehen erst l\xF6sen",wall_view_3d:"3D im Raum",wall_view_lift:"Nach oben oder unten ziehen: H\xF6he \xFCber Boden",wall_zoom_hint:"Vergr\xF6\xDFern: Mausrad oder zwei Finger",wall_zoom_all:"Ganze Wand",wall_view_hint_3d:"M\xF6bel antippen und auf dem Boden ziehen \xB7 Mausrad oder zwei Finger: n\xE4her oder weiter weg \xB7 mittlere oder rechte Maustaste (am Tablet zwei Finger): umsehen \xB7 unten Abst\xE4nde und H\xF6he eintippen \xB7 Pfeile links und rechts: zur n\xE4chsten Wand",wall_view_front:"Wand von vorne",wall_view_depth:"Abstand zur Wand (m)",wall_view_room:"W\xE4nde dieses Raums von vorne ansehen",hint_wall_pick:"Wandansicht: in den Raum klicken (oder nah an eine Wand)",wall_view_open:"Die Wand von vorne ansehen: M\xF6bel daran entlang der Wand und in der H\xF6he verschieben",wall_view_hint:"Ziehen verschiebt entlang der Wand und \u2013 bei H\xE4ngendem \u2013 in der H\xF6he \xB7 Pfeiltasten 1 cm, mit Umschalt 10 cm \xB7 Kanten rasten an Wandenden, T\xFCren, Fenstern und anderen M\xF6beln ein (Alt: frei) \xB7 Doppelklick \xF6ffnet das M\xF6bel im Grundriss",wall_view_empty:"An dieser Wand steht noch nichts \u2013 M\xF6bel, die mit dem R\xFCcken an der Wand stehen oder daran h\xE4ngen, erscheinen hier.",wall_view_left:"Abstand von links (m)",wall_view_floor:"steht auf dem Boden",wall_view_form:"Im Grundriss bearbeiten",wall_prev:"Vorige Wand",wall_next:"N\xE4chste Wand",brightness:"Helligkeit",color_temp:"Farbtemperatur",color:"Farbe",position:"Position",cover_open:"Auf",cover_stop:"Stopp",cover_tilt:"Lamellen",cover_tilt_open:"Lamellen auf",cover_tilt_close:"Lamellen zu",cover_close:"Zu",target_temp:"Soll",current_temp:"Ist",temp_down:"K\xE4lter",temp_up:"W\xE4rmer",volume:"Lautst\xE4rke",play_pause:"Wiedergabe/Pause",previous:"Zur\xFCck",next:"Weiter",run:"Ausf\xFChren",details:"Details",hold_hint:"Antippen schaltet \xB7 lange dr\xFCcken \xF6ffnet Details",tool_opening:"T\xFCr & Fenster",tool_furniture:"M\xF6bel",qm_off:"Aus",find:"Suchen",find_placeholder:"Wo ist \u2026? Ger\xE4t oder Raum",find_none:"Nichts gefunden",swipe_off:"Aus",panel_pin:"Im Raumfenster zeigen",panel_unpin:"Nicht im Raumfenster zeigen",devices_panel_hint:"Das Raumfenster zeigt die Ger\xE4te im Grundriss. \u2606 nimmt ein Ger\xE4t zus\xE4tzlich ins Raumfenster auf, ohne es zu platzieren.",card_section_view:"Ansicht",card_size:"Gr\xF6\xDFe",card_size_fixed:"Feste H\xF6he",card_size_fill:"Bildschirm f\xFCllen",card_fill_hint:"Am besten in einer Dashboard-Ansicht vom Typ \u201EPanel (1 Karte)\u201C \u2013 dann nimmt die Karte den ganzen Platz ein.",card_controls:"Schalter in der Karte",card_floor_thumbs:"Etagen als Mini-Ansichten",card_floor_thumbs_hint:"Kleine Bilder der Etagen am Rand \u2013 antippen wechselt die Etage",card_floor_thumbs_hint_start:"Die gew\xE4hlte Etage ist dann die Start-Etage \u2013 mit den Bildern am Rand wechselt man zu den anderen",card_room_names:"Raumnamen anzeigen",card_section_kiosk:"Wandtablet (Kiosk)",card_section_features:"Funktionen",card_weather_plan:"wie im Plan eingestellt",card_pro_hint:"Bewegungsspur und Wetter sind Pro-Erweiterungen: ohne die passende Erweiterung bleiben die Schalter wirkungslos.",card_idle_return:"Zur\xFCck zur Startansicht nach",card_idle_off:"Nie",card_idle_min:"{n} min ohne Bedienung",card_idle_hint:"Nach der Wartezeit schlie\xDFt die Karte den Raum und zeigt wieder die Startansicht.",card_night:"Nachtdimmung",card_night_off:"Aus",card_night_sun:"Nach Sonnenstand",card_night_time:"Zeitraum",card_night_range:"Zeitraum (z. B. 22:00-06:00)",card_idle_orbit:"Kamerafahrt als Bildschirmschoner",card_idle_orbit_hint:"Nach der R\xFCckkehr dreht sich die Ansicht langsam, bis jemand das Tablet ber\xFChrt",card_dashboard:"Knopf zu einem Dashboard (Pfad)",card_dashboard_label:"Beschriftung des Knopfs",card_dashboard_hint:"Ein Knopf oben rechts in der Karte \xF6ffnet das Dashboard oder die Ansicht mit diesem Pfad, z. B. /lovelace/home oder /dashboard-haus/0. Ohne Beschriftung zeigt er \u2302.",card_alerts:"Warnungen anzeigen",card_alerts_hint:"Rauch, Gas, CO, Wasser, Alarmanlage und offene Fenster bei Regen: der Raum pulsiert, oben erscheint ein Hinweis",card_alert_jump:"Bei neuer Warnung zum Raum springen",card_alert_jump_hint:"Die Ansicht wechselt selbst zur Etage und zum Raum der Warnung",card_scenes:"Szenen-Kn\xF6pfe im Raum",card_scenes_hint:"Szenen und Skripte des Bereichs als Kn\xF6pfe unter der 3D-Ansicht, wenn ein Raum gew\xE4hlt ist",card_motion_trail:"Bewegungsspur",card_camera_wall:"Knopf \u201EKameras\u201C (Kamera-Wand)",card_camera_wall_hint:"Ein Knopf unten in der Karte \xF6ffnet die Kamera-Wand mit allen Livebildern (Pro: Kamera-Cockpit).",card_motion_trail_hint:"Wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit (Bewegungs-, Pr\xE4senz- und Kamerasensoren)",trail_short:"Spur",cameras_short:"Kameras",camera_wall_title:"Kamera-Wand",camera_wall_hint:"Kamera-Wand: alle Livebilder auf einmal; Antippen zeigt ein Bild gro\xDF, ein roter Rahmen zeigt Bewegung",camera_wall_all:"Alle Kameras",camera_still:"Standbild, alle {s} s neu",camera_wall_big:"Bild gro\xDF zeigen",detect_person:"Person",detect_car:"Fahrzeug",detect_pet:"Tier",detect_motion:"Bewegung",weather_short:"Wetter",weather_entity:"Wetter-Entit\xE4t",weather_effects:"Wetter-Effekte in 3D",weather_effect_rain:"Regen",weather_effect_snow:"Schnee",weather_effect_fog:"Nebel (graut die Szene ein)",weather_effect_clouds:"Wolken dunkeln Himmel und Sonne ab",weather_effect_lightning:"Blitze bei Gewitter",weather_effect_sky:"Sonne und Mond am Himmel",rain_warning:"Warnung: Fenster offen bei Regen",rain_entity:"Regen von eigener Wetterstation",rain_entity_hint:"Ein Regensensor (an = Regen) oder eine Regenrate (mm/h) deiner Wetterstation sagt, ob es am Haus regnet \u2013 f\xFCr die Regenwarnung und den Regen in 3D. Ohne Auswahl entscheidet die Wetter-Entit\xE4t.",rain_ignore:"Bei Regen nicht warnen",rain_ignore_hint:"Dieses Fenster darf bei Regen offen bleiben (z. B. unter dem Vordach): keine Regenwarnung f\xFCr dieses Fenster, alle anderen warnen weiter.",outage_entity:"Stromausfall melden mit",outage_entity_hint:"Eine Entit\xE4t, die einen Stromausfall meldet: ein Netz-Sensor (binary_sensor der Klasse power \u2013 \u201Eaus\u201C hei\xDFt kein Strom), eine USV (\u201Eauf Batterie\u201C), eine Netzspannung unter 100 V oder ein eigener Helfer, der bei Ausfall \u201Ean\u201C ist. Dann erscheint eine Warnung, und der Netzanschluss wird durchgestrichen.",sun_patches:"Sonnenlicht durch die Fenster",sun_patches_hint:"Mit eingestellter Nordrichtung f\xE4llt das Sonnenlicht aus sun.sun als helle Flecken durch die Fenster auf den Boden. Ohne Haken bleibt der Boden ohne Sonnenflecken.",weather_entity_hint:"Die Wetter-Entit\xE4t liefert Regen, Schnee, Nebel und Wolken f\xFCr die 3D-Ansicht; \u201Eautomatisch\u201C nimmt die erste.",weather_hint:"Wetter drau\xDFen: Regen, Schnee, Nebel und Wolken aus der Wetter-Entit\xE4t, Sonne und Mond nach sun.sun",card_weather:"Wetter drau\xDFen",card_weather_hint:"Regen, Schnee, Nebel und Wolken aus der ersten Wetter-Entit\xE4t (weather_entity w\xE4hlt eine andere); auf Stufe Tablet nur die Bew\xF6lkung",trail_hint:"Bewegungsspur: wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit",alerts:"Warnungen",alert_smoke:"Rauch: {name}",alert_gas:"Gas: {name}",alert_co:"Kohlenmonoxid: {name}",alert_water:"Wasser: {name}",alert_alarm:"Alarm ausgel\xF6st",alert_alarm_pending:"Alarm wird ausgel\xF6st",alert_window_rain:"Fenster offen bei Regen: {name}",alert_power_outage:"Stromausfall: {name}",alert_names:"Ger\xE4tenamen in Warnungen zeigen",alert_names_hint:"An: \u201EK\xFCche \xB7 Rauch: Rauchmelder K\xFCche\u201C. Aus: nur \u201EK\xFCche \xB7 Rauch\u201C \u2013 k\xFCrzer auf dem Wandtablet. Ohne Raum bleibt der Ger\xE4tename stehen.",alert_short_smoke:"Rauch",alert_short_gas:"Gas",alert_short_co:"Kohlenmonoxid",alert_short_water:"Wasser",alert_short_alarm:"Alarm ausgel\xF6st",alert_short_alarm_pending:"Alarm wird ausgel\xF6st",alert_short_window_rain:"Fenster offen bei Regen",alert_short_power_outage:"Stromausfall",power_outage:"Stromausfall",room_names_short:"Raumnamen",floor_stack_short_dim:"Abgedunkelt",floor_stack_short_stacked:"Gestapelt",floor_stack_short_single:"Einzeln",size_short_w:"B",size_short_d:"T",size_short_h:"H",import_error_not_json:"Die Datei ist kein JSON.",import_error_not_plan:"Die Datei ist kein Floorplan-3D-Plan.",export_name_template:"vorlage",export_name_backup:"sicherung",card_floor_stack:"Etagen darunter",floor_stack_dim:"Abgedunkelt",floor_stack_stacked:"Gestapelt (ganzes Haus bis hier)",floor_stack_single:"Ausgeblendet (nur diese Etage)",card_control_walls:"W\xE4nde hoch/Schnitt",card_control_floors:"Etagen auseinander",card_control_temperature:"Temperatur",card_control_humidity:"Feuchte",card_control_co2:"CO\u2082",card_controls_hint:"W\xE4nde hoch/Schnitt, Etagen auseinander und Temperatur, Feuchte, CO\u2082 zum Umschalten",controls_hide:"Bedienelemente ausblenden \u2013 nur die 3D-Ansicht bleibt",nav_wrap:"Leiste umbrechen: alle Etagen und R\xE4ume auf mehreren Zeilen",nav_row:"Leiste in einer Zeile (seitlich scrollen)",controls_show:"Bedienelemente wieder einblenden",card_controls_hidden:"Mit ausgeblendeten Bedienelementen starten",card_pets:"Haustiere zeigen",card_ghost:"Halloween-Geist zeigen",card_ghost_hint:"Fun-Pack Halloween: der Geist schwebt auch durch das Haus dieser Karte (z. B. am Wandtablet ausschalten)",card_pets_hint:"Fun-Pack Haustiere: die angelegten Tiere in dieser Karte zeigen (z. B. am Wandtablet ausschalten)",news_pets_title:"Neu: Haustiere \u2013 ein Geschenk f\xFCr euch",news_pets_text:"Katze, Hund oder Kaninchen leben in deinem 3D-Haus, laufen durch die R\xE4ume, legen sich aufs Sofa und gehen sogar die Treppe hoch \u2013 und im Aquarium schwimmen Fische. Das Fun-Pack gibt es gratis mit jedem Kundenkonto.",news_to_shop:"Zum Shop",news_later:"Sp\xE4ter",news_never:"Nicht mehr anzeigen",gift_title:"\u{1F381} Zwei Geschenke f\xFCr dich: Halloween und Haustiere",gift_text:"Die Fun-Packs Halloween (K\xFCrbisse, Flederm\xE4use, Hexenkessel und ein Geist, der durchs Haus schwebt) und Haustiere (Katze, Hund und Kaninchen, die durch dein Haus laufen) liegen gratis in deinem Kundenkonto. Unter Erweiterungen installierst du sie mit einem Klick.",gift_install:"Zu den Erweiterungen",gift_title_free:"\u{1F381} Gratis: Halloween und Haustiere",gift_text_free:"K\xFCrbisse, Flederm\xE4use und ein Geist, der durchs Haus schwebt \u2013 dazu Katze, Hund und Kaninchen, die in deinem 3D-Haus leben. Beide Fun-Packs gibt es kostenlos mit einem Kundenkonto: Konto anlegen, E-Mail best\xE4tigen, den Schl\xFCssel aus der Mail unter Erweiterungen \u2192 Shop-Verbindung einf\xFCgen. Danach siehst du neue Packs direkt hier.",gift_register:"Kostenloses Konto anlegen",card_controls_hidden_hint:"Nur die 3D-Ansicht; ein Auge unten links holt Leisten, Werte und Schalter zur\xFCck",card_controls_hide_after:"Bedienelemente ausblenden nach",card_hide_after_s:"{n} s ohne Ber\xFChrung",card_fullscreen_button:"Vollbild-Taste",card_fullscreen_button_hint:"Blendet das Dashboard drumherum aus (z. B. am Wandtablet)",fullscreen:"Vollbild",fullscreen_exit:"Vollbild beenden",card_section_show:"Anzeigen",card_floor:"Etage",card_floor_house:"Ganzes Haus (Etage antippen zum \xD6ffnen)",card_height:"H\xF6he (Pixel)",card_walls:"W\xE4nde",card_quality_hint:"\u201ETablet\u201C ist die sparsamste Stufe \u2013 ideal f\xFCr Fire-Tablets und andere Wandtablets.",card_flows_switch:"Schalter in der Karte",card_flows_on:"Immer an",card_flows_off:"Immer aus",holos:"Hologramme",holos_hint:"Hologramme der Anlage und der Ger\xE4te ein- oder ausblenden",card_energy:"Energiewerte oben anzeigen (Energie Pro)",card_room_panel:"Raum-Details beim Antippen",card_room_panel_hint:"Lichter, Rolll\xE4den und Kameras des Raums in einem Seitenfenster",card_explode:"Etagen in der Hausansicht auseinanderziehen",card_roof_fade:"Dach beim Heranzoomen ausblenden",card_roof_fade_hint:"Aus: Das Dach bleibt auf dem Haus, auch wenn die Kamera nah herankommt.",card_stats:"Leistungsanzeige (Bilder pro Sekunde)",card_stats_hint:"Zum Pr\xFCfen, wie fl\xFCssig die Karte auf dem Ger\xE4t l\xE4uft",packs:"M\xF6bel-Packs",ext_show_list:"Liste zeigen",ext_hide_list:"Liste zuklappen",ext_sum_installed:"installiert",ext_sum_updates:"Updates",ext_sum_missing:"noch nicht installiert",ext_sum_all:"Alle {n} installieren/aktualisieren",ext_sum_packs:"M\xF6bel-Packs ({items} M\xF6bel)",ext_sum_feature_packs:"Erweiterungen",packs_hint:"Nur unterschriebene Packs des Herausgebers lassen sich importieren.",lib_badge_light:"Leuchte: l\xE4sst sich mit einem Licht verkn\xFCpfen und in 3D schalten",lib_badge_electric:"Elektrisch: l\xE4sst sich mit Entit\xE4t und Leistungssensor verkn\xFCpfen (schalten, Bild, Verbrauch)",lib_badge_hint:"M\xF6bel mit Symbol lassen sich mit Entit\xE4ten verkn\xFCpfen: Leuchten schalten, Bildschirme zeigen Bilder, Ger\xE4te ihren Verbrauch.",pack_error_wrong_instance:"Dieses Pack ist f\xFCr eine andere Home-Assistant-Installation signiert. Im Shop-Konto l\xE4sst es sich f\xFCr diese Installation neu laden.",license_title:"Shop-Verbindung",license_instance:"Installations-Kennung",license_copy:"Kopieren",license_copied:"Kennung kopiert",license_activate:"Aktivieren",license_activated:"Verbunden \u2013 die gekauften Packs stehen unten.",license_active:"Verbunden als {name} (Schl\xFCssel {key})",license_checked:"zuletzt gepr\xFCft {time}",license_refresh:"Jetzt pr\xFCfen",license_refreshed:"Gepr\xFCft.",license_remove:"Trennen",license_remove_confirm:"Shop-Verbindung trennen? Installierte Packs bleiben, nur Updates kommen nicht mehr von selbst.",license_installed:"installiert \xB7 v{release}",license_update_available:"Update auf v{release} verf\xFCgbar",license_not_installed:"noch nicht installiert",license_install:"Installieren",license_update:"Aktualisieren",license_none:"Noch keine Packs im Konto.",license_hint:"Den Lizenzschl\xFCssel findest du in der Bestellung und im Kundenkonto auf mastershort.de. Einmal eingetragen, erscheinen gekaufte Packs hier, werden f\xFCr diese Installation signiert und bekommen Updates von selbst (einmal t\xE4glich gepr\xFCft). Alles Installierte funktioniert auch ohne Verbindung.",license_shop:"Mehr Packs im Shop",license_error_invalid_key:"Diesen Schl\xFCssel kennt der Shop nicht. Er sieht so aus: NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"Dieser Schl\xFCssel ist schon mit der erlaubten Zahl von Installationen verbunden.",license_error_shop_unreachable:"Der Shop ist gerade nicht erreichbar. Installierte Packs funktionieren weiter.",license_error_not_owned:"Dieses Pack geh\xF6rt nicht zu diesem Konto.",license_error_no_key:"Zuerst den Lizenzschl\xFCssel eintragen.",license_error_wrong_instance:"Der Shop hat das Pack f\xFCr eine andere Installation signiert.",license_error_rate_limit:"Der Shop ist gerade ausgelastet. Bitte in einer Minute noch einmal versuchen.",license_error_other:"Das hat nicht geklappt: {detail}",pack_import:"M\xF6bel-Packs importieren \u2026",pack_imported:"\u201E{name}\u201C von {publisher} importiert \u2013 {n} M\xF6bel",packs_imported_n:"{n} von {total} Packs importiert",pack_by:"von {publisher} \xB7 {n} M\xF6bel",pack_features:"von {publisher} \xB7 Pro-Funktionen: {n}",pack_needs_update:"Diese Erweiterung braucht eine neuere NeonPlan-Version \u2013 bitte NeonPlan 3D aktualisieren (HACS) und die Seite neu laden.",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Kamera-Cockpit: durch die Kamera schauen, Bewegungsspur, Kamera-Wand und Erkennungs-Pins (Person, Fahrzeug, Tier)",pro_name_camera_cockpit:"Kamera-Cockpit",pro_name_weather:"Wetter drau\xDFen",pro_name_screens:"Bildschirme live",pro_name_energy_pro:"Energie Pro",ext_tab:"Erweiterungen",offers_title:"Neu im Shop",offers_new:"NEU",offers_loyalty:"Dein Treuerabatt: {percent} % auf jedes weitere Pack und jede Pro-Erweiterung",offers_kind_pack:"M\xF6bel-Pack",offers_kind_pro:"Pro-Erweiterung",offers_kind_bundle:"Bundle",offers_kind_fun:"Fun-Pack \xB7 kostenlos f\xFCr Kunden",offers_dot:"Neues im Shop",ext_badge_new:"{n} neu",ext_badge_ready:"{n} bereit",ext_badge_ready_hint:"Packs zum Installieren oder Aktualisieren \u2013 ein Klick unter Erweiterungen",pack_updated:"{name} wurde auf Version {release} aktualisiert.",pack_updated_added:"{name} wurde auf Version {release} aktualisiert: {n} neue M\xF6bel \u2013 schau in die Bibliothek!",ext_title:"Erweiterungen",ext_intro:"M\xF6bel-Packs und Pro-Erweiterungen f\xFCr NeonPlan 3D. Gekaufte Erweiterungen installierst du hier mit deinem Lizenzschl\xFCssel; sie bekommen Updates von selbst und funktionieren auch ohne Verbindung.",ext_shop:"Shop \xF6ffnen",ext_pro:"Pro-Erweiterungen",fun_title:"Fun-Packs",fun_intro:"Kostenlose Extras zum Spa\xDF \u2013 f\xFCr jeden mit Kundenkonto. Mit verbundenem Schl\xFCssel liegen sie oben bei deinen Packs zum Installieren; hier schaltest du sie ein und aus.",fun_in_account:"Gratis in deinem Kundenkonto \u2013 oben bei deinen Packs installieren.",fun_register:"\u{1F381} Kostenloses Kundenkonto anlegen",fun_register_steps:"Gratis mit einem Kundenkonto: Konto anlegen, E-Mail best\xE4tigen, den Schl\xFCssel aus der Mail unter Shop-Verbindung einf\xFCgen.",fun_name_pets:"Haustiere",fun_feature_pets:"Katze, Hund oder Kaninchen leben in deinem 3D-Haus: Sie laufen durch die R\xE4ume, legen sich aufs Sofa, aufs Bett oder auf den Teppich und schlafen nachts.",fun_name_halloween:"Halloween",fun_feature_halloween:"K\xFCrbisse, die mit einem Licht leuchten, Spinnennetz, Flederm\xE4use, Grabsteine, Skelett, Hexenkessel und Kerzen \u2013 und ein Geist, der ab und zu durchs Haus schwebt.",halloween_ghost:"Geist schweben lassen",halloween_deco_hint:"Die Deko findest du im Editor in der M\xF6bel-Bibliothek unter \u201EFun-Pack: Halloween\u201C. K\xFCrbis, Kessel und Kerzen leuchten mit einem verkn\xFCpften Licht.",pets_show:"Haustiere zeigen",pet_add:"Haustier hinzuf\xFCgen",pet_name:"Name",pet_kind:"Tier",pet_kind_cat:"\u{1F431} Katze",pet_kind_dog:"\u{1F436} Hund",pet_kind_rabbit:"\u{1F430} Kaninchen",pet_fur:"Fell",pet_fur_orange:"Rot",pet_fur_tabby:"Getigert",pet_fur_black:"Schwarz",pet_fur_white:"Wei\xDF",pet_fur_grey:"Grau",pet_fur_brown:"Braun",pet_fur_calico:"Gl\xFCckskatze",pet_fur_golden:"Golden",pet_fur_cream:"Creme",pet_breed:"Rasse",pet_breed_dachshund:"Dackel",pet_breed_pug:"Mops",pet_breed_terrier:"Terrier",pet_breed_labrador:"Labrador",pet_breed_shepherd:"Sch\xE4ferhund",pet_floor:"Etage",pet_floor_auto:"Erdgeschoss",ext_active:"aktiv",ext_get:"Im Shop ansehen",supporter_title:"Supporter \xB7 Discord",supporter_intro:"Danke, dass du NeonPlan 3D unterst\xFCtzt! Mit diesem Code schaltest du auf Discord die Rolle \u{1F499} Supporter frei \u2013 damit siehst du den Kanal #beta-feedback und testest neue Erweiterungen als Erste.",supporter_open:"Discord \xF6ffnen",supporter_how:"So geht's: Discord \xF6ffnen, in einem beliebigen Kanal /supporter {code} eingeben und senden. Die Rolle kommt sofort.",beta_yours:"Beta \xB7 f\xFCr dich als Supporter",beta_supporters:"Beta \xB7 zuerst f\xFCr Supporter",beta_yours_hint:"Weil du Supporter bist, darfst du diese Erweiterung schon vorab testen. Sag uns auf Discord (Kanal #beta-feedback), was gut l\xE4uft und was nicht.",beta_supporters_hint:"Diese Erweiterung ist noch in der Beta und zuerst nur mit dem Supporter-Pass erh\xE4ltlich. Sobald sie fertig ist, gibt es sie f\xFCr alle im Shop.",beta_feedback:"Feedback auf Discord",beta_become:"Supporter werden",beta_bar:"Beta \u2013 du testest als Supporter zuerst. Feedback gern auf Discord (#beta-feedback).",ext_open:"Erweiterungen \xF6ffnen",manual:"Anleitung",manual_more:"Mehr erfahren",ext_teaser_title:"Mehr M\xF6bel und Pro-Funktionen",ext_teaser_text:"M\xF6bel-Packs, Shop-Verbindung und Pro-Erweiterungen findest du oben unter \u201EErweiterungen\u201C.",pro_feature_weather:"Wetter drau\xDFen: Regen, Schnee, Wolken, Sonne und Mond",pro_feature_screens:"Bildschirme live: App-Farbe und Cover des Media Players, Bildregeln, Kamera-Livebild auf Bildschirmen",pro_feature_energy_pro:"Energie Pro: Stromfluss-Leitungen durchs Haus, lebende Solarmodule, Glas-Hologramme f\xFCr Anlage und Ger\xE4te, Gas- und Wasserverbrauch von heute \u2013 W\xE4rme folgt als Update",pro_name_sound:"Klang & Kino",pro_feature_sound:"Klang & Kino: Lautsprecher zeigen Cover, Titel und Lautst\xE4rke als Glaskarte, Schallringe um spielende Lautsprecher, Multiroom-Gruppen als Linien, Schnellmen\xFC mit Play, Pause, Titelwechsel und Lautst\xE4rke",pro_name_auto_pro:"Auto Pro",pro_feature_auto_pro:"Auto Pro: Das Auto auf dem Stellplatz zeigt Ladestand, Reichweite, Laden, Verriegelung und Klima aus seiner Integration \u2013 Lichtband in der Ladestandsfarbe, Pin mit Prozent und Kilometern, Schnellmen\xFC mit Verriegeln, Klima und Laden, \u201Eunterwegs\u201C mit Standort",pro_name_time_travel:"Zeitreise",pro_name_pool:"Pool Pro",pro_feature_pool:"Pool Pro: Das Wasser leuchtet in der Farbe der Poolbeleuchtung und bewegt sich, wenn die Filterpumpe l\xE4uft; eine Glaskarte zeigt Wassertemperatur, W\xE4rmepumpe mit Solltemperatur, Filterpumpe, Licht, pH und Chlor/Redox mit Ampel; die Abdeckung f\xE4hrt \xFCber das Wasser; Warnungen bei pH, Chlor und Frost",pool_teaser:"Mit Pool Pro lebt dein Pool: Das Wasser leuchtet in der Farbe der Poolbeleuchtung und bewegt sich, wenn die Filterpumpe l\xE4uft. Eine Glaskarte zeigt Wassertemperatur, W\xE4rmepumpe, pH und Chlor \u2013 mit Kn\xF6pfen f\xFCr Solltemperatur, Pumpe, Licht und Abdeckung.",pool_pro_hint:"Leere Felder sucht NeonPlan selbst \xFCber den Namen (eine Entit\xE4t mit \u201Epool\u201C im Namen), \u201EKeine\u201C schaltet eine Rolle ab. Die W\xE4rmepumpe darf eine Klima- oder Warmwasser-Entit\xE4t sein (dann l\xE4sst sich die Solltemperatur einstellen) oder ein Schalter; die Filterpumpe ein Schalter oder ein Leistungssensor.",pool_activate:"Pool Pro f\xFCr diesen Pool einschalten",pool_temperature:"Wassertemperatur",pool_heater:"W\xE4rmepumpe / Heizung",pool_pump:"Filterpumpe",pool_light:"Poolbeleuchtung",pool_ph:"pH-Wert",pool_chlorine_role:"Chlor / Redox",pool_chlorine:"Chlor",pool_orp:"Redox",pool_cover:"Abdeckung",pool_cover_open:"offen",pool_cover_closed:"zu",pool_cover_closed_part:"zu",pool_cover_open_btn:"Abdeckung \xF6ffnen",pool_cover_close_btn:"Abdeckung schlie\xDFen",pool_cover_stop:"Abdeckung anhalten",pool_heating:"heizt",pool_pump_on:"Pumpe l\xE4uft",pool_heater_on:"W\xE4rmepumpe an",pool_heater_off:"W\xE4rmepumpe aus",pool_colder:"K\xE4lter",pool_warmer:"W\xE4rmer",pool_shape:"Form",pool_shape_rect:"Eckig",pool_shape_round:"Rund",pool_shape_oval:"Oval",pool_diameter:"Durchmesser (m)",pool_shape_free:"Frei",tool_pool:"Pool",hint_pool:"Form w\xE4hlen und den Pool aufziehen \xB7 Pool antippen zum Ausw\xE4hlen",hint_pool_tech:"Form w\xE4hlen und den Pool aufziehen \xB7 Pool antippen zum Ausw\xE4hlen \xB7 Anschl\xFCsse, Ger\xE4te und Rohre rechts",hint_pipe_start:"Rohr: Start antippen (Anschluss oder Ger\xE4t)",hint_pipe_pool:"Rohr: zuerst den Pool antippen, zu dem die Rohre geh\xF6ren",hint_pipe_next:"Ecken antippen, dann das Ziel (Anschluss oder Ger\xE4t) \xB7 Esc bricht ab",pool_tool_empty:"Noch kein Pool auf dieser Etage: W\xE4hle oben die Form und ziehe den Pool auf.",pool_choose:"Welchen Pool bearbeiten?",pool_ports:"Anschl\xFCsse",pool_ports_hint:"Skimmer und Einl\xE4sse sitzen am Beckenrand, der Bodenablauf im Becken; der Abwasser-Anschluss nimmt das R\xFCcksp\xFClwasser auf. Im Plan verschieben.",pool_port_skimmer:"Skimmer",pool_port_drain:"Bodenablauf",pool_port_inlet:"Einlass",pool_port_waste:"Abwasser",pool_devices:"Technik",furn_pool_pump:"Filterpumpe",furn_pool_filter:"Sandfilter",furn_pool_heat_pump:"W\xE4rmepumpe",furn_pool_dosing:"Dosieranlage",furn_pool_valve:"Kugelhahn",pool_valve_position:"Stellung des 6-Wege-Ventils",valve_filter:"Filtern",valve_backwash:"R\xFCcksp\xFClen",valve_rinse:"Nachsp\xFClen",valve_waste:"Entleeren",valve_recirculate:"Zirkulieren",valve_closed:"Geschlossen",pool_valve_open:"offen",pool_pipes:"Rohre",pool_pipe_draw:"Rohr zeichnen",pool_pipe_draw_hint:"Rohre verbinden Anschl\xFCsse und Ger\xE4te in Flie\xDFrichtung: vom Skimmer zur Pumpe, weiter zum Filter, \xFCber W\xE4rmepumpe oder Bypass zu den Einl\xE4ssen. An einer Verteilung flie\xDFt das Wasser \xFCber die W\xE4rmepumpe, solange sie an ist, sonst \xFCber den Bypass; ein geschlossener Kugelhahn sperrt. Kugelhahn im Plan antippen: auf/zu.",pool_pipe_height:"H\xF6he \xFCber Boden (m)",pool_pipe_reverse:"Flie\xDFrichtung umdrehen",pool_pipes_pro:"Mit Pool Pro flie\xDFt das Wasser sichtbar durch die Rohre \u2013 blau, nach der W\xE4rmepumpe warm.",pool_above:"Aufstellpool (steht auf dem Boden)",pool_above_hint:"Ein Pool, der auf dem Boden steht, statt eingelassen zu sein: Wand rundum, das Wasser knapp unter dem Rand.",pool_height:"Beckenh\xF6he",alert_pool_ph:"Pool: pH {name}",alert_pool_chlorine:"Pool: Chlor/Redox {name}",alert_pool_frost:"Pool: Frostgefahr ({name})",pro_feature_time_travel:"Zeitreise: Ein Zeitregler spielt bis zu 7 Tage im Haus ab \u2013 Lichter, T\xFCren, Fenster, Rolll\xE4den, Bewegung, Heizung, Wetter und Sonne, mit Ereignis-Markern. Nur ansehen, nichts wird geschaltet",tt_chip:"Zeitreise",tt_hint:"Bis zu 7 Tage im Haus abspielen (nur ansehen, nichts wird geschaltet)",tt_badge:"ZEITREISE",tt_live:"Live",tt_live_hint:"Zur\xFCck zur Gegenwart",tt_play:"Abspielen",tt_pause:"Anhalten",tt_prev:"Voriges Ereignis",tt_next:"N\xE4chstes Ereignis",tt_speed:"Tempo: 1 Stunde in {s}",tt_now:"jetzt",tt_ago:"vor {d}",tt_since:"seit {time}",tt_loading:"Lade Verlauf \u2026",tt_error:"Verlauf nicht geladen: {error}",tt_retry:"Erneut",tt_no_recorder:"Ohne den Recorder von Home Assistant gibt es keinen Verlauf.",tt_restart:"Bitte Home Assistant neu starten \u2013 erst dann kennt es die Zeitreise.",tt_locked:"Die Zeitreise ist eine Pro-Erweiterung.",tt_readonly:"Zeitreise: nur ansehen \u2013 nichts wird geschaltet",tt_ev_door:"{name} ge\xF6ffnet",tt_ev_garage:"{name} ge\xF6ffnet",tt_ev_lock:"{name} entriegelt",tt_ev_alarm:"Alarm: {name}",tt_ev_smoke:"Rauch: {name}",tt_ev_outage:"Stromausfall",tt_ev_camera:"Kamera erkennt Bewegung: {name}",tt_ev_gas:"Gas: {name}",tt_ev_co:"Kohlenmonoxid: {name}",tt_ev_water:"Wasser: {name}",tt_ev_rain:"Fenster offen bei Regen: {name}",tt_ev_motion:"Bewegung in der Nacht: {name}",tt_ev_washer:"{name} fertig",tt_ev_robot_start:"{name} startet",tt_ev_robot_done:"{name} fertig",card_time_travel:"Knopf \u201EZeitreise\u201C",card_time_travel_hint:"Ein Knopf unten in der Karte spielt die letzten Stunden und Tage ab (Pro: Zeitreise).",auto_pro_teaser:"Mit Auto Pro zeigt das Fahrzeug hier Ladestand, Reichweite, Laden, Verriegelung und Klima aus seiner Integration (Tesla, VW, BMW, Hyundai/Kia, Renault, Smart, Polestar \u2026): Lichtband in der Ladestandsfarbe, Pin mit Prozent und Kilometern, Schnellmen\xFC mit Verriegeln, Klima und Laden, und \u201Eunterwegs\u201C mit dem Standort, wenn es weg ist.",car_hint:"Eine Entit\xE4t des Autos reicht: Die \xFCbrigen findet NeonPlan am selben Ger\xE4t in Home Assistant (Ladestand, Reichweite, Laden, Kabel, Schloss, Klima, Standort). Was es nicht findet, w\xE4hlst du hier; \u201EKeine\u201C schaltet eine Rolle ab.",car_device:"Fahrzeug (eine Entit\xE4t des Autos)",car_soc:"Ladestand (%)",car_range:"Reichweite",car_charging:"Laden (Leistung, Zustand oder Schalter)",car_plugged:"Kabel eingesteckt",car_lock:"Verriegelung",car_climate:"Klima / Vorheizen",car_tracker:"Standort (device_tracker)",car_away:"unterwegs",car_charging_short:"l\xE4dt",car_lock_btn:"Verriegeln",car_unlock_btn:"Entriegeln",car_unlock_confirm:"Fahrzeug wirklich entriegeln?",car_climate_on:"Klima an",car_climate_off:"Klima aus",car_charge_start:"Laden starten",car_charge_stop:"Laden stoppen",car_no_controls:"Keine schaltbaren Entit\xE4ten am Fahrzeug gefunden (Schloss, Klima, Lade-Schalter).",holo_media_playing:"l\xE4uft",holo_media_paused:"Pause",pro_locked:"Diese Funktion ist eine Pro-Erweiterung. Nach dem Kauf erscheint sie unter Erweiterungen \u203A Shop-Verbindung und l\xE4sst sich dort installieren.",pro_shop:"Zum Shop",pack_licensed:"Lizenziert f\xFCr {name}",pack_remove:"Entfernen",pack_remove_confirm:"Pack \u201E{name}\u201C entfernen? M\xF6bel daraus bleiben als einfache K\xE4sten im Plan.",pack_missing_item:"M\xF6bel aus entferntem Pack",pack_error_bad_signature:"Das Pack wurde ver\xE4ndert oder seine Unterschrift ist ung\xFCltig.",pack_error_unknown_publisher:"Dieses Pack stammt nicht von einem bekannten Herausgeber.",pack_error_unsigned:"Das Pack ist nicht unterschrieben.",pack_error_not_a_pack:"Das ist keine M\xF6bel-Pack-Datei.",pack_error_invalid_content:"Das Pack enth\xE4lt ung\xFCltige M\xF6bel: {detail}",pack_error_too_large:"Die Datei ist zu gro\xDF.",pack_error_needs_update:"Diese Erweiterung braucht eine neuere Version von NeonPlan 3D. Bitte zuerst aktualisieren (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A \u201EInformationen aktualisieren\u201C \u203A \u201EHerunterladen\u201C), Home Assistant neu starten und dann noch einmal installieren.",license_error_needs_update:"Diese Erweiterung braucht eine neuere Version von NeonPlan 3D. Bitte zuerst aktualisieren (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A \u201EInformationen aktualisieren\u201C \u203A \u201EHerunterladen\u201C), Home Assistant neu starten und dann noch einmal installieren.",pack_error_other:"Import fehlgeschlagen: {detail}",back_to_room:"Zur\xFCck zu {room}",back_to_floor:"Zur\xFCck zur Etage",hint_furniture:"Raum antippen, dann rechts ein M\xF6belst\xFCck w\xE4hlen \xB7 M\xF6bel ziehen, an den Ecken die Gr\xF6\xDFe \xE4ndern",furniture_into:"Neue M\xF6bel kommen in die Mitte von \u201E{room}\u201C.",furniture_pick_room:"Tipp: Erst einen Raum antippen \u2013 dann landen neue M\xF6bel in seiner Mitte.",flows:"Stromfluss",flows_hint:"Leuchtende Leitungen vom Z\xE4hler zu den Verbrauchern ein- oder ausblenden",holo_title:"Solar & Energie",holo_live:"live",holo_pv_now:"PV jetzt",holo_today:"Heute",holo_peak:"Spitze",holo_battery:"Akku",holo_grid:"Netz",holo_house:"Haus",holo_wallbox:"Wallbox",holo_autarky:"Autarkie",holo_house_now:"Haus jetzt",chk_title:"Einrichtung",chk_hint:"Was Energie und Energie Pro brauchen. Antippen springt an die Stelle.",chk_solar:"Solarfeld angelegt",chk_solar_add:"Ein Solarfeld aufs Dach legen",chk_meter:"Stromz\xE4hler mit Netzsensor",chk_meter_sensor:"Stromz\xE4hler: Netzsensor (W) fehlt",chk_meter_add:"Stromz\xE4hler anlegen",chk_inverter:"Wechselrichter mit Leistungssensor",chk_inverter_sensor:"Wechselrichter: Leistungssensor fehlt",chk_inverter_add:"Wechselrichter anlegen",chk_battery:"Stromspeicher mit Leistung und Ladestand",chk_battery_sensor:"Stromspeicher: Leistung oder Ladestand fehlt",chk_battery_opt:"Stromspeicher (optional)",chk_grid:"Netzanschluss gesetzt",chk_grid_opt:"Netzanschluss (optional, sonst automatisch)",chk_pro_active:"Energie Pro ist aktiv",chk_pro_get:"Energie Pro freischalten (Leitungen, Module, Hologramm)",energy_sign_grid:"Gerade wird eingespeist, obwohl keine PV-Leistung anliegt: Vermutlich z\xE4hlt der Netzsensor andersherum.",energy_sign_battery:"Der Speicher l\xE4dt ohne Sonne und ohne Netzbezug: Vermutlich z\xE4hlt sein Sensor andersherum.",energy_sign_flip:"Vorzeichen umkehren",energy_pro_active:"Energie Pro ist aktiv",energy_pro_active_hint:"Leitungen, lebende Module und das Hologramm laufen. Gas, Wasser und W\xE4rme kommen als Updates in diesem Pack.",pro_unlock:"Freischalten",help_title:"Hilfe und R\xFCckmeldung",help_hint:"Fehler bitte als Issue auf GitHub, W\xFCnsche als Diskussion \u2013 so geht nichts verloren, und alle sehen den Stand.",help_issue:"Problem melden",help_idea:"Idee vorschlagen",help_discord:"Community auf Discord",furn_name:"Name (optional)",furn_mirror:"Spiegeln",furn_mirror_hint:"Links und rechts vertauschen \u2013 das L-Sofa andersherum, der Schrank mit der T\xFCr auf der anderen Seite, die K\xFCchenzeile gespiegelt.",cables_title:"Leitungen (Energie Pro)",cables_hint:"Gestrichelt: Die Leitung findet ihren Weg von selbst. Fass sie im Grundriss an oder w\xE4hle sie hier und dr\xFCcke \u201ESelbst verlegen\u201C: Dann l\xE4uft sie durchgezogen \xFCber deine Punkte in der eingestellten H\xF6he, zum Beispiel au\xDFen an der Fassade oder unter der Decke, und mehrere Leitungen lassen sich nebeneinander f\xFChren.",cable_laid:"selbst verlegt",cable_lay:"Selbst verlegen",cable_auto:"Wieder automatisch",cable_height:"H\xF6he \xFCber dem Boden (m)",cable_points_hint:"Punkte im Grundriss ziehen. Ein Klick auf die Leitung f\xFCgt einen Punkt ein, ein Doppelklick auf einen Punkt entfernt ihn.",cable_other_floor:"Diese Leitung ist auf der Etage {floor} verlegt: Wechsle dorthin, um ihre Punkte zu ziehen.",holo_settings:"Hologramm (Energie Pro)",holo_settings_hint:"Das Hologramm h\xE4ngt an einem Solarfeld oder schwebt frei an einem Punkt im Plan; es beh\xE4lt seine Gr\xF6\xDFe in der Welt, beim Rauszoomen wird es kleiner. Jede weitere Anlage bekommt eine eigene Karte \xFCber ihrem Feld.",holo_field:"Am Solarfeld",holo_field_auto:"Automatisch (gr\xF6\xDFtes Feld)",holo_size:"Gr\xF6\xDFe (1 = normal)",holo_mirror:"Von hinten gespiegelt (wie Glas)",holo_device_min_w:"Ger\xE4te-Karten ausblenden unter (W)",holo_device_house:"Ger\xE4te-Karten auch in der Hausansicht",holo_device_house_hint:"Aus: Die Karten \xFCber den Ger\xE4ten erscheinen nur, wenn ihre Etage ge\xF6ffnet ist.",holo_plant_floor:"Hausbilanz und Anlagen-Karten auch in Etagenansichten",room_ceiling:"Deckenh\xF6he (m)",units:"L\xE4ngen",units_auto:"Automatisch ({unit})",units_metric:"Meter",units_imperial:"Fu\xDF und Zoll",units_hint:`Wie der Editor L\xE4ngen zeigt und liest. Automatisch folgt dem Einheitensystem von Home Assistant. Gespeichert wird immer in Metern \u2013 Fu\xDF und Zoll tippst du z. B. als 8' 2", 98in oder 8.2ft.`,room_area_net:"Fl\xE4che {a} \xB7 netto {n}",room_area_net_hint:"Netto: ohne die W\xE4nde, die in den Raum ragen \u2013 geteilte Innenw\xE4nde liegen zur H\xE4lfte im Raum, freie W\xE4nde und der Spalt hinter einer Vorwand z\xE4hlen nicht mit.",room_ceiling_hint:"Leer = H\xF6he der Etage. Mit eigener H\xF6he enden die W\xE4nde des Raums dort (au\xDFer ein Nachbarraum ist h\xF6her), und Deckenleuchten h\xE4ngen an dieser Decke \u2013 z. B. 2,5 m im Wohnraum neben einer 5 m hohen Garage.",holo_plant_floor_hint:"An: Die Karten bleiben auch sichtbar, wenn eine Etage ge\xF6ffnet ist \u2013 auf der Etage ihres Solarfelds (Felder auf dem Dach: oberste Etage, im Garten: unterste).",holo_device_room:"Ger\xE4te-Karten im ge\xF6ffneten Raum",holo_device_room_hint:"An: \xD6ffnest du einen Raum, erscheinen die Karten der Ger\xE4te in diesem Raum (nur dieses Raums).",holo_mirror_hint:"Schaust du von der R\xFCckseite des Solarfelds, zeigen die Karten ihre R\xFCckseite \u2013 gespiegelt wie eine Glasscheibe. Aus: Sie bleiben von \xFCberall lesbar.",holo_right:"Seitlich versetzt (m, + = rechts)",holo_up:"Nach oben versetzt (m, den Hang hinauf)",holo_place:"H\xE4ngt",holo_place_field:"An einem Solarfeld",holo_place_free:"Frei im Plan (Griff \u25C8 ziehen)",holo_free_hint:"Im Plan steht ein Griff \u25C8 \u2013 zieh ihn dorthin, wo das Hologramm schweben soll (auch neben das Haus, etwa an die Terrasse). Die Karte zeigt vom Haus weg.",holo_no_field:"Noch kein Solarfeld im Plan: Das Hologramm schwebt neben dem Haus.",holo_height:"H\xF6he \xFCber dem Boden (m)",furn_plant_card:"Anlagenkarte (Hologramm) zeigen",furn_plant_card_hint:"Energie Pro: Jede Anlage (Wechselrichter mit eigenen Feldern) bekommt eine Glaskarte \xFCber ihrem Feld \u2013 Leistung, Tageskurve, Akku. Hier schaltest du sie f\xFCr diese Anlage ab.",flow_on:"an",flow_off:"aus",hint_opening:"Auf eine Wand tippen, um eine T\xFCr oder ein Fenster einzusetzen \u2013 die Art w\xE4hlst du danach rechts",preset_door:"T\xFCr",preset_door_double:"Doppelt\xFCr",preset_window:"Fenster",preset_window_double:"Fenster 2-fl\xFCgelig",preset_terrace:"Terrassent\xFCr",preset_terrace_double:"Terrassent\xFCr 2-fl\xFCgelig",preset_garage:"Garagentor",preset_front:"Haust\xFCr",opening_style:"Stil",sidelight_auto:"automatisch",sidelight_hinge:"Seitenteil an der Anschlagseite",sidelight_hinge_hint:"Das Seitenteil sitzt sonst gegen\xFCber dem Anschlag; mit Haken neben den B\xE4ndern.",sidelight_width:"Breite Seitenteil (m)",sidelight_width_left:"Seitenteil links (m)",sidelight_width_right:"Seitenteil rechts (m)",style_auto:"Automatisch ({style})",style_interior:"Zimmert\xFCr",style_front:"Haust\xFCr",style_front_glass:"Haust\xFCr mit Glasausschnitt",style_sidelight:"Haust\xFCr mit Seitenteil",style_sidelights:"Haust\xFCr mit 2 Seitenteilen",style_glass:"Glast\xFCr",style_sliding:"Schiebet\xFCr",style_passage:"Durchbruch (ohne T\xFCr)",style_standard:"Standard",style_bars:"Mit Sprossen",style_glass_wall:"Glaswand (feststehend)",preset_glass_wall:"Glaswand",flip_hinge:"Anschlag wechseln",flip_main_leaf:"Hauptfl\xFCgel wechseln",flip_hinge_hint:"Scharniere auf die andere Seite",flip_swing:"\xD6ffnungsrichtung umdrehen",flip_swing_hint:"Die T\xFCr schwenkt in den Raum oder zur anderen Seite",main_leaf:"Hauptfl\xFCgel (vom Raum aus)",contact_main:"Kontakt Hauptfl\xFCgel",contact_second:"Kontakt zweiter Fl\xFCgel",tool_outdoor:"Au\xDFen",tool_measure:"Nach Ma\xDF",hint_measure:"Startpunkt antippen, dann rechts die Wandl\xE4ngen mit Richtung eingeben",measure:"Raum nach Ma\xDF",measure_start:"Tippe im Plan auf den Startpunkt, z. B. eine Raumecke.",measure_from:"Start bei {x} / {z} m \u2013 antippen verschiebt den Start.",measure_length:"L\xE4nge der n\xE4chsten Wand (m)",measure_close:"Raum schlie\xDFen",measure_undo:"Letzte Wand weg",measure_gap:"L\xFCcke zum Start: {gap} m (wird beim Schlie\xDFen verbunden)",measure_hint:"Tipp: L\xE4nge eintippen und Pfeiltaste dr\xFCcken. Mit gemessenen Innenma\xDFen danach \u201EL\xFCcken schlie\xDFen\u201C.",rect_by_size:"Rechteck nach Ma\xDF",rect_add:"Rechteck anlegen",dir_up:"Nach oben",dir_down:"Nach unten",dir_left:"Nach links",dir_right:"Nach rechts",hint_outdoor:"Ziehen, um eine Au\xDFenfl\xE4che (Rasen, Terrasse, Pool \u2026) aufzuziehen",hint_outdoor_free:"Ecken der Au\xDFenfl\xE4che setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",outdoor_shape_rect:"Rechteck",outdoor_shape_free:"Freie Form",outdoor_draw_type:"Zeichnen:",outdoor_draw_type_hint:"Was du als N\xE4chstes aufziehst: Rasen, Terrasse, Weg, Pool \u2026 Die Art l\xE4sst sich danach im Formular noch \xE4ndern.",outdoor:"Au\xDFenfl\xE4che",outdoor_type:"Art",outdoor_height:"H\xF6he (m)",outdoor_offset:"H\xF6henversatz (m, \u2212 = tiefer)",outdoor_outline:"Umrisslinie zeigen",outdoor_outline_hint:"Ohne Haken zeichnet die Fl\xE4che keine Leuchtlinie an ihrem Rand \u2013 f\xFCr gro\xDFe Grundst\xFCcke aus mehreren Rasenfl\xE4chen.",outdoor_hint:"Au\xDFenleuchten (Wegleuchte, Garten-Spot, Wandleuchte au\xDFen) beleuchten alle Au\xDFenfl\xE4chen und die Fassade.",out_lawn:"Rasen",out_terrace:"Terrasse",out_path:"Weg",out_driveway:"Einfahrt",out_pool:"Pool",out_bed:"Beet",out_hedge:"Hecke",out_fence:"Zaun",out_wild:"Wildfl\xE4che",out_pergola:"Pergola / Rahmen",out_balcony:"Balkon",balcony_rail:"Gel\xE4nderh\xF6he",outdoor_open:"Offen (letzte Kante weglassen)",outdoor_open_hint:"Die Kante vom letzten zum ersten Punkt wird nicht gezeichnet \u2013 ein Zaun oder eine Pergola, die ans Haus lehnt.",outdoor_bracing:"X-Verstrebung",outdoor_cut:"Aus Fl\xE4chen darunter ausschneiden",outdoor_cut_hint:"Jede Fl\xE4che, in der diese ganz liegt und die vor ihr gezeichnet wurde, bekommt hier ein Loch \u2013 ein Teich oder eine Wildfl\xE4che im Rasen.",outdoor_slope:"Gef\xE4lle (m)",outdoor_slope_hint:"H\xF6henunterschied von der hohen zur tiefen Kante; die hohe Kante liegt auf dem H\xF6henversatz. Leuchten auf der Fl\xE4che folgen.",outdoor_slope_dir:"F\xE4llt nach",slope_x:"rechts (+X)",slope_nx:"links (\u2212X)",slope_z:"unten (+Z)",slope_nz:"oben (\u2212Z)",north:"Nordrichtung (\xB0 im Uhrzeigersinn von oben)",north_hint:"Die Nordrichtung braucht der Sonnenstand (Licht durch die Fenster).",roof:"Dach",roof_none:"Kein Dach",roof_flat:"Flachdach",roof_gable:"Satteldach",roof_custom:"Dachfl\xE4chen (frei)",roof_sections:"Dachfl\xE4chen",roof_sections_hint:"Jede Dachfl\xE4che deckt ein Rechteck des Hauses ab, etwa das Wohnhaus, die Scheune oder einen Anbau \u2013 jede mit eigener Form, Firstrichtung, Traufh\xF6he und Neigung. Eine neue Fl\xE4che ziehst du im Plan auf; antippen w\xE4hlt sie aus, ziehen verschiebt sie, die Ecken \xE4ndern die Gr\xF6\xDFe.",roof_sections_start:"Dachfl\xE4chen aus den R\xE4umen erzeugen",roof_sections_regen:"Neu aus den R\xE4umen erzeugen",roof_sections_off:"Zur\xFCck zu einem Dach",roof_regen_confirm:"Alle Dachfl\xE4chen durch einen neuen Vorschlag aus den R\xE4umen ersetzen?",roof_section:"Dachfl\xE4che",roof_section_hint:"H\xF6hen z\xE4hlen vom Boden. Eine Seite mit tieferer Traufe zieht weiter herunter (Abschleppdach); Pultd\xE4cher steigen von der ersten Seite an.",roof_shape_gable:"Sattel",roof_shape_hip:"Walm",roof_shape_pent:"Pult",roof_shape_flat:"Flach",roof_shape_halfhip:"Kr\xFCppelwalm",roof_shape_pyramid:"Zelt",roof_shape_mansard:"Mansard",roof_shape_parapet:"Attika",roof_shape:"Form",roof_axis_x:"First \u2194",roof_axis_z:"First \u2195",roof_eave:"Traufe (m)",roof_pitch_short:"Neigung (\xB0)",roof_height:"H\xF6he (m)",roof_base:"Wandoberkante (m)",roof_on_floor:"Sitzt auf Etage",roof_on_floor_hint:"Setzt den Abschnitt auf die Wandoberkante dieser Etage; Grundh\xF6he und Traufen wandern mit. In der 3D-Ansicht geh\xF6rt das Dach zu dieser Etage.",roof_base_hint:"Liegt sie unter der Deckenh\xF6he des Geschosses darunter, enden dessen W\xE4nde an der Dachunterseite: Kniestock an der Traufe, Giebel bis zum First, Innenw\xE4nde an der Schr\xE4ge. Im Grundriss zeigen gestrichelte Linien, wo 1,5 m und 2 m Kopfh\xF6he bleiben.",roof_ridge_height:"Firsth\xF6he",roof_side_top:"oben",roof_side_bottom:"unten",roof_side_left:"links",roof_side_right:"rechts",roof_swap:"Seiten tauschen",roof_open:"\xDCberdachung (Pfosten statt W\xE4nde, durchsichtig)",roof_open_short:"\xDCberdachung",roof_dormer:"Gaube",roof_dormer_hint:"Eine Gaube auf dieser Dachseite: 2 m breit, Front an der Traufwand, Traufe 1,4 m \xFCber der Dachtraufe, Satteldach. Danach verschieben, Breite und H\xF6hen \xE4ndern wie bei jeder Dachfl\xE4che; die Hauptfl\xE4che \xF6ffnet sich darunter, die Wand des Dachgeschosses steigt bis zur Gaube \u2013 dort passt ein Fenster.",roof_outline:"Umriss des Geschosses \xFCbernehmen",roof_outline_hint:"Ein Flachdach als freie Form: \xFCbernimmt den Umriss der R\xE4ume des angezeigten Geschosses (auch L- oder Z-f\xF6rmig) als eine Fl\xE4che ohne Kanten. Die Ecken lassen sich danach ziehen.",roof_points_hint:"Freie Form: Ziehe die Ecken im Plan. Zur\xFCck zum Rechteck l\xF6scht die Form.",roof_rect:"Zur\xFCck zum Rechteck",roof_open_hint:"F\xFCr Terrassendach oder Carport: Statt W\xE4nden tragen Pfosten und Balken das Dach, die Fl\xE4che ist durchsichtig. Wo die \xDCberdachung an die Hauswand st\xF6\xDFt, liegt sie auf der Wand auf.",roof_swap_hint:"Dreht das Dach um: Die beiden Seiten tauschen Traufe und Neigung, ein Pultdach steigt in die andere Richtung.",roof_pitch:"Dachneigung (\xB0)",roof_overhang:"Dach\xFCberstand (m)",roof_ridge:"First",roof_ridge_long:"Entlang der langen Seite",roof_ridge_short:"Entlang der kurzen Seite (z. B. Reihenhaus)",device:"Ger\xE4t",lamp_mount:"Lampe",lamp_ceiling:"Deckenleuchte",lamp_floor:"Stehlampe",lamp_table:"Tischlampe",lamp_wall:"Wandleuchte",marker_height:"H\xF6he des Symbols (m)",height_auto:"H\xF6he automatisch",device_centre:"In Raummitte",lights_spread:"Deckenlampen gleichm\xE4\xDFig verteilen",devices_search:"Ger\xE4te suchen \u2026",devices_more:"+{n} weitere",devices_less:"weniger",panel_more:"Weitere Ger\xE4te des Bereichs ({n})",panel_less:"Weniger anzeigen",gaps_close:"L\xFCcken schlie\xDFen",gaps_hint:"R\xE4ume mit bis zu 60 cm Abstand an einer gemeinsamen Wand zusammenf\xFChren; der Abstand wird die Innenwandst\xE4rke.",gaps_none:"Keine L\xFCcken zwischen R\xE4umen gefunden.",straighten:"Schiefe Kanten begradigen",straighten_hint:"Findet Raumkanten, die nur um wenige Zentimeter schief laufen (eine Ecke 1 cm daneben), und richtet sie gerade aus. Bewusst schr\xE4ge W\xE4nde bleiben.",straighten_done:"{n} fast gerade Kanten begradigt.",straighten_none:"Keine schiefen Kanten gefunden.",gaps_closed:"{n} Stellen geschlossen.",gaps_closed_wall:"{n} Stellen geschlossen, Innenwand jetzt {t} m.",fps:"FPS",controls_side:"Wo Etagenbilder, Stern, Suche und Auge sitzen",controls_left:"Bedienleiste links",controls_right:"Bedienleiste rechts",keep_view:"Ansicht halten",keep_view_hint:"Beim Wechsel von Etage zu Etage bleibt die Kamera, wo sie ist \u2013 nur die H\xF6he wandert mit.",fps_title:"Leistungsanzeige (Bilder pro Sekunde)",hint_garage:"Auf eine Wand tippen, um ein Garagentor einzusetzen",opening_garage:"Garagentor",garage_hint:"Das Tor folgt einem Garagen-Cover (Position oder offen/zu) oder einem Garagentor-Kontakt aus dem Bereich des Raums.",door_hint:"Mit T\xFCrkontakt schwenkt das T\xFCrblatt auf, ohne Sensor steht es halb offen.",hint_door:"Auf eine Wand tippen, um eine T\xFCr einzusetzen",hint_window:"Auf eine Wand tippen, um ein Fenster einzusetzen",opening_door:"T\xFCr",opening_window:"Fenster",opening_type:"Art",opening_position:"Mitte ab Ecke (m)",sill:"Br\xFCstung (m)",terrain:"Gel\xE4nde",terrain_hint:"Wo der Boden um das Haus liegt. Was darunter liegt \u2013 ein Keller, der untere Teil eines Souterrains \u2013 steckt in 3D in der Erde; Rasen, Wege und Terrassen liegen auf dem Gel\xE4nde.",terrain_level:"Gel\xE4ndeh\xF6he (m, Erdgeschoss = 0)",terrain_earth:"Keller in der Erde zeigen",terrain_earth_hint:"Etagen unter dem Gel\xE4nde stecken in der Erde; \xF6ffnest du sie, siehst du sie wie in einer Baugrube. Aus: Sie stehen frei wie bisher.",terrain_cellar_hint:"Souterrain: die Gel\xE4ndeh\xF6he so weit senken, wie der Keller herausschauen soll \u2013 etwa \u22121,2 m. Kellerfenster unter dem Gel\xE4nde bekommen einen Lichtschacht.",terrain_no_cellar_hint:"Einen Keller legst du als Etage mit negativer H\xF6he an, zum Beispiel \u22122,6 m.",terrain_reset:"Gel\xE4nde zur\xFCcksetzen",cellar_window:"Kellerfenster",well:"Lichtschacht",well_hint:"Dieses Fenster liegt unter dem Gel\xE4nde: In 3D bekommt es einen Lichtschacht mit Gitterrost. Ohne Haken keinen \u2013 etwa wenn au\xDFen ein Weg vorbeif\xFChrt.",well_rim:"Rand \xFCber dem Gel\xE4nde (m)",cellar_window_hint:"Klein und oben in der Wand: 100 \xD7 50 cm, 25 cm unter der Decke. Liegt es unter dem Gel\xE4nde, bekommt es in 3D einen Lichtschacht mit Gitterrost.",opening_height:"H\xF6he (m)",hinge:"Anschlag (vom Raum aus)",hinge_left:"Links",hinge_right:"Rechts",cover_entity:"Rollladen",door_cover:"Antrieb (T\xFCr oder Tor mit Motor)",cover_position_entity:"Positions-Sensor (live)",cover_position_invert:"Sensor z\xE4hlt umgekehrt (0 = offen)",contact_entity:"Kontakt",sensor_kind:"Sensor-Art",sensor_kind_contact:"Fensterkontakt (offen/zu)",sensor_kind_handle:"Griff-Sensor (offen/gekippt/zu)",sensor_kind_contact_tilt:"Kontakt + Kipp-Sensor",handle_entity:"Griff-Sensor",handle_main:"Griff-Sensor Hauptfl\xFCgel",leaf_main:"Hauptfl\xFCgel",leaf_second:"Zweiter Fl\xFCgel",tilt_entity:"Kipp-Sensor",tilt_angle_entity:"Kippwinkel-Sensor (\xB0, optional)",tilt_angle_max:"Winkel f\xFCr \u201Eganz gekippt\u201C (\xB0)",tilt_angle_offset:"Offset: Winkel bei geschlossenem Fenster (\xB0)",tilt_angle_invert:"Winkel z\xE4hlt andersherum",door_shut:"Ohne Sensor geschlossen zeigen",door_shut_hint:"Eine T\xFCr ohne Kontakt steht in 3D halb offen, damit man sie als T\xFCr erkennt. Mit Haken wird sie geschlossen gezeichnet \u2013 Haust\xFCr, Carport, Nebent\xFCr.",contact_invert:"Kontakt umkehren",contact_invert_hint:"F\xFCr Sensoren, die offen und geschlossen andersherum melden",entity_auto:"Automatisch ({name})",entity_auto_none:"Automatisch (keiner gefunden)",entity_none:"Keiner",entity_search:"Tippen zum Suchen \u2026",opening_hint:"Sensor-Art: Fensterkontakt (meldet offen/zu), Griff-Sensor (meldet offen, gekippt und zu \u2013 z. B. Homematic-Fenstergriff) oder Kontakt + Kipp-Sensor (ein zweiter Sensor, der nur \u201Egekippt\u201C meldet). Automatisch nimmt Rolll\xE4den und Kontakte aus dem Bereich des Raums. Positions-Sensor: eine Entit\xE4t, die die Rollladen-Position auch w\xE4hrend der Fahrt meldet (z. B. Homematic \u201ELevel\u201C, 0\u2013100 % oder 0\u20131, offen = hoch) \u2013 dann f\xE4hrt der Rollladen in 3D live.",furniture:"M\xF6bel",furniture_add:"M\xF6bel hinzuf\xFCgen",furniture_search:"M\xF6bel suchen \u2026",furniture_search_none:"Nichts gefunden. Versuch ein anderes Wort \u2013 deutsch oder englisch.",furniture_type:"M\xF6belst\xFCck",rotation:"Drehung (\xB0)",strip_tilt:"Neigung um die L\xE4nge (\xB0)",strip_upright:"Senkrecht",strip_upright_hint:"Der Streifen steht hochkant: Seine L\xE4nge l\xE4uft von der H\xF6he \xFCber Boden nach oben \u2013 am T\xFCrrahmen, als Lichts\xE4ule. Die Neigung legt einen liegenden Streifen an die Schr\xE4ge (90\xB0 = Fl\xE4che zeigt zur Seite).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"H\xF6he (m)",furn_sofa:"Sofa",furn_sofa_l:"Ecksofa (L-Form)",furn_sofa_u:"Wohnlandschaft (U-Form)",furn_armchair:"Sessel",furn_table:"Tisch",furn_chair:"Stuhl",furn_bed:"Bett",furn_nightstand:"Nachttisch",furn_wardrobe:"Schrank",furn_shelf:"Regal",furn_kitchen:"K\xFCchenzeile",furn_worktop:"Arbeitsplatte",furn_fridge:"K\xFChlschrank",furn_fridge_smart:"Smart-K\xFChlschrank (Side-by-Side)",furn_door_left:"T\xFCrsensor links (Gefrierseite)",furn_door_right:"T\xFCrsensor rechts (K\xFChlseite)",fridge_hint:"Meldet ein T\xFCrsensor \u201Eoffen\u201C, schwingt die T\xFCr in 3D auf. Der Bildschirm auf der rechten T\xFCr zeigt Bilder nach Regeln wie ein Fernseher \u2013 solange die T\xFCr zu ist.",furn_stove:"Herd",furn_sink:"Sp\xFCle",furn_bathtub:"Badewanne",furn_shower:"Dusche",furn_wc:"WC",furn_washbasin:"Waschtisch",furn_desk:"Schreibtisch",furn_tv_board:"TV-Board",furn_plant:"Pflanze",furn_rug:"Teppich",furn_stairs:"Treppe",furn_stairs_u:"U-Treppe mit Podest",furn_stairwell:"Boden\xF6ffnung",stairwell_hint:"Ein Loch im Boden dieser Etage, zum Beispiel \xFCber dem Treppenaufgang oder f\xFCr eine Galerie; von oben sieht man hindurch. \xDCber mehreren R\xE4umen wird sie in jedem Raum ausgeschnitten; mehrere \xD6ffnungen d\xFCrfen sich \xFCberlappen (zum Beispiel f\xFCr eine L-Form). Eine Treppe auf der Etage darunter, die bis hier hinauf reicht, \xF6ffnet den Boden auch von selbst.",tool_hole:"Boden\xF6ffnung",tool_roof:"Dach",tool_energy:"Energie",tool_wall:"Wand",hint_wall:"Ziehen, um eine einzelne Wand zu zeichnen (Raumteiler, halbe Wand) \xB7 Umschalt h\xE4lt sie gerade \xB7 Alt ohne Fangen",free_wall:"Wand",wall_length:"L\xE4nge (m)",wall_thickness:"Wandst\xE4rke (m)",wall_height:"H\xF6he (m)",wall_height_full:"Volle Raumh\xF6he",wall_none:"Keine Wand",wall_none_hint:"Diese Wand ganz weglassen: f\xFCr offene Grundrisse, bei denen R\xE4ume baulich ein Raum sind, in Home Assistant aber getrennt.",edge_thickness:"Dicke (m)",wall_thickness_hint:"Dicke dieser Wand, z. B. 0,365 an einer dicken Au\xDFenwand oder 0,115 an einer leichten Trennwand. Eine Wand zwischen zwei R\xE4umen nimmt die dickere Angabe.",wall_thickness_reset:"Dicke wie im Haus eingestellt",wall_heights:"Wandh\xF6hen",wall_n:"Wand {a}\u2013{b}",wall_part:"Teil {n}",wall_split_hint:"Wand hier teilen: Das Teilst\xFCck bekommt eine eigene H\xF6he, z. B. 2,5 m neben 1,7 m in einer Flucht",wall_split_at:"Teilpunkt ab Ecke (m)",wall_join_hint:"Teilpunkt entfernen: Das Teilst\xFCck w\xE4chst wieder mit dem davor zusammen",wall_exterior_short:"Au\xDFenwand",room_wall_hint:"Eine niedrigere H\xF6he macht aus der Wand eine Br\xFCstung oder Theke. Teilen sich zwei R\xE4ume die Wand, gilt die niedrigere Einstellung. Fenster und T\xFCren darin enden an der Wandh\xF6he.",free_wall_hint:"Eine frei stehende Wand, zum Beispiel ein Raumteiler. Trifft sie auf eine Raumwand, wird die Ecke verschnitten. Die Endpunkte ziehst du an den Griffen, die ganze Wand verschiebst du an der Linie.",wall_pos_hint:"X und Y: die Mitte der Wand im Plan.",stairwell_outside:"Diese \xD6ffnung liegt in keinem Raum und wird deshalb nicht ausgeschnitten. Ziehe sie in einen Raum.",hint_hole:"Ziehen, um eine Boden\xF6ffnung aufzuziehen (Treppenaufgang, Galerie)",hint_roof:"Dachfl\xE4che aufziehen \xB7 antippen w\xE4hlt aus \xB7 ziehen verschiebt \xB7 Ecken \xE4ndern die Gr\xF6\xDFe",hint_energy:"Solarfeld antippen w\xE4hlt aus \xB7 ziehen verschiebt, auch auf eine andere Dachfl\xE4che \xB7 neue Felder rechts mit + Solarfeld",furn_parking:"Stellplatz",furn_group_vehicles:"Stellpl\xE4tze",parking_entity:"Sensor \u201EAuto anwesend\u201C",parking_vehicle:"Fahrzeug",parking_vehicle_none:"Keins",parking_no_pack:"Kein Fahrzeug-Pack importiert \u2013 Fahrzeuge kommen aus dem Pack \u201EFahrzeuge\u201C (M\xF6bel \u2192 M\xF6bel-Pack importieren).",parking_scale:"Gr\xF6\xDFe (%)",parking_type_entity:"Fahrzeugtyp-Sensor (optional)",parking_types:"Zustand \u2192 Fahrzeug",parking_type_state:"Zustand (z. B. van)",parking_add_type:"+ Zuordnung",parking_hint:"Ohne Sensor steht das Fahrzeug immer da. Mit Sensor erscheint es, sobald der Sensor \u201Ean\u201C, \u201Ehome\u201C oder \u201Eanwesend\u201C meldet. Ein Fahrzeugtyp-Sensor (z. B. aus einer KI-Kameraauswertung) w\xE4hlt das Modell: Passt sein Zustand zu einer Zuordnung \u2013 auch als Wort im Text \u2013, wird dieses Fahrzeug gezeigt, sonst das Standard-Fahrzeug.",parking_too_tall:"Das Fahrzeug ({car} m) ist h\xF6her als der Raum ({room} m).",furn_lamp_ceiling:"Deckenleuchte",furn_lamp_downlight:"Einbauspot",furn_lamp_spot:"Aufbau-Spot",furn_lamp_panel:"LED-Panel",furn_lamp_uplight:"Deckenfluter",furn_lamp_bollard:"Wegleuchte",furn_lamp_garden:"Garten-Spot",furn_radiator:"Heizk\xF6rper",furn_robot_vacuum:"Saugroboter",furn_entity_vacuum:"Saugroboter",furn_robot_room:"Aktueller Raum (Sensor)",robot_hint:"Saugt der Roboter in Home Assistant, f\xE4hrt er in 3D in Bahnen durch den Raum, den er meldet (Sensor \u201EAktueller Raum\u201C, zugeordnet \xFCber den Raum- oder Bereichsnamen), sonst durch den Raum seiner Station. Die Fahrspur ist simuliert \u2013 Home Assistant kennt meist nicht die genaue Position. Zur\xFCck f\xE4hrt er zur Station.",furn_lamp_pendant:"Pendelleuchte",furn_lamp_floor:"Stehlampe",furn_lamp_table:"Tischlampe",furn_lamp_wall:"Wandleuchte",furn_led_strip:"LED-Streifen",furn_group_lights:"Leuchten",furn_entity_light:"Licht oder Schalter",furn_color_entity:"Farbe und Helligkeit von (optional)",furn_color_entity_hint:"F\xFCr Lampen, die ein Relais (Shelly, Schaltaktor) ein- und ausschaltet, w\xE4hrend die Leuchte selbst Farbe und Helligkeit kennt: An/Aus kommt vom Schalter oben, Farbe und Helligkeit von dieser Entit\xE4t.",furn_entity_climate:"Heizung (Thermostat)",lamp_hint:"Antippen in 3D schaltet die Leuchte, lange dr\xFCcken \xF6ffnet das Schnellmen\xFC. Auch Schalter (z. B. ein Relais f\xFCrs Deckenlicht) sind m\xF6glich \u2013 die Leuchte strahlt dann, solange er an ist. Tischlampen stehen automatisch auf dem M\xF6bel darunter.",lamp_hint_pendant:"H\xF6he = Abh\xE4ngung unter der Decke. Antippen in 3D schaltet, lange dr\xFCcken \xF6ffnet die Details.",theme:"Look",version_hint:"Installierte Version von NeonPlan 3D \u2013 Oberfl\xE4che; die Integration in Home Assistant meldet {backend}",accent:"Akzentfarbe",accent_hint:"Eigene Akzentfarbe: Linien und Leuchtkanten im Neon-Look, Kn\xF6pfe und Pins \u2013 \u21BA setzt das Neon-Cyan zur\xFCck",accent_reset:"Zur\xFCck zu Cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Tag",furnish:"Einrichten",split_3d:"3D daneben",mount_height:"H\xF6he \xFCber Boden (m)",side_open:"Seitenleiste \xF6ffnen",side_close:"Einklappen",side_fold_hint:"Seitenleiste schmal machen \u2013 mehr Platz f\xFCr den Grundriss",side_details:"Details zur Auswahl",side_pin:"Anheften",side_pinned:"Angeheftet",side_pin_hint:"Angeheftet bleibt die Seitenleiste immer offen; sonst klappt sie neben der 3D-Ansicht zu, solange nichts ausgew\xE4hlt ist",split_3d_hint:"Live-3D neben dem Plan: M\xF6bel und Ger\xE4te dort ziehen und drehen \u2013 mit R\xFCckg\xE4ngig, gespeichert wird mit dem Plan",size_w:"Breite (m)",size_d:"Tiefe (m)",size_h:"H\xF6he (m)",furnish_hint:"M\xF6bel, Leuchten und Ger\xE4te mit dem Finger ziehen \xB7 M\xF6bel rasten an W\xE4nden ein \xB7 antippen zum Drehen, f\xFCr H\xF6he und Montage",done:"Fertig",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Feuchte",heat_short_co2:"CO\u2082",heat_short_values:"Werte",heat_temperature:"Temperatur",heat_humidity:"Luftfeuchtigkeit",heat_co2:"CO\u2082",heat_values:"Werte am Raumnamen",heat_none_found:"Keine passenden Sensoren in den Bereichen der R\xE4ume.",markers:"Symbole",markers_none:"Keine",markers_important:"Wichtige",markers_all:"Alle",furn_stool:"Hocker",furn_coffee_table:"Couchtisch",furn_tv_wall:"Fernseher (Wand)",furn_ac_unit:"Klimager\xE4t (Wand)",furn_awning:"Markise",furn_group_outdoor:"Terrasse & Balkon",furn_waste_bin:"M\xFClltonne",furn_mailbox:"Briefkasten",furn_group_household:"Haushalt",bin_shape:"Bauform",bin_shape_bin120:"Rolltonne 120 l",bin_shape_bin240:"Rolltonne 240 l",bin_shape_bin1100:"Container 1100 l",bin_shape_multi:"Mehrkammer-Tonne",bin_shape_bag:"Sack",bin_shape_caddy:"Eimer / Caddy",bin_shape_underground:"Unterflur-Container",bin_kind:"Abfallart",bin_kind_rest:"Restm\xFCll",bin_kind_bio:"Bio",bin_kind_paper:"Papier",bin_kind_plastic:"Verpackung (Gelbe Tonne / Sack)",bin_kind_glass:"Glas",bin_kind_garden:"Garten / Gr\xFCnschnitt",bin_kind_recycling:"Recycling / Wertstoffe",bin_kind_other:"Sonstiges",bin_color:"Farbe",bin_lid:"Deckel",bin_source:"Abfallkalender oder Sensor",bin_match:"Stichwort im Kalender (leer: nach Abfallart)",bin_hint:"Die Tonne leuchtet am Vortag ab 14 Uhr bis 12 Uhr am Abholtag; ihre Markierung zeigt, wann sie dran ist. Ein Kalender (z. B. von Waste Collection Schedule) wird nach den W\xF6rtern ihrer Abfallart durchsucht, ein Sensor kann die Tage bis zur Abholung oder das Datum liefern.",bin_today:"Heute",bin_tomorrow:"Morgen",bin_in_days:"in {n} Tagen",mailbox_shape:"Bauform",mailbox_shape_wall:"Wandbriefkasten",mailbox_shape_pole:"Briefkasten auf Pfosten (mit F\xE4hnchen)",mailbox_shape_pillar:"Standbriefkasten mit Zeitungsfach",mailbox_shape_parcel:"Paketbox",mailbox_shape_bank:"Briefkastenanlage",mailbox_entity:"Sensor f\xFCr Post (Klappe oder Merker)",mailbox_door:"Sensor der Entnahmet\xFCr (optional)",mailbox_hint:"Mit einem Merker (z. B. input_boolean \u201EPost da\u201C aus einer Automation) leuchtet der Briefkasten, solange er an ist. Mit Einwurfklappe und Entnahmet\xFCr leuchtet er, wenn nach dem letzten Leeren Post eingeworfen wurde.",mailbox_post:"Post da",pro_name_household:"Haushalt Pro",pro_feature_household:"Haushalt Pro: M\xFClltonnen leuchten am Vorabend der Abholung (Abfallkalender oder Sensor) und zeigen, wann sie dran sind; der Briefkasten leuchtet, wenn Post da ist, bis er geleert wurde",household_teaser_bin:"Mit Haushalt Pro leuchtet die Tonne am Vorabend der Abholung \u2013 aus deinem Abfallkalender.",household_teaser_mail:"Mit Haushalt Pro leuchtet der Briefkasten, sobald Post da ist \u2013 bis er geleert wurde.",awning_cover:"Markise (Cover)",awning_pitch:"Neigung (\xB0)",awning_time:"Laufzeit ganz aus (s)",awning_position:"Positionssensor (optional)",awning_valance:"Volant (Stoffkante vorne)",awning_invert:"Richtung umkehren",awning_invert_hint:"F\xFCr Covers, die 100 % melden, wenn die Markise eingefahren ist.",awning_kind:"Art",awning_kind_arm:"Gelenkarm-Markise (Terrasse)",awning_kind_drop:"Fallarm-Markise (Balkon, Fenster)",awning_kind_vertical:"Senkrechtmarkise / ZIP (Fenster, Balkon)",awning_kind_pergola:"Pergola- / Wintergartenmarkise",awning_kind_side:"Seitenmarkise (Sichtschutz)",awning_kind_arm_hint:"Die Klassiker \xFCber der Terrasse: Gelenkarme schieben das Tuch mit leichtem Gef\xE4lle hinaus. Tiefe = Ausfall.",awning_kind_drop_hint:"Die Arme schwenken von der Wand nach vorn und unten, das Tuch spannt sich schr\xE4g davor. Tiefe = Arml\xE4nge, Neigung = wie weit die Arme unter die Waagerechte gehen.",awning_kind_vertical_hint:"Das Tuch f\xE4hrt senkrecht in Seitenschienen bis zum Boden herunter \u2013 vor ein Fenster, eine Balkonbr\xFCstung oder die Front einer Pergola. H\xF6he \xFCber Boden = Unterkante des Kastens.",awning_kind_pergola_hint:"Ein fester Rahmen mit Pfosten vorne; das Tuch f\xE4hrt oben auf den Schienen aus. Tiefe = bis zu den Pfosten, Neigung = Gef\xE4lle des Dachs.",awning_kind_side_hint:"Ein Pfosten mit dem aufgerollten Tuch links, das Tuch zieht sich waagerecht nach rechts bis zum Gegenpfosten. Breite = Auszug, H\xF6he \xFCber Boden = H\xF6he des Tuchs.",awning_hint:"Breite = Markise entlang der Wand, Tiefe = Ausfall ganz ausgefahren; die R\xFCckseite des Rahmens kommt an die Hauswand, H\xF6he \xFCber Boden ist die Unterkante der Kassette. Meldet das Cover seine Position auch beim Fahren, f\xE4hrt die Markise in 3D langsam mit; meldet es nur \u201Ef\xE4hrt aus/ein\u201C, f\xE4hrt sie in der Laufzeit mit.",furn_only_color:"Nur in einer Farbe leuchten",furn_only_color_pick:"Farbe",furn_only_color_hint:"Die Lampe leuchtet nur, solange das Licht ungef\xE4hr diese Farbe zeigt \u2013 z. B. gelb f\xFCr \u201EWasser\u201C am Waschbecken. Andere Farben desselben Lichts bleiben hier dunkel.",furn_run_w:"L\xE4uft ab (Watt)",furn_run_w_hint:"Ab wie viel Watt am Leistungssensor das Ger\xE4t als laufend gilt und leuchtet (leer: 10 W). F\xFCr Ger\xE4te hinter einer Steckdose, die im Standby ein paar Watt ziehen, z. B. 100.",furn_sideboard:"Sideboard",furn_table_round:"Runder Tisch",furn_bench:"Sitzbank",furn_corner_bench:"Eckbank",furn_bar_stool:"Barhocker",furn_kitchen_wall:"Oberschrank",furn_kitchen_tall:"Hochschrank mit Backofen",furn_island:"Kochinsel",furn_dishwasher:"Sp\xFClmaschine",furn_bunk_bed:"Etagenbett",furn_dresser:"Kommode",furn_washer:"Waschmaschine",furn_dryer:"Trockner",furn_office_chair:"B\xFCrostuhl",furn_tall_cabinet:"Hochschrank",furn_coat_rack:"Garderobe",furn_group_living:"Wohnen",furn_group_dining:"Essen",furn_group_kitchen:"K\xFCche",furn_group_sleeping:"Schlafen",furn_group_bath:"Bad & Hauswirtschaft",furn_group_work:"Arbeiten & Sonstiges",furn_group_energy:"Energie & Solar",energy_devices:"Ger\xE4te",solar_pro_title:"Solar & Energie Pro",solar_pro_soon:"bald verf\xFCgbar",solar_pro_1:"Module, die bei Sonne leben und mit der Leistung leuchten",solar_pro_2:"Feine Stromfluss-Leitungen durchs Haus: woher der Strom gerade kommt und wohin er flie\xDFt",solar_pro_3:"Ein Hologramm aus Glas mit Leistung, Tageskurve, Ertrag heute und Autarkie",solar_pro_4:"Werte je Strang auf dem Dach, Akku, Wallbox und Netz auf einen Blick",solar_pro_free:"Alles, was du hier einrichtest (Felder, Str\xE4nge, Ger\xE4te, Sensoren), bleibt kostenlos und wird von der Pro-Erweiterung direkt genutzt.",wallbox_charging:"l\xE4dt",wallbox_plugged:"angesteckt",furn_soc:"Ladestand (%)",furn_export:"Einspeiseleistung (W, separater Sensor, optional)",furn_export_hint:"Meldet dein Z\xE4hler Bezug und Einspeisung in zwei Sensoren (z. B. Growatt, Tibber Pulse), nimm oben den Bezugs-Sensor als Leistung und hier den Einspeise-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_charge:"Ladeleistung (W, separater Sensor, optional)",furn_charge_hint:"Meldet dein Speicher Laden und Entladen in zwei Sensoren (z. B. Anker Solix), nimm oben den Entlade-Sensor als Leistung und hier den Lade-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_wallbox_status:"Status (l\xE4dt, angesteckt)",energy_only_note:"\u26A1 Energie: Hier lassen sich nur Solarfelder und Energieger\xE4te verschieben, R\xE4ume und M\xF6bel sind gesperrt.",roof_only_note:"\u{1F3E0} Dach: Hier lassen sich nur Dachfl\xE4chen und Dachfenster verschieben, R\xE4ume und M\xF6bel sind gesperrt.",energy_devices_hint:"Stromz\xE4hler, Wechselrichter, Stromspeicher, Wallbox und Netzanschluss werden hier angelegt: auf der oben gew\xE4hlten Etage, im Grundriss verschiebbar. Mit Leistungssensor zeigen sie ihre Watt; der Z\xE4hler bekommt den Netzsensor, beim Strang w\xE4hlst du den Wechselrichter. Mehrere Wechselrichter und Speicher (etwa eine Balkonanlage dazu) gehen auch: Jeder bekommt seinen eigenen Sensor.",solar_fields:"Solarfelder",solar_hint:"Module aufs Dach legen: Sie liegen in der Neigung der Dachfl\xE4che, auf einem Flachdach stehen sie aufgest\xE4ndert. Im Grundriss l\xE4sst sich ein Feld mit der Maus verschieben.",solar_no_roof:"F\xFCr Solarfelder braucht das Haus ein Dach: unter Einstellungen ein Sattel- oder Flachdach, oder Dachabschnitte hier im Dach-Werkzeug.",solar_face_gone:"Dachfl\xE4che fehlt",solar_summary:"{n} Module \xB7 {kwp} kWp",solar_add:"Solarfeld",solar_field:"Solarfeld",solar_face:"Dachfl\xE4che",solar_rows:"Reihen",solar_cols:"Module pro Reihe",solar_portrait:"Hochformat",solar_landscape:"Querformat",solar_u:"Abstand vom Rand (m)",solar_v:"Abstand von der Traufe (m)",solar_tilt:"Neigung der Aufst\xE4nderung (\xB0)",solar_flip:"In die andere Richtung neigen",solar_partial:"nur {n} von {total} passen auf die Fl\xE4che",solar_form_hint:"Module, die \xFCber die Dachfl\xE4che hinausragen w\xFCrden, fallen weg. \u201EFl\xE4che f\xFCllen\u201C legt so viele Module aufs Dach, wie passen. kWp gerechnet mit 400 W je Modul.",solar_fit:"Fl\xE4che f\xFCllen",roof_windows:"Dachfenster",roof_window:"Dachfenster",roof_windows_hint:"Dachfenster liegen in der Dachfl\xE4che, mit Rollladen und Kontakt wie normale Fenster. Im Grundriss lassen sie sich verschieben, auch auf eine andere Dachfl\xE4che.",roof_window_tilt:"Kippkontakt",roof_window_name:"Name (optional)",roof_window_motor:"Fenstermotor (Cover, optional)",roof_window_float:"Ohne Dach \xFCber dem Raum zeigen",roof_window_float_hint:"Blendet das Dach beim Heranzoomen an eine Etage oder einen Raum aus, bleibt das Fenster an seiner Stelle \xFCber dem Raum stehen \u2013 offen, gekippt, mit dem Rollladen. Das geht \xFCber R\xE4umen der Etage, auf der das Dach sitzt; reicht die Schr\xE4ge \xFCber eine tiefere Etage, bleiben die Fenster dort im Dach. Aus: Es ist nur im Dach zu sehen.",roof_window_motor_hint:"Ein Fenstermotor (Velux, Roto, Fakro) meldet seine Position als Cover: Der Fl\xFCgel \xF6ffnet in 3D so weit, wie der Motor steht. Ein Kontakt oder Kippkontakt geht weiterhin ohne Motor.",roof_window_hint:"Offen klappt der Fl\xFCgel oben angeschlagen nach au\xDFen, gekippt ein St\xFCck, und der Rahmen leuchtet warm; der Rollladen f\xE4hrt von oben \xFCber die Scheibe. In einer Dachfl\xE4che schneidet das Fenster ein Loch in die Schr\xE4ge, so sieht das Dachgeschoss hinaus.",solar_ground:"Frei aufgest\xE4ndert (Garten, Garagendach \u2026)",solar_add_ground:"Frei aufgest\xE4ndert",solar_base:"H\xF6he der Aufstellfl\xE4che (m, 0 = Boden)",solar_add_wall:"An der Wand",solar_wall:"Wand",solar_wall_free:"frei stehend",solar_v_wall:"H\xF6he \xFCber dem Boden (m)",solar_tilt_wall:"Neigung von der Wand (\xB0, 90 = Vordach)",solar_flip_wall:"Unten abstehend statt oben",solar_rotation:"Drehung (\xB0)",solar_name:"Name",solar_name_hint:"z. B. Strang 1 S\xFCd",solar_module_w:"Modulbreite (m)",solar_module_h:"Modulh\xF6he (m)",solar_wp:"Modulleistung (Wp)",solar_string:"Strang",solar_strings:"Str\xE4nge",solar_string_none:"Kein Strang",solar_string_new:"Neuer Strang",solar_string_n:"Strang {n}",solar_string_name:"Name des Strangs",solar_string_entity:"PV-Leistung des Strangs",solar_string_inverter:"Angeschlossen an (Wechselrichter oder Speicher)",solar_string_inverter_none:"Kein Wechselrichter gew\xE4hlt",inverter_strings:"Str\xE4nge an diesem Wechselrichter: {names}",inverter_strings_none:"Noch kein Strang an diesem Wechselrichter \u2013 zuordnen beim Solarfeld unter Strang \u203A Wechselrichter.",solar_string_inverter_missing:"Noch kein Wechselrichter im Plan (unten bei Ger\xE4te anlegen)",solar_string_hint:"Felder im selben Strang geh\xF6ren zusammen, auch auf verschiedenen D\xE4chern (z. B. 5 Module auf dem Haus und 5 auf der Garage). Sensor und Wechselrichter gelten f\xFCr den ganzen Strang.",solar_string_sum:"{fields} Felder \xB7 {n} Module \xB7 {kwp} kWp",solar_face_size:"Dachfl\xE4che {w} \xD7 {h} m (entlang der Traufe \xD7 die Schr\xE4ge hoch)",solar_cols_hint:"Eine Zahl f\xFCr gleich lange Reihen, oder eine Liste f\xFCr Reihen eigener L\xE4nge: \u201E4, 4, 3\u201C (von der Traufe aus).",solar_align_left:"Links",solar_align_center:"Mitte",solar_align_right:"Rechts",solar_look_black:"Full Black",solar_look_blue:"Blau",solar_pick:"Module einzeln an/aus",solar_pick_all:"Alle wieder an",solar_pick_hint:"Tippe im Grundriss auf ein Modul, um es wegzunehmen oder wieder dazuzunehmen. Weggenommene sind gestrichelt.",solar_entity:"PV-Leistung dieses Feldes (z. B. sein Strang)",solar_main:"Hauptdach",solar_section:"Abschnitt {n}",solar_flat:"Flachdach",compass_n:"Nord",compass_ne:"Nordost",compass_e:"Ost",compass_se:"S\xFCdost",compass_s:"S\xFCd",compass_sw:"S\xFCdwest",compass_w:"West",compass_nw:"Nordwest",furn_meter:"Stromz\xE4hler",furn_grid_point:"Netzanschluss",grid_point_hint:"Hier endet die Netzleitung: am \xDCbergabepunkt zum Stromanbieter, zum Beispiel am Ende der Einfahrt. Im Grundriss verschiebbar; ohne Netzanschluss endet die Leitung am Rand der Au\xDFenfl\xE4chen.",furn_model:"Modell",inverter_std:"Standard (Wandger\xE4t mit Display)",inverter_slim:"Schmal und hoch (Lichtleiste)",inverter_hybrid:"Hybrid (Rund-Display, L\xFCfter)",battery_std:"Turm (gestapelte Module)",battery_wall:"Wandspeicher (flach, h\xE4ngend)",battery_cube:"Kompakt (Balkonspeicher)",furn_inverter:"Wechselrichter",furn_home_battery:"Stromspeicher",furn_wallbox:"Wallbox",furn_entity:"Ger\xE4t (Schalter, Steckdose \u2026)",furn_state_entity:"Zustand von (optional)",furn_state_entity2:"Zweiter Zustand (andere H\xE4lfte)",furn_state_split:"H\xE4lften",furn_state_left_right:"Links / rechts",furn_state_top_bottom:"Unten / oben (Hochbett)",furn_state_hint:"Das M\xF6bel leuchtet, solange die Entit\xE4t an, belegt oder zu Hause meldet \u2013 ein Bett mit Belegungsmatte, ein Sessel, die Sauna. Zwei Entit\xE4ten beleuchten die H\xE4lften: links und rechts, beim Hochbett unten und oben.",furn_entity_tv:"Fernseher (Media-Player oder Steckdose)",fix:"Fixieren",unfix:"L\xF6sen",fix_hint:"Fixiert: l\xE4sst sich nicht mehr versehentlich verschieben (Taste L, Rechtsklick oder langes Dr\xFCcken)",fixed_drag_hint:"\u{1F512} Fixiert \u2013 zum Verschieben erst l\xF6sen (Schloss im Formular, Rechtsklick oder Taste L)",fixed_delete_confirm:"Dieses Element ist fixiert. Trotzdem l\xF6schen?",lock_plan:"\u{1F512} Grundriss",lock_plan_hint:"Grundriss sperren: R\xE4ume, W\xE4nde, T\xFCren, Fenster und Au\xDFenfl\xE4chen lassen sich nicht mehr versehentlich verschieben. M\xF6bel und Ger\xE4te bleiben frei.",start_view:"Startansicht",start_view_hint:"Mit dieser Ansicht \xF6ffnen 3D-Ansicht, Karte und Kiosk das Haus, zum Beispiel von der Gartenseite. Drehe, zoome und verschiebe das Haus in der 3D-Ansicht rechts, bis es passt, und merke sie dir dann.",start_view_card:"Soll eine Karte eine andere Ansicht haben: diese Zeile in ihre YAML-Konfiguration \xFCbernehmen.",start_view_set:"Aktuelle 3D-Ansicht als Start merken",start_view_reset:"Standard",start_view_saved:"Eine eigene Startansicht ist gespeichert.",ctx_rotate:"Drehen 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} weitere \u2013 Suche eingrenzen",climate:"Raumklima",climate_temperature:"Temperatur",climate_humidity:"Luftfeuchte",climate_co2:"CO\u2082",climate_hint:"Diese Sensoren gelten f\xFCr die Heatmap und das Raumfenster. \u201EAutomatisch\u201C nimmt die Sensoren des Bereichs und die im Raum platzierten, aber keine Ger\xE4tetemperaturen (3D-Drucker, W\xE4rmepumpe, Vorlauf \u2026).",plan_locked:"Grundriss gesperrt",plan_lock:"Grundriss sperren",plan_unlock:"Grundriss entsperren",opening_mark:"Markieren in 3D",opening_mark_open:"Wenn offen",opening_mark_closed:"Wenn geschlossen (z. B. WC)",opening_mark_hint:"Ein markiertes Fenster oder eine markierte T\xFCr leuchtet warm. \u201EWenn geschlossen\u201C braucht einen Kontakt; ohne Sensor wird nichts markiert.",marker_show:"Symbol in 3D",marker_show_hint:"Automatisch folgt dem Schalter Keine / Wichtige / Alle in der 3D-Ansicht. Immer zeigen und Ausblenden gelten unabh\xE4ngig davon (au\xDFer bei Keine).",marker_show_auto:"Automatisch",marker_show_always:"Immer zeigen",marker_show_no_power:"Ohne Watt",marker_show_never:"Ausblenden",marker_icon:"Eigenes Symbol (Material-Design-Icon)",device_name:"Eigener Name (optional)",show_name:"Name unter dem Symbol in 3D zeigen",card_marker_names:"Eigene Namen an den Symbolen",card_marker_names_hint:"Jedes Ger\xE4t mit eigenem Namen zeigt ihn klein unter seinem Symbol \u2013 drei Thermometer im Garten bleiben unterscheidbar.",device_name_hint:"Ein Name nur f\xFCr den Plan, z. B. \u201EDekolicht Kochinsel\u201C \u2013 die Entit\xE4t in Home Assistant bleibt, wie sie ist.",floor_turn:"90\xB0 drehen",floor_shift_all:"Alle Etagen mitnehmen (ganzes Haus)",floor_shift_all_hint:"Verschieben und Drehen wirken auf alle Etagen samt Dachfl\xE4chen, Au\xDFenfl\xE4chen, Leitungen, Z\xE4hler und Hologramm \u2013 das ganze Haus wandert als Ganzes.",floor_turn_hint:"Dreht alles auf der Etage um 90\xB0 im Uhrzeigersinn um die Mitte der R\xE4ume \u2013 wenn eine Etage verdreht gezeichnet wurde. Dreimal = 270\xB0.",marker_icon_hint:"Name eines Material-Design-Icons wie bei Home Assistant, z. B. mdi:thermometer oder mdi:water-alert. Leer = Symbol nach Ger\xE4teart.",furn_power:"Leistungssensor (W)",furn_holo:"Hologramm \xFCber dem Ger\xE4t (Energie Pro)",furn_holo_hint:"Eine Glaskarte \xFCber dem Ger\xE4t mit Leistung jetzt, Verbrauch heute und Tageskurve \u2013 in der Haus- und in der Etagenansicht. Braucht einen Leistungssensor.",holo_dev_now:"jetzt",furn_links_hint:"Mit Leistungssensor zeigt das M\xF6bel seine Watt und bekommt eine Energie-Leitung.",screen_pictures:"Bilder nach Zustand",screen_pictures_hint:"Verglichen wird der Zustand oder ein Attribut der Entit\xE4t (z. B. app_name eines Fernsehers). Der Wert passt, wenn er gleich ist oder im Text vorkommt (\u201Eyoutube\u201C passt zu \u201Ecom.google.android.youtube.tv\u201C); \u201E*\u201C = immer. Die erste passende Regel gewinnt. Bilder werden auf 512 px verkleinert gespeichert; alternativ eine Bild-URL oder eine Kamera \u2013 deren Livebild wird alle 5 Sekunden erneuert, solange es gezeigt wird. Ohne passende Regel zeigt der Bildschirm den Media Player.",picture_state:"ist oder enth\xE4lt \u2026 (z. B. netflix)",picture_state_of:"Zustand",picture_attribute:"Zustand oder Attribut vergleichen",picture_pick:"Bild w\xE4hlen \u2026",picture_change:"Bild \xE4ndern \u2026",picture_url:"oder Bild-URL",picture_add_value:"+ Wert",picture_reuse:"Vorhandenes Bild verwenden",picture_camera:"oder Kamera (Livebild) \u2026",picture_camera_none:"Keine Kamera",screen_bg:"Bildschirm hinter dem Bild",screen_bg_black:"Dunkel",screen_bg_white:"Wei\xDF",picture_add_entity:"+ Weitere Entit\xE4t",picture_current:"aktuell: {value}",picture_matches:"\u2713 passt gerade \u2013 dieses Bild wird gezeigt",furn_links_hint_tv:"Der Bildschirm leuchtet, solange der Fernseher an ist, in der Farbe der App (Netflix, YouTube \u2026); das Schild zeigt App oder Titel.",stairs_hint:"Die Treppe steigt nach hinten an (weg von der markierten Vorderkante) und \xF6ffnet die Decke der Etage dar\xFCber.",stairs_u_hint:"Die U-Treppe steigt von der markierten Vorderkante nach hinten, wendet am Podest und kommt auf der anderen Seite wieder nach vorn hoch. \u201ESpiegeln\u201C dreht die Laufrichtung um. Sie \xF6ffnet die Decke der Etage dar\xFCber.",floor_lights:"{n} Licht an",floor_open:"{n} offen",floor_persons:"{n} Pers.",energy_consumption:"Verbrauch",energy_grid_import:"Netzbezug",energy_grid_export:"Einspeisung",energy_solar:"Solar",energy_battery:"Akku",energy_tariff:"Tarif",energy:"Energie",energy_meter:"Z\xE4hlerplatz",energy_grid:"Netz (W, + = Bezug)",energy_solar_sensor:"Solar-Erzeugung (W)",energy_battery_sensor:"Akku-Leistung (W, + = Entladen)",energy_battery_soc:"Akku-Ladestand (%)",energy_tariff_sensor:"Tarif (z. B. \u20AC/kWh)",energy_gas_meter:"Gasz\xE4hler",energy_water_meter:"Wasserz\xE4hler",energy_meters_hint:"Energie Pro: Die Haus-Karte zeigt, wie viel Gas und Wasser heute verbraucht wurde \u2013 aus der Statistik der Z\xE4hler (Z\xE4hlerstand, z. B. in m\xB3). \u201EAus dem Energie-Dashboard \xFCbernehmen\u201C f\xFCllt beide mit.",holo_gas:"Gas",holo_water:"Wasser",holo_today_short:"heute",energy_invert:"Vorzeichen umkehren",energy_hint:"Verbraucher sind platzierte Ger\xE4te mit Leistungssensor (W) \u2013 der Sensor selbst oder einer vom selben Ger\xE4t.",energy_balance:"Energiebilanz",energy_balance_hint:"Netz, Solar und Akku kommen von den Ger\xE4ten im Plan: Stromz\xE4hler, Wechselrichter und Stromspeicher. Hier kannst du andere Sensoren w\xE4hlen, Vorzeichen umkehren und den Hausverbrauch angeben.",energy_consumption_sensor:"Hausverbrauch (W, sonst aus der Bilanz)",energy_import_prefs:"Aus dem Energie-Dashboard \xFCbernehmen",energy_import_done:"{n} Sensoren \xFCbernommen \u2013 bitte die Vorzeichen pr\xFCfen.",energy_import_none:"Im Energie-Dashboard sind keine passenden Leistungssensoren (W) zu finden \u2013 bitte von Hand w\xE4hlen.",energy_import_failed:"Das Energie-Dashboard von Home Assistant ist nicht eingerichtet.",tool_meter:"Z\xE4hler",hint_meter:"Auf die Stelle des Z\xE4hlers tippen",presence:"Anwesenheit",presence_hint:"Raumsensor je Person (z. B. ESPresense, Bermuda): sein Zustand nennt den Raum oder Bereich.",presence_sensor:"Raumsensor",no_persons:"In Home Assistant gibt es keine Personen.",diag_title:"Hilf mit, NeonPlan besser zu machen",diag_intro:"Freiwillig und anonym: Wenn du es einschaltest, schickt NeonPlan h\xF6chstens einmal am Tag einen kleinen Bericht an den NeonPlan-Server (api.mastershort.de). Er zeigt, auf welchen Ger\xE4ten NeonPlan l\xE4uft, wo es ruckelt und welche Fehler auftreten \u2013 damit sie behoben werden k\xF6nnen.",diag_sent_head:"Was gesendet wird:",diag_sent:"eine zuf\xE4llige Kennung (nicht die von Home Assistant), die Versionen von NeonPlan, Home Assistant und Python, die Sprache, die installierten Pakete und Pro-Erweiterungen, Anzahlen aus dem Plan (Etagen, R\xE4ume, M\xF6bel, verkn\xFCpfte Ger\xE4te, Kameras), Ger\xE4teart, Browser und System der Bildschirme mit Bildrate und Grafikklasse, wie oft welche Ansicht ge\xF6ffnet wurde, und Fehlermeldungen von NeonPlan ohne Namen und Adressen.",diag_never_head:"Was nie gesendet wird:",diag_never:"Namen, Entit\xE4ten, Bereiche, die Form deines Grundrisses, IP-Adressen, die Kennung deiner Home-Assistant-Installation, Benutzernamen und dein Lizenzschl\xFCssel.",diag_voluntary:"Du kannst es jederzeit wieder ausschalten. Die Berichte werden 12 Monate aufbewahrt; mit \u201EMeine Daten l\xF6schen\u201C verschwinden sie sofort. Mehr dazu in der",diag_privacy:"Datenschutzerkl\xE4rung",diag_switch:"Anonyme Nutzungs- und Fehlerberichte senden",diag_view:"Daten ansehen",diag_view_head:"Das wird gesendet",diag_view_hint_on:"Genau dieser Bericht geht beim n\xE4chsten Mal hinaus (h\xF6chstens einmal am Tag); Fehler zus\xE4tzlich h\xF6chstens einmal pro Stunde.",diag_view_hint_off:"Ausgeschaltet: Es wird nichts gesendet. So s\xE4he der Bericht aus \u2013 die Kennung entsteht erst beim Einschalten.",diag_delete:"Meine Daten l\xF6schen",diag_delete_confirm:"Alle Berichte dieser Installation auf dem Server l\xF6schen und das Senden ausschalten?",diag_deleted:"Gel\xF6scht. Das Senden ist aus; schaltest du es wieder ein, gibt es eine neue Kennung.",diag_delete_failed:"Der NeonPlan-Server war nicht erreichbar. Bitte sp\xE4ter noch einmal versuchen.",diag_unavailable:"Diese Einstellung gibt es nach einem Neustart von Home Assistant."},Is={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",phone_hint:"Drawing works best on a PC or tablet \u2013 on a phone you can look around and control your home.",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",save_failed_detail:"Saving failed: {error}. Your changes are kept in this browser.",needs_restart:"A new version of NeonPlan 3D ({frontend}) is installed, but Home Assistant still runs {version}. Please restart Home Assistant \u2013 until then saving may fail.",needs_reload:"This page still shows NeonPlan 3D {frontend}, Home Assistant already has {backend}. Please reload the page; in the companion app: Settings \u2192 Companion app \u2192 Reset frontend cache.",reload_page:"Reload",needs_restart_old:"A new version of NeonPlan 3D is installed, but Home Assistant still runs an older one. Please restart Home Assistant \u2013 until then saving fails.",draft_found:"Unsaved changes from {time} found.",draft_restore:"Restore and save",draft_discard:"Discard",walls_auto:"Tall walls",walls_cut:"Cut",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",add_floor:"Add floor",floor_from_ha:"Floors from Home Assistant:",floor_empty:"Empty floor",level:"Level {n}",ha_floor:"Floor in Home Assistant",no_ha_floor:"\u2013 none \u2013",area_rooms:"Add rooms from HA areas ({n})",area_rooms_hint:"Adds a room (4 \xD7 3 m) for each area of this floor \u2013 then drag it into place and adjust the corners",floor_name:"Name",elevation:"Elevation (m)",floor_shift:"Shift the floor (m)",floor_shift_apply:"Shift",floor_shift_hint:"Moves every room, furniture item, device, outdoor area, free wall and the background image of this floor by X and Z. Roof sections and cables stay.",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",default_floor:"Ground floor",new_floor:"Floor {n}",tool_select:"Select",show_menu:"Show",tool_menu:"Tool",floor_label:"Floor:",floor_settings:"Floor settings",floor_settings_of:"Floor {floor}",floor_none_hint:'Add your first floor at the top with "Floor" \u2192 "Add floor".',tool_group_build:"Build",tool_group_outside:"Outside",tool_room:"Room",view_menu:"View",tool_rect:"Rectangle",tool_polygon:"Free shape",undo:"Undo",redo:"Redo",fit:"Whole plan",fit_hint:"Bring the whole floor plan of the floor into view (with the garden when outside)",room:"Room",rooms:"Rooms",room_name:"Name",room_id:"ID (card option room:)",room_openings:"Doors and windows",area:"Area",no_area:"No area",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",tech_open:"Draw the technical room",tech_open_hint:"Then tap the wall in the plan your equipment hangs on.",tech_step:"Step {n}",tech_step_feed:'Tap "{name}" on the left, then the spot on the wall where the line comes in (right at the bottom: out of the floor).',tech_step_devices:"Tap the filter pump and the sand filter on the left \u2013 they stand at the wall. The heat pump and dosing unit if you have them.",tech_step_line:'Draw a line: from "{a}" to "{b}". Just press on the one and drag to the other.',tech_step_loose:"A pipe still ends loose \u2013 draw it on to a device or a line, or delete it (\u270B Select).",tech_step_drawing:"Drag on or tap point by point \u2013 the line ends on a device, a line or a pipe.",tech_step_fit:"Tap the pipe the valve (sight glass) goes into \u2013 it lights up orange.",tech_mode:"Pool equipment",tech_mode_hint:"Draw the technical room on this wall: bring the pool's lines in, put the devices up, draw the pipes",tech_draw:"Draw",tech_pick:"Select",pool_delete_confirm:"Delete the pool with all {n} pipes?",tech_erase:"Erase",tech_erase_hint:"Tap a pipe, ball valve, sight glass or hole \u2013 it is removed. Drew it wrong? Undo helps too.",tech_feeds:"Lines from the pool",tech_devices:"Devices",tech_fittings:"Fittings",tech_hint:"Draw a line: tap a device, a line or a pipe and drag to the next one (or tap point by point). Dragged onto a pipe it makes a T-piece. NeonPlan works out which way the water runs and which connection of a device it takes.",tech_no_ports:"First put the skimmer, bottom drain and inlets at the pool with the pool tool.",tech_ok:"All connected \u2013 the water flows.",tech_issue_loose:"{n} loose pipe ends",tech_issue_port:"{name} not connected",tech_issue_feed:"{name} not brought in yet",tech_feed_place:"Tap where the line comes into the room \u2013 right at the bottom: out of the floor, higher up: through the wall.",tech_start:"Tap a device or a line and draw a line.",feed_skimmer:"Skimmer",feed_drain:"Bottom drain",feed_inlet:"Inlets",feed_waste:"Waste drain (backwash)",hp_ports:"Connections",hp_side_right:"right",hp_side_left:"left",hp_side_back:"back",pool_depth:"Basin depth (m)",pool_rim:"Rim above the lawn (m)",pool_depth_hint:"Basin depth: from the rim down to the floor. A 1.50 m deep pool standing 20 cm out of the lawn: depth 1.50, rim 0.20. The water stands 15 cm below the rim.",pool_depth_ground:"The depth shows in 3D once the pool lies in a lawn, terrace or other area \u2013 without ground around it the basin would show from outside.",pool_port_depth:"Depth",pool_port_depth_hint:"How far below the water line (m): inlets usually 0.30, the skimmer at the water line",pool_valves:"Ball valves",pool_valve_shut:"shut",pool_valve_toggle:"Tap to switch \u2013 the way the valve really stands",pool_joint:"Fitting",block_some_fixed:"\u{1F512} A part of it is fixed \u2013 the block moves once all parts are released.",unfix_all:"Release all",wv_block_all:"Whole block",wv_block_one:"This part only",wv_gap:"Gap: {w} \u2013 this fits in:",wv_gap_hint:"Tap a free spot on the wall: what fits there appears here.",wv_kit_title:"Onto the wall",wv_recent:"Recently used",wv_none_fits:"Nothing fits into this gap.",wv_cat_base:"Base cabinets & boards",wv_cat_hang:"Hanging",wv_cat_tall:"Tall cabinets",wv_cat_living:"Seating & beds",wv_cat_light:"Lights",wv_cat_pack:"From your packs",wv_cat_energy:"Energy",block_title:"Furniture block",multi_title:"{n} items selected",block_hint:"A click selects the whole block, dragging moves it. One part on its own: double-tap it or pick its name below.",multi_hint:"Shift + click adds or removes items, Shift + drag over empty ground draws a frame. Move, turn or copy them together, or join them into a block.",block_part_edit:"Edit only this part",block_break:"Break up block",block_make:"Join into a block",multi_mode:"Select several (a tap adds, a drag draws a frame)",block_part:"Part of a block.",block_select:"Select the whole block",block_delete:"Delete {n} items?",block_delete_fixed:"Delete {n} items? Some of them are fixed.",delete:"Delete",new_room:"Room {n}",settings:"Settings",pendant_shape:"Shape",pendant_shade:"Shade",pendant_globe:"Globe",pendant_cone:"Cone",pendant_drum:"Drum",pkg_open:"Furnish \u2026",pkg_hint:"Furniture goes against the room's walls; lamps link to the area's lights. Adjust single items afterwards \u2013 Ctrl+Z takes it all back.",pkg_done:"{n} items placed \u2013 Ctrl+Z takes it back.",pkg_kitchen_row:"Kitchen row",pkg_kitchen_row_desc:"Row on the back wall with fridge, oven, sink, dishwasher and stove, wall cabinet, dining table with pendant",pkg_kitchen_l:"L-shaped kitchen",pkg_kitchen_l_desc:"Rows at the back and left, kitchen island with bar stools",pkg_bath:"Bathroom",pkg_bath_desc:"Washbasin, WC, bathtub, washing machine, downlight",pkg_bedroom:"Bedroom",pkg_bedroom_desc:"Double bed with two nightstands, wardrobe, chest of drawers, ceiling light",pkg_living:"Living room",pkg_living_desc:"TV board, sofa, coffee table, rug, armchair, shelf, floor lamp, plant",pkg_dining:"Dining room",pkg_dining_desc:"Table with four chairs, sideboard, pendant",pkg_office:"Office",pkg_office_desc:"Desk with office chair, two shelves, ceiling light",pkg_kids:"Kids' room",pkg_kids_desc:"Single bed, desk, shelf, rug",pkg_hall:"Hall",pkg_hall_desc:"Coat rack, two downlights",spots_place:"Place spots",spots_type:"Lamp",spots_cols:"Columns (left\u2013right)",spots_rows:"Rows (front\u2013back)",spots_add:"Place {n} lamps",spots_placed:"{n} lamps placed.",spots_hint:"All lamps follow the chosen light (e.g. spots on one dimmer). Afterwards each can be moved and linked to another light like any furniture.",cancel:"Cancel",backup:"Backup",backup_history:"Restore points",backup_none:"None yet. While editing, a restore point is kept at most every 10 minutes.",backup_summary:"{rooms} rooms, {furniture} items",backup_restore:"Restore",backup_restore_confirm:"Restore the state of {time}? The current state is kept as a restore point.",backup_restored:"Restored.",backup_file:"File",backup_export:"Export",backup_export_share:"Share as template",backup_export_share_hint:"Without areas, devices, sensors and images \u2013 for passing on to others.",backup_import:"Import \u2026",backup_import_confirm:"Replace the whole plan with the file? The current state is kept as a restore point.",backup_import_error:"The file is no NeonPlan 3D plan ({error}).",backup_imported:"Imported.",backup_hint:"Background images are not part of the file.",backup_other_hint:"A floor plan from Sweet Home 3D, an iPhone scan, CAD (DXF), Blender/SketchUp or a robot vacuum map?",backup_other:"To the import page",backup_full:"Full backup",backup_full_export:"Back up everything (plan, pictures, packs)",backup_full_import:"Restore a full backup \u2026",backup_full_hint:"One file with the plan, every background and screen picture and the installed packs. On restore every pack is checked again; the licence key is not included.",backup_full_confirm:"Replace the plan, the pictures and the packs with the backup? The current state stays as a restore point.",backup_full_not_backup:"This is not a full NeonPlan 3D backup.",backup_full_restored:"Backup restored: {packs} packs, {pictures} pictures.",backup_full_skipped:"Skipped (not verifiable or bound to another installation): {packs}.",export_name_full:"full",device_confirm:"Ask before switching",device_confirm_hint:"A tap in 3D, the quick menu and the room panel ask first. A double tap on the room leaves this device out.",cover_confirm_hint:"Open, close and positions ask first in the quick menu and the room panel, and a swipe on the marker no longer moves the blind (it turns the view instead). Stop never asks.",confirm_switch:"Really switch {name}?",split_handle_hint:"Drag: width of the plan and the 3D view",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_rotation:"Rotation (\xB0)",background_edit:"Move, scale and turn",background_edit_done:"Done",background_edit_hint:"While the mode is on: dragging the picture moves it, the handle at the bottom right scales it. Fit the picture to the scale first, then turn it.",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 arrow keys nudge \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_empty:"Add a floor first.",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"NeonPlan 3D",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_busy_camera:"camera",stats_busy_floors:"floors",stats_busy_openings:"doors/windows",stats_busy_flash:"flash",stats_busy_roof:"roof",stats_busy_flow:"power flow",stats_busy_effect:"colour effect",stats_busy_robot:"robot",stats_busy_orbit:"camera turn",stats_busy_tint:"room tint",stats_busy_solar:"solar modules",stats_busy_sound:"music",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",roof_keep:"Roof stays",roof_keep_hint:"The roof stays on the house while zooming in instead of lifting and fading out",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all_n:"Place all {n} \u2026",devices_place_all_confirm:"Put {n} devices into the room at once? (Ctrl+Z or \u201CUndo\u201D takes them all back in one step.)",devices_src_area:"This area",devices_src_other:"Other areas",devices_src_none:"No area",panel_hide:"Hide from the room panel",panel_unhide:"Show in the room panel again",panel_state_hide:'Hide the state in the room panel (e.g. a cover that only reports "unknown")',panel_state_show:"Show the state in the room panel again",devices_place:"Place",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_cameras:"Cameras",camera_live:"Open live view",through_camera:"Look through the camera",through_blend:"Blend",through_back:"Back to the view",camera_mount:"Mount",camera_mount_wall:"Wall (looks along its rotation)",camera_mount_ceiling:"Ceiling (dome, all round)",camera_fov:"Field of view (\xB0)",camera_reach:"Reach (m)",camera_fov_short:"Angle \xB0",camera_reach_short:"Reach m",camera_tilt:"Tilt down (\xB0)",camera_tilt_short:"Tilt \xB0",camera_aim_hint:"In the plan the wedge shows where the camera looks. The handle at its tip turns the camera and sets its reach. In 3D the wedge ends at the first wall.",camera_detect_found:"Detection (camera cockpit): {n} sensors found on the device \u2013 {kinds}. When one reports something, a pin stands in front of the camera in the 3D view; the camera wall (Cameras switch at the bottom of the 3D view) shows every live picture.",camera_detect_none:"Detection (camera cockpit): the camera's device has no motion or detection sensors. Pins appear as soon as the integration provides some (Frigate, UniFi Protect, Reolink \u2026).",camera_cone:"Show the field of view in 3D",camera_detect_pins:"Show detection symbols (person, car, animal)",camera_detect_pins_hint:"Off: a detection shows no symbols over the camera, only the field of view turns red \u2013 calmer on a wall tablet.",state_recording:"Recording",state_streaming:"Streaming",panel_all_off:"All off",panel_all_on:"All on",view_options:"View: quality, look, markers, FPS",panel_all_open:"All up",panel_all_close:"All down",central:"Central: all lights, blinds and favourites",central_house:"Whole house",central_lights:"Lights",central_covers:"Blinds",central_on:"On",central_off:"Off",central_open:"Up",central_close:"Down",central_sure:"Sure?",central_favorites:"Favourites",central_no_favorites:'No favourites yet. Set scenes, scripts and switches in the editor under "Favourites".',card_central:"Star with the central menu",card_central_hint:"All lights and blinds of the floor or the house and the favourites from the editor.",favorites:"Favourites",favorites_hint:"Scenes, scripts, automations, buttons and switches for the central menu (star) of the 3D view \u2013 party, presence simulation, shading, watering.",favorites_add:"Add a favourite",background_handles_hint:'The picture now has handles like a piece of furniture: drag moves it, the lower right corner scales it, the round handle on top turns it (Shift for 15\xB0 steps). When it fits, tap "Done" \u2013 then it stays put.',background_fixed_hint:'The picture stays put, you can draw over it. To adjust it, tap "Move, scale and turn".',bg_level:"Straighten",bg_level_cancel:"Cancel straightening",bg_level_first:"Tap the start of a wall in the picture that should run straight (horizontal or vertical).",bg_level_second:"Now tap the end of that wall \u2013 the picture turns to fit.",bg_ruler:"Scale with a ruler",bg_ruler_cancel:"Cancel the ruler",bg_ruler_first:"Tap the start of a stretch of known length in the picture \u2013 e.g. a dimensioned wall.",bg_ruler_second:"Now tap the end of the stretch.",bg_ruler_length_hint:"Measured in the plan: {m}. Enter the real length and the picture is scaled to fit.",bg_ruler_length:"Real length (m)",bg_ruler_apply:"Apply the scale",thumbs_fold:"Fold the floor pictures into buttons",thumbs_show:"Show the floor pictures again",room_start_view:"View as this room's start",room_start_view_hint:"When you tap the room in 3D, the camera flies to exactly the view the 3D pane on the right shows now \u2013 angle, zoom and framing. Turn on 3D beside first, turn and zoom in on the room, then tap.",room_start_view_reset:"Remove the room's start view (from above again)",room_start_view_need_pane:'Turn on "3D beside" first, then turn and zoom the room the way it should open.',floor_start_view:"View as this floor's start",floor_start_view_hint:"This floor opens in 3D the way the 3D pane on the right stands right now \u2013 e.g. the ground floor from the front and the upper floor from the back. Turn on 3D beside first, turn it, then tap.",floor_start_view_reset:"Remove the floor's start view (like the house again)",floor_start_view_need_pane:'Turn on "3D beside" first and turn the floor the way it should open.',glow_scale:"Glow in 3D (%)",glow_scale_hint:"How strongly the lamp glows in 3D: below 100 % tones down bright LED strips so the room does not burn out; above 100 % makes a weak lamp glow more. Switches nothing in Home Assistant.",vehicle_to_spot:"Turn into a parking spot",vehicle_to_spot_hint:"A vehicle as plain furniture always stands there. As a parking spot it appears only while a sensor reports the car, and that is where Car Pro is set up (charge, range, lock, climate).",as_furniture:"Show as furniture",as_furniture_hint:"Replaces the pin by a furniture item in the same place, linked to this device \u2013 a speaker for a media player, a lamp for a light. Ctrl+Z takes it back.",as_furniture_pick:"Pick furniture \u2026",as_device:"Back to a device pin",as_device_hint:"Replaces the furniture by the plain pin of its device in the same place.",presets:"Stations and playlists (Sound & Cinema)",presets_hint:`Shown in every speaker's quick menu under "Play", next to the player's sources. For an Echo (Alexa Media Player): type SPOTIFY, AMAZON_MUSIC or TUNEIN and as content what you would say ("Rock Antenne"). For Sonos, Music Assistant and others: type music or url with a stream address or a URI.`,preset_type:"Type",preset_type_hint:"media_content_type of play_media, e.g. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Content",preset_content_hint:"media_content_id: stream URL, URI (spotify:playlist:\u2026) or, for Alexa, a search phrase",preset_add:"Station or playlist",media_play_head:"Play",own_buttons:"Own buttons",own_buttons_hint:"Shown in the central menu (star) below the favourites: open a dashboard path, show an entity's details, call a service, or open a browser_mod popup with your own card.",own_button_label:"Label",own_button_action:"Action",own_button_new:"New button",own_button_add:"Own button",own_action_navigate:"Open a path",own_action_more_info:"Entity details",own_action_service:"Call a service",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Path",own_target_more_info:"Entity",own_target_service:"Service (domain.service)",own_data:"Data (JSON)",own_data_hint:`For a service its data, for fire-dom-event the event's content, e.g. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.`,own_data_bad:"Not a valid JSON object.",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"No devices of this room are in the plan. In the editor, place devices or pick them for the room panel with \u2606.",close:"Close",wall_view:"Wall view",walk_start:"Walk through the house",walk_title:"Walk",walk_end:"End",walk_hint:"Drag: look around \xB7 tap the floor: walk there \xB7 W A S D / arrow keys or the stick: walk \xB7 Esc: end",card_next:"next step \u2026",card_step_hole:"Through a hole",card_step_fit:"Put in",card_step_end:"Or to its end",card_lay:"Lay it",card_hole_out:"outwards",card_hole_in:"inwards",card_to:"Connect to",card_through:"Through (in order, if needed)",card_group_pool:"At the pool",card_group_tech:"Equipment",card_group_joints:"T- and Y-pieces",card_group_holes:"Holes",card_open:"Connections",card_open_other:"Open this part's card",card_port:"Connection",card_via:"through",card_reroute:"Lay anew",card_disconnect:"Disconnect",card_with:"connect to \u2026",card_connect:"Connect",card_connect_with:"Connect to \u2026",card_status:"{a} of {b} connected",card_show_plan:"Show in the plan",card_show_wall:"Show in the wall view",joint_name:"Name (say hole skimmer)",conn_hole_out:"{name}: from inside out",conn_hole_in:"{name}: from outside in",hint_joint_place:"T- or Y-piece: tap the plan \u2013 tapped on a pipe, it is put into the pipe",port_suction:"suction side",port_pressure:"pressure side",port_pump:"from the pump",port_return:"return",port_waste:"waste",port_in:"in",port_out:"out",port_out1:"out 1",port_out2:"out 2",port_inside:"inside",port_outside:"outside",port_used:"in use",joint_tee:"T-piece {n}",joint_y:"Y-piece {n}",joint_wall:"Hole {n} (wall)",joint_floor:"Hole {n} (floor)",joint_add_tee:"T-piece",joint_add_y:"Y-piece",wall_kit_hole_wall:"Hole in the wall",wall_kit_hole_floor:"Hole in the floor",wall_kit_tee:"T-piece",wall_kit_y:"Y-piece",wall_run_place:"Tap the wall where it goes",valve_top6:"Six-way valve on top",valve_side6:"Six-way valve at the side",valve_four:"Four-way valve",pool_valve_type:"Multiport valve",pool_loose_end:"open end",pool_holes_hint:"Holes in walls and the floor are set in the wall view (side bar).",conn_add:"Add a pipe",conn_from:"From",conn_via:"Through (in order)",conn_add_via:"+ hole, ball valve, sight glass \u2026",conn_to:"To",conn_and:"And to (a second end, with a T-piece before)",conn_choose:"choose \u2026",conn_create:"Lay it",conn_hint:"The way is laid by itself \u2013 inside from connection to connection, outside at right angles under the ground. Fine-tune it in the wall view and the plan.",wall_kit_pool:"Pool equipment",wall_kit_energy:"Energy",wall_run_add:"+ Pipe",wall_run_start:"Pipe: start at a device, on a pipe (T-piece) or on the wall",wall_run_next:"Set more points \u2013 it ends at a device or on a pipe; double click or Enter finishes",wall_run_down:"\u2193 Into the floor",wall_run_through:"\u27C2 Through the wall",wall_run_done:"Done",wall_run_fit:"Tap the pipe where it goes",wall_run_valve:"Ball valve",wall_run_sight:"Sight glass",wall_run_pipe:"Pipe",wall_run_pt:"Height of the point (m)",wall_run_more:"Draw on",wall_run_tip:"Drag points \xB7 double click removes \xB7 tap a ball valve: open/closed",wall_view_turn:"Turn by 45\xB0 \u2013 at the wall it moves back into the room",wall_view_fixed:"Fixed \u2013 release it to drag",wall_view_3d:"3D in the room",wall_view_lift:"Drag up or down: height above the floor",wall_zoom_hint:"Zoom: mouse wheel or two fingers",wall_zoom_all:"Whole wall",wall_view_hint_3d:"Tap a piece and drag it on the floor \xB7 mouse wheel or two fingers: closer or further away \xB7 middle or right mouse button (two fingers on a tablet): look around \xB7 type distances and height below \xB7 arrows left and right: to the next wall",wall_view_front:"Wall from the front",wall_view_depth:"Distance from the wall (m)",wall_view_room:"See this room's walls from the front",hint_wall_pick:"Wall view: click into the room (or near a wall)",wall_view_open:"See the wall from the front: move the furniture on it along the wall and up or down",wall_view_hint:"Drag to move along the wall and \u2013 for hanging pieces \u2013 up or down \xB7 arrow keys 1 cm, with Shift 10 cm \xB7 edges snap to the wall's ends, doors, windows and other furniture (Alt: free) \xB7 double-click opens the piece in the plan",wall_view_empty:"Nothing at this wall yet \u2013 furniture standing with its back to the wall or hanging on it shows here.",wall_view_left:"Distance from the left (m)",wall_view_floor:"stands on the floor",wall_view_form:"Edit in the plan",wall_prev:"Previous wall",wall_next:"Next wall",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_tilt:"Slats",cover_tilt_open:"Slats open",cover_tilt_close:"Slats closed",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",tool_opening:"Doors & windows",tool_furniture:"Furniture",qm_off:"Off",find:"Search",find_placeholder:"Where is \u2026? Device or room",find_none:"Nothing found",swipe_off:"Off",panel_pin:"Show in the room panel",panel_unpin:"Don't show in the room panel",devices_panel_hint:"The room panel shows the devices in the plan. \u2606 adds a device to the room panel without placing it.",card_section_view:"View",card_size:"Size",card_size_fixed:"Fixed height",card_size_fill:"Fill the screen",card_fill_hint:"Works best in a dashboard view of the type \u201CPanel (single card)\u201D \u2013 the card then takes all the space.",card_controls:"Switches in the card",card_floor_thumbs:"Floors as miniatures",card_floor_thumbs_hint:"Small pictures of the floors at the side \u2013 tap one to switch",card_floor_thumbs_hint_start:"The chosen floor is then where the card starts \u2013 the pictures at the side switch to the others",card_room_names:"Show room names",card_section_kiosk:"Wall tablet (kiosk)",card_section_features:"Features",card_weather_plan:"as set in the plan",card_pro_hint:"Motion trail and weather are Pro add-ons: without the matching add-on these switches have no effect.",card_idle_return:"Back to the start view after",card_idle_off:"Never",card_idle_min:"{n} min without a touch",card_idle_hint:"After the wait the card closes the room and shows the start view again.",card_night:"Night dimming",card_night_off:"Off",card_night_sun:"By the sun",card_night_time:"Time range",card_night_range:"Time range (e.g. 22:00-06:00)",card_idle_orbit:"Camera turn as screensaver",card_idle_orbit_hint:"After the return the view turns slowly until someone touches the tablet",card_dashboard:"Button to a dashboard (path)",card_dashboard_label:"Label of the button",card_dashboard_hint:"A button at the top right of the card opens the dashboard or view with this path, e.g. /lovelace/home or /dashboard-house/0. Without a label it shows \u2302.",card_alerts:"Show warnings",card_alerts_hint:"Smoke, gas, CO, water, alarm panel and windows open in the rain: the room pulses, a note appears at the top",card_alert_jump:"Jump to the room of a new warning",card_alert_jump_hint:"The view switches to the floor and room of the warning by itself",card_scenes:"Scene buttons in the room",card_scenes_hint:"Scenes and scripts of the area as buttons under the 3D view while a room is selected",card_motion_trail:"Motion trail",card_camera_wall:'"Cameras" button (camera wall)',card_camera_wall_hint:"A button at the bottom of the card opens the camera wall with every live picture (Pro: camera cockpit).",card_motion_trail_hint:"Where motion was reported in the last 30 minutes, with times (motion, presence and camera sensors)",trail_short:"Trail",cameras_short:"Cameras",camera_wall_title:"Camera wall",camera_wall_hint:"Camera wall: every live picture at once; a tap shows one picture big, a red frame shows motion",camera_wall_all:"All cameras",camera_still:"still, refreshed every {s} s",camera_wall_big:"Show the picture big",detect_person:"Person",detect_car:"Vehicle",detect_pet:"Animal",detect_motion:"Motion",weather_short:"Weather",weather_entity:"Weather entity",weather_effects:"Weather effects in 3D",rain_warning:"Warning: window open while it rains",rain_entity:"Rain from your own weather station",rain_entity_hint:"A rain sensor (on = rain) or a rain rate (mm/h) of your weather station says whether it rains at the house \u2013 for the rain warning and the rain in 3D. Without one the weather entity decides.",rain_ignore:"No rain warning",rain_ignore_hint:"This window may stay open in the rain (under a canopy, say): no rain warning for this window, all others still warn.",outage_entity:"Report a power outage with",outage_entity_hint:'An entity that reports a power outage: a grid sensor (binary_sensor of class power \u2013 "off" means no power), a UPS ("on battery"), a mains voltage below 100 V or a helper of your own that is "on" during an outage. A warning then shows, and the grid connection is crossed out.',sun_patches:"Sunlight through the windows",sun_patches_hint:"With north set, the sunlight from sun.sun falls through the windows as bright patches on the floor. Untick it to keep the floor free of sun patches.",weather_effect_rain:"Rain",weather_effect_snow:"Snow",weather_effect_fog:"Fog (greys the scene)",weather_effect_clouds:"Clouds dim the sky and the sun",weather_effect_lightning:"Lightning in storms",weather_effect_sky:"Sun and moon in the sky",weather_entity_hint:"The weather entity provides rain, snow, fog and clouds for the 3D view; automatic takes the first one.",weather_hint:"Weather outside: rain, snow, fog and clouds from the weather entity, sun and moon from sun.sun",card_weather:"Weather outside",card_weather_hint:"Rain, snow, fog and clouds from the first weather entity (weather_entity picks another); only the clouds on the tablet level",trail_hint:"Motion trail: where motion was reported in the last 30 minutes, with times",alerts:"Warnings",alert_smoke:"Smoke: {name}",alert_gas:"Gas: {name}",alert_co:"Carbon monoxide: {name}",alert_water:"Water: {name}",alert_alarm:"Alarm triggered",alert_alarm_pending:"Alarm pending",alert_window_rain:"Window open in the rain: {name}",alert_power_outage:"Power outage: {name}",alert_names:"Show device names in warnings",alert_names_hint:'On: "Kitchen \xB7 Smoke: Kitchen smoke detector". Off: just "Kitchen \xB7 Smoke" \u2013 shorter on a wall tablet. Without a room the device name stays.',alert_short_smoke:"Smoke",alert_short_gas:"Gas",alert_short_co:"Carbon monoxide",alert_short_water:"Water",alert_short_alarm:"Alarm triggered",alert_short_alarm_pending:"Alarm about to trigger",alert_short_window_rain:"Window open in the rain",alert_short_power_outage:"Power outage",power_outage:"Power outage",room_names_short:"Room names",floor_stack_short_dim:"Dimmed",floor_stack_short_stacked:"Stacked",floor_stack_short_single:"Alone",size_short_w:"W",size_short_d:"D",size_short_h:"H",import_error_not_json:"The file is no JSON.",import_error_not_plan:"The file is no NeonPlan 3D plan.",export_name_template:"template",export_name_backup:"backup",card_floor_stack:"Floors below",floor_stack_dim:"Dimmed",floor_stack_stacked:"Stacked (the house up to here)",floor_stack_single:"Hidden (only this floor)",card_control_walls:"Tall walls/cut",card_control_floors:"Floors apart",card_control_temperature:"Temperature",card_control_humidity:"Humidity",card_control_co2:"CO\u2082",card_controls_hint:"Tall walls/cut, floors apart and temperature, humidity, CO\u2082 to switch",controls_hide:"Hide the controls \u2013 only the 3D view remains",nav_wrap:"Wrap the bar: every floor and room on several lines",nav_row:"Bar in one line (scrolls sideways)",controls_show:"Show the controls again",card_controls_hidden:"Start with the controls hidden",card_pets:"Show the pets",card_ghost:"Show the Halloween ghost",card_ghost_hint:"Fun pack Halloween: the ghost floats through this card's house too (e.g. switch it off on the wall tablet)",card_pets_hint:"Fun pack Pets: show the animals set up in this card (e.g. switch them off on the wall tablet)",news_pets_title:"New: pets \u2013 a present for you",news_pets_text:"A cat, a dog or a rabbit lives in your 3D house, walks through the rooms, lies down on the sofa and even takes the stairs \u2013 and fish swim in the aquarium. The fun pack is free with every customer account.",news_to_shop:"To the shop",news_later:"Later",news_never:"Don't show again",gift_title:"\u{1F381} Two presents for you: Halloween and pets",gift_text:"The fun packs Halloween (pumpkins, bats, a witch's cauldron and a ghost that floats through the house) and Pets (a cat, a dog and a rabbit walking through your house) are free in your customer account. Install them with one click under Extensions.",gift_install:"To the extensions",gift_title_free:"\u{1F381} Free: Halloween and pets",gift_text_free:"Pumpkins, bats and a ghost that floats through the house \u2013 plus a cat, a dog and a rabbit living in your 3D house. Both fun packs are free with a customer account: create the account, confirm your e-mail, paste the key from the mail under Extensions \u2192 Shop connection. New packs then show up right here.",gift_register:"Create a free account",card_controls_hidden_hint:"Only the 3D view; an eye at the bottom left brings bars, values and switches back",card_controls_hide_after:"Hide the controls after",card_hide_after_s:"{n} s without a touch",card_fullscreen_button:"Full screen button",card_fullscreen_button_hint:"Hides the dashboard around the card (e.g. on a wall tablet)",fullscreen:"Full screen",fullscreen_exit:"Exit full screen",card_section_show:"Show",card_floor:"Floor",card_floor_house:"Whole house (tap a floor to open it)",card_height:"Height (pixels)",card_walls:"Walls",card_quality_hint:"\u201CTablet\u201D is the lightest setting \u2013 ideal for Fire tablets and other wall tablets.",card_flows_switch:"Switch in the card",card_flows_on:"Always on",card_flows_off:"Always off",holos:"Holograms",holos_hint:"Show or hide the holograms of the plant and the devices",card_energy:"Show energy values at the top (Energy Pro)",card_room_panel:"Room details on tap",card_room_panel_hint:"The room's lights, blinds and cameras in a side panel",card_explode:"Pull floors apart in the house view",card_roof_fade:"Fade the roof out while zooming in",card_roof_fade_hint:"Off: the roof stays on the house even when the camera comes close.",card_stats:"Performance display (frames per second)",card_stats_hint:"To check how smoothly the card runs on the device",packs:"Furniture packs",ext_show_list:"Show the list",ext_hide_list:"Fold the list",ext_sum_installed:"installed",ext_sum_updates:"updates",ext_sum_missing:"not installed yet",ext_sum_all:"Install/update all {n}",ext_sum_packs:"furniture packs ({items} items)",ext_sum_feature_packs:"add-ons",packs_hint:"Only packs signed by the publisher can be imported.",lib_badge_light:"Lamp: links to a light and switches in 3D",lib_badge_electric:"Electric: links to an entity and a power sensor (switching, pictures, consumption)",lib_badge_hint:"Items with a symbol link to entities: lamps switch, screens show pictures, appliances show their consumption.",pack_error_wrong_instance:"This pack is signed for another Home Assistant installation. The shop account can deliver it for this one.",license_title:"Shop connection",license_instance:"Installation id",license_copy:"Copy",license_copied:"Id copied",license_activate:"Activate",license_activated:"Connected \u2013 your packs are listed below.",license_active:"Connected as {name} (key {key})",license_checked:"last checked {time}",license_refresh:"Check now",license_refreshed:"Checked.",license_remove:"Disconnect",license_remove_confirm:"Disconnect from the shop? Installed packs stay, only updates stop coming by themselves.",license_installed:"installed \xB7 v{release}",license_update_available:"update to v{release} available",license_not_installed:"not installed yet",license_install:"Install",license_update:"Update",license_none:"No packs in the account yet.",license_hint:"The licence key is in your order and in your account at mastershort.de. Entered once, bought packs appear here, are signed for this installation and update by themselves (checked once a day). Everything installed keeps working without the connection.",license_shop:"More packs in the shop",license_error_invalid_key:"The shop does not know this key. It looks like NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"This key is already bound to the allowed number of installations.",license_error_shop_unreachable:"The shop cannot be reached right now. Installed packs keep working.",license_error_not_owned:"This pack is not in this account.",license_error_no_key:"Enter the licence key first.",license_error_wrong_instance:"The shop signed the pack for another installation.",license_error_rate_limit:"The shop is busy right now. Please try again in a minute.",license_error_other:"That did not work: {detail}",pack_import:"Import furniture packs \u2026",pack_imported:"Imported \u201C{name}\u201D by {publisher} \u2013 {n} items",packs_imported_n:"{n} of {total} packs imported",pack_by:"by {publisher} \xB7 {n} items",pack_features:"by {publisher} \xB7 Pro features: {n}",pack_needs_update:"This add-on needs a newer NeonPlan version \u2013 please update NeonPlan 3D (HACS) and reload the page.",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Camera cockpit: look through the camera, motion trail, camera wall and detection pins (person, vehicle, animal)",pro_name_camera_cockpit:"Camera cockpit",pro_name_weather:"Weather outside",pro_name_screens:"Live screens",pro_name_energy_pro:"Energy Pro",ext_tab:"Extensions",offers_title:"New in the shop",offers_new:"NEW",offers_loyalty:"Your loyalty discount: {percent} % on every further pack and Pro add-on",offers_kind_pack:"Furniture pack",offers_kind_pro:"Pro add-on",offers_kind_bundle:"Bundle",offers_kind_fun:"Fun pack \xB7 free for customers",offers_dot:"New in the shop",ext_badge_new:"{n} new",ext_badge_ready:"{n} ready",ext_badge_ready_hint:"Packs to install or update \u2013 one click under Extensions",pack_updated:"{name} was updated to release {release}.",pack_updated_added:"{name} was updated to release {release}: {n} new items \u2013 have a look in the library!",ext_title:"Extensions",ext_intro:"Furniture packs and Pro add-ons for NeonPlan 3D. Install what you bought here with your licence key; it updates by itself and works without the connection too.",ext_shop:"Open the shop",ext_pro:"Pro add-ons",fun_title:"Fun packs",fun_intro:"Free extras just for fun \u2013 for everyone with a customer account. With a connected key they wait among your packs above to install; switch them on and off here.",fun_in_account:"Free in your customer account \u2013 install it among your packs above.",fun_register:"\u{1F381} Create a free customer account",fun_register_steps:"Free with a customer account: create the account, confirm your e-mail, paste the key from the mail under Shop connection.",fun_name_pets:"Pets",fun_feature_pets:"A cat, a dog or a rabbit lives in your 3D house: it walks through the rooms, lies down on the sofa, the bed or the rug and sleeps at night.",fun_name_halloween:"Halloween",fun_feature_halloween:"Pumpkins that glow with a light, a cobweb, bats, gravestones, a skeleton, a witch's cauldron and candles \u2013 and a ghost that floats through the house now and then.",halloween_ghost:"Let the ghost float",halloween_deco_hint:`The decorations are in the editor's furniture library under "Fun pack: Halloween". Pumpkin, cauldron and candles glow with a linked light.`,pets_show:"Show the pets",pet_add:"Add a pet",pet_name:"Name",pet_kind:"Animal",pet_kind_cat:"\u{1F431} Cat",pet_kind_dog:"\u{1F436} Dog",pet_kind_rabbit:"\u{1F430} Rabbit",pet_fur:"Fur",pet_fur_orange:"Ginger",pet_fur_tabby:"Tabby",pet_fur_black:"Black",pet_fur_white:"White",pet_fur_grey:"Grey",pet_fur_brown:"Brown",pet_fur_calico:"Calico",pet_fur_golden:"Golden",pet_fur_cream:"Cream",pet_breed:"Breed",pet_breed_dachshund:"Dachshund",pet_breed_pug:"Pug",pet_breed_terrier:"Terrier",pet_breed_labrador:"Labrador",pet_breed_shepherd:"Shepherd",pet_floor:"Floor",pet_floor_auto:"Ground floor",ext_active:"active",ext_get:"See in the shop",supporter_title:"Supporter \xB7 Discord",supporter_intro:"Thank you for supporting NeonPlan 3D! This code unlocks the \u{1F499} Supporter role on Discord \u2013 you then see the channel #beta-feedback and test new add-ons first.",supporter_open:"Open Discord",supporter_how:"How: open Discord, type /supporter {code} in any channel and send it. The role comes right away.",beta_yours:"Beta \xB7 yours as a supporter",beta_supporters:"Beta \xB7 supporters first",beta_yours_hint:"Because you are a supporter, you can try this add-on early. Tell us on Discord (channel #beta-feedback) what works and what doesn't.",beta_supporters_hint:"This add-on is still in beta and comes with the Supporter Pass first. Once it is finished, everyone can get it in the shop.",beta_feedback:"Feedback on Discord",beta_become:"Become a supporter",beta_bar:"Beta \u2013 as a supporter you test this first. Feedback welcome on Discord (#beta-feedback).",ext_open:"Open extensions",manual:"Manual",manual_more:"Learn more",ext_teaser_title:"More furniture and Pro features",ext_teaser_text:'Furniture packs, the shop connection and Pro add-ons are under "Extensions" at the top.',pro_feature_weather:"Weather outside: rain, snow, clouds, sun and moon",pro_feature_screens:"Live screens: the media player's app colour and artwork, picture rules, camera live pictures on screens",pro_feature_energy_pro:"Energy Pro: power-flow lines through the house, living solar modules, glass holograms for the plant and for devices, today's gas and water use \u2013 heat follows as an update",pro_name_sound:"Sound & Cinema",pro_feature_sound:"Sound & Cinema: speakers show cover, title and volume as a glass card, sound rings around playing speakers, multiroom groups as lines, a quick menu with play, pause, track change and volume",pro_name_auto_pro:"Car Pro",pro_feature_auto_pro:'Car Pro: the car in its parking spot shows charge, range, charging, lock and climate from its integration \u2013 a light band in the charge colour, a pin with percent and kilometres, a quick menu with lock, climate and charging, "away" with its location',pro_name_time_travel:"Time travel",pro_name_pool:"Pool Pro",pro_feature_pool:"Pool Pro: the water glows in the colour of the pool light and moves while the filter pump runs; a glass card shows water temperature, heat pump with target temperature, filter pump, light, pH and chlorine/redox with a traffic light; the cover slides over the water; warnings for pH, chlorine and frost",pool_teaser:"With Pool Pro your pool comes alive: the water glows in the colour of the pool light and moves while the filter pump runs. A glass card shows water temperature, heat pump, pH and chlorine \u2013 with buttons for target temperature, pump, light and cover.",pool_pro_hint:'Empty fields are found by name (an entity with "pool" in its name), "None" switches a role off. The heat pump may be a climate or water heater entity (then the target temperature can be set) or a switch; the filter pump a switch or a power sensor.',pool_activate:"Turn on Pool Pro for this pool",pool_temperature:"Water temperature",pool_heater:"Heat pump / heater",pool_pump:"Filter pump",pool_light:"Pool light",pool_ph:"pH value",pool_chlorine_role:"Chlorine / redox",pool_chlorine:"Chlorine",pool_orp:"Redox",pool_cover:"Cover",pool_cover_open:"open",pool_cover_closed:"closed",pool_cover_closed_part:"closed",pool_cover_open_btn:"Open the cover",pool_cover_close_btn:"Close the cover",pool_cover_stop:"Stop the cover",pool_heating:"heating",pool_pump_on:"pump running",pool_heater_on:"Heat pump on",pool_heater_off:"Heat pump off",pool_colder:"Colder",pool_warmer:"Warmer",pool_shape:"Shape",pool_shape_rect:"Rectangular",pool_shape_round:"Round",pool_shape_oval:"Oval",pool_diameter:"Diameter (m)",pool_shape_free:"Free",tool_pool:"Pool",hint_pool:"Choose a shape and draw the pool \xB7 tap a pool to select it",hint_pool_tech:"Choose a shape and draw the pool \xB7 tap a pool to select it \xB7 ports, devices and pipes on the right",hint_pipe_start:"Pipe: tap the start (port or device)",hint_pipe_pool:"Pipe: first tap the pool the pipes belong to",hint_pipe_next:"Tap corners, then the end (port or device) \xB7 Esc cancels",pool_tool_empty:"No pool on this floor yet: choose the shape above and draw the pool.",pool_choose:"Which pool?",pool_ports:"Ports",pool_ports_hint:"Skimmer and inlets sit on the rim, the bottom drain in the pool; the waste drain takes the backwash water. Move them in the plan.",pool_port_skimmer:"Skimmer",pool_port_drain:"Bottom drain",pool_port_inlet:"Inlet",pool_port_waste:"Waste drain",pool_devices:"Equipment",furn_pool_pump:"Filter pump",furn_pool_filter:"Sand filter",furn_pool_heat_pump:"Heat pump",furn_pool_dosing:"Dosing unit",furn_pool_valve:"Ball valve",pool_valve_position:"Six-way valve position",valve_filter:"Filter",valve_backwash:"Backwash",valve_rinse:"Rinse",valve_waste:"Waste",valve_recirculate:"Recirculate",valve_closed:"Closed",pool_valve_open:"open",pool_pipes:"Pipes",pool_pipe_draw:"Draw a pipe",pool_pipe_draw_hint:"Pipes connect ports and devices in the flow direction: from the skimmer to the pump, on to the filter, through the heat pump or the bypass to the inlets. At a split the water goes through the heat pump while it is on, else through the bypass; a closed ball valve stops it. Tap a ball valve in the plan to open or close it.",pool_pipe_height:"Height above the floor (m)",pool_pipe_reverse:"Reverse the flow direction",pool_pipes_pro:"With Pool Pro the water flows visibly through the pipes \u2013 blue, warm after the heat pump.",pool_above:"Above-ground pool (stands on the ground)",pool_above_hint:"A pool standing on the ground instead of let into it: a wall all around, the water just below the rim.",pool_height:"Pool height",alert_pool_ph:"Pool: pH {name}",alert_pool_chlorine:"Pool: chlorine/redox {name}",alert_pool_frost:"Pool: risk of frost ({name})",pro_feature_time_travel:"Time travel: a time slider replays up to 7 days in the house \u2013 lights, doors, windows, blinds, motion, heating, weather and the sun, with event markers. View only, nothing is switched",tt_chip:"Time travel",tt_hint:"Replay up to 7 days in the house (view only, nothing is switched)",tt_badge:"TIME TRAVEL",tt_live:"Live",tt_live_hint:"Back to the present",tt_play:"Play",tt_pause:"Pause",tt_prev:"Previous event",tt_next:"Next event",tt_speed:"Speed: 1 hour in {s}",tt_now:"now",tt_ago:"{d} ago",tt_since:"since {time}",tt_loading:"Loading history \u2026",tt_error:"History not loaded: {error}",tt_retry:"Retry",tt_no_recorder:"Without Home Assistant's recorder there is no history.",tt_restart:"Please restart Home Assistant \u2013 only then does it know time travel.",tt_locked:"Time travel is a Pro add-on.",tt_readonly:"Time travel: view only \u2013 nothing is switched",tt_ev_door:"{name} opened",tt_ev_garage:"{name} opened",tt_ev_lock:"{name} unlocked",tt_ev_alarm:"Alarm: {name}",tt_ev_smoke:"Smoke: {name}",tt_ev_outage:"Power outage",tt_ev_camera:"Camera detects motion: {name}",tt_ev_gas:"Gas: {name}",tt_ev_co:"Carbon monoxide: {name}",tt_ev_water:"Water: {name}",tt_ev_rain:"Window open in the rain: {name}",tt_ev_motion:"Motion at night: {name}",tt_ev_washer:"{name} done",tt_ev_robot_start:"{name} starts",tt_ev_robot_done:"{name} done",card_time_travel:'"Time travel" button',card_time_travel_hint:"A button at the bottom of the card replays the last hours and days (Pro: time travel).",auto_pro_teaser:'With Car Pro the vehicle here shows charge, range, charging, lock and climate from its integration (Tesla, VW, BMW, Hyundai/Kia, Renault, Smart, Polestar \u2026): a light band in the charge colour, a pin with percent and kilometres, a quick menu with lock, climate and charging, and "away" with its location when it is out.',car_hint:'One entity of the car is enough: NeonPlan finds the others on the same device in Home Assistant (charge, range, charging, cable, lock, climate, location). What it does not find you choose here; "None" switches a role off.',car_device:"Car (any entity of the car)",car_soc:"Charge (%)",car_range:"Range",car_charging:"Charging (power, state or switch)",car_plugged:"Cable plugged in",car_lock:"Lock",car_climate:"Climate / preheating",car_tracker:"Location (device_tracker)",car_away:"away",car_charging_short:"charging",car_lock_btn:"Lock",car_unlock_btn:"Unlock",car_unlock_confirm:"Really unlock the car?",car_climate_on:"Climate on",car_climate_off:"Climate off",car_charge_start:"Start charging",car_charge_stop:"Stop charging",car_no_controls:"No switchable entities found on the car (lock, climate, charge switch).",holo_media_playing:"playing",holo_media_paused:"paused",pro_locked:"This feature is a Pro add-on. After the purchase it appears under Extensions \u203A Shop connection and installs from there.",pro_shop:"To the shop",pack_licensed:"Licensed to {name}",pack_remove:"Remove",pack_remove_confirm:"Remove the pack \u201C{name}\u201D? Its furniture stays in the plan as plain boxes.",pack_missing_item:"Furniture of a removed pack",pack_error_bad_signature:"The pack was changed or its signature is invalid.",pack_error_unknown_publisher:"This pack is not from a known publisher.",pack_error_unsigned:"The pack is not signed.",pack_error_not_a_pack:"This is not a furniture pack file.",pack_error_invalid_content:"The pack contains invalid furniture: {detail}",pack_error_too_large:"The file is too large.",pack_error_needs_update:'This add-on needs a newer version of NeonPlan 3D. Please update first (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A "Update information" \u203A "Download"), restart Home Assistant, then install again.',license_error_needs_update:'This add-on needs a newer version of NeonPlan 3D. Please update first (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A "Update information" \u203A "Download"), restart Home Assistant, then install again.',pack_error_other:"Import failed: {detail}",back_to_room:"Back to {room}",back_to_floor:"Back to the floor",hint_furniture:"Tap a room, then pick an item on the right \xB7 drag items, resize them by their corners",furniture_into:"New items go into the middle of \u201C{room}\u201D.",furniture_pick_room:"Tip: tap a room first \u2013 new items then land in its middle.",flows:"Power flow",flows_hint:"Show or hide glowing lines from the meter to the consumers",holo_title:"Solar & Energy",holo_live:"live",holo_pv_now:"PV now",holo_today:"Today",holo_peak:"Peak",holo_battery:"Battery",holo_grid:"Grid",holo_house:"House",holo_wallbox:"Wallbox",holo_autarky:"Self-sufficiency",holo_house_now:"House now",chk_title:"Setup",chk_hint:"What energy and Energy Pro need. Tap a row to jump there.",chk_solar:"Solar field in place",chk_solar_add:"Put a solar field on the roof",chk_meter:"Meter with grid sensor",chk_meter_sensor:"Meter: grid sensor (W) missing",chk_meter_add:"Add the meter",chk_inverter:"Inverter with power sensor",chk_inverter_sensor:"Inverter: power sensor missing",chk_inverter_add:"Add an inverter",chk_battery:"Home battery with power and charge",chk_battery_sensor:"Home battery: power or charge missing",chk_battery_opt:"Home battery (optional)",chk_grid:"Grid connection set",chk_grid_opt:"Grid connection (optional, else automatic)",chk_pro_active:"Energy Pro is active",chk_pro_get:"Unlock Energy Pro (cables, modules, hologram)",energy_sign_grid:"Exporting right now although there is no PV power: the grid sensor probably counts the other way round.",energy_sign_battery:"The battery charges without sun and without grid import: its sensor probably counts the other way round.",energy_sign_flip:"Flip the sign",energy_pro_active:"Energy Pro is active",energy_pro_active_hint:"Cables, living modules and the hologram are running. Gas, water and heat come as updates of this pack.",pro_unlock:"Unlock",help_title:"Help and feedback",help_hint:"Please report problems as a GitHub issue and wishes as a discussion \u2013 nothing gets lost, and everyone sees the state.",help_issue:"Report a problem",help_idea:"Propose an idea",help_discord:"Community on Discord",furn_name:"Name (optional)",furn_mirror:"Mirror",furn_mirror_hint:"Swap left and right \u2013 the L-sofa the other way round, the cabinet with its door on the other side, the kitchen run mirrored.",cables_title:"Cables (Energy Pro)",cables_hint:"Dashed: the cable finds its own way. Grab it in the plan or pick it here and press \u201CLay by hand\u201D: it then runs solid over your points at the set height, e.g. along the facade outside or under the ceiling, and several cables can run side by side.",cable_laid:"laid by hand",cable_lay:"Lay by hand",cable_auto:"Automatic again",cable_height:"Height above the floor (m)",cable_points_hint:"Drag the points in the plan. A click on the cable adds a point, a double click on a point removes it.",cable_other_floor:"This cable is laid on the floor {floor}: switch there to drag its points.",holo_settings:"Hologram (Energy Pro)",holo_settings_hint:"The hologram hangs on a solar field or floats free at a point in the plan; it keeps its size in the world and shrinks as you zoom out. Every further plant gets a card of its own over its field.",holo_field:"On the solar field",holo_field_auto:"Automatic (largest field)",holo_size:"Size (1 = normal)",holo_mirror:"Mirrored from behind (like glass)",holo_device_min_w:"Hide device cards below (W)",holo_device_house:"Device cards in the house view too",holo_device_house_hint:"Off: the cards over devices only show when their floor is open.",holo_plant_floor:"House balance and plant cards in floor views too",room_ceiling:"Ceiling height (m)",units:"Lengths",units_auto:"Automatic ({unit})",units_metric:"Metres",units_imperial:"Feet and inches",units_hint:`How the editor shows and reads lengths. Automatic follows Home Assistant's unit system. The plan always stores metres \u2013 type feet and inches as 8' 2", 98in or 8.2ft.`,room_area_net:"Area {a} \xB7 net {n}",room_area_net_hint:"Net: without the walls reaching into the room \u2013 shared interior walls stand half in the room, free walls and the gap behind a wall built in front of another do not count.",room_ceiling_hint:"Empty = the floor height. With a height of its own the room's walls end there (unless a neighbouring room is taller), and ceiling lamps hang from that ceiling \u2013 e.g. 2.5 m in a living room beside a 5 m garage.",holo_plant_floor_hint:"On: the cards stay visible when a floor is open \u2013 on the floor of their solar field (fields on the roof: the top floor, in the garden: the lowest).",holo_device_room:"Device cards in an opened room",holo_device_room_hint:"On: when you open a room, the cards of the devices in that room show (only that room's).",holo_mirror_hint:"Looking from the back of the solar field, the cards show their back \u2013 mirrored like a pane of glass. Off: they stay readable from everywhere.",holo_right:"Sideways offset (m, + = right)",holo_up:"Upward offset (m, up the slope)",holo_place:"Hangs",holo_place_field:"On a solar field",holo_place_free:"Free in the plan (drag the \u25C8 handle)",holo_free_hint:"A handle \u25C8 stands in the plan \u2013 drag it to where the hologram should float (beside the house too, say over the terrace). The card faces away from the house.",holo_no_field:"No solar field in the plan yet: the hologram floats beside the house.",holo_height:"Height above the ground (m)",furn_plant_card:"Show the plant card (hologram)",furn_plant_card_hint:"Energy Pro: every plant (an inverter with fields of its own) gets a glass card over its field \u2013 power, day curve, battery. Switch it off for this plant here.",flow_on:"on",flow_off:"off",hint_opening:"Tap a wall to add a door or window \u2013 choose its kind on the right afterwards",preset_door:"Door",preset_door_double:"Double door",preset_window:"Window",preset_window_double:"Double window",preset_terrace:"Terrace door",preset_terrace_double:"French doors",preset_garage:"Garage door",preset_front:"Front door",opening_style:"Style",sidelight_auto:"automatic",sidelight_hinge:"Sidelight on the hinge side",sidelight_hinge_hint:"The sidelight sits opposite the hinge otherwise; ticked, it sits next to the hinges.",sidelight_width:"Sidelight width (m)",sidelight_width_left:"Left sidelight (m)",sidelight_width_right:"Right sidelight (m)",style_auto:"Automatic ({style})",style_interior:"Room door",style_front:"Front door",style_front_glass:"Front door with glass",style_sidelight:"Front door with sidelight",style_sidelights:"Front door with two sidelights",style_glass:"Glass door",style_sliding:"Sliding door",style_passage:"Opening (no door)",style_standard:"Standard",style_bars:"With glazing bars",style_glass_wall:"Glass wall (fixed)",preset_glass_wall:"Glass wall",flip_hinge:"Swap hinge side",flip_main_leaf:"Swap main leaf",flip_hinge_hint:"Hinges to the other side",flip_swing:"Reverse opening direction",flip_swing_hint:"The door swings into the room or to the other side",main_leaf:"Main leaf (seen from the room)",contact_main:"Contact main leaf",contact_second:"Contact second leaf",tool_outdoor:"Outdoor",tool_measure:"By measure",hint_measure:"Tap the starting point, then type the wall lengths with their direction on the right",measure:"Room by measure",measure_start:"Tap the starting point in the plan, e.g. a room corner.",measure_from:"Start at {x} / {z} m \u2013 tapping moves the start.",measure_length:"Length of the next wall (m)",measure_close:"Close room",measure_undo:"Remove last wall",measure_gap:"Gap to the start: {gap} m (joined when closing)",measure_hint:"Tip: type a length and press an arrow key. With measured inside dimensions, use \u201CClose gaps\u201D afterwards.",rect_by_size:"Rectangle by size",rect_add:"Add rectangle",dir_up:"Up",dir_down:"Down",dir_left:"Left",dir_right:"Right",hint_outdoor:"Drag to draw an outdoor area (lawn, terrace, pool \u2026)",hint_outdoor_free:"Place the corners of the outdoor area \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",outdoor_shape_rect:"Rectangle",outdoor_shape_free:"Free form",outdoor_draw_type:"Draw:",outdoor_draw_type_hint:"What you draw next: lawn, terrace, path, pool \u2026 The type can still be changed in the form afterwards.",outdoor:"Outdoor area",outdoor_type:"Type",outdoor_height:"Height (m)",outdoor_offset:"Height offset (m, \u2212 = lower)",outdoor_outline:"Show the outline",outdoor_outline_hint:"Unticked, the area draws no glowing line along its edge \u2013 for large plots made of several lawns.",outdoor_hint:"Outdoor lights (path light, garden spot, outdoor wall light) light all outdoor areas and the facade.",out_lawn:"Lawn",out_terrace:"Terrace",out_path:"Path",out_driveway:"Driveway",out_pool:"Pool",out_bed:"Flower bed",out_hedge:"Hedge",out_fence:"Fence",out_wild:"Wild patch",out_pergola:"Pergola / frame",out_balcony:"Balcony",balcony_rail:"Railing height",outdoor_open:"Open (leave out the last edge)",outdoor_open_hint:"The edge from the last point back to the first is not drawn \u2013 a fence or pergola leaning against the house.",outdoor_bracing:"X-bracing",outdoor_cut:"Cut out of the areas beneath",outdoor_cut_hint:"Every area drawn before this one that contains it whole gets a hole here \u2013 a pond or a wild patch in the lawn.",outdoor_slope:"Slope (m)",outdoor_slope_hint:"Height difference from the high edge to the low edge; the high edge sits at the height offset. Lamps on the area follow.",outdoor_slope_dir:"Falls towards",slope_x:"right (+X)",slope_nx:"left (\u2212X)",slope_z:"down (+Z)",slope_nz:"up (\u2212Z)",north:"North (\xB0 clockwise from up)",north_hint:"North is needed for the sun (light through the windows).",roof:"Roof",roof_none:"No roof",roof_flat:"Flat roof",roof_gable:"Gable roof",roof_custom:"Roof sections (custom)",roof_sections:"Roof sections",roof_sections_hint:"Each roof section covers a rectangle of the house, e.g. the house, the barn or an extension \u2013 each with its own shape, ridge direction, eave height and pitch. Drag in the plan to draw a new one; tap selects it, dragging moves it, the corners resize it.",roof_sections_start:"Create roof sections from the rooms",roof_sections_regen:"Create again from the rooms",roof_sections_off:"Back to one roof",roof_regen_confirm:"Replace all roof sections with a new proposal from the rooms?",roof_section:"Roof section",roof_section_hint:"Heights count from the ground. A side with a lower eave reaches further down (catslide); pent roofs rise from the first side.",roof_shape_gable:"Gable",roof_shape_hip:"Hip",roof_shape_pent:"Pent",roof_shape_flat:"Flat",roof_shape_halfhip:"Half-hip",roof_shape_pyramid:"Pyramid",roof_shape_mansard:"Mansard",roof_shape_parapet:"Parapet",roof_shape:"Shape",roof_axis_x:"Ridge \u2194",roof_axis_z:"Ridge \u2195",roof_eave:"Eave (m)",roof_pitch_short:"Pitch (\xB0)",roof_height:"Height (m)",roof_base:"Top of walls (m)",roof_on_floor:"Sits on floor",roof_on_floor_hint:"Puts the section on this floor's wall tops; base and eaves move along. In the 3D view the roof belongs to this floor.",roof_base_hint:"Below the ceiling height of the floor underneath, that floor's walls end under the roof: knee walls at the eaves, gables up to the ridge, inner walls cut by the slope. Dashed lines in the plan show where 1.5 m and 2 m of headroom remain.",roof_ridge_height:"Ridge height",roof_side_top:"top",roof_side_bottom:"bottom",roof_side_left:"left",roof_side_right:"right",roof_swap:"Swap sides",roof_open:"Canopy (posts instead of walls, see-through)",roof_open_short:"Canopy",roof_dormer:"Dormer",roof_dormer_hint:"A dormer on this side of the roof: 2 m wide, its front at the eave wall, eaves 1.4 m above the roof's eave, gable roof. Then move it and change its width and heights like any section; the main slope opens under it and the attic wall rises up to the dormer \u2013 a window fits there.",roof_outline:"Take the floor's outline",roof_outline_hint:"A flat roof as a free shape: takes the outline of the shown floor's rooms (L- or Z-shaped too) as one surface without seams. The corners can be dragged afterwards.",roof_points_hint:"Free shape: drag the corners in the plan. Back to the rectangle drops the shape.",roof_rect:"Back to the rectangle",roof_open_hint:"For a terrace roof or a carport: posts and beams carry the roof instead of walls, and it is see-through. Where the canopy meets the house wall, it rests on the wall.",roof_swap_hint:"Turns the roof round: the two sides swap eave and pitch, a pent roof rises the other way.",roof_pitch:"Roof pitch (\xB0)",roof_overhang:"Roof overhang (m)",roof_ridge:"Ridge",roof_ridge_long:"Along the long side",roof_ridge_short:"Along the short side (e.g. terraced house)",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",device_centre:"To room centre",lights_spread:"Spread ceiling lights evenly",devices_search:"Search devices \u2026",devices_more:"+{n} more",devices_less:"less",panel_more:"More devices of the area ({n})",panel_less:"Show less",gaps_close:"Close gaps",gaps_hint:"Join rooms up to 60 cm apart at one shared wall; the gap becomes the interior wall thickness.",gaps_none:"No gaps between rooms found.",straighten:"Straighten slanted edges",straighten_hint:"Finds room edges that are only a few centimetres off straight (a corner 1 cm out) and straightens them. Walls drawn slanted on purpose stay.",straighten_done:"{n} almost straight edges straightened.",straighten_none:"No slanted edges found.",gaps_closed:"{n} places closed.",gaps_closed_wall:"{n} places closed, interior wall now {t} m.",fps:"FPS",controls_side:"Where the floor pictures, star, search and eye sit",controls_left:"Controls on the left",controls_right:"Controls on the right",keep_view:"Keep view",keep_view_hint:"Switching from floor to floor keeps the camera where it is \u2013 only its height follows.",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",garage_hint:"The door follows a garage cover (position or open/closed) or a garage door contact of the room's area.",door_hint:"With a door contact the leaf swings open; without a sensor it stands half open.",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",sill:"Sill height (m)",terrain:"Ground",terrain_hint:"Where the ground lies around the house. What lies below it \u2013 a cellar, the lower part of a semi-basement \u2013 sits in the earth in 3D; lawns, paths and terraces lie on the ground.",terrain_level:"Ground height (m, ground floor = 0)",terrain_earth:"Show cellars in the earth",terrain_earth_hint:"Floors below the ground sit in the earth; open one and you see it as in a building pit. Off: they stand free as before.",terrain_cellar_hint:"Semi-basement: lower the ground height as far as the cellar should show \u2013 e.g. \u22121.2 m. Cellar windows below the ground get a light well.",terrain_no_cellar_hint:"A cellar is a floor with a negative elevation, e.g. \u22122.6 m.",terrain_reset:"Reset the ground",cellar_window:"Cellar window",well:"Light well",well_hint:"This window lies below the ground: in 3D it gets a light well with a grate. Untick for none \u2013 e.g. where a path runs past outside.",well_rim:"Rim above the ground (m)",cellar_window_hint:"Small and high up in the wall: 100 \xD7 50 cm, 25 cm under the ceiling. Below the ground it gets a light well with a grate in 3D.",opening_height:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",cover_entity:"Blind",door_cover:"Drive (motorised door or gate)",cover_position_entity:"Position sensor (live)",cover_position_invert:"Sensor counts the other way round (0 = open)",contact_entity:"Contact",sensor_kind:"Sensor type",sensor_kind_contact:"Window contact (open/closed)",sensor_kind_handle:"Handle sensor (open/tilted/closed)",sensor_kind_contact_tilt:"Contact + tilt sensor",handle_entity:"Handle sensor",handle_main:"Handle sensor main leaf",leaf_main:"Main leaf",leaf_second:"Second leaf",tilt_entity:"Tilt sensor",tilt_angle_entity:"Tilt angle sensor (\xB0, optional)",tilt_angle_max:"Angle that counts as fully tilted (\xB0)",tilt_angle_offset:"Offset: angle reported while closed (\xB0)",tilt_angle_invert:"The angle counts the other way round",door_shut:"Show closed without a sensor",door_shut_hint:"A door without a contact stands half open in 3D so it reads as a door. Ticked, it is drawn closed \u2013 front door, carport, side door.",contact_invert:"Invert contact",contact_invert_hint:"For sensors that report open and closed the other way round",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",entity_search:"Type to search \u2026",opening_hint:`Sensor type: window contact (reports open/closed), handle sensor (reports open, tilted and closed \u2013 e.g. a Homematic window handle) or contact + tilt sensor (a second sensor that only reports tilted). Automatic uses the blinds and contacts of the room's area. Position sensor: an entity reporting the blind's position while it moves (e.g. a Homematic "level", 0\u2013100 % or 0\u20131, open = high) \u2013 the blind then moves live in 3D.`,furniture:"Furniture",furniture_add:"Add furniture",furniture_search:"Search furniture \u2026",furniture_search_none:"Nothing found. Try another word \u2013 English or German.",furniture_type:"Item",rotation:"Rotation (\xB0)",strip_tilt:"Tilt about its length (\xB0)",strip_upright:"Upright",strip_upright_hint:"The strip stands on end: its length runs up from the height above the floor \u2013 along a door frame, as a light column. The tilt lays a lying strip against a slope (90\xB0 = its face points sideways).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Height (m)",furn_sofa:"Sofa",furn_sofa_l:"Corner sofa (L-shaped)",furn_sofa_u:"U-shaped sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Nightstand",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_worktop:"Worktop",furn_fridge:"Fridge",furn_fridge_smart:"Smart fridge (side by side)",furn_door_left:"Door sensor left (freezer side)",furn_door_right:"Door sensor right (fridge side)",fridge_hint:"While a door sensor reports open, the door swings open in 3D. The screen on the right door shows pictures by rules like a TV \u2013 while that door is closed.",furn_stove:"Stove",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV board",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",furn_stairs_u:"U-stair with landing",furn_stairwell:"Floor opening",stairwell_hint:"A hole in this floor, for example above the staircase or for a gallery; from above you look through it. Across several rooms it is cut in each of them; several openings may overlap (for an L shape, for example). Stairs on the floor below that reach up here open the floor by themselves as well.",tool_hole:"Floor opening",tool_roof:"Roof",tool_energy:"Energy",tool_wall:"Wall",hint_wall:"Drag to draw a single wall (partition, half wall) \xB7 Shift keeps it straight \xB7 Alt without snapping",free_wall:"Wall",wall_length:"Length (m)",wall_thickness:"Wall thickness (m)",wall_height:"Height (m)",wall_height_full:"Full room height",wall_none:"No wall",wall_none_hint:"Leave this wall out altogether: for open floor plans whose rooms are one space but separate in Home Assistant.",edge_thickness:"Thickness (m)",wall_thickness_hint:"Thickness of this wall, e.g. 0.365 on a thick outer wall or 0.115 on a light partition. A wall between two rooms takes the thicker setting.",wall_thickness_reset:"Thickness as set for the house",wall_heights:"Wall heights",wall_n:"Wall {a}\u2013{b}",wall_part:"part {n}",wall_split_hint:"Split the wall here: the part gets a height of its own, e.g. 2.5 m next to 1.7 m in line",wall_split_at:"Split point from corner (m)",wall_join_hint:"Remove the split point: the part joins the one before it again",wall_exterior_short:"exterior wall",room_wall_hint:"A lower height turns the wall into a parapet or a counter. If two rooms share the wall, the lower setting applies. Windows and doors in it end at the wall height.",free_wall_hint:"A free-standing wall, e.g. a partition. Where it meets a room wall, the corner is mitred. Drag the handles to move its ends, drag the line to move the whole wall.",wall_pos_hint:"X and Y: the middle of the wall in the plan.",stairwell_outside:"This opening lies in no room and is therefore not cut. Move it into a room.",hint_hole:"Drag to draw a floor opening (stairwell, gallery)",hint_roof:"Drag to draw a roof section \xB7 tap selects \xB7 drag moves \xB7 corners resize",hint_energy:"Tap a solar field to select it \xB7 drag to move it, also onto another roof face \xB7 new fields with + Solar field on the right",furn_parking:"Parking spot",furn_group_vehicles:"Parking",parking_entity:'Sensor "car present"',parking_vehicle:"Vehicle",parking_vehicle_none:"None",parking_no_pack:'No vehicle pack imported \u2013 vehicles come from the "Vehicles" pack (Furniture \u2192 Import furniture pack).',parking_scale:"Size (%)",parking_type_entity:"Vehicle type sensor (optional)",parking_types:"State \u2192 vehicle",parking_type_state:"State (e.g. van)",parking_add_type:"+ Mapping",parking_hint:'Without a sensor the vehicle always stands there. With one it appears as soon as the sensor reports "on", "home" or "present". A vehicle type sensor (e.g. from an AI camera analysis) picks the model: when its state matches a mapping \u2013 also as a word in the text \u2013 that vehicle is shown, otherwise the default one.',parking_too_tall:"The vehicle ({car} m) is taller than the room ({room} m).",furn_lamp_ceiling:"Ceiling light",furn_lamp_downlight:"Downlight",furn_lamp_spot:"Surface spot",furn_lamp_panel:"LED panel",furn_lamp_uplight:"Floor uplight",furn_lamp_bollard:"Path light",furn_lamp_garden:"Garden spot",furn_radiator:"Radiator",furn_robot_vacuum:"Robot vacuum",furn_entity_vacuum:"Robot vacuum",furn_robot_room:"Current room (sensor)",robot_hint:"While the robot cleans in Home Assistant it drives lanes in 3D through the room it reports (a \u201Ccurrent room\u201D sensor, matched by room or area name), else through the room of its dock. The track is simulated \u2013 Home Assistant usually does not know the exact position. It drives back to the dock when it returns.",furn_lamp_pendant:"Pendant light",furn_lamp_floor:"Floor lamp",furn_lamp_table:"Table lamp",furn_lamp_wall:"Wall light",furn_led_strip:"LED strip",furn_group_lights:"Lights",furn_entity_light:"Light or switch",furn_color_entity:"Colour and brightness from (optional)",furn_color_entity_hint:"For lights that a relay (Shelly, switch actuator) turns on and off while the bulb itself knows its colour and brightness: on/off comes from the switch above, colour and brightness from this entity.",furn_entity_climate:"Heating (thermostat)",lamp_hint:"Tap the lamp in 3D to switch it, long press for the quick menu. Switches work too (e.g. a relay for the ceiling light) \u2013 the lamp shines while it is on. Table lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",theme:"Look",version_hint:"Installed version of NeonPlan 3D \u2013 the frontend; the integration in Home Assistant reports {backend}",accent:"Accent colour",accent_hint:"An accent colour of your own: lines and glowing edges in the neon look, buttons and pins \u2013 \u21BA brings the neon cyan back",accent_reset:"Back to cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Day",furnish:"Furnish",split_3d:"3D beside",mount_height:"Height above the floor (m)",side_open:"Open the sidebar",side_close:"Collapse",side_fold_hint:"Make the sidebar narrow \u2013 more room for the floor plan",side_details:"Details of the selection",side_pin:"Pin",side_pinned:"Pinned",side_pin_hint:"Pinned, the sidebar stays open; otherwise it folds away beside the 3D view while nothing is selected",split_3d_hint:"Live 3D next to the plan: drag and turn furniture and devices there \u2013 with undo, saved with the plan",size_w:"Width (m)",size_d:"Depth (m)",size_h:"Height (m)",furnish_hint:"Drag furniture, lamps and devices \xB7 furniture snaps to walls \xB7 tap one to turn it, set its height and mount",done:"Done",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidity",heat_short_co2:"CO\u2082",heat_short_values:"Values",heat_temperature:"Temperature",heat_humidity:"Humidity",heat_co2:"CO\u2082",heat_values:"Values at the room names",heat_none_found:"No matching sensors in the rooms' areas.",markers:"Markers",markers_none:"None",markers_important:"Important",markers_all:"All",furn_stool:"Stool",furn_coffee_table:"Coffee table",furn_tv_wall:"TV (wall)",furn_ac_unit:"Air conditioner (wall)",furn_awning:"Awning",furn_group_outdoor:"Terrace & balcony",furn_waste_bin:"Waste bin",furn_mailbox:"Mailbox",furn_group_household:"Household",bin_shape:"Shape",bin_shape_bin120:"Wheelie bin 120 l",bin_shape_bin240:"Wheelie bin 240 l",bin_shape_bin1100:"Container 1100 l",bin_shape_multi:"Multi-compartment bin",bin_shape_bag:"Bag",bin_shape_caddy:"Caddy / pail",bin_shape_underground:"Underground container",bin_kind:"Waste",bin_kind_rest:"General waste",bin_kind_bio:"Food / organic",bin_kind_paper:"Paper",bin_kind_plastic:"Packaging / plastic",bin_kind_glass:"Glass",bin_kind_garden:"Garden waste",bin_kind_recycling:"Recycling",bin_kind_other:"Other",bin_color:"Colour",bin_lid:"Lid",bin_source:"Waste calendar or sensor",bin_match:"Word in the calendar (empty: by its waste)",bin_hint:"The bin glows from 2 pm the day before until noon on pickup day; its pin tells when it is next. A calendar (e.g. from Waste Collection Schedule) is searched for the words of its waste; a sensor can give the days to the pickup or its date.",bin_today:"Today",bin_tomorrow:"Tomorrow",bin_in_days:"in {n} days",mailbox_shape:"Shape",mailbox_shape_wall:"Wall mailbox",mailbox_shape_pole:"Mailbox on a post (with flag)",mailbox_shape_pillar:"Post box with newspaper holder",mailbox_shape_parcel:"Parcel box",mailbox_shape_bank:"Mailbox bank",mailbox_entity:"Post sensor (flap or flag)",mailbox_door:"Sensor of the emptying door (optional)",mailbox_hint:'With a flag (e.g. an input_boolean "post" set by an automation) the mailbox glows while it is on. With a flap and an emptying door it glows when post came in after it was last emptied.',mailbox_post:"Post",pro_name_household:"Household Pro",pro_feature_household:"Household Pro: waste bins glow the evening before their pickup (waste calendar or sensor) and tell when they are next; the mailbox glows while post is in it until it is emptied",household_teaser_bin:"With Household Pro the bin glows the evening before its pickup \u2013 from your waste calendar.",household_teaser_mail:"With Household Pro the mailbox glows as soon as post is in it \u2013 until it is emptied.",awning_cover:"Awning (cover)",awning_pitch:"Fall (\xB0)",awning_time:"Run time fully out (s)",awning_position:"Position sensor (optional)",awning_valance:"Valance (fabric edge at the front)",awning_invert:"Reverse direction",awning_invert_hint:"For covers that report 100 % while the awning is in.",awning_kind:"Kind",awning_kind_arm:"Folding-arm awning (terrace)",awning_kind_drop:"Drop-arm awning (balcony, window)",awning_kind_vertical:"Vertical screen / ZIP (window, balcony)",awning_kind_pergola:"Pergola / conservatory awning",awning_kind_side:"Side awning (privacy screen)",awning_kind_arm_hint:"The classic over a terrace: folding arms push the fabric out with a slight fall. Depth = projection.",awning_kind_drop_hint:"The arms swing out and down from the wall, the fabric stretches at a slant in front. Depth = arm length, fall = how far the arms go below the horizontal.",awning_kind_vertical_hint:"The fabric runs straight down in side rails to the floor \u2013 in front of a window, a balcony railing or the front of a pergola. Height above the floor = the box's underside.",awning_kind_pergola_hint:"A fixed frame with posts at the front; the fabric runs out on top of its rails. Depth = to the posts, fall = the roof's slope.",awning_kind_side_hint:"A post with the rolled fabric on the left, the fabric pulls out sideways to the right up to the other post. Width = how far it pulls out, height above the floor = the fabric's height.",awning_hint:"Width = the awning along the wall, depth = its projection fully out; the back of the frame goes against the house wall, height above the floor is the cassette's underside. If the cover reports its position while it runs, the awning runs out slowly in 3D; if it only says opening/closing, it moves along at the run time.",furn_only_color:"Glow in one colour only",furn_only_color_pick:"Colour",furn_only_color_hint:`The lamp only glows while the light shows about this colour \u2013 e.g. yellow for "water" at the washbasin. The same light's other colours stay dark here.`,furn_run_w:"Running from (watts)",furn_run_w_hint:"From how many watts at the power sensor the appliance counts as running and glows (empty: 10 W). For appliances behind a smart plug that draw a few watts on standby, e.g. 100.",furn_sideboard:"Sideboard",furn_table_round:"Round table",furn_bench:"Bench",furn_corner_bench:"Corner bench",furn_bar_stool:"Bar stool",furn_kitchen_wall:"Wall cabinet",furn_kitchen_tall:"Tall unit with oven",furn_island:"Kitchen island",furn_dishwasher:"Dishwasher",furn_bunk_bed:"Bunk bed",furn_dresser:"Chest of drawers",furn_washer:"Washing machine",furn_dryer:"Dryer",furn_office_chair:"Office chair",furn_tall_cabinet:"Tall cabinet",furn_coat_rack:"Coat rack",furn_group_living:"Living",furn_group_dining:"Dining",furn_group_energy:"Energy & solar",energy_devices:"Devices",solar_pro_title:"Solar & Energy Pro",solar_pro_soon:"coming soon",solar_pro_1:"Modules that come alive in the sun and glow with their output",solar_pro_2:"Fine power-flow lines through the house: where the power comes from and where it goes",solar_pro_3:"A glass hologram with power, day curve, today's yield and self-sufficiency",solar_pro_4:"Values per string on the roof, battery, wallbox and grid at a glance",solar_pro_free:"Everything you set up here (fields, strings, devices, sensors) stays free and is used by the Pro add-on directly.",wallbox_charging:"charging",wallbox_plugged:"plugged in",furn_soc:"State of charge (%)",furn_export:"Export power (W, separate sensor, optional)",furn_export_hint:"If your meter reports import and export in two sensors (e.g. Growatt, Tibber Pulse), take the import sensor as power above and the export sensor here. A signed sensor does not need this.",furn_charge:"Charging power (W, separate sensor, optional)",furn_charge_hint:"If your battery reports charging and discharging in two sensors (e.g. Anker Solix), take the discharging sensor as power above and the charging sensor here. A signed sensor does not need this.",furn_wallbox_status:"Status (charging, plugged in)",energy_only_note:"\u26A1 Energy: only solar fields and energy devices can be moved here; rooms and furniture are locked.",roof_only_note:"\u{1F3E0} Roof: only roof sections and roof windows can be moved here; rooms and furniture are locked.",energy_devices_hint:"Meter, inverters, home batteries, wallboxes and the grid connection are added here: on the floor chosen above, movable in the plan. With a power sensor they show their watts; the meter takes the grid sensor, a string picks its inverter. Several inverters and batteries (say a balcony plant on top) work too: each gets its own sensor.",solar_fields:"Solar fields",solar_hint:"Put modules on the roof: they lie in the slope of the roof face; on a flat roof they stand on frames. Drag a field in the plan to move it.",solar_no_roof:"Solar fields need a roof: a gable or flat roof under Settings, or roof sections here in the Roof tool.",solar_face_gone:"roof face missing",solar_summary:"{n} modules \xB7 {kwp} kWp",solar_add:"Solar field",solar_field:"Solar field",solar_face:"Roof face",solar_rows:"Rows",solar_cols:"Modules per row",solar_portrait:"Portrait",solar_landscape:"Landscape",solar_u:"Distance from the edge (m)",solar_v:"Distance from the eave (m)",solar_tilt:"Tilt of the frames (\xB0)",solar_flip:"Lean the other way",solar_partial:"only {n} of {total} fit on the face",solar_form_hint:"Modules that would reach beyond the roof face are left out. \u201CFill face\u201D puts as many modules on the roof as fit. kWp counted with 400 W per module.",solar_fit:"Fill face",roof_windows:"Roof windows",roof_window:"Roof window",roof_windows_hint:"Roof windows lie in the roof face, with a blind and contacts like windows. Drag them in the plan, also onto another roof face.",roof_window_tilt:"Tilt contact",roof_window_name:"Name (optional)",roof_window_motor:"Window motor (cover, optional)",roof_window_float:"Show over the room without the roof",roof_window_float_hint:"When the roof fades out as you zoom in on a floor or a room, the window stays where it is over the room \u2013 open, tilted, with its blind. This works over rooms of the floor the roof sits on; where the slope reaches down over a lower floor, the windows stay in the roof. Off: it shows in the roof only.",roof_window_motor_hint:"A window motor (Velux, Roto, Fakro) reports its position as a cover: the sash opens in 3D as far as the motor stands. A contact or tilt contact still works without a motor.",roof_window_hint:"Open, the sash swings out, hinged at the top; tilted, a little; and the frame glows warm; the blind comes down over the glass from the top. In a roof section the window cuts a hole into the slope, so the attic looks out through it.",solar_ground:"Free-standing (garden, garage roof \u2026)",solar_add_ground:"Free-standing",solar_base:"Height of the surface (m, 0 = ground)",solar_add_wall:"On a wall",solar_wall:"Wall",solar_wall_free:"free-standing",solar_v_wall:"Height above the floor (m)",solar_tilt_wall:"Tilt away from the wall (\xB0, 90 = canopy)",solar_flip_wall:"Standing off at the bottom instead of the top",solar_rotation:"Rotation (\xB0)",solar_name:"Name",solar_name_hint:"e.g. string 1 south",solar_module_w:"Module width (m)",solar_module_h:"Module height (m)",solar_wp:"Module power (Wp)",solar_string:"String",solar_strings:"Strings",solar_string_none:"No string",solar_string_new:"New string",solar_string_n:"String {n}",solar_string_name:"Name of the string",solar_string_entity:"PV power of the string",solar_string_inverter:"Connected to (inverter or battery)",solar_string_inverter_none:"No inverter chosen",inverter_strings:"Strings on this inverter: {names}",inverter_strings_none:"No string on this inverter yet \u2013 assign it at a solar field under String \u203A Inverter.",solar_string_inverter_missing:"No inverter in the plan yet (add one below under Devices)",solar_string_hint:"Fields in the same string belong together, also on different roofs (e.g. 5 modules on the house and 5 on the garage). Sensor and inverter count for the whole string.",solar_string_sum:"{fields} fields \xB7 {n} modules \xB7 {kwp} kWp",solar_face_size:"Roof face {w} \xD7 {h} m (along the eave \xD7 up the slope)",solar_cols_hint:"One number for rows of equal length, or a list for rows of their own: \u201C4, 4, 3\u201D (from the eave).",solar_align_left:"Left",solar_align_center:"Centre",solar_align_right:"Right",solar_look_black:"Full black",solar_look_blue:"Blue",solar_pick:"Modules on/off one by one",solar_pick_all:"All on again",solar_pick_hint:"Tap a module in the plan to take it away or put it back. Removed ones are dashed.",solar_entity:"PV power of this field (e.g. its string)",solar_main:"Main roof",solar_section:"Section {n}",solar_flat:"flat roof",compass_n:"north",compass_ne:"north-east",compass_e:"east",compass_se:"south-east",compass_s:"south",compass_sw:"south-west",compass_w:"west",compass_nw:"north-west",furn_meter:"Electricity meter",furn_grid_point:"Grid connection",grid_point_hint:"Here the grid cable ends: at the handover point to the utility, e.g. at the end of the driveway. Movable in the plan; without a grid connection the cable ends at the edge of the outdoor areas.",furn_model:"Model",inverter_std:"Standard (wall unit with display)",inverter_slim:"Slim and tall (light strip)",inverter_hybrid:"Hybrid (round dial, fans)",battery_std:"Tower (stacked modules)",battery_wall:"Wall battery (flat, hanging)",battery_cube:"Compact (balcony battery)",furn_inverter:"Solar inverter",furn_home_battery:"Home battery",furn_wallbox:"Wallbox",furn_group_kitchen:"Kitchen",furn_group_sleeping:"Sleeping",furn_group_bath:"Bath & laundry",furn_group_work:"Work & other",furn_entity:"Device (switch, plug \u2026)",furn_state_entity:"State from (optional)",furn_state_entity2:"Second state (the other half)",furn_state_split:"Halves",furn_state_left_right:"Left / right",furn_state_top_bottom:"Bottom / top (bunk bed)",furn_state_hint:"The item glows while the entity reports on, occupied or home \u2013 a bed with an occupancy mat, an armchair, the sauna. Two entities light the halves: left and right, bottom and top for a bunk bed.",furn_entity_tv:"TV (media player or smart plug)",fix:"Fix",unfix:"Release",fix_hint:"Fixed: cannot be moved by accident any more (key L, right-click or long press)",fixed_drag_hint:"\u{1F512} Fixed \u2013 release it first to move it (lock in the form, right-click or key L)",fixed_delete_confirm:"This item is fixed. Delete it anyway?",lock_plan:"\u{1F512} Floor plan",lock_plan_hint:"Lock the floor plan: rooms, walls, doors, windows and outdoor areas cannot be moved by accident. Furniture and devices stay free.",start_view:"Start view",start_view_hint:"The 3D view, the card and the kiosk open the house with this view, e.g. from the garden side. Turn, zoom and move the house in the 3D pane on the right until it fits, then remember it.",start_view_card:"If a card should open with a different view, put this line into its YAML configuration.",start_view_set:"Remember the current 3D view as the start",start_view_reset:"Default",start_view_saved:"An own start view is saved.",ctx_rotate:"Turn 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} more \u2013 narrow the search",climate:"Room climate",climate_temperature:"Temperature",climate_humidity:"Humidity",climate_co2:"CO\u2082",climate_hint:"These sensors count for the heatmap and the room panel. \u201CAutomatic\u201D takes the sensors of the area and the ones placed in the room, but no device temperatures (3D printer, heat pump, flow \u2026).",plan_locked:"Floor plan locked",plan_lock:"Lock floor plan",plan_unlock:"Unlock floor plan",opening_mark:"Highlight in 3D",opening_mark_open:"When open",opening_mark_closed:"When closed (e.g. WC)",opening_mark_hint:"A highlighted window or door glows warm. \u201CWhen closed\u201D needs a contact; without a sensor nothing is highlighted.",marker_show:"Marker in 3D",marker_show_hint:"Automatic follows the None / Important / All switch of the 3D view. Always show and Hide apply regardless (except with None).",marker_show_auto:"Automatic",marker_show_always:"Always show",marker_show_no_power:"Without watts",marker_show_never:"Hide",marker_icon:"Own symbol (Material Design icon)",device_name:"Own name (optional)",show_name:"Show the name under the marker in 3D",card_marker_names:"Own names at the markers",card_marker_names_hint:"Every device with an own name shows it small under its marker \u2013 three thermometers in the garden stay apart.",device_name_hint:'A name for the plan only, e.g. "Island accent light" \u2013 the entity in Home Assistant stays as it is.',floor_turn:"Turn 90\xB0",floor_shift_all:"Take every floor along (whole house)",floor_shift_all_hint:"Shift and turn act on every floor with the roof sections, outdoor areas, cables, meter and hologram \u2013 the whole house moves as one.",floor_turn_hint:"Turns everything on the floor by 90\xB0 clockwise about the middle of its rooms \u2013 when a floor was drawn the wrong way round. Three times = 270\xB0.",marker_icon_hint:"The name of a Material Design icon as in Home Assistant, e.g. mdi:thermometer or mdi:water-alert. Empty = the symbol of the device kind.",furn_power:"Power sensor (W)",furn_holo:"Hologram over the device (Energy Pro)",furn_holo_hint:"A glass card over the device with its power now, today's consumption and the day curve \u2013 in the house and the floor view. Needs a power sensor.",holo_dev_now:"now",furn_links_hint:"With a power sensor the item shows its watts and gets an energy cable.",screen_pictures:"Pictures by state",screen_pictures_hint:`The state or an attribute of the entity is compared (e.g. a TV's app_name). A value matches when it is equal or contained in the text ("youtube" matches "com.google.android.youtube.tv"); "*" = always. The first matching rule wins. Pictures are stored scaled to 512 px; a picture URL or a camera works too \u2013 a camera's live picture is refreshed every 5 seconds while shown. Without a matching rule the screen shows the media player.`,picture_state:"is or contains \u2026 (e.g. netflix)",picture_state_of:"State",picture_attribute:"Compare the state or an attribute",picture_pick:"Choose picture \u2026",picture_change:"Change picture \u2026",picture_url:"or picture URL",picture_add_value:"+ Value",picture_reuse:"Use a stored picture",picture_camera:"or a camera (live picture) \u2026",picture_camera_none:"No camera",screen_bg:"Screen behind the picture",screen_bg_black:"Dark",screen_bg_white:"White",picture_add_entity:"+ Another entity",picture_current:"now: {value}",picture_matches:"\u2713 matches now \u2013 this picture shows",furn_links_hint_tv:"The screen glows while the TV is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",stairs_u_hint:"The U-stair rises from the marked front edge towards the back, turns at the landing and comes back up on the other side. \u201CMirror\u201D turns it the other way. It opens the ceiling of the floor above.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",energy_meter:"Meter",energy_grid:"Grid (W, + = import)",energy_solar_sensor:"Solar production (W)",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",energy_gas_meter:"Gas meter",energy_water_meter:"Water meter",energy_meters_hint:`Energy Pro: the house card shows how much gas and water were used today \u2013 from the meters' statistics (a counter, e.g. in m\xB3). "Take over from the energy dashboard" fills both too.`,holo_gas:"Gas",holo_water:"Water",holo_today_short:"today",energy_invert:"Invert sign",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",energy_balance:"Energy balance",energy_balance_hint:"Grid, solar and battery come from the devices in the plan: meter, inverter and home battery. Here you can choose other sensors, flip signs and set the house consumption.",energy_consumption_sensor:"House consumption (W, else from the balance)",energy_import_prefs:"Take over from the energy dashboard",energy_import_done:"{n} sensors taken over \u2013 please check the signs.",energy_import_none:"No matching power sensors (W) were found in the energy dashboard \u2013 please choose them by hand.",energy_import_failed:"Home Assistant's energy dashboard is not set up.",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence",presence_hint:"Room sensor per person (e.g. ESPresense, Bermuda): its state names the room or area.",presence_sensor:"Room sensor",no_persons:"There are no people in Home Assistant.",diag_title:"Help make NeonPlan better",diag_intro:"Voluntary and anonymous: when you switch it on, NeonPlan sends a small report to the NeonPlan server (api.mastershort.de) at most once a day. It shows which devices NeonPlan runs on, where it stutters and which errors occur \u2013 so they can be fixed.",diag_sent_head:"What is sent:",diag_sent:"a random id (not Home Assistant's), the versions of NeonPlan, Home Assistant and Python, the language, the installed packs and Pro add-ons, counts from the plan (floors, rooms, furniture, linked devices, cameras), device type, browser and system of the screens with frame rate and graphics class, how often each view was opened, and NeonPlan's error messages without names and addresses.",diag_never_head:"What is never sent:",diag_never:"names, entities, areas, the shape of your floor plan, IP addresses, your Home Assistant installation's id, user names and your licence key.",diag_voluntary:'You can switch it off again at any time. Reports are kept for 12 months; "Delete my data" removes them at once. More in the',diag_privacy:"privacy notice",diag_switch:"Send anonymous usage and error reports",diag_view:"View data",diag_view_head:"This is what is sent",diag_view_hint_on:"Exactly this report goes out next time (at most once a day); errors in addition at most once an hour.",diag_view_hint_off:"Switched off: nothing is sent. This is how the report would look \u2013 the id is only created when you switch it on.",diag_delete:"Delete my data",diag_delete_confirm:"Delete all reports of this installation on the server and stop sending?",diag_deleted:"Deleted. Sending is off; if you switch it on again, you get a new id.",diag_delete_failed:"The NeonPlan server could not be reached. Please try again later.",diag_unavailable:"This setting is available after a restart of Home Assistant."},Gc=["fr","es","nl","it","hu","da","sv","nb","nn","fi","cs","pl","ro","sl","zh","pt"],on=new Map,Go=new Map;function Uo(o){let e=(o??navigator.language).toLowerCase(),t=e.startsWith("no")?"nb":e.slice(0,2);return Gc.includes(t)?t:null}function St(o){let e=Uo(o);return!e||on.has(e)}function Wn(o){let e=Uo(o);if(!e||on.has(e))return Promise.resolve();let t=Go.get(e);if(!t){let n=new URL(`./lang/${e}.json?v=33e392c6216d`,import.meta.url).href;t=fetch(n).then(i=>i.ok?i.json():{}).then(i=>{on.set(e,i&&typeof i=="object"?i:{})}).catch(()=>{on.set(e,{})}).finally(()=>Go.delete(e)),Go.set(e,t)}return t}function T(o,e,t={}){let n=o?.language??navigator.language,i=n.startsWith("de")?null:Uo(n),s=(n.startsWith("de")?Hs:i&&on.get(i)||Is)[e]??Is[e]??Hs[e]??e;for(let[a,l]of Object.entries(t))s=s.replace(`{${a}}`,String(l));return s}function J(o,e,t=2){return e.toLocaleString(o?.language??void 0,{maximumFractionDigits:t})}var Uc=["camera_cockpit","weather","screens","energy_pro","sound","auto_pro","time_travel","pool","household"],jc=["fun_pets","fun_halloween"],Ws=["pool","household","diagnostics"];var qc=["fridge_smart"];function Zc(o){return Uc.includes(o)||qc.includes(o)||jc.includes(o)}var jo=o=>(o??navigator.language).toLowerCase().startsWith("de");function Ls(o){return`https://mastershort.de/my-account/?lang=${jo(o)?"de":"en"}&src=neonplan-app`}function Cs(o){return jo(o)?"https://mastershort.de/neonplan3d/?lang=de":"https://mastershort.de/en/neonplan3d/?lang=en"}var Yc={camera_cockpit:{de:"pro-erweiterungen/#61-kamera-cockpit",en:"pro-add-ons/#61-camera-cockpit"},weather:{de:"pro-erweiterungen/#62-wetter-drau%C3%9Fen",en:"pro-add-ons/#62-weather-outside"},screens:{de:"pro-erweiterungen/#63-bildschirme-live",en:"pro-add-ons/#63-live-screens"},energy_pro:{de:"pro-erweiterungen/#64-energie-pro",en:"pro-add-ons/#64-energy-pro"},sound:{de:"pro-erweiterungen/#65-klang-kino",en:"pro-add-ons/#65-sound-cinema"},auto_pro:{de:"pro-erweiterungen/#66-auto-pro",en:"pro-add-ons/#66-auto-pro"},time_travel:{de:"pro-erweiterungen/#67-zeitreise",en:"pro-add-ons/#67-time-travel"},pool:{de:"pro-erweiterungen/#68-pool-pro",en:"pro-add-ons/#68-pool-pro"},household:{de:"pro-erweiterungen/#69-haushalt-pro",en:"pro-add-ons/#69-household-pro"},extensions:{de:"erweiterungen-shop-moebel-packs/",en:"extensions-shop-furniture-packs/"}};function Os(o,e){let t=jo(o),n=t?"https://mastershort.de/neonplan3d/anleitung/":"https://mastershort.de/en/neonplan3d/manual/",i=e?Yc[e]:void 0,r=i?t?i.de:i.en:"",[s,a]=r.split("#");return`${n}${s}?lang=${t?"de":"en"}${a?`#${a}`:""}`}function Xc(o=jt()){let e=new Set;for(let t of o)for(let n of t.features??[])Zc(n)&&e.add(n);return e}function L(o,e){return Xc(e).has(o)}var Bs={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function Ln(o){return Bs[o]}function $t(o){return`<ha-icon icon="mdi:${o.replace(/^mdi:/,"").replace(/[^a-z0-9-]/gi,"")}" style="--mdc-icon-size:18px"></ha-icon>`}function rn(o){return`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${Bs[o]}"/></svg>`}var Ne=(o,e)=>T(o,e);function fe(o,e){if(!e||N(e))return Ne(o,"state_unavailable");let t=e.attributes;switch(I(e.entity_id)){case"light":return e.state!=="on"?Ne(o,"state_off"):typeof t.brightness=="number"?`${Math.round(t.brightness/255*100)} %`:Ne(o,"state_on");case"switch":case"fan":return Ne(o,e.state==="on"?"state_on":"state_off");case"cover":return typeof t.current_position=="number"&&e.state!=="opening"&&e.state!=="closing"?`${t.current_position} %`:Cn(o,e.state);case"climate":{let n=typeof t.current_temperature=="number"?`${J(o,t.current_temperature,1)} ${o?ke(o):"\xB0C"}`:null;return e.state==="off"?n?`${n} \xB7 ${Ne(o,"state_off")}`:Ne(o,"state_off"):n??Cn(o,e.state)}case"media":{let n=e.state==="playing"||e.state==="paused"||e.state==="on"||e.state==="idle",i=[t.app_name,t.media_title,t.source].find(r=>typeof r=="string"&&r);return n&&i?i:Cn(o,e.state)}case"lock":case"camera":return Cn(o,e.state);case"binary":return["door","window","opening","garage_door"].includes(t.device_class)?Ne(o,e.state==="on"?"state_open":"state_closed"):Ne(o,e.state==="on"?"state_detected":"state_clear");case"sensor":{let n=Number(e.state),i=t.unit_of_measurement??"",r=o?.entities?.[e.entity_id]?.display_precision??1;return Number.isFinite(n)?`${J(o,n,r)}${i?` ${i}`:""}`:e.state}default:return""}}function Cn(o,e){let t=`state_${e}`,n=T(o,t);return n===t?e:n}function Ns(o,e){let t=[];for(let n of e.floors)for(let i of n.placements){let r=I(i.entity_id),s=o.states[i.entity_id];if(!r||!s)continue;let a=n.rooms.find(d=>d.points.length>=3&&V([i.x,i.z],d.points))??null,l=a?.area_id?o.areas?.[a.area_id]?.name:void 0;t.push({id:i.entity_id,floorId:n.id,roomId:a?.id??null,x:i.x,z:i.z,y:i.y??kt(r,n.height,i.mount??null),lamp:r==="light"?i.mount??"ceiling":null,model:r==="camera"?i.mount==="ceiling"?"camera_ceiling":"camera_wall":void 0,motion:r==="camera"?Jc(o,i.entity_id):void 0,fov:i.fov??void 0,reach:i.reach??void 0,tilt:i.tilt??void 0,rotation:i.rotation??0,icon:i.icon?$t(i.icon):rn(r),cone:r==="camera"&&i.cone===!1?!1:void 0,name:i.name||Z(o,i.entity_id,l),ownName:i.name||void 0,showName:!!i.show_name,text:fe(o,s),active:Fe(s),unavailable:N(s),glow:r==="light"?qo(Oe(s),i.glow_scale):null,show:i.marker??void 0,fixed:!!i.locked})}return t}function Vs(o,e){let t=`${e} ${String(o.states[e]?.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return/person|people|human|pedestrian/.test(t)?"person":/\bcar\b|vehicle|truck|bus|motorcycle|bicycle|fahrzeug|auto\b/.test(t)?"car":/\bdog\b|\bcat\b|\bpet\b|animal|bird|hund|katze|tier/.test(t)?"pet":"motion"}function Jc(o,e){return Ve(o,e).some(t=>o.states[t]?.state==="on")}function Ve(o,e){let t=o.entities?.[e]?.device_id;return t?Object.values(o.entities??{}).filter(n=>n.device_id===t&&n.entity_id.startsWith("binary_sensor.")).map(n=>n.entity_id).filter(n=>["motion","occupancy","presence"].includes(String(o.states[n]?.attributes.device_class))):[]}function Ks(o){return o.floors.flatMap(e=>e.placements.map(t=>t.entity_id))}function xe(o,e){o.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}function Gs(o,e){let t=e.slice(0,e.indexOf("."));return o.callService(t,"toggle",{entity_id:e})}function qo(o,e){return!o||e==null||e===1?o:{...o,level:Math.max(.02,Math.min(1.5,o.level*e))}}var we=(o,e)=>[o[0]-e[0],o[1]-e[1]],Mt=(o,e)=>[o[0]+e[0],o[1]+e[1]],Ke=(o,e)=>[o[0]*e,o[1]*e],Zo=(o,e)=>o[0]*e[0]+o[1]*e[1],Pt=(o,e)=>o[0]*e[1]-o[1]*e[0],sn=o=>Math.hypot(o[0],o[1]),Et=o=>{let e=sn(o)||1;return[o[0]/e,o[1]/e]},Us=o=>[-o[1],o[0]],js=o=>[o[1],-o[0]];function zt(o,e,t=[]){let n=e.eps??.005,i=[],r=t.filter(v=>Math.hypot(v.b[0]-v.a[0],v.b[1]-v.a[1])>.05),s=[],a=v=>{for(let P=0;P<s.length;P++)if(Math.abs(s[P][0]-v[0])<=n&&Math.abs(s[P][1]-v[1])<=n)return P;return s.push([v[0],v[1]]),s.length-1},l=[];for(let v of o){let P=v.points;if(P.length<3||Math.abs(Le(P))<1e-6)continue;let M=Le(P)>0,E=P.map(a);for(let F=0;F<P.length;F++){let G=E[F],C=E[(F+1)%P.length];G!==C&&l.push(M?{u:G,v:C,room:v.id,edge:F,forward:!0}:{u:C,v:G,room:v.id,edge:F,forward:!1})}}let d=r.map(v=>[a(v.a),a(v.b)]),c=new Set;for(let v of o){let P=v.points;P.length<3||(v.wall_splits??[]).forEach((M,E)=>{if(!M||E>=P.length)return;let F=P[E],G=we(P[(E+1)%P.length],F),C=sn(G);for(let O of M)O>n&&O<C-n&&c.add(a(Mt(F,Ke(G,O/C))))})}let u=[];for(let v of l){let P=s[v.u],M=s[v.v],E=we(M,P),F=sn(E),G=Ke(E,1/F),C=[];for(let j=0;j<s.length;j++){if(j===v.u||j===v.v)continue;let oe=we(s[j],P),H=Zo(oe,G);H<=n||H>=F-n||Math.abs(Pt(G,oe))<=n&&C.push({t:H,id:j})}C.sort((j,oe)=>j.t-oe.t);let O=[{t:0,id:v.u},...C,{t:F,id:v.v}];for(let j=0;j+1<O.length;j++){let oe=O[j],H=O[j+1],Q=v.forward?oe.t:F-H.t,ce=v.forward?H.t:F-oe.t;u.push({u:oe.id,v:H.id,room:v.room,edge:v.edge,t0:Q,t1:ce})}}let h=new Map;for(let v of u){let P=v.u<v.v?`${v.u}-${v.v}`:`${v.v}-${v.u}`,M=h.get(P);M||h.set(P,M=[]),M.push(v)}let f=v=>({room_id:v.room,edge:v.edge,t0:v.t0,t1:v.t1}),p=new Map;for(let v of u){let P=`${v.room}:${v.edge}`;p.set(P,[...p.get(P)??[],v.t0].sort((M,E)=>M-E))}let g=v=>{let P=o.find(E=>E.id===v.room)?.wall_heights?.[v.edge];if(!Array.isArray(P))return P;let M=p.get(`${v.room}:${v.edge}`)??[];return P[M.indexOf(v.t0)]??null},m=v=>{let P=v.map(g).filter(E=>typeof E=="number"&&E>0);if(P.length)return Math.min(...P);let M=v.map(E=>o.find(F=>F.id===E.room)?.ceiling_height);return M.every(E=>typeof E=="number"&&E>0)?Math.max(...M):void 0},y=v=>{let P=v.map(M=>o.find(E=>E.id===M.room)?.wall_thickness?.[M.edge]).filter(M=>typeof M=="number"&&M>0);return P.length?Math.max(...P):void 0},_=v=>v.some(P=>g(P)===0),b=[],k=[];for(let v of h.values()){let P=v[0],M=v.find(E=>E!==P&&E.u===P.v&&E.v===P.u&&E.room!==P.room);for(let E of v)E!==P&&E!==M&&E.room!==P.room&&i.push(`overlap:${P.room}:${E.room}`);if(_(M?[P,M]:[P])){M&&b.push([P.room,M.room]);continue}if(M){let E=y([P,M])??e.interior;k.push({a:P.u,b:P.v,left:E/2,right:E/2,exterior:!1,roomLeft:P.room,roomRight:M.room,sources:[f(P),f(M)],height:m([P,M])})}else k.push({a:P.u,b:P.v,left:0,right:y([P])??e.exterior,exterior:!0,roomLeft:P.room,roomRight:null,sources:[f(P)],height:m([P])})}let z=v=>Et(we(s[v.b],s[v.a]));for(let v of k){if(v.exterior||v.free)continue;let P=new Set;for(let E of[v.a,v.b])for(let F of k)!F.exterior||F.free||F.a!==E&&F.b!==E||Math.abs(Pt(z(v),z(F)))>1e-6||(F.roomLeft===v.roomLeft?P.add("left"):F.roomLeft===v.roomRight&&P.add("right"));if(P.size!==1)continue;let M=v.left+v.right;P.has("left")?(v.left=0,v.right=M):(v.left=M,v.right=0)}r.forEach((v,P)=>{let[M,E]=d[P];if(M===E)return;let F=[(v.a[0]+v.b[0])/2,(v.a[1]+v.b[1])/2],G=o.find(j=>j.points.length>=3&&V(F,j.points))?.id??null,C=(v.thickness??e.interior)/2,O=typeof v.height=="number"&&v.height>0?v.height:void 0;k.push({free:v.id,a:M,b:E,left:C,right:C,exterior:!1,roomLeft:G,roomRight:G,sources:[],height:O})}),k=ed(k,s,c);let A=nd(k,s);return{walls:k.map((v,P)=>{let M=s[v.a],E=s[v.b],F=A.get(`${P}:a`),G=A.get(`${P}:b`),C=od([F.right,G.left,E,G.right,F.left,M],1e-6);return{id:Qc(M,E),a:[M[0],M[1]],b:[E[0],E[1]],left:v.left,right:v.right,exterior:v.exterior,roomLeft:v.roomLeft,roomRight:v.roomRight,sources:v.sources,footprint:C,...v.free?{free:v.free}:{},...v.height!==void 0?{height:v.height}:{}}}),warnings:[...new Set(i)],open:b}}function Qc(o,e){let t=r=>Math.round(r*100),[n,i]=o[0]<e[0]||o[0]===e[0]&&o[1]<=e[1]?[o,e]:[e,o];return`w_${t(n[0])}_${t(n[1])}_${t(i[0])}_${t(i[1])}`}function qs(o){return{...o,a:o.b,b:o.a,left:o.right,right:o.left,roomLeft:o.roomRight,roomRight:o.roomLeft}}function ed(o,e,t=new Set){let n=o.slice(),i=!0;for(;i;){i=!1;let r=new Map;n.forEach((s,a)=>{for(let l of[s.a,s.b]){let d=r.get(l);d||r.set(l,d=[]),d.push(a)}});for(let[s,a]of r){if(a.length!==2||t.has(s))continue;let l=n[a[0]],d=n[a[1]];if(l.b!==s&&(l=qs(l)),d.a!==s&&(d=qs(d)),l.a===d.b)continue;let c=Et(we(e[l.b],e[l.a])),u=Et(we(e[d.b],e[d.a]));if(Math.abs(Pt(c,u))>1e-6||Zo(c,u)<=0||l.free||d.free||l.height!==d.height||l.exterior!==d.exterior||l.roomLeft!==d.roomLeft||l.roomRight!==d.roomRight||Math.abs(l.left-d.left)>1e-9||Math.abs(l.right-d.right)>1e-9)continue;let h={...l,b:d.b,sources:td(l.sources,d.sources)},f=n.filter((p,g)=>g!==a[0]&&g!==a[1]);f.push(h),n.length=0,n.push(...f),i=!0;break}}return n}function td(o,e){let t=o.map(n=>({...n}));for(let n of e){let i=t.find(r=>r.room_id===n.room_id&&r.edge===n.edge&&(Math.abs(r.t1-n.t0)<1e-6||Math.abs(n.t1-r.t0)<1e-6));i?(i.t0=Math.min(i.t0,n.t0),i.t1=Math.max(i.t1,n.t1)):t.push({...n})}return t}function nd(o,e){let t=new Map;o.forEach((i,r)=>{let s=Et(we(e[i.b],e[i.a])),a=[[i.a,{key:`${r}:a`,d:s,left:i.left,right:i.right,angle:Math.atan2(s[1],s[0])}],[i.b,{key:`${r}:b`,d:Ke(s,-1),left:i.right,right:i.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,d]of a){let c=t.get(l);c||t.set(l,c=[]),c.push(d)}});let n=new Map;for(let[i,r]of t){let s=e[i];r.sort((d,c)=>d.angle-c.angle);let a=d=>({left:Mt(s,Ke(Us(d.d),d.left)),right:Mt(s,Ke(js(d.d),d.right))});for(let d of r)n.set(d.key,a(d));if(r.length<2)continue;let l=4*Math.max(...r.map(d=>Math.max(d.left,d.right)))+1e-9;for(let d=0;d<r.length;d++){let c=r[d],u=r[(d+1)%r.length],h=Mt(s,Ke(Us(c.d),c.left)),f=Mt(s,Ke(js(u.d),u.right)),p=Pt(c.d,u.d);if(Math.abs(p)<1e-4)continue;let g=Pt(we(f,h),u.d)/p,m=Mt(h,Ke(c.d,g));sn(we(m,s))>l||(n.get(c.key).left=m,n.get(u.key).right=m)}}return n}function od(o,e){let t=o.filter((i,r)=>sn(we(i,o[(r+1)%o.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let i=0;i<t.length;i++){let r=t[(i+t.length-1)%t.length],s=t[i],a=t[(i+1)%t.length],l=we(s,r),d=we(a,s);if(Math.abs(Pt(Et(l),Et(d)))<1e-7&&Zo(l,d)>0){t=t.filter((c,u)=>u!==i),n=!0;break}}}return t}var ln=Math.PI/180;function cn(o){let e=Math.min(o.x0,o.x1),t=Math.max(o.x0,o.x1),n=Math.min(o.z0,o.z1),i=Math.max(o.z0,o.z1);return o.axis==="x"?{u0:e,u1:t,w:i-n,at:(r,s)=>[r,o.flip?i-s:n+s]}:{u0:n,u1:i,w:t-e,at:(r,s)=>[o.flip?t-s:e+s,r]}}function On(o){let e=cn(o).w,t=o.eave_a,n=o.eave_b,i=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*ln),r=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*ln);if(o.shape==="flat"||o.shape==="parapet")return{vr:e/2,rh:t,y:()=>t};if(o.shape==="pent")return{vr:e,rh:t+e*i,y:l=>t+l*i};if(o.shape==="mansard"){let l=Xs(e,t,n,i,r);return{vr:l.vr,rh:l.rh,y:l.y}}let s=i+r>1e-6?Math.min(e,Math.max(0,(n-t+e*r)/(i+r))):e/2,a=t+s*i;return{vr:s,rh:a,y:l=>l<=s?t+l*i:n+(e-l)*r}}var rd=.14;function Zs(o,e){return!o.open&&Math.min(o.base,o.eave_a,o.eave_b)<e-.05}function Ys(o,e,t){let n=null,i=Math.max(0,o.settings.roof.overhang??0);for(let r of o.settings.roof.sections??[]){if(r.open)continue;let s=Math.min(r.x0,r.x1),a=Math.max(r.x0,r.x1),l=Math.min(r.z0,r.z1),d=Math.max(r.z0,r.z1);if(e<s-1e-6||e>a+1e-6||t<l-1e-6||t>d+1e-6||r.points&&r.points.length>=3&&!V([e,t],r.points))continue;let[c,u]=ad(r,e,t),h=r.shape==="flat"||r.shape==="parapet",f=Math.max(0,r.overhang??i),g=((h?null:sd(id(r,{u0:f,u1:f,a:f,b:f}),c,u))??On(r).y(u))-rd;n=n===null?g:Math.max(n,g)}return n}var an=Math.tan(30*ln);function Xs(o,e,t,n,i){let r=Math.min(o*.3,n>1e-6?2.4/n:o*.3),s=Math.min(o*.3,i>1e-6?2.4/i:o*.3),a=e+r*n,l=t+s*i,d=Math.min(o-s,Math.max(r,(l-a+an*(o-s+r))/(2*an))),c=a+(d-r)*an;return{vla:r,vlb:s,yla:a,ylb:l,vr:d,rh:c,y:h=>h<=r?e+h*n:h<=d?a+(h-r)*an:h<=o-s?l+(o-s-h)*an:t+(o-h)*i}}function id(o,e){let t=cn(o),n=On(o),i=t.w,r=Math.max(0,e.a),s=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),d=(_,b)=>[_,b,n.y(b)],c=d(a,-r),u=d(l,-r),h=d(l,i+s),f=d(a,i+s),p=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*ln),g=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*ln);if(o.shape==="pent"){let _=[c,u,h,f];return{faces:[_],rim:_,ridges:[[h,f]],gable:[[0,n.y(0)],[i,n.y(i)]]}}if(o.shape==="hip"||o.shape==="pyramid"){let _=o.shape==="pyramid"?(t.u1-t.u0)/2:Math.min((t.u1-t.u0)/2,Math.min(n.vr,i-n.vr)||i/2),b=[t.u0+_,n.vr,n.rh],k=[t.u1-_,n.vr,n.rh],z=o.shape==="pyramid"?[[c,u,b],[u,h,b],[h,f,b],[f,c,b]]:[[c,u,k,b],[b,k,h,f],[f,c,b],[u,h,k]],A=o.shape==="pyramid"?[[c,b],[f,b],[u,b],[h,b]]:[[b,k],[c,b],[f,b],[u,k],[h,k]];return{faces:z,rim:[c,u,h,f],ridges:A,gable:null}}if(o.shape==="halfhip"){let _=Math.min(n.y(0),n.y(i)),b=_+(n.rh-_)*.55,k=p>1e-6?Math.min(n.vr,(b-o.eave_a)/p):n.vr,z=g>1e-6?Math.max(n.vr,i-(b-o.eave_b)/g):n.vr,A=Math.min((t.u1-t.u0)/2-.1,(n.rh-b)/Math.max(.2,p)),S=[t.u0+A,n.vr,n.rh],v=[t.u1-A,n.vr,n.rh],P=[a,k,b],M=[a,z,b],E=[l,k,b],F=[l,z,b];return{faces:[[c,u,E,v,S,P],[S,v,F,h,f,M],[M,P,S],[E,F,v]],rim:[c,u,E,F,h,f,M,P],ridges:[[S,v],[P,S],[M,S],[E,v],[F,v]],gable:[[0,n.y(0)],[k,b],[z,b],[i,n.y(i)]]}}if(o.shape==="mansard"){let _=Xs(i,o.eave_a,o.eave_b,p,g),b=[a,_.vla,_.yla],k=[l,_.vla,_.yla],z=[a,i-_.vlb,_.ylb],A=[l,i-_.vlb,_.ylb],S=[a,_.vr,_.rh],v=[l,_.vr,_.rh];return{faces:[[c,u,k,b],[b,k,v,S],[S,v,A,z],[z,A,h,f]],rim:[c,u,k,v,A,h,f,z,S,b],ridges:[[S,v],[b,k],[z,A]],gable:[[0,n.y(0)],[_.vla,_.yla],[_.vr,_.rh],[i-_.vlb,_.ylb],[i,n.y(i)]]}}let m=[a,n.vr,n.rh],y=[l,n.vr,n.rh];return{faces:[[c,u,y,m],[m,y,h,f]],rim:[c,u,y,h,f,m],ridges:[[m,y]],gable:[[0,n.y(0)],[n.vr,n.rh],[i,n.y(i)]]}}function sd(o,e,t){let n=null;for(let i of o.faces){if(!V([e,t],i.map(_=>[_[0],_[1]])))continue;let[r,s]=i,a=i.slice(2).find(_=>Math.abs((s[0]-r[0])*(_[1]-r[1])-(s[1]-r[1])*(_[0]-r[0]))>1e-9);if(!a)continue;let l=s[0]-r[0],d=s[2]-r[2],c=s[1]-r[1],u=a[0]-r[0],h=a[2]-r[2],f=a[1]-r[1],p=d*f-c*h,g=c*u-l*f,m=l*h-d*u;if(Math.abs(g)<1e-9)continue;let y=r[2]-(p*(e-r[0])+m*(t-r[1]))/g;n=n===null?y:Math.min(n,y)}return n}function ad(o,e,t){let n=Math.min(o.x0,o.x1),i=Math.max(o.x0,o.x1),r=Math.min(o.z0,o.z1),s=Math.max(o.z0,o.z1);return o.axis==="x"?[e,o.flip?s-t:t-r]:[t,o.flip?i-e:e-n]}function Js(o,e,t){let n=cn(e),i=o.floors.flatMap(d=>d.rooms.filter(c=>c.points.length>=3&&d.elevation+d.height>e.base+.05)),r=d=>d.some(c=>i.some(u=>V(c,u.points))),s=.35,a=[.15,.5,.85].map(d=>n.u0+(n.u1-n.u0)*d),l=[.15,.5,.85].map(d=>n.w*d);return{a:r(a.map(d=>n.at(d,-s)))?0:t,b:r(a.map(d=>n.at(d,n.w+s)))?0:t,u0:r(l.map(d=>n.at(n.u0-s,d)))?0:t,u1:r(l.map(d=>n.at(n.u1+s,d)))?0:t}}var Nn=Math.PI/180,ld=1.13,cd=1.72,Vn=.025,tt=.07,Qs=.25;function un(o,e){let t=[];for(let n of o.floors){if(e&&n.id!==e)continue;let{walls:i}=zt(n.rooms,{exterior:o.settings.wall_exterior,interior:o.settings.wall_interior},n.walls??[]);for(let r of i){if(!r.exterior&&!r.free)continue;let s=r.b[0]-r.a[0],a=r.b[1]-r.a[1],l=Math.hypot(s,a);if(l<.5)continue;let d=a/l,c=-s/l,u=Math.min(n.height,r.height??n.height),h=r.sources.find(g=>g.room_id===r.roomLeft)?.edge??null,f={floorId:n.id,room:r.roomLeft,edge:h,free:!!r.free},p=(g,m,y,_)=>t.push({key:g,section:null,side:"top",flat:!1,o:m,eu:y,es:[0,1,0],n:_,lu:l,ls:u,pitch:90,span:()=>[0,l],facing:[_[0],_[2]],wall:f});p(`wall:${n.id}:${r.id}`,[r.a[0]+d*r.right,n.elevation,r.a[1]+c*r.right],[s/l,0,a/l],[d,0,c]),r.free&&p(`wall:${n.id}:${r.id}:back`,[r.b[0]-d*r.left,n.elevation,r.b[1]-c*r.left],[-s/l,0,-a/l],[-d,0,-c])}}return t}var ea="ground";function dd(o){let e=[...o.floors.filter(t=>t.rooms.some(n=>n.points.length>=3))].sort((t,n)=>t.elevation-n.elevation);return e.find(t=>t.elevation>-.5)??e[0]??o.floors[0]??null}function ud(o,e){let t=(e.rotation??0)*Math.PI/180,n=[Math.cos(t),0,Math.sin(t)],i=[-Math.sin(t),0,Math.cos(t)],r=dd(o),s=n[0]*e.u+i[0]*e.v,a=n[2]*e.u+i[2]*e.v,l=r?r.elevation+(e.base!=null?e.base:qt(r,s,a)):e.base??0;return{key:ea,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:i,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[i[0],i[2]],unbounded:!0}}function ot(o,e,t=At(o)){return e.face===ea?ud(o,e):e.face.startsWith("wall:")?un(o,e.face.split(":")[1]).find(n=>n.key===e.face)??null:t.find(n=>n.key===e.face)??null}function Yo(o){return o.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function At(o){let e=o.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(_=>hd(_,Js(o,_,_.overhang??e.overhang)));let t=Yo(o);if(!t)return[];let n=t.rooms.flatMap(_=>_.points.map(b=>b[0])),i=t.rooms.flatMap(_=>_.points.map(b=>b[1])),r=o.settings.wall_exterior+e.overhang,s=Math.min(...n)-r,a=Math.max(...n)+r,l=Math.min(...i)-r,d=Math.max(...i)+r,c=t.elevation+t.height;if(e.type==="flat")return[ta("main",null,s,l,a,d,c+Qs)];let u=a-s>=d-l,h=e.ridge==="short"?!u:u,f=(h?d-l:a-s)/2,p=f*Math.tan(e.pitch*Nn),g=(_,b,k)=>h?[_,c+k,(l+d)/2+b]:[(s+a)/2+b,c+k,_],[m,y]=h?[s,a]:[l,d];return[-1,1].map(_=>Bn(`main:${_<0?"a":"b"}`,null,_<0?"a":"b",g(m,_*f,0),g(y,_*f,0),g(m,0,p),e.pitch,()=>[0,y-m]))}function hd(o,e){let t=cn(o),n=On(o),i=(g,m,y)=>{let[_,b]=t.at(g,m);return[_,y,b]},r=Math.max(0,e.a),s=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),d=l-a;if(o.shape==="flat"||o.shape==="parapet"){let g=t.at(a,-r),m=t.at(l,t.w+s);return[ta(o.id,o.id,Math.min(g[0],m[0]),Math.min(g[1],m[1]),Math.max(g[0],m[0]),Math.max(g[1],m[1]),o.eave_a+Qs)]}if(o.shape==="pent")return[Bn(`${o.id}:a`,o.id,"a",i(a,-r,n.y(-r)),i(l,-r,n.y(-r)),i(a,t.w+s,n.y(t.w+s)),o.pitch_a,()=>[0,d])];let c=o.shape==="hip"||o.shape==="pyramid",u=o.shape==="pyramid"?(t.u1-t.u0)/2:c?Math.min((t.u1-t.u0)/2,Math.min(n.vr,t.w-n.vr)||t.w/2):0,h=c?t.u0+u-a:0,f=c?l-(t.u1-u):0,p=[];if(n.vr>.3){let g=Math.hypot(n.vr+r,n.rh-n.y(-r));p.push(Bn(`${o.id}:a`,o.id,"a",i(a,-r,n.y(-r)),i(l,-r,n.y(-r)),i(a,n.vr,n.rh),o.pitch_a,m=>[h*(m/g),d-f*(m/g)]))}if(t.w-n.vr>.3){let g=Math.hypot(t.w+s-n.vr,n.rh-n.y(t.w+s));p.push(Bn(`${o.id}:b`,o.id,"b",i(l,t.w+s,n.y(t.w+s)),i(a,t.w+s,n.y(t.w+s)),i(l,n.vr,n.rh),o.pitch_b,m=>[f*(m/g),d-h*(m/g)]))}if(c){let g=n.y(-r),m=n.y(t.w+s),y=[[`${o.id}:c`,"c",i(a,t.w+s,m),i(a,-r,g),i(t.u0+u,n.vr,n.rh)],[`${o.id}:d`,"d",i(l,-r,g),i(l,t.w+s,m),i(t.u1-u,n.vr,n.rh)]];for(let[_,b,k,z,A]of y){let S=pd(_,o.id,b,k,z,A);S&&p.push(S)}}return p}function pd(o,e,t,n,i,r){let s=dn(nt(i,n));if(s<.3)return null;let a=Ge(nt(i,n)),l=nt(r,n),d=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],c=[l[0]-a[0]*d,l[1]-a[1]*d,l[2]-a[2]*d],u=dn(c);if(u<.3)return null;let h=Ge(c),f=Ge(ra(a,h));f[1]<0&&(f=[-f[0],-f[1],-f[2]]);let p=Ge([-h[0],0,-h[2]]),g=Math.atan2(h[1],Math.hypot(h[0],h[2]))/Nn;return{key:o,section:e,side:t,flat:!1,o:n,eu:a,es:h,n:f,lu:s,ls:u,pitch:g,span:y=>{let _=Math.min(1,Math.max(0,y/u));return[d*_,s-(s-d)*_]},facing:[p[0],p[2]]}}function Bn(o,e,t,n,i,r,s,a){let l=Ge(nt(i,n)),d=Ge(nt(r,n)),c=Ge(ra(l,d));c[1]<0&&(c=[-c[0],-c[1],-c[2]]);let u=Ge([-d[0],0,-d[2]]);return{key:o,section:e,side:t,flat:!1,o:n,eu:l,es:d,n:c,lu:dn(nt(i,n)),ls:dn(nt(r,n)),pitch:s,span:a,facing:[u[0],u[2]]}}function ta(o,e,t,n,i,r,s){let a=i-t>=r-n,l=a?i-t:r-n,d=a?r-n:i-t;return{key:`${o}:top`,section:e,side:"top",flat:!0,o:[t,s,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:d,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function Xo(o){let e=o.module_w||ld,t=o.module_h||cd;return o.portrait===!1?[t,e]:[e,t]}function na(o){return o.layout?.length?o.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,o.rows)},()=>Math.max(1,o.cols))}function Jo(o,e){return o.flat?Math.min(45,Math.max(0,e.tilt??15))*Nn:o.wall?Math.min(90,Math.max(0,e.tilt??0))*Nn:0}function rt(o,e){let[t,n]=Xo(e),i=na(e),r=Math.max(1,...i),a=(i.length-1)*oa(o,e)+n*Math.cos(Jo(o,e));return[r*t+(r-1)*Vn,a]}function oa(o,e){let[,t]=Xo(e),n=Jo(o,e);return o.wall?t*Math.cos(n)+Vn:o.flat?t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n)):t+Vn}function fd(o,e,t=!1){let[n,i]=Xo(e),r=[],s=Jo(o,e),a=i*Math.cos(s),l=oa(o,e),d=na(e),c=Math.max(1,...d),u=new Set(e.skip??[]),h=!!o.wall&&n>o.lu+1e-6,f=(g,m,y)=>[o.o[0]+o.eu[0]*g+o.es[0]*m+o.n[0]*y,o.o[1]+o.eu[1]*g+o.es[1]*m+o.n[1]*y,o.o[2]+o.eu[2]*g+o.es[2]*m+o.n[2]*y],p=(g,m)=>{if(o.unbounded)return!0;if(m<-1e-6||m>o.ls+1e-6)return!1;let[y,_]=o.span(m);return g>=y-1e-6&&g<=_+1e-6};return d.forEach((g,m)=>{let y=e.align==="right"?c-g:e.align==="center"?(c-g)/2:0;for(let _=0;_<g;_++){let b=`${m}:${_}`,k=u.has(b);if(k&&!t)continue;let z=e.u+(_+y)*(n+Vn),A=e.v+m*l,S=z+n,v=A+(o.flat||o.wall?a:i);if(h){if(!(p((z+S)/2,A)&&p((z+S)/2,v)))continue}else if(![[z,A],[S,A],[S,v],[z,v]].every(([C,O])=>p(C,O)))continue;if(o.wall&&s>.001){let C=tt+i*Math.sin(s),[O,j]=e.flip?[C,tt]:[tt,C],oe=[f(z,A,O),f(S,A,O),f(S,v,j),f(z,v,j)],H=e.flip?A:v,Q=[z+.05,S-.05].map(ce=>[f(ce,H,0),f(ce,H,C)]);r.push({corners:oe,posts:Q,cell:b,skipped:k});continue}if(!o.flat){r.push({corners:[f(z,A,tt),f(S,A,tt),f(S,v,tt),f(z,v,tt)],posts:[],cell:b,skipped:k});continue}let P=.15,M=P+i*Math.sin(s),[E,F]=e.flip?[v,A]:[A,v],G=[f(z,E,P),f(S,E,P),f(S,F,M),f(z,F,M)];r.push({corners:G,posts:[z+.05,S-.05].flatMap(C=>[[f(C,E,0),f(C,E,P)],[f(C,F,0),f(C,F,M)]]),cell:b,skipped:k})}}),r}function nt(o,e){return[o[0]-e[0],o[1]-e[1],o[2]-e[2]]}function dn(o){return Math.hypot(o[0],o[1],o[2])}function Ge(o){let e=dn(o)||1;return[o[0]/e,o[1]/e,o[2]/e]}function ra(o,e){return[o[1]*e[2]-o[2]*e[1],o[2]*e[0]-o[0]*e[2],o[0]*e[1]-o[1]*e[0]]}var md=.78,gd=1.18;function _d(o){return{id:o.id,face:o.face,u:o.u,v:o.v,rows:1,cols:1,portrait:!0,module_w:o.w||md,module_h:o.h||gd}}function bd(o,e){let t=fd(o,_d(e))[0];if(!t)return null;let n=i=>[i[0]-o.n[0]*.05,i[1]-o.n[1]*.05,i[2]-o.n[2]*.05];return[n(t.corners[0]),n(t.corners[1]),n(t.corners[2]),n(t.corners[3])]}function wd(o,e,t){let n=e?bd(e,t):null;if(!n)return null;let i=(n[0][0]+n[2][0])/2,r=(n[0][1]+n[2][1])/2,s=(n[0][2]+n[2][2])/2;for(let a of[...o.floors].sort((l,d)=>d.elevation-l.elevation)){if(a.elevation>r)continue;let l=a.rooms.find(d=>V([i,s],d.points));if(l)return{floor:a,roomId:l.id,corners:n}}return null}function ia(o,e){let t=o.settings.roof?.windows??[];if(!t.length)return[];let n=new Map(At(o).map(i=>[i.key,i]));return t.filter(i=>wd(o,n.get(i.face),i)?.roomId===e)}function sa(o,e){let[t,n]=rt(o,e);return[o.o[0]+o.eu[0]*(e.u+t/2)+o.es[0]*(e.v+n/2),o.o[2]+o.eu[2]*(e.u+t/2)+o.es[2]*(e.v+n/2)]}var Ae=me`
  :host {
    --fp3d-bg: #070b14;
    --fp3d-bg2: #0d1424;
    --fp3d-chrome: rgba(14, 21, 38, 0.86);
    --fp3d-chrome-solid: #0f1729;
    --fp3d-line: rgba(120, 170, 255, 0.16);
    --fp3d-text: #e6eefc;
    --fp3d-muted: #8a9bb8;
    --fp3d-accent: #37e0ff;
    --fp3d-accent-text: #041018;
    --fp3d-soft: #5b7cff;
    --fp3d-warm: #ffb547;
    --fp3d-danger: #ff6b8b;
    --fp3d-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
    --fp3d-font: "Figtree", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    --fp3d-title-font: "Bricolage Grotesque", "Figtree", system-ui, sans-serif;
    color-scheme: dark;
    font-family: var(--fp3d-font);
    color: var(--fp3d-text);
  }
`,Ue=me`
  .fp3d-seg {
    display: inline-flex;
    padding: 3px;
    gap: 2px;
    border-radius: 999px;
    background: var(--fp3d-chrome);
    box-shadow: var(--fp3d-shadow);
  }
  .fp3d-seg button,
  .fp3d-chip {
    font: inherit;
    font-weight: 500;
    border: none;
    background: none;
    color: var(--fp3d-muted);
    padding: 7px 13px;
    border-radius: 999px;
    cursor: pointer;
    white-space: nowrap;
    min-height: 34px;
  }
  .fp3d-seg button[aria-pressed="true"],
  .fp3d-chip[aria-pressed="true"] {
    background: var(--fp3d-accent);
    color: var(--fp3d-accent-text);
  }
  .fp3d-seg button:disabled {
    opacity: 0.4;
    cursor: default;
  }
  .fp3d-chip {
    background: var(--fp3d-chrome);
    color: var(--fp3d-text);
    box-shadow: var(--fp3d-shadow);
  }
  button:focus-visible,
  input:focus-visible,
  select:focus-visible {
    outline: 2px solid var(--fp3d-accent);
    outline-offset: 2px;
  }
  .fp3d-btn {
    font: inherit;
    font-weight: 600;
    border: 1px solid var(--fp3d-line);
    background: rgba(55, 224, 255, 0.06);
    color: var(--fp3d-text);
    border-radius: 10px;
    padding: 7px 12px;
    cursor: pointer;
    min-height: 34px;
  }
  .fp3d-btn:hover {
    border-color: var(--fp3d-accent);
  }
  .fp3d-btn.fp3d-danger {
    color: var(--fp3d-danger);
  }
  .fp3d-btn.fp3d-primary {
    background: var(--fp3d-accent);
    color: var(--fp3d-accent-text);
    border-color: transparent;
  }
  .fp3d-field {
    display: grid;
    gap: 4px;
    font-size: 12px;
    color: var(--fp3d-muted);
  }
  .fp3d-field input,
  .fp3d-field select {
    font: inherit;
    font-size: 14px;
    color: var(--fp3d-text);
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid var(--fp3d-line);
    border-radius: 8px;
    padding: 7px 9px;
    min-width: 0;
  }
  .fp3d-field input[type="range"] {
    padding: 0;
    accent-color: var(--fp3d-accent);
  }
  /* a colour picker shows its colour as a full swatch, not a line inside the text field's padding */
  .fp3d-field input[type="color"] {
    padding: 3px;
    height: 36px;
    width: 100%;
    cursor: pointer;
  }
  .fp3d-field select option,
  select option {
    /* the opened list keeps the dark look (else light text on the browser's white list) */
    background: var(--fp3d-chrome-solid);
    color: var(--fp3d-text);
  }
  /* fingers need 40 px */
  @media (pointer: coarse) {
    .fp3d-seg button,
    .fp3d-chip,
    .fp3d-btn {
      min-height: 40px;
    }
  }
`;var vd=4,yd=3e3,kd=8,xd=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[255,95,210],[120,255,150]],Rt=o=>w`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${Ln(o)} />
  </svg>`,Kn={previous:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z"},Qo=o=>w`<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d=${o} /></svg>`,er=class extends ue{static properties={hass:{attribute:!1},room:{attribute:!1},floor:{attribute:!1},building:{attribute:!1},confirmEntities:{attribute:!1},readOnly:{type:Boolean},_showAll:{state:!0},_tick:{state:!0}};cameraTimer;memo=null;hasCameras=!1;constructor(){super(),this.room=null,this.floor=null,this.building=null,this.readOnly=!1,this._showAll=!1,this._tick=0}connectedCallback(){super.connectedCallback(),this.cameraTimer=setInterval(()=>{this.hasCameras&&!document.hidden&&this._tick++},yd)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.cameraTimer)}t(e,t){return T(this.hass,e,t)}call(e,t,n){this.readOnly||this.hass.callService(e,t,n)}get areaName(){return this.room?.area_id?this.hass.areas?.[this.room.area_id]?.name:void 0}name(e){return Z(this.hass,e,this.areaName)}nameButton(e){return w`<button class="fp3d-rp-name" title=${this.t("details")} @click=${()=>!this.readOnly&&xe(this,e)}>${this.name(e)}</button>`}askFor(e){return!this.confirmEntities?.has(e)||confirm(this.t("confirm_switch",{name:this.name(e)}))}toggle(e,t,n){let i=()=>{this.readOnly||this.confirmEntities?.has(e.entity_id)&&!confirm(this.t("confirm_switch",{name:this.name(e.entity_id)}))||n()};return w`<button
      class="fp3d-switch"
      role="switch"
      aria-checked=${t?"true":"false"}
      aria-label=${this.name(e.entity_id)}
      ?disabled=${N(e)}
      @click=${i}
    ></button>`}render(){let e=this.room;if(!e||!this.hass)return x;let t=se(this.hass,e.area_id),n=this.memo,{shown:i,more:r}=n&&n.entities===this.hass.entities&&n.floor===this.floor&&n.building===this.building&&n.room===e?n:this.memo={entities:this.hass.entities,floor:this.floor,building:this.building,room:e,...this.floor?As(this.hass,this.floor,e,this.building?ia(this.building,e.id):[]):{shown:t,more:[]}},s=Co(this.hass,r).map(k=>k.primary),a=s.length,l=this._showAll?[...i,...s]:i,d=k=>l.filter(z=>k.includes(I(z))).map(z=>this.hass.states[z]),c=d(["light"]),u=d(["cover"]),h=d(["climate"]),f=d(["media"]),p=d(["switch","fan","lock"]),g=d(["sensor","binary"]),m=d(["camera"]);this.hasCameras=m.length>0;let y=d(["scene","script"]),_=this.facts(h),b=c.filter(k=>k.state==="on");return w`<section class="fp3d-rp ${this.readOnly?"fp3d-rp-ro":""}" aria-label=${e.name}>
      <header class="fp3d-rp-head">
        <div>
          <h2>${e.name}</h2>
          ${_.length?w`<p class="fp3d-rp-facts">${_.join(" \xB7 ")}</p>`:x}
          ${this.readOnly?w`<p class="fp3d-rp-facts fp3d-rp-ro-note">⏪ ${this.t("tt_readonly")}</p>`:x}
        </div>
        <button class="fp3d-rp-close" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      <div class="fp3d-rp-body">
        ${e.area_id?l.length?x:w`<p class="fp3d-rp-note">${this.t("panel_empty")}</p>`:w`<p class="fp3d-rp-note">${this.t("panel_no_area")}</p>`}
        ${c.length?this.section("panel_lights",c.map(k=>this.lightRow(k)),w`${b.length<c.length?w`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_on",{entity_id:c.filter(k=>!N(k)).map(k=>k.entity_id)})}>
                    ${this.t("panel_all_on")}
                  </button>`:x}${b.length?w`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_off",{entity_id:b.map(k=>k.entity_id)})}>
                    ${this.t("panel_all_off")}
                  </button>`:x}`):x}
        ${u.length?this.section("panel_covers",u.map(k=>this.coverRow(k)),u.length>1?w`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("cover","open_cover",{entity_id:u.filter(k=>!N(k)).map(k=>k.entity_id)})}>
                      ${this.t("panel_all_open")}</button
                    ><button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("cover","close_cover",{entity_id:u.filter(k=>!N(k)).map(k=>k.entity_id)})}>
                      ${this.t("panel_all_close")}
                    </button>`:x):x}
        ${h.length?this.section("panel_climate",h.map(k=>this.climateRow(k))):x}
        ${f.length?this.section("panel_media",f.map(k=>this.mediaRow(k))):x}
        ${p.length?this.section("panel_switches",p.map(k=>this.switchRow(k))):x}
        ${m.length?this.section("panel_cameras",m.map(k=>this.cameraTile(k))):x}
        ${g.length?this.section("panel_sensors",g.map(k=>this.sensorRow(k))):x}
        ${y.length?this.section("panel_scenes",[w`<div class="fp3d-rp-scenes">
                  ${y.map(k=>w`<button
                      class="fp3d-btn"
                      ?disabled=${N(k)}
                      @click=${()=>this.call(I(k.entity_id)==="scene"?"scene":"script","turn_on",{entity_id:k.entity_id})}
                    >
                      ${this.name(k.entity_id)}
                    </button>`)}
                </div>`]):x}
        ${a?w`<button class="fp3d-btn fp3d-rp-small fp3d-rp-more" @click=${()=>this._showAll=!this._showAll}>
              ${this._showAll?this.t("panel_less"):this.t("panel_more",{n:a})}
            </button>`:x}
      </div>
    </section>`}facts(e){let t=[],n=this.room,i=(l,d)=>{let c=Ce(this.hass,this.floor,n,l);if(c===null)return null;if(l==="temperature")return`${J(this.hass,yt(this.hass,c),1)} ${ke(this.hass)}`;let u=Ho(this.hass,this.floor,n,l)[0],h=this.hass.states[u]?.attributes.unit_of_measurement??d;return`${J(this.hass,c,1)} ${h}`},r=e.find(l=>typeof l.attributes.current_temperature=="number"),s=i("temperature","\xB0C");s?t.push(s):r&&n.climate?.temperature!=="none"&&t.push(`${J(this.hass,r.attributes.current_temperature,1)} ${ke(this.hass)}`);let a=i("humidity","%");return a&&t.push(a),t}section(e,t,n=x){return w`<div class="fp3d-rp-sec">
      <div class="fp3d-rp-sec-head"><h3>${this.t(e)}</h3>${n}</div>
      ${t}
    </div>`}lightRow(e){let t=e.attributes,n=e.state==="on",i=t.supported_color_modes??[],r=i.some(h=>h!=="onoff"),s=i.includes("color_temp"),a=i.some(h=>["hs","rgb","rgbw","rgbww","xy"].includes(h)),l=typeof t.brightness=="number"?Math.round(t.brightness/255*100):100,d=t.min_color_temp_kelvin??2200,c=t.max_color_temp_kelvin??6500,u=e.entity_id;return w`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${Rt("light")}</span>
      ${this.nameButton(u)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,n,()=>this.call("light","toggle",{entity_id:u}))}
      ${n&&r?w`<label class="fp3d-rp-slider"
            ><span>${this.t("brightness")}</span>
            <input
              type="range"
              min="1"
              max="100"
              .value=${String(l)}
              @change=${h=>this.call("light","turn_on",{entity_id:u,brightness_pct:Number(h.target.value)})}
          /></label>`:x}
      ${n&&s?w`<label class="fp3d-rp-slider fp3d-rp-ct"
            ><span>${this.t("color_temp")}</span>
            <input
              type="range"
              min=${d}
              max=${c}
              step="50"
              .value=${String(t.color_temp_kelvin??d)}
              @change=${h=>this.call("light","turn_on",{entity_id:u,color_temp_kelvin:Number(h.target.value)})}
          /></label>`:x}
      ${n&&a?w`<div class="fp3d-rp-swatches" role="group" aria-label=${this.t("color")}>
            ${xd.map(h=>w`<button
                class="fp3d-rp-swatch"
                style="--c: rgb(${h.join(",")})"
                aria-label="rgb(${h.join(", ")})"
                @click=${()=>this.call("light","turn_on",{entity_id:u,rgb_color:h})}
              ></button>`)}
          </div>`:x}
    </div>`}coverRow(e){let t=e.attributes,n=t.supported_features??0,i=e.entity_id,r=N(e);return w`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon">${Rt("cover")}</span>
      ${this.nameButton(i)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      <div class="fp3d-rp-buttons">
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.askFor(i)&&this.call("cover","open_cover",{entity_id:i})}>${this.t("cover_open")}</button>
        ${n&kd?w`<button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.call("cover","stop_cover",{entity_id:i})}>${this.t("cover_stop")}</button>`:x}
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.askFor(i)&&this.call("cover","close_cover",{entity_id:i})}>${this.t("cover_close")}</button>
      </div>
      ${n&vd&&typeof t.current_position=="number"?w`<label class="fp3d-rp-slider"
            ><span>${this.t("position")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${r}
              .value=${String(t.current_position)}
              @change=${s=>this.call("cover","set_cover_position",{entity_id:i,position:Number(s.target.value)})}
          /></label>`:x}
      ${n&128&&typeof t.current_tilt_position=="number"?w`<label class="fp3d-rp-slider"
            ><span>${this.t("cover_tilt")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${r}
              .value=${String(t.current_tilt_position)}
              @change=${s=>this.call("cover","set_cover_tilt_position",{entity_id:i,tilt_position:Number(s.target.value)})}
          /></label>`:n&48?w`<div class="fp3d-rp-buttons">
              ${n&16?w`<button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.call("cover","open_cover_tilt",{entity_id:i})}>${this.t("cover_tilt_open")}</button>`:x}
              ${n&32?w`<button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.call("cover","close_cover_tilt",{entity_id:i})}>${this.t("cover_tilt_close")}</button>`:x}
            </div>`:x}
    </div>`}climateRow(e){let t=e.attributes,n=e.entity_id,i=typeof t.temperature=="number"?t.temperature:null,r=t.target_temp_step??.5,s=t.min_temp??5,a=t.max_temp??30,l=t.hvac_modes??[],d=c=>this.call("climate","set_temperature",{entity_id:n,temperature:Math.min(a,Math.max(s,Math.round(c/r)*r))});return w`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${t.hvac_action==="heating"?"fp3d-rp-on":""}">${Rt("climate")}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${i!==null?w`<div class="fp3d-rp-stepper fp3d-rp-wide">
            <button class="fp3d-btn" aria-label=${this.t("temp_down")} @click=${()=>d(i-r)}>−</button>
            <span><small>${this.t("target_temp")}</small> ${J(this.hass,i,1)} ${ke(this.hass)}</span>
            <button class="fp3d-btn" aria-label=${this.t("temp_up")} @click=${()=>d(i+r)}>+</button>
          </div>`:x}
      ${l.length>1?w`<div class="fp3d-rp-chips">
            ${l.map(c=>w`<button
                class="fp3d-chip"
                aria-pressed=${e.state===c}
                @click=${()=>this.call("climate","set_hvac_mode",{entity_id:n,hvac_mode:c})}
              >
                ${this.stateLabel(c)}
              </button>`)}
          </div>`:x}
    </div>`}stateOf(e,t=fe(this.hass,e)){if(this.room?.no_state?.includes(e.entity_id))return"";let n=I(e.entity_id);return e.state==="unknown"&&n!=="sensor"&&n!=="binary"?"":t}stateLabel(e){let t=`state_${e}`,n=this.t(t);return n===t?e:n}mediaRow(e){let t=e.attributes,n=e.entity_id,i=N(e)||e.state==="off",r=[t.media_title,t.media_artist].filter(s=>typeof s=="string"&&s).join(" \xB7 ");return w`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${e.state==="playing"?"fp3d-rp-on":""}">${Rt("media")}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateOf(e,this.stateLabel(e.state))}</span>
      ${r?w`<p class="fp3d-rp-media fp3d-rp-wide">${r}</p>`:x}
      <div class="fp3d-rp-buttons fp3d-rp-wide">
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("previous")} ?disabled=${i} @click=${()=>this.call("media_player","media_previous_track",{entity_id:n})}>
          ${Qo(Kn.previous)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("play_pause")} ?disabled=${N(e)} @click=${()=>this.call("media_player",e.state==="playing"?"media_pause":"media_play",{entity_id:n})}>
          ${Qo(e.state==="playing"?Kn.pause:Kn.play)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("next")} ?disabled=${i} @click=${()=>this.call("media_player","media_next_track",{entity_id:n})}>
          ${Qo(Kn.next)}
        </button>
      </div>
      ${typeof t.volume_level=="number"?w`<label class="fp3d-rp-slider"
            ><span>${this.t("volume")}</span>
            <input
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(t.volume_level*100))}
              @change=${s=>this.call("media_player","volume_set",{entity_id:n,volume_level:Number(s.target.value)/100})}
          /></label>`:x}
    </div>`}switchRow(e){let t=e.entity_id,n=I(t),i=t.slice(0,t.indexOf(".")),r=n==="lock"?e.state==="unlocked"||e.state==="open":e.state==="on",s=()=>n==="lock"?this.call("lock",r?"lock":"unlock",{entity_id:t}):this.call(i,"toggle",{entity_id:t});return w`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${r?"fp3d-rp-on":""}">${Rt(n)}</span>
      ${this.nameButton(t)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,r,s)}
    </div>`}cameraTile(e){let t=e.attributes.entity_picture,n=t&&!N(e)?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this._tick}`:null,i=this.floor?.placements.some(r=>r.entity_id===e.entity_id);return w`<div class="fp3d-rp-camera-wrap">
      <button class="fp3d-rp-camera" title=${this.t("camera_live")} @click=${()=>!this.readOnly&&xe(this,e.entity_id)}>
        ${n?w`<img src=${n} alt=${this.name(e.entity_id)} loading="lazy" />`:w`<span class="fp3d-rp-note">${fe(this.hass,e)}</span>`}
        <span class="fp3d-rp-camera-name">${this.name(e.entity_id)}</span>
      </button>
      ${i?w`<button
            class="fp3d-rp-look"
            title=${this.t("through_camera")}
            @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:e.entity_id},bubbles:!0,composed:!0}))}
          >
            ${L("camera_cockpit")?"":"\u{1F512} "}${this.t("through_camera")}
          </button>`:x}
    </div>`}sensorRow(e){let t=I(e.entity_id),n=t==="binary"&&e.state==="on";return w`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${Rt(t)}</span>
      ${this.nameButton(e.entity_id)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
    </div>`}fire(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}static styles=[Ae,Ue,me`
      :host {
        display: block;
      }
      .fp3d-rp {
        /* the host may be pointer-events: none so the 3D view stays usable around the panel */
        pointer-events: auto;
        display: flex;
        flex-direction: column;
        max-height: 100%;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 18px;
        box-shadow: var(--fp3d-shadow);
        overflow: hidden;
      }
      /* time travel: the controls show the past and take no touches (the list still scrolls) */
      .fp3d-rp-ro .fp3d-rp-body :is(button, input, select) {
        pointer-events: none;
      }
      .fp3d-rp-ro-note {
        color: #ffb020;
      }
      .fp3d-rp-head {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        padding: 14px 14px 10px 16px;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-rp-head > div {
        flex: 1;
        min-width: 0;
      }
      h2 {
        margin: 0;
        font: 700 21px var(--fp3d-title-font);
        letter-spacing: -0.01em;
      }
      .fp3d-rp-facts {
        margin: 2px 0 0;
        color: var(--fp3d-muted);
        font-size: 13px;
        font-variant-numeric: tabular-nums;
      }
      @media (pointer: coarse) {
        .fp3d-rp-close {
          width: 40px;
          height: 40px;
        }
        .fp3d-rp-swatch {
          width: 36px;
          height: 36px;
        }
        .fp3d-rp-small {
          min-height: 36px;
        }
      }
      .fp3d-rp-close {
        display: grid;
        place-items: center;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        border: none;
        background: rgba(255, 255, 255, 0.06);
        color: var(--fp3d-text);
        cursor: pointer;
      }
      .fp3d-rp-body {
        overflow-y: auto;
        padding: 6px 14px 16px 16px;
        display: grid;
        gap: 14px;
        overscroll-behavior: contain;
      }
      .fp3d-rp-note {
        color: var(--fp3d-muted);
        font-size: 13px;
        margin: 8px 0 0;
      }
      .fp3d-rp-sec-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 6px;
      }
      h3 {
        margin: 0;
        font-size: 11.5px;
        font-weight: 600;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
      }
      .fp3d-rp-row {
        display: grid;
        grid-template-columns: 28px 1fr auto auto;
        align-items: center;
        gap: 6px 10px;
        padding: 9px 0;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-rp-row:last-child {
        border-bottom: none;
      }
      .fp3d-rp-row > :nth-child(n + 5),
      .fp3d-rp-row > .fp3d-rp-wide {
        grid-column: 2 / -1;
      }
      .fp3d-rp-icon {
        display: grid;
        place-items: center;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        color: var(--fp3d-muted);
        background: rgba(91, 124, 255, 0.12);
      }
      .fp3d-rp-on {
        color: #2a1a00;
        background: var(--fp3d-warm);
        box-shadow: 0 0 14px rgba(255, 181, 71, 0.55);
      }
      .fp3d-rp-name {
        font: inherit;
        font-weight: 500;
        color: var(--fp3d-text);
        background: none;
        border: none;
        padding: 0;
        text-align: left;
        cursor: pointer;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .fp3d-rp-state {
        font-size: 12.5px;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
        max-width: 110px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-rp-row > .fp3d-rp-state:last-child {
        grid-column: 3 / -1;
        justify-self: end;
      }
      .fp3d-switch {
        position: relative;
        width: 44px;
        height: 26px;
        border-radius: 999px;
        border: none;
        background: rgba(255, 255, 255, 0.1);
        cursor: pointer;
      }
      .fp3d-switch::after {
        content: "";
        position: absolute;
        top: 3px;
        left: 3px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #e6eefc;
        transition: transform 0.2s ease;
      }
      .fp3d-switch[aria-checked="true"] {
        background: var(--fp3d-warm);
      }
      .fp3d-switch[aria-checked="true"]::after {
        transform: translateX(18px);
      }
      .fp3d-switch:disabled {
        opacity: 0.4;
        cursor: default;
      }
      .fp3d-rp-slider {
        display: grid;
        grid-template-columns: 110px 1fr;
        align-items: center;
        gap: 10px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-rp-slider input {
        width: 100%;
        accent-color: var(--fp3d-accent);
      }
      .fp3d-rp-ct input {
        accent-color: var(--fp3d-warm);
      }
      .fp3d-rp-swatches,
      .fp3d-rp-buttons,
      .fp3d-rp-chips,
      .fp3d-rp-scenes {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-rp-swatch {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background: var(--c);
        box-shadow: 0 0 10px var(--c);
        cursor: pointer;
      }
      .fp3d-rp-camera {
        position: relative;
        display: block;
        width: 100%;
        aspect-ratio: 16 / 9;
        margin: 6px 0;
        padding: 0;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        overflow: hidden;
        background: #05080f;
        cursor: pointer;
      }
      .fp3d-rp-camera img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      .fp3d-rp-camera-wrap {
        position: relative;
      }
      .fp3d-rp-look {
        position: absolute;
        right: 8px;
        bottom: 12px;
        padding: 4px 10px;
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        background: rgba(7, 11, 20, 0.8);
        color: var(--fp3d-accent);
        font: inherit;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
      }
      .fp3d-rp-camera-name {
        position: absolute;
        left: 8px;
        bottom: 6px;
        padding: 2px 8px;
        border-radius: 8px;
        background: rgba(7, 11, 20, 0.75);
        color: var(--fp3d-text);
        font-size: 12px;
        font-weight: 600;
      }
      .fp3d-rp-more {
        justify-self: start;
      }
      .fp3d-rp-small {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 5px 10px;
        min-height: 30px;
        font-size: 13px;
      }
      .fp3d-rp-stepper {
        display: flex;
        align-items: center;
        gap: 10px;
        font-variant-numeric: tabular-nums;
        font-weight: 600;
      }
      .fp3d-rp-stepper small {
        color: var(--fp3d-muted);
        font-weight: 500;
        margin-right: 4px;
      }
      .fp3d-rp-stepper .fp3d-btn {
        width: 36px;
        padding: 4px 0;
        font-size: 17px;
      }
      .fp3d-rp-chips .fp3d-chip {
        box-shadow: none;
        border: 1px solid var(--fp3d-line);
        min-height: 30px;
        padding: 4px 11px;
        font-size: 13px;
      }
      .fp3d-rp-media {
        margin: 0;
        font-size: 12.5px;
        color: var(--fp3d-muted);
      }
      button:focus-visible,
      input:focus-visible {
        outline: 2px solid var(--fp3d-accent);
        outline-offset: 2px;
      }
    `]};customElements.get("fp3d-room-panel")||customElements.define("fp3d-room-panel",er);var Sd={"clear-night":{},sunny:{},partlycloudy:{cloud:.45},cloudy:{cloud:.9},fog:{fog:1,cloud:.6},hail:{rain:.8,cloud:1},lightning:{lightning:!0,cloud:.9},"lightning-rainy":{rain:.8,lightning:!0,cloud:1},pouring:{rain:1,cloud:1},rainy:{rain:.55,cloud:.85},snowy:{snow:.8,cloud:.9},"snowy-rainy":{rain:.35,snow:.5,cloud:1},windy:{wind:.8,cloud:.2},"windy-variant":{wind:.8,cloud:.7},exceptional:{cloud:.5}};function Tt(o,e){return e&&o.states[e]?e:Object.keys(o.states).filter(t=>t.startsWith("weather.")).sort()[0]??null}function tr(o,e){let t=e?o.states[e]:void 0;if(!t||t.state==="unavailable"||t.state==="unknown")return null;if(t.entity_id.startsWith("binary_sensor."))return t.state==="on"?.6:0;let n=Number(t.state);if(!Number.isFinite(n))return null;let r=String(t.attributes.unit_of_measurement??"").startsWith("in")?n*25.4:n;return r<=.1?0:Math.min(1,.3+r/10)}function aa(o,e,t){let n=e?o.states[e]:void 0;if(!n||n.state==="unavailable"||n.state==="unknown")return null;let i=Sd[n.state];if(!i)return null;let r=n.attributes,s=i.cloud??0;typeof r.cloud_coverage=="number"&&(s=Math.min(1,Math.max(0,r.cloud_coverage/100)));let a=i.wind??0;if(typeof r.wind_speed=="number"){let d=r.wind_speed_unit==="m/s"?r.wind_speed*3.6:r.wind_speed_unit==="mph"?r.wind_speed*1.609:r.wind_speed;a=Math.max(a,Math.min(1,d/60))}let l=tr(o,t);return l!==null&&l>0&&(s=Math.max(s,.85)),{entity:n.entity_id,condition:n.state,rain:l??i.rain??0,snow:i.snow??0,fog:i.fog??0,cloud:s,wind:a,lightning:!!i.lightning}}function la(o,e){let t=new Set(e??Yi);return{...o,rain:t.has("rain")?o.rain:0,snow:t.has("snow")?o.snow:0,fog:t.has("fog")?o.fog:0,cloud:t.has("clouds")?o.cloud:0,lightning:t.has("lightning")&&o.lightning,sky:t.has("sky")}}var $d=/(pool|schwimm|piscine|piscina|zwembad|basen|bazen)/;function ca(o,e){let[t,n,i,r]=o==="ph"?[7,7.4,6.8,7.8]:o==="orp"?[650,800,600,850]:[.3,1.5,.1,3];return e>=t&&e<=n?"ok":e>=i&&e<=r?"warn":"bad"}function Un(o,e){let t=e??{},n=Object.keys(o.states),i=u=>`${u} ${o.states[u]?.attributes.friendly_name??""}`.toLowerCase().replace(/[\s-]+/g,"_"),r=u=>String(o.states[u]?.attributes.device_class??""),s=u=>String(o.states[u]?.attributes.unit_of_measurement??""),a=n.filter(u=>$d.test(i(u))),l=(u,h)=>u.find(h)??null,d=(u,h)=>{let f=t[u];return f==="none"?null:f??h()},c=u=>u.split(".")[0];return{temperature:d("temperature",()=>l(a,u=>c(u)==="sensor"&&(r(u)==="temperature"||/°[CF]/.test(s(u)))&&/(wasser|water|eau|agua|acqua)/.test(i(u)))??l(a,u=>c(u)==="sensor"&&(r(u)==="temperature"||/°[CF]/.test(s(u))))),heater:d("heater",()=>l(a,u=>c(u)==="climate"||c(u)==="water_heater")??l(a,u=>/^(switch|input_boolean)$/.test(c(u))&&/(w(ae|ä)rmepumpe|heat|heiz|chauff)/.test(i(u)))),pump:d("pump",()=>l(a,u=>/^(switch|fan|input_boolean)$/.test(c(u))&&/(pump|pumpe|filter|pompe|bomba)/.test(i(u)))??l(a,u=>c(u)==="binary_sensor"&&/(pump|pumpe|filter)/.test(i(u)))),light:d("light",()=>l(a,u=>c(u)==="light")),ph:d("ph",()=>{let u=h=>c(h)==="sensor"&&(r(h)==="ph"||s(h).toLowerCase()==="ph"||/(^|[._])ph($|_)/.test(i(h)));return l(a,u)??l(n,u)}),chlorine:d("chlorine",()=>l(a,h=>c(h)==="sensor"&&(/(orp|redox|chlor|chlore|cloro)/.test(i(h))||s(h)==="mV"))??l(n,h=>c(h)==="sensor"&&/(orp|redox|chlor)/.test(i(h)))),cover:d("cover",()=>l(a,u=>c(u)==="cover"))}}function Gn(o){if(!o||N(o))return null;let e=Number(o.state);return o.state!==""&&Number.isFinite(e)?e:null}function Ft(o,e){let t={...o??{}},n=i=>{for(let r of e)for(let s of r.furniture)if(s.type===i&&s.entity&&s.entity!=="none")return s.entity};return t.pump||(t.pump=n("pool_pump")),t.heater||(t.heater=n("pool_heat_pump")),t}function it(o,e){let t=Un(o,e),n=k=>k?o.states[k]:void 0,i=n(t.heater),r=n(t.temperature),s=Gn(r),a=String(r?.attributes.unit_of_measurement??"");s===null&&i&&typeof i.attributes.current_temperature=="number"&&(s=i.attributes.current_temperature),a||(a=String(o.config?.unit_system?.temperature??"\xB0C"));let l=null;if(i&&t.heater&&!N(i)){let k=i.attributes,z=t.heater.startsWith("climate.")?"climate":t.heater.startsWith("water_heater.")?"water_heater":"switch",A=z==="switch"?i.state==="on":i.state!=="off",S=String(k.hvac_action??""),v=typeof k.temperature=="number"?k.temperature:null,P=z==="switch"?A:S?S==="heating":A&&v!==null&&s!==null&&s<v-.2;l={id:t.heater,kind:z,on:A,heating:P,target:v,step:typeof k.target_temp_step=="number"?k.target_temp_step:.5,min:typeof k.min_temp=="number"?k.min_temp:10,max:typeof k.max_temp=="number"?k.max_temp:40}}let d=null,c=n(t.pump);if(c&&t.pump&&!N(c)){let k=t.pump.startsWith("sensor.")?Gn(c):null,z=String(c.attributes.unit_of_measurement??"")==="kW",A=k===null?null:z?k*1e3:k;d={id:t.pump,on:A!==null?A>20:c.state==="on",watts:A,switchable:/^(switch|fan|input_boolean)\./.test(t.pump)}}let u=null,h=n(t.light);if(h&&t.light&&!N(h)){let k=t.light.startsWith("light.")?Oe(h):h.state==="on"?{color:[.3,.75,1],level:1}:null;u={id:t.light,on:!!k,color:k?.color??[.3,.75,1],level:k?.level??0}}let f=Gn(n(t.ph)),p=n(t.chlorine),g=Gn(p),m=String(p?.attributes.unit_of_measurement??""),y=m==="mV"||g!==null&&g>50,_=null,b=n(t.cover);if(b&&t.cover&&!N(b)){let k=b.attributes.current_position,z=typeof k=="number"?1-Math.max(0,Math.min(100,k))/100:b.state==="closed"?1:b.state==="open"?0:.5;_={id:t.cover,closed:z,moving:b.state==="opening"||b.state==="closing"}}return{entities:t,temp:s,unit:a||"\xB0C",heater:l,pump:d,light:u,ph:f===null?null:{value:f,range:ca("ph",f)},chlorine:g===null?null:{value:g,unit:y?"mV":m||"mg/l",orp:y,range:ca(y?"orp":"chlorine",g)},cover:_}}function st(o){return o.flatMap(e=>(e.outdoor??[]).filter(t=>t.type==="pool"&&t.pool&&t.points.length>=3).map(t=>({floor:e,area:t})))}function da(o,e){return st(e).flatMap(({area:t})=>Object.values(Un(o,t.pool)).filter(n=>!!n))}function ua(o){if(o.light?.on)return{color:o.light.color,level:.35+.65*o.light.level};if(o.temp===null)return{color:[.1,.45,.8],level:.18};let e=o.unit.includes("F")?(o.temp-32)*5/9:o.temp,t=Math.max(0,Math.min(1,(e-14)/16));return{color:[.08+.1*t,.35+.45*t,.85-.1*t],level:.16+.12*t}}var Md=new Set(["ob","on_battery","onbattery","on battery","battery","outage","power_outage","power outage","offline","off_grid","no_grid"]),Pd=new Set(["power","plug","connectivity","running"]);function jn(o){if(!o||o.state==="unavailable"||o.state==="unknown")return!1;let e=o.entity_id.split(".")[0];if(e==="binary_sensor")return Pd.has(String(o.attributes.device_class))?o.state==="off":o.state==="on";if(e==="input_boolean"||e==="switch")return o.state==="on";let t=Number(o.state);if(o.state!==""&&Number.isFinite(t))return o.attributes.unit_of_measurement==="V"&&t<100;let n=String(o.state).toLowerCase().trim();return Md.has(n)||n.startsWith("ob ")}var Ed=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),ha={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"};function nr(o,e,t){let n=[];for(let c of e.floors)for(let u of c.rooms){let h=se(o,u.area_id).filter(f=>f.startsWith("binary_sensor.")&&!!ha[String(o.states[f]?.attributes.device_class)]);h.length&&n.push({floorId:c.id,roomId:u.id,sensors:h})}let i=Object.keys(o.states),r=e.settings.rain_warning===!1?null:Tt(o,t??e.settings.weather_entity),s=e.settings.outage_entity&&o.states[e.settings.outage_entity]?e.settings.outage_entity:null,a=L("pool")?st(e.floors).map(({floor:c,area:u})=>({floorId:c.id,areaId:u.id,ids:Object.values(Un(o,u.pool)).filter(h=>!!h)})):[],l=e.settings.rain_warning===!1?null:e.settings.rain_entity,d=l&&o.states[l]?l:null;return{rooms:n,alarms:i.filter(c=>c.startsWith("alarm_control_panel.")),weather:r,outage:s,pools:a,rain:d}}function or(o){return[...o.rooms.flatMap(e=>e.sensors),...o.alarms,...o.weather?[o.weather]:[],...o.outage?[o.outage]:[],...o.rain?[o.rain]:[],...(o.pools??[]).flatMap(e=>e.ids)]}function pa(o,e,t,n){let i=[];for(let a of t.rooms)for(let l of a.sensors){let d=o.states[l];d?.state==="on"&&i.push({kind:ha[String(d.attributes.device_class)],entity:l,roomId:a.roomId,floorId:a.floorId})}let r=t.rain?tr(o,t.rain):null;if(r!==null?r>0:!!t.weather&&Ed.has(o.states[t.weather]?.state??""))for(let a of e.floors)for(let l of a.openings){if(l.type!=="window"||l.rain_ignore)continue;let d=n.get(l.id);if(!d)continue;let c=Be(o,d,"window");c.open<.5&&c.tilt<.5&&c.open2<.5&&c.tilt2<.5||i.push({kind:"window_rain",entity:d.contact??d.tilt??d.contact2??l.id,roomId:l.room_id,floorId:a.id})}t.outage&&jn(o.states[t.outage])&&i.push({kind:"power_outage",entity:t.outage,roomId:null,floorId:null});for(let a of t.pools??[]){let l=e.floors.find(u=>u.id===a.floorId)?.outdoor?.find(u=>u.id===a.areaId);if(!l)continue;let d=it(o,Ft(l.pool,e.floors));d.ph?.range==="bad"&&d.entities.ph&&i.push({kind:"pool_ph",entity:d.entities.ph,roomId:null,floorId:a.floorId}),d.chlorine?.range==="bad"&&d.entities.chlorine&&i.push({kind:"pool_chlorine",entity:d.entities.chlorine,roomId:null,floorId:a.floorId});let c=d.temp===null?null:d.unit.includes("F")?(d.temp-32)*5/9:d.temp;c!==null&&c<=3&&!d.pump?.on&&i.push({kind:"pool_frost",entity:d.entities.temperature??d.entities.heater??a.areaId,roomId:null,floorId:a.floorId})}for(let a of t.alarms){let l=o.states[a]?.state;l==="triggered"?i.push({kind:"alarm",entity:a,roomId:null,floorId:null}):l==="pending"&&i.push({kind:"alarm_pending",entity:a,roomId:null,floorId:null})}return i}function fa(o){switch(o){case"water":return[.2,.6,1];case"window_rain":return[.35,.72,1];case"alarm_pending":return[1,.62,.2];case"power_outage":return[1,.78,.2];case"pool_ph":case"pool_chlorine":return[1,.62,.2];case"pool_frost":return[.55,.8,1];default:return[1,.2,.25]}}function rr(o,e,t){let n=t.roomId?e.floors.flatMap(a=>a.rooms).find(a=>a.id===t.roomId):null,i=o?.states[t.entity],r=t.kind.startsWith("pool_")&&i?`${i.state}${i.attributes.unit_of_measurement?` ${i.attributes.unit_of_measurement}`:""}`:o?Z(o,t.entity):t.entity,s=T(o,`alert_${t.kind}`,{name:r});return n?e.settings.alert_names===!1?`${n.name} \xB7 ${T(o,`alert_short_${t.kind}`)}`:`${n.name} \xB7 ${s}`:s}var ie=["#3a3f47","#3a3f47"],at=["#23262b","#23262b"],Se=["#5a3b25","#5a3b25"],ee=["#1f4fa8","#1f4fa8"],je=["#e3b616","#e3b616"],U=["#2f7d3b","#2f7d3b"],ma={default:{rest:ie,bio:Se,paper:ee,plastic:je,glass:U,garden:U,recycling:je,other:ie},DE:{rest:at,bio:Se,paper:ee,plastic:je,glass:U,garden:U,recycling:je},AT:{rest:ie,bio:Se,paper:[ie[0],"#c0262d"],plastic:je,glass:U,garden:U},CH:{rest:["#d8d8d8","#d8d8d8"],bio:U,paper:ee,plastic:ie,glass:U,garden:U},NL:{rest:ie,bio:U,paper:ee,plastic:["#3a3f47","#e57a1f"],glass:U,garden:U},BE:{rest:ie,bio:U,paper:ee,plastic:ee,glass:U,garden:U},GB:{rest:at,bio:["#3a3f47","#5a3b25"],paper:ee,plastic:ee,glass:at,garden:Se,recycling:ee},US:{rest:at,bio:U,paper:ee,plastic:ee,glass:ee,garden:U,recycling:ee},CA:{rest:at,bio:U,paper:ee,plastic:ee,glass:ee,garden:U,recycling:ee},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:ie,bio:Se,paper:[ie[0],"#e3b616"],plastic:[ie[0],"#e3b616"],recycling:[ie[0],"#e3b616"],glass:U,garden:U},IT:{rest:ie,bio:Se,paper:ee,plastic:je,glass:U,garden:U},ES:{rest:ie,bio:Se,paper:ee,plastic:je,glass:U,garden:U},PT:{rest:ie,bio:Se,paper:ee,plastic:je,glass:U,garden:U},DK:{rest:at,bio:U,paper:ee,plastic:ie,glass:U,garden:U},SE:{rest:at,bio:Se,paper:ee,plastic:ie,glass:U,garden:U},NO:{rest:ie,bio:Se,paper:ee,plastic:ie,glass:U,garden:U},FI:{rest:ie,bio:Se,paper:ee,plastic:ie,glass:U,garden:U}},ba="DE";function wa(o){ba=o}function va(o){let e=o?.config?.country;if(e)return e.toUpperCase();let t=(o?.language??"").split("-")[1];return t?t.toUpperCase():"DE"}function zd(o,e){return ma[e]?.[o]??ma.default[o]??ie}function ya(o,e=ba){let t=zd(o.bin_kind??"rest",e),n=o.bin_color||t[0];return[n,o.bin_lid||(o.bin_color?n:t[1])]}var Ad={rest:["rest","hausm\xFCll","hausmuell","general","garbage","trash","refuse","landfill","residual","black bin","grijs","ordures","m\xE9nag","indifferenzia","secco","residu","restavfall","sekaj\xE4te","sekajate","dagrenovation","hushold","kommunal","zmieszane","sm\u011Bsn","smesn","vegyes","rifiut","basura","resto","lixo","indiferenciad","\u5176\u4ED6\u5783\u573E"],bio:["bio","organic","food","gft","vgf","compost","kompost","organico","organique","umido","matavfall","bioj\xE4te","biojate","madaffald","bioaffald","bioodpad","organik","org\xE1nic","organic","\u53A8\u4F59"],paper:["papier","paper","papp","karton","cardboard","carta","cart\xF3n","carton","pap\xEDr","paperi","papper","pap ","pap\xEDr","papel","makulatur","\u7EB8"],plastic:["gelb","gelbe","verpackung","lvp","plastic","plastik","plastica","pmd","emballage","packaging","envases","embalag","muovi","f\xF6rpackning","forpackning","emballasje","obaly","m\u0171anyag","tworzyw","\u5851\u6599"],glass:["glas","glass","verre","vetro","vidrio","vidro","lasi","sklo","\xFCveg","szk\u0142o","\u73BB\u7483"],garden:["garten","gr\xFCn","gruen","baum","laub","garden","yard","green waste","tuin","snoei","sfalci","potature","d\xE9chets verts","dechets verts","jard\xEDn","jardin","tr\xE4dg\xE5rd","tradgard","have","puutarha","zahrad","z\xF6ld","zielone"],recycling:["recycl","wertstoff","recyclage","riciclo","reciclaje","kierr\xE4tys","\xE5tervinning","genbrug","gjenvinning","\u53EF\u56DE\u6536"]};function ga(o,e,t){let n=` ${o.toLowerCase()} `;return t&&t.trim()?t.toLowerCase().split(/[,;|]/).some(i=>i.trim()&&n.includes(i.trim())):e==="other"?!1:Ad[e].some(i=>n.includes(i))}function ka(o){let e=typeof o=="string"?o:o?.date??o?.dateTime;if(!e)return null;let t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e),n=t?new Date(Number(t[1]),Number(t[2])-1,Number(t[3])):new Date(e);return Number.isNaN(n.getTime())?null:new Date(n.getFullYear(),n.getMonth(),n.getDate())}function Rd(o){return o.map(e=>({day:ka(e.start),summary:String(e.summary??"")})).filter(e=>!!e.day).sort((e,t)=>e.day.getTime()-t.day.getTime())}function xa(o){let e=new Set;for(let t of o.flatMap(n=>n.furniture))t.type==="waste_bin"&&typeof t.bin_source=="string"&&t.bin_source.startsWith("calendar.")&&e.add(t.bin_source);return[...e]}async function ar(o,e,t=new Date,n=10){let i=new Map,r=o.callApi;if(!r)return i;let s=new Date(t.getFullYear(),t.getMonth(),t.getDate()),a=new Date(s.getTime()+n*864e5);return await Promise.all(e.map(async l=>{try{let d=await r.call(o,"GET",`calendars/${l}?start=${encodeURIComponent(s.toISOString())}&end=${encodeURIComponent(a.toISOString())}`);i.set(l,Rd(Array.isArray(d)?d:[]))}catch{}})),i}var sr=o=>new Date(o.getFullYear(),o.getMonth(),o.getDate()),qn=(o,e)=>Math.round((sr(e).getTime()-sr(o).getTime())/864e5);function ir(o,e){return o===1&&e.getHours()>=14||o===0&&e.getHours()<12}function Sa(o,e,t,n=new Date){let i=typeof o.bin_source=="string"&&o.bin_source!=="none"?o.bin_source:null;if(!i)return null;let r=sr(n);if(i.startsWith("calendar.")){let d=(t.get(i)??[]).find(u=>u.day>=r&&ga(u.summary,o.bin_kind??"rest",o.bin_match));if(!d)return null;let c=qn(r,d.day);if(c===0&&n.getHours()>=12){let u=(t.get(i)??[]).find(h=>h.day>r&&ga(h.summary,o.bin_kind??"rest",o.bin_match));if(u)return{days:qn(r,u.day),day:u.day,summary:u.summary,glow:ir(qn(r,u.day),n)}}return{days:c,day:d.day,summary:d.summary,glow:ir(c,n)}}let s=e.states[i];if(!s)return null;let a=Td(s,n);if(a===null||a<0)return null;let l=new Date(r.getTime()+a*864e5);return{days:a,day:l,summary:String(s.attributes.friendly_name??""),glow:ir(a,n)}}function Td(o,e=new Date){let t=o.attributes;if(typeof t.daysTo=="number")return t.daysTo;let n=String(o.state).trim();if(/^-?\d+(\.\d+)?$/.test(n))return Math.round(Number(n));let i=ka(n);if(i)return qn(e,i);let r=n.toLowerCase();if(/(^|\s)(heute|today|vandaag|aujourd|oggi|hoy|hoje|idag|i dag|tänään|dnes|ma$|dziś|dzis|今天)/.test(r))return 0;if(/(^|\s)(morgen|tomorrow|demain|domani|mañana|amanhã|imorgon|i morgen|huomenna|zítra|holnap|jutro|明天)/.test(r))return 1;let s=/(\d+)/.exec(r);return s?Number(s[1]):null}var Fd=new Set(["on","open","true","detected","home"]);function _a(o){let e=o?.last_changed?Date.parse(o.last_changed):NaN;return Number.isFinite(e)?e:null}function $a(o,e,t=Date.now()){let n=typeof o.entity=="string"&&o.entity!=="none"?o.entity:null;if(!n)return!1;let i=e.states[n];if(!i||i.state==="unavailable"||i.state==="unknown")return!1;let r=typeof o.mailbox_door=="string"&&o.mailbox_door!=="none"?o.mailbox_door:null;if(!r){let l=Number(i.state);return Fd.has(i.state.toLowerCase())||Number.isFinite(l)&&l>0}let s=_a(i),a=_a(e.states[r]);return s===null||t-s>7*864e5?!1:a===null||s>a+1e3}function Ma(o){return o.type==="waste_bin"?[o.bin_source??null]:o.type==="mailbox"?[o.entity??null,o.mailbox_door??null]:[]}var ve=.03,Zn=o=>o&&o!=="none"?o:null;function Ht(o,e=t=>Zn(t.power)){let t={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of o.floors)for(let i of n.furniture){let r=e(i);if(i.type==="meter")t.grid??=r,t.gridExport??=Zn(i.export);else if(i.type==="inverter"&&r&&!t.solar.includes(r))t.solar.push(r);else if(i.type==="home_battery"){r&&!t.battery.includes(r)&&t.battery.push(r);let s=Zn(i.charge);s&&!t.charge.includes(s)&&t.charge.push(s),(r||s)&&t.batteries.push({power:r,charge:s});let a=Zn(i.soc);a&&!t.soc.includes(a)&&t.soc.push(a)}}return t}function cr(o){for(let e of o.floors){let t=e.furniture.find(n=>n.type==="meter");if(t)return{floor_id:e.id,x:t.x,z:t.z}}return o.energy.meter}async function Fa(o,e){let t=new Date;t.setHours(0,0,0,0);try{let n=await o.callWS({type:"recorder/statistics_during_period",start_time:t.toISOString(),statistic_ids:e,period:"hour",types:["change"]}),i=new Map;for(let r of e)i.set(r,(n?.[r]??[]).reduce((s,a)=>s+(typeof a.change=="number"?a.change:0),0));return i}catch{return null}}var Dd=.07;function ne(o,e=!1){if(!o)return null;let t=Number(o.state);if(!Number.isFinite(t))return null;let n=String(o.attributes.unit_of_measurement??"W"),i=n==="kW"?t*1e3:n==="MW"?t*1e6:t;return e?-i:i}function Hd(o,e){return e.startsWith("sensor.")&&o.states[e]?.attributes.device_class==="power"}function fn(o,e){if(Hd(o,e))return e;let t=o.entities?.[e]?.device_id;if(!t)return null;let n=ks(o,t),i=n?en(o,e):null;return Io(o,t).find(r=>r!==e&&(!n||i!==null&&en(o,r)===i))??null}function Da(o,e){let t=e.energy,n=new Set([t.grid,t.solar,t.battery].filter(Boolean)),i=[],r=new Set;for(let s of e.floors)for(let a of s.placements){let l=fn(o,a.entity_id);!l||n.has(l)||r.has(l)||(r.add(l),i.push({id:a.entity_id,powerEntity:l,floorId:s.id,x:a.x,z:a.z,power:Math.max(0,ne(o.states[l])??0)}))}return i}function Ha(o,e,t,n=Ht(e)){let i=e.energy,r=i.grid??n.grid,s=r?ne(o.states[r],i.grid_invert):null;if(!i.grid&&n.gridExport){let g=Math.max(0,ne(o.states[n.gridExport])??0);s=Math.max(0,s??0)-g}let a=i.solar?ne(o.states[i.solar]):null;if(!i.solar&&n.solar.length){let g=n.solar.map(m=>ne(o.states[m])).filter(m=>m!==null);a=g.length?g.reduce((m,y)=>m+y,0):null}let l=i.battery?ne(o.states[i.battery],i.battery_invert):null;if(!i.battery&&n.batteries.length){let g=n.batteries.map(m=>{if(m.charge){let y=m.power?Math.max(0,ne(o.states[m.power])??0):0,_=Math.max(0,ne(o.states[m.charge])??0);return y-_}return m.power?ne(o.states[m.power],i.battery_invert):null}).filter(m=>m!==null);l=g.length?g.reduce((m,y)=>m+y,0):null}let c=(i.battery_soc?[i.battery_soc]:n.soc).map(g=>Number(o.states[g]?.state)).filter(g=>Number.isFinite(g)),u=c.length?c.reduce((g,m)=>g+m,0)/c.length:NaN,h=i.tariff?o.states[i.tariff]:void 0,f=Number(h?.state),p=i.consumption?ne(o.states[i.consumption]):null;return p!==null?p=Math.max(0,p):s!==null||a!==null||l!==null?p=Math.max(0,(s??0)+Math.max(0,a??0)+(l??0)):t.length&&(p=t.reduce((g,m)=>g+m.power,0)),{grid:s,solar:a===null?null:Math.max(0,a),battery:l,soc:Number.isFinite(u)?u:null,tariff:h&&Number.isFinite(f)?{value:f,unit:String(h.attributes.unit_of_measurement??"")}:null,consumption:p}}function ct(o,e){return o.pos.push(e),o.adj.push([]),o.pos.length-1}function lt(o,e,t){let n=Math.hypot(o.pos[e][0]-o.pos[t][0],o.pos[e][1]-o.pos[t][1]);o.adj[e].push({to:t,w:n}),o.adj[t].push({to:e,w:n})}function Id(o,e){let t=o.length,n=o.map((i,r)=>{let s=o[(r+1)%t],a=s[0]-i[0],l=s[1]-i[1],d=Math.hypot(a,l)||1,c=-l/d,u=a/d;return{p:[i[0]+c*e[r],i[1]+u*e[r]],d:[a/d,l/d],n:[c,u]}});return o.map((i,r)=>{let s=n[(r-1+t)%t],a=n[r],l=s.d[0]*a.d[1]-s.d[1]*a.d[0];if(Math.abs(l)<1e-6)return[i[0]+a.n[0]*e[r],i[1]+a.n[1]*e[r]];let d=((a.p[0]-s.p[0])*a.d[1]-(a.p[1]-s.p[1])*a.d[0])/l;return[s.p[0]+s.d[0]*d,s.p[1]+s.d[1]*d]})}function Wd(o){return Le(o.points)>=0?{pts:o.points,flipped:!1}:{pts:[...o.points].reverse(),flipped:!0}}function dr(o,e,t){let n={pos:[],adj:[],rings:new Map},{walls:i}=zt(o.rooms,{exterior:e,interior:t},o.walls??[]);for(let r of o.rooms){if(r.points.length<3)continue;let{pts:s,flipped:a}=Wd(r),l=s.length,d=s.map((h,f)=>{let p=a?(l-2-f+l)%l:f,g=i.some(m=>!m.exterior&&m.sources.some(y=>y.room_id===r.id&&y.edge===p));return Dd+(g?t/2:0)}),c=Id(s,d).map(h=>ct(n,h)),u=c.map((h,f)=>[h,c[(f+1)%l]]);for(let[h,f]of u)lt(n,h,f);n.rings.set(r.id,u)}for(let r of i){if(r.exterior||!r.roomLeft||!r.roomRight)continue;let s=[(r.a[0]+r.b[0])/2,(r.a[1]+r.b[1])/2],a=Yn(n,r.roomLeft,s),l=Yn(n,r.roomRight,s);a!==null&&l!==null&&lt(n,a,l)}return n}function Yn(o,e,t){let n=o.rings.get(e);if(!n)return null;let i=null;for(let s of n){let a=o.pos[s[0]],l=o.pos[s[1]],d=l[0]-a[0],c=l[1]-a[1],u=d*d+c*c||1,h=Math.min(1,Math.max(0,((t[0]-a[0])*d+(t[1]-a[1])*c)/u)),f=[a[0]+d*h,a[1]+c*h],p=Math.hypot(t[0]-f[0],t[1]-f[1]);(!i||p<i.d)&&(i={seg:s,q:f,d:p})}if(!i)return null;let r=ct(o,i.q);return lt(o,r,i.seg[0]),lt(o,r,i.seg[1]),r}function Xn(o,e,t){let n=o.pos[t],i=Yn(o,e.id,n);if(i===null)return!1;let r=o.pos[i],s=o.pos[o.adj[i][0].to],a=o.pos[o.adj[i][1].to],l=Math.hypot(a[0]-s[0],a[1]-s[1])||1,d=[(a[0]-s[0])/l,(a[1]-s[1])/l],c=(n[0]-r[0])*d[0]+(n[1]-r[1])*d[1],u=(n[1]-r[1])*d[0]-(n[0]-r[0])*d[1];if(Math.abs(c)<.01||Math.abs(u)<.01)return lt(o,t,i),!0;let h=[r[0]+d[0]*c,r[1]+d[1]*c],f=[r[0]-d[1]*u,r[1]+d[0]*u],p=ct(o,V(f,e.points)||!V(h,e.points)?f:h);return lt(o,i,p),lt(o,p,t),!0}function pn(o,e){let t=o.rooms.filter(r=>r.points.length>=3),n=t.find(r=>V(e,r.points));if(n)return n;let i=null;for(let r of t)for(let s of r.points){let a=Math.hypot(e[0]-s[0],e[1]-s[1]);(!i||a<i.d)&&(i={room:r,d:a})}return i?.room??null}function Ia(o,e){let t=o.pos.map(()=>1/0),n=o.pos.map(()=>-1),i=o.pos.map(()=>!1);for(t[e]=0;;){let r=-1;for(let s=0;s<t.length;s++)!i[s]&&t[s]<1/0&&(r<0||t[s]<t[r])&&(r=s);if(r<0)break;i[r]=!0;for(let{to:s,w:a}of o.adj[r])t[r]+a<t[s]-1e-9&&(t[s]=t[r]+a,n[s]=r)}return{dist:t,prev:n}}function Pa(o,e){return o.every(t=>e[t].kind==="battery")?"battery":o.every(t=>e[t].kind==="wallbox")?"wallbox":"consumer"}var Ea=new WeakMap;function Ld(o,e){let t=cr(o),n=o.floors.find(c=>c.id===t.floor_id),i=[],{wall_exterior:r,wall_interior:s}=o.settings,a=new Map,l=new Map;e.forEach((c,u)=>l.set(c.floorId,[...l.get(c.floorId)??[],u]));let d=o.floors.filter(c=>l.has(c.id));for(let c of d){if(c.id===n.id)continue;let u=c.elevation>n.elevation,h=l.get(c.id),f=Pa(h,e);i.push({floorId:n.id,a:[t.x,ve,t.z],b:[t.x,u?n.height:-.2,t.z],dist:0,members:h,kind:f});let p=Math.abs(c.elevation-n.elevation);i.push({floorId:c.id,a:[t.x,u?-.2:c.height,t.z],b:[t.x,ve,t.z],dist:p,members:h,kind:f}),a.set(c.id,p+.25)}for(let c of d){let u=dr(c,r,s),h=pn(c,[t.x,t.z]);if(!h)continue;let f=ct(u,[t.x,t.z]);if(!Xn(u,h,f))continue;let p=[];for(let b of l.get(c.id)){let k=e[b],z=pn(c,[k.x,k.z]);if(!z)continue;let A=ct(u,[k.x,k.z]);Xn(u,z,A)&&p.push({node:A,member:b})}let{dist:g,prev:m}=Ia(u,f),y=new Map;for(let b of p)if(Number.isFinite(g[b.node]))for(let k=b.node;m[k]>=0;k=m[k]){let z=m[k],A=`${z}>${k}`,S=y.get(A)??{a:z,b:k,members:[]};S.members.push(b.member),y.set(A,S)}let _=a.get(c.id)??0;for(let{a:b,b:k,members:z}of y.values()){let A=u.pos[b],S=u.pos[k],v=Pa(z,e);i.push({floorId:c.id,a:[A[0],ve,A[1]],b:[S[0],ve,S[1]],dist:_+g[b],members:z,kind:v})}}return i}function Wa({building:o,consumers:e,summary:t,battery:n,fieldPower:i,devicePower:r}){let s=cr(o);if(!s)return[];let a=o.floors.find(M=>M.id===s.floor_id);if(!a)return[];let l=M=>r?.get(M),d=lr(o,"inverter"),c=lr(o,"home_battery");!c.length&&n&&c.push({id:"battery",type:"home_battery",floorId:n.floorId,x:n.x,z:n.z,h:1.1,variant:null});let u=M=>{let E=null;for(let F of d)F.floorId===M.floorId&&(!E||Math.hypot(F.x-M.x,F.z-M.z)<Math.hypot(E.x-M.x,E.z-M.z))&&(E=F);return E},h=M=>l(M.id)??(c.length===1?t.battery??0:0),f=new Map;for(let M of c){let E=u(M);E&&f.set(M.id,E)}let p=e.map(M=>({floorId:M.floorId,x:M.x,z:M.z,kind:M.wallbox?"wallbox":"consumer",power:M.power}));for(let M of c)!f.has(M.id)&&t.battery!==null&&p.push({floorId:M.floorId,x:M.x,z:M.z,kind:"battery",power:Math.abs(h(M))});let g=`${s.floor_id}:${s.x},${s.z}|${p.map(M=>`${M.floorId}:${M.x},${M.z}:${M.kind}`).join(";")}`,m=Ea.get(o);m||Ea.set(o,m=new Map);let y=m.get(g);y||(y=Ld(o,p),m.clear(),m.set(g,y));let _=y.map(M=>({floorId:M.floorId,a:M.a,b:M.b,dist:M.dist,power:M.members.reduce((E,F)=>E+p[F].power,0),kind:M.kind})),b=t.grid!==null?ur(o):null,k=o.settings.roof.cables??[],z=M=>k.find(E=>E.id===M),A=(M,E)=>M.map(F=>({...F,key:E}));if(b){let M=t.grid>=0,E=z("grid"),F=E?hn(o,E,[b.end[0],a.elevation+Math.max(ve,b.height),b.end[1]],[s.x,a.elevation+.4+1.1,s.z]):[...b.height>.05?[[b.end[0],b.height,b.end[1]]]:[],[b.end[0],ve,b.end[1]],[b.wall[0],ve,b.wall[1]],[s.x,ve,s.z]],G=E?Dt(o,M?F:[...F].reverse(),Math.abs(t.grid),M?"grid":"export",a):Ca(a.id,M?F:[...F].reverse(),Math.abs(t.grid),M?"grid":"export",0);_.push(...A(G,"grid"))}if(t.battery!==null&&t.battery>0)for(let M of _)M.kind==="battery"&&([M.a,M.b]=[M.b,M.a]);let S=o.settings.roof.solar??[],v=o.settings.roof.strings??[],P=new Map;if(i&&S.length){let M=[...At(o),...un(o)];for(let E of S){let F=i.get(E.id)??0,G=E.string?v.find(ae=>ae.id===E.string)?.inverter:null,C=G?c.find(ae=>ae.id===G)??null:null,O=G&&!C?d.find(ae=>ae.id===G)??null:null;if(C){let ae=f.get(C.id);ae&&P.set(ae.id,(P.get(ae.id)??0)+F);let _e=C.variant==="wall"?.5+C.h:.9,Pe=z(`solar:${E.id}`),Ee=Pe?Ra(o,E):null,dt=o.floors.find(ye=>ye.id===C.floorId);Pe&&Ee&&dt?_.push(...A(Dt(o,hn(o,Pe,Ee,[C.x,dt.elevation+_e,C.z]),F,"solar",dt),`solar:${E.id}`)):_.push(...A(Ta(o,E,F,C,_e),`solar:${E.id}`));continue}if(!O&&d.length){let ae=ot(o,E,M),_e=ae?sa(ae,E):[E.u,E.v];O=d.reduce((Pe,Ee)=>!Pe||Math.hypot(Ee.x-_e[0],Ee.z-_e[1])<Math.hypot(Pe.x-_e[0],Pe.z-_e[1])?Ee:Pe,null)}O&&P.set(O.id,(P.get(O.id)??0)+F);let j=O??{floorId:s.floor_id,x:s.x,z:s.z},oe=O?1.1+O.h:1.5,H=z(`solar:${E.id}`),Q=H?Ra(o,E):null,ce=o.floors.find(ae=>ae.id===j.floorId);H&&Q&&ce?_.push(...A(Dt(o,hn(o,H,Q,[j.x,ce.elevation+oe,j.z]),F,"solar",ce),`solar:${E.id}`)):_.push(...A(Ta(o,E,F,j,oe),`solar:${E.id}`))}}else t.solar!==null&&!d.length&&_.push({floorId:a.id,a:[s.x+.08,a.height+.6,s.z+.08],b:[s.x+.08,ve,s.z+.08],dist:0,power:t.solar,kind:"solar"});for(let M of d){let E=1.1+M.h,F=c.filter(O=>f.get(O.id)===M),G=l(M.id);if(G===void 0){G=P.get(M.id)??(d.length===1?t.solar??0:0);for(let O of F)G+=h(O)}let C=o.floors.find(O=>O.id===M.floorId);if(t.solar!==null||t.battery!==null){let O=z(`inv:${M.id}`),j=O&&C?Dt(o,hn(o,O,[M.x,C.elevation+E,M.z],[s.x,a.elevation+1.5,s.z]),Math.max(0,G),"inverter",C):Aa(o,M,E,{floorId:s.floor_id,x:s.x,z:s.z},1.5,Math.max(0,G),"inverter",0);_.push(...A(j,`inv:${M.id}`))}for(let O of F){let j=h(O);if(t.battery===null&&l(O.id)===void 0)continue;let oe=O.variant==="wall"?.5+O.h:.9,H=z(`bat:${O.id}`),Q=H&&C?Dt(o,hn(o,H,[M.x,C.elevation+E-.1,M.z],[O.x,C.elevation+oe,O.z]),Math.abs(j),"battery",C):Aa(o,M,E-.1,O,oe,Math.abs(j),"battery",0);_.push(...A(j<=0?Q:Q.map(ce=>({...ce,a:ce.b,b:ce.a})).reverse(),`bat:${O.id}`))}}return _}function ur(o){let e=cr(o),t=e?o.floors.find(f=>f.id===e.floor_id):void 0;if(!e||!t)return null;let{wall_exterior:n,wall_interior:i}=o.settings,{walls:r}=zt(t.rooms,{exterior:n,interior:i},t.walls??[]),s=lr(o,"grid_point")[0],a=r.filter(f=>f.exterior);if(s){let f=null;for(let m of a){let y=m.b[0]-m.a[0],_=m.b[1]-m.a[1],b=s.x-e.x,k=s.z-e.z,z=b*_-k*y;if(Math.abs(z)<1e-9)continue;let A=((m.a[0]-e.x)*_-(m.a[1]-e.z)*y)/z,S=((m.a[0]-e.x)*k-(m.a[1]-e.z)*b)/z;if(A<=0||A>1||S<0||S>1||f&&A>=f.t)continue;let v=Math.hypot(y,_)||1;f={q:[e.x+b*A,e.z+k*A],out:[_/v,-y/v],t:A}}let p=f?[f.q[0]+f.out[0]*(n/2+.05),f.q[1]+f.out[1]*(n/2+.05)]:[e.x,e.z],g=o.floors.flatMap(m=>m.furniture).find(m=>m.id===s.id)?.mount_y??0;return{floorId:t.id,wall:p,end:[s.x,s.z],height:Math.max(0,g)}}let l=null;for(let f of a){let p=f.b[0]-f.a[0],g=f.b[1]-f.a[1],m=p*p+g*g||1,y=Math.min(1,Math.max(0,((e.x-f.a[0])*p+(e.z-f.a[1])*g)/m)),_=[f.a[0]+p*y,f.a[1]+g*y],b=Math.hypot(e.x-_[0],e.z-_[1]),k=Math.sqrt(m);(!l||b<l.d)&&(l={q:_,out:[g/k,-p/k],d:b})}if(!l)return null;let{q:d,out:c}=l,u=0;for(let f of o.floors)for(let p of f.outdoor??[]){let g=p.points.length;for(let m=0;m<g;m++){let y=p.points[m],_=p.points[(m+1)%g],b=_[0]-y[0],k=_[1]-y[1],z=c[0]*k-c[1]*b;if(Math.abs(z)<1e-9)continue;let A=((y[0]-d[0])*k-(y[1]-d[1])*b)/z,S=((y[0]-d[0])*c[1]-(y[1]-d[1])*c[0])/z;A>0&&S>=0&&S<=1&&(u=Math.max(u,Math.min(15,A)))}}let h=u>n+1?u:n+2.5;return{floorId:t.id,wall:[d[0]+c[0]*(n/2+.05),d[1]+c[1]*(n/2+.05)],end:[d[0]+c[0]*h,d[1]+c[1]*h],height:0}}function lr(o,e){let t=[];for(let n of o.floors)for(let i of n.furniture)i.type===e&&t.push({id:i.id,type:i.type,floorId:n.id,x:i.x,z:i.z,h:i.h,variant:i.variant??null});return t}var za=new WeakMap;function La(o,e,t,n){let i=`${e.id}:${t.join(",")}>${n.join(",")}`,r=za.get(o);r||za.set(o,r=new Map);let s=r.get(i);if(s)return s;let{wall_exterior:a,wall_interior:l}=o.settings,d=dr(e,a,l),c=[t,n],u=pn(e,t),h=pn(e,n);if(u&&h){let f=ct(d,t),p=ct(d,n);if(Xn(d,u,f)&&Xn(d,h,p)){let{dist:g,prev:m}=Ia(d,f);if(Number.isFinite(g[p])){c.length=0;for(let y=p;y>=0;y=m[y])c.unshift(d.pos[y])}}}return r.set(i,c),c}function Aa(o,e,t,n,i,r,s,a){let l=o.floors.find(u=>u.id===e.floorId);if(!l||e.floorId!==n.floorId)return[];let d=La(o,l,[e.x,e.z],[n.x,n.z]),c=[[e.x,t,e.z],...d.map(u=>[u[0],ve,u[1]]),[n.x,i,n.z]];return Ca(l.id,c,r,s,a)}function Ca(o,e,t,n,i){let r=[];for(let s=0;s+1<e.length;s++){let a=e[s],l=e[s+1],d=Math.hypot(l[0]-a[0],l[1]-a[1],l[2]-a[2]);d<1e-4||(r.push({floorId:o,a,b:l,dist:i,power:t,kind:n}),i+=d)}return r}function hn(o,e,t,n){let r=(o.floors.find(s=>s.id===e.floor_id)?.elevation??0)+Math.max(ve,e.height);return[t,...e.points.map(s=>[s[0],r,s[1]]),n]}function Ra(o,e){let t=ot(o,e,[...At(o),...un(o)]);if(!t)return null;let[n,i]=rt(t,e),r=e.u+n/2,s=t.unbounded?e.v+i/2:e.v;return[t.o[0]+t.eu[0]*r+t.es[0]*s,t.o[1]+t.eu[1]*r+t.es[1]*s,t.o[2]+t.eu[2]*r+t.es[2]*s]}function Cd(o,e,t){let{wall_exterior:n,wall_interior:i}=o.settings,r=dr(e,n,i),s=pn(e,t),a=s?Yn(r,s.id,t):null;return a===null?t:r.pos[a]}function Dt(o,e,t,n,i){let r=[...o.floors].sort((d,c)=>d.elevation-c.elevation),s=d=>{let c=i;for(let u of r)d>=u.elevation-.01&&(c=u);return c},a=[],l=0;for(let d=0;d+1<e.length;d++){let c=e[d],u=e[d+1];if(Math.hypot(u[0]-c[0],u[1]-c[1],u[2]-c[2])<1e-4)continue;let f=[];if(Math.abs(u[1]-c[1])>.01){let p=Math.min(c[1],u[1]),g=Math.max(c[1],u[1]);for(let m of r)m.elevation>p+.01&&m.elevation<g-.01&&f.push(m.elevation);u[1]<c[1]&&f.reverse()}for(let p of[...f,u[1]]){let g=(p-c[1])/(u[1]-c[1]||1),m=Math.abs(u[1]-c[1])>.01?[c[0]+(u[0]-c[0])*g,p,c[2]+(u[2]-c[2])*g]:u,y=s((c[1]+m[1])/2),_=Math.hypot(m[0]-c[0],m[1]-c[1],m[2]-c[2]);_>1e-4&&a.push({floorId:y.id,a:[c[0],c[1]-y.elevation,c[2]],b:[m[0],m[1]-y.elevation,m[2]],dist:l,power:t,kind:n}),l+=_,c=m}}return a}function Ta(o,e,t,n,i){let r=[...At(o),...un(o)],s=ot(o,e,r),a=o.floors.find(m=>m.id===n.floorId);if(!s||!a)return[];let[l,d]=rt(s,e),c=(m,y)=>[s.o[0]+s.eu[0]*m+s.es[0]*y,s.o[1]+s.eu[1]*m+s.es[1]*y,s.o[2]+s.eu[2]*m+s.es[2]*y],u=e.u+l/2,h=a.elevation+ve,f=[],p;if(s.unbounded){let m=c(u,e.v+d/2);p=[m[0],h,m[2]],f.push(p)}else if(s.wall){let m=c(u,e.v);p=[m[0],h,m[2]],f.push(m,p)}else{let m=c(u,e.v),y=Yo(o)??a,_=Math.max(a.elevation+.5,Math.min(m[1]-.25,y.elevation+y.height-.12));p=[m[0],_,m[2]],f.push(m)}let g=Cd(o,a,[p[0],p[2]]);f.push([g[0],p[1],g[1]]),Math.abs(p[1]-h)>.05&&f.push([g[0],h,g[1]]);for(let m of La(o,a,g,[n.x,n.z]).slice(1))f.push([m[0],h,m[1]]);return f.push([n.x,a.elevation+i,n.z]),Dt(o,f,t,"solar",a)}function Oa(o,e=new Date){let t=new Date(e);t.setHours(0,0,0,0);let n=Math.max(1,Math.floor((e.getTime()-t.getTime())/3e5)+1),i=new Array(n).fill(0),r=-1;for(let a of Object.values(o))for(let l of a){let d=typeof l.start=="number"?l.start:Date.parse(l.start),c=Math.floor((d-t.getTime())/3e5);c<0||c>=n||typeof l.mean!="number"||(i[c]+=Math.max(0,l.mean),r=Math.max(r,c))}return i.length=Math.max(r+1,n-3,1),{kwh:i.reduce((a,l)=>a+l*5/60/1e3,0),peak:Math.max(0,...i),curve:i}}async function Ba(o,e){let t=new Date;t.setHours(0,0,0,0);try{return await o.callWS({type:"recorder/statistics_during_period",start_time:t.toISOString(),statistic_ids:e,period:"5minute",types:["mean"]})??{}}catch{return null}}function hr(o,e){let n=l=>42-(e>0?l/e*36:0),i=o.map((l,d)=>[d/288*220,n(l)]),r=i.map(([l,d],c)=>`${c?"L":"M"}${l.toFixed(1)} ${d.toFixed(1)}`).join(" "),[s,a]=i[i.length-1];return{line:r,area:`${r} L${s.toFixed(1)} 44 L0 44 Z`,endX:s,endY:a}}function Na(o){return Math.max(1,o.rows*o.cols-(o.skip?.length??0))}var Od=400;function Va(o,e){let t=new Map;for(let n of o.settings.roof.solar??[]){let i=Math.min(1,(e.get(n.id)??0)/(Na(n)*(n.wp??Od)));t.set(n.id,i>.003?Math.pow(i,.6):0)}return t}function Ka(o,e,t){let n=new Map,i=e.settings.roof.solar??[],r=e.settings.roof.strings??[],s=Na,a=[],l=0,d=new Map;for(let h of i){let f=h.entity&&h.entity!=="none"?ne(o.states[h.entity]):null;if(f!==null){n.set(h.id,Math.max(0,f)),l+=Math.max(0,f);continue}let p=h.string?r.find(m=>m.id===h.string):void 0,g=p?.entity&&p.entity!=="none"?ne(o.states[p.entity]):null;if(p&&g!==null){d.set(p.id,[...d.get(p.id)??[],h]);continue}a.push(h)}for(let[h,f]of d){let p=r.find(y=>y.id===h),g=Math.max(0,ne(o.states[p.entity])??0),m=f.reduce((y,_)=>y+s(_),0);for(let y of f)n.set(y.id,g*s(y)/m);l+=g}let c=Math.max(0,(t??0)-l),u=a.reduce((h,f)=>h+s(f),0);for(let h of a)n.set(h.id,u?c*s(h)/u:0);return n}var $e={solar:[1,.78,.2],battery:[.25,1,.6],wallbox:[.3,.75,1],house:[.6,.72,1],export:[.2,.95,1],import:[1,.3,.65]};function Ga(o,e){if(o==="grid")return $e.import;if(o==="export")return $e.export;if(o==="solar")return $e.solar;if(o==="battery")return $e.battery;if(o==="wallbox")return $e.wallbox;if(o==="inverter")return(e.solar??0)>5?$e.solar:$e.battery;let t=[[Math.max(0,e.grid??0),$e.house],[Math.max(0,(e.solar??0)-Math.max(0,-(e.grid??0))-Math.max(0,-(e.battery??0))),$e.solar],[Math.max(0,e.battery??0),$e.battery]],[n]=t.reduce((i,r)=>r[0]>i[0]?r:i);return n>0?t.find(i=>i[0]===n)[1]:$e.house}var pr=["neon","blueprint","day"],mn={neon:{night:[[11,17,32],[7,11,20]],day:[[26,44,78],[12,20,36]]},blueprint:{night:[[26,70,130],[10,38,78]],day:[[34,86,150],[14,48,96]]},day:{night:[[214,224,238],[176,190,210]],day:[[242,246,251],[205,216,230]]}};var Jn={temperature:{deviceClass:"temperature",unit:"\xB0C",stops:[[17,[.24,.48,1]],[20.5,[.2,.9,.7]],[23,[1,.75,.25]],[25.5,[1,.32,.2]]]},humidity:{deviceClass:"humidity",unit:"%",stops:[[30,[1,.6,.2]],[45,[.3,.9,.5]],[60,[.2,.8,1]],[75,[.3,.4,1]]]},co2:{deviceClass:"carbon_dioxide",unit:"ppm",stops:[[450,[.3,.9,.5]],[800,[1,.85,.3]],[1200,[1,.5,.2]],[1600,[1,.25,.25]]]}};function Ua(o,e){let t=Jn[o].stops;if(e<=t[0][0])return t[0][1];for(let n=1;n<t.length;n++){let[i,r]=t[n],[s,a]=t[n-1];if(e<=i){let l=(e-s)/(i-s);return[a[0]+(r[0]-a[0])*l,a[1]+(r[1]-a[1])*l,a[2]+(r[2]-a[2])*l]}}return t[t.length-1][1]}function ja(o,e,t){let n=new Map;for(let i of e.floors)for(let r of i.rooms){let s=Ce(o,i,r,t);s!==null&&n.set(r.id,s)}return n}function qa(o){let e=Jn[o].stops,t=e[0][0],n=e[e.length-1][0];return`linear-gradient(90deg, ${e.map(([i,r])=>`rgb(${r.map(s=>Math.round(s*255)).join(",")}) ${Math.round((i-t)/(n-t)*100)}%`).join(", ")})`}function Me(o,e){if(!gt(e))return T(o,`furn_${e}`);let t=he(e);return t?Ui(t,o?.language??navigator.language):T(o,"pack_missing_item")}var fr=new Set(["on","home","true","present","occupied","detected","parked","yes","1"]);function Qn(o){return o&&o!=="none"?o:null}function gn(o,e){if(e.type!=="parking")return null;let t=Qn(e.entity);if(t){let r=o.states[t];if(!r||!fr.has(r.state.toLowerCase()))return null}let n=e.vehicle??null,i=Qn(e.type_entity);if(i&&e.types?.length){let r=(o.states[i]?.state??"").trim().toLowerCase();if(r){let s=l=>l.trim().toLowerCase(),a=e.types.find(l=>s(l.state)===r)??e.types.find(l=>s(l.state)&&r.includes(s(l.state)));a&&(n=a.vehicle)}}return n&&he(n)?n:null}function mr(o,e){let t=new Map;for(let n of e.floors)for(let i of n.furniture){let r=gn(o,i);r&&t.set(i.id,r)}return t}function Za(o){return o.flatMap(e=>e.furniture.filter(t=>t.type==="parking").flatMap(t=>[Qn(t.entity),Qn(t.type_entity)])).filter(e=>!!e)}function Ya(o,e){let t=he(e);if(!t)return null;let n=o.scale??1;return{id:`${o.id}:vehicle`,type:e,x:o.x,z:o.z,rotation:o.rotation,w:t.size[0]*n,d:t.size[1]*n,h:t.size[2]*n,variant:null,entity:null,power:null}}var _n=1800*1e3,Bd=new Set(["motion","occupancy","presence"]);function Xa(o,e){return e.startsWith("binary_sensor.")&&Bd.has(String(o.states[e]?.attributes.device_class))}function bn(o,e){let t=[],n=new Set,i=(r,s,a,l)=>{n.has(r)||(n.add(r),t.push({entity:r,floorId:s,x:a,z:l}))};for(let r of e.floors)for(let s of r.placements)if(Xa(o,s.entity_id))i(s.entity_id,r.id,s.x,s.z);else if(I(s.entity_id)==="camera")for(let a of Ve(o,s.entity_id))i(a,r.id,s.x,s.z);for(let r of e.floors)for(let s of r.rooms){if(!s.area_id||s.points.length<3)continue;let[a,l]=be(s.points);for(let d of se(o,s.area_id))Xa(o,d)&&i(d,r.id,a,l)}return t}function Ja(o,e,t,n=_n){let i=t-n,r=[];for(let[s,a]of Object.entries(o)){let l="";for(let d of a){let c=(d.lc??d.lu)*1e3;d.s==="on"&&l!=="on"&&c>=i&&c<=t&&r.push({entity:s,time:c}),l=d.s}}for(let s of e){let a=s.lastChanged??NaN;s.state!=="on"||!(a>=i&&a<=t)||r.some(l=>l.entity===s.entity&&Math.abs(l.time-a)<2e3)||r.push({entity:s.entity,time:a})}return r.sort((s,a)=>s.time-a.time)}function Qa(o,e,t,n=_n){let i=new Map(o.map(s=>[s.entity,s])),r=[];for(let s of e){let a=i.get(s.entity);if(!a)continue;let l=r[r.length-1];l&&l.entity===s.entity&&s.time-l.time<6e4||r.push({...a,time:s.time,age:Math.min(1,Math.max(0,(t-s.time)/n))})}return r.slice(-40)}function eo(o,e){return new Date(e).toLocaleTimeString(o.language,{hour:"2-digit",minute:"2-digit"})}var el='<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>';var to=o=>o.toLocaleLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");function gr(o,e){let t=[],n=et(o,e.floors),i=e.floors.length>1;for(let r of e.floors){let s=(c,u)=>r.rooms.find(h=>h.points.length>=3&&V([c,u],h.points))??null,a=(c,u)=>[s(c,u)?.name,i?r.name:null].filter(Boolean).join(" \xB7 ");for(let c of r.rooms){if(c.points.length<3)continue;let[u,h]=be(c.points);t.push({kind:"room",name:c.name,where:i?r.name:"",floorId:r.id,roomId:c.id,entity:null,icon:null,x:u,z:h,y:0})}let l=new Set,d=(c,u,h,f)=>{l.has(c)||!o.states[c]||(l.add(c),t.push({kind:"device",name:Z(o,c),where:a(u,h),floorId:r.id,roomId:s(u,h)?.id??null,entity:c,icon:I(c),x:u,z:h,y:f}))};for(let c of r.placements)d(c.entity_id,c.x,c.z,c.y??kt(I(c.entity_id)??"sensor",r.height,c.mount));for(let c of r.furniture){let u=n.get(c.id),h=u?.entity??u?.power;h&&d(h,c.x,c.z,Math.min(r.height-.3,Math.max(.5,c.h)))}}return t}function tl(o,e,t=8){let n=to(e).split(/\s+/).filter(Boolean);if(!n.length)return[];let i=o.filter(a=>{let l=to(`${a.name} ${a.where} ${a.entity??""}`);return n.every(d=>l.includes(d))}),r=to(e.trim()),s=a=>(to(a.name).startsWith(r)?0:2)+(a.kind==="room"?0:1);return i.sort((a,l)=>s(a)-s(l)||a.name.localeCompare(l.name)).slice(0,t)}var Nd=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[190,90,255],[255,95,210],[255,70,70],[120,255,150]],Vd=[2200,2700,3200,4e3,5e3,6500],Kd=["hs","rgb","rgbw","rgbww","xy"],Gd=4,nl=16,ol=32,Ud=128;function br(o){let e=o.attributes.supported_color_modes??[],t=e.some(n=>Kd.includes(n));return{dim:e.some(n=>n!=="onoff"),color:t,temp:e.includes("color_temp")}}function wr(o){return((o.attributes.supported_features??0)&Gd)!==0&&typeof o.attributes.current_position=="number"}var _r=class extends ue{static properties={hass:{attribute:!1},entity:{attribute:!1},car:{attribute:!1},presets:{attribute:!1},confirmSwitch:{type:Boolean},pro:{type:Boolean},low:{type:Boolean,reflect:!0},_tick:{state:!0}};tickTimer;connectedCallback(){super.connectedCallback(),this._tick=0,this.tickTimer=setInterval(()=>{I(this.entity)==="camera"&&!document.hidden&&this._tick++},3e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.tickTimer)}renderCamera(e){let t=e.attributes.entity_picture,n=t?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this._tick}`:null;return w`<button class="qm-camera" title=${this.t("camera_live")} @click=${()=>this.details()}>
        ${n?w`<img src=${n} alt=${Z(this.hass,this.entity)} />`:w`<span class="qm-note">${fe(this.hass,e)}</span>`}
      </button>
      <button class="qm-details qm-look" @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:this.entity},bubbles:!0,composed:!0}))}>
        ${this.pro?"":"\u{1F512} "}${this.t("through_camera")}
      </button>`}t(e,t){return T(this.hass,e,t)}ask(){return!this.confirmSwitch||confirm(this.t("confirm_switch",{name:Z(this.hass,this.entity)}))}call(e,t,n={}){this.hass.callService(e,t,{entity_id:this.entity,...n})}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}details(){xe(this,this.entity),this.close()}ring(e){let t=e.length;return e.map((n,i)=>{let r=i/t*Math.PI*2-Math.PI/2;return w`<div class="qm-at" style="left:${50+Math.cos(r)*39}%;top:${50+Math.sin(r)*39}%">${n}</div>`})}renderLight(e){let t=br(e),n=e.state==="on",i=n&&typeof e.attributes.brightness=="number"?Math.round(e.attributes.brightness/2.55):n?100:0,r=t.color?Nd.map(s=>w`<button class="qm-swatch" style="background:rgb(${s.join(",")})" aria-label=${`RGB ${s.join(", ")}`} @click=${()=>this.call("light","turn_on",{rgb_color:s})}></button>`):t.temp?Vd.map(s=>w`<button class="qm-swatch" style="background:${jd(s)}" aria-label=${`${s} K`} @click=${()=>this.call("light","turn_on",{color_temp_kelvin:s})}></button>`):[];return w`<div class="qm-ring ${r.length?"":"qm-ring-small"}">
        ${this.ring(r)}
        <button class="qm-power ${n?"qm-on":""}" aria-pressed=${n} @click=${()=>this.ask()&&this.call("light","toggle")}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
          <b>${n?`${i} %`:this.t("qm_off")}</b>
        </button>
      </div>
      ${t.dim?w`<input
            class="qm-slider"
            type="range"
            min="1"
            max="100"
            .value=${String(Math.max(1,i))}
            aria-label=${this.t("brightness")}
            @change=${s=>this.call("light","turn_on",{brightness_pct:Number(s.target.value)})}
          />`:x}`}renderCover(e){let t=typeof e.attributes.current_position=="number"?e.attributes.current_position:null,n=e.state==="opening"||e.state==="closing",i=wr(e),r=(d,c,u,h=!1)=>w`<button class="qm-swatch qm-slot ${h?"qm-slot-on":""}" aria-label=${c} @click=${u}>${d}</button>`,s=d=>t!==null&&Math.abs(t-d)<3,a=[r("\u25B2",this.t("cover_open"),()=>this.ask()&&this.call("cover","open_cover"),s(100)),...i?[75,50].map(d=>r(`${d}`,`${d} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:d}),s(d))):[],r("\u25BC",this.t("cover_close"),()=>this.ask()&&this.call("cover","close_cover"),s(0)),...i?[25].map(d=>r(`${d}`,`${d} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:d}),s(d))):[],r("\u25A0",this.t("cover_stop"),()=>this.call("cover","stop_cover"),n)],l=t===null?e.state==="closed"?100:0:100-t;return w`<div class="qm-ring">
        ${this.ring(a)}
        <button
          class="qm-power qm-blind ${l<100?"qm-on":""}"
          style="--closed:${l}%"
          aria-label=${n?this.t("cover_stop"):l>50?this.t("cover_open"):this.t("cover_close")}
          @click=${()=>n?this.call("cover","stop_cover"):this.ask()&&this.call("cover",l>50?"open_cover":"close_cover")}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16M5 4v15M19 4v15M7 8h10M7 12h10M7 16h10" /></svg>
          <b>${t!==null?`${t} %`:fe(this.hass,e)}</b>
        </button>
      </div>
      ${i?w`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(t??0)}
            aria-label=${this.t("position")}
            @change=${d=>this.call("cover","set_cover_position",{position:Number(d.target.value)})}
          />`:x}
      ${this.renderTilt(e)}`}renderTilt(e){let t=(e.attributes.supported_features??0)|0,n=typeof e.attributes.current_tilt_position=="number"?e.attributes.current_tilt_position:null;return t&Ud&&n!==null?w`<label class="qm-tilt"
        ><span>${this.t("cover_tilt")} · ${n} %</span>
        <input
          class="qm-slider"
          type="range"
          min="0"
          max="100"
          .value=${String(n)}
          aria-label=${this.t("cover_tilt")}
          @change=${i=>this.call("cover","set_cover_tilt_position",{tilt_position:Number(i.target.value)})}
      /></label>`:t&(nl|ol)?w`<div class="qm-tilt-buttons">
        ${t&nl?w`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","open_cover_tilt")}>${this.t("cover_tilt_open")}</button>`:x}
        ${t&ol?w`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","close_cover_tilt")}>${this.t("cover_tilt_close")}</button>`:x}
      </div>`:x}renderCar(e){let t=e.entities,n=(u,h,f,p={})=>{this.hass.callService(u,h,{entity_id:f,...p})},i=t.lock,r=!!i&&i.startsWith("lock."),s=u=>/^(switch|input_boolean|fan|light)\./.test(u),a=t.climate,l=!!a&&a.startsWith("climate."),d=t.charging&&s(t.charging)?t.charging:null,c=[e.soc!==null?`${Math.round(e.soc)} %`:null,e.range!==null?`${Math.round(e.range)} ${e.rangeUnit}`:null,e.charging?`\u26A1 ${this.t("car_charging_short")}`:e.plugged?"\u{1F50C}":null].filter(Boolean).join(" \xB7 ");return w`<p class="qm-car-line">${c||fe(this.hass,this.hass.states[this.entity])}</p>
      <div class="qm-car">
        ${r||i&&s(i)?w`<button
              class="qm-swatch qm-slot ${e.locked?"qm-slot-on":""}"
              @click=${()=>e.locked?confirm(this.t("car_unlock_confirm"))&&(r?n("lock","unlock",i):n("homeassistant","turn_off",i)):r?n("lock","lock",i):n("homeassistant","turn_on",i)}
            >
              ${e.locked?`\u{1F513} ${this.t("car_unlock_btn")}`:`\u{1F512} ${this.t("car_lock_btn")}`}
            </button>`:x}
        ${a?w`<button class="qm-swatch qm-slot ${e.climateOn?"qm-slot-on":""}" @click=${()=>n(l?"climate":"homeassistant",e.climateOn?"turn_off":"turn_on",a)}>
              ${e.climateOn?`\u2744 ${this.t("car_climate_off")}`:`\u{1F321} ${this.t("car_climate_on")}`}
            </button>`:x}
        ${d?w`<button class="qm-swatch qm-slot ${e.charging?"qm-slot-on":""}" @click=${()=>n("homeassistant",e.charging?"turn_off":"turn_on",d)}>
              ${e.charging?`\u23F9 ${this.t("car_charge_stop")}`:`\u26A1 ${this.t("car_charge_start")}`}
            </button>`:x}
        ${!r&&!a&&!d?w`<p class="qm-note">${this.t("car_no_controls")}</p>`:x}
      </div>`}renderMedia(e){let t=e.attributes,n=e.state==="playing",i=e.state==="off"||e.state==="standby",r=typeof t.volume_level=="number"?Math.round(t.volume_level*100):null,s=[t.media_title,t.media_artist].filter(l=>typeof l=="string"&&l).join(" \xB7 "),a=typeof t.entity_picture=="string"?t.entity_picture:null;return w`<div class="qm-media">
        <button class="qm-swatch qm-slot" aria-label=${this.t("previous")} ?disabled=${i} @click=${()=>this.call("media_player","media_previous_track")}>⏮</button>
        <button class="qm-power qm-media-main ${n?"qm-on":""}" aria-label=${this.t("play_pause")} style=${a?`background-image:url(${a})`:""} @click=${()=>this.call("media_player",i?"turn_on":n?"media_pause":"media_play")}>
          <span>${i?"\u23FB":n?"\u23F8":"\u25B6"}</span>
        </button>
        <button class="qm-swatch qm-slot" aria-label=${this.t("next")} ?disabled=${i} @click=${()=>this.call("media_player","media_next_track")}>⏭</button>
      </div>
      ${s?w`<p class="qm-media-title">${s}</p>`:x}
      ${r!==null?w`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(r)}
            aria-label=${this.t("volume")}
            @change=${l=>this.call("media_player","volume_set",{volume_level:Number(l.target.value)/100})}
          />`:x}
      ${this.renderPlay(e)}`}renderPlay(e){if(!L("sound"))return x;let t=Array.isArray(e.attributes.source_list)?e.attributes.source_list.slice(0,10):[],n=this.presets??[];if(!t.length&&!n.length)return x;let i=e.attributes.source;return w`<p class="qm-play-head">${this.t("media_play_head")}</p>
      <div class="qm-play">
        ${n.map(r=>w`<button class="qm-chip" @click=${()=>this.call("media_player","play_media",{media_content_type:r.type,media_content_id:r.content})}>
            ▶ ${r.label}
          </button>`)}
        ${t.map(r=>w`<button class="qm-chip ${r===i?"qm-chip-on":""}" @click=${()=>this.call("media_player","select_source",{source:r})}>${r}</button>`)}
      </div>`}renderToggle(e){let t=e.state==="on"||e.state==="unlocked"||e.state==="playing",n=e.entity_id.split(".")[0];return w`<div class="qm-ring qm-ring-small">
      <button
        class="qm-power ${t?"qm-on":""}"
        aria-pressed=${t}
        @click=${()=>this.ask()&&(n==="lock"?this.call("lock",t?"lock":"unlock"):this.call("homeassistant","toggle"))}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
        <b>${fe(this.hass,e)}</b>
      </button>
    </div>`}render(){let e=this.hass?.states[this.entity];if(!e)return x;let t=I(this.entity),n=this.car?this.renderCar(this.car):N(e)?w`<p class="qm-note">${fe(this.hass,e)}</p>`:t==="light"?this.renderLight(e):t==="cover"?this.renderCover(e):t==="camera"?this.renderCamera(e):t==="media"&&L("sound")?this.renderMedia(e):this.renderToggle(e);return w`<div class="qm" role="dialog" aria-label=${Z(this.hass,this.entity)}>
      <div class="qm-title">${Z(this.hass,this.entity)}</div>
      ${n}
      <button class="qm-details" @click=${()=>this.details()}>${this.t("details")} …</button>
    </div>`}static styles=[Ae,me`
    .qm-play-head {
      margin: 10px 0 4px;
      font-size: 11px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      opacity: 0.7;
    }
    .qm-play {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      max-height: 110px;
      overflow-y: auto;
    }
    .qm-chip {
      border: 1px solid rgba(160, 240, 255, 0.35);
      border-radius: 999px;
      padding: 5px 10px;
      background: rgba(8, 16, 34, 0.55);
      color: inherit;
      font: inherit;
      font-size: 12.5px;
      cursor: pointer;
    }
    .qm-chip-on {
      border-color: var(--fp3d-accent, #37e0ff);
      color: var(--fp3d-accent, #37e0ff);
    }
      .qm-camera {
        display: block;
        width: 100%;
        padding: 0;
        margin: 6px 0 8px;
        border: 0;
        border-radius: 12px;
        overflow: hidden;
        background: #000;
        cursor: pointer;
      }
      .qm-camera img {
        display: block;
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
      }
      .qm:has(.qm-camera) {
        width: 300px;
      }
      .qm {
        width: 232px;
        padding: 12px 14px 10px;
        border-radius: 22px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow), 0 0 0 1px var(--fp3d-line);
        backdrop-filter: blur(10px);
      }
      :host([low]) .qm {
        backdrop-filter: none;
        box-shadow: 0 0 0 1px var(--fp3d-line);
        animation: none;
        color: var(--fp3d-text);
        text-align: center;
        animation: qm-in 140ms ease-out;
      }
      @keyframes qm-in {
        from {
          opacity: 0;
          transform: scale(0.85);
        }
      }
      .qm-title {
        font: 700 14.5px var(--fp3d-title-font);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .qm-ring {
        position: relative;
        width: 196px;
        height: 196px;
        margin: 6px auto 4px;
        display: grid;
        place-items: center;
      }
      .qm-ring-small {
        height: 110px;
      }
      .qm-at {
        position: absolute;
        transform: translate(-50%, -50%);
      }
      .qm-swatch {
        width: 34px;
        height: 34px;
        border: 2px solid rgba(255, 255, 255, 0.25);
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 0 12px rgba(0, 0, 0, 0.35);
      }
      .qm-swatch:active {
        transform: scale(0.9);
      }
      .qm-power {
        display: grid;
        place-items: center;
        gap: 2px;
        width: 88px;
        height: 88px;
        border: 0;
        border-radius: 50%;
        background: var(--fp3d-bg2, #16223a);
        color: var(--fp3d-muted);
        box-shadow: inset 0 0 0 2px var(--fp3d-line);
        cursor: pointer;
        font: inherit;
      }
      .qm-power b {
        font: 700 15px var(--fp3d-title-font);
        color: var(--fp3d-text);
      }
      .qm-power small {
        font-size: 11px;
      }
      .qm-on {
        color: #1a1204;
        background: var(--fp3d-warm);
        box-shadow: 0 0 24px rgba(255, 181, 71, 0.55);
      }
      .qm-on b {
        color: #1a1204;
      }
      .qm-slot {
        display: grid;
        place-items: center;
        border-color: var(--fp3d-line);
        background: var(--fp3d-bg2, #16223a);
        color: var(--fp3d-text);
        font: 700 12px var(--fp3d-title-font);
      }
      .qm-slot-on {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        border-color: transparent;
        box-shadow: 0 0 14px rgba(55, 224, 255, 0.45);
      }
      /* the blind: its closed part covers the circle from the top, the open part glows like daylight */
      .qm-blind.qm-on {
        background: linear-gradient(to bottom, #1e2c4c var(--closed), #9fd9ff var(--closed));
        box-shadow: 0 0 22px rgba(120, 200, 255, 0.4);
        color: #06101f;
      }
      .qm-blind b {
        text-shadow: 0 0 6px rgba(0, 0, 0, 0.6);
        color: #fff;
      }
      .qm-round {
        width: 46px;
        height: 46px;
        border: 0;
        border-radius: 50%;
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        font-size: 17px;
        cursor: pointer;
      }
      .qm-car-line {
        margin: 2px 0 8px;
        text-align: center;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
      }
      .qm-car {
        display: grid;
        gap: 6px;
        justify-items: stretch;
      }
      .qm-car .qm-slot {
        width: auto;
        padding: 6px 10px;
        font-size: 13px;
      }
      .qm-media {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        margin: 6px 0;
      }
      .qm-media-main {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background-size: cover;
        background-position: center;
        position: relative;
      }
      .qm-media-main span {
        position: absolute;
        inset: 0;
        display: grid;
        place-items: center;
        font-size: 22px;
        text-shadow: 0 0 6px rgba(0, 0, 0, 0.8);
        color: #fff;
      }
      .qm-media .qm-slot {
        width: auto;
        padding: 0 10px;
      }
      .qm-media-title {
        margin: 2px 0 4px;
        text-align: center;
        font-size: 12px;
        opacity: 0.85;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .qm-tilt {
        display: grid;
        gap: 4px;
        margin-top: 8px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .qm-tilt-buttons {
        display: flex;
        gap: 6px;
        justify-content: center;
        margin-top: 8px;
      }
      .qm-tilt-buttons .qm-slot {
        width: auto;
        padding: 0 10px;
        font-size: 12px;
      }
      .qm-slider {
        width: 100%;
        margin: 4px 0 6px;
        accent-color: var(--fp3d-accent);
      }
      .qm-look {
        display: block;
        width: 100%;
        margin-top: -4px;
      }
      .qm-details {
        border: 0;
        background: none;
        color: var(--fp3d-accent);
        font: inherit;
        font-size: 13px;
        padding: 6px;
        cursor: pointer;
      }
      .qm-note {
        color: var(--fp3d-muted);
      }
    `]};function jd(o){let e=Math.min(1,Math.max(0,(o-2200)/4300)),t=(n,i)=>Math.round(n+(i-n)*e);return`rgb(${t(255,200)},${t(170,225)},${t(80,255)})`}customElements.get("fp3d-quick-menu")||customElements.define("fp3d-quick-menu",_r);var qd=new URL(import.meta.url),Zd=new URL("./neonplan3d-3d.js?v=6f618b20808d",qd).href,rl;function wn(){return rl??=import(Zd),rl}var vr;function yr(){let o=new URL("./neonplan3d-fun.js?v=53e4e3886b47",new URL(import.meta.url)).href;return vr??=import(o).catch(e=>{throw vr=void 0,e}),vr}var il=.3;function vn(o,e){let t=o.from?e(o.from):null,n=o.to?e(o.to):null,i=o.height??il,r=[];if(o.heights)t&&r.push([t.x,t.y,t.z]),o.points.forEach(([s,a],l)=>r.push([s,o.heights?.[l]??i,a])),n&&r.push([n.x,n.y,n.z]);else{if(!t||!n)return[];r.push([t.x,t.y,t.z],[t.x,i,t.z]);for(let[s,a]of o.points)r.push([s,i,a]);r.push([n.x,i,n.z],[n.x,n.y,n.z])}return r.filter((s,a)=>a===0||kr(s,r[a-1])>.001)}function kr(o,e){return Math.hypot(e[0]-o[0],e[1]-o[1],e[2]-o[2])}function xr(o){let e=0;for(let t=1;t<o.length;t++)e+=kr(o[t-1],o[t]);return e}function no(o,e){if(o.length<2)return null;let t=Math.max(0,e);for(let n=1;n<o.length;n++){let[i,r]=[o[n-1],o[n]],s=kr(i,r);if(!(s<1e-6)){if(t<=s||n===o.length-1){let a=Math.min(1,t/s),l=[(r[0]-i[0])/s,(r[1]-i[1])/s,(r[2]-i[2])/s];return{p:[i[0]+(r[0]-i[0])*a,i[1]+(r[1]-i[1])*a,i[2]+(r[2]-i[2])*a],dir:l,seg:n-1}}t-=s}}return null}function It(o){let[e="",t="",n]=o.split(":");return{kind:e,id:t,port:n||null}}function Sr(o){let{kind:e,id:t}=It(o);return e&&t?`${e}:${t}`:o}function Yd(o,e){let{w:t,d:n,h:i}=o;if(o.type==="pool_pump")return e==="suction"?[t*.5,i*.55,0]:e==="pressure"?[t*.05,i*.9,0]:null;if(o.type==="pool_filter"){let r=Math.min(t,n)/2;if(o.variant==="side6"){let l=r+.08;return e==="pump"?[l,i*.6,0]:e==="return"?[l+.06,i*.48,0]:e==="waste"?[l,i*.36,0]:null}let s=i*.89,a=r*.45+.04;return e==="pump"?[-a,s,0]:e==="return"?[a,s,0]:e==="waste"?[0,s,-a]:null}if(o.type==="pool_heat_pump"){let r=o.variant==="left"||o.variant==="back"?o.variant:"right";if(e!=="in"&&e!=="out")return null;let s=e==="in"?i*.25:i*.45;return r==="back"?[e==="in"?-t*.15:t*.15,s,-n/2-.04]:[(r==="left"?-1:1)*(t/2+.04),s,-n*.2]}return null}function sl(o,e){let t=Yd(o,e);if(!t)return null;let n=o.rotation*Math.PI/180,[i,r]=[Math.cos(n),Math.sin(n)];return{x:o.x+t[0]*i-t[2]*r,y:t[1],z:o.z+t[0]*r+t[2]*i}}function al(o,e){if(e==="outside"){if(o.kind==="floor")return{x:o.x,y:o.y-.3,z:o.z};if(o.kind==="wall"){let t=(o.depth??.3)+.05;return{x:o.x-(o.nx??0)*t,y:o.y,z:o.z-(o.nz??0)*t}}}return{x:o.x,y:o.y,z:o.z}}var ll=new Set(["skimmer","drain"]),$r=new Set(["backwash","rinse","waste"]),cl=o=>`port:${o}`,dl=o=>`dev:${o}`,Mr=o=>!!o.fittings?.some(e=>e.kind==="valve"&&e.open===!1);function ul(o){let e=new Map(o.pipes.map(b=>[b.id,{active:!1,warm:!1,waste:!1}]));if(!o.pumpOn)return e;let t=new Map(o.pipes.map(b=>[b.id,It(b.from).port])),n=o.pipes.map(b=>({...b,from:b.from?Sr(b.from):`loose:${b.id}:a`,to:b.to?Sr(b.to):`loose:${b.id}:b`})),i=new Map(o.devices.map(b=>[dl(b.id),b])),r=new Map(o.ports.map(b=>[cl(b.id),b])),s=b=>{let k=i.get(b);return!!k&&k.type==="pool_valve"&&k.open===!1},a=new Map,l=new Map;for(let b of n)a.set(b.from,[...a.get(b.from)??[],b]),l.set(b.to,[...l.get(b.to)??[],b]);let d=b=>r.get(b)?.kind==="waste",c=b=>i.get(b)?.type==="pool_heat_pump",u=new Map,h=(b,k=new Set)=>{let z=u.get(b.id);if(z)return z;if(k.has(b.id))return{heat:!1,waste:!1};k.add(b.id);let A=c(b.to),S=d(b.to);if(!A||!S)for(let P of a.get(b.to)??[]){let M=h(P,k);A||=M.heat,S||=M.waste}let v={heat:A,waste:S};return u.set(b.id,v),v},f=o.devices.filter(b=>b.type==="pool_pump").map(b=>dl(b.id)),p=f.length?f:o.ports.filter(b=>ll.has(b.kind)).map(b=>cl(b.id)),g=new Set,m=(b,k,z)=>{let A=`${b}|${k}|${z}`;if(g.has(A)||(g.add(A),s(b)))return;let S=a.get(b)??[],v=i.get(b);if(v?.type==="pool_filter"){let P=v.valve??"filter";if(P==="closed")return;let M=$r.has(P)?"waste":"return";S=S.filter(E=>{let F=t.get(E.id);return F?F===M:h(E).waste===$r.has(P)}),$r.has(P)&&(z=!0)}else if(S.length>1){S=S.filter(E=>!s(E.to)&&!Mr(E));let P=S.filter(E=>h(E).heat),M=S.filter(E=>!h(E).heat);P.length&&M.length&&(S=o.heaterOn?P:M)}v?.type==="pool_heat_pump"&&o.heating&&(k=!0);for(let P of S){if(s(P.to)||Mr(P))continue;let M=e.get(P.id);M.active=!0,M.warm||=k,M.waste||=z,m(P.to,k,z)}},y=new Set,_=b=>{for(let k of l.get(b)??[])y.has(k.id)||s(k.from)||Mr(k)||(y.add(k.id),_(k.from))};if(f.length){for(let k of f)_(k);let b=(k,z=new Set)=>z.has(k.id)?!1:(z.add(k.id),ll.has(r.get(k.from)?.kind??"")?!0:(l.get(k.from)??[]).some(A=>y.has(A.id)&&b(A,z)));for(let k of y){let z=n.find(A=>A.id===k);b(z)&&(e.get(k).active=!0)}}for(let b of p)m(b,!1,!1);return e}var Xd=[.25,.7,1],Jd=[1,.45,.18],Qd=[.75,.6,.35],eu=900;function oo(o){return o?.waste?Qd:o?.warm?Jd:Xd}function hl(o,e,t,n=i=>i){let i=[];for(let r of o){let s=n(vn(r,t),r);if(s.length<2)continue;let a=e.get(r.id),l=oo(a),d=0;for(let c=1;c<s.length;c++){let[u,h]=[s[c-1],s[c]],f=Math.hypot(h[0]-u[0],h[1]-u[1],h[2]-u[2]);f<.01||(i.push({floorId:r.floor_id,a:u,b:h,dist:d,power:a?.active?eu:0,color:l}),d+=f)}}return i}function pl(o,e,t){let n=t.pool??{},i=Yt(e,t);return r=>{let{kind:s,id:a,port:l}=It(r);if(s==="port"){let d=n.ports?.find(u=>u.id===a);if(!d)return null;let c=d.kind==="skimmer"?i-(d.depth??0):d.kind==="drain"?Zt(e,t)+.03:d.kind==="inlet"?i-(d.depth??.3):.02;return{x:d.x,z:d.z,y:c}}if(s==="joint"){let d=n.joints?.find(c=>c.id===a);return d?al(d,l):null}if(s!=="dev")return null;for(let d of o.floors){let c=d.furniture.find(p=>p.id===a);if(!c||!Xt.includes(c.type))continue;let u=l?sl(c,l):null,h=d.elevation-e.elevation;if(u)return{...u,y:u.y+pe(d,c)+h};let f=c.type==="pool_filter"?c.h*.88:c.type==="pool_dosing"?.95:c.type==="pool_valve"?rs:c.type==="pool_pump"?.2:.3;return{x:c.x,z:c.z,y:f+pe(d,c)+h}}return null}}function Pr(o,e,t,n){let i=c=>{let{kind:u,id:h}=It(c);return u==="port"?t.pool?.ports?.find(f=>f.id===h)?.kind:void 0},r=c=>i(c)==="drain",s=c=>i(c)==="inlet"||i(c)==="skimmer",a=c=>{if(c.length<2)return c;let u=c[0],h=Er(t,[u[0],u[2]]);if(!h)return c;let f=[u[0]+h[0]*.35,u[1],u[2]+h[1]*.35],p=1;for(;p<c.length&&Math.hypot(c[p][0]-u[0],c[p][2]-u[2])<.01;)p++;let g=c.slice(p).map(y=>[...y]);for(let y=0;y<g.length-1;y++){let _=(g[y][0]-u[0])*h[0]+(g[y][2]-u[2])*h[1];if(_>=.349999)break;g[y][0]+=h[0]*(.35-_),g[y][2]+=h[1]*(.35-_)}let m=g[0]??c[c.length-1];return[u,f,[f[0],m[1],f[2]],...g]},l=c=>{if(c.length<2)return c;let u=c[0];if(!V([u[0],u[2]],t.points))return c;let h=Zt(n,t)-.15,f=c.findIndex((y,_)=>_>0&&Math.hypot(y[0]-u[0],y[2]-u[2])>.01);if(f<0)return c;let p=c[f],g=[p[0],p[2]];for(let y=0;y<t.points.length;y++){let _=t.points[y],b=t.points[(y+1)%t.points.length],k=tu([u[0],u[2]],[p[0],p[2]],_,b);k&&(g=k)}let m=Math.hypot(g[0]-u[0],g[1]-u[2])>1e-6?[g[0]+(g[0]-u[0])*.02,g[1]+(g[1]-u[2])*.02]:g;return[u,[u[0],h,u[2]],[m[0],h,m[1]],[m[0],p[1],m[1]],...c.slice(f)]},d=o;return e.from&&r(e.from)&&(d=l(d)),e.to&&r(e.to)&&(d=l([...d].reverse()).reverse()),e.from&&s(e.from)&&(d=a(d)),e.to&&s(e.to)&&(d=a([...d].reverse()).reverse()),d}function Er(o,e){let t=o.points;if(t.length<3)return null;let n=0;for(let r=0;r<t.length;r++){let s=t[r],a=t[(r+1)%t.length];n+=s[0]*a[1]-a[0]*s[1]}let i=null;for(let r=0;r<t.length;r++){let s=t[r],a=t[(r+1)%t.length],l=a[0]-s[0],d=a[1]-s[1],c=Math.hypot(l,d);if(c<1e-6)continue;let u=Math.max(0,Math.min(1,((e[0]-s[0])*l+(e[1]-s[1])*d)/(c*c))),h=Math.hypot(s[0]+l*u-e[0],s[1]+d*u-e[1]),f=n>0?[d/c+0,-l/c+0]:[-d/c+0,l/c+0];(!i||h<i.d)&&(i={d:h,n:f})}return i?i.n:null}function tu(o,e,t,n){let i=[e[0]-o[0],e[1]-o[1]],r=[n[0]-t[0],n[1]-t[1]],s=i[0]*r[1]-i[1]*r[0];if(Math.abs(s)<1e-9)return null;let a=((t[0]-o[0])*r[1]-(t[1]-o[1])*r[0])/s,l=((t[0]-o[0])*i[1]-(t[1]-o[1])*i[0])/s;return a>=0&&a<=1&&l>=0&&l<=1?[o[0]+i[0]*a,o[1]+i[1]*a]:null}var fl=o=>o.toLowerCase().replace(/[_\-]+/g," ").replace(/\s+/g," ").trim();function nu(o,e,t){let n=fl(t);if(!n||n==="unknown"||n==="unavailable"||n==="not home"||n==="away")return null;for(let i of e.floors)for(let r of i.rooms)if([r.name,r.area_id??"",r.area_id?o.areas?.[r.area_id]?.name??"":""].filter(Boolean).map(fl).includes(n))return{floorId:i.id,room:r};return null}function ou(o){let e=o.trim().split(/\s+/).filter(Boolean);return e.length?(e.length>1?e[0][0]+e[e.length-1][0]:e[0].slice(0,2)).toUpperCase():"?"}function ml(o,e){let t=[],n=new Map;for(let i of e.presence){let r=o.states[i.person];if(!r||!i.sensor||r.state!=="home"&&r.state!=="on")continue;let s=o.states[i.sensor];if(!s)continue;let a=nu(o,e,s.state);if(!a)continue;let l=n.get(a.room.id)??0;n.set(a.room.id,l+1);let[d,c]=be(a.room.points),u=-Math.PI/2+.9+l*1.15,h=.75,f=r.attributes.friendly_name??i.person;t.push({id:i.person,name:f,initials:ou(f),picture:r.attributes.entity_picture??null,floorId:a.floorId,roomId:a.room.id,x:d+Math.cos(u)*h,z:c+Math.sin(u)*h})}return t}function gl(o,e,t,n){let i=new Map,r=s=>!!s&&o.states[s]?.state==="on";for(let s of e.floors){let a=new Set;for(let d of s.rooms)for(let c of Fn(o,se(o,d.area_id)))I(c)==="light"&&a.add(c);for(let d of s.placements)I(d.entity_id)==="light"&&a.add(d.entity_id);let l=s.openings.filter(d=>{let c=t.get(d.id);if(!c)return!1;if(d.type==="garage")return(Be(o,c,"garage").cover??1)<.95;if(d.type==="door")return r(c.contact)||r(c.contact2??null);let u=Be(o,c,"window");return u.open>.5||u.tilt>.5||u.open2>.5||u.tilt2>.5}).length;i.set(s.id,{rooms:s.rooms.length,lightsOn:[...a].filter(d=>o.states[d]?.state==="on").length,open:l,persons:n.filter(d=>d.floorId===s.id).length})}return i}function _l(o,e){let t=[e.rooms===1?T(o,"floor_rooms_one"):T(o,"floor_rooms",{n:e.rooms})];return e.lightsOn&&t.push(T(o,"floor_lights",{n:e.lightsOn})),e.open&&t.push(T(o,"floor_open",{n:e.open})),e.persons&&t.push(T(o,"floor_persons",{n:e.persons})),t.join(" \xB7 ")}function bl(o,e,t,n=12,i=180){let r=Math.max(i,e),s=Math.max(i*.5625,t),a={cols:1,tile:Math.min(r,s*16/9)};for(let l=1;l<=Math.max(1,o);l++){let d=Math.ceil(o/l),c=(r-n*(l-1))/l,u=(s-n*(d-1))/d*16/9,h=Math.min(c,u);(h>a.tile||l===1)&&(a={cols:l,tile:h})}if(a.tile<i){let l=Math.max(1,Math.floor((r+n)/(i+n)));return{cols:Math.min(l,Math.max(1,o)),tile:i}}return{cols:a.cols,tile:Math.floor(a.tile)}}function zr(o,e,t){let n=[...t.openings.values()].flatMap(S=>[S.cover,S.contact,S.tilt,S.contact2??null,S.tilt2??null,S.position??null,S.tiltAngle??null]),i=Ks(e),r=i.filter(S=>I(S)==="camera").flatMap(S=>Ve(o,S)),s=i.map(S=>fn(o,S)),a=e.energy,l=e.presence.flatMap(S=>[S.person,S.sensor]),d=e.floors.flatMap(S=>S.rooms.flatMap(v=>se(o,v.area_id).filter(P=>I(P)==="light"))),c=[...t.furniture.values()].flatMap(S=>[S.entity,S.power]),u=e.floors.flatMap(S=>S.furniture.flatMap(v=>[v.state_entity??null,v.state_entity2??null,v.color_entity??null])),h=e.floors.flatMap(S=>S.furniture.flatMap(v=>[v.door_left??null,v.door_right??null,v.soc??null,v.status??null,v.charge??null,v.export??null])),f=(e.settings.roof?.windows??[]).flatMap(S=>[S.cover,S.contact,S.tilt]).filter(S=>!!S&&S!=="none"),p=[...(e.settings.roof?.solar??[]).map(S=>S.entity),...(e.settings.roof?.strings??[]).map(S=>S.entity)].filter(S=>!!S&&S!=="none"),g=e.floors.flatMap(S=>S.furniture.filter(v=>v.type==="robot_vacuum").map(v=>nn(o,t.furniture.get(v.id)?.entity??null,v.room_sensor))),m=e.floors.flatMap(S=>S.furniture.flatMap(v=>(v.pictures??[]).flatMap(P=>[P.entity,...P.image.startsWith("camera:")?[P.image.slice(7)]:[]]))),y=t.heat?e.floors.flatMap(S=>S.rooms.flatMap(v=>se(o,v.area_id).filter(P=>P.startsWith("sensor.")))):[],_=[...Za(e.floors),...L("auto_pro")?Rs(o,e.floors):[],...L("pool")?da(o,e.floors):[]],b=bn(o,e).map(S=>S.entity),k=L("household")?e.floors.flatMap(S=>S.furniture.flatMap(Ma)).filter(S=>S!=="none"):[],z=Tt(o,t.weatherEntityId??e.settings.weather_entity),A=[...i,...r,...n,...s,...c,...u,...h,...g,...f,...p,...m,a.grid,a.solar,a.battery,a.battery_soc,a.consumption,a.tariff,...l,...d,...y,...t.warnings,..._,...b,...k,z,"sun.sun"];return[...new Set(A.filter(S=>!!S))]}function wl(o,e){return String(e&&o.states[e]?.attributes.unit_of_measurement||"m\xB3")}function iu(o,e,t){return(t==="m\xB3"||t==="m3")&&e<10?`${J(o,e*1e3,0)} l`:`${J(o,e,e<10?2:0)} ${t}`}var su=12e4,vl={person:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6m-3 7h6a2 2 0 0 1 2 2v6h-2v6H9v-6H7v-6a2 2 0 0 1 2-2"/></svg>',car:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11a2 2 0 0 1 2 2v5h-2v2h-3v-2H8v2H5v-2H3v-5a2 2 0 0 1 2-2m1.1 0h11.8l-1-3H7.1zM6.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/></svg>',pet:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M8.3 3.5a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2m7.4 0a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2M4.5 8a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3m15 0a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3M12 10c2.5 0 4.6 1.9 5.3 4.3.6 2 .2 3.7-1.3 4.5-1.4.8-2.6-.2-4-.2s-2.6 1-4 .2c-1.5-.8-1.9-2.5-1.3-4.5C7.4 11.9 9.5 10 12 10"/></svg>',motion:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>'},au='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>',lu='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/><path d="M3 3l18 18"/></svg>';function yl(o,e,t){return o.rooms.find(n=>n.points.length>=3&&V([e,t],n.points))?.id??null}function cu(o,e){let t=e.action==="more_info"?e.target:e.data?.entity_id;return typeof t=="string"&&Fe(o.states[t])}var Ar=class extends ue{static properties={hass:{attribute:!1},building:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},explode:{type:Boolean},keepRoof:{attribute:!1},markerMode:{attribute:!1},markerNames:{attribute:!1},heatMode:{attribute:!1},theme:{attribute:!1},accent:{attribute:!1},packs:{attribute:!1},showEnergy:{attribute:!1},flows:{attribute:!1},holograms:{attribute:!1},furnish:{type:Boolean},surfaceGrab:{attribute:!1},furnishTypes:{attribute:!1},trail:{type:Boolean},cameraWall:{attribute:!1},weather:{type:Boolean},weatherEntityId:{attribute:!1},_flash:{state:!0},_proHint:{state:!0},selectedFurniture:{attribute:!1},selectedSet:{attribute:!1},selectedDevice:{attribute:!1},_sky:{state:!0},quality:{attribute:!1},showStats:{type:Boolean},_stats:{state:!0},_error:{state:!0},_energy:{state:!0},_holos:{state:!0},_rows:{state:!0},_meters:{state:!0},_holoOpen:{state:!0},_wallboxW:{state:!0},_plants:{state:!0},_holoOn:{state:!0},_flows:{state:!0},_holoShow:{state:!0},_swipe:{state:!0},_menu:{state:!0},_through:{state:!0},_blend:{state:!0},_wallBig:{state:!0},_find:{state:!0},_walk:{state:!0},walkable:{attribute:!1},petsOn:{attribute:!1},ghostOn:{attribute:!1},_central:{state:!0},_thumbsCompact:{state:!0},_armed:{state:!0},central:{attribute:!1},buttons:{attribute:!1},_thumbs:{state:!0},floorThumbs:{attribute:!1},clean:{attribute:!1},cleanButton:{attribute:!1},roomLabels:{attribute:!1},floorStack:{attribute:!1},panelOpen:{attribute:!1},controlsRight:{attribute:!1},keepView:{attribute:!1},alerts:{attribute:!1},alertJump:{attribute:!1},scenes:{attribute:!1},dimmed:{attribute:!1},autoOrbit:{attribute:!1},startView:{attribute:!1},_low:{state:!0},_narrowStage:{state:!0},_alerts:{state:!0},_sceneFired:{state:!0},replay:{attribute:!1},_info:{state:!0}};infoTimer;seenSeek=0;seenT=0;replayTicked=!1;seenFocus=0;unlistenReplay=null;unwatchDiag=null;detecting=!1;syncMs=0;flashTimer;cloud=0;confirmSet=new Set;trailRows={};trailTimer;holoTimer;holoFolded=new Set;mediaFolded=new Set;mediaGrace=new Map;mediaGraceTimer;mediaVolume=new Map;mediaIntent=new Map;poolTarget=new Map;volumeSent=0;holoIds="";holoFetched=0;holoRefetch=null;shownStartView;throughWall=!1;live=null;resizeObs=null;alertSrc=null;alertTimer;seenAlerts=new Set;roomFlash=null;findIndex=null;tintSig="";thumbTimer;thumbSig="";thumbsAt=0;armTimer;walker=null;pets=null;petsFor=null;petsLoading=!1;ghost=null;ghostLoading=!1;walkKeys=null;walkRoomPts=null;swipeSent=0;swipeTimer;viewer=null;starting=!1;shownStates=new Map;shownPacks=-1;openingLinks=null;linkedRegistry;furnitureLinks=new Map;pickups=new Map;pickupKey="";householdTimer;heatValues=new Map;watched=[];pictureUrls=new Map;cameraTick=0;cameraTimer;cameraScreens=0;throughFloor=null;constructor(){super(),this.building=null,this.replay=null,this._info=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.explode=!0,this.keepRoof=!1,this.markerMode="important",this.heatMode="none",this.theme="neon",this.accent=null,this.furnish=!1,this.trail=!1,this.weather=!0,this.weatherEntityId=null,this._flash=!1,this._proHint=null,this.showEnergy=!0,this.flows=null,this.selectedFurniture=null,this.selectedSet=[],this.selectedDevice=null,this._sky=0,this.quality="auto",this.showStats=!1,this._stats=null,this._error=null,this._energy=null,this._holos=[],this._rows=null,this._holoOpen=!0,this._wallboxW=null,this._plants=[],this._holoOn=!1,this._swipe=null,this._menu=null,this._through=null,this._wallBig=null,this._blend=.6,this._find=null,this._central=!1;try{this._thumbsCompact=localStorage.getItem("neonplan3d.thumbs_compact")==="1"}catch{this._thumbsCompact=!1}this._armed=null,this.central=!0,this.walkable=!0,this.petsOn=!0,this.ghostOn=!0,this._walk=!1,this.buttons=null,this._thumbs=[],this.floorThumbs=!0,this.clean=!1,this.cleanButton=!1,this.roomLabels=!0,this.floorStack="dim",this._low=!1,this.panelOpen=!1,this.controlsRight=!1,this.keepView=!1,this._narrowStage=!1,this.alerts=!0,this.alertJump=!1,this._alerts=[],this.scenes=!0,this._sceneFired=null,this.dimmed=!1,this.autoOrbit=!1,this.startView=null,this.cameraWall=!1,this.holograms=null;try{this._flows=localStorage.getItem("neonplan3d.flows")==="1",this._holoShow=localStorage.getItem("neonplan3d.holos")!=="0"}catch{this._flows=!1,this._holoShow=!0}}connectedCallback(){super.connectedCallback(),this.listenReplay(),this.unwatchDiag=Wi(e=>this.viewer?.setStats(this.showStats||e)),this.hasUpdated&&(this.observeStage(),this.viewer||this.start(),this.watchTrail()),document.addEventListener("visibilitychange",this.onVisible)}onVisible=()=>{document.hidden||this.holoRefetch?.()};disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onVisible),this.stopWalk(),this.pets?.dispose(),this.pets=null,this.petsFor=null,this.ghost?.dispose(),this.ghost=null,this.unlistenReplay?.(),this.unlistenReplay=null,this.unwatchDiag?.(),this.unwatchDiag=null,this.resizeObs?.disconnect(),this.resizeObs=null,clearInterval(this.alertTimer),this.alertTimer=void 0,clearInterval(this.cameraTimer),this.cameraTimer=void 0,this.live=null,clearInterval(this.trailTimer),this.trailTimer=void 0,clearInterval(this.holoTimer),this.holoTimer=void 0,clearInterval(this.householdTimer),this.householdTimer=void 0,this.pickupKey="",this.holoIds="",clearTimeout(this.flashTimer),this.flashTimer=void 0,clearTimeout(this.infoTimer),this.viewer?.dispose(),this.viewer=null}firstUpdated(){this.observeStage(),this.renderRoot.addEventListener("wheel",e=>{let t=e;if(!t.target?.closest?.(".fp3d-holo"))return;let n=this.renderRoot.querySelector("canvas");n&&(t.preventDefault(),n.dispatchEvent(new WheelEvent("wheel",t)))},{passive:!1}),this.start()}observeStage(){let e=this.renderRoot.querySelector(".fp3d-stage");!e||this.resizeObs||typeof ResizeObserver!="function"||(this.resizeObs=new ResizeObserver(t=>{let n=(t[0]?.contentRect.width??1e3)<700;n!==this._narrowStage&&(this._narrowStage=n,this.scheduleThumbs())}),this.resizeObs.observe(e))}async start(){if(!(this.starting||this.viewer)){this.starting=!0;try{let e=await wn();if(!this.isConnected)return;let t=this.renderRoot.querySelector(".fp3d-stage");t.addEventListener("pointerdown",n=>{this._central&&!n.target?.closest?.(".fp3d-central, .fp3d-central-btn")&&(this._central=!1),this._info&&(this._info=null)}),this.viewer=e.createViewer(t,{quality:this.quality,explode:this.explode,onRoomTap:(n,i)=>this.fire("room-tap",{floorId:n,roomId:i}),onFloorTap:n=>this.fire("floor-tap",{floorId:n}),floorInfo:n=>n.rooms.length===1?T(this.hass,"floor_rooms_one"):T(this.hass,"floor_rooms",{n:n.rooms.length}),onBack:()=>this.fire("back",{}),onDeviceTap:(n,i,r)=>this.onDeviceTap(n,i,r),onDeviceHold:(n,i,r)=>this.onDeviceHold(n,i,r),onRoomDoubleTap:(n,i)=>this.onRoomDoubleTap(n,i),onDeviceSwipe:(n,i,r,s,a)=>this.onDeviceSwipe(n,i,r,s,a),onFurnitureSelect:n=>this.fire("furniture-select",{id:n}),onFurnitureMove:(n,i,r)=>this.fire("furniture-move",{id:n,x:i,z:r}),onDeviceSelect:n=>this.fire("device-select",{id:n}),onDeviceMove:(n,i,r)=>this.fire("device-move",{id:n,x:i,z:r}),onStats:n=>{this.showStats&&(this._stats=n),Ci(n)}}),this.viewer.setWallMode(this.wallMode),this.viewer.setKeepView(this.keepView),this.viewer.setTheme(this.theme),this.viewer.setAccent(this.accent??null),this.viewer.setFurnishMode(this.furnish),this.viewer.setSurfaceGrab(this.surfaceGrab??null),this.viewer.setFurnishTypes(this.furnishTypes??null),this.viewer.setAnchorCallback((n,i,r,s,a,l)=>this.placeHolo(n,i,r,s,a,l)),this.viewer.setFloorStack(this.floorStack),this.viewer.setStats(this.showStats||xo()),Qe("3d"),this.viewer.setAutoOrbit(this.autoOrbit?.06:0),this.viewer.setKeepRoof(this.keepRoof),this._low=this.viewer.low,this.viewer.setPacks([...jt()]),this.shownPacks=mt(),this.building&&(this.shownStartView=JSON.stringify(this.startViewOf()),this.viewer.setStartView(this.startViewOf()),this.viewer.setBuilding(this.building)),this.scheduleThumbs(),this.syncDevices(!0),this.syncPets(),this.syncGhost(),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(e){this._error=String(e)}finally{this.starting=!1}}}willUpdate(e){e.has("building")&&Ji(this.building??null),e.has("hass")&&this.hass&&wa(va(this.hass))}updated(e){e.has("hass")&&this.live?.el&&(this.live.el.hass=this.hass),this._central&&(e.has("roomId")&&e.get("roomId")!==void 0||e.has("floorId")&&e.get("floorId")!==void 0)&&(this._central=!1);let t=this.viewer;if(!t)return;if(this._through&&(e.has("roomId")||e.has("floorId"))&&(this.floorId===this.throughFloor?this.throughFloor=null:this._through=null),this.shownPacks!==mt()&&(this.shownPacks=mt(),t.setPacks([...jt()]),this.hass&&this.building&&t.setParked(mr(this.hass,this.building)),this.syncDevices(!0)),e.has("building")&&this.building){let r=JSON.stringify(this.startViewOf()),s=this.shownStartView!==void 0&&this.shownStartView!==r;this.shownStartView=r,t.setStartView(this.startViewOf()),t.setBuilding(this.building),s&&this.floorId===null&&t.resetView()}(e.has("building")||e.has("packs")||e.has("petsOn"))&&this.syncPets(),(e.has("building")||e.has("packs")||e.has("ghostOn"))&&this.syncGhost(),e.has("startView")&&e.get("startView")!==void 0&&(t.setStartView(this.startViewOf()),this.floorId===null&&t.resetView()),(e.has("building")||e.has("theme")||e.has("floorThumbs")||e.has("packs"))&&this.scheduleThumbs();let n=["building","markerMode","heatMode","flows","alerts","dimmed"].some(r=>e.has(r)),i=this.replayTicked&&!!this.replay;this.replayTicked=!1,(n||e.has("hass")||i)&&this.syncDevices(n,i&&(this.trail||this.detecting)),e.has("autoOrbit")&&t.setAutoOrbit(this.autoOrbit?.06:0),(e.has("_thumbs")||e.has("_narrowStage"))&&t.setLabelInset(this._thumbs.length?this.narrowThumbs?136:184:0),e.has("floorId")&&t.setFloor(this.floorId),e.has("roomId")&&(this.roomId||e.get("roomId"))&&t.selectRoom(this.roomId),e.has("wallMode")&&t.setWallMode(this.wallMode),e.has("keepView")&&t.setKeepView(this.keepView),e.has("explode")&&t.setExplode(this.explode),e.has("keepRoof")&&t.setKeepRoof(this.keepRoof),e.has("floorStack")&&t.setFloorStack(this.floorStack),e.has("theme")&&t.setTheme(this.theme),e.has("accent")&&t.setAccent(this.accent??null),e.has("surfaceGrab")&&t.setSurfaceGrab(this.surfaceGrab??null),e.has("furnishTypes")&&t.setFurnishTypes(this.furnishTypes??null),e.has("furnish")&&(t.setFurnishMode(this.furnish),this.syncDevices(!0)),e.has("selectedFurniture")&&t.selectFurniture(this.selectedFurniture),e.has("selectedSet")&&t.selectFurnitureSet(this.selectedSet??[]),e.has("selectedDevice")&&t.setSelectedDevice(this.selectedDevice),(e.has("trail")||e.has("replay"))&&this.watchTrail(),e.has("replay")&&(this.listenReplay(),this.replay||(this._info=null)),(e.has("weather")||e.has("weatherEntityId"))&&this.syncDevices(!0),e.has("quality")&&e.get("quality")!==void 0&&(t.setQuality(this.quality),this._low=t.low,this.replay?.setQuality(this.quality,t.low)),e.has("showStats")&&t.setStats(this.showStats||xo()),e.has("building")&&(this.findIndex=null)}syncDevices(e,t=!1){let n=this.viewer,i=this.building;if(!n||!i||!this.hass)return;let r=this.hass;(e||!this.openingLinks||this.linkedRegistry!==r.entities)&&(this.openingLinks=tn(r,i.floors),this.furnitureLinks=et(r,i.floors),this.linkedRegistry=r.entities,this.findIndex=null,this.alertSrc=this.alerts?nr(r,i,this.weatherEntityId):null,this.watchHousehold(r,i),this.watched=zr(r,i,{openings:this.openingLinks,furniture:this.furnitureLinks,heat:this.heatMode!=="none"||this.roomLabels,warnings:this.alertSrc?or(this.alertSrc):[],weatherEntityId:this.weatherEntityId}),e=!0);let s=e||t||this.watched.some($=>this.shownStates.get($)!==r.states[$]),a=!!this.replay&&this.replay.seek!==this.seenSeek;if(this.seenSeek=this.replay?.seek??0,this.seenT=this.replay?.t??0,!s)return;let l=this.showStats?performance.now():0;this.shownStates=new Map(this.watched.map($=>[$,r.states[$]]));let d=Da(r,i),c=Ns(r,i),u=this.furnitureMarkers(r,i,new Set(c.map($=>$.id)),new Set(d.map($=>$.powerEntity)));d.push(...u.consumers);let h=Ha(r,i,d,Ht(i,$=>this.furnitureLinks?.get($.id)?.power??null)),f=new Map(d.filter($=>$.id!==$.powerEntity).map($=>[$.id,$.power]));this.confirmSet=xt(r,i.floors);let p=this.trail?this.trailNow(r,i):[],g=L("camera_cockpit")&&!this.dimmed?this.detectionPins(r,c):[];this.detecting=g.length>0;let m=L("energy_pro"),y=new Set(L("auto_pro")?i.floors.flatMap($=>$.furniture.filter(R=>R.type==="parking"&&R.car&&gn(r,R)).map(R=>R.id)):[]);n.setDevices([...[...c,...u.markers].map($=>{let R=$.show==="no_power"||"energyDevice"in $&&$.energyDevice?null:f.get($.id)??null,W={...$,power:R,powerText:R===null?void 0:te(r,R),effect:this.dimmed?!1:$.effect},K=$.ownName&&($.showName||this.markerNames)?$.ownName:"",D=L("sound")&&this.mediaCardUp(r,$.id)||L("auto_pro")&&!!$.furnitureId&&y.has($.furnitureId);return{...W,pin:this.showPin(W)&&!D,full:$.show==="always",caption:K}}),...(m&&(this.flows??this._flows)&&!this.dimmed&&h.grid!==null?[this.gridPin(r,i,h.grid)]:[]).filter($=>!!$),...g,...p.map(($,R)=>({id:`trail:${R}`,floorId:$.floorId,roomId:null,x:$.x,z:$.z,y:.3+.4*p.slice(0,R).filter(W=>W.entity===$.entity).length,icon:el,name:Z(r,$.entity),text:eo(r,$.time),active:!1,unavailable:!1,glow:null,pin:!0}))]),n.setTrail(p,this.replay?this.robotPaths(r,i):[]),n.setPickTargets(u.targets,this.openingTargets()),n.setScreens(u.screens),n.setFridgeDoors(Oo(r,i.floors)),n.setAwnings(zs(r,i.floors)),n.setRobots(this.robotInfos(r,i));let _=new Map;for(let $ of i.settings.roof?.windows??[]){let R=B=>B&&B!=="none"?B:null,W=Be(r,{cover:R($.cover),contact:R($.contact),tilt:R($.tilt)},"window"),K=R($.window)?r.states[R($.window)]:void 0,D=W.open;if(K&&!N(K)){let B=K.attributes.current_position;D=typeof B=="number"?Math.min(1,Math.max(0,B/100)):K.state==="open"||K.state==="opening"?1:0}_.set($.id,{open:D,tilt:W.tilt,cover:W.cover??0})}n.setRoofWindows(_),n.setParked(mr(r,i));let b=new Map(i.floors.flatMap($=>$.openings.map(R=>[R.id,R.type]))),k=new Map([...this.openingLinks].map(([$,R])=>[$,Be(r,R,b.get($))]));n.setOpeningStates(k,a),this.setAlerts(this.alertSrc?pa(r,i,this.alertSrc,this.openingLinks):[]);let z=[...c,...u.markers].map($=>`${$.id}:${$.glow?`${$.glow.level.toFixed(1)}/${$.glow.color.map(R=>R.toFixed(1)).join("/")}`:0}`).join(";")+"|"+[...k].map(([$,R])=>`${$}:${R.open}:${R.cover===null?"-":R.cover.toFixed(1)}`).join(";");if(z!==this.thumbSig){let $=this.thumbSig==="";this.thumbSig=z,$||this.scheduleThumbs(1500)}let A=i.floors.flatMap($=>$.furniture.filter(R=>R.type==="home_battery").map(R=>({floorId:$.id,x:R.x,z:R.z})))[0]??(i.energy.battery?i.floors.flatMap($=>$.placements.filter(R=>R.entity_id===i.energy.battery).map(R=>({floorId:$.id,x:R.x,z:R.z})))[0]:null),S=m?Ka(r,i,h.solar):null,v=i.settings.roof.hologram??We,P=[...i.settings.roof.solar??[]].sort(($,R)=>R.rows*R.cols-$.rows*$.cols),M=i.settings.roof.strings??[],E=$=>($.string?M.find(R=>R.id===$.string)?.inverter:null)??null,F=v.plant_floor?"all":"house",G=($,R,W,K)=>{let D=ot(i,$);if(!D)return null;let[B,X]=rt(D,$),Y=$.u+B/2+R,re=$.v+X/2+W,de=[D.o[0]+D.eu[0]*Y+D.es[0]*re,D.o[1]+D.eu[1]*Y+D.es[1]*re,D.o[2]+D.eu[2]*Y+D.es[2]*re],le=D.wall?.floorId??(D.unbounded?i.floors.find(ge=>ge.elevation===Math.min(...i.floors.map(ut=>ut.elevation)))?.id??i.floors[0].id:[...i.floors].sort((ge,ut)=>ut.elevation-ge.elevation)[0].id);return{p:[de[0]+D.n[0]*.05,de[1]+D.n[1]*.05,de[2]+D.n[2]*.05],n:[D.n[0],D.n[1],D.n[2]],floorId:le,size:K,roof:!0,views:F}},C=[],O=[],j=h.grid!==null||h.battery!==null||h.solar!==null,oe=v.place==="free"&&Number.isFinite(v.x)&&Number.isFinite(v.z),H=m&&h.solar!==null&&!oe?P.find($=>$.id===v.field)??P[0]:void 0,Q=H?E(H):null,ce=!!H&&!!Q&&!P.some($=>$.id!==H.id&&E($)===Q)&&v.right===0&&v.up===0,ae=(()=>{if(!ce||!H)return 0;let $=ot(i,H);return $?rt($,H)[0]/2+1.2:0})(),_e=H?G(H,v.right+ae,v.up,v.size):null,Pe=this.devicePowers(r,i),Ee=m&&h.solar!==null?i.energy.solar?[i.energy.solar]:Ht(i,$=>this.furnitureLinks?.get($.id)?.power??null).solar:[];if(_e)C.push(_e),O.push({kind:"main",name:T(r,"holo_title"),w:null,dayIds:Ee,battery:null});else if(m&&j&&oe){let $=0,R=0,W=0,K=1/0,D=i.floors[0];for(let re of i.floors){re.rooms.length&&(K=Math.min(K,re.elevation)),re.rooms.length&&(!D.rooms.length||re.elevation+re.height>D.elevation+D.height)&&(D=re);for(let de of re.rooms)for(let[le,ge]of de.points)$+=le,R+=ge,W++}W&&($/=W,R/=W);let B=v.x-$,X=v.z-R,Y=Math.hypot(B,X);C.push({p:[v.x,(Number.isFinite(K)?K:0)+(v.height??3),v.z],n:Y>.01?[B/Y,0,X/Y]:[1,0,0],floorId:D.id,size:v.size,roof:!0,views:F}),O.push({kind:"main",name:T(r,"holo_title"),w:null,dayIds:Ee,battery:null})}else if(m&&j&&i.floors.some($=>$.rooms.length)){let $=-1/0,R=1/0,W=-1/0,K=0,D=i.floors[0];for(let B of i.floors){for(let X of B.rooms)for(let[Y,re]of X.points)$=Math.max($,Y),R=Math.min(R,re),W=Math.max(W,re);B.rooms.length&&B.elevation+B.height>K&&(K=B.elevation+B.height,D=B)}C.push({p:[$+.6,K+.4,(R+W)/2],n:[1,0,0],floorId:D.id,size:v.size,roof:!0,views:F}),O.push({kind:"main",name:T(r,"holo_title"),w:null,dayIds:Ee,battery:null})}if(m&&h.solar!==null){let $=new Set;for(let R of i.floors)for(let W of R.furniture.filter(K=>K.type==="inverter")){if(W.plant_card===!1||$.has(W.id))continue;$.add(W.id);let K=P.filter(de=>E(de)===W.id),D=(H&&W.id===Q?K.find(de=>de.id!==H.id):null)??K[0],B=this.furnitureLinks?.get(W.id)?.power??null,X=D?G(D,W.plant_right??0,W.plant_up??0,v.size*.85):null;if(!X||!B)continue;let Y=R.furniture.filter(de=>de.type==="home_battery").sort((de,le)=>Math.hypot(de.x-W.x,de.z-W.z)-Math.hypot(le.x-W.x,le.z-W.z))[0],re=Y?.soc&&Y.soc!=="none"?Number(r.states[Y.soc]?.state):NaN;C.push(X),O.push({kind:"plant",name:W.name||Me(r,W.type),w:Math.max(0,ne(r.states[B])??0),dayIds:[B],battery:Y?{soc:Number.isFinite(re)?re:null,w:Pe.get(Y.id)??null}:null})}}let dt=v.device_house===!1?"floor":"all";if(m)for(let $ of i.floors){for(let R of $.furniture){if(!R.holo)continue;let W=this.furnitureLinks?.get(R.id)?.power??null,K=d.find(B=>B.id===R.id);if(!W&&!K)continue;let D=$.elevation+pe($,R)+R.h;C.push({p:[R.x,D+.1,R.z],n:[0,1,0],floorId:$.id,size:v.size*.7,roof:!1,views:dt,room:yl($,R.x,R.z)}),O.push({kind:"device",name:R.name||Me(r,R.type),w:K?.power??(W?ne(r.states[W]):null),dayIds:W?[W]:[],battery:null})}for(let R of $.placements){if(!R.holo)continue;let W=fn(r,R.entity_id);if(!W)continue;let K=$.elevation+(R.y??.4)+.2;C.push({p:[R.x,K,R.z],n:[0,1,0],floorId:$.id,size:v.size*.7,roof:!1,views:dt,room:yl($,R.x,R.z)}),O.push({kind:"device",name:R.name||Z(r,R.entity_id),w:ne(r.states[W]),dayIds:[W],battery:null})}}let ye=[];if(L("sound")){let $=new Set,R=(i.settings.roof.hologram??We).size,W=(D,B,X,Y,re,de)=>{let le=r.states[B];if(!le||I(B)!=="media")return;if($.has(B)){let qe=ye.find(so=>so.id===B);qe&&ye.push({...qe,id:`${B}#${ye.filter(so=>so.id.startsWith(`${B}#`)).length+2}`,floorId:D.id,x:X,z:Y,members:[B]});return}$.add(B);let ge=this.ro?void 0:this.mediaGrace.get(B),ut=[le.attributes.media_title,le.attributes.app_name,le.attributes.source].find(qe=>typeof qe=="string"&&!!qe.trim())??"";if(!(!N(le)&&(le.state==="playing"||le.state==="paused"&&!!ut||le.state==="on"&&!!le.attributes.source))){ge&&ge.until>Date.now()?(ye.push({...ge.source,playing:!1,level:0}),C.push(ge.anchor),O.push({...ge.card,media:{...ge.card.media,playing:!1}}),clearTimeout(this.mediaGraceTimer),this.mediaGraceTimer=setTimeout(()=>this.syncDevices(!0),Math.max(500,ge.until-Date.now()+100))):N(le)||(this.mediaGrace.delete(B),ye.push({id:B,floorId:D.id,x:X,z:Y,level:0,playing:!1,members:[]}));return}let io=le.state==="playing",ze=le.attributes,Ur=typeof ze.volume_level=="number"?Math.min(1,Math.max(0,ze.volume_level)):.5,Al=Array.isArray(ze.group_members)?ze.group_members.filter(qe=>qe!==B):[];ye.push({id:B,floorId:D.id,x:X,z:Y,level:io?.3+.7*Ur:0,playing:io,members:Al});let Rl=ut||T(r,"holo_media_playing"),jr={p:[X,D.elevation+re+.12,Y],n:[0,1,0],floorId:D.id,size:R*.7,roof:!1,views:"all"},qr={kind:"media",name:de,w:null,dayIds:[],battery:null,media:{id:B,title:Rl,artist:typeof ze.media_artist=="string"?ze.media_artist:typeof ze.media_album_name=="string"?ze.media_album_name:"",picture:typeof ze.entity_picture=="string"?ze.entity_picture:null,volume:Math.round(Ur*100),playing:io}};C.push(jr),O.push(qr),this.ro||this.mediaGrace.set(B,{until:Date.now()+45e3,card:qr,source:ye[ye.length-1],anchor:jr})},K=(D,B)=>{for(let X of D.furniture){if((X.entity!=null&&X.entity!=="none")!==B)continue;let Y=this.furnitureLinks?.get(X.id)?.entity;Y&&W(D,Y,X.x,X.z,pe(D,X)+X.h,X.name||Me(r,X.type))}};for(let D of i.floors)K(D,!0);for(let D of i.floors)for(let B of D.placements)W(D,B.entity_id,B.x,B.z,B.y??1.1,B.name||Z(r,B.entity_id));for(let D of i.floors)K(D,!1)}if(L("auto_pro")){let $=(i.settings.roof.hologram??We).size;for(let R of i.floors)for(let W of R.furniture){if(W.type!=="parking"||!W.car)continue;let K=gn(r,W);if(!K)continue;let D=In(r,W);if(D.soc===null&&D.range===null&&D.locked===null&&D.climateOn===null)continue;let B=Ya(W,K),X=pe(R,W)+(B?.h??1.6);C.push({p:[W.x,R.elevation+X+.25,W.z],n:[0,1,0],floorId:R.id,size:$*.7,roof:!1,views:"all"});let Y=D.entities;O.push({kind:"car",name:W.name||Me(r,K),w:null,dayIds:[],battery:null,car:{spot:W.id,soc:D.soc,range:D.range,rangeUnit:D.rangeUnit,chargingW:D.chargingW,charging:D.charging,locked:D.locked,climateOn:D.climateOn,lock:Y.lock,climate:Y.climate,charge:Y.charging&&/^(switch|input_boolean)\./.test(Y.charging)?Y.charging:null}})}}if(L("pool")){let $=(i.settings.roof.hologram??We).size,R=[];for(let{floor:W,area:K}of st(i.floors)){let D=it(r,Ft(K.pool,i.floors));if(!Object.values(D.entities).some(Boolean))continue;let B=ua(D),X=Yt(W,K);R.push({id:K.id,floorId:W.id,points:K.points,y:X,color:B.color,level:this.dimmed?B.level*.4:B.level,floorY:Zt(W,K),flow:!!D.pump?.on,heat:!!D.heater?.heating,cover:D.cover?.closed??0});let[Y,re]=be(K.points);C.push({p:[Y,W.elevation+Math.max(X,0)+(K.above?.6:1.1),re],n:[0,1,0],floorId:W.id,size:$*.7,roof:!1,views:"all"}),O.push({kind:"pool",name:T(r,"out_pool"),w:null,dayIds:[],battery:null,pool:{area:K.id,state:D}})}n.setPools(R)}else n.setPools([]);n.setSound(ye);let Hr=this._walk?this.walkRoomPts:null,Ir=C.map($=>!this._walk||!!Hr&&V([$.p[0],$.p[2]],Hr)),Wr=O.filter(($,R)=>Ir[R]);n.setAnchors(C.filter(($,R)=>Ir[R])),JSON.stringify(Wr)!==JSON.stringify(this._holos)&&(this._holos=Wr),n.setSolarLevels(S&&!this.dimmed?Va(i,S):new Map);let Lr=!m||!(this.flows??this._flows)||this.dimmed?[]:Wa({building:i,consumers:d,summary:h,battery:A??null,fieldPower:S,devicePower:this.devicePowers(r,i)}).map($=>({floorId:$.floorId,a:$.a,b:$.b,dist:$.dist,power:$.power,color:Ga($.kind,h)})),Cr=this.poolPipes(r,i);n.setFlows(this.dimmed?Lr:[...Lr,...Cr.flows]),n.setPipes(Cr.tubes);let Or=[];n.setPersons(Or);let El=gl(r,i,this.openingLinks,Or);n.setFloorInfo(new Map([...El].map(([$,R])=>[$,_l(r,R)])));let yn=r.states["sun.sun"]?.attributes,kn=typeof yn?.elevation=="number"?yn.elevation:null;n.setSun(kn!==null&&typeof yn?.azimuth=="number"?{elevation:kn,azimuth:yn.azimuth}:null);let Br=this.weather&&!this.dimmed&&L("weather")?aa(r,Tt(r,this.weatherEntityId??i.settings.weather_entity),i.settings.rain_entity):null,Lt=Br?la(Br,i.settings.weather_effects):null;this.cloud=Lt?.cloud??0,this._sky=(kn===null?0:Math.min(1,Math.max(0,(kn+4)/16)))*(1-.45*this.cloud);let zl=Lt?Lt.sky:(i.settings.weather_effects??["sky"]).includes("sky");n.setWeather(this.weather&&!this.dimmed&&L("weather")?{...Lt??{rain:0,snow:0,fog:0,cloud:0,wind:0},sky:this.skyColor(),disc:zl}:null),this.watchLightning(!!Lt?.lightning),this.applyTint();let Nr=h.grid!==null||h.solar!==null||h.battery!==null||h.tariff!==null?h:null;JSON.stringify(Nr)!==JSON.stringify(this._energy)&&(this._energy=Nr);let Vr=d.some($=>$.wallbox)?d.filter($=>$.wallbox).reduce(($,R)=>$+R.power,0):null,Kr=i.floors.flatMap($=>$.furniture.filter(R=>R.type==="inverter")).map($=>{let R=this.furnitureLinks?.get($.id)?.power,W=R?ne(r.states[R]):null;return W===null?null:{name:$.name||Me(r,$.type),w:Math.max(0,W)}}).filter($=>!!$);JSON.stringify(Kr)!==JSON.stringify(this._plants)&&(this._plants=Kr),Vr!==this._wallboxW&&(this._wallboxW=Vr),this.watchSolarDay([...new Set(O.flatMap($=>$.dayIds))]);let Gr=L("energy_pro");this.watchMeters(Gr?i.energy.gas??null:null,Gr?i.energy.water??null:null),l&&(this.syncMs=this.syncMs*.8+(performance.now()-l)*.2)}listenReplay(){this.unlistenReplay?.(),this.unlistenReplay=null;let e=this.replay;!e||!this.isConnected||(this.seenT=e.t,this.seenFocus=e.focusSeq,this.unlistenReplay=e.listen(()=>{this.replay===e&&(e.focusSeq!==this.seenFocus&&(this.seenFocus=e.focusSeq,e.focus&&this.showEntity(e.focus)),!(e.t===this.seenT&&e.seek===this.seenSeek)&&(e.pulses.length&&this.viewer?.flashDevices(e.pulses),this.seenT=e.t,!(e.seek===this.seenSeek&&!this.trail&&!this.detecting&&!this._holos.length)&&(this.replayTicked=!0,this.requestUpdate())))}))}showEntity(e){let t=this.hass,n=this.building;if(!t||!n)return;let i=(this.findIndex??=gr(t,n)).find(s=>s.entity===e);if(i){this.goTo(i);return}let r=t.entities?.[e]?.area_id??t.devices?.[t.entities?.[e]?.device_id??""]?.area_id??null;for(let s of n.floors){let a=s.openings.find(u=>{let h=this.openingLinks?.get(u.id);return!!h&&[h.contact,h.tilt,h.contact2,h.tilt2,h.cover].includes(e)}),l=s.rooms.find(u=>u.points.length>=3&&(a?u.id===a.room_id:!!r&&u.area_id===r));if(!l)continue;let[d,c]=be(l.points);this.goTo({kind:"device",name:l.name,where:"",floorId:s.id,roomId:l.id,entity:e,icon:null,x:d,z:c,y:1});return}}now(){return this.replay?.t??Date.now()}get ro(){return!!this.replay}historyEntities(){let e=this.building,t=this.hass;if(!e||!t)return{entities:[],openings:[],furniture:[],low:this._low};let n=!this.openingLinks||this.linkedRegistry!==t.entities,i=n?tn(t,e.floors):this.openingLinks,r=n?et(t,e.floors):this.furnitureLinks,s=or(nr(t,e,this.weatherEntityId)),a=zr(t,e,{openings:i,furniture:r,heat:!0,warnings:s,weatherEntityId:this.weatherEntityId}),l=L("auto_pro")?e.floors.flatMap(d=>d.furniture.filter(c=>c.type==="parking").flatMap(c=>[typeof c.entity=="string"?c.entity:null,c.car?Hn(t,c).tracker:null]).filter(c=>!!c&&c.startsWith("device_tracker."))):[];return{entities:a,openings:[...i],furniture:[...r],low:this._low,cars:l,energy:L("energy_pro"),auto:L("auto_pro")}}proHint(e){this._proHint=e}showInfo(e,t,n){this._menu=null,this._info={entity:e,x:t,y:n},clearTimeout(this.infoTimer),this.infoTimer=setTimeout(()=>this._info=null,4e3)}renderInfo(){let e=this._info;if(!e||!this.hass)return x;let t=this.hass,n=t.states[e.entity],i=fe(t,n),r=I(e.entity)==="light"&&n?.state==="on"&&i.endsWith("%")?`${T(t,"state_on")} \xB7 ${i}`:i,s=n?.last_changed?T(t,"tt_since",{time:eo(t,Date.parse(n.last_changed))}):"";return w`<div class="fp3d-swipe fp3d-info" style="left:${e.x}px;top:${e.y}px">
      <span>${Z(t,e.entity)}</span>
      <b>${s?`${r} \xB7 ${s}`:r}</b>
    </div>`}devicePowers(e,t){let n=new Map;for(let i of t.floors)for(let r of i.furniture){if(r.type!=="inverter"&&r.type!=="home_battery")continue;let s=this.furnitureLinks?.get(r.id)?.power,a=r.type==="home_battery"&&r.charge&&r.charge!=="none"?ne(e.states[r.charge]):null,l=s?ne(e.states[s],r.type==="home_battery"&&t.energy.battery_invert&&a===null):null;l!==null&&a!==null?l=Math.max(0,l)-Math.max(0,a):l===null&&a!==null&&(l=-Math.max(0,a)),l!==null&&n.set(r.id,l)}return n}detectionPins(e,t){let n=[],i=new Set(this.building?.floors.flatMap(r=>r.placements.filter(s=>s.detect_pins===!1).map(s=>s.entity_id))??[]);for(let r of t){if(!r.model?.startsWith("camera")||i.has(r.id))continue;let s=this.now(),a=Ve(e,r.id).filter(f=>{let p=e.states[f];return p?p.state==="on"?!0:p.state==="off"&&!!p.last_changed&&s-Date.parse(p.last_changed)<su:!1}),l=new Map;for(let f of a){let p=Vs(e,f);l.has(p)||l.set(p,f)}l.size>1&&l.delete("motion");let d=(r.rotation??0)*Math.PI/180,c=[-Math.sin(d),Math.cos(d)],u=r.model==="camera_ceiling",h=0;for(let[f,p]of l){let g=e.states[p],m=g?.last_changed?eo(e,Date.parse(g.last_changed)):"";n.push({id:`detect:${p}`,floorId:r.floorId,roomId:r.roomId,x:r.x+(u?0:c[0]*1.1),z:r.z+(u?0:c[1]*1.1),y:1.4+.4*h++,icon:vl[f]??vl.motion,name:Z(e,p),text:`${T(e,`detect_${f}`)}${m?` \xB7 ${m}`:""}`,active:!0,unavailable:!1,glow:null,pin:!0})}}return n}gridPin(e,t,n){let i=ur(t);if(!i)return null;let r=Math.abs(n)<5,s=t.settings.outage_entity;return s&&jn(e.states[s])?{id:"grid",floorId:i.floorId,roomId:null,x:i.end[0],z:i.end[1],y:.9+i.height,icon:lu,name:T(e,"holo_grid"),text:T(e,"power_outage"),active:!0,unavailable:!1,glow:null,pin:!0}:{id:"grid",floorId:i.floorId,roomId:null,x:i.end[0],z:i.end[1],y:.9+i.height,icon:au,name:T(e,"holo_grid"),text:r?te(e,0):`${T(e,n<0?"energy_grid_export":"energy_grid_import")} ${te(e,Math.abs(n))}`,active:!r,unavailable:!1,glow:null,pin:!0}}meterKey="";meterTimer;watchMeters(e,t){let n=[e,t].filter(s=>!!s),i=this.replay?"":n.join(",");if(i===this.meterKey)return;if(this.meterKey=i,clearInterval(this.meterTimer),this.meterTimer=void 0,!i){this._meters=null;return}let r=async()=>{if(!this.hass||document.hidden)return;let s=await Fa(this.hass,n);this.meterKey===i&&s&&(this._meters={gas:e?s.get(e)??null:null,water:t?s.get(t)??null:null})};r(),this.meterTimer=setInterval(()=>{r()},3e5)}poolPipes(e,t){let n=L("pool"),r=[...new Map(t.floors.flatMap(l=>l.furniture.filter(d=>Xt.includes(d.type)).map(d=>[d.id,d]))).values()].map(l=>({id:l.id,type:l.type,open:l.valve_open!==!1,valve:l.valve_position??null})),s=[],a=[];for(let{floor:l,area:d}of st(t.floors)){let c=d.pool;if(!c.pipes?.length&&!c.joints?.length)continue;let u=it(e,Ft(c,t.floors)),h=c.ports??[],f=ul({pipes:c.pipes??[],ports:h,devices:r,pumpOn:n&&!!u.pump?.on,heaterOn:!!u.heater?.on,heating:!!u.heater?.heating}),p=pl(t,l,d),g=(m,y)=>Pr(m,y,d,l);s.push(...hl(c.pipes??[],f,p,g));for(let m of h){if(m.kind!=="inlet")continue;let y=p(`port:${m.id}`),_=y&&Er(d,[y.x,y.z]);if(!y||!_)continue;let b=(c.pipes??[]).find(z=>z.to===`port:${m.id}`),k=b?f.get(b.id):void 0;a.push({floorId:l.id,points:[[y.x+_[0]*.03,y.y,y.z+_[1]*.03],[y.x-_[0]*.09,y.y,y.z-_[1]*.09]],radius:.035,water:k?.active?oo(k):null,fittings:[]})}for(let m of c.joints??[]){if(m.kind!=="wall"&&m.kind!=="floor")continue;let y=p(`joint:${m.id}:inside`),_=p(`joint:${m.id}:outside`),b=m.kind==="floor"?.03:y.y;a.push({floorId:l.id,points:[[y.x,b,y.z],[_.x,_.y,_.z]],radius:.05,water:null,fittings:[]})}for(let m of c.pipes??[]){let y=Pr(vn(m,p),m,d,l);if(y.length<2)continue;let _=f.get(m.id),b=[],k=xr(y);for(let[z,A]of[[m.from,.04],[m.to,k-.04]]){let S=z.startsWith("dev:")||z.startsWith("joint:")?no(y,A):null;S&&b.push({kind:"sleeve",p:S.p,dir:S.dir})}for(let z of m.fittings??[]){let A=no(y,z.at);A&&b.push({kind:z.kind,p:A.p,dir:A.dir,open:z.open!==!1})}a.push({floorId:m.floor_id,points:y,radius:.025,water:_?.active?oo(_):null,fittings:b})}}return{flows:s,tubes:a}}watchSolarDay(e){let t=this.replay;if(t){clearInterval(this.holoTimer),this.holoTimer=void 0;let r=`tt|${e.join(",")}|${Math.floor(t.t/3e5)}`;if(r===this.holoIds)return;this.holoIds=r,this._rows=e.length?t.stats(e,new Date(t.t).setHours(0,0,0,0),t.t+1):null;return}let n=e.join(",");if(n===this.holoIds)return;if(this.holoIds=n,clearInterval(this.holoTimer),this.holoTimer=void 0,!e.length){this._rows=null;return}let i=async()=>{if(!this.hass||document.hidden)return;this.holoFetched=Date.now();let r=await Ba(this.hass,e);this.holoIds===n&&(this._rows=r)};i(),this.holoTimer=setInterval(()=>{i()},3e5),this.holoRefetch=()=>{Date.now()-this.holoFetched>3e5&&i()}}holoBoxes=[];holoSizes=new Map;placeHolo(e,t,n,i,r,s){(!this.holoBoxes.length||e<=this.holoBoxes[this.holoBoxes.length-1].i)&&(this.holoBoxes=[]);let a=this.renderRoot.querySelector(`.fp3d-holo[data-holo="${e}"]`),l=this.renderRoot.querySelector(`.fp3d-holo-link[data-holo="${e}"]`),d=this._holos[e]?.kind==="main";if(!a){d&&this._holoOn&&(this._holoOn=!1);return}d&&i!==this._holoOn&&(this._holoOn=i);let c=this._holos[e],u=(this.building?.settings.roof.hologram??We).device_min_w??0;c?.kind==="device"&&u>0&&(c.w??0)<u&&(i=!1);let h=!i;if(a.hidden!==h&&(a.hidden=h),l&&l.hasAttribute("hidden")!==h&&l.toggleAttribute("hidden",h),!i)return;let f=r*.8,p=34*f,g=46*f,m=t+(s?p:-p),y=n-g,_=this.holoSizes.get(e),b=performance.now();(!_||b-_.at>2e3)&&(_={w:a.offsetWidth||184,h:a.offsetHeight||90,at:b},this.holoSizes.set(e,_));let k=_.w*f,z=_.h*f,A=s?m:m-k,S=A+k;for(let P=0;P<6;P++){let M=this.holoBoxes.find(E=>A<E.x1+4&&S>E.x0-4&&y-z<E.y1+4&&y>E.y0-4);if(!M)break;y=M.y0-6}this.holoBoxes.push({i:e,x0:A,x1:S,y0:y-z,y1:y});let v=s||(this.building?.settings.roof.hologram??We).mirror!==!1;if(a.style.transform=v?`translate(${m.toFixed(1)}px, ${y.toFixed(1)}px) scale(${(s?f:-f).toFixed(3)}, ${f.toFixed(3)}) translate(0, -100%)`:`translate(${A.toFixed(1)}px, ${y.toFixed(1)}px) scale(${f.toFixed(3)}) translate(0, -100%)`,l){let P=l.firstElementChild,M=l.lastElementChild;P?.setAttribute("x1",t.toFixed(1)),P?.setAttribute("y1",n.toFixed(1)),P?.setAttribute("x2",m.toFixed(1)),P?.setAttribute("y2",y.toFixed(1)),M?.setAttribute("cx",t.toFixed(1)),M?.setAttribute("cy",n.toFixed(1))}}renderHologram(){let e=this._energy;if(!(L("energy_pro")||L("sound")||L("auto_pro")||L("pool"))||this.roomId&&!(this.building?.settings.roof.hologram??We).device_room||!(this.showEnergy||this.holograms)||!this.holoVisible())return x;let t=this.floorId===null||(this.building?.floors.length??0)<=1,n=!!e&&(e.solar!==null||e.grid!==null||e.battery!==null)&&t;return this._holos.map((i,r)=>i.kind==="pool"?this.renderPoolCard(i,r):i.kind==="car"?this.renderCarCard(i,r):i.kind==="media"?this.renderMediaCard(i,r):i.kind==="device"?this.renderDeviceCard(i,r):n?this.renderHoloCard(i,r,e):x)}renderCarCard(e,t){let n=this.hass,i=p=>T(n,p),r=e.car,s=!this.mediaFolded.has(r.spot),a=()=>{this.mediaFolded.has(r.spot)?this.mediaFolded.delete(r.spot):this.mediaFolded.add(r.spot),this.requestUpdate()},l=(p,g,m)=>{n.callService(p,g,{entity_id:m})},d=(p,g)=>p.startsWith("climate.")?l("climate",g?"turn_on":"turn_off",p):l("homeassistant",g?"turn_on":"turn_off",p),c=()=>{if(!r.lock)return;let p=r.lock.startsWith("lock.");if(r.locked){if(!confirm(i("car_unlock_confirm")))return;p?l("lock","unlock",r.lock):l("homeassistant","turn_off",r.lock)}else p?l("lock","lock",r.lock):l("homeassistant","turn_on",r.lock)},u=r.soc===null?"#37e0ff":r.soc>=50?"#4dff80":r.soc>=20?"#ffcc40":"#ff4d40",h=!!r.lock&&/^(lock|input_boolean|switch)\./.test(r.lock),f=!!r.climate&&/^(climate|switch|input_boolean)\./.test(r.climate);return w`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-car ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${e.name}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" @click=${a}>
            <span>🚗 ${e.name}</span><span class="fp3d-holo-live">${r.charging?`\u26A1 ${i("car_charging_short")}`:r.locked===null?"":r.locked?"\u{1F512}":"\u{1F513}"}</span>
          </div>
          <div class="fp3d-holo-car-main">
            <b style="color:${u}">${r.soc!==null?`${Math.round(r.soc)} %`:"\u2013"}</b>
            <span>${r.range!==null?`${J(n,r.range,0)} ${r.rangeUnit}`:""}${r.charging&&r.chargingW?` \xB7 ${te(n,r.chargingW)}`:""}</span>
          </div>
          ${r.soc!==null?w`<div class="fp3d-holo-car-bar"><i style="width:${Math.max(2,Math.min(100,r.soc))}%;background:${u}"></i></div>`:x}
          ${s&&!this.ro&&(h||f||r.charge)?w`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">
                ${h?w`<button title=${r.locked?i("car_unlock_btn"):i("car_lock_btn")} @click=${c}>${r.locked?"\u{1F512}":"\u{1F513}"}</button>`:x}
                ${f?w`<button class=${r.climateOn?"fp3d-holo-on":""} title=${i("car_climate")} @click=${()=>d(r.climate,!r.climateOn)}>❄</button>`:x}
                ${r.charge?w`<button class=${r.charging?"fp3d-holo-on":""} title=${i("car_charging")} @click=${()=>d(r.charge,!r.charging)}>⚡</button>`:x}
              </div>`:x}
        </div>
      </div>`}renderPoolCard(e,t){let n=this.hass,i=A=>T(n,A),{area:r,state:s}=e.pool,a=!this.mediaFolded.has(r),l=()=>{this.mediaFolded.has(r)?this.mediaFolded.delete(r):this.mediaFolded.add(r),this.requestUpdate()},d=(A,S,v,P={})=>{n.callService(A,S,{entity_id:v,...P})},c=s.heater,u=c?this.poolTarget.get(c.id):void 0;u&&c&&(c.target!==null&&Math.abs(u.v-c.target)<.01||Date.now()-u.at>3e4)&&this.poolTarget.delete(c.id);let h=(c&&this.poolTarget.get(c.id)?.v)??c?.target??null,f=A=>{if(!c||c.kind==="switch")return;let S=Math.min(c.max,Math.max(c.min,Math.round(A/c.step)*c.step));this.poolTarget.set(c.id,{v:S,at:Date.now()}),this.requestUpdate(),d(c.kind,"set_temperature",c.id,{temperature:S})},p=(A,S)=>J(n,A,S),g=s.temp===null?null:s.unit.includes("F")?(s.temp-32)*5/9:s.temp,m=g===null?"#37e0ff":g<20?"#5ab4ff":g<26?"#37e0ff":g<31?"#4dff9a":"#ffb347",y=A=>A==="ok"?"#4dff80":A==="warn"?"#ffcc40":"#ff4d40",_=(A,S,v)=>Math.max(3,Math.min(97,(A-S)/(v-S)*100)),b=(A,S,v,P)=>w`<div class="fp3d-holo-pool-chem"><span>${A}</span><b style="color:${y(v)}">${S}</b><i><em style="left:${P}%;background:${y(v)};color:${y(v)}"></em></i></div>`,k=c?.heating?`\u{1F525} ${i("pool_heating")}`:s.pump?.on?`\u3030 ${i("pool_pump_on")}`:"",z=A=>A.closed>.98?i("pool_cover_closed"):A.closed<.02?i("pool_cover_open"):`${Math.round(A.closed*100)} % ${i("pool_cover_closed_part")}`;return w`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-pool ${a?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${e.name}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" @click=${l}><span>🏊 ${e.name}</span><span class="fp3d-holo-live">${k}</span></div>
          <div class="fp3d-holo-car-main">
            <b style="color:${m}">${s.temp!==null?`${p(s.temp,1)} ${s.unit}`:"\u2013"}</b>
            <span>${c&&h!==null&&c.kind!=="switch"?`\u2192 ${p(h,1)} ${s.unit}`:c?c.on?i("pool_heater_on"):i("pool_heater_off"):""}</span>
          </div>
          ${a&&s.ph?b("pH",p(s.ph.value,2),s.ph.range,_(s.ph.value,6.6,8)):x}
          ${a&&s.chlorine?b(s.chlorine.orp?i("pool_orp"):i("pool_chlorine"),`${p(s.chlorine.value,s.chlorine.orp?0:2)} ${s.chlorine.unit}`,s.chlorine.range,s.chlorine.orp?_(s.chlorine.value,500,900):_(s.chlorine.value,0,3)):x}
          ${a&&s.cover?w`<div class="fp3d-holo-pool-line">${i("pool_cover")}: ${z(s.cover)}</div>`:x}
          ${a?this.renderPoolValves(r):x}
          ${a&&!this.ro&&(c||s.pump?.switchable||s.light||s.cover)?w`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">
                ${c&&c.kind!=="switch"&&h!==null?w`<button title=${i("pool_colder")} @click=${()=>f(h-c.step)}>−</button
                    ><button title=${i("pool_warmer")} @click=${()=>f(h+c.step)}>+</button>`:x}
                ${c?w`<button class=${c.on?"fp3d-holo-on":""} title=${i("pool_heater")} @click=${()=>c.kind==="switch"?d("homeassistant",c.on?"turn_off":"turn_on",c.id):d(c.kind,c.on?"turn_off":"turn_on",c.id)}>🔥</button>`:x}
                ${s.pump?.switchable?w`<button class=${s.pump.on?"fp3d-holo-on":""} title=${i("pool_pump")} @click=${()=>d("homeassistant",s.pump.on?"turn_off":"turn_on",s.pump.id)}>〰</button>`:x}
                ${s.light?w`<button class=${s.light.on?"fp3d-holo-on":""} title=${i("pool_light")} @click=${()=>d("homeassistant","toggle",s.light.id)}>💡</button>`:x}
                ${s.cover?w`<button
                      title=${s.cover.moving?i("pool_cover_stop"):s.cover.closed>.5?i("pool_cover_open_btn"):i("pool_cover_close_btn")}
                      @click=${()=>d("cover",s.cover.moving?"stop_cover":s.cover.closed>.5?"open_cover":"close_cover",s.cover.id)}
                    >
                      ${s.cover.moving?"\u23F9":s.cover.closed>.5?"\u25B2":"\u25BC"}
                    </button>`:x}
              </div>`:x}
        </div>
      </div>`}renderPoolValves(e){let t=this.building,n=this.hass;if(!t||!L("pool")||!n?.user?.is_admin||this.ro)return x;let i=g=>T(n,g),r=t.floors.find(g=>g.outdoor.some(m=>m.id===e)),s=r?.outdoor.find(g=>g.id===e)?.pool;if(!r||!s)return x;let a=g=>{let[m,y]=g.split(":");if(m==="port"){let _=s.ports?.find(b=>b.id===y);return _?i(`pool_port_${_.kind}`):"?"}if(m==="joint")return s.joints?.find(_=>_.id===y)?.name||i("pool_joint");if(m==="dev"){let _=r.furniture.find(b=>b.id===y);return _?_.name||i(`furn_${_.type}`):"?"}return"\u2026"},l=(s.pipes??[]).flatMap(g=>(g.fittings??[]).filter(m=>m.kind==="valve").map(m=>({pipe:g,f:m}))),d=r.furniture.filter(g=>g.type==="pool_valve"),c=r.furniture.find(g=>g.type==="pool_filter");if(!l.length&&!d.length&&!c)return x;let u=g=>{let m=structuredClone(t);g(m),this.building=m,Pn(n,m).catch(y=>this.serviceFailed("neonplan3d/building/save",y))},h=g=>g.floors.find(m=>m.id===r.id).outdoor.find(m=>m.id===e).pool,f=(g,m,y)=>w`<button class="fp3d-holo-valve ${g?"fp3d-holo-on":""}" title=${i("pool_valve_toggle")} @click=${y}><i>${g?"\u25CF":"\u25CB"}</i>${m}<small>${i(g?"pool_valve_open":"pool_valve_shut")}</small></button>`,p=["filter","backwash","rinse","recirculate","waste","closed"];return w`<div class="fp3d-holo-valves">
      ${c?w`<div class="fp3d-holo-pool-line">${i("furn_pool_filter")}</div>
            <div class="fp3d-holo-valve-pos">
              ${p.map(g=>w`<button class=${(c.valve_position??"filter")===g?"fp3d-holo-on":""} @click=${()=>u(m=>m.floors.find(y=>y.id===r.id).furniture.find(y=>y.id===c.id).valve_position=g==="filter"?null:g)}>${i(`valve_${g}`)}</button>`)}
            </div>`:x}
      ${l.length||d.length?w`<div class="fp3d-holo-pool-line">${i("pool_valves")}</div>`:x}
      ${l.map(({pipe:g,f:m})=>f(m.open!==!1,`${a(g.from)} \u2192 ${a(g.to)}`,()=>u(y=>{let _=h(y).pipes?.find(b=>b.id===g.id)?.fittings?.find(b=>b.id===m.id);_&&(_.open=m.open===!1)})))}
      ${d.map(g=>f(g.valve_open!==!1,g.name||i("furn_pool_valve"),()=>u(m=>{let y=m.floors.find(_=>_.id===r.id).furniture.find(_=>_.id===g.id);y&&(y.valve_open=g.valve_open===!1)})))}
    </div>`}serviceFailed(e,t){let n=t&&typeof t=="object"&&"message"in t?String(t.message):String(t);this.dispatchEvent(new CustomEvent("hass-notification",{detail:{message:`${e}: ${n}`},bubbles:!0,composed:!0}))}renderMediaCard(e,t){let n=this.hass,i=_=>T(n,_),r=e.media,s=!this.mediaFolded.has(r.id),a=()=>{this.mediaFolded.has(r.id)?this.mediaFolded.delete(r.id):this.mediaFolded.add(r.id),this.requestUpdate()},l=(_,b={})=>{Promise.resolve(n.callService("media_player",_,{entity_id:r.id,...b})).catch(k=>this.serviceFailed(`media_player.${_}`,k))},d={down:_=>_.currentTarget.dataset.pressed=String(_.pointerId),up:_=>b=>{let k=b.currentTarget;k.dataset.pressed===String(b.pointerId)&&(delete k.dataset.pressed,b.stopPropagation(),k.dataset.acted=String(Date.now()),_())},key:_=>b=>{let k=b.currentTarget;Date.now()-Number(k.dataset.acted??0)<700||(k.dataset.acted=String(Date.now()),_())}},c=n.states[r.id]?.attributes.supported_features,u=_=>typeof c!="number"||(c&_)!==0,h=this.mediaIntent.get(r.id);h&&(h.playing===r.playing||Date.now()-h.at>3e4)&&this.mediaIntent.delete(r.id);let f=this.mediaIntent.get(r.id)?.playing??r.playing,p=()=>{this.mediaIntent.set(r.id,{playing:!f,at:Date.now()}),this.requestUpdate(),l(f?"media_pause":"media_play")},g=this.mediaVolume.get(r.id);g&&(Math.abs(g.v-r.volume)<=2||Date.now()-g.at>3e4)&&this.mediaVolume.delete(r.id);let m=this.mediaVolume.get(r.id)?.v??r.volume,y=(_,b)=>{this.mediaVolume.set(r.id,{v:_,at:Date.now()}),this.requestUpdate(),(b||Date.now()-this.volumeSent>350)&&(this.volumeSent=Date.now(),l("volume_set",{volume_level:_/100}))};return w`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-media ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${e.name}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head" role="button" tabindex="0" @click=${a}><span>♪ ${e.name}</span><span class="fp3d-holo-live">${f?`\u25CF ${i("holo_media_playing")}`:i("holo_media_paused")}</span></div>
        <div class="fp3d-holo-track">
          ${r.picture?w`<img class="fp3d-holo-cover" src=${r.picture} alt="" />`:w`<span class="fp3d-holo-cover fp3d-holo-cover-none">♪</span>`}
          <div class="fp3d-holo-titles"><b>${r.title}</b>${r.artist?w`<span>${r.artist}</span>`:x}</div>
        </div>
        ${s&&!this.ro?w`<div class="fp3d-holo-media-controls">
                <button aria-label=${i("previous")} ?disabled=${!u(16)} @pointerdown=${d.down} @pointerup=${d.up(()=>l("media_previous_track"))} @click=${d.key(()=>l("media_previous_track"))}>⏮</button>
                <button aria-label=${i("play_pause")} ?disabled=${f?!u(1):!u(16384)} @pointerdown=${d.down} @pointerup=${d.up(p)} @click=${d.key(p)}>${f?"\u23F8":"\u25B6"}</button>
                <button aria-label=${i("next")} ?disabled=${!u(32)} @pointerdown=${d.down} @pointerup=${d.up(()=>l("media_next_track"))} @click=${d.key(()=>l("media_next_track"))}>⏭</button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  .value=${String(m)}
                  aria-label=${i("volume")}
                  @input=${_=>y(Number(_.target.value),!1)}
                  @change=${_=>y(Number(_.target.value),!0)}
                />
                <span class="fp3d-holo-vol">${m} %</span>
              </div>`:x}
      </div>
    </div>`}renderDeviceCard(e,t){let n=this.hass,i=d=>T(n,d),r=!this.holoFolded.has(t),s=this.dayOf(e),a=s&&s.curve.length>1?hr(s.curve,s.peak):null,l=()=>{this.holoFolded.has(t)?this.holoFolded.delete(t):this.holoFolded.add(t),this.requestUpdate()};return w`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev ${r?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="button" tabindex="0" aria-label=${e.name} @click=${l}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>⚡ ${e.name}</span><span class="fp3d-holo-live">${this.replay?"\u23EA":`\u25CF ${i("holo_live")}`}</span></div>
        <div class="fp3d-holo-big"><b>${te(n,e.w??0)}</b><span>${i("holo_dev_now")}</span></div>
        ${r&&s?w`<div class="fp3d-holo-sub">${i("holo_today")} <b>${J(n,s.kwh,1)} kWh</b> · ${i("holo_peak")} <b>${te(n,s.peak)}</b></div>`:x}
        ${r&&a?Ut`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="156" height="30">
              <defs><linearGradient id="fp3dHoloG${t}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#7fe8ff" stop-opacity=".5"/><stop offset="1" stop-color="#7fe8ff" stop-opacity="0"/></linearGradient></defs>
              <path d="${a.area}" fill="url(#fp3dHoloG${t})"/>
              <path d="${a.line}" fill="none" stroke="#a8f0ff" stroke-width="2"/>
              <circle cx="${a.endX}" cy="${a.endY}" r="3.5" fill="#fff" stroke="#7fe8ff" stroke-width="2"/>
              <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
            </svg>`:x}
      </div>
    </div>`}dayOf(e){if(!this._rows||!e.dayIds.length)return null;let t=Object.fromEntries(e.dayIds.filter(n=>this._rows[n]).map(n=>[n,this._rows[n]]));return Object.keys(t).length?Oa(t,new Date(this.now())):null}renderHoloCard(e,t,n){let i=this.hass,r=m=>T(i,m),s=!this.holoFolded.has(t),a=this.dayOf(e),l=e.kind==="main",d=l&&n.consumption!==null&&n.consumption>0?Math.round(Math.min(100,Math.max(0,(1-Math.max(0,n.grid??0)/n.consumption)*100))):null,c=a&&a.curve.length>1?hr(a.curve,a.peak):null,u=new Date(this.now()),h=(u.getHours()+u.getMinutes()/60)/24*220,f=()=>{this.holoFolded.has(t)?this.holoFolded.delete(t):this.holoFolded.add(t),this.requestUpdate()},p=l?n.solar??n.consumption??0:e.w??0,g=l?n.battery!==null||n.soc!==null?{soc:n.soc,w:n.battery}:null:e.battery;return w`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="button" tabindex="0" aria-label=${e.name} @click=${f}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>☀ ${e.name}</span><span class="fp3d-holo-live">${this.replay?"\u23EA":`\u25CF ${r("holo_live")}`}</span></div>
        <div class="fp3d-holo-big"><b>${te(i,p)}</b><span>${r(l&&n.solar===null?"holo_house_now":"holo_pv_now")}</span></div>
        ${s?w`${l&&this._plants.length>1?w`<div class="fp3d-holo-plants">${this._plants.map(m=>w`<span>${m.name}</span><b>${te(i,m.w)}</b>`)}</div>`:x}
              ${a?w`<div class="fp3d-holo-sub">${r("holo_today")} <b>${J(i,a.kwh,1)} kWh</b> · ${r("holo_peak")} <b>${te(i,a.peak)}</b></div>`:x}
              ${c?Ut`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="208" height="38">
                    <defs><linearGradient id="fp3dHoloG${t}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#ffd75a" stop-opacity=".5"/><stop offset="1" stop-color="#ffd75a" stop-opacity="0"/></linearGradient></defs>
                    <path d="${c.area}" fill="url(#fp3dHoloG${t})"/>
                    <path d="${c.line}" fill="none" stroke="#ffe27a" stroke-width="2"/>
                    <circle cx="${c.endX}" cy="${c.endY}" r="3.5" fill="#fff" stroke="#ffd75a" stroke-width="2"/>
                    <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
                    <line x1="${h}" y1="2" x2="${h}" y2="43" stroke="rgba(160,240,255,.18)" stroke-dasharray="2 3"/>
                  </svg>`:x}
              <div class="fp3d-holo-grid">
                ${g?w`<div class="fp3d-holo-cell fp3d-holo-bat">
                      ${r("holo_battery")}<br /><b>${g.soc!==null?`${Math.round(g.soc)} %`:te(i,Math.abs(g.w??0))}</b>
                      ${g.w!==null&&Math.abs(g.w)>=5?w`<span>${g.w<0?"\u25B2":"\u25BC"} ${te(i,Math.abs(g.w))}</span>`:x}
                    </div>`:x}
                ${l&&n.grid!==null?w`<div class="fp3d-holo-cell ${n.grid<-5?"fp3d-holo-exp":"fp3d-holo-imp"}">
                      ${r("holo_grid")}<br /><b>${te(i,Math.abs(n.grid))}</b> <span>${Math.abs(n.grid)<5?"":r(n.grid<0?"energy_grid_export":"energy_grid_import")}</span>
                    </div>`:x}
                ${l&&n.consumption!==null?w`<div class="fp3d-holo-cell fp3d-holo-house">${r("holo_house")}<br /><b>${te(i,n.consumption)}</b></div>`:x}
                ${l&&this._wallboxW!==null?w`<div class="fp3d-holo-cell fp3d-holo-wb">${r("holo_wallbox")}<br /><b>${te(i,this._wallboxW)}</b></div>`:x}
              </div>
              ${l&&this._meters&&(this._meters.gas!==null||this._meters.water!==null)?w`<div class="fp3d-holo-sub fp3d-holo-meters">
                    ${this._meters.gas!==null?w`<span>🔥 ${r("holo_gas")} <b>${J(i,this._meters.gas,this._meters.gas<10?2:1)} ${wl(i,this.building?.energy.gas)}</b></span>`:x}
                    ${this._meters.water!==null?w`<span>💧 ${r("holo_water")} <b>${iu(i,this._meters.water,wl(i,this.building?.energy.water))}</b></span>`:x}
                    <span>${r("holo_today_short")}</span>
                  </div>`:x}
              ${d!==null?w`<div class="fp3d-holo-bar"><div style="width:${d}%"></div></div>
                    <div class="fp3d-holo-foot"><span>${r("holo_autarky")}</span><b>${d} %</b></div>`:x}`:x}
      </div>
    </div>`}setAlerts(e){let t=e.map(r=>`${r.kind}:${r.entity}`),n=this.ro?[]:e.filter((r,s)=>!this.seenAlerts.has(t[s]));this.ro||(this.seenAlerts=new Set(t)),t.join()!==this._alerts.map(r=>`${r.kind}:${r.entity}`).join()&&(this._alerts=e);let i=e.some(r=>!r.kind.startsWith("pool_"));i&&!this.alertTimer&&!this.ro&&(this.alertTimer=setInterval(()=>!document.hidden&&this.applyTint(),this._low?200:100)),(!i||this.ro)&&this.alertTimer&&(clearInterval(this.alertTimer),this.alertTimer=void 0),n.length&&this.alertJump&&this.jumpTo(n[0])}jumpTo(e){if(!e.floorId){this.fire("floor-tap",{floorId:null});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),e.roomId&&setTimeout(()=>this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId}),60)}onRoomDoubleTap(e,t){let n=this.building,i=this.hass,r=n?.floors.find(c=>c.id===e),s=r?.rooms.find(c=>c.id===t);if(!n||!i||!r||!s||this.ro)return;let a=new Set(se(i,s.area_id).filter(c=>I(c)==="light"));for(let c of r.placements)I(c.entity_id)==="light"&&V([c.x,c.z],s.points)&&a.add(c.entity_id);for(let c of r.furniture){let u=this.furnitureLinks.get(c.id)?.entity;u&&zo(c.type)&&V([c.x,c.z],s.points)&&a.add(u)}let l=[...a].filter(c=>!this.confirmSet.has(c));if(!l.length)return;let d=l.some(c=>i.states[c]?.state==="on");i.callService("homeassistant",d?"turn_off":"turn_on",{entity_id:l}),this.roomFlash={roomId:t,until:performance.now()+350},this.applyTint(),setTimeout(()=>{this.roomFlash=null,this.applyTint()},380)}runScene(e){this.ro||(this.hass.callService(e.split(".")[0],"turn_on",{entity_id:e}),this._sceneFired=e,setTimeout(()=>this._sceneFired=null,600))}applyTint(){let e=this.viewer,t=this.building,n=this.hass;if(!e||!t||!n)return;let i=null;if(this.heatMode!=="none"&&this.heatMode!=="values"){let a=this.heatMode,l=ja(n,t,a);!l.size!=!this.heatValues.size&&this.requestUpdate(),this.heatValues=l,i=new Map([...l].map(([d,c])=>[d,Ua(a,c)]))}let r=new Map;if(this.heatMode==="values")for(let a of t.floors)for(let l of a.rooms){let d=Ce(n,a,l,"temperature"),c=Ce(n,a,l,"humidity"),u=Ce(n,a,l,"co2"),h=[d!==null?`${J(n,yt(n,d),1)} ${ke(n)}`:null,c!==null?`${J(n,c,0)} %`:null,u!==null?`${J(n,u,0)} ppm`:null].filter(f=>!!f);h.length&&r.set(l.id,h.join(" \xB7 "))}if(e.setRoomInfo(r),this._alerts.length){i??=new Map;let a=this.ro?1:.55+.45*Math.sin(performance.now()/160);for(let l of this._alerts){if(l.kind.startsWith("pool_"))continue;let d=fa(l.kind).map(c=>c*a);if(l.roomId)i.set(l.roomId,d);else for(let c of t.floors)if(!l.floorId||c.id===l.floorId)for(let u of c.rooms)i.set(u.id,d)}}this.roomFlash&&performance.now()<this.roomFlash.until&&(i??=new Map,i.set(this.roomFlash.roomId,[.9,.95,1]));let s=i?[...i].map(([a,l])=>`${a}:${l.map(d=>d.toFixed(2)).join(",")}`).join(";"):"";s!==this.tintSig&&(this.tintSig=s,e.setRoomTint(i))}furnitureMarkers(e,t,n,i){let r=[],s=[],a=new Map,l=new Map,d=L("pool")?st(t.floors)[0]:void 0,c=d&&this.building?it(e,Ft(d.area.pool,this.building.floors)):d?it(e,d.area.pool):null;for(let f of t.floors)for(let p of f.furniture){let g=this.furnitureLinks.get(p.id),m=this.stateFaces(e,p);if(m.length&&a.set(p.id,{color:m[0].color,level:m[0].level,faces:m}),zo(p.type)){r.push(this.lampMarker(e,f,p,g?.entity??null));continue}if(c&&Xt.includes(p.type)){let H=p.valve_position??"filter";p.type==="pool_pump"&&c.pump?.on?a.set(p.id,{color:[.3,.8,1],level:.85}):p.type==="pool_heat_pump"&&c.heater?.heating?a.set(p.id,{color:[1,.45,.15],level:.85}):p.type==="pool_heat_pump"&&c.heater?.on?a.set(p.id,{color:[.3,.8,1],level:.35}):p.type==="pool_filter"?a.set(p.id,H==="closed"?{color:[1,.3,.25],level:.6}:H==="filter"||H==="recirculate"?{color:[.3,1,.6],level:c.pump?.on?.8:.3}:{color:[1,.62,.2],level:.85}):p.type==="pool_dosing"&&c.pump?.on&&a.set(p.id,{color:[.6,.9,1],level:.5})}if(p.type==="waste_bin"||p.type==="mailbox"){let H=L("household")?this.householdState(e,f,p):null;H?.screen&&a.set(p.id,H.screen),H?.marker&&r.push(H.marker);continue}let _=p.type==="parking"&&L("auto_pro")&&!!p.car?In(e,p):null,b=p.type==="home_battery"?p.soc:p.type==="wallbox"?p.status:p.type==="parking"&&_?p.car?.device??_.entities.soc:null,k=b&&b!=="none"?b:null,z=g??(k?{entity:null,power:null}:void 0);if(!z)continue;let A=p.type==="home_battery"?k??z.entity??z.power:z.entity??z.power??k;l.set(p.id,A);let S=z.entity?e.states[z.entity]:void 0,v=p.type==="meter"?t.energy.grid_invert&&!p.export:p.type==="home_battery"?t.energy.battery_invert&&!p.charge:!1,P=z.power?ne(e.states[z.power],v):null,M=p.type==="home_battery"&&p.charge&&p.charge!=="none"?p.charge:p.type==="meter"&&p.export&&p.export!=="none"?p.export:null,E=M?ne(e.states[M]):null;E!==null&&(P=Math.max(0,P??0)-Math.max(0,E)),z.power&&P!==null&&!i.has(z.power)&&(i.add(z.power),s.push({id:A,powerEntity:z.power,floorId:f.id,x:p.x,z:p.z,power:Math.max(0,P),wallbox:p.type==="wallbox"||void 0}));let F=typeof p.run_w=="number"&&p.run_w>0?p.run_w:10,G=(P??0)>F||S?.state==="on"||S?.state==="running"||Wo(S)&&Fe(S);if(_&&gn(e,p)){let H=[];if(_.soc!==null){let Q=_.soc>=50?[.3,1,.5]:_.soc>=20?[1,.8,.25]:[1,.3,.25];H.push({part:"band",color:Q,level:_.charging?1:.6})}if(_.locked===!1&&H.push({part:"lights",color:[1,.42,.02],level:1}),_.climateOn){let Q=_.entities.climate?e.states[_.entities.climate]:void 0,ce=!!Q&&(Q.attributes.hvac_action==="cooling"||Q.state==="cool");H.push({part:"cabin",color:ce?[.45,.8,1]:[1,.55,.22],level:.35})}H.length&&a.set(`${p.id}:vehicle`,{color:H[0].color,level:H[0].level,faces:H})}if(p.type==="radiator"&&S&&I(S.entity_id)==="climate"){let H=S.attributes;if(H.hvac_action==="heating"){let Q=typeof H.temperature=="number"&&typeof H.current_temperature=="number"?H.temperature-H.current_temperature:1;a.set(p.id,{color:[1,.42,.1],level:Math.min(1,.45+.25*Math.max(0,Q))})}}else if(p.type==="ac_unit"&&S&&I(S.entity_id)==="climate"){let H=Ss(S);H&&a.set(p.id,H)}else if((p.type==="washer"||p.type==="dryer"||p.type==="dishwasher")&&G)a.set(p.id,{color:[.3,.85,1],level:.8});else if(p.type==="stove"||Mo(p.type)){let H=xs(S,G);H>0&&a.set(p.id,{color:[1,.05,.01],level:H,faces:[{part:"burners",color:[1,.05,.01],level:H}]})}let C=he(p.type),O=!!C&&!C.light&&C.parts.some(H=>H.glow);if(S&&O&&L("sound")&&I(S.entity_id)==="media"&&S.state==="playing"&&!Dn(p.type)){let H=typeof S.attributes.volume_level=="number"?S.attributes.volume_level:.5;a.set(p.id,{color:No(S)??[.22,.88,1],level:.5+.5*H,ring:!0,plain:!0})}if(S&&Dn(p.type)&&!Mo(p.type)){let H=L("screens"),Q=I(S.entity_id)==="light"?Oe(S):null,ce=I(S.entity_id)==="media"&&["playing","on","paused","idle"].includes(S.state),ae=H&&I(S.entity_id)==="media"?No(S):Q?Q.color:Fe(S)||ce?[.22,.88,1]:null,_e=H&&I(S.entity_id)==="media"?S.attributes.entity_picture??null:null;ae&&a.set(p.id,{color:ae,level:S.state==="playing"?1:.6,picture:_e,ring:O&&L("sound")&&S.state==="playing"})}if(n.has(A))continue;n.add(A);let j=z.entity?I(z.entity):null,oe=f.rooms.find(H=>H.points.length>=3&&V([p.x,p.z],H.points));r.push({id:A,floorId:f.id,roomId:oe?.id??null,x:p.x,z:p.z,y:kl(p)+pe(f,p),icon:p.icon?$t(p.icon):rn(j??"switch"),name:p.name||(z.entity?Z(e,z.entity):Me(e,p.type)),ownName:p.name||void 0,showName:!!p.show_name,text:_?this.carText(e,_,!!S&&!fr.has(S.state.toLowerCase())):p.type==="home_battery"?this.batteryText(e,k,P):p.type==="wallbox"?this.wallboxText(e,k,P):p.type==="meter"?this.meterText(e,P):S?fe(e,S):P!==null?te(e,Math.max(0,P)):"",active:_?_.charging:S?Fe(S):(P??0)>(typeof p.run_w=="number"&&p.run_w>0?p.run_w:5),unavailable:S?N(S):!1,glow:null,furnitureId:p.id,energyDevice:p.type==="inverter"||p.type==="home_battery"||p.type==="wallbox"||p.type==="meter"||!!_,show:p.marker??(_?"always":void 0),fromFurniture:!0})}this.cameraScreens=0;let u=Oo(e,t.floors),h=L("screens");for(let f of t.floors)for(let p of f.furniture){if(!h||!p.pictures?.length||!Dn(p.type)||p.type==="fridge_smart"&&u.get(p.id)?.right)continue;let g=p.pictures.find(_=>Ps(e,_));if(!g)continue;let m=this.pictureUrl(g.image),y=p.screen_bg==="white"?[.92,.94,1]:[.08,.08,.1];m&&a.set(p.id,{color:y,level:1,picture:m,plain:!0})}return this.watchCameras(this.cameraScreens>0||!!this._through||this.cameraWall),{markers:r,consumers:s,screens:a,targets:l}}watchHousehold(e,t){let n=t.floors.flatMap(l=>l.furniture).filter(l=>l.type==="waste_bin"||l.type==="mailbox"),i=L("household")&&n.length>0&&!this.replay,r=i?xa(t.floors):[],s=r.join(",");if(!i){clearInterval(this.householdTimer),this.householdTimer=void 0,this.pickupKey="";return}let a=async()=>{r.length&&(this.pickups=await ar(this.hass??e,r)),this.syncDevices(!0)};(s!==this.pickupKey||!this.householdTimer)&&(this.pickupKey=s,clearInterval(this.householdTimer),this.householdTimer=setInterval(()=>!document.hidden&&void a(),6e5),r.length&&ar(e,r).then(l=>{this.pickups=l,this.syncDevices(!0)}))}householdState(e,t,n){let i=t.rooms.find(c=>c.points.length>=3&&V([n.x,n.z],c.points)),r=c=>{let u=parseInt(c.slice(1),16);return[(u>>16&255)/255,(u>>8&255)/255,(u&255)/255]},s=(c,u,h,f,p)=>({id:c,floorId:t.id,roomId:i?.id??null,x:n.x,z:n.z,y:kl(n)+pe(t,n),icon:n.icon?$t(n.icon):$t(f),name:n.name||Me(e,n.type),ownName:n.name||void 0,showName:!!n.show_name,text:u,active:h,unavailable:!1,glow:null,furnitureId:n.id,show:n.marker??(p?"always":void 0),fromFurniture:!0});if(n.type==="waste_bin"){let c=typeof n.bin_source=="string"&&n.bin_source!=="none"?n.bin_source:null;if(!c)return null;let u=Sa(n,e,this.pickups);if(!u)return null;let h=u.days===0?T(e,"bin_today"):u.days===1?T(e,"bin_tomorrow"):T(e,"bin_in_days",{n:u.days}),f=r(ya(n)[1]).map(p=>Math.min(1,p*1.4+.15));return{screen:u.glow?{color:f,level:1,faces:[{part:"top",color:f,level:1},{part:"band",color:f,level:.8}]}:void 0,marker:s(`hh:${c}#${n.id}`,h,u.glow,"trash-can-outline",u.days<=1)}}let a=typeof n.entity=="string"&&n.entity!=="none"?n.entity:null;if(!a)return null;let l=$a(n,e),d=[1,.62,.15];return{screen:l?{color:d,level:1,faces:[{part:"top",color:d,level:1},{part:"band",color:d,level:.8}]}:void 0,marker:s(`hh:${a}#${n.id}`,l?T(e,"mailbox_post"):"",l,l?"email-alert-outline":"mailbox-outline",l)}}robotPaths(e,t){let n=this.replay;if(!n)return[];let i=[];for(let r of t.floors){let s=r.rooms.filter(a=>a.points.length>=3);for(let a of r.furniture){if(!_t(a.type))continue;let l=this.furnitureLinks?.get(a.id)?.entity??null;if(!l)continue;let d=n.robotRooms(l,nn(e,l,a.room_sensor)),c=[];for(let u of d){let h=Vo(e,s,u),f=h?be(h.points):null,p=c[c.length-1];f&&(!p||p[0]!==f[0]||p[1]!==f[1])&&c.push([f[0],f[1]])}c.length&&i.push({floorId:r.id,points:c})}}return i}trailNow(e,t){let n=this.now(),i=bn(e,t),r=this.replay?this.replay.rows(i.map(a=>a.entity),n-_n,n):this.trailRows,s=i.map(a=>{let l=e.states[a.entity];return{entity:a.entity,state:l?.state,lastChanged:l?.last_changed?Date.parse(l.last_changed):void 0}});return Qa(i,Ja(r,s,n),n)}watchTrail(){if(clearInterval(this.trailTimer),this.trailTimer=void 0,this.trail&&!L("camera_cockpit")&&(this._proHint="camera_cockpit"),!this.trail||!L("camera_cockpit")||this.replay){this.trailRows={},this.syncDevices(!0);return}let e=async()=>{let t=this.hass,n=this.building;if(!t||!n||document.hidden)return;let i=bn(t,n).map(r=>r.entity);if(i.length){try{let r=await t.callWS({type:"history/history_during_period",start_time:new Date(Date.now()-_n).toISOString(),entity_ids:i,minimal_response:!0,no_attributes:!0,significant_changes_only:!1});this.trailRows=r??{}}catch{this.trailRows={}}this.syncDevices(!0)}};e(),this.trailTimer=setInterval(()=>{e()},6e4)}watchCameras(e){e&&!this.cameraTimer?this.cameraTimer=setInterval(()=>{document.hidden||(this.cameraTick++,this.syncDevices(!0),(this._through||this.cameraWall)&&this.requestUpdate())},this._low?1e4:5e3):!e&&this.cameraTimer&&(clearInterval(this.cameraTimer),this.cameraTimer=void 0)}pictureUrl(e){if(/^https?:\/\//.test(e))return e;if(e.startsWith("camera:")){let t=this.hass.states[e.slice(7)],n=t?.attributes.entity_picture;return!n||N(t)?null:(this.cameraScreens++,n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this.cameraTick}`)}return this.pictureUrls.has(e)?this.pictureUrls.get(e)??null:(this.pictureUrls.set(e,null),xi(this.hass,e).then(t=>{this.pictureUrls.set(e,t),this.syncDevices(!0)},()=>{}),null)}robotObstacles(e,t){let n=new Set(["rug","worktop","table","table_round","coffee_table","chair","office_chair","stool","bar_stool","bench","desk","robot_vacuum","parking","stairwell","radiator","ac_unit","tv_wall","kitchen_wall","led_strip"]);return e.furniture.filter(i=>{if(n.has(i.type)||i.type.startsWith("lamp_")&&i.type!=="lamp_floor"&&i.type!=="lamp_uplight"||i.h<.04||pe(e,i)>.12)return!1;let r=he(i.type);return r&&(r.hole||/table|desk|chair|stool|bench|rug|carpet|mat$/.test(i.type))?!1:V([i.x,i.z],t)||bt(i).some(s=>V(s,t))}).map(i=>bt(i))}robotInfos(e,t){let n=[];for(let i of t.floors)for(let r of i.furniture){if(!_t(r.type))continue;let s=this.furnitureLinks.get(r.id)?.entity??null,a=s?e.states[s]?.state:void 0,l=Lo(a)?"cleaning":a==="returning"?"returning":a==="error"?"error":a==="docked"||!a?"docked":"idle",d=r.rotation*Math.PI/180,c=gt(r.type),u=r.d*(c?.227:.14),h=[r.x-Math.sin(d)*u,r.z+Math.cos(d)*u],f=i.rooms.filter(y=>y.points.length>=3),g=(l==="cleaning"?Ts(e,f,s,nn(e,s,r.room_sensor)):null)??f.find(y=>V(h,y.points)),m=l==="cleaning"&&g?this.robotObstacles(i,g.points):[];n.push({id:r.id,floorId:i.id,rest:h,restHeading:-d,mode:l,room:g?.points??null,roomId:g?.id??null,obstacles:m,...c?{inModel:c}:{}})}return n}batteryText(e,t,n){let i=t?Number(e.states[t]?.state):Number.NaN,r=[];return Number.isFinite(i)&&r.push(`${J(e,i,0)} %`),n!==null&&Math.abs(n)>=10&&r.push(`${n<0?"\u25B2":"\u25BC"} ${te(e,Math.abs(n))}`),r.join(" \xB7 ")}meterText(e,t){return t===null?"":Math.abs(t)<5?te(e,0):`${T(e,t<0?"energy_grid_export":"energy_grid_import")} ${te(e,Math.abs(t))}`}wallboxText(e,t,n){let i=t?e.states[t]:void 0,r=String(i?.state??"").toLowerCase(),s=(n??0)>50||/charg|laden|lädt/.test(r),a=i?.entity_id.startsWith("binary_sensor.")?r==="on":/connect|plug|ready|angesteckt|verbunden|wait|paused|suspend/.test(r),l=s?T(e,"wallbox_charging"):a?T(e,"wallbox_plugged"):i&&!N(i)&&!i.entity_id.startsWith("binary_sensor.")?fe(e,i):"",d=n!==null&&n>50?te(e,n):"";return[l,d].filter(Boolean).join(" \xB7 ")}stateFaces(e,t){let n=[],i=t.state_entity2&&t.state_entity2!=="none"?[[t.state_entity,t.state_split==="top_bottom"?"bottom":"left"],[t.state_entity2,t.state_split==="top_bottom"?"top":"right"]]:[[t.state_entity,"all"]];for(let[r,s]of i){if(!r||r==="none")continue;let a=e.states[r];if(!a||N(a)||!(Fe(a)||a.state==="home"||a.state==="occupied"||a.state==="on"))continue;let d=I(r)==="light"?Oe(a):null;n.push({part:s,color:d?d.color:[1,.71,.28],level:d?d.level:.85})}return n}carText(e,t,n){let i=s=>T(e,s);if(n||t.away!==null){let s=t.away?` \xB7 ${t.away}`:"";return`${i("car_away")}${s}`}let r=[];return t.soc!==null&&r.push(`${J(e,t.soc,0)} %`),t.range!==null&&r.push(`${J(e,t.range,0)} ${t.rangeUnit}`),t.charging?r.push(t.chargingW!==null?`\u26A1 ${te(e,t.chargingW)}`:`\u26A1 ${i("car_charging_short")}`):t.plugged&&r.push("\u{1F50C}"),t.locked!==null&&r.push(t.locked?"\u{1F512}":"\u{1F513}"),r.join(" \xB7 ")}ceilingAt(e,t,n){let r=e.rooms.find(l=>l.ceiling_height&&l.points.length>=3&&V([t,n],l.points))?.ceiling_height||e.height,s=this.building;if(!s||!(s.settings.roof.sections??[]).some(l=>Zs(l,e.elevation+r)))return r;let a=Ys(s,t,n);return a===null?r:Math.max(.5,Math.min(r,a-e.elevation))}lampMarker(e,t,n,i){let r=i?e.states[i]:void 0,s=he(n.type),a=as[n.type]??s?.light??"floor",l=t.rooms.some(_=>_.points.length>=3&&V([n.x,n.z],_.points)),d=a==="strip"&&!l?qt(t,n.x,n.z)+(n.mount_y??0):n.mount_y!=null&&!s?n.mount_y:s||a==="wall"||a==="strip"?pe(t,n):a==="table"?Rn(t,n.x,n.z):a==="bollard"||a==="garden"?qt(t,n.x,n.z):0,c=t.rooms.find(_=>_.points.length>=3&&V([n.x,n.z],_.points)),u=this.ceilingAt(t,n.x,n.z),h=(s?s.mount==="ceiling":["ceiling","downlight","spot","panel","pendant"].includes(a))&&n.mount_y==null,f=h?t.height-u:0,p=s&&h?Math.max(0,d-f):d,g=zn.has(n.type)&&n.mount_y!=null?Math.min(t.height,n.mount_y+An(n.type,n.h)):Math.abs(f)>.01?u:void 0,m=g??t.height,y=s?s.mount==="ceiling"?Math.max(.5,p-.15):p+n.h+.2:{ceiling:m-.3,downlight:m-.25,spot:m-.35,panel:m-.25,pendant:Math.max(.6,m-n.h-.25),floor:p+n.h+.25,uplight:p+n.h+.25,table:p+n.h+.2,wall:p+n.h+.2,strip:n.upright?p+n.w+.15:Math.max(.3,p-.2),bollard:p+n.h+.25,garden:p+n.h+.25}[a];return{id:i??`lamp:${n.id}`,floorId:t.id,roomId:c?.id??null,x:n.x,z:n.z,y,icon:rn("light"),name:n.name||(i?Z(e,i):Me(e,n.type)),text:r?fe(e,r):"",active:r?Fe(r):!1,unavailable:r?N(r):!1,glow:r?qo($s(Oe(r,n.color_entity&&n.color_entity!=="none"?e.states[n.color_entity]:void 0),n.only_color),n.glow_scale):null,lamp:a,rotation:n.rotation,mirror:!!n.mirror,roll:n.tilt??0,upright:!!n.upright,size:[n.w,n.d,n.h],base:p,top:g,pickable:!!i,furnitureId:n.id,pack:s?n.type:null,lightY:s?s.mount==="ceiling"?p:p+n.h*.85:void 0,effect:!!r&&r.state==="on"&&typeof r.attributes.effect=="string"&&!/^(none|off|solid|static|normal|white|colou?r|rgb|manual|default|-|)$/i.test(r.attributes.effect.trim()),variant:n.variant,show:n.marker??void 0,fromFurniture:!0}}showPin(e){if(this.furnish&&!e.fromFurniture)return!0;if(e.show==="never"||this.markerMode==="none")return!1;if(e.show==="always"||this.markerMode==="all")return!0;if(e.lamp||e.model)return!1;let t=I(e.id);return t==="light"?!1:e.fromFurniture?(e.power??0)>=1||t==="media"&&e.active||!!e.energyDevice&&!!e.text:!0}openingTargets(){let e=new Map;for(let[t,n]of this.openingLinks??[]){let i=n.cover??n.contact??n.tilt;i&&e.set(t,i)}return e}scheduleThumbs(e=600){clearTimeout(this.thumbTimer);let t=this.building?.floors.filter(i=>i.rooms.length).length??0;if(!this.floorThumbs||t<2){this._thumbs=[];return}let n=Math.max(e,this.thumbsAt+(this._low?8e3:4e3)-Date.now());this.thumbTimer=setTimeout(()=>{if(!(!this.viewer||this.dimmed&&this._thumbs.length)){if(document.hidden){this.scheduleThumbs(3e3);return}this.thumbsAt=Date.now(),this._thumbs=this.viewer.floorThumbnails(this.narrowThumbs?104:150,this.narrowThumbs?78:112)}},n)}get narrowThumbs(){return this._narrowStage}renderThumbs(){if(!this._thumbs.length||!this.building)return x;let e=new Map(this.building.floors.map(r=>[r.id,r.name])),t=[...this._thumbs].sort((r,s)=>(this.building.floors.find(a=>a.id===s.floorId)?.elevation??0)-(this.building.floors.find(a=>a.id===r.floorId)?.elevation??0)),n=this._thumbsCompact,i=()=>{this._thumbsCompact=!n;try{localStorage.setItem("neonplan3d.thumbs_compact",this._thumbsCompact?"1":"0")}catch{}};return w`<nav class="fp3d-thumbs ${this.narrowThumbs?"fp3d-thumbs-small":""} ${n?"fp3d-thumbs-compact":""}" aria-label=${T(this.hass,"floors")}>
      <button class="fp3d-thumbs-fold" title=${T(this.hass,n?"thumbs_show":"thumbs_fold")} aria-label=${T(this.hass,n?"thumbs_show":"thumbs_fold")} @click=${i}>${n?"\u25B8":"\u25C2"}</button>
      <button class="fp3d-thumb fp3d-thumb-house" aria-pressed=${this.floorId===null} @click=${()=>this.fire("floor-tap",{floorId:null})}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 11l9-7 9 7M5 10v10h14V10" /></svg>
        <span>${T(this.hass,"all_floors")}</span>
      </button>
      ${t.map(r=>w`<button class="fp3d-thumb" aria-pressed=${this.floorId===r.floorId} @click=${()=>this.fire("floor-tap",{floorId:r.floorId})}>
          ${n?x:w`<img src=${r.url} alt="" />`}
          <span>${e.get(r.floorId)??""}</span>
        </button>`)}
    </nav>`}onDeviceHold(e,t,n){if(this.ro){this.onDeviceTap(e,t,n);return}if(L("auto_pro")&&this.hass&&this.building)for(let r of this.building.floors)for(let s of r.furniture){if(s.type!=="parking"||!s.car)continue;let a=In(this.hass,s);if([s.entity,s.car.device,...Object.values(a.entities)].filter(d=>!!d&&d!=="none").includes(e)){this._menu={entity:e,x:t,y:n,car:a};return}}let i=I(e);i==="light"||i==="cover"||i==="switch"||i==="fan"||i==="lock"||i==="camera"?this._menu={entity:e,x:t,y:n}:xe(this,e)}onDeviceSwipe(e,t,n,i,r){let s=this.hass?.states[e];if(this.ro)return!1;if(t==="start"){if(!s||N(s)||this.confirmSet.has(e))return!1;let l=I(e);if(l==="light"&&br(s).dim){let d=s.state==="on"?typeof s.attributes.brightness=="number"?Math.round(s.attributes.brightness/2.55):100:0;return this._swipe={entity:e,kind:"light",start:d,value:d,x:i,y:r},!0}if(l==="cover"&&wr(s)){let d=s.attributes.current_position;return this._swipe={entity:e,kind:"cover",start:d,value:d,x:i,y:r},!0}return!1}let a=this._swipe;if(!a||a.entity!==e)return!1;if(t==="move"){let l=Math.round(Math.min(100,Math.max(0,a.start-n/220*100)));l!==a.value&&(this._swipe={...a,value:l});let d=performance.now();d-this.swipeSent>350&&(this.swipeSent=d,this.applySwipe())}else this.applySwipe(),clearTimeout(this.swipeTimer),this.swipeTimer=setTimeout(()=>this._swipe=null,700);return!0}applySwipe(){let e=this._swipe;!e||!this.hass||(e.kind==="light"?e.value<=0?this.hass.callService("light","turn_off",{entity_id:e.entity}):this.hass.callService("light","turn_on",{entity_id:e.entity,brightness_pct:e.value}):this.hass.callService("cover","set_cover_position",{entity_id:e.entity,position:e.value}))}goTo(e){if(this._find=null,e.kind==="room"){this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),setTimeout(()=>this.viewer?.focus(e.floorId,e.x,e.z,e.y,e.entity),120)}renderAlerts(){let e=this.building;if(!this._alerts.length||!e)return x;let t=this._alerts.slice(0,3);return w`<div class="fp3d-alert-banner" role="alert">
      ${t.map(n=>w`<button class="fp3d-alert fp3d-alert-${n.kind}" title=${rr(this.hass,e,n)} @click=${()=>this.jumpTo(n)}>${rr(this.hass,e,n)}</button>`)}
      ${this._alerts.length>3?w`<span class="fp3d-alert-more">+${this._alerts.length-3}</span>`:x}
    </div>`}renderScenes(){let e=this.building;if(!this.scenes||!this.roomId||this.panelOpen||!e||!this.hass||this.ro)return x;let t=e.floors.flatMap(r=>r.rooms).find(r=>r.id===this.roomId),n=t?se(this.hass,t.area_id).filter(r=>I(r)==="scene"||I(r)==="script").slice(0,6):[];if(!n.length)return x;let i=t?.area_id?this.hass.areas?.[t.area_id]?.name:void 0;return w`<div class="fp3d-scenes">
      ${n.map(r=>w`<button class="fp3d-chip" aria-pressed=${this._sceneFired===r} @click=${()=>this.runScene(r)}>${Z(this.hass,r,i)}</button>`)}
    </div>`}async syncPets(){let e=this.building,t=this.viewer,n=e?.settings.pets?.on!==!1&&this.petsOn!==!1,i=n?e?.settings.pets?.list??[]:[],r=n&&!!e?.floors.some(s=>s.furniture.some(a=>/:aquarium(_large)?$/.test(a.type)));if(!t||!e||!L("fun_pets")||!i.length&&!r){this.pets?.dispose(),this.pets=null,this.petsFor=null;return}if(this.pets){this.petsFor!==e&&(this.petsFor=e,this.pets.update(e,i));return}if(!this.petsLoading){this.petsLoading=!0;try{let[s,a]=await Promise.all([yr(),wn()]);if(!this.viewer||this.pets)return;this.petsFor=this.building,this.pets=s.startPets({lib:a.funLib,FloorMap:a.FloorMap,viewer:this.viewer,building:this.building,pets:this.building?.settings.pets?.on!==!1&&this.petsOn!==!1?this.building?.settings.pets?.list??[]:[],night:()=>this.hass?.states["sun.sun"]?.state==="below_horizon",base:(l,d)=>pe(l,d),closedDoors:()=>{let l=new Set,d=this.hass?.states??{};for(let c of this.building?.floors??[])for(let u of c.openings)u.type==="door"&&u.contact&&d[u.contact]?.state==="off"&&l.add(u.id);return l}})}catch(s){console.error("NeonPlan 3D: the pets failed to load",s)}finally{this.petsLoading=!1}}}async syncGhost(){let e=this.building,t=!!e&&L("fun_halloween")&&e.settings.halloween?.ghost!==!1&&this.ghostOn!==!1;if(!this.viewer||!t){this.ghost?.dispose(),this.ghost=null;return}if(this.ghost){this.ghost.update(e);return}if(!this.ghostLoading){this.ghostLoading=!0;try{let[n,i]=await Promise.all([yr(),wn()]);if(!this.viewer||this.ghost||!this.building)return;this.ghost=n.startGhost({lib:i.funLib,viewer:this.viewer,building:this.building,night:()=>this.hass?.states["sun.sun"]?.state==="below_horizon"})}catch(n){console.error("NeonPlan 3D: the ghost failed to load",n)}finally{this.ghostLoading=!1}}}async startWalk(){Qe("walk");let e=this.building,t=this.viewer;if(!e||!t||this._walk)return;let n=e.floors.filter(u=>u.rooms.some(h=>h.points.length>=3)),r=(this.roomId?n.find(u=>u.rooms.some(h=>h.id===this.roomId)):void 0)??n.find(u=>u.id===this.floorId)??[...n].sort((u,h)=>Math.abs(u.elevation)-Math.abs(h.elevation))[0];if(!r)return;let s=await wn();this._walk={room:null,hint:!0},await this.updateComplete;let a=this.renderRoot.querySelector(".fp3d-walk-surface");if(!a)return;t.setFloor(r.id,!1),t.setWallMode("auto");let l=new s.FloorMap(e,r),d=this.roomId?r.rooms.find(u=>u.id===this.roomId):void 0,c;if(d){let u=l.freeNear(be(d.points));c={x:u[0],z:u[1],yaw:l.openYaw(u),pitch:-.05}}this.walker=new s.WalkCamera(t,l,a,{start:c,onRoom:u=>{this.walkRoomPts=u?.points??null,this._walk&&(this._walk={...this._walk,room:u?.name??null}),this.syncDevices(!0)}}),this.walkKeys=u=>{u.key==="Escape"&&this.stopWalk()},window.addEventListener("keydown",this.walkKeys),setTimeout(()=>{this._walk&&(this._walk={...this._walk,hint:!1})},9e3)}stopWalk(){if(!this.walker&&!this._walk)return;this.walker?.dispose(),this.walker=null,this.walkKeys&&window.removeEventListener("keydown",this.walkKeys),this.walkKeys=null,this._walk=!1,this.walkRoomPts=null;let e=this.viewer;e&&(e.setWallMode(this.wallMode),e.setFloor(this.floorId,!0)),this.syncDevices(!0)}renderWalk(){if(!this.walkable||this.ro||!this.building||!this.hass)return x;let e=r=>T(this.hass,r);if(!this._walk)return w`<button class="fp3d-walk-btn" title=${e("walk_start")} aria-label=${e("walk_start")} @click=${()=>{this.startWalk()}}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4.5" r="1.8" /><path d="m9 20 2.5-6 2.5 2.5V21M7.5 11l3-3.5 3.5 1.5 2 3.5M11.5 14l1-5" /></svg>
        <span>${e("walk_title")}</span>
      </button>`;let t=this._walk,n=null,i=(r,s)=>{if(!n)return;let a=44,l=r.clientX-n.cx,d=r.clientY-n.cy,c=Math.hypot(l,d);c>a&&([l,d]=[l/c*a,d/c*a]),s.firstElementChild.style.transform=`translate(${l}px, ${d}px)`,this.walker?.setStick({x:l/a,y:d/a})};return w`<div class="fp3d-walk-surface"></div>
      <div class="fp3d-walk-top">
        <span class="fp3d-walk-room">🚶 ${t.room??e("walk_title")}</span>
        <button class="fp3d-walk-exit" @click=${()=>this.stopWalk()}>✕ ${e("walk_end")}</button>
      </div>
      ${t.hint?w`<div class="fp3d-walk-hint">${e("walk_hint")}</div>`:x}
      <div
        class="fp3d-walk-stick"
        @pointerdown=${r=>{let s=r.currentTarget,a=s.getBoundingClientRect();n={id:r.pointerId,cx:a.left+a.width/2,cy:a.top+a.height/2},s.setPointerCapture(r.pointerId),i(r,s)}}
        @pointermove=${r=>i(r,r.currentTarget)}
        @pointerup=${r=>{n=null,r.currentTarget.firstElementChild.style.transform="",this.walker?.setStick(null)}}
        @pointercancel=${r=>{n=null,r.currentTarget.firstElementChild.style.transform="",this.walker?.setStick(null)}}
      >
        <span></span>
      </div>`}renderFind(){let e=this.building;if(!e||!this.hass)return x;if(this._find===null)return w`<button class="fp3d-find-btn" title=${T(this.hass,"find")} aria-label=${T(this.hass,"find")} @click=${()=>this._find=""}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
      </button>`;let t=tl(this.findIndex??=gr(this.hass,e),this._find);return w`<div class="fp3d-find">
      <input
        type="search"
        placeholder=${T(this.hass,"find_placeholder")}
        .value=${this._find}
        @input=${n=>this._find=n.target.value}
        @keydown=${n=>{n.key==="Escape"&&(this._find=null),n.key==="Enter"&&t[0]&&this.goTo(t[0])}}
      />
      <button class="fp3d-find-close" aria-label=${T(this.hass,"close")} @click=${()=>this._find=null}>✕</button>
      ${this._find.trim()?w`<div class="fp3d-find-list">
            ${t.length?t.map(n=>w`<button @click=${()=>this.goTo(n)}>
                    <span class="fp3d-find-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d=${n.icon?Ln(n.icon):"M4 10l8-6 8 6v10H4z"} /></svg></span>
                    <span><b>${n.name}</b>${n.where?w`<small>${n.where}</small>`:x}</span>
                  </button>`):w`<p>${T(this.hass,"find_none")}</p>`}
          </div>`:x}
    </div>`}renderCentral(){let e=this.building,t=this.hass;if(!e||!t||!this.central||this._find!==null||this.ro)return x;let n=(g,m)=>T(t,g,m),i=w`<button
      class="fp3d-central-btn ${this._central?"fp3d-central-on":""}"
      title=${n("central")}
      aria-label=${n("central")}
      aria-expanded=${this._central}
      @click=${()=>{this._central=!this._central,this._armed=null}}
    >
      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" /></svg>
    </button>`;if(!this._central)return i;let r=this.floorId?e.floors.find(g=>g.id===this.floorId):void 0,s=r?[r]:e.floors,a=s.flatMap(g=>Ko(t,g).lights),l=s.flatMap(g=>Ko(t,g).covers),d=a.filter(g=>t.states[g]?.state==="on").length,c=!r,u=(g,m,y,_)=>{if(_.length){if(c&&this._armed!==g){this._armed=g,clearTimeout(this.armTimer),this.armTimer=setTimeout(()=>this._armed=null,3500);return}this._armed=null,t.callService(m,y,{entity_id:_})}},h=(g,m,y,_,b)=>w`<button class="fp3d-btn ${this._armed===g?"fp3d-central-armed":""}" ?disabled=${!b.length} @click=${()=>u(g,y,_,b)}>
        ${this._armed===g?n("central_sure"):n(m)}
      </button>`,f=(e.settings.favorites??[]).filter(g=>t.states[g]),p=this.buttons??e.settings.buttons??[];return w`${i}
      <div class="fp3d-central" role="dialog" aria-label=${n("central")}>
        <b>${r?r.name:n("central_house")}</b>
        <div class="fp3d-central-row">
          <span>${n("central_lights")}${a.length?w` <small>${d}/${a.length}</small>`:x}</span>
          ${h("lights_on","central_on","light","turn_on",a.filter(g=>t.states[g]?.state==="off"))}
          ${h("lights_off","central_off","light","turn_off",a.filter(g=>t.states[g]?.state==="on"))}
        </div>
        ${l.length?w`<div class="fp3d-central-row">
              <span>${n("central_covers")} <small>${l.length}</small></span>
              ${h("covers_open","central_open","cover","open_cover",l)}
              ${h("covers_close","central_close","cover","close_cover",l)}
            </div>`:x}
        <b>${n("central_favorites")}</b>
        ${f.length?w`<div class="fp3d-central-favs">
              ${f.map(g=>{let[m,y]=Fs(g),_=t.states[g],b=m==="homeassistant"&&_?.state==="on";return w`<button
                  class="fp3d-chip"
                  aria-pressed=${b||this._sceneFired===g}
                  ?disabled=${N(_)}
                  @click=${()=>{t.callService(m,y,{entity_id:g}),this._sceneFired=g,setTimeout(()=>this._sceneFired=null,600)}}
                >
                  ${Z(t,g)}
                </button>`})}
            </div>`:p.length?x:w`<p class="fp3d-central-hint">${n("central_no_favorites")}</p>`}
        ${p.length?w`<div class="fp3d-central-favs">
              ${p.map(g=>w`<button
                  class="fp3d-chip fp3d-own-btn"
                  aria-pressed=${cu(t,g)}
                  @click=${m=>{Ds(t,m.currentTarget,g),g.action!=="service"&&(this._central=!1)}}
                >
                  ${g.icon?w`<ha-icon .icon=${g.icon.startsWith("mdi:")?g.icon:`mdi:${g.icon}`}></ha-icon>`:x}${g.label}
                </button>`)}
            </div>`:x}
      </div>`}mediaCardUp(e,t){let n=e.states[t];if(!n||I(t)!=="media")return!1;if(!this.ro&&(this.mediaGrace.get(t)?.until??0)>Date.now()&&N(n))return!0;let i=[n.attributes.media_title,n.attributes.app_name,n.attributes.source].some(r=>typeof r=="string"&&!!r.trim());return!N(n)&&(n.state==="playing"||n.state==="paused"&&i)}renderEye(){if(!this.cleanButton||!this.hass||this._find!==null&&!this.clean)return x;let e=T(this.hass,this.clean?"controls_show":"controls_hide");return w`<button
      class="fp3d-eye ${this.clean?"fp3d-eye-clean":""}"
      title=${e}
      aria-label=${e}
      aria-pressed=${this.clean}
      @click=${()=>this.dispatchEvent(new CustomEvent("clean-toggle",{bubbles:!0,composed:!0}))}
    >
      ${this.clean?Ut`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 6a9.8 9.8 0 0 1 9 6 9.8 9.8 0 0 1-9 6 9.8 9.8 0 0 1-9-6 9.8 9.8 0 0 1 9-6m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4" /></svg>`:Ut`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M2.4 3.8 3.8 2.4l17.8 17.8-1.4 1.4-3.3-3.3A10.5 10.5 0 0 1 12 19a9.8 9.8 0 0 1-9-6 10.3 10.3 0 0 1 3.6-4.3L2.4 3.8M12 7a4 4 0 0 1 4 4c0 .5-.1 1-.3 1.5l-5.2-5.2c.5-.2 1-.3 1.5-.3m-4 4a4 4 0 0 0 5.5 3.7l-5.2-5.2c-.2.5-.3 1-.3 1.5m4-7a9.8 9.8 0 0 1 9 6 10 10 0 0 1-2.6 3.6l-1.4-1.4A8 8 0 0 0 18.8 12 8 8 0 0 0 9.6 7.2L8 5.6A10.3 10.3 0 0 1 12 4" /></svg>`}
    </button>`}renderSwipe(){let e=this._swipe;if(!e||!this.hass)return x;let t=e.kind==="light"&&e.value<=0;return w`<div class="fp3d-swipe" style="left:${e.x}px;top:${e.y}px">
      <span>${Z(this.hass,e.entity)}</span>
      <b>${t?T(this.hass,"swipe_off"):`${e.value} %`}</b>
      <i><em style="height:${e.value}%"></em></i>
    </div>`}lookThrough(e){let t=this.viewer,n=this.building;if(!t||!n||this.ro)return;if(!L("camera_cockpit")){this._menu=null,this._proHint="camera_cockpit";return}let i=n.floors.find(s=>s.placements.some(a=>a.entity_id===e))?.id;if(!i)return;this._menu=null,this._through?this._through={...this._through,entity:e}:this._through={entity:e,back:t.getView()},this.watchCameras(!0);let r=this.floorId===i?0:300;r&&(this.throughFloor=i,this.fire("floor-tap",{floorId:i})),setTimeout(()=>{this._through?.entity===e&&!this.viewer?.lookThrough(e)&&(this._through=null)},r)}endThrough(){let e=this._through;e&&(this._through=null,this.viewer?.flyTo(e.back),this.throughWall&&(this.throughWall=!1,this.dispatchEvent(new CustomEvent("camera-wall-open",{bubbles:!0,composed:!0}))))}renderProHint(){return!this._proHint||!this.hass?x:w`<div class="fp3d-pro" role="dialog">
      <b>${T(this.hass,"pro_title")}</b>
      <span>${T(this.hass,`pro_feature_${this._proHint}`)}</span>
      <span class="fp3d-sub">${T(this.hass,"pro_locked")}</span>
      <div>
        <a class="fp3d-chip fp3d-chip-on" href=${Cs(this.hass.language)} target="_blank" rel="noopener">${T(this.hass,"pro_shop")}</a>
        <a class="fp3d-chip" href=${Os(this.hass.language,this._proHint)} target="_blank" rel="noopener">${T(this.hass,"manual_more")}</a>
        <button class="fp3d-chip" @click=${()=>(this._proHint=null,this.fire("open-extensions",null))}>${T(this.hass,"ext_tab")}</button>
        <button class="fp3d-chip" @click=${()=>this._proHint=null}>${T(this.hass,"close")}</button>
      </div>
    </div>`}renderCameraWall(){if(!this.cameraWall||!this.hass||!this.building||this.ro)return x;let e=this.hass,t=()=>{this._wallBig=null,this.live=null,this.dispatchEvent(new CustomEvent("camera-wall-close",{bubbles:!0,composed:!0}))};if(!L("camera_cockpit"))return w`<div class="fp3d-wall">
        <div class="fp3d-wall-head"><span>${T(e,"camera_wall_title")}</span><button class="fp3d-chip" @click=${t}>✕</button></div>
        <p class="fp3d-wall-pro">🔒 ${T(e,"pro_feature_camera_cockpit")}</p>
      </div>`;let n=[...new Set(this.building.floors.flatMap(c=>c.placements.map(u=>u.entity_id)).filter(c=>I(c)==="camera"))];this.watchCameras(!0);let i=c=>{let u=e.states[c],h=u?.attributes.entity_picture;return h&&u&&!N(u)?h.startsWith("data:")?h:`${h}${h.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null},r=c=>{let u=e.states[c];return w`${Z(e,c)}${u?.state==="recording"?w` <b>● ${T(e,"state_recording")}</b>`:x}`},s=this._wallBig&&n.includes(this._wallBig)?this._wallBig:null;if(s){let c=i(s),u=this.liveFor(s),h=()=>{this.throughWall=!0,t(),this.lookThrough(s)};return w`<div class="fp3d-wall">
        <div class="fp3d-wall-head">
          <button
            class="fp3d-chip"
            @click=${()=>{this._wallBig=null,this.live=null}}
          >
            ‹ ${T(e,"camera_wall_all")}
          </button>
          <span class="fp3d-wall-title">${r(s)}</span>
          <span class="fp3d-wall-tools"><button class="fp3d-chip" @click=${h}>${T(e,"through_camera")}</button><button class="fp3d-chip" aria-label="✕" @click=${t}>✕</button></span>
        </div>
        <div class="fp3d-wall-big">${u??(c?w`<img src=${c} alt="" />`:w`<div class="fp3d-wall-none">${T(e,"state_unavailable")}</div>`)}</div>
      </div>`}let a=this.renderRoot.querySelector(".fp3d-wall-grid");a||requestAnimationFrame(()=>this.requestUpdate());let{cols:l,tile:d}=bl(n.length,a?.clientWidth??this.clientWidth-48,a?.clientHeight??this.clientHeight-160);return w`<div class="fp3d-wall">
      <div class="fp3d-wall-head">
        <span>${T(e,"camera_wall_title")} · ${n.length} <span class="fp3d-still">${T(e,"camera_still",{s:this._low?10:5})}</span></span>
        <button class="fp3d-chip" aria-label="✕" @click=${t}>✕</button>
      </div>
      <div class="fp3d-wall-grid" style="grid-template-columns: repeat(${l}, ${d}px); grid-auto-rows: ${Math.round(d*9/16)}px">
        ${n.map(c=>{let u=i(c),h=Ve(e,c).some(f=>e.states[f]?.state==="on");return w`<button class="fp3d-wall-cam ${h?"fp3d-wall-seen":""}" title=${T(e,"camera_wall_big")} @click=${()=>this._wallBig=c}>
            ${u?w`<img src=${u} alt="" />`:w`<div class="fp3d-wall-none">${T(e,"state_unavailable")}</div>`}
            <span class="fp3d-wall-name">${r(c)}</span>
          </button>`})}
      </div>
    </div>`}liveFor(e){if(this.live?.id!==e){let t={id:e,el:null,failed:!1};this.live=t;let n=window;n.loadCardHelpers?n.loadCardHelpers().then(i=>{if(this.live!==t)return;let r=i.createCardElement({type:"picture-entity",entity:e,camera_view:"live",show_name:!1,show_state:!1,tap_action:{action:"none"},hold_action:{action:"none"}});r.hass=this.hass,t.el=r,this.requestUpdate()}).catch(()=>{t.failed=!0,this.requestUpdate()}):t.failed=!0}return this.live.el}renderThrough(){let e=this._through;if(!e||!this.hass)return x;let t=this.hass.states[e.entity],n=t?.attributes.entity_picture,i=n&&!N(t)?n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null;return w`<div class="fp3d-through" style="--fp3d-blend:${this._blend}">
      ${i?w`<img class="fp3d-through-img" src=${i} alt="" />`:x}
      <div class="fp3d-through-bar">
        <span class="fp3d-through-name">${Z(this.hass,e.entity)}</span>
        <span class="fp3d-still">${T(this.hass,"camera_still",{s:this._low?10:5})}</span>
        <input
          type="range"
          min="0"
          max="100"
          .value=${String(Math.round(this._blend*100))}
          aria-label=${T(this.hass,"through_blend")}
          @input=${r=>this._blend=Number(r.target.value)/100}
        />
        <button class="fp3d-chip" @click=${()=>this.endThrough()}>${T(this.hass,"through_back")}</button>
      </div>
    </div>`}renderMenu(){let e=this._menu;if(!e||!this.hass||this.ro)return x;let t=this.renderRoot.querySelector(".fp3d-stage"),n=t?.clientWidth??800,i=t?.clientHeight??600,r=Math.max(8,Math.min(n-240,e.x-116)),s=Math.max(8,Math.min(i-360,e.y-170));return w`<div class="fp3d-menu-backdrop" @click=${()=>this._menu=null}></div>
      <fp3d-quick-menu
        style="left:${r}px;top:${s}px"
        ?low=${this._low}
        .hass=${this.hass}
        .entity=${e.entity}
        .car=${e.car??null}
        .presets=${L("sound")?this.building?.settings.media_presets??[]:[]}
        ?confirmSwitch=${this.confirmSet.has(e.entity)}
        ?pro=${L("camera_cockpit")}
        @close=${()=>this._menu=null}
        @camera-look=${a=>this.lookThrough(a.detail.entity)}
      ></fp3d-quick-menu>`}onDeviceTap(e,t=0,n=0){if(e.startsWith("trail:")||e.startsWith("lamp:"))return;if(e.startsWith("hh:")){let r=e.slice(3).split("#")[0];this.ro?this.showInfo(r,t,n):xe(this,r);return}if(this.ro){let r=this.building,s=r?r.energy.grid??Ht(r,l=>this.furnitureLinks?.get(l.id)?.power??null).grid:null,a=e==="grid"?s:e.startsWith("detect:")?e.slice(7):e;a&&this.showInfo(a,t,n);return}if(e==="grid"){let r=this.building,s=r?r.energy.grid??Ht(r,a=>this.furnitureLinks?.get(a.id)?.power??null).grid:null;s&&xe(this,s);return}if(e.startsWith("detect:")){xe(this,e.slice(7));return}let i=I(e);if(i==="cover"||i==="camera"){this._menu={entity:e,x:t,y:n};return}if(i&&ws.has(i)){if(this.confirmSet.has(e)&&!confirm(T(this.hass,"confirm_switch",{name:Z(this.hass,e)})))return;Gs(this.hass,e)}else xe(this,e)}startViewOf(){return this.startView??this.building?.settings.start_view??null}currentView(){return this.viewer?.currentView()??null}resetView(){this._through=null,this.viewer?.resetView()}fire(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}toggleHolos(){this._holoShow=!this._holoShow;try{localStorage.setItem("neonplan3d.holos",this._holoShow?"1":"0")}catch{}}holoVisible(){return this.holograms??this._holoShow}toggleFlows(){this._flows=!this._flows;try{localStorage.setItem("neonplan3d.flows",this._flows?"1":"0")}catch{}this.syncDevices(!0)}renderEnergy(){let e=this._energy;if(!L("energy_pro")||!e||this.roomId||!this.showEnergy)return x;let t=i=>T(this.hass,i),n=[];if(e.consumption!==null&&n.push({cls:"total",label:t("energy_consumption"),value:te(this.hass,e.consumption)}),e.grid!==null){let i=e.grid<0;n.push({cls:i?"export":"grid",label:t(i?"energy_grid_export":"energy_grid_import"),value:te(this.hass,Math.abs(e.grid))})}if(e.solar!==null&&n.push({cls:"solar",label:t("energy_solar"),value:te(this.hass,e.solar)}),e.battery!==null||e.soc!==null){let i=[e.battery!==null?te(this.hass,Math.abs(e.battery)):null,e.soc!==null?`${Math.round(e.soc)} %`:null].filter(Boolean);n.push({cls:"battery",label:t("energy_battery"),value:i.join(" \xB7 ")})}return e.tariff&&n.push({cls:"tariff",label:t("energy_tariff"),value:`${J(this.hass,e.tariff.value,3)} ${e.tariff.unit}`.trim()}),w`<div class="fp3d-energy" aria-live="off">
      ${this._holoOn?x:n.map(i=>w`<div class="fp3d-energy-item fp3d-energy-${i.cls}"><span>${i.label}</span><b>${i.value}</b></div>`)}
      ${this.flows!==null?x:w`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._flows} title=${`${t("flows_hint")} (${t(this._flows?"flow_on":"flow_off")})`} aria-label=${t("flows")} @click=${()=>this.toggleFlows()}>
        <span>${t("flows")}</span><b>⚡</b>
      </button>`}
      ${this.holograms!==null||!this._holos.length?x:w`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._holoShow} title=${t("holos_hint")} aria-label=${t("holos")} @click=${()=>this.toggleHolos()}>
        <span>${t("holos")}</span><b>◫</b>
      </button>`}
    </div>`}renderLegend(){if(this.heatMode==="none"||this.heatMode==="values")return x;let e=Jn[this.heatMode],t=this.heatMode==="temperature",n=t?yt(this.hass,e.stops[0][0]):e.stops[0][0],i=t?yt(this.hass,e.stops[e.stops.length-1][0]):e.stops[e.stops.length-1][0],r=t?ke(this.hass):e.unit,s=a=>T(this.hass,a);return w`<div class="fp3d-legend">
      <b>${s(`heat_${this.heatMode}`)}</b>
      <span class="fp3d-legend-bar" style="background:${qa(this.heatMode)}"></span>
      <span class="fp3d-legend-range"><span>${J(this.hass,n,0)} ${r}</span><span>${J(this.hass,i,0)} ${r}</span></span>
      ${this.heatValues.size?x:w`<span class="fp3d-legend-none">${s("heat_none_found")}</span>`}
    </div>`}skyColor(){let e=mn[this.theme]??mn.neon,t=this._sky;return e.night[0].map((n,i)=>Math.round(n+(e.day[0][i]-n)*t))}watchLightning(e){if(!e){clearTimeout(this.flashTimer),this.flashTimer=void 0;return}if(this.flashTimer)return;let t=()=>{this.flashTimer=setTimeout(()=>{document.hidden||(this._flash=!0,setTimeout(()=>this._flash=!1,140)),t()},5e3+Math.random()*9e3)};t()}render(){let e=this._sky,t=(r,s)=>`rgb(${r.map((a,l)=>Math.round(a+(s[l]-a)*e)).join(",")})`,n=mn[this.theme]??mn.neon,i=`--fp3d-sky:${t(n.night[0],n.day[0])};--fp3d-ground:${t(n.night[1],n.day[1])}`;return w`<div
      class="fp3d-stage ${this.roomLabels?"":"fp3d-no-room-names"} ${this._low?"fp3d-low":""} ${this.panelOpen?"fp3d-panel-open":""} ${this.controlsRight?"fp3d-side-right":""} ${this._alerts.length?"fp3d-has-alerts":""} ${this._through?"fp3d-through-on":""} ${this._flash?"fp3d-flash":""} ${this.replay?"fp3d-replay":""}"
      style=${i}
    >
      ${this._error?w`<p class="fp3d-error">${this._error}</p>`:x} ${this.clean?x:this.renderEnergy()} ${this.renderHologram()} ${this.clean?x:this.renderLegend()}
      ${this.renderAlerts()} ${this.clean||this._walk?x:w`${this.renderThumbs()} ${this.renderScenes()} ${this.renderFind()} ${this.renderCentral()}`} ${this.clean?x:this.renderWalk()} ${this.renderSwipe()} ${this.renderInfo()} ${this.renderThrough()} ${this.renderCameraWall()}
      ${this.clean?x:this.renderProHint()} ${this.renderMenu()} ${this.renderEye()}
      ${this.showStats&&this._stats?w`<span class="fp3d-stats"
            ><b>${this._stats.fps?T(this.hass,"stats_fps",{fps:this._stats.fps,ms:this._stats.worstMs}):T(this.hass,"stats_idle")}</b>
            ${this._stats.busy.length?w`(${this._stats.busy.map(r=>T(this.hass,`stats_busy_${r}`)).join(", ")})`:x} ·
            ${T(this.hass,"stats",{calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})} ·
            ${T(this.hass,this._stats.low?"stats_low":"stats_full",{r:J(this.hass,this._stats.pixelRatio,2)})}${this.syncMs?` \xB7 sync ${J(this.hass,this.syncMs,1)} ms`:""}</span
          >`:x}
    </div>`}static styles=[Ae,Ue,me`
      :host {
        display: block;
        position: relative;
        min-height: 200px;
      }
      .fp3d-alert-banner {
        position: absolute;
        left: 50%;
        top: 10px;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        gap: 6px;
        max-width: calc(100% - 24px);
        z-index: 4;
      }
      .fp3d-alert {
        flex: 0 1 auto;
        min-width: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 7px 14px 7px 12px;
        border: 0;
        border-left: 4px solid #ff3b4f;
        border-radius: 12px;
        background: var(--fp3d-chrome-solid);
        color: var(--fp3d-text);
        font: 600 13.5px var(--fp3d-font);
        box-shadow: 0 0 18px rgba(255, 59, 79, 0.35);
        cursor: pointer;
        animation: fp3d-alert-pulse 1.2s ease-in-out infinite;
      }
      .fp3d-alert-water,
      .fp3d-alert-window_rain {
        border-left-color: #4fb3ff;
        box-shadow: 0 0 18px rgba(79, 179, 255, 0.35);
      }
      .fp3d-alert-alarm_pending {
        border-left-color: #ffb547;
        box-shadow: 0 0 18px rgba(255, 181, 71, 0.35);
      }
      .fp3d-alert-more {
        align-self: center;
        color: var(--fp3d-muted);
        font-size: 13px;
      }
      @keyframes fp3d-alert-pulse {
        50% {
          box-shadow: 0 0 4px transparent;
        }
      }
      .fp3d-has-alerts .fp3d-energy {
        top: 58px;
      }
      .fp3d-scenes {
        position: absolute;
        left: 60px;
        right: 60px;
        bottom: calc(10px + var(--fp3d-bottom-inset, 0px));
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 6px;
        z-index: 2;
        pointer-events: none;
      }
      .fp3d-scenes .fp3d-chip {
        pointer-events: auto;
      }
      @media (prefers-reduced-motion: reduce) {
        .fp3d-alert,
        .fp3d-dev-found {
          animation: none;
        }
      }
      .fp3d-stage {
        position: absolute;
        inset: 0;
        overflow: hidden;
        container-type: size;
        container-name: fp3d;
        background: radial-gradient(ellipse at 50% 35%, var(--fp3d-sky, var(--fp3d-bg2)), var(--fp3d-ground, var(--fp3d-bg)) 72%);
        transition: background 2s ease;
      }
      .fp3d-canvas {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        display: block;
        touch-action: none;
        cursor: grab;
      }
      .fp3d-canvas:active {
        cursor: grabbing;
      }
      .fp3d-labels {
        position: absolute;
        inset: 0;
        pointer-events: none;
      }
      .fp3d-pin-info {
        display: grid;
        gap: 1px;
        text-align: center;
      }
      .fp3d-pin-info small {
        font-size: 11px;
        font-weight: 500;
        opacity: 0.9;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-pin {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: auto;
        font: 600 12.5px var(--fp3d-title-font);
        color: var(--fp3d-text);
        background: var(--fp3d-chrome);
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        padding: 5px 10px;
        cursor: pointer;
        white-space: nowrap;
        backdrop-filter: blur(6px);
        box-shadow: var(--fp3d-shadow);
      }
      .fp3d-pin-floor {
        display: grid;
        justify-items: start;
        gap: 1px;
        padding: 8px 14px;
        border-radius: 12px;
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        border-color: transparent;
        box-shadow: 0 0 22px rgba(55, 224, 255, 0.28);
      }
      .fp3d-pin-floor b {
        font: 700 15px var(--fp3d-title-font);
        letter-spacing: -0.01em;
      }
      .fp3d-pin-floor span {
        font: 500 12px var(--fp3d-font);
        opacity: 0.78;
      }
      .fp3d-dev {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: auto;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px;
        border-radius: 999px;
        border: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome);
        color: var(--fp3d-muted);
        font: 600 12px var(--fp3d-font);
        cursor: pointer;
        white-space: nowrap;
        backdrop-filter: blur(6px);
        touch-action: manipulation;
        -webkit-user-select: none;
        user-select: none;
        transition: opacity 0.2s ease;
      }
      .fp3d-dev-icon {
        display: grid;
        place-items: center;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: rgba(91, 124, 255, 0.14);
      }
      .fp3d-dev[data-entity^="trail:"] {
        padding: 2px 4px 2px 2px;
        font-size: 11px;
        border-color: rgba(55, 224, 255, 0.5);
      }
      .fp3d-dev[data-entity^="trail:"] .fp3d-dev-icon {
        color: #37e0ff;
      }
      .fp3d-dev[data-entity^="trail:"] .fp3d-dev-text {
        display: inline;
      }
      .fp3d-dev-text {
        display: none;
        padding-right: 6px;
        color: var(--fp3d-text);
        font-variant-numeric: tabular-nums;
        max-width: 160px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-dev-watt:empty {
        display: none;
      }
      .fp3d-dev-watt {
        padding: 1px 6px 1px 0;
        color: #37e0ff;
        font-variant-numeric: tabular-nums;
        font-weight: 700;
      }
      .fp3d-dev-on .fp3d-dev-watt {
        color: #2a1a00;
      }
      .fp3d-person {
        position: absolute;
        left: 0;
        top: 0;
        display: grid;
        place-items: center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        overflow: hidden;
        background: #ff5fd2;
        color: #fff;
        font: 700 12px var(--fp3d-font);
        box-shadow:
          0 0 0 2px rgba(255, 95, 210, 0.45),
          0 0 18px #ff5fd2;
        pointer-events: auto;
      }
      .fp3d-person img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .fp3d-person[hidden] {
        display: none;
      }
      .fp3d-no-room-names .fp3d-pin {
        display: none !important;
      }
      /* tablet level: blur over the canvas and glowing shadows are expensive on weak GPUs */
      .fp3d-stage.fp3d-low {
        transition: none;
      }
      .fp3d-low .fp3d-pin,
      .fp3d-low .fp3d-dev,
      .fp3d-low .fp3d-dev-on,
      .fp3d-low .fp3d-energy-item,
      .fp3d-low .fp3d-find input,
      .fp3d-low .fp3d-find-list,
      .fp3d-low .fp3d-find-btn,
      .fp3d-low .fp3d-swipe,
      .fp3d-low .fp3d-thumb {
        backdrop-filter: none;
        box-shadow: none;
        transition: none;
      }
      .fp3d-thumbs {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        gap: 8px;
        max-height: calc(100% - 140px);
        overflow-y: auto;
        scrollbar-width: none;
        z-index: 2;
      }
      .fp3d-thumb {
        position: relative;
        display: grid;
        padding: 0;
        width: 150px;
        border: 1px solid var(--fp3d-line);
        border-radius: 14px;
        background: color-mix(in srgb, var(--fp3d-chrome) 70%, transparent);
        color: var(--fp3d-text);
        cursor: pointer;
        overflow: hidden;
        font: inherit;
        box-shadow: var(--fp3d-shadow);
        opacity: 0.72;
        transition: opacity 0.15s, border-color 0.15s;
      }
      .fp3d-thumb:hover,
      .fp3d-thumb[aria-pressed="true"] {
        opacity: 1;
      }
      .fp3d-thumb[aria-pressed="true"] {
        border-color: var(--fp3d-accent);
        box-shadow: var(--fp3d-shadow), 0 0 0 1px var(--fp3d-accent), 0 0 18px rgba(55, 224, 255, 0.25);
      }
      .fp3d-thumb img {
        display: block;
        width: 100%;
        aspect-ratio: 4 / 3;
      }
      .fp3d-thumb span {
        position: absolute;
        left: 8px;
        bottom: 6px;
        font-size: 12px;
        font-weight: 600;
        text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
      }
      .fp3d-thumbs-fold {
        align-self: flex-start;
        width: 26px;
        height: 22px;
        padding: 0;
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        font-size: 11px;
        cursor: pointer;
      }
      /* folded: plain floor buttons with their names, no pictures (D177) */
      .fp3d-thumbs-compact .fp3d-thumb {
        padding: 6px 10px;
        min-width: 0;
      }
      .fp3d-thumbs-compact .fp3d-thumb span {
        position: static;
        background: none;
        padding: 0;
      }
      .fp3d-thumb-house {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
      }
      .fp3d-thumb-house span {
        position: static;
        text-shadow: none;
      }
      .fp3d-thumbs-small .fp3d-thumb {
        width: 104px;
      }
      /* at the top right, clear of the floor pictures and the switch rows (a card moves it beside its own buttons) */
      .fp3d-walk-btn {
        position: absolute;
        z-index: 3;
        top: 12px;
        right: var(--fp3d-walk-right, 12px);
        height: 38px;
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 0 14px 0 10px;
        font: inherit;
        font-weight: 700;
        font-size: 14px;
        border: 1px solid rgba(55, 224, 255, 0.45);
        border-radius: 13px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        cursor: pointer;
      }
      .fp3d-walk-surface {
        position: absolute;
        inset: 0;
        z-index: 4;
        touch-action: none;
        cursor: grab;
      }
      .fp3d-walk-top {
        position: absolute;
        z-index: 5;
        top: 12px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        gap: 8px;
        pointer-events: none;
        white-space: nowrap;
      }
      .fp3d-walk-room,
      .fp3d-walk-exit,
      .fp3d-walk-hint {
        padding: 8px 14px;
        border-radius: 14px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        font: inherit;
        font-weight: 700;
      }
      .fp3d-walk-exit {
        border: 0;
        cursor: pointer;
        pointer-events: auto;
      }
      .fp3d-walk-hint {
        position: absolute;
        z-index: 5;
        left: 50%;
        top: 62px;
        transform: translateX(-50%);
        max-width: min(560px, calc(100% - 32px));
        font-weight: 500;
        font-size: 13px;
        text-align: center;
        pointer-events: none;
      }
      .fp3d-walk-stick {
        position: absolute;
        z-index: 5;
        right: 18px;
        bottom: calc(18px + var(--fp3d-bottom-inset, 0px));
        width: 112px;
        height: 112px;
        border-radius: 50%;
        background: rgba(14, 21, 38, 0.55);
        border: 1px solid var(--fp3d-line);
        display: grid;
        place-items: center;
        touch-action: none;
      }
      .fp3d-walk-stick span {
        width: 46px;
        height: 46px;
        border-radius: 50%;
        background: var(--fp3d-accent);
        box-shadow: 0 0 16px rgba(55, 224, 255, 0.5);
        pointer-events: none;
      }
      /* with a mouse the stick is not needed */
      @media (pointer: fine) {
        .fp3d-walk-stick {
          display: none;
        }
      }
      .fp3d-find-btn {
        position: absolute;
        left: 12px;
        bottom: calc(10px + var(--fp3d-bottom-inset, 0px));
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        border: 0;
        border-radius: 13px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        cursor: pointer;
      }
      /* the star sits above the search button, its menu opens above it */
      .fp3d-central-btn {
        position: absolute;
        left: 12px;
        bottom: calc(56px + var(--fp3d-bottom-inset, 0px));
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        border: 0;
        border-radius: 13px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        cursor: pointer;
        z-index: 3;
      }
      .fp3d-central-on {
        color: var(--fp3d-accent);
      }
      .fp3d-central {
        position: absolute;
        left: 12px;
        bottom: calc(104px + var(--fp3d-bottom-inset, 0px));
        width: min(320px, calc(100% - 24px));
        max-height: calc(100% - 140px);
        overflow-y: auto;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 12px 14px;
        border: 1px solid var(--fp3d-line);
        border-radius: 16px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(10px);
        z-index: 4;
      }
      .fp3d-central > b {
        font-size: 12px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        opacity: 0.7;
      }
      .fp3d-central-row {
        display: grid;
        grid-template-columns: 1fr auto auto;
        gap: 6px;
        align-items: center;
      }
      .fp3d-central-row small {
        opacity: 0.6;
      }
      .fp3d-central .fp3d-btn {
        min-width: 64px;
      }
      .fp3d-central-armed {
        background: #ff8a3d !important;
        color: #1a0d00 !important;
      }
      .fp3d-central-favs {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-own-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .fp3d-own-btn ha-icon {
        --mdc-icon-size: 18px;
      }
      .fp3d-central-hint {
        margin: 0;
        font-size: 13px;
        opacity: 0.7;
      }
      .fp3d-low .fp3d-central {
        backdrop-filter: none;
      }
      /* the eye sits beside the search button; alone in the corner once the view is clean */
      .fp3d-eye {
        position: absolute;
        left: 56px;
        bottom: calc(10px + var(--fp3d-bottom-inset, 0px));
        width: 36px;
        height: 36px;
        display: grid;
        place-items: center;
        padding: 0;
        border-radius: 50%;
        border: 1px solid rgba(160, 240, 255, 0.35);
        background: rgba(8, 16, 34, 0.7);
        color: var(--fp3d-text);
        cursor: pointer;
        z-index: 4;
      }
      .fp3d-eye-clean {
        left: 12px;
        opacity: 0.55;
      }
      .fp3d-eye:hover,
      .fp3d-eye-clean:hover {
        opacity: 1;
      }
      .fp3d-find {
        position: absolute;
        left: 12px;
        bottom: calc(10px + var(--fp3d-bottom-inset, 0px));
        width: min(340px, calc(100% - 24px));
        display: flex;
        flex-direction: column-reverse;
        gap: 6px;
        z-index: 3;
      }
      .fp3d-find input {
        box-sizing: border-box;
        width: 100%;
        height: 42px;
        padding: 0 42px 0 14px;
        border: 1px solid var(--fp3d-line);
        border-radius: 14px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        font: inherit;
        font-size: 15px;
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(8px);
      }
      .fp3d-find-close {
        position: absolute;
        right: 6px;
        bottom: 6px;
        width: 30px;
        height: 30px;
        border: 0;
        border-radius: 10px;
        background: none;
        color: var(--fp3d-muted);
        cursor: pointer;
      }
      .fp3d-find-list {
        display: grid;
        padding: 6px;
        border-radius: 14px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(8px);
      }
      .fp3d-find-list button {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 10px;
        border: 0;
        border-radius: 10px;
        background: none;
        color: var(--fp3d-text);
        text-align: left;
        font: inherit;
        cursor: pointer;
      }
      .fp3d-find-list button:hover,
      .fp3d-find-list button:focus-visible {
        background: rgba(127, 127, 127, 0.14);
      }
      .fp3d-find-list b {
        display: block;
        font-weight: 600;
      }
      .fp3d-find-list small,
      .fp3d-find-list p {
        color: var(--fp3d-muted);
        font-size: 12px;
        margin: 0;
      }
      .fp3d-find-list p {
        padding: 8px 10px;
      }
      .fp3d-find-icon {
        display: grid;
        place-items: center;
        width: 30px;
        height: 30px;
        border-radius: 10px;
        background: rgba(127, 127, 127, 0.15);
        flex: none;
      }
      .fp3d-find-icon svg {
        width: 16px;
        height: 16px;
      }
      .fp3d-swipe {
        position: absolute;
        transform: translate(-50%, calc(-100% - 28px));
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        gap: 2px 12px;
        padding: 8px 12px;
        border-radius: 14px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        pointer-events: none;
        white-space: nowrap;
        z-index: 4;
      }
      /* time travel: the clock sits at the top centre, the warnings below it */
      .fp3d-replay .fp3d-alert-banner {
        top: 74px;
      }
      /* the time bar takes the bottom: the heat legend moves up under the energy values */
      .fp3d-replay .fp3d-legend,
      .fp3d-replay.fp3d-has-alerts .fp3d-legend {
        bottom: auto;
        top: 62px;
      }
      .fp3d-replay .fp3d-energy {
        max-width: calc(50% - 96px);
        flex-wrap: nowrap;
        overflow-x: auto;
        scrollbar-width: none;
        pointer-events: auto;
      }
      .fp3d-replay .fp3d-energy > * {
        flex: none;
      }
      /* the warnings sit below the clock, so the energy values stay at the top */
      .fp3d-replay.fp3d-has-alerts .fp3d-energy {
        top: 10px;
      }
      @container fp3d (max-width: 700px) {
        .fp3d-replay .fp3d-energy,
        .fp3d-replay.fp3d-has-alerts .fp3d-energy {
          top: 68px;
          max-width: calc(100% - 24px);
        }
        .fp3d-replay .fp3d-alert-banner,
        .fp3d-replay .fp3d-legend {
          top: 116px;
        }
        .fp3d-replay.fp3d-has-alerts .fp3d-legend {
          top: 164px;
        }
      }
      .fp3d-info {
        grid-template-columns: auto;
        z-index: 5;
      }
      .fp3d-swipe.fp3d-info b {
        font-size: 15px;
      }
      .fp3d-swipe span {
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-swipe b {
        grid-row: 2;
        font: 700 22px var(--fp3d-title-font);
      }
      .fp3d-swipe i {
        grid-row: 1 / 3;
        grid-column: 2;
        position: relative;
        width: 10px;
        height: 44px;
        border-radius: 5px;
        background: rgba(127, 127, 127, 0.25);
        overflow: hidden;
      }
      .fp3d-swipe em {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--fp3d-warm);
      }
      .fp3d-menu-backdrop {
        position: absolute;
        inset: 0;
        z-index: 5;
      }
      .fp3d-through {
        position: absolute;
        inset: 0;
        z-index: 4;
        pointer-events: none;
      }
      /* the camera wall: a glass sheet over the scene with every camera's picture */
      .fp3d-wall {
        position: absolute;
        inset: 56px 12px calc(var(--fp3d-bottom-inset, 0px) + 12px);
        z-index: 5;
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 10px 12px;
        border-radius: 16px;
        background: rgba(8, 16, 34, 0.86);
        border: 1px solid rgba(160, 240, 255, 0.4);
        box-shadow: 0 0 28px rgba(55, 224, 255, 0.25);
        overflow: auto;
      }
      .fp3d-wall-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 600;
        color: #e6fbff;
      }
      .fp3d-wall-pro {
        margin: 0;
        color: #ffd75a;
      }
      .fp3d-wall-head .fp3d-wall-title {
        flex: 1;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 8px;
      }
      .fp3d-wall-title b {
        color: #ff6b6b;
        font-weight: 600;
      }
      .fp3d-wall-tools {
        display: flex;
        gap: 6px;
      }
      .fp3d-wall-big {
        flex: 1;
        min-height: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        overflow: hidden;
        background: #0a1426;
      }
      .fp3d-wall-big img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      /* the stream player: a bare card, as wide as the sheet allows for a 16:9 picture */
      .fp3d-wall-big > hui-picture-entity-card,
      .fp3d-wall-big > hui-error-card {
        width: min(100%, calc((100vh - 200px) * 16 / 9));
        --ha-card-background: transparent;
        --ha-card-border-width: 0;
        --ha-card-box-shadow: none;
      }
      .fp3d-wall-grid {
        flex: 1;
        display: grid;
        align-content: safe center;
        justify-content: center;
        gap: 12px;
        min-height: 0;
        overflow-y: auto;
      }
      .fp3d-wall-cam {
        position: relative;
        padding: 0;
        border: 1px solid rgba(160, 240, 255, 0.3);
        border-radius: 12px;
        overflow: hidden;
        background: #0a1426;
        cursor: pointer;
        width: 100%;
        height: 100%;
      }
      .fp3d-wall-cam img,
      .fp3d-wall-none {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #8aa;
      }
      .fp3d-wall-seen {
        border-color: rgba(255, 80, 90, 0.9);
        box-shadow: 0 0 14px rgba(255, 60, 70, 0.5);
      }
      .fp3d-wall-name {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 4px 8px;
        font-size: 12px;
        text-align: left;
        color: #e6fbff;
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
      }
      .fp3d-wall-name b {
        color: #ff6b6b;
        font-weight: 600;
      }
      .fp3d-pro {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 6;
        display: flex;
        flex-direction: column;
        gap: 8px;
        /* left: 50% leaves only half the width to shrink into: a width of its own keeps the buttons inside */
        width: min(320px, calc(100% - 60px));
        padding: 16px 18px;
        border-radius: 14px;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-accent);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
      }
      .fp3d-pro div {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
      .fp3d-pro a {
        text-decoration: none;
      }
      .fp3d-flash::after {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 3;
        background: rgba(225, 238, 255, 0.4);
        pointer-events: none;
      }
      .fp3d-through-img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: var(--fp3d-blend);
      }
      .fp3d-through-bar {
        position: absolute;
        left: 50%;
        bottom: calc(var(--fp3d-bottom-inset, 0px) + 14px);
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        gap: 12px;
        max-width: calc(100% - 32px);
        padding: 8px 10px 8px 16px;
        border-radius: 999px;
        background: var(--fp3d-chrome);
        backdrop-filter: blur(12px);
        border: 1px solid var(--fp3d-line);
        pointer-events: auto;
      }
      .fp3d-through-name {
        font-weight: 600;
        white-space: nowrap;
      }
      /* a small note that the picture is a still, so nobody wonders why it does not move */
      .fp3d-still {
        font-size: 11px;
        font-weight: 400;
        opacity: 0.65;
        white-space: nowrap;
        margin-left: 6px;
      }
      .fp3d-through-bar input[type="range"] {
        width: 140px;
        accent-color: var(--fp3d-accent);
      }
      .fp3d-through-on :is(.fp3d-pin, .fp3d-dev, .fp3d-energy, .fp3d-legend, .fp3d-thumbs, .fp3d-scenes, .fp3d-find-btn, .fp3d-stats) {
        display: none;
      }
      fp3d-quick-menu {
        position: absolute;
        z-index: 6;
      }
      .fp3d-dev-found {
        animation: fp3d-found 0.6s ease-in-out 4;
      }
      @keyframes fp3d-found {
        50% {
          scale: 1.35;
          filter: drop-shadow(0 0 12px var(--fp3d-accent));
        }
      }
      .fp3d-legend {
        position: absolute;
        left: 12px;
        /* above the star button */
        bottom: calc(104px + var(--fp3d-bottom-inset, 0px));
        display: grid;
        gap: 4px;
        min-width: 180px;
        padding: 8px 11px;
        border-radius: 12px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        font-size: 12px;
        pointer-events: none;
      }
      .fp3d-legend-bar {
        height: 8px;
        border-radius: 4px;
      }
      .fp3d-legend-range {
        display: flex;
        justify-content: space-between;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-legend-none {
        color: var(--fp3d-warm);
      }
      /* Energie Pro: the glass hologram beside the house */
      .fp3d-holo {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 4;
        width: 236px;
        padding: 12px 14px 11px;
        border-radius: 16px;
        overflow: hidden;
        cursor: pointer;
        background: linear-gradient(140deg, rgba(150, 235, 255, 0.2) 0%, rgba(70, 140, 230, 0.08) 45%, rgba(20, 60, 140, 0.05) 100%);
        backdrop-filter: blur(7px) saturate(150%);
        -webkit-backdrop-filter: blur(7px) saturate(150%);
        border: 1px solid rgba(160, 240, 255, 0.55);
        box-shadow:
          0 0 28px rgba(55, 224, 255, 0.35),
          0 0 2px rgba(200, 250, 255, 0.9),
          inset 0 1px 0 rgba(255, 255, 255, 0.45),
          inset 0 0 36px rgba(55, 224, 255, 0.14);
        color: #e6fbff;
        font-size: 12px;
        line-height: 1.35;
        text-shadow: 0 0 6px rgba(80, 220, 255, 0.55);
        will-change: transform;
        transform-origin: 0 0;
      }
      .fp3d-holo[hidden],
      .fp3d-holo-link[hidden] {
        display: none;
      }
      /* a device's card: smaller than the plant's */
      /* the now-playing card: cover, titles, transport and volume */
      .fp3d-holo-media .fp3d-holo-head {
        cursor: pointer;
      }
      .fp3d-holo-track {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 6px;
      }
      .fp3d-holo-cover {
        width: 46px;
        height: 46px;
        border-radius: 8px;
        object-fit: cover;
        flex: none;
        box-shadow: 0 0 12px rgba(55, 224, 255, 0.35);
      }
      .fp3d-holo-cover-none {
        display: grid;
        place-items: center;
        font-size: 22px;
        background: rgba(55, 224, 255, 0.15);
        color: #a8f0ff;
      }
      .fp3d-holo-titles {
        display: grid;
        gap: 2px;
        min-width: 0;
      }
      .fp3d-holo-titles b {
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 170px;
      }
      .fp3d-holo-titles span {
        font-size: 12px;
        opacity: 0.8;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 170px;
      }
      .fp3d-holo-media-controls {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-top: 8px;
      }
      .fp3d-holo-media-controls button {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        border: 1px solid rgba(160, 240, 255, 0.4);
        background: rgba(8, 16, 34, 0.6);
        color: var(--fp3d-text);
        cursor: pointer;
        font-size: 12px;
      }
      .fp3d-holo-media-controls button:disabled {
        opacity: 0.3;
        cursor: default;
      }
      .fp3d-holo-media-controls input[type="range"] {
        width: 70px;
        accent-color: var(--fp3d-accent);
      }
      .fp3d-holo-car-main {
        display: flex;
        align-items: baseline;
        gap: 8px;
        margin-top: 4px;
      }
      .fp3d-holo-car-main b {
        font-size: 22px;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-car-main span {
        font-size: 12px;
        opacity: 0.85;
      }
      .fp3d-holo-car-bar {
        height: 5px;
        margin-top: 6px;
        border-radius: 3px;
        background: rgba(160, 240, 255, 0.15);
        overflow: hidden;
      }
      .fp3d-holo-car-bar i {
        display: block;
        height: 100%;
        border-radius: 3px;
        box-shadow: 0 0 8px currentColor;
      }
      .fp3d-holo-meters {
        display: flex;
        flex-wrap: wrap;
        gap: 2px 10px;
      }
      .fp3d-holo-pool-chem {
        display: grid;
        grid-template-columns: 50px 64px 1fr;
        align-items: center;
        gap: 6px;
        margin-top: 5px;
        font-size: 12px;
      }
      .fp3d-holo-pool-chem span {
        opacity: 0.8;
      }
      .fp3d-holo-pool-chem b {
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
      }
      .fp3d-holo-pool-chem i {
        position: relative;
        height: 4px;
        border-radius: 2px;
        /* red – yellow – green (the ideal range in the middle) – yellow – red */
        background: linear-gradient(90deg, rgba(255, 77, 64, 0.35), rgba(255, 204, 64, 0.35) 25%, rgba(77, 255, 128, 0.45) 40%, rgba(77, 255, 128, 0.45) 60%, rgba(255, 204, 64, 0.35) 75%, rgba(255, 77, 64, 0.35));
      }
      .fp3d-holo-pool-chem em {
        position: absolute;
        top: -2px;
        width: 8px;
        height: 8px;
        margin-left: -4px;
        border-radius: 50%;
        box-shadow: 0 0 6px currentColor;
      }
      .fp3d-holo-pool-line {
        margin-top: 5px;
        font-size: 12px;
        opacity: 0.85;
      }
      /* Pool Pro: ball valves and the six-way valve, set by hand */
      .fp3d-holo-valves {
        display: grid;
        gap: 4px;
        margin-top: 4px;
        max-height: 220px;
        overflow-y: auto;
        pointer-events: auto;
      }
      .fp3d-holo-valve,
      .fp3d-holo-valve-pos button {
        font: inherit;
        font-size: 11.5px;
        color: inherit;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(91, 124, 255, 0.35);
        border-radius: 8px;
        padding: 4px 8px;
        cursor: pointer;
        text-align: left;
      }
      .fp3d-holo-valve {
        display: grid;
        grid-template-columns: 14px 1fr auto;
        gap: 6px;
        align-items: center;
      }
      .fp3d-holo-valve i {
        font-style: normal;
        color: #ff6b5a;
      }
      .fp3d-holo-valve.fp3d-holo-on i {
        color: #4dff9a;
      }
      .fp3d-holo-valve small {
        opacity: 0.75;
      }
      .fp3d-holo-valve-pos {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
      }
      .fp3d-holo-on {
        border-color: var(--fp3d-accent) !important;
        color: var(--fp3d-accent) !important;
      }
      .fp3d-holo-vol {
        font-size: 11px;
        opacity: 0.8;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-dev {
        width: 184px;
        padding: 10px 12px 9px;
      }
      /* tablet level: no blur and no sheen, the glass is painted */
      .fp3d-holo-plain {
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
        background: rgba(12, 26, 50, 0.9);
      }
      .fp3d-holo-plain .fp3d-holo-sheen,
      .fp3d-holo-plain .fp3d-holo-scan {
        display: none;
      }
      /* the thin line from the solar field up to the card, with a dot on the field */
      .fp3d-holo-link {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        z-index: 3;
        pointer-events: none;
        overflow: visible;
      }
      .fp3d-holo-link line {
        stroke: rgba(160, 240, 255, 0.75);
        stroke-width: 1.2;
        filter: drop-shadow(0 0 3px rgba(55, 224, 255, 0.8));
      }
      .fp3d-holo-link circle {
        fill: #cffaff;
        stroke: rgba(55, 224, 255, 0.8);
        stroke-width: 2;
        filter: drop-shadow(0 0 4px rgba(55, 224, 255, 0.9));
      }
      .fp3d-holo-min {
        width: 150px;
      }
      .fp3d-holo-sheen {
        position: absolute;
        inset: 0;
        background: linear-gradient(115deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0) 32%, rgba(255, 255, 255, 0) 68%, rgba(255, 255, 255, 0.07) 100%);
        pointer-events: none;
      }
      .fp3d-holo-scan {
        position: absolute;
        inset: 0;
        background: repeating-linear-gradient(0deg, rgba(160, 240, 255, 0.06) 0 1px, transparent 1px 4px);
        pointer-events: none;
      }
      .fp3d-holo-body {
        position: relative;
      }
      .fp3d-holo-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 10px;
        letter-spacing: 0.14em;
        color: #8ff0ff;
        text-transform: uppercase;
      }
      .fp3d-holo-live {
        color: #5dffb0;
      }
      .fp3d-holo-big {
        display: flex;
        align-items: baseline;
        gap: 9px;
        margin: 6px 0 1px;
      }
      .fp3d-holo-big b {
        font-size: 26px;
        color: #ffe27a;
        text-shadow: 0 0 12px rgba(255, 210, 80, 0.85);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-big span,
      .fp3d-holo-sub {
        color: #aee9ff;
      }
      .fp3d-holo-sub {
        margin-bottom: 6px;
      }
      .fp3d-holo-plants {
        display: grid;
        grid-template-columns: auto auto;
        justify-content: space-between;
        column-gap: 10px;
        margin: 0 0 5px;
        font-size: 11px;
        color: #aee9ff;
      }
      .fp3d-holo-plants b {
        color: #ffe27a;
        text-align: right;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-sub b,
      .fp3d-holo-cell b,
      .fp3d-holo-foot b {
        color: #fff;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-curve {
        display: block;
        margin-bottom: 7px;
        filter: drop-shadow(0 0 4px rgba(255, 215, 90, 0.7));
      }
      .fp3d-holo-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6px;
      }
      .fp3d-holo-cell {
        border-left: 2px solid #aee9ff;
        padding-left: 6px;
      }
      .fp3d-holo-cell span {
        font-size: 11px;
      }
      .fp3d-holo-bat {
        border-left-color: #5dffb0;
      }
      .fp3d-holo-bat span {
        color: #5dffb0;
      }
      .fp3d-holo-exp {
        border-left-color: #4ff6ff;
      }
      .fp3d-holo-exp span {
        color: #4ff6ff;
      }
      .fp3d-holo-imp {
        border-left-color: #ff6fb0;
      }
      .fp3d-holo-imp span {
        color: #ff8fc4;
      }
      .fp3d-holo-house {
        border-left-color: #a9c0ff;
      }
      .fp3d-holo-wb {
        border-left-color: #63c9ff;
      }
      .fp3d-holo-bar {
        margin-top: 8px;
        height: 5px;
        border-radius: 3px;
        background: rgba(160, 240, 255, 0.16);
        overflow: hidden;
      }
      .fp3d-holo-bar div {
        height: 100%;
        background: linear-gradient(90deg, #5dffb0, #4ff6ff);
        box-shadow: 0 0 8px rgba(80, 240, 255, 0.8);
      }
      .fp3d-holo-foot {
        display: flex;
        justify-content: space-between;
        margin-top: 3px;
        font-size: 10px;
        color: #aee9ff;
      }
      .fp3d-energy {
        position: absolute;
        left: 12px;
        top: 10px;
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        max-width: calc(100% - 24px);
        pointer-events: none;
      }
      .fp3d-energy-item {
        display: grid;
        padding: 5px 11px 6px;
        border-radius: 12px;
        background: var(--fp3d-chrome);
        border-left: 3px solid var(--fp3d-line);
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(6px);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-energy-item span {
        font-size: 11px;
        color: var(--fp3d-muted);
      }
      .fp3d-energy-item b {
        font: 700 15px var(--fp3d-title-font);
      }
      .fp3d-energy-total {
        border-left-color: #6fd8ff;
      }
      .fp3d-energy-grid {
        border-left-color: #37e0ff;
      }
      .fp3d-energy-export,
      .fp3d-energy-solar {
        border-left-color: #ffc633;
      }
      .fp3d-energy-battery {
        border-left-color: #59ff8c;
      }
      .fp3d-flow-toggle {
        pointer-events: auto;
        cursor: pointer;
        border: 0;
        border-left: 3px solid var(--fp3d-line);
        color: inherit;
        text-align: left;
        font: inherit;
      }
      .fp3d-flow-toggle[aria-pressed="true"] {
        border-left-color: var(--fp3d-accent);
      }
      .fp3d-flow-toggle span {
        display: none;
      }
      .fp3d-flow-toggle b {
        opacity: 0.4;
        filter: grayscale(1);
      }
      .fp3d-flow-toggle[aria-pressed="true"] b {
        opacity: 1;
        filter: none;
      }
      .fp3d-energy-tariff {
        border-left-color: #b98cff;
      }
      /* narrow stages (portrait tablets, phones): the energy values scroll in one row */
      @container fp3d (max-width: 900px) {
        .fp3d-energy {
          flex-wrap: nowrap;
          overflow-x: auto;
          scrollbar-width: none;
          pointer-events: auto;
        }
        .fp3d-legend {
          bottom: auto;
          top: 62px;
        }
        .fp3d-has-alerts .fp3d-legend {
          top: 110px;
        }
      }
      /* the view's own controls on the right (#285); the room panel opens there, so they make way for it */
      .fp3d-side-right :is(.fp3d-thumbs, .fp3d-find-btn, .fp3d-central-btn, .fp3d-central, .fp3d-eye-clean, .fp3d-find, .fp3d-legend) {
        left: auto;
        right: 12px;
      }
      .fp3d-side-right .fp3d-eye {
        left: auto;
        right: 56px;
      }
      .fp3d-side-right.fp3d-panel-open :is(.fp3d-thumbs, .fp3d-find-btn, .fp3d-central-btn, .fp3d-central, .fp3d-eye-clean, .fp3d-find, .fp3d-legend) {
        display: none;
      }
      /* a room sheet covers the lower half: the view's own controls step aside */
      @container fp3d ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .fp3d-panel-open :is(.fp3d-find-btn, .fp3d-find, .fp3d-thumbs, .fp3d-legend, .fp3d-stats, .fp3d-scenes) {
          display: none;
        }
      }
      @media (pointer: coarse) {
        .fp3d-find-close {
          width: 40px;
          height: 40px;
          right: 1px;
          bottom: 1px;
        }
        .fp3d-dev {
          padding: 6px;
        }
        .fp3d-pin {
          padding: 8px 12px;
        }
      }
      .fp3d-dev-full .fp3d-dev-text {
        display: inline;
      }
      .fp3d-dev-name:empty {
        display: none;
      }
      .fp3d-dev-name {
        position: absolute;
        top: calc(100% + 3px);
        left: 50%;
        transform: translateX(-50%);
        max-width: 140px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 1px 6px;
        border-radius: 6px;
        font-size: 10.5px;
        font-weight: 600;
        line-height: 1.35;
        color: var(--fp3d-text);
        background: rgba(10, 16, 32, 0.72);
        pointer-events: none;
      }
      .fp3d-dev-sel {
        outline: 2px solid var(--fp3d-accent);
        outline-offset: 2px;
      }
      .fp3d-dev-on {
        color: #2a1a00;
        border-color: transparent;
        background: var(--fp3d-glow, var(--fp3d-warm));
        box-shadow: 0 0 16px var(--fp3d-glow, var(--fp3d-warm));
      }
      .fp3d-dev-on .fp3d-dev-icon {
        background: rgba(255, 255, 255, 0.28);
      }
      .fp3d-dev-on .fp3d-dev-text {
        color: #2a1a00;
      }
      .fp3d-dev-na {
        opacity: 0.45;
      }
      .fp3d-dev-dim {
        opacity: 0.35;
      }
      .fp3d-dev[hidden],
      .fp3d-pin[hidden] {
        display: none;
      }
      .fp3d-pin-active {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        border-color: transparent;
        box-shadow: 0 0 18px rgba(55, 224, 255, 0.45);
      }
      .fp3d-stats b {
        color: var(--fp3d-accent);
        font-weight: 700;
      }
      .fp3d-stats {
        padding: 4px 9px;
        border-radius: 8px;
        background: var(--fp3d-chrome);
        position: absolute;
        right: 10px;
        bottom: calc(8px + var(--fp3d-bottom-inset, 0px));
        font-size: 11.5px;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
        pointer-events: none;
      }
      .fp3d-error {
        position: absolute;
        inset: auto 16px 16px;
        color: var(--fp3d-danger);
      }
    `]};customElements.get("fp3d-view3d")||customElements.define("fp3d-view3d",Ar);function te(o,e){return Math.abs(e)>=1e3?`${J(o,e/1e3,1)} kW`:`${Math.round(e)} W`}function kl(o){return o.type==="tv_board"?o.h+.9:o.type==="tv_wall"||o.type==="kitchen_wall"?o.h+.25:o.h+.35}var du=.25,xl=o=>Math.round(o*1e3)/1e3;function Rr(o,e,t,n,i){let r=o.rooms.find(s=>s.points.length>=3&&V([e,t],s.points));return!r||V([n,i],r.points)?[n,i]:V([n,t],r.points)?[n,t]:V([e,i],r.points)?[e,i]:[e,t]}function Sl(o,e,t,n=du){let i=o.rooms.find(d=>d.points.length>=3&&V([e.x,e.z],d.points));if(!i)return null;let r=i.points,s=Le(r)>=0?1:-1,a=t/2,l=null;for(let d=0;d<r.length;d++){let c=r[d],u=r[(d+1)%r.length],h=Math.hypot(u[0]-c[0],u[1]-c[1]);if(h<.3)continue;let f=[(u[0]-c[0])/h,(u[1]-c[1])/h],p=[-f[1]*s,f[0]*s],g=(e.x-c[0])*f[0]+(e.z-c[1])*f[1];if(g<0||g>h)continue;let y=o.rooms.some(v=>v.id!==i.id&&v.points.some((P,M)=>{let E=v.points[(M+1)%v.points.length],F=Math.abs((P[0]-c[0])*p[0]+(P[1]-c[1])*p[1]),G=Math.abs((E[0]-c[0])*p[0]+(E[1]-c[1])*p[1]);return F<.02&&G<.02}))?a:0,_=(e.x-c[0])*p[0]+(e.z-c[1])*p[1]-y,b=Math.atan2(-p[0],p[1])*180/Math.PI,k=v=>Math.abs((e.rotation-v+540)%360-180),A=[{rotation:b,extent:e.d/2},{rotation:b+90,extent:e.w/2},{rotation:b-90,extent:e.w/2}].reduce((v,P)=>k(P.rotation)<k(v.rotation)?P:v);if(k(A.rotation)>50)continue;let S=_-A.extent;Math.abs(S)>n||l&&Math.abs(S)>=Math.abs(l.gap)||(l={x:xl(e.x-p[0]*S),z:xl(e.z-p[1]*S),rotation:(Math.round(A.rotation)%360+360)%360,gap:S})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}var Tr;function uu(){let o=new URL("./neonplan3d-timetravel.js?v=1c014a1e9f0f",new URL(import.meta.url)).href;return Tr??=import(o).catch(e=>{throw Tr=void 0,e}),Tr}var Wt=class{session=null;starting=!1;host;constructor(e){this.host=e}get active(){return this.starting||!!this.session}start(e){this.active||(this.starting=!0,this.host.requestUpdate(),uu().then(t=>{this.starting&&(this.starting=!1,this.session=t.startTimeTravel({...e,onChange:()=>this.host.requestUpdate(),onExit:()=>this.stop()}),this.host.requestUpdate())},t=>{this.starting=!1,console.error("NeonPlan 3D: time travel failed to load",t),this.host.requestUpdate()}))}stop(){this.active&&(this.starting=!1,this.session?.dispose(),this.session=null,this.host.requestUpdate())}hass(e){return this.session?.hass??e}};var q={get(o){try{return localStorage.getItem(`neonplan3d.${o}`)}catch{return null}},set(o,e){try{localStorage.setItem(`neonplan3d.${o}`,e)}catch{}}},Fr=class extends ue{static properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_mode:{state:!0},_newOffers:{state:!0},_readyPacks:{state:!0},_shopConnected:{state:!0},_giftLater:{state:!0},_showOpen:{state:!0},_editorReady:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_wallMode:{state:!0},_explode:{state:!0},_keepRoof:{state:!0},_quality:{state:!0},_stats:{state:!0},_markers:{state:!0},_heat:{state:!0},_theme:{state:!0},_furnish:{state:!0},_selFurniture:{state:!0},_selDevice:{state:!0},_floorStack:{state:!0},_roomNames:{state:!0},_controlsRight:{state:!0},_keepView:{state:!0},_trail:{state:!0},_cameraWall:{state:!0},_clean:{state:!0},_navWrap:{state:!0},_optsOpen:{state:!0},_accent:{state:!0},_weather:{state:!0}};offersChecked=!1;data=new vt(this);tt=new Wt(this);ttLinked=!1;constructor(){super(),this.narrow=!1,this._mode="view",this._newOffers=0,this._readyPacks=0,this._shopConnected=null,this._giftLater=!1,this._showOpen=!1,this._editorReady=!!customElements.get("fp3d-editor"),this._floorId=null,this._roomId=null,this._wallMode=q.get("walls")==="cut"?"cut":"auto",this._explode=q.get("explode")!=="0",this._keepRoof=q.get("roof")==="1";let e=q.get("quality");this._quality=e==="low"||e==="high"?e:"auto",this._stats=q.get("stats")==="1"||new URLSearchParams(location.search).has("fp3d_stats");let t=q.get("markers");this._markers=t==="none"||t==="all"?t:"important";let n=q.get("heat");this._heat=n==="temperature"||n==="humidity"||n==="co2"||n==="values"?n:"none";let i=q.get("theme");this._theme=i&&pr.includes(i)?i:"neon";let r=q.get("accent");this._accent=r&&/^#[0-9a-f]{6}$/i.test(r)?r:null,this._furnish=!1,this._selFurniture=null,this._selDevice=null;let s=q.get("floor_stack");this._floorStack=s==="stacked"||s==="single"?s:"dim",this._roomNames=q.get("room_names")!=="0",this._controlsRight=q.get("controls")==="right",this._keepView=q.get("keep_view")==="1",this._trail=q.get("trail")==="1",this._cameraWall=!1,this._clean=q.get("clean")==="1",this._navWrap=q.get("nav_wrap")==="1",this._optsOpen=!1,this._weather=q.get("weather")!=="0"}t(e,t){return T(this.hass,e,t)}willUpdate(e){e.has("hass")&&this.hass&&(this.data.setHass(this.hass),this.tt.session?.setLive(this.hass)),e.has("hass")&&this.hass&&!St(this.hass.language)&&Wn(this.hass.language).then(()=>this.requestUpdate());let t=this.data.building;t&&this._floorId&&!t.floors.some(n=>n.id===this._floorId)&&(this._floorId=null,this._roomId=null)}get isAdmin(){return this.hass?.user?.is_admin??!1}setMode(e){e!==this._mode&&(this.tt.stop(),e==="view"&&this.data.flush(),this._mode=e,Qe(e))}onRoomTap(e){let{floorId:t,roomId:n}=e.detail;if((this.data.building?.floors.length??0)>1&&t&&this._floorId!==t){this._floorId=t,this._roomId=null;return}n&&(this._roomId=n===this._roomId?null:n)}setWallMode(e){this._wallMode=e,q.set("walls",e)}setKeepRoof(e){this._keepRoof=e,q.set("roof",e?"1":"0")}setExplode(e){this._explode=e,q.set("explode",e?"1":"0")}setQuality(e){this._quality=e,q.set("quality",e)}editFurniture(e,t){let n=this.data.building;if(!n)return;let i=structuredClone(n);for(let r of i.floors){let s=r.furniture.find(a=>a.id===e);s&&t(s,r)}this.data.edit(i)}editDevice(e,t){let n=this.data.building;if(!n)return;let i=structuredClone(n);for(let r of i.floors){let s=r.placements.find(a=>a.entity_id===e);s&&t(s,r)}this.data.edit(i)}moveDevice(e){let{id:t,x:n,z:i}=e.detail;this.editDevice(t,(r,s)=>{let[a,l]=Rr(s,r.x,r.z,n,i);Object.assign(r,{x:a,z:l})})}turnStep(){return I(this._selDevice??"")==="camera"?15:45}turnDevice(e){this._selDevice&&this.editDevice(this._selDevice,t=>t.rotation=(((t.rotation??0)+e)%360+360)%360)}deleteDevice(){let e=this._selDevice,t=this.data.building;if(!e||!t)return;let n=structuredClone(t);for(let i of n.floors)i.placements=i.placements.filter(r=>r.entity_id!==e);this.data.edit(n),this._selDevice=null}renderDeviceFields(e){let n=this.data.building?.floors.find(u=>u.placements.some(h=>h.entity_id===e)),i=n?.placements.find(u=>u.entity_id===e);if(!n||!i)return x;let r=I(e),s=r==="light",a=r==="camera",l=i.mount==="ceiling",d=r?kt(r,n.height,s||a?i.mount??(a?"wall":"ceiling"):null):1,c=(u,h,f,p,g,m)=>w`<label class="fp3d-size" title=${u}
        >${u}
        <input
          type="number"
          inputmode="decimal"
          step=${f}
          min=${p}
          max=${g}
          .value=${String(Math.round(h*100)/100)}
          @change=${y=>{let _=parseFloat(y.target.value.replace(",","."));Number.isFinite(_)&&m(Math.min(g,Math.max(p,_)))}}
        />
      </label>`;return w`${s?w`<select class="fp3d-size-select" title=${this.t("lamp_mount")} @change=${u=>this.editDevice(e,h=>Object.assign(h,{mount:u.target.value,y:null}))}>
            ${["ceiling","floor","table","wall"].map(u=>w`<option value=${u} ?selected=${u===(i.mount??"ceiling")}>${this.t(`lamp_${u}`)}</option>`)}
          </select>`:x}
      ${a?w`<select class="fp3d-size-select" title=${this.t("camera_mount")} @change=${u=>this.editDevice(e,h=>Object.assign(h,{mount:u.target.value,y:null}))}>
              <option value="wall" ?selected=${!l}>${this.t("camera_mount_wall")}</option>
              <option value="ceiling" ?selected=${l}>${this.t("camera_mount_ceiling")}</option>
            </select>
            ${c(this.t("camera_fov_short"),i.fov??(l?360:90),5,10,360,u=>this.editDevice(e,h=>h.fov=u))}
            ${c(this.t("camera_reach_short"),i.reach??(l?3:4.5),.5,.5,50,u=>this.editDevice(e,h=>h.reach=u))}
            ${c(this.t("camera_tilt_short"),i.tilt??(l?65:20),5,0,90,u=>this.editDevice(e,h=>h.tilt=u))}`:x}
      <label class="fp3d-size" title=${this.t("marker_height")}
        >${this.t("size_short_h")}
        <input
          type="number"
          inputmode="decimal"
          step="0.05"
          min="0"
          .value=${String(Math.round((i.y??d)*100)/100)}
          @change=${u=>{let h=parseFloat(u.target.value.replace(",","."));Number.isFinite(h)&&h>=0&&this.editDevice(e,f=>f.y=Math.round(h*1e3)/1e3)}}
        />
      </label>
      ${i.y!==null?w`<button class="fp3d-chip" @click=${()=>this.editDevice(e,u=>u.y=null)}>${this.t("height_auto")}</button>`:x}`}furnitureName(e){let t=this.data.building?.floors.flatMap(n=>n.furniture).find(n=>n.id===e);return t?Me(this.hass,t.type):""}moveFurniture(e){let{id:t,x:n,z:i}=e.detail,r=this.data.building?.settings.wall_interior??.12;this.editFurniture(t,(s,a)=>{let[l,d]=Rr(a,s.x,s.z,n,i);Object.assign(s,{x:l,z:d});let c=Sl(a,s,r);c&&Object.assign(s,c)})}renderSizeFields(e){let t=this.data.building?.floors.flatMap(l=>l.furniture).find(l=>l.id===e);if(!t)return x;let n=ei(this.hass,this.data.building?.settings.units)==="imperial",i=l=>n?ti(l):String(Math.round(l*100)/100),r=l=>n?ni(l,"imperial"):parseFloat(l.replace(",",".")),s=(l,d)=>w`<label class="fp3d-size" title=${this.t(`size_${l}`)}
      >${d}
      <input
        type=${n?"text":"number"}
        inputmode="decimal"
        step="0.05"
        min="0.05"
        .value=${i(t[l])}
        @change=${c=>{let u=r(c.target.value)??NaN;Number.isFinite(u)&&u>0&&this.editFurniture(e,h=>h[l]=Math.round(u*1e3)/1e3)}}
    /></label>`,a=this.data.building?.floors.find(l=>l.furniture.some(d=>d.id===e));return w`${s("w",this.t("size_short_w"))}${s("d",this.t("size_short_d"))}${s("h",this.t("size_short_h"))}
    ${a&&ss(t)?w`<label class="fp3d-size" title=${this.t("mount_height")}
            >↕
            <input
              type=${n?"text":"number"}
              inputmode="decimal"
              step="0.05"
              min="0"
              .value=${i(t.mount_y??pe(a,t))}
              @change=${l=>{let d=r(l.target.value)??NaN;Number.isFinite(d)&&d>=0&&this.editFurniture(e,c=>c.mount_y=Math.round(d*1e3)/1e3)}}
          /></label>
          ${t.mount_y!=null?w`<button class="fp3d-chip" @click=${()=>this.editFurniture(e,l=>l.mount_y=null)}>${this.t("height_auto")}</button>`:x}`:x}`}turnFurniture(e){this._selFurniture&&this.editFurniture(this._selFurniture,t=>t.rotation=((t.rotation+e)%360+360)%360)}deleteFurniture(){let e=this._selFurniture,t=this.data.building;if(!e||!t)return;let n=structuredClone(t);for(let i of n.floors)i.furniture=i.furniture.filter(r=>r.id!==e);this.data.edit(n),this._selFurniture=null}view3d(){return this.renderRoot.querySelector("fp3d-view3d")}toggleTimeTravel(e=null){if(this.tt.active){this.tt.stop();return}let t=this.view3d(),n=this.data.building;if(!(!t||!n||!this.hass)){if(!L("time_travel")){t.proHint("time_travel");return}this._furnish=!1,this._cameraWall=!1,this.tt.start({live:this.hass,building:n,spec:t.historyEntities(),quality:this._quality,at:e,t:(i,r)=>T(this.hass,i,r)})}}updated(){if(this.ttLinked||!this.data.building||!mt()||this._mode!=="view"||!this.view3d())return;this.ttLinked=!0;let e=new URLSearchParams(location.search).get("tt");e!==null&&L("time_travel")&&this.toggleTimeTravel(e)}back(){this._roomId?this._roomId=null:this._floorId&&(this.data.building?.floors.length??0)>1?this._floorId=null:this.view3d()?.resetView()}onKey=e=>{e.key!=="Escape"||this._mode!=="view"||(this.tt.active?this.tt.stop():this.back())};connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}checkOffers(){this.offersChecked||!this.hass?.user?.is_admin||(this.offersChecked=!0,Pi(this.hass).then(e=>{this._shopConnected=!!e.active,this._newOffers=e.active?$i(e.offers??[]).length:0,this._readyPacks=e.active?Mi(e.updates??[]).length+(e.packs??[]).filter(t=>t.installed===null).length:0}).catch(()=>{}))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.tt.stop()}render(){if(this.hass&&!St(this.hass.language))return x;this.checkOffers();let e=this.data.building,t=this.data.saveState;return w`
      <div class="fp3d-app ${this._clean&&this._mode==="view"?"fp3d-clean":""}" style=${this._accent?`--fp3d-accent:${this._accent}`:""}>
        ${this._clean&&this._mode==="view"?x:w`<header class="fp3d-header">
          <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
          <h1>NeonPlan 3D</h1>
          ${this.isAdmin?w`<div class="fp3d-seg" role="tablist">
                <button role="tab" aria-pressed=${this._mode==="view"} @click=${()=>this.setMode("view")}>${this.t("view")}</button>
                <button role="tab" aria-pressed=${this._mode==="editor"} @click=${()=>this.setMode("editor")}>${this.t("editor")}</button>
                <button role="tab" class="fp3d-tab-ext" aria-pressed=${this._mode==="extensions"} @click=${()=>this.setMode("extensions")}>
                  ✦ ${this.t("ext_tab")}${this._readyPacks?w`<span class="fp3d-badge" title=${this.t("ext_badge_ready_hint")}>⬇ ${this.t("ext_badge_ready",{n:this._readyPacks})}</span>`:this._newOffers?w`<span class="fp3d-badge" title=${this.t("offers_dot")}>${this.t("ext_badge_new",{n:this._newOffers})}</span>`:x}
                </button>
              </div>`:x}
          <span class="fp3d-grow"></span>
          ${this._mode==="view"&&e?.floors.some(n=>n.rooms.length)?w`<button
                  class="fp3d-opts-btn"
                  aria-expanded=${this._optsOpen}
                  title=${this.t("view_options")}
                  aria-label=${this.t("view_options")}
                  @click=${()=>this._optsOpen=!this._optsOpen}
                >
                  ⚙
                </button>
                <div class="fp3d-view-opts ${this._optsOpen?"fp3d-opts-open":""}">
                <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("quality")}>
                ${["auto","low","high"].map(n=>w`<button aria-pressed=${this._quality===n} @click=${()=>this.setQuality(n)}>${this.t(`quality_${n}`)}</button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("theme")}>
                ${pr.map(n=>w`<button
                      aria-pressed=${this._theme===n}
                      @click=${()=>{this._theme=n,q.set("theme",n)}}
                    >
                      ${this.t(`theme_${n}`)}
                    </button>`)}
                <label class="fp3d-accent-pick" title=${this.t("accent_hint")}>
                  <input
                    type="color"
                    .value=${this._accent??"#37e0ff"}
                    aria-label=${this.t("accent")}
                    @input=${n=>{this._accent=n.target.value,q.set("accent",this._accent)}}
                  />
                  ${this._accent?w`<button
                        class="fp3d-accent-reset"
                        title=${this.t("accent_reset")}
                        aria-label=${this.t("accent_reset")}
                        @click=${()=>{this._accent=null,q.set("accent","")}}
                      >
                        ↺
                      </button>`:x}
                </label>
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("markers")}>
                ${["none","important","all"].map(n=>w`<button
                      aria-pressed=${this._markers===n}
                      title=${this.t("markers")}
                      @click=${()=>{this._markers=n,q.set("markers",n)}}
                    >
                      ${this.t(`markers_${n}`)}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("controls_side")} title=${this.t("controls_side")}>
                ${[!1,!0].map(n=>w`<button
                      aria-pressed=${this._controlsRight===n}
                      title=${this.t(n?"controls_right":"controls_left")}
                      aria-label=${this.t(n?"controls_right":"controls_left")}
                      @click=${()=>{this._controlsRight=n,q.set("controls",n?"right":"left")}}
                    >
                      ${n?"\u25E8":"\u25E7"}
                    </button>`)}
                <button
                  aria-pressed=${this._keepView}
                  title=${`${this.t("keep_view")}: ${this.t("keep_view_hint")}`}
                  aria-label=${this.t("keep_view")}
                  @click=${()=>{this._keepView=!this._keepView,q.set("keep_view",this._keepView?"1":"0")}}
                >
                  ⌖
                </button>
                <button
                  aria-pressed=${this._stats}
                  title=${this.t("fps_title")}
                  @click=${()=>{this._stats=!this._stats,q.set("stats",this._stats?"1":"0")}}
                >
                  ${this.t("fps")}
                </button>
              </div>
              </div>`:x}
          ${this._mode==="editor"&&t!=="idle"?w`<span class="fp3d-save fp3d-save-${t}">${this.t(t==="saving"?"saving":t==="saved"?"saved":"save_error")}</span>`:x}
          <span class="fp3d-version" title=${this.t("version_hint",{backend:this.data.backendVersion??"?"})}>v${this.data.frontendVersion}</span>
        </header>`}
        ${this._clean&&this._mode==="view"?x:this.renderNotices()}
        ${this.data.error&&!e?w`<p class="fp3d-message">${this.t("load_error")}: ${this.data.error}</p>`:x}
        ${!e&&!this.data.error?w`<p class="fp3d-message">${this.t("loading")}</p>`:x}
        ${e?this._mode==="editor"&&this.isAdmin?this.renderEditor(e):this._mode==="extensions"&&this.isAdmin?this.renderExtensions():this.renderView(e):x}
        ${this.renderGift()}
      </div>
    `}renderGift(){let e="fun_gifts_2026";if(!this.isAdmin||this._giftLater||this._shopConnected===null||!this.data.packsLoaded||Ws.includes("fun_halloween")||L("fun_halloween")&&L("fun_pets"))return x;try{if(localStorage.getItem(`neonplan3d.news.${e}`)==="never")return x}catch{}let t=()=>{try{localStorage.setItem(`neonplan3d.news.${e}`,"never")}catch{}this._giftLater=!0},n=this._shopConnected;return w`<div class="fp3d-gift-veil" @click=${i=>i.target===i.currentTarget&&(this._giftLater=!0)}>
      <div class="fp3d-gift" role="dialog" aria-label=${this.t(n?"gift_title":"gift_title_free")}>
        <div class="fp3d-gift-pic">🎃 👻 🐱 🐶</div>
        <h3>${this.t(n?"gift_title":"gift_title_free")}</h3>
        <p>${this.t(n?"gift_text":"gift_text_free")}</p>
        <div class="fp3d-gift-actions">
          ${n?w`<button class="fp3d-btn fp3d-primary" @click=${()=>(this._giftLater=!0,this.setMode("extensions"))}>⬇ ${this.t("gift_install")}</button>`:w`<a class="fp3d-btn fp3d-primary" href=${Ls(this.hass?.language)} target="_blank" rel="noopener" @click=${()=>this._giftLater=!0}>🎁 ${this.t("gift_register")}</a>`}
          <button class="fp3d-btn" @click=${()=>this._giftLater=!0}>${this.t("news_later")}</button>
          <button class="fp3d-btn" @click=${t}>${this.t("news_never")}</button>
        </div>
      </div>
    </div>`}renderNotices(){let e=this.data,t=[];if(e.needsRestart&&(e.versionGap==="frontend"?t.push(w`<div class="fp3d-notice fp3d-notice-warn">
            ${this.t("needs_reload",{frontend:e.frontendVersion,backend:e.backendVersion??"?"})}
            <button class="fp3d-btn" @click=${()=>location.reload()}>${this.t("reload_page")}</button>
          </div>`):t.push(w`<div class="fp3d-notice fp3d-notice-warn">${e.backendVersion?this.t("needs_restart",{version:e.backendVersion,frontend:e.frontendVersion}):this.t("needs_restart_old")}</div>`)),e.saveState==="error"&&e.saveError&&t.push(w`<div class="fp3d-notice fp3d-notice-error">${this.t("save_failed_detail",{error:e.saveError})}</div>`),e.draft&&this.isAdmin){let n=new Date(e.draft.savedAt).toLocaleString(this.hass?.language);t.push(w`<div class="fp3d-notice">
          <span>${this.t("draft_found",{time:n})}</span>
          <button class="fp3d-btn fp3d-primary" @click=${()=>e.restoreDraft()}>${this.t("draft_restore")}</button>
          <button class="fp3d-btn" @click=${()=>e.discardDraft()}>${this.t("draft_discard")}</button>
        </div>`)}return t.length?w`<div class="fp3d-notices">${t}</div>`:x}renderExtensions(){return this._editorReady?w`<fp3d-extensions
      class="fp3d-body"
      .hass=${this.hass}
      .packs=${this.data.packs}
      .building=${this.data.building}
      @building-edit=${e=>this.data.edit(e.detail)}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @offers-seen=${()=>this._newOffers=0}
      @packs-ready=${e=>this._readyPacks=e.detail}
    ></fp3d-extensions>`:(Fo().then(()=>this._editorReady=!0,e=>this.data.error=String(e)),w`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}renderEditor(e){return this._editorReady?w`<fp3d-editor
      class="fp3d-body"
      .hass=${this.hass}
      .building=${e}
      .narrow=${this.narrow}
      .packs=${this.data.packs}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @open-extensions=${()=>this.setMode("extensions")}
      @building-changed=${t=>this.data.edit(t.detail.building)}
    ></fp3d-editor>`:(Fo().then(()=>this._editorReady=!0,t=>this.data.error=String(t)),w`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}onNavWheel=e=>{if(this._navWrap||!e.deltaY||e.deltaX)return;let t=e.currentTarget;t.scrollWidth<=t.clientWidth||(t.scrollLeft+=e.deltaY,e.preventDefault())};renderView(e){if(!e.floors.length||!e.floors.some(r=>r.rooms.length))return w`<div class="fp3d-empty">
        <p>${this.t(this.isAdmin?"no_building_admin":"no_building")}</p>
        ${this.isAdmin?w`<button class="fp3d-btn fp3d-primary" @click=${()=>this.setMode("editor")}>${this.t("open_editor")}</button>
              <p class="fp3d-phone-only">${this.t("phone_hint")}</p>`:x}
      </div>`;let t=e.floors.find(r=>r.id===this._floorId),n=t?[t]:e.floors,i=this.tt.active;return w`
      ${this._clean?x:w`<nav class="fp3d-nav ${this._navWrap?"fp3d-nav-wrap":""}" @wheel=${this.onNavWheel}>
        ${e.floors.length>1?w`<button class="fp3d-chip" aria-pressed=${this._floorId===null} @click=${()=>{this._floorId=null,this._roomId=null}}>
                ${this.t("all_floors")}
              </button>
              ${[...e.floors].reverse().map(r=>w`<button
                  class="fp3d-chip"
                  aria-pressed=${r.id===this._floorId}
                  @click=${()=>{this._floorId=r.id,this._roomId=null}}
                >
                  ${r.name}
                </button>`)}
              <span class="fp3d-sep"></span>`:x}
        ${n.flatMap(r=>[n.length>1&&r.rooms.some(s=>s.name.trim())?w`<span class="fp3d-nav-floor">${r.name}</span>`:x,...r.rooms.filter(s=>s.name.trim()).map(s=>w`<button
              class="fp3d-chip fp3d-room-chip"
              aria-pressed=${s.id===this._roomId}
              @click=${()=>{e.floors.length>1&&(this._floorId=r.id),this._roomId=s.id===this._roomId?null:s.id}}
            >
              ${s.name}
            </button>`)])}
        <button
          class="fp3d-chip fp3d-nav-toggle"
          title=${this.t(this._navWrap?"nav_row":"nav_wrap")}
          aria-label=${this.t(this._navWrap?"nav_row":"nav_wrap")}
          aria-pressed=${this._navWrap}
          @click=${()=>{this._navWrap=!this._navWrap,q.set("nav_wrap",this._navWrap?"1":"0")}}
        >
          ${this._navWrap?"\u2194":"\u2261"}
        </button>
      </nav>`}
      <div class="fp3d-stage-wrap ${this._roomId?"fp3d-room-open":""} ${this._controlsRight?"fp3d-side-right":""} ${i?"fp3d-tt":""}">
        <fp3d-view3d
          class="fp3d-body"
          .hass=${this.tt.hass(this.hass)}
          .replay=${this.tt.session?.replay??null}
          .building=${e}
          .packs=${this.data.packs}
          .floorStack=${this._floorStack}
          .roomLabels=${this._roomNames}
          .controlsRight=${this._controlsRight}
          .keepView=${this._keepView}
          ?trail=${this._trail}
          .cameraWall=${this._cameraWall&&!i}
          @camera-wall-close=${()=>this._cameraWall=!1}
          @camera-wall-open=${()=>this._cameraWall=!0}
          .clean=${this._clean}
          .cleanButton=${!0}
          @clean-toggle=${()=>{this._clean=!this._clean,q.set("clean",this._clean?"1":"0")}}
          .weather=${this._weather}
          .panelOpen=${!!this._roomId}
          .floorId=${e.floors.length>1?this._floorId:e.floors[0]?.id??null}
          .roomId=${this._roomId}
          .wallMode=${this._wallMode}
          .explode=${this._explode}
          .keepRoof=${this._keepRoof}
          .markerMode=${this._markers}
          .heatMode=${this._heat}
          .theme=${this._theme}
          .accent=${this._accent}
          ?furnish=${this._furnish&&!i}
          .selectedFurniture=${this._selFurniture}
          @furniture-select=${r=>this._selFurniture=r.detail.id}
          @furniture-move=${this.moveFurniture}
          @device-select=${r=>this._selDevice=r.detail.id}
          @device-move=${this.moveDevice}
          .quality=${this._quality}
          ?showStats=${this._stats}
          @room-tap=${this.onRoomTap}
          @open-extensions=${()=>this.setMode("extensions")}
          @floor-tap=${r=>{this._floorId=r.detail.floorId,this._roomId=null}}
          @back=${()=>this.back()}
        ></fp3d-view3d>
        ${this._roomId?w`<fp3d-room-panel
              class="fp3d-room-panel"
              @camera-look=${r=>this.view3d()?.lookThrough(r.detail.entity)}
              .hass=${this.tt.hass(this.hass)}
              ?readOnly=${i}
              .room=${e.floors.flatMap(r=>r.rooms).find(r=>r.id===this._roomId)??null}
              .floor=${e.floors.find(r=>r.rooms.some(s=>s.id===this._roomId))??null}
              .building=${e}
              .confirmEntities=${xt(this.hass,e.floors)}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:x}
        ${this.tt.session?w`<fp3d-time-bar .session=${this.tt.session}></fp3d-time-bar>`:x}
        ${this._clean?x:w`<div class="fp3d-overlay">
          <div class="fp3d-show-wrap">
            <button class="fp3d-chip" aria-haspopup="true" aria-expanded=${this._showOpen} @click=${()=>this._showOpen=!this._showOpen}>${this.t("show_menu")} <span class="fp3d-caret">▾</span></button>
            ${this._showOpen?w`<div class="fp3d-show-veil" @click=${()=>this._showOpen=!1}></div>
                  <div class="fp3d-show-panel">
          <div class="fp3d-seg">
            <button aria-pressed=${this._wallMode==="auto"} @click=${()=>this.setWallMode("auto")}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wallMode==="cut"} @click=${()=>this.setWallMode("cut")}>${this.t("walls_cut")}</button>
          </div>
          ${e.floors.length>1&&!this._floorId?w`<div class="fp3d-seg">
                <button aria-pressed=${this._explode} @click=${()=>this.setExplode(!0)}>${this.t("floors_apart")}</button>
                <button aria-pressed=${!this._explode} @click=${()=>this.setExplode(!1)}>${this.t("floors_stacked")}</button>
              </div>`:x}
          ${!this._floorId&&e.settings.roof.type!=="none"?w`<div class="fp3d-seg">
                <button aria-pressed=${this._keepRoof} title=${this.t("roof_keep_hint")} @click=${()=>this.setKeepRoof(!this._keepRoof)}>${this.t("roof_keep")}</button>
              </div>`:x}
          ${e.floors.length>1&&this._floorId?w`<div class="fp3d-seg" role="group" aria-label=${this.t("card_floor_stack")}>
                ${["dim","stacked","single"].map(r=>w`<button
                      aria-pressed=${this._floorStack===r}
                      @click=${()=>{this._floorStack=r,q.set("floor_stack",r)}}
                    >
                      ${this.t(`floor_stack_short_${r}`)}
                    </button>`)}
              </div>`:x}
          <div class="fp3d-seg" role="group" aria-label=${this.t("heatmap")}>
            ${["none","temperature","humidity","co2","values"].map(r=>w`<button
                  aria-pressed=${this._heat===r}
                  @click=${()=>{this._heat=r,q.set("heat",r)}}
                >
                  ${this.t(r==="none"?"heat_off":`heat_short_${r}`)}
                </button>`)}
          </div>
          <button
            class="fp3d-chip"
            aria-pressed=${this._roomNames}
            @click=${()=>{this._roomNames=!this._roomNames,q.set("room_names",this._roomNames?"1":"0")}}
          >
            ${this.t("room_names_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._trail}
            title=${this.t("trail_hint")}
            @click=${()=>{this._trail=!this._trail,q.set("trail",this._trail?"1":"0")}}
          >
            ${L("camera_cockpit")?"":"\u{1F512} "}${this.t("trail_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._cameraWall}
            title=${this.t("camera_wall_hint")}
            @click=${()=>this._cameraWall=!this._cameraWall}
          >
            ${L("camera_cockpit")?"":"\u{1F512} "}${this.t("cameras_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._weather}
            title=${this.t("weather_hint")}
            @click=${()=>{this._weather=!this._weather,q.set("weather",this._weather?"1":"0")}}
          >
            ${L("weather")?"":"\u{1F512} "}${this.t("weather_short")}
          </button>
                  </div>`:x}
          </div>
          <button class="fp3d-chip fp3d-tt-chip" aria-pressed=${i} title=${this.t("tt_hint")} @click=${()=>this.toggleTimeTravel()}>
            ${L("time_travel")?"\u23EA":"\u{1F512}"} ${this.t("tt_chip")}
          </button>
          ${this._roomId||this._floorId&&e.floors.length>1?w`<button class="fp3d-chip" @click=${()=>this.back()}>${this.t("back")}</button>`:x}
        </div>`}
        ${this._furnish?w`<div class="fp3d-furnish-bar">
              ${this._selFurniture?w`<span>${this.furnitureName(this._selFurniture)}</span>
                    ${this.renderSizeFields(this._selFurniture)}
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(-45)}>↺ 45°</button>
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(45)}>↻ 45°</button>
                    <button class="fp3d-chip" title=${this.t("furn_mirror_hint")} @click=${()=>this.editFurniture(this._selFurniture,r=>r.mirror=!r.mirror)}>⇋ ${this.t("furn_mirror")}</button>
                    <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>`:this._selDevice?w`<span>${Z(this.hass,this._selDevice)}</span>
                      ${this.renderDeviceFields(this._selDevice)}
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(-this.turnStep())}>↺ ${this.turnStep()}°</button>
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(this.turnStep())}>↻ ${this.turnStep()}°</button>
                      <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteDevice()}>${this.t("delete")}</button>`:w`<span>${this.t("furnish_hint")}</span>`}
              <button class="fp3d-chip fp3d-chip-on" @click=${()=>(this._furnish=!1,this._selFurniture=null,this._selDevice=null)}>${this.t("done")}</button>
            </div>`:x}
      </div>
    `}static styles=[Ae,Ue,me`
      .fp3d-gift-veil {
        position: fixed;
        inset: 0;
        z-index: 40;
        display: grid;
        place-items: center;
        padding: 16px;
        background: rgba(2, 6, 14, 0.55);
      }
      .fp3d-gift {
        max-width: 440px;
        padding: 22px 22px 18px;
        border-radius: 18px;
        border: 1px solid #ff9a3c;
        background: var(--fp3d-panel, #0d1628);
        box-shadow: 0 0 40px rgba(255, 154, 60, 0.3);
        text-align: center;
      }
      .fp3d-gift-pic {
        font-size: 34px;
        letter-spacing: 6px;
      }
      .fp3d-gift h3 {
        margin: 10px 0 6px;
      }
      .fp3d-gift p {
        margin: 0 0 14px;
        color: var(--fp3d-muted, #a9b8d4);
      }
      .fp3d-gift-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        justify-content: center;
      }
      .fp3d-badge {
        display: inline-block;
        margin-left: 6px;
        padding: 1px 8px;
        border-radius: 999px;
        background: #ffb547;
        color: #1a1204;
        font-size: 0.78em;
        font-weight: 700;
        line-height: 1.5;
        box-shadow: 0 0 10px rgba(255, 181, 71, 0.7);
        vertical-align: middle;
        white-space: nowrap;
        animation: fp3d-badge-in 1.6s ease-out 2;
      }
      @keyframes fp3d-badge-in {
        0% {
          box-shadow: 0 0 0 0 rgba(255, 181, 71, 0.9);
        }
        100% {
          box-shadow: 0 0 0 10px rgba(255, 181, 71, 0);
        }
      }
      :host {
        display: block;
        /* HA gives the custom panel's parent no explicit height, so 100% collapses. The parent may pad itself by the
           screen's safe areas (notches; some themes set them on every screen): those are taken off, or the panel is
           taller than the window and its bottom is cut off (#529). */
        height: calc(100vh - var(--safe-area-inset-top, 0px) - var(--safe-area-inset-bottom, 0px));
        height: calc(100dvh - var(--safe-area-inset-top, 0px) - var(--safe-area-inset-bottom, 0px));
        background: var(--fp3d-bg);
      }
      .fp3d-app {
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: 0;
      }
      .fp3d-header {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 6px 14px 6px 4px;
        min-height: 52px;
        border-bottom: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        flex-wrap: wrap;
      }
      ha-menu-button {
        color: var(--fp3d-text);
      }
      h1 {
        font-family: var(--fp3d-title-font);
        font-weight: 700;
        font-size: 19px;
        letter-spacing: -0.01em;
        margin: 0 4px 0 8px;
        white-space: nowrap;
      }
      .fp3d-notices {
        display: grid;
        gap: 6px;
        padding: 8px 14px 0;
      }
      .fp3d-notice {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px 12px;
        padding: 9px 12px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        font-size: 13.5px;
      }
      .fp3d-notice span {
        flex: 1;
        min-width: 200px;
      }
      .fp3d-notice-warn {
        border-color: rgba(255, 181, 71, 0.6);
        color: var(--fp3d-warm);
      }
      .fp3d-notice-error {
        border-color: rgba(255, 107, 139, 0.6);
        color: var(--fp3d-danger);
        word-break: break-word;
      }
      .fp3d-chip-on {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
      }
      .fp3d-furnish-bar {
        position: absolute;
        left: 50%;
        bottom: 16px;
        transform: translateX(-50%);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 8px;
        max-width: calc(100% - 24px);
        padding: 8px 10px 8px 16px;
        border-radius: 999px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        font-size: 13.5px;
      }
      .fp3d-size-select {
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        padding: 4px 10px;
      }
      .fp3d-size {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-size input {
        width: 58px;
        padding: 5px 6px;
        border: 1px solid rgba(127, 127, 127, 0.35);
        border-radius: 8px;
        background: transparent;
        color: inherit;
        font: inherit;
        font-size: 13px;
      }
      .fp3d-danger-chip {
        color: var(--fp3d-danger);
      }
      .fp3d-grow {
        flex: 1;
      }
      .fp3d-save {
        font-size: 12.5px;
        color: var(--fp3d-muted);
      }
      /* the view options (quality, look, symbols, side) fold behind ⚙ on every screen: a tidy header */
      .fp3d-opts-btn {
        display: grid;
        place-items: center;
        order: 3;
        width: 36px;
        height: 36px;
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        background: transparent;
        color: var(--fp3d-text);
        font-size: 17px;
        cursor: pointer;
      }
      .fp3d-opts-btn[aria-expanded="true"] {
        color: var(--fp3d-accent);
        border-color: var(--fp3d-accent);
      }
      .fp3d-view-opts {
        display: none;
      }
      .fp3d-view-opts.fp3d-opts-open {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        order: 5;
        width: 100%;
      }
      /* phones: version and grow move with it */
      @media (max-width: 700px) {
        .fp3d-version {
          order: 4;
        }
        .fp3d-header .fp3d-grow {
          display: none;
        }
      }
      /* the installed version, at the far right of the header */
      .fp3d-version {
        margin-left: auto;
        font-size: 11.5px;
        color: var(--fp3d-muted);
        white-space: nowrap;
        opacity: 0.8;
      }
      .fp3d-save-error {
        color: var(--fp3d-danger);
      }
      .fp3d-body {
        flex: 1;
        min-height: 0;
      }
      /* the colour well beside the look: a small round swatch, the reset arrow next to it */
      .fp3d-accent-pick {
        display: inline-flex;
        align-items: center;
        gap: 2px;
        padding: 0 4px;
      }
      .fp3d-accent-pick input[type="color"] {
        width: 22px;
        height: 22px;
        padding: 0;
        border: 1px solid var(--fp3d-line);
        border-radius: 50%;
        background: none;
        cursor: pointer;
      }
      .fp3d-accent-pick input[type="color"]::-webkit-color-swatch-wrapper {
        padding: 2px;
      }
      .fp3d-accent-pick input[type="color"]::-webkit-color-swatch {
        border: none;
        border-radius: 50%;
      }
      .fp3d-accent-reset {
        border: none;
        background: none;
        color: var(--fp3d-muted);
        cursor: pointer;
        font-size: 14px;
        padding: 0 2px;
      }
      .fp3d-nav {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 10px 14px;
        overflow-x: auto;
        scrollbar-width: none;
        flex: none;
      }
      /* a desktop shows a thin scrollbar while the pointer rests on the bar */
      .fp3d-nav:hover {
        scrollbar-width: thin;
      }
      /* wrapped: several lines, at most about three before the bar itself scrolls */
      .fp3d-nav-wrap {
        flex-wrap: wrap;
        overflow-x: visible;
        overflow-y: auto;
        max-height: 132px;
      }
      .fp3d-nav-floor {
        flex: none;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
        margin-left: 6px;
      }
      .fp3d-nav-toggle {
        flex: none;
        margin-left: auto;
        position: sticky;
        right: 0;
        min-width: 34px;
        padding-left: 8px;
        padding-right: 8px;
      }
      .fp3d-nav .fp3d-chip {
        box-shadow: none;
        border: 1px solid var(--fp3d-line);
      }
      .fp3d-sep {
        flex: none;
        width: 1px;
        margin: 4px 4px;
        background: var(--fp3d-line);
      }
      .fp3d-stage-wrap {
        position: relative;
        flex: 1;
        min-height: 0;
        display: flex;
        container-type: size;
        container-name: fp3d;
      }
      .fp3d-stage-wrap fp3d-view3d {
        flex: 1;
      }
      .fp3d-room-panel {
        position: absolute;
        top: 58px;
        right: 14px;
        bottom: 14px;
        width: min(360px, calc(100% - 28px));
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        pointer-events: none;
      }
      /* the switches sit at the bottom (as in the card), where they never meet the energy values or warnings */
      fp3d-view3d {
        --fp3d-bottom-inset: 52px;
      }
      .fp3d-clean fp3d-view3d {
        --fp3d-bottom-inset: 0px;
      }
      .fp3d-furnish-bar {
        bottom: 68px;
      }
      /* time travel: its bar at the bottom; the switches, the buttons of the view and the room panel above it */
      .fp3d-tt > * {
        --fp3d-tt-h: 64px;
      }
      .fp3d-tt fp3d-view3d {
        --fp3d-bottom-inset: calc(52px + var(--fp3d-tt-h));
      }
      .fp3d-tt .fp3d-overlay {
        bottom: calc(var(--fp3d-tt-h) + 4px);
      }
      .fp3d-tt .fp3d-room-panel {
        bottom: calc(var(--fp3d-tt-h) + 6px);
      }
      .fp3d-tt-chip[aria-pressed="true"] {
        background: #ffb020;
        color: #1a1200;
      }
      /* phones and portrait tablets: panel as a sheet at the bottom, the switches step aside */
      @container fp3d ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .fp3d-room-panel {
          top: auto;
          left: 8px;
          right: 8px;
          bottom: 8px;
          width: auto;
          height: 55%;
          justify-content: flex-end;
        }
        .fp3d-room-open .fp3d-overlay {
          display: none;
        }
        /* the view's own buttons (search, eye) step up above the sheet */
        .fp3d-room-open fp3d-view3d {
          --fp3d-bottom-inset: calc(55% + 8px);
        }
        /* phones: the time bar takes two rows; the switches make way for it */
        .fp3d-tt > * {
          --fp3d-tt-h: 100px;
        }
        .fp3d-tt .fp3d-overlay {
          display: none;
        }
        .fp3d-tt fp3d-view3d {
          --fp3d-bottom-inset: var(--fp3d-tt-h);
        }
      }
      /* search and eye on the right (#285): the bar leaves room there instead */
      .fp3d-side-right .fp3d-overlay {
        left: 12px;
        right: 100px;
      }
      /* an open room panel keeps the switches beside it, not over its last rows */
      .fp3d-room-open .fp3d-overlay {
        right: calc(min(360px, 100% - 28px) + 26px);
      }
      .fp3d-overlay {
        position: absolute;
        right: 12px;
        bottom: 12px;
        /* room for the search button and the eye beside it */
        left: 100px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        align-items: center;
        pointer-events: none;
      }
      .fp3d-overlay > * {
        pointer-events: auto;
      }
      /* the view's switches in one "Show" menu that opens upwards */
      .fp3d-show-wrap {
        position: relative;
        display: inline-flex;
      }
      .fp3d-show-veil {
        position: fixed;
        inset: 0;
        z-index: 29;
      }
      .fp3d-show-panel {
        position: absolute;
        bottom: calc(100% + 8px);
        left: 50%;
        transform: translateX(-50%);
        z-index: 30;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        width: min(470px, 92vw);
        padding: 10px;
        border-radius: 16px;
        background: var(--fp3d-chrome-solid, #0d1628);
        border: 1px solid var(--fp3d-line, rgba(120, 190, 255, 0.22));
        box-shadow: var(--fp3d-shadow);
      }
      .fp3d-show-panel > .fp3d-seg {
        flex-wrap: wrap;
      }
      .fp3d-show-panel > .fp3d-chip {
        box-shadow: none;
      }
      .fp3d-caret {
        font-size: 0.8em;
        opacity: 0.7;
      }
      .fp3d-quality button {
        padding: 5px 11px;
        min-height: 30px;
        font-size: 13px;
      }
      .fp3d-message,
      .fp3d-empty {
        padding: 32px 20px;
        color: var(--fp3d-muted);
        text-align: center;
      }
      .fp3d-phone-only {
        display: none;
      }
      @media (max-width: 600px) {
        .fp3d-phone-only {
          display: block;
        }
      }
      .fp3d-empty {
        display: grid;
        justify-items: center;
        gap: 12px;
        margin: auto;
      }
    `]};customElements.get("neonplan3d-panel")||customElements.define("neonplan3d-panel",Fr);function ro(o,e,t=new Date){if(!o||o==="off")return!1;if(o==="sun")return e?.states["sun.sun"]?.state==="below_horizon";let n=/^(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})$/.exec(o.trim());if(!n)return!1;let i=Number(n[1])*60+Number(n[2]),r=Number(n[3])*60+Number(n[4]),s=t.getHours()*60+t.getMinutes();return i<=r?s>=i&&s<r:s>=i||s<r}var $l;function Ml(){let o=new URL("./neonplan3d-card-editor.js?v=3053ee4eb1ed",new URL(import.meta.url)).href;return $l??=import(o),$l}function Pl(){try{let o=localStorage.getItem("neonplan3d.card_walls");return o==="auto"||o==="cut"?o:null}catch{return null}}var Dr=class extends ue{static properties={hass:{attribute:!1},_config:{state:!0},_roomId:{state:!0},_floorId:{state:!0},_walls:{state:!0},_heat:{state:!0},_explode:{state:!0},_fullscreen:{state:!0},_vh:{state:!0},_top:{state:!0},_cameraWall:{state:!0},_clean:{state:!0},_night:{state:!0},_orbit:{state:!0}};roomApplied=!1;cleanTimer;idleTimer;nightTimer;data=new vt(this);tt=new Wt(this);constructor(){super(),this._roomId=null,this._floorId=void 0,this._walls=Pl(),this._heat=null,this._explode=null,this._fullscreen=!1,this._vh=window.innerHeight,this._top=null,this._cameraWall=!1,this._clean=!1,this._night=!1,this._orbit=!1}touch=()=>{this._orbit&&(this._orbit=!1),this.armIdle(),this.armClean(!0)};armClean(e=!1){clearTimeout(this.cleanTimer);let t=this._config?.controls_hide_after??0;t>0&&(e&&this._clean&&(this._clean=!1),this.cleanTimer=setTimeout(()=>this._clean=!0,t*1e3))}armIdle(){clearTimeout(this.idleTimer);let e=this._config?.idle_return??0;e>0&&(this.idleTimer=setTimeout(()=>this.returnHome(),e*1e3))}view3d(){return this.shadowRoot?.querySelector("fp3d-view3d")}toggleTimeTravel(){if(this.tt.active){this.tt.stop();return}let e=this.view3d(),t=this.data.building;if(!e||!t||!this.hass)return;if(!L("time_travel")){e.proHint("time_travel");return}this._cameraWall=!1;let n=this._config;this.tt.start({live:this.hass,building:t,spec:e.historyEntities(),quality:n?.quality??"auto",speed:n?.time_travel_speed??null,range:n?.time_travel_range??null,t:(i,r)=>T(this.hass,i,r)})}onKey=e=>{e.key==="Escape"&&this.tt.stop(),this.touch()};returnHome(){if(this.tt.session?.playing){this.armIdle();return}this.tt.stop(),this._roomId=this._config?.room??null,this._floorId=void 0,this.view3d()?.resetView(),this._config?.idle_orbit&&(this._orbit=!0)}openDashboard(e){history.pushState(null,"",e),window.dispatchEvent(new CustomEvent("location-changed",{bubbles:!0,composed:!0,detail:{replace:!1}}))}onFullscreen=()=>{this._fullscreen=!!document.fullscreenElement&&this.shadowRoot?.contains(document.fullscreenElement)===!0,requestAnimationFrame(this.onViewport)};onViewport=()=>{let e=Math.round(window.visualViewport?.height??window.innerHeight);if(Math.abs(e-this._vh)>1&&(this._vh=e),this._config?.fill&&!this._fullscreen){let t=Math.round(this.getBoundingClientRect().top+window.scrollY);(this._top===null||Math.abs(t-this._top)>1)&&(this._top=t)}};connectedCallback(){super.connectedCallback(),Qe("card"),document.addEventListener("fullscreenchange",this.onFullscreen),window.addEventListener("resize",this.onViewport),window.visualViewport?.addEventListener("resize",this.onViewport),requestAnimationFrame(this.onViewport),setTimeout(this.onViewport,600),this.armIdle(),this.nightTimer=setInterval(()=>this._night=ro(this._config?.night,this.hass),6e4)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this.onFullscreen),window.removeEventListener("resize",this.onViewport),window.visualViewport?.removeEventListener("resize",this.onViewport),this.tt.stop(),clearTimeout(this.cleanTimer),clearTimeout(this.idleTimer),clearInterval(this.nightTimer)}toggleFullscreen(){document.fullscreenElement?document.exitFullscreen():this.shadowRoot?.querySelector("ha-card")?.requestFullscreen?.()}static async getConfigElement(){return await Ml(),document.createElement("neonplan3d-card-editor")}static getStubConfig(){return{type:"custom:neonplan3d-card"}}setWalls(e){this._walls=e;try{localStorage.setItem("neonplan3d.card_walls",e)}catch{}}setConfig(e){if(e.height!==void 0&&!(e.height>100))throw new Error("height must be a number of pixels above 100");this._config=e,this._floorId=void 0,this._walls=Pl(),this._heat=null,this._explode=null,this._orbit=!1,this._night=ro(e.night,this.hass),this._clean=e.controls_hidden===!0,this.armClean(),this.armIdle()}getCardSize(){return Math.ceil((this._config?.height??420)/50)}getGridOptions(){return{columns:"full",rows:this._config?.fill?12:Math.ceil((this._config?.height??420)/56),min_rows:4}}willUpdate(e){if(e.has("hass")&&this.hass){this.data.setHass(this.hass),this.tt.session?.setLive(this.hass),St(this.hass.language)||Wn(this.hass.language).then(()=>this.requestUpdate());let t=ro(this._config?.night,this.hass);t!==this._night&&(this._night=t)}}get canSwitch(){return!this._config?.floor||this.thumbs}get thumbs(){return this._config?.floor_thumbs??!this._config?.floor}back(){this._roomId?this._roomId=null:this.canSwitch&&(this._floorId=null)}render(){if(this.hass&&!St(this.hass.language))return x;let e=this.data.building,t=this._config?.height??420,n=this._config;!this.roomApplied&&e&&n?.room&&(this.roomApplied=!0,e.floors.some(_=>_.rooms.some(b=>b.id===n.room))&&(this._roomId=n.room));let i=this._floorId===void 0?n?.floor??null:this._floorId,r=e&&e.floors.length===1?e.floors[0].id:e?.floors.some(_=>_.id===i)?i:null,s=!!this._roomId&&n?.room_panel===!1||!this.thumbs&&this.canSwitch&&!this._roomId&&!!r&&(e?.floors.length??0)>1,a=_=>n?.controls===!0||Array.isArray(n?.controls)&&n.controls.includes(_),l=["temperature","humidity","co2"].filter(_=>a(_)),d=this._walls??n?.walls??"auto",c=this._heat??n?.heatmap??"none",u=this._explode??n?.explode??!0,h=this._fullscreen?"100%":n?.fill?this._top!==null?`${Math.max(240,this._vh-this._top-2)}px`:"calc(100vh - var(--header-height, 56px) - 2px)":`${t}px`,f=!!e&&!this._clean&&(s||(!!n?.controls||!!n?.time_travel)&&!(this._roomId&&n.room_panel!==!1)),p=this.tt.active,g=n?.controls_hidden!==void 0||(n?.controls_hide_after??0)>0,m=_=>T(this.hass,_),y=/^#[0-9a-f]{6}$/i.test(n?.accent??"")?n.accent:null;return w`<ha-card class=${this._night?"fp3d-night":""} style=${y?`--fp3d-accent:${y}`:""} @pointerdown=${this.touch} @keydown=${this.onKey} @wheel=${this.touch}>
      <div class="fp3d-card-body ${p?"fp3d-tt":""}" style="height:${h}">
        ${e&&e.floors.some(_=>_.rooms.length)?w`<fp3d-view3d
              .hass=${this.tt.hass(this.hass)}
              .replay=${this.tt.session?.replay??null}
              .building=${e}
              .packs=${this.data.packs}
              .floorId=${r}
              .roomId=${this._roomId}
              .wallMode=${d}
              .explode=${u}
              .keepRoof=${n?.roof_fade===!1}
              .quality=${this._config?.quality??"auto"}
              ?showStats=${this._config?.stats??!1}
              .markerMode=${this._config?.markers??"important"}
              .markerNames=${this._config?.marker_names===!0}
              .central=${this._config?.central!==!1}
              .walkable=${this._config?.walk!==!1}
              .petsOn=${this._config?.pets!==!1}
              .ghostOn=${this._config?.ghost!==!1}
              .buttons=${this._config?.buttons?.map((_,b)=>({id:`card_${b}`,..._}))??null}
              .heatMode=${c}
              .theme=${this._config?.theme??"neon"}
              .accent=${this._config?.accent??null}
              .showEnergy=${this._config?.energy??!0}
              .flows=${this._config?.flows??null}
              .holograms=${this._config?.holograms??null}
              .floorThumbs=${this.thumbs}
              .roomLabels=${n?.room_names!==!1}
              .controlsRight=${n?.controls_side==="right"}
              .keepView=${n?.keep_view===!0}
              .floorStack=${n?.floor_stack??"dim"}
              .panelOpen=${!!this._roomId&&n?.room_panel!==!1}
              .alerts=${n?.alerts!==!1}
              .alertJump=${!!n?.alert_jump}
              .scenes=${n?.scenes!==!1}
              ?trail=${!!n?.motion_trail}
              .cameraWall=${this._cameraWall&&!p}
              @camera-wall-close=${()=>this._cameraWall=!1}
              @camera-wall-open=${()=>this._cameraWall=!0}
              .clean=${this._clean}
              .cleanButton=${g}
              @clean-toggle=${()=>{this._clean=!this._clean,this._clean?clearTimeout(this.cleanTimer):this.armClean()}}
              .weather=${n?.weather!==!1}
              .weatherEntityId=${n?.weather_entity??null}
              .dimmed=${this._night}
              .autoOrbit=${this._orbit}
              .startView=${n?.start_view??null}
              style=${p?`--fp3d-bottom-inset: ${f?"calc(52px + var(--fp3d-tt-h))":"var(--fp3d-tt-h)"}`:f?"--fp3d-bottom-inset: 52px":""}
              @room-tap=${_=>{if(this.canSwitch&&(e?.floors.length??0)>1&&_.detail.floorId&&r!==_.detail.floorId){this._floorId=_.detail.floorId,this._roomId=null;return}_.detail.roomId&&(this._roomId=_.detail.roomId===this._roomId?null:_.detail.roomId)}}
              @floor-tap=${_=>{this._floorId=_.detail.floorId,this._roomId=null}}
              @back=${()=>this.back()}
            ></fp3d-view3d>`:w`<p class="fp3d-card-msg">${this.data.error??(e?T(this.hass,"no_building"):T(this.hass,"loading"))}</p>`}
        ${this._roomId&&e&&this._config?.room_panel!==!1?w`<fp3d-room-panel
              @camera-look=${_=>this.view3d()?.lookThrough(_.detail.entity)}
              class="fp3d-card-panel"
              .hass=${this.tt.hass(this.hass)}
              ?readOnly=${p}
              .room=${e.floors.flatMap(_=>_.rooms).find(_=>_.id===this._roomId)??null}
              .floor=${e.floors.find(_=>_.rooms.some(b=>b.id===this._roomId))??null}
              .building=${e}
              .confirmEntities=${xt(this.hass,e.floors)}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:x}
        ${f&&e?w`<div class="fp3d-card-controls">
              ${s?w`<button class="fp3d-chip" @click=${()=>this.back()}>${m("back")}</button>`:x}
              ${n?.time_travel?w`<button class="fp3d-chip fp3d-tt-chip" aria-pressed=${p} title=${m("tt_hint")} @click=${()=>this.toggleTimeTravel()}>
                    ${L("time_travel")?"\u23EA":"\u{1F512}"} ${m("tt_chip")}
                  </button>`:x}
              ${n?.camera_wall?w`<button class="fp3d-chip" aria-pressed=${this._cameraWall} title=${m("camera_wall_hint")} @click=${()=>this._cameraWall=!this._cameraWall}>${m("cameras_short")}</button>`:x}
              ${a("walls")?w`<div class="fp3d-seg">
                    <button aria-pressed=${d==="auto"} @click=${()=>this.setWalls("auto")}>${m("walls_auto")}</button>
                    <button aria-pressed=${d==="cut"} @click=${()=>this.setWalls("cut")}>${m("walls_cut")}</button>
                  </div>`:x}
              ${a("floors")&&e.floors.length>1&&!r?w`<div class="fp3d-seg">
                    <button aria-pressed=${u} @click=${()=>this._explode=!0}>${m("floors_apart")}</button>
                    <button aria-pressed=${!u} @click=${()=>this._explode=!1}>${m("floors_stacked")}</button>
                  </div>`:x}
              ${l.length?w`<div class="fp3d-seg" role="group" aria-label=${m("heatmap")}>
                    ${["none",...l].map(_=>w`<button aria-pressed=${c===_} @click=${()=>this._heat=_}>
                          ${m(_==="none"?"heat_off":`heat_short_${_}`)}
                        </button>`)}
                  </div>`:x}
            </div>`:x}
        ${this.tt.session?w`<fp3d-time-bar .session=${this.tt.session}></fp3d-time-bar>`:x}
        ${n?.fullscreen_button&&!this._clean&&!(this._roomId&&n.room_panel!==!1)?w`<button class="fp3d-card-full" title=${m(this._fullscreen?"fullscreen_exit":"fullscreen")} aria-label=${m(this._fullscreen?"fullscreen_exit":"fullscreen")} @click=${()=>this.toggleFullscreen()}>
              ${this._fullscreen?"\u2715":"\u26F6"}
            </button>`:x}
        ${n?.dashboard&&!this._clean&&!(this._roomId&&n.room_panel!==!1)?w`<button class="fp3d-card-full fp3d-card-dash ${n.fullscreen_button?"fp3d-card-dash-2":""}" title=${n.dashboard_label||n.dashboard} aria-label=${n.dashboard_label||n.dashboard} @click=${()=>this.openDashboard(n.dashboard)}>
              ${n.dashboard_label?w`<span>${n.dashboard_label}</span>`:"\u2302"}
            </button>`:x}
      </div>
    </ha-card>`}static styles=[Ae,Ue,me`
      .fp3d-card-controls {
        position: absolute;
        left: 60px;
        right: 10px;
        bottom: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        pointer-events: none;
      }
      .fp3d-card-controls > * {
        pointer-events: auto;
      }
      /* time travel: its bar at the bottom, the switches and the room panel above it */
      .fp3d-tt > * {
        --fp3d-tt-h: 64px;
      }
      .fp3d-tt .fp3d-card-controls {
        bottom: calc(var(--fp3d-tt-h) + 2px);
      }
      .fp3d-tt .fp3d-card-panel {
        bottom: calc(var(--fp3d-tt-h) + 4px);
      }
      .fp3d-tt-chip[aria-pressed="true"] {
        background: #ffb020;
        color: #1a1200;
      }
      .fp3d-card-dash {
        width: auto;
        min-width: 38px;
        padding: 0 12px;
        font-size: 14px;
        font-weight: 600;
      }
      .fp3d-card-dash-2 {
        right: 56px;
      }
      /* the view's walk button steps aside for the card's own buttons at the top right */
      fp3d-view3d {
        --fp3d-walk-right: 104px;
      }
      .fp3d-card-full {
        position: absolute;
        right: 10px;
        top: 10px;
        width: 38px;
        height: 38px;
        border: 0;
        border-radius: 12px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        font-size: 18px;
        cursor: pointer;
      }
      ha-card {
        overflow: hidden;
        background: var(--fp3d-bg);
        height: 100%;
      }
      ha-card:fullscreen {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        border-radius: 0;
        border: 0;
      }
      ha-card:fullscreen .fp3d-card-body {
        flex: 1 1 auto;
        min-height: 0;
      }
      /* night (kiosk): the whole card dimmed */
      ha-card.fp3d-night .fp3d-card-body {
        filter: brightness(0.55);
      }
      .fp3d-card-body {
        position: relative;
        display: flex;
        height: 100%;
        container-type: size;
        container-name: fp3d;
      }
      fp3d-view3d {
        flex: 1;
      }
      .fp3d-card-msg {
        margin: auto;
        color: var(--fp3d-muted);
        padding: 16px;
        text-align: center;
      }
      .fp3d-card-panel {
        position: absolute;
        top: 10px;
        right: 10px;
        bottom: 10px;
        width: min(340px, calc(100% - 20px));
        display: flex;
        flex-direction: column;
        pointer-events: none;
      }
      /* phones and portrait tablets: the room panel becomes a sheet at the bottom */
      @container fp3d ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .fp3d-card-panel {
          top: auto;
          left: 8px;
          right: 8px;
          bottom: 8px;
          width: auto;
          height: 55%;
          justify-content: flex-end;
        }
        /* the time bar takes two rows here */
        .fp3d-tt > * {
          --fp3d-tt-h: 100px;
        }
      }
    `]};if(!customElements.get("neonplan3d-card")){customElements.define("neonplan3d-card",Dr);let o=window;o.customCards=o.customCards??[],o.customCards.push({type:"neonplan3d-card",name:T(void 0,"card_name"),description:T(void 0,"card_description"),preview:!1})}Qr();
