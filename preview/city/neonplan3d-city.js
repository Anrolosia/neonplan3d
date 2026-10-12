var Wh=0,Lc=1,Xh=2;var Ur=1,qh=2,Ns=3,Ei=0,nn=1,He=2,zn=0,Us=1,sn=2,Dc=3,Fc=4,Yh=5;var Yi=100,$h=101,Zh=102,Jh=103,Kh=104,Qh=200,jh=201,tf=202,ef=203,Nc=204,Uc=205,nf=206,sf=207,rf=208,of=209,af=210,lf=211,cf=212,uf=213,hf=214,jo=0,ta=1,ea=2,As=3,na=4,ia=5,sa=6,ra=7,Oc=0,ff=1,df=2,En=0,Bc=1,kc=2,Vc=3,zc=4,Gc=5,Hc=6,Wc=7;var Xc=300,Ai=301,$i=302,Fa=303,Na=304,Or=306,oa=1e3,Nn=1001,aa=1002,Be=1003,pf=1004;var Br=1005;var Ge=1006,Ua=1007;var Ri=1008;var mn=1009,qc=1010,Yc=1011,Os=1012,Oa=1013,An=1014,_n=1015,Rn=1016,Ba=1017,ka=1018,Bs=1020,$c=35902,Zc=35899,Jc=1021,Kc=1022,bn=1023,Un=1026,Ci=1027,Va=1028,za=1029,Pi=1030,Ga=1031;var Ha=1033,kr=33776,Vr=33777,zr=33778,Gr=33779,Wa=35840,Xa=35841,qa=35842,Ya=35843,$a=36196,Za=37492,Ja=37496,Ka=37488,Qa=37489,Hr=37490,ja=37491,tl=37808,el=37809,nl=37810,il=37811,sl=37812,rl=37813,ol=37814,al=37815,ll=37816,cl=37817,ul=37818,hl=37819,fl=37820,dl=37821,pl=36492,ml=36494,gl=36495,xl=36283,_l=36284,Wr=36285,bl=36286;var lr=2300,la=2301,Jo=2302,Sc=2303,wc=2400,Tc=2401,Ec=2402;var mf=3200;var Qc=0,gf=1,si="",$e="srgb",cr="srgb-linear",ur="linear",he="srgb";var Ko=7680;var xf=519,_f=512,bf=513,vf=514,vl=515,yf=516,Mf=517,yl=518,Sf=519,jc=35044;var tu="300 es",wn=2e3,hr=2001;function Zp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Jp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function fr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wf(){let i=fr("canvas");return i.style.display="block",i}var ph={},Rs=null;function dr(...i){let t="THREE."+i.shift();Rs?Rs("log",t,...i):console.log(t,...i)}function Tf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function kt(...i){i=Tf(i);let t="THREE."+i.shift();if(Rs)Rs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Vt(...i){i=Tf(i);let t="THREE."+i.shift();if(Rs)Rs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Wi(...i){let t=i.join(" ");t in ph||(ph[t]=!0,kt(...i))}function Ef(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Af={[jo]:ta,[ea]:sa,[na]:ra,[As]:ia,[ta]:jo,[sa]:ea,[ra]:na,[ia]:As},On=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Qo=Math.PI/180,ca=180/Math.PI;function bi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function ie(i,t,e){return Math.max(t,Math.min(e,i))}function Kp(i,t){return(i%t+t)%t}function jl(i,t,e){return(1-e)*i+e*t}function Dn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function de(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ru=class ru{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ru.prototype.isVector2=!0;var Gt=ru,Bn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],f=n[s+2],u=n[s+3],h=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(u!==_||c!==h||l!==d||f!==g){let m=c*h+l*d+f*g+u*_;m<0&&(h=-h,d=-d,g=-g,_=-_,m=-m);let p=1-a;if(m<.9995){let v=Math.acos(m),S=Math.sin(v);p=Math.sin(p*v)/S,a=Math.sin(a*v)/S,c=c*p+h*a,l=l*p+d*a,f=f*p+g*a,u=u*p+_*a}else{c=c*p+h*a,l=l*p+d*a,f=f*p+g*a,u=u*p+_*a;let v=1/Math.sqrt(c*c+l*l+f*f+u*u);c*=v,l*=v,f*=v,u*=v}}t[e]=c,t[e+1]=l,t[e+2]=f,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],f=n[s+3],u=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+f*u+c*d-l*h,t[e+1]=c*g+f*h+l*u-a*d,t[e+2]=l*g+f*d+a*h-c*u,t[e+3]=f*g-a*u-c*h-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),f=a(s/2),u=a(r/2),h=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=h*f*u+l*d*g,this._y=l*d*u-h*f*g,this._z=l*f*g+h*d*u,this._w=l*f*u-h*d*g;break;case"YXZ":this._x=h*f*u+l*d*g,this._y=l*d*u-h*f*g,this._z=l*f*g-h*d*u,this._w=l*f*u+h*d*g;break;case"ZXY":this._x=h*f*u-l*d*g,this._y=l*d*u+h*f*g,this._z=l*f*g+h*d*u,this._w=l*f*u-h*d*g;break;case"ZYX":this._x=h*f*u-l*d*g,this._y=l*d*u+h*f*g,this._z=l*f*g-h*d*u,this._w=l*f*u+h*d*g;break;case"YZX":this._x=h*f*u+l*d*g,this._y=l*d*u+h*f*g,this._z=l*f*g-h*d*u,this._w=l*f*u-h*d*g;break;case"XZY":this._x=h*f*u-l*d*g,this._y=l*d*u-h*f*g,this._z=l*f*g+h*d*u,this._w=l*f*u+h*d*g;break;default:kt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],f=e[6],u=e[10],h=n+a+u;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(f-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(f-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+f)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,f=e._w;return this._x=n*f+o*a+s*l-r*c,this._y=s*f+o*c+r*a-n*l,this._z=r*f+o*l+n*c-s*a,this._w=o*f-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),f=Math.sin(l);c=Math.sin(c*l)/f,e=Math.sin(e*l)/f,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ou=class ou{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(mh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(mh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),f=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*f,this.y=n+c*f+a*l-r*u,this.z=s+c*u+r*f-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return tc.copy(this).projectOnVector(t),this.sub(tc)}reflect(t){return this.sub(tc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ou.prototype.isVector3=!0;var z=ou,tc=new z,mh=new Bn,au=class au{constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let f=this.elements;return f[0]=t,f[1]=s,f[2]=a,f[3]=e,f[4]=r,f[5]=c,f[6]=n,f[7]=o,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],f=n[4],u=n[7],h=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],v=s[1],S=s[4],b=s[7],M=s[2],T=s[5],R=s[8];return r[0]=o*_+a*v+c*M,r[3]=o*m+a*S+c*T,r[6]=o*p+a*b+c*R,r[1]=l*_+f*v+u*M,r[4]=l*m+f*S+u*T,r[7]=l*p+f*b+u*R,r[2]=h*_+d*v+g*M,r[5]=h*m+d*S+g*T,r[8]=h*p+d*b+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],f=t[8];return e*o*f-e*a*l-n*r*f+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],f=t[8],u=f*o-a*l,h=a*c-f*r,d=l*r-o*c,g=e*u+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*l-f*n)*_,t[2]=(a*n-s*o)*_,t[3]=h*_,t[4]=(f*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return Wi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ec.makeScale(t,e)),this}rotate(t){return Wi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ec.makeRotation(-t)),this}translate(t,e){return Wi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ec.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};au.prototype.isMatrix3=!0;var Ht=au,ec=new Ht,gh=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xh=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qp(){let i={enabled:!0,workingColorSpace:cr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===he&&(s.r=jn(s.r),s.g=jn(s.g),s.b=jn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===he&&(s.r=Es(s.r),s.g=Es(s.g),s.b=Es(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===si?ur:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Wi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Wi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[cr]:{primaries:t,whitePoint:n,transfer:ur,toXYZ:gh,fromXYZ:xh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:t,whitePoint:n,transfer:he,toXYZ:gh,fromXYZ:xh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}}),i}var ne=Qp();function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Es(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ls,ua=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ls===void 0&&(ls=fr("canvas")),ls.width=t.width,ls.height=t.height;let s=ls.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ls}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=fr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=jn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(jn(e[n]/255)*255):e[n]=jn(e[n]);return{data:e,width:t.width,height:t.height}}else return kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},jp=0,Cs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=bi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(nc(s[o].image)):r.push(nc(s[o]))}else r=nc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function nc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ua.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(kt("Texture: Unable to serialize Texture."),{})}var tm=0,ic=new z,tn=class i extends On{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Nn,s=Nn,r=Ge,o=Ri,a=bn,c=mn,l=i.DEFAULT_ANISOTROPY,f=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=bi(),this.name="",this.source=new Cs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ic).x}get height(){return this.source.getSize(ic).y}get depth(){return this.source.getSize(ic).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){kt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oa:t.x=t.x-Math.floor(t.x);break;case Nn:t.x=t.x<0?0:1;break;case aa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oa:t.y=t.y-Math.floor(t.y);break;case Nn:t.y=t.y<0?0:1;break;case aa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Xc;tn.DEFAULT_ANISOTROPY=1;var lu=class lu{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],f=c[4],u=c[8],h=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(f-h)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(l+1)/2,b=(d+1)/2,M=(p+1)/2,T=(f+h)/4,R=(u+_)/4,x=(g+m)/4;return S>b&&S>M?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=T/n,r=R/n):b>M?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=T/s,r=x/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=R/r,s=x/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(h-f)*(h-f));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(h-f)/v,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};lu.prototype.isVector4=!0;var we=lu,ha=class extends On{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new tn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ge,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Cs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},an=class extends ha{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},pr=class extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var fa=class extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Da=class Da{constructor(t,e,n,s,r,o,a,c,l,f,u,h,d,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,f,u,h,d,g,_,m)}set(t,e,n,s,r,o,a,c,l,f,u,h,d,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=f,p[10]=u,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Da().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/cs.setFromMatrixColumn(t,0).length(),r=1/cs.setFromMatrixColumn(t,1).length(),o=1/cs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),f=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let h=o*f,d=o*u,g=a*f,_=a*u;e[0]=c*f,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=h-_*l,e[9]=-a*c,e[2]=_-h*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){let h=c*f,d=c*u,g=l*f,_=l*u;e[0]=h+_*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*f,e[9]=-a,e[2]=d*a-g,e[6]=_+h*a,e[10]=o*c}else if(t.order==="ZXY"){let h=c*f,d=c*u,g=l*f,_=l*u;e[0]=h-_*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*f,e[9]=_-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let h=o*f,d=o*u,g=a*f,_=a*u;e[0]=c*f,e[4]=g*l-d,e[8]=h*l+_,e[1]=c*u,e[5]=_*l+h,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let h=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*f,e[4]=_-h*u,e[8]=g*u+d,e[1]=u,e[5]=o*f,e[9]=-a*f,e[2]=-l*f,e[6]=d*u+g,e[10]=h-_*u}else if(t.order==="XZY"){let h=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*f,e[4]=-u,e[8]=l*f,e[1]=h*u+_,e[5]=o*f,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*f,e[10]=_*u+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(em,t,nm)}lookAt(t,e,n){let s=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),pi.crossVectors(n,un),pi.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),pi.crossVectors(n,un)),pi.normalize(),vo.crossVectors(un,pi),s[0]=pi.x,s[4]=vo.x,s[8]=un.x,s[1]=pi.y,s[5]=vo.y,s[9]=un.y,s[2]=pi.z,s[6]=vo.z,s[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],f=n[1],u=n[5],h=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],S=n[7],b=n[11],M=n[15],T=s[0],R=s[4],x=s[8],y=s[12],E=s[1],L=s[5],A=s[9],C=s[13],I=s[2],F=s[6],U=s[10],O=s[14],X=s[3],G=s[7],H=s[11],J=s[15];return r[0]=o*T+a*E+c*I+l*X,r[4]=o*R+a*L+c*F+l*G,r[8]=o*x+a*A+c*U+l*H,r[12]=o*y+a*C+c*O+l*J,r[1]=f*T+u*E+h*I+d*X,r[5]=f*R+u*L+h*F+d*G,r[9]=f*x+u*A+h*U+d*H,r[13]=f*y+u*C+h*O+d*J,r[2]=g*T+_*E+m*I+p*X,r[6]=g*R+_*L+m*F+p*G,r[10]=g*x+_*A+m*U+p*H,r[14]=g*y+_*C+m*O+p*J,r[3]=v*T+S*E+b*I+M*X,r[7]=v*R+S*L+b*F+M*G,r[11]=v*x+S*A+b*U+M*H,r[15]=v*y+S*C+b*O+M*J,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],f=t[2],u=t[6],h=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15],v=c*d-l*h,S=a*d-l*u,b=a*h-c*u,M=o*d-l*f,T=o*h-c*f,R=o*u-a*f;return e*(_*v-m*S+p*b)-n*(g*v-m*M+p*T)+s*(g*S-_*M+p*R)-r*(g*b-_*T+m*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],f=t[10];return e*(o*f-a*l)-n*(r*f-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],f=t[8],u=t[9],h=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],v=e*a-n*o,S=e*c-s*o,b=e*l-r*o,M=n*c-s*a,T=n*l-r*a,R=s*l-r*c,x=f*_-u*g,y=f*m-h*g,E=f*p-d*g,L=u*m-h*_,A=u*p-d*_,C=h*p-d*m,I=v*C-S*A+b*L+M*E-T*y+R*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/I;return t[0]=(a*C-c*A+l*L)*F,t[1]=(s*A-n*C-r*L)*F,t[2]=(_*R-m*T+p*M)*F,t[3]=(h*T-u*R-d*M)*F,t[4]=(c*E-o*C-l*y)*F,t[5]=(e*C-s*E+r*y)*F,t[6]=(m*b-g*R-p*S)*F,t[7]=(f*R-h*b+d*S)*F,t[8]=(o*A-a*E+l*x)*F,t[9]=(n*E-e*A-r*x)*F,t[10]=(g*T-_*b+p*v)*F,t[11]=(u*b-f*T-d*v)*F,t[12]=(a*y-o*L-c*x)*F,t[13]=(e*L-n*y+s*x)*F,t[14]=(_*S-g*M-m*v)*F,t[15]=(f*M-u*S+h*v)*F,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,f=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,f*a+n,f*c-s*o,0,l*c-s*a,f*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,f=o+o,u=a+a,h=r*l,d=r*f,g=r*u,_=o*f,m=o*u,p=a*u,v=c*l,S=c*f,b=c*u,M=n.x,T=n.y,R=n.z;return s[0]=(1-(_+p))*M,s[1]=(d+b)*M,s[2]=(g-S)*M,s[3]=0,s[4]=(d-b)*T,s[5]=(1-(h+p))*T,s[6]=(m+v)*T,s[7]=0,s[8]=(g+S)*R,s[9]=(m-v)*R,s[10]=(1-(h+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=cs.set(s[0],s[1],s[2]).length(),a=cs.set(s[4],s[5],s[6]).length(),c=cs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),vn.copy(this);let l=1/o,f=1/a,u=1/c;return vn.elements[0]*=l,vn.elements[1]*=l,vn.elements[2]*=l,vn.elements[4]*=f,vn.elements[5]*=f,vn.elements[6]*=f,vn.elements[8]*=u,vn.elements[9]*=u,vn.elements[10]*=u,e.setFromRotationMatrix(vn),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=wn,c=!1){let l=this.elements,f=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s),g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===wn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===hr)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=wn,c=!1){let l=this.elements,f=2/(e-t),u=2/(n-s),h=-(e+t)/(e-t),d=-(n+s)/(n-s),g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===wn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===hr)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Da.prototype.isMatrix4=!0;var xe=Da,cs=new z,vn=new xe,em=new z(0,0,0),nm=new z(1,1,1),pi=new z,vo=new z,un=new z,_h=new xe,bh=new Bn,vi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],f=s[9],u=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ie(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ie(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,d),this._y=0);break;default:kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return _h.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_h,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bh.setFromEuler(this),this.setFromQuaternion(bh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vi.DEFAULT_ORDER="XYZ";var mr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},im=0,vh=new z,us=new Bn,$n=new xe,yo=new z,Ks=new z,sm=new z,rm=new Bn,yh=new z(1,0,0),Mh=new z(0,1,0),Sh=new z(0,0,1),wh={type:"added"},om={type:"removed"},hs={type:"childadded",child:null},sc={type:"childremoved",child:null},Je=class i extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new z,e=new vi,n=new Bn,s=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new Ht}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.multiply(us),this}rotateOnWorldAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.premultiply(us),this}rotateX(t){return this.rotateOnAxis(yh,t)}rotateY(t){return this.rotateOnAxis(Mh,t)}rotateZ(t){return this.rotateOnAxis(Sh,t)}translateOnAxis(t,e){return vh.copy(t).applyQuaternion(this.quaternion),this.position.add(vh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yh,t)}translateY(t){return this.translateOnAxis(Mh,t)}translateZ(t){return this.translateOnAxis(Sh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?yo.copy(t):yo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Ks,yo,this.up):$n.lookAt(yo,Ks,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),us.setFromRotationMatrix($n),this.quaternion.premultiply(us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Vt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wh),hs.child=t,this.dispatchEvent(hs),hs.child=null):Vt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(om),sc.child=t,this.dispatchEvent(sc),sc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wh),hs.child=t,this.dispatchEvent(hs),hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,t,sm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,rm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),f=o(t.images),u=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),f.length>0&&(n.images=f),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let f=a[l];delete f.metadata,c.push(f)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Je.DEFAULT_UP=new z(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Oe=class extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}},am={type:"move"},Ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let f=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=f.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&h>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(am)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Oe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Rf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},Mo={h:0,s:0,l:0};function rc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ht=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=Kp(t,1),e=ie(e,0,1),n=ie(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=rc(o,r,t+1/3),this.g=rc(o,r,t),this.b=rc(o,r,t-1/3)}return ne.colorSpaceToWorking(this,s),this}setStyle(t,e=$e){function n(r){r!==void 0&&parseFloat(r)<1&&kt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:kt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){let n=Rf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=jn(t.r),this.g=jn(t.g),this.b=jn(t.b),this}copyLinearToSRGB(t){return this.r=Es(t.r),this.g=Es(t.g),this.b=Es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return ne.workingToColorSpace(Ye.copy(this),t),Math.round(ie(Ye.r*255,0,255))*65536+Math.round(ie(Ye.g*255,0,255))*256+Math.round(ie(Ye.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(Ye.copy(this),e);let n=Ye.r,s=Ye.g,r=Ye.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,f=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=f<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=f,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=$e){ne.workingToColorSpace(Ye.copy(this),t);let e=Ye.r,n=Ye.g,s=Ye.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(mi),this.setHSL(mi.h+t,mi.s+e,mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mi),t.getHSL(Mo);let n=jl(mi.h,Mo.h,e),s=jl(mi.s,Mo.s,e),r=jl(mi.l,Mo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ye=new ht;ht.NAMES=Rf;var gr=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ht(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var xr=class extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},yn=new z,Zn=new z,oc=new z,Jn=new z,fs=new z,ds=new z,Th=new z,ac=new z,lc=new z,cc=new z,uc=new we,hc=new we,fc=new we,Fn=class i{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),yn.subVectors(t,e),s.cross(yn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){yn.subVectors(s,e),Zn.subVectors(n,e),oc.subVectors(t,e);let o=yn.dot(yn),a=yn.dot(Zn),c=yn.dot(oc),l=Zn.dot(Zn),f=Zn.dot(oc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let h=1/u,d=(l*c-a*f)*h,g=(o*f-a*c)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Jn.x),c.addScaledVector(o,Jn.y),c.addScaledVector(a,Jn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return uc.setScalar(0),hc.setScalar(0),fc.setScalar(0),uc.fromBufferAttribute(t,e),hc.fromBufferAttribute(t,n),fc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(uc,r.x),o.addScaledVector(hc,r.y),o.addScaledVector(fc,r.z),o}static isFrontFacing(t,e,n,s){return yn.subVectors(n,e),Zn.subVectors(t,e),yn.cross(Zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),yn.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;fs.subVectors(s,n),ds.subVectors(r,n),ac.subVectors(t,n);let c=fs.dot(ac),l=ds.dot(ac);if(c<=0&&l<=0)return e.copy(n);lc.subVectors(t,s);let f=fs.dot(lc),u=ds.dot(lc);if(f>=0&&u<=f)return e.copy(s);let h=c*u-f*l;if(h<=0&&c>=0&&f<=0)return o=c/(c-f),e.copy(n).addScaledVector(fs,o);cc.subVectors(t,r);let d=fs.dot(cc),g=ds.dot(cc);if(g>=0&&d<=g)return e.copy(r);let _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ds,a);let m=f*g-d*u;if(m<=0&&u-f>=0&&d-g>=0)return Th.subVectors(r,s),a=(u-f)/(u-f+(d-g)),e.copy(s).addScaledVector(Th,a);let p=1/(m+_+h);return o=_*p,a=h*p,e.copy(n).addScaledVector(fs,o).addScaledVector(ds,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},kn=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Mn):Mn.fromBufferAttribute(r,o),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),So.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),So.copy(n.boundingBox)),So.applyMatrix4(t.matrixWorld),this.union(So)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qs),wo.subVectors(this.max,Qs),ps.subVectors(t.a,Qs),ms.subVectors(t.b,Qs),gs.subVectors(t.c,Qs),gi.subVectors(ms,ps),xi.subVectors(gs,ms),Vi.subVectors(ps,gs);let e=[0,-gi.z,gi.y,0,-xi.z,xi.y,0,-Vi.z,Vi.y,gi.z,0,-gi.x,xi.z,0,-xi.x,Vi.z,0,-Vi.x,-gi.y,gi.x,0,-xi.y,xi.x,0,-Vi.y,Vi.x,0];return!dc(e,ps,ms,gs,wo)||(e=[1,0,0,0,1,0,0,0,1],!dc(e,ps,ms,gs,wo))?!1:(To.crossVectors(gi,xi),e=[To.x,To.y,To.z],dc(e,ps,ms,gs,wo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Kn=[new z,new z,new z,new z,new z,new z,new z,new z],Mn=new z,So=new kn,ps=new z,ms=new z,gs=new z,gi=new z,xi=new z,Vi=new z,Qs=new z,wo=new z,To=new z,zi=new z;function dc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){zi.fromArray(i,r);let a=s.x*Math.abs(zi.x)+s.y*Math.abs(zi.y)+s.z*Math.abs(zi.z),c=t.dot(zi),l=e.dot(zi),f=n.dot(zi);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>a)return!1}return!0}var Ce=new z,Eo=new Gt,lm=0,on=class extends On{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jc,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Eo.fromBufferAttribute(this,e),Eo.applyMatrix3(t),this.setXY(e,Eo.x,Eo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Dn(e,this.array)),e}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Dn(e,this.array)),e}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Dn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Dn(e,this.array)),e}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array),r=de(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var _r=class extends on{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var br=class extends on{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Yt=class extends on{constructor(t,e,n){super(new Float32Array(t),e,n)}},cm=new kn,js=new z,pc=new z,ti=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):cm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;js.subVectors(t,this.center);let e=js.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(js,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(js.copy(t.center).add(pc)),this.expandByPoint(js.copy(t.center).sub(pc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},um=0,xn=new xe,mc=new Je,xs=new z,hn=new kn,tr=new kn,Ue=new z,Me=class i extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zp(t)?br:_r)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,n){return xn.makeTranslation(t,e,n),this.applyMatrix4(xn),this}scale(t,e,n){return xn.makeScale(t,e,n),this.applyMatrix4(xn),this}lookAt(t){return mc.lookAt(t),mc.updateMatrix(),this.applyMatrix4(mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Yt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let n=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];tr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(hn.min,tr.min),hn.expandByPoint(Ue),Ue.addVectors(hn.max,tr.max),hn.expandByPoint(Ue)):(hn.expandByPoint(tr.min),hn.expandByPoint(tr.max))}hn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ue.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ue));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,f=a.count;l<f;l++)Ue.fromBufferAttribute(a,l),c&&(xs.fromBufferAttribute(t,l),Ue.add(xs)),s=Math.max(s,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new on(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let x=0;x<n.count;x++)a[x]=new z,c[x]=new z;let l=new z,f=new z,u=new z,h=new Gt,d=new Gt,g=new Gt,_=new z,m=new z;function p(x,y,E){l.fromBufferAttribute(n,x),f.fromBufferAttribute(n,y),u.fromBufferAttribute(n,E),h.fromBufferAttribute(r,x),d.fromBufferAttribute(r,y),g.fromBufferAttribute(r,E),f.sub(l),u.sub(l),d.sub(h),g.sub(h);let L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(_.copy(f).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(L),m.copy(u).multiplyScalar(d.x).addScaledVector(f,-g.x).multiplyScalar(L),a[x].add(_),a[y].add(_),a[E].add(_),c[x].add(m),c[y].add(m),c[E].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let x=0,y=v.length;x<y;++x){let E=v[x],L=E.start,A=E.count;for(let C=L,I=L+A;C<I;C+=3)p(t.getX(C+0),t.getX(C+1),t.getX(C+2))}let S=new z,b=new z,M=new z,T=new z;function R(x){M.fromBufferAttribute(s,x),T.copy(M);let y=a[x];S.copy(y),S.sub(M.multiplyScalar(M.dot(y))).normalize(),b.crossVectors(T,y);let L=b.dot(c[x])<0?-1:1;o.setXYZW(x,S.x,S.y,S.z,L)}for(let x=0,y=v.length;x<y;++x){let E=v[x],L=E.start,A=E.count;for(let C=L,I=L+A;C<I;C+=3)R(t.getX(C+0)),R(t.getX(C+1)),R(t.getX(C+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new on(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let s=new z,r=new z,o=new z,a=new z,c=new z,l=new z,f=new z,u=new z;if(t)for(let h=0,d=t.count;h<d;h+=3){let g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),f.subVectors(o,r),u.subVectors(s,r),f.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(f),c.add(f),l.add(f),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),f.subVectors(o,r),u.subVectors(s,r),f.cross(u),n.setXYZ(h+0,f.x,f.y,f.z),n.setXYZ(h+1,f.x,f.y,f.z),n.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,c){let l=a.array,f=a.itemSize,u=a.normalized,h=new l.constructor(c.length*f),d=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*f;for(let p=0;p<f;p++)h[g++]=l[d++]}return new on(h,f,u)}if(this.index===null)return kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let f=0,u=l.length;f<u;f++){let h=l[f],d=t(h,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],f=[];for(let u=0,h=l.length;u<h;u++){let d=l[u];f.push(d.toJSON(t.data))}f.length>0&&(s[c]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let f=s[l];this.setAttribute(l,f.clone(e))}let r=t.morphAttributes;for(let l in r){let f=[],u=r[l];for(let h=0,d=u.length;h<d;h++)f.push(u[h].clone(e));this.morphAttributes[l]=f}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,f=o.length;l<f;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},da=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=jc,this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},je=new z,vr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Dn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Dn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Dn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Dn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array),r=de(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){dr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new on(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){dr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},gc=new z,hm=new z,fm=new Ht,Sn=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=gc.subVectors(n,e).cross(hm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(gc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||fm.getNormalMatrix(t),s=this.coplanarPoint(gc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},dm=0,ei=class extends On{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=Us,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nc,this.blendDst=Uc,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ko,this.stencilZFail=Ko,this.stencilZPass=Ko,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){kt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ht().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Sn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Gt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Gt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ni=class extends ei{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},_s,er=new z,bs=new z,vs=new z,ys=new Gt,nr=new Gt,Cf=new xe,Ao=new z,ir=new z,Ro=new z,Eh=new Gt,xc=new Gt,Ah=new Gt,yi=class extends Je{constructor(t=new ni){if(super(),this.isSprite=!0,this.type="Sprite",_s===void 0){_s=new Me;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new da(e,5);_s.setIndex([0,1,2,0,2,3]),_s.setAttribute("position",new vr(n,3,0,!1)),_s.setAttribute("uv",new vr(n,2,3,!1))}this.geometry=_s,this.material=t,this.center=new Gt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Vt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bs.setFromMatrixScale(this.matrixWorld),Cf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),vs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bs.multiplyScalar(-vs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Co(Ao.set(-.5,-.5,0),vs,o,bs,s,r),Co(ir.set(.5,-.5,0),vs,o,bs,s,r),Co(Ro.set(.5,.5,0),vs,o,bs,s,r),Eh.set(0,0),xc.set(1,0),Ah.set(1,1);let a=t.ray.intersectTriangle(Ao,ir,Ro,!1,er);if(a===null&&(Co(ir.set(-.5,.5,0),vs,o,bs,s,r),xc.set(0,1),a=t.ray.intersectTriangle(Ao,Ro,ir,!1,er),a===null))return;let c=t.ray.origin.distanceTo(er);c<t.near||c>t.far||e.push({distance:c,point:er.clone(),uv:Fn.getInterpolation(er,Ao,ir,Ro,Eh,xc,Ah,new Gt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Co(i,t,e,n,s,r){ys.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(nr.x=r*ys.x-s*ys.y,nr.y=s*ys.x+r*ys.y):nr.copy(ys),i.copy(t),i.x+=nr.x,i.y+=nr.y,i.applyMatrix4(Cf)}var Qn=new z,_c=new z,Po=new z,Io=new z,yr=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qn.copy(this.origin).addScaledVector(this.direction,e),Qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){_c.copy(t).add(e).multiplyScalar(.5),Po.copy(e).sub(t).normalize(),Io.copy(this.origin).sub(_c);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Po),a=Io.dot(this.direction),c=-Io.dot(Po),l=Io.lengthSq(),f=Math.abs(1-o*o),u,h,d,g;if(f>0)if(u=o*c-a,h=o*a-c,g=r*f,u>=0)if(h>=-g)if(h<=g){let _=1/f;u*=_,h*=_,d=u*(u+o*h+2*a)+h*(o*u+h+2*c)+l}else h=r,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*c)+l;else h=-r,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*c)+l;else h<=-g?(u=Math.max(0,-(-o*r+a)),h=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+h*(h+2*c)+l):h<=g?(u=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(u=Math.max(0,-(o*r+a)),h=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+h*(h+2*c)+l);else h=o>0?-r:r,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(_c).addScaledVector(Po,h),d}intersectSphere(t,e){if(t.radius<0)return null;Qn.subVectors(t.center,this.origin);let n=Qn.dot(this.direction),s=Qn.dot(Qn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),f>=0?(r=(t.min.y-h.y)*f,o=(t.max.y-h.y)*f):(r=(t.max.y-h.y)*f,o=(t.min.y-h.y)*f),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-h.z)*u,c=(t.max.z-h.z)*u):(a=(t.max.z-h.z)*u,c=(t.min.z-h.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Qn)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,f=a.z,u=t.x-o.x,h=t.y-o.y,d=t.z-o.z,g=e.x-o.x,_=e.y-o.y,m=e.z-o.z,p=n.x-o.x,v=n.y-o.y,S=n.z-o.z,b=Math.abs(c),M=Math.abs(l),T=Math.abs(f),R,x,y,E,L,A,C,I,F,U,O,X;if(b>=M&&b>=T?(y=c,A=u,F=g,X=p,c>=0?(R=l,x=f,E=h,L=d,C=_,I=m,U=v,O=S):(R=f,x=l,E=d,L=h,C=m,I=_,U=S,O=v)):M>=T?(y=l,A=h,F=_,X=v,l>=0?(R=f,x=c,E=d,L=u,C=m,I=g,U=S,O=p):(R=c,x=f,E=u,L=d,C=g,I=m,U=p,O=S)):(y=f,A=d,F=m,X=S,f>=0?(R=c,x=l,E=u,L=h,C=g,I=_,U=p,O=v):(R=l,x=c,E=h,L=u,C=_,I=g,U=v,O=p)),y===0)return null;let G=R/y,H=x/y,J=1/y,pt=E-G*A,rt=L-H*A,ft=C-G*F,St=I-H*F,Lt=U-G*X,K=O-H*X,$=Lt*St-K*ft,ct=pt*K-rt*Lt,vt=ft*rt-St*pt;if(s){if($<0||ct<0||vt<0)return null}else if(($<0||ct<0||vt<0)&&($>0||ct>0||vt>0))return null;let _t=$+ct+vt;if(_t===0)return null;let Dt=J*($*A+ct*F+vt*X);return(_t>0?Dt<0:Dt>0)?null:this.at(Dt/_t,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},re=class extends ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=Oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Rh=new xe,Gi=new yr,Lo=new ti,Ch=new z,Do=new z,Fo=new z,No=new z,bc=new z,Uo=new z,Ph=new z,Oo=new z,te=class extends Je{constructor(t=new Me,e=new re){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Uo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let f=a[c],u=r[c];f!==0&&(bc.fromBufferAttribute(u,t),o?Uo.addScaledVector(bc,f):Uo.addScaledVector(bc.sub(e),f))}e.add(Uo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(r),Gi.copy(t.ray).recast(t.near),!(Lo.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(Lo,Ch)===null||Gi.origin.distanceToSquared(Ch)>(t.far-t.near)**2))&&(Rh.copy(r).invert(),Gi.copy(t.ray).applyMatrix4(Rh),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,f=r.attributes.uv1,u=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){let m=h[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let b=v,M=S;b<M;b+=3){let T=a.getX(b),R=a.getX(b+1),x=a.getX(b+2);s=Bo(this,p,t,n,l,f,u,T,R,x),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let v=a.getX(m),S=a.getX(m+1),b=a.getX(m+2);s=Bo(this,o,t,n,l,f,u,v,S,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){let m=h[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),S=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let b=v,M=S;b<M;b+=3){let T=b,R=b+1,x=b+2;s=Bo(this,p,t,n,l,f,u,T,R,x),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let v=m,S=m+1,b=m+2;s=Bo(this,o,t,n,l,f,u,v,S,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function pm(i,t,e,n,s,r,o,a){let c;if(t.side===nn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Ei,a),c===null)return null;Oo.copy(a),Oo.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Oo);return l<e.near||l>e.far?null:{distance:l,point:Oo.clone(),object:i}}function Bo(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Do),i.getVertexPosition(c,Fo),i.getVertexPosition(l,No);let f=pm(i,t,e,n,Do,Fo,No,Ph);if(f){let u=new z;Fn.getBarycoord(Ph,Do,Fo,No,u),s&&(f.uv=Fn.getInterpolatedAttribute(s,a,c,l,u,new Gt)),r&&(f.uv1=Fn.getInterpolatedAttribute(r,a,c,l,u,new Gt)),o&&(f.normal=Fn.getInterpolatedAttribute(o,a,c,l,u,new z),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new z,materialIndex:0};Fn.getNormal(Do,Fo,No,h.normal),f.face=h,f.barycoord=u}return f}var Mr=class extends tn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Be,f=Be,u,h){super(null,o,a,c,l,f,s,r,u,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sr=class extends on{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ms=new xe,Ih=new xe,ko=[],Lh=new kn,mm=new xe,sr=new te,rr=new ti,Xi=class extends te{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Sr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,mm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new kn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ms),Lh.copy(t.boundingBox).applyMatrix4(Ms),this.boundingBox.union(Lh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ti),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ms),rr.copy(t.boundingSphere).applyMatrix4(Ms),this.boundingSphere.union(rr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(sr.geometry=this.geometry,sr.material=this.material,sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rr.copy(this.boundingSphere),rr.applyMatrix4(n),t.ray.intersectsSphere(rr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ms),Ih.multiplyMatrices(n,Ms),sr.matrixWorld=Ih,sr.raycast(t,ko);for(let o=0,a=ko.length;o<a;o++){let c=ko[o];c.instanceId=r,c.object=this,e.push(c)}ko.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Sr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Mr(new Float32Array(s*this.count),s,this.count,Va,_n));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Hi=new ti,gm=new Gt(.5,.5),Vo=new z,wr=class{constructor(t=new Sn,e=new Sn,n=new Sn,s=new Sn,r=new Sn,o=new Sn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=wn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],f=r[4],u=r[5],h=r[6],d=r[7],g=r[8],_=r[9],m=r[10],p=r[11],v=r[12],S=r[13],b=r[14],M=r[15];if(s[0].setComponents(l-o,d-f,p-g,M-v).normalize(),s[1].setComponents(l+o,d+f,p+g,M+v).normalize(),s[2].setComponents(l+a,d+u,p+_,M+S).normalize(),s[3].setComponents(l-a,d-u,p-_,M-S).normalize(),n)s[4].setComponents(c,h,m,b).normalize(),s[5].setComponents(l-c,d-h,p-m,M-b).normalize();else if(s[4].setComponents(l-c,d-h,p-m,M-b).normalize(),e===wn)s[5].setComponents(l+c,d+h,p+m,M+b).normalize();else if(e===hr)s[5].setComponents(c,h,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(t){Hi.center.set(0,0,0);let e=gm.distanceTo(t.center);return Hi.radius=.7071067811865476+e,Hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Vo.x=s.normal.x>0?t.max.x:t.min.x,Vo.y=s.normal.y>0?t.max.y:t.min.y,Vo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Vo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ln=class extends ei{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},pa=new z,ma=new z,Dh=new xe,or=new yr,zo=new ti,vc=new z,Fh=new z,ga=class extends Je{constructor(t=new Me,e=new ln){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)pa.fromBufferAttribute(e,s-1),ma.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=pa.distanceTo(ma);t.setAttribute("lineDistance",new Yt(n,1))}else kt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zo.copy(n.boundingSphere),zo.applyMatrix4(s),zo.radius+=r,t.ray.intersectsSphere(zo)===!1)return;Dh.copy(s).invert(),or.copy(t.ray).applyMatrix4(Dh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,f=n.index,h=n.attributes.position;if(f!==null){let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=l){let p=f.getX(_),v=f.getX(_+1),S=Go(this,t,or,c,p,v,_);S&&e.push(S)}if(this.isLineLoop){let _=f.getX(g-1),m=f.getX(d),p=Go(this,t,or,c,_,m,g-1);p&&e.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=l){let p=Go(this,t,or,c,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){let _=Go(this,t,or,c,g-1,d,g-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Go(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(pa.fromBufferAttribute(a,s),ma.fromBufferAttribute(a,r),e.distanceSqToSegment(pa,ma,vc,Fh)>n)return;vc.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(vc);if(!(l<t.near||l>t.far))return{distance:l,point:Fh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Nh=new z,Uh=new z,fn=class extends ga{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Nh.fromBufferAttribute(e,s),Uh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Nh.distanceTo(Uh);t.setAttribute("lineDistance",new Yt(n,1))}else kt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Tr=class extends tn{constructor(t=[],e=Ai,n,s,r,o,a,c,l,f){super(t,e,n,s,r,o,a,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Is=class extends tn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Mi=class extends tn{constructor(t,e,n=An,s,r,o,a=Be,c=Be,l,f=Un,u=1){if(f!==Un&&f!==Ci)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:u};super(h,s,r,o,a,c,f,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Cs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},xa=class extends Mi{constructor(t,e=An,n=Ai,s,r,o=Be,a=Be,c,l=Un){let f={width:t,height:t,depth:1},u=[f,f,f,f,f,f];super(t,t,e,n,s,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Er=class extends tn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Tn=class i extends Me{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],f=[],u=[],h=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(f,3)),this.setAttribute("uv",new Yt(u,2));function g(_,m,p,v,S,b,M,T,R,x,y){let E=b/R,L=M/x,A=b/2,C=M/2,I=T/2,F=R+1,U=x+1,O=0,X=0,G=new z;for(let H=0;H<U;H++){let J=H*L-C;for(let pt=0;pt<F;pt++){let rt=pt*E-A;G[_]=rt*v,G[m]=J*S,G[p]=I,l.push(G.x,G.y,G.z),G[_]=0,G[m]=0,G[p]=T>0?1:-1,f.push(G.x,G.y,G.z),u.push(pt/R),u.push(1-H/x),O+=1}}for(let H=0;H<x;H++)for(let J=0;J<R;J++){let pt=h+J+F*H,rt=h+J+F*(H+1),ft=h+(J+1)+F*(H+1),St=h+(J+1)+F*H;c.push(pt,rt,St),c.push(rt,ft,St),X+=6}a.addGroup(d,X,y),d+=X,h+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ar=class i extends Me{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new z,f=new Gt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,h=3;u<=e;u++,h+=3){let d=n+u/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),f.x=(o[h]/t+1)/2,f.y=(o[h+1]/t+1)/2,c.push(f.x,f.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(a,3)),this.setAttribute("uv",new Yt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Vn=class i extends Me{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let f=[],u=[],h=[],d=[],g=0,_=[],m=n/2,p=0;v(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(f),this.setAttribute("position",new Yt(u,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(d,2));function v(){let b=new z,M=new z,T=0,R=(e-t)/n;for(let x=0;x<=r;x++){let y=[],E=x/r,L=E*(e-t)+t;for(let A=0;A<=s;A++){let C=A/s,I=C*c+a,F=Math.sin(I),U=Math.cos(I);M.x=L*F,M.y=-E*n+m,M.z=L*U,u.push(M.x,M.y,M.z),b.set(F,R,U).normalize(),h.push(b.x,b.y,b.z),d.push(C,1-E),y.push(g++)}_.push(y)}for(let x=0;x<s;x++)for(let y=0;y<r;y++){let E=_[y][x],L=_[y+1][x],A=_[y+1][x+1],C=_[y][x+1];(t>0||y!==0)&&(f.push(E,L,C),T+=3),(e>0||y!==r-1)&&(f.push(L,A,C),T+=3)}l.addGroup(p,T,0),p+=T}function S(b){let M=g,T=new Gt,R=new z,x=0,y=b===!0?t:e,E=b===!0?1:-1;for(let A=1;A<=s;A++)u.push(0,m*E,0),h.push(0,E,0),d.push(.5,.5),g++;let L=g;for(let A=0;A<=s;A++){let I=A/s*c+a,F=Math.cos(I),U=Math.sin(I);R.x=y*U,R.y=m*E,R.z=y*F,u.push(R.x,R.y,R.z),h.push(0,E,0),T.x=F*.5+.5,T.y=U*.5*E+.5,d.push(T.x,T.y),g++}for(let A=0;A<s;A++){let C=M+A,I=L+A;b===!0?f.push(I,I+1,C):f.push(I+1,I,C),x+=3}l.addGroup(p,x,b===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ls=class i extends Vn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ho=new z,Wo=new z,yc=new z,Xo=new Fn,ii=class extends Me{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(Qo*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],f=["a","b","c"],u=new Array(3),h={},d=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:_,b:m,c:p}=Xo;if(_.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),Xo.getNormal(yc),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let v=0;v<3;v++){let S=(v+1)%3,b=u[v],M=u[S],T=Xo[f[v]],R=Xo[f[S]],x=`${b}_${M}`,y=`${M}_${b}`;y in h&&h[y]?(yc.dot(h[y].normal)<=r&&(d.push(T.x,T.y,T.z),d.push(R.x,R.y,R.z)),h[y]=null):x in h||(h[x]={index0:l[v],index1:l[S],normal:yc.clone()})}}for(let g in h)if(h[g]){let{index0:_,index1:m}=h[g];Ho.fromBufferAttribute(a,_),Wo.fromBufferAttribute(a,m),d.push(Ho.x,Ho.y,Ho.z),d.push(Wo.x,Wo.y,Wo.z)}this.setAttribute("position",new Yt(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function xm(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Pf(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Mm(i,t,r,e)),i.length>80*e){a=i[0],c=i[1];let f=a,u=c;for(let h=e;h<s;h+=e){let d=i[h],g=i[h+1];d<a&&(a=d),g<c&&(c=g),d>f&&(f=d),g>u&&(u=g)}l=Math.max(f-a,u-c),l=l!==0?32767/l:0}return Rr(r,o,e,a,c,l,0),o}function Pf(i,t,e,n,s){let r;if(s===Dm(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Oh(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Oh(o/n|0,i[o],i[o+1],r);return r&&Ds(r,r.next)&&(Pr(r),r=r.next),r}function qi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ds(e,e.next)||Se(e.prev,e,e.next)===0)){if(Pr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Rr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Am(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?bm(i,n,s,r):_m(i)){t.push(c.i,i.i,l.i),Pr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=vm(qi(i),t),Rr(i,t,e,n,s,r,2)):o===2&&ym(i,t,e,n,s,r):Rr(qi(i),t,e,n,s,r,1);break}}}function _m(i){let t=i.prev,e=i,n=i.next;if(Se(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,f=Math.min(s,r,o),u=Math.min(a,c,l),h=Math.max(s,r,o),d=Math.max(a,c,l),g=n.next;for(;g!==t;){if(g.x>=f&&g.x<=h&&g.y>=u&&g.y<=d&&ar(s,a,r,c,o,l,g.x,g.y)&&Se(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function bm(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Se(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,f=s.y,u=r.y,h=o.y,d=Math.min(a,c,l),g=Math.min(f,u,h),_=Math.max(a,c,l),m=Math.max(f,u,h),p=Ac(d,g,t,e,n),v=Ac(_,m,t,e,n),S=i.prevZ,b=i.nextZ;for(;S&&S.z>=p&&b&&b.z<=v;){if(S.x>=d&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&ar(a,f,c,u,l,h,S.x,S.y)&&Se(S.prev,S,S.next)>=0||(S=S.prevZ,b.x>=d&&b.x<=_&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&ar(a,f,c,u,l,h,b.x,b.y)&&Se(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;S&&S.z>=p;){if(S.x>=d&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&ar(a,f,c,u,l,h,S.x,S.y)&&Se(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;b&&b.z<=v;){if(b.x>=d&&b.x<=_&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&ar(a,f,c,u,l,h,b.x,b.y)&&Se(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function vm(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ds(n,s)&&Lf(n,e,e.next,s)&&Cr(n,s)&&Cr(s,n)&&(t.push(n.i,e.i,s.i),Pr(e),Pr(e.next),e=i=s),e=e.next}while(e!==i);return qi(e)}function ym(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Pm(o,a)){let c=Df(o,a);o=qi(o,o.next),c=qi(c,c.next),Rr(o,t,e,n,s,r,0),Rr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Mm(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Pf(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Cm(l))}s.sort(Sm);for(let r=0;r<s.length;r++)e=wm(s[r],e);return e}function Sm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function wm(i,t){let e=Tm(i,t);if(!e)return t;let n=Df(e,i);return qi(n,n.next),qi(e,e.next)}function Tm(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Ds(i,e))return e;do{if(Ds(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,f=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&If(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);Cr(e,i)&&(u<f||u===f&&(e.x>o.x||e.x===o.x&&Em(o,e)))&&(o=e,f=u)}e=e.next}while(e!==a);return o}function Em(i,t){return Se(i.prev,i,t.prev)<0&&Se(t.next,i,i.next)<0}function Am(i,t,e,n){let s=i;do s.z===0&&(s.z=Ac(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Rm(s)}function Rm(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Ac(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Cm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function If(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function ar(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&If(i,t,e,n,s,r,o,a)}function Pm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Im(i,t)&&(Cr(i,t)&&Cr(t,i)&&Lm(i,t)&&(Se(i.prev,i,t.prev)||Se(i,t.prev,t))||Ds(i,t)&&Se(i.prev,i,i.next)>0&&Se(t.prev,t,t.next)>0)}function Se(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ds(i,t){return i.x===t.x&&i.y===t.y}function Lf(i,t,e,n){let s=Yo(Se(i,t,e)),r=Yo(Se(i,t,n)),o=Yo(Se(e,n,i)),a=Yo(Se(e,n,t));return!!(s!==r&&o!==a||s===0&&qo(i,e,t)||r===0&&qo(i,n,t)||o===0&&qo(e,i,n)||a===0&&qo(e,t,n))}function qo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Yo(i){return i>0?1:i<0?-1:0}function Im(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Lf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Cr(i,t){return Se(i.prev,i,i.next)<0?Se(i,t,i.next)>=0&&Se(i,i.prev,t)>=0:Se(i,t,i.prev)<0||Se(i,i.next,t)<0}function Lm(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Df(i,t){let e=Rc(i.i,i.x,i.y),n=Rc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Oh(i,t,e,n){let s=Rc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Pr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Rc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Dm(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Cc=class{static triangulate(t,e,n=2){return xm(t,e,n)}},Ir=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Bh(t),kh(n,t);let o=t.length;e.forEach(Bh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,kh(n,e[c]);let a=Cc.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Bh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function kh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var en=class i extends Me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,f=c+1,u=t/a,h=e/c,d=[],g=[],_=[],m=[];for(let p=0;p<f;p++){let v=p*h-o;for(let S=0;S<l;S++){let b=S*u-r;g.push(b,-v,0),_.push(0,0,1),m.push(S/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){let S=v+l*p,b=v+l*(p+1),M=v+1+l*(p+1),T=v+1+l*p;d.push(S,b,T),d.push(b,M,T)}this.setIndex(d),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(_,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Fs=class i extends Me{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],f=[],u=t,h=(e-t)/s,d=new z,g=new Gt;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let p=r+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,f.push(g.x,g.y)}u+=h}for(let _=0;_<s;_++){let m=_*(n+1);for(let p=0;p<n;p++){let v=p+m,S=v,b=v+n+1,M=v+n+2,T=v+1;a.push(S,b,T),a.push(b,M,T)}}this.setIndex(a),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Lr=class i extends Me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,f=[],u=new z,h=new z,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let v=[],S=p/n,b=o+S*a,M=t*Math.cos(b),T=Math.sqrt(t*t-M*M),R=0;p===0&&o===0?R=.5/e:p===n&&c===Math.PI&&(R=-.5/e);for(let x=0;x<=e;x++){let y=x/e,E=s+y*r;u.x=-T*Math.cos(E),u.y=M,u.z=T*Math.sin(E),g.push(u.x,u.y,u.z),h.copy(u).normalize(),_.push(h.x,h.y,h.z),m.push(y+R,1-S),v.push(l++)}f.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){let S=f[p][v+1],b=f[p][v],M=f[p+1][v],T=f[p+1][v+1];(p!==0||o>0)&&d.push(S,b,T),(p!==n-1||c<Math.PI)&&d.push(b,M,T)}this.setIndex(d),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(_,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Zi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Vh(s))s.isRenderTargetTexture?(kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Vh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ke(i){let t={};for(let e=0;e<i.length;e++){let n=Zi(i[e]);for(let s in n)t[s]=n[s]}return t}function Vh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Fm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function eu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var Ff={clone:Zi,merge:Ke},Nm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Um=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,dn=class extends ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nm,this.fragmentShader=Um,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zi(t.uniforms),this.uniformsGroups=Fm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ht().setHex(s.value);break;case"v2":this.uniforms[n].value=new Gt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new we().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ht().fromArray(s.value);break;case"m4":this.uniforms[n].value=new xe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},_a=class extends dn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ba=class extends ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},va=class extends ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ss(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Mc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Si=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ya=class extends Si{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wc,endingEnd:wc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Tc:r=t,a=2*e-n;break;case Ec:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Tc:o=t,c=2*n-e;break;case Ec:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,f=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*f,this._offsetNext=o*f}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,f=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,p=-h*m+2*h*_-h*g,v=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*g+1,S=(-1-d)*m+(1.5+d)*_+.5*g,b=d*m-d*_;for(let M=0;M!==a;++M)r[M]=p*o[f+M]+v*o[l+M]+S*o[c+M]+b*o[u+M];return r}},Ma=class extends Si{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,f=(n-e)/(s-e),u=1-f;for(let h=0;h!==a;++h)r[h]=o[l+h]*u+o[c+h]*f;return r}},Sa=class extends Si{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},wa=class extends Si{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,f=this.inTangents,u=this.outTangents;if(!f||!u){let g=(n-e)/(s-e),_=1-g;for(let m=0;m!==a;++m)r[m]=o[l+m]*_+o[c+m]*g;return r}let h=a*2,d=t-1;for(let g=0;g!==a;++g){let _=o[l+g],m=o[c+g],p=d*h+g*2,v=u[p],S=u[p+1],b=t*h+g*2,M=f[b],T=f[b+1],R=Bm(n,e,v,M,s);r[g]=Nf(R,_,S,T,m)}return r}};function Nf(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Om(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Bm(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Nf(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let c=Om(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var pn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ss(e,this.TimeBufferType),this.values=Ss(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ss(t.times,Array),values:Ss(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Mc(t.settings)&&(n.settings={inTangents:Ss(t.settings.inTangents,Array),outTangents:Ss(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Sa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ma(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new wa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case lr:e=this.InterpolantFactoryMethodDiscrete;break;case la:e=this.InterpolantFactoryMethodLinear;break;case Jo:e=this.InterpolantFactoryMethodSmooth;break;case Sc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return kt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lr;case this.InterpolantFactoryMethodLinear:return la;case this.InterpolantFactoryMethodSmooth:return Jo;case this.InterpolantFactoryMethodBezier:return Sc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Mc(this.settings)&&(zh(this.settings.inTangents,t),zh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Vt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Vt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Vt("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){Vt("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Jp(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){Vt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Jo,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],f=t[a+1];if(l!==f&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,h=u-n,d=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[h+g]||_!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,h=o*n;for(let d=0;d!==n;++d)e[h+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Mc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function zh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}pn.prototype.ValueTypeName="";pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=la;var wi=class extends pn{constructor(t,e,n){super(t,e,n)}};wi.prototype.ValueTypeName="bool";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=lr;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ta=class extends pn{constructor(t,e,n,s){super(t,e,n,s)}};Ta.prototype.ValueTypeName="color";var Ea=class extends pn{constructor(t,e,n,s){super(t,e,n,s)}};Ea.prototype.ValueTypeName="number";var Aa=class extends Si{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let f=l+a;l!==f;l+=4)Bn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Dr=class extends pn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Aa(this.times,this.values,this.getValueSize(),t)}};Dr.prototype.ValueTypeName="quaternion";Dr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ti=class extends pn{constructor(t,e,n){super(t,e,n)}};Ti.prototype.ValueTypeName="string";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=lr;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var Ra=class extends pn{constructor(t,e,n,s){super(t,e,n,s)}};Ra.prototype.ValueTypeName="vector";var Ca=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(f){a++,r===!1&&s.onStart!==void 0&&s.onStart(f,o,a),r=!0},this.itemEnd=function(f){o++,s.onProgress!==void 0&&s.onProgress(f,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,u){return l.push(f,u),this},this.removeHandler=function(f){let u=l.indexOf(f);return u!==-1&&l.splice(u,2),this},this.getHandler=function(f){for(let u=0,h=l.length;u<h;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(f))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Uf=new Ca,Pa=class{constructor(t){this.manager=t!==void 0?t:Uf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Pa.DEFAULT_MATERIAL_NAME="__DEFAULT";var $o=new z,Zo=new Bn,Ln=new z,Fr=class extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose($o,Zo,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($o,Zo,Ln.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose($o,Zo,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($o,Zo,Ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},_i=new z,Gh=new Gt,Hh=new Gt,Ze=class extends Fr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ca*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Qo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ca*2*Math.atan(Math.tan(Qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_i.x,_i.y).multiplyScalar(-t/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-t/_i.z)}getViewSize(t,e){return this.getViewBounds(t,Gh,Hh),e.subVectors(Hh,Gh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Qo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Nr=class extends Fr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=f*this.view.offsetY,c=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var ws=-90,Ts=1,Ia=class extends Je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ze(ws,Ts,t,e);s.layers=this.layers,this.add(s);let r=new Ze(ws,Ts,t,e);r.layers=this.layers,this.add(r);let o=new Ze(ws,Ts,t,e);o.layers=this.layers,this.add(o);let a=new Ze(ws,Ts,t,e);a.layers=this.layers,this.add(a);let c=new Ze(ws,Ts,t,e);c.layers=this.layers,this.add(c);let l=new Ze(ws,Ts,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,f]=this.children,u=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(u,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},La=class extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var nu="\\[\\]\\.:\\/",km=new RegExp("["+nu+"]","g"),iu="[^"+nu+"]",Vm="[^"+nu.replace("\\.","")+"]",zm=/((?:WC+[\/:])*)/.source.replace("WC",iu),Gm=/(WCOD+)?/.source.replace("WCOD",Vm),Hm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",iu),Wm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",iu),Xm=new RegExp("^"+zm+Gm+Hm+Wm+"$"),qm=["material","materials","bones","map"],Pc=class{constructor(t,e,n){let s=n||ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ye=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(km,"")}static parseTrackName(t){let e=Xm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);qm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Vt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Vt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===l){l=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Vt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Vt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Vt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;Vt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ye.Composite=Pc;ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ye.prototype.GetterByBindingType=[ye.prototype._getValue_direct,ye.prototype._getValue_array,ye.prototype._getValue_arrayElement,ye.prototype._getValue_toArray];ye.prototype.SetterByBindingTypeAndVersioning=[[ye.prototype._setValue_direct,ye.prototype._setValue_direct_setNeedsUpdate,ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_array,ye.prototype._setValue_array_setNeedsUpdate,ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_arrayElement,ye.prototype._setValue_arrayElement_setNeedsUpdate,ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_fromArray,ye.prototype._setValue_fromArray_setNeedsUpdate,ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iM=new Float32Array(1);var cu=class cu{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};cu.prototype.isMatrix2=!0;var Ic=cu;function su(i,t,e,n){let s=Ym(n);switch(e){case Jc:return i*t;case Va:return i*t/s.components*s.byteLength;case za:return i*t/s.components*s.byteLength;case Pi:return i*t*2/s.components*s.byteLength;case Ga:return i*t*2/s.components*s.byteLength;case Kc:return i*t*3/s.components*s.byteLength;case bn:return i*t*4/s.components*s.byteLength;case Ha:return i*t*4/s.components*s.byteLength;case kr:case Vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case zr:case Gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:case Ya:return Math.max(i,16)*Math.max(t,8)/4;case Wa:case qa:return Math.max(i,8)*Math.max(t,8)/2;case $a:case Za:case Ka:case Qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ja:case Hr:case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case el:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case nl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case il:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case sl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case rl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ol:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case al:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ll:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case cl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ul:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case hl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case fl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case dl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case pl:case ml:case gl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case xl:case _l:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Wr:case bl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ym(i){switch(i){case mn:case qc:return{byteLength:1,components:1};case Os:case Yc:case Rn:return{byteLength:2,components:1};case Ba:case ka:return{byteLength:2,components:4};case An:case Oa:case _n:return{byteLength:4,components:1};case $c:case Zc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function sd(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Zm(i){let t=new WeakMap;function e(a,c){let l=a.array,f=a.usage,u=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,f),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let f=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,f);else{u.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<u.length;d++){let g=u[h],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,u[h]=_)}u.length=h+1;for(let d=0,g=u.length;d<g;d++){let _=u[d];i.bufferSubData(l,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=t.get(a);(!f||f.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Jm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Km=`#ifdef USE_ALPHAHASH
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
#endif`,Qm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,e0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,n0=`#ifdef USE_AOMAP
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
#endif`,i0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,s0=`#ifdef USE_BATCHING
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
#endif`,r0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,o0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,a0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,l0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,c0=`#ifdef USE_IRIDESCENCE
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
#endif`,u0=`#ifdef USE_BUMPMAP
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
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,m0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,g0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,x0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,b0=`#define PI 3.141592653589793
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
} // validated`,v0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,y0=`vec3 transformedNormal = objectNormal;
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
#endif`,M0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,S0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,w0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,T0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,E0="gl_FragColor = linearToOutputTexel( gl_FragColor );",A0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,R0=`#ifdef USE_ENVMAP
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
#endif`,C0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,P0=`#ifdef USE_ENVMAP
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
#endif`,I0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,L0=`#ifdef USE_ENVMAP
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
#endif`,D0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,F0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,N0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,U0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,O0=`#ifdef USE_GRADIENTMAP
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
}`,B0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,k0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,V0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,z0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,G0=`#ifdef USE_ENVMAP
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
#endif`,H0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,W0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,X0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Y0=`PhysicalMaterial material;
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
#endif`,$0=`uniform sampler2D dfgLUT;
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
}`,Z0=`
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
#endif`,J0=`#if defined( RE_IndirectDiffuse )
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
#endif`,K0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Q0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,j0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ng=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ig=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,og=`#if defined( USE_POINTS_UV )
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
#endif`,ag=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ug=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fg=`#ifdef USE_MORPHTARGETS
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
#endif`,dg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_g=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,bg=`#ifdef USE_NORMALMAP
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
#endif`,vg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Eg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ag=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ig=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ng=`float getShadowMask() {
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
}`,Ug=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Og=`#ifdef USE_SKINNING
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
#endif`,Bg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kg=`#ifdef USE_SKINNING
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
#endif`,Vg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wg=`#ifdef USE_TRANSMISSION
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
#endif`,Xg=`#ifdef USE_TRANSMISSION
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
#endif`,qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kg=`uniform sampler2D t2D;
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
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ex=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nx=`#include <common>
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
}`,ix=`#if DEPTH_PACKING == 3200
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
}`,sx=`#define DISTANCE
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
}`,rx=`#define DISTANCE
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
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ax=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lx=`uniform float scale;
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
}`,cx=`uniform vec3 diffuse;
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
}`,ux=`#include <common>
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
}`,hx=`uniform vec3 diffuse;
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
}`,fx=`#define LAMBERT
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
}`,dx=`#define LAMBERT
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
}`,px=`#define MATCAP
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
}`,mx=`#define MATCAP
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
}`,gx=`#define NORMAL
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
}`,xx=`#define NORMAL
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
}`,_x=`#define PHONG
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
}`,bx=`#define PHONG
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
}`,vx=`#define STANDARD
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
}`,yx=`#define STANDARD
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
}`,Mx=`#define TOON
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
}`,Sx=`#define TOON
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
}`,wx=`uniform float size;
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
}`,Tx=`uniform vec3 diffuse;
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
}`,Ex=`#include <common>
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
}`,Ax=`uniform vec3 color;
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
}`,Rx=`uniform float rotation;
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
}`,Cx=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:Jm,alphahash_pars_fragment:Km,alphamap_fragment:Qm,alphamap_pars_fragment:jm,alphatest_fragment:t0,alphatest_pars_fragment:e0,aomap_fragment:n0,aomap_pars_fragment:i0,batching_pars_vertex:s0,batching_vertex:r0,begin_vertex:o0,beginnormal_vertex:a0,bsdfs:l0,iridescence_fragment:c0,bumpmap_pars_fragment:u0,clipping_planes_fragment:h0,clipping_planes_pars_fragment:f0,clipping_planes_pars_vertex:d0,clipping_planes_vertex:p0,color_fragment:m0,color_pars_fragment:g0,color_pars_vertex:x0,color_vertex:_0,common:b0,cube_uv_reflection_fragment:v0,defaultnormal_vertex:y0,displacementmap_pars_vertex:M0,displacementmap_vertex:S0,emissivemap_fragment:w0,emissivemap_pars_fragment:T0,colorspace_fragment:E0,colorspace_pars_fragment:A0,envmap_fragment:R0,envmap_common_pars_fragment:C0,envmap_pars_fragment:P0,envmap_pars_vertex:I0,envmap_physical_pars_fragment:G0,envmap_vertex:L0,fog_vertex:D0,fog_pars_vertex:F0,fog_fragment:N0,fog_pars_fragment:U0,gradientmap_pars_fragment:O0,lightmap_pars_fragment:B0,lights_lambert_fragment:k0,lights_lambert_pars_fragment:V0,lights_pars_begin:z0,lights_toon_fragment:H0,lights_toon_pars_fragment:W0,lights_phong_fragment:X0,lights_phong_pars_fragment:q0,lights_physical_fragment:Y0,lights_physical_pars_fragment:$0,lights_fragment_begin:Z0,lights_fragment_maps:J0,lights_fragment_end:K0,lightprobes_pars_fragment:Q0,logdepthbuf_fragment:j0,logdepthbuf_pars_fragment:tg,logdepthbuf_pars_vertex:eg,logdepthbuf_vertex:ng,map_fragment:ig,map_pars_fragment:sg,map_particle_fragment:rg,map_particle_pars_fragment:og,metalnessmap_fragment:ag,metalnessmap_pars_fragment:lg,morphinstance_vertex:cg,morphcolor_vertex:ug,morphnormal_vertex:hg,morphtarget_pars_vertex:fg,morphtarget_vertex:dg,normal_fragment_begin:pg,normal_fragment_maps:mg,normal_pars_fragment:gg,normal_pars_vertex:xg,normal_vertex:_g,normalmap_pars_fragment:bg,clearcoat_normal_fragment_begin:vg,clearcoat_normal_fragment_maps:yg,clearcoat_pars_fragment:Mg,iridescence_pars_fragment:Sg,opaque_fragment:wg,packing:Tg,premultiplied_alpha_fragment:Eg,project_vertex:Ag,dithering_fragment:Rg,dithering_pars_fragment:Cg,roughnessmap_fragment:Pg,roughnessmap_pars_fragment:Ig,shadowmap_pars_fragment:Lg,shadowmap_pars_vertex:Dg,shadowmap_vertex:Fg,shadowmask_pars_fragment:Ng,skinbase_vertex:Ug,skinning_pars_vertex:Og,skinning_vertex:Bg,skinnormal_vertex:kg,specularmap_fragment:Vg,specularmap_pars_fragment:zg,tonemapping_fragment:Gg,tonemapping_pars_fragment:Hg,transmission_fragment:Wg,transmission_pars_fragment:Xg,uv_pars_fragment:qg,uv_pars_vertex:Yg,uv_vertex:$g,worldpos_vertex:Zg,background_vert:Jg,background_frag:Kg,backgroundCube_vert:Qg,backgroundCube_frag:jg,cube_vert:tx,cube_frag:ex,depth_vert:nx,depth_frag:ix,distance_vert:sx,distance_frag:rx,equirect_vert:ox,equirect_frag:ax,linedashed_vert:lx,linedashed_frag:cx,meshbasic_vert:ux,meshbasic_frag:hx,meshlambert_vert:fx,meshlambert_frag:dx,meshmatcap_vert:px,meshmatcap_frag:mx,meshnormal_vert:gx,meshnormal_frag:xx,meshphong_vert:_x,meshphong_frag:bx,meshphysical_vert:vx,meshphysical_frag:yx,meshtoon_vert:Mx,meshtoon_frag:Sx,points_vert:wx,points_frag:Tx,shadow_vert:Ex,shadow_frag:Ax,sprite_vert:Rx,sprite_frag:Cx},wt={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Hn={basic:{uniforms:Ke([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Ke([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new ht(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Ke([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Ke([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Ke([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new ht(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Ke([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Ke([wt.points,wt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Ke([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Ke([wt.common,wt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Ke([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Ke([wt.sprite,wt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:Ke([wt.common,wt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:Ke([wt.lights,wt.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Hn.physical={uniforms:Ke([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var Ml={r:0,b:0,g:0},Px=new xe,rd=new Ht;rd.set(-1,0,0,0,1,0,0,0,1);function Ix(i,t,e,n,s,r){let o=new ht(0),a=s===!0?0:1,c,l,f=null,u=0,h=null;function d(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){let b=v.backgroundBlurriness>0;S=t.get(S,b)}return S}function g(v){let S=!1,b=d(v);b===null?m(o,a):b&&b.isColor&&(m(b,1),S=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(v,S){let b=d(S);b&&(b.isCubeTexture||b.mapping===Or)?(l===void 0&&(l=new te(new Tn(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:Zi(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Px.makeRotationFromEuler(S.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(rd),l.material.toneMapped=ne.getTransfer(b.colorSpace)!==he,(f!==b||u!==b.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,f=b,u=b.version,h=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new te(new en(2,2),new dn({name:"BackgroundMaterial",uniforms:Zi(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ne.getTransfer(b.colorSpace)!==he,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||u!==b.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,f=b,u=b.version,h=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,S){v.getRGB(Ml,eu(i)),e.buffers.color.setClear(Ml.r,Ml.g,Ml.b,S,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,S=1){o.set(v),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:g,addToRenderList:_,dispose:p}}function Lx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,o=!1;function a(L,A,C,I,F){let U=!1,O=u(L,I,C,A);r!==O&&(r=O,l(r.object)),U=d(L,I,C,F),U&&g(L,I,C,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,b(L,A,C,I),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function c(){return i.createVertexArray()}function l(L){return i.bindVertexArray(L)}function f(L){return i.deleteVertexArray(L)}function u(L,A,C,I){let F=I.wireframe===!0,U=n[A.id];U===void 0&&(U={},n[A.id]=U);let O=L.isInstancedMesh===!0?L.id:0,X=U[O];X===void 0&&(X={},U[O]=X);let G=X[C.id];G===void 0&&(G={},X[C.id]=G);let H=G[F];return H===void 0&&(H=h(c()),G[F]=H),H}function h(L){let A=[],C=[],I=[];for(let F=0;F<e;F++)A[F]=0,C[F]=0,I[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:C,attributeDivisors:I,object:L,attributes:{},index:null}}function d(L,A,C,I){let F=r.attributes,U=A.attributes,O=0,X=C.getAttributes();for(let G in X)if(X[G].location>=0){let J=F[G],pt=U[G];if(pt===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(pt=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(pt=L.instanceColor)),J===void 0||J.attribute!==pt||pt&&J.data!==pt.data)return!0;O++}return r.attributesNum!==O||r.index!==I}function g(L,A,C,I){let F={},U=A.attributes,O=0,X=C.getAttributes();for(let G in X)if(X[G].location>=0){let J=U[G];J===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(J=L.instanceColor));let pt={};pt.attribute=J,J&&J.data&&(pt.data=J.data),F[G]=pt,O++}r.attributes=F,r.attributesNum=O,r.index=I}function _(){let L=r.newAttributes;for(let A=0,C=L.length;A<C;A++)L[A]=0}function m(L){p(L,0)}function p(L,A){let C=r.newAttributes,I=r.enabledAttributes,F=r.attributeDivisors;C[L]=1,I[L]===0&&(i.enableVertexAttribArray(L),I[L]=1),F[L]!==A&&(i.vertexAttribDivisor(L,A),F[L]=A)}function v(){let L=r.newAttributes,A=r.enabledAttributes;for(let C=0,I=A.length;C<I;C++)A[C]!==L[C]&&(i.disableVertexAttribArray(C),A[C]=0)}function S(L,A,C,I,F,U,O){O===!0?i.vertexAttribIPointer(L,A,C,F,U):i.vertexAttribPointer(L,A,C,I,F,U)}function b(L,A,C,I){_();let F=I.attributes,U=C.getAttributes(),O=A.defaultAttributeValues;for(let X in U){let G=U[X];if(G.location>=0){let H=F[X];if(H===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(H=L.instanceColor)),H!==void 0){let J=H.normalized,pt=H.itemSize,rt=t.get(H);if(rt===void 0)continue;let ft=rt.buffer,St=rt.type,Lt=rt.bytesPerElement,K=St===i.INT||St===i.UNSIGNED_INT||H.gpuType===Oa;if(H.isInterleavedBufferAttribute){let $=H.data,ct=$.stride,vt=H.offset;if($.isInstancedInterleavedBuffer){for(let _t=0;_t<G.locationSize;_t++)p(G.location+_t,$.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let _t=0;_t<G.locationSize;_t++)m(G.location+_t);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let _t=0;_t<G.locationSize;_t++)S(G.location+_t,pt/G.locationSize,St,J,ct*Lt,(vt+pt/G.locationSize*_t)*Lt,K)}else{if(H.isInstancedBufferAttribute){for(let $=0;$<G.locationSize;$++)p(G.location+$,H.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let $=0;$<G.locationSize;$++)m(G.location+$);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let $=0;$<G.locationSize;$++)S(G.location+$,pt/G.locationSize,St,J,pt*Lt,pt/G.locationSize*$*Lt,K)}}else if(O!==void 0){let J=O[X];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(G.location,J);break;case 3:i.vertexAttrib3fv(G.location,J);break;case 4:i.vertexAttrib4fv(G.location,J);break;default:i.vertexAttrib1fv(G.location,J)}}}}v()}function M(){y();for(let L in n){let A=n[L];for(let C in A){let I=A[C];for(let F in I){let U=I[F];for(let O in U)f(U[O].object),delete U[O];delete I[F]}}delete n[L]}}function T(L){if(n[L.id]===void 0)return;let A=n[L.id];for(let C in A){let I=A[C];for(let F in I){let U=I[F];for(let O in U)f(U[O].object),delete U[O];delete I[F]}}delete n[L.id]}function R(L){for(let A in n){let C=n[A];for(let I in C){let F=C[I];if(F[L.id]===void 0)continue;let U=F[L.id];for(let O in U)f(U[O].object),delete U[O];delete F[L.id]}}}function x(L){for(let A in n){let C=n[A],I=L.isInstancedMesh===!0?L.id:0,F=C[I];if(F!==void 0){for(let U in F){let O=F[U];for(let X in O)f(O[X].object),delete O[X];delete F[U]}delete C[I],Object.keys(C).length===0&&delete n[A]}}}function y(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:y,resetDefaultState:E,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function Dx(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,f){f!==0&&(i.drawArraysInstanced(n,c,l,f),e.update(l,n,f))}function a(c,l,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,f);let h=0;for(let d=0;d<f;d++)h+=l[d];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Fx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==bn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let x=R===Rn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==mn&&R!==_n&&!x&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",f=c(l);f!==l&&(kt("WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);let u=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:b,maxSamples:M,samples:T}}function Nx(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Sn,a=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let d=u.length!==0||h||n!==0||s;return s=h,n=u.length,d},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){e=f(u,h,0)},this.setState=function(u,h,d){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?f(null):l();else{let v=r?0:n,S=v*4,b=p.clippingState||null;c.value=b,b=f(g,h,S,d);for(let M=0;M!==S;++M)b[M]=e[M];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(u,h,d,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let p=d+_*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,b=d;S!==_;++S,b+=4)o.copy(u[S]).applyMatrix4(v,a),o.normal.toArray(m,b),m[b+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}var Vs=4,Ux=6,Ox=20,Bx=256,Xr=new Nr,Of=new ht,uu=null,hu=0,fu=0,du=!1,kx=new z,Ji=new z,wl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=kx}=r;uu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),fu=this._renderer.getActiveMipmapLevel(),du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(uu,hu,fu),this._renderer.xr.enabled=du,t.scissorTest=!1,ks(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ai||t.mapping===$i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),uu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),fu=this._renderer.getActiveMipmapLevel(),du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:Rn,format:bn,colorSpace:cr,depthBuffer:!1},s=Bf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Vx(r)),this._blurMaterial=Gx(r,t,e),this._ggxMaterial=zx(r,t,e)}return s}_compileMaterial(t){let e=new te(new Me,t);this._renderer.compile(e,Xr)}_sceneToCubeUV(t,e,n,s,r){let c=new Ze(90,1,e,n),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Of),u.toneMapping=En,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new te(new Tn,new re({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,p=!1,v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,p=!0):(m.color.copy(Of),p=!0);for(let S=0;S<6;S++){let b=S%3;b===0?(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+f[S],r.y,r.z)):b===1?(c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+f[S],r.z)):(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+f[S]));let M=this._cubeSize;ks(s,b*M,S>2?M:0,M,M),u.setRenderTarget(s),p&&u.render(_,c),u.render(t,c)}u.toneMapping=d,u.autoClear=h,t.background=v}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ai||t.mapping===$i;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;ks(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Xr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),f=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-f*f),h=l*1.25,d=u*h,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-Vs?n-g+Vs:0),p=4*(this._cubeSize-_);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=g-e,ks(r,m,p,3*_,2*_),s.setRenderTarget(r),s.render(a,Xr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,ks(t,m,p,3*_,2*_),s.setRenderTarget(t),s.render(a,Xr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let f=this._sizeLods[s],u=3*f*(s>this._lodMax-Vs?s-this._lodMax+Vs:0),h=4*(this._cubeSize-f);ks(e,u,h,3*f,2*f),o.setRenderTarget(e),o.render(c,Xr)}};function Vx(i){let t=[],e=[],n=i,s=i-Vs+1+Ux;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),c=-a,l=1+a,f=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,h=6,d=3,g=new Float32Array(d*h*u),_=new Float32Array(d*h*u);for(let p=0;p<u;p++){let v=p%3*2/3-1,S=p>2?0:-1,b=[v,S,0,v+2/3,S,0,v+2/3,S+1,0,v,S,0,v+2/3,S+1,0,v,S+1,0];g.set(b,d*h*p);for(let M=0;M<h;M++){let T=f[M*2]*2-1,R=f[M*2+1]*2-1;p===0?Ji.set(1,R,T):p===1?Ji.set(-T,1,-R):p===2?Ji.set(-T,R,1):p===3?Ji.set(-1,R,-T):p===4?Ji.set(-T,-1,R):Ji.set(T,R,-1),Ji.toArray(_,(p*h+M)*d)}}let m=new Me;m.setAttribute("position",new on(g,d)),m.setAttribute("outputDirection",new on(_,d)),e.push(new te(m,null)),n>Vs&&n--}return{lodMeshes:e,sizeLods:t}}function Bf(i,t,e){let n=new an(i,t,e);return n.texture.mapping=Or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ks(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function zx(i,t,e){return new dn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Bx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Al(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Gx(i,t,e){return new dn({name:"SphericalGaussianBlur",defines:{SAMPLES:Ox,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Al(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function kf(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Al(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Vf(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Al(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Tl=class extends an{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Tr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Tn(5,5,5),r=new dn({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:zn});r.uniforms.tEquirect.value=e;let o=new te(s,r),a=e.minFilter;return e.minFilter===Ri&&(e.minFilter=Ge),new Ia(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function Hx(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?o(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===Fa||d===Na)if(t.has(h)){let g=t.get(h).texture;return a(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let _=new Tl(g.height);return _.fromEquirectangularTexture(i,h),t.set(h,_),h.addEventListener("dispose",l),a(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let d=h.mapping,g=d===Fa||d===Na,_=d===Ai||d===$i;if(g||_){let m=e.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new wl(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let v=h.image;return g&&v&&v.height>0||_&&v&&c(v)?(n===null&&(n=new wl(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",f),m.texture):null}}}return h}function a(h,d){return d===Fa?h.mapping=Ai:d===Na&&(h.mapping=$i),h}function c(h){let d=0,g=6;for(let _=0;_<g;_++)h[_]!==void 0&&d++;return d===g}function l(h){let d=h.target;d.removeEventListener("dispose",l);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function f(h){let d=h.target;d.removeEventListener("dispose",f);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Wx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Wi("WebGLRenderer: "+n+" extension not supported."),s}}}function Xx(i,t,e,n){let s={},r=new WeakMap;function o(u){let h=u.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];let d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(u,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function c(u){let h=u.attributes;for(let d in h)t.update(h[d],i.ARRAY_BUFFER)}function l(u){let h=[],d=u.index,g=u.attributes.position,_=0;if(g===void 0)return;if(d!==null){let v=d.array;_=d.version;for(let S=0,b=v.length;S<b;S+=3){let M=v[S+0],T=v[S+1],R=v[S+2];h.push(M,T,T,R,R,M)}}else{let v=g.array;_=g.version;for(let S=0,b=v.length/3-1;S<b;S+=3){let M=S+0,T=S+1,R=S+2;h.push(M,T,T,R,R,M)}}let m=new(g.count>=65535?br:_r)(h,1);m.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function f(u){let h=r.get(u);if(h){let d=u.index;d!==null&&h.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:f}}function qx(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,h){i.drawElements(n,h,r,u*o),e.update(h,n,1)}function l(u,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,u*o,d),e.update(h,n,d))}function f(u,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,u,0,d);let _=0;for(let m=0;m<d;m++)_+=h[m];e.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=f}function Yx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Vt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function $x(i,t,e){let n=new WeakMap,s=new we;function r(o,a,c){let l=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=f!==void 0?f.length:0,h=n.get(a);if(h===void 0||h.count!==u){let y=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",y)};h!==void 0&&h.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],S=0;d===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let b=a.attributes.position.count*S,M=1;b>t.maxTextureSize&&(M=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let T=new Float32Array(b*M*4*u),R=new pr(T,b,M,u);R.type=_n,R.needsUpdate=!0;let x=S*4;for(let E=0;E<u;E++){let L=m[E],A=p[E],C=v[E],I=b*M*4*E;for(let F=0;F<L.count;F++){let U=F*x;d===!0&&(s.fromBufferAttribute(L,F),T[I+U+0]=s.x,T[I+U+1]=s.y,T[I+U+2]=s.z,T[I+U+3]=0),g===!0&&(s.fromBufferAttribute(A,F),T[I+U+4]=s.x,T[I+U+5]=s.y,T[I+U+6]=s.z,T[I+U+7]=0),_===!0&&(s.fromBufferAttribute(C,F),T[I+U+8]=s.x,T[I+U+9]=s.y,T[I+U+10]=s.z,T[I+U+11]=C.itemSize===4?s.w:1)}}h={count:u,texture:R,size:new Gt(b,M)},n.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Zx(i,t,e,n,s){let r=new WeakMap;function o(l){let f=s.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==f&&(t.update(h),r.set(h,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==f&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,f))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==f&&(d.update(),r.set(d,f))}return h}function a(){r=new WeakMap}function c(l){let f=l.target;f.removeEventListener("dispose",c),n.releaseStatesOfObject(f),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:o,dispose:a}}var Jx={[Bc]:"LINEAR_TONE_MAPPING",[kc]:"REINHARD_TONE_MAPPING",[Vc]:"CINEON_TONE_MAPPING",[zc]:"ACES_FILMIC_TONE_MAPPING",[Hc]:"AGX_TONE_MAPPING",[Wc]:"NEUTRAL_TONE_MAPPING",[Gc]:"CUSTOM_TONE_MAPPING"};function Kx(i,t,e,n,s,r){let o=new an(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new Me;l.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Yt([0,2,0,0,2,0],2));let f=new _a({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new te(l,f),h=new Nr(-1,1,1,-1,0,1),d=null,g=null,_=!1,m,p=null,v=[],S=!1;this.setSize=function(b,M){o.setSize(b,M),a!==null&&a.setSize(b,M),c!==null&&c.setSize(b,M);for(let T=0;T<v.length;T++){let R=v[T];R.setSize&&R.setSize(b,M)}},this.setEffects=function(b){v=b,S=v.length>0&&v[0].isRenderPass===!0;let M=o.width,T=o.height;v.length>0&&a===null&&(a=new an(M,T,{type:Rn,depthBuffer:!1,stencilBuffer:!1}),c=new an(M,T,{type:Rn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<v.length;R++){let x=v[R];x.setSize&&x.setSize(M,T)}},this.begin=function(b,M){if(_||b.toneMapping===En&&v.length===0)return!1;if(p=M,M!==null){let T=M.width,R=M.height;(o.width!==T||o.height!==R)&&this.setSize(T,R)}return S===!1&&b.setRenderTarget(o),m=b.toneMapping,b.toneMapping=En,!0},this.hasRenderPass=function(){return S},this.end=function(b,M){b.toneMapping=m,_=!0;let T=o,R=a;for(let x=0;x<v.length;x++){let y=v[x];y.enabled!==!1&&(y.render(b,R,T,M),y.needsSwap!==!1&&(T=R,R=R===a?c:a))}if(d!==b.outputColorSpace||g!==b.toneMapping){d=b.outputColorSpace,g=b.toneMapping,f.defines={},ne.getTransfer(d)===he&&(f.defines.SRGB_TRANSFER="");let x=Jx[g];x&&(f.defines[x]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=T.texture,b.setRenderTarget(p),b.render(u,h),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),f.dispose()}}var od=new tn,gu=new Mi(1,1),ad=new pr,ld=new fa,cd=new Tr,zf=[],Gf=[],Hf=new Float32Array(16),Wf=new Float32Array(9),Xf=new Float32Array(4);function Gs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=zf[s];if(r===void 0&&(r=new Float32Array(s),zf[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function De(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Rl(i,t){let e=Gf[t];e===void 0&&(e=new Int32Array(t),Gf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Qx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function jx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2fv(this.addr,t),De(e,t)}}function t_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;i.uniform3fv(this.addr,t),De(e,t)}}function e_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4fv(this.addr,t),De(e,t)}}function n_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Xf.set(n),i.uniformMatrix2fv(this.addr,!1,Xf),De(e,n)}}function i_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Wf.set(n),i.uniformMatrix3fv(this.addr,!1,Wf),De(e,n)}}function s_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Hf.set(n),i.uniformMatrix4fv(this.addr,!1,Hf),De(e,n)}}function r_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function o_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2iv(this.addr,t),De(e,t)}}function a_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3iv(this.addr,t),De(e,t)}}function l_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4iv(this.addr,t),De(e,t)}}function c_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function u_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2uiv(this.addr,t),De(e,t)}}function h_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3uiv(this.addr,t),De(e,t)}}function f_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4uiv(this.addr,t),De(e,t)}}function d_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(gu.compareFunction=e.isReversedDepthBuffer()?yl:vl,r=gu):r=od,e.setTexture2D(t||r,s)}function p_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ld,s)}function m_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||cd,s)}function g_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ad,s)}function x_(i){switch(i){case 5126:return Qx;case 35664:return jx;case 35665:return t_;case 35666:return e_;case 35674:return n_;case 35675:return i_;case 35676:return s_;case 5124:case 35670:return r_;case 35667:case 35671:return o_;case 35668:case 35672:return a_;case 35669:case 35673:return l_;case 5125:return c_;case 36294:return u_;case 36295:return h_;case 36296:return f_;case 35678:case 36198:case 36298:case 36306:case 35682:return d_;case 35679:case 36299:case 36307:return p_;case 35680:case 36300:case 36308:case 36293:return m_;case 36289:case 36303:case 36311:case 36292:return g_}}function __(i,t){i.uniform1fv(this.addr,t)}function b_(i,t){let e=Gs(t,this.size,2);i.uniform2fv(this.addr,e)}function v_(i,t){let e=Gs(t,this.size,3);i.uniform3fv(this.addr,e)}function y_(i,t){let e=Gs(t,this.size,4);i.uniform4fv(this.addr,e)}function M_(i,t){let e=Gs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function S_(i,t){let e=Gs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function w_(i,t){let e=Gs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function T_(i,t){i.uniform1iv(this.addr,t)}function E_(i,t){i.uniform2iv(this.addr,t)}function A_(i,t){i.uniform3iv(this.addr,t)}function R_(i,t){i.uniform4iv(this.addr,t)}function C_(i,t){i.uniform1uiv(this.addr,t)}function P_(i,t){i.uniform2uiv(this.addr,t)}function I_(i,t){i.uniform3uiv(this.addr,t)}function L_(i,t){i.uniform4uiv(this.addr,t)}function D_(i,t,e){let n=this.cache,s=t.length,r=Rl(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=gu:o=od;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function F_(i,t,e){let n=this.cache,s=t.length,r=Rl(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ld,r[o])}function N_(i,t,e){let n=this.cache,s=t.length,r=Rl(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||cd,r[o])}function U_(i,t,e){let n=this.cache,s=t.length,r=Rl(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ad,r[o])}function O_(i){switch(i){case 5126:return __;case 35664:return b_;case 35665:return v_;case 35666:return y_;case 35674:return M_;case 35675:return S_;case 35676:return w_;case 5124:case 35670:return T_;case 35667:case 35671:return E_;case 35668:case 35672:return A_;case 35669:case 35673:return R_;case 5125:return C_;case 36294:return P_;case 36295:return I_;case 36296:return L_;case 35678:case 36198:case 36298:case 36306:case 35682:return D_;case 35679:case 36299:case 36307:return F_;case 35680:case 36300:case 36308:case 36293:return N_;case 36289:case 36303:case 36311:case 36292:return U_}}var xu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=x_(e.type)}},_u=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=O_(e.type)}},bu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},pu=/(\w+)(\])?(\[|\.)?/g;function qf(i,t){i.seq.push(t),i.map[t.id]=t}function B_(i,t,e){let n=i.name,s=n.length;for(pu.lastIndex=0;;){let r=pu.exec(n),o=pu.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){qf(e,l===void 0?new xu(a,i,t):new _u(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new bu(a),qf(e,u)),e=u}}}var zs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);B_(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Yf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var k_=37297,V_=0;function z_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var $f=new Ht;function G_(i){ne._getMatrix($f,ne.workingColorSpace,i);let t=`mat3( ${$f.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case ur:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return kt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Zf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+z_(i.getShaderSource(t),a)}else return r}function H_(i,t){let e=G_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var W_={[Bc]:"Linear",[kc]:"Reinhard",[Vc]:"Cineon",[zc]:"ACESFilmic",[Hc]:"AgX",[Wc]:"Neutral",[Gc]:"Custom"};function X_(i,t){let e=W_[t];return e===void 0?(kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Sl=new z;function q_(){ne.getLuminanceCoefficients(Sl);let i=Sl.x.toFixed(4),t=Sl.y.toFixed(4),e=Sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function $_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Z_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Yr(i){return i!==""}function Jf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var J_=/^[ \t]*#include +<([\w\d./]+)>/gm;function vu(i){return i.replace(J_,Q_)}var K_=new Map;function Q_(i,t){let e=Jt[t];if(e===void 0){let n=K_.get(t);if(n!==void 0)e=Jt[n],kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return vu(e)}var j_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qf(i){return i.replace(j_,tb)}function tb(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var eb={[Ur]:"SHADOWMAP_TYPE_PCF",[Ns]:"SHADOWMAP_TYPE_VSM"};function nb(i){return eb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ib={[Ai]:"ENVMAP_TYPE_CUBE",[$i]:"ENVMAP_TYPE_CUBE",[Or]:"ENVMAP_TYPE_CUBE_UV"};function sb(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ib[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var rb={[$i]:"ENVMAP_MODE_REFRACTION"};function ob(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":rb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ab={[Oc]:"ENVMAP_BLENDING_MULTIPLY",[ff]:"ENVMAP_BLENDING_MIX",[df]:"ENVMAP_BLENDING_ADD"};function lb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ab[i.combine]||"ENVMAP_BLENDING_NONE"}function cb(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ub(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=nb(e),l=sb(e),f=ob(e),u=lb(e),h=cb(e),d=Y_(e),g=$_(r),_=s.createProgram(),m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Yr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Yr).join(`
`),p.length>0&&(p+=`
`)):(m=[jf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),p=[jf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+f:"",e.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==En?"#define TONE_MAPPING":"",e.toneMapping!==En?Jt.tonemapping_pars_fragment:"",e.toneMapping!==En?X_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,H_("linearToOutputTexel",e.outputColorSpace),q_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Yr).join(`
`)),o=vu(o),o=Jf(o,e),o=Kf(o,e),a=vu(a),a=Jf(a,e),a=Kf(a,e),o=Qf(o),a=Qf(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===tu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=v+m+o,b=v+p+a,M=Yf(s,s.VERTEX_SHADER,S),T=Yf(s,s.FRAGMENT_SHADER,b);s.attachShader(_,M),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(L){if(i.debug.checkShaderErrors){let A=s.getProgramInfoLog(_)||"",C=s.getShaderInfoLog(M)||"",I=s.getShaderInfoLog(T)||"",F=A.trim(),U=C.trim(),O=I.trim(),X=!0,G=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,M,T);else{let H=Zf(s,M,"vertex"),J=Zf(s,T,"fragment");Vt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+F+`
`+H+`
`+J)}else F!==""?kt("WebGLProgram: Program Info Log:",F):(U===""||O==="")&&(G=!1);G&&(L.diagnostics={runnable:X,programLog:F,vertexShader:{log:U,prefix:m},fragmentShader:{log:O,prefix:p}})}s.deleteShader(M),s.deleteShader(T),x=new zs(s,_),y=Z_(s,_)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,k_)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=V_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=T,this}var hb=0,yu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Mu(t),e.set(t,n)),n}},Mu=class{constructor(t){this.id=hb++,this.code=t,this.usedTimes=0}};function fb(i){return i===Pi||i===Hr||i===Wr}function db(i,t,e,n,s,r){let o=new mr,a=new yu,c=new Set,l=[],f=new Map,u=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,y,E,L,A,C){let I=L.fog,F=A.geometry,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,X=t.get(x.envMap||U,O),G=X&&X.mapping===Or?X.image.height:null,H=d[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&kt("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let J=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,pt=J!==void 0?J.length:0,rt=0;F.morphAttributes.position!==void 0&&(rt=1),F.morphAttributes.normal!==void 0&&(rt=2),F.morphAttributes.color!==void 0&&(rt=3);let ft,St,Lt,K;if(H){let le=Hn[H];ft=le.vertexShader,St=le.fragmentShader}else{ft=x.vertexShader,St=x.fragmentShader;let le=a.getVertexShaderStage(x),ce=a.getFragmentShaderStage(x);a.update(x,le,ce),Lt=le.id,K=ce.id}let $=i.getRenderTarget(),ct=i.state.buffers.depth.getReversed(),vt=A.isInstancedMesh===!0,_t=A.isBatchedMesh===!0,Dt=!!x.map,Kt=!!x.matcap,Ot=!!X,zt=!!x.aoMap,Qt=!!x.lightMap,qt=!!x.bumpMap&&x.wireframe===!1,pe=!!x.normalMap,Te=!!x.displacementMap,Pe=!!x.emissiveMap,ae=!!x.metalnessMap,be=!!x.roughnessMap,k=x.anisotropy>0,Ie=x.clearcoat>0,jt=x.dispersion>0,N=x.retroreflectivity>0,w=x.iridescence>0,W=x.sheen>0,Z=x.transmission>0,it=k&&!!x.anisotropyMap,gt=Ie&&!!x.clearcoatMap,bt=Ie&&!!x.clearcoatNormalMap,st=Ie&&!!x.clearcoatRoughnessMap,ot=w&&!!x.iridescenceMap,yt=w&&!!x.iridescenceThicknessMap,Ft=W&&!!x.sheenColorMap,Q=W&&!!x.sheenRoughnessMap,j=!!x.specularMap,et=!!x.specularColorMap,dt=!!x.specularIntensityMap,ut=Z&&!!x.transmissionMap,B=Z&&!!x.thicknessMap,lt=!!x.gradientMap,nt=!!x.alphaMap,mt=x.alphaTest>0,Mt=!!x.alphaHash,at=!!x.extensions,Nt=En;x.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Nt=i.toneMapping);let Ct={shaderID:H,shaderType:x.type,shaderName:x.name,vertexShader:ft,fragmentShader:St,defines:x.defines,customVertexShaderID:Lt,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:_t,batchingColor:_t&&A._colorsTexture!==null,instancing:vt,instancingColor:vt&&A.instanceColor!==null,instancingMorph:vt&&A.morphTexture!==null,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Dt,matcap:Kt,envMap:Ot,envMapMode:Ot&&X.mapping,envMapCubeUVHeight:G,aoMap:zt,lightMap:Qt,bumpMap:qt,normalMap:pe,displacementMap:Te,emissiveMap:Pe,normalMapObjectSpace:pe&&x.normalMapType===gf,normalMapTangentSpace:pe&&x.normalMapType===Qc,packedNormalMap:pe&&x.normalMapType===Qc&&fb(x.normalMap.format),metalnessMap:ae,roughnessMap:be,anisotropy:k,anisotropyMap:it,clearcoat:Ie,clearcoatMap:gt,clearcoatNormalMap:bt,clearcoatRoughnessMap:st,dispersion:jt,retroreflection:N,iridescence:w,iridescenceMap:ot,iridescenceThicknessMap:yt,sheen:W,sheenColorMap:Ft,sheenRoughnessMap:Q,specularMap:j,specularColorMap:et,specularIntensityMap:dt,transmission:Z,transmissionMap:ut,thicknessMap:B,gradientMap:lt,opaque:x.transparent===!1&&x.blending===Us&&x.alphaToCoverage===!1,alphaMap:nt,alphaTest:mt,alphaHash:Mt,combine:x.combine,mapUv:Dt&&g(x.map.channel),aoMapUv:zt&&g(x.aoMap.channel),lightMapUv:Qt&&g(x.lightMap.channel),bumpMapUv:qt&&g(x.bumpMap.channel),normalMapUv:pe&&g(x.normalMap.channel),displacementMapUv:Te&&g(x.displacementMap.channel),emissiveMapUv:Pe&&g(x.emissiveMap.channel),metalnessMapUv:ae&&g(x.metalnessMap.channel),roughnessMapUv:be&&g(x.roughnessMap.channel),anisotropyMapUv:it&&g(x.anisotropyMap.channel),clearcoatMapUv:gt&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:bt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Q&&g(x.sheenRoughnessMap.channel),specularMapUv:j&&g(x.specularMap.channel),specularColorMapUv:et&&g(x.specularColorMap.channel),specularIntensityMapUv:dt&&g(x.specularIntensityMap.channel),transmissionMapUv:ut&&g(x.transmissionMap.channel),thicknessMapUv:B&&g(x.thicknessMap.channel),alphaMapUv:nt&&g(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(pe||k),vertexNormals:!!F.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:A.isPoints===!0&&!!F.attributes.uv&&(Dt||nt),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||F.attributes.normal===void 0&&pe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ct,skinning:A.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:rt,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:C.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:Nt,decodeVideoTexture:Dt&&x.map.isVideoTexture===!0&&ne.getTransfer(x.map.colorSpace)===he,decodeVideoTextureEmissive:Pe&&x.emissiveMap.isVideoTexture===!0&&ne.getTransfer(x.emissiveMap.colorSpace)===he,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===He,flipSided:x.side===nn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:at&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&x.extensions.multiDraw===!0||_t)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function m(x){let y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(let E in x.defines)y.push(E),y.push(x.defines[E]);return x.isRawShaderMaterial===!1&&(p(y,x),v(y,x),y.push(i.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function p(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numSunLights),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numSunLightShadows),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function v(x,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.retroreflection&&o.enable(24),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),y.packedNormalMap&&o.enable(22),y.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),y.numLightProbeGrids>0&&o.enable(22),y.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function S(x){let y=d[x.type],E;if(y){let L=Hn[y];E=Ff.clone(L.uniforms)}else E=x.uniforms;return E}function b(x,y){let E=f.get(y);return E!==void 0?++E.usedTimes:(E=new ub(i,y,x,s),l.push(E),f.set(y,E)),E}function M(x){if(--x.usedTimes===0){let y=l.indexOf(x);l[y]=l[l.length-1],l.pop(),f.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function R(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:S,acquireProgram:b,releaseProgram:M,releaseShaderCache:T,programs:l,dispose:R}}function pb(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function mb(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function td(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ed(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,g,_,m,p){let v=i[t];return v===void 0?(v={id:h.id,object:h,geometry:d,material:g,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:p},i[t]=v):(v.id=h.id,v.object=h,v.geometry=d,v.material=g,v.materialVariant=o(h),v.groupOrder=_,v.renderOrder=h.renderOrder,v.z=m,v.group=p),t++,v}function c(h,d,g,_,m,p,v){v.reversedDepth===!0&&(m=-m);let S=a(h,d,g,_,m,p);g.transmission>0?n.push(S):g.transparent===!0?s.push(S):e.push(S)}function l(h,d,g,_,m,p){let v=a(h,d,g,_,m,p);g.transmission>0?n.unshift(v):g.transparent===!0?s.unshift(v):e.unshift(v)}function f(h,d){e.length>1&&e.sort(h||mb),n.length>1&&n.sort(d||td),s.length>1&&s.sort(d||td)}function u(){for(let h=t,d=i.length;h<d;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:f}}function gb(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new ed,i.set(n,[o])):s>=r.length?(o=new ed,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function xb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new z,color:new ht};break;case"SpotLight":e={position:new z,direction:new z,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":e={color:new ht,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function _b(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var bb=0;function vb(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function yb(i){let t=new xb,e=_b(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new z);let s=new z,r=new xe,o=new xe;function a(l){let f=0,u=0,h=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,v=0,S=0,b=0,M=0,T=0,R=0,x=0,y=0,E=0;l.sort(vb);for(let A=0,C=l.length;A<C;A++){let I=l[A],F=I.color,U=I.intensity,O=I.distance,X=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Pi?X=I.shadow.map.texture:X=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)f+=F.r*U,u+=F.g*U,h+=F.b*U;else if(I.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(I.sh.coefficients[G],U);E++}else if(I.isSunLight){let G=t.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let H=I.shadow,J=e.get(I);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),n.sunShadow[g]=J,n.sunShadowMap[g]=X;let pt=H.getViewportCount();for(let rt=0;rt<pt;rt++)n.sunShadowMatrix[_+rt]=H.getMatrix(rt),n.sunShadowCascade[_+rt]=H._cascadeData[rt];_+=pt,g++}n.sun[d]=G,d++}else if(I.isDirectionalLight){let G=t.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let H=I.shadow,J=e.get(I);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,n.directionalShadow[m]=J,n.directionalShadowMap[m]=X,n.directionalShadowMatrix[m]=I.shadow.matrix,M++}n.directional[m]=G,m++}else if(I.isSpotLight){let G=t.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(F).multiplyScalar(U),G.distance=O,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,n.spot[v]=G;let H=I.shadow;if(I.map&&(n.spotLightMap[x]=I.map,x++,H.updateMatrices(I),I.castShadow&&y++),n.spotLightMatrix[v]=H.matrix,I.castShadow){let J=e.get(I);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,n.spotShadow[v]=J,n.spotShadowMap[v]=X,R++}v++}else if(I.isRectAreaLight){let G=t.get(I);G.color.copy(F).multiplyScalar(U),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),n.rectArea[S]=G,S++}else if(I.isPointLight){let G=t.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),G.distance=I.distance,G.decay=I.decay,I.castShadow){let H=I.shadow,J=e.get(I);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,J.shadowCameraNear=H.camera.near,J.shadowCameraFar=H.camera.far,n.pointShadow[p]=J,n.pointShadowMap[p]=X,n.pointShadowMatrix[p]=I.shadow.matrix,T++}n.point[p]=G,p++}else if(I.isHemisphereLight){let G=t.get(I);G.skyColor.copy(I.color).multiplyScalar(U),G.groundColor.copy(I.groundColor).multiplyScalar(U),n.hemi[b]=G,b++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=u,n.ambient[2]=h;let L=n.hash;(L.sunLength!==d||L.directionalLength!==m||L.pointLength!==p||L.spotLength!==v||L.rectAreaLength!==S||L.hemiLength!==b||L.numSunShadows!==g||L.numDirectionalShadows!==M||L.numPointShadows!==T||L.numSpotShadows!==R||L.numSpotMaps!==x||L.numLightProbes!==E)&&(n.sun.length=d,n.directional.length=m,n.spot.length=v,n.rectArea.length=S,n.point.length=p,n.hemi.length=b,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+x-y,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=E,L.sunLength=d,L.directionalLength=m,L.pointLength=p,L.spotLength=v,L.rectAreaLength=S,L.hemiLength=b,L.numSunShadows=g,L.numDirectionalShadows=M,L.numPointShadows=T,L.numSpotShadows=R,L.numSpotMaps=x,L.numLightProbes=E,n.version=bb++)}function c(l,f){let u=0,h=0,d=0,g=0,_=0,m=0,p=f.matrixWorldInverse;for(let v=0,S=l.length;v<S;v++){let b=l[v];if(b.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(p),u++}else if(b.isDirectionalLight){let M=n.directional[h];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),h++}else if(b.isSpotLight){let M=n.spot[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let M=n.rectArea[_];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),o.identity(),r.copy(b.matrixWorld),r.premultiply(p),o.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:a,setupView:c,state:n}}function nd(i){let t=new yb(i),e=[],n=[],s=[];function r(h){u.camera=h,e.length=0,n.length=0,s.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function f(h){t.setupView(e,h)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Mb(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new nd(i),t.set(s,[a])):r>=o.length?(a=new nd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Sb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wb=`uniform sampler2D shadow_pass;
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
}`,Tb=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],Eb=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],id=new xe,qr=new z,mu=new z;function Ab(i,t,e){let n=new wr,s=new Gt,r=new Gt,o=new we,a=new ba,c=new va,l={},f=e.maxTextureSize,u={[Ei]:nn,[nn]:Ei,[He]:He},h=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:Sb,fragmentShader:wb}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let g=new Me;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new te(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ur;let p=this.type;this.render=function(T,R,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===qh&&(kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ur);let y=i.getRenderTarget(),E=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),A=i.state;A.setBlending(zn),A.buffers.depth.getReversed()===!0?A.buffers.color.setClear(0,0,0,0):A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);let C=p!==this.type;C&&R.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(F=>F.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,F=T.length;I<F;I++){let U=T[I],O=U.shadow;if(O===void 0){kt("WebGLShadowMap:",U,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let X=O.getFrameExtents();s.multiply(X),r.copy(O.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/X.x),s.x=r.x*X.x,O.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/X.y),s.y=r.y*X.y,O.mapSize.y=r.y));let G=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=G,O.map===null||C===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Ns){if(U.isPointLight){kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new an(s.x,s.y,{format:Pi,type:Rn,minFilter:Ge,magFilter:Ge,generateMipmaps:!1}),O.map.texture.name=U.name+".shadowMap",O.map.depthTexture=new Mi(s.x,s.y,_n),O.map.depthTexture.name=U.name+".shadowMapDepth",O.map.depthTexture.format=Un,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Be,O.map.depthTexture.magFilter=Be}else U.isPointLight?(O.map=new Tl(s.x),O.map.depthTexture=new xa(s.x,An)):(O.map=new an(s.x,s.y),O.map.depthTexture=new Mi(s.x,s.y,An)),O.map.depthTexture.name=U.name+".shadowMap",O.map.depthTexture.format=Un,this.type===Ur?(O.map.depthTexture.compareFunction=G?yl:vl,O.map.depthTexture.minFilter=Ge,O.map.depthTexture.magFilter=Ge):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Be,O.map.depthTexture.magFilter=Be);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let H=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();U.isPointLight!==!0&&O.updateMatrices(U,x);for(let J=0;J<H;J++){let pt=O.getCamera(J);if(U.isPointLight){let rt=O.camera,ft=O.matrix,St=U.distance||rt.far;St!==rt.far&&(rt.far=St,rt.updateProjectionMatrix()),qr.setFromMatrixPosition(U.matrixWorld),rt.position.copy(qr),mu.copy(rt.position),mu.add(Tb[J]),rt.up.copy(Eb[J]),rt.lookAt(mu),rt.updateMatrixWorld(),ft.makeTranslation(-qr.x,-qr.y,-qr.z),id.multiplyMatrices(rt.projectionMatrix,rt.matrixWorldInverse),O._frustum.setFromProjectionMatrix(id,rt.coordinateSystem,rt.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,J),i.clear();else{J===0&&(i.setRenderTarget(O.map),i.clear());let rt=O.getViewport(J);o.set(r.x*rt.x,r.y*rt.y,r.x*rt.z,r.y*rt.w),A.viewport(o)}n=O.getFrustum(J),b(R,x,pt,U,this.type)}O.isPointLightShadow!==!0&&this.type===Ns&&v(O,x),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,E,L)};function v(T,R){let x=t.update(_);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new an(s.x,s.y,{format:Pi,type:Rn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,x,h,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,x,d,_,null)}function S(T,R,x,y){let E=null,L=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)E=L;else if(E=x.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let A=E.uuid,C=R.uuid,I=l[A];I===void 0&&(I={},l[A]=I);let F=I[C];F===void 0&&(F=E.clone(),I[C]=F,R.addEventListener("dispose",M)),E=F}if(E.visible=R.visible,E.wireframe=R.wireframe,y===Ns?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:u[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,x.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let A=i.properties.get(E);A.light=x}return E}function b(T,R,x,y,E){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===Ns)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);let C=t.update(T),I=T.material;if(Array.isArray(I)){let F=C.groups;for(let U=0,O=F.length;U<O;U++){let X=F[U],G=I[X.materialIndex];if(G&&G.visible){let H=S(T,G,y,E);T.onBeforeShadow(i,T,R,x,C,H,X),i.renderBufferDirect(x,null,C,H,T,X),T.onAfterShadow(i,T,R,x,C,H,X)}}}else if(I.visible){let F=S(T,I,y,E);T.onBeforeShadow(i,T,R,x,C,F,null),i.renderBufferDirect(x,null,C,F,T,null),T.onAfterShadow(i,T,R,x,C,F,null)}}let A=T.children;for(let C=0,I=A.length;C<I;C++)b(A[C],R,x,y,E)}function M(T){T.target.removeEventListener("dispose",M);for(let x in l){let y=l[x],E=T.target.uuid;E in y&&(y[E].dispose(),delete y[E])}}}function Rb(i,t){function e(){let B=!1,lt=new we,nt=null,mt=new we(0,0,0,0);return{setMask:function(Mt){nt!==Mt&&!B&&(i.colorMask(Mt,Mt,Mt,Mt),nt=Mt)},setLocked:function(Mt){B=Mt},setClear:function(Mt,at,Nt,Ct,le){le===!0&&(Mt*=Ct,at*=Ct,Nt*=Ct),lt.set(Mt,at,Nt,Ct),mt.equals(lt)===!1&&(i.clearColor(Mt,at,Nt,Ct),mt.copy(lt))},reset:function(){B=!1,nt=null,mt.set(-1,0,0,0)}}}function n(){let B=!1,lt=!1,nt=null,mt=null,Mt=null;return{setReversed:function(at){if(lt!==at){let Nt=t.get("EXT_clip_control");at?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),lt=at;let Ct=Mt;Mt=null,this.setClear(Ct)}},getReversed:function(){return lt},setTest:function(at){at?$(i.DEPTH_TEST):ct(i.DEPTH_TEST)},setMask:function(at){nt!==at&&!B&&(i.depthMask(at),nt=at)},setFunc:function(at){if(lt&&(at=Af[at]),mt!==at){switch(at){case jo:i.depthFunc(i.NEVER);break;case ta:i.depthFunc(i.ALWAYS);break;case ea:i.depthFunc(i.LESS);break;case As:i.depthFunc(i.LEQUAL);break;case na:i.depthFunc(i.EQUAL);break;case ia:i.depthFunc(i.GEQUAL);break;case sa:i.depthFunc(i.GREATER);break;case ra:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}mt=at}},setLocked:function(at){B=at},setClear:function(at){Mt!==at&&(Mt=at,lt&&(at=1-at),i.clearDepth(at))},reset:function(){B=!1,nt=null,mt=null,Mt=null,lt=!1}}}function s(){let B=!1,lt=null,nt=null,mt=null,Mt=null,at=null,Nt=null,Ct=null,le=null;return{setTest:function(ce){B||(ce?$(i.STENCIL_TEST):ct(i.STENCIL_TEST))},setMask:function(ce){lt!==ce&&!B&&(i.stencilMask(ce),lt=ce)},setFunc:function(ce,rn,ze){(nt!==ce||mt!==rn||Mt!==ze)&&(i.stencilFunc(ce,rn,ze),nt=ce,mt=rn,Mt=ze)},setOp:function(ce,rn,ze){(at!==ce||Nt!==rn||Ct!==ze)&&(i.stencilOp(ce,rn,ze),at=ce,Nt=rn,Ct=ze)},setLocked:function(ce){B=ce},setClear:function(ce){le!==ce&&(i.clearStencil(ce),le=ce)},reset:function(){B=!1,lt=null,nt=null,mt=null,Mt=null,at=null,Nt=null,Ct=null,le=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,f={},u={},h={},d=new WeakMap,g=[],_=null,m=!1,p=null,v=null,S=null,b=null,M=null,T=null,R=null,x=new ht(0,0,0),y=0,E=!1,L=null,A=null,C=null,I=null,F=null,U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,X=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(G)[1]),O=X>=1):G.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),O=X>=2);let H=null,J={},pt=i.getParameter(i.SCISSOR_BOX),rt=i.getParameter(i.VIEWPORT),ft=new we().fromArray(pt),St=new we().fromArray(rt);function Lt(B,lt,nt,mt){let Mt=new Uint8Array(4),at=i.createTexture();i.bindTexture(B,at),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<nt;Nt++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,mt,0,i.RGBA,i.UNSIGNED_BYTE,Mt):i.texImage2D(lt+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Mt);return at}let K={};K[i.TEXTURE_2D]=Lt(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=Lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=Lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=Lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(i.DEPTH_TEST),o.setFunc(As),qt(!1),pe(Lc),$(i.CULL_FACE),zt(zn);function $(B){f[B]!==!0&&(i.enable(B),f[B]=!0)}function ct(B){f[B]!==!1&&(i.disable(B),f[B]=!1)}function vt(B,lt){return h[B]!==lt?(i.bindFramebuffer(B,lt),h[B]=lt,B===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=lt),B===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function _t(B,lt){let nt=g,mt=!1;if(B){nt=d.get(lt),nt===void 0&&(nt=[],d.set(lt,nt));let Mt=B.textures;if(nt.length!==Mt.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Nt=Mt.length;at<Nt;at++)nt[at]=i.COLOR_ATTACHMENT0+at;nt.length=Mt.length,mt=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,mt=!0);mt&&i.drawBuffers(nt)}function Dt(B){return _!==B?(i.useProgram(B),_=B,!0):!1}let Kt={[Yi]:i.FUNC_ADD,[$h]:i.FUNC_SUBTRACT,[Zh]:i.FUNC_REVERSE_SUBTRACT};Kt[Jh]=i.MIN,Kt[Kh]=i.MAX;let Ot={[Qh]:i.ZERO,[jh]:i.ONE,[tf]:i.SRC_COLOR,[Nc]:i.SRC_ALPHA,[af]:i.SRC_ALPHA_SATURATE,[rf]:i.DST_COLOR,[nf]:i.DST_ALPHA,[ef]:i.ONE_MINUS_SRC_COLOR,[Uc]:i.ONE_MINUS_SRC_ALPHA,[of]:i.ONE_MINUS_DST_COLOR,[sf]:i.ONE_MINUS_DST_ALPHA,[lf]:i.CONSTANT_COLOR,[cf]:i.ONE_MINUS_CONSTANT_COLOR,[uf]:i.CONSTANT_ALPHA,[hf]:i.ONE_MINUS_CONSTANT_ALPHA};function zt(B,lt,nt,mt,Mt,at,Nt,Ct,le,ce){if(B===zn){m===!0&&(ct(i.BLEND),m=!1);return}if(m===!1&&($(i.BLEND),m=!0),B!==Yh){if(B!==p||ce!==E){if((v!==Yi||M!==Yi)&&(i.blendEquation(i.FUNC_ADD),v=Yi,M=Yi),ce)switch(B){case Us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sn:i.blendFunc(i.ONE,i.ONE);break;case Dc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Vt("WebGLState: Invalid blending: ",B);break}else switch(B){case Us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Dc:Vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fc:Vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Vt("WebGLState: Invalid blending: ",B);break}S=null,b=null,T=null,R=null,x.set(0,0,0),y=0,p=B,E=ce}return}Mt=Mt||lt,at=at||nt,Nt=Nt||mt,(lt!==v||Mt!==M)&&(i.blendEquationSeparate(Kt[lt],Kt[Mt]),v=lt,M=Mt),(nt!==S||mt!==b||at!==T||Nt!==R)&&(i.blendFuncSeparate(Ot[nt],Ot[mt],Ot[at],Ot[Nt]),S=nt,b=mt,T=at,R=Nt),(Ct.equals(x)===!1||le!==y)&&(i.blendColor(Ct.r,Ct.g,Ct.b,le),x.copy(Ct),y=le),p=B,E=!1}function Qt(B,lt){B.side===He?ct(i.CULL_FACE):$(i.CULL_FACE);let nt=B.side===nn;lt&&(nt=!nt),qt(nt),B.blending===Us&&B.transparent===!1?zt(zn):zt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);let mt=B.stencilWrite;a.setTest(mt),mt&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Pe(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function qt(B){L!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),L=B)}function pe(B){B!==Wh?($(i.CULL_FACE),B!==A&&(B===Lc?i.cullFace(i.BACK):B===Xh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ct(i.CULL_FACE),A=B}function Te(B){B!==C&&(O&&i.lineWidth(B),C=B)}function Pe(B,lt,nt){B?($(i.POLYGON_OFFSET_FILL),(I!==lt||F!==nt)&&(I=lt,F=nt,o.getReversed()&&(lt=-lt),i.polygonOffset(lt,nt))):ct(i.POLYGON_OFFSET_FILL)}function ae(B){B?$(i.SCISSOR_TEST):ct(i.SCISSOR_TEST)}function be(B){B===void 0&&(B=i.TEXTURE0+U-1),H!==B&&(i.activeTexture(B),H=B)}function k(B,lt,nt){nt===void 0&&(H===null?nt=i.TEXTURE0+U-1:nt=H);let mt=J[nt];mt===void 0&&(mt={type:void 0,texture:void 0},J[nt]=mt),(mt.type!==B||mt.texture!==lt)&&(H!==nt&&(i.activeTexture(nt),H=nt),i.bindTexture(B,lt||K[B]),mt.type=B,mt.texture=lt)}function Ie(){let B=J[H];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function jt(){try{i.compressedTexImage2D(...arguments)}catch(B){Vt("WebGLState:",B)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(B){Vt("WebGLState:",B)}}function w(){try{i.texSubImage2D(...arguments)}catch(B){Vt("WebGLState:",B)}}function W(){try{i.texSubImage3D(...arguments)}catch(B){Vt("WebGLState:",B)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(B){Vt("WebGLState:",B)}}function it(){try{i.compressedTexSubImage3D(...arguments)}catch(B){Vt("WebGLState:",B)}}function gt(){try{i.texStorage2D(...arguments)}catch(B){Vt("WebGLState:",B)}}function bt(){try{i.texStorage3D(...arguments)}catch(B){Vt("WebGLState:",B)}}function st(){try{i.texImage2D(...arguments)}catch(B){Vt("WebGLState:",B)}}function ot(){try{i.texImage3D(...arguments)}catch(B){Vt("WebGLState:",B)}}function yt(B){return u[B]!==void 0?u[B]:i.getParameter(B)}function Ft(B,lt){u[B]!==lt&&(i.pixelStorei(B,lt),u[B]=lt)}function Q(B){ft.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),ft.copy(B))}function j(B){St.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),St.copy(B))}function et(B,lt){let nt=l.get(lt);nt===void 0&&(nt=new WeakMap,l.set(lt,nt));let mt=nt.get(B);mt===void 0&&(mt=i.getUniformBlockIndex(lt,B.name),nt.set(B,mt))}function dt(B,lt){let mt=l.get(lt).get(B);c.get(lt)!==mt&&(i.uniformBlockBinding(lt,mt,B.__bindingPointIndex),c.set(lt,mt))}function ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},u={},H=null,J={},h={},d=new WeakMap,g=[],_=null,m=!1,p=null,v=null,S=null,b=null,M=null,T=null,R=null,x=new ht(0,0,0),y=0,E=!1,L=null,A=null,C=null,I=null,F=null,ft.set(0,0,i.canvas.width,i.canvas.height),St.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:$,disable:ct,bindFramebuffer:vt,drawBuffers:_t,useProgram:Dt,setBlending:zt,setMaterial:Qt,setFlipSided:qt,setCullFace:pe,setLineWidth:Te,setPolygonOffset:Pe,setScissorTest:ae,activeTexture:be,bindTexture:k,unbindTexture:Ie,compressedTexImage2D:jt,compressedTexImage3D:N,texImage2D:st,texImage3D:ot,pixelStorei:Ft,getParameter:yt,updateUBOMapping:et,uniformBlockBinding:dt,texStorage2D:gt,texStorage3D:bt,texSubImage2D:w,texSubImage3D:W,compressedTexSubImage2D:Z,compressedTexSubImage3D:it,scissor:Q,viewport:j,reset:ut}}function Cb(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Gt,f=new WeakMap,u=new Set,h,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(N,w){return g?new OffscreenCanvas(N,w):fr("canvas")}function m(N,w,W){let Z=1,it=jt(N);if((it.width>W||it.height>W)&&(Z=W/Math.max(it.width,it.height)),Z<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let gt=Math.floor(Z*it.width),bt=Math.floor(Z*it.height);h===void 0&&(h=_(gt,bt));let st=w?_(gt,bt):h;return st.width=gt,st.height=bt,st.getContext("2d").drawImage(N,0,0,gt,bt),kt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+gt+"x"+bt+")."),st}else return"data"in N&&kt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),N;return N}function p(N){return N.generateMipmaps}function v(N){i.generateMipmap(N)}function S(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(N,w,W,Z,it,gt=!1){if(N!==null){if(i[N]!==void 0)return i[N];kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let bt;Z&&(bt=t.get("EXT_texture_norm16"),bt||kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let st=w;if(w===i.RED&&(W===i.FLOAT&&(st=i.R32F),W===i.HALF_FLOAT&&(st=i.R16F),W===i.UNSIGNED_BYTE&&(st=i.R8),W===i.UNSIGNED_SHORT&&bt&&(st=bt.R16_EXT),W===i.SHORT&&bt&&(st=bt.R16_SNORM_EXT)),w===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(st=i.R8UI),W===i.UNSIGNED_SHORT&&(st=i.R16UI),W===i.UNSIGNED_INT&&(st=i.R32UI),W===i.BYTE&&(st=i.R8I),W===i.SHORT&&(st=i.R16I),W===i.INT&&(st=i.R32I)),w===i.RG&&(W===i.FLOAT&&(st=i.RG32F),W===i.HALF_FLOAT&&(st=i.RG16F),W===i.UNSIGNED_BYTE&&(st=i.RG8),W===i.UNSIGNED_SHORT&&bt&&(st=bt.RG16_EXT),W===i.SHORT&&bt&&(st=bt.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(st=i.RG8UI),W===i.UNSIGNED_SHORT&&(st=i.RG16UI),W===i.UNSIGNED_INT&&(st=i.RG32UI),W===i.BYTE&&(st=i.RG8I),W===i.SHORT&&(st=i.RG16I),W===i.INT&&(st=i.RG32I)),w===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(st=i.RGB8UI),W===i.UNSIGNED_SHORT&&(st=i.RGB16UI),W===i.UNSIGNED_INT&&(st=i.RGB32UI),W===i.BYTE&&(st=i.RGB8I),W===i.SHORT&&(st=i.RGB16I),W===i.INT&&(st=i.RGB32I)),w===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(st=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(st=i.RGBA16UI),W===i.UNSIGNED_INT&&(st=i.RGBA32UI),W===i.BYTE&&(st=i.RGBA8I),W===i.SHORT&&(st=i.RGBA16I),W===i.INT&&(st=i.RGBA32I)),w===i.RGB&&(W===i.UNSIGNED_SHORT&&bt&&(st=bt.RGB16_EXT),W===i.SHORT&&bt&&(st=bt.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(st=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(st=i.R11F_G11F_B10F)),w===i.RGBA){let ot=gt?ur:ne.getTransfer(it);W===i.FLOAT&&(st=i.RGBA32F),W===i.HALF_FLOAT&&(st=i.RGBA16F),W===i.UNSIGNED_BYTE&&(st=ot===he?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&bt&&(st=bt.RGBA16_EXT),W===i.SHORT&&bt&&(st=bt.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function M(N,w){let W;return N?w===null||w===An||w===Bs?W=i.DEPTH24_STENCIL8:w===_n?W=i.DEPTH32F_STENCIL8:w===Os&&(W=i.DEPTH24_STENCIL8,kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===An||w===Bs?W=i.DEPTH_COMPONENT24:w===_n?W=i.DEPTH_COMPONENT32F:w===Os&&(W=i.DEPTH_COMPONENT16),W}function T(N,w){return p(N)===!0||N.isFramebufferTexture&&N.minFilter!==Be&&N.minFilter!==Ge?Math.log2(Math.max(w.width,w.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?w.mipmaps.length:1}function R(N){let w=N.target;w.removeEventListener("dispose",R),y(w),w.isVideoTexture&&f.delete(w),w.isHTMLTexture&&u.delete(w)}function x(N){let w=N.target;w.removeEventListener("dispose",x),L(w)}function y(N){let w=n.get(N);if(w.__webglInit===void 0)return;let W=N.source,Z=d.get(W);if(Z){let it=Z[w.__cacheKey];it.usedTimes--,it.usedTimes===0&&E(N),Object.keys(Z).length===0&&d.delete(W)}n.remove(N)}function E(N){let w=n.get(N);i.deleteTexture(w.__webglTexture);let W=N.source,Z=d.get(W);delete Z[w.__cacheKey],o.memory.textures--}function L(N){let w=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(w.__webglFramebuffer[Z]))for(let it=0;it<w.__webglFramebuffer[Z].length;it++)i.deleteFramebuffer(w.__webglFramebuffer[Z][it]);else i.deleteFramebuffer(w.__webglFramebuffer[Z]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[Z])}else{if(Array.isArray(w.__webglFramebuffer))for(let Z=0;Z<w.__webglFramebuffer.length;Z++)i.deleteFramebuffer(w.__webglFramebuffer[Z]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Z=0;Z<w.__webglColorRenderbuffer.length;Z++)w.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[Z]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let W=N.textures;for(let Z=0,it=W.length;Z<it;Z++){let gt=n.get(W[Z]);gt.__webglTexture&&(i.deleteTexture(gt.__webglTexture),o.memory.textures--),n.remove(W[Z])}n.remove(N)}let A=0;function C(){A=0}function I(){return A}function F(N){A=N}function U(){let N=A;return N>=s.maxTextures&&kt("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),A+=1,N}function O(N){let w=[];return w.push(N.wrapS),w.push(N.wrapT),w.push(N.wrapR||0),w.push(N.magFilter),w.push(N.minFilter),w.push(N.anisotropy),w.push(N.internalFormat),w.push(N.format),w.push(N.type),w.push(N.generateMipmaps),w.push(N.premultiplyAlpha),w.push(N.flipY),w.push(N.unpackAlignment),w.push(N.colorSpace),w.join()}function X(N,w){let W=n.get(N);if(N.isVideoTexture&&k(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&W.__version!==N.version){let Z=N.image;if(Z===null)kt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)kt("WebGLRenderer: Texture marked for update but image is incomplete");else{ct(W,N,w);return}}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+w)}function G(N,w){let W=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){ct(W,N,w);return}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+w)}function H(N,w){let W=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){ct(W,N,w);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+w)}function J(N,w){let W=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&W.__version!==N.version){vt(W,N,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+w)}let pt={[oa]:i.REPEAT,[Nn]:i.CLAMP_TO_EDGE,[aa]:i.MIRRORED_REPEAT},rt={[Be]:i.NEAREST,[pf]:i.NEAREST_MIPMAP_NEAREST,[Br]:i.NEAREST_MIPMAP_LINEAR,[Ge]:i.LINEAR,[Ua]:i.LINEAR_MIPMAP_NEAREST,[Ri]:i.LINEAR_MIPMAP_LINEAR},ft={[_f]:i.NEVER,[Sf]:i.ALWAYS,[bf]:i.LESS,[vl]:i.LEQUAL,[vf]:i.EQUAL,[yl]:i.GEQUAL,[yf]:i.GREATER,[Mf]:i.NOTEQUAL};function St(N,w){if(w.type===_n&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Ge||w.magFilter===Ua||w.magFilter===Br||w.magFilter===Ri||w.minFilter===Ge||w.minFilter===Ua||w.minFilter===Br||w.minFilter===Ri)&&kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,pt[w.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,pt[w.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,pt[w.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,rt[w.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,rt[w.minFilter]),w.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,ft[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Be||w.minFilter!==Br&&w.minFilter!==Ri||w.type===_n&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(N,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Lt(N,w){let W=!1;N.__webglInit===void 0&&(N.__webglInit=!0,w.addEventListener("dispose",R));let Z=w.source,it=d.get(Z);it===void 0&&(it={},d.set(Z,it));let gt=O(w);if(gt!==N.__cacheKey){it[gt]===void 0&&(it[gt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),it[gt].usedTimes++;let bt=it[N.__cacheKey];bt!==void 0&&(it[N.__cacheKey].usedTimes--,bt.usedTimes===0&&E(w)),N.__cacheKey=gt,N.__webglTexture=it[gt].texture}return W}function K(N,w,W){return Math.floor(Math.floor(N/W)/w)}function $(N,w,W,Z){let gt=N.updateRanges;if(gt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,W,Z,w.data);else{gt.sort((Ft,Q)=>Ft.start-Q.start);let bt=0;for(let Ft=1;Ft<gt.length;Ft++){let Q=gt[bt],j=gt[Ft],et=Q.start+Q.count,dt=K(j.start,w.width,4),ut=K(Q.start,w.width,4);j.start<=et+1&&dt===ut&&K(j.start+j.count-1,w.width,4)===dt?Q.count=Math.max(Q.count,j.start+j.count-Q.start):(++bt,gt[bt]=j)}gt.length=bt+1;let st=e.getParameter(i.UNPACK_ROW_LENGTH),ot=e.getParameter(i.UNPACK_SKIP_PIXELS),yt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let Ft=0,Q=gt.length;Ft<Q;Ft++){let j=gt[Ft],et=Math.floor(j.start/4),dt=Math.ceil(j.count/4),ut=et%w.width,B=Math.floor(et/w.width),lt=dt,nt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ut),e.pixelStorei(i.UNPACK_SKIP_ROWS,B),e.texSubImage2D(i.TEXTURE_2D,0,ut,B,lt,nt,W,Z,w.data)}N.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,st),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ot),e.pixelStorei(i.UNPACK_SKIP_ROWS,yt)}}function ct(N,w,W){let Z=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Z=i.TEXTURE_3D);let it=Lt(N,w),gt=w.source;e.bindTexture(Z,N.__webglTexture,i.TEXTURE0+W);let bt=n.get(gt);if(gt.version!==bt.__version||it===!0){if(e.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let nt=ne.getPrimaries(ne.workingColorSpace),mt=w.colorSpace===si?null:ne.getPrimaries(w.colorSpace),Mt=w.colorSpace===si||nt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt)}e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let ot=m(w.image,!1,s.maxTextureSize);ot=Ie(w,ot);let yt=r.convert(w.format,w.colorSpace),Ft=r.convert(w.type),Q=b(w.internalFormat,yt,Ft,w.normalized,w.colorSpace,w.isVideoTexture);St(Z,w);let j,et=w.mipmaps,dt=w.isVideoTexture!==!0,ut=bt.__version===void 0||it===!0,B=gt.dataReady,lt=T(w,ot);if(w.isDepthTexture)Q=M(w.format===Ci,w.type),ut&&(dt?e.texStorage2D(i.TEXTURE_2D,1,Q,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,Q,ot.width,ot.height,0,yt,Ft,null));else if(w.isDataTexture)if(et.length>0){dt&&ut&&e.texStorage2D(i.TEXTURE_2D,lt,Q,et[0].width,et[0].height);for(let nt=0,mt=et.length;nt<mt;nt++)j=et[nt],dt?B&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,j.width,j.height,yt,Ft,j.data):e.texImage2D(i.TEXTURE_2D,nt,Q,j.width,j.height,0,yt,Ft,j.data);w.generateMipmaps=!1}else dt?(ut&&e.texStorage2D(i.TEXTURE_2D,lt,Q,ot.width,ot.height),B&&$(w,ot,yt,Ft)):e.texImage2D(i.TEXTURE_2D,0,Q,ot.width,ot.height,0,yt,Ft,ot.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){dt&&ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Q,et[0].width,et[0].height,ot.depth);for(let nt=0,mt=et.length;nt<mt;nt++)if(j=et[nt],w.format!==bn)if(yt!==null)if(dt){if(B)if(w.layerUpdates.size>0){let Mt=su(j.width,j.height,w.format,w.type);for(let at of w.layerUpdates){let Nt=j.data.subarray(at*Mt/j.data.BYTES_PER_ELEMENT,(at+1)*Mt/j.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,at,j.width,j.height,1,yt,Nt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,j.width,j.height,ot.depth,yt,j.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,Q,j.width,j.height,ot.depth,0,j.data,0,0);else kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else dt?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,j.width,j.height,ot.depth,yt,Ft,j.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,Q,j.width,j.height,ot.depth,0,yt,Ft,j.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{dt&&ut&&e.texStorage2D(i.TEXTURE_2D,lt,Q,et[0].width,et[0].height);for(let nt=0,mt=et.length;nt<mt;nt++)j=et[nt],w.format!==bn?yt!==null?dt?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,j.width,j.height,yt,j.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,Q,j.width,j.height,0,j.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?B&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,j.width,j.height,yt,Ft,j.data):e.texImage2D(i.TEXTURE_2D,nt,Q,j.width,j.height,0,yt,Ft,j.data)}else if(w.isDataArrayTexture)if(dt){if(ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Q,ot.width,ot.height,ot.depth),B)if(w.layerUpdates.size>0){let nt=su(ot.width,ot.height,w.format,w.type);for(let mt of w.layerUpdates){let Mt=ot.data.subarray(mt*nt/ot.data.BYTES_PER_ELEMENT,(mt+1)*nt/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,mt,ot.width,ot.height,1,yt,Ft,Mt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,yt,Ft,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Q,ot.width,ot.height,ot.depth,0,yt,Ft,ot.data);else if(w.isData3DTexture)dt?(ut&&e.texStorage3D(i.TEXTURE_3D,lt,Q,ot.width,ot.height,ot.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,yt,Ft,ot.data)):e.texImage3D(i.TEXTURE_3D,0,Q,ot.width,ot.height,ot.depth,0,yt,Ft,ot.data);else if(w.isFramebufferTexture){if(ut)if(dt)e.texStorage2D(i.TEXTURE_2D,lt,Q,ot.width,ot.height);else{let nt=ot.width,mt=ot.height;for(let Mt=0;Mt<lt;Mt++)e.texImage2D(i.TEXTURE_2D,Mt,Q,nt,mt,0,yt,Ft,null),nt>>=1,mt>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let nt=i.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),ot.parentNode!==nt){nt.appendChild(ot),u.add(w),nt.onpaint=mt=>{let Mt=mt.changedElements;for(let at of u)Mt.includes(at.image)&&(at.needsUpdate=!0)},nt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ot);else{let Mt=i.RGBA,at=i.RGBA,Nt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Mt,at,Nt,ot)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(et.length>0){if(dt&&ut){let nt=jt(et[0]);e.texStorage2D(i.TEXTURE_2D,lt,Q,nt.width,nt.height)}for(let nt=0,mt=et.length;nt<mt;nt++)j=et[nt],dt?B&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,yt,Ft,j):e.texImage2D(i.TEXTURE_2D,nt,Q,yt,Ft,j);w.generateMipmaps=!1}else if(dt){if(ut){let nt=jt(ot);e.texStorage2D(i.TEXTURE_2D,lt,Q,nt.width,nt.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,Ft,ot)}else e.texImage2D(i.TEXTURE_2D,0,Q,yt,Ft,ot);p(w)&&v(Z),bt.__version=gt.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function vt(N,w,W){if(w.image.length!==6)return;let Z=Lt(N,w),it=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+W);let gt=n.get(it);if(it.version!==gt.__version||Z===!0){e.activeTexture(i.TEXTURE0+W);let bt=ne.getPrimaries(ne.workingColorSpace),st=w.colorSpace===si?null:ne.getPrimaries(w.colorSpace),ot=w.colorSpace===si||bt===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let yt=w.isCompressedTexture||w.image[0].isCompressedTexture,Ft=w.image[0]&&w.image[0].isDataTexture,Q=[];for(let at=0;at<6;at++)!yt&&!Ft?Q[at]=m(w.image[at],!0,s.maxCubemapSize):Q[at]=Ft?w.image[at].image:w.image[at],Q[at]=Ie(w,Q[at]);let j=Q[0],et=r.convert(w.format,w.colorSpace),dt=r.convert(w.type),ut=b(w.internalFormat,et,dt,w.normalized,w.colorSpace),B=w.isVideoTexture!==!0,lt=gt.__version===void 0||Z===!0,nt=it.dataReady,mt=T(w,j);St(i.TEXTURE_CUBE_MAP,w);let Mt;if(yt){B&&lt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,ut,j.width,j.height);for(let at=0;at<6;at++){Mt=Q[at].mipmaps;for(let Nt=0;Nt<Mt.length;Nt++){let Ct=Mt[Nt];w.format!==bn?et!==null?B?nt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Nt,0,0,Ct.width,Ct.height,et,Ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Nt,ut,Ct.width,Ct.height,0,Ct.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Nt,0,0,Ct.width,Ct.height,et,dt,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Nt,ut,Ct.width,Ct.height,0,et,dt,Ct.data)}}}else{if(Mt=w.mipmaps,B&&lt){Mt.length>0&&mt++;let at=jt(Q[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,ut,at.width,at.height)}for(let at=0;at<6;at++)if(Ft){B?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Q[at].width,Q[at].height,et,dt,Q[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ut,Q[at].width,Q[at].height,0,et,dt,Q[at].data);for(let Nt=0;Nt<Mt.length;Nt++){let le=Mt[Nt].image[at].image;B?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Nt+1,0,0,le.width,le.height,et,dt,le.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Nt+1,ut,le.width,le.height,0,et,dt,le.data)}}else{B?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,et,dt,Q[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ut,et,dt,Q[at]);for(let Nt=0;Nt<Mt.length;Nt++){let Ct=Mt[Nt];B?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Nt+1,0,0,et,dt,Ct.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Nt+1,ut,et,dt,Ct.image[at])}}}p(w)&&v(i.TEXTURE_CUBE_MAP),gt.__version=it.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function _t(N,w,W,Z,it,gt){let bt=r.convert(W.format,W.colorSpace),st=r.convert(W.type),ot=b(W.internalFormat,bt,st,W.normalized,W.colorSpace),yt=n.get(w),Ft=n.get(W);if(Ft.__renderTarget=w,!yt.__hasExternalTextures){let Q=Math.max(1,w.width>>gt),j=Math.max(1,w.height>>gt);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,gt,ot,Q,j,w.depth,0,bt,st,null):e.texImage2D(it,gt,ot,Q,j,0,bt,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,N),be(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,it,Ft.__webglTexture,0,ae(w)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,it,Ft.__webglTexture,gt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(N,w,W){if(i.bindRenderbuffer(i.RENDERBUFFER,N),w.depthBuffer){let Z=w.depthTexture,it=Z&&Z.isDepthTexture?Z.type:null,gt=M(w.stencilBuffer,it),bt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;be(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae(w),gt,w.width,w.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae(w),gt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,gt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,N)}else{let Z=w.textures;for(let it=0;it<Z.length;it++){let gt=Z[it],bt=r.convert(gt.format,gt.colorSpace),st=r.convert(gt.type),ot=b(gt.internalFormat,bt,st,gt.normalized,gt.colorSpace);be(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae(w),ot,w.width,w.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae(w),ot,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ot,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Kt(N,w,W){let Z=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,N),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(w.depthTexture);if(it.__renderTarget=w,(!it.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Z){if(it.__webglInit===void 0&&(it.__webglInit=!0,w.depthTexture.addEventListener("dispose",R)),it.__webglTexture===void 0){it.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),St(i.TEXTURE_CUBE_MAP,w.depthTexture);let yt=r.convert(w.depthTexture.format),Ft=r.convert(w.depthTexture.type),Q;w.depthTexture.format===Un?Q=i.DEPTH_COMPONENT24:w.depthTexture.format===Ci&&(Q=i.DEPTH24_STENCIL8);for(let j=0;j<6;j++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Q,w.width,w.height,0,yt,Ft,null)}}else X(w.depthTexture,0);let gt=it.__webglTexture,bt=ae(w),st=Z?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,ot=w.depthTexture.format===Ci?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===Un)be(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,st,gt,0,bt):i.framebufferTexture2D(i.FRAMEBUFFER,ot,st,gt,0);else if(w.depthTexture.format===Ci)be(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,st,gt,0,bt):i.framebufferTexture2D(i.FRAMEBUFFER,ot,st,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ot(N){let w=n.get(N),W=N.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==N.depthTexture){let Z=N.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Z){let it=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Z.removeEventListener("dispose",it)};Z.addEventListener("dispose",it),w.__depthDisposeCallback=it}w.__boundDepthTexture=Z}if(N.depthTexture&&!w.__autoAllocateDepthBuffer)if(W)for(let Z=0;Z<6;Z++)Kt(w.__webglFramebuffer[Z],N,Z);else{let Z=N.texture.mipmaps;Z&&Z.length>0?Kt(w.__webglFramebuffer[0],N,0):Kt(w.__webglFramebuffer,N,0)}else if(W){w.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[Z]),w.__webglDepthbuffer[Z]===void 0)w.__webglDepthbuffer[Z]=i.createRenderbuffer(),Dt(w.__webglDepthbuffer[Z],N,!1);else{let it=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=w.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,gt)}}else{let Z=N.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Dt(w.__webglDepthbuffer,N,!1);else{let it=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,gt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(N,w,W){let Z=n.get(N);w!==void 0&&_t(Z.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Ot(N)}function Qt(N){let w=N.texture,W=n.get(N),Z=n.get(w);N.addEventListener("dispose",x);let it=N.textures,gt=N.isWebGLCubeRenderTarget===!0,bt=it.length>1;if(bt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=w.version,o.memory.textures++),gt){W.__webglFramebuffer=[];for(let st=0;st<6;st++)if(w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer[st]=[];for(let ot=0;ot<w.mipmaps.length;ot++)W.__webglFramebuffer[st][ot]=i.createFramebuffer()}else W.__webglFramebuffer[st]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer=[];for(let st=0;st<w.mipmaps.length;st++)W.__webglFramebuffer[st]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(bt)for(let st=0,ot=it.length;st<ot;st++){let yt=n.get(it[st]);yt.__webglTexture===void 0&&(yt.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&be(N)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let st=0;st<it.length;st++){let ot=it[st];W.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[st]);let yt=r.convert(ot.format,ot.colorSpace),Ft=r.convert(ot.type),Q=b(ot.internalFormat,yt,Ft,ot.normalized,ot.colorSpace,N.isXRRenderTarget===!0),j=ae(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,j,Q,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,W.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Dt(W.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(gt){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),St(i.TEXTURE_CUBE_MAP,w);for(let st=0;st<6;st++)if(w.mipmaps&&w.mipmaps.length>0)for(let ot=0;ot<w.mipmaps.length;ot++)_t(W.__webglFramebuffer[st][ot],N,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,ot);else _t(W.__webglFramebuffer[st],N,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);p(w)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let st=0,ot=it.length;st<ot;st++){let yt=it[st],Ft=n.get(yt),Q=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Q=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,Ft.__webglTexture),St(Q,yt),_t(W.__webglFramebuffer,N,yt,i.COLOR_ATTACHMENT0+st,Q,0),p(yt)&&v(Q)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(st=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,Z.__webglTexture),St(st,w),w.mipmaps&&w.mipmaps.length>0)for(let ot=0;ot<w.mipmaps.length;ot++)_t(W.__webglFramebuffer[ot],N,w,i.COLOR_ATTACHMENT0,st,ot);else _t(W.__webglFramebuffer,N,w,i.COLOR_ATTACHMENT0,st,0);p(w)&&v(st),e.unbindTexture()}N.depthBuffer&&Ot(N)}function qt(N){let w=N.textures;for(let W=0,Z=w.length;W<Z;W++){let it=w[W];if(p(it)){let gt=S(N),bt=n.get(it).__webglTexture;e.bindTexture(gt,bt),v(gt),e.unbindTexture()}}}let pe=[],Te=[];function Pe(N){if(N.samples>0){if(be(N)===!1){let w=N.textures,W=N.width,Z=N.height,it=i.COLOR_BUFFER_BIT,gt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(N),st=w.length>1;if(st)for(let yt=0;yt<w.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);let ot=N.texture.mipmaps;ot&&ot.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let yt=0;yt<w.length;yt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[yt]);let Ft=n.get(w[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ft,0)}i.blitFramebuffer(0,0,W,Z,0,0,W,Z,it,i.NEAREST),c===!0&&(pe.length=0,Te.length=0,pe.push(i.COLOR_ATTACHMENT0+yt),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(pe.push(gt),Te.push(gt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Te)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let yt=0;yt<w.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,bt.__webglColorRenderbuffer[yt]);let Ft=n.get(w[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,Ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&c){let w=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function ae(N){return Math.min(s.maxSamples,N.samples)}function be(N){let w=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function k(N){let w=o.render.frame;f.get(N)!==w&&(f.set(N,w),N.update())}function Ie(N,w){let W=N.colorSpace,Z=N.format,it=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||W!==cr&&W!==si&&(ne.getTransfer(W)===he?(Z!==bn||it!==mn)&&kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Vt("WebGLTextures: Unsupported texture color space:",W)),w}function jt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(l.width=N.naturalWidth||N.width,l.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(l.width=N.displayWidth,l.height=N.displayHeight):(l.width=N.width,l.height=N.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=C,this.getTextureUnits=I,this.setTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=G,this.setTexture3D=H,this.setTextureCube=J,this.rebindTextures=zt,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=be,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Pb(i,t){function e(n,s=si){let r,o=ne.getTransfer(s);if(n===mn)return i.UNSIGNED_BYTE;if(n===Ba)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ka)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$c)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===qc)return i.BYTE;if(n===Yc)return i.SHORT;if(n===Os)return i.UNSIGNED_SHORT;if(n===Oa)return i.INT;if(n===An)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===Rn)return i.HALF_FLOAT;if(n===Jc)return i.ALPHA;if(n===Kc)return i.RGB;if(n===bn)return i.RGBA;if(n===Un)return i.DEPTH_COMPONENT;if(n===Ci)return i.DEPTH_STENCIL;if(n===Va)return i.RED;if(n===za)return i.RED_INTEGER;if(n===Pi)return i.RG;if(n===Ga)return i.RG_INTEGER;if(n===Ha)return i.RGBA_INTEGER;if(n===kr||n===Vr||n===zr||n===Gr)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wa||n===Xa||n===qa||n===Ya)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$a||n===Za||n===Ja||n===Ka||n===Qa||n===Hr||n===ja)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$a||n===Za)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ja)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ka)return r.COMPRESSED_R11_EAC;if(n===Qa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Hr)return r.COMPRESSED_RG11_EAC;if(n===ja)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===ul||n===hl||n===fl||n===dl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===tl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===el)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===il)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ol)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===al)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ll)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ul)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===dl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pl||n===ml||n===gl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===pl)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xl||n===_l||n===Wr||n===bl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===xl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_l)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ib=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lb=`
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

}`,Su=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Er(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new dn({vertexShader:Ib,fragmentShader:Lb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new te(new en(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wu=class extends On{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,f=null,u=null,h=null,d=null,g=null,_=typeof XRWebGLBinding<"u",m=new Su,p={},v=e.getContextAttributes(),S=null,b=null,M=[],T=[],R=new Gt,x=null,y=null,E=new Ze;E.viewport=new we;let L=new Ze;L.viewport=new we;let A=[E,L],C=new La,I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let $=M[K];return $===void 0&&($=new Ps,M[K]=$),$.getTargetRaySpace()},this.getControllerGrip=function(K){let $=M[K];return $===void 0&&($=new Ps,M[K]=$),$.getGripSpace()},this.getHand=function(K){let $=M[K];return $===void 0&&($=new Ps,M[K]=$),$.getHandSpace()};function U(K){let $=T.indexOf(K.inputSource);if($===-1)return;let ct=M[$];ct!==void 0&&(ct.update(K.inputSource,K.frame,l||o),ct.dispatchEvent({type:K.type,data:K.inputSource}))}function O(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",X);for(let K=0;K<M.length;K++){let $=T[K];$!==null&&(T[K]=null,M[K].disconnect($))}I=null,F=null,m.reset();for(let K in p)delete p[K];if(t.setRenderTarget(S),d=null,h=null,u=null,s=null,b=null,Lt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(R.width,R.height,!1),y!==null){let K=y.camera;K.fov=y.fov,K.zoom=y.zoom,K.updateProjectionMatrix(),y=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",O),s.addEventListener("inputsourceschange",X),v.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ct=null,vt=null,_t=null;v.depth&&(_t=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=v.stencil?Ci:Un,vt=v.stencil?Bs:An);let Dt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};u=this.getBinding(),h=u.createProjectionLayer(Dt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),b=new an(h.textureWidth,h.textureHeight,{format:bn,type:mn,depthTexture:new Mi(h.textureWidth,h.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let ct={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ct),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new an(d.framebufferWidth,d.framebufferHeight,{format:bn,type:mn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Lt.setContext(s),Lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(K){for(let $=0;$<K.removed.length;$++){let ct=K.removed[$],vt=T.indexOf(ct);vt>=0&&(T[vt]=null,M[vt].disconnect(ct))}for(let $=0;$<K.added.length;$++){let ct=K.added[$],vt=T.indexOf(ct);if(vt===-1){for(let Dt=0;Dt<M.length;Dt++)if(Dt>=T.length){T.push(ct),vt=Dt;break}else if(T[Dt]===null){T[Dt]=ct,vt=Dt;break}if(vt===-1)break}let _t=M[vt];_t&&_t.connect(ct)}}let G=new z,H=new z;function J(K,$,ct){G.setFromMatrixPosition($.matrixWorld),H.setFromMatrixPosition(ct.matrixWorld);let vt=G.distanceTo(H),_t=$.projectionMatrix.elements,Dt=ct.projectionMatrix.elements,Kt=_t[14]/(_t[10]-1),Ot=_t[14]/(_t[10]+1),zt=(_t[9]+1)/_t[5],Qt=(_t[9]-1)/_t[5],qt=(_t[8]-1)/_t[0],pe=(Dt[8]+1)/Dt[0],Te=Kt*qt,Pe=Kt*pe,ae=vt/(-qt+pe),be=ae*-qt;if($.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(be),K.translateZ(ae),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),_t[10]===-1)K.projectionMatrix.copy($.projectionMatrix),K.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let k=Kt+ae,Ie=Ot+ae,jt=Te-be,N=Pe+(vt-be),w=zt*Ot/Ie*k,W=Qt*Ot/Ie*k;K.projectionMatrix.makePerspective(jt,N,w,W,k,Ie),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function pt(K,$){$===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices($.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let $=K.near,ct=K.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(ct=m.depthFar)),C.near=L.near=E.near=$,C.far=L.far=E.far=ct,(I!==C.near||F!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),I=C.near,F=C.far),C.layers.mask=K.layers.mask|6,E.layers.mask=C.layers.mask&-5,L.layers.mask=C.layers.mask&-3;let vt=K.parent,_t=C.cameras;pt(C,vt);for(let Dt=0;Dt<_t.length;Dt++)pt(_t[Dt],vt);_t.length===2?J(C,E,L):C.projectionMatrix.copy(E.projectionMatrix),y===null&&K.isPerspectiveCamera&&(y={camera:K,fov:K.fov,zoom:K.zoom}),rt(K,C,vt)};function rt(K,$,ct){ct===null?K.matrix.copy($.matrixWorld):(K.matrix.copy(ct.matrixWorld),K.matrix.invert(),K.matrix.multiply($.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy($.projectionMatrix),K.projectionMatrixInverse.copy($.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ca*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(K){c=K,h!==null&&(h.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(C)},this.getCameraTexture=function(K){return p[K]};let ft=null;function St(K,$){if(f=$.getViewerPose(l||o),g=$,f!==null){let ct=f.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let vt=!1;ct.length!==C.cameras.length&&(C.cameras.length=0,vt=!0);for(let Ot=0;Ot<ct.length;Ot++){let zt=ct[Ot],Qt=null;if(d!==null)Qt=d.getViewport(zt);else{let pe=u.getViewSubImage(h,zt);Qt=pe.viewport,Ot===0&&(t.setRenderTargetTextures(b,pe.colorTexture,pe.depthStencilTexture),t.setRenderTarget(b))}let qt=A[Ot];qt===void 0&&(qt=new Ze,qt.layers.enable(Ot),qt.viewport=new we,A[Ot]=qt),qt.matrix.fromArray(zt.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(zt.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),Ot===0&&(C.matrix.copy(qt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),vt===!0&&C.cameras.push(qt)}let _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let Ot=u.getDepthInformation(ct[0]);Ot&&Ot.isValid&&Ot.texture&&m.init(Ot,s.renderState)}if(_t&&_t.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let Ot=0;Ot<ct.length;Ot++){let zt=ct[Ot].camera;if(zt){let Qt=p[zt];Qt||(Qt=new Er,p[zt]=Qt);let qt=u.getCameraImage(zt);Qt.sourceTexture=qt}}}}for(let ct=0;ct<M.length;ct++){let vt=T[ct],_t=M[ct];vt!==null&&_t!==void 0&&_t.update(vt,$,l||o)}ft&&ft(K,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}let Lt=new sd;Lt.setAnimationLoop(St),this.setAnimationLoop=function(K){ft=K},this.dispose=function(){}}},Db=new xe,ud=new Ht;ud.set(-1,0,0,0,1,0,0,0,1);function Fb(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,eu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,S,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),f(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p),S=v.envMap,b=v.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(Db.makeRotationFromEuler(b)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ud),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Nb(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,M){let T=M.program;n.uniformBlockBinding(b,T)}function l(b,M){let T=s[b.id];T===void 0&&(m(b),T=f(b),s[b.id]=T,b.addEventListener("dispose",v));let R=M.program;n.updateUBOMapping(b,R);let x=t.render.frame;r[b.id]!==x&&(h(b),r[b.id]=x)}function f(b){let M=u();b.__bindingPointIndex=M;let T=i.createBuffer(),R=b.__size,x=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,R,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,T),T}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return Vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){let M=s[b.id],T=b.uniforms,R=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let x=0,y=T.length;x<y;x++){let E=T[x];if(Array.isArray(E))for(let L=0,A=E.length;L<A;L++)d(E[L],x,L,R);else d(E,x,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(b,M,T,R){if(_(b,M,T,R)===!0){let x=b.__offset,y=b.value;if(Array.isArray(y)){let E=0;for(let L=0;L<y.length;L++){let A=y[L],C=p(A);g(A,b.__data,E),typeof A!="number"&&typeof A!="boolean"&&!A.isMatrix3&&!ArrayBuffer.isView(A)&&(E+=C.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(y,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,b.__data)}}function g(b,M,T){typeof b=="number"||typeof b=="boolean"?M[0]=b:b.isMatrix3?(M[0]=b.elements[0],M[1]=b.elements[1],M[2]=b.elements[2],M[3]=0,M[4]=b.elements[3],M[5]=b.elements[4],M[6]=b.elements[5],M[7]=0,M[8]=b.elements[6],M[9]=b.elements[7],M[10]=b.elements[8],M[11]=0):ArrayBuffer.isView(b)?M.set(new b.constructor(b.buffer,b.byteOffset,M.length)):b.toArray(M,T)}function _(b,M,T,R){let x=b.value,y=M+"_"+T;if(R[y]===void 0)return typeof x=="number"||typeof x=="boolean"?R[y]=x:ArrayBuffer.isView(x)?R[y]=x.slice():R[y]=x.clone(),!0;{let E=R[y];if(typeof x=="number"||typeof x=="boolean"){if(E!==x)return R[y]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(E.equals(x)===!1)return E.copy(x),!0}}return!1}function m(b){let M=b.uniforms,T=0,R=16;for(let y=0,E=M.length;y<E;y++){let L=Array.isArray(M[y])?M[y]:[M[y]];for(let A=0,C=L.length;A<C;A++){let I=L[A],F=Array.isArray(I.value)?I.value:[I.value];for(let U=0,O=F.length;U<O;U++){let X=F[U],G=p(X),H=T%R,J=H%G.boundary,pt=H+J;T+=J,pt!==0&&R-pt<G.storage&&(T+=R-pt),I.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=T,T+=G.storage}}}let x=T%R;return x>0&&(T+=R-x),b.__size=T,b.__cache={},this}function p(b){let M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(M.boundary=16,M.storage=b.byteLength):kt("WebGLRenderer: Unsupported uniform value type.",b),M}function v(b){let M=b.target;M.removeEventListener("dispose",v);let T=o.indexOf(M.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function S(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:S}}var Ub=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Gn=null;function Ob(){return Gn===null&&(Gn=new Mr(Ub,16,16,Pi,Rn),Gn.name="DFG_LUT",Gn.minFilter=Ge,Gn.magFilter=Ge,Gn.wrapS=Nn,Gn.wrapT=Nn,Gn.generateMipmaps=!1,Gn.needsUpdate=!0),Gn}var El=class{constructor(t={}){let{canvas:e=wf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:d=mn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let _=d,m=new Set([Ha,Ga,za]),p=new Set([mn,An,Os,Bs,Ba,ka]),v=new Uint32Array(4),S=new Int32Array(4),b=new z,M=null,T=null,R=[],x=[],y=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=En,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,L=!1,A=null,C=null,I=null,F=null;this._outputColorSpace=$e;let U=0,O=0,X=null,G=-1,H=null,J=new we,pt=new we,rt=null,ft=new ht(0),St=0,Lt=e.width,K=e.height,$=1,ct=null,vt=null,_t=new we(0,0,Lt,K),Dt=new we(0,0,Lt,K),Kt=!1,Ot=new wr,zt=!1,Qt=!1,qt=new xe,pe=new z,Te=new we,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ae=!1;function be(){return X===null?$:1}let k=n;function Ie(P,V){return e.getContext(P,V)}let jt,N,w,W,Z,it,gt,bt,st,ot,yt,Ft,Q,j,et,dt,ut,B,lt,nt,mt,Mt,at;try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",le,!1),e.addEventListener("webglcontextrestored",ce,!1),e.addEventListener("webglcontextcreationerror",rn,!1),k===null){let V="webgl2";if(k=Ie(V,P),k===null)throw Ie(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Nt()}catch(P){throw e.removeEventListener("webglcontextlost",le,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",rn,!1),Vt("WebGLRenderer: "+P.message),P}function Nt(){jt=new Wx(k),jt.init(),mt=new Pb(k,jt),N=new Fx(k,jt,t,mt),w=new Rb(k,jt),N.reversedDepthBuffer&&h&&w.buffers.depth.setReversed(!0),C=k.createFramebuffer(),I=k.createFramebuffer(),F=k.createFramebuffer(),W=new Yx(k),Z=new pb,it=new Cb(k,jt,w,Z,N,mt,W),gt=new Hx(E),bt=new Zm(k),Mt=new Lx(k,bt),st=new Xx(k,bt,W,Mt),ot=new Zx(k,st,bt,Mt,W),B=new $x(k,N,it),et=new Nx(Z),yt=new db(E,gt,jt,N,Mt,et),Ft=new Fb(E,Z),Q=new gb,j=new Mb(jt),ut=new Ix(E,gt,w,ot,g,c),dt=new Ab(E,ot,N),at=new Nb(k,W,N,w),lt=new Dx(k,jt,W),nt=new qx(k,jt,W),W.programs=yt.programs,E.capabilities=N,E.extensions=jt,E.properties=Z,E.renderLists=Q,E.shadowMap=dt,E.state=w,E.info=W}_!==mn&&(y=new Kx(_,e.width,e.height,a,s,r));let Ct=new wu(E,k);this.xr=Ct,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let P=jt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=jt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(P){P!==void 0&&($=P,this.setSize(Lt,K,!1))},this.getSize=function(P){return P.set(Lt,K)},this.setSize=function(P,V,tt=!0){if(Ct.isPresenting){kt("WebGLRenderer: Can't change size while VR device is presenting.");return}Lt=P,K=V,e.width=Math.floor(P*$),e.height=Math.floor(V*$),tt===!0&&(e.style.width=P+"px",e.style.height=V+"px"),y!==null&&y.setSize(e.width,e.height),this.setViewport(0,0,P,V)},this.getDrawingBufferSize=function(P){return P.set(Lt*$,K*$).floor()},this.setDrawingBufferSize=function(P,V,tt){Lt=P,K=V,$=tt,e.width=Math.floor(P*tt),e.height=Math.floor(V*tt),this.setViewport(0,0,P,V)},this.setEffects=function(P){if(_===mn){Vt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let V=0;V<P.length;V++)if(P[V].isOutputPass===!0){kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(J)},this.getViewport=function(P){return P.copy(_t)},this.setViewport=function(P,V,tt,q){P.isVector4?_t.set(P.x,P.y,P.z,P.w):_t.set(P,V,tt,q),w.viewport(J.copy(_t).multiplyScalar($).round())},this.getScissor=function(P){return P.copy(Dt)},this.setScissor=function(P,V,tt,q){P.isVector4?Dt.set(P.x,P.y,P.z,P.w):Dt.set(P,V,tt,q),w.scissor(pt.copy(Dt).multiplyScalar($).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(P){w.setScissorTest(Kt=P)},this.setOpaqueSort=function(P){ct=P},this.setTransparentSort=function(P){vt=P},this.getClearColor=function(P){return P.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor(...arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha(...arguments)},this.clear=function(P=!0,V=!0,tt=!0){let q=0;if(P){let Y=!1;if(X!==null){let Et=X.texture.format;Y=m.has(Et)}if(Y){let Et=X.texture.type,Rt=p.has(Et),Tt=ut.getClearColor(),Pt=ut.getClearAlpha(),Ut=Tt.r,Zt=Tt.g,ee=Tt.b;Rt?(v[0]=Ut,v[1]=Zt,v[2]=ee,v[3]=Pt,k.clearBufferuiv(k.COLOR,0,v)):(S[0]=Ut,S[1]=Zt,S[2]=ee,S[3]=Pt,k.clearBufferiv(k.COLOR,0,S))}else q|=k.COLOR_BUFFER_BIT}V&&(q|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),tt&&(q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&k.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),A=P},this.dispose=function(){e.removeEventListener("webglcontextlost",le,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",rn,!1),ut.dispose(),Q.dispose(),j.dispose(),Z.dispose(),gt.dispose(),ot.dispose(),Mt.dispose(),at.dispose(),yt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",rh),Ct.removeEventListener("sessionend",oh),ki.stop()};function le(P){P.preventDefault(),dr("WebGLRenderer: Context Lost."),L=!0}function ce(){dr("WebGLRenderer: Context Restored."),L=!1;let P=W.autoReset,V=dt.enabled,tt=dt.autoUpdate,q=dt.needsUpdate,Y=dt.type;Nt(),W.autoReset=P,dt.enabled=V,dt.autoUpdate=tt,dt.needsUpdate=q,dt.type=Y}function rn(P){Vt("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ze(P){let V=P.target;V.removeEventListener("dispose",ze),ui(V)}function ui(P){Hp(P),Z.remove(P)}function Hp(P){let V=Z.get(P).programs;V!==void 0&&(V.forEach(function(tt){yt.releaseProgram(tt)}),P.isShaderMaterial&&yt.releaseShaderCache(P))}this.renderBufferDirect=function(P,V,tt,q,Y,Et){V===null&&(V=Pe);let Rt=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Tt=qp(P,V,tt,q,Y);w.setMaterial(q,Rt);let Pt=tt.index,Ut=1;if(q.wireframe===!0){if(Pt=st.getWireframeAttribute(tt),Pt===void 0)return;Ut=2}let Zt=tt.drawRange,ee=tt.attributes.position,It=Zt.start*Ut,ue=(Zt.start+Zt.count)*Ut;Et!==null&&(It=Math.max(It,Et.start*Ut),ue=Math.min(ue,(Et.start+Et.count)*Ut)),Pt!==null?(It=Math.max(It,0),ue=Math.min(ue,Pt.count)):ee!=null&&(It=Math.max(It,0),ue=Math.min(ue,ee.count));let Re=ue-It;if(Re<0||Re===1/0)return;Mt.setup(Y,q,Tt,tt,Pt);let ve,me=lt;if(Pt!==null&&(ve=bt.get(Pt),me=nt,me.setIndex(ve)),Y.isMesh)q.wireframe===!0?(w.setLineWidth(q.wireframeLinewidth*be()),me.setMode(k.LINES)):me.setMode(k.TRIANGLES);else if(Y.isLine){let Xe=q.linewidth;Xe===void 0&&(Xe=1),w.setLineWidth(Xe*be()),Y.isLineSegments?me.setMode(k.LINES):Y.isLineLoop?me.setMode(k.LINE_LOOP):me.setMode(k.LINE_STRIP)}else Y.isPoints?me.setMode(k.POINTS):Y.isSprite&&me.setMode(k.TRIANGLES);if(Y.isBatchedMesh)if(jt.get("WEBGL_multi_draw"))me.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Xe=Y._multiDrawStarts,At=Y._multiDrawCounts,Qe=Y._multiDrawCount,se=Pt?bt.get(Pt).bytesPerElement:1,gn=Z.get(q).currentProgram.getUniforms();for(let In=0;In<Qe;In++)gn.setValue(k,"_gl_DrawID",In),me.render(Xe[In]/se,At[In])}else if(Y.isInstancedMesh)me.renderInstances(It,Re,Y.count);else if(tt.isInstancedBufferGeometry){let Xe=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,At=Math.min(tt.instanceCount,Xe);me.renderInstances(It,Re,At)}else me.render(It,Re)};function sh(P,V,tt,q){A!==null&&P.isNodeMaterial&&A.setObject(q,P),zt===!0&&et.setState(P,tt,!1),P.transparent===!0&&P.side===He&&P.forceSinglePass===!1?(P.side=nn,P.needsUpdate=!0,bo(P,V,q),P.side=Ei,P.needsUpdate=!0,bo(P,V,q),P.side=He):bo(P,V,q)}this.compile=function(P,V,tt=null){tt===null&&(tt=P),A!==null&&A.renderStart(P,V,tt),T=j.get(tt),T.init(V),x.push(T),tt.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),P!==tt&&P.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),T.setupLights(),A!==null&&A.updateLights(T.state.lightsArray),Qt=this.localClippingEnabled,zt=et.init(this.clippingPlanes,Qt),zt===!0&&et.setGlobalState(this.clippingPlanes,V),A!==null&&dt.render(T.state.shadowsArray,tt,V);let q=new Set;return P.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let Et=Y.material;if(Et)if(Array.isArray(Et))for(let Rt=0;Rt<Et.length;Rt++){let Tt=Et[Rt];sh(Tt,tt,V,Y),q.add(Tt)}else sh(Et,tt,V,Y),q.add(Et)}),T=x.pop(),A!==null&&A.renderEnd(),q},this.compileAsync=function(P,V,tt=null){let q=this.compile(P,V,tt);return new Promise(Y=>{function Et(){if(q.forEach(function(Rt){let Pt=Z.get(Rt).currentProgram;(Pt===void 0||Pt.isReady())&&q.delete(Rt)}),q.size===0){Y(P);return}setTimeout(Et,10)}jt.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Kl=null;function Wp(P){Kl&&Kl(P)}function rh(){ki.stop()}function oh(){ki.start()}let ki=new sd;ki.setAnimationLoop(Wp),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(P){Kl=P,Ct.setAnimationLoop(P),P===null?ki.stop():ki.start()},Ct.addEventListener("sessionstart",rh),Ct.addEventListener("sessionend",oh),this.render=function(P,V){if(V!==void 0&&V.isCamera!==!0){Vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;A!==null&&A.renderStart(P,V);let tt=Ct.enabled===!0&&Ct.isPresenting===!0,q=y!==null&&(X===null||tt)&&y.begin(E,X);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(V),V=Ct.getCamera()),P.isScene===!0&&P.onBeforeRender(E,P,V,X),T=j.get(P,x.length),T.init(V),T.state.textureUnits=it.getTextureUnits(),x.push(T),qt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Ot.setFromProjectionMatrix(qt,wn,V.reversedDepth),Qt=this.localClippingEnabled,zt=et.init(this.clippingPlanes,Qt),M=Q.get(P,R.length),M.init(),R.push(M),Ct.enabled===!0&&Ct.isPresenting===!0){let Rt=E.xr.getDepthSensingMesh();Rt!==null&&Ql(Rt,V,-1/0,E.sortObjects)}Ql(P,V,0,E.sortObjects),M.finish(),A!==null&&A.updateLights(T.state.lightsArray),E.sortObjects===!0&&M.sort(ct,vt),ae=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,ae&&ut.addToRenderList(M,P),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),zt===!0&&et.beginShadows();let Y=T.state.shadowsArray;if(dt.render(Y,P,V),zt===!0&&et.endShadows(),(q&&y.hasRenderPass())===!1){let Rt=M.opaque,Tt=M.transmissive;if(T.setupLights(),V.isArrayCamera){let Pt=V.cameras;if(Tt.length>0)for(let Ut=0,Zt=Pt.length;Ut<Zt;Ut++){let ee=Pt[Ut];lh(Rt,Tt,P,ee)}ae&&ut.render(P);for(let Ut=0,Zt=Pt.length;Ut<Zt;Ut++){let ee=Pt[Ut];ah(M,P,ee,ee.viewport)}}else Tt.length>0&&lh(Rt,Tt,P,V),ae&&ut.render(P),ah(M,P,V)}X!==null&&O===0&&(it.updateMultisampleRenderTarget(X),it.updateRenderTargetMipmap(X)),q&&y.end(E),P.isScene===!0&&P.onAfterRender(E,P,V),Mt.resetDefaultState(),G=-1,H=null,x.pop(),x.length>0?(T=x[x.length-1],it.setTextureUnits(T.state.textureUnits),zt===!0&&et.setGlobalState(E.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?M=R[R.length-1]:M=null,A!==null&&A.renderEnd()};function Ql(P,V,tt,q){if(P.visible===!1)return;if(P.layers.test(V.layers)){if(P.isGroup)tt=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(V);else if(P.isLightProbeGrid)T.pushLightProbeGrid(P);else if(P.isLight)T.pushLight(P),P.castShadow&&T.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||P.intersectsFrustum(Ot)){q&&Te.setFromMatrixPosition(P.matrixWorld).applyMatrix4(qt);let Rt=ot.update(P),Tt=P.material;Tt.visible&&M.push(P,Rt,Tt,tt,Te.z,null,V)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||P.intersectsFrustum(Ot))){let Rt=ot.update(P),Tt=P.material;if(q&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Te.copy(P.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Te.copy(Rt.boundingSphere.center)),Te.applyMatrix4(P.matrixWorld).applyMatrix4(qt)),Array.isArray(Tt)){let Pt=Rt.groups;for(let Ut=0,Zt=Pt.length;Ut<Zt;Ut++){let ee=Pt[Ut],It=Tt[ee.materialIndex];It&&It.visible&&M.push(P,Rt,It,tt,Te.z,ee,V)}}else Tt.visible&&M.push(P,Rt,Tt,tt,Te.z,null,V)}}let Et=P.children;for(let Rt=0,Tt=Et.length;Rt<Tt;Rt++)Ql(Et[Rt],V,tt,q)}function ah(P,V,tt,q){let{opaque:Y,transmissive:Et,transparent:Rt}=P;T.setupLightsView(tt),zt===!0&&et.setGlobalState(E.clippingPlanes,tt),q&&w.viewport(J.copy(q)),Y.length>0&&_o(Y,V,tt),Et.length>0&&_o(Et,V,tt),Rt.length>0&&_o(Rt,V,tt),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function lh(P,V,tt,q){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[q.id]===void 0){let It=jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[q.id]=new an(1,1,{generateMipmaps:!0,type:It?Rn:mn,minFilter:Ri,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ne.workingColorSpace})}let Et=T.state.transmissionRenderTarget[q.id],Rt=q.viewport||J;Et.setSize(Rt.z*E.transmissionResolutionScale,Rt.w*E.transmissionResolutionScale);let Tt=E.getRenderTarget(),Pt=E.getActiveCubeFace(),Ut=E.getActiveMipmapLevel();E.setRenderTarget(Et),E.getClearColor(ft),St=E.getClearAlpha(),St<1&&E.setClearColor(16777215,.5),E.clear(),ae&&ut.render(tt);let Zt=E.toneMapping;E.toneMapping=En;let ee=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),T.setupLightsView(q),zt===!0&&et.setGlobalState(E.clippingPlanes,q),_o(P,tt,q),it.updateMultisampleRenderTarget(Et),it.updateRenderTargetMipmap(Et),jt.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let ue=0,Re=V.length;ue<Re;ue++){let ve=V[ue],{object:me,geometry:Xe,material:At,group:Qe}=ve;if(At.side===He&&me.layers.test(q.layers)){let se=At.side;At.side=nn,At.needsUpdate=!0,ch(me,tt,q,Xe,At,Qe),At.side=se,At.needsUpdate=!0,It=!0}}It===!0&&(it.updateMultisampleRenderTarget(Et),it.updateRenderTargetMipmap(Et))}E.setRenderTarget(Tt,Pt,Ut),E.setClearColor(ft,St),ee!==void 0&&(q.viewport=ee),E.toneMapping=Zt}function _o(P,V,tt){let q=V.isScene===!0?V.overrideMaterial:null;for(let Y=0,Et=P.length;Y<Et;Y++){let Rt=P[Y],{object:Tt,geometry:Pt,group:Ut}=Rt,Zt=Rt.material;Zt.allowOverride===!0&&q!==null&&(Zt=q),Tt.layers.test(tt.layers)&&ch(Tt,V,tt,Pt,Zt,Ut)}}function ch(P,V,tt,q,Y,Et){A!==null&&Y.isNodeMaterial&&A.setObject(P,Y),P.onBeforeRender(E,V,tt,q,Y,Et),P.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Y.onBeforeRender(E,V,tt,q,P,Et),Y.transparent===!0&&Y.side===He&&Y.forceSinglePass===!1?(Y.side=nn,Y.needsUpdate=!0,E.renderBufferDirect(tt,V,q,Y,P,Et),Y.side=Ei,Y.needsUpdate=!0,E.renderBufferDirect(tt,V,q,Y,P,Et),Y.side=He):E.renderBufferDirect(tt,V,q,Y,P,Et),P.onAfterRender(E,V,tt,q,Y,Et)}function bo(P,V,tt){V.isScene!==!0&&(V=Pe);let q=Z.get(P),Y=T.state.lights,Et=T.state.shadowsArray,Rt=Y.state.version,Tt=yt.getParameters(P,Y.state,Et,V,tt,T.state.lightProbeGridArray),Pt=yt.getProgramCacheKey(Tt),Ut=q.programs;q.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?V.environment:null,q.fog=V.fog;let Zt=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;q.envMap=gt.get(P.envMap||q.environment,Zt),q.envMapRotation=q.environment!==null&&P.envMap===null?V.environmentRotation:P.envMapRotation,Ut===void 0&&(P.addEventListener("dispose",ze),Ut=new Map,q.programs=Ut);let ee=Ut.get(Pt);if(ee!==void 0){if(q.currentProgram===ee&&q.lightsStateVersion===Rt)return hh(P,Tt),ee}else Tt.uniforms=yt.getUniforms(P),A!==null&&P.isNodeMaterial&&A.build(P,tt,Tt),P.onBeforeCompile(Tt,E),ee=yt.acquireProgram(Tt,Pt),Ut.set(Pt,ee),q.uniforms=Tt.uniforms;let It=q.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(It.clippingPlanes=et.uniform),hh(P,Tt),q.needsLights=$p(P),q.lightsStateVersion=Rt,q.needsLights&&(It.ambientLightColor.value=Y.state.ambient,It.lightProbe.value=Y.state.probe,It.sunLights.value=Y.state.sun,It.sunLightShadows.value=Y.state.sunShadow,It.directionalLights.value=Y.state.directional,It.directionalLightShadows.value=Y.state.directionalShadow,It.spotLights.value=Y.state.spot,It.spotLightShadows.value=Y.state.spotShadow,It.rectAreaLights.value=Y.state.rectArea,It.ltc_1.value=Y.state.rectAreaLTC1,It.ltc_2.value=Y.state.rectAreaLTC2,It.pointLights.value=Y.state.point,It.pointLightShadows.value=Y.state.pointShadow,It.hemisphereLights.value=Y.state.hemi,It.sunShadowMatrix.value=Y.state.sunShadowMatrix,It.sunShadowCascade.value=Y.state.sunShadowCascade,It.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,It.spotLightMatrix.value=Y.state.spotLightMatrix,It.spotLightMap.value=Y.state.spotLightMap,It.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.lightProbeGrid=T.state.lightProbeGridArray.length>0,q.currentProgram=ee,q.uniformsList=null,ee}function uh(P){if(P.uniformsList===null){let V=P.currentProgram.getUniforms();P.uniformsList=zs.seqWithValue(V.seq,P.uniforms)}return P.uniformsList}function hh(P,V){let tt=Z.get(P);tt.outputColorSpace=V.outputColorSpace,tt.batching=V.batching,tt.batchingColor=V.batchingColor,tt.instancing=V.instancing,tt.instancingColor=V.instancingColor,tt.instancingMorph=V.instancingMorph,tt.skinning=V.skinning,tt.morphTargets=V.morphTargets,tt.morphNormals=V.morphNormals,tt.morphColors=V.morphColors,tt.morphTargetsCount=V.morphTargetsCount,tt.numClippingPlanes=V.numClippingPlanes,tt.numIntersection=V.numClipIntersection,tt.vertexAlphas=V.vertexAlphas,tt.vertexTangents=V.vertexTangents,tt.toneMapping=V.toneMapping}function Xp(P,V){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;b.setFromMatrixPosition(V.matrixWorld);for(let tt=0,q=P.length;tt<q;tt++){let Y=P[tt];if(Y.texture!==null&&Y.boundingBox.containsPoint(b))return Y}return null}function qp(P,V,tt,q,Y){V.isScene!==!0&&(V=Pe),it.resetTextureUnits();let Et=V.fog,Rt=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?V.environment:null,Tt=X===null?E.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:ne.workingColorSpace,Pt=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Ut=gt.get(q.envMap||Rt,Pt),Zt=q.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,ee=!!tt.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),It=!!tt.morphAttributes.position,ue=!!tt.morphAttributes.normal,Re=!!tt.morphAttributes.color,ve=En;q.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(ve=E.toneMapping);let me=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Xe=me!==void 0?me.length:0,At=Z.get(q),Qe=T.state.lights;if(zt===!0&&(Qt===!0||P!==H)){let ge=P===H&&q.id===G;et.setState(q,P,ge)}let se=!1;q.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Qe.state.version||At.outputColorSpace!==Tt||Y.isBatchedMesh&&At.batching===!1||!Y.isBatchedMesh&&At.batching===!0||Y.isBatchedMesh&&At.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&At.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&At.instancing===!1||!Y.isInstancedMesh&&At.instancing===!0||Y.isSkinnedMesh&&At.skinning===!1||!Y.isSkinnedMesh&&At.skinning===!0||Y.isInstancedMesh&&At.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&At.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&At.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&At.instancingMorph===!1&&Y.morphTexture!==null||At.envMap!==Ut||q.fog===!0&&At.fog!==Et||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==et.numPlanes||At.numIntersection!==et.numIntersection)||At.vertexAlphas!==Zt||At.vertexTangents!==ee||At.morphTargets!==It||At.morphNormals!==ue||At.morphColors!==Re||At.toneMapping!==ve||At.morphTargetsCount!==Xe||!!At.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(se=!0):(se=!0,At.__version=q.version);let gn=At.currentProgram;se===!0&&(gn=bo(q,V,Y),A&&q.isNodeMaterial&&A.onUpdateProgram(q,gn,At));let In=!1,hi=!1,os=!1,fe=gn.getUniforms(),Ee=At.uniforms;if(w.useProgram(gn.program)&&(In=!0,hi=!0,os=!0),q.id!==G&&(G=q.id,hi=!0),At.needsLights){let ge=Xp(T.state.lightProbeGridArray,Y);At.lightProbeGrid!==ge&&(At.lightProbeGrid=ge,hi=!0)}if(In||H!==P){w.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),fe.setValue(k,"projectionMatrix",P.projectionMatrix),fe.setValue(k,"viewMatrix",P.matrixWorldInverse);let di=fe.map.cameraPosition;di!==void 0&&di.setValue(k,pe.setFromMatrixPosition(P.matrixWorld)),N.logarithmicDepthBuffer&&fe.setValue(k,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&fe.setValue(k,"isOrthographic",P.isOrthographicCamera===!0),H!==P&&(H=P,hi=!0,os=!0)}if(At.needsLights&&(Qe.state.sunShadowMap.length>0&&fe.setValue(k,"sunShadowMap",Qe.state.sunShadowMap,it),Qe.state.directionalShadowMap.length>0&&fe.setValue(k,"directionalShadowMap",Qe.state.directionalShadowMap,it),Qe.state.spotShadowMap.length>0&&fe.setValue(k,"spotShadowMap",Qe.state.spotShadowMap,it),Qe.state.pointShadowMap.length>0&&fe.setValue(k,"pointShadowMap",Qe.state.pointShadowMap,it)),Y.isSkinnedMesh){fe.setOptional(k,Y,"bindMatrix"),fe.setOptional(k,Y,"bindMatrixInverse");let ge=Y.skeleton;ge&&(ge.boneTexture===null&&ge.computeBoneTexture(),fe.setValue(k,"boneTexture",ge.boneTexture,it))}Y.isBatchedMesh&&(fe.setOptional(k,Y,"batchingTexture"),fe.setValue(k,"batchingTexture",Y._matricesTexture,it),fe.setOptional(k,Y,"batchingIdTexture"),fe.setValue(k,"batchingIdTexture",Y._indirectTexture,it),fe.setOptional(k,Y,"batchingColorTexture"),Y._colorsTexture!==null&&fe.setValue(k,"batchingColorTexture",Y._colorsTexture,it));let fi=tt.morphAttributes;if((fi.position!==void 0||fi.normal!==void 0||fi.color!==void 0)&&B.update(Y,tt,gn),(hi||At.receiveShadow!==Y.receiveShadow)&&(At.receiveShadow=Y.receiveShadow,fe.setValue(k,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&V.environment!==null&&(Ee.envMapIntensity.value=V.environmentIntensity),Ee.dfgLUT!==void 0&&(Ee.dfgLUT.value=Ob()),hi){if(fe.setValue(k,"toneMappingExposure",E.toneMappingExposure),At.needsLights&&Yp(Ee,os),Et&&q.fog===!0&&Ft.refreshFogUniforms(Ee,Et),Ft.refreshMaterialUniforms(Ee,q,$,K,T.state.transmissionRenderTarget[P.id]),At.needsLights&&At.lightProbeGrid){let ge=At.lightProbeGrid;Ee.probesSH.value=ge.texture,Ee.probesMin.value.copy(ge.boundingBox.min),Ee.probesMax.value.copy(ge.boundingBox.max),Ee.probesResolution.value.copy(ge.resolution)}zs.upload(k,uh(At),Ee,it)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(zs.upload(k,uh(At),Ee,it),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&fe.setValue(k,"center",Y.center),fe.setValue(k,"modelViewMatrix",Y.modelViewMatrix),fe.setValue(k,"normalMatrix",Y.normalMatrix),fe.setValue(k,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){let ge=q.uniformsGroups;for(let di=0,as=ge.length;di<as;di++){let dh=ge[di];at.update(dh,gn),at.bind(dh,gn)}}return gn}function Yp(P,V){P.ambientLightColor.needsUpdate=V,P.lightProbe.needsUpdate=V,P.sunLights.needsUpdate=V,P.sunLightShadows.needsUpdate=V,P.directionalLights.needsUpdate=V,P.directionalLightShadows.needsUpdate=V,P.pointLights.needsUpdate=V,P.pointLightShadows.needsUpdate=V,P.spotLights.needsUpdate=V,P.spotLightShadows.needsUpdate=V,P.rectAreaLights.needsUpdate=V,P.hemisphereLights.needsUpdate=V}function $p(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(P,V,tt){let q=Z.get(P);q.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Z.get(P.texture).__webglTexture=V,Z.get(P.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:tt,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,V){let tt=Z.get(P);tt.__webglFramebuffer=V,tt.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(P,V=0,tt=0){X=P,U=V,O=tt;let q=null,Y=!1,Et=!1;if(P){let Tt=Z.get(P);if(Tt.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(k.FRAMEBUFFER,Tt.__webglFramebuffer),J.copy(P.viewport),pt.copy(P.scissor),rt=P.scissorTest,w.viewport(J),w.scissor(pt),w.setScissorTest(rt),G=-1;return}else if(Tt.__webglFramebuffer===void 0)it.setupRenderTarget(P);else if(Tt.__hasExternalTextures)it.rebindTextures(P,Z.get(P.texture).__webglTexture,Z.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Zt=P.depthTexture;if(Tt.__boundDepthTexture!==Zt){if(Zt!==null&&Z.has(Zt)&&(P.width!==Zt.image.width||P.height!==Zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(P)}}let Pt=P.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(Et=!0);let Ut=Z.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ut[V])?q=Ut[V][tt]:q=Ut[V],Y=!0):P.samples>0&&it.useMultisampledRTT(P)===!1?q=Z.get(P).__webglMultisampledFramebuffer:Array.isArray(Ut)?q=Ut[tt]:q=Ut,J.copy(P.viewport),pt.copy(P.scissor),rt=P.scissorTest}else J.copy(_t).multiplyScalar($).floor(),pt.copy(Dt).multiplyScalar($).floor(),rt=Kt;if(tt!==0&&(q=C),w.bindFramebuffer(k.FRAMEBUFFER,q)&&w.drawBuffers(P,q),w.viewport(J),w.scissor(pt),w.setScissorTest(rt),Y){let Tt=Z.get(P.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+V,Tt.__webglTexture,tt)}else if(Et){let Tt=V;for(let Pt=0;Pt<P.textures.length;Pt++){let Ut=Z.get(P.textures[Pt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Pt,Ut.__webglTexture,tt,Tt)}}else if(P!==null&&tt!==0){let Tt=Z.get(P.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Tt.__webglTexture,tt)}G=-1};function fh(P){let V=Z.get(P);return(V.__readFormat!==P.format||V.__readType!==P.type)&&(V.__readFormat=P.format,V.__readType=P.type,V.__formatReadable=N.textureFormatReadable(P.format),V.__typeReadable=N.textureTypeReadable(P.type)),V}this.readRenderTargetPixels=function(P,V,tt,q,Y,Et,Rt,Tt=0){if(!(P&&P.isWebGLRenderTarget)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Z.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Rt!==void 0&&(Pt=Pt[Rt]),Pt){w.bindFramebuffer(k.FRAMEBUFFER,Pt);try{let Ut=P.textures[Tt],Zt=Ut.format,ee=Ut.type;P.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Tt);let It=fh(Ut);if(It.__formatReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(It.__typeReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=P.width-q&&tt>=0&&tt<=P.height-Y&&k.readPixels(V,tt,q,Y,mt.convert(Zt),mt.convert(ee),Et)}finally{let Ut=X!==null?Z.get(X).__webglFramebuffer:null;w.bindFramebuffer(k.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(P,V,tt,q,Y,Et,Rt,Tt=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Z.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Rt!==void 0&&(Pt=Pt[Rt]),Pt)if(V>=0&&V<=P.width-q&&tt>=0&&tt<=P.height-Y){w.bindFramebuffer(k.FRAMEBUFFER,Pt);let Ut=P.textures[Tt],Zt=Ut.format,ee=Ut.type;P.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Tt);let It=fh(Ut);if(It.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(It.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ue=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ue),k.bufferData(k.PIXEL_PACK_BUFFER,Et.byteLength,k.STREAM_READ),k.readPixels(V,tt,q,Y,mt.convert(Zt),mt.convert(ee),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let Re=X!==null?Z.get(X).__webglFramebuffer:null;w.bindFramebuffer(k.FRAMEBUFFER,Re);let ve=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Ef(k,ve,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ue),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Et),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(ue),k.deleteSync(ve),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,V=null,tt=0){let q=Math.pow(2,-tt),Y=Math.floor(P.image.width*q),Et=Math.floor(P.image.height*q),Rt=V!==null?V.x:0,Tt=V!==null?V.y:0;it.setTexture2D(P,0),k.copyTexSubImage2D(k.TEXTURE_2D,tt,0,0,Rt,Tt,Y,Et),w.unbindTexture()},this.copyTextureToTexture=function(P,V,tt=null,q=null,Y=0,Et=0){let Rt,Tt,Pt,Ut,Zt,ee,It,ue,Re,ve=P.isCompressedTexture?P.mipmaps[Et]:P.image;if(tt!==null)Rt=tt.max.x-tt.min.x,Tt=tt.max.y-tt.min.y,Pt=tt.isBox3?tt.max.z-tt.min.z:1,Ut=tt.min.x,Zt=tt.min.y,ee=tt.isBox3?tt.min.z:0;else{let Ee=Math.pow(2,-Y);Rt=Math.floor(ve.width*Ee),Tt=Math.floor(ve.height*Ee),P.isDataArrayTexture?Pt=ve.depth:P.isData3DTexture?Pt=Math.floor(ve.depth*Ee):Pt=1,Ut=0,Zt=0,ee=0}q!==null?(It=q.x,ue=q.y,Re=q.z):(It=0,ue=0,Re=0);let me=mt.convert(V.format),Xe=mt.convert(V.type),At;V.isData3DTexture?(it.setTexture3D(V,0),At=k.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(it.setTexture2DArray(V,0),At=k.TEXTURE_2D_ARRAY):(it.setTexture2D(V,0),At=k.TEXTURE_2D),w.activeTexture(k.TEXTURE0),w.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,V.flipY),w.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),w.pixelStorei(k.UNPACK_ALIGNMENT,V.unpackAlignment);let Qe=w.getParameter(k.UNPACK_ROW_LENGTH),se=w.getParameter(k.UNPACK_IMAGE_HEIGHT),gn=w.getParameter(k.UNPACK_SKIP_PIXELS),In=w.getParameter(k.UNPACK_SKIP_ROWS),hi=w.getParameter(k.UNPACK_SKIP_IMAGES);w.pixelStorei(k.UNPACK_ROW_LENGTH,ve.width),w.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ve.height),w.pixelStorei(k.UNPACK_SKIP_PIXELS,Ut),w.pixelStorei(k.UNPACK_SKIP_ROWS,Zt),w.pixelStorei(k.UNPACK_SKIP_IMAGES,ee);let os=P.isDataArrayTexture||P.isData3DTexture,fe=V.isDataArrayTexture||V.isData3DTexture;if(P.isDepthTexture){let Ee=Z.get(P),fi=Z.get(V),ge=Z.get(Ee.__renderTarget),di=Z.get(fi.__renderTarget);w.bindFramebuffer(k.READ_FRAMEBUFFER,ge.__webglFramebuffer),w.bindFramebuffer(k.DRAW_FRAMEBUFFER,di.__webglFramebuffer);for(let as=0;as<Pt;as++)os&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Z.get(P).__webglTexture,Y,ee+as),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Z.get(V).__webglTexture,Et,Re+as)),k.blitFramebuffer(Ut,Zt,Rt,Tt,It,ue,Rt,Tt,k.DEPTH_BUFFER_BIT,k.NEAREST);w.bindFramebuffer(k.READ_FRAMEBUFFER,null),w.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Y!==0||P.isRenderTargetTexture||Z.has(P)){let Ee=Z.get(P),fi=Z.get(V);w.bindFramebuffer(k.READ_FRAMEBUFFER,I),w.bindFramebuffer(k.DRAW_FRAMEBUFFER,F);for(let ge=0;ge<Pt;ge++)os?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ee.__webglTexture,Y,ee+ge):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ee.__webglTexture,Y),fe?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,fi.__webglTexture,Et,Re+ge):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,fi.__webglTexture,Et),Y!==0?k.blitFramebuffer(Ut,Zt,Rt,Tt,It,ue,Rt,Tt,k.COLOR_BUFFER_BIT,k.NEAREST):fe?k.copyTexSubImage3D(At,Et,It,ue,Re+ge,Ut,Zt,Rt,Tt):k.copyTexSubImage2D(At,Et,It,ue,Ut,Zt,Rt,Tt);w.bindFramebuffer(k.READ_FRAMEBUFFER,null),w.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else fe?P.isDataTexture||P.isData3DTexture?k.texSubImage3D(At,Et,It,ue,Re,Rt,Tt,Pt,me,Xe,ve.data):V.isCompressedArrayTexture?k.compressedTexSubImage3D(At,Et,It,ue,Re,Rt,Tt,Pt,me,ve.data):k.texSubImage3D(At,Et,It,ue,Re,Rt,Tt,Pt,me,Xe,ve):P.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Et,It,ue,Rt,Tt,me,Xe,ve.data):P.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Et,It,ue,ve.width,ve.height,me,ve.data):k.texSubImage2D(k.TEXTURE_2D,Et,It,ue,Rt,Tt,me,Xe,ve);w.pixelStorei(k.UNPACK_ROW_LENGTH,Qe),w.pixelStorei(k.UNPACK_IMAGE_HEIGHT,se),w.pixelStorei(k.UNPACK_SKIP_PIXELS,gn),w.pixelStorei(k.UNPACK_SKIP_ROWS,In),w.pixelStorei(k.UNPACK_SKIP_IMAGES,hi),Et===0&&V.generateMipmaps&&k.generateMipmap(At),w.unbindTexture()},this.initRenderTarget=function(P){Z.get(P).__webglFramebuffer===void 0&&it.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?it.setTextureCube(P,0):P.isData3DTexture?it.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?it.setTexture2DArray(P,0):it.setTexture2D(P,0),w.unbindTexture()},this.resetState=function(){U=0,O=0,X=null,w.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};var Bb=500,hd=.12,fd=1.35,kb=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Cl=class{view={target:new z,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;leftDragTurns=!0;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(t,e,n){this.el=t,this.camera=e,this.events=n;let s=(r,o,a)=>{t.addEventListener(r,o,a),this.listeners.push([r,o])};s("pointerdown",r=>this.onDown(r)),s("pointermove",r=>this.onMove(r)),s("pointerup",r=>this.onUp(r)),s("pointercancel",r=>this.onUp(r)),s("wheel",r=>this.onWheel(r),{passive:!1}),s("contextmenu",r=>r.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[t,e]of this.listeners)this.el.removeEventListener(t,e)}get active(){return this.pointers.size>0||this.flight!==null}update(t){let e=!1;if(this.flight){let{from:a,to:c,start:l,duration:f}=this.flight,u=Math.min(1,(t-l)/f),h=kb(u);this.view.target.lerpVectors(a.target,c.target,h),this.view.radius=a.radius+(c.radius-a.radius)*h,this.view.theta=a.theta+(c.theta-a.theta)*h,this.view.phi=a.phi+(c.phi-a.phi)*h,u>=1&&(this.flight=null),e=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=Tu(this.view.phi+this.velocity.phi,hd,fd),this.velocity.theta*=.9,this.velocity.phi*=.9,e=!0);let{target:n,radius:s,theta:r,phi:o}=this.view;return this.camera.position.set(n.x+s*Math.sin(o)*Math.sin(r),n.y+s*Math.cos(o),n.z+s*Math.sin(o)*Math.cos(r)),this.camera.lookAt(n),e}flyTo(t,e=700){let n={...this.view,target:this.view.target.clone()},s=t.theta??n.theta;for(;s-n.theta>Math.PI;)s-=2*Math.PI;for(;s-n.theta<-Math.PI;)s+=2*Math.PI;let r={target:(t.target??n.target).clone(),radius:t.radius??n.radius,theta:s,phi:t.phi??n.phi};this.velocity={theta:0,phi:0},e<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=r,this.flight=null):this.flight={from:n,to:r,start:performance.now(),duration:e},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(t){let e=this.el.getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}onDown(t){if(this.el.setPointerCapture(t.pointerId),this.pointers.size===0&&t.button===0&&this.events.grab?.(...this.local(t))){this.grabbing=!0,this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:t.clientX,y:t.clientY,time:performance.now(),moved:!1};let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,s=t.clientY-e.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,s))},Bb)}else this.down=null,this.pinch=this.pinchState()}onMove(t){let e=this.pointers.get(t.pointerId);if(!e)return;if(this.grabbing){this.events.drag?.(...this.local(t));return}let n=t.clientX-e.x,s=t.clientY-e.y;if(this.swiping){this.events.swipeMove?.(t.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(t.clientX-this.down.x,t.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let r=this.el.getBoundingClientRect();if(this.pointers.size===1&&e.button===0&&!t.shiftKey&&this.events.swipeStart?.(this.down.x-r.left,this.down.y-r.top,t.clientX-this.down.x,t.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(t.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){e.x=t.clientX,e.y=t.clientY;return}let r=e.type==="mouse";if(r&&!this.leftDragTurns&&e.button===0){e.x=t.clientX,e.y=t.clientY;return}if((e.button===1||e.button===2||t.shiftKey)&&(this.leftDragTurns||!r))this.pan(n,s);else{let a=this.el.clientHeight||1,c=-n/a*3.2,l=-s/a*2.4;this.view.theta+=c,this.view.phi=Tu(this.view.phi+l,hd,fd),this.velocity={theta:c,phi:l}}e.x=t.clientX,e.y=t.clientY}else{e.x=t.clientX,e.y=t.clientY;let r=this.pinchState();this.pinch&&r&&(this.zoom(this.pinch.dist/Math.max(1,r.dist)),this.pan(r.mid[0]-this.pinch.mid[0],r.mid[1]-this.pinch.mid[1])),this.pinch=r}this.events.change()}onUp(t){if(this.pointers.has(t.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(t.pointerId),this.events.drop?.();return}if(this.pointers.delete(t.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&t.type==="pointerup"&&performance.now()-this.down.time<400){let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,s=t.clientY-e.top,r=performance.now();r-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(n,s)):(this.lastTap=r,this.events.tap(n,s))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(t){t.preventDefault(),this.flight=null,this.zoom(Math.exp(t.deltaY*(t.deltaMode===1?.05:.0015))),this.events.change()}zoom(t){this.view.radius=Tu(this.view.radius*t,this.minRadius,this.maxRadius)}pan(t,e){let n=this.el.clientHeight||1,s=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,r=new z(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),o=new z(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(r,-t*s),this.view.target.addScaledVector(o,e*s/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e.x-n.x,e.y-n.y),mid:[(e.x+n.x)/2,(e.y+n.y)/2]}}};function Tu(i,t,e){return Math.min(e,Math.max(t,i))}var dd=["Lars","Mia","Jonas","Sophie","Ben","Lena","Paul","Emma","Finn","Hanna","Tom","Clara","Max","Ida","Leon","Nora","Elias","Ella","Noah","Lotte","Sam","Alex","Kim","Jo"],pd=["#22d3ee","#a78bfa","#f472b6","#34d399","#fbbf24","#60a5fa","#fb7185"];function md(i=216){let t=7,e=()=>((t=t*16807%2147483647)-1)/2147483646,n=[];for(let s=1;s<=i;s++){let r=e(),o=s===5||s===77||s===150?"lighthouse":r<.06?"spotlight":r<.2?"glow":"neon",a=e()<.4,c=s<120?"2026-09":"2026-10";n.push({nr:s,name:a?dd[Math.floor(e()*dd.length)]:null,level:o,color:o==="neon"?null:pd[Math.floor(e()*pd.length)],since:c})}return n}var gd=new Map;function Vb(i){return i.startsWith("pack:")}var zb={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function ri(i){if(!Vb(i))return;let t=gd.get(i);if(t)return t;let[,e,...n]=i.split(":"),s=zb[e];return s?gd.get(`pack:${s}:${n.join(":")}`):void 0}function $r(i,t){let e=ri(t.type);if(t.mount_y!=null)return t.mount_y;if(t.type==="lamp_wall")return xd;if(_d.has(t.type))return Math.max(0,i.height-bd(t.type,t.h));if(t.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,t.h));switch(e?.mount){case"surface":return vd(i,t.x,t.z);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,i.height-t.h);default:return e?0:Pl(t)}}var yd={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function Il(i){return i==="hedge"||i==="fence"||i==="pergola"}function Md(i,t,e){let n=i.slope??0;if(!n||i.type==="pool")return 0;let s=i.slope_dir??"x",r=(l,f)=>s==="x"?l:s==="-x"?-l:s==="z"?f:-f,o=1/0,a=-1/0;for(let[l,f]of i.points){let u=r(l,f);o=Math.min(o,u),a=Math.max(a,u)}if(a-o<1e-6)return 0;let c=Math.min(1,Math.max(0,(r(t,e)-o)/(a-o)));return n*c}function Au(i){return i.elevation>.3?0:-.2}function Ll(i,t){return Au(i)+(t.offset??0)+(t.above?wd(t):Math.min(2,Math.max(-.3,t.rim??.06)))}function Hb(i){return i.depth&&i.depth>=.3?Math.min(5,i.depth):i.above?wd(i):1.5}function Ru(i,t){return t.above?!1:(i.outdoor??[]).some(e=>e!==t&&e.type!=="pool"&&!Il(e.type)&&!e.cut&&e.points.length>=3&&t.points.every(n=>Fe(n,e.points)))}function Sd(i,t){return!t.above&&!Ru(i,t)?Cu(i,t)-.05:Ll(i,t)-Hb(t)}function Cu(i,t){return Ll(i,t)-.15}function wd(i){return i.height&&i.height>.3?i.height:1.2}var Wb={type:"none",pitch:35,overhang:.4},B2={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Wb}};var Td=.3;var Ed=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),xd=1.75;var _d=new Set(["lamp_downlight","lamp_spot"]);function bd(i,t){return i==="lamp_spot"?Math.max(.06,t)+.008:.02}function Ad(i,t,e){let n=Math.max(4,Math.round(e/.18)),s=Math.floor(n/2)+1,r=s-1,o=n-s,a=Math.min(.12,i*.06),c=(i-a)/2,l=Math.min(c,t*.45),f=(t-l)/r;return{n,k:s,steps1:r,steps2:o,gap:a,fw:c,landing:l,run:f,rise:e/n}}function Dl(i){return Ed.has(i)||!!ri(i)?.light}var Xb=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Pl(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function vd(i,t,e){let n=0;for(let s of i.furniture)!(Xb.has(s.type)||ri(s.type)?.surface)||!Fe([t,e],Ld(s))||(n=Math.max(n,s.h));return n}var Gb=new Set([...Ed,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),Eu={sofa:[2.2,.9,.82],sofa_l:[2.6,1.8,.82],sofa_u:[3,2.2,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],pool_pump:[.7,.32,.4],pool_filter:[.6,.6,1],pool_heat_pump:[1,.45,.75],pool_dosing:[.4,.2,.5],pool_valve:[.16,.1,.14],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stairs_u:[2.1,2.7,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var qb=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],Yb=["standard","bars","glass_wall"];function Zr(i,t){return i.type==="door"?i.style&&qb.includes(i.style)?i.style:t?"front":"interior":i.style&&Yb.includes(i.style)?i.style:"standard"}function Rd(i,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let s=t==="sidelights",r=i-.04,o=Math.min(1.05,Math.max(.6,r-(s?.6:.3))),a=(r-o)/(s?2:1),c=n.sidelight_width??a,l=s?n.sidelight_width2??n.sidelight_width??a:0;c=Math.max(.1,c),l=s?Math.max(.1,l):0;let f=r-.5;if(c+l>f){let h=Math.max(0,f)/(c+l);c*=h,l*=h}return s?{panels:[[.02,.02+c],[i-.02-l,i-.02]],x0:.02+c,x1:i-.02-l}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+c]],x0:.02+c,x1:i-.02}:{panels:[[i-.02-c,i-.02]],x0:.02,x1:i-.02-c}}function Cd(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function oi(i){let t=0;for(let e=0;e<i.length;e++){let[n,s]=i[e],[r,o]=i[(e+1)%i.length];t+=n*o-r*s}return t/2}function Ii(i){return Math.abs(oi(i))}function Pu(i){let t=oi(i);if(Math.abs(t)<1e-9){let s=i.length||1;return[i.reduce((r,o)=>r+o[0],0)/s,i.reduce((r,o)=>r+o[1],0)/s]}let e=0,n=0;for(let s=0;s<i.length;s++){let[r,o]=i[s],[a,c]=i[(s+1)%i.length],l=r*c-a*o;e+=(r+a)*l,n+=(o+c)*l}return[e/(6*t),n/(6*t)]}function Pd(i){if(i.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=i[t],[s,r]=i[(t+1)%4];if(Math.abs(e-s)>1e-6&&Math.abs(n-r)>1e-6)return!1}return!0}function Id(i){let t=1/0,e=1/0,n=-1/0,s=-1/0;for(let[r,o]of i)t=Math.min(t,r),e=Math.min(e,o),n=Math.max(n,r),s=Math.max(s,o);return{x0:t,z0:e,x1:n,z1:s}}function Ld(i){let t=i.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),s=i.w/2,r=i.d/2;return[[-s,-r],[s,-r],[s,r],[-s,r]].map(([o,a])=>[i.x+o*e-a*n,i.z+o*n+a*e])}function Fe(i,t){let e=!1;for(let n=0,s=t.length-1;n<t.length;s=n++){let[r,o]=t[n],[a,c]=t[s];o>i[1]!=c>i[1]&&i[0]<(a-r)*(i[1]-o)/(c-o)+r&&(e=!e)}return e}var ke=(i,t)=>[i[0]-t[0],i[1]-t[1]],Li=(i,t)=>[i[0]+t[0],i[1]+t[1]],ai=(i,t)=>[i[0]*t,i[1]*t],Kr=(i,t)=>i[0]*t[0]+i[1]*t[1],Hs=(i,t)=>i[0]*t[1]-i[1]*t[0],Jr=i=>Math.hypot(i[0],i[1]),Wn=i=>{let t=Jr(i)||1;return[i[0]/t,i[1]/t]},Dd=i=>[-i[1],i[0]],Fd=i=>[i[1],-i[0]];function Ki(i,t,e=[]){let n=t.eps??.005,s=[],r=e.filter(x=>Math.hypot(x.b[0]-x.a[0],x.b[1]-x.a[1])>.05),o=[],a=x=>{for(let y=0;y<o.length;y++)if(Math.abs(o[y][0]-x[0])<=n&&Math.abs(o[y][1]-x[1])<=n)return y;return o.push([x[0],x[1]]),o.length-1},c=[];for(let x of i){let y=x.points;if(y.length<3||Math.abs(oi(y))<1e-6)continue;let E=oi(y)>0,L=y.map(a);for(let A=0;A<y.length;A++){let C=L[A],I=L[(A+1)%y.length];C!==I&&c.push(E?{u:C,v:I,room:x.id,edge:A,forward:!0}:{u:I,v:C,room:x.id,edge:A,forward:!1})}}let l=r.map(x=>[a(x.a),a(x.b)]),f=new Set;for(let x of i){let y=x.points;y.length<3||(x.wall_splits??[]).forEach((E,L)=>{if(!E||L>=y.length)return;let A=y[L],C=ke(y[(L+1)%y.length],A),I=Jr(C);for(let F of E)F>n&&F<I-n&&f.add(a(Li(A,ai(C,F/I))))})}let u=[];for(let x of c){let y=o[x.u],E=o[x.v],L=ke(E,y),A=Jr(L),C=ai(L,1/A),I=[];for(let U=0;U<o.length;U++){if(U===x.u||U===x.v)continue;let O=ke(o[U],y),X=Kr(O,C);X<=n||X>=A-n||Math.abs(Hs(C,O))<=n&&I.push({t:X,id:U})}I.sort((U,O)=>U.t-O.t);let F=[{t:0,id:x.u},...I,{t:A,id:x.v}];for(let U=0;U+1<F.length;U++){let O=F[U],X=F[U+1],G=x.forward?O.t:A-X.t,H=x.forward?X.t:A-O.t;u.push({u:O.id,v:X.id,room:x.room,edge:x.edge,t0:G,t1:H})}}let h=new Map;for(let x of u){let y=x.u<x.v?`${x.u}-${x.v}`:`${x.v}-${x.u}`,E=h.get(y);E||h.set(y,E=[]),E.push(x)}let d=x=>({room_id:x.room,edge:x.edge,t0:x.t0,t1:x.t1}),g=new Map;for(let x of u){let y=`${x.room}:${x.edge}`;g.set(y,[...g.get(y)??[],x.t0].sort((E,L)=>E-L))}let _=x=>{let y=i.find(L=>L.id===x.room)?.wall_heights?.[x.edge];if(!Array.isArray(y))return y;let E=g.get(`${x.room}:${x.edge}`)??[];return y[E.indexOf(x.t0)]??null},m=x=>{let y=x.map(_).filter(L=>typeof L=="number"&&L>0);if(y.length)return Math.min(...y);let E=x.map(L=>i.find(A=>A.id===L.room)?.ceiling_height);return E.every(L=>typeof L=="number"&&L>0)?Math.max(...E):void 0},p=x=>{let y=x.map(E=>i.find(L=>L.id===E.room)?.wall_thickness?.[E.edge]).filter(E=>typeof E=="number"&&E>0);return y.length?Math.max(...y):void 0},v=x=>x.some(y=>_(y)===0),S=[],b=[];for(let x of h.values()){let y=x[0],E=x.find(L=>L!==y&&L.u===y.v&&L.v===y.u&&L.room!==y.room);for(let L of x)L!==y&&L!==E&&L.room!==y.room&&s.push(`overlap:${y.room}:${L.room}`);if(v(E?[y,E]:[y])){E&&S.push([y.room,E.room]);continue}if(E){let L=p([y,E])??t.interior;b.push({a:y.u,b:y.v,left:L/2,right:L/2,exterior:!1,roomLeft:y.room,roomRight:E.room,sources:[d(y),d(E)],height:m([y,E])})}else b.push({a:y.u,b:y.v,left:0,right:p([y])??t.exterior,exterior:!0,roomLeft:y.room,roomRight:null,sources:[d(y)],height:m([y])})}let M=x=>Wn(ke(o[x.b],o[x.a]));for(let x of b){if(x.exterior||x.free)continue;let y=new Set;for(let L of[x.a,x.b])for(let A of b)!A.exterior||A.free||A.a!==L&&A.b!==L||Math.abs(Hs(M(x),M(A)))>1e-6||(A.roomLeft===x.roomLeft?y.add("left"):A.roomLeft===x.roomRight&&y.add("right"));if(y.size!==1)continue;let E=x.left+x.right;y.has("left")?(x.left=0,x.right=E):(x.left=E,x.right=0)}r.forEach((x,y)=>{let[E,L]=l[y];if(E===L)return;let A=[(x.a[0]+x.b[0])/2,(x.a[1]+x.b[1])/2],C=i.find(U=>U.points.length>=3&&Fe(A,U.points))?.id??null,I=(x.thickness??t.interior)/2,F=typeof x.height=="number"&&x.height>0?x.height:void 0;b.push({free:x.id,a:E,b:L,left:I,right:I,exterior:!1,roomLeft:C,roomRight:C,sources:[],height:F})}),b=Zb(b,o,f);let T=Kb(b,o);return{walls:b.map((x,y)=>{let E=o[x.a],L=o[x.b],A=T.get(`${y}:a`),C=T.get(`${y}:b`),I=Qb([A.right,C.left,L,C.right,A.left,E],1e-6);return{id:$b(E,L),a:[E[0],E[1]],b:[L[0],L[1]],left:x.left,right:x.right,exterior:x.exterior,roomLeft:x.roomLeft,roomRight:x.roomRight,sources:x.sources,footprint:I,...x.free?{free:x.free}:{},...x.height!==void 0?{height:x.height}:{}}}),warnings:[...new Set(s)],open:S}}function $b(i,t){let e=r=>Math.round(r*100),[n,s]=i[0]<t[0]||i[0]===t[0]&&i[1]<=t[1]?[i,t]:[t,i];return`w_${e(n[0])}_${e(n[1])}_${e(s[0])}_${e(s[1])}`}function Nd(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function Zb(i,t,e=new Set){let n=i.slice(),s=!0;for(;s;){s=!1;let r=new Map;n.forEach((o,a)=>{for(let c of[o.a,o.b]){let l=r.get(c);l||r.set(c,l=[]),l.push(a)}});for(let[o,a]of r){if(a.length!==2||e.has(o))continue;let c=n[a[0]],l=n[a[1]];if(c.b!==o&&(c=Nd(c)),l.a!==o&&(l=Nd(l)),c.a===l.b)continue;let f=Wn(ke(t[c.b],t[c.a])),u=Wn(ke(t[l.b],t[l.a]));if(Math.abs(Hs(f,u))>1e-6||Kr(f,u)<=0||c.free||l.free||c.height!==l.height||c.exterior!==l.exterior||c.roomLeft!==l.roomLeft||c.roomRight!==l.roomRight||Math.abs(c.left-l.left)>1e-9||Math.abs(c.right-l.right)>1e-9)continue;let h={...c,b:l.b,sources:Jb(c.sources,l.sources)},d=n.filter((g,_)=>_!==a[0]&&_!==a[1]);d.push(h),n.length=0,n.push(...d),s=!0;break}}return n}function Jb(i,t){let e=i.map(n=>({...n}));for(let n of t){let s=e.find(r=>r.room_id===n.room_id&&r.edge===n.edge&&(Math.abs(r.t1-n.t0)<1e-6||Math.abs(n.t1-r.t0)<1e-6));s?(s.t0=Math.min(s.t0,n.t0),s.t1=Math.max(s.t1,n.t1)):e.push({...n})}return e}function Kb(i,t){let e=new Map;i.forEach((s,r)=>{let o=Wn(ke(t[s.b],t[s.a])),a=[[s.a,{key:`${r}:a`,d:o,left:s.left,right:s.right,angle:Math.atan2(o[1],o[0])}],[s.b,{key:`${r}:b`,d:ai(o,-1),left:s.right,right:s.left,angle:Math.atan2(-o[1],-o[0])}]];for(let[c,l]of a){let f=e.get(c);f||e.set(c,f=[]),f.push(l)}});let n=new Map;for(let[s,r]of e){let o=t[s];r.sort((l,f)=>l.angle-f.angle);let a=l=>({left:Li(o,ai(Dd(l.d),l.left)),right:Li(o,ai(Fd(l.d),l.right))});for(let l of r)n.set(l.key,a(l));if(r.length<2)continue;let c=4*Math.max(...r.map(l=>Math.max(l.left,l.right)))+1e-9;for(let l=0;l<r.length;l++){let f=r[l],u=r[(l+1)%r.length],h=Li(o,ai(Dd(f.d),f.left)),d=Li(o,ai(Fd(u.d),u.right)),g=Hs(f.d,u.d);if(Math.abs(g)<1e-4)continue;let _=Hs(ke(d,h),u.d)/g,m=Li(h,ai(f.d,_));Jr(ke(m,o))>c||(n.get(f.key).left=m,n.get(u.key).right=m)}}return n}function Qb(i,t){let e=i.filter((s,r)=>Jr(ke(s,i[(r+1)%i.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let s=0;s<e.length;s++){let r=e[(s+e.length-1)%e.length],o=e[s],a=e[(s+1)%e.length],c=ke(o,r),l=ke(a,o);if(Math.abs(Hs(Wn(c),Wn(l)))<1e-7&&Kr(c,l)>0){e=e.filter((f,u)=>u!==s),n=!0;break}}}return e}function Ud(i,t,e){let n=i.points[t],s=i.points[(t+1)%i.points.length],r=Wn(ke(s,n));return Li(n,ai(r,e))}function Qr(i,t,e){if(i.wall){let s=e.find(a=>a.id===i.wall);if(!s||Math.hypot(s.b[0]-s.a[0],s.b[1]-s.a[1])<.05)return null;let r=Wn(ke(s.b,s.a));return{room:{id:i.room_id,name:"",area_id:null,points:[s.a,s.b,Li(s.a,[-r[1],r[0]])]},edge:0}}let n=t.find(s=>s.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function jr(i,t,e){if(!t.wall)return jb(i,e.room,e.edge,t.offset);let n=i.find(r=>r.free===t.wall);if(!n)return null;let s=Ud(e.room,0,t.offset);return{wall:n,s:Kr(ke(s,n.a),Wn(ke(n.b,n.a)))}}function jb(i,t,e,n){for(let s of i){if(!s.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let o=Ud(t,e,n);return{wall:s,s:Kr(ke(o,s.a),Wn(ke(s.b,s.a)))}}return null}var Iu=1.62,tv=.2,Fl=class{solids=[];doors=[];rooms;walls;building;floor;constructor(t,e){this.building=t,this.floor=e;let n=t.settings;this.rooms=e.rooms.filter(o=>o.points.length>=3);let s=Ki(this.rooms,{exterior:n.wall_exterior,interior:n.wall_interior},e.walls??[]);this.walls=s.walls;let r=new Map;for(let o of e.openings){if(!(o.type!=="window"||o.sill<.1))continue;let c=Qr(o,e.rooms,e.walls??[]);if(!c)continue;let l=jr(this.walls,o,c);if(!l)continue;let f=r.get(l.wall)??[];f.push([l.s-o.width/2+.05,l.s+o.width/2-.05]),r.set(l.wall,f);let u=l.wall,h=u.b[0]-u.a[0],d=u.b[1]-u.a[1],g=Math.hypot(h,d)||1,_=h/g,m=d/g,p=[u.a[0]+_*l.s,u.a[1]+m*l.s],v=u.left+.45,S=u.right+.45;this.doors.push({centre:p,p:[[p[0]-m*v,p[1]+_*v],[p[0]+m*S,p[1]-_*S]]})}for(let o of this.walls){if(o.height!==void 0&&o.height<.9)continue;let a=o.b[0]-o.a[0],c=o.b[1]-o.a[1],l=Math.hypot(a,c);l<1e-6||this.solids.push({a:o.a,u:[a/l,c/l],len:l,left:o.left,right:o.right,gaps:r.get(o)??[]})}}blocked(t,e=tv){for(let n of this.solids){let s=t[0]-n.a[0],r=t[1]-n.a[1],o=s*n.u[0]+r*n.u[1];if(o<-e||o>n.len+e)continue;let a=-s*n.u[1]+r*n.u[0];if(!(a>n.left+e||a<-n.right-e)&&!n.gaps.some(([c,l])=>o>c+e*.6&&o<l-e*.6))return!0}return!1}clear(t,e){let n=Math.hypot(e[0]-t[0],e[1]-t[1]),s=Math.max(1,Math.ceil(n/.08));for(let r=1;r<=s;r++){let o=r/s;if(this.blocked([t[0]+(e[0]-t[0])*o,t[1]+(e[1]-t[1])*o]))return!1}return!0}roomAt(t){return this.rooms.find(e=>Fe(t,e.points))??null}path(t,e){if(this.clear(t,e))return[e];let n=[t,e,...this.doors.flatMap(u=>u.p).filter(u=>!this.blocked(u))],s=n.length,r=new Array(s).fill(1/0),o=new Array(s).fill(-1),a=new Array(s).fill(!1);r[0]=0;let c=new Map,l=(u,h)=>{let d=u<h?`${u}:${h}`:`${h}:${u}`,g=c.get(d);return g===void 0&&(g=this.clear(n[u],n[h]),c.set(d,g)),g};for(;;){let u=-1;for(let h=0;h<s;h++)!a[h]&&r[h]<1/0&&(u<0||r[h]<r[u])&&(u=h);if(u<0)return null;if(u===1)break;a[u]=!0;for(let h=0;h<s;h++){if(a[h]||h===u)continue;let d=Math.hypot(n[u][0]-n[h][0],n[u][1]-n[h][1]);r[u]+d>=r[h]||l(u,h)&&(r[h]=r[u]+d,o[h]=u)}}let f=[];for(let u=1;u>0;u=o[u])f.unshift(n[u]);return f}start(t=!1){for(let s of t?this.floor.openings:[]){if(s.type!=="door")continue;let r=Qr(s,this.floor.rooms,this.floor.walls??[]);if(!r)continue;let o=jr(this.walls,s,r);if(!o||!o.wall.exterior)continue;let a=o.wall,c=a.b[0]-a.a[0],l=a.b[1]-a.a[1],f=Math.hypot(c,l)||1,u=c/f,h=l/f,d=[a.a[0]+u*o.s,a.a[1]+h*o.s],g=[d[0]-h*(a.left+.9),d[1]+u*(a.left+.9)];if(!this.blocked(g))return{p:g,yaw:this.openYaw(g,Math.atan2(u,-h))}}let e=[...this.rooms].sort((s,r)=>Od(r)-Od(s))[0],n=e?this.freeNear(Pu(e.points)):[0,0];return{p:n,yaw:this.openYaw(n)}}sight(t,e,n=9){let s=Math.cos(e),r=Math.sin(e);for(let o=.2;o<n;o+=.15)if(this.blocked([t[0]+s*o,t[1]+r*o],.05))return o;return n}openYaw(t,e=null){let n=e??0,s=-1;for(let r=0;r<24;r++){let o=r/24*Math.PI*2,a=this.sight(t,o);if(e!==null){let c=Math.abs(o-e)%(Math.PI*2);c>Math.PI&&(c=Math.PI*2-c),a*=1.25-c/Math.PI*.5}a>s&&(s=a,n=o)}return n}freeNear(t){if(!this.blocked(t))return t;for(let e=.2;e<2;e+=.2)for(let n=0;n<6.28;n+=.5){let s=[t[0]+Math.cos(n)*e,t[1]+Math.sin(n)*e];if(!this.blocked(s))return s}return t}};function Od(i){let t=0,e=i.points;for(let n=0;n<e.length;n++){let[s,r]=e[n],[o,a]=e[(n+1)%e.length];t+=s*a-o*r}return Math.abs(t/2)}var Nl=class{state;path=[];keys=new Set;stick=null;raf=0;last=0;origUpdate;origWalls;origFov;origNear;onRoom;roomId=null;listeners=[];turnTo=null;v;map;surface;constructor(t,e,n,s){this.v=t,this.map=e,this.surface=n,this.onRoom=s.onRoom;let r=s.start??(()=>{let o=e.start();return{x:o.p[0],z:o.p[1],yaw:o.yaw,pitch:-.05}})();this.state={...r},this.origUpdate=t.controls.update,this.origWalls=t.updateWalls,this.origFov=t.camera.fov,this.origNear=t.camera.near,t.controls.update=()=>this.apply(),t.updateWalls=()=>{for(let o of t.floors)o.mask.standing.value=65535,o.mask.glass.value=0},t.camera.fov=72,t.camera.near=.05,t.camera.updateProjectionMatrix(),t.labels.style.visibility="hidden",this.bind(),this.reportRoom(),t.invalidate()}dispose(){cancelAnimationFrame(this.raf);for(let[t,e,n,s]of this.listeners)t.removeEventListener(e,n,s);this.v.controls.update=this.origUpdate,this.v.updateWalls=this.origWalls,this.v.camera.fov=this.origFov,this.v.camera.near=this.origNear,this.v.camera.updateProjectionMatrix(),this.v.labels.style.visibility="",this.v.invalidate()}setMap(t,e){this.map=t,this.path=[];let n=e??(()=>{let s=t.start();return{x:s.p[0],z:s.p[1],yaw:s.yaw,pitch:-.05}})();this.state={...n},this.reportRoom(),this.kick()}floorY(){let t=this.v.floorMap.get(this.map.floor.id);return(t?t.floor.elevation+t.y:this.map.floor.elevation)+Iu}apply(){let{x:t,z:e,yaw:n,pitch:s}=this.state,r=this.floorY(),o=Math.cos(s);return this.v.camera.position.set(t,r,e),this.v.camera.lookAt(t+Math.cos(n)*o,r+Math.sin(s),e+Math.sin(n)*o),this.v.controls.view.target.set(t,r-Iu,e),!1}goTo(t){let e=this.map.path([this.state.x,this.state.z],this.map.freeNear(t));return e?(this.path=e,this.kick(),!0):!1}goToRoom(t){return this.goTo(Pu(t.points))}kick(){this.raf||(this.last=performance.now(),this.raf=requestAnimationFrame(t=>this.tick(t))),this.v.invalidate()}tick(t){this.raf=0;let e=Math.min(.05,(t-this.last)/1e3);this.last=t;let n=!1,s=this.state,r=0,o=0,a=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(r+=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(r-=1),this.keys.has("a")&&(o-=1),this.keys.has("d")&&(o+=1),(this.keys.has("arrowleft")||this.keys.has("q"))&&(a-=1),(this.keys.has("arrowright")||this.keys.has("e"))&&(a+=1),this.stick&&(r+=-this.stick.y,a+=this.stick.x*.9),a&&(s.yaw+=a*1.6*e,n=!0),r||o){this.path=[],this.turnTo=null;let c=1.5*e,l=(Math.cos(s.yaw)*r-Math.sin(s.yaw)*o)*c,f=(Math.sin(s.yaw)*r+Math.cos(s.yaw)*o)*c;this.move(l,f),n=!0}else if(this.path.length){let[c,l]=this.path[0],f=c-s.x,u=l-s.z,h=Math.hypot(f,u),d=1.4*e;h<=d?(s.x=c,s.z=l,this.path.shift()):(s.x+=f/h*d,s.z+=u/h*d,this.turnTo=Math.atan2(u,f)),n=!0}if(this.turnTo!==null){let c=this.turnTo-s.yaw;for(;c>Math.PI;)c-=2*Math.PI;for(;c<-Math.PI;)c+=2*Math.PI;Math.abs(c)<.01?this.turnTo=null:(s.yaw+=c*Math.min(1,e*4),n=!0),!this.path.length&&Math.abs(c)<.05&&(this.turnTo=null)}this.reportRoom(),this.v.invalidate(),(n||this.keys.size||this.stick)&&(this.raf=requestAnimationFrame(c=>this.tick(c)))}move(t,e){let n=this.state,s=[n.x+t,n.z+e];if(!this.map.blocked(s)){n.x=s[0],n.z=s[1];return}this.map.blocked([n.x+t,n.z])?this.map.blocked([n.x,n.z+e])||(n.z+=e):n.x+=t}reportRoom(){let t=this.map.roomAt([this.state.x,this.state.z]),e=t?.id??null;e!==this.roomId&&(this.roomId=e,this.onRoom(t))}setStick(t){this.stick=t,this.kick()}floorPoint(t,e){let n=this.surface.getBoundingClientRect(),s=(t-n.left)/n.width*2-1,r=1-(e-n.top)/n.height*2,{yaw:o,pitch:a,x:c,z:l}=this.state,f=this.v.camera.fov*Math.PI/180,u=Math.tan(f/2),h=n.width/n.height,d=Math.cos(a),g=[Math.cos(o)*d,Math.sin(a),Math.sin(o)*d],_=[-Math.sin(o),0,Math.cos(o)],m=[g[1]*_[2]-g[2]*_[1],g[2]*_[0]-g[0]*_[2],g[0]*_[1]-g[1]*_[0]],p=[-m[0],-m[1],-m[2]],v=[g[0]+_[0]*s*u*h+p[0]*r*u,g[1]+_[1]*s*u*h+p[1]*r*u,g[2]+_[2]*s*u*h+p[2]*r*u];if(v[1]>=-.02)return null;let S=Iu/-v[1];return[c+v[0]*S,l+v[2]*S]}bind(){let t=(o,a,c,l)=>{o.addEventListener(a,c,l),this.listeners.push([o,a,c,!!l?.capture])},e=null;t(this.surface,"pointerdown",o=>{e||(e={x:o.clientX,y:o.clientY,moved:!1,id:o.pointerId},this.surface.setPointerCapture?.(o.pointerId))}),t(this.surface,"pointermove",o=>{if(!e||o.pointerId!==e.id)return;let a=o.clientX-e.x,c=o.clientY-e.y;if(!e.moved&&Math.hypot(a,c)<5)return;e.moved=!0,e.x=o.clientX,e.y=o.clientY;let l=this.v.camera.fov*Math.PI/180/this.surface.clientHeight;this.state.yaw-=a*l*1.1,this.state.pitch=Math.max(-1,Math.min(.8,this.state.pitch+c*l*1.1)),this.turnTo=null,this.v.invalidate()});let n=o=>{if(!e||o.pointerId!==e.id)return;let a=!e.moved;if(e=null,a){let c=this.floorPoint(o.clientX,o.clientY);c&&this.map.roomAt(c)&&this.goTo(c)}};t(this.surface,"pointerup",n),t(this.surface,"pointercancel",()=>e=null),t(this.surface,"wheel",o=>{o.preventDefault();let a=this.state,c=Math.max(-.6,Math.min(.6,-o.deltaY/300));this.path=[],this.move(Math.cos(a.yaw)*c,Math.sin(a.yaw)*c),this.reportRoom(),this.v.invalidate()},{passive:!1});let s=o=>["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"].includes(o.key.toLowerCase()),r=o=>!!o.composedPath()[0]?.closest?.("input, textarea, select");t(window,"keydown",o=>{!s(o)||r(o)||o.ctrlKey||o.metaKey||o.altKey||(o.preventDefault(),o.stopImmediatePropagation(),this.keys.add(o.key.toLowerCase()),this.kick())},{capture:!0}),t(window,"keyup",o=>{s(o)&&(this.keys.delete(o.key.toLowerCase()),o.stopImmediatePropagation())},{capture:!0}),t(window,"blur",()=>this.keys.clear())}};var eo=Math.PI/180;function Xn(i){let t=Math.min(i.x0,i.x1),e=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),s=Math.max(i.z0,i.z1);return i.axis==="x"?{u0:t,u1:e,w:s-n,at:(r,o)=>[r,i.flip?s-o:n+o]}:{u0:n,u1:s,w:e-t,at:(r,o)=>[i.flip?e-o:t+o,r]}}function Cn(i){let t=Xn(i).w,e=i.eave_a,n=i.eave_b,s=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*eo),r=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*eo);if(i.shape==="flat"||i.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(i.shape==="pent")return{vr:t,rh:e+t*s,y:c=>e+c*s};if(i.shape==="mansard"){let c=Gd(t,e,n,s,r);return{vr:c.vr,rh:c.rh,y:c.y}}let o=s+r>1e-6?Math.min(t,Math.max(0,(n-e+t*r)/(s+r))):t/2,a=e+o*s;return{vr:o,rh:a,y:c=>c<=o?e+c*s:n+(t-c)*r}}var ev=.14;function kd(i,t){return!i.open&&Math.min(i.base,i.eave_a,i.eave_b)<t-.05}function Vd(i,t,e){let n=null,s=Math.max(0,i.settings.roof.overhang??0);for(let r of i.settings.roof.sections??[]){if(r.open)continue;let o=Math.min(r.x0,r.x1),a=Math.max(r.x0,r.x1),c=Math.min(r.z0,r.z1),l=Math.max(r.z0,r.z1);if(t<o-1e-6||t>a+1e-6||e<c-1e-6||e>l+1e-6||r.points&&r.points.length>=3&&!Fe([t,e],r.points))continue;let[f,u]=Di(r,t,e),h=r.shape==="flat"||r.shape==="parapet",d=Math.max(0,r.overhang??s),_=((h?null:no(Xs(r,{u0:d,u1:d,a:d,b:d}),f,u))??Cn(r).y(u))-ev;n=n===null?_:Math.max(n,_)}return n}function Lu(i,t){let e=i.length;if(e<3||Math.abs(t)<1e-9)return i.map(r=>[r[0],r[1]]);let n=Ii(i)>=0?1:-1,s=[];for(let r=0;r<e;r++){let o=i[(r+e-1)%e],a=i[r],c=i[(r+1)%e],l=Bd([a[0]-o[0],a[1]-o[1]]),f=Bd([c[0]-a[0],c[1]-a[1]]),u=[l[1]*n,-l[0]*n],h=[f[1]*n,-f[0]*n],d=u[0]+h[0],g=u[1]+h[1],_=Math.hypot(d,g);if(_<1e-6){s.push([a[0]+u[0]*t,a[1]+u[1]*t]);continue}let m=(d*u[0]+g*u[1])/_,p=Math.min(4,1/Math.max(.25,m));s.push([a[0]+d/_*t*p,a[1]+g/_*t*p])}return s}function Bd(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function zd(i,t){if(i.points&&i.points.length>=3)return Lu(i.points,t);let e=Math.min(i.x0,i.x1)-t,n=Math.max(i.x0,i.x1)+t,s=Math.min(i.z0,i.z1)-t,r=Math.max(i.z0,i.z1)+t;return[[e,s],[n,s],[n,r],[e,r]]}var to=Math.tan(30*eo);function Gd(i,t,e,n,s){let r=Math.min(i*.3,n>1e-6?2.4/n:i*.3),o=Math.min(i*.3,s>1e-6?2.4/s:i*.3),a=t+r*n,c=e+o*s,l=Math.min(i-o,Math.max(r,(c-a+to*(i-o+r))/(2*to))),f=a+(l-r)*to;return{vla:r,vlb:o,yla:a,ylb:c,vr:l,rh:f,y:h=>h<=r?t+h*n:h<=l?a+(h-r)*to:h<=i-o?c+(i-o-h)*to:e+(i-h)*s}}function Xs(i,t){let e=Xn(i),n=Cn(i),s=e.w,r=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),c=e.u1+Math.max(0,t.u1),l=(v,S)=>[v,S,n.y(S)],f=l(a,-r),u=l(c,-r),h=l(c,s+o),d=l(a,s+o),g=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*eo),_=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*eo);if(i.shape==="pent"){let v=[f,u,h,d];return{faces:[v],rim:v,ridges:[[h,d]],gable:[[0,n.y(0)],[s,n.y(s)]]}}if(i.shape==="hip"||i.shape==="pyramid"){let v=i.shape==="pyramid"?(e.u1-e.u0)/2:Math.min((e.u1-e.u0)/2,Math.min(n.vr,s-n.vr)||s/2),S=[e.u0+v,n.vr,n.rh],b=[e.u1-v,n.vr,n.rh],M=i.shape==="pyramid"?[[f,u,S],[u,h,S],[h,d,S],[d,f,S]]:[[f,u,b,S],[S,b,h,d],[d,f,S],[u,h,b]],T=i.shape==="pyramid"?[[f,S],[d,S],[u,S],[h,S]]:[[S,b],[f,S],[d,S],[u,b],[h,b]];return{faces:M,rim:[f,u,h,d],ridges:T,gable:null}}if(i.shape==="halfhip"){let v=Math.min(n.y(0),n.y(s)),S=v+(n.rh-v)*.55,b=g>1e-6?Math.min(n.vr,(S-i.eave_a)/g):n.vr,M=_>1e-6?Math.max(n.vr,s-(S-i.eave_b)/_):n.vr,T=Math.min((e.u1-e.u0)/2-.1,(n.rh-S)/Math.max(.2,g)),R=[e.u0+T,n.vr,n.rh],x=[e.u1-T,n.vr,n.rh],y=[a,b,S],E=[a,M,S],L=[c,b,S],A=[c,M,S];return{faces:[[f,u,L,x,R,y],[R,x,A,h,d,E],[E,y,R],[L,A,x]],rim:[f,u,L,A,h,d,E,y],ridges:[[R,x],[y,R],[E,R],[L,x],[A,x]],gable:[[0,n.y(0)],[b,S],[M,S],[s,n.y(s)]]}}if(i.shape==="mansard"){let v=Gd(s,i.eave_a,i.eave_b,g,_),S=[a,v.vla,v.yla],b=[c,v.vla,v.yla],M=[a,s-v.vlb,v.ylb],T=[c,s-v.vlb,v.ylb],R=[a,v.vr,v.rh],x=[c,v.vr,v.rh];return{faces:[[f,u,b,S],[S,b,x,R],[R,x,T,M],[M,T,h,d]],rim:[f,u,b,x,T,h,d,M,R,S],ridges:[[R,x],[S,b],[M,T]],gable:[[0,n.y(0)],[v.vla,v.yla],[v.vr,v.rh],[s-v.vlb,v.ylb],[s,n.y(s)]]}}let m=[a,n.vr,n.rh],p=[c,n.vr,n.rh];return{faces:[[f,u,p,m],[m,p,h,d]],rim:[f,u,p,h,d,m],ridges:[[m,p]],gable:[[0,n.y(0)],[n.vr,n.rh],[s,n.y(s)]]}}function no(i,t,e){let n=null;for(let s of i.faces){if(!Fe([t,e],s.map(v=>[v[0],v[1]])))continue;let[r,o]=s,a=s.slice(2).find(v=>Math.abs((o[0]-r[0])*(v[1]-r[1])-(o[1]-r[1])*(v[0]-r[0]))>1e-9);if(!a)continue;let c=o[0]-r[0],l=o[2]-r[2],f=o[1]-r[1],u=a[0]-r[0],h=a[2]-r[2],d=a[1]-r[1],g=l*d-f*h,_=f*u-c*d,m=c*h-l*u;if(Math.abs(_)<1e-9)continue;let p=r[2]-(g*(t-r[0])+m*(e-r[1]))/_;n=n===null?p:Math.min(n,p)}return n}function Di(i,t,e){let n=Math.min(i.x0,i.x1),s=Math.max(i.x0,i.x1),r=Math.min(i.z0,i.z1),o=Math.max(i.z0,i.z1);return i.axis==="x"?[t,i.flip?o-e:e-r]:[e,i.flip?s-t:t-n]}function nv(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function Du(i,t){let e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,s=o=>Math.abs((o.x1-o.x0)*(o.z1-o.z0)),r=null;for(let o of i){if(o===t||o.dormer||o.open||o.shape==="flat"||o.shape==="parapet"||s(o)<s(t)*1.5)continue;let a=nv(o);e<a.x0||e>a.x1||n<a.z0||n>a.z1||(!r||s(o)<s(r))&&(r=o)}return r}function Fu(i,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=Xn(t),n=Cn(t).rh,s=Xs(i,{u0:0,u1:0,a:0,b:0}),r=Cn(i),o=g=>{let[_,m]=e.at(g,e.w/2),[p,v]=Di(i,_,m);return no(s,p,v)??r.y(v)},a=o(e.u0)<=o(e.u1),c=a?e.u0:e.u1,l=a?e.u1:e.u0,f=a?1:-1,u=Math.abs(l-c),h=l;for(let g=.5;g<u;g+=.05)if(o(c+f*g)>=n-.02){h=c+f*g;break}if(Math.abs(h-l)<.05)return t;let d={...t};return t.axis==="x"?l===e.u1?d.x1=h:d.x0=h:l===e.u1?d.z1=h:d.z0=h,d}function Hd(i,t){let e=Fu(i,t),n=Xn(e),s=Cn(e),r=Xs(i,{u0:0,u1:0,a:0,b:0}),o=Cn(i),a=h=>{let[d,g]=n.at(h,n.w/2),[_,m]=Di(i,d,g);return no(r,_,m)??o.y(m)},c=a(n.u0)<=a(n.u1),l=n.u1-n.u0,f=[],u=Math.max(1,Math.ceil(l/.15));for(let h=0;h<u;h++){let d=l*h/u,g=l*(h+1)/u,_=c?n.u0+d:n.u1-d,m=c?n.u0+g:n.u1-g,p=a(m),v=1/0,S=-1/0;for(let x=0;x<=40;x++){let y=n.w*x/40;s.y(y)>p+.02&&(v=Math.min(v,y),S=Math.max(S,y))}if(!(S-v>.05))continue;let b=n.at(_,v),M=n.at(m,S),T=Di(i,b[0],b[1]),R=Di(i,M[0],M[1]);f.push({u0:Math.min(T[0],R[0]),u1:Math.max(T[0],R[0]),v0:Math.min(T[1],R[1]),v1:Math.max(T[1],R[1])})}return f}function Ws(i,t,e,n){let s=o=>n?o[t]<=e+1e-9:o[t]>=e-1e-9,r=[];for(let o=0;o<i.length;o++){let a=i[o],c=i[(o+1)%i.length],l=s(a),f=s(c);if(l&&r.push(a),l!==f){let u=(e-a[t])/(c[t]-a[t]);r.push([a[0]+(c[0]-a[0])*u,a[1]+(c[1]-a[1])*u,a[2]+(c[2]-a[2])*u])}}return r}function Wd(i,t){let e=Ws(i,0,t.u0,!0),n=Ws(i,0,t.u1,!1),s=Ws(Ws(i,0,t.u0,!1),0,t.u1,!0),r=Ws(s,1,t.v0,!0),o=Ws(s,1,t.v1,!1);return[e,n,r,o].filter(a=>a.length>=3&&Math.abs(Ii(a.map(c=>[c[0],c[1]])))>1e-6)}function Ul(i,t,e){let n=Xn(t),s=i.floors.flatMap(l=>l.rooms.filter(f=>f.points.length>=3&&l.elevation+l.height>t.base+.05)),r=l=>l.some(f=>s.some(u=>Fe(f,u.points))),o=.35,a=[.15,.5,.85].map(l=>n.u0+(n.u1-n.u0)*l),c=[.15,.5,.85].map(l=>n.w*l);return{a:r(a.map(l=>n.at(l,-o)))?0:e,b:r(a.map(l=>n.at(l,n.w+o)))?0:e,u0:r(c.map(l=>n.at(n.u0-o,l)))?0:e,u1:r(c.map(l=>n.at(n.u1+o,l)))?0:e}}function Xd(i,t){let e=i.floors.filter(n=>n.rooms.length>0).sort((n,s)=>n.elevation-s.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}function qd(i,t){let e=oi(t)>0?1:-1,n=[...i];for(let s=0;s<t.length&&n.length;s++){let r=t[s],o=t[(s+1)%t.length],a=l=>e*((o[0]-r[0])*(l[1]-r[1])-(o[1]-r[1])*(l[0]-r[0])),c=n;n=[];for(let l=0;l<c.length;l++){let f=c[l],u=c[(l+1)%c.length],h=a(f),d=a(u);if(h>=0&&n.push(f),h>=0!=d>=0){let g=h/(h-d);n.push([f[0]+(u[0]-f[0])*g,f[1]+(u[1]-f[1])*g])}}}return n}function Yd(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length],r=i[(e+2)%i.length],o=(s[0]-n[0])*(r[1]-s[1])-(s[1]-n[1])*(r[0]-s[0]);if(!(Math.abs(o)<1e-9)){if(t&&Math.sign(o)!==t)return!1;t=Math.sign(o)}}return!0}function iv(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];t+=n[0]*s[1]-s[0]*n[1]}return t/2}function sv(i,t,e){let n=e[0]-t[0],s=e[1]-t[1],r=n*n+s*s,o=r?Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*s)/r)):0;return Math.hypot(i[0]-t[0]-n*o,i[1]-t[1]-s*o)}function $d(i,t,e=.03){return i.every(n=>Fe(n,t)||t.some((s,r)=>sv(n,s,t[(r+1)%t.length])<=e))}function Nu(i,t){let e=iv(i)>=0?i:[...i].reverse(),n=(s,r)=>{let o=Math.hypot(r[0]-s[0],r[1]-s[1])||1;return[-(r[1]-s[1])/o,(r[0]-s[0])/o]};return e.map((s,r)=>{let o=n(e[(r-1+e.length)%e.length],s),a=n(s,e[(r+1)%e.length]),c=1+o[0]*a[0]+o[1]*a[1];return c<.1?s:[s[0]+(o[0]+a[0])/c*t,s[1]+(o[1]+a[1])/c*t]})}var Qi=Bt(3662079,.95),Uu=Bt(3662079,1),Fi=Bt(5995775,.34),Zd=Bt(5995775,.22),Ol=[-.55,.83],Wt=-1,Bl=16,io=32,Jd=48,Ou=64,Ae=class{p=[];c=[];f=[];uv;tile;constructor(t=!1,e=!1){this.uv=t?[]:null,this.tile=e?[]:null}tri(t,e,n,s,r=s,o=s,a,c=Wt,l=[0,1]){this.p.push(...t,...e,...n),this.c.push(s.r,s.g,s.b,r.r,r.g,r.b,o.r,o.g,o.b),this.f.push(c,c,c),this.uv?.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile?.push(...l,...l,...l)}get count(){return this.p.length/9}geometry(){let t=new Me;return t.setAttribute("position",new Yt(this.p,3)),t.setAttribute("color",new Yt(this.c,3)),t.setAttribute("fold",new Yt(this.f,1)),this.uv&&t.setAttribute("uv",new Yt(this.uv,2)),this.tile&&t.setAttribute("tile",new Yt(this.tile,2)),t.computeBoundingSphere(),t}},Pn=class{p=[];c=[];f=[];seg(t,e,n=Qi,s=Wt){this.p.push(...t,...e),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(s,s)}segSplit(t,e,n,s,r){let[o,a]=t[1]<=e[1]?[t,e]:[e,t];if(a[1]<=s+1e-6||r<0)return this.seg(o,a,n,Wt);if(o[1]>=s-1e-6)return this.seg(o,a,n,r);let c=(s-o[1])/(a[1]-o[1]),l=[o[0]+(a[0]-o[0])*c,s,o[2]+(a[2]-o[2])*c];this.seg(o,l,n,Wt),this.seg(l,a,n,r)}geometry(){let t=new Me;return t.setAttribute("position",new Yt(this.p,3)),t.setAttribute("color",new Yt(this.c,3)),t.setAttribute("fold",new Yt(this.f,1)),t}};function Kd(i,t,e,n){let r=i.uv?2:0,o=(u,h)=>{let d=u*3+h;return{p:i.p.slice(d*3,d*3+3),c:i.c.slice(d*3,d*3+3),uv:i.uv?i.uv.slice(d*2,d*2+2):null,tile:i.tile?i.tile.slice(d*2,d*2+2):null}},a=(u,h,d)=>({p:u.p.map((g,_)=>g+(h.p[_]-g)*d),c:u.c.map((g,_)=>g+(h.c[_]-g)*d),uv:u.uv&&h.uv?u.uv.map((g,_)=>g+(h.uv[_]-g)*d):null,tile:u.tile}),c=(u,h,d)=>{for(let g=0;g<3;g++){let _=u*3+g;for(let m=0;m<3;m++)i.p[_*3+m]=h[g].p[m],i.c[_*3+m]=h[g].c[m];if(i.uv&&h[g].uv)for(let m=0;m<r;m++)i.uv[_*2+m]=h[g].uv[m];if(i.tile&&h[g].tile)for(let m=0;m<2;m++)i.tile[_*2+m]=h[g].tile[m];i.f[_]=d}},l=(u,h)=>{let d=i.p.length/9;for(let g of u)i.p.push(...g.p),i.c.push(...g.c),i.f.push(h),i.uv?.push(...g.uv??[.5,.5]),i.tile?.push(...g.tile??[0,1]);return d},f=i.p.length/9;for(let u=t;u<f;u++){let h=[o(u,0),o(u,1),o(u,2)],d=h.map(x=>x.p[1]>e+1e-6),g=h.map(x=>x.p[1]<e-1e-6);if(!d.some(Boolean))continue;if(!g.some(Boolean)){for(let x=0;x<3;x++)i.f[u*3+x]=n;continue}let _=i.f[u*3],m=(x,y)=>a(x,y,(e-x.p[1])/(y.p[1]-x.p[1])),p=d.filter(Boolean).length,v=p===1?d.indexOf(!0):d.indexOf(!1),S=h[v],b=h[(v+1)%3],M=h[(v+2)%3],T=m(S,b),R=m(M,S);p===1?(c(u,[S,T,R],n),l([T,b,M],_),l([T,M,R],_)):(c(u,[S,T,R],_),l([T,b,M],n),l([T,M,R],n))}}function Qd(i,t,e,n){let s=i.p.length/6;for(let r=t;r<s;r++){let o=i.p.slice(r*6,r*6+3),a=i.p.slice(r*6+3,r*6+6),[c,l]=o[1]<=a[1]?[o,a]:[a,o];if(l[1]<=e+1e-6)continue;if(c[1]>=e-1e-6){i.f[r*2]=n,i.f[r*2+1]=n;continue}let f=(e-c[1])/(l[1]-c[1]),u=[c[0]+(l[0]-c[0])*f,e,c[2]+(l[2]-c[2])*f];for(let d=0;d<3;d++)i.p[r*6+d]=c[d],i.p[r*6+3+d]=u[d];let h=i.c.slice(r*6,r*6+3);i.p.push(...u,...l),i.c.push(...h,...h),i.f.push(n,n)}}var ji=Math.PI/180;function Bt(i,t){let e=new ht(i).multiplyScalar(t);return e.r=Math.min(1,e.r),e.g=Math.min(1,e.g),e.b=Math.min(1,e.b),e}function rv(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];t+=n[0]*s[1]-s[0]*n[1]}return t}function qs(i,t=[]){let e=i.map(([n,s])=>new Gt(n,s));return Ir.triangulateShape(e,t.map(n=>n.map(([s,r])=>new Gt(s,r))))}function jd(i,t,e,n,s,r,o){let a=new ht(o),c=d=>.5+.5*Math.min(1,Math.max(0,d/1.6));for(let d=0;d<4;d++){let g=t[d],_=t[(d+1)%4],m=e[d],p=e[(d+1)%4],v=_[0]-g[0],S=_[1]-g[1],b=Math.hypot(v,S);if(b<1e-6)continue;let T=.8+.28*((S/b*Ol[0]-v/b*Ol[1]+1)/2),R=(m[0]+p[0]-g[0]-_[0])/2*(-S/b)+(m[1]+p[1]-g[1]-_[1])/2*(v/b),x=Math.max(0,Math.min(1,R/Math.max(1e-6,Math.hypot(R,s-n)))),y=Bt(r,c(n)*T).lerp(a,x),E=Bt(r,c(s)*T).lerp(a,x);i.tri([g[0],n,g[1]],[m[0],s,m[1]],[p[0],s,p[1]],y,E,E),i.tri([g[0],n,g[1]],[p[0],s,p[1]],[_[0],n,_[1]],y,E,y)}let[l,f,u,h]=e;Math.hypot(u[0]-l[0],u[1]-l[1])>1e-4&&(i.tri([l[0],s,l[1]],[u[0],s,u[1]],[f[0],s,f[1]],a),i.tri([l[0],s,l[1]],[h[0],s,h[1]],[u[0],s,u[1]],a))}function tp(i,t,e,n,s,r,o,a,c,l){let f=new ht(c),u=[];for(let d=0;d<l;d++){let g=d/l*Math.PI*2;u.push({y:r+Math.cos(g)*o,s:s+Math.sin(g)*o})}let h=(d,g)=>{let _=t(d,u[g%l].s);return[_[0],u[g%l].y,_[1]]};for(let d=0;d<l;d++){let g=(d+.5)/l*Math.PI*2,_=Bt(a,.62+.4*Math.max(0,Math.cos(g)));i.tri(h(e,d),h(n,d+1),h(n,d),_),i.tri(h(e,d),h(e,d+1),h(n,d+1),_)}for(let d of[e,n]){let g=t(d,s),_=[g[0],r,g[1]];for(let m=0;m<l;m++)i.tri(_,h(d,m),h(d,m+1),f)}}function Ve(i,t,e,n,s,r,o={}){let a=typeof n=="number"?()=>n:g=>Math.max(e+.002,n(g[0],g[1])),c=o.aoFrom??e,l=o.fold??Wt,f=g=>.5+.5*Math.min(1,Math.max(0,(g-c)/1.6)),u=(o.holes??[]).map(g=>rv(g)>0?[...g].reverse():g),h=u.length?[...t,...u.flat()]:t,d=o.topFace===!1&&!o.bottom?[]:qs(t,u);if(o.topFace!==!1){let g=new ht(r);for(let[_,m,p]of d){let v=h[_],S=h[m],b=h[p];i.tri([v[0],a(v),v[1]],[b[0],a(b),b[1]],[S[0],a(S),S[1]],g,g,g,void 0,o.topFold??l)}}if(o.bottom){let g=Bt(s,.55);for(let[_,m,p]of d){let v=h[_],S=h[m],b=h[p];i.tri([v[0],e,v[1]],[S[0],e,S[1]],[b[0],e,b[1]],g,g,g,void 0,l)}}for(let g of[t,...u])for(let _=0;_<g.length;_++){let m=g[_],p=g[(_+1)%g.length],v=p[0]-m[0],S=p[1]-m[1],b=Math.hypot(v,S);if(b<1e-6||o.skipSide?.(m,p))continue;let T=.8+.28*((S/b*Ol[0]-v/b*Ol[1]+1)/2),R=a(m),x=a(p),y=Bt(s,f(e)*T),E=Bt(s,f(R)*T),L=Bt(s,f(x)*T);i.tri([m[0],e,m[1]],[m[0],R,m[1]],[p[0],x,p[1]],y,E,L,void 0,l),i.tri([m[0],e,m[1]],[p[0],x,p[1]],[p[0],e,p[1]],y,L,y,void 0,l)}}var D={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},xt=Bt(5995775,.3),$t=Bt(5995775,.17),Xt=Bt(3662079,.45),Vu=class i{buf;lines;tf;mirrored;constructor(t,e,n){this.buf=t,this.lines=e,this.tf=n,this.mirrored=op(n)}rotated(t,e,n){let s=n*ji,r=Math.cos(s),o=Math.sin(s),a=this.tf;return new i(this.buf,this.lines,(c,l)=>a(t+(c-t)*r-(l-e)*o,e+(c-t)*o+(l-e)*r))}box(t,e,n,s,r,o,a,c=a,l=null){if(e-t<1e-4||o-r<1e-4||s-n<1e-4)return;let f=[this.tf(t,r),this.tf(t,o),this.tf(e,o),this.tf(e,r)];Ve(this.buf,Bu(f),n,s,a,c,{aoFrom:0,bottom:n>.05}),l&&this.outline(f,n,s,l)}loft(t,e,n,s,r,o=r,a=null){if(s-n<1e-4)return;let c=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])],l=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])];if(c!==Bu(c)&&(c.reverse(),l.reverse()),jd(this.buf,c,l,n,s,r,o),a)for(let f=0;f<4;f++)this.line(l[f],l[(f+1)%4],s,s,a),this.line(c[f],l[f],n,s,a)}pad(t,e,n,s,r,o,a,c=a,l=.03,f=null){if(l=Math.min(l,(e-t)/2-.005,(o-r)/2-.005,(s-n)/2),l<.008)return this.box(t,e,n,s,r,o,a,c,f);this.loft([t+l,e-l,r+l,o-l],[t,e,r,o],n,n+l,a),s-n-2*l>.005&&this.box(t,e,n+l,s-l,r,o,a,a,f),this.loft([t,e,r,o],[t+l,e-l,r+l,o-l],s-l,s,a,c)}lyingCyl(t,e,n,s,r,o,a,c,l=c,f=12,u=null){let h=Math.min(a,r-s)/2;if(h<1e-4||o<1e-4)return;let d=(s+r)/2,g=t==="x"?e:n,_=t==="x"?n:e,m=(v,S)=>t==="x"?this.tf(v,S):this.tf(S,v),p=this.buf.p.length;if(tp(this.buf,m,g-o/2,g+o/2,_,d,h,c,l,f),this.mirrored&&lp(this.buf,p),u)for(let v of[g-o/2,g+o/2])for(let S=0;S<f;S++){let b=S/f*Math.PI*2,M=(S+1)/f*Math.PI*2;this.line(m(v,_+Math.sin(b)*h),m(v,_+Math.sin(M)*h),d+Math.cos(b)*h,d+Math.cos(M)*h,u)}}cyl(t,e,n,s,r,o,a=o,c=10,l=null){let f=[];for(let u=0;u<c;u++){let h=u/c*Math.PI*2;f.push(this.tf(t+Math.cos(h)*n,e+Math.sin(h)*n))}if(Ve(this.buf,Bu(f),s,r,o,a,{aoFrom:0,bottom:s>.05}),l)for(let u=0;u<c;u++)this.line(f[u],f[(u+1)%c],r,r,l)}seg(t,e,n,s,r,o,a=xt){this.line(this.tf(t,n),this.tf(s,o),e,r,a)}line(t,e,n,s,r){this.lines.seg([t[0],n,t[1]],[e[0],s,e[1]],r,Wt)}outline(t,e,n,s){for(let r=0;r<4;r++){let o=t[r],a=t[(r+1)%4];this.line(o,a,n,n,s),this.line(o,o,e,n,s)}}};function op(i){let t=i(0,0),e=i(1,0),n=i(0,1);return(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0])<0}function Bu(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];t+=n[0]*s[1]-s[0]*n[1]}return t>=0?i:[...i].reverse()}function ts(i,t,e,n,s,r,o=D.metal,a=!1){let c=t/2-r-s,l=e/2-r-s;for(let f of[-1,1])for(let u of[-1,1]){let h=f*c,d=u*l;a?i.loft([h-s*.3,h+s*.3,d-s*.3,d+s*.3],[h-s/2,h+s/2,d-s/2,d+s/2],0,n,o):i.box(h-s/2,h+s/2,0,n,d-s/2,d+s/2,o)}}function so(i,t,e,n,s,r,o,a=null,c=!1){let l=(e-t)/o;for(let f=1;f<o;f++){let u=t+l*f;i.seg(u,n,r,u,s,r,$t)}for(let f=0;f<o;f++){let u=t+l*(f+.5),h=a??s-.08;if(c)i.seg(u-Math.min(.1,l/4),h,r+.012,u+Math.min(.1,l/4),h,r+.012,Xt);else{let d=o>1?u+(f%2?-l/2+.06:l/2-.06):u+l/2-.06;i.seg(d,h-.08,r+.012,d,h+.08,r+.012,Xt)}}}function ep(i,t,e,n,s){let r=-t/2,o=t/2,a=-e/2,c=e/2,l=Math.min(.2,t*.12),f=n*.5,u=Math.min(.24,e*.28);ts(i,t,e,.07,.05,.05,D.wood,!0),i.pad(r,o,.07,f-.08,a+.02,c,D.fabric,D.fabricTop,.04,xt),i.loft([r,o,a,a+u],[r+.01,o-.01,a,a+u*.5],f-.08,n,D.fabric,D.fabricTop,xt),i.pad(r,r+l,f-.08,n*.72,a+.02,c-.02,D.fabric,D.fabricTop,.04,xt),i.pad(o-l,o,f-.08,n*.72,a+.02,c-.02,D.fabric,D.fabricTop,.04,xt);let d=(o-l-(r+l))/s;for(let g=0;g<s;g++){let _=r+l+d*g+.02,m=_+d-.04;i.pad(_,m,f-.08,f+.05,a+u+.02,c-.06,D.cushion,D.cushion,.04),i.loft([_+.01,m-.01,a+u*.55,a+u+.14],[_+.03,m-.03,a+u*.4,a+u*.4+.06],f+.03,n*.93,D.cushion)}}function np(i,t,e,n,s){let r=-t/2,o=t/2,a=-e/2,c=e/2,l=Math.max(.3,Math.min(.95,e*.5,t*(s?.34:.45))),f=Math.min(.24,l*.28),u=Math.min(.2,l*.24),h=n*.5,d=n*.72,g=s?[-1,1]:[-1],_=(x,y)=>i.loft([x-.015,x+.015,y-.015,y+.015],[x-.025,x+.025,y-.025,y+.025],0,.07,D.wood);_(r+.06,a+.06),_(o-.06,a+.06),s||_(o-.06,a+l-.06);for(let x of g)_(x*(t/2-.06),c-.06),_(x*(t/2-l+.06),c-.06);i.pad(r,o,.07,h-.08,a+.02,a+l,D.fabric,D.fabricTop,.04,xt);for(let x of g){let[y,E]=x<0?[r+.02,r+l]:[o-l,o-.02];i.pad(y,E,.07,h-.08,a+l-.02,c,D.fabric,D.fabricTop,.04,xt)}i.loft([r,o,a,a+f],[r+.01,o-.01,a,a+f*.5],h-.08,n,D.fabric,D.fabricTop,xt);for(let x of g)x<0?i.loft([r,r+f,a+f,c],[r,r+f*.5,a+f,c-.01],h-.08,n,D.fabric,D.fabricTop,xt):i.loft([o-f,o,a+f,c],[o-f*.5,o,a+f,c-.01],h-.08,n,D.fabric,D.fabricTop,xt);for(let x of g){let[y,E]=x<0?[r+f,r+l]:[o-l,o-f];i.pad(y,E,h-.08,d,c-u,c,D.fabric,D.fabricTop,.04,xt)}s||i.pad(o-u,o,h-.08,d,a+.02,a+l-.02,D.fabric,D.fabricTop,.04,xt);let m=r+f,p=s?o-f:o-u,v=Math.max(1,Math.round((p-m)/.62)),S=(p-m)/v;for(let x=0;x<v;x++){let y=m+S*x+.02,E=y+S-.04;i.pad(y,E,h-.08,h+.05,a+f+.02,a+l-.04,D.cushion,D.cushion,.04),i.loft([y+.01,E-.01,a+f*.55,a+f+.14],[y+.03,E-.03,a+f*.4,a+f*.4+.06],h+.03,n*.93,D.cushion)}let b=a+l,M=c-u;if(M-b<.2)return;let T=Math.max(1,Math.round((M-b)/.62)),R=(M-b)/T;for(let x of g)for(let y=0;y<T;y++){let E=b+R*y+.02,L=E+R-.04;x<0?(i.pad(r+f+.02,r+l-.04,h-.08,h+.05,E,L,D.cushion,D.cushion,.04),i.loft([r+f*.55,r+f+.14,E+.01,L-.01],[r+f*.4,r+f*.4+.06,E+.03,L-.03],h+.03,n*.93,D.cushion)):(i.pad(o-l+.04,o-f-.02,h-.08,h+.05,E,L,D.cushion,D.cushion,.04),i.loft([o-f-.14,o-f*.55,E+.01,L-.01],[o-f*.4-.06,o-f*.4,E+.03,L-.03],h+.03,n*.93,D.cushion))}}function ov(i,t,e,n){let s=-e/2,r=e/2,o=-t/2,a=t/2,c=Math.min(.32,n*.36);ts(i,t,e,.08,.06,.03,D.wood,!0),i.box(o,a,.08,c,s+.06,r,D.wood,D.woodTop,xt),i.pad(o+.03,a-.03,c,c+.2,s+.08,r-.03,D.white,D.whiteTop,.03),i.box(o,a,.08,n-.05,s,s+.07,D.wood,D.woodTop,xt),i.box(o,a,n-.05,n,s,s+.09,D.wood,D.woodTop,$t);let l=c+.2,f=s+(e-.1)*.36;i.pad(o+.01,a-.01,l-.1,l+.05,f,r-.01,D.cushion,D.fabricTop,.025,$t),i.lyingCyl("x",0,f+.05,l-.02,l+.09,t-.02,.1,D.cushion,D.fabricTop,8);let u=t>1.2?2:1,h=(t-.2)/u;for(let d=0;d<u;d++){let g=o+.1+h*d,_=s+.12,m=Math.min(.42,e*.2),p=.1;i.loft([g+.03+p,g+h-.03-p,_+p*.5,_+m-p*.5],[g+.03,g+h-.03,_,_+m],l,l+.06,D.whiteTop),i.loft([g+.03,g+h-.03,_,_+m],[g+.03+p,g+h-.03-p,_+p*.5,_+m-p*.5],l+.06,l+.12,D.whiteTop,D.whiteTop,$t)}}function av(i,t,e,n){let s=Math.min(.46,n*.52);ts(i,t,e,s-.04,.035,.02,D.wood,!0),i.box(-t/2,t/2,s-.04,s,-e/2,e/2,D.wood,D.woodTop,xt),i.pad(-t/2+.02,t/2-.02,s,s+.04,-e/2+.05,e/2-.03,D.cushion,D.cushion,.015),i.loft([-t/2,t/2,-e/2+.02,-e/2+.07],[-t/2+.02,t/2-.02,-e/2,-e/2+.03],s,n,D.wood,D.woodTop,xt)}function lv(i,t,e,n){ts(i,t,e,n-.04,.06,.05,D.wood,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,D.wood,D.woodTop,Xt),i.box(-t/2+.08,t/2-.08,n-.1,n-.04,-e/2+.08,e/2-.08,D.body)}function cv(i,t,e,n){let s=-t/2,r=t/2;i.box(s,r,n-.035,n,-e/2,e/2,D.wood,D.woodTop,xt),i.box(s,s+.03,0,n-.035,-e/2+.03,e/2-.03,D.metal);let o=Math.min(.42,t*.32);i.box(r-o,r,0,n-.035,-e/2+.03,e/2-.02,D.body,D.bodyTop,xt);let a=e/2-.02;for(let c of[n*.35,n*.66])i.seg(r-o,c,a,r,c,a,$t);for(let c of[n*.2,n*.5,n*.82])i.seg(r-o/2-.07,c,a+.012,r-o/2+.07,c,a+.012,Xt);i.box(-.3,.3,n+.08,n+.42,-e/2+.08,-e/2+.11,D.dark,D.dark,Xt),i.box(-.03,.03,n,n+.1,-e/2+.09,-e/2+.13,D.metal)}function Ni(i,t,e,n,s,r=null,o=!1){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,D.body,D.bodyTop,xt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,D.dark),so(i,-t/2,t/2,.08,n,e/2-.02,s,r,o)}function uv(i,t,e,n){i.box(-t/2,-t/2+.025,0,n,-e/2,e/2,D.wood,D.woodTop,xt),i.box(t/2-.025,t/2,0,n,-e/2,e/2,D.wood,D.woodTop,xt),i.box(-t/2+.025,t/2-.025,0,n,-e/2,-e/2+.015,D.body);let r=Math.max(2,Math.round(n/.38));for(let o=0;o<=r;o++){let a=Math.min(n-.025,n/r*o);if(i.box(-t/2+.025,t/2-.025,a,a+.025,-e/2+.015,e/2,D.wood,D.woodTop,$t),o<r){let c=-t/2+.025+.04,l=o*3;for(;c<t/2-.025-.12;){let f=.03+l*7%5*.008,u=n/r-.025-.08-l*5%4*.025;l*11%7!==0&&i.box(c,c+f,a+.025,a+.025+u,-e/2+.04,e/2-.05,l%3?D.fabric:D.cushion,D.fabricTop),c+=f+.006,l++}}}}function hv(i,t,e,n){let s=Math.max(1,Math.round(t/.6));Ni(i,t,e-.02,n-.04,s,n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,D.whiteTop,D.whiteTop,xt)}function fv(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,D.white,D.whiteTop,xt);let s=n*.62;i.seg(-t/2,s,e/2,t/2,s,e/2,$t);let r=t/2-.06;i.seg(r,s+.08,e/2+.015,r,s+.4,e/2+.015,Xt),i.seg(r,s-.4,e/2+.015,r,s-.08,e/2+.015,Xt)}function dv(i,t,e,n){let s=e/2-pv;i.box(-t/2,t/2,.02,n,-e/2,s,D.body,D.bodyTop,xt),i.box(-t/2+.05,t/2-.05,0,.02,-e/2+.05,s-.05,D.dark);for(let r of[.35,.7,1.05,1.4])r>n-.15||(i.seg(-t/2+.03,r,s+.001,-.03,r,s+.001,$t),i.seg(.03,r,s+.001,t/2-.03,r,s+.001,$t))}var pv=.06;function mv(i,t,e,n){Ni(i,t,e-.02,n-.04,1,n-.24,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,D.dark,D.dark,xt);for(let[s,r,o]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=s*t/.6,c=r*e/.62;i.cyl(a,c,o,n,n+.004,D.dark,1451583,12,Xt)}}function gv(i,t,e,n){Ni(i,t,e-.02,n-.04,Math.max(1,Math.round(t/.45)),n-.2);let s=Math.min(.5,t-.2);i.box(-t/2,-s/2,n-.04,n,-e/2,e/2,D.whiteTop,D.whiteTop,xt),i.box(s/2,t/2,n-.04,n,-e/2,e/2,D.whiteTop,D.whiteTop,xt),i.box(-s/2,s/2,n-.04,n,-e/2,-e/2+.1,D.whiteTop,D.whiteTop),i.box(-s/2,s/2,n-.04,n,e/2-.08,e/2,D.whiteTop,D.whiteTop),i.box(-s/2,s/2,n-.2,n-.17,-e/2+.1,e/2-.08,D.metal,D.metal,Xt),i.cyl(0,-e/2+.05,.02,n,n+.28,D.metal,D.metal,8),i.box(-.015,.015,n+.24,n+.28,-e/2+.05,-e/2+.22,D.metal)}function xv(i,t,e,n){i.box(-t/2,t/2,0,n-.02,-e/2,e/2,D.white,D.whiteTop,xt),i.box(-t/2,t/2,n-.02,n,-e/2,-e/2+.07,D.whiteTop),i.box(-t/2,t/2,n-.02,n,e/2-.07,e/2,D.whiteTop),i.box(-t/2,-t/2+.07,n-.02,n,-e/2+.07,e/2-.07,D.whiteTop),i.box(t/2-.07,t/2,n-.02,n,-e/2+.07,e/2-.07,D.whiteTop),i.box(-t/2+.07,t/2-.07,n-.03,n-.02,-e/2+.07,e/2-.07,D.glass,D.glass,Xt),i.cyl(-t/2+.04,0,.02,n,n+.12,D.metal,D.metal,8)}function _v(i,t,e,n){i.box(-t/2,t/2,0,.05,-e/2,e/2,D.whiteTop,D.whiteTop,xt),i.cyl(0,0,.04,.05,.052,D.metal,D.metal,8);for(let[s,r,o,a]of[[-t/2,e/2,t/2,e/2],[t/2,-e/2,t/2,e/2]])i.seg(s,.05,r,o,.05,a,Xt),i.seg(s,n,r,o,n,a,Xt),i.seg(o,.05,a,o,n,a,Xt);i.cyl(-t/2+.06,-e/2+.06,.015,.05,n-.05,D.metal,D.metal,6),i.cyl(-t/2+.2,-e/2+.2,.1,n-.08,n-.06,D.metal,D.metal,12,Xt)}function bv(i,t,e,n){let s=Math.min(.18,e*.3);i.box(-t/2,t/2,.45,n,-e/2,-e/2+s,D.white,D.whiteTop,xt),i.box(-t*.3,t*.3,0,.36,-e/2+s-.02,e/2-.12,D.white,D.whiteTop),i.cyl(0,e/2-.26,Math.min(t/2,.19),.36,.41,D.white,D.whiteTop,12,xt),i.box(-t/2+.02,t/2-.02,.41,.43,-e/2+s,-e/2+s+.05,D.whiteTop)}function vv(i,t,e,n){Ni(i,t,e-.02,n-.12,t>.8?2:1,n-.3),i.box(-t/2,t/2,n-.12,n,-e/2,e/2,D.white,D.whiteTop,xt),i.box(-t/2+.07,t/2-.07,n-.005,n,-e/2+.12,e/2-.06,D.glass,D.glass,Xt),i.cyl(0,-e/2+.06,.018,n,n+.2,D.metal,D.metal,8),i.box(-t/2+.04,t/2-.04,n+.35,n+1,-e/2,-e/2+.02,D.glass,D.glass,Xt)}function yv(i,t,e,n){Ni(i,t,e,n,Math.max(2,Math.round(t/.6)),n*.55,!0);let s=Math.min(t*.8,1.45),r=s*.56;i.box(-.1,.1,n,n+.02,-e/2+.08,-e/2+.24,D.metal),i.box(-.02,.02,n+.02,n+.12,-e/2+.14,-e/2+.18,D.metal),i.box(-s/2,s/2,n+.1,n+.1+r,-e/2+.12,-e/2+.16,D.dark,D.dark,Xt)}function Mv(i,t,e,n){let s=Math.min(t,e)/2,r=Math.min(.4,n*.34);i.cyl(0,0,s*.62,0,r,D.pot,D.pot,10,xt),i.cyl(0,0,s*.08,r,n*.55,D.wood,D.wood,6);let o=4;for(let a=0;a<o;a++){let c=a/(o-1),l=s*(.95-.55*c),f=r+(n-r)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,l,f,f+(n-r)*.16,D.plant,D.plantTop,8,a===o-1?$t:null)}}function Sv(i,t,e){i.box(-t/2,t/2,0,.012,-e/2,e/2,D.fabric,D.fabricTop);let n=Math.min(.12,Math.min(t,e)*.08);for(let[s,r,o,a]of[[-t/2+n,-e/2+n,t/2-n,-e/2+n],[t/2-n,-e/2+n,t/2-n,e/2-n],[t/2-n,e/2-n,-t/2+n,e/2-n],[-t/2+n,e/2-n,-t/2+n,-e/2+n]])i.seg(s,.014,r,o,.014,a,xt)}function wv(i,t,e,n){let s=Math.max(3,Math.round(n/.18)),r=n/s,o=e/s;for(let f=0;f<s;f++){let u=e/2-o*f,h=u-o,d=r*(f+1);i.box(-t/2,t/2,0,d,h,u,D.wood,D.woodTop),i.seg(-t/2,d,u,t/2,d,u,xt)}i.seg(-t/2,0,e/2,-t/2,r,e/2,xt);for(let f of[-t/2,t/2])i.seg(f,r,e/2,f,n,-e/2+o,$t);let a=.9,c=t/2-.03,l=Math.max(1,s-4);i.seg(c,r+a,e/2-o/2,c,r*l+a,e/2-o*(l-.5),Xt);for(let f=0;f<l;f+=3){let u=e/2-o*(f+.5),h=r*(f+1);i.seg(c,h,u,c,h+a,u,$t)}}function Tv(i,t,e,n){let{k:s,steps1:r,steps2:o,fw:a,landing:c,run:l,rise:f}=Ad(t,e,n),u=-t/2,h=-t/2+a,d=t/2-a,g=t/2,_=-e/2+c;for(let R=0;R<r;R++){let x=e/2-l*R,y=f*(R+1);i.box(u,h,0,y,x-l,x,D.wood,D.woodTop),i.seg(u,y,x,h,y,x,xt)}i.seg(u,0,e/2,u,f,e/2,xt);let m=f*s,p=.2;i.box(u,h,0,m,-e/2,_,D.wood,D.woodTop),i.box(h,g,Math.max(0,m-p),m,-e/2,_,D.wood,D.woodTop),i.seg(u,m,_,h,m,_,xt);for(let R=0;R<o;R++){let x=_+l*R,y=f*(s+1+R);i.box(d,g,Math.max(0,y-f-p),y,x,x+l,D.wood,D.woodTop),i.seg(d,y,x,g,y,x,xt)}i.seg(u,f,e/2,u,m,_,$t),i.seg(g,m,_,g,n,_+l*(o-1),$t);let v=.9,S=h-.03,b=d+.03,M=_-.03,T=Math.max(1,o-4);i.seg(S,f+v,e/2-l/2,S,m+v,M,Xt),i.seg(S,m+v,M,b,m+v,M,Xt),i.seg(b,m+v,M,b,f*(s+T)+v,_+l*(T-.5),Xt);for(let R=0;R<r;R+=3){let x=e/2-l*(R+.5);i.seg(S,f*(R+1),x,S,f*(R+1)+v,x,$t)}for(let R of[S,b])i.seg(R,m,M,R,m+v,M,$t);for(let R=2;R<T;R+=3){let x=_+l*(R+.5);i.seg(b,f*(s+1+R),x,b,f*(s+1+R)+v,x,$t)}}function Ev(i,t,e,n){ts(i,t,e,.12,.03,.04,D.metal),i.box(-t/2,t/2,.12,n,-e/2,e/2-.02,D.wood,D.woodTop,xt),so(i,-t/2,t/2,.12,n,e/2-.02,Math.max(2,Math.round(t/.45)),n-.1,!0)}function Av(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2-.02,D.wood,D.woodTop,xt),i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.06,D.dark);let s=Math.max(3,Math.round((n-.06)/.22)),r=e/2-.02;for(let o=1;o<s;o++){let a=.06+(n-.06)/s*o;i.seg(-t/2,a,r,t/2,a,r,$t)}for(let o=0;o<s;o++){let a=.06+(n-.06)/s*(o+.5);i.seg(-.08,a,r+.012,.08,a,r+.012,Xt)}}function Rv(i,t,e,n){i.box(-t/2,t/2,0,.45,-e/2,e/2,D.wood,D.woodTop,xt),so(i,-t/2,t/2,.02,.45,e/2,Math.max(2,Math.round(t/.5)),.38,!0),i.box(-t/2,t/2,.45,n,-e/2,-e/2+.03,D.body,D.bodyTop,xt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,D.wood,D.woodTop,xt);let s=Math.max(2,Math.round(t/.25));for(let r=0;r<s;r++){let o=-t/2+t/s*(r+.5);i.box(o-.015,o+.015,n-.32,n-.28,-e/2+.03,-e/2+.1,D.metal,D.metal)}}function ip(i,t,e,n,s){let o=Math.min(.5,s?e*.4:e),a=.08;i.box(-t/2,t/2,0,.45-.06,-e/2,-e/2+o,D.wood,D.woodTop,xt),i.box(-t/2,t/2,0,n,-e/2,-e/2+a,D.wood,D.woodTop,xt),i.box(-t/2+(s?o:.02),t/2-.02,.45-.06,.45+.02,-e/2+a,-e/2+o,D.cushion,D.cushion,$t),s&&(i.box(-t/2,-t/2+o,0,.45-.06,-e/2+o,e/2,D.wood,D.woodTop,xt),i.box(-t/2,-t/2+a,0,n,-e/2+a,e/2,D.wood,D.woodTop,xt),i.box(-t/2+a,-t/2+o,.45-.06,.45+.02,-e/2+a,e/2-.02,D.cushion,D.cushion,$t))}function Cv(i,t,e,n){let s=Math.min(t,e)/2;i.cyl(0,0,s*.8,0,.02,D.metal,D.metal,12),i.cyl(0,0,.025,.02,n-.05,D.metal,D.metal,6),i.cyl(0,0,s*.75,n*.35,n*.35+.015,D.metal,D.metal,12,$t),i.cyl(0,0,s,n-.05,n,D.cushion,D.fabricTop,14,xt)}function Pv(i,t,e,n){let s=Math.min(t,e)/2;i.box(-s,s,.04,.08,-.03,.03,D.metal),i.box(-.03,.03,.04,.08,-s,s,D.metal),i.cyl(0,0,.06,.02,.1,D.dark,D.dark,8),i.cyl(0,0,.025,.1,.44,D.metal,D.metal,6),i.box(-s*.75,s*.75,.44,.52,-s*.7,s*.75,D.fabric,D.cushion,xt),i.box(-s*.7,s*.7,.58,n,-s*.78,-s*.62,D.fabric,D.fabricTop,xt),i.box(-.03,.03,.5,.62,-s*.72,-s*.62,D.metal)}function Iv(i,t,e,n){ts(i,t,e,.08,.04,.05,D.wood),i.box(-t/2,t/2,.08,n,-e/2,e/2,D.fabric,D.cushion,xt)}function Lv(i,t,e,n){i.box(-t/2,t/2,1.45,1.45+n,-e/2,e/2-.02,D.body,D.bodyTop,xt),so(i,-t/2,t/2,1.45,1.45+n,e/2-.02,Math.max(1,Math.round(t/.5)),1.45+.08)}function Dv(i,t,e,n){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,D.body,D.bodyTop,xt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,D.dark);let s=e/2-.02;i.box(-t/2+.03,t/2-.03,.85,1.45,s,s+.01,D.dark,D.dark,Xt),i.seg(-t/2+.08,1.4,s+.02,t/2-.08,1.4,s+.02,Xt);for(let r of[.85,1.45])i.seg(-t/2,r,s,t/2,r,s,$t);i.seg(t/2-.06,.5,s+.012,t/2-.06,.7,s+.012,Xt),i.seg(t/2-.06,1.6,s+.012,t/2-.06,1.8,s+.012,Xt)}function Fv(i,t,e,n){let s=e-.3;i.box(-t/2+.05,t/2-.05,.08,n-.04,-e/2+.02,-e/2+s,D.body,D.bodyTop,xt),i.box(-t/2+.07,t/2-.07,0,.08,-e/2+.04,-e/2+s-.04,D.dark),so(i,-t/2+.05,t/2-.05,.08,n-.04,-e/2+s,Math.max(2,Math.round(t/.6)),n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,D.whiteTop,D.whiteTop,xt)}function Nv(i,t,e,n){i.box(-t/2,t/2,.02,n-.04,-e/2,e/2-.02,D.body,D.bodyTop,xt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,D.dark),i.seg(-t/2+.08,n-.12,e/2-.008,t/2-.08,n-.12,e/2-.008,Xt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,D.whiteTop,D.whiteTop,xt)}function sp(i,t,e,n,s){i.box(-t/2,t/2,0,n,-e/2,e/2-.02,D.white,D.whiteTop,xt);let r=e/2-.012;i.seg(-t/2,n-.14,r,t/2,n-.14,r,$t),i.seg(t/2-.16,n-.07,r,t/2-.08,n-.07,r,Xt);let o=(n-.14)/2+.04,a=Math.min(t*.36,(n-.2)*.42),c=20;for(let l=0;l<c;l++){let f=l/c*Math.PI*2,u=(l+1)/c*Math.PI*2;i.seg(Math.cos(f)*a,o+Math.sin(f)*a,r,Math.cos(u)*a,o+Math.sin(u)*a,r,Xt),s||i.seg(Math.cos(f)*a*.72,o+Math.sin(f)*a*.72,r,Math.cos(u)*a*.72,o+Math.sin(u)*a*.72,r,$t)}}function Uv(i,t,e,n){for(let o of[-1,1])for(let a of[-1,1])i.box(o*(t/2)-(o>0?.05:0),o*(t/2)+(o<0?.05:0),0,n,a*(e/2)-(a>0?.05:0),a*(e/2)+(a<0?.05:0),D.wood,D.woodTop);for(let o of[.25,n-.55])i.box(-t/2,t/2,o,o+.08,-e/2,e/2,D.wood,D.woodTop,xt),i.box(-t/2+.04,t/2-.04,o+.08,o+.24,-e/2+.05,e/2-.05,D.white,D.whiteTop,$t),i.box(-t/2+.05,t/2-.05,o+.24,o+.33,-e/2+.08,-e/2+.4,D.whiteTop,D.whiteTop);i.box(-t/2,t/2,n-.2,n-.15,e/2-.05,e/2,D.wood,D.woodTop);let r=t/2-.35;for(let o of[r-.18,r+.18])i.seg(o,0,e/2+.02,o,n-.15,e/2+.02,xt);for(let o=.3;o<n-.2;o+=.28)i.seg(r-.18,o,e/2+.02,r+.18,o,e/2+.02,$t)}function Ov(i,t,e,n){let s=Math.min(t,e)/2;i.cyl(0,0,s*.4,0,.03,D.metal,D.metal,12),i.cyl(0,0,.05,.03,n-.04,D.wood,D.wood,8),i.cyl(0,0,s,n-.04,n,D.wood,D.woodTop,20,xt)}function Bv(i,t,e,n){ts(i,t,e,n-.03,.04,.03,D.wood),i.box(-t/2,t/2,n-.03,n,-e/2,e/2,D.wood,D.woodTop,xt),i.box(-t/2+.05,t/2-.05,.1,.13,-e/2+.05,e/2-.05,D.body,D.bodyTop,$t)}function kv(i,t,e,n){let s=1.3-n/2;i.box(-.12,.12,s+n*.3,s+n*.7,-e/2,-e/2+.03,D.metal),i.box(-t/2,t/2,s,s+n,-e/2+.03,e/2,D.dark,D.dark,Xt)}function Vv(i,t,e,n){let s=Kv;i.box(-t/2+.05,-t/2+.08,0,s,-e/2,-e/2+.03,D.metal),i.box(t/2-.08,t/2-.05,0,s,-e/2,-e/2+.03,D.metal),i.box(-t/2,t/2,s,s+n,-e/2+.02,e/2,D.white,D.whiteTop,xt);let r=Math.max(3,Math.round(t/.1));for(let o=1;o<r;o++){let a=-t/2+t/r*o;i.seg(a,s+.03,e/2+.002,a,s+n-.03,e/2+.002,$t)}}function Ys(i,t,e,n,s,r=20){for(let o=0;o<r;o++){let a=o/r*Math.PI*2,c=(o+1)/r*Math.PI*2;i.seg(t+Math.cos(a)*n,e+Math.sin(a)*n,s,t+Math.cos(c)*n,e+Math.sin(c)*n,s,Xt)}}function zv(i,t,e,n,s){let o=e/2;if(s==="slim"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,D.dark,D.body,xt),i.seg(-t*.25,1.1+n*.15,o+.004,-t*.25,1.1+n*.85,o+.004,Xt),i.box(-t*.1,t*.3,1.1+n*.7,1.1+n*.85,o,o+.005,D.dark);return}if(s==="hybrid"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,D.white,D.whiteTop,xt),Ys(i,0,1.1+n*.66,Math.min(t,n)*.22,o+.004),i.seg(-t*.08,1.1+n*.66,o+.005,t*.08,1.1+n*.66,o+.005,Xt);for(let a of[-1,1])Ys(i,a*t*.22,1.1+n*.2,Math.min(t,n)*.1,-e/2-.002,12);return}i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,D.white,D.whiteTop,xt),i.box(-t*.28,t*.28,1.1+n*.58,1.1+n*.82,e/2,e/2+.006,D.dark),i.seg(-t*.3,1.1+n*.45,e/2+.004,t*.3,1.1+n*.45,e/2+.004,Xt);for(let a of[-1,1])for(let c=1;c<6;c++)i.seg(a*t/2+a*.002,1.1+n*c/6,-e/2+.03,a*t/2+a*.002,1.1+n*c/6,e/2-.03,$t)}function Gv(i,t,e,n){let s=Math.min(e,n)*.32;i.box(-t/2,t/2,0,.03,-e/2,e/2,D.dark),i.box(-t/2,t*.1,.05,.05+s*2,-s,s,D.metal,D.metal,xt);for(let o of[-t*.4,-t*.25,-t*.1])i.seg(o,.05+s*2+.003,-s,o,.05+s*2+.003,s,$t);i.cyl(t*.28,0,Math.min(t*.2,e*.45),.03,n*.82,D.dark,D.body,14,xt),i.cyl(t*.28,0,Math.min(t*.2,e*.45)*.9,n*.82,n,D.glass,D.glass,14);let r=Math.min(t*.2,e*.45)*.95;for(let o=0;o<16;o++){let a=o/16*Math.PI*2,c=(o+1)/16*Math.PI*2;i.seg(t*.28+Math.cos(a)*r,n*.83,Math.sin(a)*r,t*.28+Math.cos(c)*r,n*.83,Math.sin(c)*r,Xt)}}function Hv(i,t,e,n,s){let r=Math.min(t,e)/2;if(i.cyl(0,0,r*.95,0,n*.08,D.dark,D.dark,16),i.cyl(0,0,r,n*.08,n*.78,D.dark,D.body,18,xt),i.cyl(0,0,r*.75,n*.78,n*.84,D.dark,D.body,16),s==="side6"){let a=r*.9;i.box(a,a+.12,n*.3,n*.66,-.07,.07,D.dark,D.metal,xt),Ys(i,a+.06,n*.56,.05,.075,16),i.box(a+.04,a+.08,n*.66,n*.72,-.015,.015,D.dark,D.body);return}i.cyl(0,0,r*.45,n*.84,n*.95,D.dark,D.metal,16,xt);let o=r*.4;for(let a=0;a<16;a++){let c=a/16*Math.PI*2,l=(a+1)/16*Math.PI*2;i.seg(Math.cos(c)*o,n*.955,Math.sin(c)*o,Math.cos(l)*o,n*.955,Math.sin(l)*o,Xt)}i.box(-.02,.02,n*.95,n,-r*.35,r*.35,D.dark,D.body)}function Wv(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2,D.white,D.whiteTop,xt);for(let a of[-t*.4,t*.4])i.box(a-.03,a+.03,0,.06,-e/2+.02,e/2-.02,D.dark);let s=Math.min(n*.38,t*.3),r=-t*.15,o=n*.53;Ys(i,r,o,s,e/2+.004,24),Ys(i,r,o,s*.55,e/2+.004,16),i.seg(r-s,o,e/2+.005,r+s,o,e/2+.005,$t),i.seg(r,o-s,e/2+.005,r,o+s,e/2+.005,$t),i.box(t*.22,t*.42,n*.62,n*.8,e/2,e/2+.006,D.dark),i.seg(t*.25,n*.71,e/2+.008,t*.39,n*.71,e/2+.008,Xt);for(let a=1;a<8;a++)i.seg(t/2+.002,n*(.1+a*.1),-e/2+.03,t/2+.002,n*(.1+a*.1),e/2-.03,$t)}function Xv(i,t,e,n){i.box(-t/2,t/2,.9,.9+n*.45,-e/2,e/2,D.white,D.whiteTop,xt);for(let r of[-1,1])Ys(i,r*t*.22,.9+n*.22,Math.min(t,n)*.09,e/2+.004,12);i.seg(-t*.35,.9+n*.4,e/2+.004,t*.35,.9+n*.4,e/2+.004,Xt);for(let r of[-1,1])i.box(r*t*.25-t*.18,r*t*.25+t*.18,0,n*.5,-e/2,e/2,D.white,D.glass,$t)}function qv(i,t,e,n){let s=Td-n*.4;i.box(-t/2,t/2,s+n*.25,s+n*.6,-e*.25,e*.25,D.metal,D.metal,xt),i.box(-t*.12,t*.12,s+n*.6,s+n*.8,-e*.12,e*.12,D.dark),i.box(-t*.1,t*.45,s+n*.8,s+n,-e*.15,e*.15,D.accent,D.accent)}function Yv(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,D.dark,D.body,xt),i.box(-t/2-.01,t/2+.01,n,n+.03,-e/2-.01,e/2+.01,D.dark,D.body),i.seg(-t/2,n+.032,e/2+.01,t/2,n+.032,e/2+.01,Xt),i.seg(-t*.3,n*.55,e/2+.003,t*.3,n*.55,e/2+.003,$t)}function $v(i,t,e,n){i.box(-t/2,t/2,1,1+n,-e/2,e/2,D.dark,D.body,xt);let r=Math.min(t,n)*.28,o=1+n*.58,a=16;for(let c=0;c<a;c++){let l=c/a*Math.PI*2,f=(c+1)/a*Math.PI*2;i.seg(Math.cos(l)*r,o+Math.sin(l)*r,e/2+.003,Math.cos(f)*r,o+Math.sin(f)*r,e/2+.003,Xt)}i.box(-.015,.015,1-.35,1,e/2-.03,e/2,D.dark),i.box(-.06,.06,1-.42,1-.35,e/2-.05,e/2,D.dark,D.body)}function Zv(i,t,e,n){i.box(-t/2,t/2,.4,.4+n,-e/2,e/2,D.white,D.whiteTop,xt),i.seg(-t/2+.025,.4+.025,e/2+.003,-t/2+.025,.4+n-.025,e/2+.003,$t),i.seg(-t/2+.025,.4+n-.025,e/2+.003,t/2-.025,.4+n-.025,e/2+.003,$t),i.box(t/2-.06,t/2-.035,.4+n*.5-.05,.4+n*.5+.05,e/2,e/2+.012,D.dark),i.box(-t*.3,t*.3,.4+n*.6,.4+n*.8,e/2,e/2+.005,D.dark),i.seg(-t*.22,.4+n*.7,e/2+.008,t*.22,.4+n*.7,e/2+.008,Xt)}function Jv(i,t,e,n,s){if(s==="wall"){i.box(-t/2,t/2,.5,.5+n,-e/2,e/2,D.white,D.whiteTop,xt),i.seg(-t*.3,.5+n*.9,e/2+.004,t*.3,.5+n*.9,e/2+.004,Xt),i.seg(-t*.3,.5+n*.08,e/2+.003,t*.3,.5+n*.08,e/2+.003,$t);return}if(s==="cube"){i.box(-t/2+.01,t/2-.01,0,.03,-e/2+.01,e/2-.01,D.dark),i.box(-t/2,t/2,.03,n,-e/2,e/2,D.dark,D.body,xt),i.seg(-t*.35,n*.85,e/2+.004,t*.35,n*.85,e/2+.004,Xt),i.box(-t*.15,t*.15,n,n+.025,-.012,.012,D.dark);return}i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.02,D.dark);let r=Math.max(2,Math.round((n-.06)/.3)),o=(n-.06)/r;for(let a=0;a<r;a++)i.box(-t/2,t/2,.06+a*o+.004,.06+(a+1)*o,-e/2,e/2,D.white,D.whiteTop,xt);for(let a=0;a<5;a++){let c=.06+n*.18+a*((n-.3)/5);i.seg(-t*.04,c,e/2+.003,t*.04,c,e/2+.003,Xt)}}var Kv=.12;function Qv(i,t,e,n,s){let r=Math.min(.14,Math.max(.06,Math.min(e,n)*.15)),o=new ht(1-s,1-s,1-s),a=new ht(1,1,1),c=.003,l=[t(-e/2,-n/2),t(e/2,-n/2),t(e/2,n/2),t(-e/2,n/2)],f=[t(-e/2-r,-n/2-r),t(e/2+r,-n/2-r),t(e/2+r,n/2+r),t(-e/2-r,n/2+r)],u=d=>[d[0],c,d[1]],h=i.p.length;i.tri(u(l[0]),u(l[1]),u(l[2]),o),i.tri(u(l[0]),u(l[2]),u(l[3]),o);for(let d=0;d<4;d++){let g=(d+1)%4;i.tri(u(l[d]),u(f[d]),u(f[g]),o,a,a),i.tri(u(l[d]),u(f[g]),u(l[g]),o,a,o)}op(t)&&lp(i,h)}function ap(i,t,e,n,s=0){jv(i,t,e,n,s)}function lp(i,t){let e=(n,s,r)=>{if(n)for(let o=0;o<r;o++){let a=s+r+o,c=s+2*r+o,l=n[a];n[a]=n[c],n[c]=l}};for(let n=t;n<i.p.length;n+=9){let s=n/9;e(i.p,n,3),e(i.c,n,3),e(i.f,s*3,1),e(i.uv,s*6,2),e(i.tile,s*6,2)}}function jv(i,t,e,n,s){let r=ri(n.type)?0:s-Pl(n);if(ri(n.type)||Math.abs(r)<.001)return rp(i,t,e,n,s);let o=i.p.length,a=t.p.length;rp(i,t,s<.05?e:new Ae,n,0);for(let c=o+1;c<i.p.length;c+=3)i.p[c]+=r;for(let c=a+1;c<t.p.length;c+=3)t.p[c]+=r}function rp(i,t,e,n,s){let r=n.rotation*ji,o=Math.cos(r),a=Math.sin(r),c=n.mirror?-1:1,l=(g,_)=>[n.x+c*g*o-_*a,n.z+c*g*a+_*o],f=new Vu(i,t,l),u=Math.max(.05,n.w),h=Math.max(.05,n.d),d=Math.max(.005,n.h);switch(n.type){case"sofa":ep(f,u,h,d,Math.max(1,Math.round((u-.4)/.62)));break;case"armchair":ep(f,u,h,d,1);break;case"sofa_l":np(f,u,h,d,!1);break;case"sofa_u":np(f,u,h,d,!0);break;case"bed":ov(f,u,h,d);break;case"chair":av(f,u,h,d);break;case"table":lv(f,u,h,d);break;case"desk":cv(f,u,h,d);break;case"nightstand":Ni(f,u,h,d,1,d*.72,!0),f.seg(-u/2,d*.5,h/2-.02,u/2,d*.5,h/2-.02,$t);break;case"wardrobe":Ni(f,u,h,d,Math.max(2,Math.round(u/.5)),d*.5);break;case"shelf":uv(f,u,h,d);break;case"kitchen":hv(f,u,h,d);break;case"fridge":fv(f,u,h,d);break;case"fridge_smart":dv(f,u,h,d);break;case"stove":mv(f,u,h,d);break;case"sink":gv(f,u,h,d);break;case"bathtub":xv(f,u,h,d);break;case"shower":_v(f,u,h,d);break;case"wc":bv(f,u,h,d);break;case"washbasin":vv(f,u,h,d);break;case"tv_board":yv(f,u,h,d);break;case"plant":Mv(f,u,h,d);break;case"rug":Sv(f,u,h);return;case"stairs":wv(f,u,h,d);break;case"stairs_u":Tv(f,u,h,d);break;case"stairwell":return;case"sideboard":Ev(f,u,h,d);break;case"dresser":Av(f,u,h,d);break;case"tall_cabinet":Ni(f,u,h,d,1,d*.5);break;case"coat_rack":Rv(f,u,h,d);break;case"bench":ip(f,u,h,d,!1);break;case"corner_bench":ip(f,u,h,d,!0);break;case"bar_stool":Cv(f,u,h,d);break;case"office_chair":Pv(f,u,h,d);break;case"stool":Iv(f,u,h,d);break;case"kitchen_wall":Lv(f,u,h,d);return;case"kitchen_tall":Dv(f,u,h,d);break;case"island":Fv(f,u,h,d);break;case"worktop":f.box(-u/2,u/2,Math.max(0,d-.04),d,-h/2,h/2,D.whiteTop,D.whiteTop,xt);return;case"dishwasher":Nv(f,u,h,d);break;case"washer":sp(f,u,h,d,!1);break;case"dryer":sp(f,u,h,d,!0);break;case"bunk_bed":Uv(f,u,h,d);break;case"table_round":Ov(f,u,h,d);break;case"coffee_table":Bv(f,u,h,d);break;case"tv_wall":kv(f,u,h,d);return;case"parking":{let _=[[-u/2,-h/2],[u/2,-h/2],[u/2,h/2],[-u/2,h/2]];for(let m=0;m<4;m++)f.seg(_[m][0],.012,_[m][1],_[(m+1)%4][0],.012,_[(m+1)%4][1],$t);f.seg(-u*.15,.012,h/2-.45,0,.012,h/2-.2,xt),f.seg(0,.012,h/2-.2,u*.15,.012,h/2-.45,xt);return}case"robot_vacuum":f.box(-u*.45,u*.45,0,d,-h/2,-h/2+h*.3,D.white,D.whiteTop,xt),f.box(-u*.2,u*.2,d*.5,d*.62,-h/2+h*.3,-h/2+h*.31,D.accent);return;case"radiator":Vv(f,u,h,d);return;case"inverter":zv(f,u,h,d,n.variant??null);return;case"grid_point":Yv(f,u,h,d);break;case"wallbox":$v(f,u,h,d);return;case"pool_pump":Gv(f,u,h,d);break;case"pool_filter":Hv(f,u,h,d,n.variant??null);break;case"pool_heat_pump":Wv(f,u,h,d);break;case"pool_dosing":Xv(f,u,h,d);break;case"pool_valve":qv(f,u,h,d);return;case"meter":Zv(f,u,h,d);return;case"home_battery":if(Jv(f,u,h,d,n.variant??null),n.variant==="wall")return;break;default:{let g=ri(n.type);if(g){if(ty(f,g,u,h,d,s,null),s>.05)return}else f.box(-u/2,u/2,0,d,-h/2,h/2,D.body,D.bodyTop,xt)}}Qv(e,l,u,h,n.type==="plant"?.35:.5)}function ku(i,t){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let e=D;return(t?e[`${i}Top`]:void 0)??e[i]??null}function ty(i,t,e,n,s,r,o,a=null){let c=!!a;for(let l of t.parts){if(a&&!a(l))continue;let f=c?{...l,glow:!0,w:l.w+.006/e,d:l.d+.006/n,y:Math.max(0,l.y-.002/s),h:l.h+.004/s}:l,u=f.glow&&o!==null,h=u?o:ku(f.color,!1)??D.body,d=u?o:ku(f.top,!1)??ku(f.color,!0)??Bt(h,1.25).getHex(),g=r+f.y*s,_=r+Math.min(s,(f.y+f.h)*s),m=f.edges==="glow"?Qi:f.edges==="faint"?$t:f.edges?xt:null,p=f.rot?i.rotated(f.x*e,f.z*n,f.rot):i;if(f.shape==="cyl"&&(f.axis==="x"||f.axis==="z"))p.lyingCyl(f.axis,f.x*e,f.z*n,g,_,f.axis==="x"?f.w*e:f.d*n,f.axis==="x"?f.d*n:f.w*e,h,d,14,m);else if(f.shape==="cyl")p.cyl(f.x*e,f.z*n,Math.min(f.w*e,f.d*n)/2,g,_,h,d,14,m);else if(f.shape==="loft"){let v=f.tx??f.x,S=f.tz??f.z,b=f.tw??f.w,M=f.td??f.d;p.loft([(f.x-f.w/2)*e,(f.x+f.w/2)*e,(f.z-f.d/2)*n,(f.z+f.d/2)*n],[(v-b/2)*e,(v+b/2)*e,(S-M/2)*n,(S+M/2)*n],g,_,h,d,m)}else p.box((f.x-f.w/2)*e,(f.x+f.w/2)*e,g,_,(f.z-f.d/2)*n,(f.z+f.d/2)*n,h,d,m)}}var ey={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5},balcony:{color:1909304,side:1448492,edge:5995775,edgeAlpha:.5}};function ny(i,t,e){let n=[(t[0]+e[0])/2,(t[1]+e[1])/2],s=e[0]-t[0],r=e[1]-t[1],o=Math.hypot(s,r)||1;return i.rooms.some(a=>a.points.some((c,l)=>{let f=a.points[(l+1)%a.points.length],u=f[0]-c[0],h=f[1]-c[1],d=Math.hypot(u,h)||1;if(Math.abs((s*h-r*u)/(o*d))>.05)return!1;let g=Math.max(0,Math.min(1,((n[0]-c[0])*u+(n[1]-c[1])*h)/(d*d)));return Math.hypot(c[0]+u*g-n[0],c[1]+h*g-n[1])<.4}))}function ro(i){return oi(i)>=0?i:[...i].reverse()}function iy(i,t){let e=i[t];if(Il(e.type)||e.type==="pool")return[];let n=[];for(let s=0;s<i.length;s++){let r=i[s];s===t||!(r.cut&&s>t||r.type==="pool")||r.points.length<3||r.points.every(o=>Fe(o,e.points))&&n.push(ro(r.points))}return n}function cp(i,t,e,n,s,r,o,a,c=0){let l=e[0]-t[0],f=e[1]-t[1],u=Math.hypot(l,f);if(u<1e-6)return;let h=-f/u*n*.5,d=l/u*n*.5;if(Math.abs(c)<1e-4){Ve(i,ro([[t[0]+h,t[1]+d],[e[0]+h,e[1]+d],[e[0]-h,e[1]-d],[t[0]-h,t[1]-d]]),s,r,o,a,{aoFrom:s-1});return}let g=(b,M)=>[t[0]+h*M,b,t[1]+d*M],_=(b,M)=>[e[0]+h*M,b+c,e[1]+d*M],m=(b,M)=>{i.tri(b[0],b[1],b[2],M,M,M,void 0,Wt),i.tri(b[0],b[2],b[3],M,M,M,void 0,Wt),i.tri(b[0],b[2],b[1],M,M,M,void 0,Wt),i.tri(b[0],b[3],b[2],M,M,M,void 0,Wt)},p=new ht(a),v=new ht(Bt(o,.9)),S=new ht(Bt(o,.6));m([g(r,1),_(r,1),_(r,-1),g(r,-1)],p),m([g(s,1),_(s,1),_(s,-1),g(s,-1)],S),m([g(s,1),_(s,1),_(r,1),g(r,1)],v),m([g(s,-1),_(s,-1),_(r,-1),g(r,-1)],v),m([g(s,1),g(s,-1),g(r,-1),g(r,1)],v),m([_(s,1),_(s,-1),_(r,-1),_(r,1)],v)}function up(i,t,e,n){let s=Au(e),r=e.outdoor??[];r.forEach((o,a)=>{if(o.points.length<3)return;let c=s+(o.offset??0),l=(S,b)=>c-Md(o,S,b),f=c-(o.type==="pool"?0:o.slope??0),u=Il(o.type)&&o.height?o.height:yd[o.type],h={...ey[o.type],top:u},d=ro(o.points),g=Bt(h.edge,h.edgeAlpha),_=o.open&&(o.type==="fence"||o.type==="pergola")?d.length-1:-1,m=S=>{if(o.outline!==!1)for(let b=0;b<d.length;b++){if(b===_)continue;let M=d[b],T=d[(b+1)%d.length];t.seg([M[0],S(M[0],M[1]),M[1]],[T[0],S(T[0],T[1]),T[1]],g,Wt)}},p=n??i,v=new ht(n?1734832:h.color);switch(o.type){case"pool":{let S=new ht(h.side),b=new ht(Bt(h.side,.55)),M=new ht(932440),T=Cu(e,o),R=Ll(e,o),x=Sd(e,o);for(let[y,E,L]of qs(d)){let A=d[y],C=d[E],I=d[L];(n?p:i).tri([A[0],T,A[1]],[I[0],T,I[1]],[C[0],T,C[1]],v,v,v,void 0,Wt),i.tri([A[0],x,A[1]],[I[0],x,I[1]],[C[0],x,C[1]],M,M,M,void 0,Wt)}for(let y=0;y<d.length;y++){let E=d[y],L=d[(y+1)%d.length];i.tri([L[0],x,L[1]],[L[0],R,L[1]],[E[0],R,E[1]],b,S,S,void 0,Wt),i.tri([L[0],x,L[1]],[E[0],R,E[1]],[E[0],x,E[1]],b,S,b,void 0,Wt)}if(!o.above&&Ru(e,o)){let y=new ht(660258),E=new ht(396054),L=x-.2,A=Math.min(c,R);for(let C=0;C<d.length;C++){let I=d[C],F=d[(C+1)%d.length];i.tri([I[0],L,I[1]],[I[0],A,I[1]],[F[0],A,F[1]],E,y,y,void 0,Wt),i.tri([I[0],L,I[1]],[F[0],A,F[1]],[F[0],L,F[1]],E,y,E,void 0,Wt)}for(let[C,I,F]of qs(d)){let U=d[C],O=d[I],X=d[F];i.tri([U[0],L,U[1]],[O[0],L,O[1]],[X[0],L,X[1]],E,E,E,void 0,Wt)}if(o.outline!==!1)for(let C=0;C<d.length;C++){let I=d[C],F=d[(C+1)%d.length];t.seg([I[0],L,I[1]],[F[0],L,F[1]],Bt(h.edge,h.edgeAlpha*.35),Wt),t.seg([I[0],L,I[1]],[I[0],A,I[1]],Bt(h.edge,h.edgeAlpha*.25),Wt)}}if(R>c+.02){let y=new ht(2044240),E=new ht(1187123);for(let L=0;L<d.length;L++){let A=d[L],C=d[(L+1)%d.length];i.tri([A[0],c,A[1]],[A[0],R,A[1]],[C[0],R,C[1]],E,y,y,void 0,Wt),i.tri([A[0],c,A[1]],[C[0],R,C[1]],[C[0],c,C[1]],E,y,E,void 0,Wt)}m(()=>c+.005)}if(m(()=>R),m(()=>T+.005),o.outline!==!1)for(let y=0;y<d.length;y++){let E=d[y],L=d[(y+1)%d.length];t.seg([E[0],x+.005,E[1]],[L[0],x+.005,L[1]],Bt(h.edge,h.edgeAlpha*.4),Wt)}break}case"fence":{for(let S=0;S<d.length;S++){if(S===_)continue;let b=d[S],M=d[(S+1)%d.length],T=Math.hypot(M[0]-b[0],M[1]-b[1]),R=Math.max(1,Math.round(T/2)),x=_>=0&&S===_-1?R:R-1;for(let y=0;y<=x;y++){let E=y/R,L=b[0]+(M[0]-b[0])*E,A=b[1]+(M[1]-b[1])*E,C=l(L,A);Ve(i,ro([[L-.04,A-.04],[L+.04,A-.04],[L+.04,A+.04],[L-.04,A+.04]]),C,C+h.top,h.side,h.color)}for(let y of[.35,.85])t.seg([b[0],l(b[0],b[1])+y*h.top,b[1]],[M[0],l(M[0],M[1])+y*h.top,M[1]],g,Wt)}break}case"pergola":{let S=h.top;for(let[b,M]of d){let T=l(b,M);Ve(i,ro([[b-.06,M-.06],[b+.06,M-.06],[b+.06,M+.06],[b-.06,M+.06]]),T,T+S,h.side,h.color)}for(let b=0;b<d.length;b++){if(b===_)continue;let M=d[b],T=d[(b+1)%d.length],R=l(M[0],M[1])+S;if(cp(i,M,T,.12,R-.16,R,h.side,h.color,l(T[0],T[1])-l(M[0],M[1])),o.bracing){let x=l(M[0],M[1]),y=l(T[0],T[1]);t.seg([M[0],x+.25,M[1]],[T[0],y+S-.25,T[1]],g,Wt),t.seg([T[0],y+.25,T[1]],[M[0],x+S-.25,M[1]],g,Wt)}}if(Pd(d)){let b=Id(d),M=b.x1-b.x0,T=b.z1-b.z0,R=M>=T,x=R?M:T,y=Math.max(1,Math.round(x/.6));for(let E=1;E<y;E++){let L=(R?b.x0:b.z0)+x*E/y,A=R?[L,b.z0+.06]:[b.x0+.06,L],C=R?[L,b.z1-.06]:[b.x1-.06,L],I=l(A[0],A[1])+S;cp(i,A,C,.06,I-.04,I+.08,h.side,h.color,l(C[0],C[1])-l(A[0],A[1]))}}m((b,M)=>l(b,M)+S+.004);break}case"balcony":{Ve(i,d,c-.18,c+h.top,h.side,h.color,{aoFrom:c-.18}),m(()=>c+h.top+.004);let b=o.height&&o.height>.3?o.height:1,M=Bt(9417983,.42),T=Bt(3662079,.55);for(let R=0;R<d.length;R++){let x=d[R],y=d[(R+1)%d.length];if(ny(e,x,y))continue;let E=Math.hypot(y[0]-x[0],y[1]-x[1]),L=c+h.top;t.seg([x[0],L+b,x[1]],[y[0],L+b,y[1]],T,Wt),t.seg([x[0],L+.1,x[1]],[y[0],L+.1,y[1]],M,Wt);let A=Math.max(1,Math.round(E/.12));for(let C=0;C<=A;C++){let I=C/A,F=x[0]+(y[0]-x[0])*I,U=x[1]+(y[1]-x[1])*I;t.seg([F,L,U],[F,L+b,U],C===0||C===A?T:M,Wt)}}break}default:{let S=(M,T)=>l(M,T)+h.top,b=iy(r,a);if(Ve(i,d,f,o.slope?S:c+h.top,h.side,h.color,{aoFrom:f,holes:b}),m((M,T)=>S(M,T)+.004),o.type==="hedge"&&m((M,T)=>l(M,T)+.004),o.outline!==!1)for(let M of b)for(let T=0;T<M.length;T++){let R=M[T],x=M[(T+1)%M.length];t.seg([R[0],S(R[0],R[1])+.004,R[1]],[x[0],S(x[0],x[1])+.004,x[1]],g,Wt)}}}})}var Vl=Math.PI/180,sy=1.13,ry=1.72,zu=.025,es=.07,hp=.25;function oy(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function zl(i){let t=i.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(v=>ay(v,Ul(i,v,v.overhang??t.overhang)));let e=oy(i);if(!e)return[];let n=e.rooms.flatMap(v=>v.points.map(S=>S[0])),s=e.rooms.flatMap(v=>v.points.map(S=>S[1])),r=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-r,a=Math.max(...n)+r,c=Math.min(...s)-r,l=Math.max(...s)+r,f=e.elevation+e.height;if(t.type==="flat")return[fp("main",null,o,c,a,l,f+hp)];let u=a-o>=l-c,h=t.ridge==="short"?!u:u,d=(h?l-c:a-o)/2,g=d*Math.tan(t.pitch*Vl),_=(v,S,b)=>h?[v,f+b,(c+l)/2+S]:[(o+a)/2+S,f+b,v],[m,p]=h?[o,a]:[c,l];return[-1,1].map(v=>kl(`main:${v<0?"a":"b"}`,null,v<0?"a":"b",_(m,v*d,0),_(p,v*d,0),_(m,0,g),t.pitch,()=>[0,p-m]))}function ay(i,t){let e=Xn(i),n=Cn(i),s=(_,m,p)=>{let[v,S]=e.at(_,m);return[v,p,S]},r=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),c=e.u1+Math.max(0,t.u1),l=c-a;if(i.shape==="flat"||i.shape==="parapet"){let _=e.at(a,-r),m=e.at(c,e.w+o);return[fp(i.id,i.id,Math.min(_[0],m[0]),Math.min(_[1],m[1]),Math.max(_[0],m[0]),Math.max(_[1],m[1]),i.eave_a+hp)]}if(i.shape==="pent")return[kl(`${i.id}:a`,i.id,"a",s(a,-r,n.y(-r)),s(c,-r,n.y(-r)),s(a,e.w+o,n.y(e.w+o)),i.pitch_a,()=>[0,l])];let f=i.shape==="hip"||i.shape==="pyramid",u=i.shape==="pyramid"?(e.u1-e.u0)/2:f?Math.min((e.u1-e.u0)/2,Math.min(n.vr,e.w-n.vr)||e.w/2):0,h=f?e.u0+u-a:0,d=f?c-(e.u1-u):0,g=[];if(n.vr>.3){let _=Math.hypot(n.vr+r,n.rh-n.y(-r));g.push(kl(`${i.id}:a`,i.id,"a",s(a,-r,n.y(-r)),s(c,-r,n.y(-r)),s(a,n.vr,n.rh),i.pitch_a,m=>[h*(m/_),l-d*(m/_)]))}if(e.w-n.vr>.3){let _=Math.hypot(e.w+o-n.vr,n.rh-n.y(e.w+o));g.push(kl(`${i.id}:b`,i.id,"b",s(c,e.w+o,n.y(e.w+o)),s(a,e.w+o,n.y(e.w+o)),s(c,n.vr,n.rh),i.pitch_b,m=>[d*(m/_),l-h*(m/_)]))}if(f){let _=n.y(-r),m=n.y(e.w+o),p=[[`${i.id}:c`,"c",s(a,e.w+o,m),s(a,-r,_),s(e.u0+u,n.vr,n.rh)],[`${i.id}:d`,"d",s(c,-r,_),s(c,e.w+o,m),s(e.u1-u,n.vr,n.rh)]];for(let[v,S,b,M,T]of p){let R=ly(v,i.id,S,b,M,T);R&&g.push(R)}}return g}function ly(i,t,e,n,s,r){let o=oo(ns(s,n));if(o<.3)return null;let a=Ui(ns(s,n)),c=ns(r,n),l=c[0]*a[0]+c[1]*a[1]+c[2]*a[2],f=[c[0]-a[0]*l,c[1]-a[1]*l,c[2]-a[2]*l],u=oo(f);if(u<.3)return null;let h=Ui(f),d=Ui(mp(a,h));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let g=Ui([-h[0],0,-h[2]]),_=Math.atan2(h[1],Math.hypot(h[0],h[2]))/Vl;return{key:i,section:t,side:e,flat:!1,o:n,eu:a,es:h,n:d,lu:o,ls:u,pitch:_,span:p=>{let v=Math.min(1,Math.max(0,p/u));return[l*v,o-(o-l)*v]},facing:[g[0],g[2]]}}function kl(i,t,e,n,s,r,o,a){let c=Ui(ns(s,n)),l=Ui(ns(r,n)),f=Ui(mp(c,l));f[1]<0&&(f=[-f[0],-f[1],-f[2]]);let u=Ui([-l[0],0,-l[2]]);return{key:i,section:t,side:e,flat:!1,o:n,eu:c,es:l,n:f,lu:oo(ns(s,n)),ls:oo(ns(r,n)),pitch:o,span:a,facing:[u[0],u[2]]}}function fp(i,t,e,n,s,r,o){let a=s-e>=r-n,c=a?s-e:r-n,l=a?r-n:s-e;return{key:`${i}:top`,section:t,side:"top",flat:!0,o:[e,o,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:c,ls:l,pitch:0,span:()=>[0,c],facing:a?[0,1]:[1,0]}}function dp(i){let t=i.module_w||sy,e=i.module_h||ry;return i.portrait===!1?[e,t]:[t,e]}function cy(i){return i.layout?.length?i.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function pp(i,t){return i.flat?Math.min(45,Math.max(0,t.tilt??15))*Vl:i.wall?Math.min(90,Math.max(0,t.tilt??0))*Vl:0}function uy(i,t){let[,e]=dp(t),n=pp(i,t);return i.wall?e*Math.cos(n)+zu:i.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+zu}function Gu(i,t,e=!1){let[n,s]=dp(t),r=[],o=pp(i,t),a=s*Math.cos(o),c=uy(i,t),l=cy(t),f=Math.max(1,...l),u=new Set(t.skip??[]),h=!!i.wall&&n>i.lu+1e-6,d=(_,m,p)=>[i.o[0]+i.eu[0]*_+i.es[0]*m+i.n[0]*p,i.o[1]+i.eu[1]*_+i.es[1]*m+i.n[1]*p,i.o[2]+i.eu[2]*_+i.es[2]*m+i.n[2]*p],g=(_,m)=>{if(i.unbounded)return!0;if(m<-1e-6||m>i.ls+1e-6)return!1;let[p,v]=i.span(m);return _>=p-1e-6&&_<=v+1e-6};return l.forEach((_,m)=>{let p=t.align==="right"?f-_:t.align==="center"?(f-_)/2:0;for(let v=0;v<_;v++){let S=`${m}:${v}`,b=u.has(S);if(b&&!e)continue;let M=t.u+(v+p)*(n+zu),T=t.v+m*c,R=M+n,x=T+(i.flat||i.wall?a:s);if(h){if(!(g((M+R)/2,T)&&g((M+R)/2,x)))continue}else if(![[M,T],[R,T],[R,x],[M,x]].every(([I,F])=>g(I,F)))continue;if(i.wall&&o>.001){let I=es+s*Math.sin(o),[F,U]=t.flip?[I,es]:[es,I],O=[d(M,T,F),d(R,T,F),d(R,x,U),d(M,x,U)],X=t.flip?T:x,G=[M+.05,R-.05].map(H=>[d(H,X,0),d(H,X,I)]);r.push({corners:O,posts:G,cell:S,skipped:b});continue}if(!i.flat){r.push({corners:[d(M,T,es),d(R,T,es),d(R,x,es),d(M,x,es)],posts:[],cell:S,skipped:b});continue}let y=.15,E=y+s*Math.sin(o),[L,A]=t.flip?[x,T]:[T,x],C=[d(M,L,y),d(R,L,y),d(R,A,E),d(M,A,E)];r.push({corners:C,posts:[M+.05,R-.05].flatMap(I=>[[d(I,L,0),d(I,L,y)],[d(I,A,0),d(I,A,E)]]),cell:S,skipped:b})}}),r}function ns(i,t){return[i[0]-t[0],i[1]-t[1],i[2]-t[2]]}function oo(i){return Math.hypot(i[0],i[1],i[2])}function Ui(i){let t=oo(i)||1;return[i[0]/t,i[1]/t,i[2]/t]}function mp(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}var hy=.78,fy=1.18;function dy(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||hy,module_h:i.h||fy}}function Hu(i,t){let e=Gu(i,dy(t))[0];if(!e)return null;let n=s=>[s[0]-i.n[0]*.05,s[1]-i.n[1]*.05,s[2]-i.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}var ao=1712952,lo=2239816,bp=1318193,is=Bt(3662079,.9),$s=Bt(5995775,.45),Ne=.14,py=9427199,my=13226982,gy=14936565,xy={black:{glass:new ht(329483),edge:Bt(9082544,.32),cells:Bt(2766160,.22)},blue:{glass:new ht(1386842),edge:Bt(10467583,.55),cells:Bt(4025599,.35)}},_y=Bt(13226982,.5),by=Bt(13226982,.85),vy=Bt(16757575,.95),gp=new ht(2845583),xp=new ht(3818072),_p=new ht(4871791);function yy(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function vp(i,t=new Map){let e=i.settings.roof,n=e?.type==="custom"?null:wy(i),s=e?.type==="custom"?Ty(i,e.sections??[],e.overhang):n?[n]:[];return Sy(i,s),My(i,s,t),s}function My(i,t,e){let n=i.settings.roof?.windows??[];if(!n.length||!t.length)return;let s=new Map(zl(i).map(r=>[r.key,r]));for(let r of n){let o=s.get(r.face),a=o?Hu(o,r):null;if(!o||!a)continue;let c=o.section?t.find(C=>C.sections?.includes(o.section)):t[0];if(!c)continue;let l=c.floor.elevation+c.base,f=C=>[C[0],C[1]-l,C[2]],[u,h,d,g]=a.map(f),_=e.get(r.id)??{open:0,tilt:0,cover:0},m=c.win??={solid:new Ae,lines:new Pn},p=(C,I)=>[C[0]+o.n[0]*I,C[1]+o.n[1]*I,C[2]+o.n[2]*I],v=(C,I,F)=>[C[0]+(I[0]-C[0])*F,C[1]+(I[1]-C[1])*F,C[2]+(I[2]-C[2])*F],S=_.open>.02||_.tilt>.02?vy:by,b=[u,h,d,g].map(C=>p(C,.06)),M=[u,h,d,g].map(C=>p(C,-.02));for(let C=0;C<4;C++){m.lines.seg(b[C],b[(C+1)%4],S);let I=(C+1)%4;m.solid.tri(M[C],M[I],b[I],_p),m.solid.tri(M[C],b[I],b[C],_p)}let T=(_.open>.02?30*Math.min(1,_.open):_.tilt>.5?12:0)*ji,R=Math.hypot(d[0]-h[0],d[1]-h[1],d[2]-h[2]),x=C=>{let I=o.es;return[C[0]-I[0]*R*Math.cos(T)+o.n[0]*R*Math.sin(T),C[1]-I[1]*R*Math.cos(T)+o.n[1]*R*Math.sin(T),C[2]-I[2]*R*Math.cos(T)+o.n[2]*R*Math.sin(T)]},y=p(g,.065),E=p(d,.065),L=x(y),A=x(E);m.solid.tri(L,A,E,gp),m.solid.tri(L,E,y,gp);for(let[C,I]of[[L,A],[A,E],[E,y],[y,L]])m.lines.seg(C,I,S);if(_.cover>.02){let C=Math.min(1,_.cover),I=p(v(y,L,C),.01),F=p(v(E,A,C),.01),U=p(y,.01),O=p(E,.01);m.solid.tri(I,F,O,xp),m.solid.tri(I,O,U,xp)}}}function Sy(i,t){let e=i.settings.roof?.solar??[];if(!e.length||!t.length)return;let n=new Map(zl(i).map(s=>[s.key,s]));for(let s of e){let r=n.get(s.face);if(!r)continue;let o=r.section?t.find(a=>a.sections?.includes(r.section)):t[0];o&&Wu(o.solid,o.lines,r,s,o.floor.elevation+o.base)}}function Wu(i,t,e,n,s){let r=l=>[l[0],l[1]-s,l[2]],o=xy[n.look==="blue"?"blue":"black"],a=n.portrait===!1?10:6,c=n.portrait===!1?6:10;for(let l of Gu(e,n)){let[f,u,h,d]=l.corners.map(r);i.tri(f,u,h,o.glass),i.tri(f,h,d,o.glass),i.tri(f,h,u,o.glass),i.tri(f,d,h,o.glass);let g=(p,v=.004)=>[p[0]+e.n[0]*v,p[1]+e.n[1]*v,p[2]+e.n[2]*v],_=(p,v,S)=>[p[0]+(v[0]-p[0])*S,p[1]+(v[1]-p[1])*S,p[2]+(v[2]-p[2])*S],m=[f,u,h,d].map(p=>g(p));for(let p=0;p<4;p++)t.seg(m[p],m[(p+1)%4],o.edge);for(let p=1;p<a;p++)t.seg(g(_(f,u,p/a)),g(_(d,h,p/a)),o.cells);for(let p=1;p<c;p++)t.seg(g(_(f,d,p/c)),g(_(u,h,p/c)),o.cells);for(let[p,v]of l.posts)t.seg(r(p),r(v),_y)}}function wy(i){let t=i.settings.roof,e=yy(i);if(!e||!t||t.type==="none"||t.type==="custom")return null;let n=e.rooms.flatMap(E=>E.points.map(L=>L[0])),s=e.rooms.flatMap(E=>E.points.map(L=>L[1])),r=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-r,a=Math.max(...n)+r,c=Math.min(...s)-r,l=Math.max(...s)+r,f=new Ae,u=new Pn;if(t.type==="flat"){Ve(f,[[o,c],[a,c],[a,l],[o,l]],0,.25,ao,lo,{bottom:!0});let E=.252;for(let[L,A]of[[[o,c],[a,c]],[[a,c],[a,l]],[[a,l],[o,l]],[[o,l],[o,c]]])u.seg([L[0],E,L[1]],[A[0],E,A[1]],is),u.seg([L[0],0,L[1]],[A[0],0,A[1]],$s);return{floor:e,base:e.height,solid:f,lines:u,glass:new Ae}}let h=a-o>=l-c,d=t.ridge==="short"?!h:h,g=(d?l-c:a-o)/2,_=g*Math.tan(t.pitch*ji),m=(E,L,A)=>d?[E,A,(c+l)/2+L]:[(o+a)/2+L,A,E],[p,v]=d?[o,a]:[c,l],S=new ht(lo),b=new ht(ao),M=(E,L,A,C,I)=>{f.tri(E,L,A,I),f.tri(E,A,C,I)};for(let E of[-1,1]){M(m(p,E*g,0),m(v,E*g,0),m(v,0,_),m(p,0,_),S),M(m(p,E*g,-Ne),m(p,0,_-Ne),m(v,0,_-Ne),m(v,E*g,-Ne),b),M(m(p,E*g,-Ne),m(v,E*g,-Ne),m(v,E*g,0),m(p,E*g,0),b);for(let L of[p,v])M(m(L,E*g,-Ne),m(L,E*g,0),m(L,0,_),m(L,0,_-Ne),b);u.seg(m(p,E*g,0),m(v,E*g,0),$s);for(let L of[p,v])u.seg(m(L,E*g,0),m(L,0,_),$s)}let T=t.overhang,R=new ht(bp),x=g-T,y=x*Math.tan(t.pitch*ji);for(let E of[p+T,v-T])f.tri(m(E,-x,-Ne),m(E,x,-Ne),m(E,0,y-Ne),R),f.tri(m(E,x,-Ne),m(E,-x,-Ne),m(E,0,y-Ne),R);return u.seg(m(p,0,_+.004),m(v,0,_+.004),is),{floor:e,base:e.height,solid:f,lines:u,glass:new Ae}}function Ty(i,t,e){let n=i.floors.filter(o=>o.rooms.length>0).sort((o,a)=>o.elevation-a.elevation);if(!n.length)return[];let s=new Map,r=new Map(zl(i).map(o=>[o.key,o]));for(let o of t){if(Math.abs(o.x1-o.x0)<.1||Math.abs(o.z1-o.z0)<.1)continue;let a=Xd(i,o)??n[0],c=o.open?`${a.id}:open`:a.id,l=s.get(c);l||s.set(c,l={floor:a,base:0,solid:new Ae,lines:new Pn,glass:new Ae,sections:[],lift:!o.open}),l.sections.push(o.id);let f=Du(t,o),u=a.elevation+a.height>o.base+.05&&!o.dormer&&!f,h=t.filter(_=>_!==o&&Du(t,_)===o).flatMap(_=>Hd(o,_));for(let _ of i.settings.roof.windows??[]){let m=r.get(_.face),p=m&&m.section===o.id?Hu(m,_):null;if(!p)continue;let v=p.map(S=>Di(o,S[0],S[2]));h.push({u0:Math.min(...v.map(S=>S[0])),u1:Math.max(...v.map(S=>S[0])),v0:Math.min(...v.map(S=>S[1])),v1:Math.max(...v.map(S=>S[1]))})}let d=f?Fu(f,o):o,g=null;if(f){let _=Xn(d),m=Xs(f,{u0:0,u1:0,a:0,b:0}),p=v=>{let[S,b]=_.at(v,_.w/2),[M,T]=Di(f,S,b);return no(m,M,T)??Cn(f).y(T)};g=p(_.u0)<=p(_.u1)?0:1}Ey(l.solid,l.lines,d,Ul(i,d,d.overhang??e),a.elevation,l.glass,u,h,g)}return[...s.values()].sort((o,a)=>+(o.lift===!1)-+(a.lift===!1))}function Ey(i,t,e,n,s,r=i,o=!1,a=[],c=null){let l=Xn(e),f=Cn(e),u=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,h=Math.max(0,u.a),d=Math.max(0,u.b),g=l.w,_=l.u0-Math.max(0,u.u0),m=l.u1+Math.max(0,u.u1),p=(C,I,F)=>{let[U,O]=l.at(C,I);return[U,F-s,O]},v=new ht(lo),S=new ht(ao),b=new ht(bp),M=(C,I)=>{for(let F=1;F+1<C.length;F++)i.tri(C[0],C[F],C[F+1],I)},T=[],R=[],x=[],y=null;if(e.shape==="flat"||e.shape==="parapet"){let C=e.eave_a,I=e.shape==="parapet",F=e.points&&e.points.length>=3?zd(e,I?0:Math.max(0,Math.min(u.a,u.b,u.u0,u.u1))):I?[l.at(l.u0,0),l.at(l.u1,0),l.at(l.u1,g),l.at(l.u0,g)]:[l.at(_,-h),l.at(m,-h),l.at(m,g+d),l.at(_,g+d)];Ve(i,F,C-s,C-s+.25,ao,lo,{bottom:!0});for(let U=0;U<F.length;U++){let O=F[U],X=F[(U+1)%F.length];t.seg([O[0],C-s+.252,O[1]],[X[0],C-s+.252,X[1]],is),t.seg([O[0],C-s,O[1]],[X[0],C-s,X[1]],$s)}if(I){let U=H=>Ii(H)>=0?H:[...H].reverse(),O=U(F),X=Lu(O,-.2),G=O.length;for(let H=0;H<G;H++){let J=U([O[H],O[(H+1)%G],X[(H+1)%G],X[H]]);Ve(i,J,C-s+.25,C-s+.65,ao,lo),t.seg([O[H][0],C-s+.652,O[H][1]],[O[(H+1)%G][0],C-s+.652,O[(H+1)%G][1]],is),t.seg([X[H][0],C-s+.652,X[H][1]],[X[(H+1)%G][0],C-s+.652,X[(H+1)%G][1]],is)}}}else{let C=Xs(e,u);T=C.faces;for(let I of a)T=T.flatMap(F=>Wd(F,I));R=C.rim,x=C.ridges,y=C.gable}let E=!!e.open,L=new ht(py);for(let C of T){if(E){for(let I=1;I+1<C.length;I++)r.tri(p(C[0][0],C[0][1],C[0][2]),p(C[I][0],C[I][1],C[I][2]),p(C[I+1][0],C[I+1][1],C[I+1][2]),L);continue}M(C.map(([I,F,U])=>p(I,F,U)),v),M(C.map(([I,F,U])=>p(I,F,U-Ne)),S)}for(let C=0;C<R.length;C++){let[I,F,U]=R[C],[O,X,G]=R[(C+1)%R.length];E||M([p(I,F,U),p(O,X,G),p(O,X,G-Ne),p(I,F,U-Ne)],S),t.seg(p(I,F,U),p(O,X,G),E?is:$s)}if(E){Ay(i,t,l,f,u,p,s);return}for(let[[C,I,F],[U,O,X]]of x)t.seg(p(C,I,F+.004),p(U,O,X+.004),is);let A=e.base;if(!o){if(y){let C=Ry(y,A-Ne),I=c===null?[l.u0,l.u1]:[c===0?l.u0:l.u1];if(C.length>=3)for(let F of I)M(C.map(([U,O])=>p(F,U,O)),b)}if(e.shape!=="flat"&&e.shape!=="parapet")for(let C of[0,g]){let I=f.y(C)-Ne;I>A+.02&&M([p(l.u0,C,A),p(l.u1,C,A),p(l.u1,C,I),p(l.u0,C,I)],b)}else if(e.eave_a>A+.02)for(let[C,I,F,U]of[[l.u0,0,l.u1,0],[l.u1,0,l.u1,g],[l.u1,g,l.u0,g],[l.u0,g,l.u0,0]])M([p(C,I,A),p(F,U,A),p(F,U,e.eave_a),p(C,I,e.eave_a)],b)}}function Ay(i,t,e,n,s,r,o){let a=e.w,c=.12,l=.16,f=s.a>0,u=s.b>0,h=s.u0>0,d=s.u1>0,g=(p,v,S,b,M,T)=>{let R=[e.at(p,S),e.at(v,S),e.at(v,b),e.at(p,b)],x=(R[1][0]-R[0][0])*(R[2][1]-R[0][1])-(R[2][0]-R[0][0])*(R[1][1]-R[0][1]);Ve(i,x<0?[...R].reverse():R,M-o,T-o,my,gy,{bottom:!0})},_=o;for(let[p,v]of[[0,f],[a,u]]){if(!v)continue;let S=n.y(p)-.03,b=p===0?0:a-c;g(e.u0,e.u1,b,b+c,S-l,S),t.seg(r(e.u0,p,S-l),r(e.u1,p,S-l),$s)}for(let[p,v]of[[e.u0,h],[e.u1-c,d]])if(v)for(let S=0;S<6;S++){let b=a*S/6,M=a*(S+1)/6,T=Math.min(n.y(b),n.y(M))-.03;g(p,p+c,b,M,T-l,T)}let m=[];for(let[p,v]of[[0,f],[a-c,u]]){if(!v)continue;let S=e.u1-e.u0-c,b=Math.max(1,Math.ceil(S/3.5));for(let M=0;M<=b;M++){let T=e.u0+S*M/b;M===0&&!h||M===b&&!d||m.push([T,p])}}if(!f&&!u)for(let p of[e.u0,e.u1-c])(p===e.u0&&h||p!==e.u0&&d)&&m.push([p,a/2-c/2]);for(let[p,v]of m){let S=n.y(v+c/2)-.03-l;g(p,p+c,v,v+c,_,S)}}function Ry(i,t){let e=[];for(let r=0;r<i.length;r++){let[o,a]=i[r];a>=t&&e.push([o,a]);let c=i[r+1];if(c&&(a-t)*(c[1]-t)<0){let l=(t-a)/(c[1]-a);e.push([o+(c[0]-o)*l,t])}}if(e.length<2)return[];let n=e[0],s=e[e.length-1];return s[1]>t&&e.push([s[0],t]),n[1]>t&&e.unshift([n[0],t]),e}var co={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},yp={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},Zs=.2,Cy=.01,uo=8,Gl=.42,Xu=.42;function Tp(i,t,e,n=[],s=[],r){let{walls:o,open:a}=Ki(i.rooms,{exterior:t,interior:e},i.walls??[]),c=(A,C,I)=>{let F=r?r(A,C):null;return F===null?I:Math.max(.05,Math.min(I,F))},l=(A,C,I,F,U)=>{if(!r)return U;let O=U,X=Math.max(2,Math.ceil((F-I)/.25)+1);for(let G=0;G<X;G++){let H=I+(F-I)*G/(X-1);O=Math.min(O,c(A[0]+C[0]*H,A[1]+C[1]*H,U))}return O},f=new Ae(!0,!0),u=[],h=new Pn,d=[];for(let A of i.rooms){if(A.points.length<3)continue;let C=qu(A.points),I=yp[A.floor_material]??yp.wood,F=new ht(I.color),U=n.flatMap(J=>{if($d(J,C))return[Nu(J,.003)];if(!Yd(J))return[];let pt=qd(C,J);return pt.length>=3&&Math.abs(Ii(pt))>.01?[Nu(qu(pt),.003)]:[]});d.push(...U);let O=[...C,...U.flat()],X=f.count;for(let[J,pt,rt]of qs(C,U)){let ft=O[J],St=O[pt],Lt=O[rt];f.tri([ft[0],0,ft[1]],[Lt[0],0,Lt[1]],[St[0],0,St[1]],F,F,F,[ft[0],ft[1],Lt[0],Lt[1],St[0],St[1]],Wt,I.tile)}u.push({roomId:A.id,start:X,end:f.count,color:I.color});let G=new ht(co.slab),H=J=>{for(let pt=0;pt<J.length;pt++){let rt=J[pt],ft=J[(pt+1)%J.length];f.tri([rt[0],-Zs,rt[1]],[rt[0],0,rt[1]],[ft[0],0,ft[1]],G),f.tri([rt[0],-Zs,rt[1]],[ft[0],0,ft[1]],[ft[0],-Zs,ft[1]],G)}};H(C);for(let J of U){H([...qu(J)].reverse());for(let pt=0;pt<J.length;pt++){let rt=J[pt],ft=J[(pt+1)%J.length];h.seg([rt[0],.006,rt[1]],[ft[0],.006,ft[1]],Qi),h.seg([rt[0],-Zs,rt[1]],[ft[0],-Zs,ft[1]],Fi)}}}let g=new Map,_=[],m=new Map;for(let A of o){let C="interior",I=null;if(A.exterior){let U=A.b[0]-A.a[0],O=A.b[1]-A.a[1],X=Math.hypot(U,O)||1,G=[O/X,-U/X],H=(Math.round(Math.atan2(G[1],G[0])/(2*Math.PI)*uo)%uo+uo)%uo;C=`s${H}`;let J=H/uo*2*Math.PI;I=[Math.cos(J),Math.sin(J)]}let F=g.get(C);F===void 0&&(F=_.length,g.set(C,F),_.push(I)),m.set(A,F)}let p=new Map,v=[];for(let A of i.openings){let C=Qr(A,i.rooms,i.walls??[]);if(!C)continue;let I=jr(o,A,C);if(!I)continue;let{wall:F,s:U}=I,O=Xl([F.b[0]-F.a[0],F.b[1]-F.a[1]]),X=Math.hypot(F.b[0]-F.a[0],F.b[1]-F.a[1]),G=Math.min(A.width,X),H=Math.max(0,Math.min(X-G,U-G/2)),J=C.room.points,pt=F.free?O[0]*(J[1][0]-J[0][0])+O[1]*(J[1][1]-J[0][1])>0:F.roomLeft===A.room_id,rt=[-O[1],O[0]],ft=pt?rt:[-rt[0],-rt[1]],St=Math.min(l(F.a,O,H,H+G,Hl(F,i.height))-.02,A.sill+A.height),Lt=Math.max(0,Math.min(A.sill,St-.1)),K=[ft[1],-ft[0]],$=O[0]*K[0]+O[1]*K[1]>0,ct={opening:A,bucket:m.get(F),start:[F.a[0]+O[0]*H,F.a[1]+O[1]*H],axis:O,width:G,toRoom:ft,faceRoom:pt?F.left:F.right,faceOut:pt?F.right:F.left,sill:Lt,top:St,hingeAtStart:A.hinge==="left"===$,exterior:F.exterior};v.push(ct);let vt=p.get(F);vt||p.set(F,vt=[]),vt.push({s0:H,s1:H+G,sill:Lt,top:St,info:ct})}let S=Math.min(i.cut_height,i.height),b=new Ae;for(let A of o){let C=m.get(A),I=Xl([A.b[0]-A.a[0],A.b[1]-A.a[1]]),F=(p.get(A)??[]).sort((rt,ft)=>rt.s0-ft.s0),U=Hl(A,i.height),O=[],X=[-1/0,...new Set(F.flatMap(rt=>[rt.s0,rt.s1])).values(),1/0].sort((rt,ft)=>rt-ft);for(let rt=0;rt+1<X.length;rt++){let ft=X[rt],St=X[rt+1];if(St-ft<1e-6)continue;let Lt=Number.isFinite(ft)&&Number.isFinite(St)?(ft+St)/2:Number.isFinite(ft)?ft+1:St-1,K=F.filter(vt=>vt.s0<Lt&&vt.s1>Lt).map(vt=>[vt.sill,vt.top]).sort((vt,_t)=>vt[0]-_t[0]),$=[],ct=-Zs;for(let[vt,_t]of K)vt>ct+1e-4&&$.push([ct,vt<1e-4?-Cy:vt]),ct=Math.max(ct,_t);U>ct+1e-4&&$.push([ct,U]),O.push({t0:ft,t1:St,ranges:$})}let G=Math.hypot(A.b[0]-A.a[0],A.b[1]-A.a[1]),H=r&&l(A.a,I,0,G,U)<U-.001,J=H?O.flatMap(rt=>{let ft=Math.max(rt.t0,-.5),St=Math.min(rt.t1,G+.5),Lt=Math.max(1,Math.ceil((St-ft)/.3));return Array.from({length:Lt},(K,$)=>({t0:$===0?rt.t0:ft+(St-ft)*$/Lt,t1:$===Lt-1?rt.t1:ft+(St-ft)*($+1)/Lt,ranges:rt.ranges,inner0:$>0,inner1:$<Lt-1}))}):O.map(rt=>({...rt,inner0:!1,inner1:!1})),pt=rt=>(rt[0]-A.a[0])*I[0]+(rt[1]-A.a[1])*I[1];for(let rt of J){let ft=Iy(A.footprint,A.a,I,rt.t0,rt.t1);if(ft.length<3)continue;let St=($,ct)=>Math.abs(pt($)-ct)<1e-4,Lt=($,ct)=>rt.inner0&&St($,rt.t0)&&St(ct,rt.t0)||rt.inner1&&St($,rt.t1)&&St(ct,rt.t1),K=H?Math.min(...ft.map(([$,ct])=>c($,ct,U))):U;for(let[$,ct]of rt.ranges){let vt=Math.min(ct,H?Math.max(...ft.map(([Ot,zt])=>c(Ot,zt,U))):ct);if(vt-$<1e-4||K-$<.01)continue;let _t=$>.01,Dt=H&&ct>K,Kt=(Ot,zt)=>Math.min(ct,c(Ot,zt,U));if($<S-1e-6){let Ot=vt>S+1e-6?Jd+C:io+C,zt=Dt&&K<S?(Qt,qt)=>Math.min(S,Kt(Qt,qt)):Math.min(vt,S);Ve(b,ft,$,zt,co.wall,co.wallTop,{aoFrom:0,bottom:_t,fold:io+C,topFold:Ot,skipSide:Lt})}vt>S+1e-6&&K>S+1e-6&&Ve(b,ft,Math.max($,S),Dt?Kt:vt,co.wall,co.wallTop,{aoFrom:0,fold:C,bottom:_t&&$>=S,skipSide:Lt})}}}let M=o.flatMap(A=>A.footprint),T=Dy(o,M),R=new Pn;R.p.push(...h.p),R.c.push(...h.c),R.f.push(...h.f);let x=(A,C)=>(p.get(A)??[]).filter(C);for(let A of T.edges){let C=m.get(A.wall);for(let[F,U]of Wl(A,x(A.wall,O=>O.sill<=.005)))R.seg([F[0],.004,F[1]],[U[0],.004,U[1]],Zd);for(let[F,U]of Wl(A,x(A.wall,O=>O.sill<S&&O.top>S)))R.seg([F[0],S,F[1]],[U[0],S,U[1]],Uu,Bl+C);let I=Hl(A.wall,i.height);for(let[F,U]of Wl(A,x(A.wall,O=>O.top>=I-.021))){if(!r){R.seg([F[0],I,F[1]],[U[0],I,U[1]],Qi,I<=S+1e-6?io+C:C);continue}let O=Math.max(1,Math.ceil(Math.hypot(U[0]-F[0],U[1]-F[1])/.3));for(let X=0;X<O;X++){let G=[F[0]+(U[0]-F[0])*X/O,F[1]+(U[1]-F[1])*X/O],H=[F[0]+(U[0]-F[0])*(X+1)/O,F[1]+(U[1]-F[1])*(X+1)/O],J=c(G[0],G[1],I),pt=c(H[0],H[1],I);R.seg([G[0],J,G[1]],[H[0],pt,H[1]],Qi,Math.max(J,pt)<=S+1e-6?io+C:C)}}}for(let A of T.corners){let C=c(A.p[0],A.p[1],Hl(A.wall,i.height));R.segSplit([A.p[0],.004,A.p[1]],[A.p[0],C,A.p[1]],Fi,Math.min(S,C),m.get(A.wall))}for(let A of p.values())for(let C of A)Py(R,C,S);let y=Fy(T.edges,i.rooms,p),E=new Ae;up(b,R,i,E);for(let A of s)Wu(b,R,A.face,A.field,i.elevation);let L=[];for(let A of i.furniture){if(Dl(A.type))continue;let C=b.count,I=R.p.length/6,F=$r(i,A);ap(b,R,y,A,F),F+A.h>S+.05&&(Kd(b,C,S,Ou),Qd(R,I,S,Ou)),L.push({id:A.id,start:C,end:b.count})}return{floor:f.geometry(),roomTris:u,holes:d,walls:b.geometry(),water:E.geometry(),lines:R.geometry(),shadow:y.geometry(),buckets:_,openings:v,walls2d:o,openRooms:a,wallBuckets:o.map(A=>m.get(A)),furnitureTris:L,roofUnder:r}}function Py(i,t,e){let{info:n}=t,s=n.bucket,r=(c,l,f)=>[n.start[0]+n.axis[0]*(c-t.s0)+n.toRoom[0]*l,f,n.start[1]+n.axis[1]*(c-t.s0)+n.toRoom[1]*l],o=c=>c>e+1e-6?s:Wt,a=Math.max(t.sill,.004);for(let c of[n.faceRoom,-n.faceOut]){for(let l of[t.s0,t.s1])i.segSplit(r(l,c,a),r(l,c,t.top),Fi,e,s);i.seg(r(t.s0,c,t.top),r(t.s1,c,t.top),Fi,o(t.top)),t.sill>.01&&i.seg(r(t.s0,c,t.sill),r(t.s1,c,t.sill),Fi,o(t.sill))}for(let c of[t.s0,t.s1])i.seg(r(c,n.faceRoom,t.top),r(c,-n.faceOut,t.top),Fi,o(t.top)),t.sill>.01&&i.seg(r(c,n.faceRoom,t.sill),r(c,-n.faceOut,t.sill),Fi,o(t.sill)),t.sill<e&&t.top>e&&i.seg(r(c,n.faceRoom,e),r(c,-n.faceOut,e),Uu,Bl+s)}function Iy(i,t,e,n,s){let r=a=>(a[0]-t[0])*e[0]+(a[1]-t[1])*e[1],o=i;return Number.isFinite(n)&&(o=Mp(o,a=>r(a)-n)),Number.isFinite(s)&&(o=Mp(o,a=>s-r(a))),o}function Mp(i,t){let e=[];for(let n=0;n<i.length;n++){let s=i[n],r=i[(n+1)%i.length],o=t(s),a=t(r);if(o>=0&&e.push(s),o>=0!=a>=0){let c=o/(o-a);e.push([s[0]+(r[0]-s[0])*c,s[1]+(r[1]-s[1])*c])}}return e}var Sp=i=>Math.round(i*1e3),ho=i=>`${Sp(i[0])},${Sp(i[1])}`,wp=(i,t)=>{let e=ho(i),n=ho(t);return e<n?`${e}|${n}`:`${n}|${e}`};function Ly(i,t){let e=[];for(let n=0;n<i.length;n++){let s=i[n],r=i[(n+1)%i.length],o=r[0]-s[0],a=r[1]-s[1],c=o*o+a*a;if(c<1e-8)continue;let l=[];for(let u of t){let h=((u[0]-s[0])*o+(u[1]-s[1])*a)/c;if(h<=1e-6||h>=1-1e-6)continue;Math.abs((u[0]-s[0])*a-(u[1]-s[1])*o)/Math.sqrt(c)<1e-4&&l.push(h)}l.sort((u,h)=>u-h);let f=s;for(let u of l){let h=[s[0]+o*u,s[1]+a*u];ho(h)!==ho(f)&&e.push([f,h]),f=h}e.push([f,r])}return e}function Dy(i,t){let e=i.map(c=>({wall:c,edges:Ly(c.footprint,t)})),n=new Map;for(let{edges:c}of e)for(let[l,f]of c){let u=wp(l,f);n.set(u,(n.get(u)??0)+1)}let s=[],r=new Map,o=(c,l,f)=>{let u=ho(c),h=r.get(u);h||r.set(u,h={p:c,wall:l,d:[]}),h.d.push(f)};for(let{wall:c,edges:l}of e)for(let[f,u]of l){if(n.get(wp(f,u))!==1)continue;let h=Math.hypot(u[0]-f[0],u[1]-f[1]);if(h<1e-4)continue;s.push({a:f,b:u,wall:c});let d=[(u[0]-f[0])/h,(u[1]-f[1])/h];o(f,c,d),o(u,c,d)}let a=[];for(let{p:c,wall:l,d:f}of r.values())f.some(u=>f.some(h=>Math.abs(u[0]*h[1]-u[1]*h[0])>.05))&&a.push({p:c,wall:l});return{edges:s,corners:a}}function Wl(i,t){if(!t.length)return[[i.a,i.b]];let e=Xl([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=Xl([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(e[0]*n[0]+e[1]*n[1])<.99)return[[i.a,i.b]];let s=u=>(u[0]-i.wall.a[0])*e[0]+(u[1]-i.wall.a[1])*e[1],r=s(i.a),o=s(i.b),a=Math.min(r,o),c=Math.max(r,o),l=[[a,c]];for(let u of t)l=l.flatMap(([h,d])=>{if(u.s1<=h||u.s0>=d)return[[h,d]];let g=[];return u.s0>h&&g.push([h,u.s0]),u.s1<d&&g.push([u.s1,d]),g});let f=u=>{let h=(u-r)/(o-r||1);return[i.a[0]+(i.b[0]-i.a[0])*h,i.a[1]+(i.b[1]-i.a[1])*h]};return l.filter(([u,h])=>h-u>1e-4).map(([u,h])=>r<=o?[f(u),f(h)]:[f(h),f(u)])}function Fy(i,t,e){let n=new Ae,s=new ht(Xu,Xu,Xu),r=new ht(1,1,1),o=.002;for(let a of i)for(let[c,l]of Wl(a,(e.get(a.wall)??[]).filter(f=>f.sill<=.005))){let f=l[0]-c[0],u=l[1]-c[1],h=Math.hypot(f,u);if(h<.05)continue;let d=[u/h,-f/h],g=[(c[0]+l[0])/2+d[0]*.05,(c[1]+l[1])/2+d[1]*.05];if(!t.some(p=>p.points.length>=3&&Fe(g,p.points)))continue;let _=[c[0]+d[0]*Gl,c[1]+d[1]*Gl],m=[l[0]+d[0]*Gl,l[1]+d[1]*Gl];n.tri([c[0],o,c[1]],[_[0],o,_[1]],[m[0],o,m[1]],s,r,r),n.tri([c[0],o,c[1]],[m[0],o,m[1]],[l[0],o,l[1]],s,r,s)}return n}function Hl(i,t){return Math.min(t,i.height??t)}function Xl(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function qu(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];t+=n[0]*s[1]-s[0]*n[1]}return t>=0?i:[...i].reverse()}var Ny={open:0,open2:0,tilt:0,tilt2:0,cover:null},Ep=2043986,Ap=2769520,Uy=2242399,Yu=1845831,Oy=1450554,li=16758087,By=1.2,ky=1.5,Vy=1846349,zy=2572395,Gy=1120816,Hy=1845831,Rp=5995775,Cp=9085695,Js=Bt(3662079,.08),Wy=.2;function ql(i,t,e,n,s,r,o,a,c,l,f){let u=(d,g,_)=>t(d,g,_),h=[[u(e,s,a),u(n,s,a),u(n,r,a),u(e,r,a),l],[u(e,s,o),u(n,s,o),u(n,r,o),u(e,r,o),Bt(c.getHex(),.6)],[u(e,r,o),u(n,r,o),u(n,r,a),u(e,r,a),c],[u(e,s,o),u(n,s,o),u(n,s,a),u(e,s,a),Bt(c.getHex(),.85)],[u(e,s,o),u(e,r,o),u(e,r,a),u(e,s,a),Bt(c.getHex(),.92)],[u(n,s,o),u(n,r,o),u(n,r,a),u(n,s,a),Bt(c.getHex(),.92)]];for(let[d,g,_,m,p]of h)i.tri(d,g,_,p,p,p,void 0,f),i.tri(d,_,m,p,p,p,void 0,f)}function oe(i,t,e,n,s,r,o,a,c,l,f,u){if(a<=f+1e-6)return ql(i,t,e,n,s,r,o,a,c,l,Wt);if(o>=f-1e-6)return ql(i,t,e,n,s,r,o,a,c,l,u);ql(i,t,e,n,s,r,o,f,c,l,Wt),ql(i,t,e,n,s,r,f,a,c,l,u)}function Oi(i,t,e,n,s,r,o,a,c,l,f=0){let u=(h,d,g)=>{let _=b=>f?(o-b)/f:.5,m=t(e,s,h),p=t(n,s,h),v=t(n,s,d),S=t(e,s,d);i.tri(m,p,v,a,a,a,[0,_(h),1,_(h),1,_(d)],g),i.tri(m,v,S,a,a,a,[0,_(h),1,_(d),0,_(d)],g)};o<=c+1e-6?u(r,o,Wt):r>=c-1e-6?u(r,o,l):(u(r,c,Wt),u(c,o,l))}function Xy(i,t,e,n,s,r,o,a,c,l){let f=t(e,s,o),u=t(n,s,o),h=t(n,r,o),d=t(e,r,o),g=0,_=(r-s)/l;i.tri(f,u,h,a,a,a,[0,g,1,g,1,_],c),i.tri(f,h,d,a,a,a,[0,g,1,_,0,_],c)}function Pp(i,t,e){let n=new Ae,s=new Ae,r=new Ae(!0),o=new ht(Ep),a=new ht(Ap),c=[],l=[],f=[];for(let u of i){let h=n.count,d=s.count,g=r.count,_=t.get(u.opening.id)??Ny,m=u.width,{sill:p,top:v,bucket:S}=u,b=(x,y,E)=>[u.start[0]+u.axis[0]*x+u.toRoom[0]*y,E,u.start[1]+u.axis[1]*x+u.toRoom[1]*y],M=(u.faceRoom-u.faceOut)/2,T=u.opening.mark==="closed",R=u.opening.type==="door"&&Zr(u.opening,u.exterior)==="passage";if(u.opening.type==="door"&&!R||u.opening.type==="garage"){let x=-u.faceOut-.012,y=u.faceRoom+.012,E=u.opening.type==="garage"&&(T?!!_.sensed&&(_.cover??1)>=.95:(_.cover??1)<.95),L=E?Bt(li,.8):new ht(Ep),A=E?Bt(li,1):new ht(Ap);oe(n,b,-.045,.02,x,y,0,v+.045,L,A,e,S),oe(n,b,m-.02,m+.045,x,y,0,v+.045,L,A,e,S),oe(n,b,.02,m-.02,x,y,v-.02,v+.045,L,A,e,S)}if(u.opening.type==="door"){let x=Zr(u.opening,u.exterior),y=Cd(x),E=u.opening.swing==="out"?-1:1,L=E>0?u.faceRoom:-u.faceOut,A=u.opening.leaves===2,C=.02,I=m-.02,F=Rd(m,x,u.hingeAtStart,u.opening);if(F){for(let[G,H]of F.panels)oe(n,b,G,G+.04,M-.03,M+.03,.02,v-.02,o,a,e,S),oe(n,b,H-.04,H,M-.03,M+.03,.02,v-.02,o,a,e,S),oe(n,b,G,H,M-.03,M+.03,.02,.1,o,a,e,S),Oi(s,b,G+.04,H-.04,M,.1,v-.02,Js,e,S);C=F.x0,I=F.x1}let U=A?(I-C)/2-.004:I-C,O=y?.06:.04;y&&(oe(n,b,.02,m-.02,-u.faceOut-.02,u.faceRoom,0,.02,new ht(Yu),a,e,S),u.exterior&&oe(n,b,m/2-.08,m/2+.08,-u.faceOut-.1,-u.faceOut,v+.1,v+.17,Bt(li,.55),Bt(li,.85),e,Wt));let X=R?[]:[[u.hingeAtStart,_.open]];A&&!R&&X.push([!u.hingeAtStart,_.open2??0]);for(let[G,H]of X){let J=Math.min(1,Math.max(0,H)),pt=x==="sliding"?0:J*ky,rt=x==="sliding"?J*U:0,ft=(Kt,Ot,zt)=>{let Qt=Kt*Math.cos(pt)-Ot*Math.sin(pt)-rt,qt=L+E*(Ot*Math.cos(pt)+Kt*Math.sin(pt)+(rt?.05:0));return b(G?C+Qt:I-Qt,qt,zt)},St=J>.05?Wt:S,Lt=T?!!_.sensed&&J<.05:J>.9,K=Lt?Bt(li,.7):new ht(y?Gy:Vy),$=Lt?Bt(li,.9):new ht(y?Hy:zy);x==="glass"?(oe(n,ft,0,.05,-O,0,.01,v-.01,K,$,e,St),oe(n,ft,U-.05,U,-O,0,.01,v-.01,K,$,e,St),oe(n,ft,.05,U-.05,-O,0,.01,.12,K,$,e,St),oe(n,ft,.05,U-.05,-O,0,v-.08,v-.01,K,$,e,St),Oi(s,ft,.05,U-.05,-O/2,.12,v-.08,Js,e,St)):oe(n,ft,0,U,-O,0,.01,v-.01,K,$,e,St),x==="front_glass"?Oi(s,ft,.12,U-.12,.001,v*.55,v-.18,Js,e,St):y&&Oi(s,ft,.1,.18,.001,.3,v-.3,Js,e,St);let ct=Math.min(1.05,v*.5),vt=y?.3:.012,_t=y?U-.11:U-.16,Dt=y?U-.08:U-.05;oe(n,ft,_t,Dt,.004,.05,ct-vt,ct+vt,new ht(Rp),new ht(Cp),e,St),oe(n,ft,_t,Dt,-O-.05,-O-.004,ct-vt,ct+vt,new ht(Rp),new ht(Cp),e,St)}}else if(u.opening.type==="garage"){let x=Math.min(1,Math.max(0,_.cover??1)),y=new ht(13951231),E=u.faceRoom-.03,L=v*(1-x);x>.01&&Oi(r,b,.02,m-.02,E,L,v,y,e,S,.5);let A=(1-x)*v;A>.01&&Xy(r,b,.02,m-.02,E,E+A,v+.03,y,S,.5)}else if(Zr(u.opening,u.exterior)==="glass_wall"){oe(n,b,0,.04,M-.025,M+.025,p,v,o,a,e,S),oe(n,b,m-.04,m,M-.025,M+.025,p,v,o,a,e,S),oe(n,b,.04,m-.04,M-.025,M+.025,p,p+.03,o,a,e,S),oe(n,b,.04,m-.04,M-.025,M+.025,v-.04,v,o,a,e,S);let E=Math.max(1,Math.round((m-2*.04)/.9)),L=(m-2*.04)/E;for(let A=1;A<E;A++){let C=.04+A*L;oe(n,b,C-.02,C+.02,M-.025,M+.025,p+.03,v-.04,o,a,e,S)}for(let A=0;A<E;A++){let C=.04+A*L+(A?.02:0),I=.04+(A+1)*L-(A<E-1?.02:0);Oi(s,b,C,I,M,p+.03,v-.04,Js,e,S)}}else{oe(n,b,0,.06,M-.035,M+.035,p,v,o,a,e,S),oe(n,b,m-.06,m,M-.035,M+.035,p,v,o,a,e,S),oe(n,b,.06,m-.06,M-.035,M+.035,p,p+(p>.05?.06:.03),o,a,e,S),oe(n,b,.06,m-.06,M-.035,M+.035,v-.06,v,o,a,e,S),p>.3&&(oe(n,b,-.04,m+.04,M+.035,u.faceRoom+.07,p-.03,p,new ht(Yu),a,e,S),u.exterior&&oe(n,b,-.03,m+.03,-u.faceOut-.06,M-.035,p-.04,p-.02,new ht(Yu),a,e,S));let E=.055,L=p+(p>.05?.06:.03),A=v-.06,C=M+.035,I=M+.035+.06,U=u.opening.leaves===2?[{atStart:u.hingeAtStart,x0:u.hingeAtStart?.06:m/2,x1:u.hingeAtStart?m/2:m-.06,open:_.open,tilt:_.tilt},{atStart:!u.hingeAtStart,x0:u.hingeAtStart?m/2:.06,x1:u.hingeAtStart?m-.06:m/2,open:_.open2??0,tilt:_.tilt2??0}]:[{atStart:u.hingeAtStart,x0:.06,x1:m-.06,open:_.open,tilt:_.tilt}];for(let O of U){let X=O.open>.02||O.tilt>.02,G=T?!!_.sensed&&!X:X,H=G?Bt(li,.75):new ht(Uy),J=G?Bt(li,.95):a,pt=O.x0,rt=O.x1,ft=rt-pt,St=O.open*By*(u.opening.swing==="out"?-1:1),Lt=O.tilt*Wy,K=(ct,vt,_t)=>{let Dt=_t-L,Kt=vt+Dt*Math.sin(Lt),Ot=L+Dt*Math.cos(Lt),zt=ct*Math.cos(St)-(Kt-C)*Math.sin(St);Kt=C+(Kt-C)*Math.cos(St)+ct*Math.sin(St);let Qt=O.atStart?pt+zt:rt-zt;return b(Qt,Kt,Ot)},$=Math.abs(St)>.05?Wt:S;if(oe(n,K,0,E,C,I,L,A,H,J,e,$),oe(n,K,ft-E,ft,C,I,L,A,H,J,e,$),oe(n,K,E,ft-E,C,I,L,L+E,H,J,e,$),oe(n,K,E,ft-E,C,I,A-E,A,H,J,e,$),Oi(s,K,E,ft-E,(C+I)/2,L+E,A-E,G?Bt(li,.16):Js,e,$),Zr(u.opening,u.exterior)==="bars"){let ct=(L+A)/2,vt=(C+I)/2;oe(n,K,E,ft-E,vt-.012,vt+.012,ct-.012,ct+.012,H,J,e,$),oe(n,K,ft/2-.012,ft/2+.012,vt-.012,vt+.012,L+E,A-E,H,J,e,$)}}}if(_.cover!==null){let x=-u.faceOut,y=v+.2;oe(n,b,-.05,m+.05,x-.15,x,v,y,new ht(Oy),a,e,S);let E=Math.min(1,Math.max(0,_.cover));if(E>.01){let L=v-E*(v-p);Oi(r,b,0,m,x-.07,L,v,new ht(16777215),e,S,.045)}}c.push({id:u.opening.id,start:h,end:n.count}),l.push({id:u.opening.id,start:d,end:s.count}),f.push({id:u.opening.id,start:g,end:r.count})}return{frames:n.geometry(),glass:s.geometry(),blinds:r.geometry(),frameTris:c,glassTris:l,blindTris:f}}var We=2.5,Ku=.24,Qu=.12,mo=.2,$u=7,po=6.5,qn=(i,t,e,n,s,r,o,a)=>({id:i,room_id:t,edge:e,offset:n,width:s,type:r,sill:o,height:a,hinge:"left",leaves:1,swing:"in",style:null,cover:null,contact:null,contact2:null,tilt:null}),$l=(i,t,e="wood")=>({id:i,name:i,area_id:null,points:t,floor_material:e}),_e=(i,t,e,n,s=0,r)=>{let[o,a,c]=r??Eu[t];return{id:i,type:t,x:e,z:n,rotation:s,w:o,d:a,h:c,variant:null,entity:null,power:null}},fo=(i,t,e,n={})=>({id:i,type:t,points:e,...n}),Bi=(i,t,e,n)=>[[i,t],[e,t],[e,n],[i,n]];function Ip(){let i="living",e="bath",n=[$l(i,Bi(-3.5,-3.25,1,3.25),"oak"),$l("bed",Bi(1,-3.25,3.5,.5),"carpet"),$l(e,Bi(1,.5,3.5,3.25),"tiles")],s=[qn("front",i,2,2.25,1,"door",0,2.1),qn("lw1",i,2,.9,1.1,"window",.9,1.25),qn("lw2",i,2,3.65,1.1,"window",.9,1.25),qn("lw3",i,3,3.6,2,"window",0,2.1),qn("lw4",i,0,1.5,1.4,"window",1.05,1),qn("bdoor","bed",3,2,.85,"door",0,2),qn("bw1","bed",1,1.2,1.2,"window",.9,1.25),qn("bw2","bed",0,1.25,1,"window",.9,1.25),qn("wdoor",e,3,.65,.8,"door",0,2),qn("ww1",e,1,1.4,.7,"window",1.4,.7)],r=[_e("fridge","fridge",-3.05,-2.8,0,[.6,.66,1.85]),_e("kitchen","kitchen",-2.15,-2.82,0,[1.2,.62,.92]),_e("stove","stove",-1.25,-2.82,0,[.6,.62,.92]),_e("sink","sink",-.65,-2.82,0,[.6,.62,.92]),_e("kwall","kitchen_wall",-2.15,-2.98,0,[1.8,.35,.7]),_e("table","table",-1.6,-1.4,0,[1.2,.8,.75]),_e("c1","chair",-2,-1.95,0),_e("c2","chair",-1.2,-1.95,0),_e("c3","chair",-2,-.85,180),_e("c4","chair",-1.2,-.85,180),_e("sofa","sofa",-2.9,.6,270,[2,.9,.82]),_e("ctable","coffee_table",-1.75,.6,90,[.9,.5,.42]),_e("tv","tv_board",.72,.6,90,[1.4,.42,.5]),_e("lampf","lamp_floor",-3.1,2.75),_e("lampc","lamp_ceiling",-1.4,.2),_e("plant","plant",.55,2.85),_e("coat","coat_rack",-.35,2.95,180),_e("bed","bed",2.25,-2.1,0,[1.4,2,.9]),_e("ns","nightstand",3.15,-2.85,0,[.4,.4,.5]),_e("wardrobe","wardrobe",3.07,-.2,90,[1,.6,2]),_e("lampb","lamp_ceiling",2.25,-1.4),_e("tub","bathtub",2.4,.95,0,[1.7,.75,.58]),_e("wc","wc",3.12,2.55,90,[.38,.6,.8]),_e("basin","washbasin",2.3,2.92,180,[.6,.45,.85]),_e("lampw","lamp_ceiling",2.25,1.9),_e("glamp","lamp_garden",-2.4,5.6)],o=[fo("lawn","lawn",Bi(-4.8,-6.2,4.8,6.2)),fo("path","path",Bi(-1.85,3.3,-.65,6.2)),fo("terrace","terrace",Bi(-4.7,-1.6,-3.6,1.6)),fo("hedge1","hedge",Bi(-4.95,-6.2,-4.7,6.2),{height:1.1}),fo("hedge2","hedge",Bi(4.7,-6.2,4.95,6.2),{height:1.1})];return{id:"house",name:"House",elevation:0,height:We,cut_height:1.15,rooms:n,openings:s,walls:[],furniture:r,placements:[],outdoor:o}}var Zu=new re({vertexColors:!0,side:He}),qy=new re({vertexColors:!0,transparent:!0,opacity:.3,depthWrite:!1,side:He}),Yy=new ln({vertexColors:!0,transparent:!0,blending:sn,depthWrite:!1}),Zl=new re({vertexColors:!0,side:He,transparent:!0}),Ju=new ln({vertexColors:!0,transparent:!0,blending:sn,depthWrite:!1});function Lp(i){Zl.opacity=i,Zl.depthWrite=i>.9,Zl.visible=i>.02,Ju.opacity=i,Ju.visible=i>.02}function Dp(i,t,e){let n=new Oe,r=(e?(e.settings.roof?.sections??[]).some(u=>kd(u,i.elevation+i.height)):!1)&&e?(u,h)=>{let d=Vd(e,u,h);return d===null?null:d-i.elevation}:void 0,o=Tp(i,Ku,Qu,[],[],r),a=Pp(o.openings,new Map,99),c=u=>(u.getAttribute("position")?.count??0)>0;for(let[u,h]of[[o.floor,Zu],[o.walls,Zu],[a.frames,Zu],[a.glass,qy]])c(u)&&n.add(new te(u,h));c(o.lines)&&n.add(new fn(o.lines,Yy));let l=new re({map:t,color:new ht("#ffb347").multiplyScalar(.42),transparent:!0,blending:sn,depthWrite:!1});for(let u of i.rooms){let h=u.points.map(_=>_[0]),d=u.points.map(_=>_[1]),g=new te(new en(1,1).rotateX(-Math.PI/2),l);g.position.set((Math.min(...h)+Math.max(...h))/2,.02,(Math.min(...d)+Math.max(...d))/2),g.scale.set((Math.max(...h)-Math.min(...h))*1.15,1,(Math.max(...d)-Math.min(...d))*1.15),n.add(g)}let f=new ni({map:t,color:"#ffd38a",blending:sn,depthWrite:!1,transparent:!0});for(let u of i.furniture){if(!Dl(u.type))continue;let h=/ceiling|pendant|downlight|spot|panel/.test(u.type),d=h?i.height-.12:$r(i,u)+u.h,g=new yi(f);g.position.set(u.x,Math.min(i.height-.08,d),u.z),g.scale.setScalar(h?1.1:.8),n.add(g)}return n}function Fp(i){let t=new Oe;for(let e of vp(i)){let n=new Oe;e.solid.count&&n.add(new te(e.solid.geometry(),Zl)),e.lines.p.length&&n.add(new fn(e.lines.geometry(),Ju)),n.position.y=e.floor.elevation+e.base,t.add(n)}return t}var Yl=null;function Np(i){if(Yl)return Yl;let t=Ip(),e={floors:[t],settings:{wall_exterior:Ku,wall_interior:Qu,roof:{type:"gable",pitch:38,overhang:.45,ridge:"long"}}},n=new Oe;return n.add(Dp(t,i),Fp(e)),Yl={detail:n,floor:t},Yl}var ss=null;function Up(i){if(!ss){let e=new Tn($u,We,po);e.translate(0,We/2,0);let n=new Me,s=$u/2+.45,r=po/2+.45,o=We+Math.tan(38*Math.PI/180)*r,a=[[-s,We,-r,s,We,-r,s,o,0,-s,We,-r,s,o,0,-s,o,0],[-s,We,r,-s,o,0,s,o,0,-s,We,r,s,o,0,s,We,r],[-s,We,-r,-s,o,0,-s,We,r,s,We,-r,s,We,r,s,o,0]].flat();n.setAttribute("position",new Yt(a,3));let c=new en($u*.7,.9);c.translate(0,1.5,po/2+.02),ss={body:e,edges:new ii(e),roof:n,roofEdges:new ii(n),windows:c}}let t=new Oe;return t.add(new te(ss.body,new re({color:"#111a2e"})),new fn(ss.edges,new ln({color:i})),new te(ss.roof,new re({color:"#1a2944",side:He})),new fn(ss.roofEdges,new ln({color:i})),new te(ss.windows,new re({color:"#ffcf7a",transparent:!0,opacity:.55}))),t}function Op(i,t){let e=i?.floors.find(u=>u.elevation===0);if(!i||!e)return null;let n=e.rooms.flatMap(u=>u.points.map(h=>h[0])),s=e.rooms.flatMap(u=>u.points.map(h=>h[1])),r=(Math.min(...n)+Math.max(...n))/2,o=(Math.min(...s)+Math.max(...s))/2,a=new Oe,c=i.floors.map(u=>({...u,outdoor:[],furniture:u.furniture.filter(h=>u.rooms.some(d=>Fe([h.x,h.z],d.points)))})),l={...i,floors:c};for(let u of c){let h=Dp(u,t,l);h.position.y=u.elevation,a.add(h)}a.add(Fp(l)),a.position.set(-r,mo,-o);let f=u=>[u[0]-r,u[1]-o];return{group:a,ground:{...e,rooms:e.rooms.map(u=>({...u,points:u.points.map(f)})),walls:(e.walls??[]).map(u=>({...u,a:f(u.a),b:f(u.b)}))}}}var $y=(i,t,e,n)=>[Math.round((n[0]+i*Math.cos(e)+t*Math.sin(e))*1e3)/1e3,Math.round((n[1]-i*Math.sin(e)+t*Math.cos(e))*1e3)/1e3];function Bp(i,t,e){let n=[],s=[],r=[];if(i){for(let l of i.rooms)n.push({...l,id:`hall_${l.id}`});for(let l of i.openings)s.push({...l,id:`hall_${l.id}`,room_id:`hall_${l.room_id}`,wall:l.wall?`hall_${l.wall}`:l.wall});for(let l of i.walls??[])r.push({...l,id:`hall_${l.id}`})}let o=Ip();for(let l of t){let f=[l.x,l.z];for(let u of o.rooms)n.push({...u,id:`house_${l.id}_${u.id}`,points:u.points.map(([h,d])=>$y(h,d,l.facing,f))});for(let u of o.openings)s.push({...u,id:`house_${l.id}_${u.id}`,room_id:`house_${l.id}_${u.room_id}`})}for(let l of e)n.push($l(l.id,l.points));let a={id:"city",name:"City",elevation:0,height:We,rooms:n,openings:s,walls:r,furniture:[],placements:[],outdoor:[]};return{building:{floors:[a],settings:{wall_exterior:Ku,wall_interior:Qu}},floor:a}}var Jl=class extends Fl{cells=new Map;all;allDoors;curSolids;curDoors;constructor(t,e){super(t,e),this.all=[...this.solids],this.allDoors=[...this.doors],this.curSolids=this.all,this.curDoors=this.allDoors,Object.defineProperty(this,"solids",{get:()=>this.curSolids}),Object.defineProperty(this,"doors",{get:()=>this.curDoors});for(let n of this.all){let s=Math.min(n.a[0],n.a[0]+n.u[0]*n.len)-1,r=Math.max(n.a[0],n.a[0]+n.u[0]*n.len)+1,o=Math.min(n.a[1],n.a[1]+n.u[1]*n.len)-1,a=Math.max(n.a[1],n.a[1]+n.u[1]*n.len)+1;for(let c=Math.floor(s/8);c<=Math.floor(r/8);c++)for(let l=Math.floor(o/8);l<=Math.floor(a/8);l++){let f=`${c},${l}`,u=this.cells.get(f)??[];u.push(n),this.cells.set(f,u)}}}blocked(t,e){let n=this.cells.get(`${Math.floor(t[0]/8)},${Math.floor(t[1]/8)}`);if(!n)return!1;let s=this.curSolids;this.curSolids=n;try{return super.blocked(t,e)}finally{this.curSolids=s}}path(t,e){let n=Math.hypot(e[0]-t[0],e[1]-t[1]);if(n>40)return null;this.curDoors=this.allDoors.filter(s=>Math.hypot(s.centre[0]-t[0],s.centre[1]-t[1])+Math.hypot(s.centre[0]-e[0],s.centre[1]-e[1])<n+14);try{return super.path(t,e)}finally{this.curDoors=this.allDoors}}roomAt(t){return super.roomAt(t)??{id:"street",name:"",area_id:null,points:[],floor_material:""}}};var Yn=i=>12+(i-1)*16;function kp(i){let t=Yn(i),e=[];for(let n=-t+3;n<=t-3+1e-9;n+=2.2)Math.abs(n)>=3.5&&e.push(Math.round(n*100)/100);return e}function Zy(i){return kp(i).length*4}function ju(i){let t=Math.max(0,Math.floor(i)-1);for(let e=1;;e++){let n=Zy(e);if(t>=n){t-=n;continue}let s=kp(e),r=Math.floor(t/s.length),o=s[t%s.length],a=Yn(e)+1.4,[c,l]=r===0?[o,-a]:r===1?[a,o]:r===2?[-o,a]:[-a,-o];return{x:c,z:l,ring:e,facing:r*(Math.PI/2)}}}function Vp(i){return i>0?ju(i).ring:0}function Jy(i){let t=Yn(i+1)+8,e=[];for(let n=6.5;n<=t-10.5+1e-9;n+=10)e.push(n,-n);return e}function go(i){let t=Math.max(0,Math.floor(i));for(let e=0;;e++){let n=Jy(e);if(t>=n.length*4){t-=n.length*4;continue}let s=t%4,r=n[Math.floor(t/4)],o=Yn(e+1)+16/2,[a,c]=s===0?[r,-o]:s===1?[o,r]:s===2?[-r,o]:[-o,-r],l=[Math.PI,Math.PI/2,0,-Math.PI/2][s];return{x:a,z:c,ring:e+1,facing:l}}}function xo(i){let t=Math.floor(i/4)+1,e=i%4,n=Yn(t)+16/2,[s,r]=[[1,-1],[1,1],[-1,1],[-1,-1]][e];return{x:s*n,z:r*n,ring:t,facing:Math.atan2(s,r)}}function th(i,t){let e=i.filter(o=>o.level===t).sort((o,a)=>o.nr-a.nr),n=new Map,s=new Set;for(let o of e)o.plot!=null&&o.plot>=0&&!s.has(o.plot)&&(n.set(o.nr,o.plot),s.add(o.plot));let r=0;for(let o of e)if(!n.has(o.nr)){for(;s.has(r);)r++;n.set(o.nr,r),s.add(r)}return n}function eh(i){let t=i?.supporters;if(!Array.isArray(t))return[];let e=new Set(["neon","glow","spotlight","lighthouse"]),n=new Set,s=[];for(let r of t){let o=Number(r?.nr);if(!Number.isInteger(o)||o<1||o>1e5||n.has(o))continue;n.add(o);let a=typeof r.name=="string"?r.name.replace(/[\u0000-\u001f<>]/g,"").trim().slice(0,20):"";s.push({nr:o,name:a||null,level:e.has(r.level)?r.level:"neon",color:typeof r.color=="string"&&/^#[0-9a-f]{6}$/i.test(r.color)?r.color:null,since:typeof r.since=="string"&&/^\d{4}-\d{2}$/.test(r.since)?r.since:"",plot:Number.isInteger(r.plot)?r.plot:null})}return s.sort((r,o)=>r.nr-o.nr)}var Qy="",zp="neonplan3d.city",ci="#22d3ee",rs=new URLSearchParams(location.search),Gp=(rs.get("lang")??navigator.language).toLowerCase().startsWith("de"),cn=Gp?{title:"Supporter-Stadt",count:i=>`${i.toLocaleString("de-DE")} Menschen tragen NeonPlan 3D`,search:"Mein Licht finden: Nummer oder Name",none:"Kein Licht gefunden",since:"seit",demo:"Vorschau mit erfundenen Supportern",back:"\u2190 Demohaus",hint:"Tippe auf ein Licht: Wer leuchtet da?",hall:"NeonPlan 3D \u2013 getragen von allen hier",walk:"\u{1F6B6} Rundgang",walkEnd:"\u2715 Rundgang beenden",walkHint:"Ziehen: umsehen \xB7 Tippen: hingehen \xB7 W A S D oder der Knopf links unten: gehen"}:{title:"Supporter city",count:i=>`${i.toLocaleString("en")} people carry NeonPlan 3D`,search:"Find my light: number or name",none:"No light found",since:"since",demo:"Preview with invented supporters",back:"\u2190 Demo house",hint:"Tap a light: who shines there?",hall:"NeonPlan 3D \u2013 carried by everyone here",walk:"\u{1F6B6} Walk",walkEnd:"\u2715 End the walk",walkHint:"Drag: look around \xB7 Tap: walk there \xB7 W A S D or the stick at the bottom left: walk"};async function jy(){let i=rs.get("data")??Qy;if(i){try{let t=await fetch(i,{cache:"no-cache"});if(t.ok){let e=await t.json(),n=eh(e);if(n.length){try{localStorage.setItem(zp,JSON.stringify(e))}catch{}return{list:n,demo:!1}}}}catch{}try{let t=eh(JSON.parse(localStorage.getItem(zp)??"null"));if(t.length)return{list:t,demo:!1}}catch{}}return{list:md(Math.min(5e3,Number(rs.get("n"))||216)),demo:!0}}var nh=i=>`#${String(i).padStart(4,"0")}`,tM=i=>{let[t,e]=i.split("-").map(Number);return!t||!e?"":`${cn.since} ${new Intl.DateTimeFormat(Gp?"de-DE":"en",{month:"long",year:"numeric"}).format(new Date(t,e-1,1))}`};function eM(){let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);let n=new Is(i);return n.colorSpace=$e,n}function ih(i,t,e){let n=document.createElement("canvas"),s=n.getContext("2d"),r="600 44px system-ui, sans-serif";s.font=r;let o=Math.ceil(s.measureText(i).width)+48;n.width=o,n.height=76,s.font=r,s.fillStyle="rgba(8,14,28,0.82)",s.strokeStyle=t,s.lineWidth=4,s.beginPath(),s.roundRect(2,2,o-4,72,18),s.fill(),s.stroke(),s.fillStyle=t,s.textAlign="center",s.textBaseline="middle",s.fillText(i,o/2,40);let a=new Is(n);a.colorSpace=$e;let c=new yi(new ni({map:a,transparent:!0,depthWrite:!1}));return c.scale.set(e*o/76,e,1),c}async function nM(){let i=document.getElementById("city"),{list:t,demo:e}=await jy(),n=new Map(t.map(Q=>[Q.nr,Q])),s=t.length?t[t.length-1].nr:0,r=th(t,"spotlight"),o=th(t,"lighthouse"),a=Math.max(1,Vp(s),...[...r.values()].map(Q=>go(Q).ring+1),...[...o.values()].map(Q=>xo(Q).ring)),c=Yn(a)+8,l=new El({antialias:devicePixelRatio<2,powerPreference:"low-power"});l.setPixelRatio(Math.min(devicePixelRatio,1.5)),i.appendChild(l.domElement);let f=new xr;f.background=new ht("#04070e"),f.fog=new gr("#04070e",.9/(c*2.2));let u=new Ze(45,1,.5,c*8),h=eM(),d=new re({map:h,transparent:!0,blending:sn,depthWrite:!1}),g=new te(new en(c*2.6,c*2.6),new re({color:"#060b16"}));g.rotation.x=-Math.PI/2,f.add(g);let _=[];for(let Q=-c*1.3;Q<=c*1.3;Q+=6)_.push(Q,.01,-c*1.3,Q,.01,c*1.3,-c*1.3,.01,Q,c*1.3,.01,Q);let m=new Me;m.setAttribute("position",new Yt(_,3)),f.add(new fn(m,new ln({color:"#12305a",transparent:!0,opacity:.35})));let p=new re({color:"#0c1526"}),v=[],S=(Q,j,et,dt)=>{let ut=new te(new en(Math.abs(et-Q),Math.abs(dt-j)),p);ut.rotation.x=-Math.PI/2,ut.position.set((Q+et)/2,.02,(j+dt)/2),f.add(ut)};for(let Q=1;Q<=a;Q++){let j=Yn(Q);S(-j-1.5,-j-1.5,j+1.5,-j+1.5),S(-j-1.5,j-1.5,j+1.5,j+1.5),S(-j-1.5,-j+1.5,-j+1.5,j-1.5),S(j-1.5,-j+1.5,j+1.5,j-1.5);for(let et of[j-1.5,j+1.5])v.push(-et,.03,-et,et,.03,-et,et,.03,-et,et,.03,et,et,.03,et,-et,.03,et,-et,.03,et,-et,.03,-et)}let b=Yn(a)+1.5;S(-1.5,-b,1.5,-6.5),S(-1.5,6.5,1.5,b),S(-b,-1.5,-7.5,1.5),S(7.5,-1.5,b,1.5);let M=new Me;M.setAttribute("position",new Yt(v,3)),f.add(new fn(M,new ln({color:ci,transparent:!0,opacity:.22})));let T=null;try{T=(await import(new URL("../demo-data.js",import.meta.url).href)).DEMO_BUILDING??null}catch{}let R=Op(T,h),x=ih("NeonPlan 3D",ci,1.6);x.position.set(0,R?9.4:8.6,0),f.add(x);let y=new te(new en(26,22),new re({map:h,color:"#1f6f8a",transparent:!0,blending:sn,depthWrite:!1}));if(y.rotation.x=-Math.PI/2,y.position.y=.04,f.add(y),R)f.add(R.group);else{let Q=new Tn(12,4.2,9);Q.translate(0,2.1,0),f.add(new te(Q,new re({color:"#0f1a30"})),new fn(new ii(Q),new ln({color:ci})))}let E=new re({color:"#0a1120"}),L=new ln({color:"#1d3a66",transparent:!0,opacity:.6}),A=[...[...r.values()].map(Q=>({...go(Q),r:7.5})),...[...o.values()].map(Q=>({...xo(Q),r:7.5}))],C=[];for(let Q=0;Q<a-1;Q++){let j=Yn(Q+1)+16/2;for(let et=0;et<4;et++)for(let dt of[-.75,-.45,.45,.75].map(ut=>ut*j)){let[ut,B]=et===0?[dt,-j]:et===1?[j,dt]:et===2?[-dt,j]:[-j,-dt];if(A.some(mt=>Math.hypot(mt.x-ut,mt.z-B)<mt.r))continue;let lt=1.6+Math.abs((Q*7+et*3+Math.round(dt))*37)%30/10,nt=new Tn(3,lt,3);nt.translate(ut,lt/2,B),f.add(new te(nt,E),new fn(new ii(nt),L)),C.push({id:`block_${C.length}`,points:[[ut-1.5,B-1.5],[ut+1.5,B-1.5],[ut+1.5,B+1.5],[ut-1.5,B+1.5]]})}}for(let[Q,j]of o){let et=xo(j);C.push({id:`rock_${Q}`,points:Array.from({length:8},(dt,ut)=>[et.x+Math.cos(ut/8*Math.PI*2)*2.3,et.z+Math.sin(ut/8*Math.PI*2)*2.3])})}let I=[...r].map(([Q,j])=>{let et=go(j);return{id:String(Q),x:et.x,z:et.z,facing:et.facing,color:n.get(Q).color??ci}}),F=Bp(R?.ground??null,I,C),U=new Jl(F.building,F.floor),O=[],X=t.length,G=new Vn(.05,.07,2.2,6);G.translate(0,1.1,0);let H=new Xi(G,new re({color:"#2a3a5c"}),X),J=new Xi(new Lr(.22,10,8),new re({color:"#ffffff"}),X),pt=new Xi(new en(1,1).rotateX(-Math.PI/2),d,X),rt=new Je,ft=new ht;t.forEach((Q,j)=>{let et=ju(Q.nr),dt=Q.level!=="neon",ut=Q.color??ci,B=dt?1.25:1;rt.position.set(et.x,0,et.z),rt.rotation.set(0,0,0),rt.scale.set(1,B,1),rt.updateMatrix(),H.setMatrixAt(j,rt.matrix),rt.position.set(et.x,2.25*B,et.z),rt.scale.setScalar(B),rt.updateMatrix(),J.setMatrixAt(j,rt.matrix),J.setColorAt(j,ft.set(ut)),rt.position.set(et.x,.05,et.z),rt.scale.setScalar(dt?6:3.4),rt.updateMatrix(),pt.setMatrixAt(j,rt.matrix),pt.setColorAt(j,ft.set(ut).multiplyScalar(dt?.75:.45)),O.push({pos:new z(et.x,2.25*B,et.z),nr:Q.nr,radius:26})}),f.add(H,J,pt);let St=Np(h),Lt=[];for(let[Q,j]of r){let et=n.get(Q),dt=et.color??ci,ut=go(j),B=new Oe,lt=St.detail.clone(),nt=new te(new en(2.2,1.5).rotateX(-Math.PI/2),new re({color:new ht(dt).multiplyScalar(.45)}));nt.position.set(-1.9,.025,.6);let mt=new te(new en(2.6,2.6).rotateX(-Math.PI/2),new re({map:h,color:new ht(dt).multiplyScalar(.8),transparent:!0,blending:sn,depthWrite:!1}));mt.position.set(-1.25,.03,po/2+.9),lt.add(nt,mt),lt.position.y=mo;let Mt=Up(dt);Mt.visible=!1,B.add(lt,Mt);let at=ih(et.name??nh(Q),dt,.8);at.position.set(0,mo+We+3.4,0),B.add(at),B.position.set(ut.x,0,ut.z),B.rotation.y=ut.facing,f.add(B),Lt.push({at:new z(ut.x,1,ut.z),detail:lt,far:Mt}),O.push({pos:new z(ut.x,2,ut.z),nr:Q,radius:44})}let K=24,$=110,ct=new z(1e9,0,0),vt=()=>{if(u.position.distanceToSquared(ct)<4)return;ct=u.position.clone(),Lt.map(j=>({l:j,d:j.at.distanceTo(u.position)})).sort((j,et)=>j.d-et.d).forEach(({l:j,d:et},dt)=>{let ut=dt<K&&et<$;j.detail.visible=ut,j.far.visible=!ut})},_t=[];for(let[Q,j]of o){let et=n.get(Q),dt=et.color??ci,ut=xo(j),B=new Oe,lt=new te(new Ar(4.6,32).rotateX(-Math.PI/2),new re({color:"#0b3a5a"}));lt.position.y=.03;let nt=new te(new Fs(4.5,4.75,40).rotateX(-Math.PI/2),new re({color:ci,transparent:!0,opacity:.45}));nt.position.y=.04;let mt=new te(new Vn(1.9,2.3,.8,16),new re({color:"#1a2438"}));mt.position.y=.4;let Mt=new te(new Vn(.85,1.35,8,16),new re({color:"#9fb0cc"}));Mt.position.y=4.8,B.add(lt,nt,mt,Mt);for(let ze of[2.6,5.4]){let ui=new te(new Vn(1.19-(ze-.8)*.06,1.25-(ze-.8)*.06,1.1,16),new re({color:"#c2384f"}));ui.position.y=ze,B.add(ui)}let at=new te(new Vn(.7,.7,1.1,14),new re({color:dt}));at.position.y=9.35;let Nt=new te(new Ls(1,1.1,14),new re({color:"#1d2a44"}));Nt.position.y=10.45,B.add(at,Nt);let Ct=new yi(new ni({map:h,color:dt,blending:sn,depthWrite:!1,transparent:!0}));Ct.position.y=9.35,Ct.scale.setScalar(5),B.add(Ct);let le=new Oe;le.position.y=9.35;let ce=new re({color:dt,transparent:!0,opacity:.13,blending:sn,depthWrite:!1,side:He});for(let ze of[-1,1]){let ui=new te(new Ls(2.4,30,18,1,!0),ce);ui.rotation.z=ze*Math.PI/2,ui.position.x=ze*-15,le.add(ui)}le.rotation.y=j*1.3,_t.push(le),B.add(le);let rn=ih(et.name??nh(Q),dt,1.1);rn.position.y=12.3,B.add(rn),B.position.set(ut.x,0,ut.z),f.add(B),O.push({pos:new z(ut.x,6,ut.z),nr:Q,radius:50})}let Dt=new te(new Fs(.9,1.15,40).rotateX(-Math.PI/2),new re({color:"#ffffff",transparent:!0,blending:sn,depthWrite:!1}));Dt.visible=!1,Dt.position.y=.08,f.add(Dt);let Kt=document.getElementById("city-ui");Kt.innerHTML=`
    <header class="bar">
      <a class="back" href="../index.html">${cn.back}</a>
      <div class="titles"><b>${cn.title}</b><span class="count">${cn.count(t.length)}</span></div>
      <form class="find"><input type="search" enterkeyhint="search" placeholder="${cn.search}" aria-label="${cn.search}" /></form>
    </header>
    ${e?`<div class="note">${cn.demo}</div>`:""}
    <div class="hint">${cn.hint}</div>
    <button class="walk" type="button">${cn.walk}</button>
    <div class="stick" hidden><b></b></div>
    <div class="card" hidden></div>`;let Ot=Kt.querySelector(".card"),zt=Kt.querySelector(".find input"),Qt=Kt.querySelector(".hint"),qt=null,pe=0,Te=1,Pe=(Q,j)=>{qt=Q,pe=performance.now();let et=Q!==null?n.get(Q):void 0;if(!et||Q===null){Ot.hidden=!0,Dt.visible=!1;return}Qt.hidden=!0;let dt=et.color??ci;Ot.style.setProperty("--c",dt),Ot.innerHTML=`<i></i><div><b>Supporter ${nh(et.nr)}</b>${et.name?"<span></span>":""}<small>${tM(et.since)}</small></div>`,et.name&&(Ot.querySelector("span").textContent=et.name),Ot.hidden=!1;let ut=O.find(lt=>lt.nr===Q&&lt.radius>26)??O.find(lt=>lt.nr===Q),B=et.level==="lighthouse"?3.2:et.level==="spotlight"?2.6:1;Dt.position.set(ut.pos.x,.08,ut.pos.z),Te=B,Dt.material.color.set(dt),Dt.visible=!0,j&&k.flyTo({target:new z(ut.pos.x,1,ut.pos.z),radius:et.level==="lighthouse"?34:et.level==="spotlight"?20:13,phi:.95},1100),ae=!0};Kt.querySelector("form").addEventListener("submit",Q=>{Q.preventDefault();let j=zt.value.trim().replace(/^#/,""),et=Number(j),dt=j&&Number.isInteger(et)&&n.has(et)?et:t.find(ut=>ut.name&&j&&ut.name.toLowerCase().includes(j.toLowerCase()))?.nr;dt?(zt.blur(),Pe(dt,!0)):(zt.value="",zt.placeholder=cn.none)});let ae=!0,be=new z,k=new Cl(l.domElement,u,{change:()=>ae=!0,tap:(Q,j)=>{let et=l.domElement.clientWidth,dt=l.domElement.clientHeight,ut=null,B=1/0;for(let lt of O){if(be.copy(lt.pos).project(u),be.z>1)continue;let nt=Math.hypot((be.x+1)/2*et-Q,(1-be.y)/2*dt-j),mt=nt-(lt.radius>26?12:0);nt<lt.radius&&mt<B&&(ut=lt,B=mt)}Pe(ut?.nr??null,!1)},doubleTap:()=>{},hold:()=>{}});k.maxRadius=c*3,k.minRadius=6,k.view={target:new z(0,0,0),radius:Math.max(46,c*1.9),theta:-.55,phi:.92};let Ie=()=>{let Q=i.clientWidth,j=i.clientHeight;l.setSize(Q,j),u.aspect=Q/Math.max(1,j),u.updateProjectionMatrix(),ae=!0};new ResizeObserver(Ie).observe(i),Ie();let jt=null,N=Kt.querySelector(".walk"),w=Kt.querySelector(".stick"),W=w.querySelector("b"),Z={y:mo,floor:F.floor,mask:{standing:{value:0},glass:{value:0}}},it={camera:u,controls:k,floorMap:new Map([[F.floor.id,Z]]),floors:[Z],labels:document.createElement("div"),renderer:l,invalidate:()=>ae=!0,updateWalls:()=>{}},gt=()=>{jt?.dispose(),jt=null,N.textContent=cn.walk,w.hidden=!0,Qt.textContent=cn.hint,k.flyTo({target:new z(u.position.x,0,u.position.z),radius:28,phi:.9},900)},bt=()=>{Ot.hidden=!0,Dt.visible=!1;let Q=R?Math.max(...R.ground.rooms.flatMap(j=>j.points.map(et=>et[1])))+7:12;jt=new Nl(it,U,l.domElement,{start:{x:0,z:Q,yaw:-Math.PI/2,pitch:-.08},onRoom:j=>{j?.id.startsWith("house_")&&Pe(Number(j.id.split("_")[1]),!1)}}),N.textContent=cn.walkEnd,w.hidden=!1,Qt.hidden=!1,Qt.textContent=cn.walkHint,ae=!0};N.addEventListener("click",()=>jt?gt():bt()),addEventListener("keydown",Q=>{Q.key==="Escape"&&jt&&gt()}),w.addEventListener("pointerdown",Q=>{w.setPointerCapture(Q.pointerId);let j=dt=>{let ut=w.getBoundingClientRect(),B=(dt.clientX-(ut.left+ut.width/2))/(ut.width/2),lt=(dt.clientY-(ut.top+ut.height/2))/(ut.height/2),nt=Math.hypot(B,lt);nt>1&&(B/=nt,lt/=nt),W.style.transform=`translate(${B*34}px, ${lt*34}px)`,jt?.setStick({x:B,y:lt})},et=()=>{W.style.transform="",jt?.setStick(null),w.removeEventListener("pointermove",j),w.removeEventListener("pointerup",et),w.removeEventListener("pointercancel",et)};j(Q),w.addEventListener("pointermove",j),w.addEventListener("pointerup",et),w.addEventListener("pointercancel",et)}),(rs.has("rundgang")||rs.has("walk"))&&setTimeout(bt,300);let st=Number(rs.get("licht")??rs.get("light"));Number.isInteger(st)&&n.has(st)&&setTimeout(()=>Pe(st,!0),400);let ot=0,yt=-1,Ft=Q=>{requestAnimationFrame(Ft);let j=k.update(Q),et=ot?Math.min(.1,(Q-ot)/1e3):0;ot=Q;for(let ut of _t)ut.rotation.y+=et*.55;let dt=jt?1:Math.min(1,Math.max(0,(k.view.radius-16)/14));if(Math.abs(dt-yt)>.01&&(yt=dt,Lp(dt),ae=!0),vt(),qt!==null&&Dt.visible){let ut=(Q-pe)/1e3%1.6;Dt.material.opacity=.9-ut/2,Dt.scale.setScalar(Te*(1+ut*.5))}(j||_t.length||Dt.visible||ae)&&(l.render(f,u),ae=!1)};requestAnimationFrame(Ft)}nM();
