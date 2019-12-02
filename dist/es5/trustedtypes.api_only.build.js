(function(){/*

 Copyright 2017 Google Inc. All Rights Reserved.

 Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.

  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*/
function aa(a){var c=0;return function(){return c<a.length?{done:!1,value:a[c++]}:{done:!0}}}var q="function"==typeof Object.defineProperties?Object.defineProperty:function(a,c,e){a!=Array.prototype&&a!=Object.prototype&&(a[c]=e.value)},z="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function ba(){ba=function(){};z.Symbol||(z.Symbol=ca)}function da(a,c){this.a=a;q(this,"description",{configurable:!0,writable:!0,value:c})}
da.prototype.toString=function(){return this.a};var ca=function(){function a(e){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new da("jscomp_symbol_"+(e||"")+"_"+c++,e)}var c=0;return a}();function A(a){var c="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return c?c.call(a):{next:aa(a)}}function ea(a){for(var c,e=[];!(c=a.next()).done;)e.push(c.value);return e}
var fa="function"==typeof Object.create?Object.create:function(a){function c(){}c.prototype=a;return new c},L;if("function"==typeof Object.setPrototypeOf)L=Object.setPrototypeOf;else{var Q;a:{var ha={b:!0},ia={};try{ia.__proto__=ha;Q=ia.b;break a}catch(a){}Q=!1}L=Q?function(a,c){a.__proto__=c;if(a.__proto__!==c)throw new TypeError(a+" is not extensible");return a}:null}var oa=L;
function R(a,c){a.prototype=fa(c.prototype);a.prototype.constructor=a;if(oa)oa(a,c);else for(var e in c)if("prototype"!=e)if(Object.defineProperties){var g=Object.getOwnPropertyDescriptor(c,e);g&&Object.defineProperty(a,e,g)}else a[e]=c[e];a.D=c.prototype}function S(a,c){return Object.prototype.hasOwnProperty.call(a,c)}
function pa(a,c){if(c){var e=z;a=a.split(".");for(var g=0;g<a.length-1;g++){var l=a[g];l in e||(e[l]={});e=e[l]}a=a[a.length-1];g=e[a];c=c(g);c!=g&&null!=c&&q(e,a,{configurable:!0,writable:!0,value:c})}}
pa("WeakMap",function(a){function c(f){this.a=(H+=Math.random()+1).toString();if(f){f=A(f);for(var m;!(m=f.next()).done;)m=m.value,this.set(m[0],m[1])}}function e(){}function g(f){if(!S(f,n)){var m=new e;q(f,n,{value:m})}}function l(f){var m=Object[f];m&&(Object[f]=function(t){if(t instanceof e)return t;g(t);return m(t)})}if(function(){if(!a||!Object.seal)return!1;try{var f=Object.seal({}),m=Object.seal({}),t=new a([[f,2],[m,3]]);if(2!=t.get(f)||3!=t.get(m))return!1;t.delete(f);t.set(m,4);return!t.has(f)&&
4==t.get(m)}catch(U){return!1}}())return a;var n="$jscomp_hidden_"+Math.random();l("freeze");l("preventExtensions");l("seal");var H=0;c.prototype.set=function(f,m){g(f);if(!S(f,n))throw Error("WeakMap key fail: "+f);f[n][this.a]=m;return this};c.prototype.get=function(f){return S(f,n)?f[n][this.a]:void 0};c.prototype.has=function(f){return S(f,n)&&S(f[n],this.a)};c.prototype.delete=function(f){return S(f,n)&&S(f[n],this.a)?delete f[n][this.a]:!1};return c});
var qa="function"==typeof Object.assign?Object.assign:function(a,c){for(var e=1;e<arguments.length;e++){var g=arguments[e];if(g)for(var l in g)S(g,l)&&(a[l]=g[l])}return a};pa("Object.assign",function(a){return a||qa});var ra="onabort onactivate onactivateinvisible onafterprint onafterupdate onanimationcancel onanimationend onanimationiteration onanimationstart onariarequest onauxclick onbeforeactivate onbeforecopy onbeforecut onbeforedeactivate onbeforeeditfocus onbeforepaste onbeforeprint onbeforeunload onbegin onblur onbounce oncancel oncanplay oncanplaythrough oncellchange onchange onclick onclose oncommand oncontextmenu oncontrolselect oncopy oncuechange oncut ondataavailable ondatasetchanged ondatasetcomplete ondblclick ondeactivate ondrag ondragdrop ondragend ondragenter ondragexit ondragleave ondragover ondragstart ondrop ondurationchange onemptied onend onended onerror onerrorupdate onexit onfilterchange onfinish onfocus onfocusin onfocusout onformdata onfullscreenchange onfullscreenerror ongotpointercapture onhelp oninput oninvalid onkeydown onkeypress onkeyup onlayoutcomplete onload onloadeddata onloadedmetadata onloadend onloadstart onlosecapture onlostpointercapture onmediacomplete onmediaerror onmessage onmousedown onmouseenter onmouseleave onmousemove onmouseout onmouseover onmouseup onmousewheel onmove onmoveend onmovestart onmozfullscreenchange onmozfullscreenerror onmscontentzoom onmsgesturechange onmsgesturedoubletap onmsgestureend onmsgesturehold onmsgesturestart onmsgesturetap onmsgotpointercapture onmsinertiastart onmslostpointercapture onmsmanipulationstatechanged onmspointercancel onmspointerdown onmspointerenter onmspointerleave onmspointermove onmspointerout onmspointerover onmspointerup onoffline ononline onoutofsync onoverscroll onpaste onpause onplay onplaying onpointercancel onpointerdown onpointerenter onpointerleave onpointermove onpointerout onpointerover onpointerrawupdate onpointerup onprogress onpropertychange onratechange onreadystatechange onrepeat onreset onresize onresizeend onresizestart onresume onreverse onrowdelete onrowenter onrowexit onrowinserted onscroll onscrollend onsearch onseek onseeked onseeking onselect onselectionchange onselectstart onshow onstalled onstart onstop onstorage onsubmit onsuspend onsynchrestored ontimeerror ontimeupdate ontoggle ontrackchange ontransitioncancel ontransitionend ontransitionrun ontransitionstart onunload onurlflip onvolumechange onwaiting onwebkitanimationend onwebkitanimationiteration onwebkitanimationstart onwebkitfullscreenchange onwebkitfullscreenerror onwebkittransitionend onwheel".split(" ");
function sa(){if("undefined"!==typeof window){var a=[],c;for(c in HTMLElement.prototype)"on"===c.slice(0,2)&&a.push(c);return a}return ra};var ta="undefined"!==typeof window;function ua(){throw new TypeError("undefined conversion");}function va(){return null}var wa=String.prototype,xa=wa.toLowerCase,ya=wa.toUpperCase;function za(){throw new TypeError("Illegal constructor");}function T(){throw new TypeError("Illegal constructor");}
var V=function(){function a(b){return l.apply(this,arguments)||this}function c(b){return l.apply(this,arguments)||this}function e(b){return l.apply(this,arguments)||this}function g(b){return l.apply(this,arguments)||this}function l(b,d){if(b!==W)throw Error("cannot call the constructor");I(this,"policyName",{value:d,enumerable:!0})}function n(b){var d=X.get(b);void 0===d&&(d=F(null),X.set(b,d));return d}function H(b){var d=ja(b);if(null==d||ja(d)!==ka)throw Error();d=A(Y(d));for(var k=d.next();!k.done;k=
d.next())k=k.value,I(b,k,{value:b[k]});return b}function f(b,d){B(b.prototype);delete b.name;I(b,"name",{value:d})}function m(b){return function(d){return d instanceof b&&X.has(d)}}function t(b,d){function k(M,J){var Ba=d[J]||("default"==b?va:ua),Ca=B(new M(W,b));M={};J=(M[J]=function(Da,Ia){for(var v=[],D=1;D<arguments.length;++D)v[D-1]=arguments[D];v=Ba.apply(null,[""+Da].concat(v instanceof Array?v:ea(A(v))));if(void 0===v||null===v){if("default"==b)return v;v=""}v=""+v;D=B(F(Ca));n(D).v=v;return D},
M)[J];return B(J)}for(var h=F(za.prototype),p=A(Y(N)),E=p.next();!E.done;E=p.next())E=E.value,h[E]=k(N[E],E);I(h,"name",{value:b,writable:!1,configurable:!1,enumerable:!0});return B(h)}function U(b,d,k,h,p){h=void 0===h?"":h;p=void 0===p?"":p;b=ya.apply(String(b));(h=p?p:h)||(h="http://www.w3.org/1999/xhtml");if(h=K.apply(w,[h])?w[h]:null){if(K.apply(h,[b])&&h[b]&&K.apply(h[b][d],[k])&&h[b][d][k])return h[b][d][k];if(K.apply(h,["*"])&&K.apply(h["*"][d],[k])&&h["*"][d][k])return h["*"][d][k]}}function la(){return O}
var u=Object,Ea=u.assign,F=u.create,I=u.defineProperty,B=u.freeze,Y=u.getOwnPropertyNames,ja=u.getPrototypeOf,ka=u.prototype,K=ka.hasOwnProperty;u=Array.prototype;var Fa=u.forEach,Ga=u.push;ba();var W=Symbol(),X=H(new WeakMap),G=H([]),Z=H([]),ma=!0,O=null,P=!1;l.prototype.toString=function(){return n(this).v};l.prototype.valueOf=function(){return n(this).v};R(g,l);f(g,"TrustedURL");R(e,l);f(e,"TrustedScriptURL");R(c,l);f(c,"TrustedHTML");R(a,l);f(a,"TrustedScript");f(l,"TrustedType");u=B(F(new c(W,
"")));n(u).v="";var r={},w=(r["http://www.w3.org/1999/xhtml"]={A:{attributes:{href:g.name}},AREA:{attributes:{href:g.name}},BASE:{attributes:{href:g.name}},BUTTON:{attributes:{formaction:g.name}},EMBED:{attributes:{src:e.name}},FORM:{attributes:{action:g.name}},FRAME:{attributes:{src:g.name}},IFRAME:{attributes:{src:g.name,srcdoc:c.name}},INPUT:{attributes:{formaction:g.name}},OBJECT:{attributes:{data:e.name,codebase:e.name}},SCRIPT:{attributes:{src:e.name,text:a.name},properties:{innerText:a.name,
textContent:a.name,text:a.name}},"*":{attributes:{},properties:{innerHTML:c.name,outerHTML:c.name}}},r["http://www.w3.org/1999/xlink"]={"*":{attributes:{href:g.name},properties:{}}},r["http://www.w3.org/2000/svg"]={"*":{attributes:{href:g.name},properties:{}}},r);r={codebase:"codeBase",formaction:"formAction"};!ta||"srcdoc"in HTMLIFrameElement.prototype||delete w["http://www.w3.org/1999/xhtml"].IFRAME.attributes.srcdoc;for(var x=A(Object.keys(w["http://www.w3.org/1999/xhtml"])),y=x.next();!y.done;y=
x.next()){y=y.value;w["http://www.w3.org/1999/xhtml"][y].properties||(w["http://www.w3.org/1999/xhtml"][y].properties={});for(var na=A(Object.keys(w["http://www.w3.org/1999/xhtml"][y].attributes)),C=na.next();!C.done;C=na.next())C=C.value,w["http://www.w3.org/1999/xhtml"][y].properties[r[C]?r[C]:C]=w["http://www.w3.org/1999/xhtml"][y].attributes[C]}r=A(sa());for(x=r.next();!x.done;x=r.next())x=x.value,w["http://www.w3.org/1999/xhtml"]["*"].attributes[x]="TrustedScript",w["http://www.w3.org/2000/svg"]["*"].attributes[x]=
"TrustedScript";var N={createHTML:c,createScriptURL:e,createURL:g,createScript:a},Ha=N.hasOwnProperty;r=F(T.prototype);Ea(r,{createPolicy:function(b,d){if(!b.match(/^[-#a-zA-Z0-9=_/@.%]+$/g))throw new TypeError("Policy "+b+" contains invalid characters.");if(P&&-1===Z.indexOf(b))throw new TypeError("Policy "+b+" disallowed.");if(P&&!ma&&-1!==G.indexOf(b))throw new TypeError("Policy "+b+" exists.");G.push(b);var k=F(null);if(d&&"object"===typeof d)for(var h=A(Y(d)),p=h.next();!p.done;p=h.next())p=
p.value,Ha.call(N,p)&&(k[p]=d[p]);else console.warn("trustedTypes.createPolicy "+b+" was given an empty policy");B(k);d=t(b,k);"default"===b&&(O=d);return d},getPolicyNames:function(){return G.slice()},i:m(c),m:m(g),l:m(e),j:m(a),f:function(b,d,k,h){k=void 0===k?"":k;h=void 0===h?"":h;d=xa.apply(String(d));return U(b,"attributes",d,k,h)||null},g:function(b,d,k){return U(b,"properties",String(d),void 0===k?"":k)||null},h:function(b){b=void 0===b?"":b;if(!b)try{b=document.documentElement.namespaceURI}catch(d){b=
"http://www.w3.org/1999/xhtml"}return(b=w[b])?JSON.parse(JSON.stringify(b)):{}},c:u,u:O,TrustedHTML:c,TrustedURL:g,TrustedScriptURL:e,TrustedScript:a});I(r,"defaultPolicy",{get:la,set:function(){}});return{o:B(r),C:function(b,d){P=!0;Z.length=0;Fa.call(b,function(k){Ga.call(Z,""+k)});ma=d;G.length=0},s:function(){P=!1},w:la,B:function(){O=null;G.splice(G.indexOf("default"),1)}}}().o;if("undefined"!==typeof window&&(window.TrustedTypes&&"undefined"===typeof window.trustedTypes&&(window.trustedTypes=Object.freeze(window.TrustedTypes)),"undefined"===typeof window.trustedTypes)){var Aa=Object.create(T.prototype);Object.assign(Aa,{isHTML:V.i,isURL:V.m,isScriptURL:V.l,isScript:V.j,createPolicy:V.createPolicy,getPolicyNames:V.getPolicyNames,getAttributeType:V.f,getPropertyType:V.g,getTypeMapping:V.h,emptyHTML:V.c,_isPolyfill_:!0});Object.defineProperty(Aa,"defaultPolicy",Object.getOwnPropertyDescriptor(V,
"defaultPolicy")||{});window.trustedTypes=Object.freeze(Aa);window.TrustedHTML=V.TrustedHTML;window.TrustedURL=V.TrustedURL;window.TrustedScriptURL=V.TrustedScriptURL;window.TrustedScript=V.TrustedScript;window.TrustedTypePolicy=za;window.TrustedTypePolicyFactory=T};}).call(this);

//# sourceMappingURL=trustedtypes.api_only.build.js.map
