import{c as Ea,r as ot,j as Ue}from"./index-5dbfa1c3.js";const Zc=Ea("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]),el=Ea("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]),tl=Ea("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Ss=function(r,n){return(Ss=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(r,n)};function xt(r,n){function e(){this.constructor=r}Ss(r,n),r.prototype=n===null?Object.create(n):(e.prototype=n.prototype,new e)}function X(r,n,e,t){return new(e||(e=Promise))(function(o,a){function i(c){try{u(t.next(c))}catch(l){a(l)}}function s(c){try{u(t.throw(c))}catch(l){a(l)}}function u(c){c.done?o(c.value):new e(function(l){l(c.value)}).then(i,s)}u((t=t.apply(r,n||[])).next())})}function Y(r,n){var e,t,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(u){return function(c){return function(l){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,t&&(o=2&l[0]?t.return:l[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,l[1])).done)return o;switch(t=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,t=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){i=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){i.label=l[1];break}if(l[0]===6&&i.label<o[1]){i.label=o[1],o=l;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(l);break}o[2]&&i.ops.pop(),i.trys.pop();continue}l=n.call(r,i)}catch(h){l=[6,h],t=0}finally{e=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([u,c])}}}var nl=function(){function r(n){this.global=n,this.flags={},this.flagRegistry={},this.urlFlags={},this.populateURLFlags()}return r.prototype.setPlatform=function(n,e){this.platform!=null&&console.warn("Platform "+this.platformName+" has already been set. Overwriting the platform with "+e+"."),this.platformName=n,this.platform=e},r.prototype.registerFlag=function(n,e,t){if(this.flagRegistry[n]={evaluationFn:e,setHook:t},this.urlFlags[n]!=null){var o=this.urlFlags[n];console.warn("Setting feature override from URL "+n+": "+o+"."),this.set(n,o)}},r.prototype.get=function(n){return n in this.flags?this.flags[n]:(this.flags[n]=this.evaluateFlag(n),this.flags[n])},r.prototype.getNumber=function(n){return this.get(n)},r.prototype.getBool=function(n){return this.get(n)},r.prototype.getFlags=function(){return this.flags},Object.defineProperty(r.prototype,"features",{get:function(){return this.flags},enumerable:!0,configurable:!0}),r.prototype.set=function(n,e){if(this.flagRegistry[n]==null)throw new Error("Cannot set flag "+n+" as it has not been registered.");this.flags[n]=e,this.flagRegistry[n].setHook!=null&&this.flagRegistry[n].setHook(e)},r.prototype.evaluateFlag=function(n){if(this.flagRegistry[n]==null)throw new Error("Cannot evaluate flag '"+n+"': no evaluation function found.");return this.flagRegistry[n].evaluationFn()},r.prototype.setFlags=function(n){this.flags=Object.assign({},n)},r.prototype.reset=function(){this.flags={},this.urlFlags={},this.populateURLFlags()},r.prototype.populateURLFlags=function(){var n=this;if(this.global!==void 0&&this.global.location!==void 0&&this.global.location.search!==void 0){var e,t,o=(e=this.global.location.search,t={},e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,function(a){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return rl(t,i[0],i[1]),i.join("=")}),t);"tfjsflags"in o&&o.tfjsflags.split(",").forEach(function(a){var i=a.split(":"),s=i[0],u=i[1];n.urlFlags[s]=function(c,l){if((l=l.toLowerCase())==="true"||l==="false")return l==="true";if(""+ +l===l)return+l;throw new Error("Could not parse value flag value "+l+" for flag "+c+".")}(s,u)})}},r}();function rl(r,n,e){r[decodeURIComponent(n)]=decodeURIComponent(e||"")}function P(){return Ds}var Ds=null,Br=new Map,ta=new Map;function As(r,n){var e=Ns(r,n);return Br.get(e)}function ol(r){return ta.get(r)}function Si(r){for(var n=Br.entries(),e=[];;){var t=n.next(),o=t.done,a=t.value;if(o)break;var i=a[0],s=a[1];i.split("_")[0]===r&&e.push(s)}return e}function Ts(r){var n=r.kernelName,e=r.backendName,t=Ns(n,e);if(Br.has(t))throw new Error("The kernel '"+n+"' for backend '"+e+"' is already registered");Br.set(t,r)}function al(r){var n=r.kernelName;ta.has(n)&&console.warn("Overriding the gradient for '"+n+"'"),ta.set(n,r)}function Ns(r,n){return n+"_"+r}function na(r,n,e){return Math.max(r,Math.min(n,e))}function Fs(r){return r%2==0?r:r+1}function il(r){for(var n=0,e=0;e<r.length;e++)n+=r[e];return n}function E(r,n){if(!r)throw new Error(typeof n=="string"?n:n())}function ye(r,n,e){e===void 0&&(e=""),E(We(r,n),function(){return e+" Shapes "+r+" and "+n+" must match"})}function Kn(r){E(r!=null,function(){return"The input to the tensor constructor must be a non-null value."})}function Gn(r,n,e){if(n===void 0&&(n=[]),e===void 0&&(e=!1),n==null&&(n=[]),Array.isArray(r)||At(r)&&!e)for(var t=0;t<r.length;++t)Gn(r[t],n,e);else n.push(r);return n}function $(r){if(r.length===0)return 1;for(var n=r[0],e=1;e<r.length;e++)n*=r[e];return n}function We(r,n){if(r===n)return!0;if(r==null||n==null||r.length!==n.length)return!1;for(var e=0;e<r.length;e++)if(r[e]!==n[e])return!1;return!0}function De(r){return r%1==0}function sl(r){if(Math.tanh!=null)return Math.tanh(r);if(r===1/0)return 1;if(r===-1/0)return-1;var n=Math.exp(2*r);return(n-1)/(n+1)}function ra(r){var n=Math.ceil(Math.sqrt(r));return[n,Math.ceil(r/n)]}function On(r,n){return n<=r.length?r:r+" ".repeat(n-r.length)}function Di(r,n,e){return n===void 0&&(n=function(t){return 0}),new Promise(function(t,o){var a=0,i=function(){if(r())t();else{a++;var s=n(a);e!=null&&a>=e?o():setTimeout(i,s)}};i()})}function ul(r,n){for(var e=1,t=-1,o=0;o<r.length;++o)if(r[o]>=0)e*=r[o];else if(r[o]===-1){if(t!==-1)throw Error("Shapes can only have 1 implicit size. Found -1 at dim "+t+" and dim "+o);t=o}else if(r[o]<0)throw Error("Shapes can not be < 0. Found "+r[o]+" at dim "+o);if(t===-1){if(n>0&&n!==e)throw Error("Size("+n+") must match the product of shape "+r);return r}if(e===0)throw Error("Cannot infer the missing size in ["+r+"] when there are 0 elements");if(n%e!=0)throw Error("The implicit shape can't be a fractional number. Got "+n+" / "+e);var a=r.slice();return a[t]=n/e,a}function Be(r,n){var e=n.length;return E((r=r==null?n.map(function(t,o){return o}):[].concat(r)).every(function(t){return t>=-e&&t<e}),function(){return"All values in axis param must be in range [-"+e+", "+e+") but got axis "+r}),E(r.every(function(t){return De(t)}),function(){return"All values in axis param must be integers but got axis "+r}),r.map(function(t){return t<0?e+t:t})}function dn(r,n){for(var e=[],t=[],o=n!=null&&Array.isArray(n)&&n.length===0,a=n==null||o?null:Be(n,r).sort(),i=0,s=0;s<r.length;++s){if(a!=null){if(a[i]===s&&r[s]!==1)throw new Error("Can't squeeze axis "+s+" since its dim '"+r[s]+"' is not 1");(a[i]==null||a[i]>s)&&r[s]===1&&(e.push(r[s]),t.push(s)),a[i]<=s&&i++}r[s]!==1&&(e.push(r[s]),t.push(s))}return{newShape:e,keptDims:t}}function rr(r,n){var e=null;if(r==null||r==="float32")e=new Float32Array(n);else if(r==="int32")e=new Int32Array(n);else{if(r!=="bool")throw new Error("Unknown data type "+r);e=new Uint8Array(n)}return e}function Lr(r,n){var e=null;if(r==null||r==="float32")e=new Float32Array(n);else if(r==="int32")e=new Int32Array(n);else if(r==="bool")e=new Uint8Array(n);else{if(r!=="string")throw new Error("Unknown data type "+r);e=new Array(n)}return e}function cl(r,n){for(var e=0;e<r.length;e++){var t=r[e];if(isNaN(t)||!isFinite(t))throw Error("A tensor of type "+n+" being uploaded contains "+t+".")}}function ll(r){return r==="bool"||r==="complex64"||r==="float32"||r==="int32"||r==="string"}function hl(r,n){return n!=="complex64"&&(n!=="float32"||r==="complex64")&&(n!=="int32"||r==="float32"||r==="complex64")&&(n!=="bool"||r!=="bool")}function At(r){return r instanceof Float32Array||r instanceof Int32Array||r instanceof Uint8Array}function Ms(r){if(r==="float32"||r==="int32")return 4;if(r==="complex64")return 8;if(r==="bool")return 1;throw new Error("Unknown dtype "+r)}function fl(r){if(r==null)return 0;var n=0;return r.forEach(function(e){return n+=e.length}),n}function Ra(r){return typeof r=="string"||r instanceof String}function pl(r){return typeof r=="boolean"}function dl(r){return typeof r=="number"}function fr(r){return Array.isArray(r)?fr(r[0]):r instanceof Float32Array?"float32":r instanceof Int32Array||r instanceof Uint8Array?"int32":dl(r)?"float32":Ra(r)?"string":pl(r)?"bool":"float32"}function oa(r){return!!(r&&r.constructor&&r.call&&r.apply)}function aa(r,n){for(var e=n;e<r;++e)if(r%e==0)return e;return r}function Tt(r){var n=r.length;if(n<2)return[];var e=new Array(n-1);e[n-2]=r[n-1];for(var t=n-3;t>=0;--t)e[t]=e[t+1]*r[t+1];return e}function Ps(r,n,e){if(n==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(r)&&(r=Gn(r)),e&&cl(r,n),function(a,i){return a instanceof Float32Array&&i==="float32"||a instanceof Int32Array&&i==="int32"||a instanceof Uint8Array&&i==="bool"}(r,n))return r;if(n==null||n==="float32"||n==="complex64")return new Float32Array(r);if(n==="int32")return new Int32Array(r);if(n==="bool"){for(var t=new Uint8Array(r.length),o=0;o<t.length;++o)Math.round(r[o])!==0&&(t[o]=1);return t}throw new Error("Unknown data type "+n)}function Ai(r,n){if(r.length===0)return n[0];var e=r.reduce(function(t,o){return t*o});if(e===0)return[];if(e!==n.length)throw new Error("["+r+"] does not match the input size.");return function t(o,a,i){var s=new Array;if(a.length===1)for(var u=a[0],c=0;c<u;c++)s[c]=i[o+c];else{u=a[0];var l=a.slice(1),h=l.reduce(function(f,p){return f*p});for(c=0;c<u;c++)s[c]=t(o+c*h,l,i)}return s}(0,r,n)}function Os(r,n){for(var e=pr(r,n),t=0;t<e.length;t++)e[t]=1;return e}function pr(r,n){if(n==null||n==="float32"||n==="complex64")return new Float32Array(r);if(n==="int32")return new Int32Array(r);if(n==="bool")return new Uint8Array(r);throw new Error("Unknown data type "+n)}function It(){return P().platform.now()}function Bs(r){r.forEach(function(n){E(Number.isInteger(n)&&n>=0,function(){return"Tensor must have a shape comprised of positive integers but got shape ["+r+"]."})})}function vl(r,n){return n===void 0&&(n="utf-8"),n=n||"utf-8",P().platform.encode(r,n)}function Wr(r,n){return n===void 0&&(n="utf-8"),n=n||"utf-8",P().platform.decode(r,n)}function Ti(r,n,e){if(n===0)return 0;if(n===1)return r[0];for(var t=r[r.length-1],o=0;o<r.length-1;++o)t+=e[o]*r[o];return t}function ml(r,n,e){if(n===0)return[];if(n===1)return[r];for(var t=new Array(n),o=0;o<t.length-1;++o)t[o]=Math.floor(r/e[o]),r-=t[o]*e[o];return t[t.length-1]=r,t}var gl=function(){function r(n,e){this.backendTimer=n,this.logger=e,e==null&&(this.logger=new yl)}return r.prototype.profileKernel=function(n,e,t){var o,a=this,i=this.backendTimer.time(function(){o=t()});return o.forEach(function(s){s.data().then(function(u){(function(c,l,h){if(l!=="float32")return!1;for(var f=0;f<c.length;f++){var p=c[f];if(isNaN(p)||!isFinite(p))return console.warn("Found "+p+" in the result of '"+h+"'"),!0}})(u,s.dtype,n),i.then(function(c){var l="";c.getExtraProfileInfo!=null&&(l=c.getExtraProfileInfo()),a.logger.logKernelProfile(n,s,u,c.kernelMs,e,l)})})}),o},r}(),yl=function(){function r(){}return r.prototype.logKernelProfile=function(n,e,t,o,a,i){var s=typeof o=="number"?On(o+"ms",9):o.error,u=On(n,25),c=e.rank,l=e.size,h=On(e.shape.toString(),14),f="";for(var p in a){var d=a[p].shape||e.shape,m=d.length;f+=p+": "+m+"D "+(m>0?d:"")+" "}console.log("%c"+u+"	%c"+s+"	%c"+c+"D "+h+"	%c"+l+"	%c"+f+"	%c"+i,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")},r}(),Ni=20,Yn=3,So=7;function xl(r,n,e,t){var o=Tt(n),a=function(c,l,h,f){var p=$(l),d=f[f.length-1],m=new Array(d).fill(0),v=l.length,g=h==="complex64"?Jn(c):c;if(v>1)for(var x=0;x<p/d;x++)for(var b=x*d,y=0;y<d;y++)m[y]=Math.max(m[y],$n(g[b+y],0,h).length);return m}(r,n,e,o),i=n.length,s=function c(l,h,f,p,d,m){m===void 0&&(m=!0);var v=f==="complex64"?2:1,g=h[0],x=h.length;if(x===0)return f==="complex64"?[$n(Jn(l)[0],0,f)]:f==="bool"?[Ls(l[0])]:[l[0].toString()];if(x===1){if(g>Ni){var b=Yn*v,y=Array.from(l.slice(0,b)),w=Array.from(l.slice((g-Yn)*v,g*v));return f==="complex64"&&(y=Jn(y),w=Jn(w)),["["+y.map(function(B,U){return $n(B,d[U],f)}).join(", ")+", ..., "+w.map(function(B,U){return $n(B,d[g-Yn+U],f)}).join(", ")+"]"]}return["["+(f==="complex64"?Jn(l):Array.from(l)).map(function(B,U){return $n(B,d[U],f)}).join(", ")+"]"]}var C=h.slice(1),S=p.slice(1),k=p[0]*v,R=[];if(g>Ni){for(var I=0;I<Yn;I++){var N=(A=I*k)+k;R.push.apply(R,c(l.slice(A,N),C,f,S,d,!1))}for(R.push("..."),I=g-Yn;I<g;I++)N=(A=I*k)+k,R.push.apply(R,c(l.slice(A,N),C,f,S,d,I===g-1))}else for(I=0;I<g;I++){var A;N=(A=I*k)+k,R.push.apply(R,c(l.slice(A,N),C,f,S,d,I===g-1))}var L=x===2?",":"";for(R[0]="["+R[0]+L,I=1;I<R.length-1;I++)R[I]=" "+R[I]+L;var O=`,
`;for(I=2;I<x;I++)O+=`
`;return R[R.length-1]=" "+R[R.length-1]+"]"+(m?"":O),R}(r,n,e,o,a),u=["Tensor"];return t&&(u.push("  dtype: "+e),u.push("  rank: "+i),u.push("  shape: ["+n+"]"),u.push("  values:")),u.push(s.map(function(c){return"    "+c}).join(`
`)),u.join(`
`)}function $n(r,n,e){return On(Array.isArray(r)?parseFloat(r[0].toFixed(So))+" + "+parseFloat(r[1].toFixed(So))+"j":Ra(r)?"'"+r+"'":e==="bool"?Ls(r):parseFloat(r.toFixed(So)).toString(),n)}function Ls(r){return r===0?"false":"true"}function Jn(r){for(var n=[],e=0;e<r.length;e+=2)n.push([r[e],r[e+1]]);return n}var or=function(){function r(n,e,t){var o=this;if(this.dtype=e,this.shape=n.slice(),this.size=$(n),t!=null){var a=t.length;E(a===this.size,function(){return"Length of values '"+a+"' does not match the size inferred by the shape '"+o.size+"'."})}if(e==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=t||Lr(e,this.size),this.strides=Tt(n)}return r.prototype.set=function(n){for(var e=this,t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];t.length===0&&(t=[0]),E(t.length===this.rank,function(){return"The number of provided coordinates ("+t.length+") must match the rank ("+e.rank+")"});var a=this.locToIndex(t);this.values[a]=n},r.prototype.get=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];n.length===0&&(n=[0]);for(var t=0,o=0,a=n;o<a.length;o++){var i=a[o];if(i<0||i>=this.shape[t]){var s="Requested out of range element at "+n+".   Buffer shape="+this.shape;throw new Error(s)}t++}for(var u=n[n.length-1],c=0;c<n.length-1;++c)u+=this.strides[c]*n[c];return this.values[u]},r.prototype.locToIndex=function(n){if(this.rank===0)return 0;if(this.rank===1)return n[0];for(var e=n[n.length-1],t=0;t<n.length-1;++t)e+=this.strides[t]*n[t];return e},r.prototype.indexToLoc=function(n){if(this.rank===0)return[];if(this.rank===1)return[n];for(var e=new Array(this.shape.length),t=0;t<e.length-1;++t)e[t]=Math.floor(n/this.strides[t]),n-=e[t]*this.strides[t];return e[e.length-1]=n,e},Object.defineProperty(r.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),r.prototype.toTensor=function(){return kt().makeTensor(this.values,this.shape,this.dtype)},r}(),kt=null,M=null,Ws=null,Ee=function(){function r(n,e,t,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=n.slice(),this.dtype=e||"float32",this.size=$(n),this.strides=Tt(n),this.dataId=t,this.id=o,this.rankType=this.rank<5?this.rank.toString():"higher"}return r.prototype.flatten=function(){return this.throwIfDisposed(),this.as1D()},r.prototype.asScalar=function(){return this.throwIfDisposed(),E(this.size===1,function(){return"The array must have only 1 element."}),this.reshape([])},r.prototype.as1D=function(){return this.throwIfDisposed(),this.reshape([this.size])},r.prototype.as2D=function(n,e){return this.throwIfDisposed(),this.reshape([n,e])},r.prototype.as3D=function(n,e,t){return this.throwIfDisposed(),this.reshape([n,e,t])},r.prototype.as4D=function(n,e,t,o){return this.throwIfDisposed(),this.reshape([n,e,t,o])},r.prototype.as5D=function(n,e,t,o,a){return this.throwIfDisposed(),this.reshape([n,e,t,o,a])},r.prototype.asType=function(n){return this.throwIfDisposed(),M.cast(this,n)},Object.defineProperty(r.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),r.prototype.buffer=function(){return X(this,void 0,void 0,function(){var n;return Y(this,function(e){switch(e.label){case 0:return[4,this.data()];case 1:return n=e.sent(),[2,M.buffer(this.shape,this.dtype,n)]}})})},r.prototype.bufferSync=function(){return M.buffer(this.shape,this.dtype,this.dataSync())},r.prototype.array=function(){return X(this,void 0,void 0,function(){var n;return Y(this,function(e){switch(e.label){case 0:return[4,this.data()];case 1:return n=e.sent(),[2,Ai(this.shape,n)]}})})},r.prototype.arraySync=function(){return Ai(this.shape,this.dataSync())},r.prototype.data=function(){return X(this,void 0,void 0,function(){var n,e;return Y(this,function(t){switch(t.label){case 0:return this.throwIfDisposed(),n=kt().read(this.dataId),this.dtype!=="string"?[3,2]:[4,n];case 1:e=t.sent();try{return[2,e.map(function(o){return Wr(o)})]}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}t.label=2;case 2:return[2,n]}})})},r.prototype.dataSync=function(){this.throwIfDisposed();var n=kt().readSync(this.dataId);if(this.dtype==="string")try{return n.map(function(e){return Wr(e)})}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return n},r.prototype.bytes=function(){return X(this,void 0,void 0,function(){var n;return Y(this,function(e){switch(e.label){case 0:return this.throwIfDisposed(),[4,kt().read(this.dataId)];case 1:return n=e.sent(),this.dtype==="string"?[2,n]:[2,new Uint8Array(n.buffer)]}})})},r.prototype.dispose=function(){this.isDisposed||(kt().disposeTensor(this),this.isDisposedInternal=!0)},Object.defineProperty(r.prototype,"isDisposed",{get:function(){return this.isDisposedInternal},enumerable:!0,configurable:!0}),r.prototype.throwIfDisposed=function(){if(this.isDisposed)throw new Error("Tensor is disposed.")},r.prototype.toFloat=function(){return this.asType("float32")},r.prototype.toInt=function(){return this.asType("int32")},r.prototype.toBool=function(){return this.asType("bool")},r.prototype.print=function(n){return n===void 0&&(n=!1),M.print(this,n)},r.prototype.reshape=function(n){return this.throwIfDisposed(),M.reshape(this,n)},r.prototype.reshapeAs=function(n){return this.throwIfDisposed(),this.reshape(n.shape)},r.prototype.expandDims=function(n){return n===void 0&&(n=0),M.expandDims(this,n)},r.prototype.cumsum=function(n,e,t){return n===void 0&&(n=0),e===void 0&&(e=!1),t===void 0&&(t=!1),M.cumsum(this,n,e,t)},r.prototype.squeeze=function(n){return this.throwIfDisposed(),M.squeeze(this,n)},r.prototype.clone=function(){return this.throwIfDisposed(),M.clone(this)},r.prototype.oneHot=function(n,e,t){return this.throwIfDisposed(),M.oneHot(this,n,e,t)},r.prototype.toString=function(n){return n===void 0&&(n=!1),xl(this.dataSync(),this.shape,this.dtype,n)},r.prototype.tile=function(n){return this.throwIfDisposed(),M.tile(this,n)},r.prototype.gather=function(n,e){return e===void 0&&(e=0),this.throwIfDisposed(),M.gather(this,n,e)},r.prototype.matMul=function(n,e,t){return e===void 0&&(e=!1),t===void 0&&(t=!1),this.throwIfDisposed(),M.matMul(this,n,e,t)},r.prototype.dot=function(n){return this.throwIfDisposed(),M.dot(this,n)},r.prototype.norm=function(n,e,t){return n===void 0&&(n="euclidean"),e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),M.norm(this,n,e,t)},r.prototype.slice=function(n,e){return this.throwIfDisposed(),M.slice(this,n,e)},r.prototype.reverse=function(n){return this.throwIfDisposed(),M.reverse(this,n)},r.prototype.concat=function(n,e){return e===void 0&&(e=0),this.throwIfDisposed(),n instanceof r&&(n=[n]),M.concat([this].concat(n),e)},r.prototype.split=function(n,e){return e===void 0&&(e=0),this.throwIfDisposed(),M.split(this,n,e)},r.prototype.stack=function(n,e){return e===void 0&&(e=0),M.stack([this,n],e)},r.prototype.unstack=function(n){return n===void 0&&(n=0),M.unstack(this,n)},r.prototype.pad=function(n,e){return e===void 0&&(e=0),M.pad(this,n,e)},r.prototype.batchNormalization=function(n,e,t,o,a){return t===void 0&&(t=.001),Ws("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon"),this.batchNorm(n,e,a,o,t)},r.prototype.batchNorm=function(n,e,t,o,a){return a===void 0&&(a=.001),this.throwIfDisposed(),M.batchNorm(this,n,e,t,o,a)},r.prototype.all=function(n,e){return n===void 0&&(n=null),e===void 0&&(e=!1),this.throwIfDisposed(),M.all(this,n,e)},r.prototype.any=function(n,e){return n===void 0&&(n=null),e===void 0&&(e=!1),this.throwIfDisposed(),M.any(this,n,e)},r.prototype.logSumExp=function(n,e){return n===void 0&&(n=null),e===void 0&&(e=!1),this.throwIfDisposed(),M.logSumExp(this,n,e)},r.prototype.sum=function(n,e){return n===void 0&&(n=null),e===void 0&&(e=!1),this.throwIfDisposed(),M.sum(this,n,e)},r.prototype.prod=function(n,e){return n===void 0&&(n=null),e===void 0&&(e=!1),this.throwIfDisposed(),M.prod(this,n,e)},r.prototype.mean=function(n,e){return n===void 0&&(n=null),e===void 0&&(e=!1),this.throwIfDisposed(),M.mean(this,n,e)},r.prototype.min=function(n,e){return n===void 0&&(n=null),e===void 0&&(e=!1),this.throwIfDisposed(),M.min(this,n,e)},r.prototype.max=function(n,e){return n===void 0&&(n=null),e===void 0&&(e=!1),this.throwIfDisposed(),M.max(this,n,e)},r.prototype.argMin=function(n){return n===void 0&&(n=null),this.throwIfDisposed(),M.argMin(this,n)},r.prototype.argMax=function(n){return n===void 0&&(n=null),this.throwIfDisposed(),M.argMax(this,n)},r.prototype.cast=function(n){return this.throwIfDisposed(),M.cast(this,n)},r.prototype.add=function(n){return this.throwIfDisposed(),M.add(this,n)},r.prototype.addStrict=function(n){return this.throwIfDisposed(),M.addStrict(this,n)},r.prototype.atan2=function(n){return this.throwIfDisposed(),M.atan2(this,n)},r.prototype.sub=function(n){return this.throwIfDisposed(),M.sub(this,n)},r.prototype.subStrict=function(n){return this.throwIfDisposed(),M.subStrict(this,n)},r.prototype.pow=function(n){return this.throwIfDisposed(),M.pow(this,n)},r.prototype.powStrict=function(n){return this.throwIfDisposed(),M.powStrict(this,n)},r.prototype.mul=function(n){return this.throwIfDisposed(),M.mul(this,n)},r.prototype.mulStrict=function(n){return this.throwIfDisposed(),M.mulStrict(this,n)},r.prototype.div=function(n){return this.throwIfDisposed(),M.div(this,n)},r.prototype.divNoNan=function(n){return this.throwIfDisposed(),M.divNoNan(this,n)},r.prototype.floorDiv=function(n){return this.throwIfDisposed(),M.floorDiv(this,n)},r.prototype.divStrict=function(n){return this.throwIfDisposed(),M.divStrict(this,n)},r.prototype.minimum=function(n){return this.throwIfDisposed(),M.minimum(this,n)},r.prototype.minimumStrict=function(n){return this.throwIfDisposed(),M.minimumStrict(this,n)},r.prototype.maximum=function(n){return this.throwIfDisposed(),M.maximum(this,n)},r.prototype.maximumStrict=function(n){return this.throwIfDisposed(),M.maximumStrict(this,n)},r.prototype.mod=function(n){return this.throwIfDisposed(),M.mod(this,n)},r.prototype.modStrict=function(n){return this.throwIfDisposed(),M.modStrict(this,n)},r.prototype.squaredDifferenceStrict=function(n){return this.throwIfDisposed(),M.squaredDifferenceStrict(this,n)},r.prototype.transpose=function(n){return this.throwIfDisposed(),M.transpose(this,n)},r.prototype.notEqual=function(n){return this.throwIfDisposed(),M.notEqual(this,n)},r.prototype.notEqualStrict=function(n){return this.throwIfDisposed(),M.notEqualStrict(this,n)},r.prototype.less=function(n){return this.throwIfDisposed(),M.less(this,n)},r.prototype.lessStrict=function(n){return this.throwIfDisposed(),M.lessStrict(this,n)},r.prototype.equal=function(n){return this.throwIfDisposed(),M.equal(this,n)},r.prototype.equalStrict=function(n){return this.throwIfDisposed(),M.equalStrict(this,n)},r.prototype.lessEqual=function(n){return this.throwIfDisposed(),M.lessEqual(this,n)},r.prototype.lessEqualStrict=function(n){return this.throwIfDisposed(),M.lessEqualStrict(this,n)},r.prototype.greater=function(n){return this.throwIfDisposed(),M.greater(this,n)},r.prototype.greaterStrict=function(n){return this.throwIfDisposed(),M.greaterStrict(this,n)},r.prototype.greaterEqual=function(n){return this.throwIfDisposed(),M.greaterEqual(this,n)},r.prototype.greaterEqualStrict=function(n){return this.throwIfDisposed(),M.greaterEqualStrict(this,n)},r.prototype.logicalAnd=function(n){return this.throwIfDisposed(),M.logicalAnd(this,n)},r.prototype.logicalOr=function(n){return this.throwIfDisposed(),M.logicalOr(this,n)},r.prototype.logicalNot=function(){return this.throwIfDisposed(),M.logicalNot(this)},r.prototype.logicalXor=function(n){return this.throwIfDisposed(),M.logicalXor(this,n)},r.prototype.where=function(n,e){return this.throwIfDisposed(),M.where(n,this,e)},r.prototype.neg=function(){return this.throwIfDisposed(),M.neg(this)},r.prototype.ceil=function(){return this.throwIfDisposed(),M.ceil(this)},r.prototype.floor=function(){return this.throwIfDisposed(),M.floor(this)},r.prototype.sign=function(){return this.throwIfDisposed(),M.sign(this)},r.prototype.isNaN=function(){return this.throwIfDisposed(),M.isNaN(this)},r.prototype.isInf=function(){return this.throwIfDisposed(),M.isInf(this)},r.prototype.isFinite=function(){return this.throwIfDisposed(),M.isFinite(this)},r.prototype.exp=function(){return this.throwIfDisposed(),M.exp(this)},r.prototype.expm1=function(){return this.throwIfDisposed(),M.expm1(this)},r.prototype.log=function(){return this.throwIfDisposed(),M.log(this)},r.prototype.log1p=function(){return this.throwIfDisposed(),M.log1p(this)},r.prototype.sqrt=function(){return this.throwIfDisposed(),M.sqrt(this)},r.prototype.rsqrt=function(){return this.throwIfDisposed(),M.rsqrt(this)},r.prototype.square=function(){return this.throwIfDisposed(),M.square(this)},r.prototype.reciprocal=function(){return this.throwIfDisposed(),M.reciprocal(this)},r.prototype.abs=function(){return this.throwIfDisposed(),M.abs(this)},r.prototype.clipByValue=function(n,e){return this.throwIfDisposed(),M.clipByValue(this,n,e)},r.prototype.relu=function(){return this.throwIfDisposed(),M.relu(this)},r.prototype.relu6=function(){return this.throwIfDisposed(),M.relu6(this)},r.prototype.elu=function(){return this.throwIfDisposed(),M.elu(this)},r.prototype.selu=function(){return this.throwIfDisposed(),M.selu(this)},r.prototype.leakyRelu=function(n){return n===void 0&&(n=.2),this.throwIfDisposed(),M.leakyRelu(this,n)},r.prototype.prelu=function(n){return this.throwIfDisposed(),M.prelu(this,n)},r.prototype.sigmoid=function(){return this.throwIfDisposed(),M.sigmoid(this)},r.prototype.logSigmoid=function(){return this.throwIfDisposed(),M.logSigmoid(this)},r.prototype.softplus=function(){return this.throwIfDisposed(),M.softplus(this)},r.prototype.zerosLike=function(){return this.throwIfDisposed(),M.zerosLike(this)},r.prototype.onesLike=function(){return this.throwIfDisposed(),M.onesLike(this)},r.prototype.sin=function(){return this.throwIfDisposed(),M.sin(this)},r.prototype.cos=function(){return this.throwIfDisposed(),M.cos(this)},r.prototype.tan=function(){return this.throwIfDisposed(),M.tan(this)},r.prototype.asin=function(){return this.throwIfDisposed(),M.asin(this)},r.prototype.acos=function(){return this.throwIfDisposed(),M.acos(this)},r.prototype.atan=function(){return this.throwIfDisposed(),M.atan(this)},r.prototype.sinh=function(){return this.throwIfDisposed(),M.sinh(this)},r.prototype.cosh=function(){return this.throwIfDisposed(),M.cosh(this)},r.prototype.tanh=function(){return this.throwIfDisposed(),M.tanh(this)},r.prototype.asinh=function(){return this.throwIfDisposed(),M.asinh(this)},r.prototype.acosh=function(){return this.throwIfDisposed(),M.acosh(this)},r.prototype.atanh=function(){return this.throwIfDisposed(),M.atanh(this)},r.prototype.erf=function(){return this.throwIfDisposed(),M.erf(this)},r.prototype.round=function(){return this.throwIfDisposed(),M.round(this)},r.prototype.step=function(n){return n===void 0&&(n=0),this.throwIfDisposed(),M.step(this,n)},r.prototype.softmax=function(n){return n===void 0&&(n=-1),this.throwIfDisposed(),M.softmax(this,n)},r.prototype.logSoftmax=function(n){return n===void 0&&(n=-1),this.throwIfDisposed(),M.logSoftmax(this,n)},r.prototype.resizeBilinear=function(n,e){return e===void 0&&(e=!1),this.throwIfDisposed(),M.image.resizeBilinear(this,n,e)},r.prototype.resizeNearestNeighbor=function(n,e){return e===void 0&&(e=!1),this.throwIfDisposed(),M.image.resizeNearestNeighbor(this,n,e)},r.prototype.conv1d=function(n,e,t,o,a,i){return o===void 0&&(o="NWC"),a===void 0&&(a=1),this.throwIfDisposed(),M.conv1d(this,n,e,t,o,a,i)},r.prototype.conv2d=function(n,e,t,o,a,i){return o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]),this.throwIfDisposed(),M.conv2d(this,n,e,t,o,a,i)},r.prototype.conv2dTranspose=function(n,e,t,o,a){return this.throwIfDisposed(),M.conv2dTranspose(this,n,e,t,o,a)},r.prototype.depthwiseConv2D=function(n,e,t,o,a,i){return o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]),this.throwIfDisposed(),M.depthwiseConv2d(this,n,e,t,o,a,i)},r.prototype.separableConv2d=function(n,e,t,o,a,i){return a===void 0&&(a=[1,1]),i===void 0&&(i="NHWC"),this.throwIfDisposed(),M.separableConv2d(this,n,e,t,o,a,i)},r.prototype.avgPool=function(n,e,t,o){return this.throwIfDisposed(),M.avgPool(this,n,e,t,o)},r.prototype.maxPool=function(n,e,t,o){return this.throwIfDisposed(),M.maxPool(this,n,e,t,o)},r.prototype.localResponseNormalization=function(n,e,t,o){return n===void 0&&(n=5),e===void 0&&(e=1),t===void 0&&(t=1),o===void 0&&(o=.5),M.localResponseNormalization(this,n,e,t,o)},r.prototype.pool=function(n,e,t,o,a){return this.throwIfDisposed(),M.pool(this,n,e,t,o,a)},r.prototype.variable=function(n,e,t){return n===void 0&&(n=!0),this.throwIfDisposed(),kt().makeVariable(this,n,e,t)},r.prototype.unsortedSegmentSum=function(n,e){return this.throwIfDisposed(),M.unsortedSegmentSum(this,n,e)},r.prototype.batchToSpaceND=function(n,e){return this.throwIfDisposed(),M.batchToSpaceND(this,n,e)},r.prototype.spaceToBatchND=function(n,e){return this.throwIfDisposed(),M.spaceToBatchND(this,n,e)},r.prototype.topk=function(n,e){return n===void 0&&(n=1),e===void 0&&(e=!0),this.throwIfDisposed(),M.topk(this,n,e)},r.prototype.stridedSlice=function(n,e,t,o,a,i,s,u){return o===void 0&&(o=0),a===void 0&&(a=0),i===void 0&&(i=0),s===void 0&&(s=0),u===void 0&&(u=0),this.throwIfDisposed(),M.stridedSlice(this,n,e,t,o,a,i,s,u)},r.prototype.depthToSpace=function(n,e){return this.throwIfDisposed(),M.depthToSpace(this,n,e)},r.prototype.fft=function(){return this.throwIfDisposed(),M.spectral.fft(this)},r.prototype.ifft=function(){return this.throwIfDisposed(),M.spectral.ifft(this)},r.prototype.rfft=function(){return this.throwIfDisposed(),M.spectral.rfft(this)},r.prototype.irfft=function(){return this.throwIfDisposed(),M.spectral.irfft(this)},r}();Object.defineProperty(Ee,Symbol.hasInstance,{value:function(r){return!!r&&r.dataId!=null&&r.shape!=null&&r.dtype!=null}});var Fi,ia,sa,ua,ca,Hn=function(r){function n(e,t,o,a){var i=r.call(this,e.shape,e.dtype,e.dataId,a)||this;return i.trainable=t,i.name=o,i}return xt(n,r),n.prototype.assign=function(e){if(e.dtype!==this.dtype)throw new Error("dtype of the new value ("+e.dtype+") and previous value ("+this.dtype+") must match");if(!We(e.shape,this.shape))throw new Error("shape of the new value ("+e.shape+") and previous value ("+this.shape+") must match");kt().disposeTensor(this),this.dataId=e.dataId,kt().incRef(this,null)},n.prototype.dispose=function(){kt().disposeVariable(this),this.isDisposedInternal=!0},n}(Ee);Object.defineProperty(Hn,Symbol.hasInstance,{value:function(r){return r instanceof Ee&&r.assign!=null&&r.assign instanceof Function}}),function(r){r.R0="R0",r.R1="R1",r.R2="R2",r.R3="R3",r.R4="R4",r.R5="R5",r.R6="R6"}(Fi||(Fi={})),function(r){r.float32="float32",r.int32="int32",r.bool="int32",r.complex64="complex64"}(ia||(ia={})),function(r){r.float32="float32",r.int32="int32",r.bool="bool",r.complex64="complex64"}(sa||(sa={})),function(r){r.float32="float32",r.int32="float32",r.bool="float32",r.complex64="complex64"}(ua||(ua={})),function(r){r.float32="complex64",r.int32="complex64",r.bool="complex64",r.complex64="complex64"}(ca||(ca={}));var bl={float32:ua,int32:ia,bool:sa,complex64:ca};function Ge(r,n){if(r==="string"||n==="string"){if(r==="string"&&n==="string")return"string";throw new Error("Can not upcast "+r+" with "+n)}return bl[r][n]}function Do(r){return Ge(r,"int32")}function Ie(r,n){if(r.dtype===n.dtype)return[r,n];var e=Ge(r.dtype,n.dtype);return[r.cast(e),n.cast(e)]}function wl(r,n){E(r.dtype===n.dtype,function(){return"The dtypes of the first("+r.dtype+") and second("+n.dtype+") input must match"})}function Vs(r){var n=[];return function e(t,o,a){if(t!=null){if(t instanceof Ee)return void o.push(t);if(i=t,!(!Array.isArray(i)&&typeof i!="object")){var i,s=t;for(var u in s){var c=s[u];a.has(c)||(a.add(c),e(c,o,a))}}}}(r,n,new Set),n}var Ao,Mi=function(){function r(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null}}return r.prototype.dispose=function(){for(var n in this.registeredVariables)this.registeredVariables[n].dispose()},r}(),Cl=function(){function r(n){this.ENV=n,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Mi}return r.prototype.ready=function(){return X(this,void 0,void 0,function(){var n,e,t;return Y(this,function(o){switch(o.label){case 0:if(this.pendingBackendInit!=null)return[2,this.pendingBackendInit.then(function(){})];if(this.backendInstance!=null)return[2];n=this.getSortedBackends(),e=0,o.label=1;case 1:return e<n.length?(t=n[e],[4,this.initializeBackend(t).success]):[3,5];case 2:return o.sent()?[4,this.setBackend(t)]:[3,4];case 3:return o.sent(),[2];case 4:return e++,[3,1];case 5:throw new Error("Could not initialize any backends, all backend initializations failed.")}})})},Object.defineProperty(r.prototype,"backend",{get:function(){if(this.pendingBackendInit!=null)throw new Error("Backend '"+this.backendName+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");if(this.backendInstance==null){var n=this.initializeBackendsAndReturnBest(),e=n.name;if(n.asyncInit)throw new Error("The highest priority backend '"+e+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");this.setBackend(e)}return this.backendInstance},enumerable:!0,configurable:!0}),r.prototype.backendNames=function(){return Object.keys(this.registryFactory)},r.prototype.findBackend=function(n){return!(n in this.registry)&&(!(n in this.registryFactory)||this.initializeBackend(n).asyncInit)?null:this.registry[n]},r.prototype.findBackendFactory=function(n){return n in this.registryFactory?this.registryFactory[n].factory:null},r.prototype.registerBackend=function(n,e,t){return t===void 0&&(t=1),n in this.registryFactory?(console.warn(n+" backend was already registered. Reusing existing backend factory."),!1):(this.registryFactory[n]={factory:e,priority:t},!0)},r.prototype.setBackend=function(n){return X(this,void 0,void 0,function(){var e,t,o;return Y(this,function(a){switch(a.label){case 0:if(this.registryFactory[n]==null)throw new Error("Backend name '"+n+"' not found in registry");return this.backendName=n,this.registry[n]!=null?[3,4]:(this.backendInstance=null,e=this.initializeBackend(n),t=e.success,e.asyncInit?[4,t]:[3,2]);case 1:return o=a.sent(),[3,3];case 2:o=t,a.label=3;case 3:if(!o)return[2,!1];a.label=4;case 4:return this.backendInstance=this.registry[n],this.setupRegisteredKernels(),this.profiler=new gl(this.backendInstance),[2,!0]}})})},r.prototype.setupRegisteredKernels=function(){var n=this;Si(this.backendName).forEach(function(e){e.setupFunc!=null&&e.setupFunc(n.backendInstance)})},r.prototype.disposeRegisteredKernels=function(n){var e=this;Si(n).forEach(function(t){t.disposeFunc!=null&&t.disposeFunc(e.registry[n])})},r.prototype.initializeBackend=function(n){var e=this,t=this.registryFactory[n];if(t==null)throw new Error("Cannot initialize backend "+n+", no registration found.");try{var o=t.factory();if(Promise.resolve(o)===o){var a=++this.pendingBackendInitId,i=o.then(function(s){return!(a<e.pendingBackendInitId)&&(e.registry[n]=s,e.pendingBackendInit=null,!0)}).catch(function(s){return!(a<e.pendingBackendInitId)&&(e.pendingBackendInit=null,console.warn("Initialization of backend "+n+" failed"),console.warn(s.stack||s.message),!1)});return this.pendingBackendInit=i,{success:i,asyncInit:!0}}return this.registry[n]=o,{success:!0,asyncInit:!1}}catch(s){return console.warn("Initialization of backend "+n+" failed"),console.warn(s.stack||s.message),{success:!1,asyncInit:!1}}},r.prototype.removeBackend=function(n){if(!(n in this.registryFactory))throw new Error(n+" backend not found in registry");this.backendName===n&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,n in this.registry&&(this.disposeRegisteredKernels(n),this.registry[n].dispose(),delete this.registry[n]),delete this.registryFactory[n],this.backendName===n&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)},r.prototype.getSortedBackends=function(){var n=this;if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort(function(e,t){return n.registryFactory[t].priority-n.registryFactory[e].priority})},r.prototype.initializeBackendsAndReturnBest=function(){for(var n=this.getSortedBackends(),e=0;e<n.length;e++){var t=n[e],o=this.initializeBackend(t),a=o.success,i=o.asyncInit;if(i||a)return{name:t,asyncInit:i}}throw new Error("Could not initialize any backends, all backend initializations failed.")},r.prototype.moveData=function(n,e){var t=this.state.tensorInfo.get(e),o=t.backend,a=this.readSync(e);o.disposeData(e),t.backend=n,n.move(e,a,t.shape,t.dtype),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++},r.prototype.tidy=function(n,e){var t,o=this,a=null;if(e==null){if(typeof n!="function")throw new Error("Please provide a function to tidy()");e=n}else{if(typeof n!="string"&&!(n instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof e!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");a=n}return this.scopedRun(function(){return o.startScope(a)},function(){return o.endScope(t)},function(){return(t=e())instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),t})},r.prototype.scopedRun=function(n,e,t){n();try{var o=t();return e(),o}catch(a){throw e(),a}},r.prototype.nextTensorId=function(){return r.nextTensorId++},r.prototype.nextVariableId=function(){return r.nextVariableId++},r.prototype.clone=function(n){var e=this.makeTensorFromDataId(n.dataId,n.shape,n.dtype),t={x:n};return this.addTapeNode(this.state.activeScope.name,t,[e],function(o){return{x:function(){return o.toFloat()}}},[]),e},r.prototype.runKernel=function(n,e,t,o,a){return this.runKernelFunc(null,e,null,n,t,o,a)},r.prototype.shouldCheckForMemLeaks=function(){return this.ENV.getBool("IS_TEST")},r.prototype.checkKernelForMemLeak=function(n,e,t){var o=this.backend.numDataIds(),a=0;t.forEach(function(u){a+=u.dtype==="complex64"?3:1});var i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],s=o-e-a-i;if(s>0)throw new Error("Backend '"+this.backendName+"' has an internal memory leak ("+s+" data ids) after running '"+n+"'")},r.prototype.runKernelFunc=function(n,e,t,o,a,i,s){var u,c=this;i===void 0&&(i=[]),s===void 0&&(s=[]);var l=[],h=this.isTapeOn();o==null&&(o=this.state.activeScope!=null?this.state.activeScope.name:"");var f,p=function(x){h&&(l=x.map(function(b){return c.keep(c.clone(b))}))},d=this.state.numBytes,m=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);var v,g=As(o,this.backendName);return f=g!=null?function(){var x=c.backend.numDataIds();v=g.kernelFunc({inputs:e,attrs:a,backend:c.backend});var b=Array.isArray(v)?v:[v];c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,x,b);var y=b.map(function(C){var S=C.dataId,k=C.shape,R=C.dtype;return c.makeTensorFromDataId(S,k,R)}),w=y.filter(function(C,S){return s[S]});return p((i||[]).slice().concat(w)),y}:function(){var x=c.backend.numDataIds();v=c.tidy(function(){return n(c.backend,p)});var b=Array.isArray(v)?v:[v];return c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,x,b),b},this.scopedRun(function(){return c.state.kernelDepth++},function(){return c.state.kernelDepth--},function(){u=c.ENV.getBool("DEBUG")?c.profiler.profileKernel(o,e,function(){return f()}):f()}),h&&this.addTapeNode(o,e,u,t,l),this.state.profiling&&this.state.activeProfile.kernels.push({name:o,bytesAdded:this.state.numBytes-d,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-m,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(e).map(function(x){return e[x].shape}),outputShapes:u.map(function(x){return x.shape})}),Array.isArray(v)?u:u[0]},r.prototype.makeTensor=function(n,e,t,o){if(n==null)throw new Error("Values passed to engine.makeTensor() are null");t=t||"float32",o=o||this.backend;var a=n;t==="string"&&Ra(n[0])&&(a=n.map(function(l){return vl(l)}));var i=o.write(a,e,t),s=new Ee(e,t,i,this.nextTensorId());if(this.incRef(s,o),t==="string"){var u=this.state.tensorInfo.get(i),c=fl(a);this.state.numBytes+=c-u.bytes,u.bytes=c}return s},r.prototype.makeTensorFromDataId=function(n,e,t,o){var a=new Ee(e,t=t||"float32",n,this.nextTensorId());return this.incRef(a,o),a},r.prototype.makeVariable=function(n,e,t,o){e===void 0&&(e=!0),t=t||this.nextVariableId().toString(),o!=null&&o!==n.dtype&&(n=n.asType(o));var a=new Hn(n,e,t,this.nextTensorId());if(this.state.registeredVariables[a.name]!=null)throw new Error("Variable with name "+a.name+" was already registered");return this.state.registeredVariables[a.name]=a,this.incRef(a,this.backend),a},r.prototype.incRef=function(n,e){var t=this.state.tensorInfo.has(n.dataId)?this.state.tensorInfo.get(n.dataId).refCount:0;if(this.state.numTensors++,n.dtype==="string"&&this.state.numStringTensors++,t===0){this.state.numDataBuffers++;var o=0;n.dtype!=="complex64"&&n.dtype!=="string"&&(o=n.size*Ms(n.dtype)),this.state.tensorInfo.set(n.dataId,{backend:e||this.backend,dtype:n.dtype,shape:n.shape,bytes:o,refCount:0}),this.state.numBytes+=o}this.state.tensorInfo.get(n.dataId).refCount++,n instanceof Hn||this.track(n)},r.prototype.disposeTensor=function(n){if(this.state.tensorInfo.has(n.dataId)){this.state.numTensors--,n.dtype==="string"&&this.state.numStringTensors--;var e=this.state.tensorInfo.get(n.dataId);e.refCount<=1?(n.dtype!=="complex64"&&(this.state.numBytes-=e.bytes),this.state.numDataBuffers--,e.backend.disposeData(n.dataId),this.state.tensorInfo.delete(n.dataId)):this.state.tensorInfo.get(n.dataId).refCount--}},r.prototype.disposeVariables=function(){for(var n in this.state.registeredVariables){var e=this.state.registeredVariables[n];this.disposeVariable(e)}},r.prototype.disposeVariable=function(n){this.disposeTensor(n),this.state.registeredVariables[n.name]!=null&&delete this.state.registeredVariables[n.name]},r.prototype.memory=function(){var n=this.backend.memory();return n.numTensors=this.state.numTensors,n.numDataBuffers=this.state.numDataBuffers,n.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(n.unreliable=!0,n.reasons==null&&(n.reasons=[]),n.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),n},r.prototype.profile=function(n){return X(this,void 0,void 0,function(){var e,t;return Y(this,function(o){return this.state.profiling=!0,e=this.state.numBytes,t=this.state.numTensors,this.state.activeProfile.kernels=[],this.state.activeProfile.result=n(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max.apply(Math,this.state.activeProfile.kernels.map(function(a){return a.totalBytesSnapshot})),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-t,[2,this.state.activeProfile]})})},r.prototype.isTapeOn=function(){return this.state.gradientDepth>0&&this.state.kernelDepth===0},r.prototype.addTapeNode=function(n,e,t,o,a){var i=this,s={id:this.state.nextTapeNodeId++,kernelName:n,inputs:e,outputs:t,saved:a},u=ol(n);u!=null&&(o=u.gradFunc),o!=null&&(s.gradient=function(c){return c=c.map(function(l,h){if(l==null){var f=t[h],p=pr(f.size,f.dtype);return i.makeTensor(p,f.shape,f.dtype)}return l}),o(c.length>1?c:c[0],a)}),this.state.activeTape.push(s)},r.prototype.keep=function(n){return n.kept=!0,n},r.prototype.startTape=function(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++},r.prototype.endTape=function(){this.state.gradientDepth--},r.prototype.startScope=function(n){var e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};n&&(e.name=n),this.state.scopeStack.push(e),this.state.activeScope=e},r.prototype.endScope=function(n){for(var e=this,t=Vs(n),o=new Set(t.map(function(u){return u.id})),a=0;a<this.state.activeScope.track.length;a++){var i=this.state.activeScope.track[a];i.kept||o.has(i.id)||i.dispose()}var s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],t.forEach(function(u){u.kept||u.scopeId!==s.id||e.track(u)})},r.prototype.gradients=function(n,e,t,o){var a=this;if(o===void 0&&(o=!1),E(e.length>0,function(){return"gradients() received an empty list of xs."}),t!=null&&t.dtype!=="float32")throw new Error("dy must have 'float32' dtype, but has '"+t.dtype+"'");var i=this.scopedRun(function(){return a.startTape()},function(){return a.endTape()},function(){return a.tidy("forward",n)});E(i instanceof Ee,function(){return"The result y returned by f() must be a tensor."});var s=function(u,c,l){for(var h={},f={},p=0;p<c.length;p++)h[c[p].id]=!0;for(p=0;p<u.length;p++){var d=(C=u[p]).inputs;for(var m in d){for(var v=d[m],g=!1,x=0;x<c.length;x++)if(h[v.id]){C.outputs.forEach(function(I){return h[I.id]=!0}),g=!0,f[C.id]=!0;break}if(g)break}}var b={};b[l.id]=!0;var y={};for(p=u.length-1;p>=0;p--)for(d=(C=u[p]).inputs,x=0;x<C.outputs.length;x++)if(b[C.outputs[x].id]){for(var m in d)b[d[m].id]=!0,y[C.id]=!0;break}var w=[];for(p=0;p<u.length;p++){var C;if(f[(C=u[p]).id]&&y[C.id]){var S={};for(var m in C.inputs){var k=C.inputs[m];h[k.id]&&(S[m]=k)}var R=Object.assign({},C);R.inputs=S,R.outputs=C.outputs,w.push(R)}}return w}(this.state.activeTape,e,i);if(!o&&s.length===0&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",function(){var u,c,l={};l[i.id]=t??(u=i.shape,c=Os($(u),"float32"),T.makeTensor(c,u,"float32")),function(f,p,d){for(var m=function(g){var x=p[g],b=[];if(x.outputs.forEach(function(S){var k=f[S.id];k!=null?b.push(k):b.push(null)}),x.gradient==null)throw new Error("Cannot compute gradient: gradient function not found for "+x.kernelName+".");var y=x.gradient(b),w=function(S){if(!(S in y))throw new Error("Cannot backprop through input "+S+". Available gradients found: "+Object.keys(y)+".");var k=d(function(){return y[S]()});if(k.dtype!=="float32")throw new Error("Error in gradient for op "+x.kernelName+". The gradient of input "+S+" must have 'float32' dtype, but has '"+k.dtype+"'");var R=x.inputs[S];if(!We(k.shape,R.shape))throw new Error("Error in gradient for op "+x.kernelName+". The gradient of input '"+S+"' has shape '"+k.shape+"', which does not match the shape of the input '"+R.shape+"'");if(f[R.id]==null)f[R.id]=k;else{var I=f[R.id];f[R.id]=I.add(k),I.dispose()}};for(var C in x.inputs)w(C)},v=p.length-1;v>=0;v--)m(v)}(l,s,function(f){return a.tidy(f)});var h=e.map(function(f){return l[f.id]});return a.state.gradientDepth===0&&(a.state.activeTape.forEach(function(f){for(var p=0,d=f.saved;p<d.length;p++)d[p].dispose()}),a.state.activeTape=null),{value:i,grads:h}})},r.prototype.customGrad=function(n){var e=this;return E(oa(n),function(){return"The f passed in customGrad(f) must be a function."}),function(){for(var t,o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];E(o.every(function(s){return s instanceof Ee}),function(){return"The args passed in customGrad(f)(x1, x2,...) must all be tensors"});var i={};return o.forEach(function(s,u){i[u]=s}),e.runKernelFunc(function(s,u){return E((t=n.apply(void 0,o.concat([u]))).value instanceof Ee,function(){return"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"}),E(oa(t.gradFunc),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."}),t.value},i,function(s,u){var c=t.gradFunc(s,u),l=Array.isArray(c)?c:[c];E(l.length===o.length,function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."}),E(l.every(function(f){return f instanceof Ee}),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."});var h={};return l.forEach(function(f,p){h[p]=function(){return f}}),h})}},r.prototype.readSync=function(n){return this.state.tensorInfo.get(n).backend.readSync(n)},r.prototype.read=function(n){return this.state.tensorInfo.get(n).backend.read(n)},r.prototype.time=function(n){return X(this,void 0,void 0,function(){var e,t;return Y(this,function(o){switch(o.label){case 0:return e=It(),[4,this.backend.time(n)];case 1:return(t=o.sent()).wallMs=It()-e,[2,t]}})})},r.prototype.track=function(n){return this.state.activeScope!=null&&(n.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(n)),n},Object.defineProperty(r.prototype,"registeredVariables",{get:function(){return this.state.registeredVariables},enumerable:!0,configurable:!0}),r.prototype.reset=function(){for(var n in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Mi,this.registry)this.disposeRegisteredKernels(n),this.registry[n].dispose(),delete this.registry[n];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null},r.nextTensorId=0,r.nextVariableId=0,r}(),T=function(){var r=function(){if(Ao==null){var e=void 0;if(typeof window<"u")e=window;else if(typeof global<"u")e=global;else if(typeof process<"u")e=process;else{if(typeof self>"u")throw new Error("Could not find a global object");e=self}Ao=e}return Ao}();if(r._tfengine==null){var n=new nl(r);r._tfengine=new Cl(n)}return function(e){Ds=e}(r._tfengine.ENV),kt=function(){return r._tfengine},r._tfengine}();function Us(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}var Ut=P();Ut.registerFlag("DEBUG",function(){return!1},function(r){r&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),Ut.registerFlag("IS_BROWSER",function(){return Us()}),Ut.registerFlag("IS_NODE",function(){return typeof process<"u"&&process.versions!==void 0&&process.versions.node!==void 0}),Ut.registerFlag("IS_CHROME",function(){return typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)}),Ut.registerFlag("PROD",function(){return!1}),Ut.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",function(){return Ut.getBool("DEBUG")}),Ut.registerFlag("DEPRECATION_WARNINGS_ENABLED",function(){return!0}),Ut.registerFlag("IS_TEST",function(){return!1});var ar,st,it,fn={},To={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function _l(r,n){fn[r]=n}function Pt(r){r in fn||(fn[r]=function(e){if(e!==1&&e!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");var t=function(o){if(typeof OffscreenCanvas<"u"&&o===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}(e);return t.addEventListener("webglcontextlost",function(o){o.preventDefault(),delete fn[e]},!1),e===1?t.getContext("webgl",To)||t.getContext("experimental-webgl",To):t.getContext("webgl2",To)}(r));var n=fn[r];return n.isContextLost()?(delete fn[r],Pt(r)):(n.disable(n.DEPTH_TEST),n.disable(n.STENCIL_TEST),n.disable(n.BLEND),n.disable(n.DITHER),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SAMPLE_COVERAGE),n.enable(n.SCISSOR_TEST),n.enable(n.CULL_FACE),n.cullFace(n.BACK),fn[r])}function io(r,n){return[n,r]}function er(r){var n=$(r);return ra(Math.ceil(n/4))}function dr(r,n){return[Math.max(1,Math.ceil(n/2)),Math.max(1,Math.ceil(r/2))]}function Ia(r,n){var e,t,o,a,i,s,u,c,l,h=r;return P().getNumber("WEBGL_VERSION")===2?(e=h.R32F,t=h.R16F,o=h.RGBA16F,a=h.RGBA32F,i=h.RED,s=4,u=1,c=h.HALF_FLOAT,l=h.FLOAT):(e=r.RGBA,t=r.RGBA,o=r.RGBA,a=h.RGBA,i=r.RGBA,s=4,u=4,c=n!=null?n.HALF_FLOAT_OES:null,l=r.FLOAT),{internalFormatFloat:e,internalFormatHalfFloat:t,internalFormatPackedHalfFloat:o,internalFormatPackedFloat:a,textureFormatFloat:i,downloadTextureFormat:r.RGBA,downloadUnpackNumChannels:s,defaultNumChannels:u,textureTypeHalfFloat:c,textureTypeFloat:l}}function Z(r,n,e){var t=e();return n&&function(o){var a=o.getError();if(a!==o.NO_ERROR)throw new Error("WebGL Error: "+kl(o,a))}(r),t}(function(r){r[r.DENSE=0]="DENSE",r[r.SHARED_BATCH=1]="SHARED_BATCH"})(ar||(ar={})),function(r){r[r.RENDER=0]="RENDER",r[r.UPLOAD=1]="UPLOAD",r[r.PIXELS=2]="PIXELS",r[r.DOWNLOAD=3]="DOWNLOAD"}(st||(st={})),function(r){r[r.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",r[r.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",r[r.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",r[r.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",r[r.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"}(it||(it={}));var El=596e-10,Rl=65504;function Il(r){return!!(P().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||r===0||El<Math.abs(r)&&Math.abs(r)<Rl)}function kl(r,n){switch(n){case r.NO_ERROR:return"NO_ERROR";case r.INVALID_ENUM:return"INVALID_ENUM";case r.INVALID_VALUE:return"INVALID_VALUE";case r.INVALID_OPERATION:return"INVALID_OPERATION";case r.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case r.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case r.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return"Unknown error code "+n}}function _r(r,n,e){return jt(r,n,function(){return r.getExtension(e)},'Extension "'+e+'" not supported on this browser.')}function Sl(r,n,e){var t=jt(r,n,function(){return r.createShader(r.VERTEX_SHADER)},"Unable to create vertex WebGLShader.");if(Z(r,n,function(){return r.shaderSource(t,e)}),Z(r,n,function(){return r.compileShader(t)}),r.getShaderParameter(t,r.COMPILE_STATUS)===!1)throw console.log(r.getShaderInfoLog(t)),new Error("Failed to compile vertex shader.");return t}function Dl(r,n,e){var t=jt(r,n,function(){return r.createShader(r.FRAGMENT_SHADER)},"Unable to create fragment WebGLShader.");if(Z(r,n,function(){return r.shaderSource(t,e)}),Z(r,n,function(){return r.compileShader(t)}),r.getShaderParameter(t,r.COMPILE_STATUS)===!1)throw function(o,a){var i=Al.exec(a);if(i==null)return console.log("Couldn't parse line number in error: "+a),void console.log(o);for(var s=+i[1],u=o.split(`
`),c=u.length.toString().length+2,l=u.map(function(v,g){return On((g+1).toString(),c)+v}),h=0,f=0;f<l.length;f++)h=Math.max(l[f].length,h);var p=l.slice(0,s-1),d=l.slice(s-1,s),m=l.slice(s);console.log(p.join(`
`)),console.log(a.split(`
`)[0]),console.log("%c "+On(d[0],h),"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(m.join(`
`))}(e,r.getShaderInfoLog(t)),new Error("Failed to compile fragment shader.");return t}var No,Fo,Al=/ERROR: [0-9]+:([0-9]+):/g;function Tl(r,n){return jt(r,n,function(){return r.createProgram()},"Unable to create WebGLProgram.")}function Nl(r,n,e){if(Z(r,n,function(){return r.linkProgram(e)}),r.getProgramParameter(e,r.LINK_STATUS)===!1)throw console.log(r.getProgramInfoLog(e)),new Error("Failed to link vertex and fragment shaders.")}function Mo(r,n,e){if(Z(r,n,function(){return r.validateProgram(e)}),r.getProgramParameter(e,r.VALIDATE_STATUS)===!1)throw console.log(r.getProgramInfoLog(e)),new Error("Shader program validation failed.")}function Fl(r,n,e){var t=jt(r,n,function(){return r.createBuffer()},"Unable to create WebGLBuffer");return Z(r,n,function(){return r.bindBuffer(r.ARRAY_BUFFER,t)}),Z(r,n,function(){return r.bufferData(r.ARRAY_BUFFER,e,r.STATIC_DRAW)}),t}function Ml(r,n,e){var t=jt(r,n,function(){return r.createBuffer()},"Unable to create WebGLBuffer");return Z(r,n,function(){return r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t)}),Z(r,n,function(){return r.bufferData(r.ELEMENT_ARRAY_BUFFER,e,r.STATIC_DRAW)}),t}function Pl(r,n){return jt(r,n,function(){return r.createTexture()},"Unable to create WebGLTexture.")}function Ol(r,n){var e=P().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(r<=0||n<=0){var t="["+r+"x"+n+"]";throw new Error("Requested texture size "+t+" is invalid.")}if(r>e||n>e)throw t="["+r+"x"+n+"]",new Error("Requested texture size "+t+" greater than WebGL maximum on this browser / GPU "+("["+e+"x"+e+"]")+".")}function Bl(r,n){return jt(r,n,function(){return r.createFramebuffer()},"Unable to create WebGLFramebuffer.")}function Pi(r,n,e,t,o,a,i,s){var u=r.getAttribLocation(e,t);return u!==-1&&(Z(r,n,function(){return r.bindBuffer(r.ARRAY_BUFFER,o)}),Z(r,n,function(){return r.vertexAttribPointer(u,a,r.FLOAT,!1,i,s)}),Z(r,n,function(){return r.enableVertexAttribArray(u)}),!0)}function Ll(r,n,e,t){Gl(r,t),Z(r,n,function(){return r.activeTexture(r.TEXTURE0+t)}),Z(r,n,function(){return r.bindTexture(r.TEXTURE_2D,e)})}function Wl(r,n,e,t){return jt(r,n,function(){return r.getUniformLocation(e,t)},'uniform "'+t+'" not present in program.')}function Vl(r,n,e){return r.getUniformLocation(n,e)}function Ul(r,n,e,t,o,a){Z(r,n,function(){return Ll(r,n,t,a)}),Z(r,n,function(){return r.uniform1i(o,a)})}function Po(r,n,e,t){Z(r,n,function(){return r.bindFramebuffer(r.FRAMEBUFFER,t)}),Z(r,n,function(){return r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0)})}function Oi(r,n,e){Z(r,n,function(){return r.bindFramebuffer(r.FRAMEBUFFER,e)}),Z(r,n,function(){return r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,null,0)})}function Er(r){var n=r.checkFramebufferStatus(r.FRAMEBUFFER);if(n!==r.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+zl(r,n))}function zl(r,n){switch(n){case r.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case r.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return"unknown error "+n}}function jt(r,n,e,t){var o=Z(r,n,function(){return e()});if(o==null)throw new Error(t);return o}function Gl(r,n){var e=r.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,t=n+r.TEXTURE0;if(t<r.TEXTURE0||t>e)throw new Error("textureUnit must be in "+("[gl.TEXTURE0, gl.TEXTURE"+e+"]")+".")}function Vr(r,n){return n===void 0&&(n=2),$(r.slice(0,r.length-n))}function Ur(r){if(r.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[r.length>1?r[r.length-2]:1,r[r.length-1]]}function Oo(r){var n=[1,1,1];return r.length===0||r.length===1&&r[0]===1||(n=[Vr(r)].concat(Ur(r))),n}function Hl(r,n){var e;n===void 0&&(n=!1);var t=P().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(n&&(t*=2,(r=r.map(function(c,l){return l>=r.length-2?Fs(r[l]):r[l]})).length===1&&(r=[2,r[0]])),r.length!==2){var o=dn(r);r=o.newShape}var a=$(r);if(r.length<=1&&a<=t)return[1,a];if(r.length===2&&r[0]<=t&&r[1]<=t)return r;if(r.length===3&&r[0]*r[1]<=t&&r[2]<=t)return[r[0]*r[1],r[2]];if(r.length===3&&r[0]<=t&&r[1]*r[2]<=t)return[r[0],r[1]*r[2]];if(r.length===4&&r[0]*r[1]*r[2]<=t&&r[3]<=t)return[r[0]*r[1]*r[2],r[3]];if(r.length===4&&r[0]<=t&&r[1]*r[2]*r[3]<=t)return[r[0],r[1]*r[2]*r[3]];if(n){var i=Vr(r),s=2,u=2;return r.length&&(s=(e=Ur(r))[0],u=e[1]),ra(a=i*(s/2)*(u/2)).map(function(c){return 2*c})}return ra(a)}function Rr(r){return r%2==0}function Ir(r,n){if(We(r=r.slice(-2),n=n.slice(-2))||!r.length||!n.length||r[0]===0||r[1]===0||n[0]===0||n[1]===0)return!0;if(r.length!==n.length){var e=r.slice(-1)[0],t=n.slice(-1)[0];if(e===t||Rr(e)&&Rr(t)&&(r[0]===1||n[0]===1))return!0}return r[1]===n[1]&&Rr(r[0])&&Rr(n[0])}function jl(r){if(No==null){var n=Pt(r);No=n.getParameter(n.MAX_TEXTURE_SIZE)}return No}function ql(r){if(Fo==null){var n=Pt(r);Fo=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,Fo)}function Kl(r){if(r===0)return 0;var n=Pt(r);return dt(n,"EXT_disjoint_timer_query_webgl2")&&r===2?2:dt(n,"EXT_disjoint_timer_query")?1:0}function dt(r,n){return r.getExtension(n)!=null}function Bi(r){try{if(Pt(r)!=null)return!0}catch{return!1}return!1}function Xl(r){if(r===0)return!1;var n=Pt(r);if(r===1){if(!dt(n,"OES_texture_float"))return!1}else if(!dt(n,"EXT_color_buffer_float"))return!1;return la(n)}function Yl(r){if(r===0)return!1;var n=Pt(r);if(r!==1){if(dt(n,"EXT_color_buffer_float"))return la(n);if(dt(n,"EXT_color_buffer_half_float")){var e=n.getExtension("EXT_color_buffer_half_float");return function(t,o){var a=Ia(t,o),i=t.createTexture();t.bindTexture(t.TEXTURE_2D,i),t.texImage2D(t.TEXTURE_2D,0,a.internalFormatHalfFloat,1,1,0,a.textureFormatFloat,a.textureTypeHalfFloat,null);var s=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,s),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,i,0);var u=t.checkFramebufferStatus(t.FRAMEBUFFER)===t.FRAMEBUFFER_COMPLETE;return t.bindTexture(t.TEXTURE_2D,null),t.bindFramebuffer(t.FRAMEBUFFER,null),t.deleteTexture(i),t.deleteFramebuffer(s),u}(n,e)}return!1}return!!dt(n,"OES_texture_float")&&!!dt(n,"WEBGL_color_buffer_float")&&la(n)}function la(r){var n=Ia(r),e=r.createTexture();r.bindTexture(r.TEXTURE_2D,e),r.texImage2D(r.TEXTURE_2D,0,n.internalFormatFloat,1,1,0,n.textureFormatFloat,n.textureTypeFloat,null);var t=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,t),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0);var o=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;return r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(e),r.deleteFramebuffer(t),o}function $l(r){return r===2&&Pt(r).fenceSync!=null}var ne=P();function zs(r){P().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(r+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function K(r,n){return T.tidy(r,n)}function et(r){Vs(r).forEach(function(n){return n.dispose()})}function Jl(r){return T.keep(r)}function zr(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];P().getBool("IS_TEST")||console.warn.apply(console,r)}function un(r,n){var e=r;if(At(r))return n==="string"?[]:[r.length];if(!Array.isArray(r))return[];for(var t=[];Array.isArray(e)||At(e)&&n!=="string";)t.push(e.length),e=e[0];return Array.isArray(r)&&P().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&function o(a,i,s){if(s=s||[],!Array.isArray(a)&&!At(a))return void E(i.length===0,function(){return"Element arr["+s.join("][")+"] is a primitive, but should be an array/TypedArray of "+i[0]+" elements"});E(i.length>0,function(){return"Element arr["+s.join("][")+"] should be a primitive, but is an array of "+a.length+" elements"}),E(a.length===i[0],function(){return"Element arr["+s.join("][")+"] should have "+i[0]+" elements, but has "+a.length+" elements"});for(var u=i.slice(1),c=0;c<a.length;++c)o(a[c],u,s.concat(c))}(r,t,[]),t}function Li(r,n,e,t){if(r!=null&&(r!=="numeric"&&r!==n||r==="numeric"&&n==="string"))throw new Error("Argument '"+e+"' passed to '"+t+"' must be "+r+" tensor, but got "+n+" tensor")}function _(r,n,e,t){if(t===void 0&&(t="numeric"),r instanceof Ee)return Li(t,r.dtype,n,e),r;var o=fr(r);if(o!=="string"&&["bool","int32","float32"].indexOf(t)>=0&&(o=t),Li(t,o,n,e),r==null||!At(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string"){var a=r==null?"null":r.constructor.name;throw new Error("Argument '"+n+"' passed to '"+e+"' must be a Tensor or TensorLike, but got '"+a+"'")}var i=un(r,o);At(r)||Array.isArray(r)||(r=[r]);var s=o!=="string"?Ps(r,o,P().getBool("DEBUG")):Gn(r,[],!0);return T.makeTensor(s,i,o)}function Gr(r,n,e,t){if(t===void 0&&(t="numeric"),!Array.isArray(r))throw new Error("Argument "+n+" passed to "+e+" must be a `Tensor[]` or `TensorLike[]`");return r.map(function(o,a){return _(o,n+"["+a+"]",e)},t)}function Gs(r,n){for(var e=0;e<r.length;++e)if(r[r.length-e-1]!==n-1-e)return!1;return!0}function Ql(r,n,e){for(var t=r.length+n.length,o=[],a=0,i=0,s=0;s<t;s++)e.indexOf(s)===-1?o.push(r[a++]):o.push(n[i++]);return o}function Ke(r,n){for(var e=[],t=r.length,o=0;o<t;o++)n.indexOf(o)===-1&&e.push(r[o]);return[e,n.map(function(a){return r[a]})]}function tt(r,n){return Ql(r,n.map(function(e){return 1}),n)}function at(r,n,e){E(Gs(n,e),function(){return r+" supports only inner-most axes for now. Got axes "+n+" and rank-"+e+" input."})}function Ot(r,n){if(Gs(r,n))return null;for(var e=[],t=0;t<n;++t)r.indexOf(t)===-1&&e.push(t);return r.forEach(function(o){return e.push(o)}),e}function ka(r){return r.map(function(n,e){return[e,n]}).sort(function(n,e){return n[1]-e[1]}).map(function(n){return n[0]})}function Bt(r,n){for(var e=[],t=n-r;t<n;++t)e.push(t);return e}function Zl(r,n){var e=r[0].length;r.forEach(function(o,a){E(o.length===e,function(){return"Error in concat"+e+"D: rank of tensors["+a+"] must be the same as the rank of the rest ("+e+")"})}),E(n>=0&&n<e,function(){return"Error in concat"+e+"D: axis must be between 0 and "+(e-1)+"."});var t=r[0];r.forEach(function(o,a){for(var i=0;i<e;i++)E(i===n||o[i]===t[i],function(){return"Error in concat"+e+"D: Shape of tensors["+a+"] ("+o+") does not match the shape of the rest ("+t+") along the non-concatenated axis "+a+"."})})}function jn(r,n){for(var e=r[0].slice(),t=1;t<r.length;t++)e[n]+=r[t][n];return e}function D(r){var n=Object.keys(r);if(n.length!==1)throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with "+n.length+" keys.");var e=n[0],t=r[e];e.endsWith("_")&&(e=e.substring(0,e.length-1));var o=function(){for(var a=[],i=0;i<arguments.length;i++)a[i]=arguments[i];T.startScope(e);try{var s=t.apply(void 0,a);return s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),T.endScope(s),s}catch(u){throw T.endScope(null),u}};return Object.defineProperty(o,"name",{value:e,configurable:!0}),o}ne.registerFlag("HAS_WEBGL",function(){return ne.getNumber("WEBGL_VERSION")>0}),ne.registerFlag("WEBGL_VERSION",function(){return Bi(2)?2:Bi(1)?1:0}),ne.registerFlag("WEBGL_BUFFER_SUPPORTED",function(){return ne.get("WEBGL_VERSION")===2}),ne.registerFlag("WEBGL_CPU_FORWARD",function(){return!0}),ne.registerFlag("WEBGL_FORCE_F16_TEXTURES",function(){return!1}),ne.registerFlag("WEBGL_PACK",function(){return ne.getBool("HAS_WEBGL")}),ne.registerFlag("WEBGL_PACK_NORMALIZATION",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_PACK_CLIP",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_PACK_DEPTHWISECONV",function(){return!1}),ne.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_PACK_REDUCE",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_LAZILY_UNPACK",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_CONV_IM2COL",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_MAX_TEXTURE_SIZE",function(){return jl(ne.getNumber("WEBGL_VERSION"))}),ne.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",function(){return ql(ne.getNumber("WEBGL_VERSION"))}),ne.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",function(){var r=ne.getNumber("WEBGL_VERSION");return r===0?0:Kl(r)}),ne.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",function(){return ne.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&(r=navigator.userAgent||navigator.vendor||window.opera,!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(r)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(r.substr(0,4))));var r}),ne.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",function(){return Xl(ne.getNumber("WEBGL_VERSION"))}),ne.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",function(){return!ne.getBool("WEBGL_FORCE_F16_TEXTURES")&&ne.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")}),ne.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",function(){return Yl(ne.getNumber("WEBGL_VERSION"))}),ne.registerFlag("WEBGL_FENCE_API_ENABLED",function(){return $l(ne.getNumber("WEBGL_VERSION"))}),ne.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",function(){return ne.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0}),Ws=zs;var ze=D({complex_:function(r,n){var e=_(r,"real","complex"),t=_(n,"imag","complex");return ye(e.shape,t.shape,"real and imag shapes, "+e.shape+" and "+t.shape+", must match in call to tf.complex()."),T.runKernelFunc(function(o){return o.complex(e,t)},{$real:e,$imag:t})}}),pt=D({real_:function(r){var n=_(r,"input","real");return T.runKernelFunc(function(e){return e.real(n)},{$input:n})}}),St=D({imag_:function(r){var n=_(r,"input","imag");return T.runKernelFunc(function(e){return e.imag(n)},{$input:n})}});function He(r,n,e){return cn(r,n,un(r,e),e)}function cn(r,n,e,t){if(t==null&&(t=fr(r)),t==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!At(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(n!=null){Bs(n);var o=$(n),a=$(e);E(o===a,function(){return"Based on the provided shape, ["+n+"], the tensor should have "+o+" values but has "+a});for(var i=0;i<e.length;++i){var s=e[i],u=i!==e.length-1||s!==$(n.slice(i));E(e[i]===n[i]||!u,function(){return"Error creating a new Tensor. Inferred shape ("+e+") does not match the provided shape ("+n+"). "})}}return At(r)||Array.isArray(r)||(r=[r]),n=n||e,r=t!=="string"?Ps(r,t,P().getBool("DEBUG")):Gn(r,[],!0),T.makeTensor(r,n,t)}function j(r,n){if((At(r)&&n!=="string"||Array.isArray(r))&&n!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(n==="string"&&At(r)&&!(r instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return cn(r,[],[],n)}function Te(r,n){Kn(r);var e=un(r,n);if(e.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return cn(r,null,e,n)}function rn(r,n,e){if(Kn(r),n!=null&&n.length!==2)throw new Error("tensor2d() requires shape to have two numbers");var t=un(r,e);if(t.length!==2&&t.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(t.length===1&&n==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return cn(r,n,t,e)}function Sa(r,n,e){if(Kn(r),n!=null&&n.length!==3)throw new Error("tensor3d() requires shape to have three numbers");var t=un(r,e);if(t.length!==3&&t.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(t.length===1&&n==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return cn(r,n,t,e)}function Qe(r,n,e){if(Kn(r),n!=null&&n.length!==4)throw new Error("tensor4d() requires shape to have four numbers");var t=un(r,e);if(t.length!==4&&t.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(t.length===1&&n==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return cn(r,n,t,e)}function eh(r,n,e){if(Kn(r),n!=null&&n.length!==5)throw new Error("tensor5d() requires shape to have five numbers");var t=un(r,e);if(t.length!==5&&t.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(t.length===1&&n==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return cn(r,n,t,e)}function th(r,n,e){if(Kn(r),n!=null&&n.length!==6)throw new Error("tensor6d() requires shape to have six numbers");var t=un(r,e);if(t.length!==6&&t.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(t.length===1&&n==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return cn(r,n=n||t,t,e)}function nh(r,n,e,t){return n===void 0&&(n=!0),T.makeVariable(r,n,e,t)}function Xn(r,n){if(n===void 0&&(n="float32"),n==="complex64"){var e=Xn(r,"float32"),t=we(r,"float32");return ze(e,t)}var o=Os($(r),n);return T.makeTensor(o,r,n)}function we(r,n){if(n===void 0&&(n="float32"),n==="complex64"){var e=we(r,"float32"),t=we(r,"float32");return ze(e,t)}var o=pr($(r),n);return T.makeTensor(o,r,n)}function Nt(r,n,e){return T.runKernelFunc(function(t){return t.fill(r,n,e)},{})}function rh(r,n,e){if(e<=0)throw new Error("The number of values should be positive.");return T.runKernelFunc(function(t){return t.linspace(r,n,e)},{})}function Hr(r,n,e,t){if(e===void 0&&(e=1),t===void 0&&(t="float32"),e===0)throw new Error("Cannot have a step of zero");if(r===n||r<n&&e<0||n<r&&e>1)return we([0],t);var o=pr(Math.abs(Math.ceil((n-r)/e)),t);n<r&&e===1&&(e=-1),o[0]=r;for(var a=1;a<o.length;a++)o[a]=o[a-1]+e;return Te(o,t)}var Hs=D({onesLike_:function(r){var n=_(r,"x","onesLike");if(n.dtype==="complex64"){var e=Hs(pt(n)),t=ve(St(n));return ze(e,t)}return T.runKernelFunc(function(o){return o.onesLike(n)},{$x:n},function(o,a){return{$x:function(){return ve(o)}}})}}),ve=D({zerosLike_:function(r){var n=_(r,"x","zerosLike");return T.runKernelFunc(function(e){return e.zerosLike(n)},{$x:n},function(e,t){return{$x:function(){return ve(e)}}})}}),Fe=D({concat_:function(r,n){n===void 0&&(n=0),E(r.length>=1,function(){return"Pass at least one tensor to concat"});var e=Gr(r,"tensors","concat");e[0].dtype==="complex64"&&e.forEach(function(s){if(s.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype `+s.dtype+". ")}),n=Be(n,e[0].shape)[0];var t=jn(e.map(function(s){return s.shape}),n);if($(t)===0)return He([],t);if((e=e.filter(function(s){return s.size>0})).length===1)return e[0];var o=e.map(function(s){return s.shape});Zl(o,n);var a=e,i={axis:n};return T.runKernelFunc(function(s){return s.concat(e,n)},a,function(s){var u=o.map(function(c){return c[n]});return Da(s,u,n).map(function(c){return function(){return c}})},"Concat",i)}}),oh=D({concat1d_:function(r){return Fe(r,0)}}),ah=D({concat2d_:function(r,n){return Fe(r,n)}}),ih=D({concat3d_:function(r,n){return Fe(r,n)}}),sh=D({concat4d_:function(r,n){return Fe(r,n)}}),Da=D({split_:function(r,n,e){e===void 0&&(e=0);var t,o=_(r,"x","split");return e=Be(e,o.shape)[0],typeof n=="number"?(E(o.shape[e]%n==0,function(){return"Number of splits must evenly divide the axis."}),t=new Array(n).fill(o.shape[e]/n)):(E(o.shape[e]===n.reduce(function(a,i){return a+i}),function(){return"The sum of sizes must match the size of the axis dimension."}),t=n),T.runKernelFunc(function(a){return a.split(o,t,e)},{$x:o},function(a){return{$x:function(){return Fe(a,e)}}})}});function bn(r,n){return r(n={exports:{}},n.exports),n.exports}var uh=bn(function(r){(function(n,e,t){function o(s){var u,c=this,l=(u=4022871197,function(h){h=h.toString();for(var f=0;f<h.length;f++){var p=.02519603282416938*(u+=h.charCodeAt(f));p-=u=p>>>0,u=(p*=u)>>>0,u+=4294967296*(p-=u)}return 23283064365386963e-26*(u>>>0)});c.next=function(){var h=2091639*c.s0+23283064365386963e-26*c.c;return c.s0=c.s1,c.s1=c.s2,c.s2=h-(c.c=0|h)},c.c=1,c.s0=l(" "),c.s1=l(" "),c.s2=l(" "),c.s0-=l(s),c.s0<0&&(c.s0+=1),c.s1-=l(s),c.s1<0&&(c.s1+=1),c.s2-=l(s),c.s2<0&&(c.s2+=1),l=null}function a(s,u){return u.c=s.c,u.s0=s.s0,u.s1=s.s1,u.s2=s.s2,u}function i(s,u){var c=new o(s),l=u&&u.state,h=c.next;return h.int32=function(){return 4294967296*c.next()|0},h.double=function(){return h()+11102230246251565e-32*(2097152*h()|0)},h.quick=h,l&&(typeof l=="object"&&a(l,c),h.state=function(){return a(c,{})}),h}e&&e.exports?e.exports=i:t&&t.amd?t(function(){return i}):this.alea=i})(0,r,!1)}),ch=bn(function(r){(function(n,e,t){function o(s){var u=this,c="";u.x=0,u.y=0,u.z=0,u.w=0,u.next=function(){var h=u.x^u.x<<11;return u.x=u.y,u.y=u.z,u.z=u.w,u.w^=u.w>>>19^h^h>>>8},s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),u.next()}function a(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u}function i(s,u){var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(f===0);return f},h.int32=c.next,h.quick=h,l&&(typeof l=="object"&&a(l,c),h.state=function(){return a(c,{})}),h}e&&e.exports?e.exports=i:t&&t.amd?t(function(){return i}):this.xor128=i})(0,r,!1)}),lh=bn(function(r){(function(n,e,t){function o(s){var u=this,c="";u.next=function(){var h=u.x^u.x>>>2;return u.x=u.y,u.y=u.z,u.z=u.w,u.w=u.v,(u.d=u.d+362437|0)+(u.v=u.v^u.v<<4^h^h<<1)|0},u.x=0,u.y=0,u.z=0,u.w=0,u.v=0,s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),l==c.length&&(u.d=u.x<<10^u.x>>>4),u.next()}function a(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u.v=s.v,u.d=s.d,u}function i(s,u){var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(f===0);return f},h.int32=c.next,h.quick=h,l&&(typeof l=="object"&&a(l,c),h.state=function(){return a(c,{})}),h}e&&e.exports?e.exports=i:t&&t.amd?t(function(){return i}):this.xorwow=i})(0,r,!1)}),hh=bn(function(r){(function(n,e,t){function o(s){var u=this;u.next=function(){var c,l,h=u.x,f=u.i;return c=h[f],l=(c^=c>>>7)^c<<24,l^=(c=h[f+1&7])^c>>>10,l^=(c=h[f+3&7])^c>>>3,l^=(c=h[f+4&7])^c<<7,c=h[f+7&7],l^=(c^=c<<13)^c<<9,h[f]=l,u.i=f+1&7,l},function(c,l){var h,f=[];if(l===(0|l))f[0]=l;else for(l=""+l,h=0;h<l.length;++h)f[7&h]=f[7&h]<<15^l.charCodeAt(h)+f[h+1&7]<<13;for(;f.length<8;)f.push(0);for(h=0;h<8&&f[h]===0;++h);for(h==8?f[7]=-1:f[h],c.x=f,c.i=0,h=256;h>0;--h)c.next()}(u,s)}function a(s,u){return u.x=s.x.slice(),u.i=s.i,u}function i(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(f===0);return f},h.int32=c.next,h.quick=h,l&&(l.x&&a(l,c),h.state=function(){return a(c,{})}),h}e&&e.exports?e.exports=i:t&&t.amd?t(function(){return i}):this.xorshift7=i})(0,r,!1)}),fh=bn(function(r){(function(n,e,t){function o(s){var u=this;u.next=function(){var c,l,h=u.w,f=u.X,p=u.i;return u.w=h=h+1640531527|0,l=f[p+34&127],c=f[p=p+1&127],l^=l<<13,c^=c<<17,l^=l>>>15,c^=c>>>12,l=f[p]=l^c,u.i=p,l+(h^h>>>16)|0},function(c,l){var h,f,p,d,m,v=[],g=128;for(l===(0|l)?(f=l,l=null):(l+="\0",f=0,g=Math.max(g,l.length)),p=0,d=-32;d<g;++d)l&&(f^=l.charCodeAt((d+32)%l.length)),d===0&&(m=f),f^=f<<10,f^=f>>>15,f^=f<<4,f^=f>>>13,d>=0&&(m=m+1640531527|0,p=(h=v[127&d]^=f+m)==0?p+1:0);for(p>=128&&(v[127&(l&&l.length||0)]=-1),p=127,d=512;d>0;--d)f=v[p+34&127],h=v[p=p+1&127],f^=f<<13,h^=h<<17,f^=f>>>15,h^=h>>>12,v[p]=f^h;c.w=m,c.X=v,c.i=p}(u,s)}function a(s,u){return u.i=s.i,u.w=s.w,u.X=s.X.slice(),u}function i(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(f===0);return f},h.int32=c.next,h.quick=h,l&&(l.X&&a(l,c),h.state=function(){return a(c,{})}),h}e&&e.exports?e.exports=i:t&&t.amd?t(function(){return i}):this.xor4096=i})(0,r,!1)}),ph=bn(function(r){(function(n,e,t){function o(s){var u=this,c="";u.next=function(){var h=u.b,f=u.c,p=u.d,d=u.a;return h=h<<25^h>>>7^f,f=f-p|0,p=p<<24^p>>>8^d,d=d-h|0,u.b=h=h<<20^h>>>12^f,u.c=f=f-p|0,u.d=p<<16^f>>>16^d,u.a=d-h|0},u.a=0,u.b=0,u.c=-1640531527,u.d=1367130551,s===Math.floor(s)?(u.a=s/4294967296|0,u.b=0|s):c+=s;for(var l=0;l<c.length+20;l++)u.b^=0|c.charCodeAt(l),u.next()}function a(s,u){return u.a=s.a,u.b=s.b,u.c=s.c,u.d=s.d,u}function i(s,u){var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(f===0);return f},h.int32=c.next,h.quick=h,l&&(typeof l=="object"&&a(l,c),h.state=function(){return a(c,{})}),h}e&&e.exports?e.exports=i:t&&t.amd?t(function(){return i}):this.tychei=i})(0,r,!1)}),pn=bn(function(r){(function(n,e){var t,o=this,a=256,i=6,s="random",u=e.pow(a,i),c=e.pow(2,52),l=2*c,h=a-1;function f(g,x,b){var y=[],w=m(function k(R,I){var N,A=[],L=typeof R;if(I&&L=="object")for(N in R)try{A.push(k(R[N],I-1))}catch{}return A.length?A:L=="string"?R:R+"\0"}((x=x==1?{entropy:!0}:x||{}).entropy?[g,v(n)]:g??function(){try{var k;return t&&(k=t.randomBytes)?k=k(a):(k=new Uint8Array(a),(o.crypto||o.msCrypto).getRandomValues(k)),v(k)}catch{var R=o.navigator,I=R&&R.plugins;return[+new Date,o,I,o.screen,v(n)]}}(),3),y),C=new p(y),S=function(){for(var k=C.g(i),R=u,I=0;k<c;)k=(k+I)*a,R*=a,I=C.g(1);for(;k>=l;)k/=2,R/=2,I>>>=1;return(k+I)/R};return S.int32=function(){return 0|C.g(4)},S.quick=function(){return C.g(4)/4294967296},S.double=S,m(v(C.S),n),(x.pass||b||function(k,R,I,N){return N&&(N.S&&d(N,C),k.state=function(){return d(C,{})}),I?(e[s]=k,R):k})(S,w,"global"in x?x.global:this==e,x.state)}function p(g){var x,b=g.length,y=this,w=0,C=y.i=y.j=0,S=y.S=[];for(b||(g=[b++]);w<a;)S[w]=w++;for(w=0;w<a;w++)S[w]=S[C=h&C+g[w%b]+(x=S[w])],S[C]=x;(y.g=function(k){for(var R,I=0,N=y.i,A=y.j,L=y.S;k--;)R=L[N=h&N+1],I=I*a+L[h&(L[N]=L[A=h&A+R])+(L[A]=R)];return y.i=N,y.j=A,I})(a)}function d(g,x){return x.i=g.i,x.j=g.j,x.S=g.S.slice(),x}function m(g,x){for(var b,y=g+"",w=0;w<y.length;)x[h&w]=h&(b^=19*x[h&w])+y.charCodeAt(w++);return v(x)}function v(g){return String.fromCharCode.apply(0,g)}if(e["seed"+s]=f,m(e.random(),n),r.exports){r.exports=f;try{t=require("crypto")}catch{}}})([],Math)});pn.alea=uh,pn.xor128=ch,pn.xorwow=lh,pn.xorshift7=hh,pn.xor4096=fh,pn.tychei=ph;var so=pn.alea,Aa=function(){function r(n,e,t,o,a){this.mean=n,this.stdDev=e,this.dtype=t,this.nextVal=NaN,this.truncated=o,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);var i=a||Math.random();this.random=so(i.toString())}return r.prototype.nextValue=function(){if(!isNaN(this.nextVal)){var n=this.nextVal;return this.nextVal=NaN,n}for(var e,t,o=!1;!o;){var a=void 0,i=void 0,s=void 0;do s=(a=2*this.random()-1)*a+(i=2*this.random()-1)*i;while(s>=1||s===0);var u=Math.sqrt(-2*Math.log(s)/s);e=this.mean+this.stdDev*a*u,t=this.mean+this.stdDev*i*u,this.truncated&&!this.isValidTruncated(e)||(o=!0)}return this.truncated&&!this.isValidTruncated(t)||(this.nextVal=this.convertValue(t)),this.convertValue(e)},r.prototype.convertValue=function(n){return this.dtype==null||this.dtype==="float32"?n:Math.round(n)},r.prototype.isValidTruncated=function(n){return n<=this.upper&&n>=this.lower},r}(),dh=function(){function r(n,e,t,o){this.alpha=n,this.beta=1/e,this.dtype=t;var a=o||Math.random();this.randu=so(a.toString()),this.randn=new Aa(0,1,t,!1,this.randu()),this.d=n<1?n+2/3:n-1/3,this.c=1/Math.sqrt(9*this.d)}return r.prototype.nextValue=function(){for(var n,e,t,o,a,i;;){do o=this.randn.nextValue(),i=1+this.c*o;while(i<=0);if(i*=i*i,e=1-.331*(n=o*o)*n,t=.5*n+this.d*(1-i+Math.log(i)),(a=this.randu())<e||Math.log(a)<t)break}return i=1/this.beta*this.d*i,this.alpha<1&&(i*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(i)},r.prototype.convertValue=function(n){return this.dtype==="float32"?n:Math.round(n)},r}(),vh=function(){function r(n,e,t,o){var a=this;if(n===void 0&&(n=0),e===void 0&&(e=1),this.canReturnFloat=function(){return a.dtype==null||a.dtype==="float32"},this.min=n,this.range=e-n,this.dtype=t,o==null&&(o=Math.random()),typeof o=="number"&&(o=o.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error("The difference between "+n+" - "+e+" <= 1 and dtype is not float");this.random=so(o)}return r.prototype.convertValue=function(n){return this.canReturnFloat()?n:Math.round(n)},r.prototype.nextValue=function(){return this.convertValue(this.min+this.range*this.random())},r}();function oe(r,n,e){return n===void 0&&(n="float32"),n=n||"float32",Bs(r),new or(r,n,e)}function mh(r,n){n===void 0&&(n=!1),console.log(r.toString(n))}var js=D({batchToSpaceND_:function(r,n,e){var t=_(r,"x","batchToSpaceND"),o=n.reduce(function(a,i){return a*i});return E(t.rank>=1+n.length,function(){return"input rank is "+t.rank+" but should be > than blockShape.length "+n.length}),E(e.length===n.length,function(){return"crops.length is "+e.length+" but should be equal to blockShape.length  "+n.length}),E(t.shape[0]%o==0,function(){return"input tensor batch is "+t.shape[0]+" but is not divisible by the product of the elements of blockShape "+n.join(" * ")+" === "+o}),T.runKernelFunc(function(a){return a.batchToSpaceND(t,n,e)},{$x:t},function(a){return{$x:function(){return a.spaceToBatchND(n,e)}}})}}),gh=D({broadcastTo_:function(r,n){var e=_(r,"broadcastTo","x"),t=e.shape;if(n.some(function(u){return!(u>0)||u%1!=0}))throw new Error("broadcastTo(): Invalid broadcast shape ["+n+"].");if(n.length<e.rank)throw new Error("broadcastTo(): shape.length="+n.length+" < input.rank="+e.rank+".");if(n.length>e.rank){for(var o=e.shape.slice();o.length<n.length;)o.unshift(1);e=e.reshape(o)}for(var a=Array.from(n),i=n.length-1;i>=0;i--)if(e.shape[i]===n[i])a[i]=1;else if(e.shape[i]!==1)throw new Error("broadcastTo(): ["+t+"] cannot be broadcast to ["+n+"].");var s=a.map(function(u,c){return u>1?c:-1}).filter(function(u){return u>=0});return s.length===0?e.clone():T.runKernelFunc(function(u){return u.tile(e,a)},{input:e},function(u){return{input:function(){return u.sum(s,!0)}}})}}),yh=D({cast_:function(r,n){var e=_(r,"x","cast");if(!ll(n))throw new Error("Failed to cast to unknown dtype "+n);if(n==="string"&&e.dtype!=="string"||n!=="string"&&e.dtype==="string")throw new Error("Only strings can be casted to strings");var t={dtype:n};return T.runKernelFunc(function(o){return o.cast(e,n)},{x:e},function(o){return{x:function(){return o.clone()}}},"Cast",t)}}),xh=D({clone_:function(r){var n=_(r,"x","clone",null);return T.runKernelFunc(function(){return T.makeTensorFromDataId(n.dataId,n.shape,n.dtype)},{$x:n},function(e){return{$x:function(){return e.toFloat()}}})}}),bh=D({cumsum_:function(r,n,e,t){n===void 0&&(n=0),e===void 0&&(e=!1),t===void 0&&(t=!1);var o=_(r,"x","cumsum"),a=Ot([n|=0],o.rank),i=o;a!=null&&(i=o.transpose(a));var s=Bt(1,o.rank)[0],u=T.runKernelFunc(function(c){return c.cumsum(i,s,e,t)},{permutedX:i},function(c){return{permutedX:function(){return c.cumsum(n,e,!t)}}});return a!=null&&(u=u.transpose(a)),u}}),wh=D({depthToSpace_:function(r,n,e){e===void 0&&(e="NHWC");var t=_(r,"x","depthToSpace"),o=e==="NHWC"?t.shape[1]:t.shape[2],a=e==="NHWC"?t.shape[2]:t.shape[3],i=e==="NHWC"?t.shape[3]:t.shape[1];return E(o*n>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+o+" and "+n+`  for depthToSpace with input shape
      `+t.shape}),E(a*n>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+a+" and "+n+` for depthToSpace with input shape
          `+t.shape}),E(i%(n*n)==0,function(){return"Dimension size must be evenly divisible by "+n*n+" but is "+i+" for depthToSpace with input shape "+t.shape}),T.runKernelFunc(function(s){return s.depthToSpace(t,n,e)},{$x:t})}}),ft=D({expandDims_:function(r,n){n===void 0&&(n=0);var e=_(r,"x","expandDims",null);E(n<=e.rank,function(){return"Axis must be <= rank of the tensor"});var t=e.shape.slice();return n<0&&(E(-(e.rank+1)<=n,function(){return"Axis must be in the interval ["+-(e.rank+1)+", "+e.rank+"]"}),n=e.rank+n+1),t.splice(n,0,1),gt(e,t)}}),qs=D({eye_:function(r,n,e,t){t===void 0&&(t="float32"),n==null&&(n=r);for(var o=oe([r,n],t),a=r<=n?r:n,i=0;i<a;++i)o.set(1,i,i);var s=o.toTensor().as2D(r,n);if(e==null)return s;if(e.length===1)return Bn(ft(s,0),[e[0],1,1]);if(e.length===2)return Bn(ft(ft(s,0),0),[e[0],e[1],1,1]);if(e.length===3)return Bn(ft(ft(ft(s,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error("eye() currently supports only 1D and 2D batchShapes, but received "+e.length+"D.")}}),Ch=D({multinomial_:function(r,n,e,t){t===void 0&&(t=!1);var o=_(r,"logits","multinomial"),a=o.size,i=o.rank;if(a<2)throw new Error("Error in multinomial: you need at least 2 outcomes, but got "+a+".");if(i>2)throw new Error("Rank of probabilities must be 1 or 2, but is "+i);e=e||Math.random();var s=i===1?o.as2D(1,-1):o,u=T.runKernelFunc(function(c){return c.multinomial(s,t,n,e)},{logits2D:s});return i===1?u.as1D():u}}),ha=D({oneHot_:function(r,n,e,t){if(e===void 0&&(e=1),t===void 0&&(t=0),n<2)throw new Error("Error in oneHot: depth must be >=2, but it is "+n);var o=_(r,"indices","oneHot","int32"),a=o.shape.concat([n]);return o=o.flatten(),T.runKernelFunc(function(i){return i.oneHot(o,n,e,t)},{$indices:o},function(i){return{$indices:function(){return we(o.shape,"float32")}}}).reshape(a)}}),wn=D({pad_:function(r,n,e){e===void 0&&(e=0);var t=_(r,"x","pad");if(t.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");var o={paddings:n,constantValue:e};return T.runKernelFunc(function(a){return a.pad(t,n,e)},{x:t},function(a){var i=n.map(function(s){return s[0]});return{x:function(){return a.slice(i,t.shape)}}},"PadV2",o)}}),_h=D({pad1d_:function(r,n,e){return e===void 0&&(e=0),E(n.length===2,function(){return"Invalid number of paddings. Must be length of 2."}),wn(r,[n],e)}}),Eh=D({pad2d_:function(r,n,e){return e===void 0&&(e=0),E(n.length===2&&n[0].length===2&&n[1].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),wn(r,n,e)}}),Rh=D({pad3d_:function(r,n,e){return e===void 0&&(e=0),E(n.length===3&&n[0].length===2&&n[1].length===2&&n[2].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),wn(r,n,e)}}),Ih=D({pad4d_:function(r,n,e){return e===void 0&&(e=0),E(n.length===4&&n[0].length===2&&n[1].length===2&&n[2].length===2&&n[3].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),wn(r,n,e)}}),kh=D({rand_:function(r,n,e){var t=$(r),o=null;if(e==null||e==="float32")o=new Float32Array(t);else if(e==="int32")o=new Int32Array(t);else{if(e!=="bool")throw new Error("Unknown data type "+e);o=new Uint8Array(t)}for(var a=0;a<t;a++)o[a]=n();return T.makeTensor(o,r,e)}}),Sh=D({randomNormal_:function(r,n,e,t,o){if(n===void 0&&(n=0),e===void 0&&(e=1),t!=null&&t==="bool")throw new Error("Unsupported data type "+t);for(var a=new Aa(n,e,t,!1,o),i=oe(r,t),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),Dh=D({randomGamma_:function(r,n,e,t,o){if(e===void 0&&(e=1),t===void 0&&(t="float32"),e==null&&(e=1),t==null&&(t="float32"),t!=="float32"&&t!=="int32")throw new Error("Unsupported data type "+t);for(var a=new dh(n,e,t,o),i=oe(r,t),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),Ks=D({randomUniform_:function(r,n,e,t,o){n===void 0&&(n=0),e===void 0&&(e=1),t===void 0&&(t="float32");for(var a=oe(r,t),i=new vh(n,e,null,o),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),gt=D({reshape_:function(r,n){var e=_(r,"x","reshape",null);n=ul(n,e.size),E(e.size===$(n),function(){return"new shape and old shape must have the same number of elements."});var t={shape:n};return T.runKernelFunc(function(o){return o.reshape(e,n)},{x:e},function(o){return{x:function(){return o.reshape(e.shape)}}},"Reshape",t)}}),Xs=D({spaceToBatchND_:function(r,n,e){var t=_(r,"x","spaceToBatchND");return E(t.rank>=1+n.length,function(){return"input rank "+t.rank+" should be > than [blockShape] "+n.length}),E(e.length===n.length,function(){return"paddings.shape[0] "+e.length+" must be equal to [blockShape] "+n.length}),E(t.shape.reduce(function(o,a,i){return i>0&&i<=n.length?o&&(a+e[i-1][0]+e[i-1][1])%n[i-1]==0:o},!0),function(){return"input spatial dimensions "+t.shape.slice(1)+" with paddings "+e.toString()+" must be divisible by blockShapes "+n.toString()}),T.runKernelFunc(function(o){return o.spaceToBatchND(t,n,e)},{$x:t},function(o){return{$x:function(){return o.batchToSpaceND(n,e)}}})}}),Ys=D({squeeze_:function(r,n){var e=_(r,"x","squeeze");return gt(e,dn(e.shape,n).newShape)}}),lt=D({stack_:function(r,n){n===void 0&&(n=0);var e=Gr(r,"tensors","stack");if(E(e.length>=1,function(){return"Pass at least one tensor to tf.stack"}),e.length===1)return e[0].expandDims(n);var t=e[0].rank,o=e[0].shape,a=e[0].dtype;E(n<=t,function(){return"Axis must be <= rank of the tensor"}),e.forEach(function(s){ye(o,s.shape,"All tensors passed to stack must have matching shapes")}),e.forEach(function(s){E(a===s.dtype,function(){return"All tensors passed to stack must have matching dtypes"})});var i=e.map(function(s){return s.expandDims(n)});return Fe(i,n)}}),Bn=D({tile_:function(r,n){var e=_(r,"x","tile",null);E(e.rank===n.length,function(){return"Error in transpose: rank of input "+e.rank+" must match length of reps "+n+"."});var t=[e],o={reps:n};return T.runKernelFunc(function(a,i){var s=a.tile(e,n);return i([e]),s},{x:e},function(a,i){var s=i[0];return{x:function(){var u=ve(s);if(s.rank===1)for(var c=0;c<n[0];++c)u=u.add(a.slice([c*s.shape[0]],[s.shape[0]]));else if(s.rank===2)for(c=0;c<n[0];++c)for(var l=0;l<n[1];++l)u=u.add(a.slice([c*s.shape[0],l*s.shape[1]],[s.shape[0],s.shape[1]]));else if(s.rank===3)for(c=0;c<n[0];++c)for(l=0;l<n[1];++l)for(var h=0;h<n[2];++h)u=u.add(a.slice([c*s.shape[0],l*s.shape[1],h*s.shape[2]],[s.shape[0],s.shape[1],s.shape[2]]));else{if(s.rank!==4)throw new Error("Gradient for tile operation is not implemented for rank-"+s.rank+" tensors yet.");for(c=0;c<n[0];++c)for(l=0;l<n[1];++l)for(h=0;h<n[2];++h)for(var f=0;f<n[3];++f)u=u.add(a.slice([c*s.shape[0],l*s.shape[1],h*s.shape[2],f*s.shape[3]],[s.shape[0],s.shape[1],s.shape[2],s.shape[3]]))}return u}}},"Tile",o,t)}}),Ah=D({truncatedNormal_:function(r,n,e,t,o){if(n===void 0&&(n=0),e===void 0&&(e=1),t!=null&&t==="bool")throw new Error("Unsupported data type "+t);for(var a=new Aa(n,e,t,!0,o),i=oe(r,t),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),Me=D({unstack_:function(r,n){n===void 0&&(n=0),n=n||0;var e=_(r,"x","unstack");E(n>=-e.shape.length&&n<e.shape.length,function(){return"Axis = "+n+" is not in [-"+e.shape.length+", "+e.shape.length+")"}),n<0&&(n+=e.shape.length);var t={axis:n};return T.runKernelFunc(function(o){return o.unstack(e,n)},{x:e},function(o){return{x:function(){return lt(o,n)}}},"Unpack",t)}}),Th=function(r,n){return X(this,void 0,void 0,function(){var e,t,o,a,i,s,u,c,l,h;return Y(this,function(f){switch(f.label){case 0:return e=_(r,"x","setdiff1d"),t=_(n,"y","setdiff1d"),E(e.dtype===t.dtype,function(){return"x and y should have the same dtype, but got x ("+e.dtype+") and y ("+t.dtype+")."}),E(e.rank===1,function(){return"x should be 1D tensor, but got x ("+e.shape+")."}),E(t.rank===1,function(){return"y should be 1D tensor, but got y ("+t.shape+")."}),[4,e.data()];case 1:return o=f.sent(),[4,t.data()];case 2:for(a=f.sent(),i=new Set(a),s=0,l=0;l<o.length;l++)i.has(o[l])||s++;for(u=new or([s],e.dtype),c=new or([s],"int32"),l=0,h=0;l<o.length;l++)i.has(o[l])||(u.values[h]=o[l],c.values[h]=l,h++);return[2,[u.toTensor(),c.toTensor()]]}})})};function jr(r,n,e,t){t===void 0&&(t=!0);var o=[];if(t)(o=o.concat(n.slice(0))).push(r[0]/e),o=o.concat(r.slice(1));else{o=o.concat(r[0]);for(var a=n.length,i=0;i<a;++i)o=o.concat([r[i+1]/n[i],n[i]]);o=o.concat(r.slice(a+1))}return o}function qr(r,n,e){e===void 0&&(e=!0);var t=[];if(e){t.push(n);for(var o=n+1;o<r;++o)o<=2*n?(t.push(o),t.push(o-(n+1))):t.push(o)}else{var a=[],i=[];for(o=1;o<r;++o)o>=2*n+1||o%2==1?i.push(o):a.push(o);t.push.apply(t,a),t.push(0),t.push.apply(t,i)}return t}function Kr(r,n,e,t){t===void 0&&(t=!0);var o=[];t?o.push(r[0]/e):o.push(r[0]*e);for(var a=1;a<r.length;++a)a<=n.length?t?o.push(n[a-1]*r[a]):o.push(r[a]/n[a-1]):o.push(r[a]);return o}function $s(r,n){for(var e=[0],t=0;t<n;++t)e.push(r[t][0]);return e}function Js(r,n,e){for(var t=r.slice(0,1),o=0;o<e;++o)t.push(r[o+1]-n[o][0]-n[o][1]);return t}function Qs(r,n){if(r.rank<1)throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was "+r.rank+".");if(n.rank<1)throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was "+n.rank+".");if(n.dtype!=="int32")throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was "+n.dtype+".");if(n.shape[n.rank-1]>r.rank)throw new Error("index innermost dimension length must be <= tensor rank; saw: "+n.shape[n.rank-1]+" vs. "+r.rank);if(r.size===0)throw new Error("Requested more than 0 entries, but input is empty. Input shape: "+r.shape+".");for(var e=n.shape,t=e[e.length-1],o=1,a=0;a<e.length-1;++a)o*=e[a];var i=r.shape,s=e.slice();s.pop();var u=1;for(a=t;a<r.rank;++a)u*=i[a],s.push(i[a]);var c=Tt(r.shape).map(function(l){return l/u}).concat([1]).slice(0,t);return[s,o,u,c]}var Zs=30;function Bo(r){return r<=Zs?r:aa(r,Math.floor(Math.sqrt(r)))}function Nh(r,n,e){var t=n.rank>1?n.shape[n.rank-1]:1,o=n.rank>1?n.rank-1:1,a="Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: "+e.shape+", indices.shape: "+n.shape+", shape: "+r+", sliceDim: "+t+", and batchDim: "+o+".";if(e.rank<o)throw new Error(a+" update.rank < "+o+". ");if(r.length<t+(e.rank-o))throw new Error(a+" Output shape length < "+(t+(e.rank-o)));if(e.rank!==o+r.length-t)throw new Error(a+" update.rank != "+(o+r.length-t));for(var i=0;i<o;++i)if(e.shape[i]!==n.shape[i])throw new Error(a+" updates.shape["+i+"] ("+e.shape[i]+") != indices.shape["+i+"] ("+n.shape[i]+").");for(i=0;i<e.rank-o;++i)if(e.shape[i+o]!==r[i+t])throw new Error(a+" updates.shape["+(i+o)+"] ("+e.shape[i+o]+") != shape["+(i+o)+"] ("+r[i+o]+")")}function Fh(r,n,e){if(n.rank<1)throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was "+n.rank+".");if(r.rank<1)throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was "+r.rank+".");if(n.dtype!=="int32")throw new Error("The dtype of 'indices' should be int32, but got dtype: "+n.dtype);if(e.length<1)throw new Error("Output rank must be greater or equal to 1, but got shape: "+e);if(e.length===0){if(n.size===0)throw new Error("Indices specified for empty output. indices shape: "+n.shape);if(r.size===0)throw new Error("Updates specified for empty output. updates shape: "+r.shape)}Nh(e,n,r)}function Xr(r,n,e){for(var t=n.shape.length,o=t>1?n.shape[t-1]:1,a=e.length,i=1,s=o;s<a;++s)i*=e[s];var u=o<1?1:o;return{sliceRank:o,numUpdates:$(n.shape)/u,sliceSize:i,strides:Tt(e.slice(0,o)).concat([1]),outputSize:$(e)}}function Mh(r,n,e){E(r.rank===n.length,function(){return"Error in slice"+r.rank+"D: Length of begin "+n+" must match the rank of the array ("+r.rank+")."}),E(r.rank===e.length,function(){return"Error in slice"+r.rank+"D: Length of size "+e+" must match the rank of the array ("+r.rank+")."});for(var t=function(a){E(n[a]+e[a]<=r.shape[a],function(){return"Error in slice"+r.rank+"D: begin["+a+"] + size["+a+"] ("+(n[a]+e[a])+") would overflow input.shape["+a+"] ("+r.shape[a]+")"})},o=0;o<r.rank;++o)t(o)}function Wi(r){for(var n=[],e=0;r>0;)1&r&&n.push(e),r/=2,e++;return n}function Ta(r,n,e){for(var t=[],o=0;o<r.length;o++)t[o]=Math.ceil((n[o]-r[o])/e[o]);return t}function Ph(r,n,e,t,o){var a=n[o],i=e[o]||1;(r&1<<o||a==null)&&(a=i>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);var s=t[o];return a<0&&(a+=s),a=na(0,a,s-1)}function Oh(r,n,e,t,o){var a=n[o],i=e[o]||1;(r&1<<o||a==null)&&(a=i>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);var s=t[o];return a<0&&(a+=s),a=i>0?na(0,a,s):na(-1,a,s-1)}function eu(r,n,e){for(var t=e.length,o=0;o<e.length;o++)if(e[o]>1){t=o;break}for(o=t+1;o<e.length;o++)if(n[o]>0||e[o]!==r[o])return!1;return!0}function tu(r,n){for(var e=r.length>0?r[r.length-1]:1,t=0;t<r.length-1;t++)e+=r[t]*n[t];return e}function Bh(r,n){E(oa(r),function(){return"The f passed in variableGrads(f) must be a function"}),E(n==null||Array.isArray(n)&&n.every(function(l){return l instanceof Hn}),function(){return"The varList passed in variableGrads(f, varList) must be an array of variables"});var e=n!=null;if(!e)for(var t in n=[],T.registeredVariables)n.push(T.registeredVariables[t]);var o=e?n.filter(function(l){return!l.trainable}):null,a=n.length;E((n=n.filter(function(l){return l.trainable})).length>0,function(){return"variableGrads() expects at least one of the input variables to be trainable, but none of the "+a+" variables is trainable."});var i=T.gradients(r,n,null,!0),s=i.value,u=i.grads;E(u.some(function(l){return l!=null}),function(){return"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."}),E(s.rank===0,function(){return"The f passed in variableGrads(f) must return a scalar, but it returned a rank-"+s.rank+" tensor"});var c={};return n.forEach(function(l,h){u[h]!=null&&(c[l.name]=u[h])}),o!=null&&o.forEach(function(l){return c[l.name]=null}),{value:s,grads:c}}function uo(r){return T.customGrad(r)}var qt=D({softmax_:function(r,n){n===void 0&&(n=-1);var e=_(r,"logits","softmax","float32");if(n===-1&&(n=e.rank-1),n!==e.rank-1)throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and dim was "+n);return T.runKernelFunc(function(t,o){var a=t.softmax(e,n);return o([a]),a},{logits:e},function(t,o){var a=o[0],i=t.mul(a);return{logits:function(){return i.sub(i.sum([n],!0).mul(a))}}},"Softmax",{dim:n},[],[!0])}}),Lh=D({logSoftmax_:function(r,n){n===void 0&&(n=-1);var e=_(r,"logits","logSoftmax");if(n===-1&&(n=e.rank-1),n!==e.rank-1)throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and axis was "+n);return uo(function(t,o){var a=t.max(n,!0),i=t.sub(a),s=i.toFloat().sub(i.exp().sum(n,!0).log());return o([s]),{value:s,gradFunc:function(u,c){var l=c[0].exp();return u.sub(u.sum(n,!0).mul(l))}}})(e)}}),nu=function(){function r(n,e){this.backend=n,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0}return r.prototype.get=function(n){return this.data.has(n)||this.dataMover.moveData(this.backend,n),this.data.get(n)},r.prototype.set=function(n,e){this.dataIdsCount++,this.data.set(n,e)},r.prototype.has=function(n){return this.data.has(n)},r.prototype.delete=function(n){return this.dataIdsCount--,this.data.delete(n)},r.prototype.numDataIds=function(){return this.dataIdsCount},r}(),ru=function(){function r(){}return r.prototype.time=function(n){return F("time")},r.prototype.read=function(n){return F("read")},r.prototype.readSync=function(n){return F("readSync")},r.prototype.numDataIds=function(){return F("numDataIds")},r.prototype.disposeData=function(n){return F("disposeData")},r.prototype.write=function(n,e,t){return F("write")},r.prototype.move=function(n,e,t,o){return F("move")},r.prototype.memory=function(){return F("memory")},r.prototype.floatPrecision=function(){return F("floatPrecision")},r.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},r.prototype.batchMatMul=function(n,e,t,o){return F("batchMatMul")},r.prototype.fusedBatchMatMul=function(n){return n.a,n.b,n.transposeA,n.transposeB,n.bias,n.activation,n.preluActivationWeights,F("fusedBatchMatMul")},r.prototype.slice=function(n,e,t){return F("slice")},r.prototype.stridedSlice=function(n,e,t,o){return F("stridedSlice")},r.prototype.unstack=function(n,e){return F("unstack")},r.prototype.reverse=function(n,e){return F("reverse")},r.prototype.concat=function(n,e){return F("concat")},r.prototype.neg=function(n){return F("neg")},r.prototype.add=function(n,e){return F("add")},r.prototype.addN=function(n){return F("addN")},r.prototype.subtract=function(n,e){return F("subtract")},r.prototype.multiply=function(n,e){return F("multiply")},r.prototype.realDivide=function(n,e){return F("realDivide")},r.prototype.floorDiv=function(n,e){return F("floorDiv")},r.prototype.sum=function(n,e){return F("sum")},r.prototype.prod=function(n,e){return F("prod")},r.prototype.unsortedSegmentSum=function(n,e,t){return F("unsortedSegmentSum")},r.prototype.argMin=function(n,e){return F("argMin")},r.prototype.argMax=function(n,e){return F("argMax")},r.prototype.equal=function(n,e){return F("equal")},r.prototype.notEqual=function(n,e){return F("notEqual")},r.prototype.less=function(n,e){return F("less")},r.prototype.lessEqual=function(n,e){return F("lessEqual")},r.prototype.greater=function(n,e){return F("greater")},r.prototype.greaterEqual=function(n,e){return F("greaterEqual")},r.prototype.logicalNot=function(n){return F("logicalNot")},r.prototype.logicalAnd=function(n,e){return F("logicalAnd")},r.prototype.logicalOr=function(n,e){return F("logicalOr")},r.prototype.where=function(n){return F("where")},r.prototype.select=function(n,e,t){return F("select")},r.prototype.topk=function(n,e,t){return F("topk")},r.prototype.min=function(n,e){return F("min")},r.prototype.minimum=function(n,e){return F("minimum")},r.prototype.mod=function(n,e){return F("mod")},r.prototype.max=function(n,e){return F("max")},r.prototype.maximum=function(n,e){return F("maximum")},r.prototype.all=function(n,e){return F("all")},r.prototype.any=function(n,e){return F("any")},r.prototype.squaredDifference=function(n,e){return F("squaredDifference")},r.prototype.ceil=function(n){return F("ceil")},r.prototype.floor=function(n){return F("floor")},r.prototype.round=function(n){return F("round")},r.prototype.sign=function(n){return F("sign")},r.prototype.isNaN=function(n){return F("isNaN")},r.prototype.isInf=function(n){return F("isInf")},r.prototype.isFinite=function(n){return F("isFinite")},r.prototype.pow=function(n,e){return F("pow")},r.prototype.exp=function(n){return F("exp")},r.prototype.expm1=function(n){return F("expm1")},r.prototype.softmax=function(n,e){return F("softmax")},r.prototype.log=function(n){return F("log")},r.prototype.log1p=function(n){return F("log1p")},r.prototype.sqrt=function(n){return F("sqrt")},r.prototype.rsqrt=function(n){return F("rsqrt")},r.prototype.square=function(n){return F("square")},r.prototype.reciprocal=function(n){return F("reciprocal")},r.prototype.relu=function(n){return F("relu")},r.prototype.relu6=function(n){return F("relu6")},r.prototype.prelu=function(n,e){return F("prelu")},r.prototype.elu=function(n){return F("elu")},r.prototype.eluDer=function(n,e){return F("eluDer")},r.prototype.selu=function(n){return F("selu")},r.prototype.int=function(n){return F("int")},r.prototype.clip=function(n,e,t){return F("clip")},r.prototype.abs=function(n){return F("abs")},r.prototype.complexAbs=function(n){return F("complexAbs")},r.prototype.sigmoid=function(n){return F("sigmoid")},r.prototype.softplus=function(n){return F("softplus")},r.prototype.sin=function(n){return F("sin")},r.prototype.cos=function(n){return F("cos")},r.prototype.tan=function(n){return F("tan")},r.prototype.asin=function(n){return F("asin")},r.prototype.acos=function(n){return F("acos")},r.prototype.atan=function(n){return F("atan")},r.prototype.atan2=function(n,e){return F("atan2")},r.prototype.sinh=function(n){return F("sinh")},r.prototype.cosh=function(n){return F("cosh")},r.prototype.tanh=function(n){return F("tanh")},r.prototype.asinh=function(n){return F("asinh")},r.prototype.acosh=function(n){return F("acosh")},r.prototype.atanh=function(n){return F("atanh")},r.prototype.erf=function(n){return F("erf")},r.prototype.step=function(n,e){return F("step")},r.prototype.fusedConv2d=function(n){return n.input,n.filter,n.convInfo,n.bias,n.activation,n.preluActivationWeights,F("fusedConv2d")},r.prototype.conv2d=function(n,e,t){return F("conv2d")},r.prototype.conv2dDerInput=function(n,e,t){return F("conv2dDerInput")},r.prototype.conv2dDerFilter=function(n,e,t){return F("conv2dDerFilter")},r.prototype.fusedDepthwiseConv2D=function(n){return n.input,n.filter,n.convInfo,n.bias,n.activation,n.preluActivationWeights,F("fusedDepthwiseConv2D")},r.prototype.depthwiseConv2D=function(n,e,t){return F("depthwiseConv2D")},r.prototype.depthwiseConv2DDerInput=function(n,e,t){return F("depthwiseConv2DDerInput")},r.prototype.depthwiseConv2DDerFilter=function(n,e,t){return F("depthwiseConv2DDerFilter")},r.prototype.conv3d=function(n,e,t){return F("conv3d")},r.prototype.conv3dDerInput=function(n,e,t){return F("conv3dDerInput")},r.prototype.conv3dDerFilter=function(n,e,t){return F("conv3dDerFilter")},r.prototype.maxPool=function(n,e){return F("maxPool")},r.prototype.maxPoolBackprop=function(n,e,t,o){return F("maxPoolBackprop")},r.prototype.avgPool=function(n,e){return F("avgPool")},r.prototype.avgPoolBackprop=function(n,e,t){return F("avgPoolBackprop")},r.prototype.avgPool3d=function(n,e){return F("avgPool3d")},r.prototype.avgPool3dBackprop=function(n,e,t){return F("avgPool3dBackprop")},r.prototype.maxPool3d=function(n,e){return F("maxPool3d")},r.prototype.maxPool3dBackprop=function(n,e,t,o){return F("maxPool3dBackprop")},r.prototype.reshape=function(n,e){return F("reshape")},r.prototype.cast=function(n,e){return F("cast")},r.prototype.tile=function(n,e){return F("tile")},r.prototype.pad=function(n,e,t){return F("pad")},r.prototype.transpose=function(n,e){return F("transpose")},r.prototype.gather=function(n,e,t){return F("gather")},r.prototype.gatherND=function(n,e){return F("gatherND")},r.prototype.scatterND=function(n,e,t){return F("scatterND")},r.prototype.batchToSpaceND=function(n,e,t){return F("batchToSpaceND")},r.prototype.spaceToBatchND=function(n,e,t){return F("spaceToBatchND")},r.prototype.resizeBilinear=function(n,e,t,o){return F("resizeBilinear")},r.prototype.resizeBilinearBackprop=function(n,e,t){return F("resizeBilinearBackprop")},r.prototype.resizeNearestNeighbor=function(n,e,t,o){return F("resizeNearestNeighbor")},r.prototype.resizeNearestNeighborBackprop=function(n,e,t){return F("resizeNearestNeighborBackprop")},r.prototype.batchNormalization=function(n,e,t,o,a,i){return F("batchNormalization")},r.prototype.localResponseNormalization4D=function(n,e,t,o,a){return F("localResponseNormalization4D")},r.prototype.LRNGrad=function(n,e,t,o,a,i,s){return F("LRNGrad")},r.prototype.multinomial=function(n,e,t,o){return F("multinomial")},r.prototype.oneHot=function(n,e,t,o){return F("oneHot")},r.prototype.cumsum=function(n,e,t,o){return F("cumsum")},r.prototype.nonMaxSuppression=function(n,e,t,o,a){return F("nonMaxSuppression")},r.prototype.fft=function(n){return F("fft")},r.prototype.ifft=function(n){return F("ifft")},r.prototype.complex=function(n,e){return F("complex")},r.prototype.real=function(n){return F("real")},r.prototype.imag=function(n){return F("imag")},r.prototype.cropAndResize=function(n,e,t,o,a,i){return F("cropAndResize")},r.prototype.depthToSpace=function(n,e,t){return F("depthToSpace")},r.prototype.split=function(n,e,t){return F("split")},r.prototype.sparseToDense=function(n,e,t,o){return F("sparseToDense")},r.prototype.diag=function(n){return F("diag")},r.prototype.fill=function(n,e,t){return F("fill")},r.prototype.onesLike=function(n){return F("onesLike")},r.prototype.zerosLike=function(n){return F("zerosLike")},r.prototype.linspace=function(n,e,t){return F("linspace")},r.prototype.dispose=function(){return F("dispose")},r}();function F(r){throw new Error("'"+r+"' not yet implemented or not found in the registry. Did you forget to import the kernel?")}function en(r,n){for(var e=r.length,t=[],o=0;o<e;o++){var a=e-1-o,i=r[a]||1;(n[n.length-1-o]||1)>1&&i===1&&t.unshift(a)}return t}function Pe(r,n){for(var e=[],t=0;t<n.length;t++){var o=r[r.length-t-1],a=n.length-t-1,i=n[a];(o==null||o===1&&i>1)&&e.unshift(a)}return e}function le(r,n){for(var e=[],t=Math.max(r.length,n.length),o=0;o<t;o++){var a=r[r.length-o-1];a==null&&(a=1);var i=n[n.length-o-1];if(i==null&&(i=1),a===1)e.unshift(i);else if(i===1)e.unshift(a);else{if(a!==i)throw Error("Operands could not be broadcast together with shapes "+r+" and "+n+".");e.unshift(a)}}return e}function ir(r,n,e,t,o,a,i){i===void 0&&(i="channelsLast");var s,u=Jr(n),c=u[0],l=u[1];if(i==="channelsLast")s=[c,l,r[3],r[3]];else{if(i!=="channelsFirst")throw new Error("Unknown dataFormat "+i);s=[c,l,r[1],r[1]]}return Cn(r,s,e,t,o,a,!1,i)}function Yr(r,n,e,t,o,a,i){i===void 0&&(i="NDHWC");var s,u,c=fa(n),l=c[0],h=c[1],f=c[2];if(i==="NDHWC")u="channelsLast",s=[l,h,f,r[4],r[4]];else{if(i!=="NCDHW")throw new Error("Unknown dataFormat "+i);u="channelsFirst",s=[l,h,f,r[1],r[1]]}return $r(r,s,e,t,o,!1,u,a)}function Cn(r,n,e,t,o,a,i,s){i===void 0&&(i=!1),s===void 0&&(s="channelsLast");var u=[-1,-1,-1,-1],c=u[0],l=u[1],h=u[2],f=u[3];if(s==="channelsLast")c=r[0],l=r[1],h=r[2],f=r[3];else{if(s!=="channelsFirst")throw new Error("Unknown dataFormat "+s);c=r[0],f=r[1],l=r[2],h=r[3]}var p,d=n[0],m=n[1],v=n[3],g=Jr(e),x=g[0],b=g[1],y=Jr(t),w=y[0],C=y[1],S=Ln(d,w),k=Ln(m,C),R=function(O,B,U,V,W,G,H,q){var ee,te,ie;if(typeof O=="number"){ee={top:O,bottom:O,left:O,right:O,type:O===0?"VALID":"NUMBER"};var se=function(fe,xe,me,ke,Ce){ke==null&&(ke=ou(fe,xe,me));var _e=fe[0],wt=fe[1],Ct=tr((_e-xe+2*ke)/me+1,Ce);E(De(Ct),function(){return"The output # of rows ("+Ct+") must be an integer. Change the stride and/or zero pad parameters"});var rt=tr((wt-xe+2*ke)/me+1,Ce);return E(De(rt),function(){return"The output # of columns ("+rt+") must be an integer. Change the stride and/or zero pad parameters"}),[Ct,rt]}([B,U],G,V,O,q);te=se[0],ie=se[1]}else if(O==="same"){te=Math.ceil(B/V),ie=Math.ceil(U/W);var ce=Math.max(0,(te-1)*V+G-B),pe=Math.max(0,(ie-1)*W+H-U),he=Math.floor(ce/2),de=ce-he,Ae=Math.floor(pe/2);ee={top:he,bottom:de,left:Ae,right:pe-Ae,type:"SAME"}}else{if(O!=="valid")throw Error("Unknown padding parameter: "+O);ee={top:0,bottom:0,left:0,right:0,type:"VALID"},te=Math.ceil((B-G+1)/V),ie=Math.ceil((U-H+1)/W)}return{padInfo:ee,outHeight:te,outWidth:ie}}(o,l,h,x,b,S,k,a),I=R.padInfo,N=R.outHeight,A=R.outWidth,L=i?v*f:v;return s==="channelsFirst"?p=[c,L,N,A]:s==="channelsLast"&&(p=[c,N,A,L]),{batchSize:c,dataFormat:s,inHeight:l,inWidth:h,inChannels:f,outHeight:N,outWidth:A,outChannels:L,padInfo:I,strideHeight:x,strideWidth:b,filterHeight:d,filterWidth:m,effectiveFilterHeight:S,effectiveFilterWidth:k,dilationHeight:w,dilationWidth:C,inShape:r,outShape:p,filterShape:n}}function $r(r,n,e,t,o,a,i,s){a===void 0&&(a=!1),i===void 0&&(i="channelsLast");var u=[-1,-1,-1,-1,-1],c=u[0],l=u[1],h=u[2],f=u[3],p=u[4];if(i==="channelsLast")c=r[0],l=r[1],h=r[2],f=r[3],p=r[4];else{if(i!=="channelsFirst")throw new Error("Unknown dataFormat "+i);c=r[0],p=r[1],l=r[2],h=r[3],f=r[4]}var d,m=n[0],v=n[1],g=n[2],x=n[4],b=fa(e),y=b[0],w=b[1],C=b[2],S=fa(t),k=S[0],R=S[1],I=S[2],N=Ln(m,k),A=Ln(v,R),L=Ln(g,I),O=function(H,q,ee,te,ie,se,ce,pe,he,de,Ae){var fe,xe,me,ke;if(typeof H=="number"){fe={top:H,bottom:H,left:H,right:H,front:H,back:H,type:H===0?"VALID":"NUMBER"};var Ce=function(In,Vt,_o,kn,_t,Eo){_t==null&&(_t=ou(In,Vt,kn));var $c=In[0],Jc=In[1],Qc=In[2],Ro=tr(($c-Vt+2*_t)/kn+1,Eo);E(De(Ro),function(){return"The output # of depths ("+Ro+") must be an integer. Change the stride and/or zero pad parameters"});var Io=tr((Jc-Vt+2*_t)/kn+1,Eo);E(De(Io),function(){return"The output # of rows ("+Io+") must be an integer. Change the stride and/or zero pad parameters"});var ko=tr((Qc-Vt+2*_t)/kn+1,Eo);return E(De(ko),function(){return"The output # of columns ("+ko+") must be an integer. Change the stride and/or zero pad parameters"}),[Ro,Io,ko,_o]}([q,ee,te,1],pe,1,ie,H,Ae);xe=Ce[0],me=Ce[1],ke=Ce[2]}else if(H==="same"){xe=Math.ceil(q/ie),me=Math.ceil(ee/se),ke=Math.ceil(te/ce);var _e=(xe-1)*ie+pe-q,wt=(me-1)*se+he-ee,Ct=(ke-1)*ce+de-te,rt=Math.floor(_e/2),Rn=_e-rt,Lt=Math.floor(wt/2),Jt=wt-Lt,Wt=Math.floor(Ct/2);fe={top:Lt,bottom:Jt,left:Wt,right:Ct-Wt,front:rt,back:Rn,type:"SAME"}}else{if(H!=="valid")throw Error("Unknown padding parameter: "+H);fe={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},xe=Math.ceil((q-pe+1)/ie),me=Math.ceil((ee-he+1)/se),ke=Math.ceil((te-de+1)/ce)}return{padInfo:fe,outDepth:xe,outHeight:me,outWidth:ke}}(o,l,h,f,y,w,C,N,A,L,s),B=O.padInfo,U=O.outDepth,V=O.outHeight,W=O.outWidth,G=a?x*p:x;return i==="channelsFirst"?d=[c,G,U,V,W]:i==="channelsLast"&&(d=[c,U,V,W,G]),{batchSize:c,dataFormat:i,inDepth:l,inHeight:h,inWidth:f,inChannels:p,outDepth:U,outHeight:V,outWidth:W,outChannels:G,padInfo:B,strideDepth:y,strideHeight:w,strideWidth:C,filterDepth:m,filterHeight:v,filterWidth:g,effectiveFilterDepth:N,effectiveFilterHeight:A,effectiveFilterWidth:L,dilationDepth:k,dilationHeight:R,dilationWidth:I,inShape:r,outShape:d,filterShape:n}}function ou(r,n,e,t){t===void 0&&(t=1);var o=Ln(n,t);return Math.floor((r[0]*(e-1)-e+o)/2)}function Jr(r){return typeof r=="number"?[r,r,r]:r.length===2?[r[0],r[1],1]:r}function fa(r){return typeof r=="number"?[r,r,r]:r}function Ln(r,n){return n<=1?r:r+(r-1)*(n-1)}function tr(r,n){if(!n)return r;switch(n){case"round":return Math.round(r);case"ceil":return Math.ceil(r);case"floor":return Math.floor(r);default:throw new Error("Unknown roundingMode "+n)}}function qn(r){var n=Jr(r),e=n[0],t=n[1],o=n[2];return e===1&&t===1&&o===1}function nt(r,n){return qn(r)||qn(n)}function Na(r){if(r==="NHWC")return"channelsLast";if(r==="NCHW")return"channelsFirst";throw new Error("Unknown dataFormat "+r)}function au(r,n,e){if(n==="complex64"){if(r.dtype==="complex64")return r.clone();var t=we(r.shape),o=r.toFloat(),a=e.complex(o,t);return t.dispose(),o.dispose(),a}if(!hl(r.dtype,n))return T.makeTensorFromDataId(r.dataId,r.shape,n);if(r.dtype==="complex64"){var i=e.real(r);return a=i.cast(n),i.dispose(),a}if(n==="int32")return e.int(r);if(n==="bool"){var s=j(0,r.dtype);return a=e.notEqual(r,s),s.dispose(),a}throw new Error("Error in Cast: failed to cast "+r.dtype+" to "+n)}function pa(r,n){return T.makeTensorFromDataId(r.dataId,n,r.dtype)}function iu(r,n,e){var t=(n-r)/(e-1),o=pr(e,"float32");o[0]=r;for(var a=1;a<o.length;a++)o[a]=o[a-1]+t;return Te(o,"float32")}function da(r,n){if(r.length!==n.length)throw new Error("Cannot merge real and imag arrays of different lengths. real:"+r.length+", imag: "+n.length+".");for(var e=new Float32Array(2*r.length),t=0;t<e.length;t+=2)e[t]=r[t/2],e[t+1]=n[t/2];return e}function Vi(r,n){return{real:r[2*n],imag:r[2*n+1]}}function Wh(r,n,e,t){r[2*t]=n,r[2*t+1]=e}function Vh(r,n,e){var t=(e?2:-2)*Math.PI*(r/n);return{real:Math.cos(t),imag:Math.sin(t)}}function Uh(r,n,e){var t=function(a,i,s){return function(u,c,l){for(var h=0,f=u.length,p=0,d=!1;h<f;){var m=l(c,u[p=h+(f-h>>>1)]);m>0?h=p+1:(f=p,d=!m)}return d?h:-h-1}(a,i,s||zh)}(r,n,e),o=t<0?-(t+1):t;r.splice(o,0,n)}function zh(r,n){return r>n?1:r<n?-1:0}function Fa(r,n,e,t,o){return su(r,n,e,t,o,0).selectedIndices}function Ma(r,n,e,t,o,a){var i=su(r,n,e,t,o,a);return i.numValidOutputs.dispose(),{selectedIndices:i.selectedIndices,selectedScores:i.selectedScores}}function su(r,n,e,t,o,a,i,s){s===void 0&&(s=!1);for(var u=Array.from(n).map(function(y,w){return{score:y,boxIndex:w,suppressBeginIndex:0}}).filter(function(y){return y.score>o}).sort(Ui),c=a>0?-.5/a:0,l=[],h=[];l.length<e&&u.length>0;){var f=u.pop(),p=f.score,d=f.boxIndex,m=f.suppressBeginIndex;if(p<o)break;for(var v=!1,g=l.length-1;g>=m;--g){var x=Gh(r,d,l[g]);if(x>=t){v=!0;break}if(f.score=f.score*Hh(t,c,x),f.score<=o)break}f.suppressBeginIndex=l.length,v||(f.score===p?(l.push(d),h.push(f.score)):f.score>o&&Uh(u,f,Ui))}var b=l.length;return s&&(l.fill(0,b),h.fill(0,b)),{selectedIndices:Te(l,"int32"),selectedScores:Te(h,"float32"),numValidOutputs:j(b,"int32")}}function Gh(r,n,e){var t=r.subarray(4*n,4*n+4),o=r.subarray(4*e,4*e+4),a=Math.min(t[0],t[2]),i=Math.min(t[1],t[3]),s=Math.max(t[0],t[2]),u=Math.max(t[1],t[3]),c=Math.min(o[0],o[2]),l=Math.min(o[1],o[3]),h=Math.max(o[0],o[2]),f=Math.max(o[1],o[3]),p=(s-a)*(u-i),d=(h-c)*(f-l);if(p<=0||d<=0)return 0;var m=Math.max(a,c),v=Math.max(i,l),g=Math.min(s,h),x=Math.min(u,f),b=Math.max(g-m,0)*Math.max(x-v,0);return b/(p+d-b)}function Hh(r,n,e){var t=Math.exp(n*e*e);return e<=r?t:0}function Ui(r,n){return r.score-n.score||r.score===n.score&&n.boxIndex-r.boxIndex}function uu(r,n,e){var t=new Array(r.rank).fill(0),o=r.shape.slice();return n.map(function(a){o[e]=a;var i=r.slice(t,o);return t[e]+=a,i})}function cu(r,n){for(var e=new Array(r.rank),t=0;t<e.length;t++)e[t]=r.shape[t]*n[t];var o=oe(e,r.dtype);for(t=0;t<o.values.length;++t){for(var a=o.indexToLoc(t),i=new Array(r.rank),s=0;s<i.length;s++)i[s]=a[s]%r.shape[s];var u=r.locToIndex(i);o.values[t]=r.values[u]}return o.toTensor()}function lu(r,n,e,t,o){for(var a=n[n.length-1],i=[r.length/a,a],s=i[0],u=i[1],c=rr(e,s*t),l=rr("int32",s*t),h=0;h<s;h++){for(var f=h*u,p=r.subarray(f,f+u),d=[],m=0;m<p.length;m++)d.push({value:p[m],index:m});d.sort(function(y,w){return w.value-y.value});var v=h*t,g=c.subarray(v,v+t),x=l.subarray(v,v+t);for(m=0;m<t;m++)g[m]=d[m].value,x[m]=d[m].index}var b=n.slice();return b[b.length-1]=t,[He(c,b,e),He(l,b,"int32")]}function Pa(r,n){for(var e=[],t=0;t<n.length;t++)n[t]&&e.push(t);var o=oe(r,"int32"),a=oe([e.length,r.length],"int32");for(t=0;t<e.length;t++){var i=o.indexToLoc(e[t]),s=t*r.length;a.values.set(i,s)}return a.toTensor()}var jh=function(r,n){this.outputShape=[],this.outputShape=r,this.variableNames=n.map(function(o,a){return"T"+a});var e=[];this.variableNames.forEach(function(o){e.push("float v"+o+" = get"+o+"AtOutCoords();")});var t=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        float result = `+t+`;
        setOutput(result);
      }
    `},qh=function(r,n){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.variableNames=n.map(function(o,a){return"T"+a});var e=[];this.variableNames.forEach(function(o){e.push("vec4 v"+o+" = get"+o+"AtOutCoords();")});var t=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        vec4 result = `+t+`;
        setOutput(result);
      }
    `},Kh=function(r,n,e){this.variableNames=["A"];var t=r.windowSize,o=r.batchSize,a=r.inSize,i=Math.ceil(a/t);e||this.variableNames.push("bestIndicesA"),this.outputShape=[o,i];var s=n==="max"?">":"<",u=e?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+t+`;

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < `+t+`; i++) {
          int inIdx = `+u+`;
          float candidate = getA(batch, inIdx);
          if (candidate `+s+` bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `};function hu(r,n){return["x","y","z","w","u","v"].slice(0,n).map(function(e){return r+"."+e})}function Ze(r,n){return n===1?[r]:hu(r,n)}function Ye(){var r,n,e,t,o,a,i,s,u,c;return P().getNumber("WEBGL_VERSION")===2?(r="#version 300 es",n="in",e="out",t="in",o="texture",a="outputColor",i="out vec4 outputColor;",s=`
      bool isnan_custom(float val) {
        return (val > 0.0 || val < 0.0) ? false : val != 0.0;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `,u="",c=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(r="",n="attribute",e="varying",t="varying",o="texture2D",a="gl_FragColor",i="",s=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,u=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,c=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:r,attribute:n,varyingVs:e,varyingFs:t,texture2D:o,output:a,defineOutput:i,defineSpecialNaN:s,defineSpecialInf:u,defineRound:c}}function vn(r,n,e){e===void 0&&(e="index");var t=Tt(n);return t.map(function(o,a){return"int "+r[a]+" = "+e+" / "+o+"; "+(a===t.length-1?"int "+r[a+1]+" = "+e+" - "+r[a]+" * "+o:"index -= "+r[a]+" * "+o)+";"}).join("")}function Oa(r){var n=Tt(r).map(function(e){return e.toString()});return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * `+n[0]+" + coords.y * "+n[1]+` + coords.z;
  }
`}var fu=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;function Xh(r,n,e,t){var o=[];r.forEach(function(p){var d=$(p.shapeInfo.logicalShape);p.shapeInfo.isUniform?o.push("uniform float "+p.name+(d>1?"["+d+"]":"")+";"):(o.push("uniform sampler2D "+p.name+";"),o.push("uniform int offset"+p.name+";"))});var a,i,s=o.join(`
`),u=r.map(function(p){return function(d,m,v){v===void 0&&(v=!1);var g="";g+=v?pu(d):Nn(d);var x=d.shapeInfo.logicalShape,b=m.logicalShape;return x.length<=b.length&&(g+=v?function(y,w){var C,S=y.name,k=S.charAt(0).toUpperCase()+S.slice(1),R="get"+k+"AtOutCoords",I=y.shapeInfo.logicalShape.length,N=w.logicalShape.length,A=en(y.shapeInfo.logicalShape,w.logicalShape),L=be(N),O=N-I,B=["x","y","z","w","u","v"];C=I===0?"":N<2&&A.length>=1?"coords = 0;":A.map(function(ee){return"coords."+B[ee+O]+" = 0;"}).join(`
`);var U="";U=N<2&&I>0?"coords":y.shapeInfo.logicalShape.map(function(ee,te){return"coords."+B[te+O]}).join(", ");var V="return outputValue;",W=$(y.shapeInfo.logicalShape)===1,G=$(w.logicalShape)===1;if(I!==1||W||G){if(W&&!G)V=N===1?`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:`
        return vec4(outputValue.x);
      `;else if(A.length){var H=I-2,q=I-1;A.indexOf(H)>-1&&A.indexOf(q)>-1?V="return vec4(outputValue.x);":A.indexOf(H)>-1?V="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":A.indexOf(q)>-1&&(V="return vec4(outputValue.xx, outputValue.zz);")}}else V=`
      return vec4(outputValue.xy, outputValue.xy);
    `;return`
    vec4 `+R+`() {
      `+L+` coords = getOutputCoords();
      `+C+`
      vec4 outputValue = get`+k+"("+U+`);
      `+V+`
    }
  `}(d,m):function(y,w){var C=y.name,S=C.charAt(0).toUpperCase()+C.slice(1),k="get"+S+"AtOutCoords",R=w.texShape,I=y.shapeInfo.texShape,N=y.shapeInfo.logicalShape.length,A=w.logicalShape.length;if(!y.shapeInfo.isUniform&&N===A&&y.shapeInfo.flatOffset==null&&We(I,R))return`
      float `+k+`() {
        return sampleTexture(`+C+`, resultUV);
      }
    `;var L,O=be(A),B=en(y.shapeInfo.logicalShape,w.logicalShape),U=A-N,V=["x","y","z","w","u","v"];L=N===0?"":A<2&&B.length>=1?"coords = 0;":B.map(function(G){return"coords."+V[G+U]+" = 0;"}).join(`
`);var W="";return W=A<2&&N>0?"coords":y.shapeInfo.logicalShape.map(function(G,H){return"coords."+V[H+U]}).join(", "),`
    float `+k+`() {
      `+O+` coords = getOutputCoords();
      `+L+`
      return get`+S+"("+W+`);
    }
  `}(d,m)),g}(p,n,t)}).join(`
`),c=n.texShape,l=Ye(),h=function(p){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return `+p.texture2D+`(textureSampler, uv).r;
    }
  `}(l),f=function(p){return p.version+`
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    `+p.varyingFs+` vec2 resultUV;
    `+p.defineOutput+`
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    `+p.defineSpecialNaN+`
    `+p.defineSpecialInf+`
    `+p.defineRound+`

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    `+Yh+`
    `+$h+`
    `+Jh+`
  `}(l);return n.isPacked?(a=function(p,d){switch(p.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(y,w){var C=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];return C[0]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * `+C[1]+`.0);
      }
    `:C[1]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * `+C[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+C[0]+", "+C[1]+`));
      return 2 * (resTexRC.x * `+C[1]+` + resTexRC.y);
    }
  `}(0,d);case 2:return function(y,w){var C=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];if(We(y,w))return`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(`+C[0]+", "+C[1]+`));
      }
    `;var S=Math.ceil(y[1]/2);return`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+C[0]+", "+C[1]+`));

      int index = resTexRC.x * `+C[1]+` + resTexRC.y;
      int r = 2 * (index / `+S+`);
      int c = imod(index, `+S+`) * 2;

      return ivec2(r, c);
    }
  `}(p,d);case 3:return m=p,v=d,g=[Math.ceil(v[0]/2),Math.ceil(v[1]/2)],x=Math.ceil(m[2]/2),b=x*Math.ceil(m[1]/2),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+g[0]+", "+g[1]+`));
      int index = resTexRC.x * `+g[1]+` + resTexRC.y;

      int b = index / `+b+`;
      index -= b * `+b+`;

      int r = 2 * (index / `+x+`);
      int c = imod(index, `+x+`) * 2;

      return ivec3(b, r, c);
    }
  `;default:return function(y,w){for(var C=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)],S=Math.ceil(y[y.length-1]/2),k=S*Math.ceil(y[y.length-2]/2),R=k,I="",N="b, r, c",A=2;A<y.length-1;A++)R*=y[y.length-A-1],I=`
      int b`+A+" = index / "+R+`;
      index -= b`+A+" * "+R+`;
    `+I,N="b"+A+", "+N;return`
    ivec`+y.length+` getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+C[0]+", "+C[1]+`));
      int index = resTexRC.x * `+C[1]+` + resTexRC.y;

      `+I+`

      int b = index / `+k+`;
      index -= b * `+k+`;

      int r = 2 * (index / `+S+`);
      int c = imod(index, `+S+`) * 2;

      return ivec`+y.length+"("+N+`);
    }
  `}(p,d)}var m,v,g,x,b}(n.logicalShape,c),i=function(p){return`
    void setOutput(vec4 val) {
      `+p.output+` = val;
    }
  `}(l)):(a=function(p,d){switch(p.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(g,x){return x[0]===1?`
      int getOutputCoords() {
        return int(resultUV.x * `+x[1]+`.0);
      }
    `:x[1]===1?`
      int getOutputCoords() {
        return int(resultUV.y * `+x[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+x[0]+", "+x[1]+`));
      return resTexRC.x * `+x[1]+` + resTexRC.y;
    }
  `}(0,d);case 2:return function(g,x){return We(g,x)?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(`+x[0]+", "+x[1]+`));
      }
    `:g[1]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+x[0]+", "+x[1]+`));
        int index = resTexRC.x * `+x[1]+` + resTexRC.y;
        return ivec2(index, 0);
      }
    `:g[0]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+x[0]+", "+x[1]+`));
        int index = resTexRC.x * `+x[1]+` + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+x[0]+", "+x[1]+`));
      int index = resTexRC.x * `+x[1]+` + resTexRC.y;
      int r = index / `+g[1]+`;
      int c = index - r * `+g[1]+`;
      return ivec2(r, c);
    }
  `}(p,d);case 3:return m=d,v=vn(["r","c","d"],p),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+m[0]+", "+m[1]+`));
      int index = resTexRC.x * `+m[1]+` + resTexRC.y;
      `+v+`
      return ivec3(r, c, d);
    }
  `;case 4:return function(g,x){var b=vn(["r","c","d","d2"],g);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+x[0]+", "+x[1]+`));
      int index = resTexRC.x * `+x[1]+` + resTexRC.y;
      `+b+`
      return ivec4(r, c, d, d2);
    }
  `}(p,d);case 5:return function(g,x){var b=vn(["r","c","d","d2","d3"],g);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(`+x[0]+`,
                             `+x[1]+`));

      int index = resTexRC.x * `+x[1]+` + resTexRC.y;

      `+b+`

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}(p,d);case 6:return function(g,x){var b=vn(["r","c","d","d2","d3","d4"],g);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+x[0]+", "+x[1]+`));
      int index = resTexRC.x * `+x[1]+` + resTexRC.y;

      `+b+`

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}(p,d);default:throw new Error(p.length+"-D output sampling is not yet supported")}var m,v}(n.logicalShape,c),i=function(p){return`
    void setOutput(float val) {
      `+p.output+` = vec4(val, 0, 0, 0);
    }
  `}(l)),t&&(f+=Qh),[f,h,i,s,a,u,e].join(`
`)}function Nn(r){var n=r.shapeInfo.logicalShape;switch(n.length){case 0:return function(e){var t=e.name,o="get"+t.charAt(0).toUpperCase()+t.slice(1);if(e.shapeInfo.isUniform)return"float "+o+"() {return "+t+";}";var a=e.shapeInfo.texShape,i=a[0],s=a[1];if(i===1&&s===1)return`
      float `+o+`() {
        return sampleTexture(`+t+`, halfCR);
      }
    `;var u=e.shapeInfo.texShape,c=u[0],l=u[1],h=hn(t);return`
    float `+o+`() {
      vec2 uv = uvFromFlat(`+c+", "+l+", "+h+`);
      return sampleTexture(`+t+`, uv);
    }
  `}(r);case 1:return function(e){var t=e.name,o="get"+t.charAt(0).toUpperCase()+t.slice(1);if(e.shapeInfo.isUniform)return`
      float `+o+`(int index) {
        `+Sn(e)+`
      }
    `;var a=e.shapeInfo.texShape,i=a[0],s=a[1];if(s===1&&i===1)return`
      float `+o+`(int index) {
        return sampleTexture(`+t+`, halfCR);
      }
    `;var u=hn(t);return s===1?`
      float `+o+`(int index) {
        vec2 uv = vec2(0.5, (float(index + `+u+") + 0.5) / "+i+`.0);
        return sampleTexture(`+t+`, uv);
      }
    `:i===1?`
      float `+o+`(int index) {
        vec2 uv = vec2((float(index + `+u+") + 0.5) / "+s+`.0, 0.5);
        return sampleTexture(`+t+`, uv);
      }
    `:`
    float `+o+`(int index) {
      vec2 uv = uvFromFlat(`+i+", "+s+", index + "+u+`);
      return sampleTexture(`+t+`, uv);
    }
  `}(r);case 2:return function(e){var t=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=e.shapeInfo.texShape;if(i!=null&&We(t,i)){var s=i[0],u=i[1];return`
    float `+a+`(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(`+u+".0, "+s+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `}var c=dn(t),l=c.newShape,h=c.keptDims,f=l;if(f.length<t.length){var p=Fn(e,f);return`
      `+Nn(p)+`
      float `+a+`(int row, int col) {
        return `+a+"("+Mn(["row","col"],h)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(`+t[1]+`, 1)));
        `+Sn(e)+`
      }
    `;var d=i[0],m=i[1],v=hn(o);return m===1?`
    float `+a+`(int row, int col) {
      float index = dot(vec3(row, col, `+v+"), vec3("+t[1]+`, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / `+d+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `:d===1?`
    float `+a+`(int row, int col) {
      float index = dot(vec3(row, col, `+v+"), vec3("+t[1]+`, 1, 1));
      vec2 uv = vec2((index + 0.5) / `+m+`.0, 0.5);
      return sampleTexture(`+o+`, uv);
    }
  `:`
  float `+a+`(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * `+t[1]+" + col + "+v+`;
    vec2 uv = uvFromFlat(`+d+", "+m+`, index);
    return sampleTexture(`+o+`, uv);
  }
`}(r);case 3:return function(e){var t=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=t[1]*t[2],s=t[2],u=dn(t),c=u.newShape,l=u.keptDims,h=c;if(h.length<t.length){var f=Fn(e,h);return`
        `+Nn(f)+`
        float `+a+`(int row, int col, int depth) {
          return `+a+"("+Mn(["row","col","depth"],l)+`);
        }
      `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(`+i+", "+s+`, 1)));
        `+Sn(e)+`
      }
    `;var p=e.shapeInfo.texShape,d=p[0],m=p[1],v=e.shapeInfo.flatOffset;if(m===i&&v==null)return`
        float `+a+`(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(`+s+`, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(`+m+".0, "+d+`.0);
          return sampleTexture(`+o+`, uv);
        }
      `;if(m===s&&v==null)return`
    float `+a+`(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(`+t[1]+`, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+m+".0, "+d+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `;var g=hn(o);return`
      float `+a+`(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * `+i+" + col * "+s+" + depth + "+g+`;
        vec2 uv = uvFromFlat(`+d+", "+m+`, index);
        return sampleTexture(`+o+`, uv);
      }
  `}(r);case 4:return function(e){var t=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=t[3],s=t[2]*i,u=t[1]*s,c=dn(t),l=c.newShape,h=c.keptDims;if(l.length<t.length){var f=Fn(e,l);return`
      `+Nn(f)+`
      float `+a+`(int row, int col, int depth, int depth2) {
        return `+a+"("+Mn(["row","col","depth","depth2"],h)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(`+u+", "+s+", "+i+`, 1)));
        `+Sn(e)+`
      }
    `;var p=e.shapeInfo.flatOffset,d=e.shapeInfo.texShape,m=d[0],v=d[1];if(v===u&&p==null)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(`+s+", "+i+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+v+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(v===i&&p==null)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(`+t[1]*t[2]+", "+t[2]+`, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+v+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var g=hn(o);return`
    float `+a+`(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+u+" + col * "+s+` +
          depth * `+i+` + depth2;
      vec2 uv = uvFromFlat(`+m+", "+v+", index + "+g+`);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);case 5:return function(e){var t=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=t[4],s=t[3]*i,u=t[2]*s,c=t[1]*u,l=dn(t),h=l.newShape,f=l.keptDims;if(h.length<t.length){var p=Fn(e,h);return`
      `+Nn(p)+`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        return `+a+"("+Mn(["row","col","depth","depth2","depth3"],f)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(`+c+", "+u+", "+s+", "+i+`)) +
          depth3;
        `+Sn(e)+`
      }
    `;var d=e.shapeInfo.flatOffset,m=e.shapeInfo.texShape,v=m[0],g=m[1];if(g===c&&d==null)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(`+u+", "+s+", "+i+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+g+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(g===i&&d==null)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(`+t[1]*t[2]*t[3]+`,
               `+t[2]*t[3]+", "+t[3]+`, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+g+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var x=hn(o);return`
    float `+a+`(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+c+" + col * "+u+" + depth * "+s+` +
          depth2 * `+i+" + depth3 + "+x+`;
      vec2 uv = uvFromFlat(`+v+", "+g+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);case 6:return function(e){var t=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=dn(t),s=i.newShape,u=i.keptDims;if(s.length<t.length){var c=Fn(e,s);return`
      `+Nn(c)+`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return `+a+"("+Mn(["row","col","depth","depth2","depth3","depth4"],u)+`);
      }
    `}var l=t[5],h=t[4]*l,f=t[3]*h,p=t[2]*f,d=t[1]*p;if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(`+d+", "+p+", "+f+", "+h+`)) +
          dot(
            vec2(depth3, depth4),
            vec2(`+l+`, 1)));
        `+Sn(e)+`
      }
    `;var m=e.shapeInfo.flatOffset,v=e.shapeInfo.texShape,g=v[0],x=v[1];if(x===d&&m==null)return`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(`+p+", "+f+", "+h+", "+l+`)) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+x+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(x===l&&m==null)return`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(`+t[1]*t[2]*t[3]*t[4]+`,
               `+t[2]*t[3]*t[4]+`,
               `+t[3]*t[4]+`,
               `+t[4]+`)) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+x+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var b=hn(o);return`
    float `+a+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+d+" + col * "+p+" + depth * "+f+` +
          depth2 * `+h+" + depth3 * "+l+" + depth4 + "+b+`;
      vec2 uv = uvFromFlat(`+g+", "+x+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);default:throw new Error(n.length+"-D input sampling is not yet supported")}}function pu(r){var n,e,t;switch(r.shapeInfo.logicalShape.length){case 0:return n=r.name,e="get"+n.charAt(0).toUpperCase()+n.slice(1),t=Ye(),`
    vec4 `+e+`() {
      return `+t.texture2D+"("+n+`, halfCR);
    }
  `;case 1:return function(o){var a=o.name,i="get"+a.charAt(0).toUpperCase()+a.slice(1),s=o.shapeInfo.texShape,u=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],c=Ye();return`
    vec4 `+i+`(int index) {
      vec2 uv = packedUVfrom1D(
        `+u[0]+", "+u[1]+`, index);
      return `+c.texture2D+"("+a+`, uv);
    }
  `}(r);case 2:return function(o){var a=o.shapeInfo.logicalShape,i=o.name,s="get"+i.charAt(0).toUpperCase()+i.slice(1),u=o.shapeInfo.texShape,c=u[0],l=u[1],h=Ye();if(u!=null&&We(a,u))return`
      vec4 `+s+`(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(`+l+".0, "+c+`.0);

        return `+h.texture2D+"("+i+`, uv);
      }
    `;var f=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)],p=Math.ceil(a[1]/2);return`
    vec4 `+s+`(int row, int col) {
      vec2 uv = packedUVfrom2D(`+p+", "+f[0]+", "+f[1]+`, row, col);
      return `+h.texture2D+"("+i+`, uv);
    }
  `}(r);case 3:return function(o){var a=o.shapeInfo.logicalShape,i=o.name,s="get"+i.charAt(0).toUpperCase()+i.slice(1),u=o.shapeInfo.texShape,c=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)];if(a[0]===1){var l=a.slice(1),h=Fn(o,l);return`
        `+pu(h)+`
        vec4 `+s+`(int b, int row, int col) {
          return `+s+"("+Mn(["b","row","col"],[1,2])+`);
        }
      `}var f=c[0],p=c[1],d=Math.ceil(a[2]/2),m=d*Math.ceil(a[1]/2),v=Ye();return`
    vec4 `+s+`(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        `+f+", "+p+", "+m+", "+d+`, b, row, col);
      return `+v.texture2D+"("+i+`, uv);
    }
  `}(r);default:return function(o){for(var a=o.shapeInfo.logicalShape,i=a.length,s=o.name,u="get"+s.charAt(0).toUpperCase()+s.slice(1),c=o.shapeInfo.texShape,l=[Math.ceil(c[0]/2),Math.ceil(c[1]/2)],h=l[0],f=l[1],p=Math.ceil(a[i-1]/2),d=p*Math.ceil(a[i-2]/2),m="int b, int row, int col",v="b * "+d+" + (row / 2) * "+p+" + (col / 2)",g=2;g<i-1;g++)m="int b"+g+", "+m,d*=a[i-g-1],v="b"+g+" * "+d+" + "+v;var x=Ye();return`
    vec4 `+u+"("+m+`) {
      int index = `+v+`;
      int texR = index / `+f+`;
      int texC = index - texR * `+f+`;
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+f+", "+h+`);
      return `+x.texture2D+"("+s+`, uv);
    }
  `}(r)}}var Yh=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,$h=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,Jh=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,Qh=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function hn(r){return"offset"+r}function Sn(r){var n=r.name,e=$(r.shapeInfo.logicalShape);return e<2?"return "+n+";":`
    for (int i = 0; i < `+e+`; i++) {
      if (i == index) {
        return `+n+`[i];
      }
    }
  `}function be(r){if(r<=1)return"int";if(r===2)return"ivec2";if(r===3)return"ivec3";if(r===4)return"ivec4";if(r===5)return"ivec5";if(r===6)return"ivec6";throw Error("GPU for rank "+r+" is not yet supported")}function Fn(r,n){var e=JSON.parse(JSON.stringify(r));return e.shapeInfo.logicalShape=n,e}function Mn(r,n){return n.map(function(e){return r[e]}).join(", ")}var Zh=function(r,n,e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,E(r.length>2,function(){return"Packed arg"+(e.charAt(0).toUpperCase()+e.slice(1))+" supports only inputs with rank above 2."});var o=r[r.length-1],a=Math.ceil(o/n);this.outputShape=r.slice(0,-1),a>1&&this.outputShape.push(a),t||this.variableNames.push("bestIndicesA");var i,s,u=this.outputShape,c=u.length,l=be(c),h=Ze("coords",c);if(a===1){var f=be(s=c+1);i=`
        `+f+" sourceLocR = "+f+"("+h.join()+`, 0);
        ++`+h[c-1]+`;
        `+f+" sourceLocG = "+f+"("+h.join()+`, 0);
        ++`+h[c-2]+`;
        `+f+" sourceLocA = "+f+"("+h.join()+`, 0);
        --`+h[c-1]+`;
        `+f+" sourceLocB = "+f+"("+h.join()+`, 0);
        --`+h[c-2]+";"}else s=c,i=`
        `+l+` sourceLocR = coords;
        ++`+h[c-1]+`;
        `+l+` sourceLocG = coords;
        ++`+h[c-2]+`;
        `+l+` sourceLocA = coords;
        --`+h[c-1]+`;
        `+l+` sourceLocB = coords;
        --`+h[c-2]+";";var p=["x","y","z","w","u","v"].slice(0,s),d="."+p[s-1],m=p.map(function(k){return"int "+k}),v=Ze("sourceLocR",s-1).concat("inIdx.r"),g=Ze("sourceLocG",s-1).concat("inIdx.g"),x=Ze("sourceLocB",s-1).concat("inIdx.b"),b=Ze("sourceLocA",s-1).concat("inIdx.a"),y=e==="max"?"greaterThan":"lessThan",w=t?"":`
          inIdx = round(vec4(getBestIndicesAChannel(`+v.join()+`),
                             getBestIndicesAChannel(`+g.join()+`),
                             getBestIndicesAChannel(`+x.join()+`),
                             getBestIndicesAChannel(`+b.join()+")));",C=`vec4(
            getAChannel(`+v.join()+`),
            hasNextCol ? getAChannel(`+g.join()+`) : 0.,
            hasNextRow ? getAChannel(`+x.join()+`) : 0.,
            hasNextRow && hasNextCol ? getAChannel(`+b.join()+") : 0.)",S=t?"":`
      float getBestIndicesAChannel(`+m.join()+`) {
        return getChannel(getBestIndicesA(`+p.join()+`),
                                          vec2(`+p.slice(-2).join()+`));
      }`;this.userCode=`
      float getAChannel(`+m.join()+`) {
        return getChannel(getA(`+p.join()+`),
                               vec2(`+p.slice(-2).join()+`));
      }
      `+S+`
      void main() {
        `+l+` coords = getOutputCoords();
        bool hasNextCol = `+h[c-1]+" < "+(u[c-1]-1)+`;
        bool hasNextRow = `+h[c-2]+" < "+(u[c-2]-1)+`;
        `+i+`
        ivec4 srcIdx = ivec4(sourceLocR`+d+", sourceLocG"+d+`,
          sourceLocB`+d+", sourceLocA"+d+") * "+n+`;
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = `+C+`;

        for (int i = 0; i < `+n+`; i++) {
          inIdx = srcIdx;
          `+w+`
          vec4 candidate = `+C+`;
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(`+y+`(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `},ef=function(r){this.variableNames=["dy"],this.outputShape=r.inShape;var n=r.filterHeight,e=r.filterWidth,t=r.strideHeight,o=r.strideWidth,a=r.dilationHeight,i=r.dilationWidth,s=r.effectiveFilterHeight,u=r.effectiveFilterWidth,c=s-1-r.padInfo.top,l=u-1-r.padInfo.left,h=1/(n*e);this.userCode=`
      const ivec2 pads = ivec2(`+c+", "+l+`);
      const float avgMultiplier = float(`+h+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+s+`;
            wR += `+a+`) {
          float dyR = float(dyRCorner + wR) / `+t+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+u+`;
            wC+= `+i+`) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `},tf=function(r){this.variableNames=["dy"],this.outputShape=r.inShape;var n=r.filterDepth,e=r.filterHeight,t=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterDepth,h=r.effectiveFilterHeight,f=r.effectiveFilterWidth,p=l-1-r.padInfo.front,d=h-1-r.padInfo.top,m=f-1-r.padInfo.left,v=1/(n*e*t);this.userCode=`
      const ivec3 pads = ivec3(`+p+", "+d+", "+m+`);
      const float avgMultiplier = float(`+v+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          float dyD = float(dyDCorner + wD) / `+o+`.0;

          if (dyD < 0.0 || dyD >= `+r.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+h+`;
              wR += `+u+`) {
            float dyR = float(dyRCorner + wR) / `+a+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+f+`;
                wC += `+c+`) {
              float dyC = float(dyCCorner + wC) / `+i+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `},nf=function(r,n,e,t,o,a){this.outputShape=[],this.variableNames=["x","mean","variance"],le(r,n),le(r,e);var i="0.0";t!=null&&(le(r,t),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="1.0";o!=null&&(le(r,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=r,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = `+i+`;
        float scale = `+s+`;
        float inv = scale * inversesqrt(variance + float(`+a+`));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `},rf=function(r,n,e,t,o,a){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],le(r,n),le(r,e);var i="vec4(0.0)";t!=null&&(le(r,t),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="vec4(1.0)";o!=null&&(le(r,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=r,this.userCode=`
      void main() {
        vec4 offset = `+i+`;
        vec4 scale = `+s+`;

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(`+a+`));

        setOutput((x - mean) * inv + offset);
      }
    `},of="return areal * breal - aimag * bimag;",af="return areal * bimag + aimag * breal;",zi=function(r,n,e){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=le(n,e),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        `+r+`
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `},Lo="return a + b;",Wo="return a - b;",Gi="return a * b;",du="return (a < 0.) ? b * a : a;",Se=function(r,n,e){this.variableNames=["A","B"],this.outputShape=le(n,e),this.userCode=`
      float binaryOperation(float a, float b) {
        `+r+`
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `},vu=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,zt=function(r,n,e,t){t===void 0&&(t=!1),this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=le(n,e);var o=this.outputShape.length,a="";if(t)if(o===0||$(this.outputShape)===1)a=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(a=`
          `+be(o)+` coords = getOutputCoords();
        `,o===1)a+=`
            result.y = (coords + 1) >= `+this.outputShape[0]+` ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{var i=Ze("coords",o);a+=`
            bool nextRowOutOfBounds =
              (`+i[o-2]+" + 1) >= "+this.outputShape[o-2]+`;
            bool nextColOutOfBounds =
              (`+i[o-1]+" + 1) >= "+this.outputShape[o-1]+`;
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        `+r+`
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        `+a+`

        setOutput(result);
      }
    `},sf=function(){function r(n){this.variableNames=["A"],this.outputShape=n,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}return r.prototype.getCustomSetupFunc=function(n,e){var t=this;return function(o,a){t.minLoc==null&&(t.minLoc=o.getUniformLocationNoThrow(a,"minVal"),t.maxLoc=o.getUniformLocationNoThrow(a,"maxVal")),o.gl.uniform1f(t.minLoc,n),o.gl.uniform1f(t.maxLoc,e)}},r}(),uf=function(){function r(n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}return r.prototype.getCustomSetupFunc=function(n,e){var t=this;return function(o,a){t.minLoc==null&&(t.minLoc=o.getUniformLocationNoThrow(a,"minVal"),t.maxLoc=o.getUniformLocationNoThrow(a,"maxVal")),o.gl.uniform1f(t.minLoc,n),o.gl.uniform1f(t.maxLoc,e)}},r}(),cf=function(r){this.variableNames=["real","imag"],this.outputShape=r,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `},lf=function(r){this.outputShape=[],this.outputShape=jn(r,1),this.variableNames=r.map(function(s,u){return"T"+u});var n=new Array(r.length-1);n[0]=r[0][1];for(var e=1;e<n.length;e++)n[e]=n[e-1]+r[e][1];var t=["if (yC < "+n[0]+") setOutput(getT0(yR, yC));"];for(e=1;e<n.length;e++){var o=n[e-1];t.push("else if (yC < "+n[e]+") setOutput(getT"+e+"(yR, yC-"+o+"));")}var a=n.length,i=n[n.length-1];t.push("else setOutput(getT"+a+"(yR, yC-"+i+"));"),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        `+t.join(`
        `)+`
      }
    `},hf=function(r,n){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=jn(r,n);var e=this.outputShape,t=e.length,o=be(t),a=Ze("coords",t),i=["x","y","z","w","u","v"].slice(0,t);this.variableNames=r.map(function(v,g){return"T"+g});var s=new Array(r.length-1);s[0]=r[0][n];for(var u=1;u<s.length;u++)s[u]=s[u-1]+r[u][n];var c=i[n],l=i.slice(-2),h=i.join(),f="if ("+c+" < "+s[0]+`) {
        return getChannel(
            getT0(`+h+"), vec2("+l.join()+`));
        }`;for(u=1;u<s.length;u++){var p=s[u-1];f+=`
        if (`+c+" < "+s[u]+"  && "+c+" >= "+s[u-1]+`) {
          return getChannel(
            getT`+u+"("+kr(i,c,p)+`),
            vec2(`+kr(l,c,p)+`));
        }`}var d=s.length,m=s[s.length-1];f+=`
        return getChannel(
          getT`+d+"("+kr(i,c,m)+`),
          vec2(`+kr(l,c,m)+"));",this.userCode=`
      float getValue(`+i.map(function(v){return"int "+v})+`) {
        `+f+`
      }

      void main() {
        `+o+` coords = getOutputCoords();
        vec4 result = vec4(getValue(`+a+`), 0., 0., 0.);

        `+a[t-1]+" = "+a[t-1]+` + 1;
        if (`+a[t-1]+" < "+e[t-1]+`) {
          result.g = getValue(`+a+`);
        }

        `+a[t-2]+" = "+a[t-2]+` + 1;
        if (`+a[t-2]+" < "+e[t-2]+`) {
          result.a = getValue(`+a+`);
        }

        `+a[t-1]+" = "+a[t-1]+` - 1;
        if (`+a[t-2]+" < "+e[t-2]+` &&
            `+a[t-1]+" < "+e[t-1]+`) {
          result.b = getValue(`+a+`);
        }
        setOutput(result);
      }
    `};function kr(r,n,e){var t=r.indexOf(n);return r.map(function(o,a){return a===t?o+" - "+e:o}).join()}var ff=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var n=r.strideHeight,e=r.strideWidth,t=r.padInfo.top,o=r.padInfo.left,a=r.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yR = 0; yR < `+r.outHeight+`; yR++) {
            int xR = wR + yR * `+n+" - "+t+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+r.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+o+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              if (`+a+`) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},pf=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var n=r.filterHeight,e=r.filterWidth,t=r.strideHeight,o=r.strideWidth,a=r.dataFormat==="channelsLast",i=n-1-r.padInfo.top,s=e-1-r.padInfo.left,u=a?1:2,c=a?2:3,l=a?3:1;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[`+l+`];

        ivec2 dyCorner = ivec2(coords[`+u+"], coords["+c+`]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+n+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+t+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+n+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            for (int d2 = 0; d2 < `+r.outChannels+`; d2++) {

              if (`+a+`) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},df=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var n=r.strideDepth,e=r.strideHeight,t=r.strideWidth,o=r.padInfo.front,a=r.padInfo.top,i=r.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yF = 0; yF < `+r.outDepth+`; yF++) {
            int xF = wF + yF * `+n+" - "+o+`;

            if (xF < 0 || xF >= `+r.inDepth+`) {
              continue;
            }

            for (int yR = 0; yR < `+r.outHeight+`; yR++) {
              int xR = wR + yR * `+e+" - "+a+`;

              if (xR < 0 || xR >= `+r.inHeight+`) {
                continue;
              }

              for (int yC = 0; yC < `+r.outWidth+`; yC++) {
                int xC = wC + yC * `+t+" - "+i+`;

                if (xC < 0 || xC >= `+r.inWidth+`) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},vf=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var n=r.filterDepth,e=r.filterHeight,t=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=n-1-r.padInfo.front,u=e-1-r.padInfo.top,c=t-1-r.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(`+s+", "+u+", "+c+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < `+n+`; wF++) {
          float dyF = float(dyFCorner + wF) / `+o+`.0;

          if (dyF < 0.0 || dyF >= `+r.outDepth+`.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = `+n+` - 1 - wF;

          for (int wR = 0; wR < `+e+`; wR++) {
            float dyR = float(dyRCorner + wR) / `+a+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = `+e+` - 1 - wR;

            for (int wC = 0; wC < `+t+`; wC++) {
              float dyC = float(dyCCorner + wC) / `+i+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = `+t+` - 1 - wC;

              for (int d2 = 0; d2 < `+r.outChannels+`; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},mf=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var n=r.strideHeight,e=r.strideWidth,t=r.padInfo.top,o=r.padInfo.left,a=r.outChannels/r.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * `+a+` + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yR = 0; yR < `+r.outHeight+`; yR++) {
            int xR = wR + yR * `+n+" - "+t+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+r.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+o+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `},gf=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var n=r.filterHeight,e=r.filterWidth,t=r.strideHeight,o=r.strideWidth,a=n-1-r.padInfo.top,i=e-1-r.padInfo.left,s=r.outChannels/r.inChannels;this.userCode=`
      const ivec2 pads = ivec2(`+a+", "+i+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < `+n+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+t+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+n+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < `+s+`; dm++) {
              int d2 = d1 * `+s+` + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `},Hi=function(r,n,e,t){n===void 0&&(n=!1),e===void 0&&(e=null),t===void 0&&(t=!1),this.variableNames=["x","W"],this.outputShape=r.outShape;var o=r.padInfo.top,a=r.padInfo.left,i=r.strideHeight,s=r.strideWidth,u=r.dilationHeight,c=r.dilationWidth,l=r.filterHeight,h=r.filterWidth,f=4*Math.floor(r.inChannels/4),p=r.inChannels%4,d=r.dataFormat==="channelsLast",m=d?1:2,v=d?2:3,g=d?3:1,x="",b="";e&&(x=t?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,b="result = activation(result);");var y=n?"result += getBiasAtOutCoords();":"";n&&this.variableNames.push("bias"),t&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+x+`

      const ivec2 strides = ivec2(`+i+", "+s+`);
      const ivec2 pads = ivec2(`+o+", "+a+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[`+g+`];

        ivec2 xRCCorner =
            ivec2(coords[`+m+"], coords["+v+`]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+l+`; wR++) {
          int xR = xRCorner + wR * `+u+`;

          if (xR < 0 || xR >= `+r.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+h+`; wC++) {
            int xC = xCCorner + wC * `+c+`;

            if (xC < 0 || xC >= `+r.inWidth+`) {
              continue;
            }

            for (int d1 = 0; d1 < `+f+`; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (`+d+`) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (`+(p===1)+`) {

              if (`+d+`) {
                dotProd +=
                    getX(batch, xR, xC, `+f+`) *
                    getW(wR, wC, `+f+`, d2);
              } else {
                dotProd +=
                    getX(batch, `+f+`, xR, xC) *
                    getW(wR, wC, `+f+`, d2);
              }

            } else if (`+(p===2)+`) {
              vec2 wValues = vec2(
                getW(wR, wC, `+f+`, d2),
                getW(wR, wC, `+f+` + 1, d2)
              );

              if (`+d+`) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, `+f+`),
                  getX(batch, xR, xC, `+f+` + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, `+f+`, xR, xC),
                  getX(batch, `+f+` + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (`+(p===3)+`) {
              vec3 wValues = vec3(
                getW(wR, wC, `+f+`, d2),
                getW(wR, wC, `+f+` + 1, d2),
                getW(wR, wC, `+f+` + 2, d2)
              );

              if (`+d+`) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, `+f+`),
                  getX(batch, xR, xC, `+f+` + 1),
                  getX(batch, xR, xC, `+f+` + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, `+f+`, xR, xC),
                  getX(batch, `+f+` + 1, xR, xC),
                  getX(batch, `+f+` + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        `+y+`
        `+b+`
        setOutput(result);
      }
    `},yf=function(r){this.variableNames=["x","W"],this.outputShape=r.outShape;var n=r.padInfo.front,e=r.padInfo.top,t=r.padInfo.left,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.filterDepth,h=r.filterHeight,f=r.filterWidth,p=4*Math.floor(r.inChannels/4),d=r.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(`+o+", "+a+", "+i+`);
      const ivec3 pads = ivec3(`+n+", "+e+", "+t+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < `+l+`; wF++) {
          int xF = xFCorner + wF * `+s+`;

          if (xF < 0 || xF >= `+r.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+h+`; wR++) {
            int xR = xRCorner + wR * `+u+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+f+`; wC++) {
              int xC = xCCorner + wC * `+c+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              for (int d1 = 0; d1 < `+p+`; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (`+(d===1)+`) {
                dotProd +=
                  getX(batch, xF, xR, xC, `+p+`) *
                  getW(wF, wR, wC, `+p+`, d2);
              } else if (`+(d===2)+`) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, `+p+`),
                  getX(batch, xF, xR, xC, `+p+` + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, `+p+`, d2),
                  getW(wF, wR, wC, `+p+` + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (`+(d===3)+`) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, `+p+`),
                  getX(batch, xF, xR, xC, `+p+` + 1),
                  getX(batch, xF, xR, xC, `+p+` + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, `+p+`, d2),
                  getW(wF, wR, wC, `+p+` + 1, d2),
                  getW(wF, wR, wC, `+p+` + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},ji=function(r,n,e,t){n===void 0&&(n=!1),e===void 0&&(e=null),t===void 0&&(t=!1),this.variableNames=["x","W"],this.outputShape=r.outShape;var o=r.inHeight,a=r.inWidth,i=r.padInfo.top,s=r.padInfo.left,u=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,h=r.dilationWidth,f=r.filterHeight,p=r.filterWidth,d=r.outChannels/r.inChannels,m="",v="";e&&(m=t?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,v="result = activation(result);");var g=n?"result += getBiasAtOutCoords();":"";n&&this.variableNames.push("bias"),t&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+m+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / `+d+`;
        int q = d2 - d1 * `+d+`;

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < `+f+`; wR++) {
          int xR = xRCorner + wR * `+l+`;

          if (xR < 0 || xR >= `+o+`) {
            continue;
          }

          for (int wC = 0; wC < `+p+`; wC++) {
            int xC = xCCorner + wC * `+h+`;

            if (xC < 0 || xC >= `+a+`) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        `+g+`
        `+v+`
        setOutput(result);
      }
    `},qi=function(r,n,e,t){n===void 0&&(n=!1),e===void 0&&(e=null),t===void 0&&(t=!1),this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r.outShape;for(var o=r.inHeight,a=r.inWidth,i=r.padInfo.top,s=r.padInfo.left,u=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,h=r.dilationWidth,f=r.filterHeight,p=r.filterWidth,d=p,m="int xR; int xC; int xCOffset;",v=0;v<f;v++)for(var g=0;g<p;g++)m+=`
          vec4 xTexelR`+v+"C"+2*g+` = vec4(0.);
          vec4 wR`+v+"C"+g+` = vec4(0.);
          vec4 xR`+v+"C"+g+" = vec4(0.);";for(v=0;v<f;v++)for(var x=0;x<d;x++){if(m+=`
          xR = xRCorner + `+v*l+`;
          xC = xCCorner + `+(g=2*x)*h+`;
        `,c===1){if(g<p&&(m+=s%2==1?`
                xCOffset = xC + 1;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+a+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+a+`) {
                    xTexelR`+v+"C"+g+`.zw = vec2(0.);
                  }
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                xCOffset = xC + 1 - 2;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+a+`) {
                  vec4 previous = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+a+`) {
                    previous.zw = vec2(0.);
                  }

                  xR`+v+"C"+g+" = vec4(previous.zw, xTexelR"+v+"C"+g+`.xy);
                } else {
                  xR`+v+"C"+g+" = vec4(0, 0, xTexelR"+v+"C"+g+`.xy);
                }
              `:`
                if(xR >= 0 && xR < `+o+" && xC >= 0 && xC < "+a+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                xR`+v+"C"+g+" = xTexelR"+v+"C"+g+`;
              `,g+1<p)){var b=s%2==0?Fs(h):h;h%2==0&&s%2==1||h%2!=0&&s%2!=1?(m+=`
                  xCOffset = xC + `+s%2+" + "+b+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+a+`) {
                    xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                  }
                `,h>1&&(m+=`
                    xCOffset -= 2;
                    if(xR >= 0 && xR < `+o+` &&
                      xCOffset >= 0 && xCOffset < `+a+`) {
                      xTexelR`+v+"C"+g+` = getX(batch, xR, xCOffset, d1);
                    } else {
                      xTexelR`+v+"C"+g+` = vec4(0.);
                    }
                  `),m+=`
                  xR`+v+"C"+(g+1)+` = vec4(
                    xTexelR`+v+"C"+g+".zw, xTexelR"+v+"C"+(g+2)+`.xy);
                `):m+=`
                  xCOffset = xC + `+b+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+a+`) {
                    xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                  }

                  xR`+v+"C"+(g+1)+" = xTexelR"+v+"C"+(g+2)+`;
                `}}else g<p&&(m+=`
              if(xR >= 0 && xR < `+o+`) {
            `,s%2==1?(m+=`
                xCOffset = xC + 1 - `+c+`;
                if(xCOffset >= 0 && xCOffset < `+a+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                if(xC + 1 >= 0 && xC + 1 < `+a+`) {
                  xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xC + 1, d1);
                } else {
                  xTexelR`+v+"C"+(g+2)+` = vec4(0.);
                }

                xR`+v+"C"+g+` = vec4(
                  xTexelR`+v+"C"+g+".zw, xTexelR"+v+"C"+(g+2)+`.zw);
              `,g+1<p&&(m+=`
                  vec4 final = vec4(0.);
                  xCOffset = xC + 1 + `+c+`;
                  if(xCOffset >= 0 && xCOffset < `+a+`) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xR`+v+"C"+(g+1)+" = vec4(xTexelR"+v+"C"+(g+2)+`.xy, final.xy);
                `)):(m+=`
                if(xC >= 0 && xC < `+a+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                xCOffset = xC + `+c+`;
                if(xCOffset >= 0 && xCOffset < `+a+`) {
                  xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+v+"C"+(g+2)+` = vec4(0.);
                }

                xR`+v+"C"+g+` = vec4(
                  xTexelR`+v+"C"+g+".xy, xTexelR"+v+"C"+(g+2)+`.xy);
              `,g+1<p&&(m+=`
                  xR`+v+"C"+(g+1)+` = vec4(
                    xTexelR`+v+"C"+g+".zw, xTexelR"+v+"C"+(g+2)+`.zw);
                `)),m+="}");g<p&&(m+=`
            vec4 wTexelR`+v+"C"+g+" = getW("+v+", "+g+`, d1, q);
            wR`+v+"C"+g+" = vec4(wTexelR"+v+"C"+g+".xz, wTexelR"+v+"C"+g+`.xz);
          `,g+1<p&&(m+=`
              vec4 wTexelR`+v+"C"+(g+1)+" = getW("+v+", "+(g+1)+`, d1, q);
              wR`+v+"C"+(g+1)+` =
                vec4(wTexelR`+v+"C"+(g+1)+".xz, wTexelR"+v+"C"+(g+1)+".xz);"))}for(v=0;v<f;v++)for(g=0;g<p;g++)m+="dotProd += xR"+v+"C"+g+" * wR"+v+"C"+g+";";var y="",w="";e&&(y=t?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`vec4 activation(vec4 x) {
          `+e+`
        }`,w="result = activation(result);");var C=n?"result += getBiasAtOutCoords();":"";n&&this.variableNames.push("bias"),t&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+y+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {

        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2;
        int q = 0;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        vec4 dotProd = vec4(0.);

        `+m+`

        vec4 result = dotProd;
        `+C+`
        `+w+`
        setOutput(result);
      }
    `},xf=function(r,n,e,t,o){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];var a=r[0],i=r[1],s=r[2],u=r[3],c=n[0],l=e[0],h=e[1];this.outputShape=[c,l,h,u];var f=t==="bilinear"?1:0,p=[i-1+".0",s-1+".0"],d=p[0],m=p[1],v=l>1?[""+(i-1)/(l-1),"(y2-y1) * height_ratio","y1*"+d+" + float(y)*(height_scale)"]:["0.0","0.0","0.5 * (y1+y2) * "+d],g=v[0],x=v[1],b=v[2],y=h>1?[""+(s-1)/(h-1),"(x2-x1) * width_ratio","x1*"+m+" + float(x)*(width_scale)"]:["0.0","0.0","0.5 * (x1+x2) * "+m],w=y[0],C=y[1],S=y[2];this.userCode=`
      const float height_ratio = float(`+g+`);
      const float width_ratio = float(`+w+`);
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= `+a+`) {
          return;
        }

        float height_scale = `+x+`;
        float width_scale = `+C+`;

        float in_y = `+b+`;
        if( in_y < 0.0 || in_y > `+d+` ) {
          setOutput(float(`+o+`));
          return;
        }
        float in_x = `+S+`;
        if( in_x < 0.0 || in_x > `+m+` ) {
          setOutput(float(`+o+`));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(`+f+` == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `},bf=function(r,n,e){this.variableNames=["x"],this.outputShape=r;var t=r.length,o=r[r.length-1],a=e?"<":">";this.userCode=`
      int getIndex(int i) {
        `+(e?"return "+o+" -i - 1;":"return i;")+`
      }

      void main() {
        `+be(t)+` coords = getOutputCoords();
        int end = `+Ki(t,"coords")+`;
        float val = 0.0;
        for (int i = `+o+` - 1; i >= 0; i -= 1) {
          int idx = getIndex(i);
          if (idx `+a+` end) {
            continue;
          }
          if (idx == end && `+n+`) {
            continue;
          }
          `+Ki(t,"coords")+` = idx;
          val += getX(`+function(i,s){if(i===1)return""+s;if(i===2)return s+".x, "+s+".y";if(i===3)return s+".x, "+s+".y, "+s+".z";if(i===4)return s+".x, "+s+".y, "+s+".z, "+s+".w";throw Error("Cumulative sum for rank "+i+" is not yet supported")}(t,"coords")+`);
        }
        setOutput(val);
      }
    `};function Ki(r,n){if(r===1)return""+n;if(r===2)return n+".y";if(r===3)return n+".z";if(r===4)return n+".w";throw Error("Cumulative sum for rank "+r+" is not yet supported")}var wf=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=ar.DENSE;var n=er(r),e=Ye();this.outputShape=r,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+vn(["r","c","d"],r)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+n[0]+", "+n[1]+`));
        int index = 4 * (resTexRC.x * `+n[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        `+e.output+` = result;
      }
    `},Cf=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=ar.DENSE;var n=er(r),e=Ye();this.outputShape=r,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+vn(["r","c","d"],r)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+n[0]+", "+n[1]+`));
        int index = 4 * (resTexRC.x * `+n[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        `+e.output+` = result;
      }
    `},_f=function(){function r(n,e,t){this.variableNames=["x"],this.outputShape=[],this.outputShape=n,this.blockSize=e,this.dataFormat=t,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = `+this.getHeightCoordString()+`;
      int w = `+this.getWidthCoordString()+`;
      int d = `+this.getDepthCoordString()+`;

      int in_h = h / `+e+`;
      int offset_h = imod(h, `+e+`);
      int in_w = w / `+e+`;
      int offset_w = imod(w, `+e+`);
      int offset_d = (offset_h * `+e+` + offset_w) *
        `+this.getOutputDepthSize()+`;
      int in_d = d + offset_d;

      float result = `+this.getInputSamplingString()+`;
      setOutput(result);
    }
  `}return r.prototype.getHeightCoordString=function(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"},r.prototype.getWidthCoordString=function(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"},r.prototype.getDepthCoordString=function(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"},r.prototype.getOutputDepthSize=function(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]},r.prototype.getInputSamplingString=function(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"},r}(),Ef=function(r){this.variableNames=["X"],this.outputShape=[r,r],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `},Rf=function(r){this.variableNames=["A"],this.outTexUsage=st.DOWNLOAD;var n=Ye();this.outputShape=r,this.userCode=`
      `+fu+`

      void main() {
        float x = getAAtOutCoords();
        `+n.output+` = encode_float(x);
      }
    `},If=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=st.DOWNLOAD;var n=Ye();this.outputShape=r,this.userCode=`
      `+fu+`

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        `+n.output+` = encode_float(x);
      }
    `},kf=function(r,n,e){e===void 0&&(e=!1),this.variableNames=["A"];var t=Ye(),o=n[0],a=n[1];this.outputShape=r;var i="result";e&&(i="floor(result * 255. + 0.5)"),this.userCode=`
      `+Oa(r)+`

      void main() {
        ivec3 coords = getOutputCoords();

        int flatIndex = getFlatIndex(coords);
        int offset = imod(flatIndex, 4);

        flatIndex = idiv(flatIndex, 4, 1.);
        
        int r = flatIndex / `+a+`;
        int c = imod(flatIndex, `+a+`);
        vec2 uv = (vec2(c, r) + halfCR) / vec2(`+a+".0, "+o+`.0);
        vec4 values = `+t.texture2D+`(A, uv);

        float result;

        if(offset == 0) {
          result = values[0];
        } else if(offset == 1) {
          result = values[1];
        } else if(offset == 2) {
          result = values[2];
        } else {
          result = values[3];
        }

        `+t.output+" = vec4("+i+`, 0., 0., 0.);
      }
    `},Sf=function(r,n,e){e===void 0&&(e=!1),this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var t=Ye(),o=n[0],a=n[1];this.outputShape=r;var i="",s="result";e&&(s="floor(result * 255. + 0.5)");for(var u=0;u<=1;u++)for(var c=0;c<=1;c++){var l=2*u+c;i+=`
          localCoords = coords;
          if(localCoords[2] + `+c+" < "+r[2]+`) {
            localCoords[2] += `+c+`;
            if(localCoords[1] + `+u+" < "+r[1]+`) {
              localCoords[1] += `+u+`;

              flatIndex = getFlatIndex(localCoords);
              offset = imod(flatIndex, 4);

              flatIndex = idiv(flatIndex, 4, 1.);

              r = flatIndex / `+a+`;
              c = imod(flatIndex, `+a+`);
              uv = (vec2(c, r) + halfCR) / vec2(`+a+".0, "+o+`.0);
              values = `+t.texture2D+`(A, uv);

              if(offset == 0) {
                result[`+l+`] = values[0];
              } else if(offset == 1) {
                result[`+l+`] = values[1];
              } else if(offset == 2) {
                result[`+l+`] = values[2];
              } else {
                result[`+l+`] = values[3];
              }
            }
          }
        `}this.userCode=`
      `+Oa(r)+`

      void main() {
        ivec3 coords = getOutputCoords();

        vec4 result = vec4(0.);
        int flatIndex, r, c, offset;
        ivec3 localCoords;
        vec2 uv;
        vec4 values;

        `+i+`

        `+t.output+" = "+s+`;
      }
    `},Df="return real * expR - imag * expI;",Af="return real * expI + imag * expR;",Xi=function(r,n,e){this.variableNames=["real","imag"];var t=n[1];this.outputShape=n;var o=e?"2.0 * "+Math.PI:"-2.0 * "+Math.PI,a=e?t+".0":"1.0";this.userCode=`
      const float exponentMultiplier = `+o+`;

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        `+r+`
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(`+t+`);
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < `+t+`; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / `+a+`;
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `},Tf=function(){function r(n,e){this.outputShape=[],this.variableNames=["x"],this.outputShape=n,this.userCode=`
      uniform float value;
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}return r.prototype.getCustomSetupFunc=function(n){var e=this;return function(t,o){e.valueLoc==null&&(e.valueLoc=t.getUniformLocationNoThrow(o,"value")),t.gl.uniform1f(e.valueLoc,n)}},r}(),Nf=function(r,n,e){this.variableNames=["A","indices"];var t=r.slice();t[e]=n,this.outputShape=t,this.rank=t.length;var o=be(this.rank),a=function(i,s){var u=i.length;if(u>4)throw Error("Gather for rank "+u+" is not yet supported");if(u===1)return"int(getIndices(resRC))";for(var c=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],h=0;h<i.length;h++)h===s?l.push("int(getIndices("+c[h]+"))"):l.push(""+c[h]);return l.join()}(r,e);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+a+`));
      }
    `},Ff=function(r,n,e){this.sliceDim=r,this.strides=n,this.variableNames=["x","indices"],this.outputShape=e;var t=be(n.length),o=be(e.length),a=this.sliceDim>1?"strides[j]":"strides";this.userCode=`
        `+t+" strides = "+t+"("+this.strides+`);
         void main() {
          `+o+` coords = getOutputCoords();
          int flattenIndex = 0;
          for (int j = 0; j < `+this.sliceDim+`; j++) {
            int index = round(getIndices(coords[0], j));
            flattenIndex += index * `+a+`;
          }
          setOutput(getX(flattenIndex, coords[1]));
        }
      `};function Mf(r,n){var e=Ye();return Sl(r,n,e.version+`
    precision highp float;
    `+e.attribute+` vec3 clipSpacePos;
    `+e.attribute+` vec2 uv;
    `+e.varyingVs+` vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`)}function Pf(r,n){return Fl(r,n,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function Of(r,n){return Ml(r,n,new Uint16Array([0,1,2,2,1,3]))}function vr(r,n,e,t,o,a,i){Ol(e,t);var s=Pl(r,n),u=r.TEXTURE_2D;return Z(r,n,function(){return r.bindTexture(u,s)}),Z(r,n,function(){return r.texParameteri(u,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE)}),Z(r,n,function(){return r.texParameteri(u,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}),Z(r,n,function(){return r.texParameteri(u,r.TEXTURE_MIN_FILTER,r.NEAREST)}),Z(r,n,function(){return r.texParameteri(u,r.TEXTURE_MAG_FILTER,r.NEAREST)}),Z(r,n,function(){return r.texImage2D(u,0,o,e,t,0,a,i,null)}),Z(r,n,function(){return r.bindTexture(r.TEXTURE_2D,null)}),s}function Bf(r,n,e,t,o){var a=io(e,t);return vr(r,n,a[0],a[1],o.internalFormatFloat,o.textureFormatFloat,r.FLOAT)}function Lf(r,n,e,t,o){var a=io(e,t);return vr(r,n,a[0],a[1],o.internalFormatHalfFloat,o.textureFormatFloat,o.textureTypeHalfFloat)}function Wf(r,n,e,t,o){var a=io(e,t);return vr(r,n,a[0],a[1],r.RGBA,r.RGBA,r.UNSIGNED_BYTE)}function Vf(r,n,e,t,o){var a=dr(e,t);return vr(r,n,a[0],a[1],o.internalFormatPackedFloat,r.RGBA,r.FLOAT)}function Uf(r,n,e,t,o){var a=dr(e,t);return vr(r,n,a[0],a[1],o.internalFormatPackedHalfFloat,r.RGBA,o.textureTypeHalfFloat)}function zf(r,n,e,t){return Z(r,n,function(){return r.bindBuffer(r.ARRAY_BUFFER,t)}),Pi(r,n,e,"clipSpacePos",t,3,20,0)&&Pi(r,n,e,"uv",t,2,20,12)}function Gf(r,n,e,t,o,a,i){var s,u,c;Z(r,n,function(){return r.bindTexture(r.TEXTURE_2D,e)}),a instanceof Uint8Array?(s=new Uint8Array(t*o*4),u=r.UNSIGNED_BYTE,c=r.RGBA):(s=new Float32Array(t*o*4),u=r.FLOAT,c=i.internalFormatPackedFloat),s.set(a),Z(r,n,function(){return r.texImage2D(r.TEXTURE_2D,0,c,t,o,0,r.RGBA,u,s)}),Z(r,n,function(){return r.bindTexture(r.TEXTURE_2D,null)})}function Hf(r,n,e,t){Z(r,n,function(){return r.bindTexture(r.TEXTURE_2D,e)}),t.data instanceof Uint8Array?Z(r,n,function(){return r.texImage2D(r.TEXTURE_2D,0,r.RGBA,t.width,t.height,0,r.RGBA,r.UNSIGNED_BYTE,t.data)}):Z(r,n,function(){return r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,t)}),Z(r,n,function(){return r.bindTexture(r.TEXTURE_2D,null)})}function jf(r,n,e,t,o){var a=r.createBuffer();Z(r,n,function(){return r.bindBuffer(r.PIXEL_PACK_BUFFER,a)});var i=16*e*t;return Z(r,n,function(){return r.bufferData(r.PIXEL_PACK_BUFFER,i,r.STREAM_READ)}),Z(r,n,function(){return r.readPixels(0,0,t,e,r.RGBA,r.FLOAT,0)}),Z(r,n,function(){return r.bindBuffer(r.PIXEL_PACK_BUFFER,null)}),a}function qf(r,n,e){var t=r,o=new Float32Array(e);return t.bindBuffer(t.PIXEL_PACK_BUFFER,n),t.getBufferSubData(t.PIXEL_PACK_BUFFER,0,o),t.bindBuffer(t.PIXEL_PACK_BUFFER,null),o}function Kf(r,n,e,t,o){var a=io(e,t),i=a[0],s=a[1],u=new Uint8Array(e*t*4);return Z(r,n,function(){return r.readPixels(0,0,i,s,o.downloadTextureFormat,r.UNSIGNED_BYTE,u)}),new Float32Array(u.buffer)}function Xf(r,n,e,t,o,a,i,s){var u=r,c=new Float32Array(function(l,h){var f=dr(l,h);return f[0]*f[1]*4}(a,i));return u.bindBuffer(u.PIXEL_PACK_BUFFER,n),u.getBufferSubData(u.PIXEL_PACK_BUFFER,0,c),u.bindBuffer(u.PIXEL_PACK_BUFFER,null),c}function Yf(r,n,e,t){var o=new Float32Array(e*t*4);return Z(r,n,function(){return r.readPixels(0,0,t,e,r.RGBA,r.FLOAT,o)}),o}var $f=function(){function r(n){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];var e=P().getNumber("WEBGL_VERSION");n!=null?(this.gl=n,_l(e,n)):this.gl=Pt(e);var t="WEBGL_color_buffer_float";if(P().getNumber("WEBGL_VERSION")===1){if(this.textureFloatExtension=_r(this.gl,this.debug,"OES_texture_float"),dt(this.gl,"OES_texture_half_float"))this.textureHalfFloatExtension=_r(this.gl,this.debug,"OES_texture_half_float");else if(P().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(t),dt(this.gl,"EXT_color_buffer_half_float"))this.colorBufferHalfFloatExtension=_r(this.gl,this.debug,"EXT_color_buffer_half_float");else if(P().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(t="EXT_color_buffer_float",dt(this.gl,t))this.colorBufferFloatExtension=this.gl.getExtension(t);else{if(!dt(this.gl,"EXT_color_buffer_half_float"))throw new Error("GL context does not support color renderable floats");this.colorBufferHalfFloatExtension=this.gl.getExtension("EXT_color_buffer_half_float")}this.vertexBuffer=Pf(this.gl,this.debug),this.indexBuffer=Of(this.gl,this.debug),this.framebuffer=Bl(this.gl,this.debug),this.textureConfig=Ia(this.gl,this.textureHalfFloatExtension)}return Object.defineProperty(r.prototype,"debug",{get:function(){return P().getBool("DEBUG")},enumerable:!0,configurable:!0}),r.prototype.dispose=function(){var n=this;if(!this.disposed){this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");var e=this.gl;Z(e,this.debug,function(){return e.finish()}),Z(e,this.debug,function(){return e.bindFramebuffer(e.FRAMEBUFFER,null)}),Z(e,this.debug,function(){return e.deleteFramebuffer(n.framebuffer)}),Z(e,this.debug,function(){return e.bindBuffer(e.ARRAY_BUFFER,null)}),Z(e,this.debug,function(){return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)}),Z(e,this.debug,function(){return e.deleteBuffer(n.indexBuffer)}),this.disposed=!0}},r.prototype.createFloat32MatrixTexture=function(n,e){return this.throwIfDisposed(),Bf(this.gl,this.debug,n,e,this.textureConfig)},r.prototype.createFloat16MatrixTexture=function(n,e){return this.throwIfDisposed(),Lf(this.gl,this.debug,n,e,this.textureConfig)},r.prototype.createUnsignedBytesMatrixTexture=function(n,e){return this.throwIfDisposed(),Wf(this.gl,this.debug,n,e,this.textureConfig)},r.prototype.uploadPixelDataToTexture=function(n,e){this.throwIfDisposed(),Hf(this.gl,this.debug,n,e)},r.prototype.uploadDenseMatrixToTexture=function(n,e,t,o){this.throwIfDisposed(),Gf(this.gl,this.debug,n,e,t,o,this.textureConfig)},r.prototype.createFloat16PackedMatrixTexture=function(n,e){return this.throwIfDisposed(),Uf(this.gl,this.debug,n,e,this.textureConfig)},r.prototype.createPackedMatrixTexture=function(n,e){return this.throwIfDisposed(),Vf(this.gl,this.debug,n,e,this.textureConfig)},r.prototype.deleteMatrixTexture=function(n){var e=this;this.throwIfDisposed(),this.outputTexture===n&&(Oi(this.gl,this.debug,this.framebuffer),this.outputTexture=null),Z(this.gl,this.debug,function(){return e.gl.deleteTexture(n)})},r.prototype.downloadByteEncodedFloatMatrixFromOutputTexture=function(n,e,t){var o=this;return this.downloadMatrixDriver(n,function(){return Kf(o.gl,o.debug,e,t,o.textureConfig)})},r.prototype.downloadPackedMatrixFromBuffer=function(n,e,t,o,a,i){return Xf(this.gl,n,0,0,0,a,i,this.textureConfig)},r.prototype.downloadFloat32MatrixFromBuffer=function(n,e){return qf(this.gl,n,e)},r.prototype.createBufferFromTexture=function(n,e,t){this.bindTextureToFrameBuffer(n);var o=jf(this.gl,this.debug,e,t,this.textureConfig);return this.unbindTextureToFrameBuffer(),o},r.prototype.createAndWaitForFence=function(){var n=this.createFence(this.gl);return this.pollFence(n)},r.prototype.createFence=function(n){var e,t,o=this;if(P().getBool("WEBGL_FENCE_API_ENABLED")){var a=n,i=a.fenceSync(a.SYNC_GPU_COMMANDS_COMPLETE,0);n.flush(),t=function(){var s=a.clientWaitSync(i,0,0);return s===a.ALREADY_SIGNALED||s===a.CONDITION_SATISFIED},e=i}else P().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(e=this.beginQuery(),this.endQuery(),t=function(){return o.isQueryAvailable(e,P().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}):t=function(){return!0};return{query:e,isFencePassed:t}},r.prototype.downloadMatrixFromPackedTexture=function(n,e,t){var o=this;return this.downloadMatrixDriver(n,function(){return Yf(o.gl,o.debug,e,t)})},r.prototype.createProgram=function(n){this.throwIfDisposed();var e=this.gl,t=Dl(e,this.debug,n),o=Mf(e,this.debug),a=Tl(e,this.debug);return Z(e,this.debug,function(){return e.attachShader(a,o)}),Z(e,this.debug,function(){return e.attachShader(a,t)}),Nl(e,this.debug,a),this.debug&&Mo(e,this.debug,a),this.vertexAttrsAreBound||(this.setProgram(a),this.vertexAttrsAreBound=zf(e,this.debug,this.program,this.vertexBuffer)),a},r.prototype.deleteProgram=function(n){var e=this;this.throwIfDisposed(),n===this.program&&(this.program=null),n!=null&&Z(this.gl,this.debug,function(){return e.gl.deleteProgram(n)})},r.prototype.setProgram=function(n){var e=this;this.throwIfDisposed(),this.program=n,this.program!=null&&this.debug&&Mo(this.gl,this.debug,this.program),Z(this.gl,this.debug,function(){return e.gl.useProgram(n)})},r.prototype.getUniformLocation=function(n,e,t){return t===void 0&&(t=!0),this.throwIfDisposed(),t?Wl(this.gl,this.debug,n,e):Vl(this.gl,n,e)},r.prototype.getAttributeLocation=function(n,e){var t=this;return this.throwIfDisposed(),Z(this.gl,this.debug,function(){return t.gl.getAttribLocation(n,e)})},r.prototype.getUniformLocationNoThrow=function(n,e){return this.throwIfDisposed(),this.gl.getUniformLocation(n,e)},r.prototype.setInputMatrixTexture=function(n,e,t){this.throwIfDisposed(),this.throwIfNoProgram(),Ul(this.gl,this.debug,this.program,n,e,t)},r.prototype.setOutputMatrixTexture=function(n,e,t){this.setOutputMatrixTextureDriver(n,t,e)},r.prototype.setOutputPackedMatrixTexture=function(n,e,t){this.throwIfDisposed();var o=dr(e,t),a=o[0],i=o[1];this.setOutputMatrixTextureDriver(n,a,i)},r.prototype.setOutputMatrixWriteRegion=function(n,e,t,o){this.setOutputMatrixWriteRegionDriver(t,n,o,e)},r.prototype.setOutputPackedMatrixWriteRegion=function(n,e,t,o){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")},r.prototype.debugValidate=function(){this.program!=null&&Mo(this.gl,this.debug,this.program),Er(this.gl)},r.prototype.executeProgram=function(){this.throwIfDisposed(),this.throwIfNoProgram();var n=this.gl;this.debug&&this.debugValidate(),Z(n,this.debug,function(){return n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0)})},r.prototype.blockUntilAllProgramsCompleted=function(){var n=this;this.throwIfDisposed(),Z(this.gl,this.debug,function(){return n.gl.finish()})},r.prototype.getQueryTimerExtension=function(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=_r(this.gl,this.debug,P().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension},r.prototype.getQueryTimerExtensionWebGL2=function(){return this.getQueryTimerExtension()},r.prototype.getQueryTimerExtensionWebGL1=function(){return this.getQueryTimerExtension()},r.prototype.beginQuery=function(){if(P().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){var n=this.gl,e=this.getQueryTimerExtensionWebGL2(),t=n.createQuery();return n.beginQuery(e.TIME_ELAPSED_EXT,t),t}var o=this.getQueryTimerExtensionWebGL1(),a=o.createQueryEXT();return o.beginQueryEXT(o.TIME_ELAPSED_EXT,a),a},r.prototype.endQuery=function(){if(P().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")!==2){var n=this.getQueryTimerExtensionWebGL1();n.endQueryEXT(n.TIME_ELAPSED_EXT)}else{var e=this.gl,t=this.getQueryTimerExtensionWebGL2();e.endQuery(t.TIME_ELAPSED_EXT)}},r.prototype.waitForQueryAndGetTime=function(n){return X(this,void 0,void 0,function(){var e=this;return Y(this,function(t){switch(t.label){case 0:return[4,Di(function(){return e.disposed||e.isQueryAvailable(n,P().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))})];case 1:return t.sent(),[2,this.getQueryTime(n,P().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))]}})})},r.prototype.getQueryTime=function(n,e){if(e===0)return null;if(e===2){var t=this.gl;return t.getQueryParameter(n,t.QUERY_RESULT)/1e6}var o=this.getQueryTimerExtensionWebGL1();return o.getQueryObjectEXT(n,o.QUERY_RESULT_EXT)/1e6},r.prototype.isQueryAvailable=function(n,e){if(e===0)return!0;if(e===2){var t=this.gl,o=this.getQueryTimerExtensionWebGL2(),a=t.getQueryParameter(n,t.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),a&&!this.disjoint}return a=(o=this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(n,o.QUERY_RESULT_AVAILABLE_EXT),this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),a&&!this.disjoint},r.prototype.pollFence=function(n){var e=this;return new Promise(function(t){e.addItemToPoll(function(){return n.isFencePassed()},function(){return t()})})},r.prototype.pollItems=function(){for(var n=function(t){for(var o=0;o<t.length&&t[o]();++o);return o-1}(this.itemsToPoll.map(function(t){return t.isDoneFn})),e=0;e<=n;++e)(0,this.itemsToPoll[e].resolveFn)();this.itemsToPoll=this.itemsToPoll.slice(n+1)},r.prototype.addItemToPoll=function(n,e){var t=this;this.itemsToPoll.push({isDoneFn:n,resolveFn:e}),this.itemsToPoll.length>1||Di(function(){return t.pollItems(),t.itemsToPoll.length===0})},r.prototype.bindTextureToFrameBuffer=function(n){this.throwIfDisposed(),Po(this.gl,this.debug,n,this.framebuffer),this.debug&&Er(this.gl)},r.prototype.unbindTextureToFrameBuffer=function(){this.outputTexture!=null?(Po(this.gl,this.debug,this.outputTexture,this.framebuffer),this.debug&&Er(this.gl)):Oi(this.gl,this.debug,this.framebuffer)},r.prototype.downloadMatrixDriver=function(n,e){this.bindTextureToFrameBuffer(n);var t=e();return this.unbindTextureToFrameBuffer(),t},r.prototype.setOutputMatrixTextureDriver=function(n,e,t){this.throwIfDisposed();var o=this.gl;Po(o,this.debug,n,this.framebuffer),this.debug&&Er(o),this.outputTexture=n,Z(o,this.debug,function(){return o.viewport(0,0,e,t)}),Z(o,this.debug,function(){return o.scissor(0,0,e,t)})},r.prototype.setOutputMatrixWriteRegionDriver=function(n,e,t,o){var a=this;this.throwIfDisposed(),Z(this.gl,this.debug,function(){return a.gl.scissor(n,e,t,o)})},r.prototype.throwIfDisposed=function(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")},r.prototype.throwIfNoProgram=function(){if(this.program==null)throw new Error("No GPU program is currently set.")},r}();function Yi(r,n){if(r.length!==n.length)throw Error("Binary was compiled with "+r.length+" inputs, but was executed with "+n.length+" inputs");r.forEach(function(e,t){var o=e.logicalShape,a=n[t],i=a.shape;if(!We(o,i))throw Error("Binary was compiled with different shapes than the current args. Shapes "+o+" and "+i+" must match");if(!e.isUniform||!a.isUniform){var s=e.texShape,u=a.isUniform?null:a.texData.texShape;if(!We(s,u))throw Error("Binary was compiled with different texture shapes than the current args. Shape "+s+" and "+u+" must match")}})}var Jf=function(r,n,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r;for(var t=e.filterWidth,o=e.inChannels,a=e.strideWidth,i=e.strideHeight,s=e.padInfo,u=e.outWidth,c=e.dilationWidth,l=e.dilationHeight,h=e.dataFormat,f=s.left,p=s.top,d=o*t,m=Ye(),v=h==="channelsLast",g=v?0:1,x=v?1:2,b="",y=0;y<=1;y++)for(var w=0;w<=1;w++)b+=`
          blockIndex = rc.y + `+w+`;
          pos = rc.x + `+y+`;

          if(blockIndex < `+r[1]+" && pos < "+r[0]+`) {
            offsetY = int(blockIndex / (`+u+")) * "+i+" - "+p+`;
            d0 = offsetY + `+l+" * (pos / "+d+`);

            if(d0 < `+n[g]+` && d0 >= 0) {

              offsetX = int(mod(float(blockIndex), `+u+".) * "+a+". - "+f+`.);
              d1 = offsetX + `+c+" * (int(mod(float(pos), "+d+".) / "+o+`.));

              if(d1 < `+n[x]+` && d1 >= 0) {

                ch = int(mod(float(pos), `+o+`.));

                if (`+v+`) {
                  innerDims = vec2(d1, ch);
                  result[`+(2*y+w)+`] = getChannel(
                    getA(d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[`+(2*y+w)+`] = getChannel(
                    getA(ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec2 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        `+b+`

        `+m.output+` = result;
      }
    `},Qf=function(r,n,e,t,o){this.variableNames=["x"],this.outputShape=[];var a,i=n,s=r[3]-1;this.outputShape=r;var u="float("+e+") + float("+t+") * sum";a=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -`+i+"; j <= "+i+`; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  `+s+`) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * `+a+`;
        setOutput(val);
      }
    `},Zf=function(r,n,e,t,o){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=r,this.depth=r[3],this.depthRadius=n,this.bias=e,this.alpha=t,this.beta=o,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < `+this.depth+`; ++d) {
          int depthBegin = int(max(0.0, float(d - `+n+`)));
          int depthEnd = int(min(float(`+this.depth+`),
              float(d + `+n+` + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = `+this.depth+`;

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(`+t+") * norm + float("+e+`);

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(`+t+`)
                * float(`+o+`)
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * `+o+`);
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `},ep=function(r,n,e,t,o){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;var a,i=n,s=r[3]-1;this.outputShape=r;var u="float("+e+") + float("+t+") * sum";a=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < `+this.outputShape[3]+`;
        bool hasNextRow = c < `+this.outputShape[2]+`;

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - `+i+`;
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - `+i+"; j <= "+i+`; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(`+s+`));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * `+a+`;
        setOutput(result);
      }
    `},tp=function(r){this.variableNames=["dy","maxPos"],this.outputShape=r.inShape;var n=r.strideHeight,e=r.strideWidth,t=r.dilationHeight,o=r.effectiveFilterHeight,a=r.effectiveFilterWidth,i=o-1-r.padInfo.top,s=a-1-r.padInfo.left,u=o*a-1;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+o+`;
          wR += `+t+`) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+a+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+e+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = `+u+` - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * `+a+` + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `},np=function(r){this.variableNames=["dy","maxPos"],this.outputShape=r.inShape;var n=r.strideDepth,e=r.strideHeight,t=r.strideWidth,o=r.dilationDepth,a=r.dilationHeight,i=r.dilationWidth,s=r.effectiveFilterDepth,u=r.effectiveFilterHeight,c=r.effectiveFilterWidth,l=s-1-r.padInfo.front,h=u-1-r.padInfo.top,f=c-1-r.padInfo.left,p=s*u*c-1;this.userCode=`
      const ivec3 pads = ivec3(`+l+", "+h+", "+f+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+s+`;
           wD += `+o+`) {
          float dyD = float(dyDCorner + wD) / `+n+`.0;

          if (dyD < 0.0 || dyD >= `+r.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+u+`;
              wR += `+a+`) {
            float dyR = float(dyRCorner + wR) / `+e+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+c+`;
                wC += `+i+`) {
              float dyC = float(dyCCorner + wC) / `+t+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = `+p+` -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * `+u+" * "+c+` +
                  wR * `+c+` + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `},Vo=function(r,n,e,t,o,a,i){e===void 0&&(e=!1),t===void 0&&(t=!1),o===void 0&&(o=!1),a===void 0&&(a=null),i===void 0&&(i=!1),this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n;var s=e?r[1]:r[2],u=Math.ceil(s/2),c=e?"i * 2, rc.y":"rc.y, i * 2",l=t?"rc.z, i * 2":"i * 2, rc.z",h=e?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],f=t?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],p="",d="";a&&(p=i?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+a+`
        }`:`vec4 activation(vec4 x) {
          `+a+`
        }`,d="result = activation(result);");var m=o?"result += getBiasAtOutCoords();":"";o&&this.variableNames.push("bias"),i&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+p+`

      const float sharedDimension = `+u+`.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < `+u+`; i++) {
          vec4 a = getMatrixA(rc.x, `+c+`);
          vec4 b = getMatrixB(rc.x, `+l+`);

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (`+h[0]+" * "+f[0]+`);
          result += (`+h[1]+" * "+f[1]+`);
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        `+m+`

        `+d+`

        setOutput(result);
      }
    `},rp=function(){function r(n,e,t){this.variableNames=["probs"],this.outputShape=[n,t],this.userCode=`
      uniform float seed;

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < `+(e-1)+`; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(`+(e-1)+`));
      }
    `}return r.prototype.getCustomSetupFunc=function(n){var e=this;return function(t,o){e.seedLoc==null&&(e.seedLoc=t.getUniformLocation(o,"seed")),t.gl.uniform1f(e.seedLoc,n)}},r}(),op=function(r,n,e,t){this.variableNames=["indices"],this.outputShape=[r,n],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(`+t+"), float("+e+`),
                      float(index == coords.y)));
      }
    `},ap=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=r;var n=r.length;if(n===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{var e=Ze("rc",n),t=be(n),o=function(s,u,c){if(s===1)return"rc > "+u[0];for(var l="",h=s-2;h<s;h++)l+=c[h]+" >= "+u[h],h<s-1&&(l+="||");return l}(n,r,e),a=function(s,u,c,l){if(s===1)return"";var h=l.slice(-2);return`
    int r = `+h[0]+`;
    int c = `+h[1]+`;
    int rp1 = r + 1;
    int cp1 = c + 1;

    bool cEdge = cp1 >= `+u+`;
    bool rEdge = rp1 >= `+c+`;
  `}(n,r[r.length-1],r[r.length-2],e),i=function(s,u){var c=s.length,l=function(h,f){for(var p=[],d=0;d<=1;d++)for(var m=0;m<=1;m++){for(var v=(d===0?"r":"rp1")+", "+(m===0?"c":"cp1"),g=2;g<h;g++)v=f[f.length-1-g]+","+v;p.push(v)}return p}(c,u);return c===1?`getA(rc),
            rc + 1 >= `+s[0]+` ? 0. : getA(rc + 1),
            0, 0`:"getA("+l[0]+`),
          cEdge ? 0. : getA(`+l[1]+`),
          rEdge ? 0. : getA(`+l[2]+`),
          rEdge || cEdge ? 0. : getA(`+l[3]+")"}(r,e);this.userCode=`
        void main() {
          `+t+` rc = getOutputCoords();

          if(`+o+`) {
            setOutput(vec4(0));
          } else {
            `+a+`

            setOutput(vec4(`+i+`));
          }
        }
      `}},ip=function(r,n,e){this.variableNames=["x"],this.outputShape=n.map(function(u,c){return u[0]+r[c]+u[1]});var t=r.length,o=be(t),a=n.map(function(u){return u[0]}).join(","),i=n.map(function(u,c){return u[0]+r[c]}).join(","),s=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,t);this.userCode=t!==1?`
      `+o+" start = "+o+"("+a+`);
      `+o+" end = "+o+"("+i+`);

      void main() {
        `+o+` outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(float(`+e+`));
        } else {
          `+o+` coords = outC - start;
          setOutput(getX(`+s+`));
        }
      }
    `:`
        int start = `+a+`;
        int end = `+i+`;

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(float(`+e+`));
          } else {
            setOutput(getX(outC - start));
          }
        }
      `},sp=function(r,n,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n.map(function(v,g){return v[0]+r[g]+v[1]});for(var t=r.length,o=be(t),a=n.map(function(v){return v[0]}).join(","),i=n.map(function(v,g){return v[0]+r[g]}).join(","),s=Ze("rc",t),u=Ze("source",t),c=s[t-1]+" < "+this.outputShape[t-1],l=t===1?"source":"vec2("+u.slice(-2).join()+")",h=[o+" rc = outputLoc;",s[t-1]+` += 1;
       if(`+c+`) {
      `,t===1?"":`}
       rc = outputLoc;
       `+s[t-2]+` += 1;
       if(`+s[t-2]+" < "+this.outputShape[t-2]+") {",t===1?"":"  "+s[t-1]+` += 1;
         if(`+c+") {"],f=t===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",p="",d=0,m=t===1?2:4;d<m;d++)p+=`
        `+h[d]+`
        if (`+f+`) {
          result[`+d+"] = float("+e+`);
        } else {
          `+o+` source = rc - start;
          result[`+d+"] = getChannel(getX("+u.join()+"), "+l+`);
        }
      `;p+=t===1?"} ":"}}",this.userCode=`
      const `+o+" start = "+o+"("+a+`);
      const `+o+" end = "+o+"("+i+`);

      void main() {
        `+o+` outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        `+p+`
        setOutput(result);
      }
    `},Uo=function(r,n,e){if(this.variableNames=["x"],n==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var t=r.filterWidth,o=r.strideHeight,a=r.strideWidth,i=r.dilationHeight,s=r.dilationWidth,u=r.effectiveFilterHeight,c=r.effectiveFilterWidth,l=r.padInfo.top,h=r.padInfo.left;this.outputShape=r.outShape;var f=n==="avg",p="0.0";if(f||(p="-1.0 / 1e-20"),e)this.userCode=`
        const ivec2 strides = ivec2(`+o+", "+a+`);
        const ivec2 pads = ivec2(`+l+", "+h+`);

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < `+u+`;
              wR += `+i+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+c+`;
                wC += `+s+`) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = wR * `+c+` + wC;
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var d=n+"("+n+"("+n+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";n==="avg"&&(d="avgValue / count");var m=4*Math.floor(t/4),v=t%4,g=`
      if (`+f+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(`+o+", "+a+`);
      const ivec2 pads = ivec2(`+l+", "+h+`);
      const float initializationValue = `+p+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= `+r.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+p+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < `+u+`;
            wR += `+i+`) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= `+r.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+m+`; wC += 4) {
            int xC = xCCorner + wC * `+s+`;

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              getValue(batch, xR, xC + 3 * `+s+`, d)
            );

            `+g+`
          }

          int xC = xCCorner + `+m+`;
          if (`+(v===1)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            `+g+`
          } else if (`+(v===2)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              initializationValue,
              initializationValue
            );

            `+g+`
          } else if (`+(v===3)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              initializationValue
            );

            `+g+`
          }
        }
        setOutput(`+d+`);
      }
    `}},zo=function(r,n,e){if(this.variableNames=["x"],n==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var t=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterDepth,h=r.effectiveFilterHeight,f=r.effectiveFilterWidth,p=r.padInfo.front,d=r.padInfo.top,m=r.padInfo.left;this.outputShape=r.outShape;var v=n==="avg",g="0.0";if(v||(g="-1.0 / 1e-20"),e)this.userCode=`
        const ivec3 strides =
            ivec3(`+o+", "+a+", "+i+`);
        const ivec3 pads = ivec3(`+p+", "+d+", "+m+`);

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < `+l+`;
              wD += `+s+`) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= `+r.inDepth+`) {
              continue;
            }

            for (int wR = 0; wR < `+h+`;
                wR += `+u+`) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= `+r.inHeight+`) {
                continue;
              }

              for (int wC = 0; wC < `+f+`;
                  wC += `+c+`) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= `+r.inWidth+`) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition =
                      wD * `+h+" * "+f+` +
                      wR * `+f+` + wC;;
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var x=n+"("+n+"("+n+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";n==="avg"&&(x="avgValue / count");var b=4*Math.floor(t/4),y=t%4,w=`
      if (`+v+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(`+o+", "+a+", "+i+`);
      const ivec3 pads = ivec3(`+p+", "+d+", "+m+`);
      const float initializationValue = `+g+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= `+r.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+g+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= `+r.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+h+`;
            wR += `+u+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+b+`; wC += 4) {
              int xC = xCCorner + wC * `+c+`;

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                getValue(batch, xD, xR, xC + 3 * `+c+`, ch)
              );

              `+w+`
            }

            int xC = xCCorner + `+b+`;
            if (`+(y===1)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(y===2)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(y===3)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                initializationValue
              );

              `+w+`
            }
          }
          setOutput(`+x+`);
        }
      }
    `}},up=function(r,n){this.variableNames=["x"];var e=r.windowSize,t=r.batchSize,o=r.inSize,a=Math.ceil(o/e);this.outputShape=[t,a];var i="0.0",s="";n==="prod"?i="1.0":n==="min"?(i="1.0 / 1e-20",s="min"):n==="max"&&(i="-1.0 / 1e-20",s="max");var u=n+"("+n+"("+n+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";n==="sum"?u="sumValue":n==="prod"?u="prodValue":n==="all"?u="allValue":n==="any"&&(u="anyValue");var c=4*Math.floor(e/4),l=e%4,h=`
      if (`+(n==="sum")+`) {
        sumValue += dot(values, ones);
      } else if (`+(n==="prod")+`) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = `+s+`(values, minMaxValue);
      }
    `,f="vec4";n==="all"?(i="1.0",h=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,f="bvec4"):n==="any"&&(i="0.0",h=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,f="bvec4");var p="";o%e>0&&(p=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = `+i+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        `+p+`
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+e+`;

        vec4 minMaxValue = vec4(`+i+`);
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < `+c+`; i += 4) {
          int inIdx = inOffset + i;
          `+f+" values = "+f+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          `+h+`
        }

        int inIdx = inOffset + `+c+`;
        if (`+(l===1)+`) {
          `+f+" values = "+f+`(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          `+h+`
        } else if (`+(l===2)+`) {
          `+f+" values = "+f+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          `+h+`
        } else if (`+(l===3)+`) {
          `+f+" values = "+f+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          `+h+`
        }
        setOutput(`+u+`);
      }
    `},cp=function(r,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r;for(var e="",t=0;t<4;t++){var o="thisRC = rc;";t%2==1&&(o+="thisRC.z += 1;"),t>1&&(o+="thisRC.y += 1;"),e+=`
        `+o+`
        `+(t>0?"if(thisRC.y < rows && thisRC.z < cols){":"")+`
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[`+t+`] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        `+(t>0?"}":"")+`
      `}this.userCode=`
      
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      `+vn(["r","c","d"],n)+`
      return ivec3(r, c, d);
    }
  
      `+Oa(r)+`

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = `+r[1]+`;
        int cols = `+r[2]+`;

        `+e+`

        setOutput(result);
      }
    `},lp=function(r,n,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=n.shape;var t=n.shape,o=t[1],a=t[2],i=r.shape,s=i[1],u=i[2],c=[e&&s>1?o-1:o,e&&u>1?a-1:a],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],h=c[0]/l[0],f=c[1]/l[1],p=1/h,d=1/f,m=2*Math.ceil(p)+2,v=2*Math.ceil(d)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+h+`);
        const float widthScale = float(`+f+`);

        const float invHeightScale = float(`+p+`);
        const float invWidthScale = float(`+d+`);

        const int winHeight = int(`+m+`);
        const int winWidth = int(`+v+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), `+(o-1)+`.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), `+(a-1)+`.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},hp=function(r,n,e,t){this.variableNames=["A"],this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,n,e,s];var u=[t&&n>1?a-1:a,t&&e>1?i-1:i],c=[t&&n>1?n-1:n,t&&e>1?e-1:e];this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+a+".0, "+i+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `},fp=function(r,n,e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,n,e,s];var u=[t&&n>1?a-1:a,t&&e>1?i-1:i],c=[t&&n>1?n-1:n,t&&e>1?e-1:e];this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`,
          `+u[1]/c[1]+`);
      const vec3 inputShapeRC = vec3(`+a+".0, "+i+`.0,
                                     `+i+`.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < `+(s-1)+`;
        bool hasNextRow = coords.z < `+(e-1)+`;

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `},pp=function(r,n,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=n.shape;var t=n.shape,o=t[1],a=t[2],i=r.shape,s=i[1],u=i[2],c=[e&&s>1?o-1:o,e&&u>1?a-1:a],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],h=c[0]/l[0],f=c[1]/l[1],p=1/h,d=1/f,m=2*Math.ceil(p)+2,v=2*Math.ceil(d)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+h+`);
        const float widthScale = float(`+f+`);

        const float invHeightScale = float(`+p+`);
        const float invWidthScale = float(`+d+`);

        const int winHeight = int(`+m+`);
        const int winWidth = int(`+v+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float sourceFracRow =
              float(`+c[0]+`) *
                (float(dyR) / float(`+l[0]+`));

            float sourceFracCol =
                float(`+c[1]+`) *
                  (float(dyC) / float(`+l[1]+`));

            int sourceNearestRow = int(min(
                float(int(`+o+`) - 1),
                `+e+` ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(`+a+`) - 1),
                `+e+` ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},dp=function(r,n,e,t){this.variableNames=["A"],this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,n,e,s];var u=[t&&n>1?a-1:a,t&&e>1?i-1:i],c=[t&&n>1?n-1:n,t&&e>1?e-1:e],l=t?"0.5":"0.0";this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+a+".0, "+i+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + `+l+`)));

        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `},vp=function(r,n){this.variableNames=["x"];var e=r.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");if(this.outputShape=r,e!==1){var t=r.map(function(a,i){return function(s){return n.indexOf(s)!==-1&&r[s]!==1?r[s]+" - coords["+s+"] - 1":"coords["+s+"]"}(i)}).join(","),o=be(e);this.userCode=`
      void main() {
        `+o+` coords = getOutputCoords();
        setOutput(getX(`+t+`));
      }
    `}else this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(`+r[0]+` - coord - 1));
        }
      `},mp=function(r,n){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;var e=r.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");this.outputShape=r;var t=Ze("rc",e),o=t[e-1]+" + 1 < "+this.outputShape[e-1],a=t[e-2]+" + 1 < "+this.outputShape[e-2],i=be(e);function s(u){var c=r.map(function(l,h){return function(f,p){return n.indexOf(f)!==-1&&r[f]!==1?r[f]+" - "+p[f]+" - 1":""+p[f]}(h,u)});return"getChannel(getX("+c.join(",")+"), vec2("+c.slice(-2).join(",")+"))"}this.userCode=e===1?`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(`+r[0]+` - rc - 1),
            `+r[0]+` - rc - 1);
          if(`+o+`){
              result.g = getChannel(getX(`+r[0]+` - (rc  + 1) - 1),
                `+r[0]+` - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:`
        void main() {
          `+i+` rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = `+function(u){return s(u)}(t.slice())+`;
          if(`+o+`){
            result.g = `+function(u){return u[e-1]="("+u[e-1]+" + 1)",s(u)}(t.slice())+`;
          }
          if(`+a+`) {
            result.b = `+function(u){return u[e-2]="("+u[e-2]+" + 1)",s(u)}(t.slice())+`;
            if(`+o+`) {
              result.a = `+function(u){return u[e-1]="("+u[e-1]+" + 1)",u[e-2]="("+u[e-2]+" + 1)",s(u)}(t.slice())+`;
            }
          }
          setOutput(result);
        }
    `},$i=function(r,n,e,t,o,a,i){this.variableNames=["updates","indices","defaultValue"],this.outputShape=a;var s=be(o.length),u=be(a.length),c="";e===1?c="i":e===2&&(c="i, j");var l="getIndices("+c+")",h="";t===1?h="i":t===2&&(h="i, coords[1]");var f="getUpdates("+h+")",p=n>1?"strides[j]":"strides";this.userCode=`
        `+s+" strides = "+s+"("+o+`);

        void main() {
          `+u+` coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < `+r+`; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < `+n+`; j++) {
              int index = round(`+l+`);
              flattenedIndex += index * `+p+`;
            }
            if (flattenedIndex == coords[0]) {
              sum += `+f+`;
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `},gp=function(r,n){this.variableNames=["x","segmentIds"];var e=r.windowSize,t=r.batchSize,o=r.inSize,a=r.numSegments,i=a*Math.ceil(o/e);this.outputShape=[t,i];var s=4*Math.floor(e/4),u=e%4,c=`
        sumValue += dot(values, segFilter);
    `,l="";o%e>0&&(l=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `);var h="";o%e>0&&(h=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        `+l+`
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        `+h+`
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          `+a+")) * float("+e+`));
        int currentSeg = int(mod(float(outIdx), float(`+a+`)));

        float sumValue = 0.0;

        for (int i = 0; i < `+s+`; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          `+c+`
        }

        int inIdx = inOffset + `+s+`;
        if (`+(u===1)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          `+c+`
        } else if (`+(u===2)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          `+c+`
        } else if (`+(u===3)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          `+c+`
        }
        setOutput(sumValue);
      }
    `},yp=function(r,n,e){var t,o;if(this.variableNames=["c","a","b"],this.outputShape=n,e>4)throw Error("Where for rank "+e+" is not yet supported");if(e===1)o="resRC",t="resRC";else{for(var a=["resRC.x","resRC.y","resRC.z","resRC.w"],i=[],s=[],u=0;u<n.length;u++)s.push(""+a[u]),u<r&&i.push(""+a[u]);t=i.join(),o=s.join()}var c=be(e);this.userCode=`
      void main() {
        `+c+` resRC = getOutputCoords();
        float cVal = getC(`+t+`);
        if (cVal >= 1.0) {
          setOutput(getA(`+o+`));
        } else {
          setOutput(getB(`+o+`));
        }
      }
    `},xp=function(){function r(n){this.variableNames=["source"],this.outputShape=n,this.rank=n.length;var e,t=be(this.rank),o="uniform int start["+this.rank+"];",a=function(i){if(i===1)return"sourceLoc";if(i<=6)return Go.slice(0,i).map(function(s){return"sourceLoc."+s}).join(",");throw Error("Slicing for rank "+i+" is not yet supported")}(this.rank);e=`
        `+t+` sourceLoc;
        `+t+` coords = getOutputCoords();
        `+n.map(function(i,s){return"sourceLoc."+Go[s]+" = start["+s+"] + coords."+Go[s]+";"}).join(`
`)+`
      `,this.userCode=`
      `+o+`
      void main() {
        `+e+`
        setOutput(getSource(`+a+`));
      }
    `}return r.prototype.getCustomSetupFunc=function(n){var e=this;if(n.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+n.length+")");return function(t,o){e.startLoc==null&&(e.startLoc=t.getUniformLocationNoThrow(o,"start"),e.startLoc==null)||t.gl.uniform1iv(e.startLoc,n)}},r}(),Go=["x","y","z","w","u","v"],bp=function(){function r(n){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n,this.rank=n.length;var e=be(this.rank),t=Ze("coords",this.rank),o=Ze("sourceLoc",this.rank),a=this.rank===1?"sourceLoc":"vec2("+o.slice(-2).join()+")",i="getChannel(getSource("+o.join()+"), "+a+")",s=`
      result.x = `+i+`;
      if (++`+t[this.rank-1]+" < "+n[this.rank-1]+`) {
        ++`+o[this.rank-1]+`;
        result.y = `+i+`;
        --`+o[this.rank-1]+`;
      }
    `,u=this.rank===1?"":`
      --`+t[this.rank-1]+`;
      if (++`+t[this.rank-2]+" < "+n[this.rank-2]+`) {
        ++`+o[this.rank-2]+`;
        result.z = `+i+`;
        if (++`+t[this.rank-1]+" < "+n[this.rank-1]+`) {
          ++`+o[this.rank-1]+`;
          result.w = `+i+`;
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            `+e+"("+n.map(function(l,h){return"start["+h+"]"}).join()+");":n.map(function(l,h){return o[h]+" = "+t[h]+" + start["+h+"];"}).join(`
`);this.userCode=`
      uniform int start[`+this.rank+`];
      void main() {
        `+e+` coords = getOutputCoords();
        `+e+` sourceLoc;
        `+c+`
        vec4 result = vec4(0.);
        `+s+`
        `+u+`
        setOutput(result);
      }
    `}return r.prototype.getCustomSetupFunc=function(n){var e=this;if(n.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+n.length+")");return function(t,o){e.startLoc==null&&(e.startLoc=t.getUniformLocationNoThrow(o,"start"),e.startLoc==null)||t.gl.uniform1iv(e.startLoc,n)}},r}(),wp=function(r,n,e){this.variableNames=["x"],this.outputShape=e;var t=e.length,o=be(e.length),a=be(e.length),i="";if(t===1)i="coords * strides + begin";else{var s=0;i=e.map(function(u,c){return s++,e.length===1?"coords * strides["+c+"] + begin["+c+"]":"coords["+(s-1)+"] * strides["+c+"] + begin["+c+"]"}).join(",")}this.userCode=`
      `+o+" begin = "+o+"("+r+`);
      `+o+" strides = "+o+"("+n+`);

      void main() {
        `+a+` coords = getOutputCoords();
        setOutput(getX(`+i+`));
      }
    `},Cp=function(){function r(n){this.gpgpu=n,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}return r.prototype.acquireTexture=function(n,e,t){var o,a=Ji(e,t),i=Qi(n,a,t);if(i in this.freeTextures||(this.freeTextures[i]=[]),i in this.usedTextures||(this.usedTextures[i]=[]),this.freeTextures[i].length>0){this.numFreeTextures--,this.numUsedTextures++,this.log();var s=this.freeTextures[i].shift();return this.usedTextures[i].push(s),s}return this.numUsedTextures++,this.log(),a===it.PACKED_2X2_FLOAT32?o=this.gpgpu.createPackedMatrixTexture(n[0],n[1]):a===it.PACKED_2X2_FLOAT16?o=this.gpgpu.createFloat16PackedMatrixTexture(n[0],n[1]):a===it.UNPACKED_FLOAT32?o=this.gpgpu.createFloat32MatrixTexture(n[0],n[1]):a===it.UNPACKED_FLOAT16?o=this.gpgpu.createFloat16MatrixTexture(n[0],n[1]):a===it.PACKED_4X1_UNSIGNED_BYTE&&(o=this.gpgpu.createUnsignedBytesMatrixTexture(n[0],n[1])),this.usedTextures[i].push(o),o},r.prototype.releaseTexture=function(n,e,t,o){if(this.freeTextures!=null){var a=Qi(e,Ji(t,o),o);a in this.freeTextures||(this.freeTextures[a]=[]),this.freeTextures[a].push(n),this.numFreeTextures++,this.numUsedTextures--;var i=this.usedTextures[a],s=i.indexOf(n);if(s<0)throw new Error("Cannot release a texture that was never provided by this texture manager");i.splice(s,1),this.log()}},r.prototype.log=function(){if(this.logEnabled){var n=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",this.numFreeTextures+" / "+this.numUsedTextures,"("+n+")")}},r.prototype.getNumUsedTextures=function(){return this.numUsedTextures},r.prototype.getNumFreeTextures=function(){return this.numFreeTextures},r.prototype.dispose=function(){var n=this;if(this.freeTextures!=null){for(var e in this.freeTextures)this.freeTextures[e].forEach(function(t){n.gpgpu.deleteMatrixTexture(t)});for(var e in this.usedTextures)this.usedTextures[e].forEach(function(o){n.gpgpu.deleteMatrixTexture(o)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0}},r}();function Ji(r,n){if(r===st.UPLOAD)return it.PACKED_2X2_FLOAT32;if(r===st.RENDER||r==null)return function(e){return P().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?e?it.PACKED_2X2_FLOAT32:it.UNPACKED_FLOAT32:e?it.PACKED_2X2_FLOAT16:it.UNPACKED_FLOAT16}(n);if(r===st.DOWNLOAD||r===st.PIXELS)return it.PACKED_4X1_UNSIGNED_BYTE;throw new Error("Unknown logical texture type "+r)}function Qi(r,n,e){return r[0]+"_"+r[1]+"_"+n+"_"+e}var _p=function(r,n){this.variableNames=["A"];for(var e=new Array(r.length),t=0;t<e.length;t++)e[t]=r[t]*n[t];this.outputShape=e,this.rank=e.length;var o=be(this.rank),a=function(i){var s=i.length;if(s>5)throw Error("Tile for rank "+s+" is not yet supported");if(s===1)return"imod(resRC, "+i[0]+")";for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],c=[],l=0;l<i.length;l++)c.push("imod("+u[l]+", "+i[l]+")");return c.join()}(r);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+a+`));
      }
    `},Ep=function(r,n){this.variableNames=["A"];for(var e=new Array(r.length),t=0;t<e.length;t++)e[t]=r[n[t]];this.outputShape=e,this.rank=e.length;var o=be(this.rank),a=function(i){var s=i.length;if(s>6)throw Error("Transpose for rank "+s+" is not yet supported");for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],c=new Array(s),l=0;l<i.length;l++)c[i[l]]=u[l];return c.join()}(n);this.userCode=`
    void main() {
      `+o+` resRC = getOutputCoords();
      setOutput(getA(`+a+`));
    }
    `},Rp=function(r,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;for(var e=new Array(r.length),t=0;t<e.length;t++)e[t]=r[n[t]];if(this.outputShape=e,this.rank=e.length,this.rank>6)throw Error("Packed transpose for rank "+this.rank+" is not yet supported.");var o=be(this.rank),a=hu("rc",this.rank),i=new Array(this.rank);for(t=0;t<n.length;t++)i[n[t]]=a[t];var s="vec2("+i.slice(-2).join()+")",u="++"+a[this.rank-1]+" < "+e[this.rank-1],c="getChannel(getA("+i.join()+"), "+s+")";this.userCode=`
    void main() {
      `+o+` rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = `+c+`;
      if(`+u+`) {
        result[1] = `+c+`;
      }
      --`+a[this.rank-1]+`;
      if(++`+a[this.rank-2]+" < "+e[this.rank-2]+`) {
        result[2] = `+c+`;
        if(`+u+`) {
          result[3] = `+c+`;
        }
      }
      setOutput(result);
    }
    `},Ba=1.7580993408473768,La=1.0507009873554805,ae=function(r,n){this.variableNames=["A"],this.outputShape=r,this.userCode=`
      float unaryOperation(float x) {
        `+n+`
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `},bt="if (isnan(x)) return x;",Ip="return x;",Zi="return abs(x);",mu=bt+`
  return (x < 0.0) ? 0.0 : x;
`,gu=bt+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,yu="return (x >= 0.0) ? x : (exp(x) - 1.0);",kp=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = `+Ba+`;
  float scale = `+La+`;
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,es="return -x;",ts="return ceil(x);",ns="return floor(x);",rs="return exp(x);",os="return exp(x) - 1.0;",Sp=bt+`
  return sin(x);
`,Dp=bt+`
  return cos(x);
`,Ap=bt+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,Tp=bt+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,Np=bt+`
  return atan(x);
`,Fp=bt+"return log(x + sqrt(x * x + 1.0));",Mp=bt+`
  if (x < 1.0) return NAN;
  return log(x + sqrt(x * x - 1.0));`,Pp=bt+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
  return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,Sr="return x;",Op="return x;",xu=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,bu=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,wu=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,Qn=function(r,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.userCode=`
      vec4 unaryOperation(vec4 x) {
        `+n+`
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `},Bp=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=r;var n=r.length,e=Ze("rc",n),t=be(n),o=function(s,u){if(s===1)return"rc";for(var c="",l=0;l<s;l++)c+=u[l],l<s-1&&(c+=",");return c}(n,e),a=e.slice(-2),i=n<=1?"rc":"vec2("+a.join(",")+")";this.userCode=`
      void main() {
        `+t+` rc = getOutputCoords();
        vec4 packedInput = getA(`+o+`);

        setOutput(getChannel(packedInput, `+i+`));
      }
    `},Dr={};function Ar(r,n){if(n===void 0&&(n=!1),r==="linear")return n?Op:Ip;if(r==="relu")return n?xu:mu;if(r==="elu")return n?wu:yu;if(r==="relu6")return n?bu:gu;if(r==="prelu")return n?vu:du;throw new Error("Activation "+r+" has not been implemented for the WebGL backend.")}var Lp=600,Wp=function(r){function n(e){var t,o=r.call(this)||this;if(o.pendingRead=new WeakMap,o.pendingDisposal=new WeakSet,o.dataRefCount=new WeakMap,o.numBytesInGPU=0,o.uploadWaitMs=0,o.downloadWaitMs=0,o.warnedAboutMemory=!1,o.pendingDeletes=0,o.disposed=!1,!P().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");if(e==null){var a=Pt(P().getNumber("WEBGL_VERSION"));o.binaryCache=((t=P().getNumber("WEBGL_VERSION"))in Dr||(Dr[t]={}),Dr[t]),o.gpgpu=new $f(a),o.canvas=a.canvas,o.gpgpuCreatedLocally=!0}else o.gpgpu=e,o.binaryCache={},o.gpgpuCreatedLocally=!1,o.canvas=e.gl.canvas;return o.textureManager=new Cp(o.gpgpu),o.numMBBeforeWarning=P().global.screen==null?1024:P().global.screen.height*P().global.screen.width*window.devicePixelRatio*Lp/1024/1024,o.texData=new nu(o,T),o}return xt(n,r),n.prototype.numDataIds=function(){return this.texData.numDataIds()+(this.cpuBackend?this.cpuBackend.numDataIds():0)-this.pendingDeletes},n.prototype.write=function(e,t,o){if(P().getBool("DEBUG")&&this.checkNumericalProblems(e),o==="complex64"&&e!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");var a={};return this.texData.set(a,{shape:t,dtype:o,values:e,usage:st.UPLOAD}),a},n.prototype.move=function(e,t,o,a){if(P().getBool("DEBUG")&&this.checkNumericalProblems(t),a==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(e,{shape:o,dtype:a,values:t,usage:st.UPLOAD})},n.prototype.readSync=function(e){var t=this.texData.get(e),o=t.values,a=t.dtype,i=t.complexTensors,s=t.slice,u=t.shape,c=t.isPacked;if(s!=null){var l=void 0;l=c?new Qn(u,Sr):new ae(u,Sr);var h=this.runWebGLProgram(l,[{dataId:e,shape:u,dtype:a}],a),f=this.readSync(h.dataId);return this.disposeData(h.dataId),f}if(o!=null)return this.convertAndCacheOnCPU(e);if(a==="string")return o;var p,d,m=this.activeTimers!=null;return m&&(p=It()),a==="complex64"?d=da(i.real.dataSync(),i.imag.dataSync()):d=this.getValuesFromTexture(e),m&&(this.downloadWaitMs+=It()-p),this.convertAndCacheOnCPU(e,d)},n.prototype.read=function(e){return X(this,void 0,void 0,function(){var t,o,a,i,s,u,c,l,h,f,p,d,m,v,g,x,b,y,w,C,S,k;return Y(this,function(R){switch(R.label){case 0:if(this.pendingRead.has(e))return t=this.pendingRead.get(e),[2,new Promise(function(I){return t.push(I)})];if(o=this.texData.get(e),a=o.values,i=o.shape,s=o.slice,u=o.dtype,c=o.complexTensors,l=o.isPacked,s!=null)return h=void 0,h=l?new Qn(i,Sr):new ae(i,Sr),f=this.runWebGLProgram(h,[{dataId:e,shape:i,dtype:u}],u),p=this.read(f.dataId),this.disposeData(f.dataId),[2,p];if(a!=null)return[2,this.convertAndCacheOnCPU(e)];if(!P().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&P().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");return d=null,u!=="complex64"&&P().get("WEBGL_BUFFER_SUPPORTED")&&(m=this.decode(e),v=this.texData.get(m.dataId),d=(k=this.gpgpu).createBufferFromTexture.apply(k,[v.texture].concat(er(i)))),this.pendingRead.set(e,[]),u==="complex64"?[3,2]:[4,this.gpgpu.createAndWaitForFence()];case 1:R.sent(),R.label=2;case 2:return u!=="complex64"?[3,4]:[4,Promise.all([c.real.data(),c.imag.data()])];case 3:return x=R.sent(),b=x[0],y=x[1],g=da(b,y),[3,5];case 4:d==null?g=this.getValuesFromTexture(e):(w=$(i),g=this.gpgpu.downloadFloat32MatrixFromBuffer(d,w)),R.label=5;case 5:return m!=null&&this.disposeData(m.dataId),C=this.convertAndCacheOnCPU(e,g),S=this.pendingRead.get(e),this.pendingRead.delete(e),S.forEach(function(I){return I(C)}),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e),this.pendingDeletes--),[2,C]}})})},n.prototype.checkNumericalProblems=function(e){if(e!=null)for(var t=0;t<e.length;t++){var o=e[t];if(!Il(o))throw P().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error("The value "+o+" cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'"):Error("The value "+o+" cannot be represented on this device.")}},n.prototype.getValuesFromTexture=function(e){var t,o=this.texData.get(e),a=o.shape,i=o.dtype,s=o.isPacked,u=$(a);if(P().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){var c=this.decode(e),l=this.texData.get(c.dataId),h=(t=this.gpgpu).downloadMatrixFromPackedTexture.apply(t,[l.texture].concat(er(a))).subarray(0,u);return this.disposeData(c.dataId),h}var f=P().getBool("WEBGL_PACK")&&s===!0,p=f?Oo(a):a,d=f?new If(p):new Rf(p),m=this.runWebGLProgram(d,[{shape:p,dtype:i,dataId:e}],"float32"),v=this.texData.get(m.dataId),g=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(v.texture,v.texShape[0],v.texShape[1]).subarray(0,u);return this.disposeData(m.dataId),g},n.prototype.time=function(e){return X(this,void 0,void 0,function(){var t,o,a,i,s,u,c;return Y(this,function(l){switch(l.label){case 0:return t=this.activeTimers,o=[],a=!1,this.programTimersStack==null?(this.programTimersStack=o,a=!0):this.activeTimers.push(o),this.activeTimers=o,e(),i=Gn(this.activeTimers.map(function(h){return h.query})).filter(function(h){return h!=null}),s=Gn(this.activeTimers.map(function(h){return h.name})).filter(function(h){return h!=null}),this.activeTimers=t,a&&(this.programTimersStack=null),u={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},P().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[4,Promise.all(i)]:[3,2];case 1:return c=l.sent(),u.kernelMs=il(c),u.getExtraProfileInfo=function(){return c.map(function(h,f){return{name:s[f],ms:h}}).map(function(h){return h.name+": "+h.ms}).join(", ")},[3,3];case 2:u.kernelMs={error:"WebGL query timers are not supported in this environment."},l.label=3;case 3:return this.uploadWaitMs=0,this.downloadWaitMs=0,[2,u]}})})},n.prototype.memory=function(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU}},n.prototype.startTimer=function(){return P().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:It(),endMs:null}},n.prototype.endTimer=function(e){return P().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),e):(e.endMs=It(),e)},n.prototype.getQueryTime=function(e){return X(this,void 0,void 0,function(){var t;return Y(this,function(o){return P().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[2,this.gpgpu.waitForQueryAndGetTime(e)]:[2,(t=e).endMs-t.startMs]})})},n.prototype.disposeData=function(e){if(!this.pendingDisposal.has(e)){if(this.pendingRead.has(e))return this.pendingDisposal.add(e),void this.pendingDeletes++;if(this.texData.has(e)){this.releaseGPUData(e);var t=this.texData.get(e).complexTensors;t!=null&&(t.real.dispose(),t.imag.dispose()),this.texData.delete(e)}}},n.prototype.releaseGPUData=function(e){var t=this.texData.get(e),o=t.texture,a=t.dtype,i=t.texShape,s=t.usage,u=t.isPacked,c=t.slice,l=c&&c.origDataId||e,h=this.dataRefCount.get(l);h>1?this.dataRefCount.set(l,h-1):(this.dataRefCount.delete(l),o!=null&&(this.numBytesInGPU-=this.computeBytes(i,a),this.textureManager.releaseTexture(o,i,s,u)));var f=this.texData.get(e);f.texture=null,f.texShape=null,f.isPacked=!1,f.slice=null},n.prototype.getTexture=function(e){return this.uploadToGPU(e),this.texData.get(e).texture},n.prototype.getDataInfo=function(e){return this.texData.get(e)},n.prototype.getCPUBackend=function(){return P().getBool("WEBGL_CPU_FORWARD")?(this.cpuBackend==null&&(this.cpuBackend=T.findBackend("cpu")),this.cpuBackend):null},n.prototype.shouldExecuteOnCPU=function(e,t){var o=this;return t===void 0&&(t=128),this.getCPUBackend()!=null&&e.every(function(a){return o.texData.get(a.dataId).texture==null&&a.size<t})},n.prototype.getGPGPUContext=function(){return this.gpgpu},n.prototype.complex=function(e,t){var o=this.makeOutput(e.shape,"complex64");return this.texData.get(o.dataId).complexTensors={real:T.keep(e.clone()),imag:T.keep(t.clone())},o},n.prototype.real=function(e){return this.texData.get(e.dataId).complexTensors.real.clone()},n.prototype.imag=function(e){return this.texData.get(e.dataId).complexTensors.imag.clone()},n.prototype.slice=function(e,t,o){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.slice(e,t,o);if($(o)===0)return He([],o,e.dtype);var a=this.texData.get(e.dataId).isPacked,i=eu(e.shape,t,o);if(a||!i){var s=P().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new bp(o):new xp(o),u=s.getCustomSetupFunc(t);return this.compileAndRun(s,[e],null,u)}return this.uploadToGPU(e.dataId),this.shallowSlice(e,t,o)},n.prototype.shallowSlice=function(e,t,o){var a=this.texData.get(e.dataId),i=this.makeOutput(o,e.dtype),s=this.texData.get(i.dataId);Object.assign(s,a),s.shape=o,s.dtype=e.dtype;var u=tu(t,e.strides);a.slice&&(u+=a.slice.flatOffset),s.slice={flatOffset:u,origDataId:a.slice&&a.slice.origDataId||e.dataId};var c=this.dataRefCount.get(s.slice.origDataId)||1;return this.dataRefCount.set(s.slice.origDataId,c+1),i},n.prototype.stridedSlice=function(e,t,o,a){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.stridedSlice(e,t,o,a);var i=Ta(t,o,a);if(i.some(function(u){return u===0}))return He([],i);var s=new wp(t,a,i);return this.compileAndRun(s,[e])},n.prototype.reverse=function(e,t){var o=P().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new mp(e.shape,t):new vp(e.shape,t);return this.compileAndRun(o,[e])},n.prototype.concat=function(e,t){if(e[0].dtype==="complex64"){var o=e.map(function(p){return pt(p)}),a=e.map(function(p){return St(p)});return ze(this.concat(o,t),this.concat(a,t))}if(this.shouldExecuteOnCPU(e))return this.cpuBackend.concat(e,t);if(e.length===1)return e[0];if(e.length>P().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){var i=Math.floor(e.length/2),s=this.concat(e.slice(0,i),t),u=this.concat(e.slice(i),t);return this.concat([s,u],t)}if(P().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&e[0].rank>1){var c=new hf(e.map(function(p){return p.shape}),t);return this.compileAndRun(c,e)}var l=jn(e.map(function(p){return p.shape}),t),h=e.map(function(p){return p.as2D(-1,$(p.shape.slice(t)))}),f=new lf(h.map(function(p){return p.shape}));return this.compileAndRun(f,h).reshape(l)},n.prototype.neg=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.neg(e);if(P().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,es,e.dtype);var t=new ae(e.shape,es);return this.compileAndRun(t,[e])},n.prototype.batchMatMul=function(e,t,o,a){var i=o?e.shape[2]:e.shape[1],s=a?t.shape[1]:t.shape[2],u=o?e.shape[1]:e.shape[2],c=e.shape[0];if((i===1||s===1)&&u>1e3){o&&(e=e.transpose([0,2,1])),a&&(t=t.transpose([0,2,1]));var l=s===1?e:e.as3D(c,u,1),h=s===1?2:1,f=s===1?t.as3D(c,1,u):t;return this.multiply(l,f).sum(h,!0)}var p=Ge(e.dtype,t.dtype),d=new Vo(e.shape,[c,i,s],o,a);return this.compileAndRun(d,[e,t],p)},n.prototype.fusedBatchMatMul=function(e){var t=e.a,o=e.b,a=e.transposeA,i=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=a?t.shape[2]:t.shape[1],h=i?o.shape[1]:o.shape[2],f=t.shape[0],p=Ge(t.dtype,o.dtype),d=s!=null,m=c!=null,v=u?Ar(u,!0):null,g=new Vo(t.shape,[f,l,h],a,i,d,v,m),x=[t,o];return s&&x.push(s),c&&x.push(c),this.compileAndRun(g,x,p)},n.prototype.multiply=function(e,t){if(e.dtype==="complex64"){var o=this.texData.get(e.dataId),a=this.texData.get(t.dataId),i=new zi(of,e.shape,t.shape),s=new zi(af,e.shape,t.shape),u=[this.makeComplexComponentTensorInfo(e,o.complexTensors.real),this.makeComplexComponentTensorInfo(e,o.complexTensors.imag),this.makeComplexComponentTensorInfo(t,a.complexTensors.real),this.makeComplexComponentTensorInfo(t,a.complexTensors.imag)],c=this.compileAndRun(i,u),l=this.compileAndRun(s,u),h=this.complex(c,l);return c.dispose(),l.dispose(),h}if(this.shouldExecuteOnCPU([e,t]))return this.cpuBackend.multiply(e,t);if(P().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,t,Gi,e.dtype);var f=new Se(Gi,e.shape,t.shape);return this.compileAndRun(f,[e,t],e.dtype)},n.prototype.batchNormalization=function(e,t,o,a,i,s){var u=[e,t,o],c=null;s!=null&&(c=s.shape,u.push(s));var l=null;if(i!=null&&(l=i.shape,u.push(i)),P().getBool("WEBGL_PACK_NORMALIZATION")){var h=new rf(e.shape,t.shape,o.shape,c,l,a);return this.compileAndRun(h,u)}var f=new nf(e.shape,t.shape,o.shape,c,l,a);return this.compileAndRun(f,u)},n.prototype.localResponseNormalization4D=function(e,t,o,a,i){var s=P().getBool("WEBGL_PACK_NORMALIZATION")?new ep(e.shape,t,o,a,i):new Qf(e.shape,t,o,a,i);return this.compileAndRun(s,[e])},n.prototype.LRNGrad=function(e,t,o,a,i,s,u){var c=new Zf(t.shape,a,i,s,u);return this.compileAndRun(c,[t,o,e])},n.prototype.tile=function(e,t){if(e.dtype==="string"){var o=this.readSync(e.dataId).map(function(i){return Wr(i)});return cu(oe(e.shape,e.dtype,o),t)}var a=new _p(e.shape,t);return this.compileAndRun(a,[e])},n.prototype.pad=function(e,t,o){var a=P().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new sp(e.shape,t,o):new ip(e.shape,t,o);return this.compileAndRun(a,[e])},n.prototype.transpose=function(e,t){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.transpose(e,t);var o=P().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Rp(e.shape,t):new Ep(e.shape,t);return this.compileAndRun(o,[e])},n.prototype.gather=function(e,t,o){if(this.shouldExecuteOnCPU([e,t]))return this.cpuBackend.gather(e,t,o);var a=new Nf(e.shape,t.size,o);return this.compileAndRun(a,[e,t])},n.prototype.batchToSpaceND=function(e,t,o){E(e.rank<=4,function(){return"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"});var a=t.reduce(function(h,f){return h*f}),i=jr(e.shape,t,a),s=qr(i.length,t.length),u=Kr(e.shape,t,a),c=$s(o,t.length),l=Js(u,o,t.length);return e.reshape(i).transpose(s).reshape(u).slice(c,l)},n.prototype.spaceToBatchND=function(e,t,o){E(e.rank<=4,function(){return"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"});var a=t.reduce(function(f,p){return f*p}),i=[[0,0]];i.push.apply(i,o);for(var s=1+t.length;s<e.shape.length;++s)i.push([0,0]);var u=e.pad(i),c=jr(u.shape,t,a,!1),l=qr(c.length,t.length,!1),h=Kr(u.shape,t,a,!1);return u.reshape(c).transpose(l).reshape(h)},n.prototype.reduce=function(e,t,o){var a=e.shape[0],i=e.shape[1],s=Bo(i),u=new up({windowSize:s,inSize:i,batchSize:a},t),c=this.compileAndRun(u,[e],o);return c.shape[1]===1?c:this.reduce(c,t,o)},n.prototype.argReduce=function(e,t,o){o===void 0&&(o=null);var a=e.shape[0],i=e.shape[1];o!=null&&(a=o.shape[0],i=o.shape[1]);var s=Bo(i),u=new Kh({windowSize:s,inSize:i,batchSize:a},t,o==null),c=[e];o!=null&&c.push(o);var l=this.compileAndRun(u,c,"int32");return l.shape[1]===1?l:this.argReduce(e,t,l)},n.prototype.argReducePacked=function(e,t,o){o===void 0&&(o=null);var a=o!=null?o.shape:e.shape,i=Bo(a[a.length-1]),s=new Zh(a,i,t,o==null),u=o==null?[e]:[e,o],c=this.compileAndRun(s,u,"int32");return c.rank===e.rank?this.argReducePacked(e,t,c):c},n.prototype.sum=function(e,t){at("sum",t,e.rank);var o=Ke(e.shape,t),a=o[0],i=$(o[1]),s=e.as2D(-1,i),u=Do(e.dtype);return this.reduce(s,"sum",u).reshape(a)},n.prototype.prod=function(e,t){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.prod(e,t);var o=Ke(e.shape,t),a=o[0],i=$(o[1]),s=e.as2D(-1,i),u=Do(e.dtype);return this.reduce(s,"prod",u).reshape(a)},n.prototype.unsortedSegmentSum=function(e,t,o){var a=0,i=Ot([a],e.rank),s=e;i!=null&&(s=e.transpose(i),a=Bt(1,e.rank)[0]);var u=function(p,d,m){for(var v=[],g=p.length,x=0;x<g;x++)x!==d?v.push(p[x]):v.push(m);return v}(s.shape,a,o),c=$([s.shape[a]]),l=s.as2D(-1,c),h=Do(e.dtype),f=this.segOpCompute(l,"unsortedSegmentSum",t,h,o).reshape(u);return i!=null&&(f=f.transpose(ka(i))),f},n.prototype.segOpCompute=function(e,t,o,a,i){var s=e.shape[0],u=e.shape[1],c=function(f,p){var d,m=!1;for(f<=Zs?(d=f,m=!0):d=aa(f,Math.floor(Math.sqrt(f)));!m;)d>p||d===f?m=!0:d=aa(f,d+1);return d}(u,i),l=new gp({windowSize:c,inSize:u,batchSize:s,numSegments:i}),h=this.compileAndRun(l,[e,o],a);return h.shape[1]===i?h:(o=Hr(0,i).tile([u/c]),this.segOpCompute(h,t,o,a,i))},n.prototype.argMinMaxReduce=function(e,t,o){var a=[t];if(at("arg"+o.charAt(0).toUpperCase()+o.slice(1),a,e.rank),!P().getBool("WEBGL_PACK_REDUCE")||e.rank<=2){var i=Ke(e.shape,a),s=i[0],u=$(i[1]),c=e.as2D(-1,u);return this.argReduce(c,o).reshape(s)}return this.argReducePacked(e,o)},n.prototype.argMin=function(e,t){return this.argMinMaxReduce(e,t,"min")},n.prototype.argMax=function(e,t){return this.argMinMaxReduce(e,t,"max")},n.prototype.cumsum=function(e,t,o,a){if(t!==e.rank-1)throw new Error("WebGL cumsum shader expects an inner-most axis="+(e.rank-1)+" but got axis="+t);var i=new bf(e.shape,o,a);return this.compileAndRun(i,[e])},n.prototype.equal=function(e,t){if(P().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,t,`
  return vec4(equal(a, b));
`,"bool");var o=new Se("return float(a == b);",e.shape,t.shape);return this.compileAndRun(o,[e,t],"bool")},n.prototype.notEqual=function(e,t){if(P().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,t,`
  return vec4(notEqual(a, b));
`,"bool");var o=new Se("return float(a != b);",e.shape,t.shape);return this.compileAndRun(o,[e,t],"bool")},n.prototype.less=function(e,t){if(this.shouldExecuteOnCPU([e,t]))return this.cpuBackend.less(e,t);if(P().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,t,`
  return vec4(lessThan(a, b));
`,"bool");var o=new Se("return float(a < b);",e.shape,t.shape);return this.compileAndRun(o,[e,t],"bool")},n.prototype.lessEqual=function(e,t){if(P().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,t,`
  return vec4(lessThanEqual(a, b));
`,"bool");var o=new Se("return float(a <= b);",e.shape,t.shape);return this.compileAndRun(o,[e,t],"bool")},n.prototype.greater=function(e,t){if(this.shouldExecuteOnCPU([e,t]))return this.cpuBackend.greater(e,t);if(P().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,t,`
  return vec4(greaterThan(a, b));
`,"bool");var o=new Se("return float(a > b);",e.shape,t.shape);return this.compileAndRun(o,[e,t],"bool")},n.prototype.greaterEqual=function(e,t){if(P().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,t,`
  return vec4(greaterThanEqual(a, b));
`,"bool");var o=new Se("return float(a >= b);",e.shape,t.shape);return this.compileAndRun(o,[e,t],"bool")},n.prototype.logicalNot=function(e){var t=new ae(e.shape,"return float(!(x >= 1.0));");return this.compileAndRun(t,[e])},n.prototype.logicalAnd=function(e,t){if(P().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,t,`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,"bool");var o=new Se("return float(a >= 1.0 && b >= 1.0);",e.shape,t.shape);return this.compileAndRun(o,[e,t],"bool")},n.prototype.logicalOr=function(e,t){if(P().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,t,`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,"bool");var o=new Se("return float(a >= 1.0 || b >= 1.0);",e.shape,t.shape);return this.compileAndRun(o,[e,t],"bool")},n.prototype.select=function(e,t,o){var a=new yp(e.rank,t.shape,t.rank);return this.compileAndRun(a,[e,t,o],Ge(t.dtype,o.dtype))},n.prototype.where=function(e){zr("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");var t=e.dataSync();return Pa(e.shape,t)},n.prototype.topk=function(e,t,o){return lu(e.dataSync(),e.shape,e.dtype,t)},n.prototype.min=function(e,t){at("min",t,e.rank);var o=Ke(e.shape,t),a=o[0],i=$(o[1]),s=e.as2D(-1,i);return this.reduce(s,"min",s.dtype).reshape(a)},n.prototype.minimum=function(e,t){if(this.shouldExecuteOnCPU([e,t]))return this.cpuBackend.minimum(e,t);var o=P().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new zt(`
  vec4 result = vec4(min(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,t.shape):new Se(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return min(a, b);
`,e.shape,t.shape);return this.compileAndRun(o,[e,t])},n.prototype.mod=function(e,t){var o=P().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new zt(`
  vec4 result = mod(a, b);
  vec4 isNaN = vec4(equal(b, vec4(0.0)));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,t.shape):new Se(`if (b == 0.0) return NAN;
  return mod(a, b);`,e.shape,t.shape);return this.compileAndRun(o,[e,t])},n.prototype.max=function(e,t){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.max(e,t);at("max",t,e.rank);var o=Ke(e.shape,t),a=o[0],i=$(o[1]),s=e.as2D(-1,i);return this.reduce(s,"max",s.dtype).reshape(a)},n.prototype.maximum=function(e,t){if(this.shouldExecuteOnCPU([e,t]))return this.cpuBackend.maximum(e,t);var o=P().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new zt(`
  vec4 result = vec4(max(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,t.shape):new Se(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return max(a, b);
`,e.shape,t.shape);return this.compileAndRun(o,[e,t])},n.prototype.all=function(e,t){at("all",t,e.rank);var o=Ke(e.shape,t),a=o[0],i=$(o[1]),s=e.as2D(-1,i);return this.reduce(s,"all",s.dtype).reshape(a)},n.prototype.any=function(e,t){at("any",t,e.rank);var o=Ke(e.shape,t),a=o[0],i=$(o[1]),s=e.as2D(-1,i);return this.reduce(s,"any",s.dtype).reshape(a)},n.prototype.realDivide=function(e,t){if(P().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,t,`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,"float32",!0);var o=new Se(`
if (a == b) {
  return 1.0;
};
return a / b;`,e.shape,t.shape);return this.compileAndRun(o,[e,t],"float32")},n.prototype.floorDiv=function(e,t){if(P().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,t,`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,"int32");var o=new Se(`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,e.shape,t.shape);return this.compileAndRun(o,[e,t],"int32")},n.prototype.add=function(e,t){if(e.dtype==="complex64"&&t.dtype==="complex64")return this.complexSeparableBinaryOp(e,t,Lo);if(this.shouldExecuteOnCPU([e,t]))return this.cpuBackend.add(e,t);var o=Ge(e.dtype,t.dtype);if(P().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,t,Lo,o);var a=new Se(Lo,e.shape,t.shape);return this.compileAndRun(a,[e,t],o)},n.prototype.packedUnaryOp=function(e,t,o){var a=new Qn(e.shape,t);return this.compileAndRun(a,[e],o)},n.prototype.packedBinaryOp=function(e,t,o,a,i){i===void 0&&(i=!1);var s=new zt(o,e.shape,t.shape,i);return this.compileAndRun(s,[e,t],a)},n.prototype.complexSeparableBinaryOp=function(e,t,o){var a=this,i=this.texData.get(e.dataId),s=this.texData.get(t.dataId),u=[[i.complexTensors.real,s.complexTensors.real],[i.complexTensors.imag,s.complexTensors.imag]].map(function(f){var p=f[0],d=f[1],m=a.makeComplexComponentTensorInfo(e,p),v=a.makeComplexComponentTensorInfo(t,d),g=new Se(o,e.shape,t.shape);return a.compileAndRun(g,[m,v],Ge(p.dtype,d.dtype))}),c=u[0],l=u[1],h=this.complex(c,l);return c.dispose(),l.dispose(),h},n.prototype.makeComplexComponentTensorInfo=function(e,t){return{dataId:t.dataId,dtype:t.dtype,shape:e.shape}},n.prototype.addN=function(e){if(e.length===1)return e[0];if(e.length>P().get("WEBGL_MAX_TEXTURES_IN_SHADER")){var t=Math.floor(e.length/2),o=this.addN(e.slice(0,t)),a=this.addN(e.slice(t));return this.addN([o,a])}var i=e.map(function(c){return c.dtype}).reduce(function(c,l){return Ge(c,l)}),s=e.map(function(c){return c.shape}),u=P().getBool("WEBGL_PACK")?new qh(e[0].shape,s):new jh(e[0].shape,s);return this.compileAndRun(u,e,i)},n.prototype.subtract=function(e,t){if(e.dtype==="complex64"&&t.dtype==="complex64")return this.complexSeparableBinaryOp(e,t,Wo);if(this.shouldExecuteOnCPU([e,t]))return this.cpuBackend.subtract(e,t);var o=Ge(e.dtype,t.dtype);if(P().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,t,Wo,e.dtype);var a=new Se(Wo,e.shape,t.shape);return this.compileAndRun(a,[e,t],o)},n.prototype.pow=function(e,t){var o=P().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new zt(`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,t.shape):new Se(`
if(a < 0.0 && floor(b) < b){
  return NAN;
}
if (b == 0.0) {
  return 1.0;
}
return (round(mod(b, 2.0)) != 1) ?
    pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,e.shape,t.shape),a=Ge(e.dtype,t.dtype);return this.compileAndRun(o,[e,t],a)},n.prototype.ceil=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.ceil(e);if(P().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,ts,e.dtype);var t=new ae(e.shape,ts);return this.compileAndRun(t,[e])},n.prototype.floor=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.floor(e);if(P().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,ns,e.dtype);var t=new ae(e.shape,ns);return this.compileAndRun(t,[e])},n.prototype.sign=function(e){var t=new ae(e.shape,`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`);return this.compileAndRun(t,[e])},n.prototype.isNaN=function(e){var t=new ae(e.shape,"return float(isnan(x));");return this.compileAndRun(t,[e],"bool")},n.prototype.isInf=function(e){var t=new ae(e.shape,"return float(isinf(x));");return this.compileAndRun(t,[e],"bool")},n.prototype.isFinite=function(e){var t=new ae(e.shape,"return float(!isnan(x) && !isinf(x));");return this.compileAndRun(t,[e],"bool")},n.prototype.round=function(e){var t=new ae(e.shape,`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`);return this.compileAndRun(t,[e])},n.prototype.exp=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.exp(e);if(P().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,rs,e.dtype);var t=new ae(e.shape,rs);return this.compileAndRun(t,[e])},n.prototype.expm1=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.expm1(e);if(P().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,os,e.dtype);var t=new ae(e.shape,os);return this.compileAndRun(t,[e])},n.prototype.softmax=function(e,t){var o=Be([t],e.shape),a=this.max(e,o),i=tt(a.shape,o),s=this.subtract(e,a.reshape(i)),u=this.exp(s),c=this.sum(u,o).reshape(i);return this.realDivide(u,c)},n.prototype.log=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.log(e);if(P().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,`
  vec4 result = log(x);
  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));
  result.r = isNaN.r == 1.0 ? NAN : result.r;
  result.g = isNaN.g == 1.0 ? NAN : result.g;
  result.b = isNaN.b == 1.0 ? NAN : result.b;
  result.a = isNaN.a == 1.0 ? NAN : result.a;

  return result;
`,e.dtype);var t=new ae(e.shape,`if (x < 0.0) return NAN;
  return log(x);`);return this.compileAndRun(t,[e])},n.prototype.log1p=function(e){var t=new ae(e.shape,"return log(1.0 + x);");return this.compileAndRun(t,[e])},n.prototype.sqrt=function(e){var t=new ae(e.shape,"return sqrt(x);");return this.compileAndRun(t,[e])},n.prototype.rsqrt=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.rsqrt(e);var t=new ae(e.shape,"return inversesqrt(x);");return this.compileAndRun(t,[e])},n.prototype.reciprocal=function(e){var t=new ae(e.shape,"return 1.0 / x;");return this.compileAndRun(t,[e])},n.prototype.relu=function(e){var t;return t=P().getBool("WEBGL_PACK")?new Qn(e.shape,xu):new ae(e.shape,mu),this.compileAndRun(t,[e])},n.prototype.relu6=function(e){var t;return t=P().getBool("WEBGL_PACK")?new Qn(e.shape,bu):new ae(e.shape,gu),this.compileAndRun(t,[e])},n.prototype.prelu=function(e,t){var o=P().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new zt(vu,e.shape,t.shape):new Se(du,e.shape,t.shape);return this.compileAndRun(o,[e,t])},n.prototype.elu=function(e){if(P().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,wu,e.dtype);var t=new ae(e.shape,yu);return this.compileAndRun(t,[e])},n.prototype.eluDer=function(e,t){var o=P().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new zt(`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,e.shape,t.shape):new Se("return (b >= 1.0) ? a : a * (b + 1.0);",e.shape,t.shape);return this.compileAndRun(o,[e,t])},n.prototype.selu=function(e){var t=new ae(e.shape,kp);return this.compileAndRun(t,[e])},n.prototype.int=function(e){var t=new ae(e.shape,"return float(int(x));");return this.compileAndRun(t,[e],"int32")},n.prototype.clip=function(e,t,o){var a,i=(a=P().getBool("WEBGL_PACK_CLIP")?new uf(e.shape):new sf(e.shape)).getCustomSetupFunc(t,o);return this.compileAndRun(a,[e],null,i)},n.prototype.abs=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.abs(e);if(P().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Zi,e.dtype);var t=new ae(e.shape,Zi);return this.compileAndRun(t,[e])},n.prototype.complexAbs=function(e){var t=this.texData.get(e.dataId),o=new cf(e.shape),a=[this.makeComplexComponentTensorInfo(e,t.complexTensors.real),this.makeComplexComponentTensorInfo(e,t.complexTensors.imag)];return this.compileAndRun(o,a)},n.prototype.sigmoid=function(e){var t=new ae(e.shape,"return 1.0 / (1.0 + exp(-1.0 * x));");return this.compileAndRun(t,[e])},n.prototype.softplus=function(e){var t=new ae(e.shape,`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`);return this.compileAndRun(t,[e])},n.prototype.sin=function(e){var t=new ae(e.shape,Sp);return this.compileAndRun(t,[e])},n.prototype.cos=function(e){var t=new ae(e.shape,Dp);return this.compileAndRun(t,[e])},n.prototype.tan=function(e){var t=new ae(e.shape,"return tan(x);");return this.compileAndRun(t,[e])},n.prototype.asin=function(e){var t=new ae(e.shape,Ap);return this.compileAndRun(t,[e])},n.prototype.acos=function(e){var t=new ae(e.shape,Tp);return this.compileAndRun(t,[e])},n.prototype.atan=function(e){var t=new ae(e.shape,Np);return this.compileAndRun(t,[e])},n.prototype.atan2=function(e,t){var o=P().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new zt(`
  vec4 result = atan(a, b);
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,t.shape):new Se(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return atan(a, b);
`,e.shape,t.shape);return this.compileAndRun(o,[e,t])},n.prototype.sinh=function(e){var t=new ae(e.shape,`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`);return this.compileAndRun(t,[e])},n.prototype.cosh=function(e){var t=new ae(e.shape,`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`);return this.compileAndRun(t,[e])},n.prototype.tanh=function(e){var t=new ae(e.shape,`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`);return this.compileAndRun(t,[e])},n.prototype.asinh=function(e){var t=new ae(e.shape,Fp);return this.compileAndRun(t,[e])},n.prototype.acosh=function(e){var t=new ae(e.shape,Mp);return this.compileAndRun(t,[e])},n.prototype.atanh=function(e){var t=new ae(e.shape,Pp);return this.compileAndRun(t,[e])},n.prototype.erf=function(e){var t=new ae(e.shape,`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = 0.3275911;
  float a1 = 0.254829592;
  float a2 = -0.284496736;
  float a3 = 1.421413741;
  float a4 = -1.453152027;
  float a5 = 1.061405429;

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`);return this.compileAndRun(t,[e])},n.prototype.step=function(e,t){var o=new ae(e.shape,function(a){return a===void 0&&(a=0),bt+`
    return x > 0.0 ? 1.0 : float(`+a+`);
  `}(t));return this.compileAndRun(o,[e])},n.prototype.conv2dByMatMul=function(e,t,o,a,i,s){var u=e.shape,c=this.texData.get(e.dataId),l=o.inChannels,h=u[0]*u[1]*u[2],f=o.outChannels,p=o.dataFormat==="channelsLast",d=(h===1||f===1)&&l>1e3,m=u[2]%2!=0&&!!c.isPacked;if(d||!P().getBool("WEBGL_LAZILY_UNPACK")||!P().getBool("WEBGL_PACK_BINARY_OPERATIONS")||!m){var v=p?u[0]*u[1]*u[2]:u[0]*u[2]*u[3],g=this.reshape(e,[1,v,o.inChannels]),x=this.reshape(t,[1,o.inChannels,o.outChannels]);return this.reshape(this.fusedBatchMatMul({a:g,b:x,transposeA:!1,transposeB:!1,bias:a,activation:i,preluActivationWeights:s}),o.outShape)}var b=p?u[0]*u[1]*(u[2]+1):u[0]*u[2]*(u[3]+1),y={dataId:e.dataId,shape:[1,b,o.inChannels],dtype:e.dtype},w=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,E(Ir(c.shape,y.shape),function(){return"packed reshape "+c.shape+" to "+y.shape+" isn't free"});var C=this.reshape(t,[1,o.inChannels,o.outChannels]),S=this.fusedBatchMatMul({a:y,b:C,transposeA:!1,transposeB:!1,bias:a,activation:i,preluActivationWeights:s}),k=this.texData.get(S.dataId);return E(k.isPacked,function(){return"batchMatMul result is expected to be packed"}),c.shape=w,k.shape=o.outShape,T.makeTensorFromDataId(S.dataId,o.outShape,S.dtype)},n.prototype.conv2dWithIm2Row=function(e,t,o,a,i,s){var u=o.filterWidth,c=o.filterHeight,l=o.inChannels,h=o.outWidth,f=o.outHeight,p=o.dataFormat==="channelsLast",d=u*c*l,m=f*h,v=[d,m],g=e.squeeze([0]),x=t.reshape([1,d,-1]),b=new Jf(v,g.shape,o),y=this.compileAndRun(b,[g]).reshape([1,v[0],v[1]]),w=a!=null,C=s!=null,S=i?Ar(i,!0):null,k=new Vo(y.shape,[1,m,o.outChannels],!0,!1,w,S,C),R=[y,x];a&&R.push(a),C&&R.push(s);var I=this.compileAndRun(k,R);return p?I.reshape([1,f,h,o.outChannels]):I.reshape([1,o.outChannels,f,h])},n.prototype.fusedConv2d=function(e){var t=e.input,o=e.filter,a=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights;if(a.filterHeight===1&&a.filterWidth===1&&a.dilationHeight===1&&a.dilationWidth===1&&a.strideHeight===1&&a.strideWidth===1&&(a.padInfo.type==="SAME"||a.padInfo.type==="VALID"))return this.conv2dByMatMul(t,o,a,i,s,u);if(P().getBool("WEBGL_CONV_IM2COL")&&t.shape[0]===1)return this.conv2dWithIm2Row(t,o,a,i,s,u);var c=i!=null,l=u!=null,h=s?Ar(s,!1):null,f=new Hi(a,c,h,l),p=[t,o];return i&&p.push(i),u&&p.push(u),this.compileAndRun(f,p)},n.prototype.conv2d=function(e,t,o){if(o.filterHeight===1&&o.filterWidth===1&&o.dilationHeight===1&&o.dilationWidth===1&&o.strideHeight===1&&o.strideWidth===1&&(o.padInfo.type==="SAME"||o.padInfo.type==="VALID"))return this.conv2dByMatMul(e,t,o);if(P().getBool("WEBGL_CONV_IM2COL")&&e.shape[0]===1)return this.conv2dWithIm2Row(e,t,o);var a=new Hi(o);return this.compileAndRun(a,[e,t])},n.prototype.conv2dDerInput=function(e,t,o){var a=new pf(o);return this.compileAndRun(a,[e,t])},n.prototype.conv2dDerFilter=function(e,t,o){var a=new ff(o);return this.compileAndRun(a,[e,t])},n.prototype.fusedDepthwiseConv2D=function(e){var t,o=e.input,a=e.filter,i=e.convInfo,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=P().getBool("WEBGL_PACK_DEPTHWISECONV")&&i.strideWidth<=2&&i.outChannels/i.inChannels==1,h=u?Ar(u,l):null,f=[o,a],p=s!=null,d=c!=null;return p&&f.push(s),d&&f.push(c),l?(t=new qi(i,p,h,d),this.compileAndRun(t,f)):(t=new ji(i,p,h,d),this.compileAndRun(t,f))},n.prototype.depthwiseConv2D=function(e,t,o){var a;return P().getBool("WEBGL_PACK_DEPTHWISECONV")&&o.strideWidth<=2&&o.outChannels/o.inChannels==1?(a=new qi(o),this.compileAndRun(a,[e,t])):(a=new ji(o),this.compileAndRun(a,[e,t]))},n.prototype.depthwiseConv2DDerInput=function(e,t,o){var a=new gf(o);return this.compileAndRun(a,[e,t])},n.prototype.depthwiseConv2DDerFilter=function(e,t,o){var a=new mf(o);return this.compileAndRun(a,[e,t])},n.prototype.conv3d=function(e,t,o){var a=new yf(o);return this.compileAndRun(a,[e,t])},n.prototype.conv3dDerInput=function(e,t,o){var a=new vf(o);return this.compileAndRun(a,[e,t])},n.prototype.conv3dDerFilter=function(e,t,o){var a=new df(o);return this.compileAndRun(a,[e,t])},n.prototype.maxPool=function(e,t){var o=new Uo(t,"max",!1);return this.compileAndRun(o,[e])},n.prototype.avgPool=function(e,t){var o=new Uo(t,"avg",!1);return this.compileAndRun(o,[e],"float32")},n.prototype.maxPoolBackprop=function(e,t,o,a){var i=new Uo(a,"max",!0),s=this.compileAndRun(i,[t]),u=new tp(a),c=this.compileAndRun(u,[e,s],t.dtype);return s.dispose(),c},n.prototype.avgPoolBackprop=function(e,t,o){var a=new ef(o);return this.compileAndRun(a,[e],t.dtype)},n.prototype.cast=function(e,t){return au(e,t,this)},n.prototype.unstack=function(e,t){for(var o=e.shape[t],a=new Array(e.rank-1),i=0,s=0;s<e.rank;s++)s!==t&&(a[i++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[t]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[t]=s,l[s]=this.slice(e,u,c).reshape(a);return l},n.prototype.avgPool3d=function(e,t){var o=new zo(t,"avg",!1);return this.compileAndRun(o,[e],"float32")},n.prototype.avgPool3dBackprop=function(e,t,o){var a=new tf(o);return this.compileAndRun(a,[e],t.dtype)},n.prototype.maxPool3d=function(e,t){var o=new zo(t,"max",!1);return this.compileAndRun(o,[e],"float32")},n.prototype.maxPool3dBackprop=function(e,t,o,a){var i=new zo(a,"max",!0),s=this.compileAndRun(i,[t]),u=new np(a),c=this.compileAndRun(u,[e,s],t.dtype);return s.dispose(),c},n.prototype.reshape=function(e,t){var o=this.texData.get(e.dataId);if(o.isPacked&&!Ir(e.shape,t)&&(o.texture===null||!Ir(o.shape,t))){var a=this.packedReshape(e,t);return T.makeTensorFromDataId(a.dataId,a.shape,a.dtype)}return pa(e,t)},n.prototype.resizeBilinear=function(e,t,o,a){var i=P().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new fp(e.shape,t,o,a):new hp(e.shape,t,o,a);return this.compileAndRun(i,[e],"float32")},n.prototype.resizeBilinearBackprop=function(e,t,o){var a=new lp(e,t,o);return this.compileAndRun(a,[e])},n.prototype.resizeNearestNeighbor=function(e,t,o,a){var i=new dp(e.shape,t,o,a);return this.compileAndRun(i,[e])},n.prototype.resizeNearestNeighborBackprop=function(e,t,o){var a=new pp(e,t,o);return this.compileAndRun(a,[e])},n.prototype.multinomial=function(e,t,o,a){var i=t?e:qt(e),s=i.shape[0],u=i.shape[1],c=new rp(s,u,o),l=c.getCustomSetupFunc(a);return this.compileAndRun(c,[i],"int32",l)},n.prototype.oneHot=function(e,t,o,a){var i=new op(e.size,t,o,a);return this.compileAndRun(i,[e])},n.prototype.diag=function(e){var t=new Ef(e.size);return this.compileAndRun(t,[e])},n.prototype.nonMaxSuppression=function(e,t,o,a,i){return zr("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead"),Fa(e.dataSync(),t.dataSync(),o,a,i)},n.prototype.cropAndResize=function(e,t,o,a,i,s){var u=new xf(e.shape,t.shape,a,i,s);return this.compileAndRun(u,[e,t,o],"float32")},n.prototype.depthToSpace=function(e,t,o){E(t>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+t});var a=e.shape[0],i=o==="NHWC"?e.shape[1]:e.shape[2],s=o==="NHWC"?e.shape[2]:e.shape[3],u=o==="NHWC"?e.shape[3]:e.shape[1],c=i*t,l=s*t,h=u/(t*t),f=new _f(o==="NHWC"?[a,c,l,h]:[a,h,c,l],t,o);return this.compileAndRun(f,[e])},n.prototype.split=function(e,t,o){return uu(e,t,o)},n.prototype.scatterND=function(e,t,o){var a=Xr(0,e,o),i=a.sliceRank,s=a.numUpdates,u=a.sliceSize,c=a.strides,l=a.outputSize,h=[l/u,u],f=e.reshape([s,i]),p=t.reshape([s,u]);if(l===0)return pa(He([]),o);var d=j(0),m=new $i(s,i,f.rank,p.rank,c,h);return this.compileAndRun(m,[p,f,d]).reshape(o)},n.prototype.sparseToDense=function(e,t,o,a){var i=Xr(0,e,o),s=i.sliceRank,u=i.numUpdates,c=i.strides,l=i.outputSize,h=new $i(u,s,e.rank,t.rank,c,[l,1]);return this.compileAndRun(h,[t,e,a]).reshape(o)},n.prototype.fft=function(e){return this.fftImpl(e,!1)},n.prototype.ifft=function(e){return this.fftImpl(e,!0)},n.prototype.fftImpl=function(e,t){var o=this.texData.get(e.dataId),a=new Xi(Df,e.shape,t),i=new Xi(Af,e.shape,t),s=[this.makeComplexComponentTensorInfo(e,o.complexTensors.real),this.makeComplexComponentTensorInfo(e,o.complexTensors.imag)],u=this.compileAndRun(a,s),c=this.compileAndRun(i,s),l=this.complex(u,c).as2D(e.shape[0],e.shape[1]);return u.dispose(),c.dispose(),l},n.prototype.gatherND=function(e,t){var o=t.shape,a=o[o.length-1],i=Qs(e,t),s=i[0],u=i[1],c=i[2],l=i[3],h=t.reshape([u,a]),f=e.reshape([e.size/c,c]),p=new Ff(a,l,[u,c]);return this.compileAndRun(p,[f,h]).reshape(s)},n.prototype.fill=function(e,t,o){if((o=o||fr(t))==="string"){var a=Lr(o,$(e));return a.fill(t),T.makeTensor(a,e,o,this)}var i=new Tf(e,t),s=i.getCustomSetupFunc(t);return this.compileAndRun(i,[],o,s)},n.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported under string dtype");return this.fill(e.shape,1,e.dtype)},n.prototype.zerosLike=function(e){return this.fill(e.shape,e.dtype==="string"?"":0,e.dtype)},n.prototype.linspace=function(e,t,o){return iu(e,t,o)},n.prototype.makeTensorInfo=function(e,t){var o=this.write(null,e,t);return this.texData.get(o).usage=null,{dataId:o,shape:e,dtype:t}},n.prototype.makeOutput=function(e,t){var o=this.makeTensorInfo(e,t).dataId;return T.makeTensorFromDataId(o,e,t,this)},n.prototype.unpackTensor=function(e){var t=new Bp(e.shape);return this.runWebGLProgram(t,[e],e.dtype)},n.prototype.packTensor=function(e){var t=new ap(e.shape);return this.runWebGLProgram(t,[e],e.dtype,null,!0)},n.prototype.packedReshape=function(e,t){var o=[Vr(e.shape)].concat(Ur(e.shape)),a={dtype:e.dtype,shape:o,dataId:e.dataId},i=[Vr(t)].concat(Ur(t)),s=new cp(i,o),u=this.runWebGLProgram(s,[a],e.dtype,null,!0);return{dataId:u.dataId,shape:t,dtype:u.dtype}},n.prototype.decode=function(e){var t,o=this.texData.get(e),a=o.isPacked,i=o.shape,s=o.dtype,u=Oo(i);return t=a?new Cf(u):new wf(u),{dtype:s,shape:i,dataId:this.runWebGLProgram(t,[{shape:u,dtype:s,dataId:e}],s,null,!0).dataId}},n.prototype.runWebGLProgram=function(e,t,o,a,i){var s=this;i===void 0&&(i=!1);var u=this.makeTensorInfo(e.outputShape,o),c=this.texData.get(u.dataId);if(e.packedOutput&&(c.isPacked=!0),e.outPackingScheme===ar.DENSE){var l=er(e.outputShape);c.texShape=l.map(function(b){return 2*b})}if(e.outTexUsage!=null&&(c.usage=e.outTexUsage),$(u.shape)===0)return c.values=rr(u.dtype,0),u;var h=[],f=t.map(function(b){if(b.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");var y=s.texData.get(b.dataId);if(y.texture==null){if(!e.packedInputs&&$(b.shape)<=P().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:b.shape,texData:null,isUniform:!0,uniformValues:y.values};e.packedInputs&&(y.isPacked=!0,y.shape=b.shape)}else if(!!y.isPacked!=!!e.packedInputs)b=y.isPacked?s.unpackTensor(b):s.packTensor(b),h.push(b),y=s.texData.get(b.dataId);else if(y.isPacked&&!Ir(y.shape,b.shape)){var w=b,C=b.shape;b.shape=y.shape,b=s.packedReshape(b,C),h.push(b),y=s.texData.get(b.dataId),w.shape=C}return s.uploadToGPU(b.dataId),{shape:b.shape,texData:y,isUniform:!1}});this.uploadToGPU(u.dataId);var p,d={shape:u.shape,texData:c,isUniform:!1},m=function(b,y,w){var C="";y.concat(w).forEach(function(R){var I=R.texData!=null&&R.texData.slice!=null&&R.texData.slice.flatOffset>0,N=R.isUniform?"uniform":R.texData.texShape;C+=R.shape+"_"+N+"_"+I});var S=b.userCode,k=b.constructor.name;return k+="_"+C+"_"+S}(e,f,d),v=this.getAndSaveBinary(m,function(){return function(b,y,w,C){var S=y.userCode,k=w.map(function(W,G){var H={logicalShape:W.shape,texShape:W.isUniform?null:W.texData.texShape,isUniform:W.isUniform,isPacked:!W.isUniform&&W.texData.isPacked,flatOffset:null};return W.texData!=null&&W.texData.slice!=null&&W.texData.slice.flatOffset>0&&(H.flatOffset=W.texData.slice.flatOffset),{name:y.variableNames[G],shapeInfo:H}}),R=k.map(function(W){return W.shapeInfo}),I={logicalShape:C.shape,texShape:C.texData.texShape,isUniform:!1,isPacked:C.texData.isPacked,flatOffset:null},N=Xh(k,I,S,y.packedInputs),A=b.createProgram(N),L=null,O=b.getUniformLocation(A,"NAN",!1);P().getNumber("WEBGL_VERSION")===1&&(L=b.getUniformLocation(A,"INFINITY",!1));for(var B={},U=0;U<y.variableNames.length;U++){var V=y.variableNames[U];B[V]=b.getUniformLocation(A,V,!1),B["offset"+V]=b.getUniformLocation(A,"offset"+V,!1)}return{program:y,source:N,webGLProgram:A,uniformLocations:B,inShapeInfos:R,outShapeInfo:I,infLoc:L,nanLoc:O}}(s.gpgpu,e,f,d)}),g=this.activeTimers!=null;if(g&&(p=this.startTimer()),function(b,y,w,C,S){Yi(y.inShapeInfos,w),Yi([y.outShapeInfo],[C]);var k=C.texData.texture,R=C.texData.texShape;C.texData.isPacked?b.setOutputPackedMatrixTexture(k,R[0],R[1]):b.setOutputMatrixTexture(k,R[0],R[1]),b.setProgram(y.webGLProgram),P().getNumber("WEBGL_VERSION")===1&&y.infLoc!==null&&b.gl.uniform1f(y.infLoc,1/0),y.nanLoc!==null&&b.gl.uniform1f(y.nanLoc,NaN),w.forEach(function(I,N){var A=y.program.variableNames[N],L=y.uniformLocations[A],O=y.uniformLocations["offset"+A];if(L!=null)if(I.isUniform)if($(I.shape)<2)b.gl.uniform1f(L,I.uniformValues[0]);else{var B=I.uniformValues;B instanceof Float32Array||(B=new Float32Array(B)),b.gl.uniform1fv(L,B)}else I.texData.slice!=null&&O!=null&&b.gl.uniform1i(O,I.texData.slice.flatOffset),b.setInputMatrixTexture(I.texData.texture,L,N)}),S!=null&&S(b,y.webGLProgram),b.executeProgram()}(this.gpgpu,v,f,d,a),h.forEach(function(b){return s.disposeData(b.dataId)}),g&&(p=this.endTimer(p),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(p)})),!P().getBool("WEBGL_LAZILY_UNPACK")&&c.isPacked&&i===!1){var x=this.unpackTensor(u);return this.disposeData(u.dataId),x}return u},n.prototype.compileAndRun=function(e,t,o,a,i){i===void 0&&(i=!1),o=o||t[0].dtype;var s=this.runWebGLProgram(e,t,o,a,i);return T.makeTensorFromDataId(s.dataId,s.shape,s.dtype)},n.prototype.getAndSaveBinary=function(e,t){return e in this.binaryCache||(this.binaryCache[e]=t()),this.binaryCache[e]},n.prototype.getTextureManager=function(){return this.textureManager},n.prototype.dispose=function(){var e=this;this.disposed||(P().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(function(t){e.gpgpu.deleteProgram(e.binaryCache[t].webGLProgram),delete e.binaryCache[t]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)},n.prototype.floatPrecision=function(){var e=this;return this.floatPrecisionValue==null&&(this.floatPrecisionValue=K(function(){if(!P().get("WEBGL_RENDER_FLOAT32_ENABLED")){var t=P().getBool("DEBUG");P().set("DEBUG",!1);var o=e.abs(j(1e-8)).dataSync()[0];if(P().set("DEBUG",t),o>0)return 32}return 16})),this.floatPrecisionValue},n.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},n.prototype.uploadToGPU=function(e){var t,o=this.texData.get(e),a=o.shape,i=o.dtype,s=o.values,u=o.texture,c=o.usage,l=o.isPacked;if(u==null){var h,f=this.activeTimers!=null;f&&(h=It());var p=o.texShape;if(p==null&&(p=Hl(a,l),o.texShape=p),s!=null){var d=Oo(a),m=void 0,v=p[1],g=p[0],x=s instanceof Uint8Array;l?(v=(t=dr(p[0],p[1]))[0],g=t[1],m=new Sf(d,[g,v],x)):m=new kf(d,[g,v],x);var b=this.makeTensorInfo([g,v],i);this.texData.get(b.dataId).usage=x?st.PIXELS:st.UPLOAD,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(b.dataId),v,g,s);var y=this.runWebGLProgram(m,[b],i,null,!0),w=this.texData.get(y.dataId);o.texture=w.texture,o.texShape=w.texShape,o.isPacked=w.isPacked,o.usage=w.usage,this.disposeData(b.dataId),this.texData.delete(y.dataId),o.values=null,f&&(this.uploadWaitMs+=It()-h)}else{var C=this.acquireTexture(p,c,i,l);o.texture=C}}},n.prototype.convertAndCacheOnCPU=function(e,t){var o=this.texData.get(e),a=o.dtype;return this.releaseGPUData(e),t!=null&&(o.values=function(i,s){if(s==="float32"||s==="complex64")return i;if(s==="int32"||s==="bool"){for(var u=s==="int32"?new Int32Array(i.length):new Uint8Array(i.length),c=0;c<u.length;++c)u[c]=Math.round(i[c]);return u}throw new Error("Unknown dtype "+s)}(t,a)),o.values},n.prototype.acquireTexture=function(e,t,o,a){if(this.numBytesInGPU+=this.computeBytes(e,o),!this.warnedAboutMemory&&this.numBytesInGPU>1024*this.numMBBeforeWarning*1024){var i=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn("High memory usage in GPU: "+i+" MB, most likely due to a memory leak")}return this.textureManager.acquireTexture(e,t,a)},n.prototype.computeBytes=function(e,t){return e[0]*e[1]*Ms(t)},n}(ru);Us()&&T.registerBackend("webgl",function(){return new Wp},2);var Vp=D({square_:function(r){var n=_(r,"x","square"),e=[n];return T.runKernelFunc(function(t,o){return o([n]),t.square(n)},{x:n},null,"Square",{},e,[])}}),sr="SquaredDifference",Cu=D({squaredDifference_:function(r,n){var e,t=_(r,"a","squaredDifference"),o=_(n,"b","squaredDifference");e=Ie(t,o),t=e[0],o=e[1],le(t.shape,o.shape);var a={a:t,b:o},i=[t,o];return T.runKernelFunc(function(s,u){var c=s.squaredDifference(t,o);return u([t,o]),c},a,function(s,u){var c=u[0],l=u[1],h=j(2);return{a:function(){return s.mul(c.sub(l).mul(h))},b:function(){return s.mul(l.sub(c).mul(h))}}},sr,{},i,[])}}),Up=D({abs_:function(r){var n=_(r,"x","abs");return n.dtype==="complex64"?T.runKernelFunc(function(e){return e.complexAbs(n)},{$x:n}):T.runKernelFunc(function(e,t){var o=e.abs(n);return t([n]),o},{x:n},function(e,t){var o=t[0];return{x:function(){return e.mul(o.toFloat().step(-1))}}},"Abs")}}),zp=D({acos_:function(r){var n=_(r,"x","acos");return T.runKernelFunc(function(e,t){var o=e.acos(n);return t([n]),o},{$x:n},function(e,t){var o=t[0];return{$x:function(){return e.divStrict(j(1).sub(o.toFloat().square()).sqrt()).neg()}}})}}),Gp=D({acosh_:function(r){var n=_(r,"x","acosh");return T.runKernelFunc(function(e,t){var o=e.acosh(n);return t([n]),o},{$x:n},function(e,t){var o=t[0];return{$x:function(){return e.divStrict(o.toFloat().square().sub(1).sqrt())}}})}}),Hp=D({asin_:function(r){var n=_(r,"x","asin");return T.runKernelFunc(function(e,t){var o=e.asin(n);return t([n]),o},{$x:n},function(e,t){var o=t[0];return{$x:function(){return e.divStrict(j(1).sub(o.toFloat().square()).sqrt())}}})}}),jp=D({asinh_:function(r){var n=_(r,"x","asinh");return T.runKernelFunc(function(e,t){var o=e.asinh(n);return t([n]),o},{$x:n},function(e,t){var o=t[0];return{$x:function(){return e.divStrict(j(1).add(o.toFloat().square()).sqrt())}}})}}),qp=D({atan_:function(r){var n=_(r,"x","atan");return T.runKernelFunc(function(e,t){var o=e.atan(n);return t([n]),o},{$x:n},function(e,t){var o=t[0];return{$x:function(){return e.div(o.toFloat().square().add(1))}}})}}),Kp=D({atanh_:function(r){var n=_(r,"x","atanh");return T.runKernelFunc(function(e,t){var o=e.atanh(n);return t([n]),o},{$x:n},function(e,t){var o=t[0];return{$x:function(){return e.div(j(1).sub(o.toFloat().square()))}}})}}),Xp=D({ceil_:function(r){var n=_(r,"x","ceil");return T.runKernelFunc(function(e){return e.ceil(n)},{$x:n},function(e){return{$x:function(){return ve(e)}}})}}),Wa=D({clipByValue_:function(r,n,e){var t=_(r,"x","clipByValue");E(n<=e,function(){return"Error in clip: min ("+n+") must be less than or equal to max ("+e+")."});var o=[t],a={min:n,max:e};return T.runKernelFunc(function(i,s){var u=i.clip(t,n,e);return s([t]),u},{x:t},function(i,s){var u=s[0];return{x:function(){return i.where(u.greaterEqual(n).logicalAnd(u.lessEqual(e)),ve(i))}}},"ClipByValue",a,o)}}),Yp=D({cos_:function(r){var n=_(r,"x","cos"),e=[n];return T.runKernelFunc(function(t,o){var a=t.cos(n);return o([n]),a},{x:n},function(t,o){var a=o[0];return{x:function(){return a.toFloat().sin().neg().mul(t)}}},"Cos",{},e)}}),$p=D({cosh_:function(r){var n=_(r,"x","cosh");return T.runKernelFunc(function(e,t){var o=e.cosh(n);return t([n]),o},{$x:n},function(e,t){var o=t[0];return{$x:function(){return o.toFloat().sinh().mulStrict(e)}}})}}),Jp=D({erf_:function(r){var n=_(r,"x","erf");return E(n.dtype==="int32"||n.dtype==="float32",function(){return"Input dtype must be `int32` or `float32`."}),n.dtype==="int32"&&(n=n.toFloat()),T.runKernelFunc(function(e,t){var o=e.erf(n);return t([n]),o},{$x:n},function(e,t){var o=t[0];return{$x:function(){return e.mul(o.square().neg().exp().mul(2/Math.sqrt(Math.PI)))}}})}}),va=D({exp_:function(r){var n=_(r,"x","exp");return T.runKernelFunc(function(e,t){var o=e.exp(n);return t([o]),o},{x:n},function(e,t){return{x:function(){return e.mulStrict(t[0])}}},"Exp",{},[],[!0])}}),Qp=D({expm1_:function(r){var n=_(r,"x","expm1");return T.runKernelFunc(function(e,t){var o=e.expm1(n);return t([n]),o},{$x:n},function(e,t){var o=t[0];return{$x:function(){return e.mul(o.exp())}}})}}),Zp=D({floor_:function(r){var n=_(r,"x","floor");return T.runKernelFunc(function(e){return e.floor(n)},{$x:n},function(e){return{$x:function(){return ve(e)}}})}}),ed=D({log_:function(r){var n=_(r,"x","log"),e=[n];return T.runKernelFunc(function(t,o){var a=t.log(n);return o([n]),a},{x:n},function(t,o){var a=o[0];return{x:function(){return t.div(a.toFloat())}}},"Log",{},e)}}),td=D({log1p_:function(r){var n=_(r,"x","log1p");return T.runKernelFunc(function(e,t){var o=e.log1p(n);return t([n]),o},{$x:n},function(e,t){var o=t[0];return{$x:function(){return e.div(o.add(1))}}})}}),nd=D({logSigmoid_:function(r){var n=_(r,"x","logSigmoid");return T.runKernelFunc(function(e,t){var o=e.softplus(n.neg()).neg();return t([n]),o},{$x:n},function(e,t){var o=t[0];return{$x:function(){return e.mul(o.neg().sigmoid())}}})}}),Qr=D({neg_:function(r){var n=_(r,"x","neg"),e=[n];return T.runKernelFunc(function(t){return t.neg(n)},{x:n},function(t){return{x:function(){return t.neg()}}},"Neg",{},e)}}),rd=D({reciprocal_:function(r){var n=_(r,"x","reciprocal");return T.runKernelFunc(function(e,t){var o=e.reciprocal(n);return t([n]),o},{$x:n},function(e,t){var o=t[0];return{$x:function(){return e.div(o.square().neg())}}})}}),od=D({round_:function(r){var n=_(r,"x","round");return T.runKernelFunc(function(e){return e.round(n)},{$x:n},function(e){return{$x:function(){return ve(e)}}})}}),_u=D({rsqrt_:function(r){var n=_(r,"x","rsqrt"),e=[n];return T.runKernelFunc(function(t,o){var a=t.rsqrt(n);return o([n]),a},{x:n},function(t,o){var a=o[0];return{x:function(){return t.div(a.pow(1.5).mul(2)).neg()}}},"Rsqrt",{},e)}}),Eu=D({sigmoid_:function(r){var n=_(r,"x","sigmoid");return T.runKernelFunc(function(e,t){var o=e.sigmoid(n);return t([o]),o},{x:n},function(e,t){var o=t[0];return{x:function(){return e.mul(o.mul(j(1).sub(o)))}}},"Sigmoid")}}),ad=D({sign_:function(r){var n=_(r,"x","sign");return T.runKernelFunc(function(e){return e.sign(n)},{$x:n},function(e){return{$x:function(){return ve(e)}}})}}),id=D({isNaN_:function(r){var n=_(r,"x","isNaN");return T.runKernelFunc(function(e){return e.isNaN(n)},{$x:n},function(e){return{$x:function(){return ve(e)}}})}}),sd=D({isInf_:function(r){var n=_(r,"x","isInf");return T.runKernelFunc(function(e){return e.isInf(n)},{$x:n},function(e){return{$x:function(){return ve(e)}}})}}),ud=D({isFinite_:function(r){var n=_(r,"x","isFinite");return T.runKernelFunc(function(e){return e.isFinite(n)},{$x:n},function(e){return{$x:function(){return ve(e)}}})}}),cd=D({sin_:function(r){var n=_(r,"x","sin"),e=[n];return T.runKernelFunc(function(t,o){var a=t.sin(n);return o([n]),a},{x:n},function(t,o){var a=o[0];return{x:function(){return a.toFloat().cos().mul(t)}}},"Sin",{},e)}}),ld=D({sinh_:function(r){var n=_(r,"x","sinh");return T.runKernelFunc(function(e,t){var o=e.sinh(n);return t([n]),o},{$x:n},function(e,t){var o=t[0];return{$x:function(){return o.toFloat().cosh().mulStrict(e)}}})}}),hd=D({softplus_:function(r){var n=_(r,"x","softplus");return T.runKernelFunc(function(e,t){var o=e.softplus(n);return t([n]),o},{$x:n},function(e,t){var o=t[0];return{$x:function(){return e.mul(o.sigmoid())}}})}}),fd=D({sqrt_:function(r){var n=_(r,"x","sqrt");return T.runKernelFunc(function(e,t){var o=e.sqrt(n);return t([n]),o},{$x:n},function(e,t){var o=t[0];return{$x:function(){return e.div(o.toFloat().sqrt().mul(2))}}})}}),pd=D({step_:function(r,n){n===void 0&&(n=0);var e=_(r,"x","step");return T.runKernelFunc(function(t){return t.step(e,n)},{$x:e},function(t){return{$x:function(){return ve(t)}}})}}),dd=D({tan_:function(r){var n=_(r,"x","tan");return T.runKernelFunc(function(e,t){var o=e.tan(n);return t([n]),o},{$x:n},function(e,t){var o=t[0];return{$x:function(){return e.div(o.cos().square())}}})}}),vd=D({tanh_:function(r){var n=_(r,"x","tanh");return T.runKernelFunc(function(e,t){var o=e.tanh(n);return t([o]),o},{x:n},function(e,t){var o=t[0];return{x:function(){return j(1).sub(o.square()).mulStrict(e)}}},"Tanh",{},null,[!0])}});function Ru(r,n,e,t,o,a){var i,s,u=_(r,"x","batchNorm"),c=_(n,"mean","batchNorm"),l=_(e,"variance","batchNorm");return o!=null&&(i=_(o,"scale","batchNorm")),t!=null&&(s=_(t,"offset","batchNorm")),E(u.rank===2,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),E(c.rank===2||c.rank===1,function(){return"Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank "+c.rank+"."}),E(l.rank===2||l.rank===1,function(){return"Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank "+l.rank+"."}),i!=null&&E(i.rank===2||i.rank===1,function(){return"Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank "+i.rank+"."}),s!=null&&E(s.rank===2||s.rank===1,function(){return"Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank "+s.rank+"."}),mr(u,c,l,s,i,a)}function Iu(r,n,e,t,o,a){var i,s,u=_(r,"x","batchNorm"),c=_(n,"mean","batchNorm"),l=_(e,"variance","batchNorm");return o!=null&&(i=_(o,"scale","batchNorm")),t!=null&&(s=_(t,"offset","batchNorm")),E(u.rank===3,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),E(c.rank===3||c.rank===1,function(){return"Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank "+c.rank+"."}),E(l.rank===3||l.rank===1,function(){return"Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank "+l.rank+"."}),i!=null&&E(i.rank===3||i.rank===1,function(){return"Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank "+i.rank+"."}),s!=null&&E(s.rank===3||s.rank===1,function(){return"Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank "+s.rank+"."}),mr(u,c,l,s,i,a)}function ku(r,n,e,t,o,a){var i,s,u=_(r,"x","batchNorm"),c=_(n,"mean","batchNorm"),l=_(e,"variance","batchNorm");return o!=null&&(i=_(o,"scale","batchNorm")),t!=null&&(s=_(t,"offset","batchNorm")),E(u.rank===4,function(){return"Error in batchNorm4D: x must be rank 4 but got rank "+u.rank+"."}),E(c.rank===4||c.rank===1,function(){return"Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank "+c.rank+"."}),E(l.rank===4||l.rank===1,function(){return"Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank "+l.rank+"."}),i!=null&&E(i.rank===4||i.rank===1,function(){return"Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank "+i.rank+"."}),s!=null&&E(s.rank===4||s.rank===1,function(){return"Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank "+s.rank+"."}),mr(u,c,l,s,i,a)}function mr(r,n,e,t,o,a){a==null&&(a=.001);var i,s,u,c=_(r,"x","batchNorm"),l=_(n,"mean","batchNorm"),h=_(e,"variance","batchNorm");o!=null&&(i=_(o,"scale","batchNorm")),t!=null&&(s=_(t,"offset","batchNorm")),E(l.rank===h.rank,function(){return"Batch normalization gradient requires mean and variance to have equal ranks."}),E(s==null||l.rank===s.rank,function(){return"Batch normalization gradient requires mean and offset to have equal ranks."}),E(i==null||l.rank===i.rank,function(){return"Batch normalization gradient requires mean and scale to have equal ranks."}),u=c.rank===0||c.rank===1?c.as4D(1,1,1,c.size):c.rank===2?c.as4D(1,1,c.shape[0],c.shape[1]):c.rank===3?c.as4D(1,c.shape[0],c.shape[1],c.shape[2]):c;var f=[c,l,h,i];return T.runKernelFunc(function(p,d){var m=p.batchNormalization(u,Tr(l),Tr(h),a,Tr(i),Tr(s));return d([c,l,h,i]),m},{x:c,mean:l,variance:h,scale:i,offset:s},function(p,d){var m=d,v=m[0],g=m[1],x=m[2],b=m[3],y=b??j(1),w=Pe(g.shape,u.shape),C=[];if(g.rank===1){for(var S=0;S<u.shape.length-1;++S)C.push(u.shape[S]);C.push(1)}var k=v.sub(g),R=p.mul(y),I=_u(x.add(j(a))),N=I.mul(I).mul(I).mul(j(-.5));return{x:function(){return g.rank===1?p.mul(Bn(I.as4D(1,1,1,g.shape[0]),C)).mul(y).reshape(v.shape):p.mul(I).mul(y).reshape(v.shape)},mean:function(){var A=I.mul(j(-1)).mul(R);return g.rank===1&&(A=A.sum(w)),A.reshape(g.shape)},variance:function(){var A=N.mul(k).mul(R);return g.rank===1&&(A=A.sum(w)),A.reshape(g.shape)},scale:function(){var A=k.mul(I),L=p.mul(A);return g.rank===1&&(L=L.sum(w)),L.reshape(g.shape)},offset:function(){var A=p;return g.rank===1&&(A=A.sum(w)),A.reshape(g.shape)}}},"BatchNormalization",{varianceEpsilon:a},f).reshape(c.shape)}function Tr(r){return r==null?null:r.rank===0?r.as1D():r.rank===1?r:r.rank===2?r.as4D(1,1,r.shape[0],r.shape[1]):r.rank===3?r.as4D(1,r.shape[0],r.shape[1],r.shape[2]):r}function co(){zs("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon")}var md=D({batchNormalization2d_:function(r,n,e,t,o,a){return t===void 0&&(t=.001),co(),Ru(r,n,e,a,o,t)}}),gd=D({batchNormalization3d_:function(r,n,e,t,o,a){return t===void 0&&(t=.001),co(),Iu(r,n,e,a,o,t)}}),yd=D({batchNormalization4d_:function(r,n,e,t,o,a){return t===void 0&&(t=.001),co(),ku(r,n,e,a,o,t)}}),xd=D({batchNormalization_:function(r,n,e,t,o,a){return t===void 0&&(t=.001),co(),mr(r,n,e,a,o,t)}}),Su=D({batchNorm_:mr}),bd=D({batchNorm2d_:Ru}),wd=D({batchNorm3d_:Iu}),Cd=D({batchNorm4d_:ku}),lo=D({logicalAnd_:function(r,n){var e=_(r,"a","logicalAnd","bool"),t=_(n,"b","logicalAnd","bool");return le(e.shape,t.shape),T.runKernelFunc(function(o){return o.logicalAnd(e,t)},{a:e,b:t},null,"LogicalAnd")}}),_d=D({logicalNot_:function(r){var n=_(r,"x","logicalNot","bool");return T.runKernelFunc(function(e){return e.logicalNot(n)},{$x:n})}}),Du=D({logicalOr_:function(r,n){var e=_(r,"a","logicalOr","bool"),t=_(n,"b","logicalOr","bool");return le(e.shape,t.shape),T.runKernelFunc(function(o){return o.logicalOr(e,t)},{$a:e,$b:t})}}),Ed=D({logicalXor_:function(r,n){var e=_(r,"a","logicalXor","bool"),t=_(n,"b","logicalXor","bool");return le(e.shape,t.shape),Du(r,n).logicalAnd(lo(r,n).logicalNot())}}),xn=D({where_:function(r,n,e){var t=_(n,"a","where"),o=_(e,"b","where"),a=_(r,"condition","where","bool");return ye(t.shape,o.shape,"Error in where: "),a.rank===1?E(a.shape[0]===t.shape[0],function(){return"The first dimension of `a` must match the size of `condition`."}):ye(a.shape,o.shape,"Error in where: "),T.runKernelFunc(function(i,s){var u=i.select(a,t,o);return s([a]),u},{$condition:a,$a:t,$b:o},function(i,s){var u=s[0];return{$condition:function(){return ve(u).toFloat()},$a:function(){return i.mul(u.cast(i.dtype))},$b:function(){return i.mul(u.logicalNot().cast(i.dtype))}}})}}),Au=function(r){return X(this,void 0,void 0,function(){var n,e,t;return Y(this,function(o){switch(o.label){case 0:return[4,(n=_(r,"condition","whereAsync","bool")).data()];case 1:return e=o.sent(),t=Pa(n.shape,e),r!==n&&n.dispose(),[2,t]}})})},ue=D({add_:function(r,n){var e,t=_(r,"a","add"),o=_(n,"b","add");e=Ie(t,o),t=e[0],o=e[1];var a=le(t.shape,o.shape);return T.runKernelFunc(function(i){return i.add(t,o)},{a:t,b:o},function(i){return{a:function(){var s=i,u=Pe(t.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(t.shape)},b:function(){var s=i,u=Pe(o.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(o.shape)}}},"Add")}}),Rd=D({addN_:function(r){E(Array.isArray(r),function(){return"The argument passed to tf.addN() must be a list of tensors"}),E(r.length>=1,function(){return"Must pass at least one tensor to tf.addN(), but got "+r.length});var n=r.map(function(o,a){return _(o,"tensors"+a,"addN")}),e=n[0];n.forEach(function(o){if(o.dtype!==e.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),n.forEach(function(o){if(!We(o.shape,e.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});var t=n;return T.runKernelFunc(function(o){return o.addN(n)},t,function(o){var a={};return n.forEach(function(i,s){a[s]=function(){return o.clone()}}),a},"AddN")}}),Id=D({addStrict_:function(r,n){var e=_(r,"a","addStrict"),t=_(n,"b","addStrict");return ye(e.shape,t.shape,"Error in addStrict: "),e.add(t)}}),kd=D({atan2_:function(r,n){var e,t=_(r,"a","atan2"),o=_(n,"b","atan2");e=Ie(t,o),t=e[0],o=e[1];var a=le(t.shape,o.shape);return T.runKernelFunc(function(i,s){var u=i.atan2(t,o);return s([t,o]),u},{$a:t,$b:o},function(i,s){var u=s[0],c=s[1];return{$a:function(){var l=ue(u.square(),c.square()),h=i.mul(c.div(l)),f=Pe(u.shape,a);return f.length>0&&(h=h.sum(f)),h.reshape(u.shape)},$b:function(){var l=ue(u.square(),c.square()),h=Qr(i.mul(u.div(l))),f=Pe(c.shape,a);return f.length>0&&(h=h.sum(f)),h.reshape(c.shape)}}})}}),mt=D({div_:function(r,n){var e,t=_(r,"a","div"),o=_(n,"b","div");if(e=Ie(t,o),t=e[0],o=e[1],t.dtype==="int32"&&o.dtype==="int32")return Tu(t,o);var a=le(t.shape,o.shape);return T.runKernelFunc(function(i,s){var u=i.realDivide(t,o);return s([t,o]),u},{a:t,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.div(c.toFloat()),h=Pe(u.shape,a);return h.length>0?l.sum(h).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),h=Pe(c.shape,a);h.length>0&&(l=l.sum(h).reshape(c.shape));var f=c.square();return l.div(f.toFloat()).neg()}}},"Div")}}),Sd=D({divNoNan_:function(r,n){var e,t=_(r,"a","div"),o=_(n,"b","div");t=(e=Ie(t,o))[0],o=e[1];var a=mt(t,o),i=ve(a),s=o.equal(i);return xn(s,i,a)}}),Dd=D({divStrict_:function(r,n){var e=_(r,"a","div"),t=_(n,"b","div");return ye(e.shape,t.shape,"Error in divideStrict: "),e.div(t)}}),Tu=D({floorDiv_:function(r,n){var e,t=_(r,"a","floorDiv"),o=_(n,"b","floorDiv");e=Ie(t,o),t=e[0],o=e[1];var a=le(t.shape,o.shape);return T.runKernelFunc(function(i,s){var u=i.floorDiv(t,o);return s([t,o]),u},{a:t,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.div(c.toFloat()),h=Pe(u.shape,a);return h.length>0?l.sum(h).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),h=Pe(c.shape,a);h.length>0&&(l=l.sum(h).reshape(c.shape));var f=c.square();return l.div(f.toFloat()).neg()}}},"FloorDiv")}}),Va=D({maximum_:function(r,n){var e,t=_(r,"a","maximum"),o=_(n,"b","maximum");return e=Ie(t,o),t=e[0],o=e[1],t.dtype==="bool"&&(t=t.toInt(),o=o.toInt()),le(t.shape,o.shape),T.runKernelFunc(function(a,i){var s=a.maximum(t,o);return i([t,o]),s},{a:t,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return a.mul(s.greaterEqual(u).toFloat())},b:function(){return a.mul(s.less(u).toFloat())}}},"Maximum")}}),Ad=D({maximumStrict_:function(r,n){var e=_(r,"a","maximumStrict"),t=_(n,"b","maximumStrict");return ye(e.shape,t.shape,"Error in maximumStrict: "),e.maximum(t)}}),Nu=D({minimum_:function(r,n){var e,t=_(r,"a","minimum"),o=_(n,"b","minimum");return e=Ie(t,o),t=e[0],o=e[1],t.dtype==="bool"&&(t=t.toInt(),o=o.toInt()),le(t.shape,o.shape),T.runKernelFunc(function(a,i){var s=a.minimum(t,o);return i([t,o]),s},{a:t,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return a.mul(s.lessEqual(u).toFloat())},b:function(){return a.mul(s.greater(u).toFloat())}}},"Minimum")}}),Td=D({minimumStrict_:function(r,n){var e=_(r,"a","minimumStrict"),t=_(n,"b","minimumStrict");return ye(e.shape,t.shape,"Error in minimumStrict: "),e.minimum(t)}}),Nd=D({mod_:function(r,n){var e,t=_(r,"a","mod"),o=_(n,"b","mod");e=Ie(t,o),t=e[0],o=e[1];var a=le(t.shape,o.shape);return T.runKernelFunc(function(i,s){var u=i.mod(t,o);return s([t,o]),u},{$a:t,$b:o},function(i,s){var u=s[0],c=s[1];return{$a:function(){var l=Pe(u.shape,a);return l.length>0?i.sum(l).reshape(u.shape):i},$b:function(){var l=i.mul(u.div(c).floor().neg()),h=Pe(c.shape,a);return h.length>0?l.sum(h).reshape(c.shape):l}}})}}),Fd=D({modStrict_:function(r,n){var e=_(r,"a","modStrict"),t=_(n,"b","modStrict");return ye(e.shape,t.shape,"Error in modStrict: "),e.mod(t)}}),Je=D({mul_:function(r,n){var e,t=_(r,"a","mul"),o=_(n,"b","mul");e=Ie(t,o),t=e[0],o=e[1];var a=le(t.shape,o.shape);return T.runKernelFunc(function(i,s){var u=i.multiply(t,o);return s([t,o]),u},{a:t,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.mul(c.toFloat()),h=Pe(u.shape,a);return h.length>0?l.sum(h).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),h=Pe(c.shape,a);return h.length>0?l.sum(h).reshape(c.shape):l}}},"Mul")}}),Md=D({mulStrict_:function(r,n){var e=_(r,"a","mul"),t=_(n,"b","mul");return ye(e.shape,t.shape,"Error in multiplyStrict: "),e.mul(t)}}),Zr=D({pow_:function(r,n){var e,t=_(r,"base","pow"),o=_(n,"exp","pow");e=Ie(t,o),t=e[0],o=e[1];var a=le(t.shape,o.shape),i=[t,o];return T.runKernelFunc(function(s,u){var c=s.pow(t,o);return u([t,o,c]),c},{a:t,b:o},function(s,u){var c=u[0],l=u[1],h=u[2];return{a:function(){var f=l.toFloat(),p=s.mul(f.mul(c.pow(f.sub(j(1))))),d=Pe(c.shape,a);return d.length>0&&(p=p.sum(d)),p.reshape(c.shape)},b:function(){var f=c.greater(0),p=c.log().where(f,ve(c)),d=s.mul(h.mul(p)),m=Pe(l.shape,a);return m.length>0&&(d=d.sum(m)),d.reshape(l.shape)}}},"Pow",{},i,[!0])}}),Pd=D({powStrict_:function(r,n){return ye(r.shape,n.shape,"Error in powStrict: "),r.pow(n)}}),Od=D({squaredDifferenceStrict_:function(r,n){var e=_(r,"a","squaredDifferenceStrict"),t=_(n,"b","squaredDifferenceStrict");return ye(e.shape,t.shape,"Error in squaredDifferenceStrict: "),e.squaredDifference(t)}}),Oe=D({sub_:function(r,n){var e,t=_(r,"a","sub"),o=_(n,"b","sub");e=Ie(t,o),t=e[0],o=e[1];var a=le(t.shape,o.shape);return T.runKernelFunc(function(i){return i.subtract(t,o)},{a:t,b:o},function(i){return{a:function(){var s=i,u=Pe(t.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(t.shape)},b:function(){var s=i,u=Pe(o.shape,a);return u.length>0&&(s=s.sum(u)),s.neg().reshape(o.shape)}}},"Sub")}}),Bd=D({subStrict_:function(r,n){var e=_(r,"a","subStrict"),t=_(n,"b","subStrict");return ye(e.shape,t.shape,"Error in subStrict: "),e.sub(t)}}),Fu=D({equal_:function(r,n){var e,t=_(r,"a","equal"),o=_(n,"b","equal");return e=Ie(t,o),t=e[0],o=e[1],le(t.shape,o.shape),T.runKernelFunc(function(a){return a.equal(t,o)},{$a:t,$b:o})}}),Ld=D({equalStrict_:function(r,n){var e=_(r,"a","equalStrict"),t=_(n,"b","equalStrict");return ye(e.shape,t.shape,"Error in equalStrict: "),e.equal(t)}}),Wd=D({greater_:function(r,n){var e,t=_(r,"a","greater"),o=_(n,"b","greater");return e=Ie(t,o),t=e[0],o=e[1],le(t.shape,o.shape),T.runKernelFunc(function(a){return a.greater(t,o)},{a:t,b:o},null,"Greater")}}),Mu=D({greaterEqual_:function(r,n){var e,t=_(r,"a","greaterEqual"),o=_(n,"b","greaterEqual");return e=Ie(t,o),t=e[0],o=e[1],le(t.shape,o.shape),T.runKernelFunc(function(a,i){var s=a.greaterEqual(t,o);return i([t,o]),s},{a:t,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return ve(s)},b:function(){return ve(u)}}},"GreaterEqual")}}),Vd=D({greaterEqualStrict_:function(r,n){var e=_(r,"a","greaterEqualStrict"),t=_(n,"b","greaterEqualStrict");return ye(e.shape,t.shape,"Error in greaterEqualStrict: "),e.greaterEqual(t)}}),Ud=D({greaterStrict_:function(r,n){var e=_(r,"a","greaterStrict"),t=_(n,"b","greaterStrict");return ye(e.shape,t.shape,"Error in greaterStrict: "),e.greater(t)}}),zd=D({less_:function(r,n){var e,t=_(r,"a","less"),o=_(n,"b","less");return e=Ie(t,o),t=e[0],o=e[1],le(t.shape,o.shape),T.runKernelFunc(function(a){return a.less(t,o)},{a:t,b:o},null,"Less")}}),Gd=D({lessEqual_:function(r,n){var e,t=_(r,"a","lessEqual"),o=_(n,"b","lessEqual");return e=Ie(t,o),t=e[0],o=e[1],le(t.shape,o.shape),T.runKernelFunc(function(a,i){var s=a.lessEqual(t,o);return i([t,o]),s},{a:t,b:o},null,"LessEqual")}}),Hd=D({lessEqualStrict_:function(r,n){var e=_(r,"a","lessEqualStrict"),t=_(n,"b","lessEqualStrict");return ye(e.shape,t.shape,"Error in lessEqualStrict: "),e.lessEqual(t)}}),jd=D({lessStrict_:function(r,n){var e=_(r,"a","lessStrict"),t=_(n,"b","lessStrict");return ye(e.shape,t.shape,"Error in lessStrict: "),e.less(t)}}),qd=D({notEqual_:function(r,n){var e,t=_(r,"a","notEqual"),o=_(n,"b","notEqual");return e=Ie(t,o),t=e[0],o=e[1],le(t.shape,o.shape),T.runKernelFunc(function(a){return a.notEqual(t,o)},{a:t,b:o},null,"NotEqual")}}),Kd=D({notEqualStrict_:function(r,n){var e=_(r,"a","notEqualStrict"),t=_(n,"b","notEqualStrict");return ye(e.shape,t.shape,"Error in notEqualStrict: "),e.notEqual(t)}});function as(r,n){for(var e=[],t=r;t<n;++t)e.push(t);return e}function is(r){for(var n=[],e=0;e<r.length;++e)for(var t=0;t<r[e].length;++t)n.push(r[e][t]);return n}var Ua=D({gather_:function(r,n,e){e===void 0&&(e=0);var t=_(r,"x","gather"),o=_(n,"indices","gather","int32");e=Be(e,t.shape)[0];var a=function(i,s,u){for(var c=i.shape[u],l=[],h=1,f=1,p=0;p<u;p++)l.push(i.shape[p]),h*=i.shape[p];for(p=0;p<s.rank;p++)l.push(s.shape[p]);for(p=u+1;p<i.rank;p++)l.push(i.shape[p]),f*=i.shape[p];return{batchSize:h,sliceSize:f,dimSize:c,outputShape:l}}(t,o,e);return T.runKernelFunc(function(i,s){var u=i.gather(t,o.flatten(),e);return s([o]),u},{x:t,indices:o},function(i,s){var u=s[0];return{x:function(){var c=t.shape,l=u.size,h=c.slice(0,e),f=h.length,p=c.slice(e,c.length).slice(1),d=p.length,m=as(0,f),v=as(f+1,f+1+d),g=is([h,[l],p]),x=i.reshape(g),b=u.reshape([l]),y=is([[f],m,v]),w=x.transpose(y),C=Pu(w,b,t.shape[e]),S=ka(y);return C=C.transpose(S)},indices:function(){return u}}},"Gather",{axis:e}).reshape(a.outputShape)}}),Pu=D({unsortedSegmentSum_:function(r,n,e){var t=_(r,"x","unsortedSegmentSum"),o=_(n,"segmentIds","unsortedSegmentSum","int32");return E(De(e),function(){return"numSegments must be of dtype int"}),T.runKernelFunc(function(a,i){var s=a.unsortedSegmentSum(t,o,e);return i([o]),s},{$x:t},function(a,i){var s=i[0];return{$x:function(){return function(u,c){for(var l=Va(c,ve(c)),h=Ua(u,l),f=Mu(c,j(0,"int32")),p=h.rank-f.rank,d=0;d<p;++d)f=ft(f,d+1);f=lo(f,Xn(h.shape,"bool"));var m=ve(h);return xn(f,h,m)}(a,s)}}})}}),Xd=function(r,n,e){return X(this,void 0,void 0,function(){var t,o,a,i,s,u,c,l,h,f,p,d,m;return Y(this,function(v){switch(v.label){case 0:for(t=_(r,"tensor","boolMask"),o=_(n,"mask","boolMask","bool"),a=e??0,i=o.rank,s=t.shape,E(i>0,function(){return"mask cannot be scalar"}),ye(s.slice(a,a+i),o.shape,"mask's shape must match the first K dimensions of tensor's shape,"),u=1,c=a;c<a+i;c++)u*=s[c];return l=s.slice(0,a).concat([u],s.slice(a+i)),h=t.reshape(l),f=o.reshape([-1]),[4,Au(f)];case 1:return p=v.sent(),d=p.squeeze([1]),m=Ua(h,d,a),r!==t&&t.dispose(),n!==o&&o.dispose(),d.dispose(),h.dispose(),f.dispose(),p.dispose(),[2,m]}})})};function Ou(r,n,e,t,o,a,i){a===void 0&&(a="NHWC"),E(r.length===n.rank,function(){return"Length of inShape ("+r.length+") and rank of dy ("+n.rank+") must match"});var s=r,u=n,c=!1;n.rank===3&&(c=!0,u=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]),s=[1,r[0],r[1],r[2]]),E(s.length===4,function(){return"Error in conv2dDerInput: inShape must be length 4, but got length "+s.length+"."}),E(u.rank===4,function(){return"Error in conv2dDerInput: dy must be rank 4, but got rank "+u.rank}),E(e.rank===4,function(){return"Error in conv2dDerInput: filter must be rank 4, but got rank "+e.rank});var l=a==="NHWC"?s[3]:s[1],h=a==="NHWC"?u.shape[3]:u.shape[1];E(l===e.shape[2],function(){return"Error in conv2dDerInput: depth of input ("+l+") must match input depth for filter "+e.shape[2]+"."}),E(h===e.shape[3],function(){return"Error in conv2dDerInput: depth of output ("+h+") must match output depth for filter "+e.shape[3]+"."}),i!=null&&E(De(o),function(){return"Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var f=Na(a),p=Cn(s,e.shape,t,1,o,i,!1,f),d=T.runKernelFunc(function(m,v){var g=m.conv2dDerInput(u,e,p);return v([e,u]),g},{dy4D:u,filter:e},function(m,v){var g=v[0],x=v[1];return{dy4D:function(){return vt(m,g,t,o,a,1,i)},filter:function(){return za(m,x,g.shape,t,o,a,i)}}});return c?d.as3D(d.shape[1],d.shape[2],d.shape[3]):d}function Ho(r){var n=function(a){return typeof a=="number"?[a,a,a]:a.length===2?[a[0],a[1],1]:a}(r),e=n[0],t=n[1],o=n[2];return e===1&&t===1&&o===1}function Bu(r,n,e,t,o){E(r.length===n.rank,function(){return"Length of inShape ("+r.length+") and rank of dy ("+n.rank+") must match"});var a=r,i=n,s=!1;n.rank===4&&(s=!0,i=n.as5D(1,n.shape[0],n.shape[1],n.shape[2],n.shape[3]),a=[1,r[0],r[1],r[2],r[3]]);var u=a[4],c=i.shape[4];E(a.length===5,function(){return"Error in conv3dDerInput: inShape must be length 5, but got length "+a.length+"."}),E(i.rank===5,function(){return"Error in conv3dDerInput: dy must be rank 5, but got rank "+i.rank}),E(e.rank===5,function(){return"Error in conv3dDerInput: filter must be rank 5, but got rank "+e.rank}),E(u===e.shape[3],function(){return"Error in conv3dDerInput: depth of input ("+u+") must match input depth for filter "+e.shape[3]+"."}),E(c===e.shape[4],function(){return"Error in conv3dDerInput: depth of output ("+c+") must match output depth for filter "+e.shape[4]+"."});var l=$r(a,e.shape,t,1,o),h=T.runKernelFunc(function(f){return f.conv3dDerInput(i,e,l)},{dy5D:i});return s?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}var Yd=D({conv1d_:function(r,n,e,t,o,a,i){o===void 0&&(o="NWC"),a===void 0&&(a=1);var s=_(r,"x","conv1d"),u=_(n,"filter","conv1d"),c=s,l=!1;s.rank===2&&(l=!0,c=s.as3D(1,s.shape[0],s.shape[1])),E(c.rank===3,function(){return"Error in conv1d: input must be rank 3, but got rank "+c.rank+"."}),E(u.rank===3,function(){return"Error in conv1d: filter must be rank 3, but got rank "+u.rank+"."}),i!=null&&E(De(t),function(){return"Error in conv1d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+t+"."}),E(c.shape[2]===u.shape[1],function(){return"Error in conv1d: depth of input ("+c.shape[2]+") must match input depth for filter "+u.shape[1]+"."}),E(nt(e,a),function(){return"Error in conv1D: Either stride or dilation must be 1. Got stride "+e+" and dilation '"+a+"'"}),E(o==="NWC",function(){return"Error in conv1d: got dataFormat of "+o+" but only NWC is currently supported."});var h=u.as4D(1,u.shape[0],u.shape[1],u.shape[2]),f=c.as4D(c.shape[0],1,c.shape[1],c.shape[2]),p=vt(f,h,[1,e],t,"NHWC",[1,a],i);return l?p.as2D(p.shape[2],p.shape[3]):p.as3D(p.shape[0],p.shape[2],p.shape[3])}}),vt=D({conv2d_:function(r,n,e,t,o,a,i){o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]);var s=_(r,"x","conv2d"),u=_(n,"filter","conv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),E(c.rank===4,function(){return"Error in conv2d: input must be rank 4, but got rank "+c.rank+"."}),E(u.rank===4,function(){return"Error in conv2d: filter must be rank 4, but got rank "+u.rank+"."}),i!=null&&E(De(t),function(){return"Error in conv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+t+"."});var h=o==="NHWC"?c.shape[3]:c.shape[1];E(h===u.shape[2],function(){return"Error in conv2d: depth of input ("+h+") must match input depth for filter "+u.shape[2]+"."}),E(nt(e,a),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"});var f=Na(o),p=Cn(c.shape,u.shape,e,a,t,i,!1,f),d=[u,c],m=T.runKernelFunc(function(v,g){var x=v.conv2d(c,u,p);return g([u,c]),x},{x:c,filter:u},function(v,g){var x=g,b=x[0],y=x[1];return E(qn(a),function(){return"Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+a+"'"}),{x:function(){return Lu(y.shape,v,b,e,t,o)},filter:function(){return za(y,v,b.shape,e,t,o)}}},"Conv2D",p,d);return l?m.as3D(m.shape[1],m.shape[2],m.shape[3]):m}}),$d=D({conv3d_:function(r,n,e,t,o,a){o===void 0&&(o="NDHWC"),a===void 0&&(a=[1,1,1]);var i=_(r,"x","conv3d"),s=_(n,"filter","conv3d"),u=i,c=!1;i.rank===4&&(c=!0,u=i.as5D(1,i.shape[0],i.shape[1],i.shape[2],i.shape[3])),E(u.rank===5,function(){return"Error in conv3d: input must be rank 5, but got rank "+u.rank+"."}),E(s.rank===5,function(){return"Error in conv3d: filter must be rank 5, but got rank "+s.rank+"."}),E(u.shape[4]===s.shape[3],function(){return"Error in conv3d: depth of input ("+u.shape[4]+") must match input depth for filter "+s.shape[3]+"."}),E(function(f,p){return Ho(f)||Ho(p)}(e,a),function(){return"Error in conv3D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"}),E(o==="NDHWC",function(){return"Error in conv3d: got dataFormat of "+o+" but only NDHWC is currently supported."});var l=$r(u.shape,s.shape,e,a,t),h=T.runKernelFunc(function(f,p){var d=f.conv3d(u,s,l);return p([u,s]),d},{x:u,$filter:s},function(f,p){E(Ho(a),function(){return"Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+a+"'"});var d=p[0],m=p[1];return{x:function(){return Bu(d.shape,f,m,e,t)},$filter:function(){return function(v,g,x,b,y){var w=v;v.rank===4&&(w=v.as5D(1,v.shape[0],v.shape[1],v.shape[2],v.shape[3]));var C=g;C.rank===4&&(C=g.as5D(1,g.shape[0],g.shape[1],g.shape[2],g.shape[3])),E(w.rank===5,function(){return"Error in conv3dDerFilter: input must be rank 5, but got shape "+w.shape+"."}),E(C.rank===5,function(){return"Error in conv3dDerFilter: dy must be rank 5, but got shape "+C.shape+"."}),E(x.length===5,function(){return"Error in conv3dDerFilter: filterShape must be length 5, but got "+x+"."}),E(w.shape[4]===x[3],function(){return"Error in conv3dDerFilter: depth of input "+w.shape[4]+") must match input depth in filter ("+x[3]+"."}),E(C.shape[4]===x[4],function(){return"Error in conv3dDerFilter: depth of dy ("+C.shape[4]+") must match output depth for filter ("+x[4]+")."});var S=$r(w.shape,x,b,1,y);return T.runKernelFunc(function(k){return k.conv3dDerFilter(w,C,S)},{x5D:w,dy5D:C})}(d,f,m.shape,e,t)}}});return c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),za=D({conv2dDerFilter_:function(r,n,e,t,o,a,i){a===void 0&&(a="NHWC");var s=r;r.rank===3&&(s=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var u=n;u.rank===3&&(u=n.as4D(1,n.shape[0],n.shape[1],n.shape[2])),E(s.rank===4,function(){return"Error in conv2dDerFilter: input must be rank 4, but got shape "+s.shape+"."}),E(u.rank===4,function(){return"Error in conv2dDerFilter: dy must be rank 4, but got shape "+u.shape+"."}),E(e.length===4,function(){return"Error in conv2dDerFilter: filterShape must be length 4, but got "+e+"."});var c=a==="NHWC"?s.shape[3]:s.shape[1],l=a==="NHWC"?u.shape[3]:u.shape[1];E(c===e[2],function(){return"Error in conv2dDerFilter: depth of input "+c+") must match input depth in filter ("+e[2]+"."}),E(l===e[3],function(){return"Error in conv2dDerFilter: depth of dy ("+l+") must match output depth for filter ("+e[3]+")."}),i!=null&&E(De(o),function(){return"Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var h=Na(a),f=Cn(s.shape,e,t,1,o,i,!1,h);return T.runKernelFunc(function(p){return p.conv2dDerFilter(s,u,f)},{x4D:s,dy4D:u})}}),Lu=D({conv2dDerInput_:Ou}),ho=D({depthwiseConv2d_:function(r,n,e,t,o,a,i){a===void 0&&(a=[1,1]);var s=_(r,"x","depthwiseConv2d"),u=_(n,"filter","depthwiseConv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),E(c.rank===4,function(){return"Error in depthwiseConv2d: input must be rank 4, but got rank "+c.rank+"."}),E(u.rank===4,function(){return"Error in depthwiseConv2d: filter must be rank 4, but got rank "+u.rank+"."}),E(c.shape[3]===u.shape[2],function(){return"Error in depthwiseConv2d: number of input channels ("+c.shape[3]+") must match the inChannels dimension in filter "+u.shape[2]+"."}),a==null&&(a=[1,1]),E(nt(e,a),function(){return"Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"}),i!=null&&E(De(t),function(){return"Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+t+"."});var h=Cn(c.shape,u.shape,e,a,t,i,!0),f=[c,u],p=T.runKernelFunc(function(d,m){var v=d.depthwiseConv2D(c,u,h);return m([c,u]),v},{x:c,filter:u},function(d,m){E(qn(a),function(){return"Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+a+"'"});var v=m[0],g=m[1];return{x:function(){return Wu(v.shape,d,g,h)},filter:function(){return Vu(v,d,g.shape,h)}}},"DepthwiseConv2dNative",h,f);return l?p.as3D(p.shape[1],p.shape[2],p.shape[3]):p}}),Wu=D({depthwiseConv2dDerInput_:function(r,n,e,t){var o=n,a=!1;n.rank===3&&(a=!0,o=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var i=T.runKernelFunc(function(s){return s.depthwiseConv2DDerInput(o,e,t)},{dy4D:o});return a?i.as3D(i.shape[1],i.shape[2],i.shape[3]):i}}),Vu=D({depthwiseConv2dDerFilter_:function(r,n,e,t){var o=r;r.rank===3&&(o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var a=n;return a.rank===3&&(a=n.as4D(1,n.shape[0],n.shape[1],n.shape[2])),T.runKernelFunc(function(i){return i.depthwiseConv2DDerFilter(o,a,t)},{x4D:o,dy4D:a})}}),Ga=D({separableConv2d_:function(r,n,e,t,o,a,i){a===void 0&&(a=[1,1]),i===void 0&&(i="NHWC");var s=_(r,"x","separableConv2d"),u=_(n,"depthwiseFilter","separableConv2d"),c=_(e,"pointwiseFilter","separableConv2d"),l=s,h=!1;if(s.rank===3&&(h=!0,l=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),i==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");E(l.rank===4,function(){return"Error in separableConv2d: input must be rank 4, but got rank "+l.rank+"."}),E(u.rank===4,function(){return"Error in separableConv2d: depthwise filter must be rank 4, but got rank "+u.rank+"."}),E(c.rank===4,function(){return"Error in separableConv2d: pointwise filter must be rank 4, but got rank "+u.rank+"."}),E(c.shape[0]===1,function(){return"Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got "+c.shape[0]+"."}),E(c.shape[1]===1,function(){return"Error in separableConv2d: the second dimension of pointwise filter must be 1, but got "+c.shape[1]+"."});var f=u.shape[2],p=u.shape[3];E(c.shape[2]===f*p,function(){return"Error in separableConv2d: the third dimension of pointwise filter must be "+f*p+", but got "+c.shape[2]+"."});var d=ho(l,u,t,o,i,a),m=vt(d,c,1,"valid",i);return h?m.as3D(m.shape[1],m.shape[2],m.shape[3]):m}}),Jd=D({conv2dTranspose_:function(r,n,e,t,o,a){return Ou(e,_(r,"x","conv2dTranspose"),_(n,"filter","conv2dTranspose"),t,o,"NHWC",a)}}),Qd=D({conv3dTranspose_:function(r,n,e,t,o){return Bu(e,_(r,"x","conv3dTranspose"),_(n,"filter","conv3dTranspose"),t,o)}}),fo=D({matMul_:function(r,n,e,t){var o;e===void 0&&(e=!1),t===void 0&&(t=!1);var a=_(r,"a","matMul"),i=_(n,"b","matMul");o=Ie(a,i),a=o[0],i=o[1];var s=e?a.shape[a.rank-2]:a.shape[a.rank-1],u=t?i.shape[i.rank-1]:i.shape[i.rank-2],c=e?a.shape[a.rank-1]:a.shape[a.rank-2],l=t?i.shape[i.rank-2]:i.shape[i.rank-1],h=a.shape.slice(0,-2),f=i.shape.slice(0,-2),p=$(h),d=$(f);E(a.rank>=2&&i.rank>=2&&a.rank===i.rank,function(){return"Error in matMul: inputs must have the same rank of at least 2, got ranks "+a.rank+" and "+i.rank+"."}),E(We(h,f),function(){return"Error in matMul: outer dimensions ("+h+") and ("+f+") of Tensors with shapes "+a.shape+" and "+i.shape+" must match."}),E(s===u,function(){return"Error in matMul: inner shapes ("+s+") and ("+u+") of Tensors with shapes "+a.shape+" and "+i.shape+" and transposeA="+e+" and transposeB="+t+" must match."});var m=a.shape.slice(0,-2).concat([c,l]),v=e?a.as3D(p,s,c):a.as3D(p,c,s),g=t?i.as3D(d,l,u):i.as3D(d,u,l),x={transposeA:e,transposeB:t};return T.runKernelFunc(function(b,y){var w=b.batchMatMul(v,g,e,t);return y([v,g]),w},{a:v,b:g},function(b,y){var w=y,C=w[0],S=w[1];return e||t?!e&&t?{a:function(){return b.matMul(S,!1,!1)},b:function(){return b.matMul(C,!0,!1)}}:e&&!t?{a:function(){return S.matMul(b,!1,!0)},b:function(){return C.matMul(b,!1,!1)}}:{a:function(){return S.matMul(b,!0,!0)},b:function(){return b.matMul(C,!0,!0)}}:{a:function(){return b.matMul(S,!1,!0)},b:function(){return C.matMul(b,!0,!1)}}},"BatchMatMul",x).reshape(m)}}),Zd=D({dot_:function(r,n){var e=_(r,"t1","dot"),t=_(n,"t2","dot");E(!(e.rank!==1&&e.rank!==2||t.rank!==1&&t.rank!==2),function(){return"Error in dot: inputs must all be rank 1 or 2, but got ranks "+e.rank+" and "+t.rank+"."});var o=e.rank===1?e.size:e.shape[1],a=t.rank===1?t.size:t.shape[0];return E(o===a,function(){return"Error in dot: inner dimensions of inputs must match, but got "+o+" and "+a+"."}),e.rank===1&&t.rank===1?e.as2D(1,-1).matMul(t.as2D(-1,1)).asScalar():e.rank===1&&t.rank===2?e.as2D(1,-1).matMul(t.as2D(t.shape[0],t.shape[1])).as1D():e.rank===2&&t.rank===1?e.matMul(t.as2D(-1,1)).as1D():e.matMul(t.as2D(t.shape[0],t.shape[1]))}}),ev=D({outerProduct_:function(r,n){var e=_(r,"v1","outerProduct"),t=_(n,"v2","outerProduct");return E(e.rank===1&&t.rank===1,function(){return"Error in outerProduct: inputs must be rank 1, but got ranks "+e.rank+" and "+t.rank+"."}),e.as2D(-1,1).matMul(t.as2D(1,-1))}}),gr=D({reverse_:function(r,n){var e=_(r,"x","reverse");if(e.rank===0)return e.clone();var t=Be(n,e.shape);return T.runKernelFunc(function(o){return o.reverse(e,t)},{$x:e},function(o){return{$x:function(){return o.reverse(t)}}}).reshapeAs(e)}}),tv=D({reverse1d_:function(r){var n=_(r,"x","reverse");return E(n.rank===1,function(){return"Error in reverse1D: x must be rank 1 but got rank "+n.rank+"."}),gr(n,0)}}),nv=D({reverse2d_:function(r,n){var e=_(r,"x","reverse");return E(e.rank===2,function(){return"Error in reverse2D: x must be rank 2 but got rank "+e.rank+"."}),gr(e,n)}}),rv=D({reverse3d_:function(r,n){var e=_(r,"x","reverse");return E(e.rank===3,function(){return"Error in reverse3D: x must be rank 3 but got rank "+e.rank+"."}),gr(e,n)}}),ov=D({reverse4d_:function(r,n){var e=_(r,"x","reverse");return E(e.rank===4,function(){return"Error in reverse4D: x must be rank 4 but got rank "+e.rank+"."}),gr(e,n)}});function Uu(r,n,e,t,o,a){var i=_(r,"x","maxPool"),s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),t==null&&(t=[1,1]),E(s.rank===4,function(){return"Error in maxPool: input must be rank 4 but got rank "+s.rank+"."}),E(nt(e,t),function(){return"Error in maxPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+t+"'"}),a!=null&&E(De(o),function(){return"Error in maxPool: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var c=ir(s.shape,n,e,t,o,a);if(c.filterWidth===1&&c.filterHeight===1&&We(c.inShape,c.outShape))return i.clone();var l=[s],h=T.runKernelFunc(function(f,p){var d=f.maxPool(s,c);return p([s,d]),d},{x:s},function(f,p){var d=p[0],m=p[1];return{x:function(){return function(v,g,x,b,y,w,C,S){var k=_(v,"dy","maxPoolBackprop"),R=_(g,"input","maxPoolBackprop"),I=_(x,"output","maxPoolBackprop");E(R.rank===k.rank,function(){return"Rank of input ("+R.rank+") does not match rank of dy ("+k.rank+")"}),w==null&&(w=[1,1]),E(nt(y,w),function(){return"Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides "+y+" and dilations '"+w+"'"}),E(k.rank===4,function(){return"Error in maxPoolBackprop: dy must be rank 4 but got rank "+k.rank+"."}),E(R.rank===4,function(){return"Error in maxPoolBackprop: input must be rank 4 but got rank "+R.rank+"."}),S!=null&&E(De(C),function(){return"Error in maxPoolBackprop: pad must be an integer when using, dimRoundingMode "+S+" but got pad "+C+"."});var N=ir(R.shape,b,y,w,C,S);return T.runKernelFunc(function(A){return A.maxPoolBackprop(k,R,I,N)},{$dy:k,$input:R})}(f,d,m,n,e,t,o)}}},"MaxPool",c,l);return u?h.as3D(h.shape[1],h.shape[2],h.shape[3]):h}function zu(r,n,e,t,o,a){var i=_(r,"x","avgPool","float32");t==null&&(t=[1,1]),E(nt(e,t),function(){return"Error in avgPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+t+"'"});var s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),E(s.rank===4,function(){return"Error in avgPool: x must be rank 4 but got rank "+s.rank+"."}),a!=null&&E(De(o),function(){return"Error in avgPool: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var c=ir(s.shape,n,e,t,o,a);if(c.filterWidth===1&&c.filterHeight===1&&We(c.inShape,c.outShape))return i.clone();var l=T.runKernelFunc(function(h){return h.avgPool(s,c)},{x:s},function(h){return{x:function(){return function(f,p,d,m,v,g){var x=_(f,"dy","avgPoolBackprop"),b=_(p,"input","avgPoolBackprop");E(b.rank===x.rank,function(){return"Rank of input ("+b.rank+") does not match rank of dy ("+x.rank+")"}),v==null&&(v=[1,1]),E(nt(m,v),function(){return"Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides "+m+" and dilations '"+v+"'"});var y=b,w=x,C=!1;b.rank===3&&(C=!0,y=b.as4D(1,b.shape[0],b.shape[1],b.shape[2]),w=x.as4D(1,x.shape[0],x.shape[1],x.shape[2])),E(w.rank===4,function(){return"Error in avgPoolBackprop: dy must be rank 4 but got rank "+w.rank+"."}),E(y.rank===4,function(){return"Error in avgPoolBackprop: input must be rank 4 but got rank "+y.rank+"."});var S=ir(y.shape,d,m,v,g),k=T.runKernelFunc(function(R){return R.avgPoolBackprop(w,y,S)},{dy4D:w,input4D:y});return C?k.as3D(k.shape[1],k.shape[2],k.shape[3]):k}(h,s,n,e,t,o)}}},"AvgPool",c);return l=l.cast(i.dtype),u?l.as3D(l.shape[1],l.shape[2],l.shape[3]):l}var Le=D({maxPool_:function(r,n,e,t,o){return Uu(r,n,e,1,t,o)}}),yr=D({avgPool_:function(r,n,e,t,o){return zu(r,n,e,1,t,o)}}),av=D({pool_:function(r,n,e,t,o,a){o==null&&(o=[1,1]),a==null&&(a=1),t===0&&(t="valid");var i=_(r,"x","maxPool"),s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),E(nt(a,o),function(){return"Error in pool: Either strides or dilations must be 1. Got strides "+a+" and dilations '"+o+"'"});var c,l=ir(s.shape,n,a,o,t),h=[l.dilationHeight,l.dilationWidth];c=t==="same"?function(y,w){var C=y.map(function(R,I){return R+(R-1)*(w[I]-1)}).map(function(R){return R-1}),S=C.map(function(R){return Math.floor(R/2)}),k=C.map(function(R,I){return R-S[I]});return C.map(function(R,I){return[S[I],k[I]]})}([l.filterHeight,l.filterWidth],h):[[0,0],[0,0]];var f=h[0]===1&&h[1]===1,p=function(y,w,C){var S=C.map(function(O){return O[0]}),k=C.map(function(O){return O[1]}),R=y.concat(S,k),I=w.map(function(O,B){return(O-R[B]%O)%O}),N=k.map(function(O,B){return O+I[B]}),A=w.map(function(O,B){return[S[B],N[B]]}),L=w.map(function(O,B){return[0,I[B]]});return[A,L]}([l.inHeight,l.inWidth],h,c),d=p[0],m=p[1],v=f?t:"valid",g=f?s:Xs(s,h,d),x=(e==="avg"?function(){return zu(g,n,a,1,v)}:function(){return Uu(g,n,a,1,v)})(),b=f?x:js(x,h,m);return u?b.as3D(b.shape[1],b.shape[2],b.shape[3]):b}}),iv=D({maxPool3d_:function(r,n,e,t,o,a,i){a===void 0&&(a="NDHWC");var s=_(r,"x","maxPool3d"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),i==null&&(i=[1,1,1]),E(u.rank===5,function(){return"Error in maxPool3d: x must be rank 5 but got rank "+u.rank+"."}),E(a==="NDHWC",function(){return"Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of "+a}),E(nt(e,i),function(){return"Error in maxPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"}),o!=null&&E(De(t),function(){return"Error in maxPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+t+"."});var l=Yr(u.shape,n,e,i,t,o,a),h=T.runKernelFunc(function(f,p){var d=f.maxPool3d(u,l);return p([u,d]),d},{x:u},function(f,p){var d=p[0],m=p[1];return{x:function(){return function(v,g,x,b,y,w,C,S){var k=_(v,"dy","maxPool3dBackprop"),R=_(g,"input","maxPool3dBackprop"),I=_(x,"output","maxPool3dBackprop"),N=k,A=R,L=I,O=!1;R.rank===4&&(O=!0,N=k.as5D(1,k.shape[0],k.shape[1],k.shape[2],k.shape[3]),A=R.as5D(1,R.shape[0],R.shape[1],R.shape[2],R.shape[3]),L=I.as5D(1,I.shape[0],I.shape[1],I.shape[2],I.shape[3])),E(N.rank===5,function(){return"Error in maxPool3dBackprop: dy must be rank 5 but got rank "+N.rank+"."}),E(A.rank===5,function(){return"Error in maxPool3dBackprop: input must be rank 5 but got rank "+A.rank+"."}),E(L.rank===5,function(){return"Error in maxPool3dBackprop: output must be rank 5 but got rank "+L.rank+"."}),w==null&&(w=[1,1,1]),E(nt(y,w),function(){return"Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides "+y+" and dilations '"+w+"'"}),S!=null&&E(De(C),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+S+" but got pad "+C+"."});var B=Yr(A.shape,b,y,w,C,S),U=T.runKernelFunc(function(V){return V.maxPool3dBackprop(N,A,L,B)},{dy5D:N,input5D:A});return O?U.as4D(U.shape[1],U.shape[2],U.shape[3],U.shape[4]):U}(f,d,m,n,e,i,t,o)}}});return c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),sv=D({avgPool3d_:function(r,n,e,t,o,a,i){a===void 0&&(a="NDHWC");var s=_(r,"x","avgPool3d","float32"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),i==null&&(i=[1,1,1]),E(u.rank===5,function(){return"Error in avgPool3d: x must be rank 5 but got rank "+u.rank+"."}),E(a==="NDHWC",function(){return"Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of "+a}),E(nt(e,i),function(){return"Error in avgPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"}),o!=null&&E(De(t),function(){return"Error in avgPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+t+"."});var l=Yr(u.shape,n,e,i,t,o,a),h=T.runKernelFunc(function(f){return f.avgPool3d(u,l)},{x:u},function(f){return{x:function(){return function(p,d,m,v,g,x,b){var y=_(p,"dy","avgPool3dBackprop"),w=_(d,"input","avgPool3dBackprop"),C=y,S=w,k=!1;w.rank===4&&(k=!0,C=y.as5D(1,y.shape[0],y.shape[1],y.shape[2],y.shape[3]),S=w.as5D(1,w.shape[0],w.shape[1],w.shape[2],w.shape[3])),E(C.rank===5,function(){return"Error in avgPool3dBackprop: dy must be rank 5 but got rank "+C.rank+"."}),E(S.rank===5,function(){return"Error in avgPool3dBackprop: input must be rank 5 but got rank "+S.rank+"."}),g==null&&(g=[1,1,1]),E(nt(v,g),function(){return"Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides "+v+" and dilations '"+g+"'"}),b!=null&&E(De(x),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+b+" but got pad "+x+"."});var R=Yr(S.shape,m,v,g,x,b),I=T.runKernelFunc(function(N){return N.avgPool3dBackprop(C,S,R)},{dy5D:C,input5D:S});return k?I.as4D(I.shape[1],I.shape[2],I.shape[3],I.shape[4]):I}(f,u,n,e,i,t,o)}}});return h=h.cast(u.dtype),c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),Ft=D({slice_:function(r,n,e){var t,o,a=_(r,"x","slice");if(a.rank===0)throw new Error("Slicing scalar is not possible");(t=typeof n=="number"?[n].concat(new Array(a.rank-1).fill(0)):n.length<a.rank?n.concat(new Array(a.rank-n.length).fill(0)):n.slice()).forEach(function(u){E(u!==-1,function(){return"slice() does not support negative begin indexing."})}),o=(o=e==null?new Array(a.rank).fill(-1):typeof e=="number"?[e].concat(new Array(a.rank-1).fill(-1)):e.length<a.rank?e.concat(new Array(a.rank-e.length).fill(-1)):e).map(function(u,c){return u>=0?u:(E(u===-1,function(){return"Negative size values should be exactly -1 but got "+u+" for the slice() size at index "+c+"."}),a.shape[c]-t[c])}),Mh(a,t,o);var i=a.shape,s={begin:t,size:o};return T.runKernelFunc(function(u){return u.slice(a,t,o)},{x:a},function(u){for(var c=[],l=0;l<u.rank;l++)c.push([t[l],i[l]-t[l]-o[l]]);return{x:function(){return u.pad(c)}}},"Slice",s)}}),uv=D({slice1d_:function(r,n,e){var t=_(r,"x","slice1d");return E(t.rank===1,function(){return"slice1d expects a rank-1 tensor, but got a rank-"+t.rank+" tensor"}),Ft(t,[n],[e])}}),cv=D({slice2d_:function(r,n,e){var t=_(r,"x","slice2d");return E(t.rank===2,function(){return"slice2d expects a rank-2 tensor, but got a rank-"+t.rank+" tensor"}),Ft(t,n,e)}}),Gu=D({slice3d_:function(r,n,e){var t=_(r,"x","slice3d");return E(t.rank===3,function(){return"slice3d expects a rank-3 tensor, but got a rank-"+t.rank+" tensor"}),Ft(t,n,e)}}),lv=D({slice4d_:function(r,n,e){var t=_(r,"x","slice4d");return E(t.rank===4,function(){return"slice4d expects a rank-4 tensor, but got a rank-"+t.rank+" tensor"}),Ft(t,n,e)}});function Hu(r,n,e,t,o){return n.rank<e.rank&&(n=n.reshape(tt(n.shape,t))),r.rank<e.rank&&(r=r.reshape(tt(r.shape,t))),{x:function(){var a=r.mul(e.equal(n).cast(r.dtype));return o==null?a:a.transpose(o)}}}var hv=D({all_:function(r,n,e){n===void 0&&(n=null),e===void 0&&(e=!1);var t=_(r,"x","all","bool"),o=Be(n,t.shape),a=o,i=Ot(a,t.rank);i!=null&&(t=t.transpose(i),a=Bt(a.length,t.rank));var s=T.runKernelFunc(function(c){return c.all(t,a)},{$x:t});if(e){var u=tt(s.shape,o);return s.reshape(u)}return s}}),fv=D({any_:function(r,n,e){n===void 0&&(n=null),e===void 0&&(e=!1);var t=_(r,"x","any","bool"),o=Be(n,t.shape),a=o,i=Ot(a,t.rank);i!=null&&(t=t.transpose(i),a=Bt(a.length,t.rank));var s=T.runKernelFunc(function(c){return c.any(t,a)},{$x:t});if(e){var u=tt(s.shape,o);return s.reshape(u)}return s}}),pv=D({argMax_:function(r,n){n===void 0&&(n=0);var e=_(r,"x","argMax");n==null&&(n=0);var t=Be(n,e.shape),o=Ot(t,e.rank);o!=null&&(e=e.transpose(o),t=Bt(t.length,e.rank));var a={axis:t[0]},i=[e];return T.runKernelFunc(function(s,u){var c=s.argMax(e,t[0]);return u([e]),c},{x:e},function(s,u){var c=u[0];return{x:function(){return ve(c)}}},"ArgMax",a,i)}}),dv=D({argMin_:function(r,n){n===void 0&&(n=0);var e=_(r,"x","argMin");n==null&&(n=0);var t=Be(n,e.shape),o=Ot(t,e.rank);return o!=null&&(e=e.transpose(o),t=Bt(t.length,e.rank)),T.runKernelFunc(function(a,i){var s=a.argMin(e,t[0]);return i([e]),s},{$x:e},function(a,i){var s=i[0];return{$x:function(){return ve(s)}}})}}),vv=D({logSumExp_:function(r,n,e){n===void 0&&(n=null),e===void 0&&(e=!1);var t=_(r,"x","logSumExp"),o=Be(n,t.shape),a=t.max(o,!0),i=t.sub(a).exp().sum(o).log(),s=a.reshape(i.shape).add(i);if(e){var u=tt(s.shape,o);return s.reshape(u)}return s}}),po=D({max_:function(r,n,e){n===void 0&&(n=null),e===void 0&&(e=!1);var t=_(r,"x","max"),o=t,a=Be(n,t.shape),i=a,s=Ot(i,t.rank);s!=null&&(t=t.transpose(s),i=Bt(i.length,t.rank));var u=[t],c=T.runKernelFunc(function(h,f){var p=h.max(t,i);return f([o,p]),p},{x:t},function(h,f){return Hu(h,f[1],f[0],a,s)},"Max",{axes:i},u,[!0]);if(e){var l=tt(c.shape,a);c=c.reshape(l)}return c}}),mv=D({mean_:function(r,n,e){n===void 0&&(n=null),e===void 0&&(e=!1);var t=_(r,"x","mean"),o=Be(n,t.shape),a=$(Ke(t.shape,o)[1]);return uo(function(i){var s=j(a);return{value:(s.dtype===i.dtype?i:i.cast(s.dtype)).div(s).sum(n,e),gradFunc:function(u){var c=i.shape.slice();return o.forEach(function(l){c[l]=1}),u.reshape(c).mul(Xn(i.shape,"float32")).div(a)}}})(t)}}),gv=D({min_:function(r,n,e){n===void 0&&(n=null),e===void 0&&(e=!1);var t=_(r,"x","min"),o=t,a=Be(n,t.shape),i=a,s=Ot(i,t.rank);s!=null&&(t=t.transpose(s),i=Bt(i.length,t.rank));var u=[t],c=T.runKernelFunc(function(h,f){var p=h.min(t,i);return f([o,p]),p},{x:t},function(h,f){return Hu(h,f[1],f[0],a,s)},"Min",{axes:i},u,[!0]);if(e){var l=tt(c.shape,a);c=c.reshape(l)}return c}}),yv=D({moments_:function(r,n,e){n===void 0&&(n=null),e===void 0&&(e=!1);var t=Be(n,(r=_(r,"x","moments")).shape),o=r.mean(t,e),a=o.shape;e||(a=tt(o.shape,t));var i=r.toFloat().sub(o.reshape(a)).square();return{mean:o,variance:i.mean(t,e)}}}),ju=D({sum_:function(r,n,e){n===void 0&&(n=null),e===void 0&&(e=!1);var t=_(r,"x","sum");t.dtype==="bool"&&(t=t.toInt());var o=Be(n,t.shape);return uo(function(a){var i=Ot(o,a.rank),s=o,u=a;i!=null&&(u=a.transpose(i),s=Bt(s.length,a.rank));var c=function(p){var d=a.shape.slice();return o.forEach(function(m){d[m]=1}),p.reshape(d).mul(Xn(a.shape,"float32"))},l={axes:s},h=T.runKernelFunc(function(p){return p.sum(u,s)},{x:u},function(p){return{x:function(){return c(p)}}},"Sum",l);if(e){var f=tt(h.shape,o);h=h.reshape(f)}return{value:h,gradFunc:c}})(t)}}),xv=D({prod_:function(r,n,e){n===void 0&&(n=null),e===void 0&&(e=!1);var t=_(r,"x","prod");t.dtype==="bool"&&(t=t.toInt());var o=Be(n,t.shape),a=Ot(o,t.rank),i=o,s=t;a!=null&&(s=t.transpose(a),i=Bt(i.length,t.rank));var u=T.runKernelFunc(function(l){return l.prod(s,i)},{permutedX:s});if(e){var c=tt(u.shape,o);u=u.reshape(c)}return u}}),qu=D({elu_:function(r){var n=_(r,"x","elu");return T.runKernelFunc(function(e,t){var o=e.elu(n);return t([o]),o},{$x:n},function(e,t){var o=t[0];return{$x:function(){return T.runKernelFunc(function(a){return a.eluDer(e,o)},{dy:e,y:o})}}})}}),bv=D({leakyRelu_:function(r,n){n===void 0&&(n=.2);var e=_(r,"x","leakyRelu");return Va(j(n).mul(e),e)}}),Ku=D({prelu_:function(r,n){var e=_(r,"x","prelu"),t=_(n,"alpha","prelu");return T.runKernelFunc(function(o,a){var i=o.prelu(e,t);return a([e,t]),i},{x:e,alpha:t},function(o,a){var i=a[0],s=a[1],u=i.greater(0);return{x:function(){return xn(u,o,o.mul(s))},alpha:function(){var c=xn(u,ve(o),o.mul(i)),l=Pe(s.shape,o.shape);return l.length>0&&(c=c.sum(l)),c.reshape(s.shape)}}},"Prelu")}}),Re=D({relu_:function(r){var n=_(r,"x","relu");return n.dtype==="bool"?n.toInt():T.runKernelFunc(function(e,t){var o=e.relu(n);return t([n]),o},{x:n},function(e,t){var o=t[0];return{x:function(){return e.mulStrict(o.step().toFloat())}}},"Relu")}}),Xu=D({relu6_:function(r){var n=_(r,"x","relu6");return n.dtype==="bool"?n.toInt():T.runKernelFunc(function(e,t){var o=e.relu6(n);return t([n]),o},{x:n},function(e,t){var o=t[0],a=o.lessEqual(6).mul(o.step());return{x:function(){return e.mulStrict(a.toFloat())}}},"Relu6")}}),wv=D({selu_:function(r){var n=_(r,"x","selu");return T.runKernelFunc(function(e,t){var o=e.selu(n);return t([n]),o},{$x:n},function(e,t){var o=t[0];return{$x:function(){var a=o.greater(j(0)),i=j(Ba),s=j(La),u=e.mul(s),c=e.mul(i).mul(o.toFloat().exp());return xn(a,u,c)}}})}}),sn=D({transpose_:function(r,n){var e=_(r,"x","transpose");if(n==null&&(n=e.shape.map(function(o,a){return a}).reverse()),E(e.rank===n.length,function(){return"Error in transpose: rank of input "+e.rank+" must match length of perm "+n+"."}),n.forEach(function(o){E(o>=0&&o<e.rank,function(){return"All entries in 'perm' must be between 0 and "+(e.rank-1)+" but got "+n})}),e.rank<=1)return e.clone();var t={perm:n};return T.runKernelFunc(function(o){return o.transpose(e,n)},{x:e},function(o){var a=ka(n);return{x:function(){return o.transpose(a)}}},"Transpose",t)}}),Cv=D({localResponseNormalization_:function(r,n,e,t,o){n===void 0&&(n=5),e===void 0&&(e=1),t===void 0&&(t=1),o===void 0&&(o=.5);var a=_(r,"x","localResponseNormalization");E(a.rank===4||a.rank===3,function(){return`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank `+a.rank+"."}),E(De(n),function(){return"Error in localResponseNormalization: depthRadius must be an integer but got depthRadius "+n+"."});var i=a,s=!1;a.rank===3&&(s=!0,i=a.as4D(1,a.shape[0],a.shape[1],a.shape[2]));var u=T.runKernelFunc(function(c,l){var h=c.localResponseNormalization4D(i,n,e,t,o);return l([i,h]),h},{x4D:i},function(c,l){var h=l[0],f=l[1];return{x4D:function(){return T.runKernelFunc(function(p){return p.LRNGrad(c,h,f,n,e,t,o)},{})}}});return s?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),Yu=D({norm_:function(r,n,e,t){n===void 0&&(n="euclidean"),e===void 0&&(e=null),t===void 0&&(t=!1);var o=function s(u,c,l){if(l===void 0&&(l=null),u.rank===0)return u.abs();if(u.rank!==1&&l===null)return s(u.reshape([-1]),c,l);if(u.rank===1||typeof l=="number"||Array.isArray(l)&&l.length===1){if(c===1)return u.abs().sum(l);if(c===1/0)return u.abs().max(l);if(c===-1/0)return u.abs().min(l);if(c==="euclidean"||c===2)return u.abs().pow(j(2,"int32")).sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}if(Array.isArray(l)&&l.length===2){if(c===1)return u.abs().sum(l[0]).max(l[1]-1);if(c===1/0)return u.abs().sum(l[1]).max(l[0]);if(c===-1/0)return u.abs().sum(l[1]).min(l[0]);if(c==="fro"||c==="euclidean")return u.square().sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}throw new Error("Error in norm: invalid axis: "+l)}(r=_(r,"x","norm"),n,e),a=o.shape;if(t){var i=Be(e,r.shape);a=tt(o.shape,i)}return o.reshape(a)}}),_v=D({basicLSTMCell_:function(r,n,e,t,o,a){var i=_(r,"forgetBias","basicLSTMCell"),s=_(n,"lstmKernel","basicLSTMCell"),u=_(e,"lstmBias","basicLSTMCell"),c=_(t,"data","basicLSTMCell"),l=_(o,"c","basicLSTMCell"),h=_(a,"h","basicLSTMCell"),f=c.concat(h,1).matMul(s).add(u),p=f.shape[0],d=f.shape[1]/4,m=[p,d],v=f.slice([0,0],m),g=f.slice([0,d],m),x=f.slice([0,2*d],m),b=f.slice([0,3*d],m),y=v.sigmoid().mulStrict(g.tanh()).addStrict(l.mulStrict(i.add(x).sigmoid())),w=y.tanh().mulStrict(b.sigmoid());return[y,w]}}),Ev=D({multiRNNCell_:function(r,n,e,t){for(var o=_(n,"data","multiRNNCell"),a=Gr(e,"c","multiRNNCell"),i=Gr(t,"h","multiRNNCell"),s=o,u=[],c=0;c<r.length;c++){var l=r[c](s,a[c],i[c]);u.push(l[0]),u.push(l[1]),s=l[1]}var h=[],f=[];for(c=0;c<u.length;c+=2)h.push(u[c]),f.push(u[c+1]);return[h,f]}}),Rv=D({movingAverage_:function(r,n,e,t,o){o===void 0&&(o=!0);var a=_(r,"v","movingAverage"),i=_(n,"x","movingAverage"),s=_(e,"decay","movingAverage");wl(a,i),E(We(a.shape,i.shape),function(){return"Shape mismatch in v and x"});var u=j(1),c=u.sub(s),l=i.sub(a).mul(c);if(o){E(t!=null,function(){return"When using zeroDebias: true, step is required."});var h=_(t,"step","movingAverage");l=l.div(u.sub(Zr(s,h)))}return a.add(l)}}),Iv=D({stridedSlice_:function(r,n,e,t,o,a,i,s,u){if(o===void 0&&(o=0),a===void 0&&(a=0),i===void 0&&(i=0),s===void 0&&(s=0),u===void 0&&(u=0),t==null&&(t=new Array(n.length)),i!==0)throw new Error("ellipsis mask is not yet supported");var c=_(r,"x","stridedSlice"),l=Wi(s),h=c.shape.slice();l.forEach(function(v){n[v]=0,e[v]=1,h.splice(v,0,1)}),c=c.reshape(h);for(var f=0;f<c.rank;f++)n[f]=Ph(o,n,t,c.shape,f),e[f]=Oh(a,e,t,c.shape,f),t[f]=t[f]||1;var p=Wi(u);p.forEach(function(v){e[v]=n[v]+1,t[v]=1});var d=Ta(n,e,t),m=d.filter(function(v,g){return p.indexOf(g)===-1});return t.every(function(v){return v===1})?Ft(c,n,d).reshape(m):T.runKernelFunc(function(v){return v.stridedSlice(c,n,e,t)},{$x:c}).reshape(m)}}),kv=D({topk_:function(r,n,e){n===void 0&&(n=1),e===void 0&&(e=!0);var t=_(r,"x","topk");if(t.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");var o=t.shape[t.shape.length-1];if(n>o)throw new Error("'k' passed to topk() must be <= the last dimension ("+o+") but got "+n);var a=T.runKernelFunc(function(i){return i.topk(t,n,e)},{$x:t});return{values:a[0],indices:a[1]}}}),Sv=D({scatterND_:function(r,n,e){var t=_(r,"indices","scatterND","int32"),o=_(n,"updates","scatterND");return Fh(o,t,e),T.runKernelFunc(function(a){return a.scatterND(t,o,e)},{indices:t,updates:o},null,"ScatterNd",{shape:e})}}),Ha=D({fft_:function(r){E(r.dtype==="complex64",function(){return"The dtype for tf.spectral.fft() must be complex64 but got "+r.dtype+"."});var n=r.shape[r.shape.length-1],e=r.size/n,t=r.as2D(e,n);return T.runKernelFunc(function(o){return o.fft(t)},{input:r}).reshape(r.shape)}}),eo=D({ifft_:function(r){E(r.dtype==="complex64",function(){return"The dtype for tf.spectral.ifft() must be complex64 but got "+r.dtype+"."});var n=r.shape[r.shape.length-1],e=r.size/n,t=r.as2D(e,n);return T.runKernelFunc(function(o){return o.ifft(t)},{input:r}).reshape(r.shape)}}),ja=D({rfft_:function(r,n){E(r.dtype==="float32",function(){return"The dtype for rfft() must be real value but got "+r.dtype});var e,t=r.shape[r.shape.length-1],o=r.size/t;if(n!=null&&n<t){var a=r.shape.map(function(g){return 0}),i=r.shape.map(function(g){return g});i[r.shape.length-1]=n,e=r.slice(a,i),t=n}else if(n!=null&&n>t){var s=r.shape.map(function(g){return g});s[r.shape.length-1]=n-t,e=r.concat(we(s),r.shape.length-1),t=n}else e=r;var u=e.zerosLike(),c=ze(e,u).as2D(o,t),l=Ha(c),h=Math.floor(t/2)+1,f=pt(l),p=St(l),d=f.split([h,t-h],f.shape.length-1),m=p.split([h,t-h],p.shape.length-1),v=e.shape.slice();return v[e.shape.length-1]=h,ze(d[0],m[0]).reshape(v)}}),$u=D({irfft_:function(r){var n=r.shape[r.shape.length-1],e=r.size/n;if(n<=2){var t=r.as2D(e,n),o=eo(t);return pt(o)}var a=[e,2*(n-1)],i=pt(r).as2D(e,n),s=St(r).as2D(e,n),u=i.slice([0,1],[e,n-2]).reverse(1),c=s.slice([0,1],[e,n-2]).reverse(1).mul(j(-1)),l=i.concat(u,1),h=s.concat(c,1);return t=ze(l,h).as2D(a[0],a[1]),o=eo(t),pt(o)}}),Dv=Object.freeze({fft:Ha,ifft:eo,rfft:ja,irfft:$u}),Av=D({sparseToDense_:function(r,n,e,t){t===void 0&&(t=0);var o=_(r,"sparseIndices","sparseToDense","int32"),a=_(n,"sparseValues","sparseToDense"),i=_(t,"defaultValue","sparseToDense",a.dtype);return function(s,u,c,l){if(s.dtype!=="int32")throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was "+s.dtype+".");if(s.rank>2)throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape "+s.shape+".");var h=s.rank>0?s.shape[0]:1,f=s.rank>1?s.shape[1]:1;if(c.length!==f)throw new Error("outputShape has incorrect number of elements:, "+c.length+", should be: "+f+".");var p=u.size;if(u.rank!==0&&(u.rank!==1||p!==h))throw new Error("sparseValues has incorrect shape "+u.shape+", should be [] or ["+h+"]");if(u.dtype!==l.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}(o,a,e,i),T.runKernelFunc(function(s){return s.sparseToDense(o,a,e,i)},{$sparseIndices:o,$sparseValues:a,$defaultValue:i})}}),Tv=D({gatherND_:function(r,n){var e=_(n,"indices","gatherND","int32"),t=_(r,"x","gatherND");return T.runKernelFunc(function(o){return o.gatherND(t,e)},{x:t,indices:e},null,"GatherNd")}}),Nv=D({diag_:function(r){var n=_(r,"x","diag").flatten(),e=r.shape.concat(r.shape);return T.runKernelFunc(function(t){return t.diag(n)},{$x:n}).reshape(e)}}),Fv=D({dropout_:function(r,n,e,t){var o=_(r,"x","dropout");if(E(o.dtype==="float32",function(){return"x has to be a floating point tensor since it's going to be scaled, but got a "+o.dtype+" tensor instead."}),E(n>=0&&n<1,function(){return"rate must be a float in the range [0, 1), but got "+n+"."}),n===0)return r instanceof Ee?o.clone():o;var a=function(u,c){if(c==null)return u.shape.slice();if(We(u.shape,c))return c;if(u.shape.length===c.length){for(var l=[],h=0;h<u.shape.length;h++)c[h]==null&&u.shape[h]!=null?l.push(u.shape[h]):l.push(c[h]);return l}return c}(o,e),i=1-n,s=Ks(a,0,1,"float32",t).add(i).floor().div(i);return o.mul(s)}});function Ju(r,n,e){for(var t=1-r%2,o=new Float32Array(r),a=0;a<r;++a){var i=2*Math.PI*a/(r+t-1);o[a]=n-e*Math.cos(i)}return Te(o,"float32")}var qa=D({hannWindow_:function(r){return Ju(r,.5,.5)}}),Qu=D({hammingWindow_:function(r){return Ju(r,.54,.46)}}),Ka=D({frame_:function(r,n,e,t,o){t===void 0&&(t=!1),o===void 0&&(o=0);for(var a=0,i=[];a+n<=r.size;)i.push(Ft(r,a,n)),a+=e;if(t)for(;a<r.size;){var s=a+n-r.size,u=Fe([Ft(r,a,n-s),Nt([s],o)]);i.push(u),a+=e}return i.length===0?rn([],[0,n]):Fe(i).as2D(i.length,n)}}),Zu=D({stft_:function(r,n,e,t,o){var a;o===void 0&&(o=qa),t==null&&(a=n,t=Math.floor(Math.pow(2,Math.ceil(Math.log(a)/Math.log(2)))));for(var i=Ka(r,n,e),s=Je(i,o(n)),u=[],c=0;c<i.shape[0];c++)u.push(ja(s.slice([c,0],[1,n]),t));return Fe(u)}}),Mv=Object.freeze({hannWindow:qa,hammingWindow:Qu,frame:Ka,stft:Zu}),$e,Pv=function(r,n,e){return e===void 0&&(e=1),X(this,void 0,void 0,function(){var t,o,a,i,s,u,c,l,h,f,p,d,m,v;return Y(this,function(g){switch(g.label){case 0:return t=_(r,"predictions","inTopK"),o=_(n,"targets","inTopK"),E(t.rank>1,function(){return"inTopK() expects the predictions to be of rank 2 or higher, but got "+t.rank}),E(t.rank-1===o.rank,function(){return"predictions rank should be 1 larger than targets rank, but got predictions rank "+t.rank+" and targets rank "+o.rank}),ye(t.shape.slice(0,t.shape.length-1),o.shape,"predictions's shape should be align with the targets' shape, except the last dimension."),a=t.shape[t.shape.length-1],E(e>0&&e<=a,function(){return"'k' passed to inTopK() must be > 0 && <= the predictions last dimension ("+a+"), but got "+e}),[4,t.data()];case 1:return i=g.sent(),[4,o.data()];case 2:for(s=g.sent(),u=[i.length/a,a],l=u[1],h=rr("bool",c=u[0]),f=0;f<c;f++){for(p=f*l,d=i.subarray(p,p+l),m=[],v=0;v<d.length;v++)m.push({value:d[v],index:v});for(m.sort(function(x,b){return b.value-x.value}),h[f]=0,v=0;v<e;v++)if(m[v].index===s[f]){h[f]=1;break}}return r!==t&&t.dispose(),n!==o&&o.dispose(),[2,He(h,o.shape,"bool")]}})})};(function(r){r[r.NONE=0]="NONE",r[r.MEAN=1]="MEAN",r[r.SUM=2]="SUM",r[r.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})($e||($e={}));var Ov=D({absoluteDifference_:function(r,n,e,t){t===void 0&&(t=$e.SUM_BY_NONZERO_WEIGHTS);var o=_(r,"labels","absoluteDifference"),a=_(n,"predictions","absoluteDifference"),i=null;e!=null&&(i=_(e,"weights","absoluteDifference")),ye(o.shape,a.shape,"Error in absoluteDifference: ");var s=o.sub(a).abs();return Kt(s,i,t)}}),Kt=D({computeWeightedLoss_:function(r,n,e){e===void 0&&(e=$e.SUM_BY_NONZERO_WEIGHTS);var t=_(r,"losses","computeWeightedLoss"),o=null;n!=null&&(o=_(n,"weights","computeWeightedLoss"));var a=o==null?t:t.mul(o);if(e===$e.NONE)return a;if(e===$e.SUM)return a.sum();if(e===$e.MEAN){if(o==null)return a.mean();var i=t.size/o.size,s=a.sum().div(o.sum());return i>1?s.div(j(i)):s}if(e===$e.SUM_BY_NONZERO_WEIGHTS){if(o==null)return a.sum().div(j(t.size));var u=o.mul(Xn(t.shape)).notEqual(j(0)).sum().toFloat();return a.sum().div(u)}throw Error("Unknown reduction: "+e)}}),Bv=D({cosineDistance_:function(r,n,e,t,o){o===void 0&&(o=$e.SUM_BY_NONZERO_WEIGHTS);var a=_(r,"labels","cosineDistance"),i=_(n,"predictions","cosineDistance"),s=null;t!=null&&(s=_(t,"weights","cosineDistance")),ye(a.shape,i.shape,"Error in cosineDistance: ");var u=j(1).sub(a.mul(i).sum(e,!0));return Kt(u,s,o)}}),Lv=D({hingeLoss_:function(r,n,e,t){t===void 0&&(t=$e.SUM_BY_NONZERO_WEIGHTS);var o=_(r,"labels","hingeLoss"),a=_(n,"predictions","hingeLoss"),i=null;e!=null&&(i=_(e,"weights","hingeLoss")),ye(o.shape,a.shape,"Error in hingeLoss: ");var s=j(1);o=j(2).mul(o).sub(s);var u=s.sub(o.mul(a)).relu();return Kt(u,i,t)}}),Wv=D({huberLoss_:function(r,n,e,t,o){t===void 0&&(t=1),o===void 0&&(o=$e.SUM_BY_NONZERO_WEIGHTS);var a=_(r,"labels","huberLoss"),i=_(n,"predictions","huberLoss"),s=null;e!=null&&(s=_(e,"weights","huberLoss")),ye(a.shape,i.shape,"Error in huberLoss: ");var u=j(t),c=i.sub(a).abs(),l=Nu(c,u),h=c.sub(l),f=j(.5).mul(l.square()).add(u.mul(h));return Kt(f,s,o)}}),Vv=D({logLoss_:function(r,n,e,t,o){t===void 0&&(t=1e-7),o===void 0&&(o=$e.SUM_BY_NONZERO_WEIGHTS);var a=_(r,"labels","logLoss"),i=_(n,"predictions","logLoss"),s=null;e!=null&&(s=_(e,"weights","logLoss")),ye(a.shape,i.shape,"Error in logLoss: ");var u=j(1),c=j(t),l=a.mul(i.add(c).log()).neg().sub(u.sub(a).mul(u.sub(i).add(c).log()));return Kt(l,s,o)}}),Uv=D({meanSquaredError_:function(r,n,e,t){t===void 0&&(t=$e.SUM_BY_NONZERO_WEIGHTS);var o=_(r,"labels","meanSquaredError"),a=_(n,"predictions","meanSquaredError"),i=null;e!=null&&(i=_(e,"weights","meanSquaredError")),ye(o.shape,a.shape,"Error in meanSquaredError: ");var s=o.squaredDifference(a);return Kt(s,i,t)}}),zv=D({sigmoidCrossEntropy_:function(r,n,e,t,o){t===void 0&&(t=0),o===void 0&&(o=$e.SUM_BY_NONZERO_WEIGHTS);var a=_(r,"multiClassLabels","sigmoidCrossEntropy"),i=_(n,"logits","sigmoidCrossEntropy"),s=null;if(e!=null&&(s=_(e,"weights","sigmoidCrossEntropy")),ye(a.shape,i.shape,"Error in sigmoidCrossEntropy: "),t>0){var u=j(t),c=j(1),l=j(.5);a=a.mul(c.sub(u)).add(l.mul(u))}var h=function(f,p){var d=_(f,"labels","sigmoidCrossEntropyWithLogits"),m=_(p,"logits","sigmoidCrossEntropyWithLogits");ye(d.shape,m.shape,"Error in sigmoidCrossEntropyWithLogits: ");var v=m.relu(),g=m.mul(d),x=m.abs().neg().exp().log1p();return v.sub(g).add(x)}(a,i);return Kt(h,s,o)}}),Gv=D({softmaxCrossEntropy_:function(r,n,e,t,o){t===void 0&&(t=0),o===void 0&&(o=$e.SUM_BY_NONZERO_WEIGHTS);var a=_(r,"onehotLabels","softmaxCrossEntropy"),i=_(n,"logits","softmaxCrossEntropy"),s=null;if(e!=null&&(s=_(e,"weights","softmaxCrossEntropy")),ye(a.shape,i.shape,"Error in softmaxCrossEntropy: "),t>0){var u=j(t),c=j(1),l=j(a.shape[1]);a=a.mul(c.sub(u)).add(u.div(l))}var h=function(f,p,d){if(d===void 0&&(d=-1),d===-1&&(d=p.rank-1),d!==p.rank-1)throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank "+p.rank+" and dim was "+d);return uo(function(m,v,g){var x=v.logSumExp([d],!0),b=v.toFloat().sub(x);return g([m,b]),{value:b.mul(m).neg().sum([d]),gradFunc:function(y,w){var C=w[0],S=w[1],k=tt(y.shape,[d]);return[y.reshape(k).mul(C.toFloat().sub(S.exp())),y.reshape(k).mul(S.exp().sub(C.toFloat()))]}}})(f,p)}(a,i);return Kt(h,s,o)}}),Hv=Object.freeze({get Reduction(){return $e},absoluteDifference:Ov,computeWeightedLoss:Kt,cosineDistance:Bv,hingeLoss:Lv,huberLoss:Wv,logLoss:Vv,meanSquaredError:Uv,sigmoidCrossEntropy:zv,softmaxCrossEntropy:Gv});function ss(r,n){return n===void 0&&(n=!1),T.tidy(function(){if(r.shape.length!==2)throw new Error("qr2d() requires a 2D Tensor, but got a "+r.shape.length+"D Tensor.");for(var e=r.shape[0],t=r.shape[1],o=qs(e),a=r.clone(),i=rn([[1]],[1,1]),s=i.clone(),u=e>=t?t:e,c=function(h){var f,p=a,d=s,m=o;f=T.tidy(function(){var v=a.slice([h,h],[e-h,1]),g=v.norm(),x=a.slice([h,h],[1,1]),b=rn([[-1]]).where(x.greater(0),rn([[1]])),y=x.sub(b.mul(g)),w=v.div(y);s=w.shape[0]===1?i.clone():i.concat(w.slice([1,0],[w.shape[0]-1,w.shape[1]]),0);var C=b.matMul(y).div(g).neg(),S=a.slice([h,0],[e-h,t]),k=C.mul(s);if(h===0)a=S.sub(k.matMul(s.transpose().matMul(S)));else{var R=S.sub(k.matMul(s.transpose().matMul(S)));a=a.slice([0,0],[h,t]).concat(R,0)}var I=o.slice([0,h],[e,o.shape[1]-h]);if(h===0)o=I.sub(I.matMul(s).matMul(k.transpose()));else{var N=I.sub(I.matMul(s).matMul(k.transpose()));o=o.slice([0,0],[e,h]).concat(N,1)}return[s,a,o]}),s=f[0],a=f[1],o=f[2],et([p,d,m])},l=0;l<u;++l)c(l);return!n&&e>t&&(o=o.slice([0,0],[e,t]),a=a.slice([0,0],[t,t])),[o,a]})}var jv=D({bandPart_:function(r,n,e){if(n%1!=0)throw new Error("bandPart(): numLower must be an integer, got "+n+".");if(e%1!=0)throw new Error("bandPart(): numUpper must be an integer, got "+e+".");var t=_(r,"a","bandPart");if(t.rank<2)throw new Error("bandPart(): Rank must be at least 2, got "+t.rank+".");var o=t.shape,a=t.shape.slice(-2),i=a[0],s=a[1];if(!(n<=i))throw new Error("bandPart(): numLower ("+n+") must not be greater than the number of rows ("+i+").");if(!(e<=s))throw new Error("bandPart(): numUpper ("+e+") must not be greater than the number of columns ("+s+").");n<0&&(n=i),e<0&&(e=s);var u=Hr(0,i,1,"int32").reshape([-1,1]),c=Hr(0,s,1,"int32"),l=Oe(u,c),h=lo(l.lessEqual(j(+n,"int32")),l.greaterEqual(j(-e,"int32"))),f=we([i,s],t.dtype);return lt(Me(t.reshape([-1,i,s])).map(function(p){return xn(h,p,f)})).reshape(o)}}),qv=D({gramSchmidt_:function(r){var n;if(Array.isArray(r)){n=!1,E(r!=null&&r.length>0,function(){return"Gram-Schmidt process: input must not be null, undefined, or empty"});for(var e=r[0].shape[0],t=function(u){E(r[u].shape[0]===e,function(){return"Gram-Schmidt: Non-unique lengths found in the input vectors: ("+r[u].shape[0]+" vs. "+e+")"})},o=1;o<r.length;++o)t(o)}else n=!0,r=Da(r,r.shape[0],0).map(function(u){return Ys(u,[0])});E(r.length<=r[0].shape[0],function(){return"Gram-Schmidt: Number of vectors ("+r.length+") exceeds number of dimensions ("+r[0].shape[0]+")."});var a=[],i=r,s=function(u){a.push(T.tidy(function(){var c=i[u];if(u>0)for(var l=0;l<u;++l){var h=ju(a[l].mulStrict(c)).mul(a[l]);c=c.sub(h)}return c.div(Yu(c,"euclidean"))}))};for(o=0;o<r.length;++o)s(o);return n?lt(a,0):a}}),Kv=D({qr_:function(r,n){if(n===void 0&&(n=!1),r.rank<2)throw new Error("qr() requires input tensor to have a rank >= 2, but got rank "+r.rank);if(r.rank===2)return ss(r,n);var e=r.shape.slice(0,r.shape.length-2).reduce(function(i,s){return i*s}),t=Me(r.reshape([e,r.shape[r.shape.length-2],r.shape[r.shape.length-1]]),0),o=[],a=[];return t.forEach(function(i){var s=ss(i,n),u=s[0],c=s[1];o.push(u),a.push(c)}),[lt(o,0).reshape(r.shape),lt(a,0).reshape(r.shape)]}}),Xv=Object.freeze({bandPart:jv,gramSchmidt:qv,qr:Kv});function vo(r,n,e,t,o,a){t==null&&(t=.5),o==null&&(o=Number.NEGATIVE_INFINITY),a==null&&(a=0);var i=r.shape[0];return e=Math.min(e,i),E(0<=t&&t<=1,function(){return"iouThreshold must be in [0, 1], but was '"+t+"'"}),E(r.rank===2,function(){return"boxes must be a 2D tensor, but was of rank '"+r.rank+"'"}),E(r.shape[1]===4,function(){return"boxes must have 4 columns, but 2nd dimension was "+r.shape[1]}),E(n.rank===1,function(){return"scores must be a 1D tensor"}),E(n.shape[0]===i,function(){return"scores has incompatible shape with boxes. Expected "+i+", but was "+n.shape[0]}),E(0<=a&&a<=1,function(){return"softNmsSigma must be in [0, 1], but was '"+a+"'"}),{maxOutputSize:e,iouThreshold:t,scoreThreshold:o,softNmsSigma:a}}var Yv=D({resizeBilinear_:function(r,n,e){e===void 0&&(e=!1);var t=_(r,"images","resizeBilinear");E(t.rank===3||t.rank===4,function(){return"Error in resizeBilinear: x must be rank 3 or 4, but got rank "+t.rank+"."}),E(n.length===2,function(){return"Error in resizeBilinear: new shape must 2D, but got shape "+n+"."});var o=t,a=!1;t.rank===3&&(a=!0,o=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]));var i=n[0],s=n[1],u=T.runKernelFunc(function(c,l){return l([o]),c.resizeBilinear(o,i,s,e)},{x:o},function(c,l){return{x:function(){return T.runKernelFunc(function(h){return h.resizeBilinearBackprop(c,l[0],e)},{})}}},"ResizeBilinear",{alignCorners:e,newHeight:i,newWidth:s});return a?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),$v=D({resizeNearestNeighbor_:function(r,n,e){e===void 0&&(e=!1);var t=_(r,"images","resizeNearestNeighbor");E(t.rank===3||t.rank===4,function(){return"Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank "+t.rank+"."}),E(n.length===2,function(){return"Error in resizeNearestNeighbor: new shape must 2D, but got shape "+n+"."}),E(t.dtype==="float32"||t.dtype==="int32",function(){return"`images` must have `int32` or `float32` as dtype"});var o=t,a=!1;t.rank===3&&(a=!0,o=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]));var i=n[0],s=n[1],u=T.runKernelFunc(function(c,l){return l([o]),c.resizeNearestNeighbor(o,i,s,e)},{batchImages:o},function(c,l){return{batchImages:function(){return T.runKernelFunc(function(h){return h.resizeNearestNeighborBackprop(c,l[0],e)},{})}}});return a?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),Jv=D({nonMaxSuppression_:function(r,n,e,t,o){t===void 0&&(t=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY);var a=_(r,"boxes","nonMaxSuppression"),i=_(n,"scores","nonMaxSuppression"),s=vo(a,i,e,t,o);e=s.maxOutputSize,t=s.iouThreshold,o=s.scoreThreshold;var u={maxOutputSize:e,iouThreshold:t,scoreThreshold:o};return T.runKernelFunc(function(c){return c.nonMaxSuppression(a,i,e,t,o)},{boxes:a,scores:i},null,"NonMaxSuppressionV3",u)}}),Qv=function(r,n,e,t,o){return t===void 0&&(t=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),X(this,void 0,void 0,function(){var a,i,s,u,c,l,h;return Y(this,function(f){switch(f.label){case 0:return a=_(r,"boxes","nonMaxSuppressionAsync"),i=_(n,"scores","nonMaxSuppressionAsync"),s=vo(a,i,e,t,o),e=s.maxOutputSize,t=s.iouThreshold,o=s.scoreThreshold,[4,Promise.all([a.data(),i.data()])];case 1:return u=f.sent(),c=u[0],l=u[1],h=Fa(c,l,e,t,o),a!==r&&a.dispose(),i!==n&&i.dispose(),[2,h]}})})},Zv=D({nonMaxSuppressionWithScore_:function(r,n,e,t,o,a){t===void 0&&(t=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),a===void 0&&(a=0);var i=_(r,"boxes","nonMaxSuppression"),s=_(n,"scores","nonMaxSuppression"),u=vo(i,s,e,t,o,a),c={maxOutputSize:e=u.maxOutputSize,iouThreshold:t=u.iouThreshold,scoreThreshold:o=u.scoreThreshold,softNmsSigma:a=u.softNmsSigma},l=T.runKernel("NonMaxSuppressionV5",{boxes:i,scores:s},c);return{selectedIndices:l[0],selectedScores:l[1]}}}),em=function(r,n,e,t,o,a){return t===void 0&&(t=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),a===void 0&&(a=0),X(this,void 0,void 0,function(){var i,s,u,c,l,h,f;return Y(this,function(p){switch(p.label){case 0:return i=_(r,"boxes","nonMaxSuppressionAsync"),s=_(n,"scores","nonMaxSuppressionAsync"),u=vo(i,s,e,t,o,a),e=u.maxOutputSize,t=u.iouThreshold,o=u.scoreThreshold,a=u.softNmsSigma,[4,Promise.all([i.data(),s.data()])];case 1:return c=p.sent(),l=c[0],h=c[1],f=Ma(l,h,e,t,o,a),i!==r&&i.dispose(),s!==n&&s.dispose(),[2,f]}})})},tm=D({cropAndResize_:function(r,n,e,t,o,a){var i=_(r,"image","cropAndResize"),s=_(n,"boxes","cropAndResize","float32"),u=_(e,"boxInd","cropAndResize","int32");o=o||"bilinear",a=a||0;var c=s.shape[0];return E(i.rank===4,function(){return"Error in cropAndResize: image must be rank 4,but got rank "+i.rank+"."}),E(s.rank===2&&s.shape[1]===4,function(){return"Error in cropAndResize: boxes must be have size ["+c+",4] but had shape "+s.shape+"."}),E(u.rank===1&&u.shape[0]===c,function(){return"Error in cropAndResize: boxInd must be have size ["+c+"] but had shape "+s.shape+"."}),E(t.length===2,function(){return"Error in cropAndResize: cropSize must be of length 2, but got length "+t.length+"."}),E(t[0]>=1&&t[1]>=1,function(){return"cropSize must be atleast [1,1], but was "+t}),E(o==="bilinear"||o==="nearest",function(){return"method must be bilinear or nearest, but was "+o}),T.runKernelFunc(function(l,h){return l.cropAndResize(i,s,u,t,o,a)},{images:i,boxes:s,boxInd:u},null,"CropAndResize",{method:o,extrapolationValue:a,cropSize:t})}}),Xa=Object.freeze({resizeBilinear:Yv,resizeNearestNeighbor:$v,nonMaxSuppression:Jv,nonMaxSuppressionAsync:Qv,nonMaxSuppressionWithScore:Zv,nonMaxSuppressionWithScoreAsync:em,cropAndResize:tm}),Ya=function(r,n){return!(r>0)||n==="linear"},$a=function(r,n,e){if(e==null||e==="linear")return r;if(e==="relu")return r.mul(n.step());throw new Error("Gradient for activation "+e+" has not been implemented yet.")},Ja=function(r,n){var e=n,t=Pe(r.shape,n.shape);return t.length>0&&(e=e.sum(t)),e.reshape(r.shape)},Qa=function(r,n,e){if(n==="linear")return r;if(n==="relu")return Re(r);if(n==="elu")return qu(r);if(n==="relu6")return Xu(r);if(n==="prelu")return Ku(r,e);throw new Error("Unknown fused activation "+n+".")},nm=D({fusedMatMul_:function(r){var n,e=r.a,t=r.b,o=r.transposeA,a=o!==void 0&&o,i=r.transposeB,s=i!==void 0&&i,u=r.bias,c=r.activation,l=c===void 0?"linear":c,h=r.preluActivationWeights;if(Ya(T.state.gradientDepth,l)===!1){var f=fo(e,t,a,s);return u!=null&&(f=ue(f,u)),Qa(f,l,h)}var p=_(e,"a","fused matMul"),d=_(t,"b","fused matMul");n=Ie(p,d),p=n[0],d=n[1];var m=a?p.shape[p.rank-2]:p.shape[p.rank-1],v=s?d.shape[d.rank-1]:d.shape[d.rank-2],g=a?p.shape[p.rank-1]:p.shape[p.rank-2],x=s?d.shape[d.rank-2]:d.shape[d.rank-1],b=p.shape.slice(0,-2),y=d.shape.slice(0,-2),w=$(b),C=$(y);E(p.rank>=2&&d.rank>=2&&p.rank===d.rank,function(){return"Error in fused matMul: inputs must have the same rank of at least 2, got ranks "+p.rank+" and "+d.rank+"."}),E(We(b,y),function(){return"Error in fused matMul: outer dimensions ("+b+") and ("+y+") of Tensors with shapes "+p.shape+" and "+d.shape+" must match."}),E(m===v,function(){return"Error in fused matMul: inner shapes ("+m+") and ("+v+") of Tensors with shapes "+p.shape+" and "+d.shape+" and transposeA="+a+" and transposeB="+s+" must match."});var S,k,R=p.shape.slice(0,-2).concat([g,x]),I=a?p.as3D(w,m,g):p.as3D(w,g,m),N=s?d.as3D(C,x,v):d.as3D(C,v,x);u!=null&&le(R,(S=Ie(S=_(u,"bias","fused matMul"),p)[0]).shape),h!=null&&(k=_(h,"prelu weights","fused matMul"));var A={a:I,b:N};u!=null&&(A.bias=S),h!=null&&(A.preluActivationWeights=k);var L=[I,N];return T.runKernelFunc(function(O,B){var U=O.fusedBatchMatMul({a:I,b:N,transposeA:a,transposeB:s,bias:S,activation:l,preluActivationWeights:k});return B([I,N,U]),U},A,function(O,B){var U=B[0],V=B[1],W=B[2],G=$a(O,W,l),H={};return u!=null&&(H={bias:function(){return Ja(S,G)}}),Object.assign(a||s?!a&&s?{a:function(){return G.matMul(V,!1,!1)},b:function(){return G.matMul(U,!0,!1)}}:a&&!s?{a:function(){return V.matMul(G,!1,!0)},b:function(){return U.matMul(G,!1,!1)}}:{a:function(){return V.matMul(G,!0,!0)},b:function(){return G.matMul(U,!0,!0)}}:{a:function(){return G.matMul(V,!1,!0)},b:function(){return U.matMul(G,!0,!1)}},H)},"_FusedMatMul",{transposeA:a,transposeB:s,activation:l},L,[!0]).reshape(R)}}),rm=D({fusedConv2d_:function(r){var n=r.x,e=r.filter,t=r.strides,o=r.pad,a=r.dataFormat,i=a===void 0?"NHWC":a,s=r.dilations,u=s===void 0?[1,1]:s,c=r.dimRoundingMode,l=r.bias,h=r.activation,f=h===void 0?"linear":h,p=r.preluActivationWeights;if(f=f||"linear",Ya(T.state.gradientDepth,f)===!1){var d=vt(n,e,t,o,i,u,c);return l!=null&&(d=ue(d,l)),Qa(d,f,p)}var m=_(n,"x","conv2d"),v=_(e,"filter","conv2d"),g=m,x=!1;m.rank===3&&(x=!0,g=m.as4D(1,m.shape[0],m.shape[1],m.shape[2])),E(g.rank===4,function(){return"Error in fused conv2d: input must be rank 4, but got rank "+g.rank+"."}),E(v.rank===4,function(){return"Error in fused conv2d: filter must be rank 4, but got rank "+v.rank+"."}),c!=null&&E(De(o),function(){return"Error in fused conv2d: pad must be an integer when using, dimRoundingMode "+c+" but got pad "+o+"."}),E(g.shape[3]===v.shape[2],function(){return"Error in conv2d: depth of input ("+g.shape[3]+") must match input depth for filter "+v.shape[2]+"."}),E(nt(t,u),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+t+" and dilations '"+u+"'"}),E(i==="NHWC",function(){return"Error in conv2d: got dataFormat of "+i+" but only NHWC is currently supported."});var b,y,w=Cn(g.shape,v.shape,t,u,o,c);l!=null&&(b=Ie(b=_(l,"bias","fused conv2d"),m)[0],le(w.outShape,b.shape)),p!=null&&(y=_(p,"prelu weights","fused conv2d"));var C={x:g,filter:v};l!=null&&(C.bias=b),p!=null&&(C.preluActivationWeights=y);var S=[v,g],k=T.runKernelFunc(function(R,I){var N=R.fusedConv2d({input:g,filter:v,convInfo:w,bias:b,activation:f,preluActivationWeights:y});return I([v,g,N]),N},C,function(R,I){var N=I,A=N[0],L=N[1],O=N[2],B=$a(R,O,f);E(qn(u),function(){return"Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+u+"'"});var U={};return l!=null&&(U={bias:function(){return Ja(b,B)}}),Object.assign({x:function(){return Lu(L.shape,B,A,t,o)},filter:function(){return za(L,B,A.shape,t,o)}},U)},"FusedConv2D",{convInfo:w,activation:f},S,[!0]);return x?k.as3D(k.shape[1],k.shape[2],k.shape[3]):k}}),om=D({fusedDepthwiseConv2d_:function(r){var n=r.x,e=r.filter,t=r.strides,o=r.pad,a=r.dataFormat,i=a===void 0?"NHWC":a,s=r.dilations,u=s===void 0?[1,1]:s,c=r.dimRoundingMode,l=r.bias,h=r.activation,f=h===void 0?"linear":h,p=r.preluActivationWeights;if(Ya(T.state.gradientDepth,f)===!1){var d=ho(n,e,t,o,i,u,c);return l!=null&&(d=ue(d,l)),Qa(d,f,p)}var m=_(n,"x","depthwiseConv2d"),v=_(e,"filter","depthwiseConv2d"),g=m,x=!1;m.rank===3&&(x=!0,g=m.as4D(1,m.shape[0],m.shape[1],m.shape[2])),E(g.rank===4,function(){return"Error in fused depthwiseConv2d: input must be rank 4, but got rank "+g.rank+"."}),E(v.rank===4,function(){return"Error in fused depthwiseConv2d: filter must be rank 4, but got rank "+v.rank+"."}),E(g.shape[3]===v.shape[2],function(){return"Error in fused depthwiseConv2d: number of input channels ("+g.shape[3]+") must match the inChannels dimension in filter "+v.shape[2]+"."}),u==null&&(u=[1,1]),E(nt(t,u),function(){return"Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides "+t+" and dilations '"+u+"'"}),c!=null&&E(De(o),function(){return"Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode "+c+" but got pad "+o+"."});var b,y,w=Cn(g.shape,v.shape,t,u,o,c,!0);l!=null&&(b=Ie(b=_(l,"bias","fused conv2d"),m)[0],le(w.outShape,b.shape)),p!=null&&(y=_(p,"prelu weights","fused depthwiseConv2d"));var C={x:g,filter:v};l!=null&&(C.bias=b),p!=null&&(C.preluActivationWeights=y);var S=[v,g],k=T.runKernelFunc(function(R,I){var N=R.fusedDepthwiseConv2D({input:g,filter:v,convInfo:w,bias:b,activation:f,preluActivationWeights:y});return I([v,g,N]),N},C,function(R,I){E(qn(u),function(){return"Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+u+"'"});var N=I[0],A=I[1],L=I[2],O=$a(R,L,f),B={};return l!=null&&(B={bias:function(){return Ja(b,O)}}),Object.assign({x:function(){return Wu(A.shape,O,N,w)},filter:function(){return Vu(A,O,N.shape,w)}},B)},"FusedDepthwiseConv2D",{convInfo:w,activation:f},S,[!0]);return x?k.as3D(k.shape[1],k.shape[2],k.shape[3]):k}}),am=Object.freeze({matMul:nm,conv2d:rm,depthwiseConv2d:om}),im=Object.freeze({image:Xa,linalg:Xv,losses:Hv,spectral:Dv,fused:am,signal:Mv,square:Vp,squaredDifference:Cu,conv1d:Yd,conv2d:vt,conv3d:$d,depthwiseConv2d:ho,separableConv2d:Ga,conv2dTranspose:Jd,conv3dTranspose:Qd,op:D,batchNormalization2d:md,batchNormalization3d:gd,batchNormalization4d:yd,batchNormalization:xd,batchNorm:Su,batchNorm2d:bd,batchNorm3d:wd,batchNorm4d:Cd,booleanMaskAsync:Xd,complex:ze,real:pt,imag:St,concat:Fe,concat1d:oh,concat2d:ah,concat3d:ih,concat4d:sh,split:Da,matMul:fo,dot:Zd,outerProduct:ev,reverse:gr,reverse1d:tv,reverse2d:nv,reverse3d:rv,reverse4d:ov,maxPool:Le,avgPool:yr,pool:av,maxPool3d:iv,avgPool3d:sv,slice:Ft,slice1d:uv,slice2d:cv,slice3d:Gu,slice4d:lv,abs:Up,acos:zp,acosh:Gp,asin:Hp,asinh:jp,atan:qp,atanh:Kp,ceil:Xp,clipByValue:Wa,cos:Yp,cosh:$p,erf:Jp,exp:va,expm1:Qp,floor:Zp,log:ed,log1p:td,logSigmoid:nd,neg:Qr,reciprocal:rd,round:od,rsqrt:_u,sigmoid:Eu,sign:ad,isNaN:id,isInf:sd,isFinite:ud,sin:cd,sinh:ld,softplus:hd,sqrt:fd,step:pd,tan:dd,tanh:vd,all:hv,any:fv,argMax:pv,argMin:dv,logSumExp:vv,max:po,mean:mv,min:gv,moments:yv,sum:ju,prod:xv,equal:Fu,equalStrict:Ld,greater:Wd,greaterEqual:Mu,greaterEqualStrict:Vd,greaterStrict:Ud,less:zd,lessEqual:Gd,lessEqualStrict:Hd,lessStrict:jd,notEqual:qd,notEqualStrict:Kd,add:ue,addN:Rd,addStrict:Id,atan2:kd,div:mt,divNoNan:Sd,divStrict:Dd,floorDiv:Tu,maximum:Va,maximumStrict:Ad,minimum:Nu,minimumStrict:Td,mod:Nd,modStrict:Fd,mul:Je,mulStrict:Md,pow:Zr,powStrict:Pd,squaredDifferenceStrict:Od,sub:Oe,subStrict:Bd,elu:qu,leakyRelu:bv,prelu:Ku,relu:Re,relu6:Xu,selu:wv,logicalAnd:lo,logicalNot:_d,logicalOr:Du,logicalXor:Ed,where:xn,whereAsync:Au,buffer:oe,print:mh,batchToSpaceND:js,broadcastTo:gh,cast:yh,clone:xh,cumsum:bh,depthToSpace:wh,expandDims:ft,eye:qs,multinomial:Ch,oneHot:ha,pad:wn,pad1d:_h,pad2d:Eh,pad3d:Rh,pad4d:Ih,rand:kh,randomNormal:Sh,randomGamma:Dh,randomUniform:Ks,reshape:gt,spaceToBatchND:Xs,squeeze:Ys,stack:lt,tile:Bn,truncatedNormal:Ah,unstack:Me,setdiff1dAsync:Th,fill:Nt,linspace:rh,ones:Xn,range:Hr,scalar:j,tensor:He,tensor1d:Te,tensor2d:rn,tensor3d:Sa,tensor4d:Qe,tensor5d:eh,tensor6d:th,variable:nh,zeros:we,onesLike:Hs,zerosLike:ve,transpose:sn,softmax:qt,logSoftmax:Lh,localResponseNormalization:Cv,norm:Yu,gather:Ua,unsortedSegmentSum:Pu,basicLSTMCell:_v,multiRNNCell:Ev,movingAverage:Rv,stridedSlice:Iv,topk:kv,scatterND:Sv,fft:Ha,ifft:eo,rfft:ja,irfft:$u,sparseToDense:Av,gatherND:Tv,diag:Nv,dropout:Fv,hannWindow:qa,hammingWindow:Qu,frame:Ka,stft:Zu,inTopKAsync:Pv});function z(r,n){Array.isArray(r)||(r=[r]),r.forEach(function(e){e!=null&&E(e.dtype!=="complex64",function(){return n+" does not support complex64 tensors."})})}function jo(r,n,e,t){if(e==="linear")return r.linear(n);if(e==="relu")return r.relu(n);if(e==="elu")return r.elu(n);if(e==="relu6")return r.relu6(n);if(e==="prelu")return r.prelu(n,t);throw new Error("Activation "+e+" has not been implemented for the CPU backend.")}var sm=function(r){function n(){var e=r.call(this)||this;return e.blockSize=48,e.firstUse=!0,e.data=new nu(e,T),e}return xt(n,r),n.prototype.write=function(e,t,o){this.firstUse&&(this.firstUse=!1,P().get("IS_NODE")&&zr(`
============================
Hi there 👋. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.
============================`));var a={};return this.data.set(a,{values:e,dtype:o}),a},n.prototype.move=function(e,t,o,a){this.data.set(e,{values:t,dtype:a})},n.prototype.numDataIds=function(){return this.data.numDataIds()},n.prototype.read=function(e){return X(this,void 0,void 0,function(){return Y(this,function(t){return[2,this.readSync(e)]})})},n.prototype.readSync=function(e){var t=this.data.get(e),o=t.dtype,a=t.complexTensors;return o==="complex64"?da(this.readSync(a.real.dataId),this.readSync(a.imag.dataId)):this.data.get(e).values},n.prototype.bufferSync=function(e){var t=this.readSync(e.dataId),o=t;if(e.dtype==="string")try{o=t.map(function(a){return Wr(a)})}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return oe(e.shape,e.dtype,o)},n.prototype.makeOutput=function(e,t,o){var a=this.write(e,t,o);return T.makeTensorFromDataId(a,t,o,this)},n.prototype.disposeData=function(e){if(this.data.has(e)){var t=this.data.get(e).complexTensors;t!=null&&(t.real.dispose(),t.imag.dispose()),this.data.delete(e)}},n.prototype.time=function(e){return X(this,void 0,void 0,function(){var t;return Y(this,function(o){return t=It(),e(),[2,{kernelMs:It()-t}]})})},n.prototype.memory=function(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}},n.prototype.complex=function(e,t){var o=this.makeOutput(null,e.shape,"complex64");return this.data.get(o.dataId).complexTensors={real:T.keep(e.clone()),imag:T.keep(t.clone())},o},n.prototype.real=function(e){return this.data.get(e.dataId).complexTensors.real.clone()},n.prototype.imag=function(e){return this.data.get(e.dataId).complexTensors.imag.clone()},n.prototype.slice=function(e,t,o){if(z(e,"slice"),eu(e.shape,t,o)){var a=tu(t,e.strides),i=$(o);return He(this.readSync(e.dataId).subarray(a,a+i),o,e.dtype)}for(var s=oe(o,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c).map(function(h,f){return h+t[f]});s.values[c]=u.get.apply(u,l)}return s.toTensor()},n.prototype.stridedSlice=function(e,t,o,a){z(e,"stridedSlice");var i=Ta(t,o,a);if(i.some(function(p){return p===0}))return He([],i);for(var s=oe(i,e.dtype),u=this.bufferSync(e),c=0;c<s.size;c++){for(var l=s.indexToLoc(c),h=new Array(l.length),f=0;f<h.length;f++)h[f]=l[f]*a[f]+t[f];s.set.apply(s,[u.get.apply(u,h)].concat(l))}return s.toTensor()},n.prototype.diag=function(e){for(var t=this.readSync(e.dataId),o=oe([e.size,e.size],e.dtype),a=o.values,i=0;i<t.length;i++)a[i*e.size+i]=t[i];return o.toTensor()},n.prototype.unstack=function(e,t){for(var o=e.shape[t],a=new Array(e.rank-1),i=0,s=0;s<e.rank;s++)s!==t&&(a[i++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[t]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[t]=s,l[s]=this.slice(e,u,c).reshape(a);return l},n.prototype.reverse=function(e,t){z(e,"reverse");for(var o=oe(e.shape,e.dtype),a=this.bufferSync(e),i=function(u){var c=o.indexToLoc(u),l=c.slice();t.forEach(function(h){return l[h]=e.shape[h]-1-l[h]}),o.set.apply(o,[a.get.apply(a,l)].concat(c))},s=0;s<o.size;s++)i(s);return o.toTensor()},n.prototype.concat=function(e,t){var o=this;if(e[0].dtype==="complex64"){var a=e.map(function(p){return pt(p)}),i=e.map(function(p){return St(p)});return ze(this.concat(a,t),this.concat(i,t))}var s=e.map(function(p){var d=$(p.shape.slice(t));return p.as2D(-1,d)}),u=jn(s.map(function(p){return p.shape}),1),c=oe(u,e[0].dtype).values;if(s[0].shape[0]===1){var l=0;s.forEach(function(p){c.set(o.readSync(p.dataId),l),l+=p.size})}else{var h=0;s.forEach(function(p){for(var d=o.readSync(p.dataId),m=0,v=0;v<p.shape[0];++v)for(var g=v*u[1]+h,x=0;x<p.shape[1];++x)c[g+x]=d[m++];h+=p.shape[1]})}var f=jn(e.map(function(p){return p.shape}),t);return He(c,f,e[0].dtype)},n.prototype.neg=function(e){return z(e,"neg"),this.multiply(j(-1),e)},n.prototype.add=function(e,t){return e.dtype==="complex64"||t.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),t.cast("complex64"),function(o,a,i,s){return{real:o+i,imag:a+s}}):this.broadcastedBinaryOp(e,t,Ge(e.dtype,t.dtype),function(o,a){return o+a})},n.prototype.addN=function(e){var t=this;z(e,"addN");for(var o=e.map(function(l){return t.readSync(l.dataId)}),a=oe(e[0].shape,e[0].dtype),i=a.values,s=0;s<e.length;s++)for(var u=o[s],c=0;c<i.length;c++)i[c]+=u[c];return a.toTensor()},n.prototype.softmax=function(e,t){var o=Be([t],e.shape),a=this.max(e,o),i=tt(a.shape,o),s=this.subtract(e,a.reshape(i)),u=this.exp(s),c=this.sum(u,o).reshape(i);return this.realDivide(u,c)},n.prototype.subtract=function(e,t){return e.dtype==="complex64"||t.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),t.cast("complex64"),function(o,a,i,s){return{real:o-i,imag:a-s}}):this.broadcastedBinaryOp(e,t,Ge(e.dtype,t.dtype),function(o,a){return o-a})},n.prototype.pow=function(e,t){return z([e,t],"pow"),this.broadcastedBinaryOp(e,t,e.dtype,function(o,a){return Math.pow(o,a)})},n.prototype.batchMatMul=function(e,t,o,a){z([e,t],"matMul");for(var i=o?e.shape[1]:e.shape[2],s=o?e.shape[2]:e.shape[1],u=a?t.shape[1]:t.shape[2],c=e.shape[0],l=this.readSync(e.dataId),h=this.readSync(t.dataId),f=o?[e.strides[0],1,e.strides[1]]:[e.strides[0],e.strides[1],1],p=f[0],d=f[1],m=f[2],v=a?[1,t.strides[1],t.strides[0]]:[t.strides[1],1,t.strides[0]],g=v[0],x=v[1],b=v[2],y=s*u,w=oe([c,s,u],e.dtype),C=w.values,S=this.blockSize,k=0;k<c;k++)for(var R=0;R<s;R+=S)for(var I=0;I<u;I+=S)for(var N=0;N<i;N+=S)for(var A=Math.min(R+S,s),L=Math.min(I+S,u),O=Math.min(N+S,i),B=R;B<A;B++)for(var U=I;U<L;U++){for(var V=0,W=N;W<O;W++)V+=l[k*p+B*d+W*m]*h[W*g+U*x+k*b];C[k*y+(B*u+U)]+=V}return w.toTensor()},n.prototype.fusedBatchMatMul=function(e){var t=e.a,o=e.b,a=e.transposeA,i=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=this.batchMatMul(t,o,a,i);return s&&(l=this.add(l,s)),u&&(l=jo(this,l,u,c)),l},n.prototype.multiply=function(e,t){return e.dtype==="complex64"||t.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),t.cast("complex64"),function(o,a,i,s){return{real:o*i-a*s,imag:o*s+a*i}}):this.broadcastedBinaryOp(e,t,Ge(e.dtype,t.dtype),function(o,a){return o*a})},n.prototype.realDivide=function(e,t){return z([e,t],"realDivide"),this.broadcastedBinaryOp(e,t,"float32",function(o,a){return o/a})},n.prototype.floorDiv=function(e,t){return z([e,t],"floorDiv"),this.broadcastedBinaryOp(e,t,"int32",function(o,a){return Math.floor(o/a)})},n.prototype.sum=function(e,t){z(e,"sum"),at("sum",t,e.rank);for(var o=Ke(e.shape,t),a=o[0],i=o[1],s=we(a,Ge(e.dtype,"int32")),u=$(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var f=h*u,p=0,d=0;d<u;++d)p+=l[f+d];c[h]=p}return s},n.prototype.prod=function(e,t){z(e,"sum");for(var o=Ke(e.shape,t),a=o[0],i=o[1],s=we(a,Ge(e.dtype,"int32")),u=$(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var f=h*u,p=1,d=0;d<u;++d)p*=l[f+d];c[h]=p}return s},n.prototype.unsortedSegmentSum=function(e,t,o){z(e,"unsortedSegmentSum");for(var a=[],i=e.rank-t.rank,s=0;s<i;++s)t=t.expandDims(s+1);for(s=0;s<o;++s){var u=j(s,"int32"),c=Fu(u,t).asType("float32").mul(e).sum(0);a.push(c)}return lt(a)},n.prototype.argMin=function(e,t){z(e,"argMin");var o=[t];at("argMin",o,e.rank);for(var a=Ke(e.shape,o),i=a[0],s=a[1],u=we(i,"int32"),c=$(s),l=this.readSync(u.dataId),h=this.readSync(e.dataId),f=0;f<l.length;++f){for(var p=f*c,d=h[p],m=0,v=0;v<c;++v){var g=h[p+v];g<d&&(d=g,m=v)}l[f]=m}return u},n.prototype.argMax=function(e,t){z(e,"argMax");var o=[t];at("argMax",o,e.rank);for(var a=Ke(e.shape,o),i=a[0],s=a[1],u=we(i,"int32"),c=$(s),l=this.readSync(u.dataId),h=this.readSync(e.dataId),f=0;f<l.length;++f){for(var p=f*c,d=h[p],m=0,v=0;v<c;++v){var g=h[p+v];g>d&&(d=g,m=v)}l[f]=m}return u},n.prototype.cumsum=function(e,t,o,a){if(z(e,"cumsum"),t!==e.rank-1)throw new Error("backend.cumsum in CPU expects an inner-most axis="+(e.rank-1)+" but got axis="+t);for(var i=Ge(e.dtype,"int32"),s=we(e.shape,i),u=this.readSync(s.dataId),c=this.readSync(e.dataId),l=e.shape[e.rank-1],h=a?function(v,g){return v+l-g-1}:function(v,g){return v+g},f=0;f<c.length;f+=l)for(var p=0;p<l;p++){var d=h(f,p);if(p===0)u[d]=o?0:c[d];else{var m=h(f,p-1);u[d]=o?c[m]+u[m]:c[d]+u[m]}}return s},n.prototype.equal=function(e,t){return z([e,t],"equal"),this.broadcastedBinaryOp(e,t,"bool",function(o,a){return o===a?1:0})},n.prototype.notEqual=function(e,t){return z([e,t],"notEqual"),this.broadcastedBinaryOp(e,t,"bool",function(o,a){return o!==a?1:0})},n.prototype.less=function(e,t){return z([e,t],"less"),this.broadcastedBinaryOp(e,t,"bool",function(o,a){return o<a?1:0})},n.prototype.lessEqual=function(e,t){return z([e,t],"lessEqual"),this.broadcastedBinaryOp(e,t,"bool",function(o,a){return o<=a?1:0})},n.prototype.greater=function(e,t){return z([e,t],"greater"),this.broadcastedBinaryOp(e,t,"bool",function(o,a){return o>a?1:0})},n.prototype.greaterEqual=function(e,t){return z([e,t],"greaterEqual"),this.broadcastedBinaryOp(e,t,"bool",function(o,a){return o>=a?1:0})},n.prototype.logicalNot=function(e){z(e,"logicalNot");for(var t=this.readSync(e.dataId),o=new Uint8Array(t.length),a=0;a<t.length;++a)o[a]=t[a]?0:1;return this.makeOutput(o,e.shape,"bool")},n.prototype.logicalAnd=function(e,t){return z([e,t],"logicalAnd"),this.broadcastedBinaryOp(e,t,"bool",function(o,a){return o&&a})},n.prototype.logicalOr=function(e,t){return z([e,t],"logicalOr"),this.broadcastedBinaryOp(e,t,"bool",function(o,a){return o||a})},n.prototype.select=function(e,t,o){z([e,t,o],"select");for(var a=this.readSync(e.dataId),i=this.readSync(t.dataId),s=this.readSync(o.dataId),u=we(t.shape,Ge(t.dtype,o.dtype)),c=this.readSync(u.dataId),l=0,h=e.rank===0||e.rank>1||t.rank===1?1:$(t.shape.slice(1)),f=0;f<a.length;f++)for(var p=0;p<h;p++)a[f]===1?c[l++]=i[f]:c[l++]=s[f];return u},n.prototype.where=function(e){z([e],"where");var t=this.readSync(e.dataId);return Pa(e.shape,t)},n.prototype.topk=function(e,t,o){return z(e,"topk"),lu(this.readSync(e.dataId),e.shape,e.dtype,t)},n.prototype.min=function(e,t){z(e,"min"),at("min",t,e.rank);for(var o=Ke(e.shape,t),a=o[0],i=o[1],s=we(a,e.dtype),u=$(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var f=h*u,p=l[f],d=0;d<u;++d){var m=l[f+d];m<p&&(p=m)}c[h]=p}return s},n.prototype.minimum=function(e,t){return z([e,t],"minimum"),this.broadcastedBinaryOp(e,t,e.dtype,function(o,a){return Math.min(o,a)})},n.prototype.mod=function(e,t){return z([e,t],"mod"),this.broadcastedBinaryOp(e,t,e.dtype,function(o,a){var i=o%a;return o<0&&a<0||o>=0&&a>=0?i:(i+a)%a})},n.prototype.max=function(e,t){z(e,"max"),at("max",t,e.rank);for(var o=Ke(e.shape,t),a=o[0],i=o[1],s=we(a,e.dtype),u=$(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var f=h*u,p=l[f],d=0;d<u;++d){var m=l[f+d];m>p&&(p=m)}c[h]=p}return s},n.prototype.maximum=function(e,t){return z([e,t],"maximum"),this.broadcastedBinaryOp(e,t,e.dtype,function(o,a){return Math.max(o,a)})},n.prototype.all=function(e,t){z(e,"all"),at("all",t,e.rank);for(var o=Ke(e.shape,t),a=o[0],i=o[1],s=we(a,e.dtype),u=$(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var f=h*u,p=l[f],d=0;d<u;++d){var m=l[f+d];p=p&&m}c[h]=p}return s},n.prototype.any=function(e,t){z(e,"any"),at("any",t,e.rank);for(var o=Ke(e.shape,t),a=o[0],i=o[1],s=we(a,e.dtype),u=$(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var f=h*u,p=l[f],d=0;d<u;++d){var m=l[f+d];p=p||m}c[h]=p}return s},n.prototype.squaredDifference=function(e,t){return z([e,t],"squaredDifference"),this.broadcastedBinaryOp(e,t,e.dtype,function(o,a){var i=o-a;return i*i})},n.prototype.ceil=function(e){z(e,"ceil");for(var t=this.readSync(e.dataId),o=new Float32Array(t.length),a=0;a<t.length;++a)o[a]=Math.ceil(t[a]);return this.makeOutput(o,e.shape,"float32")},n.prototype.floor=function(e){z(e,"floor");for(var t=this.readSync(e.dataId),o=new Float32Array(t.length),a=0;a<t.length;++a)o[a]=Math.floor(t[a]);return this.makeOutput(o,e.shape,"float32")},n.prototype.sign=function(e){z(e,"x");for(var t=this.readSync(e.dataId),o=new Float32Array(t.length),a=0;a<t.length;++a)t[a]<0?o[a]=-1:t[a]>0?o[a]=1:o[a]=0;return this.makeOutput(o,e.shape,"float32")},n.prototype.isNaN=function(e){z(e,"x");for(var t=this.readSync(e.dataId),o=new Uint8Array(t.length),a=0;a<t.length;++a)Number.isNaN(t[a])&&(o[a]=1);return this.makeOutput(o,e.shape,"bool")},n.prototype.isInf=function(e){z(e,"x");for(var t=this.readSync(e.dataId),o=new Uint8Array(t.length),a=0;a<t.length;++a)Math.abs(t[a])===1/0&&(o[a]=1);return this.makeOutput(o,e.shape,"bool")},n.prototype.isFinite=function(e){z(e,"x");for(var t=this.readSync(e.dataId),o=new Uint8Array(t.length),a=0;a<t.length;++a)Number.isFinite(t[a])&&(o[a]=1);return this.makeOutput(o,e.shape,"bool")},n.prototype.round=function(e){z(e,"round");for(var t=this.readSync(e.dataId),o=new Float32Array(t.length),a=0;a<t.length;++a){var i=Math.floor(t[a]);t[a]-i<.5?o[a]=Math.floor(t[a]):t[a]-i>.5?o[a]=Math.ceil(t[a]):o[a]=i%2==0?i:i+1}return this.makeOutput(o,e.shape,"float32")},n.prototype.exp=function(e){z(e,"exp");for(var t=this.readSync(e.dataId),o=new Float32Array(t.length),a=0;a<t.length;++a)o[a]=Math.exp(t[a]);return this.makeOutput(o,e.shape,"float32")},n.prototype.expm1=function(e){z(e,"expm1");for(var t=this.readSync(e.dataId),o=new Float32Array(t.length),a=0;a<t.length;++a)o[a]=Math.expm1(t[a]);return this.makeOutput(o,e.shape,"float32")},n.prototype.log=function(e){z(e,"log");for(var t=this.readSync(e.dataId),o=new Float32Array(t.length),a=0;a<t.length;++a){var i=t[a];o[a]=Math.log(i)}return this.makeOutput(o,e.shape,"float32")},n.prototype.log1p=function(e){z(e,"log1p");for(var t=this.readSync(e.dataId),o=new Float32Array(t.length),a=0;a<t.length;++a){var i=t[a];o[a]=Math.log1p(i)}return this.makeOutput(o,e.shape,"float32")},n.prototype.sqrt=function(e){z(e,"sqrt");for(var t=this.readSync(e.dataId),o=new Float32Array(t.length),a=0;a<t.length;++a){var i=t[a];o[a]=Math.sqrt(i)}return this.makeOutput(o,e.shape,"float32")},n.prototype.rsqrt=function(e){z(e,"rsqrt");for(var t=this.readSync(e.dataId),o=new Float32Array(t.length),a=0;a<t.length;++a){var i=t[a];o[a]=1/Math.sqrt(i)}return this.makeOutput(o,e.shape,"float32")},n.prototype.reciprocal=function(e){z(e,"reciprocal");for(var t=this.readSync(e.dataId),o=new Float32Array(t.length),a=0;a<t.length;++a)o[a]=1/t[a];return this.makeOutput(o,e.shape,"float32")},n.prototype.linear=function(e){return e},n.prototype.relu=function(e){z(e,"relu");for(var t=we(e.shape,e.dtype),o=this.readSync(t.dataId),a=this.readSync(e.dataId),i=0;i<a.length;++i)o[i]=Math.max(0,a[i]);return t},n.prototype.relu6=function(e){z(e,"relu");for(var t=we(e.shape,e.dtype),o=this.readSync(t.dataId),a=this.readSync(e.dataId),i=0;i<a.length;++i)o[i]=Math.min(Math.max(0,a[i]),6);return t},n.prototype.prelu=function(e,t){return z([e,t],"prelu"),this.broadcastedBinaryOp(e,t,e.dtype,function(o,a){return o<0?a*o:o})},n.prototype.elu=function(e){z(e,"elu");for(var t=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a){var i=o[a];t[a]=i>=0?i:Math.exp(i)-1}return this.makeOutput(t,e.shape,"float32")},n.prototype.eluDer=function(e,t){z([e,t],"eluDer");for(var o=new Float32Array(t.size),a=this.readSync(t.dataId),i=this.readSync(e.dataId),s=0;s<a.length;++s){var u=a[s];o[s]=u>=1?i[s]:i[s]*(u+1)}return this.makeOutput(o,t.shape,"float32")},n.prototype.selu=function(e){z(e,"selu");for(var t=Ba,o=La,a=new Float32Array(e.size),i=this.readSync(e.dataId),s=0;s<i.length;++s){var u=i[s];a[s]=u>=0?o*u:t*(Math.exp(u)-1)}return this.makeOutput(a,e.shape,"float32")},n.prototype.clip=function(e,t,o){z(e,"clip");for(var a=new Float32Array(e.size),i=this.readSync(e.dataId),s=0;s<i.length;++s){var u=i[s];a[s]=u>o?o:u<t?t:u}return this.makeOutput(a,e.shape,"float32")},n.prototype.abs=function(e){for(var t=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)t[a]=Math.abs(o[a]);return this.makeOutput(t,e.shape,"float32")},n.prototype.complexAbs=function(e){for(var t=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<e.size;++a){var i=o[2*a],s=o[2*a+1];t[a]=Math.hypot(i,s)}return this.makeOutput(t,e.shape,"float32")},n.prototype.int=function(e){z(e,"int");for(var t=new Int32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)t[a]=o[a];return this.makeOutput(t,e.shape,"int32")},n.prototype.sigmoid=function(e){z(e,"sigmoid");for(var t=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)t[a]=1/(1+Math.exp(-o[a]));return this.makeOutput(t,e.shape,"float32")},n.prototype.softplus=function(e){z(e,"softplus");for(var t=Math.log(11920928955078125e-23)+2,o=new Float32Array(e.size),a=this.readSync(e.dataId),i=0;i<a.length;++i){var s=a[i]>-t,u=a[i]<t,c=Math.exp(a[i]),l=void 0;l=u?c:s?a[i]:Math.log(1+c),o[i]=l}return this.makeOutput(o,e.shape,"float32")},n.prototype.sin=function(e){z(e,"sin");for(var t=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)t[a]=Math.sin(o[a]);return this.makeOutput(t,e.shape,"float32")},n.prototype.cos=function(e){z(e,"cos");for(var t=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)t[a]=Math.cos(o[a]);return this.makeOutput(t,e.shape,"float32")},n.prototype.tan=function(e){z(e,"tan");for(var t=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)t[a]=Math.tan(o[a]);return this.makeOutput(t,e.shape,"float32")},n.prototype.asin=function(e){z(e,"asin");for(var t=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)t[a]=Math.asin(o[a]);return this.makeOutput(t,e.shape,"float32")},n.prototype.acos=function(e){z(e,"acos");for(var t=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)t[a]=Math.acos(o[a]);return this.makeOutput(t,e.shape,"float32")},n.prototype.atan=function(e){z(e,"atan");for(var t=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)t[a]=Math.atan(o[a]);return this.makeOutput(t,e.shape,"float32")},n.prototype.atan2=function(e,t){return z([e,t],"atan2"),this.broadcastedBinaryOp(e,t,e.dtype,function(o,a){return Math.atan2(o,a)})},n.prototype.sinh=function(e){z(e,"sinh");for(var t=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)t[a]=Math.sinh(o[a]);return this.makeOutput(t,e.shape,"float32")},n.prototype.cosh=function(e){z(e,"cosh");for(var t=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)t[a]=Math.cosh(o[a]);return this.makeOutput(t,e.shape,"float32")},n.prototype.tanh=function(e){z(e,"tanh");for(var t=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)t[a]=sl(o[a]);return this.makeOutput(t,e.shape,"float32")},n.prototype.asinh=function(e){z(e,"asinh");for(var t=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)t[a]=Math.asinh(o[a]);return this.makeOutput(t,e.shape,"float32")},n.prototype.acosh=function(e){z(e,"acosh");for(var t=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)t[a]=Math.acosh(o[a]);return this.makeOutput(t,e.shape,"float32")},n.prototype.atanh=function(e){z(e,"atanh");for(var t=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)t[a]=Math.atanh(o[a]);return this.makeOutput(t,e.shape,"float32")},n.prototype.erf=function(e){z(e,"erf");for(var t=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a){var i=Math.sign(o[a]),s=Math.abs(o[a]),u=1/(1+.3275911*s);t[a]=i*(1-((((1.061405429*u-1.453152027)*u+1.421413741)*u-.284496736)*u+.254829592)*u*Math.exp(-s*s))}return this.makeOutput(t,e.shape,"float32")},n.prototype.step=function(e,t){t===void 0&&(t=0),z(e,"step");for(var o=new Float32Array(e.size),a=this.readSync(e.dataId),i=0;i<a.length;++i){var s=a[i];isNaN(s)?o[i]=NaN:o[i]=s>0?1:t}return this.makeOutput(o,e.shape,"float32")},n.prototype.fusedConv2d=function(e){var t=e.input,o=e.filter,a=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.conv2d(t,o,a);return i&&(c=this.add(c,i)),s&&(c=jo(this,c,s,u)),c},n.prototype.conv2d=function(e,t,o){z([e,t],"conv2d");for(var a=o.filterHeight,i=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,h=o.dataFormat==="channelsLast",f=oe(o.outShape,e.dtype),p=e.strides[0],d=h?e.strides[1]:e.strides[2],m=h?e.strides[2]:1,v=h?1:e.strides[1],g=f.strides[0],x=h?f.strides[1]:f.strides[2],b=h?f.strides[2]:1,y=h?1:f.strides[1],w=this.readSync(e.dataId),C=this.readSync(t.dataId),S=f.values,k=0;k<o.batchSize;++k)for(var R=k*p,I=k*g,N=0;N<o.outHeight;++N)for(var A=I+N*x,L=N*o.strideHeight-l,O=0;O<a;O++){var B=L+O*s;if(!(B<0||B>=o.inHeight))for(var U=O*t.strides[0],V=R+B*d,W=0;W<o.outWidth;++W)for(var G=A+W*b,H=W*o.strideWidth-c,q=0;q<i;q++){var ee=H+q*u;if(!(ee<0||ee>=o.inWidth))for(var te=V+ee*m,ie=U+q*t.strides[1],se=0;se<o.inChannels;++se){for(var ce=w[te+se*v],pe=0;pe<o.outChannels;++pe)S[G+pe*y]+=ce*C[ie+pe];ie+=o.outChannels}}}return f.toTensor()},n.prototype.conv3d=function(e,t,o){for(var a=o.filterDepth,i=o.filterHeight,s=o.filterWidth,u=o.dilationDepth,c=o.dilationHeight,l=o.dilationWidth,h=o.padInfo.front,f=o.padInfo.left,p=o.padInfo.top,d=oe(o.outShape,e.dtype),m=this.readSync(e.dataId),v=this.readSync(t.dataId),g=d.values,x=0;x<o.batchSize;++x)for(var b=x*e.strides[0],y=x*d.strides[0],w=0;w<o.outDepth;++w)for(var C=y+w*d.strides[1],S=w*o.strideDepth-h,k=0;k<a;k++){var R=S+k*u;if(!(R<0||R>=o.inDepth))for(var I=k*t.strides[0],N=b+R*e.strides[1],A=0;A<o.outHeight;++A)for(var L=C+A*d.strides[2],O=A*o.strideHeight-p,B=0;B<i;B++){var U=O+B*c;if(!(U<0||U>=o.inHeight))for(var V=I+B*t.strides[1],W=N+U*e.strides[2],G=0;G<o.outWidth;++G)for(var H=L+G*o.outChannels,q=G*o.strideWidth-f,ee=0;ee<s;ee++){var te=q+ee*l;if(!(te<0||te>=o.inWidth))for(var ie=V+ee*t.strides[2],se=W+te*o.inChannels,ce=ie,pe=0;pe<o.inChannels;++pe){for(var he=m[se+pe],de=0;de<o.outChannels;++de)g[H+de]+=he*v[ce+de];ce+=o.outChannels}}}}return d.toTensor()},n.prototype.conv2dDerInput=function(e,t,o){z([e,t],"conv2dDerInput");for(var a=oe(o.inShape,"float32"),i=a.values,s=this.readSync(e.dataId),u=this.readSync(t.dataId),c=t.strides,l=c[0],h=c[1],f=c[2],p=o.batchSize,d=o.filterHeight,m=o.filterWidth,v=o.inChannels,g=o.inHeight,x=o.inWidth,b=o.outChannels,y=o.outHeight,w=o.outWidth,C=o.strideHeight,S=o.strideWidth,k=o.dataFormat,R=d-1-o.padInfo.top,I=m-1-o.padInfo.left,N=k==="channelsLast",A=a.strides[0],L=N?a.strides[1]:a.strides[2],O=N?a.strides[2]:1,B=N?1:a.strides[1],U=e.strides[0],V=N?e.strides[1]:e.strides[2],W=N?e.strides[2]:1,G=N?1:e.strides[1],H=0;H<p;++H)for(var q=0;q<v;++q)for(var ee=0;ee<g;++ee)for(var te=ee-R,ie=Math.max(0,Math.ceil(te/C)),se=Math.min(y,(d+te)/C),ce=0;ce<x;++ce){for(var pe=ce-I,he=Math.max(0,Math.ceil(pe/S)),de=Math.min(w,(m+pe)/S),Ae=0,fe=ie;fe<se;++fe)for(var xe=fe*C-te,me=he;me<de;++me)for(var ke=U*H+V*fe+W*me,Ce=l*(d-1-xe)+h*(m-1-(me*S-pe))+f*q,_e=0;_e<b;++_e)Ae+=s[ke+G*_e]*u[Ce+_e];i[A*H+L*ee+O*ce+B*q]=Ae}return a.toTensor()},n.prototype.conv3dDerInput=function(e,t,o){for(var a=oe(o.inShape,"float32"),i=a.values,s=a.strides,u=s[0],c=s[1],l=s[2],h=s[3],f=this.readSync(e.dataId),p=e.strides,d=p[0],m=p[1],v=p[2],g=p[3],x=this.readSync(t.dataId),b=t.strides,y=b[0],w=b[1],C=b[2],S=b[3],k=o.batchSize,R=o.filterDepth,I=o.filterHeight,N=o.filterWidth,A=o.inChannels,L=o.inDepth,O=o.inHeight,B=o.inWidth,U=o.outChannels,V=o.outDepth,W=o.outHeight,G=o.outWidth,H=o.strideDepth,q=o.strideHeight,ee=o.strideWidth,te=R-1-o.padInfo.front,ie=I-1-o.padInfo.top,se=N-1-o.padInfo.left,ce=0;ce<k;++ce)for(var pe=0;pe<A;++pe)for(var he=0;he<L;++he)for(var de=he-te,Ae=Math.max(0,Math.ceil(de/H)),fe=Math.min(V,(R+de)/H),xe=0;xe<O;++xe)for(var me=xe-ie,ke=Math.max(0,Math.ceil(me/q)),Ce=Math.min(W,(I+me)/q),_e=0;_e<B;++_e){for(var wt=_e-se,Ct=Math.max(0,Math.ceil(wt/ee)),rt=Math.min(G,(N+wt)/ee),Rn=0,Lt=Ae;Lt<fe;++Lt)for(var Jt=Lt*H-de,Wt=ke;Wt<Ce;++Wt)for(var In=Wt*q-me,Vt=Ct;Vt<rt;++Vt)for(var _o=d*ce+m*Lt+v*Wt+g*Vt,kn=y*(R-1-Jt)+w*(I-1-In)+C*(N-1-(Vt*ee-wt))+S*pe,_t=0;_t<U;++_t)Rn+=f[_o+_t]*x[kn+_t];i[u*ce+c*he+l*xe+h*_e+pe]=Rn}return a.toTensor()},n.prototype.conv2dDerFilter=function(e,t,o){z([e,t],"conv2dDerFilter");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dataFormat==="channelsLast",l=oe(o.filterShape,"float32"),h=o.padInfo.left,f=o.padInfo.top,p=this.bufferSync(e),d=this.bufferSync(t),m=0;m<s;++m)for(var v=Math.max(0,Math.ceil((f-m)/a)),g=Math.min(o.outHeight,(o.inHeight+f-m)/a),x=0;x<u;++x)for(var b=Math.max(0,Math.ceil((h-x)/i)),y=Math.min(o.outWidth,(o.inWidth+h-x)/i),w=0;w<o.inChannels;++w)for(var C=0;C<o.outChannels;++C){for(var S=0,k=0;k<o.batchSize;++k)for(var R=v;R<g;++R)for(var I=m+R*a-f,N=b;N<y;++N){var A=x+N*i-h;S+=c?p.get(k,I,A,w)*d.get(k,R,N,C):p.get(k,w,I,A)*d.get(k,C,R,N)}l.set(S,m,x,w,C)}return l.toTensor()},n.prototype.conv3dDerFilter=function(e,t,o){for(var a=o.strideDepth,i=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,h=oe(o.filterShape,"float32"),f=h.values,p=h.strides,d=p[0],m=p[1],v=p[2],g=p[3],x=this.readSync(t.dataId),b=t.strides,y=b[0],w=b[1],C=b[2],S=b[3],k=this.readSync(e.dataId),R=e.strides,I=R[0],N=R[1],A=R[2],L=R[3],O=o.padInfo.front,B=o.padInfo.left,U=o.padInfo.top,V=0;V<u;++V)for(var W=Math.max(0,Math.ceil((O-V)/a)),G=Math.min(o.outDepth,(o.inDepth+O-V)/a),H=V*d,q=0;q<c;++q)for(var ee=Math.max(0,Math.ceil((U-q)/i)),te=Math.min(o.outHeight,(o.inHeight+U-q)/i),ie=q*m+H,se=0;se<l;++se)for(var ce=Math.max(0,Math.ceil((B-se)/s)),pe=Math.min(o.outWidth,(o.inWidth+B-se)/s),he=se*v+ie,de=0;de<o.inChannels;++de)for(var Ae=de*g+he,fe=0;fe<o.outChannels;++fe){for(var xe=0,me=0;me<o.batchSize;++me)for(var ke=me*I,Ce=me*y,_e=W;_e<G;++_e)for(var wt=(V+_e*a-O)*N+ke,Ct=_e*w+Ce,rt=ee;rt<te;++rt)for(var Rn=(q+rt*i-U)*A+wt,Lt=rt*C+Ct,Jt=ce;Jt<pe;++Jt){var Wt=Jt*S+Lt;xe+=k[(se+Jt*s-B)*L+Rn+de]*x[Wt+fe]}f[Ae+fe]=xe}return h.toTensor()},n.prototype.fusedDepthwiseConv2D=function(e){var t=e.input,o=e.filter,a=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.depthwiseConv2D(t,o,a);return i&&(c=this.add(c,i)),s&&(c=jo(this,c,s,u)),c},n.prototype.depthwiseConv2D=function(e,t,o){z([e,t],"depthwiseConv2D");for(var a=o.filterHeight,i=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,h=o.outChannels/o.inChannels,f=oe(o.outShape,e.dtype),p=this.readSync(e.dataId),d=this.readSync(t.dataId),m=f.values,v=0;v<o.batchSize;++v)for(var g=v*e.strides[0],x=v*f.strides[0],b=0;b<o.outHeight;++b)for(var y=x+b*f.strides[1],w=b*o.strideHeight-c,C=0;C<a;++C){var S=w+C*s;if(!(S<0||S>=o.inHeight))for(var k=C*t.strides[0],R=g+S*e.strides[1],I=0;I<o.outWidth;++I)for(var N=y+I*f.strides[2],A=I*o.strideWidth-l,L=0;L<i;++L){var O=A+L*u;if(!(O<0||O>=o.inWidth))for(var B=k+L*t.strides[1],U=R+O*o.inChannels,V=N,W=B,G=0;G<o.inChannels;++G){for(var H=p[U+G],q=0;q<h;++q)m[V+q]+=H*d[W+q];V+=h,W+=h}}}return f.toTensor()},n.prototype.depthwiseConv2DDerInput=function(e,t,o){z([e,t],"depthwiseConv2DDerInput");for(var a=oe(o.inShape,"float32"),i=a.values,s=a.strides,u=s[0],c=s[1],l=s[2],h=this.readSync(e.dataId),f=e.strides,p=f[0],d=f[1],m=f[2],v=this.readSync(t.dataId),g=t.strides,x=g[0],b=g[1],y=g[2],w=o.batchSize,C=o.filterHeight,S=o.filterWidth,k=o.inChannels,R=o.inHeight,I=o.inWidth,N=o.outChannels,A=o.outHeight,L=o.outWidth,O=o.strideHeight,B=o.strideWidth,U=C-1-o.padInfo.top,V=S-1-o.padInfo.left,W=N/k,G=0;G<w;++G)for(var H=0;H<k;++H)for(var q=0;q<R;++q)for(var ee=q-U,te=Math.max(0,Math.ceil(ee/O)),ie=Math.min(A,(C+ee)/O),se=0;se<I;++se){for(var ce=se-V,pe=Math.max(0,Math.ceil(ce/B)),he=Math.min(L,(S+ce)/B),de=0,Ae=te;Ae<ie;++Ae)for(var fe=Ae*O-ee,xe=pe;xe<he;++xe)for(var me=p*G+d*Ae+m*xe,ke=x*(C-1-fe)+b*(S-1-(xe*B-ce))+y*H,Ce=0;Ce<W;++Ce)de+=h[me+(H*W+Ce)]*v[ke+Ce];i[u*G+c*q+l*se+H]=de}return a.toTensor()},n.prototype.depthwiseConv2DDerFilter=function(e,t,o){z([e,t],"depthwiseConv2DDerFilter");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=oe(o.filterShape,"float32"),l=o.padInfo.left,h=o.padInfo.top,f=o.outChannels/o.inChannels,p=this.bufferSync(e),d=this.bufferSync(t),m=0;m<s;++m)for(var v=Math.max(0,Math.ceil((h-m)/a)),g=Math.min(o.outHeight,(o.inHeight+h-m)/a),x=0;x<u;++x)for(var b=Math.max(0,Math.ceil((l-x)/i)),y=Math.min(o.outWidth,(o.inWidth+l-x)/i),w=0;w<o.outChannels;++w){for(var C=Math.trunc(w/f),S=w%f,k=0,R=0;R<o.batchSize;++R)for(var I=v;I<g;++I)for(var N=m+I*a-h,A=b;A<y;++A){var L=x+A*i-l;k+=p.get(R,N,L,C)*d.get(R,I,A,w)}c.set(k,m,x,C,S)}return c.toTensor()},n.prototype.tile=function(e,t){return z(e,"tile"),cu(this.bufferSync(e),t)},n.prototype.pad=function(e,t,o){z(e,"pad");var a=t.map(function(f,p){return f[0]+e.shape[p]+f[1]}),i=t.map(function(f){return f[0]}),s=this.bufferSync(e),u=oe(a,e.dtype);o!==0&&u.values.fill(o);for(var c=0;c<e.size;c++){var l=s.indexToLoc(c),h=l.map(function(f,p){return f+i[p]});u.set.apply(u,[s.get.apply(s,l)].concat(h))}return u.toTensor()},n.prototype.transpose=function(e,t){z(e,"transpose");for(var o=new Array(e.rank),a=0;a<o.length;a++)o[a]=e.shape[t[a]];var i=this.readSync(e.dataId),s=oe(o,e.dtype),u=this.bufferSync(e);for(a=0;a<e.size;++a){for(var c=u.indexToLoc(a),l=new Array(c.length),h=0;h<l.length;h++)l[h]=c[t[h]];var f=s.locToIndex(l);s.values[f]=i[a]}return s.toTensor()},n.prototype.gather=function(e,t,o){z([e,t],"gather");var a=e.shape.slice(),i=this.readSync(t.dataId);a[o]=i.length;for(var s=oe(a,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c),h=l.slice();h[o]=i[l[o]];var f=u.locToIndex(h);s.values[c]=u.values[f]}return s.toTensor()},n.prototype.batchToSpaceND=function(e,t,o){z([e],"batchToSpaceND");var a=t.reduce(function(h,f){return h*f}),i=jr(e.shape,t,a),s=qr(i.length,t.length),u=Kr(e.shape,t,a),c=$s(o,t.length),l=Js(u,o,t.length);return e.reshape(i).transpose(s).reshape(u).slice(c,l)},n.prototype.spaceToBatchND=function(e,t,o){z([e],"spaceToBatchND");var a=t.reduce(function(f,p){return f*p}),i=[[0,0]];i.push.apply(i,o);for(var s=1+t.length;s<e.shape.length;++s)i.push([0,0]);var u=e.pad(i),c=jr(u.shape,t,a,!1),l=qr(c.length,t.length,!1),h=Kr(u.shape,t,a,!1);return u.reshape(c).transpose(l).reshape(h)},n.prototype.pool=function(e,t,o){z(e,"pool");for(var a=t.strideHeight,i=t.strideWidth,s=t.dilationHeight,u=t.dilationWidth,c=t.effectiveFilterHeight,l=t.effectiveFilterWidth,h=t.padInfo.top,f=t.padInfo.left,p=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,d=this.readSync(e.dataId),m=oe(t.outShape,e.dtype),v=m.values,g=t.outShape[1]*t.outShape[2]*t.outShape[3],x=t.outShape[2]*t.outShape[3],b=t.outShape[3],y=0;y<t.batchSize;++y)for(var w=y*g,C=y*e.strides[0],S=0;S<t.inChannels;++S)for(var k=0;k<t.outHeight;++k)for(var R=k*a-h,I=Math.max(0,R),N=Math.min(t.inHeight,c+R),A=w+k*x,L=0;L<t.outWidth;++L){for(var O=L*i-f,B=Math.max(0,O),U=Math.min(t.inWidth,l+O),V=p,W=0,G=0,H=I;H<N;H+=s){for(var q=C+H*e.strides[1],ee=B;ee<U;ee+=u){var te=d[q+ee*e.strides[2]+S];o==="max"&&te>V?V=te:o==="avg"&&(W+=te,G++)}if(isNaN(V))break}v[A+L*b+S]=o==="avg"?W/G:V}return m.toTensor()},n.prototype.maxPool=function(e,t){return this.pool(e,t,"max")},n.prototype.maxPoolPositions=function(e,t){for(var o=oe(t.outShape,"int32"),a=t.strideHeight,i=t.strideWidth,s=t.dilationHeight,u=t.dilationWidth,c=t.effectiveFilterHeight,l=t.effectiveFilterWidth,h=t.padInfo.top,f=t.padInfo.left,p=this.bufferSync(e),d=0;d<t.batchSize;++d)for(var m=0;m<t.inChannels;++m)for(var v=0;v<t.outHeight;++v){for(var g=v*a-h,x=g;x<0;)x+=s;for(var b=Math.min(t.inHeight,c+g),y=0;y<t.outWidth;++y){for(var w=y*i-f,C=w;C<0;)C+=u;for(var S=Math.min(t.inWidth,l+w),k=Number.NEGATIVE_INFINITY,R=-1,I=x;I<b;I+=s)for(var N=I-g,A=C;A<S;A+=u){var L=A-w,O=p.get(d,I,A,m);O>k&&(k=O,R=N*l+L)}o.set(R,d,v,y,m)}}return o.toTensor()},n.prototype.maxPoolBackprop=function(e,t,o,a){z([t,o],"maxPoolBackprop");for(var i=this.maxPoolPositions(t,a),s=a.strideHeight,u=a.strideWidth,c=a.dilationHeight,l=a.dilationWidth,h=a.effectiveFilterHeight,f=a.effectiveFilterWidth,p=f-1-a.padInfo.left,d=h-1-a.padInfo.top,m=oe(t.shape,"float32"),v=this.bufferSync(i),g=this.bufferSync(e),x=0;x<a.batchSize;++x)for(var b=0;b<a.inChannels;++b)for(var y=0;y<a.inHeight;++y)for(var w=0;w<a.inWidth;++w){for(var C=y-d,S=w-p,k=0,R=0;R<h;R+=c){var I=(C+R)/s;if(!(I<0||I>=a.outHeight||Math.floor(I)!==I))for(var N=0;N<f;N+=l){var A=(S+N)/u;if(!(A<0||A>=a.outWidth||Math.floor(A)!==A)){var L=h*f-1-v.get(x,I,A,b)===R*f+N?1:0;L!==0&&(k+=g.get(x,I,A,b)*L)}}}m.set(k,x,y,w,b)}return m.toTensor()},n.prototype.avgPoolBackprop=function(e,t,o){z([e,t],"avgPoolBackprop");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dilationHeight,l=o.dilationWidth,h=o.effectiveFilterHeight,f=o.effectiveFilterWidth,p=f-1-o.padInfo.left,d=h-1-o.padInfo.top,m=oe(t.shape,"float32"),v=1/(s*u),g=this.bufferSync(e),x=0;x<o.batchSize;++x)for(var b=0;b<o.inChannels;++b)for(var y=0;y<o.inHeight;++y)for(var w=0;w<o.inWidth;++w){for(var C=y-d,S=w-p,k=0,R=0;R<h;R+=c){var I=(C+R)/a;if(!(I<0||I>=o.outHeight||Math.floor(I)!==I))for(var N=0;N<f;N+=l){var A=(S+N)/i;A<0||A>=o.outWidth||Math.floor(A)!==A||(k+=g.get(x,I,A,b))}}m.set(k*v,x,y,w,b)}return m.toTensor()},n.prototype.pool3d=function(e,t,o){z(e,"pool3d");for(var a=t.strideDepth,i=t.strideHeight,s=t.strideWidth,u=t.dilationDepth,c=t.dilationHeight,l=t.dilationWidth,h=t.effectiveFilterDepth,f=t.effectiveFilterHeight,p=t.effectiveFilterWidth,d=t.padInfo.front,m=t.padInfo.top,v=t.padInfo.left,g=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,x=this.readSync(e.dataId),b=oe(t.outShape,e.dtype),y=b.values,w=t.outShape[1]*t.outShape[2]*t.outShape[3]*t.outShape[4],C=t.outShape[2]*t.outShape[3]*t.outShape[4],S=t.outShape[3]*t.outShape[4],k=t.outShape[4],R=0;R<t.batchSize;++R)for(var I=R*w,N=R*e.strides[0],A=0;A<t.inChannels;++A)for(var L=0;L<t.outDepth;++L){for(var O=L*a-d,B=O;B<0;)B+=u;for(var U=Math.min(t.inDepth,h+O),V=I+L*C,W=0;W<t.outHeight;++W){for(var G=W*i-m,H=G;H<0;)H+=c;for(var q=Math.min(t.inHeight,f+G),ee=V+W*S,te=0;te<t.outWidth;++te){for(var ie=te*s-v,se=ie;se<0;)se+=l;for(var ce=Math.min(t.inWidth,p+ie),pe=ee+te*k,he=g,de=0,Ae=0,fe=B;fe<U;fe+=u){for(var xe=N+fe*e.strides[1],me=H;me<q;me+=c){for(var ke=xe+me*e.strides[2],Ce=se;Ce<ce;Ce+=l){var _e=x[ke+Ce*e.strides[3]+A];if(o==="max"&&_e>he?he=_e:o==="avg"&&(de+=_e,Ae++),isNaN(he))break}if(isNaN(he))break}if(isNaN(he))break}y[pe+A]=o==="avg"?de/Ae:he}}}return b.toTensor()},n.prototype.avgPool3d=function(e,t){return z(e,"avgPool3d"),this.pool3d(e,t,"avg").toFloat()},n.prototype.avgPool3dBackprop=function(e,t,o){z([e,t],"avgPool3dBackprop");for(var a=o.strideDepth,i=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,h=o.dilationDepth,f=o.dilationHeight,p=o.dilationWidth,d=o.effectiveFilterDepth,m=o.effectiveFilterHeight,v=o.effectiveFilterWidth,g=d-1-o.padInfo.front,x=v-1-o.padInfo.left,b=m-1-o.padInfo.top,y=oe(t.shape,"float32"),w=1/(u*c*l),C=this.bufferSync(e),S=0;S<o.batchSize;++S)for(var k=0;k<o.inChannels;++k)for(var R=0;R<o.inDepth;++R)for(var I=0;I<o.inHeight;++I)for(var N=0;N<o.inWidth;++N){for(var A=R-g,L=I-b,O=N-x,B=0,U=0;U<d;U+=h){var V=(A+U)/a;if(!(V<0||V>=o.outDepth||Math.floor(V)!==V))for(var W=0;W<m;W+=f){var G=(L+W)/i;if(!(G<0||G>=o.outHeight||Math.floor(G)!==G))for(var H=0;H<v;H+=p){var q=(O+H)/s;q<0||q>=o.outWidth||Math.floor(q)!==q||(B+=C.get(S,V,G,q,k))}}}y.set(B*w,S,R,I,N,k)}return y.toTensor()},n.prototype.maxPool3d=function(e,t){return z(e,"maxPool3d"),this.pool3d(e,t,"max").toFloat()},n.prototype.maxPool3dPositions=function(e,t){for(var o=oe(t.outShape,"int32"),a=t.strideDepth,i=t.strideHeight,s=t.strideWidth,u=t.dilationDepth,c=t.dilationHeight,l=t.dilationWidth,h=t.effectiveFilterDepth,f=t.effectiveFilterHeight,p=t.effectiveFilterWidth,d=t.padInfo.front,m=t.padInfo.top,v=t.padInfo.left,g=this.bufferSync(e),x=0;x<t.batchSize;++x)for(var b=0;b<t.inChannels;++b)for(var y=0;y<t.outDepth;++y){for(var w=y*a-d,C=w;C<0;)C+=u;for(var S=Math.min(t.inDepth,h+w),k=0;k<t.outHeight;++k){for(var R=k*i-m,I=R;I<0;)I+=c;for(var N=Math.min(t.inHeight,f+R),A=0;A<t.outWidth;++A){for(var L=A*s-v,O=L;O<0;)O+=l;for(var B=Math.min(t.inWidth,p+L),U=Number.NEGATIVE_INFINITY,V=-1,W=C;W<S;W+=u)for(var G=W-w,H=I;H<N;H+=c)for(var q=H-R,ee=O;ee<B;ee+=l){var te=ee-L,ie=g.get(x,W,H,ee,b);ie>=U&&(U=ie,V=G*f*p+q*f+te)}o.set(V,x,y,k,A,b)}}}return o.toTensor()},n.prototype.maxPool3dBackprop=function(e,t,o,a){z([t,o],"maxPool3dBackprop");for(var i=this.maxPool3dPositions(t,a),s=a.strideDepth,u=a.strideHeight,c=a.strideWidth,l=a.dilationDepth,h=a.dilationHeight,f=a.dilationWidth,p=a.effectiveFilterDepth,d=a.effectiveFilterHeight,m=a.effectiveFilterWidth,v=p-1-a.padInfo.front,g=m-1-a.padInfo.left,x=d-1-a.padInfo.top,b=oe(t.shape,"float32"),y=this.bufferSync(i),w=this.bufferSync(e),C=0;C<a.batchSize;++C)for(var S=0;S<a.inChannels;++S)for(var k=0;k<a.inDepth;++k)for(var R=0;R<a.inHeight;++R)for(var I=0;I<a.inWidth;++I){for(var N=k-v,A=R-x,L=I-g,O=0,B=0;B<p;B+=l){var U=(N+B)/s;if(!(U<0||U>=a.outDepth||Math.floor(U)!==U))for(var V=0;V<d;V+=h){var W=(A+V)/u;if(!(W<0||W>=a.outHeight||Math.floor(W)!==W))for(var G=0;G<m;G+=f){var H=(L+G)/c;if(!(H<0||H>=a.outWidth||Math.floor(H)!==H)){var q=p*d*m-1-y.get(C,U,W,H,S)===B*d*m+V*m+G?1:0;q!==0&&(O+=w.get(C,U,W,H,S)*q)}}}}b.set(O,C,k,R,I,S)}return b.toTensor()},n.prototype.cast=function(e,t){return au(e,t,this)},n.prototype.reshape=function(e,t){return pa(e,t)},n.prototype.avgPool=function(e,t){return z(e,"avgPool"),this.pool(e,t,"avg").toFloat()},n.prototype.resizeBilinear=function(e,t,o,a){z(e,"resizeBilinear");for(var i=e.shape,s=i[0],u=i[1],c=i[2],l=i[3],h=this.readSync(e.dataId),f=new Float32Array($([s,t,o,l])),p=[a&&t>1?u-1:u,a&&o>1?c-1:c],d=[a&&t>1?t-1:t,a&&o>1?o-1:o],m=0,v=p[0]/d[0],g=p[1]/d[1],x=0;x<s;x++)for(var b=0;b<t;b++)for(var y=v*b,w=Math.floor(y),C=y-w,S=Math.min(u-1,Math.ceil(y)),k=x*e.strides[0]+w*e.strides[1],R=x*e.strides[0]+S*e.strides[1],I=0;I<o;I++)for(var N=g*I,A=Math.floor(N),L=N-A,O=Math.min(c-1,Math.ceil(N)),B=k+A*e.strides[2],U=R+A*e.strides[2],V=k+O*e.strides[2],W=R+O*e.strides[2],G=0;G<l;G++){var H=h[B+G],q=h[U+G],ee=H+(h[V+G]-H)*L,te=ee+(q+(h[W+G]-q)*L-ee)*C;f[m++]=te}return He(f,[s,t,o,l])},n.prototype.resizeBilinearBackprop=function(e,t,o){z([e,t],"resizeBilinearBackprop");for(var a=t.shape,i=a[0],s=a[1],u=a[2],c=a[3],l=e.shape,h=l[1],f=l[2],p=new Float32Array(i*s*u*c),d=[o&&h>1?s-1:s,o&&f>1?u-1:u],m=[o&&h>1?h-1:h,o&&f>1?f-1:f],v=d[0]/m[0],g=d[1]/m[1],x=this.readSync(e.dataId),b=0,y=0;y<i;y++)for(var w=y*t.strides[0],C=0;C<h;C++)for(var S=C*v,k=Math.floor(S),R=Math.min(Math.ceil(S),s-1),I=w+k*t.strides[1],N=w+R*t.strides[1],A=S-k,L=1-A,O=0;O<f;O++)for(var B=O*g,U=Math.floor(B),V=Math.min(Math.ceil(B),u-1),W=B-U,G=1-W,H=I+U*t.strides[2],q=I+V*t.strides[2],ee=N+U*t.strides[2],te=N+V*t.strides[2],ie=L*G,se=L*W,ce=A*G,pe=A*W,he=0;he<c;he++){var de=x[b++];p[H+he]+=de*ie,p[q+he]+=de*se,p[ee+he]+=de*ce,p[te+he]+=de*pe}return Qe(p,[i,u,s,c],t.dtype)},n.prototype.resizeNearestNeighbor=function(e,t,o,a){z(e,"resizeNearestNeighbor");for(var i=e.shape,s=i[0],u=i[1],c=i[2],l=i[3],h=this.readSync(e.dataId),f=new Float32Array(s*t*o*l),p=[a&&t>1?u-1:u,a&&o>1?c-1:c],d=[a&&t>1?t-1:t,a&&o>1?o-1:o],m=p[0]/d[0],v=p[1]/d[1],g=0,x=0;x<s;x++)for(var b=x*e.strides[0],y=0;y<t;y++)for(var w=m*y,C=b+Math.min(u-1,a?Math.round(w):Math.floor(w))*e.strides[1],S=0;S<o;S++)for(var k=v*S,R=C+Math.min(c-1,a?Math.round(k):Math.floor(k))*e.strides[2],I=0;I<l;I++){var N=h[R+I];f[g++]=N}return He(f,[s,t,o,l],e.dtype)},n.prototype.resizeNearestNeighborBackprop=function(e,t,o){z([e,t],"resizeNearestNeighborBackprop");for(var a=t.shape,i=a[0],s=a[1],u=a[2],c=a[3],l=e.shape,h=l[1],f=l[2],p=new Float32Array(i*s*u*c),d=this.readSync(e.dataId),m=[o&&h>1?s-1:s,o&&f>1?u-1:u],v=[o&&h>1?h-1:h,o&&f>1?f-1:f],g=m[0]/v[0],x=m[1]/v[1],b=1/g,y=1/x,w=2*Math.ceil(b)+2,C=2*Math.ceil(y)+2,S=0;S<i;S++)for(var k=S*t.strides[0],R=0;R<s;R++)for(var I=k+R*t.strides[1],N=Math.floor(R*b),A=Math.floor(N-w/2),L=0;L<u;L++)for(var O=I+L*t.strides[2],B=Math.floor(L*y),U=Math.floor(B-C/2),V=0;V<c;V++){for(var W=0,G=0;G<w;G++){var H=G+A;if(!(H<0||H>=h)){var q=k+H*e.strides[1],ee=H*g;if(R===Math.min(s-1,o?Math.round(ee):Math.floor(ee)))for(var te=0;te<C;te++){var ie=te+U;if(!(ie<0||ie>=f)){var se=q+ie*e.strides[2],ce=ie*x;L===Math.min(u-1,o?Math.round(ce):Math.floor(ce))&&(W+=d[se+V])}}}}p[O+V]=W}return Qe(p,t.shape,t.dtype)},n.prototype.batchNormalization=function(e,t,o,a,i,s){z([e,t,o,i,s],"batchNorm");for(var u=this.readSync(e.dataId),c=this.readSync(t.dataId),l=this.readSync(o.dataId),h=i?this.readSync(i.dataId):new Float32Array([1]),f=s?this.readSync(s.dataId):new Float32Array([0]),p=new Float32Array(u.length),d=f.length,m=h.length,v=l.length,g=c.length,x=0,b=0,y=0,w=0,C=0;C<u.length;++C)p[C]=f[x++]+(u[C]-c[b++])*h[y++]/Math.sqrt(l[w++]+a),x>=d&&(x=0),b>=g&&(b=0),y>=m&&(y=0),w>=v&&(w=0);return Qe(p,e.shape)},n.prototype.localResponseNormalization4D=function(e,t,o,a,i){z(e,"localResponseNormalization4D");var s=e.shape[3],u=s-1,c=this.readSync(e.dataId),l=e.size,h=new Float32Array(l);function f(v){for(var g=v%s,x=v-g+Math.max(0,g-t),b=v-g+Math.min(g+t,u),y=0;x<=b;x++){var w=c[x];y+=w*w}return y}for(var p=0;p<l;p++){var d=f(p),m=c[p]*Math.pow(o+a*d,-i);h[p]=m}return Qe(h,e.shape)},n.prototype.LRNGrad=function(e,t,o,a,i,s,u){z(e,"LRNGrad");for(var c=e.shape[3],l=this.readSync(e.dataId),h=this.readSync(t.dataId),f=this.readSync(o.dataId),p=new Float32Array(e.size),d=e.size,m=0;m<d;m++){for(var v=m%c,g=m-v+Math.max(0,v-a),x=m-v+Math.min(c,v+a+1),b=0,y=g;y<x;y++)b+=Math.pow(h[y],2);for(b=s*b+i,y=g;y<x;y++){var w=-2*s*u*h[y]*f[m]/b;m===y&&(w+=Math.pow(b,-u)),w*=l[m],p[y]+=w}}return Qe(p,e.shape)},n.prototype.multinomial=function(e,t,o,a){z(e,"multinomial");for(var i=t?e:qt(e),s=i.shape[0],u=i.shape[1],c=we([s,o],"int32"),l=this.readSync(c.dataId),h=this.readSync(i.dataId),f=0;f<s;++f){var p=f*u,d=new Float32Array(u-1);d[0]=h[p];for(var m=1;m<d.length;++m)d[m]=d[m-1]+h[p+m];for(var v=so(a.toString()),g=f*o,x=0;x<o;++x){var b=v();l[g+x]=d.length;for(var y=0;y<d.length;y++)if(b<d[y]){l[g+x]=y;break}}}return c},n.prototype.oneHot=function(e,t,o,a){z(e,"oneHot");var i=new Float32Array(e.size*t);i.fill(a);for(var s=this.readSync(e.dataId),u=0;u<e.size;++u)s[u]>=0&&s[u]<t&&(i[u*t+s[u]]=o);return rn(i,[e.size,t],"int32")},n.prototype.nonMaxSuppression=function(e,t,o,a,i){return z(e,"nonMaxSuppression"),Fa(this.readSync(e.dataId),this.readSync(t.dataId),o,a,i)},n.prototype.fft=function(e){return this.fftBatch(e,!1)},n.prototype.ifft=function(e){return this.fftBatch(e,!0)},n.prototype.fftBatch=function(e,t){for(var o=e.shape[0],a=e.shape[1],i=oe(e.shape,"float32"),s=oe(e.shape,"float32"),u=pt(e).as2D(o,a),c=St(e).as2D(o,a),l=0;l<o;l++)for(var h=u.slice([l,0],[1,a]),f=c.slice([l,0],[1,a]),p=ze(h,f),d=this.readSync(this.fftImpl(p,t).dataId),m=0;m<a;m++){var v=Vi(d,m);i.values[l*a+m]=v.real,s.values[l*a+m]=v.imag}return ze(i.toTensor(),s.toTensor()).as2D(o,a)},n.prototype.fftImpl=function(e,t){var o=e.as1D(),a=o.size;if(this.isExponentOf2(a)){var i=this.fftRadix2(o,a,t).as2D(e.shape[0],e.shape[1]);return t&&(i=ze(pt(i).div(j(a)),St(i).div(j(a)))),i}var s=this.readSync(e.dataId),u=function(c){for(var l=new Float32Array(c.length/2),h=new Float32Array(c.length/2),f=0;f<c.length;f+=2)l[f/2]=c[f],h[f/2]=c[f+1];return{real:l,imag:h}}(this.fourierTransformByMatmul(s,a,t));return ze(u.real,u.imag).as2D(e.shape[0],e.shape[1])},n.prototype.isExponentOf2=function(e){return(e&e-1)==0},n.prototype.fftRadix2=function(e,t,o){if(t===1)return e;var a=this.readSync(e.dataId),i=t/2,s=function(g){for(var x=Math.ceil(g.length/4),b=new Float32Array(x),y=new Float32Array(x),w=0;w<g.length;w+=4)b[Math.floor(w/4)]=g[w],y[Math.floor(w/4)]=g[w+1];return{real:b,imag:y}}(a),u=ze(s.real,s.imag).as1D(),c=function(g){for(var x=Math.floor(g.length/4),b=new Float32Array(x),y=new Float32Array(x),w=2;w<g.length;w+=4)b[Math.floor(w/4)]=g[w],y[Math.floor(w/4)]=g[w+1];return{real:b,imag:y}}(a),l=ze(c.real,c.imag).as1D();u=this.fftRadix2(u,i,o),l=this.fftRadix2(l,i,o);var h=function(g,x){for(var b=new Float32Array(g/2),y=new Float32Array(g/2),w=0;w<Math.ceil(g/2);w++){var C=(x?2:-2)*Math.PI*(w/g);b[w]=Math.cos(C),y[w]=Math.sin(C)}return{real:b,imag:y}}(t,o),f=ze(h.real,h.imag).mul(l),p=u.add(f),d=u.sub(f),m=pt(p).concat(pt(d)),v=St(p).concat(St(d));return ze(m,v).as1D()},n.prototype.fourierTransformByMatmul=function(e,t,o){for(var a=new Float32Array(2*t),i=0;i<t;i++){for(var s=0,u=0,c=0;c<t;c++){var l=Vh(i*c,t,o),h=Vi(e,c);s+=h.real*l.real-h.imag*l.imag,u+=h.real*l.imag+h.imag*l.real}o&&(s/=t,u/=t),Wh(a,s,u,i)}return a},n.prototype.depthToSpace=function(e,t,o){E(o==="NHWC",function(){return"Only NHWC dataFormat supported on CPU for depthToSpace. Got "+o}),E(t>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+t});for(var a=e.shape[0],i=e.shape[1],s=e.shape[2],u=e.shape[3],c=i*t,l=s*t,h=u/(t*t),f=this.readSync(e.dataId),p=new Float32Array(a*c*l*h),d=0,m=0;m<a;++m)for(var v=0;v<c;++v)for(var g=Math.floor(v/t),x=v%t,b=0;b<l;++b)for(var y=Math.floor(b/t),w=(x*t+b%t)*h,C=0;C<h;++C){var S=C+w+u*(y+s*(g+i*m));p[d++]=f[S]}return Qe(p,[a,c,l,h])},n.prototype.broadcastedBinaryOp=function(e,t,o,a){var i=le(e.shape,t.shape),s=oe(i,o),u=this.readSync(e.dataId),c=this.readSync(t.dataId),l=en(e.shape,i),h=en(t.shape,i),f=s.values;if(l.length+h.length===0)for(var p=0;p<f.length;++p)f[p]=a(u[p%u.length],c[p%c.length]);else{var d=this.bufferSync(e),m=this.bufferSync(t),v=function(g){var x=s.indexToLoc(g),b=x.slice(-e.rank);l.forEach(function(S){return b[S]=0});var y=d.locToIndex(b),w=x.slice(-t.rank);h.forEach(function(S){return w[S]=0});var C=m.locToIndex(w);f[g]=a(u[y],c[C])};for(p=0;p<f.length;++p)v(p)}return s.toTensor()},n.prototype.broadcastedBinaryComplexOp=function(e,t,o){var a=le(e.shape,t.shape),i=oe(a,"float32"),s=oe(a,"float32"),u=this.readSync(e.dataId),c=this.readSync(t.dataId),l=en(e.shape,a),h=en(t.shape,a),f=i.values,p=s.values;if(l.length+h.length===0)for(var d=0;d<f.length;d++){var m=d%u.length,v=d%c.length,g=o(u[2*m],u[2*m+1],c[2*v],c[2*v+1]);f[d]=g.real,p[d]=g.imag}else{var x=this.bufferSync(this.data.get(e.dataId).complexTensors.real),b=this.bufferSync(this.data.get(t.dataId).complexTensors.real),y=function(w){var C=i.indexToLoc(w),S=C.slice(-e.rank);l.forEach(function(A){return S[A]=0});var k=x.locToIndex(S),R=C.slice(-t.rank);h.forEach(function(A){return R[A]=0});var I=b.locToIndex(R),N=o(u[2*k],u[2*k+1],c[2*I],c[2*I+1]);f[w]=N.real,p[w]=N.imag};for(d=0;d<f.length;d++)y(d)}return this.complex(i.toTensor(),s.toTensor())},n.prototype.split=function(e,t,o){return uu(e,t,o)},n.prototype.dispose=function(){},n.prototype.floatPrecision=function(){return 32},n.prototype.epsilon=function(){return 1e-7},n.prototype.cropAndResize=function(e,t,o,a,i,s){for(var u=e.shape,c=u[0],l=u[1],h=u[2],f=u[3],p=t.shape[0],d=a[0],m=a[1],v=oe([p,d,m,f],"float32"),g=this.readSync(t.dataId),x=this.readSync(o.dataId),b=this.readSync(e.dataId),y=e.strides,w=v.strides,C=0;C<p;C++){var S=4*C,k=g[S],R=g[S+1],I=g[S+2],N=g[S+3],A=x[C];if(!(A>=c))for(var L=d>1?(I-k)*(l-1)/(d-1):0,O=m>1?(N-R)*(h-1)/(m-1):0,B=0;B<d;B++){var U=d>1?k*(l-1)+B*L:.5*(k+I)*(l-1);if(U<0||U>l-1)for(var V=0;V<m;V++)for(var W=0;W<f;W++){var G=W+V*w[2]+B*w[1]+C*w[0];v.values[G]=s}else if(i==="bilinear"){var H=Math.floor(U),q=Math.ceil(U),ee=U-H;for(V=0;V<m;V++)if((fe=m>1?R*(h-1)+V*O:.5*(R+N)*(h-1))<0||fe>h-1)for(W=0;W<f;W++)G=W+V*w[2]+B*w[1]+C*w[0],v.values[G]=s;else{var te=Math.floor(fe),ie=Math.ceil(fe),se=fe-te;for(W=0;W<f;W++){var ce=b[G=W+te*y[2]+H*y[1]+A*y[0]],pe=b[G=W+ie*y[2]+H*y[1]+A*y[0]],he=b[G=W+te*y[2]+q*y[1]+A*y[0]],de=ce+(pe-ce)*se,Ae=he+(b[G=W+ie*y[2]+q*y[1]+A*y[0]]-he)*se;G=W+V*w[2]+B*w[1]+C*w[0],v.values[G]=de+(Ae-de)*ee}}}else for(V=0;V<m;++V){var fe;if((fe=m>1?R*(h-1)+V*O:.5*(R+N)*(h-1))<0||fe>h-1)for(W=0;W<f;W++)G=W+V*w[2]+B*w[1]+C*w[0],v.values[G]=s;else{var xe=Math.round(fe),me=Math.round(U);for(W=0;W<f;W++){var ke=W+xe*y[2]+me*y[1]+A*y[0],Ce=W+V*w[2]+B*w[1]+C*w[0];v.values[Ce]=b[ke]}}}}}return v.toTensor()},n.prototype.sparseToDense=function(e,t,o,a){var i=Xr(0,e,o),s=i.sliceRank,u=i.numUpdates,c=i.sliceSize,l=i.strides,h=i.outputSize;return this.scatter(e,t,o,h,c,u,s,l,a,!1)},n.prototype.gatherND=function(e,t){var o=t.shape,a=o[o.length-1],i=Qs(e,t),s=i[0],u=i[1],c=i[2],l=i[3];if(u===0)return He([],s,e.dtype);for(var h=new or([u,c],e.dtype),f=this.readSync(t.dataId),p=this.readSync(e.dataId),d=0;d<u;d++){for(var m=[],v=0,g=0;g<a;g++){var x=f[d*a+g];v+=x*l[g],m.push(x)}if(v<0||v>=e.size/c)throw new Error("Invalid indices: "+m+" does not index into "+e.shape);for(var b=0;b<c;b++)h.values[d*c+b]=p[v*c+b]}return h.toTensor().reshape(s)},n.prototype.scatterND=function(e,t,o){var a=Xr(0,e,o),i=a.sliceRank,s=a.numUpdates,u=a.sliceSize,c=a.strides,l=a.outputSize,h=j(0);return this.scatter(e,t,o,l,u,s,i,c,h,!0)},n.prototype.fill=function(e,t,o){var a=Lr(o=o||fr(t),$(e));return a.fill(t),T.makeTensor(a,e,o,this)},n.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported for string tensors");return this.fill(e.shape,1,e.dtype)},n.prototype.zerosLike=function(e){var t=Lr(e.dtype,$(e.shape));return this.makeOutput(t,e.shape,e.dtype)},n.prototype.linspace=function(e,t,o){return iu(e,t,o)},n.prototype.scatter=function(e,t,o,a,i,s,u,c,l,h){var f=[a/i,i],p=this.readSync(e.dataId),d=this.readSync(t.dataId);if(a===0)return He([],o,t.dtype);var m=new or(f,t.dtype);m.values.fill(this.readSync(l.dataId)[0]);for(var v=0;v<s;v++){for(var g=[],x=0,b=0;b<u;b++){var y=p[v*u+b];g.push(y),x+=y*c[b]}if(x<0||x>=a/i)throw new Error("Invalid indices: "+g+" does not index into "+o);for(var w=0;w<i;w++)h?m.values[x*i+w]+=d[v*i+w]:m.values[x*i+w]=t.rank===0?d[0]:d[v*i+w]}return m.toTensor().reshape(o)},n}(ru);T.registerBackend("cpu",function(){return new sm},1);for(var qo=0,us=[{kernelName:"NonMaxSuppressionV5",backendName:"cpu",kernelFunc:function(r){var n=r.inputs,e=r.backend,t=r.attrs,o=n,a=o.boxes,i=o.scores,s=t,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,h=s.softNmsSigma,f=e;z(a,"NonMaxSuppressionWithScore");var p=Ma(f.data.get(a.dataId).values,f.data.get(i.dataId).values,u,c,l,h);return[p.selectedIndices,p.selectedScores]}},{kernelName:"Square",backendName:"cpu",kernelFunc:function(r){var n=r.inputs,e=r.backend,t=n.x,o=e;z(t,"square");for(var a=o.data.get(t.dataId).values,i=new Float32Array(a.length),s=0;s<a.length;++s){var u=a[s];i[s]=u*u}return{dataId:o.write(i,t.shape,t.dtype),shape:t.shape,dtype:t.dtype}}},{kernelName:sr,backendName:"cpu",kernelFunc:function(r){var n=r.inputs,e=r.backend,t=n,o=t.a,a=t.b,i=e;z([o,a],sr);var s=i.data.get(o.dataId).values,u=i.data.get(a.dataId).values,c=function(f,p,d,m,v,g){var x=le(f,p),b=x.length,y=Tt(x),w=rr(v,$(x)),C=f.length,S=p.length,k=Tt(f),R=Tt(p),I=en(f,x),N=en(p,x);if(I.length+N.length===0)for(var A=0;A<w.length;++A)w[A]=g(d[A%d.length],m[A%m.length]);else{var L=function(O){var B=ml(O,b,y),U=B.slice(-C);I.forEach(function(H){return U[H]=0});var V=Ti(U,C,k),W=B.slice(-S);N.forEach(function(H){return W[H]=0});var G=Ti(W,S,R);w[O]=g(d[V],m[G])};for(A=0;A<w.length;++A)L(A)}return[w,x]}(o.shape,a.shape,s,u,o.dtype,function(f,p){var d=f-p;return d*d}),l=c[0],h=c[1];return{dataId:i.write(l,h,o.dtype),shape:h,dtype:o.dtype}}}];qo<us.length;qo++)Ts(us[qo]);var Dn,um=function(r){this.variableNames=["A"];var n=Ye(),e=r[0],t=r[1];this.outputShape=r,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+t+".0, "+e+`.0);

        vec4 values = `+n.texture2D+`(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `},cm=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var n=Ye(),e=r[0],t=r[1];this.outputShape=r,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(`+t+".0, "+e+`.0);
            vec4 values = `+n.texture2D+`(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        `+n.output+` = result;
      }
    `};for(var Ko=0,cs=[{kernelName:"FromPixels",backendName:"webgl",kernelFunc:function(r){var n=r.inputs,e=r.backend,t=r.attrs,o=n.pixels,a=t.numChannels,i=typeof HTMLVideoElement<"u"&&o instanceof HTMLVideoElement,s=typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement,u=i?[o.videoWidth,o.videoHeight]:[o.width,o.height],c=u[0],l=u[1],h=[l,c],f=[l,c,a];(s||i)&&(Dn==null&&(Dn=document.createElement("canvas").getContext("2d")),Dn.canvas.width=c,Dn.canvas.height=l,Dn.drawImage(o,0,0,c,l),o=Dn.canvas);var p=e.makeTensorInfo(h,"int32");e.texData.get(p.dataId).usage=st.PIXELS,e.gpgpu.uploadPixelDataToTexture(e.getTexture(p.dataId),o);var d=P().getBool("WEBGL_PACK")?new cm(f):new um(f),m=e.runWebGLProgram(d,[p],"int32");return e.disposeData(p.dataId),m}},{kernelName:"NonMaxSuppressionV5",backendName:"webgl",kernelFunc:function(r){var n=r.inputs,e=r.backend,t=r.attrs;zr("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");var o=n,a=o.boxes,i=o.scores,s=t,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,h=s.softNmsSigma,f=e,p=Ma(f.readSync(a.dataId),f.readSync(i.dataId),u,c,l,h);return[p.selectedIndices,p.selectedScores]}},{kernelName:"Square",backendName:"webgl",kernelFunc:function(r){var n=r.inputs,e=r.backend,t=n.x,o=e,a=new ae(t.shape,"return x * x;");return o.runWebGLProgram(a,[t],t.dtype)}},{kernelName:sr,backendName:"webgl",kernelFunc:function(r){var n=r.inputs,e=r.backend,t=n,o=t.a,a=t.b,i=e,s=P().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new zt("return (a - b) * (a - b);",o.shape,a.shape):new Se("return (a - b) * (a - b);",o.shape,a.shape);return i.compileAndRun(s,[o,a])}}];Ko<cs.length;Ko++)Ts(cs[Ko]);for(var Xo=0,ls=[{kernelName:"Square",gradFunc:function(r,n){var e=n[0];return{x:function(){return r.mul(e.toFloat().mul(2))}}}},{kernelName:sr,gradFunc:function(r,n){var e=n[0],t=n[1],o=j(2);return{a:function(){return Je(r,Je(o,Oe(e,t)))},b:function(){return Je(r,Je(o,Oe(t,e)))}}}}];Xo<ls.length;Xo++)al(ls[Xo]);var lm=function(){function r(){}return r.prototype.fetch=function(n,e){return fetch(n,e)},r.prototype.now=function(){return performance.now()},r.prototype.encode=function(n,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Browser's encoder only supports utf-8, but got "+e);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(n)},r.prototype.decode=function(n,e){return new TextDecoder(e).decode(n)},r}();P().get("IS_BROWSER")&&P().setPlatform("browser",new lm);var Yo,hm=function(){return require("node-fetch")},fm=function(){function r(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}return r.prototype.fetch=function(n,e){return P().global.fetch!=null?P().global.fetch(n,e):(Yo==null&&(Yo=hm()),Yo(n,e))},r.prototype.now=function(){var n=process.hrtime();return 1e3*n[0]+n[1]/1e6},r.prototype.encode=function(n,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Node built-in encoder only supports utf-8, but got "+e);return this.textEncoder.encode(n)},r.prototype.decode=function(n,e){return n.length===0?"":new this.util.TextDecoder(e).decode(n)},r}();P().get("IS_NODE")&&P().setPlatform("node",new fm);var ma={float32:4,int32:4,uint16:2,uint8:1,bool:1},to=4;function ec(r,n){for(var e={},t=0,o=function(s){var u=s.name,c=s.dtype,l=s.shape,h=$(l),f=void 0;if("quantization"in s){var p=s.quantization;if(p.dtype!=="uint8"&&p.dtype!=="uint16")throw new Error("Weight "+s.name+" has unknown quantization dtype "+p.dtype+". Supported quantization dtypes are: 'uint8' and 'uint16'.");var d=ma[p.dtype],m=r.slice(t,t+h*d),v=p.dtype==="uint8"?new Uint8Array(m):new Uint16Array(m);if(c==="float32")f=Float32Array.from(v,function(C){return C*p.scale+p.min});else{if(c!=="int32")throw new Error("Unsupported dtype in weight '"+u+"': "+c);f=Int32Array.from(v,function(C){return Math.round(C*p.scale+p.min)})}t+=h*d}else if(c==="string"){var g=$(s.shape);f=[];for(var x=0;x<g;x++){var b=new Uint32Array(r.slice(t,t+to))[0];t+=to;var y=new Uint8Array(r.slice(t,t+b));f.push(y),t+=b}}else{var w=ma[c];if(m=r.slice(t,t+h*w),c==="float32")f=new Float32Array(m);else if(c==="int32")f=new Int32Array(m);else{if(c!=="bool")throw new Error("Unsupported dtype in weight '"+u+"': "+c);f=new Uint8Array(m)}t+=h*w}e[u]=He(f,l,c)},a=0,i=n;a<i.length;a++)o(i[a]);return e}function pm(r){if(r===null)throw new Error("Invalid input value: "+JSON.stringify(r));var n=0,e=[];r.forEach(function(a){if(n+=a.byteLength,e.push(a.byteLength===a.buffer.byteLength?a:new a.constructor(a)),!(a instanceof Float32Array||a instanceof Int32Array||a instanceof Uint8Array))throw new Error("Unsupported TypedArray subtype: "+a.constructor.name)});var t=new Uint8Array(n),o=0;return e.forEach(function(a){t.set(new Uint8Array(a.buffer),o),o+=a.byteLength}),t.buffer}var ga=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function hs(r){return ga?Buffer.byteLength(r):new Blob([r]).size}function Za(r){var n=0;r.forEach(function(o){n+=o.byteLength});var e=new Uint8Array(n),t=0;return r.forEach(function(o){e.set(new Uint8Array(o),t),t+=o.byteLength}),e.buffer}function fs(r){for(r=r.trim();r.endsWith("/");)r=r.slice(0,r.length-1);var n=r.split("/");return n[n.length-1]}function xr(r){if(r.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:r.modelTopology==null?0:hs(JSON.stringify(r.modelTopology)),weightSpecsBytes:r.weightSpecs==null?0:hs(JSON.stringify(r.weightSpecs)),weightDataBytes:r.weightData==null?0:r.weightData.byteLength}}var ut=function(){function r(){this.saveRouters=[],this.loadRouters=[]}return r.getInstance=function(){return r.instance==null&&(r.instance=new r),r.instance},r.registerSaveRouter=function(n){r.getInstance().saveRouters.push(n)},r.registerLoadRouter=function(n){r.getInstance().loadRouters.push(n)},r.getSaveHandlers=function(n){return r.getHandlers(n,"save")},r.getLoadHandlers=function(n,e){return r.getHandlers(n,"load",e)},r.getHandlers=function(n,e,t){var o=[];return(e==="load"?r.getInstance().loadRouters:r.getInstance().saveRouters).forEach(function(a){var i=a(n,t);i!==null&&o.push(i)}),o},r}(),Wn="://",on=function(){function r(){this.managers={}}return r.getInstance=function(){return r.instance==null&&(r.instance=new r),r.instance},r.registerManager=function(n,e){E(n!=null,function(){return"scheme must not be undefined or null."}),n.endsWith(Wn)&&(n=n.slice(0,n.indexOf(Wn))),E(n.length>0,function(){return"scheme must not be an empty string."});var t=r.getInstance();E(t.managers[n]==null,function(){return"A model store manager is already registered for scheme '"+n+"'."}),t.managers[n]=e},r.getManager=function(n){var e=this.getInstance().managers[n];if(e==null)throw new Error("Cannot find model manager for scheme '"+n+"'");return e},r.getSchemes=function(){return Object.keys(this.getInstance().managers)},r}();function Or(r){if(r.indexOf(Wn)===-1)throw new Error("The url string provided does not contain a scheme. Supported schemes are: "+on.getSchemes().join(","));return{scheme:r.split(Wn)[0],path:r.split(Wn)[1]}}function ps(r,n,e){return e===void 0&&(e=!1),X(this,void 0,void 0,function(){var t,o,a,i,s,u,c,l,h;return Y(this,function(f){switch(f.label){case 0:return E(r!==n,function(){return"Old path and new path are the same: '"+r+"'"}),E((t=ut.getLoadHandlers(r)).length>0,function(){return"Copying failed because no load handler is found for source URL "+r+"."}),E(t.length<2,function(){return"Copying failed because more than one ("+t.length+") load handlers for source URL "+r+"."}),o=t[0],E((a=ut.getSaveHandlers(n)).length>0,function(){return"Copying failed because no save handler is found for destination URL "+n+"."}),E(a.length<2,function(){return"Copying failed because more than one ("+t.length+") save handlers for destination URL "+n+"."}),i=a[0],s=Or(r).scheme,u=Or(r).path,c=s===Or(r).scheme,[4,o.load()];case 1:return l=f.sent(),e&&c?[4,on.getManager(s).removeModel(u)]:[3,3];case 2:f.sent(),f.label=3;case 3:return[4,i.save(l)];case 4:return h=f.sent(),!e||c?[3,6]:[4,on.getManager(s).removeModel(u)];case 5:f.sent(),f.label=6;case 6:return[2,h.modelArtifactsInfo]}})})}var mn="models_store",tn="model_info_store";function tc(){if(!P().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");var r=window||self,n=r.indexedDB||r.mozIndexedDB||r.webkitIndexedDB||r.msIndexedDB||r.shimIndexedDB;if(n==null)throw new Error("The current browser does not appear to support IndexedDB.");return n}function ya(r){var n=r.result;n.createObjectStore(mn,{keyPath:"modelPath"}),n.createObjectStore(tn,{keyPath:"modelPath"})}var Vn=function(){function r(n){if(this.indexedDB=tc(),n==null||!n)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=n}return r.prototype.save=function(n){return X(this,void 0,void 0,function(){return Y(this,function(e){if(n.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return[2,this.databaseAction(this.modelPath,n)]})})},r.prototype.load=function(){return X(this,void 0,void 0,function(){return Y(this,function(n){return[2,this.databaseAction(this.modelPath)]})})},r.prototype.databaseAction=function(n,e){var t=this;return new Promise(function(o,a){var i=t.indexedDB.open("tensorflowjs",1);i.onupgradeneeded=function(){return ya(i)},i.onsuccess=function(){var s=i.result;if(e==null){var u=s.transaction(mn,"readonly"),c=u.objectStore(mn).get(t.modelPath);c.onsuccess=function(){if(c.result==null)return s.close(),a(new Error("Cannot find model with path '"+t.modelPath+"' in IndexedDB."));o(c.result.modelArtifacts)},c.onerror=function(m){return s.close(),a(c.error)},u.oncomplete=function(){return s.close()}}else{var l,h=xr(e),f=s.transaction(tn,"readwrite"),p=f.objectStore(tn),d=p.put({modelPath:t.modelPath,modelArtifactsInfo:h});d.onsuccess=function(){var m=(l=s.transaction(mn,"readwrite")).objectStore(mn).put({modelPath:t.modelPath,modelArtifacts:e,modelArtifactsInfo:h});m.onsuccess=function(){return o({modelArtifactsInfo:h})},m.onerror=function(v){var g=(p=f.objectStore(tn)).delete(t.modelPath);g.onsuccess=function(){return s.close(),a(m.error)},g.onerror=function(x){return s.close(),a(m.error)}}},d.onerror=function(m){return s.close(),a(d.error)},f.oncomplete=function(){l==null?s.close():l.oncomplete=function(){return s.close()}}}},i.onerror=function(s){return a(i.error)}})},r.URL_SCHEME="indexeddb://",r}(),ds=function(r){return P().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(Vn.URL_SCHEME)?(n=r.slice(Vn.URL_SCHEME.length),new Vn(n)):null;var n};ut.registerSaveRouter(ds),ut.registerLoadRouter(ds);var dm=function(){function r(){this.indexedDB=tc()}return r.prototype.listModels=function(){return X(this,void 0,void 0,function(){var n=this;return Y(this,function(e){return[2,new Promise(function(t,o){var a=n.indexedDB.open("tensorflowjs",1);a.onupgradeneeded=function(){return ya(a)},a.onsuccess=function(){var i=a.result,s=i.transaction(tn,"readonly"),u=s.objectStore(tn).getAll();u.onsuccess=function(){for(var c={},l=0,h=u.result;l<h.length;l++){var f=h[l];c[f.modelPath]=f.modelArtifactsInfo}t(c)},u.onerror=function(c){return i.close(),o(u.error)},s.oncomplete=function(){return i.close()}},a.onerror=function(i){return o(a.error)}})]})})},r.prototype.removeModel=function(n){return X(this,void 0,void 0,function(){var e=this;return Y(this,function(t){var o;return n=(o=n).startsWith(Vn.URL_SCHEME)?o.slice(Vn.URL_SCHEME.length):o,[2,new Promise(function(a,i){var s=e.indexedDB.open("tensorflowjs",1);s.onupgradeneeded=function(){return ya(s)},s.onsuccess=function(){var u,c=s.result,l=c.transaction(tn,"readwrite"),h=l.objectStore(tn),f=h.get(n);f.onsuccess=function(){if(f.result==null)return c.close(),i(new Error("Cannot find model with path '"+n+"' in IndexedDB."));var p=h.delete(n),d=function(){var m=(u=c.transaction(mn,"readwrite")).objectStore(mn).delete(n);m.onsuccess=function(){return a(f.result.modelArtifactsInfo)},m.onerror=function(v){return i(f.error)}};p.onsuccess=d,p.onerror=function(m){return d(),c.close(),i(f.error)}},f.onerror=function(p){return c.close(),i(f.error)},l.oncomplete=function(){u==null?c.close():u.oncomplete=function(){return c.close()}}},s.onerror=function(u){return i(s.error)}})]})})},r}();if(P().getBool("IS_BROWSER"))try{on.registerManager(Vn.URL_SCHEME,new dm)}catch{}var Gt="/",Pn="tensorflowjs_models",nc="info",vm="model_topology",mm="weight_specs",gm="weight_data",ym="model_metadata";function rc(r){return{info:[Pn,r,nc].join(Gt),topology:[Pn,r,vm].join(Gt),weightSpecs:[Pn,r,mm].join(Gt),weightData:[Pn,r,gm].join(Gt),modelMetadata:[Pn,r,ym].join(Gt)}}function xm(r){var n=r.split(Gt);if(n.length<3)throw new Error("Invalid key format: "+r);return n.slice(1,n.length-1).join(Gt)}var Un=function(){function r(n){if(!P().getBool("IS_BROWSER")||typeof window>"u"||window.localStorage===void 0)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,n==null||!n)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=n,this.keys=rc(this.modelPath)}return r.prototype.save=function(n){return X(this,void 0,void 0,function(){var e,t,o;return Y(this,function(a){if(n.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");e=JSON.stringify(n.modelTopology),t=JSON.stringify(n.weightSpecs),o=xr(n);try{return this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,t),this.LS.setItem(this.keys.weightData,function(i){if(ga)return Buffer.from(i).toString("base64");for(var s=new Uint8Array(i),u="",c=0,l=s.length;c<l;c++)u+=String.fromCharCode(s[c]);return btoa(u)}(n.weightData)),this.LS.setItem(this.keys.modelMetadata,JSON.stringify({format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy,userDefinedMetadata:n.userDefinedMetadata})),[2,{modelArtifactsInfo:o}]}catch{throw this.LS.removeItem(this.keys.info),this.LS.removeItem(this.keys.topology),this.LS.removeItem(this.keys.weightSpecs),this.LS.removeItem(this.keys.weightData),this.LS.removeItem(this.keys.modelMetadata),new Error("Failed to save model '"+this.modelPath+"' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes="+o.modelTopologyBytes+", weightSpecsBytes="+o.weightSpecsBytes+", weightDataBytes="+o.weightDataBytes+".")}return[2]})})},r.prototype.load=function(){return X(this,void 0,void 0,function(){var n,e,t,o,a,i,s;return Y(this,function(u){if((n=JSON.parse(this.LS.getItem(this.keys.info)))==null)throw new Error("In local storage, there is no model with name '"+this.modelPath+"'");if(n.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");if(e={},(t=JSON.parse(this.LS.getItem(this.keys.topology)))==null)throw new Error("In local storage, the topology of model '"+this.modelPath+"' is missing.");if(e.modelTopology=t,(o=JSON.parse(this.LS.getItem(this.keys.weightSpecs)))==null)throw new Error("In local storage, the weight specs of model '"+this.modelPath+"' are missing.");if(e.weightSpecs=o,(a=this.LS.getItem(this.keys.modelMetadata))!=null&&(i=JSON.parse(a),e.format=i.format,e.generatedBy=i.generatedBy,e.convertedBy=i.convertedBy,e.userDefinedMetadata=i.userDefinedMetadata),(s=this.LS.getItem(this.keys.weightData))==null)throw new Error("In local storage, the binary weight values of model '"+this.modelPath+"' are missing.");return e.weightData=function(c){if(ga){var l=Buffer.from(c,"base64");return l.buffer.slice(l.byteOffset,l.byteOffset+l.byteLength)}for(var h=atob(c),f=new Uint8Array(h.length),p=0;p<h.length;++p)f.set([h.charCodeAt(p)],p);return f.buffer}(s),[2,e]})})},r.URL_SCHEME="localstorage://",r}(),vs=function(r){return P().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(Un.URL_SCHEME)?(n=r.slice(Un.URL_SCHEME.length),new Un(n)):null;var n};ut.registerSaveRouter(vs),ut.registerLoadRouter(vs);var bm=function(){function r(){E(P().getBool("IS_BROWSER"),function(){return"Current environment is not a web browser"}),E(typeof window>"u"||window.localStorage!==void 0,function(){return"Current browser does not appear to support localStorage"}),this.LS=window.localStorage}return r.prototype.listModels=function(){return X(this,void 0,void 0,function(){var n,e,t,o,a,i;return Y(this,function(s){for(n={},e=Pn+Gt,t=Gt+nc,o=0;o<this.LS.length;++o)(a=this.LS.key(o)).startsWith(e)&&a.endsWith(t)&&(i=xm(a),n[i]=JSON.parse(this.LS.getItem(a)));return[2,n]})})},r.prototype.removeModel=function(n){return X(this,void 0,void 0,function(){var e,t;return Y(this,function(o){var a;if(n=(a=n).startsWith(Un.URL_SCHEME)?a.slice(Un.URL_SCHEME.length):a,e=rc(n),this.LS.getItem(e.info)==null)throw new Error("Cannot find model at path '"+n+"'");return t=JSON.parse(this.LS.getItem(e.info)),this.LS.removeItem(e.info),this.LS.removeItem(e.topology),this.LS.removeItem(e.weightSpecs),this.LS.removeItem(e.weightData),[2,t]})})},r}();if(P().getBool("IS_BROWSER"))try{on.registerManager(Un.URL_SCHEME,new bm)}catch{}var wm="model",Cm=".json",_m=".weights.bin";function ms(r){return new Promise(function(n){return setTimeout(n)}).then(r)}var $o=function(){function r(n){if(!P().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");n.startsWith(r.URL_SCHEME)&&(n=n.slice(r.URL_SCHEME.length)),n!=null&&n.length!==0||(n=wm),this.modelTopologyFileName=n+Cm,this.weightDataFileName=n+_m}return r.prototype.save=function(n){return X(this,void 0,void 0,function(){var e,t,o,a,i,s;return Y(this,function(u){switch(u.label){case 0:if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");if(e=window.URL.createObjectURL(new Blob([n.weightData],{type:"application/octet-stream"})),!(n.modelTopology instanceof ArrayBuffer))return[3,1];throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");case 1:return t=[{paths:["./"+this.weightDataFileName],weights:n.weightSpecs}],o={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy,weightsManifest:t},a=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),(i=this.jsonAnchor==null?document.createElement("a"):this.jsonAnchor).download=this.modelTopologyFileName,i.href=a,[4,ms(function(){return i.dispatchEvent(new MouseEvent("click"))})];case 2:return u.sent(),n.weightData==null?[3,4]:((s=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor).download=this.weightDataFileName,s.href=e,[4,ms(function(){return s.dispatchEvent(new MouseEvent("click"))})]);case 3:u.sent(),u.label=4;case 4:return[2,{modelArtifactsInfo:xr(n)}]}})})},r.URL_SCHEME="downloads://",r}(),Em=function(){function r(n){if(n==null||n.length<1)throw new Error("When calling browserFiles, at least 1 file is required, but received "+n);this.files=n}return r.prototype.load=function(){return X(this,void 0,void 0,function(){var n,e,t=this;return Y(this,function(o){return n=this.files[0],e=this.files.slice(1),[2,new Promise(function(a,i){var s=new FileReader;s.onload=function(u){var c=JSON.parse(u.target.result),l=c.modelTopology;if(l!=null){e.length===0&&a({modelTopology:l});var h=c.weightsManifest;if(h!=null){var f;try{f=t.checkManifestAndWeightFiles(h,e)}catch(v){return void i(v)}var p=[],d=[],m=[];h.forEach(function(v){v.paths.forEach(function(g){d.push(g),m.push(null)}),p.push.apply(p,v.weights)}),h.forEach(function(v){v.paths.forEach(function(g){var x=new FileReader;x.onload=function(b){var y=b.target.result,w=d.indexOf(g);m[w]=y,m.indexOf(null)===-1&&a({modelTopology:l,weightSpecs:p,weightData:Za(m),format:c.format,generatedBy:c.generatedBy,convertedBy:c.convertedBy,userDefinedMetadata:c.userDefinedMetadata})},x.onerror=function(b){return i("Failed to weights data from file of path '"+g+"'.")},x.readAsArrayBuffer(f[g])})})}else i(new Error("weightManifest field is missing from file "+n.name))}else i(new Error("modelTopology field is missing from file "+n.name))},s.onerror=function(u){return i("Failed to read model topology and weights manifest JSON from file '"+n.name+"'. BrowserFiles supports loading Keras-style tf.Model artifacts only.")},s.readAsText(n)})]})})},r.prototype.checkManifestAndWeightFiles=function(n,e){for(var t=[],o=e.map(function(u){return fs(u.name)}),a={},i=0,s=n;i<s.length;i++)s[i].paths.forEach(function(u){var c=fs(u);if(t.indexOf(c)!==-1)throw new Error("Duplicate file basename found in weights manifest: '"+c+"'");if(t.push(c),o.indexOf(c)===-1)throw new Error("Weight file with basename '"+c+"' is not provided.");a[u]=e[o.indexOf(c)]});if(t.length!==e.length)throw new Error("Mismatch in the number of files in weights manifest ("+t.length+") and the number of weight files provided ("+e.length+").");return a},r}();function gs(r,n,e,t){(function(a){E(a!=null&&Array.isArray(a)&&a.length>0,function(){return"promises must be a none empty array"})})(r),function(a,i){E(a>=0&&a<=1,function(){return"Progress fraction must be in range [0, 1], but got startFraction "+a}),E(i>=0&&i<=1,function(){return"Progress fraction must be in range [0, 1], but got endFraction "+i}),E(i>=a,function(){return"startFraction must be no more than endFraction, but got startFraction "+a+" and endFraction "+i})}(e=e??0,t=t??1);var o=0;return Promise.all(r.map(function(a){return a.then(function(i){var s=e+ ++o/r.length*(t-e);return n(s),i}),a}))}function oc(r,n){return X(this,void 0,void 0,function(){var e,t,o,a,i,s,u,c,l;return Y(this,function(h){switch(h.label){case 0:return n==null&&(n={}),e=n.fetchFunc==null?P().platform.fetch:n.fetchFunc,t=r.map(function(f){return e(f,n.requestInit,{isBinary:!0})}),o=0,a=.5,n.onProgress!=null?[3,2]:[4,Promise.all(t)];case 1:return i=h.sent(),[3,4];case 2:return[4,gs(t,n.onProgress,o,a)];case 3:i=h.sent(),h.label=4;case 4:return s=i.map(function(f){return f.arrayBuffer()}),u=.5,c=1,n.onProgress!=null?[3,6]:[4,Promise.all(s)];case 5:return l=h.sent(),[3,8];case 6:return[4,gs(s,n.onProgress,u,c)];case 7:l=h.sent(),h.label=8;case 8:return[2,l]}})})}function ys(r){var n=this;return function(e,t,o){return t===void 0&&(t=""),X(n,void 0,void 0,function(){var a,i,s,u,c,l,h,f,p,d;return Y(this,function(m){switch(m.label){case 0:if(a=e.map(function(){return!1}),i={},s=o!=null?o.map(function(){return!1}):[],u=[],e.forEach(function(v,g){var x=0;v.weights.forEach(function(b){var y="quantization"in b?b.quantization.dtype:b.dtype,w=ma[y]*$(b.shape),C=function(){a[g]=!0,i[g]==null&&(i[g]=[]),i[g].push({manifestEntry:b,groupOffset:x,sizeBytes:w})};o!=null?o.forEach(function(S,k){S===b.name&&(C(),s[k]=!0)}):C(),u.push(b.name),x+=w})}),!s.every(function(v){return v}))throw c=o.filter(function(v,g){return!s[g]}),new Error("Could not find weights in manifest with names: "+c.join(", ")+`. 
Manifest JSON has weights with names: `+u.join(", ")+".");return l=a.reduce(function(v,g,x){return g&&v.push(x),v},[]),h=[],l.forEach(function(v){e[v].paths.forEach(function(g){var x=t+(t.endsWith("/")?"":"/")+g;h.push(x)})}),[4,r(h)];case 1:return f=m.sent(),p={},d=0,l.forEach(function(v){for(var g=e[v].paths.length,x=0,b=0;b<g;b++)x+=f[d+b].byteLength;for(var y=new ArrayBuffer(x),w=new Uint8Array(y),C=0,S=0;S<g;S++){var k=new Uint8Array(f[d+S]);w.set(k,C),C+=k.byteLength}i[v].forEach(function(R){var I=ec(y.slice(R.groupOffset,R.groupOffset+R.sizeBytes),[R.manifestEntry]);for(var N in I)p[N]=I[N]}),d+=g}),[2,p]}})})}}ut.registerSaveRouter(function(r){return P().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith($o.URL_SCHEME)?function(n){return n===void 0&&(n="model"),new $o(n)}(r.slice($o.URL_SCHEME.length)):null});var ac=function(){function r(n,e){if(this.DEFAULT_METHOD="POST",e==null&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.onProgress=e.onProgress,e.fetchFunc!=null?(E(typeof e.fetchFunc=="function",function(){return"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"}),this.fetch=e.fetchFunc):this.fetch=P().platform.fetch,E(n!=null&&n.length>0,function(){return"URL path for http must not be null, undefined or empty."}),Array.isArray(n)&&E(n.length===2,function(){return"URL paths for http must have a length of 2, (actual length is "+n.length+")."}),this.path=n,e.requestInit!=null&&e.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{}}return r.prototype.save=function(n){return X(this,void 0,void 0,function(){var e,t,o,a;return Y(this,function(i){switch(i.label){case 0:if(n.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");return(e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit)).body=new FormData,t=[{paths:["./model.weights.bin"],weights:n.weightSpecs}],o={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy,userDefinedMetadata:n.userDefinedMetadata,weightsManifest:t},e.body.append("model.json",new Blob([JSON.stringify(o)],{type:"application/json"}),"model.json"),n.weightData!=null&&e.body.append("model.weights.bin",new Blob([n.weightData],{type:"application/octet-stream"}),"model.weights.bin"),[4,this.fetch(this.path,e)];case 1:if((a=i.sent()).ok)return[2,{modelArtifactsInfo:xr(n),responses:[a]}];throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status "+a.status+".")}})})},r.prototype.load=function(){return X(this,void 0,void 0,function(){var n,e,t,o,a,i,s,u,c,l,h,f;return Y(this,function(p){switch(p.label){case 0:return[4,this.fetch(this.path,this.requestInit)];case 1:if(!(n=p.sent()).ok)throw new Error("Request to "+this.path+" failed with status code "+n.status+". Please verify this URL points to the model JSON of the model to load.");p.label=2;case 2:return p.trys.push([2,4,,5]),[4,n.json()];case 3:return e=p.sent(),[3,5];case 4:throw p.sent(),t="Failed to parse model JSON of response from "+this.path+".",this.path.endsWith(".pb")?t+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":t+=" Please make sure the server is serving valid JSON for this request.",new Error(t);case 5:if(o=e.modelTopology,a=e.weightsManifest,i=e.generatedBy,s=e.convertedBy,u=e.format,c=e.userDefinedMetadata,o==null&&a==null)throw new Error("The JSON from HTTP path "+this.path+" contains neither model topology or manifest for weights.");return a==null?[3,7]:[4,this.loadWeights(a)];case 6:f=p.sent(),l=f[0],h=f[1],p.label=7;case 7:return[2,{modelTopology:o,weightSpecs:l,weightData:h,userDefinedMetadata:c,generatedBy:i,convertedBy:s,format:u}]}})})},r.prototype.loadWeights=function(n){return X(this,void 0,void 0,function(){var e,t,o,a,i,s,u,c,l,h,f;return Y(this,function(p){switch(p.label){case 0:for(e=Array.isArray(this.path)?this.path[1]:this.path,t=function(d){var m=d.lastIndexOf("/"),v=d.lastIndexOf("?"),g=d.substring(0,m),x=v>m?d.substring(v):"";return[g+"/",x]}(e),o=t[0],a=t[1],i=this.weightPathPrefix||o,s=[],u=0,c=n;u<c.length;u++)l=c[u],s.push.apply(s,l.weights);return h=[],n.forEach(function(d){d.paths.forEach(function(m){h.push(i+m+a)})}),[4,oc(h,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress})];case 1:return f=p.sent(),[2,[s,Za(f)]]}})})},r.URL_SCHEME_REGEX=/^https?:\/\//,r}();function xa(r){return r.match(ac.URL_SCHEME_REGEX)!=null}var xs=function(r,n){return typeof fetch>"u"?null:(Array.isArray(r)?r.every(function(e){return xa(e)}):xa(r))?ba(r,{onProgress:n}):null};function ba(r,n){return new ac(r,n)}ut.registerSaveRouter(xs),ut.registerLoadRouter(xs);var Jo=function(){function r(n){this.modelArtifacts=n}return r.prototype.load=function(){return X(this,void 0,void 0,function(){return Y(this,function(n){return[2,this.modelArtifacts]})})},r}(),Rm=function(){function r(n){this.saveHandler=n}return r.prototype.save=function(n){return X(this,void 0,void 0,function(){return Y(this,function(e){return[2,this.saveHandler(n)]})})},r}(),ic=Object.freeze({browserFiles:function(r){return new Em(r)},browserHTTPRequest:function(r,n){return ba(r,n)},concatenateArrayBuffers:Za,decodeWeights:ec,encodeWeights:function(r,n){return X(this,void 0,void 0,function(){var e,t,o,a,i,s=this;return Y(this,function(u){switch(u.label){case 0:for(e=[],t=[],o=Array.isArray(r)?r.map(function(c){return c.name}):Object.keys(r),a=function(c){var l=o[c],h=Array.isArray(r)?r[c].tensor:r[l];if(h.dtype!=="float32"&&h.dtype!=="int32"&&h.dtype!=="bool"&&h.dtype!=="string")throw new Error("Unsupported dtype in weight '"+l+"': "+h.dtype);var f={name:l,shape:h.shape,dtype:h.dtype};if(h.dtype==="string"){var p=new Promise(function(d){return X(s,void 0,void 0,function(){var m,v,g,x,b,y,w;return Y(this,function(C){switch(C.label){case 0:return[4,h.bytes()];case 1:for(m=C.sent(),v=m.reduce(function(S,k){return S+k.length},0)+to*m.length,g=new Uint8Array(v),x=0,b=0;b<m.length;b++)y=m[b],w=new Uint8Array(new Uint32Array([y.length]).buffer),g.set(w,x),x+=to,g.set(y,x),x+=y.length;return d(g),[2]}})})});t.push(p)}else t.push(h.data());n!=null&&(f.group=n),e.push(f)},i=0;i<o.length;++i)a(i);return[4,Promise.all(t)];case 1:return[2,{data:pm(u.sent()),specs:e}]}})})},fromMemory:function(r,n,e,t){return arguments.length===1?r.modelTopology!=null||r.weightSpecs!=null?new Jo(r):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Jo({modelTopology:r})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Jo({modelTopology:r,weightSpecs:n,weightData:e,trainingConfig:t}))},getLoadHandlers:function(r,n){return ut.getLoadHandlers(r,n)},getModelArtifactsInfoForJSON:xr,getSaveHandlers:function(r){return ut.getSaveHandlers(r)},http:ba,isHTTPScheme:xa,loadWeights:function(r,n,e,t){return n===void 0&&(n=""),X(this,void 0,void 0,function(){return Y(this,function(o){return[2,ys(function(a){return oc(a,{requestInit:t})})(r,n,e)]})})},registerLoadRouter:function(r){return ut.registerLoadRouter(r)},registerSaveRouter:function(r){return ut.registerSaveRouter(r)},weightsLoaderFactory:ys,withSaveHandler:function(r){return new Rm(r)},copyModel:function(r,n){return X(this,void 0,void 0,function(){return Y(this,function(e){return[2,ps(r,n,!1)]})})},listModels:function(){return X(this,void 0,void 0,function(){var r,n,e,t,o,a,i;return Y(this,function(s){switch(s.label){case 0:r=on.getSchemes(),n={},e=0,t=r,s.label=1;case 1:return e<t.length?(o=t[e],[4,on.getManager(o).listModels()]):[3,4];case 2:for(i in a=s.sent())n[o+Wn+i]=a[i];s.label=3;case 3:return e++,[3,1];case 4:return[2,n]}})})},moveModel:function(r,n){return X(this,void 0,void 0,function(){return Y(this,function(e){return[2,ps(r,n,!0)]})})},removeModel:function(r){return X(this,void 0,void 0,function(){var n;return Y(this,function(e){return n=Or(r),[2,on.getManager(n.scheme).removeModel(n.path)]})})}}),An;D({confusionMatrix_:function(r,n,e){var t=_(r,"labels","confusionMatrix"),o=_(n,"predictions","confusionMatrix");E(e==null||e>0&&Number.isInteger(e),function(){return"If provided, numClasses must be a positive integer, but got "+e}),E(t.rank===1,function(){return"Expected the rank of labels to be 1, but got "+t.rank}),E(o.rank===1,function(){return"Expected the rank of predictions to be 1, but got "+o.rank}),E(t.shape[0]===o.shape[0],function(){return"Mismatch in the number of examples: "+t.shape[0]+" vs. "+o.shape[0]+". Labels and predictions should have the same number of elements."}),E(e>0&&Number.isInteger(e),function(){return"numClasses is required to be a positive integer, but got "+e});var a=ha(t.asType("int32"),e),i=ha(o.asType("int32"),e);return a.transpose().matMul(i).asType("int32")}});var Im=D({fromPixels_:function(r,n){if(n===void 0&&(n=3),n>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(r==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");var e=!1,t=!1,o=!1,a=!1,i=!1;if(r.data instanceof Uint8Array)e=!0;else if(typeof ImageData<"u"&&r instanceof ImageData)t=!0;else if(typeof HTMLVideoElement<"u"&&r instanceof HTMLVideoElement)o=!0;else if(typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement)a=!0;else{if(r.getContext==null)throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was "+r.constructor.name);i=!0}if(o&&o&&r.readyState<2)throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");if(As("FromPixels",T.backendName)!=null)return T.runKernel("FromPixels",{pixels:r},{numChannels:n});var s,u,c=o?[r.videoWidth,r.videoHeight]:[r.width,r.height],l=c[0],h=c[1];if(i?s=r.getContext("2d").getImageData(0,0,l,h).data:t||e?s=r.data:(a||o)&&(An==null&&(An=document.createElement("canvas").getContext("2d")),An.canvas.width=l,An.canvas.height=h,An.drawImage(r,0,0,l,h),s=An.getImageData(0,0,l,h).data),n===4)u=new Int32Array(s);else{var f=l*h;u=new Int32Array(f*n);for(var p=0;p<f;p++)for(var d=0;d<n;++d)u[p*n+d]=s[4*p+d]}return Sa(u,[h,l,n],"int32")}}),ei=Object.freeze({toPixels:function(r,n){return X(this,void 0,void 0,function(){var e,t,o,a,i,s,u,c,l,h,f,p,d,m,v,g,x,b,y,w,C,S,k;return Y(this,function(R){switch(R.label){case 0:if(e=_(r,"img","toPixels"),r instanceof Ee||(e=e.toInt()),e.rank!==2&&e.rank!==3)throw new Error("toPixels only supports rank 2 or 3 tensors, got rank "+e.rank+".");if(t=e.shape.slice(0,2),o=t[0],a=t[1],(i=e.rank===2?1:e.shape[2])>4||i===2)throw new Error("toPixels only supports depth of size 1, 3 or 4 but got "+i);return[4,e.data()];case 1:return s=R.sent(),u=e.min(),c=e.max(),[4,Promise.all([u.data(),c.data()])];case 2:if(l=R.sent(),h=l[0],f=l[1],p=h[0],d=f[0],u.dispose(),c.dispose(),e.dtype==="float32"){if(p<0||d>1)throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range ["+p+" - "+d+"].")}else{if(e.dtype!=="int32")throw new Error("Unsupported type for toPixels: "+e.dtype+". Please use float32 or int32 tensors.");if(p<0||d>255)throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range ["+p+" - "+d+"].")}for(m=e.dtype==="float32"?255:1,v=new Uint8ClampedArray(a*o*4),g=0;g<o*a;++g)x=void 0,b=void 0,y=void 0,w=void 0,i===1?(x=s[g]*m,b=s[g]*m,y=s[g]*m,w=255):i===3?(x=s[3*g]*m,b=s[3*g+1]*m,y=s[3*g+2]*m,w=255):i===4&&(x=s[4*g]*m,b=s[4*g+1]*m,y=s[4*g+2]*m,w=s[4*g+3]*m),v[(C=4*g)+0]=Math.round(x),v[C+1]=Math.round(b),v[C+2]=Math.round(y),v[C+3]=Math.round(w);return n!=null&&(n.width=a,n.height=o,S=n.getContext("2d"),k=new ImageData(v,a,o),S.putImageData(k,0,0)),e!==r&&e.dispose(),[2,v]}})})},fromPixels:Im}),km=function(){function r(){}return r.prototype.getClassName=function(){return this.constructor.className},r.fromConfig=function(n,e){return new n(e)},r}(),Sm=function(){function r(){this.classNameMap={}}return r.getMap=function(){return r.instance==null&&(r.instance=new r),r.instance},r.register=function(n){r.getMap().classNameMap[n.className]=[n,n.fromConfig]},r}();function _n(r){E(r.className!=null,function(){return"Class being registered does not have the static className property defined."}),E(typeof r.className=="string",function(){return"className is required to be a string, but got type "+typeof r.className}),E(r.className.length>0,function(){return"Class being registered has an empty-string as its className, which is disallowed."}),Sm.register(r)}var En=function(r){function n(){return r!==null&&r.apply(this,arguments)||this}return xt(n,r),n.prototype.minimize=function(e,t,o){t===void 0&&(t=!1);var a=this.computeGradients(e,o),i=a.value,s=a.grads;if(o!=null){var u=o.map(function(c){return{name:c.name,tensor:s[c.name]}});this.applyGradients(u)}else this.applyGradients(s);return et(s),t?i:(i.dispose(),null)},Object.defineProperty(n.prototype,"iterations",{get:function(){return this.iterations_==null&&(this.iterations_=0),this.iterations_},enumerable:!0,configurable:!0}),n.prototype.incrementIterations=function(){this.iterations_=this.iterations+1},n.prototype.computeGradients=function(e,t){return Bh(e,t)},n.prototype.dispose=function(){this.iterations_!=null&&et(this.iterations_)},n.prototype.saveIterations=function(){return X(this,void 0,void 0,function(){return Y(this,function(e){return this.iterations_==null&&(this.iterations_=0),[2,{name:"iter",tensor:j(this.iterations_,"int32")}]})})},n.prototype.getWeights=function(){return X(this,void 0,void 0,function(){return Y(this,function(e){throw new Error("getWeights() is not implemented for this optimizer yet.")})})},n.prototype.setWeights=function(e){return X(this,void 0,void 0,function(){return Y(this,function(t){throw new Error("setWeights() is not implemented for this optimizer class "+this.getClassName())})})},n.prototype.extractIterations=function(e){return X(this,void 0,void 0,function(){var t;return Y(this,function(o){switch(o.label){case 0:return t=this,[4,e[0].tensor.data()];case 1:return t.iterations_=o.sent()[0],[2,e.slice(1)]}})})},n}(km);Object.defineProperty(En,Symbol.hasInstance,{value:function(r){return r.minimize!=null&&r.computeGradients!=null&&r.applyGradients!=null}});var Dm=function(r){function n(e,t,o){o===void 0&&(o=null);var a=r.call(this)||this;return a.learningRate=e,a.rho=t,a.epsilon=o,a.accumulatedGrads=[],a.accumulatedUpdates=[],o==null&&(a.epsilon=T.backend.epsilon()),a}return xt(n,r),n.prototype.applyGradients=function(e){var t=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=T.registeredVariables[o];t.accumulatedGrads[a]==null&&(t.accumulatedGrads[a]={originalName:o+"/accum_grad",variable:K(function(){return ve(i).variable(!1)})}),t.accumulatedUpdates[a]==null&&(t.accumulatedUpdates[a]={originalName:o+"/accum_var",variable:K(function(){return ve(i).variable(!1)})});var s=Array.isArray(e)?e[a].tensor:e[o];if(s!=null){var u=t.accumulatedGrads[a].variable,c=t.accumulatedUpdates[a].variable;K(function(){var l=u.mul(t.rho).add(s.square().mul(1-t.rho)),h=c.add(t.epsilon).sqrt().div(u.add(t.epsilon).sqrt()).mul(s),f=c.mul(t.rho).add(h.square().mul(1-t.rho));u.assign(l),c.assign(f);var p=h.mul(-t.learningRate).add(i);i.assign(p)})}}),this.incrementIterations()},n.prototype.dispose=function(){this.accumulatedUpdates!=null&&(et(this.accumulatedGrads.map(function(e){return e.variable})),et(this.accumulatedUpdates.map(function(e){return e.variable})))},n.prototype.getWeights=function(){return X(this,void 0,void 0,function(){var e;return Y(this,function(t){switch(t.label){case 0:return e=this.accumulatedGrads.concat(this.accumulatedUpdates),[4,this.saveIterations()];case 1:return[2,[t.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},n.prototype.setWeights=function(e){return X(this,void 0,void 0,function(){var t;return Y(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(e)];case 1:return e=o.sent(),t=e.length/2,this.accumulatedGrads=e.slice(0,t).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.accumulatedUpdates=e.slice(t,2*t).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),[2]}})})},n.prototype.getConfig=function(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}},n.fromConfig=function(e,t){return new e(t.learningRate,t.rho,t.epsilon)},n.className="Adadelta",n}(En);_n(Dm);var Am=function(r){function n(e,t){t===void 0&&(t=.1);var o=r.call(this)||this;return o.learningRate=e,o.initialAccumulatorValue=t,o.accumulatedGrads=[],o}return xt(n,r),n.prototype.applyGradients=function(e){var t=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=T.registeredVariables[o];t.accumulatedGrads[a]==null&&(t.accumulatedGrads[a]={originalName:o+"/accumulator",variable:K(function(){return Nt(i.shape,t.initialAccumulatorValue).variable(!1)})});var s=Array.isArray(e)?e[a].tensor:e[o];if(s!=null){var u=t.accumulatedGrads[a].variable;K(function(){var c=u.add(s.square());u.assign(c);var l=s.div(c.add(T.backend.epsilon()).sqrt()).mul(-t.learningRate).add(i);i.assign(l)})}}),this.incrementIterations()},n.prototype.dispose=function(){this.accumulatedGrads!=null&&et(this.accumulatedGrads.map(function(e){return e.variable}))},n.prototype.getWeights=function(){return X(this,void 0,void 0,function(){return Y(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulatedGrads.map(function(t){return{name:t.originalName,tensor:t.variable}}))]}})})},n.prototype.setWeights=function(e){return X(this,void 0,void 0,function(){return Y(this,function(t){switch(t.label){case 0:return[4,this.extractIterations(e)];case 1:return e=t.sent(),this.accumulatedGrads=e.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},n.prototype.getConfig=function(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}},n.fromConfig=function(e,t){return new e(t.learningRate,t.initialAccumulatorValue)},n.className="Adagrad",n}(En);_n(Am);var Tm=function(r){function n(e,t,o,a){a===void 0&&(a=null);var i=r.call(this)||this;return i.learningRate=e,i.beta1=t,i.beta2=o,i.epsilon=a,i.accumulatedFirstMoment=[],i.accumulatedSecondMoment=[],K(function(){i.accBeta1=j(t).variable(),i.accBeta2=j(o).variable()}),a==null&&(i.epsilon=T.backend.epsilon()),i}return xt(n,r),n.prototype.applyGradients=function(e){var t=this,o=Array.isArray(e)?e.map(function(a){return a.name}):Object.keys(e);K(function(){var a=Oe(1,t.accBeta1),i=Oe(1,t.accBeta2);o.forEach(function(s,u){var c=T.registeredVariables[s];t.accumulatedFirstMoment[u]==null&&(t.accumulatedFirstMoment[u]={originalName:s+"/m",variable:K(function(){return ve(c).variable(!1)})}),t.accumulatedSecondMoment[u]==null&&(t.accumulatedSecondMoment[u]={originalName:s+"/v",variable:K(function(){return ve(c).variable(!1)})});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var h=t.accumulatedFirstMoment[u].variable,f=t.accumulatedSecondMoment[u].variable,p=h.mul(t.beta1).add(l.mul(1-t.beta1)),d=f.mul(t.beta2).add(l.square().mul(1-t.beta2)),m=p.div(a),v=d.div(i);h.assign(p),f.assign(d);var g=m.div(v.sqrt().add(t.epsilon)).mul(-t.learningRate).add(c);c.assign(g)}}),t.accBeta1.assign(t.accBeta1.mul(t.beta1)),t.accBeta2.assign(t.accBeta2.mul(t.beta2))}),this.incrementIterations()},n.prototype.dispose=function(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&et(this.accumulatedFirstMoment.map(function(e){return e.variable})),this.accumulatedSecondMoment!=null&&et(this.accumulatedSecondMoment.map(function(e){return e.variable}))},n.prototype.getWeights=function(){return X(this,void 0,void 0,function(){var e;return Y(this,function(t){switch(t.label){case 0:return e=this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment),[4,this.saveIterations()];case 1:return[2,[t.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},n.prototype.setWeights=function(e){return X(this,void 0,void 0,function(){var t,o=this;return Y(this,function(a){switch(a.label){case 0:return[4,this.extractIterations(e)];case 1:return e=a.sent(),K(function(){o.accBeta1.assign(Zr(o.beta1,o.iterations_+1)),o.accBeta2.assign(Zr(o.beta2,o.iterations_+1))}),t=e.length/2,this.accumulatedFirstMoment=e.slice(0,t).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),this.accumulatedSecondMoment=e.slice(t,2*t).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),[2]}})})},n.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}},n.fromConfig=function(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon)},n.className="Adam",n}(En);_n(Tm);var Nm=function(r){function n(e,t,o,a,i){a===void 0&&(a=null),i===void 0&&(i=0);var s=r.call(this)||this;return s.learningRate=e,s.beta1=t,s.beta2=o,s.epsilon=a,s.decay=i,s.accumulatedFirstMoment=[],s.accumulatedWeightedInfNorm=[],K(function(){s.iteration=j(0).variable(),s.accBeta1=j(t).variable()}),a==null&&(s.epsilon=T.backend.epsilon()),s}return xt(n,r),n.prototype.applyGradients=function(e){var t=this,o=Array.isArray(e)?e.map(function(a){return a.name}):Object.keys(e);K(function(){var a=Oe(1,t.accBeta1),i=mt(-t.learningRate,t.iteration.mul(t.decay).add(1));o.forEach(function(s,u){var c=T.registeredVariables[s];t.accumulatedFirstMoment[u]==null&&(t.accumulatedFirstMoment[u]={originalName:s+"/m",variable:ve(c).variable(!1)}),t.accumulatedWeightedInfNorm[u]==null&&(t.accumulatedWeightedInfNorm[u]={originalName:s+"/v",variable:ve(c).variable(!1)});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var h=t.accumulatedFirstMoment[u].variable,f=t.accumulatedWeightedInfNorm[u].variable,p=h.mul(t.beta1).add(l.mul(1-t.beta1)),d=f.mul(t.beta2),m=l.abs(),v=d.maximum(m);h.assign(p),f.assign(v);var g=i.div(a).mul(p.div(v.add(t.epsilon))).add(c);c.assign(g)}}),t.iteration.assign(t.iteration.add(1)),t.accBeta1.assign(t.accBeta1.mul(t.beta1))}),this.incrementIterations()},n.prototype.dispose=function(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&et(this.accumulatedFirstMoment.map(function(e){return e.variable})),this.accumulatedWeightedInfNorm!=null&&et(this.accumulatedWeightedInfNorm.map(function(e){return e.variable}))},n.prototype.getWeights=function(){return X(this,void 0,void 0,function(){return Y(this,function(e){throw new Error("getWeights() is not implemented for Adamax yet.")})})},n.prototype.setWeights=function(e){return X(this,void 0,void 0,function(){return Y(this,function(t){throw new Error("setWeights() is not implemented for Adamax yet.")})})},n.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}},n.fromConfig=function(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon,t.decay)},n.className="Adamax",n}(En);_n(Nm);var sc=function(r){function n(e){var t=r.call(this)||this;return t.learningRate=e,t.setLearningRate(e),t}return xt(n,r),n.prototype.applyGradients=function(e){var t=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=Array.isArray(e)?e[a].tensor:e[o];if(i!=null){var s=T.registeredVariables[o];K(function(){var u=t.c.mul(i).add(s);s.assign(u)})}}),this.incrementIterations()},n.prototype.setLearningRate=function(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=Jl(j(-e))},n.prototype.dispose=function(){this.c.dispose()},n.prototype.getWeights=function(){return X(this,void 0,void 0,function(){return Y(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()]]}})})},n.prototype.setWeights=function(e){return X(this,void 0,void 0,function(){return Y(this,function(t){switch(t.label){case 0:return[4,this.extractIterations(e)];case 1:if((e=t.sent()).length!==0)throw new Error("SGD optimizer does not have settable weights.");return[2]}})})},n.prototype.getConfig=function(){return{learningRate:this.learningRate}},n.fromConfig=function(e,t){return new e(t.learningRate)},n.className="SGD",n}(En);_n(sc);var Fm=function(r){function n(e,t,o){o===void 0&&(o=!1);var a=r.call(this,e)||this;return a.learningRate=e,a.momentum=t,a.useNesterov=o,a.accumulations=[],a.m=j(a.momentum),a}return xt(n,r),n.prototype.applyGradients=function(e){var t=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=T.registeredVariables[o];t.accumulations[a]==null&&(t.accumulations[a]={originalName:o+"/momentum",variable:K(function(){return ve(i).variable(!1)})});var s=t.accumulations[a].variable,u=Array.isArray(e)?e[a].tensor:e[o];u!=null&&K(function(){var c,l=t.m.mul(s).add(u);c=t.useNesterov?t.c.mul(u.add(l.mul(t.m))).add(i):t.c.mul(l).add(i),s.assign(l),i.assign(c)})}),this.incrementIterations()},n.prototype.dispose=function(){this.m.dispose(),this.accumulations!=null&&et(this.accumulations.map(function(e){return e.variable}))},n.prototype.setMomentum=function(e){this.momentum=e},n.prototype.getWeights=function(){return X(this,void 0,void 0,function(){return Y(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulations.map(function(t){return{name:t.originalName,tensor:t.variable}}))]}})})},n.prototype.setWeights=function(e){return X(this,void 0,void 0,function(){return Y(this,function(t){switch(t.label){case 0:return[4,this.extractIterations(e)];case 1:return e=t.sent(),this.accumulations=e.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},n.prototype.getConfig=function(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}},n.fromConfig=function(e,t){return new e(t.learningRate,t.momentum,t.useNesterov)},n.className="Momentum",n}(sc);_n(Fm);var Mm=function(r){function n(e,t,o,a,i){t===void 0&&(t=.9),o===void 0&&(o=0),a===void 0&&(a=null),i===void 0&&(i=!1);var s=r.call(this)||this;if(s.learningRate=e,s.decay=t,s.momentum=o,s.epsilon=a,s.accumulatedMeanSquares=[],s.accumulatedMoments=[],s.accumulatedMeanGrads=[],s.centered=i,a==null&&(s.epsilon=T.backend.epsilon()),e==null)throw new Error("learningRate for RMSPropOptimizer must be defined.");return s}return xt(n,r),n.prototype.applyGradients=function(e){var t=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=T.registeredVariables[o];t.accumulatedMeanSquares[a]==null&&(t.accumulatedMeanSquares[a]={originalName:o+"/rms",variable:K(function(){return ve(i).variable(!1)})}),t.accumulatedMoments[a]==null&&(t.accumulatedMoments[a]={originalName:o+"/momentum",variable:K(function(){return ve(i).variable(!1)})}),t.accumulatedMeanGrads[a]==null&&t.centered&&(t.accumulatedMeanGrads[a]={originalName:o+"/mg",variable:K(function(){return ve(i).variable(!1)})});var s=Array.isArray(e)?e[a].tensor:e[o];if(s!=null){var u=t.accumulatedMeanSquares[a].variable,c=t.accumulatedMoments[a].variable;K(function(){var l=u.mul(t.decay).add(s.square().mul(1-t.decay));if(t.centered){var h=t.accumulatedMeanGrads[a].variable,f=h.mul(t.decay).add(s.mul(1-t.decay)),p=c.mul(t.momentum).add(s.mul(t.learningRate).div(l.sub(f.square().add(t.epsilon)).sqrt()));u.assign(l),h.assign(f),c.assign(p);var d=i.sub(p);i.assign(d)}else{var m=u.mul(t.decay).add(s.square().mul(1-t.decay));p=c.mul(t.momentum).add(s.mul(t.learningRate).div(m.add(t.epsilon).sqrt())),u.assign(m),c.assign(p),d=i.sub(p),i.assign(d)}})}}),this.incrementIterations()},n.prototype.dispose=function(){this.accumulatedMeanSquares!=null&&et(this.accumulatedMeanSquares.map(function(e){return e.variable})),this.accumulatedMeanGrads!=null&&this.centered&&et(this.accumulatedMeanGrads.map(function(e){return e.variable})),this.accumulatedMoments!=null&&et(this.accumulatedMoments.map(function(e){return e.variable}))},n.prototype.getWeights=function(){return X(this,void 0,void 0,function(){var e;return Y(this,function(t){switch(t.label){case 0:return e=this.accumulatedMeanSquares.concat(this.accumulatedMoments),this.centered&&e.push.apply(e,this.accumulatedMeanGrads),[4,this.saveIterations()];case 1:return[2,[t.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},n.prototype.setWeights=function(e){return X(this,void 0,void 0,function(){var t;return Y(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(e)];case 1:return e=o.sent(),t=this.centered?e.length/3:e.length/2,this.accumulatedMeanSquares=e.slice(0,t).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.accumulatedMoments=e.slice(t,2*t).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.centered&&(this.accumulatedMeanGrads=e.slice(2*t,3*t).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}})),[2]}})})},n.prototype.getConfig=function(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}},n.fromConfig=function(e,t){return new e(t.learningRate,t.decay,t.momentum,t.epsilon,t.centered)},n.className="RMSProp",n}(En);_n(Mm);Ee.prototype.squaredDifference=function(r){return Cu(this,r)},M=im;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var wa=function(r,n){return wa=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])},wa(r,n)};function re(r,n){wa(r,n);function e(){this.constructor=r}r.prototype=n===null?Object.create(n):(e.prototype=n.prototype,new e)}var Xe=function(){return Xe=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++){e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},Xe.apply(this,arguments)};function J(r,n,e,t){function o(a){return a instanceof e?a:new e(function(i){i(a)})}return new(e||(e=Promise))(function(a,i){function s(l){try{c(t.next(l))}catch(h){i(h)}}function u(l){try{c(t.throw(l))}catch(h){i(h)}}function c(l){l.done?a(l.value):o(l.value).then(s,u)}c((t=t.apply(r,n||[])).next())})}function Q(r,n){var e={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},t,o,a,i;return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(c){return function(l){return u([c,l])}}function u(c){if(t)throw new TypeError("Generator is already executing.");for(;e;)try{if(t=1,o&&(a=c[0]&2?o.return:c[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,c[1])).done)return a;switch(o=0,a&&(c=[c[0]&2,a.value]),c[0]){case 0:case 1:a=c;break;case 4:return e.label++,{value:c[1],done:!1};case 5:e.label++,o=c[1],c=[0];continue;case 7:c=e.ops.pop(),e.trys.pop();continue;default:if(a=e.trys,!(a=a.length>0&&a[a.length-1])&&(c[0]===6||c[0]===2)){e=0;continue}if(c[0]===3&&(!a||c[1]>a[0]&&c[1]<a[3])){e.label=c[1];break}if(c[0]===6&&e.label<a[1]){e.label=a[1],a=c;break}if(a&&e.label<a[2]){e.label=a[2],e.ops.push(c);break}a[2]&&e.ops.pop(),e.trys.pop();continue}c=n.call(r,e)}catch(l){c=[6,l],o=0}finally{t=a=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function nr(){for(var r=0,n=0,e=arguments.length;n<e;n++)r+=arguments[n].length;for(var t=Array(r),o=0,n=0;n<e;n++)for(var a=arguments[n],i=0,s=a.length;i<s;i++,o++)t[o]=a[i];return t}var gn=function(){function r(n,e){if(!yn(n)||!yn(e))throw new Error("Dimensions.constructor - expected width and height to be valid numbers, instead have "+JSON.stringify({width:n,height:e}));this._width=n,this._height=e}return Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),r.prototype.reverse=function(){return new r(1/this.width,1/this.height)},r}();function mo(r,n){return r instanceof Ee&&r.shape.length===n}function Pm(r){return mo(r,2)}function go(r){return mo(r,3)}function an(r){return mo(r,4)}function Om(r){return r%1!==0}function bs(r){return r%2===0}function uc(r,n){n===void 0&&(n=2);var e=Math.pow(10,n);return Math.floor(r*e)/e}function ws(r){return r&&r.width&&r.height}function Bm(r,n){var e=r.width,t=r.height,o=n/Math.max(t,e);return new gn(Math.round(e*o),Math.round(t*o))}function ti(r){return r.reduce(function(n,e){return n.add(e)},new ge(0,0)).div(new ge(r.length,r.length))}function ur(r,n,e){return Array(r).fill(0).map(function(t,o){return n+o*e})}function yn(r){return!!r&&r!==1/0&&r!==-1/0&&!isNaN(r)||r===0}function Cs(r){return yn(r)&&0<=r&&r<=1}var ge=function(){function r(n,e){this._x=n,this._y=e}return Object.defineProperty(r.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),r.prototype.add=function(n){return new r(this.x+n.x,this.y+n.y)},r.prototype.sub=function(n){return new r(this.x-n.x,this.y-n.y)},r.prototype.mul=function(n){return new r(this.x*n.x,this.y*n.y)},r.prototype.div=function(n){return new r(this.x/n.x,this.y/n.y)},r.prototype.abs=function(){return new r(Math.abs(this.x),Math.abs(this.y))},r.prototype.magnitude=function(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))},r.prototype.floor=function(){return new r(Math.floor(this.x),Math.floor(this.y))},r}(),Mt=function(){function r(n,e){e===void 0&&(e=!0);var t=n||{},o=[t.left,t.top,t.right,t.bottom].every(yn),a=[t.x,t.y,t.width,t.height].every(yn);if(!a&&!o)throw new Error("Box.constructor - expected box to be IBoundingBox | IRect, instead have "+JSON.stringify(t));var i=a?[t.x,t.y,t.width,t.height]:[t.left,t.top,t.right-t.left,t.bottom-t.top],s=i[0],u=i[1],c=i[2],l=i[3];r.assertIsValidBox({x:s,y:u,width:c,height:l},"Box.constructor",e),this._x=s,this._y=u,this._width=c,this._height=l}return r.isRect=function(n){return!!n&&[n.x,n.y,n.width,n.height].every(yn)},r.assertIsValidBox=function(n,e,t){if(t===void 0&&(t=!1),!r.isRect(n))throw new Error(e+" - invalid box: "+JSON.stringify(n)+", expected object with properties x, y, width, height");if(!t&&(n.width<0||n.height<0))throw new Error(e+" - width ("+n.width+") and height ("+n.height+") must be positive numbers")},Object.defineProperty(r.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"left",{get:function(){return this.x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"top",{get:function(){return this.y},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"right",{get:function(){return this.x+this.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottom",{get:function(){return this.y+this.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"area",{get:function(){return this.width*this.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"topLeft",{get:function(){return new ge(this.left,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"topRight",{get:function(){return new ge(this.right,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottomLeft",{get:function(){return new ge(this.left,this.bottom)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottomRight",{get:function(){return new ge(this.right,this.bottom)},enumerable:!0,configurable:!0}),r.prototype.round=function(){var n=[this.x,this.y,this.width,this.height].map(function(i){return Math.round(i)}),e=n[0],t=n[1],o=n[2],a=n[3];return new r({x:e,y:t,width:o,height:a})},r.prototype.floor=function(){var n=[this.x,this.y,this.width,this.height].map(function(i){return Math.floor(i)}),e=n[0],t=n[1],o=n[2],a=n[3];return new r({x:e,y:t,width:o,height:a})},r.prototype.toSquare=function(){var n=this,e=n.x,t=n.y,o=n.width,a=n.height,i=Math.abs(o-a);return o<a&&(e-=i/2,o+=i),a<o&&(t-=i/2,a+=i),new r({x:e,y:t,width:o,height:a})},r.prototype.rescale=function(n){var e=ws(n)?n.width:n,t=ws(n)?n.height:n;return new r({x:this.x*e,y:this.y*t,width:this.width*e,height:this.height*t})},r.prototype.pad=function(n,e){var t=[this.x-n/2,this.y-e/2,this.width+n,this.height+e],o=t[0],a=t[1],i=t[2],s=t[3];return new r({x:o,y:a,width:i,height:s})},r.prototype.clipAtImageBorders=function(n,e){var t=this,o=t.x,a=t.y,i=t.right,s=t.bottom,u=Math.max(o,0),c=Math.max(a,0),l=i-u,h=s-c,f=Math.min(l,n-u),p=Math.min(h,e-c);return new r({x:u,y:c,width:f,height:p}).floor()},r.prototype.shift=function(n,e){var t=this,o=t.width,a=t.height,i=this.x+n,s=this.y+e;return new r({x:i,y:s,width:o,height:a})},r.prototype.padAtBorders=function(n,e){var t=this.width+1,o=this.height+1,a=1,i=1,s=t,u=o,c=this.left,l=this.top,h=this.right,f=this.bottom;return h>e&&(s=-h+e+t,h=e),f>n&&(u=-f+n+o,f=n),c<1&&(u=2-c,c=1),l<1&&(u=2-l,l=1),{dy:i,edy:u,dx:a,edx:s,y:l,ey:f,x:c,ex:h,w:t,h:o}},r.prototype.calibrate=function(n){return new r({left:this.left+n.left*this.width,top:this.top+n.top*this.height,right:this.right+n.right*this.width,bottom:this.bottom+n.bottom*this.height}).toSquare().round()},r}(),yo=function(r){re(n,r);function n(e,t,o,a,i){return i===void 0&&(i=!1),r.call(this,{left:e,top:t,right:o,bottom:a},i)||this}return n}(Mt),cc=function(){function r(n,e,t,o,a){this._imageDims=new gn(a.width,a.height),this._score=n,this._classScore=e,this._className=t,this._box=new Mt(o).rescale(this._imageDims)}return Object.defineProperty(r.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"className",{get:function(){return this._className},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"box",{get:function(){return this._box},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageDims",{get:function(){return this._imageDims},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageWidth",{get:function(){return this.imageDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageHeight",{get:function(){return this.imageDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"relativeBox",{get:function(){return new Mt(this._box).rescale(this.imageDims.reverse())},enumerable:!0,configurable:!0}),r.prototype.forSize=function(n,e){return new r(this.score,this.classScore,this.className,this.relativeBox,{width:n,height:e})},r}(),ht=function(r){re(n,r);function n(e,t,o){return r.call(this,e,e,"",t,o)||this}return n.prototype.forSize=function(e,t){var o=r.prototype.forSize.call(this,e,t),a=o.score,i=o.relativeBox,s=o.imageDims;return new n(a,i,s)},n}(cc);function Lm(r,n,e){e===void 0&&(e=!0);var t=Math.max(0,Math.min(r.right,n.right)-Math.max(r.left,n.left)),o=Math.max(0,Math.min(r.bottom,n.bottom)-Math.max(r.top,n.top)),a=t*o;return e?a/(r.area+n.area-a):a/Math.min(r.area,n.area)}function Wm(r){var n=r.map(function(s){return s.x}),e=r.map(function(s){return s.y}),t=n.reduce(function(s,u){return u<s?u:s},1/0),o=e.reduce(function(s,u){return u<s?u:s},1/0),a=n.reduce(function(s,u){return s<u?u:s},0),i=e.reduce(function(s,u){return s<u?u:s},0);return new yo(t,o,a,i)}function cr(r,n,e,t){t===void 0&&(t=!0);for(var o=n.map(function(s,u){return{score:s,boxIndex:u}}).sort(function(s,u){return s.score-u.score}).map(function(s){return s.boxIndex}),a=[],i=function(){var s=o.pop();a.push(s);for(var u=o,c=[],l=0;l<u.length;l++){var h=u[l],f=r[s],p=r[h];c.push(Lm(f,p,t))}o=o.filter(function(d,m){return c[m]<=e})};o.length>0;)i();return a}function br(r,n){return K(function(){var e=n[0],t=n[1],o=n[2],a=Nt(nr(r.shape.slice(0,3),[1]),e),i=Nt(nr(r.shape.slice(0,3),[1]),t),s=Nt(nr(r.shape.slice(0,3),[1]),o),u=Fe([a,i,s],3);return Oe(r,u)})}function Vm(r,n){return n===void 0&&(n=!1),K(function(){var e=r.shape.slice(1),t=e[0],o=e[1];if(t===o)return r;var a=Math.abs(t-o),i=Math.round(a*(n?.5:1)),s=t>o?2:1,u=function(p){var d=r.shape.slice();return d[s]=p,Nt(d,0)},c=u(i),l=a-c.shape[s],h=n&&l?u(l):null,f=[h,r,c].filter(function(p){return!!p}).map(function(p){return p.toFloat()});return Fe(f,s)})}function Qo(r){return 1/(1+Math.exp(-r))}var ni=function(r){re(n,r);function n(e,t,o,a,i){return i===void 0&&(i=!1),r.call(this,{x:e,y:t,width:o,height:a},i)||this}return n}(Mt),Um=.5,zm=.43,Gm=.45,lr=function(){function r(n,e,t){t===void 0&&(t=new ge(0,0));var o=e.width,a=e.height;this._imgDims=new gn(o,a),this._shift=t,this._positions=n.map(function(i){return i.mul(new ge(o,a)).add(t)})}return Object.defineProperty(r.prototype,"shift",{get:function(){return new ge(this._shift.x,this._shift.y)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageWidth",{get:function(){return this._imgDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageHeight",{get:function(){return this._imgDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"positions",{get:function(){return this._positions},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"relativePositions",{get:function(){var n=this;return this._positions.map(function(e){return e.sub(n._shift).div(new ge(n.imageWidth,n.imageHeight))})},enumerable:!0,configurable:!0}),r.prototype.forSize=function(n,e){return new this.constructor(this.relativePositions,{width:n,height:e})},r.prototype.shiftBy=function(n,e){return new this.constructor(this.relativePositions,this._imgDims,new ge(n,e))},r.prototype.shiftByPoint=function(n){return this.shiftBy(n.x,n.y)},r.prototype.align=function(n,e){if(e===void 0&&(e={}),n){var t=n instanceof ht?n.box.floor():new Mt(n);return this.shiftBy(t.x,t.y).align(null,e)}var o=Object.assign({},{useDlibAlignment:!1,minBoxPadding:.2},e),a=o.useDlibAlignment,i=o.minBoxPadding;return a?this.alignDlib():this.alignMinBbox(i)},r.prototype.alignDlib=function(){var n=this.getRefPointsForAlignment(),e=n[0],t=n[1],o=n[2],a=function(h){return o.sub(h).magnitude()},i=(a(e)+a(t))/2,s=Math.floor(i/Gm),u=ti(n),c=Math.floor(Math.max(0,u.x-Um*s)),l=Math.floor(Math.max(0,u.y-zm*s));return new ni(c,l,Math.min(s,this.imageWidth+c),Math.min(s,this.imageHeight+l))},r.prototype.alignMinBbox=function(n){var e=Wm(this.positions);return e.pad(e.width*n,e.height*n)},r.prototype.getRefPointsForAlignment=function(){throw new Error("getRefPointsForAlignment not implemented by base class")},r}(),Hm=function(r){re(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.getRefPointsForAlignment=function(){var e=this.positions;return[e[0],e[1],ti([e[3],e[4]])]},n}(lr),jm=function(r){re(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.getJawOutline=function(){return this.positions.slice(0,17)},n.prototype.getLeftEyeBrow=function(){return this.positions.slice(17,22)},n.prototype.getRightEyeBrow=function(){return this.positions.slice(22,27)},n.prototype.getNose=function(){return this.positions.slice(27,36)},n.prototype.getLeftEye=function(){return this.positions.slice(36,42)},n.prototype.getRightEye=function(){return this.positions.slice(42,48)},n.prototype.getMouth=function(){return this.positions.slice(48,68)},n.prototype.getRefPointsForAlignment=function(){return[this.getLeftEye(),this.getRightEye(),this.getMouth()].map(ti)},n}(lr),_s=function(){function r(n,e){this._label=n,this._distance=e}return Object.defineProperty(r.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"distance",{get:function(){return this._distance},enumerable:!0,configurable:!0}),r.prototype.toString=function(n){return n===void 0&&(n=!0),""+this.label+(n?" ("+uc(this.distance)+")":"")},r}(),Es=function(r){re(n,r);function n(e,t){var o=r.call(this,e)||this;return o._label=t,o}return n.assertIsValidLabeledBox=function(e,t){if(Mt.assertIsValidBox(e,t),!yn(e.label))throw new Error(t+" - expected property label ("+e.label+") to be a number")},Object.defineProperty(n.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),n}(Mt),Zn=function(){function r(n,e){if(typeof n!="string")throw new Error("LabeledFaceDescriptors - constructor expected label to be a string");if(!Array.isArray(e)||e.some(function(t){return!(t instanceof Float32Array)}))throw new Error("LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array");this._label=n,this._descriptors=e}return Object.defineProperty(r.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"descriptors",{get:function(){return this._descriptors},enumerable:!0,configurable:!0}),r.prototype.toJSON=function(){return{label:this.label,descriptors:this.descriptors.map(function(n){return Array.from(n)})}},r.fromJSON=function(n){var e=n.descriptors.map(function(t){return new Float32Array(t)});return new r(n.label,e)},r}();(function(r){re(n,r);function n(e,t,o,a){var i=r.call(this,e,t)||this;return i._score=o,i._classScore=a,i}return n.assertIsValidPredictedBox=function(e,t){if(Es.assertIsValidLabeledBox(e,t),!Cs(e.score)||!Cs(e.classScore))throw new Error(t+" - expected properties score ("+e.score+") and ("+e.classScore+") to be a number between [0, 1]")},Object.defineProperty(n.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),n})(Es);function no(r){return r.detection instanceof ht}function hr(r,n){var e={detection:n};return Object.assign({},r,e)}function lc(){var r=window.fetch||function(){throw new Error("fetch - missing fetch implementation for browser environment")},n=function(){throw new Error("readFile - filesystem not available for browser environment")};return{Canvas:HTMLCanvasElement,CanvasRenderingContext2D,Image:HTMLImageElement,ImageData,Video:HTMLVideoElement,createCanvasElement:function(){return document.createElement("canvas")},createImageElement:function(){return document.createElement("img")},fetch:r,readFile:n}}function hc(r){var n="";if(!r)try{r=require("fs")}catch(t){n=t.toString()}var e=r?function(t){return new Promise(function(o,a){r.readFile(t,function(i,s){return i?a(i):o(s)})})}:function(){throw new Error("readFile - failed to require fs in nodejs environment with error: "+n)};return{readFile:e}}function fc(){var r=global.Canvas||global.HTMLCanvasElement,n=global.Image||global.HTMLImageElement,e=function(){if(r)return new r;throw new Error("createCanvasElement - missing Canvas implementation for nodejs environment")},t=function(){if(n)return new n;throw new Error("createImageElement - missing Image implementation for nodejs environment")},o=global.fetch||function(){throw new Error("fetch - missing fetch implementation for nodejs environment")},a=hc();return Xe({Canvas:r||function(){function i(){}return i}(),CanvasRenderingContext2D:global.CanvasRenderingContext2D||function(){function i(){}return i}(),Image:n||function(){function i(){}return i}(),ImageData:global.ImageData||function(){function i(){}return i}(),Video:global.HTMLVideoElement||function(){function i(){}return i}(),createCanvasElement:e,createImageElement:t,fetch:o},a)}function pc(){return typeof window=="object"&&typeof document<"u"&&typeof HTMLImageElement<"u"&&typeof HTMLCanvasElement<"u"&&typeof HTMLVideoElement<"u"&&typeof ImageData<"u"&&typeof CanvasRenderingContext2D<"u"}function dc(){return typeof global=="object"&&typeof require=="function"&&typeof module<"u"&&typeof process<"u"&&!!process.version}var Ne;function qm(){if(!Ne)throw new Error("getEnv - environment is not defined, check isNodejs() and isBrowser()");return Ne}function Ca(r){Ne=r}function ri(){pc()&&Ca(lc()),dc()&&Ca(fc())}function Km(r){if(Ne||ri(),!Ne)throw new Error("monkeyPatch - environment is not defined, check isNodejs() and isBrowser()");var n=r.Canvas,e=n===void 0?Ne.Canvas:n,t=r.Image,o=t===void 0?Ne.Image:t;Ne.Canvas=e,Ne.Image=o,Ne.createCanvasElement=r.createCanvasElement||function(){return new e},Ne.createImageElement=r.createImageElement||function(){return new o},Ne.ImageData=r.ImageData||Ne.ImageData,Ne.Video=r.Video||Ne.Video,Ne.fetch=r.fetch||Ne.fetch,Ne.readFile=r.readFile||Ne.readFile}var qe={getEnv:qm,setEnv:Ca,initialize:ri,createBrowserEnv:lc,createFileSystem:hc,createNodejsEnv:fc,monkeyPatch:Km,isBrowser:pc,isNodejs:dc};ri();function oi(r){return!qe.isNodejs()&&typeof r=="string"?document.getElementById(r):r}function Ht(r){var n=qe.getEnv(),e=n.Canvas,t=n.CanvasRenderingContext2D;if(r instanceof t)return r;var o=oi(r);if(!(o instanceof e))throw new Error("resolveContext2d - expected canvas to be of instance of Canvas");var a=o.getContext("2d");if(!a)throw new Error("resolveContext2d - canvas 2d context is null");return a}var nn;(function(r){r.TOP_LEFT="TOP_LEFT",r.TOP_RIGHT="TOP_RIGHT",r.BOTTOM_LEFT="BOTTOM_LEFT",r.BOTTOM_RIGHT="BOTTOM_RIGHT"})(nn||(nn={}));var vc=function(){function r(n){n===void 0&&(n={});var e=n.anchorPosition,t=n.backgroundColor,o=n.fontColor,a=n.fontSize,i=n.fontStyle,s=n.padding;this.anchorPosition=e||nn.TOP_LEFT,this.backgroundColor=t||"rgba(0, 0, 0, 0.5)",this.fontColor=o||"rgba(255, 255, 255, 1)",this.fontSize=a||14,this.fontStyle=i||"Georgia",this.padding=s||4}return r}(),Xm=function(){function r(n,e,t){t===void 0&&(t={}),this.text=typeof n=="string"?[n]:n instanceof r?n.text:n,this.anchor=e,this.options=new vc(t)}return r.prototype.measureWidth=function(n){var e=this.options.padding;return this.text.map(function(t){return n.measureText(t).width}).reduce(function(t,o){return t<o?o:t},0)+2*e},r.prototype.measureHeight=function(){var n=this.options,e=n.fontSize,t=n.padding;return this.text.length*e+2*t},r.prototype.getUpperLeft=function(n,e){var t=this.options.anchorPosition,o=t===nn.BOTTOM_RIGHT||t===nn.TOP_RIGHT,a=t===nn.BOTTOM_LEFT||t===nn.BOTTOM_RIGHT,i=this.measureWidth(n),s=this.measureHeight(),u=o?this.anchor.x-i:this.anchor.x,c=a?this.anchor.y-s:this.anchor.y;if(e){var l=e.width,h=e.height,f=Math.max(Math.min(u,l-i),0),p=Math.max(Math.min(c,h-s),0);return{x:f,y:p}}return{x:u,y:c}},r.prototype.draw=function(n){var e=oi(n),t=Ht(e),o=this.options,a=o.backgroundColor,i=o.fontColor,s=o.fontSize,u=o.fontStyle,c=o.padding;t.font=s+"px "+u;var l=this.measureWidth(t),h=this.measureHeight();t.fillStyle=a;var f=this.getUpperLeft(t,e);t.fillRect(f.x,f.y,l,h),t.fillStyle=i,this.text.forEach(function(p,d){var m=c+f.x,v=c+f.y+(d+1)*s;t.fillText(p,m,v)})},r}(),Ym=function(){function r(n){n===void 0&&(n={});var e=n.boxColor,t=n.lineWidth,o=n.label,a=n.drawLabelOptions;this.boxColor=e||"rgba(0, 0, 255, 1)",this.lineWidth=t||2,this.label=o;var i={anchorPosition:nn.BOTTOM_LEFT,backgroundColor:this.boxColor};this.drawLabelOptions=new vc(Object.assign({},i,a))}return r}(),mc=function(){function r(n,e){e===void 0&&(e={}),this.box=new Mt(n),this.options=new Ym(e)}return r.prototype.draw=function(n){var e=Ht(n),t=this.options,o=t.boxColor,a=t.lineWidth,i=this.box,s=i.x,u=i.y,c=i.width,l=i.height;e.strokeStyle=o,e.lineWidth=a,e.strokeRect(s,u,c,l);var h=this.options.label;h&&new Xm([h],{x:s-a/2,y:u},this.options.drawLabelOptions).draw(n)},r}();function $m(r,n){var e=Array.isArray(n)?n:[n];e.forEach(function(t){var o=t instanceof ht?t.score:no(t)?t.detection.score:void 0,a=t instanceof ht?t.box:no(t)?t.detection.box:new Mt(t),i=o?""+uc(o):void 0;new mc(a,{label:i}).draw(r)})}function gc(r){var n=qe.getEnv(),e=n.Image,t=n.Video;return r instanceof e&&r.complete||r instanceof t&&r.readyState>=3}function Jm(r){return new Promise(function(n,e){if(r instanceof qe.getEnv().Canvas||gc(r))return n();function t(a){a.currentTarget&&(a.currentTarget.removeEventListener("load",t),a.currentTarget.removeEventListener("error",o),n(a))}function o(a){a.currentTarget&&(a.currentTarget.removeEventListener("load",t),a.currentTarget.removeEventListener("error",o),e(a))}r.addEventListener("load",t),r.addEventListener("error",o)})}function Qm(r){return new Promise(function(n,e){if(!(r instanceof Blob))return e("bufferToImage - expected buf to be of type: Blob");var t=new FileReader;t.onload=function(){if(typeof t.result!="string")return e("bufferToImage - expected reader.result to be a string, in onload");var o=qe.getEnv().createImageElement();o.onload=function(){return n(o)},o.onerror=e,o.src=t.result},t.onerror=e,t.readAsDataURL(r)})}function ai(r){var n=qe.getEnv(),e=n.Image,t=n.Video;return r instanceof e?new gn(r.naturalWidth,r.naturalHeight):r instanceof t?new gn(r.videoWidth,r.videoHeight):new gn(r.width,r.height)}function xo(r){var n=r.width,e=r.height,t=qe.getEnv().createCanvasElement,o=t();return o.width=n,o.height=e,o}function ii(r,n){var e=qe.getEnv().ImageData;if(!(r instanceof e)&&!gc(r))throw new Error("createCanvasFromMedia - media has not finished loading yet");var t=n||ai(r),o=t.width,a=t.height,i=xo({width:o,height:a});return r instanceof e?Ht(i).putImageData(r,0,0):Ht(i).drawImage(r,0,0,o,a),i}function Zm(r,n){return J(this,void 0,void 0,function(){var e,t,o,a,i,s;return Q(this,function(u){switch(u.label){case 0:return e=n||qe.getEnv().createCanvasElement(),t=r.shape.slice(an(r)?1:0),o=t[0],a=t[1],i=t[2],s=K(function(){return r.as3D(o,a,i).toInt()}),[4,ei.toPixels(s,e)];case 1:return u.sent(),s.dispose(),[2,e]}})})}function Rs(r){var n=qe.getEnv(),e=n.Image,t=n.Canvas,o=n.Video;return r instanceof e||r instanceof t||r instanceof o}function eg(r,n,e){e===void 0&&(e=!1);var t=qe.getEnv(),o=t.Image,a=t.Canvas;if(!(r instanceof o||r instanceof a))throw new Error("imageToSquare - expected arg0 to be HTMLImageElement | HTMLCanvasElement");var i=ai(r),s=n/Math.max(i.height,i.width),u=s*i.width,c=s*i.height,l=xo({width:n,height:n}),h=r instanceof a?r:ii(r),f=Math.abs(u-c)/2,p=e&&u<c?f:0,d=e&&c<u?f:0;return Ht(l).drawImage(h,p,d,u,c),l}var ro=function(){function r(n,e){var t=this;if(e===void 0&&(e=!1),this._imageTensors=[],this._canvases=[],this._treatAsBatchInput=!1,this._inputDimensions=[],!Array.isArray(n))throw new Error("NetInput.constructor - expected inputs to be an Array of TResolvedNetInput or to be instanceof tf.Tensor4D, instead have "+n);this._treatAsBatchInput=e,this._batchSize=n.length,n.forEach(function(o,a){if(go(o)){t._imageTensors[a]=o,t._inputDimensions[a]=o.shape;return}if(an(o)){var i=o.shape[0];if(i!==1)throw new Error("NetInput - tf.Tensor4D with batchSize "+i+" passed, but not supported in input array");t._imageTensors[a]=o,t._inputDimensions[a]=o.shape.slice(1);return}var s=o instanceof qe.getEnv().Canvas?o:ii(o);t._canvases[a]=s,t._inputDimensions[a]=[s.height,s.width,3]})}return Object.defineProperty(r.prototype,"imageTensors",{get:function(){return this._imageTensors},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"canvases",{get:function(){return this._canvases},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isBatchInput",{get:function(){return this.batchSize>1||this._treatAsBatchInput},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"batchSize",{get:function(){return this._batchSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"inputDimensions",{get:function(){return this._inputDimensions},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"reshapedInputDimensions",{get:function(){var n=this;return ur(this.batchSize,0,1).map(function(e,t){return n.getReshapedInputDimensions(t)})},enumerable:!0,configurable:!0}),r.prototype.getInput=function(n){return this.canvases[n]||this.imageTensors[n]},r.prototype.getInputDimensions=function(n){return this._inputDimensions[n]},r.prototype.getInputHeight=function(n){return this._inputDimensions[n][0]},r.prototype.getInputWidth=function(n){return this._inputDimensions[n][1]},r.prototype.getReshapedInputDimensions=function(n){if(typeof this.inputSize!="number")throw new Error("getReshapedInputDimensions - inputSize not set, toBatchTensor has not been called yet");var e=this.getInputWidth(n),t=this.getInputHeight(n);return Bm({width:e,height:t},this.inputSize)},r.prototype.toBatchTensor=function(n,e){var t=this;return e===void 0&&(e=!0),this._inputSize=n,K(function(){var o=ur(t.batchSize,0,1).map(function(i){var s=t.getInput(i);if(s instanceof Ee){var u=an(s)?s:s.expandDims();return u=Vm(u,e),(u.shape[1]!==n||u.shape[2]!==n)&&(u=Xa.resizeBilinear(u,[n,n])),u.as3D(n,n,3)}if(s instanceof qe.getEnv().Canvas)return ei.fromPixels(eg(s,n,e));throw new Error("toBatchTensor - at batchIdx "+i+", expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have "+s)}),a=lt(o.map(function(i){return i.toFloat()})).as4D(t.batchSize,n,n,3);return a})},r}();function Ve(r){return J(this,void 0,void 0,function(){var n,e,t;return Q(this,function(o){switch(o.label){case 0:if(r instanceof ro)return[2,r];if(n=Array.isArray(r)?r:[r],!n.length)throw new Error("toNetInput - empty array passed as input");return e=function(a){return Array.isArray(r)?" at input index "+a+":":""},t=n.map(oi),t.forEach(function(a,i){if(!Rs(a)&&!go(a)&&!an(a))throw typeof n[i]=="string"?new Error("toNetInput -"+e(i)+" string passed, but could not resolve HTMLElement for element id "+n[i]):new Error("toNetInput -"+e(i)+" expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id");if(an(a)){var s=a.shape[0];if(s!==1)throw new Error("toNetInput -"+e(i)+" tf.Tensor4D with batchSize "+s+" passed, but not supported in input array")}}),[4,Promise.all(t.map(function(a){return Rs(a)&&Jm(a)}))];case 1:return o.sent(),[2,new ro(t,Array.isArray(r))]}})})}function si(r,n){return J(this,void 0,void 0,function(){var e,t,o,a,i,s,u;return Q(this,function(c){switch(c.label){case 0:return e=qe.getEnv().Canvas,t=r,r instanceof e?[3,5]:[4,Ve(r)];case 1:if(o=c.sent(),o.batchSize>1)throw new Error("extractFaces - batchSize > 1 not supported");return a=o.getInput(0),a instanceof e?(i=a,[3,4]):[3,2];case 2:return[4,Zm(a)];case 3:i=c.sent(),c.label=4;case 4:t=i,c.label=5;case 5:return s=Ht(t),u=n.map(function(l){return l instanceof ht?l.forSize(t.width,t.height).box.floor():l}).map(function(l){return l.clipAtImageBorders(t.width,t.height)}),[2,u.map(function(l){var h=l.x,f=l.y,p=l.width,d=l.height,m=xo({width:p,height:d});return Ht(m).putImageData(s.getImageData(h,f,p,d),0,0),m})]}})})}function ui(r,n){return J(this,void 0,void 0,function(){return Q(this,function(e){if(!go(r)&&!an(r))throw new Error("extractFaceTensors - expected image tensor to be 3D or 4D");if(an(r)&&r.shape[0]>1)throw new Error("extractFaceTensors - batchSize > 1 not supported");return[2,K(function(){var t=r.shape.slice(an(r)?1:0),o=t[0],a=t[1],i=t[2],s=n.map(function(c){return c instanceof ht?c.forSize(a,o).box:c}).map(function(c){return c.clipAtImageBorders(a,o)}),u=s.map(function(c){var l=c.x,h=c.y,f=c.width,p=c.height;return Gu(r.as3D(o,a,i),[h,l,0],[p,f,i])});return u})]})})}function yc(r,n){return J(this,void 0,void 0,function(){var e,t;return Q(this,function(o){switch(o.label){case 0:return e=qe.getEnv().fetch,[4,e(r,n)];case 1:if(t=o.sent(),!(t.status<400))throw new Error("failed to fetch: ("+t.status+") "+t.statusText+", from url: "+t.url);return[2,t]}})})}function tg(r){return J(this,void 0,void 0,function(){var n,e;return Q(this,function(t){switch(t.label){case 0:return[4,yc(r)];case 1:return n=t.sent(),[4,n.blob()];case 2:if(e=t.sent(),!e.type.startsWith("image/"))throw new Error("fetchImage - expected blob type to be of type image/*, instead have: "+e.type+", for url: "+n.url);return[2,Qm(e)]}})})}function ng(r){return J(this,void 0,void 0,function(){return Q(this,function(n){switch(n.label){case 0:return[4,yc(r)];case 1:return[2,n.sent().json()]}})})}function xc(r,n){var e=n+"-weights_manifest.json";if(!r)return{modelBaseUri:"",manifestUri:e};if(r==="/")return{modelBaseUri:"/",manifestUri:"/"+e};var t=r.startsWith("http://")?"http://":r.startsWith("https://")?"https://":"";r=r.replace(t,"");var o=r.split("/").filter(function(s){return s}),a=r.endsWith(".json")?o[o.length-1]:e,i=t+(r.endsWith(".json")?o.slice(0,o.length-1):o).join("/");return i=r.startsWith("/")?"/"+i:i,{modelBaseUri:i,manifestUri:i==="/"?"/"+a:i+"/"+a}}function rg(r,n){return J(this,void 0,void 0,function(){var e,t,o,a;return Q(this,function(i){switch(i.label){case 0:return e=xc(r,n),t=e.manifestUri,o=e.modelBaseUri,[4,ng(t)];case 1:return a=i.sent(),[2,ic.loadWeights(a,o)]}})})}function og(r,n,e){e===void 0&&(e=!1);var t=e?ai(n):n,o=t.width,a=t.height;return r.width=o,r.height=a,{width:o,height:a}}var Xt=function(){function r(n){this._name=n,this._params=void 0,this._paramMappings=[]}return Object.defineProperty(r.prototype,"params",{get:function(){return this._params},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"paramMappings",{get:function(){return this._paramMappings},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isLoaded",{get:function(){return!!this.params},enumerable:!0,configurable:!0}),r.prototype.getParamFromPath=function(n){var e=this.traversePropertyPath(n),t=e.obj,o=e.objProp;return t[o]},r.prototype.reassignParamFromPath=function(n,e){var t=this.traversePropertyPath(n),o=t.obj,a=t.objProp;o[a].dispose(),o[a]=e},r.prototype.getParamList=function(){var n=this;return this._paramMappings.map(function(e){var t=e.paramPath;return{path:t,tensor:n.getParamFromPath(t)}})},r.prototype.getTrainableParams=function(){return this.getParamList().filter(function(n){return n.tensor instanceof Hn})},r.prototype.getFrozenParams=function(){return this.getParamList().filter(function(n){return!(n.tensor instanceof Hn)})},r.prototype.variable=function(){var n=this;this.getFrozenParams().forEach(function(e){var t=e.path,o=e.tensor;n.reassignParamFromPath(t,o.variable())})},r.prototype.freeze=function(){var n=this;this.getTrainableParams().forEach(function(e){var t=e.path,o=e.tensor,a=He(o.dataSync());o.dispose(),n.reassignParamFromPath(t,a)})},r.prototype.dispose=function(n){n===void 0&&(n=!0),this.getParamList().forEach(function(e){if(n&&e.tensor.isDisposed)throw new Error("param tensor has already been disposed for path "+e.path);e.tensor.dispose()}),this._params=void 0},r.prototype.serializeParams=function(){return new Float32Array(this.getParamList().map(function(n){var e=n.tensor;return Array.from(e.dataSync())}).reduce(function(n,e){return n.concat(e)}))},r.prototype.load=function(n){return J(this,void 0,void 0,function(){return Q(this,function(e){switch(e.label){case 0:return n instanceof Float32Array?(this.extractWeights(n),[2]):[4,this.loadFromUri(n)];case 1:return e.sent(),[2]}})})},r.prototype.loadFromUri=function(n){return J(this,void 0,void 0,function(){var e;return Q(this,function(t){switch(t.label){case 0:if(n&&typeof n!="string")throw new Error(this._name+".loadFromUri - expected model uri");return[4,rg(n,this.getDefaultModelName())];case 1:return e=t.sent(),this.loadFromWeightMap(e),[2]}})})},r.prototype.loadFromDisk=function(n){return J(this,void 0,void 0,function(){var e,t,o,a,i,s,u,c,l,h;return Q(this,function(f){switch(f.label){case 0:if(n&&typeof n!="string")throw new Error(this._name+".loadFromDisk - expected model file path");return e=qe.getEnv().readFile,t=xc(n,this.getDefaultModelName()),o=t.manifestUri,a=t.modelBaseUri,i=function(p){return Promise.all(p.map(function(d){return e(d).then(function(m){return m.buffer})}))},s=ic.weightsLoaderFactory(i),l=(c=JSON).parse,[4,e(o)];case 1:return u=l.apply(c,[f.sent().toString()]),[4,s(u,a)];case 2:return h=f.sent(),this.loadFromWeightMap(h),[2]}})})},r.prototype.loadFromWeightMap=function(n){var e=this.extractParamsFromWeigthMap(n),t=e.paramMappings,o=e.params;this._paramMappings=t,this._params=o},r.prototype.extractWeights=function(n){var e=this.extractParams(n),t=e.paramMappings,o=e.params;this._paramMappings=t,this._params=o},r.prototype.traversePropertyPath=function(n){if(!this.params)throw new Error("traversePropertyPath - model has no loaded params");var e=n.split("/").reduce(function(a,i){if(!a.nextObj.hasOwnProperty(i))throw new Error("traversePropertyPath - object does not have property "+i+", for path "+n);return{obj:a.nextObj,objProp:i,nextObj:a.nextObj[i]}},{nextObj:this.params}),t=e.obj,o=e.objProp;if(!t||!o||!(t[o]instanceof Ee))throw new Error("traversePropertyPath - parameter is not a tensor, for path "+n);return{obj:t,objProp:o}},r}();function ct(r,n,e){return K(function(){var t=Ga(r,n.depthwise_filter,n.pointwise_filter,e,"same");return t=ue(t,n.bias),t})}function Zo(r,n,e){return e===void 0&&(e=!1),K(function(){var t=Re(e?ue(vt(r,n.conv0.filters,[2,2],"same"),n.conv0.bias):ct(r,n.conv0,[2,2])),o=ct(t,n.conv1,[1,1]),a=Re(ue(t,o)),i=ct(a,n.conv2,[1,1]);return Re(ue(t,ue(o,i)))})}function Nr(r,n,e,t){return e===void 0&&(e=!1),t===void 0&&(t=!0),K(function(){var o=Re(e?ue(vt(r,n.conv0.filters,t?[2,2]:[1,1],"same"),n.conv0.bias):ct(r,n.conv0,t?[2,2]:[1,1])),a=ct(o,n.conv1,[1,1]),i=Re(ue(o,a)),s=ct(i,n.conv2,[1,1]),u=Re(ue(o,ue(a,s))),c=ct(u,n.conv3,[1,1]);return Re(ue(o,ue(a,ue(s,c))))})}function yt(r,n,e,t){return e===void 0&&(e="same"),t===void 0&&(t=!1),K(function(){var o=ue(vt(r,n.filters,[1,1],e),n.bias);return t?Re(o):o})}function Yt(r,n){Object.keys(r).forEach(function(e){n.some(function(t){return t.originalPath===e})||r[e].dispose()})}function bo(r,n){return function(e,t,o,a){var i=Qe(r(e*t*o*o),[o,o,e,t]),s=Te(r(t));return n.push({paramPath:a+"/filters"},{paramPath:a+"/bias"}),{filters:i,bias:s}}}function ci(r,n){return function(e,t,o){var a=rn(r(e*t),[e,t]),i=Te(r(t));return n.push({paramPath:o+"/weights"},{paramPath:o+"/bias"}),{weights:a,bias:i}}}var bc=function(){function r(n,e,t){this.depthwise_filter=n,this.pointwise_filter=e,this.bias=t}return r}();function li(r,n){return function(e,t,o){var a=Qe(r(9*e),[3,3,e,1]),i=Qe(r(e*t),[1,1,e,t]),s=Te(r(t));return n.push({paramPath:o+"/depthwise_filter"},{paramPath:o+"/pointwise_filter"},{paramPath:o+"/bias"}),new bc(a,i,s)}}function hi(r){return function(n){var e=r(n+"/depthwise_filter",4),t=r(n+"/pointwise_filter",4),o=r(n+"/bias",1);return new bc(e,t,o)}}function ln(r,n){return function(e,t,o){var a=r[e];if(!mo(a,t))throw new Error("expected weightMap["+e+"] to be a Tensor"+t+"D, instead have "+a);return n.push({originalPath:e,paramPath:o||e}),a}}function $t(r){var n=r;function e(o){var a=n.slice(0,o);return n=n.slice(o),a}function t(){return n}return{extractWeights:e,getRemainingWeights:t}}function wc(r,n){var e=bo(r,n),t=li(r,n);function o(i,s,u,c){c===void 0&&(c=!1);var l=c?e(i,s,3,u+"/conv0"):t(i,s,u+"/conv0"),h=t(s,s,u+"/conv1"),f=t(s,s,u+"/conv2");return{conv0:l,conv1:h,conv2:f}}function a(i,s,u,c){c===void 0&&(c=!1);var l=o(i,s,u,c),h=l.conv0,f=l.conv1,p=l.conv2,d=t(s,s,u+"/conv3");return{conv0:h,conv1:f,conv2:p,conv3:d}}return{extractDenseBlock3Params:o,extractDenseBlock4Params:a}}function ag(r){var n=[],e=$t(r),t=e.extractWeights,o=e.getRemainingWeights,a=wc(t,n).extractDenseBlock4Params,i=a(3,32,"dense0",!0),s=a(32,64,"dense1"),u=a(64,128,"dense2"),c=a(128,256,"dense3");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:n,params:{dense0:i,dense1:s,dense2:u,dense3:c}}}function Cc(r){return function(n){var e=r(n+"/filters",4),t=r(n+"/bias",1);return{filters:e,bias:t}}}function _c(r,n){var e=ln(r,n),t=Cc(e),o=hi(e);function a(s,u){u===void 0&&(u=!1);var c=u?t(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),h=o(s+"/conv2");return{conv0:c,conv1:l,conv2:h}}function i(s,u){u===void 0&&(u=!1);var c=u?t(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),h=o(s+"/conv2"),f=o(s+"/conv3");return{conv0:c,conv1:l,conv2:h,conv3:f}}return{extractDenseBlock3Params:a,extractDenseBlock4Params:i}}function ig(r){var n=[],e=_c(r,n).extractDenseBlock4Params,t={dense0:e("dense0",!0),dense1:e("dense1"),dense2:e("dense2"),dense3:e("dense3")};return Yt(r,n),{params:t,paramMappings:n}}var Ec=function(r){re(n,r);function n(){return r.call(this,"FaceFeatureExtractor")||this}return n.prototype.forwardInput=function(e){var t=this.params;if(!t)throw new Error("FaceFeatureExtractor - load model before inference");return K(function(){var o=e.toBatchTensor(112,!0),a=[122.782,117.001,104.298],i=br(o,a).div(j(255)),s=Nr(i,t.dense0,!0);return s=Nr(s,t.dense1),s=Nr(s,t.dense2),s=Nr(s,t.dense3),s=yr(s,[7,7],[2,2],"valid"),s})},n.prototype.forward=function(e){return J(this,void 0,void 0,function(){var t;return Q(this,function(o){switch(o.label){case 0:return t=this.forwardInput,[4,Ve(e)];case 1:return[2,t.apply(this,[o.sent()])]}})})},n.prototype.getDefaultModelName=function(){return"face_feature_extractor_model"},n.prototype.extractParamsFromWeigthMap=function(e){return ig(e)},n.prototype.extractParams=function(e){return ag(e)},n}(Xt);function Dt(r,n){return K(function(){return ue(fo(r,n.weights),n.bias)})}function sg(r,n,e){var t=[],o=$t(r),a=o.extractWeights,i=o.getRemainingWeights,s=ci(a,t),u=s(n,e,"fc");if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{paramMappings:t,params:{fc:u}}}function ug(r){var n=[],e=ln(r,n);function t(a){var i=e(a+"/weights",2),s=e(a+"/bias",1);return{weights:i,bias:s}}var o={fc:t("fc")};return Yt(r,n),{params:o,paramMappings:n}}function Rc(r){var n={},e={};return Object.keys(r).forEach(function(t){var o=t.startsWith("fc")?e:n;o[t]=r[t]}),{featureExtractorMap:n,classifierMap:e}}var Ic=function(r){re(n,r);function n(e,t){var o=r.call(this,e)||this;return o._faceFeatureExtractor=t,o}return Object.defineProperty(n.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),n.prototype.runNet=function(e){var t=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return K(function(){var a=e instanceof ro?t.faceFeatureExtractor.forwardInput(e):e;return Dt(a.as2D(a.shape[0],-1),o.fc)})},n.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),r.prototype.dispose.call(this,e)},n.prototype.loadClassifierParams=function(e){var t=this.extractClassifierParams(e),o=t.params,a=t.paramMappings;this._params=o,this._paramMappings=a},n.prototype.extractClassifierParams=function(e){return sg(e,this.getClassifierChannelsIn(),this.getClassifierChannelsOut())},n.prototype.extractParamsFromWeigthMap=function(e){var t=Rc(e),o=t.featureExtractorMap,a=t.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),ug(a)},n.prototype.extractParams=function(e){var t=this.getClassifierChannelsIn(),o=this.getClassifierChannelsOut(),a=o*t+o,i=e.slice(0,e.length-a),s=e.slice(e.length-a);return this.faceFeatureExtractor.extractWeights(i),this.extractClassifierParams(s)},n}(Xt),Is=["neutral","happy","sad","angry","fearful","disgusted","surprised"],cg=function(){function r(n){var e=this;if(n.length!==7)throw new Error("FaceExpressions.constructor - expected probabilities.length to be 7, have: "+n.length);Is.forEach(function(t,o){e[t]=n[o]})}return r.prototype.asSortedArray=function(){var n=this;return Is.map(function(e){return{expression:e,probability:n[e]}}).sort(function(e,t){return t.probability-e.probability})},r}(),lg=function(r){re(n,r);function n(e){return e===void 0&&(e=new Ec),r.call(this,"FaceExpressionNet",e)||this}return n.prototype.forwardInput=function(e){var t=this;return K(function(){return qt(t.runNet(e))})},n.prototype.forward=function(e){return J(this,void 0,void 0,function(){var t;return Q(this,function(o){switch(o.label){case 0:return t=this.forwardInput,[4,Ve(e)];case 1:return[2,t.apply(this,[o.sent()])]}})})},n.prototype.predictExpressions=function(e){return J(this,void 0,void 0,function(){var t,o,a,i,s=this;return Q(this,function(u){switch(u.label){case 0:return[4,Ve(e)];case 1:return t=u.sent(),[4,this.forwardInput(t)];case 2:return o=u.sent(),[4,Promise.all(Me(o).map(function(c){return J(s,void 0,void 0,function(){var l;return Q(this,function(h){switch(h.label){case 0:return[4,c.data()];case 1:return l=h.sent(),c.dispose(),[2,l]}})})}))];case 3:return a=u.sent(),o.dispose(),i=a.map(function(c){return new cg(c)}),[2,t.isBatchInput?i:i[0]]}})})},n.prototype.getDefaultModelName=function(){return"face_expression_model"},n.prototype.getClassifierChannelsIn=function(){return 256},n.prototype.getClassifierChannelsOut=function(){return 7},n}(Ic);function kc(r,n){var e={expressions:n};return Object.assign({},r,e)}function Sc(r){return no(r)&&r.landmarks instanceof lr&&r.unshiftedLandmarks instanceof lr&&r.alignedRect instanceof ht}function wo(r,n){var e=r.detection.box,t=n.shiftBy(e.x,e.y),o=t.align(),a=r.detection.imageDims,i=new ht(r.detection.score,o.rescale(a.reverse()),a),s={landmarks:t,unshiftedLandmarks:n,alignedRect:i};return Object.assign({},r,s)}function hg(r,n){var e=bo(r,n),t=li(r,n);function o(i,s,u){var c=t(i,s,u+"/separable_conv0"),l=t(s,s,u+"/separable_conv1"),h=e(i,s,1,u+"/expansion_conv");return{separable_conv0:c,separable_conv1:l,expansion_conv:h}}function a(i,s){var u=t(i,i,s+"/separable_conv0"),c=t(i,i,s+"/separable_conv1"),l=t(i,i,s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:e,extractSeparableConvParams:t,extractReductionBlockParams:o,extractMainBlockParams:a}}function fg(r,n){var e=[],t=$t(r),o=t.extractWeights,a=t.getRemainingWeights,i=hg(o,e),s=i.extractConvParams,u=i.extractSeparableConvParams,c=i.extractReductionBlockParams,l=i.extractMainBlockParams,h=s(3,32,3,"entry_flow/conv_in"),f=c(32,64,"entry_flow/reduction_block_0"),p=c(64,128,"entry_flow/reduction_block_1"),d={conv_in:h,reduction_block_0:f,reduction_block_1:p},m={};ur(n,0,1).forEach(function(b){m["main_block_"+b]=l(128,"middle_flow/main_block_"+b)});var v=c(128,256,"exit_flow/reduction_block"),g=u(256,512,"exit_flow/separable_conv"),x={reduction_block:v,separable_conv:g};if(a().length!==0)throw new Error("weights remaing after extract: "+a().length);return{paramMappings:e,params:{entry_flow:d,middle_flow:m,exit_flow:x}}}function pg(r,n){var e=ln(r,n),t=Cc(e),o=hi(e);function a(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=t(s+"/expansion_conv");return{separable_conv0:u,separable_conv1:c,expansion_conv:l}}function i(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=o(s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:t,extractSeparableConvParams:o,extractReductionBlockParams:a,extractMainBlockParams:i}}function dg(r,n){var e=[],t=pg(r,e),o=t.extractConvParams,a=t.extractSeparableConvParams,i=t.extractReductionBlockParams,s=t.extractMainBlockParams,u=o("entry_flow/conv_in"),c=i("entry_flow/reduction_block_0"),l=i("entry_flow/reduction_block_1"),h={conv_in:u,reduction_block_0:c,reduction_block_1:l},f={};ur(n,0,1).forEach(function(v){f["main_block_"+v]=s("middle_flow/main_block_"+v)});var p=i("exit_flow/reduction_block"),d=a("exit_flow/separable_conv"),m={reduction_block:p,separable_conv:d};return Yt(r,e),{params:{entry_flow:h,middle_flow:f,exit_flow:m},paramMappings:e}}function Dc(r,n,e){return ue(vt(r,n.filters,e,"same"),n.bias)}function ea(r,n,e){e===void 0&&(e=!0);var t=e?Re(r):r;return t=ct(t,n.separable_conv0,[1,1]),t=ct(Re(t),n.separable_conv1,[1,1]),t=Le(t,[3,3],[2,2],"same"),t=ue(t,Dc(r,n.expansion_conv,[2,2])),t}function vg(r,n){var e=ct(Re(r),n.separable_conv0,[1,1]);return e=ct(Re(e),n.separable_conv1,[1,1]),e=ct(Re(e),n.separable_conv2,[1,1]),e=ue(e,r),e}var mg=function(r){re(n,r);function n(e){var t=r.call(this,"TinyXception")||this;return t._numMainBlocks=e,t}return n.prototype.forwardInput=function(e){var t=this,o=this.params;if(!o)throw new Error("TinyXception - load model before inference");return K(function(){var a=e.toBatchTensor(112,!0),i=[122.782,117.001,104.298],s=br(a,i).div(j(256)),u=Re(Dc(s,o.entry_flow.conv_in,[2,2]));return u=ea(u,o.entry_flow.reduction_block_0,!1),u=ea(u,o.entry_flow.reduction_block_1),ur(t._numMainBlocks,0,1).forEach(function(c){u=vg(u,o.middle_flow["main_block_"+c])}),u=ea(u,o.exit_flow.reduction_block),u=Re(ct(u,o.exit_flow.separable_conv,[1,1])),u})},n.prototype.forward=function(e){return J(this,void 0,void 0,function(){var t;return Q(this,function(o){switch(o.label){case 0:return t=this.forwardInput,[4,Ve(e)];case 1:return[2,t.apply(this,[o.sent()])]}})})},n.prototype.getDefaultModelName=function(){return"tiny_xception_model"},n.prototype.extractParamsFromWeigthMap=function(e){return dg(e,this._numMainBlocks)},n.prototype.extractParams=function(e){return fg(e,this._numMainBlocks)},n}(Xt);function gg(r){var n=[],e=$t(r),t=e.extractWeights,o=e.getRemainingWeights,a=ci(t,n),i=a(512,1,"fc/age"),s=a(512,2,"fc/gender");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:n,params:{fc:{age:i,gender:s}}}}function yg(r){var n=[],e=ln(r,n);function t(a){var i=e(a+"/weights",2),s=e(a+"/bias",1);return{weights:i,bias:s}}var o={fc:{age:t("fc/age"),gender:t("fc/gender")}};return Yt(r,n),{params:o,paramMappings:n}}var oo;(function(r){r.FEMALE="female",r.MALE="male"})(oo||(oo={}));var xg=function(r){re(n,r);function n(e){e===void 0&&(e=new mg(2));var t=r.call(this,"AgeGenderNet")||this;return t._faceFeatureExtractor=e,t}return Object.defineProperty(n.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),n.prototype.runNet=function(e){var t=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return K(function(){var a=e instanceof ro?t.faceFeatureExtractor.forwardInput(e):e,i=yr(a,[7,7],[2,2],"valid").as2D(a.shape[0],-1),s=Dt(i,o.fc.age).as1D(),u=Dt(i,o.fc.gender);return{age:s,gender:u}})},n.prototype.forwardInput=function(e){var t=this;return K(function(){var o=t.runNet(e),a=o.age,i=o.gender;return{age:a,gender:qt(i)}})},n.prototype.forward=function(e){return J(this,void 0,void 0,function(){var t;return Q(this,function(o){switch(o.label){case 0:return t=this.forwardInput,[4,Ve(e)];case 1:return[2,t.apply(this,[o.sent()])]}})})},n.prototype.predictAgeAndGender=function(e){return J(this,void 0,void 0,function(){var t,o,a,i,s,u,c=this;return Q(this,function(l){switch(l.label){case 0:return[4,Ve(e)];case 1:return t=l.sent(),[4,this.forwardInput(t)];case 2:return o=l.sent(),a=Me(o.age),i=Me(o.gender),s=a.map(function(h,f){return{ageTensor:h,genderTensor:i[f]}}),[4,Promise.all(s.map(function(h){var f=h.ageTensor,p=h.genderTensor;return J(c,void 0,void 0,function(){var d,m,v,g,x;return Q(this,function(b){switch(b.label){case 0:return[4,f.data()];case 1:return d=b.sent()[0],[4,p.data()];case 2:return m=b.sent()[0],v=m>.5,g=v?oo.MALE:oo.FEMALE,x=v?m:1-m,f.dispose(),p.dispose(),[2,{age:d,gender:g,genderProbability:x}]}})})}))];case 3:return u=l.sent(),o.age.dispose(),o.gender.dispose(),[2,t.isBatchInput?u:u[0]]}})})},n.prototype.getDefaultModelName=function(){return"age_gender_model"},n.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),r.prototype.dispose.call(this,e)},n.prototype.loadClassifierParams=function(e){var t=this.extractClassifierParams(e),o=t.params,a=t.paramMappings;this._params=o,this._paramMappings=a},n.prototype.extractClassifierParams=function(e){return gg(e)},n.prototype.extractParamsFromWeigthMap=function(e){var t=Rc(e),o=t.featureExtractorMap,a=t.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),yg(a)},n.prototype.extractParams=function(e){var t=1539,o=e.slice(0,e.length-t),a=e.slice(e.length-t);return this.faceFeatureExtractor.extractWeights(o),this.extractClassifierParams(a)},n}(Xt),Ac=function(r){re(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.postProcess=function(e,t,o){var a=o.map(function(s){var u=s.width,c=s.height,l=t/Math.max(c,u);return{width:u*l,height:c*l}}),i=a.length;return K(function(){var s=function(f,p){return lt([Nt([68],f),Nt([68],p)],1).as2D(1,136).as1D()},u=function(f,p){var d=a[f],m=d.width,v=d.height;return p(m,v)?Math.abs(m-v)/2:0},c=function(f){return u(f,function(p,d){return p<d})},l=function(f){return u(f,function(p,d){return d<p})},h=e.mul(Nt([i,136],t)).sub(lt(Array.from(Array(i),function(f,p){return s(c(p),l(p))}))).div(lt(Array.from(Array(i),function(f,p){return s(a[p].width,a[p].height)})));return h})},n.prototype.forwardInput=function(e){var t=this;return K(function(){var o=t.runNet(e);return t.postProcess(o,e.inputSize,e.inputDimensions.map(function(a){var i=a[0],s=a[1];return{height:i,width:s}}))})},n.prototype.forward=function(e){return J(this,void 0,void 0,function(){var t;return Q(this,function(o){switch(o.label){case 0:return t=this.forwardInput,[4,Ve(e)];case 1:return[2,t.apply(this,[o.sent()])]}})})},n.prototype.detectLandmarks=function(e){return J(this,void 0,void 0,function(){var t,o,a,i=this;return Q(this,function(s){switch(s.label){case 0:return[4,Ve(e)];case 1:return t=s.sent(),o=K(function(){return Me(i.forwardInput(t))}),[4,Promise.all(o.map(function(u,c){return J(i,void 0,void 0,function(){var l,h,f,p,d;return Q(this,function(m){switch(m.label){case 0:return f=(h=Array).from,[4,u.data()];case 1:return l=f.apply(h,[m.sent()]),p=l.filter(function(v,g){return bs(g)}),d=l.filter(function(v,g){return!bs(g)}),[2,new jm(Array(68).fill(0).map(function(v,g){return new ge(p[g],d[g])}),{height:t.getInputHeight(c),width:t.getInputWidth(c)})]}})})}))];case 2:return a=s.sent(),o.forEach(function(u){return u.dispose()}),[2,t.isBatchInput?a:a[0]]}})})},n.prototype.getClassifierChannelsOut=function(){return 136},n}(Ic),Tc=function(r){re(n,r);function n(e){return e===void 0&&(e=new Ec),r.call(this,"FaceLandmark68Net",e)||this}return n.prototype.getDefaultModelName=function(){return"face_landmark_68_model"},n.prototype.getClassifierChannelsIn=function(){return 256},n}(Ac);function bg(r){var n=[],e=_c(r,n).extractDenseBlock3Params,t={dense0:e("dense0",!0),dense1:e("dense1"),dense2:e("dense2")};return Yt(r,n),{params:t,paramMappings:n}}function wg(r){var n=[],e=$t(r),t=e.extractWeights,o=e.getRemainingWeights,a=wc(t,n).extractDenseBlock3Params,i=a(3,32,"dense0",!0),s=a(32,64,"dense1"),u=a(64,128,"dense2");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:n,params:{dense0:i,dense1:s,dense2:u}}}var Cg=function(r){re(n,r);function n(){return r.call(this,"TinyFaceFeatureExtractor")||this}return n.prototype.forwardInput=function(e){var t=this.params;if(!t)throw new Error("TinyFaceFeatureExtractor - load model before inference");return K(function(){var o=e.toBatchTensor(112,!0),a=[122.782,117.001,104.298],i=br(o,a).div(j(255)),s=Zo(i,t.dense0,!0);return s=Zo(s,t.dense1),s=Zo(s,t.dense2),s=yr(s,[14,14],[2,2],"valid"),s})},n.prototype.forward=function(e){return J(this,void 0,void 0,function(){var t;return Q(this,function(o){switch(o.label){case 0:return t=this.forwardInput,[4,Ve(e)];case 1:return[2,t.apply(this,[o.sent()])]}})})},n.prototype.getDefaultModelName=function(){return"face_feature_extractor_tiny_model"},n.prototype.extractParamsFromWeigthMap=function(e){return bg(e)},n.prototype.extractParams=function(e){return wg(e)},n}(Xt),_g=function(r){re(n,r);function n(e){return e===void 0&&(e=new Cg),r.call(this,"FaceLandmark68TinyNet",e)||this}return n.prototype.getDefaultModelName=function(){return"face_landmark_68_tiny_model"},n.prototype.getClassifierChannelsIn=function(){return 128},n}(Ac);(function(r){re(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n})(Tc);function Eg(r,n){return ue(Je(r,n.weights),n.biases)}function fi(r,n,e,t,o){o===void 0&&(o="same");var a=n.conv,i=a.filters,s=a.bias,u=vt(r,i,e,o);return u=ue(u,s),u=Eg(u,n.scale),t?Re(u):u}function Rg(r,n){return fi(r,n,[1,1],!0)}function Nc(r,n){return fi(r,n,[1,1],!1)}function Fc(r,n){return fi(r,n,[2,2],!0,"valid")}function Ig(r,n){function e(s,u,c){var l=r(s),h=l.length/(u*c*c);if(Om(h))throw new Error("depth has to be an integer: "+h+", weights.length: "+l.length+", numFilters: "+u+", filterSize: "+c);return K(function(){return sn(Qe(l,[u,h,c,c]),[2,3,1,0])})}function t(s,u,c,l){var h=e(s,u,c),f=Te(r(u));return n.push({paramPath:l+"/filters"},{paramPath:l+"/bias"}),{filters:h,bias:f}}function o(s,u){var c=Te(r(s)),l=Te(r(s));return n.push({paramPath:u+"/weights"},{paramPath:u+"/biases"}),{weights:c,biases:l}}function a(s,u,c,l){var h=t(s,u,c,l+"/conv"),f=o(u,l+"/scale");return{conv:h,scale:f}}function i(s,u,c,l,h){h===void 0&&(h=!1);var f=a((h?.5:1)*s,u,c,l+"/conv1"),p=a(s,u,c,l+"/conv2");return{conv1:f,conv2:p}}return{extractConvLayerParams:a,extractResidualLayerParams:i}}function kg(r){var n=$t(r),e=n.extractWeights,t=n.getRemainingWeights,o=[],a=Ig(e,o),i=a.extractConvLayerParams,s=a.extractResidualLayerParams,u=i(4704,32,7,"conv32_down"),c=s(9216,32,3,"conv32_1"),l=s(9216,32,3,"conv32_2"),h=s(9216,32,3,"conv32_3"),f=s(36864,64,3,"conv64_down",!0),p=s(36864,64,3,"conv64_1"),d=s(36864,64,3,"conv64_2"),m=s(36864,64,3,"conv64_3"),v=s(147456,128,3,"conv128_down",!0),g=s(147456,128,3,"conv128_1"),x=s(147456,128,3,"conv128_2"),b=s(589824,256,3,"conv256_down",!0),y=s(589824,256,3,"conv256_1"),w=s(589824,256,3,"conv256_2"),C=s(589824,256,3,"conv256_down_out"),S=K(function(){return sn(rn(e(256*128),[128,256]),[1,0])});if(o.push({paramPath:"fc"}),t().length!==0)throw new Error("weights remaing after extract: "+t().length);var k={conv32_down:u,conv32_1:c,conv32_2:l,conv32_3:h,conv64_down:f,conv64_1:p,conv64_2:d,conv64_3:m,conv128_down:v,conv128_1:g,conv128_2:x,conv256_down:b,conv256_1:y,conv256_2:w,conv256_down_out:C,fc:S};return{params:k,paramMappings:o}}function Sg(r,n){var e=ln(r,n);function t(i){var s=e(i+"/scale/weights",1),u=e(i+"/scale/biases",1);return{weights:s,biases:u}}function o(i){var s=e(i+"/conv/filters",4),u=e(i+"/conv/bias",1),c=t(i);return{conv:{filters:s,bias:u},scale:c}}function a(i){return{conv1:o(i+"/conv1"),conv2:o(i+"/conv2")}}return{extractConvLayerParams:o,extractResidualLayerParams:a}}function Dg(r){var n=[],e=Sg(r,n),t=e.extractConvLayerParams,o=e.extractResidualLayerParams,a=t("conv32_down"),i=o("conv32_1"),s=o("conv32_2"),u=o("conv32_3"),c=o("conv64_down"),l=o("conv64_1"),h=o("conv64_2"),f=o("conv64_3"),p=o("conv128_down"),d=o("conv128_1"),m=o("conv128_2"),v=o("conv256_down"),g=o("conv256_1"),x=o("conv256_2"),b=o("conv256_down_out"),y=r.fc;if(n.push({originalPath:"fc",paramPath:"fc"}),!Pm(y))throw new Error("expected weightMap[fc] to be a Tensor2D, instead have "+y);var w={conv32_down:a,conv32_1:i,conv32_2:s,conv32_3:u,conv64_down:c,conv64_1:l,conv64_2:h,conv64_3:f,conv128_down:p,conv128_1:d,conv128_2:m,conv256_down:v,conv256_1:g,conv256_2:x,conv256_down_out:b,fc:y};return Yt(r,n),{params:w,paramMappings:n}}function Et(r,n){var e=Rg(r,n.conv1);return e=Nc(e,n.conv2),e=ue(e,r),e=Re(e),e}function Fr(r,n){var e=Fc(r,n.conv1);e=Nc(e,n.conv2);var t=yr(r,2,2,"valid"),o=we(t.shape),a=t.shape[3]!==e.shape[3],i=t.shape[1]!==e.shape[1]||t.shape[2]!==e.shape[2];if(i){var s=nr(e.shape);s[1]=1;var u=we(s);e=Fe([e,u],1);var c=nr(e.shape);c[2]=1;var l=we(c);e=Fe([e,l],2)}return t=a?Fe([t,o],3):t,e=ue(t,e),e=Re(e),e}var Ag=function(r){re(n,r);function n(){return r.call(this,"FaceRecognitionNet")||this}return n.prototype.forwardInput=function(e){var t=this.params;if(!t)throw new Error("FaceRecognitionNet - load model before inference");return K(function(){var o=e.toBatchTensor(150,!0).toFloat(),a=[122.782,117.001,104.298],i=br(o,a).div(j(256)),s=Fc(i,t.conv32_down);s=Le(s,3,2,"valid"),s=Et(s,t.conv32_1),s=Et(s,t.conv32_2),s=Et(s,t.conv32_3),s=Fr(s,t.conv64_down),s=Et(s,t.conv64_1),s=Et(s,t.conv64_2),s=Et(s,t.conv64_3),s=Fr(s,t.conv128_down),s=Et(s,t.conv128_1),s=Et(s,t.conv128_2),s=Fr(s,t.conv256_down),s=Et(s,t.conv256_1),s=Et(s,t.conv256_2),s=Fr(s,t.conv256_down_out);var u=s.mean([1,2]),c=fo(u,t.fc);return c})},n.prototype.forward=function(e){return J(this,void 0,void 0,function(){var t;return Q(this,function(o){switch(o.label){case 0:return t=this.forwardInput,[4,Ve(e)];case 1:return[2,t.apply(this,[o.sent()])]}})})},n.prototype.computeFaceDescriptor=function(e){return J(this,void 0,void 0,function(){var t,o,a,i=this;return Q(this,function(s){switch(s.label){case 0:return[4,Ve(e)];case 1:return t=s.sent(),o=K(function(){return Me(i.forwardInput(t))}),[4,Promise.all(o.map(function(u){return u.data()}))];case 2:return a=s.sent(),o.forEach(function(u){return u.dispose()}),[2,t.isBatchInput?a:a[0]]}})})},n.prototype.getDefaultModelName=function(){return"face_recognition_model"},n.prototype.extractParamsFromWeigthMap=function(e){return Dg(e)},n.prototype.extractParams=function(e){return kg(e)},n}(Xt);function Mc(r,n){var e={descriptor:n};return Object.assign({},r,e)}function Pc(r,n){var e={age:n};return Object.assign({},r,e)}function Oc(r,n,e){var t={gender:n,genderProbability:e};return Object.assign({},r,t)}var Bc=function(){function r(n){var e=n===void 0?{}:n,t=e.minFaceSize,o=e.scaleFactor,a=e.maxNumScales,i=e.scoreThresholds,s=e.scaleSteps;if(this._name="MtcnnOptions",this._minFaceSize=t||20,this._scaleFactor=o||.709,this._maxNumScales=a||10,this._scoreThresholds=i||[.6,.7,.7],this._scaleSteps=s,typeof this._minFaceSize!="number"||this._minFaceSize<0)throw new Error(this._name+" - expected minFaceSize to be a number > 0");if(typeof this._scaleFactor!="number"||this._scaleFactor<=0||this._scaleFactor>=1)throw new Error(this._name+" - expected scaleFactor to be a number between 0 and 1");if(typeof this._maxNumScales!="number"||this._maxNumScales<0)throw new Error(this._name+" - expected maxNumScales to be a number > 0");if(!Array.isArray(this._scoreThresholds)||this._scoreThresholds.length!==3||this._scoreThresholds.some(function(u){return typeof u!="number"}))throw new Error(this._name+" - expected scoreThresholds to be an array of numbers of length 3");if(this._scaleSteps&&(!Array.isArray(this._scaleSteps)||this._scaleSteps.some(function(u){return typeof u!="number"})))throw new Error(this._name+" - expected scaleSteps to be an array of numbers")}return Object.defineProperty(r.prototype,"minFaceSize",{get:function(){return this._minFaceSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scaleFactor",{get:function(){return this._scaleFactor},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"maxNumScales",{get:function(){return this._maxNumScales},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scoreThresholds",{get:function(){return this._scoreThresholds},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scaleSteps",{get:function(){return this._scaleSteps},enumerable:!0,configurable:!0}),r}();function Tg(r,n){function e(u,c){var l=Qe(r(9*u),[3,3,u,1]),h=Te(r(u)),f=Te(r(u)),p=Te(r(u)),d=Te(r(u));return n.push({paramPath:c+"/filters"},{paramPath:c+"/batch_norm_scale"},{paramPath:c+"/batch_norm_offset"},{paramPath:c+"/batch_norm_mean"},{paramPath:c+"/batch_norm_variance"}),{filters:l,batch_norm_scale:h,batch_norm_offset:f,batch_norm_mean:p,batch_norm_variance:d}}function t(u,c,l,h,f){var p=Qe(r(u*c*l*l),[l,l,u,c]),d=Te(r(c));return n.push({paramPath:h+"/filters"},{paramPath:h+"/"+(f?"batch_norm_offset":"bias")}),{filters:p,bias:d}}function o(u,c,l,h){var f=t(u,c,l,h,!0),p=f.filters,d=f.bias;return{filters:p,batch_norm_offset:d}}function a(u,c,l){var h=e(u,l+"/depthwise_conv"),f=o(u,c,1,l+"/pointwise_conv");return{depthwise_conv:h,pointwise_conv:f}}function i(){var u=o(3,32,3,"mobilenetv1/conv_0"),c=a(32,64,"mobilenetv1/conv_1"),l=a(64,128,"mobilenetv1/conv_2"),h=a(128,128,"mobilenetv1/conv_3"),f=a(128,256,"mobilenetv1/conv_4"),p=a(256,256,"mobilenetv1/conv_5"),d=a(256,512,"mobilenetv1/conv_6"),m=a(512,512,"mobilenetv1/conv_7"),v=a(512,512,"mobilenetv1/conv_8"),g=a(512,512,"mobilenetv1/conv_9"),x=a(512,512,"mobilenetv1/conv_10"),b=a(512,512,"mobilenetv1/conv_11"),y=a(512,1024,"mobilenetv1/conv_12"),w=a(1024,1024,"mobilenetv1/conv_13");return{conv_0:u,conv_1:c,conv_2:l,conv_3:h,conv_4:f,conv_5:p,conv_6:d,conv_7:m,conv_8:v,conv_9:g,conv_10:x,conv_11:b,conv_12:y,conv_13:w}}function s(){var u=o(1024,256,1,"prediction_layer/conv_0"),c=o(256,512,3,"prediction_layer/conv_1"),l=o(512,128,1,"prediction_layer/conv_2"),h=o(128,256,3,"prediction_layer/conv_3"),f=o(256,128,1,"prediction_layer/conv_4"),p=o(128,256,3,"prediction_layer/conv_5"),d=o(256,64,1,"prediction_layer/conv_6"),m=o(64,128,3,"prediction_layer/conv_7"),v=t(512,12,1,"prediction_layer/box_predictor_0/box_encoding_predictor"),g=t(512,9,1,"prediction_layer/box_predictor_0/class_predictor"),x=t(1024,24,1,"prediction_layer/box_predictor_1/box_encoding_predictor"),b=t(1024,18,1,"prediction_layer/box_predictor_1/class_predictor"),y=t(512,24,1,"prediction_layer/box_predictor_2/box_encoding_predictor"),w=t(512,18,1,"prediction_layer/box_predictor_2/class_predictor"),C=t(256,24,1,"prediction_layer/box_predictor_3/box_encoding_predictor"),S=t(256,18,1,"prediction_layer/box_predictor_3/class_predictor"),k=t(256,24,1,"prediction_layer/box_predictor_4/box_encoding_predictor"),R=t(256,18,1,"prediction_layer/box_predictor_4/class_predictor"),I=t(128,24,1,"prediction_layer/box_predictor_5/box_encoding_predictor"),N=t(128,18,1,"prediction_layer/box_predictor_5/class_predictor"),A={box_encoding_predictor:v,class_predictor:g},L={box_encoding_predictor:x,class_predictor:b},O={box_encoding_predictor:y,class_predictor:w},B={box_encoding_predictor:C,class_predictor:S},U={box_encoding_predictor:k,class_predictor:R},V={box_encoding_predictor:I,class_predictor:N};return{conv_0:u,conv_1:c,conv_2:l,conv_3:h,conv_4:f,conv_5:p,conv_6:d,conv_7:m,box_predictor_0:A,box_predictor_1:L,box_predictor_2:O,box_predictor_3:B,box_predictor_4:U,box_predictor_5:V}}return{extractMobilenetV1Params:i,extractPredictionLayerParams:s}}function Ng(r){var n=[],e=$t(r),t=e.extractWeights,o=e.getRemainingWeights,a=Tg(t,n),i=a.extractMobilenetV1Params,s=a.extractPredictionLayerParams,u=i(),c=s(),l=Sa(t(5118*4),[1,5118,4]),h={extra_dim:l};if(n.push({paramPath:"output_layer/extra_dim"}),o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{params:{mobilenetv1:u,prediction_layer:c,output_layer:h},paramMappings:n}}function Fg(r,n){var e=ln(r,n);function t(c,l,h){var f=e(c+"/Conv2d_"+l+"_pointwise/weights",4,h+"/filters"),p=e(c+"/Conv2d_"+l+"_pointwise/convolution_bn_offset",1,h+"/batch_norm_offset");return{filters:f,batch_norm_offset:p}}function o(c){var l="mobilenetv1/conv_"+c,h="MobilenetV1/Conv2d_"+c+"_depthwise",f=l+"/depthwise_conv",p=l+"/pointwise_conv",d=e(h+"/depthwise_weights",4,f+"/filters"),m=e(h+"/BatchNorm/gamma",1,f+"/batch_norm_scale"),v=e(h+"/BatchNorm/beta",1,f+"/batch_norm_offset"),g=e(h+"/BatchNorm/moving_mean",1,f+"/batch_norm_mean"),x=e(h+"/BatchNorm/moving_variance",1,f+"/batch_norm_variance");return{depthwise_conv:{filters:d,batch_norm_scale:m,batch_norm_offset:v,batch_norm_mean:g,batch_norm_variance:x},pointwise_conv:t("MobilenetV1",c,p)}}function a(){return{conv_0:t("MobilenetV1",0,"mobilenetv1/conv_0"),conv_1:o(1),conv_2:o(2),conv_3:o(3),conv_4:o(4),conv_5:o(5),conv_6:o(6),conv_7:o(7),conv_8:o(8),conv_9:o(9),conv_10:o(10),conv_11:o(11),conv_12:o(12),conv_13:o(13)}}function i(c,l){var h=e(c+"/weights",4,l+"/filters"),f=e(c+"/biases",1,l+"/bias");return{filters:h,bias:f}}function s(c){var l=i("Prediction/BoxPredictor_"+c+"/BoxEncodingPredictor","prediction_layer/box_predictor_"+c+"/box_encoding_predictor"),h=i("Prediction/BoxPredictor_"+c+"/ClassPredictor","prediction_layer/box_predictor_"+c+"/class_predictor");return{box_encoding_predictor:l,class_predictor:h}}function u(){return{conv_0:t("Prediction",0,"prediction_layer/conv_0"),conv_1:t("Prediction",1,"prediction_layer/conv_1"),conv_2:t("Prediction",2,"prediction_layer/conv_2"),conv_3:t("Prediction",3,"prediction_layer/conv_3"),conv_4:t("Prediction",4,"prediction_layer/conv_4"),conv_5:t("Prediction",5,"prediction_layer/conv_5"),conv_6:t("Prediction",6,"prediction_layer/conv_6"),conv_7:t("Prediction",7,"prediction_layer/conv_7"),box_predictor_0:s(0),box_predictor_1:s(1),box_predictor_2:s(2),box_predictor_3:s(3),box_predictor_4:s(4),box_predictor_5:s(5)}}return{extractMobilenetV1Params:a,extractPredictionLayerParams:u}}function Mg(r){var n=[],e=Fg(r,n),t=e.extractMobilenetV1Params,o=e.extractPredictionLayerParams,a=r["Output/extra_dim"];if(n.push({originalPath:"Output/extra_dim",paramPath:"output_layer/extra_dim"}),!go(a))throw new Error("expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have "+a);var i={mobilenetv1:t(),prediction_layer:o(),output_layer:{extra_dim:a}};return Yt(r,n),{params:i,paramMappings:n}}function Rt(r,n,e){return K(function(){var t=vt(r,n.filters,e,"same");return t=ue(t,n.batch_norm_offset),Wa(t,0,6)})}var Pg=.0010000000474974513;function Og(r,n,e){return K(function(){var t=ho(r,n.filters,e,"same");return t=Su(t,n.batch_norm_mean,n.batch_norm_variance,n.batch_norm_offset,n.batch_norm_scale,Pg),Wa(t,0,6)})}function Bg(r){return[2,4,6,12].some(function(n){return n===r})?[2,2]:[1,1]}function Lg(r,n){return K(function(){var e=null,t=Rt(r,n.conv_0,[2,2]),o=[n.conv_1,n.conv_2,n.conv_3,n.conv_4,n.conv_5,n.conv_6,n.conv_7,n.conv_8,n.conv_9,n.conv_10,n.conv_11,n.conv_12,n.conv_13];if(o.forEach(function(a,i){var s=i+1,u=Bg(s);t=Og(t,a.depthwise_conv,u),t=Rt(t,a.pointwise_conv,[1,1]),s===11&&(e=t)}),e===null)throw new Error("mobileNetV1 - output of conv layer 11 is null");return{out:t,conv11:e}})}function Wg(r,n,e,t,o){var a=r.shape[0],i=Math.min(e,a),s=n.map(function(l,h){return{score:l,boxIndex:h}}).filter(function(l){return l.score>o}).sort(function(l,h){return h.score-l.score}),u=function(l){return l<=t?1:0},c=[];return s.forEach(function(l){if(!(c.length>=i)){for(var h=l.score,f=c.length-1;f>=0;--f){var p=Vg(r,l.boxIndex,c[f]);if(p!==0&&(l.score*=u(p),l.score<=o))break}h===l.score&&c.push(l.boxIndex)}}),c}function Vg(r,n,e){var t=r.arraySync(),o=Math.min(t[n][0],t[n][2]),a=Math.min(t[n][1],t[n][3]),i=Math.max(t[n][0],t[n][2]),s=Math.max(t[n][1],t[n][3]),u=Math.min(t[e][0],t[e][2]),c=Math.min(t[e][1],t[e][3]),l=Math.max(t[e][0],t[e][2]),h=Math.max(t[e][1],t[e][3]),f=(i-o)*(s-a),p=(l-u)*(h-c);if(f<=0||p<=0)return 0;var d=Math.max(o,u),m=Math.max(a,c),v=Math.min(i,l),g=Math.min(s,h),x=Math.max(v-d,0)*Math.max(g-m,0);return x/(f+p-x)}function Ug(r){var n=Me(sn(r,[1,0])),e=[Oe(n[2],n[0]),Oe(n[3],n[1])],t=[ue(n[0],mt(e[0],j(2))),ue(n[1],mt(e[1],j(2)))];return{sizes:e,centers:t}}function zg(r,n){var e=Ug(r),t=e.sizes,o=e.centers,a=Me(sn(n,[1,0])),i=mt(Je(va(mt(a[2],j(5))),t[0]),j(2)),s=ue(Je(mt(a[0],j(10)),t[0]),o[0]),u=mt(Je(va(mt(a[3],j(5))),t[1]),j(2)),c=ue(Je(mt(a[1],j(10)),t[1]),o[1]);return sn(lt([Oe(s,i),Oe(c,u),ue(s,i),ue(c,u)]),[1,0])}function Gg(r,n,e){return K(function(){var t=r.shape[0],o=zg(gt(Bn(e.extra_dim,[t,1,1]),[-1,4]),gt(r,[-1,4]));o=gt(o,[t,o.shape[0]/t,4]);var a=Eu(Ft(n,[0,0,1],[-1,-1,-1])),i=Ft(a,[0,0,0],[-1,-1,1]);i=gt(i,[t,i.shape[1]]);var s=Me(o),u=Me(i);return{boxes:s,scores:u}})}function Tn(r,n){return K(function(){var e=r.shape[0],t=gt(yt(r,n.box_encoding_predictor),[e,-1,1,4]),o=gt(yt(r,n.class_predictor),[e,-1,3]);return{boxPredictionEncoding:t,classPrediction:o}})}function Hg(r,n,e){return K(function(){var t=Rt(r,e.conv_0,[1,1]),o=Rt(t,e.conv_1,[2,2]),a=Rt(o,e.conv_2,[1,1]),i=Rt(a,e.conv_3,[2,2]),s=Rt(i,e.conv_4,[1,1]),u=Rt(s,e.conv_5,[2,2]),c=Rt(u,e.conv_6,[1,1]),l=Rt(c,e.conv_7,[2,2]),h=Tn(n,e.box_predictor_0),f=Tn(r,e.box_predictor_1),p=Tn(o,e.box_predictor_2),d=Tn(i,e.box_predictor_3),m=Tn(u,e.box_predictor_4),v=Tn(l,e.box_predictor_5),g=Fe([h.boxPredictionEncoding,f.boxPredictionEncoding,p.boxPredictionEncoding,d.boxPredictionEncoding,m.boxPredictionEncoding,v.boxPredictionEncoding],1),x=Fe([h.classPrediction,f.classPrediction,p.classPrediction,d.classPrediction,m.classPrediction,v.classPrediction],1);return{boxPredictions:g,classPredictions:x}})}var wr=function(){function r(n){var e=n===void 0?{}:n,t=e.minConfidence,o=e.maxResults;if(this._name="SsdMobilenetv1Options",this._minConfidence=t||.5,this._maxResults=o||100,typeof this._minConfidence!="number"||this._minConfidence<=0||this._minConfidence>=1)throw new Error(this._name+" - expected minConfidence to be a number between 0 and 1");if(typeof this._maxResults!="number")throw new Error(this._name+" - expected maxResults to be a number")}return Object.defineProperty(r.prototype,"minConfidence",{get:function(){return this._minConfidence},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"maxResults",{get:function(){return this._maxResults},enumerable:!0,configurable:!0}),r}(),Lc=function(r){re(n,r);function n(){return r.call(this,"SsdMobilenetv1")||this}return n.prototype.forwardInput=function(e){var t=this.params;if(!t)throw new Error("SsdMobilenetv1 - load model before inference");return K(function(){var o=e.toBatchTensor(512,!1).toFloat(),a=Oe(Je(o,j(.007843137718737125)),j(1)),i=Lg(a,t.mobilenetv1),s=Hg(i.out,i.conv11,t.prediction_layer),u=s.boxPredictions,c=s.classPredictions;return Gg(u,c,t.output_layer)})},n.prototype.forward=function(e){return J(this,void 0,void 0,function(){var t;return Q(this,function(o){switch(o.label){case 0:return t=this.forwardInput,[4,Ve(e)];case 1:return[2,t.apply(this,[o.sent()])]}})})},n.prototype.locateFaces=function(e,t){return t===void 0&&(t={}),J(this,void 0,void 0,function(){var o,a,i,s,u,c,l,h,f,p,d,m,v,g,x,b,y,w,C,S,k;return Q(this,function(R){switch(R.label){case 0:return o=new wr(t),a=o.maxResults,i=o.minConfidence,[4,Ve(e)];case 1:for(s=R.sent(),u=this.forwardInput(s),c=u.boxes,l=u.scores,h=c[0],f=l[0],p=1;p<c.length;p++)c[p].dispose(),l[p].dispose();return v=(m=Array).from,[4,f.data()];case 2:return d=v.apply(m,[R.sent()]),g=.5,x=Wg(h,d,a,g,i),b=s.getReshapedInputDimensions(0),y=s.inputSize,w=y/b.width,C=y/b.height,S=h.arraySync(),k=x.map(function(I){var N=[Math.max(0,S[I][0]),Math.min(1,S[I][2])].map(function(V){return V*C}),A=N[0],L=N[1],O=[Math.max(0,S[I][1]),Math.min(1,S[I][3])].map(function(V){return V*w}),B=O[0],U=O[1];return new ht(d[I],new ni(B,A,U-B,L-A),{height:s.getInputHeight(0),width:s.getInputWidth(0)})}),h.dispose(),f.dispose(),[2,k]}})})},n.prototype.getDefaultModelName=function(){return"ssd_mobilenetv1_model"},n.prototype.extractParamsFromWeigthMap=function(e){return Mg(e)},n.prototype.extractParams=function(e){return Ng(e)},n}(Xt);(function(r){re(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n})(Lc);var jg=.4,qg=[new ge(.738768,.874946),new ge(2.42204,2.65704),new ge(4.30971,7.04493),new ge(10.246,4.59428),new ge(12.6868,11.8741)],Kg=[new ge(1.603231,2.094468),new ge(6.041143,7.080126),new ge(2.882459,3.518061),new ge(4.266906,5.178857),new ge(9.041765,10.66308)],Xg=[117.001,114.697,97.404],Yg="tiny_yolov2_model",$g="tiny_yolov2_separable_conv_model",Mr=function(r){return typeof r=="number"};function Jg(r){if(!r)throw new Error("invalid config: "+r);if(typeof r.withSeparableConvs!="boolean")throw new Error("config.withSeparableConvs has to be a boolean, have: "+r.withSeparableConvs);if(!Mr(r.iouThreshold)||r.iouThreshold<0||r.iouThreshold>1)throw new Error("config.iouThreshold has to be a number between [0, 1], have: "+r.iouThreshold);if(!Array.isArray(r.classes)||!r.classes.length||!r.classes.every(function(n){return typeof n=="string"}))throw new Error("config.classes has to be an array class names: string[], have: "+JSON.stringify(r.classes));if(!Array.isArray(r.anchors)||!r.anchors.length||!r.anchors.map(function(n){return n||{}}).every(function(n){return Mr(n.x)&&Mr(n.y)}))throw new Error("config.anchors has to be an array of { x: number, y: number }, have: "+JSON.stringify(r.anchors));if(r.meanRgb&&(!Array.isArray(r.meanRgb)||r.meanRgb.length!==3||!r.meanRgb.every(Mr)))throw new Error("config.meanRgb has to be an array of shape [number, number, number], have: "+JSON.stringify(r.meanRgb))}function pi(r){return K(function(){var n=Je(r,j(.10000000149011612));return ue(Re(Oe(r,n)),n)})}function Qt(r,n){return K(function(){var e=wn(r,[[0,0],[1,1],[1,1],[0,0]]);return e=vt(e,n.conv.filters,[1,1],"valid"),e=Oe(e,n.bn.sub),e=Je(e,n.bn.truediv),e=ue(e,n.conv.bias),pi(e)})}function Zt(r,n){return K(function(){var e=wn(r,[[0,0],[1,1],[1,1],[0,0]]);return e=Ga(e,n.depthwise_filter,n.pointwise_filter,[1,1],"valid"),e=ue(e,n.bias),pi(e)})}function Qg(r,n){var e=bo(r,n);function t(i,s){var u=Te(r(i)),c=Te(r(i));return n.push({paramPath:s+"/sub"},{paramPath:s+"/truediv"}),{sub:u,truediv:c}}function o(i,s,u){var c=e(i,s,3,u+"/conv"),l=t(s,u+"/bn");return{conv:c,bn:l}}var a=li(r,n);return{extractConvParams:e,extractConvWithBatchNormParams:o,extractSeparableConvParams:a}}function Zg(r,n,e,t){var o=$t(r),a=o.extractWeights,i=o.getRemainingWeights,s=[],u=Qg(a,s),c=u.extractConvParams,l=u.extractConvWithBatchNormParams,h=u.extractSeparableConvParams,f;if(n.withSeparableConvs){var p=t[0],d=t[1],m=t[2],v=t[3],g=t[4],x=t[5],b=t[6],y=t[7],w=t[8],C=n.isFirstLayerConv2d?c(p,d,3,"conv0"):h(p,d,"conv0"),S=h(d,m,"conv1"),k=h(m,v,"conv2"),R=h(v,g,"conv3"),I=h(g,x,"conv4"),N=h(x,b,"conv5"),A=y?h(b,y,"conv6"):void 0,L=w?h(y,w,"conv7"):void 0,O=c(w||y||b,5*e,1,"conv8");f={conv0:C,conv1:S,conv2:k,conv3:R,conv4:I,conv5:N,conv6:A,conv7:L,conv8:O}}else{var p=t[0],d=t[1],m=t[2],v=t[3],g=t[4],x=t[5],b=t[6],y=t[7],w=t[8],C=l(p,d,"conv0"),S=l(d,m,"conv1"),k=l(m,v,"conv2"),R=l(v,g,"conv3"),I=l(g,x,"conv4"),N=l(x,b,"conv5"),A=l(b,y,"conv6"),L=l(y,w,"conv7"),O=c(w,5*e,1,"conv8");f={conv0:C,conv1:S,conv2:k,conv3:R,conv4:I,conv5:N,conv6:A,conv7:L,conv8:O}}if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{params:f,paramMappings:s}}function e0(r,n){var e=ln(r,n);function t(s){var u=e(s+"/sub",1),c=e(s+"/truediv",1);return{sub:u,truediv:c}}function o(s){var u=e(s+"/filters",4),c=e(s+"/bias",1);return{filters:u,bias:c}}function a(s){var u=o(s+"/conv"),c=t(s+"/bn");return{conv:u,bn:c}}var i=hi(e);return{extractConvParams:o,extractConvWithBatchNormParams:a,extractSeparableConvParams:i}}function t0(r,n){var e=[],t=e0(r,e),o=t.extractConvParams,a=t.extractConvWithBatchNormParams,i=t.extractSeparableConvParams,s;if(n.withSeparableConvs){var u=n.filterSizes&&n.filterSizes.length||9;s={conv0:n.isFirstLayerConv2d?o("conv0"):i("conv0"),conv1:i("conv1"),conv2:i("conv2"),conv3:i("conv3"),conv4:i("conv4"),conv5:i("conv5"),conv6:u>7?i("conv6"):void 0,conv7:u>8?i("conv7"):void 0,conv8:o("conv8")}}else s={conv0:a("conv0"),conv1:a("conv1"),conv2:a("conv2"),conv3:a("conv3"),conv4:a("conv4"),conv5:a("conv5"),conv6:a("conv6"),conv7:a("conv7"),conv8:o("conv8")};return Yt(r,e),{params:s,paramMappings:e}}var ks;(function(r){r[r.XS=224]="XS",r[r.SM=320]="SM",r[r.MD=416]="MD",r[r.LG=608]="LG"})(ks||(ks={}));var di=function(){function r(n){var e=n===void 0?{}:n,t=e.inputSize,o=e.scoreThreshold;if(this._name="TinyYolov2Options",this._inputSize=t||416,this._scoreThreshold=o||.5,typeof this._inputSize!="number"||this._inputSize%32!==0)throw new Error(this._name+" - expected inputSize to be a number divisible by 32");if(typeof this._scoreThreshold!="number"||this._scoreThreshold<=0||this._scoreThreshold>=1)throw new Error(this._name+" - expected scoreThreshold to be a number between 0 and 1")}return Object.defineProperty(r.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scoreThreshold",{get:function(){return this._scoreThreshold},enumerable:!0,configurable:!0}),r}(),Wc=function(r){re(n,r);function n(e){var t=r.call(this,"TinyYolov2")||this;return Jg(e),t._config=e,t}return Object.defineProperty(n.prototype,"config",{get:function(){return this._config},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"withClassScores",{get:function(){return this.config.withClassScores||this.config.classes.length>1},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"boxEncodingSize",{get:function(){return 5+(this.withClassScores?this.config.classes.length:0)},enumerable:!0,configurable:!0}),n.prototype.runTinyYolov2=function(e,t){var o=Qt(e,t.conv0);return o=Le(o,[2,2],[2,2],"same"),o=Qt(o,t.conv1),o=Le(o,[2,2],[2,2],"same"),o=Qt(o,t.conv2),o=Le(o,[2,2],[2,2],"same"),o=Qt(o,t.conv3),o=Le(o,[2,2],[2,2],"same"),o=Qt(o,t.conv4),o=Le(o,[2,2],[2,2],"same"),o=Qt(o,t.conv5),o=Le(o,[2,2],[1,1],"same"),o=Qt(o,t.conv6),o=Qt(o,t.conv7),yt(o,t.conv8,"valid",!1)},n.prototype.runMobilenet=function(e,t){var o=this.config.isFirstLayerConv2d?pi(yt(e,t.conv0,"valid",!1)):Zt(e,t.conv0);return o=Le(o,[2,2],[2,2],"same"),o=Zt(o,t.conv1),o=Le(o,[2,2],[2,2],"same"),o=Zt(o,t.conv2),o=Le(o,[2,2],[2,2],"same"),o=Zt(o,t.conv3),o=Le(o,[2,2],[2,2],"same"),o=Zt(o,t.conv4),o=Le(o,[2,2],[2,2],"same"),o=Zt(o,t.conv5),o=Le(o,[2,2],[1,1],"same"),o=t.conv6?Zt(o,t.conv6):o,o=t.conv7?Zt(o,t.conv7):o,yt(o,t.conv8,"valid",!1)},n.prototype.forwardInput=function(e,t){var o=this,a=this.params;if(!a)throw new Error("TinyYolov2 - load model before inference");return K(function(){var i=e.toBatchTensor(t,!1).toFloat();return i=o.config.meanRgb?br(i,o.config.meanRgb):i,i=i.div(j(256)),o.config.withSeparableConvs?o.runMobilenet(i,a):o.runTinyYolov2(i,a)})},n.prototype.forward=function(e,t){return J(this,void 0,void 0,function(){var o;return Q(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,Ve(e)];case 1:return[4,o.apply(this,[a.sent(),t])];case 2:return[2,a.sent()]}})})},n.prototype.detect=function(e,t){return t===void 0&&(t={}),J(this,void 0,void 0,function(){var o,a,i,s,u,c,l,h,f,p,d,m,v,g,x=this;return Q(this,function(b){switch(b.label){case 0:return o=new di(t),a=o.inputSize,i=o.scoreThreshold,[4,Ve(e)];case 1:return s=b.sent(),[4,this.forwardInput(s,a)];case 2:return u=b.sent(),c=K(function(){return Me(u)[0].expandDims()}),l={width:s.getInputWidth(0),height:s.getInputHeight(0)},[4,this.extractBoxes(c,s.getReshapedInputDimensions(0),i)];case 3:return h=b.sent(),u.dispose(),c.dispose(),f=h.map(function(y){return y.box}),p=h.map(function(y){return y.score}),d=h.map(function(y){return y.classScore}),m=h.map(function(y){return x.config.classes[y.label]}),v=cr(f.map(function(y){return y.rescale(a)}),p,this.config.iouThreshold,!0),g=v.map(function(y){return new cc(p[y],d[y],m[y],f[y],l)}),[2,g]}})})},n.prototype.getDefaultModelName=function(){return""},n.prototype.extractParamsFromWeigthMap=function(e){return t0(e,this.config)},n.prototype.extractParams=function(e){var t=this.config.filterSizes||n.DEFAULT_FILTER_SIZES,o=t?t.length:void 0;if(o!==7&&o!==8&&o!==9)throw new Error("TinyYolov2 - expected 7 | 8 | 9 convolutional filters, but found "+o+" filterSizes in config");return Zg(e,this.config,this.boxEncodingSize,t)},n.prototype.extractBoxes=function(e,t,o){return J(this,void 0,void 0,function(){var a,i,s,u,c,l,h,f,p,d,m,v,g,x,b,y,w,C,S,k,R,I,N,A,L,O,B,U,V,W=this;return Q(this,function(G){switch(G.label){case 0:return a=t.width,i=t.height,s=Math.max(a,i),u=s/a,c=s/i,l=e.shape[1],h=this.config.anchors.length,f=K(function(){var H=e.reshape([l,l,h,W.boxEncodingSize]),q=H.slice([0,0,0,0],[l,l,h,4]),ee=H.slice([0,0,0,4],[l,l,h,1]),te=W.withClassScores?qt(H.slice([0,0,0,5],[l,l,h,W.config.classes.length]),3):j(0);return[q,ee,te]}),p=f[0],d=f[1],m=f[2],v=[],[4,d.array()];case 1:return g=G.sent(),[4,p.array()];case 2:x=G.sent(),b=0,G.label=3;case 3:if(!(b<l))return[3,12];y=0,G.label=4;case 4:if(!(y<l))return[3,11];w=0,G.label=5;case 5:return w<h?(C=Qo(g[b][y][w][0]),!o||C>o?(S=(y+Qo(x[b][y][w][0]))/l*u,k=(b+Qo(x[b][y][w][1]))/l*c,R=Math.exp(x[b][y][w][2])*this.config.anchors[w].x/l*u,I=Math.exp(x[b][y][w][3])*this.config.anchors[w].y/l*c,N=S-R/2,A=k-I/2,L={row:b,col:y,anchor:w},this.withClassScores?[4,this.extractPredictedClass(m,L)]:[3,7]):[3,9]):[3,10];case 6:return V=G.sent(),[3,8];case 7:V={classScore:1,label:0},G.label=8;case 8:O=V,B=O.classScore,U=O.label,v.push(Xe({box:new yo(N,A,N+R,A+I),score:C,classScore:C*B,label:U},L)),G.label=9;case 9:return w++,[3,5];case 10:return y++,[3,4];case 11:return b++,[3,3];case 12:return p.dispose(),d.dispose(),m.dispose(),[2,v]}})})},n.prototype.extractPredictedClass=function(e,t){return J(this,void 0,void 0,function(){var o,a,i,s;return Q(this,function(u){switch(u.label){case 0:return o=t.row,a=t.col,i=t.anchor,[4,e.array()];case 1:return s=u.sent(),[2,Array(this.config.classes.length).fill(0).map(function(c,l){return s[o][a][i][l]}).map(function(c,l){return{classScore:c,label:l}}).reduce(function(c,l){return c.classScore>l.classScore?c:l})]}})})},n.DEFAULT_FILTER_SIZES=[3,16,32,64,128,256,512,1024,1024],n}(Xt),n0=function(r){re(n,r);function n(e){e===void 0&&(e=!0);var t=this,o=Object.assign({},{withSeparableConvs:e,iouThreshold:jg,classes:["face"]},e?{anchors:Kg,meanRgb:Xg}:{anchors:qg,withClassScores:!0});return t=r.call(this,o)||this,t}return Object.defineProperty(n.prototype,"withSeparableConvs",{get:function(){return this.config.withSeparableConvs},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),n.prototype.locateFaces=function(e,t){return J(this,void 0,void 0,function(){var o;return Q(this,function(a){switch(a.label){case 0:return[4,this.detect(e,t)];case 1:return o=a.sent(),[2,o.map(function(i){return new ht(i.score,i.relativeBox,{width:i.imageWidth,height:i.imageHeight})})]}})})},n.prototype.getDefaultModelName=function(){return this.withSeparableConvs?$g:Yg},n.prototype.extractParamsFromWeigthMap=function(e){return r.prototype.extractParamsFromWeigthMap.call(this,e)},n}(Wc),Vc=function(r){re(n,r);function n(){var e=r!==null&&r.apply(this,arguments)||this;return e._name="TinyFaceDetectorOptions",e}return n}(di),Cr=function(){function r(){}return r.prototype.then=function(n){return J(this,void 0,void 0,function(){var e;return Q(this,function(t){switch(t.label){case 0:return e=n,[4,this.run()];case 1:return[2,e.apply(void 0,[t.sent()])]}})})},r.prototype.run=function(){return J(this,void 0,void 0,function(){return Q(this,function(n){throw new Error("ComposableTask - run is not implemented")})})},r}();function Co(r,n,e,t,o){return o===void 0&&(o=function(a){var i=a.alignedRect;return i}),J(this,void 0,void 0,function(){var a,i,s,u,c;return Q(this,function(l){switch(l.label){case 0:return a=r.map(function(h){return Sc(h)?o(h):h.detection}),s=t,s?[3,5]:n instanceof Ee?[4,ui(n,a)]:[3,2];case 1:return u=l.sent(),[3,4];case 2:return[4,si(n,a)];case 3:u=l.sent(),l.label=4;case 4:s=u,l.label=5;case 5:return i=s,[4,e(i)];case 6:return c=l.sent(),i.forEach(function(h){return h instanceof Ee&&h.dispose()}),[2,c]}})})}function vi(r,n,e,t,o){return J(this,void 0,void 0,function(){var a=this;return Q(this,function(i){return[2,Co([r],n,function(s){return J(a,void 0,void 0,function(){return Q(this,function(u){return[2,e(s[0])]})})},t,o)]})})}function r0(r){return K(function(){return lt(Me(r,3).reverse(),3)})}var Pr=2,ao=12;function o0(r,n){var e=bo(r,n),t=ci(r,n);function o(c,l){var h=Te(r(c));return n.push({paramPath:l}),h}function a(c,l,h){h===void 0&&(h=!1);var f=e(c[0],c[1],3,l+"/conv1"),p=o(c[1],l+"/prelu1_alpha"),d=e(c[1],c[2],3,l+"/conv2"),m=o(c[2],l+"/prelu2_alpha"),v=e(c[2],c[3],h?2:3,l+"/conv3"),g=o(c[3],l+"/prelu3_alpha");return{conv1:f,prelu1_alpha:p,conv2:d,prelu2_alpha:m,conv3:v,prelu3_alpha:g}}function i(){var c=a([3,10,16,32],"pnet"),l=e(32,2,1,"pnet/conv4_1"),h=e(32,4,1,"pnet/conv4_2");return Xe(Xe({},c),{conv4_1:l,conv4_2:h})}function s(){var c=a([3,28,48,64],"rnet",!0),l=t(576,128,"rnet/fc1"),h=o(128,"rnet/prelu4_alpha"),f=t(128,2,"rnet/fc2_1"),p=t(128,4,"rnet/fc2_2");return Xe(Xe({},c),{fc1:l,prelu4_alpha:h,fc2_1:f,fc2_2:p})}function u(){var c=a([3,32,64,64],"onet"),l=e(64,128,2,"onet/conv4"),h=o(128,"onet/prelu4_alpha"),f=t(1152,256,"onet/fc1"),p=o(256,"onet/prelu5_alpha"),d=t(256,2,"onet/fc2_1"),m=t(256,4,"onet/fc2_2"),v=t(256,10,"onet/fc2_3");return Xe(Xe({},c),{conv4:l,prelu4_alpha:h,fc1:f,prelu5_alpha:p,fc2_1:d,fc2_2:m,fc2_3:v})}return{extractPNetParams:i,extractRNetParams:s,extractONetParams:u}}function a0(r){var n=$t(r),e=n.extractWeights,t=n.getRemainingWeights,o=[],a=o0(e,o),i=a.extractPNetParams,s=a.extractRNetParams,u=a.extractONetParams,c=i(),l=s(),h=u();if(t().length!==0)throw new Error("weights remaing after extract: "+t().length);return{params:{pnet:c,rnet:l,onet:h},paramMappings:o}}function i0(r,n){var e=ln(r,n);function t(l){var h=e(l+"/weights",4,l+"/filters"),f=e(l+"/bias",1);return{filters:h,bias:f}}function o(l){var h=e(l+"/weights",2),f=e(l+"/bias",1);return{weights:h,bias:f}}function a(l){return e(l,1)}function i(l){var h=t(l+"/conv1"),f=a(l+"/prelu1_alpha"),p=t(l+"/conv2"),d=a(l+"/prelu2_alpha"),m=t(l+"/conv3"),v=a(l+"/prelu3_alpha");return{conv1:h,prelu1_alpha:f,conv2:p,prelu2_alpha:d,conv3:m,prelu3_alpha:v}}function s(){var l=i("pnet"),h=t("pnet/conv4_1"),f=t("pnet/conv4_2");return Xe(Xe({},l),{conv4_1:h,conv4_2:f})}function u(){var l=i("rnet"),h=o("rnet/fc1"),f=a("rnet/prelu4_alpha"),p=o("rnet/fc2_1"),d=o("rnet/fc2_2");return Xe(Xe({},l),{fc1:h,prelu4_alpha:f,fc2_1:p,fc2_2:d})}function c(){var l=i("onet"),h=t("onet/conv4"),f=a("onet/prelu4_alpha"),p=o("onet/fc1"),d=a("onet/prelu5_alpha"),m=o("onet/fc2_1"),v=o("onet/fc2_2"),g=o("onet/fc2_3");return Xe(Xe({},l),{conv4:h,prelu4_alpha:f,fc1:p,prelu5_alpha:d,fc2_1:m,fc2_2:v,fc2_3:g})}return{extractPNetParams:s,extractRNetParams:u,extractONetParams:c}}function s0(r){var n=[],e=i0(r,n),t=e.extractPNetParams,o=e.extractRNetParams,a=e.extractONetParams,i=t(),s=o(),u=a();return Yt(r,n),{params:{pnet:i,rnet:s,onet:u},paramMappings:n}}function _a(r,n){var e=n[0],t=n[1];return{height:Math.floor(e*r),width:Math.floor(t*r)}}function u0(r,n,e){for(var t=e[0],o=e[1],a=ao/r,i=[],s=Math.min(t,o)*a,u=0;s>=12;)i.push(a*Math.pow(n,u)),s=s*n,u+=1;return i}var mi=function(r){re(n,r);function n(e,t,o,a){return r.call(this,{left:e,top:t,right:o,bottom:a},!0)||this}return n}(Mt);function Uc(r){return K(function(){return Je(Oe(r,j(127.5)),j(.0078125))})}function zn(r,n){return K(function(){return ue(Re(r),Je(n,Qr(Re(Qr(r)))))})}function gi(r,n,e){return e===void 0&&(e=!1),K(function(){var t=yt(r,n.conv1,"valid");return t=zn(t,n.prelu1_alpha),t=Le(t,e?[2,2]:[3,3],[2,2],"same"),t=yt(t,n.conv2,"valid"),t=zn(t,n.prelu2_alpha),t=e?t:Le(t,[3,3],[2,2],"valid"),t=yt(t,n.conv3,"valid"),t=zn(t,n.prelu3_alpha),t})}function c0(r,n){return K(function(){var e=gi(r,n,!0),t=yt(e,n.conv4_1,"valid"),o=ft(po(t,3),3),a=qt(Oe(t,o),3),i=yt(e,n.conv4_2,"valid");return{prob:a,regions:i}})}function l0(r,n){return K(function(){var e=_a(n,r.shape.slice(1)),t=e.height,o=e.width,a=Xa.resizeBilinear(r,[t,o]),i=Uc(a);return sn(i,[0,2,1,3])})}function h0(r,n,e,t){for(var o=[],a=r.arraySync(),i=0;i<r.shape[0];i++)for(var s=0;s<r.shape[1];s++)a[i][s]>=t&&o.push(new ge(s,i));var u=o.map(function(c){var l=new yo(Math.round((c.y*Pr+1)/e),Math.round((c.x*Pr+1)/e),Math.round((c.y*Pr+ao)/e),Math.round((c.x*Pr+ao)/e)),h=a[c.y][c.x],f=n.arraySync(),p=new mi(f[c.y][c.x][0],f[c.y][c.x][1],f[c.y][c.x][2],f[c.y][c.x][3]);return{cell:l,score:h,region:p}});return u}function f0(r,n,e,t,o){o.stage1=[];var a=n.map(function(f){return K(function(){var p={scale:f},d=l0(r,f),m=Date.now(),v=c0(d,t),g=v.prob,x=v.regions;p.pnet=Date.now()-m;var b=Me(Me(g,3)[1])[0],y=Me(x)[0];return{scoresTensor:b,regionsTensor:y,scale:f,statsForScale:p}})}),i=a.map(function(f){var p=f.scoresTensor,d=f.regionsTensor,m=f.scale,v=f.statsForScale,g=h0(p,d,m,e);if(p.dispose(),d.dispose(),!g.length)return o.stage1.push(v),[];var x=Date.now(),b=cr(g.map(function(y){return y.cell}),g.map(function(y){return y.score}),.5);return v.nms=Date.now()-x,v.numBoxes=b.length,o.stage1.push(v),b.map(function(y){return g[y]})}),s=i.reduce(function(f,p){return f.concat(p)},[]),u=[],c=[];if(s.length>0){var l=Date.now(),h=cr(s.map(function(f){return f.cell}),s.map(function(f){return f.score}),.7);o.stage1_nms=Date.now()-l,c=h.map(function(f){return s[f].score}),u=h.map(function(f){return s[f]}).map(function(f){var p=f.cell,d=f.region;return new yo(p.left+d.left*p.width,p.top+d.top*p.height,p.right+d.right*p.width,p.bottom+d.bottom*p.height).toSquare().round()})}return{boxes:u,scores:c}}function zc(r,n,e){var t=e.width,o=e.height;return J(this,void 0,void 0,function(){var a,i,s,u=this;return Q(this,function(c){switch(c.label){case 0:return a=Ht(r),[4,Promise.all(n.map(function(l){return J(u,void 0,void 0,function(){var h,f,p,d,m,v,g,x;return Q(this,function(b){return h=l.padAtBorders(r.height,r.width),f=h.y,p=h.ey,d=h.x,m=h.ex,v=d-1,g=f-1,x=a.getImageData(v,g,m-v,p-g),[2,qe.isNodejs()?ii(x):createImageBitmap(x)]})})}))];case 1:return i=c.sent(),s=[],i.forEach(function(l){var h=xo({width:t,height:o}),f=Ht(h);f.drawImage(l,0,0,t,o);for(var p=f.getImageData(0,0,t,o).data,d=[],m=0;m<p.length;m+=4)d.push(p[m+2]),d.push(p[m+1]),d.push(p[m]);s.push(d)}),[2,s.map(function(l){var h=K(function(){var f=sn(Qe(l,[1,t,o,3]),[0,2,1,3]).toFloat();return Uc(f)});return h})]}})})}function p0(r,n){return K(function(){var e=gi(r,n),t=gt(e,[e.shape[0],n.fc1.weights.shape[0]]),o=Dt(t,n.fc1),a=zn(o,n.prelu4_alpha),i=Dt(a,n.fc2_1),s=ft(po(i,1),1),u=qt(Oe(i,s),1),c=Dt(a,n.fc2_2),l=Me(u,1)[1];return{scores:l,regions:c}})}function d0(r,n,e,t,o){return J(this,void 0,void 0,function(){var a,i,s,u,c,l,h,f,p,d,m,v,g,x;return Q(this,function(b){switch(b.label){case 0:return a=Date.now(),[4,zc(r,n,{width:24,height:24})];case 1:return i=b.sent(),o.stage2_extractImagePatches=Date.now()-a,a=Date.now(),s=i.map(function(y){var w=p0(y,t);return y.dispose(),w}),o.stage2_rnet=Date.now()-a,u=s.length>1?Fe(s.map(function(y){return y.scores})):s[0].scores,h=(l=Array).from,[4,u.data()];case 2:return c=h.apply(l,[b.sent()]),u.dispose(),f=c.map(function(y,w){return{score:y,idx:w}}).filter(function(y){return y.score>e}).map(function(y){var w=y.idx;return w}),p=f.map(function(y){return n[y]}),d=f.map(function(y){return c[y]}),m=[],v=[],p.length>0&&(a=Date.now(),g=cr(p,d,.7),o.stage2_nms=Date.now()-a,x=g.map(function(y){var w=s[f[y]].regions.arraySync();return new mi(w[0][0],w[0][1],w[0][2],w[0][3])}),v=g.map(function(y){return d[y]}),m=g.map(function(y,w){return p[y].calibrate(x[w])})),s.forEach(function(y){y.regions.dispose(),y.scores.dispose()}),[2,{boxes:m,scores:v}]}})})}function v0(r,n){return K(function(){var e=gi(r,n);e=Le(e,[2,2],[2,2],"same"),e=yt(e,n.conv4,"valid"),e=zn(e,n.prelu4_alpha);var t=gt(e,[e.shape[0],n.fc1.weights.shape[0]]),o=Dt(t,n.fc1),a=zn(o,n.prelu5_alpha),i=Dt(a,n.fc2_1),s=ft(po(i,1),1),u=qt(Oe(i,s),1),c=Dt(a,n.fc2_2),l=Dt(a,n.fc2_3),h=Me(u,1)[1];return{scores:h,regions:c,points:l}})}function m0(r,n,e,t,o){return J(this,void 0,void 0,function(){var a,i,s,u,c,l,h,f,p,d,m,v,g,x,b;return Q(this,function(y){switch(y.label){case 0:return a=Date.now(),[4,zc(r,n,{width:48,height:48})];case 1:return i=y.sent(),o.stage3_extractImagePatches=Date.now()-a,a=Date.now(),s=i.map(function(w){var C=v0(w,t);return w.dispose(),C}),o.stage3_onet=Date.now()-a,u=s.length>1?Fe(s.map(function(w){return w.scores})):s[0].scores,h=(l=Array).from,[4,u.data()];case 2:return c=h.apply(l,[y.sent()]),u.dispose(),f=c.map(function(w,C){return{score:w,idx:C}}).filter(function(w){return w.score>e}).map(function(w){var C=w.idx;return C}),p=f.map(function(w){var C=s[w].regions.arraySync();return new mi(C[0][0],C[0][1],C[0][2],C[0][3])}),d=f.map(function(w,C){return n[w].calibrate(p[C])}),m=f.map(function(w){return c[w]}),v=[],g=[],x=[],d.length>0&&(a=Date.now(),b=cr(d,m,.7,!1),o.stage3_nms=Date.now()-a,v=b.map(function(w){return d[w]}),g=b.map(function(w){return m[w]}),x=b.map(function(w,C){return Array(5).fill(0).map(function(S,k){var R=s[w].points.arraySync();return new ge(R[0][k]*(v[C].width+1)+v[C].left,R[0][k+5]*(v[C].height+1)+v[C].top)})})),s.forEach(function(w){w.regions.dispose(),w.scores.dispose(),w.points.dispose()}),[2,{boxes:v,scores:g,points:x}]}})})}var g0=function(r){re(n,r);function n(){return r.call(this,"Mtcnn")||this}return n.prototype.load=function(e){return J(this,void 0,void 0,function(){return Q(this,function(t){return console.warn("mtcnn is deprecated and will be removed soon"),[2,r.prototype.load.call(this,e)]})})},n.prototype.loadFromDisk=function(e){return J(this,void 0,void 0,function(){return Q(this,function(t){return console.warn("mtcnn is deprecated and will be removed soon"),[2,r.prototype.loadFromDisk.call(this,e)]})})},n.prototype.forwardInput=function(e,t){return t===void 0&&(t={}),J(this,void 0,void 0,function(){var o,a,i,s,u,c,l,h,f,p,d,m,v,g,x,b,y,w,C,S,k;return Q(this,function(R){switch(R.label){case 0:if(o=this.params,!o)throw new Error("Mtcnn - load model before inference");if(a=e.canvases[0],!a)throw new Error("Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.");return i={},s=Date.now(),u=K(function(){return r0(ft(ei.fromPixels(a)).toFloat())}),c=function(I){return u.dispose(),i.total=Date.now()-s,I},l=u.shape.slice(1),h=l[0],f=l[1],p=new Bc(t),d=p.minFaceSize,m=p.scaleFactor,v=p.maxNumScales,g=p.scoreThresholds,x=p.scaleSteps,b=(x||u0(d,m,[h,f])).filter(function(I){var N=_a(I,[h,f]);return Math.min(N.width,N.height)>ao}).slice(0,v),i.scales=b,i.pyramid=b.map(function(I){return _a(I,[h,f])}),y=Date.now(),[4,f0(u,b,g[0],o.pnet,i)];case 1:return w=R.sent(),i.total_stage1=Date.now()-y,w.boxes.length?(i.stage2_numInputBoxes=w.boxes.length,y=Date.now(),[4,d0(a,w.boxes,g[1],o.rnet,i)]):[2,c({results:[],stats:i})];case 2:return C=R.sent(),i.total_stage2=Date.now()-y,C.boxes.length?(i.stage3_numInputBoxes=C.boxes.length,y=Date.now(),[4,m0(a,C.boxes,g[2],o.onet,i)]):[2,c({results:[],stats:i})];case 3:return S=R.sent(),i.total_stage3=Date.now()-y,k=S.boxes.map(function(I,N){return wo(hr({},new ht(S.scores[N],new ni(I.left/f,I.top/h,I.width/f,I.height/h),{height:h,width:f})),new Hm(S.points[N].map(function(A){return A.sub(new ge(I.left,I.top)).div(new ge(I.width,I.height))}),{width:I.width,height:I.height}))}),[2,c({results:k,stats:i})]}})})},n.prototype.forward=function(e,t){return t===void 0&&(t={}),J(this,void 0,void 0,function(){var o;return Q(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,Ve(e)];case 1:return[4,o.apply(this,[a.sent(),t])];case 2:return[2,a.sent().results]}})})},n.prototype.forwardWithStats=function(e,t){return t===void 0&&(t={}),J(this,void 0,void 0,function(){var o;return Q(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,Ve(e)];case 1:return[2,o.apply(this,[a.sent(),t])]}})})},n.prototype.getDefaultModelName=function(){return"mtcnn_model"},n.prototype.extractParamsFromWeigthMap=function(e){return s0(e)},n.prototype.extractParams=function(e){return a0(e)},n}(Xt),y0=.4,x0=[new ge(1.603231,2.094468),new ge(6.041143,7.080126),new ge(2.882459,3.518061),new ge(4.266906,5.178857),new ge(9.041765,10.66308)],b0=[117.001,114.697,97.404],w0=function(r){re(n,r);function n(){var e=this,t={withSeparableConvs:!0,iouThreshold:y0,classes:["face"],anchors:x0,meanRgb:b0,isFirstLayerConv2d:!0,filterSizes:[3,16,32,64,128,256,512]};return e=r.call(this,t)||this,e}return Object.defineProperty(n.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),n.prototype.locateFaces=function(e,t){return J(this,void 0,void 0,function(){var o;return Q(this,function(a){switch(a.label){case 0:return[4,this.detect(e,t)];case 1:return o=a.sent(),[2,o.map(function(i){return new ht(i.score,i.relativeBox,{width:i.imageWidth,height:i.imageHeight})})]}})})},n.prototype.getDefaultModelName=function(){return"tiny_face_detector_model"},n.prototype.extractParamsFromWeigthMap=function(e){return r.prototype.extractParamsFromWeigthMap.call(this,e)},n}(Wc),je={ssdMobilenetv1:new Lc,tinyFaceDetector:new w0,tinyYolov2:new n0,mtcnn:new g0,faceLandmark68Net:new Tc,faceLandmark68TinyNet:new _g,faceRecognitionNet:new Ag,faceExpressionNet:new lg,ageGenderNet:new xg},Gc=function(r){re(n,r);function n(e,t,o){var a=r.call(this)||this;return a.parentTask=e,a.input=t,a.extractedFaces=o,a}return n}(Cr),yi=function(r){re(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.run=function(){return J(this,void 0,void 0,function(){var e,t,o=this;return Q(this,function(a){switch(a.label){case 0:return[4,this.parentTask];case 1:return e=a.sent(),[4,Co(e,this.input,function(i){return J(o,void 0,void 0,function(){return Q(this,function(s){switch(s.label){case 0:return[4,Promise.all(i.map(function(u){return je.faceExpressionNet.predictExpressions(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return t=a.sent(),[2,e.map(function(i,s){return kc(i,t[s])})]}})})},n.prototype.withAgeAndGender=function(){return new Ci(this,this.input)},n}(Gc),xi=function(r){re(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.run=function(){return J(this,void 0,void 0,function(){var e,t;return Q(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),e?[4,vi(e,this.input,function(a){return je.faceExpressionNet.predictExpressions(a)},this.extractedFaces)]:[2];case 2:return t=o.sent(),[2,kc(e,t)]}})})},n.prototype.withAgeAndGender=function(){return new _i(this,this.input)},n}(Gc),bi=function(r){re(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.withAgeAndGender=function(){return new Ei(this,this.input)},n.prototype.withFaceDescriptors=function(){return new Ii(this,this.input)},n}(yi),wi=function(r){re(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.withAgeAndGender=function(){return new Ri(this,this.input)},n.prototype.withFaceDescriptor=function(){return new ki(this,this.input)},n}(xi),Hc=function(r){re(n,r);function n(e,t,o){var a=r.call(this)||this;return a.parentTask=e,a.input=t,a.extractedFaces=o,a}return n}(Cr),Ci=function(r){re(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.run=function(){return J(this,void 0,void 0,function(){var e,t,o=this;return Q(this,function(a){switch(a.label){case 0:return[4,this.parentTask];case 1:return e=a.sent(),[4,Co(e,this.input,function(i){return J(o,void 0,void 0,function(){return Q(this,function(s){switch(s.label){case 0:return[4,Promise.all(i.map(function(u){return je.ageGenderNet.predictAgeAndGender(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return t=a.sent(),[2,e.map(function(i,s){var u=t[s],c=u.age,l=u.gender,h=u.genderProbability;return Pc(Oc(i,l,h),c)})]}})})},n.prototype.withFaceExpressions=function(){return new yi(this,this.input)},n}(Hc),_i=function(r){re(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.run=function(){return J(this,void 0,void 0,function(){var e,t,o,a,i;return Q(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return e=s.sent(),e?[4,vi(e,this.input,function(u){return je.ageGenderNet.predictAgeAndGender(u)},this.extractedFaces)]:[2];case 2:return t=s.sent(),o=t.age,a=t.gender,i=t.genderProbability,[2,Pc(Oc(e,a,i),o)]}})})},n.prototype.withFaceExpressions=function(){return new xi(this,this.input)},n}(Hc),Ei=function(r){re(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.withFaceExpressions=function(){return new bi(this,this.input)},n.prototype.withFaceDescriptors=function(){return new Ii(this,this.input)},n}(Ci),Ri=function(r){re(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.withFaceExpressions=function(){return new wi(this,this.input)},n.prototype.withFaceDescriptor=function(){return new ki(this,this.input)},n}(_i),jc=function(r){re(n,r);function n(e,t){var o=r.call(this)||this;return o.parentTask=e,o.input=t,o}return n}(Cr),Ii=function(r){re(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.run=function(){return J(this,void 0,void 0,function(){var e,t;return Q(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),[4,Co(e,this.input,function(a){return Promise.all(a.map(function(i){return je.faceRecognitionNet.computeFaceDescriptor(i)}))},null,function(a){return a.landmarks.align(null,{useDlibAlignment:!0})})];case 2:return t=o.sent(),[2,t.map(function(a,i){return Mc(e[i],a)})]}})})},n.prototype.withFaceExpressions=function(){return new bi(this,this.input)},n.prototype.withAgeAndGender=function(){return new Ei(this,this.input)},n}(jc),ki=function(r){re(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.run=function(){return J(this,void 0,void 0,function(){var e,t;return Q(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),e?[4,vi(e,this.input,function(a){return je.faceRecognitionNet.computeFaceDescriptor(a)},null,function(a){return a.landmarks.align(null,{useDlibAlignment:!0})})]:[2];case 2:return t=o.sent(),[2,Mc(e,t)]}})})},n.prototype.withFaceExpressions=function(){return new wi(this,this.input)},n.prototype.withAgeAndGender=function(){return new Ri(this,this.input)},n}(jc),qc=function(r){re(n,r);function n(e,t,o){var a=r.call(this)||this;return a.parentTask=e,a.input=t,a.useTinyLandmarkNet=o,a}return Object.defineProperty(n.prototype,"landmarkNet",{get:function(){return this.useTinyLandmarkNet?je.faceLandmark68TinyNet:je.faceLandmark68Net},enumerable:!0,configurable:!0}),n}(Cr),C0=function(r){re(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.run=function(){return J(this,void 0,void 0,function(){var e,t,o,a,i,s=this;return Q(this,function(u){switch(u.label){case 0:return[4,this.parentTask];case 1:return e=u.sent(),t=e.map(function(c){return c.detection}),this.input instanceof Ee?[4,ui(this.input,t)]:[3,3];case 2:return a=u.sent(),[3,5];case 3:return[4,si(this.input,t)];case 4:a=u.sent(),u.label=5;case 5:return o=a,[4,Promise.all(o.map(function(c){return s.landmarkNet.detectLandmarks(c)}))];case 6:return i=u.sent(),o.forEach(function(c){return c instanceof Ee&&c.dispose()}),[2,e.map(function(c,l){return wo(c,i[l])})]}})})},n.prototype.withFaceExpressions=function(){return new bi(this,this.input)},n.prototype.withAgeAndGender=function(){return new Ei(this,this.input)},n.prototype.withFaceDescriptors=function(){return new Ii(this,this.input)},n}(qc),_0=function(r){re(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.run=function(){return J(this,void 0,void 0,function(){var e,t,o,a,i;return Q(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return e=s.sent(),e?(t=e.detection,this.input instanceof Ee?[4,ui(this.input,[t])]:[3,3]):[2];case 2:return a=s.sent(),[3,5];case 3:return[4,si(this.input,[t])];case 4:a=s.sent(),s.label=5;case 5:return o=a,[4,this.landmarkNet.detectLandmarks(o[0])];case 6:return i=s.sent(),o.forEach(function(u){return u instanceof Ee&&u.dispose()}),[2,wo(e,i)]}})})},n.prototype.withFaceExpressions=function(){return new wi(this,this.input)},n.prototype.withAgeAndGender=function(){return new Ri(this,this.input)},n.prototype.withFaceDescriptor=function(){return new ki(this,this.input)},n}(qc),Kc=function(r){re(n,r);function n(e,t){t===void 0&&(t=new wr);var o=r.call(this)||this;return o.input=e,o.options=t,o}return n}(Cr),Xc=function(r){re(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.run=function(){return J(this,void 0,void 0,function(){var e,t,o,a;return Q(this,function(i){switch(i.label){case 0:return e=this,t=e.input,o=e.options,o instanceof Bc?[4,je.mtcnn.forward(t,o)]:[3,2];case 1:return[2,i.sent().map(function(s){return s.detection})];case 2:if(a=o instanceof Vc?function(s){return je.tinyFaceDetector.locateFaces(s,o)}:o instanceof wr?function(s){return je.ssdMobilenetv1.locateFaces(s,o)}:o instanceof di?function(s){return je.tinyYolov2.locateFaces(s,o)}:null,!a)throw new Error("detectFaces - expected options to be instance of TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options");return[2,a(t)]}})})},n.prototype.runAndExtendWithFaceDetections=function(){var e=this;return new Promise(function(t){return J(e,void 0,void 0,function(){var o;return Q(this,function(a){switch(a.label){case 0:return[4,this.run()];case 1:return o=a.sent(),[2,t(o.map(function(i){return hr({},i)}))]}})})})},n.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new C0(this.runAndExtendWithFaceDetections(),this.input,e)},n.prototype.withFaceExpressions=function(){return new yi(this.runAndExtendWithFaceDetections(),this.input)},n.prototype.withAgeAndGender=function(){return new Ci(this.runAndExtendWithFaceDetections(),this.input)},n}(Kc),E0=function(r){re(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.run=function(){return J(this,void 0,void 0,function(){var e,t;return Q(this,function(o){switch(o.label){case 0:return[4,new Xc(this.input,this.options)];case 1:return e=o.sent(),t=e[0],e.forEach(function(a){a.score>t.score&&(t=a)}),[2,t]}})})},n.prototype.runAndExtendWithFaceDetection=function(){var e=this;return new Promise(function(t){return J(e,void 0,void 0,function(){var o;return Q(this,function(a){switch(a.label){case 0:return[4,this.run()];case 1:return o=a.sent(),[2,t(o?hr({},o):void 0)]}})})})},n.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new _0(this.runAndExtendWithFaceDetection(),this.input,e)},n.prototype.withFaceExpressions=function(){return new xi(this.runAndExtendWithFaceDetection(),this.input)},n.prototype.withAgeAndGender=function(){return new _i(this.runAndExtendWithFaceDetection(),this.input)},n}(Kc);function R0(r,n){return n===void 0&&(n=new wr),new E0(r,n)}function I0(r,n){return n===void 0&&(n=new wr),new Xc(r,n)}function k0(r,n){if(r.length!==n.length)throw new Error("euclideanDistance: arr1.length !== arr2.length");var e=Array.from(r),t=Array.from(n);return Math.sqrt(e.map(function(o,a){return o-t[a]}).reduce(function(o,a){return o+Math.pow(a,2)},0))}var S0=function(){function r(n,e){e===void 0&&(e=.6),this._distanceThreshold=e;var t=Array.isArray(n)?n:[n];if(!t.length)throw new Error("FaceRecognizer.constructor - expected atleast one input");var o=1,a=function(){return"person "+o++};this._labeledDescriptors=t.map(function(i){if(i instanceof Zn)return i;if(i instanceof Float32Array)return new Zn(a(),[i]);if(i.descriptor&&i.descriptor instanceof Float32Array)return new Zn(a(),[i.descriptor]);throw new Error("FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>")})}return Object.defineProperty(r.prototype,"labeledDescriptors",{get:function(){return this._labeledDescriptors},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"distanceThreshold",{get:function(){return this._distanceThreshold},enumerable:!0,configurable:!0}),r.prototype.computeMeanDistance=function(n,e){return e.map(function(t){return k0(t,n)}).reduce(function(t,o){return t+o},0)/(e.length||1)},r.prototype.matchDescriptor=function(n){var e=this;return this.labeledDescriptors.map(function(t){var o=t.descriptors,a=t.label;return new _s(a,e.computeMeanDistance(n,o))}).reduce(function(t,o){return t.distance<o.distance?t:o})},r.prototype.findBestMatch=function(n){var e=this.matchDescriptor(n);return e.distance<this.distanceThreshold?e:new _s("unknown",e.distance)},r.prototype.toJSON=function(){return{distanceThreshold:this.distanceThreshold,labeledDescriptors:this.labeledDescriptors.map(function(n){return n.toJSON()})}},r.fromJSON=function(n){var e=n.labeledDescriptors.map(function(t){return Zn.fromJSON(t)});return new r(e,n.distanceThreshold)},r}();function Yc(r,n){var e=new gn(n.width,n.height),t=e.width,o=e.height;if(t<=0||o<=0)throw new Error("resizeResults - invalid dimensions: "+JSON.stringify({width:t,height:o}));if(Array.isArray(r))return r.map(function(s){return Yc(s,{width:t,height:o})});if(Sc(r)){var a=r.detection.forSize(t,o),i=r.unshiftedLandmarks.forSize(a.box.width,a.box.height);return wo(hr(r,a),i)}return no(r)?hr(r,r.detection.forSize(t,o)):r instanceof lr||r instanceof ht?r.forSize(t,o):r}const A0=()=>{const[r,n]=ot.useState("Training..."),e="/face-rec/models",t=ot.useRef();let o=ot.useRef();const[a,i]=ot.useState("environment"),[s,u]=ot.useState([{id:"Nico",name:"Ian Nico Caulin",position:"Gwapo"},{id:"Mark",name:"Mark Gil Rusiana",position:"OJT"}]),[c,l]=ot.useState(!1),[h]=ot.useState([{id:"Nico",name:"Ian Nico Caulin",position:"Gwapo"},{id:"Mark",name:"Mark Gil Rusiana",position:"OJT"},{id:"Alvin",name:"Alvin Nuska",position:"Gwapo King"},{id:"DICTMisOr.PD-Nideliza",name:"DICT Mis Or. PD-Nideliza Fe O. Nacilla",position:"DICT Mis. Or. Provincial Director"},{id:"DICT10RD-Ms.Sittie",name:"DICT 10 RD-Ms. Sittie Rahma Alawi",position:"DICT Region 10 Director"},{id:"Sarah",name:"Sarah Margaha",position:"My Everything"},{id:"Panky",name:"Bliss Francis “Panky” Acain",position:"PGMO-Board Members District 2"},{id:"Yasay",name:"Dexter Yasay",position:"PGMO-Board Members District 2"},{id:"Erick",name:"Fredrick “Erick” Yu Khu",position:"PGMO-Board Members District 1"},{id:"Boboy",name:"Gerardo “Boboy” Sabal III",position:"PGMO-Board Members District 2"},{id:"Unabia",name:"Hon.Peter Unabia",position:"PGMO-Governor"},{id:"Pelaez",name:"Hon.Jeremy Jonahmar Pelaez",position:"PGMO-Vice Governor"},{id:"Abing",name:"Jabi “Abing” Bernaldez",position:"PGMO-Board Members District 1"},{id:"Emano",name:"Princess Nacional Emano",position:"PGMO-Board Members District 2"},{id:"Buhisan",name:"Rey Buhisan",position:"PGMO-Board Members District 1"},{id:"Say-say",name:"Syremae “Say-say” Neri Emano ",position:"PGMO-Board Members District 2"},{id:"Win",name:"Wayne “Win” Militante",position:"PGMO-Board Members District 1"},{id:"Kho",name:"Marlon Chan Kho",position:"PGMO-Board Members District 1"},{id:"MayorLeonardo",name:"Hon. Mayor Leonardo L. Uy",position:"LIBERTAD-Mayor"},{id:"ViceMayorSharon",name:"Hon. Vice Mayor Sharon M. Ballangan",position:"LIBERTAD-Vice Mayor "},{id:"MayorWellie",name:"Hon. Mayor Wellie G. Lim",position:"LUGAIT-Mayor "},{id:"ViceMayorRoger",name:"Hon. Vice Mayor Roger G. Lim",position:"LUGAIT-Vice Mayor "},{id:"MayorCharlie",name:"Hon. Mayor Charlie B. Buhisan",position:"MAGSAYSAY(LINUGOS)-Mayor"},{id:"ViceMayorGrace",name:"Hon. Vice Mayor Grace B. Abao",position:"MAGSAYSAY(LINUGOS)-ViceMayor"},{id:"MayorStephen",name:"Hon. Mayor Stephen S. Tan",position:"MANTICAO-Mayor"},{id:"ViceMayorRoberto",name:"Hon. Vice Mayor Roberto M. Lagrosas",position:"MANTICAO-ViceMayor"},{id:"MayorDonato",name:"Hon. Mayor Donato N. Chan",position:"MEDINA-Mayor"},{id:"ViceMayorPaulo",name:"Hon. Vice Mayor Paulo B. Magallanes",position:"MEDINA-ViceMayor"},{id:"MayorDennis",name:"Hon. Mayor Dennis L. Roa",position:"NAAWAN-Mayor"},{id:"ViceMayorAllan",name:"Hon. Vice Mayor Allan B. Roa",position:"NAAWAN-ViceMayor"},{id:"MayorJayfrancis",name:"Hon. Mayor Jayfrancis D. Bago",position:"OPOL-Mayor"},{id:"ViceMayorDanilo",name:"Hon. Vice Mayor Danilo E. Daroy",position:"OPOL-ViceMayor"},{id:"MayorAngelo",name:"Hon. Mayor Angelo G. Capistrano",position:"SALAY-Mayor"},{id:"ViceMayorRey",name:"Hon. Vice Mayor Rey Amelto K. Tan",position:"SALAY-ViceMayor"},{id:"MayorMildred",name:"Hon. Mayor Mildred L. Mondigo",position:"SUGBONGCOGON-Mayor"},{id:"ViceMayorIvan",name:"Hon. Vice Mayor Ivan Chester E. Lagbas",position:"SUGBONGCOGON-ViceMayor"},{id:"MayorNadya",name:"Hon. Mayor Nadya B. Emano-Elipe",position:"TAGOLOAN-Mayor"},{id:"ViceMayorRobinson",name:"Hon. Vice Mayor Robinson V. Sabio",position:"TAGOLOAN-ViceMayor"},{id:"MayorJennie",name:"Hon. Mayor Jennie Rosalie U. Mendez",position:"VILLANUEVA-Mayor"},{id:"ViceMayorJeric",name:"Hon. Vice Mayor Jeric G. Emano",position:"VILLANUEVA-ViceMayor"},{id:"MayorRico",name:"Hon. Mayor Rico T. Taray",position:"TALISAYAN-Mayor"},{id:"ViceMayorRommel",name:"Hon. Vice Mayor Rommel C. Maslog",position:"TALISAYAN-ViceMayor"}]);ot.useEffect(()=>{f(),t&&p()},[a]);const f=ot.useCallback(()=>{t.current&&t.current.srcObject&&(t.current.srcObject.getTracks().forEach(function(b){b.stop()}),t.current.srcObject=null),navigator.mediaDevices.getUserMedia({video:{facingMode:a}}).then(g=>{t.current&&(t.current.srcObject=g)}).catch(g=>{console.log(g)})},[a]),p=ot.useCallback(()=>{Promise.all([je.ssdMobilenetv1.loadFromUri(e),je.tinyFaceDetector.loadFromUri(e),je.faceLandmark68Net.loadFromUri(e),je.faceRecognitionNet.loadFromUri(e),je.faceExpressionNet.loadFromUri(e)]).then(()=>{v()})},[]),d=ot.useCallback(async g=>R0(g).withFaceLandmarks().withFaceDescriptor(),[]),m=ot.useCallback(()=>Promise.all(h.map(async g=>{const x=[];for(let b=1;b<=2;b++){const y=await tg(`./labels/${g.id}/${b}.jpg`),w=await d(y);x.push(w.descriptor)}return new Zn(g.id,x)})),[d]),v=ot.useCallback(async()=>{const g=await m(),x=new S0(g);n("Running");const b=async()=>{const y=await I0(t.current,new Vc).withFaceLandmarks().withFaceDescriptors();og(o.current,{width:500,height:600});const w=Yc(y,{width:500,height:600});o.current.getContext("2d").clearRect(0,0,500,600);const C=w.map(S=>x.findBestMatch(S.descriptor));$m(o.current,w),C.forEach((S,k)=>{const R=w[k].detection.box;new mc(R,{label:S.toString()}).draw(o.current)}),requestAnimationFrame(b),u(C)};b()},[m,s]);return Ue.jsx("div",{className:" min-h-full w-full max-w-[1468px]  flex flex-col justify-center",children:Ue.jsxs("div",{className:" border border-border  flex flex-col gap-5 items-center justify-center h-screen w-full ",children:[Ue.jsx("div",{className:" text-foreground text-sm w-[300px] flex  justify-center",children:Ue.jsx("p",{className:" font-semibold text-lg",children:" Face Rex v.1"})}),Ue.jsxs("div",{className:" overflow-hidden w-full max-w-[500px] h-[500px] relative flex",children:[Ue.jsx("div",{className:" ml-2 mt-5 absolute gap-2 text-primary col-span-1 flex flex-col ",children:s&&s.map((g,x)=>{const b=h.find(y=>y.id===g._label);return b?Ue.jsxs("div",{className:" text-sm bg-card/50 backdrop-blur-md p-2 rounded-md",children:[Ue.jsx("h3",{children:b.name}),Ue.jsx("p",{children:b.position})]},x):null})}),Ue.jsx("video",{crossOrigin:"anonymous",ref:t,className:" w-full h-full border-border border-2 rounded-md ",autoPlay:!0}),Ue.jsx("canvas",{ref:o,className:"  w-full h-full  absolute"})]}),Ue.jsxs("div",{className:" w-[300px]  grid  justify-center items-center  grid-cols-3  ",children:[Ue.jsx("p",{className:" col-span-1 justify-start justify-self-start ",children:Ue.jsx("span",{className:r=="Running"?"  justify-end justify-self-end text-green-600":" text-red-500 justify-end justify-self-end",children:r})}),c?Ue.jsx(el,{className:" text-foreground col-span-1 justify-center justify-self-center self-center cursor-pointer",onClick:()=>{t.current.play(),l(!1)}}):Ue.jsx(Zc,{className:" text-foreground col-span-1 justify-center justify-self-center self-center cursor-pointer",onClick:()=>{t.current.pause(),l(!0)}}),Ue.jsx(tl,{className:a=="user"?" justify-end justify-self-end text-foreground rotate-180 transition-all duration-700 col-span-1 ":"  justify-end justify-self-end text-foreground col-span-1  rotate-0 transition-all duration-700",onClick:()=>{i(g=>g==="user"?"environment":"user"),f(),console.log(a)}})]})]})})};export{A0 as default};
