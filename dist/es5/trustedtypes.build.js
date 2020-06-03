(function(){/*

 Copyright 2017 Google Inc. All Rights Reserved.

 Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.

  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*/
function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var n="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},u="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function ba(){ba=function(){};u.Symbol||(u.Symbol=ca)}function ea(a,b){this.a=a;n(this,"description",{configurable:!0,writable:!0,value:b})}
ea.prototype.toString=function(){return this.a};var ca=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new ea("jscomp_symbol_"+(c||"")+"_"+b++,c)}var b=0;return a}();function v(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}function ia(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ja="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},ka;if("function"==typeof Object.setPrototypeOf)ka=Object.setPrototypeOf;else{var la;a:{var ma={o:!0},na={};try{na.__proto__=ma;la=na.o;break a}catch(a){}la=!1}ka=la?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var oa=ka;
function pa(a,b){a.prototype=ja(b.prototype);a.prototype.constructor=a;if(oa)oa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,c);e&&Object.defineProperty(a,c,e)}else a[c]=b[c];a.J=b.prototype}function A(a,b){if(b){var c=u;a=a.split(".");for(var e=0;e<a.length-1;e++){var d=a[e];d in c||(c[d]={});c=c[d]}a=a[a.length-1];e=c[a];b=b(e);b!=e&&null!=b&&n(c,a,{configurable:!0,writable:!0,value:b})}}
A("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});A("Array.prototype.includes",function(a){return a?a:function(b,c){var e=this;e instanceof String&&(e=String(e));var d=e.length;c=c||0;for(0>c&&(c=Math.max(c+d,0));c<d;c++){var f=e[c];if(f===b||Object.is(f,b))return!0}return!1}});function I(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
A("WeakMap",function(a){function b(g){this.a=(m+=Math.random()+1).toString();if(g){g=v(g);for(var l;!(l=g.next()).done;)l=l.value,this.set(l[0],l[1])}}function c(){}function e(g){if(!I(g,f)){var l=new c;n(g,f,{value:l})}}function d(g){var l=Object[g];l&&(Object[g]=function(r){if(r instanceof c)return r;e(r);return l(r)})}if(function(){if(!a||!Object.seal)return!1;try{var g=Object.seal({}),l=Object.seal({}),r=new a([[g,2],[l,3]]);if(2!=r.get(g)||3!=r.get(l))return!1;r.delete(g);r.set(l,4);return!r.has(g)&&
4==r.get(l)}catch(da){return!1}}())return a;var f="$jscomp_hidden_"+Math.random();d("freeze");d("preventExtensions");d("seal");var m=0;b.prototype.set=function(g,l){e(g);if(!I(g,f))throw Error("WeakMap key fail: "+g);g[f][this.a]=l;return this};b.prototype.get=function(g){return I(g,f)?g[f][this.a]:void 0};b.prototype.has=function(g){return I(g,f)&&I(g[f],this.a)};b.prototype.delete=function(g){return I(g,f)&&I(g[f],this.a)?delete g[f][this.a]:!1};return b});
A("Object.entries",function(a){return a?a:function(b){var c=[],e;for(e in b)I(b,e)&&c.push([e,b[e]]);return c}});var qa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var e=arguments[c];if(e)for(var d in e)I(e,d)&&(a[d]=e[d])}return a};A("Object.assign",function(a){return a||qa});function ra(a,b,c,e,d){this.b=a;this.a=b;this.f=c;this.c=e;this.i=void 0===d?null:d}
function sa(a){var b=/\s+/;return a.trim().split(/\s*;\s*/).map(function(c){return c.split(b)}).reduce(function(c,e){e[0]&&(c[e[0]]=e.slice(1).map(function(d){return d}).sort());return c},{})}
function ta(){var a=ua,b=sa(a),c="require-trusted-types-for"in b&&b["require-trusted-types-for"].includes("'script'"),e=["*"],d=!0;"trusted-types"in b&&(e=b["trusted-types"].filter(function(f){return"'"!==f.charAt(0)}),d=b["trusted-types"].includes("'allow-duplicates'"),1==b["trusted-types"].length&&"'none'"==b["trusted-types"][0]&&(e=[]));return new ra(!0,c,e,d,a)};var va="onabort onactivate onactivateinvisible onafterprint onafterupdate onanimationcancel onanimationend onanimationiteration onanimationstart onariarequest onauxclick onbeforeactivate onbeforecopy onbeforecut onbeforedeactivate onbeforeeditfocus onbeforepaste onbeforeprint onbeforeunload onbegin onblur onbounce oncancel oncanplay oncanplaythrough oncellchange onchange onclick onclose oncommand oncontextmenu oncontrolselect oncopy oncuechange oncut ondataavailable ondatasetchanged ondatasetcomplete ondblclick ondeactivate ondrag ondragdrop ondragend ondragenter ondragexit ondragleave ondragover ondragstart ondrop ondurationchange onemptied onend onended onerror onerrorupdate onexit onfilterchange onfinish onfocus onfocusin onfocusout onformdata onfullscreenchange onfullscreenerror ongotpointercapture onhelp oninput oninvalid onkeydown onkeypress onkeyup onlayoutcomplete onload onloadeddata onloadedmetadata onloadend onloadstart onlosecapture onlostpointercapture onmediacomplete onmediaerror onmessage onmousedown onmouseenter onmouseleave onmousemove onmouseout onmouseover onmouseup onmousewheel onmove onmoveend onmovestart onmozfullscreenchange onmozfullscreenerror onmscontentzoom onmsgesturechange onmsgesturedoubletap onmsgestureend onmsgesturehold onmsgesturestart onmsgesturetap onmsgotpointercapture onmsinertiastart onmslostpointercapture onmsmanipulationstatechanged onmspointercancel onmspointerdown onmspointerenter onmspointerleave onmspointermove onmspointerout onmspointerover onmspointerup onoffline ononline onoutofsync onoverscroll onpaste onpause onplay onplaying onpointercancel onpointerdown onpointerenter onpointerleave onpointermove onpointerout onpointerover onpointerrawupdate onpointerup onprogress onpropertychange onratechange onreadystatechange onrepeat onreset onresize onresizeend onresizestart onresume onreverse onrowdelete onrowenter onrowexit onrowinserted onscroll onscrollend onsearch onseek onseeked onseeking onselect onselectionchange onselectstart onshow onstalled onstart onstop onstorage onsubmit onsuspend onsynchrestored ontimeerror ontimeupdate ontoggle ontrackchange ontransitioncancel ontransitionend ontransitionrun ontransitionstart onunload onurlflip onvolumechange onwaiting onwebkitanimationend onwebkitanimationiteration onwebkitanimationstart onwebkitfullscreenchange onwebkitfullscreenerror onwebkittransitionend onwheel".split(" ");
function wa(){if("undefined"!==typeof window){var a=[],b;for(b in HTMLElement.prototype)"on"===b.slice(0,2)&&a.push(b);return a}return va};var xa="undefined"!==typeof window;function ya(){throw new TypeError("undefined conversion");}function za(){return null}var Aa=String.prototype,Ba=Aa.toLowerCase,Ca=Aa.toUpperCase;function Da(){throw new TypeError("Illegal constructor");}function Ja(){throw new TypeError("Illegal constructor");}
var Ka=function(){function a(h){return e.apply(this,arguments)||this}function b(h){return e.apply(this,arguments)||this}function c(h){return e.apply(this,arguments)||this}function e(h,k){if(h!==T)throw Error("cannot call the constructor");M(this,"policyName",{value:k,enumerable:!0})}function d(h){var k=fa.get(h);void 0===k&&(k=F(null),fa.set(h,k));return k}function f(h){var k=Ea(h);if(null==k||Ea(k)!==Fa)throw Error();k=v(ha(k));for(var q=k.next();!q.done;q=k.next())q=q.value,M(h,q,{value:h[q]});
return h}function m(h,k){B(h.prototype);delete h.name;M(h,"name",{value:k})}function g(h){return function(k){return k instanceof h&&fa.has(k)}}function l(h,k){function q(U,N){var lb=k[N]||("default"==h?za:ya),mb=B(new U(T,h));U={};N=(U[N]=function(nb,Eb){for(var y=[],G=1;G<arguments.length;++G)y[G-1]=arguments[G];y=lb.apply(null,[""+nb].concat(y instanceof Array?y:ia(v(y))));if(void 0===y||null===y){if("default"==h)return y;y=""}y=""+y;G=B(F(mb));d(G).v=y;return G},U)[N];return B(N)}for(var p=F(Da.prototype),
t=v(ha(V)),H=t.next();!H.done;H=t.next())H=H.value,p[H]=q(V[H],H);M(p,"name",{value:h,writable:!1,configurable:!1,enumerable:!0});return B(p)}function r(h,k,q,p,t){p=void 0===p?"":p;t=void 0===t?"":t;h=Ca.apply(String(h));(p=t?t:p)||(p="http://www.w3.org/1999/xhtml");if(p=O.apply(z,[p])?z[p]:null){if(O.apply(p,[h])&&p[h]&&O.apply(p[h][k],[q])&&p[h][k][q])return p[h][k][q];if(O.apply(p,["*"])&&O.apply(p["*"][k],[q])&&p["*"][k][q])return p["*"][k][q]}}function da(){return P}var w=Object,ob=w.assign,
F=w.create,M=w.defineProperty,B=w.freeze,ha=w.getOwnPropertyNames,Ea=w.getPrototypeOf,Fa=w.prototype,O=Fa.hasOwnProperty;w=Array.prototype;var pb=w.forEach,qb=w.push;ba();var T=Symbol(),fa=f(new WeakMap),Q=f([]),W=f([]),Ga=!0,P=null,X=!1;e.prototype.toString=function(){return d(this).v};e.prototype.valueOf=function(){return d(this).v};pa(c,e);m(c,"TrustedScriptURL");pa(b,e);m(b,"TrustedHTML");pa(a,e);m(a,"TrustedScript");m(e,"TrustedType");w=B(F(new b(T,"")));d(w).v="";var Ha=B(F(new a(T,"")));d(Ha).v=
"";var x={},z=(x["http://www.w3.org/1999/xhtml"]={EMBED:{attributes:{src:c.name}},IFRAME:{attributes:{srcdoc:b.name}},OBJECT:{attributes:{data:c.name,codebase:c.name}},SCRIPT:{attributes:{src:c.name,text:a.name},properties:{innerText:a.name,textContent:a.name,text:a.name}},"*":{attributes:{},properties:{innerHTML:b.name,outerHTML:b.name}}},x["http://www.w3.org/2000/svg"]={"*":{attributes:{},properties:{}}},x);x={codebase:"codeBase",formaction:"formAction"};!xa||"srcdoc"in HTMLIFrameElement.prototype||
delete z["http://www.w3.org/1999/xhtml"].IFRAME.attributes.srcdoc;for(var C=v(Object.keys(z["http://www.w3.org/1999/xhtml"])),D=C.next();!D.done;D=C.next()){D=D.value;z["http://www.w3.org/1999/xhtml"][D].properties||(z["http://www.w3.org/1999/xhtml"][D].properties={});for(var Ia=v(Object.keys(z["http://www.w3.org/1999/xhtml"][D].attributes)),E=Ia.next();!E.done;E=Ia.next())E=E.value,z["http://www.w3.org/1999/xhtml"][D].properties[x[E]?x[E]:E]=z["http://www.w3.org/1999/xhtml"][D].attributes[E]}x=v(wa());
for(C=x.next();!C.done;C=x.next())C=C.value,z["http://www.w3.org/1999/xhtml"]["*"].attributes[C]="TrustedScript",z["http://www.w3.org/2000/svg"]["*"].attributes[C]="TrustedScript";var V={createHTML:b,createScriptURL:c,createScript:a},rb=V.hasOwnProperty;x=F(Ja.prototype);ob(x,{createPolicy:function(h,k){if(!h.match(/^[-#a-zA-Z0-9=_/@.%]+$/g))throw new TypeError("Policy "+h+" contains invalid characters.");if(X&&-1===W.indexOf(h)&&-1===W.indexOf("*"))throw new TypeError("Policy "+h+" disallowed.");
if("default"===h&&P)throw new TypeError("Policy "+h+" already exists.");if(X&&!Ga&&-1!==Q.indexOf(h))throw new TypeError("Policy "+h+" exists.");Q.push(h);var q=F(null);if(k&&"object"===typeof k)for(var p=v(ha(k)),t=p.next();!t.done;t=p.next())t=t.value,rb.call(V,t)&&(q[t]=k[t]);else console.warn("trustedTypes.createPolicy "+h+" was given an empty policy");B(q);k=l(h,q);"default"===h&&(P=k);return k},l:g(b),m:g(c),g:g(a),h:function(h,k,q,p){q=void 0===q?"":q;p=void 0===p?"":p;k=Ba.apply(String(k));
return r(h,"attributes",k,q,p)||null},w:function(h,k,q){return r(h,"properties",String(k),void 0===q?"":q)||null},j:function(h){h=void 0===h?"":h;if(!h)try{h=document.documentElement.namespaceURI}catch(k){h="http://www.w3.org/1999/xhtml"}return(h=z[h])?JSON.parse(JSON.stringify(h)):{}},s:w,u:Ha,G:P,TrustedHTML:b,TrustedScriptURL:c,TrustedScript:a});M(x,"defaultPolicy",{get:da,set:function(){}});return{D:B(x),C:function(h,k){X=!0;W.length=0;pb.call(h,function(q){qb.call(W,""+q)});Ga=k;Q.length=0},
F:function(){X=!1},H:da,I:function(){P=null;Q.splice(Q.indexOf("default"),1)}}}(),J=Ka.D,La=Ka.C;var Ma=Object.defineProperty;function Na(a,b,c){Ma(a,b,{value:c})};for(var K=Reflect.apply,Oa=Object,Pa=Oa.getOwnPropertyNames,Qa=Oa.getOwnPropertyDescriptor,Ra=Oa.getPrototypeOf,Sa=Object.prototype.hasOwnProperty,Ta=String.prototype.slice,Ua="function"==typeof window.URL?URL.prototype.constructor:null,Va,Wa=document.createElement("div").constructor.name?function(a){return a.name}:function(a){return(""+a).match(/^\[object (\S+)\]$/)[1]},Xa=K(Sa,Element.prototype,["insertAdjacentHTML"])?Element.prototype:HTMLElement.prototype,Ya=window.SecurityPolicyViolationEvent||
null,L=J.j("http://www.w3.org/1999/xhtml"),R={TrustedHTML:J.TrustedHTML,TrustedScript:J.TrustedScript,TrustedScriptURL:J.TrustedScriptURL},Za=v(Object.keys(L)),$a=Za.next();!$a.done;$a=Za.next())for(var ab=L[$a.value].properties,bb=v(Object.entries(ab)),cb=bb.next();!cb.done;cb=bb.next()){var db=v(cb.value),eb=db.next().value,fb=db.next().value;ab[eb]=R[fb]}var gb={TrustedHTML:J.l,TrustedScriptURL:J.m,TrustedScript:J.g},hb={TrustedHTML:"createHTML",TrustedScriptURL:"createScriptURL",TrustedScript:"createScript"};
function S(){this.a=ib;this.b={}}
function jb(){var a=new S;La(a.a.f,a.a.c);if(a.a.a||a.a.b)"ShadowRoot"in window&&kb(a,ShadowRoot.prototype,"innerHTML",J.TrustedHTML),Va=function(b){return 0==b.createRange().createContextualFragment({toString:function(){return"<div></div>"}}).childNodes.length}(document),Y(a,Range.prototype,"createContextualFragment",J.TrustedHTML,0),Y(a,Xa,"insertAdjacentHTML",J.TrustedHTML,1),Qa(Document.prototype,"write")?Y(a,Document.prototype,"write",J.TrustedHTML,0):Y(a,HTMLDocument.prototype,"write",J.TrustedHTML,
0),"DOMParser"in window&&Y(a,DOMParser.prototype,"parseFromString",J.TrustedHTML,0),Y(a,window,"setInterval",J.TrustedScript,0),Y(a,window,"setTimeout",J.TrustedScript,0),sb(a),tb(a),ub(a)}
function tb(a){["appendChild","insertBefore","replaceChild"].forEach(function(b){Z(a,Node.prototype,b,function(c,e){for(var d=[],f=1;f<arguments.length;++f)d[f-1]=arguments[f];return a.f.bind(a,this,!1,c).apply(a,d)})});Z(a,Xa,"insertAdjacentText",function(b,c){for(var e=[],d=1;d<arguments.length;++d)e[d-1]=arguments[d];return a.i.bind(a,this,b).apply(a,e)});"after"in Element.prototype&&(["after","before","replaceWith"].forEach(function(b){Z(a,Element.prototype,b,function(c,e){for(var d=[],f=1;f<
arguments.length;++f)d[f-1]=arguments[f];return a.f.bind(a,this,!0,c).apply(a,d)})}),["append","prepend"].forEach(function(b){Z(a,Element.prototype,b,function(c,e){for(var d=[],f=1;f<arguments.length;++f)d[f-1]=arguments[f];return a.f.bind(a,this,!1,c).apply(a,d)})}))}
function ub(a){for(var b=v(Pa(L)),c=b.next();!c.done;c=b.next()){c=c.value;for(var e=v(Pa(L[c].properties)),d=e.next();!d.done;d=e.next())d=d.value,kb(a,window["*"==c?"HTMLElement":Wa(document.createElement(c).constructor)].prototype,d,L[c].properties[d])}}
function sb(a){Z(a,Element.prototype,"setAttribute",function(b,c){for(var e=[],d=1;d<arguments.length;++d)e[d-1]=arguments[d];return a.B.bind(a,this,b).apply(a,e)});Z(a,Element.prototype,"setAttributeNS",function(b,c){for(var e=[],d=1;d<arguments.length;++d)e[d-1]=arguments[d];return a.A.bind(a,this,b).apply(a,e)})}
S.prototype.B=function(a,b,c){for(var e=[],d=2;d<arguments.length;++d)e[d-2]=arguments[d];return null!==a.constructor&&a instanceof Element&&(d=(e[0]=String(e[0])).toLowerCase(),(d=J.h(a.tagName,d,a.namespaceURI))&&K(Sa,R,[d]))?this.c(a,"setAttribute",R[d],b,1,e):K(b,a,e)};
S.prototype.A=function(a,b,c){for(var e=[],d=2;d<arguments.length;++d)e[d-2]=arguments[d];if(null!==a.constructor&&a instanceof Element){d=e[0]?String(e[0]):null;e[0]=d;var f=(e[1]=String(e[1])).toLowerCase();if((d=J.h(a.tagName,f,a.namespaceURI,d))&&K(Sa,R,[d]))return this.c(a,"setAttributeNS",R[d],b,2,e)}return K(b,a,e)};
S.prototype.f=function(a,b,c,e){for(var d=[],f=3;f<arguments.length;++f)d[f-3]=arguments[f];if((b?a.parentNode:a)instanceof HTMLScriptElement&&0<d.length)for(f=0;f<d.length;f++){var m=d[f];if(!(m instanceof Node&&m.nodeType!==Node.TEXT_NODE)){if(m instanceof Node&&m.nodeType==Node.TEXT_NODE)m=m.textContent;else if(J.g(m)){d[f]=document.createTextNode(""+m);continue}var g=vb("TrustedScript",""+m,"script.text");null===g||void 0===g?wb(this,a,c.name,J.TrustedScript,m):m=g;d[f]=document.createTextNode(""+
m)}}return K(c,a,d)};
S.prototype.i=function(a,b,c){for(var e=[],d=2;d<arguments.length;++d)e[d-2]=arguments[d];d=["beforebegin","afterend"];if(a instanceof Element&&a.parentElement instanceof HTMLScriptElement&&1<e.length&&d.includes(e[0])&&!J.g(e[1])){e[1]=""+e[1];var f=vb("TrustedScript",e[1],"script.text");null===f||void 0===f?wb(this,a,"insertAdjacentText",J.TrustedScript,e[1]):e[1]=f;f=document.createTextNode(""+e[1]);var m=this.b[xb(Node.prototype,"insertBefore")];switch(e[0]){case d[0]:K(m,a.parentElement,[f,a]);
break;case d[1]:K(m,a.parentElement,[f,a.nextSibling])}}else K(b,a,e)};function Y(a,b,c,e,d){Z(a,b,c,function(f,m){for(var g=[],l=1;l<arguments.length;++l)g[l-1]=arguments[l];return a.c.call(a,this,c,e,f,d,g)})}
function Z(a,b,c,e){var d=Qa(b,c),f=d?d.value:null;if(!(f instanceof Function))throw new TypeError("Property "+c+" on object"+b+" is not a function");d=xb(b,c);if(a.b[d])throw Error("TrustedTypesEnforcer: Double installation detected: "+d+" "+c);Na(b,c,function(m){for(var g=[],l=0;l<arguments.length;++l)g[l]=arguments[l];return e.bind(this,f).apply(this,g)});a.b[d]=f}
function kb(a,b,c,e){function d(r){a.c.call(a,this,c,e,g,0,[r])}var f=b,m,g,l=Ra(Node.prototype);do(g=(m=Qa(f,c))?m.set:null)||(f=Ra(f)||l);while(!g&&f!==l&&f);if(!(g instanceof Function))throw new TypeError("No setter for property "+c+" on object"+b);l=xb(b,c);if(a.b[l])throw Error("TrustedTypesEnforcer: Double installation detected: "+l+" "+c);f===b?Ma(b,c,{set:d}):Ma(b,c,{set:d,get:m.get,configurable:!0});a.b[l]=g}
function xb(a,b){return""+(a.constructor.name?a.constructor.name:a.constructor)+"-"+b}function vb(a,b,c){c=void 0===c?"":c;var e=J.defaultPolicy;return e&&gb.hasOwnProperty(a)?e[hb[a]](b,c):null}
S.prototype.c=function(a,b,c,e,d,f){var m=f[d],g=c.name;if(gb.hasOwnProperty(g)&&gb[g](m))return Va&&"createContextualFragment"==b&&(f[d]=f[d].toString()),K(e,a,f);if(c===J.TrustedScript){var l="setAttribute"==b||"setAttributeNS"===b||"on"===K(Ta,b,[0,2]);if(("setInterval"===b||"setTimeout"===b||l)&&"function"===typeof m||l&&null===m)return K(e,a,f)}f[d]=""+m;g=vb(g,m,(a instanceof Element?a.localName:Wa(a?a.constructor:window.constructor))+"."+b);null===g||void 0===g?wb(this,a,b,c,m):f[d]=g;return K(e,
a,f)};
function wb(a,b,c,e,d){var f=Wa(b.constructor)||""+b,m="Failed to set "+c+" on "+f+": "+("This property requires "+e.name+".");a.a.b&&console.warn(m,c,b,e,d);if("function"==typeof Ya){var g="";if(e===J.TrustedScriptURL){try{var l=new Ua(d,document.baseURI||void 0)}catch(r){l=null}if(g=l||"")g=g.href}e=K(Ta,d,[0,40]);c=new Ya("securitypolicyviolation",{bubbles:!0,blockedURI:g,disposition:a.a.a?"enforce":"report",documentURI:document.location.href,effectiveDirective:"require-trusted-types-for",originalPolicy:a.a.i,
statusCode:0,violatedDirective:"require-trusted-types-for",sample:f+"."+c+" "+e});b instanceof Node&&b.isConnected?b.dispatchEvent(c):document.dispatchEvent(c)}if(a.a.a)throw new TypeError(m);};if("undefined"!==typeof window&&(window.TrustedTypes&&"undefined"===typeof window.trustedTypes&&(window.trustedTypes=Object.freeze(window.TrustedTypes)),"undefined"===typeof window.trustedTypes)){var yb=Object.create(Ja.prototype);Object.assign(yb,{isHTML:J.l,isScriptURL:J.m,isScript:J.g,createPolicy:J.createPolicy,getAttributeType:J.h,getPropertyType:J.w,getTypeMapping:J.j,emptyHTML:J.s,emptyScript:J.u,_isPolyfill_:!0});Object.defineProperty(yb,"defaultPolicy",Object.getOwnPropertyDescriptor(J,"defaultPolicy")||
{});window.trustedTypes=Object.freeze(yb);window.TrustedHTML=J.TrustedHTML;window.TrustedScriptURL=J.TrustedScriptURL;window.TrustedScript=J.TrustedScript;window.TrustedTypePolicy=Da;window.TrustedTypePolicyFactory=Ja};function zb(){try{var a;if(!(a=document.currentScript)){var b=document.getElementsByTagName("script");a=b[b.length-1]}if(a&&"Content-Security-Policy:"==a.textContent.trim().substr(0,24))return a.textContent.trim().slice(24);if(a.dataset.csp)return a.dataset.csp;var c=document.head.querySelector('meta[http-equiv^="Content-Security-Policy"]');if(c)return c.content.trim()}catch(e){}return null}var Ab;
a:{for(var Bb=v(["trustedTypes","TrustedTypes"]),Cb=Bb.next();!Cb.done;Cb=Bb.next()){var Db=Cb.value;if(window[Db]&&!window[Db]._isPolyfill_){Ab=!1;break a}}Ab=!0}if(Ab){var ua=zb(),ib=ua?ta():new ra(!1,!1,[],!0);jb()};}).call(this);

//# sourceMappingURL=trustedtypes.build.js.map
