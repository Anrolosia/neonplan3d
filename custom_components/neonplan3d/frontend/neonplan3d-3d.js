var jh=0,Rc=1,Qh=2;var Rr=1,tf=2,zs=3,Vn=0,qe=1,ue=2,Gn=0,wi=1,Ce=2,Cc=3,Cr=4,ef=5;var ji=100,nf=101,sf=102,rf=103,of=104,af=200,lf=201,cf=202,uf=203,Pc=204,Ic=205,hf=206,ff=207,df=208,pf=209,mf=210,gf=211,xf=212,bf=213,vf=214,qo=0,$o=1,Zo=2,Cs=3,Jo=4,Ko=5,jo=6,Qo=7,Lc=0,_f=1,yf=2,Rn=0,Fc=1,Dc=2,Nc=3,Uc=4,Oc=5,Bc=6,zc=7;var kc=300,Ti=301,Qi=302,Aa=303,Ra=304,Pr=306,qi=1e3,fn=1001,ta=1002,Ge=1003,Mf=1004;var Ir=1005;var We=1006,Ca=1007;var Ei=1008;var pn=1009,Vc=1010,Gc=1011,ks=1012,Pa=1013,Cn=1014,Pn=1015,In=1016,Ia=1017,La=1018,Vs=1020,Hc=35902,Wc=35899,Xc=1021,Yc=1022,vn=1023,On=1026,Ai=1027,qc=1028,Fa=1029,Ri=1030,Da=1031;var Na=1033,Lr=33776,Fr=33777,Dr=33778,Nr=33779,Ua=35840,Oa=35841,Ba=35842,za=35843,ka=36196,Va=37492,Ga=37496,Ha=37488,Wa=37489,Ur=37490,Xa=37491,Ya=37808,qa=37809,$a=37810,Za=37811,Ja=37812,Ka=37813,ja=37814,Qa=37815,tl=37816,el=37817,nl=37818,il=37819,sl=37820,rl=37821,ol=36492,al=36494,ll=36495,cl=36283,ul=36284,Or=36285,hl=36286;var lr=2300,ea=2301,Wo=2302,xc=2303,bc=2400,vc=2401,_c=2402;var Sf=3200;var $c=0,wf=1,ii="",Ie="srgb",cr="srgb-linear",ur="linear",pe="srgb";var Xo=7680;var Tf=519,Ef=512,Af=513,Rf=514,fl=515,Cf=516,Pf=517,dl=518,If=519,Lf=35044,Zc=35048;var Jc="300 es",An=2e3,hr=2001;function Hm(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Wm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ps(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ff(){let i=Ps("canvas");return i.style.display="block",i}var yh={},Is=null;function Kc(...i){let t="THREE."+i.shift();Is?Is("log",t,...i):console.log(t,...i)}function Df(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function zt(...i){i=Df(i);let t="THREE."+i.shift();if(Is)Is("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Vt(...i){i=Df(i);let t="THREE."+i.shift();if(Is)Is("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Yi(...i){let t=i.join(" ");t in yh||(yh[t]=!0,zt(...i))}function Nf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Uf={[qo]:$o,[Zo]:jo,[Jo]:Qo,[Cs]:Ko,[$o]:qo,[jo]:Zo,[Qo]:Jo,[Ko]:Cs},Bn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var $l=Math.PI/180,na=180/Math.PI;function Br(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]).toLowerCase()}function ae(i,t,e){return Math.max(t,Math.min(e,i))}function Xm(i,t){return(i%t+t)%t}function Zl(i,t,e){return(1-e)*i+e*t}function er(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ln(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var nu=class nu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};nu.prototype.isVector2=!0;var Qt=nu,zn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],f=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(h!==x||l!==f||c!==d||u!==p){let g=l*f+c*d+u*p+h*x;g<0&&(f=-f,d=-d,p=-p,x=-x,g=-g);let m=1-a;if(g<.9995){let _=Math.acos(g),M=Math.sin(_);m=Math.sin(m*_)/M,a=Math.sin(a*_)/M,l=l*m+f*a,c=c*m+d*a,u=u*m+p*a,h=h*m+x*a}else{l=l*m+f*a,c=c*m+d*a,u=u*m+p*a,h=h*m+x*a;let _=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=_,c*=_,u*=_,h*=_}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return t[e]=a*p+u*h+l*d-c*f,t[e+1]=l*p+u*f+c*h-a*d,t[e+2]=c*p+u*d+a*f-l*h,t[e+3]=u*p-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),f=l(n/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"YXZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"ZXY":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"ZYX":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"YZX":this._x=f*u*h+c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h-f*d*p;break;case"XZY":this._x=f*u*h-c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h+f*d*p;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},iu=class iu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Mh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Mh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Jl.copy(this).projectOnVector(t),this.sub(Jl)}reflect(t){return this.sub(Jl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};iu.prototype.isVector3=!0;var G=iu,Jl=new G,Mh=new zn,su=class su{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],p=n[8],x=s[0],g=s[3],m=s[6],_=s[1],M=s[4],v=s[7],y=s[2],w=s[5],T=s[8];return r[0]=o*x+a*_+l*y,r[3]=o*g+a*M+l*w,r[6]=o*m+a*v+l*T,r[1]=c*x+u*_+h*y,r[4]=c*g+u*M+h*w,r[7]=c*m+u*v+h*T,r[2]=f*x+d*_+p*y,r[5]=f*g+d*M+p*w,r[8]=f*m+d*v+p*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,p=e*h+n*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=h*x,t[1]=(s*c-u*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(u*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Yi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Kl.makeScale(t,e)),this}rotate(t){return Yi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Kl.makeRotation(-t)),this}translate(t,e){return Yi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Kl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};su.prototype.isMatrix3=!0;var Xt=su,Kl=new Xt,Sh=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wh=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ym(){let i={enabled:!0,workingColorSpace:cr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pe&&(s.r=Qn(s.r),s.g=Qn(s.g),s.b=Qn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pe&&(s.r=Rs(s.r),s.g=Rs(s.g),s.b=Rs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ii?ur:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Yi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Yi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[cr]:{primaries:t,whitePoint:n,transfer:ur,toXYZ:Sh,fromXYZ:wh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:n,transfer:pe,toXYZ:Sh,fromXYZ:wh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),i}var oe=Ym();function Qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Rs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ps,ia=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ps===void 0&&(ps=Ps("canvas")),ps.width=t.width,ps.height=t.height;let s=ps.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ps}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ps("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qn(e[n]/255)*255):e[n]=Qn(e[n]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},qm=0,Ls=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=Br(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(jl(s[o].image)):r.push(jl(s[o]))}else r=jl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function jl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ia.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}var $m=0,Ql=new G,Qe=class i extends Bn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=fn,s=fn,r=We,o=Ei,a=vn,l=pn,c=i.DEFAULT_ANISOTROPY,u=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=Br(),this.name="",this.source=new Ls(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Qt(0,0),this.repeat=new Qt(1,1),this.center=new Qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ql).x}get height(){return this.source.getSize(Ql).y}get depth(){return this.source.getSize(Ql).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qi:t.x=t.x-Math.floor(t.x);break;case fn:t.x=t.x<0?0:1;break;case ta:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qi:t.y=t.y-Math.floor(t.y);break;case fn:t.y=t.y<0?0:1;break;case ta:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=kc;Qe.DEFAULT_ANISOTROPY=1;var ru=class ru{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,v=(d+1)/2,y=(m+1)/2,w=(u+f)/4,T=(h+x)/4,b=(p+g)/4;return M>v&&M>y?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=w/n,r=T/n):v>y?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=b/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=T/r,s=b/r),this.set(n,s,r,e),this}let _=Math.sqrt((g-p)*(g-p)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(h-x)/_,this.z=(f-u)/_,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ru.prototype.isVector4=!0;var Ee=ru,sa=class extends Bn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Qe(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:We,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ls(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},tn=class extends sa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},fr=class extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ra=class extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ea=class Ea{constructor(t,e,n,s,r,o,a,l,c,u,h,f,d,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,h,f,d,p,x,g)}set(t,e,n,s,r,o,a,l,c,u,h,f,d,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ea().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ms.setFromMatrixColumn(t,0).length(),r=1/ms.setFromMatrixColumn(t,1).length(),o=1/ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=o*u,d=o*h,p=a*u,x=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+p*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*u,d=l*h,p=c*u,x=c*h;e[0]=f+x*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-p,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*u,d=l*h,p=c*u,x=c*h;e[0]=f-x*a,e[4]=-o*h,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*u,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*u,d=o*h,p=a*u,x=a*h;e[0]=l*u,e[4]=p*c-d,e[8]=f*c+x,e[1]=l*h,e[5]=x*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,p=a*l,x=a*c;e[0]=l*u,e[4]=x-f*h,e[8]=p*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+p,e[10]=f-x*h}else if(t.order==="XZY"){let f=o*l,d=o*c,p=a*l,x=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+x,e[5]=o*u,e[9]=d*h-p,e[2]=p*h-d,e[6]=a*u,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zm,t,Jm)}lookAt(t,e,n){let s=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),hi.crossVectors(n,un),hi.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),hi.crossVectors(n,un)),hi.normalize(),vo.crossVectors(un,hi),s[0]=hi.x,s[4]=vo.x,s[8]=un.x,s[1]=hi.y,s[5]=vo.y,s[9]=un.y,s[2]=hi.z,s[6]=vo.z,s[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],p=n[2],x=n[6],g=n[10],m=n[14],_=n[3],M=n[7],v=n[11],y=n[15],w=s[0],T=s[4],b=s[8],S=s[12],E=s[1],P=s[5],A=s[9],I=s[13],R=s[2],L=s[6],N=s[10],U=s[14],k=s[3],B=s[7],z=s[11],V=s[15];return r[0]=o*w+a*E+l*R+c*k,r[4]=o*T+a*P+l*L+c*B,r[8]=o*b+a*A+l*N+c*z,r[12]=o*S+a*I+l*U+c*V,r[1]=u*w+h*E+f*R+d*k,r[5]=u*T+h*P+f*L+d*B,r[9]=u*b+h*A+f*N+d*z,r[13]=u*S+h*I+f*U+d*V,r[2]=p*w+x*E+g*R+m*k,r[6]=p*T+x*P+g*L+m*B,r[10]=p*b+x*A+g*N+m*z,r[14]=p*S+x*I+g*U+m*V,r[3]=_*w+M*E+v*R+y*k,r[7]=_*T+M*P+v*L+y*B,r[11]=_*b+M*A+v*N+y*z,r[15]=_*S+M*I+v*U+y*V,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],p=t[3],x=t[7],g=t[11],m=t[15],_=l*d-c*f,M=a*d-c*h,v=a*f-l*h,y=o*d-c*u,w=o*f-l*u,T=o*h-a*u;return e*(x*_-g*M+m*v)-n*(p*_-g*y+m*w)+s*(p*M-x*y+m*T)-r*(p*v-x*w+g*T)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-n*(r*u-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],p=t[12],x=t[13],g=t[14],m=t[15],_=e*a-n*o,M=e*l-s*o,v=e*c-r*o,y=n*l-s*a,w=n*c-r*a,T=s*c-r*l,b=u*x-h*p,S=u*g-f*p,E=u*m-d*p,P=h*g-f*x,A=h*m-d*x,I=f*m-d*g,R=_*I-M*A+v*P+y*E-w*S+T*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/R;return t[0]=(a*I-l*A+c*P)*L,t[1]=(s*A-n*I-r*P)*L,t[2]=(x*T-g*w+m*y)*L,t[3]=(f*w-h*T-d*y)*L,t[4]=(l*E-o*I-c*S)*L,t[5]=(e*I-s*E+r*S)*L,t[6]=(g*v-p*T-m*M)*L,t[7]=(u*T-f*v+d*M)*L,t[8]=(o*A-a*E+c*b)*L,t[9]=(n*E-e*A-r*b)*L,t[10]=(p*w-x*v+m*_)*L,t[11]=(h*v-u*w-d*_)*L,t[12]=(a*S-o*P-l*b)*L,t[13]=(e*P-n*S+s*b)*L,t[14]=(x*M-p*y-g*_)*L,t[15]=(u*y-h*M+f*_)*L,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,p=r*h,x=o*u,g=o*h,m=a*h,_=l*c,M=l*u,v=l*h,y=n.x,w=n.y,T=n.z;return s[0]=(1-(x+m))*y,s[1]=(d+v)*y,s[2]=(p-M)*y,s[3]=0,s[4]=(d-v)*w,s[5]=(1-(f+m))*w,s[6]=(g+_)*w,s[7]=0,s[8]=(p+M)*T,s[9]=(g-_)*T,s[10]=(1-(f+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=ms.set(s[0],s[1],s[2]).length(),a=ms.set(s[4],s[5],s[6]).length(),l=ms.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Sn.copy(this);let c=1/o,u=1/a,h=1/l;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=h,Sn.elements[9]*=h,Sn.elements[10]*=h,e.setFromRotationMatrix(Sn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=An,l=!1){let c=this.elements,u=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===An)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===hr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=An,l=!1){let c=this.elements,u=2/(e-t),h=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===An)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===hr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ea.prototype.isMatrix4=!0;var Se=Ea,ms=new G,Sn=new Se,Zm=new G(0,0,0),Jm=new G(1,1,1),hi=new G,vo=new G,un=new G,Th=new Se,Eh=new zn,xi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ae(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Th.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Th,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Eh.setFromEuler(this),this.setFromQuaternion(Eh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xi.DEFAULT_ORDER="XYZ";var Fs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Km=0,Ah=new G,gs=new zn,$n=new Se,_o=new G,nr=new G,jm=new G,Qm=new zn,Rh=new G(1,0,0),Ch=new G(0,1,0),Ph=new G(0,0,1),Ih={type:"added"},t0={type:"removed"},xs={type:"childadded",child:null},tc={type:"childremoved",child:null},cn=class i extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=Br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new G,e=new xi,n=new zn,s=new G(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Se},normalMatrix:{value:new Xt}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.multiply(gs),this}rotateOnWorldAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.premultiply(gs),this}rotateX(t){return this.rotateOnAxis(Rh,t)}rotateY(t){return this.rotateOnAxis(Ch,t)}rotateZ(t){return this.rotateOnAxis(Ph,t)}translateOnAxis(t,e){return Ah.copy(t).applyQuaternion(this.quaternion),this.position.add(Ah.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rh,t)}translateY(t){return this.translateOnAxis(Ch,t)}translateZ(t){return this.translateOnAxis(Ph,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_o.copy(t):_o.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(nr,_o,this.up):$n.lookAt(_o,nr,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),gs.setFromRotationMatrix($n),this.quaternion.premultiply(gs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Vt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ih),xs.child=t,this.dispatchEvent(xs),xs.child=null):Vt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(t0),tc.child=t,this.dispatchEvent(tc),tc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ih),xs.child=t,this.dispatchEvent(xs),xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,t,jm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,Qm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};cn.DEFAULT_UP=new G(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ue=class extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},e0={type:"move"},Ds=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(e0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ue;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Of={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},yo={h:0,s:0,l:0};function ec(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Q=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=Xm(t,1),e=ae(e,0,1),n=ae(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ec(o,r,t+1/3),this.g=ec(o,r,t),this.b=ec(o,r,t-1/3)}return oe.colorSpaceToWorking(this,s),this}setStyle(t,e=Ie){function n(r){r!==void 0&&parseFloat(r)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){let n=Of[t.toLowerCase()];return n!==void 0?this.setHex(n,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qn(t.r),this.g=Qn(t.g),this.b=Qn(t.b),this}copyLinearToSRGB(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return oe.workingToColorSpace(Ke.copy(this),t),Math.round(ae(Ke.r*255,0,255))*65536+Math.round(ae(Ke.g*255,0,255))*256+Math.round(ae(Ke.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(Ke.copy(this),e);let n=Ke.r,s=Ke.g,r=Ke.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=Ie){oe.workingToColorSpace(Ke.copy(this),t);let e=Ke.r,n=Ke.g,s=Ke.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(yo);let n=Zl(fi.h,yo.h,e),s=Zl(fi.s,yo.s,e),r=Zl(fi.l,yo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ke=new Q;Q.NAMES=Of;var dr=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Q(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var bi=class extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},wn=new G,Zn=new G,nc=new G,Jn=new G,bs=new G,vs=new G,Lh=new G,ic=new G,sc=new G,rc=new G,oc=new Ee,ac=new Ee,lc=new Ee,gi=class i{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),wn.subVectors(t,e),s.cross(wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){wn.subVectors(s,e),Zn.subVectors(n,e),nc.subVectors(t,e);let o=wn.dot(wn),a=wn.dot(Zn),l=wn.dot(nc),c=Zn.dot(Zn),u=Zn.dot(nc),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,p=(o*u-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Jn.x),l.addScaledVector(o,Jn.y),l.addScaledVector(a,Jn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return oc.setScalar(0),ac.setScalar(0),lc.setScalar(0),oc.fromBufferAttribute(t,e),ac.fromBufferAttribute(t,n),lc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(oc,r.x),o.addScaledVector(ac,r.y),o.addScaledVector(lc,r.z),o}static isFrontFacing(t,e,n,s){return wn.subVectors(n,e),Zn.subVectors(t,e),wn.cross(Zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),wn.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;bs.subVectors(s,n),vs.subVectors(r,n),ic.subVectors(t,n);let l=bs.dot(ic),c=vs.dot(ic);if(l<=0&&c<=0)return e.copy(n);sc.subVectors(t,s);let u=bs.dot(sc),h=vs.dot(sc);if(u>=0&&h<=u)return e.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(bs,o);rc.subVectors(t,r);let d=bs.dot(rc),p=vs.dot(rc);if(p>=0&&d<=p)return e.copy(r);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(vs,a);let g=u*p-d*h;if(g<=0&&h-u>=0&&d-p>=0)return Lh.subVectors(r,s),a=(h-u)/(h-u+(d-p)),e.copy(s).addScaledVector(Lh,a);let m=1/(g+x+f);return o=x*m,a=f*m,e.copy(n).addScaledVector(bs,o).addScaledVector(vs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},on=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Tn):Tn.fromBufferAttribute(r,o),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mo.copy(n.boundingBox)),Mo.applyMatrix4(t.matrixWorld),this.union(Mo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ir),So.subVectors(this.max,ir),_s.subVectors(t.a,ir),ys.subVectors(t.b,ir),Ms.subVectors(t.c,ir),di.subVectors(ys,_s),pi.subVectors(Ms,ys),Gi.subVectors(_s,Ms);let e=[0,-di.z,di.y,0,-pi.z,pi.y,0,-Gi.z,Gi.y,di.z,0,-di.x,pi.z,0,-pi.x,Gi.z,0,-Gi.x,-di.y,di.x,0,-pi.y,pi.x,0,-Gi.y,Gi.x,0];return!cc(e,_s,ys,Ms,So)||(e=[1,0,0,0,1,0,0,0,1],!cc(e,_s,ys,Ms,So))?!1:(wo.crossVectors(di,pi),e=[wo.x,wo.y,wo.z],cc(e,_s,ys,Ms,So))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Kn=[new G,new G,new G,new G,new G,new G,new G,new G],Tn=new G,Mo=new on,_s=new G,ys=new G,Ms=new G,di=new G,pi=new G,Gi=new G,ir=new G,So=new G,wo=new G,Hi=new G;function cc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Hi.fromArray(i,r);let a=s.x*Math.abs(Hi.x)+s.y*Math.abs(Hi.y)+s.z*Math.abs(Hi.z),l=t.dot(Hi),c=e.dot(Hi),u=n.dot(Hi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Ne=new G,To=new Qt,n0=0,bn=class extends Bn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:n0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Lf,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)To.fromBufferAttribute(this,e),To.applyMatrix3(t),this.setXY(e,To.x,To.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=er(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ln(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=er(e,this.array)),e}setX(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=er(e,this.array)),e}setY(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=er(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=er(e,this.array)),e}setW(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array),r=ln(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var pr=class extends bn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var $i=class extends bn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Nt=class extends bn{constructor(t,e,n){super(new Float32Array(t),e,n)}},i0=new on,sr=new G,uc=new G,vi=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):i0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sr.subVectors(t,this.center);let e=sr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(sr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(uc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sr.copy(t.center).add(uc)),this.expandByPoint(sr.copy(t.center).sub(uc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},s0=0,xn=new Se,hc=new cn,Ss=new G,hn=new on,rr=new on,Ve=new G,qt=class i extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=Br(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hm(t)?$i:pr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,n){return xn.makeTranslation(t,e,n),this.applyMatrix4(xn),this}scale(t,e,n){return xn.makeScale(t,e,n),this.applyMatrix4(xn),this}lookAt(t){return hc.lookAt(t),hc.updateMatrix(),this.applyMatrix4(hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Nt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new on);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let n=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];rr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(hn.min,rr.min),hn.expandByPoint(Ve),Ve.addVectors(hn.max,rr.max),hn.expandByPoint(Ve)):(hn.expandByPoint(rr.min),hn.expandByPoint(rr.max))}hn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ve));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ve.fromBufferAttribute(a,c),l&&(Ss.fromBufferAttribute(t,c),Ve.add(Ss)),s=Math.max(s,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new bn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let b=0;b<n.count;b++)a[b]=new G,l[b]=new G;let c=new G,u=new G,h=new G,f=new Qt,d=new Qt,p=new Qt,x=new G,g=new G;function m(b,S,E){c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,E),f.fromBufferAttribute(r,b),d.fromBufferAttribute(r,S),p.fromBufferAttribute(r,E),u.sub(c),h.sub(c),d.sub(f),p.sub(f);let P=1/(d.x*p.y-p.x*d.y);isFinite(P)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(h,-d.y).multiplyScalar(P),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(P),a[b].add(x),a[S].add(x),a[E].add(x),l[b].add(g),l[S].add(g),l[E].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let b=0,S=_.length;b<S;++b){let E=_[b],P=E.start,A=E.count;for(let I=P,R=P+A;I<R;I+=3)m(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let M=new G,v=new G,y=new G,w=new G;function T(b){y.fromBufferAttribute(s,b),w.copy(y);let S=a[b];M.copy(S),M.sub(y.multiplyScalar(y.dot(S))).normalize(),v.crossVectors(w,S);let P=v.dot(l[b])<0?-1:1;o.setXYZW(b,M.x,M.y,M.z,P)}for(let b=0,S=_.length;b<S;++b){let E=_[b],P=E.start,A=E.count;for(let I=P,R=P+A;I<R;I+=3)T(t.getX(I+0)),T(t.getX(I+1)),T(t.getX(I+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new bn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new G,r=new G,o=new G,a=new G,l=new G,c=new G,u=new G,h=new G;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let m=0;m<u;m++)f[p++]=c[d++]}return new bn(f,u,h)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var fc=new G,r0=new G,o0=new Xt,En=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=fc.subVectors(n,e).cross(r0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(fc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||o0.getNormalMatrix(t),s=this.coplanarPoint(fc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},a0=0,ti=class extends Bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Br(),this.name="",this.type="Material",this.blending=wi,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pc,this.blendDst=Ic,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Q(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xo,this.stencilZFail=Xo,this.stencilZPass=Xo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Q().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new En().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Qt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Qt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var jn=new G,dc=new G,Eo=new G,Ao=new G,Zi=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(jn.copy(this.origin).addScaledVector(this.direction,e),jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){dc.copy(t).add(e).multiplyScalar(.5),Eo.copy(e).sub(t).normalize(),Ao.copy(this.origin).sub(dc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Eo),a=Ao.dot(this.direction),l=-Ao.dot(Eo),c=Ao.lengthSq(),u=Math.abs(1-o*o),h,f,d,p;if(u>0)if(h=o*l-a,f=o*a-l,p=r*u,h>=0)if(f>=-p)if(f<=p){let x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-p?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=p?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(dc).addScaledVector(Eo,f),d}intersectSphere(t,e){if(t.radius<0)return null;jn.subVectors(t.center,this.origin);let n=jn.dot(this.direction),s=jn.dot(jn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,jn)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=t.x-o.x,f=t.y-o.y,d=t.z-o.z,p=e.x-o.x,x=e.y-o.y,g=e.z-o.z,m=n.x-o.x,_=n.y-o.y,M=n.z-o.z,v=Math.abs(l),y=Math.abs(c),w=Math.abs(u),T,b,S,E,P,A,I,R,L,N,U,k;if(v>=y&&v>=w?(S=l,A=h,L=p,k=m,l>=0?(T=c,b=u,E=f,P=d,I=x,R=g,N=_,U=M):(T=u,b=c,E=d,P=f,I=g,R=x,N=M,U=_)):y>=w?(S=c,A=f,L=x,k=_,c>=0?(T=u,b=l,E=d,P=h,I=g,R=p,N=M,U=m):(T=l,b=u,E=h,P=d,I=p,R=g,N=m,U=M)):(S=u,A=d,L=g,k=M,u>=0?(T=l,b=c,E=h,P=f,I=p,R=x,N=m,U=_):(T=c,b=l,E=f,P=h,I=x,R=p,N=_,U=m)),S===0)return null;let B=T/S,z=b/S,V=1/S,st=E-B*A,$=P-z*A,ot=I-B*L,ct=R-z*L,pt=N-B*k,q=U-z*k,X=pt*ct-q*ot,it=st*q-$*pt,ut=ot*$-ct*st;if(s){if(X<0||it<0||ut<0)return null}else if((X<0||it<0||ut<0)&&(X>0||it>0||ut>0))return null;let ht=X+it+ut;if(ht===0)return null;let Pt=V*(X*A+it*L+ut*k);return(ht>0?Pt<0:Pt>0)?null:this.at(Pt/ht,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ie=class extends ti{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=Lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Fh=new Se,Wi=new Zi,Ro=new vi,Dh=new G,Co=new G,Po=new G,Io=new G,pc=new G,Lo=new G,Nh=new G,Fo=new G,Ut=class extends cn{constructor(t=new qt,e=new ie){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Lo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(pc.fromBufferAttribute(h,t),o?Lo.addScaledVector(pc,u):Lo.addScaledVector(pc.sub(e),u))}e.add(Lo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(r),Wi.copy(t.ray).recast(t.near),!(Ro.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(Ro,Dh)===null||Wi.origin.distanceToSquared(Dh)>(t.far-t.near)**2))&&(Fh.copy(r).invert(),Wi.copy(t.ray).applyMatrix4(Fh),!(n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],_=Math.max(g.start,d.start),M=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=_,y=M;v<y;v+=3){let w=a.getX(v),T=a.getX(v+1),b=a.getX(v+2);s=Do(this,m,t,n,c,u,h,w,T,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let _=a.getX(g),M=a.getX(g+1),v=a.getX(g+2);s=Do(this,o,t,n,c,u,h,_,M,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],_=Math.max(g.start,d.start),M=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=_,y=M;v<y;v+=3){let w=v,T=v+1,b=v+2;s=Do(this,m,t,n,c,u,h,w,T,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let _=g,M=g+1,v=g+2;s=Do(this,o,t,n,c,u,h,_,M,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function l0(i,t,e,n,s,r,o,a){let l;if(t.side===qe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Vn,a),l===null)return null;Fo.copy(a),Fo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Fo);return c<e.near||c>e.far?null:{distance:c,point:Fo.clone(),object:i}}function Do(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Co),i.getVertexPosition(l,Po),i.getVertexPosition(c,Io);let u=l0(i,t,e,n,Co,Po,Io,Nh);if(u){let h=new G;gi.getBarycoord(Nh,Co,Po,Io,h),s&&(u.uv=gi.getInterpolatedAttribute(s,a,l,c,h,new Qt)),r&&(u.uv1=gi.getInterpolatedAttribute(r,a,l,c,h,new Qt)),o&&(u.normal=gi.getInterpolatedAttribute(o,a,l,c,h,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new G,materialIndex:0};gi.getNormal(Co,Po,Io,f.normal),u.face=f,u.barycoord=h}return u}var oa=class extends Qe{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ge,u=Ge,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xi=new vi,c0=new Qt(.5,.5),No=new G,mr=class{constructor(t=new En,e=new En,n=new En,s=new En,r=new En,o=new En){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=An,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],p=r[8],x=r[9],g=r[10],m=r[11],_=r[12],M=r[13],v=r[14],y=r[15];if(s[0].setComponents(c-o,d-u,m-p,y-_).normalize(),s[1].setComponents(c+o,d+u,m+p,y+_).normalize(),s[2].setComponents(c+a,d+h,m+x,y+M).normalize(),s[3].setComponents(c-a,d-h,m-x,y-M).normalize(),n)s[4].setComponents(l,f,g,v).normalize(),s[5].setComponents(c-l,d-f,m-g,y-v).normalize();else if(s[4].setComponents(c-l,d-f,m-g,y-v).normalize(),e===An)s[5].setComponents(c+l,d+f,m+g,y+v).normalize();else if(e===hr)s[5].setComponents(l,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(t){Xi.center.set(0,0,0);let e=c0.distanceTo(t.center);return Xi.radius=.7071067811865476+e,Xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(No.x=s.normal.x>0?t.max.x:t.min.x,No.y=s.normal.y>0?t.max.y:t.min.y,No.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(No)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Xe=class extends ti{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Q(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},aa=new G,la=new G,Uh=new Se,or=new Zi,Uo=new vi,mc=new G,Oh=new G,ca=class extends cn{constructor(t=new qt,e=new Xe){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)aa.fromBufferAttribute(e,s-1),la.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=aa.distanceTo(la);t.setAttribute("lineDistance",new Nt(n,1))}else zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(s),Uo.radius+=r,t.ray.intersectsSphere(Uo)===!1)return;Uh.copy(s).invert(),or.copy(t.ray).applyMatrix4(Uh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=d,g=p-1;x<g;x+=c){let m=u.getX(x),_=u.getX(x+1),M=Oo(this,t,or,l,m,_,x);M&&e.push(M)}if(this.isLineLoop){let x=u.getX(p-1),g=u.getX(d),m=Oo(this,t,or,l,x,g,p-1);m&&e.push(m)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=d,g=p-1;x<g;x+=c){let m=Oo(this,t,or,l,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){let x=Oo(this,t,or,l,p-1,d,p-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Oo(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(aa.fromBufferAttribute(a,s),la.fromBufferAttribute(a,r),e.distanceSqToSegment(aa,la,mc,Oh)>n)return;mc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(mc);if(!(c<t.near||c>t.far))return{distance:c,point:Oh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Bh=new G,zh=new G,Ye=class extends ca{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Bh.fromBufferAttribute(e,s),zh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Bh.distanceTo(zh);t.setAttribute("lineDistance",new Nt(n,1))}else zt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ji=class extends ti{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Q(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},kh=new Se,yc=new Zi,Bo=new vi,zo=new G,Ns=class extends cn{constructor(t=new qt,e=new Ji){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(s),Bo.radius+=r,t.ray.intersectsSphere(Bo)===!1)return;kh.copy(s).invert(),yc.copy(t.ray).applyMatrix4(kh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,x=d;p<x;p++){let g=c.getX(p);zo.fromBufferAttribute(h,g),Vh(zo,g,l,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let p=f,x=d;p<x;p++)zo.fromBufferAttribute(h,p),Vh(zo,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Vh(i,t,e,n,s,r,o){let a=yc.distanceSqToPoint(i);if(a<e){let l=new G;yc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var gr=class extends Qe{constructor(t=[],e=Ti,n,s,r,o,a,l,c,u){super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ei=class extends Qe{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var _i=class extends Qe{constructor(t,e,n=Cn,s,r,o,a=Ge,l=Ge,c,u=On,h=1){if(u!==On&&u!==Ai)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ls(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ua=class extends _i{constructor(t,e=Cn,n=Ti,s,r,o=Ge,a=Ge,l,c=On){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},xr=class extends Qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Us=class i extends qt{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Nt(c,3)),this.setAttribute("normal",new Nt(u,3)),this.setAttribute("uv",new Nt(h,2));function p(x,g,m,_,M,v,y,w,T,b,S){let E=v/T,P=y/b,A=v/2,I=y/2,R=w/2,L=T+1,N=b+1,U=0,k=0,B=new G;for(let z=0;z<N;z++){let V=z*P-I;for(let st=0;st<L;st++){let $=st*E-A;B[x]=$*_,B[g]=V*M,B[m]=R,c.push(B.x,B.y,B.z),B[x]=0,B[g]=0,B[m]=w>0?1:-1,u.push(B.x,B.y,B.z),h.push(st/T),h.push(1-z/b),U+=1}}for(let z=0;z<b;z++)for(let V=0;V<T;V++){let st=f+V+L*z,$=f+V+L*(z+1),ot=f+(V+1)+L*(z+1),ct=f+(V+1)+L*z;l.push(st,$,ct),l.push($,ot,ct),k+=6}a.addGroup(d,k,S),d+=k,f+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var br=class i extends qt{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new G,u=new Qt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){let d=n+h/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Nt(o,3)),this.setAttribute("normal",new Nt(a,3)),this.setAttribute("uv",new Nt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};function u0(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Bf(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=m0(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let u=a,h=l;for(let f=e;f<s;f+=e){let d=i[f],p=i[f+1];d<a&&(a=d),p<l&&(l=p),d>u&&(u=d),p>h&&(h=p)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return vr(r,o,e,a,l,c,0),o}function Bf(i,t,e,n,s){let r;if(s===E0(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Gh(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Gh(o/n|0,i[o],i[o+1],r);return r&&Os(r,r.next)&&(yr(r),r=r.next),r}function Ki(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Os(e,e.next)||Te(e.prev,e,e.next)===0)){if(yr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function vr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&_0(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?f0(i,n,s,r):h0(i)){t.push(l.i,i.i,c.i),yr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=d0(Ki(i),t),vr(i,t,e,n,s,r,2)):o===2&&p0(i,t,e,n,s,r):vr(Ki(i),t,e,n,s,r,1);break}}}function h0(i){let t=i.prev,e=i,n=i.next;if(Te(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(s,r,o),h=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=u&&p.x<=f&&p.y>=h&&p.y<=d&&ar(s,a,r,l,o,c,p.x,p.y)&&Te(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function f0(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Te(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,f=o.y,d=Math.min(a,l,c),p=Math.min(u,h,f),x=Math.max(a,l,c),g=Math.max(u,h,f),m=Mc(d,p,t,e,n),_=Mc(x,g,t,e,n),M=i.prevZ,v=i.nextZ;for(;M&&M.z>=m&&v&&v.z<=_;){if(M.x>=d&&M.x<=x&&M.y>=p&&M.y<=g&&M!==s&&M!==o&&ar(a,u,l,h,c,f,M.x,M.y)&&Te(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=d&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&ar(a,u,l,h,c,f,v.x,v.y)&&Te(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=m;){if(M.x>=d&&M.x<=x&&M.y>=p&&M.y<=g&&M!==s&&M!==o&&ar(a,u,l,h,c,f,M.x,M.y)&&Te(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=_;){if(v.x>=d&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&ar(a,u,l,h,c,f,v.x,v.y)&&Te(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function d0(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Os(n,s)&&kf(n,e,e.next,s)&&_r(n,s)&&_r(s,n)&&(t.push(n.i,e.i,s.i),yr(e),yr(e.next),e=i=s),e=e.next}while(e!==i);return Ki(e)}function p0(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&S0(o,a)){let l=Vf(o,a);o=Ki(o,o.next),l=Ki(l,l.next),vr(o,t,e,n,s,r,0),vr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function m0(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Bf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(M0(c))}s.sort(g0);for(let r=0;r<s.length;r++)e=x0(s[r],e);return e}function g0(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function x0(i,t){let e=b0(i,t);if(!e)return t;let n=Vf(e,i);return Ki(n,n.next),Ki(e,e.next)}function b0(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Os(i,e))return e;do{if(Os(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let h=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>r&&(r=h,o=e.x<e.next.x?e:e.next,h===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&zf(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let h=Math.abs(s-e.y)/(n-e.x);_r(e,i)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&v0(o,e)))&&(o=e,u=h)}e=e.next}while(e!==a);return o}function v0(i,t){return Te(i.prev,i,t.prev)<0&&Te(t.next,i,i.next)<0}function _0(i,t,e,n){let s=i;do s.z===0&&(s.z=Mc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,y0(s)}function y0(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Mc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function M0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function zf(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function ar(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&zf(i,t,e,n,s,r,o,a)}function S0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!w0(i,t)&&(_r(i,t)&&_r(t,i)&&T0(i,t)&&(Te(i.prev,i,t.prev)||Te(i,t.prev,t))||Os(i,t)&&Te(i.prev,i,i.next)>0&&Te(t.prev,t,t.next)>0)}function Te(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Os(i,t){return i.x===t.x&&i.y===t.y}function kf(i,t,e,n){let s=Vo(Te(i,t,e)),r=Vo(Te(i,t,n)),o=Vo(Te(e,n,i)),a=Vo(Te(e,n,t));return!!(s!==r&&o!==a||s===0&&ko(i,e,t)||r===0&&ko(i,n,t)||o===0&&ko(e,i,n)||a===0&&ko(e,t,n))}function ko(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Vo(i){return i>0?1:i<0?-1:0}function w0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&kf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function _r(i,t){return Te(i.prev,i,i.next)<0?Te(i,t,i.next)>=0&&Te(i,i.prev,t)>=0:Te(i,t,i.prev)<0||Te(i,i.next,t)<0}function T0(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Vf(i,t){let e=Sc(i.i,i.x,i.y),n=Sc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Gh(i,t,e,n){let s=Sc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function yr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Sc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function E0(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var wc=class{static triangulate(t,e,n=2){return u0(t,e,n)}},Mr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Hh(t),Wh(n,t);let o=t.length;e.forEach(Hh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Wh(n,e[l]);let a=wc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Hh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Wh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ni=class i extends qt{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=t/a,f=e/l,d=[],p=[],x=[],g=[];for(let m=0;m<u;m++){let _=m*f-o;for(let M=0;M<c;M++){let v=M*h-r;p.push(v,-_,0),x.push(0,0,1),g.push(M/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){let M=_+c*m,v=_+c*(m+1),y=_+1+c*(m+1),w=_+1+c*m;d.push(M,v,w),d.push(v,y,w)}this.setIndex(d),this.setAttribute("position",new Nt(p,3)),this.setAttribute("normal",new Nt(x,3)),this.setAttribute("uv",new Nt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Sr=class i extends qt{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=t,f=(e-t)/s,d=new G,p=new Qt;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let m=r+g/n*o;d.x=h*Math.cos(m),d.y=h*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,u.push(p.x,p.y)}h+=f}for(let x=0;x<s;x++){let g=x*(n+1);for(let m=0;m<n;m++){let _=m+g,M=_,v=_+n+1,y=_+n+2,w=_+1;a.push(M,v,w),a.push(v,y,w)}}this.setIndex(a),this.setAttribute("position",new Nt(l,3)),this.setAttribute("normal",new Nt(c,3)),this.setAttribute("uv",new Nt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function ts(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Xh(s))s.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Xh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function nn(i){let t={};for(let e=0;e<i.length;e++){let n=ts(i[e]);for(let s in n)t[s]=n[s]}return t}function Xh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function A0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function jc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var Gf={clone:ts,merge:nn},R0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,C0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,en=class extends ti{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=R0,this.fragmentShader=C0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ts(t.uniforms),this.uniformsGroups=A0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Q().setHex(s.value);break;case"v2":this.uniforms[n].value=new Qt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ee().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Xt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Se().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ha=class extends en{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var fa=class extends ti{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},da=class extends ti{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ws(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function gc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var yi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},pa=class extends yi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bc,endingEnd:bc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case vc:r=t,a=2*e-n;break;case _c:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case vc:o=t,l=2*n-e;break;case _c:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(s-e),x=p*p,g=x*p,m=-f*g+2*f*x-f*p,_=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*p+1,M=(-1-d)*g+(1.5+d)*x+.5*p,v=d*g-d*x;for(let y=0;y!==a;++y)r[y]=m*o[u+y]+_*o[c+y]+M*o[l+y]+v*o[h+y];return r}},ma=class extends yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(s-e),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},ga=class extends yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},xa=class extends yi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(n-e)/(s-e),x=1-p;for(let g=0;g!==a;++g)r[g]=o[c+g]*x+o[l+g]*p;return r}let f=a*2,d=t-1;for(let p=0;p!==a;++p){let x=o[c+p],g=o[l+p],m=d*f+p*2,_=h[m],M=h[m+1],v=t*f+p*2,y=u[v],w=u[v+1],T=I0(n,e,_,y,s);r[p]=Hf(T,x,M,w,g)}return r}};function Hf(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function P0(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function I0(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Hf(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=P0(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var dn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ws(e,this.TimeBufferType),this.values=ws(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ws(t.times,Array),values:ws(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),gc(t.settings)&&(n.settings={inTangents:ws(t.settings.inTangents,Array),outTangents:ws(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ga(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ma(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new pa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new xa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case lr:e=this.InterpolantFactoryMethodDiscrete;break;case ea:e=this.InterpolantFactoryMethodLinear;break;case Wo:e=this.InterpolantFactoryMethodSmooth;break;case xc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lr;case this.InterpolantFactoryMethodLinear:return ea;case this.InterpolantFactoryMethodSmooth:return Wo;case this.InterpolantFactoryMethodBezier:return xc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;gc(this.settings)&&(Yh(this.settings.inTangents,t),Yh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Vt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Vt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Vt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Vt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Wm(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Vt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Wo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let p=0;p!==n;++p){let x=e[h+p];if(x!==e[f+p]||x!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[h+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,gc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Yh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}dn.prototype.ValueTypeName="";dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=ea;var Mi=class extends dn{constructor(t,e,n){super(t,e,n)}};Mi.prototype.ValueTypeName="bool";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=lr;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var ba=class extends dn{constructor(t,e,n,s){super(t,e,n,s)}};ba.prototype.ValueTypeName="color";var va=class extends dn{constructor(t,e,n,s){super(t,e,n,s)}};va.prototype.ValueTypeName="number";var _a=class extends yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let u=c+a;c!==u;c+=4)zn.slerpFlat(r,0,o,c-a,o,c,l);return r}},wr=class extends dn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new _a(this.times,this.values,this.getValueSize(),t)}};wr.prototype.ValueTypeName="quaternion";wr.prototype.InterpolantFactoryMethodSmooth=void 0;var Si=class extends dn{constructor(t,e,n){super(t,e,n)}};Si.prototype.ValueTypeName="string";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=lr;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var ya=class extends dn{constructor(t,e,n,s){super(t,e,n,s)}};ya.prototype.ValueTypeName="vector";var Yo={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(qh(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!qh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function qh(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Ma=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],p=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Wf=new Ma,Bs=class{constructor(t){this.manager=t!==void 0?t:Wf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Bs.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ts=new WeakMap,Sa=class extends Bs{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Yo.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let h=Ts.get(o);h===void 0&&(h=[],Ts.set(o,h)),h.push({onLoad:e,onError:s})}return o}let a=Ps("img");function l(){u(),e&&e(this);let h=Ts.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];d.onLoad&&d.onLoad(this)}Ts.delete(this),r.manager.itemEnd(t)}function c(h){u(),s&&s(h),Yo.remove(`image:${t}`);let f=Ts.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(h)}Ts.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Yo.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}};var Tr=class extends Bs{constructor(t){super(t)}load(t,e,n,s){let r=new Qe,o=new Sa(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}};var Go=new G,Ho=new zn,Un=new G,Er=class extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Go,Ho,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Go,Ho,Un.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Go,Ho,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Go,Ho,Un.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},mi=new G,$h=new Qt,Zh=new Qt,je=class extends Er{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=na*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan($l*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return na*2*Math.atan(Math.tan($l*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mi.x,mi.y).multiplyScalar(-t/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-t/mi.z)}getViewSize(t,e){return this.getViewBounds(t,$h,Zh),e.subVectors(Zh,$h)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan($l*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var kn=class extends Er{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Es=-90,As=1,wa=class extends cn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new je(Es,As,t,e);s.layers=this.layers,this.add(s);let r=new je(Es,As,t,e);r.layers=this.layers,this.add(r);let o=new je(Es,As,t,e);o.layers=this.layers,this.add(o);let a=new je(Es,As,t,e);a.layers=this.layers,this.add(a);let l=new je(Es,As,t,e);l.layers=this.layers,this.add(l);let c=new je(Es,As,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===An)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ta=class extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Qc="\\[\\]\\.:\\/",L0=new RegExp("["+Qc+"]","g"),tu="[^"+Qc+"]",F0="[^"+Qc.replace("\\.","")+"]",D0=/((?:WC+[\/:])*)/.source.replace("WC",tu),N0=/(WCOD+)?/.source.replace("WCOD",F0),U0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tu),O0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tu),B0=new RegExp("^"+D0+N0+U0+O0+"$"),z0=["material","materials","bones","map"],Tc=class{constructor(t,e,n){let s=n||ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ye=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(L0,"")}static parseTrackName(t){let e=B0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);z0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Vt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Vt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Vt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Vt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Vt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Vt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ye.Composite=Tc;ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ye.prototype.GetterByBindingType=[ye.prototype._getValue_direct,ye.prototype._getValue_array,ye.prototype._getValue_arrayElement,ye.prototype._getValue_toArray];ye.prototype.SetterByBindingTypeAndVersioning=[[ye.prototype._setValue_direct,ye.prototype._setValue_direct_setNeedsUpdate,ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_array,ye.prototype._setValue_array_setNeedsUpdate,ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_arrayElement,ye.prototype._setValue_arrayElement_setNeedsUpdate,ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_fromArray,ye.prototype._setValue_fromArray_setNeedsUpdate,ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var FM=new Float32Array(1);var Jh=new Se,Ar=class{constructor(t,e,n=0,s=1/0){this.ray=new Zi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Fs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Vt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Jh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jh),this}intersectObject(t,e=!0,n=[]){return Ec(t,this,n,e),n.sort(Kh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ec(t[s],this,n,e);return n.sort(Kh),n}};function Kh(i,t){return i.distance-t.distance}function Ec(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Ec(r[o],t,e,!0)}}var ou=class ou{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};ou.prototype.isMatrix2=!0;var Ac=ou;function eu(i,t,e,n){let s=k0(n);switch(e){case Xc:return i*t;case qc:return i*t/s.components*s.byteLength;case Fa:return i*t/s.components*s.byteLength;case Ri:return i*t*2/s.components*s.byteLength;case Da:return i*t*2/s.components*s.byteLength;case Yc:return i*t*3/s.components*s.byteLength;case vn:return i*t*4/s.components*s.byteLength;case Na:return i*t*4/s.components*s.byteLength;case Lr:case Fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Dr:case Nr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oa:case za:return Math.max(i,16)*Math.max(t,8)/4;case Ua:case Ba:return Math.max(i,8)*Math.max(t,8)/2;case ka:case Va:case Ha:case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ga:case Ur:case Xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case $a:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ja:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case tl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case el:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case nl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case il:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case sl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case rl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ol:case al:case ll:return Math.ceil(i/4)*Math.ceil(t/4)*16;case cl:case ul:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Or:case hl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function k0(i){switch(i){case pn:case Vc:return{byteLength:1,components:1};case ks:case Gc:case In:return{byteLength:2,components:1};case Ia:case La:return{byteLength:2,components:4};case Cn:case Pa:case Pn:return{byteLength:4,components:1};case Hc:case Wc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function fd(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function G0(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<h.length;d++){let p=h[f],x=h[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,p=h.length;d<p;d++){let x=h[d];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var H0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,W0=`#ifdef USE_ALPHAHASH
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
#endif`,X0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Y0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,q0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Z0=`#ifdef USE_AOMAP
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
#endif`,J0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,K0=`#ifdef USE_BATCHING
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
#endif`,j0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Q0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ng=`#ifdef USE_IRIDESCENCE
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
#endif`,ig=`#ifdef USE_BUMPMAP
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
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ug=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,fg=`#define PI 3.141592653589793
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
} // validated`,dg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pg=`vec3 transformedNormal = objectNormal;
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
#endif`,mg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vg="gl_FragColor = linearToOutputTexel( gl_FragColor );",_g=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yg=`#ifdef USE_ENVMAP
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
#endif`,Mg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Sg=`#ifdef USE_ENVMAP
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
#endif`,wg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tg=`#ifdef USE_ENVMAP
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
#endif`,Eg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ag=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pg=`#ifdef USE_GRADIENTMAP
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
}`,Ig=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ng=`#ifdef USE_ENVMAP
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
#endif`,Ug=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zg=`varying vec3 vViewPosition;
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
#endif`,Vg=`uniform sampler2D dfgLUT;
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
}`,Gg=`
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
#endif`,Hg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Yg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$g=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qg=`#if defined( USE_POINTS_UV )
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
#endif`,tx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ex=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ix=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rx=`#ifdef USE_MORPHTARGETS
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
#endif`,ox=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ax=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,fx=`#ifdef USE_NORMALMAP
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
#endif`,dx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,px=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_x=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ex=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ax=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rx=`float getShadowMask() {
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
}`,Cx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Px=`#ifdef USE_SKINNING
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
#endif`,Ix=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lx=`#ifdef USE_SKINNING
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
#endif`,Fx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ux=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ox=`#ifdef USE_TRANSMISSION
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
#endif`,Bx=`#ifdef USE_TRANSMISSION
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
#endif`,zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Hx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wx=`uniform sampler2D t2D;
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
}`,Xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$x=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zx=`#include <common>
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
}`,Jx=`#if DEPTH_PACKING == 3200
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
}`,Kx=`#define DISTANCE
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
}`,jx=`#define DISTANCE
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
}`,Qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eb=`uniform float scale;
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
}`,nb=`uniform vec3 diffuse;
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
}`,ib=`#include <common>
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
}`,sb=`uniform vec3 diffuse;
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
}`,rb=`#define LAMBERT
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
}`,ob=`#define LAMBERT
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
}`,ab=`#define MATCAP
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
}`,lb=`#define MATCAP
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
}`,cb=`#define NORMAL
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
}`,ub=`#define NORMAL
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
}`,hb=`#define PHONG
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
}`,fb=`#define PHONG
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
}`,db=`#define STANDARD
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
}`,pb=`#define STANDARD
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
}`,mb=`#define TOON
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
}`,gb=`#define TOON
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
}`,xb=`uniform float size;
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
}`,bb=`uniform vec3 diffuse;
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
}`,vb=`#include <common>
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
}`,_b=`uniform vec3 color;
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
}`,yb=`uniform float rotation;
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
}`,Mb=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:H0,alphahash_pars_fragment:W0,alphamap_fragment:X0,alphamap_pars_fragment:Y0,alphatest_fragment:q0,alphatest_pars_fragment:$0,aomap_fragment:Z0,aomap_pars_fragment:J0,batching_pars_vertex:K0,batching_vertex:j0,begin_vertex:Q0,beginnormal_vertex:tg,bsdfs:eg,iridescence_fragment:ng,bumpmap_pars_fragment:ig,clipping_planes_fragment:sg,clipping_planes_pars_fragment:rg,clipping_planes_pars_vertex:og,clipping_planes_vertex:ag,color_fragment:lg,color_pars_fragment:cg,color_pars_vertex:ug,color_vertex:hg,common:fg,cube_uv_reflection_fragment:dg,defaultnormal_vertex:pg,displacementmap_pars_vertex:mg,displacementmap_vertex:gg,emissivemap_fragment:xg,emissivemap_pars_fragment:bg,colorspace_fragment:vg,colorspace_pars_fragment:_g,envmap_fragment:yg,envmap_common_pars_fragment:Mg,envmap_pars_fragment:Sg,envmap_pars_vertex:wg,envmap_physical_pars_fragment:Ng,envmap_vertex:Tg,fog_vertex:Eg,fog_pars_vertex:Ag,fog_fragment:Rg,fog_pars_fragment:Cg,gradientmap_pars_fragment:Pg,lightmap_pars_fragment:Ig,lights_lambert_fragment:Lg,lights_lambert_pars_fragment:Fg,lights_pars_begin:Dg,lights_toon_fragment:Ug,lights_toon_pars_fragment:Og,lights_phong_fragment:Bg,lights_phong_pars_fragment:zg,lights_physical_fragment:kg,lights_physical_pars_fragment:Vg,lights_fragment_begin:Gg,lights_fragment_maps:Hg,lights_fragment_end:Wg,lightprobes_pars_fragment:Xg,logdepthbuf_fragment:Yg,logdepthbuf_pars_fragment:qg,logdepthbuf_pars_vertex:$g,logdepthbuf_vertex:Zg,map_fragment:Jg,map_pars_fragment:Kg,map_particle_fragment:jg,map_particle_pars_fragment:Qg,metalnessmap_fragment:tx,metalnessmap_pars_fragment:ex,morphinstance_vertex:nx,morphcolor_vertex:ix,morphnormal_vertex:sx,morphtarget_pars_vertex:rx,morphtarget_vertex:ox,normal_fragment_begin:ax,normal_fragment_maps:lx,normal_pars_fragment:cx,normal_pars_vertex:ux,normal_vertex:hx,normalmap_pars_fragment:fx,clearcoat_normal_fragment_begin:dx,clearcoat_normal_fragment_maps:px,clearcoat_pars_fragment:mx,iridescence_pars_fragment:gx,opaque_fragment:xx,packing:bx,premultiplied_alpha_fragment:vx,project_vertex:_x,dithering_fragment:yx,dithering_pars_fragment:Mx,roughnessmap_fragment:Sx,roughnessmap_pars_fragment:wx,shadowmap_pars_fragment:Tx,shadowmap_pars_vertex:Ex,shadowmap_vertex:Ax,shadowmask_pars_fragment:Rx,skinbase_vertex:Cx,skinning_pars_vertex:Px,skinning_vertex:Ix,skinnormal_vertex:Lx,specularmap_fragment:Fx,specularmap_pars_fragment:Dx,tonemapping_fragment:Nx,tonemapping_pars_fragment:Ux,transmission_fragment:Ox,transmission_pars_fragment:Bx,uv_pars_fragment:zx,uv_pars_vertex:kx,uv_vertex:Vx,worldpos_vertex:Gx,background_vert:Hx,background_frag:Wx,backgroundCube_vert:Xx,backgroundCube_frag:Yx,cube_vert:qx,cube_frag:$x,depth_vert:Zx,depth_frag:Jx,distance_vert:Kx,distance_frag:jx,equirect_vert:Qx,equirect_frag:tb,linedashed_vert:eb,linedashed_frag:nb,meshbasic_vert:ib,meshbasic_frag:sb,meshlambert_vert:rb,meshlambert_frag:ob,meshmatcap_vert:ab,meshmatcap_frag:lb,meshnormal_vert:cb,meshnormal_frag:ub,meshphong_vert:hb,meshphong_frag:fb,meshphysical_vert:db,meshphysical_frag:pb,meshtoon_vert:mb,meshtoon_frag:gb,points_vert:xb,points_frag:bb,shadow_vert:vb,shadow_frag:_b,sprite_vert:yb,sprite_frag:Mb},yt={common:{diffuse:{value:new Q(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new Qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Q(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new Q(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Q(16777215)},opacity:{value:1},center:{value:new Qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Wn={basic:{uniforms:nn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:nn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Q(0)},envMapIntensity:{value:1}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:nn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Q(0)},specular:{value:new Q(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:nn([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Q(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:nn([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Q(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:nn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:nn([yt.points,yt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:nn([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:nn([yt.common,yt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:nn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:nn([yt.sprite,yt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distance:{uniforms:nn([yt.common,yt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distance_vert,fragmentShader:jt.distance_frag},shadow:{uniforms:nn([yt.lights,yt.fog,{color:{value:new Q(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Wn.physical={uniforms:nn([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new Qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Q(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new Qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Q(0)},specularColor:{value:new Q(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new Qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};var pl={r:0,b:0,g:0},Sb=new Se,dd=new Xt;dd.set(-1,0,0,0,1,0,0,0,1);function wb(i,t,e,n,s,r){let o=new Q(0),a=s===!0?0:1,l,c,u=null,h=0,f=null;function d(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){let v=_.backgroundBlurriness>0;M=t.get(M,v)}return M}function p(_){let M=!1,v=d(_);v===null?g(o,a):v&&v.isColor&&(g(v,1),M=!0);let y=i.xr.getEnvironmentBlendMode();y==="additive"?e.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(_,M){let v=d(M);v&&(v.isCubeTexture||v.mapping===Pr)?(c===void 0&&(c=new Ut(new Us(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:ts(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Sb.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(dd),c.material.toneMapped=oe.getTransfer(v.colorSpace)!==pe,(u!==v||h!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ut(new ni(2,2),new en({name:"BackgroundMaterial",uniforms:ts(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=oe.getTransfer(v.colorSpace)!==pe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,f=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,M){_.getRGB(pl,jc(i)),e.buffers.color.setClear(pl.r,pl.g,pl.b,M,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,M=1){o.set(_),a=M,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,g(o,a)},render:p,addToRenderList:x,dispose:m}}function Tb(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(P,A,I,R,L){let N=!1,U=h(P,R,I,A);r!==U&&(r=U,c(r.object)),N=d(P,R,I,L),N&&p(P,R,I,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,v(P,A,I,R),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function u(P){return i.deleteVertexArray(P)}function h(P,A,I,R){let L=R.wireframe===!0,N=n[A.id];N===void 0&&(N={},n[A.id]=N);let U=P.isInstancedMesh===!0?P.id:0,k=N[U];k===void 0&&(k={},N[U]=k);let B=k[I.id];B===void 0&&(B={},k[I.id]=B);let z=B[L];return z===void 0&&(z=f(l()),B[L]=z),z}function f(P){let A=[],I=[],R=[];for(let L=0;L<e;L++)A[L]=0,I[L]=0,R[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:I,attributeDivisors:R,object:P,attributes:{},index:null}}function d(P,A,I,R){let L=r.attributes,N=A.attributes,U=0,k=I.getAttributes();for(let B in k)if(k[B].location>=0){let V=L[B],st=N[B];if(st===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(st=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(st=P.instanceColor)),V===void 0||V.attribute!==st||st&&V.data!==st.data)return!0;U++}return r.attributesNum!==U||r.index!==R}function p(P,A,I,R){let L={},N=A.attributes,U=0,k=I.getAttributes();for(let B in k)if(k[B].location>=0){let V=N[B];V===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(V=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(V=P.instanceColor));let st={};st.attribute=V,V&&V.data&&(st.data=V.data),L[B]=st,U++}r.attributes=L,r.attributesNum=U,r.index=R}function x(){let P=r.newAttributes;for(let A=0,I=P.length;A<I;A++)P[A]=0}function g(P){m(P,0)}function m(P,A){let I=r.newAttributes,R=r.enabledAttributes,L=r.attributeDivisors;I[P]=1,R[P]===0&&(i.enableVertexAttribArray(P),R[P]=1),L[P]!==A&&(i.vertexAttribDivisor(P,A),L[P]=A)}function _(){let P=r.newAttributes,A=r.enabledAttributes;for(let I=0,R=A.length;I<R;I++)A[I]!==P[I]&&(i.disableVertexAttribArray(I),A[I]=0)}function M(P,A,I,R,L,N,U){U===!0?i.vertexAttribIPointer(P,A,I,L,N):i.vertexAttribPointer(P,A,I,R,L,N)}function v(P,A,I,R){x();let L=R.attributes,N=I.getAttributes(),U=A.defaultAttributeValues;for(let k in N){let B=N[k];if(B.location>=0){let z=L[k];if(z===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(z=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(z=P.instanceColor)),z!==void 0){let V=z.normalized,st=z.itemSize,$=t.get(z);if($===void 0)continue;let ot=$.buffer,ct=$.type,pt=$.bytesPerElement,q=ct===i.INT||ct===i.UNSIGNED_INT||z.gpuType===Pa;if(z.isInterleavedBufferAttribute){let X=z.data,it=X.stride,ut=z.offset;if(X.isInstancedInterleavedBuffer){for(let ht=0;ht<B.locationSize;ht++)m(B.location+ht,X.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ht=0;ht<B.locationSize;ht++)g(B.location+ht);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let ht=0;ht<B.locationSize;ht++)M(B.location+ht,st/B.locationSize,ct,V,it*pt,(ut+st/B.locationSize*ht)*pt,q)}else{if(z.isInstancedBufferAttribute){for(let X=0;X<B.locationSize;X++)m(B.location+X,z.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let X=0;X<B.locationSize;X++)g(B.location+X);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let X=0;X<B.locationSize;X++)M(B.location+X,st/B.locationSize,ct,V,st*pt,st/B.locationSize*X*pt,q)}}else if(U!==void 0){let V=U[k];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(B.location,V);break;case 3:i.vertexAttrib3fv(B.location,V);break;case 4:i.vertexAttrib4fv(B.location,V);break;default:i.vertexAttrib1fv(B.location,V)}}}}_()}function y(){S();for(let P in n){let A=n[P];for(let I in A){let R=A[I];for(let L in R){let N=R[L];for(let U in N)u(N[U].object),delete N[U];delete R[L]}}delete n[P]}}function w(P){if(n[P.id]===void 0)return;let A=n[P.id];for(let I in A){let R=A[I];for(let L in R){let N=R[L];for(let U in N)u(N[U].object),delete N[U];delete R[L]}}delete n[P.id]}function T(P){for(let A in n){let I=n[A];for(let R in I){let L=I[R];if(L[P.id]===void 0)continue;let N=L[P.id];for(let U in N)u(N[U].object),delete N[U];delete L[P.id]}}}function b(P){for(let A in n){let I=n[A],R=P.isInstancedMesh===!0?P.id:0,L=I[R];if(L!==void 0){for(let N in L){let U=L[N];for(let k in U)u(U[k].object),delete U[k];delete L[N]}delete I[R],Object.keys(I).length===0&&delete n[A]}}}function S(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:S,resetDefaultState:E,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function Eb(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Ab(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==vn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let b=T===In&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==pn&&T!==Pn&&!b&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(zt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:v,maxSamples:y,samples:w}}function Rb(i){let t=this,e=null,n=0,s=!1,r=!1,o=new En,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){let p=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!s||p===null||p.length===0||r&&!g)r?u(null):c();else{let _=r?0:n,M=_*4,v=m.clippingState||null;l.value=v,v=u(p,f,M,d);for(let y=0;y!==M;++y)v[y]=e[y];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,p){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=d+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,v=d;M!==x;++M,v+=4)o.copy(h[M]).applyMatrix4(_,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var Hs=4,Cb=6,Pb=20,Ib=256,zr=new kn,Xf=new Q,au=null,lu=0,cu=0,uu=!1,Lb=new G,es=new G,gl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Lb}=r;au=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$f(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(au,lu,cu),this._renderer.xr.enabled=uu,t.scissorTest=!1,Gs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ti||t.mapping===Qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),au=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:We,minFilter:We,generateMipmaps:!1,type:In,format:vn,colorSpace:cr,depthBuffer:!1},s=Yf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Fb(r)),this._blurMaterial=Nb(r,t,e),this._ggxMaterial=Db(r,t,e)}return s}_compileMaterial(t){let e=new Ut(new qt,t);this._renderer.compile(e,zr)}_sceneToCubeUV(t,e,n,s,r){let l=new je(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Xf),h.toneMapping=Rn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ut(new Us,new ie({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,_=t.background;_?_.isColor&&(g.color.copy(_),t.background=null,m=!0):(g.color.copy(Xf),m=!0);for(let M=0;M<6;M++){let v=M%3;v===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[M],r.y,r.z)):v===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[M]));let y=this._cubeSize;Gs(s,v*y,M>2?y:0,y,y),h.setRenderTarget(s),m&&h.render(x,l),h.render(t,l)}h.toneMapping=d,h.autoClear=f,t.background=_}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ti||t.mapping===Qi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$f()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Gs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,zr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=c*1.25,d=h*f,{_lodMax:p}=this,x=this._sizeLods[n],g=3*x*(n>p-Hs?n-p+Hs:0),m=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,Gs(r,g,m,3*x,2*x),s.setRenderTarget(r),s.render(a,zr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Gs(t,g,m,3*x,2*x),s.setRenderTarget(t),s.render(a,zr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],h=3*u*(s>this._lodMax-Hs?s-this._lodMax+Hs:0),f=4*(this._cubeSize-u);Gs(e,h,f,3*u,2*u),o.setRenderTarget(e),o.render(l,zr)}};function Fb(i){let t=[],e=[],n=i,s=i-Hs+1+Cb;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,f=6,d=3,p=new Float32Array(d*f*h),x=new Float32Array(d*f*h);for(let m=0;m<h;m++){let _=m%3*2/3-1,M=m>2?0:-1,v=[_,M,0,_+2/3,M,0,_+2/3,M+1,0,_,M,0,_+2/3,M+1,0,_,M+1,0];p.set(v,d*f*m);for(let y=0;y<f;y++){let w=u[y*2]*2-1,T=u[y*2+1]*2-1;m===0?es.set(1,T,w):m===1?es.set(-w,1,-T):m===2?es.set(-w,T,1):m===3?es.set(-1,T,-w):m===4?es.set(-w,-1,T):es.set(w,T,-1),es.toArray(x,(m*f+y)*d)}}let g=new qt;g.setAttribute("position",new bn(p,d)),g.setAttribute("outputDirection",new bn(x,d)),e.push(new Ut(g,null)),n>Hs&&n--}return{lodMeshes:e,sizeLods:t}}function Yf(i,t,e){let n=new tn(i,t,e);return n.texture.mapping=Pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Db(i,t,e){return new en({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ib,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bl(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Nb(i,t,e){return new en({name:"SphericalGaussianBlur",defines:{SAMPLES:Pb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:bl(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function qf(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bl(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function $f(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function bl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var xl=class extends tn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new gr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Us(5,5,5),r=new en({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:Gn});r.uniforms.tEquirect.value=e;let o=new Ut(s,r),a=e.minFilter;return e.minFilter===Ei&&(e.minFilter=We),new wa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function Ub(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Aa||d===Ra)if(t.has(f)){let p=t.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let x=new xl(p.height);return x.fromEquirectangularTexture(i,f),t.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,p=d===Aa||d===Ra,x=d===Ti||d===Qi;if(p||x){let g=e.get(f),m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new gl(i)),g=p?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let _=f.image;return p&&_&&_.height>0||x&&_&&l(_)?(n===null&&(n=new gl(i)),g=p?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function a(f,d){return d===Aa?f.mapping=Ti:d===Ra&&(f.mapping=Qi),f}function l(f){let d=0,p=6;for(let x=0;x<p;x++)f[x]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function Ob(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Yi("WebGLRenderer: "+n+" extension not supported."),s}}}function Bb(i,t,e,n){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){let f=h.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(h){let f=[],d=h.index,p=h.attributes.position,x=0;if(p===void 0)return;if(d!==null){let _=d.array;x=d.version;for(let M=0,v=_.length;M<v;M+=3){let y=_[M+0],w=_[M+1],T=_[M+2];f.push(y,w,w,T,T,y)}}else{let _=p.array;x=p.version;for(let M=0,v=_.length/3-1;M<v;M+=3){let y=M+0,w=M+1,T=M+2;f.push(y,w,w,T,T,y)}}let g=new(p.count>=65535?$i:pr)(f,1);g.version=x;let m=r.get(h);m&&t.remove(m),r.set(h,g)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function zb(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){i.drawElements(n,f,r,h*o),e.update(f,n,1)}function c(h,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,h*o,d),e.update(f,n,d))}function u(h,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,d);let x=0;for(let g=0;g<d;g++)x+=f[g];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function kb(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Vt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Vb(i,t,e){let n=new WeakMap,s=new Ee;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let S=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],M=0;d===!0&&(M=1),p===!0&&(M=2),x===!0&&(M=3);let v=a.attributes.position.count*M,y=1;v>t.maxTextureSize&&(y=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*y*4*h),T=new fr(w,v,y,h);T.type=Pn,T.needsUpdate=!0;let b=M*4;for(let E=0;E<h;E++){let P=g[E],A=m[E],I=_[E],R=v*y*4*E;for(let L=0;L<P.count;L++){let N=L*b;d===!0&&(s.fromBufferAttribute(P,L),w[R+N+0]=s.x,w[R+N+1]=s.y,w[R+N+2]=s.z,w[R+N+3]=0),p===!0&&(s.fromBufferAttribute(A,L),w[R+N+4]=s.x,w[R+N+5]=s.y,w[R+N+6]=s.z,w[R+N+7]=0),x===!0&&(s.fromBufferAttribute(I,L),w[R+N+8]=s.x,w[R+N+9]=s.y,w[R+N+10]=s.z,w[R+N+11]=I.itemSize===4?s.w:1)}}f={count:h,texture:T,size:new Qt(v,y)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Gb(i,t,e,n,s){let r=new WeakMap;function o(c){let u=s.render.frame,h=c.geometry,f=t.get(c,h);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var Hb={[Fc]:"LINEAR_TONE_MAPPING",[Dc]:"REINHARD_TONE_MAPPING",[Nc]:"CINEON_TONE_MAPPING",[Uc]:"ACES_FILMIC_TONE_MAPPING",[Bc]:"AGX_TONE_MAPPING",[zc]:"NEUTRAL_TONE_MAPPING",[Oc]:"CUSTOM_TONE_MAPPING"};function Wb(i,t,e,n,s,r){let o=new tn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new qt;c.setAttribute("position",new Nt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Nt([0,2,0,0,2,0],2));let u=new ha({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Ut(c,u),f=new kn(-1,1,1,-1,0,1),d=null,p=null,x=!1,g,m=null,_=[],M=!1;this.setSize=function(v,y){o.setSize(v,y),a!==null&&a.setSize(v,y),l!==null&&l.setSize(v,y);for(let w=0;w<_.length;w++){let T=_[w];T.setSize&&T.setSize(v,y)}},this.setEffects=function(v){_=v,M=_.length>0&&_[0].isRenderPass===!0;let y=o.width,w=o.height;_.length>0&&a===null&&(a=new tn(y,w,{type:In,depthBuffer:!1,stencilBuffer:!1}),l=new tn(y,w,{type:In,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<_.length;T++){let b=_[T];b.setSize&&b.setSize(y,w)}},this.begin=function(v,y){if(x||v.toneMapping===Rn&&_.length===0)return!1;if(m=y,y!==null){let w=y.width,T=y.height;(o.width!==w||o.height!==T)&&this.setSize(w,T)}return M===!1&&v.setRenderTarget(o),g=v.toneMapping,v.toneMapping=Rn,!0},this.hasRenderPass=function(){return M},this.end=function(v,y){v.toneMapping=g,x=!0;let w=o,T=a;for(let b=0;b<_.length;b++){let S=_[b];S.enabled!==!1&&(S.render(v,T,w,y),S.needsSwap!==!1&&(w=T,T=T===a?l:a))}if(d!==v.outputColorSpace||p!==v.toneMapping){d=v.outputColorSpace,p=v.toneMapping,u.defines={},oe.getTransfer(d)===pe&&(u.defines.SRGB_TRANSFER="");let b=Hb[p];b&&(u.defines[b]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(m),v.render(h,f),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var pd=new Qe,du=new _i(1,1),md=new fr,gd=new ra,xd=new gr,Zf=[],Jf=[],Kf=new Float32Array(16),jf=new Float32Array(9),Qf=new Float32Array(4);function Xs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Zf[s];if(r===void 0&&(r=new Float32Array(s),Zf[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function vl(i,t){let e=Jf[t];e===void 0&&(e=new Int32Array(t),Jf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Xb(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Yb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function qb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function $b(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function Zb(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Qf.set(n),i.uniformMatrix2fv(this.addr,!1,Qf),Be(e,n)}}function Jb(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;jf.set(n),i.uniformMatrix3fv(this.addr,!1,jf),Be(e,n)}}function Kb(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Kf.set(n),i.uniformMatrix4fv(this.addr,!1,Kf),Be(e,n)}}function jb(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Qb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function tv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function ev(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function nv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function iv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function sv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function rv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function ov(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(du.compareFunction=e.isReversedDepthBuffer()?dl:fl,r=du):r=pd,e.setTexture2D(t||r,s)}function av(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||gd,s)}function lv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||xd,s)}function cv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||md,s)}function uv(i){switch(i){case 5126:return Xb;case 35664:return Yb;case 35665:return qb;case 35666:return $b;case 35674:return Zb;case 35675:return Jb;case 35676:return Kb;case 5124:case 35670:return jb;case 35667:case 35671:return Qb;case 35668:case 35672:return tv;case 35669:case 35673:return ev;case 5125:return nv;case 36294:return iv;case 36295:return sv;case 36296:return rv;case 35678:case 36198:case 36298:case 36306:case 35682:return ov;case 35679:case 36299:case 36307:return av;case 35680:case 36300:case 36308:case 36293:return lv;case 36289:case 36303:case 36311:case 36292:return cv}}function hv(i,t){i.uniform1fv(this.addr,t)}function fv(i,t){let e=Xs(t,this.size,2);i.uniform2fv(this.addr,e)}function dv(i,t){let e=Xs(t,this.size,3);i.uniform3fv(this.addr,e)}function pv(i,t){let e=Xs(t,this.size,4);i.uniform4fv(this.addr,e)}function mv(i,t){let e=Xs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function gv(i,t){let e=Xs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function xv(i,t){let e=Xs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function bv(i,t){i.uniform1iv(this.addr,t)}function vv(i,t){i.uniform2iv(this.addr,t)}function _v(i,t){i.uniform3iv(this.addr,t)}function yv(i,t){i.uniform4iv(this.addr,t)}function Mv(i,t){i.uniform1uiv(this.addr,t)}function Sv(i,t){i.uniform2uiv(this.addr,t)}function wv(i,t){i.uniform3uiv(this.addr,t)}function Tv(i,t){i.uniform4uiv(this.addr,t)}function Ev(i,t,e){let n=this.cache,s=t.length,r=vl(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=du:o=pd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Av(i,t,e){let n=this.cache,s=t.length,r=vl(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||gd,r[o])}function Rv(i,t,e){let n=this.cache,s=t.length,r=vl(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||xd,r[o])}function Cv(i,t,e){let n=this.cache,s=t.length,r=vl(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||md,r[o])}function Pv(i){switch(i){case 5126:return hv;case 35664:return fv;case 35665:return dv;case 35666:return pv;case 35674:return mv;case 35675:return gv;case 35676:return xv;case 5124:case 35670:return bv;case 35667:case 35671:return vv;case 35668:case 35672:return _v;case 35669:case 35673:return yv;case 5125:return Mv;case 36294:return Sv;case 36295:return wv;case 36296:return Tv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ev;case 35679:case 36299:case 36307:return Av;case 35680:case 36300:case 36308:case 36293:return Rv;case 36289:case 36303:case 36311:case 36292:return Cv}}var pu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=uv(e.type)}},mu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Pv(e.type)}},gu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},hu=/(\w+)(\])?(\[|\.)?/g;function td(i,t){i.seq.push(t),i.map[t.id]=t}function Iv(i,t,e){let n=i.name,s=n.length;for(hu.lastIndex=0;;){let r=hu.exec(n),o=hu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){td(e,c===void 0?new pu(a,i,t):new mu(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new gu(a),td(e,h)),e=h}}}var Ws=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Iv(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function ed(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Lv=37297,Fv=0;function Dv(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var nd=new Xt;function Nv(i){oe._getMatrix(nd,oe.workingColorSpace,i);let t=`mat3( ${nd.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(i)){case ur:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function id(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Dv(i.getShaderSource(t),a)}else return r}function Uv(i,t){let e=Nv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Ov={[Fc]:"Linear",[Dc]:"Reinhard",[Nc]:"Cineon",[Uc]:"ACESFilmic",[Bc]:"AgX",[zc]:"Neutral",[Oc]:"Custom"};function Bv(i,t){let e=Ov[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ml=new G;function zv(){oe.getLuminanceCoefficients(ml);let i=ml.x.toFixed(4),t=ml.y.toFixed(4),e=ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vr).join(`
`)}function Vv(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Gv(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Vr(i){return i!==""}function sd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Hv=/^[ \t]*#include +<([\w\d./]+)>/gm;function xu(i){return i.replace(Hv,Xv)}var Wv=new Map;function Xv(i,t){let e=jt[t];if(e===void 0){let n=Wv.get(t);if(n!==void 0)e=jt[n],zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return xu(e)}var Yv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function od(i){return i.replace(Yv,qv)}function qv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ad(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var $v={[Rr]:"SHADOWMAP_TYPE_PCF",[zs]:"SHADOWMAP_TYPE_VSM"};function Zv(i){return $v[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Jv={[Ti]:"ENVMAP_TYPE_CUBE",[Qi]:"ENVMAP_TYPE_CUBE",[Pr]:"ENVMAP_TYPE_CUBE_UV"};function Kv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Jv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var jv={[Qi]:"ENVMAP_MODE_REFRACTION"};function Qv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":jv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var t_={[Lc]:"ENVMAP_BLENDING_MULTIPLY",[_f]:"ENVMAP_BLENDING_MIX",[yf]:"ENVMAP_BLENDING_ADD"};function e_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":t_[i.combine]||"ENVMAP_BLENDING_NONE"}function n_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function i_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Zv(e),c=Kv(e),u=Qv(e),h=e_(e),f=n_(e),d=kv(e),p=Vv(r),x=s.createProgram(),g,m,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Vr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Vr).join(`
`),m.length>0&&(m+=`
`)):(g=[ad(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),m=[ad(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Rn?"#define TONE_MAPPING":"",e.toneMapping!==Rn?jt.tonemapping_pars_fragment:"",e.toneMapping!==Rn?Bv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,Uv("linearToOutputTexel",e.outputColorSpace),zv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vr).join(`
`)),o=xu(o),o=sd(o,e),o=rd(o,e),a=xu(a),a=sd(a,e),a=rd(a,e),o=od(o),a=od(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=_+g+o,v=_+m+a,y=ed(s,s.VERTEX_SHADER,M),w=ed(s,s.FRAGMENT_SHADER,v);s.attachShader(x,y),s.attachShader(x,w),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(P){if(i.debug.checkShaderErrors){let A=s.getProgramInfoLog(x)||"",I=s.getShaderInfoLog(y)||"",R=s.getShaderInfoLog(w)||"",L=A.trim(),N=I.trim(),U=R.trim(),k=!0,B=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,y,w);else{let z=id(s,y,"vertex"),V=id(s,w,"fragment");Vt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+z+`
`+V)}else L!==""?zt("WebGLProgram: Program Info Log:",L):(N===""||U==="")&&(B=!1);B&&(P.diagnostics={runnable:k,programLog:L,vertexShader:{log:N,prefix:g},fragmentShader:{log:U,prefix:m}})}s.deleteShader(y),s.deleteShader(w),b=new Ws(s,x),S=Gv(s,x)}let b;this.getUniforms=function(){return b===void 0&&T(this),b};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(x,Lv)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Fv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=y,this.fragmentShader=w,this}var s_=0,bu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new vu(t),e.set(t,n)),n}},vu=class{constructor(t){this.id=s_++,this.code=t,this.usedTimes=0}};function r_(i){return i===Ri||i===Ur||i===Or}function o_(i,t,e,n,s,r){let o=new Fs,a=new bu,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(b){return l.add(b),b===0?"uv":`uv${b}`}function x(b,S,E,P,A,I){let R=P.fog,L=A.geometry,N=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?P.environment:null,U=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,k=t.get(b.envMap||N,U),B=k&&k.mapping===Pr?k.image.height:null,z=d[b.type];b.precision!==null&&(f=n.getMaxPrecision(b.precision),f!==b.precision&&zt("WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let V=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,st=V!==void 0?V.length:0,$=0;L.morphAttributes.position!==void 0&&($=1),L.morphAttributes.normal!==void 0&&($=2),L.morphAttributes.color!==void 0&&($=3);let ot,ct,pt,q;if(z){let be=Wn[z];ot=be.vertexShader,ct=be.fragmentShader}else{ot=b.vertexShader,ct=b.fragmentShader;let be=a.getVertexShaderStage(b),fe=a.getFragmentShaderStage(b);a.update(b,be,fe),pt=be.id,q=fe.id}let X=i.getRenderTarget(),it=i.state.buffers.depth.getReversed(),ut=A.isInstancedMesh===!0,ht=A.isBatchedMesh===!0,Pt=!!b.map,te=!!b.matcap,kt=!!k,Ht=!!b.aoMap,re=!!b.lightMap,Wt=!!b.bumpMap&&b.wireframe===!1,Me=!!b.normalMap,ke=!!b.displacementMap,an=!!b.emissiveMap,we=!!b.metalnessMap,Fe=!!b.roughnessMap,Y=b.anisotropy>0,$e=b.clearcoat>0,me=b.dispersion>0,O=b.retroreflectivity>0,C=b.iridescence>0,Z=b.sheen>0,j=b.transmission>0,et=Y&&!!b.anisotropyMap,dt=$e&&!!b.clearcoatMap,mt=$e&&!!b.clearcoatNormalMap,nt=$e&&!!b.clearcoatRoughnessMap,at=C&&!!b.iridescenceMap,gt=C&&!!b.iridescenceThicknessMap,Lt=Z&&!!b.sheenColorMap,_t=Z&&!!b.sheenRoughnessMap,xt=!!b.specularMap,Ft=!!b.specularColorMap,Bt=!!b.specularIntensityMap,$t=j&&!!b.transmissionMap,W=j&&!!b.thicknessMap,bt=!!b.gradientMap,rt=!!b.alphaMap,vt=b.alphaTest>0,wt=!!b.alphaHash,lt=!!b.extensions,Dt=Rn;b.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Dt=i.toneMapping);let Ct={shaderID:z,shaderType:b.type,shaderName:b.name,vertexShader:ot,fragmentShader:ct,defines:b.defines,customVertexShaderID:pt,customFragmentShaderID:q,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:ht,batchingColor:ht&&A._colorsTexture!==null,instancing:ut,instancingColor:ut&&A.instanceColor!==null,instancingMorph:ut&&A.morphTexture!==null,outputColorSpace:X===null?i.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:oe.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Pt,matcap:te,envMap:kt,envMapMode:kt&&k.mapping,envMapCubeUVHeight:B,aoMap:Ht,lightMap:re,bumpMap:Wt,normalMap:Me,displacementMap:ke,emissiveMap:an,normalMapObjectSpace:Me&&b.normalMapType===wf,normalMapTangentSpace:Me&&b.normalMapType===$c,packedNormalMap:Me&&b.normalMapType===$c&&r_(b.normalMap.format),metalnessMap:we,roughnessMap:Fe,anisotropy:Y,anisotropyMap:et,clearcoat:$e,clearcoatMap:dt,clearcoatNormalMap:mt,clearcoatRoughnessMap:nt,dispersion:me,retroreflection:O,iridescence:C,iridescenceMap:at,iridescenceThicknessMap:gt,sheen:Z,sheenColorMap:Lt,sheenRoughnessMap:_t,specularMap:xt,specularColorMap:Ft,specularIntensityMap:Bt,transmission:j,transmissionMap:$t,thicknessMap:W,gradientMap:bt,opaque:b.transparent===!1&&b.blending===wi&&b.alphaToCoverage===!1,alphaMap:rt,alphaTest:vt,alphaHash:wt,combine:b.combine,mapUv:Pt&&p(b.map.channel),aoMapUv:Ht&&p(b.aoMap.channel),lightMapUv:re&&p(b.lightMap.channel),bumpMapUv:Wt&&p(b.bumpMap.channel),normalMapUv:Me&&p(b.normalMap.channel),displacementMapUv:ke&&p(b.displacementMap.channel),emissiveMapUv:an&&p(b.emissiveMap.channel),metalnessMapUv:we&&p(b.metalnessMap.channel),roughnessMapUv:Fe&&p(b.roughnessMap.channel),anisotropyMapUv:et&&p(b.anisotropyMap.channel),clearcoatMapUv:dt&&p(b.clearcoatMap.channel),clearcoatNormalMapUv:mt&&p(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&p(b.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&p(b.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&p(b.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&p(b.sheenColorMap.channel),sheenRoughnessMapUv:_t&&p(b.sheenRoughnessMap.channel),specularMapUv:xt&&p(b.specularMap.channel),specularColorMapUv:Ft&&p(b.specularColorMap.channel),specularIntensityMapUv:Bt&&p(b.specularIntensityMap.channel),transmissionMapUv:$t&&p(b.transmissionMap.channel),thicknessMapUv:W&&p(b.thicknessMap.channel),alphaMapUv:rt&&p(b.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Me||Y),vertexNormals:!!L.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:A.isPoints===!0&&!!L.attributes.uv&&(Pt||rt),fog:!!R,useFog:b.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||L.attributes.normal===void 0&&Me===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:it,skinning:A.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:$,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:Dt,decodeVideoTexture:Pt&&b.map.isVideoTexture===!0&&oe.getTransfer(b.map.colorSpace)===pe,decodeVideoTextureEmissive:an&&b.emissiveMap.isVideoTexture===!0&&oe.getTransfer(b.emissiveMap.colorSpace)===pe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ue,flipSided:b.side===qe,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:lt&&b.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&b.extensions.multiDraw===!0||ht)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ct.vertexUv1s=l.has(1),Ct.vertexUv2s=l.has(2),Ct.vertexUv3s=l.has(3),l.clear(),Ct}function g(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let E in b.defines)S.push(E),S.push(b.defines[E]);return b.isRawShaderMaterial===!1&&(m(S,b),_(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function m(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numSunLights),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numSunLightShadows),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function _(b,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),b.push(o.mask)}function M(b){let S=d[b.type],E;if(S){let P=Wn[S];E=Gf.clone(P.uniforms)}else E=b.uniforms;return E}function v(b,S){let E=u.get(S);return E!==void 0?++E.usedTimes:(E=new i_(i,S,b,s),c.push(E),u.set(S,E)),E}function y(b){if(--b.usedTimes===0){let S=c.indexOf(b);c[S]=c[c.length-1],c.pop(),u.delete(b.cacheKey),b.destroy()}}function w(b){a.remove(b)}function T(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:M,acquireProgram:v,releaseProgram:y,releaseShaderCache:w,programs:c,dispose:T}}function a_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function l_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function ld(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function cd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,x,g,m){let _=i[t];return _===void 0?(_={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:g,group:m},i[t]=_):(_.id=f.id,_.object=f,_.geometry=d,_.material=p,_.materialVariant=o(f),_.groupOrder=x,_.renderOrder=f.renderOrder,_.z=g,_.group=m),t++,_}function l(f,d,p,x,g,m,_){_.reversedDepth===!0&&(g=-g);let M=a(f,d,p,x,g,m);p.transmission>0?n.push(M):p.transparent===!0?s.push(M):e.push(M)}function c(f,d,p,x,g,m){let _=a(f,d,p,x,g,m);p.transmission>0?n.unshift(_):p.transparent===!0?s.unshift(_):e.unshift(_)}function u(f,d){e.length>1&&e.sort(f||l_),n.length>1&&n.sort(d||ld),s.length>1&&s.sort(d||ld)}function h(){for(let f=t,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function c_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new cd,i.set(n,[o])):s>=r.length?(o=new cd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function u_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new G,color:new Q};break;case"SpotLight":e={position:new G,direction:new G,color:new Q,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Q,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Q,groundColor:new Q};break;case"RectAreaLight":e={color:new Q,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function h_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var f_=0;function d_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function p_(i){let t=new u_,e=h_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);let s=new G,r=new Se,o=new Se;function a(c){let u=0,h=0,f=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let d=0,p=0,x=0,g=0,m=0,_=0,M=0,v=0,y=0,w=0,T=0,b=0,S=0,E=0;c.sort(d_);for(let A=0,I=c.length;A<I;A++){let R=c[A],L=R.color,N=R.intensity,U=R.distance,k=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Ri?k=R.shadow.map.texture:k=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=L.r*N,h+=L.g*N,f+=L.b*N;else if(R.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(R.sh.coefficients[B],N);E++}else if(R.isSunLight){let B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let z=R.shadow,V=e.get(R);V.shadowIntensity=z.intensity,V.shadowBias=z.bias,V.shadowNormalBias=z.normalBias,V.shadowRadius=z.radius,V.shadowMapSize.copy(z.mapSize).multiply(z.getFrameExtents()),n.sunShadow[p]=V,n.sunShadowMap[p]=k;let st=z.getViewportCount();for(let $=0;$<st;$++)n.sunShadowMatrix[x+$]=z.getMatrix($),n.sunShadowCascade[x+$]=z._cascadeData[$];x+=st,p++}n.sun[d]=B,d++}else if(R.isDirectionalLight){let B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let z=R.shadow,V=e.get(R);V.shadowIntensity=z.intensity,V.shadowBias=z.bias,V.shadowNormalBias=z.normalBias,V.shadowRadius=z.radius,V.shadowMapSize=z.mapSize,n.directionalShadow[g]=V,n.directionalShadowMap[g]=k,n.directionalShadowMatrix[g]=R.shadow.matrix,y++}n.directional[g]=B,g++}else if(R.isSpotLight){let B=t.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(L).multiplyScalar(N),B.distance=U,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,n.spot[_]=B;let z=R.shadow;if(R.map&&(n.spotLightMap[b]=R.map,b++,z.updateMatrices(R),R.castShadow&&S++),n.spotLightMatrix[_]=z.matrix,R.castShadow){let V=e.get(R);V.shadowIntensity=z.intensity,V.shadowBias=z.bias,V.shadowNormalBias=z.normalBias,V.shadowRadius=z.radius,V.shadowMapSize=z.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=k,T++}_++}else if(R.isRectAreaLight){let B=t.get(R);B.color.copy(L).multiplyScalar(N),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),n.rectArea[M]=B,M++}else if(R.isPointLight){let B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),B.distance=R.distance,B.decay=R.decay,R.castShadow){let z=R.shadow,V=e.get(R);V.shadowIntensity=z.intensity,V.shadowBias=z.bias,V.shadowNormalBias=z.normalBias,V.shadowRadius=z.radius,V.shadowMapSize=z.mapSize,V.shadowCameraNear=z.camera.near,V.shadowCameraFar=z.camera.far,n.pointShadow[m]=V,n.pointShadowMap[m]=k,n.pointShadowMatrix[m]=R.shadow.matrix,w++}n.point[m]=B,m++}else if(R.isHemisphereLight){let B=t.get(R);B.skyColor.copy(R.color).multiplyScalar(N),B.groundColor.copy(R.groundColor).multiplyScalar(N),n.hemi[v]=B,v++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let P=n.hash;(P.sunLength!==d||P.directionalLength!==g||P.pointLength!==m||P.spotLength!==_||P.rectAreaLength!==M||P.hemiLength!==v||P.numSunShadows!==p||P.numDirectionalShadows!==y||P.numPointShadows!==w||P.numSpotShadows!==T||P.numSpotMaps!==b||P.numLightProbes!==E)&&(n.sun.length=d,n.directional.length=g,n.spot.length=_,n.rectArea.length=M,n.point.length=m,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+b-S,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=E,P.sunLength=d,P.directionalLength=g,P.pointLength=m,P.spotLength=_,P.rectAreaLength=M,P.hemiLength=v,P.numSunShadows=p,P.numDirectionalShadows=y,P.numPointShadows=w,P.numSpotShadows=T,P.numSpotMaps=b,P.numLightProbes=E,n.version=f_++)}function l(c,u){let h=0,f=0,d=0,p=0,x=0,g=0,m=u.matrixWorldInverse;for(let _=0,M=c.length;_<M;_++){let v=c[_];if(v.isSunLight){let y=n.sun[h];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),h++}else if(v.isDirectionalLight){let y=n.directional[f];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(v.isSpotLight){let y=n.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let y=n.rectArea[x];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let y=n.hemi[g];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function ud(i){let t=new p_(i),e=[],n=[],s=[];function r(f){h.camera=f,e.length=0,n.length=0,s.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function l(f){s.push(f)}function c(){t.setup(e)}function u(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function m_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new ud(i),t.set(s,[a])):r>=o.length?(a=new ud(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var g_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x_=`uniform sampler2D shadow_pass;
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
}`,b_=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],v_=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],hd=new Se,kr=new G,fu=new G;function __(i,t,e){let n=new mr,s=new Qt,r=new Qt,o=new Ee,a=new fa,l=new da,c={},u=e.maxTextureSize,h={[Vn]:qe,[qe]:Vn,[ue]:ue},f=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qt},radius:{value:4}},vertexShader:g_,fragmentShader:x_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new qt;p.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ut(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rr;let m=this.type;this.render=function(w,T,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===tf&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Rr);let S=i.getRenderTarget(),E=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),A=i.state;A.setBlending(Gn),A.buffers.depth.getReversed()===!0?A.buffers.color.setClear(0,0,0,0):A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);let I=m!==this.type;I&&T.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(L=>L.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,L=w.length;R<L;R++){let N=w[R],U=N.shadow;if(U===void 0){zt("WebGLShadowMap:",N,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);let k=U.getFrameExtents();s.multiply(k),r.copy(U.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/k.x),s.x=r.x*k.x,U.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/k.y),s.y=r.y*k.y,U.mapSize.y=r.y));let B=i.state.buffers.depth.getReversed();if(U.camera._reversedDepth=B,U.map===null||I===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===zs){if(N.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new tn(s.x,s.y,{format:Ri,type:In,minFilter:We,magFilter:We,generateMipmaps:!1}),U.map.texture.name=N.name+".shadowMap",U.map.depthTexture=new _i(s.x,s.y,Pn),U.map.depthTexture.name=N.name+".shadowMapDepth",U.map.depthTexture.format=On,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ge,U.map.depthTexture.magFilter=Ge}else N.isPointLight?(U.map=new xl(s.x),U.map.depthTexture=new ua(s.x,Cn)):(U.map=new tn(s.x,s.y),U.map.depthTexture=new _i(s.x,s.y,Cn)),U.map.depthTexture.name=N.name+".shadowMap",U.map.depthTexture.format=On,this.type===Rr?(U.map.depthTexture.compareFunction=B?dl:fl,U.map.depthTexture.minFilter=We,U.map.depthTexture.magFilter=We):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ge,U.map.depthTexture.magFilter=Ge);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==s.x||U.map.height!==s.y)&&U.map.setSize(s.x,s.y);let z=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();N.isPointLight!==!0&&U.updateMatrices(N,b);for(let V=0;V<z;V++){let st=U.getCamera(V);if(N.isPointLight){let $=U.camera,ot=U.matrix,ct=N.distance||$.far;ct!==$.far&&($.far=ct,$.updateProjectionMatrix()),kr.setFromMatrixPosition(N.matrixWorld),$.position.copy(kr),fu.copy($.position),fu.add(b_[V]),$.up.copy(v_[V]),$.lookAt(fu),$.updateMatrixWorld(),ot.makeTranslation(-kr.x,-kr.y,-kr.z),hd.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),U._frustum.setFromProjectionMatrix(hd,$.coordinateSystem,$.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,V),i.clear();else{V===0&&(i.setRenderTarget(U.map),i.clear());let $=U.getViewport(V);o.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),A.viewport(o)}n=U.getFrustum(V),v(T,b,st,N,this.type)}U.isPointLightShadow!==!0&&this.type===zs&&_(U,b),U.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(S,E,P)};function _(w,T){let b=t.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new tn(s.x,s.y,{format:Ri,type:In}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(T,null,b,f,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(T,null,b,d,x,null)}function M(w,T,b,S){let E=null,P=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)E=P;else if(E=b.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let A=E.uuid,I=T.uuid,R=c[A];R===void 0&&(R={},c[A]=R);let L=R[I];L===void 0&&(L=E.clone(),R[I]=L,T.addEventListener("dispose",y)),E=L}if(E.visible=T.visible,E.wireframe=T.wireframe,S===zs?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:h[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,b.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let A=i.properties.get(E);A.light=b}return E}function v(w,T,b,S,E){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===zs)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);let I=t.update(w),R=w.material;if(Array.isArray(R)){let L=I.groups;for(let N=0,U=L.length;N<U;N++){let k=L[N],B=R[k.materialIndex];if(B&&B.visible){let z=M(w,B,S,E);w.onBeforeShadow(i,w,T,b,I,z,k),i.renderBufferDirect(b,null,I,z,w,k),w.onAfterShadow(i,w,T,b,I,z,k)}}}else if(R.visible){let L=M(w,R,S,E);w.onBeforeShadow(i,w,T,b,I,L,null),i.renderBufferDirect(b,null,I,L,w,null),w.onAfterShadow(i,w,T,b,I,L,null)}}let A=w.children;for(let I=0,R=A.length;I<R;I++)v(A[I],T,b,S,E)}function y(w){w.target.removeEventListener("dispose",y);for(let b in c){let S=c[b],E=w.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function y_(i,t){function e(){let W=!1,bt=new Ee,rt=null,vt=new Ee(0,0,0,0);return{setMask:function(wt){rt!==wt&&!W&&(i.colorMask(wt,wt,wt,wt),rt=wt)},setLocked:function(wt){W=wt},setClear:function(wt,lt,Dt,Ct,be){be===!0&&(wt*=Ct,lt*=Ct,Dt*=Ct),bt.set(wt,lt,Dt,Ct),vt.equals(bt)===!1&&(i.clearColor(wt,lt,Dt,Ct),vt.copy(bt))},reset:function(){W=!1,rt=null,vt.set(-1,0,0,0)}}}function n(){let W=!1,bt=!1,rt=null,vt=null,wt=null;return{setReversed:function(lt){if(bt!==lt){let Dt=t.get("EXT_clip_control");lt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),bt=lt;let Ct=wt;wt=null,this.setClear(Ct)}},getReversed:function(){return bt},setTest:function(lt){lt?X(i.DEPTH_TEST):it(i.DEPTH_TEST)},setMask:function(lt){rt!==lt&&!W&&(i.depthMask(lt),rt=lt)},setFunc:function(lt){if(bt&&(lt=Uf[lt]),vt!==lt){switch(lt){case qo:i.depthFunc(i.NEVER);break;case $o:i.depthFunc(i.ALWAYS);break;case Zo:i.depthFunc(i.LESS);break;case Cs:i.depthFunc(i.LEQUAL);break;case Jo:i.depthFunc(i.EQUAL);break;case Ko:i.depthFunc(i.GEQUAL);break;case jo:i.depthFunc(i.GREATER);break;case Qo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=lt}},setLocked:function(lt){W=lt},setClear:function(lt){wt!==lt&&(wt=lt,bt&&(lt=1-lt),i.clearDepth(lt))},reset:function(){W=!1,rt=null,vt=null,wt=null,bt=!1}}}function s(){let W=!1,bt=null,rt=null,vt=null,wt=null,lt=null,Dt=null,Ct=null,be=null;return{setTest:function(fe){W||(fe?X(i.STENCIL_TEST):it(i.STENCIL_TEST))},setMask:function(fe){bt!==fe&&!W&&(i.stencilMask(fe),bt=fe)},setFunc:function(fe,Mn,Dn){(rt!==fe||vt!==Mn||wt!==Dn)&&(i.stencilFunc(fe,Mn,Dn),rt=fe,vt=Mn,wt=Dn)},setOp:function(fe,Mn,Dn){(lt!==fe||Dt!==Mn||Ct!==Dn)&&(i.stencilOp(fe,Mn,Dn),lt=fe,Dt=Mn,Ct=Dn)},setLocked:function(fe){W=fe},setClear:function(fe){be!==fe&&(i.clearStencil(fe),be=fe)},reset:function(){W=!1,bt=null,rt=null,vt=null,wt=null,lt=null,Dt=null,Ct=null,be=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},f={},d=new WeakMap,p=[],x=null,g=!1,m=null,_=null,M=null,v=null,y=null,w=null,T=null,b=new Q(0,0,0),S=0,E=!1,P=null,A=null,I=null,R=null,L=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,k=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(B)[1]),U=k>=1):B.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),U=k>=2);let z=null,V={},st=i.getParameter(i.SCISSOR_BOX),$=i.getParameter(i.VIEWPORT),ot=new Ee().fromArray(st),ct=new Ee().fromArray($);function pt(W,bt,rt,vt){let wt=new Uint8Array(4),lt=i.createTexture();i.bindTexture(W,lt),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<rt;Dt++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(bt,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(bt+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return lt}let q={};q[i.TEXTURE_2D]=pt(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=pt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=pt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=pt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),X(i.DEPTH_TEST),o.setFunc(Cs),Wt(!1),Me(Rc),X(i.CULL_FACE),Ht(Gn);function X(W){u[W]!==!0&&(i.enable(W),u[W]=!0)}function it(W){u[W]!==!1&&(i.disable(W),u[W]=!1)}function ut(W,bt){return f[W]!==bt?(i.bindFramebuffer(W,bt),f[W]=bt,W===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=bt),W===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=bt),!0):!1}function ht(W,bt){let rt=p,vt=!1;if(W){rt=d.get(bt),rt===void 0&&(rt=[],d.set(bt,rt));let wt=W.textures;if(rt.length!==wt.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Dt=wt.length;lt<Dt;lt++)rt[lt]=i.COLOR_ATTACHMENT0+lt;rt.length=wt.length,vt=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,vt=!0);vt&&i.drawBuffers(rt)}function Pt(W){return x!==W?(i.useProgram(W),x=W,!0):!1}let te={[ji]:i.FUNC_ADD,[nf]:i.FUNC_SUBTRACT,[sf]:i.FUNC_REVERSE_SUBTRACT};te[rf]=i.MIN,te[of]=i.MAX;let kt={[af]:i.ZERO,[lf]:i.ONE,[cf]:i.SRC_COLOR,[Pc]:i.SRC_ALPHA,[mf]:i.SRC_ALPHA_SATURATE,[df]:i.DST_COLOR,[hf]:i.DST_ALPHA,[uf]:i.ONE_MINUS_SRC_COLOR,[Ic]:i.ONE_MINUS_SRC_ALPHA,[pf]:i.ONE_MINUS_DST_COLOR,[ff]:i.ONE_MINUS_DST_ALPHA,[gf]:i.CONSTANT_COLOR,[xf]:i.ONE_MINUS_CONSTANT_COLOR,[bf]:i.CONSTANT_ALPHA,[vf]:i.ONE_MINUS_CONSTANT_ALPHA};function Ht(W,bt,rt,vt,wt,lt,Dt,Ct,be,fe){if(W===Gn){g===!0&&(it(i.BLEND),g=!1);return}if(g===!1&&(X(i.BLEND),g=!0),W!==ef){if(W!==m||fe!==E){if((_!==ji||y!==ji)&&(i.blendEquation(i.FUNC_ADD),_=ji,y=ji),fe)switch(W){case wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ce:i.blendFunc(i.ONE,i.ONE);break;case Cc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cr:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Vt("WebGLState: Invalid blending: ",W);break}else switch(W){case wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ce:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Cc:Vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cr:Vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Vt("WebGLState: Invalid blending: ",W);break}M=null,v=null,w=null,T=null,b.set(0,0,0),S=0,m=W,E=fe}return}wt=wt||bt,lt=lt||rt,Dt=Dt||vt,(bt!==_||wt!==y)&&(i.blendEquationSeparate(te[bt],te[wt]),_=bt,y=wt),(rt!==M||vt!==v||lt!==w||Dt!==T)&&(i.blendFuncSeparate(kt[rt],kt[vt],kt[lt],kt[Dt]),M=rt,v=vt,w=lt,T=Dt),(Ct.equals(b)===!1||be!==S)&&(i.blendColor(Ct.r,Ct.g,Ct.b,be),b.copy(Ct),S=be),m=W,E=!1}function re(W,bt){W.side===ue?it(i.CULL_FACE):X(i.CULL_FACE);let rt=W.side===qe;bt&&(rt=!rt),Wt(rt),W.blending===wi&&W.transparent===!1?Ht(Gn):Ht(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let vt=W.stencilWrite;a.setTest(vt),vt&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),an(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?X(i.SAMPLE_ALPHA_TO_COVERAGE):it(i.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(W){P!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),P=W)}function Me(W){W!==jh?(X(i.CULL_FACE),W!==A&&(W===Rc?i.cullFace(i.BACK):W===Qh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):it(i.CULL_FACE),A=W}function ke(W){W!==I&&(U&&i.lineWidth(W),I=W)}function an(W,bt,rt){W?(X(i.POLYGON_OFFSET_FILL),(R!==bt||L!==rt)&&(R=bt,L=rt,o.getReversed()&&(bt=-bt),i.polygonOffset(bt,rt))):it(i.POLYGON_OFFSET_FILL)}function we(W){W?X(i.SCISSOR_TEST):it(i.SCISSOR_TEST)}function Fe(W){W===void 0&&(W=i.TEXTURE0+N-1),z!==W&&(i.activeTexture(W),z=W)}function Y(W,bt,rt){rt===void 0&&(z===null?rt=i.TEXTURE0+N-1:rt=z);let vt=V[rt];vt===void 0&&(vt={type:void 0,texture:void 0},V[rt]=vt),(vt.type!==W||vt.texture!==bt)&&(z!==rt&&(i.activeTexture(rt),z=rt),i.bindTexture(W,bt||q[W]),vt.type=W,vt.texture=bt)}function $e(){let W=V[z];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function me(){try{i.compressedTexImage2D(...arguments)}catch(W){Vt("WebGLState:",W)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(W){Vt("WebGLState:",W)}}function C(){try{i.texSubImage2D(...arguments)}catch(W){Vt("WebGLState:",W)}}function Z(){try{i.texSubImage3D(...arguments)}catch(W){Vt("WebGLState:",W)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(W){Vt("WebGLState:",W)}}function et(){try{i.compressedTexSubImage3D(...arguments)}catch(W){Vt("WebGLState:",W)}}function dt(){try{i.texStorage2D(...arguments)}catch(W){Vt("WebGLState:",W)}}function mt(){try{i.texStorage3D(...arguments)}catch(W){Vt("WebGLState:",W)}}function nt(){try{i.texImage2D(...arguments)}catch(W){Vt("WebGLState:",W)}}function at(){try{i.texImage3D(...arguments)}catch(W){Vt("WebGLState:",W)}}function gt(W){return h[W]!==void 0?h[W]:i.getParameter(W)}function Lt(W,bt){h[W]!==bt&&(i.pixelStorei(W,bt),h[W]=bt)}function _t(W){ot.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),ot.copy(W))}function xt(W){ct.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),ct.copy(W))}function Ft(W,bt){let rt=c.get(bt);rt===void 0&&(rt=new WeakMap,c.set(bt,rt));let vt=rt.get(W);vt===void 0&&(vt=i.getUniformBlockIndex(bt,W.name),rt.set(W,vt))}function Bt(W,bt){let vt=c.get(bt).get(W);l.get(bt)!==vt&&(i.uniformBlockBinding(bt,vt,W.__bindingPointIndex),l.set(bt,vt))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},z=null,V={},f={},d=new WeakMap,p=[],x=null,g=!1,m=null,_=null,M=null,v=null,y=null,w=null,T=null,b=new Q(0,0,0),S=0,E=!1,P=null,A=null,I=null,R=null,L=null,ot.set(0,0,i.canvas.width,i.canvas.height),ct.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:X,disable:it,bindFramebuffer:ut,drawBuffers:ht,useProgram:Pt,setBlending:Ht,setMaterial:re,setFlipSided:Wt,setCullFace:Me,setLineWidth:ke,setPolygonOffset:an,setScissorTest:we,activeTexture:Fe,bindTexture:Y,unbindTexture:$e,compressedTexImage2D:me,compressedTexImage3D:O,texImage2D:nt,texImage3D:at,pixelStorei:Lt,getParameter:gt,updateUBOMapping:Ft,uniformBlockBinding:Bt,texStorage2D:dt,texStorage3D:mt,texSubImage2D:C,texSubImage3D:Z,compressedTexSubImage2D:j,compressedTexSubImage3D:et,scissor:_t,viewport:xt,reset:$t}}function M_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qt,u=new WeakMap,h=new Set,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(O,C){return p?new OffscreenCanvas(O,C):Ps("canvas")}function g(O,C,Z){let j=1,et=me(O);if((et.width>Z||et.height>Z)&&(j=Z/Math.max(et.width,et.height)),j<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){let dt=Math.floor(j*et.width),mt=Math.floor(j*et.height);f===void 0&&(f=x(dt,mt));let nt=C?x(dt,mt):f;return nt.width=dt,nt.height=mt,nt.getContext("2d").drawImage(O,0,0,dt,mt),zt("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+dt+"x"+mt+")."),nt}else return"data"in O&&zt("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),O;return O}function m(O){return O.generateMipmaps}function _(O){i.generateMipmap(O)}function M(O){return O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?i.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(O,C,Z,j,et,dt=!1){if(O!==null){if(i[O]!==void 0)return i[O];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let mt;j&&(mt=t.get("EXT_texture_norm16"),mt||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let nt=C;if(C===i.RED&&(Z===i.FLOAT&&(nt=i.R32F),Z===i.HALF_FLOAT&&(nt=i.R16F),Z===i.UNSIGNED_BYTE&&(nt=i.R8),Z===i.UNSIGNED_SHORT&&mt&&(nt=mt.R16_EXT),Z===i.SHORT&&mt&&(nt=mt.R16_SNORM_EXT)),C===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(nt=i.R8UI),Z===i.UNSIGNED_SHORT&&(nt=i.R16UI),Z===i.UNSIGNED_INT&&(nt=i.R32UI),Z===i.BYTE&&(nt=i.R8I),Z===i.SHORT&&(nt=i.R16I),Z===i.INT&&(nt=i.R32I)),C===i.RG&&(Z===i.FLOAT&&(nt=i.RG32F),Z===i.HALF_FLOAT&&(nt=i.RG16F),Z===i.UNSIGNED_BYTE&&(nt=i.RG8),Z===i.UNSIGNED_SHORT&&mt&&(nt=mt.RG16_EXT),Z===i.SHORT&&mt&&(nt=mt.RG16_SNORM_EXT)),C===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(nt=i.RG8UI),Z===i.UNSIGNED_SHORT&&(nt=i.RG16UI),Z===i.UNSIGNED_INT&&(nt=i.RG32UI),Z===i.BYTE&&(nt=i.RG8I),Z===i.SHORT&&(nt=i.RG16I),Z===i.INT&&(nt=i.RG32I)),C===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),Z===i.UNSIGNED_INT&&(nt=i.RGB32UI),Z===i.BYTE&&(nt=i.RGB8I),Z===i.SHORT&&(nt=i.RGB16I),Z===i.INT&&(nt=i.RGB32I)),C===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),Z===i.UNSIGNED_INT&&(nt=i.RGBA32UI),Z===i.BYTE&&(nt=i.RGBA8I),Z===i.SHORT&&(nt=i.RGBA16I),Z===i.INT&&(nt=i.RGBA32I)),C===i.RGB&&(Z===i.UNSIGNED_SHORT&&mt&&(nt=mt.RGB16_EXT),Z===i.SHORT&&mt&&(nt=mt.RGB16_SNORM_EXT),Z===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),Z===i.UNSIGNED_INT_10F_11F_11F_REV&&(nt=i.R11F_G11F_B10F)),C===i.RGBA){let at=dt?ur:oe.getTransfer(et);Z===i.FLOAT&&(nt=i.RGBA32F),Z===i.HALF_FLOAT&&(nt=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(nt=at===pe?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT&&mt&&(nt=mt.RGBA16_EXT),Z===i.SHORT&&mt&&(nt=mt.RGBA16_SNORM_EXT),Z===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function y(O,C){let Z;return O?C===null||C===Cn||C===Vs?Z=i.DEPTH24_STENCIL8:C===Pn?Z=i.DEPTH32F_STENCIL8:C===ks&&(Z=i.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Cn||C===Vs?Z=i.DEPTH_COMPONENT24:C===Pn?Z=i.DEPTH_COMPONENT32F:C===ks&&(Z=i.DEPTH_COMPONENT16),Z}function w(O,C){return m(O)===!0||O.isFramebufferTexture&&O.minFilter!==Ge&&O.minFilter!==We?Math.log2(Math.max(C.width,C.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?C.mipmaps.length:1}function T(O){let C=O.target;C.removeEventListener("dispose",T),S(C),C.isVideoTexture&&u.delete(C),C.isHTMLTexture&&h.delete(C)}function b(O){let C=O.target;C.removeEventListener("dispose",b),P(C)}function S(O){let C=n.get(O);if(C.__webglInit===void 0)return;let Z=O.source,j=d.get(Z);if(j){let et=j[C.__cacheKey];et.usedTimes--,et.usedTimes===0&&E(O),Object.keys(j).length===0&&d.delete(Z)}n.remove(O)}function E(O){let C=n.get(O);i.deleteTexture(C.__webglTexture);let Z=O.source,j=d.get(Z);delete j[C.__cacheKey],o.memory.textures--}function P(O){let C=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(C.__webglFramebuffer[j]))for(let et=0;et<C.__webglFramebuffer[j].length;et++)i.deleteFramebuffer(C.__webglFramebuffer[j][et]);else i.deleteFramebuffer(C.__webglFramebuffer[j]);C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer[j])}else{if(Array.isArray(C.__webglFramebuffer))for(let j=0;j<C.__webglFramebuffer.length;j++)i.deleteFramebuffer(C.__webglFramebuffer[j]);else i.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&i.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let j=0;j<C.__webglColorRenderbuffer.length;j++)C.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(C.__webglColorRenderbuffer[j]);C.__webglDepthRenderbuffer&&i.deleteRenderbuffer(C.__webglDepthRenderbuffer)}let Z=O.textures;for(let j=0,et=Z.length;j<et;j++){let dt=n.get(Z[j]);dt.__webglTexture&&(i.deleteTexture(dt.__webglTexture),o.memory.textures--),n.remove(Z[j])}n.remove(O)}let A=0;function I(){A=0}function R(){return A}function L(O){A=O}function N(){let O=A;return O>=s.maxTextures&&zt("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+s.maxTextures),A+=1,O}function U(O){let C=[];return C.push(O.wrapS),C.push(O.wrapT),C.push(O.wrapR||0),C.push(O.magFilter),C.push(O.minFilter),C.push(O.anisotropy),C.push(O.internalFormat),C.push(O.format),C.push(O.type),C.push(O.generateMipmaps),C.push(O.premultiplyAlpha),C.push(O.flipY),C.push(O.unpackAlignment),C.push(O.colorSpace),C.join()}function k(O,C){let Z=n.get(O);if(O.isVideoTexture&&Y(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&Z.__version!==O.version){let j=O.image;if(j===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{it(Z,O,C);return}}else O.isExternalTexture&&(Z.__webglTexture=O.sourceTexture?O.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+C)}function B(O,C){let Z=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Z.__version!==O.version){it(Z,O,C);return}else O.isExternalTexture&&(Z.__webglTexture=O.sourceTexture?O.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+C)}function z(O,C){let Z=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Z.__version!==O.version){it(Z,O,C);return}e.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+C)}function V(O,C){let Z=n.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&Z.__version!==O.version){ut(Z,O,C);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+C)}let st={[qi]:i.REPEAT,[fn]:i.CLAMP_TO_EDGE,[ta]:i.MIRRORED_REPEAT},$={[Ge]:i.NEAREST,[Mf]:i.NEAREST_MIPMAP_NEAREST,[Ir]:i.NEAREST_MIPMAP_LINEAR,[We]:i.LINEAR,[Ca]:i.LINEAR_MIPMAP_NEAREST,[Ei]:i.LINEAR_MIPMAP_LINEAR},ot={[Ef]:i.NEVER,[If]:i.ALWAYS,[Af]:i.LESS,[fl]:i.LEQUAL,[Rf]:i.EQUAL,[dl]:i.GEQUAL,[Cf]:i.GREATER,[Pf]:i.NOTEQUAL};function ct(O,C){if(C.type===Pn&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===We||C.magFilter===Ca||C.magFilter===Ir||C.magFilter===Ei||C.minFilter===We||C.minFilter===Ca||C.minFilter===Ir||C.minFilter===Ei)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,st[C.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,st[C.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,st[C.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,$[C.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,$[C.minFilter]),C.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,ot[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Ge||C.minFilter!==Ir&&C.minFilter!==Ei||C.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){let Z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(O,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,s.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function pt(O,C){let Z=!1;O.__webglInit===void 0&&(O.__webglInit=!0,C.addEventListener("dispose",T));let j=C.source,et=d.get(j);et===void 0&&(et={},d.set(j,et));let dt=U(C);if(dt!==O.__cacheKey){et[dt]===void 0&&(et[dt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),et[dt].usedTimes++;let mt=et[O.__cacheKey];mt!==void 0&&(et[O.__cacheKey].usedTimes--,mt.usedTimes===0&&E(C)),O.__cacheKey=dt,O.__webglTexture=et[dt].texture}return Z}function q(O,C,Z){return Math.floor(Math.floor(O/Z)/C)}function X(O,C,Z,j){let dt=O.updateRanges;if(dt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,C.width,C.height,Z,j,C.data);else{dt.sort((Lt,_t)=>Lt.start-_t.start);let mt=0;for(let Lt=1;Lt<dt.length;Lt++){let _t=dt[mt],xt=dt[Lt],Ft=_t.start+_t.count,Bt=q(xt.start,C.width,4),$t=q(_t.start,C.width,4);xt.start<=Ft+1&&Bt===$t&&q(xt.start+xt.count-1,C.width,4)===Bt?_t.count=Math.max(_t.count,xt.start+xt.count-_t.start):(++mt,dt[mt]=xt)}dt.length=mt+1;let nt=e.getParameter(i.UNPACK_ROW_LENGTH),at=e.getParameter(i.UNPACK_SKIP_PIXELS),gt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,C.width);for(let Lt=0,_t=dt.length;Lt<_t;Lt++){let xt=dt[Lt],Ft=Math.floor(xt.start/4),Bt=Math.ceil(xt.count/4),$t=Ft%C.width,W=Math.floor(Ft/C.width),bt=Bt,rt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,$t),e.pixelStorei(i.UNPACK_SKIP_ROWS,W),e.texSubImage2D(i.TEXTURE_2D,0,$t,W,bt,rt,Z,j,C.data)}O.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,nt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,at),e.pixelStorei(i.UNPACK_SKIP_ROWS,gt)}}function it(O,C,Z){let j=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(j=i.TEXTURE_3D);let et=pt(O,C),dt=C.source;e.bindTexture(j,O.__webglTexture,i.TEXTURE0+Z);let mt=n.get(dt);if(dt.version!==mt.__version||et===!0){if(e.activeTexture(i.TEXTURE0+Z),(typeof ImageBitmap<"u"&&C.image instanceof ImageBitmap)===!1){let rt=oe.getPrimaries(oe.workingColorSpace),vt=C.colorSpace===ii?null:oe.getPrimaries(C.colorSpace),wt=C.colorSpace===ii||rt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt)}e.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment);let at=g(C.image,!1,s.maxTextureSize);at=$e(C,at);let gt=r.convert(C.format,C.colorSpace),Lt=r.convert(C.type),_t=v(C.internalFormat,gt,Lt,C.normalized,C.colorSpace,C.isVideoTexture);ct(j,C);let xt,Ft=C.mipmaps,Bt=C.isVideoTexture!==!0,$t=mt.__version===void 0||et===!0,W=dt.dataReady,bt=w(C,at);if(C.isDepthTexture)_t=y(C.format===Ai,C.type),$t&&(Bt?e.texStorage2D(i.TEXTURE_2D,1,_t,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,_t,at.width,at.height,0,gt,Lt,null));else if(C.isDataTexture)if(Ft.length>0){Bt&&$t&&e.texStorage2D(i.TEXTURE_2D,bt,_t,Ft[0].width,Ft[0].height);for(let rt=0,vt=Ft.length;rt<vt;rt++)xt=Ft[rt],Bt?W&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,xt.width,xt.height,gt,Lt,xt.data):e.texImage2D(i.TEXTURE_2D,rt,_t,xt.width,xt.height,0,gt,Lt,xt.data);C.generateMipmaps=!1}else Bt?($t&&e.texStorage2D(i.TEXTURE_2D,bt,_t,at.width,at.height),W&&X(C,at,gt,Lt)):e.texImage2D(i.TEXTURE_2D,0,_t,at.width,at.height,0,gt,Lt,at.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Bt&&$t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,_t,Ft[0].width,Ft[0].height,at.depth);for(let rt=0,vt=Ft.length;rt<vt;rt++)if(xt=Ft[rt],C.format!==vn)if(gt!==null)if(Bt){if(W)if(C.layerUpdates.size>0){let wt=eu(xt.width,xt.height,C.format,C.type);for(let lt of C.layerUpdates){let Dt=xt.data.subarray(lt*wt/xt.data.BYTES_PER_ELEMENT,(lt+1)*wt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,lt,xt.width,xt.height,1,gt,Dt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,xt.width,xt.height,at.depth,gt,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,_t,xt.width,xt.height,at.depth,0,xt.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?W&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,xt.width,xt.height,at.depth,gt,Lt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,_t,xt.width,xt.height,at.depth,0,gt,Lt,xt.data);C.layerUpdates.size>0&&C.clearLayerUpdates()}else{Bt&&$t&&e.texStorage2D(i.TEXTURE_2D,bt,_t,Ft[0].width,Ft[0].height);for(let rt=0,vt=Ft.length;rt<vt;rt++)xt=Ft[rt],C.format!==vn?gt!==null?Bt?W&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,xt.width,xt.height,gt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,_t,xt.width,xt.height,0,xt.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?W&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,xt.width,xt.height,gt,Lt,xt.data):e.texImage2D(i.TEXTURE_2D,rt,_t,xt.width,xt.height,0,gt,Lt,xt.data)}else if(C.isDataArrayTexture)if(Bt){if($t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,_t,at.width,at.height,at.depth),W)if(C.layerUpdates.size>0){let rt=eu(at.width,at.height,C.format,C.type);for(let vt of C.layerUpdates){let wt=at.data.subarray(vt*rt/at.data.BYTES_PER_ELEMENT,(vt+1)*rt/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,vt,at.width,at.height,1,gt,Lt,wt)}C.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,gt,Lt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,_t,at.width,at.height,at.depth,0,gt,Lt,at.data);else if(C.isData3DTexture)Bt?($t&&e.texStorage3D(i.TEXTURE_3D,bt,_t,at.width,at.height,at.depth),W&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,gt,Lt,at.data)):e.texImage3D(i.TEXTURE_3D,0,_t,at.width,at.height,at.depth,0,gt,Lt,at.data);else if(C.isFramebufferTexture){if($t)if(Bt)e.texStorage2D(i.TEXTURE_2D,bt,_t,at.width,at.height);else{let rt=at.width,vt=at.height;for(let wt=0;wt<bt;wt++)e.texImage2D(i.TEXTURE_2D,wt,_t,rt,vt,0,gt,Lt,null),rt>>=1,vt>>=1}}else if(C.isHTMLTexture){if("texElementImage2D"in i){let rt=i.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),at.parentNode!==rt){rt.appendChild(at),h.add(C),rt.onpaint=vt=>{let wt=vt.changedElements;for(let lt of h)wt.includes(lt.image)&&(lt.needsUpdate=!0)},rt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,at);else{let wt=i.RGBA,lt=i.RGBA,Dt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,wt,lt,Dt,at)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ft.length>0){if(Bt&&$t){let rt=me(Ft[0]);e.texStorage2D(i.TEXTURE_2D,bt,_t,rt.width,rt.height)}for(let rt=0,vt=Ft.length;rt<vt;rt++)xt=Ft[rt],Bt?W&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,gt,Lt,xt):e.texImage2D(i.TEXTURE_2D,rt,_t,gt,Lt,xt);C.generateMipmaps=!1}else if(Bt){if($t){let rt=me(at);e.texStorage2D(i.TEXTURE_2D,bt,_t,rt.width,rt.height)}W&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,Lt,at)}else e.texImage2D(i.TEXTURE_2D,0,_t,gt,Lt,at);m(C)&&_(j),mt.__version=dt.version,C.onUpdate&&C.onUpdate(C)}O.__version=C.version}function ut(O,C,Z){if(C.image.length!==6)return;let j=pt(O,C),et=C.source;e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+Z);let dt=n.get(et);if(et.version!==dt.__version||j===!0){e.activeTexture(i.TEXTURE0+Z);let mt=oe.getPrimaries(oe.workingColorSpace),nt=C.colorSpace===ii?null:oe.getPrimaries(C.colorSpace),at=C.colorSpace===ii||mt===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let gt=C.isCompressedTexture||C.image[0].isCompressedTexture,Lt=C.image[0]&&C.image[0].isDataTexture,_t=[];for(let lt=0;lt<6;lt++)!gt&&!Lt?_t[lt]=g(C.image[lt],!0,s.maxCubemapSize):_t[lt]=Lt?C.image[lt].image:C.image[lt],_t[lt]=$e(C,_t[lt]);let xt=_t[0],Ft=r.convert(C.format,C.colorSpace),Bt=r.convert(C.type),$t=v(C.internalFormat,Ft,Bt,C.normalized,C.colorSpace),W=C.isVideoTexture!==!0,bt=dt.__version===void 0||j===!0,rt=et.dataReady,vt=w(C,xt);ct(i.TEXTURE_CUBE_MAP,C);let wt;if(gt){W&&bt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,$t,xt.width,xt.height);for(let lt=0;lt<6;lt++){wt=_t[lt].mipmaps;for(let Dt=0;Dt<wt.length;Dt++){let Ct=wt[Dt];C.format!==vn?Ft!==null?W?rt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt,0,0,Ct.width,Ct.height,Ft,Ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt,$t,Ct.width,Ct.height,0,Ct.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt,0,0,Ct.width,Ct.height,Ft,Bt,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt,$t,Ct.width,Ct.height,0,Ft,Bt,Ct.data)}}}else{if(wt=C.mipmaps,W&&bt){wt.length>0&&vt++;let lt=me(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,$t,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(Lt){W?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,_t[lt].width,_t[lt].height,Ft,Bt,_t[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,$t,_t[lt].width,_t[lt].height,0,Ft,Bt,_t[lt].data);for(let Dt=0;Dt<wt.length;Dt++){let be=wt[Dt].image[lt].image;W?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt+1,0,0,be.width,be.height,Ft,Bt,be.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt+1,$t,be.width,be.height,0,Ft,Bt,be.data)}}else{W?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Ft,Bt,_t[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,$t,Ft,Bt,_t[lt]);for(let Dt=0;Dt<wt.length;Dt++){let Ct=wt[Dt];W?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt+1,0,0,Ft,Bt,Ct.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt+1,$t,Ft,Bt,Ct.image[lt])}}}m(C)&&_(i.TEXTURE_CUBE_MAP),dt.__version=et.version,C.onUpdate&&C.onUpdate(C)}O.__version=C.version}function ht(O,C,Z,j,et,dt){let mt=r.convert(Z.format,Z.colorSpace),nt=r.convert(Z.type),at=v(Z.internalFormat,mt,nt,Z.normalized,Z.colorSpace),gt=n.get(C),Lt=n.get(Z);if(Lt.__renderTarget=C,!gt.__hasExternalTextures){let _t=Math.max(1,C.width>>dt),xt=Math.max(1,C.height>>dt);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,dt,at,_t,xt,C.depth,0,mt,nt,null):e.texImage2D(et,dt,at,_t,xt,0,mt,nt,null)}e.bindFramebuffer(i.FRAMEBUFFER,O),Fe(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,et,Lt.__webglTexture,0,we(C)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,et,Lt.__webglTexture,dt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(O,C,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,O),C.depthBuffer){let j=C.depthTexture,et=j&&j.isDepthTexture?j.type:null,dt=y(C.stencilBuffer,et),mt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Fe(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we(C),dt,C.width,C.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,we(C),dt,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,dt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,O)}else{let j=C.textures;for(let et=0;et<j.length;et++){let dt=j[et],mt=r.convert(dt.format,dt.colorSpace),nt=r.convert(dt.type),at=v(dt.internalFormat,mt,nt,dt.normalized,dt.colorSpace);Fe(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we(C),at,C.width,C.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,we(C),at,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,at,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function te(O,C,Z){let j=C.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,O),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let et=n.get(C.depthTexture);if(et.__renderTarget=C,(!et.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),j){if(et.__webglInit===void 0&&(et.__webglInit=!0,C.depthTexture.addEventListener("dispose",T)),et.__webglTexture===void 0){et.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),ct(i.TEXTURE_CUBE_MAP,C.depthTexture);let gt=r.convert(C.depthTexture.format),Lt=r.convert(C.depthTexture.type),_t;C.depthTexture.format===On?_t=i.DEPTH_COMPONENT24:C.depthTexture.format===Ai&&(_t=i.DEPTH24_STENCIL8);for(let xt=0;xt<6;xt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,_t,C.width,C.height,0,gt,Lt,null)}}else k(C.depthTexture,0);let dt=et.__webglTexture,mt=we(C),nt=j?i.TEXTURE_CUBE_MAP_POSITIVE_X+Z:i.TEXTURE_2D,at=C.depthTexture.format===Ai?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(C.depthTexture.format===On)Fe(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,nt,dt,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,at,nt,dt,0);else if(C.depthTexture.format===Ai)Fe(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,nt,dt,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,at,nt,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function kt(O){let C=n.get(O),Z=O.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==O.depthTexture){let j=O.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),j){let et=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,j.removeEventListener("dispose",et)};j.addEventListener("dispose",et),C.__depthDisposeCallback=et}C.__boundDepthTexture=j}if(O.depthTexture&&!C.__autoAllocateDepthBuffer)if(Z)for(let j=0;j<6;j++)te(C.__webglFramebuffer[j],O,j);else{let j=O.texture.mipmaps;j&&j.length>0?te(C.__webglFramebuffer[0],O,0):te(C.__webglFramebuffer,O,0)}else if(Z){C.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[j]),C.__webglDepthbuffer[j]===void 0)C.__webglDepthbuffer[j]=i.createRenderbuffer(),Pt(C.__webglDepthbuffer[j],O,!1);else{let et=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=C.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,dt)}}else{let j=O.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=i.createRenderbuffer(),Pt(C.__webglDepthbuffer,O,!1);else{let et=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=C.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,dt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(O,C,Z){let j=n.get(O);C!==void 0&&ht(j.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&kt(O)}function re(O){let C=O.texture,Z=n.get(O),j=n.get(C);O.addEventListener("dispose",b);let et=O.textures,dt=O.isWebGLCubeRenderTarget===!0,mt=et.length>1;if(mt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=C.version,o.memory.textures++),dt){Z.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(C.mipmaps&&C.mipmaps.length>0){Z.__webglFramebuffer[nt]=[];for(let at=0;at<C.mipmaps.length;at++)Z.__webglFramebuffer[nt][at]=i.createFramebuffer()}else Z.__webglFramebuffer[nt]=i.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){Z.__webglFramebuffer=[];for(let nt=0;nt<C.mipmaps.length;nt++)Z.__webglFramebuffer[nt]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(mt)for(let nt=0,at=et.length;nt<at;nt++){let gt=n.get(et[nt]);gt.__webglTexture===void 0&&(gt.__webglTexture=i.createTexture(),o.memory.textures++)}if(O.samples>0&&Fe(O)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let nt=0;nt<et.length;nt++){let at=et[nt];Z.__webglColorRenderbuffer[nt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[nt]);let gt=r.convert(at.format,at.colorSpace),Lt=r.convert(at.type),_t=v(at.internalFormat,gt,Lt,at.normalized,at.colorSpace,O.isXRRenderTarget===!0),xt=we(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,_t,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,Z.__webglColorRenderbuffer[nt])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),Pt(Z.__webglDepthRenderbuffer,O,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(dt){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),ct(i.TEXTURE_CUBE_MAP,C);for(let nt=0;nt<6;nt++)if(C.mipmaps&&C.mipmaps.length>0)for(let at=0;at<C.mipmaps.length;at++)ht(Z.__webglFramebuffer[nt][at],O,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,at);else ht(Z.__webglFramebuffer[nt],O,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);m(C)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let nt=0,at=et.length;nt<at;nt++){let gt=et[nt],Lt=n.get(gt),_t=i.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(_t=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,Lt.__webglTexture),ct(_t,gt),ht(Z.__webglFramebuffer,O,gt,i.COLOR_ATTACHMENT0+nt,_t,0),m(gt)&&_(_t)}e.unbindTexture()}else{let nt=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(nt=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(nt,j.__webglTexture),ct(nt,C),C.mipmaps&&C.mipmaps.length>0)for(let at=0;at<C.mipmaps.length;at++)ht(Z.__webglFramebuffer[at],O,C,i.COLOR_ATTACHMENT0,nt,at);else ht(Z.__webglFramebuffer,O,C,i.COLOR_ATTACHMENT0,nt,0);m(C)&&_(nt),e.unbindTexture()}O.depthBuffer&&kt(O)}function Wt(O){let C=O.textures;for(let Z=0,j=C.length;Z<j;Z++){let et=C[Z];if(m(et)){let dt=M(O),mt=n.get(et).__webglTexture;e.bindTexture(dt,mt),_(dt),e.unbindTexture()}}}let Me=[],ke=[];function an(O){if(O.samples>0){if(Fe(O)===!1){let C=O.textures,Z=O.width,j=O.height,et=i.COLOR_BUFFER_BIT,dt=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(O),nt=C.length>1;if(nt)for(let gt=0;gt<C.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);let at=O.texture.mipmaps;at&&at.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let gt=0;gt<C.length;gt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),nt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[gt]);let Lt=n.get(C[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Lt,0)}i.blitFramebuffer(0,0,Z,j,0,0,Z,j,et,i.NEAREST),l===!0&&(Me.length=0,ke.length=0,Me.push(i.COLOR_ATTACHMENT0+gt),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&(Me.push(dt),ke.push(dt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Me))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),nt)for(let gt=0;gt<C.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,mt.__webglColorRenderbuffer[gt]);let Lt=n.get(C[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&l){let C=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[C])}}}function we(O){return Math.min(s.maxSamples,O.samples)}function Fe(O){let C=n.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Y(O){let C=o.render.frame;u.get(O)!==C&&(u.set(O,C),O.update())}function $e(O,C){let Z=O.colorSpace,j=O.format,et=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||Z!==cr&&Z!==ii&&(oe.getTransfer(Z)===pe?(j!==vn||et!==pn)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Vt("WebGLTextures: Unsupported texture color space:",Z)),C}function me(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(c.width=O.naturalWidth||O.width,c.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(c.width=O.displayWidth,c.height=O.displayHeight):(c.width=O.width,c.height=O.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=I,this.getTextureUnits=R,this.setTextureUnits=L,this.setTexture2D=k,this.setTexture2DArray=B,this.setTexture3D=z,this.setTextureCube=V,this.rebindTextures=Ht,this.setupRenderTarget=re,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=an,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=Fe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function S_(i,t){function e(n,s=ii){let r,o=oe.getTransfer(s);if(n===pn)return i.UNSIGNED_BYTE;if(n===Ia)return i.UNSIGNED_SHORT_4_4_4_4;if(n===La)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vc)return i.BYTE;if(n===Gc)return i.SHORT;if(n===ks)return i.UNSIGNED_SHORT;if(n===Pa)return i.INT;if(n===Cn)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===In)return i.HALF_FLOAT;if(n===Xc)return i.ALPHA;if(n===Yc)return i.RGB;if(n===vn)return i.RGBA;if(n===On)return i.DEPTH_COMPONENT;if(n===Ai)return i.DEPTH_STENCIL;if(n===qc)return i.RED;if(n===Fa)return i.RED_INTEGER;if(n===Ri)return i.RG;if(n===Da)return i.RG_INTEGER;if(n===Na)return i.RGBA_INTEGER;if(n===Lr||n===Fr||n===Dr||n===Nr)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ua||n===Oa||n===Ba||n===za)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===za)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ka||n===Va||n===Ga||n===Ha||n===Wa||n===Ur||n===Xa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ka||n===Va)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ga)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ha)return r.COMPRESSED_R11_EAC;if(n===Wa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ur)return r.COMPRESSED_RG11_EAC;if(n===Xa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ya||n===qa||n===$a||n===Za||n===Ja||n===Ka||n===ja||n===Qa||n===tl||n===el||n===nl||n===il||n===sl||n===rl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ya)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$a)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Za)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ja)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ka)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ja)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===tl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===el)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===il)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ol||n===al||n===ll)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ol)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===al)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ll)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cl||n===ul||n===Or||n===hl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===cl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ul)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Or)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var w_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,T_=`
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

}`,_u=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new xr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new en({vertexShader:w_,fragmentShader:T_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ut(new ni(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yu=class extends Bn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,p=null,x=typeof XRWebGLBinding<"u",g=new _u,m={},_=e.getContextAttributes(),M=null,v=null,y=[],w=[],T=new Qt,b=null,S=null,E=new je;E.viewport=new Ee;let P=new je;P.viewport=new Ee;let A=[E,P],I=new Ta,R=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let X=y[q];return X===void 0&&(X=new Ds,y[q]=X),X.getTargetRaySpace()},this.getControllerGrip=function(q){let X=y[q];return X===void 0&&(X=new Ds,y[q]=X),X.getGripSpace()},this.getHand=function(q){let X=y[q];return X===void 0&&(X=new Ds,y[q]=X),X.getHandSpace()};function N(q){let X=w.indexOf(q.inputSource);if(X===-1)return;let it=y[X];it!==void 0&&(it.update(q.inputSource,q.frame,c||o),it.dispatchEvent({type:q.type,data:q.inputSource}))}function U(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",k);for(let q=0;q<y.length;q++){let X=w[q];X!==null&&(w[q]=null,y[q].disconnect(X))}R=null,L=null,g.reset();for(let q in m)delete m[q];if(t.setRenderTarget(M),d=null,f=null,h=null,s=null,v=null,pt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(T.width,T.height,!1),S!==null){let q=S.camera;q.fov=S.fov,q.zoom=S.zoom,q.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",U),s.addEventListener("inputsourceschange",k),_.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(T),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let it=null,ut=null,ht=null;_.depth&&(ht=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=_.stencil?Ai:On,ut=_.stencil?Vs:Cn);let Pt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Pt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new tn(f.textureWidth,f.textureHeight,{format:vn,type:pn,depthTexture:new _i(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let it={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new tn(d.framebufferWidth,d.framebufferHeight,{format:vn,type:pn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),pt.setContext(s),pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k(q){for(let X=0;X<q.removed.length;X++){let it=q.removed[X],ut=w.indexOf(it);ut>=0&&(w[ut]=null,y[ut].disconnect(it))}for(let X=0;X<q.added.length;X++){let it=q.added[X],ut=w.indexOf(it);if(ut===-1){for(let Pt=0;Pt<y.length;Pt++)if(Pt>=w.length){w.push(it),ut=Pt;break}else if(w[Pt]===null){w[Pt]=it,ut=Pt;break}if(ut===-1)break}let ht=y[ut];ht&&ht.connect(it)}}let B=new G,z=new G;function V(q,X,it){B.setFromMatrixPosition(X.matrixWorld),z.setFromMatrixPosition(it.matrixWorld);let ut=B.distanceTo(z),ht=X.projectionMatrix.elements,Pt=it.projectionMatrix.elements,te=ht[14]/(ht[10]-1),kt=ht[14]/(ht[10]+1),Ht=(ht[9]+1)/ht[5],re=(ht[9]-1)/ht[5],Wt=(ht[8]-1)/ht[0],Me=(Pt[8]+1)/Pt[0],ke=te*Wt,an=te*Me,we=ut/(-Wt+Me),Fe=we*-Wt;if(X.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Fe),q.translateZ(we),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ht[10]===-1)q.projectionMatrix.copy(X.projectionMatrix),q.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{let Y=te+we,$e=kt+we,me=ke-Fe,O=an+(ut-Fe),C=Ht*kt/$e*Y,Z=re*kt/$e*Y;q.projectionMatrix.makePerspective(me,O,C,Z,Y,$e),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function st(q,X){X===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(X.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let X=q.near,it=q.far;g.texture!==null&&(g.depthNear>0&&(X=g.depthNear),g.depthFar>0&&(it=g.depthFar)),I.near=P.near=E.near=X,I.far=P.far=E.far=it,(R!==I.near||L!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),R=I.near,L=I.far),I.layers.mask=q.layers.mask|6,E.layers.mask=I.layers.mask&-5,P.layers.mask=I.layers.mask&-3;let ut=q.parent,ht=I.cameras;st(I,ut);for(let Pt=0;Pt<ht.length;Pt++)st(ht[Pt],ut);ht.length===2?V(I,E,P):I.projectionMatrix.copy(E.projectionMatrix),S===null&&q.isPerspectiveCamera&&(S={camera:q,fov:q.fov,zoom:q.zoom}),$(q,I,ut)};function $(q,X,it){it===null?q.matrix.copy(X.matrixWorld):(q.matrix.copy(it.matrixWorld),q.matrix.invert(),q.matrix.multiply(X.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(X.projectionMatrix),q.projectionMatrixInverse.copy(X.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=na*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(q){return m[q]};let ot=null;function ct(q,X){if(u=X.getViewerPose(c||o),p=X,u!==null){let it=u.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let ut=!1;it.length!==I.cameras.length&&(I.cameras.length=0,ut=!0);for(let kt=0;kt<it.length;kt++){let Ht=it[kt],re=null;if(d!==null)re=d.getViewport(Ht);else{let Me=h.getViewSubImage(f,Ht);re=Me.viewport,kt===0&&(t.setRenderTargetTextures(v,Me.colorTexture,Me.depthStencilTexture),t.setRenderTarget(v))}let Wt=A[kt];Wt===void 0&&(Wt=new je,Wt.layers.enable(kt),Wt.viewport=new Ee,A[kt]=Wt),Wt.matrix.fromArray(Ht.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Ht.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(re.x,re.y,re.width,re.height),kt===0&&(I.matrix.copy(Wt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),ut===!0&&I.cameras.push(Wt)}let ht=s.enabledFeatures;if(ht&&ht.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let kt=h.getDepthInformation(it[0]);kt&&kt.isValid&&kt.texture&&g.init(kt,s.renderState)}if(ht&&ht.includes("camera-access")&&x){t.state.unbindTexture(),h=n.getBinding();for(let kt=0;kt<it.length;kt++){let Ht=it[kt].camera;if(Ht){let re=m[Ht];re||(re=new xr,m[Ht]=re);let Wt=h.getCameraImage(Ht);re.sourceTexture=Wt}}}}for(let it=0;it<y.length;it++){let ut=w[it],ht=y[it];ut!==null&&ht!==void 0&&ht.update(ut,X,c||o)}ot&&ot(q,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),p=null}let pt=new fd;pt.setAnimationLoop(ct),this.setAnimationLoop=function(q){ot=q},this.dispose=function(){}}},E_=new Se,bd=new Xt;bd.set(-1,0,0,0,1,0,0,0,1);function A_(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,jc(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,_,M,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),h(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,_,M):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===qe&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===qe&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=t.get(m),M=_.envMap,v=_.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(E_.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(bd),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,_,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=M*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===qe&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let _=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function R_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){let w=y.program;n.uniformBlockBinding(v,w)}function c(v,y){let w=s[v.id];w===void 0&&(g(v),w=u(v),s[v.id]=w,v.addEventListener("dispose",_));let T=y.program;n.updateUBOMapping(v,T);let b=t.render.frame;r[v.id]!==b&&(f(v),r[v.id]=b)}function u(v){let y=h();v.__bindingPointIndex=y;let w=i.createBuffer(),T=v.__size,b=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,T,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,w),w}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let y=s[v.id],w=v.uniforms,T=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let b=0,S=w.length;b<S;b++){let E=w[b];if(Array.isArray(E))for(let P=0,A=E.length;P<A;P++)d(E[P],b,P,T);else d(E,b,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,y,w,T){if(x(v,y,w,T)===!0){let b=v.__offset,S=v.value;if(Array.isArray(S)){let E=0;for(let P=0;P<S.length;P++){let A=S[P],I=m(A);p(A,v.__data,E),typeof A!="number"&&typeof A!="boolean"&&!A.isMatrix3&&!ArrayBuffer.isView(A)&&(E+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(S,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,v.__data)}}function p(v,y,w){typeof v=="number"||typeof v=="boolean"?y[0]=v:v.isMatrix3?(y[0]=v.elements[0],y[1]=v.elements[1],y[2]=v.elements[2],y[3]=0,y[4]=v.elements[3],y[5]=v.elements[4],y[6]=v.elements[5],y[7]=0,y[8]=v.elements[6],y[9]=v.elements[7],y[10]=v.elements[8],y[11]=0):ArrayBuffer.isView(v)?y.set(new v.constructor(v.buffer,v.byteOffset,y.length)):v.toArray(y,w)}function x(v,y,w,T){let b=v.value,S=y+"_"+w;if(T[S]===void 0)return typeof b=="number"||typeof b=="boolean"?T[S]=b:ArrayBuffer.isView(b)?T[S]=b.slice():T[S]=b.clone(),!0;{let E=T[S];if(typeof b=="number"||typeof b=="boolean"){if(E!==b)return T[S]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(E.equals(b)===!1)return E.copy(b),!0}}return!1}function g(v){let y=v.uniforms,w=0,T=16;for(let S=0,E=y.length;S<E;S++){let P=Array.isArray(y[S])?y[S]:[y[S]];for(let A=0,I=P.length;A<I;A++){let R=P[A],L=Array.isArray(R.value)?R.value:[R.value];for(let N=0,U=L.length;N<U;N++){let k=L[N],B=m(k),z=w%T,V=z%B.boundary,st=z+V;w+=V,st!==0&&T-st<B.storage&&(w+=T-st),R.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=w,w+=B.storage}}}let b=w%T;return b>0&&(w+=T-b),v.__size=w,v.__cache={},this}function m(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",v),y}function _(v){let y=v.target;y.removeEventListener("dispose",_);let w=o.indexOf(y.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function M(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:M}}var C_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Hn=null;function P_(){return Hn===null&&(Hn=new oa(C_,16,16,Ri,In),Hn.name="DFG_LUT",Hn.minFilter=We,Hn.magFilter=We,Hn.wrapS=fn,Hn.wrapT=fn,Hn.generateMipmaps=!1,Hn.needsUpdate=!0),Hn}var ns=class{constructor(t={}){let{canvas:e=Ff(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=pn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=d,g=new Set([Na,Da,Fa]),m=new Set([pn,Cn,ks,Vs,Ia,La]),_=new Uint32Array(4),M=new Int32Array(4),v=new G,y=null,w=null,T=[],b=[],S=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,P=!1,A=null,I=null,R=null,L=null;this._outputColorSpace=Ie;let N=0,U=0,k=null,B=-1,z=null,V=new Ee,st=new Ee,$=null,ot=new Q(0),ct=0,pt=e.width,q=e.height,X=1,it=null,ut=null,ht=new Ee(0,0,pt,q),Pt=new Ee(0,0,pt,q),te=!1,kt=new mr,Ht=!1,re=!1,Wt=new Se,Me=new G,ke=new Ee,an={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},we=!1;function Fe(){return k===null?X:1}let Y=n;function $e(F,H){return e.getContext(F,H)}let me,O,C,Z,j,et,dt,mt,nt,at,gt,Lt,_t,xt,Ft,Bt,$t,W,bt,rt,vt,wt,lt;try{let F={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",be,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",Mn,!1),Y===null){let H="webgl2";if(Y=$e(H,F),Y===null)throw $e(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Dt()}catch(F){throw e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",Mn,!1),Vt("WebGLRenderer: "+F.message),F}function Dt(){me=new Ob(Y),me.init(),vt=new S_(Y,me),O=new Ab(Y,me,t,vt),C=new y_(Y,me),O.reversedDepthBuffer&&f&&C.buffers.depth.setReversed(!0),I=Y.createFramebuffer(),R=Y.createFramebuffer(),L=Y.createFramebuffer(),Z=new kb(Y),j=new a_,et=new M_(Y,me,C,j,O,vt,Z),dt=new Ub(E),mt=new G0(Y),wt=new Tb(Y,mt),nt=new Bb(Y,mt,Z,wt),at=new Gb(Y,nt,mt,wt,Z),W=new Vb(Y,O,et),Ft=new Rb(j),gt=new o_(E,dt,me,O,wt,Ft),Lt=new A_(E,j),_t=new c_,xt=new m_(me),$t=new wb(E,dt,C,at,p,l),Bt=new __(E,at,O),lt=new R_(Y,Z,O,C),bt=new Eb(Y,me,Z),rt=new zb(Y,me,Z),Z.programs=gt.programs,E.capabilities=O,E.extensions=me,E.properties=j,E.renderLists=_t,E.shadowMap=Bt,E.state=C,E.info=Z}x!==pn&&(S=new Wb(x,e.width,e.height,a,s,r));let Ct=new yu(E,Y);this.xr=Ct,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){let F=me.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){let F=me.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(F){F!==void 0&&(X=F,this.setSize(pt,q,!1))},this.getSize=function(F){return F.set(pt,q)},this.setSize=function(F,H,tt=!0){if(Ct.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}pt=F,q=H,e.width=Math.floor(F*X),e.height=Math.floor(H*X),tt===!0&&(e.style.width=F+"px",e.style.height=H+"px"),S!==null&&S.setSize(e.width,e.height),this.setViewport(0,0,F,H)},this.getDrawingBufferSize=function(F){return F.set(pt*X,q*X).floor()},this.setDrawingBufferSize=function(F,H,tt){pt=F,q=H,X=tt,e.width=Math.floor(F*tt),e.height=Math.floor(H*tt),this.setViewport(0,0,F,H)},this.setEffects=function(F){if(x===pn){Vt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(F){for(let H=0;H<F.length;H++)if(F[H].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(F||[])},this.getCurrentViewport=function(F){return F.copy(V)},this.getViewport=function(F){return F.copy(ht)},this.setViewport=function(F,H,tt,J){F.isVector4?ht.set(F.x,F.y,F.z,F.w):ht.set(F,H,tt,J),C.viewport(V.copy(ht).multiplyScalar(X).round())},this.getScissor=function(F){return F.copy(Pt)},this.setScissor=function(F,H,tt,J){F.isVector4?Pt.set(F.x,F.y,F.z,F.w):Pt.set(F,H,tt,J),C.scissor(st.copy(Pt).multiplyScalar(X).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(F){C.setScissorTest(te=F)},this.setOpaqueSort=function(F){it=F},this.setTransparentSort=function(F){ut=F},this.getClearColor=function(F){return F.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor(...arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha(...arguments)},this.clear=function(F=!0,H=!0,tt=!0){let J=0;if(F){let K=!1;if(k!==null){let St=k.texture.format;K=g.has(St)}if(K){let St=k.texture.type,Et=m.has(St),Mt=$t.getClearColor(),At=$t.getClearAlpha(),It=Mt.r,Kt=Mt.g,ne=Mt.b;Et?(_[0]=It,_[1]=Kt,_[2]=ne,_[3]=At,Y.clearBufferuiv(Y.COLOR,0,_)):(M[0]=It,M[1]=Kt,M[2]=ne,M[3]=At,Y.clearBufferiv(Y.COLOR,0,M))}else J|=Y.COLOR_BUFFER_BIT}H&&(J|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),tt&&(J|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&Y.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(F){F.setRenderer(this),A=F},this.dispose=function(){e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",Mn,!1),$t.dispose(),_t.dispose(),xt.dispose(),j.dispose(),dt.dispose(),at.dispose(),wt.dispose(),lt.dispose(),gt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",fh),Ct.removeEventListener("sessionend",dh),Vi.stop()};function be(F){F.preventDefault(),Kc("WebGLRenderer: Context Lost."),P=!0}function fe(){Kc("WebGLRenderer: Context Restored."),P=!1;let F=Z.autoReset,H=Bt.enabled,tt=Bt.autoUpdate,J=Bt.needsUpdate,K=Bt.type;Dt(),Z.autoReset=F,Bt.enabled=H,Bt.autoUpdate=tt,Bt.needsUpdate=J,Bt.type=K}function Mn(F){Vt("WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function Dn(F){let H=F.target;H.removeEventListener("dispose",Dn),Um(H)}function Um(F){Om(F),j.remove(F)}function Om(F){let H=j.get(F).programs;H!==void 0&&(H.forEach(function(tt){gt.releaseProgram(tt)}),F.isShaderMaterial&&gt.releaseShaderCache(F))}this.renderBufferDirect=function(F,H,tt,J,K,St){H===null&&(H=an);let Et=K.isMesh&&K.matrixWorld.determinantAffine()<0,Mt=km(F,H,tt,J,K);C.setMaterial(J,Et);let At=tt.index,It=1;if(J.wireframe===!0){if(At=nt.getWireframeAttribute(tt),At===void 0)return;It=2}let Kt=tt.drawRange,ne=tt.attributes.position,Rt=Kt.start*It,de=(Kt.start+Kt.count)*It;St!==null&&(Rt=Math.max(Rt,St.start*It),de=Math.min(de,(St.start+St.count)*It)),At!==null?(Rt=Math.max(Rt,0),de=Math.min(de,At.count)):ne!=null&&(Rt=Math.max(Rt,0),de=Math.min(de,ne.count));let De=de-Rt;if(De<0||De===1/0)return;wt.setup(K,J,Mt,tt,At);let _e,xe=bt;if(At!==null&&(_e=mt.get(At),xe=rt,xe.setIndex(_e)),K.isMesh)J.wireframe===!0?(C.setLineWidth(J.wireframeLinewidth*Fe()),xe.setMode(Y.LINES)):xe.setMode(Y.TRIANGLES);else if(K.isLine){let Ze=J.linewidth;Ze===void 0&&(Ze=1),C.setLineWidth(Ze*Fe()),K.isLineSegments?xe.setMode(Y.LINES):K.isLineLoop?xe.setMode(Y.LINE_LOOP):xe.setMode(Y.LINE_STRIP)}else K.isPoints?xe.setMode(Y.POINTS):K.isSprite&&xe.setMode(Y.TRIANGLES);if(K.isBatchedMesh)if(me.get("WEBGL_multi_draw"))xe.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let Ze=K._multiDrawStarts,Tt=K._multiDrawCounts,rn=K._multiDrawCount,le=At?mt.get(At).bytesPerElement:1,gn=j.get(J).currentProgram.getUniforms();for(let Nn=0;Nn<rn;Nn++)gn.setValue(Y,"_gl_DrawID",Nn),xe.render(Ze[Nn]/le,Tt[Nn])}else if(K.isInstancedMesh)xe.renderInstances(Rt,De,K.count);else if(tt.isInstancedBufferGeometry){let Ze=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,Tt=Math.min(tt.instanceCount,Ze);xe.renderInstances(Rt,De,Tt)}else xe.render(Rt,De)};function hh(F,H,tt,J){A!==null&&F.isNodeMaterial&&A.setObject(J,F),Ht===!0&&Ft.setState(F,tt,!1),F.transparent===!0&&F.side===ue&&F.forceSinglePass===!1?(F.side=qe,F.needsUpdate=!0,bo(F,H,J),F.side=Vn,F.needsUpdate=!0,bo(F,H,J),F.side=ue):bo(F,H,J)}this.compile=function(F,H,tt=null){tt===null&&(tt=F),A!==null&&A.renderStart(F,H,tt),w=xt.get(tt),w.init(H),b.push(w),tt.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(w.pushLight(K),K.castShadow&&w.pushShadow(K))}),F!==tt&&F.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(w.pushLight(K),K.castShadow&&w.pushShadow(K))}),w.setupLights(),A!==null&&A.updateLights(w.state.lightsArray),re=this.localClippingEnabled,Ht=Ft.init(this.clippingPlanes,re),Ht===!0&&Ft.setGlobalState(this.clippingPlanes,H),A!==null&&Bt.render(w.state.shadowsArray,tt,H);let J=new Set;return F.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let St=K.material;if(St)if(Array.isArray(St))for(let Et=0;Et<St.length;Et++){let Mt=St[Et];hh(Mt,tt,H,K),J.add(Mt)}else hh(St,tt,H,K),J.add(St)}),w=b.pop(),A!==null&&A.renderEnd(),J},this.compileAsync=function(F,H,tt=null){let J=this.compile(F,H,tt);return new Promise(K=>{function St(){if(J.forEach(function(Et){let At=j.get(Et).currentProgram;(At===void 0||At.isReady())&&J.delete(Et)}),J.size===0){K(F);return}setTimeout(St,10)}me.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Yl=null;function Bm(F){Yl&&Yl(F)}function fh(){Vi.stop()}function dh(){Vi.start()}let Vi=new fd;Vi.setAnimationLoop(Bm),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(F){Yl=F,Ct.setAnimationLoop(F),F===null?Vi.stop():Vi.start()},Ct.addEventListener("sessionstart",fh),Ct.addEventListener("sessionend",dh),this.render=function(F,H){if(H!==void 0&&H.isCamera!==!0){Vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;A!==null&&A.renderStart(F,H);let tt=Ct.enabled===!0&&Ct.isPresenting===!0,J=S!==null&&(k===null||tt)&&S.begin(E,k);if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(H),H=Ct.getCamera()),F.isScene===!0&&F.onBeforeRender(E,F,H,k),w=xt.get(F,b.length),w.init(H),w.state.textureUnits=et.getTextureUnits(),b.push(w),Wt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),kt.setFromProjectionMatrix(Wt,An,H.reversedDepth),re=this.localClippingEnabled,Ht=Ft.init(this.clippingPlanes,re),y=_t.get(F,T.length),y.init(),T.push(y),Ct.enabled===!0&&Ct.isPresenting===!0){let Et=E.xr.getDepthSensingMesh();Et!==null&&ql(Et,H,-1/0,E.sortObjects)}ql(F,H,0,E.sortObjects),y.finish(),A!==null&&A.updateLights(w.state.lightsArray),E.sortObjects===!0&&y.sort(it,ut),we=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,we&&$t.addToRenderList(y,F),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ht===!0&&Ft.beginShadows();let K=w.state.shadowsArray;if(Bt.render(K,F,H),Ht===!0&&Ft.endShadows(),(J&&S.hasRenderPass())===!1){let Et=y.opaque,Mt=y.transmissive;if(w.setupLights(),H.isArrayCamera){let At=H.cameras;if(Mt.length>0)for(let It=0,Kt=At.length;It<Kt;It++){let ne=At[It];mh(Et,Mt,F,ne)}we&&$t.render(F);for(let It=0,Kt=At.length;It<Kt;It++){let ne=At[It];ph(y,F,ne,ne.viewport)}}else Mt.length>0&&mh(Et,Mt,F,H),we&&$t.render(F),ph(y,F,H)}k!==null&&U===0&&(et.updateMultisampleRenderTarget(k),et.updateRenderTargetMipmap(k)),J&&S.end(E),F.isScene===!0&&F.onAfterRender(E,F,H),wt.resetDefaultState(),B=-1,z=null,b.pop(),b.length>0?(w=b[b.length-1],et.setTextureUnits(w.state.textureUnits),Ht===!0&&Ft.setGlobalState(E.clippingPlanes,w.state.camera)):w=null,T.pop(),T.length>0?y=T[T.length-1]:y=null,A!==null&&A.renderEnd()};function ql(F,H,tt,J){if(F.visible===!1)return;if(F.layers.test(H.layers)){if(F.isGroup)tt=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(H);else if(F.isLightProbeGrid)w.pushLightProbeGrid(F);else if(F.isLight)w.pushLight(F),F.castShadow&&w.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||F.intersectsFrustum(kt)){J&&ke.setFromMatrixPosition(F.matrixWorld).applyMatrix4(Wt);let Et=at.update(F),Mt=F.material;Mt.visible&&y.push(F,Et,Mt,tt,ke.z,null,H)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||F.intersectsFrustum(kt))){let Et=at.update(F),Mt=F.material;if(J&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),ke.copy(F.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),ke.copy(Et.boundingSphere.center)),ke.applyMatrix4(F.matrixWorld).applyMatrix4(Wt)),Array.isArray(Mt)){let At=Et.groups;for(let It=0,Kt=At.length;It<Kt;It++){let ne=At[It],Rt=Mt[ne.materialIndex];Rt&&Rt.visible&&y.push(F,Et,Rt,tt,ke.z,ne,H)}}else Mt.visible&&y.push(F,Et,Mt,tt,ke.z,null,H)}}let St=F.children;for(let Et=0,Mt=St.length;Et<Mt;Et++)ql(St[Et],H,tt,J)}function ph(F,H,tt,J){let{opaque:K,transmissive:St,transparent:Et}=F;w.setupLightsView(tt),Ht===!0&&Ft.setGlobalState(E.clippingPlanes,tt),J&&C.viewport(V.copy(J)),K.length>0&&xo(K,H,tt),St.length>0&&xo(St,H,tt),Et.length>0&&xo(Et,H,tt),C.buffers.depth.setTest(!0),C.buffers.depth.setMask(!0),C.buffers.color.setMask(!0),C.setPolygonOffset(!1)}function mh(F,H,tt,J){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[J.id]===void 0){let Rt=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[J.id]=new tn(1,1,{generateMipmaps:!0,type:Rt?In:pn,minFilter:Ei,samples:Math.max(4,O.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:oe.workingColorSpace})}let St=w.state.transmissionRenderTarget[J.id],Et=J.viewport||V;St.setSize(Et.z*E.transmissionResolutionScale,Et.w*E.transmissionResolutionScale);let Mt=E.getRenderTarget(),At=E.getActiveCubeFace(),It=E.getActiveMipmapLevel();E.setRenderTarget(St),E.getClearColor(ot),ct=E.getClearAlpha(),ct<1&&E.setClearColor(16777215,.5),E.clear(),we&&$t.render(tt);let Kt=E.toneMapping;E.toneMapping=Rn;let ne=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),w.setupLightsView(J),Ht===!0&&Ft.setGlobalState(E.clippingPlanes,J),xo(F,tt,J),et.updateMultisampleRenderTarget(St),et.updateRenderTargetMipmap(St),me.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let de=0,De=H.length;de<De;de++){let _e=H[de],{object:xe,geometry:Ze,material:Tt,group:rn}=_e;if(Tt.side===ue&&xe.layers.test(J.layers)){let le=Tt.side;Tt.side=qe,Tt.needsUpdate=!0,gh(xe,tt,J,Ze,Tt,rn),Tt.side=le,Tt.needsUpdate=!0,Rt=!0}}Rt===!0&&(et.updateMultisampleRenderTarget(St),et.updateRenderTargetMipmap(St))}E.setRenderTarget(Mt,At,It),E.setClearColor(ot,ct),ne!==void 0&&(J.viewport=ne),E.toneMapping=Kt}function xo(F,H,tt){let J=H.isScene===!0?H.overrideMaterial:null;for(let K=0,St=F.length;K<St;K++){let Et=F[K],{object:Mt,geometry:At,group:It}=Et,Kt=Et.material;Kt.allowOverride===!0&&J!==null&&(Kt=J),Mt.layers.test(tt.layers)&&gh(Mt,H,tt,At,Kt,It)}}function gh(F,H,tt,J,K,St){A!==null&&K.isNodeMaterial&&A.setObject(F,K),F.onBeforeRender(E,H,tt,J,K,St),F.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),K.onBeforeRender(E,H,tt,J,F,St),K.transparent===!0&&K.side===ue&&K.forceSinglePass===!1?(K.side=qe,K.needsUpdate=!0,E.renderBufferDirect(tt,H,J,K,F,St),K.side=Vn,K.needsUpdate=!0,E.renderBufferDirect(tt,H,J,K,F,St),K.side=ue):E.renderBufferDirect(tt,H,J,K,F,St),F.onAfterRender(E,H,tt,J,K,St)}function bo(F,H,tt){H.isScene!==!0&&(H=an);let J=j.get(F),K=w.state.lights,St=w.state.shadowsArray,Et=K.state.version,Mt=gt.getParameters(F,K.state,St,H,tt,w.state.lightProbeGridArray),At=gt.getProgramCacheKey(Mt),It=J.programs;J.environment=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?H.environment:null,J.fog=H.fog;let Kt=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap;J.envMap=dt.get(F.envMap||J.environment,Kt),J.envMapRotation=J.environment!==null&&F.envMap===null?H.environmentRotation:F.envMapRotation,It===void 0&&(F.addEventListener("dispose",Dn),It=new Map,J.programs=It);let ne=It.get(At);if(ne!==void 0){if(J.currentProgram===ne&&J.lightsStateVersion===Et)return bh(F,Mt),ne}else Mt.uniforms=gt.getUniforms(F),A!==null&&F.isNodeMaterial&&A.build(F,tt,Mt),F.onBeforeCompile(Mt,E),ne=gt.acquireProgram(Mt,At),It.set(At,ne),J.uniforms=Mt.uniforms;let Rt=J.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(Rt.clippingPlanes=Ft.uniform),bh(F,Mt),J.needsLights=Gm(F),J.lightsStateVersion=Et,J.needsLights&&(Rt.ambientLightColor.value=K.state.ambient,Rt.lightProbe.value=K.state.probe,Rt.sunLights.value=K.state.sun,Rt.sunLightShadows.value=K.state.sunShadow,Rt.directionalLights.value=K.state.directional,Rt.directionalLightShadows.value=K.state.directionalShadow,Rt.spotLights.value=K.state.spot,Rt.spotLightShadows.value=K.state.spotShadow,Rt.rectAreaLights.value=K.state.rectArea,Rt.ltc_1.value=K.state.rectAreaLTC1,Rt.ltc_2.value=K.state.rectAreaLTC2,Rt.pointLights.value=K.state.point,Rt.pointLightShadows.value=K.state.pointShadow,Rt.hemisphereLights.value=K.state.hemi,Rt.sunShadowMatrix.value=K.state.sunShadowMatrix,Rt.sunShadowCascade.value=K.state.sunShadowCascade,Rt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Rt.spotLightMatrix.value=K.state.spotLightMatrix,Rt.spotLightMap.value=K.state.spotLightMap,Rt.pointShadowMatrix.value=K.state.pointShadowMatrix),J.lightProbeGrid=w.state.lightProbeGridArray.length>0,J.currentProgram=ne,J.uniformsList=null,ne}function xh(F){if(F.uniformsList===null){let H=F.currentProgram.getUniforms();F.uniformsList=Ws.seqWithValue(H.seq,F.uniforms)}return F.uniformsList}function bh(F,H){let tt=j.get(F);tt.outputColorSpace=H.outputColorSpace,tt.batching=H.batching,tt.batchingColor=H.batchingColor,tt.instancing=H.instancing,tt.instancingColor=H.instancingColor,tt.instancingMorph=H.instancingMorph,tt.skinning=H.skinning,tt.morphTargets=H.morphTargets,tt.morphNormals=H.morphNormals,tt.morphColors=H.morphColors,tt.morphTargetsCount=H.morphTargetsCount,tt.numClippingPlanes=H.numClippingPlanes,tt.numIntersection=H.numClipIntersection,tt.vertexAlphas=H.vertexAlphas,tt.vertexTangents=H.vertexTangents,tt.toneMapping=H.toneMapping}function zm(F,H){if(F.length===0)return null;if(F.length===1)return F[0].texture!==null?F[0]:null;v.setFromMatrixPosition(H.matrixWorld);for(let tt=0,J=F.length;tt<J;tt++){let K=F[tt];if(K.texture!==null&&K.boundingBox.containsPoint(v))return K}return null}function km(F,H,tt,J,K){H.isScene!==!0&&(H=an),et.resetTextureUnits();let St=H.fog,Et=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?H.environment:null,Mt=k===null?E.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:oe.workingColorSpace,At=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,It=dt.get(J.envMap||Et,At),Kt=J.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,ne=!!tt.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Rt=!!tt.morphAttributes.position,de=!!tt.morphAttributes.normal,De=!!tt.morphAttributes.color,_e=Rn;J.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(_e=E.toneMapping);let xe=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Ze=xe!==void 0?xe.length:0,Tt=j.get(J),rn=w.state.lights;if(Ht===!0&&(re===!0||F!==z)){let ve=F===z&&J.id===B;Ft.setState(J,F,ve)}let le=!1;J.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==rn.state.version||Tt.outputColorSpace!==Mt||K.isBatchedMesh&&Tt.batching===!1||!K.isBatchedMesh&&Tt.batching===!0||K.isBatchedMesh&&Tt.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Tt.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Tt.instancing===!1||!K.isInstancedMesh&&Tt.instancing===!0||K.isSkinnedMesh&&Tt.skinning===!1||!K.isSkinnedMesh&&Tt.skinning===!0||K.isInstancedMesh&&Tt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Tt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Tt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Tt.instancingMorph===!1&&K.morphTexture!==null||Tt.envMap!==It||J.fog===!0&&Tt.fog!==St||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==Ft.numPlanes||Tt.numIntersection!==Ft.numIntersection)||Tt.vertexAlphas!==Kt||Tt.vertexTangents!==ne||Tt.morphTargets!==Rt||Tt.morphNormals!==de||Tt.morphColors!==De||Tt.toneMapping!==_e||Tt.morphTargetsCount!==Ze||!!Tt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(le=!0):(le=!0,Tt.__version=J.version);let gn=Tt.currentProgram;le===!0&&(gn=bo(J,H,K),A&&J.isNodeMaterial&&A.onUpdateProgram(J,gn,Tt));let Nn=!1,li=!1,fs=!1,ge=gn.getUniforms(),Pe=Tt.uniforms;if(C.useProgram(gn.program)&&(Nn=!0,li=!0,fs=!0),J.id!==B&&(B=J.id,li=!0),Tt.needsLights){let ve=zm(w.state.lightProbeGridArray,K);Tt.lightProbeGrid!==ve&&(Tt.lightProbeGrid=ve,li=!0)}if(Nn||z!==F){C.buffers.depth.getReversed()&&F.reversedDepth!==!0&&(F._reversedDepth=!0,F.updateProjectionMatrix()),ge.setValue(Y,"projectionMatrix",F.projectionMatrix),ge.setValue(Y,"viewMatrix",F.matrixWorldInverse);let ui=ge.map.cameraPosition;ui!==void 0&&ui.setValue(Y,Me.setFromMatrixPosition(F.matrixWorld)),O.logarithmicDepthBuffer&&ge.setValue(Y,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&ge.setValue(Y,"isOrthographic",F.isOrthographicCamera===!0),z!==F&&(z=F,li=!0,fs=!0)}if(Tt.needsLights&&(rn.state.sunShadowMap.length>0&&ge.setValue(Y,"sunShadowMap",rn.state.sunShadowMap,et),rn.state.directionalShadowMap.length>0&&ge.setValue(Y,"directionalShadowMap",rn.state.directionalShadowMap,et),rn.state.spotShadowMap.length>0&&ge.setValue(Y,"spotShadowMap",rn.state.spotShadowMap,et),rn.state.pointShadowMap.length>0&&ge.setValue(Y,"pointShadowMap",rn.state.pointShadowMap,et)),K.isSkinnedMesh){ge.setOptional(Y,K,"bindMatrix"),ge.setOptional(Y,K,"bindMatrixInverse");let ve=K.skeleton;ve&&(ve.boneTexture===null&&ve.computeBoneTexture(),ge.setValue(Y,"boneTexture",ve.boneTexture,et))}K.isBatchedMesh&&(ge.setOptional(Y,K,"batchingTexture"),ge.setValue(Y,"batchingTexture",K._matricesTexture,et),ge.setOptional(Y,K,"batchingIdTexture"),ge.setValue(Y,"batchingIdTexture",K._indirectTexture,et),ge.setOptional(Y,K,"batchingColorTexture"),K._colorsTexture!==null&&ge.setValue(Y,"batchingColorTexture",K._colorsTexture,et));let ci=tt.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&W.update(K,tt,gn),(li||Tt.receiveShadow!==K.receiveShadow)&&(Tt.receiveShadow=K.receiveShadow,ge.setValue(Y,"receiveShadow",K.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&H.environment!==null&&(Pe.envMapIntensity.value=H.environmentIntensity),Pe.dfgLUT!==void 0&&(Pe.dfgLUT.value=P_()),li){if(ge.setValue(Y,"toneMappingExposure",E.toneMappingExposure),Tt.needsLights&&Vm(Pe,fs),St&&J.fog===!0&&Lt.refreshFogUniforms(Pe,St),Lt.refreshMaterialUniforms(Pe,J,X,q,w.state.transmissionRenderTarget[F.id]),Tt.needsLights&&Tt.lightProbeGrid){let ve=Tt.lightProbeGrid;Pe.probesSH.value=ve.texture,Pe.probesMin.value.copy(ve.boundingBox.min),Pe.probesMax.value.copy(ve.boundingBox.max),Pe.probesResolution.value.copy(ve.resolution)}Ws.upload(Y,xh(Tt),Pe,et)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ws.upload(Y,xh(Tt),Pe,et),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&ge.setValue(Y,"center",K.center),ge.setValue(Y,"modelViewMatrix",K.modelViewMatrix),ge.setValue(Y,"normalMatrix",K.normalMatrix),ge.setValue(Y,"modelMatrix",K.matrixWorld),J.uniformsGroups!==void 0){let ve=J.uniformsGroups;for(let ui=0,ds=ve.length;ui<ds;ui++){let _h=ve[ui];lt.update(_h,gn),lt.bind(_h,gn)}}return gn}function Vm(F,H){F.ambientLightColor.needsUpdate=H,F.lightProbe.needsUpdate=H,F.sunLights.needsUpdate=H,F.sunLightShadows.needsUpdate=H,F.directionalLights.needsUpdate=H,F.directionalLightShadows.needsUpdate=H,F.pointLights.needsUpdate=H,F.pointLightShadows.needsUpdate=H,F.spotLights.needsUpdate=H,F.spotLightShadows.needsUpdate=H,F.rectAreaLights.needsUpdate=H,F.hemisphereLights.needsUpdate=H}function Gm(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(F,H,tt){let J=j.get(F);J.__autoAllocateDepthBuffer=F.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),j.get(F.texture).__webglTexture=H,j.get(F.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:tt,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(F,H){let tt=j.get(F);tt.__webglFramebuffer=H,tt.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(F,H=0,tt=0){k=F,N=H,U=tt;let J=null,K=!1,St=!1;if(F){let Mt=j.get(F);if(Mt.__useDefaultFramebuffer!==void 0){C.bindFramebuffer(Y.FRAMEBUFFER,Mt.__webglFramebuffer),V.copy(F.viewport),st.copy(F.scissor),$=F.scissorTest,C.viewport(V),C.scissor(st),C.setScissorTest($),B=-1;return}else if(Mt.__webglFramebuffer===void 0)et.setupRenderTarget(F);else if(Mt.__hasExternalTextures)et.rebindTextures(F,j.get(F.texture).__webglTexture,j.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){let Kt=F.depthTexture;if(Mt.__boundDepthTexture!==Kt){if(Kt!==null&&j.has(Kt)&&(F.width!==Kt.image.width||F.height!==Kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");et.setupDepthRenderbuffer(F)}}let At=F.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(St=!0);let It=j.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(It[H])?J=It[H][tt]:J=It[H],K=!0):F.samples>0&&et.useMultisampledRTT(F)===!1?J=j.get(F).__webglMultisampledFramebuffer:Array.isArray(It)?J=It[tt]:J=It,V.copy(F.viewport),st.copy(F.scissor),$=F.scissorTest}else V.copy(ht).multiplyScalar(X).floor(),st.copy(Pt).multiplyScalar(X).floor(),$=te;if(tt!==0&&(J=I),C.bindFramebuffer(Y.FRAMEBUFFER,J)&&C.drawBuffers(F,J),C.viewport(V),C.scissor(st),C.setScissorTest($),K){let Mt=j.get(F.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+H,Mt.__webglTexture,tt)}else if(St){let Mt=H;for(let At=0;At<F.textures.length;At++){let It=j.get(F.textures[At]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+At,It.__webglTexture,tt,Mt)}}else if(F!==null&&tt!==0){let Mt=j.get(F.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Mt.__webglTexture,tt)}B=-1};function vh(F){let H=j.get(F);return(H.__readFormat!==F.format||H.__readType!==F.type)&&(H.__readFormat=F.format,H.__readType=F.type,H.__formatReadable=O.textureFormatReadable(F.format),H.__typeReadable=O.textureTypeReadable(F.type)),H}this.readRenderTargetPixels=function(F,H,tt,J,K,St,Et,Mt=0){if(!(F&&F.isWebGLRenderTarget)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=j.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Et!==void 0&&(At=At[Et]),At){C.bindFramebuffer(Y.FRAMEBUFFER,At);try{let It=F.textures[Mt],Kt=It.format,ne=It.type;F.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Mt);let Rt=vh(It);if(Rt.__formatReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Rt.__typeReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=F.width-J&&tt>=0&&tt<=F.height-K&&Y.readPixels(H,tt,J,K,vt.convert(Kt),vt.convert(ne),St)}finally{let It=k!==null?j.get(k).__webglFramebuffer:null;C.bindFramebuffer(Y.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(F,H,tt,J,K,St,Et,Mt=0){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=j.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Et!==void 0&&(At=At[Et]),At)if(H>=0&&H<=F.width-J&&tt>=0&&tt<=F.height-K){C.bindFramebuffer(Y.FRAMEBUFFER,At);let It=F.textures[Mt],Kt=It.format,ne=It.type;F.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Mt);let Rt=vh(It);if(Rt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Rt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let de=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,de),Y.bufferData(Y.PIXEL_PACK_BUFFER,St.byteLength,Y.STREAM_READ),Y.readPixels(H,tt,J,K,vt.convert(Kt),vt.convert(ne),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);let De=k!==null?j.get(k).__webglFramebuffer:null;C.bindFramebuffer(Y.FRAMEBUFFER,De);let _e=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await Nf(Y,_e,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,de),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,St),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(de),Y.deleteSync(_e),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(F,H=null,tt=0){let J=Math.pow(2,-tt),K=Math.floor(F.image.width*J),St=Math.floor(F.image.height*J),Et=H!==null?H.x:0,Mt=H!==null?H.y:0;et.setTexture2D(F,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,tt,0,0,Et,Mt,K,St),C.unbindTexture()},this.copyTextureToTexture=function(F,H,tt=null,J=null,K=0,St=0){let Et,Mt,At,It,Kt,ne,Rt,de,De,_e=F.isCompressedTexture?F.mipmaps[St]:F.image;if(tt!==null)Et=tt.max.x-tt.min.x,Mt=tt.max.y-tt.min.y,At=tt.isBox3?tt.max.z-tt.min.z:1,It=tt.min.x,Kt=tt.min.y,ne=tt.isBox3?tt.min.z:0;else{let Pe=Math.pow(2,-K);Et=Math.floor(_e.width*Pe),Mt=Math.floor(_e.height*Pe),F.isDataArrayTexture?At=_e.depth:F.isData3DTexture?At=Math.floor(_e.depth*Pe):At=1,It=0,Kt=0,ne=0}J!==null?(Rt=J.x,de=J.y,De=J.z):(Rt=0,de=0,De=0);let xe=vt.convert(H.format),Ze=vt.convert(H.type),Tt;H.isData3DTexture?(et.setTexture3D(H,0),Tt=Y.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(et.setTexture2DArray(H,0),Tt=Y.TEXTURE_2D_ARRAY):(et.setTexture2D(H,0),Tt=Y.TEXTURE_2D),C.activeTexture(Y.TEXTURE0),C.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,H.flipY),C.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),C.pixelStorei(Y.UNPACK_ALIGNMENT,H.unpackAlignment);let rn=C.getParameter(Y.UNPACK_ROW_LENGTH),le=C.getParameter(Y.UNPACK_IMAGE_HEIGHT),gn=C.getParameter(Y.UNPACK_SKIP_PIXELS),Nn=C.getParameter(Y.UNPACK_SKIP_ROWS),li=C.getParameter(Y.UNPACK_SKIP_IMAGES);C.pixelStorei(Y.UNPACK_ROW_LENGTH,_e.width),C.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,_e.height),C.pixelStorei(Y.UNPACK_SKIP_PIXELS,It),C.pixelStorei(Y.UNPACK_SKIP_ROWS,Kt),C.pixelStorei(Y.UNPACK_SKIP_IMAGES,ne);let fs=F.isDataArrayTexture||F.isData3DTexture,ge=H.isDataArrayTexture||H.isData3DTexture;if(F.isDepthTexture){let Pe=j.get(F),ci=j.get(H),ve=j.get(Pe.__renderTarget),ui=j.get(ci.__renderTarget);C.bindFramebuffer(Y.READ_FRAMEBUFFER,ve.__webglFramebuffer),C.bindFramebuffer(Y.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let ds=0;ds<At;ds++)fs&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,j.get(F).__webglTexture,K,ne+ds),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,j.get(H).__webglTexture,St,De+ds)),Y.blitFramebuffer(It,Kt,Et,Mt,Rt,de,Et,Mt,Y.DEPTH_BUFFER_BIT,Y.NEAREST);C.bindFramebuffer(Y.READ_FRAMEBUFFER,null),C.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(K!==0||F.isRenderTargetTexture||j.has(F)){let Pe=j.get(F),ci=j.get(H);C.bindFramebuffer(Y.READ_FRAMEBUFFER,R),C.bindFramebuffer(Y.DRAW_FRAMEBUFFER,L);for(let ve=0;ve<At;ve++)fs?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Pe.__webglTexture,K,ne+ve):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Pe.__webglTexture,K),ge?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ci.__webglTexture,St,De+ve):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,ci.__webglTexture,St),K!==0?Y.blitFramebuffer(It,Kt,Et,Mt,Rt,de,Et,Mt,Y.COLOR_BUFFER_BIT,Y.NEAREST):ge?Y.copyTexSubImage3D(Tt,St,Rt,de,De+ve,It,Kt,Et,Mt):Y.copyTexSubImage2D(Tt,St,Rt,de,It,Kt,Et,Mt);C.bindFramebuffer(Y.READ_FRAMEBUFFER,null),C.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else ge?F.isDataTexture||F.isData3DTexture?Y.texSubImage3D(Tt,St,Rt,de,De,Et,Mt,At,xe,Ze,_e.data):H.isCompressedArrayTexture?Y.compressedTexSubImage3D(Tt,St,Rt,de,De,Et,Mt,At,xe,_e.data):Y.texSubImage3D(Tt,St,Rt,de,De,Et,Mt,At,xe,Ze,_e):F.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,St,Rt,de,Et,Mt,xe,Ze,_e.data):F.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,St,Rt,de,_e.width,_e.height,xe,_e.data):Y.texSubImage2D(Y.TEXTURE_2D,St,Rt,de,Et,Mt,xe,Ze,_e);C.pixelStorei(Y.UNPACK_ROW_LENGTH,rn),C.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,le),C.pixelStorei(Y.UNPACK_SKIP_PIXELS,gn),C.pixelStorei(Y.UNPACK_SKIP_ROWS,Nn),C.pixelStorei(Y.UNPACK_SKIP_IMAGES,li),St===0&&H.generateMipmaps&&Y.generateMipmap(Tt),C.unbindTexture()},this.initRenderTarget=function(F){j.get(F).__webglFramebuffer===void 0&&et.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?et.setTextureCube(F,0):F.isData3DTexture?et.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?et.setTexture2DArray(F,0):et.setTexture2D(F,0),C.unbindTexture()},this.resetState=function(){N=0,U=0,k=null,C.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}};function vd(i){let t=i.length/3,e=new Float32Array(t);for(let n=0;n<t;n++){let s=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&s>0&&(e[n]=s)}return e}function _d(i,t,e,n){for(let s=e.start*3;s<e.end*3;s++){let r=t[s];r<=0||(i[s*3]=Math.min(1,n[0]*r),i[s*3+1]=Math.min(1,n[1]*r),i[s*3+2]=Math.min(1,n[2]*r))}}function yd(i){return i.shape==="cyl"&&(i.axis??"y")==="y"&&i.y>.9&&i.h<.02}var I_=[],Mu=new Map,L_=0;function Gr(i){I_=i,Mu=new Map(i.flatMap(t=>t.items.map(e=>[F_(t.id,e.id),e]))),L_++}function F_(i,t){return`pack:${i}:${t}`}function D_(i){return i.startsWith("pack:")}var N_={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function Md(i){return Ae(i)?.parts.find(t=>t.screen)}function Ae(i){if(!D_(i))return;let t=Mu.get(i);if(t)return t;let[,e,...n]=i.split(":"),s=N_[e];return s?Mu.get(`pack:${s}:${n.join(":")}`):void 0}function mn(i,t){let e=Ae(t.type);if(t.mount_y!=null)return t.mount_y;if(t.type==="lamp_wall")return _l;if(Sd.has(t.type))return Math.max(0,i.height-wd(t.type,t.h));if(t.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,t.h));switch(e?.mount){case"surface":return Td(i,t.x,t.z);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,i.height-t.h);default:return e?0:Hr(t)}}var yl={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function Ci(i){return i==="hedge"||i==="fence"||i==="pergola"}function O_(i,t,e){let n=i.slope??0;if(!n||i.type==="pool")return 0;let s=i.slope_dir??"x",r=(c,u)=>s==="x"?c:s==="-x"?-c:s==="z"?u:-u,o=1/0,a=-1/0;for(let[c,u]of i.points){let h=r(c,u);o=Math.min(o,h),a=Math.max(a,h)}if(a-o<1e-6)return 0;let l=Math.min(1,Math.max(0,(r(t,e)-o)/(a-o)));return n*l}function B_(i,t,e,n){return Xr(i,t)+yl[t.type]-Yr(i,t,e,n)}var Su=-.2,Wr={set:!1,level:Su,slope:0,dir:"x",lo:0,hi:1};function Ed(i){let t=i?.settings.terrain??null,e=t?.slope_dir??"x",n=(a,l)=>e==="x"?a:e==="-x"?-a:e==="z"?l:-l,s=i?[...i.floors].filter(a=>a.rooms.length).sort((a,l)=>Math.abs(a.elevation)-Math.abs(l.elevation)):[],r=1/0,o=-1/0;for(let a of s[0]?.rooms??[])for(let[l,c]of a.points)r=Math.min(r,n(l,c)),o=Math.max(o,n(l,c));(!Number.isFinite(r)||o-r<1e-6)&&(r=0,o=1),Wr={set:!!t&&(t.level!=null||!!t.slope),level:t?.level??Su,slope:Math.max(0,t?.slope??0),dir:e,lo:r,hi:o}}function wu(i,t){let e=Wr;if(!e.slope)return 0;let n=e.dir==="x"?i:e.dir==="-x"?-i:e.dir==="z"?t:-t;return e.slope*(n-e.lo)/(e.hi-e.lo)}function Tu(i,t){return Wr.level-wu(i,t)}function Ad(i){return i.elevation>.3?0:Wr.set?Wr.level-i.elevation:Su}var Rd=new Set(["pool","terrace","balcony"]);function z_(i,t){if(i.elevation>.3||!Rd.has(t.type)||t.points.length<3)return 0;let[e,n]=Pi(t.points);return wu(e,n)}function Xr(i,t){return Ad(i)+(t.offset??0)-z_(i,t)}function Yr(i,t,e,n){return t.type==="pool"?0:O_(t,e,n)+(i.elevation>.3||Rd.has(t.type)?0:wu(e,n))}function Cd(i,t,e){let n=(i.outdoor??[]).filter(r=>!Ci(r.type)&&r.type!=="pool"&&Zt([t,e],r.points)),s=[...n].reverse().find(r=>r.cut)??n[0];return s?B_(i,s,t,e):Ad(i)}function Ml(i,t){return Xr(i,t)+(t.above?Id(t):Math.min(2,Math.max(-.3,t.rim??.06)))}function k_(i){return i.depth&&i.depth>=.3?Math.min(5,i.depth):i.above?Id(i):1.5}function Eu(i,t){return t.above?!1:(i.outdoor??[]).some(e=>e!==t&&e.type!=="pool"&&!Ci(e.type)&&!e.cut&&e.points.length>=3&&t.points.every(n=>Zt(n,e.points)))}function Pd(i,t){return!t.above&&!Eu(i,t)?Sl(i,t)-.05:Ml(i,t)-k_(t)}function Sl(i,t){return Ml(i,t)-.15}function Id(i){return i.height&&i.height>.3?i.height:1.2}var V_={type:"none",pitch:35,overhang:.4},mT={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...V_}};var Ld=.3;var Fd=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),_l=1.75;var Sd=new Set(["lamp_downlight","lamp_spot"]);function wd(i,t){return i==="lamp_spot"?Math.max(.06,t)+.008:.02}var Dd=new Set(["stairs","stairs_u"]);function Nd(i,t,e){let n=Math.max(4,Math.round(e/.18)),s=Math.floor(n/2)+1,r=s-1,o=n-s,a=Math.min(.12,i*.06),l=(i-a)/2,c=Math.min(l,t*.45),u=(t-c)/r;return{n,k:s,steps1:r,steps2:o,gap:a,fw:l,landing:c,run:u,rise:e/n}}function Ud(i){return Fd.has(i)||!!Ae(i)?.light}var G_=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Hr(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function Td(i,t,e){let n=0;for(let s of i.furniture)!(G_.has(s.type)||Ae(s.type)?.surface)||!Zt([t,e],Ii(s))||(n=Math.max(n,s.h));return n}var U_=new Set([...Fd,"radiator","ac_unit","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var H_=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],W_=["standard","bars","glass_wall"];function is(i,t){return i.type==="door"?i.style&&H_.includes(i.style)?i.style:t?"front":"interior":i.style&&W_.includes(i.style)?i.style:"standard"}function Od(i,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let s=t==="sidelights",r=i-.04,o=Math.min(1.05,Math.max(.6,r-(s?.6:.3))),a=(r-o)/(s?2:1),l=n.sidelight_width??a,c=s?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=s?Math.max(.1,c):0;let u=r-.5;if(l+c>u){let f=Math.max(0,u)/(l+c);l*=f,c*=f}return s?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function Bd(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function Ln(i){let t=0;for(let e=0;e<i.length;e++){let[n,s]=i[e],[r,o]=i[(e+1)%i.length];t+=n*o-r*s}return t/2}function Xn(i){return Math.abs(Ln(i))}function Pi(i){let t=Ln(i);if(Math.abs(t)<1e-9){let s=i.length||1;return[i.reduce((r,o)=>r+o[0],0)/s,i.reduce((r,o)=>r+o[1],0)/s]}let e=0,n=0;for(let s=0;s<i.length;s++){let[r,o]=i[s],[a,l]=i[(s+1)%i.length],c=r*l-a*o;e+=(r+a)*c,n+=(o+l)*c}return[e/(6*t),n/(6*t)]}function zd(i){if(i.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=i[t],[s,r]=i[(t+1)%4];if(Math.abs(e-s)>1e-6&&Math.abs(n-r)>1e-6)return!1}return!0}function kd(i){let t=1/0,e=1/0,n=-1/0,s=-1/0;for(let[r,o]of i)t=Math.min(t,r),e=Math.min(e,o),n=Math.max(n,r),s=Math.max(s,o);return{x0:t,z0:e,x1:n,z1:s}}function Ii(i){let t=i.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),s=i.w/2,r=i.d/2;return[[-s,-r],[s,-r],[s,r],[-s,r]].map(([o,a])=>[i.x+o*e-a*n,i.z+o*n+a*e])}function Zt(i,t){let e=!1;for(let n=0,s=t.length-1;n<t.length;s=n++){let[r,o]=t[n],[a,l]=t[s];o>i[1]!=l>i[1]&&i[0]<(a-r)*(i[1]-o)/(l-o)+r&&(e=!e)}return e}var He=(i,t)=>[i[0]-t[0],i[1]-t[1]],Li=(i,t)=>[i[0]+t[0],i[1]+t[1]],si=(i,t)=>[i[0]*t,i[1]*t],$r=(i,t)=>i[0]*t[0]+i[1]*t[1],Ys=(i,t)=>i[0]*t[1]-i[1]*t[0],qr=i=>Math.hypot(i[0],i[1]),Yn=i=>{let t=qr(i)||1;return[i[0]/t,i[1]/t]},Vd=i=>[-i[1],i[0]],Gd=i=>[i[1],-i[0]];function ri(i,t,e=[]){let n=t.eps??.005,s=[],r=e.filter(b=>Math.hypot(b.b[0]-b.a[0],b.b[1]-b.a[1])>.05),o=[],a=b=>{for(let S=0;S<o.length;S++)if(Math.abs(o[S][0]-b[0])<=n&&Math.abs(o[S][1]-b[1])<=n)return S;return o.push([b[0],b[1]]),o.length-1},l=[];for(let b of i){let S=b.points;if(S.length<3||Math.abs(Ln(S))<1e-6)continue;let E=Ln(S)>0,P=S.map(a);for(let A=0;A<S.length;A++){let I=P[A],R=P[(A+1)%S.length];I!==R&&l.push(E?{u:I,v:R,room:b.id,edge:A,forward:!0}:{u:R,v:I,room:b.id,edge:A,forward:!1})}}let c=r.map(b=>[a(b.a),a(b.b)]),u=new Set;for(let b of i){let S=b.points;S.length<3||(b.wall_splits??[]).forEach((E,P)=>{if(!E||P>=S.length)return;let A=S[P],I=He(S[(P+1)%S.length],A),R=qr(I);for(let L of E)L>n&&L<R-n&&u.add(a(Li(A,si(I,L/R))))})}let h=[];for(let b of l){let S=o[b.u],E=o[b.v],P=He(E,S),A=qr(P),I=si(P,1/A),R=[];for(let N=0;N<o.length;N++){if(N===b.u||N===b.v)continue;let U=He(o[N],S),k=$r(U,I);k<=n||k>=A-n||Math.abs(Ys(I,U))<=n&&R.push({t:k,id:N})}R.sort((N,U)=>N.t-U.t);let L=[{t:0,id:b.u},...R,{t:A,id:b.v}];for(let N=0;N+1<L.length;N++){let U=L[N],k=L[N+1],B=b.forward?U.t:A-k.t,z=b.forward?k.t:A-U.t;h.push({u:U.id,v:k.id,room:b.room,edge:b.edge,t0:B,t1:z})}}let f=new Map;for(let b of h){let S=b.u<b.v?`${b.u}-${b.v}`:`${b.v}-${b.u}`,E=f.get(S);E||f.set(S,E=[]),E.push(b)}let d=b=>({room_id:b.room,edge:b.edge,t0:b.t0,t1:b.t1}),p=new Map;for(let b of h){let S=`${b.room}:${b.edge}`;p.set(S,[...p.get(S)??[],b.t0].sort((E,P)=>E-P))}let x=b=>{let S=i.find(P=>P.id===b.room)?.wall_heights?.[b.edge];if(!Array.isArray(S))return S;let E=p.get(`${b.room}:${b.edge}`)??[];return S[E.indexOf(b.t0)]??null},g=b=>{let S=b.map(x).filter(P=>typeof P=="number"&&P>0);if(S.length)return Math.min(...S);let E=b.map(P=>i.find(A=>A.id===P.room)?.ceiling_height);return E.every(P=>typeof P=="number"&&P>0)?Math.max(...E):void 0},m=b=>{let S=b.map(E=>i.find(P=>P.id===E.room)?.wall_thickness?.[E.edge]).filter(E=>typeof E=="number"&&E>0);return S.length?Math.max(...S):void 0},_=b=>b.some(S=>x(S)===0),M=[],v=[];for(let b of f.values()){let S=b[0],E=b.find(P=>P!==S&&P.u===S.v&&P.v===S.u&&P.room!==S.room);for(let P of b)P!==S&&P!==E&&P.room!==S.room&&s.push(`overlap:${S.room}:${P.room}`);if(_(E?[S,E]:[S])){E&&M.push([S.room,E.room]);continue}if(E){let P=m([S,E])??t.interior;v.push({a:S.u,b:S.v,left:P/2,right:P/2,exterior:!1,roomLeft:S.room,roomRight:E.room,sources:[d(S),d(E)],height:g([S,E])})}else v.push({a:S.u,b:S.v,left:0,right:m([S])??t.exterior,exterior:!0,roomLeft:S.room,roomRight:null,sources:[d(S)],height:g([S])})}let y=b=>Yn(He(o[b.b],o[b.a]));for(let b of v){if(b.exterior||b.free)continue;let S=new Set;for(let P of[b.a,b.b])for(let A of v)!A.exterior||A.free||A.a!==P&&A.b!==P||Math.abs(Ys(y(b),y(A)))>1e-6||(A.roomLeft===b.roomLeft?S.add("left"):A.roomLeft===b.roomRight&&S.add("right"));if(S.size!==1)continue;let E=b.left+b.right;S.has("left")?(b.left=0,b.right=E):(b.left=E,b.right=0)}r.forEach((b,S)=>{let[E,P]=c[S];if(E===P)return;let A=[(b.a[0]+b.b[0])/2,(b.a[1]+b.b[1])/2],I=i.find(N=>N.points.length>=3&&Zt(A,N.points))?.id??null,R=(b.thickness??t.interior)/2,L=typeof b.height=="number"&&b.height>0?b.height:void 0;v.push({free:b.id,a:E,b:P,left:R,right:R,exterior:!1,roomLeft:I,roomRight:I,sources:[],height:L})}),v=Y_(v,o,u);let w=$_(v,o);return{walls:v.map((b,S)=>{let E=o[b.a],P=o[b.b],A=w.get(`${S}:a`),I=w.get(`${S}:b`),R=Z_([A.right,I.left,P,I.right,A.left,E],1e-6);return{id:X_(E,P),a:[E[0],E[1]],b:[P[0],P[1]],left:b.left,right:b.right,exterior:b.exterior,roomLeft:b.roomLeft,roomRight:b.roomRight,sources:b.sources,footprint:R,...b.free?{free:b.free}:{},...b.height!==void 0?{height:b.height}:{}}}),warnings:[...new Set(s)],open:M}}function X_(i,t){let e=r=>Math.round(r*100),[n,s]=i[0]<t[0]||i[0]===t[0]&&i[1]<=t[1]?[i,t]:[t,i];return`w_${e(n[0])}_${e(n[1])}_${e(s[0])}_${e(s[1])}`}function Hd(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function Y_(i,t,e=new Set){let n=i.slice(),s=!0;for(;s;){s=!1;let r=new Map;n.forEach((o,a)=>{for(let l of[o.a,o.b]){let c=r.get(l);c||r.set(l,c=[]),c.push(a)}});for(let[o,a]of r){if(a.length!==2||e.has(o))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==o&&(l=Hd(l)),c.a!==o&&(c=Hd(c)),l.a===c.b)continue;let u=Yn(He(t[l.b],t[l.a])),h=Yn(He(t[c.b],t[c.a]));if(Math.abs(Ys(u,h))>1e-6||$r(u,h)<=0||l.free||c.free||l.height!==c.height||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let f={...l,b:c.b,sources:q_(l.sources,c.sources)},d=n.filter((p,x)=>x!==a[0]&&x!==a[1]);d.push(f),n.length=0,n.push(...d),s=!0;break}}return n}function q_(i,t){let e=i.map(n=>({...n}));for(let n of t){let s=e.find(r=>r.room_id===n.room_id&&r.edge===n.edge&&(Math.abs(r.t1-n.t0)<1e-6||Math.abs(n.t1-r.t0)<1e-6));s?(s.t0=Math.min(s.t0,n.t0),s.t1=Math.max(s.t1,n.t1)):e.push({...n})}return e}function $_(i,t){let e=new Map;i.forEach((s,r)=>{let o=Yn(He(t[s.b],t[s.a])),a=[[s.a,{key:`${r}:a`,d:o,left:s.left,right:s.right,angle:Math.atan2(o[1],o[0])}],[s.b,{key:`${r}:b`,d:si(o,-1),left:s.right,right:s.left,angle:Math.atan2(-o[1],-o[0])}]];for(let[l,c]of a){let u=e.get(l);u||e.set(l,u=[]),u.push(c)}});let n=new Map;for(let[s,r]of e){let o=t[s];r.sort((c,u)=>c.angle-u.angle);let a=c=>({left:Li(o,si(Vd(c.d),c.left)),right:Li(o,si(Gd(c.d),c.right))});for(let c of r)n.set(c.key,a(c));if(r.length<2)continue;let l=4*Math.max(...r.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<r.length;c++){let u=r[c],h=r[(c+1)%r.length],f=Li(o,si(Vd(u.d),u.left)),d=Li(o,si(Gd(h.d),h.right)),p=Ys(u.d,h.d);if(Math.abs(p)<1e-4)continue;let x=Ys(He(d,f),h.d)/p,g=Li(f,si(u.d,x));qr(He(g,o))>l||(n.get(u.key).left=g,n.get(h.key).right=g)}}return n}function Z_(i,t){let e=i.filter((s,r)=>qr(He(s,i[(r+1)%i.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let s=0;s<e.length;s++){let r=e[(s+e.length-1)%e.length],o=e[s],a=e[(s+1)%e.length],l=He(o,r),c=He(a,o);if(Math.abs(Ys(Yn(l),Yn(c)))<1e-7&&$r(l,c)>0){e=e.filter((u,h)=>h!==s),n=!0;break}}}return e}function Au(i,t,e){let n=i.points[t],s=i.points[(t+1)%i.points.length],r=Yn(He(s,n));return Li(n,si(r,e))}function Zr(i,t,e){if(i.wall){let s=e.find(a=>a.id===i.wall);if(!s||Math.hypot(s.b[0]-s.a[0],s.b[1]-s.a[1])<.05)return null;let r=Yn(He(s.b,s.a));return{room:{id:i.room_id,name:"",area_id:null,points:[s.a,s.b,Li(s.a,[-r[1],r[0]])]},edge:0}}let n=t.find(s=>s.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function Jr(i,t,e){if(!t.wall)return J_(i,e.room,e.edge,t.offset);let n=i.find(r=>r.free===t.wall);if(!n)return null;let s=Au(e.room,0,t.offset);return{wall:n,s:$r(He(s,n.a),Yn(He(n.b,n.a)))}}function J_(i,t,e,n){for(let s of i){if(!s.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let o=Au(t,e,n);return{wall:s,s:$r(He(o,s.a),Yn(He(s.b,s.a)))}}return null}var jr=Math.PI/180;function qn(i){let t=Math.min(i.x0,i.x1),e=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),s=Math.max(i.z0,i.z1);return i.axis==="x"?{u0:t,u1:e,w:s-n,at:(r,o)=>[r,i.flip?s-o:n+o]}:{u0:n,u1:s,w:e-t,at:(r,o)=>[i.flip?e-o:t+o,r]}}function _n(i){let t=qn(i).w,e=i.eave_a,n=i.eave_b,s=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*jr),r=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*jr);if(i.shape==="flat"||i.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(i.shape==="pent")return{vr:t,rh:e+t*s,y:l=>e+l*s};if(i.shape==="mansard"){let l=Zd(t,e,n,s,r);return{vr:l.vr,rh:l.rh,y:l.y}}let o=s+r>1e-6?Math.min(t,Math.max(0,(n-e+t*r)/(s+r))):t/2,a=e+o*s;return{vr:o,rh:a,y:l=>l<=o?e+l*s:n+(t-l)*r}}var K_=.14;function Xd(i,t){return!i.open&&Math.min(i.base,i.eave_a,i.eave_b)<t-.05}function Yd(i,t,e){let n=null,s=Math.max(0,i.settings.roof.overhang??0);for(let r of i.settings.roof.sections??[]){if(r.open)continue;let o=Math.min(r.x0,r.x1),a=Math.max(r.x0,r.x1),l=Math.min(r.z0,r.z1),c=Math.max(r.z0,r.z1);if(t<o-1e-6||t>a+1e-6||e<l-1e-6||e>c+1e-6||r.points&&r.points.length>=3&&!Zt([t,e],r.points))continue;let[u,h]=Fi(r,t,e),f=r.shape==="flat"||r.shape==="parapet",d=Math.max(0,r.overhang??s),x=((f?null:Qr($s(r,{u0:d,u1:d,a:d,b:d}),u,h))??_n(r).y(h))-K_;n=n===null?x:Math.max(n,x)}return n}function wl(i,t){let e=i.length;if(e<3||Math.abs(t)<1e-9)return i.map(r=>[r[0],r[1]]);let n=Xn(i)>=0?1:-1,s=[];for(let r=0;r<e;r++){let o=i[(r+e-1)%e],a=i[r],l=i[(r+1)%e],c=Wd([a[0]-o[0],a[1]-o[1]]),u=Wd([l[0]-a[0],l[1]-a[1]]),h=[c[1]*n,-c[0]*n],f=[u[1]*n,-u[0]*n],d=h[0]+f[0],p=h[1]+f[1],x=Math.hypot(d,p);if(x<1e-6){s.push([a[0]+h[0]*t,a[1]+h[1]*t]);continue}let g=(d*h[0]+p*h[1])/x,m=Math.min(4,1/Math.max(.25,g));s.push([a[0]+d/x*t*m,a[1]+p/x*t*m])}return s}function Wd(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function qd(i,t){if(i.points&&i.points.length>=3)return wl(i.points,t);let e=Math.min(i.x0,i.x1)-t,n=Math.max(i.x0,i.x1)+t,s=Math.min(i.z0,i.z1)-t,r=Math.max(i.z0,i.z1)+t;return[[e,s],[n,s],[n,r],[e,r]]}function $d(i,t,e,n){let s=ri(i,{exterior:e,interior:n},t).walls.filter(h=>h.exterior&&!h.free);if(!s.length)return null;let r=h=>`${Math.round(h[0]*1e3)}:${Math.round(h[1]*1e3)}`,o=new Map,a=s.map(h=>({a:h.a,b:h.b}));for(let h of a)for(let f of[h.a,h.b])o.set(r(f),[...o.get(r(f))??[],h]);let l=new Set,c=null;for(let h of a){if(l.has(h))continue;l.add(h);let f=[h.a,h.b],d=h.b;for(;;){let p=(o.get(r(d))??[]).find(x=>!l.has(x));if(!p||(l.add(p),d=r(p.a)===r(d)?p.b:p.a,r(d)===r(f[0])))break;f.push(d)}f.length>=3&&r(d)===r(f[0])&&(!c||Math.abs(Xn(f))>Math.abs(Xn(c)))&&(c=f)}if(!c)return null;let u=[];for(let h=0;h<c.length;h++){let f=c[(h+c.length-1)%c.length],d=c[h],p=c[(h+1)%c.length],x=(d[0]-f[0])*(p[1]-d[1])-(d[1]-f[1])*(p[0]-d[0]);Math.abs(x)>1e-6&&u.push(d)}return u.length>=3?wl(u,e):null}var Kr=Math.tan(30*jr);function Zd(i,t,e,n,s){let r=Math.min(i*.3,n>1e-6?2.4/n:i*.3),o=Math.min(i*.3,s>1e-6?2.4/s:i*.3),a=t+r*n,l=e+o*s,c=Math.min(i-o,Math.max(r,(l-a+Kr*(i-o+r))/(2*Kr))),u=a+(c-r)*Kr;return{vla:r,vlb:o,yla:a,ylb:l,vr:c,rh:u,y:f=>f<=r?t+f*n:f<=c?a+(f-r)*Kr:f<=i-o?l+(i-o-f)*Kr:e+(i-f)*s}}function $s(i,t){let e=qn(i),n=_n(i),s=e.w,r=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(_,M)=>[_,M,n.y(M)],u=c(a,-r),h=c(l,-r),f=c(l,s+o),d=c(a,s+o),p=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*jr),x=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*jr);if(i.shape==="pent"){let _=[u,h,f,d];return{faces:[_],rim:_,ridges:[[f,d]],gable:[[0,n.y(0)],[s,n.y(s)]]}}if(i.shape==="hip"||i.shape==="pyramid"){let _=i.shape==="pyramid"?(e.u1-e.u0)/2:Math.min((e.u1-e.u0)/2,Math.min(n.vr,s-n.vr)||s/2),M=[e.u0+_,n.vr,n.rh],v=[e.u1-_,n.vr,n.rh],y=i.shape==="pyramid"?[[u,h,M],[h,f,M],[f,d,M],[d,u,M]]:[[u,h,v,M],[M,v,f,d],[d,u,M],[h,f,v]],w=i.shape==="pyramid"?[[u,M],[d,M],[h,M],[f,M]]:[[M,v],[u,M],[d,M],[h,v],[f,v]];return{faces:y,rim:[u,h,f,d],ridges:w,gable:null}}if(i.shape==="halfhip"){let _=Math.min(n.y(0),n.y(s)),M=_+(n.rh-_)*.55,v=p>1e-6?Math.min(n.vr,(M-i.eave_a)/p):n.vr,y=x>1e-6?Math.max(n.vr,s-(M-i.eave_b)/x):n.vr,w=Math.min((e.u1-e.u0)/2-.1,(n.rh-M)/Math.max(.2,p)),T=[e.u0+w,n.vr,n.rh],b=[e.u1-w,n.vr,n.rh],S=[a,v,M],E=[a,y,M],P=[l,v,M],A=[l,y,M];return{faces:[[u,h,P,b,T,S],[T,b,A,f,d,E],[E,S,T],[P,A,b]],rim:[u,h,P,A,f,d,E,S],ridges:[[T,b],[S,T],[E,T],[P,b],[A,b]],gable:[[0,n.y(0)],[v,M],[y,M],[s,n.y(s)]]}}if(i.shape==="mansard"){let _=Zd(s,i.eave_a,i.eave_b,p,x),M=[a,_.vla,_.yla],v=[l,_.vla,_.yla],y=[a,s-_.vlb,_.ylb],w=[l,s-_.vlb,_.ylb],T=[a,_.vr,_.rh],b=[l,_.vr,_.rh];return{faces:[[u,h,v,M],[M,v,b,T],[T,b,w,y],[y,w,f,d]],rim:[u,h,v,b,w,f,d,y,T,M],ridges:[[T,b],[M,v],[y,w]],gable:[[0,n.y(0)],[_.vla,_.yla],[_.vr,_.rh],[s-_.vlb,_.ylb],[s,n.y(s)]]}}let g=[a,n.vr,n.rh],m=[l,n.vr,n.rh];return{faces:[[u,h,m,g],[g,m,f,d]],rim:[u,h,m,f,d,g],ridges:[[g,m]],gable:[[0,n.y(0)],[n.vr,n.rh],[s,n.y(s)]]}}function Qr(i,t,e){let n=null;for(let s of i.faces){if(!Zt([t,e],s.map(_=>[_[0],_[1]])))continue;let[r,o]=s,a=s.slice(2).find(_=>Math.abs((o[0]-r[0])*(_[1]-r[1])-(o[1]-r[1])*(_[0]-r[0]))>1e-9);if(!a)continue;let l=o[0]-r[0],c=o[2]-r[2],u=o[1]-r[1],h=a[0]-r[0],f=a[2]-r[2],d=a[1]-r[1],p=c*d-u*f,x=u*h-l*d,g=l*f-c*h;if(Math.abs(x)<1e-9)continue;let m=r[2]-(p*(t-r[0])+g*(e-r[1]))/x;n=n===null?m:Math.min(n,m)}return n}function Fi(i,t,e){let n=Math.min(i.x0,i.x1),s=Math.max(i.x0,i.x1),r=Math.min(i.z0,i.z1),o=Math.max(i.z0,i.z1);return i.axis==="x"?[t,i.flip?o-e:e-r]:[e,i.flip?s-t:t-n]}function j_(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function Tl(i,t){let e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,s=o=>Math.abs((o.x1-o.x0)*(o.z1-o.z0)),r=null;for(let o of i){if(o===t||o.dormer||o.open||o.shape==="flat"||o.shape==="parapet"||s(o)<s(t)*1.5)continue;let a=j_(o);e<a.x0||e>a.x1||n<a.z0||n>a.z1||(!r||s(o)<s(r))&&(r=o)}return r}function Ru(i,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=qn(t),n=_n(t).rh,s=$s(i,{u0:0,u1:0,a:0,b:0}),r=_n(i),o=p=>{let[x,g]=e.at(p,e.w/2),[m,_]=Fi(i,x,g);return Qr(s,m,_)??r.y(_)},a=o(e.u0)<=o(e.u1),l=a?e.u0:e.u1,c=a?e.u1:e.u0,u=a?1:-1,h=Math.abs(c-l),f=c;for(let p=.5;p<h;p+=.05)if(o(l+u*p)>=n-.02){f=l+u*p;break}if(Math.abs(f-c)<.05)return t;let d={...t};return t.axis==="x"?c===e.u1?d.x1=f:d.x0=f:c===e.u1?d.z1=f:d.z0=f,d}function Jd(i,t){let e=Ru(i,t),n=qn(e),s=_n(e),r=$s(i,{u0:0,u1:0,a:0,b:0}),o=_n(i),a=f=>{let[d,p]=n.at(f,n.w/2),[x,g]=Fi(i,d,p);return Qr(r,x,g)??o.y(g)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,u=[],h=Math.max(1,Math.ceil(c/.15));for(let f=0;f<h;f++){let d=c*f/h,p=c*(f+1)/h,x=l?n.u0+d:n.u1-d,g=l?n.u0+p:n.u1-p,m=a(g),_=1/0,M=-1/0;for(let b=0;b<=40;b++){let S=n.w*b/40;s.y(S)>m+.02&&(_=Math.min(_,S),M=Math.max(M,S))}if(!(M-_>.05))continue;let v=n.at(x,_),y=n.at(g,M),w=Fi(i,v[0],v[1]),T=Fi(i,y[0],y[1]);u.push({u0:Math.min(w[0],T[0]),u1:Math.max(w[0],T[0]),v0:Math.min(w[1],T[1]),v1:Math.max(w[1],T[1])})}return u}function qs(i,t,e,n){let s=o=>n?o[t]<=e+1e-9:o[t]>=e-1e-9,r=[];for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],c=s(a),u=s(l);if(c&&r.push(a),c!==u){let h=(e-a[t])/(l[t]-a[t]);r.push([a[0]+(l[0]-a[0])*h,a[1]+(l[1]-a[1])*h,a[2]+(l[2]-a[2])*h])}}return r}function Kd(i,t){let e=qs(i,0,t.u0,!0),n=qs(i,0,t.u1,!1),s=qs(qs(i,0,t.u0,!1),0,t.u1,!0),r=qs(s,1,t.v0,!0),o=qs(s,1,t.v1,!1);return[e,n,r,o].filter(a=>a.length>=3&&Math.abs(Xn(a.map(l=>[l[0],l[1]])))>1e-6)}function El(i,t,e){let n=qn(t),s=i.floors.flatMap(c=>c.rooms.filter(u=>u.points.length>=3&&c.elevation+c.height>t.base+.05)),r=c=>c.some(u=>s.some(h=>Zt(u,h.points))),o=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:r(a.map(c=>n.at(c,-o)))?0:e,b:r(a.map(c=>n.at(c,n.w+o)))?0:e,u0:r(l.map(c=>n.at(n.u0-o,c)))?0:e,u1:r(l.map(c=>n.at(n.u1+o,c)))?0:e}}function jd(i,t){let e=i.floors.filter(n=>n.rooms.length>0).sort((n,s)=>n.elevation-s.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}function Q_(i){return _n(i).rh}function Qd(i,t,e){let n=i.settings.roof.sections??[],s=n.filter(l=>e.includes(l.id)).map(l=>Tl(n,l)??l);if(!s.length)return t.id;let r=Math.max(...s.map(l=>Q_(l))),o=l=>l.rooms.some(c=>c.points.length>=3&&s.some(u=>{let[h,f]=c.points.reduce((d,p)=>[d[0]+p[0]/c.points.length,d[1]+p[1]/c.points.length],[0,0]);return h>=Math.min(u.x0,u.x1)&&h<=Math.max(u.x0,u.x1)&&f>=Math.min(u.z0,u.z1)&&f<=Math.max(u.z0,u.z1)}));return i.floors.filter(l=>l.elevation>=t.elevation&&l.elevation<r-.3&&o(l)).sort((l,c)=>c.elevation-l.elevation)[0]?.id??t.id}var ss=Ot(3662079,.95),Cu=Ot(3662079,1),Di=Ot(5995775,.34),tp=Ot(5995775,.22),Al=[-.55,.83],Gt=-1,Rl=16,rs=32,ep=48,Pu=64,ee=class{p=[];c=[];f=[];uv;tile;constructor(t=!1,e=!1){this.uv=t?[]:null,this.tile=e?[]:null}tri(t,e,n,s,r=s,o=s,a,l=Gt,c=[0,1]){this.p.push(...t,...e,...n),this.c.push(s.r,s.g,s.b,r.r,r.g,r.b,o.r,o.g,o.b),this.f.push(l,l,l),this.uv?.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile?.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let t=new qt;return t.setAttribute("position",new Nt(this.p,3)),t.setAttribute("color",new Nt(this.c,3)),t.setAttribute("fold",new Nt(this.f,1)),this.uv&&t.setAttribute("uv",new Nt(this.uv,2)),this.tile&&t.setAttribute("tile",new Nt(this.tile,2)),t.computeBoundingSphere(),t}},Le=class{p=[];c=[];f=[];seg(t,e,n=ss,s=Gt){this.p.push(...t,...e),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(s,s)}segSplit(t,e,n,s,r){let[o,a]=t[1]<=e[1]?[t,e]:[e,t];if(a[1]<=s+1e-6||r<0)return this.seg(o,a,n,Gt);if(o[1]>=s-1e-6)return this.seg(o,a,n,r);let l=(s-o[1])/(a[1]-o[1]),c=[o[0]+(a[0]-o[0])*l,s,o[2]+(a[2]-o[2])*l];this.seg(o,c,n,Gt),this.seg(c,a,n,r)}geometry(){let t=new qt;return t.setAttribute("position",new Nt(this.p,3)),t.setAttribute("color",new Nt(this.c,3)),t.setAttribute("fold",new Nt(this.f,1)),t}};function np(i,t,e,n){let r=i.uv?2:0,o=(h,f)=>{let d=h*3+f;return{p:i.p.slice(d*3,d*3+3),c:i.c.slice(d*3,d*3+3),uv:i.uv?i.uv.slice(d*2,d*2+2):null,tile:i.tile?i.tile.slice(d*2,d*2+2):null}},a=(h,f,d)=>({p:h.p.map((p,x)=>p+(f.p[x]-p)*d),c:h.c.map((p,x)=>p+(f.c[x]-p)*d),uv:h.uv&&f.uv?h.uv.map((p,x)=>p+(f.uv[x]-p)*d):null,tile:h.tile}),l=(h,f,d)=>{for(let p=0;p<3;p++){let x=h*3+p;for(let g=0;g<3;g++)i.p[x*3+g]=f[p].p[g],i.c[x*3+g]=f[p].c[g];if(i.uv&&f[p].uv)for(let g=0;g<r;g++)i.uv[x*2+g]=f[p].uv[g];if(i.tile&&f[p].tile)for(let g=0;g<2;g++)i.tile[x*2+g]=f[p].tile[g];i.f[x]=d}},c=(h,f)=>{let d=i.p.length/9;for(let p of h)i.p.push(...p.p),i.c.push(...p.c),i.f.push(f),i.uv?.push(...p.uv??[.5,.5]),i.tile?.push(...p.tile??[0,1]);return d},u=i.p.length/9;for(let h=t;h<u;h++){let f=[o(h,0),o(h,1),o(h,2)],d=f.map(b=>b.p[1]>e+1e-6),p=f.map(b=>b.p[1]<e-1e-6);if(!d.some(Boolean))continue;if(!p.some(Boolean)){for(let b=0;b<3;b++)i.f[h*3+b]=n;continue}let x=i.f[h*3],g=(b,S)=>a(b,S,(e-b.p[1])/(S.p[1]-b.p[1])),m=d.filter(Boolean).length,_=m===1?d.indexOf(!0):d.indexOf(!1),M=f[_],v=f[(_+1)%3],y=f[(_+2)%3],w=g(M,v),T=g(y,M);m===1?(l(h,[M,w,T],n),c([w,v,y],x),c([w,y,T],x)):(l(h,[M,w,T],x),c([w,v,y],n),c([w,y,T],n))}}function ip(i,t,e,n){let s=i.p.length/6;for(let r=t;r<s;r++){let o=i.p.slice(r*6,r*6+3),a=i.p.slice(r*6+3,r*6+6),[l,c]=o[1]<=a[1]?[o,a]:[a,o];if(c[1]<=e+1e-6)continue;if(l[1]>=e-1e-6){i.f[r*2]=n,i.f[r*2+1]=n;continue}let u=(e-l[1])/(c[1]-l[1]),h=[l[0]+(c[0]-l[0])*u,e,l[2]+(c[2]-l[2])*u];for(let d=0;d<3;d++)i.p[r*6+d]=l[d],i.p[r*6+3+d]=h[d];let f=i.c.slice(r*6,r*6+3);i.p.push(...h,...c),i.c.push(...f,...f),i.f.push(n,n)}}var he=Math.PI/180;function Ot(i,t){let e=new Q(i).multiplyScalar(t);return e.r=Math.min(1,e.r),e.g=Math.min(1,e.g),e.b=Math.min(1,e.b),e}function ty(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];t+=n[0]*s[1]-s[0]*n[1]}return t}function Ni(i,t=[]){let e=i.map(([n,s])=>new Qt(n,s));return Mr.triangulateShape(e,t.map(n=>n.map(([s,r])=>new Qt(s,r))))}function sp(i,t,e,n,s,r,o){let a=new Q(o),l=d=>.5+.5*Math.min(1,Math.max(0,d/1.6));for(let d=0;d<4;d++){let p=t[d],x=t[(d+1)%4],g=e[d],m=e[(d+1)%4],_=x[0]-p[0],M=x[1]-p[1],v=Math.hypot(_,M);if(v<1e-6)continue;let w=.8+.28*((M/v*Al[0]-_/v*Al[1]+1)/2),T=(g[0]+m[0]-p[0]-x[0])/2*(-M/v)+(g[1]+m[1]-p[1]-x[1])/2*(_/v),b=Math.max(0,Math.min(1,T/Math.max(1e-6,Math.hypot(T,s-n)))),S=Ot(r,l(n)*w).lerp(a,b),E=Ot(r,l(s)*w).lerp(a,b);i.tri([p[0],n,p[1]],[g[0],s,g[1]],[m[0],s,m[1]],S,E,E),i.tri([p[0],n,p[1]],[m[0],s,m[1]],[x[0],n,x[1]],S,E,S)}let[c,u,h,f]=e;Math.hypot(h[0]-c[0],h[1]-c[1])>1e-4&&(i.tri([c[0],s,c[1]],[h[0],s,h[1]],[u[0],s,u[1]],a),i.tri([c[0],s,c[1]],[f[0],s,f[1]],[h[0],s,h[1]],a))}function rp(i,t,e,n,s,r,o,a,l,c){let u=new Q(l),h=[];for(let d=0;d<c;d++){let p=d/c*Math.PI*2;h.push({y:r+Math.cos(p)*o,s:s+Math.sin(p)*o})}let f=(d,p)=>{let x=t(d,h[p%c].s);return[x[0],h[p%c].y,x[1]]};for(let d=0;d<c;d++){let p=(d+.5)/c*Math.PI*2,x=Ot(a,.62+.4*Math.max(0,Math.cos(p)));i.tri(f(e,d),f(n,d+1),f(n,d),x),i.tri(f(e,d),f(e,d+1),f(n,d+1),x)}for(let d of[e,n]){let p=t(d,s),x=[p[0],r,p[1]];for(let g=0;g<c;g++)i.tri(x,f(d,g),f(d,g+1),u)}}function Re(i,t,e,n,s,r,o={}){let a=typeof n=="number"?()=>n:p=>Math.max(e+.002,n(p[0],p[1])),l=o.aoFrom??e,c=o.fold??Gt,u=p=>.5+.5*Math.min(1,Math.max(0,(p-l)/1.6)),h=(o.holes??[]).map(p=>ty(p)>0?[...p].reverse():p),f=h.length?[...t,...h.flat()]:t,d=o.topFace===!1&&!o.bottom?[]:Ni(t,h);if(o.topFace!==!1){let p=new Q(r);for(let[x,g,m]of d){let _=f[x],M=f[g],v=f[m];i.tri([_[0],a(_),_[1]],[v[0],a(v),v[1]],[M[0],a(M),M[1]],p,p,p,void 0,o.topFold??c)}}if(o.bottom){let p=Ot(s,.55);for(let[x,g,m]of d){let _=f[x],M=f[g],v=f[m];i.tri([_[0],e,_[1]],[M[0],e,M[1]],[v[0],e,v[1]],p,p,p,void 0,c)}}for(let p of[t,...h])for(let x=0;x<p.length;x++){let g=p[x],m=p[(x+1)%p.length],_=m[0]-g[0],M=m[1]-g[1],v=Math.hypot(_,M);if(v<1e-6||o.skipSide?.(g,m))continue;let w=.8+.28*((M/v*Al[0]-_/v*Al[1]+1)/2),T=a(g),b=a(m),S=Ot(s,u(e)*w),E=Ot(s,u(T)*w),P=Ot(s,u(b)*w);i.tri([g[0],e,g[1]],[g[0],T,g[1]],[m[0],b,m[1]],S,E,P,void 0,c),i.tri([g[0],e,g[1]],[m[0],b,m[1]],[m[0],e,m[1]],S,P,S,void 0,c)}}var ey=new Q(1516340),ny=new Q(527897),Iu=new Q(1779256),to=new Q(1120808),iy=new Q(4163256),op=new Q(5995161),sy=.35,Zs=.8,ry=.2,ap=.1;function oy(i,t){if(i.settings.terrain?.earth===!1||t.elevation>.3)return!1;let e=lp(i,t);return!!e&&e.some(([n,s])=>Tu(n,s)-t.elevation>-.15)}function lp(i,t){return t.rooms.some(e=>e.points.length>=3)?$d(t.rooms,t.walls??[],i.settings.wall_exterior,i.settings.wall_interior):null}function cp(i,t,e){if(!oy(i,t))return null;let n=lp(i,t),s=t.height,r=-sy,o=(h,f)=>Math.min(s,Tu(h,f)-t.elevation),a=new ee,l=new ee,c=new Le,u=(h,f,d,p,x,g,m,_)=>{let M=[f[0]-h[0],f[2]-h[2]];-M[1]*x[0]+M[0]*x[1]>0?(_.tri(h,f,d,g,g,m),_.tri(h,d,p,g,m,m)):(_.tri(h,d,f,g,m,g),_.tri(h,p,d,g,m,m))};for(let h=0;h<n.length;h++){let f=n[h],d=n[(h+1)%n.length],p=Math.hypot(d[0]-f[0],d[1]-f[1]);if(p<1e-4)continue;let x=[(d[0]-f[0])/p,(d[1]-f[1])/p],g=[x[1],-x[0]],m=[(f[0]+d[0])/2+g[0]*.05,(f[1]+d[1])/2+g[1]*.05];Zt(m,n)&&(g=[-g[0],-g[1]]);let _=(T,b=.012)=>[f[0]+x[0]*T+g[0]*b,f[1]+x[1]*T+g[1]*b],M=[];for(let T of e){if(T.opening.type!=="window"||!T.exterior)continue;let b=T.start[0]+T.axis[0]*(T.width/2)-T.toRoom[0]*T.faceOut,S=T.start[1]+T.axis[1]*(T.width/2)-T.toRoom[1]*T.faceOut,E=(b-f[0])*x[0]+(S-f[1])*x[1];Math.abs((b-f[0])*g[0]+(S-f[1])*g[1])>.08||E<-.05||E>p+.05||T.sill>=o(b,S)-.05||M.push({s0:Math.max(0,E-T.width/2-ap),s1:Math.min(p,E+T.width/2+ap),bottom:Math.max(r+.05,T.sill-ry)})}let v=new Set([0,p]);for(let T of M)v.add(T.s0),v.add(T.s1);let y=[...v].sort((T,b)=>T-b),w=[];for(let T=0;T<y.length-1;T++){let b=Math.max(1,Math.ceil((y[T+1]-y[T])/.5));for(let S=0;S<b;S++)w.push(y[T]+(y[T+1]-y[T])*S/b)}w.push(p);for(let T=0;T<w.length-1;T++){let b=w[T],S=w[T+1],E=M.find(U=>b>=U.s0-1e-6&&S<=U.s1+1e-6),P=_(b),A=_(S),I=o(P[0],P[1]),R=o(A[0],A[1]),L=E?Math.min(I,E.bottom):I,N=E?Math.min(R,E.bottom):R;if(L>r+.01||N>r+.01){let U=Math.min(L,r),k=Math.min(N,r);u([P[0],U,P[1]],[A[0],k,A[1]],[A[0],Math.max(N,r),A[1]],[P[0],Math.max(L,r),P[1]],g,ny,ey,a)}(I>r||R>r)&&c.seg([P[0],Math.max(I,r)+.004,P[1]],[A[0],Math.max(R,r)+.004,A[1]],iy)}for(let T of M){let b=_(T.s0,0),S=_(T.s1,0),E=[b[0]+g[0]*Zs,b[1]+g[1]*Zs],P=[S[0]+g[0]*Zs,S[1]+g[1]*Zs],A=k=>o(k[0],k[1]),I=T.bottom,R=(k,B)=>[k[0],B,k[1]];l.tri(R(b,I),R(S,I),R(P,I),to),l.tri(R(b,I),R(P,I),R(E,I),to);let L=(k,B)=>{l.tri(R(k,I),R(B,I),R(B,A(B)),to,to,Iu),l.tri(R(k,I),R(B,A(B)),R(k,A(k)),to,Iu,Iu)};L(b,E),L(S,P),L(E,P);let N=k=>[k[0],A(k)+.01,k[1]];for(let[k,B]of[[b,S],[S,P],[P,E],[E,b]])c.seg(N(k),N(B),op);let U=Math.max(3,Math.round((T.s1-T.s0)/.12));for(let k=1;k<U;k++){let B=k/U,z=[b[0]+(S[0]-b[0])*B,b[1]+(S[1]-b[1])*B];c.seg(N(z),N([z[0]+g[0]*Zs,z[1]+g[1]*Zs]),op)}}}return a.count||l.count?{earth:a,wells:l,lines:c}:null}var up=i=>Math.round(i*1e3)/1e3;function ay(i,t,e,n){let s=Math.hypot(n[0]-e[0],n[1]-e[1]);if(s<.01)return!1;let r=[(n[0]-e[0])/s,(n[1]-e[1])/s],o=l=>Math.abs(-(l[0]-e[0])*r[1]+(l[1]-e[1])*r[0]),a=l=>(l[0]-e[0])*r[0]+(l[1]-e[1])*r[1];return i.rooms.some(l=>l.id!==t&&l.points.some((c,u)=>{let h=l.points[(u+1)%l.points.length];return o(c)>.02||o(h)>.02?!1:Math.min(s,Math.max(a(c),a(h)))-Math.max(0,Math.min(a(c),a(h)))>.05}))}function hp(i,t,e,n,s,r=.05){let o=i.rooms.find(f=>f.points.length>=3&&Zt([t.x,t.z],f.points));if(!o)return[e,n];let a=o.points,l=Ln(a)>=0?1:-1,c=Ii({...t}),u=e,h=n;for(let f=0;f<2;f++){let d=Ii({...t,x:u,z:h});for(let p=0;p<a.length;p++){let x=a[p],g=a[(p+1)%a.length],m=Math.hypot(g[0]-x[0],g[1]-x[1]);if(m<.05)continue;let _=[(g[0]-x[0])/m,(g[1]-x[1])/m],M=[-_[1]*l,_[0]*l],v=ay(i,o.id,x,g)?s/2:0,y=0;d.forEach((w,T)=>{let b=(w[0]-x[0])*_[0]+(w[1]-x[1])*_[1];if(b<-.01||b>m+.01)return;let S=(w[0]-x[0])*M[0]+(w[1]-x[1])*M[1]-v,E=c[T];(E[0]-x[0])*M[0]+(E[1]-x[1])*M[1]-v<-r||S<y&&(y=S)}),y<-1e-4&&(u-=M[0]*y,h-=M[1]*y)}}return[up(u),up(h)]}function Cl(i,t){let e=Ln(t)>0?1:-1,n=[...i];for(let s=0;s<t.length&&n.length;s++){let r=t[s],o=t[(s+1)%t.length],a=c=>e*((o[0]-r[0])*(c[1]-r[1])-(o[1]-r[1])*(c[0]-r[0])),l=n;n=[];for(let c=0;c<l.length;c++){let u=l[c],h=l[(c+1)%l.length],f=a(u),d=a(h);if(f>=0&&n.push(u),f>=0!=d>=0){let p=f/(f-d);n.push([u[0]+(h[0]-u[0])*p,u[1]+(h[1]-u[1])*p])}}}return n}function fp(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length],r=i[(e+2)%i.length],o=(s[0]-n[0])*(r[1]-s[1])-(s[1]-n[1])*(r[0]-s[0]);if(!(Math.abs(o)<1e-9)){if(t&&Math.sign(o)!==t)return!1;t=Math.sign(o)}}return!0}var Fn=1e-4;function Lu(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];t+=n[0]*s[1]-s[0]*n[1]}return t/2}function dp(i,t,e,n){let s=[t[0]-i[0],t[1]-i[1]],r=[n[0]-e[0],n[1]-e[1]],o=s[0]*r[1]-s[1]*r[0];if(Math.abs(o)<1e-12)return null;let a=((e[0]-i[0])*r[1]-(e[1]-i[1])*r[0])/o,l=((e[0]-i[0])*s[1]-(e[1]-i[1])*s[0])/o;return a>Fn&&a<1-Fn&&l>-Fn&&l<1+Fn?a:null}function Fu(i,t,e){let n=e[0]-t[0],s=e[1]-t[1],r=n*n+s*s;if(r<1e-12)return null;let o=((i[0]-t[0])*n+(i[1]-t[1])*s)/r;return o<=Fn||o>=1-Fn?null:Math.abs((i[0]-t[0])*s-(i[1]-t[1])*n)/Math.sqrt(r)<Fn?o:null}function ly(i,t){for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];for(let r=0;r<t.length;r++){let o=t[r],a=t[(r+1)%t.length];if(dp(n,s,o,a)!==null||Fu(o,n,s)!==null||Fu(n,o,a)!==null||Math.hypot(n[0]-o[0],n[1]-o[1])<Fn)return!0}}return Zt(i[0],t)||Zt(t[0],i)}function cy(i){let t=i.map(r=>Lu(r)>=0?r:[...r].reverse()),e=[];t.forEach((r,o)=>{for(let a=0;a<r.length;a++){let l=r[a],c=r[(a+1)%r.length],u=[0,1];t.forEach((h,f)=>{if(f!==o)for(let d=0;d<h.length;d++){let p=h[d],x=h[(d+1)%h.length],g=dp(l,c,p,x)??Fu(p,l,c);g!==null&&u.push(g)}}),u.sort((h,f)=>h-f);for(let h=1;h<u.length;h++){if(u[h]-u[h-1]<Fn)continue;let f=[l[0]+(c[0]-l[0])*u[h-1],l[1]+(c[1]-l[1])*u[h-1]],d=[l[0]+(c[0]-l[0])*u[h],l[1]+(c[1]-l[1])*u[h]],p=Math.hypot(d[0]-f[0],d[1]-f[1]),x=[(f[0]+d[0])/2+(d[1]-f[1])/p*.001,(f[1]+d[1])/2-(d[0]-f[0])/p*.001];t.some((g,m)=>m!==o&&Zt(x,g))||e.some(([g,m])=>Math.hypot(g[0]-f[0],g[1]-f[1])<Fn&&Math.hypot(m[0]-d[0],m[1]-d[1])<Fn)||e.push([f,d])}}});let n=[],s=new Set;for(let r=0;r<e.length;r++){if(s.has(r))continue;s.add(r);let o=[e[r][0]],a=e[r][1];for(let l=0;l<e.length&&!(Math.hypot(a[0]-o[0][0],a[1]-o[0][1])<.001);l++){let c=e.findIndex(([u],h)=>!s.has(h)&&Math.hypot(u[0]-a[0],u[1]-a[1])<.001);if(c<0)break;s.add(c),o.push(e[c][0]),a=e[c][1]}o.length>=3&&Lu(o)>1e-6&&n.push(o)}return n}function Du(i){let t=i.filter(r=>r.length>=3),e=t.map((r,o)=>o),n=r=>e[r]===r?r:e[r]=n(e[r]);for(let r=0;r<t.length;r++)for(let o=r+1;o<t.length;o++)n(r)!==n(o)&&ly(t[r],t[o])&&(e[n(o)]=n(r));let s=new Map;return t.forEach((r,o)=>s.set(n(o),[...s.get(n(o))??[],r])),[...s.values()].flatMap(r=>r.length===1?r:cy(r))}function uy(i,t,e){let n=e[0]-t[0],s=e[1]-t[1],r=n*n+s*s,o=r?Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*s)/r)):0;return Math.hypot(i[0]-t[0]-n*o,i[1]-t[1]-s*o)}function pp(i,t,e=.03){return i.every(n=>Zt(n,t)||t.some((s,r)=>uy(n,s,t[(r+1)%t.length])<=e))}function Nu(i,t){let e=Lu(i)>=0?i:[...i].reverse(),n=(s,r)=>{let o=Math.hypot(r[0]-s[0],r[1]-s[1])||1;return[-(r[1]-s[1])/o,(r[0]-s[0])/o]};return e.map((s,r)=>{let o=n(e[(r-1+e.length)%e.length],s),a=n(s,e[(r+1)%e.length]),l=1+o[0]*a[0]+o[1]*a[1];return l<.1?s:[s[0]+(o[0]+a[0])/l*t,s[1]+(o[1]+a[1])/l*t]})}var D={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},ft=Ot(5995775,.3),Jt=Ot(5995775,.17),Yt=Ot(3662079,.45),Js=class i{buf;lines;tf;mirrored;constructor(t,e,n){this.buf=t,this.lines=e,this.tf=n,this.mirrored=_p(n)}rotated(t,e,n){let s=n*he,r=Math.cos(s),o=Math.sin(s),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(t+(l-t)*r-(c-e)*o,e+(l-t)*o+(c-e)*r))}box(t,e,n,s,r,o,a,l=a,c=null){if(e-t<1e-4||o-r<1e-4||s-n<1e-4)return;let u=[this.tf(t,r),this.tf(t,o),this.tf(e,o),this.tf(e,r)];Re(this.buf,Uu(u),n,s,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(u,n,s,c)}loft(t,e,n,s,r,o=r,a=null){if(s-n<1e-4)return;let l=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])],c=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])];if(l!==Uu(l)&&(l.reverse(),c.reverse()),sp(this.buf,l,c,n,s,r,o),a)for(let u=0;u<4;u++)this.line(c[u],c[(u+1)%4],s,s,a),this.line(l[u],c[u],n,s,a)}pad(t,e,n,s,r,o,a,l=a,c=.03,u=null){if(c=Math.min(c,(e-t)/2-.005,(o-r)/2-.005,(s-n)/2),c<.008)return this.box(t,e,n,s,r,o,a,l,u);this.loft([t+c,e-c,r+c,o-c],[t,e,r,o],n,n+c,a),s-n-2*c>.005&&this.box(t,e,n+c,s-c,r,o,a,a,u),this.loft([t,e,r,o],[t+c,e-c,r+c,o-c],s-c,s,a,l)}lyingCyl(t,e,n,s,r,o,a,l,c=l,u=12,h=null){let f=Math.min(a,r-s)/2;if(f<1e-4||o<1e-4)return;let d=(s+r)/2,p=t==="x"?e:n,x=t==="x"?n:e,g=(_,M)=>t==="x"?this.tf(_,M):this.tf(M,_),m=this.buf.p.length;if(rp(this.buf,g,p-o/2,p+o/2,x,d,f,l,c,u),this.mirrored&&Vu(this.buf,m),h)for(let _ of[p-o/2,p+o/2])for(let M=0;M<u;M++){let v=M/u*Math.PI*2,y=(M+1)/u*Math.PI*2;this.line(g(_,x+Math.sin(v)*f),g(_,x+Math.sin(y)*f),d+Math.cos(v)*f,d+Math.cos(y)*f,h)}}cyl(t,e,n,s,r,o,a=o,l=10,c=null){let u=[];for(let h=0;h<l;h++){let f=h/l*Math.PI*2;u.push(this.tf(t+Math.cos(f)*n,e+Math.sin(f)*n))}if(Re(this.buf,Uu(u),s,r,o,a,{aoFrom:0,bottom:s>.05}),c)for(let h=0;h<l;h++)this.line(u[h],u[(h+1)%l],r,r,c)}seg(t,e,n,s,r,o,a=ft){this.line(this.tf(t,n),this.tf(s,o),e,r,a)}line(t,e,n,s,r){this.lines.seg([t[0],n,t[1]],[e[0],s,e[1]],r,Gt)}outline(t,e,n,s){for(let r=0;r<4;r++){let o=t[r],a=t[(r+1)%4];this.line(o,a,n,n,s),this.line(o,o,e,n,s)}}};function _p(i){let t=i(0,0),e=i(1,0),n=i(0,1);return(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0])<0}function Uu(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];t+=n[0]*s[1]-s[0]*n[1]}return t>=0?i:[...i].reverse()}function os(i,t,e,n,s,r,o=D.metal,a=!1){let l=t/2-r-s,c=e/2-r-s;for(let u of[-1,1])for(let h of[-1,1]){let f=u*l,d=h*c;a?i.loft([f-s*.3,f+s*.3,d-s*.3,d+s*.3],[f-s/2,f+s/2,d-s/2,d+s/2],0,n,o):i.box(f-s/2,f+s/2,0,n,d-s/2,d+s/2,o)}}function eo(i,t,e,n,s,r,o,a=null,l=!1){let c=(e-t)/o;for(let u=1;u<o;u++){let h=t+c*u;i.seg(h,n,r,h,s,r,Jt)}for(let u=0;u<o;u++){let h=t+c*(u+.5),f=a??s-.08;if(l)i.seg(h-Math.min(.1,c/4),f,r+.012,h+Math.min(.1,c/4),f,r+.012,Yt);else{let d=o>1?h+(u%2?-c/2+.06:c/2-.06):h+c/2-.06;i.seg(d,f-.08,r+.012,d,f+.08,r+.012,Yt)}}}function mp(i,t,e,n,s){let r=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.min(.2,t*.12),u=n*.5,h=Math.min(.24,e*.28);os(i,t,e,.07,.05,.05,D.wood,!0),i.pad(r,o,.07,u-.08,a+.02,l,D.fabric,D.fabricTop,.04,ft),i.loft([r,o,a,a+h],[r+.01,o-.01,a,a+h*.5],u-.08,n,D.fabric,D.fabricTop,ft),i.pad(r,r+c,u-.08,n*.72,a+.02,l-.02,D.fabric,D.fabricTop,.04,ft),i.pad(o-c,o,u-.08,n*.72,a+.02,l-.02,D.fabric,D.fabricTop,.04,ft);let d=(o-c-(r+c))/s;for(let p=0;p<s;p++){let x=r+c+d*p+.02,g=x+d-.04;i.pad(x,g,u-.08,u+.05,a+h+.02,l-.06,D.cushion,D.cushion,.04),i.loft([x+.01,g-.01,a+h*.55,a+h+.14],[x+.03,g-.03,a+h*.4,a+h*.4+.06],u+.03,n*.93,D.cushion)}}function gp(i,t,e,n,s){let r=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.max(.3,Math.min(.95,e*.5,t*(s?.34:.45))),u=Math.min(.24,c*.28),h=Math.min(.2,c*.24),f=n*.5,d=n*.72,p=s?[-1,1]:[-1],x=(b,S)=>i.loft([b-.015,b+.015,S-.015,S+.015],[b-.025,b+.025,S-.025,S+.025],0,.07,D.wood);x(r+.06,a+.06),x(o-.06,a+.06),s||x(o-.06,a+c-.06);for(let b of p)x(b*(t/2-.06),l-.06),x(b*(t/2-c+.06),l-.06);i.pad(r,o,.07,f-.08,a+.02,a+c,D.fabric,D.fabricTop,.04,ft);for(let b of p){let[S,E]=b<0?[r+.02,r+c]:[o-c,o-.02];i.pad(S,E,.07,f-.08,a+c-.02,l,D.fabric,D.fabricTop,.04,ft)}i.loft([r,o,a,a+u],[r+.01,o-.01,a,a+u*.5],f-.08,n,D.fabric,D.fabricTop,ft);for(let b of p)b<0?i.loft([r,r+u,a+u,l],[r,r+u*.5,a+u,l-.01],f-.08,n,D.fabric,D.fabricTop,ft):i.loft([o-u,o,a+u,l],[o-u*.5,o,a+u,l-.01],f-.08,n,D.fabric,D.fabricTop,ft);for(let b of p){let[S,E]=b<0?[r+u,r+c]:[o-c,o-u];i.pad(S,E,f-.08,d,l-h,l,D.fabric,D.fabricTop,.04,ft)}s||i.pad(o-h,o,f-.08,d,a+.02,a+c-.02,D.fabric,D.fabricTop,.04,ft);let g=r+u,m=s?o-u:o-h,_=Math.max(1,Math.round((m-g)/.62)),M=(m-g)/_;for(let b=0;b<_;b++){let S=g+M*b+.02,E=S+M-.04;i.pad(S,E,f-.08,f+.05,a+u+.02,a+c-.04,D.cushion,D.cushion,.04),i.loft([S+.01,E-.01,a+u*.55,a+u+.14],[S+.03,E-.03,a+u*.4,a+u*.4+.06],f+.03,n*.93,D.cushion)}let v=a+c,y=l-h;if(y-v<.2)return;let w=Math.max(1,Math.round((y-v)/.62)),T=(y-v)/w;for(let b of p)for(let S=0;S<w;S++){let E=v+T*S+.02,P=E+T-.04;b<0?(i.pad(r+u+.02,r+c-.04,f-.08,f+.05,E,P,D.cushion,D.cushion,.04),i.loft([r+u*.55,r+u+.14,E+.01,P-.01],[r+u*.4,r+u*.4+.06,E+.03,P-.03],f+.03,n*.93,D.cushion)):(i.pad(o-c+.04,o-u-.02,f-.08,f+.05,E,P,D.cushion,D.cushion,.04),i.loft([o-u-.14,o-u*.55,E+.01,P-.01],[o-u*.4-.06,o-u*.4,E+.03,P-.03],f+.03,n*.93,D.cushion))}}function hy(i,t,e,n){let s=-e/2,r=e/2,o=-t/2,a=t/2,l=Math.min(.32,n*.36);os(i,t,e,.08,.06,.03,D.wood,!0),i.box(o,a,.08,l,s+.06,r,D.wood,D.woodTop,ft),i.pad(o+.03,a-.03,l,l+.2,s+.08,r-.03,D.white,D.whiteTop,.03),i.box(o,a,.08,n-.05,s,s+.07,D.wood,D.woodTop,ft),i.box(o,a,n-.05,n,s,s+.09,D.wood,D.woodTop,Jt);let c=l+.2,u=s+(e-.1)*.36;i.pad(o+.01,a-.01,c-.1,c+.05,u,r-.01,D.cushion,D.fabricTop,.025,Jt),i.lyingCyl("x",0,u+.05,c-.02,c+.09,t-.02,.1,D.cushion,D.fabricTop,8);let h=t>1.2?2:1,f=(t-.2)/h;for(let d=0;d<h;d++){let p=o+.1+f*d,x=s+.12,g=Math.min(.42,e*.2),m=.1;i.loft([p+.03+m,p+f-.03-m,x+m*.5,x+g-m*.5],[p+.03,p+f-.03,x,x+g],c,c+.06,D.whiteTop),i.loft([p+.03,p+f-.03,x,x+g],[p+.03+m,p+f-.03-m,x+m*.5,x+g-m*.5],c+.06,c+.12,D.whiteTop,D.whiteTop,Jt)}}function fy(i,t,e,n){let s=Math.min(.46,n*.52);os(i,t,e,s-.04,.035,.02,D.wood,!0),i.box(-t/2,t/2,s-.04,s,-e/2,e/2,D.wood,D.woodTop,ft),i.pad(-t/2+.02,t/2-.02,s,s+.04,-e/2+.05,e/2-.03,D.cushion,D.cushion,.015),i.loft([-t/2,t/2,-e/2+.02,-e/2+.07],[-t/2+.02,t/2-.02,-e/2,-e/2+.03],s,n,D.wood,D.woodTop,ft)}function dy(i,t,e,n){os(i,t,e,n-.04,.06,.05,D.wood,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,D.wood,D.woodTop,Yt),i.box(-t/2+.08,t/2-.08,n-.1,n-.04,-e/2+.08,e/2-.08,D.body)}function py(i,t,e,n){let s=-t/2,r=t/2;i.box(s,r,n-.035,n,-e/2,e/2,D.wood,D.woodTop,ft),i.box(s,s+.03,0,n-.035,-e/2+.03,e/2-.03,D.metal);let o=Math.min(.42,t*.32);i.box(r-o,r,0,n-.035,-e/2+.03,e/2-.02,D.body,D.bodyTop,ft);let a=e/2-.02;for(let l of[n*.35,n*.66])i.seg(r-o,l,a,r,l,a,Jt);for(let l of[n*.2,n*.5,n*.82])i.seg(r-o/2-.07,l,a+.012,r-o/2+.07,l,a+.012,Yt);i.box(-.3,.3,n+.08,n+.42,-e/2+.08,-e/2+.11,D.dark,D.dark,Yt),i.box(-.03,.03,n,n+.1,-e/2+.09,-e/2+.13,D.metal)}function Ui(i,t,e,n,s,r=null,o=!1){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,D.body,D.bodyTop,ft),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,D.dark),eo(i,-t/2,t/2,.08,n,e/2-.02,s,r,o)}function my(i,t,e,n){i.box(-t/2,-t/2+.025,0,n,-e/2,e/2,D.wood,D.woodTop,ft),i.box(t/2-.025,t/2,0,n,-e/2,e/2,D.wood,D.woodTop,ft),i.box(-t/2+.025,t/2-.025,0,n,-e/2,-e/2+.015,D.body);let r=Math.max(2,Math.round(n/.38));for(let o=0;o<=r;o++){let a=Math.min(n-.025,n/r*o);if(i.box(-t/2+.025,t/2-.025,a,a+.025,-e/2+.015,e/2,D.wood,D.woodTop,Jt),o<r){let l=-t/2+.025+.04,c=o*3;for(;l<t/2-.025-.12;){let u=.03+c*7%5*.008,h=n/r-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+u,a+.025,a+.025+h,-e/2+.04,e/2-.05,c%3?D.fabric:D.cushion,D.fabricTop),l+=u+.006,c++}}}}function gy(i,t,e,n){let s=Math.max(1,Math.round(t/.6));Ui(i,t,e-.02,n-.04,s,n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,D.whiteTop,D.whiteTop,ft)}function xy(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,D.white,D.whiteTop,ft);let s=n*.62;i.seg(-t/2,s,e/2,t/2,s,e/2,Jt);let r=t/2-.06;i.seg(r,s+.08,e/2+.015,r,s+.4,e/2+.015,Yt),i.seg(r,s-.4,e/2+.015,r,s-.08,e/2+.015,Yt)}function by(i,t,e,n){let s=e/2-yp;i.box(-t/2,t/2,.02,n,-e/2,s,D.body,D.bodyTop,ft),i.box(-t/2+.05,t/2-.05,0,.02,-e/2+.05,s-.05,D.dark);for(let r of[.35,.7,1.05,1.4])r>n-.15||(i.seg(-t/2+.03,r,s+.001,-.03,r,s+.001,Jt),i.seg(.03,r,s+.001,t/2-.03,r,s+.001,Jt))}var yp=.06;function Mp(i,t,e,n,s){let r=i.p.length;vy(i,t,e,n,s),t.mirror&&Vu(i,r)}function vy(i,t,e,n,s){let r=t.rotation*he,o=Math.cos(r),a=Math.sin(r),l=t.mirror?-1:1,c=(v,y)=>[t.x+l*v*o-y*a,t.z+l*v*a+y*o],u=e+.05,h=e+t.h-.02,f=new Q(.75,.1,.14),d=new Q(D.dark),p=new Q(D.accent),x=t.w/2-.006,g=(v,y,w)=>{let T=w/m,b=new Q(2043212).lerp(f,T),S=new Q(D.body).lerp(f,T*.8),E=Math.cos(w),P=Math.sin(w),A=(L,N)=>c(v+y*(L*E-N*P),t.d/2+L*P+N*E),I=(L,N,U,k)=>{let[B,z,V,st]=L;i.tri([B[0],N,B[1]],[z[0],N,z[1]],[V[0],U,V[1]],k),i.tri([B[0],N,B[1]],[V[0],U,V[1]],[st[0],U,st[1]],k)},R=(L,N,U,k,B,z,V,st=V)=>{let $=[A(L,z),A(N,z),A(N,B),A(L,B)];I([$[0],$[1],$[1],$[0]],U,k,st),I([$[3],$[2],$[2],$[3]],U,k,V),I([$[0],$[3],$[3],$[0]],U,k,V),I([$[1],$[2],$[2],$[1]],U,k,V),I([$[0],$[1],$[2],$[3]],k,k,V),I([$[3],$[2],$[1],$[0]],U,U,V)};return R(0,x,u,h,-yp,0,S,b),R(x-.05,x-.03,e+t.h*.45,e+t.h*.75,.005,.025,p),R},m=1.83;g(-t.w/2,1,n*m)(.12,.3,e+t.h*.5,e+t.h*.68,.001,.005,d),g(t.w/2,-1,s*m)(.06,x-.06,e+t.h*.52,e+t.h*.86,.001,.005,d)}function _y(i,t,e,n){Ui(i,t,e-.02,n-.04,1,n-.24,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,D.dark,D.dark,ft);for(let[s,r,o]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=s*t/.6,l=r*e/.62;i.cyl(a,l,o,n,n+.004,D.dark,1451583,12,Yt)}}function yy(i,t,e,n){Ui(i,t,e-.02,n-.04,Math.max(1,Math.round(t/.45)),n-.2);let s=Math.min(.5,t-.2);i.box(-t/2,-s/2,n-.04,n,-e/2,e/2,D.whiteTop,D.whiteTop,ft),i.box(s/2,t/2,n-.04,n,-e/2,e/2,D.whiteTop,D.whiteTop,ft),i.box(-s/2,s/2,n-.04,n,-e/2,-e/2+.1,D.whiteTop,D.whiteTop),i.box(-s/2,s/2,n-.04,n,e/2-.08,e/2,D.whiteTop,D.whiteTop),i.box(-s/2,s/2,n-.2,n-.17,-e/2+.1,e/2-.08,D.metal,D.metal,Yt),i.cyl(0,-e/2+.05,.02,n,n+.28,D.metal,D.metal,8),i.box(-.015,.015,n+.24,n+.28,-e/2+.05,-e/2+.22,D.metal)}function My(i,t,e,n){i.box(-t/2,t/2,0,n-.02,-e/2,e/2,D.white,D.whiteTop,ft),i.box(-t/2,t/2,n-.02,n,-e/2,-e/2+.07,D.whiteTop),i.box(-t/2,t/2,n-.02,n,e/2-.07,e/2,D.whiteTop),i.box(-t/2,-t/2+.07,n-.02,n,-e/2+.07,e/2-.07,D.whiteTop),i.box(t/2-.07,t/2,n-.02,n,-e/2+.07,e/2-.07,D.whiteTop),i.box(-t/2+.07,t/2-.07,n-.03,n-.02,-e/2+.07,e/2-.07,D.glass,D.glass,Yt),i.cyl(-t/2+.04,0,.02,n,n+.12,D.metal,D.metal,8)}function Sy(i,t,e,n){i.box(-t/2,t/2,0,.05,-e/2,e/2,D.whiteTop,D.whiteTop,ft),i.cyl(0,0,.04,.05,.052,D.metal,D.metal,8);for(let[s,r,o,a]of[[-t/2,e/2,t/2,e/2],[t/2,-e/2,t/2,e/2]])i.seg(s,.05,r,o,.05,a,Yt),i.seg(s,n,r,o,n,a,Yt),i.seg(o,.05,a,o,n,a,Yt);i.cyl(-t/2+.06,-e/2+.06,.015,.05,n-.05,D.metal,D.metal,6),i.cyl(-t/2+.2,-e/2+.2,.1,n-.08,n-.06,D.metal,D.metal,12,Yt)}function wy(i,t,e,n){let s=Math.min(.18,e*.3);i.box(-t/2,t/2,.45,n,-e/2,-e/2+s,D.white,D.whiteTop,ft),i.box(-t*.3,t*.3,0,.36,-e/2+s-.02,e/2-.12,D.white,D.whiteTop),i.cyl(0,e/2-.26,Math.min(t/2,.19),.36,.41,D.white,D.whiteTop,12,ft),i.box(-t/2+.02,t/2-.02,.41,.43,-e/2+s,-e/2+s+.05,D.whiteTop)}function Ty(i,t,e,n){Ui(i,t,e-.02,n-.12,t>.8?2:1,n-.3),i.box(-t/2,t/2,n-.12,n,-e/2,e/2,D.white,D.whiteTop,ft),i.box(-t/2+.07,t/2-.07,n-.005,n,-e/2+.12,e/2-.06,D.glass,D.glass,Yt),i.cyl(0,-e/2+.06,.018,n,n+.2,D.metal,D.metal,8),i.box(-t/2+.04,t/2-.04,n+.35,n+1,-e/2,-e/2+.02,D.glass,D.glass,Yt)}function Ey(i,t,e,n){Ui(i,t,e,n,Math.max(2,Math.round(t/.6)),n*.55,!0);let s=Math.min(t*.8,1.45),r=s*.56;i.box(-.1,.1,n,n+.02,-e/2+.08,-e/2+.24,D.metal),i.box(-.02,.02,n+.02,n+.12,-e/2+.14,-e/2+.18,D.metal),i.box(-s/2,s/2,n+.1,n+.1+r,-e/2+.12,-e/2+.16,D.dark,D.dark,Yt)}function Ay(i,t,e,n){let s=Math.min(t,e)/2,r=Math.min(.4,n*.34);i.cyl(0,0,s*.62,0,r,D.pot,D.pot,10,ft),i.cyl(0,0,s*.08,r,n*.55,D.wood,D.wood,6);let o=4;for(let a=0;a<o;a++){let l=a/(o-1),c=s*(.95-.55*l),u=r+(n-r)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,u,u+(n-r)*.16,D.plant,D.plantTop,8,a===o-1?Jt:null)}}function Ry(i,t,e){i.box(-t/2,t/2,0,.012,-e/2,e/2,D.fabric,D.fabricTop);let n=Math.min(.12,Math.min(t,e)*.08);for(let[s,r,o,a]of[[-t/2+n,-e/2+n,t/2-n,-e/2+n],[t/2-n,-e/2+n,t/2-n,e/2-n],[t/2-n,e/2-n,-t/2+n,e/2-n],[-t/2+n,e/2-n,-t/2+n,-e/2+n]])i.seg(s,.014,r,o,.014,a,ft)}function Cy(i,t,e,n){let s=Math.max(3,Math.round(n/.18)),r=n/s,o=e/s;for(let u=0;u<s;u++){let h=e/2-o*u,f=h-o,d=r*(u+1);i.box(-t/2,t/2,0,d,f,h,D.wood,D.woodTop),i.seg(-t/2,d,h,t/2,d,h,ft)}i.seg(-t/2,0,e/2,-t/2,r,e/2,ft);for(let u of[-t/2,t/2])i.seg(u,r,e/2,u,n,-e/2+o,Jt);let a=.9,l=t/2-.03,c=Math.max(1,s-4);i.seg(l,r+a,e/2-o/2,l,r*c+a,e/2-o*(c-.5),Yt);for(let u=0;u<c;u+=3){let h=e/2-o*(u+.5),f=r*(u+1);i.seg(l,f,h,l,f+a,h,Jt)}}function Py(i,t,e,n){let{k:s,steps1:r,steps2:o,fw:a,landing:l,run:c,rise:u}=Nd(t,e,n),h=-t/2,f=-t/2+a,d=t/2-a,p=t/2,x=-e/2+l;for(let T=0;T<r;T++){let b=e/2-c*T,S=u*(T+1);i.box(h,f,0,S,b-c,b,D.wood,D.woodTop),i.seg(h,S,b,f,S,b,ft)}i.seg(h,0,e/2,h,u,e/2,ft);let g=u*s,m=.2;i.box(h,f,0,g,-e/2,x,D.wood,D.woodTop),i.box(f,p,Math.max(0,g-m),g,-e/2,x,D.wood,D.woodTop),i.seg(h,g,x,f,g,x,ft);for(let T=0;T<o;T++){let b=x+c*T,S=u*(s+1+T);i.box(d,p,Math.max(0,S-u-m),S,b,b+c,D.wood,D.woodTop),i.seg(d,S,b,p,S,b,ft)}i.seg(h,u,e/2,h,g,x,Jt),i.seg(p,g,x,p,n,x+c*(o-1),Jt);let _=.9,M=f-.03,v=d+.03,y=x-.03,w=Math.max(1,o-4);i.seg(M,u+_,e/2-c/2,M,g+_,y,Yt),i.seg(M,g+_,y,v,g+_,y,Yt),i.seg(v,g+_,y,v,u*(s+w)+_,x+c*(w-.5),Yt);for(let T=0;T<r;T+=3){let b=e/2-c*(T+.5);i.seg(M,u*(T+1),b,M,u*(T+1)+_,b,Jt)}for(let T of[M,v])i.seg(T,g,y,T,g+_,y,Jt);for(let T=2;T<w;T+=3){let b=x+c*(T+.5);i.seg(v,u*(s+1+T),b,v,u*(s+1+T)+_,b,Jt)}}function Iy(i,t,e,n){os(i,t,e,.12,.03,.04,D.metal),i.box(-t/2,t/2,.12,n,-e/2,e/2-.02,D.wood,D.woodTop,ft),eo(i,-t/2,t/2,.12,n,e/2-.02,Math.max(2,Math.round(t/.45)),n-.1,!0)}function Ly(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2-.02,D.wood,D.woodTop,ft),i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.06,D.dark);let s=Math.max(3,Math.round((n-.06)/.22)),r=e/2-.02;for(let o=1;o<s;o++){let a=.06+(n-.06)/s*o;i.seg(-t/2,a,r,t/2,a,r,Jt)}for(let o=0;o<s;o++){let a=.06+(n-.06)/s*(o+.5);i.seg(-.08,a,r+.012,.08,a,r+.012,Yt)}}function Fy(i,t,e,n){i.box(-t/2,t/2,0,.45,-e/2,e/2,D.wood,D.woodTop,ft),eo(i,-t/2,t/2,.02,.45,e/2,Math.max(2,Math.round(t/.5)),.38,!0),i.box(-t/2,t/2,.45,n,-e/2,-e/2+.03,D.body,D.bodyTop,ft),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,D.wood,D.woodTop,ft);let s=Math.max(2,Math.round(t/.25));for(let r=0;r<s;r++){let o=-t/2+t/s*(r+.5);i.box(o-.015,o+.015,n-.32,n-.28,-e/2+.03,-e/2+.1,D.metal,D.metal)}}function xp(i,t,e,n,s){let o=Math.min(.5,s?e*.4:e),a=.08;i.box(-t/2,t/2,0,.45-.06,-e/2,-e/2+o,D.wood,D.woodTop,ft),i.box(-t/2,t/2,0,n,-e/2,-e/2+a,D.wood,D.woodTop,ft),i.box(-t/2+(s?o:.02),t/2-.02,.45-.06,.45+.02,-e/2+a,-e/2+o,D.cushion,D.cushion,Jt),s&&(i.box(-t/2,-t/2+o,0,.45-.06,-e/2+o,e/2,D.wood,D.woodTop,ft),i.box(-t/2,-t/2+a,0,n,-e/2+a,e/2,D.wood,D.woodTop,ft),i.box(-t/2+a,-t/2+o,.45-.06,.45+.02,-e/2+a,e/2-.02,D.cushion,D.cushion,Jt))}function Dy(i,t,e,n){let s=Math.min(t,e)/2;i.cyl(0,0,s*.8,0,.02,D.metal,D.metal,12),i.cyl(0,0,.025,.02,n-.05,D.metal,D.metal,6),i.cyl(0,0,s*.75,n*.35,n*.35+.015,D.metal,D.metal,12,Jt),i.cyl(0,0,s,n-.05,n,D.cushion,D.fabricTop,14,ft)}function Ny(i,t,e,n){let s=Math.min(t,e)/2;i.box(-s,s,.04,.08,-.03,.03,D.metal),i.box(-.03,.03,.04,.08,-s,s,D.metal),i.cyl(0,0,.06,.02,.1,D.dark,D.dark,8),i.cyl(0,0,.025,.1,.44,D.metal,D.metal,6),i.box(-s*.75,s*.75,.44,.52,-s*.7,s*.75,D.fabric,D.cushion,ft),i.box(-s*.7,s*.7,.58,n,-s*.78,-s*.62,D.fabric,D.fabricTop,ft),i.box(-.03,.03,.5,.62,-s*.72,-s*.62,D.metal)}function Uy(i,t,e,n){os(i,t,e,.08,.04,.05,D.wood),i.box(-t/2,t/2,.08,n,-e/2,e/2,D.fabric,D.cushion,ft)}function Oy(i,t,e,n){i.box(-t/2,t/2,1.45,1.45+n,-e/2,e/2-.02,D.body,D.bodyTop,ft),eo(i,-t/2,t/2,1.45,1.45+n,e/2-.02,Math.max(1,Math.round(t/.5)),1.45+.08)}function By(i,t,e,n){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,D.body,D.bodyTop,ft),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,D.dark);let s=e/2-.02;i.box(-t/2+.03,t/2-.03,.85,1.45,s,s+.01,D.dark,D.dark,Yt),i.seg(-t/2+.08,1.4,s+.02,t/2-.08,1.4,s+.02,Yt);for(let r of[.85,1.45])i.seg(-t/2,r,s,t/2,r,s,Jt);i.seg(t/2-.06,.5,s+.012,t/2-.06,.7,s+.012,Yt),i.seg(t/2-.06,1.6,s+.012,t/2-.06,1.8,s+.012,Yt)}function zy(i,t,e,n){let s=e-.3;i.box(-t/2+.05,t/2-.05,.08,n-.04,-e/2+.02,-e/2+s,D.body,D.bodyTop,ft),i.box(-t/2+.07,t/2-.07,0,.08,-e/2+.04,-e/2+s-.04,D.dark),eo(i,-t/2+.05,t/2-.05,.08,n-.04,-e/2+s,Math.max(2,Math.round(t/.6)),n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,D.whiteTop,D.whiteTop,ft)}function ky(i,t,e,n){i.box(-t/2,t/2,.02,n-.04,-e/2,e/2-.02,D.body,D.bodyTop,ft),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,D.dark),i.seg(-t/2+.08,n-.12,e/2-.008,t/2-.08,n-.12,e/2-.008,Yt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,D.whiteTop,D.whiteTop,ft)}function bp(i,t,e,n,s){i.box(-t/2,t/2,0,n,-e/2,e/2-.02,D.white,D.whiteTop,ft);let r=e/2-.012;i.seg(-t/2,n-.14,r,t/2,n-.14,r,Jt),i.seg(t/2-.16,n-.07,r,t/2-.08,n-.07,r,Yt);let o=(n-.14)/2+.04,a=Math.min(t*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let u=c/l*Math.PI*2,h=(c+1)/l*Math.PI*2;i.seg(Math.cos(u)*a,o+Math.sin(u)*a,r,Math.cos(h)*a,o+Math.sin(h)*a,r,Yt),s||i.seg(Math.cos(u)*a*.72,o+Math.sin(u)*a*.72,r,Math.cos(h)*a*.72,o+Math.sin(h)*a*.72,r,Jt)}}function Vy(i,t,e,n){for(let o of[-1,1])for(let a of[-1,1])i.box(o*(t/2)-(o>0?.05:0),o*(t/2)+(o<0?.05:0),0,n,a*(e/2)-(a>0?.05:0),a*(e/2)+(a<0?.05:0),D.wood,D.woodTop);for(let o of[.25,n-.55])i.box(-t/2,t/2,o,o+.08,-e/2,e/2,D.wood,D.woodTop,ft),i.box(-t/2+.04,t/2-.04,o+.08,o+.24,-e/2+.05,e/2-.05,D.white,D.whiteTop,Jt),i.box(-t/2+.05,t/2-.05,o+.24,o+.33,-e/2+.08,-e/2+.4,D.whiteTop,D.whiteTop);i.box(-t/2,t/2,n-.2,n-.15,e/2-.05,e/2,D.wood,D.woodTop);let r=t/2-.35;for(let o of[r-.18,r+.18])i.seg(o,0,e/2+.02,o,n-.15,e/2+.02,ft);for(let o=.3;o<n-.2;o+=.28)i.seg(r-.18,o,e/2+.02,r+.18,o,e/2+.02,Jt)}function Gy(i,t,e,n){let s=Math.min(t,e)/2;i.cyl(0,0,s*.4,0,.03,D.metal,D.metal,12),i.cyl(0,0,.05,.03,n-.04,D.wood,D.wood,8),i.cyl(0,0,s,n-.04,n,D.wood,D.woodTop,20,ft)}function Hy(i,t,e,n){os(i,t,e,n-.03,.04,.03,D.wood),i.box(-t/2,t/2,n-.03,n,-e/2,e/2,D.wood,D.woodTop,ft),i.box(-t/2+.05,t/2-.05,.1,.13,-e/2+.05,e/2-.05,D.body,D.bodyTop,Jt)}function Wy(i,t,e,n){let s=1.3-n/2;i.box(-.12,.12,s+n*.3,s+n*.7,-e/2,-e/2+.03,D.metal),i.box(-t/2,t/2,s,s+n,-e/2+.03,e/2,D.dark,D.dark,Yt)}function Xy(i,t,e,n){let s=Bu;i.box(-t/2+.05,-t/2+.08,0,s,-e/2,-e/2+.03,D.metal),i.box(t/2-.08,t/2-.05,0,s,-e/2,-e/2+.03,D.metal),i.box(-t/2,t/2,s,s+n,-e/2+.02,e/2,D.white,D.whiteTop,ft);let r=Math.max(3,Math.round(t/.1));for(let o=1;o<r;o++){let a=-t/2+t/r*o;i.seg(a,s+.03,e/2+.002,a,s+n-.03,e/2+.002,Jt)}}function Yy(i,t,e,n){let s=zu;i.box(-t/2,t/2,s+.07,s+n,-e/2,e/2,D.white,D.whiteTop,ft),i.box(-t/2,t/2,s,s+.07,-e/2,e/2-.05,D.white,D.white,ft),i.box(-t/2+.04,t/2-.04,s+.012,s+.06,e/2-.05,e/2-.02,D.dark),i.seg(-t/2+.03,s+n*.55,e/2+.002,t/2-.03,s+n*.55,e/2+.002,Jt),i.seg(t/2-.14,s+n*.75,e/2+.002,t/2-.07,s+n*.75,e/2+.002,Yt)}function Ks(i,t,e,n,s,r=20){for(let o=0;o<r;o++){let a=o/r*Math.PI*2,l=(o+1)/r*Math.PI*2;i.seg(t+Math.cos(a)*n,e+Math.sin(a)*n,s,t+Math.cos(l)*n,e+Math.sin(l)*n,s,Yt)}}function qy(i,t,e,n,s){let o=e/2;if(s==="slim"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,D.dark,D.body,ft),i.seg(-t*.25,1.1+n*.15,o+.004,-t*.25,1.1+n*.85,o+.004,Yt),i.box(-t*.1,t*.3,1.1+n*.7,1.1+n*.85,o,o+.005,D.dark);return}if(s==="hybrid"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,D.white,D.whiteTop,ft),Ks(i,0,1.1+n*.66,Math.min(t,n)*.22,o+.004),i.seg(-t*.08,1.1+n*.66,o+.005,t*.08,1.1+n*.66,o+.005,Yt);for(let a of[-1,1])Ks(i,a*t*.22,1.1+n*.2,Math.min(t,n)*.1,-e/2-.002,12);return}i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,D.white,D.whiteTop,ft),i.box(-t*.28,t*.28,1.1+n*.58,1.1+n*.82,e/2,e/2+.006,D.dark),i.seg(-t*.3,1.1+n*.45,e/2+.004,t*.3,1.1+n*.45,e/2+.004,Yt);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*t/2+a*.002,1.1+n*l/6,-e/2+.03,a*t/2+a*.002,1.1+n*l/6,e/2-.03,Jt)}function $y(i,t,e,n){let s=Math.min(e,n)*.32;i.box(-t/2,t/2,0,.03,-e/2,e/2,D.dark),i.box(-t/2,t*.1,.05,.05+s*2,-s,s,D.metal,D.metal,ft);for(let o of[-t*.4,-t*.25,-t*.1])i.seg(o,.05+s*2+.003,-s,o,.05+s*2+.003,s,Jt);i.cyl(t*.28,0,Math.min(t*.2,e*.45),.03,n*.82,D.dark,D.body,14,ft),i.cyl(t*.28,0,Math.min(t*.2,e*.45)*.9,n*.82,n,D.glass,D.glass,14);let r=Math.min(t*.2,e*.45)*.95;for(let o=0;o<16;o++){let a=o/16*Math.PI*2,l=(o+1)/16*Math.PI*2;i.seg(t*.28+Math.cos(a)*r,n*.83,Math.sin(a)*r,t*.28+Math.cos(l)*r,n*.83,Math.sin(l)*r,Yt)}}function Zy(i,t,e,n,s){let r=Math.min(t,e)/2;if(i.cyl(0,0,r*.95,0,n*.08,D.dark,D.dark,16),i.cyl(0,0,r,n*.08,n*.78,D.dark,D.body,18,ft),i.cyl(0,0,r*.75,n*.78,n*.84,D.dark,D.body,16),s==="side6"){let a=r*.9;i.box(a,a+.12,n*.3,n*.66,-.07,.07,D.dark,D.metal,ft),Ks(i,a+.06,n*.56,.05,.075,16),i.box(a+.04,a+.08,n*.66,n*.72,-.015,.015,D.dark,D.body);return}i.cyl(0,0,r*.45,n*.84,n*.95,D.dark,D.metal,16,ft);let o=r*.4;for(let a=0;a<16;a++){let l=a/16*Math.PI*2,c=(a+1)/16*Math.PI*2;i.seg(Math.cos(l)*o,n*.955,Math.sin(l)*o,Math.cos(c)*o,n*.955,Math.sin(c)*o,Yt)}i.box(-.02,.02,n*.95,n,-r*.35,r*.35,D.dark,D.body)}function Jy(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2,D.white,D.whiteTop,ft);for(let a of[-t*.4,t*.4])i.box(a-.03,a+.03,0,.06,-e/2+.02,e/2-.02,D.dark);let s=Math.min(n*.38,t*.3),r=-t*.15,o=n*.53;Ks(i,r,o,s,e/2+.004,24),Ks(i,r,o,s*.55,e/2+.004,16),i.seg(r-s,o,e/2+.005,r+s,o,e/2+.005,Jt),i.seg(r,o-s,e/2+.005,r,o+s,e/2+.005,Jt),i.box(t*.22,t*.42,n*.62,n*.8,e/2,e/2+.006,D.dark),i.seg(t*.25,n*.71,e/2+.008,t*.39,n*.71,e/2+.008,Yt);for(let a=1;a<8;a++)i.seg(t/2+.002,n*(.1+a*.1),-e/2+.03,t/2+.002,n*(.1+a*.1),e/2-.03,Jt)}function Ky(i,t,e,n){i.box(-t/2,t/2,.9,.9+n*.45,-e/2,e/2,D.white,D.whiteTop,ft);for(let r of[-1,1])Ks(i,r*t*.22,.9+n*.22,Math.min(t,n)*.09,e/2+.004,12);i.seg(-t*.35,.9+n*.4,e/2+.004,t*.35,.9+n*.4,e/2+.004,Yt);for(let r of[-1,1])i.box(r*t*.25-t*.18,r*t*.25+t*.18,0,n*.5,-e/2,e/2,D.white,D.glass,Jt)}function jy(i,t,e,n){let s=Ld-n*.4;i.box(-t/2,t/2,s+n*.25,s+n*.6,-e*.25,e*.25,D.metal,D.metal,ft),i.box(-t*.12,t*.12,s+n*.6,s+n*.8,-e*.12,e*.12,D.dark),i.box(-t*.1,t*.45,s+n*.8,s+n,-e*.15,e*.15,D.accent,D.accent)}function Qy(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,D.dark,D.body,ft),i.box(-t/2-.01,t/2+.01,n,n+.03,-e/2-.01,e/2+.01,D.dark,D.body),i.seg(-t/2,n+.032,e/2+.01,t/2,n+.032,e/2+.01,Yt),i.seg(-t*.3,n*.55,e/2+.003,t*.3,n*.55,e/2+.003,Jt)}function t1(i,t,e,n){i.box(-t/2,t/2,1,1+n,-e/2,e/2,D.dark,D.body,ft);let r=Math.min(t,n)*.28,o=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,u=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*r,o+Math.sin(c)*r,e/2+.003,Math.cos(u)*r,o+Math.sin(u)*r,e/2+.003,Yt)}i.box(-.015,.015,1-.35,1,e/2-.03,e/2,D.dark),i.box(-.06,.06,1-.42,1-.35,e/2-.05,e/2,D.dark,D.body)}function e1(i,t,e,n){i.box(-t/2,t/2,.4,.4+n,-e/2,e/2,D.white,D.whiteTop,ft),i.seg(-t/2+.025,.4+.025,e/2+.003,-t/2+.025,.4+n-.025,e/2+.003,Jt),i.seg(-t/2+.025,.4+n-.025,e/2+.003,t/2-.025,.4+n-.025,e/2+.003,Jt),i.box(t/2-.06,t/2-.035,.4+n*.5-.05,.4+n*.5+.05,e/2,e/2+.012,D.dark),i.box(-t*.3,t*.3,.4+n*.6,.4+n*.8,e/2,e/2+.005,D.dark),i.seg(-t*.22,.4+n*.7,e/2+.008,t*.22,.4+n*.7,e/2+.008,Yt)}function n1(i,t,e,n,s){if(s==="wall"){i.box(-t/2,t/2,.5,.5+n,-e/2,e/2,D.white,D.whiteTop,ft),i.seg(-t*.3,.5+n*.9,e/2+.004,t*.3,.5+n*.9,e/2+.004,Yt),i.seg(-t*.3,.5+n*.08,e/2+.003,t*.3,.5+n*.08,e/2+.003,Jt);return}if(s==="cube"){i.box(-t/2+.01,t/2-.01,0,.03,-e/2+.01,e/2-.01,D.dark),i.box(-t/2,t/2,.03,n,-e/2,e/2,D.dark,D.body,ft),i.seg(-t*.35,n*.85,e/2+.004,t*.35,n*.85,e/2+.004,Yt),i.box(-t*.15,t*.15,n,n+.025,-.012,.012,D.dark);return}i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.02,D.dark);let r=Math.max(2,Math.round((n-.06)/.3)),o=(n-.06)/r;for(let a=0;a<r;a++)i.box(-t/2,t/2,.06+a*o+.004,.06+(a+1)*o,-e/2,e/2,D.white,D.whiteTop,ft);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-t*.04,l,e/2+.003,t*.04,l,e/2+.003,Yt)}}var Bu=.12,zu=2.05;function ku(i,t){let e=i1(i,t);return e&&i.mirror?{...e,x0:-e.x1,x1:-e.x0}:e}function i1(i,t){let e=Math.max(.05,i.w),n=Math.max(.05,i.d),s=Math.max(.005,i.h),r=Md(i.type);if(r){let l=t?mn(t,i):0,c=(r.x-r.w/2)*e,u=(r.x+r.w/2)*e,h=Math.min(.02,(u-c)*.05);return{x0:c+h,x1:u-h,y0:l+r.y*s+h,y1:l+(r.y+r.h)*s-h,z:(r.z+r.d/2)*n}}let o=t&&i.type!=="fridge_smart"?mn(t,i)-Hr(i):0,a=s1(i,e,n,s,t);return a?{...a,y0:a.y0+o,y1:a.y1+o}:null}function s1(i,t,e,n,s){if(i.type==="pool_pump"){let r=Math.min(e,n)*.32;return{x0:-t/2+.03,x1:t*.08,y0:.07,y1:.03+r*2,z:r+.004}}if(i.type==="pool_heat_pump")return{x0:-t/2+.05,x1:t*.15,y0:n*.15,y1:n*.9,z:e/2+.003};if(i.type==="pool_filter"){let r=Math.min(t,e)/2;return{x0:-r*.4,x1:r*.4,y0:n*.85,y1:n*.94,z:r*.45+.004}}if(i.type==="pool_dosing")return{x0:-t*.4,x1:t*.4,y0:.9+n*.05,y1:.9+n*.4,z:e/2+.003};if(i.type==="tv_board"){let r=Math.min(t*.8,1.45),o=r*.56;return{x0:-r/2+.02,x1:r/2-.02,y0:n+.12,y1:n+.08+o,z:-e/2+.165}}if(i.type==="tv_wall"){let r=1.3-n/2;return{x0:-t/2+.02,x1:t/2-.02,y0:r+.02,y1:r+n-.02,z:e/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-e/2+.115};if(i.type==="fridge_smart"){let r=s?mn(s,i):0;return{x0:.06,x1:t/2-.06,y0:r+n*.52+.01,y1:r+n*.86-.01,z:e/2+.006}}if(i.type==="radiator")return{x0:-t/2+.02,x1:t/2-.02,y0:Bu+.02,y1:Bu+n-.02,z:e/2+.004};if(i.type==="ac_unit")return{x0:-t/2+.05,x1:t/2-.05,y0:zu+.015,y1:zu+.06,z:e/2-.015};if(i.type==="washer"||i.type==="dryer"){let r=(n-.14)/2+.04,o=Math.min(t*.36,(n-.2)*.42)*.8;return{x0:-o,x1:o,y0:r-o,y1:r+o,z:e/2-.004}}return i.type==="dishwasher"?{x0:-t/2+.06,x1:t/2-.06,y0:n-.16,y1:n-.08,z:e/2-.004}:null}function r1(i,t,e,n,s){let r=Math.min(.14,Math.max(.06,Math.min(e,n)*.15)),o=new Q(1-s,1-s,1-s),a=new Q(1,1,1),l=.003,c=[t(-e/2,-n/2),t(e/2,-n/2),t(e/2,n/2),t(-e/2,n/2)],u=[t(-e/2-r,-n/2-r),t(e/2+r,-n/2-r),t(e/2+r,n/2+r),t(-e/2-r,n/2+r)],h=d=>[d[0],l,d[1]],f=i.p.length;i.tri(h(c[0]),h(c[1]),h(c[2]),o),i.tri(h(c[0]),h(c[2]),h(c[3]),o);for(let d=0;d<4;d++){let p=(d+1)%4;i.tri(h(c[d]),h(u[d]),h(u[p]),o,a,a),i.tri(h(c[d]),h(u[p]),h(c[p]),o,a,o)}_p(t)&&Vu(i,f)}function Pl(i,t,e,n,s=0){o1(i,t,e,n,s)}function Vu(i,t){let e=(n,s,r)=>{if(n)for(let o=0;o<r;o++){let a=s+r+o,l=s+2*r+o,c=n[a];n[a]=n[l],n[l]=c}};for(let n=t;n<i.p.length;n+=9){let s=n/9;e(i.p,n,3),e(i.c,n,3),e(i.f,s*3,1),e(i.uv,s*6,2),e(i.tile,s*6,2)}}function o1(i,t,e,n,s){let r=Ae(n.type)?0:s-Hr(n);if(Ae(n.type)||Math.abs(r)<.001)return vp(i,t,e,n,s);let o=i.p.length,a=t.p.length;vp(i,t,s<.05?e:new ee,n,0);for(let l=o+1;l<i.p.length;l+=3)i.p[l]+=r;for(let l=a+1;l<t.p.length;l+=3)t.p[l]+=r}function vp(i,t,e,n,s){let r=n.rotation*he,o=Math.cos(r),a=Math.sin(r),l=n.mirror?-1:1,c=(p,x)=>[n.x+l*p*o-x*a,n.z+l*p*a+x*o],u=new Js(i,t,c),h=Math.max(.05,n.w),f=Math.max(.05,n.d),d=Math.max(.005,n.h);switch(n.type){case"sofa":mp(u,h,f,d,Math.max(1,Math.round((h-.4)/.62)));break;case"armchair":mp(u,h,f,d,1);break;case"sofa_l":gp(u,h,f,d,!1);break;case"sofa_u":gp(u,h,f,d,!0);break;case"bed":hy(u,h,f,d);break;case"chair":fy(u,h,f,d);break;case"table":dy(u,h,f,d);break;case"desk":py(u,h,f,d);break;case"nightstand":Ui(u,h,f,d,1,d*.72,!0),u.seg(-h/2,d*.5,f/2-.02,h/2,d*.5,f/2-.02,Jt);break;case"wardrobe":Ui(u,h,f,d,Math.max(2,Math.round(h/.5)),d*.5);break;case"shelf":my(u,h,f,d);break;case"kitchen":gy(u,h,f,d);break;case"fridge":xy(u,h,f,d);break;case"fridge_smart":by(u,h,f,d);break;case"stove":_y(u,h,f,d);break;case"sink":yy(u,h,f,d);break;case"bathtub":My(u,h,f,d);break;case"shower":Sy(u,h,f,d);break;case"wc":wy(u,h,f,d);break;case"washbasin":Ty(u,h,f,d);break;case"tv_board":Ey(u,h,f,d);break;case"plant":Ay(u,h,f,d);break;case"rug":Ry(u,h,f);return;case"stairs":Cy(u,h,f,d);break;case"stairs_u":Py(u,h,f,d);break;case"stairwell":return;case"sideboard":Iy(u,h,f,d);break;case"dresser":Ly(u,h,f,d);break;case"tall_cabinet":Ui(u,h,f,d,1,d*.5);break;case"coat_rack":Fy(u,h,f,d);break;case"bench":xp(u,h,f,d,!1);break;case"corner_bench":xp(u,h,f,d,!0);break;case"bar_stool":Dy(u,h,f,d);break;case"office_chair":Ny(u,h,f,d);break;case"stool":Uy(u,h,f,d);break;case"kitchen_wall":Oy(u,h,f,d);return;case"kitchen_tall":By(u,h,f,d);break;case"island":zy(u,h,f,d);break;case"worktop":u.box(-h/2,h/2,Math.max(0,d-.04),d,-f/2,f/2,D.whiteTop,D.whiteTop,ft);return;case"dishwasher":ky(u,h,f,d);break;case"washer":bp(u,h,f,d,!1);break;case"dryer":bp(u,h,f,d,!0);break;case"bunk_bed":Vy(u,h,f,d);break;case"table_round":Gy(u,h,f,d);break;case"coffee_table":Hy(u,h,f,d);break;case"tv_wall":Wy(u,h,f,d);return;case"parking":{let x=[[-h/2,-f/2],[h/2,-f/2],[h/2,f/2],[-h/2,f/2]];for(let g=0;g<4;g++)u.seg(x[g][0],.012,x[g][1],x[(g+1)%4][0],.012,x[(g+1)%4][1],Jt);u.seg(-h*.15,.012,f/2-.45,0,.012,f/2-.2,ft),u.seg(0,.012,f/2-.2,h*.15,.012,f/2-.45,ft);return}case"robot_vacuum":u.box(-h*.45,h*.45,0,d,-f/2,-f/2+f*.3,D.white,D.whiteTop,ft),u.box(-h*.2,h*.2,d*.5,d*.62,-f/2+f*.3,-f/2+f*.31,D.accent);return;case"radiator":Xy(u,h,f,d);return;case"ac_unit":Yy(u,h,f,d);return;case"inverter":qy(u,h,f,d,n.variant??null);return;case"grid_point":Qy(u,h,f,d);break;case"wallbox":t1(u,h,f,d);return;case"pool_pump":$y(u,h,f,d);break;case"pool_filter":Zy(u,h,f,d,n.variant??null);break;case"pool_heat_pump":Jy(u,h,f,d);break;case"pool_dosing":Ky(u,h,f,d);break;case"pool_valve":jy(u,h,f,d);return;case"meter":e1(u,h,f,d);return;case"home_battery":if(n1(u,h,f,d,n.variant??null),n.variant==="wall")return;break;default:{let p=Ae(n.type);if(p){if(Gu(u,p,h,f,d,s,null),s>.05)return}else u.box(-h/2,h/2,0,d,-f/2,f/2,D.body,D.bodyTop,ft)}}r1(e,c,h,f,n.type==="plant"?.35:.5)}function Ou(i,t){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let e=D;return(t?e[`${i}Top`]:void 0)??e[i]??null}function Gu(i,t,e,n,s,r,o,a=null){let l=!!a;for(let c of t.parts){if(a&&!a(c))continue;let u=l?{...c,glow:!0,w:c.w+.006/e,d:c.d+.006/n,y:Math.max(0,c.y-.002/s),h:c.h+.004/s}:c,h=u.glow&&o!==null,f=h?o:Ou(u.color,!1)??D.body,d=h?o:Ou(u.top,!1)??Ou(u.color,!0)??Ot(f,1.25).getHex(),p=r+u.y*s,x=r+Math.min(s,(u.y+u.h)*s),g=u.edges==="glow"?ss:u.edges==="faint"?Jt:u.edges?ft:null,m=u.rot?i.rotated(u.x*e,u.z*n,u.rot):i;if(u.shape==="cyl"&&(u.axis==="x"||u.axis==="z"))m.lyingCyl(u.axis,u.x*e,u.z*n,p,x,u.axis==="x"?u.w*e:u.d*n,u.axis==="x"?u.d*n:u.w*e,f,d,14,g);else if(u.shape==="cyl")m.cyl(u.x*e,u.z*n,Math.min(u.w*e,u.d*n)/2,p,x,f,d,14,g);else if(u.shape==="loft"){let _=u.tx??u.x,M=u.tz??u.z,v=u.tw??u.w,y=u.td??u.d;m.loft([(u.x-u.w/2)*e,(u.x+u.w/2)*e,(u.z-u.d/2)*n,(u.z+u.d/2)*n],[(_-v/2)*e,(_+v/2)*e,(M-y/2)*n,(M+y/2)*n],p,x,f,d,g)}else m.box((u.x-u.w/2)*e,(u.x+u.w/2)*e,p,x,(u.z-u.d/2)*n,(u.z+u.d/2)*n,f,d,g)}}function Sp(i,t,e,n,s,r){let o=r*he,a=Math.cos(o),l=Math.sin(o),c=(p,x)=>[e+p*a-x*l,s+p*l+x*a],u=new Js(i,new Le,c),h=1713728,f=2373216,d=725279;if(t==="camera_ceiling"){u.cyl(0,0,.07,n-.03,n,h,f,12),u.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,d,h),u.cyl(0,0,.012,n-.075,n-.06,D.accent,D.accent,6);return}u.box(-.02,.02,n-.02,n+.02,-.06,-.03,h,f),u.box(-.01,.01,n-.01,n+.06,-.05,-.03,h,f),u.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,h,f),u.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,d,D.accent,10),u.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function no(i,t,e,n,s,r=o=>!!o.glow){let o=e.rotation*he,a=Math.cos(o),l=Math.sin(o),c=e.mirror?-1:1,u=(h,f)=>[e.x+c*h*a-f*l,e.z+c*h*l+f*a];Gu(new Js(i,new Le,u),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,s,r)}function Il(i,t,e,n,s){let r=e.rotation*he,o=Math.cos(r),a=Math.sin(r),l=e.mirror?-1:1,c=(u,h)=>[e.x+l*u*o-h*a,e.z+l*u*a+h*o];Gu(new Js(i,new Le,c),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,s)}var a1={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5},balcony:{color:1909304,side:1448492,edge:5995775,edgeAlpha:.5}};function l1(i,t,e){let n=[(t[0]+e[0])/2,(t[1]+e[1])/2],s=e[0]-t[0],r=e[1]-t[1],o=Math.hypot(s,r)||1;return i.rooms.some(a=>a.points.some((l,c)=>{let u=a.points[(c+1)%a.points.length],h=u[0]-l[0],f=u[1]-l[1],d=Math.hypot(h,f)||1;if(Math.abs((s*f-r*h)/(o*d))>.05)return!1;let p=Math.max(0,Math.min(1,((n[0]-l[0])*h+(n[1]-l[1])*f)/(d*d)));return Math.hypot(l[0]+h*p-n[0],l[1]+f*p-n[1])<.4}))}function Tp(i,t){return t.type==="pool"?Sl(i,t):Xr(i,t)+(Ci(t.type)?.01:yl[t.type])}function io(i){return Ln(i)>=0?i:[...i].reverse()}function c1(i,t){let e=i[t];if(Ci(e.type)||e.type==="pool")return[];let n=[];for(let s=0;s<i.length;s++){let r=i[s];s===t||!(r.cut&&s>t||r.type==="pool")||r.points.length<3||r.points.every(o=>Zt(o,e.points))&&n.push(io(r.points))}return n}function wp(i,t,e,n,s,r,o,a,l=0){let c=e[0]-t[0],u=e[1]-t[1],h=Math.hypot(c,u);if(h<1e-6)return;let f=-u/h*n*.5,d=c/h*n*.5;if(Math.abs(l)<1e-4){Re(i,io([[t[0]+f,t[1]+d],[e[0]+f,e[1]+d],[e[0]-f,e[1]-d],[t[0]-f,t[1]-d]]),s,r,o,a,{aoFrom:s-1});return}let p=(v,y)=>[t[0]+f*y,v,t[1]+d*y],x=(v,y)=>[e[0]+f*y,v+l,e[1]+d*y],g=(v,y)=>{i.tri(v[0],v[1],v[2],y,y,y,void 0,Gt),i.tri(v[0],v[2],v[3],y,y,y,void 0,Gt),i.tri(v[0],v[2],v[1],y,y,y,void 0,Gt),i.tri(v[0],v[3],v[2],y,y,y,void 0,Gt)},m=new Q(a),_=new Q(Ot(o,.9)),M=new Q(Ot(o,.6));g([p(r,1),x(r,1),x(r,-1),p(r,-1)],m),g([p(s,1),x(s,1),x(s,-1),p(s,-1)],M),g([p(s,1),x(s,1),x(r,1),p(r,1)],_),g([p(s,-1),x(s,-1),x(r,-1),p(r,-1)],_),g([p(s,1),p(s,-1),p(r,-1),p(r,1)],_),g([x(s,1),x(s,-1),x(r,-1),x(r,1)],_)}function Ep(i,t,e,n){let s=e.outdoor??[];s.forEach((r,o)=>{if(r.points.length<3)return;let a=Xr(e,r),l=(_,M)=>a-Yr(e,r,_,M),c=a-(r.type==="pool"?0:r.slope??0),u=Ci(r.type)&&r.height?r.height:yl[r.type],h={...a1[r.type],top:u},f=io(r.points),d=Ot(h.edge,h.edgeAlpha),p=r.open&&(r.type==="fence"||r.type==="pergola")?f.length-1:-1,x=_=>{if(r.outline!==!1)for(let M=0;M<f.length;M++){if(M===p)continue;let v=f[M],y=f[(M+1)%f.length];t.seg([v[0],_(v[0],v[1]),v[1]],[y[0],_(y[0],y[1]),y[1]],d,Gt)}},g=n??i,m=new Q(n?1734832:h.color);switch(r.type){case"pool":{let _=new Q(h.side),M=new Q(Ot(h.side,.55)),v=new Q(932440),y=Sl(e,r),w=Ml(e,r),T=Pd(e,r);for(let[b,S,E]of Ni(f)){let P=f[b],A=f[S],I=f[E];(n?g:i).tri([P[0],y,P[1]],[I[0],y,I[1]],[A[0],y,A[1]],m,m,m,void 0,Gt),i.tri([P[0],T,P[1]],[I[0],T,I[1]],[A[0],T,A[1]],v,v,v,void 0,Gt)}for(let b=0;b<f.length;b++){let S=f[b],E=f[(b+1)%f.length];i.tri([E[0],T,E[1]],[E[0],w,E[1]],[S[0],w,S[1]],M,_,_,void 0,Gt),i.tri([E[0],T,E[1]],[S[0],w,S[1]],[S[0],T,S[1]],M,_,M,void 0,Gt)}if(!r.above&&Eu(e,r)){let b=new Q(660258),S=new Q(396054),E=T-.2,P=Math.min(a,w);for(let A=0;A<f.length;A++){let I=f[A],R=f[(A+1)%f.length];i.tri([I[0],E,I[1]],[I[0],P,I[1]],[R[0],P,R[1]],S,b,b,void 0,Gt),i.tri([I[0],E,I[1]],[R[0],P,R[1]],[R[0],E,R[1]],S,b,S,void 0,Gt)}for(let[A,I,R]of Ni(f)){let L=f[A],N=f[I],U=f[R];i.tri([L[0],E,L[1]],[N[0],E,N[1]],[U[0],E,U[1]],S,S,S,void 0,Gt)}if(r.outline!==!1)for(let A=0;A<f.length;A++){let I=f[A],R=f[(A+1)%f.length];t.seg([I[0],E,I[1]],[R[0],E,R[1]],Ot(h.edge,h.edgeAlpha*.35),Gt),t.seg([I[0],E,I[1]],[I[0],P,I[1]],Ot(h.edge,h.edgeAlpha*.25),Gt)}}if(w>a+.02){let b=new Q(2044240),S=new Q(1187123);for(let E=0;E<f.length;E++){let P=f[E],A=f[(E+1)%f.length];i.tri([P[0],a,P[1]],[P[0],w,P[1]],[A[0],w,A[1]],S,b,b,void 0,Gt),i.tri([P[0],a,P[1]],[A[0],w,A[1]],[A[0],a,A[1]],S,b,S,void 0,Gt)}x(()=>a+.005)}if(x(()=>w),x(()=>y+.005),r.outline!==!1)for(let b=0;b<f.length;b++){let S=f[b],E=f[(b+1)%f.length];t.seg([S[0],T+.005,S[1]],[E[0],T+.005,E[1]],Ot(h.edge,h.edgeAlpha*.4),Gt)}break}case"fence":{for(let _=0;_<f.length;_++){if(_===p)continue;let M=f[_],v=f[(_+1)%f.length],y=Math.hypot(v[0]-M[0],v[1]-M[1]),w=Math.max(1,Math.round(y/2)),T=p>=0&&_===p-1?w:w-1;for(let b=0;b<=T;b++){let S=b/w,E=M[0]+(v[0]-M[0])*S,P=M[1]+(v[1]-M[1])*S,A=l(E,P);Re(i,io([[E-.04,P-.04],[E+.04,P-.04],[E+.04,P+.04],[E-.04,P+.04]]),A,A+h.top,h.side,h.color)}for(let b of[.35,.85])t.seg([M[0],l(M[0],M[1])+b*h.top,M[1]],[v[0],l(v[0],v[1])+b*h.top,v[1]],d,Gt)}break}case"pergola":{let _=h.top;for(let[M,v]of f){let y=l(M,v);Re(i,io([[M-.06,v-.06],[M+.06,v-.06],[M+.06,v+.06],[M-.06,v+.06]]),y,y+_,h.side,h.color)}for(let M=0;M<f.length;M++){if(M===p)continue;let v=f[M],y=f[(M+1)%f.length],w=l(v[0],v[1])+_;if(wp(i,v,y,.12,w-.16,w,h.side,h.color,l(y[0],y[1])-l(v[0],v[1])),r.bracing){let T=l(v[0],v[1]),b=l(y[0],y[1]);t.seg([v[0],T+.25,v[1]],[y[0],b+_-.25,y[1]],d,Gt),t.seg([y[0],b+.25,y[1]],[v[0],T+_-.25,v[1]],d,Gt)}}if(zd(f)){let M=kd(f),v=M.x1-M.x0,y=M.z1-M.z0,w=v>=y,T=w?v:y,b=Math.max(1,Math.round(T/.6));for(let S=1;S<b;S++){let E=(w?M.x0:M.z0)+T*S/b,P=w?[E,M.z0+.06]:[M.x0+.06,E],A=w?[E,M.z1-.06]:[M.x1-.06,E],I=l(P[0],P[1])+_;wp(i,P,A,.06,I-.04,I+.08,h.side,h.color,l(A[0],A[1])-l(P[0],P[1]))}}x((M,v)=>l(M,v)+_+.004);break}case"balcony":{Re(i,f,a-.18,a+h.top,h.side,h.color,{aoFrom:a-.18}),x(()=>a+h.top+.004);let M=r.height&&r.height>.3?r.height:1,v=Ot(9417983,.42),y=Ot(3662079,.55);for(let w=0;w<f.length;w++){let T=f[w],b=f[(w+1)%f.length];if(l1(e,T,b))continue;let S=Math.hypot(b[0]-T[0],b[1]-T[1]),E=a+h.top;t.seg([T[0],E+M,T[1]],[b[0],E+M,b[1]],y,Gt),t.seg([T[0],E+.1,T[1]],[b[0],E+.1,b[1]],v,Gt);let P=Math.max(1,Math.round(S/.12));for(let A=0;A<=P;A++){let I=A/P,R=T[0]+(b[0]-T[0])*I,L=T[1]+(b[1]-T[1])*I;t.seg([R,E,L],[R,E+M,L],A===0||A===P?y:v,Gt)}}break}default:{let _=(v,y)=>l(v,y)+h.top,M=c1(s,o);if(Re(i,f,c,r.slope?_:a+h.top,h.side,h.color,{aoFrom:c,holes:M}),x((v,y)=>_(v,y)+.004),r.type==="hedge"&&x((v,y)=>l(v,y)+.004),r.outline!==!1)for(let v of M)for(let y=0;y<v.length;y++){let w=v[y],T=v[(y+1)%v.length];t.seg([w[0],_(w[0],w[1])+.004,w[1]],[T[0],_(T[0],T[1])+.004,T[1]],d,Gt)}}}})}var Fl=Math.PI/180,u1=1.13,h1=1.72,Hu=.025,as=.07,Ap=.25;function Rp(i,t){let e=[];for(let n of i.floors){if(t&&n.id!==t)continue;let{walls:s}=ri(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let r of s){if(!r.exterior&&!r.free)continue;let o=r.b[0]-r.a[0],a=r.b[1]-r.a[1],l=Math.hypot(o,a);if(l<.5)continue;let c=a/l,u=-o/l,h=Math.min(n.height,r.height??n.height),f=r.sources.find(x=>x.room_id===r.roomLeft)?.edge??null,d={floorId:n.id,room:r.roomLeft,edge:f,free:!!r.free},p=(x,g,m,_)=>e.push({key:x,section:null,side:"top",flat:!1,o:g,eu:m,es:[0,1,0],n:_,lu:l,ls:h,pitch:90,span:()=>[0,l],facing:[_[0],_[2]],wall:d});p(`wall:${n.id}:${r.id}`,[r.a[0]+c*r.right,n.elevation,r.a[1]+u*r.right],[o/l,0,a/l],[c,0,u]),r.free&&p(`wall:${n.id}:${r.id}:back`,[r.b[0]-c*r.left,n.elevation,r.b[1]-u*r.left],[-o/l,0,-a/l],[-c,0,-u])}}return e}var Wu="ground";function Xu(i){let t=[...i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation);return t.find(e=>e.elevation>-.5)??t[0]??i.floors[0]??null}function Cp(i,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],s=[-Math.sin(e),0,Math.cos(e)],r=Xu(i),o=n[0]*t.u+s[0]*t.v,a=n[2]*t.u+s[2]*t.v,l=r?r.elevation+(t.base!=null?t.base:Cd(r,o,a)):t.base??0;return{key:Wu,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:s,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[s[0],s[2]],unbounded:!0}}function f1(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function cs(i){let t=i.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(_=>d1(_,El(i,_,_.overhang??t.overhang)));let e=f1(i);if(!e)return[];let n=e.rooms.flatMap(_=>_.points.map(M=>M[0])),s=e.rooms.flatMap(_=>_.points.map(M=>M[1])),r=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-r,a=Math.max(...n)+r,l=Math.min(...s)-r,c=Math.max(...s)+r,u=e.elevation+e.height;if(t.type==="flat")return[Pp("main",null,o,l,a,c,u+Ap)];let h=a-o>=c-l,f=t.ridge==="short"?!h:h,d=(f?c-l:a-o)/2,p=d*Math.tan(t.pitch*Fl),x=(_,M,v)=>f?[_,u+v,(l+c)/2+M]:[(o+a)/2+M,u+v,_],[g,m]=f?[o,a]:[l,c];return[-1,1].map(_=>Ll(`main:${_<0?"a":"b"}`,null,_<0?"a":"b",x(g,_*d,0),x(m,_*d,0),x(g,0,p),t.pitch,()=>[0,m-g]))}function d1(i,t){let e=qn(i),n=_n(i),s=(x,g,m)=>{let[_,M]=e.at(x,g);return[_,m,M]},r=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let x=e.at(a,-r),g=e.at(l,e.w+o);return[Pp(i.id,i.id,Math.min(x[0],g[0]),Math.min(x[1],g[1]),Math.max(x[0],g[0]),Math.max(x[1],g[1]),i.eave_a+Ap)]}if(i.shape==="pent")return[Ll(`${i.id}:a`,i.id,"a",s(a,-r,n.y(-r)),s(l,-r,n.y(-r)),s(a,e.w+o,n.y(e.w+o)),i.pitch_a,()=>[0,c])];let u=i.shape==="hip"||i.shape==="pyramid",h=i.shape==="pyramid"?(e.u1-e.u0)/2:u?Math.min((e.u1-e.u0)/2,Math.min(n.vr,e.w-n.vr)||e.w/2):0,f=u?e.u0+h-a:0,d=u?l-(e.u1-h):0,p=[];if(n.vr>.3){let x=Math.hypot(n.vr+r,n.rh-n.y(-r));p.push(Ll(`${i.id}:a`,i.id,"a",s(a,-r,n.y(-r)),s(l,-r,n.y(-r)),s(a,n.vr,n.rh),i.pitch_a,g=>[f*(g/x),c-d*(g/x)]))}if(e.w-n.vr>.3){let x=Math.hypot(e.w+o-n.vr,n.rh-n.y(e.w+o));p.push(Ll(`${i.id}:b`,i.id,"b",s(l,e.w+o,n.y(e.w+o)),s(a,e.w+o,n.y(e.w+o)),s(l,n.vr,n.rh),i.pitch_b,g=>[d*(g/x),c-f*(g/x)]))}if(u){let x=n.y(-r),g=n.y(e.w+o),m=[[`${i.id}:c`,"c",s(a,e.w+o,g),s(a,-r,x),s(e.u0+h,n.vr,n.rh)],[`${i.id}:d`,"d",s(l,-r,x),s(l,e.w+o,g),s(e.u1-h,n.vr,n.rh)]];for(let[_,M,v,y,w]of m){let T=p1(_,i.id,M,v,y,w);T&&p.push(T)}}return p}function p1(i,t,e,n,s,r){let o=so(ls(s,n));if(o<.3)return null;let a=Oi(ls(s,n)),l=ls(r,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],u=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],h=so(u);if(h<.3)return null;let f=Oi(u),d=Oi(Fp(a,f));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let p=Oi([-f[0],0,-f[2]]),x=Math.atan2(f[1],Math.hypot(f[0],f[2]))/Fl;return{key:i,section:t,side:e,flat:!1,o:n,eu:a,es:f,n:d,lu:o,ls:h,pitch:x,span:m=>{let _=Math.min(1,Math.max(0,m/h));return[c*_,o-(o-c)*_]},facing:[p[0],p[2]]}}function Ll(i,t,e,n,s,r,o,a){let l=Oi(ls(s,n)),c=Oi(ls(r,n)),u=Oi(Fp(l,c));u[1]<0&&(u=[-u[0],-u[1],-u[2]]);let h=Oi([-c[0],0,-c[2]]);return{key:i,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:u,lu:so(ls(s,n)),ls:so(ls(r,n)),pitch:o,span:a,facing:[h[0],h[2]]}}function Pp(i,t,e,n,s,r,o){let a=s-e>=r-n,l=a?s-e:r-n,c=a?r-n:s-e;return{key:`${i}:top`,section:t,side:"top",flat:!0,o:[e,o,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function Ip(i){let t=i.module_w||u1,e=i.module_h||h1;return i.portrait===!1?[e,t]:[t,e]}function m1(i){return i.layout?.length?i.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function Lp(i,t){return i.flat?Math.min(45,Math.max(0,t.tilt??15))*Fl:i.wall?Math.min(90,Math.max(0,t.tilt??0))*Fl:0}function g1(i,t){let[,e]=Ip(t),n=Lp(i,t);return i.wall?e*Math.cos(n)+Hu:i.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+Hu}function ro(i,t,e=!1){let[n,s]=Ip(t),r=[],o=Lp(i,t),a=s*Math.cos(o),l=g1(i,t),c=m1(t),u=Math.max(1,...c),h=new Set(t.skip??[]),f=!!i.wall&&n>i.lu+1e-6,d=(x,g,m)=>[i.o[0]+i.eu[0]*x+i.es[0]*g+i.n[0]*m,i.o[1]+i.eu[1]*x+i.es[1]*g+i.n[1]*m,i.o[2]+i.eu[2]*x+i.es[2]*g+i.n[2]*m],p=(x,g)=>{if(i.unbounded)return!0;if(g<-1e-6||g>i.ls+1e-6)return!1;let[m,_]=i.span(g);return x>=m-1e-6&&x<=_+1e-6};return c.forEach((x,g)=>{let m=t.align==="right"?u-x:t.align==="center"?(u-x)/2:0;for(let _=0;_<x;_++){let M=`${g}:${_}`,v=h.has(M);if(v&&!e)continue;let y=t.u+(_+m)*(n+Hu),w=t.v+g*l,T=y+n,b=w+(i.flat||i.wall?a:s);if(f){if(!(p((y+T)/2,w)&&p((y+T)/2,b)))continue}else if(![[y,w],[T,w],[T,b],[y,b]].every(([R,L])=>p(R,L)))continue;if(i.wall&&o>.001){let R=as+s*Math.sin(o),[L,N]=t.flip?[R,as]:[as,R],U=[d(y,w,L),d(T,w,L),d(T,b,N),d(y,b,N)],k=t.flip?w:b,B=[y+.05,T-.05].map(z=>[d(z,k,0),d(z,k,R)]);r.push({corners:U,posts:B,cell:M,skipped:v});continue}if(!i.flat){r.push({corners:[d(y,w,as),d(T,w,as),d(T,b,as),d(y,b,as)],posts:[],cell:M,skipped:v});continue}let S=.15,E=S+s*Math.sin(o),[P,A]=t.flip?[b,w]:[w,b],I=[d(y,P,S),d(T,P,S),d(T,A,E),d(y,A,E)];r.push({corners:I,posts:[y+.05,T-.05].flatMap(R=>[[d(R,P,0),d(R,P,S)],[d(R,A,0),d(R,A,E)]]),cell:M,skipped:v})}}),r}function ls(i,t){return[i[0]-t[0],i[1]-t[1],i[2]-t[2]]}function so(i){return Math.hypot(i[0],i[1],i[2])}function Oi(i){let t=so(i)||1;return[i[0]/t,i[1]/t,i[2]/t]}function Fp(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}var x1=.78,b1=1.18;function v1(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||x1,module_h:i.h||b1}}function Dl(i,t){let e=ro(i,v1(t))[0];if(!e)return null;let n=s=>[s[0]-i.n[0]*.05,s[1]-i.n[1]*.05,s[2]-i.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}function Nl(i,t,e){let n=t?Dl(t,e):null;if(!n)return null;let s=(n[0][0]+n[2][0])/2,r=(n[0][1]+n[2][1])/2,o=(n[0][2]+n[2][2])/2;for(let a of[...i.floors].sort((l,c)=>c.elevation-l.elevation)){if(a.elevation>r)continue;let l=a.rooms.find(c=>Zt([s,o],c.points));if(l)return{floor:a,roomId:l.id,corners:n}}return null}var oo=1712952,ao=2239816,Op=1318193,us=Ot(3662079,.9),js=Ot(5995775,.45),ze=.14,_1=9427199,y1=13226982,M1=14936565,S1={black:{glass:new Q(329483),edge:Ot(9082544,.32),cells:Ot(2766160,.22)},blue:{glass:new Q(1386842),edge:Ot(10467583,.55),cells:Ot(4025599,.35)}},w1=Ot(13226982,.5),T1=Ot(13226982,.85),E1=Ot(16757575,.95),Dp=new Q(2845583),Np=new Q(3818072),Up=new Q(4871791);function A1(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function Bp(i,t=new Map){let e=i.settings.roof,n=e?.type==="custom"?null:P1(i),s=e?.type==="custom"?I1(i,e.sections??[],e.overhang):n?[n]:[];return C1(i,s),R1(i,s,t),s}function R1(i,t,e){let n=i.settings.roof?.windows??[];if(!n.length||!t.length)return;let s=new Map(cs(i).map(r=>[r.key,r]));for(let r of n){let o=s.get(r.face),a=o?Dl(o,r):null;if(!o||!a)continue;let l=o.section?t.find(R=>R.sections?.includes(o.section)):t[0];if(!l)continue;let c=l.floor.elevation+l.base,u=R=>[R[0],R[1]-c,R[2]],[h,f,d,p]=a.map(u),x=e.get(r.id)??{open:0,tilt:0,cover:0},m=!!r.float&&Nl(i,o,r)?.floor.id===l.floor.id?l.win??={solid:new ee,lines:new Le}:l.winRoof??={solid:new ee,lines:new Le},_=(R,L)=>[R[0]+o.n[0]*L,R[1]+o.n[1]*L,R[2]+o.n[2]*L],M=(R,L,N)=>[R[0]+(L[0]-R[0])*N,R[1]+(L[1]-R[1])*N,R[2]+(L[2]-R[2])*N],v=x.open>.02||x.tilt>.02?E1:T1,y=[h,f,d,p].map(R=>_(R,.06)),w=[h,f,d,p].map(R=>_(R,-.02));for(let R=0;R<4;R++){m.lines.seg(y[R],y[(R+1)%4],v);let L=(R+1)%4;m.solid.tri(w[R],w[L],y[L],Up),m.solid.tri(w[R],y[L],y[R],Up)}let T=(x.open>.02?30*Math.min(1,x.open):x.tilt>.5?12:0)*he,b=Math.hypot(d[0]-f[0],d[1]-f[1],d[2]-f[2]),S=R=>{let L=o.es;return[R[0]-L[0]*b*Math.cos(T)+o.n[0]*b*Math.sin(T),R[1]-L[1]*b*Math.cos(T)+o.n[1]*b*Math.sin(T),R[2]-L[2]*b*Math.cos(T)+o.n[2]*b*Math.sin(T)]},E=_(p,.065),P=_(d,.065),A=S(E),I=S(P);m.solid.tri(A,I,P,Dp),m.solid.tri(A,P,E,Dp);for(let[R,L]of[[A,I],[I,P],[P,E],[E,A]])m.lines.seg(R,L,v);if(x.cover>.02){let R=Math.min(1,x.cover),L=_(M(E,A,R),.01),N=_(M(P,I,R),.01),U=_(E,.01),k=_(P,.01);m.solid.tri(L,N,k,Np),m.solid.tri(L,k,U,Np)}}}function C1(i,t){let e=i.settings.roof?.solar??[];if(!e.length||!t.length)return;let n=new Map(cs(i).map(s=>[s.key,s]));for(let s of e){let r=n.get(s.face);if(!r)continue;let o=r.section?t.find(a=>a.sections?.includes(r.section)):t[0];o&&Yu(o.solid,o.lines,r,s,o.floor.elevation+o.base)}}function Yu(i,t,e,n,s){let r=c=>[c[0],c[1]-s,c[2]],o=S1[n.look==="blue"?"blue":"black"],a=n.portrait===!1?10:6,l=n.portrait===!1?6:10;for(let c of ro(e,n)){let[u,h,f,d]=c.corners.map(r);i.tri(u,h,f,o.glass),i.tri(u,f,d,o.glass),i.tri(u,f,h,o.glass),i.tri(u,d,f,o.glass);let p=(m,_=.004)=>[m[0]+e.n[0]*_,m[1]+e.n[1]*_,m[2]+e.n[2]*_],x=(m,_,M)=>[m[0]+(_[0]-m[0])*M,m[1]+(_[1]-m[1])*M,m[2]+(_[2]-m[2])*M],g=[u,h,f,d].map(m=>p(m));for(let m=0;m<4;m++)t.seg(g[m],g[(m+1)%4],o.edge);for(let m=1;m<a;m++)t.seg(p(x(u,h,m/a)),p(x(d,f,m/a)),o.cells);for(let m=1;m<l;m++)t.seg(p(x(u,d,m/l)),p(x(h,f,m/l)),o.cells);for(let[m,_]of c.posts)t.seg(r(m),r(_),w1)}}function P1(i){let t=i.settings.roof,e=A1(i);if(!e||!t||t.type==="none"||t.type==="custom")return null;let n=e.rooms.flatMap(E=>E.points.map(P=>P[0])),s=e.rooms.flatMap(E=>E.points.map(P=>P[1])),r=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-r,a=Math.max(...n)+r,l=Math.min(...s)-r,c=Math.max(...s)+r,u=new ee,h=new Le;if(t.type==="flat"){Re(u,[[o,l],[a,l],[a,c],[o,c]],0,.25,oo,ao,{bottom:!0});let E=.252;for(let[P,A]of[[[o,l],[a,l]],[[a,l],[a,c]],[[a,c],[o,c]],[[o,c],[o,l]]])h.seg([P[0],E,P[1]],[A[0],E,A[1]],us),h.seg([P[0],0,P[1]],[A[0],0,A[1]],js);return{floor:e,base:e.height,solid:u,lines:h,glass:new ee}}let f=a-o>=c-l,d=t.ridge==="short"?!f:f,p=(d?c-l:a-o)/2,x=p*Math.tan(t.pitch*he),g=(E,P,A)=>d?[E,A,(l+c)/2+P]:[(o+a)/2+P,A,E],[m,_]=d?[o,a]:[l,c],M=new Q(ao),v=new Q(oo),y=(E,P,A,I,R)=>{u.tri(E,P,A,R),u.tri(E,A,I,R)};for(let E of[-1,1]){y(g(m,E*p,0),g(_,E*p,0),g(_,0,x),g(m,0,x),M),y(g(m,E*p,-ze),g(m,0,x-ze),g(_,0,x-ze),g(_,E*p,-ze),v),y(g(m,E*p,-ze),g(_,E*p,-ze),g(_,E*p,0),g(m,E*p,0),v);for(let P of[m,_])y(g(P,E*p,-ze),g(P,E*p,0),g(P,0,x),g(P,0,x-ze),v);h.seg(g(m,E*p,0),g(_,E*p,0),js);for(let P of[m,_])h.seg(g(P,E*p,0),g(P,0,x),js)}let w=t.overhang,T=new Q(Op),b=p-w,S=b*Math.tan(t.pitch*he);for(let E of[m+w,_-w])u.tri(g(E,-b,-ze),g(E,b,-ze),g(E,0,S-ze),T),u.tri(g(E,b,-ze),g(E,-b,-ze),g(E,0,S-ze),T);return h.seg(g(m,0,x+.004),g(_,0,x+.004),us),{floor:e,base:e.height,solid:u,lines:h,glass:new ee}}function I1(i,t,e){let n=i.floors.filter(o=>o.rooms.length>0).sort((o,a)=>o.elevation-a.elevation);if(!n.length)return[];let s=new Map,r=new Map(cs(i).map(o=>[o.key,o]));for(let o of t){if(Math.abs(o.x1-o.x0)<.1||Math.abs(o.z1-o.z0)<.1)continue;let a=jd(i,o)??n[0],l=o.open?`${a.id}:open`:a.id,c=s.get(l);c||s.set(l,c={floor:a,base:0,solid:new ee,lines:new Le,glass:new ee,sections:[],lift:!o.open}),c.sections.push(o.id);let u=Tl(t,o),h=a.elevation+a.height>o.base+.05&&!o.dormer&&!u,f=t.filter(x=>x!==o&&Tl(t,x)===o).flatMap(x=>Jd(o,x));for(let x of i.settings.roof.windows??[]){let g=r.get(x.face),m=g&&g.section===o.id?Dl(g,x):null;if(!m)continue;let _=m.map(M=>Fi(o,M[0],M[2]));f.push({u0:Math.min(..._.map(M=>M[0])),u1:Math.max(..._.map(M=>M[0])),v0:Math.min(..._.map(M=>M[1])),v1:Math.max(..._.map(M=>M[1]))})}let d=u?Ru(u,o):o,p=null;if(u){let x=qn(d),g=$s(u,{u0:0,u1:0,a:0,b:0}),m=_=>{let[M,v]=x.at(_,x.w/2),[y,w]=Fi(u,M,v);return Qr(g,y,w)??_n(u).y(w)};p=m(x.u0)<=m(x.u1)?0:1}L1(c.solid,c.lines,d,El(i,d,d.overhang??e),a.elevation,c.glass,h,f,p)}return[...s.values()].sort((o,a)=>+(o.lift===!1)-+(a.lift===!1))}function L1(i,t,e,n,s,r=i,o=!1,a=[],l=null){let c=qn(e),u=_n(e),h=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,f=Math.max(0,h.a),d=Math.max(0,h.b),p=c.w,x=c.u0-Math.max(0,h.u0),g=c.u1+Math.max(0,h.u1),m=(I,R,L)=>{let[N,U]=c.at(I,R);return[N,L-s,U]},_=new Q(ao),M=new Q(oo),v=new Q(Op),y=(I,R)=>{for(let L=1;L+1<I.length;L++)i.tri(I[0],I[L],I[L+1],R)},w=[],T=[],b=[],S=null;if(e.shape==="flat"||e.shape==="parapet"){let I=e.eave_a,R=e.shape==="parapet",L=e.points&&e.points.length>=3?qd(e,R?0:Math.max(0,Math.min(h.a,h.b,h.u0,h.u1))):R?[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,p),c.at(c.u0,p)]:[c.at(x,-f),c.at(g,-f),c.at(g,p+d),c.at(x,p+d)];Re(i,L,I-s,I-s+.25,oo,ao,{bottom:!0});for(let N=0;N<L.length;N++){let U=L[N],k=L[(N+1)%L.length];t.seg([U[0],I-s+.252,U[1]],[k[0],I-s+.252,k[1]],us),t.seg([U[0],I-s,U[1]],[k[0],I-s,k[1]],js)}if(R){let N=z=>Xn(z)>=0?z:[...z].reverse(),U=N(L),k=wl(U,-.2),B=U.length;for(let z=0;z<B;z++){let V=N([U[z],U[(z+1)%B],k[(z+1)%B],k[z]]);Re(i,V,I-s+.25,I-s+.65,oo,ao),t.seg([U[z][0],I-s+.652,U[z][1]],[U[(z+1)%B][0],I-s+.652,U[(z+1)%B][1]],us),t.seg([k[z][0],I-s+.652,k[z][1]],[k[(z+1)%B][0],I-s+.652,k[(z+1)%B][1]],us)}}}else{let I=$s(e,h);w=I.faces;for(let R of a)w=w.flatMap(L=>Kd(L,R));T=I.rim,b=I.ridges,S=I.gable}let E=!!e.open,P=new Q(_1);for(let I of w){if(E){for(let R=1;R+1<I.length;R++)r.tri(m(I[0][0],I[0][1],I[0][2]),m(I[R][0],I[R][1],I[R][2]),m(I[R+1][0],I[R+1][1],I[R+1][2]),P);continue}y(I.map(([R,L,N])=>m(R,L,N)),_),y(I.map(([R,L,N])=>m(R,L,N-ze)),M)}for(let I=0;I<T.length;I++){let[R,L,N]=T[I],[U,k,B]=T[(I+1)%T.length];E||y([m(R,L,N),m(U,k,B),m(U,k,B-ze),m(R,L,N-ze)],M),t.seg(m(R,L,N),m(U,k,B),E?us:js)}if(E){F1(i,t,c,u,h,m,s);return}for(let[[I,R,L],[N,U,k]]of b)t.seg(m(I,R,L+.004),m(N,U,k+.004),us);let A=e.base;if(!o){if(S){let I=D1(S,A-ze),R=l===null?[c.u0,c.u1]:[l===0?c.u0:c.u1];if(I.length>=3)for(let L of R)y(I.map(([N,U])=>m(L,N,U)),v)}if(e.shape!=="flat"&&e.shape!=="parapet")for(let I of[0,p]){let R=u.y(I)-ze;R>A+.02&&y([m(c.u0,I,A),m(c.u1,I,A),m(c.u1,I,R),m(c.u0,I,R)],v)}else if(e.eave_a>A+.02)for(let[I,R,L,N]of[[c.u0,0,c.u1,0],[c.u1,0,c.u1,p],[c.u1,p,c.u0,p],[c.u0,p,c.u0,0]])y([m(I,R,A),m(L,N,A),m(L,N,e.eave_a),m(I,R,e.eave_a)],v)}}function F1(i,t,e,n,s,r,o){let a=e.w,l=.12,c=.16,u=s.a>0,h=s.b>0,f=s.u0>0,d=s.u1>0,p=(m,_,M,v,y,w)=>{let T=[e.at(m,M),e.at(_,M),e.at(_,v),e.at(m,v)],b=(T[1][0]-T[0][0])*(T[2][1]-T[0][1])-(T[2][0]-T[0][0])*(T[1][1]-T[0][1]);Re(i,b<0?[...T].reverse():T,y-o,w-o,y1,M1,{bottom:!0})},x=o;for(let[m,_]of[[0,u],[a,h]]){if(!_)continue;let M=n.y(m)-.03,v=m===0?0:a-l;p(e.u0,e.u1,v,v+l,M-c,M),t.seg(r(e.u0,m,M-c),r(e.u1,m,M-c),js)}for(let[m,_]of[[e.u0,f],[e.u1-l,d]])if(_)for(let M=0;M<6;M++){let v=a*M/6,y=a*(M+1)/6,w=Math.min(n.y(v),n.y(y))-.03;p(m,m+l,v,y,w-c,w)}let g=[];for(let[m,_]of[[0,u],[a-l,h]]){if(!_)continue;let M=e.u1-e.u0-l,v=Math.max(1,Math.ceil(M/3.5));for(let y=0;y<=v;y++){let w=e.u0+M*y/v;y===0&&!f||y===v&&!d||g.push([w,m])}}if(!u&&!h)for(let m of[e.u0,e.u1-l])(m===e.u0&&f||m!==e.u0&&d)&&g.push([m,a/2-l/2]);for(let[m,_]of g){let M=n.y(_+l/2)-.03-c;p(m,m+l,_,_+l,x,M)}}function D1(i,t){let e=[];for(let r=0;r<i.length;r++){let[o,a]=i[r];a>=t&&e.push([o,a]);let l=i[r+1];if(l&&(a-t)*(l[1]-t)<0){let c=(t-a)/(l[1]-a);e.push([o+(l[0]-o)*c,t])}}if(e.length<2)return[];let n=e[0],s=e[e.length-1];return s[1]>t&&e.push([s[0],t]),n[1]>t&&e.unshift([n[0],t]),e}var lo={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},zp={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},Bi=.2,N1=.01,co=8,Ul=.42,qu=.42;function Hp(i,t,e,n=[],s=[],r){let{walls:o,open:a}=ri(i.rooms,{exterior:t,interior:e},i.walls??[]),l=(A,I,R)=>{let L=r?r(A,I):null;return L===null?R:Math.max(.05,Math.min(R,L))},c=(A,I,R,L,N)=>{if(!r)return N;let U=N,k=Math.max(2,Math.ceil((L-R)/.25)+1);for(let B=0;B<k;B++){let z=R+(L-R)*B/(k-1);U=Math.min(U,l(A[0]+I[0]*z,A[1]+I[1]*z,N))}return U},u=new ee(!0,!0),h=[],f=new Le,d=[];for(let A of i.rooms){if(A.points.length<3)continue;let I=$u(A.points),R=zp[A.floor_material]??zp.wood,L=new Q(R.color),N=n.flatMap(V=>{if(pp(V,I))return[Nu(V,.003)];if(!fp(V))return[];let st=Cl(I,V);return st.length>=3&&Math.abs(Xn(st))>.01?[Nu($u(st),.003)]:[]});d.push(...N);let U=[...I,...N.flat()],k=u.count;for(let[V,st,$]of Ni(I,N)){let ot=U[V],ct=U[st],pt=U[$];u.tri([ot[0],0,ot[1]],[pt[0],0,pt[1]],[ct[0],0,ct[1]],L,L,L,[ot[0],ot[1],pt[0],pt[1],ct[0],ct[1]],Gt,R.tile)}h.push({roomId:A.id,start:k,end:u.count,color:R.color});let B=new Q(lo.slab),z=V=>{for(let st=0;st<V.length;st++){let $=V[st],ot=V[(st+1)%V.length];u.tri([$[0],-Bi,$[1]],[$[0],0,$[1]],[ot[0],0,ot[1]],B),u.tri([$[0],-Bi,$[1]],[ot[0],0,ot[1]],[ot[0],-Bi,ot[1]],B)}};z(I);for(let V of N){z([...$u(V)].reverse());for(let st=0;st<V.length;st++){let $=V[st],ot=V[(st+1)%V.length];f.seg([$[0],.006,$[1]],[ot[0],.006,ot[1]],ss),f.seg([$[0],-Bi,$[1]],[ot[0],-Bi,ot[1]],Di)}}}let p=new Map,x=[],g=new Map;for(let A of o){let I="interior",R=null;if(A.exterior){let N=A.b[0]-A.a[0],U=A.b[1]-A.a[1],k=Math.hypot(N,U)||1,B=[U/k,-N/k],z=(Math.round(Math.atan2(B[1],B[0])/(2*Math.PI)*co)%co+co)%co;I=`s${z}`;let V=z/co*2*Math.PI;R=[Math.cos(V),Math.sin(V)]}let L=p.get(I);L===void 0&&(L=x.length,p.set(I,L),x.push(R)),g.set(A,L)}let m=new Map,_=[];for(let A of i.openings){let I=Zr(A,i.rooms,i.walls??[]);if(!I)continue;let R=Jr(o,A,I);if(!R)continue;let{wall:L,s:N}=R,U=zl([L.b[0]-L.a[0],L.b[1]-L.a[1]]),k=Math.hypot(L.b[0]-L.a[0],L.b[1]-L.a[1]),B=Math.min(A.width,k),z=Math.max(0,Math.min(k-B,N-B/2)),V=I.room.points,st=L.free?U[0]*(V[1][0]-V[0][0])+U[1]*(V[1][1]-V[0][1])>0:L.roomLeft===A.room_id,$=[-U[1],U[0]],ot=st?$:[-$[0],-$[1]],ct=Math.min(c(L.a,U,z,z+B,Ol(L,i.height))-.02,A.sill+A.height),pt=Math.max(0,Math.min(A.sill,ct-.1)),q=[ot[1],-ot[0]],X=U[0]*q[0]+U[1]*q[1]>0,it={opening:A,bucket:g.get(L),start:[L.a[0]+U[0]*z,L.a[1]+U[1]*z],axis:U,width:B,toRoom:ot,faceRoom:st?L.left:L.right,faceOut:st?L.right:L.left,sill:pt,top:ct,hingeAtStart:A.hinge==="left"===X,exterior:L.exterior};_.push(it);let ut=m.get(L);ut||m.set(L,ut=[]),ut.push({s0:z,s1:z+B,sill:pt,top:ct,info:it})}let M=Math.min(i.cut_height,i.height),v=new ee;for(let A of o){let I=g.get(A),R=zl([A.b[0]-A.a[0],A.b[1]-A.a[1]]),L=(m.get(A)??[]).sort(($,ot)=>$.s0-ot.s0),N=Ol(A,i.height),U=[],k=[-1/0,...new Set(L.flatMap($=>[$.s0,$.s1])).values(),1/0].sort(($,ot)=>$-ot);for(let $=0;$+1<k.length;$++){let ot=k[$],ct=k[$+1];if(ct-ot<1e-6)continue;let pt=Number.isFinite(ot)&&Number.isFinite(ct)?(ot+ct)/2:Number.isFinite(ot)?ot+1:ct-1,q=L.filter(ut=>ut.s0<pt&&ut.s1>pt).map(ut=>[ut.sill,ut.top]).sort((ut,ht)=>ut[0]-ht[0]),X=[],it=-Bi;for(let[ut,ht]of q)ut>it+1e-4&&X.push([it,ut<1e-4?-N1:ut]),it=Math.max(it,ht);N>it+1e-4&&X.push([it,N]),U.push({t0:ot,t1:ct,ranges:X})}let B=Math.hypot(A.b[0]-A.a[0],A.b[1]-A.a[1]),z=r&&c(A.a,R,0,B,N)<N-.001,V=z?U.flatMap($=>{let ot=Math.max($.t0,-.5),ct=Math.min($.t1,B+.5),pt=Math.max(1,Math.ceil((ct-ot)/.3));return Array.from({length:pt},(q,X)=>({t0:X===0?$.t0:ot+(ct-ot)*X/pt,t1:X===pt-1?$.t1:ot+(ct-ot)*(X+1)/pt,ranges:$.ranges,inner0:X>0,inner1:X<pt-1}))}):U.map($=>({...$,inner0:!1,inner1:!1})),st=$=>($[0]-A.a[0])*R[0]+($[1]-A.a[1])*R[1];for(let $ of V){let ot=O1(A.footprint,A.a,R,$.t0,$.t1);if(ot.length<3)continue;let ct=(X,it)=>Math.abs(st(X)-it)<1e-4,pt=(X,it)=>$.inner0&&ct(X,$.t0)&&ct(it,$.t0)||$.inner1&&ct(X,$.t1)&&ct(it,$.t1),q=z?Math.min(...ot.map(([X,it])=>l(X,it,N))):N;for(let[X,it]of $.ranges){let ut=Math.min(it,z?Math.max(...ot.map(([kt,Ht])=>l(kt,Ht,N))):it);if(ut-X<1e-4||q-X<.01)continue;let ht=X>.01,Pt=z&&it>q,te=(kt,Ht)=>Math.min(it,l(kt,Ht,N));if(X<M-1e-6){let kt=ut>M+1e-6?ep+I:rs+I,Ht=Pt&&q<M?(re,Wt)=>Math.min(M,te(re,Wt)):Math.min(ut,M);Re(v,ot,X,Ht,lo.wall,lo.wallTop,{aoFrom:0,bottom:ht,fold:rs+I,topFold:kt,skipSide:pt})}ut>M+1e-6&&q>M+1e-6&&Re(v,ot,Math.max(X,M),Pt?te:ut,lo.wall,lo.wallTop,{aoFrom:0,fold:I,bottom:ht&&X>=M,skipSide:pt})}}}let y=o.flatMap(A=>A.footprint),w=z1(o,y),T=new Le;T.p.push(...f.p),T.c.push(...f.c),T.f.push(...f.f);let b=(A,I)=>(m.get(A)??[]).filter(I);for(let A of w.edges){let I=g.get(A.wall);for(let[L,N]of Bl(A,b(A.wall,U=>U.sill<=.005)))T.seg([L[0],.004,L[1]],[N[0],.004,N[1]],tp);for(let[L,N]of Bl(A,b(A.wall,U=>U.sill<M&&U.top>M)))T.seg([L[0],M,L[1]],[N[0],M,N[1]],Cu,Rl+I);let R=Ol(A.wall,i.height);for(let[L,N]of Bl(A,b(A.wall,U=>U.top>=R-.021))){if(!r){T.seg([L[0],R,L[1]],[N[0],R,N[1]],ss,R<=M+1e-6?rs+I:I);continue}let U=Math.max(1,Math.ceil(Math.hypot(N[0]-L[0],N[1]-L[1])/.3));for(let k=0;k<U;k++){let B=[L[0]+(N[0]-L[0])*k/U,L[1]+(N[1]-L[1])*k/U],z=[L[0]+(N[0]-L[0])*(k+1)/U,L[1]+(N[1]-L[1])*(k+1)/U],V=l(B[0],B[1],R),st=l(z[0],z[1],R);T.seg([B[0],V,B[1]],[z[0],st,z[1]],ss,Math.max(V,st)<=M+1e-6?rs+I:I)}}}for(let A of w.corners){let I=l(A.p[0],A.p[1],Ol(A.wall,i.height));T.segSplit([A.p[0],.004,A.p[1]],[A.p[0],I,A.p[1]],Di,Math.min(M,I),g.get(A.wall))}for(let A of m.values())for(let I of A)U1(T,I,M);let S=k1(w.edges,i.rooms,m),E=new ee;Ep(v,T,i,E);for(let A of s)Yu(v,T,A.face,A.field,i.elevation);let P=[];for(let A of i.furniture){if(Ud(A.type))continue;let I=v.count,R=T.p.length/6,L=mn(i,A);Pl(v,T,S,A,L),L+A.h>M+.05&&(np(v,I,M,Pu),ip(T,R,M,Pu)),P.push({id:A.id,start:I,end:v.count})}return{floor:u.geometry(),roomTris:h,holes:d,walls:v.geometry(),water:E.geometry(),lines:T.geometry(),shadow:S.geometry(),buckets:x,openings:_,walls2d:o,openRooms:a,wallBuckets:o.map(A=>g.get(A)),furnitureTris:P,roofUnder:r}}function U1(i,t,e){let{info:n}=t,s=n.bucket,r=(l,c,u)=>[n.start[0]+n.axis[0]*(l-t.s0)+n.toRoom[0]*c,u,n.start[1]+n.axis[1]*(l-t.s0)+n.toRoom[1]*c],o=l=>l>e+1e-6?s:Gt,a=Math.max(t.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[t.s0,t.s1])i.segSplit(r(c,l,a),r(c,l,t.top),Di,e,s);i.seg(r(t.s0,l,t.top),r(t.s1,l,t.top),Di,o(t.top)),t.sill>.01&&i.seg(r(t.s0,l,t.sill),r(t.s1,l,t.sill),Di,o(t.sill))}for(let l of[t.s0,t.s1])i.seg(r(l,n.faceRoom,t.top),r(l,-n.faceOut,t.top),Di,o(t.top)),t.sill>.01&&i.seg(r(l,n.faceRoom,t.sill),r(l,-n.faceOut,t.sill),Di,o(t.sill)),t.sill<e&&t.top>e&&i.seg(r(l,n.faceRoom,e),r(l,-n.faceOut,e),Cu,Rl+s)}function O1(i,t,e,n,s){let r=a=>(a[0]-t[0])*e[0]+(a[1]-t[1])*e[1],o=i;return Number.isFinite(n)&&(o=kp(o,a=>r(a)-n)),Number.isFinite(s)&&(o=kp(o,a=>s-r(a))),o}function kp(i,t){let e=[];for(let n=0;n<i.length;n++){let s=i[n],r=i[(n+1)%i.length],o=t(s),a=t(r);if(o>=0&&e.push(s),o>=0!=a>=0){let l=o/(o-a);e.push([s[0]+(r[0]-s[0])*l,s[1]+(r[1]-s[1])*l])}}return e}var Vp=i=>Math.round(i*1e3),uo=i=>`${Vp(i[0])},${Vp(i[1])}`,Gp=(i,t)=>{let e=uo(i),n=uo(t);return e<n?`${e}|${n}`:`${n}|${e}`};function B1(i,t){let e=[];for(let n=0;n<i.length;n++){let s=i[n],r=i[(n+1)%i.length],o=r[0]-s[0],a=r[1]-s[1],l=o*o+a*a;if(l<1e-8)continue;let c=[];for(let h of t){let f=((h[0]-s[0])*o+(h[1]-s[1])*a)/l;if(f<=1e-6||f>=1-1e-6)continue;Math.abs((h[0]-s[0])*a-(h[1]-s[1])*o)/Math.sqrt(l)<1e-4&&c.push(f)}c.sort((h,f)=>h-f);let u=s;for(let h of c){let f=[s[0]+o*h,s[1]+a*h];uo(f)!==uo(u)&&e.push([u,f]),u=f}e.push([u,r])}return e}function z1(i,t){let e=i.map(l=>({wall:l,edges:B1(l.footprint,t)})),n=new Map;for(let{edges:l}of e)for(let[c,u]of l){let h=Gp(c,u);n.set(h,(n.get(h)??0)+1)}let s=[],r=new Map,o=(l,c,u)=>{let h=uo(l),f=r.get(h);f||r.set(h,f={p:l,wall:c,d:[]}),f.d.push(u)};for(let{wall:l,edges:c}of e)for(let[u,h]of c){if(n.get(Gp(u,h))!==1)continue;let f=Math.hypot(h[0]-u[0],h[1]-u[1]);if(f<1e-4)continue;s.push({a:u,b:h,wall:l});let d=[(h[0]-u[0])/f,(h[1]-u[1])/f];o(u,l,d),o(h,l,d)}let a=[];for(let{p:l,wall:c,d:u}of r.values())u.some(h=>u.some(f=>Math.abs(h[0]*f[1]-h[1]*f[0])>.05))&&a.push({p:l,wall:c});return{edges:s,corners:a}}function Bl(i,t){if(!t.length)return[[i.a,i.b]];let e=zl([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=zl([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(e[0]*n[0]+e[1]*n[1])<.99)return[[i.a,i.b]];let s=h=>(h[0]-i.wall.a[0])*e[0]+(h[1]-i.wall.a[1])*e[1],r=s(i.a),o=s(i.b),a=Math.min(r,o),l=Math.max(r,o),c=[[a,l]];for(let h of t)c=c.flatMap(([f,d])=>{if(h.s1<=f||h.s0>=d)return[[f,d]];let p=[];return h.s0>f&&p.push([f,h.s0]),h.s1<d&&p.push([h.s1,d]),p});let u=h=>{let f=(h-r)/(o-r||1);return[i.a[0]+(i.b[0]-i.a[0])*f,i.a[1]+(i.b[1]-i.a[1])*f]};return c.filter(([h,f])=>f-h>1e-4).map(([h,f])=>r<=o?[u(h),u(f)]:[u(f),u(h)])}function k1(i,t,e){let n=new ee,s=new Q(qu,qu,qu),r=new Q(1,1,1),o=.002;for(let a of i)for(let[l,c]of Bl(a,(e.get(a.wall)??[]).filter(u=>u.sill<=.005))){let u=c[0]-l[0],h=c[1]-l[1],f=Math.hypot(u,h);if(f<.05)continue;let d=[h/f,-u/f],p=[(l[0]+c[0])/2+d[0]*.05,(l[1]+c[1])/2+d[1]*.05];if(!t.some(m=>m.points.length>=3&&Zt(p,m.points)))continue;let x=[l[0]+d[0]*Ul,l[1]+d[1]*Ul],g=[c[0]+d[0]*Ul,c[1]+d[1]*Ul];n.tri([l[0],o,l[1]],[x[0],o,x[1]],[g[0],o,g[1]],s,r,r),n.tri([l[0],o,l[1]],[g[0],o,g[1]],[c[0],o,c[1]],s,r,s)}return n}function Wp(i,t){let e=t.furniture.filter(r=>r.type==="stairwell").map(Ii),n=i.filter(r=>r.elevation<t.elevation).sort((r,o)=>o.elevation-r.elevation)[0];if(!n)return Du(e);let s=n.furniture.filter(r=>(Dd.has(r.type)||Ae(r.type)?.hole)&&n.elevation+r.h>=t.elevation-.3).map(Ii);return Du([...e,...s])}function Ol(i,t){return Math.min(t,i.height??t)}function zl(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function $u(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];t+=n[0]*s[1]-s[0]*n[1]}return t>=0?i:[...i].reverse()}var V1=500,Xp=.12,Yp=1.35,G1=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,kl=class{view={target:new G,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;leftDragTurns=!0;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(t,e,n){this.el=t,this.camera=e,this.events=n;let s=(r,o,a)=>{t.addEventListener(r,o,a),this.listeners.push([r,o])};s("pointerdown",r=>this.onDown(r)),s("pointermove",r=>this.onMove(r)),s("pointerup",r=>this.onUp(r)),s("pointercancel",r=>this.onUp(r)),s("wheel",r=>this.onWheel(r),{passive:!1}),s("contextmenu",r=>r.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[t,e]of this.listeners)this.el.removeEventListener(t,e)}get active(){return this.pointers.size>0||this.flight!==null}update(t){let e=!1;if(this.flight){let{from:a,to:l,start:c,duration:u}=this.flight,h=Math.min(1,(t-c)/u),f=G1(h);this.view.target.lerpVectors(a.target,l.target,f),this.view.radius=a.radius+(l.radius-a.radius)*f,this.view.theta=a.theta+(l.theta-a.theta)*f,this.view.phi=a.phi+(l.phi-a.phi)*f,h>=1&&(this.flight=null),e=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=Zu(this.view.phi+this.velocity.phi,Xp,Yp),this.velocity.theta*=.9,this.velocity.phi*=.9,e=!0);let{target:n,radius:s,theta:r,phi:o}=this.view;return this.camera.position.set(n.x+s*Math.sin(o)*Math.sin(r),n.y+s*Math.cos(o),n.z+s*Math.sin(o)*Math.cos(r)),this.camera.lookAt(n),e}flyTo(t,e=700){let n={...this.view,target:this.view.target.clone()},s=t.theta??n.theta;for(;s-n.theta>Math.PI;)s-=2*Math.PI;for(;s-n.theta<-Math.PI;)s+=2*Math.PI;let r={target:(t.target??n.target).clone(),radius:t.radius??n.radius,theta:s,phi:t.phi??n.phi};this.velocity={theta:0,phi:0},e<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=r,this.flight=null):this.flight={from:n,to:r,start:performance.now(),duration:e},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(t){let e=this.el.getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}onDown(t){if(this.el.setPointerCapture(t.pointerId),this.pointers.size===0&&t.button===0&&this.events.grab?.(...this.local(t))){this.grabbing=!0,this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:t.clientX,y:t.clientY,time:performance.now(),moved:!1};let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,s=t.clientY-e.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,s))},V1)}else this.down=null,this.pinch=this.pinchState()}onMove(t){let e=this.pointers.get(t.pointerId);if(!e)return;if(this.grabbing){this.events.drag?.(...this.local(t));return}let n=t.clientX-e.x,s=t.clientY-e.y;if(this.swiping){this.events.swipeMove?.(t.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(t.clientX-this.down.x,t.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let r=this.el.getBoundingClientRect();if(this.pointers.size===1&&e.button===0&&!t.shiftKey&&this.events.swipeStart?.(this.down.x-r.left,this.down.y-r.top,t.clientX-this.down.x,t.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(t.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){e.x=t.clientX,e.y=t.clientY;return}let r=e.type==="mouse";if(r&&!this.leftDragTurns&&e.button===0){e.x=t.clientX,e.y=t.clientY;return}if((e.button===1||e.button===2||t.shiftKey)&&(this.leftDragTurns||!r))this.pan(n,s);else{let a=this.el.clientHeight||1,l=-n/a*3.2,c=-s/a*2.4;this.view.theta+=l,this.view.phi=Zu(this.view.phi+c,Xp,Yp),this.velocity={theta:l,phi:c}}e.x=t.clientX,e.y=t.clientY}else{e.x=t.clientX,e.y=t.clientY;let r=this.pinchState();this.pinch&&r&&(this.zoom(this.pinch.dist/Math.max(1,r.dist)),this.pan(r.mid[0]-this.pinch.mid[0],r.mid[1]-this.pinch.mid[1])),this.pinch=r}this.events.change()}onUp(t){if(this.pointers.has(t.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(t.pointerId),this.events.drop?.();return}if(this.pointers.delete(t.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&t.type==="pointerup"&&performance.now()-this.down.time<400){let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,s=t.clientY-e.top,r=performance.now();r-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(n,s)):(this.lastTap=r,this.events.tap(n,s))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(t){t.preventDefault(),this.flight=null,this.zoom(Math.exp(t.deltaY*(t.deltaMode===1?.05:.0015))),this.events.change()}zoom(t){this.view.radius=Zu(this.view.radius*t,this.minRadius,this.maxRadius)}pan(t,e){let n=this.el.clientHeight||1,s=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,r=new G(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),o=new G(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(r,-t*s),this.view.target.addScaledVector(o,e*s/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e.x-n.x,e.y-n.y),mid:[(e.x+n.x)/2,(e.y+n.y)/2]}}};function Zu(i,t,e){return Math.min(e,Math.max(t,i))}function zi(i,t,e="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=t.standing,n.uniforms.uGlass=t.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`fp3d-fold-${e}`,i}function qp(i,t){return Math.hypot(t[0]-i[0],t[1]-i[1],t[2]-i[2])}function $p(i,t,e=4){if(i.length<3)return[...i];let n=[i[0]];for(let s=1;s<i.length-1;s++){let[r,o,a]=[i[s-1],i[s],i[s+1]],l=qp(r,o),c=qp(o,a),u=Math.min(t,l*.45,c*.45),h=[(r[0]-o[0])/l,(r[1]-o[1])/l,(r[2]-o[2])/l],f=[(a[0]-o[0])/c,(a[1]-o[1])/c,(a[2]-o[2])/c];if(u<.005||h[0]*f[0]+h[1]*f[1]+h[2]*f[2]<-.999){n.push(o);continue}let d=[o[0]+h[0]*u,o[1]+h[1]*u,o[2]+h[2]*u],p=[o[0]+f[0]*u,o[1]+f[1]*u,o[2]+f[2]*u];for(let x=0;x<=e;x++){let g=x/e,m=(1-g)*(1-g),_=2*(1-g)*g,M=g*g;n.push([m*d[0]+_*o[0]+M*p[0],m*d[1]+_*o[1]+M*p[1],m*d[2]+_*o[2]+M*p[2]])}}return n.push(i[i.length-1]),n}var Zp=new Q(7568261),Jp=new Q(4869974),H1=new Q(3116287),Kp=new Q(3948872),Ju=hs([.35,.85,.4]),jp=10;function hs(i){let t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]}function ho(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function Qp(i){let t=Math.abs(i[1])>.9?[1,0,0]:[0,1,0],e=hs(ho(i,t));return[e,hs(ho(i,e))]}function oi(i,t){let e=.5+.5*Math.max(0,t[0]*Ju[0]+t[1]*Ju[1]+t[2]*Ju[2]);return i.clone().multiplyScalar(e)}function Qs(i,t,e,n,s,r=!1){let o=hs([e[0]-t[0],e[1]-t[1],e[2]-t[2]]),[a,l]=Qp(o),c=(u,h)=>{let f=h/jp*Math.PI*2,d=[a[0]*Math.cos(f)+l[0]*Math.sin(f),a[1]*Math.cos(f)+l[1]*Math.sin(f),a[2]*Math.cos(f)+l[2]*Math.sin(f)];return{p:[u[0]+d[0]*n,u[1]+d[1]*n,u[2]+d[2]*n],n:d}};for(let u=0;u<jp;u++){let h=c(t,u),f=c(t,u+1),d=c(e,u),p=c(e,u+1);i.tri(h.p,p.p,d.p,oi(s,h.n),oi(s,p.n),oi(s,d.n)),i.tri(h.p,f.p,p.p,oi(s,h.n),oi(s,f.n),oi(s,p.n)),r&&(i.tri([...t],f.p,h.p,oi(s,[-o[0],-o[1],-o[2]])),i.tri([...e],d.p,p.p,oi(s,o)))}}function W1(i,t,e,n,s,r,o,a){let l=hs(ho(e,n)),c=(h,f,d)=>[t[0]+e[0]*h*s+n[0]*f*r+l[0]*d*o,t[1]+e[1]*h*s+n[1]*f*r+l[1]*d*o,t[2]+e[2]*h*s+n[2]*f*r+l[2]*d*o],u=[];for(let[h,f]of[[e,.5],[[-e[0],-e[1],-e[2]],-.5]])u.push([h,[c(f,-.5,-.5),c(f,.5,-.5),c(f,.5,.5),c(f,-.5,.5)]]);for(let[h,f]of[[n,.5],[[-n[0],-n[1],-n[2]],-.5]])u.push([h,[c(-.5,f,-.5),c(.5,f,-.5),c(.5,f,.5),c(-.5,f,.5)]]);for(let[h,f]of[[l,.5],[[-l[0],-l[1],-l[2]],-.5]])u.push([h,[c(-.5,-.5,f),c(.5,-.5,f),c(.5,.5,f),c(-.5,.5,f)]]);for(let[h,f]of u){let d=oi(a,h);i.tri(f[0],f[1],f[2],d),i.tri(f[0],f[2],f[3],d),i.tri(f[0],f[2],f[1],d),i.tri(f[0],f[3],f[2],d)}}function tm(i,t){if(t.points.length<2)return;let e=t.radius,n=$p(t.points,e*2.2,4);for(let s=1;s<n.length;s++){let[r,o]=[n[s-1],n[s]];if(Math.hypot(o[0]-r[0],o[1]-r[1],o[2]-r[2])<1e-4)continue;let a=r[1]<-.02&&o[1]<-.02?Zp.clone().multiplyScalar(.55):Zp;Qs(i,r,o,e,a,s===1||s===n.length-1)}for(let s of t.fittings){let r=o=>[[s.p[0]-s.dir[0]*o,s.p[1]-s.dir[1]*o,s.p[2]-s.dir[2]*o],[s.p[0]+s.dir[0]*o,s.p[1]+s.dir[1]*o,s.p[2]+s.dir[2]*o]];if(s.kind==="sleeve"){let[o,a]=r(.03);Qs(i,o,a,e*1.22,Jp,!0)}else if(s.kind==="sight"){let[o,a]=r(.08);Qs(i,o,a,e*1.08,t.water?new Q(...t.water).multiplyScalar(.9):new Q(10475240),!0);for(let l of r(.08)){let[c,u]=[[l[0]-s.dir[0]*.02,l[1]-s.dir[1]*.02,l[2]-s.dir[2]*.02],[l[0]+s.dir[0]*.02,l[1]+s.dir[1]*.02,l[2]+s.dir[2]*.02]];Qs(i,c,u,e*1.3,Jp,!0)}}else{let[o,a]=r(.055);Qs(i,o,a,e*1.4,Kp,!0);let[l]=Qp(s.dir),c=Math.abs(s.dir[1])>.9?l:[0,1,0],u=[s.p[0]+c[0]*e*2,s.p[1]+c[1]*e*2,s.p[2]+c[2]*e*2];Qs(i,[s.p[0]+c[0]*e*1.3,s.p[1]+c[1]*e*1.3,s.p[2]+c[2]*e*1.3],u,e*.35,Kp,!0);let h=s.open===!1?hs(ho(s.dir,c)):s.dir,f=hs(ho(h,c)),d=[u[0]+h[0]*.045,u[1]+h[1]*.045,u[2]+h[2]*.045];W1(i,d,h,f,.1,.028,.012,H1)}}}var Ku=1.62,X1=.2,ju=class{solids=[];doors=[];rooms;walls;building;floor;constructor(t,e){this.building=t,this.floor=e;let n=t.settings;this.rooms=e.rooms.filter(o=>o.points.length>=3);let s=ri(this.rooms,{exterior:n.wall_exterior,interior:n.wall_interior},e.walls??[]);this.walls=s.walls;let r=new Map;for(let o of e.openings){if(!(o.type!=="window"||o.sill<.1))continue;let l=Zr(o,e.rooms,e.walls??[]);if(!l)continue;let c=Jr(this.walls,o,l);if(!c)continue;let u=r.get(c.wall)??[];u.push([c.s-o.width/2+.05,c.s+o.width/2-.05]),r.set(c.wall,u);let h=c.wall,f=h.b[0]-h.a[0],d=h.b[1]-h.a[1],p=Math.hypot(f,d)||1,x=f/p,g=d/p,m=[h.a[0]+x*c.s,h.a[1]+g*c.s],_=h.left+.45,M=h.right+.45;this.doors.push({centre:m,p:[[m[0]-g*_,m[1]+x*_],[m[0]+g*M,m[1]-x*M]]})}for(let o of this.walls){if(o.height!==void 0&&o.height<.9)continue;let a=o.b[0]-o.a[0],l=o.b[1]-o.a[1],c=Math.hypot(a,l);c<1e-6||this.solids.push({a:o.a,u:[a/c,l/c],len:c,left:o.left,right:o.right,gaps:r.get(o)??[]})}}blocked(t,e=X1){for(let n of this.solids){let s=t[0]-n.a[0],r=t[1]-n.a[1],o=s*n.u[0]+r*n.u[1];if(o<-e||o>n.len+e)continue;let a=-s*n.u[1]+r*n.u[0];if(!(a>n.left+e||a<-n.right-e)&&!n.gaps.some(([l,c])=>o>l+e*.6&&o<c-e*.6))return!0}return!1}clear(t,e){let n=Math.hypot(e[0]-t[0],e[1]-t[1]),s=Math.max(1,Math.ceil(n/.08));for(let r=1;r<=s;r++){let o=r/s;if(this.blocked([t[0]+(e[0]-t[0])*o,t[1]+(e[1]-t[1])*o]))return!1}return!0}roomAt(t){return this.rooms.find(e=>Zt(t,e.points))??null}path(t,e){if(this.clear(t,e))return[e];let n=[t,e,...this.doors.flatMap(h=>h.p).filter(h=>!this.blocked(h))],s=n.length,r=new Array(s).fill(1/0),o=new Array(s).fill(-1),a=new Array(s).fill(!1);r[0]=0;let l=new Map,c=(h,f)=>{let d=h<f?`${h}:${f}`:`${f}:${h}`,p=l.get(d);return p===void 0&&(p=this.clear(n[h],n[f]),l.set(d,p)),p};for(;;){let h=-1;for(let f=0;f<s;f++)!a[f]&&r[f]<1/0&&(h<0||r[f]<r[h])&&(h=f);if(h<0)return null;if(h===1)break;a[h]=!0;for(let f=0;f<s;f++){if(a[f]||f===h)continue;let d=Math.hypot(n[h][0]-n[f][0],n[h][1]-n[f][1]);r[h]+d>=r[f]||c(h,f)&&(r[f]=r[h]+d,o[f]=h)}}let u=[];for(let h=1;h>0;h=o[h])u.unshift(n[h]);return u}start(t=!1){for(let s of t?this.floor.openings:[]){if(s.type!=="door")continue;let r=Zr(s,this.floor.rooms,this.floor.walls??[]);if(!r)continue;let o=Jr(this.walls,s,r);if(!o||!o.wall.exterior)continue;let a=o.wall,l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],u=Math.hypot(l,c)||1,h=l/u,f=c/u,d=[a.a[0]+h*o.s,a.a[1]+f*o.s],p=[d[0]-f*(a.left+.9),d[1]+h*(a.left+.9)];if(!this.blocked(p))return{p,yaw:this.openYaw(p,Math.atan2(h,-f))}}let e=[...this.rooms].sort((s,r)=>em(r)-em(s))[0],n=e?this.freeNear(Pi(e.points)):[0,0];return{p:n,yaw:this.openYaw(n)}}sight(t,e,n=9){let s=Math.cos(e),r=Math.sin(e);for(let o=.2;o<n;o+=.15)if(this.blocked([t[0]+s*o,t[1]+r*o],.05))return o;return n}openYaw(t,e=null){let n=e??0,s=-1;for(let r=0;r<24;r++){let o=r/24*Math.PI*2,a=this.sight(t,o);if(e!==null){let l=Math.abs(o-e)%(Math.PI*2);l>Math.PI&&(l=Math.PI*2-l),a*=1.25-l/Math.PI*.5}a>s&&(s=a,n=o)}return n}freeNear(t){if(!this.blocked(t))return t;for(let e=.2;e<2;e+=.2)for(let n=0;n<6.28;n+=.5){let s=[t[0]+Math.cos(n)*e,t[1]+Math.sin(n)*e];if(!this.blocked(s))return s}return t}};function em(i){let t=0,e=i.points;for(let n=0;n<e.length;n++){let[s,r]=e[n],[o,a]=e[(n+1)%e.length];t+=s*a-o*r}return Math.abs(t/2)}var Qu=class{state;path=[];keys=new Set;stick=null;raf=0;last=0;origUpdate;origWalls;origFov;origNear;onRoom;roomId=null;listeners=[];turnTo=null;v;map;surface;constructor(t,e,n,s){this.v=t,this.map=e,this.surface=n,this.onRoom=s.onRoom;let r=s.start??(()=>{let o=e.start();return{x:o.p[0],z:o.p[1],yaw:o.yaw,pitch:-.05}})();this.state={...r},this.origUpdate=t.controls.update,this.origWalls=t.updateWalls,this.origFov=t.camera.fov,this.origNear=t.camera.near,t.controls.update=()=>this.apply(),t.updateWalls=()=>{for(let o of t.floors)o.mask.standing.value=65535,o.mask.glass.value=0},t.camera.fov=72,t.camera.near=.05,t.camera.updateProjectionMatrix(),t.labels.style.visibility="hidden",this.bind(),this.reportRoom(),t.invalidate()}dispose(){cancelAnimationFrame(this.raf);for(let[t,e,n,s]of this.listeners)t.removeEventListener(e,n,s);this.v.controls.update=this.origUpdate,this.v.updateWalls=this.origWalls,this.v.camera.fov=this.origFov,this.v.camera.near=this.origNear,this.v.camera.updateProjectionMatrix(),this.v.labels.style.visibility="",this.v.invalidate()}setMap(t,e){this.map=t,this.path=[];let n=e??(()=>{let s=t.start();return{x:s.p[0],z:s.p[1],yaw:s.yaw,pitch:-.05}})();this.state={...n},this.reportRoom(),this.kick()}floorY(){let t=this.v.floorMap.get(this.map.floor.id);return(t?t.floor.elevation+t.y:this.map.floor.elevation)+Ku}apply(){let{x:t,z:e,yaw:n,pitch:s}=this.state,r=this.floorY(),o=Math.cos(s);return this.v.camera.position.set(t,r,e),this.v.camera.lookAt(t+Math.cos(n)*o,r+Math.sin(s),e+Math.sin(n)*o),this.v.controls.view.target.set(t,r-Ku,e),!1}goTo(t){let e=this.map.path([this.state.x,this.state.z],this.map.freeNear(t));return e?(this.path=e,this.kick(),!0):!1}goToRoom(t){return this.goTo(Pi(t.points))}kick(){this.raf||(this.last=performance.now(),this.raf=requestAnimationFrame(t=>this.tick(t))),this.v.invalidate()}tick(t){this.raf=0;let e=Math.min(.05,(t-this.last)/1e3);this.last=t;let n=!1,s=this.state,r=0,o=0,a=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(r+=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(r-=1),this.keys.has("a")&&(o-=1),this.keys.has("d")&&(o+=1),(this.keys.has("arrowleft")||this.keys.has("q"))&&(a-=1),(this.keys.has("arrowright")||this.keys.has("e"))&&(a+=1),this.stick&&(r+=-this.stick.y,a+=this.stick.x*.9),a&&(s.yaw+=a*1.6*e,n=!0),r||o){this.path=[],this.turnTo=null;let l=1.5*e,c=(Math.cos(s.yaw)*r-Math.sin(s.yaw)*o)*l,u=(Math.sin(s.yaw)*r+Math.cos(s.yaw)*o)*l;this.move(c,u),n=!0}else if(this.path.length){let[l,c]=this.path[0],u=l-s.x,h=c-s.z,f=Math.hypot(u,h),d=1.4*e;f<=d?(s.x=l,s.z=c,this.path.shift()):(s.x+=u/f*d,s.z+=h/f*d,this.turnTo=Math.atan2(h,u)),n=!0}if(this.turnTo!==null){let l=this.turnTo-s.yaw;for(;l>Math.PI;)l-=2*Math.PI;for(;l<-Math.PI;)l+=2*Math.PI;Math.abs(l)<.01?this.turnTo=null:(s.yaw+=l*Math.min(1,e*4),n=!0),!this.path.length&&Math.abs(l)<.05&&(this.turnTo=null)}this.reportRoom(),this.v.invalidate(),(n||this.keys.size||this.stick)&&(this.raf=requestAnimationFrame(l=>this.tick(l)))}move(t,e){let n=this.state,s=[n.x+t,n.z+e];if(!this.map.blocked(s)){n.x=s[0],n.z=s[1];return}this.map.blocked([n.x+t,n.z])?this.map.blocked([n.x,n.z+e])||(n.z+=e):n.x+=t}reportRoom(){let t=this.map.roomAt([this.state.x,this.state.z]),e=t?.id??null;e!==this.roomId&&(this.roomId=e,this.onRoom(t))}setStick(t){this.stick=t,this.kick()}floorPoint(t,e){let n=this.surface.getBoundingClientRect(),s=(t-n.left)/n.width*2-1,r=1-(e-n.top)/n.height*2,{yaw:o,pitch:a,x:l,z:c}=this.state,u=this.v.camera.fov*Math.PI/180,h=Math.tan(u/2),f=n.width/n.height,d=Math.cos(a),p=[Math.cos(o)*d,Math.sin(a),Math.sin(o)*d],x=[-Math.sin(o),0,Math.cos(o)],g=[p[1]*x[2]-p[2]*x[1],p[2]*x[0]-p[0]*x[2],p[0]*x[1]-p[1]*x[0]],m=[-g[0],-g[1],-g[2]],_=[p[0]+x[0]*s*h*f+m[0]*r*h,p[1]+x[1]*s*h*f+m[1]*r*h,p[2]+x[2]*s*h*f+m[2]*r*h];if(_[1]>=-.02)return null;let M=Ku/-_[1];return[l+_[0]*M,c+_[2]*M]}bind(){let t=(o,a,l,c)=>{o.addEventListener(a,l,c),this.listeners.push([o,a,l,!!c?.capture])},e=null;t(this.surface,"pointerdown",o=>{e||(e={x:o.clientX,y:o.clientY,moved:!1,id:o.pointerId},this.surface.setPointerCapture?.(o.pointerId))}),t(this.surface,"pointermove",o=>{if(!e||o.pointerId!==e.id)return;let a=o.clientX-e.x,l=o.clientY-e.y;if(!e.moved&&Math.hypot(a,l)<5)return;e.moved=!0,e.x=o.clientX,e.y=o.clientY;let c=this.v.camera.fov*Math.PI/180/this.surface.clientHeight;this.state.yaw-=a*c*1.1,this.state.pitch=Math.max(-1,Math.min(.8,this.state.pitch+l*c*1.1)),this.turnTo=null,this.v.invalidate()});let n=o=>{if(!e||o.pointerId!==e.id)return;let a=!e.moved;if(e=null,a){let l=this.floorPoint(o.clientX,o.clientY);l&&this.map.roomAt(l)&&this.goTo(l)}};t(this.surface,"pointerup",n),t(this.surface,"pointercancel",()=>e=null),t(this.surface,"wheel",o=>{o.preventDefault();let a=this.state,l=Math.max(-.6,Math.min(.6,-o.deltaY/300));this.path=[],this.move(Math.cos(a.yaw)*l,Math.sin(a.yaw)*l),this.reportRoom(),this.v.invalidate()},{passive:!1});let s=o=>["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"].includes(o.key.toLowerCase()),r=o=>!!o.composedPath()[0]?.closest?.("input, textarea, select");t(window,"keydown",o=>{!s(o)||r(o)||o.ctrlKey||o.metaKey||o.altKey||(o.preventDefault(),o.stopImmediatePropagation(),this.keys.add(o.key.toLowerCase()),this.kick())},{capture:!0}),t(window,"keyup",o=>{s(o)&&(this.keys.delete(o.key.toLowerCase()),o.stopImmediatePropagation())},{capture:!0}),t(window,"blur",()=>this.keys.clear())}};function Y1(i,t){let e=Ae(t);if(!e)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:t,x:i.x,z:i.z,rotation:i.rotation,w:e.size[0]*n,d:e.size[1]*n,h:e.size[2]*n,variant:null,entity:null,power:null}}function th(i,t){if(!i.furniture.some(n=>n.type==="parking"&&t.has(n.id)))return i;let e=i.furniture.flatMap(n=>{let s=n.type==="parking"?t.get(n.id):void 0,r=s?Y1(n,s):null;return r?[n,r]:[n]});return{...i,furniture:e}}function eh(i,t){let e=[],n=[],s=[],r=[],o=[];for(let{face:l,field:c}of i){let u=e.length/3,h=c.portrait===!1?10:6,f=c.portrait===!1?6:10,d=q1(c.id)%1e3/1e3;for(let x of ro(l,c)){let[g,m,_,M]=x.corners.map(y=>[y[0]+l.n[0]*.006,y[1]+l.n[1]*.006-t,y[2]+l.n[2]*.006]),v=[[g,0,0],[m,1,0],[_,1,1],[M,0,1]];for(let y of[0,1,2,0,2,3]){let[w,T,b]=v[y];e.push(w[0],w[1],w[2]),n.push(T,b),s.push(h,f),r.push(d)}}let p=e.length/3-u;p&&o.push({id:c.id,start:u,count:p})}if(!e.length)return null;let a=new qt;return a.setAttribute("position",new Nt(e,3)),a.setAttribute("uv",new Nt(n,2)),a.setAttribute("aCells",new Nt(s,2)),a.setAttribute("aPhase",new Nt(r,1)),a.setAttribute("aLevel",new Nt(new Float32Array(e.length/3),1)),{geometry:a,ranges:o}}function fo(i,t){let e=i.geometry.getAttribute("aLevel"),n=e.array,s=!1;for(let r of i.ranges){let o=Math.min(1,Math.max(0,t.get(r.id)??0));n.fill(o,r.start,r.start+r.count),o>.02&&(s=!0)}return e.needsUpdate=!0,s}function nh(i){let t=new ie({transparent:!0,blending:Ce,depthWrite:!1,side:ue});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},t.customProgramCacheKey=()=>"fp3d-solar-live",t}function q1(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619)>>>0;return t}var im=`
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
`,Z1=im,J1=`
  uniform vec2 uAxis;
  varying vec2 vXZ;
  void main() {
    // slats across the direction the cover rolls
    float s = fract(dot(vXZ, uAxis) / 0.22);
    float edge = smoothstep(0.0, 0.08, s) * (1.0 - smoothstep(0.9, 1.0, s));
    vec3 base = vec3(0.13, 0.19, 0.3);
    gl_FragColor = vec4(base * (0.65 + 0.35 * edge), 0.96);
  }
`;function nm(i,t){let e=[];for(let[s,r,o]of Ni(i))for(let a of[s,o,r])e.push(i[a][0],t,i[a][1]);let n=new qt;return n.setAttribute("position",new Nt(e,3)),n}function sm(i,t){let e=new Ue;for(let n of i){if(n.points.length<3)continue;let s=n.floorY!==void 0&&n.floorY!==null&&n.floorY<n.y-.2,r=(o,a)=>{let l=new Ut(nm(n.points,o),new en({uniforms:{uTime:t,uColor:{value:n.color},uLevel:{value:n.level},uFlow:{value:n.flow?1:0},uHeat:{value:n.heat?1:0},uSurface:{value:a}},vertexShader:im,fragmentShader:$1,transparent:!0,blending:Ce,depthWrite:!1,side:ue}));l.renderOrder=5,l.frustumCulled=!1,e.add(l)};if(s?(r(n.floorY+.01,0),r(n.y+.004,1)):r(n.y+.004,0),n.cover>.02){let o=n.points.map(g=>g[0]),a=n.points.map(g=>g[1]),[l,c,u,h]=[Math.min(...o),Math.max(...o),Math.min(...a),Math.max(...a)],f=c-l>=h-u,d=Math.min(1,n.cover),p=f?[[l-.1,u-.1],[l+(c-l)*d,u-.1],[l+(c-l)*d,h+.1],[l-.1,h+.1]]:[[l-.1,u-.1],[c+.1,u-.1],[c+.1,u+(h-u)*d],[l-.1,u+(h-u)*d]],x=Cl(n.points,p);if(x.length>=3){let g=new Ut(nm(x,n.y+.03),new en({uniforms:{uAxis:{value:f?[1,0]:[0,1]}},vertexShader:Z1,fragmentShader:J1,transparent:!0,side:ue}));g.renderOrder=6,e.add(g);let m=[];for(let M=0;M<x.length;M++){let v=x[M],y=x[(M+1)%x.length];m.push(v[0],n.y+.032,v[1],y[0],n.y+.032,y[1])}let _=new qt;_.setAttribute("position",new Nt(m,3)),e.add(new Ye(_,new Xe({color:5995775,transparent:!0,opacity:.6})))}}}return e}function rm(i){for(let t of i.children)t.geometry?.dispose(),t.material?.dispose?.();i.clear()}var om=["neon","blueprint","day"];function am(i){return om.indexOf(i)}var Vl={value:new G(.22,.88,1)},Gl={value:0};function lm(i){let t=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!t)return null;let e=parseInt(t[1],16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}var K1=`
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
`;function sn(i,t,e=!1){let n=i.onBeforeCompile.bind(i),s=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(r,o)=>{n(r,o),r.uniforms.uTheme=t,r.uniforms.uAccent=Vl,r.uniforms.uAccentOn=Gl,r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
${K1}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${e?"true":"false"});`)},i.customProgramCacheKey=()=>`${s()}-themed-${e?"l":"s"}`,i}function po(i){return i==="day"?wi:Ce}var mo=.012,j1=.012;function um(i,t,e,n,s,r=[],o){let a=[],l=[],c=[],u=[],h=(m,_,M,v,y,w,T)=>{for(let b of[m,_,M,m,M,v])a.push(b[0],b[1],b[2]),l.push(y[0],y[1],y[2]),c.push(w),u.push(T)};i.rooms.forEach((m,_)=>{if(m.points.length<3)return;let M=m.points.map(P=>P[0]),v=m.points.map(P=>P[1]),y=Math.min(...M),w=Math.min(...v),T=Math.max(...M),b=Math.max(...v),S=Math.max(1,Math.ceil((T-y)/s)),E=Math.max(1,Math.ceil((b-w)/s));for(let P=0;P<S;P++)for(let A=0;A<E;A++){let I=y+(P+.5)*s,R=w+(A+.5)*s;if(!Zt([I,R],m.points)||r.some(B=>Zt([I,R],B)))continue;let L=y+P*s,N=w+A*s,U=Math.min(L+s,T),k=Math.min(N+s,b);h([L,mo,N],[L,mo,k],[U,mo,k],[U,mo,N],[0,1,0],_,-1)}});let f=i.rooms.length,d=(i.outdoor??[]).filter(m=>m.points.length>=3&&!Ci(m.type));if(d.length){let m=d.flatMap(b=>b.points.map(S=>S[0])),_=d.flatMap(b=>b.points.map(S=>S[1])),M=Math.floor(Math.min(...m)/s)*s,v=Math.floor(Math.min(..._)/s)*s,y=Math.max(1,Math.ceil((Math.max(...m)-M)/s)),w=Math.max(1,Math.ceil((Math.max(..._)-v)/s)),T=(b,S,E)=>Tp(i,b)-Yr(i,b,S,E)+mo;for(let b=0;b<y;b++)for(let S=0;S<w;S++){let E=M+b*s,P=v+S*s,A,I=[E+s/2,P+s/2];A=d.find(L=>L.type==="pool"&&Zt(I,L.points));for(let L=d.length-1;L>=0&&!A;L--)Zt(I,d[L].points)&&(A=d[L]);if(!A)continue;let R=(L,N)=>[L,T(A,L,N),N];h(R(E,P),R(E,P+s),R(E+s,P+s),R(E+s,P),[0,1,0],f,-1)}}let p=Math.min(i.cut_height,i.height),x=[];t.forEach((m,_)=>{let M=Math.min(i.height,m.height??i.height),v=Math.min(p,M-.02),y=m.b[0]-m.a[0],w=m.b[1]-m.a[1],T=Math.hypot(y,w);if(T<.05)return;let b=[y/T,w/T],S=[-b[1],b[0]],E=e[_],P=tM(m,b,T,n),A=(N,U)=>N?i.rooms.findIndex(k=>k.id===N):U?f:-1;x.push({a:m.a,b:m.b,h:M,ra:A(m.roomLeft,!1),rb:A(m.roomRight,m.exterior),gaps:P});let I=(N,U,k)=>[U,k,...N.filter(B=>B>U+.005&&B<k-.005)].sort((B,z)=>B-z).filter((B,z,V)=>z===0||B>V[z-1]+.005),R=I([v,(v+M)/2,...P.flatMap(N=>[N.y0+.01,N.y1-.01])],.02,M-.02),L=I(P.flatMap(N=>[N.s0,N.s1]),0,T);for(let N of[1,-1]){let U=N>0?m.roomLeft:m.roomRight,k=U?i.rooms.findIndex($=>$.id===U):m.exterior?f:-1;if(k<0)continue;let B=(N>0?m.left:m.right)+j1,z=[S[0]*N,S[1]*N],V=($,ot)=>[m.a[0]+b[0]*$+z[0]*B,ot,m.a[1]+b[1]*$+z[1]*B],st=$=>{let ot=V($,0),ct=o?.(ot[0],ot[2]);return ct==null?1/0:ct-.02};for(let $=0;$<L.length-1;$++){let ot=L[$+1]-L[$],ct=Math.max(1,Math.ceil(ot/s));for(let pt=0;pt<ct;pt++){let q=L[$]+ot/ct*pt,X=L[$]+ot/ct*(pt+1),it=(q+X)/2;for(let ut=0;ut<R.length-1;ut++){let ht=R[ut],Pt=R[ut+1];if(Pt-ht<.01)continue;let te=(ht+Pt)/2;if(P.some(Wt=>it>Wt.s0&&it<Wt.s1&&te>Wt.y0&&te<Wt.y1))continue;let kt=ht>=p-1e-6?E:rs+E,Ht=Math.min(Pt,st(q)),re=Math.min(Pt,st(X));Ht<=ht+.005&&re<=ht+.005||h(V(q,ht),V(X,ht),V(X,Math.max(ht,re)),V(q,Math.max(ht,Ht)),[z[0],0,z[1]],k,kt)}}}}});let g=[];for(let m of n){if(m.opening.type!=="door")continue;let _=t.find(y=>hm(y,m)&&Q1(y,m));if(!_||!_.roomLeft||!_.roomRight)continue;let M=i.rooms.findIndex(y=>y.id===_.roomLeft),v=i.rooms.findIndex(y=>y.id===_.roomRight);M<0||v<0||g.push({id:m.opening.id,a:M,b:v,x:m.start[0]+m.axis[0]*(m.width/2),y:Math.min(1.1,m.top*.55),z:m.start[1]+m.axis[1]*(m.width/2)})}return{pos:new Float32Array(a),normal:new Float32Array(l),room:Int16Array.from(c),fold:new Float32Array(u),doors:g,blockers:x}}function hm(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],s=Math.hypot(e,n)||1;return Math.abs((t.start[0]-i.a[0])*n-(t.start[1]-i.a[1])*e)/s<.02&&Math.abs((t.axis[0]*e+t.axis[1]*n)/s)>.99}function Q1(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],s=Math.hypot(e,n)||1,r=t.start[0]+t.axis[0]*(t.width/2),o=t.start[1]+t.axis[1]*(t.width/2),a=((r-i.a[0])*e+(o-i.a[1])*n)/s;return a>-.05&&a<s+.05}function tM(i,t,e,n){let s=[];for(let r of n){if(!hm(i,r))continue;let o=(r.start[0]-i.a[0])*t[0]+(r.start[1]-i.a[1])*t[1],l=r.axis[0]*t[0]+r.axis[1]*t[1]>0?o:o-r.width;l>e||l+r.width<0||s.push({s0:l,s1:l+r.width,y0:r.sill-.01,y1:r.top+.01})}return s}function eM(i,t){let e=Math.max(0,-t),n=Math.max(0,t);switch(i){case"ceiling":return .3+.7*e;case"spot":return .06+.94*e**5;case"pendant":return .25+.85*e**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(t);default:return 1}}function nM(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function cm(i,t,e,n,s,r,o){let a=t-i.x,l=e-i.y,c=n-i.z,u=a*a+l*l+c*c,h=Math.sqrt(u)||1e-6,f=nM(i),d=1/(1+u/(f*f)),p=d*Math.sqrt(d),x=Math.max(0,-(a*s+l*r+c*o)/h);return i.level*p*(.2+.8*x)*eM(i.kind,l/h)}function fm(i,t,e=.7,n=[]){let s=[...t];i.doors.forEach((u,h)=>{let f=n[h]??.5;if(!(f<=.01))for(let[d,p]of[[u.a,u.b],[u.b,u.a]]){let x=[0,0,0];for(let m of t){if(m.room!==d)continue;let _=m.x-u.x,M=m.y-u.y,v=m.z-u.z,y=Math.hypot(_,M,v)||1,w=cm(m,u.x,u.y,u.z,_/y,M/y,v/y);x[0]+=m.color[0]*w,x[1]+=m.color[1]*w,x[2]+=m.color[2]*w}let g=Math.max(x[0],x[1],x[2]);g<.01||s.push({x:u.x,y:u.y,z:u.z,color:[x[0]/g,x[1]/g,x[2]/g],level:Math.min(1,g*.9*(.35+.65*f)),kind:"wall",room:p})}});let r=new Map;for(let u of s){let h=i.blockers.filter(d=>d.ra===u.room||d.rb===u.room),f={...u,color:u.color.map(d=>Math.pow(d,1.5)),walls:h};r.set(u.room,[...r.get(u.room)??[],f])}let{pos:o,normal:a,room:l}=i,c=new Float32Array(o.length);for(let u=0;u<l.length;u++){let h=r.get(l[u]);if(!h)continue;let f=u*3,d=0,p=0,x=0;for(let g of h){if(g.walls.length&&iM(g,g.walls,o[f],o[f+1],o[f+2]))continue;let m=cm(g,o[f],o[f+1],o[f+2],a[f],a[f+1],a[f+2]);d+=g.color[0]*m,p+=g.color[1]*m,x+=g.color[2]*m}c[f]=1-Math.exp(-d*e*1.6),c[f+1]=1-Math.exp(-p*e*1.6),c[f+2]=1-Math.exp(-x*e*1.6)}return c}function iM(i,t,e,n,s){let r=e-i.x,o=s-i.z;for(let a of t){let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],u=r*c-o*l;if(Math.abs(u)<1e-9)continue;let h=a.a[0]-i.x,f=a.a[1]-i.z,d=(h*c-f*l)/u;if(d<=1e-6||d>=1-1e-6)continue;let p=(h*o-f*r)/u;if(p<0||p>1)continue;let x=i.y+(n-i.y)*d;if(x>=a.h)continue;let g=p*Math.hypot(l,c);if(!a.gaps.some(m=>g>m.s0&&g<m.s1&&x>m.y0&&x<m.y1))return!0}return!1}function dm(i,t,e){let n=i.rooms.findIndex(s=>s.points.length>=3&&Zt([t,e],s.points));return n<0?i.rooms.length:n}function Hl(i,t){return i&&t>=0&&t<i.length?i[t]:t}var go={open:0,open2:0,tilt:0,tilt2:0,cover:null},pm=2043986,mm=2769520,sM=2242399,ih=1845831,rM=1450554,ai=16758087,oM=1.2,aM=1.5,lM=1846349,cM=2572395,uM=1120816,hM=1845831,gm=5995775,xm=9085695,tr=Ot(3662079,.08),fM=.2;function Wl(i,t,e,n,s,r,o,a,l,c,u){let h=(d,p,x)=>t(d,p,x),f=[[h(e,s,a),h(n,s,a),h(n,r,a),h(e,r,a),c],[h(e,s,o),h(n,s,o),h(n,r,o),h(e,r,o),Ot(l.getHex(),.6)],[h(e,r,o),h(n,r,o),h(n,r,a),h(e,r,a),l],[h(e,s,o),h(n,s,o),h(n,s,a),h(e,s,a),Ot(l.getHex(),.85)],[h(e,s,o),h(e,r,o),h(e,r,a),h(e,s,a),Ot(l.getHex(),.92)],[h(n,s,o),h(n,r,o),h(n,r,a),h(n,s,a),Ot(l.getHex(),.92)]];for(let[d,p,x,g,m]of f)i.tri(d,p,x,m,m,m,void 0,u),i.tri(d,x,g,m,m,m,void 0,u)}function ce(i,t,e,n,s,r,o,a,l,c,u,h){if(a<=u+1e-6)return Wl(i,t,e,n,s,r,o,a,l,c,Gt);if(o>=u-1e-6)return Wl(i,t,e,n,s,r,o,a,l,c,h);Wl(i,t,e,n,s,r,o,u,l,c,Gt),Wl(i,t,e,n,s,r,u,a,l,c,h)}function ki(i,t,e,n,s,r,o,a,l,c,u=0){let h=(f,d,p)=>{let x=v=>u?(o-v)/u:.5,g=t(e,s,f),m=t(n,s,f),_=t(n,s,d),M=t(e,s,d);i.tri(g,m,_,a,a,a,[0,x(f),1,x(f),1,x(d)],p),i.tri(g,_,M,a,a,a,[0,x(f),1,x(d),0,x(d)],p)};o<=l+1e-6?h(r,o,Gt):r>=l-1e-6?h(r,o,c):(h(r,l,Gt),h(l,o,c))}function dM(i,t,e,n,s,r,o,a,l,c){let u=t(e,s,o),h=t(n,s,o),f=t(n,r,o),d=t(e,r,o),p=0,x=(r-s)/c;i.tri(u,h,f,a,a,a,[0,p,1,p,1,x],l),i.tri(u,f,d,a,a,a,[0,p,1,x,0,x],l)}function bm(i,t,e){let n=new ee,s=new ee,r=new ee(!0),o=new Q(pm),a=new Q(mm),l=[],c=[],u=[];for(let h of i){let f=n.count,d=s.count,p=r.count,x=t.get(h.opening.id)??go,g=h.width,{sill:m,top:_,bucket:M}=h,v=(b,S,E)=>[h.start[0]+h.axis[0]*b+h.toRoom[0]*S,E,h.start[1]+h.axis[1]*b+h.toRoom[1]*S],y=(h.faceRoom-h.faceOut)/2,w=h.opening.mark==="closed",T=h.opening.type==="door"&&is(h.opening,h.exterior)==="passage";if(h.opening.type==="door"&&!T||h.opening.type==="garage"){let b=-h.faceOut-.012,S=h.faceRoom+.012,E=h.opening.type==="garage"&&(w?!!x.sensed&&(x.cover??1)>=.95:(x.cover??1)<.95),P=E?Ot(ai,.8):new Q(pm),A=E?Ot(ai,1):new Q(mm);ce(n,v,-.045,.02,b,S,0,_+.045,P,A,e,M),ce(n,v,g-.02,g+.045,b,S,0,_+.045,P,A,e,M),ce(n,v,.02,g-.02,b,S,_-.02,_+.045,P,A,e,M)}if(h.opening.type==="door"){let b=is(h.opening,h.exterior),S=Bd(b),E=h.opening.swing==="out"?-1:1,P=E>0?h.faceRoom:-h.faceOut,A=h.opening.leaves===2,I=.02,R=g-.02,L=Od(g,b,h.hingeAtStart,h.opening);if(L){for(let[B,z]of L.panels)ce(n,v,B,B+.04,y-.03,y+.03,.02,_-.02,o,a,e,M),ce(n,v,z-.04,z,y-.03,y+.03,.02,_-.02,o,a,e,M),ce(n,v,B,z,y-.03,y+.03,.02,.1,o,a,e,M),ki(s,v,B+.04,z-.04,y,.1,_-.02,tr,e,M);I=L.x0,R=L.x1}let N=A?(R-I)/2-.004:R-I,U=S?.06:.04;S&&(ce(n,v,.02,g-.02,-h.faceOut-.02,h.faceRoom,0,.02,new Q(ih),a,e,M),h.exterior&&ce(n,v,g/2-.08,g/2+.08,-h.faceOut-.1,-h.faceOut,_+.1,_+.17,Ot(ai,.55),Ot(ai,.85),e,Gt));let k=T?[]:[[h.hingeAtStart,x.open]];A&&!T&&k.push([!h.hingeAtStart,x.open2??0]);for(let[B,z]of k){let V=Math.min(1,Math.max(0,z)),st=b==="sliding"?0:V*aM,$=b==="sliding"?V*N:0,ot=(te,kt,Ht)=>{let re=te*Math.cos(st)-kt*Math.sin(st)-$,Wt=P+E*(kt*Math.cos(st)+te*Math.sin(st)+($?.05:0));return v(B?I+re:R-re,Wt,Ht)},ct=V>.05?Gt:M,pt=w?!!x.sensed&&V<.05:V>.9,q=pt?Ot(ai,.7):new Q(S?uM:lM),X=pt?Ot(ai,.9):new Q(S?hM:cM);b==="glass"?(ce(n,ot,0,.05,-U,0,.01,_-.01,q,X,e,ct),ce(n,ot,N-.05,N,-U,0,.01,_-.01,q,X,e,ct),ce(n,ot,.05,N-.05,-U,0,.01,.12,q,X,e,ct),ce(n,ot,.05,N-.05,-U,0,_-.08,_-.01,q,X,e,ct),ki(s,ot,.05,N-.05,-U/2,.12,_-.08,tr,e,ct)):ce(n,ot,0,N,-U,0,.01,_-.01,q,X,e,ct),b==="front_glass"?ki(s,ot,.12,N-.12,.001,_*.55,_-.18,tr,e,ct):S&&ki(s,ot,.1,.18,.001,.3,_-.3,tr,e,ct);let it=Math.min(1.05,_*.5),ut=S?.3:.012,ht=S?N-.11:N-.16,Pt=S?N-.08:N-.05;ce(n,ot,ht,Pt,.004,.05,it-ut,it+ut,new Q(gm),new Q(xm),e,ct),ce(n,ot,ht,Pt,-U-.05,-U-.004,it-ut,it+ut,new Q(gm),new Q(xm),e,ct)}}else if(h.opening.type==="garage"){let b=Math.min(1,Math.max(0,x.cover??1)),S=new Q(13951231),E=h.faceRoom-.03,P=_*(1-b);b>.01&&ki(r,v,.02,g-.02,E,P,_,S,e,M,.5);let A=(1-b)*_;A>.01&&dM(r,v,.02,g-.02,E,E+A,_+.03,S,M,.5)}else if(is(h.opening,h.exterior)==="glass_wall"){ce(n,v,0,.04,y-.025,y+.025,m,_,o,a,e,M),ce(n,v,g-.04,g,y-.025,y+.025,m,_,o,a,e,M),ce(n,v,.04,g-.04,y-.025,y+.025,m,m+.03,o,a,e,M),ce(n,v,.04,g-.04,y-.025,y+.025,_-.04,_,o,a,e,M);let E=Math.max(1,Math.round((g-2*.04)/.9)),P=(g-2*.04)/E;for(let A=1;A<E;A++){let I=.04+A*P;ce(n,v,I-.02,I+.02,y-.025,y+.025,m+.03,_-.04,o,a,e,M)}for(let A=0;A<E;A++){let I=.04+A*P+(A?.02:0),R=.04+(A+1)*P-(A<E-1?.02:0);ki(s,v,I,R,y,m+.03,_-.04,tr,e,M)}}else{ce(n,v,0,.06,y-.035,y+.035,m,_,o,a,e,M),ce(n,v,g-.06,g,y-.035,y+.035,m,_,o,a,e,M),ce(n,v,.06,g-.06,y-.035,y+.035,m,m+(m>.05?.06:.03),o,a,e,M),ce(n,v,.06,g-.06,y-.035,y+.035,_-.06,_,o,a,e,M),m>.3&&(ce(n,v,-.04,g+.04,y+.035,h.faceRoom+.07,m-.03,m,new Q(ih),a,e,M),h.exterior&&ce(n,v,-.03,g+.03,-h.faceOut-.06,y-.035,m-.04,m-.02,new Q(ih),a,e,M));let E=.055,P=m+(m>.05?.06:.03),A=_-.06,I=y+.035,R=y+.035+.06,N=h.opening.leaves===2?[{atStart:h.hingeAtStart,x0:h.hingeAtStart?.06:g/2,x1:h.hingeAtStart?g/2:g-.06,open:x.open,tilt:x.tilt},{atStart:!h.hingeAtStart,x0:h.hingeAtStart?g/2:.06,x1:h.hingeAtStart?g-.06:g/2,open:x.open2??0,tilt:x.tilt2??0}]:[{atStart:h.hingeAtStart,x0:.06,x1:g-.06,open:x.open,tilt:x.tilt}];for(let U of N){let k=U.open>.02||U.tilt>.02,B=w?!!x.sensed&&!k:k,z=B?Ot(ai,.75):new Q(sM),V=B?Ot(ai,.95):a,st=U.x0,$=U.x1,ot=$-st,ct=U.open*oM*(h.opening.swing==="out"?-1:1),pt=U.tilt*fM,q=(it,ut,ht)=>{let Pt=ht-P,te=ut+Pt*Math.sin(pt),kt=P+Pt*Math.cos(pt),Ht=it*Math.cos(ct)-(te-I)*Math.sin(ct);te=I+(te-I)*Math.cos(ct)+it*Math.sin(ct);let re=U.atStart?st+Ht:$-Ht;return v(re,te,kt)},X=Math.abs(ct)>.05?Gt:M;if(ce(n,q,0,E,I,R,P,A,z,V,e,X),ce(n,q,ot-E,ot,I,R,P,A,z,V,e,X),ce(n,q,E,ot-E,I,R,P,P+E,z,V,e,X),ce(n,q,E,ot-E,I,R,A-E,A,z,V,e,X),ki(s,q,E,ot-E,(I+R)/2,P+E,A-E,B?Ot(ai,.16):tr,e,X),is(h.opening,h.exterior)==="bars"){let it=(P+A)/2,ut=(I+R)/2;ce(n,q,E,ot-E,ut-.012,ut+.012,it-.012,it+.012,z,V,e,X),ce(n,q,ot/2-.012,ot/2+.012,ut-.012,ut+.012,P+E,A-E,z,V,e,X)}}}if(x.cover!==null){let b=-h.faceOut,S=_+.2;ce(n,v,-.05,g+.05,b-.15,b,_,S,new Q(rM),a,e,M);let E=Math.min(1,Math.max(0,x.cover));if(E>.01){let P=_-E*(_-m);ki(r,v,0,g,b-.07,P,_,new Q(16777215),e,M,.045)}}l.push({id:h.opening.id,start:f,end:n.count}),c.push({id:h.opening.id,start:d,end:s.count}),u.push({id:h.opening.id,start:p,end:r.count})}return{frames:n.geometry(),glass:s.geometry(),blinds:r.geometry(),frameTris:l,glassTris:c,blindTris:u}}var pM=.3,vm=2.6;function _m(i,t=.32,e=.22,n=[]){let s=i.map(y=>y[0]),r=i.map(y=>y[1]),o=Math.min(...s),a=Math.max(...s),l=Math.min(...r),c=Math.max(...r),u=c-l>=a-o,h=e*.7071,f=y=>{let w=[y,[y[0]+e,y[1]],[y[0]-e,y[1]],[y[0],y[1]+e],[y[0],y[1]-e]],T=[...w,[y[0]+h,y[1]+h],[y[0]-h,y[1]+h],[y[0]+h,y[1]-h],[y[0]-h,y[1]-h]];return w.every(b=>Zt(b,i))&&!n.some(b=>T.some(S=>Zt(S,b)))},d=(y,w)=>f(u?[y,w]:[w,y]),p=(y,w)=>{let T=Math.ceil(Math.hypot(w[0]-y[0],w[1]-y[1])/.05);for(let b=1;b<T;b++)if(!f([y[0]+(w[0]-y[0])*b/T,y[1]+(w[1]-y[1])*b/T]))return!1;return!0},[x,g,m,_]=u?[o,a,l,c]:[l,c,o,a],M=[],v=!0;for(let y=x+e;y<=g-e+1e-6;y+=t){let w=null,T=null,b=.05;for(let A=m;A<=_+1e-6;A+=b)if(d(y,A)&&(T??=A),(!d(y,A)||A+b>_+1e-6)&&T!==null){let I=d(y,A)?A:A-b;(!w||I-T>w[1]-w[0])&&(w=[T,I]),T=null}if(!w||w[1]-w[0]<.2)continue;let S=A=>{let[I,R]=A?w:[w[1],w[0]];return[u?[y,I]:[I,y],u?[y,R]:[R,y]]},E=S(v),P=M[M.length-1];if(P&&n.length&&!p(P,E[0])){let A=S(!v);if(!p(P,A[0]))continue;E=A,v=!v}M.push(E[0],E[1]),v=!v}return M}function rh(i,t=.7,e=12){return Array.from({length:e},(n,s)=>{let r=s/e*Math.PI*2;return[i[0]+Math.cos(r)*t,i[1]+Math.sin(r)*t]})}var sh=i=>Math.atan2(Math.sin(i),Math.cos(i));function ym(i,t,e){let n=null;if(t.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(t.mode==="returning"||t.mode==="docked")n=t.rest;else return!1;let s=n[0]-i.pos[0],r=n[1]-i.pos[1],o=Math.hypot(s,r);if(o<.02){if(t.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=sh(t.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),vm*e),!0)}let a=Math.atan2(s,r),l=sh(a-i.heading);if(i.heading=sh(i.heading+Math.sign(l)*Math.min(Math.abs(l),vm*e)),Math.abs(l)<.35){let c=Math.min(o,pM*e);i.pos=[i.pos[0]+s/o*c,i.pos[1]+r/o*c]}return!0}var yn=null,Mm=new Map;function wm(i,t=0){let e=new ee,n=new Le,s=Ae(i.type);if(s?.light)Il(e,s,{x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)oh(e,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:t,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let r={id:"preview",type:i.type,x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};Pl(e,n,new ee,r)}return{buf:e,lines:n}}function mM(i,t=180,e,n=1.3){let s=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${t}|${n}`,r=Mm.get(s);if(r)return r;e&&Gr(e),yn??=new ns({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),yn.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),yn.setSize(t,t,!1),yn.setClearColor(0,0);let{buf:o,lines:a}=wm(i),l=new bi,c=new Ut(o.geometry(),new ie({vertexColors:!0,color:new Q(n,n,n)})),u=new Ye(a.geometry(),new Xe({vertexColors:!0,color:new Q(n*1.8,n*1.8,n*1.8)}));l.add(c,u);let h=new on().setFromObject(c),f=h.getCenter(new G),d=new kn(-1,1,1,-1,.01,100);d.position.copy(f).add(new G(.9,.75,1.3).normalize().multiplyScalar(20)),d.lookAt(f),d.updateMatrixWorld();let p=.05;for(let m of[h.min.x,h.max.x])for(let _ of[h.min.y,h.max.y])for(let M of[h.min.z,h.max.z]){let v=new G(m,_,M).applyMatrix4(d.matrixWorldInverse);p=Math.max(p,Math.abs(v.x),Math.abs(v.y))}let x=p*1.12;d.left=-x,d.right=x,d.top=x,d.bottom=-x,d.updateProjectionMatrix(),yn.render(l,d);let g=yn.domElement.toDataURL("image/png");return c.geometry.dispose(),c.material.dispose(),u.geometry.dispose(),u.material.dispose(),Mm.set(s,g),g}function gM(i,t,e=160,n,s=1.25){let r=`front|${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${Math.round(t)}|${e}|${s}`,o=Sm.get(r);if(o)return o;n&&Gr(n);let{buf:a,lines:l}=wm(i,t),c=new Ut(a.geometry(),new ie({vertexColors:!0,color:new Q(s,s,s)})),u=new Ye(l.geometry(),new Xe({vertexColors:!0,color:new Q(s*1.8,s*1.8,s*1.8)})),h=new on().setFromObject(c);if(h.isEmpty())return null;let f=h.min.x,d=h.max.x,p=Math.max(0,h.min.y),x=h.max.y,g=Math.max(1,Math.min(1024,Math.round((d-f)*e))),m=Math.max(1,Math.min(1024,Math.round((x-p)*e)));yn??=new ns({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),yn.setPixelRatio(1),yn.setSize(g,m,!1),yn.setClearColor(0,0);let _=new bi;_.add(c,u);let M=new kn(f,d,x,p,.01,100);M.position.set(0,0,50),M.lookAt(0,0,0),M.updateProjectionMatrix(),yn.render(_,M);let v=yn.domElement.toDataURL("image/png");c.geometry.dispose(),c.material.dispose(),u.geometry.dispose(),u.material.dispose();let y={url:v,x0:f,x1:d,y0:p,y1:x};return Sm.set(r,y),y}var Sm=new Map;var gA={Group:Ue,Mesh:Ut,MeshBasicMaterial:ie,CanvasTexture:ei,Color:Q,PlaneGeometry:ni,BufferGeometry:qt,Float32BufferAttribute:Nt,DoubleSide:ue},Em={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},xM=2.4,Am=1.4,bM=.22,Rm=140,lh=32,vM=500,Cm=160,Pm=33,Im=.028,_M=.09,se=2767456,yM=1911110,MM=1,Lm=new Set(["ceiling","downlight","spot","panel","pendant","strip"]),Xl=450,Fm=125,SM=.08,ch={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},wM=new Q(1714765);function TM(){let t=navigator.deviceMemory??8,e=navigator.hardwareConcurrency||8;return t<=3||e<=4||/Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent)}var uh=class{host;options;renderer;scene=new bi;camera=new je(38,1,.1,400);controls;labels;root=new Ue;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];pipes=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];pools=[];poolActive=!1;soundActive=!1;flowTimer;persons=[];personPins=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;keepRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;selectedSet=[];theme="neon";themeUniform={value:0};sun=null;weather=null;rain=new Ye(new qt,new Xe({color:10471679,transparent:!0,opacity:.4,blending:Ce,depthWrite:!1}));snow=new Ns(new qt,new Ji({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));skyDisc=new Ut(new br(1,28),new ie({color:16767370,transparent:!0,opacity:0,blending:Ce,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;weatherLast=0;roomTint=null;houseRadius=20;startView=null;keepView=!1;keepNext=!1;fpsStart=0;gpuName;constructor(t,e={}){this.host=t,this.options=e,this.explode=e.explode??!0,this.renderer=this.makeRenderer(e.quality??"auto"),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",t.append(this.labels),this.patternTexture=AM(),this.blindTexture=CM(),this.haloTexture=IM(),this.ground=new Ut(new ni(1,1),new ie({transparent:!1,blending:Ce,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.skyDisc),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),document.addEventListener("visibilitychange",this.onVisibility),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let s=n.some(r=>r.isIntersecting);s!==this.onScreen&&(this.onScreen=s,s&&this.invalidate())}),this.intersection.observe(t)),this.resize()}get low(){return this.lowQuality}setParked(t){let e=[...t].map(([n,s])=>`${n}=${s}`).sort().join("|");e!==this.parkedSig&&(this.parkedSig=e,this.parked=t,this.building&&(this.rebuild(),this.invalidate()))}setStats(t){this.statsOn=t}setLabelInset(t){this.labelInset!==t&&(this.labelInset=t,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(t){this.orbitSpeed=t,this.orbitLast=0,this.invalidate()}setQuality(t){let e=this.renderer.domElement,n=this.makeRenderer(t);this.rebuildTier(),this.applyTierFlags(),e.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n;let s=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=s,this.resize()}setPacks(t){Gr(t),this.building&&(this.rebuild(),this.invalidate())}setBuilding(t){let e=this.building===null;this.building=t,Ed(t),this.rebuild(),e&&this.fit(0),this.invalidate()}setKeepView(t){this.keepView=t}setFloor(t,e=!0){this.keepNext=this.keepView&&t!==null&&this.floorId!==null&&t!==this.floorId,this.floorId=t,this.roomId=null,this.labelsDirty=!0,this.applyTargets(!e),this.applyHighlight(),this.fit(e?700:0)}setFloorStack(t){t!==this.floorStack&&(this.floorStack=t,this.applyTargets(!1))}setKeepRoof(t){t!==this.keepRoof&&(this.keepRoof=t,this.invalidate())}setExplode(t){t!==this.explode&&(this.explode=t,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(t){if(this.roomId=t,this.labelsDirty=!0,this.applyHighlight(),!t){this.fit(700);return}let e=this.floors.find(u=>u.floor.rooms.some(h=>h.id===t)),n=e?.floor.rooms.find(u=>u.id===t);if(!e||!n)return;let s=n.start_view;if(s){let u=e.floor.elevation+e.ty,[h,f]=Pi(n.points),d=s.target??{x:h,y:.3,z:f};this.controls.flyTo({target:new G(d.x,d.y+u,d.z),radius:s.radius,phi:s.phi,theta:s.theta});return}let[r,o]=Pi(n.points),a=n.points.map(u=>u[0]),l=n.points.map(u=>u[1]),c=new G(Math.max(...a)-Math.min(...a),e.floor.cut_height,Math.max(...l)-Math.min(...l));this.controls.flyTo({target:new G(r,e.floor.elevation+e.ty+.3,o),radius:Math.max(4,this.distanceFor(c)*1.05),phi:.72})}setWallMode(t){this.wallMode=t;for(let e of this.floors)this.buildLamps(e);this.invalidate()}setDevices(t){this.devices=t,this.labelsDirty=!0,this.effectFloors=new Set(t.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.deviceFloor=new Map(t.map(n=>[n.id,n.floorId]));let e=new Set;for(let n of t){e.add(n.id);let s=this.devicePins.get(n.id);s||(s={el:this.makeDevicePin(n.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(n.id,s),this.labels.append(s.el));let r=s.el;s.icon!==n.icon&&(s.icon=n.icon,r.querySelector(".fp3d-dev-icon").innerHTML=n.icon),s.text!==n.text&&(s.text=n.text,r.querySelector(".fp3d-dev-text").textContent=n.text);let o=n.caption??"";s.caption!==o&&(s.caption=o,r.querySelector(".fp3d-dev-name").textContent=o);let a=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";s.watt!==a&&(s.watt=a,r.querySelector(".fp3d-dev-watt").textContent=a);let l=`${n.name}: ${n.text}`;s.label!==l&&(s.label=l,r.title=n.name,r.setAttribute("aria-label",l)),s.active!==n.active&&(s.active=n.active,r.classList.toggle("fp3d-dev-on",n.active)),s.unavailable!==n.unavailable&&(s.unavailable=n.unavailable,r.classList.toggle("fp3d-dev-na",n.unavailable));let c=n.glow?`rgb(${n.glow.color.map(u=>Math.round(u*255)).join(", ")})`:"";s.glow!==c&&(s.glow=c,c?r.style.setProperty("--fp3d-glow",c):r.style.removeProperty("--fp3d-glow"))}for(let[n,s]of this.devicePins)e.has(n)||(s.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(t){let e=JSON.stringify([...t]);if(e!==this.roofWindowsKey){this.roofWindowsKey=e,this.roofWindows=t,this.buildRoofMesh();for(let n of this.floors)this.buildSun(n);this.invalidate()}}setAnchorCallback(t){this.anchorCb=t,this.labelsDirty=!0,this.invalidate()}setAnchors(t){this.anchors=t,this.labelsDirty=!0,this.invalidate()}setSolarLevels(t){this.solarLevels=t;let e=!1;for(let n of this.roof?.lives??[])fo(n,t)&&(e=!0);for(let n of this.floors)n.solarLive&&fo(n.solarLive,t)&&(e=!0);this.solarActive=e,this.invalidate()}setPools(t){let e=n=>n.map(s=>`${s.id}:${s.floorId}:${s.points.length}:${s.points[0]?.join(",")}:${s.y.toFixed(3)}:${s.color.map(r=>r.toFixed(2)).join("/")}:${s.level.toFixed(2)}:${s.flow?1:0}:${s.heat?1:0}:${s.cover.toFixed(2)}`).join(";");if(e(t)!==e(this.pools)){this.pools=t,this.poolActive=t.some(n=>n.flow);for(let n of this.floors)this.buildPoolWater(n);this.invalidate()}}buildPoolWater(t){t.poolGroup&&(rm(t.poolGroup),t.group.remove(t.poolGroup),t.poolGroup=void 0);let e=this.pools.filter(n=>n.floorId===t.floor.id);e.length&&(t.poolGroup=sm(e,this.flowTime),t.group.add(t.poolGroup))}setSound(t){let e=n=>n.map(s=>`${s.id}:${s.floorId}:${s.x},${s.z}:${s.level.toFixed(2)}:${s.playing?1:0}:${s.members.join("+")}`).join(";");if(e(t)!==e(this.sound)){this.sound=t,this.soundActive=t.some(n=>n.playing);for(let n of this.floors){let s=n.soundGroup??=(()=>{let c=new Ue;return c.renderOrder=6,n.group.add(c),c})();for(let c of[...s.children])s.remove(c),c.geometry?.dispose(),c.material?.dispose?.();let r=t.filter(c=>c.floorId===n.floor.id),o=n.floor.elevation+.03;for(let c of r)if(c.playing)for(let u=0;u<3;u++){let h=new Ut(new Sr(.92,1,48),new ie({color:3662079,transparent:!0,opacity:0,blending:Ce,depthWrite:!1,side:ue}));h.rotation.x=-Math.PI/2,h.position.set(c.x,o+u*.002,c.z),h.userData={sound:!0,phase:u/3,level:c.level},h.frustumCulled=!1,s.add(h)}let a=[],l=new Set;for(let c of r)for(let u of c.members){let h=r.find(d=>d.id===u);if(!h||h===c)continue;let f=[c.id,h.id].sort().join("|");l.has(f)||(l.add(f),a.push(c.x,o+.02,c.z,h.x,o+.02,h.z))}if(a.length){let c=new qt;c.setAttribute("position",new Nt(a,3));let u=new Ye(c,new Xe({color:3662079,transparent:!0,opacity:.45,blending:Ce,depthWrite:!1}));u.userData={soundLine:!0},s.add(u)}}this.invalidate()}}animateSound(t){let e=t/1e3;for(let n of this.floors)if(n.soundGroup)for(let s of n.soundGroup.children){if(!s.userData.sound)continue;let r=(e*.45+s.userData.phase)%1,o=s.userData.level,a=.25+r*(.9+1.6*o);s.scale.set(a,a,1),s.material.opacity=(1-r)*(.25+.45*o)}}setFlows(t){this.flows=t;let e=this.flowSeconds(),n=new Map;for(let s of t){let r=ah(s),o=Dm(s.power),a=this.flowPhase.get(r);n.set(r,{speed:o,offset:a?e*(a.speed-o)+a.offset:0})}this.flowPhase=n,this.flowActive=t.some(s=>s.power>.5);for(let s of this.floors)this.buildFlows(s);this.invalidate()}setPipes(t){this.pipes=t;for(let e of this.floors)this.buildPipes(e);this.invalidate()}buildPipes(t){let e=this.pipes.filter(r=>r.floorId===t.floor.id),n=JSON.stringify(e);if(n===t.pipeSig)return;t.pipeSig=n;let s=new ee;for(let r of e)tm(s,r);t.pipeMesh.geometry.dispose(),t.pipeMesh.geometry=s.geometry(),t.pipeMesh.visible=s.count>0}setPersons(t){this.labelsDirty=!0,this.persons=t;let e=new Set;for(let n of t){e.add(n.id);let s=this.personPins.get(n.id);if(s||(s=document.createElement("div"),s.className="fp3d-person",s.dataset.entity=n.id,this.personPins.set(n.id,s),this.labels.append(s)),s.title=n.name,s.setAttribute("aria-label",n.name),s.dataset.picture!==(n.picture??"")||s.dataset.initials!==n.initials)if(s.dataset.picture=n.picture??"",s.dataset.initials=n.initials,s.replaceChildren(),n.picture){let r=document.createElement("img");r.src=n.picture,r.alt="",r.addEventListener("error",()=>r.replaceWith(document.createTextNode(n.initials))),s.append(r)}else s.textContent=n.initials}for(let[n,s]of this.personPins)e.has(n)||(s.remove(),this.personPins.delete(n));this.invalidate()}setPickTargets(t,e){this.pickFurniture=t,this.pickOpenings=e}setAccent(t){let e=lm(t),n=e?1:0;n===Gl.value&&(!e||Vl.value.equals(new G(...e)))||(Gl.value=n,e&&Vl.value.set(...e),this.invalidate())}setTheme(t){if(t===this.theme)return;this.theme=t,this.themeUniform.value=am(t);let e=po(t),n=[...this.floors.map(s=>s.materials.lines),...this.roof?[this.roof.lines]:[]];for(let s of n)s.blending=e,s.needsUpdate=!0;this.placeGround(),this.invalidate()}setFurnishMode(t){this.furnish=t,t||this.selectFurniture(null),this.invalidate()}selectFurniture(t){t&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=t,this.updateGhost(),this.invalidate()}selectFurnitureSet(t){this.selectedSet=[...t],this.updateGhost(),this.invalidate()}setSun(t){this.sun=t;for(let e of this.floors)this.buildSun(e);this.placeSky(),this.invalidate()}setWeather(t){this.weather=t;for(let e of this.floors)this.buildSun(e);this.applyWeather(),this.placeSky(),this.invalidate()}applyWeather(){let t=this.weather,e=!!t&&!this.lowQuality,n=t?new Q(t.sky[0]/255,t.sky[1]/255,t.sky[2]/255):null;this.scene.fog=e&&t.fog>0&&n?new dr(n,.01+.035*t.fog):null;let s=e?Math.round(700*t.rain):0,r=e?Math.round(450*t.snow):0;this.seedParticles(this.rain,s*2,!0),this.seedParticles(this.snow,r,!1),this.rain.visible=s>0,this.snow.visible=r>0}seedParticles(t,e,n){if((t.geometry.getAttribute("position")?.count??0)===e)return;let r=this.weatherBox,o=new Float32Array(e*3),a=n?2:1;for(let c=0;c<e;c+=a){let u=r.x0+Math.random()*(r.x1-r.x0),h=r.y0+Math.random()*(r.y1-r.y0),f=r.z0+Math.random()*(r.z1-r.z0);o.set([u,h,f],c*3),n&&o.set([u,h-.45,f],c*3+3)}t.geometry.dispose();let l=new qt;l.setAttribute("position",new Nt(o,3)),t.geometry=l}stepWeather(t){let e=this.weather;if(!e||!this.rain.visible&&!this.snow.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(t-this.weatherLast)/1e3):0;if(this.weatherLast=t,!n)return!0;let s=this.weatherBox,r=s.y1-s.y0,o=e.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*e.rain)*n;for(let u=0;u<l.length;u+=6){let h=l[u+1]-c,f=l[u]+o*n;h<s.y0&&(h+=r,f=s.x0+Math.random()*(s.x1-s.x0)),f>s.x1&&(f-=s.x1-s.x0),l[u]=f,l[u+1]=h,l[u+3]=f-o*.05,l[u+4]=h-.45,l[u+5]=l[u+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=t/1e3;for(let u=0;u<l.length;u+=3){let h=l[u+1]-(.9+.6*e.snow)*n,f=l[u]+(o+Math.sin(c+u)*.4)*n;h<s.y0&&(h+=r,f=s.x0+Math.random()*(s.x1-s.x0)),f>s.x1&&(f-=s.x1-s.x0),l[u]=f,l[u+1]=h}a.needsUpdate=!0}return!0}placeSky(){let t=this.sun,e=this.weather,n=e?.cloud??0,s=!t||t.elevation<-3;if(!t||!e||e.disc===!1||n>.85||!s&&t.elevation<1){this.skyDisc.visible=!1;return}let r=(this.building?.settings.north??0)*he,o=(s?t.azimuth+180:t.azimuth)*he,a=Math.max(10,Math.abs(t.elevation))*he,l=this.weatherBox,c=new G((l.x0+l.x1)/2,l.y0,(l.z0+l.z1)/2),u=Math.min(300,Math.max(80,this.houseRadius*5)),h=new G(Math.sin(r+o)*Math.cos(a),Math.sin(a),-Math.cos(r+o)*Math.cos(a));this.skyDisc.position.copy(c).addScaledVector(h,u),this.skyDisc.scale.setScalar(u*(s?.03:.04)),this.skyDisc.lookAt(c);let f=this.skyDisc.material;f.color.set(s?13621486:16767370),f.opacity=(s?.55:.85)*(1-n),this.skyDisc.visible=!0}setRoomTint(t){let e=!!t!=!!this.roomTint;if(this.roomTint=t,this.tintTick=!0,this.applyHighlight(),e)for(let n of this.floors)n.glowSig="",this.buildGlow(n)}setScreens(t){this.screens=t;for(let e of this.floors)this.buildScreens(e);this.invalidate()}fillRoomPin(t,e,n){if(t.textContent=e||"\u2013",n){let s=document.createElement("small");s.textContent=n,t.append(s),t.classList.add("fp3d-pin-info")}else t.classList.remove("fp3d-pin-info")}setRoomInfo(t){if(!(t.size===this.roomInfo.size&&[...t].every(([n,s])=>this.roomInfo.get(n)===s))){this.roomInfo=t;for(let n of this.floors)for(let s of n.roomPins)this.fillRoomPin(s.pin,s.room.name,t.get(s.room.id))}}setFloorInfo(t){this.floorInfo=t;for(let e of this.floors){let n=e.label.querySelector("span"),s=t.get(e.floor.id)??this.options.floorInfo?.(e.floor)??"";n&&n.textContent!==s&&(n.textContent=s,e.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(t,e=!1){if(this.openingTargets=t,e)for(let n of this.floors){let s=!1;for(let[r,o]of n.openings){let a=t.get(r)??go,l={...a,open2:a.open2??0,tilt2:a.tilt2??0};l.open===o.open&&l.open2===(o.open2??0)&&l.tilt===o.tilt&&l.tilt2===(o.tilt2??0)&&l.cover===o.cover&&!!l.sensed==!!o.sensed||(n.openings.set(r,l),s=!0)}s&&(this.buildOpenings(n),this.buildGlow(n),this.buildSun(n))}this.invalidate()}setFridgeDoors(t){for(let[e,n]of t){let s=this.fridges.get(e)??{l:n.left?1:0,r:n.right?1:0,tl:0,tr:0};s.tl=n.left?1:0,s.tr=n.right?1:0,this.fridges.set(e,s)}for(let e of[...this.fridges.keys()])t.has(e)||this.fridges.delete(e);this.invalidate()}stepFridges(t){let e=1-Math.exp(-t/Cm),n=new Set;for(let[s,r]of this.fridges)for(let[o,a]of[["l","tl"],["r","tr"]]){let l=r[a]-r[o];if(Math.abs(l)<.004){l!==0&&(r[o]=r[a],n.add(s));continue}r[o]+=l*e,n.add(s)}if(!n.size)return!1;for(let s of this.floors)s.floor.furniture.some(r=>n.has(r.id))&&this.buildFridges(s);return!0}buildFridges(t){let e=new ee;for(let n of t.floor.furniture){if(n.type!=="fridge_smart")continue;let s=this.fridges.get(n.id);Mp(e,n,mn(t.floor,n),s?.l??0,s?.r??0)}t.fridgeMesh.geometry.dispose(),t.fridgeMesh.geometry=e.geometry(),t.fridgeMesh.visible=e.count>0}resetView(){this.fit(700)}setStartView(t){this.startView=t}currentView(){let t=this.controls.view,e=this.floorBase(this.floorId);return{theta:Math.atan2(Math.sin(t.theta),Math.cos(t.theta)),phi:t.phi,radius:t.radius,target:{x:t.target.x,y:t.target.y-e,z:t.target.z}}}floorBase(t){let e=t===null?void 0:this.floorMap.get(t);return e?e.floor.elevation+e.ty:0}dispose(){this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let t of[this.rain,this.snow,this.skyDisc])t.geometry.dispose(),t.material.dispose();this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility),this.controls.dispose(),this.clear(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let t of this.robots.values())t.led.dispose();this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(t=>this.render(t)))}makeRenderer(t){let e=t==="low"||t==="auto"&&TM();this.lowQuality=e,this.applyWeather(),this.highQuality=t==="high";let n=new ns({antialias:!e,alpha:!0,powerPreference:e?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1:t==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=Ie,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new kl(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(t,e)=>this.onTap(t,e),hold:(t,e)=>this.onHold(t,e),swipeStart:(t,e,n,s)=>this.swipeStart(t,e,n,s),swipeMove:t=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",t,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(t,e)=>this.grabFurniture(t,e),drag:(t,e)=>this.dragFurniture(t,e),drop:()=>this.dropFurniture(),doubleTap:(t,e)=>{let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(t,e):null;n&&!("entity"in n)&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):this.options.onBack?.()}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let t=this.host.clientWidth||1,e=this.host.clientHeight||1;this.size={w:t,h:e},this.labelsDirty=!0,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.invalidate()}clear(){for(let t of this.robots.values())t.group.removeFromParent();for(let t of this.floors){for(let e of t.screenPics.values())e.mesh.material.dispose(),e.texture?.dispose();t.group.traverse(e=>{e.geometry?.dispose()});for(let e of Object.values(t.materials))e.dispose();this.root.remove(t.group)}this.floors=[],this.floorMap=new Map;for(let t of[...this.labels.children])t.dataset.entity||t.remove()}makeDevicePin(t){let e=document.createElement("button");e.className="fp3d-dev",e.dataset.entity=t;let n=document.createElement("span");n.className="fp3d-dev-icon";let s=document.createElement("span");s.className="fp3d-dev-text";let r=document.createElement("span");r.className="fp3d-dev-watt";let o=document.createElement("span");o.className="fp3d-dev-name",e.append(n,s,r,o);let a,l=!1;e.addEventListener("pointerdown",u=>{if(this.furnish){this.pendingDevice=t;return}u.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{l=!0;let h=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,h.left+h.width/2-f.left,h.top+h.height/2-f.top)},vM)});let c=()=>clearTimeout(a);return e.addEventListener("pointerleave",c),e.addEventListener("pointercancel",c),e.addEventListener("pointerup",c),e.addEventListener("contextmenu",u=>u.preventDefault()),e.addEventListener("click",u=>{if(u.stopPropagation(),this.furnish){this.selectDevice(t),this.options.onDeviceSelect?.(t);return}if(l)return;let h=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceTap?.(t,h.left+h.width/2-f.left,h.top+h.height/2-f.top)}),e.addEventListener("keydown",u=>{if(u.key==="Enter"&&u.shiftKey||u.key==="ContextMenu"){u.preventDefault();let h=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,h.left+h.width/2-f.left,h.top+h.height/2-f.top)}}),e}buildLightSurface(t){let e=this.lowQuality?.5:.25,n=um(t.floor,t.geo.walls2d,t.geo.wallBuckets,t.geo.openings,e,t.geo.holes,t.geo.roofUnder),s=Nm(t.floor,t.geo.openRooms);if(t.lightZones=s.some((a,l)=>a!==l)?s:null,t.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<s.length&&(n.room[a]=s[l])}for(let a of n.doors)a.a>=0&&a.a<s.length&&(a.a=s[a.a]),a.b>=0&&a.b<s.length&&(a.b=s[a.b]);for(let a of n.blockers)a.ra=Hl(s,a.ra),a.rb=Hl(s,a.rb)}t.lightSurface=n;let r=new qt;r.setAttribute("position",new Nt(n.pos,3)),r.setAttribute("color",new Nt(new Float32Array(n.pos.length),3)),r.setAttribute("fold",new Nt(n.fold,1));let o=new $i(new Uint32Array(n.pos.length/3),1);o.setUsage(Zc),r.setIndex(o),r.setDrawRange(0,0),r.computeBoundingSphere(),t.glowMesh.geometry.dispose(),t.glowMesh.geometry=r,t.glowSig="",this.buildGlow(t)}lightSources(t){let e=[];for(let n of this.devices){let s=this.glowOf(n);if(n.floorId!==t.floor.id||!s)continue;let r=n.top??t.floor.height,o=dm(t.floor,n.x,n.z),a=Hl(t.lightZones,o),[l,,c]=n.size??(n.lamp?ch[n.lamp]:[.3,.3,.3]),u=n.base??0,h={ceiling:[r-.12,"ceiling"],downlight:[r-.03,"spot"],spot:[r-c,"spot"],panel:[r-.05,"ceiling"],pendant:[Math.max(.5,r-c),"pendant"],floor:[u+c-.15,"omni"],uplight:[u+c,"up"],table:[u+c-.1,"omni"],wall:[u+.1,"wall"],strip:[u+Math.max(.02,c)-.01,u<MM?"up":"ceiling"],bollard:[u+c-.08,"ceiling"],garden:[u+c,"up"]},[f,d]=n.lamp?h[n.lamp]:[n.y,"omni"],p=n.lightY??f,x=s.color;if(n.lamp==="strip"){let g=(n.rotation??0)*he,m=!!n.upright||Math.abs(n.roll??0)>45;for(let _ of[-1/3,0,1/3])n.upright?e.push({x:n.x,y:u+l*(.5+_),z:n.z,color:x,level:s.level*.55,kind:"omni",room:a}):e.push({x:n.x+Math.cos(g)*l*_,y:p,z:n.z+Math.sin(g)*l*_,color:x,level:s.level*.55,kind:m?"omni":d,room:a})}else e.push({x:n.x,y:p,z:n.z,color:x,level:s.level,kind:d,room:a})}return e}buildGlow(t){let e=t.lightSurface;if(!e)return;let n=this.lightSources(t),s=e.doors.map(h=>{let f=t.geo.openings.find(p=>p.opening.id===h.id);if(f&&is(f.opening,f.exterior)==="passage")return 1;let d=t.openings.get(h.id);return d?Math.max(d.open,d.open2??0):.5}),r=n.map(h=>`${h.x.toFixed(2)},${h.y.toFixed(2)},${h.z.toFixed(2)},${h.kind},${h.level.toFixed(3)},${h.color.map(f=>f.toFixed(3)).join("/")}`).join(";")+"|"+s.map(h=>h.toFixed(1)).join(",");if(r===t.glowSig)return;t.glowSig=r;let o=t.glowMesh.geometry,a=o.getAttribute("color");if(!n.length){t.glowMesh.visible=!1,o.setDrawRange(0,0);return}let l=fm(e,n,.42,s);if(this.roomTint){let h=t.floor.rooms.length;for(let f=0;f<e.room.length;f++)if(e.room[f]!==h)for(let d=0;d<3;d++)l[f*3+d]*=.12}a.array.set(l),a.needsUpdate=!0;let c=o.index.array,u=0;for(let h=0;h<l.length/18;h++){let f=!1;for(let d=h*18;d<h*18+18&&!f;d++)f=l[d]>.004;if(f)for(let d=0;d<6;d++)c[u++]=h*6+d}o.index.needsUpdate=!0,o.setDrawRange(0,u),t.glowMesh.visible=u>0}makeMaterials(t){return{floor:sn(new ie({vertexColors:!0}),this.themeUniform),pattern:RM(this.patternTexture),wall:sn(zi(new ie({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),t,"solid"),this.themeUniform),glassWall:zi(new ie({vertexColors:!0,transparent:!0,depthWrite:!1}),t,"glass"),shadow:new ie({vertexColors:!0,blending:Cr,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:ue,polygonOffset:!0,polygonOffsetFactor:-1}),lines:sn(zi(new Xe({vertexColors:!0,transparent:!0,blending:po(this.theme),depthWrite:!1}),t),this.themeUniform,!0),glow:zi(new ie({vertexColors:!0,transparent:!0,blending:Ce,depthWrite:!1,side:ue,polygonOffset:!0,polygonOffsetFactor:-3}),t,"solid"),frames:sn(zi(new ie({vertexColors:!0,side:ue}),t),this.themeUniform),glass:zi(new ie({vertexColors:!0,transparent:!0,blending:Ce,depthWrite:!1,side:ue}),t),blinds:sn(zi(new ie({map:this.blindTexture,vertexColors:!0,side:ue}),t),this.themeUniform),water:sn(new ie({vertexColors:!0,transparent:!0,opacity:.5,depthWrite:!1,side:ue}),this.themeUniform),flow:PM(this.flowTime),solarLive:nh(this.flowTime),lamps:sn(new ie({vertexColors:!0}),this.themeUniform),halos:new Ji({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:Ce,depthWrite:!1}),cones:new ie({vertexColors:!0,transparent:!0,blending:Ce,depthWrite:!1,side:ue}),screens:new ie({vertexColors:!0,transparent:!0,blending:Ce,depthWrite:!1,side:ue}),earth:sn(new ie({vertexColors:!0}),this.themeUniform),earthWell:sn(new ie({vertexColors:!0,side:ue}),this.themeUniform),earthLines:sn(new Xe({vertexColors:!0,transparent:!0,depthWrite:!1}),this.themeUniform,!0)}}rebuild(){let t=new Map(this.floors.map(r=>[r.floor.id,{y:r.y,o:r.o}])),e=new Map(this.floors.map(r=>[r.floor.id,r.openings]));this.clear();let n=this.building;if(!n)return;let s=[...n.floors].sort((r,o)=>r.elevation-o.elevation);for(let r of n.floors){let o=n.settings.roof?.solar??[],a=Xu(n)?.id===r.id?o.filter(X=>X.face===Wu).map(X=>({field:X,face:Cp(n,X)})):[],l=o.filter(X=>X.face.startsWith(`wall:${r.id}:`));if(l.length){let X=new Map(Rp(n,r.id).map(it=>[it.key,it]));for(let it of l){let ut=X.get(it.face);ut&&a.push({field:it,face:ut})}}let u=(n.settings.roof.sections??[]).some(X=>Xd(X,r.elevation+r.height))?(X,it)=>{let ut=Yd(n,X,it);return ut===null?null:ut-r.elevation}:void 0,h=Hp(th(r,this.parked),n.settings.wall_exterior,n.settings.wall_interior,Wp(n.floors,r),a,u),f={standing:{value:65535},glass:{value:0}},d=this.makeMaterials(f),p=new Ue,x=new Ut(h.floor,d.floor),g=new Ut(h.shadow,d.shadow);g.renderOrder=1;let m=new Ut(h.floor,d.pattern);m.renderOrder=2;let _=new Ut(new qt,d.glow);_.renderOrder=3,_.visible=!1;let M=new Ut(new qt,d.frames),v=new Ut(new qt,d.blinds),y=new Ut(new qt,d.glass);y.renderOrder=4;let w=new Ut(new qt,d.lamps);w.visible=!1;let T=new Ut(new qt,d.cones);T.visible=!1,T.renderOrder=3;let b=new Ns(new qt,d.halos);b.visible=!1,b.renderOrder=7;let S=new Ut(new qt,d.cones);S.visible=!1,S.renderOrder=7;let E=new Ut(new qt,d.cones);E.visible=!1,E.renderOrder=7;let P=new Ut(new qt,d.lamps);P.visible=!1;let A=new Ut(new qt,d.lamps);A.visible=!1;let I=new Ut(new qt,d.screens);I.visible=!1,I.renderOrder=5;let R=new Ut(new qt,d.flow);R.renderOrder=5,R.frustumCulled=!1;let L=eh(a,r.elevation),N=L?new Ut(L.geometry,d.solarLive):null;N&&(N.renderOrder=6,fo(L,this.solarLevels));for(let X of[M,v,y])X.frustumCulled=!1;let U=new Ut(h.walls,d.glassWall),k=new Ut(h.walls,d.wall);U.renderOrder=6;let B=new Ut(h.water,d.water);B.renderOrder=4;let z=cp(n,r,h.openings),V=z?[new Ut(z.earth.geometry(),d.earth),new Ut(z.wells.geometry(),d.earthWell),new Ye(z.lines.geometry(),d.earthLines)]:[];for(let X of V)X.userData.earth=!0;p.add(x,g,m,_,k,B,new Ye(h.lines,d.lines),M,v,y,R,w,T,b,S,E,P,A,I,U,...N?[N]:[],...V),this.root.add(p);let st=document.createElement("button");st.className="fp3d-pin fp3d-pin-floor",st.dataset.floor=r.id;let $=document.createElement("b");$.textContent=r.name||"\u2013";let ot=document.createElement("span");ot.textContent=this.floorInfo.get(r.id)??this.options.floorInfo?.(r)??"",st.append($,ot),st.addEventListener("click",()=>this.options.onFloorTap?.(r.id)),this.labels.append(st);let ct=t.get(r.id),pt=[],q=null;for(let X of r.rooms){let it=document.createElement("button");it.className="fp3d-pin",it.dataset.room=X.id,it.dataset.floor=r.id,this.fillRoomPin(it,X.name,this.roomInfo.get(X.id)),it.addEventListener("click",()=>this.options.onRoomTap?.(r.id,X.id)),this.labels.append(it);let[ut,ht]=Pi(X.points);pt.push({pin:it,room:X,cx:ut,cz:ht});for(let[Pt,te]of X.points)q??={x0:Pt,x1:Pt,z0:te,z1:te},q.x0=Math.min(q.x0,Pt),q.x1=Math.max(q.x1,Pt),q.z0=Math.min(q.z0,te),q.z1=Math.max(q.z1,te)}this.floors.push({floor:r,rank:s.indexOf(r),group:p,geo:h,floorMesh:x,shadowMesh:g,patternMesh:m,glowMesh:_,lightSurface:null,lightZones:null,framesMesh:M,glassMesh:y,blindsMesh:v,flowMesh:R,solarMesh:N,solarLive:L,lampMesh:w,sunMesh:T,sunSig:"",haloMesh:b,coneMesh:S,trailMesh:E,fridgeMesh:P,pipeMesh:A,pipeSig:"",lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:k,screenMesh:I,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:q,roomPins:pt,labelSize:null,materials:d,mask:f,openings:new Map,y:ct?.y??0,o:ct?.o??1,ty:0,to:1,appliedO:-1,label:st})}this.floorMap=new Map(this.floors.map(r=>[r.floor.id,r]));for(let r of this.floors)this.buildFridges(r),this.buildPipes(r);this.labelsDirty=!0,this.floorId&&!n.floors.some(r=>r.id===this.floorId)&&(this.floorId=null);for(let r of this.floors){this.buildLamps(r),this.buildScreens(r);let o=e.get(r.floor.id);for(let a of r.geo.openings)r.openings.set(a.opening.id,o?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??go);this.buildOpenings(r),this.buildFlows(r),r.poolGroup=void 0,this.buildPoolWater(r),this.buildLightSurface(r),this.buildSun(r)}this.applyTargets(t.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.updateGhost()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(p=>p.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.roof.wins.traverse(p=>p.geometry?.dispose()),this.roof.winSolid.dispose(),this.roof.winLines.dispose(),this.scene.remove(this.roof.wins),this.scene.remove(this.roof.group),this.roof=null);let t=this.building?Bp(this.building,this.roofWindows):[];if(!t.length)return;let e=new Map(cs(this.building).map(p=>[p.key,p])),n=this.building.settings.roof?.solar??[],s=nh(this.flowTime),r=[],o=new Ue,a=sn(new ie({vertexColors:!0,transparent:!0,side:ue}),this.themeUniform),l=sn(new Xe({vertexColors:!0,transparent:!0,blending:po(this.theme),depthWrite:!1}),this.themeUniform,!0),c=sn(new ie({vertexColors:!0,transparent:!0,side:ue,depthWrite:!1}),this.themeUniform),u=new Ue,h=sn(new ie({vertexColors:!0,side:ue}),this.themeUniform),f=sn(new Xe({vertexColors:!0,transparent:!0,blending:po(this.theme),depthWrite:!1}),this.themeUniform,!0),d=t.map(p=>{let x=new Ue;x.add(new Ut(p.solid.geometry(),a),new Ye(p.lines.geometry(),l)),p.glass.count&&x.add(new Ut(p.glass.geometry(),c));let g=n.flatMap(M=>{let v=e.get(M.face);return v&&(v.section?p.sections?.includes(v.section):p===t[0])?[{face:v,field:M}]:[]}),m=eh(g,p.floor.elevation+p.base);if(m){let M=new Ut(m.geometry,s);M.renderOrder=9,x.add(M),r.push(m),fo(m,this.solarLevels)}p.winRoof?.solid.count&&x.add(new Ut(p.winRoof.solid.geometry(),h),new Ye(p.winRoof.lines.geometry(),f)),x.renderOrder=8,o.add(x);let _=null;return p.win?.solid.count&&(_=new Ue,_.add(new Ut(p.win.solid.geometry(),h),new Ye(p.win.lines.geometry(),f)),u.add(_)),{group:x,floorId:p.floor.id,rideId:Qd(this.building,p.floor,p.sections??[]),base:p.base,lift:p.lift!==!1,win:_}});o.renderOrder=8,this.scene.add(o),this.scene.add(u),this.roof={group:o,parts:d,solid:a,lines:l,glass:c,live:s,lives:r,wins:u,winSolid:h,winLines:f},this.placeRoof()}placeRoof(t=1e3){let e=this.roof;if(!e)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),r=(this.floorId===null||this.floors.length===1)&&this.wallMode!=="cut"?.94*n:0,o=1-Math.exp(-t/Rm),a=this.roofO;this.roofO+=(r-this.roofO)*o,Math.abs(r-this.roofO)<.004&&(this.roofO=r),e.group.visible=this.roofO>.02;for(let l of e.parts){let c=this.floorMap.get(l.floorId);if(!c)continue;let u=this.floorMap.get(l.rideId)??c,h=u.ty>0?Math.min(1,u.y/u.ty):this.explode&&this.floorId===null?1:0;l.group.position.y=c.floor.elevation+u.y+l.base+(1-this.roofO)*2.2+(l.lift?h*Am:0),l.win&&(l.win.position.y=c.floor.elevation+u.y+l.base+(l.lift?h*Am:0),l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}return e.solid.opacity=this.roofO,e.solid.depthWrite=this.roofO>.9,e.lines.opacity=this.roofO,e.glass.opacity=this.roofO*.28,e.live.opacity=this.roofO,this.roofO!==a&&this.roofO!==r}applyTierFlags(){let t=this.lowQuality;this.ground.visible=!t&&this.theme!=="day"&&this.floors.some(e=>e.floor.rooms.length>0);for(let e of this.floors)e.patternMesh.visible=!t,e.shadowMesh.visible=!t&&e.o>.98;this.invalidate()}rebuildTier(){for(let t of this.floors)t.flowLayout="",this.buildFlows(t),this.buildLightSurface(t),t.lampShapeSig="",this.buildLamps(t)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(t){let e=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let s=0,r=1;e?n.rank>e.rank?(s=5+n.rank,r=0):n.rank<e.rank&&(this.floorStack==="stacked"?s=0:(s=-.4,r=this.floorStack==="single"?0:bM)):s=this.explode?n.rank*xM:0,n.ty=s,n.to=r;let a=e===n?qe:Vn;n.materials.earth.side!==a&&(n.materials.earth.side=a,n.materials.earth.needsUpdate=!0),t&&(n.y=s,n.o=r),this.applyFloor(n)}this.invalidate()}applyFloor(t){if(t.group.position.y=t.floor.elevation+t.y,t.group.visible=t.o>.02,t.shadowMesh.visible=t.o>.98&&!this.lowQuality,Math.abs(t.appliedO-t.o)<.001)return;t.appliedO=t.o;let e=t.materials,n=t.o>.999;for(let s of[e.floor,e.wall,e.frames,e.blinds,e.lamps])s.transparent===n&&(s.transparent=!n,s.depthWrite=n,s.needsUpdate=!0),s.opacity=t.o;e.pattern.opacity=t.o,e.glow.opacity=t.o,e.lines.opacity=t.o,e.glass.opacity=t.o,e.glassWall.opacity=t.o,e.flow.opacity=t.o,e.solarLive.opacity=t.o,e.lamps.opacity=t.o,e.halos.opacity=t.o,e.cones.opacity=t.o,e.screens.opacity=t.o;for(let s of[e.earth,e.earthWell])s.transparent===n&&(s.transparent=!n,s.depthWrite=n,s.needsUpdate=!0),s.opacity=t.o;e.earthLines.opacity=t.o;for(let s of t.screenPics.values()){let r=s.mesh.material;r.transparent=t.o<.999,r.opacity=t.o}}stepFloors(t){let e=!1,n=1-Math.exp(-t/Rm);for(let s of this.floors){let r=s.ty-s.y,o=s.to-s.o;if(Math.abs(r)<.004&&Math.abs(o)<.004){(r!==0||o!==0)&&(s.y=s.ty,s.o=s.to,this.labelsDirty=!0,this.applyFloor(s));continue}s.y+=r*n,s.o+=o*n,e=!0,this.applyFloor(s)}return e}stepOpenings(t){let e=!1,n=1-Math.exp(-t/Cm);for(let s of this.floors){let r=!1;for(let[o,a]of s.openings){let l=this.openingTargets.get(o)??go,c=(f,d)=>(f??null)===(d??null)||typeof f=="number"&&typeof d=="number"&&Math.abs(f-d)<.003;if(c(l.open,a.open)&&c(l.open2??0,a.open2??0)&&c(l.tilt,a.tilt)&&c(l.tilt2??0,a.tilt2??0)&&c(l.cover,a.cover)&&!!l.sensed==!!a.sensed)continue;let u={...a,open2:a.open2??0,tilt2:a.tilt2??0,sensed:l.sensed},h=!1;for(let f of["open","open2","tilt","tilt2"]){let d=l[f]??0,p=a[f]??0,x=d-p;Math.abs(x)<.003?u[f]=d:(u[f]=p+x*n,h=!0)}if(l.cover===null||a.cover===null)u.cover=l.cover;else{let f=l.cover-a.cover;Math.abs(f)<.003?u.cover=l.cover:(u.cover=a.cover+f*n,h=!0)}(u.open!==a.open||u.open2!==(a.open2??0)||u.tilt!==a.tilt||u.tilt2!==(a.tilt2??0)||u.cover!==a.cover||!!u.sensed!=!!a.sensed)&&(s.openings.set(o,u),r=!0),e||=h}r&&(this.buildOpenings(s),this.buildGlow(s),this.buildSun(s))}return e}glowOf(t){if(!t.glow||!t.effect)return t.glow;let e=new Q(...t.glow.color),n={h:0,s:0,l:0};e.getHSL(n);let s=(t.x*.37+t.z*.61)%1;return e.setHSL((n.h+this.effectTime*SM+s)%1,Math.max(.6,n.s),Math.min(.6,Math.max(.45,n.l))),{color:[e.r,e.g,e.b],level:t.glow.level}}buildLamps(t){let e=performance.now(),n=u=>{let h=this.flashes.get(u);if(!h||h<=e)return 0;let f=h-e,d=f>Xl?.5+.5*Math.sin(f/140):f/Xl;return Math.round(d*10)/10},s=this.devices.filter(u=>u.floorId===t.floor.id&&(u.lamp||u.model)),r=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+s.map(u=>`${u.id},${u.lamp??u.model},${u.variant},${u.x},${u.z},${u.y},${u.rotation??0},${u.roll??0},${u.upright?1:0},${u.size?.join("/")},${u.base??0},${u.pack??""},${u.mirror?1:0}`).join(";"),o=s.map(u=>this.glowOf(u)),a=s.map((u,h)=>`${n(u.id)},${o[h]?`${o[h].level.toFixed(3)},${o[h].color.map(f=>f.toFixed(3)).join("/")}`:"off"}`).join(";");if(r!==t.lampShapeSig||!t.lampMesh.geometry.getAttribute("position")){t.lampShapeSig=r,t.lampColorSig="";let u=new ee,h=[],f=[],d=new Map,p=t.floor.height;for(let x of s){let g=x.lamp==="strip"?(x.base??p)>Math.min(t.floor.cut_height,p):x.lamp?Lm.has(x.lamp)&&(x.top??p)>Math.min(t.floor.cut_height,p):x.model==="camera_ceiling";if(!x.lamp&&!x.model||g&&this.wallMode==="cut")continue;let m=u.count,_=x.pack?Ae(x.pack):void 0,[M,v,y]=x.size??[.3,.3,.3];x.model?Sp(u,x.model,x.x,x.model==="camera_ceiling"?p:x.y,x.z,x.rotation??0):_?Il(u,_,{x:x.x,z:x.z,rotation:x.rotation??0,w:M,d:v,h:y,mirror:x.mirror},x.base??0,65280):oh(u,{...x,lamp:x.lamp},x.top??p,65280),d.set(x.furnitureId??x.id,{start:m,end:u.count}),x.pickable!==!1&&h.push({id:x.id,start:m,end:u.count}),x.furnitureId&&f.push({id:x.furnitureId,start:m,end:u.count})}t.lampTris=h,t.lampFurnTris=f,t.lampRanges=d,t.lampShade=vd(u.c),t.lampMesh.geometry.dispose(),t.lampMesh.geometry=u.geometry(),t.lampMesh.visible=u.count>0}if(a===t.lampColorSig)return;t.lampColorSig=a;let l=t.lampMesh.geometry.getAttribute("color"),c=l.array;s.forEach((u,h)=>{let f=t.lampRanges.get(u.furnitureId??u.id);if(!f)return;let d=o[h],p=d?.55+.45*d.level:0,x=d?new Q(...d.color.map(_=>Math.min(1,_*p))):new Q(yM),g=n(u.id);g>0&&x.lerp(new Q(1,1,1),.7*g);let m=new Q(x.getHex());_d(c,t.lampShade,f,[m.r,m.g,m.b])}),l.needsUpdate=!0,this.buildHalos(t)}buildSun(t){let e=this.building?.settings.sun_patches===!1?null:this.sun,n=(this.building?.settings.north??0)*he,s=this.weather?.cloud??0,r=Nm(t.floor,t.geo.openRooms),o=e?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${n},${s.toFixed(2)},${[...t.openings.values()].map(l=>(l.cover??0).toFixed(2)).join(",")},${r.join(".")},${this.roofWindowsKey},${JSON.stringify(this.building?.settings.roof?.windows??[])}`:"";if(o===t.sunSig)return;t.sunSig=o;let a=new ee;if(e&&e.elevation>2&&s<.97){let l=Math.min(1,e.elevation/12)*(1-.8*s),c=e.elevation*he,u=e.azimuth*he,h=[Math.sin(n+u),-Math.cos(n+u)],f=1/Math.tan(c);for(let d of t.geo.openings){if(d.opening.type!=="window"||!d.exterior)continue;let p=[-d.toRoom[0],-d.toRoom[1]],x=p[0]*h[0]+p[1]*h[1];if(x<.05)continue;let g=t.openings.get(d.opening.id),m=d.top-(g?.cover??0)*(d.top-d.sill);if(m-d.sill<.05)continue;let _=(P,A)=>{let I=Math.min(7,A*f);return[d.start[0]+d.axis[0]*P+d.toRoom[0]*d.faceRoom-h[0]*I,.02,d.start[1]+d.axis[1]*P+d.toRoom[1]*d.faceRoom-h[1]*I]},M=.14*l*Math.min(1,x*1.5),v=new Q(1*M,.82*M,.55*M),y=v.clone().multiplyScalar(.45),w=t.floor.rooms.findIndex(P=>P.id===d.opening.room_id);if(w<0||t.floor.rooms[w].points.length<3)continue;let T=r[w],b=t.floor.rooms.filter((P,A)=>r[A]===T&&P.points.length>=3).map(P=>P.points),S=Math.max(1,Math.ceil(Math.min(7,m*f)/.25)),E=Math.max(1,Math.ceil(d.width/.3));for(let P=0;P<S;P++){let A=d.sill+(m-d.sill)*P/S,I=d.sill+(m-d.sill)*(P+1)/S,R=P/S,L=(P+1)/S,N=v.clone().lerp(y,R),U=v.clone().lerp(y,L);for(let k=0;k<E;k++){let B=d.width*k/E,z=d.width*(k+1)/E,V=_((B+z)/2,(A+I)/2);if(!b.some(pt=>Zt([V[0],V[2]],pt)))continue;let st=_(B,A),$=_(z,A),ot=_(z,I),ct=_(B,I);a.tri(st,$,ot,N,N,U),a.tri(st,ot,ct,N,U,U)}}}this.pushRoofSun(t,a,r,h,c,l)}t.sunMesh.geometry.dispose(),t.sunMesh.geometry=a.geometry(),t.sunMesh.visible=a.count>0}pushRoofSun(t,e,n,s,r,o){let a=this.building,l=a?.settings.roof?.windows??[];if(!a||!l.length)return;let c=new Map(cs(a).map(h=>[h.key,h])),u=[s[0]*Math.cos(r),Math.sin(r),s[1]*Math.cos(r)];for(let h of l){let f=c.get(h.face),d=Nl(a,f,h);if(!f||!d||d.floor.id!==t.floor.id)continue;let p=f.n[0]*u[0]+f.n[1]*u[1]+f.n[2]*u[2];if(p<.05)continue;let[x,g,m,_]=d.corners,M=Math.min(1,this.roofWindows.get(h.id)?.cover??0);if(M>.95)continue;let v=(L,N,U)=>[L[0]+(N[0]-L[0])*U,L[1]+(N[1]-L[1])*U,L[2]+(N[2]-L[2])*U],y=v(_,x,M),w=v(m,g,M),T=L=>{let N=Math.min(7,(L[1]-t.floor.elevation)/Math.tan(r));return[L[0]-s[0]*N,.02,L[2]-s[1]*N]},b=[T(x),T(g),T(w),T(y)],S=t.floor.rooms.findIndex(L=>L.id===d.roomId);if(S<0)continue;let E=t.floor.rooms.filter((L,N)=>n[N]===n[S]&&L.points.length>=3).map(L=>L.points),P=.16*o*Math.min(1,p*1.5),A=new Q(1*P,.84*P,.6*P),I=(L,N)=>{let U=v(b[0],b[1],L),k=v(b[3],b[2],L);return v(U,k,N)},R=6;for(let L=0;L<R;L++)for(let N=0;N<R;N++){let U=I((L+.5)/R,(N+.5)/R);if(!E.some(st=>Zt([U[0],U[2]],st)))continue;let k=I(L/R,N/R),B=I((L+1)/R,N/R),z=I((L+1)/R,(N+1)/R),V=I(L/R,(N+1)/R);e.tri(k,B,z,A,A,A),e.tri(k,z,V,A,A,A)}}}buildHalos(t){if(this.lowQuality){t.haloMesh.visible=!1,t.coneMesh.visible=!1;return}let e=t.floor.height,n=[],s=[],r=new ee,o=[];for(let l of this.devices){if(l.model&&l.floorId===t.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let _=(l.rotation??0)*he,M=[-Math.sin(_),Math.cos(_)],v=l.model==="camera_ceiling",y=l.reach??(v?3:4.5),w=(l.fov??(v?360:90))*he/2,T=l.motion?new Q(.9,.12,.16):new Q(.04,.22,.28),b=new Q(0,0,0),S=Math.max(4,Math.round(w/.15)),E=.015,P=t.geo.walls2d,A=U=>{let k=U.b[0]-U.a[0],B=U.b[1]-U.a[1],z=k*k+B*B||1,V=Math.max(0,Math.min(1,((l.x-U.a[0])*k+(l.z-U.a[1])*B)/z));return Math.hypot(l.x-(U.a[0]+k*V),l.z-(U.a[1]+B*V))},I=null;for(let U of P)A(U)<.45&&(!I||A(U)<A(I))&&(I=U);let R=U=>{let k=M[0]*Math.cos(U)-M[1]*Math.sin(U),B=M[1]*Math.cos(U)+M[0]*Math.sin(U),z=y;for(let V of P){let st=V.b[0]-V.a[0],$=V.b[1]-V.a[1],ot=k*$-B*st;if(Math.abs(ot)<1e-9)continue;let ct=((V.a[0]-l.x)*$-(V.a[1]-l.z)*st)/ot,pt=((V.a[0]-l.x)*B-(V.a[1]-l.z)*k)/ot;V===I&&ct<=.45||ct>.02&&ct<z&&pt>=0&&pt<=1&&(z=ct)}return z},L=U=>{let k=R(U);return[l.x+(M[0]*Math.cos(U)-M[1]*Math.sin(U))*k,E,l.z+(M[1]*Math.cos(U)+M[0]*Math.sin(U))*k]},N=r.count;for(let U=0;U<S;U++)r.tri([l.x,E,l.z],L(-w+2*w*(U+1)/S),L(-w+2*w*U/S),T,b,b);o.push({id:l.id,start:N,end:r.count});continue}let c=this.glowOf(l);if(l.floorId!==t.floor.id||!l.lamp||!c||Lm.has(l.lamp)&&this.wallMode==="cut"&&(l.top??e)>Math.min(t.floor.cut_height,e))continue;let u=l.top??e,[h,f,d]=l.size??ch[l.lamp],p=l.base??0,x=(l.rotation??0)*he,g={ceiling:u-.07,downlight:u-.03,spot:u-d,panel:u-.03,pendant:Math.max(.4,u-d)+.08,floor:p+d-.15,uplight:p+d,table:p+d-.09,wall:p+d/2,strip:p+Math.max(.02,d)-.01,bollard:p+d-.08,garden:p+d-.03}[l.lamp],m=(_,M,v=1)=>{n.push(_,g,M),s.push(...c.color.map(y=>y*c.level*.7*v))};if(l.lamp==="strip")for(let _ of[-.4,-.13,.13,.4])l.upright?(n.push(l.x,p+h*(.5+_),l.z),s.push(...c.color.map(M=>M*c.level*.7*.6))):m(l.x+Math.cos(x)*h*_,l.z+Math.sin(x)*h*_,.6);else l.lamp==="wall"?m(l.x-Math.sin(x)*(f/2+.05),l.z+Math.cos(x)*(f/2+.05)):m(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")){let _=new Q(...c.color.map(T=>T*.09*c.level)),M=new Q(0,0,0),v=Math.max(.03,h/2),y=.45+.35*c.level,w=16;for(let T=0;T<w;T++){let b=T/w*Math.PI*2,S=(T+1)/w*Math.PI*2,E=[l.x+Math.cos(b)*v,g,l.z+Math.sin(b)*v],P=[l.x+Math.cos(S)*v,g,l.z+Math.sin(S)*v],A=[l.x+Math.cos(b)*y,.02,l.z+Math.sin(b)*y],I=[l.x+Math.cos(S)*y,.02,l.z+Math.sin(S)*y];r.tri(E,A,I,_,M,M),r.tri(E,I,P,_,M,_)}}}let a=new qt;a.setAttribute("position",new Nt(n,3)),a.setAttribute("color",new Nt(s,3)),t.haloMesh.geometry.dispose(),t.haloMesh.geometry=a,t.haloMesh.visible=n.length>0,t.coneMesh.geometry.dispose(),t.coneMesh.geometry=r.geometry(),t.coneMesh.visible=r.count>0,t.coneTris=o}buildScreens(t){let e=th(t.floor,this.parked).furniture.filter(r=>this.screens.has(r.id)),n=e.map(r=>`${r.id}:${r.x},${r.z},${r.rotation},${r.w},${r.d},${r.h},${r.mount_y??""},${r.mirror?1:0}:${JSON.stringify(this.screens.get(r.id))}`).join(";");if(n===t.screenSig&&t.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(t,e);t.screenSig=n;let s=new ee;for(let r of e){let o=this.screens.get(r.id),a=r.rotation*he,l=Math.cos(a),c=Math.sin(a),u=(v,y,w)=>[r.x+v*l-w*c,y,r.z+v*c+w*l];if(o.faces){let v=Math.max(.05,r.w)*(r.mirror?-1:1),y=Math.max(.05,r.d),w=Math.max(.005,r.h),T=mn(t.floor,r);for(let b of o.faces){if(b.part==="lights"){let B=Ae(r.type),z=V=>["#e8f4ff","#ff3b4f"].includes(V.color.toLowerCase());if(B&&B.parts.some(z)){let V=new Q(...b.color.map(st=>Math.min(1,st*(.4+.6*b.level))));no(s,B,r,T,V.getHex(),z)}continue}if(b.part==="cabin"){let B=Ae(r.type),z=V=>V.color.toLowerCase()==="#13283a"||V.color==="glass";if(B&&B.parts.some(z)){let V=new Q(...b.color.map(st=>Math.min(1,st*(.3+.5*b.level))));no(s,B,r,T,V.getHex(),z);continue}}if(b.part==="burners"&&Ae(r.type)){let B=Ae(r.type),z=new Q(...b.color.map(V=>Math.min(1,V*(.25+.6*b.level))));no(s,B,r,T,z.getHex(),yd);continue}if(b.part==="burners"){let B=new Q(...b.color.map(V=>Math.min(1,V*(.25+.6*b.level)))),z=T+w+.008;for(let[V,st,$]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let ot=V*Math.abs(v)/.6,ct=st*y/.62,pt=14;for(let q=0;q<pt;q++){let X=q/pt*Math.PI*2,it=(q+1)/pt*Math.PI*2;s.tri(u(ot,z,ct),u(ot+Math.cos(X)*$,z,ct+Math.sin(X)*$),u(ot+Math.cos(it)*$,z,ct+Math.sin(it)*$),B)}}continue}if(b.part==="band"||b.part==="cabin"){let B=b.part==="cabin",z=T+w*(B?.6:.42),V=B?T+w*.86:z+.07,st=new Q(...b.color.map(pt=>Math.min(1,pt*(.3+.45*b.level)))),$=Math.abs(v)/2+(B?.012:.02),ot=y/2+(B?.012:.02),ct=[[-$,-ot],[$,-ot],[$,ot],[-$,ot]];for(let pt=0;pt<4;pt++){let q=ct[pt],X=ct[(pt+1)%4],it=u(q[0]*Math.sign(v),z,q[1]),ut=u(X[0]*Math.sign(v),z,X[1]),ht=u(X[0]*Math.sign(v),V,X[1]),Pt=u(q[0]*Math.sign(v),V,q[1]);s.tri(it,ut,ht,st),s.tri(it,ht,Pt,st)}continue}let S=b.part==="right"?.03:-Math.abs(v)/2+.03,E=b.part==="left"?-.03:Math.abs(v)/2-.03,P=T+(b.part==="bottom"?w*.45:w)+.006,A=new Q(...b.color.map(B=>Math.min(1,B*(.35+.65*b.level)))),I=new Q(0,0,0),R=(B,z,V=P)=>u(B*Math.sign(v),V,z),L=[R(S,-y/2+.03),R(E,-y/2+.03),R(E,y/2-.03),R(S,y/2-.03)];s.tri(L[0],L[2],L[1],A),s.tri(L[0],L[3],L[2],A);let N=.12+.1*b.level,U=A.clone().multiplyScalar(.5),k=[R(S-N,-y/2-N,P+.004),R(E+N,-y/2-N,P+.004),R(E+N,y/2+N,P+.004),R(S-N,y/2+N,P+.004)];for(let B=0;B<4;B++){let z=(B+1)%4;s.tri(L[B],k[z],k[B],U,I,I),s.tri(L[B],L[z],k[z],U,U,I)}}continue}let h=Ae(r.type);if(h&&!h.light&&o.ring&&h.parts.some(v=>v.glow)){let v=new Q(...o.color.map(y=>Math.min(1,y*(.45+.55*o.level))));no(s,h,r,mn(t.floor,r),v.getHex())}let f=ku(r,t.floor);if(!f)continue;let d=new Q(...o.color.map(v=>Math.min(1,v*(.35+.65*o.level)))),p=new Q(0,0,0),x=f.z+.004;if(s.tri(u(f.x0,f.y0,x),u(f.x1,f.y0,x),u(f.x1,f.y1,x),d),s.tri(u(f.x0,f.y0,x),u(f.x1,f.y1,x),u(f.x0,f.y1,x),d),o.plain)continue;let g=.18+.12*o.level,m=d.clone().multiplyScalar(.5),_=[u(f.x0,f.y0,x),u(f.x1,f.y0,x),u(f.x1,f.y1,x),u(f.x0,f.y1,x)],M=[u(f.x0-g,f.y0-g,x+.01),u(f.x1+g,f.y0-g,x+.01),u(f.x1+g,f.y1+g,x+.01),u(f.x0-g,f.y1+g,x+.01)];for(let v=0;v<4;v++){let y=(v+1)%4;s.tri(_[v],M[v],M[y],m,p,p),s.tri(_[v],M[y],_[y],m,p,m)}}t.screenMesh.geometry.dispose(),t.screenMesh.geometry=s.geometry(),t.screenMesh.visible=s.count>0,this.updateScreenPictures(t,e)}updateScreenPictures(t,e){let n=new Map(e.map(s=>[s.id,s]).filter(([s])=>!!this.screens.get(s)?.picture));for(let[s,r]of t.screenPics)n.has(s)&&this.screens.get(s).picture===r.url||(t.group.remove(r.mesh),r.mesh.geometry.dispose(),r.mesh.material.dispose(),r.texture?.dispose(),t.screenPics.delete(s));for(let[s,r]of n){let o=this.screens.get(s),a=ku(r,t.floor);if(!a)continue;let l=t.screenPics.get(s);if(!l){let c=new Ut(new ni(1,1),new ie({color:16777215,transparent:!0}));c.visible=!1,c.renderOrder=5,l={url:o.picture,mesh:c,texture:null},t.screenPics.set(s,l),t.group.add(c);let u=l;new Tr().load(o.picture,h=>{if(t.screenPics.get(s)!==u){h.dispose();return}h.colorSpace=Ie,u.texture=h;let f=u.mesh.material;f.map=h,f.needsUpdate=!0,this.placeScreenPicture(u.mesh,r,a,h),u.mesh.visible=!0,this.invalidate()},void 0,()=>{})}l.mesh.material.color.setScalar(.45+.55*o.level),l.texture&&this.placeScreenPicture(l.mesh,r,a,l.texture)}}placeScreenPicture(t,e,n,s){let r=s.image,o=r?.width&&r?.height?r.width/r.height:16/9,a=n.x1-n.x0-.04,l=n.y1-n.y0-.04,c=Math.min(a,l*o),u=c/o,h=e.rotation*he,f=(n.x0+n.x1)/2,d=n.z+.008;t.scale.set(c,u,1),t.rotation.set(0,-h,0),t.position.set(e.x+f*Math.cos(h)-d*Math.sin(h),(n.y0+n.y1)/2,e.z+f*Math.sin(h)+d*Math.cos(h))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(t){let e=this.flows.filter(u=>u.floorId===t.floor.id).map(ah).join(";"),n=[],s=[],r=[],o=[],a=[];for(let u of this.flows){if(u.floorId!==t.floor.id)continue;let h=this.flowPhase.get(ah(u))??{speed:Dm(u.power),offset:0},f=u.power>.5?Math.min(1,.5+u.power/2500):.22,d=u.color.map(_=>_*f),p=Math.hypot(u.b[0]-u.a[0],u.b[1]-u.a[1],u.b[2]-u.a[2]);if(p<1e-4)continue;let x=[(u.b[0]-u.a[0])/p,(u.b[1]-u.a[1])/p,(u.b[2]-u.a[2])/p],g=[];if(Math.abs(x[1])<.5){let _=Math.hypot(x[0],x[2])||1;g.push([-x[2]/_,0,x[0]/_])}else g.push([1,0,0],[0,0,1]);let m=this.lowQuality?[[Im*1.4,1]]:[[_M,.25],[Im,1]];for(let[_,M]of m)for(let v of g){let y=_/2,w=(b,S)=>[b[0]+v[0]*y*S,b[1]+v[1]*y*S,b[2]+v[2]*y*S],T=[[w(u.a,-1),u.dist,0],[w(u.b,-1),u.dist+p,0],[w(u.b,1),u.dist+p,1],[w(u.a,1),u.dist,1]];for(let b of[0,1,2,0,2,3]){let[S,E,P]=T[b];n.push(S[0],S[1],S[2]),s.push(d[0]*M,d[1]*M,d[2]*M),r.push(E,P),o.push(h.speed),a.push(h.offset)}}}let l=t.flowMesh.geometry;if(e===t.flowLayout&&l.getAttribute("position")?.count===n.length/3){for(let[u,h]of[["color",s],["flowSpeed",o],["flowOffset",a]]){let f=l.getAttribute(u);f.array.set(h),f.needsUpdate=!0}t.flowMesh.visible=n.length>0;return}t.flowLayout=e;let c=new qt;c.setAttribute("position",new Nt(n,3)),c.setAttribute("color",new Nt(s,3)),c.setAttribute("uv",new Nt(r,2)),c.setAttribute("flowSpeed",new Nt(o,1)),c.setAttribute("flowOffset",new Nt(a,1)),t.flowMesh.geometry.dispose(),t.flowMesh.geometry=c,t.flowMesh.visible=n.length>0}buildOpenings(t){let e=bm(t.geo.openings,t.openings,Math.min(t.floor.cut_height,t.floor.height));t.frameTris=e.frameTris,t.glassTris=e.glassTris,t.blindTris=e.blindTris;for(let[n,s]of[[t.framesMesh,e.frames],[t.glassMesh,e.glass],[t.blindsMesh,e.blinds]])n.geometry.dispose(),n.geometry=s,n.visible=s.getAttribute("position").count>0}activeFloors(){return this.floors.filter(t=>t.to>.99)}applyHighlight(){for(let t of this.floors){let e=t.geo.floor.getAttribute("color");for(let n of t.geo.roomTris){let s=new Q(n.color),r=this.roomTint?.get(n.roomId);r&&s.lerp(new Q(...r).multiplyScalar(.6),.9),n.roomId===this.roomId&&s.lerp(wM,r?.3:.75);for(let o=n.start*3;o<n.end*3;o++)e.setXYZ(o,s.r,s.g,s.b)}e.needsUpdate=!0}for(let t of this.labels.querySelectorAll(".fp3d-pin"))t.classList.toggle("fp3d-pin-active",!!t.dataset.room&&t.dataset.room===this.roomId);this.invalidate()}fit(t){let e=new on;for(let h of this.activeFloors()){let f=h.floor.elevation+h.ty;for(let d of h.floor.rooms)for(let[p,x]of d.points)e.expandByPoint(new G(p,f,x)),e.expandByPoint(new G(p,f+h.floor.height,x))}e.isEmpty()&&e.set(new G(-4,0,-4),new G(4,2.5,4)),this.placeGround(),this.weatherBox={x0:e.min.x-6,x1:e.max.x+6,z0:e.min.z-6,z1:e.max.z+6,y0:e.min.y,y1:e.max.y+6},this.applyWeather(),this.placeSky();let n=e.getCenter(new G),s=e.getSize(new G),r=Math.max(8,this.distanceFor(s)*(this.camera.aspect<1?1.16:1.02));this.controls.maxRadius=Math.max(40,r*3),n.y=e.min.y+s.y*(this.houseView?.45:.3),(this.floorId===null||this.floors.length===1)&&(this.houseRadius=r);let o=this.floorId===null,a=o?null:this.floorMap.get(this.floorId)?.floor.start_view??null,l=a??this.startView,c=!!l&&(o||!!a);l&&c&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,l.radius*1.5));let u=c?l.target:null;if(u&&n.set(u.x,u.y+(a?this.floorBase(this.floorId):0),u.z),this.keepNext){this.keepNext=!1;let h=this.controls.view;this.controls.flyTo({target:new G(h.target.x,n.y,h.target.z),radius:h.radius,phi:h.phi,theta:h.theta},t);return}this.controls.flyTo({target:n,radius:c?l.radius:r,phi:l?l.phi:.85,theta:l?l.theta:-.6},t)}placeGround(){let t=new on,e=1/0;for(let o of this.floors){e=Math.min(e,o.floor.elevation+Math.min(0,o.ty));for(let a of o.floor.rooms)for(let[l,c]of a.points)t.expandByPoint(new G(l,0,c));for(let a of o.floor.outdoor??[])for(let[l,c]of a.points)t.expandByPoint(new G(l,0,c))}if(this.ground.visible=!t.isEmpty()&&!this.lowQuality&&this.theme!=="day",t.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=LM();let o=this.ground.material;o.map=this.groundTexture,o.needsUpdate=!0}let n=t.getCenter(new G),s=t.getSize(new G),r=lh*Math.ceil((Math.max(s.x,s.z)+16)/lh);this.ground.scale.set(r,r,1),this.ground.position.set(n.x,e-Bi-.02,n.z)}distanceFor(t){let e=this.camera.fov*he,n=2*Math.atan(Math.tan(e/2)*this.camera.aspect);return t.length()/2/Math.sin(Math.min(e,n)/2)}rayAt(t,e){let n=this.renderer.domElement.getBoundingClientRect(),s=new Ar;return s.setFromCamera(new Qt(t/n.width*2-1,-(e/n.height)*2+1),this.camera),s}pick(t,e){let n=this.rayAt(t,e),s=this.activeFloors(),r=s.flatMap(a=>[a.lampMesh,a.coneMesh,a.framesMesh,a.glassMesh,a.blindsMesh,a.wallMesh,a.floorMesh].filter(l=>l.visible)),o=(a,l)=>a.find(c=>l>=c.start&&l<c.end)?.id;for(let a of n.intersectObjects(r,!1)){if(a.faceIndex==null)continue;let l=a.faceIndex,c=s.find(u=>u.group===a.object.parent);if(a.object===c.lampMesh||a.object===c.coneMesh){let u=o(a.object===c.lampMesh?c.lampTris:c.coneTris,l);if(u)return{entity:u}}else if(a.object===c.framesMesh||a.object===c.blindsMesh||a.object===c.glassMesh){if(this.wallMode==="cut"&&a.face){let f=a.object.geometry.getAttribute("fold")?.getX(a.face.a)??Gt;if(f!==Gt&&Math.floor(f/16)===0)continue}let u=o(a.object===c.framesMesh?c.frameTris:a.object===c.glassMesh?c.glassTris:c.blindTris,l),h=u?this.pickOpenings.get(u):void 0;if(h)return{entity:h}}else if(a.object===c.wallMesh){let u=o(c.geo.furnitureTris,l),h=u?this.pickFurniture.get(u):void 0;if(h)return{entity:h};if(a.face&&!u){let f=c.wallMesh.geometry.getAttribute("fold")?.getX(a.face.a)??32,d=Math.floor(f/16),p=f%16,x=this.wallMode==="cut"&&d===0,g=(c.mask.glass.value&1<<p)!==0;if(!x){let m=n.ray.direction,_=Math.hypot(m.x,m.z)||1,M=[a.point.x-m.x/_*.3,a.point.z-m.z/_*.3],v=c.floor.rooms.find(y=>y.points.length>=3&&Zt(M,y.points))?.id??null;if(this.roomId!==null){if(v===this.roomId)return{floorId:c.floor.id,roomId:v}}else if(!g&&v)return{floorId:c.floor.id,roomId:v}}}}else if(a.object===c.floorMesh)return{floorId:c.floor.id,roomId:o(c.geo.roomTris.map(u=>({id:u.roomId,start:u.start,end:u.end})),l)??null}}return null}onTap(t,e){let n=this.pick(t,e);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+Xl),this.invalidate(),this.options.onDeviceTap?.(n.entity,t,e);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(t,e){let n=this.rayAt(t,e),s=this.activeFloors(),r=a=>[a.screenMesh,a.fridgeMesh,...[...a.screenPics.values()].map(l=>l.mesh)],o=s.flatMap(a=>[a.lampMesh,a.wallMesh,...r(a)].filter(l=>l.visible));for(let a of n.intersectObjects(o,!1)){if(a.faceIndex==null)continue;let l=s.find(h=>h.group===a.object.parent||r(h).includes(a.object));if(!l)continue;if(a.object!==l.lampMesh&&a.object!==l.wallMesh){let h=this.furnitureNear(l,a.point.x,a.point.z);if(h)return{fv:l,id:h,y:a.point.y};continue}let u=(a.object===l.lampMesh?l.lampFurnTris:l.geo.furnitureTris).find(h=>a.faceIndex>=h.start&&a.faceIndex<h.end)?.id;if(u)return{fv:l,id:u,y:a.point.y}}return null}furnitureNear(t,e,n){let s=null;for(let r of t.floor.furniture){let o=r.rotation*he,a=e-r.x,l=n-r.z,c=Math.abs(a*Math.cos(o)+l*Math.sin(o))-r.w/2,u=Math.abs(-a*Math.sin(o)+l*Math.cos(o))-r.d/2,h=Math.max(c,u);h<.25&&(!s||h<s.d)&&(s={id:r.id,d:h})}return s?.id??null}floorPoint(t,e,n,s){let r=this.rayAt(e,n),o=s??t.floor.elevation+t.y,a=r.ray.direction;if(Math.abs(a.y)<1e-4)return null;let l=(o-r.ray.origin.y)/a.y;return l<=0?null:[r.ray.origin.x+a.x*l,r.ray.origin.z+a.z*l]}setFurnishTypes(t){this.furnishTypes=t?new Set(t):null}setSurfaceGrab(t){this.surfaceGrab=t}pointerRay(t,e){return this.surfaceRay(t,e)}furnitureIdAt(t,e){return this.furnitureAt(t,e)?.id??null}surfaceRay(t,e){let n=this.rayAt(t,e).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(t,e){if(this.surfaceGrab?.start(this.surfaceRay(t,e)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let s=this.furnishTypes;if(s){let o=n?this.devices.find(h=>h.id===n)?.furnitureId:void 0,a=o?null:this.furnitureAt(t,e),l=o??a?.id,c=l?this.floors.find(h=>h.floor.furniture.some(f=>f.id===l)):void 0,u=c?.floor.furniture.find(h=>h.id===l)?.type;return!!(c&&l&&u&&s.has(u))&&this.grabItem(c,l,t,e)}if(n){let o=this.devices.find(l=>l.id===n)?.furnitureId,a=o?this.floors.find(l=>l.floor.furniture.some(c=>c.id===o)):void 0;return!o||!a?this.grabDevice(n,t,e):this.grabItem(a,o,t,e)}let r=this.furnitureAt(t,e);if(!r){let o=this.pick(t,e);return o&&"entity"in o?this.grabDevice(o.entity,t,e):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(r.fv,r.id,t,e,r.y)}grabItem(t,e,n,s,r){let o=t.floor.furniture.find(h=>h.id===e),a=r===void 0?void 0:Math.min(r,this.camera.position.y-.3),l=this.floorPoint(t,n,s,a);if(!o||!l)return!1;let c,u=this.rayAt(n,s).ray.direction;if(r!==void 0&&-u.y<.34){let h=this.camera.position,f=this.camera.getWorldDirection(new G),d=Math.hypot(f.x,f.z)||1,p=[f.x/d,f.z/d],x=Math.hypot(l[0]-h.x,l[1]-h.z,(a??0)-h.y),g=this.renderer.domElement.getBoundingClientRect().height||1,m=2*x*Math.tan(this.camera.fov*Math.PI/360)/g;c={x0:n,y0:s,fx:o.x,fz:o.z,right:[-p[1],p[0]],fwd:p,perPx:m,gain:Math.min(2,1/Math.max(.5,-u.y))}}return o.locked?(this.selectFurniture(o.id),this.options.onFurnitureSelect?.(o.id),!1):(this.grab={floorId:t.floor.id,id:o.id,offset:[o.x-l[0],o.z-l[1]],x:o.x,z:o.z,moved:!1,plane:a,screen:c},this.selectFurniture(o.id),this.options.onFurnitureSelect?.(o.id),!0)}grabDevice(t,e,n){let s=this.devices.find(a=>a.id===t),r=s&&this.floorMap.get(s.floorId),o=r&&this.floorPoint(r,e,n);return!s||!r||!o?!1:s.fixed?(this.selectDevice(t),this.options.onDeviceSelect?.(t),!1):(this.deviceGrab={id:t,floorId:r.floor.id,offset:[s.x-o[0],s.z-o[1]],x:s.x,z:s.z,moved:!1},this.selectDevice(t),this.options.onDeviceSelect?.(t),!0)}setSelectedDevice(t){t!==this.selectedDevice&&this.selectDevice(t)}selectDevice(t){t&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=t;for(let[e,n]of this.devicePins)n.el.classList.toggle("fp3d-dev-sel",e===t)}dragFurniture(t,e){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(t,e));return}let n=this.deviceGrab;if(n){let f=this.floorMap.get(n.floorId),d=this.devices.find(g=>g.id===n.id),p=f&&this.floorPoint(f,t,e);if(!f||!d||!p)return;let x=this.building?.settings.grid??.05;n.x=d.x=Math.round((p[0]+n.offset[0])/x)*x,n.z=d.z=Math.round((p[1]+n.offset[1])/x)*x,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let s=this.grab,r=s&&this.floorMap.get(s.floorId);if(!s||!r)return;let o=s.screen,a;if(o){let f=(t-o.x0)*o.perPx,d=(e-o.y0)*o.perPx*o.gain;a=[o.fx+o.right[0]*f-o.fwd[0]*d-s.offset[0],o.fz+o.right[1]*f-o.fwd[1]*d-s.offset[1]]}else a=this.floorPoint(r,t,e,s.plane);if(!a)return;let l=this.building?.settings.grid??.05,c=r.floor.furniture.find(f=>f.id===s.id),u=Math.round((a[0]+s.offset[0])/l)*l,h=Math.round((a[1]+s.offset[1])/l)*l;[s.x,s.z]=c?hp(r.floor,c,u,h,this.building?.settings.wall_interior??0):[u,h],s.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let t=this.deviceGrab;this.deviceGrab=null,t?.moved&&this.options.onDeviceMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3);let e=this.grab;this.grab=null,e?.moved&&this.options.onFurnitureMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let t=[...new Set([...this.selectedFurniture?[this.selectedFurniture]:[],...this.selectedSet])],e=new Le,n;for(let s of t){let r=this.floors.find(a=>a.floor.furniture.some(l=>l.id===s)),o=r?.floor.furniture.find(a=>a.id===s);!r||!o||(n??=r,this.ghostBox(e,r,o,s===this.selectedFurniture?new Q(.25,.9,1):new Q(1,.71,.28)))}n&&(this.ghost=new Ye(e.geometry(),new Xe({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=n.floor.elevation+n.y,this.ghost.renderOrder=20,this.scene.add(this.ghost))}ghostBox(t,e,n,s){let r=this.grab?.id===n.id?this.grab.x:n.x,o=this.grab?.id===n.id?this.grab.z:n.z,a=e.floor.height,l=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant"].includes(n.type)&&n.mount_y==null,c=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),u=Ae(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?mn(e.floor,n):l?n.type==="lamp_pendant"?a-n.h-.1:a-c:mn(e.floor,n),h=n.rotation*he,f=Math.cos(h),d=Math.sin(h),p=(g,m,_)=>[r+g*f-m*d,_,o+g*d+m*f],x=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]];for(let g=0;g<4;g++){let[m,_]=x[g],[M,v]=x[(g+1)%4];t.seg(p(m,_,u+.01),p(M,v,u+.01),s),t.seg(p(m,_,u+c),p(M,v,u+c),s),t.seg(p(m,_,u+.01),p(m,_,u+c),s)}t.seg(p(-n.w/2,n.d/2+.03,u+.02),p(n.w/2,n.d/2+.03,u+.02),new Q(1,1,1))}onHold(t,e){let n=this.pick(t,e);n&&"entity"in n&&this.options.onDeviceHold?.(n.entity,t,e)}swipeStart(t,e,n,s){if(this.furnish||Math.abs(s)<Math.abs(n)*1.2)return!1;let r=this.pick(t,e);return!r||!("entity"in r)||this.options.onDeviceSwipe?.(r.entity,"start",0,t,e)!==!0?!1:(this.swipe={entity:r.entity,x:t,y:e},!0)}floorThumbnails(t=200,e=150){let n=this.floors.filter(m=>m.floor.rooms.some(_=>_.points.length>=3));if(!n.length)return[];let s=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),r=Math.round(t*s),o=Math.round(e*s),a=new tn(r,o);a.texture.colorSpace=Ie;let l=new kn(-1,1,1,-1,.1,400),c=this.floors.map(m=>({fv:m,visible:m.group.visible,y:m.y,o:m.o,standing:m.mask.standing.value,glass:m.mask.glass.value})),u=this.roof?.group.visible??!1,h=this.ghost?.visible??!1,f=this.renderer.getClearAlpha(),d=new Uint8Array(r*o*4),p=document.createElement("canvas");p.width=r,p.height=o;let x=p.getContext("2d"),g=[];try{this.roof&&(this.roof.group.visible=this.roof.wins.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let m of n){for(let I of this.floors)I.group.visible=I===m;m.y=0,m.o=1,this.applyFloor(m),m.group.visible=!0,m.mask.standing.value=0,m.mask.glass.value=0;let _=m.floor.rooms.flatMap(I=>I.points),M=m.floor.elevation,v=new on(new G(Math.min(..._.map(I=>I[0]))-.3,M,Math.min(..._.map(I=>I[1]))-.3),new G(Math.max(..._.map(I=>I[0]))+.3,M+Math.min(m.floor.cut_height,m.floor.height),Math.max(..._.map(I=>I[1]))+.3)),y=v.getCenter(new G),w=-.6,T=.8,b=new G(Math.sin(T)*Math.sin(w),Math.cos(T),Math.sin(T)*Math.cos(w));l.position.copy(y).addScaledVector(b,100),l.lookAt(y),l.updateMatrixWorld();let S=.5,E=.5;for(let I of[v.min.x,v.max.x])for(let R of[v.min.y,v.max.y])for(let L of[v.min.z,v.max.z]){let N=new G(I,R,L).applyMatrix4(l.matrixWorldInverse);S=Math.max(S,Math.abs(N.x)),E=Math.max(E,Math.abs(N.y))}let P=r/o;S/E>P?E=S/P:S=E*P,l.left=-S*1.05,l.right=S*1.05,l.top=E*1.05,l.bottom=-E*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,r,o,d);let A=x.createImageData(r,o);for(let I=0;I<o;I++)A.data.set(d.subarray((o-1-I)*r*4,(o-I)*r*4),I*r*4);x.putImageData(A,0,0),g.push({floorId:m.floor.id,url:p.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(f);for(let m of c)m.fv.y=m.y,m.fv.o=m.o,m.fv.mask.standing.value=m.standing,m.fv.mask.glass.value=m.glass,this.applyFloor(m.fv),m.fv.group.visible=m.visible;this.roof&&(this.roof.group.visible=u,this.roof.wins.visible=!0),this.ghost&&(this.ghost.visible=h),a.dispose(),this.invalidate()}return g}setRobots(t){let e=new Set;for(let n of t){e.add(n.id);let s=this.robots.get(n.id);s||(s=this.makeRobot(n),this.robots.set(n.id,s));let r=s.info.mode,o=n.mode==="cleaning"&&r==="cleaning"&&((s.info.roomId??null)!==(n.roomId??null)||JSON.stringify(s.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(s.info=n,n.mode==="cleaning"&&(r!=="cleaning"||o||!s.motion.path.length)){let a=n.room?_m(n.room,void 0,void 0,n.obstacles):rh(n.rest),l=a.length?a:rh(n.rest),c=0;l.forEach((u,h)=>{Math.hypot(u[0]-s.motion.pos[0],u[1]-s.motion.pos[1])<Math.hypot(l[c][0]-s.motion.pos[0],l[c][1]-s.motion.pos[1])&&(c=h)}),s.motion.path=l,s.motion.next=c,n.room&&!Zt(s.motion.pos,n.room)&&(s.motion.pos=[l[c][0],l[c][1]])}s.led.color.setHex(Em[n.mode])}for(let[n,s]of this.robots)e.has(n)||(s.group.removeFromParent(),s.led.dispose(),this.robots.delete(n));this.robotLast=0,this.invalidate()}makeRobot(t){if(!this.robotGeo){let s=new ee,r=(a,l,c,u,h)=>{let f=[];for(let d=0;d<20;d++)f.push([Math.cos(d/20*Math.PI*2)*a,Math.sin(d/20*Math.PI*2)*a]);Re(s,f,l,c,u,h,{aoFrom:0,bottom:!1})};r(.17,.012,.08,2371657,3424863),r(.055,.08,.1,3820138,5070726),this.robotGeo=s.geometry(),this.robotMat=new ie({vertexColors:!0});let o=new ee;Re(o,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=o.geometry()}let e=new Ue,n=new ie({color:Em[t.mode]});return e.add(new Ut(this.robotGeo,this.robotMat),new Ut(this.robotLedGeo,n)),{info:t,motion:{pos:[...t.rest],heading:t.restHeading,path:[],next:0},group:e,led:n}}stepRobots(t){if(!this.robots.size)return!1;let e=this.robotLast?Math.min(.2,(t-this.robotLast)/1e3):0;this.robotLast=t;let n=!1;for(let s of this.robots.values()){let r=this.floorMap.get(s.info.floorId);r&&(s.group.parent!==r.group&&r.group.add(s.group),e>0?n=ym(s.motion,s.info,e)||n:n||=s.info.mode==="cleaning"||s.info.mode==="returning",s.group.position.set(s.motion.pos[0],0,s.motion.pos[1]),s.group.visible=!s.info.inModel||s.info.mode==="cleaning"||Math.hypot(s.motion.pos[0]-s.info.rest[0],s.motion.pos[1]-s.info.rest[1])>.05,s.group.rotation.y=s.motion.heading)}return n||(this.robotLast=0),n}setTrail(t,e=[]){let n=a=>new Q(.25-.2*a,.95-.83*a,1-.7*a),s=new Q(0,0,0),r=new Q(.3,1,.6),o=.02;for(let a of this.floors){let l=new ee;for(let u of e)u.floorId===a.floor.id&&u.points.forEach(([h,f],d)=>{let p=u.points[d-1];if(p){let x=Math.hypot(h-p[0],f-p[1])||1,g=-(f-p[1])/x*.1,m=(h-p[0])/x*.1;l.tri([p[0]+g,o,p[1]+m],[h+g,o,f+m],[h-g,o,f-m],r,r,r),l.tri([p[0]+g,o,p[1]+m],[h-g,o,f-m],[p[0]-g,o,p[1]-m],r,r,r)}for(let x=0;x<10;x++){let g=x/10*Math.PI*2,m=(x+1)/10*Math.PI*2;l.tri([h,o,f],[h+Math.cos(m)*.35,o,f+Math.sin(m)*.35],[h+Math.cos(g)*.35,o,f+Math.sin(g)*.35],r,s,s)}});let c=null;for(let u of t){if(u.floorId!==a.floor.id)continue;let h=n(u.age);if(c){let f=Math.hypot(u.x-c.x,u.z-c.z)||1,d=-(u.z-c.z)/f*.06,p=(u.x-c.x)/f*.06,x=n(c.age);l.tri([c.x+d,o,c.z+p],[u.x+d,o,u.z+p],[u.x-d,o,u.z-p],x,h,h),l.tri([c.x+d,o,c.z+p],[u.x-d,o,u.z-p],[c.x-d,o,c.z-p],x,h,x)}for(let f=0;f<12;f++){let d=f/12*Math.PI*2,p=(f+1)/12*Math.PI*2;l.tri([u.x,o,u.z],[u.x+Math.cos(p)*.22,o,u.z+Math.sin(p)*.22],[u.x+Math.cos(d)*.22,o,u.z+Math.sin(d)*.22],h,s,s)}c=u}a.trailMesh.geometry.dispose(),a.trailMesh.geometry=l.geometry(),a.trailMesh.visible=l.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(t,e=900){this.controls.flyTo(t,e)}lookThrough(t){let e=this.devices.find(c=>c.id===t&&c.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n)return!1;let s=(e.rotation??0)*he,r=e.model==="camera_ceiling",o=Math.min(1.45,Math.max(.22,(e.tilt??(r?65:20))*he)),a=n.floor.elevation+n.ty+(r?n.floor.height-.1:e.y),l=new G(-Math.sin(s)*Math.cos(o),-Math.sin(o),Math.cos(s)*Math.cos(o));return this.controls.flyTo({target:new G(e.x,a,e.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-o,theta:Math.atan2(Math.sin(s),-Math.cos(s))},900),!0}flashDevices(t){let e=performance.now()+Xl;for(let n of t)this.flashes.set(n,e);t.length&&this.invalidate()}focus(t,e,n,s,r){let o=this.floorMap.get(t);if(o){if(this.controls.flyTo({target:new G(e,o.floor.elevation+o.ty+s,n),radius:5.5,phi:.78},900),r){this.flashes.set(r,performance.now()+2400);let a=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(r)}"]`);a?.classList.add("fp3d-dev-found"),setTimeout(()=>a?.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(t){if(this.frame=0,this.disposed)return;let e=this.lastFrame?Math.min(100,t-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,t-this.orbitLast)/1e3),this.orbitLast=t,n=!0):this.orbitLast=0;let s=this.controls.update(t),r=this.stepFloors(e),o=this.stepOpenings(e)||this.stepFridges(e),a=!1;if(this.flashes.size){let d=new Set;for(let[p,x]of this.flashes){let g=this.deviceFloor.get(p);g&&d.add(g),x<=t&&this.flashes.delete(p)}a=this.flashes.size>0;for(let p of this.floors)d.has(p.floor.id)&&this.buildLamps(p)}let l=this.placeRoof(e),c=this.stepRobots(t),u=this.stepWeather(t),h=s||r||o||a||l,f=[];if((s||this.controls.busy)&&f.push("camera"),r&&f.push("floors"),o&&f.push("openings"),a&&f.push("flash"),l&&f.push("roof"),this.flowActive&&f.push("flow"),this.soundActive&&f.push("sound"),this.poolActive&&f.push("pool"),this.solarActive&&f.push("solar"),this.effectTick&&f.push("effect"),c&&f.push("robot"),n&&f.push("orbit"),this.tintTick&&f.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=h?t:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(t),this.updateWalls(),this.renderer.render(this.scene,this.camera),(this.viewChanged()||r||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(t,f),h&&this.invalidate(),this.effectFloors.size&&!this.effectTimer&&!document.hidden){let d=this.lowQuality?2*Fm:Fm;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=d/1e3,this.effectTick=!0;for(let p of this.floors)p.o<.02||!this.effectFloors.has(p.floor.id)||(this.buildLamps(p),this.buildGlow(p));this.invalidate()},d)}!h&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!h&&u&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33)),!h&&c&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!h&&(this.flowActive||this.solarActive||this.soundActive||this.poolActive)&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},this.lowQuality?2*Pm:Pm))}updateWalls(){let t=this.camera.position,e=this.controls.view.target,n=t.x-e.x,s=t.z-e.z,r=Math.hypot(n,s)||1;for(let o of this.floors){let a=this.roomId!==null&&o.floor.rooms.some(u=>u.id===this.roomId),l=this.wallMode==="cut",c=0;o.geo.buckets.forEach((u,h)=>{let f=u?u[0]*n/r+u[1]*s/r>=.25:a;!l&&f&&(c|=1<<h)}),o.mask.standing.value=l?0:65535,o.mask.glass.value=c}}viewChanged(){let t=this.controls.view,e=this.viewKey;return e[0]===t.target.x&&e[1]===t.target.y&&e[2]===t.target.z&&e[3]===t.radius&&e[4]===t.theta&&e[5]===t.phi?!1:(e[0]=t.target.x,e[1]=t.target.y,e[2]=t.target.z,e[3]=t.radius,e[4]=t.theta,e[5]=t.phi,!0)}place(t,e){let n=e===null;t.hidden!==n&&(t.hidden=n),e!==null&&this.placed.get(t)!==e&&(this.placed.set(t,e),t.style.transform=e)}updateLabels(){let{w:t,h:e}=this.size,n=new G,s=this.houseView,r=[];for(let o of this.floors){let a=o.bbox;if(!(s&&o.o>.5&&a)){this.place(o.label,null);continue}let l=null,c=null,u=o.floor.elevation+o.y+o.floor.cut_height*.5;for(let x of[a.x0,a.x1])for(let g of[a.z0,a.z1]){n.set(x,u,g).project(this.camera);let m=(n.x+1)/2*t,_=(1-n.y)/2*e;(!l||m<l.x)&&(l={x:m,y:_}),(!c||m>c.x)&&(c={x:m,y:_})}o.label.hidden&&(o.label.hidden=!1),o.labelSize??={w:o.label.offsetWidth,h:o.label.offsetHeight};let h=o.labelSize.w,f=8+this.labelInset,d=l.x-h-14,p=l.y;d<f&&this.labelInset&&(d=c.x+14,p=c.y),r.push({fv:o,left:Math.max(f,Math.min(t-h-8,d)),y:p,h:o.labelSize.h})}r.sort((o,a)=>a.fv.rank-o.fv.rank);for(let o=1;o<r.length;o++){let a=r[o-1];r[o].y=Math.max(r[o].y,a.y+(a.h+r[o].h)/2+8)}for(let o of r)this.place(o.fv.label,`translate(${o.left}px, ${o.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((o,a)=>{let l=this.floorMap.get(o.floorId);if(this.roomId!==null&&o.room!==this.roomId||o.views==="floor"&&this.floorId===null){this.anchorCb(a,0,0,!1,1,!0);return}if(this.floorId!==null&&this.floors.length>1&&(o.views==="house"||o.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new G(o.p[0],o.p[1]+(l?.y??0)+(o.roof&&(this.floorId===null||this.floors.length<=1)?(1-this.roofO)*2.2:0),o.p[2]),u=this.camera.position.clone().sub(c),h=u.length(),f=u.normalize().dot(new G(o.n[0],o.n[1],o.n[2]))>=0;n.copy(c).project(this.camera);let d=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,p=Math.min(1.6,Math.max(.25,15/Math.max(1,h)))*o.size;this.anchorCb(a,(n.x+1)/2*t,(1-n.y)/2*e,!d,p,f)}),this.updateDevicePins(t,e);for(let o of this.floors){let a=o.to<.99||o.o<.9||s||this.roomId!==null||this.otherFloor(o),l=o.floor.elevation+o.y+.05;for(let c of o.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let u=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,u?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}}otherFloor(t){return this.floorId!==null&&t.floor.id!==this.floorId}updateDevicePins(t,e){let n=new G,s=this.houseView;for(let r of this.persons){let o=this.personPins.get(r.id),a=this.floorMap.get(r.floorId);if(!o)continue;if(!a||s||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(o,null);continue}n.set(r.x,a.floor.elevation+a.y+.9,r.z).project(this.camera);let l=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(o,l?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}for(let r of this.devices){let o=this.devicePins.get(r.id)?.el;if(!o)continue;let a=this.floorMap.get(r.floorId),l=r.id.startsWith("detect:");if(!a||s&&!l||a.to<.99||a.o<.9||r.pin===!1||this.otherFloor(a)){this.place(o,null);continue}if(n.set(r.x,a.floor.elevation+a.y+r.y,r.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(o,null);continue}let u=this.roomId===null?r.full?"full":"":r.roomId===this.roomId?"full":"dim";this.pinMode.get(o)!==u&&(this.pinMode.set(o,u),o.classList.toggle("fp3d-dev-full",u==="full"),o.classList.toggle("fp3d-dev-dim",u==="dim")),this.place(o,`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}reportStats(t,e){if(!this.statsOn||!this.options.onStats)return;let n=e.length>0;this.fpsStart||(this.fpsStart=t),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,t-this.lastStatsFrame)),this.lastStatsFrame=n?t:0,this.fpsFrames++;let s=t-this.fpsStart;if(s>500||!n){let r=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/s):0,busy:e,worstMs:Math.round(this.worstFrame),calls:r.calls,triangles:r.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio(),gpu:this.gpuName??=EM(this.renderer)}),this.fpsFrames=0,this.fpsStart=t,this.worstFrame=0}}};function EM(i){try{let t=i.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),n=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER);return typeof n=="string"?n:null}catch{return null}}function AM(){let t=document.createElement("canvas");t.width=256*3,t.height=256*2;let e=t.getContext("2d"),n=(o,a,l,c,u)=>{e.strokeStyle=`rgba(55,224,255,${u})`,e.beginPath(),e.moveTo(o,a),e.lineTo(l,c),e.stroke()};e.lineWidth=1.5;let s=(o,a,l)=>{e.save(),e.beginPath(),e.rect(o*256,a*256,256,256),e.clip(),l(o*256,a*256),e.restore()};s(0,0,(o,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(o,c,o+256,c,.09);let u=o+l*.37%1*256;n(u,c,u,c+256/5,.07)}}),s(1,0,(o,a)=>{for(let l=0;l<7;l++){let c=o+l*256/7+.75;n(c,a,c,a+256,.08);let u=a+l*.53%1*256;n(c,u,c+256/7,u,.06)}}),s(2,0,(o,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(o+c,a,o+c,a+256,.1),n(o,a+c,o+256,a+c,.1)}}),s(1,1,(o,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(o,c,o+256,c,.09);let u=l?256/4:0;for(let h of[u,u+256/2])n(o+h+.75,c,o+h+.75,c+256/2,.09)}}),s(2,1,(o,a)=>{n(o+.75,a,o+.75,a+256,.08),n(o,a+.75,o+256,a+.75,.08),e.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)e.fillRect(o+l*97%256,a+(l*61+l*l%37)%256,2,2)});let r=new ei(t);return r.flipY=!1,r.wrapS=fn,r.wrapT=fn,r.anisotropy=4,r.colorSpace=Ie,r}function RM(i){let t=new ie({map:i,transparent:!0,blending:Ce,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},t.customProgramCacheKey=()=>"fp3d-pattern",t}function CM(){let i=document.createElement("canvas");i.width=8,i.height=32;let t=i.getContext("2d");t.fillStyle="#1a2742",t.fillRect(0,0,8,32),t.fillStyle="#223556",t.fillRect(0,4,8,14),t.fillStyle="rgba(55,224,255,0.45)",t.fillRect(0,29,8,2);let e=new ei(i);return e.wrapS=qi,e.wrapT=qi,e.colorSpace=Ie,e}function ah(i){let t=e=>Math.round(e*100);return`${i.floorId}:${i.a.map(t).join(",")}>${i.b.map(t).join(",")}`}function Dm(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}function PM(i){let t=new ie({vertexColors:!0,transparent:!0,blending:Ce,depthWrite:!1,side:ue});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= (0.3 + 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},t.customProgramCacheKey=()=>"fp3d-flow",t}function Nm(i,t){let e=i.rooms.map((s,r)=>r),n=s=>e[s]===s?s:e[s]=n(e[s]);for(let[s,r]of t){let o=i.rooms.findIndex(u=>u.id===s),a=i.rooms.findIndex(u=>u.id===r);if(o<0||a<0)continue;let l=n(o),c=n(a);l!==c&&(e[Math.max(l,c)]=Math.min(l,c))}return e.map((s,r)=>n(r))}function IM(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let s=new ei(t);return s.colorSpace=Ie,s}function LM(){let t=lh,e=document.createElement("canvas");e.width=1024,e.height=1024;let n=e.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let o=0;o<=t;o++){let a=Math.round(o/t*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let s=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);s.addColorStop(0,"rgba(0,0,0,1)"),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(0,0,1024,1024);let r=new ei(e);return r.anisotropy=4,r.colorSpace=Ie,r}function RA(i,t){return new uh(i,t)}function oh(i,t,e,n){let[s,r,o]=t.size??ch[t.lamp],a=t.base??0,l=(t.rotation??0)*he,c=Math.cos(l),u=Math.sin(l),h=(x,g)=>[t.x+x*c-g*u,t.z+x*u+g*c],f=(x,g,m,_,M,v=14)=>{let y=[];for(let w=0;w<v;w++){let T=w/v*Math.PI*2;y.push([t.x+Math.cos(T)*x,t.z+Math.sin(T)*x])}Re(i,y,g,m,_,M,{aoFrom:0,bottom:!0})},d=(x,g,m,_,M,v,y,w=y)=>Re(i,[h(x,m),h(g,m),h(g,_),h(x,_)],M,v,y,w,{aoFrom:0,bottom:!0}),p=Math.max(.05,Math.min(s,r)/2);switch(t.lamp){case"ceiling":f(p*.25,e-.04,e,se,se,8),f(p,e-Math.max(.04,o)-.035,e-.04,n,n);break;case"pendant":{let x=Math.max(.4,e-o);f(.06,e-.02,e,se,se,8);let g=t.variant==="globe"?x+2*p:t.variant==="drum"?x+.24:x+.2;if(f(.008,g,e-.02,se,se,5),t.variant==="globe")for(let _=0;_<7;_++){let M=Math.PI*(_/7),v=Math.PI*((_+1)/7);f(p*Math.max(.2,Math.sin((M+v)/2)),x+p-p*Math.cos(M),x+p-p*Math.cos(v),n,n,14)}else if(t.variant==="cone")for(let _=0;_<4;_++)f(p*(.25+.75*(4-_)/4),x+.06*_,x+.06*(_+1),n,n,16);else t.variant==="drum"?f(p,x,x+.24,n,n,18):(f(p*.35,x+.14,x+.2,n,n,12),f(p,x,x+.14,n,n,16));break}case"downlight":f(p,e-.012,e,se,se,12),f(p*.7,e-.02,e-.012,n,n,12);break;case"spot":f(p*.6,e-.02,e,se,se,10),f(p,e-Math.max(.06,o),e-.02,se,se,12),f(p*.8,e-Math.max(.06,o)-.008,e-Math.max(.06,o),n,n,12);break;case"panel":d(-s/2,s/2,-r/2,r/2,e-Math.max(.015,o),e,se,se),d(-s/2+.02,s/2-.02,-r/2+.02,r/2-.02,e-Math.max(.015,o)-.004,e-Math.max(.015,o),n);break;case"uplight":f(Math.max(.1,p*.6),a,a+.03,se,se),f(.014,a+.03,a+o-.12,se,se,6),f(p,a+o-.14,a+o-.02,se,se),f(p*.92,a+o-.02,a+o,n,n);break;case"bollard":f(p,a,a+o-.14,se,se,10),f(p*.9,a+o-.14,a+o-.03,n,n,10),f(p*1.1,a+o-.03,a+o,se,se,10);break;case"garden":f(.012,a,a+o-.08,se,se,5),f(p,a+o-.08,a+o-.01,se,se,10),f(p*.8,a+o-.01,a+o,n,n,10);break;case"floor":f(Math.max(.1,p*.7),a,a+.03,se,se),f(.014,a+.03,a+o-.28,se,se,6),f(p,a+o-.3,a+o,n,n);break;case"table":f(Math.max(.05,p*.55),a,a+.03,se,se),f(.012,a+.03,a+o-.16,se,se,6),f(p,a+o-.18,a+o,n,n);break;case"wall":{let x=t.base??_l;d(-s/2+.03,s/2-.03,-r/2,-r/2+.02,x,x+o,se),d(-s/2,s/2,-r/2+.02,r/2,x+o*.15,x+o*.85,n);break}case"strip":{let x=Math.max(.02,o),g=t.base!=null?t.base+x:e-.04;if(!t.roll&&!t.upright){d(-s/2,s/2,-r/2,r/2,g-x,g,n);break}let m=(t.roll??0)*he,_=Math.cos(m),M=Math.sin(m),v=t.upright?a+s/2:g-x/2,y=(E,P,A)=>{let I=E,R=P*_-A*M,L=P*M+A*_;return t.upright&&([I,R]=[-R,I]),[t.x+I*c-L*u,v+R,t.z+I*u+L*c]},w=[y(-s/2,-x/2,-r/2),y(s/2,-x/2,-r/2),y(s/2,-x/2,r/2),y(-s/2,-x/2,r/2),y(-s/2,x/2,-r/2),y(s/2,x/2,-r/2),y(s/2,x/2,r/2),y(-s/2,x/2,r/2)],T=new Q(n),b=[t.x,v,t.z],S=(E,P,A,I)=>{let[R,L,N]=[w[E],w[P],w[A]],U=[(L[1]-R[1])*(N[2]-R[2])-(L[2]-R[2])*(N[1]-R[1]),(L[2]-R[2])*(N[0]-R[0])-(L[0]-R[0])*(N[2]-R[2]),(L[0]-R[0])*(N[1]-R[1])-(L[1]-R[1])*(N[0]-R[0])],k=[R[0]-b[0],R[1]-b[1],R[2]-b[2]],B=U[0]*k[0]+U[1]*k[1]+U[2]*k[2]<0,[z,V,st,$]=B?[w[I],w[A],w[P],w[E]]:[w[E],w[P],w[A],w[I]];i.tri(z,V,st,T,T,T),i.tri(z,st,$,T,T,T)};S(0,1,2,3),S(4,5,6,7),S(0,1,5,4),S(1,2,6,5),S(2,3,7,6),S(3,0,4,7);break}}}export{ju as FloorMap,uh as FloorplanViewer,Qu as WalkCamera,RA as createViewer,gA as funLib,gM as furnitureFront,mM as furniturePreview,TM as isLowEnd,oh as pushLampModel};
