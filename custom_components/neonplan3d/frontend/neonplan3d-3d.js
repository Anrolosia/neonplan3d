var Kh=0,Cc=1,jh=2;var Rr=1,Qh=2,ks=3,Gn=0,$e=1,he=2,Hn=0,Ti=1,Ce=2,Pc=3,Cr=4,tf=5;var Ki=100,ef=101,nf=102,sf=103,rf=104,of=200,af=201,lf=202,cf=203,Ic=204,Lc=205,uf=206,hf=207,ff=208,df=209,pf=210,mf=211,gf=212,xf=213,bf=214,Yo=0,qo=1,$o=2,Cs=3,Zo=4,Jo=5,Ko=6,jo=7,Fc=0,vf=1,_f=2,Cn=0,Dc=1,Nc=2,Uc=3,Oc=4,Bc=5,kc=6,zc=7;var Vc=300,Ei=301,ji=302,Ea=303,Aa=304,Pr=306,Yi=1e3,pn=1001,Qo=1002,Ge=1003,yf=1004;var Ir=1005;var Xe=1006,Ra=1007;var Ai=1008;var gn=1009,Gc=1010,Hc=1011,zs=1012,Ca=1013,Pn=1014,In=1015,Ln=1016,Pa=1017,Ia=1018,Vs=1020,Wc=35902,Xc=35899,Yc=1021,qc=1022,_n=1023,Bn=1026,Ri=1027,$c=1028,La=1029,Ci=1030,Fa=1031;var Da=1033,Lr=33776,Fr=33777,Dr=33778,Nr=33779,Na=35840,Ua=35841,Oa=35842,Ba=35843,ka=36196,za=37492,Va=37496,Ga=37488,Ha=37489,Ur=37490,Wa=37491,Xa=37808,Ya=37809,qa=37810,$a=37811,Za=37812,Ja=37813,Ka=37814,ja=37815,Qa=37816,tl=37817,el=37818,nl=37819,il=37820,sl=37821,rl=36492,ol=36494,al=36495,ll=36283,cl=36284,Or=36285,ul=36286;var lr=2300,ta=2301,Ho=2302,bc=2303,vc=2400,_c=2401,yc=2402;var Mf=3200;var Zc=0,Sf=1,si="",Ie="srgb",cr="srgb-linear",ur="linear",pe="srgb";var Wo=7680;var wf=519,Tf=512,Ef=513,Af=514,hl=515,Rf=516,Cf=517,fl=518,Pf=519,If=35044,Jc=35048;var Kc="300 es",Rn=2e3,hr=2001;function Gm(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Hm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ps(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lf(){let i=Ps("canvas");return i.style.display="block",i}var _h={},Is=null;function jc(...i){let t="THREE."+i.shift();Is?Is("log",t,...i):console.log(t,...i)}function Ff(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function zt(...i){i=Ff(i);let t="THREE."+i.shift();if(Is)Is("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Gt(...i){i=Ff(i);let t="THREE."+i.shift();if(Is)Is("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Xi(...i){let t=i.join(" ");t in _h||(_h[t]=!0,zt(...i))}function Df(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Nf={[Yo]:qo,[$o]:Ko,[Zo]:jo,[Cs]:Jo,[qo]:Yo,[Ko]:$o,[jo]:Zo,[Jo]:Cs},kn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Zl=Math.PI/180,ea=180/Math.PI;function Br(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function ae(i,t,e){return Math.max(t,Math.min(e,i))}function Wm(i,t){return(i%t+t)%t}function Jl(i,t,e){return(1-e)*i+e*t}function er(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function cn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var iu=class iu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};iu.prototype.isVector2=!0;var te=iu,zn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],f=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(h!==x||l!==f||c!==d||u!==p){let g=l*f+c*d+u*p+h*x;g<0&&(f=-f,d=-d,p=-p,x=-x,g=-g);let m=1-a;if(g<.9995){let v=Math.acos(g),y=Math.sin(v);m=Math.sin(m*v)/y,a=Math.sin(a*v)/y,l=l*m+f*a,c=c*m+d*a,u=u*m+p*a,h=h*m+x*a}else{l=l*m+f*a,c=c*m+d*a,u=u*m+p*a,h=h*m+x*a;let v=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=v,c*=v,u*=v,h*=v}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return t[e]=a*p+u*h+l*d-c*f,t[e+1]=l*p+u*f+c*h-a*d,t[e+2]=c*p+u*d+a*f-l*h,t[e+3]=u*p-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),f=l(n/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"YXZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"ZXY":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"ZYX":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"YZX":this._x=f*u*h+c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h-f*d*p;break;case"XZY":this._x=f*u*h-c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h+f*d*p;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},su=class su{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Kl.copy(this).projectOnVector(t),this.sub(Kl)}reflect(t){return this.sub(Kl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};su.prototype.isVector3=!0;var H=su,Kl=new H,yh=new zn,ru=class ru{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],p=n[8],x=s[0],g=s[3],m=s[6],v=s[1],y=s[4],_=s[7],M=s[2],E=s[5],C=s[8];return r[0]=o*x+a*v+l*M,r[3]=o*g+a*y+l*E,r[6]=o*m+a*_+l*C,r[1]=c*x+u*v+h*M,r[4]=c*g+u*y+h*E,r[7]=c*m+u*_+h*C,r[2]=f*x+d*v+p*M,r[5]=f*g+d*y+p*E,r[8]=f*m+d*_+p*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,p=e*h+n*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=h*x,t[1]=(s*c-u*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(u*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Xi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jl.makeScale(t,e)),this}rotate(t){return Xi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jl.makeRotation(-t)),this}translate(t,e){return Xi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ru.prototype.isMatrix3=!0;var Yt=ru,jl=new Yt,Mh=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sh=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xm(){let i={enabled:!0,workingColorSpace:cr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pe&&(s.r=ti(s.r),s.g=ti(s.g),s.b=ti(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pe&&(s.r=Rs(s.r),s.g=Rs(s.g),s.b=Rs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===si?ur:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Xi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Xi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[cr]:{primaries:t,whitePoint:n,transfer:ur,toXYZ:Mh,fromXYZ:Sh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:n,transfer:pe,toXYZ:Mh,fromXYZ:Sh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),i}var oe=Xm();function ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Rs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ps,na=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ps===void 0&&(ps=Ps("canvas")),ps.width=t.width,ps.height=t.height;let s=ps.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ps}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ps("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ti(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ti(e[n]/255)*255):e[n]=ti(e[n]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ym=0,Ls=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=Br(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ql(s[o].image)):r.push(Ql(s[o]))}else r=Ql(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ql(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?na.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}var qm=0,tc=new H,tn=class i extends kn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=pn,s=pn,r=Xe,o=Ai,a=_n,l=gn,c=i.DEFAULT_ANISOTROPY,u=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=Br(),this.name="",this.source=new Ls(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(tc).x}get height(){return this.source.getSize(tc).y}get depth(){return this.source.getSize(tc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yi:t.x=t.x-Math.floor(t.x);break;case pn:t.x=t.x<0?0:1;break;case Qo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yi:t.y=t.y-Math.floor(t.y);break;case pn:t.y=t.y<0?0:1;break;case Qo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Vc;tn.DEFAULT_ANISOTROPY=1;var ou=class ou{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,_=(d+1)/2,M=(m+1)/2,E=(u+f)/4,C=(h+x)/4,b=(p+g)/4;return y>_&&y>M?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=E/n,r=C/n):_>M?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=b/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=C/r,s=b/r),this.set(n,s,r,e),this}let v=Math.sqrt((g-p)*(g-p)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(h-x)/v,this.z=(f-u)/v,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ou.prototype.isVector4=!0;var Ee=ou,ia=class extends kn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new tn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Xe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ls(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends ia{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},fr=class extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var sa=class extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ta=class Ta{constructor(t,e,n,s,r,o,a,l,c,u,h,f,d,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,h,f,d,p,x,g)}set(t,e,n,s,r,o,a,l,c,u,h,f,d,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ta().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ms.setFromMatrixColumn(t,0).length(),r=1/ms.setFromMatrixColumn(t,1).length(),o=1/ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=o*u,d=o*h,p=a*u,x=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+p*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*u,d=l*h,p=c*u,x=c*h;e[0]=f+x*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-p,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*u,d=l*h,p=c*u,x=c*h;e[0]=f-x*a,e[4]=-o*h,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*u,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*u,d=o*h,p=a*u,x=a*h;e[0]=l*u,e[4]=p*c-d,e[8]=f*c+x,e[1]=l*h,e[5]=x*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,p=a*l,x=a*c;e[0]=l*u,e[4]=x-f*h,e[8]=p*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+p,e[10]=f-x*h}else if(t.order==="XZY"){let f=o*l,d=o*c,p=a*l,x=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+x,e[5]=o*u,e[9]=d*h-p,e[2]=p*h-d,e[6]=a*u,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($m,t,Zm)}lookAt(t,e,n){let s=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),fi.crossVectors(n,fn),fi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),fi.crossVectors(n,fn)),fi.normalize(),bo.crossVectors(fn,fi),s[0]=fi.x,s[4]=bo.x,s[8]=fn.x,s[1]=fi.y,s[5]=bo.y,s[9]=fn.y,s[2]=fi.z,s[6]=bo.z,s[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],p=n[2],x=n[6],g=n[10],m=n[14],v=n[3],y=n[7],_=n[11],M=n[15],E=s[0],C=s[4],b=s[8],S=s[12],T=s[1],R=s[5],A=s[9],L=s[13],w=s[2],P=s[6],F=s[10],N=s[14],B=s[3],O=s[7],z=s[11],V=s[15];return r[0]=o*E+a*T+l*w+c*B,r[4]=o*C+a*R+l*P+c*O,r[8]=o*b+a*A+l*F+c*z,r[12]=o*S+a*L+l*N+c*V,r[1]=u*E+h*T+f*w+d*B,r[5]=u*C+h*R+f*P+d*O,r[9]=u*b+h*A+f*F+d*z,r[13]=u*S+h*L+f*N+d*V,r[2]=p*E+x*T+g*w+m*B,r[6]=p*C+x*R+g*P+m*O,r[10]=p*b+x*A+g*F+m*z,r[14]=p*S+x*L+g*N+m*V,r[3]=v*E+y*T+_*w+M*B,r[7]=v*C+y*R+_*P+M*O,r[11]=v*b+y*A+_*F+M*z,r[15]=v*S+y*L+_*N+M*V,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],p=t[3],x=t[7],g=t[11],m=t[15],v=l*d-c*f,y=a*d-c*h,_=a*f-l*h,M=o*d-c*u,E=o*f-l*u,C=o*h-a*u;return e*(x*v-g*y+m*_)-n*(p*v-g*M+m*E)+s*(p*y-x*M+m*C)-r*(p*_-x*E+g*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-n*(r*u-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],p=t[12],x=t[13],g=t[14],m=t[15],v=e*a-n*o,y=e*l-s*o,_=e*c-r*o,M=n*l-s*a,E=n*c-r*a,C=s*c-r*l,b=u*x-h*p,S=u*g-f*p,T=u*m-d*p,R=h*g-f*x,A=h*m-d*x,L=f*m-d*g,w=v*L-y*A+_*R+M*T-E*S+C*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/w;return t[0]=(a*L-l*A+c*R)*P,t[1]=(s*A-n*L-r*R)*P,t[2]=(x*C-g*E+m*M)*P,t[3]=(f*E-h*C-d*M)*P,t[4]=(l*T-o*L-c*S)*P,t[5]=(e*L-s*T+r*S)*P,t[6]=(g*_-p*C-m*y)*P,t[7]=(u*C-f*_+d*y)*P,t[8]=(o*A-a*T+c*b)*P,t[9]=(n*T-e*A-r*b)*P,t[10]=(p*E-x*_+m*v)*P,t[11]=(h*_-u*E-d*v)*P,t[12]=(a*S-o*R-l*b)*P,t[13]=(e*R-n*S+s*b)*P,t[14]=(x*y-p*M-g*v)*P,t[15]=(u*M-h*y+f*v)*P,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,p=r*h,x=o*u,g=o*h,m=a*h,v=l*c,y=l*u,_=l*h,M=n.x,E=n.y,C=n.z;return s[0]=(1-(x+m))*M,s[1]=(d+_)*M,s[2]=(p-y)*M,s[3]=0,s[4]=(d-_)*E,s[5]=(1-(f+m))*E,s[6]=(g+v)*E,s[7]=0,s[8]=(p+y)*C,s[9]=(g-v)*C,s[10]=(1-(f+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=ms.set(s[0],s[1],s[2]).length(),a=ms.set(s[4],s[5],s[6]).length(),l=ms.set(s[8],s[9],s[10]).length();r<0&&(o=-o),wn.copy(this);let c=1/o,u=1/a,h=1/l;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=u,wn.elements[5]*=u,wn.elements[6]*=u,wn.elements[8]*=h,wn.elements[9]*=h,wn.elements[10]*=h,e.setFromRotationMatrix(wn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Rn,l=!1){let c=this.elements,u=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Rn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===hr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Rn,l=!1){let c=this.elements,u=2/(e-t),h=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Rn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===hr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ta.prototype.isMatrix4=!0;var Se=Ta,ms=new H,wn=new Se,$m=new H(0,0,0),Zm=new H(1,1,1),fi=new H,bo=new H,fn=new H,wh=new Se,Th=new zn,bi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ae(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Th.setFromEuler(this),this.setFromQuaternion(Th,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bi.DEFAULT_ORDER="XYZ";var Fs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Jm=0,Eh=new H,gs=new zn,Zn=new Se,vo=new H,nr=new H,Km=new H,jm=new zn,Ah=new H(1,0,0),Rh=new H(0,1,0),Ch=new H(0,0,1),Ph={type:"added"},Qm={type:"removed"},xs={type:"childadded",child:null},ec={type:"childremoved",child:null},un=class i extends kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=Br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new H,e=new bi,n=new zn,s=new H(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Se},normalMatrix:{value:new Yt}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.multiply(gs),this}rotateOnWorldAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.premultiply(gs),this}rotateX(t){return this.rotateOnAxis(Ah,t)}rotateY(t){return this.rotateOnAxis(Rh,t)}rotateZ(t){return this.rotateOnAxis(Ch,t)}translateOnAxis(t,e){return Eh.copy(t).applyQuaternion(this.quaternion),this.position.add(Eh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ah,t)}translateY(t){return this.translateOnAxis(Rh,t)}translateZ(t){return this.translateOnAxis(Ch,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vo.copy(t):vo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(nr,vo,this.up):Zn.lookAt(vo,nr,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),gs.setFromRotationMatrix(Zn),this.quaternion.premultiply(gs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Gt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ph),xs.child=t,this.dispatchEvent(xs),xs.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qm),ec.child=t,this.dispatchEvent(ec),ec.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ph),xs.child=t,this.dispatchEvent(xs),xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,t,Km),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,jm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};un.DEFAULT_UP=new H(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ue=class extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}},t0={type:"move"},Ds=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(t0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ue;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Uf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},_o={h:0,s:0,l:0};function nc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var j=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=Wm(t,1),e=ae(e,0,1),n=ae(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=nc(o,r,t+1/3),this.g=nc(o,r,t),this.b=nc(o,r,t-1/3)}return oe.colorSpaceToWorking(this,s),this}setStyle(t,e=Ie){function n(r){r!==void 0&&parseFloat(r)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){let n=Uf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ti(t.r),this.g=ti(t.g),this.b=ti(t.b),this}copyLinearToSRGB(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return oe.workingToColorSpace(je.copy(this),t),Math.round(ae(je.r*255,0,255))*65536+Math.round(ae(je.g*255,0,255))*256+Math.round(ae(je.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(je.copy(this),e);let n=je.r,s=je.g,r=je.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=Ie){oe.workingToColorSpace(je.copy(this),t);let e=je.r,n=je.g,s=je.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(di),this.setHSL(di.h+t,di.s+e,di.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(di),t.getHSL(_o);let n=Jl(di.h,_o.h,e),s=Jl(di.s,_o.s,e),r=Jl(di.l,_o.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},je=new j;j.NAMES=Uf;var dr=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new j(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var vi=class extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Tn=new H,Jn=new H,ic=new H,Kn=new H,bs=new H,vs=new H,Ih=new H,sc=new H,rc=new H,oc=new H,ac=new Ee,lc=new Ee,cc=new Ee,xi=class i{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Tn.subVectors(t,e),s.cross(Tn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Tn.subVectors(s,e),Jn.subVectors(n,e),ic.subVectors(t,e);let o=Tn.dot(Tn),a=Tn.dot(Jn),l=Tn.dot(ic),c=Jn.dot(Jn),u=Jn.dot(ic),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,p=(o*u-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Kn.x),l.addScaledVector(o,Kn.y),l.addScaledVector(a,Kn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return ac.setScalar(0),lc.setScalar(0),cc.setScalar(0),ac.fromBufferAttribute(t,e),lc.fromBufferAttribute(t,n),cc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ac,r.x),o.addScaledVector(lc,r.y),o.addScaledVector(cc,r.z),o}static isFrontFacing(t,e,n,s){return Tn.subVectors(n,e),Jn.subVectors(t,e),Tn.cross(Jn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Tn.cross(Jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;bs.subVectors(s,n),vs.subVectors(r,n),sc.subVectors(t,n);let l=bs.dot(sc),c=vs.dot(sc);if(l<=0&&c<=0)return e.copy(n);rc.subVectors(t,s);let u=bs.dot(rc),h=vs.dot(rc);if(u>=0&&h<=u)return e.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(bs,o);oc.subVectors(t,r);let d=bs.dot(oc),p=vs.dot(oc);if(p>=0&&d<=p)return e.copy(r);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(vs,a);let g=u*p-d*h;if(g<=0&&h-u>=0&&d-p>=0)return Ih.subVectors(r,s),a=(h-u)/(h-u+(d-p)),e.copy(s).addScaledVector(Ih,a);let m=1/(g+x+f);return o=x*m,a=f*m,e.copy(n).addScaledVector(bs,o).addScaledVector(vs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},an=class{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(En.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(En.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=En.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,En):En.fromBufferAttribute(r,o),En.applyMatrix4(t.matrixWorld),this.expandByPoint(En);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yo.copy(n.boundingBox)),yo.applyMatrix4(t.matrixWorld),this.union(yo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ir),Mo.subVectors(this.max,ir),_s.subVectors(t.a,ir),ys.subVectors(t.b,ir),Ms.subVectors(t.c,ir),pi.subVectors(ys,_s),mi.subVectors(Ms,ys),Vi.subVectors(_s,Ms);let e=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Vi.z,Vi.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Vi.z,0,-Vi.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Vi.y,Vi.x,0];return!uc(e,_s,ys,Ms,Mo)||(e=[1,0,0,0,1,0,0,0,1],!uc(e,_s,ys,Ms,Mo))?!1:(So.crossVectors(pi,mi),e=[So.x,So.y,So.z],uc(e,_s,ys,Ms,Mo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(En).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},jn=[new H,new H,new H,new H,new H,new H,new H,new H],En=new H,yo=new an,_s=new H,ys=new H,Ms=new H,pi=new H,mi=new H,Vi=new H,ir=new H,Mo=new H,So=new H,Gi=new H;function uc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Gi.fromArray(i,r);let a=s.x*Math.abs(Gi.x)+s.y*Math.abs(Gi.y)+s.z*Math.abs(Gi.z),l=t.dot(Gi),c=e.dot(Gi),u=n.dot(Gi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Ne=new H,wo=new te,e0=0,vn=class extends kn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:e0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=If,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)wo.fromBufferAttribute(this,e),wo.applyMatrix3(t),this.setXY(e,wo.x,wo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=er(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=cn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=er(e,this.array)),e}setX(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=er(e,this.array)),e}setY(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=er(e,this.array)),e}setZ(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=er(e,this.array)),e}setW(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array),r=cn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var pr=class extends vn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var qi=class extends vn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ut=class extends vn{constructor(t,e,n){super(new Float32Array(t),e,n)}},n0=new an,sr=new H,hc=new H,_i=class{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):n0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sr.subVectors(t,this.center);let e=sr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(sr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sr.copy(t.center).add(hc)),this.expandByPoint(sr.copy(t.center).sub(hc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},i0=0,bn=new Se,fc=new un,Ss=new H,dn=new an,rr=new an,Ve=new H,$t=class i extends kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=Br(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gm(t)?qi:pr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,e,n){return bn.makeTranslation(t,e,n),this.applyMatrix4(bn),this}scale(t,e,n){return bn.makeScale(t,e,n),this.applyMatrix4(bn),this}lookAt(t){return fc.lookAt(t),fc.updateMatrix(),this.applyMatrix4(fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ut(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new an);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];rr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(dn.min,rr.min),dn.expandByPoint(Ve),Ve.addVectors(dn.max,rr.max),dn.expandByPoint(Ve)):(dn.expandByPoint(rr.min),dn.expandByPoint(rr.max))}dn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ve));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ve.fromBufferAttribute(a,c),l&&(Ss.fromBufferAttribute(t,c),Ve.add(Ss)),s=Math.max(s,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new vn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let b=0;b<n.count;b++)a[b]=new H,l[b]=new H;let c=new H,u=new H,h=new H,f=new te,d=new te,p=new te,x=new H,g=new H;function m(b,S,T){c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,T),f.fromBufferAttribute(r,b),d.fromBufferAttribute(r,S),p.fromBufferAttribute(r,T),u.sub(c),h.sub(c),d.sub(f),p.sub(f);let R=1/(d.x*p.y-p.x*d.y);isFinite(R)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(h,-d.y).multiplyScalar(R),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(R),a[b].add(x),a[S].add(x),a[T].add(x),l[b].add(g),l[S].add(g),l[T].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let b=0,S=v.length;b<S;++b){let T=v[b],R=T.start,A=T.count;for(let L=R,w=R+A;L<w;L+=3)m(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let y=new H,_=new H,M=new H,E=new H;function C(b){M.fromBufferAttribute(s,b),E.copy(M);let S=a[b];y.copy(S),y.sub(M.multiplyScalar(M.dot(S))).normalize(),_.crossVectors(E,S);let R=_.dot(l[b])<0?-1:1;o.setXYZW(b,y.x,y.y,y.z,R)}for(let b=0,S=v.length;b<S;++b){let T=v[b],R=T.start,A=T.count;for(let L=R,w=R+A;L<w;L+=3)C(t.getX(L+0)),C(t.getX(L+1)),C(t.getX(L+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new vn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new H,r=new H,o=new H,a=new H,l=new H,c=new H,u=new H,h=new H;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let m=0;m<u;m++)f[p++]=c[d++]}return new vn(f,u,h)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var dc=new H,s0=new H,r0=new Yt,An=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=dc.subVectors(n,e).cross(s0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(dc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||r0.getNormalMatrix(t),s=this.coplanarPoint(dc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},o0=0,ei=class extends kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=Br(),this.name="",this.type="Material",this.blending=Ti,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ic,this.blendDst=Lc,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new j(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wo,this.stencilZFail=Wo,this.stencilZPass=Wo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new j().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new An().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new te().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new te().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Qn=new H,pc=new H,To=new H,Eo=new H,$i=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qn.copy(this.origin).addScaledVector(this.direction,e),Qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){pc.copy(t).add(e).multiplyScalar(.5),To.copy(e).sub(t).normalize(),Eo.copy(this.origin).sub(pc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(To),a=Eo.dot(this.direction),l=-Eo.dot(To),c=Eo.lengthSq(),u=Math.abs(1-o*o),h,f,d,p;if(u>0)if(h=o*l-a,f=o*a-l,p=r*u,h>=0)if(f>=-p)if(f<=p){let x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-p?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=p?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(pc).addScaledVector(To,f),d}intersectSphere(t,e){if(t.radius<0)return null;Qn.subVectors(t.center,this.origin);let n=Qn.dot(this.direction),s=Qn.dot(Qn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Qn)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=t.x-o.x,f=t.y-o.y,d=t.z-o.z,p=e.x-o.x,x=e.y-o.y,g=e.z-o.z,m=n.x-o.x,v=n.y-o.y,y=n.z-o.z,_=Math.abs(l),M=Math.abs(c),E=Math.abs(u),C,b,S,T,R,A,L,w,P,F,N,B;if(_>=M&&_>=E?(S=l,A=h,P=p,B=m,l>=0?(C=c,b=u,T=f,R=d,L=x,w=g,F=v,N=y):(C=u,b=c,T=d,R=f,L=g,w=x,F=y,N=v)):M>=E?(S=c,A=f,P=x,B=v,c>=0?(C=u,b=l,T=d,R=h,L=g,w=p,F=y,N=m):(C=l,b=u,T=h,R=d,L=p,w=g,F=m,N=y)):(S=u,A=d,P=g,B=y,u>=0?(C=l,b=c,T=h,R=f,L=p,w=x,F=m,N=v):(C=c,b=l,T=f,R=h,L=x,w=p,F=v,N=m)),S===0)return null;let O=C/S,z=b/S,V=1/S,Q=T-O*A,G=R-z*A,nt=L-O*P,lt=w-z*P,dt=F-O*B,$=N-z*B,q=dt*lt-$*nt,it=Q*$-G*dt,ct=nt*G-lt*Q;if(s){if(q<0||it<0||ct<0)return null}else if((q<0||it<0||ct<0)&&(q>0||it>0||ct>0))return null;let ut=q+it+ct;if(ut===0)return null;let Tt=V*(q*A+it*P+ct*B);return(ut>0?Tt<0:Tt>0)?null:this.at(Tt/ut,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ie=class extends ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new j(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Lh=new Se,Hi=new $i,Ao=new _i,Fh=new H,Ro=new H,Co=new H,Po=new H,mc=new H,Io=new H,Dh=new H,Lo=new H,Ot=class extends un{constructor(t=new $t,e=new ie){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Io.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(mc.fromBufferAttribute(h,t),o?Io.addScaledVector(mc,u):Io.addScaledVector(mc.sub(e),u))}e.add(Io)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(r),Hi.copy(t.ray).recast(t.near),!(Ao.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(Ao,Fh)===null||Hi.origin.distanceToSquared(Fh)>(t.far-t.near)**2))&&(Lh.copy(r).invert(),Hi.copy(t.ray).applyMatrix4(Lh),!(n.boundingBox!==null&&Hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Hi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],v=Math.max(g.start,d.start),y=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let _=v,M=y;_<M;_+=3){let E=a.getX(_),C=a.getX(_+1),b=a.getX(_+2);s=Fo(this,m,t,n,c,u,h,E,C,b),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let v=a.getX(g),y=a.getX(g+1),_=a.getX(g+2);s=Fo(this,o,t,n,c,u,h,v,y,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],v=Math.max(g.start,d.start),y=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let _=v,M=y;_<M;_+=3){let E=_,C=_+1,b=_+2;s=Fo(this,m,t,n,c,u,h,E,C,b),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let v=g,y=g+1,_=g+2;s=Fo(this,o,t,n,c,u,h,v,y,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function a0(i,t,e,n,s,r,o,a){let l;if(t.side===$e?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Gn,a),l===null)return null;Lo.copy(a),Lo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Lo);return c<e.near||c>e.far?null:{distance:c,point:Lo.clone(),object:i}}function Fo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Ro),i.getVertexPosition(l,Co),i.getVertexPosition(c,Po);let u=a0(i,t,e,n,Ro,Co,Po,Dh);if(u){let h=new H;xi.getBarycoord(Dh,Ro,Co,Po,h),s&&(u.uv=xi.getInterpolatedAttribute(s,a,l,c,h,new te)),r&&(u.uv1=xi.getInterpolatedAttribute(r,a,l,c,h,new te)),o&&(u.normal=xi.getInterpolatedAttribute(o,a,l,c,h,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new H,materialIndex:0};xi.getNormal(Ro,Co,Po,f.normal),u.face=f,u.barycoord=h}return u}var ra=class extends tn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ge,u=Ge,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wi=new _i,l0=new te(.5,.5),Do=new H,mr=class{constructor(t=new An,e=new An,n=new An,s=new An,r=new An,o=new An){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],p=r[8],x=r[9],g=r[10],m=r[11],v=r[12],y=r[13],_=r[14],M=r[15];if(s[0].setComponents(c-o,d-u,m-p,M-v).normalize(),s[1].setComponents(c+o,d+u,m+p,M+v).normalize(),s[2].setComponents(c+a,d+h,m+x,M+y).normalize(),s[3].setComponents(c-a,d-h,m-x,M-y).normalize(),n)s[4].setComponents(l,f,g,_).normalize(),s[5].setComponents(c-l,d-f,m-g,M-_).normalize();else if(s[4].setComponents(c-l,d-f,m-g,M-_).normalize(),e===Rn)s[5].setComponents(c+l,d+f,m+g,M+_).normalize();else if(e===hr)s[5].setComponents(l,f,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(t){Wi.center.set(0,0,0);let e=l0.distanceTo(t.center);return Wi.radius=.7071067811865476+e,Wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Do.x=s.normal.x>0?t.max.x:t.min.x,Do.y=s.normal.y>0?t.max.y:t.min.y,Do.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Do)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ye=class extends ei{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new j(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},oa=new H,aa=new H,Nh=new Se,or=new $i,No=new _i,gc=new H,Uh=new H,la=class extends un{constructor(t=new $t,e=new Ye){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)oa.fromBufferAttribute(e,s-1),aa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=oa.distanceTo(aa);t.setAttribute("lineDistance",new Ut(n,1))}else zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(s),No.radius+=r,t.ray.intersectsSphere(No)===!1)return;Nh.copy(s).invert(),or.copy(t.ray).applyMatrix4(Nh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=d,g=p-1;x<g;x+=c){let m=u.getX(x),v=u.getX(x+1),y=Uo(this,t,or,l,m,v,x);y&&e.push(y)}if(this.isLineLoop){let x=u.getX(p-1),g=u.getX(d),m=Uo(this,t,or,l,x,g,p-1);m&&e.push(m)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=d,g=p-1;x<g;x+=c){let m=Uo(this,t,or,l,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){let x=Uo(this,t,or,l,p-1,d,p-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Uo(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(oa.fromBufferAttribute(a,s),aa.fromBufferAttribute(a,r),e.distanceSqToSegment(oa,aa,gc,Uh)>n)return;gc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(gc);if(!(c<t.near||c>t.far))return{distance:c,point:Uh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Oh=new H,Bh=new H,qe=class extends la{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Oh.fromBufferAttribute(e,s),Bh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Oh.distanceTo(Bh);t.setAttribute("lineDistance",new Ut(n,1))}else zt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Zi=class extends ei{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new j(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},kh=new Se,Mc=new $i,Oo=new _i,Bo=new H,Ns=class extends un{constructor(t=new $t,e=new Zi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oo.copy(n.boundingSphere),Oo.applyMatrix4(s),Oo.radius+=r,t.ray.intersectsSphere(Oo)===!1)return;kh.copy(s).invert(),Mc.copy(t.ray).applyMatrix4(kh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,x=d;p<x;p++){let g=c.getX(p);Bo.fromBufferAttribute(h,g),zh(Bo,g,l,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let p=f,x=d;p<x;p++)Bo.fromBufferAttribute(h,p),zh(Bo,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function zh(i,t,e,n,s,r,o){let a=Mc.distanceSqToPoint(i);if(a<e){let l=new H;Mc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var gr=class extends tn{constructor(t=[],e=Ei,n,s,r,o,a,l,c,u){super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ni=class extends tn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var yi=class extends tn{constructor(t,e,n=Pn,s,r,o,a=Ge,l=Ge,c,u=Bn,h=1){if(u!==Bn&&u!==Ri)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ls(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ca=class extends yi{constructor(t,e=Pn,n=Ei,s,r,o=Ge,a=Ge,l,c=Bn){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},xr=class extends tn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Us=class i extends $t{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ut(c,3)),this.setAttribute("normal",new Ut(u,3)),this.setAttribute("uv",new Ut(h,2));function p(x,g,m,v,y,_,M,E,C,b,S){let T=_/C,R=M/b,A=_/2,L=M/2,w=E/2,P=C+1,F=b+1,N=0,B=0,O=new H;for(let z=0;z<F;z++){let V=z*R-L;for(let Q=0;Q<P;Q++){let G=Q*T-A;O[x]=G*v,O[g]=V*y,O[m]=w,c.push(O.x,O.y,O.z),O[x]=0,O[g]=0,O[m]=E>0?1:-1,u.push(O.x,O.y,O.z),h.push(Q/C),h.push(1-z/b),N+=1}}for(let z=0;z<b;z++)for(let V=0;V<C;V++){let Q=f+V+P*z,G=f+V+P*(z+1),nt=f+(V+1)+P*(z+1),lt=f+(V+1)+P*z;l.push(Q,G,lt),l.push(G,nt,lt),B+=6}a.addGroup(d,B,S),d+=B,f+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var br=class i extends $t{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new H,u=new te;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){let d=n+h/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Ut(o,3)),this.setAttribute("normal",new Ut(a,3)),this.setAttribute("uv",new Ut(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};function c0(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Of(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=p0(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let u=a,h=l;for(let f=e;f<s;f+=e){let d=i[f],p=i[f+1];d<a&&(a=d),p<l&&(l=p),d>u&&(u=d),p>h&&(h=p)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return vr(r,o,e,a,l,c,0),o}function Of(i,t,e,n,s){let r;if(s===T0(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Vh(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Vh(o/n|0,i[o],i[o+1],r);return r&&Os(r,r.next)&&(yr(r),r=r.next),r}function Ji(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Os(e,e.next)||Te(e.prev,e,e.next)===0)){if(yr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function vr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&v0(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?h0(i,n,s,r):u0(i)){t.push(l.i,i.i,c.i),yr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=f0(Ji(i),t),vr(i,t,e,n,s,r,2)):o===2&&d0(i,t,e,n,s,r):vr(Ji(i),t,e,n,s,r,1);break}}}function u0(i){let t=i.prev,e=i,n=i.next;if(Te(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(s,r,o),h=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=u&&p.x<=f&&p.y>=h&&p.y<=d&&ar(s,a,r,l,o,c,p.x,p.y)&&Te(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function h0(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Te(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,f=o.y,d=Math.min(a,l,c),p=Math.min(u,h,f),x=Math.max(a,l,c),g=Math.max(u,h,f),m=Sc(d,p,t,e,n),v=Sc(x,g,t,e,n),y=i.prevZ,_=i.nextZ;for(;y&&y.z>=m&&_&&_.z<=v;){if(y.x>=d&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&ar(a,u,l,h,c,f,y.x,y.y)&&Te(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=d&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&ar(a,u,l,h,c,f,_.x,_.y)&&Te(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=m;){if(y.x>=d&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&ar(a,u,l,h,c,f,y.x,y.y)&&Te(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=v;){if(_.x>=d&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&ar(a,u,l,h,c,f,_.x,_.y)&&Te(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function f0(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Os(n,s)&&kf(n,e,e.next,s)&&_r(n,s)&&_r(s,n)&&(t.push(n.i,e.i,s.i),yr(e),yr(e.next),e=i=s),e=e.next}while(e!==i);return Ji(e)}function d0(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&M0(o,a)){let l=zf(o,a);o=Ji(o,o.next),l=Ji(l,l.next),vr(o,t,e,n,s,r,0),vr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function p0(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Of(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(y0(c))}s.sort(m0);for(let r=0;r<s.length;r++)e=g0(s[r],e);return e}function m0(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function g0(i,t){let e=x0(i,t);if(!e)return t;let n=zf(e,i);return Ji(n,n.next),Ji(e,e.next)}function x0(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Os(i,e))return e;do{if(Os(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let h=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>r&&(r=h,o=e.x<e.next.x?e:e.next,h===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Bf(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let h=Math.abs(s-e.y)/(n-e.x);_r(e,i)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&b0(o,e)))&&(o=e,u=h)}e=e.next}while(e!==a);return o}function b0(i,t){return Te(i.prev,i,t.prev)<0&&Te(t.next,i,i.next)<0}function v0(i,t,e,n){let s=i;do s.z===0&&(s.z=Sc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,_0(s)}function _0(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Sc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function y0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Bf(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function ar(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Bf(i,t,e,n,s,r,o,a)}function M0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!S0(i,t)&&(_r(i,t)&&_r(t,i)&&w0(i,t)&&(Te(i.prev,i,t.prev)||Te(i,t.prev,t))||Os(i,t)&&Te(i.prev,i,i.next)>0&&Te(t.prev,t,t.next)>0)}function Te(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Os(i,t){return i.x===t.x&&i.y===t.y}function kf(i,t,e,n){let s=zo(Te(i,t,e)),r=zo(Te(i,t,n)),o=zo(Te(e,n,i)),a=zo(Te(e,n,t));return!!(s!==r&&o!==a||s===0&&ko(i,e,t)||r===0&&ko(i,n,t)||o===0&&ko(e,i,n)||a===0&&ko(e,t,n))}function ko(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function zo(i){return i>0?1:i<0?-1:0}function S0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&kf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function _r(i,t){return Te(i.prev,i,i.next)<0?Te(i,t,i.next)>=0&&Te(i,i.prev,t)>=0:Te(i,t,i.prev)<0||Te(i,i.next,t)<0}function w0(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function zf(i,t){let e=wc(i.i,i.x,i.y),n=wc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Vh(i,t,e,n){let s=wc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function yr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function wc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function T0(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Tc=class{static triangulate(t,e,n=2){return c0(t,e,n)}},Mr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Gh(t),Hh(n,t);let o=t.length;e.forEach(Gh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Hh(n,e[l]);let a=Tc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Gh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Hh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ii=class i extends $t{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=t/a,f=e/l,d=[],p=[],x=[],g=[];for(let m=0;m<u;m++){let v=m*f-o;for(let y=0;y<c;y++){let _=y*h-r;p.push(_,-v,0),x.push(0,0,1),g.push(y/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){let y=v+c*m,_=v+c*(m+1),M=v+1+c*(m+1),E=v+1+c*m;d.push(y,_,E),d.push(_,M,E)}this.setIndex(d),this.setAttribute("position",new Ut(p,3)),this.setAttribute("normal",new Ut(x,3)),this.setAttribute("uv",new Ut(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Sr=class i extends $t{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=t,f=(e-t)/s,d=new H,p=new te;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let m=r+g/n*o;d.x=h*Math.cos(m),d.y=h*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,u.push(p.x,p.y)}h+=f}for(let x=0;x<s;x++){let g=x*(n+1);for(let m=0;m<n;m++){let v=m+g,y=v,_=v+n+1,M=v+n+2,E=v+1;a.push(y,_,E),a.push(_,M,E)}}this.setIndex(a),this.setAttribute("position",new Ut(l,3)),this.setAttribute("normal",new Ut(c,3)),this.setAttribute("uv",new Ut(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function Qi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Wh(s))s.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Wh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function sn(i){let t={};for(let e=0;e<i.length;e++){let n=Qi(i[e]);for(let s in n)t[s]=n[s]}return t}function Wh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function E0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Qc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var Vf={clone:Qi,merge:sn},A0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,R0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,nn=class extends ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=A0,this.fragmentShader=R0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qi(t.uniforms),this.uniformsGroups=E0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new j().setHex(s.value);break;case"v2":this.uniforms[n].value=new te().fromArray(s.value);break;case"v3":this.uniforms[n].value=new H().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ee().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Yt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Se().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ua=class extends nn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ha=class extends ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fa=class extends ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ws(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function xc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Mi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},da=class extends Mi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vc,endingEnd:vc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case _c:r=t,a=2*e-n;break;case yc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case _c:o=t,l=2*n-e;break;case yc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(s-e),x=p*p,g=x*p,m=-f*g+2*f*x-f*p,v=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*p+1,y=(-1-d)*g+(1.5+d)*x+.5*p,_=d*g-d*x;for(let M=0;M!==a;++M)r[M]=m*o[u+M]+v*o[c+M]+y*o[l+M]+_*o[h+M];return r}},pa=class extends Mi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(s-e),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},ma=class extends Mi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ga=class extends Mi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(n-e)/(s-e),x=1-p;for(let g=0;g!==a;++g)r[g]=o[c+g]*x+o[l+g]*p;return r}let f=a*2,d=t-1;for(let p=0;p!==a;++p){let x=o[c+p],g=o[l+p],m=d*f+p*2,v=h[m],y=h[m+1],_=t*f+p*2,M=u[_],E=u[_+1],C=P0(n,e,v,M,s);r[p]=Gf(C,x,y,E,g)}return r}};function Gf(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function C0(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function P0(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Gf(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=C0(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var mn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ws(e,this.TimeBufferType),this.values=ws(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ws(t.times,Array),values:ws(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),xc(t.settings)&&(n.settings={inTangents:ws(t.settings.inTangents,Array),outTangents:ws(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ma(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new pa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ga(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case lr:e=this.InterpolantFactoryMethodDiscrete;break;case ta:e=this.InterpolantFactoryMethodLinear;break;case Ho:e=this.InterpolantFactoryMethodSmooth;break;case bc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lr;case this.InterpolantFactoryMethodLinear:return ta;case this.InterpolantFactoryMethodSmooth:return Ho;case this.InterpolantFactoryMethodBezier:return bc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;xc(this.settings)&&(Xh(this.settings.inTangents,t),Xh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Gt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Gt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Gt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Gt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Hm(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Gt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ho,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let p=0;p!==n;++p){let x=e[h+p];if(x!==e[f+p]||x!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[h+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,xc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Xh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}mn.prototype.ValueTypeName="";mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=ta;var Si=class extends mn{constructor(t,e,n){super(t,e,n)}};Si.prototype.ValueTypeName="bool";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=lr;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var xa=class extends mn{constructor(t,e,n,s){super(t,e,n,s)}};xa.prototype.ValueTypeName="color";var ba=class extends mn{constructor(t,e,n,s){super(t,e,n,s)}};ba.prototype.ValueTypeName="number";var va=class extends Mi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let u=c+a;c!==u;c+=4)zn.slerpFlat(r,0,o,c-a,o,c,l);return r}},wr=class extends mn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new va(this.times,this.values,this.getValueSize(),t)}};wr.prototype.ValueTypeName="quaternion";wr.prototype.InterpolantFactoryMethodSmooth=void 0;var wi=class extends mn{constructor(t,e,n){super(t,e,n)}};wi.prototype.ValueTypeName="string";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=lr;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var _a=class extends mn{constructor(t,e,n,s){super(t,e,n,s)}};_a.prototype.ValueTypeName="vector";var Xo={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Yh(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Yh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Yh(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var ya=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],p=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Hf=new ya,Bs=class{constructor(t){this.manager=t!==void 0?t:Hf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Bs.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ts=new WeakMap,Ma=class extends Bs{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Xo.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let h=Ts.get(o);h===void 0&&(h=[],Ts.set(o,h)),h.push({onLoad:e,onError:s})}return o}let a=Ps("img");function l(){u(),e&&e(this);let h=Ts.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];d.onLoad&&d.onLoad(this)}Ts.delete(this),r.manager.itemEnd(t)}function c(h){u(),s&&s(h),Xo.remove(`image:${t}`);let f=Ts.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(h)}Ts.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Xo.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}};var Tr=class extends Bs{constructor(t){super(t)}load(t,e,n,s){let r=new tn,o=new Ma(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}};var Vo=new H,Go=new zn,On=new H,Er=class extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Vo,Go,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vo,Go,On.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Vo,Go,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vo,Go,On.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},gi=new H,qh=new te,$h=new te,Qe=class extends Er{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ea*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Zl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ea*2*Math.atan(Math.tan(Zl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,qh,$h),e.subVectors($h,qh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Zl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Vn=class extends Er{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Es=-90,As=1,Sa=class extends un{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Qe(Es,As,t,e);s.layers=this.layers,this.add(s);let r=new Qe(Es,As,t,e);r.layers=this.layers,this.add(r);let o=new Qe(Es,As,t,e);o.layers=this.layers,this.add(o);let a=new Qe(Es,As,t,e);a.layers=this.layers,this.add(a);let l=new Qe(Es,As,t,e);l.layers=this.layers,this.add(l);let c=new Qe(Es,As,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},wa=class extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var tu="\\[\\]\\.:\\/",I0=new RegExp("["+tu+"]","g"),eu="[^"+tu+"]",L0="[^"+tu.replace("\\.","")+"]",F0=/((?:WC+[\/:])*)/.source.replace("WC",eu),D0=/(WCOD+)?/.source.replace("WCOD",L0),N0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eu),U0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eu),O0=new RegExp("^"+F0+D0+N0+U0+"$"),B0=["material","materials","bones","map"],Ec=class{constructor(t,e,n){let s=n||ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ye=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(I0,"")}static parseTrackName(t){let e=O0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);B0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Gt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Gt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Gt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Gt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Gt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Gt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ye.Composite=Ec;ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ye.prototype.GetterByBindingType=[ye.prototype._getValue_direct,ye.prototype._getValue_array,ye.prototype._getValue_arrayElement,ye.prototype._getValue_toArray];ye.prototype.SetterByBindingTypeAndVersioning=[[ye.prototype._setValue_direct,ye.prototype._setValue_direct_setNeedsUpdate,ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_array,ye.prototype._setValue_array_setNeedsUpdate,ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_arrayElement,ye.prototype._setValue_arrayElement_setNeedsUpdate,ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_fromArray,ye.prototype._setValue_fromArray_setNeedsUpdate,ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var FM=new Float32Array(1);var Zh=new Se,Ar=class{constructor(t,e,n=0,s=1/0){this.ray=new $i(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Fs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Gt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Zh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zh),this}intersectObject(t,e=!0,n=[]){return Ac(t,this,n,e),n.sort(Jh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ac(t[s],this,n,e);return n.sort(Jh),n}};function Jh(i,t){return i.distance-t.distance}function Ac(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Ac(r[o],t,e,!0)}}var au=class au{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};au.prototype.isMatrix2=!0;var Rc=au;function nu(i,t,e,n){let s=k0(n);switch(e){case Yc:return i*t;case $c:return i*t/s.components*s.byteLength;case La:return i*t/s.components*s.byteLength;case Ci:return i*t*2/s.components*s.byteLength;case Fa:return i*t*2/s.components*s.byteLength;case qc:return i*t*3/s.components*s.byteLength;case _n:return i*t*4/s.components*s.byteLength;case Da:return i*t*4/s.components*s.byteLength;case Lr:case Fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Dr:case Nr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ua:case Ba:return Math.max(i,16)*Math.max(t,8)/4;case Na:case Oa:return Math.max(i,8)*Math.max(t,8)/2;case ka:case za:case Ga:case Ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Va:case Ur:case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case tl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case el:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case nl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case il:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case sl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case rl:case ol:case al:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ll:case cl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Or:case ul:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function k0(i){switch(i){case gn:case Gc:return{byteLength:1,components:1};case zs:case Hc:case Ln:return{byteLength:2,components:1};case Pa:case Ia:return{byteLength:2,components:4};case Pn:case Ca:case In:return{byteLength:4,components:1};case Wc:case Xc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function hd(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function V0(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<h.length;d++){let p=h[f],x=h[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,p=h.length;d<p;d++){let x=h[d];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var G0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,H0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,W0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,X0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,q0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Z0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,J0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,K0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,j0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Q0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,eg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ng=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ig=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ag=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ug=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,hg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,pg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bg="gl_FragColor = linearToOutputTexel( gl_FragColor );",vg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_g=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,yg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Mg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Sg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Eg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ag=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ig=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Dg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ng=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ug=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Og=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Xg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$g=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ex=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ix=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ox=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ax=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ux=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,hx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,px=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,bx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_x=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Tx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ax=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Px=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ix=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ux=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ox=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Gx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$x=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Jx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Kx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ib=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ob=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ab=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ub=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,db=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_b=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:G0,alphahash_pars_fragment:H0,alphamap_fragment:W0,alphamap_pars_fragment:X0,alphatest_fragment:Y0,alphatest_pars_fragment:q0,aomap_fragment:$0,aomap_pars_fragment:Z0,batching_pars_vertex:J0,batching_vertex:K0,begin_vertex:j0,beginnormal_vertex:Q0,bsdfs:tg,iridescence_fragment:eg,bumpmap_pars_fragment:ng,clipping_planes_fragment:ig,clipping_planes_pars_fragment:sg,clipping_planes_pars_vertex:rg,clipping_planes_vertex:og,color_fragment:ag,color_pars_fragment:lg,color_pars_vertex:cg,color_vertex:ug,common:hg,cube_uv_reflection_fragment:fg,defaultnormal_vertex:dg,displacementmap_pars_vertex:pg,displacementmap_vertex:mg,emissivemap_fragment:gg,emissivemap_pars_fragment:xg,colorspace_fragment:bg,colorspace_pars_fragment:vg,envmap_fragment:_g,envmap_common_pars_fragment:yg,envmap_pars_fragment:Mg,envmap_pars_vertex:Sg,envmap_physical_pars_fragment:Dg,envmap_vertex:wg,fog_vertex:Tg,fog_pars_vertex:Eg,fog_fragment:Ag,fog_pars_fragment:Rg,gradientmap_pars_fragment:Cg,lightmap_pars_fragment:Pg,lights_lambert_fragment:Ig,lights_lambert_pars_fragment:Lg,lights_pars_begin:Fg,lights_toon_fragment:Ng,lights_toon_pars_fragment:Ug,lights_phong_fragment:Og,lights_phong_pars_fragment:Bg,lights_physical_fragment:kg,lights_physical_pars_fragment:zg,lights_fragment_begin:Vg,lights_fragment_maps:Gg,lights_fragment_end:Hg,lightprobes_pars_fragment:Wg,logdepthbuf_fragment:Xg,logdepthbuf_pars_fragment:Yg,logdepthbuf_pars_vertex:qg,logdepthbuf_vertex:$g,map_fragment:Zg,map_pars_fragment:Jg,map_particle_fragment:Kg,map_particle_pars_fragment:jg,metalnessmap_fragment:Qg,metalnessmap_pars_fragment:tx,morphinstance_vertex:ex,morphcolor_vertex:nx,morphnormal_vertex:ix,morphtarget_pars_vertex:sx,morphtarget_vertex:rx,normal_fragment_begin:ox,normal_fragment_maps:ax,normal_pars_fragment:lx,normal_pars_vertex:cx,normal_vertex:ux,normalmap_pars_fragment:hx,clearcoat_normal_fragment_begin:fx,clearcoat_normal_fragment_maps:dx,clearcoat_pars_fragment:px,iridescence_pars_fragment:mx,opaque_fragment:gx,packing:xx,premultiplied_alpha_fragment:bx,project_vertex:vx,dithering_fragment:_x,dithering_pars_fragment:yx,roughnessmap_fragment:Mx,roughnessmap_pars_fragment:Sx,shadowmap_pars_fragment:wx,shadowmap_pars_vertex:Tx,shadowmap_vertex:Ex,shadowmask_pars_fragment:Ax,skinbase_vertex:Rx,skinning_pars_vertex:Cx,skinning_vertex:Px,skinnormal_vertex:Ix,specularmap_fragment:Lx,specularmap_pars_fragment:Fx,tonemapping_fragment:Dx,tonemapping_pars_fragment:Nx,transmission_fragment:Ux,transmission_pars_fragment:Ox,uv_pars_fragment:Bx,uv_pars_vertex:kx,uv_vertex:zx,worldpos_vertex:Vx,background_vert:Gx,background_frag:Hx,backgroundCube_vert:Wx,backgroundCube_frag:Xx,cube_vert:Yx,cube_frag:qx,depth_vert:$x,depth_frag:Zx,distance_vert:Jx,distance_frag:Kx,equirect_vert:jx,equirect_frag:Qx,linedashed_vert:tb,linedashed_frag:eb,meshbasic_vert:nb,meshbasic_frag:ib,meshlambert_vert:sb,meshlambert_frag:rb,meshmatcap_vert:ob,meshmatcap_frag:ab,meshnormal_vert:lb,meshnormal_frag:cb,meshphong_vert:ub,meshphong_frag:hb,meshphysical_vert:fb,meshphysical_frag:db,meshtoon_vert:pb,meshtoon_frag:mb,points_vert:gb,points_frag:xb,shadow_vert:bb,shadow_frag:vb,sprite_vert:_b,sprite_frag:yb},yt={common:{diffuse:{value:new j(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new j(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new j(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new j(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Xn={basic:{uniforms:sn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:sn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new j(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:sn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new j(0)},specular:{value:new j(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:sn([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new j(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:sn([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new j(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:sn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:sn([yt.points,yt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:sn([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:sn([yt.common,yt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:sn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:sn([yt.sprite,yt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:sn([yt.common,yt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:sn([yt.lights,yt.fog,{color:{value:new j(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Xn.physical={uniforms:sn([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new j(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new j(0)},specularColor:{value:new j(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var dl={r:0,b:0,g:0},Mb=new Se,fd=new Yt;fd.set(-1,0,0,0,1,0,0,0,1);function Sb(i,t,e,n,s,r){let o=new j(0),a=s===!0?0:1,l,c,u=null,h=0,f=null;function d(v){let y=v.isScene===!0?v.background:null;if(y&&y.isTexture){let _=v.backgroundBlurriness>0;y=t.get(y,_)}return y}function p(v){let y=!1,_=d(v);_===null?g(o,a):_&&_.isColor&&(g(_,1),y=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,y){let _=d(y);_&&(_.isCubeTexture||_.mapping===Pr)?(c===void 0&&(c=new Ot(new Us(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:Qi(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Mb.makeRotationFromEuler(y.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(fd),c.material.toneMapped=oe.getTransfer(_.colorSpace)!==pe,(u!==_||h!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,h=_.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Ot(new ii(2,2),new nn({name:"BackgroundMaterial",uniforms:Qi(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=oe.getTransfer(_.colorSpace)!==pe,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||h!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,h=_.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,y){v.getRGB(dl,Qc(i)),e.buffers.color.setClear(dl.r,dl.g,dl.b,y,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),a=y,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,g(o,a)},render:p,addToRenderList:x,dispose:m}}function wb(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(R,A,L,w,P){let F=!1,N=h(R,w,L,A);r!==N&&(r=N,c(r.object)),F=d(R,w,L,P),F&&p(R,w,L,P),P!==null&&t.update(P,i.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,_(R,A,L,w),P!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))}function l(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function u(R){return i.deleteVertexArray(R)}function h(R,A,L,w){let P=w.wireframe===!0,F=n[A.id];F===void 0&&(F={},n[A.id]=F);let N=R.isInstancedMesh===!0?R.id:0,B=F[N];B===void 0&&(B={},F[N]=B);let O=B[L.id];O===void 0&&(O={},B[L.id]=O);let z=O[P];return z===void 0&&(z=f(l()),O[P]=z),z}function f(R){let A=[],L=[],w=[];for(let P=0;P<e;P++)A[P]=0,L[P]=0,w[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:L,attributeDivisors:w,object:R,attributes:{},index:null}}function d(R,A,L,w){let P=r.attributes,F=A.attributes,N=0,B=L.getAttributes();for(let O in B)if(B[O].location>=0){let V=P[O],Q=F[O];if(Q===void 0&&(O==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),O==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor)),V===void 0||V.attribute!==Q||Q&&V.data!==Q.data)return!0;N++}return r.attributesNum!==N||r.index!==w}function p(R,A,L,w){let P={},F=A.attributes,N=0,B=L.getAttributes();for(let O in B)if(B[O].location>=0){let V=F[O];V===void 0&&(O==="instanceMatrix"&&R.instanceMatrix&&(V=R.instanceMatrix),O==="instanceColor"&&R.instanceColor&&(V=R.instanceColor));let Q={};Q.attribute=V,V&&V.data&&(Q.data=V.data),P[O]=Q,N++}r.attributes=P,r.attributesNum=N,r.index=w}function x(){let R=r.newAttributes;for(let A=0,L=R.length;A<L;A++)R[A]=0}function g(R){m(R,0)}function m(R,A){let L=r.newAttributes,w=r.enabledAttributes,P=r.attributeDivisors;L[R]=1,w[R]===0&&(i.enableVertexAttribArray(R),w[R]=1),P[R]!==A&&(i.vertexAttribDivisor(R,A),P[R]=A)}function v(){let R=r.newAttributes,A=r.enabledAttributes;for(let L=0,w=A.length;L<w;L++)A[L]!==R[L]&&(i.disableVertexAttribArray(L),A[L]=0)}function y(R,A,L,w,P,F,N){N===!0?i.vertexAttribIPointer(R,A,L,P,F):i.vertexAttribPointer(R,A,L,w,P,F)}function _(R,A,L,w){x();let P=w.attributes,F=L.getAttributes(),N=A.defaultAttributeValues;for(let B in F){let O=F[B];if(O.location>=0){let z=P[B];if(z===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(z=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(z=R.instanceColor)),z!==void 0){let V=z.normalized,Q=z.itemSize,G=t.get(z);if(G===void 0)continue;let nt=G.buffer,lt=G.type,dt=G.bytesPerElement,$=lt===i.INT||lt===i.UNSIGNED_INT||z.gpuType===Ca;if(z.isInterleavedBufferAttribute){let q=z.data,it=q.stride,ct=z.offset;if(q.isInstancedInterleavedBuffer){for(let ut=0;ut<O.locationSize;ut++)m(O.location+ut,q.meshPerAttribute);R.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ut=0;ut<O.locationSize;ut++)g(O.location+ut);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let ut=0;ut<O.locationSize;ut++)y(O.location+ut,Q/O.locationSize,lt,V,it*dt,(ct+Q/O.locationSize*ut)*dt,$)}else{if(z.isInstancedBufferAttribute){for(let q=0;q<O.locationSize;q++)m(O.location+q,z.meshPerAttribute);R.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let q=0;q<O.locationSize;q++)g(O.location+q);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let q=0;q<O.locationSize;q++)y(O.location+q,Q/O.locationSize,lt,V,Q*dt,Q/O.locationSize*q*dt,$)}}else if(N!==void 0){let V=N[B];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(O.location,V);break;case 3:i.vertexAttrib3fv(O.location,V);break;case 4:i.vertexAttrib4fv(O.location,V);break;default:i.vertexAttrib1fv(O.location,V)}}}}v()}function M(){S();for(let R in n){let A=n[R];for(let L in A){let w=A[L];for(let P in w){let F=w[P];for(let N in F)u(F[N].object),delete F[N];delete w[P]}}delete n[R]}}function E(R){if(n[R.id]===void 0)return;let A=n[R.id];for(let L in A){let w=A[L];for(let P in w){let F=w[P];for(let N in F)u(F[N].object),delete F[N];delete w[P]}}delete n[R.id]}function C(R){for(let A in n){let L=n[A];for(let w in L){let P=L[w];if(P[R.id]===void 0)continue;let F=P[R.id];for(let N in F)u(F[N].object),delete F[N];delete P[R.id]}}}function b(R){for(let A in n){let L=n[A],w=R.isInstancedMesh===!0?R.id:0,P=L[w];if(P!==void 0){for(let F in P){let N=P[F];for(let B in N)u(N[B].object),delete N[B];delete P[F]}delete L[w],Object.keys(L).length===0&&delete n[A]}}}function S(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:S,resetDefaultState:T,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function Tb(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Eb(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==_n&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let b=C===Ln&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==gn&&C!==In&&!b&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(zt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:_,maxSamples:M,samples:E}}function Ab(i){let t=this,e=null,n=0,s=!1,r=!1,o=new An,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){let p=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!s||p===null||p.length===0||r&&!g)r?u(null):c();else{let v=r?0:n,y=v*4,_=m.clippingState||null;l.value=_,_=u(p,f,y,d);for(let M=0;M!==y;++M)_[M]=e[M];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,p){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=d+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,_=d;y!==x;++y,_+=4)o.copy(h[y]).applyMatrix4(v,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var Hs=4,Rb=6,Cb=20,Pb=256,kr=new Vn,Wf=new j,lu=null,cu=0,uu=0,hu=!1,Ib=new H,ts=new H,ml=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Ib}=r;lu=this._renderer.getRenderTarget(),cu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),hu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(lu,cu,uu),this._renderer.xr.enabled=hu,t.scissorTest=!1,Gs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ei||t.mapping===ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lu=this._renderer.getRenderTarget(),cu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),hu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:Ln,format:_n,colorSpace:cr,depthBuffer:!1},s=Xf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Lb(r)),this._blurMaterial=Db(r,t,e),this._ggxMaterial=Fb(r,t,e)}return s}_compileMaterial(t){let e=new Ot(new $t,t);this._renderer.compile(e,kr)}_sceneToCubeUV(t,e,n,s,r){let l=new Qe(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Wf),h.toneMapping=Cn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ot(new Us,new ie({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,v=t.background;v?v.isColor&&(g.color.copy(v),t.background=null,m=!0):(g.color.copy(Wf),m=!0);for(let y=0;y<6;y++){let _=y%3;_===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[y],r.y,r.z)):_===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[y]));let M=this._cubeSize;Gs(s,_*M,y>2?M:0,M,M),h.setRenderTarget(s),m&&h.render(x,l),h.render(t,l)}h.toneMapping=d,h.autoClear=f,t.background=v}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ei||t.mapping===ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Gs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,kr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=c*1.25,d=h*f,{_lodMax:p}=this,x=this._sizeLods[n],g=3*x*(n>p-Hs?n-p+Hs:0),m=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,Gs(r,g,m,3*x,2*x),s.setRenderTarget(r),s.render(a,kr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Gs(t,g,m,3*x,2*x),s.setRenderTarget(t),s.render(a,kr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],h=3*u*(s>this._lodMax-Hs?s-this._lodMax+Hs:0),f=4*(this._cubeSize-u);Gs(e,h,f,3*u,2*u),o.setRenderTarget(e),o.render(l,kr)}};function Lb(i){let t=[],e=[],n=i,s=i-Hs+1+Rb;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,f=6,d=3,p=new Float32Array(d*f*h),x=new Float32Array(d*f*h);for(let m=0;m<h;m++){let v=m%3*2/3-1,y=m>2?0:-1,_=[v,y,0,v+2/3,y,0,v+2/3,y+1,0,v,y,0,v+2/3,y+1,0,v,y+1,0];p.set(_,d*f*m);for(let M=0;M<f;M++){let E=u[M*2]*2-1,C=u[M*2+1]*2-1;m===0?ts.set(1,C,E):m===1?ts.set(-E,1,-C):m===2?ts.set(-E,C,1):m===3?ts.set(-1,C,-E):m===4?ts.set(-E,-1,C):ts.set(E,C,-1),ts.toArray(x,(m*f+M)*d)}}let g=new $t;g.setAttribute("position",new vn(p,d)),g.setAttribute("outputDirection",new vn(x,d)),e.push(new Ot(g,null)),n>Hs&&n--}return{lodMeshes:e,sizeLods:t}}function Xf(i,t,e){let n=new en(i,t,e);return n.texture.mapping=Pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Fb(i,t,e){return new nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Pb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Db(i,t,e){return new nn({name:"SphericalGaussianBlur",defines:{SAMPLES:Cb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:xl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Yf(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function qf(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function xl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var gl=class extends en{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new gr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Us(5,5,5),r=new nn({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:Hn});r.uniforms.tEquirect.value=e;let o=new Ot(s,r),a=e.minFilter;return e.minFilter===Ai&&(e.minFilter=Xe),new Sa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function Nb(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Ea||d===Aa)if(t.has(f)){let p=t.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let x=new gl(p.height);return x.fromEquirectangularTexture(i,f),t.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,p=d===Ea||d===Aa,x=d===Ei||d===ji;if(p||x){let g=e.get(f),m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new ml(i)),g=p?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let v=f.image;return p&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new ml(i)),g=p?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function a(f,d){return d===Ea?f.mapping=Ei:d===Aa&&(f.mapping=ji),f}function l(f){let d=0,p=6;for(let x=0;x<p;x++)f[x]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function Ub(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Xi("WebGLRenderer: "+n+" extension not supported."),s}}}function Ob(i,t,e,n){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){let f=h.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(h){let f=[],d=h.index,p=h.attributes.position,x=0;if(p===void 0)return;if(d!==null){let v=d.array;x=d.version;for(let y=0,_=v.length;y<_;y+=3){let M=v[y+0],E=v[y+1],C=v[y+2];f.push(M,E,E,C,C,M)}}else{let v=p.array;x=p.version;for(let y=0,_=v.length/3-1;y<_;y+=3){let M=y+0,E=y+1,C=y+2;f.push(M,E,E,C,C,M)}}let g=new(p.count>=65535?qi:pr)(f,1);g.version=x;let m=r.get(h);m&&t.remove(m),r.set(h,g)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Bb(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){i.drawElements(n,f,r,h*o),e.update(f,n,1)}function c(h,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,h*o,d),e.update(f,n,d))}function u(h,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,d);let x=0;for(let g=0;g<d;g++)x+=f[g];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function kb(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Gt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function zb(i,t,e){let n=new WeakMap,s=new Ee;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let S=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],y=0;d===!0&&(y=1),p===!0&&(y=2),x===!0&&(y=3);let _=a.attributes.position.count*y,M=1;_>t.maxTextureSize&&(M=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let E=new Float32Array(_*M*4*h),C=new fr(E,_,M,h);C.type=In,C.needsUpdate=!0;let b=y*4;for(let T=0;T<h;T++){let R=g[T],A=m[T],L=v[T],w=_*M*4*T;for(let P=0;P<R.count;P++){let F=P*b;d===!0&&(s.fromBufferAttribute(R,P),E[w+F+0]=s.x,E[w+F+1]=s.y,E[w+F+2]=s.z,E[w+F+3]=0),p===!0&&(s.fromBufferAttribute(A,P),E[w+F+4]=s.x,E[w+F+5]=s.y,E[w+F+6]=s.z,E[w+F+7]=0),x===!0&&(s.fromBufferAttribute(L,P),E[w+F+8]=s.x,E[w+F+9]=s.y,E[w+F+10]=s.z,E[w+F+11]=L.itemSize===4?s.w:1)}}f={count:h,texture:C,size:new te(_,M)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Vb(i,t,e,n,s){let r=new WeakMap;function o(c){let u=s.render.frame,h=c.geometry,f=t.get(c,h);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var Gb={[Dc]:"LINEAR_TONE_MAPPING",[Nc]:"REINHARD_TONE_MAPPING",[Uc]:"CINEON_TONE_MAPPING",[Oc]:"ACES_FILMIC_TONE_MAPPING",[kc]:"AGX_TONE_MAPPING",[zc]:"NEUTRAL_TONE_MAPPING",[Bc]:"CUSTOM_TONE_MAPPING"};function Hb(i,t,e,n,s,r){let o=new en(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new $t;c.setAttribute("position",new Ut([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ut([0,2,0,0,2,0],2));let u=new ua({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Ot(c,u),f=new Vn(-1,1,1,-1,0,1),d=null,p=null,x=!1,g,m=null,v=[],y=!1;this.setSize=function(_,M){o.setSize(_,M),a!==null&&a.setSize(_,M),l!==null&&l.setSize(_,M);for(let E=0;E<v.length;E++){let C=v[E];C.setSize&&C.setSize(_,M)}},this.setEffects=function(_){v=_,y=v.length>0&&v[0].isRenderPass===!0;let M=o.width,E=o.height;v.length>0&&a===null&&(a=new en(M,E,{type:Ln,depthBuffer:!1,stencilBuffer:!1}),l=new en(M,E,{type:Ln,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<v.length;C++){let b=v[C];b.setSize&&b.setSize(M,E)}},this.begin=function(_,M){if(x||_.toneMapping===Cn&&v.length===0)return!1;if(m=M,M!==null){let E=M.width,C=M.height;(o.width!==E||o.height!==C)&&this.setSize(E,C)}return y===!1&&_.setRenderTarget(o),g=_.toneMapping,_.toneMapping=Cn,!0},this.hasRenderPass=function(){return y},this.end=function(_,M){_.toneMapping=g,x=!0;let E=o,C=a;for(let b=0;b<v.length;b++){let S=v[b];S.enabled!==!1&&(S.render(_,C,E,M),S.needsSwap!==!1&&(E=C,C=C===a?l:a))}if(d!==_.outputColorSpace||p!==_.toneMapping){d=_.outputColorSpace,p=_.toneMapping,u.defines={},oe.getTransfer(d)===pe&&(u.defines.SRGB_TRANSFER="");let b=Gb[p];b&&(u.defines[b]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,_.setRenderTarget(m),_.render(h,f),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var dd=new tn,pu=new yi(1,1),pd=new fr,md=new sa,gd=new gr,$f=[],Zf=[],Jf=new Float32Array(16),Kf=new Float32Array(9),jf=new Float32Array(4);function Xs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=$f[s];if(r===void 0&&(r=new Float32Array(s),$f[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function bl(i,t){let e=Zf[t];e===void 0&&(e=new Int32Array(t),Zf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Wb(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Xb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function Yb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function qb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function $b(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;jf.set(n),i.uniformMatrix2fv(this.addr,!1,jf),Be(e,n)}}function Zb(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Kf.set(n),i.uniformMatrix3fv(this.addr,!1,Kf),Be(e,n)}}function Jb(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Jf.set(n),i.uniformMatrix4fv(this.addr,!1,Jf),Be(e,n)}}function Kb(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function jb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function Qb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function tv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function ev(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function nv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function iv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function sv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function rv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(pu.compareFunction=e.isReversedDepthBuffer()?fl:hl,r=pu):r=dd,e.setTexture2D(t||r,s)}function ov(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||md,s)}function av(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||gd,s)}function lv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||pd,s)}function cv(i){switch(i){case 5126:return Wb;case 35664:return Xb;case 35665:return Yb;case 35666:return qb;case 35674:return $b;case 35675:return Zb;case 35676:return Jb;case 5124:case 35670:return Kb;case 35667:case 35671:return jb;case 35668:case 35672:return Qb;case 35669:case 35673:return tv;case 5125:return ev;case 36294:return nv;case 36295:return iv;case 36296:return sv;case 35678:case 36198:case 36298:case 36306:case 35682:return rv;case 35679:case 36299:case 36307:return ov;case 35680:case 36300:case 36308:case 36293:return av;case 36289:case 36303:case 36311:case 36292:return lv}}function uv(i,t){i.uniform1fv(this.addr,t)}function hv(i,t){let e=Xs(t,this.size,2);i.uniform2fv(this.addr,e)}function fv(i,t){let e=Xs(t,this.size,3);i.uniform3fv(this.addr,e)}function dv(i,t){let e=Xs(t,this.size,4);i.uniform4fv(this.addr,e)}function pv(i,t){let e=Xs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function mv(i,t){let e=Xs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function gv(i,t){let e=Xs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function xv(i,t){i.uniform1iv(this.addr,t)}function bv(i,t){i.uniform2iv(this.addr,t)}function vv(i,t){i.uniform3iv(this.addr,t)}function _v(i,t){i.uniform4iv(this.addr,t)}function yv(i,t){i.uniform1uiv(this.addr,t)}function Mv(i,t){i.uniform2uiv(this.addr,t)}function Sv(i,t){i.uniform3uiv(this.addr,t)}function wv(i,t){i.uniform4uiv(this.addr,t)}function Tv(i,t,e){let n=this.cache,s=t.length,r=bl(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=pu:o=dd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Ev(i,t,e){let n=this.cache,s=t.length,r=bl(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||md,r[o])}function Av(i,t,e){let n=this.cache,s=t.length,r=bl(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||gd,r[o])}function Rv(i,t,e){let n=this.cache,s=t.length,r=bl(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||pd,r[o])}function Cv(i){switch(i){case 5126:return uv;case 35664:return hv;case 35665:return fv;case 35666:return dv;case 35674:return pv;case 35675:return mv;case 35676:return gv;case 5124:case 35670:return xv;case 35667:case 35671:return bv;case 35668:case 35672:return vv;case 35669:case 35673:return _v;case 5125:return yv;case 36294:return Mv;case 36295:return Sv;case 36296:return wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Tv;case 35679:case 36299:case 36307:return Ev;case 35680:case 36300:case 36308:case 36293:return Av;case 36289:case 36303:case 36311:case 36292:return Rv}}var mu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=cv(e.type)}},gu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cv(e.type)}},xu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},fu=/(\w+)(\])?(\[|\.)?/g;function Qf(i,t){i.seq.push(t),i.map[t.id]=t}function Pv(i,t,e){let n=i.name,s=n.length;for(fu.lastIndex=0;;){let r=fu.exec(n),o=fu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Qf(e,c===void 0?new mu(a,i,t):new gu(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new xu(a),Qf(e,h)),e=h}}}var Ws=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Pv(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function td(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Iv=37297,Lv=0;function Fv(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ed=new Yt;function Dv(i){oe._getMatrix(ed,oe.workingColorSpace,i);let t=`mat3( ${ed.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(i)){case ur:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function nd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Fv(i.getShaderSource(t),a)}else return r}function Nv(i,t){let e=Dv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Uv={[Dc]:"Linear",[Nc]:"Reinhard",[Uc]:"Cineon",[Oc]:"ACESFilmic",[kc]:"AgX",[zc]:"Neutral",[Bc]:"Custom"};function Ov(i,t){let e=Uv[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var pl=new H;function Bv(){oe.getLuminanceCoefficients(pl);let i=pl.x.toFixed(4),t=pl.y.toFixed(4),e=pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vr).join(`
`)}function zv(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Vv(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Vr(i){return i!==""}function id(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Gv=/^[ \t]*#include +<([\w\d./]+)>/gm;function bu(i){return i.replace(Gv,Wv)}var Hv=new Map;function Wv(i,t){let e=Qt[t];if(e===void 0){let n=Hv.get(t);if(n!==void 0)e=Qt[n],zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return bu(e)}var Xv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rd(i){return i.replace(Xv,Yv)}function Yv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function od(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var qv={[Rr]:"SHADOWMAP_TYPE_PCF",[ks]:"SHADOWMAP_TYPE_VSM"};function $v(i){return qv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Zv={[Ei]:"ENVMAP_TYPE_CUBE",[ji]:"ENVMAP_TYPE_CUBE",[Pr]:"ENVMAP_TYPE_CUBE_UV"};function Jv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Zv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Kv={[ji]:"ENVMAP_MODE_REFRACTION"};function jv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Kv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Qv={[Fc]:"ENVMAP_BLENDING_MULTIPLY",[vf]:"ENVMAP_BLENDING_MIX",[_f]:"ENVMAP_BLENDING_ADD"};function t_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Qv[i.combine]||"ENVMAP_BLENDING_NONE"}function e_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function n_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=$v(e),c=Jv(e),u=jv(e),h=t_(e),f=e_(e),d=kv(e),p=zv(r),x=s.createProgram(),g,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Vr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Vr).join(`
`),m.length>0&&(m+=`
`)):(g=[od(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),m=[od(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Cn?"#define TONE_MAPPING":"",e.toneMapping!==Cn?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Cn?Ov("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,Nv("linearToOutputTexel",e.outputColorSpace),Bv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vr).join(`
`)),o=bu(o),o=id(o,e),o=sd(o,e),a=bu(a),a=id(a,e),a=sd(a,e),o=rd(o),a=rd(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=v+g+o,_=v+m+a,M=td(s,s.VERTEX_SHADER,y),E=td(s,s.FRAGMENT_SHADER,_);s.attachShader(x,M),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(R){if(i.debug.checkShaderErrors){let A=s.getProgramInfoLog(x)||"",L=s.getShaderInfoLog(M)||"",w=s.getShaderInfoLog(E)||"",P=A.trim(),F=L.trim(),N=w.trim(),B=!0,O=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,M,E);else{let z=nd(s,M,"vertex"),V=nd(s,E,"fragment");Gt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+P+`
`+z+`
`+V)}else P!==""?zt("WebGLProgram: Program Info Log:",P):(F===""||N==="")&&(O=!1);O&&(R.diagnostics={runnable:B,programLog:P,vertexShader:{log:F,prefix:g},fragmentShader:{log:N,prefix:m}})}s.deleteShader(M),s.deleteShader(E),b=new Ws(s,x),S=Vv(s,x)}let b;this.getUniforms=function(){return b===void 0&&C(this),b};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(x,Iv)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Lv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=E,this}var i_=0,vu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new _u(t),e.set(t,n)),n}},_u=class{constructor(t){this.id=i_++,this.code=t,this.usedTimes=0}};function s_(i){return i===Ci||i===Ur||i===Or}function r_(i,t,e,n,s,r){let o=new Fs,a=new vu,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(b){return l.add(b),b===0?"uv":`uv${b}`}function x(b,S,T,R,A,L){let w=R.fog,P=A.geometry,F=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?R.environment:null,N=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,B=t.get(b.envMap||F,N),O=B&&B.mapping===Pr?B.image.height:null,z=d[b.type];b.precision!==null&&(f=n.getMaxPrecision(b.precision),f!==b.precision&&zt("WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let V=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Q=V!==void 0?V.length:0,G=0;P.morphAttributes.position!==void 0&&(G=1),P.morphAttributes.normal!==void 0&&(G=2),P.morphAttributes.color!==void 0&&(G=3);let nt,lt,dt,$;if(z){let be=Xn[z];nt=be.vertexShader,lt=be.fragmentShader}else{nt=b.vertexShader,lt=b.fragmentShader;let be=a.getVertexShaderStage(b),fe=a.getFragmentShaderStage(b);a.update(b,be,fe),dt=be.id,$=fe.id}let q=i.getRenderTarget(),it=i.state.buffers.depth.getReversed(),ct=A.isInstancedMesh===!0,ut=A.isBatchedMesh===!0,Tt=!!b.map,Vt=!!b.matcap,Nt=!!B,Wt=!!b.aoMap,re=!!b.lightMap,Xt=!!b.bumpMap&&b.wireframe===!1,Me=!!b.normalMap,ze=!!b.displacementMap,ln=!!b.emissiveMap,we=!!b.metalnessMap,Fe=!!b.roughnessMap,Y=b.anisotropy>0,Ze=b.clearcoat>0,me=b.dispersion>0,k=b.retroreflectivity>0,I=b.iridescence>0,Z=b.sheen>0,tt=b.transmission>0,st=Y&&!!b.anisotropyMap,pt=Ze&&!!b.clearcoatMap,mt=Ze&&!!b.clearcoatNormalMap,rt=Ze&&!!b.clearcoatRoughnessMap,at=I&&!!b.iridescenceMap,gt=I&&!!b.iridescenceThicknessMap,Lt=Z&&!!b.sheenColorMap,_t=Z&&!!b.sheenRoughnessMap,xt=!!b.specularMap,Ft=!!b.specularColorMap,kt=!!b.specularIntensityMap,Zt=tt&&!!b.transmissionMap,X=tt&&!!b.thicknessMap,bt=!!b.gradientMap,ot=!!b.alphaMap,vt=b.alphaTest>0,wt=!!b.alphaHash,ht=!!b.extensions,Dt=Cn;b.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Dt=i.toneMapping);let Pt={shaderID:z,shaderType:b.type,shaderName:b.name,vertexShader:nt,fragmentShader:lt,defines:b.defines,customVertexShaderID:dt,customFragmentShaderID:$,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:ut,batchingColor:ut&&A._colorsTexture!==null,instancing:ct,instancingColor:ct&&A.instanceColor!==null,instancingMorph:ct&&A.morphTexture!==null,outputColorSpace:q===null?i.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:oe.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Tt,matcap:Vt,envMap:Nt,envMapMode:Nt&&B.mapping,envMapCubeUVHeight:O,aoMap:Wt,lightMap:re,bumpMap:Xt,normalMap:Me,displacementMap:ze,emissiveMap:ln,normalMapObjectSpace:Me&&b.normalMapType===Sf,normalMapTangentSpace:Me&&b.normalMapType===Zc,packedNormalMap:Me&&b.normalMapType===Zc&&s_(b.normalMap.format),metalnessMap:we,roughnessMap:Fe,anisotropy:Y,anisotropyMap:st,clearcoat:Ze,clearcoatMap:pt,clearcoatNormalMap:mt,clearcoatRoughnessMap:rt,dispersion:me,retroreflection:k,iridescence:I,iridescenceMap:at,iridescenceThicknessMap:gt,sheen:Z,sheenColorMap:Lt,sheenRoughnessMap:_t,specularMap:xt,specularColorMap:Ft,specularIntensityMap:kt,transmission:tt,transmissionMap:Zt,thicknessMap:X,gradientMap:bt,opaque:b.transparent===!1&&b.blending===Ti&&b.alphaToCoverage===!1,alphaMap:ot,alphaTest:vt,alphaHash:wt,combine:b.combine,mapUv:Tt&&p(b.map.channel),aoMapUv:Wt&&p(b.aoMap.channel),lightMapUv:re&&p(b.lightMap.channel),bumpMapUv:Xt&&p(b.bumpMap.channel),normalMapUv:Me&&p(b.normalMap.channel),displacementMapUv:ze&&p(b.displacementMap.channel),emissiveMapUv:ln&&p(b.emissiveMap.channel),metalnessMapUv:we&&p(b.metalnessMap.channel),roughnessMapUv:Fe&&p(b.roughnessMap.channel),anisotropyMapUv:st&&p(b.anisotropyMap.channel),clearcoatMapUv:pt&&p(b.clearcoatMap.channel),clearcoatNormalMapUv:mt&&p(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&p(b.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&p(b.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&p(b.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&p(b.sheenColorMap.channel),sheenRoughnessMapUv:_t&&p(b.sheenRoughnessMap.channel),specularMapUv:xt&&p(b.specularMap.channel),specularColorMapUv:Ft&&p(b.specularColorMap.channel),specularIntensityMapUv:kt&&p(b.specularIntensityMap.channel),transmissionMapUv:Zt&&p(b.transmissionMap.channel),thicknessMapUv:X&&p(b.thicknessMap.channel),alphaMapUv:ot&&p(b.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Me||Y),vertexNormals:!!P.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:A.isPoints===!0&&!!P.attributes.uv&&(Tt||ot),fog:!!w,useFog:b.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||P.attributes.normal===void 0&&Me===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:it,skinning:A.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:G,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:Dt,decodeVideoTexture:Tt&&b.map.isVideoTexture===!0&&oe.getTransfer(b.map.colorSpace)===pe,decodeVideoTextureEmissive:ln&&b.emissiveMap.isVideoTexture===!0&&oe.getTransfer(b.emissiveMap.colorSpace)===pe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===he,flipSided:b.side===$e,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ht&&b.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&b.extensions.multiDraw===!0||ut)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Pt.vertexUv1s=l.has(1),Pt.vertexUv2s=l.has(2),Pt.vertexUv3s=l.has(3),l.clear(),Pt}function g(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let T in b.defines)S.push(T),S.push(b.defines[T]);return b.isRawShaderMaterial===!1&&(m(S,b),v(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function m(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numSunLights),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numSunLightShadows),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function v(b,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),b.push(o.mask)}function y(b){let S=d[b.type],T;if(S){let R=Xn[S];T=Vf.clone(R.uniforms)}else T=b.uniforms;return T}function _(b,S){let T=u.get(S);return T!==void 0?++T.usedTimes:(T=new n_(i,S,b,s),c.push(T),u.set(S,T)),T}function M(b){if(--b.usedTimes===0){let S=c.indexOf(b);c[S]=c[c.length-1],c.pop(),u.delete(b.cacheKey),b.destroy()}}function E(b){a.remove(b)}function C(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:y,acquireProgram:_,releaseProgram:M,releaseShaderCache:E,programs:c,dispose:C}}function o_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function a_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function ad(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ld(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,x,g,m){let v=i[t];return v===void 0?(v={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:g,group:m},i[t]=v):(v.id=f.id,v.object=f,v.geometry=d,v.material=p,v.materialVariant=o(f),v.groupOrder=x,v.renderOrder=f.renderOrder,v.z=g,v.group=m),t++,v}function l(f,d,p,x,g,m,v){v.reversedDepth===!0&&(g=-g);let y=a(f,d,p,x,g,m);p.transmission>0?n.push(y):p.transparent===!0?s.push(y):e.push(y)}function c(f,d,p,x,g,m){let v=a(f,d,p,x,g,m);p.transmission>0?n.unshift(v):p.transparent===!0?s.unshift(v):e.unshift(v)}function u(f,d){e.length>1&&e.sort(f||a_),n.length>1&&n.sort(d||ad),s.length>1&&s.sort(d||ad)}function h(){for(let f=t,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function l_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new ld,i.set(n,[o])):s>=r.length?(o=new ld,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function c_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new H,color:new j};break;case"SpotLight":e={position:new H,direction:new H,color:new j,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new j,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new j,groundColor:new j};break;case"RectAreaLight":e={color:new j,position:new H,halfWidth:new H,halfHeight:new H};break}return i[t.id]=e,e}}}function u_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var h_=0;function f_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function d_(i){let t=new c_,e=u_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let s=new H,r=new Se,o=new Se;function a(c){let u=0,h=0,f=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let d=0,p=0,x=0,g=0,m=0,v=0,y=0,_=0,M=0,E=0,C=0,b=0,S=0,T=0;c.sort(f_);for(let A=0,L=c.length;A<L;A++){let w=c[A],P=w.color,F=w.intensity,N=w.distance,B=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===Ci?B=w.shadow.map.texture:B=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)u+=P.r*F,h+=P.g*F,f+=P.b*F;else if(w.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(w.sh.coefficients[O],F);T++}else if(w.isSunLight){let O=t.get(w);if(O.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let z=w.shadow,V=e.get(w);V.shadowIntensity=z.intensity,V.shadowBias=z.bias,V.shadowNormalBias=z.normalBias,V.shadowRadius=z.radius,V.shadowMapSize.copy(z.mapSize).multiply(z.getFrameExtents()),n.sunShadow[p]=V,n.sunShadowMap[p]=B;let Q=z.getViewportCount();for(let G=0;G<Q;G++)n.sunShadowMatrix[x+G]=z.getMatrix(G),n.sunShadowCascade[x+G]=z._cascadeData[G];x+=Q,p++}n.sun[d]=O,d++}else if(w.isDirectionalLight){let O=t.get(w);if(O.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let z=w.shadow,V=e.get(w);V.shadowIntensity=z.intensity,V.shadowBias=z.bias,V.shadowNormalBias=z.normalBias,V.shadowRadius=z.radius,V.shadowMapSize=z.mapSize,n.directionalShadow[g]=V,n.directionalShadowMap[g]=B,n.directionalShadowMatrix[g]=w.shadow.matrix,M++}n.directional[g]=O,g++}else if(w.isSpotLight){let O=t.get(w);O.position.setFromMatrixPosition(w.matrixWorld),O.color.copy(P).multiplyScalar(F),O.distance=N,O.coneCos=Math.cos(w.angle),O.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),O.decay=w.decay,n.spot[v]=O;let z=w.shadow;if(w.map&&(n.spotLightMap[b]=w.map,b++,z.updateMatrices(w),w.castShadow&&S++),n.spotLightMatrix[v]=z.matrix,w.castShadow){let V=e.get(w);V.shadowIntensity=z.intensity,V.shadowBias=z.bias,V.shadowNormalBias=z.normalBias,V.shadowRadius=z.radius,V.shadowMapSize=z.mapSize,n.spotShadow[v]=V,n.spotShadowMap[v]=B,C++}v++}else if(w.isRectAreaLight){let O=t.get(w);O.color.copy(P).multiplyScalar(F),O.halfWidth.set(w.width*.5,0,0),O.halfHeight.set(0,w.height*.5,0),n.rectArea[y]=O,y++}else if(w.isPointLight){let O=t.get(w);if(O.color.copy(w.color).multiplyScalar(w.intensity),O.distance=w.distance,O.decay=w.decay,w.castShadow){let z=w.shadow,V=e.get(w);V.shadowIntensity=z.intensity,V.shadowBias=z.bias,V.shadowNormalBias=z.normalBias,V.shadowRadius=z.radius,V.shadowMapSize=z.mapSize,V.shadowCameraNear=z.camera.near,V.shadowCameraFar=z.camera.far,n.pointShadow[m]=V,n.pointShadowMap[m]=B,n.pointShadowMatrix[m]=w.shadow.matrix,E++}n.point[m]=O,m++}else if(w.isHemisphereLight){let O=t.get(w);O.skyColor.copy(w.color).multiplyScalar(F),O.groundColor.copy(w.groundColor).multiplyScalar(F),n.hemi[_]=O,_++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let R=n.hash;(R.sunLength!==d||R.directionalLength!==g||R.pointLength!==m||R.spotLength!==v||R.rectAreaLength!==y||R.hemiLength!==_||R.numSunShadows!==p||R.numDirectionalShadows!==M||R.numPointShadows!==E||R.numSpotShadows!==C||R.numSpotMaps!==b||R.numLightProbes!==T)&&(n.sun.length=d,n.directional.length=g,n.spot.length=v,n.rectArea.length=y,n.point.length=m,n.hemi.length=_,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+b-S,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=T,R.sunLength=d,R.directionalLength=g,R.pointLength=m,R.spotLength=v,R.rectAreaLength=y,R.hemiLength=_,R.numSunShadows=p,R.numDirectionalShadows=M,R.numPointShadows=E,R.numSpotShadows=C,R.numSpotMaps=b,R.numLightProbes=T,n.version=h_++)}function l(c,u){let h=0,f=0,d=0,p=0,x=0,g=0,m=u.matrixWorldInverse;for(let v=0,y=c.length;v<y;v++){let _=c[v];if(_.isSunLight){let M=n.sun[h];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),h++}else if(_.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(_.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(_.isRectAreaLight){let M=n.rectArea[x];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function cd(i){let t=new d_(i),e=[],n=[],s=[];function r(f){h.camera=f,e.length=0,n.length=0,s.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function l(f){s.push(f)}function c(){t.setup(e)}function u(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function p_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new cd(i),t.set(s,[a])):r>=o.length?(a=new cd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var m_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,x_=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],b_=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],ud=new Se,zr=new H,du=new H;function v_(i,t,e){let n=new mr,s=new te,r=new te,o=new Ee,a=new ha,l=new fa,c={},u=e.maxTextureSize,h={[Gn]:$e,[$e]:Gn,[he]:he},f=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:m_,fragmentShader:g_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new $t;p.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ot(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rr;let m=this.type;this.render=function(E,C,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===Qh&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Rr);let S=i.getRenderTarget(),T=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),A=i.state;A.setBlending(Hn),A.buffers.depth.getReversed()===!0?A.buffers.color.setClear(0,0,0,0):A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);let L=m!==this.type;L&&C.traverse(function(w){w.material&&(Array.isArray(w.material)?w.material.forEach(P=>P.needsUpdate=!0):w.material.needsUpdate=!0)});for(let w=0,P=E.length;w<P;w++){let F=E[w],N=F.shadow;if(N===void 0){zt("WebGLShadowMap:",F,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);let B=N.getFrameExtents();s.multiply(B),r.copy(N.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/B.x),s.x=r.x*B.x,N.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/B.y),s.y=r.y*B.y,N.mapSize.y=r.y));let O=i.state.buffers.depth.getReversed();if(N.camera._reversedDepth=O,N.map===null||L===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===ks){if(F.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new en(s.x,s.y,{format:Ci,type:Ln,minFilter:Xe,magFilter:Xe,generateMipmaps:!1}),N.map.texture.name=F.name+".shadowMap",N.map.depthTexture=new yi(s.x,s.y,In),N.map.depthTexture.name=F.name+".shadowMapDepth",N.map.depthTexture.format=Bn,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Ge,N.map.depthTexture.magFilter=Ge}else F.isPointLight?(N.map=new gl(s.x),N.map.depthTexture=new ca(s.x,Pn)):(N.map=new en(s.x,s.y),N.map.depthTexture=new yi(s.x,s.y,Pn)),N.map.depthTexture.name=F.name+".shadowMap",N.map.depthTexture.format=Bn,this.type===Rr?(N.map.depthTexture.compareFunction=O?fl:hl,N.map.depthTexture.minFilter=Xe,N.map.depthTexture.magFilter=Xe):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Ge,N.map.depthTexture.magFilter=Ge);N.camera.updateProjectionMatrix()}N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==s.x||N.map.height!==s.y)&&N.map.setSize(s.x,s.y);let z=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();F.isPointLight!==!0&&N.updateMatrices(F,b);for(let V=0;V<z;V++){let Q=N.getCamera(V);if(F.isPointLight){let G=N.camera,nt=N.matrix,lt=F.distance||G.far;lt!==G.far&&(G.far=lt,G.updateProjectionMatrix()),zr.setFromMatrixPosition(F.matrixWorld),G.position.copy(zr),du.copy(G.position),du.add(x_[V]),G.up.copy(b_[V]),G.lookAt(du),G.updateMatrixWorld(),nt.makeTranslation(-zr.x,-zr.y,-zr.z),ud.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),N._frustum.setFromProjectionMatrix(ud,G.coordinateSystem,G.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)i.setRenderTarget(N.map,V),i.clear();else{V===0&&(i.setRenderTarget(N.map),i.clear());let G=N.getViewport(V);o.set(r.x*G.x,r.y*G.y,r.x*G.z,r.y*G.w),A.viewport(o)}n=N.getFrustum(V),_(C,b,Q,F,this.type)}N.isPointLightShadow!==!0&&this.type===ks&&v(N,b),N.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(S,T,R)};function v(E,C){let b=t.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new en(s.x,s.y,{format:Ci,type:Ln}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(C,null,b,f,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(C,null,b,d,x,null)}function y(E,C,b,S){let T=null,R=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)T=R;else if(T=b.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let A=T.uuid,L=C.uuid,w=c[A];w===void 0&&(w={},c[A]=w);let P=w[L];P===void 0&&(P=T.clone(),w[L]=P,C.addEventListener("dispose",M)),T=P}if(T.visible=C.visible,T.wireframe=C.wireframe,S===ks?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:h[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,b.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let A=i.properties.get(T);A.light=b}return T}function _(E,C,b,S,T){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&T===ks)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);let L=t.update(E),w=E.material;if(Array.isArray(w)){let P=L.groups;for(let F=0,N=P.length;F<N;F++){let B=P[F],O=w[B.materialIndex];if(O&&O.visible){let z=y(E,O,S,T);E.onBeforeShadow(i,E,C,b,L,z,B),i.renderBufferDirect(b,null,L,z,E,B),E.onAfterShadow(i,E,C,b,L,z,B)}}}else if(w.visible){let P=y(E,w,S,T);E.onBeforeShadow(i,E,C,b,L,P,null),i.renderBufferDirect(b,null,L,P,E,null),E.onAfterShadow(i,E,C,b,L,P,null)}}let A=E.children;for(let L=0,w=A.length;L<w;L++)_(A[L],C,b,S,T)}function M(E){E.target.removeEventListener("dispose",M);for(let b in c){let S=c[b],T=E.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}function __(i,t){function e(){let X=!1,bt=new Ee,ot=null,vt=new Ee(0,0,0,0);return{setMask:function(wt){ot!==wt&&!X&&(i.colorMask(wt,wt,wt,wt),ot=wt)},setLocked:function(wt){X=wt},setClear:function(wt,ht,Dt,Pt,be){be===!0&&(wt*=Pt,ht*=Pt,Dt*=Pt),bt.set(wt,ht,Dt,Pt),vt.equals(bt)===!1&&(i.clearColor(wt,ht,Dt,Pt),vt.copy(bt))},reset:function(){X=!1,ot=null,vt.set(-1,0,0,0)}}}function n(){let X=!1,bt=!1,ot=null,vt=null,wt=null;return{setReversed:function(ht){if(bt!==ht){let Dt=t.get("EXT_clip_control");ht?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),bt=ht;let Pt=wt;wt=null,this.setClear(Pt)}},getReversed:function(){return bt},setTest:function(ht){ht?q(i.DEPTH_TEST):it(i.DEPTH_TEST)},setMask:function(ht){ot!==ht&&!X&&(i.depthMask(ht),ot=ht)},setFunc:function(ht){if(bt&&(ht=Nf[ht]),vt!==ht){switch(ht){case Yo:i.depthFunc(i.NEVER);break;case qo:i.depthFunc(i.ALWAYS);break;case $o:i.depthFunc(i.LESS);break;case Cs:i.depthFunc(i.LEQUAL);break;case Zo:i.depthFunc(i.EQUAL);break;case Jo:i.depthFunc(i.GEQUAL);break;case Ko:i.depthFunc(i.GREATER);break;case jo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=ht}},setLocked:function(ht){X=ht},setClear:function(ht){wt!==ht&&(wt=ht,bt&&(ht=1-ht),i.clearDepth(ht))},reset:function(){X=!1,ot=null,vt=null,wt=null,bt=!1}}}function s(){let X=!1,bt=null,ot=null,vt=null,wt=null,ht=null,Dt=null,Pt=null,be=null;return{setTest:function(fe){X||(fe?q(i.STENCIL_TEST):it(i.STENCIL_TEST))},setMask:function(fe){bt!==fe&&!X&&(i.stencilMask(fe),bt=fe)},setFunc:function(fe,Sn,Nn){(ot!==fe||vt!==Sn||wt!==Nn)&&(i.stencilFunc(fe,Sn,Nn),ot=fe,vt=Sn,wt=Nn)},setOp:function(fe,Sn,Nn){(ht!==fe||Dt!==Sn||Pt!==Nn)&&(i.stencilOp(fe,Sn,Nn),ht=fe,Dt=Sn,Pt=Nn)},setLocked:function(fe){X=fe},setClear:function(fe){be!==fe&&(i.clearStencil(fe),be=fe)},reset:function(){X=!1,bt=null,ot=null,vt=null,wt=null,ht=null,Dt=null,Pt=null,be=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},f={},d=new WeakMap,p=[],x=null,g=!1,m=null,v=null,y=null,_=null,M=null,E=null,C=null,b=new j(0,0,0),S=0,T=!1,R=null,A=null,L=null,w=null,P=null,F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,B=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(O)[1]),N=B>=1):O.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),N=B>=2);let z=null,V={},Q=i.getParameter(i.SCISSOR_BOX),G=i.getParameter(i.VIEWPORT),nt=new Ee().fromArray(Q),lt=new Ee().fromArray(G);function dt(X,bt,ot,vt){let wt=new Uint8Array(4),ht=i.createTexture();i.bindTexture(X,ht),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<ot;Dt++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(bt,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(bt+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return ht}let $={};$[i.TEXTURE_2D]=dt(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=dt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=dt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=dt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),q(i.DEPTH_TEST),o.setFunc(Cs),Xt(!1),Me(Cc),q(i.CULL_FACE),Wt(Hn);function q(X){u[X]!==!0&&(i.enable(X),u[X]=!0)}function it(X){u[X]!==!1&&(i.disable(X),u[X]=!1)}function ct(X,bt){return f[X]!==bt?(i.bindFramebuffer(X,bt),f[X]=bt,X===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=bt),X===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=bt),!0):!1}function ut(X,bt){let ot=p,vt=!1;if(X){ot=d.get(bt),ot===void 0&&(ot=[],d.set(bt,ot));let wt=X.textures;if(ot.length!==wt.length||ot[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Dt=wt.length;ht<Dt;ht++)ot[ht]=i.COLOR_ATTACHMENT0+ht;ot.length=wt.length,vt=!0}}else ot[0]!==i.BACK&&(ot[0]=i.BACK,vt=!0);vt&&i.drawBuffers(ot)}function Tt(X){return x!==X?(i.useProgram(X),x=X,!0):!1}let Vt={[Ki]:i.FUNC_ADD,[ef]:i.FUNC_SUBTRACT,[nf]:i.FUNC_REVERSE_SUBTRACT};Vt[sf]=i.MIN,Vt[rf]=i.MAX;let Nt={[of]:i.ZERO,[af]:i.ONE,[lf]:i.SRC_COLOR,[Ic]:i.SRC_ALPHA,[pf]:i.SRC_ALPHA_SATURATE,[ff]:i.DST_COLOR,[uf]:i.DST_ALPHA,[cf]:i.ONE_MINUS_SRC_COLOR,[Lc]:i.ONE_MINUS_SRC_ALPHA,[df]:i.ONE_MINUS_DST_COLOR,[hf]:i.ONE_MINUS_DST_ALPHA,[mf]:i.CONSTANT_COLOR,[gf]:i.ONE_MINUS_CONSTANT_COLOR,[xf]:i.CONSTANT_ALPHA,[bf]:i.ONE_MINUS_CONSTANT_ALPHA};function Wt(X,bt,ot,vt,wt,ht,Dt,Pt,be,fe){if(X===Hn){g===!0&&(it(i.BLEND),g=!1);return}if(g===!1&&(q(i.BLEND),g=!0),X!==tf){if(X!==m||fe!==T){if((v!==Ki||M!==Ki)&&(i.blendEquation(i.FUNC_ADD),v=Ki,M=Ki),fe)switch(X){case Ti:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ce:i.blendFunc(i.ONE,i.ONE);break;case Pc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cr:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Gt("WebGLState: Invalid blending: ",X);break}else switch(X){case Ti:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ce:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Pc:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cr:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",X);break}y=null,_=null,E=null,C=null,b.set(0,0,0),S=0,m=X,T=fe}return}wt=wt||bt,ht=ht||ot,Dt=Dt||vt,(bt!==v||wt!==M)&&(i.blendEquationSeparate(Vt[bt],Vt[wt]),v=bt,M=wt),(ot!==y||vt!==_||ht!==E||Dt!==C)&&(i.blendFuncSeparate(Nt[ot],Nt[vt],Nt[ht],Nt[Dt]),y=ot,_=vt,E=ht,C=Dt),(Pt.equals(b)===!1||be!==S)&&(i.blendColor(Pt.r,Pt.g,Pt.b,be),b.copy(Pt),S=be),m=X,T=!1}function re(X,bt){X.side===he?it(i.CULL_FACE):q(i.CULL_FACE);let ot=X.side===$e;bt&&(ot=!ot),Xt(ot),X.blending===Ti&&X.transparent===!1?Wt(Hn):Wt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),r.setMask(X.colorWrite);let vt=X.stencilWrite;a.setTest(vt),vt&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),ln(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?q(i.SAMPLE_ALPHA_TO_COVERAGE):it(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(X){R!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),R=X)}function Me(X){X!==Kh?(q(i.CULL_FACE),X!==A&&(X===Cc?i.cullFace(i.BACK):X===jh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):it(i.CULL_FACE),A=X}function ze(X){X!==L&&(N&&i.lineWidth(X),L=X)}function ln(X,bt,ot){X?(q(i.POLYGON_OFFSET_FILL),(w!==bt||P!==ot)&&(w=bt,P=ot,o.getReversed()&&(bt=-bt),i.polygonOffset(bt,ot))):it(i.POLYGON_OFFSET_FILL)}function we(X){X?q(i.SCISSOR_TEST):it(i.SCISSOR_TEST)}function Fe(X){X===void 0&&(X=i.TEXTURE0+F-1),z!==X&&(i.activeTexture(X),z=X)}function Y(X,bt,ot){ot===void 0&&(z===null?ot=i.TEXTURE0+F-1:ot=z);let vt=V[ot];vt===void 0&&(vt={type:void 0,texture:void 0},V[ot]=vt),(vt.type!==X||vt.texture!==bt)&&(z!==ot&&(i.activeTexture(ot),z=ot),i.bindTexture(X,bt||$[X]),vt.type=X,vt.texture=bt)}function Ze(){let X=V[z];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function me(){try{i.compressedTexImage2D(...arguments)}catch(X){Gt("WebGLState:",X)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(X){Gt("WebGLState:",X)}}function I(){try{i.texSubImage2D(...arguments)}catch(X){Gt("WebGLState:",X)}}function Z(){try{i.texSubImage3D(...arguments)}catch(X){Gt("WebGLState:",X)}}function tt(){try{i.compressedTexSubImage2D(...arguments)}catch(X){Gt("WebGLState:",X)}}function st(){try{i.compressedTexSubImage3D(...arguments)}catch(X){Gt("WebGLState:",X)}}function pt(){try{i.texStorage2D(...arguments)}catch(X){Gt("WebGLState:",X)}}function mt(){try{i.texStorage3D(...arguments)}catch(X){Gt("WebGLState:",X)}}function rt(){try{i.texImage2D(...arguments)}catch(X){Gt("WebGLState:",X)}}function at(){try{i.texImage3D(...arguments)}catch(X){Gt("WebGLState:",X)}}function gt(X){return h[X]!==void 0?h[X]:i.getParameter(X)}function Lt(X,bt){h[X]!==bt&&(i.pixelStorei(X,bt),h[X]=bt)}function _t(X){nt.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),nt.copy(X))}function xt(X){lt.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),lt.copy(X))}function Ft(X,bt){let ot=c.get(bt);ot===void 0&&(ot=new WeakMap,c.set(bt,ot));let vt=ot.get(X);vt===void 0&&(vt=i.getUniformBlockIndex(bt,X.name),ot.set(X,vt))}function kt(X,bt){let vt=c.get(bt).get(X);l.get(bt)!==vt&&(i.uniformBlockBinding(bt,vt,X.__bindingPointIndex),l.set(bt,vt))}function Zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},z=null,V={},f={},d=new WeakMap,p=[],x=null,g=!1,m=null,v=null,y=null,_=null,M=null,E=null,C=null,b=new j(0,0,0),S=0,T=!1,R=null,A=null,L=null,w=null,P=null,nt.set(0,0,i.canvas.width,i.canvas.height),lt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:q,disable:it,bindFramebuffer:ct,drawBuffers:ut,useProgram:Tt,setBlending:Wt,setMaterial:re,setFlipSided:Xt,setCullFace:Me,setLineWidth:ze,setPolygonOffset:ln,setScissorTest:we,activeTexture:Fe,bindTexture:Y,unbindTexture:Ze,compressedTexImage2D:me,compressedTexImage3D:k,texImage2D:rt,texImage3D:at,pixelStorei:Lt,getParameter:gt,updateUBOMapping:Ft,uniformBlockBinding:kt,texStorage2D:pt,texStorage3D:mt,texSubImage2D:I,texSubImage3D:Z,compressedTexSubImage2D:tt,compressedTexSubImage3D:st,scissor:_t,viewport:xt,reset:Zt}}function y_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new te,u=new WeakMap,h=new Set,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(k,I){return p?new OffscreenCanvas(k,I):Ps("canvas")}function g(k,I,Z){let tt=1,st=me(k);if((st.width>Z||st.height>Z)&&(tt=Z/Math.max(st.width,st.height)),tt<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){let pt=Math.floor(tt*st.width),mt=Math.floor(tt*st.height);f===void 0&&(f=x(pt,mt));let rt=I?x(pt,mt):f;return rt.width=pt,rt.height=mt,rt.getContext("2d").drawImage(k,0,0,pt,mt),zt("WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+pt+"x"+mt+")."),rt}else return"data"in k&&zt("WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),k;return k}function m(k){return k.generateMipmaps}function v(k){i.generateMipmap(k)}function y(k){return k.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?i.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(k,I,Z,tt,st,pt=!1){if(k!==null){if(i[k]!==void 0)return i[k];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let mt;tt&&(mt=t.get("EXT_texture_norm16"),mt||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let rt=I;if(I===i.RED&&(Z===i.FLOAT&&(rt=i.R32F),Z===i.HALF_FLOAT&&(rt=i.R16F),Z===i.UNSIGNED_BYTE&&(rt=i.R8),Z===i.UNSIGNED_SHORT&&mt&&(rt=mt.R16_EXT),Z===i.SHORT&&mt&&(rt=mt.R16_SNORM_EXT)),I===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(rt=i.R8UI),Z===i.UNSIGNED_SHORT&&(rt=i.R16UI),Z===i.UNSIGNED_INT&&(rt=i.R32UI),Z===i.BYTE&&(rt=i.R8I),Z===i.SHORT&&(rt=i.R16I),Z===i.INT&&(rt=i.R32I)),I===i.RG&&(Z===i.FLOAT&&(rt=i.RG32F),Z===i.HALF_FLOAT&&(rt=i.RG16F),Z===i.UNSIGNED_BYTE&&(rt=i.RG8),Z===i.UNSIGNED_SHORT&&mt&&(rt=mt.RG16_EXT),Z===i.SHORT&&mt&&(rt=mt.RG16_SNORM_EXT)),I===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(rt=i.RG8UI),Z===i.UNSIGNED_SHORT&&(rt=i.RG16UI),Z===i.UNSIGNED_INT&&(rt=i.RG32UI),Z===i.BYTE&&(rt=i.RG8I),Z===i.SHORT&&(rt=i.RG16I),Z===i.INT&&(rt=i.RG32I)),I===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),Z===i.UNSIGNED_INT&&(rt=i.RGB32UI),Z===i.BYTE&&(rt=i.RGB8I),Z===i.SHORT&&(rt=i.RGB16I),Z===i.INT&&(rt=i.RGB32I)),I===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),Z===i.UNSIGNED_INT&&(rt=i.RGBA32UI),Z===i.BYTE&&(rt=i.RGBA8I),Z===i.SHORT&&(rt=i.RGBA16I),Z===i.INT&&(rt=i.RGBA32I)),I===i.RGB&&(Z===i.UNSIGNED_SHORT&&mt&&(rt=mt.RGB16_EXT),Z===i.SHORT&&mt&&(rt=mt.RGB16_SNORM_EXT),Z===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),Z===i.UNSIGNED_INT_10F_11F_11F_REV&&(rt=i.R11F_G11F_B10F)),I===i.RGBA){let at=pt?ur:oe.getTransfer(st);Z===i.FLOAT&&(rt=i.RGBA32F),Z===i.HALF_FLOAT&&(rt=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(rt=at===pe?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT&&mt&&(rt=mt.RGBA16_EXT),Z===i.SHORT&&mt&&(rt=mt.RGBA16_SNORM_EXT),Z===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function M(k,I){let Z;return k?I===null||I===Pn||I===Vs?Z=i.DEPTH24_STENCIL8:I===In?Z=i.DEPTH32F_STENCIL8:I===zs&&(Z=i.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===Pn||I===Vs?Z=i.DEPTH_COMPONENT24:I===In?Z=i.DEPTH_COMPONENT32F:I===zs&&(Z=i.DEPTH_COMPONENT16),Z}function E(k,I){return m(k)===!0||k.isFramebufferTexture&&k.minFilter!==Ge&&k.minFilter!==Xe?Math.log2(Math.max(I.width,I.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?I.mipmaps.length:1}function C(k){let I=k.target;I.removeEventListener("dispose",C),S(I),I.isVideoTexture&&u.delete(I),I.isHTMLTexture&&h.delete(I)}function b(k){let I=k.target;I.removeEventListener("dispose",b),R(I)}function S(k){let I=n.get(k);if(I.__webglInit===void 0)return;let Z=k.source,tt=d.get(Z);if(tt){let st=tt[I.__cacheKey];st.usedTimes--,st.usedTimes===0&&T(k),Object.keys(tt).length===0&&d.delete(Z)}n.remove(k)}function T(k){let I=n.get(k);i.deleteTexture(I.__webglTexture);let Z=k.source,tt=d.get(Z);delete tt[I.__cacheKey],o.memory.textures--}function R(k){let I=n.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),n.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(I.__webglFramebuffer[tt]))for(let st=0;st<I.__webglFramebuffer[tt].length;st++)i.deleteFramebuffer(I.__webglFramebuffer[tt][st]);else i.deleteFramebuffer(I.__webglFramebuffer[tt]);I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer[tt])}else{if(Array.isArray(I.__webglFramebuffer))for(let tt=0;tt<I.__webglFramebuffer.length;tt++)i.deleteFramebuffer(I.__webglFramebuffer[tt]);else i.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&i.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let tt=0;tt<I.__webglColorRenderbuffer.length;tt++)I.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(I.__webglColorRenderbuffer[tt]);I.__webglDepthRenderbuffer&&i.deleteRenderbuffer(I.__webglDepthRenderbuffer)}let Z=k.textures;for(let tt=0,st=Z.length;tt<st;tt++){let pt=n.get(Z[tt]);pt.__webglTexture&&(i.deleteTexture(pt.__webglTexture),o.memory.textures--),n.remove(Z[tt])}n.remove(k)}let A=0;function L(){A=0}function w(){return A}function P(k){A=k}function F(){let k=A;return k>=s.maxTextures&&zt("WebGLTextures: Trying to use "+(k+1)+" texture units while this GPU supports only "+s.maxTextures),A+=1,k}function N(k){let I=[];return I.push(k.wrapS),I.push(k.wrapT),I.push(k.wrapR||0),I.push(k.magFilter),I.push(k.minFilter),I.push(k.anisotropy),I.push(k.internalFormat),I.push(k.format),I.push(k.type),I.push(k.generateMipmaps),I.push(k.premultiplyAlpha),I.push(k.flipY),I.push(k.unpackAlignment),I.push(k.colorSpace),I.join()}function B(k,I){let Z=n.get(k);if(k.isVideoTexture&&Y(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&Z.__version!==k.version){let tt=k.image;if(tt===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{it(Z,k,I);return}}else k.isExternalTexture&&(Z.__webglTexture=k.sourceTexture?k.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+I)}function O(k,I){let Z=n.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&Z.__version!==k.version){it(Z,k,I);return}else k.isExternalTexture&&(Z.__webglTexture=k.sourceTexture?k.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+I)}function z(k,I){let Z=n.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&Z.__version!==k.version){it(Z,k,I);return}e.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+I)}function V(k,I){let Z=n.get(k);if(k.isCubeDepthTexture!==!0&&k.version>0&&Z.__version!==k.version){ct(Z,k,I);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+I)}let Q={[Yi]:i.REPEAT,[pn]:i.CLAMP_TO_EDGE,[Qo]:i.MIRRORED_REPEAT},G={[Ge]:i.NEAREST,[yf]:i.NEAREST_MIPMAP_NEAREST,[Ir]:i.NEAREST_MIPMAP_LINEAR,[Xe]:i.LINEAR,[Ra]:i.LINEAR_MIPMAP_NEAREST,[Ai]:i.LINEAR_MIPMAP_LINEAR},nt={[Tf]:i.NEVER,[Pf]:i.ALWAYS,[Ef]:i.LESS,[hl]:i.LEQUAL,[Af]:i.EQUAL,[fl]:i.GEQUAL,[Rf]:i.GREATER,[Cf]:i.NOTEQUAL};function lt(k,I){if(I.type===In&&t.has("OES_texture_float_linear")===!1&&(I.magFilter===Xe||I.magFilter===Ra||I.magFilter===Ir||I.magFilter===Ai||I.minFilter===Xe||I.minFilter===Ra||I.minFilter===Ir||I.minFilter===Ai)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(k,i.TEXTURE_WRAP_S,Q[I.wrapS]),i.texParameteri(k,i.TEXTURE_WRAP_T,Q[I.wrapT]),(k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY)&&i.texParameteri(k,i.TEXTURE_WRAP_R,Q[I.wrapR]),i.texParameteri(k,i.TEXTURE_MAG_FILTER,G[I.magFilter]),i.texParameteri(k,i.TEXTURE_MIN_FILTER,G[I.minFilter]),I.compareFunction&&(i.texParameteri(k,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(k,i.TEXTURE_COMPARE_FUNC,nt[I.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===Ge||I.minFilter!==Ir&&I.minFilter!==Ai||I.type===In&&t.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||n.get(I).__currentAnisotropy){let Z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(k,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,s.getMaxAnisotropy())),n.get(I).__currentAnisotropy=I.anisotropy}}}function dt(k,I){let Z=!1;k.__webglInit===void 0&&(k.__webglInit=!0,I.addEventListener("dispose",C));let tt=I.source,st=d.get(tt);st===void 0&&(st={},d.set(tt,st));let pt=N(I);if(pt!==k.__cacheKey){st[pt]===void 0&&(st[pt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),st[pt].usedTimes++;let mt=st[k.__cacheKey];mt!==void 0&&(st[k.__cacheKey].usedTimes--,mt.usedTimes===0&&T(I)),k.__cacheKey=pt,k.__webglTexture=st[pt].texture}return Z}function $(k,I,Z){return Math.floor(Math.floor(k/Z)/I)}function q(k,I,Z,tt){let pt=k.updateRanges;if(pt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,I.width,I.height,Z,tt,I.data);else{pt.sort((Lt,_t)=>Lt.start-_t.start);let mt=0;for(let Lt=1;Lt<pt.length;Lt++){let _t=pt[mt],xt=pt[Lt],Ft=_t.start+_t.count,kt=$(xt.start,I.width,4),Zt=$(_t.start,I.width,4);xt.start<=Ft+1&&kt===Zt&&$(xt.start+xt.count-1,I.width,4)===kt?_t.count=Math.max(_t.count,xt.start+xt.count-_t.start):(++mt,pt[mt]=xt)}pt.length=mt+1;let rt=e.getParameter(i.UNPACK_ROW_LENGTH),at=e.getParameter(i.UNPACK_SKIP_PIXELS),gt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,I.width);for(let Lt=0,_t=pt.length;Lt<_t;Lt++){let xt=pt[Lt],Ft=Math.floor(xt.start/4),kt=Math.ceil(xt.count/4),Zt=Ft%I.width,X=Math.floor(Ft/I.width),bt=kt,ot=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Zt),e.pixelStorei(i.UNPACK_SKIP_ROWS,X),e.texSubImage2D(i.TEXTURE_2D,0,Zt,X,bt,ot,Z,tt,I.data)}k.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,rt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,at),e.pixelStorei(i.UNPACK_SKIP_ROWS,gt)}}function it(k,I,Z){let tt=i.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),I.isData3DTexture&&(tt=i.TEXTURE_3D);let st=dt(k,I),pt=I.source;e.bindTexture(tt,k.__webglTexture,i.TEXTURE0+Z);let mt=n.get(pt);if(pt.version!==mt.__version||st===!0){if(e.activeTexture(i.TEXTURE0+Z),(typeof ImageBitmap<"u"&&I.image instanceof ImageBitmap)===!1){let ot=oe.getPrimaries(oe.workingColorSpace),vt=I.colorSpace===si?null:oe.getPrimaries(I.colorSpace),wt=I.colorSpace===si||ot===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt)}e.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment);let at=g(I.image,!1,s.maxTextureSize);at=Ze(I,at);let gt=r.convert(I.format,I.colorSpace),Lt=r.convert(I.type),_t=_(I.internalFormat,gt,Lt,I.normalized,I.colorSpace,I.isVideoTexture);lt(tt,I);let xt,Ft=I.mipmaps,kt=I.isVideoTexture!==!0,Zt=mt.__version===void 0||st===!0,X=pt.dataReady,bt=E(I,at);if(I.isDepthTexture)_t=M(I.format===Ri,I.type),Zt&&(kt?e.texStorage2D(i.TEXTURE_2D,1,_t,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,_t,at.width,at.height,0,gt,Lt,null));else if(I.isDataTexture)if(Ft.length>0){kt&&Zt&&e.texStorage2D(i.TEXTURE_2D,bt,_t,Ft[0].width,Ft[0].height);for(let ot=0,vt=Ft.length;ot<vt;ot++)xt=Ft[ot],kt?X&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,xt.width,xt.height,gt,Lt,xt.data):e.texImage2D(i.TEXTURE_2D,ot,_t,xt.width,xt.height,0,gt,Lt,xt.data);I.generateMipmaps=!1}else kt?(Zt&&e.texStorage2D(i.TEXTURE_2D,bt,_t,at.width,at.height),X&&q(I,at,gt,Lt)):e.texImage2D(i.TEXTURE_2D,0,_t,at.width,at.height,0,gt,Lt,at.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){kt&&Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,_t,Ft[0].width,Ft[0].height,at.depth);for(let ot=0,vt=Ft.length;ot<vt;ot++)if(xt=Ft[ot],I.format!==_n)if(gt!==null)if(kt){if(X)if(I.layerUpdates.size>0){let wt=nu(xt.width,xt.height,I.format,I.type);for(let ht of I.layerUpdates){let Dt=xt.data.subarray(ht*wt/xt.data.BYTES_PER_ELEMENT,(ht+1)*wt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,ht,xt.width,xt.height,1,gt,Dt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,xt.width,xt.height,at.depth,gt,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,_t,xt.width,xt.height,at.depth,0,xt.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?X&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,xt.width,xt.height,at.depth,gt,Lt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,_t,xt.width,xt.height,at.depth,0,gt,Lt,xt.data);I.layerUpdates.size>0&&I.clearLayerUpdates()}else{kt&&Zt&&e.texStorage2D(i.TEXTURE_2D,bt,_t,Ft[0].width,Ft[0].height);for(let ot=0,vt=Ft.length;ot<vt;ot++)xt=Ft[ot],I.format!==_n?gt!==null?kt?X&&e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,xt.width,xt.height,gt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,_t,xt.width,xt.height,0,xt.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?X&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,xt.width,xt.height,gt,Lt,xt.data):e.texImage2D(i.TEXTURE_2D,ot,_t,xt.width,xt.height,0,gt,Lt,xt.data)}else if(I.isDataArrayTexture)if(kt){if(Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,_t,at.width,at.height,at.depth),X)if(I.layerUpdates.size>0){let ot=nu(at.width,at.height,I.format,I.type);for(let vt of I.layerUpdates){let wt=at.data.subarray(vt*ot/at.data.BYTES_PER_ELEMENT,(vt+1)*ot/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,vt,at.width,at.height,1,gt,Lt,wt)}I.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,gt,Lt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,_t,at.width,at.height,at.depth,0,gt,Lt,at.data);else if(I.isData3DTexture)kt?(Zt&&e.texStorage3D(i.TEXTURE_3D,bt,_t,at.width,at.height,at.depth),X&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,gt,Lt,at.data)):e.texImage3D(i.TEXTURE_3D,0,_t,at.width,at.height,at.depth,0,gt,Lt,at.data);else if(I.isFramebufferTexture){if(Zt)if(kt)e.texStorage2D(i.TEXTURE_2D,bt,_t,at.width,at.height);else{let ot=at.width,vt=at.height;for(let wt=0;wt<bt;wt++)e.texImage2D(i.TEXTURE_2D,wt,_t,ot,vt,0,gt,Lt,null),ot>>=1,vt>>=1}}else if(I.isHTMLTexture){if("texElementImage2D"in i){let ot=i.canvas;if(ot.hasAttribute("layoutsubtree")||ot.setAttribute("layoutsubtree","true"),at.parentNode!==ot){ot.appendChild(at),h.add(I),ot.onpaint=vt=>{let wt=vt.changedElements;for(let ht of h)wt.includes(ht.image)&&(ht.needsUpdate=!0)},ot.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,at);else{let wt=i.RGBA,ht=i.RGBA,Dt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,wt,ht,Dt,at)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ft.length>0){if(kt&&Zt){let ot=me(Ft[0]);e.texStorage2D(i.TEXTURE_2D,bt,_t,ot.width,ot.height)}for(let ot=0,vt=Ft.length;ot<vt;ot++)xt=Ft[ot],kt?X&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,gt,Lt,xt):e.texImage2D(i.TEXTURE_2D,ot,_t,gt,Lt,xt);I.generateMipmaps=!1}else if(kt){if(Zt){let ot=me(at);e.texStorage2D(i.TEXTURE_2D,bt,_t,ot.width,ot.height)}X&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,Lt,at)}else e.texImage2D(i.TEXTURE_2D,0,_t,gt,Lt,at);m(I)&&v(tt),mt.__version=pt.version,I.onUpdate&&I.onUpdate(I)}k.__version=I.version}function ct(k,I,Z){if(I.image.length!==6)return;let tt=dt(k,I),st=I.source;e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+Z);let pt=n.get(st);if(st.version!==pt.__version||tt===!0){e.activeTexture(i.TEXTURE0+Z);let mt=oe.getPrimaries(oe.workingColorSpace),rt=I.colorSpace===si?null:oe.getPrimaries(I.colorSpace),at=I.colorSpace===si||mt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let gt=I.isCompressedTexture||I.image[0].isCompressedTexture,Lt=I.image[0]&&I.image[0].isDataTexture,_t=[];for(let ht=0;ht<6;ht++)!gt&&!Lt?_t[ht]=g(I.image[ht],!0,s.maxCubemapSize):_t[ht]=Lt?I.image[ht].image:I.image[ht],_t[ht]=Ze(I,_t[ht]);let xt=_t[0],Ft=r.convert(I.format,I.colorSpace),kt=r.convert(I.type),Zt=_(I.internalFormat,Ft,kt,I.normalized,I.colorSpace),X=I.isVideoTexture!==!0,bt=pt.__version===void 0||tt===!0,ot=st.dataReady,vt=E(I,xt);lt(i.TEXTURE_CUBE_MAP,I);let wt;if(gt){X&&bt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Zt,xt.width,xt.height);for(let ht=0;ht<6;ht++){wt=_t[ht].mipmaps;for(let Dt=0;Dt<wt.length;Dt++){let Pt=wt[Dt];I.format!==_n?Ft!==null?X?ot&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Dt,0,0,Pt.width,Pt.height,Ft,Pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Dt,Zt,Pt.width,Pt.height,0,Pt.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Dt,0,0,Pt.width,Pt.height,Ft,kt,Pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Dt,Zt,Pt.width,Pt.height,0,Ft,kt,Pt.data)}}}else{if(wt=I.mipmaps,X&&bt){wt.length>0&&vt++;let ht=me(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Zt,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(Lt){X?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,_t[ht].width,_t[ht].height,Ft,kt,_t[ht].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Zt,_t[ht].width,_t[ht].height,0,Ft,kt,_t[ht].data);for(let Dt=0;Dt<wt.length;Dt++){let be=wt[Dt].image[ht].image;X?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Dt+1,0,0,be.width,be.height,Ft,kt,be.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Dt+1,Zt,be.width,be.height,0,Ft,kt,be.data)}}else{X?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Ft,kt,_t[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Zt,Ft,kt,_t[ht]);for(let Dt=0;Dt<wt.length;Dt++){let Pt=wt[Dt];X?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Dt+1,0,0,Ft,kt,Pt.image[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Dt+1,Zt,Ft,kt,Pt.image[ht])}}}m(I)&&v(i.TEXTURE_CUBE_MAP),pt.__version=st.version,I.onUpdate&&I.onUpdate(I)}k.__version=I.version}function ut(k,I,Z,tt,st,pt){let mt=r.convert(Z.format,Z.colorSpace),rt=r.convert(Z.type),at=_(Z.internalFormat,mt,rt,Z.normalized,Z.colorSpace),gt=n.get(I),Lt=n.get(Z);if(Lt.__renderTarget=I,!gt.__hasExternalTextures){let _t=Math.max(1,I.width>>pt),xt=Math.max(1,I.height>>pt);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,pt,at,_t,xt,I.depth,0,mt,rt,null):e.texImage2D(st,pt,at,_t,xt,0,mt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,k),Fe(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,st,Lt.__webglTexture,0,we(I)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,st,Lt.__webglTexture,pt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(k,I,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,k),I.depthBuffer){let tt=I.depthTexture,st=tt&&tt.isDepthTexture?tt.type:null,pt=M(I.stencilBuffer,st),mt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Fe(I)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we(I),pt,I.width,I.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,we(I),pt,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,pt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,k)}else{let tt=I.textures;for(let st=0;st<tt.length;st++){let pt=tt[st],mt=r.convert(pt.format,pt.colorSpace),rt=r.convert(pt.type),at=_(pt.internalFormat,mt,rt,pt.normalized,pt.colorSpace);Fe(I)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we(I),at,I.width,I.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,we(I),at,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,at,I.width,I.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Vt(k,I,Z){let tt=I.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,k),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let st=n.get(I.depthTexture);if(st.__renderTarget=I,(!st.__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),tt){if(st.__webglInit===void 0&&(st.__webglInit=!0,I.depthTexture.addEventListener("dispose",C)),st.__webglTexture===void 0){st.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),lt(i.TEXTURE_CUBE_MAP,I.depthTexture);let gt=r.convert(I.depthTexture.format),Lt=r.convert(I.depthTexture.type),_t;I.depthTexture.format===Bn?_t=i.DEPTH_COMPONENT24:I.depthTexture.format===Ri&&(_t=i.DEPTH24_STENCIL8);for(let xt=0;xt<6;xt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,_t,I.width,I.height,0,gt,Lt,null)}}else B(I.depthTexture,0);let pt=st.__webglTexture,mt=we(I),rt=tt?i.TEXTURE_CUBE_MAP_POSITIVE_X+Z:i.TEXTURE_2D,at=I.depthTexture.format===Ri?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(I.depthTexture.format===Bn)Fe(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,rt,pt,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,at,rt,pt,0);else if(I.depthTexture.format===Ri)Fe(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,rt,pt,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,at,rt,pt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Nt(k){let I=n.get(k),Z=k.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==k.depthTexture){let tt=k.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),tt){let st=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,tt.removeEventListener("dispose",st)};tt.addEventListener("dispose",st),I.__depthDisposeCallback=st}I.__boundDepthTexture=tt}if(k.depthTexture&&!I.__autoAllocateDepthBuffer)if(Z)for(let tt=0;tt<6;tt++)Vt(I.__webglFramebuffer[tt],k,tt);else{let tt=k.texture.mipmaps;tt&&tt.length>0?Vt(I.__webglFramebuffer[0],k,0):Vt(I.__webglFramebuffer,k,0)}else if(Z){I.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer[tt]),I.__webglDepthbuffer[tt]===void 0)I.__webglDepthbuffer[tt]=i.createRenderbuffer(),Tt(I.__webglDepthbuffer[tt],k,!1);else{let st=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=I.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,pt)}}else{let tt=k.texture.mipmaps;if(tt&&tt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=i.createRenderbuffer(),Tt(I.__webglDepthbuffer,k,!1);else{let st=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=I.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,pt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(k,I,Z){let tt=n.get(k);I!==void 0&&ut(tt.__webglFramebuffer,k,k.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&Nt(k)}function re(k){let I=k.texture,Z=n.get(k),tt=n.get(I);k.addEventListener("dispose",b);let st=k.textures,pt=k.isWebGLCubeRenderTarget===!0,mt=st.length>1;if(mt||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=I.version,o.memory.textures++),pt){Z.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(I.mipmaps&&I.mipmaps.length>0){Z.__webglFramebuffer[rt]=[];for(let at=0;at<I.mipmaps.length;at++)Z.__webglFramebuffer[rt][at]=i.createFramebuffer()}else Z.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(I.mipmaps&&I.mipmaps.length>0){Z.__webglFramebuffer=[];for(let rt=0;rt<I.mipmaps.length;rt++)Z.__webglFramebuffer[rt]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(mt)for(let rt=0,at=st.length;rt<at;rt++){let gt=n.get(st[rt]);gt.__webglTexture===void 0&&(gt.__webglTexture=i.createTexture(),o.memory.textures++)}if(k.samples>0&&Fe(k)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let rt=0;rt<st.length;rt++){let at=st[rt];Z.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[rt]);let gt=r.convert(at.format,at.colorSpace),Lt=r.convert(at.type),_t=_(at.internalFormat,gt,Lt,at.normalized,at.colorSpace,k.isXRRenderTarget===!0),xt=we(k);i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,_t,k.width,k.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,Z.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),k.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),Tt(Z.__webglDepthRenderbuffer,k,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(pt){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),lt(i.TEXTURE_CUBE_MAP,I);for(let rt=0;rt<6;rt++)if(I.mipmaps&&I.mipmaps.length>0)for(let at=0;at<I.mipmaps.length;at++)ut(Z.__webglFramebuffer[rt][at],k,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,at);else ut(Z.__webglFramebuffer[rt],k,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(I)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let rt=0,at=st.length;rt<at;rt++){let gt=st[rt],Lt=n.get(gt),_t=i.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(_t=k.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,Lt.__webglTexture),lt(_t,gt),ut(Z.__webglFramebuffer,k,gt,i.COLOR_ATTACHMENT0+rt,_t,0),m(gt)&&v(_t)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(rt=k.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,tt.__webglTexture),lt(rt,I),I.mipmaps&&I.mipmaps.length>0)for(let at=0;at<I.mipmaps.length;at++)ut(Z.__webglFramebuffer[at],k,I,i.COLOR_ATTACHMENT0,rt,at);else ut(Z.__webglFramebuffer,k,I,i.COLOR_ATTACHMENT0,rt,0);m(I)&&v(rt),e.unbindTexture()}k.depthBuffer&&Nt(k)}function Xt(k){let I=k.textures;for(let Z=0,tt=I.length;Z<tt;Z++){let st=I[Z];if(m(st)){let pt=y(k),mt=n.get(st).__webglTexture;e.bindTexture(pt,mt),v(pt),e.unbindTexture()}}}let Me=[],ze=[];function ln(k){if(k.samples>0){if(Fe(k)===!1){let I=k.textures,Z=k.width,tt=k.height,st=i.COLOR_BUFFER_BIT,pt=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(k),rt=I.length>1;if(rt)for(let gt=0;gt<I.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);let at=k.texture.mipmaps;at&&at.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let gt=0;gt<I.length;gt++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[gt]);let Lt=n.get(I[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Lt,0)}i.blitFramebuffer(0,0,Z,tt,0,0,Z,tt,st,i.NEAREST),l===!0&&(Me.length=0,ze.length=0,Me.push(i.COLOR_ATTACHMENT0+gt),k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&(Me.push(pt),ze.push(pt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ze)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Me))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let gt=0;gt<I.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,mt.__webglColorRenderbuffer[gt]);let Lt=n.get(I[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&l){let I=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[I])}}}function we(k){return Math.min(s.maxSamples,k.samples)}function Fe(k){let I=n.get(k);return k.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function Y(k){let I=o.render.frame;u.get(k)!==I&&(u.set(k,I),k.update())}function Ze(k,I){let Z=k.colorSpace,tt=k.format,st=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||Z!==cr&&Z!==si&&(oe.getTransfer(Z)===pe?(tt!==_n||st!==gn)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",Z)),I}function me(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(c.width=k.naturalWidth||k.width,c.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(c.width=k.displayWidth,c.height=k.displayHeight):(c.width=k.width,c.height=k.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=L,this.getTextureUnits=w,this.setTextureUnits=P,this.setTexture2D=B,this.setTexture2DArray=O,this.setTexture3D=z,this.setTextureCube=V,this.rebindTextures=Wt,this.setupRenderTarget=re,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=Fe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function M_(i,t){function e(n,s=si){let r,o=oe.getTransfer(s);if(n===gn)return i.UNSIGNED_BYTE;if(n===Pa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ia)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gc)return i.BYTE;if(n===Hc)return i.SHORT;if(n===zs)return i.UNSIGNED_SHORT;if(n===Ca)return i.INT;if(n===Pn)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===Ln)return i.HALF_FLOAT;if(n===Yc)return i.ALPHA;if(n===qc)return i.RGB;if(n===_n)return i.RGBA;if(n===Bn)return i.DEPTH_COMPONENT;if(n===Ri)return i.DEPTH_STENCIL;if(n===$c)return i.RED;if(n===La)return i.RED_INTEGER;if(n===Ci)return i.RG;if(n===Fa)return i.RG_INTEGER;if(n===Da)return i.RGBA_INTEGER;if(n===Lr||n===Fr||n===Dr||n===Nr)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Na||n===Ua||n===Oa||n===Ba)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Na)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ka||n===za||n===Va||n===Ga||n===Ha||n===Ur||n===Wa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ka||n===za)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Va)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ga)return r.COMPRESSED_R11_EAC;if(n===Ha)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ur)return r.COMPRESSED_RG11_EAC;if(n===Wa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Xa||n===Ya||n===qa||n===$a||n===Za||n===Ja||n===Ka||n===ja||n===Qa||n===tl||n===el||n===nl||n===il||n===sl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ya)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$a)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Za)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ja)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ka)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ja)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===el)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===il)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rl||n===ol||n===al)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===rl)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ol)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ll||n===cl||n===Or||n===ul)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ll)return r.COMPRESSED_RED_RGTC1_EXT;if(n===cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Or)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ul)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var S_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,w_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,yu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new xr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new nn({vertexShader:S_,fragmentShader:w_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ot(new ii(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mu=class extends kn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,p=null,x=typeof XRWebGLBinding<"u",g=new yu,m={},v=e.getContextAttributes(),y=null,_=null,M=[],E=[],C=new te,b=null,S=null,T=new Qe;T.viewport=new Ee;let R=new Qe;R.viewport=new Ee;let A=[T,R],L=new wa,w=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let q=M[$];return q===void 0&&(q=new Ds,M[$]=q),q.getTargetRaySpace()},this.getControllerGrip=function($){let q=M[$];return q===void 0&&(q=new Ds,M[$]=q),q.getGripSpace()},this.getHand=function($){let q=M[$];return q===void 0&&(q=new Ds,M[$]=q),q.getHandSpace()};function F($){let q=E.indexOf($.inputSource);if(q===-1)return;let it=M[q];it!==void 0&&(it.update($.inputSource,$.frame,c||o),it.dispatchEvent({type:$.type,data:$.inputSource}))}function N(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",B);for(let $=0;$<M.length;$++){let q=E[$];q!==null&&(E[$]=null,M[$].disconnect(q))}w=null,P=null,g.reset();for(let $ in m)delete m[$];if(t.setRenderTarget(y),d=null,f=null,h=null,s=null,_=null,dt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(C.width,C.height,!1),S!==null){let $=S.camera;$.fov=S.fov,$.zoom=S.zoom,$.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",N),s.addEventListener("inputsourceschange",B),v.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let it=null,ct=null,ut=null;v.depth&&(ut=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=v.stencil?Ri:Bn,ct=v.stencil?Vs:Pn);let Tt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Tt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new en(f.textureWidth,f.textureHeight,{format:_n,type:gn,depthTexture:new yi(f.textureWidth,f.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let it={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new en(d.framebufferWidth,d.framebufferHeight,{format:_n,type:gn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),dt.setContext(s),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function B($){for(let q=0;q<$.removed.length;q++){let it=$.removed[q],ct=E.indexOf(it);ct>=0&&(E[ct]=null,M[ct].disconnect(it))}for(let q=0;q<$.added.length;q++){let it=$.added[q],ct=E.indexOf(it);if(ct===-1){for(let Tt=0;Tt<M.length;Tt++)if(Tt>=E.length){E.push(it),ct=Tt;break}else if(E[Tt]===null){E[Tt]=it,ct=Tt;break}if(ct===-1)break}let ut=M[ct];ut&&ut.connect(it)}}let O=new H,z=new H;function V($,q,it){O.setFromMatrixPosition(q.matrixWorld),z.setFromMatrixPosition(it.matrixWorld);let ct=O.distanceTo(z),ut=q.projectionMatrix.elements,Tt=it.projectionMatrix.elements,Vt=ut[14]/(ut[10]-1),Nt=ut[14]/(ut[10]+1),Wt=(ut[9]+1)/ut[5],re=(ut[9]-1)/ut[5],Xt=(ut[8]-1)/ut[0],Me=(Tt[8]+1)/Tt[0],ze=Vt*Xt,ln=Vt*Me,we=ct/(-Xt+Me),Fe=we*-Xt;if(q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Fe),$.translateZ(we),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ut[10]===-1)$.projectionMatrix.copy(q.projectionMatrix),$.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{let Y=Vt+we,Ze=Nt+we,me=ze-Fe,k=ln+(ct-Fe),I=Wt*Nt/Ze*Y,Z=re*Nt/Ze*Y;$.projectionMatrix.makePerspective(me,k,I,Z,Y,Ze),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Q($,q){q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let q=$.near,it=$.far;g.texture!==null&&(g.depthNear>0&&(q=g.depthNear),g.depthFar>0&&(it=g.depthFar)),L.near=R.near=T.near=q,L.far=R.far=T.far=it,(w!==L.near||P!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),w=L.near,P=L.far),L.layers.mask=$.layers.mask|6,T.layers.mask=L.layers.mask&-5,R.layers.mask=L.layers.mask&-3;let ct=$.parent,ut=L.cameras;Q(L,ct);for(let Tt=0;Tt<ut.length;Tt++)Q(ut[Tt],ct);ut.length===2?V(L,T,R):L.projectionMatrix.copy(T.projectionMatrix),S===null&&$.isPerspectiveCamera&&(S={camera:$,fov:$.fov,zoom:$.zoom}),G($,L,ct)};function G($,q,it){it===null?$.matrix.copy(q.matrixWorld):($.matrix.copy(it.matrixWorld),$.matrix.invert(),$.matrix.multiply(q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(q.projectionMatrix),$.projectionMatrixInverse.copy(q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ea*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function($){return m[$]};let nt=null;function lt($,q){if(u=q.getViewerPose(c||o),p=q,u!==null){let it=u.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let ct=!1;it.length!==L.cameras.length&&(L.cameras.length=0,ct=!0);for(let Nt=0;Nt<it.length;Nt++){let Wt=it[Nt],re=null;if(d!==null)re=d.getViewport(Wt);else{let Me=h.getViewSubImage(f,Wt);re=Me.viewport,Nt===0&&(t.setRenderTargetTextures(_,Me.colorTexture,Me.depthStencilTexture),t.setRenderTarget(_))}let Xt=A[Nt];Xt===void 0&&(Xt=new Qe,Xt.layers.enable(Nt),Xt.viewport=new Ee,A[Nt]=Xt),Xt.matrix.fromArray(Wt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(Wt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(re.x,re.y,re.width,re.height),Nt===0&&(L.matrix.copy(Xt.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),ct===!0&&L.cameras.push(Xt)}let ut=s.enabledFeatures;if(ut&&ut.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let Nt=h.getDepthInformation(it[0]);Nt&&Nt.isValid&&Nt.texture&&g.init(Nt,s.renderState)}if(ut&&ut.includes("camera-access")&&x){t.state.unbindTexture(),h=n.getBinding();for(let Nt=0;Nt<it.length;Nt++){let Wt=it[Nt].camera;if(Wt){let re=m[Wt];re||(re=new xr,m[Wt]=re);let Xt=h.getCameraImage(Wt);re.sourceTexture=Xt}}}}for(let it=0;it<M.length;it++){let ct=E[it],ut=M[it];ct!==null&&ut!==void 0&&ut.update(ct,q,c||o)}nt&&nt($,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),p=null}let dt=new hd;dt.setAnimationLoop(lt),this.setAnimationLoop=function($){nt=$},this.dispose=function(){}}},T_=new Se,xd=new Yt;xd.set(-1,0,0,0,1,0,0,0,1);function E_(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Qc(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,v,y,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),h(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,_)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,v,y):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===$e&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===$e&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let v=t.get(m),y=v.envMap,_=v.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(T_.makeRotationFromEuler(_)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(xd),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=y*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===$e&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let v=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function A_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,M){let E=M.program;n.uniformBlockBinding(_,E)}function c(_,M){let E=s[_.id];E===void 0&&(g(_),E=u(_),s[_.id]=E,_.addEventListener("dispose",v));let C=M.program;n.updateUBOMapping(_,C);let b=t.render.frame;r[_.id]!==b&&(f(_),r[_.id]=b)}function u(_){let M=h();_.__bindingPointIndex=M;let E=i.createBuffer(),C=_.__size,b=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,C,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,E),E}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return Gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let M=s[_.id],E=_.uniforms,C=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let b=0,S=E.length;b<S;b++){let T=E[b];if(Array.isArray(T))for(let R=0,A=T.length;R<A;R++)d(T[R],b,R,C);else d(T,b,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,M,E,C){if(x(_,M,E,C)===!0){let b=_.__offset,S=_.value;if(Array.isArray(S)){let T=0;for(let R=0;R<S.length;R++){let A=S[R],L=m(A);p(A,_.__data,T),typeof A!="number"&&typeof A!="boolean"&&!A.isMatrix3&&!ArrayBuffer.isView(A)&&(T+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(S,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,_.__data)}}function p(_,M,E){typeof _=="number"||typeof _=="boolean"?M[0]=_:_.isMatrix3?(M[0]=_.elements[0],M[1]=_.elements[1],M[2]=_.elements[2],M[3]=0,M[4]=_.elements[3],M[5]=_.elements[4],M[6]=_.elements[5],M[7]=0,M[8]=_.elements[6],M[9]=_.elements[7],M[10]=_.elements[8],M[11]=0):ArrayBuffer.isView(_)?M.set(new _.constructor(_.buffer,_.byteOffset,M.length)):_.toArray(M,E)}function x(_,M,E,C){let b=_.value,S=M+"_"+E;if(C[S]===void 0)return typeof b=="number"||typeof b=="boolean"?C[S]=b:ArrayBuffer.isView(b)?C[S]=b.slice():C[S]=b.clone(),!0;{let T=C[S];if(typeof b=="number"||typeof b=="boolean"){if(T!==b)return C[S]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(T.equals(b)===!1)return T.copy(b),!0}}return!1}function g(_){let M=_.uniforms,E=0,C=16;for(let S=0,T=M.length;S<T;S++){let R=Array.isArray(M[S])?M[S]:[M[S]];for(let A=0,L=R.length;A<L;A++){let w=R[A],P=Array.isArray(w.value)?w.value:[w.value];for(let F=0,N=P.length;F<N;F++){let B=P[F],O=m(B),z=E%C,V=z%O.boundary,Q=z+V;E+=V,Q!==0&&C-Q<O.storage&&(E+=C-Q),w.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=E,E+=O.storage}}}let b=E%C;return b>0&&(E+=C-b),_.__size=E,_.__cache={},this}function m(_){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",_),M}function v(_){let M=_.target;M.removeEventListener("dispose",v);let E=o.indexOf(M.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function y(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:y}}var R_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Wn=null;function C_(){return Wn===null&&(Wn=new ra(R_,16,16,Ci,Ln),Wn.name="DFG_LUT",Wn.minFilter=Xe,Wn.magFilter=Xe,Wn.wrapS=pn,Wn.wrapT=pn,Wn.generateMipmaps=!1,Wn.needsUpdate=!0),Wn}var es=class{constructor(t={}){let{canvas:e=Lf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=gn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=d,g=new Set([Da,Fa,La]),m=new Set([gn,Pn,zs,Vs,Pa,Ia]),v=new Uint32Array(4),y=new Int32Array(4),_=new H,M=null,E=null,C=[],b=[],S=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,R=!1,A=null,L=null,w=null,P=null;this._outputColorSpace=Ie;let F=0,N=0,B=null,O=-1,z=null,V=new Ee,Q=new Ee,G=null,nt=new j(0),lt=0,dt=e.width,$=e.height,q=1,it=null,ct=null,ut=new Ee(0,0,dt,$),Tt=new Ee(0,0,dt,$),Vt=!1,Nt=new mr,Wt=!1,re=!1,Xt=new Se,Me=new H,ze=new Ee,ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},we=!1;function Fe(){return B===null?q:1}let Y=n;function Ze(D,W){return e.getContext(D,W)}let me,k,I,Z,tt,st,pt,mt,rt,at,gt,Lt,_t,xt,Ft,kt,Zt,X,bt,ot,vt,wt,ht;try{let D={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",be,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",Sn,!1),Y===null){let W="webgl2";if(Y=Ze(W,D),Y===null)throw Ze(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Dt()}catch(D){throw e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",Sn,!1),Gt("WebGLRenderer: "+D.message),D}function Dt(){me=new Ub(Y),me.init(),vt=new M_(Y,me),k=new Eb(Y,me,t,vt),I=new __(Y,me),k.reversedDepthBuffer&&f&&I.buffers.depth.setReversed(!0),L=Y.createFramebuffer(),w=Y.createFramebuffer(),P=Y.createFramebuffer(),Z=new kb(Y),tt=new o_,st=new y_(Y,me,I,tt,k,vt,Z),pt=new Nb(T),mt=new V0(Y),wt=new wb(Y,mt),rt=new Ob(Y,mt,Z,wt),at=new Vb(Y,rt,mt,wt,Z),X=new zb(Y,k,st),Ft=new Ab(tt),gt=new r_(T,pt,me,k,wt,Ft),Lt=new E_(T,tt),_t=new l_,xt=new p_(me),Zt=new Sb(T,pt,I,at,p,l),kt=new v_(T,at,k),ht=new A_(Y,Z,k,I),bt=new Tb(Y,me,Z),ot=new Bb(Y,me,Z),Z.programs=gt.programs,T.capabilities=k,T.extensions=me,T.properties=tt,T.renderLists=_t,T.shadowMap=kt,T.state=I,T.info=Z}x!==gn&&(S=new Hb(x,e.width,e.height,a,s,r));let Pt=new Mu(T,Y);this.xr=Pt,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){let D=me.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=me.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(D){D!==void 0&&(q=D,this.setSize(dt,$,!1))},this.getSize=function(D){return D.set(dt,$)},this.setSize=function(D,W,et=!0){if(Pt.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}dt=D,$=W,e.width=Math.floor(D*q),e.height=Math.floor(W*q),et===!0&&(e.style.width=D+"px",e.style.height=W+"px"),S!==null&&S.setSize(e.width,e.height),this.setViewport(0,0,D,W)},this.getDrawingBufferSize=function(D){return D.set(dt*q,$*q).floor()},this.setDrawingBufferSize=function(D,W,et){dt=D,$=W,q=et,e.width=Math.floor(D*et),e.height=Math.floor(W*et),this.setViewport(0,0,D,W)},this.setEffects=function(D){if(x===gn){Gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let W=0;W<D.length;W++)if(D[W].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(V)},this.getViewport=function(D){return D.copy(ut)},this.setViewport=function(D,W,et,J){D.isVector4?ut.set(D.x,D.y,D.z,D.w):ut.set(D,W,et,J),I.viewport(V.copy(ut).multiplyScalar(q).round())},this.getScissor=function(D){return D.copy(Tt)},this.setScissor=function(D,W,et,J){D.isVector4?Tt.set(D.x,D.y,D.z,D.w):Tt.set(D,W,et,J),I.scissor(Q.copy(Tt).multiplyScalar(q).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(D){I.setScissorTest(Vt=D)},this.setOpaqueSort=function(D){it=D},this.setTransparentSort=function(D){ct=D},this.getClearColor=function(D){return D.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(D=!0,W=!0,et=!0){let J=0;if(D){let K=!1;if(B!==null){let St=B.texture.format;K=g.has(St)}if(K){let St=B.texture.type,At=m.has(St),Mt=Zt.getClearColor(),Rt=Zt.getClearAlpha(),It=Mt.r,jt=Mt.g,ne=Mt.b;At?(v[0]=It,v[1]=jt,v[2]=ne,v[3]=Rt,Y.clearBufferuiv(Y.COLOR,0,v)):(y[0]=It,y[1]=jt,y[2]=ne,y[3]=Rt,Y.clearBufferiv(Y.COLOR,0,y))}else J|=Y.COLOR_BUFFER_BIT}W&&(J|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),et&&(J|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&Y.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(D){D.setRenderer(this),A=D},this.dispose=function(){e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",Sn,!1),Zt.dispose(),_t.dispose(),xt.dispose(),tt.dispose(),pt.dispose(),at.dispose(),wt.dispose(),ht.dispose(),gt.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",hh),Pt.removeEventListener("sessionend",fh),zi.stop()};function be(D){D.preventDefault(),jc("WebGLRenderer: Context Lost."),R=!0}function fe(){jc("WebGLRenderer: Context Restored."),R=!1;let D=Z.autoReset,W=kt.enabled,et=kt.autoUpdate,J=kt.needsUpdate,K=kt.type;Dt(),Z.autoReset=D,kt.enabled=W,kt.autoUpdate=et,kt.needsUpdate=J,kt.type=K}function Sn(D){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Nn(D){let W=D.target;W.removeEventListener("dispose",Nn),Nm(W)}function Nm(D){Um(D),tt.remove(D)}function Um(D){let W=tt.get(D).programs;W!==void 0&&(W.forEach(function(et){gt.releaseProgram(et)}),D.isShaderMaterial&&gt.releaseShaderCache(D))}this.renderBufferDirect=function(D,W,et,J,K,St){W===null&&(W=ln);let At=K.isMesh&&K.matrixWorld.determinantAffine()<0,Mt=km(D,W,et,J,K);I.setMaterial(J,At);let Rt=et.index,It=1;if(J.wireframe===!0){if(Rt=rt.getWireframeAttribute(et),Rt===void 0)return;It=2}let jt=et.drawRange,ne=et.attributes.position,Ct=jt.start*It,de=(jt.start+jt.count)*It;St!==null&&(Ct=Math.max(Ct,St.start*It),de=Math.min(de,(St.start+St.count)*It)),Rt!==null?(Ct=Math.max(Ct,0),de=Math.min(de,Rt.count)):ne!=null&&(Ct=Math.max(Ct,0),de=Math.min(de,ne.count));let De=de-Ct;if(De<0||De===1/0)return;wt.setup(K,J,Mt,et,Rt);let _e,xe=bt;if(Rt!==null&&(_e=mt.get(Rt),xe=ot,xe.setIndex(_e)),K.isMesh)J.wireframe===!0?(I.setLineWidth(J.wireframeLinewidth*Fe()),xe.setMode(Y.LINES)):xe.setMode(Y.TRIANGLES);else if(K.isLine){let Je=J.linewidth;Je===void 0&&(Je=1),I.setLineWidth(Je*Fe()),K.isLineSegments?xe.setMode(Y.LINES):K.isLineLoop?xe.setMode(Y.LINE_LOOP):xe.setMode(Y.LINE_STRIP)}else K.isPoints?xe.setMode(Y.POINTS):K.isSprite&&xe.setMode(Y.TRIANGLES);if(K.isBatchedMesh)if(me.get("WEBGL_multi_draw"))xe.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let Je=K._multiDrawStarts,Et=K._multiDrawCounts,on=K._multiDrawCount,le=Rt?mt.get(Rt).bytesPerElement:1,xn=tt.get(J).currentProgram.getUniforms();for(let Un=0;Un<on;Un++)xn.setValue(Y,"_gl_DrawID",Un),xe.render(Je[Un]/le,Et[Un])}else if(K.isInstancedMesh)xe.renderInstances(Ct,De,K.count);else if(et.isInstancedBufferGeometry){let Je=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Et=Math.min(et.instanceCount,Je);xe.renderInstances(Ct,De,Et)}else xe.render(Ct,De)};function uh(D,W,et,J){A!==null&&D.isNodeMaterial&&A.setObject(J,D),Wt===!0&&Ft.setState(D,et,!1),D.transparent===!0&&D.side===he&&D.forceSinglePass===!1?(D.side=$e,D.needsUpdate=!0,xo(D,W,J),D.side=Gn,D.needsUpdate=!0,xo(D,W,J),D.side=he):xo(D,W,J)}this.compile=function(D,W,et=null){et===null&&(et=D),A!==null&&A.renderStart(D,W,et),E=xt.get(et),E.init(W),b.push(E),et.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(E.pushLight(K),K.castShadow&&E.pushShadow(K))}),D!==et&&D.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(E.pushLight(K),K.castShadow&&E.pushShadow(K))}),E.setupLights(),A!==null&&A.updateLights(E.state.lightsArray),re=this.localClippingEnabled,Wt=Ft.init(this.clippingPlanes,re),Wt===!0&&Ft.setGlobalState(this.clippingPlanes,W),A!==null&&kt.render(E.state.shadowsArray,et,W);let J=new Set;return D.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let St=K.material;if(St)if(Array.isArray(St))for(let At=0;At<St.length;At++){let Mt=St[At];uh(Mt,et,W,K),J.add(Mt)}else uh(St,et,W,K),J.add(St)}),E=b.pop(),A!==null&&A.renderEnd(),J},this.compileAsync=function(D,W,et=null){let J=this.compile(D,W,et);return new Promise(K=>{function St(){if(J.forEach(function(At){let Rt=tt.get(At).currentProgram;(Rt===void 0||Rt.isReady())&&J.delete(At)}),J.size===0){K(D);return}setTimeout(St,10)}me.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let ql=null;function Om(D){ql&&ql(D)}function hh(){zi.stop()}function fh(){zi.start()}let zi=new hd;zi.setAnimationLoop(Om),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(D){ql=D,Pt.setAnimationLoop(D),D===null?zi.stop():zi.start()},Pt.addEventListener("sessionstart",hh),Pt.addEventListener("sessionend",fh),this.render=function(D,W){if(W!==void 0&&W.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;A!==null&&A.renderStart(D,W);let et=Pt.enabled===!0&&Pt.isPresenting===!0,J=S!==null&&(B===null||et)&&S.begin(T,B);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(W),W=Pt.getCamera()),D.isScene===!0&&D.onBeforeRender(T,D,W,B),E=xt.get(D,b.length),E.init(W),E.state.textureUnits=st.getTextureUnits(),b.push(E),Xt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Nt.setFromProjectionMatrix(Xt,Rn,W.reversedDepth),re=this.localClippingEnabled,Wt=Ft.init(this.clippingPlanes,re),M=_t.get(D,C.length),M.init(),C.push(M),Pt.enabled===!0&&Pt.isPresenting===!0){let At=T.xr.getDepthSensingMesh();At!==null&&$l(At,W,-1/0,T.sortObjects)}$l(D,W,0,T.sortObjects),M.finish(),A!==null&&A.updateLights(E.state.lightsArray),T.sortObjects===!0&&M.sort(it,ct),we=Pt.enabled===!1||Pt.isPresenting===!1||Pt.hasDepthSensing()===!1,we&&Zt.addToRenderList(M,D),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Wt===!0&&Ft.beginShadows();let K=E.state.shadowsArray;if(kt.render(K,D,W),Wt===!0&&Ft.endShadows(),(J&&S.hasRenderPass())===!1){let At=M.opaque,Mt=M.transmissive;if(E.setupLights(),W.isArrayCamera){let Rt=W.cameras;if(Mt.length>0)for(let It=0,jt=Rt.length;It<jt;It++){let ne=Rt[It];ph(At,Mt,D,ne)}we&&Zt.render(D);for(let It=0,jt=Rt.length;It<jt;It++){let ne=Rt[It];dh(M,D,ne,ne.viewport)}}else Mt.length>0&&ph(At,Mt,D,W),we&&Zt.render(D),dh(M,D,W)}B!==null&&N===0&&(st.updateMultisampleRenderTarget(B),st.updateRenderTargetMipmap(B)),J&&S.end(T),D.isScene===!0&&D.onAfterRender(T,D,W),wt.resetDefaultState(),O=-1,z=null,b.pop(),b.length>0?(E=b[b.length-1],st.setTextureUnits(E.state.textureUnits),Wt===!0&&Ft.setGlobalState(T.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?M=C[C.length-1]:M=null,A!==null&&A.renderEnd()};function $l(D,W,et,J){if(D.visible===!1)return;if(D.layers.test(W.layers)){if(D.isGroup)et=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(W);else if(D.isLightProbeGrid)E.pushLightProbeGrid(D);else if(D.isLight)E.pushLight(D),D.castShadow&&E.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||D.intersectsFrustum(Nt)){J&&ze.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Xt);let At=at.update(D),Mt=D.material;Mt.visible&&M.push(D,At,Mt,et,ze.z,null,W)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||D.intersectsFrustum(Nt))){let At=at.update(D),Mt=D.material;if(J&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),ze.copy(D.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),ze.copy(At.boundingSphere.center)),ze.applyMatrix4(D.matrixWorld).applyMatrix4(Xt)),Array.isArray(Mt)){let Rt=At.groups;for(let It=0,jt=Rt.length;It<jt;It++){let ne=Rt[It],Ct=Mt[ne.materialIndex];Ct&&Ct.visible&&M.push(D,At,Ct,et,ze.z,ne,W)}}else Mt.visible&&M.push(D,At,Mt,et,ze.z,null,W)}}let St=D.children;for(let At=0,Mt=St.length;At<Mt;At++)$l(St[At],W,et,J)}function dh(D,W,et,J){let{opaque:K,transmissive:St,transparent:At}=D;E.setupLightsView(et),Wt===!0&&Ft.setGlobalState(T.clippingPlanes,et),J&&I.viewport(V.copy(J)),K.length>0&&go(K,W,et),St.length>0&&go(St,W,et),At.length>0&&go(At,W,et),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function ph(D,W,et,J){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[J.id]===void 0){let Ct=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[J.id]=new en(1,1,{generateMipmaps:!0,type:Ct?Ln:gn,minFilter:Ai,samples:Math.max(4,k.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:oe.workingColorSpace})}let St=E.state.transmissionRenderTarget[J.id],At=J.viewport||V;St.setSize(At.z*T.transmissionResolutionScale,At.w*T.transmissionResolutionScale);let Mt=T.getRenderTarget(),Rt=T.getActiveCubeFace(),It=T.getActiveMipmapLevel();T.setRenderTarget(St),T.getClearColor(nt),lt=T.getClearAlpha(),lt<1&&T.setClearColor(16777215,.5),T.clear(),we&&Zt.render(et);let jt=T.toneMapping;T.toneMapping=Cn;let ne=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),E.setupLightsView(J),Wt===!0&&Ft.setGlobalState(T.clippingPlanes,J),go(D,et,J),st.updateMultisampleRenderTarget(St),st.updateRenderTargetMipmap(St),me.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let de=0,De=W.length;de<De;de++){let _e=W[de],{object:xe,geometry:Je,material:Et,group:on}=_e;if(Et.side===he&&xe.layers.test(J.layers)){let le=Et.side;Et.side=$e,Et.needsUpdate=!0,mh(xe,et,J,Je,Et,on),Et.side=le,Et.needsUpdate=!0,Ct=!0}}Ct===!0&&(st.updateMultisampleRenderTarget(St),st.updateRenderTargetMipmap(St))}T.setRenderTarget(Mt,Rt,It),T.setClearColor(nt,lt),ne!==void 0&&(J.viewport=ne),T.toneMapping=jt}function go(D,W,et){let J=W.isScene===!0?W.overrideMaterial:null;for(let K=0,St=D.length;K<St;K++){let At=D[K],{object:Mt,geometry:Rt,group:It}=At,jt=At.material;jt.allowOverride===!0&&J!==null&&(jt=J),Mt.layers.test(et.layers)&&mh(Mt,W,et,Rt,jt,It)}}function mh(D,W,et,J,K,St){A!==null&&K.isNodeMaterial&&A.setObject(D,K),D.onBeforeRender(T,W,et,J,K,St),D.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),K.onBeforeRender(T,W,et,J,D,St),K.transparent===!0&&K.side===he&&K.forceSinglePass===!1?(K.side=$e,K.needsUpdate=!0,T.renderBufferDirect(et,W,J,K,D,St),K.side=Gn,K.needsUpdate=!0,T.renderBufferDirect(et,W,J,K,D,St),K.side=he):T.renderBufferDirect(et,W,J,K,D,St),D.onAfterRender(T,W,et,J,K,St)}function xo(D,W,et){W.isScene!==!0&&(W=ln);let J=tt.get(D),K=E.state.lights,St=E.state.shadowsArray,At=K.state.version,Mt=gt.getParameters(D,K.state,St,W,et,E.state.lightProbeGridArray),Rt=gt.getProgramCacheKey(Mt),It=J.programs;J.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?W.environment:null,J.fog=W.fog;let jt=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;J.envMap=pt.get(D.envMap||J.environment,jt),J.envMapRotation=J.environment!==null&&D.envMap===null?W.environmentRotation:D.envMapRotation,It===void 0&&(D.addEventListener("dispose",Nn),It=new Map,J.programs=It);let ne=It.get(Rt);if(ne!==void 0){if(J.currentProgram===ne&&J.lightsStateVersion===At)return xh(D,Mt),ne}else Mt.uniforms=gt.getUniforms(D),A!==null&&D.isNodeMaterial&&A.build(D,et,Mt),D.onBeforeCompile(Mt,T),ne=gt.acquireProgram(Mt,Rt),It.set(Rt,ne),J.uniforms=Mt.uniforms;let Ct=J.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Ct.clippingPlanes=Ft.uniform),xh(D,Mt),J.needsLights=Vm(D),J.lightsStateVersion=At,J.needsLights&&(Ct.ambientLightColor.value=K.state.ambient,Ct.lightProbe.value=K.state.probe,Ct.sunLights.value=K.state.sun,Ct.sunLightShadows.value=K.state.sunShadow,Ct.directionalLights.value=K.state.directional,Ct.directionalLightShadows.value=K.state.directionalShadow,Ct.spotLights.value=K.state.spot,Ct.spotLightShadows.value=K.state.spotShadow,Ct.rectAreaLights.value=K.state.rectArea,Ct.ltc_1.value=K.state.rectAreaLTC1,Ct.ltc_2.value=K.state.rectAreaLTC2,Ct.pointLights.value=K.state.point,Ct.pointLightShadows.value=K.state.pointShadow,Ct.hemisphereLights.value=K.state.hemi,Ct.sunShadowMatrix.value=K.state.sunShadowMatrix,Ct.sunShadowCascade.value=K.state.sunShadowCascade,Ct.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ct.spotLightMatrix.value=K.state.spotLightMatrix,Ct.spotLightMap.value=K.state.spotLightMap,Ct.pointShadowMatrix.value=K.state.pointShadowMatrix),J.lightProbeGrid=E.state.lightProbeGridArray.length>0,J.currentProgram=ne,J.uniformsList=null,ne}function gh(D){if(D.uniformsList===null){let W=D.currentProgram.getUniforms();D.uniformsList=Ws.seqWithValue(W.seq,D.uniforms)}return D.uniformsList}function xh(D,W){let et=tt.get(D);et.outputColorSpace=W.outputColorSpace,et.batching=W.batching,et.batchingColor=W.batchingColor,et.instancing=W.instancing,et.instancingColor=W.instancingColor,et.instancingMorph=W.instancingMorph,et.skinning=W.skinning,et.morphTargets=W.morphTargets,et.morphNormals=W.morphNormals,et.morphColors=W.morphColors,et.morphTargetsCount=W.morphTargetsCount,et.numClippingPlanes=W.numClippingPlanes,et.numIntersection=W.numClipIntersection,et.vertexAlphas=W.vertexAlphas,et.vertexTangents=W.vertexTangents,et.toneMapping=W.toneMapping}function Bm(D,W){if(D.length===0)return null;if(D.length===1)return D[0].texture!==null?D[0]:null;_.setFromMatrixPosition(W.matrixWorld);for(let et=0,J=D.length;et<J;et++){let K=D[et];if(K.texture!==null&&K.boundingBox.containsPoint(_))return K}return null}function km(D,W,et,J,K){W.isScene!==!0&&(W=ln),st.resetTextureUnits();let St=W.fog,At=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?W.environment:null,Mt=B===null?T.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:oe.workingColorSpace,Rt=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,It=pt.get(J.envMap||At,Rt),jt=J.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,ne=!!et.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ct=!!et.morphAttributes.position,de=!!et.morphAttributes.normal,De=!!et.morphAttributes.color,_e=Cn;J.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(_e=T.toneMapping);let xe=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Je=xe!==void 0?xe.length:0,Et=tt.get(J),on=E.state.lights;if(Wt===!0&&(re===!0||D!==z)){let ve=D===z&&J.id===O;Ft.setState(J,D,ve)}let le=!1;J.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==on.state.version||Et.outputColorSpace!==Mt||K.isBatchedMesh&&Et.batching===!1||!K.isBatchedMesh&&Et.batching===!0||K.isBatchedMesh&&Et.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Et.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Et.instancing===!1||!K.isInstancedMesh&&Et.instancing===!0||K.isSkinnedMesh&&Et.skinning===!1||!K.isSkinnedMesh&&Et.skinning===!0||K.isInstancedMesh&&Et.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Et.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Et.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Et.instancingMorph===!1&&K.morphTexture!==null||Et.envMap!==It||J.fog===!0&&Et.fog!==St||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==Ft.numPlanes||Et.numIntersection!==Ft.numIntersection)||Et.vertexAlphas!==jt||Et.vertexTangents!==ne||Et.morphTargets!==Ct||Et.morphNormals!==de||Et.morphColors!==De||Et.toneMapping!==_e||Et.morphTargetsCount!==Je||!!Et.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(le=!0):(le=!0,Et.__version=J.version);let xn=Et.currentProgram;le===!0&&(xn=xo(J,W,K),A&&J.isNodeMaterial&&A.onUpdateProgram(J,xn,Et));let Un=!1,ci=!1,fs=!1,ge=xn.getUniforms(),Pe=Et.uniforms;if(I.useProgram(xn.program)&&(Un=!0,ci=!0,fs=!0),J.id!==O&&(O=J.id,ci=!0),Et.needsLights){let ve=Bm(E.state.lightProbeGridArray,K);Et.lightProbeGrid!==ve&&(Et.lightProbeGrid=ve,ci=!0)}if(Un||z!==D){I.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),ge.setValue(Y,"projectionMatrix",D.projectionMatrix),ge.setValue(Y,"viewMatrix",D.matrixWorldInverse);let hi=ge.map.cameraPosition;hi!==void 0&&hi.setValue(Y,Me.setFromMatrixPosition(D.matrixWorld)),k.logarithmicDepthBuffer&&ge.setValue(Y,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&ge.setValue(Y,"isOrthographic",D.isOrthographicCamera===!0),z!==D&&(z=D,ci=!0,fs=!0)}if(Et.needsLights&&(on.state.sunShadowMap.length>0&&ge.setValue(Y,"sunShadowMap",on.state.sunShadowMap,st),on.state.directionalShadowMap.length>0&&ge.setValue(Y,"directionalShadowMap",on.state.directionalShadowMap,st),on.state.spotShadowMap.length>0&&ge.setValue(Y,"spotShadowMap",on.state.spotShadowMap,st),on.state.pointShadowMap.length>0&&ge.setValue(Y,"pointShadowMap",on.state.pointShadowMap,st)),K.isSkinnedMesh){ge.setOptional(Y,K,"bindMatrix"),ge.setOptional(Y,K,"bindMatrixInverse");let ve=K.skeleton;ve&&(ve.boneTexture===null&&ve.computeBoneTexture(),ge.setValue(Y,"boneTexture",ve.boneTexture,st))}K.isBatchedMesh&&(ge.setOptional(Y,K,"batchingTexture"),ge.setValue(Y,"batchingTexture",K._matricesTexture,st),ge.setOptional(Y,K,"batchingIdTexture"),ge.setValue(Y,"batchingIdTexture",K._indirectTexture,st),ge.setOptional(Y,K,"batchingColorTexture"),K._colorsTexture!==null&&ge.setValue(Y,"batchingColorTexture",K._colorsTexture,st));let ui=et.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&X.update(K,et,xn),(ci||Et.receiveShadow!==K.receiveShadow)&&(Et.receiveShadow=K.receiveShadow,ge.setValue(Y,"receiveShadow",K.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&W.environment!==null&&(Pe.envMapIntensity.value=W.environmentIntensity),Pe.dfgLUT!==void 0&&(Pe.dfgLUT.value=C_()),ci){if(ge.setValue(Y,"toneMappingExposure",T.toneMappingExposure),Et.needsLights&&zm(Pe,fs),St&&J.fog===!0&&Lt.refreshFogUniforms(Pe,St),Lt.refreshMaterialUniforms(Pe,J,q,$,E.state.transmissionRenderTarget[D.id]),Et.needsLights&&Et.lightProbeGrid){let ve=Et.lightProbeGrid;Pe.probesSH.value=ve.texture,Pe.probesMin.value.copy(ve.boundingBox.min),Pe.probesMax.value.copy(ve.boundingBox.max),Pe.probesResolution.value.copy(ve.resolution)}Ws.upload(Y,gh(Et),Pe,st)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ws.upload(Y,gh(Et),Pe,st),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&ge.setValue(Y,"center",K.center),ge.setValue(Y,"modelViewMatrix",K.modelViewMatrix),ge.setValue(Y,"normalMatrix",K.normalMatrix),ge.setValue(Y,"modelMatrix",K.matrixWorld),J.uniformsGroups!==void 0){let ve=J.uniformsGroups;for(let hi=0,ds=ve.length;hi<ds;hi++){let vh=ve[hi];ht.update(vh,xn),ht.bind(vh,xn)}}return xn}function zm(D,W){D.ambientLightColor.needsUpdate=W,D.lightProbe.needsUpdate=W,D.sunLights.needsUpdate=W,D.sunLightShadows.needsUpdate=W,D.directionalLights.needsUpdate=W,D.directionalLightShadows.needsUpdate=W,D.pointLights.needsUpdate=W,D.pointLightShadows.needsUpdate=W,D.spotLights.needsUpdate=W,D.spotLightShadows.needsUpdate=W,D.rectAreaLights.needsUpdate=W,D.hemisphereLights.needsUpdate=W}function Vm(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(D,W,et){let J=tt.get(D);J.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),tt.get(D.texture).__webglTexture=W,tt.get(D.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:et,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,W){let et=tt.get(D);et.__webglFramebuffer=W,et.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(D,W=0,et=0){B=D,F=W,N=et;let J=null,K=!1,St=!1;if(D){let Mt=tt.get(D);if(Mt.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(Y.FRAMEBUFFER,Mt.__webglFramebuffer),V.copy(D.viewport),Q.copy(D.scissor),G=D.scissorTest,I.viewport(V),I.scissor(Q),I.setScissorTest(G),O=-1;return}else if(Mt.__webglFramebuffer===void 0)st.setupRenderTarget(D);else if(Mt.__hasExternalTextures)st.rebindTextures(D,tt.get(D.texture).__webglTexture,tt.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){let jt=D.depthTexture;if(Mt.__boundDepthTexture!==jt){if(jt!==null&&tt.has(jt)&&(D.width!==jt.image.width||D.height!==jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(D)}}let Rt=D.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(St=!0);let It=tt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(It[W])?J=It[W][et]:J=It[W],K=!0):D.samples>0&&st.useMultisampledRTT(D)===!1?J=tt.get(D).__webglMultisampledFramebuffer:Array.isArray(It)?J=It[et]:J=It,V.copy(D.viewport),Q.copy(D.scissor),G=D.scissorTest}else V.copy(ut).multiplyScalar(q).floor(),Q.copy(Tt).multiplyScalar(q).floor(),G=Vt;if(et!==0&&(J=L),I.bindFramebuffer(Y.FRAMEBUFFER,J)&&I.drawBuffers(D,J),I.viewport(V),I.scissor(Q),I.setScissorTest(G),K){let Mt=tt.get(D.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+W,Mt.__webglTexture,et)}else if(St){let Mt=W;for(let Rt=0;Rt<D.textures.length;Rt++){let It=tt.get(D.textures[Rt]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Rt,It.__webglTexture,et,Mt)}}else if(D!==null&&et!==0){let Mt=tt.get(D.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Mt.__webglTexture,et)}O=-1};function bh(D){let W=tt.get(D);return(W.__readFormat!==D.format||W.__readType!==D.type)&&(W.__readFormat=D.format,W.__readType=D.type,W.__formatReadable=k.textureFormatReadable(D.format),W.__typeReadable=k.textureTypeReadable(D.type)),W}this.readRenderTargetPixels=function(D,W,et,J,K,St,At,Mt=0){if(!(D&&D.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=tt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&At!==void 0&&(Rt=Rt[At]),Rt){I.bindFramebuffer(Y.FRAMEBUFFER,Rt);try{let It=D.textures[Mt],jt=It.format,ne=It.type;D.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Mt);let Ct=bh(It);if(Ct.__formatReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ct.__typeReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=D.width-J&&et>=0&&et<=D.height-K&&Y.readPixels(W,et,J,K,vt.convert(jt),vt.convert(ne),St)}finally{let It=B!==null?tt.get(B).__webglFramebuffer:null;I.bindFramebuffer(Y.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(D,W,et,J,K,St,At,Mt=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=tt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&At!==void 0&&(Rt=Rt[At]),Rt)if(W>=0&&W<=D.width-J&&et>=0&&et<=D.height-K){I.bindFramebuffer(Y.FRAMEBUFFER,Rt);let It=D.textures[Mt],jt=It.format,ne=It.type;D.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Mt);let Ct=bh(It);if(Ct.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ct.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let de=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,de),Y.bufferData(Y.PIXEL_PACK_BUFFER,St.byteLength,Y.STREAM_READ),Y.readPixels(W,et,J,K,vt.convert(jt),vt.convert(ne),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);let De=B!==null?tt.get(B).__webglFramebuffer:null;I.bindFramebuffer(Y.FRAMEBUFFER,De);let _e=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await Df(Y,_e,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,de),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,St),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(de),Y.deleteSync(_e),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,W=null,et=0){let J=Math.pow(2,-et),K=Math.floor(D.image.width*J),St=Math.floor(D.image.height*J),At=W!==null?W.x:0,Mt=W!==null?W.y:0;st.setTexture2D(D,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,et,0,0,At,Mt,K,St),I.unbindTexture()},this.copyTextureToTexture=function(D,W,et=null,J=null,K=0,St=0){let At,Mt,Rt,It,jt,ne,Ct,de,De,_e=D.isCompressedTexture?D.mipmaps[St]:D.image;if(et!==null)At=et.max.x-et.min.x,Mt=et.max.y-et.min.y,Rt=et.isBox3?et.max.z-et.min.z:1,It=et.min.x,jt=et.min.y,ne=et.isBox3?et.min.z:0;else{let Pe=Math.pow(2,-K);At=Math.floor(_e.width*Pe),Mt=Math.floor(_e.height*Pe),D.isDataArrayTexture?Rt=_e.depth:D.isData3DTexture?Rt=Math.floor(_e.depth*Pe):Rt=1,It=0,jt=0,ne=0}J!==null?(Ct=J.x,de=J.y,De=J.z):(Ct=0,de=0,De=0);let xe=vt.convert(W.format),Je=vt.convert(W.type),Et;W.isData3DTexture?(st.setTexture3D(W,0),Et=Y.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(st.setTexture2DArray(W,0),Et=Y.TEXTURE_2D_ARRAY):(st.setTexture2D(W,0),Et=Y.TEXTURE_2D),I.activeTexture(Y.TEXTURE0),I.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(Y.UNPACK_ALIGNMENT,W.unpackAlignment);let on=I.getParameter(Y.UNPACK_ROW_LENGTH),le=I.getParameter(Y.UNPACK_IMAGE_HEIGHT),xn=I.getParameter(Y.UNPACK_SKIP_PIXELS),Un=I.getParameter(Y.UNPACK_SKIP_ROWS),ci=I.getParameter(Y.UNPACK_SKIP_IMAGES);I.pixelStorei(Y.UNPACK_ROW_LENGTH,_e.width),I.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,_e.height),I.pixelStorei(Y.UNPACK_SKIP_PIXELS,It),I.pixelStorei(Y.UNPACK_SKIP_ROWS,jt),I.pixelStorei(Y.UNPACK_SKIP_IMAGES,ne);let fs=D.isDataArrayTexture||D.isData3DTexture,ge=W.isDataArrayTexture||W.isData3DTexture;if(D.isDepthTexture){let Pe=tt.get(D),ui=tt.get(W),ve=tt.get(Pe.__renderTarget),hi=tt.get(ui.__renderTarget);I.bindFramebuffer(Y.READ_FRAMEBUFFER,ve.__webglFramebuffer),I.bindFramebuffer(Y.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let ds=0;ds<Rt;ds++)fs&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,tt.get(D).__webglTexture,K,ne+ds),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,tt.get(W).__webglTexture,St,De+ds)),Y.blitFramebuffer(It,jt,At,Mt,Ct,de,At,Mt,Y.DEPTH_BUFFER_BIT,Y.NEAREST);I.bindFramebuffer(Y.READ_FRAMEBUFFER,null),I.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(K!==0||D.isRenderTargetTexture||tt.has(D)){let Pe=tt.get(D),ui=tt.get(W);I.bindFramebuffer(Y.READ_FRAMEBUFFER,w),I.bindFramebuffer(Y.DRAW_FRAMEBUFFER,P);for(let ve=0;ve<Rt;ve++)fs?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Pe.__webglTexture,K,ne+ve):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Pe.__webglTexture,K),ge?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ui.__webglTexture,St,De+ve):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,ui.__webglTexture,St),K!==0?Y.blitFramebuffer(It,jt,At,Mt,Ct,de,At,Mt,Y.COLOR_BUFFER_BIT,Y.NEAREST):ge?Y.copyTexSubImage3D(Et,St,Ct,de,De+ve,It,jt,At,Mt):Y.copyTexSubImage2D(Et,St,Ct,de,It,jt,At,Mt);I.bindFramebuffer(Y.READ_FRAMEBUFFER,null),I.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else ge?D.isDataTexture||D.isData3DTexture?Y.texSubImage3D(Et,St,Ct,de,De,At,Mt,Rt,xe,Je,_e.data):W.isCompressedArrayTexture?Y.compressedTexSubImage3D(Et,St,Ct,de,De,At,Mt,Rt,xe,_e.data):Y.texSubImage3D(Et,St,Ct,de,De,At,Mt,Rt,xe,Je,_e):D.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,St,Ct,de,At,Mt,xe,Je,_e.data):D.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,St,Ct,de,_e.width,_e.height,xe,_e.data):Y.texSubImage2D(Y.TEXTURE_2D,St,Ct,de,At,Mt,xe,Je,_e);I.pixelStorei(Y.UNPACK_ROW_LENGTH,on),I.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,le),I.pixelStorei(Y.UNPACK_SKIP_PIXELS,xn),I.pixelStorei(Y.UNPACK_SKIP_ROWS,Un),I.pixelStorei(Y.UNPACK_SKIP_IMAGES,ci),St===0&&W.generateMipmaps&&Y.generateMipmap(Et),I.unbindTexture()},this.initRenderTarget=function(D){tt.get(D).__webglFramebuffer===void 0&&st.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?st.setTextureCube(D,0):D.isData3DTexture?st.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?st.setTexture2DArray(D,0):st.setTexture2D(D,0),I.unbindTexture()},this.resetState=function(){F=0,N=0,B=null,I.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}};function bd(i){let t=i.length/3,e=new Float32Array(t);for(let n=0;n<t;n++){let s=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&s>0&&(e[n]=s)}return e}function vd(i,t,e,n){for(let s=e.start*3;s<e.end*3;s++){let r=t[s];r<=0||(i[s*3]=Math.min(1,n[0]*r),i[s*3+1]=Math.min(1,n[1]*r),i[s*3+2]=Math.min(1,n[2]*r))}}function _d(i){return i.shape==="cyl"&&(i.axis??"y")==="y"&&i.y>.9&&i.h<.02}var P_=[],Su=new Map,I_=0;function Gr(i){P_=i,Su=new Map(i.flatMap(t=>t.items.map(e=>[L_(t.id,e.id),e]))),I_++}function L_(i,t){return`pack:${i}:${t}`}function F_(i){return i.startsWith("pack:")}var D_={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function yd(i){return Ae(i)?.parts.find(t=>t.screen)}function Ae(i){if(!F_(i))return;let t=Su.get(i);if(t)return t;let[,e,...n]=i.split(":"),s=D_[e];return s?Su.get(`pack:${s}:${n.join(":")}`):void 0}function hn(i,t){let e=Ae(t.type);if(t.mount_y!=null)return t.mount_y;if(t.type==="lamp_wall")return vl;if(Md.has(t.type))return Math.max(0,i.height-Sd(t.type,t.h));if(t.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,t.h));switch(e?.mount){case"surface":return wd(i,t.x,t.z);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,i.height-t.h);default:return e?0:Hr(t)}}var yl={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function Pi(i){return i==="hedge"||i==="fence"||i==="pergola"}function U_(i,t,e){let n=i.slope??0;if(!n||i.type==="pool")return 0;let s=i.slope_dir??"x",r=(c,u)=>s==="x"?c:s==="-x"?-c:s==="z"?u:-u,o=1/0,a=-1/0;for(let[c,u]of i.points){let h=r(c,u);o=Math.min(o,h),a=Math.max(a,h)}if(a-o<1e-6)return 0;let l=Math.min(1,Math.max(0,(r(t,e)-o)/(a-o)));return n*l}function O_(i,t,e,n){return Wr(i,t)+yl[t.type]-Xr(i,t,e,n)}var wu=-.2,_l={set:!1,level:wu};function Td(i){let t=i?.settings.terrain??null;_l={set:t?.level!=null,level:t?.level??wu}}function Ml(i,t){return _l.level}function Ed(i){return i.elevation>.3?0:_l.set?_l.level-i.elevation:wu}function Wr(i,t){return Ed(i)+(t.offset??0)}function Xr(i,t,e,n){return t.type==="pool"?0:U_(t,e,n)}function Ad(i,t,e){let n=(i.outdoor??[]).filter(r=>!Pi(r.type)&&r.type!=="pool"&&Jt([t,e],r.points)),s=[...n].reverse().find(r=>r.cut)??n[0];return s?O_(i,s,t,e):Ed(i)}function Sl(i,t){return Wr(i,t)+(t.above?Cd(t):Math.min(2,Math.max(-.3,t.rim??.06)))}function B_(i){return i.depth&&i.depth>=.3?Math.min(5,i.depth):i.above?Cd(i):1.5}function Tu(i,t){return t.above?!1:(i.outdoor??[]).some(e=>e!==t&&e.type!=="pool"&&!Pi(e.type)&&!e.cut&&e.points.length>=3&&t.points.every(n=>Jt(n,e.points)))}function Rd(i,t){return!t.above&&!Tu(i,t)?wl(i,t)-.05:Sl(i,t)-B_(t)}function wl(i,t){return Sl(i,t)-.15}function Cd(i){return i.height&&i.height>.3?i.height:1.2}var k_={type:"none",pitch:35,overhang:.4},mT={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...k_}};var Pd=.3;var Id=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),vl=1.75;var Md=new Set(["lamp_downlight","lamp_spot"]);function Sd(i,t){return i==="lamp_spot"?Math.max(.06,t)+.008:.02}var Ld=new Set(["stairs","stairs_u"]);function Fd(i,t,e){let n=Math.max(4,Math.round(e/.18)),s=Math.floor(n/2)+1,r=s-1,o=n-s,a=Math.min(.12,i*.06),l=(i-a)/2,c=Math.min(l,t*.45),u=(t-c)/r;return{n,k:s,steps1:r,steps2:o,gap:a,fw:l,landing:c,run:u,rise:e/n}}function Dd(i){return Id.has(i)||!!Ae(i)?.light}var z_=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Hr(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function wd(i,t,e){let n=0;for(let s of i.furniture)!(z_.has(s.type)||Ae(s.type)?.surface)||!Jt([t,e],Ii(s))||(n=Math.max(n,s.h));return n}var N_=new Set([...Id,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var V_=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],G_=["standard","bars","glass_wall"];function ns(i,t){return i.type==="door"?i.style&&V_.includes(i.style)?i.style:t?"front":"interior":i.style&&G_.includes(i.style)?i.style:"standard"}function Nd(i,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let s=t==="sidelights",r=i-.04,o=Math.min(1.05,Math.max(.6,r-(s?.6:.3))),a=(r-o)/(s?2:1),l=n.sidelight_width??a,c=s?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=s?Math.max(.1,c):0;let u=r-.5;if(l+c>u){let f=Math.max(0,u)/(l+c);l*=f,c*=f}return s?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function Ud(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function Fn(i){let t=0;for(let e=0;e<i.length;e++){let[n,s]=i[e],[r,o]=i[(e+1)%i.length];t+=n*o-r*s}return t/2}function Yn(i){return Math.abs(Fn(i))}function is(i){let t=Fn(i);if(Math.abs(t)<1e-9){let s=i.length||1;return[i.reduce((r,o)=>r+o[0],0)/s,i.reduce((r,o)=>r+o[1],0)/s]}let e=0,n=0;for(let s=0;s<i.length;s++){let[r,o]=i[s],[a,l]=i[(s+1)%i.length],c=r*l-a*o;e+=(r+a)*c,n+=(o+l)*c}return[e/(6*t),n/(6*t)]}function Od(i){if(i.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=i[t],[s,r]=i[(t+1)%4];if(Math.abs(e-s)>1e-6&&Math.abs(n-r)>1e-6)return!1}return!0}function Bd(i){let t=1/0,e=1/0,n=-1/0,s=-1/0;for(let[r,o]of i)t=Math.min(t,r),e=Math.min(e,o),n=Math.max(n,r),s=Math.max(s,o);return{x0:t,z0:e,x1:n,z1:s}}function Ii(i){let t=i.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),s=i.w/2,r=i.d/2;return[[-s,-r],[s,-r],[s,r],[-s,r]].map(([o,a])=>[i.x+o*e-a*n,i.z+o*n+a*e])}function Jt(i,t){let e=!1;for(let n=0,s=t.length-1;n<t.length;s=n++){let[r,o]=t[n],[a,l]=t[s];o>i[1]!=l>i[1]&&i[0]<(a-r)*(i[1]-o)/(l-o)+r&&(e=!e)}return e}var He=(i,t)=>[i[0]-t[0],i[1]-t[1]],Li=(i,t)=>[i[0]+t[0],i[1]+t[1]],ri=(i,t)=>[i[0]*t,i[1]*t],qr=(i,t)=>i[0]*t[0]+i[1]*t[1],Ys=(i,t)=>i[0]*t[1]-i[1]*t[0],Yr=i=>Math.hypot(i[0],i[1]),qn=i=>{let t=Yr(i)||1;return[i[0]/t,i[1]/t]},kd=i=>[-i[1],i[0]],zd=i=>[i[1],-i[0]];function oi(i,t,e=[]){let n=t.eps??.005,s=[],r=e.filter(b=>Math.hypot(b.b[0]-b.a[0],b.b[1]-b.a[1])>.05),o=[],a=b=>{for(let S=0;S<o.length;S++)if(Math.abs(o[S][0]-b[0])<=n&&Math.abs(o[S][1]-b[1])<=n)return S;return o.push([b[0],b[1]]),o.length-1},l=[];for(let b of i){let S=b.points;if(S.length<3||Math.abs(Fn(S))<1e-6)continue;let T=Fn(S)>0,R=S.map(a);for(let A=0;A<S.length;A++){let L=R[A],w=R[(A+1)%S.length];L!==w&&l.push(T?{u:L,v:w,room:b.id,edge:A,forward:!0}:{u:w,v:L,room:b.id,edge:A,forward:!1})}}let c=r.map(b=>[a(b.a),a(b.b)]),u=new Set;for(let b of i){let S=b.points;S.length<3||(b.wall_splits??[]).forEach((T,R)=>{if(!T||R>=S.length)return;let A=S[R],L=He(S[(R+1)%S.length],A),w=Yr(L);for(let P of T)P>n&&P<w-n&&u.add(a(Li(A,ri(L,P/w))))})}let h=[];for(let b of l){let S=o[b.u],T=o[b.v],R=He(T,S),A=Yr(R),L=ri(R,1/A),w=[];for(let F=0;F<o.length;F++){if(F===b.u||F===b.v)continue;let N=He(o[F],S),B=qr(N,L);B<=n||B>=A-n||Math.abs(Ys(L,N))<=n&&w.push({t:B,id:F})}w.sort((F,N)=>F.t-N.t);let P=[{t:0,id:b.u},...w,{t:A,id:b.v}];for(let F=0;F+1<P.length;F++){let N=P[F],B=P[F+1],O=b.forward?N.t:A-B.t,z=b.forward?B.t:A-N.t;h.push({u:N.id,v:B.id,room:b.room,edge:b.edge,t0:O,t1:z})}}let f=new Map;for(let b of h){let S=b.u<b.v?`${b.u}-${b.v}`:`${b.v}-${b.u}`,T=f.get(S);T||f.set(S,T=[]),T.push(b)}let d=b=>({room_id:b.room,edge:b.edge,t0:b.t0,t1:b.t1}),p=new Map;for(let b of h){let S=`${b.room}:${b.edge}`;p.set(S,[...p.get(S)??[],b.t0].sort((T,R)=>T-R))}let x=b=>{let S=i.find(R=>R.id===b.room)?.wall_heights?.[b.edge];if(!Array.isArray(S))return S;let T=p.get(`${b.room}:${b.edge}`)??[];return S[T.indexOf(b.t0)]??null},g=b=>{let S=b.map(x).filter(R=>typeof R=="number"&&R>0);if(S.length)return Math.min(...S);let T=b.map(R=>i.find(A=>A.id===R.room)?.ceiling_height);return T.every(R=>typeof R=="number"&&R>0)?Math.max(...T):void 0},m=b=>{let S=b.map(T=>i.find(R=>R.id===T.room)?.wall_thickness?.[T.edge]).filter(T=>typeof T=="number"&&T>0);return S.length?Math.max(...S):void 0},v=b=>b.some(S=>x(S)===0),y=[],_=[];for(let b of f.values()){let S=b[0],T=b.find(R=>R!==S&&R.u===S.v&&R.v===S.u&&R.room!==S.room);for(let R of b)R!==S&&R!==T&&R.room!==S.room&&s.push(`overlap:${S.room}:${R.room}`);if(v(T?[S,T]:[S])){T&&y.push([S.room,T.room]);continue}if(T){let R=m([S,T])??t.interior;_.push({a:S.u,b:S.v,left:R/2,right:R/2,exterior:!1,roomLeft:S.room,roomRight:T.room,sources:[d(S),d(T)],height:g([S,T])})}else _.push({a:S.u,b:S.v,left:0,right:m([S])??t.exterior,exterior:!0,roomLeft:S.room,roomRight:null,sources:[d(S)],height:g([S])})}let M=b=>qn(He(o[b.b],o[b.a]));for(let b of _){if(b.exterior||b.free)continue;let S=new Set;for(let R of[b.a,b.b])for(let A of _)!A.exterior||A.free||A.a!==R&&A.b!==R||Math.abs(Ys(M(b),M(A)))>1e-6||(A.roomLeft===b.roomLeft?S.add("left"):A.roomLeft===b.roomRight&&S.add("right"));if(S.size!==1)continue;let T=b.left+b.right;S.has("left")?(b.left=0,b.right=T):(b.left=T,b.right=0)}r.forEach((b,S)=>{let[T,R]=c[S];if(T===R)return;let A=[(b.a[0]+b.b[0])/2,(b.a[1]+b.b[1])/2],L=i.find(F=>F.points.length>=3&&Jt(A,F.points))?.id??null,w=(b.thickness??t.interior)/2,P=typeof b.height=="number"&&b.height>0?b.height:void 0;_.push({free:b.id,a:T,b:R,left:w,right:w,exterior:!1,roomLeft:L,roomRight:L,sources:[],height:P})}),_=W_(_,o,u);let E=Y_(_,o);return{walls:_.map((b,S)=>{let T=o[b.a],R=o[b.b],A=E.get(`${S}:a`),L=E.get(`${S}:b`),w=q_([A.right,L.left,R,L.right,A.left,T],1e-6);return{id:H_(T,R),a:[T[0],T[1]],b:[R[0],R[1]],left:b.left,right:b.right,exterior:b.exterior,roomLeft:b.roomLeft,roomRight:b.roomRight,sources:b.sources,footprint:w,...b.free?{free:b.free}:{},...b.height!==void 0?{height:b.height}:{}}}),warnings:[...new Set(s)],open:y}}function H_(i,t){let e=r=>Math.round(r*100),[n,s]=i[0]<t[0]||i[0]===t[0]&&i[1]<=t[1]?[i,t]:[t,i];return`w_${e(n[0])}_${e(n[1])}_${e(s[0])}_${e(s[1])}`}function Vd(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function W_(i,t,e=new Set){let n=i.slice(),s=!0;for(;s;){s=!1;let r=new Map;n.forEach((o,a)=>{for(let l of[o.a,o.b]){let c=r.get(l);c||r.set(l,c=[]),c.push(a)}});for(let[o,a]of r){if(a.length!==2||e.has(o))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==o&&(l=Vd(l)),c.a!==o&&(c=Vd(c)),l.a===c.b)continue;let u=qn(He(t[l.b],t[l.a])),h=qn(He(t[c.b],t[c.a]));if(Math.abs(Ys(u,h))>1e-6||qr(u,h)<=0||l.free||c.free||l.height!==c.height||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let f={...l,b:c.b,sources:X_(l.sources,c.sources)},d=n.filter((p,x)=>x!==a[0]&&x!==a[1]);d.push(f),n.length=0,n.push(...d),s=!0;break}}return n}function X_(i,t){let e=i.map(n=>({...n}));for(let n of t){let s=e.find(r=>r.room_id===n.room_id&&r.edge===n.edge&&(Math.abs(r.t1-n.t0)<1e-6||Math.abs(n.t1-r.t0)<1e-6));s?(s.t0=Math.min(s.t0,n.t0),s.t1=Math.max(s.t1,n.t1)):e.push({...n})}return e}function Y_(i,t){let e=new Map;i.forEach((s,r)=>{let o=qn(He(t[s.b],t[s.a])),a=[[s.a,{key:`${r}:a`,d:o,left:s.left,right:s.right,angle:Math.atan2(o[1],o[0])}],[s.b,{key:`${r}:b`,d:ri(o,-1),left:s.right,right:s.left,angle:Math.atan2(-o[1],-o[0])}]];for(let[l,c]of a){let u=e.get(l);u||e.set(l,u=[]),u.push(c)}});let n=new Map;for(let[s,r]of e){let o=t[s];r.sort((c,u)=>c.angle-u.angle);let a=c=>({left:Li(o,ri(kd(c.d),c.left)),right:Li(o,ri(zd(c.d),c.right))});for(let c of r)n.set(c.key,a(c));if(r.length<2)continue;let l=4*Math.max(...r.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<r.length;c++){let u=r[c],h=r[(c+1)%r.length],f=Li(o,ri(kd(u.d),u.left)),d=Li(o,ri(zd(h.d),h.right)),p=Ys(u.d,h.d);if(Math.abs(p)<1e-4)continue;let x=Ys(He(d,f),h.d)/p,g=Li(f,ri(u.d,x));Yr(He(g,o))>l||(n.get(u.key).left=g,n.get(h.key).right=g)}}return n}function q_(i,t){let e=i.filter((s,r)=>Yr(He(s,i[(r+1)%i.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let s=0;s<e.length;s++){let r=e[(s+e.length-1)%e.length],o=e[s],a=e[(s+1)%e.length],l=He(o,r),c=He(a,o);if(Math.abs(Ys(qn(l),qn(c)))<1e-7&&qr(l,c)>0){e=e.filter((u,h)=>h!==s),n=!0;break}}}return e}function Eu(i,t,e){let n=i.points[t],s=i.points[(t+1)%i.points.length],r=qn(He(s,n));return Li(n,ri(r,e))}function $r(i,t,e){if(i.wall){let s=e.find(a=>a.id===i.wall);if(!s||Math.hypot(s.b[0]-s.a[0],s.b[1]-s.a[1])<.05)return null;let r=qn(He(s.b,s.a));return{room:{id:i.room_id,name:"",area_id:null,points:[s.a,s.b,Li(s.a,[-r[1],r[0]])]},edge:0}}let n=t.find(s=>s.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function Zr(i,t,e){if(!t.wall)return $_(i,e.room,e.edge,t.offset);let n=i.find(r=>r.free===t.wall);if(!n)return null;let s=Eu(e.room,0,t.offset);return{wall:n,s:qr(He(s,n.a),qn(He(n.b,n.a)))}}function $_(i,t,e,n){for(let s of i){if(!s.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let o=Eu(t,e,n);return{wall:s,s:qr(He(o,s.a),qn(He(s.b,s.a)))}}return null}var Kr=Math.PI/180;function $n(i){let t=Math.min(i.x0,i.x1),e=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),s=Math.max(i.z0,i.z1);return i.axis==="x"?{u0:t,u1:e,w:s-n,at:(r,o)=>[r,i.flip?s-o:n+o]}:{u0:n,u1:s,w:e-t,at:(r,o)=>[i.flip?e-o:t+o,r]}}function yn(i){let t=$n(i).w,e=i.eave_a,n=i.eave_b,s=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Kr),r=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Kr);if(i.shape==="flat"||i.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(i.shape==="pent")return{vr:t,rh:e+t*s,y:l=>e+l*s};if(i.shape==="mansard"){let l=qd(t,e,n,s,r);return{vr:l.vr,rh:l.rh,y:l.y}}let o=s+r>1e-6?Math.min(t,Math.max(0,(n-e+t*r)/(s+r))):t/2,a=e+o*s;return{vr:o,rh:a,y:l=>l<=o?e+l*s:n+(t-l)*r}}var Z_=.14;function Hd(i,t){return!i.open&&Math.min(i.base,i.eave_a,i.eave_b)<t-.05}function Wd(i,t,e){let n=null,s=Math.max(0,i.settings.roof.overhang??0);for(let r of i.settings.roof.sections??[]){if(r.open)continue;let o=Math.min(r.x0,r.x1),a=Math.max(r.x0,r.x1),l=Math.min(r.z0,r.z1),c=Math.max(r.z0,r.z1);if(t<o-1e-6||t>a+1e-6||e<l-1e-6||e>c+1e-6||r.points&&r.points.length>=3&&!Jt([t,e],r.points))continue;let[u,h]=Fi(r,t,e),f=r.shape==="flat"||r.shape==="parapet",d=Math.max(0,r.overhang??s),x=((f?null:jr($s(r,{u0:d,u1:d,a:d,b:d}),u,h))??yn(r).y(h))-Z_;n=n===null?x:Math.max(n,x)}return n}function Tl(i,t){let e=i.length;if(e<3||Math.abs(t)<1e-9)return i.map(r=>[r[0],r[1]]);let n=Yn(i)>=0?1:-1,s=[];for(let r=0;r<e;r++){let o=i[(r+e-1)%e],a=i[r],l=i[(r+1)%e],c=Gd([a[0]-o[0],a[1]-o[1]]),u=Gd([l[0]-a[0],l[1]-a[1]]),h=[c[1]*n,-c[0]*n],f=[u[1]*n,-u[0]*n],d=h[0]+f[0],p=h[1]+f[1],x=Math.hypot(d,p);if(x<1e-6){s.push([a[0]+h[0]*t,a[1]+h[1]*t]);continue}let g=(d*h[0]+p*h[1])/x,m=Math.min(4,1/Math.max(.25,g));s.push([a[0]+d/x*t*m,a[1]+p/x*t*m])}return s}function Gd(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function Xd(i,t){if(i.points&&i.points.length>=3)return Tl(i.points,t);let e=Math.min(i.x0,i.x1)-t,n=Math.max(i.x0,i.x1)+t,s=Math.min(i.z0,i.z1)-t,r=Math.max(i.z0,i.z1)+t;return[[e,s],[n,s],[n,r],[e,r]]}function Yd(i,t,e,n){let s=oi(i,{exterior:e,interior:n},t).walls.filter(h=>h.exterior&&!h.free);if(!s.length)return null;let r=h=>`${Math.round(h[0]*1e3)}:${Math.round(h[1]*1e3)}`,o=new Map,a=s.map(h=>({a:h.a,b:h.b}));for(let h of a)for(let f of[h.a,h.b])o.set(r(f),[...o.get(r(f))??[],h]);let l=new Set,c=null;for(let h of a){if(l.has(h))continue;l.add(h);let f=[h.a,h.b],d=h.b;for(;;){let p=(o.get(r(d))??[]).find(x=>!l.has(x));if(!p||(l.add(p),d=r(p.a)===r(d)?p.b:p.a,r(d)===r(f[0])))break;f.push(d)}f.length>=3&&r(d)===r(f[0])&&(!c||Math.abs(Yn(f))>Math.abs(Yn(c)))&&(c=f)}if(!c)return null;let u=[];for(let h=0;h<c.length;h++){let f=c[(h+c.length-1)%c.length],d=c[h],p=c[(h+1)%c.length],x=(d[0]-f[0])*(p[1]-d[1])-(d[1]-f[1])*(p[0]-d[0]);Math.abs(x)>1e-6&&u.push(d)}return u.length>=3?Tl(u,e):null}var Jr=Math.tan(30*Kr);function qd(i,t,e,n,s){let r=Math.min(i*.3,n>1e-6?2.4/n:i*.3),o=Math.min(i*.3,s>1e-6?2.4/s:i*.3),a=t+r*n,l=e+o*s,c=Math.min(i-o,Math.max(r,(l-a+Jr*(i-o+r))/(2*Jr))),u=a+(c-r)*Jr;return{vla:r,vlb:o,yla:a,ylb:l,vr:c,rh:u,y:f=>f<=r?t+f*n:f<=c?a+(f-r)*Jr:f<=i-o?l+(i-o-f)*Jr:e+(i-f)*s}}function $s(i,t){let e=$n(i),n=yn(i),s=e.w,r=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(v,y)=>[v,y,n.y(y)],u=c(a,-r),h=c(l,-r),f=c(l,s+o),d=c(a,s+o),p=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Kr),x=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Kr);if(i.shape==="pent"){let v=[u,h,f,d];return{faces:[v],rim:v,ridges:[[f,d]],gable:[[0,n.y(0)],[s,n.y(s)]]}}if(i.shape==="hip"||i.shape==="pyramid"){let v=i.shape==="pyramid"?(e.u1-e.u0)/2:Math.min((e.u1-e.u0)/2,Math.min(n.vr,s-n.vr)||s/2),y=[e.u0+v,n.vr,n.rh],_=[e.u1-v,n.vr,n.rh],M=i.shape==="pyramid"?[[u,h,y],[h,f,y],[f,d,y],[d,u,y]]:[[u,h,_,y],[y,_,f,d],[d,u,y],[h,f,_]],E=i.shape==="pyramid"?[[u,y],[d,y],[h,y],[f,y]]:[[y,_],[u,y],[d,y],[h,_],[f,_]];return{faces:M,rim:[u,h,f,d],ridges:E,gable:null}}if(i.shape==="halfhip"){let v=Math.min(n.y(0),n.y(s)),y=v+(n.rh-v)*.55,_=p>1e-6?Math.min(n.vr,(y-i.eave_a)/p):n.vr,M=x>1e-6?Math.max(n.vr,s-(y-i.eave_b)/x):n.vr,E=Math.min((e.u1-e.u0)/2-.1,(n.rh-y)/Math.max(.2,p)),C=[e.u0+E,n.vr,n.rh],b=[e.u1-E,n.vr,n.rh],S=[a,_,y],T=[a,M,y],R=[l,_,y],A=[l,M,y];return{faces:[[u,h,R,b,C,S],[C,b,A,f,d,T],[T,S,C],[R,A,b]],rim:[u,h,R,A,f,d,T,S],ridges:[[C,b],[S,C],[T,C],[R,b],[A,b]],gable:[[0,n.y(0)],[_,y],[M,y],[s,n.y(s)]]}}if(i.shape==="mansard"){let v=qd(s,i.eave_a,i.eave_b,p,x),y=[a,v.vla,v.yla],_=[l,v.vla,v.yla],M=[a,s-v.vlb,v.ylb],E=[l,s-v.vlb,v.ylb],C=[a,v.vr,v.rh],b=[l,v.vr,v.rh];return{faces:[[u,h,_,y],[y,_,b,C],[C,b,E,M],[M,E,f,d]],rim:[u,h,_,b,E,f,d,M,C,y],ridges:[[C,b],[y,_],[M,E]],gable:[[0,n.y(0)],[v.vla,v.yla],[v.vr,v.rh],[s-v.vlb,v.ylb],[s,n.y(s)]]}}let g=[a,n.vr,n.rh],m=[l,n.vr,n.rh];return{faces:[[u,h,m,g],[g,m,f,d]],rim:[u,h,m,f,d,g],ridges:[[g,m]],gable:[[0,n.y(0)],[n.vr,n.rh],[s,n.y(s)]]}}function jr(i,t,e){let n=null;for(let s of i.faces){if(!Jt([t,e],s.map(v=>[v[0],v[1]])))continue;let[r,o]=s,a=s.slice(2).find(v=>Math.abs((o[0]-r[0])*(v[1]-r[1])-(o[1]-r[1])*(v[0]-r[0]))>1e-9);if(!a)continue;let l=o[0]-r[0],c=o[2]-r[2],u=o[1]-r[1],h=a[0]-r[0],f=a[2]-r[2],d=a[1]-r[1],p=c*d-u*f,x=u*h-l*d,g=l*f-c*h;if(Math.abs(x)<1e-9)continue;let m=r[2]-(p*(t-r[0])+g*(e-r[1]))/x;n=n===null?m:Math.min(n,m)}return n}function Fi(i,t,e){let n=Math.min(i.x0,i.x1),s=Math.max(i.x0,i.x1),r=Math.min(i.z0,i.z1),o=Math.max(i.z0,i.z1);return i.axis==="x"?[t,i.flip?o-e:e-r]:[e,i.flip?s-t:t-n]}function J_(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function El(i,t){let e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,s=o=>Math.abs((o.x1-o.x0)*(o.z1-o.z0)),r=null;for(let o of i){if(o===t||o.dormer||o.open||o.shape==="flat"||o.shape==="parapet"||s(o)<s(t)*1.5)continue;let a=J_(o);e<a.x0||e>a.x1||n<a.z0||n>a.z1||(!r||s(o)<s(r))&&(r=o)}return r}function Au(i,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=$n(t),n=yn(t).rh,s=$s(i,{u0:0,u1:0,a:0,b:0}),r=yn(i),o=p=>{let[x,g]=e.at(p,e.w/2),[m,v]=Fi(i,x,g);return jr(s,m,v)??r.y(v)},a=o(e.u0)<=o(e.u1),l=a?e.u0:e.u1,c=a?e.u1:e.u0,u=a?1:-1,h=Math.abs(c-l),f=c;for(let p=.5;p<h;p+=.05)if(o(l+u*p)>=n-.02){f=l+u*p;break}if(Math.abs(f-c)<.05)return t;let d={...t};return t.axis==="x"?c===e.u1?d.x1=f:d.x0=f:c===e.u1?d.z1=f:d.z0=f,d}function $d(i,t){let e=Au(i,t),n=$n(e),s=yn(e),r=$s(i,{u0:0,u1:0,a:0,b:0}),o=yn(i),a=f=>{let[d,p]=n.at(f,n.w/2),[x,g]=Fi(i,d,p);return jr(r,x,g)??o.y(g)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,u=[],h=Math.max(1,Math.ceil(c/.15));for(let f=0;f<h;f++){let d=c*f/h,p=c*(f+1)/h,x=l?n.u0+d:n.u1-d,g=l?n.u0+p:n.u1-p,m=a(g),v=1/0,y=-1/0;for(let b=0;b<=40;b++){let S=n.w*b/40;s.y(S)>m+.02&&(v=Math.min(v,S),y=Math.max(y,S))}if(!(y-v>.05))continue;let _=n.at(x,v),M=n.at(g,y),E=Fi(i,_[0],_[1]),C=Fi(i,M[0],M[1]);u.push({u0:Math.min(E[0],C[0]),u1:Math.max(E[0],C[0]),v0:Math.min(E[1],C[1]),v1:Math.max(E[1],C[1])})}return u}function qs(i,t,e,n){let s=o=>n?o[t]<=e+1e-9:o[t]>=e-1e-9,r=[];for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],c=s(a),u=s(l);if(c&&r.push(a),c!==u){let h=(e-a[t])/(l[t]-a[t]);r.push([a[0]+(l[0]-a[0])*h,a[1]+(l[1]-a[1])*h,a[2]+(l[2]-a[2])*h])}}return r}function Zd(i,t){let e=qs(i,0,t.u0,!0),n=qs(i,0,t.u1,!1),s=qs(qs(i,0,t.u0,!1),0,t.u1,!0),r=qs(s,1,t.v0,!0),o=qs(s,1,t.v1,!1);return[e,n,r,o].filter(a=>a.length>=3&&Math.abs(Yn(a.map(l=>[l[0],l[1]])))>1e-6)}function Al(i,t,e){let n=$n(t),s=i.floors.flatMap(c=>c.rooms.filter(u=>u.points.length>=3&&c.elevation+c.height>t.base+.05)),r=c=>c.some(u=>s.some(h=>Jt(u,h.points))),o=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:r(a.map(c=>n.at(c,-o)))?0:e,b:r(a.map(c=>n.at(c,n.w+o)))?0:e,u0:r(l.map(c=>n.at(n.u0-o,c)))?0:e,u1:r(l.map(c=>n.at(n.u1+o,c)))?0:e}}function Jd(i,t){let e=i.floors.filter(n=>n.rooms.length>0).sort((n,s)=>n.elevation-s.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}function K_(i){return yn(i).rh}function Kd(i,t,e){let n=i.settings.roof.sections??[],s=n.filter(l=>e.includes(l.id)).map(l=>El(n,l)??l);if(!s.length)return t.id;let r=Math.max(...s.map(l=>K_(l))),o=l=>l.rooms.some(c=>c.points.length>=3&&s.some(u=>{let[h,f]=c.points.reduce((d,p)=>[d[0]+p[0]/c.points.length,d[1]+p[1]/c.points.length],[0,0]);return h>=Math.min(u.x0,u.x1)&&h<=Math.max(u.x0,u.x1)&&f>=Math.min(u.z0,u.z1)&&f<=Math.max(u.z0,u.z1)}));return i.floors.filter(l=>l.elevation>=t.elevation&&l.elevation<r-.3&&o(l)).sort((l,c)=>c.elevation-l.elevation)[0]?.id??t.id}function Rl(i,t){let e=Fn(t)>0?1:-1,n=[...i];for(let s=0;s<t.length&&n.length;s++){let r=t[s],o=t[(s+1)%t.length],a=c=>e*((o[0]-r[0])*(c[1]-r[1])-(o[1]-r[1])*(c[0]-r[0])),l=n;n=[];for(let c=0;c<l.length;c++){let u=l[c],h=l[(c+1)%l.length],f=a(u),d=a(h);if(f>=0&&n.push(u),f>=0!=d>=0){let p=f/(f-d);n.push([u[0]+(h[0]-u[0])*p,u[1]+(h[1]-u[1])*p])}}}return n}function jd(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length],r=i[(e+2)%i.length],o=(s[0]-n[0])*(r[1]-s[1])-(s[1]-n[1])*(r[0]-s[0]);if(!(Math.abs(o)<1e-9)){if(t&&Math.sign(o)!==t)return!1;t=Math.sign(o)}}return!0}var Dn=1e-4;function Ru(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];t+=n[0]*s[1]-s[0]*n[1]}return t/2}function Qd(i,t,e,n){let s=[t[0]-i[0],t[1]-i[1]],r=[n[0]-e[0],n[1]-e[1]],o=s[0]*r[1]-s[1]*r[0];if(Math.abs(o)<1e-12)return null;let a=((e[0]-i[0])*r[1]-(e[1]-i[1])*r[0])/o,l=((e[0]-i[0])*s[1]-(e[1]-i[1])*s[0])/o;return a>Dn&&a<1-Dn&&l>-Dn&&l<1+Dn?a:null}function Cu(i,t,e){let n=e[0]-t[0],s=e[1]-t[1],r=n*n+s*s;if(r<1e-12)return null;let o=((i[0]-t[0])*n+(i[1]-t[1])*s)/r;return o<=Dn||o>=1-Dn?null:Math.abs((i[0]-t[0])*s-(i[1]-t[1])*n)/Math.sqrt(r)<Dn?o:null}function j_(i,t){for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];for(let r=0;r<t.length;r++){let o=t[r],a=t[(r+1)%t.length];if(Qd(n,s,o,a)!==null||Cu(o,n,s)!==null||Cu(n,o,a)!==null||Math.hypot(n[0]-o[0],n[1]-o[1])<Dn)return!0}}return Jt(i[0],t)||Jt(t[0],i)}function Q_(i){let t=i.map(r=>Ru(r)>=0?r:[...r].reverse()),e=[];t.forEach((r,o)=>{for(let a=0;a<r.length;a++){let l=r[a],c=r[(a+1)%r.length],u=[0,1];t.forEach((h,f)=>{if(f!==o)for(let d=0;d<h.length;d++){let p=h[d],x=h[(d+1)%h.length],g=Qd(l,c,p,x)??Cu(p,l,c);g!==null&&u.push(g)}}),u.sort((h,f)=>h-f);for(let h=1;h<u.length;h++){if(u[h]-u[h-1]<Dn)continue;let f=[l[0]+(c[0]-l[0])*u[h-1],l[1]+(c[1]-l[1])*u[h-1]],d=[l[0]+(c[0]-l[0])*u[h],l[1]+(c[1]-l[1])*u[h]],p=Math.hypot(d[0]-f[0],d[1]-f[1]),x=[(f[0]+d[0])/2+(d[1]-f[1])/p*.001,(f[1]+d[1])/2-(d[0]-f[0])/p*.001];t.some((g,m)=>m!==o&&Jt(x,g))||e.some(([g,m])=>Math.hypot(g[0]-f[0],g[1]-f[1])<Dn&&Math.hypot(m[0]-d[0],m[1]-d[1])<Dn)||e.push([f,d])}}});let n=[],s=new Set;for(let r=0;r<e.length;r++){if(s.has(r))continue;s.add(r);let o=[e[r][0]],a=e[r][1];for(let l=0;l<e.length&&!(Math.hypot(a[0]-o[0][0],a[1]-o[0][1])<.001);l++){let c=e.findIndex(([u],h)=>!s.has(h)&&Math.hypot(u[0]-a[0],u[1]-a[1])<.001);if(c<0)break;s.add(c),o.push(e[c][0]),a=e[c][1]}o.length>=3&&Ru(o)>1e-6&&n.push(o)}return n}function Pu(i){let t=i.filter(r=>r.length>=3),e=t.map((r,o)=>o),n=r=>e[r]===r?r:e[r]=n(e[r]);for(let r=0;r<t.length;r++)for(let o=r+1;o<t.length;o++)n(r)!==n(o)&&j_(t[r],t[o])&&(e[n(o)]=n(r));let s=new Map;return t.forEach((r,o)=>s.set(n(o),[...s.get(n(o))??[],r])),[...s.values()].flatMap(r=>r.length===1?r:Q_(r))}function ty(i,t,e){let n=e[0]-t[0],s=e[1]-t[1],r=n*n+s*s,o=r?Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*s)/r)):0;return Math.hypot(i[0]-t[0]-n*o,i[1]-t[1]-s*o)}function tp(i,t,e=.03){return i.every(n=>Jt(n,t)||t.some((s,r)=>ty(n,s,t[(r+1)%t.length])<=e))}function Iu(i,t){let e=Ru(i)>=0?i:[...i].reverse(),n=(s,r)=>{let o=Math.hypot(r[0]-s[0],r[1]-s[1])||1;return[-(r[1]-s[1])/o,(r[0]-s[0])/o]};return e.map((s,r)=>{let o=n(e[(r-1+e.length)%e.length],s),a=n(s,e[(r+1)%e.length]),l=1+o[0]*a[0]+o[1]*a[1];return l<.1?s:[s[0]+(o[0]+a[0])/l*t,s[1]+(o[1]+a[1])/l*t]})}var ss=Bt(3662079,.95),Lu=Bt(3662079,1),Di=Bt(5995775,.34),ep=Bt(5995775,.22),Cl=[-.55,.83],Ht=-1,Pl=16,rs=32,np=48,Fu=64,ee=class{p=[];c=[];f=[];uv;tile;constructor(t=!1,e=!1){this.uv=t?[]:null,this.tile=e?[]:null}tri(t,e,n,s,r=s,o=s,a,l=Ht,c=[0,1]){this.p.push(...t,...e,...n),this.c.push(s.r,s.g,s.b,r.r,r.g,r.b,o.r,o.g,o.b),this.f.push(l,l,l),this.uv?.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile?.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let t=new $t;return t.setAttribute("position",new Ut(this.p,3)),t.setAttribute("color",new Ut(this.c,3)),t.setAttribute("fold",new Ut(this.f,1)),this.uv&&t.setAttribute("uv",new Ut(this.uv,2)),this.tile&&t.setAttribute("tile",new Ut(this.tile,2)),t.computeBoundingSphere(),t}},Le=class{p=[];c=[];f=[];seg(t,e,n=ss,s=Ht){this.p.push(...t,...e),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(s,s)}segSplit(t,e,n,s,r){let[o,a]=t[1]<=e[1]?[t,e]:[e,t];if(a[1]<=s+1e-6||r<0)return this.seg(o,a,n,Ht);if(o[1]>=s-1e-6)return this.seg(o,a,n,r);let l=(s-o[1])/(a[1]-o[1]),c=[o[0]+(a[0]-o[0])*l,s,o[2]+(a[2]-o[2])*l];this.seg(o,c,n,Ht),this.seg(c,a,n,r)}geometry(){let t=new $t;return t.setAttribute("position",new Ut(this.p,3)),t.setAttribute("color",new Ut(this.c,3)),t.setAttribute("fold",new Ut(this.f,1)),t}};function ip(i,t,e,n){let r=i.uv?2:0,o=(h,f)=>{let d=h*3+f;return{p:i.p.slice(d*3,d*3+3),c:i.c.slice(d*3,d*3+3),uv:i.uv?i.uv.slice(d*2,d*2+2):null,tile:i.tile?i.tile.slice(d*2,d*2+2):null}},a=(h,f,d)=>({p:h.p.map((p,x)=>p+(f.p[x]-p)*d),c:h.c.map((p,x)=>p+(f.c[x]-p)*d),uv:h.uv&&f.uv?h.uv.map((p,x)=>p+(f.uv[x]-p)*d):null,tile:h.tile}),l=(h,f,d)=>{for(let p=0;p<3;p++){let x=h*3+p;for(let g=0;g<3;g++)i.p[x*3+g]=f[p].p[g],i.c[x*3+g]=f[p].c[g];if(i.uv&&f[p].uv)for(let g=0;g<r;g++)i.uv[x*2+g]=f[p].uv[g];if(i.tile&&f[p].tile)for(let g=0;g<2;g++)i.tile[x*2+g]=f[p].tile[g];i.f[x]=d}},c=(h,f)=>{let d=i.p.length/9;for(let p of h)i.p.push(...p.p),i.c.push(...p.c),i.f.push(f),i.uv?.push(...p.uv??[.5,.5]),i.tile?.push(...p.tile??[0,1]);return d},u=i.p.length/9;for(let h=t;h<u;h++){let f=[o(h,0),o(h,1),o(h,2)],d=f.map(b=>b.p[1]>e+1e-6),p=f.map(b=>b.p[1]<e-1e-6);if(!d.some(Boolean))continue;if(!p.some(Boolean)){for(let b=0;b<3;b++)i.f[h*3+b]=n;continue}let x=i.f[h*3],g=(b,S)=>a(b,S,(e-b.p[1])/(S.p[1]-b.p[1])),m=d.filter(Boolean).length,v=m===1?d.indexOf(!0):d.indexOf(!1),y=f[v],_=f[(v+1)%3],M=f[(v+2)%3],E=g(y,_),C=g(M,y);m===1?(l(h,[y,E,C],n),c([E,_,M],x),c([E,M,C],x)):(l(h,[y,E,C],x),c([E,_,M],n),c([E,M,C],n))}}function sp(i,t,e,n){let s=i.p.length/6;for(let r=t;r<s;r++){let o=i.p.slice(r*6,r*6+3),a=i.p.slice(r*6+3,r*6+6),[l,c]=o[1]<=a[1]?[o,a]:[a,o];if(c[1]<=e+1e-6)continue;if(l[1]>=e-1e-6){i.f[r*2]=n,i.f[r*2+1]=n;continue}let u=(e-l[1])/(c[1]-l[1]),h=[l[0]+(c[0]-l[0])*u,e,l[2]+(c[2]-l[2])*u];for(let d=0;d<3;d++)i.p[r*6+d]=l[d],i.p[r*6+3+d]=h[d];let f=i.c.slice(r*6,r*6+3);i.p.push(...h,...c),i.c.push(...f,...f),i.f.push(n,n)}}var ue=Math.PI/180;function Bt(i,t){let e=new j(i).multiplyScalar(t);return e.r=Math.min(1,e.r),e.g=Math.min(1,e.g),e.b=Math.min(1,e.b),e}function ey(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];t+=n[0]*s[1]-s[0]*n[1]}return t}function Ni(i,t=[]){let e=i.map(([n,s])=>new te(n,s));return Mr.triangulateShape(e,t.map(n=>n.map(([s,r])=>new te(s,r))))}function rp(i,t,e,n,s,r,o){let a=new j(o),l=d=>.5+.5*Math.min(1,Math.max(0,d/1.6));for(let d=0;d<4;d++){let p=t[d],x=t[(d+1)%4],g=e[d],m=e[(d+1)%4],v=x[0]-p[0],y=x[1]-p[1],_=Math.hypot(v,y);if(_<1e-6)continue;let E=.8+.28*((y/_*Cl[0]-v/_*Cl[1]+1)/2),C=(g[0]+m[0]-p[0]-x[0])/2*(-y/_)+(g[1]+m[1]-p[1]-x[1])/2*(v/_),b=Math.max(0,Math.min(1,C/Math.max(1e-6,Math.hypot(C,s-n)))),S=Bt(r,l(n)*E).lerp(a,b),T=Bt(r,l(s)*E).lerp(a,b);i.tri([p[0],n,p[1]],[g[0],s,g[1]],[m[0],s,m[1]],S,T,T),i.tri([p[0],n,p[1]],[m[0],s,m[1]],[x[0],n,x[1]],S,T,S)}let[c,u,h,f]=e;Math.hypot(h[0]-c[0],h[1]-c[1])>1e-4&&(i.tri([c[0],s,c[1]],[h[0],s,h[1]],[u[0],s,u[1]],a),i.tri([c[0],s,c[1]],[f[0],s,f[1]],[h[0],s,h[1]],a))}function op(i,t,e,n,s,r,o,a,l,c){let u=new j(l),h=[];for(let d=0;d<c;d++){let p=d/c*Math.PI*2;h.push({y:r+Math.cos(p)*o,s:s+Math.sin(p)*o})}let f=(d,p)=>{let x=t(d,h[p%c].s);return[x[0],h[p%c].y,x[1]]};for(let d=0;d<c;d++){let p=(d+.5)/c*Math.PI*2,x=Bt(a,.62+.4*Math.max(0,Math.cos(p)));i.tri(f(e,d),f(n,d+1),f(n,d),x),i.tri(f(e,d),f(e,d+1),f(n,d+1),x)}for(let d of[e,n]){let p=t(d,s),x=[p[0],r,p[1]];for(let g=0;g<c;g++)i.tri(x,f(d,g),f(d,g+1),u)}}function Re(i,t,e,n,s,r,o={}){let a=typeof n=="number"?()=>n:p=>Math.max(e+.002,n(p[0],p[1])),l=o.aoFrom??e,c=o.fold??Ht,u=p=>.5+.5*Math.min(1,Math.max(0,(p-l)/1.6)),h=(o.holes??[]).map(p=>ey(p)>0?[...p].reverse():p),f=h.length?[...t,...h.flat()]:t,d=o.topFace===!1&&!o.bottom?[]:Ni(t,h);if(o.topFace!==!1){let p=new j(r);for(let[x,g,m]of d){let v=f[x],y=f[g],_=f[m];i.tri([v[0],a(v),v[1]],[_[0],a(_),_[1]],[y[0],a(y),y[1]],p,p,p,void 0,o.topFold??c)}}if(o.bottom){let p=Bt(s,.55);for(let[x,g,m]of d){let v=f[x],y=f[g],_=f[m];i.tri([v[0],e,v[1]],[y[0],e,y[1]],[_[0],e,_[1]],p,p,p,void 0,c)}}for(let p of[t,...h])for(let x=0;x<p.length;x++){let g=p[x],m=p[(x+1)%p.length],v=m[0]-g[0],y=m[1]-g[1],_=Math.hypot(v,y);if(_<1e-6||o.skipSide?.(g,m))continue;let E=.8+.28*((y/_*Cl[0]-v/_*Cl[1]+1)/2),C=a(g),b=a(m),S=Bt(s,u(e)*E),T=Bt(s,u(C)*E),R=Bt(s,u(b)*E);i.tri([g[0],e,g[1]],[g[0],C,g[1]],[m[0],b,m[1]],S,T,R,void 0,c),i.tri([g[0],e,g[1]],[m[0],b,m[1]],[m[0],e,m[1]],S,R,S,void 0,c)}}var U={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},ft=Bt(5995775,.3),Kt=Bt(5995775,.17),qt=Bt(3662079,.45),Zs=class i{buf;lines;tf;mirrored;constructor(t,e,n){this.buf=t,this.lines=e,this.tf=n,this.mirrored=fp(n)}rotated(t,e,n){let s=n*ue,r=Math.cos(s),o=Math.sin(s),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(t+(l-t)*r-(c-e)*o,e+(l-t)*o+(c-e)*r))}box(t,e,n,s,r,o,a,l=a,c=null){if(e-t<1e-4||o-r<1e-4||s-n<1e-4)return;let u=[this.tf(t,r),this.tf(t,o),this.tf(e,o),this.tf(e,r)];Re(this.buf,Du(u),n,s,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(u,n,s,c)}loft(t,e,n,s,r,o=r,a=null){if(s-n<1e-4)return;let l=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])],c=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])];if(l!==Du(l)&&(l.reverse(),c.reverse()),rp(this.buf,l,c,n,s,r,o),a)for(let u=0;u<4;u++)this.line(c[u],c[(u+1)%4],s,s,a),this.line(l[u],c[u],n,s,a)}pad(t,e,n,s,r,o,a,l=a,c=.03,u=null){if(c=Math.min(c,(e-t)/2-.005,(o-r)/2-.005,(s-n)/2),c<.008)return this.box(t,e,n,s,r,o,a,l,u);this.loft([t+c,e-c,r+c,o-c],[t,e,r,o],n,n+c,a),s-n-2*c>.005&&this.box(t,e,n+c,s-c,r,o,a,a,u),this.loft([t,e,r,o],[t+c,e-c,r+c,o-c],s-c,s,a,l)}lyingCyl(t,e,n,s,r,o,a,l,c=l,u=12,h=null){let f=Math.min(a,r-s)/2;if(f<1e-4||o<1e-4)return;let d=(s+r)/2,p=t==="x"?e:n,x=t==="x"?n:e,g=(v,y)=>t==="x"?this.tf(v,y):this.tf(y,v),m=this.buf.p.length;if(op(this.buf,g,p-o/2,p+o/2,x,d,f,l,c,u),this.mirrored&&ku(this.buf,m),h)for(let v of[p-o/2,p+o/2])for(let y=0;y<u;y++){let _=y/u*Math.PI*2,M=(y+1)/u*Math.PI*2;this.line(g(v,x+Math.sin(_)*f),g(v,x+Math.sin(M)*f),d+Math.cos(_)*f,d+Math.cos(M)*f,h)}}cyl(t,e,n,s,r,o,a=o,l=10,c=null){let u=[];for(let h=0;h<l;h++){let f=h/l*Math.PI*2;u.push(this.tf(t+Math.cos(f)*n,e+Math.sin(f)*n))}if(Re(this.buf,Du(u),s,r,o,a,{aoFrom:0,bottom:s>.05}),c)for(let h=0;h<l;h++)this.line(u[h],u[(h+1)%l],r,r,c)}seg(t,e,n,s,r,o,a=ft){this.line(this.tf(t,n),this.tf(s,o),e,r,a)}line(t,e,n,s,r){this.lines.seg([t[0],n,t[1]],[e[0],s,e[1]],r,Ht)}outline(t,e,n,s){for(let r=0;r<4;r++){let o=t[r],a=t[(r+1)%4];this.line(o,a,n,n,s),this.line(o,o,e,n,s)}}};function fp(i){let t=i(0,0),e=i(1,0),n=i(0,1);return(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0])<0}function Du(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];t+=n[0]*s[1]-s[0]*n[1]}return t>=0?i:[...i].reverse()}function os(i,t,e,n,s,r,o=U.metal,a=!1){let l=t/2-r-s,c=e/2-r-s;for(let u of[-1,1])for(let h of[-1,1]){let f=u*l,d=h*c;a?i.loft([f-s*.3,f+s*.3,d-s*.3,d+s*.3],[f-s/2,f+s/2,d-s/2,d+s/2],0,n,o):i.box(f-s/2,f+s/2,0,n,d-s/2,d+s/2,o)}}function Qr(i,t,e,n,s,r,o,a=null,l=!1){let c=(e-t)/o;for(let u=1;u<o;u++){let h=t+c*u;i.seg(h,n,r,h,s,r,Kt)}for(let u=0;u<o;u++){let h=t+c*(u+.5),f=a??s-.08;if(l)i.seg(h-Math.min(.1,c/4),f,r+.012,h+Math.min(.1,c/4),f,r+.012,qt);else{let d=o>1?h+(u%2?-c/2+.06:c/2-.06):h+c/2-.06;i.seg(d,f-.08,r+.012,d,f+.08,r+.012,qt)}}}function ap(i,t,e,n,s){let r=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.min(.2,t*.12),u=n*.5,h=Math.min(.24,e*.28);os(i,t,e,.07,.05,.05,U.wood,!0),i.pad(r,o,.07,u-.08,a+.02,l,U.fabric,U.fabricTop,.04,ft),i.loft([r,o,a,a+h],[r+.01,o-.01,a,a+h*.5],u-.08,n,U.fabric,U.fabricTop,ft),i.pad(r,r+c,u-.08,n*.72,a+.02,l-.02,U.fabric,U.fabricTop,.04,ft),i.pad(o-c,o,u-.08,n*.72,a+.02,l-.02,U.fabric,U.fabricTop,.04,ft);let d=(o-c-(r+c))/s;for(let p=0;p<s;p++){let x=r+c+d*p+.02,g=x+d-.04;i.pad(x,g,u-.08,u+.05,a+h+.02,l-.06,U.cushion,U.cushion,.04),i.loft([x+.01,g-.01,a+h*.55,a+h+.14],[x+.03,g-.03,a+h*.4,a+h*.4+.06],u+.03,n*.93,U.cushion)}}function lp(i,t,e,n,s){let r=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.max(.3,Math.min(.95,e*.5,t*(s?.34:.45))),u=Math.min(.24,c*.28),h=Math.min(.2,c*.24),f=n*.5,d=n*.72,p=s?[-1,1]:[-1],x=(b,S)=>i.loft([b-.015,b+.015,S-.015,S+.015],[b-.025,b+.025,S-.025,S+.025],0,.07,U.wood);x(r+.06,a+.06),x(o-.06,a+.06),s||x(o-.06,a+c-.06);for(let b of p)x(b*(t/2-.06),l-.06),x(b*(t/2-c+.06),l-.06);i.pad(r,o,.07,f-.08,a+.02,a+c,U.fabric,U.fabricTop,.04,ft);for(let b of p){let[S,T]=b<0?[r+.02,r+c]:[o-c,o-.02];i.pad(S,T,.07,f-.08,a+c-.02,l,U.fabric,U.fabricTop,.04,ft)}i.loft([r,o,a,a+u],[r+.01,o-.01,a,a+u*.5],f-.08,n,U.fabric,U.fabricTop,ft);for(let b of p)b<0?i.loft([r,r+u,a+u,l],[r,r+u*.5,a+u,l-.01],f-.08,n,U.fabric,U.fabricTop,ft):i.loft([o-u,o,a+u,l],[o-u*.5,o,a+u,l-.01],f-.08,n,U.fabric,U.fabricTop,ft);for(let b of p){let[S,T]=b<0?[r+u,r+c]:[o-c,o-u];i.pad(S,T,f-.08,d,l-h,l,U.fabric,U.fabricTop,.04,ft)}s||i.pad(o-h,o,f-.08,d,a+.02,a+c-.02,U.fabric,U.fabricTop,.04,ft);let g=r+u,m=s?o-u:o-h,v=Math.max(1,Math.round((m-g)/.62)),y=(m-g)/v;for(let b=0;b<v;b++){let S=g+y*b+.02,T=S+y-.04;i.pad(S,T,f-.08,f+.05,a+u+.02,a+c-.04,U.cushion,U.cushion,.04),i.loft([S+.01,T-.01,a+u*.55,a+u+.14],[S+.03,T-.03,a+u*.4,a+u*.4+.06],f+.03,n*.93,U.cushion)}let _=a+c,M=l-h;if(M-_<.2)return;let E=Math.max(1,Math.round((M-_)/.62)),C=(M-_)/E;for(let b of p)for(let S=0;S<E;S++){let T=_+C*S+.02,R=T+C-.04;b<0?(i.pad(r+u+.02,r+c-.04,f-.08,f+.05,T,R,U.cushion,U.cushion,.04),i.loft([r+u*.55,r+u+.14,T+.01,R-.01],[r+u*.4,r+u*.4+.06,T+.03,R-.03],f+.03,n*.93,U.cushion)):(i.pad(o-c+.04,o-u-.02,f-.08,f+.05,T,R,U.cushion,U.cushion,.04),i.loft([o-u-.14,o-u*.55,T+.01,R-.01],[o-u*.4-.06,o-u*.4,T+.03,R-.03],f+.03,n*.93,U.cushion))}}function ny(i,t,e,n){let s=-e/2,r=e/2,o=-t/2,a=t/2,l=Math.min(.32,n*.36);os(i,t,e,.08,.06,.03,U.wood,!0),i.box(o,a,.08,l,s+.06,r,U.wood,U.woodTop,ft),i.pad(o+.03,a-.03,l,l+.2,s+.08,r-.03,U.white,U.whiteTop,.03),i.box(o,a,.08,n-.05,s,s+.07,U.wood,U.woodTop,ft),i.box(o,a,n-.05,n,s,s+.09,U.wood,U.woodTop,Kt);let c=l+.2,u=s+(e-.1)*.36;i.pad(o+.01,a-.01,c-.1,c+.05,u,r-.01,U.cushion,U.fabricTop,.025,Kt),i.lyingCyl("x",0,u+.05,c-.02,c+.09,t-.02,.1,U.cushion,U.fabricTop,8);let h=t>1.2?2:1,f=(t-.2)/h;for(let d=0;d<h;d++){let p=o+.1+f*d,x=s+.12,g=Math.min(.42,e*.2),m=.1;i.loft([p+.03+m,p+f-.03-m,x+m*.5,x+g-m*.5],[p+.03,p+f-.03,x,x+g],c,c+.06,U.whiteTop),i.loft([p+.03,p+f-.03,x,x+g],[p+.03+m,p+f-.03-m,x+m*.5,x+g-m*.5],c+.06,c+.12,U.whiteTop,U.whiteTop,Kt)}}function iy(i,t,e,n){let s=Math.min(.46,n*.52);os(i,t,e,s-.04,.035,.02,U.wood,!0),i.box(-t/2,t/2,s-.04,s,-e/2,e/2,U.wood,U.woodTop,ft),i.pad(-t/2+.02,t/2-.02,s,s+.04,-e/2+.05,e/2-.03,U.cushion,U.cushion,.015),i.loft([-t/2,t/2,-e/2+.02,-e/2+.07],[-t/2+.02,t/2-.02,-e/2,-e/2+.03],s,n,U.wood,U.woodTop,ft)}function sy(i,t,e,n){os(i,t,e,n-.04,.06,.05,U.wood,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.wood,U.woodTop,qt),i.box(-t/2+.08,t/2-.08,n-.1,n-.04,-e/2+.08,e/2-.08,U.body)}function ry(i,t,e,n){let s=-t/2,r=t/2;i.box(s,r,n-.035,n,-e/2,e/2,U.wood,U.woodTop,ft),i.box(s,s+.03,0,n-.035,-e/2+.03,e/2-.03,U.metal);let o=Math.min(.42,t*.32);i.box(r-o,r,0,n-.035,-e/2+.03,e/2-.02,U.body,U.bodyTop,ft);let a=e/2-.02;for(let l of[n*.35,n*.66])i.seg(r-o,l,a,r,l,a,Kt);for(let l of[n*.2,n*.5,n*.82])i.seg(r-o/2-.07,l,a+.012,r-o/2+.07,l,a+.012,qt);i.box(-.3,.3,n+.08,n+.42,-e/2+.08,-e/2+.11,U.dark,U.dark,qt),i.box(-.03,.03,n,n+.1,-e/2+.09,-e/2+.13,U.metal)}function Ui(i,t,e,n,s,r=null,o=!1){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,U.body,U.bodyTop,ft),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,U.dark),Qr(i,-t/2,t/2,.08,n,e/2-.02,s,r,o)}function oy(i,t,e,n){i.box(-t/2,-t/2+.025,0,n,-e/2,e/2,U.wood,U.woodTop,ft),i.box(t/2-.025,t/2,0,n,-e/2,e/2,U.wood,U.woodTop,ft),i.box(-t/2+.025,t/2-.025,0,n,-e/2,-e/2+.015,U.body);let r=Math.max(2,Math.round(n/.38));for(let o=0;o<=r;o++){let a=Math.min(n-.025,n/r*o);if(i.box(-t/2+.025,t/2-.025,a,a+.025,-e/2+.015,e/2,U.wood,U.woodTop,Kt),o<r){let l=-t/2+.025+.04,c=o*3;for(;l<t/2-.025-.12;){let u=.03+c*7%5*.008,h=n/r-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+u,a+.025,a+.025+h,-e/2+.04,e/2-.05,c%3?U.fabric:U.cushion,U.fabricTop),l+=u+.006,c++}}}}function ay(i,t,e,n){let s=Math.max(1,Math.round(t/.6));Ui(i,t,e-.02,n-.04,s,n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.whiteTop,U.whiteTop,ft)}function ly(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,U.white,U.whiteTop,ft);let s=n*.62;i.seg(-t/2,s,e/2,t/2,s,e/2,Kt);let r=t/2-.06;i.seg(r,s+.08,e/2+.015,r,s+.4,e/2+.015,qt),i.seg(r,s-.4,e/2+.015,r,s-.08,e/2+.015,qt)}function cy(i,t,e,n){let s=e/2-dp;i.box(-t/2,t/2,.02,n,-e/2,s,U.body,U.bodyTop,ft),i.box(-t/2+.05,t/2-.05,0,.02,-e/2+.05,s-.05,U.dark);for(let r of[.35,.7,1.05,1.4])r>n-.15||(i.seg(-t/2+.03,r,s+.001,-.03,r,s+.001,Kt),i.seg(.03,r,s+.001,t/2-.03,r,s+.001,Kt))}var dp=.06;function pp(i,t,e,n){let s=t.rotation*ue,r=Math.cos(s),o=Math.sin(s),a=Math.max(0,Math.min(1,n)),l=(w,P,F)=>[t.x+w*r-F*o,P,t.z+w*o+F*r],c=(w,P,F,N,B)=>{i.tri(w,P,F,B),i.tri(w,F,N,B),i.tri(w,F,P,B),i.tri(w,N,F,B)},u=(w,P,F,N)=>{let B=l(w[0],w[1],w[2]),O=l(P[0],P[1],P[2]),z=O[0]-B[0],V=O[1]-B[1],Q=O[2]-B[2],G=Math.hypot(z,V,Q)||1,nt=[z/G,V/G,Q/G],lt=Math.abs(nt[1])>.9?[1,0,0]:[0,1,0],dt=[nt[1]*lt[2]-nt[2]*lt[1],nt[2]*lt[0]-nt[0]*lt[2],nt[0]*lt[1]-nt[1]*lt[0]],$=Math.hypot(dt[0],dt[1],dt[2])||1,q=[dt[0]/$*F,dt[1]/$*F,dt[2]/$*F],it=[nt[1]*q[2]-nt[2]*q[1],nt[2]*q[0]-nt[0]*q[2],nt[0]*q[1]-nt[1]*q[0]],ct=[[1,1],[-1,1],[-1,-1],[1,-1]],ut=(Tt,Vt)=>[Tt[0]+q[0]*ct[Vt][0]+it[0]*ct[Vt][1],Tt[1]+q[1]*ct[Vt][0]+it[1]*ct[Vt][1],Tt[2]+q[2]*ct[Vt][0]+it[2]*ct[Vt][1]];for(let Tt=0;Tt<4;Tt++){let Vt=(Tt+1)%4;i.tri(ut(B,Tt),ut(O,Tt),ut(O,Vt),N),i.tri(ut(B,Tt),ut(O,Vt),ut(B,Vt),N)}},h=(w,P,F,N,B,O,z,V)=>{c(l(w,N,B),l(P,N,B),l(P,N,O),l(w,N,O),V),c(l(w,F,O),l(P,F,O),l(P,N,O),l(w,N,O),z),c(l(w,F,B),l(P,F,B),l(P,F,O),l(w,F,O),z),c(l(w,F,B),l(w,F,O),l(w,N,O),l(w,N,B),z),c(l(P,F,B),l(P,F,O),l(P,N,O),l(P,N,B),z)},f=new j(U.body),d=new j(U.bodyTop),p=new j(U.accent),x=new j(1929098),g=new j(995141),m=(w,P,F,N,B)=>{let O=(z,V,Q)=>[z[0]+(V[0]-z[0])*Q,z[1]+(V[1]-z[1])*Q,z[2]+(V[2]-z[2])*Q];for(let z=0;z<B;z++){let V=O(w,P,z/B),Q=O(w,P,(z+1)/B),G=O(F,N,(z+1)/B),nt=O(F,N,z/B);c(l(V[0],V[1],V[2]),l(Q[0],Q[1],Q[2]),l(G[0],G[1],G[2]),l(nt[0],nt[1],nt[2]),z%2?x:g)}},v=t.w/2,y=-t.d/2,_=Math.max(.12,Math.min(.3,t.h)),M=Math.max(4,Math.round(t.w/.3)),E=(t.awning_pitch??12)*Math.PI/180,C=(w,P)=>{t.awning_valance!==!1&&m([-v+.04,w,P+.01],[v-.04,w,P+.01],[-v+.04,w-.2,P+.01],[v-.04,w-.2,P+.01],M)},b=t.variant??"arm";if(b==="side"){let w=e,P=.05,F=0,N=-v+.08+a*(t.w-.16);h(-v,-v+.1,0,w+.05,F-.05,F+.05,f,d),h(v-.06,v,0,w+.05,F-.03,F+.03,f,d),a>.01&&m([-v+.1,w,F],[-v+.1,P,F],[N,w,F],[N,P,F],Math.max(4,Math.round((w-P)/.3))),u([N,P,F],[N,w,F],.02,p);return}if(b==="vertical"){let w=y,P=Math.min(t.d/2,y+_);h(-v,v,e,e+_,w,P,f,d);let F=(w+P)/2;for(let B of[-v+.02,v-.02])u([B,.02,F],[B,e,F],.02,p);let N=e-a*Math.max(0,e-.04);a>.01&&m([-v+.04,e,F],[v-.04,e,F],[-v+.04,N,F],[v-.04,N,F],M),u([-v+.03,N,F],[v-.03,N,F],.025,p);return}if(b==="pergola"){let w=t.d/2-.05,P=e+_,F=P-(w-y)*Math.tan(E);h(-v,v,e,P,y,y+_,f,d);for(let O of[-v+.05,v-.05])u([O,P,y+_],[O,F,w],.035,p),u([O,0,w],[O,F,w],.045,f);u([-v+.05,F,w],[v-.05,F,w],.035,p);let N=y+_+a*(w-y-_),B=P-(N-y)*Math.tan(E)+.04;a>.01&&m([-v+.08,P+.04,y+_],[v-.08,P+.04,y+_],[-v+.08,B,N],[v-.08,B,N],M),u([-v+.08,B,N],[v-.08,B,N],.025,p);return}let S=y,T=y+_;h(-v,v,e,e+_,S,T,f,d);let R=[T-.02,e+_*.35];if(b==="drop"){let w=Math.max(.3,t.d-_),P=[T,R[1]-w],F=a*(Math.PI/2+E),N=[P[0]+Math.sin(F)*w,P[1]+Math.cos(F)*w];for(let B of[-v+.08,v-.08])u([B,P[1],P[0]],[B,N[1],N[0]],.018,p);a>.01&&m([-v+.04,R[1],R[0]],[v-.04,R[1],R[0]],[-v+.04,N[1],N[0]],[v-.04,N[1],N[0]],M),u([-v+.02,N[1],N[0]],[v-.02,N[1],N[0]],.03,p),a>.05&&C(N[1],N[0]);return}let A=Math.max(0,t.d-_)*a,L=[R[0]+A,R[1]-A*Math.tan(E)];if(A>.01){m([-v+.04,R[1],R[0]],[v-.04,R[1],R[0]],[-v+.04,L[1],L[0]],[v-.04,L[1],L[0]],M);let w=Math.max(.3,(t.d-_)/2+.05);for(let P of[-1,1]){let F=P*(v-.12),N=[F,e+.02,T-.04],B=[F,L[1]-.02,L[0]],O=Math.hypot(B[2]-N[2],B[1]-N[1]),z=Math.sqrt(Math.max(0,w*w-(O/2)**2)),V=[F-P*Math.min(z,v-.15),(N[1]+B[1])/2,(N[2]+B[2])/2];u(N,V,.018,p),u(V,B,.018,p)}}u([-v+.02,L[1],L[0]],[v-.02,L[1],L[0]],.03,p),A>.05&&C(L[1],L[0])}function mp(i,t,e,n,s){let r=i.p.length;uy(i,t,e,n,s),t.mirror&&ku(i,r)}function uy(i,t,e,n,s){let r=t.rotation*ue,o=Math.cos(r),a=Math.sin(r),l=t.mirror?-1:1,c=(_,M)=>[t.x+l*_*o-M*a,t.z+l*_*a+M*o],u=e+.05,h=e+t.h-.02,f=new j(.75,.1,.14),d=new j(U.dark),p=new j(U.accent),x=t.w/2-.006,g=(_,M,E)=>{let C=E/m,b=new j(2043212).lerp(f,C),S=new j(U.body).lerp(f,C*.8),T=Math.cos(E),R=Math.sin(E),A=(P,F)=>c(_+M*(P*T-F*R),t.d/2+P*R+F*T),L=(P,F,N,B)=>{let[O,z,V,Q]=P;i.tri([O[0],F,O[1]],[z[0],F,z[1]],[V[0],N,V[1]],B),i.tri([O[0],F,O[1]],[V[0],N,V[1]],[Q[0],N,Q[1]],B)},w=(P,F,N,B,O,z,V,Q=V)=>{let G=[A(P,z),A(F,z),A(F,O),A(P,O)];L([G[0],G[1],G[1],G[0]],N,B,Q),L([G[3],G[2],G[2],G[3]],N,B,V),L([G[0],G[3],G[3],G[0]],N,B,V),L([G[1],G[2],G[2],G[1]],N,B,V),L([G[0],G[1],G[2],G[3]],B,B,V),L([G[3],G[2],G[1],G[0]],N,N,V)};return w(0,x,u,h,-dp,0,S,b),w(x-.05,x-.03,e+t.h*.45,e+t.h*.75,.005,.025,p),w},m=1.83;g(-t.w/2,1,n*m)(.12,.3,e+t.h*.5,e+t.h*.68,.001,.005,d),g(t.w/2,-1,s*m)(.06,x-.06,e+t.h*.52,e+t.h*.86,.001,.005,d)}function hy(i,t,e,n){Ui(i,t,e-.02,n-.04,1,n-.24,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.dark,U.dark,ft);for(let[s,r,o]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=s*t/.6,l=r*e/.62;i.cyl(a,l,o,n,n+.004,U.dark,1451583,12,qt)}}function fy(i,t,e,n){Ui(i,t,e-.02,n-.04,Math.max(1,Math.round(t/.45)),n-.2);let s=Math.min(.5,t-.2);i.box(-t/2,-s/2,n-.04,n,-e/2,e/2,U.whiteTop,U.whiteTop,ft),i.box(s/2,t/2,n-.04,n,-e/2,e/2,U.whiteTop,U.whiteTop,ft),i.box(-s/2,s/2,n-.04,n,-e/2,-e/2+.1,U.whiteTop,U.whiteTop),i.box(-s/2,s/2,n-.04,n,e/2-.08,e/2,U.whiteTop,U.whiteTop),i.box(-s/2,s/2,n-.2,n-.17,-e/2+.1,e/2-.08,U.metal,U.metal,qt),i.cyl(0,-e/2+.05,.02,n,n+.28,U.metal,U.metal,8),i.box(-.015,.015,n+.24,n+.28,-e/2+.05,-e/2+.22,U.metal)}function dy(i,t,e,n){i.box(-t/2,t/2,0,n-.02,-e/2,e/2,U.white,U.whiteTop,ft),i.box(-t/2,t/2,n-.02,n,-e/2,-e/2+.07,U.whiteTop),i.box(-t/2,t/2,n-.02,n,e/2-.07,e/2,U.whiteTop),i.box(-t/2,-t/2+.07,n-.02,n,-e/2+.07,e/2-.07,U.whiteTop),i.box(t/2-.07,t/2,n-.02,n,-e/2+.07,e/2-.07,U.whiteTop),i.box(-t/2+.07,t/2-.07,n-.03,n-.02,-e/2+.07,e/2-.07,U.glass,U.glass,qt),i.cyl(-t/2+.04,0,.02,n,n+.12,U.metal,U.metal,8)}function py(i,t,e,n){i.box(-t/2,t/2,0,.05,-e/2,e/2,U.whiteTop,U.whiteTop,ft),i.cyl(0,0,.04,.05,.052,U.metal,U.metal,8);for(let[s,r,o,a]of[[-t/2,e/2,t/2,e/2],[t/2,-e/2,t/2,e/2]])i.seg(s,.05,r,o,.05,a,qt),i.seg(s,n,r,o,n,a,qt),i.seg(o,.05,a,o,n,a,qt);i.cyl(-t/2+.06,-e/2+.06,.015,.05,n-.05,U.metal,U.metal,6),i.cyl(-t/2+.2,-e/2+.2,.1,n-.08,n-.06,U.metal,U.metal,12,qt)}function my(i,t,e,n){let s=Math.min(.18,e*.3);i.box(-t/2,t/2,.45,n,-e/2,-e/2+s,U.white,U.whiteTop,ft),i.box(-t*.3,t*.3,0,.36,-e/2+s-.02,e/2-.12,U.white,U.whiteTop),i.cyl(0,e/2-.26,Math.min(t/2,.19),.36,.41,U.white,U.whiteTop,12,ft),i.box(-t/2+.02,t/2-.02,.41,.43,-e/2+s,-e/2+s+.05,U.whiteTop)}function gy(i,t,e,n){Ui(i,t,e-.02,n-.12,t>.8?2:1,n-.3),i.box(-t/2,t/2,n-.12,n,-e/2,e/2,U.white,U.whiteTop,ft),i.box(-t/2+.07,t/2-.07,n-.005,n,-e/2+.12,e/2-.06,U.glass,U.glass,qt),i.cyl(0,-e/2+.06,.018,n,n+.2,U.metal,U.metal,8),i.box(-t/2+.04,t/2-.04,n+.35,n+1,-e/2,-e/2+.02,U.glass,U.glass,qt)}function xy(i,t,e,n){Ui(i,t,e,n,Math.max(2,Math.round(t/.6)),n*.55,!0);let s=Math.min(t*.8,1.45),r=s*.56;i.box(-.1,.1,n,n+.02,-e/2+.08,-e/2+.24,U.metal),i.box(-.02,.02,n+.02,n+.12,-e/2+.14,-e/2+.18,U.metal),i.box(-s/2,s/2,n+.1,n+.1+r,-e/2+.12,-e/2+.16,U.dark,U.dark,qt)}function by(i,t,e,n){let s=Math.min(t,e)/2,r=Math.min(.4,n*.34);i.cyl(0,0,s*.62,0,r,U.pot,U.pot,10,ft),i.cyl(0,0,s*.08,r,n*.55,U.wood,U.wood,6);let o=4;for(let a=0;a<o;a++){let l=a/(o-1),c=s*(.95-.55*l),u=r+(n-r)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,u,u+(n-r)*.16,U.plant,U.plantTop,8,a===o-1?Kt:null)}}function vy(i,t,e){i.box(-t/2,t/2,0,.012,-e/2,e/2,U.fabric,U.fabricTop);let n=Math.min(.12,Math.min(t,e)*.08);for(let[s,r,o,a]of[[-t/2+n,-e/2+n,t/2-n,-e/2+n],[t/2-n,-e/2+n,t/2-n,e/2-n],[t/2-n,e/2-n,-t/2+n,e/2-n],[-t/2+n,e/2-n,-t/2+n,-e/2+n]])i.seg(s,.014,r,o,.014,a,ft)}function _y(i,t,e,n){let s=Math.max(3,Math.round(n/.18)),r=n/s,o=e/s;for(let u=0;u<s;u++){let h=e/2-o*u,f=h-o,d=r*(u+1);i.box(-t/2,t/2,0,d,f,h,U.wood,U.woodTop),i.seg(-t/2,d,h,t/2,d,h,ft)}i.seg(-t/2,0,e/2,-t/2,r,e/2,ft);for(let u of[-t/2,t/2])i.seg(u,r,e/2,u,n,-e/2+o,Kt);let a=.9,l=t/2-.03,c=Math.max(1,s-4);i.seg(l,r+a,e/2-o/2,l,r*c+a,e/2-o*(c-.5),qt);for(let u=0;u<c;u+=3){let h=e/2-o*(u+.5),f=r*(u+1);i.seg(l,f,h,l,f+a,h,Kt)}}function yy(i,t,e,n){let{k:s,steps1:r,steps2:o,fw:a,landing:l,run:c,rise:u}=Fd(t,e,n),h=-t/2,f=-t/2+a,d=t/2-a,p=t/2,x=-e/2+l;for(let C=0;C<r;C++){let b=e/2-c*C,S=u*(C+1);i.box(h,f,0,S,b-c,b,U.wood,U.woodTop),i.seg(h,S,b,f,S,b,ft)}i.seg(h,0,e/2,h,u,e/2,ft);let g=u*s,m=.2;i.box(h,f,0,g,-e/2,x,U.wood,U.woodTop),i.box(f,p,Math.max(0,g-m),g,-e/2,x,U.wood,U.woodTop),i.seg(h,g,x,f,g,x,ft);for(let C=0;C<o;C++){let b=x+c*C,S=u*(s+1+C);i.box(d,p,Math.max(0,S-u-m),S,b,b+c,U.wood,U.woodTop),i.seg(d,S,b,p,S,b,ft)}i.seg(h,u,e/2,h,g,x,Kt),i.seg(p,g,x,p,n,x+c*(o-1),Kt);let v=.9,y=f-.03,_=d+.03,M=x-.03,E=Math.max(1,o-4);i.seg(y,u+v,e/2-c/2,y,g+v,M,qt),i.seg(y,g+v,M,_,g+v,M,qt),i.seg(_,g+v,M,_,u*(s+E)+v,x+c*(E-.5),qt);for(let C=0;C<r;C+=3){let b=e/2-c*(C+.5);i.seg(y,u*(C+1),b,y,u*(C+1)+v,b,Kt)}for(let C of[y,_])i.seg(C,g,M,C,g+v,M,Kt);for(let C=2;C<E;C+=3){let b=x+c*(C+.5);i.seg(_,u*(s+1+C),b,_,u*(s+1+C)+v,b,Kt)}}function My(i,t,e,n){os(i,t,e,.12,.03,.04,U.metal),i.box(-t/2,t/2,.12,n,-e/2,e/2-.02,U.wood,U.woodTop,ft),Qr(i,-t/2,t/2,.12,n,e/2-.02,Math.max(2,Math.round(t/.45)),n-.1,!0)}function Sy(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2-.02,U.wood,U.woodTop,ft),i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.06,U.dark);let s=Math.max(3,Math.round((n-.06)/.22)),r=e/2-.02;for(let o=1;o<s;o++){let a=.06+(n-.06)/s*o;i.seg(-t/2,a,r,t/2,a,r,Kt)}for(let o=0;o<s;o++){let a=.06+(n-.06)/s*(o+.5);i.seg(-.08,a,r+.012,.08,a,r+.012,qt)}}function wy(i,t,e,n){i.box(-t/2,t/2,0,.45,-e/2,e/2,U.wood,U.woodTop,ft),Qr(i,-t/2,t/2,.02,.45,e/2,Math.max(2,Math.round(t/.5)),.38,!0),i.box(-t/2,t/2,.45,n,-e/2,-e/2+.03,U.body,U.bodyTop,ft),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.wood,U.woodTop,ft);let s=Math.max(2,Math.round(t/.25));for(let r=0;r<s;r++){let o=-t/2+t/s*(r+.5);i.box(o-.015,o+.015,n-.32,n-.28,-e/2+.03,-e/2+.1,U.metal,U.metal)}}function cp(i,t,e,n,s){let o=Math.min(.5,s?e*.4:e),a=.08;i.box(-t/2,t/2,0,.45-.06,-e/2,-e/2+o,U.wood,U.woodTop,ft),i.box(-t/2,t/2,0,n,-e/2,-e/2+a,U.wood,U.woodTop,ft),i.box(-t/2+(s?o:.02),t/2-.02,.45-.06,.45+.02,-e/2+a,-e/2+o,U.cushion,U.cushion,Kt),s&&(i.box(-t/2,-t/2+o,0,.45-.06,-e/2+o,e/2,U.wood,U.woodTop,ft),i.box(-t/2,-t/2+a,0,n,-e/2+a,e/2,U.wood,U.woodTop,ft),i.box(-t/2+a,-t/2+o,.45-.06,.45+.02,-e/2+a,e/2-.02,U.cushion,U.cushion,Kt))}function Ty(i,t,e,n){let s=Math.min(t,e)/2;i.cyl(0,0,s*.8,0,.02,U.metal,U.metal,12),i.cyl(0,0,.025,.02,n-.05,U.metal,U.metal,6),i.cyl(0,0,s*.75,n*.35,n*.35+.015,U.metal,U.metal,12,Kt),i.cyl(0,0,s,n-.05,n,U.cushion,U.fabricTop,14,ft)}function Ey(i,t,e,n){let s=Math.min(t,e)/2;i.box(-s,s,.04,.08,-.03,.03,U.metal),i.box(-.03,.03,.04,.08,-s,s,U.metal),i.cyl(0,0,.06,.02,.1,U.dark,U.dark,8),i.cyl(0,0,.025,.1,.44,U.metal,U.metal,6),i.box(-s*.75,s*.75,.44,.52,-s*.7,s*.75,U.fabric,U.cushion,ft),i.box(-s*.7,s*.7,.58,n,-s*.78,-s*.62,U.fabric,U.fabricTop,ft),i.box(-.03,.03,.5,.62,-s*.72,-s*.62,U.metal)}function Ay(i,t,e,n){os(i,t,e,.08,.04,.05,U.wood),i.box(-t/2,t/2,.08,n,-e/2,e/2,U.fabric,U.cushion,ft)}function Ry(i,t,e,n){i.box(-t/2,t/2,1.45,1.45+n,-e/2,e/2-.02,U.body,U.bodyTop,ft),Qr(i,-t/2,t/2,1.45,1.45+n,e/2-.02,Math.max(1,Math.round(t/.5)),1.45+.08)}function Cy(i,t,e,n){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,U.body,U.bodyTop,ft),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,U.dark);let s=e/2-.02;i.box(-t/2+.03,t/2-.03,.85,1.45,s,s+.01,U.dark,U.dark,qt),i.seg(-t/2+.08,1.4,s+.02,t/2-.08,1.4,s+.02,qt);for(let r of[.85,1.45])i.seg(-t/2,r,s,t/2,r,s,Kt);i.seg(t/2-.06,.5,s+.012,t/2-.06,.7,s+.012,qt),i.seg(t/2-.06,1.6,s+.012,t/2-.06,1.8,s+.012,qt)}function Py(i,t,e,n){let s=e-.3;i.box(-t/2+.05,t/2-.05,.08,n-.04,-e/2+.02,-e/2+s,U.body,U.bodyTop,ft),i.box(-t/2+.07,t/2-.07,0,.08,-e/2+.04,-e/2+s-.04,U.dark),Qr(i,-t/2+.05,t/2-.05,.08,n-.04,-e/2+s,Math.max(2,Math.round(t/.6)),n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.whiteTop,U.whiteTop,ft)}function Iy(i,t,e,n){i.box(-t/2,t/2,.02,n-.04,-e/2,e/2-.02,U.body,U.bodyTop,ft),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,U.dark),i.seg(-t/2+.08,n-.12,e/2-.008,t/2-.08,n-.12,e/2-.008,qt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.whiteTop,U.whiteTop,ft)}function up(i,t,e,n,s){i.box(-t/2,t/2,0,n,-e/2,e/2-.02,U.white,U.whiteTop,ft);let r=e/2-.012;i.seg(-t/2,n-.14,r,t/2,n-.14,r,Kt),i.seg(t/2-.16,n-.07,r,t/2-.08,n-.07,r,qt);let o=(n-.14)/2+.04,a=Math.min(t*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let u=c/l*Math.PI*2,h=(c+1)/l*Math.PI*2;i.seg(Math.cos(u)*a,o+Math.sin(u)*a,r,Math.cos(h)*a,o+Math.sin(h)*a,r,qt),s||i.seg(Math.cos(u)*a*.72,o+Math.sin(u)*a*.72,r,Math.cos(h)*a*.72,o+Math.sin(h)*a*.72,r,Kt)}}function Ly(i,t,e,n){for(let o of[-1,1])for(let a of[-1,1])i.box(o*(t/2)-(o>0?.05:0),o*(t/2)+(o<0?.05:0),0,n,a*(e/2)-(a>0?.05:0),a*(e/2)+(a<0?.05:0),U.wood,U.woodTop);for(let o of[.25,n-.55])i.box(-t/2,t/2,o,o+.08,-e/2,e/2,U.wood,U.woodTop,ft),i.box(-t/2+.04,t/2-.04,o+.08,o+.24,-e/2+.05,e/2-.05,U.white,U.whiteTop,Kt),i.box(-t/2+.05,t/2-.05,o+.24,o+.33,-e/2+.08,-e/2+.4,U.whiteTop,U.whiteTop);i.box(-t/2,t/2,n-.2,n-.15,e/2-.05,e/2,U.wood,U.woodTop);let r=t/2-.35;for(let o of[r-.18,r+.18])i.seg(o,0,e/2+.02,o,n-.15,e/2+.02,ft);for(let o=.3;o<n-.2;o+=.28)i.seg(r-.18,o,e/2+.02,r+.18,o,e/2+.02,Kt)}function Fy(i,t,e,n){let s=Math.min(t,e)/2;i.cyl(0,0,s*.4,0,.03,U.metal,U.metal,12),i.cyl(0,0,.05,.03,n-.04,U.wood,U.wood,8),i.cyl(0,0,s,n-.04,n,U.wood,U.woodTop,20,ft)}function Dy(i,t,e,n){os(i,t,e,n-.03,.04,.03,U.wood),i.box(-t/2,t/2,n-.03,n,-e/2,e/2,U.wood,U.woodTop,ft),i.box(-t/2+.05,t/2-.05,.1,.13,-e/2+.05,e/2-.05,U.body,U.bodyTop,Kt)}function Ny(i,t,e,n){let s=1.3-n/2;i.box(-.12,.12,s+n*.3,s+n*.7,-e/2,-e/2+.03,U.metal),i.box(-t/2,t/2,s,s+n,-e/2+.03,e/2,U.dark,U.dark,qt)}function Uy(i,t,e,n){let s=Uu;i.box(-t/2+.05,-t/2+.08,0,s,-e/2,-e/2+.03,U.metal),i.box(t/2-.08,t/2-.05,0,s,-e/2,-e/2+.03,U.metal),i.box(-t/2,t/2,s,s+n,-e/2+.02,e/2,U.white,U.whiteTop,ft);let r=Math.max(3,Math.round(t/.1));for(let o=1;o<r;o++){let a=-t/2+t/r*o;i.seg(a,s+.03,e/2+.002,a,s+n-.03,e/2+.002,Kt)}}function Oy(i,t,e,n){let s=Ou;i.box(-t/2,t/2,s+.07,s+n,-e/2,e/2,U.white,U.whiteTop,ft),i.box(-t/2,t/2,s,s+.07,-e/2,e/2-.05,U.white,U.white,ft),i.box(-t/2+.04,t/2-.04,s+.012,s+.06,e/2-.05,e/2-.02,U.dark),i.seg(-t/2+.03,s+n*.55,e/2+.002,t/2-.03,s+n*.55,e/2+.002,Kt),i.seg(t/2-.14,s+n*.75,e/2+.002,t/2-.07,s+n*.75,e/2+.002,qt)}function Js(i,t,e,n,s,r=20){for(let o=0;o<r;o++){let a=o/r*Math.PI*2,l=(o+1)/r*Math.PI*2;i.seg(t+Math.cos(a)*n,e+Math.sin(a)*n,s,t+Math.cos(l)*n,e+Math.sin(l)*n,s,qt)}}function By(i,t,e,n,s){let o=e/2;if(s==="slim"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,U.dark,U.body,ft),i.seg(-t*.25,1.1+n*.15,o+.004,-t*.25,1.1+n*.85,o+.004,qt),i.box(-t*.1,t*.3,1.1+n*.7,1.1+n*.85,o,o+.005,U.dark);return}if(s==="hybrid"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,U.white,U.whiteTop,ft),Js(i,0,1.1+n*.66,Math.min(t,n)*.22,o+.004),i.seg(-t*.08,1.1+n*.66,o+.005,t*.08,1.1+n*.66,o+.005,qt);for(let a of[-1,1])Js(i,a*t*.22,1.1+n*.2,Math.min(t,n)*.1,-e/2-.002,12);return}i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,U.white,U.whiteTop,ft),i.box(-t*.28,t*.28,1.1+n*.58,1.1+n*.82,e/2,e/2+.006,U.dark),i.seg(-t*.3,1.1+n*.45,e/2+.004,t*.3,1.1+n*.45,e/2+.004,qt);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*t/2+a*.002,1.1+n*l/6,-e/2+.03,a*t/2+a*.002,1.1+n*l/6,e/2-.03,Kt)}function ky(i,t,e,n){let s=Math.min(e,n)*.32;i.box(-t/2,t/2,0,.03,-e/2,e/2,U.dark),i.box(-t/2,t*.1,.05,.05+s*2,-s,s,U.metal,U.metal,ft);for(let o of[-t*.4,-t*.25,-t*.1])i.seg(o,.05+s*2+.003,-s,o,.05+s*2+.003,s,Kt);i.cyl(t*.28,0,Math.min(t*.2,e*.45),.03,n*.82,U.dark,U.body,14,ft),i.cyl(t*.28,0,Math.min(t*.2,e*.45)*.9,n*.82,n,U.glass,U.glass,14);let r=Math.min(t*.2,e*.45)*.95;for(let o=0;o<16;o++){let a=o/16*Math.PI*2,l=(o+1)/16*Math.PI*2;i.seg(t*.28+Math.cos(a)*r,n*.83,Math.sin(a)*r,t*.28+Math.cos(l)*r,n*.83,Math.sin(l)*r,qt)}}function zy(i,t,e,n,s){let r=Math.min(t,e)/2;if(i.cyl(0,0,r*.95,0,n*.08,U.dark,U.dark,16),i.cyl(0,0,r,n*.08,n*.78,U.dark,U.body,18,ft),i.cyl(0,0,r*.75,n*.78,n*.84,U.dark,U.body,16),s==="side6"){let a=r*.9;i.box(a,a+.12,n*.3,n*.66,-.07,.07,U.dark,U.metal,ft),Js(i,a+.06,n*.56,.05,.075,16),i.box(a+.04,a+.08,n*.66,n*.72,-.015,.015,U.dark,U.body);return}i.cyl(0,0,r*.45,n*.84,n*.95,U.dark,U.metal,16,ft);let o=r*.4;for(let a=0;a<16;a++){let l=a/16*Math.PI*2,c=(a+1)/16*Math.PI*2;i.seg(Math.cos(l)*o,n*.955,Math.sin(l)*o,Math.cos(c)*o,n*.955,Math.sin(c)*o,qt)}i.box(-.02,.02,n*.95,n,-r*.35,r*.35,U.dark,U.body)}function Vy(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2,U.white,U.whiteTop,ft);for(let a of[-t*.4,t*.4])i.box(a-.03,a+.03,0,.06,-e/2+.02,e/2-.02,U.dark);let s=Math.min(n*.38,t*.3),r=-t*.15,o=n*.53;Js(i,r,o,s,e/2+.004,24),Js(i,r,o,s*.55,e/2+.004,16),i.seg(r-s,o,e/2+.005,r+s,o,e/2+.005,Kt),i.seg(r,o-s,e/2+.005,r,o+s,e/2+.005,Kt),i.box(t*.22,t*.42,n*.62,n*.8,e/2,e/2+.006,U.dark),i.seg(t*.25,n*.71,e/2+.008,t*.39,n*.71,e/2+.008,qt);for(let a=1;a<8;a++)i.seg(t/2+.002,n*(.1+a*.1),-e/2+.03,t/2+.002,n*(.1+a*.1),e/2-.03,Kt)}function Gy(i,t,e,n){i.box(-t/2,t/2,.9,.9+n*.45,-e/2,e/2,U.white,U.whiteTop,ft);for(let r of[-1,1])Js(i,r*t*.22,.9+n*.22,Math.min(t,n)*.09,e/2+.004,12);i.seg(-t*.35,.9+n*.4,e/2+.004,t*.35,.9+n*.4,e/2+.004,qt);for(let r of[-1,1])i.box(r*t*.25-t*.18,r*t*.25+t*.18,0,n*.5,-e/2,e/2,U.white,U.glass,Kt)}function Hy(i,t,e,n){let s=Pd-n*.4;i.box(-t/2,t/2,s+n*.25,s+n*.6,-e*.25,e*.25,U.metal,U.metal,ft),i.box(-t*.12,t*.12,s+n*.6,s+n*.8,-e*.12,e*.12,U.dark),i.box(-t*.1,t*.45,s+n*.8,s+n,-e*.15,e*.15,U.accent,U.accent)}function Wy(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,U.dark,U.body,ft),i.box(-t/2-.01,t/2+.01,n,n+.03,-e/2-.01,e/2+.01,U.dark,U.body),i.seg(-t/2,n+.032,e/2+.01,t/2,n+.032,e/2+.01,qt),i.seg(-t*.3,n*.55,e/2+.003,t*.3,n*.55,e/2+.003,Kt)}function Xy(i,t,e,n){i.box(-t/2,t/2,1,1+n,-e/2,e/2,U.dark,U.body,ft);let r=Math.min(t,n)*.28,o=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,u=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*r,o+Math.sin(c)*r,e/2+.003,Math.cos(u)*r,o+Math.sin(u)*r,e/2+.003,qt)}i.box(-.015,.015,1-.35,1,e/2-.03,e/2,U.dark),i.box(-.06,.06,1-.42,1-.35,e/2-.05,e/2,U.dark,U.body)}function Yy(i,t,e,n){i.box(-t/2,t/2,.4,.4+n,-e/2,e/2,U.white,U.whiteTop,ft),i.seg(-t/2+.025,.4+.025,e/2+.003,-t/2+.025,.4+n-.025,e/2+.003,Kt),i.seg(-t/2+.025,.4+n-.025,e/2+.003,t/2-.025,.4+n-.025,e/2+.003,Kt),i.box(t/2-.06,t/2-.035,.4+n*.5-.05,.4+n*.5+.05,e/2,e/2+.012,U.dark),i.box(-t*.3,t*.3,.4+n*.6,.4+n*.8,e/2,e/2+.005,U.dark),i.seg(-t*.22,.4+n*.7,e/2+.008,t*.22,.4+n*.7,e/2+.008,qt)}function qy(i,t,e,n,s){if(s==="wall"){i.box(-t/2,t/2,.5,.5+n,-e/2,e/2,U.white,U.whiteTop,ft),i.seg(-t*.3,.5+n*.9,e/2+.004,t*.3,.5+n*.9,e/2+.004,qt),i.seg(-t*.3,.5+n*.08,e/2+.003,t*.3,.5+n*.08,e/2+.003,Kt);return}if(s==="cube"){i.box(-t/2+.01,t/2-.01,0,.03,-e/2+.01,e/2-.01,U.dark),i.box(-t/2,t/2,.03,n,-e/2,e/2,U.dark,U.body,ft),i.seg(-t*.35,n*.85,e/2+.004,t*.35,n*.85,e/2+.004,qt),i.box(-t*.15,t*.15,n,n+.025,-.012,.012,U.dark);return}i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.02,U.dark);let r=Math.max(2,Math.round((n-.06)/.3)),o=(n-.06)/r;for(let a=0;a<r;a++)i.box(-t/2,t/2,.06+a*o+.004,.06+(a+1)*o,-e/2,e/2,U.white,U.whiteTop,ft);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-t*.04,l,e/2+.003,t*.04,l,e/2+.003,qt)}}var Uu=.12,Ou=2.05;function Bu(i,t){let e=$y(i,t);return e&&i.mirror?{...e,x0:-e.x1,x1:-e.x0}:e}function $y(i,t){let e=Math.max(.05,i.w),n=Math.max(.05,i.d),s=Math.max(.005,i.h),r=yd(i.type);if(r){let l=t?hn(t,i):0,c=(r.x-r.w/2)*e,u=(r.x+r.w/2)*e,h=Math.min(.02,(u-c)*.05);return{x0:c+h,x1:u-h,y0:l+r.y*s+h,y1:l+(r.y+r.h)*s-h,z:(r.z+r.d/2)*n}}let o=t&&i.type!=="fridge_smart"?hn(t,i)-Hr(i):0,a=Zy(i,e,n,s,t);return a?{...a,y0:a.y0+o,y1:a.y1+o}:null}function Zy(i,t,e,n,s){if(i.type==="pool_pump"){let r=Math.min(e,n)*.32;return{x0:-t/2+.03,x1:t*.08,y0:.07,y1:.03+r*2,z:r+.004}}if(i.type==="pool_heat_pump")return{x0:-t/2+.05,x1:t*.15,y0:n*.15,y1:n*.9,z:e/2+.003};if(i.type==="pool_filter"){let r=Math.min(t,e)/2;return{x0:-r*.4,x1:r*.4,y0:n*.85,y1:n*.94,z:r*.45+.004}}if(i.type==="pool_dosing")return{x0:-t*.4,x1:t*.4,y0:.9+n*.05,y1:.9+n*.4,z:e/2+.003};if(i.type==="tv_board"){let r=Math.min(t*.8,1.45),o=r*.56;return{x0:-r/2+.02,x1:r/2-.02,y0:n+.12,y1:n+.08+o,z:-e/2+.165}}if(i.type==="tv_wall"){let r=1.3-n/2;return{x0:-t/2+.02,x1:t/2-.02,y0:r+.02,y1:r+n-.02,z:e/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-e/2+.115};if(i.type==="fridge_smart"){let r=s?hn(s,i):0;return{x0:.06,x1:t/2-.06,y0:r+n*.52+.01,y1:r+n*.86-.01,z:e/2+.006}}if(i.type==="radiator")return{x0:-t/2+.02,x1:t/2-.02,y0:Uu+.02,y1:Uu+n-.02,z:e/2+.004};if(i.type==="ac_unit")return{x0:-t/2+.05,x1:t/2-.05,y0:Ou+.015,y1:Ou+.06,z:e/2-.015};if(i.type==="washer"||i.type==="dryer"){let r=(n-.14)/2+.04,o=Math.min(t*.36,(n-.2)*.42)*.8;return{x0:-o,x1:o,y0:r-o,y1:r+o,z:e/2-.004}}return i.type==="dishwasher"?{x0:-t/2+.06,x1:t/2-.06,y0:n-.16,y1:n-.08,z:e/2-.004}:null}function Jy(i,t,e,n,s){let r=Math.min(.14,Math.max(.06,Math.min(e,n)*.15)),o=new j(1-s,1-s,1-s),a=new j(1,1,1),l=.003,c=[t(-e/2,-n/2),t(e/2,-n/2),t(e/2,n/2),t(-e/2,n/2)],u=[t(-e/2-r,-n/2-r),t(e/2+r,-n/2-r),t(e/2+r,n/2+r),t(-e/2-r,n/2+r)],h=d=>[d[0],l,d[1]],f=i.p.length;i.tri(h(c[0]),h(c[1]),h(c[2]),o),i.tri(h(c[0]),h(c[2]),h(c[3]),o);for(let d=0;d<4;d++){let p=(d+1)%4;i.tri(h(c[d]),h(u[d]),h(u[p]),o,a,a),i.tri(h(c[d]),h(u[p]),h(c[p]),o,a,o)}fp(t)&&ku(i,f)}function Il(i,t,e,n,s=0){Ky(i,t,e,n,s)}function ku(i,t){let e=(n,s,r)=>{if(n)for(let o=0;o<r;o++){let a=s+r+o,l=s+2*r+o,c=n[a];n[a]=n[l],n[l]=c}};for(let n=t;n<i.p.length;n+=9){let s=n/9;e(i.p,n,3),e(i.c,n,3),e(i.f,s*3,1),e(i.uv,s*6,2),e(i.tile,s*6,2)}}function Ky(i,t,e,n,s){let r=Ae(n.type)?0:s-Hr(n);if(Ae(n.type)||Math.abs(r)<.001)return hp(i,t,e,n,s);let o=i.p.length,a=t.p.length;hp(i,t,s<.05?e:new ee,n,0);for(let l=o+1;l<i.p.length;l+=3)i.p[l]+=r;for(let l=a+1;l<t.p.length;l+=3)t.p[l]+=r}function hp(i,t,e,n,s){let r=n.rotation*ue,o=Math.cos(r),a=Math.sin(r),l=n.mirror?-1:1,c=(p,x)=>[n.x+l*p*o-x*a,n.z+l*p*a+x*o],u=new Zs(i,t,c),h=Math.max(.05,n.w),f=Math.max(.05,n.d),d=Math.max(.005,n.h);switch(n.type){case"sofa":ap(u,h,f,d,Math.max(1,Math.round((h-.4)/.62)));break;case"armchair":ap(u,h,f,d,1);break;case"sofa_l":lp(u,h,f,d,!1);break;case"sofa_u":lp(u,h,f,d,!0);break;case"bed":ny(u,h,f,d);break;case"chair":iy(u,h,f,d);break;case"table":sy(u,h,f,d);break;case"desk":ry(u,h,f,d);break;case"nightstand":Ui(u,h,f,d,1,d*.72,!0),u.seg(-h/2,d*.5,f/2-.02,h/2,d*.5,f/2-.02,Kt);break;case"wardrobe":Ui(u,h,f,d,Math.max(2,Math.round(h/.5)),d*.5);break;case"shelf":oy(u,h,f,d);break;case"kitchen":ay(u,h,f,d);break;case"fridge":ly(u,h,f,d);break;case"fridge_smart":cy(u,h,f,d);break;case"awning":return;case"stove":hy(u,h,f,d);break;case"sink":fy(u,h,f,d);break;case"bathtub":dy(u,h,f,d);break;case"shower":py(u,h,f,d);break;case"wc":my(u,h,f,d);break;case"washbasin":gy(u,h,f,d);break;case"tv_board":xy(u,h,f,d);break;case"plant":by(u,h,f,d);break;case"rug":vy(u,h,f);return;case"stairs":_y(u,h,f,d);break;case"stairs_u":yy(u,h,f,d);break;case"stairwell":return;case"sideboard":My(u,h,f,d);break;case"dresser":Sy(u,h,f,d);break;case"tall_cabinet":Ui(u,h,f,d,1,d*.5);break;case"coat_rack":wy(u,h,f,d);break;case"bench":cp(u,h,f,d,!1);break;case"corner_bench":cp(u,h,f,d,!0);break;case"bar_stool":Ty(u,h,f,d);break;case"office_chair":Ey(u,h,f,d);break;case"stool":Ay(u,h,f,d);break;case"kitchen_wall":Ry(u,h,f,d);return;case"kitchen_tall":Cy(u,h,f,d);break;case"island":Py(u,h,f,d);break;case"worktop":u.box(-h/2,h/2,Math.max(0,d-.04),d,-f/2,f/2,U.whiteTop,U.whiteTop,ft);return;case"dishwasher":Iy(u,h,f,d);break;case"washer":up(u,h,f,d,!1);break;case"dryer":up(u,h,f,d,!0);break;case"bunk_bed":Ly(u,h,f,d);break;case"table_round":Fy(u,h,f,d);break;case"coffee_table":Dy(u,h,f,d);break;case"tv_wall":Ny(u,h,f,d);return;case"parking":{let x=[[-h/2,-f/2],[h/2,-f/2],[h/2,f/2],[-h/2,f/2]];for(let g=0;g<4;g++)u.seg(x[g][0],.012,x[g][1],x[(g+1)%4][0],.012,x[(g+1)%4][1],Kt);u.seg(-h*.15,.012,f/2-.45,0,.012,f/2-.2,ft),u.seg(0,.012,f/2-.2,h*.15,.012,f/2-.45,ft);return}case"robot_vacuum":u.box(-h*.45,h*.45,0,d,-f/2,-f/2+f*.3,U.white,U.whiteTop,ft),u.box(-h*.2,h*.2,d*.5,d*.62,-f/2+f*.3,-f/2+f*.31,U.accent);return;case"radiator":Uy(u,h,f,d);return;case"ac_unit":Oy(u,h,f,d);return;case"inverter":By(u,h,f,d,n.variant??null);return;case"grid_point":Wy(u,h,f,d);break;case"wallbox":Xy(u,h,f,d);return;case"pool_pump":ky(u,h,f,d);break;case"pool_filter":zy(u,h,f,d,n.variant??null);break;case"pool_heat_pump":Vy(u,h,f,d);break;case"pool_dosing":Gy(u,h,f,d);break;case"pool_valve":Hy(u,h,f,d);return;case"meter":Yy(u,h,f,d);return;case"home_battery":if(qy(u,h,f,d,n.variant??null),n.variant==="wall")return;break;default:{let p=Ae(n.type);if(p){if(zu(u,p,h,f,d,s,null),s>.05)return}else u.box(-h/2,h/2,0,d,-f/2,f/2,U.body,U.bodyTop,ft)}}Jy(e,c,h,f,n.type==="plant"?.35:.5)}function Nu(i,t){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let e=U;return(t?e[`${i}Top`]:void 0)??e[i]??null}function zu(i,t,e,n,s,r,o,a=null){let l=!!a;for(let c of t.parts){if(a&&!a(c))continue;let u=l?{...c,glow:!0,w:c.w+.006/e,d:c.d+.006/n,y:Math.max(0,c.y-.002/s),h:c.h+.004/s}:c,h=u.glow&&o!==null,f=h?o:Nu(u.color,!1)??U.body,d=h?o:Nu(u.top,!1)??Nu(u.color,!0)??Bt(f,1.25).getHex(),p=r+u.y*s,x=r+Math.min(s,(u.y+u.h)*s),g=u.edges==="glow"?ss:u.edges==="faint"?Kt:u.edges?ft:null,m=u.rot?i.rotated(u.x*e,u.z*n,u.rot):i;if(u.shape==="cyl"&&(u.axis==="x"||u.axis==="z"))m.lyingCyl(u.axis,u.x*e,u.z*n,p,x,u.axis==="x"?u.w*e:u.d*n,u.axis==="x"?u.d*n:u.w*e,f,d,14,g);else if(u.shape==="cyl")m.cyl(u.x*e,u.z*n,Math.min(u.w*e,u.d*n)/2,p,x,f,d,14,g);else if(u.shape==="loft"){let v=u.tx??u.x,y=u.tz??u.z,_=u.tw??u.w,M=u.td??u.d;m.loft([(u.x-u.w/2)*e,(u.x+u.w/2)*e,(u.z-u.d/2)*n,(u.z+u.d/2)*n],[(v-_/2)*e,(v+_/2)*e,(y-M/2)*n,(y+M/2)*n],p,x,f,d,g)}else m.box((u.x-u.w/2)*e,(u.x+u.w/2)*e,p,x,(u.z-u.d/2)*n,(u.z+u.d/2)*n,f,d,g)}}function gp(i,t,e,n,s,r){let o=r*ue,a=Math.cos(o),l=Math.sin(o),c=(p,x)=>[e+p*a-x*l,s+p*l+x*a],u=new Zs(i,new Le,c),h=1713728,f=2373216,d=725279;if(t==="camera_ceiling"){u.cyl(0,0,.07,n-.03,n,h,f,12),u.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,d,h),u.cyl(0,0,.012,n-.075,n-.06,U.accent,U.accent,6);return}u.box(-.02,.02,n-.02,n+.02,-.06,-.03,h,f),u.box(-.01,.01,n-.01,n+.06,-.05,-.03,h,f),u.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,h,f),u.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,d,U.accent,10),u.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function to(i,t,e,n,s,r=o=>!!o.glow){let o=e.rotation*ue,a=Math.cos(o),l=Math.sin(o),c=e.mirror?-1:1,u=(h,f)=>[e.x+c*h*a-f*l,e.z+c*h*l+f*a];zu(new Zs(i,new Le,u),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,s,r)}function Ll(i,t,e,n,s){let r=e.rotation*ue,o=Math.cos(r),a=Math.sin(r),l=e.mirror?-1:1,c=(u,h)=>[e.x+l*u*o-h*a,e.z+l*u*a+h*o];zu(new Zs(i,new Le,c),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,s)}var jy={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5},balcony:{color:1909304,side:1448492,edge:5995775,edgeAlpha:.5}};function Qy(i,t,e){let n=[(t[0]+e[0])/2,(t[1]+e[1])/2],s=e[0]-t[0],r=e[1]-t[1],o=Math.hypot(s,r)||1;return i.rooms.some(a=>a.points.some((l,c)=>{let u=a.points[(c+1)%a.points.length],h=u[0]-l[0],f=u[1]-l[1],d=Math.hypot(h,f)||1;if(Math.abs((s*f-r*h)/(o*d))>.05)return!1;let p=Math.max(0,Math.min(1,((n[0]-l[0])*h+(n[1]-l[1])*f)/(d*d)));return Math.hypot(l[0]+h*p-n[0],l[1]+f*p-n[1])<.4}))}function bp(i,t){return t.type==="pool"?wl(i,t):Wr(i,t)+(Pi(t.type)?.01:yl[t.type])}function eo(i){return Fn(i)>=0?i:[...i].reverse()}function t1(i,t){let e=i[t];if(Pi(e.type)||e.type==="pool")return[];let n=[];for(let s=0;s<i.length;s++){let r=i[s];s===t||!(r.cut&&s>t||r.type==="pool")||r.points.length<3||r.points.every(o=>Jt(o,e.points))&&n.push(eo(r.points))}return n}function xp(i,t,e,n,s,r,o,a,l=0){let c=e[0]-t[0],u=e[1]-t[1],h=Math.hypot(c,u);if(h<1e-6)return;let f=-u/h*n*.5,d=c/h*n*.5;if(Math.abs(l)<1e-4){Re(i,eo([[t[0]+f,t[1]+d],[e[0]+f,e[1]+d],[e[0]-f,e[1]-d],[t[0]-f,t[1]-d]]),s,r,o,a,{aoFrom:s-1});return}let p=(_,M)=>[t[0]+f*M,_,t[1]+d*M],x=(_,M)=>[e[0]+f*M,_+l,e[1]+d*M],g=(_,M)=>{i.tri(_[0],_[1],_[2],M,M,M,void 0,Ht),i.tri(_[0],_[2],_[3],M,M,M,void 0,Ht),i.tri(_[0],_[2],_[1],M,M,M,void 0,Ht),i.tri(_[0],_[3],_[2],M,M,M,void 0,Ht)},m=new j(a),v=new j(Bt(o,.9)),y=new j(Bt(o,.6));g([p(r,1),x(r,1),x(r,-1),p(r,-1)],m),g([p(s,1),x(s,1),x(s,-1),p(s,-1)],y),g([p(s,1),x(s,1),x(r,1),p(r,1)],v),g([p(s,-1),x(s,-1),x(r,-1),p(r,-1)],v),g([p(s,1),p(s,-1),p(r,-1),p(r,1)],v),g([x(s,1),x(s,-1),x(r,-1),x(r,1)],v)}function vp(i,t,e,n){let s=e.outdoor??[];s.forEach((r,o)=>{if(r.points.length<3)return;let a=Wr(e,r),l=(v,y)=>a-Xr(e,r,v,y),c=a-(r.type==="pool"?0:r.slope??0),u=Pi(r.type)&&r.height?r.height:yl[r.type],h={...jy[r.type],top:u},f=eo(r.points),d=Bt(h.edge,h.edgeAlpha),p=r.open&&(r.type==="fence"||r.type==="pergola")?f.length-1:-1,x=v=>{if(r.outline!==!1)for(let y=0;y<f.length;y++){if(y===p)continue;let _=f[y],M=f[(y+1)%f.length];t.seg([_[0],v(_[0],_[1]),_[1]],[M[0],v(M[0],M[1]),M[1]],d,Ht)}},g=n??i,m=new j(n?1734832:h.color);switch(r.type){case"pool":{let v=new j(h.side),y=new j(Bt(h.side,.55)),_=new j(932440),M=wl(e,r),E=Sl(e,r),C=Rd(e,r);for(let[b,S,T]of Ni(f)){let R=f[b],A=f[S],L=f[T];(n?g:i).tri([R[0],M,R[1]],[L[0],M,L[1]],[A[0],M,A[1]],m,m,m,void 0,Ht),i.tri([R[0],C,R[1]],[L[0],C,L[1]],[A[0],C,A[1]],_,_,_,void 0,Ht)}for(let b=0;b<f.length;b++){let S=f[b],T=f[(b+1)%f.length];i.tri([T[0],C,T[1]],[T[0],E,T[1]],[S[0],E,S[1]],y,v,v,void 0,Ht),i.tri([T[0],C,T[1]],[S[0],E,S[1]],[S[0],C,S[1]],y,v,y,void 0,Ht)}if(!r.above&&Tu(e,r)){let b=new j(660258),S=new j(396054),T=C-.2,R=Math.min(a,E);for(let A=0;A<f.length;A++){let L=f[A],w=f[(A+1)%f.length];i.tri([L[0],T,L[1]],[L[0],R,L[1]],[w[0],R,w[1]],S,b,b,void 0,Ht),i.tri([L[0],T,L[1]],[w[0],R,w[1]],[w[0],T,w[1]],S,b,S,void 0,Ht)}for(let[A,L,w]of Ni(f)){let P=f[A],F=f[L],N=f[w];i.tri([P[0],T,P[1]],[F[0],T,F[1]],[N[0],T,N[1]],S,S,S,void 0,Ht)}if(r.outline!==!1)for(let A=0;A<f.length;A++){let L=f[A],w=f[(A+1)%f.length];t.seg([L[0],T,L[1]],[w[0],T,w[1]],Bt(h.edge,h.edgeAlpha*.35),Ht),t.seg([L[0],T,L[1]],[L[0],R,L[1]],Bt(h.edge,h.edgeAlpha*.25),Ht)}}if(E>a+.02){let b=new j(2044240),S=new j(1187123);for(let T=0;T<f.length;T++){let R=f[T],A=f[(T+1)%f.length];i.tri([R[0],a,R[1]],[R[0],E,R[1]],[A[0],E,A[1]],S,b,b,void 0,Ht),i.tri([R[0],a,R[1]],[A[0],E,A[1]],[A[0],a,A[1]],S,b,S,void 0,Ht)}x(()=>a+.005)}if(x(()=>E),x(()=>M+.005),r.outline!==!1)for(let b=0;b<f.length;b++){let S=f[b],T=f[(b+1)%f.length];t.seg([S[0],C+.005,S[1]],[T[0],C+.005,T[1]],Bt(h.edge,h.edgeAlpha*.4),Ht)}break}case"fence":{for(let v=0;v<f.length;v++){if(v===p)continue;let y=f[v],_=f[(v+1)%f.length],M=Math.hypot(_[0]-y[0],_[1]-y[1]),E=Math.max(1,Math.round(M/2)),C=p>=0&&v===p-1?E:E-1;for(let b=0;b<=C;b++){let S=b/E,T=y[0]+(_[0]-y[0])*S,R=y[1]+(_[1]-y[1])*S,A=l(T,R);Re(i,eo([[T-.04,R-.04],[T+.04,R-.04],[T+.04,R+.04],[T-.04,R+.04]]),A,A+h.top,h.side,h.color)}for(let b of[.35,.85])t.seg([y[0],l(y[0],y[1])+b*h.top,y[1]],[_[0],l(_[0],_[1])+b*h.top,_[1]],d,Ht)}break}case"pergola":{let v=h.top;for(let[y,_]of f){let M=l(y,_);Re(i,eo([[y-.06,_-.06],[y+.06,_-.06],[y+.06,_+.06],[y-.06,_+.06]]),M,M+v,h.side,h.color)}for(let y=0;y<f.length;y++){if(y===p)continue;let _=f[y],M=f[(y+1)%f.length],E=l(_[0],_[1])+v;if(xp(i,_,M,.12,E-.16,E,h.side,h.color,l(M[0],M[1])-l(_[0],_[1])),r.bracing){let C=l(_[0],_[1]),b=l(M[0],M[1]);t.seg([_[0],C+.25,_[1]],[M[0],b+v-.25,M[1]],d,Ht),t.seg([M[0],b+.25,M[1]],[_[0],C+v-.25,_[1]],d,Ht)}}if(Od(f)){let y=Bd(f),_=y.x1-y.x0,M=y.z1-y.z0,E=_>=M,C=E?_:M,b=Math.max(1,Math.round(C/.6));for(let S=1;S<b;S++){let T=(E?y.x0:y.z0)+C*S/b,R=E?[T,y.z0+.06]:[y.x0+.06,T],A=E?[T,y.z1-.06]:[y.x1-.06,T],L=l(R[0],R[1])+v;xp(i,R,A,.06,L-.04,L+.08,h.side,h.color,l(A[0],A[1])-l(R[0],R[1]))}}x((y,_)=>l(y,_)+v+.004);break}case"balcony":{Re(i,f,a-.18,a+h.top,h.side,h.color,{aoFrom:a-.18}),x(()=>a+h.top+.004);let y=r.height&&r.height>.3?r.height:1,_=Bt(9417983,.42),M=Bt(3662079,.55);for(let E=0;E<f.length;E++){let C=f[E],b=f[(E+1)%f.length];if(Qy(e,C,b))continue;let S=Math.hypot(b[0]-C[0],b[1]-C[1]),T=a+h.top;t.seg([C[0],T+y,C[1]],[b[0],T+y,b[1]],M,Ht),t.seg([C[0],T+.1,C[1]],[b[0],T+.1,b[1]],_,Ht);let R=Math.max(1,Math.round(S/.12));for(let A=0;A<=R;A++){let L=A/R,w=C[0]+(b[0]-C[0])*L,P=C[1]+(b[1]-C[1])*L;t.seg([w,T,P],[w,T+y,P],A===0||A===R?M:_,Ht)}}break}default:{let v=(_,M)=>l(_,M)+h.top,y=t1(s,o);if(Re(i,f,c,r.slope?v:a+h.top,h.side,h.color,{aoFrom:c,holes:y}),x((_,M)=>v(_,M)+.004),r.type==="hedge"&&x((_,M)=>l(_,M)+.004),r.outline!==!1)for(let _ of y)for(let M=0;M<_.length;M++){let E=_[M],C=_[(M+1)%_.length];t.seg([E[0],v(E[0],E[1])+.004,E[1]],[C[0],v(C[0],C[1])+.004,C[1]],d,Ht)}}}})}var Dl=Math.PI/180,e1=1.13,n1=1.72,Vu=.025,as=.07,_p=.25;function yp(i,t){let e=[];for(let n of i.floors){if(t&&n.id!==t)continue;let{walls:s}=oi(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let r of s){if(!r.exterior&&!r.free)continue;let o=r.b[0]-r.a[0],a=r.b[1]-r.a[1],l=Math.hypot(o,a);if(l<.5)continue;let c=a/l,u=-o/l,h=Math.min(n.height,r.height??n.height),f=r.sources.find(x=>x.room_id===r.roomLeft)?.edge??null,d={floorId:n.id,room:r.roomLeft,edge:f,free:!!r.free},p=(x,g,m,v)=>e.push({key:x,section:null,side:"top",flat:!1,o:g,eu:m,es:[0,1,0],n:v,lu:l,ls:h,pitch:90,span:()=>[0,l],facing:[v[0],v[2]],wall:d});p(`wall:${n.id}:${r.id}`,[r.a[0]+c*r.right,n.elevation,r.a[1]+u*r.right],[o/l,0,a/l],[c,0,u]),r.free&&p(`wall:${n.id}:${r.id}:back`,[r.b[0]-c*r.left,n.elevation,r.b[1]-u*r.left],[-o/l,0,-a/l],[-c,0,-u])}}return e}var Gu="ground";function Hu(i){let t=[...i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation);return t.find(e=>e.elevation>-.5)??t[0]??i.floors[0]??null}function Mp(i,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],s=[-Math.sin(e),0,Math.cos(e)],r=Hu(i),o=n[0]*t.u+s[0]*t.v,a=n[2]*t.u+s[2]*t.v,l=r?r.elevation+(t.base!=null?t.base:Ad(r,o,a)):t.base??0;return{key:Gu,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:s,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[s[0],s[2]],unbounded:!0}}function i1(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function cs(i){let t=i.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(v=>s1(v,Al(i,v,v.overhang??t.overhang)));let e=i1(i);if(!e)return[];let n=e.rooms.flatMap(v=>v.points.map(y=>y[0])),s=e.rooms.flatMap(v=>v.points.map(y=>y[1])),r=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-r,a=Math.max(...n)+r,l=Math.min(...s)-r,c=Math.max(...s)+r,u=e.elevation+e.height;if(t.type==="flat")return[Sp("main",null,o,l,a,c,u+_p)];let h=a-o>=c-l,f=t.ridge==="short"?!h:h,d=(f?c-l:a-o)/2,p=d*Math.tan(t.pitch*Dl),x=(v,y,_)=>f?[v,u+_,(l+c)/2+y]:[(o+a)/2+y,u+_,v],[g,m]=f?[o,a]:[l,c];return[-1,1].map(v=>Fl(`main:${v<0?"a":"b"}`,null,v<0?"a":"b",x(g,v*d,0),x(m,v*d,0),x(g,0,p),t.pitch,()=>[0,m-g]))}function s1(i,t){let e=$n(i),n=yn(i),s=(x,g,m)=>{let[v,y]=e.at(x,g);return[v,m,y]},r=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let x=e.at(a,-r),g=e.at(l,e.w+o);return[Sp(i.id,i.id,Math.min(x[0],g[0]),Math.min(x[1],g[1]),Math.max(x[0],g[0]),Math.max(x[1],g[1]),i.eave_a+_p)]}if(i.shape==="pent")return[Fl(`${i.id}:a`,i.id,"a",s(a,-r,n.y(-r)),s(l,-r,n.y(-r)),s(a,e.w+o,n.y(e.w+o)),i.pitch_a,()=>[0,c])];let u=i.shape==="hip"||i.shape==="pyramid",h=i.shape==="pyramid"?(e.u1-e.u0)/2:u?Math.min((e.u1-e.u0)/2,Math.min(n.vr,e.w-n.vr)||e.w/2):0,f=u?e.u0+h-a:0,d=u?l-(e.u1-h):0,p=[];if(n.vr>.3){let x=Math.hypot(n.vr+r,n.rh-n.y(-r));p.push(Fl(`${i.id}:a`,i.id,"a",s(a,-r,n.y(-r)),s(l,-r,n.y(-r)),s(a,n.vr,n.rh),i.pitch_a,g=>[f*(g/x),c-d*(g/x)]))}if(e.w-n.vr>.3){let x=Math.hypot(e.w+o-n.vr,n.rh-n.y(e.w+o));p.push(Fl(`${i.id}:b`,i.id,"b",s(l,e.w+o,n.y(e.w+o)),s(a,e.w+o,n.y(e.w+o)),s(l,n.vr,n.rh),i.pitch_b,g=>[d*(g/x),c-f*(g/x)]))}if(u){let x=n.y(-r),g=n.y(e.w+o),m=[[`${i.id}:c`,"c",s(a,e.w+o,g),s(a,-r,x),s(e.u0+h,n.vr,n.rh)],[`${i.id}:d`,"d",s(l,-r,x),s(l,e.w+o,g),s(e.u1-h,n.vr,n.rh)]];for(let[v,y,_,M,E]of m){let C=r1(v,i.id,y,_,M,E);C&&p.push(C)}}return p}function r1(i,t,e,n,s,r){let o=no(ls(s,n));if(o<.3)return null;let a=Oi(ls(s,n)),l=ls(r,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],u=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],h=no(u);if(h<.3)return null;let f=Oi(u),d=Oi(Ep(a,f));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let p=Oi([-f[0],0,-f[2]]),x=Math.atan2(f[1],Math.hypot(f[0],f[2]))/Dl;return{key:i,section:t,side:e,flat:!1,o:n,eu:a,es:f,n:d,lu:o,ls:h,pitch:x,span:m=>{let v=Math.min(1,Math.max(0,m/h));return[c*v,o-(o-c)*v]},facing:[p[0],p[2]]}}function Fl(i,t,e,n,s,r,o,a){let l=Oi(ls(s,n)),c=Oi(ls(r,n)),u=Oi(Ep(l,c));u[1]<0&&(u=[-u[0],-u[1],-u[2]]);let h=Oi([-c[0],0,-c[2]]);return{key:i,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:u,lu:no(ls(s,n)),ls:no(ls(r,n)),pitch:o,span:a,facing:[h[0],h[2]]}}function Sp(i,t,e,n,s,r,o){let a=s-e>=r-n,l=a?s-e:r-n,c=a?r-n:s-e;return{key:`${i}:top`,section:t,side:"top",flat:!0,o:[e,o,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function wp(i){let t=i.module_w||e1,e=i.module_h||n1;return i.portrait===!1?[e,t]:[t,e]}function o1(i){return i.layout?.length?i.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function Tp(i,t){return i.flat?Math.min(45,Math.max(0,t.tilt??15))*Dl:i.wall?Math.min(90,Math.max(0,t.tilt??0))*Dl:0}function a1(i,t){let[,e]=wp(t),n=Tp(i,t);return i.wall?e*Math.cos(n)+Vu:i.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+Vu}function io(i,t,e=!1){let[n,s]=wp(t),r=[],o=Tp(i,t),a=s*Math.cos(o),l=a1(i,t),c=o1(t),u=Math.max(1,...c),h=new Set(t.skip??[]),f=!!i.wall&&n>i.lu+1e-6,d=(x,g,m)=>[i.o[0]+i.eu[0]*x+i.es[0]*g+i.n[0]*m,i.o[1]+i.eu[1]*x+i.es[1]*g+i.n[1]*m,i.o[2]+i.eu[2]*x+i.es[2]*g+i.n[2]*m],p=(x,g)=>{if(i.unbounded)return!0;if(g<-1e-6||g>i.ls+1e-6)return!1;let[m,v]=i.span(g);return x>=m-1e-6&&x<=v+1e-6};return c.forEach((x,g)=>{let m=t.align==="right"?u-x:t.align==="center"?(u-x)/2:0;for(let v=0;v<x;v++){let y=`${g}:${v}`,_=h.has(y);if(_&&!e)continue;let M=t.u+(v+m)*(n+Vu),E=t.v+g*l,C=M+n,b=E+(i.flat||i.wall?a:s);if(f){if(!(p((M+C)/2,E)&&p((M+C)/2,b)))continue}else if(![[M,E],[C,E],[C,b],[M,b]].every(([w,P])=>p(w,P)))continue;if(i.wall&&o>.001){let w=as+s*Math.sin(o),[P,F]=t.flip?[w,as]:[as,w],N=[d(M,E,P),d(C,E,P),d(C,b,F),d(M,b,F)],B=t.flip?E:b,O=[M+.05,C-.05].map(z=>[d(z,B,0),d(z,B,w)]);r.push({corners:N,posts:O,cell:y,skipped:_});continue}if(!i.flat){r.push({corners:[d(M,E,as),d(C,E,as),d(C,b,as),d(M,b,as)],posts:[],cell:y,skipped:_});continue}let S=.15,T=S+s*Math.sin(o),[R,A]=t.flip?[b,E]:[E,b],L=[d(M,R,S),d(C,R,S),d(C,A,T),d(M,A,T)];r.push({corners:L,posts:[M+.05,C-.05].flatMap(w=>[[d(w,R,0),d(w,R,S)],[d(w,A,0),d(w,A,T)]]),cell:y,skipped:_})}}),r}function ls(i,t){return[i[0]-t[0],i[1]-t[1],i[2]-t[2]]}function no(i){return Math.hypot(i[0],i[1],i[2])}function Oi(i){let t=no(i)||1;return[i[0]/t,i[1]/t,i[2]/t]}function Ep(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}var l1=.78,c1=1.18;function u1(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||l1,module_h:i.h||c1}}function Nl(i,t){let e=io(i,u1(t))[0];if(!e)return null;let n=s=>[s[0]-i.n[0]*.05,s[1]-i.n[1]*.05,s[2]-i.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}function Ul(i,t,e){let n=t?Nl(t,e):null;if(!n)return null;let s=(n[0][0]+n[2][0])/2,r=(n[0][1]+n[2][1])/2,o=(n[0][2]+n[2][2])/2;for(let a of[...i.floors].sort((l,c)=>c.elevation-l.elevation)){if(a.elevation>r)continue;let l=a.rooms.find(c=>Jt([s,o],c.points));if(l)return{floor:a,roomId:l.id,corners:n}}return null}var so=1712952,ro=2239816,Pp=1318193,us=Bt(3662079,.9),Ks=Bt(5995775,.45),ke=.14,h1=9427199,f1=13226982,d1=14936565,p1={black:{glass:new j(329483),edge:Bt(9082544,.32),cells:Bt(2766160,.22)},blue:{glass:new j(1386842),edge:Bt(10467583,.55),cells:Bt(4025599,.35)}},m1=Bt(13226982,.5),g1=Bt(13226982,.85),x1=Bt(16757575,.95),Ap=new j(2845583),Rp=new j(3818072),Cp=new j(4871791);function b1(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function Ip(i,t=new Map){let e=i.settings.roof,n=e?.type==="custom"?null:y1(i),s=e?.type==="custom"?M1(i,e.sections??[],e.overhang):n?[n]:[];return _1(i,s),v1(i,s,t),s}function v1(i,t,e){let n=i.settings.roof?.windows??[];if(!n.length||!t.length)return;let s=new Map(cs(i).map(r=>[r.key,r]));for(let r of n){let o=s.get(r.face),a=o?Nl(o,r):null;if(!o||!a)continue;let l=o.section?t.find(w=>w.sections?.includes(o.section)):t[0];if(!l)continue;let c=l.floor.elevation+l.base,u=w=>[w[0],w[1]-c,w[2]],[h,f,d,p]=a.map(u),x=e.get(r.id)??{open:0,tilt:0,cover:0},m=!!r.float&&Ul(i,o,r)?.floor.id===l.floor.id?l.win??={solid:new ee,lines:new Le}:l.winRoof??={solid:new ee,lines:new Le},v=(w,P)=>[w[0]+o.n[0]*P,w[1]+o.n[1]*P,w[2]+o.n[2]*P],y=(w,P,F)=>[w[0]+(P[0]-w[0])*F,w[1]+(P[1]-w[1])*F,w[2]+(P[2]-w[2])*F],_=x.open>.02||x.tilt>.02?x1:g1,M=[h,f,d,p].map(w=>v(w,.06)),E=[h,f,d,p].map(w=>v(w,-.02));for(let w=0;w<4;w++){m.lines.seg(M[w],M[(w+1)%4],_);let P=(w+1)%4;m.solid.tri(E[w],E[P],M[P],Cp),m.solid.tri(E[w],M[P],M[w],Cp)}let C=(x.open>.02?30*Math.min(1,x.open):x.tilt>.5?12:0)*ue,b=Math.hypot(d[0]-f[0],d[1]-f[1],d[2]-f[2]),S=w=>{let P=o.es;return[w[0]-P[0]*b*Math.cos(C)+o.n[0]*b*Math.sin(C),w[1]-P[1]*b*Math.cos(C)+o.n[1]*b*Math.sin(C),w[2]-P[2]*b*Math.cos(C)+o.n[2]*b*Math.sin(C)]},T=v(p,.065),R=v(d,.065),A=S(T),L=S(R);m.solid.tri(A,L,R,Ap),m.solid.tri(A,R,T,Ap);for(let[w,P]of[[A,L],[L,R],[R,T],[T,A]])m.lines.seg(w,P,_);if(x.cover>.02){let w=Math.min(1,x.cover),P=v(y(T,A,w),.01),F=v(y(R,L,w),.01),N=v(T,.01),B=v(R,.01);m.solid.tri(P,F,B,Rp),m.solid.tri(P,B,N,Rp)}}}function _1(i,t){let e=i.settings.roof?.solar??[];if(!e.length||!t.length)return;let n=new Map(cs(i).map(s=>[s.key,s]));for(let s of e){let r=n.get(s.face);if(!r)continue;let o=r.section?t.find(a=>a.sections?.includes(r.section)):t[0];o&&Wu(o.solid,o.lines,r,s,o.floor.elevation+o.base)}}function Wu(i,t,e,n,s){let r=c=>[c[0],c[1]-s,c[2]],o=p1[n.look==="blue"?"blue":"black"],a=n.portrait===!1?10:6,l=n.portrait===!1?6:10;for(let c of io(e,n)){let[u,h,f,d]=c.corners.map(r);i.tri(u,h,f,o.glass),i.tri(u,f,d,o.glass),i.tri(u,f,h,o.glass),i.tri(u,d,f,o.glass);let p=(m,v=.004)=>[m[0]+e.n[0]*v,m[1]+e.n[1]*v,m[2]+e.n[2]*v],x=(m,v,y)=>[m[0]+(v[0]-m[0])*y,m[1]+(v[1]-m[1])*y,m[2]+(v[2]-m[2])*y],g=[u,h,f,d].map(m=>p(m));for(let m=0;m<4;m++)t.seg(g[m],g[(m+1)%4],o.edge);for(let m=1;m<a;m++)t.seg(p(x(u,h,m/a)),p(x(d,f,m/a)),o.cells);for(let m=1;m<l;m++)t.seg(p(x(u,d,m/l)),p(x(h,f,m/l)),o.cells);for(let[m,v]of c.posts)t.seg(r(m),r(v),m1)}}function y1(i){let t=i.settings.roof,e=b1(i);if(!e||!t||t.type==="none"||t.type==="custom")return null;let n=e.rooms.flatMap(T=>T.points.map(R=>R[0])),s=e.rooms.flatMap(T=>T.points.map(R=>R[1])),r=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-r,a=Math.max(...n)+r,l=Math.min(...s)-r,c=Math.max(...s)+r,u=new ee,h=new Le;if(t.type==="flat"){Re(u,[[o,l],[a,l],[a,c],[o,c]],0,.25,so,ro,{bottom:!0});let T=.252;for(let[R,A]of[[[o,l],[a,l]],[[a,l],[a,c]],[[a,c],[o,c]],[[o,c],[o,l]]])h.seg([R[0],T,R[1]],[A[0],T,A[1]],us),h.seg([R[0],0,R[1]],[A[0],0,A[1]],Ks);return{floor:e,base:e.height,solid:u,lines:h,glass:new ee}}let f=a-o>=c-l,d=t.ridge==="short"?!f:f,p=(d?c-l:a-o)/2,x=p*Math.tan(t.pitch*ue),g=(T,R,A)=>d?[T,A,(l+c)/2+R]:[(o+a)/2+R,A,T],[m,v]=d?[o,a]:[l,c],y=new j(ro),_=new j(so),M=(T,R,A,L,w)=>{u.tri(T,R,A,w),u.tri(T,A,L,w)};for(let T of[-1,1]){M(g(m,T*p,0),g(v,T*p,0),g(v,0,x),g(m,0,x),y),M(g(m,T*p,-ke),g(m,0,x-ke),g(v,0,x-ke),g(v,T*p,-ke),_),M(g(m,T*p,-ke),g(v,T*p,-ke),g(v,T*p,0),g(m,T*p,0),_);for(let R of[m,v])M(g(R,T*p,-ke),g(R,T*p,0),g(R,0,x),g(R,0,x-ke),_);h.seg(g(m,T*p,0),g(v,T*p,0),Ks);for(let R of[m,v])h.seg(g(R,T*p,0),g(R,0,x),Ks)}let E=t.overhang,C=new j(Pp),b=p-E,S=b*Math.tan(t.pitch*ue);for(let T of[m+E,v-E])u.tri(g(T,-b,-ke),g(T,b,-ke),g(T,0,S-ke),C),u.tri(g(T,b,-ke),g(T,-b,-ke),g(T,0,S-ke),C);return h.seg(g(m,0,x+.004),g(v,0,x+.004),us),{floor:e,base:e.height,solid:u,lines:h,glass:new ee}}function M1(i,t,e){let n=i.floors.filter(o=>o.rooms.length>0).sort((o,a)=>o.elevation-a.elevation);if(!n.length)return[];let s=new Map,r=new Map(cs(i).map(o=>[o.key,o]));for(let o of t){if(Math.abs(o.x1-o.x0)<.1||Math.abs(o.z1-o.z0)<.1)continue;let a=Jd(i,o)??n[0],l=o.open?`${a.id}:open`:a.id,c=s.get(l);c||s.set(l,c={floor:a,base:0,solid:new ee,lines:new Le,glass:new ee,sections:[],lift:!o.open}),c.sections.push(o.id);let u=El(t,o),h=a.elevation+a.height>o.base+.05&&!o.dormer&&!u,f=t.filter(x=>x!==o&&El(t,x)===o).flatMap(x=>$d(o,x));for(let x of i.settings.roof.windows??[]){let g=r.get(x.face),m=g&&g.section===o.id?Nl(g,x):null;if(!m)continue;let v=m.map(y=>Fi(o,y[0],y[2]));f.push({u0:Math.min(...v.map(y=>y[0])),u1:Math.max(...v.map(y=>y[0])),v0:Math.min(...v.map(y=>y[1])),v1:Math.max(...v.map(y=>y[1]))})}let d=u?Au(u,o):o,p=null;if(u){let x=$n(d),g=$s(u,{u0:0,u1:0,a:0,b:0}),m=v=>{let[y,_]=x.at(v,x.w/2),[M,E]=Fi(u,y,_);return jr(g,M,E)??yn(u).y(E)};p=m(x.u0)<=m(x.u1)?0:1}S1(c.solid,c.lines,d,Al(i,d,d.overhang??e),a.elevation,c.glass,h,f,p)}return[...s.values()].sort((o,a)=>+(o.lift===!1)-+(a.lift===!1))}function S1(i,t,e,n,s,r=i,o=!1,a=[],l=null){let c=$n(e),u=yn(e),h=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,f=Math.max(0,h.a),d=Math.max(0,h.b),p=c.w,x=c.u0-Math.max(0,h.u0),g=c.u1+Math.max(0,h.u1),m=(L,w,P)=>{let[F,N]=c.at(L,w);return[F,P-s,N]},v=new j(ro),y=new j(so),_=new j(Pp),M=(L,w)=>{for(let P=1;P+1<L.length;P++)i.tri(L[0],L[P],L[P+1],w)},E=[],C=[],b=[],S=null;if(e.shape==="flat"||e.shape==="parapet"){let L=e.eave_a,w=e.shape==="parapet",P=e.points&&e.points.length>=3?Xd(e,w?0:Math.max(0,Math.min(h.a,h.b,h.u0,h.u1))):w?[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,p),c.at(c.u0,p)]:[c.at(x,-f),c.at(g,-f),c.at(g,p+d),c.at(x,p+d)];Re(i,P,L-s,L-s+.25,so,ro,{bottom:!0});for(let F=0;F<P.length;F++){let N=P[F],B=P[(F+1)%P.length];t.seg([N[0],L-s+.252,N[1]],[B[0],L-s+.252,B[1]],us),t.seg([N[0],L-s,N[1]],[B[0],L-s,B[1]],Ks)}if(w){let F=z=>Yn(z)>=0?z:[...z].reverse(),N=F(P),B=Tl(N,-.2),O=N.length;for(let z=0;z<O;z++){let V=F([N[z],N[(z+1)%O],B[(z+1)%O],B[z]]);Re(i,V,L-s+.25,L-s+.65,so,ro),t.seg([N[z][0],L-s+.652,N[z][1]],[N[(z+1)%O][0],L-s+.652,N[(z+1)%O][1]],us),t.seg([B[z][0],L-s+.652,B[z][1]],[B[(z+1)%O][0],L-s+.652,B[(z+1)%O][1]],us)}}}else{let L=$s(e,h);E=L.faces;for(let w of a)E=E.flatMap(P=>Zd(P,w));C=L.rim,b=L.ridges,S=L.gable}let T=!!e.open,R=new j(h1);for(let L of E){if(T){for(let w=1;w+1<L.length;w++)r.tri(m(L[0][0],L[0][1],L[0][2]),m(L[w][0],L[w][1],L[w][2]),m(L[w+1][0],L[w+1][1],L[w+1][2]),R);continue}M(L.map(([w,P,F])=>m(w,P,F)),v),M(L.map(([w,P,F])=>m(w,P,F-ke)),y)}for(let L=0;L<C.length;L++){let[w,P,F]=C[L],[N,B,O]=C[(L+1)%C.length];T||M([m(w,P,F),m(N,B,O),m(N,B,O-ke),m(w,P,F-ke)],y),t.seg(m(w,P,F),m(N,B,O),T?us:Ks)}if(T){w1(i,t,c,u,h,m,s);return}for(let[[L,w,P],[F,N,B]]of b)t.seg(m(L,w,P+.004),m(F,N,B+.004),us);let A=e.base;if(!o){if(S){let L=T1(S,A-ke),w=l===null?[c.u0,c.u1]:[l===0?c.u0:c.u1];if(L.length>=3)for(let P of w)M(L.map(([F,N])=>m(P,F,N)),_)}if(e.shape!=="flat"&&e.shape!=="parapet")for(let L of[0,p]){let w=u.y(L)-ke;w>A+.02&&M([m(c.u0,L,A),m(c.u1,L,A),m(c.u1,L,w),m(c.u0,L,w)],_)}else if(e.eave_a>A+.02)for(let[L,w,P,F]of[[c.u0,0,c.u1,0],[c.u1,0,c.u1,p],[c.u1,p,c.u0,p],[c.u0,p,c.u0,0]])M([m(L,w,A),m(P,F,A),m(P,F,e.eave_a),m(L,w,e.eave_a)],_)}}function w1(i,t,e,n,s,r,o){let a=e.w,l=.12,c=.16,u=s.a>0,h=s.b>0,f=s.u0>0,d=s.u1>0,p=(m,v,y,_,M,E)=>{let C=[e.at(m,y),e.at(v,y),e.at(v,_),e.at(m,_)],b=(C[1][0]-C[0][0])*(C[2][1]-C[0][1])-(C[2][0]-C[0][0])*(C[1][1]-C[0][1]);Re(i,b<0?[...C].reverse():C,M-o,E-o,f1,d1,{bottom:!0})},x=o;for(let[m,v]of[[0,u],[a,h]]){if(!v)continue;let y=n.y(m)-.03,_=m===0?0:a-l;p(e.u0,e.u1,_,_+l,y-c,y),t.seg(r(e.u0,m,y-c),r(e.u1,m,y-c),Ks)}for(let[m,v]of[[e.u0,f],[e.u1-l,d]])if(v)for(let y=0;y<6;y++){let _=a*y/6,M=a*(y+1)/6,E=Math.min(n.y(_),n.y(M))-.03;p(m,m+l,_,M,E-c,E)}let g=[];for(let[m,v]of[[0,u],[a-l,h]]){if(!v)continue;let y=e.u1-e.u0-l,_=Math.max(1,Math.ceil(y/3.5));for(let M=0;M<=_;M++){let E=e.u0+y*M/_;M===0&&!f||M===_&&!d||g.push([E,m])}}if(!u&&!h)for(let m of[e.u0,e.u1-l])(m===e.u0&&f||m!==e.u0&&d)&&g.push([m,a/2-l/2]);for(let[m,v]of g){let y=n.y(v+l/2)-.03-c;p(m,m+l,v,v+l,x,y)}}function T1(i,t){let e=[];for(let r=0;r<i.length;r++){let[o,a]=i[r];a>=t&&e.push([o,a]);let l=i[r+1];if(l&&(a-t)*(l[1]-t)<0){let c=(t-a)/(l[1]-a);e.push([o+(l[0]-o)*c,t])}}if(e.length<2)return[];let n=e[0],s=e[e.length-1];return s[1]>t&&e.push([s[0],t]),n[1]>t&&e.unshift([n[0],t]),e}var oo={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},Lp={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},We=.2,E1=.01,ao=8,Ol=.42,Xu=.42;function Up(i,t,e,n=[],s=[],r){let{walls:o,open:a}=oi(i.rooms,{exterior:t,interior:e},i.walls??[]),l=(A,L,w)=>{let P=r?r(A,L):null;return P===null?w:Math.max(.05,Math.min(w,P))},c=(A,L,w,P,F)=>{if(!r)return F;let N=F,B=Math.max(2,Math.ceil((P-w)/.25)+1);for(let O=0;O<B;O++){let z=w+(P-w)*O/(B-1);N=Math.min(N,l(A[0]+L[0]*z,A[1]+L[1]*z,F))}return N},u=new ee(!0,!0),h=[],f=new Le,d=[];for(let A of i.rooms){if(A.points.length<3)continue;let L=Yu(A.points),w=Lp[A.floor_material]??Lp.wood,P=new j(w.color),F=n.flatMap(V=>{if(tp(V,L))return[Iu(V,.003)];if(!jd(V))return[];let Q=Rl(L,V);return Q.length>=3&&Math.abs(Yn(Q))>.01?[Iu(Yu(Q),.003)]:[]});d.push(...F);let N=[...L,...F.flat()],B=u.count;for(let[V,Q,G]of Ni(L,F)){let nt=N[V],lt=N[Q],dt=N[G];u.tri([nt[0],0,nt[1]],[dt[0],0,dt[1]],[lt[0],0,lt[1]],P,P,P,[nt[0],nt[1],dt[0],dt[1],lt[0],lt[1]],Ht,w.tile)}h.push({roomId:A.id,start:B,end:u.count,color:w.color});let O=new j(oo.slab),z=V=>{for(let Q=0;Q<V.length;Q++){let G=V[Q],nt=V[(Q+1)%V.length];u.tri([G[0],-We,G[1]],[G[0],0,G[1]],[nt[0],0,nt[1]],O),u.tri([G[0],-We,G[1]],[nt[0],0,nt[1]],[nt[0],-We,nt[1]],O)}};z(L);for(let V of F){z([...Yu(V)].reverse());for(let Q=0;Q<V.length;Q++){let G=V[Q],nt=V[(Q+1)%V.length];f.seg([G[0],.006,G[1]],[nt[0],.006,nt[1]],ss),f.seg([G[0],-We,G[1]],[nt[0],-We,nt[1]],Di)}}}let p=new Map,x=[],g=new Map;for(let A of o){let L="interior",w=null;if(A.exterior){let F=A.b[0]-A.a[0],N=A.b[1]-A.a[1],B=Math.hypot(F,N)||1,O=[N/B,-F/B],z=(Math.round(Math.atan2(O[1],O[0])/(2*Math.PI)*ao)%ao+ao)%ao;L=`s${z}`;let V=z/ao*2*Math.PI;w=[Math.cos(V),Math.sin(V)]}let P=p.get(L);P===void 0&&(P=x.length,p.set(L,P),x.push(w)),g.set(A,P)}let m=new Map,v=[];for(let A of i.openings){let L=$r(A,i.rooms,i.walls??[]);if(!L)continue;let w=Zr(o,A,L);if(!w)continue;let{wall:P,s:F}=w,N=zl([P.b[0]-P.a[0],P.b[1]-P.a[1]]),B=Math.hypot(P.b[0]-P.a[0],P.b[1]-P.a[1]),O=Math.min(A.width,B),z=Math.max(0,Math.min(B-O,F-O/2)),V=L.room.points,Q=P.free?N[0]*(V[1][0]-V[0][0])+N[1]*(V[1][1]-V[0][1])>0:P.roomLeft===A.room_id,G=[-N[1],N[0]],nt=Q?G:[-G[0],-G[1]],lt=Math.min(c(P.a,N,z,z+O,Bl(P,i.height))-.02,A.sill+A.height),dt=Math.max(0,Math.min(A.sill,lt-.1)),$=[nt[1],-nt[0]],q=N[0]*$[0]+N[1]*$[1]>0,it={opening:A,bucket:g.get(P),start:[P.a[0]+N[0]*z,P.a[1]+N[1]*z],axis:N,width:O,toRoom:nt,faceRoom:Q?P.left:P.right,faceOut:Q?P.right:P.left,sill:dt,top:lt,hingeAtStart:A.hinge==="left"===q,exterior:P.exterior};v.push(it);let ct=m.get(P);ct||m.set(P,ct=[]),ct.push({s0:z,s1:z+O,sill:dt,top:lt,info:it})}let y=Math.min(i.cut_height,i.height),_=new ee;for(let A of o){let L=g.get(A),w=zl([A.b[0]-A.a[0],A.b[1]-A.a[1]]),P=(m.get(A)??[]).sort((G,nt)=>G.s0-nt.s0),F=Bl(A,i.height),N=[],B=[-1/0,...new Set(P.flatMap(G=>[G.s0,G.s1])).values(),1/0].sort((G,nt)=>G-nt);for(let G=0;G+1<B.length;G++){let nt=B[G],lt=B[G+1];if(lt-nt<1e-6)continue;let dt=Number.isFinite(nt)&&Number.isFinite(lt)?(nt+lt)/2:Number.isFinite(nt)?nt+1:lt-1,$=P.filter(ct=>ct.s0<dt&&ct.s1>dt).map(ct=>[ct.sill,ct.top]).sort((ct,ut)=>ct[0]-ut[0]),q=[],it=-We;for(let[ct,ut]of $)ct>it+1e-4&&q.push([it,ct<1e-4?-E1:ct]),it=Math.max(it,ut);F>it+1e-4&&q.push([it,F]),N.push({t0:nt,t1:lt,ranges:q})}let O=Math.hypot(A.b[0]-A.a[0],A.b[1]-A.a[1]),z=r&&c(A.a,w,0,O,F)<F-.001,V=z?N.flatMap(G=>{let nt=Math.max(G.t0,-.5),lt=Math.min(G.t1,O+.5),dt=Math.max(1,Math.ceil((lt-nt)/.3));return Array.from({length:dt},($,q)=>({t0:q===0?G.t0:nt+(lt-nt)*q/dt,t1:q===dt-1?G.t1:nt+(lt-nt)*(q+1)/dt,ranges:G.ranges,inner0:q>0,inner1:q<dt-1}))}):N.map(G=>({...G,inner0:!1,inner1:!1})),Q=G=>(G[0]-A.a[0])*w[0]+(G[1]-A.a[1])*w[1];for(let G of V){let nt=R1(A.footprint,A.a,w,G.t0,G.t1);if(nt.length<3)continue;let lt=(q,it)=>Math.abs(Q(q)-it)<1e-4,dt=(q,it)=>G.inner0&&lt(q,G.t0)&&lt(it,G.t0)||G.inner1&&lt(q,G.t1)&&lt(it,G.t1),$=z?Math.min(...nt.map(([q,it])=>l(q,it,F))):F;for(let[q,it]of G.ranges){let ct=Math.min(it,z?Math.max(...nt.map(([Nt,Wt])=>l(Nt,Wt,F))):it);if(ct-q<1e-4||$-q<.01)continue;let ut=q>.01,Tt=z&&it>$,Vt=(Nt,Wt)=>Math.min(it,l(Nt,Wt,F));if(q<y-1e-6){let Nt=ct>y+1e-6?np+L:rs+L,Wt=Tt&&$<y?(re,Xt)=>Math.min(y,Vt(re,Xt)):Math.min(ct,y);Re(_,nt,q,Wt,oo.wall,oo.wallTop,{aoFrom:0,bottom:ut,fold:rs+L,topFold:Nt,skipSide:dt})}ct>y+1e-6&&$>y+1e-6&&Re(_,nt,Math.max(q,y),Tt?Vt:ct,oo.wall,oo.wallTop,{aoFrom:0,fold:L,bottom:ut&&q>=y,skipSide:dt})}}}let M=o.flatMap(A=>A.footprint),E=P1(o,M),C=new Le;C.p.push(...f.p),C.c.push(...f.c),C.f.push(...f.f);let b=(A,L)=>(m.get(A)??[]).filter(L);for(let A of E.edges){let L=g.get(A.wall);for(let[P,F]of kl(A,b(A.wall,N=>N.sill<=.005)))C.seg([P[0],.004,P[1]],[F[0],.004,F[1]],ep);for(let[P,F]of kl(A,b(A.wall,N=>N.sill<y&&N.top>y)))C.seg([P[0],y,P[1]],[F[0],y,F[1]],Lu,Pl+L);let w=Bl(A.wall,i.height);for(let[P,F]of kl(A,b(A.wall,N=>N.top>=w-.021))){if(!r){C.seg([P[0],w,P[1]],[F[0],w,F[1]],ss,w<=y+1e-6?rs+L:L);continue}let N=Math.max(1,Math.ceil(Math.hypot(F[0]-P[0],F[1]-P[1])/.3));for(let B=0;B<N;B++){let O=[P[0]+(F[0]-P[0])*B/N,P[1]+(F[1]-P[1])*B/N],z=[P[0]+(F[0]-P[0])*(B+1)/N,P[1]+(F[1]-P[1])*(B+1)/N],V=l(O[0],O[1],w),Q=l(z[0],z[1],w);C.seg([O[0],V,O[1]],[z[0],Q,z[1]],ss,Math.max(V,Q)<=y+1e-6?rs+L:L)}}}for(let A of E.corners){let L=l(A.p[0],A.p[1],Bl(A.wall,i.height));C.segSplit([A.p[0],.004,A.p[1]],[A.p[0],L,A.p[1]],Di,Math.min(y,L),g.get(A.wall))}for(let A of m.values())for(let L of A)A1(C,L,y);let S=I1(E.edges,i.rooms,m),T=new ee;vp(_,C,i,T);for(let A of s)Wu(_,C,A.face,A.field,i.elevation);let R=[];for(let A of i.furniture){if(Dd(A.type))continue;let L=_.count,w=C.p.length/6,P=hn(i,A);Il(_,C,S,A,P),P+A.h>y+.05&&(ip(_,L,y,Fu),sp(C,w,y,Fu)),R.push({id:A.id,start:L,end:_.count})}return{floor:u.geometry(),roomTris:h,holes:d,walls:_.geometry(),water:T.geometry(),lines:C.geometry(),shadow:S.geometry(),buckets:x,openings:v,walls2d:o,openRooms:a,wallBuckets:o.map(A=>g.get(A)),furnitureTris:R,roofUnder:r}}function A1(i,t,e){let{info:n}=t,s=n.bucket,r=(l,c,u)=>[n.start[0]+n.axis[0]*(l-t.s0)+n.toRoom[0]*c,u,n.start[1]+n.axis[1]*(l-t.s0)+n.toRoom[1]*c],o=l=>l>e+1e-6?s:Ht,a=Math.max(t.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[t.s0,t.s1])i.segSplit(r(c,l,a),r(c,l,t.top),Di,e,s);i.seg(r(t.s0,l,t.top),r(t.s1,l,t.top),Di,o(t.top)),t.sill>.01&&i.seg(r(t.s0,l,t.sill),r(t.s1,l,t.sill),Di,o(t.sill))}for(let l of[t.s0,t.s1])i.seg(r(l,n.faceRoom,t.top),r(l,-n.faceOut,t.top),Di,o(t.top)),t.sill>.01&&i.seg(r(l,n.faceRoom,t.sill),r(l,-n.faceOut,t.sill),Di,o(t.sill)),t.sill<e&&t.top>e&&i.seg(r(l,n.faceRoom,e),r(l,-n.faceOut,e),Lu,Pl+s)}function R1(i,t,e,n,s){let r=a=>(a[0]-t[0])*e[0]+(a[1]-t[1])*e[1],o=i;return Number.isFinite(n)&&(o=Fp(o,a=>r(a)-n)),Number.isFinite(s)&&(o=Fp(o,a=>s-r(a))),o}function Fp(i,t){let e=[];for(let n=0;n<i.length;n++){let s=i[n],r=i[(n+1)%i.length],o=t(s),a=t(r);if(o>=0&&e.push(s),o>=0!=a>=0){let l=o/(o-a);e.push([s[0]+(r[0]-s[0])*l,s[1]+(r[1]-s[1])*l])}}return e}var Dp=i=>Math.round(i*1e3),lo=i=>`${Dp(i[0])},${Dp(i[1])}`,Np=(i,t)=>{let e=lo(i),n=lo(t);return e<n?`${e}|${n}`:`${n}|${e}`};function C1(i,t){let e=[];for(let n=0;n<i.length;n++){let s=i[n],r=i[(n+1)%i.length],o=r[0]-s[0],a=r[1]-s[1],l=o*o+a*a;if(l<1e-8)continue;let c=[];for(let h of t){let f=((h[0]-s[0])*o+(h[1]-s[1])*a)/l;if(f<=1e-6||f>=1-1e-6)continue;Math.abs((h[0]-s[0])*a-(h[1]-s[1])*o)/Math.sqrt(l)<1e-4&&c.push(f)}c.sort((h,f)=>h-f);let u=s;for(let h of c){let f=[s[0]+o*h,s[1]+a*h];lo(f)!==lo(u)&&e.push([u,f]),u=f}e.push([u,r])}return e}function P1(i,t){let e=i.map(l=>({wall:l,edges:C1(l.footprint,t)})),n=new Map;for(let{edges:l}of e)for(let[c,u]of l){let h=Np(c,u);n.set(h,(n.get(h)??0)+1)}let s=[],r=new Map,o=(l,c,u)=>{let h=lo(l),f=r.get(h);f||r.set(h,f={p:l,wall:c,d:[]}),f.d.push(u)};for(let{wall:l,edges:c}of e)for(let[u,h]of c){if(n.get(Np(u,h))!==1)continue;let f=Math.hypot(h[0]-u[0],h[1]-u[1]);if(f<1e-4)continue;s.push({a:u,b:h,wall:l});let d=[(h[0]-u[0])/f,(h[1]-u[1])/f];o(u,l,d),o(h,l,d)}let a=[];for(let{p:l,wall:c,d:u}of r.values())u.some(h=>u.some(f=>Math.abs(h[0]*f[1]-h[1]*f[0])>.05))&&a.push({p:l,wall:c});return{edges:s,corners:a}}function kl(i,t){if(!t.length)return[[i.a,i.b]];let e=zl([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=zl([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(e[0]*n[0]+e[1]*n[1])<.99)return[[i.a,i.b]];let s=h=>(h[0]-i.wall.a[0])*e[0]+(h[1]-i.wall.a[1])*e[1],r=s(i.a),o=s(i.b),a=Math.min(r,o),l=Math.max(r,o),c=[[a,l]];for(let h of t)c=c.flatMap(([f,d])=>{if(h.s1<=f||h.s0>=d)return[[f,d]];let p=[];return h.s0>f&&p.push([f,h.s0]),h.s1<d&&p.push([h.s1,d]),p});let u=h=>{let f=(h-r)/(o-r||1);return[i.a[0]+(i.b[0]-i.a[0])*f,i.a[1]+(i.b[1]-i.a[1])*f]};return c.filter(([h,f])=>f-h>1e-4).map(([h,f])=>r<=o?[u(h),u(f)]:[u(f),u(h)])}function I1(i,t,e){let n=new ee,s=new j(Xu,Xu,Xu),r=new j(1,1,1),o=.002;for(let a of i)for(let[l,c]of kl(a,(e.get(a.wall)??[]).filter(u=>u.sill<=.005))){let u=c[0]-l[0],h=c[1]-l[1],f=Math.hypot(u,h);if(f<.05)continue;let d=[h/f,-u/f],p=[(l[0]+c[0])/2+d[0]*.05,(l[1]+c[1])/2+d[1]*.05];if(!t.some(m=>m.points.length>=3&&Jt(p,m.points)))continue;let x=[l[0]+d[0]*Ol,l[1]+d[1]*Ol],g=[c[0]+d[0]*Ol,c[1]+d[1]*Ol];n.tri([l[0],o,l[1]],[x[0],o,x[1]],[g[0],o,g[1]],s,r,r),n.tri([l[0],o,l[1]],[g[0],o,g[1]],[c[0],o,c[1]],s,r,s)}return n}function Op(i,t){let e=t.furniture.filter(r=>r.type==="stairwell").map(Ii),n=i.filter(r=>r.elevation<t.elevation).sort((r,o)=>o.elevation-r.elevation)[0];if(!n)return Pu(e);let s=n.furniture.filter(r=>(Ld.has(r.type)||Ae(r.type)?.hole)&&n.elevation+r.h>=t.elevation-.3).map(Ii);return Pu([...e,...s])}function Bl(i,t){return Math.min(t,i.height??t)}function zl(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function Yu(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];t+=n[0]*s[1]-s[0]*n[1]}return t>=0?i:[...i].reverse()}var L1=new j(1516340),F1=new j(527897),qu=new j(1779256),co=new j(1120808),D1=new j(4163256),Bp=new j(5995161),N1=new j(2240842),U1=new j(1318704),O1=.35,js=.8,B1=.2,kp=.1;function k1(i,t){if(i.settings.terrain?.earth===!1||t.elevation>.3)return!1;let e=zp(i,t);return!!e&&e.some(([n,s])=>Ml(n,s)-t.elevation>-.15)}function zp(i,t){return t.rooms.some(e=>e.points.length>=3)?Yd(t.rooms,t.walls??[],i.settings.wall_exterior,i.settings.wall_interior):null}function Vp(i,t,e,n=!1){if(i.settings.terrain?.earth===!1||t.elevation>.3)return null;let s=zp(i,t);if(!s)return null;let r=(p,x)=>Ml(p,x)-t.elevation,o=n&&s.some(([p,x])=>r(p,x)<-We-.03);if(!o&&!k1(i,t))return null;let a=t.height,l=-O1,c=(p,x)=>Math.min(a,Ml(p,x)-t.elevation),u=new ee,h=new ee,f=new Le,d=(p,x,g,m,v,y,_,M)=>{let E=[x[0]-p[0],x[2]-p[2]];-E[1]*v[0]+E[0]*v[1]>0?(M.tri(p,x,g,y,y,_),M.tri(p,g,m,y,_,_)):(M.tri(p,g,x,y,_,y),M.tri(p,m,g,y,_,_))};for(let p=0;p<s.length;p++){let x=s[p],g=s[(p+1)%s.length],m=Math.hypot(g[0]-x[0],g[1]-x[1]);if(m<1e-4)continue;let v=[(g[0]-x[0])/m,(g[1]-x[1])/m],y=[v[1],-v[0]],_=[(x[0]+g[0])/2+y[0]*.05,(x[1]+g[1])/2+y[1]*.05];Jt(_,s)&&(y=[-y[0],-y[1]]);let M=(T,R=.012)=>[x[0]+v[0]*T+y[0]*R,x[1]+v[1]*T+y[1]*R],E=[];for(let T of e){if(T.opening.type!=="window"||!T.exterior||T.opening.well===!1)continue;let R=T.start[0]+T.axis[0]*(T.width/2)-T.toRoom[0]*T.faceOut,A=T.start[1]+T.axis[1]*(T.width/2)-T.toRoom[1]*T.faceOut,L=(R-x[0])*v[0]+(A-x[1])*v[1];Math.abs((R-x[0])*y[0]+(A-x[1])*y[1])>.08||L<-.05||L>m+.05||T.sill>=c(R,A)-.05||E.push({s0:Math.max(0,L-T.width/2-kp),s1:Math.min(m,L+T.width/2+kp),bottom:Math.max(l+.05,T.sill-B1),rim:T.opening.well_rim??0})}let C=new Set([0,m]);for(let T of E)C.add(T.s0),C.add(T.s1);let b=[...C].sort((T,R)=>T-R),S=[];for(let T=0;T<b.length-1;T++){let R=Math.max(1,Math.ceil((b[T+1]-b[T])/.5));for(let A=0;A<R;A++)S.push(b[T]+(b[T+1]-b[T])*A/R)}S.push(m);for(let T=0;T<S.length-1;T++){let R=S[T],A=S[T+1],L=E.find(Q=>R>=Q.s0-1e-6&&A<=Q.s1+1e-6),w=M(R),P=M(A),F=c(w[0],w[1]),N=c(P[0],P[1]),B=L?Math.min(F,L.bottom):F,O=L?Math.min(N,L.bottom):N;if(B>l+.01||O>l+.01){let Q=Math.min(B,l),G=Math.min(O,l);d([w[0],Q,w[1]],[P[0],G,P[1]],[P[0],Math.max(O,l),P[1]],[w[0],Math.max(B,l),w[1]],y,F1,L1,u)}let z=r(w[0],w[1]),V=r(P[0],P[1]);if(o&&(z<-We-.01||V<-We-.01)&&d([w[0],Math.min(z,-We),w[1]],[P[0],Math.min(V,-We),P[1]],[P[0],-We,P[1]],[w[0],-We,w[1]],y,U1,N1,u),F>l||N>l||o&&(z<-We||V<-We)){let Q=o?Math.min(z,Math.max(F,l)):Math.max(F,l),G=o?Math.min(V,Math.max(N,l)):Math.max(N,l);f.seg([w[0],Q+.004,w[1]],[P[0],G+.004,P[1]],D1)}}for(let T of E){let R=M(T.s0,0),A=M(T.s1,0),L=[R[0]+y[0]*js,R[1]+y[1]*js],w=[A[0]+y[0]*js,A[1]+y[1]*js],P=V=>c(V[0],V[1])+T.rim,F=T.bottom,N=(V,Q)=>[V[0],Q,V[1]];h.tri(N(R,F),N(A,F),N(w,F),co),h.tri(N(R,F),N(w,F),N(L,F),co);let B=(V,Q)=>{h.tri(N(V,F),N(Q,F),N(Q,P(Q)),co,co,qu),h.tri(N(V,F),N(Q,P(Q)),N(V,P(V)),co,qu,qu)};B(R,L),B(A,w),B(L,w);let O=V=>[V[0],P(V)+.01,V[1]];for(let[V,Q]of[[R,A],[A,w],[w,L],[L,R]])f.seg(O(V),O(Q),Bp);let z=Math.max(3,Math.round((T.s1-T.s0)/.12));for(let V=1;V<z;V++){let Q=V/z,G=[R[0]+(A[0]-R[0])*Q,R[1]+(A[1]-R[1])*Q];f.seg(O(G),O([G[0]+y[0]*js,G[1]+y[1]*js]),Bp)}}}return u.count||h.count?{earth:u,wells:h,lines:f}:null}var Gp=i=>Math.round(i*1e3)/1e3;function z1(i,t,e,n){let s=Math.hypot(n[0]-e[0],n[1]-e[1]);if(s<.01)return!1;let r=[(n[0]-e[0])/s,(n[1]-e[1])/s],o=l=>Math.abs(-(l[0]-e[0])*r[1]+(l[1]-e[1])*r[0]),a=l=>(l[0]-e[0])*r[0]+(l[1]-e[1])*r[1];return i.rooms.some(l=>l.id!==t&&l.points.some((c,u)=>{let h=l.points[(u+1)%l.points.length];return o(c)>.02||o(h)>.02?!1:Math.min(s,Math.max(a(c),a(h)))-Math.max(0,Math.min(a(c),a(h)))>.05}))}function Hp(i,t,e,n,s,r=.05){let o=i.rooms.find(f=>f.points.length>=3&&Jt([t.x,t.z],f.points));if(!o)return[e,n];let a=o.points,l=Fn(a)>=0?1:-1,c=Ii({...t}),u=e,h=n;for(let f=0;f<2;f++){let d=Ii({...t,x:u,z:h});for(let p=0;p<a.length;p++){let x=a[p],g=a[(p+1)%a.length],m=Math.hypot(g[0]-x[0],g[1]-x[1]);if(m<.05)continue;let v=[(g[0]-x[0])/m,(g[1]-x[1])/m],y=[-v[1]*l,v[0]*l],_=z1(i,o.id,x,g)?s/2:0,M=0;d.forEach((E,C)=>{let b=(E[0]-x[0])*v[0]+(E[1]-x[1])*v[1];if(b<-.01||b>m+.01)return;let S=(E[0]-x[0])*y[0]+(E[1]-x[1])*y[1]-_,T=c[C];(T[0]-x[0])*y[0]+(T[1]-x[1])*y[1]-_<-r||S<M&&(M=S)}),M<-1e-4&&(u-=y[0]*M,h-=y[1]*M)}}return[Gp(u),Gp(h)]}var V1=500,Wp=.12,Xp=1.35,G1=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Vl=class{view={target:new H,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;leftDragTurns=!0;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(t,e,n){this.el=t,this.camera=e,this.events=n;let s=(r,o,a)=>{t.addEventListener(r,o,a),this.listeners.push([r,o])};s("pointerdown",r=>this.onDown(r)),s("pointermove",r=>this.onMove(r)),s("pointerup",r=>this.onUp(r)),s("pointercancel",r=>this.onUp(r)),s("wheel",r=>this.onWheel(r),{passive:!1}),s("contextmenu",r=>r.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[t,e]of this.listeners)this.el.removeEventListener(t,e)}get active(){return this.pointers.size>0||this.flight!==null}update(t){let e=!1;if(this.flight){let{from:a,to:l,start:c,duration:u}=this.flight,h=Math.min(1,(t-c)/u),f=G1(h);this.view.target.lerpVectors(a.target,l.target,f),this.view.radius=a.radius+(l.radius-a.radius)*f,this.view.theta=a.theta+(l.theta-a.theta)*f,this.view.phi=a.phi+(l.phi-a.phi)*f,h>=1&&(this.flight=null),e=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=$u(this.view.phi+this.velocity.phi,Wp,Xp),this.velocity.theta*=.9,this.velocity.phi*=.9,e=!0);let{target:n,radius:s,theta:r,phi:o}=this.view;return this.camera.position.set(n.x+s*Math.sin(o)*Math.sin(r),n.y+s*Math.cos(o),n.z+s*Math.sin(o)*Math.cos(r)),this.camera.lookAt(n),e}flyTo(t,e=700){let n={...this.view,target:this.view.target.clone()},s=t.theta??n.theta;for(;s-n.theta>Math.PI;)s-=2*Math.PI;for(;s-n.theta<-Math.PI;)s+=2*Math.PI;let r={target:(t.target??n.target).clone(),radius:t.radius??n.radius,theta:s,phi:t.phi??n.phi};this.velocity={theta:0,phi:0},e<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=r,this.flight=null):this.flight={from:n,to:r,start:performance.now(),duration:e},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(t){let e=this.el.getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}onDown(t){if(this.el.setPointerCapture(t.pointerId),this.pointers.size===0&&t.button===0&&this.events.grab?.(...this.local(t))){this.grabbing=!0,this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:t.clientX,y:t.clientY,time:performance.now(),moved:!1};let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,s=t.clientY-e.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,s))},V1)}else this.down=null,this.pinch=this.pinchState()}onMove(t){let e=this.pointers.get(t.pointerId);if(!e)return;if(this.grabbing){this.events.drag?.(...this.local(t));return}let n=t.clientX-e.x,s=t.clientY-e.y;if(this.swiping){this.events.swipeMove?.(t.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(t.clientX-this.down.x,t.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let r=this.el.getBoundingClientRect();if(this.pointers.size===1&&e.button===0&&!t.shiftKey&&this.events.swipeStart?.(this.down.x-r.left,this.down.y-r.top,t.clientX-this.down.x,t.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(t.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){e.x=t.clientX,e.y=t.clientY;return}let r=e.type==="mouse";if(r&&!this.leftDragTurns&&e.button===0){e.x=t.clientX,e.y=t.clientY;return}if((e.button===1||e.button===2||t.shiftKey)&&(this.leftDragTurns||!r))this.pan(n,s);else{let a=this.el.clientHeight||1,l=-n/a*3.2,c=-s/a*2.4;this.view.theta+=l,this.view.phi=$u(this.view.phi+c,Wp,Xp),this.velocity={theta:l,phi:c}}e.x=t.clientX,e.y=t.clientY}else{e.x=t.clientX,e.y=t.clientY;let r=this.pinchState();this.pinch&&r&&(this.zoom(this.pinch.dist/Math.max(1,r.dist)),this.pan(r.mid[0]-this.pinch.mid[0],r.mid[1]-this.pinch.mid[1])),this.pinch=r}this.events.change()}onUp(t){if(this.pointers.has(t.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(t.pointerId),this.events.drop?.();return}if(this.pointers.delete(t.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&t.type==="pointerup"&&performance.now()-this.down.time<400){let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,s=t.clientY-e.top,r=performance.now();r-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(n,s)):(this.lastTap=r,this.events.tap(n,s))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(t){t.preventDefault(),this.flight=null,this.zoom(Math.exp(t.deltaY*(t.deltaMode===1?.05:.0015))),this.events.change()}zoom(t){this.view.radius=$u(this.view.radius*t,this.minRadius,this.maxRadius)}pan(t,e){let n=this.el.clientHeight||1,s=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,r=new H(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),o=new H(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(r,-t*s),this.view.target.addScaledVector(o,e*s/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e.x-n.x,e.y-n.y),mid:[(e.x+n.x)/2,(e.y+n.y)/2]}}};function $u(i,t,e){return Math.min(e,Math.max(t,i))}function Bi(i,t,e="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=t.standing,n.uniforms.uGlass=t.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float fold;
uniform int uStanding;
uniform int uGlass;`).replace("#include <project_vertex>",`#include <project_vertex>
      {
        bool fp3dShow = ${e==="glass"?"false":"true"};
        if (fold > -0.5) {
          int fp3dFold = int(fold + 0.5);
          int fp3dKind = fp3dFold / 16;
          int fp3dBucket = fp3dFold - fp3dKind * 16;
          bool fp3dStanding = ((uStanding >> fp3dBucket) & 1) == 1;
          bool fp3dGlass = ((uGlass >> fp3dBucket) & 1) == 1;
          // kinds: 0 upper part, 1 cut edge, 2 lower part, 3 cap at the cut height, 4 furniture above the cut
          fp3dShow = fp3dKind == 0 || fp3dKind == 4 ? fp3dStanding : fp3dKind == 1 || fp3dKind == 3 ? !fp3dStanding : true;
          bool fp3dWall = fp3dKind == 0 || fp3dKind == 2;
          ${e==="solid"?"if (fp3dGlass && fp3dWall) fp3dShow = false;":""}
          ${e==="glass"?"fp3dShow = fp3dShow && fp3dGlass && fp3dWall;":""}
        }
        if (!fp3dShow) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      }`),e==="glass"&&(n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        diffuseColor.rgb = diffuseColor.rgb * 1.7 + vec3(0.015, 0.05, 0.075);
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`fp3d-fold-${e}`,i}function Yp(i,t){return Math.hypot(t[0]-i[0],t[1]-i[1],t[2]-i[2])}function qp(i,t,e=4){if(i.length<3)return[...i];let n=[i[0]];for(let s=1;s<i.length-1;s++){let[r,o,a]=[i[s-1],i[s],i[s+1]],l=Yp(r,o),c=Yp(o,a),u=Math.min(t,l*.45,c*.45),h=[(r[0]-o[0])/l,(r[1]-o[1])/l,(r[2]-o[2])/l],f=[(a[0]-o[0])/c,(a[1]-o[1])/c,(a[2]-o[2])/c];if(u<.005||h[0]*f[0]+h[1]*f[1]+h[2]*f[2]<-.999){n.push(o);continue}let d=[o[0]+h[0]*u,o[1]+h[1]*u,o[2]+h[2]*u],p=[o[0]+f[0]*u,o[1]+f[1]*u,o[2]+f[2]*u];for(let x=0;x<=e;x++){let g=x/e,m=(1-g)*(1-g),v=2*(1-g)*g,y=g*g;n.push([m*d[0]+v*o[0]+y*p[0],m*d[1]+v*o[1]+y*p[1],m*d[2]+v*o[2]+y*p[2]])}}return n.push(i[i.length-1]),n}var $p=new j(7568261),Zp=new j(4869974),H1=new j(3116287),Jp=new j(3948872),Zu=hs([.35,.85,.4]),Kp=10;function hs(i){let t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]}function uo(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function jp(i){let t=Math.abs(i[1])>.9?[1,0,0]:[0,1,0],e=hs(uo(i,t));return[e,hs(uo(i,e))]}function ai(i,t){let e=.5+.5*Math.max(0,t[0]*Zu[0]+t[1]*Zu[1]+t[2]*Zu[2]);return i.clone().multiplyScalar(e)}function Qs(i,t,e,n,s,r=!1){let o=hs([e[0]-t[0],e[1]-t[1],e[2]-t[2]]),[a,l]=jp(o),c=(u,h)=>{let f=h/Kp*Math.PI*2,d=[a[0]*Math.cos(f)+l[0]*Math.sin(f),a[1]*Math.cos(f)+l[1]*Math.sin(f),a[2]*Math.cos(f)+l[2]*Math.sin(f)];return{p:[u[0]+d[0]*n,u[1]+d[1]*n,u[2]+d[2]*n],n:d}};for(let u=0;u<Kp;u++){let h=c(t,u),f=c(t,u+1),d=c(e,u),p=c(e,u+1);i.tri(h.p,p.p,d.p,ai(s,h.n),ai(s,p.n),ai(s,d.n)),i.tri(h.p,f.p,p.p,ai(s,h.n),ai(s,f.n),ai(s,p.n)),r&&(i.tri([...t],f.p,h.p,ai(s,[-o[0],-o[1],-o[2]])),i.tri([...e],d.p,p.p,ai(s,o)))}}function W1(i,t,e,n,s,r,o,a){let l=hs(uo(e,n)),c=(h,f,d)=>[t[0]+e[0]*h*s+n[0]*f*r+l[0]*d*o,t[1]+e[1]*h*s+n[1]*f*r+l[1]*d*o,t[2]+e[2]*h*s+n[2]*f*r+l[2]*d*o],u=[];for(let[h,f]of[[e,.5],[[-e[0],-e[1],-e[2]],-.5]])u.push([h,[c(f,-.5,-.5),c(f,.5,-.5),c(f,.5,.5),c(f,-.5,.5)]]);for(let[h,f]of[[n,.5],[[-n[0],-n[1],-n[2]],-.5]])u.push([h,[c(-.5,f,-.5),c(.5,f,-.5),c(.5,f,.5),c(-.5,f,.5)]]);for(let[h,f]of[[l,.5],[[-l[0],-l[1],-l[2]],-.5]])u.push([h,[c(-.5,-.5,f),c(.5,-.5,f),c(.5,.5,f),c(-.5,.5,f)]]);for(let[h,f]of u){let d=ai(a,h);i.tri(f[0],f[1],f[2],d),i.tri(f[0],f[2],f[3],d),i.tri(f[0],f[2],f[1],d),i.tri(f[0],f[3],f[2],d)}}function Qp(i,t){if(t.points.length<2)return;let e=t.radius,n=qp(t.points,e*2.2,4);for(let s=1;s<n.length;s++){let[r,o]=[n[s-1],n[s]];if(Math.hypot(o[0]-r[0],o[1]-r[1],o[2]-r[2])<1e-4)continue;let a=r[1]<-.02&&o[1]<-.02?$p.clone().multiplyScalar(.55):$p;Qs(i,r,o,e,a,s===1||s===n.length-1)}for(let s of t.fittings){let r=o=>[[s.p[0]-s.dir[0]*o,s.p[1]-s.dir[1]*o,s.p[2]-s.dir[2]*o],[s.p[0]+s.dir[0]*o,s.p[1]+s.dir[1]*o,s.p[2]+s.dir[2]*o]];if(s.kind==="sleeve"){let[o,a]=r(.03);Qs(i,o,a,e*1.22,Zp,!0)}else if(s.kind==="sight"){let[o,a]=r(.08);Qs(i,o,a,e*1.08,t.water?new j(...t.water).multiplyScalar(.9):new j(10475240),!0);for(let l of r(.08)){let[c,u]=[[l[0]-s.dir[0]*.02,l[1]-s.dir[1]*.02,l[2]-s.dir[2]*.02],[l[0]+s.dir[0]*.02,l[1]+s.dir[1]*.02,l[2]+s.dir[2]*.02]];Qs(i,c,u,e*1.3,Zp,!0)}}else{let[o,a]=r(.055);Qs(i,o,a,e*1.4,Jp,!0);let[l]=jp(s.dir),c=Math.abs(s.dir[1])>.9?l:[0,1,0],u=[s.p[0]+c[0]*e*2,s.p[1]+c[1]*e*2,s.p[2]+c[2]*e*2];Qs(i,[s.p[0]+c[0]*e*1.3,s.p[1]+c[1]*e*1.3,s.p[2]+c[2]*e*1.3],u,e*.35,Jp,!0);let h=s.open===!1?hs(uo(s.dir,c)):s.dir,f=hs(uo(h,c)),d=[u[0]+h[0]*.045,u[1]+h[1]*.045,u[2]+h[2]*.045];W1(i,d,h,f,.1,.028,.012,H1)}}}var Ju=1.62,X1=.2,Ku=class{solids=[];doors=[];rooms;walls;building;floor;constructor(t,e){this.building=t,this.floor=e;let n=t.settings;this.rooms=e.rooms.filter(o=>o.points.length>=3);let s=oi(this.rooms,{exterior:n.wall_exterior,interior:n.wall_interior},e.walls??[]);this.walls=s.walls;let r=new Map;for(let o of e.openings){if(!(o.type!=="window"||o.sill<.1))continue;let l=$r(o,e.rooms,e.walls??[]);if(!l)continue;let c=Zr(this.walls,o,l);if(!c)continue;let u=r.get(c.wall)??[];u.push([c.s-o.width/2+.05,c.s+o.width/2-.05]),r.set(c.wall,u);let h=c.wall,f=h.b[0]-h.a[0],d=h.b[1]-h.a[1],p=Math.hypot(f,d)||1,x=f/p,g=d/p,m=[h.a[0]+x*c.s,h.a[1]+g*c.s],v=h.left+.45,y=h.right+.45;this.doors.push({centre:m,p:[[m[0]-g*v,m[1]+x*v],[m[0]+g*y,m[1]-x*y]]})}for(let o of this.walls){if(o.height!==void 0&&o.height<.9)continue;let a=o.b[0]-o.a[0],l=o.b[1]-o.a[1],c=Math.hypot(a,l);c<1e-6||this.solids.push({a:o.a,u:[a/c,l/c],len:c,left:o.left,right:o.right,gaps:r.get(o)??[]})}}blocked(t,e=X1){for(let n of this.solids){let s=t[0]-n.a[0],r=t[1]-n.a[1],o=s*n.u[0]+r*n.u[1];if(o<-e||o>n.len+e)continue;let a=-s*n.u[1]+r*n.u[0];if(!(a>n.left+e||a<-n.right-e)&&!n.gaps.some(([l,c])=>o>l+e*.6&&o<c-e*.6))return!0}return!1}clear(t,e){let n=Math.hypot(e[0]-t[0],e[1]-t[1]),s=Math.max(1,Math.ceil(n/.08));for(let r=1;r<=s;r++){let o=r/s;if(this.blocked([t[0]+(e[0]-t[0])*o,t[1]+(e[1]-t[1])*o]))return!1}return!0}roomAt(t){return this.rooms.find(e=>Jt(t,e.points))??null}path(t,e){if(this.clear(t,e))return[e];let n=[t,e,...this.doors.flatMap(h=>h.p).filter(h=>!this.blocked(h))],s=n.length,r=new Array(s).fill(1/0),o=new Array(s).fill(-1),a=new Array(s).fill(!1);r[0]=0;let l=new Map,c=(h,f)=>{let d=h<f?`${h}:${f}`:`${f}:${h}`,p=l.get(d);return p===void 0&&(p=this.clear(n[h],n[f]),l.set(d,p)),p};for(;;){let h=-1;for(let f=0;f<s;f++)!a[f]&&r[f]<1/0&&(h<0||r[f]<r[h])&&(h=f);if(h<0)return null;if(h===1)break;a[h]=!0;for(let f=0;f<s;f++){if(a[f]||f===h)continue;let d=Math.hypot(n[h][0]-n[f][0],n[h][1]-n[f][1]);r[h]+d>=r[f]||c(h,f)&&(r[f]=r[h]+d,o[f]=h)}}let u=[];for(let h=1;h>0;h=o[h])u.unshift(n[h]);return u}start(t=!1){for(let s of t?this.floor.openings:[]){if(s.type!=="door")continue;let r=$r(s,this.floor.rooms,this.floor.walls??[]);if(!r)continue;let o=Zr(this.walls,s,r);if(!o||!o.wall.exterior)continue;let a=o.wall,l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],u=Math.hypot(l,c)||1,h=l/u,f=c/u,d=[a.a[0]+h*o.s,a.a[1]+f*o.s],p=[d[0]-f*(a.left+.9),d[1]+h*(a.left+.9)];if(!this.blocked(p))return{p,yaw:this.openYaw(p,Math.atan2(h,-f))}}let e=[...this.rooms].sort((s,r)=>tm(r)-tm(s))[0],n=e?this.freeNear(is(e.points)):[0,0];return{p:n,yaw:this.openYaw(n)}}sight(t,e,n=9){let s=Math.cos(e),r=Math.sin(e);for(let o=.2;o<n;o+=.15)if(this.blocked([t[0]+s*o,t[1]+r*o],.05))return o;return n}openYaw(t,e=null){let n=e??0,s=-1;for(let r=0;r<24;r++){let o=r/24*Math.PI*2,a=this.sight(t,o);if(e!==null){let l=Math.abs(o-e)%(Math.PI*2);l>Math.PI&&(l=Math.PI*2-l),a*=1.25-l/Math.PI*.5}a>s&&(s=a,n=o)}return n}freeNear(t){if(!this.blocked(t))return t;for(let e=.2;e<2;e+=.2)for(let n=0;n<6.28;n+=.5){let s=[t[0]+Math.cos(n)*e,t[1]+Math.sin(n)*e];if(!this.blocked(s))return s}return t}};function tm(i){let t=0,e=i.points;for(let n=0;n<e.length;n++){let[s,r]=e[n],[o,a]=e[(n+1)%e.length];t+=s*a-o*r}return Math.abs(t/2)}var ju=class{state;path=[];keys=new Set;stick=null;raf=0;last=0;origUpdate;origWalls;origFov;origNear;onRoom;roomId=null;listeners=[];turnTo=null;v;map;surface;constructor(t,e,n,s){this.v=t,this.map=e,this.surface=n,this.onRoom=s.onRoom;let r=s.start??(()=>{let o=e.start();return{x:o.p[0],z:o.p[1],yaw:o.yaw,pitch:-.05}})();this.state={...r},this.origUpdate=t.controls.update,this.origWalls=t.updateWalls,this.origFov=t.camera.fov,this.origNear=t.camera.near,t.controls.update=()=>this.apply(),t.updateWalls=()=>{for(let o of t.floors)o.mask.standing.value=65535,o.mask.glass.value=0},t.camera.fov=72,t.camera.near=.05,t.camera.updateProjectionMatrix(),t.labels.style.visibility="hidden",this.bind(),this.reportRoom(),t.invalidate()}dispose(){cancelAnimationFrame(this.raf);for(let[t,e,n,s]of this.listeners)t.removeEventListener(e,n,s);this.v.controls.update=this.origUpdate,this.v.updateWalls=this.origWalls,this.v.camera.fov=this.origFov,this.v.camera.near=this.origNear,this.v.camera.updateProjectionMatrix(),this.v.labels.style.visibility="",this.v.invalidate()}setMap(t,e){this.map=t,this.path=[];let n=e??(()=>{let s=t.start();return{x:s.p[0],z:s.p[1],yaw:s.yaw,pitch:-.05}})();this.state={...n},this.reportRoom(),this.kick()}floorY(){let t=this.v.floorMap.get(this.map.floor.id);return(t?t.floor.elevation+t.y:this.map.floor.elevation)+Ju}apply(){let{x:t,z:e,yaw:n,pitch:s}=this.state,r=this.floorY(),o=Math.cos(s);return this.v.camera.position.set(t,r,e),this.v.camera.lookAt(t+Math.cos(n)*o,r+Math.sin(s),e+Math.sin(n)*o),this.v.controls.view.target.set(t,r-Ju,e),!1}goTo(t){let e=this.map.path([this.state.x,this.state.z],this.map.freeNear(t));return e?(this.path=e,this.kick(),!0):!1}goToRoom(t){return this.goTo(is(t.points))}kick(){this.raf||(this.last=performance.now(),this.raf=requestAnimationFrame(t=>this.tick(t))),this.v.invalidate()}tick(t){this.raf=0;let e=Math.min(.05,(t-this.last)/1e3);this.last=t;let n=!1,s=this.state,r=0,o=0,a=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(r+=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(r-=1),this.keys.has("a")&&(o-=1),this.keys.has("d")&&(o+=1),(this.keys.has("arrowleft")||this.keys.has("q"))&&(a-=1),(this.keys.has("arrowright")||this.keys.has("e"))&&(a+=1),this.stick&&(r+=-this.stick.y,a+=this.stick.x*.9),a&&(s.yaw+=a*1.6*e,n=!0),r||o){this.path=[],this.turnTo=null;let l=1.5*e,c=(Math.cos(s.yaw)*r-Math.sin(s.yaw)*o)*l,u=(Math.sin(s.yaw)*r+Math.cos(s.yaw)*o)*l;this.move(c,u),n=!0}else if(this.path.length){let[l,c]=this.path[0],u=l-s.x,h=c-s.z,f=Math.hypot(u,h),d=1.4*e;f<=d?(s.x=l,s.z=c,this.path.shift()):(s.x+=u/f*d,s.z+=h/f*d,this.turnTo=Math.atan2(h,u)),n=!0}if(this.turnTo!==null){let l=this.turnTo-s.yaw;for(;l>Math.PI;)l-=2*Math.PI;for(;l<-Math.PI;)l+=2*Math.PI;Math.abs(l)<.01?this.turnTo=null:(s.yaw+=l*Math.min(1,e*4),n=!0),!this.path.length&&Math.abs(l)<.05&&(this.turnTo=null)}this.reportRoom(),this.v.invalidate(),(n||this.keys.size||this.stick)&&(this.raf=requestAnimationFrame(l=>this.tick(l)))}move(t,e){let n=this.state,s=[n.x+t,n.z+e];if(!this.map.blocked(s)){n.x=s[0],n.z=s[1];return}this.map.blocked([n.x+t,n.z])?this.map.blocked([n.x,n.z+e])||(n.z+=e):n.x+=t}reportRoom(){let t=this.map.roomAt([this.state.x,this.state.z]),e=t?.id??null;e!==this.roomId&&(this.roomId=e,this.onRoom(t))}setStick(t){this.stick=t,this.kick()}floorPoint(t,e){let n=this.surface.getBoundingClientRect(),s=(t-n.left)/n.width*2-1,r=1-(e-n.top)/n.height*2,{yaw:o,pitch:a,x:l,z:c}=this.state,u=this.v.camera.fov*Math.PI/180,h=Math.tan(u/2),f=n.width/n.height,d=Math.cos(a),p=[Math.cos(o)*d,Math.sin(a),Math.sin(o)*d],x=[-Math.sin(o),0,Math.cos(o)],g=[p[1]*x[2]-p[2]*x[1],p[2]*x[0]-p[0]*x[2],p[0]*x[1]-p[1]*x[0]],m=[-g[0],-g[1],-g[2]],v=[p[0]+x[0]*s*h*f+m[0]*r*h,p[1]+x[1]*s*h*f+m[1]*r*h,p[2]+x[2]*s*h*f+m[2]*r*h];if(v[1]>=-.02)return null;let y=Ju/-v[1];return[l+v[0]*y,c+v[2]*y]}bind(){let t=(o,a,l,c)=>{o.addEventListener(a,l,c),this.listeners.push([o,a,l,!!c?.capture])},e=null;t(this.surface,"pointerdown",o=>{e||(e={x:o.clientX,y:o.clientY,moved:!1,id:o.pointerId},this.surface.setPointerCapture?.(o.pointerId))}),t(this.surface,"pointermove",o=>{if(!e||o.pointerId!==e.id)return;let a=o.clientX-e.x,l=o.clientY-e.y;if(!e.moved&&Math.hypot(a,l)<5)return;e.moved=!0,e.x=o.clientX,e.y=o.clientY;let c=this.v.camera.fov*Math.PI/180/this.surface.clientHeight;this.state.yaw-=a*c*1.1,this.state.pitch=Math.max(-1,Math.min(.8,this.state.pitch+l*c*1.1)),this.turnTo=null,this.v.invalidate()});let n=o=>{if(!e||o.pointerId!==e.id)return;let a=!e.moved;if(e=null,a){let l=this.floorPoint(o.clientX,o.clientY);l&&this.map.roomAt(l)&&this.goTo(l)}};t(this.surface,"pointerup",n),t(this.surface,"pointercancel",()=>e=null),t(this.surface,"wheel",o=>{o.preventDefault();let a=this.state,l=Math.max(-.6,Math.min(.6,-o.deltaY/300));this.path=[],this.move(Math.cos(a.yaw)*l,Math.sin(a.yaw)*l),this.reportRoom(),this.v.invalidate()},{passive:!1});let s=o=>["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"].includes(o.key.toLowerCase()),r=o=>!!o.composedPath()[0]?.closest?.("input, textarea, select");t(window,"keydown",o=>{!s(o)||r(o)||o.ctrlKey||o.metaKey||o.altKey||(o.preventDefault(),o.stopImmediatePropagation(),this.keys.add(o.key.toLowerCase()),this.kick())},{capture:!0}),t(window,"keyup",o=>{s(o)&&(this.keys.delete(o.key.toLowerCase()),o.stopImmediatePropagation())},{capture:!0}),t(window,"blur",()=>this.keys.clear())}};function Y1(i,t){let e=Ae(t);if(!e)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:t,x:i.x,z:i.z,rotation:i.rotation,w:e.size[0]*n,d:e.size[1]*n,h:e.size[2]*n,variant:null,entity:null,power:null}}function Qu(i,t){if(!i.furniture.some(n=>n.type==="parking"&&t.has(n.id)))return i;let e=i.furniture.flatMap(n=>{let s=n.type==="parking"?t.get(n.id):void 0,r=s?Y1(n,s):null;return r?[n,r]:[n]});return{...i,furniture:e}}function th(i,t){let e=[],n=[],s=[],r=[],o=[];for(let{face:l,field:c}of i){let u=e.length/3,h=c.portrait===!1?10:6,f=c.portrait===!1?6:10,d=q1(c.id)%1e3/1e3;for(let x of io(l,c)){let[g,m,v,y]=x.corners.map(M=>[M[0]+l.n[0]*.006,M[1]+l.n[1]*.006-t,M[2]+l.n[2]*.006]),_=[[g,0,0],[m,1,0],[v,1,1],[y,0,1]];for(let M of[0,1,2,0,2,3]){let[E,C,b]=_[M];e.push(E[0],E[1],E[2]),n.push(C,b),s.push(h,f),r.push(d)}}let p=e.length/3-u;p&&o.push({id:c.id,start:u,count:p})}if(!e.length)return null;let a=new $t;return a.setAttribute("position",new Ut(e,3)),a.setAttribute("uv",new Ut(n,2)),a.setAttribute("aCells",new Ut(s,2)),a.setAttribute("aPhase",new Ut(r,1)),a.setAttribute("aLevel",new Ut(new Float32Array(e.length/3),1)),{geometry:a,ranges:o}}function ho(i,t){let e=i.geometry.getAttribute("aLevel"),n=e.array,s=!1;for(let r of i.ranges){let o=Math.min(1,Math.max(0,t.get(r.id)??0));n.fill(o,r.start,r.start+r.count),o>.02&&(s=!0)}return e.needsUpdate=!0,s}function eh(i){let t=new ie({transparent:!0,blending:Ce,depthWrite:!1,side:he});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aCells;
attribute float aLevel;
attribute float aPhase;
varying vec2 vCells;
varying float vLevel;
varying float vPhase;
varying vec2 vLiveUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vCells = aCells;
vLevel = aLevel;
vPhase = aPhase;
vLiveUv = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowTime;
varying vec2 vCells;
varying float vLevel;
varying float vPhase;
varying vec2 vLiveUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        // the cell borders of the module
        vec2 fp3dG = abs(fract(vLiveUv * vCells) - 0.5);
        float fp3dLine = smoothstep(0.455, 0.5, max(fp3dG.x, fp3dG.y));
        // a band of light sweeping down the module towards the eave, faster with more power
        float fp3dSweep = exp(-fract(vLiveUv.y * 1.3 + uFlowTime * (0.12 + 0.3 * vLevel) + vPhase) * 4.0);
        // a second, faint band crossing the other way keeps the picture alive
        float fp3dBack = 0.35 * exp(-fract(vLiveUv.x * 0.9 - uFlowTime * 0.07 + vPhase * 2.0) * 6.0);
        // the cells glow softly, their borders light up as the band passes
        float fp3dGlow = vLevel * (0.07 + 0.32 * fp3dSweep + 0.10 * fp3dBack) + fp3dLine * vLevel * (0.35 + 0.9 * fp3dSweep);
        vec3 fp3dAmber = vec3(1.0, 0.76, 0.30);
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},t.customProgramCacheKey=()=>"fp3d-solar-live",t}function q1(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619)>>>0;return t}var nm=`
  varying vec2 vXZ;
  void main() {
    vXZ = position.xz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,$1=`
  uniform float uTime;
  uniform vec3 uColor;
  uniform float uLevel;
  uniform float uFlow;
  uniform float uHeat;
  uniform float uSurface;
  varying vec2 vXZ;
  float wave(vec2 p, float t) {
    return sin(p.x * 3.1 + t * 1.3) * sin(p.y * 2.7 - t * 1.1) + 0.5 * sin((p.x + p.y) * 4.3 + t * 1.7);
  }
  void main() {
    float t = uTime * (0.3 + 1.5 * uFlow);
    float c = wave(vXZ, t) + wave(vXZ * 1.7 + 3.0, t * 1.3);
    // bright lines where the waves cross: the caustics of light under moving water
    float caustic = pow(clamp(1.0 - abs(c) * 0.55, 0.0, 1.0), 5.0);
    // the surface of a pool with a basin is a faint shimmer, the light's pattern lies on the floor below
    float base = mix(0.32, 0.16, uSurface);
    float lines = mix(0.35 + 0.6 * uFlow, 0.18 + 0.3 * uFlow, uSurface);
    vec3 col = uColor * uLevel * (base + lines * caustic);
    col += vec3(1.0, 0.42, 0.12) * uHeat * 0.07 * (0.6 + 0.4 * sin(t * 1.7 + vXZ.x * 2.0 + vXZ.y));
    gl_FragColor = vec4(col, 1.0);
  }
`,Z1=nm,J1=`
  uniform vec2 uAxis;
  varying vec2 vXZ;
  void main() {
    // slats across the direction the cover rolls
    float s = fract(dot(vXZ, uAxis) / 0.22);
    float edge = smoothstep(0.0, 0.08, s) * (1.0 - smoothstep(0.9, 1.0, s));
    vec3 base = vec3(0.13, 0.19, 0.3);
    gl_FragColor = vec4(base * (0.65 + 0.35 * edge), 0.96);
  }
`;function em(i,t){let e=[];for(let[s,r,o]of Ni(i))for(let a of[s,o,r])e.push(i[a][0],t,i[a][1]);let n=new $t;return n.setAttribute("position",new Ut(e,3)),n}function im(i,t){let e=new Ue;for(let n of i){if(n.points.length<3)continue;let s=n.floorY!==void 0&&n.floorY!==null&&n.floorY<n.y-.2,r=(o,a)=>{let l=new Ot(em(n.points,o),new nn({uniforms:{uTime:t,uColor:{value:n.color},uLevel:{value:n.level},uFlow:{value:n.flow?1:0},uHeat:{value:n.heat?1:0},uSurface:{value:a}},vertexShader:nm,fragmentShader:$1,transparent:!0,blending:Ce,depthWrite:!1,side:he}));l.renderOrder=5,l.frustumCulled=!1,e.add(l)};if(s?(r(n.floorY+.01,0),r(n.y+.004,1)):r(n.y+.004,0),n.cover>.02){let o=n.points.map(g=>g[0]),a=n.points.map(g=>g[1]),[l,c,u,h]=[Math.min(...o),Math.max(...o),Math.min(...a),Math.max(...a)],f=c-l>=h-u,d=Math.min(1,n.cover),p=f?[[l-.1,u-.1],[l+(c-l)*d,u-.1],[l+(c-l)*d,h+.1],[l-.1,h+.1]]:[[l-.1,u-.1],[c+.1,u-.1],[c+.1,u+(h-u)*d],[l-.1,u+(h-u)*d]],x=Rl(n.points,p);if(x.length>=3){let g=new Ot(em(x,n.y+.03),new nn({uniforms:{uAxis:{value:f?[1,0]:[0,1]}},vertexShader:Z1,fragmentShader:J1,transparent:!0,side:he}));g.renderOrder=6,e.add(g);let m=[];for(let y=0;y<x.length;y++){let _=x[y],M=x[(y+1)%x.length];m.push(_[0],n.y+.032,_[1],M[0],n.y+.032,M[1])}let v=new $t;v.setAttribute("position",new Ut(m,3)),e.add(new qe(v,new Ye({color:5995775,transparent:!0,opacity:.6})))}}}return e}function sm(i){for(let t of i.children)t.geometry?.dispose(),t.material?.dispose?.();i.clear()}var rm=["neon","blueprint","day"];function om(i){return rm.indexOf(i)}var Gl={value:new H(.22,.88,1)},Hl={value:0};function am(i){let t=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!t)return null;let e=parseInt(t[1],16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}var K1=`
uniform int uTheme;
uniform vec3 uAccent;
uniform int uAccentOn;
vec3 fp3dThemed(vec3 c, bool line) {
  float mx = max(c.r, max(c.g, c.b));
  float mn = min(c.r, min(c.g, c.b));
  float sat = mx > 0.0 ? (mx - mn) / mx : 0.0;
  if (uTheme == 0) {
    // an own accent: every line and every cyan surface takes it, as bright as it was
    if (uAccentOn == 1 && (line || (sat > 0.35 && c.r < c.g * 0.8 && c.b > c.g * 0.85 && c.g > c.b * 0.6))) return uAccent * mx;
    return c;
  }
  // signal colours keep their colour
  if (!line && mx > 0.45 && sat > 0.45) return c;
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  if (uTheme == 1) {
    // blueprint: white lines on shades of blue
    if (line) return vec3(0.8, 0.9, 1.0) * min(1.0, mx * 1.15);
    return mix(vec3(0.04, 0.13, 0.3), vec3(0.2, 0.42, 0.75), clamp(l * 5.0, 0.0, 1.0));
  }
  // day: light surfaces with a hint of their hue, dark blue lines
  if (line) return vec3(0.08, 0.17, 0.38) * clamp(mx * 1.4, 0.4, 1.0);
  vec3 g = vec3(clamp(0.66 + l * 2.6, 0.0, 0.96));
  return mix(g, g * (c / max(mx, 0.001)), 0.1);
}
`;function rn(i,t,e=!1){let n=i.onBeforeCompile.bind(i),s=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(r,o)=>{n(r,o),r.uniforms.uTheme=t,r.uniforms.uAccent=Gl,r.uniforms.uAccentOn=Hl,r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
${K1}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${e?"true":"false"});`)},i.customProgramCacheKey=()=>`${s()}-themed-${e?"l":"s"}`,i}function fo(i){return i==="day"?Ti:Ce}var po=.012,j1=.012;function cm(i,t,e,n,s,r=[],o){let a=[],l=[],c=[],u=[],h=(m,v,y,_,M,E,C)=>{for(let b of[m,v,y,m,y,_])a.push(b[0],b[1],b[2]),l.push(M[0],M[1],M[2]),c.push(E),u.push(C)};i.rooms.forEach((m,v)=>{if(m.points.length<3)return;let y=m.points.map(R=>R[0]),_=m.points.map(R=>R[1]),M=Math.min(...y),E=Math.min(..._),C=Math.max(...y),b=Math.max(..._),S=Math.max(1,Math.ceil((C-M)/s)),T=Math.max(1,Math.ceil((b-E)/s));for(let R=0;R<S;R++)for(let A=0;A<T;A++){let L=M+(R+.5)*s,w=E+(A+.5)*s;if(!Jt([L,w],m.points)||r.some(O=>Jt([L,w],O)))continue;let P=M+R*s,F=E+A*s,N=Math.min(P+s,C),B=Math.min(F+s,b);h([P,po,F],[P,po,B],[N,po,B],[N,po,F],[0,1,0],v,-1)}});let f=i.rooms.length,d=(i.outdoor??[]).filter(m=>m.points.length>=3&&!Pi(m.type));if(d.length){let m=d.flatMap(b=>b.points.map(S=>S[0])),v=d.flatMap(b=>b.points.map(S=>S[1])),y=Math.floor(Math.min(...m)/s)*s,_=Math.floor(Math.min(...v)/s)*s,M=Math.max(1,Math.ceil((Math.max(...m)-y)/s)),E=Math.max(1,Math.ceil((Math.max(...v)-_)/s)),C=(b,S,T)=>bp(i,b)-Xr(i,b,S,T)+po;for(let b=0;b<M;b++)for(let S=0;S<E;S++){let T=y+b*s,R=_+S*s,A,L=[T+s/2,R+s/2];A=d.find(P=>P.type==="pool"&&Jt(L,P.points));for(let P=d.length-1;P>=0&&!A;P--)Jt(L,d[P].points)&&(A=d[P]);if(!A)continue;let w=(P,F)=>[P,C(A,P,F),F];h(w(T,R),w(T,R+s),w(T+s,R+s),w(T+s,R),[0,1,0],f,-1)}}let p=Math.min(i.cut_height,i.height),x=[];t.forEach((m,v)=>{let y=Math.min(i.height,m.height??i.height),_=Math.min(p,y-.02),M=m.b[0]-m.a[0],E=m.b[1]-m.a[1],C=Math.hypot(M,E);if(C<.05)return;let b=[M/C,E/C],S=[-b[1],b[0]],T=e[v],R=tM(m,b,C,n),A=(F,N)=>F?i.rooms.findIndex(B=>B.id===F):N?f:-1;x.push({a:m.a,b:m.b,h:y,ra:A(m.roomLeft,!1),rb:A(m.roomRight,m.exterior),gaps:R});let L=(F,N,B)=>[N,B,...F.filter(O=>O>N+.005&&O<B-.005)].sort((O,z)=>O-z).filter((O,z,V)=>z===0||O>V[z-1]+.005),w=L([_,(_+y)/2,...R.flatMap(F=>[F.y0+.01,F.y1-.01])],.02,y-.02),P=L(R.flatMap(F=>[F.s0,F.s1]),0,C);for(let F of[1,-1]){let N=F>0?m.roomLeft:m.roomRight,B=N?i.rooms.findIndex(G=>G.id===N):m.exterior?f:-1;if(B<0)continue;let O=(F>0?m.left:m.right)+j1,z=[S[0]*F,S[1]*F],V=(G,nt)=>[m.a[0]+b[0]*G+z[0]*O,nt,m.a[1]+b[1]*G+z[1]*O],Q=G=>{let nt=V(G,0),lt=o?.(nt[0],nt[2]);return lt==null?1/0:lt-.02};for(let G=0;G<P.length-1;G++){let nt=P[G+1]-P[G],lt=Math.max(1,Math.ceil(nt/s));for(let dt=0;dt<lt;dt++){let $=P[G]+nt/lt*dt,q=P[G]+nt/lt*(dt+1),it=($+q)/2;for(let ct=0;ct<w.length-1;ct++){let ut=w[ct],Tt=w[ct+1];if(Tt-ut<.01)continue;let Vt=(ut+Tt)/2;if(R.some(Xt=>it>Xt.s0&&it<Xt.s1&&Vt>Xt.y0&&Vt<Xt.y1))continue;let Nt=ut>=p-1e-6?T:rs+T,Wt=Math.min(Tt,Q($)),re=Math.min(Tt,Q(q));Wt<=ut+.005&&re<=ut+.005||h(V($,ut),V(q,ut),V(q,Math.max(ut,re)),V($,Math.max(ut,Wt)),[z[0],0,z[1]],B,Nt)}}}}});let g=[];for(let m of n){if(m.opening.type!=="door")continue;let v=t.find(M=>um(M,m)&&Q1(M,m));if(!v||!v.roomLeft||!v.roomRight)continue;let y=i.rooms.findIndex(M=>M.id===v.roomLeft),_=i.rooms.findIndex(M=>M.id===v.roomRight);y<0||_<0||g.push({id:m.opening.id,a:y,b:_,x:m.start[0]+m.axis[0]*(m.width/2),y:Math.min(1.1,m.top*.55),z:m.start[1]+m.axis[1]*(m.width/2)})}return{pos:new Float32Array(a),normal:new Float32Array(l),room:Int16Array.from(c),fold:new Float32Array(u),doors:g,blockers:x}}function um(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],s=Math.hypot(e,n)||1;return Math.abs((t.start[0]-i.a[0])*n-(t.start[1]-i.a[1])*e)/s<.02&&Math.abs((t.axis[0]*e+t.axis[1]*n)/s)>.99}function Q1(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],s=Math.hypot(e,n)||1,r=t.start[0]+t.axis[0]*(t.width/2),o=t.start[1]+t.axis[1]*(t.width/2),a=((r-i.a[0])*e+(o-i.a[1])*n)/s;return a>-.05&&a<s+.05}function tM(i,t,e,n){let s=[];for(let r of n){if(!um(i,r))continue;let o=(r.start[0]-i.a[0])*t[0]+(r.start[1]-i.a[1])*t[1],l=r.axis[0]*t[0]+r.axis[1]*t[1]>0?o:o-r.width;l>e||l+r.width<0||s.push({s0:l,s1:l+r.width,y0:r.sill-.01,y1:r.top+.01})}return s}function eM(i,t){let e=Math.max(0,-t),n=Math.max(0,t);switch(i){case"ceiling":return .3+.7*e;case"spot":return .06+.94*e**5;case"pendant":return .25+.85*e**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(t);default:return 1}}function nM(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function lm(i,t,e,n,s,r,o){let a=t-i.x,l=e-i.y,c=n-i.z,u=a*a+l*l+c*c,h=Math.sqrt(u)||1e-6,f=nM(i),d=1/(1+u/(f*f)),p=d*Math.sqrt(d),x=Math.max(0,-(a*s+l*r+c*o)/h);return i.level*p*(.2+.8*x)*eM(i.kind,l/h)}function hm(i,t,e=.7,n=[]){let s=[...t];i.doors.forEach((u,h)=>{let f=n[h]??.5;if(!(f<=.01))for(let[d,p]of[[u.a,u.b],[u.b,u.a]]){let x=[0,0,0];for(let m of t){if(m.room!==d)continue;let v=m.x-u.x,y=m.y-u.y,_=m.z-u.z,M=Math.hypot(v,y,_)||1,E=lm(m,u.x,u.y,u.z,v/M,y/M,_/M);x[0]+=m.color[0]*E,x[1]+=m.color[1]*E,x[2]+=m.color[2]*E}let g=Math.max(x[0],x[1],x[2]);g<.01||s.push({x:u.x,y:u.y,z:u.z,color:[x[0]/g,x[1]/g,x[2]/g],level:Math.min(1,g*.9*(.35+.65*f)),kind:"wall",room:p})}});let r=new Map;for(let u of s){let h=i.blockers.filter(d=>d.ra===u.room||d.rb===u.room),f={...u,color:u.color.map(d=>Math.pow(d,1.5)),walls:h};r.set(u.room,[...r.get(u.room)??[],f])}let{pos:o,normal:a,room:l}=i,c=new Float32Array(o.length);for(let u=0;u<l.length;u++){let h=r.get(l[u]);if(!h)continue;let f=u*3,d=0,p=0,x=0;for(let g of h){if(g.walls.length&&iM(g,g.walls,o[f],o[f+1],o[f+2]))continue;let m=lm(g,o[f],o[f+1],o[f+2],a[f],a[f+1],a[f+2]);d+=g.color[0]*m,p+=g.color[1]*m,x+=g.color[2]*m}c[f]=1-Math.exp(-d*e*1.6),c[f+1]=1-Math.exp(-p*e*1.6),c[f+2]=1-Math.exp(-x*e*1.6)}return c}function iM(i,t,e,n,s){let r=e-i.x,o=s-i.z;for(let a of t){let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],u=r*c-o*l;if(Math.abs(u)<1e-9)continue;let h=a.a[0]-i.x,f=a.a[1]-i.z,d=(h*c-f*l)/u;if(d<=1e-6||d>=1-1e-6)continue;let p=(h*o-f*r)/u;if(p<0||p>1)continue;let x=i.y+(n-i.y)*d;if(x>=a.h)continue;let g=p*Math.hypot(l,c);if(!a.gaps.some(m=>g>m.s0&&g<m.s1&&x>m.y0&&x<m.y1))return!0}return!1}function fm(i,t,e){let n=i.rooms.findIndex(s=>s.points.length>=3&&Jt([t,e],s.points));return n<0?i.rooms.length:n}function Wl(i,t){return i&&t>=0&&t<i.length?i[t]:t}var mo={open:0,open2:0,tilt:0,tilt2:0,cover:null},dm=2043986,pm=2769520,sM=2242399,nh=1845831,rM=1450554,li=16758087,oM=1.2,aM=1.5,lM=1846349,cM=2572395,uM=1120816,hM=1845831,mm=5995775,gm=9085695,tr=Bt(3662079,.08),fM=.2;function Xl(i,t,e,n,s,r,o,a,l,c,u){let h=(d,p,x)=>t(d,p,x),f=[[h(e,s,a),h(n,s,a),h(n,r,a),h(e,r,a),c],[h(e,s,o),h(n,s,o),h(n,r,o),h(e,r,o),Bt(l.getHex(),.6)],[h(e,r,o),h(n,r,o),h(n,r,a),h(e,r,a),l],[h(e,s,o),h(n,s,o),h(n,s,a),h(e,s,a),Bt(l.getHex(),.85)],[h(e,s,o),h(e,r,o),h(e,r,a),h(e,s,a),Bt(l.getHex(),.92)],[h(n,s,o),h(n,r,o),h(n,r,a),h(n,s,a),Bt(l.getHex(),.92)]];for(let[d,p,x,g,m]of f)i.tri(d,p,x,m,m,m,void 0,u),i.tri(d,x,g,m,m,m,void 0,u)}function ce(i,t,e,n,s,r,o,a,l,c,u,h){if(a<=u+1e-6)return Xl(i,t,e,n,s,r,o,a,l,c,Ht);if(o>=u-1e-6)return Xl(i,t,e,n,s,r,o,a,l,c,h);Xl(i,t,e,n,s,r,o,u,l,c,Ht),Xl(i,t,e,n,s,r,u,a,l,c,h)}function ki(i,t,e,n,s,r,o,a,l,c,u=0){let h=(f,d,p)=>{let x=_=>u?(o-_)/u:.5,g=t(e,s,f),m=t(n,s,f),v=t(n,s,d),y=t(e,s,d);i.tri(g,m,v,a,a,a,[0,x(f),1,x(f),1,x(d)],p),i.tri(g,v,y,a,a,a,[0,x(f),1,x(d),0,x(d)],p)};o<=l+1e-6?h(r,o,Ht):r>=l-1e-6?h(r,o,c):(h(r,l,Ht),h(l,o,c))}function dM(i,t,e,n,s,r,o,a,l,c){let u=t(e,s,o),h=t(n,s,o),f=t(n,r,o),d=t(e,r,o),p=0,x=(r-s)/c;i.tri(u,h,f,a,a,a,[0,p,1,p,1,x],l),i.tri(u,f,d,a,a,a,[0,p,1,x,0,x],l)}function xm(i,t,e){let n=new ee,s=new ee,r=new ee(!0),o=new j(dm),a=new j(pm),l=[],c=[],u=[];for(let h of i){let f=n.count,d=s.count,p=r.count,x=t.get(h.opening.id)??mo,g=h.width,{sill:m,top:v,bucket:y}=h,_=(b,S,T)=>[h.start[0]+h.axis[0]*b+h.toRoom[0]*S,T,h.start[1]+h.axis[1]*b+h.toRoom[1]*S],M=(h.faceRoom-h.faceOut)/2,E=h.opening.mark==="closed",C=h.opening.type==="door"&&ns(h.opening,h.exterior)==="passage";if(h.opening.type==="door"&&!C||h.opening.type==="garage"){let b=-h.faceOut-.012,S=h.faceRoom+.012,T=h.opening.type==="garage"&&(E?!!x.sensed&&(x.cover??1)>=.95:(x.cover??1)<.95),R=T?Bt(li,.8):new j(dm),A=T?Bt(li,1):new j(pm);ce(n,_,-.045,.02,b,S,0,v+.045,R,A,e,y),ce(n,_,g-.02,g+.045,b,S,0,v+.045,R,A,e,y),ce(n,_,.02,g-.02,b,S,v-.02,v+.045,R,A,e,y)}if(h.opening.type==="door"){let b=ns(h.opening,h.exterior),S=Ud(b),T=h.opening.swing==="out"?-1:1,R=T>0?h.faceRoom:-h.faceOut,A=h.opening.leaves===2,L=.02,w=g-.02,P=Nd(g,b,h.hingeAtStart,h.opening);if(P){let O=-h.faceOut-.012,z=h.faceRoom+.012,V=R-T*(S?.06:.04)/2,Q=.06;for(let[G,nt]of P.panels)ce(n,_,G,G+Q,O,z,.02,v-.02,o,a,e,y),ce(n,_,nt-Q,nt,O,z,.02,v-.02,o,a,e,y),ce(n,_,G+Q,nt-Q,O,z,.02,.12,o,a,e,y),ki(s,_,G+Q,nt-Q,V,.12,v-.02,tr,e,y);L=P.x0,w=P.x1}let F=A?(w-L)/2-.004:w-L,N=S?.06:.04;S&&(ce(n,_,.02,g-.02,-h.faceOut-.02,h.faceRoom,0,.02,new j(nh),a,e,y),h.exterior&&ce(n,_,g/2-.08,g/2+.08,-h.faceOut-.1,-h.faceOut,v+.1,v+.17,Bt(li,.55),Bt(li,.85),e,Ht));let B=C?[]:[[h.hingeAtStart,x.open]];A&&!C&&B.push([!h.hingeAtStart,x.open2??0]);for(let[O,z]of B){let V=Math.min(1,Math.max(0,z)),Q=b==="sliding"?0:V*aM,G=b==="sliding"?V*F:0,nt=(Vt,Nt,Wt)=>{let re=Vt*Math.cos(Q)-Nt*Math.sin(Q)-G,Xt=R+T*(Nt*Math.cos(Q)+Vt*Math.sin(Q)+(G?.05:0));return _(O?L+re:w-re,Xt,Wt)},lt=V>.05?Ht:y,dt=E?!!x.sensed&&V<.05:V>.9,$=dt?Bt(li,.7):new j(S?uM:lM),q=dt?Bt(li,.9):new j(S?hM:cM);b==="glass"?(ce(n,nt,0,.05,-N,0,.01,v-.01,$,q,e,lt),ce(n,nt,F-.05,F,-N,0,.01,v-.01,$,q,e,lt),ce(n,nt,.05,F-.05,-N,0,.01,.12,$,q,e,lt),ce(n,nt,.05,F-.05,-N,0,v-.08,v-.01,$,q,e,lt),ki(s,nt,.05,F-.05,-N/2,.12,v-.08,tr,e,lt)):ce(n,nt,0,F,-N,0,.01,v-.01,$,q,e,lt),b==="front_glass"?ki(s,nt,.12,F-.12,.001,v*.55,v-.18,tr,e,lt):S&&ki(s,nt,.1,.18,.001,.3,v-.3,tr,e,lt);let it=Math.min(1.05,v*.5),ct=S?.3:.012,ut=S?F-.11:F-.16,Tt=S?F-.08:F-.05;ce(n,nt,ut,Tt,.004,.05,it-ct,it+ct,new j(mm),new j(gm),e,lt),ce(n,nt,ut,Tt,-N-.05,-N-.004,it-ct,it+ct,new j(mm),new j(gm),e,lt)}}else if(h.opening.type==="garage"){let b=Math.min(1,Math.max(0,x.cover??1)),S=new j(13951231),T=h.faceRoom-.03,R=v*(1-b);b>.01&&ki(r,_,.02,g-.02,T,R,v,S,e,y,.5);let A=(1-b)*v;A>.01&&dM(r,_,.02,g-.02,T,T+A,v+.03,S,y,.5)}else if(ns(h.opening,h.exterior)==="glass_wall"){ce(n,_,0,.04,M-.025,M+.025,m,v,o,a,e,y),ce(n,_,g-.04,g,M-.025,M+.025,m,v,o,a,e,y),ce(n,_,.04,g-.04,M-.025,M+.025,m,m+.03,o,a,e,y),ce(n,_,.04,g-.04,M-.025,M+.025,v-.04,v,o,a,e,y);let T=Math.max(1,Math.round((g-2*.04)/.9)),R=(g-2*.04)/T;for(let A=1;A<T;A++){let L=.04+A*R;ce(n,_,L-.02,L+.02,M-.025,M+.025,m+.03,v-.04,o,a,e,y)}for(let A=0;A<T;A++){let L=.04+A*R+(A?.02:0),w=.04+(A+1)*R-(A<T-1?.02:0);ki(s,_,L,w,M,m+.03,v-.04,tr,e,y)}}else{ce(n,_,0,.06,M-.035,M+.035,m,v,o,a,e,y),ce(n,_,g-.06,g,M-.035,M+.035,m,v,o,a,e,y),ce(n,_,.06,g-.06,M-.035,M+.035,m,m+(m>.05?.06:.03),o,a,e,y),ce(n,_,.06,g-.06,M-.035,M+.035,v-.06,v,o,a,e,y),m>.3&&(ce(n,_,-.04,g+.04,M+.035,h.faceRoom+.07,m-.03,m,new j(nh),a,e,y),h.exterior&&ce(n,_,-.03,g+.03,-h.faceOut-.06,M-.035,m-.04,m-.02,new j(nh),a,e,y));let T=.055,R=m+(m>.05?.06:.03),A=v-.06,L=M+.035,w=M+.035+.06,F=h.opening.leaves===2?[{atStart:h.hingeAtStart,x0:h.hingeAtStart?.06:g/2,x1:h.hingeAtStart?g/2:g-.06,open:x.open,tilt:x.tilt},{atStart:!h.hingeAtStart,x0:h.hingeAtStart?g/2:.06,x1:h.hingeAtStart?g-.06:g/2,open:x.open2??0,tilt:x.tilt2??0}]:[{atStart:h.hingeAtStart,x0:.06,x1:g-.06,open:x.open,tilt:x.tilt}];for(let N of F){let B=N.open>.02||N.tilt>.02,O=E?!!x.sensed&&!B:B,z=O?Bt(li,.75):new j(sM),V=O?Bt(li,.95):a,Q=N.x0,G=N.x1,nt=G-Q,lt=N.open*oM*(h.opening.swing==="out"?-1:1),dt=N.tilt*fM,$=(it,ct,ut)=>{let Tt=ut-R,Vt=ct+Tt*Math.sin(dt),Nt=R+Tt*Math.cos(dt),Wt=it*Math.cos(lt)-(Vt-L)*Math.sin(lt);Vt=L+(Vt-L)*Math.cos(lt)+it*Math.sin(lt);let re=N.atStart?Q+Wt:G-Wt;return _(re,Vt,Nt)},q=Math.abs(lt)>.05?Ht:y;if(ce(n,$,0,T,L,w,R,A,z,V,e,q),ce(n,$,nt-T,nt,L,w,R,A,z,V,e,q),ce(n,$,T,nt-T,L,w,R,R+T,z,V,e,q),ce(n,$,T,nt-T,L,w,A-T,A,z,V,e,q),ki(s,$,T,nt-T,(L+w)/2,R+T,A-T,O?Bt(li,.16):tr,e,q),ns(h.opening,h.exterior)==="bars"){let it=(R+A)/2,ct=(L+w)/2;ce(n,$,T,nt-T,ct-.012,ct+.012,it-.012,it+.012,z,V,e,q),ce(n,$,nt/2-.012,nt/2+.012,ct-.012,ct+.012,R+T,A-T,z,V,e,q)}}}if(x.cover!==null){let b=-h.faceOut,S=v+.2;ce(n,_,-.05,g+.05,b-.15,b,v,S,new j(rM),a,e,y);let T=Math.min(1,Math.max(0,x.cover));if(T>.01){let R=v-T*(v-m);ki(r,_,0,g,b-.07,R,v,new j(16777215),e,y,.045)}}l.push({id:h.opening.id,start:f,end:n.count}),c.push({id:h.opening.id,start:d,end:s.count}),u.push({id:h.opening.id,start:p,end:r.count})}return{frames:n.geometry(),glass:s.geometry(),blinds:r.geometry(),frameTris:l,glassTris:c,blindTris:u}}var pM=.3,bm=2.6;function vm(i,t=.32,e=.22,n=[]){let s=i.map(M=>M[0]),r=i.map(M=>M[1]),o=Math.min(...s),a=Math.max(...s),l=Math.min(...r),c=Math.max(...r),u=c-l>=a-o,h=e*.7071,f=M=>{let E=[M,[M[0]+e,M[1]],[M[0]-e,M[1]],[M[0],M[1]+e],[M[0],M[1]-e]],C=[...E,[M[0]+h,M[1]+h],[M[0]-h,M[1]+h],[M[0]+h,M[1]-h],[M[0]-h,M[1]-h]];return E.every(b=>Jt(b,i))&&!n.some(b=>C.some(S=>Jt(S,b)))},d=(M,E)=>f(u?[M,E]:[E,M]),p=(M,E)=>{let C=Math.ceil(Math.hypot(E[0]-M[0],E[1]-M[1])/.05);for(let b=1;b<C;b++)if(!f([M[0]+(E[0]-M[0])*b/C,M[1]+(E[1]-M[1])*b/C]))return!1;return!0},[x,g,m,v]=u?[o,a,l,c]:[l,c,o,a],y=[],_=!0;for(let M=x+e;M<=g-e+1e-6;M+=t){let E=null,C=null,b=.05;for(let A=m;A<=v+1e-6;A+=b)if(d(M,A)&&(C??=A),(!d(M,A)||A+b>v+1e-6)&&C!==null){let L=d(M,A)?A:A-b;(!E||L-C>E[1]-E[0])&&(E=[C,L]),C=null}if(!E||E[1]-E[0]<.2)continue;let S=A=>{let[L,w]=A?E:[E[1],E[0]];return[u?[M,L]:[L,M],u?[M,w]:[w,M]]},T=S(_),R=y[y.length-1];if(R&&n.length&&!p(R,T[0])){let A=S(!_);if(!p(R,A[0]))continue;T=A,_=!_}y.push(T[0],T[1]),_=!_}return y}function sh(i,t=.7,e=12){return Array.from({length:e},(n,s)=>{let r=s/e*Math.PI*2;return[i[0]+Math.cos(r)*t,i[1]+Math.sin(r)*t]})}var ih=i=>Math.atan2(Math.sin(i),Math.cos(i));function _m(i,t,e){let n=null;if(t.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(t.mode==="returning"||t.mode==="docked")n=t.rest;else return!1;let s=n[0]-i.pos[0],r=n[1]-i.pos[1],o=Math.hypot(s,r);if(o<.02){if(t.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=ih(t.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),bm*e),!0)}let a=Math.atan2(s,r),l=ih(a-i.heading);if(i.heading=ih(i.heading+Math.sign(l)*Math.min(Math.abs(l),bm*e)),Math.abs(l)<.35){let c=Math.min(o,pM*e);i.pos=[i.pos[0]+s/o*c,i.pos[1]+r/o*c]}return!0}var Mn=null,ym=new Map;function Sm(i,t=0){let e=new ee,n=new Le,s=Ae(i.type);if(s?.light)Ll(e,s,{x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)rh(e,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:t,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let r={id:"preview",type:i.type,x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};Il(e,n,new ee,r)}return{buf:e,lines:n}}function mM(i,t=180,e,n=1.3){let s=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${t}|${n}`,r=ym.get(s);if(r)return r;e&&Gr(e),Mn??=new es({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Mn.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),Mn.setSize(t,t,!1),Mn.setClearColor(0,0);let{buf:o,lines:a}=Sm(i),l=new vi,c=new Ot(o.geometry(),new ie({vertexColors:!0,color:new j(n,n,n)})),u=new qe(a.geometry(),new Ye({vertexColors:!0,color:new j(n*1.8,n*1.8,n*1.8)}));l.add(c,u);let h=new an().setFromObject(c),f=h.getCenter(new H),d=new Vn(-1,1,1,-1,.01,100);d.position.copy(f).add(new H(.9,.75,1.3).normalize().multiplyScalar(20)),d.lookAt(f),d.updateMatrixWorld();let p=.05;for(let m of[h.min.x,h.max.x])for(let v of[h.min.y,h.max.y])for(let y of[h.min.z,h.max.z]){let _=new H(m,v,y).applyMatrix4(d.matrixWorldInverse);p=Math.max(p,Math.abs(_.x),Math.abs(_.y))}let x=p*1.12;d.left=-x,d.right=x,d.top=x,d.bottom=-x,d.updateProjectionMatrix(),Mn.render(l,d);let g=Mn.domElement.toDataURL("image/png");return c.geometry.dispose(),c.material.dispose(),u.geometry.dispose(),u.material.dispose(),ym.set(s,g),g}function gM(i,t,e=160,n,s=1.25){let r=`front|${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${Math.round(t)}|${e}|${s}`,o=Mm.get(r);if(o)return o;n&&Gr(n);let{buf:a,lines:l}=Sm(i,t),c=new Ot(a.geometry(),new ie({vertexColors:!0,color:new j(s,s,s)})),u=new qe(l.geometry(),new Ye({vertexColors:!0,color:new j(s*1.8,s*1.8,s*1.8)})),h=new an().setFromObject(c);if(h.isEmpty())return null;let f=h.min.x,d=h.max.x,p=Math.max(0,h.min.y),x=h.max.y,g=Math.max(1,Math.min(1024,Math.round((d-f)*e))),m=Math.max(1,Math.min(1024,Math.round((x-p)*e)));Mn??=new es({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Mn.setPixelRatio(1),Mn.setSize(g,m,!1),Mn.setClearColor(0,0);let v=new vi;v.add(c,u);let y=new Vn(f,d,x,p,.01,100);y.position.set(0,0,50),y.lookAt(0,0,0),y.updateProjectionMatrix(),Mn.render(v,y);let _=Mn.domElement.toDataURL("image/png");c.geometry.dispose(),c.material.dispose(),u.geometry.dispose(),u.material.dispose();let M={url:_,x0:f,x1:d,y0:p,y1:x};return Mm.set(r,M),M}var Mm=new Map;var xA={Group:Ue,Mesh:Ot,MeshBasicMaterial:ie,CanvasTexture:ni,Color:j,PlaneGeometry:ii,BufferGeometry:$t,Float32BufferAttribute:Ut,DoubleSide:he},Tm={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},xM=2.4,Em=1.4,bM=.22,Am=140,ah=32,vM=500,Rm=160,Cm=33,Pm=.028,_M=.09,se=2767456,yM=1911110,MM=1,Im=new Set(["ceiling","downlight","spot","panel","pendant","strip"]),Yl=450,Lm=125,SM=.08,lh={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},wM=new j(1714765);function TM(){let t=navigator.deviceMemory??8,e=navigator.hardwareConcurrency||8;return t<=3||e<=4||/Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent)}var ch=class{host;options;renderer;scene=new vi;camera=new Qe(38,1,.1,400);controls;labels;root=new Ue;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];pipes=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];pools=[];poolActive=!1;soundActive=!1;flowTimer;persons=[];personPins=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;keepRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;selectedSet=[];theme="neon";themeUniform={value:0};sun=null;weather=null;rain=new qe(new $t,new Ye({color:10471679,transparent:!0,opacity:.4,blending:Ce,depthWrite:!1}));snow=new Ns(new $t,new Zi({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));skyDisc=new Ot(new br(1,28),new ie({color:16767370,transparent:!0,opacity:0,blending:Ce,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;weatherLast=0;roomTint=null;houseRadius=20;startView=null;keepView=!1;keepNext=!1;fpsStart=0;gpuName;constructor(t,e={}){this.host=t,this.options=e,this.explode=e.explode??!0,this.renderer=this.makeRenderer(e.quality??"auto"),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",t.append(this.labels),this.patternTexture=AM(),this.blindTexture=CM(),this.haloTexture=IM(),this.ground=new Ot(new ii(1,1),new ie({transparent:!1,blending:Ce,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.skyDisc),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),document.addEventListener("visibilitychange",this.onVisibility),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let s=n.some(r=>r.isIntersecting);s!==this.onScreen&&(this.onScreen=s,s&&this.invalidate())}),this.intersection.observe(t)),this.resize()}get low(){return this.lowQuality}setParked(t){let e=[...t].map(([n,s])=>`${n}=${s}`).sort().join("|");e!==this.parkedSig&&(this.parkedSig=e,this.parked=t,this.building&&(this.rebuild(),this.invalidate()))}setStats(t){this.statsOn=t}setLabelInset(t){this.labelInset!==t&&(this.labelInset=t,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(t){this.orbitSpeed=t,this.orbitLast=0,this.invalidate()}setQuality(t){let e=this.renderer.domElement,n=this.makeRenderer(t);this.rebuildTier(),this.applyTierFlags(),e.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n;let s=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=s,this.resize()}setPacks(t){Gr(t),this.building&&(this.rebuild(),this.invalidate())}setBuilding(t){let e=this.building===null;this.building=t,Td(t),this.rebuild(),e&&this.fit(0),this.invalidate()}setKeepView(t){this.keepView=t}setFloor(t,e=!0){this.keepNext=this.keepView&&t!==null&&this.floorId!==null&&t!==this.floorId,this.floorId=t,this.roomId=null,this.labelsDirty=!0,this.applyTargets(!e),this.applyHighlight(),this.fit(e?700:0)}setFloorStack(t){t!==this.floorStack&&(this.floorStack=t,this.applyTargets(!1))}setKeepRoof(t){t!==this.keepRoof&&(this.keepRoof=t,this.invalidate())}setExplode(t){t!==this.explode&&(this.explode=t,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(t){if(this.roomId=t,this.labelsDirty=!0,this.applyHighlight(),!t){this.fit(700);return}let e=this.floors.find(u=>u.floor.rooms.some(h=>h.id===t)),n=e?.floor.rooms.find(u=>u.id===t);if(!e||!n)return;let s=n.start_view;if(s){let u=e.floor.elevation+e.ty,[h,f]=is(n.points),d=s.target??{x:h,y:.3,z:f};this.controls.flyTo({target:new H(d.x,d.y+u,d.z),radius:s.radius,phi:s.phi,theta:s.theta});return}let[r,o]=is(n.points),a=n.points.map(u=>u[0]),l=n.points.map(u=>u[1]),c=new H(Math.max(...a)-Math.min(...a),e.floor.cut_height,Math.max(...l)-Math.min(...l));this.controls.flyTo({target:new H(r,e.floor.elevation+e.ty+.3,o),radius:Math.max(4,this.distanceFor(c)*1.05),phi:.72})}setWallMode(t){this.wallMode=t;for(let e of this.floors)this.buildLamps(e);this.invalidate()}setDevices(t){this.devices=t,this.labelsDirty=!0,this.effectFloors=new Set(t.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.deviceFloor=new Map(t.map(n=>[n.id,n.floorId]));let e=new Set;for(let n of t){e.add(n.id);let s=this.devicePins.get(n.id);s||(s={el:this.makeDevicePin(n.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(n.id,s),this.labels.append(s.el));let r=s.el;s.icon!==n.icon&&(s.icon=n.icon,r.querySelector(".fp3d-dev-icon").innerHTML=n.icon),s.text!==n.text&&(s.text=n.text,r.querySelector(".fp3d-dev-text").textContent=n.text);let o=n.caption??"";s.caption!==o&&(s.caption=o,r.querySelector(".fp3d-dev-name").textContent=o);let a=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";s.watt!==a&&(s.watt=a,r.querySelector(".fp3d-dev-watt").textContent=a);let l=`${n.name}: ${n.text}`;s.label!==l&&(s.label=l,r.title=n.name,r.setAttribute("aria-label",l)),s.active!==n.active&&(s.active=n.active,r.classList.toggle("fp3d-dev-on",n.active)),s.unavailable!==n.unavailable&&(s.unavailable=n.unavailable,r.classList.toggle("fp3d-dev-na",n.unavailable));let c=n.glow?`rgb(${n.glow.color.map(u=>Math.round(u*255)).join(", ")})`:"";s.glow!==c&&(s.glow=c,c?r.style.setProperty("--fp3d-glow",c):r.style.removeProperty("--fp3d-glow"))}for(let[n,s]of this.devicePins)e.has(n)||(s.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(t){let e=JSON.stringify([...t]);if(e!==this.roofWindowsKey){this.roofWindowsKey=e,this.roofWindows=t,this.buildRoofMesh();for(let n of this.floors)this.buildSun(n);this.invalidate()}}setAnchorCallback(t){this.anchorCb=t,this.labelsDirty=!0,this.invalidate()}setAnchors(t){this.anchors=t,this.labelsDirty=!0,this.invalidate()}setSolarLevels(t){this.solarLevels=t;let e=!1;for(let n of this.roof?.lives??[])ho(n,t)&&(e=!0);for(let n of this.floors)n.solarLive&&ho(n.solarLive,t)&&(e=!0);this.solarActive=e,this.invalidate()}setPools(t){let e=n=>n.map(s=>`${s.id}:${s.floorId}:${s.points.length}:${s.points[0]?.join(",")}:${s.y.toFixed(3)}:${s.color.map(r=>r.toFixed(2)).join("/")}:${s.level.toFixed(2)}:${s.flow?1:0}:${s.heat?1:0}:${s.cover.toFixed(2)}`).join(";");if(e(t)!==e(this.pools)){this.pools=t,this.poolActive=t.some(n=>n.flow);for(let n of this.floors)this.buildPoolWater(n);this.invalidate()}}buildPoolWater(t){t.poolGroup&&(sm(t.poolGroup),t.group.remove(t.poolGroup),t.poolGroup=void 0);let e=this.pools.filter(n=>n.floorId===t.floor.id);e.length&&(t.poolGroup=im(e,this.flowTime),t.group.add(t.poolGroup))}setSound(t){let e=n=>n.map(s=>`${s.id}:${s.floorId}:${s.x},${s.z}:${s.level.toFixed(2)}:${s.playing?1:0}:${s.members.join("+")}`).join(";");if(e(t)!==e(this.sound)){this.sound=t,this.soundActive=t.some(n=>n.playing);for(let n of this.floors){let s=n.soundGroup??=(()=>{let c=new Ue;return c.renderOrder=6,n.group.add(c),c})();for(let c of[...s.children])s.remove(c),c.geometry?.dispose(),c.material?.dispose?.();let r=t.filter(c=>c.floorId===n.floor.id),o=.03;for(let c of r)if(c.playing)for(let u=0;u<3;u++){let h=new Ot(new Sr(.92,1,48),new ie({color:3662079,transparent:!0,opacity:0,blending:Ce,depthWrite:!1,side:he}));h.rotation.x=-Math.PI/2,h.position.set(c.x,o+u*.002,c.z),h.userData={sound:!0,phase:u/3,level:c.level},h.frustumCulled=!1,s.add(h)}let a=[],l=new Set;for(let c of r)for(let u of c.members){let h=r.find(d=>d.id===u);if(!h||h===c)continue;let f=[c.id,h.id].sort().join("|");l.has(f)||(l.add(f),a.push(c.x,o+.02,c.z,h.x,o+.02,h.z))}if(a.length){let c=new $t;c.setAttribute("position",new Ut(a,3));let u=new qe(c,new Ye({color:3662079,transparent:!0,opacity:.45,blending:Ce,depthWrite:!1}));u.userData={soundLine:!0},s.add(u)}}this.invalidate()}}animateSound(t){let e=t/1e3;for(let n of this.floors)if(n.soundGroup)for(let s of n.soundGroup.children){if(!s.userData.sound)continue;let r=(e*.45+s.userData.phase)%1,o=s.userData.level,a=.25+r*(.9+1.6*o);s.scale.set(a,a,1),s.material.opacity=(1-r)*(.25+.45*o)}}setFlows(t){this.flows=t;let e=this.flowSeconds(),n=new Map;for(let s of t){let r=oh(s),o=Fm(s.power),a=this.flowPhase.get(r);n.set(r,{speed:o,offset:a?e*(a.speed-o)+a.offset:0})}this.flowPhase=n,this.flowActive=t.some(s=>s.power>.5);for(let s of this.floors)this.buildFlows(s);this.invalidate()}setPipes(t){this.pipes=t;for(let e of this.floors)this.buildPipes(e);this.invalidate()}buildPipes(t){let e=this.pipes.filter(r=>r.floorId===t.floor.id),n=JSON.stringify(e);if(n===t.pipeSig)return;t.pipeSig=n;let s=new ee;for(let r of e)Qp(s,r);t.pipeMesh.geometry.dispose(),t.pipeMesh.geometry=s.geometry(),t.pipeMesh.visible=s.count>0}setPersons(t){this.labelsDirty=!0,this.persons=t;let e=new Set;for(let n of t){e.add(n.id);let s=this.personPins.get(n.id);if(s||(s=document.createElement("div"),s.className="fp3d-person",s.dataset.entity=n.id,this.personPins.set(n.id,s),this.labels.append(s)),s.title=n.name,s.setAttribute("aria-label",n.name),s.dataset.picture!==(n.picture??"")||s.dataset.initials!==n.initials)if(s.dataset.picture=n.picture??"",s.dataset.initials=n.initials,s.replaceChildren(),n.picture){let r=document.createElement("img");r.src=n.picture,r.alt="",r.addEventListener("error",()=>r.replaceWith(document.createTextNode(n.initials))),s.append(r)}else s.textContent=n.initials}for(let[n,s]of this.personPins)e.has(n)||(s.remove(),this.personPins.delete(n));this.invalidate()}setPickTargets(t,e){this.pickFurniture=t,this.pickOpenings=e}setAccent(t){let e=am(t),n=e?1:0;n===Hl.value&&(!e||Gl.value.equals(new H(...e)))||(Hl.value=n,e&&Gl.value.set(...e),this.invalidate())}setTheme(t){if(t===this.theme)return;this.theme=t,this.themeUniform.value=om(t);let e=fo(t),n=[...this.floors.map(s=>s.materials.lines),...this.roof?[this.roof.lines]:[]];for(let s of n)s.blending=e,s.needsUpdate=!0;this.placeGround(),this.invalidate()}setFurnishMode(t){this.furnish=t,t||this.selectFurniture(null),this.invalidate()}selectFurniture(t){t&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=t,this.updateGhost(),this.invalidate()}selectFurnitureSet(t){this.selectedSet=[...t],this.updateGhost(),this.invalidate()}setSun(t){this.sun=t;for(let e of this.floors)this.buildSun(e);this.placeSky(),this.invalidate()}setWeather(t){this.weather=t;for(let e of this.floors)this.buildSun(e);this.applyWeather(),this.placeSky(),this.invalidate()}applyWeather(){let t=this.weather,e=!!t&&!this.lowQuality,n=t?new j(t.sky[0]/255,t.sky[1]/255,t.sky[2]/255):null;this.scene.fog=e&&t.fog>0&&n?new dr(n,.01+.035*t.fog):null;let s=e?Math.round(700*t.rain):0,r=e?Math.round(450*t.snow):0;this.seedParticles(this.rain,s*2,!0),this.seedParticles(this.snow,r,!1),this.rain.visible=s>0,this.snow.visible=r>0}seedParticles(t,e,n){if((t.geometry.getAttribute("position")?.count??0)===e)return;let r=this.weatherBox,o=new Float32Array(e*3),a=n?2:1;for(let c=0;c<e;c+=a){let u=r.x0+Math.random()*(r.x1-r.x0),h=r.y0+Math.random()*(r.y1-r.y0),f=r.z0+Math.random()*(r.z1-r.z0);o.set([u,h,f],c*3),n&&o.set([u,h-.45,f],c*3+3)}t.geometry.dispose();let l=new $t;l.setAttribute("position",new Ut(o,3)),t.geometry=l}stepWeather(t){let e=this.weather;if(!e||!this.rain.visible&&!this.snow.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(t-this.weatherLast)/1e3):0;if(this.weatherLast=t,!n)return!0;let s=this.weatherBox,r=s.y1-s.y0,o=e.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*e.rain)*n;for(let u=0;u<l.length;u+=6){let h=l[u+1]-c,f=l[u]+o*n;h<s.y0&&(h+=r,f=s.x0+Math.random()*(s.x1-s.x0)),f>s.x1&&(f-=s.x1-s.x0),l[u]=f,l[u+1]=h,l[u+3]=f-o*.05,l[u+4]=h-.45,l[u+5]=l[u+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=t/1e3;for(let u=0;u<l.length;u+=3){let h=l[u+1]-(.9+.6*e.snow)*n,f=l[u]+(o+Math.sin(c+u)*.4)*n;h<s.y0&&(h+=r,f=s.x0+Math.random()*(s.x1-s.x0)),f>s.x1&&(f-=s.x1-s.x0),l[u]=f,l[u+1]=h}a.needsUpdate=!0}return!0}placeSky(){let t=this.sun,e=this.weather,n=e?.cloud??0,s=!t||t.elevation<-3;if(!t||!e||e.disc===!1||n>.85||!s&&t.elevation<1){this.skyDisc.visible=!1;return}let r=(this.building?.settings.north??0)*ue,o=(s?t.azimuth+180:t.azimuth)*ue,a=Math.max(10,Math.abs(t.elevation))*ue,l=this.weatherBox,c=new H((l.x0+l.x1)/2,l.y0,(l.z0+l.z1)/2),u=Math.min(300,Math.max(80,this.houseRadius*5)),h=new H(Math.sin(r+o)*Math.cos(a),Math.sin(a),-Math.cos(r+o)*Math.cos(a));this.skyDisc.position.copy(c).addScaledVector(h,u),this.skyDisc.scale.setScalar(u*(s?.03:.04)),this.skyDisc.lookAt(c);let f=this.skyDisc.material;f.color.set(s?13621486:16767370),f.opacity=(s?.55:.85)*(1-n),this.skyDisc.visible=!0}setRoomTint(t){let e=!!t!=!!this.roomTint;if(this.roomTint=t,this.tintTick=!0,this.applyHighlight(),e)for(let n of this.floors)n.glowSig="",this.buildGlow(n)}setScreens(t){this.screens=t;for(let e of this.floors)this.buildScreens(e);this.invalidate()}fillRoomPin(t,e,n){if(t.textContent=e||"\u2013",n){let s=document.createElement("small");s.textContent=n,t.append(s),t.classList.add("fp3d-pin-info")}else t.classList.remove("fp3d-pin-info")}setRoomInfo(t){if(!(t.size===this.roomInfo.size&&[...t].every(([n,s])=>this.roomInfo.get(n)===s))){this.roomInfo=t;for(let n of this.floors)for(let s of n.roomPins)this.fillRoomPin(s.pin,s.room.name,t.get(s.room.id))}}setFloorInfo(t){this.floorInfo=t;for(let e of this.floors){let n=e.label.querySelector("span"),s=t.get(e.floor.id)??this.options.floorInfo?.(e.floor)??"";n&&n.textContent!==s&&(n.textContent=s,e.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(t,e=!1){if(this.openingTargets=t,e)for(let n of this.floors){let s=!1;for(let[r,o]of n.openings){let a=t.get(r)??mo,l={...a,open2:a.open2??0,tilt2:a.tilt2??0};l.open===o.open&&l.open2===(o.open2??0)&&l.tilt===o.tilt&&l.tilt2===(o.tilt2??0)&&l.cover===o.cover&&!!l.sensed==!!o.sensed||(n.openings.set(r,l),s=!0)}s&&(this.buildOpenings(n),this.buildGlow(n),this.buildSun(n))}this.invalidate()}setFridgeDoors(t){for(let[e,n]of t){let s=this.fridges.get(e)??{l:n.left?1:0,r:n.right?1:0,tl:0,tr:0};s.tl=n.left?1:0,s.tr=n.right?1:0,this.fridges.set(e,s)}for(let e of[...this.fridges.keys()])t.has(e)||this.fridges.delete(e);this.invalidate()}awnings=new Map;setAwnings(t){for(let[e,n]of t){let s=this.awnings.get(e)??{cur:n.out??0,to:n.out??0,speed:0};n.out===null?(s.to=n.moving>0?1:0,s.speed=1/Math.max(2,n.time)):(s.to=n.out,s.speed=0),this.awnings.set(e,s)}for(let e of[...this.awnings.keys()])t.has(e)||this.awnings.delete(e);this.invalidate()}stepAwnings(t){let e=new Set,n=1-Math.exp(-t/450);for(let[s,r]of this.awnings){let o=r.to-r.cur;if(Math.abs(o)<.002){o!==0&&(r.cur=r.to,e.add(s));continue}r.cur=r.speed>0?r.cur+Math.sign(o)*Math.min(Math.abs(o),r.speed*t/1e3):r.cur+o*n,e.add(s)}return e}stepFridges(t){let e=1-Math.exp(-t/Rm),n=new Set;for(let[s,r]of this.fridges)for(let[o,a]of[["l","tl"],["r","tr"]]){let l=r[a]-r[o];if(Math.abs(l)<.004){l!==0&&(r[o]=r[a],n.add(s));continue}r[o]+=l*e,n.add(s)}for(let s of this.stepAwnings(t))n.add(s);if(!n.size)return!1;for(let s of this.floors)s.floor.furniture.some(r=>n.has(r.id))&&this.buildFridges(s);return!0}buildFridges(t){let e=new ee;for(let n of t.floor.furniture){if(n.type!=="fridge_smart")continue;let s=this.fridges.get(n.id);mp(e,n,hn(t.floor,n),s?.l??0,s?.r??0)}for(let n of t.floor.furniture)n.type==="awning"&&pp(e,n,hn(t.floor,n),this.awnings.get(n.id)?.cur??0);t.fridgeMesh.geometry.dispose(),t.fridgeMesh.geometry=e.geometry(),t.fridgeMesh.visible=e.count>0}resetView(){this.fit(700)}setStartView(t){this.startView=t}currentView(){let t=this.controls.view,e=this.floorBase(this.floorId);return{theta:Math.atan2(Math.sin(t.theta),Math.cos(t.theta)),phi:t.phi,radius:t.radius,target:{x:t.target.x,y:t.target.y-e,z:t.target.z}}}floorBase(t){let e=t===null?void 0:this.floorMap.get(t);return e?e.floor.elevation+e.ty:0}dispose(){this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let t of[this.rain,this.snow,this.skyDisc])t.geometry.dispose(),t.material.dispose();this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility),this.controls.dispose(),this.clear(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let t of this.robots.values())t.led.dispose();this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(t=>this.render(t)))}makeRenderer(t){let e=t==="low"||t==="auto"&&TM();this.lowQuality=e,this.applyWeather(),this.highQuality=t==="high";let n=new es({antialias:!e,alpha:!0,powerPreference:e?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1:t==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=Ie,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new Vl(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(t,e)=>this.onTap(t,e),hold:(t,e)=>this.onHold(t,e),swipeStart:(t,e,n,s)=>this.swipeStart(t,e,n,s),swipeMove:t=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",t,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(t,e)=>this.grabFurniture(t,e),drag:(t,e)=>this.dragFurniture(t,e),drop:()=>this.dropFurniture(),doubleTap:(t,e)=>{let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(t,e):null;n&&!("entity"in n)&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):this.options.onBack?.()}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let t=this.host.clientWidth||1,e=this.host.clientHeight||1;this.size={w:t,h:e},this.labelsDirty=!0,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.invalidate()}clear(){for(let t of this.robots.values())t.group.removeFromParent();for(let t of this.floors){for(let e of t.screenPics.values())e.mesh.material.dispose(),e.texture?.dispose();t.group.traverse(e=>{e.geometry?.dispose()});for(let e of Object.values(t.materials))e.dispose();this.root.remove(t.group)}this.floors=[],this.floorMap=new Map;for(let t of[...this.labels.children])t.dataset.entity||t.remove()}makeDevicePin(t){let e=document.createElement("button");e.className="fp3d-dev",e.dataset.entity=t;let n=document.createElement("span");n.className="fp3d-dev-icon";let s=document.createElement("span");s.className="fp3d-dev-text";let r=document.createElement("span");r.className="fp3d-dev-watt";let o=document.createElement("span");o.className="fp3d-dev-name",e.append(n,s,r,o);let a,l=!1;e.addEventListener("pointerdown",u=>{if(this.furnish){this.pendingDevice=t;return}u.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{l=!0;let h=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,h.left+h.width/2-f.left,h.top+h.height/2-f.top)},vM)});let c=()=>clearTimeout(a);return e.addEventListener("pointerleave",c),e.addEventListener("pointercancel",c),e.addEventListener("pointerup",c),e.addEventListener("contextmenu",u=>u.preventDefault()),e.addEventListener("click",u=>{if(u.stopPropagation(),this.furnish){this.selectDevice(t),this.options.onDeviceSelect?.(t);return}if(l)return;let h=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceTap?.(t,h.left+h.width/2-f.left,h.top+h.height/2-f.top)}),e.addEventListener("keydown",u=>{if(u.key==="Enter"&&u.shiftKey||u.key==="ContextMenu"){u.preventDefault();let h=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,h.left+h.width/2-f.left,h.top+h.height/2-f.top)}}),e}buildLightSurface(t){let e=this.lowQuality?.5:.25,n=cm(t.floor,t.geo.walls2d,t.geo.wallBuckets,t.geo.openings,e,t.geo.holes,t.geo.roofUnder),s=Dm(t.floor,t.geo.openRooms);if(t.lightZones=s.some((a,l)=>a!==l)?s:null,t.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<s.length&&(n.room[a]=s[l])}for(let a of n.doors)a.a>=0&&a.a<s.length&&(a.a=s[a.a]),a.b>=0&&a.b<s.length&&(a.b=s[a.b]);for(let a of n.blockers)a.ra=Wl(s,a.ra),a.rb=Wl(s,a.rb)}t.lightSurface=n;let r=new $t;r.setAttribute("position",new Ut(n.pos,3)),r.setAttribute("color",new Ut(new Float32Array(n.pos.length),3)),r.setAttribute("fold",new Ut(n.fold,1));let o=new qi(new Uint32Array(n.pos.length/3),1);o.setUsage(Jc),r.setIndex(o),r.setDrawRange(0,0),r.computeBoundingSphere(),t.glowMesh.geometry.dispose(),t.glowMesh.geometry=r,t.glowSig="",this.buildGlow(t)}lightSources(t){let e=[];for(let n of this.devices){let s=this.glowOf(n);if(n.floorId!==t.floor.id||!s)continue;let r=n.top??t.floor.height,o=fm(t.floor,n.x,n.z),a=Wl(t.lightZones,o),[l,,c]=n.size??(n.lamp?lh[n.lamp]:[.3,.3,.3]),u=n.base??0,h={ceiling:[r-.12,"ceiling"],downlight:[r-.03,"spot"],spot:[r-c,"spot"],panel:[r-.05,"ceiling"],pendant:[Math.max(.5,r-c),"pendant"],floor:[u+c-.15,"omni"],uplight:[u+c,"up"],table:[u+c-.1,"omni"],wall:[u+.1,"wall"],strip:[u+Math.max(.02,c)-.01,u<MM?"up":"ceiling"],bollard:[u+c-.08,"ceiling"],garden:[u+c,"up"]},[f,d]=n.lamp?h[n.lamp]:[n.y,"omni"],p=n.lightY??f,x=s.color;if(n.lamp==="strip"){let g=(n.rotation??0)*ue,m=!!n.upright||Math.abs(n.roll??0)>45;for(let v of[-1/3,0,1/3])n.upright?e.push({x:n.x,y:u+l*(.5+v),z:n.z,color:x,level:s.level*.55,kind:"omni",room:a}):e.push({x:n.x+Math.cos(g)*l*v,y:p,z:n.z+Math.sin(g)*l*v,color:x,level:s.level*.55,kind:m?"omni":d,room:a})}else e.push({x:n.x,y:p,z:n.z,color:x,level:s.level,kind:d,room:a})}return e}buildGlow(t){let e=t.lightSurface;if(!e)return;let n=this.lightSources(t),s=e.doors.map(h=>{let f=t.geo.openings.find(p=>p.opening.id===h.id);if(f&&ns(f.opening,f.exterior)==="passage")return 1;let d=t.openings.get(h.id);return d?Math.max(d.open,d.open2??0):.5}),r=n.map(h=>`${h.x.toFixed(2)},${h.y.toFixed(2)},${h.z.toFixed(2)},${h.kind},${h.level.toFixed(3)},${h.color.map(f=>f.toFixed(3)).join("/")}`).join(";")+"|"+s.map(h=>h.toFixed(1)).join(",");if(r===t.glowSig)return;t.glowSig=r;let o=t.glowMesh.geometry,a=o.getAttribute("color");if(!n.length){t.glowMesh.visible=!1,o.setDrawRange(0,0);return}let l=hm(e,n,.42,s);if(this.roomTint){let h=t.floor.rooms.length;for(let f=0;f<e.room.length;f++)if(e.room[f]!==h)for(let d=0;d<3;d++)l[f*3+d]*=.12}a.array.set(l),a.needsUpdate=!0;let c=o.index.array,u=0;for(let h=0;h<l.length/18;h++){let f=!1;for(let d=h*18;d<h*18+18&&!f;d++)f=l[d]>.004;if(f)for(let d=0;d<6;d++)c[u++]=h*6+d}o.index.needsUpdate=!0,o.setDrawRange(0,u),t.glowMesh.visible=u>0}makeMaterials(t){return{floor:rn(new ie({vertexColors:!0}),this.themeUniform),pattern:RM(this.patternTexture),wall:rn(Bi(new ie({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),t,"solid"),this.themeUniform),glassWall:Bi(new ie({vertexColors:!0,transparent:!0,depthWrite:!1}),t,"glass"),shadow:new ie({vertexColors:!0,blending:Cr,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:he,polygonOffset:!0,polygonOffsetFactor:-1}),lines:rn(Bi(new Ye({vertexColors:!0,transparent:!0,blending:fo(this.theme),depthWrite:!1}),t),this.themeUniform,!0),glow:Bi(new ie({vertexColors:!0,transparent:!0,blending:Ce,depthWrite:!1,side:he,polygonOffset:!0,polygonOffsetFactor:-3}),t,"solid"),frames:rn(Bi(new ie({vertexColors:!0,side:he}),t),this.themeUniform),glass:Bi(new ie({vertexColors:!0,transparent:!0,blending:Ce,depthWrite:!1,side:he}),t),blinds:rn(Bi(new ie({map:this.blindTexture,vertexColors:!0,side:he}),t),this.themeUniform),water:rn(new ie({vertexColors:!0,transparent:!0,opacity:.5,depthWrite:!1,side:he}),this.themeUniform),flow:PM(this.flowTime),solarLive:eh(this.flowTime),lamps:rn(new ie({vertexColors:!0}),this.themeUniform),halos:new Zi({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:Ce,depthWrite:!1}),cones:new ie({vertexColors:!0,transparent:!0,blending:Ce,depthWrite:!1,side:he}),screens:new ie({vertexColors:!0,transparent:!0,blending:Ce,depthWrite:!1,side:he}),earth:rn(new ie({vertexColors:!0}),this.themeUniform),earthWell:rn(new ie({vertexColors:!0,side:he}),this.themeUniform),earthLines:rn(new Ye({vertexColors:!0,transparent:!0,depthWrite:!1}),this.themeUniform,!0)}}rebuild(){let t=new Map(this.floors.map(r=>[r.floor.id,{y:r.y,o:r.o}])),e=new Map(this.floors.map(r=>[r.floor.id,r.openings]));this.clear();let n=this.building;if(!n)return;let s=[...n.floors].sort((r,o)=>r.elevation-o.elevation);for(let r of n.floors){let o=n.settings.roof?.solar??[],a=Hu(n)?.id===r.id?o.filter(it=>it.face===Gu).map(it=>({field:it,face:Mp(n,it)})):[],l=o.filter(it=>it.face.startsWith(`wall:${r.id}:`));if(l.length){let it=new Map(yp(n,r.id).map(ct=>[ct.key,ct]));for(let ct of l){let ut=it.get(ct.face);ut&&a.push({field:ct,face:ut})}}let u=(n.settings.roof.sections??[]).some(it=>Hd(it,r.elevation+r.height))?(it,ct)=>{let ut=Wd(n,it,ct);return ut===null?null:ut-r.elevation}:void 0,h=Up(Qu(r,this.parked),n.settings.wall_exterior,n.settings.wall_interior,Op(n.floors,r),a,u),f={standing:{value:65535},glass:{value:0}},d=this.makeMaterials(f),p=new Ue,x=new Ot(h.floor,d.floor),g=new Ot(h.shadow,d.shadow);g.renderOrder=1;let m=new Ot(h.floor,d.pattern);m.renderOrder=2;let v=new Ot(new $t,d.glow);v.renderOrder=3,v.visible=!1;let y=new Ot(new $t,d.frames),_=new Ot(new $t,d.blinds),M=new Ot(new $t,d.glass);M.renderOrder=4;let E=new Ot(new $t,d.lamps);E.visible=!1;let C=new Ot(new $t,d.cones);C.visible=!1,C.renderOrder=3;let b=new Ns(new $t,d.halos);b.visible=!1,b.renderOrder=7;let S=new Ot(new $t,d.cones);S.visible=!1,S.renderOrder=7;let T=new Ot(new $t,d.cones);T.visible=!1,T.renderOrder=7;let R=new Ot(new $t,d.lamps);R.visible=!1;let A=new Ot(new $t,d.lamps);A.visible=!1;let L=new Ot(new $t,d.screens);L.visible=!1,L.renderOrder=5;let w=new Ot(new $t,d.flow);w.renderOrder=5,w.frustumCulled=!1;let P=th(a,r.elevation),F=P?new Ot(P.geometry,d.solarLive):null;F&&(F.renderOrder=6,ho(P,this.solarLevels));for(let it of[y,_,M])it.frustumCulled=!1;let N=new Ot(h.walls,d.glassWall),B=new Ot(h.walls,d.wall);N.renderOrder=6;let O=new Ot(h.water,d.water);O.renderOrder=4;let z=Math.min(...n.floors.filter(it=>it.rooms.length).map(it=>it.elevation)),V=Vp(n,r,h.openings,r.elevation===z),Q=V?[new Ot(V.earth.geometry(),d.earth),new Ot(V.wells.geometry(),d.earthWell),new qe(V.lines.geometry(),d.earthLines)]:[];for(let it of Q)it.userData.earth=!0;p.add(x,g,m,v,B,O,new qe(h.lines,d.lines),y,_,M,w,E,C,b,S,T,R,A,L,N,...F?[F]:[],...Q),this.root.add(p);let G=document.createElement("button");G.className="fp3d-pin fp3d-pin-floor",G.dataset.floor=r.id;let nt=document.createElement("b");nt.textContent=r.name||"\u2013";let lt=document.createElement("span");lt.textContent=this.floorInfo.get(r.id)??this.options.floorInfo?.(r)??"",G.append(nt,lt),G.addEventListener("click",()=>this.options.onFloorTap?.(r.id)),this.labels.append(G);let dt=t.get(r.id),$=[],q=null;for(let it of r.rooms){let ct=document.createElement("button");ct.className="fp3d-pin",ct.dataset.room=it.id,ct.dataset.floor=r.id,this.fillRoomPin(ct,it.name,this.roomInfo.get(it.id)),ct.addEventListener("click",()=>this.options.onRoomTap?.(r.id,it.id)),this.labels.append(ct);let[ut,Tt]=is(it.points);$.push({pin:ct,room:it,cx:ut,cz:Tt});for(let[Vt,Nt]of it.points)q??={x0:Vt,x1:Vt,z0:Nt,z1:Nt},q.x0=Math.min(q.x0,Vt),q.x1=Math.max(q.x1,Vt),q.z0=Math.min(q.z0,Nt),q.z1=Math.max(q.z1,Nt)}this.floors.push({floor:r,rank:s.indexOf(r),group:p,geo:h,floorMesh:x,shadowMesh:g,patternMesh:m,glowMesh:v,lightSurface:null,lightZones:null,framesMesh:y,glassMesh:M,blindsMesh:_,flowMesh:w,solarMesh:F,solarLive:P,lampMesh:E,sunMesh:C,sunSig:"",haloMesh:b,coneMesh:S,trailMesh:T,fridgeMesh:R,pipeMesh:A,pipeSig:"",lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:B,screenMesh:L,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:q,roomPins:$,labelSize:null,materials:d,mask:f,openings:new Map,y:dt?.y??0,o:dt?.o??1,ty:0,to:1,appliedO:-1,label:G})}this.floorMap=new Map(this.floors.map(r=>[r.floor.id,r]));for(let r of this.floors)this.buildFridges(r),this.buildPipes(r);this.labelsDirty=!0,this.floorId&&!n.floors.some(r=>r.id===this.floorId)&&(this.floorId=null);for(let r of this.floors){this.buildLamps(r),this.buildScreens(r);let o=e.get(r.floor.id);for(let a of r.geo.openings)r.openings.set(a.opening.id,o?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??mo);this.buildOpenings(r),this.buildFlows(r),r.poolGroup=void 0,this.buildPoolWater(r),this.buildLightSurface(r),this.buildSun(r)}this.applyTargets(t.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.updateGhost()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(p=>p.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.roof.wins.traverse(p=>p.geometry?.dispose()),this.roof.winSolid.dispose(),this.roof.winLines.dispose(),this.scene.remove(this.roof.wins),this.scene.remove(this.roof.group),this.roof=null);let t=this.building?Ip(this.building,this.roofWindows):[];if(!t.length)return;let e=new Map(cs(this.building).map(p=>[p.key,p])),n=this.building.settings.roof?.solar??[],s=eh(this.flowTime),r=[],o=new Ue,a=rn(new ie({vertexColors:!0,transparent:!0,side:he}),this.themeUniform),l=rn(new Ye({vertexColors:!0,transparent:!0,blending:fo(this.theme),depthWrite:!1}),this.themeUniform,!0),c=rn(new ie({vertexColors:!0,transparent:!0,side:he,depthWrite:!1}),this.themeUniform),u=new Ue,h=rn(new ie({vertexColors:!0,side:he}),this.themeUniform),f=rn(new Ye({vertexColors:!0,transparent:!0,blending:fo(this.theme),depthWrite:!1}),this.themeUniform,!0),d=t.map(p=>{let x=new Ue;x.add(new Ot(p.solid.geometry(),a),new qe(p.lines.geometry(),l)),p.glass.count&&x.add(new Ot(p.glass.geometry(),c));let g=n.flatMap(y=>{let _=e.get(y.face);return _&&(_.section?p.sections?.includes(_.section):p===t[0])?[{face:_,field:y}]:[]}),m=th(g,p.floor.elevation+p.base);if(m){let y=new Ot(m.geometry,s);y.renderOrder=9,x.add(y),r.push(m),ho(m,this.solarLevels)}p.winRoof?.solid.count&&x.add(new Ot(p.winRoof.solid.geometry(),h),new qe(p.winRoof.lines.geometry(),f)),x.renderOrder=8,o.add(x);let v=null;return p.win?.solid.count&&(v=new Ue,v.add(new Ot(p.win.solid.geometry(),h),new qe(p.win.lines.geometry(),f)),u.add(v)),{group:x,floorId:p.floor.id,rideId:Kd(this.building,p.floor,p.sections??[]),base:p.base,lift:p.lift!==!1,win:v}});o.renderOrder=8,this.scene.add(o),this.scene.add(u),this.roof={group:o,parts:d,solid:a,lines:l,glass:c,live:s,lives:r,wins:u,winSolid:h,winLines:f},this.placeRoof()}placeRoof(t=1e3){let e=this.roof;if(!e)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),r=(this.floorId===null||this.floors.length===1)&&this.wallMode!=="cut"?.94*n:0,o=1-Math.exp(-t/Am),a=this.roofO;this.roofO+=(r-this.roofO)*o,Math.abs(r-this.roofO)<.004&&(this.roofO=r),e.group.visible=this.roofO>.02;for(let l of e.parts){let c=this.floorMap.get(l.floorId);if(!c)continue;let u=this.floorMap.get(l.rideId)??c,h=u.ty>0?Math.min(1,u.y/u.ty):this.explode&&this.floorId===null?1:0;l.group.position.y=c.floor.elevation+u.y+l.base+(1-this.roofO)*2.2+(l.lift?h*Em:0),l.win&&(l.win.position.y=c.floor.elevation+u.y+l.base+(l.lift?h*Em:0),l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}return e.solid.opacity=this.roofO,e.solid.depthWrite=this.roofO>.9,e.lines.opacity=this.roofO,e.glass.opacity=this.roofO*.28,e.live.opacity=this.roofO,this.roofO!==a&&this.roofO!==r}applyTierFlags(){let t=this.lowQuality;this.ground.visible=!t&&this.theme!=="day"&&this.floors.some(e=>e.floor.rooms.length>0);for(let e of this.floors)e.patternMesh.visible=!t,e.shadowMesh.visible=!t&&e.o>.98;this.invalidate()}rebuildTier(){for(let t of this.floors)t.flowLayout="",this.buildFlows(t),this.buildLightSurface(t),t.lampShapeSig="",this.buildLamps(t)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(t){let e=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let s=0,r=1;e?n.rank>e.rank?(s=5+n.rank,r=0):n.rank<e.rank&&(this.floorStack==="stacked"?s=0:(s=-.4,r=this.floorStack==="single"?0:bM)):s=this.explode?n.rank*xM:0,n.ty=s,n.to=r;let a=e===n?$e:Gn;n.materials.earth.side!==a&&(n.materials.earth.side=a,n.materials.earth.needsUpdate=!0),t&&(n.y=s,n.o=r),this.applyFloor(n)}this.invalidate()}applyFloor(t){if(t.group.position.y=t.floor.elevation+t.y,t.group.visible=t.o>.02,t.shadowMesh.visible=t.o>.98&&!this.lowQuality,Math.abs(t.appliedO-t.o)<.001)return;t.appliedO=t.o;let e=t.materials,n=t.o>.999;for(let s of[e.floor,e.wall,e.frames,e.blinds,e.lamps])s.transparent===n&&(s.transparent=!n,s.depthWrite=n,s.needsUpdate=!0),s.opacity=t.o;e.pattern.opacity=t.o,e.glow.opacity=t.o,e.lines.opacity=t.o,e.glass.opacity=t.o,e.glassWall.opacity=t.o,e.flow.opacity=t.o,e.solarLive.opacity=t.o,e.lamps.opacity=t.o,e.halos.opacity=t.o,e.cones.opacity=t.o,e.screens.opacity=t.o;for(let s of[e.earth,e.earthWell])s.transparent===n&&(s.transparent=!n,s.depthWrite=n,s.needsUpdate=!0),s.opacity=t.o;e.earthLines.opacity=t.o;for(let s of t.screenPics.values()){let r=s.mesh.material;r.transparent=t.o<.999,r.opacity=t.o}}stepFloors(t){let e=!1,n=1-Math.exp(-t/Am);for(let s of this.floors){let r=s.ty-s.y,o=s.to-s.o;if(Math.abs(r)<.004&&Math.abs(o)<.004){(r!==0||o!==0)&&(s.y=s.ty,s.o=s.to,this.labelsDirty=!0,this.applyFloor(s));continue}s.y+=r*n,s.o+=o*n,e=!0,this.applyFloor(s)}return e}stepOpenings(t){let e=!1,n=1-Math.exp(-t/Rm);for(let s of this.floors){let r=!1;for(let[o,a]of s.openings){let l=this.openingTargets.get(o)??mo,c=(f,d)=>(f??null)===(d??null)||typeof f=="number"&&typeof d=="number"&&Math.abs(f-d)<.003;if(c(l.open,a.open)&&c(l.open2??0,a.open2??0)&&c(l.tilt,a.tilt)&&c(l.tilt2??0,a.tilt2??0)&&c(l.cover,a.cover)&&!!l.sensed==!!a.sensed)continue;let u={...a,open2:a.open2??0,tilt2:a.tilt2??0,sensed:l.sensed},h=!1;for(let f of["open","open2","tilt","tilt2"]){let d=l[f]??0,p=a[f]??0,x=d-p;Math.abs(x)<.003?u[f]=d:(u[f]=p+x*n,h=!0)}if(l.cover===null||a.cover===null)u.cover=l.cover;else{let f=l.cover-a.cover;Math.abs(f)<.003?u.cover=l.cover:(u.cover=a.cover+f*n,h=!0)}(u.open!==a.open||u.open2!==(a.open2??0)||u.tilt!==a.tilt||u.tilt2!==(a.tilt2??0)||u.cover!==a.cover||!!u.sensed!=!!a.sensed)&&(s.openings.set(o,u),r=!0),e||=h}r&&(this.buildOpenings(s),this.buildGlow(s),this.buildSun(s))}return e}glowOf(t){if(!t.glow||!t.effect)return t.glow;let e=new j(...t.glow.color),n={h:0,s:0,l:0};e.getHSL(n);let s=(t.x*.37+t.z*.61)%1;return e.setHSL((n.h+this.effectTime*SM+s)%1,Math.max(.6,n.s),Math.min(.6,Math.max(.45,n.l))),{color:[e.r,e.g,e.b],level:t.glow.level}}buildLamps(t){let e=performance.now(),n=u=>{let h=this.flashes.get(u);if(!h||h<=e)return 0;let f=h-e,d=f>Yl?.5+.5*Math.sin(f/140):f/Yl;return Math.round(d*10)/10},s=this.devices.filter(u=>u.floorId===t.floor.id&&(u.lamp||u.model)),r=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+s.map(u=>`${u.id},${u.lamp??u.model},${u.variant},${u.x},${u.z},${u.y},${u.rotation??0},${u.roll??0},${u.upright?1:0},${u.size?.join("/")},${u.base??0},${u.pack??""},${u.mirror?1:0}`).join(";"),o=s.map(u=>this.glowOf(u)),a=s.map((u,h)=>`${n(u.id)},${o[h]?`${o[h].level.toFixed(3)},${o[h].color.map(f=>f.toFixed(3)).join("/")}`:"off"}`).join(";");if(r!==t.lampShapeSig||!t.lampMesh.geometry.getAttribute("position")){t.lampShapeSig=r,t.lampColorSig="";let u=new ee,h=[],f=[],d=new Map,p=t.floor.height;for(let x of s){let g=x.lamp==="strip"?(x.base??p)>Math.min(t.floor.cut_height,p):x.lamp?Im.has(x.lamp)&&(x.top??p)>Math.min(t.floor.cut_height,p):x.model==="camera_ceiling";if(!x.lamp&&!x.model||g&&this.wallMode==="cut")continue;let m=u.count,v=x.pack?Ae(x.pack):void 0,[y,_,M]=x.size??[.3,.3,.3];x.model?gp(u,x.model,x.x,x.model==="camera_ceiling"?p:x.y,x.z,x.rotation??0):v?Ll(u,v,{x:x.x,z:x.z,rotation:x.rotation??0,w:y,d:_,h:M,mirror:x.mirror},x.base??0,65280):rh(u,{...x,lamp:x.lamp},x.top??p,65280),d.set(x.furnitureId??x.id,{start:m,end:u.count}),x.pickable!==!1&&h.push({id:x.id,start:m,end:u.count}),x.furnitureId&&f.push({id:x.furnitureId,start:m,end:u.count})}t.lampTris=h,t.lampFurnTris=f,t.lampRanges=d,t.lampShade=bd(u.c),t.lampMesh.geometry.dispose(),t.lampMesh.geometry=u.geometry(),t.lampMesh.visible=u.count>0}if(a===t.lampColorSig)return;t.lampColorSig=a;let l=t.lampMesh.geometry.getAttribute("color"),c=l.array;s.forEach((u,h)=>{let f=t.lampRanges.get(u.furnitureId??u.id);if(!f)return;let d=o[h],p=d?.55+.45*d.level:0,x=d?new j(...d.color.map(v=>Math.min(1,v*p))):new j(yM),g=n(u.id);g>0&&x.lerp(new j(1,1,1),.7*g);let m=new j(x.getHex());vd(c,t.lampShade,f,[m.r,m.g,m.b])}),l.needsUpdate=!0,this.buildHalos(t)}buildSun(t){let e=this.building?.settings.sun_patches===!1?null:this.sun,n=(this.building?.settings.north??0)*ue,s=this.weather?.cloud??0,r=Dm(t.floor,t.geo.openRooms),o=e?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${n},${s.toFixed(2)},${[...t.openings.values()].map(l=>(l.cover??0).toFixed(2)).join(",")},${r.join(".")},${this.roofWindowsKey},${JSON.stringify(this.building?.settings.roof?.windows??[])}`:"";if(o===t.sunSig)return;t.sunSig=o;let a=new ee;if(e&&e.elevation>2&&s<.97){let l=Math.min(1,e.elevation/12)*(1-.8*s),c=e.elevation*ue,u=e.azimuth*ue,h=[Math.sin(n+u),-Math.cos(n+u)],f=1/Math.tan(c);for(let d of t.geo.openings){if(d.opening.type!=="window"||!d.exterior)continue;let p=[-d.toRoom[0],-d.toRoom[1]],x=p[0]*h[0]+p[1]*h[1];if(x<.05)continue;let g=t.openings.get(d.opening.id),m=d.top-(g?.cover??0)*(d.top-d.sill);if(m-d.sill<.05)continue;let v=(R,A)=>{let L=Math.min(7,A*f);return[d.start[0]+d.axis[0]*R+d.toRoom[0]*d.faceRoom-h[0]*L,.02,d.start[1]+d.axis[1]*R+d.toRoom[1]*d.faceRoom-h[1]*L]},y=.14*l*Math.min(1,x*1.5),_=new j(1*y,.82*y,.55*y),M=_.clone().multiplyScalar(.45),E=t.floor.rooms.findIndex(R=>R.id===d.opening.room_id);if(E<0||t.floor.rooms[E].points.length<3)continue;let C=r[E],b=t.floor.rooms.filter((R,A)=>r[A]===C&&R.points.length>=3).map(R=>R.points),S=Math.max(1,Math.ceil(Math.min(7,m*f)/.25)),T=Math.max(1,Math.ceil(d.width/.3));for(let R=0;R<S;R++){let A=d.sill+(m-d.sill)*R/S,L=d.sill+(m-d.sill)*(R+1)/S,w=R/S,P=(R+1)/S,F=_.clone().lerp(M,w),N=_.clone().lerp(M,P);for(let B=0;B<T;B++){let O=d.width*B/T,z=d.width*(B+1)/T,V=v((O+z)/2,(A+L)/2);if(!b.some(dt=>Jt([V[0],V[2]],dt)))continue;let Q=v(O,A),G=v(z,A),nt=v(z,L),lt=v(O,L);a.tri(Q,G,nt,F,F,N),a.tri(Q,nt,lt,F,N,N)}}}this.pushRoofSun(t,a,r,h,c,l)}t.sunMesh.geometry.dispose(),t.sunMesh.geometry=a.geometry(),t.sunMesh.visible=a.count>0}pushRoofSun(t,e,n,s,r,o){let a=this.building,l=a?.settings.roof?.windows??[];if(!a||!l.length)return;let c=new Map(cs(a).map(h=>[h.key,h])),u=[s[0]*Math.cos(r),Math.sin(r),s[1]*Math.cos(r)];for(let h of l){let f=c.get(h.face),d=Ul(a,f,h);if(!f||!d||d.floor.id!==t.floor.id)continue;let p=f.n[0]*u[0]+f.n[1]*u[1]+f.n[2]*u[2],[x,g,m,v]=d.corners,y=Math.min(1,this.roofWindows.get(h.id)?.cover??0);if(y>.95)continue;let _=(w,P,F)=>[w[0]+(P[0]-w[0])*F,w[1]+(P[1]-w[1])*F,w[2]+(P[2]-w[2])*F],M=_(v,x,y),E=_(m,g,y),C=t.floor.rooms.findIndex(w=>w.id===d.roomId);if(C<0)continue;let b=t.floor.rooms.filter((w,P)=>n[P]===n[C]&&w.points.length>=3).map(w=>w.points),S=(w,P)=>{let F=(B,O)=>_(_(w[0],w[1],B),_(w[3],w[2],B),O);for(let B=0;B<6;B++)for(let O=0;O<6;O++){let z=F((B+.5)/6,(O+.5)/6);if(!b.some(lt=>Jt([z[0],z[2]],lt)))continue;let V=F(B/6,O/6),Q=F((B+1)/6,O/6),G=F((B+1)/6,(O+1)/6),nt=F(B/6,(O+1)/6);e.tri(V,Q,G,P,P,P),e.tri(V,G,nt,P,P,P)}},T=w=>[w[0],.019,w[2]],R=.06*o;if(S([T(x),T(g),T(E),T(M)],new j(.75*R,.85*R,1*R)),p<.05)continue;let A=w=>{let P=Math.min(7,(w[1]-t.floor.elevation)/Math.tan(r));return[w[0]-s[0]*P,.02,w[2]-s[1]*P]},L=.16*o*Math.min(1,p*1.5);S([A(x),A(g),A(E),A(M)],new j(1*L,.84*L,.6*L))}}buildHalos(t){if(this.lowQuality){t.haloMesh.visible=!1,t.coneMesh.visible=!1;return}let e=t.floor.height,n=[],s=[],r=new ee,o=[];for(let l of this.devices){if(l.model&&l.floorId===t.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let v=(l.rotation??0)*ue,y=[-Math.sin(v),Math.cos(v)],_=l.model==="camera_ceiling",M=l.reach??(_?3:4.5),E=(l.fov??(_?360:90))*ue/2,C=l.motion?new j(.9,.12,.16):new j(.04,.22,.28),b=new j(0,0,0),S=Math.max(4,Math.round(E/.15)),T=.015,R=t.geo.walls2d,A=N=>{let B=N.b[0]-N.a[0],O=N.b[1]-N.a[1],z=B*B+O*O||1,V=Math.max(0,Math.min(1,((l.x-N.a[0])*B+(l.z-N.a[1])*O)/z));return Math.hypot(l.x-(N.a[0]+B*V),l.z-(N.a[1]+O*V))},L=null;for(let N of R)A(N)<.45&&(!L||A(N)<A(L))&&(L=N);let w=N=>{let B=y[0]*Math.cos(N)-y[1]*Math.sin(N),O=y[1]*Math.cos(N)+y[0]*Math.sin(N),z=M;for(let V of R){let Q=V.b[0]-V.a[0],G=V.b[1]-V.a[1],nt=B*G-O*Q;if(Math.abs(nt)<1e-9)continue;let lt=((V.a[0]-l.x)*G-(V.a[1]-l.z)*Q)/nt,dt=((V.a[0]-l.x)*O-(V.a[1]-l.z)*B)/nt;V===L&&lt<=.45||lt>.02&&lt<z&&dt>=0&&dt<=1&&(z=lt)}return z},P=N=>{let B=w(N);return[l.x+(y[0]*Math.cos(N)-y[1]*Math.sin(N))*B,T,l.z+(y[1]*Math.cos(N)+y[0]*Math.sin(N))*B]},F=r.count;for(let N=0;N<S;N++)r.tri([l.x,T,l.z],P(-E+2*E*(N+1)/S),P(-E+2*E*N/S),C,b,b);o.push({id:l.id,start:F,end:r.count});continue}let c=this.glowOf(l);if(l.floorId!==t.floor.id||!l.lamp||!c||Im.has(l.lamp)&&this.wallMode==="cut"&&(l.top??e)>Math.min(t.floor.cut_height,e))continue;let u=l.top??e,[h,f,d]=l.size??lh[l.lamp],p=l.base??0,x=(l.rotation??0)*ue,g={ceiling:u-.07,downlight:u-.03,spot:u-d,panel:u-.03,pendant:Math.max(.4,u-d)+.08,floor:p+d-.15,uplight:p+d,table:p+d-.09,wall:p+d/2,strip:p+Math.max(.02,d)-.01,bollard:p+d-.08,garden:p+d-.03}[l.lamp],m=(v,y,_=1)=>{n.push(v,g,y),s.push(...c.color.map(M=>M*c.level*.7*_))};if(l.lamp==="strip")for(let v of[-.4,-.13,.13,.4])l.upright?(n.push(l.x,p+h*(.5+v),l.z),s.push(...c.color.map(y=>y*c.level*.7*.6))):m(l.x+Math.cos(x)*h*v,l.z+Math.sin(x)*h*v,.6);else l.lamp==="wall"?m(l.x-Math.sin(x)*(f/2+.05),l.z+Math.cos(x)*(f/2+.05)):m(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")){let v=new j(...c.color.map(C=>C*.09*c.level)),y=new j(0,0,0),_=Math.max(.03,h/2),M=.45+.35*c.level,E=16;for(let C=0;C<E;C++){let b=C/E*Math.PI*2,S=(C+1)/E*Math.PI*2,T=[l.x+Math.cos(b)*_,g,l.z+Math.sin(b)*_],R=[l.x+Math.cos(S)*_,g,l.z+Math.sin(S)*_],A=[l.x+Math.cos(b)*M,.02,l.z+Math.sin(b)*M],L=[l.x+Math.cos(S)*M,.02,l.z+Math.sin(S)*M];r.tri(T,A,L,v,y,y),r.tri(T,L,R,v,y,v)}}}let a=new $t;a.setAttribute("position",new Ut(n,3)),a.setAttribute("color",new Ut(s,3)),t.haloMesh.geometry.dispose(),t.haloMesh.geometry=a,t.haloMesh.visible=n.length>0,t.coneMesh.geometry.dispose(),t.coneMesh.geometry=r.geometry(),t.coneMesh.visible=r.count>0,t.coneTris=o}buildScreens(t){let e=Qu(t.floor,this.parked).furniture.filter(r=>this.screens.has(r.id)),n=e.map(r=>`${r.id}:${r.x},${r.z},${r.rotation},${r.w},${r.d},${r.h},${r.mount_y??""},${r.mirror?1:0}:${JSON.stringify(this.screens.get(r.id))}`).join(";");if(n===t.screenSig&&t.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(t,e);t.screenSig=n;let s=new ee;for(let r of e){let o=this.screens.get(r.id),a=r.rotation*ue,l=Math.cos(a),c=Math.sin(a),u=(_,M,E)=>[r.x+_*l-E*c,M,r.z+_*c+E*l];if(o.faces){let _=Math.max(.05,r.w)*(r.mirror?-1:1),M=Math.max(.05,r.d),E=Math.max(.005,r.h),C=hn(t.floor,r);for(let b of o.faces){if(b.part==="lights"){let O=Ae(r.type),z=V=>["#e8f4ff","#ff3b4f"].includes(V.color.toLowerCase());if(O&&O.parts.some(z)){let V=new j(...b.color.map(Q=>Math.min(1,Q*(.4+.6*b.level))));to(s,O,r,C,V.getHex(),z)}continue}if(b.part==="cabin"){let O=Ae(r.type),z=V=>V.color.toLowerCase()==="#13283a"||V.color==="glass";if(O&&O.parts.some(z)){let V=new j(...b.color.map(Q=>Math.min(1,Q*(.3+.5*b.level))));to(s,O,r,C,V.getHex(),z);continue}}if(b.part==="burners"&&Ae(r.type)){let O=Ae(r.type),z=new j(...b.color.map(V=>Math.min(1,V*(.25+.6*b.level))));to(s,O,r,C,z.getHex(),_d);continue}if(b.part==="burners"){let O=new j(...b.color.map(V=>Math.min(1,V*(.25+.6*b.level)))),z=C+E+.008;for(let[V,Q,G]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let nt=V*Math.abs(_)/.6,lt=Q*M/.62,dt=14;for(let $=0;$<dt;$++){let q=$/dt*Math.PI*2,it=($+1)/dt*Math.PI*2;s.tri(u(nt,z,lt),u(nt+Math.cos(q)*G,z,lt+Math.sin(q)*G),u(nt+Math.cos(it)*G,z,lt+Math.sin(it)*G),O)}}continue}if(b.part==="band"||b.part==="cabin"){let O=b.part==="cabin",z=C+E*(O?.6:.42),V=O?C+E*.86:z+.07,Q=new j(...b.color.map(dt=>Math.min(1,dt*(.3+.45*b.level)))),G=Math.abs(_)/2+(O?.012:.02),nt=M/2+(O?.012:.02),lt=[[-G,-nt],[G,-nt],[G,nt],[-G,nt]];for(let dt=0;dt<4;dt++){let $=lt[dt],q=lt[(dt+1)%4],it=u($[0]*Math.sign(_),z,$[1]),ct=u(q[0]*Math.sign(_),z,q[1]),ut=u(q[0]*Math.sign(_),V,q[1]),Tt=u($[0]*Math.sign(_),V,$[1]);s.tri(it,ct,ut,Q),s.tri(it,ut,Tt,Q)}continue}let S=b.part==="right"?.03:-Math.abs(_)/2+.03,T=b.part==="left"?-.03:Math.abs(_)/2-.03,R=C+(b.part==="bottom"?E*.45:E)+.006,A=new j(...b.color.map(O=>Math.min(1,O*(.35+.65*b.level)))),L=new j(0,0,0),w=(O,z,V=R)=>u(O*Math.sign(_),V,z),P=[w(S,-M/2+.03),w(T,-M/2+.03),w(T,M/2-.03),w(S,M/2-.03)];s.tri(P[0],P[2],P[1],A),s.tri(P[0],P[3],P[2],A);let F=.12+.1*b.level,N=A.clone().multiplyScalar(.5),B=[w(S-F,-M/2-F,R+.004),w(T+F,-M/2-F,R+.004),w(T+F,M/2+F,R+.004),w(S-F,M/2+F,R+.004)];for(let O=0;O<4;O++){let z=(O+1)%4;s.tri(P[O],B[z],B[O],N,L,L),s.tri(P[O],P[z],B[z],N,N,L)}}continue}let h=Ae(r.type);if(h&&!h.light&&o.ring&&h.parts.some(_=>_.glow)){let _=new j(...o.color.map(M=>Math.min(1,M*(.45+.55*o.level))));to(s,h,r,hn(t.floor,r),_.getHex())}let f=Bu(r,t.floor);if(!f)continue;let d=new j(...o.color.map(_=>Math.min(1,_*(.35+.65*o.level)))),p=new j(0,0,0),x=f.z+.004;if(s.tri(u(f.x0,f.y0,x),u(f.x1,f.y0,x),u(f.x1,f.y1,x),d),s.tri(u(f.x0,f.y0,x),u(f.x1,f.y1,x),u(f.x0,f.y1,x),d),o.plain)continue;let g=.18+.12*o.level,m=d.clone().multiplyScalar(.5),v=[u(f.x0,f.y0,x),u(f.x1,f.y0,x),u(f.x1,f.y1,x),u(f.x0,f.y1,x)],y=[u(f.x0-g,f.y0-g,x+.01),u(f.x1+g,f.y0-g,x+.01),u(f.x1+g,f.y1+g,x+.01),u(f.x0-g,f.y1+g,x+.01)];for(let _=0;_<4;_++){let M=(_+1)%4;s.tri(v[_],y[_],y[M],m,p,p),s.tri(v[_],y[M],v[M],m,p,m)}}t.screenMesh.geometry.dispose(),t.screenMesh.geometry=s.geometry(),t.screenMesh.visible=s.count>0,this.updateScreenPictures(t,e)}updateScreenPictures(t,e){let n=new Map(e.map(s=>[s.id,s]).filter(([s])=>!!this.screens.get(s)?.picture));for(let[s,r]of t.screenPics)n.has(s)&&this.screens.get(s).picture===r.url||(t.group.remove(r.mesh),r.mesh.geometry.dispose(),r.mesh.material.dispose(),r.texture?.dispose(),t.screenPics.delete(s));for(let[s,r]of n){let o=this.screens.get(s),a=Bu(r,t.floor);if(!a)continue;let l=t.screenPics.get(s);if(!l){let c=new Ot(new ii(1,1),new ie({color:16777215,transparent:!0}));c.visible=!1,c.renderOrder=5,l={url:o.picture,mesh:c,texture:null},t.screenPics.set(s,l),t.group.add(c);let u=l;new Tr().load(o.picture,h=>{if(t.screenPics.get(s)!==u){h.dispose();return}h.colorSpace=Ie,u.texture=h;let f=u.mesh.material;f.map=h,f.needsUpdate=!0,this.placeScreenPicture(u.mesh,r,a,h),u.mesh.visible=!0,this.invalidate()},void 0,()=>{})}l.mesh.material.color.setScalar(.45+.55*o.level),l.texture&&this.placeScreenPicture(l.mesh,r,a,l.texture)}}placeScreenPicture(t,e,n,s){let r=s.image,o=r?.width&&r?.height?r.width/r.height:16/9,a=n.x1-n.x0-.04,l=n.y1-n.y0-.04,c=Math.min(a,l*o),u=c/o,h=e.rotation*ue,f=(n.x0+n.x1)/2,d=n.z+.008;t.scale.set(c,u,1),t.rotation.set(0,-h,0),t.position.set(e.x+f*Math.cos(h)-d*Math.sin(h),(n.y0+n.y1)/2,e.z+f*Math.sin(h)+d*Math.cos(h))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(t){let e=this.flows.filter(u=>u.floorId===t.floor.id).map(oh).join(";"),n=[],s=[],r=[],o=[],a=[];for(let u of this.flows){if(u.floorId!==t.floor.id)continue;let h=this.flowPhase.get(oh(u))??{speed:Fm(u.power),offset:0},f=u.power>.5?Math.min(1,.5+u.power/2500):.22,d=u.color.map(v=>v*f),p=Math.hypot(u.b[0]-u.a[0],u.b[1]-u.a[1],u.b[2]-u.a[2]);if(p<1e-4)continue;let x=[(u.b[0]-u.a[0])/p,(u.b[1]-u.a[1])/p,(u.b[2]-u.a[2])/p],g=[];if(Math.abs(x[1])<.5){let v=Math.hypot(x[0],x[2])||1;g.push([-x[2]/v,0,x[0]/v])}else g.push([1,0,0],[0,0,1]);let m=this.lowQuality?[[Pm*1.4,1]]:[[_M,.25],[Pm,1]];for(let[v,y]of m)for(let _ of g){let M=v/2,E=(b,S)=>[b[0]+_[0]*M*S,b[1]+_[1]*M*S,b[2]+_[2]*M*S],C=[[E(u.a,-1),u.dist,0],[E(u.b,-1),u.dist+p,0],[E(u.b,1),u.dist+p,1],[E(u.a,1),u.dist,1]];for(let b of[0,1,2,0,2,3]){let[S,T,R]=C[b];n.push(S[0],S[1],S[2]),s.push(d[0]*y,d[1]*y,d[2]*y),r.push(T,R),o.push(h.speed),a.push(h.offset)}}}let l=t.flowMesh.geometry;if(e===t.flowLayout&&l.getAttribute("position")?.count===n.length/3){for(let[u,h]of[["color",s],["flowSpeed",o],["flowOffset",a]]){let f=l.getAttribute(u);f.array.set(h),f.needsUpdate=!0}t.flowMesh.visible=n.length>0;return}t.flowLayout=e;let c=new $t;c.setAttribute("position",new Ut(n,3)),c.setAttribute("color",new Ut(s,3)),c.setAttribute("uv",new Ut(r,2)),c.setAttribute("flowSpeed",new Ut(o,1)),c.setAttribute("flowOffset",new Ut(a,1)),t.flowMesh.geometry.dispose(),t.flowMesh.geometry=c,t.flowMesh.visible=n.length>0}buildOpenings(t){let e=xm(t.geo.openings,t.openings,Math.min(t.floor.cut_height,t.floor.height));t.frameTris=e.frameTris,t.glassTris=e.glassTris,t.blindTris=e.blindTris;for(let[n,s]of[[t.framesMesh,e.frames],[t.glassMesh,e.glass],[t.blindsMesh,e.blinds]])n.geometry.dispose(),n.geometry=s,n.visible=s.getAttribute("position").count>0}activeFloors(){return this.floors.filter(t=>t.to>.99)}applyHighlight(){for(let t of this.floors){let e=t.geo.floor.getAttribute("color");for(let n of t.geo.roomTris){let s=new j(n.color),r=this.roomTint?.get(n.roomId);r&&s.lerp(new j(...r).multiplyScalar(.6),.9),n.roomId===this.roomId&&s.lerp(wM,r?.3:.75);for(let o=n.start*3;o<n.end*3;o++)e.setXYZ(o,s.r,s.g,s.b)}e.needsUpdate=!0}for(let t of this.labels.querySelectorAll(".fp3d-pin"))t.classList.toggle("fp3d-pin-active",!!t.dataset.room&&t.dataset.room===this.roomId);this.invalidate()}fit(t){let e=new an;for(let h of this.activeFloors()){let f=h.floor.elevation+h.ty;for(let d of h.floor.rooms)for(let[p,x]of d.points)e.expandByPoint(new H(p,f,x)),e.expandByPoint(new H(p,f+h.floor.height,x))}e.isEmpty()&&e.set(new H(-4,0,-4),new H(4,2.5,4)),this.placeGround(),this.weatherBox={x0:e.min.x-6,x1:e.max.x+6,z0:e.min.z-6,z1:e.max.z+6,y0:e.min.y,y1:e.max.y+6},this.applyWeather(),this.placeSky();let n=e.getCenter(new H),s=e.getSize(new H),r=Math.max(8,this.distanceFor(s)*(this.camera.aspect<1?1.16:1.02));this.controls.maxRadius=Math.max(40,r*3),n.y=e.min.y+s.y*(this.houseView?.45:.3),(this.floorId===null||this.floors.length===1)&&(this.houseRadius=r);let o=this.floorId===null,a=o?null:this.floorMap.get(this.floorId)?.floor.start_view??null,l=a??this.startView,c=!!l&&(o||!!a);l&&c&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,l.radius*1.5));let u=c?l.target:null;if(u&&n.set(u.x,u.y+(a?this.floorBase(this.floorId):0),u.z),this.keepNext){this.keepNext=!1;let h=this.controls.view;this.controls.flyTo({target:new H(h.target.x,n.y,h.target.z),radius:h.radius,phi:h.phi,theta:h.theta},t);return}this.controls.flyTo({target:n,radius:c?l.radius:r,phi:l?l.phi:.85,theta:l?l.theta:-.6},t)}placeGround(){let t=new an,e=1/0;for(let o of this.floors){e=Math.min(e,o.floor.elevation+Math.min(0,o.ty));for(let a of o.floor.rooms)for(let[l,c]of a.points)t.expandByPoint(new H(l,0,c));for(let a of o.floor.outdoor??[])for(let[l,c]of a.points)t.expandByPoint(new H(l,0,c))}if(this.ground.visible=!t.isEmpty()&&!this.lowQuality&&this.theme!=="day",t.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=LM();let o=this.ground.material;o.map=this.groundTexture,o.needsUpdate=!0}let n=t.getCenter(new H),s=t.getSize(new H),r=ah*Math.ceil((Math.max(s.x,s.z)+16)/ah);this.ground.scale.set(r,r,1),this.ground.position.set(n.x,e-We-.02,n.z)}distanceFor(t){let e=this.camera.fov*ue,n=2*Math.atan(Math.tan(e/2)*this.camera.aspect);return t.length()/2/Math.sin(Math.min(e,n)/2)}rayAt(t,e){let n=this.renderer.domElement.getBoundingClientRect(),s=new Ar;return s.setFromCamera(new te(t/n.width*2-1,-(e/n.height)*2+1),this.camera),s}pick(t,e){let n=this.rayAt(t,e),s=this.activeFloors(),r=s.flatMap(a=>[a.lampMesh,a.coneMesh,a.framesMesh,a.glassMesh,a.blindsMesh,a.wallMesh,a.floorMesh].filter(l=>l.visible)),o=(a,l)=>a.find(c=>l>=c.start&&l<c.end)?.id;for(let a of n.intersectObjects(r,!1)){if(a.faceIndex==null)continue;let l=a.faceIndex,c=s.find(u=>u.group===a.object.parent);if(a.object===c.lampMesh||a.object===c.coneMesh){let u=o(a.object===c.lampMesh?c.lampTris:c.coneTris,l);if(u)return{entity:u}}else if(a.object===c.framesMesh||a.object===c.blindsMesh||a.object===c.glassMesh){if(this.wallMode==="cut"&&a.face){let f=a.object.geometry.getAttribute("fold")?.getX(a.face.a)??Ht;if(f!==Ht&&Math.floor(f/16)===0)continue}let u=o(a.object===c.framesMesh?c.frameTris:a.object===c.glassMesh?c.glassTris:c.blindTris,l),h=u?this.pickOpenings.get(u):void 0;if(h)return{entity:h}}else if(a.object===c.wallMesh){let u=o(c.geo.furnitureTris,l),h=u?this.pickFurniture.get(u):void 0;if(h)return{entity:h};if(a.face&&!u){let f=c.wallMesh.geometry.getAttribute("fold")?.getX(a.face.a)??32,d=Math.floor(f/16),p=f%16,x=this.wallMode==="cut"&&d===0,g=(c.mask.glass.value&1<<p)!==0;if(!x){let m=n.ray.direction,v=Math.hypot(m.x,m.z)||1,y=[a.point.x-m.x/v*.3,a.point.z-m.z/v*.3],_=c.floor.rooms.find(M=>M.points.length>=3&&Jt(y,M.points))?.id??null;if(this.roomId!==null){if(_===this.roomId)return{floorId:c.floor.id,roomId:_}}else if(!g&&_)return{floorId:c.floor.id,roomId:_}}}}else if(a.object===c.floorMesh)return{floorId:c.floor.id,roomId:o(c.geo.roomTris.map(u=>({id:u.roomId,start:u.start,end:u.end})),l)??null}}return null}onTap(t,e){let n=this.pick(t,e);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+Yl),this.invalidate(),this.options.onDeviceTap?.(n.entity,t,e);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(t,e){let n=this.rayAt(t,e),s=this.activeFloors(),r=a=>[a.screenMesh,a.fridgeMesh,...[...a.screenPics.values()].map(l=>l.mesh)],o=s.flatMap(a=>[a.lampMesh,a.wallMesh,...r(a)].filter(l=>l.visible));for(let a of n.intersectObjects(o,!1)){if(a.faceIndex==null)continue;let l=s.find(h=>h.group===a.object.parent||r(h).includes(a.object));if(!l)continue;if(a.object!==l.lampMesh&&a.object!==l.wallMesh){let h=this.furnitureNear(l,a.point.x,a.point.z);if(h)return{fv:l,id:h,y:a.point.y};continue}let u=(a.object===l.lampMesh?l.lampFurnTris:l.geo.furnitureTris).find(h=>a.faceIndex>=h.start&&a.faceIndex<h.end)?.id;if(u)return{fv:l,id:u,y:a.point.y}}return null}furnitureNear(t,e,n){let s=null;for(let r of t.floor.furniture){let o=r.rotation*ue,a=e-r.x,l=n-r.z,c=Math.abs(a*Math.cos(o)+l*Math.sin(o))-r.w/2,u=Math.abs(-a*Math.sin(o)+l*Math.cos(o))-r.d/2,h=Math.max(c,u);h<.25&&(!s||h<s.d)&&(s={id:r.id,d:h})}return s?.id??null}floorPoint(t,e,n,s){let r=this.rayAt(e,n),o=s??t.floor.elevation+t.y,a=r.ray.direction;if(Math.abs(a.y)<1e-4)return null;let l=(o-r.ray.origin.y)/a.y;return l<=0?null:[r.ray.origin.x+a.x*l,r.ray.origin.z+a.z*l]}setFurnishTypes(t){this.furnishTypes=t?new Set(t):null}setSurfaceGrab(t){this.surfaceGrab=t}pointerRay(t,e){return this.surfaceRay(t,e)}furnitureIdAt(t,e){return this.furnitureAt(t,e)?.id??null}surfaceRay(t,e){let n=this.rayAt(t,e).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(t,e){if(this.surfaceGrab?.start(this.surfaceRay(t,e)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let s=this.furnishTypes;if(s){let o=n?this.devices.find(h=>h.id===n)?.furnitureId:void 0,a=o?null:this.furnitureAt(t,e),l=o??a?.id,c=l?this.floors.find(h=>h.floor.furniture.some(f=>f.id===l)):void 0,u=c?.floor.furniture.find(h=>h.id===l)?.type;return!!(c&&l&&u&&s.has(u))&&this.grabItem(c,l,t,e)}if(n){let o=this.devices.find(l=>l.id===n)?.furnitureId,a=o?this.floors.find(l=>l.floor.furniture.some(c=>c.id===o)):void 0;return!o||!a?this.grabDevice(n,t,e):this.grabItem(a,o,t,e)}let r=this.furnitureAt(t,e);if(!r){let o=this.pick(t,e);return o&&"entity"in o?this.grabDevice(o.entity,t,e):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(r.fv,r.id,t,e,r.y)}grabItem(t,e,n,s,r){let o=t.floor.furniture.find(h=>h.id===e),a=r===void 0?void 0:Math.min(r,this.camera.position.y-.3),l=this.floorPoint(t,n,s,a);if(!o||!l)return!1;let c,u=this.rayAt(n,s).ray.direction;if(r!==void 0&&-u.y<.34){let h=this.camera.position,f=this.camera.getWorldDirection(new H),d=Math.hypot(f.x,f.z)||1,p=[f.x/d,f.z/d],x=Math.hypot(l[0]-h.x,l[1]-h.z,(a??0)-h.y),g=this.renderer.domElement.getBoundingClientRect().height||1,m=2*x*Math.tan(this.camera.fov*Math.PI/360)/g;c={x0:n,y0:s,fx:o.x,fz:o.z,right:[-p[1],p[0]],fwd:p,perPx:m,gain:Math.min(2,1/Math.max(.5,-u.y))}}return o.locked?(this.selectFurniture(o.id),this.options.onFurnitureSelect?.(o.id),!1):(this.grab={floorId:t.floor.id,id:o.id,offset:[o.x-l[0],o.z-l[1]],x:o.x,z:o.z,moved:!1,plane:a,screen:c},this.selectFurniture(o.id),this.options.onFurnitureSelect?.(o.id),!0)}grabDevice(t,e,n){let s=this.devices.find(a=>a.id===t),r=s&&this.floorMap.get(s.floorId),o=r&&this.floorPoint(r,e,n);return!s||!r||!o?!1:s.fixed?(this.selectDevice(t),this.options.onDeviceSelect?.(t),!1):(this.deviceGrab={id:t,floorId:r.floor.id,offset:[s.x-o[0],s.z-o[1]],x:s.x,z:s.z,moved:!1},this.selectDevice(t),this.options.onDeviceSelect?.(t),!0)}setSelectedDevice(t){t!==this.selectedDevice&&this.selectDevice(t)}selectDevice(t){t&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=t;for(let[e,n]of this.devicePins)n.el.classList.toggle("fp3d-dev-sel",e===t)}dragFurniture(t,e){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(t,e));return}let n=this.deviceGrab;if(n){let f=this.floorMap.get(n.floorId),d=this.devices.find(g=>g.id===n.id),p=f&&this.floorPoint(f,t,e);if(!f||!d||!p)return;let x=this.building?.settings.grid??.05;n.x=d.x=Math.round((p[0]+n.offset[0])/x)*x,n.z=d.z=Math.round((p[1]+n.offset[1])/x)*x,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let s=this.grab,r=s&&this.floorMap.get(s.floorId);if(!s||!r)return;let o=s.screen,a;if(o){let f=(t-o.x0)*o.perPx,d=(e-o.y0)*o.perPx*o.gain;a=[o.fx+o.right[0]*f-o.fwd[0]*d-s.offset[0],o.fz+o.right[1]*f-o.fwd[1]*d-s.offset[1]]}else a=this.floorPoint(r,t,e,s.plane);if(!a)return;let l=this.building?.settings.grid??.05,c=r.floor.furniture.find(f=>f.id===s.id),u=Math.round((a[0]+s.offset[0])/l)*l,h=Math.round((a[1]+s.offset[1])/l)*l;[s.x,s.z]=c?Hp(r.floor,c,u,h,this.building?.settings.wall_interior??0):[u,h],s.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let t=this.deviceGrab;this.deviceGrab=null,t?.moved&&this.options.onDeviceMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3);let e=this.grab;this.grab=null,e?.moved&&this.options.onFurnitureMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let t=[...new Set([...this.selectedFurniture?[this.selectedFurniture]:[],...this.selectedSet])],e=new Le,n;for(let s of t){let r=this.floors.find(a=>a.floor.furniture.some(l=>l.id===s)),o=r?.floor.furniture.find(a=>a.id===s);!r||!o||(n??=r,this.ghostBox(e,r,o,s===this.selectedFurniture?new j(.25,.9,1):new j(1,.71,.28)))}n&&(this.ghost=new qe(e.geometry(),new Ye({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=n.floor.elevation+n.y,this.ghost.renderOrder=20,this.scene.add(this.ghost))}ghostBox(t,e,n,s){let r=this.grab?.id===n.id?this.grab.x:n.x,o=this.grab?.id===n.id?this.grab.z:n.z,a=e.floor.height,l=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant"].includes(n.type)&&n.mount_y==null,c=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),u=Ae(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?hn(e.floor,n):l?n.type==="lamp_pendant"?a-n.h-.1:a-c:hn(e.floor,n),h=n.rotation*ue,f=Math.cos(h),d=Math.sin(h),p=(g,m,v)=>[r+g*f-m*d,v,o+g*d+m*f],x=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]];for(let g=0;g<4;g++){let[m,v]=x[g],[y,_]=x[(g+1)%4];t.seg(p(m,v,u+.01),p(y,_,u+.01),s),t.seg(p(m,v,u+c),p(y,_,u+c),s),t.seg(p(m,v,u+.01),p(m,v,u+c),s)}t.seg(p(-n.w/2,n.d/2+.03,u+.02),p(n.w/2,n.d/2+.03,u+.02),new j(1,1,1))}onHold(t,e){let n=this.pick(t,e);n&&"entity"in n&&this.options.onDeviceHold?.(n.entity,t,e)}swipeStart(t,e,n,s){if(this.furnish||Math.abs(s)<Math.abs(n)*1.2)return!1;let r=this.pick(t,e);return!r||!("entity"in r)||this.options.onDeviceSwipe?.(r.entity,"start",0,t,e)!==!0?!1:(this.swipe={entity:r.entity,x:t,y:e},!0)}floorThumbnails(t=200,e=150){let n=this.floors.filter(m=>m.floor.rooms.some(v=>v.points.length>=3));if(!n.length)return[];let s=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),r=Math.round(t*s),o=Math.round(e*s),a=new en(r,o);a.texture.colorSpace=Ie;let l=new Vn(-1,1,1,-1,.1,400),c=this.floors.map(m=>({fv:m,visible:m.group.visible,y:m.y,o:m.o,standing:m.mask.standing.value,glass:m.mask.glass.value})),u=this.roof?.group.visible??!1,h=this.ghost?.visible??!1,f=this.renderer.getClearAlpha(),d=new Uint8Array(r*o*4),p=document.createElement("canvas");p.width=r,p.height=o;let x=p.getContext("2d"),g=[];try{this.roof&&(this.roof.group.visible=this.roof.wins.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let m of n){for(let L of this.floors)L.group.visible=L===m;m.y=0,m.o=1,this.applyFloor(m),m.group.visible=!0,m.mask.standing.value=0,m.mask.glass.value=0;let v=m.floor.rooms.flatMap(L=>L.points),y=m.floor.elevation,_=new an(new H(Math.min(...v.map(L=>L[0]))-.3,y,Math.min(...v.map(L=>L[1]))-.3),new H(Math.max(...v.map(L=>L[0]))+.3,y+Math.min(m.floor.cut_height,m.floor.height),Math.max(...v.map(L=>L[1]))+.3)),M=_.getCenter(new H),E=-.6,C=.8,b=new H(Math.sin(C)*Math.sin(E),Math.cos(C),Math.sin(C)*Math.cos(E));l.position.copy(M).addScaledVector(b,100),l.lookAt(M),l.updateMatrixWorld();let S=.5,T=.5;for(let L of[_.min.x,_.max.x])for(let w of[_.min.y,_.max.y])for(let P of[_.min.z,_.max.z]){let F=new H(L,w,P).applyMatrix4(l.matrixWorldInverse);S=Math.max(S,Math.abs(F.x)),T=Math.max(T,Math.abs(F.y))}let R=r/o;S/T>R?T=S/R:S=T*R,l.left=-S*1.05,l.right=S*1.05,l.top=T*1.05,l.bottom=-T*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,r,o,d);let A=x.createImageData(r,o);for(let L=0;L<o;L++)A.data.set(d.subarray((o-1-L)*r*4,(o-L)*r*4),L*r*4);x.putImageData(A,0,0),g.push({floorId:m.floor.id,url:p.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(f);for(let m of c)m.fv.y=m.y,m.fv.o=m.o,m.fv.mask.standing.value=m.standing,m.fv.mask.glass.value=m.glass,this.applyFloor(m.fv),m.fv.group.visible=m.visible;this.roof&&(this.roof.group.visible=u,this.roof.wins.visible=!0),this.ghost&&(this.ghost.visible=h),a.dispose(),this.invalidate()}return g}setRobots(t){let e=new Set;for(let n of t){e.add(n.id);let s=this.robots.get(n.id);s||(s=this.makeRobot(n),this.robots.set(n.id,s));let r=s.info.mode,o=n.mode==="cleaning"&&r==="cleaning"&&((s.info.roomId??null)!==(n.roomId??null)||JSON.stringify(s.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(s.info=n,n.mode==="cleaning"&&(r!=="cleaning"||o||!s.motion.path.length)){let a=n.room?vm(n.room,void 0,void 0,n.obstacles):sh(n.rest),l=a.length?a:sh(n.rest),c=0;l.forEach((u,h)=>{Math.hypot(u[0]-s.motion.pos[0],u[1]-s.motion.pos[1])<Math.hypot(l[c][0]-s.motion.pos[0],l[c][1]-s.motion.pos[1])&&(c=h)}),s.motion.path=l,s.motion.next=c,n.room&&!Jt(s.motion.pos,n.room)&&(s.motion.pos=[l[c][0],l[c][1]])}s.led.color.setHex(Tm[n.mode])}for(let[n,s]of this.robots)e.has(n)||(s.group.removeFromParent(),s.led.dispose(),this.robots.delete(n));this.robotLast=0,this.invalidate()}makeRobot(t){if(!this.robotGeo){let s=new ee,r=(a,l,c,u,h)=>{let f=[];for(let d=0;d<20;d++)f.push([Math.cos(d/20*Math.PI*2)*a,Math.sin(d/20*Math.PI*2)*a]);Re(s,f,l,c,u,h,{aoFrom:0,bottom:!1})};r(.17,.012,.08,2371657,3424863),r(.055,.08,.1,3820138,5070726),this.robotGeo=s.geometry(),this.robotMat=new ie({vertexColors:!0});let o=new ee;Re(o,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=o.geometry()}let e=new Ue,n=new ie({color:Tm[t.mode]});return e.add(new Ot(this.robotGeo,this.robotMat),new Ot(this.robotLedGeo,n)),{info:t,motion:{pos:[...t.rest],heading:t.restHeading,path:[],next:0},group:e,led:n}}stepRobots(t){if(!this.robots.size)return!1;let e=this.robotLast?Math.min(.2,(t-this.robotLast)/1e3):0;this.robotLast=t;let n=!1;for(let s of this.robots.values()){let r=this.floorMap.get(s.info.floorId);r&&(s.group.parent!==r.group&&r.group.add(s.group),e>0?n=_m(s.motion,s.info,e)||n:n||=s.info.mode==="cleaning"||s.info.mode==="returning",s.group.position.set(s.motion.pos[0],0,s.motion.pos[1]),s.group.visible=!s.info.inModel||s.info.mode==="cleaning"||Math.hypot(s.motion.pos[0]-s.info.rest[0],s.motion.pos[1]-s.info.rest[1])>.05,s.group.rotation.y=s.motion.heading)}return n||(this.robotLast=0),n}setTrail(t,e=[]){let n=a=>new j(.25-.2*a,.95-.83*a,1-.7*a),s=new j(0,0,0),r=new j(.3,1,.6),o=.02;for(let a of this.floors){let l=new ee;for(let u of e)u.floorId===a.floor.id&&u.points.forEach(([h,f],d)=>{let p=u.points[d-1];if(p){let x=Math.hypot(h-p[0],f-p[1])||1,g=-(f-p[1])/x*.1,m=(h-p[0])/x*.1;l.tri([p[0]+g,o,p[1]+m],[h+g,o,f+m],[h-g,o,f-m],r,r,r),l.tri([p[0]+g,o,p[1]+m],[h-g,o,f-m],[p[0]-g,o,p[1]-m],r,r,r)}for(let x=0;x<10;x++){let g=x/10*Math.PI*2,m=(x+1)/10*Math.PI*2;l.tri([h,o,f],[h+Math.cos(m)*.35,o,f+Math.sin(m)*.35],[h+Math.cos(g)*.35,o,f+Math.sin(g)*.35],r,s,s)}});let c=null;for(let u of t){if(u.floorId!==a.floor.id)continue;let h=n(u.age);if(c){let f=Math.hypot(u.x-c.x,u.z-c.z)||1,d=-(u.z-c.z)/f*.06,p=(u.x-c.x)/f*.06,x=n(c.age);l.tri([c.x+d,o,c.z+p],[u.x+d,o,u.z+p],[u.x-d,o,u.z-p],x,h,h),l.tri([c.x+d,o,c.z+p],[u.x-d,o,u.z-p],[c.x-d,o,c.z-p],x,h,x)}for(let f=0;f<12;f++){let d=f/12*Math.PI*2,p=(f+1)/12*Math.PI*2;l.tri([u.x,o,u.z],[u.x+Math.cos(p)*.22,o,u.z+Math.sin(p)*.22],[u.x+Math.cos(d)*.22,o,u.z+Math.sin(d)*.22],h,s,s)}c=u}a.trailMesh.geometry.dispose(),a.trailMesh.geometry=l.geometry(),a.trailMesh.visible=l.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(t,e=900){this.controls.flyTo(t,e)}lookThrough(t){let e=this.devices.find(c=>c.id===t&&c.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n)return!1;let s=(e.rotation??0)*ue,r=e.model==="camera_ceiling",o=Math.min(1.45,Math.max(.22,(e.tilt??(r?65:20))*ue)),a=n.floor.elevation+n.ty+(r?n.floor.height-.1:e.y),l=new H(-Math.sin(s)*Math.cos(o),-Math.sin(o),Math.cos(s)*Math.cos(o));return this.controls.flyTo({target:new H(e.x,a,e.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-o,theta:Math.atan2(Math.sin(s),-Math.cos(s))},900),!0}flashDevices(t){let e=performance.now()+Yl;for(let n of t)this.flashes.set(n,e);t.length&&this.invalidate()}focus(t,e,n,s,r){let o=this.floorMap.get(t);if(o){if(this.controls.flyTo({target:new H(e,o.floor.elevation+o.ty+s,n),radius:5.5,phi:.78},900),r){this.flashes.set(r,performance.now()+2400);let a=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(r)}"]`);a?.classList.add("fp3d-dev-found"),setTimeout(()=>a?.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(t){if(this.frame=0,this.disposed)return;let e=this.lastFrame?Math.min(100,t-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,t-this.orbitLast)/1e3),this.orbitLast=t,n=!0):this.orbitLast=0;let s=this.controls.update(t),r=this.stepFloors(e),o=this.stepOpenings(e)||this.stepFridges(e),a=!1;if(this.flashes.size){let d=new Set;for(let[p,x]of this.flashes){let g=this.deviceFloor.get(p);g&&d.add(g),x<=t&&this.flashes.delete(p)}a=this.flashes.size>0;for(let p of this.floors)d.has(p.floor.id)&&this.buildLamps(p)}let l=this.placeRoof(e),c=this.stepRobots(t),u=this.stepWeather(t),h=s||r||o||a||l,f=[];if((s||this.controls.busy)&&f.push("camera"),r&&f.push("floors"),o&&f.push("openings"),a&&f.push("flash"),l&&f.push("roof"),this.flowActive&&f.push("flow"),this.soundActive&&f.push("sound"),this.poolActive&&f.push("pool"),this.solarActive&&f.push("solar"),this.effectTick&&f.push("effect"),c&&f.push("robot"),n&&f.push("orbit"),this.tintTick&&f.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=h?t:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(t),this.updateWalls(),this.renderer.render(this.scene,this.camera),(this.viewChanged()||r||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(t,f),h&&this.invalidate(),this.effectFloors.size&&!this.effectTimer&&!document.hidden){let d=this.lowQuality?2*Lm:Lm;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=d/1e3,this.effectTick=!0;for(let p of this.floors)p.o<.02||!this.effectFloors.has(p.floor.id)||(this.buildLamps(p),this.buildGlow(p));this.invalidate()},d)}!h&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!h&&u&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33)),!h&&c&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!h&&(this.flowActive||this.solarActive||this.soundActive||this.poolActive)&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},this.lowQuality?2*Cm:Cm))}updateWalls(){let t=this.camera.position,e=this.controls.view.target,n=t.x-e.x,s=t.z-e.z,r=Math.hypot(n,s)||1;for(let o of this.floors){let a=this.roomId!==null&&o.floor.rooms.some(u=>u.id===this.roomId),l=this.wallMode==="cut",c=0;o.geo.buckets.forEach((u,h)=>{let f=u?u[0]*n/r+u[1]*s/r>=.25:a;!l&&f&&(c|=1<<h)}),o.mask.standing.value=l?0:65535,o.mask.glass.value=c}}viewChanged(){let t=this.controls.view,e=this.viewKey;return e[0]===t.target.x&&e[1]===t.target.y&&e[2]===t.target.z&&e[3]===t.radius&&e[4]===t.theta&&e[5]===t.phi?!1:(e[0]=t.target.x,e[1]=t.target.y,e[2]=t.target.z,e[3]=t.radius,e[4]=t.theta,e[5]=t.phi,!0)}place(t,e){let n=e===null;t.hidden!==n&&(t.hidden=n),e!==null&&this.placed.get(t)!==e&&(this.placed.set(t,e),t.style.transform=e)}updateLabels(){let{w:t,h:e}=this.size,n=new H,s=this.houseView,r=[];for(let o of this.floors){let a=o.bbox;if(!(s&&o.o>.5&&a)){this.place(o.label,null);continue}let l=null,c=null,u=o.floor.elevation+o.y+o.floor.cut_height*.5;for(let x of[a.x0,a.x1])for(let g of[a.z0,a.z1]){n.set(x,u,g).project(this.camera);let m=(n.x+1)/2*t,v=(1-n.y)/2*e;(!l||m<l.x)&&(l={x:m,y:v}),(!c||m>c.x)&&(c={x:m,y:v})}o.label.hidden&&(o.label.hidden=!1),o.labelSize??={w:o.label.offsetWidth,h:o.label.offsetHeight};let h=o.labelSize.w,f=8+this.labelInset,d=l.x-h-14,p=l.y;d<f&&this.labelInset&&(d=c.x+14,p=c.y),r.push({fv:o,left:Math.max(f,Math.min(t-h-8,d)),y:p,h:o.labelSize.h})}r.sort((o,a)=>a.fv.rank-o.fv.rank);for(let o=1;o<r.length;o++){let a=r[o-1];r[o].y=Math.max(r[o].y,a.y+(a.h+r[o].h)/2+8)}for(let o of r)this.place(o.fv.label,`translate(${o.left}px, ${o.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((o,a)=>{let l=this.floorMap.get(o.floorId);if(this.roomId!==null&&o.room!==this.roomId||o.views==="floor"&&this.floorId===null){this.anchorCb(a,0,0,!1,1,!0);return}if(this.floorId!==null&&this.floors.length>1&&(o.views==="house"||o.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new H(o.p[0],o.p[1]+(l?.y??0)+(o.roof&&(this.floorId===null||this.floors.length<=1)?(1-this.roofO)*2.2:0),o.p[2]),u=this.camera.position.clone().sub(c),h=u.length(),f=u.normalize().dot(new H(o.n[0],o.n[1],o.n[2]))>=0;n.copy(c).project(this.camera);let d=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,p=Math.min(1.6,Math.max(.25,15/Math.max(1,h)))*o.size;this.anchorCb(a,(n.x+1)/2*t,(1-n.y)/2*e,!d,p,f)}),this.updateDevicePins(t,e);for(let o of this.floors){let a=o.to<.99||o.o<.9||s||this.roomId!==null||this.otherFloor(o),l=o.floor.elevation+o.y+.05;for(let c of o.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let u=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,u?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}}otherFloor(t){return this.floorId!==null&&t.floor.id!==this.floorId}updateDevicePins(t,e){let n=new H,s=this.houseView;for(let r of this.persons){let o=this.personPins.get(r.id),a=this.floorMap.get(r.floorId);if(!o)continue;if(!a||s||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(o,null);continue}n.set(r.x,a.floor.elevation+a.y+.9,r.z).project(this.camera);let l=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(o,l?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}for(let r of this.devices){let o=this.devicePins.get(r.id)?.el;if(!o)continue;let a=this.floorMap.get(r.floorId),l=r.id.startsWith("detect:");if(!a||s&&!l||a.to<.99||a.o<.9||r.pin===!1||this.otherFloor(a)){this.place(o,null);continue}if(n.set(r.x,a.floor.elevation+a.y+r.y,r.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(o,null);continue}let u=this.roomId===null?r.full?"full":"":r.roomId===this.roomId?"full":"dim";this.pinMode.get(o)!==u&&(this.pinMode.set(o,u),o.classList.toggle("fp3d-dev-full",u==="full"),o.classList.toggle("fp3d-dev-dim",u==="dim")),this.place(o,`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}reportStats(t,e){if(!this.statsOn||!this.options.onStats)return;let n=e.length>0;this.fpsStart||(this.fpsStart=t),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,t-this.lastStatsFrame)),this.lastStatsFrame=n?t:0,this.fpsFrames++;let s=t-this.fpsStart;if(s>500||!n){let r=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/s):0,busy:e,worstMs:Math.round(this.worstFrame),calls:r.calls,triangles:r.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio(),gpu:this.gpuName??=EM(this.renderer)}),this.fpsFrames=0,this.fpsStart=t,this.worstFrame=0}}};function EM(i){try{let t=i.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),n=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER);return typeof n=="string"?n:null}catch{return null}}function AM(){let t=document.createElement("canvas");t.width=256*3,t.height=256*2;let e=t.getContext("2d"),n=(o,a,l,c,u)=>{e.strokeStyle=`rgba(55,224,255,${u})`,e.beginPath(),e.moveTo(o,a),e.lineTo(l,c),e.stroke()};e.lineWidth=1.5;let s=(o,a,l)=>{e.save(),e.beginPath(),e.rect(o*256,a*256,256,256),e.clip(),l(o*256,a*256),e.restore()};s(0,0,(o,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(o,c,o+256,c,.09);let u=o+l*.37%1*256;n(u,c,u,c+256/5,.07)}}),s(1,0,(o,a)=>{for(let l=0;l<7;l++){let c=o+l*256/7+.75;n(c,a,c,a+256,.08);let u=a+l*.53%1*256;n(c,u,c+256/7,u,.06)}}),s(2,0,(o,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(o+c,a,o+c,a+256,.1),n(o,a+c,o+256,a+c,.1)}}),s(1,1,(o,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(o,c,o+256,c,.09);let u=l?256/4:0;for(let h of[u,u+256/2])n(o+h+.75,c,o+h+.75,c+256/2,.09)}}),s(2,1,(o,a)=>{n(o+.75,a,o+.75,a+256,.08),n(o,a+.75,o+256,a+.75,.08),e.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)e.fillRect(o+l*97%256,a+(l*61+l*l%37)%256,2,2)});let r=new ni(t);return r.flipY=!1,r.wrapS=pn,r.wrapT=pn,r.anisotropy=4,r.colorSpace=Ie,r}function RM(i){let t=new ie({map:i,transparent:!0,blending:Ce,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},t.customProgramCacheKey=()=>"fp3d-pattern",t}function CM(){let i=document.createElement("canvas");i.width=8,i.height=32;let t=i.getContext("2d");t.fillStyle="#1a2742",t.fillRect(0,0,8,32),t.fillStyle="#223556",t.fillRect(0,4,8,14),t.fillStyle="rgba(55,224,255,0.45)",t.fillRect(0,29,8,2);let e=new ni(i);return e.wrapS=Yi,e.wrapT=Yi,e.colorSpace=Ie,e}function oh(i){let t=e=>Math.round(e*100);return`${i.floorId}:${i.a.map(t).join(",")}>${i.b.map(t).join(",")}`}function Fm(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}function PM(i){let t=new ie({vertexColors:!0,transparent:!0,blending:Ce,depthWrite:!1,side:he});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float flowSpeed;
attribute float flowOffset;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFlowSpeed = flowSpeed;
vFlowOffset = flowOffset;
vFlowUv = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowTime;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        float fp3dAcross = 1.0 - abs(vFlowUv.y * 2.0 - 1.0);
        float fp3dMoving = step(0.001, abs(vFlowSpeed));
        // light dots every third of a metre, each a comet: a bright head and a tail fading out behind it,
        // so the direction (from a to b) is plain even on a still picture
        float fp3dPhase = fract((vFlowUv.x - uFlowTime * abs(vFlowSpeed) - vFlowOffset) * 3.0);
        float fp3dDot = exp(-(1.0 - fp3dPhase) * 7.0) * fp3dMoving;
        float fp3dCore = fp3dAcross * fp3dAcross;
        diffuseColor.rgb *= (0.3 + 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},t.customProgramCacheKey=()=>"fp3d-flow",t}function Dm(i,t){let e=i.rooms.map((s,r)=>r),n=s=>e[s]===s?s:e[s]=n(e[s]);for(let[s,r]of t){let o=i.rooms.findIndex(u=>u.id===s),a=i.rooms.findIndex(u=>u.id===r);if(o<0||a<0)continue;let l=n(o),c=n(a);l!==c&&(e[Math.max(l,c)]=Math.min(l,c))}return e.map((s,r)=>n(r))}function IM(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let s=new ni(t);return s.colorSpace=Ie,s}function LM(){let t=ah,e=document.createElement("canvas");e.width=1024,e.height=1024;let n=e.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let o=0;o<=t;o++){let a=Math.round(o/t*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let s=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);s.addColorStop(0,"rgba(0,0,0,1)"),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(0,0,1024,1024);let r=new ni(e);return r.anisotropy=4,r.colorSpace=Ie,r}function CA(i,t){return new ch(i,t)}function rh(i,t,e,n){let[s,r,o]=t.size??lh[t.lamp],a=t.base??0,l=(t.rotation??0)*ue,c=Math.cos(l),u=Math.sin(l),h=(x,g)=>[t.x+x*c-g*u,t.z+x*u+g*c],f=(x,g,m,v,y,_=14)=>{let M=[];for(let E=0;E<_;E++){let C=E/_*Math.PI*2;M.push([t.x+Math.cos(C)*x,t.z+Math.sin(C)*x])}Re(i,M,g,m,v,y,{aoFrom:0,bottom:!0})},d=(x,g,m,v,y,_,M,E=M)=>Re(i,[h(x,m),h(g,m),h(g,v),h(x,v)],y,_,M,E,{aoFrom:0,bottom:!0}),p=Math.max(.05,Math.min(s,r)/2);switch(t.lamp){case"ceiling":f(p*.25,e-.04,e,se,se,8),f(p,e-Math.max(.04,o)-.035,e-.04,n,n);break;case"pendant":{let x=Math.max(.4,e-o);f(.06,e-.02,e,se,se,8);let g=t.variant==="globe"?x+2*p:t.variant==="drum"?x+.24:x+.2;if(f(.008,g,e-.02,se,se,5),t.variant==="globe")for(let v=0;v<7;v++){let y=Math.PI*(v/7),_=Math.PI*((v+1)/7);f(p*Math.max(.2,Math.sin((y+_)/2)),x+p-p*Math.cos(y),x+p-p*Math.cos(_),n,n,14)}else if(t.variant==="cone")for(let v=0;v<4;v++)f(p*(.25+.75*(4-v)/4),x+.06*v,x+.06*(v+1),n,n,16);else t.variant==="drum"?f(p,x,x+.24,n,n,18):(f(p*.35,x+.14,x+.2,n,n,12),f(p,x,x+.14,n,n,16));break}case"downlight":f(p,e-.012,e,se,se,12),f(p*.7,e-.02,e-.012,n,n,12);break;case"spot":f(p*.6,e-.02,e,se,se,10),f(p,e-Math.max(.06,o),e-.02,se,se,12),f(p*.8,e-Math.max(.06,o)-.008,e-Math.max(.06,o),n,n,12);break;case"panel":d(-s/2,s/2,-r/2,r/2,e-Math.max(.015,o),e,se,se),d(-s/2+.02,s/2-.02,-r/2+.02,r/2-.02,e-Math.max(.015,o)-.004,e-Math.max(.015,o),n);break;case"uplight":f(Math.max(.1,p*.6),a,a+.03,se,se),f(.014,a+.03,a+o-.12,se,se,6),f(p,a+o-.14,a+o-.02,se,se),f(p*.92,a+o-.02,a+o,n,n);break;case"bollard":f(p,a,a+o-.14,se,se,10),f(p*.9,a+o-.14,a+o-.03,n,n,10),f(p*1.1,a+o-.03,a+o,se,se,10);break;case"garden":f(.012,a,a+o-.08,se,se,5),f(p,a+o-.08,a+o-.01,se,se,10),f(p*.8,a+o-.01,a+o,n,n,10);break;case"floor":f(Math.max(.1,p*.7),a,a+.03,se,se),f(.014,a+.03,a+o-.28,se,se,6),f(p,a+o-.3,a+o,n,n);break;case"table":f(Math.max(.05,p*.55),a,a+.03,se,se),f(.012,a+.03,a+o-.16,se,se,6),f(p,a+o-.18,a+o,n,n);break;case"wall":{let x=t.base??vl;d(-s/2+.03,s/2-.03,-r/2,-r/2+.02,x,x+o,se),d(-s/2,s/2,-r/2+.02,r/2,x+o*.15,x+o*.85,n);break}case"strip":{let x=Math.max(.02,o),g=t.base!=null?t.base+x:e-.04;if(!t.roll&&!t.upright){d(-s/2,s/2,-r/2,r/2,g-x,g,n);break}let m=(t.roll??0)*ue,v=Math.cos(m),y=Math.sin(m),_=t.upright?a+s/2:g-x/2,M=(T,R,A)=>{let L=T,w=R*v-A*y,P=R*y+A*v;return t.upright&&([L,w]=[-w,L]),[t.x+L*c-P*u,_+w,t.z+L*u+P*c]},E=[M(-s/2,-x/2,-r/2),M(s/2,-x/2,-r/2),M(s/2,-x/2,r/2),M(-s/2,-x/2,r/2),M(-s/2,x/2,-r/2),M(s/2,x/2,-r/2),M(s/2,x/2,r/2),M(-s/2,x/2,r/2)],C=new j(n),b=[t.x,_,t.z],S=(T,R,A,L)=>{let[w,P,F]=[E[T],E[R],E[A]],N=[(P[1]-w[1])*(F[2]-w[2])-(P[2]-w[2])*(F[1]-w[1]),(P[2]-w[2])*(F[0]-w[0])-(P[0]-w[0])*(F[2]-w[2]),(P[0]-w[0])*(F[1]-w[1])-(P[1]-w[1])*(F[0]-w[0])],B=[w[0]-b[0],w[1]-b[1],w[2]-b[2]],O=N[0]*B[0]+N[1]*B[1]+N[2]*B[2]<0,[z,V,Q,G]=O?[E[L],E[A],E[R],E[T]]:[E[T],E[R],E[A],E[L]];i.tri(z,V,Q,C,C,C),i.tri(z,Q,G,C,C,C)};S(0,1,2,3),S(4,5,6,7),S(0,1,5,4),S(1,2,6,5),S(2,3,7,6),S(3,0,4,7);break}}}export{Ku as FloorMap,ch as FloorplanViewer,ju as WalkCamera,CA as createViewer,xA as funLib,gM as furnitureFront,mM as furniturePreview,TM as isLowEnd,rh as pushLampModel};
