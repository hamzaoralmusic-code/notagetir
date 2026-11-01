(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}function mixinPropertiesHard(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
if(!b.hasOwnProperty(r)){b[r]=a[r]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(Object.getPrototypeOf(s)&&Object.getPrototypeOf(s).p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++){inherit(b[t],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t){A.fX(b)}a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a,b){if(b!=null)A.e(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t){convertToFastObject(a[t])}}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.cS(b)
return new t(c,this)}:function(){if(t===null)t=A.cS(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.cS(a).prototype
return t}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var t=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var s=staticTearOffGetter(t)
a[b]=s}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var t=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var s=instanceTearOffGetter(c,t)
a[b]=s}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
cX(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cT(a){var t,s,r,q,p,o="_$dart_js",n=a[v.dispatchPropertyName]
if(n==null)if($.cV==null){A.fM()
n=a[v.dispatchPropertyName]}if(n!=null){t=n.p
if(!1===t)return n.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return n.i
if(n.e===s)throw A.d(A.dn("Return interceptor for "+A.n(t(a,n))))}r=a.constructor
if(r==null)q=null
else{p=$.cb
if(p==null)p=$.cb=A.cp(o)
q=r[p]}if(q!=null)return q
q=A.fR(a)
if(q!=null)return q
if(typeof a=="function")return B.y
t=Object.getPrototypeOf(a)
if(t==null)return B.o
if(t===Object.prototype)return B.o
if(typeof r=="function"){p=$.cb
if(p==null)p=$.cb=A.cp(o)
Object.defineProperty(r,p,{value:B.f,enumerable:false,writable:true,configurable:true})
return B.f}return B.f},
em(a,b){if(a<0||a>4294967295)throw A.d(A.ad(a,0,4294967295,"length",null))
return J.eo(new Array(a),b)},
en(a,b){if(a<0)throw A.d(A.cC("Length must be a non-negative integer: "+a))
return A.e(new Array(a),b.i("l<0>"))},
eo(a,b){var t=A.e(a,b.i("l<0>"))
t.$flags=1
return t},
da(a,b){return J.e9(a,b)},
a4(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.an.prototype
return J.b2.prototype}if(typeof a=="string")return J.V.prototype
if(a==null)return J.ao.prototype
if(typeof a=="boolean")return J.b1.prototype
if(Array.isArray(a))return J.l.prototype
if(typeof a!="object"){if(typeof a=="function")return J.N.prototype
if(typeof a=="symbol")return J.ar.prototype
if(typeof a=="bigint")return J.ap.prototype
return a}if(a instanceof A.h)return a
return J.cT(a)},
dP(a){if(typeof a=="string")return J.V.prototype
if(a==null)return a
if(Array.isArray(a))return J.l.prototype
if(typeof a!="object"){if(typeof a=="function")return J.N.prototype
if(typeof a=="symbol")return J.ar.prototype
if(typeof a=="bigint")return J.ap.prototype
return a}if(a instanceof A.h)return a
return J.cT(a)},
co(a){if(a==null)return a
if(Array.isArray(a))return J.l.prototype
if(typeof a!="object"){if(typeof a=="function")return J.N.prototype
if(typeof a=="symbol")return J.ar.prototype
if(typeof a=="bigint")return J.ap.prototype
return a}if(a instanceof A.h)return a
return J.cT(a)},
fI(a){if(typeof a=="number")return J.a9.prototype
if(typeof a=="string")return J.V.prototype
if(a==null)return a
if(!(a instanceof A.h))return J.ae.prototype
return a},
cB(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a4(a).B(a,b)},
e9(a,b){return J.fI(a).K(a,b)},
d0(a,b){return J.co(a).C(a,b)},
C(a){return J.a4(a).gp(a)},
ea(a){return J.co(a).gag(a)},
d1(a){return J.co(a).gq(a)},
eb(a){return J.dP(a).gj(a)},
ec(a){return J.a4(a).gm(a)},
ed(a,b,c){return J.co(a).U(a,b,c)},
aS(a){return J.a4(a).h(a)},
b_:function b_(){},
b1:function b1(){},
ao:function ao(){},
aq:function aq(){},
O:function O(){},
bi:function bi(){},
ae:function ae(){},
N:function N(){},
ap:function ap(){},
ar:function ar(){},
l:function l(a){this.$ti=a},
b0:function b0(){},
bH:function bH(a){this.$ti=a},
L:function L(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a9:function a9(){},
an:function an(){},
b2:function b2(){},
V:function V(){}},A={cF:function cF(){},
Q(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
cM(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
fB(a,b,c){return a},
cW(a){var t,s
for(t=$.a3.length,s=0;s<t;++s)if(a===$.a3[s])return!0
return!1},
ev(a,b,c,d){A.cK(b,"start")
A.cK(c,"end")
if(b>c)A.bx(A.ad(b,0,c,"start",null))
return new A.aC(a,b,c,d.i("aC<0>"))},
eq(a,b,c,d){if(u.Q.b(a))return new A.ak(a,b,c.i("@<0>").F(d).i("ak<1,2>"))
return new A.Z(a,b,c.i("@<0>").F(d).i("Z<1,2>"))},
bG(){return new A.bn("No element")},
b5:function b5(a){this.a=a},
bS:function bS(){},
f:function f(){},
v:function v(){},
aC:function aC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
P:function P(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
Z:function Z(a,b,c){this.a=a
this.b=b
this.$ti=c},
ak:function ak(a,b,c){this.a=a
this.b=b
this.$ti=c},
b7:function b7(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
z:function z(a,b,c){this.a=a
this.b=b
this.$ti=c},
ax:function ax(a,b){this.a=a
this.$ti=b},
bh:function bh(a){this.a=a
this.b=null},
al:function al(){},
dX(a){var t=A.dW(a)
if(t!=null)return t
return"minified:"+a},
hg(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
n(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aS(a)
return t},
bj(a){var t,s=$.dg
if(s==null)s=$.dg=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
bk(a){var t,s,r,q
if(a instanceof A.h)return A.A(A.a5(a),null)
t=J.a4(a)
if(t===B.x||t===B.z||u.o.b(a)){s=B.i(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.A(A.a5(a),null)},
dh(a){var t,s,r
if(a==null||typeof a=="number"||A.ck(a))return J.aS(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.U)return a.h(0)
if(a instanceof A.aM)return a.ad(!0)
t=$.e8()
for(s=0;s<1;++s){r=t[s].aT(a)
if(r!=null)return r}return"Instance of '"+A.bk(a)+"'"},
r(a){var t
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((B.c.ac(t,10)|55296)>>>0,t&1023|56320)}throw A.d(A.ad(a,0,1114111,null,null))},
fA(a){return new A.T(!0,a,null,null)},
d(a){return A.u(a,new Error())},
u(a,b){var t
if(a==null)a=new A.aD()
b.dartException=a
t=A.fY
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:t})
b.name=""}else b.toString=t
return b},
fY(){return J.aS(this.dartException)},
bx(a,b){throw A.u(a,b==null?new Error():b)},
cY(a,b,c){var t
if(b==null)b=0
if(c==null)c=0
t=Error()
A.bx(A.f6(a,b,c),t)},
f6(a,b,c){var t,s,r,q,p,o,n,m,l
if(typeof b=="string")t=b
else{s="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
r=s.length
q=b
if(q>r){c=q/r|0
q%=r}t=s[q]}p=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
o=u.j.b(a)?"list":"ByteData"
n=a.$flags|0
m="a "
if((n&4)!==0)l="constant "
else if((n&2)!==0){l="unmodifiable "
m="an "}else l=(n&1)!==0?"fixed-length ":""
return new A.aE("'"+t+"': Cannot "+p+" "+m+l+o)},
G(a){throw A.d(A.M(a))},
J(a){var t,s,r,q,p,o
a=A.fW(a.replace(String({}),"$receiver$"))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=A.e([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new A.c4(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),s,r,q,p,o)},
c5(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
dm(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
cG(a,b){var t=b==null,s=t?null:b.method
return new A.b3(a,s,t?null:b.receiver)},
cZ(a){if(a==null)return new A.bR(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.a7(a,a.dartException)
return A.fz(a)},
a7(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
fz(a){var t,s,r,q,p,o,n,m,l,k,j,i,h
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((B.c.ac(s,16)&8191)===10)switch(r){case 438:return A.a7(a,A.cG(A.n(t)+" (Error "+r+")",null))
case 445:case 5007:A.n(t)
return A.a7(a,new A.ay())}}if(a instanceof TypeError){q=$.dZ()
p=$.e_()
o=$.e0()
n=$.e1()
m=$.e4()
l=$.e5()
k=$.e3()
$.e2()
j=$.e7()
i=$.e6()
h=q.A(t)
if(h!=null)return A.a7(a,A.cG(t,h))
else{h=p.A(t)
if(h!=null){h.method="call"
return A.a7(a,A.cG(t,h))}else if(o.A(t)!=null||n.A(t)!=null||m.A(t)!=null||l.A(t)!=null||k.A(t)!=null||n.A(t)!=null||j.A(t)!=null||i.A(t)!=null)return A.a7(a,new A.ay())}return A.a7(a,new A.bp(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new A.aA()
t=function(b){try{return String(b)}catch(g){}return null}(a)
return A.a7(a,new A.T(!1,null,null,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new A.aA()
return a},
cy(a){if(a==null)return J.C(a)
if(typeof a=="object")return A.bj(a)
return J.C(a)},
fH(a,b){var t,s,r,q=a.length
for(t=0;t<q;t=r){s=t+1
r=s+1
b.n(0,a[t],a[s])}return b},
ff(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(new A.ca("Unsupported number of arguments for wrapped closure"))},
fC(a,b){var t=a.$identity
if(!!t)return t
t=A.fD(a,b)
a.$identity=t
return t},
fD(a,b){var t
switch(b){case 0:t=a.$0
break
case 1:t=a.$1
break
case 2:t=a.$2
break
case 3:t=a.$3
break
case 4:t=a.$4
break
default:t=null}if(t!=null)return t.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.ff)},
ek(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.bT().constructor.prototype):Object.create(new A.aj(null,null).constructor.prototype)
t.$initialize=t.constructor
s=i?function static_tear_off(){this.$initialize()}:function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.d6(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.eg(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.d6(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
eg(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.ee)}throw A.d("Error in functionType of tearoff")},
eh(a,b,c,d){var t=A.d5
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
d6(a,b,c,d){if(c)return A.ej(a,b,d)
return A.eh(b.length,d,a,b)},
ei(a,b,c,d){var t=A.d5,s=A.ef
switch(b?-1:a){case 0:throw A.d(new A.bm("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
ej(a,b,c){var t,s
if($.d3==null)$.d3=A.d2("interceptor")
if($.d4==null)$.d4=A.d2("receiver")
t=b.length
s=A.ei(t,c,a,b)
return s},
cS(a){return A.ek(a)},
ee(a,b){return A.aR(v.typeUniverse,A.a5(a.a),b)},
d5(a){return a.a},
ef(a){return a.b},
d2(a){var t,s,r,q=new A.aj("receiver","interceptor"),p=Object.getOwnPropertyNames(q)
p.$flags=1
t=p
for(p=t.length,s=0;s<p;++s){r=t[s]
if(q[r]===a)return r}throw A.d(A.cC("Field name "+a+" not found."))},
cp(a){return v.getIsolateTag(a)},
fR(a){var t,s,r,q,p,o=$.dQ.$1(a),n=$.cm[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.ct[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=$.dO.$2(a,o)
if(r!=null){n=$.cm[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.ct[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.cw(t)
$.cm[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.ct[o]=t
return t}if(q==="-"){p=A.cw(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.dU(a,t)
if(q==="*")throw A.d(A.dn(o))
if(v.leafTags[o]===true){p=A.cw(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.dU(a,t)},
dU(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.cX(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
cw(a){return J.cX(a,!1,null,!!a.$iy)},
fT(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.cw(t)
else return J.cX(t,c,null,null)},
fM(){if(!0===$.cV)return
$.cV=!0
A.fN()},
fN(){var t,s,r,q,p,o,n,m
$.cm=Object.create(null)
$.ct=Object.create(null)
A.fL()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.dV.$1(p)
if(o!=null){n=A.fT(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
fL(){var t,s,r,q,p,o,n=B.q()
n=A.ah(B.r,A.ah(B.t,A.ah(B.j,A.ah(B.j,A.ah(B.u,A.ah(B.v,A.ah(B.w(B.i),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(Array.isArray(t))for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.dQ=new A.cq(q)
$.dO=new A.cr(p)
$.dV=new A.cs(o)},
ah(a,b){return a(b)||b},
fF(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
fW(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
I:function I(a,b){this.a=a
this.b=b},
bC:function bC(){},
a8:function a8(a,b){this.a=a
this.$ti=b},
az:function az(){},
c4:function c4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ay:function ay(){},
b3:function b3(a,b,c){this.a=a
this.b=b
this.c=c},
bp:function bp(a){this.a=a},
bR:function bR(a){this.a=a},
U:function U(){},
bz:function bz(){},
bU:function bU(){},
bT:function bT(){},
aj:function aj(a,b){this.a=a
this.b=b},
bm:function bm(a){this.a=a},
W:function W(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bL:function bL(a,b){this.a=a
this.b=b
this.c=null},
X:function X(a,b){this.a=a
this.$ti=b},
b6:function b6(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
cq:function cq(a){this.a=a},
cr:function cr(a){this.a=a},
cs:function cs(a){this.a=a},
aM:function aM(){},
bw:function bw(){},
dG(a){return a},
ab:function ab(){},
av:function av(){},
b8:function b8(){},
ac:function ac(){},
at:function at(){},
au:function au(){},
b9:function b9(){},
ba:function ba(){},
bb:function bb(){},
bc:function bc(){},
bd:function bd(){},
be:function be(){},
bf:function bf(){},
aw:function aw(){},
bg:function bg(){},
aI:function aI(){},
aJ:function aJ(){},
aK:function aK(){},
aL:function aL(){},
cL(a,b){var t=b.c
return t==null?b.c=A.aP(a,"d7",[b.x]):t},
di(a){var t=a.w
if(t===6||t===7)return A.di(a.x)
return t===11||t===12},
eu(a){return a.as},
cn(a){return A.ch(v.typeUniverse,a,!1)},
fP(a,b){var t,s,r,q,p
if(a==null)return null
t=b.y
s=a.Q
if(s==null)s=a.Q=new Map()
r=b.as
q=s.get(r)
if(q!=null)return q
p=A.S(v.typeUniverse,a.x,t,0)
s.set(r,p)
return p},
S(a0,a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.w
switch(a){case 5:case 1:case 2:case 3:case 4:return a1
case 6:t=a1.x
s=A.S(a0,t,a2,a3)
if(s===t)return a1
return A.dx(a0,s,!0)
case 7:t=a1.x
s=A.S(a0,t,a2,a3)
if(s===t)return a1
return A.dw(a0,s,!0)
case 8:r=a1.y
q=A.ag(a0,r,a2,a3)
if(q===r)return a1
return A.aP(a0,a1.x,q)
case 9:p=a1.x
o=A.S(a0,p,a2,a3)
n=a1.y
m=A.ag(a0,n,a2,a3)
if(o===p&&m===n)return a1
return A.cN(a0,o,m)
case 10:l=a1.x
k=a1.y
j=A.ag(a0,k,a2,a3)
if(j===k)return a1
return A.dy(a0,l,j)
case 11:i=a1.x
h=A.S(a0,i,a2,a3)
g=a1.y
f=A.fw(a0,g,a2,a3)
if(h===i&&f===g)return a1
return A.dv(a0,h,f)
case 12:e=a1.y
a3+=e.length
d=A.ag(a0,e,a2,a3)
p=a1.x
o=A.S(a0,p,a2,a3)
if(d===e&&o===p)return a1
return A.cO(a0,o,d,!0)
case 13:c=a1.x
if(c<a3)return a1
b=a2[c-a3]
if(b==null)return a1
return b
default:throw A.d(A.aU("Attempted to substitute unexpected RTI kind "+a))}},
ag(a,b,c,d){var t,s,r,q,p=b.length,o=A.ci(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.S(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
fx(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.ci(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.S(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
fw(a,b,c,d){var t,s=b.a,r=A.ag(a,s,c,d),q=b.b,p=A.ag(a,q,c,d),o=b.c,n=A.fx(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.bs()
t.a=r
t.b=p
t.c=n
return t},
e(a,b){a[v.arrayRti]=b
return a},
cl(a){var t=a.$S
if(t!=null){if(typeof t=="number")return A.fK(t)
return a.$S()}return null},
fO(a,b){var t
if(A.di(b))if(a instanceof A.U){t=A.cl(a)
if(t!=null)return t}return A.a5(a)},
a5(a){if(a instanceof A.h)return A.af(a)
if(Array.isArray(a))return A.F(a)
return A.cQ(J.a4(a))},
F(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
af(a){var t=a.$ti
return t!=null?t:A.cQ(a)},
cQ(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.fd(a,t)},
fd(a,b){var t=a instanceof A.U?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,s=A.eT(v.typeUniverse,t.name)
b.$ccache=s
return s},
fK(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.ch(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
fJ(a){return A.K(A.af(a))},
cU(a){var t=A.cl(a)
return A.K(t==null?A.a5(a):t)},
cR(a){var t
if(a instanceof A.aM)return A.fG(a.$r,a.a9())
t=a instanceof A.U?A.cl(a):null
if(t!=null)return t
if(u.R.b(a))return J.ec(a).a
if(Array.isArray(a))return A.F(a)
return A.a5(a)},
K(a){var t=a.r
return t==null?a.r=new A.cg(a):t},
fG(a,b){var t,s,r=b,q=r.length
if(q===0)return u.F
t=A.aR(v.typeUniverse,A.cR(r[0]),"@<0>")
for(s=1;s<q;++s)t=A.dA(v.typeUniverse,t,A.cR(r[s]))
return A.aR(v.typeUniverse,t,a)},
H(a){return A.K(A.ch(v.typeUniverse,a,!1))},
fc(a){var t=this
t.b=A.fv(t)
return t.b(a)},
fv(a){var t,s,r,q
if(a===u.K)return A.fm
if(A.a6(a))return A.fq
t=a.w
if(t===6)return A.fa
if(t===1)return A.dL
if(t===7)return A.fg
s=A.fu(a)
if(s!=null)return s
if(t===8){r=a.x
if(a.y.every(A.a6)){a.f="$i"+r
if(r==="k")return A.fk
if(a===u.m)return A.fj
return A.fp}}else if(t===10){q=A.fF(a.x,a.y)
return q==null?A.dL:q}return A.f8},
fu(a){if(a.w===8){if(a===u.S)return A.fh
if(a===u.i||a===u.H)return A.fl
if(a===u.N)return A.fo
if(a===u.y)return A.ck}return null},
fb(a){var t=this,s=A.f7
if(A.a6(t))s=A.f3
else if(t===u.K)s=A.f2
else if(A.ai(t)){s=A.f9
if(t===u.r)s=A.f_
else if(t===u.h)s=A.dF
else if(t===u.l)s=A.eW
else if(t===u.ae)s=A.cP
else if(t===u.I)s=A.eY
else if(t===u.d)s=A.f1}else if(t===u.S)s=A.eZ
else if(t===u.N)s=A.dE
else if(t===u.y)s=A.eV
else if(t===u.H)s=A.dD
else if(t===u.i)s=A.eX
else if(t===u.m)s=A.f0
t.a=s
return t.a(a)},
f8(a){var t=this
if(a==null)return A.ai(t)
return A.fQ(v.typeUniverse,A.fO(a,t),t)},
fa(a){if(a==null)return!0
return this.x.b(a)},
fp(a){var t,s=this
if(a==null)return A.ai(s)
t=s.f
if(a instanceof A.h)return!!a[t]
return!!J.a4(a)[t]},
fk(a){var t,s=this
if(a==null)return A.ai(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.f
if(a instanceof A.h)return!!a[t]
return!!J.a4(a)[t]},
fj(a){var t=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.h)return!!a[t.f]
return!0}if(typeof a=="function")return!0
return!1},
dK(a){if(typeof a=="object"){if(a instanceof A.h)return u.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
f7(a){var t=this
if(a==null){if(A.ai(t))return a}else if(t.b(a))return a
throw A.u(A.dH(a,t),new Error())},
f9(a){var t=this
if(a==null||t.b(a))return a
throw A.u(A.dH(a,t),new Error())},
dH(a,b){return new A.aN("TypeError: "+A.dp(a,A.A(b,null)))},
dp(a,b){return A.aY(a)+": type '"+A.A(A.cR(a),null)+"' is not a subtype of type '"+b+"'"},
D(a,b){return new A.aN("TypeError: "+A.dp(a,b))},
fg(a){var t=this
return t.x.b(a)||A.cL(v.typeUniverse,t).b(a)},
fm(a){return a!=null},
f2(a){if(a!=null)return a
throw A.u(A.D(a,"Object"),new Error())},
fq(a){return!0},
f3(a){return a},
dL(a){return!1},
ck(a){return!0===a||!1===a},
eV(a){if(!0===a)return!0
if(!1===a)return!1
throw A.u(A.D(a,"bool"),new Error())},
eW(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.u(A.D(a,"bool?"),new Error())},
eX(a){if(typeof a=="number")return a
throw A.u(A.D(a,"double"),new Error())},
eY(a){if(typeof a=="number")return a
if(a==null)return a
throw A.u(A.D(a,"double?"),new Error())},
fh(a){return typeof a=="number"&&Math.floor(a)===a},
eZ(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.u(A.D(a,"int"),new Error())},
f_(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.u(A.D(a,"int?"),new Error())},
fl(a){return typeof a=="number"},
dD(a){if(typeof a=="number")return a
throw A.u(A.D(a,"num"),new Error())},
cP(a){if(typeof a=="number")return a
if(a==null)return a
throw A.u(A.D(a,"num?"),new Error())},
fo(a){return typeof a=="string"},
dE(a){if(typeof a=="string")return a
throw A.u(A.D(a,"String"),new Error())},
dF(a){if(typeof a=="string")return a
if(a==null)return a
throw A.u(A.D(a,"String?"),new Error())},
f0(a){if(A.dK(a))return a
throw A.u(A.D(a,"JSObject"),new Error())},
f1(a){if(a==null)return a
if(A.dK(a))return a
throw A.u(A.D(a,"JSObject?"),new Error())},
dN(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.A(a[r],b)
return t},
ft(a,b){var t,s,r,q,p,o,n=a.x,m=a.y
if(""===n)return"("+A.dN(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.A(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
dI(a0,a1,a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", ",a=null
if(a2!=null){t=a2.length
if(a1==null)a1=A.e([],u.s)
else a=a1.length
s=a1.length
for(r=t;r>0;--r)a1.push("T"+(s+r))
for(q=u.O,p="<",o="",r=0;r<t;++r,o=b){p=p+o+a1[a1.length-1-r]
n=a2[r]
m=n.w
if(!(m===2||m===3||m===4||m===5||n===q))p+=" extends "+A.A(n,a1)}p+=">"}else p=""
q=a0.x
l=a0.y
k=l.a
j=k.length
i=l.b
h=i.length
g=l.c
f=g.length
e=A.A(q,a1)
for(d="",c="",r=0;r<j;++r,c=b)d+=c+A.A(k[r],a1)
if(h>0){d+=c+"["
for(c="",r=0;r<h;++r,c=b)d+=c+A.A(i[r],a1)
d+="]"}if(f>0){d+=c+"{"
for(c="",r=0;r<f;r+=3,c=b){d+=c
if(g[r+1])d+="required "
d+=A.A(g[r+2],a1)+" "+g[r]}d+="}"}if(a!=null){a1.toString
a1.length=a}return p+"("+d+") => "+e},
A(a,b){var t,s,r,q,p,o,n=a.w
if(n===5)return"erased"
if(n===2)return"dynamic"
if(n===3)return"void"
if(n===1)return"Never"
if(n===4)return"any"
if(n===6){t=a.x
s=A.A(t,b)
r=t.w
return(r===11||r===12?"("+s+")":s)+"?"}if(n===7)return"FutureOr<"+A.A(a.x,b)+">"
if(n===8){q=A.fy(a.x)
p=a.y
return p.length>0?q+("<"+A.dN(p,b)+">"):q}if(n===10)return A.ft(a,b)
if(n===11)return A.dI(a,b,null)
if(n===12)return A.dI(a.x,b,a.y)
if(n===13){o=a.x
return b[b.length-1-o]}return"?"},
fy(a){var t=A.dW(a)
if(t!=null)return t
return"minified:"+a},
eU(a,b){var t=a.tR[b]
while(typeof t=="string")t=a.tR[t]
return t},
eT(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.ch(a,b,!1)
else if(typeof n=="number"){t=n
s=A.aQ(a,5,"#")
r=A.ci(t)
for(q=0;q<t;++q)r[q]=s
p=A.aP(a,b,r)
o[b]=p
return p}else return n},
eS(a,b){return A.dB(a.tR,b)},
eR(a,b){return A.dB(a.eT,b)},
ch(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.dz(a,null,b,!1)
s.set(b,t)
return t},
aR(a,b,c){var t,s,r=b.z
if(r==null)r=b.z=new Map()
t=r.get(c)
if(t!=null)return t
s=A.dz(a,b,c,!0)
r.set(c,s)
return s},
dA(a,b,c){var t,s,r,q=b.Q
if(q==null)q=b.Q=new Map()
t=c.as
s=q.get(t)
if(s!=null)return s
r=A.cN(a,b,c.w===9?c.y:[c])
q.set(t,r)
return r},
dz(a,b,c,d){return A.eK(A.eE(a,b,c,d))},
R(a,b){b.a=A.fb
b.b=A.fc
return b},
aQ(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.E(null,null)
t.w=b
t.as=c
s=A.R(a,t)
a.eC.set(c,s)
return s},
dx(a,b,c){var t,s=b.as+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.eP(a,b,s,c)
a.eC.set(s,t)
return t},
eP(a,b,c,d){var t,s,r
if(d){t=b.w
s=!0
if(!A.a6(b))if(!(b===u.P||b===u.T))if(t!==6)s=t===7&&A.ai(b.x)
if(s)return b
else if(t===1)return u.P}r=new A.E(null,null)
r.w=6
r.x=b
r.as=c
return A.R(a,r)},
dw(a,b,c){var t,s=b.as+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.eN(a,b,s,c)
a.eC.set(s,t)
return t},
eN(a,b,c,d){var t,s
if(d){t=b.w
if(A.a6(b)||b===u.K)return b
else if(t===1)return A.aP(a,"d7",[b])
else if(b===u.P||b===u.T)return u.c}s=new A.E(null,null)
s.w=7
s.x=b
s.as=c
return A.R(a,s)},
eQ(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.E(null,null)
t.w=13
t.x=b
t.as=r
s=A.R(a,t)
a.eC.set(r,s)
return s},
aO(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].as
return t},
eM(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].as}return t},
aP(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.aO(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.E(null,null)
s.w=8
s.x=b
s.y=c
if(c.length>0)s.c=c[0]
s.as=q
r=A.R(a,s)
a.eC.set(q,r)
return r},
cN(a,b,c){var t,s,r,q,p,o
if(b.w===9){t=b.x
s=b.y.concat(c)}else{s=c
t=b}r=t.as+(";<"+A.aO(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.E(null,null)
p.w=9
p.x=t
p.y=s
p.as=r
o=A.R(a,p)
a.eC.set(r,o)
return o},
dy(a,b,c){var t,s,r="+"+(b+"("+A.aO(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.E(null,null)
t.w=10
t.x=b
t.y=c
t.as=r
s=A.R(a,t)
a.eC.set(r,s)
return s},
dv(a,b,c){var t,s,r,q,p,o=b.as,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.aO(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.aO(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.eM(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.E(null,null)
q.w=11
q.x=b
q.y=c
q.as=s
p=A.R(a,q)
a.eC.set(s,p)
return p},
cO(a,b,c,d){var t,s=b.as+("<"+A.aO(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.eO(a,b,c,s,d)
a.eC.set(s,t)
return t},
eO(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.ci(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.w===1){s[q]=p;++r}}if(r>0){o=A.S(a,b,s,0)
n=A.ag(a,c,s,0)
return A.cO(a,o,n,c!==n)}}m=new A.E(null,null)
m.w=12
m.x=b
m.y=c
m.as=d
return A.R(a,m)},
eE(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
eK(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.eG(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.dt(a,s,m,l,!1)
else if(r===46)s=A.dt(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.a1(a.u,a.e,l.pop()))
break
case 94:l.push(A.eQ(a.u,l.pop()))
break
case 35:l.push(A.aQ(a.u,5,"#"))
break
case 64:l.push(A.aQ(a.u,2,"@"))
break
case 126:l.push(A.aQ(a.u,3,"~"))
break
case 60:l.push(a.p)
a.p=l.length
break
case 62:A.eI(a,l)
break
case 38:A.eH(a,l)
break
case 63:q=a.u
l.push(A.dx(q,A.a1(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.dw(q,A.a1(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.eF(a,l)
break
case 91:l.push(a.p)
a.p=l.length
break
case 93:p=l.splice(a.p)
A.du(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-1)
break
case 123:l.push(a.p)
a.p=l.length
break
case 125:p=l.splice(a.p)
A.eL(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-2)
break
case 43:o=m.indexOf("(",s)
l.push(m.substring(s,o))
l.push(-4)
l.push(a.p)
a.p=l.length
s=o+1
break
default:throw"Bad character "+r}}}n=l.pop()
return A.a1(a.u,a.e,n)},
eG(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
dt(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.w===9)p=p.x
o=A.eU(t,p.x)[q]
if(o==null)A.bx('No "'+q+'" in "'+A.eu(p)+'"')
d.push(A.aR(t,p,o))}else d.push(q)
return n},
eI(a,b){var t,s=a.u,r=A.ds(a,b),q=b.pop()
if(typeof q=="string")b.push(A.aP(s,q,r))
else{t=A.a1(s,a.e,q)
switch(t.w){case 11:b.push(A.cO(s,t,r,a.n))
break
default:b.push(A.cN(s,t,r))
break}}},
eF(a,b){var t,s,r,q=a.u,p=b.pop(),o=null,n=null
if(typeof p=="number")switch(p){case-1:o=b.pop()
break
case-2:n=b.pop()
break
default:b.push(p)
break}else b.push(p)
t=A.ds(a,b)
p=b.pop()
switch(p){case-3:p=b.pop()
if(o==null)o=q.sEA
if(n==null)n=q.sEA
s=A.a1(q,a.e,p)
r=new A.bs()
r.a=t
r.b=o
r.c=n
b.push(A.dv(q,s,r))
return
case-4:b.push(A.dy(q,b.pop(),t))
return
default:throw A.d(A.aU("Unexpected state under `()`: "+A.n(p)))}},
eH(a,b){var t=b.pop()
if(0===t){b.push(A.aQ(a.u,1,"0&"))
return}if(1===t){b.push(A.aQ(a.u,4,"1&"))
return}throw A.d(A.aU("Unexpected extended operation "+A.n(t)))},
ds(a,b){var t=b.splice(a.p)
A.du(a.u,a.e,t)
a.p=b.pop()
return t},
a1(a,b,c){if(typeof c=="string")return A.aP(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.eJ(a,b,c)}else return c},
du(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.a1(a,b,c[t])},
eL(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.a1(a,b,c[t])},
eJ(a,b,c){var t,s,r=b.w
if(r===9){if(c===0)return b.x
t=b.y
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.x
r=b.w}else if(c===0)return b
if(r!==8)throw A.d(A.aU("Indexed base must be an interface type"))
t=b.y
if(c<=t.length)return t[c-1]
throw A.d(A.aU("Bad index "+c+" for "+b.h(0)))},
fQ(a,b,c){var t,s=b.d
if(s==null)s=b.d=new Map()
t=s.get(c)
if(t==null){t=A.q(a,b,null,c,null)
s.set(c,t)}return t},
q(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(A.a6(d))return!0
t=b.w
if(t===4)return!0
if(A.a6(b))return!1
if(b.w===1)return!0
s=t===13
if(s)if(A.q(a,c[b.x],c,d,e))return!0
r=d.w
q=u.P
if(b===q||b===u.T){if(r===7)return A.q(a,b,c,d.x,e)
return d===q||d===u.T||r===6}if(d===u.K){if(t===7)return A.q(a,b.x,c,d,e)
return t!==6}if(t===7){if(!A.q(a,b.x,c,d,e))return!1
return A.q(a,A.cL(a,b),c,d,e)}if(t===6)return A.q(a,q,c,d,e)&&A.q(a,b.x,c,d,e)
if(r===7){if(A.q(a,b,c,d.x,e))return!0
return A.q(a,b,c,A.cL(a,d),e)}if(r===6)return A.q(a,b,c,q,e)||A.q(a,b,c,d.x,e)
if(s)return!1
q=t!==11
if((!q||t===12)&&d===u.Z)return!0
p=t===10
if(p&&d===u.L)return!0
if(r===12){if(b===u.g)return!0
if(t!==12)return!1
o=b.y
n=d.y
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.q(a,k,c,j,e)||!A.q(a,j,e,k,c))return!1}return A.dJ(a,b.x,c,d.x,e)}if(r===11){if(b===u.g)return!0
if(q)return!1
return A.dJ(a,b,c,d,e)}if(t===8){if(r!==8)return!1
return A.fi(a,b,c,d,e)}if(p&&r===10)return A.fn(a,b,c,d,e)
return!1},
dJ(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.q(a2,a3.x,a4,a5.x,a6))return!1
t=a3.y
s=a5.y
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!A.q(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!A.q(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!A.q(a2,l[i],a6,h,a4))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
a1=g[c-2]
if(a0<a){if(a1)return!1
continue}h=f[b+1]
if(a1&&!h)return!1
h=g[c-1]
if(!A.q(a2,f[b+2],a6,h,a4))return!1
break}}while(c<e){if(g[c+1])return!1
c+=3}return!0},
fi(a,b,c,d,e){var t,s,r,q,p,o=b.x,n=d.x
while(o!==n){t=a.tR[o]
if(t==null)return!1
if(typeof t=="string"){o=t
continue}s=t[n]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.aR(a,b,s[p])
return A.dC(a,q,null,c,d.y,e)}return A.dC(a,b.y,null,c,d.y,e)},
dC(a,b,c,d,e,f){var t,s=b.length
for(t=0;t<s;++t)if(!A.q(a,b[t],d,e[t],f))return!1
return!0},
fn(a,b,c,d,e){var t,s=b.y,r=d.y,q=s.length
if(q!==r.length)return!1
if(b.x!==d.x)return!1
for(t=0;t<q;++t)if(!A.q(a,s[t],c,r[t],e))return!1
return!0},
ai(a){var t=a.w,s=!0
if(!(a===u.P||a===u.T))if(!A.a6(a))if(t!==6)s=t===7&&A.ai(a.x)
return s},
a6(a){var t=a.w
return t===2||t===3||t===4||t===5||a===u.O},
dB(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
ci(a){return a>0?new Array(a):v.typeUniverse.sEA},
E:function E(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
bs:function bs(){this.c=this.b=this.a=null},
cg:function cg(a){this.a=a},
br:function br(){},
aN:function aN(a){this.a=a},
dq(a,b){var t=a[b]
return t===a?null:t},
dr(a,b,c){if(c==null)a[b]=a
else a[b]=c},
eB(){var t=Object.create(null)
A.dr(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
cH(a,b,c){return A.fH(a,new A.W(b.i("@<0>").F(c).i("W<1,2>")))},
dc(a,b){return new A.W(a.i("@<0>").F(b).i("W<1,2>"))},
dd(a){var t,s
if(A.cW(a))return"{...}"
t=new A.aB("")
try{s={}
$.a3.push(a)
t.a+="{"
s.a=!0
a.I(0,new A.bN(s,t))
t.a+="}"}finally{$.a3.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
aF:function aF(){},
aH:function aH(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
aG:function aG(a,b){this.a=a
this.$ti=b},
bt:function bt(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
m:function m(){},
x:function x(){},
bN:function bN(a,b){this.a=a
this.b=b},
fs(a,b){var t,s,r,q=null
try{q=JSON.parse(a)}catch(s){t=A.cZ(s)
r=String(t)
throw A.d(new A.bB(r))}r=A.cj(q)
return r},
cj(a){var t
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.bu(a,Object.create(null))
for(t=0;t<a.length;++t)a[t]=A.cj(a[t])
return a},
db(a,b,c){return new A.as(a,b)},
f5(a){return a.J()},
eC(a,b){return new A.cc(a,[],A.fE())},
eD(a,b,c){var t,s=new A.aB(""),r=A.eC(s,b)
r.V(a)
t=s.a
return t.charCodeAt(0)==0?t:t},
bu:function bu(a,b){this.a=a
this.b=b
this.c=null},
bv:function bv(a){this.a=a},
aV:function aV(){},
aX:function aX(){},
as:function as(a,b){this.a=a
this.b=b},
b4:function b4(a,b){this.a=a
this.b=b},
bI:function bI(){},
bK:function bK(a){this.b=a},
bJ:function bJ(a){this.a=a},
cd:function cd(){},
ce:function ce(a,b){this.a=a
this.b=b},
cc:function cc(a,b,c){this.c=a
this.a=b
this.b=c},
aa(a,b,c,d){var t,s=c?J.en(a,d):J.em(a,d)
if(a!==0&&b!=null)for(t=0;t<s.length;++t)s[t]=b
return s},
ep(a,b,c){var t,s,r=A.e([],c.i("l<0>"))
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.G)(a),++s)r.push(a[s])
r.$flags=1
return r},
bM(a,b){var t,s
if(Array.isArray(a))return A.e(a.slice(0),b.i("l<0>"))
t=A.e([],b.i("l<0>"))
for(s=J.d1(a);s.k();)t.push(s.gl())
return t},
dj(a,b,c){var t=J.d1(b)
if(!t.k())return a
if(c.length===0){do a+=A.n(t.gl())
while(t.k())}else{a+=A.n(t.gl())
while(t.k())a=a+c+A.n(t.gl())}return a},
aY(a){if(typeof a=="number"||A.ck(a)||a==null)return J.aS(a)
if(typeof a=="string")return JSON.stringify(a)
return A.dh(a)},
aU(a){return new A.aT(a)},
cC(a){return new A.T(!1,null,null,a)},
ad(a,b,c,d,e){return new A.bl(b,c,!0,a,d,"Invalid value")},
et(a,b,c){if(0>a||a>c)throw A.d(A.ad(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.ad(b,a,c,"end",null))
return b}return c},
cK(a,b){return a},
d8(a,b,c,d){return new A.aZ(b,!0,a,d,"Index out of range")},
bq(a){return new A.aE(a)},
dn(a){return new A.bo(a)},
M(a){return new A.aW(a)},
el(a,b,c){var t,s
if(A.cW(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=A.e([],u.s)
$.a3.push(a)
try{A.fr(a,t)}finally{$.a3.pop()}s=A.dj(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
d9(a,b,c){var t,s
if(A.cW(a))return b+"..."+c
t=new A.aB(b)
$.a3.push(a)
try{s=t
s.a=A.dj(s.a,a,", ")}finally{$.a3.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
fr(a,b){var t,s,r,q,p,o,n,m=a.gq(a),l=0,k=0
for(;;){if(!(l<80||k<3))break
if(!m.k())return
t=A.n(m.gl())
b.push(t)
l+=t.length+2;++k}if(!m.k()){if(k<=5)return
s=b.pop()
r=b.pop()}else{q=m.gl();++k
if(!m.k()){if(k<=4){b.push(A.n(q))
return}s=A.n(q)
r=b.pop()
l+=s.length+2}else{p=m.gl();++k
for(;m.k();q=p,p=o){o=m.gl();++k
if(k>100){for(;;){if(!(l>75&&k>3))break
l-=b.pop().length+2;--k}b.push("...")
return}}r=A.n(q)
s=A.n(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
for(;;){if(!(l>80&&b.length>3))break
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)b.push(n)
b.push(r)
b.push(s)},
df(a,b,c,d){var t
if(B.d===c){t=J.C(a)
b=J.C(b)
return A.cM(A.Q(A.Q($.cA(),t),b))}if(B.d===d){t=J.C(a)
b=J.C(b)
c=J.C(c)
return A.cM(A.Q(A.Q(A.Q($.cA(),t),b),c))}t=J.C(a)
b=J.C(b)
c=J.C(c)
d=J.C(d)
d=A.cM(A.Q(A.Q(A.Q(A.Q($.cA(),t),b),c),d))
return d},
o:function o(){},
aT:function aT(a){this.a=a},
aD:function aD(){},
T:function T(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bl:function bl(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
aZ:function aZ(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aE:function aE(a){this.a=a},
bo:function bo(a){this.a=a},
bn:function bn(a){this.a=a},
aW:function aW(a){this.a=a},
aA:function aA(){},
ca:function ca(a){this.a=a},
bB:function bB(a){this.a=a},
c:function c(){},
a_:function a_(){},
h:function h(){},
aB:function aB(a){this.a=a},
f4(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
dM(a){return a==null||A.ck(a)||typeof a=="number"||typeof a=="string"||u.U.b(a)||u._.b(a)||u.e.b(a)||u.W.b(a)||u.G.b(a)||u.k.b(a)||u.M.b(a)||u.D.b(a)||u.q.b(a)||u.J.b(a)||u.Y.b(a)},
dR(a){if(A.dM(a))return a
return new A.cu(new A.aH(u.A)).$1(a)},
cu:function cu(a){this.a=a},
cI(a,b,c){return new A.j(a,b,c)},
er(a){var t,s,r,q,p,o,n
for(t=$.cz(),s=0;s<28;++s){r=t[s]
q=r.b
p=q===8
o=p&&r.c.length>1?B.a.T(r.c,"+"):null
q=""+q
n=""+r.a
if(o==null)q=n+"/"+q
else{p=p&&r.c.length>1?B.a.T(r.c,"+"):null
p=n+"/"+q+":"+A.n(p)
q=p}if(q===a)return r}for(t=$.cz(),s=0;s<28;++s){r=t[s]
if(""+r.a+"/"+r.b===a)return r}return B.a.gR($.cz())},
j:function j(a,b,c){this.a=a
this.b=b
this.c=c},
es(a,b){var t,s,r,q,p,o,n=new Float64Array(A.dG(a))
for(t=[3520,2640],s=u.n,r=0;r<2;++r){q=6.283185307179586*t[r]/b
p=Math.sin(q)/6
o=-2*Math.cos(q)
n=A.cJ(n,A.e([1,o,1,1+p,o,1-p],s))}return new Float32Array(A.dG(A.cJ(A.cJ(n,A.de(2000,b,0.5412)),A.de(2000,b,1.3066))))},
de(a,b,c){var t=6.283185307179586*a/b,s=Math.sin(t)/(2*c),r=Math.cos(t),q=1-r,p=q/2
return A.e([p,q,p,1+s,-2*r,1-s],u.n)},
cJ(a,b){var t,s,r,q,p,o,n,m,l=b[0],k=b[3],j=l/k,i=b[1]/k,h=b[2]/k,g=b[4]/k,f=b[5]/k
k=a.length
t=new Float64Array(k)
for(s=0,r=0,q=0,p=0,o=0;o<k;++o,p=q,q=m,r=s,s=n){n=a[o]
m=j*n+i*s+h*r-g*q-f*p
t[o]=m}return t},
bO:function bO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bQ:function bQ(a,b){this.a=a
this.b=b},
bP:function bP(){},
by:function by(a){this.a=a},
a2(a,b){var t=Math.pow(10,b)
return B.b.v(a*t)/t},
dl(a){return 69+12*Math.log(a/440)/0.6931471805599453},
ew(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.e([],u.X)
for(t=u.n,s=0;r=a.length,s<r;){q=a[s]
p=q.c
o=B.b.v(p);++s
n=s<r?a[s]:null
m=f.length!==0?B.a.gu(f):null
l=!1
if(m!=null)if(n!=null){r=m.c
k=n.c
r=p>Math.min(r,k)&&p<Math.max(r,k)
l=r}j=!1
if(Math.abs(p-o)>0.3)if(q.b<0.2){if(n!=null)r=Math.abs(n.c-p)<1.2||l
else r=j
j=r}r=q.b
if(r>=0.09&&!j){f.push(q)
continue}i=s<a.length?a[s]:null
o=i!=null
if(o&&i.a-(q.a+r)<0.03&&i.b>=0.09){r=q.a
a[s]=new A.w(r,i.a+i.b-r,i.c,Math.max(q.d,i.d))
continue}h=f.length!==0&&Math.abs(B.a.gu(f).c-p)<0.5&&q.a-(B.a.gu(f).a+B.a.gu(f).b)<0.12
if(f.length!==0)p=q.a-(B.a.gu(f).a+B.a.gu(f).b)<0.03||h
else p=!1
if(p){g=B.a.gu(f)
p=g.a
f[f.length-1]=new A.w(p,q.a+r-p,g.c,g.d)
continue}r=A.e([],t)
if(f.length!==0)r.push(B.a.gu(f).c)
if(o)r.push(i.c)
if(r.length===0||B.a.aG(r,new A.bW(q)))f.push(q)}return f},
ey(a){var t,s,r,q,p,o,n,m,l=A.e([],u.X)
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,A.G)(a),++r){q=a[r]
if(l.length!==0){p=B.a.gu(l)
o=q.a
n=p.a
m=p.c
if(Math.abs(m-q.c)<0.5&&o-(n+p.b)<0.6&&q.d<0.6*s){l[l.length-1]=new A.w(n,o+q.b-n,m,p.d)
continue}}l.push(q)
s=q.d}return l},
ex(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(a.length<3)return a
t=A.F(a).i("z<1,b>")
s=A.bM(new A.z(a,new A.bX(),t),t.i("v.E"))
B.a.H(s)
r=s[B.b.G(s.length*0.75)]
t=u.X
q=A.e([],t)
for(p=a.length,o=r*0.2,n=0;n<a.length;a.length===p||(0,A.G)(a),++n){m=a[n]
if(!(m.b<0.25&&m.d<o))q.push(m)}l=A.e([],t)
for(t=u.w,p=u.E,k=0;o=q.length,k<o;){m=q[k]
j=k>0?q[k-1]:null;++k
i=k<o?q[k]:null
o=j==null
if(o||m.a-(j.a+j.b)>0.3)h=i==null||i.a-(m.a+m.b)>0.3
else h=!1
g=new A.ax(A.e([j,i],t),p).aO(0,new A.bY(m))
f=!1
if(m.b<0.15)if(h)if(g)o=!o||i!=null
else o=f
else o=f
else o=f
if(o)continue
l.push(m)}return l},
dk(a){var t=A.bM(a,u.i)
B.a.H(t)
return t[t.length/2|0]},
eA(a){var t,s,r,q,p,o,n,m,l,k=A.e([],u.n)
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.G)(a),++s){r=a[s]
if(r.b>=0.08){q=r.c
k.push((q-B.b.v(q))*100)}}t=k.length
if(t===0)return 0
for(p=0,o=1/0,n=-50;n<=50;n+=0.5){for(m=0,s=0;s<t;++s){l=B.b.a5(k[s]-n,100)
if(l>50)l-=100
m+=Math.min(l*l,400)}m+=Math.abs(n)*0.01
if(m<o){o=m
p=n}}return p},
ez(a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a3.length
if(a2<4)return new A.I(0.6,a2===0?0:B.a.gR(a3).a)
t=B.b.P((B.a.gu(a3).a+1)/0.01)+1
s=new Float64Array(t)
for(a2=a3.length,r=0;r<a3.length;a3.length===a2||(0,A.G)(a3),++r){q=a3[r]
p=B.b.v(q.a/0.01)
for(o=q.d,n=-3;n<=3;++n){m=p+n
if(m>=0&&m<t)s[m]=s[m]+Math.exp(-(n*n)/4.5)*(0.5+Math.sqrt(o))}}l=new A.c2(t,s)
for(k=0.6,j=-1,i=50;i<=200;i+=0.5){h=60/i
g=Math.exp(-Math.pow(Math.log(i/100)/0.6931471805599453,2)/0.5)
f=(l.$1(h)+0.5*l.$1(2*h)+0.5*l.$1(h/2)+0.25*l.$1(h/4))*g
if(f>j){j=f
k=h}}e=B.a.gR(a3).a
for(a2=A.ev(a3,0,A.fB(16,"count",u.S),A.F(a3).c),o=a2.$ti,a2=new A.P(a2,a2.gj(0),o.i("P<v.E>")),o=o.i("v.E"),d=-1;a2.k();){m=a2.d
if(m==null)m=o.a(m)
for(c=a3.length,b=m.a,a=0,r=0;r<a3.length;a3.length===c||(0,A.G)(a3),++r){q=a3[r]
a0=(q.a-b)/k
a1=Math.abs(a0-B.b.v(a0))
a+=Math.exp(-a1*a1/0.01)*(0.5+Math.sqrt(q.d))}if(a>d+1e-9){d=a
e=b}}return new A.I(k,e)},
w:function w(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c3:function c3(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
bV:function bV(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
c0:function c0(){},
c1:function c1(a,b){this.a=a
this.b=b},
c_:function c_(a,b,c){this.a=a
this.b=b
this.c=c},
bW:function bW(a){this.a=a},
bX:function bX(){},
bY:function bY(a){this.a=a},
bZ:function bZ(){},
c2:function c2(a,b){this.a=a
this.b=b},
a0:function a0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fS(){var t,s=v.G.self,r=new A.cv()
if(typeof r=="function")A.bx(A.cC("Attempting to rewrap a JS function."))
t=function(a,b){return function(c){return a(b,c,arguments.length)}}(A.f4,r)
t[$.d_()]=r
s.onmessage=t},
cv:function cv(){},
dW(a){return v.mangledGlobalNames[a]},
fX(a){throw A.u(new A.b5("Field '"+a+"' has been assigned during initialization."),new Error())},
dT(a,b){return Math.min(a,b)},
dS(a,b){return Math.max(a,b)}},B={}
var w=[A,J,B]
var $={}
A.cF.prototype={}
J.b_.prototype={
B(a,b){return a===b},
gp(a){return A.bj(a)},
h(a){return"Instance of '"+A.bk(a)+"'"},
gm(a){return A.K(A.cQ(this))}}
J.b1.prototype={
h(a){return String(a)},
gp(a){return a?519018:218159},
gm(a){return A.K(u.y)},
$ii:1,
$iB:1}
J.ao.prototype={
B(a,b){return null==b},
h(a){return"null"},
gp(a){return 0},
$ii:1}
J.aq.prototype={$ip:1}
J.O.prototype={
gp(a){return 0},
h(a){return String(a)}}
J.bi.prototype={}
J.ae.prototype={}
J.N.prototype={
h(a){var t=a[$.dY()]
if(t==null)t=a[$.d_()]
if(t==null)return this.ak(a)
return"JavaScript function for "+J.aS(t)}}
J.ap.prototype={
gp(a){return 0},
h(a){return String(a)}}
J.ar.prototype={
gp(a){return 0},
h(a){return String(a)}}
J.l.prototype={
aF(a,b){var t
a.$flags&1&&A.cY(a,"addAll",2)
for(t=b.gq(b);t.k();)a.push(t.gl())},
aI(a){a.$flags&1&&A.cY(a,"clear","clear")
a.length=0},
U(a,b,c){return new A.z(a,b,A.F(a).i("@<1>").F(c).i("z<1,2>"))},
T(a,b){var t,s=A.aa(a.length,"",!1,u.N)
for(t=0;t<a.length;++t)s[t]=A.n(a[t])
return s.join(b)},
a4(a,b){var t,s,r=a.length
if(r===0)throw A.d(A.bG())
t=a[0]
for(s=1;s<r;++s){t=b.$2(t,a[s])
if(r!==a.length)throw A.d(A.M(a))}return t},
C(a,b){return a[b]},
W(a,b,c){if(b<0||b>a.length)throw A.d(A.ad(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw A.d(A.ad(c,b,a.length,"end",null))
if(b===c)return A.e([],A.F(a))
return A.e(a.slice(b,c),A.F(a))},
aj(a,b){return this.W(a,b,null)},
gR(a){if(a.length>0)return a[0]
throw A.d(A.bG())},
gu(a){var t=a.length
if(t>0)return a[t-1]
throw A.d(A.bG())},
aG(a,b){var t,s=a.length
for(t=0;t<s;++t){if(b.$1(a[t]))return!0
if(a.length!==s)throw A.d(A.M(a))}return!1},
H(a){var t,s,r,q,p
a.$flags&2&&A.cY(a,"sort")
t=a.length
if(t<2)return
if(t===2){s=a[0]
r=a[1]
if(J.da(s,r)>0){a[0]=r
a[1]=s}return}q=0
if(A.F(a).c.b(null))for(p=0;p<a.length;++p)if(a[p]===void 0){a[p]=null;++q}a.sort(A.fC(J.fe(),2))
if(q>0)this.az(a,q)},
az(a,b){var t,s=a.length
for(;t=s-1,s>0;s=t)if(a[t]===null){a[t]=void 0;--b
if(b===0)break}},
gag(a){return a.length!==0},
h(a){return A.d9(a,"[","]")},
gq(a){return new J.L(a,a.length,A.F(a).i("L<1>"))},
gp(a){return A.bj(a)},
gj(a){return a.length},
aP(a,b){var t
if(0>=a.length)return-1
for(t=0;t<a.length;++t)if(b.$1(a[t]))return t
return-1},
$if:1,
$ic:1,
$ik:1}
J.b0.prototype={
aT(a){var t,s,r
if(!Array.isArray(a))return null
t=a.$flags|0
if((t&4)!==0)s="const, "
else if((t&2)!==0)s="unmodifiable, "
else s=(t&1)!==0?"fixed, ":""
r="Instance of '"+A.bk(a)+"'"
if(s==="")return r
return r+" ("+s+"length: "+a.length+")"}}
J.bH.prototype={}
J.L.prototype={
gl(){var t=this.d
return t==null?this.$ti.c.a(t):t},
k(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw A.d(A.G(r))
t=s.c
if(t>=q){s.d=null
return!1}s.d=r[t]
s.c=t+1
return!0}}
J.a9.prototype={
K(a,b){var t
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.ga3(b)
if(this.ga3(a)===t)return 0
if(this.ga3(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
ga3(a){return a===0?1/a<0:a<0},
aS(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw A.d(A.bq(""+a+".toInt()"))},
P(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw A.d(A.bq(""+a+".ceil()"))},
G(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw A.d(A.bq(""+a+".floor()"))},
v(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.bq(""+a+".round()"))},
aH(a,b,c){if(B.c.K(b,c)>0)throw A.d(A.fA(b))
if(this.K(a,b)<0)return b
if(this.K(a,c)>0)return c
return a},
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gp(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
a5(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
return t+b},
M(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.aD(a,b)},
aD(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw A.d(A.bq("Result of truncating division is "+A.n(t)+": "+A.n(a)+" ~/ "+b))},
ac(a,b){var t
if(a>0)t=this.aB(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
aB(a,b){return b>31?0:a>>>b},
gm(a){return A.K(u.H)},
$ib:1}
J.an.prototype={
gm(a){return A.K(u.S)},
$ii:1,
$ia:1}
J.b2.prototype={
gm(a){return A.K(u.i)},
$ii:1}
J.V.prototype={
L(a,b,c){return a.substring(b,A.et(b,c,a.length))},
K(a,b){var t
if(a===b)t=0
else t=a<b?-1:1
return t},
h(a){return a},
gp(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gm(a){return A.K(u.N)},
$ii:1,
$it:1}
A.b5.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.bS.prototype={}
A.f.prototype={}
A.v.prototype={
gq(a){var t=this
return new A.P(t,t.gj(t),A.af(t).i("P<v.E>"))},
gD(a){return this.gj(this)===0},
U(a,b,c){return new A.z(this,b,A.af(this).i("@<v.E>").F(c).i("z<1,2>"))}}
A.aC.prototype={
gao(){var t=this.a.length,s=this.c
if(s>t)return t
return s},
gaC(){var t=this.a.length,s=this.b
if(s>t)return t
return s},
gj(a){var t,s=this.a.length,r=this.b
if(r>=s)return 0
t=this.c
if(t>=s)return s-r
return t-r},
C(a,b){var t=this,s=t.gaC()+b,r=t.gao()
if(s>=r)throw A.d(A.d8(b,t.gj(0),t,"index"))
return J.d0(t.a,s)}}
A.P.prototype={
gl(){var t=this.d
return t==null?this.$ti.c.a(t):t},
k(){var t,s=this,r=s.a,q=J.dP(r),p=q.gj(r)
if(s.b!==p)throw A.d(A.M(r))
t=s.c
if(t>=p){s.d=null
return!1}s.d=q.C(r,t);++s.c
return!0}}
A.Z.prototype={
gq(a){var t=this.a
return new A.b7(t.gq(t),this.b,A.af(this).i("b7<1,2>"))}}
A.ak.prototype={$if:1}
A.b7.prototype={
k(){var t=this,s=t.b
if(s.k()){t.a=t.c.$1(s.gl())
return!0}t.a=null
return!1},
gl(){var t=this.a
return t==null?this.$ti.y[1].a(t):t}}
A.z.prototype={
gj(a){return J.eb(this.a)},
C(a,b){return this.b.$1(J.d0(this.a,b))}}
A.ax.prototype={
gq(a){var t=this.a
return new A.bh(new J.L(t,2,A.F(t).i("L<1>")))}}
A.bh.prototype={
k(){var t,s,r
this.b=null
for(t=this.a,s=t.$ti.c;t.k();){r=t.d
if(r==null)r=s.a(r)
if(r!=null){this.b=r
return!0}}return!1},
gl(){var t=this.b
return t==null?A.bx(A.bG()):t}}
A.al.prototype={}
A.I.prototype={$r:"+(1,2)",$s:1}
A.bC.prototype={
B(a,b){if(b==null)return!1
return b instanceof A.a8&&this.a.B(0,b.a)&&A.cU(this)===A.cU(b)},
gp(a){return A.df(this.a,A.cU(this),B.d,B.d)},
h(a){var t=B.a.T([A.K(this.$ti.c)],", ")
return this.a.h(0)+" with "+("<"+t+">")}}
A.a8.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.y[0])},
$S(){return A.fP(A.cl(this.a),this.$ti)}}
A.az.prototype={}
A.c4.prototype={
A(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
if(q==null)return null
t=Object.create(null)
s=r.b
if(s!==-1)t.arguments=q[s+1]
s=r.c
if(s!==-1)t.argumentsExpr=q[s+1]
s=r.d
if(s!==-1)t.expr=q[s+1]
s=r.e
if(s!==-1)t.method=q[s+1]
s=r.f
if(s!==-1)t.receiver=q[s+1]
return t}}
A.ay.prototype={
h(a){return"Null check operator used on a null value"}}
A.b3.prototype={
h(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+s.a
t=s.c
if(t==null)return r+q+"' ("+s.a+")"
return r+q+"' on '"+t+"' ("+s.a+")"}}
A.bp.prototype={
h(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
A.bR.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.U.prototype={
h(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.dX(s==null?"unknown":s)+"'"},
gaW(){return this},
$C:"$1",
$R:1,
$D:null}
A.bz.prototype={$C:"$2",$R:2}
A.bU.prototype={}
A.bT.prototype={
h(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.dX(t)+"'"}}
A.aj.prototype={
B(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.aj))return!1
return this.$_target===b.$_target&&this.a===b.a},
gp(a){return(A.cy(this.a)^A.bj(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bk(this.a)+"'")}}
A.bm.prototype={
h(a){return"RuntimeError: "+this.a}}
A.W.prototype={
gj(a){return this.a},
gD(a){return this.a===0},
gE(){return new A.X(this,this.$ti.i("X<1>"))},
t(a,b){var t,s,r,q,p=null
if(typeof b=="string"){t=this.b
if(t==null)return p
s=t[b]
r=s==null?p:s.b
return r}else if(typeof b=="number"&&(b&0x3fffffff)===b){q=this.c
if(q==null)return p
s=q[b]
r=s==null?p:s.b
return r}else return this.aQ(b)},
aQ(a){var t,s,r=this.d
if(r==null)return null
t=this.ar(r,a)
s=this.af(t,a)
if(s<0)return null
return t[s].b},
n(a,b,c){var t,s,r,q,p,o,n=this
if(typeof b=="string"){t=n.b
n.a6(t==null?n.b=n.a0():t,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){s=n.c
n.a6(s==null?n.c=n.a0():s,b,c)}else{r=n.d
if(r==null)r=n.d=n.a0()
q=J.C(b)&1073741823
p=r[q]
if(p==null)r[q]=[n.a1(b,c)]
else{o=n.af(p,b)
if(o>=0)p[o].b=c
else p.push(n.a1(b,c))}}},
I(a,b){var t=this,s=t.e,r=t.r
while(s!=null){b.$2(s.a,s.b)
if(r!==t.r)throw A.d(A.M(t))
s=s.c}},
a6(a,b,c){var t=a[b]
if(t==null)a[b]=this.a1(b,c)
else t.b=c},
a1(a,b){var t=this,s=new A.bL(a,b)
if(t.e==null)t.e=t.f=s
else t.f=t.f.c=s;++t.a
t.r=t.r+1&1073741823
return s},
ar(a,b){return a[J.C(b)&1073741823]},
af(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.cB(a[s].a,b))return s
return-1},
h(a){return A.dd(this)},
a0(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t}}
A.bL.prototype={}
A.X.prototype={
gj(a){return this.a.a},
gD(a){return this.a.a===0},
gq(a){var t=this.a
return new A.b6(t,t.r,t.e)}}
A.b6.prototype={
gl(){return this.d},
k(){var t,s=this,r=s.a
if(s.b!==r.r)throw A.d(A.M(r))
t=s.c
if(t==null){s.d=null
return!1}else{s.d=t.a
s.c=t.c
return!0}}}
A.cq.prototype={
$1(a){return this.a(a)},
$S:0}
A.cr.prototype={
$2(a,b){return this.a(a,b)},
$S:3}
A.cs.prototype={
$1(a){return this.a(a)},
$S:4}
A.aM.prototype={
h(a){return this.ad(!1)},
ad(a){var t,s,r,q,p,o=this.ap(),n=this.a9(),m=(a?"Record ":"")+"("
for(t=o.length,s="",r=0;r<t;++r,s=", "){m+=s
q=o[r]
if(typeof q=="string")m=m+q+": "
p=n[r]
m=a?m+A.dh(p):m+A.n(p)}m+=")"
return m.charCodeAt(0)==0?m:m},
ap(){var t,s=this.$s
while($.cf.length<=s)$.cf.push(null)
t=$.cf[s]
if(t==null){t=this.am()
$.cf[s]=t}return t},
am(){var t,s,r,q=this.$r,p=q.indexOf("("),o=q.substring(1,p),n=q.substring(p),m=n==="()"?0:n.replace(/[^,]/g,"").length+1,l=A.e(new Array(m),u.f)
for(t=0;t<m;++t)l[t]=t
if(o!==""){s=o.split(",")
t=s.length
for(r=m;t>0;){--r;--t
l[r]=s[t]}}l=A.ep(l,!1,u.K)
l.$flags=3
return l}}
A.bw.prototype={
a9(){return[this.a,this.b]},
B(a,b){if(b==null)return!1
return b instanceof A.bw&&this.$s===b.$s&&J.cB(this.a,b.a)&&J.cB(this.b,b.b)},
gp(a){return A.df(this.$s,this.a,this.b,B.d)}}
A.ab.prototype={
gm(a){return B.am},
$ii:1,
$icD:1}
A.av.prototype={}
A.b8.prototype={
gm(a){return B.an},
$ii:1,
$icE:1}
A.ac.prototype={
gj(a){return a.length},
$iy:1}
A.at.prototype={$if:1,$ic:1,$ik:1}
A.au.prototype={$if:1,$ic:1,$ik:1}
A.b9.prototype={
gm(a){return B.ao},
$ii:1,
$ibA:1}
A.ba.prototype={
gm(a){return B.ap},
$ii:1,
$iam:1}
A.bb.prototype={
gm(a){return B.aq},
$ii:1,
$ibD:1}
A.bc.prototype={
gm(a){return B.ar},
$ii:1,
$ibE:1}
A.bd.prototype={
gm(a){return B.as},
$ii:1,
$ibF:1}
A.be.prototype={
gm(a){return B.au},
$ii:1,
$ic6:1}
A.bf.prototype={
gm(a){return B.av},
$ii:1,
$ic7:1}
A.aw.prototype={
gm(a){return B.aw},
gj(a){return a.length},
$ii:1,
$ic8:1}
A.bg.prototype={
gm(a){return B.ax},
gj(a){return a.length},
$ii:1,
$ic9:1}
A.aI.prototype={}
A.aJ.prototype={}
A.aK.prototype={}
A.aL.prototype={}
A.E.prototype={
i(a){return A.aR(v.typeUniverse,this,a)},
F(a){return A.dA(v.typeUniverse,this,a)}}
A.bs.prototype={}
A.cg.prototype={
h(a){return A.A(this.a,null)}}
A.br.prototype={
h(a){return this.a}}
A.aN.prototype={}
A.aF.prototype={
gj(a){return this.a},
gD(a){return this.a===0},
gE(){return new A.aG(this,this.$ti.i("aG<1>"))},
aJ(a){var t,s
if(typeof a=="string"&&a!=="__proto__"){t=this.b
return t==null?!1:t[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){s=this.c
return s==null?!1:s[a]!=null}else return this.an(a)},
an(a){var t=this.d
if(t==null)return!1
return this.a_(this.a7(t,a),a)>=0},
t(a,b){var t,s,r
if(typeof b=="string"&&b!=="__proto__"){t=this.b
s=t==null?null:A.dq(t,b)
return s}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
s=r==null?null:A.dq(r,b)
return s}else return this.aq(b)},
aq(a){var t,s,r=this.d
if(r==null)return null
t=this.a7(r,a)
s=this.a_(t,a)
return s<0?null:t[s+1]},
n(a,b,c){var t,s,r,q=this,p=q.d
if(p==null)p=q.d=A.eB()
t=A.cy(b)&1073741823
s=p[t]
if(s==null){A.dr(p,t,[b,c]);++q.a
q.e=null}else{r=q.a_(s,b)
if(r>=0)s[r+1]=c
else{s.push(b,c);++q.a
q.e=null}}},
I(a,b){var t,s,r,q,p,o=this,n=o.a8()
for(t=n.length,s=o.$ti.y[1],r=0;r<t;++r){q=n[r]
p=o.t(0,q)
b.$2(q,p==null?s.a(p):p)
if(n!==o.e)throw A.d(A.M(o))}},
a8(){var t,s,r,q,p,o,n,m,l,k,j=this,i=j.e
if(i!=null)return i
i=A.aa(j.a,null,!1,u.z)
t=j.b
s=0
if(t!=null){r=Object.getOwnPropertyNames(t)
q=r.length
for(p=0;p<q;++p){i[s]=r[p];++s}}o=j.c
if(o!=null){r=Object.getOwnPropertyNames(o)
q=r.length
for(p=0;p<q;++p){i[s]=+r[p];++s}}n=j.d
if(n!=null){r=Object.getOwnPropertyNames(n)
q=r.length
for(p=0;p<q;++p){m=n[r[p]]
l=m.length
for(k=0;k<l;k+=2){i[s]=m[k];++s}}}return j.e=i},
a7(a,b){return a[A.cy(b)&1073741823]}}
A.aH.prototype={
a_(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2){r=a[s]
if(r==null?b==null:r===b)return s}return-1}}
A.aG.prototype={
gj(a){return this.a.a},
gD(a){return this.a.a===0},
gq(a){var t=this.a
return new A.bt(t,t.a8(),this.$ti.i("bt<1>"))}}
A.bt.prototype={
gl(){var t=this.d
return t==null?this.$ti.c.a(t):t},
k(){var t=this,s=t.b,r=t.c,q=t.a
if(s!==q.e)throw A.d(A.M(q))
else if(r>=s.length){t.d=null
return!1}else{t.d=s[r]
t.c=r+1
return!0}}}
A.m.prototype={
gq(a){return new A.P(a,a.length,A.a5(a).i("P<m.E>"))},
C(a,b){return a[b]},
gag(a){return a.length!==0},
U(a,b,c){return new A.z(a,b,A.a5(a).i("@<m.E>").F(c).i("z<1,2>"))},
h(a){return A.d9(a,"[","]")}}
A.x.prototype={
I(a,b){var t,s,r,q
for(t=this.gE(),t=t.gq(t),s=A.af(this).i("x.V");t.k();){r=t.gl()
q=this.t(0,r)
b.$2(r,q==null?s.a(q):q)}},
gj(a){var t=this.gE()
return t.gj(t)},
gD(a){var t=this.gE()
return t.gD(t)},
h(a){return A.dd(this)},
$iY:1}
A.bN.prototype={
$2(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=A.n(a)
s.a=(s.a+=t)+": "
t=A.n(b)
s.a+=t},
$S:1}
A.bu.prototype={
t(a,b){var t,s=this.b
if(s==null)return this.c.t(0,b)
else if(typeof b!="string")return null
else{t=s[b]
return typeof t=="undefined"?this.av(b):t}},
gj(a){return this.b==null?this.c.a:this.N().length},
gD(a){return this.gj(0)===0},
gE(){if(this.b==null){var t=this.c
return new A.X(t,t.$ti.i("X<1>"))}return new A.bv(this)},
I(a,b){var t,s,r,q,p=this
if(p.b==null)return p.c.I(0,b)
t=p.N()
for(s=0;s<t.length;++s){r=t[s]
q=p.b[r]
if(typeof q=="undefined"){q=A.cj(p.a[r])
p.b[r]=q}b.$2(r,q)
if(t!==p.c)throw A.d(A.M(p))}},
N(){var t=this.c
if(t==null)t=this.c=A.e(Object.keys(this.a),u.s)
return t},
av(a){var t
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
t=A.cj(this.a[a])
return this.b[a]=t}}
A.bv.prototype={
gj(a){return this.a.gj(0)},
C(a,b){var t=this.a
return t.b==null?t.gE().C(0,b):t.N()[b]},
gq(a){var t=this.a
if(t.b==null){t=t.gE()
t=t.gq(t)}else{t=t.N()
t=new J.L(t,t.length,A.F(t).i("L<1>"))}return t}}
A.aV.prototype={}
A.aX.prototype={}
A.as.prototype={
h(a){var t=A.aY(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+t}}
A.b4.prototype={
h(a){return"Cyclic error in JSON stringify"}}
A.bI.prototype={
aK(a,b){var t=A.fs(a,this.gaL().a)
return t},
aM(a,b){var t=A.eD(a,this.gaN().b,null)
return t},
gaN(){return B.B},
gaL(){return B.A}}
A.bK.prototype={}
A.bJ.prototype={}
A.cd.prototype={
ai(a){var t,s,r,q,p,o,n=a.length
for(t=this.c,s=0,r=0;r<n;++r){q=a.charCodeAt(r)
if(q>92){if(q>=55296){p=q&64512
if(p===55296){o=r+1
o=!(o<n&&(a.charCodeAt(o)&64512)===56320)}else o=!1
if(!o)if(p===56320){p=r-1
p=!(p>=0&&(a.charCodeAt(p)&64512)===55296)}else p=!1
else p=!0
if(p){if(r>s)t.a+=B.e.L(a,s,r)
s=r+1
p=A.r(92)
t.a+=p
p=A.r(117)
t.a+=p
p=A.r(100)
t.a+=p
p=q>>>8&15
p=A.r(p<10?48+p:87+p)
t.a+=p
p=q>>>4&15
p=A.r(p<10?48+p:87+p)
t.a+=p
p=q&15
p=A.r(p<10?48+p:87+p)
t.a+=p}}continue}if(q<32){if(r>s)t.a+=B.e.L(a,s,r)
s=r+1
p=A.r(92)
t.a+=p
switch(q){case 8:p=A.r(98)
t.a+=p
break
case 9:p=A.r(116)
t.a+=p
break
case 10:p=A.r(110)
t.a+=p
break
case 12:p=A.r(102)
t.a+=p
break
case 13:p=A.r(114)
t.a+=p
break
default:p=A.r(117)
t.a+=p
p=A.r(48)
t.a=(t.a+=p)+p
p=q>>>4&15
p=A.r(p<10?48+p:87+p)
t.a+=p
p=q&15
p=A.r(p<10?48+p:87+p)
t.a+=p
break}}else if(q===34||q===92){if(r>s)t.a+=B.e.L(a,s,r)
s=r+1
p=A.r(92)
t.a+=p
p=A.r(q)
t.a+=p}}if(s===0)t.a+=a
else if(s<n)t.a+=B.e.L(a,s,n)},
X(a){var t,s,r,q
for(t=this.a,s=t.length,r=0;r<s;++r){q=t[r]
if(a==null?q==null:a===q)throw A.d(new A.b4(a,null))}t.push(a)},
V(a){var t,s,r,q,p=this
if(p.ah(a))return
p.X(a)
try{t=p.b.$1(a)
if(!p.ah(t)){r=A.db(a,null,p.gaa())
throw A.d(r)}p.a.pop()}catch(q){s=A.cZ(q)
r=A.db(a,s,p.gaa())
throw A.d(r)}},
ah(a){var t,s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.c.a+=B.b.h(a)
return!0}else if(a===!0){r.c.a+="true"
return!0}else if(a===!1){r.c.a+="false"
return!0}else if(a==null){r.c.a+="null"
return!0}else if(typeof a=="string"){t=r.c
t.a+='"'
r.ai(a)
t.a+='"'
return!0}else if(u.j.b(a)){r.X(a)
r.aU(a)
r.a.pop()
return!0}else if(a instanceof A.x){r.X(a)
s=r.aV(a)
r.a.pop()
return s}else return!1},
aU(a){var t,s=this.c
s.a+="["
if(J.ea(a)){this.V(a[0])
for(t=1;t<a.length;++t){s.a+=","
this.V(a[t])}}s.a+="]"},
aV(a){var t,s,r,q,p,o=this,n={}
if(a.gD(a)){o.c.a+="{}"
return!0}t=a.gj(a)*2
s=A.aa(t,null,!1,u.O)
r=n.a=0
n.b=!0
a.I(0,new A.ce(n,s))
if(!n.b)return!1
q=o.c
q.a+="{"
for(p='"';r<t;r+=2,p=',"'){q.a+=p
o.ai(A.dE(s[r]))
q.a+='":'
o.V(s[r+1])}q.a+="}"
return!0}}
A.ce.prototype={
$2(a,b){var t,s,r,q
if(typeof a!="string")this.a.b=!1
t=this.b
s=this.a
r=s.a
q=s.a=r+1
t[r]=a
s.a=q+1
t[q]=b},
$S:1}
A.cc.prototype={
gaa(){var t=this.c.a
return t.charCodeAt(0)==0?t:t}}
A.o.prototype={}
A.aT.prototype={
h(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.aY(t)
return"Assertion failed"}}
A.aD.prototype={}
A.T.prototype={
gZ(){return"Invalid argument"+(!this.a?"(s)":"")},
gY(){return""},
h(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.gZ()+r+p
if(!t.a)return o
return o+t.gY()+": "+A.aY(t.ga2())},
ga2(){return this.b}}
A.bl.prototype={
ga2(){return this.b},
gZ(){return"RangeError"},
gY(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.n(r):""
else if(r==null)t=": Not greater than or equal to "+A.n(s)
else if(r>s)t=": Not in inclusive range "+A.n(s)+".."+A.n(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.n(s)
return t}}
A.aZ.prototype={
ga2(){return this.b},
gZ(){return"RangeError"},
gY(){if(this.b<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t}}
A.aE.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bo.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.bn.prototype={
h(a){return"Bad state: "+this.a}}
A.aW.prototype={
h(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.aY(t)+"."}}
A.aA.prototype={
h(a){return"Stack Overflow"},
$io:1}
A.ca.prototype={
h(a){return"Exception: "+this.a}}
A.bB.prototype={
h(a){var t=this.a,s=""!==t?"FormatException: "+t:"FormatException"
return s}}
A.c.prototype={
U(a,b,c){return A.eq(this,b,A.af(this).i("c.E"),c)},
aO(a,b){var t
for(t=this.gq(this);t.k();)if(!b.$1(t.gl()))return!1
return!0},
gj(a){var t,s=this.gq(this)
for(t=0;s.k();)++t
return t},
C(a,b){var t,s
A.cK(b,"index")
t=this.gq(this)
for(s=b;t.k();){if(s===0)return t.gl();--s}throw A.d(A.d8(b,b-s,this,"index"))},
h(a){return A.el(this,"(",")")}}
A.a_.prototype={
gp(a){return A.h.prototype.gp.call(this,0)},
h(a){return"null"}}
A.h.prototype={$ih:1,
B(a,b){return this===b},
gp(a){return A.bj(this)},
h(a){return"Instance of '"+A.bk(this)+"'"},
gm(a){return A.fJ(this)},
toString(){return this.h(this)}}
A.aB.prototype={
h(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.cu.prototype={
$1(a){var t,s,r,q
if(A.dM(a))return a
t=this.a
if(t.aJ(a))return t.t(0,a)
if(a instanceof A.x){s={}
t.n(0,a,s)
for(t=a.gE(),t=t.gq(t);t.k();){r=t.gl()
s[r]=this.$1(a.t(0,r))}return s}else if(u.V.b(a)){q=[]
t.n(0,a,q)
B.a.aF(q,J.ed(a,this,u.z))
return q}else return a},
$S:5}
A.j.prototype={
gae(){return this.b===8&&this.c.length>1?B.a.T(this.c,"+"):null},
gS(){var t=this,s=""+t.a,r=""+t.b
return t.gae()==null?s+"/"+r:s+"/"+r+":"+A.n(t.gae())},
gaE(){var t,s,r,q,p,o,n=A.e([],u.t)
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,A.G)(t),++r){q=t[r]
for(p=0;p<q;++p){if(n.length===0)o=2
else o=p===0?1:0
n.push(o)}}return n},
B(a,b){if(b==null)return!1
return b instanceof A.j&&b.gS()===this.gS()},
gp(a){return B.e.gp(this.gS())}}
A.bO.prototype={
J(){var t=this
return A.cH(["meter",t.a.gS(),"clickBpm",t.b,"firstClick",B.b.v(t.c*1000)/1000,"countIn",t.d],u.N,u.K)},
aR(d5,d6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7=B.b.v(d6*0.002),c8=d5.length,c9=Math.max(0,B.c.M(c8-256,c7)),d0=new Float64Array(c9),d1=new Float64Array(c9),d2=new Float64Array(c9),d3=2*Math.cos(22116.812281272145/d6),d4=2*Math.cos(16587.609210954106/d6)
for(t=0;t<c9;++t){s=t*c7
for(r=0,q=0,p=0,o=0,n=0;n<256;++n,o=p,p=k,q=r,r=l){m=d5[s+n]
l=m+d3*r-q
k=m+d4*p-o}d1[t]=Math.sqrt(Math.max(0,r*r+q*q-d3*r*q))
d2[t]=Math.sqrt(Math.max(0,p*p+o*o-d4*p*o))
d0[t]=d1[t]+d2[t]}j=c7/d6
i=this.c
h=60/this.b
g=Math.max(1,B.b.G((c8/d6-i)/h)+1)
c8=u.n
f=A.e([],c8)
for(e=0;e<g;++e)f.push(i+e*h)
d=new A.bQ(j,c9)
i=this.a
c=i.gaE()
b=A.e([],c8)
for(c8=i.a,a=0,a0=-1/0,a1=0,a2=-0.25;a2<=0.6;a2+=j){for(a3=0,a4=0,e=0;e<g;++e){a5=c[B.c.a5(e,c8)]===2
a6=a5?d1:d2
a7=d.$3(a6,f[e]+a2,0.006)
a6=a5?d2:d1
a8=d.$3(a6,f[e]+a2,0.006)
a3+=a7-0.5*a8
a4+=a7+a8}b.push(a4)
if(a3>a0){a1=a4
a0=a3
a=a2}}B.a.H(b)
c8=b.length
a9=c8===0?0:b[c8/2|0]
b0=c9>0&&a1>3*a9&&a0>0
c8=u.i
a6=A.bM(d0,c8)
B.a.H(a6)
b1=a6.length
b2=b1===0?0:a6[B.b.G(b1*0.5)]
b3=A.aa(g,null,!1,u.I)
b4=0
if(b0)for(a6=c9-1,b1=8*b2,b5=a1/g*0.3,e=0;e<g;++e){b6=f[e]+a
b7=Math.max(0,B.b.G((b6-0.015)/j))
b8=Math.min(a6,B.b.P((b6+0.015)/j))
for(n=b7,b9=-1,c0=0;n<=b8;++n){c1=d0[n]
if(c1>c0){c0=c1
b9=n}}if(b9>=0&&c0>b1&&c0>b5){b3[e]=b9*j+0.001;++b4}}c2=b0?a:0
c3=A.aa(g,0,!1,c8)
for(c4=null,e=0;e<g;++e){c8=b3[e]
if(c8!=null){c3[e]=c8
if(c4!=null&&e-c4>1)for(c5=c4+1,c8=e-c4;c5<e;++c5){a6=c3[c4]
c3[c5]=a6+(c3[e]-a6)*(c5-c4)/c8}c4=e}}c6=B.a.aP(b3,new A.bP())
for(c8=c6<0,e=0;e<g;++e)if(c8)c3[e]=f[e]+c2
else if(e<c6)c3[e]=c3[c6]-(c6-e)*h
else{c4.toString
if(e>c4)c3[e]=c3[c4]+(e-c4)*h}B.c.M(16,i.b)
return new A.I(new A.by(c3),b4)}}
A.bQ.prototype={
$3(a,b,c){var t,s,r,q=this.a,p=Math.max(0,B.b.G((b-c)/q)),o=Math.min(this.b-1,B.b.P((b+c)/q))
for(t=p,s=0;t<=o;++t){r=a[t]
if(r>s)s=r}return s},
$S:6}
A.bP.prototype={
$1(a){return a!=null},
$S:7}
A.by.prototype={}
A.w.prototype={
J(){var t=this,s=A.dc(u.N,u.K)
s.n(0,"t",A.a2(t.a,3))
s.n(0,"len",A.a2(t.b,3))
s.n(0,"midi",A.a2(t.c,3))
s.n(0,"lvl",A.a2(t.d,4))
return s}}
A.c3.prototype={
J(){var t,s,r,q,p,o,n=this,m=A.dc(u.N,u.K)
m.n(0,"version",4)
m.n(0,"duration",A.a2(n.b,3))
m.n(0,"tuningCents",A.a2(n.c,1))
m.n(0,"beat",A.a2(n.d,4))
m.n(0,"phase",A.a2(n.e,3))
t=A.e([],u.x)
for(s=n.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.G)(s),++q)t.push(s[q].J())
m.n(0,"notes",t)
t=n.f
if(t!=null)m.n(0,"metronome",t.J())
t=n.r
if(t!=null){s=A.e([],u.n)
for(t=t.a,r=t.length,q=0;q<r;++q){p=t[q]
o=Math.pow(10,4)
s.push(B.b.v(p*o)/o)}m.n(0,"clickTimes",s)}m.n(0,"clicksHeard",n.w)
return m}}
A.bV.prototype={
al(b0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=a3.c,a5=a3.d,a6=a3.b,a7=Math.max(0,B.c.M(b0.length-a4-a5,a6)+1),a8=new Float64Array(a5+2),a9=A.e([],u.B)
for(t=a3.e,s=a5+1,r=0;r<a7;++r){q=r*a6
for(p=0,o=0;o<a4;++o){n=b0[q+o]
p+=n*n}m=Math.sqrt(p/a4)
for(l=0,o=0;o<a6;++o){n=b0[q+o]
l+=n*n}k=Math.sqrt(l/a6)
if(m<0.0001){a9.push(new A.a0(m,k,null,1))
continue}for(j=1;j<=s;++j){for(i=0,o=0;o<a4;++o){n=q+o
h=b0[n]-b0[n+j]
i+=h*h}a8[j]=i}for(g=0,j=1;j<=s;++j){n=a8[j]
g+=n
a8[j]=g===0?1:n*j/g}j=Math.max(2,t)
e=j
for(;;){if(!(e<=a5)){f=-1
break}if(a8[e]<0.15){for(;;){d=e+1
if(!(d<=a5&&a8[d]<a8[e]))break
e=d}f=e
break}++e}if(f<0)for(c=1e9;j<=a5;++j){b=a8[j]
if(b<c){c=b
f=j}}a=a8[f]
a0=a8[f-1]
a1=a8[f+1]
a2=a0+a1-2*a
a9.push(new A.a0(m,k,69+12*Math.log(22050/(Math.abs(a2)>1e-12?f+0.5*(a0-a1)/a2:f)/440)/0.6931471805599453,a))}return a9},
aA(b1,b2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0={}
if(b2.length===0)return A.e([],u.X)
t=A.F(b2).i("z<1,b>")
s=A.bM(new A.z(b2,new A.c0(),t),t.i("v.E"))
B.a.H(s)
r=Math.max(0.002,s[B.c.aH(B.b.G(s.length*0.95),0,s.length-1)]*0.03)
q=new A.c1(b2,r)
p=A.aa(b2.length,null,!1,u.I)
for(t=u.n,o=0;o<b2.length;++o){if(!q.$1(o))continue
n=A.e([],t)
for(m=Math.max(0,o-2),l=o+2;m<=Math.min(b2.length-1,l);++m)if(q.$1(m)){k=b2[m].c
k.toString
n.push(k)}B.a.H(n)
p[o]=n[n.length/2|0]}n=A.e([],t)
for(l=b2.length,j=0;k=b2.length,j<k;b2.length===l||(0,A.G)(b2),++j)n.push(20*Math.log(b2[j].a+0.000001)/2.302585092994046)
i=A.aa(k,!1,!1,u.y)
for(h=-100,o=1;o<b2.length;o=e){l=A.e([],t)
for(m=Math.max(0,o-3);m<o;++m)l.push(n[m])
g=B.a.a4(l,B.h)
f=n[o]-g
e=o+1
if(e<b2.length){l=n[e]
k=A.e([],t)
for(m=Math.max(0,o-2);m<=o;++m)k.push(n[m])
d=l-B.a.a4(k,B.h)}else d=0
if(f>=5&&f>=d&&b2[o].a>=r&&o-h>=7){for(m=Math.max(1,o-1),l=Math.min(b2.length-1,o+5),c=o,b=1.5;m<=l;++m){a=b2[m].b/Math.max(b2[m-1].b,0.00001)
if(a>b){b=a
c=m}}if(c-h>=7){i[c]=!0
h=c}}}a0=A.e([],u.v)
b0.a=null
a1=A.e([],t)
b0.b=0
a2=new A.c_(b0,a0,a1)
for(o=0;n=b2.length,o<n;++o){a3=p[o]
if(a3==null){a2.$1(o)
continue}if(b0.a==null){b0.a=o
a1.push(a3)
continue}if(i[o]){a2.$1(o)
b0.a=o
a1.push(a3)
continue}n=a1.length
if(Math.abs(a3-A.dk(n>6?B.a.aj(a1,n-6):a1))>0.6){if(++b0.b>=3){c=o-2
a2.$1(c)
b0.a=c
for(m=c;m<=o;++m){n=p[m]
a1.push(n==null?a3:n)}}continue}b0.b=0
a1.push(a3)}a2.$1(n)
a4=A.e([],u.X)
for(n=a0.length,l=this.b/22050,j=0;j<a0.length;a0.length===n||(0,A.G)(a0),++j){k=a0[j]
a5=k.a
a6=k.b
a7=Math.min(a5+2,a6-1)
k=A.e([],t)
for(m=a7;m<a6;++m){a8=p[m]
if(a8!=null)k.push(a8)}if(k.length===0)continue
a9=this.aw(b1,a5,a6,A.dk(k))
k=A.e([],t)
for(a8=Math.min(a6,a5+5),m=a5;m<a8;++m)k.push(b2[m].a)
a4.push(new A.w(a5*l,(a6-a5)*l,a9,B.a.a4(k,B.p)))}return A.ex(A.ey(A.ew(this.au(a4,i))))},
au(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=A.e([],u.X)
for(t=a.length,s=b.length,r=this.b/22050,q=0;q<a.length;a.length===t||(0,A.G)(a),++q){p=a[q]
o=p.a
n=B.b.v(o/r)
m=n<s&&b[n]
if(g.length!==0&&!m){l=B.a.gu(g)
k=l.a
j=l.b
if(Math.abs(k+j-o)<0.015&&Math.abs(l.c-p.c)<0.4){i=g.length
h=p.b
j=j>=h?l.c:p.c
g[i-1]=new A.w(k,o+h-k,j,l.d)
continue}}g.push(p)}return g},
aw(a,b,c,d){var t,s,r,q,p,o,n,m,l=this,k=l.b,j=(b+2)*k,i=Math.min(a.length,Math.min(c*k+l.c,j+2051))-j
if(i<661.5)return d
t=new Float64Array(i)
for(k=i-1,s=0;s<i;++s)t[s]=a[j+s]*(0.5-0.5*Math.cos(6.283185307179586*s/k))
r=440*Math.pow(2,(d-69)/12)
q=l.ab(t,r)
p=q.a
k=2*r
o=l.ab(t,k)
n=o.a
m=new A.bZ()
if(m.$2(p,r)&&q.b>=0.25*o.b)return A.dl(p)
if(m.$2(n,k))return A.dl(n/2)
return d},
ab(a,b){var t,s,r,q,p,o=this,n=b*Math.pow(2,-0.03333333333333333),m=b*Math.pow(2,0.03333333333333333),l=0.6180339887498949*(m-n),k=m-l,j=n+l,i=o.O(a,k),h=o.O(a,j)
for(t=0;t<24;++t)if(i<h){s=k+0.6180339887498949*(m-k)
r=o.O(a,s)
i=h
h=r
n=k
k=j
j=s}else{q=j-0.6180339887498949*(j-n)
p=o.O(a,q)
h=i
i=p
m=j
j=k
k=q}return i>h?new A.I(k,i):new A.I(j,h)},
O(a,b){var t,s,r,q,p,o=2*Math.cos(6.283185307179586*b/22050)
for(t=a.length,s=0,r=0,q=0;q<t;++q,r=s,s=p)p=a[q]+o*s-r
return s*s+r*r-o*s*r}}
A.c0.prototype={
$1(a){return a.a},
$S:8}
A.c1.prototype={
$1(a){var t=this.a[a]
return t.c!=null&&t.a>=this.b&&t.d<=0.35},
$S:9}
A.c_.prototype={
$1(a){var t=this.a,s=t.a
if(s!=null&&a-s>=4)this.b.push(new A.I(s,a))
t.a=null
B.a.aI(this.c)
t.b=0},
$S:10}
A.bW.prototype={
$1(a){return Math.abs(a-this.a.c)<7},
$S:11}
A.bX.prototype={
$1(a){return a.d},
$S:12}
A.bY.prototype={
$1(a){return Math.abs(a.c-this.a.c)>7},
$S:13}
A.bZ.prototype={
$2(a,b){return Math.abs(1200*Math.log(a/b)/0.6931471805599453)<38},
$S:14}
A.c2.prototype={
$1(a){var t,s,r,q,p,o=B.b.v(a/0.01)
if(o<=0||o>=this.a)return 0
for(t=this.a,s=this.b,r=0,q=0;p=q+o,p<t;++q)r+=s[q]*s[p]
return r/(t-o)},
$S:15}
A.a0.prototype={}
A.cv.prototype={
$1(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null
try{q=a.data.metronome
t=q==null?c:q
p=new A.bV(B.b.v(220.5),1014,B.b.P(367.5),B.b.G(14.7))
o=a.data.pcm
if(t==null)n=c
else{n=u.a.a(B.k.aK(t,c))
m=A.er(A.dF(n.t(0,"meter")))
l=A.dD(n.t(0,"clickBpm"))
k=A.cP(n.t(0,"firstClick"))
if(k==null)k=c
if(k==null)k=0
n=A.cP(n.t(0,"countIn"))
n=n==null?c:B.b.aS(n)
n=new A.bO(m,l,k,n==null?1:n)}m=n!=null
if(m){j=n.aR(o,22050)
i=j.a
h=j.b
o=A.es(o,22050)}else{i=c
h=0}g=p.aA(o,p.al(o))
f=A.eA(g)
e=m?new A.I(60/n.b*4/B.c.M(16,n.a.b),B.a.gR(i.a)):A.ez(g)
s=new A.c3(g,o.length/22050,f,e.a,e.b,n,i,h)
p=u.N
v.G.self.postMessage(A.dR(A.cH(["result",B.k.aM(s.J(),c)],p,p)))}catch(d){r=A.cZ(d)
p=v.G.self
n=u.N
n=A.dR(A.cH(["error",A.n(r)],n,n))
p.postMessage(n)}},
$S:16};(function aliases(){var t=J.O.prototype
t.ak=t.h})();(function installTearOffs(){var t=hunkHelpers._static_2,s=hunkHelpers._static_1,r=hunkHelpers.installStaticTearOff
t(J,"fe","da",17)
s(A,"fE","f5",0)
r(A,"fV",2,null,["$1$2","$2"],["dT",function(a,b){return A.dT(a,b,u.H)}],2,0)
r(A,"fU",2,null,["$1$2","$2"],["dS",function(a,b){return A.dS(a,b,u.H)}],2,0)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.h,null)
r(A.h,[A.cF,J.b_,A.az,J.L,A.o,A.bS,A.c,A.P,A.b7,A.bh,A.al,A.aM,A.U,A.c4,A.bR,A.x,A.bL,A.b6,A.E,A.bs,A.cg,A.bt,A.m,A.aV,A.aX,A.cd,A.aA,A.ca,A.bB,A.a_,A.aB,A.j,A.bO,A.by,A.w,A.c3,A.bV,A.a0])
r(J.b_,[J.b1,J.ao,J.aq,J.ap,J.ar,J.a9,J.V])
r(J.aq,[J.O,J.l,A.ab,A.av])
r(J.O,[J.bi,J.ae,J.N])
s(J.b0,A.az)
s(J.bH,J.l)
r(J.a9,[J.an,J.b2])
r(A.o,[A.b5,A.aD,A.b3,A.bp,A.bm,A.br,A.as,A.aT,A.T,A.aE,A.bo,A.bn,A.aW])
r(A.c,[A.f,A.Z,A.ax])
r(A.f,[A.v,A.X,A.aG])
r(A.v,[A.aC,A.z,A.bv])
s(A.ak,A.Z)
s(A.bw,A.aM)
s(A.I,A.bw)
r(A.U,[A.bC,A.bz,A.bU,A.cq,A.cs,A.cu,A.bQ,A.bP,A.c0,A.c1,A.c_,A.bW,A.bX,A.bY,A.c2,A.cv])
s(A.a8,A.bC)
s(A.ay,A.aD)
r(A.bU,[A.bT,A.aj])
r(A.x,[A.W,A.aF,A.bu])
r(A.bz,[A.cr,A.bN,A.ce,A.bZ])
r(A.av,[A.b8,A.ac])
r(A.ac,[A.aI,A.aK])
s(A.aJ,A.aI)
s(A.at,A.aJ)
s(A.aL,A.aK)
s(A.au,A.aL)
r(A.at,[A.b9,A.ba])
r(A.au,[A.bb,A.bc,A.bd,A.be,A.bf,A.aw,A.bg])
s(A.aN,A.br)
s(A.aH,A.aF)
s(A.b4,A.as)
s(A.bI,A.aV)
r(A.aX,[A.bK,A.bJ])
s(A.cc,A.cd)
r(A.T,[A.bl,A.aZ])
t(A.aI,A.m)
t(A.aJ,A.al)
t(A.aK,A.m)
t(A.aL,A.al)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",b:"double",cx:"num",t:"String",B:"bool",a_:"Null",k:"List",h:"Object",Y:"Map",p:"JSObject"},mangledNames:{},types:["@(@)","~(h?,h?)","0^(0^,0^)<cx>","@(@,t)","@(t)","h?(h?)","b(am,b,b)","B(b?)","b(a0)","B(a)","~(a)","B(b)","b(w)","B(w)","B(b,b)","b(b)","a_(p)","a(@,@)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.I&&a.b(c.a)&&b.b(c.b)}}
A.eS(v.typeUniverse,JSON.parse('{"bi":"O","ae":"O","N":"O","h2":"ab","b1":{"B":[],"i":[]},"ao":{"i":[]},"aq":{"p":[]},"O":{"p":[]},"l":{"k":["1"],"f":["1"],"p":[],"c":["1"]},"b0":{"az":[]},"bH":{"l":["1"],"k":["1"],"f":["1"],"p":[],"c":["1"]},"a9":{"b":[]},"an":{"b":[],"a":[],"i":[]},"b2":{"b":[],"i":[]},"V":{"t":[],"i":[]},"b5":{"o":[]},"f":{"c":["1"]},"v":{"f":["1"],"c":["1"]},"aC":{"v":["1"],"f":["1"],"c":["1"],"c.E":"1","v.E":"1"},"Z":{"c":["2"],"c.E":"2"},"ak":{"Z":["1","2"],"f":["2"],"c":["2"],"c.E":"2"},"z":{"v":["2"],"f":["2"],"c":["2"],"c.E":"2","v.E":"2"},"ax":{"c":["1"],"c.E":"1"},"ay":{"o":[]},"b3":{"o":[]},"bp":{"o":[]},"bm":{"o":[]},"W":{"x":["1","2"],"Y":["1","2"],"x.V":"2"},"X":{"f":["1"],"c":["1"],"c.E":"1"},"ab":{"p":[],"cD":[],"i":[]},"av":{"p":[]},"b8":{"cE":[],"p":[],"i":[]},"ac":{"y":["1"],"p":[]},"at":{"m":["b"],"k":["b"],"y":["b"],"f":["b"],"p":[],"c":["b"]},"au":{"m":["a"],"k":["a"],"y":["a"],"f":["a"],"p":[],"c":["a"]},"b9":{"bA":[],"m":["b"],"k":["b"],"y":["b"],"f":["b"],"p":[],"c":["b"],"i":[],"m.E":"b"},"ba":{"am":[],"m":["b"],"k":["b"],"y":["b"],"f":["b"],"p":[],"c":["b"],"i":[],"m.E":"b"},"bb":{"bD":[],"m":["a"],"k":["a"],"y":["a"],"f":["a"],"p":[],"c":["a"],"i":[],"m.E":"a"},"bc":{"bE":[],"m":["a"],"k":["a"],"y":["a"],"f":["a"],"p":[],"c":["a"],"i":[],"m.E":"a"},"bd":{"bF":[],"m":["a"],"k":["a"],"y":["a"],"f":["a"],"p":[],"c":["a"],"i":[],"m.E":"a"},"be":{"c6":[],"m":["a"],"k":["a"],"y":["a"],"f":["a"],"p":[],"c":["a"],"i":[],"m.E":"a"},"bf":{"c7":[],"m":["a"],"k":["a"],"y":["a"],"f":["a"],"p":[],"c":["a"],"i":[],"m.E":"a"},"aw":{"c8":[],"m":["a"],"k":["a"],"y":["a"],"f":["a"],"p":[],"c":["a"],"i":[],"m.E":"a"},"bg":{"c9":[],"m":["a"],"k":["a"],"y":["a"],"f":["a"],"p":[],"c":["a"],"i":[],"m.E":"a"},"br":{"o":[]},"aN":{"o":[]},"aF":{"x":["1","2"],"Y":["1","2"]},"aH":{"aF":["1","2"],"x":["1","2"],"Y":["1","2"],"x.V":"2"},"aG":{"f":["1"],"c":["1"],"c.E":"1"},"x":{"Y":["1","2"]},"bu":{"x":["t","@"],"Y":["t","@"],"x.V":"@"},"bv":{"v":["t"],"f":["t"],"c":["t"],"c.E":"t","v.E":"t"},"as":{"o":[]},"b4":{"o":[]},"k":{"f":["1"],"c":["1"]},"aT":{"o":[]},"aD":{"o":[]},"T":{"o":[]},"bl":{"o":[]},"aZ":{"o":[]},"aE":{"o":[]},"bo":{"o":[]},"bn":{"o":[]},"aW":{"o":[]},"aA":{"o":[]},"bF":{"k":["a"],"f":["a"],"c":["a"]},"c9":{"k":["a"],"f":["a"],"c":["a"]},"c8":{"k":["a"],"f":["a"],"c":["a"]},"bD":{"k":["a"],"f":["a"],"c":["a"]},"c6":{"k":["a"],"f":["a"],"c":["a"]},"bE":{"k":["a"],"f":["a"],"c":["a"]},"c7":{"k":["a"],"f":["a"],"c":["a"]},"bA":{"k":["b"],"f":["b"],"c":["b"]},"am":{"k":["b"],"f":["b"],"c":["b"]}}'))
A.eR(v.typeUniverse,JSON.parse('{"f":1,"bh":1,"al":1,"b6":1,"ac":1,"aV":2,"aX":2}'))
var u=(function rtii(){var t=A.cn
return{J:t("cD"),Y:t("cE"),Q:t("f<@>"),C:t("o"),D:t("bA"),q:t("am"),Z:t("h0"),u:t("a8<b>"),W:t("bD"),k:t("bE"),U:t("bF"),V:t("c<@>"),X:t("l<w>"),x:t("l<Y<t,h>>"),f:t("l<h>"),v:t("l<+(a,a)>"),s:t("l<t>"),B:t("l<a0>"),n:t("l<b>"),b:t("l<@>"),t:t("l<a>"),w:t("l<w?>"),T:t("ao"),m:t("p"),g:t("N"),p:t("y<@>"),j:t("k<@>"),a:t("Y<t,@>"),E:t("ax<w>"),P:t("a_"),K:t("h"),L:t("h3"),F:t("+()"),N:t("t"),R:t("i"),G:t("c6"),M:t("c7"),e:t("c8"),_:t("c9"),o:t("ae"),A:t("aH<h?,h?>"),y:t("B"),i:t("b"),z:t("@"),S:t("a"),c:t("d7<a_>?"),d:t("p?"),O:t("h?"),h:t("t?"),l:t("B?"),I:t("b?"),r:t("a?"),ae:t("cx?"),H:t("cx")}})();(function constants(){var t=hunkHelpers.makeConstList
B.x=J.b_.prototype
B.a=J.l.prototype
B.c=J.an.prototype
B.b=J.a9.prototype
B.e=J.V.prototype
B.y=J.N.prototype
B.z=J.aq.prototype
B.o=J.bi.prototype
B.f=J.ae.prototype
B.p=new A.a8(A.fU(),u.u)
B.h=new A.a8(A.fV(),u.u)
B.i=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.q=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.w=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.r=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.v=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.u=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.t=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.j=function(hooks) { return hooks; }

B.k=new A.bI()
B.d=new A.bS()
B.A=new A.bJ(null)
B.B=new A.bK(null)
B.C=t([2,2],u.t)
B.n=t([1,1,1,1,1,1,1],u.t)
B.K=t([2,3,3],u.t)
B.Y=new A.j(8,8,B.K)
B.M=t([3],u.t)
B.Z=new A.j(3,8,B.M)
B.R=t([3,3,2],u.t)
B.a_=new A.j(8,8,B.R)
B.G=t([2,3],u.t)
B.a0=new A.j(5,8,B.G)
B.Q=t([3,2,3],u.t)
B.a1=new A.j(8,8,B.Q)
B.m=t([3,3],u.t)
B.a2=new A.j(6,4,B.m)
B.I=t([2,3,2,2],u.t)
B.a3=new A.j(9,8,B.I)
B.N=t([3,2,2],u.t)
B.a4=new A.j(7,8,B.N)
B.W=t([3,2,2,2,2],u.t)
B.a5=new A.j(11,8,B.W)
B.D=t([2,2,2,3],u.t)
B.a6=new A.j(9,8,B.D)
B.P=t([3,2,2,3],u.t)
B.a7=new A.j(10,8,B.P)
B.E=t([2,2,3],u.t)
B.a8=new A.j(7,8,B.E)
B.V=t([2,2,3,2,2],u.t)
B.a9=new A.j(11,8,B.V)
B.S=t([3,3,3],u.t)
B.aa=new A.j(9,8,B.S)
B.ab=new A.j(6,8,B.m)
B.L=t([2,2,2,3,3,3],u.t)
B.ac=new A.j(15,8,B.L)
B.l=t([3,2],u.t)
B.ad=new A.j(5,8,B.l)
B.H=t([2,3,2],u.t)
B.ae=new A.j(7,8,B.H)
B.af=new A.j(5,4,B.l)
B.T=t([3,3,3,3],u.t)
B.ag=new A.j(12,8,B.T)
B.F=t([2,2,3,2],u.t)
B.ah=new A.j(9,8,B.F)
B.O=t([3,2,2,2],u.t)
B.ai=new A.j(9,8,B.O)
B.X=t([2,2,2,3,3],u.t)
B.aj=new A.j(12,8,B.X)
B.J=t([2,3,2,3],u.t)
B.ak=new A.j(10,8,B.J)
B.U=t([4,3],u.t)
B.al=new A.j(7,4,B.U)
B.am=A.H("cD")
B.an=A.H("cE")
B.ao=A.H("bA")
B.ap=A.H("am")
B.aq=A.H("bD")
B.ar=A.H("bE")
B.as=A.H("bF")
B.at=A.H("h")
B.au=A.H("c6")
B.av=A.H("c7")
B.aw=A.H("c8")
B.ax=A.H("c9")})();(function staticFields(){$.cb=null
$.a3=A.e([],u.f)
$.dg=null
$.d4=null
$.d3=null
$.dQ=null
$.dO=null
$.dV=null
$.cm=null
$.ct=null
$.cV=null
$.cf=A.e([],A.cn("l<k<h>?>"))})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"h_","dY",()=>A.cp("_$dart_dartClosure"))
t($,"fZ","d_",()=>A.cp("_$dart_dartClosure_dartJSInterop"))
t($,"hf","e8",()=>A.e([new J.b0()],A.cn("l<az>")))
t($,"h4","dZ",()=>A.J(A.c5({
toString:function(){return"$receiver$"}})))
t($,"h5","e_",()=>A.J(A.c5({$method$:null,
toString:function(){return"$receiver$"}})))
t($,"h6","e0",()=>A.J(A.c5(null)))
t($,"h7","e1",()=>A.J(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(s){return s.message}}()))
t($,"ha","e4",()=>A.J(A.c5(void 0)))
t($,"hb","e5",()=>A.J(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(s){return s.message}}()))
t($,"h9","e3",()=>A.J(A.dm(null)))
t($,"h8","e2",()=>A.J(function(){try{null.$method$}catch(s){return s.message}}()))
t($,"hd","e7",()=>A.J(A.dm(void 0)))
t($,"hc","e6",()=>A.J(function(){try{(void 0).$method$}catch(s){return s.message}}()))
t($,"he","cA",()=>A.cy(B.at))
t($,"h1","cz",()=>A.e([A.cI(2,4,B.a.W(B.n,0,2)),A.cI(3,4,B.a.W(B.n,0,3)),A.cI(4,4,B.C),B.af,B.a2,B.al,B.Z,B.a0,B.ad,B.ab,B.a8,B.a4,B.ae,B.a1,B.a_,B.Y,B.a6,B.ai,B.a3,B.ah,B.aa,B.a7,B.ak,B.a9,B.a5,B.ag,B.aj,B.ac],A.cn("l<j>")))})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.ab,SharedArrayBuffer:A.ab,ArrayBufferView:A.av,DataView:A.b8,Float32Array:A.b9,Float64Array:A.ba,Int16Array:A.bb,Int32Array:A.bc,Int8Array:A.bd,Uint16Array:A.be,Uint32Array:A.bf,Uint8ClampedArray:A.aw,CanvasPixelArray:A.aw,Uint8Array:A.bg})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.ac.$nativeSuperclassTag="ArrayBufferView"
A.aI.$nativeSuperclassTag="ArrayBufferView"
A.aJ.$nativeSuperclassTag="ArrayBufferView"
A.at.$nativeSuperclassTag="ArrayBufferView"
A.aK.$nativeSuperclassTag="ArrayBufferView"
A.aL.$nativeSuperclassTag="ArrayBufferView"
A.au.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$1$1=function(a){return this(a)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r){t[r].removeEventListener("load",onLoad,false)}a(b.target)}for(var s=0;s<t.length;++s){t[s].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var t=A.fS
if(typeof dartMainRunner==="function"){dartMainRunner(t,[])}else{t([])}})})()
//# sourceMappingURL=engine_worker.js.map
