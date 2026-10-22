var ee=globalThis,te=ee.ShadowRoot&&(ee.ShadyCSS===void 0||ee.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ie=Symbol(),Ae=new WeakMap,j=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==ie)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(te&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Ae.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Ae.set(t,e))}return e}toString(){return this.cssText}},Re=i=>new j(typeof i=="string"?i:i+"",void 0,ie),se=(i,...e)=>{let t=i.length===1?i[0]:e.reduce((n,r,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[o+1],i[0]);return new j(t,i,ie)},Pe=(i,e)=>{if(te)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),r=ee.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,i.appendChild(n)}},le=te?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return Re(t)})(i):i;var{is:ot,defineProperty:it,getOwnPropertyDescriptor:st,getOwnPropertyNames:lt,getOwnPropertySymbols:at,getPrototypeOf:ct}=Object,ne=globalThis,Me=ne.trustedTypes,ut=Me?Me.emptyScript:"",pt=ne.reactiveElementPolyfillSupport,G=(i,e)=>i,ae={toAttribute(i,e){switch(e){case Boolean:i=i?ut:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Le=(i,e)=>!ot(i,e),Oe={attribute:!0,type:String,converter:ae,reflect:!1,useDefault:!1,hasChanged:Le};Symbol.metadata??=Symbol("metadata"),ne.litPropertyMetadata??=new WeakMap;var P=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Oe){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&it(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:o}=st(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:r,set(s){let p=r?.call(this);o?.call(this,s),this.requestUpdate(e,p,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Oe}static _$Ei(){if(this.hasOwnProperty(G("elementProperties")))return;let e=ct(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(G("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(G("properties"))){let t=this.properties,n=[...lt(t),...at(t)];for(let r of n)this.createProperty(r,t[r])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,r]of t)this.elementProperties.set(n,r)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let r=this._$Eu(t,n);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let r of n)t.unshift(le(r))}else e!==void 0&&t.push(le(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Pe(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&n.reflect===!0){let o=(n.converter?.toAttribute!==void 0?n.converter:ae).toAttribute(t,n.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let o=n.getPropertyOptions(r),s=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:ae;this._$Em=r;let p=s.fromAttribute(t,o.type);this[r]=p??this._$Ej?.get(r)??p,this._$Em=null}}requestUpdate(e,t,n,r=!1,o){if(e!==void 0){let s=this.constructor;if(r===!1&&(o=this[e]),n??=s.getPropertyOptions(e),!((n.hasChanged??Le)(o,t)||n.useDefault&&n.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:o},s){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),o!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[r,o]of n){let{wrapped:s}=o,p=this[r];s!==!0||this._$AL.has(r)||p===void 0||this.C(r,void 0,o,p)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};P.elementStyles=[],P.shadowRootOptions={mode:"open"},P[G("elementProperties")]=new Map,P[G("finalized")]=new Map,pt?.({ReactiveElement:P}),(ne.reactiveElementVersions??=[]).push("2.1.2");var ge=globalThis,Te=i=>i,re=ge.trustedTypes,Ce=re?re.createPolicy("lit-html",{createHTML:i=>i}):void 0,De="$lit$",L=`lit$${Math.random().toFixed(9).slice(2)}$`,We="?"+L,ht=`<${We}>`,N=document,Y=()=>N.createComment(""),K=i=>i===null||typeof i!="object"&&typeof i!="function",fe=Array.isArray,dt=i=>fe(i)||typeof i?.[Symbol.iterator]=="function",ce=`[ 	
\f\r]`,q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ze=/-->/g,Fe=/>/g,V=RegExp(`>|${ce}(?:([^\\s"'>=/]+)(${ce}*=${ce}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ve=/'/g,He=/"/g,Ie=/^(?:script|style|textarea|title)$/i,be=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),f=be(1),Tt=be(2),Ct=be(3),D=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),Ne=new WeakMap,H=N.createTreeWalker(N,129);function Ue(i,e){if(!fe(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ce!==void 0?Ce.createHTML(e):e}var mt=(i,e)=>{let t=i.length-1,n=[],r,o=e===2?"<svg>":e===3?"<math>":"",s=q;for(let p=0;p<t;p++){let c=i[p],a,h,g=-1,y=0;for(;y<c.length&&(s.lastIndex=y,h=s.exec(c),h!==null);)y=s.lastIndex,s===q?h[1]==="!--"?s=ze:h[1]!==void 0?s=Fe:h[2]!==void 0?(Ie.test(h[2])&&(r=RegExp("</"+h[2],"g")),s=V):h[3]!==void 0&&(s=V):s===V?h[0]===">"?(s=r??q,g=-1):h[1]===void 0?g=-2:(g=s.lastIndex-h[2].length,a=h[1],s=h[3]===void 0?V:h[3]==='"'?He:Ve):s===He||s===Ve?s=V:s===ze||s===Fe?s=q:(s=V,r=void 0);let w=s===V&&i[p+1].startsWith("/>")?" ":"";o+=s===q?c+ht:g>=0?(n.push(a),c.slice(0,g)+De+c.slice(g)+L+w):c+L+(g===-2?p:w)}return[Ue(i,o+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},Z=class i{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let o=0,s=0,p=e.length-1,c=this.parts,[a,h]=mt(e,t);if(this.el=i.createElement(a,n),H.currentNode=this.el.content,t===2||t===3){let g=this.el.content.firstChild;g.replaceWith(...g.childNodes)}for(;(r=H.nextNode())!==null&&c.length<p;){if(r.nodeType===1){if(r.hasAttributes())for(let g of r.getAttributeNames())if(g.endsWith(De)){let y=h[s++],w=r.getAttribute(g).split(L),k=/([.?@])?(.*)/.exec(y);c.push({type:1,index:o,name:k[2],strings:w,ctor:k[1]==="."?pe:k[1]==="?"?he:k[1]==="@"?de:I}),r.removeAttribute(g)}else g.startsWith(L)&&(c.push({type:6,index:o}),r.removeAttribute(g));if(Ie.test(r.tagName)){let g=r.textContent.split(L),y=g.length-1;if(y>0){r.textContent=re?re.emptyScript:"";for(let w=0;w<y;w++)r.append(g[w],Y()),H.nextNode(),c.push({type:2,index:++o});r.append(g[y],Y())}}}else if(r.nodeType===8)if(r.data===We)c.push({type:2,index:o});else{let g=-1;for(;(g=r.data.indexOf(L,g+1))!==-1;)c.push({type:7,index:o}),g+=L.length-1}o++}}static createElement(e,t){let n=N.createElement("template");return n.innerHTML=e,n}};function W(i,e,t=i,n){if(e===D)return e;let r=n!==void 0?t._$Co?.[n]:t._$Cl,o=K(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),o===void 0?r=void 0:(r=new o(i),r._$AT(i,t,n)),n!==void 0?(t._$Co??=[])[n]=r:t._$Cl=r),r!==void 0&&(e=W(i,r._$AS(i,e.values),r,n)),e}var ue=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??N).importNode(t,!0);H.currentNode=r;let o=H.nextNode(),s=0,p=0,c=n[0];for(;c!==void 0;){if(s===c.index){let a;c.type===2?a=new J(o,o.nextSibling,this,e):c.type===1?a=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(a=new me(o,this,e)),this._$AV.push(a),c=n[++p]}s!==c?.index&&(o=H.nextNode(),s++)}return H.currentNode=N,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},J=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=W(this,e,t),K(e)?e===_||e==null||e===""?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==D&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):dt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==_&&K(this._$AH)?this._$AA.nextSibling.data=e:this.T(N.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Z.createElement(Ue(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let o=new ue(r,this),s=o.u(this.options);o.p(t),this.T(s),this._$AH=o}}_$AC(e){let t=Ne.get(e.strings);return t===void 0&&Ne.set(e.strings,t=new Z(e)),t}k(e){fe(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,r=0;for(let o of e)r===t.length?t.push(n=new i(this.O(Y()),this.O(Y()),this,this.options)):n=t[r],n._$AI(o),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=Te(e).nextSibling;Te(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},I=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,o){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=_}_$AI(e,t=this,n,r){let o=this.strings,s=!1;if(o===void 0)e=W(this,e,t,0),s=!K(e)||e!==this._$AH&&e!==D,s&&(this._$AH=e);else{let p=e,c,a;for(e=o[0],c=0;c<o.length-1;c++)a=W(this,p[n+c],t,c),a===D&&(a=this._$AH[c]),s||=!K(a)||a!==this._$AH[c],a===_?e=_:e!==_&&(e+=(a??"")+o[c+1]),this._$AH[c]=a}s&&!r&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},pe=class extends I{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}},he=class extends I{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_)}},de=class extends I{constructor(e,t,n,r,o){super(e,t,n,r,o),this.type=5}_$AI(e,t=this){if((e=W(this,e,t,0)??_)===D)return;let n=this._$AH,r=e===_&&n!==_||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==_&&(n===_||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},me=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){W(this,e)}};var gt=ge.litHtmlPolyfillSupport;gt?.(Z,J),(ge.litHtmlVersions??=[]).push("3.3.3");var Be=(i,e,t)=>{let n=t?.renderBefore??e,r=n._$litPart$;if(r===void 0){let o=t?.renderBefore??null;n._$litPart$=r=new J(e.insertBefore(Y(),o),o,void 0,t??{})}return r._$AI(i),r};var _e=globalThis,T=class extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Be(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return D}};T._$litElement$=!0,T.finalized=!0,_e.litElementHydrateSupport?.({LitElement:T});var ft=_e.litElementPolyfillSupport;ft?.({LitElement:T});(_e.litElementVersions??=[]).push("4.2.2");var _t={type:"none",pitch:35,overhang:.4},on={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{..._t}};var yt=new Set(["lamp_ceiling","lamp_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]);var bt=new Set([...yt,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);function ye(i){let e=0;for(let t=0;t<i.length;t++){let[n,r]=i[t],[o,s]=i[(t+1)%i.length];e+=n*s-o*r}return e/2}function oe(i,e){let t=!1;for(let n=0,r=e.length-1;n<e.length;r=n++){let[o,s]=e[n],[p,c]=e[r];s>i[1]!=c>i[1]&&i[0]<(p-o)*(i[1]-s)/(c-s)+o&&(t=!t)}return t}var v=(i,e)=>[i[0]-e[0],i[1]-e[1]],C=(i,e)=>[i[0]+e[0],i[1]+e[1]],M=(i,e)=>[i[0]*e,i[1]*e],Q=(i,e)=>i[0]*e[0]+i[1]*e[1],U=(i,e)=>i[0]*e[1]-i[1]*e[0],X=i=>Math.hypot(i[0],i[1]),E=i=>{let e=X(i)||1;return[i[0]/e,i[1]/e]},je=i=>[-i[1],i[0]],Ge=i=>[i[1],-i[0]];function Ye(i,e,t=[]){let n=e.eps??.005,r=[],o=t.filter(l=>Math.hypot(l.b[0]-l.a[0],l.b[1]-l.a[1])>.05),s=[],p=l=>{for(let u=0;u<s.length;u++)if(Math.abs(s[u][0]-l[0])<=n&&Math.abs(s[u][1]-l[1])<=n)return u;return s.push([l[0],l[1]]),s.length-1},c=[];for(let l of i){let u=l.points;if(u.length<3||Math.abs(ye(u))<1e-6)continue;let d=ye(u)>0,m=u.map(p);for(let b=0;b<u.length;b++){let x=m[b],$=m[(b+1)%u.length];x!==$&&c.push(d?{u:x,v:$,room:l.id,edge:b,forward:!0}:{u:$,v:x,room:l.id,edge:b,forward:!1})}}let a=o.map(l=>[p(l.a),p(l.b)]),h=new Set;for(let l of i){let u=l.points;u.length<3||(l.wall_splits??[]).forEach((d,m)=>{if(!d||m>=u.length)return;let b=u[m],x=v(u[(m+1)%u.length],b),$=X(x);for(let R of d)R>n&&R<$-n&&h.add(p(C(b,M(x,R/$))))})}let g=[];for(let l of c){let u=s[l.u],d=s[l.v],m=v(d,u),b=X(m),x=M(m,1/b),$=[];for(let S=0;S<s.length;S++){if(S===l.u||S===l.v)continue;let O=v(s[S],u),F=Q(O,x);F<=n||F>=b-n||Math.abs(U(x,O))<=n&&$.push({t:F,id:S})}$.sort((S,O)=>S.t-O.t);let R=[{t:0,id:l.u},...$,{t:b,id:l.v}];for(let S=0;S+1<R.length;S++){let O=R[S],F=R[S+1],nt=l.forward?O.t:b-F.t,rt=l.forward?F.t:b-O.t;g.push({u:O.id,v:F.id,room:l.room,edge:l.edge,t0:nt,t1:rt})}}let y=new Map;for(let l of g){let u=l.u<l.v?`${l.u}-${l.v}`:`${l.v}-${l.u}`,d=y.get(u);d||y.set(u,d=[]),d.push(l)}let w=l=>({room_id:l.room,edge:l.edge,t0:l.t0,t1:l.t1}),k=new Map;for(let l of g){let u=`${l.room}:${l.edge}`;k.set(u,[...k.get(u)??[],l.t0].sort((d,m)=>d-m))}let z=l=>{let u=i.find(m=>m.id===l.room)?.wall_heights?.[l.edge];if(!Array.isArray(u))return u;let d=k.get(`${l.room}:${l.edge}`)??[];return u[d.indexOf(l.t0)]??null},B=l=>{let u=l.map(z).filter(m=>typeof m=="number"&&m>0);if(u.length)return Math.min(...u);let d=l.map(m=>i.find(b=>b.id===m.room)?.ceiling_height);return d.every(m=>typeof m=="number"&&m>0)?Math.max(...d):void 0},we=l=>{let u=l.map(d=>i.find(m=>m.id===d.room)?.wall_thickness?.[d.edge]).filter(d=>typeof d=="number"&&d>0);return u.length?Math.max(...u):void 0},et=l=>{for(let u of l){let d=i.find($=>$.id===u.room),m=d?.wall_slopes?.[u.edge];if(!d||!m)continue;let b=d.points[u.edge],x=d.points[(u.edge+1)%d.points.length];return{p:[b[0],b[1]],q:[x[0],x[1]],h0:Math.max(.05,m[0]),h1:Math.max(.05,m[1])}}},tt=l=>l.some(u=>z(u)===0),$e=l=>{let u=et(l);return u?{height:Math.max(u.h0,u.h1),slope:u}:{height:B(l)}},Se=[],A=[];for(let l of y.values()){let u=l[0],d=l.find(m=>m!==u&&m.u===u.v&&m.v===u.u&&m.room!==u.room);for(let m of l)m!==u&&m!==d&&m.room!==u.room&&r.push(`overlap:${u.room}:${m.room}`);if(tt(d?[u,d]:[u])){d&&Se.push([u.room,d.room]);continue}if(d){let m=we([u,d])??e.interior;A.push({a:u.u,b:u.v,left:m/2,right:m/2,exterior:!1,roomLeft:u.room,roomRight:d.room,sources:[w(u),w(d)],...$e([u,d])})}else A.push({a:u.u,b:u.v,left:0,right:we([u])??e.exterior,exterior:!0,roomLeft:u.room,roomRight:null,sources:[w(u)],...$e([u])})}let ke=l=>E(v(s[l.b],s[l.a]));for(let l of A){if(l.exterior||l.free)continue;let u=new Set;for(let m of[l.a,l.b])for(let b of A)!b.exterior||b.free||b.a!==m&&b.b!==m||Math.abs(U(ke(l),ke(b)))>1e-6||(b.roomLeft===l.roomLeft?u.add("left"):b.roomLeft===l.roomRight&&u.add("right"));if(u.size!==1)continue;let d=l.left+l.right;u.has("left")?(l.left=0,l.right=d):(l.left=d,l.right=0)}o.forEach((l,u)=>{let[d,m]=a[u];if(d===m)return;let b=[(l.a[0]+l.b[0])/2,(l.a[1]+l.b[1])/2],x=i.find(S=>S.points.length>=3&&oe(b,S.points))?.id??null,$=(l.thickness??e.interior)/2,R=typeof l.height=="number"&&l.height>0?l.height:void 0;A.push({free:l.id,a:d,b:m,left:$,right:$,exterior:!1,roomLeft:x,roomRight:x,sources:[],height:R})}),A=vt(A,s,h);let Ee=$t(A,s);return{walls:A.map((l,u)=>{let d=s[l.a],m=s[l.b],b=Ee.get(`${u}:a`),x=Ee.get(`${u}:b`),$=St([b.right,x.left,m,x.right,b.left,d],1e-6);return{id:xt(d,m),a:[d[0],d[1]],b:[m[0],m[1]],left:l.left,right:l.right,exterior:l.exterior,roomLeft:l.roomLeft,roomRight:l.roomRight,sources:l.sources,footprint:$,...l.free?{free:l.free}:{},...l.height!==void 0?{height:l.height}:{},...l.slope?{slope:l.slope}:{}}}),warnings:[...new Set(r)],open:Se}}function xt(i,e){let t=o=>Math.round(o*100),[n,r]=i[0]<e[0]||i[0]===e[0]&&i[1]<=e[1]?[i,e]:[e,i];return`w_${t(n[0])}_${t(n[1])}_${t(r[0])}_${t(r[1])}`}function qe(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function vt(i,e,t=new Set){let n=i.slice(),r=!0;for(;r;){r=!1;let o=new Map;n.forEach((s,p)=>{for(let c of[s.a,s.b]){let a=o.get(c);a||o.set(c,a=[]),a.push(p)}});for(let[s,p]of o){if(p.length!==2||t.has(s))continue;let c=n[p[0]],a=n[p[1]];if(c.b!==s&&(c=qe(c)),a.a!==s&&(a=qe(a)),c.a===a.b)continue;let h=E(v(e[c.b],e[c.a])),g=E(v(e[a.b],e[a.a]));if(Math.abs(U(h,g))>1e-6||Q(h,g)<=0||c.free||a.free||c.height!==a.height||c.slope||a.slope||c.exterior!==a.exterior||c.roomLeft!==a.roomLeft||c.roomRight!==a.roomRight||Math.abs(c.left-a.left)>1e-9||Math.abs(c.right-a.right)>1e-9)continue;let y={...c,b:a.b,sources:wt(c.sources,a.sources)},w=n.filter((k,z)=>z!==p[0]&&z!==p[1]);w.push(y),n.length=0,n.push(...w),r=!0;break}}return n}function wt(i,e){let t=i.map(n=>({...n}));for(let n of e){let r=t.find(o=>o.room_id===n.room_id&&o.edge===n.edge&&(Math.abs(o.t1-n.t0)<1e-6||Math.abs(n.t1-o.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):t.push({...n})}return t}function $t(i,e){let t=new Map;i.forEach((r,o)=>{let s=E(v(e[r.b],e[r.a])),p=[[r.a,{key:`${o}:a`,d:s,left:r.left,right:r.right,angle:Math.atan2(s[1],s[0])}],[r.b,{key:`${o}:b`,d:M(s,-1),left:r.right,right:r.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[c,a]of p){let h=t.get(c);h||t.set(c,h=[]),h.push(a)}});let n=new Map;for(let[r,o]of t){let s=e[r];o.sort((a,h)=>a.angle-h.angle);let p=a=>({left:C(s,M(je(a.d),a.left)),right:C(s,M(Ge(a.d),a.right))});for(let a of o)n.set(a.key,p(a));if(o.length<2)continue;let c=4*Math.max(...o.map(a=>Math.max(a.left,a.right)))+1e-9;for(let a=0;a<o.length;a++){let h=o[a],g=o[(a+1)%o.length],y=C(s,M(je(h.d),h.left)),w=C(s,M(Ge(g.d),g.right)),k=U(h.d,g.d);if(Math.abs(k)<1e-4)continue;let z=U(v(w,y),g.d)/k,B=C(y,M(h.d,z));X(v(B,s))>c||(n.get(h.key).left=B,n.get(g.key).right=B)}}return n}function St(i,e){let t=i.filter((r,o)=>X(v(r,i[(o+1)%i.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let r=0;r<t.length;r++){let o=t[(r+t.length-1)%t.length],s=t[r],p=t[(r+1)%t.length],c=v(s,o),a=v(p,s);if(Math.abs(U(E(c),E(a)))<1e-7&&Q(c,a)>0){t=t.filter((h,g)=>g!==r),n=!0;break}}}return t}function Ke(i,e,t){let n=i.points[e],r=i.points[(e+1)%i.points.length],o=E(v(r,n));return C(n,M(o,t))}function Ze(i,e,t){if(i.wall){let r=t.find(p=>p.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let o=E(v(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,C(r.a,[-o[1],o[0]])]},edge:0}}let n=e.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function Je(i,e,t){if(!e.wall)return kt(i,t.room,t.edge,e.offset);let n=i.find(o=>o.free===e.wall);if(!n)return null;let r=Ke(t.room,0,e.offset);return{wall:n,s:Q(v(r,n.a),E(v(n.b,n.a)))}}function kt(i,e,t,n){for(let r of i){if(!r.sources.find(p=>p.room_id===e.id&&p.edge===t&&n>=p.t0-1e-6&&n<=p.t1+1e-6))continue;let s=Ke(e,t,n);return{wall:r,s:Q(v(s,r.a),E(v(r.b,r.a)))}}return null}function Xe(i){return i.floors.flatMap(e=>e.rooms.map(t=>({id:t.id,name:t.name,floor:e.name,area_id:t.area_id??null})))}function Qe(i){let e=[],t=new Set;for(let n of i.floors){let r=Ye(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]).walls;for(let o of n.openings){if(o.type==="window"&&!(o.sill<.1))continue;let s=Ze(o,n.rooms,n.walls??[]),p=s&&Je(r,o,s),c=p?.wall.roomLeft,a=p?.wall.roomRight;if(!c||!a||c===a)continue;let h=[c,a].sort().join("|");t.has(h)||(t.add(h),e.push([c,a]))}}return e}function xe(i,e,t,n){return i.floors.find(o=>o.id===e)?.rooms.find(o=>oe([t,n],o.points))?.id??null}var Et={title:"Ortung einrichten",lab:"Labor",close:"Schlie\xDFen",s_scanners:"1 \xB7 Empf\xE4nger",s_devices:"2 \xB7 Ger\xE4te",s_walk:"3 \xB7 Einlernen",s_live:"4 \xB7 Live",no_bt:"Home Assistant hat kein Bluetooth eingerichtet. Shelly (Gen2/3: Bluetooth-Scan passiv), ESPHome-Bluetooth-Proxys oder ein USB-Stick gen\xFCgen.",scanners_intro:"Das sind alle Bluetooth-Empf\xE4nger, die Home Assistant kennt. Sag bei jedem, in welchem Raum er steht.",not_placed:"\u2013 Raum w\xE4hlen \u2013",hint_room:"Signal sagt: {room} \u2013 \xFCbernehmen",coverage:"R\xE4ume ohne eigenen Empf\xE4nger \u2013 das Einlernen macht sie trotzdem erkennbar:",devices_intro:"Welche Ger\xE4te sollen geortet werden? Am besten das, was du immer dabei hast \u2013 die Uhr am Handgelenk ist ideal.",known_keys:"iPhone und Apple Watch mit Schl\xFCssel (aus \u201EPrivate BLE Device\u201C in Home Assistant):",add:"Hinzuf\xFCgen",added:"\u2713 dabei",remove:"Entfernen",person:"Person",none:"keine",near_title:"Ger\xE4t in der N\xE4he suchen",near_intro:"Halte das Ger\xE4t direkt an einen Empf\xE4nger. Android: in der Home-Assistant-App \u201EBLE-Sender\u201C einschalten. Schl\xFCsselanh\xE4nger: kurz dr\xFCcken.",near_empty:"Noch nichts Starkes in der N\xE4he \u2026",walk_intro:"Geh in jeden Raum, tippe ihn an und lauf 90 Sekunden langsam herum \u2013 auch in die Ecken. Nimm alle Ger\xE4te mit.",learning:"Lerne {room} \u2026 noch {left} s",stop:"Abbrechen",samples:"{n} Proben",quality:"Trefferquote pr\xFCfen",quality_result:"Trefferquote: {p}",relearn_all:"Alles neu einlernen",live_intro:"So sieht NeonPlan dich gerade. Lauf herum und schau, ob es stimmt.",enabled:"Ortung eingeschaltet",admins_only:"Personen nur f\xFCr Admins zeigen",not_heard:"nicht geh\xF6rt",next:"Weiter",need_device:"Erst ein Ger\xE4t hinzuf\xFCgen."},At={title:"Set up locating",lab:"Lab",close:"Close",s_scanners:"1 \xB7 Scanners",s_devices:"2 \xB7 Devices",s_walk:"3 \xB7 Learn",s_live:"4 \xB7 Live",no_bt:"Home Assistant has no Bluetooth set up. Shelly (Gen2/3: Bluetooth scanning passive), ESPHome Bluetooth proxies or a USB adapter will do.",scanners_intro:"These are all Bluetooth scanners Home Assistant knows. Tell NeonPlan which room each one is in.",not_placed:"\u2013 pick a room \u2013",hint_room:"Signals say: {room} \u2013 use it",coverage:"Rooms without a scanner of their own \u2013 learning makes them recognisable anyway:",devices_intro:"Which devices should be located? Best what you always carry \u2013 a watch on the wrist is ideal.",known_keys:'iPhone and Apple Watch with a key (from "Private BLE Device" in Home Assistant):',add:"Add",added:"\u2713 added",remove:"Remove",person:"Person",none:"none",near_title:"Find a device nearby",near_intro:'Hold the device right next to a scanner. Android: switch on "BLE Transmitter" in the Home Assistant app. Key tags: press once.',near_empty:"Nothing strong nearby yet \u2026",walk_intro:"Go into every room, tap it and walk around slowly for 90 seconds \u2013 into the corners too. Carry all devices.",learning:"Learning {room} \u2026 {left} s left",stop:"Cancel",samples:"{n} samples",quality:"Check accuracy",quality_result:"Accuracy: {p}",relearn_all:"Learn everything anew",live_intro:"This is where NeonPlan sees you now. Walk around and check.",enabled:"Locating on",admins_only:"Show people to admins only",not_heard:"not heard",next:"Next",need_device:"Add a device first."},ve=class extends T{static properties={hass:{attribute:!1},building:{attribute:!1},_step:{state:!0},_cfg:{state:!0},_near:{state:!0},_live:{state:!0},_quality:{state:!0},_error:{state:!0}};constructor(){super(),this._step="scanners",this._cfg=null,this._near=[],this._live=null,this._quality=null,this._error=""}timer=0;unsub=null;get t(){return this.hass?.language?.startsWith("de")?Et:At}tr(e,t){return e.replace(/\{(\w+)\}/g,(n,r)=>String(t[r]??""))}get rooms(){return Xe(this.building)}connectedCallback(){super.connectedCallback(),this.load().catch(e=>this._error=`load: ${e?.stack??String(e)}`),this.timer=window.setInterval(()=>{this.tick()},1e3),this.hass.connection.subscribeMessage(e=>this._live=e,{type:"neonplan3d/locate/subscribe"}).then(e=>this.unsub=e).catch(()=>{})}disconnectedCallback(){super.disconnectedCallback(),window.clearInterval(this.timer),this.unsub?.()}async call(e){try{return this._error="",await this.hass.callWS(e)}catch(t){return this._error=t.message??String(t),null}}async load(){let e=await this.call({type:"neonplan3d/locate/config"});if(!e)return;let t={...e.scanner_rooms},n=!1;for(let r of e.scanners){if(t[r.source])continue;let o=this.guessRoom(r)??e.scanner_hints?.[r.source]??null;o&&(t[r.source]=o,n=!0)}this._cfg={...e,scanner_rooms:t},n&&await this.save({scanner_rooms:t})}guessRoom(e){let t=a=>typeof a=="string"&&!!e.device_id&&this.hass.entities?.[a]?.device_id===e.device_id;if(e.device_id)for(let a of this.building.floors){for(let h of a.placements){let g=t(h.entity_id)?xe(this.building,a.id,h.x,h.z):null;if(g)return g}for(let h of a.furniture){if(!Object.values(h).some(t))continue;let g=xe(this.building,a.id,h.x,h.z);if(g)return g}}let n=e.device_id??Object.values(this.hass.devices??{}).find(a=>[a.name_by_user,a.name].some(h=>h&&h.toLowerCase()===e.name.toLowerCase()))?.id??null,r=n?Object.values(this.hass.entities??{}).filter(a=>a.device_id===n&&a.area_id).map(a=>a.area_id):[],o=e.area_id??(n?this.hass.devices?.[n]?.area_id:null)??r[0]??null;if(o){let a=this.rooms.find(h=>h.area_id===o);if(a)return a.id}let s=a=>a.toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss").replace(/[^a-z0-9]+/g," "),p=` ${s(e.name)} `,c=this.rooms.filter(a=>s(a.name).trim().length>=3&&p.includes(s(a.name).trim()));return c.sort((a,h)=>s(h.name).length-s(a.name).length),c.length&&c.filter(a=>s(a.name)===s(c[0].name)).length===1?c[0].id:null}async save(e){let t=[];try{t=Qe(this.building)}catch(r){console.warn("NeonPlan locate: no door graph",r)}let n=await this.call({type:"neonplan3d/locate/configure",rooms:this.rooms,doors:t,...e});n&&(this._cfg={...n,scanner_rooms:{...n.scanner_rooms}})}async tick(){if(this._step==="devices"){let e=await this.call({type:"neonplan3d/locate/nearby"});e&&(this._near=e.devices)}if(this._step==="walk"){let e=await this.call({type:"neonplan3d/locate/calibrate",action:"status"});e&&this._cfg&&(this._cfg={...this._cfg,samples:e.samples},this._live={...this._live??{running:!0,devices:[]},calibration:e.calibration})}}render(){let e=this.t,t=this._cfg,n=[["scanners",e.s_scanners],["devices",e.s_devices],["walk",e.s_walk],["live",e.s_live]];return f`<div class="box" role="dialog" aria-label=${e.title}>
      <header>
        <b>📡 ${e.title} <small>${e.lab}</small></b>
        <button class="x" @click=${()=>this.remove()} aria-label=${e.close}>✕</button>
      </header>
      <nav>${n.map(([r,o])=>f`<button class=${this._step===r?"on":""} @click=${()=>this._step=r}>${o}</button>`)}</nav>
      ${this._error?f`<pre class="err">${this._error}</pre>`:_}
      ${t?t.bluetooth?this.renderStep(t):f`<p>${e.no_bt}</p>`:f`<p>…</p>`}
    </div>`}renderStep(e){switch(this._step){case"scanners":return this.renderScanners(e);case"devices":return this.renderDevices(e);case"walk":return this.renderWalk(e);default:return this.renderLive(e)}}roomSelect(e,t){let n=[...new Set(this.rooms.map(r=>r.floor))];return f`<select @change=${r=>t(r.target.value||null)}>
      <option value="" ?selected=${!e}>${this.t.not_placed}</option>
      ${n.map(r=>f`<optgroup label=${r}>${this.rooms.filter(o=>o.floor===r).map(o=>f`<option value=${o.id} ?selected=${o.id===e}>${o.name}</option>`)}</optgroup>`)}
    </select>`}renderScanners(e){let t=this.t,n=new Set(Object.values(e.scanner_rooms)),r=this.rooms.filter(o=>!n.has(o.id));return f`<p>${t.scanners_intro}</p>
      <ul class="list">
        ${e.scanners.map(o=>f`<li>
            <span><b>${o.name}</b><small>${o.kind==="shelly"?"Shelly":o.kind==="esphome"?"ESPHome":"Bluetooth"}</small></span>
            ${this.roomSelect(e.scanner_rooms[o.source]??null,s=>{let p={...e.scanner_rooms};s?p[o.source]=s:delete p[o.source],this.save({scanner_rooms:p})})}
            ${e.scanner_hints?.[o.source]&&e.scanner_hints[o.source]!==e.scanner_rooms[o.source]?f`<button class="ghost" @click=${()=>{this.save({scanner_rooms:{...e.scanner_rooms,[o.source]:e.scanner_hints[o.source]}})}}>
                  ${this.tr(t.hint_room,{room:this.rooms.find(s=>s.id===e.scanner_hints[o.source])?.name??""})}
                </button>`:_}
          </li>`)}
      </ul>
      ${r.length?f`<p class="hint">${t.coverage} ${r.map(o=>o.name).join(", ")}</p>`:_}
      <p class="end"><button class="primary" @click=${()=>this._step="devices"}>${t.next} →</button></p>`}personSelect(e,t){let n=Object.keys(this.hass.states).filter(r=>r.startsWith("person."));return f`<select @change=${r=>t(r.target.value||null)}>
      <option value="" ?selected=${!e}>${this.t.person}: ${this.t.none}</option>
      ${n.map(r=>f`<option value=${r} ?selected=${r===e}>${this.hass.states[r].attributes.friendly_name??r}</option>`)}
    </select>`}addDevice(e,t){let n=`${t.kind}_${t.key.replace(/[^a-z0-9]/gi,"").slice(-10).toLowerCase()}`;e.devices.some(r=>r.id===n)||this.save({devices:[...e.devices,{...t,id:n,person:null,icon:null}]})}renderDevices(e){let t=this.t,n=o=>e.devices.some(s=>s.key.toLowerCase()===o.toLowerCase()),r=(o,s)=>{this.save({devices:e.devices.map(p=>p.id===o?{...p,...s}:p)})};return f`<p>${t.devices_intro}</p>
      ${e.devices.length?f`<ul class="list">
            ${e.devices.map(o=>f`<li>
                <input .value=${o.name} @change=${s=>r(o.id,{name:s.target.value})} />
                ${this.personSelect(o.person,s=>r(o.id,{person:s}))}
                <button @click=${()=>{this.save({devices:e.devices.filter(s=>s.id!==o.id)})}}>${t.remove}</button>
              </li>`)}
          </ul>`:_}
      ${e.private_ble.length?f`<p>${t.known_keys}</p>
            <ul class="list">
              ${e.private_ble.map(o=>f`<li>
                  <span>${o.title}</span>
                  ${n(o.key)?f`<small>${t.added}</small>`:f`<button @click=${()=>this.addDevice(e,{name:o.title,kind:"irk",key:o.key})}>${t.add}</button>`}
                </li>`)}
            </ul>`:_}
      <h4>${t.near_title}</h4>
      <p class="hint">${t.near_intro}</p>
      <ul class="list">
        ${this._near.length?this._near.filter(o=>o.ibeacon||!o.random).slice(0,8).map(o=>f`<li>
                  <span><b>${o.name??(o.ibeacon?"iBeacon":o.address)}</b><small>${o.rssi} dBm${o.ibeacon?" \xB7 iBeacon":""}</small></span>
                  ${n(o.ibeacon??o.address)?f`<small>${t.added}</small>`:f`<button @click=${()=>this.addDevice(e,o.ibeacon?{name:o.name??"iBeacon",kind:"ibeacon",key:o.ibeacon}:{name:o.name??o.address,kind:"mac",key:o.address})}>${t.add}</button>`}
                </li>`):f`<li><small>${t.near_empty}</small></li>`}
      </ul>
      <p class="end"><button class="primary" ?disabled=${!e.devices.length} @click=${()=>this._step="walk"}>${t.next} →</button></p>`}renderWalk(e){let t=this.t,n=this._live?.calibration??null;if(!e.devices.length)return f`<p>${t.need_device}</p>`;let r=p=>Math.min(...e.devices.map(c=>e.samples[c.id]?.[p]??0)),o=[...new Set(this.rooms.map(p=>p.floor))],s=this._quality;return f`<p>${t.walk_intro}</p>
      ${n?f`<div class="learning">
            ${this.tr(t.learning,{room:this.rooms.find(p=>p.id===n.room)?.name??"",left:n.left})}
            <div class="bar"><i style="width:${Math.round((90-n.left)/90*100)}%"></i></div>
            <button @click=${()=>{this.call({type:"neonplan3d/locate/calibrate",action:"stop"})}}>${t.stop}</button>
          </div>`:_}
      ${o.map(p=>f`<h4>${p}</h4>
          <div class="rooms">
            ${this.rooms.filter(c=>c.floor===p).map(c=>{let a=r(c.id),h=s?Math.min(...e.devices.map(g=>s[g.id]?.rooms[c.id]??1)):null;return f`<button
                  class=${n?.room===c.id?"on":a>=30?"done":""}
                  ?disabled=${!!n}
                  @click=${async()=>{let g=await this.call({type:"neonplan3d/locate/calibrate",action:"start",room:c.id,seconds:90});g&&(this._live={...this._live??{running:!0,devices:[]},calibration:g.calibration})}}
                >
                  ${a>=30?"\u2713 ":""}${c.name}<small>${this.tr(t.samples,{n:a})}${h!==null?` \xB7 ${Math.round(h*100)} %`:""}</small>
                </button>`})}
          </div>`)}
      <p class="end">
        <button @click=${async()=>this._quality=await this.call({type:"neonplan3d/locate/quality"})}>${t.quality}</button>
        ${s?f`<b>${this.tr(t.quality_result,{p:e.devices.map(p=>`${p.name} ${s[p.id]?.overall!=null?Math.round(s[p.id].overall*100):"\u2013"} %`).join(" \xB7 ")})}</b>`:_}
        <button class="primary" @click=${()=>this._step="live"}>${t.next} →</button>
      </p>
      <p class="end"><button class="ghost" @click=${()=>{this.call({type:"neonplan3d/locate/calibrate",action:"clear"}).then(()=>this.load())}}>${t.relearn_all}</button></p>`}renderLive(e){let t=this.t,n=this._live,r=o=>this.rooms.find(s=>s.id===o)?.name;return f`<p>${t.live_intro}</p>
      <label class="row"><input type="checkbox" .checked=${e.enabled} @change=${o=>{this.save({enabled:o.target.checked})}} /> ${t.enabled}</label>
      <label class="row"><input type="checkbox" .checked=${e.admins_only} @change=${o=>{this.save({admins_only:o.target.checked})}} /> ${t.admins_only}</label>
      <ul class="list big">
        ${(n?.devices??[]).map(o=>f`<li>
            <span><b>${o.name}</b></span>
            <span>${o.room?f`<b class="room">${r(o.room)}</b> <small>${Math.round((o.probability??0)*100)} %</small>`:f`<small>${t.not_heard}</small>`}</span>
          </li>`)}
      </ul>`}static styles=se`
    :host {
      position: fixed;
      inset: 0;
      z-index: 10000;
      display: grid;
      place-items: center;
      background: #02060fcc;
      font: 14px/1.4 system-ui, sans-serif;
      color: #e6f7ff;
    }
    .box {
      width: min(640px, calc(100vw - 16px));
      max-height: calc(100vh - 16px);
      overflow: auto;
      background: #0b1120;
      border: 1px solid #37e0ff66;
      border-radius: 14px;
      padding: 14px;
      box-shadow: 0 10px 40px #000a;
    }
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    header small {
      font-weight: 400;
      color: #ffb86b;
      margin-left: 6px;
    }
    nav {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      margin: 10px 0;
    }
    button,
    select,
    input {
      font: inherit;
      color: #e6f7ff;
      background: #16233d;
      border: 1px solid #37e0ff44;
      border-radius: 8px;
      padding: 7px 10px;
    }
    button {
      cursor: pointer;
    }
    button:disabled {
      opacity: 0.5;
      cursor: default;
    }
    button.on,
    button.primary {
      background: #37e0ff;
      color: #04121c;
      font-weight: 700;
    }
    button.done {
      border-color: #5dd39e;
    }
    button.ghost {
      background: transparent;
    }
    .x {
      background: transparent;
      border: none;
      font-size: 18px;
    }
    .list {
      list-style: none;
      padding: 0;
      margin: 8px 0;
      display: grid;
      gap: 6px;
    }
    .list li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
      background: #101a2e;
      border-radius: 10px;
      padding: 8px 10px;
    }
    .list li span {
      display: flex;
      flex-direction: column;
    }
    .list.big li {
      font-size: 16px;
    }
    small {
      opacity: 0.75;
      font-size: 12px;
    }
    .rooms {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
    .rooms button {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      min-width: 120px;
    }
    .learning {
      background: #13233f;
      border: 1px solid #37e0ff;
      border-radius: 10px;
      padding: 10px;
      margin: 8px 0;
      font-weight: 700;
    }
    .bar {
      height: 8px;
      background: #0b1120;
      border-radius: 4px;
      margin: 8px 0;
      overflow: hidden;
    }
    .bar i {
      display: block;
      height: 100%;
      background: #37e0ff;
    }
    .hint {
      opacity: 0.8;
      font-size: 13px;
    }
    .end {
      display: flex;
      gap: 8px;
      align-items: center;
      justify-content: flex-end;
      flex-wrap: wrap;
    }
    .row {
      display: flex;
      gap: 8px;
      align-items: center;
      margin: 6px 0;
    }
    .room {
      color: #37e0ff;
    }
    .err {
      color: #ff8fa3;
      white-space: pre-wrap;
      font-size: 12px;
    }
    h4 {
      margin: 12px 0 4px;
    }
  `};customElements.get("fp3d-locate-setup")||customElements.define("fp3d-locate-setup",ve);function bn(i,e){document.querySelector("fp3d-locate-setup")?.remove();let t=document.createElement("fp3d-locate-setup");t.hass=i,t.building=e,document.body.append(t)}export{bn as openLocateSetup};
