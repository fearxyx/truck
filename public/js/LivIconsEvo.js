/*! jQuery v1.12.3 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ra(b),i=l.boxSizing&&"border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Sa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Oa.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+eb(b,c,e||(i?"border":"content"),f,h)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){
return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0;
})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});

// Snap.svg 0.5.1
//
// Copyright (c) 2013 – 2017 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// build: 2017-02-07

!function(a){var b,c,d="0.5.0",e="hasOwnProperty",f=/[\.\/]/,g=/\s*,\s*/,h="*",i=function(a,b){return a-b},j={n:{}},k=function(){for(var a=0,b=this.length;b>a;a++)if("undefined"!=typeof this[a])return this[a]},l=function(){for(var a=this.length;--a;)if("undefined"!=typeof this[a])return this[a]},m=Object.prototype.toString,n=String,o=Array.isArray||function(a){return a instanceof Array||"[object Array]"==m.call(a)};eve=function(a,d){var e,f=c,g=Array.prototype.slice.call(arguments,2),h=eve.listeners(a),j=0,m=[],n={},o=[],p=b;o.firstDefined=k,o.lastDefined=l,b=a,c=0;for(var q=0,r=h.length;r>q;q++)"zIndex"in h[q]&&(m.push(h[q].zIndex),h[q].zIndex<0&&(n[h[q].zIndex]=h[q]));for(m.sort(i);m[j]<0;)if(e=n[m[j++]],o.push(e.apply(d,g)),c)return c=f,o;for(q=0;r>q;q++)if(e=h[q],"zIndex"in e)if(e.zIndex==m[j]){if(o.push(e.apply(d,g)),c)break;do if(j++,e=n[m[j]],e&&o.push(e.apply(d,g)),c)break;while(e)}else n[e.zIndex]=e;else if(o.push(e.apply(d,g)),c)break;return c=f,b=p,o},eve._events=j,eve.listeners=function(a){var b,c,d,e,g,i,k,l,m=o(a)?a:a.split(f),n=j,p=[n],q=[];for(e=0,g=m.length;g>e;e++){for(l=[],i=0,k=p.length;k>i;i++)for(n=p[i].n,c=[n[m[e]],n[h]],d=2;d--;)b=c[d],b&&(l.push(b),q=q.concat(b.f||[]));p=l}return q},eve.separator=function(a){a?(a=n(a).replace(/(?=[\.\^\]\[\-])/g,"\\"),a="["+a+"]",f=new RegExp(a)):f=/[\.\/]/},eve.on=function(a,b){if("function"!=typeof b)return function(){};for(var c=o(a)?o(a[0])?a:[a]:n(a).split(g),d=0,e=c.length;e>d;d++)!function(a){for(var c,d=o(a)?a:n(a).split(f),e=j,g=0,h=d.length;h>g;g++)e=e.n,e=e.hasOwnProperty(d[g])&&e[d[g]]||(e[d[g]]={n:{}});for(e.f=e.f||[],g=0,h=e.f.length;h>g;g++)if(e.f[g]==b){c=!0;break}!c&&e.f.push(b)}(c[d]);return function(a){+a==+a&&(b.zIndex=+a)}},eve.f=function(a){var b=[].slice.call(arguments,1);return function(){eve.apply(null,[a,null].concat(b).concat([].slice.call(arguments,0)))}},eve.stop=function(){c=1},eve.nt=function(a){var c=o(b)?b.join("."):b;return a?new RegExp("(?:\\.|\\/|^)"+a+"(?:\\.|\\/|$)").test(c):c},eve.nts=function(){return o(b)?b:b.split(f)},eve.off=eve.unbind=function(a,b){if(!a)return void(eve._events=j={n:{}});var c=o(a)?o(a[0])?a:[a]:n(a).split(g);if(c.length>1)for(var d=0,i=c.length;i>d;d++)eve.off(c[d],b);else{c=o(a)?a:n(a).split(f);var k,l,m,d,i,p,q,r=[j],s=[];for(d=0,i=c.length;i>d;d++)for(p=0;p<r.length;p+=m.length-2){if(m=[p,1],k=r[p].n,c[d]!=h)k[c[d]]&&(m.push(k[c[d]]),s.unshift({n:k,name:c[d]}));else for(l in k)k[e](l)&&(m.push(k[l]),s.unshift({n:k,name:l}));r.splice.apply(r,m)}for(d=0,i=r.length;i>d;d++)for(k=r[d];k.n;){if(b){if(k.f){for(p=0,q=k.f.length;q>p;p++)if(k.f[p]==b){k.f.splice(p,1);break}!k.f.length&&delete k.f}for(l in k.n)if(k.n[e](l)&&k.n[l].f){var t=k.n[l].f;for(p=0,q=t.length;q>p;p++)if(t[p]==b){t.splice(p,1);break}!t.length&&delete k.n[l].f}}else{delete k.f;for(l in k.n)k.n[e](l)&&k.n[l].f&&delete k.n[l].f}k=k.n}a:for(d=0,i=s.length;i>d;d++){k=s[d];for(l in k.n[k.name].f)continue a;for(l in k.n[k.name].n)continue a;delete k.n[k.name]}}},eve.once=function(a,b){var c=function(){return eve.off(a,c),b.apply(this,arguments)};return eve.on(a,c)},eve.version=d,eve.toString=function(){return"You are running Eve "+d},"undefined"!=typeof module&&module.exports?module.exports=eve:"function"==typeof define&&define.amd?define("eve",[],function(){return eve}):a.eve=eve}(this),function(a,b){if("function"==typeof define&&define.amd)define(["eve"],function(c){return b(a,c)});else if("undefined"!=typeof exports){var c=require("eve");module.exports=b(a,c)}else b(a,a.eve)}(window||this,function(a,b){var c=function(b){var c,d={},e=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||function(a){return setTimeout(a,16,(new Date).getTime()),!0},f=Array.isArray||function(a){return a instanceof Array||"[object Array]"==Object.prototype.toString.call(a)},g=0,h="M"+(+new Date).toString(36),i=function(){return h+(g++).toString(36)},j=Date.now||function(){return+new Date},k=function(a){var b=this;if(null==a)return b.s;var c=b.s-a;b.b+=b.dur*c,b.B+=b.dur*c,b.s=a},l=function(a){var b=this;return null==a?b.spd:void(b.spd=a)},m=function(a){var b=this;return null==a?b.dur:(b.s=b.s*a/b.dur,void(b.dur=a))},n=function(){var a=this;delete d[a.id],a.update(),b("mina.stop."+a.id,a)},o=function(){var a=this;a.pdif||(delete d[a.id],a.update(),a.pdif=a.get()-a.b)},p=function(){var a=this;a.pdif&&(a.b=a.get()-a.pdif,delete a.pdif,d[a.id]=a,r())},q=function(){var a,b=this;if(f(b.start)){a=[];for(var c=0,d=b.start.length;d>c;c++)a[c]=+b.start[c]+(b.end[c]-b.start[c])*b.easing(b.s)}else a=+b.start+(b.end-b.start)*b.easing(b.s);b.set(a)},r=function(a){if(!a)return void(c||(c=e(r)));var f=0;for(var g in d)if(d.hasOwnProperty(g)){var h=d[g],i=h.get();f++,h.s=(i-h.b)/(h.dur/h.spd),h.s>=1&&(delete d[g],h.s=1,f--,function(a){setTimeout(function(){b("mina.finish."+a.id,a)})}(h)),h.update()}c=f?e(r):!1},s=function(a,b,c,e,f,g,h){var j={id:i(),start:a,end:b,b:c,s:0,dur:e-c,spd:1,get:f,set:g,easing:h||s.linear,status:k,speed:l,duration:m,stop:n,pause:o,resume:p,update:q};d[j.id]=j;var t,u=0;for(t in d)if(d.hasOwnProperty(t)&&(u++,2==u))break;return 1==u&&r(),j};return s.time=j,s.getById=function(a){return d[a]||null},s.linear=function(a){return a},s.easeout=function(a){return Math.pow(a,1.7)},s.easein=function(a){return Math.pow(a,.48)},s.easeinout=function(a){if(1==a)return 1;if(0==a)return 0;var b=.48-a/1.04,c=Math.sqrt(.1734+b*b),d=c-b,e=Math.pow(Math.abs(d),1/3)*(0>d?-1:1),f=-c-b,g=Math.pow(Math.abs(f),1/3)*(0>f?-1:1),h=e+g+.5;return 3*(1-h)*h*h+h*h*h},s.backin=function(a){if(1==a)return 1;var b=1.70158;return a*a*((b+1)*a-b)},s.backout=function(a){if(0==a)return 0;a-=1;var b=1.70158;return a*a*((b+1)*a+b)+1},s.elastic=function(a){return a==!!a?a:Math.pow(2,-10*a)*Math.sin((a-.075)*(2*Math.PI)/.3)+1},s.bounce=function(a){var b,c=7.5625,d=2.75;return 1/d>a?b=c*a*a:2/d>a?(a-=1.5/d,b=c*a*a+.75):2.5/d>a?(a-=2.25/d,b=c*a*a+.9375):(a-=2.625/d,b=c*a*a+.984375),b},a.mina=s,s}("undefined"==typeof b?function(){}:b),d=function(a){function c(a,b){if(a){if(a.nodeType)return w(a);if(e(a,"array")&&c.set)return c.set.apply(c,a);if(a instanceof s)return a;if(null==b)try{return a=y.doc.querySelector(String(a)),w(a)}catch(d){return null}}return a=null==a?"100%":a,b=null==b?"100%":b,new v(a,b)}function d(a,b){if(b){if("#text"==a&&(a=y.doc.createTextNode(b.text||b["#text"]||"")),"#comment"==a&&(a=y.doc.createComment(b.text||b["#text"]||"")),"string"==typeof a&&(a=d(a)),"string"==typeof b)return 1==a.nodeType?"xlink:"==b.substring(0,6)?a.getAttributeNS(T,b.substring(6)):"xml:"==b.substring(0,4)?a.getAttributeNS(U,b.substring(4)):a.getAttribute(b):"text"==b?a.nodeValue:null;if(1==a.nodeType){for(var c in b)if(b[z](c)){var e=A(b[c]);e?"xlink:"==c.substring(0,6)?a.setAttributeNS(T,c.substring(6),e):"xml:"==c.substring(0,4)?a.setAttributeNS(U,c.substring(4),e):a.setAttribute(c,e):a.removeAttribute(c)}}else"text"in b&&(a.nodeValue=b.text)}else a=y.doc.createElementNS(U,a);return a}function e(a,b){return b=A.prototype.toLowerCase.call(b),"finite"==b?isFinite(a):"array"==b&&(a instanceof Array||Array.isArray&&Array.isArray(a))?!0:"null"==b&&null===a||b==typeof a&&null!==a||"object"==b&&a===Object(a)||J.call(a).slice(8,-1).toLowerCase()==b}function f(a){if("function"==typeof a||Object(a)!==a)return a;var b=new a.constructor;for(var c in a)a[z](c)&&(b[c]=f(a[c]));return b}function h(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return a.push(a.splice(c,1)[0])}function i(a,b,c){function d(){var e=Array.prototype.slice.call(arguments,0),f=e.join("␀"),g=d.cache=d.cache||{},i=d.count=d.count||[];return g[z](f)?(h(i,f),c?c(g[f]):g[f]):(i.length>=1e3&&delete g[i.shift()],i.push(f),g[f]=a.apply(b,e),c?c(g[f]):g[f])}return d}function j(a,b,c,d,e,f){if(null==e){var g=a-c,h=b-d;return g||h?(180+180*D.atan2(-h,-g)/H+360)%360:0}return j(a,b,e,f)-j(c,d,e,f)}function k(a){return a%360*H/180}function l(a){return 180*a/H%360}function m(a){var b=[];return a=a.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g,function(a,c,d){return d=d.split(/\s*,\s*|\s+/),"rotate"==c&&1==d.length&&d.push(0,0),"scale"==c&&(d.length>2?d=d.slice(0,2):2==d.length&&d.push(0,0),1==d.length&&d.push(d[0],0,0)),"skewX"==c?b.push(["m",1,0,D.tan(k(d[0])),1,0,0]):"skewY"==c?b.push(["m",1,D.tan(k(d[0])),0,1,0,0]):b.push([c.charAt(0)].concat(d)),a}),b}function n(a,b){var d=aa(a),e=new c.Matrix;if(d)for(var f=0,g=d.length;g>f;f++){var h,i,j,k,l,m=d[f],n=m.length,o=A(m[0]).toLowerCase(),p=m[0]!=o,q=p?e.invert():0;"t"==o&&2==n?e.translate(m[1],0):"t"==o&&3==n?p?(h=q.x(0,0),i=q.y(0,0),j=q.x(m[1],m[2]),k=q.y(m[1],m[2]),e.translate(j-h,k-i)):e.translate(m[1],m[2]):"r"==o?2==n?(l=l||b,e.rotate(m[1],l.x+l.width/2,l.y+l.height/2)):4==n&&(p?(j=q.x(m[2],m[3]),k=q.y(m[2],m[3]),e.rotate(m[1],j,k)):e.rotate(m[1],m[2],m[3])):"s"==o?2==n||3==n?(l=l||b,e.scale(m[1],m[n-1],l.x+l.width/2,l.y+l.height/2)):4==n?p?(j=q.x(m[2],m[3]),k=q.y(m[2],m[3]),e.scale(m[1],m[1],j,k)):e.scale(m[1],m[1],m[2],m[3]):5==n&&(p?(j=q.x(m[3],m[4]),k=q.y(m[3],m[4]),e.scale(m[1],m[2],j,k)):e.scale(m[1],m[2],m[3],m[4])):"m"==o&&7==n&&e.add(m[1],m[2],m[3],m[4],m[5],m[6])}return e}function o(a){var b=a.node.ownerSVGElement&&w(a.node.ownerSVGElement)||a.node.parentNode&&w(a.node.parentNode)||c.select("svg")||c(0,0),d=b.select("defs"),e=null==d?!1:d.node;return e||(e=u("defs",b.node).node),e}function p(a){return a.node.ownerSVGElement&&w(a.node.ownerSVGElement)||c.select("svg")}function q(a,b,c){function e(a){if(null==a)return I;if(a==+a)return a;d(j,{width:a});try{return j.getBBox().width}catch(b){return 0}}function f(a){if(null==a)return I;if(a==+a)return a;d(j,{height:a});try{return j.getBBox().height}catch(b){return 0}}function g(d,e){null==b?i[d]=e(a.attr(d)||0):d==b&&(i=e(null==c?a.attr(d)||0:c))}var h=p(a).node,i={},j=h.querySelector(".svg---mgr");switch(j||(j=d("rect"),d(j,{x:-9e9,y:-9e9,width:10,height:10,"class":"svg---mgr",fill:"none"}),h.appendChild(j)),a.type){case"rect":g("rx",e),g("ry",f);case"image":g("width",e),g("height",f);case"text":g("x",e),g("y",f);break;case"circle":g("cx",e),g("cy",f),g("r",e);break;case"ellipse":g("cx",e),g("cy",f),g("rx",e),g("ry",f);break;case"line":g("x1",e),g("x2",e),g("y1",f),g("y2",f);break;case"marker":g("refX",e),g("markerWidth",e),g("refY",f),g("markerHeight",f);break;case"radialGradient":g("fx",e),g("fy",f);break;case"tspan":g("dx",e),g("dy",f);break;default:g(b,e)}return h.removeChild(j),i}function r(a){e(a,"array")||(a=Array.prototype.slice.call(arguments,0));for(var b=0,c=0,d=this.node;this[b];)delete this[b++];for(b=0;b<a.length;b++)"set"==a[b].type?a[b].forEach(function(a){d.appendChild(a.node)}):d.appendChild(a[b].node);var f=d.childNodes;for(b=0;b<f.length;b++)this[c++]=w(f[b]);return this}function s(a){if(a.snap in V)return V[a.snap];var b;try{b=a.ownerSVGElement}catch(c){}this.node=a,b&&(this.paper=new v(b)),this.type=a.tagName||a.nodeName;var d=this.id=S(this);if(this.anims={},this._={transform:[]},a.snap=d,V[d]=this,"g"==this.type&&(this.add=r),this.type in{g:1,mask:1,pattern:1,symbol:1})for(var e in v.prototype)v.prototype[z](e)&&(this[e]=v.prototype[e])}function t(a){this.node=a}function u(a,b){var c=d(a);b.appendChild(c);var e=w(c);return e}function v(a,b){var c,e,f,g=v.prototype;if(a&&a.tagName&&"svg"==a.tagName.toLowerCase()){if(a.snap in V)return V[a.snap];var h=a.ownerDocument;c=new s(a),e=a.getElementsByTagName("desc")[0],f=a.getElementsByTagName("defs")[0],e||(e=d("desc"),e.appendChild(h.createTextNode("Created with Snap")),c.node.appendChild(e)),f||(f=d("defs"),c.node.appendChild(f)),c.defs=f;for(var i in g)g[z](i)&&(c[i]=g[i]);c.paper=c.root=c}else c=u("svg",y.doc.body),d(c.node,{height:b,version:1.1,width:a,xmlns:U});return c}function w(a){return a?a instanceof s||a instanceof t?a:a.tagName&&"svg"==a.tagName.toLowerCase()?new v(a):a.tagName&&"object"==a.tagName.toLowerCase()&&"image/svg+xml"==a.type?new v(a.contentDocument.getElementsByTagName("svg")[0]):new s(a):a}function x(a,b){for(var c=0,d=a.length;d>c;c++){var e={type:a[c].type,attr:a[c].attr()},f=a[c].children();b.push(e),f.length&&x(f,e.childNodes=[])}}c.version="0.5.1",c.toString=function(){return"Snap v"+this.version},c._={};var y={win:a.window,doc:a.window.document};c._.glob=y;var z="hasOwnProperty",A=String,B=parseFloat,C=parseInt,D=Math,E=D.max,F=D.min,G=D.abs,H=(D.pow,D.PI),I=(D.round,""),J=Object.prototype.toString,K=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,L=(c._.separator=/[,\s]+/,/[\s]*,[\s]*/),M={hs:1,rg:1},N=/([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,O=/([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,P=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\s]*,?[\s]*/gi,Q=0,R="S"+(+new Date).toString(36),S=function(a){return(a&&a.type?a.type:I)+R+(Q++).toString(36)},T="http://www.w3.org/1999/xlink",U="http://www.w3.org/2000/svg",V={};c.url=function(a){return"url('#"+a+"')"};c._.$=d,c._.id=S,c.format=function(){var a=/\{([^\}]+)\}/g,b=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,c=function(a,c,d){var e=d;return c.replace(b,function(a,b,c,d,f){b=b||d,e&&(b in e&&(e=e[b]),"function"==typeof e&&f&&(e=e()))}),e=(null==e||e==d?a:e)+""};return function(b,d){return A(b).replace(a,function(a,b){return c(a,b,d)})}}(),c._.clone=f,c._.cacher=i,c.rad=k,c.deg=l,c.sin=function(a){return D.sin(c.rad(a))},c.tan=function(a){return D.tan(c.rad(a))},c.cos=function(a){return D.cos(c.rad(a))},c.asin=function(a){return c.deg(D.asin(a))},c.acos=function(a){return c.deg(D.acos(a))},c.atan=function(a){return c.deg(D.atan(a))},c.atan2=function(a){return c.deg(D.atan2(a))},c.angle=j,c.len=function(a,b,d,e){return Math.sqrt(c.len2(a,b,d,e))},c.len2=function(a,b,c,d){return(a-c)*(a-c)+(b-d)*(b-d)},c.closestPoint=function(a,b,c){function d(a){var d=a.x-b,e=a.y-c;return d*d+e*e}for(var e,f,g,h,i=a.node,j=i.getTotalLength(),k=j/i.pathSegList.numberOfItems*.125,l=1/0,m=0;j>=m;m+=k)(h=d(g=i.getPointAtLength(m)))<l&&(e=g,f=m,l=h);for(k*=.5;k>.5;){var n,o,p,q,r,s;(p=f-k)>=0&&(r=d(n=i.getPointAtLength(p)))<l?(e=n,f=p,l=r):(q=f+k)<=j&&(s=d(o=i.getPointAtLength(q)))<l?(e=o,f=q,l=s):k*=.5}return e={x:e.x,y:e.y,length:f,distance:Math.sqrt(l)}},c.is=e,c.snapTo=function(a,b,c){if(c=e(c,"finite")?c:10,e(a,"array")){for(var d=a.length;d--;)if(G(a[d]-b)<=c)return a[d]}else{a=+a;var f=b%a;if(c>f)return b-f;if(f>a-c)return b-f+a}return b},c.getRGB=i(function(a){if(!a||(a=A(a)).indexOf("-")+1)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:Z};if("none"==a)return{r:-1,g:-1,b:-1,hex:"none",toString:Z};if(!(M[z](a.toLowerCase().substring(0,2))||"#"==a.charAt())&&(a=W(a)),!a)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:Z};var b,d,f,g,h,i,j=a.match(K);return j?(j[2]&&(f=C(j[2].substring(5),16),d=C(j[2].substring(3,5),16),b=C(j[2].substring(1,3),16)),j[3]&&(f=C((h=j[3].charAt(3))+h,16),d=C((h=j[3].charAt(2))+h,16),b=C((h=j[3].charAt(1))+h,16)),j[4]&&(i=j[4].split(L),b=B(i[0]),"%"==i[0].slice(-1)&&(b*=2.55),d=B(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),f=B(i[2]),"%"==i[2].slice(-1)&&(f*=2.55),"rgba"==j[1].toLowerCase().slice(0,4)&&(g=B(i[3])),i[3]&&"%"==i[3].slice(-1)&&(g/=100)),j[5]?(i=j[5].split(L),b=B(i[0]),"%"==i[0].slice(-1)&&(b/=100),d=B(i[1]),"%"==i[1].slice(-1)&&(d/=100),f=B(i[2]),"%"==i[2].slice(-1)&&(f/=100),("deg"==i[0].slice(-3)||"°"==i[0].slice(-1))&&(b/=360),"hsba"==j[1].toLowerCase().slice(0,4)&&(g=B(i[3])),i[3]&&"%"==i[3].slice(-1)&&(g/=100),c.hsb2rgb(b,d,f,g)):j[6]?(i=j[6].split(L),b=B(i[0]),"%"==i[0].slice(-1)&&(b/=100),d=B(i[1]),"%"==i[1].slice(-1)&&(d/=100),f=B(i[2]),"%"==i[2].slice(-1)&&(f/=100),("deg"==i[0].slice(-3)||"°"==i[0].slice(-1))&&(b/=360),"hsla"==j[1].toLowerCase().slice(0,4)&&(g=B(i[3])),i[3]&&"%"==i[3].slice(-1)&&(g/=100),c.hsl2rgb(b,d,f,g)):(b=F(D.round(b),255),d=F(D.round(d),255),f=F(D.round(f),255),g=F(E(g,0),1),j={r:b,g:d,b:f,toString:Z},j.hex="#"+(16777216|f|d<<8|b<<16).toString(16).slice(1),j.opacity=e(g,"finite")?g:1,j)):{r:-1,g:-1,b:-1,hex:"none",error:1,toString:Z}},c),c.hsb=i(function(a,b,d){return c.hsb2rgb(a,b,d).hex}),c.hsl=i(function(a,b,d){return c.hsl2rgb(a,b,d).hex}),c.rgb=i(function(a,b,c,d){if(e(d,"finite")){var f=D.round;return"rgba("+[f(a),f(b),f(c),+d.toFixed(2)]+")"}return"#"+(16777216|c|b<<8|a<<16).toString(16).slice(1)});var W=function(a){var b=y.doc.getElementsByTagName("head")[0]||y.doc.getElementsByTagName("svg")[0],c="rgb(255, 0, 0)";return(W=i(function(a){if("red"==a.toLowerCase())return c;b.style.color=c,b.style.color=a;var d=y.doc.defaultView.getComputedStyle(b,I).getPropertyValue("color");return d==c?null:d}))(a)},X=function(){return"hsb("+[this.h,this.s,this.b]+")"},Y=function(){return"hsl("+[this.h,this.s,this.l]+")"},Z=function(){return 1==this.opacity||null==this.opacity?this.hex:"rgba("+[this.r,this.g,this.b,this.opacity]+")"},$=function(a,b,d){if(null==b&&e(a,"object")&&"r"in a&&"g"in a&&"b"in a&&(d=a.b,b=a.g,a=a.r),null==b&&e(a,string)){var f=c.getRGB(a);a=f.r,b=f.g,d=f.b}return(a>1||b>1||d>1)&&(a/=255,b/=255,d/=255),[a,b,d]},_=function(a,b,d,f){a=D.round(255*a),b=D.round(255*b),d=D.round(255*d);var g={r:a,g:b,b:d,opacity:e(f,"finite")?f:1,hex:c.rgb(a,b,d),toString:Z};return e(f,"finite")&&(g.opacity=f),g};c.color=function(a){var b;return e(a,"object")&&"h"in a&&"s"in a&&"b"in a?(b=c.hsb2rgb(a),a.r=b.r,a.g=b.g,a.b=b.b,a.opacity=1,a.hex=b.hex):e(a,"object")&&"h"in a&&"s"in a&&"l"in a?(b=c.hsl2rgb(a),a.r=b.r,a.g=b.g,a.b=b.b,a.opacity=1,a.hex=b.hex):(e(a,"string")&&(a=c.getRGB(a)),e(a,"object")&&"r"in a&&"g"in a&&"b"in a&&!("error"in a)?(b=c.rgb2hsl(a),a.h=b.h,a.s=b.s,a.l=b.l,b=c.rgb2hsb(a),a.v=b.b):(a={hex:"none"},a.r=a.g=a.b=a.h=a.s=a.v=a.l=-1,a.error=1)),a.toString=Z,a},c.hsb2rgb=function(a,b,c,d){e(a,"object")&&"h"in a&&"s"in a&&"b"in a&&(c=a.b,b=a.s,d=a.o,a=a.h),a*=360;var f,g,h,i,j;return a=a%360/60,j=c*b,i=j*(1-G(a%2-1)),f=g=h=c-j,a=~~a,f+=[j,i,0,0,i,j][a],g+=[i,j,j,i,0,0][a],h+=[0,0,i,j,j,i][a],_(f,g,h,d)},c.hsl2rgb=function(a,b,c,d){e(a,"object")&&"h"in a&&"s"in a&&"l"in a&&(c=a.l,b=a.s,a=a.h),(a>1||b>1||c>1)&&(a/=360,b/=100,c/=100),a*=360;var f,g,h,i,j;return a=a%360/60,j=2*b*(.5>c?c:1-c),i=j*(1-G(a%2-1)),f=g=h=c-j/2,a=~~a,f+=[j,i,0,0,i,j][a],g+=[i,j,j,i,0,0][a],h+=[0,0,i,j,j,i][a],_(f,g,h,d)},c.rgb2hsb=function(a,b,c){c=$(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g;return f=E(a,b,c),g=f-F(a,b,c),d=0==g?null:f==a?(b-c)/g:f==b?(c-a)/g+2:(a-b)/g+4,d=(d+360)%6*60/360,e=0==g?0:g/f,{h:d,s:e,b:f,toString:X}},c.rgb2hsl=function(a,b,c){c=$(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g,h,i;return g=E(a,b,c),h=F(a,b,c),i=g-h,d=0==i?null:g==a?(b-c)/i:g==b?(c-a)/i+2:(a-b)/i+4,d=(d+360)%6*60/360,f=(g+h)/2,e=0==i?0:.5>f?i/(2*f):i/(2-2*f),{h:d,s:e,l:f,toString:Y}},c.parsePathString=function(a){if(!a)return null;var b=c.path(a);if(b.arr)return c.path.clone(b.arr);var d={a:7,c:6,o:2,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,u:3,z:0},f=[];return e(a,"array")&&e(a[0],"array")&&(f=c.path.clone(a)),f.length||A(a).replace(N,function(a,b,c){var e=[],g=b.toLowerCase();if(c.replace(P,function(a,b){b&&e.push(+b)}),"m"==g&&e.length>2&&(f.push([b].concat(e.splice(0,2))),g="l",b="m"==b?"l":"L"),"o"==g&&1==e.length&&f.push([b,e[0]]),"r"==g)f.push([b].concat(e));else for(;e.length>=d[g]&&(f.push([b].concat(e.splice(0,d[g]))),d[g]););}),f.toString=c.path.toString,b.arr=c.path.clone(f),f};var aa=c.parseTransformString=function(a){if(!a)return null;var b=[];return e(a,"array")&&e(a[0],"array")&&(b=c.path.clone(a)),b.length||A(a).replace(O,function(a,c,d){var e=[];c.toLowerCase();d.replace(P,function(a,b){b&&e.push(+b)}),b.push([c].concat(e))}),b.toString=c.path.toString,b};c._.svgTransform2string=m,c._.rgTransform=/^[a-z][\s]*-?\.?\d/i,c._.transform2matrix=n,c._unit2px=q;y.doc.contains||y.doc.compareDocumentPosition?function(a,b){var c=9==a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a==d||!(!d||1!=d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)for(;b;)if(b=b.parentNode,b==a)return!0;return!1};c._.getSomeDefs=o,c._.getSomeSVG=p,c.select=function(a){return a=A(a).replace(/([^\\]):/g,"$1\\:"),w(y.doc.querySelector(a))},c.selectAll=function(a){for(var b=y.doc.querySelectorAll(a),d=(c.set||Array)(),e=0;e<b.length;e++)d.push(w(b[e]));return d},setInterval(function(){for(var a in V)if(V[z](a)){var b=V[a],c=b.node;("svg"!=b.type&&!c.ownerSVGElement||"svg"==b.type&&(!c.parentNode||"ownerSVGElement"in c.parentNode&&!c.ownerSVGElement))&&delete V[a]}},1e4),s.prototype.attr=function(a,c){var d=this,f=d.node;if(!a){if(1!=f.nodeType)return{text:f.nodeValue};for(var g=f.attributes,h={},i=0,j=g.length;j>i;i++)h[g[i].nodeName]=g[i].nodeValue;return h}if(e(a,"string")){if(!(arguments.length>1))return b("snap.util.getattr."+a,d).firstDefined();var k={};k[a]=c,a=k}for(var l in a)a[z](l)&&b("snap.util.attr."+l,d,a[l]);return d},c.parse=function(a){var b=y.doc.createDocumentFragment(),c=!0,d=y.doc.createElement("div");if(a=A(a),a.match(/^\s*<\s*svg(?:\s|>)/)||(a="<svg>"+a+"</svg>",c=!1),d.innerHTML=a,a=d.getElementsByTagName("svg")[0])if(c)b=a;else for(;a.firstChild;)b.appendChild(a.firstChild);return new t(b)},c.fragment=function(){for(var a=Array.prototype.slice.call(arguments,0),b=y.doc.createDocumentFragment(),d=0,e=a.length;e>d;d++){var f=a[d];f.node&&f.node.nodeType&&b.appendChild(f.node),f.nodeType&&b.appendChild(f),"string"==typeof f&&b.appendChild(c.parse(f).node)}return new t(b)},c._.make=u,c._.wrap=w,v.prototype.el=function(a,b){var c=u(a,this.node);return b&&c.attr(b),c},s.prototype.children=function(){for(var a=[],b=this.node.childNodes,d=0,e=b.length;e>d;d++)a[d]=c(b[d]);return a},s.prototype.toJSON=function(){var a=[];return x([this],a),a[0]},b.on("snap.util.getattr",function(){var a=b.nt();a=a.substring(a.lastIndexOf(".")+1);var c=a.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()});return ba[z](c)?this.node.ownerDocument.defaultView.getComputedStyle(this.node,null).getPropertyValue(c):d(this.node,a)});var ba={"alignment-baseline":0,"baseline-shift":0,clip:0,"clip-path":0,"clip-rule":0,color:0,"color-interpolation":0,"color-interpolation-filters":0,"color-profile":0,"color-rendering":0,cursor:0,direction:0,display:0,"dominant-baseline":0,"enable-background":0,fill:0,"fill-opacity":0,"fill-rule":0,filter:0,"flood-color":0,"flood-opacity":0,font:0,"font-family":0,"font-size":0,"font-size-adjust":0,"font-stretch":0,"font-style":0,"font-variant":0,"font-weight":0,"glyph-orientation-horizontal":0,"glyph-orientation-vertical":0,"image-rendering":0,kerning:0,"letter-spacing":0,"lighting-color":0,marker:0,"marker-end":0,"marker-mid":0,"marker-start":0,mask:0,opacity:0,overflow:0,"pointer-events":0,"shape-rendering":0,"stop-color":0,"stop-opacity":0,stroke:0,"stroke-dasharray":0,"stroke-dashoffset":0,"stroke-linecap":0,"stroke-linejoin":0,"stroke-miterlimit":0,"stroke-opacity":0,"stroke-width":0,"text-anchor":0,"text-decoration":0,"text-rendering":0,"unicode-bidi":0,visibility:0,"word-spacing":0,"writing-mode":0};b.on("snap.util.attr",function(a){var c=b.nt(),e={};c=c.substring(c.lastIndexOf(".")+1),e[c]=a;var f=c.replace(/-(\w)/gi,function(a,b){return b.toUpperCase()}),g=c.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()});ba[z](g)?this.node.style[f]=null==a?I:a:d(this.node,e)}),function(a){}(v.prototype),c.ajax=function(a,c,d,f){var g=new XMLHttpRequest,h=S();if(g){if(e(c,"function"))f=d,d=c,c=null;else if(e(c,"object")){var i=[];for(var j in c)c.hasOwnProperty(j)&&i.push(encodeURIComponent(j)+"="+encodeURIComponent(c[j]));c=i.join("&")}return g.open(c?"POST":"GET",a,!0),c&&(g.setRequestHeader("X-Requested-With","XMLHttpRequest"),g.setRequestHeader("Content-type","application/x-www-form-urlencoded")),d&&(b.once("snap.ajax."+h+".0",d),b.once("snap.ajax."+h+".200",d),b.once("snap.ajax."+h+".304",d)),g.onreadystatechange=function(){4==g.readyState&&b("snap.ajax."+h+"."+g.status,f,g)},4==g.readyState?g:(g.send(c),g)}},c.load=function(a,b,d){c.ajax(a,function(a){var e=c.parse(a.responseText);d?b.call(d,e):b(e)})};var ca=function(a){var b=a.getBoundingClientRect(),c=a.ownerDocument,d=c.body,e=c.documentElement,f=e.clientTop||d.clientTop||0,h=e.clientLeft||d.clientLeft||0,i=b.top+(g.win.pageYOffset||e.scrollTop||d.scrollTop)-f,j=b.left+(g.win.pageXOffset||e.scrollLeft||d.scrollLeft)-h;return{y:i,x:j}};return c.getElementByPoint=function(a,b){var c=this,d=(c.canvas,y.doc.elementFromPoint(a,b));if(y.win.opera&&"svg"==d.tagName){var e=ca(d),f=d.createSVGRect();f.x=a-e.x,f.y=b-e.y,f.width=f.height=1;var g=d.getIntersectionList(f,null);g.length&&(d=g[g.length-1])}return d?w(d):null},c.plugin=function(a){a(c,s,v,y,t)},y.win.Snap=c,c}(a||this);return d.plugin(function(c,d,e,f,g){function h(a,b){if(null==b){var d=!0;if(b="linearGradient"==a.type||"radialGradient"==a.type?a.node.getAttribute("gradientTransform"):"pattern"==a.type?a.node.getAttribute("patternTransform"):a.node.getAttribute("transform"),!b)return new c.Matrix;b=c._.svgTransform2string(b)}else b=c._.rgTransform.test(b)?m(b).replace(/\.{3}|\u2026/g,a._.transform||""):c._.svgTransform2string(b),l(b,"array")&&(b=c.path?c.path.toString.call(b):m(b)),a._.transform=b;var e=c._.transform2matrix(b,a.getBBox(1));return d?e:void(a.matrix=e)}function i(a){function b(a,b){var d=o(a.node,b);d=d&&d.match(g),d=d&&d[2],d&&"#"==d.charAt()&&(d=d.substring(1),d&&(i[d]=(i[d]||[]).concat(function(d){var e={};e[b]=c.url(d),o(a.node,e)})))}function d(a){var b=o(a.node,"xlink:href");b&&"#"==b.charAt()&&(b=b.substring(1),b&&(i[b]=(i[b]||[]).concat(function(b){a.attr("xlink:href","#"+b)})))}for(var e,f=a.selectAll("*"),g=/^\s*url\(("|'|)(.*)\1\)\s*$/,h=[],i={},j=0,k=f.length;k>j;j++){e=f[j],b(e,"fill"),b(e,"stroke"),b(e,"filter"),b(e,"mask"),b(e,"clip-path"),d(e);var l=o(e.node,"id");l&&(o(e.node,{id:e.id}),h.push({old:l,id:e.id}))}for(j=0,k=h.length;k>j;j++){var m=i[h[j].old];if(m)for(var n=0,p=m.length;p>n;n++)m[n](h[j].id)}}function j(a){return function(){var b=a?"<"+this.type:"",c=this.node.attributes,d=this.node.childNodes;if(a)for(var e=0,f=c.length;f>e;e++)b+=" "+c[e].name+'="'+c[e].value.replace(/"/g,'\\"')+'"';if(d.length){for(a&&(b+=">"),e=0,f=d.length;f>e;e++)3==d[e].nodeType?b+=d[e].nodeValue:1==d[e].nodeType&&(b+=s(d[e]).toString());a&&(b+="</"+this.type+">")}else a&&(b+="/>");return b}}var k=d.prototype,l=c.is,m=String,n=c._unit2px,o=c._.$,p=c._.make,q=c._.getSomeDefs,r="hasOwnProperty",s=c._.wrap;k.getBBox=function(a){if("tspan"==this.type)return c._.box(this.node.getClientRects().item(0));if(!c.Matrix||!c.path)return this.node.getBBox();var b=this,d=new c.Matrix;if(b.removed)return c._.box();for(;"use"==b.type;)if(a||(d=d.add(b.transform().localMatrix.translate(b.attr("x")||0,b.attr("y")||0))),b.original)b=b.original;else{var e=b.attr("xlink:href");b=b.original=b.node.ownerDocument.getElementById(e.substring(e.indexOf("#")+1))}var f=b._,g=c.path.get[b.type]||c.path.get.deflt;try{return a?(f.bboxwt=g?c.path.getBBox(b.realPath=g(b)):c._.box(b.node.getBBox()),c._.box(f.bboxwt)):(b.realPath=g(b),b.matrix=b.transform().localMatrix,f.bbox=c.path.getBBox(c.path.map(b.realPath,d.add(b.matrix))),c._.box(f.bbox))}catch(h){return c._.box()}};var t=function(){return this.string};k.transform=function(a){var b=this._;if(null==a){for(var d,e=this,f=new c.Matrix(this.node.getCTM()),g=h(this),i=[g],j=new c.Matrix,k=g.toTransformString(),l=m(g)==m(this.matrix)?m(b.transform):k;"svg"!=e.type&&(e=e.parent());)i.push(h(e));for(d=i.length;d--;)j.add(i[d]);return{string:l,globalMatrix:f,totalMatrix:j,localMatrix:g,diffMatrix:f.clone().add(g.invert()),global:f.toTransformString(),total:j.toTransformString(),local:k,toString:t}}return a instanceof c.Matrix?(this.matrix=a,this._.transform=a.toTransformString()):h(this,a),this.node&&("linearGradient"==this.type||"radialGradient"==this.type?o(this.node,{gradientTransform:this.matrix}):"pattern"==this.type?o(this.node,{patternTransform:this.matrix}):o(this.node,{transform:this.matrix})),this},k.parent=function(){return s(this.node.parentNode)},k.append=k.add=function(a){if(a){if("set"==a.type){var b=this;return a.forEach(function(a){b.add(a)}),this}a=s(a),this.node.appendChild(a.node),a.paper=this.paper}return this},k.appendTo=function(a){return a&&(a=s(a),a.append(this)),this},k.prepend=function(a){if(a){if("set"==a.type){var b,c=this;return a.forEach(function(a){b?b.after(a):c.prepend(a),b=a}),this}a=s(a);var d=a.parent();this.node.insertBefore(a.node,this.node.firstChild),this.add&&this.add(),a.paper=this.paper,this.parent()&&this.parent().add(),d&&d.add()}return this},k.prependTo=function(a){return a=s(a),a.prepend(this),this},k.before=function(a){if("set"==a.type){var b=this;return a.forEach(function(a){var c=a.parent();b.node.parentNode.insertBefore(a.node,b.node),c&&c.add()}),this.parent().add(),this}a=s(a);var c=a.parent();return this.node.parentNode.insertBefore(a.node,this.node),this.parent()&&this.parent().add(),c&&c.add(),a.paper=this.paper,this},k.after=function(a){a=s(a);var b=a.parent();return this.node.nextSibling?this.node.parentNode.insertBefore(a.node,this.node.nextSibling):this.node.parentNode.appendChild(a.node),this.parent()&&this.parent().add(),b&&b.add(),a.paper=this.paper,this},k.insertBefore=function(a){a=s(a);var b=this.parent();return a.node.parentNode.insertBefore(this.node,a.node),this.paper=a.paper,b&&b.add(),a.parent()&&a.parent().add(),this},k.insertAfter=function(a){a=s(a);var b=this.parent();return a.node.parentNode.insertBefore(this.node,a.node.nextSibling),this.paper=a.paper,b&&b.add(),a.parent()&&a.parent().add(),this},k.remove=function(){var a=this.parent();return this.node.parentNode&&this.node.parentNode.removeChild(this.node),delete this.paper,this.removed=!0,a&&a.add(),this},k.select=function(a){return s(this.node.querySelector(a))},k.selectAll=function(a){for(var b=this.node.querySelectorAll(a),d=(c.set||Array)(),e=0;e<b.length;e++)d.push(s(b[e]));return d},k.asPX=function(a,b){return null==b&&(b=this.attr(a)),+n(this,a,b)},k.use=function(){var a,b=this.node.id;return b||(b=this.id,o(this.node,{id:b})),a="linearGradient"==this.type||"radialGradient"==this.type||"pattern"==this.type?p(this.type,this.node.parentNode):p("use",this.node.parentNode),o(a.node,{"xlink:href":"#"+b}),a.original=this,a},k.clone=function(){var a=s(this.node.cloneNode(!0));return o(a.node,"id")&&o(a.node,{id:a.id}),i(a),a.insertAfter(this),a},k.toDefs=function(){var a=q(this);return a.appendChild(this.node),this},k.pattern=k.toPattern=function(a,b,c,d){var e=p("pattern",q(this));return null==a&&(a=this.getBBox()),l(a,"object")&&"x"in a&&(b=a.y,c=a.width,d=a.height,a=a.x),o(e.node,{x:a,y:b,width:c,height:d,patternUnits:"userSpaceOnUse",id:e.id,viewBox:[a,b,c,d].join(" ")}),e.node.appendChild(this.node),e},k.marker=function(a,b,c,d,e,f){var g=p("marker",q(this));return null==a&&(a=this.getBBox()),l(a,"object")&&"x"in a&&(b=a.y,c=a.width,d=a.height,e=a.refX||a.cx,f=a.refY||a.cy,a=a.x),o(g.node,{viewBox:[a,b,c,d].join(" "),markerWidth:c,markerHeight:d,orient:"auto",refX:e||0,refY:f||0,id:g.id}),g.node.appendChild(this.node),g};var u={};k.data=function(a,d){var e=u[this.id]=u[this.id]||{};if(0==arguments.length)return b("snap.data.get."+this.id,this,e,null),e;if(1==arguments.length){if(c.is(a,"object")){for(var f in a)a[r](f)&&this.data(f,a[f]);return this}return b("snap.data.get."+this.id,this,e[a],a),e[a]}return e[a]=d,b("snap.data.set."+this.id,this,d,a),this},k.removeData=function(a){return null==a?u[this.id]={}:u[this.id]&&delete u[this.id][a],this},k.outerSVG=k.toString=j(1),k.innerSVG=j(),k.toDataURL=function(){if(a&&a.btoa){var b=this.getBBox(),d=c.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>',{x:+b.x.toFixed(3),y:+b.y.toFixed(3),width:+b.width.toFixed(3),height:+b.height.toFixed(3),
contents:this.outerSVG()});return"data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(d)))}},g.prototype.select=k.select,g.prototype.selectAll=k.selectAll}),d.plugin(function(a,d,e,f,g){function h(a,b,c){return function(d){var e=d.slice(a,b);return 1==e.length&&(e=e[0]),c?c(e):e}}var i=d.prototype,j=a.is,k=String,l="hasOwnProperty",m=function(a,b,d,e){"function"!=typeof d||d.length||(e=d,d=c.linear),this.attr=a,this.dur=b,d&&(this.easing=d),e&&(this.callback=e)};a._.Animation=m,a.animation=function(a,b,c,d){return new m(a,b,c,d)},i.inAnim=function(){var a=this,b=[];for(var c in a.anims)a.anims[l](c)&&!function(a){b.push({anim:new m(a._attrs,a.dur,a.easing,a._callback),mina:a,curStatus:a.status(),status:function(b){return a.status(b)},stop:function(){a.stop()}})}(a.anims[c]);return b},a.animate=function(a,d,e,f,g,h){"function"!=typeof g||g.length||(h=g,g=c.linear);var i=c.time(),j=c(a,d,i,i+f,c.time,e,g);return h&&b.once("mina.finish."+j.id,h),j},i.stop=function(){for(var a=this.inAnim(),b=0,c=a.length;c>b;b++)a[b].stop();return this},i.animate=function(a,d,e,f){"function"!=typeof e||e.length||(f=e,e=c.linear),a instanceof m&&(f=a.callback,e=a.easing,d=a.dur,a=a.attr);var g,i,n,o,p=[],q=[],r={},s=this;for(var t in a)if(a[l](t)){s.equal?(o=s.equal(t,k(a[t])),g=o.from,i=o.to,n=o.f):(g=+s.attr(t),i=+a[t]);var u=j(g,"array")?g.length:1;r[t]=h(p.length,p.length+u,n),p=p.concat(g),q=q.concat(i)}var v=c.time(),w=c(p,q,v,v+d,c.time,function(a){var b={};for(var c in r)r[l](c)&&(b[c]=r[c](a));s.attr(b)},e);return s.anims[w.id]=w,w._attrs=a,w._callback=f,b("snap.animcreated."+s.id,w),b.once("mina.finish."+w.id,function(){b.off("mina.*."+w.id),delete s.anims[w.id],f&&f.call(s)}),b.once("mina.stop."+w.id,function(){b.off("mina.*."+w.id),delete s.anims[w.id]}),s}}),d.plugin(function(a,b,c,d,e){function f(a,b,c,d,e,f){return null==b&&"[object SVGMatrix]"==g.call(a)?(this.a=a.a,this.b=a.b,this.c=a.c,this.d=a.d,this.e=a.e,void(this.f=a.f)):void(null!=a?(this.a=+a,this.b=+b,this.c=+c,this.d=+d,this.e=+e,this.f=+f):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0))}var g=Object.prototype.toString,h=String,i=Math,j="";!function(b){function c(a){return a[0]*a[0]+a[1]*a[1]}function d(a){var b=i.sqrt(c(a));a[0]&&(a[0]/=b),a[1]&&(a[1]/=b)}b.add=function(a,b,c,d,e,g){if(a&&a instanceof f)return this.add(a.a,a.b,a.c,a.d,a.e,a.f);var h=a*this.a+b*this.c,i=a*this.b+b*this.d;return this.e+=e*this.a+g*this.c,this.f+=e*this.b+g*this.d,this.c=c*this.a+d*this.c,this.d=c*this.b+d*this.d,this.a=h,this.b=i,this},f.prototype.multLeft=function(a,b,c,d,e,g){if(a&&a instanceof f)return this.multLeft(a.a,a.b,a.c,a.d,a.e,a.f);var h=a*this.a+c*this.b,i=a*this.c+c*this.d,j=a*this.e+c*this.f+e;return this.b=b*this.a+d*this.b,this.d=b*this.c+d*this.d,this.f=b*this.e+d*this.f+g,this.a=h,this.c=i,this.e=j,this},b.invert=function(){var a=this,b=a.a*a.d-a.b*a.c;return new f(a.d/b,-a.b/b,-a.c/b,a.a/b,(a.c*a.f-a.d*a.e)/b,(a.b*a.e-a.a*a.f)/b)},b.clone=function(){return new f(this.a,this.b,this.c,this.d,this.e,this.f)},b.translate=function(a,b){return this.e+=a*this.a+b*this.c,this.f+=a*this.b+b*this.d,this},b.scale=function(a,b,c,d){return null==b&&(b=a),(c||d)&&this.translate(c,d),this.a*=a,this.b*=a,this.c*=b,this.d*=b,(c||d)&&this.translate(-c,-d),this},b.rotate=function(b,c,d){b=a.rad(b),c=c||0,d=d||0;var e=+i.cos(b).toFixed(9),f=+i.sin(b).toFixed(9);return this.add(e,f,-f,e,c,d),this.add(1,0,0,1,-c,-d)},b.skewX=function(a){return this.skew(a,0)},b.skewY=function(a){return this.skew(0,a)},b.skew=function(b,c){b=b||0,c=c||0,b=a.rad(b),c=a.rad(c);var d=i.tan(b).toFixed(9),e=i.tan(c).toFixed(9);return this.add(1,e,d,1,0,0)},b.x=function(a,b){return a*this.a+b*this.c+this.e},b.y=function(a,b){return a*this.b+b*this.d+this.f},b.get=function(a){return+this[h.fromCharCode(97+a)].toFixed(4)},b.toString=function(){return"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")"},b.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},b.determinant=function(){return this.a*this.d-this.b*this.c},b.split=function(){var b={};b.dx=this.e,b.dy=this.f;var e=[[this.a,this.b],[this.c,this.d]];b.scalex=i.sqrt(c(e[0])),d(e[0]),b.shear=e[0][0]*e[1][0]+e[0][1]*e[1][1],e[1]=[e[1][0]-e[0][0]*b.shear,e[1][1]-e[0][1]*b.shear],b.scaley=i.sqrt(c(e[1])),d(e[1]),b.shear/=b.scaley,this.determinant()<0&&(b.scalex=-b.scalex);var f=e[0][1],g=e[1][1];return 0>g?(b.rotate=a.deg(i.acos(g)),0>f&&(b.rotate=360-b.rotate)):b.rotate=a.deg(i.asin(f)),b.isSimple=!(+b.shear.toFixed(9)||b.scalex.toFixed(9)!=b.scaley.toFixed(9)&&b.rotate),b.isSuperSimple=!+b.shear.toFixed(9)&&b.scalex.toFixed(9)==b.scaley.toFixed(9)&&!b.rotate,b.noRotation=!+b.shear.toFixed(9)&&!b.rotate,b},b.toTransformString=function(a){var b=a||this.split();return+b.shear.toFixed(9)?"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]:(b.scalex=+b.scalex.toFixed(4),b.scaley=+b.scaley.toFixed(4),b.rotate=+b.rotate.toFixed(4),(b.dx||b.dy?"t"+[+b.dx.toFixed(4),+b.dy.toFixed(4)]:j)+(b.rotate?"r"+[+b.rotate.toFixed(4),0,0]:j)+(1!=b.scalex||1!=b.scaley?"s"+[b.scalex,b.scaley,0,0]:j))}}(f.prototype),a.Matrix=f,a.matrix=function(a,b,c,d,e,g){return new f(a,b,c,d,e,g)}}),d.plugin(function(a,c,d,e,f){function g(d){return function(e){if(b.stop(),e instanceof f&&1==e.node.childNodes.length&&("radialGradient"==e.node.firstChild.tagName||"linearGradient"==e.node.firstChild.tagName||"pattern"==e.node.firstChild.tagName)&&(e=e.node.firstChild,n(this).appendChild(e),e=l(e)),e instanceof c)if("radialGradient"==e.type||"linearGradient"==e.type||"pattern"==e.type){e.node.id||p(e.node,{id:e.id});var g=q(e.node.id)}else g=e.attr(d);else if(g=a.color(e),g.error){var h=a(n(this).ownerSVGElement).gradient(e);h?(h.node.id||p(h.node,{id:h.id}),g=q(h.node.id)):g=e}else g=r(g);var i={};i[d]=g,p(this.node,i),this.node.style[d]=t}}function h(a){b.stop(),a==+a&&(a+="px"),this.node.style.fontSize=a}function i(a){for(var b=[],c=a.childNodes,d=0,e=c.length;e>d;d++){var f=c[d];3==f.nodeType&&b.push(f.nodeValue),"tspan"==f.tagName&&(1==f.childNodes.length&&3==f.firstChild.nodeType?b.push(f.firstChild.nodeValue):b.push(i(f)))}return b}function j(){return b.stop(),this.node.style.fontSize}var k=a._.make,l=a._.wrap,m=a.is,n=a._.getSomeDefs,o=/^url\((['"]?)([^)]+)\1\)$/,p=a._.$,q=a.url,r=String,s=a._.separator,t="";a.deurl=function(a){var b=String(a).match(o);return b?b[2]:a},b.on("snap.util.attr.mask",function(a){if(a instanceof c||a instanceof f){if(b.stop(),a instanceof f&&1==a.node.childNodes.length&&(a=a.node.firstChild,n(this).appendChild(a),a=l(a)),"mask"==a.type)var d=a;else d=k("mask",n(this)),d.node.appendChild(a.node);!d.node.id&&p(d.node,{id:d.id}),p(this.node,{mask:q(d.id)})}}),function(a){b.on("snap.util.attr.clip",a),b.on("snap.util.attr.clip-path",a),b.on("snap.util.attr.clipPath",a)}(function(a){if(a instanceof c||a instanceof f){b.stop();for(var d,e=a.node;e;){if("clipPath"===e.nodeName){d=new c(e);break}if("svg"===e.nodeName){d=void 0;break}e=e.parentNode}d||(d=k("clipPath",n(this)),d.node.appendChild(a.node),!d.node.id&&p(d.node,{id:d.id})),p(this.node,{"clip-path":q(d.node.id||d.id)})}}),b.on("snap.util.attr.fill",g("fill")),b.on("snap.util.attr.stroke",g("stroke"));var u=/^([lr])(?:\(([^)]*)\))?(.*)$/i;b.on("snap.util.grad.parse",function(a){function b(a,b){for(var c=(b-h)/(a-i),d=i;a>d;d++)f[d].offset=+(+h+c*(d-i)).toFixed(2);i=a,h=b}a=r(a);var c=a.match(u);if(!c)return null;var d=c[1],e=c[2],f=c[3];e=e.split(/\s*,\s*/).map(function(a){return+a==a?+a:a}),1==e.length&&0==e[0]&&(e=[]),f=f.split("-"),f=f.map(function(a){a=a.split(":");var b={color:a[0]};return a[1]&&(b.offset=parseFloat(a[1])),b});var g=f.length,h=0,i=0;g--;for(var j=0;g>j;j++)"offset"in f[j]&&b(j,f[j].offset);return f[g].offset=f[g].offset||100,b(g,f[g].offset),{type:d,params:e,stops:f}}),b.on("snap.util.attr.d",function(c){b.stop(),m(c,"array")&&m(c[0],"array")&&(c=a.path.toString.call(c)),c=r(c),c.match(/[ruo]/i)&&(c=a.path.toAbsolute(c)),p(this.node,{d:c})})(-1),b.on("snap.util.attr.#text",function(a){b.stop(),a=r(a);for(var c=e.doc.createTextNode(a);this.node.firstChild;)this.node.removeChild(this.node.firstChild);this.node.appendChild(c)})(-1),b.on("snap.util.attr.path",function(a){b.stop(),this.attr({d:a})})(-1),b.on("snap.util.attr.class",function(a){b.stop(),this.node.className.baseVal=a})(-1),b.on("snap.util.attr.viewBox",function(a){var c;c=m(a,"object")&&"x"in a?[a.x,a.y,a.width,a.height].join(" "):m(a,"array")?a.join(" "):a,p(this.node,{viewBox:c}),b.stop()})(-1),b.on("snap.util.attr.transform",function(a){this.transform(a),b.stop()})(-1),b.on("snap.util.attr.r",function(a){"rect"==this.type&&(b.stop(),p(this.node,{rx:a,ry:a}))})(-1),b.on("snap.util.attr.textpath",function(a){if(b.stop(),"text"==this.type){var d,e,f;if(!a&&this.textPath){for(e=this.textPath;e.node.firstChild;)this.node.appendChild(e.node.firstChild);return e.remove(),void delete this.textPath}if(m(a,"string")){var g=n(this),h=l(g.parentNode).path(a);g.appendChild(h.node),d=h.id,h.attr({id:d})}else a=l(a),a instanceof c&&(d=a.attr("id"),d||(d=a.id,a.attr({id:d})));if(d)if(e=this.textPath,f=this.node,e)e.attr({"xlink:href":"#"+d});else{for(e=p("textPath",{"xlink:href":"#"+d});f.firstChild;)e.appendChild(f.firstChild);f.appendChild(e),this.textPath=l(e)}}})(-1),b.on("snap.util.attr.text",function(a){if("text"==this.type){for(var c=this.node,d=function(a){var b=p("tspan");if(m(a,"array"))for(var c=0;c<a.length;c++)b.appendChild(d(a[c]));else b.appendChild(e.doc.createTextNode(a));return b.normalize&&b.normalize(),b};c.firstChild;)c.removeChild(c.firstChild);for(var f=d(a);f.firstChild;)c.appendChild(f.firstChild)}b.stop()})(-1),b.on("snap.util.attr.fontSize",h)(-1),b.on("snap.util.attr.font-size",h)(-1),b.on("snap.util.getattr.transform",function(){return b.stop(),this.transform()})(-1),b.on("snap.util.getattr.textpath",function(){return b.stop(),this.textPath})(-1),function(){function c(c){return function(){b.stop();var d=e.doc.defaultView.getComputedStyle(this.node,null).getPropertyValue("marker-"+c);return"none"==d?d:a(e.doc.getElementById(d.match(o)[1]))}}function d(a){return function(c){b.stop();var d="marker"+a.charAt(0).toUpperCase()+a.substring(1);if(""==c||!c)return void(this.node.style[d]="none");if("marker"==c.type){var e=c.node.id;return e||p(c.node,{id:c.id}),void(this.node.style[d]=q(e))}}}b.on("snap.util.getattr.marker-end",c("end"))(-1),b.on("snap.util.getattr.markerEnd",c("end"))(-1),b.on("snap.util.getattr.marker-start",c("start"))(-1),b.on("snap.util.getattr.markerStart",c("start"))(-1),b.on("snap.util.getattr.marker-mid",c("mid"))(-1),b.on("snap.util.getattr.markerMid",c("mid"))(-1),b.on("snap.util.attr.marker-end",d("end"))(-1),b.on("snap.util.attr.markerEnd",d("end"))(-1),b.on("snap.util.attr.marker-start",d("start"))(-1),b.on("snap.util.attr.markerStart",d("start"))(-1),b.on("snap.util.attr.marker-mid",d("mid"))(-1),b.on("snap.util.attr.markerMid",d("mid"))(-1)}(),b.on("snap.util.getattr.r",function(){return"rect"==this.type&&p(this.node,"rx")==p(this.node,"ry")?(b.stop(),p(this.node,"rx")):void 0})(-1),b.on("snap.util.getattr.text",function(){if("text"==this.type||"tspan"==this.type){b.stop();var a=i(this.node);return 1==a.length?a[0]:a}})(-1),b.on("snap.util.getattr.#text",function(){return this.node.textContent})(-1),b.on("snap.util.getattr.fill",function(c){if(!c){b.stop();var d=b("snap.util.getattr.fill",this,!0).firstDefined();return a(a.deurl(d))||d}})(-1),b.on("snap.util.getattr.stroke",function(c){if(!c){b.stop();var d=b("snap.util.getattr.stroke",this,!0).firstDefined();return a(a.deurl(d))||d}})(-1),b.on("snap.util.getattr.viewBox",function(){b.stop();var c=p(this.node,"viewBox");return c?(c=c.split(s),a._.box(+c[0],+c[1],+c[2],+c[3])):void 0})(-1),b.on("snap.util.getattr.points",function(){var a=p(this.node,"points");return b.stop(),a?a.split(s):void 0})(-1),b.on("snap.util.getattr.path",function(){var a=p(this.node,"d");return b.stop(),a})(-1),b.on("snap.util.getattr.class",function(){return this.node.className.baseVal})(-1),b.on("snap.util.getattr.fontSize",j)(-1),b.on("snap.util.getattr.font-size",j)(-1)}),d.plugin(function(a,b,c,d,e){var f=/\S+/g,g=String,h=b.prototype;h.addClass=function(a){var b,c,d,e,h=g(a||"").match(f)||[],i=this.node,j=i.className.baseVal,k=j.match(f)||[];if(h.length){for(b=0;d=h[b++];)c=k.indexOf(d),~c||k.push(d);e=k.join(" "),j!=e&&(i.className.baseVal=e)}return this},h.removeClass=function(a){var b,c,d,e,h=g(a||"").match(f)||[],i=this.node,j=i.className.baseVal,k=j.match(f)||[];if(k.length){for(b=0;d=h[b++];)c=k.indexOf(d),~c&&k.splice(c,1);e=k.join(" "),j!=e&&(i.className.baseVal=e)}return this},h.hasClass=function(a){var b=this.node,c=b.className.baseVal,d=c.match(f)||[];return!!~d.indexOf(a)},h.toggleClass=function(a,b){if(null!=b)return b?this.addClass(a):this.removeClass(a);var c,d,e,g,h=(a||"").match(f)||[],i=this.node,j=i.className.baseVal,k=j.match(f)||[];for(c=0;e=h[c++];)d=k.indexOf(e),~d?k.splice(d,1):k.push(e);return g=k.join(" "),j!=g&&(i.className.baseVal=g),this}}),d.plugin(function(a,c,d,e,f){function g(a){return a}function h(a){return function(b){return+b.toFixed(3)+a}}var i={"+":function(a,b){return a+b},"-":function(a,b){return a-b},"/":function(a,b){return a/b},"*":function(a,b){return a*b}},j=String,k=/[a-z]+$/i,l=/^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;b.on("snap.util.attr",function(a){var c=j(a).match(l);if(c){var d=b.nt(),e=d.substring(d.lastIndexOf(".")+1),f=this.attr(e),g={};b.stop();var h=c[3]||"",m=f.match(k),n=i[c[1]];if(m&&m==h?a=n(parseFloat(f),+c[2]):(f=this.asPX(e),a=n(this.asPX(e),this.asPX(e,c[2]+h))),isNaN(f)||isNaN(a))return;g[e]=a,this.attr(g)}})(-10),b.on("snap.util.equal",function(a,c){var d=j(this.attr(a)||""),e=j(c).match(l);if(e){b.stop();var f=e[3]||"",m=d.match(k),n=i[e[1]];return m&&m==f?{from:parseFloat(d),to:n(parseFloat(d),+e[2]),f:h(m)}:(d=this.asPX(a),{from:d,to:n(d,this.asPX(a,e[2]+f)),f:g})}})(-10)}),d.plugin(function(c,d,e,f,g){var h=e.prototype,i=c.is;h.rect=function(a,b,c,d,e,f){var g;return null==f&&(f=e),i(a,"object")&&"[object Object]"==a?g=a:null!=a&&(g={x:a,y:b,width:c,height:d},null!=e&&(g.rx=e,g.ry=f)),this.el("rect",g)},h.circle=function(a,b,c){var d;return i(a,"object")&&"[object Object]"==a?d=a:null!=a&&(d={cx:a,cy:b,r:c}),this.el("circle",d)};var j=function(){function a(){this.parentNode.removeChild(this)}return function(b,c){var d=f.doc.createElement("img"),e=f.doc.body;d.style.cssText="position:absolute;left:-9999em;top:-9999em",d.onload=function(){c.call(d),d.onload=d.onerror=null,e.removeChild(d)},d.onerror=a,e.appendChild(d),d.src=b}}();h.image=function(a,b,d,e,f){var g=this.el("image");if(i(a,"object")&&"src"in a)g.attr(a);else if(null!=a){var h={"xlink:href":a,preserveAspectRatio:"none"};null!=b&&null!=d&&(h.x=b,h.y=d),null!=e&&null!=f?(h.width=e,h.height=f):j(a,function(){c._.$(g.node,{width:this.offsetWidth,height:this.offsetHeight})}),c._.$(g.node,h)}return g},h.ellipse=function(a,b,c,d){var e;return i(a,"object")&&"[object Object]"==a?e=a:null!=a&&(e={cx:a,cy:b,rx:c,ry:d}),this.el("ellipse",e)},h.path=function(a){var b;return i(a,"object")&&!i(a,"array")?b=a:a&&(b={d:a}),this.el("path",b)},h.group=h.g=function(a){var b=this.el("g");return 1==arguments.length&&a&&!a.type?b.attr(a):arguments.length&&b.add(Array.prototype.slice.call(arguments,0)),b},h.svg=function(a,b,c,d,e,f,g,h){var j={};return i(a,"object")&&null==b?j=a:(null!=a&&(j.x=a),null!=b&&(j.y=b),null!=c&&(j.width=c),null!=d&&(j.height=d),null!=e&&null!=f&&null!=g&&null!=h&&(j.viewBox=[e,f,g,h])),this.el("svg",j)},h.mask=function(a){var b=this.el("mask");return 1==arguments.length&&a&&!a.type?b.attr(a):arguments.length&&b.add(Array.prototype.slice.call(arguments,0)),b},h.ptrn=function(a,b,c,d,e,f,g,h){if(i(a,"object"))var j=a;else j={patternUnits:"userSpaceOnUse"},a&&(j.x=a),b&&(j.y=b),null!=c&&(j.width=c),null!=d&&(j.height=d),null!=e&&null!=f&&null!=g&&null!=h?j.viewBox=[e,f,g,h]:j.viewBox=[a||0,b||0,c||0,d||0];return this.el("pattern",j)},h.use=function(a){return null!=a?(a instanceof d&&(a.attr("id")||a.attr({id:c._.id(a)}),a=a.attr("id")),"#"==String(a).charAt()&&(a=a.substring(1)),this.el("use",{"xlink:href":"#"+a})):d.prototype.use.call(this)},h.symbol=function(a,b,c,d){var e={};return null!=a&&null!=b&&null!=c&&null!=d&&(e.viewBox=[a,b,c,d]),this.el("symbol",e)},h.text=function(a,b,c){var d={};return i(a,"object")?d=a:null!=a&&(d={x:a,y:b,text:c||""}),this.el("text",d)},h.line=function(a,b,c,d){var e={};return i(a,"object")?e=a:null!=a&&(e={x1:a,x2:c,y1:b,y2:d}),this.el("line",e)},h.polyline=function(a){arguments.length>1&&(a=Array.prototype.slice.call(arguments,0));var b={};return i(a,"object")&&!i(a,"array")?b=a:null!=a&&(b={points:a}),this.el("polyline",b)},h.polygon=function(a){arguments.length>1&&(a=Array.prototype.slice.call(arguments,0));var b={};return i(a,"object")&&!i(a,"array")?b=a:null!=a&&(b={points:a}),this.el("polygon",b)},function(){function d(){return this.selectAll("stop")}function e(a,b){var d=l("stop"),e={offset:+b+"%"};a=c.color(a),e["stop-color"]=a.hex,a.opacity<1&&(e["stop-opacity"]=a.opacity),l(d,e);for(var f,g=this.stops(),h=0;h<g.length;h++){var i=parseFloat(g[h].attr("offset"));if(i>b){this.node.insertBefore(d,g[h].node),f=!0;break}}return f||this.node.appendChild(d),this}function f(){if("linearGradient"==this.type){var a=l(this.node,"x1")||0,b=l(this.node,"x2")||1,d=l(this.node,"y1")||0,e=l(this.node,"y2")||0;return c._.box(a,d,math.abs(b-a),math.abs(e-d))}var f=this.node.cx||.5,g=this.node.cy||.5,h=this.node.r||0;return c._.box(f-h,g-h,2*h,2*h)}function g(a){var d=a,e=this.stops();if("string"==typeof a&&(d=b("snap.util.grad.parse",null,"l(0,0,0,1)"+a).firstDefined().stops),c.is(d,"array")){for(var f=0;f<e.length;f++)if(d[f]){var g=c.color(d[f].color),h={offset:d[f].offset+"%"};h["stop-color"]=g.hex,g.opacity<1&&(h["stop-opacity"]=g.opacity),e[f].attr(h)}else e[f].remove();for(f=e.length;f<d.length;f++)this.addStop(d[f].color,d[f].offset);return this}}function i(a,c){var d,e=b("snap.util.grad.parse",null,c).firstDefined();if(!e)return null;e.params.unshift(a),d="l"==e.type.toLowerCase()?j.apply(0,e.params):k.apply(0,e.params),e.type!=e.type.toLowerCase()&&l(d.node,{gradientUnits:"userSpaceOnUse"});for(var f=e.stops,g=f.length,h=0;g>h;h++){var i=f[h];d.addStop(i.color,i.offset)}return d}function j(a,b,h,i,j){var k=c._.make("linearGradient",a);return k.stops=d,k.addStop=e,k.getBBox=f,k.setStops=g,null!=b&&l(k.node,{x1:b,y1:h,x2:i,y2:j}),k}function k(a,b,g,h,i,j){var k=c._.make("radialGradient",a);return k.stops=d,k.addStop=e,k.getBBox=f,null!=b&&l(k.node,{cx:b,cy:g,r:h}),null!=i&&null!=j&&l(k.node,{fx:i,fy:j}),k}var l=c._.$;h.gradient=function(a){return i(this.defs,a)},h.gradientLinear=function(a,b,c,d){return j(this.defs,a,b,c,d)},h.gradientRadial=function(a,b,c,d,e){return k(this.defs,a,b,c,d,e)},h.toString=function(){var a,b=this.node.ownerDocument,d=b.createDocumentFragment(),e=b.createElement("div"),f=this.node.cloneNode(!0);return d.appendChild(e),e.appendChild(f),c._.$(f,{xmlns:"http://www.w3.org/2000/svg"}),a=e.innerHTML,d.removeChild(d.firstChild),a},h.toDataURL=function(){return a&&a.btoa?"data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(this))):void 0},h.clear=function(){for(var a,b=this.node.firstChild;b;)a=b.nextSibling,"defs"!=b.tagName?b.parentNode.removeChild(b):h.clear.call({node:b}),b=a}}()}),d.plugin(function(a,b,c,d){function e(a){var b=e.ps=e.ps||{};return b[a]?b[a].sleep=100:b[a]={sleep:100},setTimeout(function(){for(var c in b)b[M](c)&&c!=a&&(b[c].sleep--,!b[c].sleep&&delete b[c])}),b[a]}function f(a,b,c,d){return null==a&&(a=b=c=d=0),null==b&&(b=a.y,c=a.width,d=a.height,a=a.x),{x:a,y:b,width:c,w:c,height:d,h:d,x2:a+c,y2:b+d,cx:a+c/2,cy:b+d/2,r1:P.min(c,d)/2,r2:P.max(c,d)/2,r0:P.sqrt(c*c+d*d)/2,path:y(a,b,c,d),vb:[a,b,c,d].join(" ")}}function g(){return this.join(",").replace(N,"$1")}function h(a){var b=L(a);return b.toString=g,b}function i(a,b,c,d,e,f,g,h,i){return null==i?p(a,b,c,d,e,f,g,h):k(a,b,c,d,e,f,g,h,q(a,b,c,d,e,f,g,h,i))}function j(c,d){function e(a){return+(+a).toFixed(3)}return a._.cacher(function(a,f,g){a instanceof b&&(a=a.attr("d")),a=G(a);for(var h,j,l,m,n,o="",p={},q=0,r=0,s=a.length;s>r;r++){if(l=a[r],"M"==l[0])h=+l[1],j=+l[2];else{if(m=i(h,j,l[1],l[2],l[3],l[4],l[5],l[6]),q+m>f){if(d&&!p.start){if(n=i(h,j,l[1],l[2],l[3],l[4],l[5],l[6],f-q),o+=["C"+e(n.start.x),e(n.start.y),e(n.m.x),e(n.m.y),e(n.x),e(n.y)],g)return o;p.start=o,o=["M"+e(n.x),e(n.y)+"C"+e(n.n.x),e(n.n.y),e(n.end.x),e(n.end.y),e(l[5]),e(l[6])].join(),q+=m,h=+l[5],j=+l[6];continue}if(!c&&!d)return n=i(h,j,l[1],l[2],l[3],l[4],l[5],l[6],f-q)}q+=m,h=+l[5],j=+l[6]}o+=l.shift()+l}return p.end=o,n=c?q:d?p:k(h,j,l[0],l[1],l[2],l[3],l[4],l[5],1)},null,a._.clone)}function k(a,b,c,d,e,f,g,h,i){var j=1-i,k=T(j,3),l=T(j,2),m=i*i,n=m*i,o=k*a+3*l*i*c+3*j*i*i*e+n*g,p=k*b+3*l*i*d+3*j*i*i*f+n*h,q=a+2*i*(c-a)+m*(e-2*c+a),r=b+2*i*(d-b)+m*(f-2*d+b),s=c+2*i*(e-c)+m*(g-2*e+c),t=d+2*i*(f-d)+m*(h-2*f+d),u=j*a+i*c,v=j*b+i*d,w=j*e+i*g,x=j*f+i*h,y=90-180*P.atan2(q-s,r-t)/Q;return{x:o,y:p,m:{x:q,y:r},n:{x:s,y:t},start:{x:u,y:v},end:{x:w,y:x},alpha:y}}function l(b,c,d,e,g,h,i,j){a.is(b,"array")||(b=[b,c,d,e,g,h,i,j]);var k=F.apply(null,b);return f(k.min.x,k.min.y,k.max.x-k.min.x,k.max.y-k.min.y)}function m(a,b,c){return b>=a.x&&b<=a.x+a.width&&c>=a.y&&c<=a.y+a.height}function n(a,b){return a=f(a),b=f(b),m(b,a.x,a.y)||m(b,a.x2,a.y)||m(b,a.x,a.y2)||m(b,a.x2,a.y2)||m(a,b.x,b.y)||m(a,b.x2,b.y)||m(a,b.x,b.y2)||m(a,b.x2,b.y2)||(a.x<b.x2&&a.x>b.x||b.x<a.x2&&b.x>a.x)&&(a.y<b.y2&&a.y>b.y||b.y<a.y2&&b.y>a.y)}function o(a,b,c,d,e){var f=-3*b+9*c-9*d+3*e,g=a*f+6*b-12*c+6*d;return a*g-3*b+3*c}function p(a,b,c,d,e,f,g,h,i){null==i&&(i=1),i=i>1?1:0>i?0:i;for(var j=i/2,k=12,l=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],m=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],n=0,p=0;k>p;p++){var q=j*l[p]+j,r=o(q,a,c,e,g),s=o(q,b,d,f,h),t=r*r+s*s;n+=m[p]*P.sqrt(t)}return j*n}function q(a,b,c,d,e,f,g,h,i){if(!(0>i||p(a,b,c,d,e,f,g,h)<i)){var j,k=1,l=k/2,m=k-l,n=.01;for(j=p(a,b,c,d,e,f,g,h,m);U(j-i)>n;)l/=2,m+=(i>j?1:-1)*l,j=p(a,b,c,d,e,f,g,h,m);return m}}function r(a,b,c,d,e,f,g,h){if(!(S(a,c)<R(e,g)||R(a,c)>S(e,g)||S(b,d)<R(f,h)||R(b,d)>S(f,h))){var i=(a*d-b*c)*(e-g)-(a-c)*(e*h-f*g),j=(a*d-b*c)*(f-h)-(b-d)*(e*h-f*g),k=(a-c)*(f-h)-(b-d)*(e-g);if(k){var l=i/k,m=j/k,n=+l.toFixed(2),o=+m.toFixed(2);if(!(n<+R(a,c).toFixed(2)||n>+S(a,c).toFixed(2)||n<+R(e,g).toFixed(2)||n>+S(e,g).toFixed(2)||o<+R(b,d).toFixed(2)||o>+S(b,d).toFixed(2)||o<+R(f,h).toFixed(2)||o>+S(f,h).toFixed(2)))return{x:l,y:m}}}}function s(a,b,c){var d=l(a),e=l(b);if(!n(d,e))return c?0:[];for(var f=p.apply(0,a),g=p.apply(0,b),h=~~(f/8),i=~~(g/8),j=[],m=[],o={},q=c?0:[],s=0;h+1>s;s++){var t=k.apply(0,a.concat(s/h));j.push({x:t.x,y:t.y,t:s/h})}for(s=0;i+1>s;s++)t=k.apply(0,b.concat(s/i)),m.push({x:t.x,y:t.y,t:s/i});for(s=0;h>s;s++)for(var u=0;i>u;u++){var v=j[s],w=j[s+1],x=m[u],y=m[u+1],z=U(w.x-v.x)<.001?"y":"x",A=U(y.x-x.x)<.001?"y":"x",B=r(v.x,v.y,w.x,w.y,x.x,x.y,y.x,y.y);if(B){if(o[B.x.toFixed(4)]==B.y.toFixed(4))continue;o[B.x.toFixed(4)]=B.y.toFixed(4);var C=v.t+U((B[z]-v[z])/(w[z]-v[z]))*(w.t-v.t),D=x.t+U((B[A]-x[A])/(y[A]-x[A]))*(y.t-x.t);C>=0&&1>=C&&D>=0&&1>=D&&(c?q++:q.push({x:B.x,y:B.y,t1:C,t2:D}))}}return q}function t(a,b){return v(a,b)}function u(a,b){return v(a,b,1)}function v(a,b,c){a=G(a),b=G(b);for(var d,e,f,g,h,i,j,k,l,m,n=c?0:[],o=0,p=a.length;p>o;o++){var q=a[o];if("M"==q[0])d=h=q[1],e=i=q[2];else{"C"==q[0]?(l=[d,e].concat(q.slice(1)),d=l[6],e=l[7]):(l=[d,e,d,e,h,i,h,i],d=h,e=i);for(var r=0,t=b.length;t>r;r++){var u=b[r];if("M"==u[0])f=j=u[1],g=k=u[2];else{"C"==u[0]?(m=[f,g].concat(u.slice(1)),f=m[6],g=m[7]):(m=[f,g,f,g,j,k,j,k],f=j,g=k);var v=s(l,m,c);if(c)n+=v;else{for(var w=0,x=v.length;x>w;w++)v[w].segment1=o,v[w].segment2=r,v[w].bez1=l,v[w].bez2=m;n=n.concat(v)}}}}}return n}function w(a,b,c){var d=x(a);return m(d,b,c)&&v(a,[["M",b,c],["H",d.x2+10]],1)%2==1}function x(a){var b=e(a);if(b.bbox)return L(b.bbox);if(!a)return f();a=G(a);for(var c,d=0,g=0,h=[],i=[],j=0,k=a.length;k>j;j++)if(c=a[j],"M"==c[0])d=c[1],g=c[2],h.push(d),i.push(g);else{var l=F(d,g,c[1],c[2],c[3],c[4],c[5],c[6]);h=h.concat(l.min.x,l.max.x),i=i.concat(l.min.y,l.max.y),d=c[5],g=c[6]}var m=R.apply(0,h),n=R.apply(0,i),o=S.apply(0,h),p=S.apply(0,i),q=f(m,n,o-m,p-n);return b.bbox=L(q),q}function y(a,b,c,d,e){if(e)return[["M",+a+ +e,b],["l",c-2*e,0],["a",e,e,0,0,1,e,e],["l",0,d-2*e],["a",e,e,0,0,1,-e,e],["l",2*e-c,0],["a",e,e,0,0,1,-e,-e],["l",0,2*e-d],["a",e,e,0,0,1,e,-e],["z"]];var f=[["M",a,b],["l",c,0],["l",0,d],["l",-c,0],["z"]];return f.toString=g,f}function z(a,b,c,d,e){if(null==e&&null==d&&(d=c),a=+a,b=+b,c=+c,d=+d,null!=e)var f=Math.PI/180,h=a+c*Math.cos(-d*f),i=a+c*Math.cos(-e*f),j=b+c*Math.sin(-d*f),k=b+c*Math.sin(-e*f),l=[["M",h,j],["A",c,c,0,+(e-d>180),0,i,k]];else l=[["M",a,b],["m",0,-d],["a",c,d,0,1,1,0,2*d],["a",c,d,0,1,1,0,-2*d],["z"]];return l.toString=g,l}function A(b){var c=e(b),d=String.prototype.toLowerCase;if(c.rel)return h(c.rel);a.is(b,"array")&&a.is(b&&b[0],"array")||(b=a.parsePathString(b));var f=[],i=0,j=0,k=0,l=0,m=0;"M"==b[0][0]&&(i=b[0][1],j=b[0][2],k=i,l=j,m++,f.push(["M",i,j]));for(var n=m,o=b.length;o>n;n++){var p=f[n]=[],q=b[n];if(q[0]!=d.call(q[0]))switch(p[0]=d.call(q[0]),p[0]){case"a":p[1]=q[1],p[2]=q[2],p[3]=q[3],p[4]=q[4],p[5]=q[5],p[6]=+(q[6]-i).toFixed(3),p[7]=+(q[7]-j).toFixed(3);break;case"v":p[1]=+(q[1]-j).toFixed(3);break;case"m":k=q[1],l=q[2];default:for(var r=1,s=q.length;s>r;r++)p[r]=+(q[r]-(r%2?i:j)).toFixed(3)}else{p=f[n]=[],"m"==q[0]&&(k=q[1]+i,l=q[2]+j);for(var t=0,u=q.length;u>t;t++)f[n][t]=q[t]}var v=f[n].length;switch(f[n][0]){case"z":i=k,j=l;break;case"h":i+=+f[n][v-1];break;case"v":j+=+f[n][v-1];break;default:i+=+f[n][v-2],j+=+f[n][v-1]}}return f.toString=g,c.rel=h(f),f}function B(b){var c=e(b);if(c.abs)return h(c.abs);if(K(b,"array")&&K(b&&b[0],"array")||(b=a.parsePathString(b)),!b||!b.length)return[["M",0,0]];var d,f=[],i=0,j=0,k=0,l=0,m=0;"M"==b[0][0]&&(i=+b[0][1],j=+b[0][2],k=i,l=j,m++,f[0]=["M",i,j]);for(var n,o,p=3==b.length&&"M"==b[0][0]&&"R"==b[1][0].toUpperCase()&&"Z"==b[2][0].toUpperCase(),q=m,r=b.length;r>q;q++){if(f.push(n=[]),o=b[q],d=o[0],d!=d.toUpperCase())switch(n[0]=d.toUpperCase(),n[0]){case"A":n[1]=o[1],n[2]=o[2],n[3]=o[3],n[4]=o[4],n[5]=o[5],n[6]=+o[6]+i,n[7]=+o[7]+j;break;case"V":n[1]=+o[1]+j;break;case"H":n[1]=+o[1]+i;break;case"R":for(var s=[i,j].concat(o.slice(1)),t=2,u=s.length;u>t;t++)s[t]=+s[t]+i,s[++t]=+s[t]+j;f.pop(),f=f.concat(I(s,p));break;case"O":f.pop(),s=z(i,j,o[1],o[2]),s.push(s[0]),f=f.concat(s);break;case"U":f.pop(),f=f.concat(z(i,j,o[1],o[2],o[3])),n=["U"].concat(f[f.length-1].slice(-2));break;case"M":k=+o[1]+i,l=+o[2]+j;default:for(t=1,u=o.length;u>t;t++)n[t]=+o[t]+(t%2?i:j)}else if("R"==d)s=[i,j].concat(o.slice(1)),f.pop(),f=f.concat(I(s,p)),n=["R"].concat(o.slice(-2));else if("O"==d)f.pop(),s=z(i,j,o[1],o[2]),s.push(s[0]),f=f.concat(s);else if("U"==d)f.pop(),f=f.concat(z(i,j,o[1],o[2],o[3])),n=["U"].concat(f[f.length-1].slice(-2));else for(var v=0,w=o.length;w>v;v++)n[v]=o[v];if(d=d.toUpperCase(),"O"!=d)switch(n[0]){case"Z":i=+k,j=+l;break;case"H":i=n[1];break;case"V":j=n[1];break;case"M":k=n[n.length-2],l=n[n.length-1];default:i=n[n.length-2],j=n[n.length-1]}}return f.toString=g,c.abs=h(f),f}function C(a,b,c,d){return[a,b,c,d,c,d]}function D(a,b,c,d,e,f){var g=1/3,h=2/3;return[g*a+h*c,g*b+h*d,g*e+h*c,g*f+h*d,e,f]}function E(b,c,d,e,f,g,h,i,j,k){var l,m=120*Q/180,n=Q/180*(+f||0),o=[],p=a._.cacher(function(a,b,c){var d=a*P.cos(c)-b*P.sin(c),e=a*P.sin(c)+b*P.cos(c);return{x:d,y:e}});if(!d||!e)return[b,c,i,j,i,j];if(k)y=k[0],z=k[1],w=k[2],x=k[3];else{l=p(b,c,-n),b=l.x,c=l.y,l=p(i,j,-n),i=l.x,j=l.y;var q=(P.cos(Q/180*f),P.sin(Q/180*f),(b-i)/2),r=(c-j)/2,s=q*q/(d*d)+r*r/(e*e);s>1&&(s=P.sqrt(s),d=s*d,e=s*e);var t=d*d,u=e*e,v=(g==h?-1:1)*P.sqrt(U((t*u-t*r*r-u*q*q)/(t*r*r+u*q*q))),w=v*d*r/e+(b+i)/2,x=v*-e*q/d+(c+j)/2,y=P.asin(((c-x)/e).toFixed(9)),z=P.asin(((j-x)/e).toFixed(9));y=w>b?Q-y:y,z=w>i?Q-z:z,0>y&&(y=2*Q+y),0>z&&(z=2*Q+z),h&&y>z&&(y-=2*Q),!h&&z>y&&(z-=2*Q)}var A=z-y;if(U(A)>m){var B=z,C=i,D=j;z=y+m*(h&&z>y?1:-1),i=w+d*P.cos(z),j=x+e*P.sin(z),o=E(i,j,d,e,f,0,h,C,D,[z,B,w,x])}A=z-y;var F=P.cos(y),G=P.sin(y),H=P.cos(z),I=P.sin(z),J=P.tan(A/4),K=4/3*d*J,L=4/3*e*J,M=[b,c],N=[b+K*G,c-L*F],O=[i+K*I,j-L*H],R=[i,j];if(N[0]=2*M[0]-N[0],N[1]=2*M[1]-N[1],k)return[N,O,R].concat(o);o=[N,O,R].concat(o).join().split(",");for(var S=[],T=0,V=o.length;V>T;T++)S[T]=T%2?p(o[T-1],o[T],n).y:p(o[T],o[T+1],n).x;return S}function F(a,b,c,d,e,f,g,h){for(var i,j,k,l,m,n,o,p,q=[],r=[[],[]],s=0;2>s;++s)if(0==s?(j=6*a-12*c+6*e,i=-3*a+9*c-9*e+3*g,k=3*c-3*a):(j=6*b-12*d+6*f,i=-3*b+9*d-9*f+3*h,k=3*d-3*b),U(i)<1e-12){if(U(j)<1e-12)continue;l=-k/j,l>0&&1>l&&q.push(l)}else o=j*j-4*k*i,p=P.sqrt(o),0>o||(m=(-j+p)/(2*i),m>0&&1>m&&q.push(m),n=(-j-p)/(2*i),n>0&&1>n&&q.push(n));for(var t,u=q.length,v=u;u--;)l=q[u],t=1-l,r[0][u]=t*t*t*a+3*t*t*l*c+3*t*l*l*e+l*l*l*g,r[1][u]=t*t*t*b+3*t*t*l*d+3*t*l*l*f+l*l*l*h;return r[0][v]=a,r[1][v]=b,r[0][v+1]=g,r[1][v+1]=h,r[0].length=r[1].length=v+2,{min:{x:R.apply(0,r[0]),y:R.apply(0,r[1])},max:{x:S.apply(0,r[0]),y:S.apply(0,r[1])}}}function G(a,b){var c=!b&&e(a);if(!b&&c.curve)return h(c.curve);for(var d=B(a),f=b&&B(b),g={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},i={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},j=(function(a,b,c){var d,e;if(!a)return["C",b.x,b.y,b.x,b.y,b.x,b.y];switch(!(a[0]in{T:1,Q:1})&&(b.qx=b.qy=null),a[0]){case"M":b.X=a[1],b.Y=a[2];break;case"A":a=["C"].concat(E.apply(0,[b.x,b.y].concat(a.slice(1))));break;case"S":"C"==c||"S"==c?(d=2*b.x-b.bx,e=2*b.y-b.by):(d=b.x,e=b.y),a=["C",d,e].concat(a.slice(1));break;case"T":"Q"==c||"T"==c?(b.qx=2*b.x-b.qx,b.qy=2*b.y-b.qy):(b.qx=b.x,b.qy=b.y),a=["C"].concat(D(b.x,b.y,b.qx,b.qy,a[1],a[2]));break;case"Q":b.qx=a[1],b.qy=a[2],a=["C"].concat(D(b.x,b.y,a[1],a[2],a[3],a[4]));break;case"L":a=["C"].concat(C(b.x,b.y,a[1],a[2]));break;case"H":a=["C"].concat(C(b.x,b.y,a[1],b.y));break;case"V":a=["C"].concat(C(b.x,b.y,b.x,a[1]));break;case"Z":a=["C"].concat(C(b.x,b.y,b.X,b.Y))}return a}),k=function(a,b){if(a[b].length>7){a[b].shift();for(var c=a[b];c.length;)m[b]="A",f&&(n[b]="A"),a.splice(b++,0,["C"].concat(c.splice(0,6)));a.splice(b,1),r=S(d.length,f&&f.length||0)}},l=function(a,b,c,e,g){a&&b&&"M"==a[g][0]&&"M"!=b[g][0]&&(b.splice(g,0,["M",e.x,e.y]),c.bx=0,c.by=0,c.x=a[g][1],c.y=a[g][2],r=S(d.length,f&&f.length||0))},m=[],n=[],o="",p="",q=0,r=S(d.length,f&&f.length||0);r>q;q++){d[q]&&(o=d[q][0]),"C"!=o&&(m[q]=o,q&&(p=m[q-1])),d[q]=j(d[q],g,p),"A"!=m[q]&&"C"==o&&(m[q]="C"),k(d,q),f&&(f[q]&&(o=f[q][0]),"C"!=o&&(n[q]=o,q&&(p=n[q-1])),f[q]=j(f[q],i,p),"A"!=n[q]&&"C"==o&&(n[q]="C"),k(f,q)),l(d,f,g,i,q),l(f,d,i,g,q);var s=d[q],t=f&&f[q],u=s.length,v=f&&t.length;g.x=s[u-2],g.y=s[u-1],g.bx=O(s[u-4])||g.x,g.by=O(s[u-3])||g.y,i.bx=f&&(O(t[v-4])||i.x),i.by=f&&(O(t[v-3])||i.y),i.x=f&&t[v-2],i.y=f&&t[v-1]}return f||(c.curve=h(d)),f?[d,f]:d}function H(a,b){if(!b)return a;var c,d,e,f,g,h,i;for(a=G(a),e=0,g=a.length;g>e;e++)for(i=a[e],f=1,h=i.length;h>f;f+=2)c=b.x(i[f],i[f+1]),d=b.y(i[f],i[f+1]),i[f]=c,i[f+1]=d;return a}function I(a,b){for(var c=[],d=0,e=a.length;e-2*!b>d;d+=2){var f=[{x:+a[d-2],y:+a[d-1]},{x:+a[d],y:+a[d+1]},{x:+a[d+2],y:+a[d+3]},{x:+a[d+4],y:+a[d+5]}];b?d?e-4==d?f[3]={x:+a[0],y:+a[1]}:e-2==d&&(f[2]={x:+a[0],y:+a[1]},f[3]={x:+a[2],y:+a[3]}):f[0]={x:+a[e-2],y:+a[e-1]}:e-4==d?f[3]=f[2]:d||(f[0]={x:+a[d],y:+a[d+1]}),c.push(["C",(-f[0].x+6*f[1].x+f[2].x)/6,(-f[0].y+6*f[1].y+f[2].y)/6,(f[1].x+6*f[2].x-f[3].x)/6,(f[1].y+6*f[2].y-f[3].y)/6,f[2].x,f[2].y])}return c}var J=b.prototype,K=a.is,L=a._.clone,M="hasOwnProperty",N=/,?([a-z]),?/gi,O=parseFloat,P=Math,Q=P.PI,R=P.min,S=P.max,T=P.pow,U=P.abs,V=j(1),W=j(),X=j(0,1),Y=a._unit2px,Z={path:function(a){return a.attr("path")},circle:function(a){var b=Y(a);return z(b.cx,b.cy,b.r)},ellipse:function(a){var b=Y(a);
return z(b.cx||0,b.cy||0,b.rx,b.ry)},rect:function(a){var b=Y(a);return y(b.x||0,b.y||0,b.width,b.height,b.rx,b.ry)},image:function(a){var b=Y(a);return y(b.x||0,b.y||0,b.width,b.height)},line:function(a){return"M"+[a.attr("x1")||0,a.attr("y1")||0,a.attr("x2"),a.attr("y2")]},polyline:function(a){return"M"+a.attr("points")},polygon:function(a){return"M"+a.attr("points")+"z"},deflt:function(a){var b=a.node.getBBox();return y(b.x,b.y,b.width,b.height)}};a.path=e,a.path.getTotalLength=V,a.path.getPointAtLength=W,a.path.getSubpath=function(a,b,c){if(this.getTotalLength(a)-c<1e-6)return X(a,b).end;var d=X(a,c,1);return b?X(d,b).end:d},J.getTotalLength=function(){return this.node.getTotalLength?this.node.getTotalLength():void 0},J.getPointAtLength=function(a){return W(this.attr("d"),a)},J.getSubpath=function(b,c){return a.path.getSubpath(this.attr("d"),b,c)},a._.box=f,a.path.findDotsAtSegment=k,a.path.bezierBBox=l,a.path.isPointInsideBBox=m,a.closest=function(b,c,d,e){for(var g=100,h=f(b-g/2,c-g/2,g,g),i=[],j=d[0].hasOwnProperty("x")?function(a){return{x:d[a].x,y:d[a].y}}:function(a){return{x:d[a],y:e[a]}},k=0;1e6>=g&&!k;){for(var l=0,n=d.length;n>l;l++){var o=j(l);if(m(h,o.x,o.y)){k++,i.push(o);break}}k||(g*=2,h=f(b-g/2,c-g/2,g,g))}if(1e6!=g){var p,q=1/0;for(l=0,n=i.length;n>l;l++){var r=a.len(b,c,i[l].x,i[l].y);q>r&&(q=r,i[l].len=r,p=i[l])}return p}},a.path.isBBoxIntersect=n,a.path.intersection=t,a.path.intersectionNumber=u,a.path.isPointInside=w,a.path.getBBox=x,a.path.get=Z,a.path.toRelative=A,a.path.toAbsolute=B,a.path.toCubic=G,a.path.map=H,a.path.toString=g,a.path.clone=h}),d.plugin(function(a,d,e,f){var g=Math.max,h=Math.min,i=function(a){if(this.items=[],this.bindings={},this.length=0,this.type="set",a)for(var b=0,c=a.length;c>b;b++)a[b]&&(this[this.items.length]=this.items[this.items.length]=a[b],this.length++)},j=i.prototype;j.push=function(){for(var a,b,c=0,d=arguments.length;d>c;c++)a=arguments[c],a&&(b=this.items.length,this[b]=this.items[b]=a,this.length++);return this},j.pop=function(){return this.length&&delete this[this.length--],this.items.pop()},j.forEach=function(a,b){for(var c=0,d=this.items.length;d>c;c++)if(a.call(b,this.items[c],c)===!1)return this;return this},j.animate=function(d,e,f,g){"function"!=typeof f||f.length||(g=f,f=c.linear),d instanceof a._.Animation&&(g=d.callback,f=d.easing,e=f.dur,d=d.attr);var h=arguments;if(a.is(d,"array")&&a.is(h[h.length-1],"array"))var i=!0;var j,k=function(){j?this.b=j:j=this.b},l=0,m=this,n=g&&function(){++l==m.length&&g.call(this)};return this.forEach(function(a,c){b.once("snap.animcreated."+a.id,k),i?h[c]&&a.animate.apply(a,h[c]):a.animate(d,e,f,n)})},j.remove=function(){for(;this.length;)this.pop().remove();return this},j.bind=function(a,b,c){var d={};if("function"==typeof b)this.bindings[a]=b;else{var e=c||a;this.bindings[a]=function(a){d[e]=a,b.attr(d)}}return this},j.attr=function(a){var b={};for(var c in a)this.bindings[c]?this.bindings[c](a[c]):b[c]=a[c];for(var d=0,e=this.items.length;e>d;d++)this.items[d].attr(b);return this},j.clear=function(){for(;this.length;)this.pop()},j.splice=function(a,b,c){a=0>a?g(this.length+a,0):a,b=g(0,h(this.length-a,b));var d,e=[],f=[],j=[];for(d=2;d<arguments.length;d++)j.push(arguments[d]);for(d=0;b>d;d++)f.push(this[a+d]);for(;d<this.length-a;d++)e.push(this[a+d]);var k=j.length;for(d=0;d<k+e.length;d++)this.items[a+d]=this[a+d]=k>d?j[d]:e[d-k];for(d=this.items.length=this.length-=b-k;this[d];)delete this[d++];return new i(f)},j.exclude=function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]==a)return this.splice(b,1),!0;return!1},j.insertAfter=function(a){for(var b=this.items.length;b--;)this.items[b].insertAfter(a);return this},j.getBBox=function(){for(var a=[],b=[],c=[],d=[],e=this.items.length;e--;)if(!this.items[e].removed){var f=this.items[e].getBBox();a.push(f.x),b.push(f.y),c.push(f.x+f.width),d.push(f.y+f.height)}return a=h.apply(0,a),b=h.apply(0,b),c=g.apply(0,c),d=g.apply(0,d),{x:a,y:b,x2:c,y2:d,width:c-a,height:d-b,cx:a+(c-a)/2,cy:b+(d-b)/2}},j.clone=function(a){a=new i;for(var b=0,c=this.items.length;c>b;b++)a.push(this.items[b].clone());return a},j.toString=function(){return"Snap‘s set"},j.type="set",a.Set=i,a.set=function(){var a=new i;return arguments.length&&a.push.apply(a,Array.prototype.slice.call(arguments,0)),a}}),d.plugin(function(a,c,d,e){function f(a){var b=a[0];switch(b.toLowerCase()){case"t":return[b,0,0];case"m":return[b,1,0,0,1,0,0];case"r":return 4==a.length?[b,0,a[2],a[3]]:[b,0];case"s":return 5==a.length?[b,1,1,a[3],a[4]]:3==a.length?[b,1,1]:[b,1]}}function g(b,c,d){b=b||new a.Matrix,c=c||new a.Matrix,b=a.parseTransformString(b.toTransformString())||[],c=a.parseTransformString(c.toTransformString())||[];for(var e,g,h,i,j=Math.max(b.length,c.length),k=[],n=[],o=0;j>o;o++){if(h=b[o]||f(c[o]),i=c[o]||f(h),h[0]!=i[0]||"r"==h[0].toLowerCase()&&(h[2]!=i[2]||h[3]!=i[3])||"s"==h[0].toLowerCase()&&(h[3]!=i[3]||h[4]!=i[4])){b=a._.transform2matrix(b,d()),c=a._.transform2matrix(c,d()),k=[["m",b.a,b.b,b.c,b.d,b.e,b.f]],n=[["m",c.a,c.b,c.c,c.d,c.e,c.f]];break}for(k[o]=[],n[o]=[],e=0,g=Math.max(h.length,i.length);g>e;e++)e in h&&(k[o][e]=h[e]),e in i&&(n[o][e]=i[e])}return{from:m(k),to:m(n),f:l(k)}}function h(a){return a}function i(a){return function(b){return+b.toFixed(3)+a}}function j(a){return a.join(" ")}function k(b){return a.rgb(b[0],b[1],b[2],b[3])}function l(a){var b,c,d,e,f,g,h=0,i=[];for(b=0,c=a.length;c>b;b++){for(f="[",g=['"'+a[b][0]+'"'],d=1,e=a[b].length;e>d;d++)g[d]="val["+h++ +"]";f+=g+"]",i[b]=f}return Function("val","return Snap.path.toString.call(["+i+"])")}function m(a){for(var b=[],c=0,d=a.length;d>c;c++)for(var e=1,f=a[c].length;f>e;e++)b.push(a[c][e]);return b}function n(a){return isFinite(a)}function o(b,c){return a.is(b,"array")&&a.is(c,"array")?b.toString()==c.toString():!1}var p={},q=/[%a-z]+$/i,r=String;p.stroke=p.fill="colour",c.prototype.equal=function(a,c){return b("snap.util.equal",this,a,c).firstDefined()},b.on("snap.util.equal",function(b,c){var d,e,f=r(this.attr(b)||""),s=this;if("colour"==p[b])return d=a.color(f),e=a.color(c),{from:[d.r,d.g,d.b,d.opacity],to:[e.r,e.g,e.b,e.opacity],f:k};if("viewBox"==b)return d=this.attr(b).vb.split(" ").map(Number),e=c.split(" ").map(Number),{from:d,to:e,f:j};if("transform"==b||"gradientTransform"==b||"patternTransform"==b)return"string"==typeof c&&(c=r(c).replace(/\.{3}|\u2026/g,f)),f=this.matrix,c=a._.rgTransform.test(c)?a._.transform2matrix(c,this.getBBox()):a._.transform2matrix(a._.svgTransform2string(c),this.getBBox()),g(f,c,function(){return s.getBBox(1)});if("d"==b||"path"==b)return d=a.path.toCubic(f,c),{from:m(d[0]),to:m(d[1]),f:l(d[0])};if("points"==b)return d=r(f).split(a._.separator),e=r(c).split(a._.separator),{from:d,to:e,f:function(a){return a}};if(n(f)&&n(c))return{from:parseFloat(f),to:parseFloat(c),f:h};var t=f.match(q),u=r(c).match(q);return t&&o(t,u)?{from:parseFloat(f),to:parseFloat(c),f:i(t)}:{from:this.asPX(b),to:this.asPX(b,c),f:h}})}),d.plugin(function(a,c,d,e){for(var f=c.prototype,g="hasOwnProperty",h=("createTouch"in e.doc),i=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","touchstart","touchmove","touchend","touchcancel"],j={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},k=(function(a,b){var c="y"==a?"scrollTop":"scrollLeft",d=b&&b.node?b.node.ownerDocument:e.doc;return d[c in d.documentElement?"documentElement":"body"][c]}),l=function(){return this.originalEvent.preventDefault()},m=function(){return this.originalEvent.stopPropagation()},n=function(a,b,c,d){var e=h&&j[b]?j[b]:b,f=function(e){var f=k("y",d),i=k("x",d);if(h&&j[g](b))for(var n=0,o=e.targetTouches&&e.targetTouches.length;o>n;n++)if(e.targetTouches[n].target==a||a.contains(e.targetTouches[n].target)){var p=e;e=e.targetTouches[n],e.originalEvent=p,e.preventDefault=l,e.stopPropagation=m;break}var q=e.clientX+i,r=e.clientY+f;return c.call(d,e,q,r)};return b!==e&&a.addEventListener(b,f,!1),a.addEventListener(e,f,!1),function(){return b!==e&&a.removeEventListener(b,f,!1),a.removeEventListener(e,f,!1),!0}},o=[],p=function(a){for(var c,d=a.clientX,e=a.clientY,f=k("y"),g=k("x"),i=o.length;i--;){if(c=o[i],h){for(var j,l=a.touches&&a.touches.length;l--;)if(j=a.touches[l],j.identifier==c.el._drag.id||c.el.node.contains(j.target)){d=j.clientX,e=j.clientY,(a.originalEvent?a.originalEvent:a).preventDefault();break}}else a.preventDefault();var m=c.el.node;m.nextSibling,m.parentNode,m.style.display;d+=g,e+=f,b("snap.drag.move."+c.el.id,c.move_scope||c.el,d-c.el._drag.x,e-c.el._drag.y,d,e,a)}},q=function(c){a.unmousemove(p).unmouseup(q);for(var d,e=o.length;e--;)d=o[e],d.el._drag={},b("snap.drag.end."+d.el.id,d.end_scope||d.start_scope||d.move_scope||d.el,c),b.off("snap.drag.*."+d.el.id);o=[]},r=i.length;r--;)!function(b){a[b]=f[b]=function(c,d){if(a.is(c,"function"))this.events=this.events||[],this.events.push({name:b,f:c,unbind:n(this.node||document,b,c,d||this)});else for(var e=0,f=this.events.length;f>e;e++)if(this.events[e].name==b)try{this.events[e].f.call(this)}catch(g){}return this},a["un"+b]=f["un"+b]=function(a){for(var c=this.events||[],d=c.length;d--;)if(c[d].name==b&&(c[d].f==a||!a))return c[d].unbind(),c.splice(d,1),!c.length&&delete this.events,this;return this}}(i[r]);f.hover=function(a,b,c,d){return this.mouseover(a,c).mouseout(b,d||c)},f.unhover=function(a,b){return this.unmouseover(a).unmouseout(b)};var s=[];f.drag=function(c,d,e,f,g,h){function i(i,j,l){(i.originalEvent||i).preventDefault(),k._drag.x=j,k._drag.y=l,k._drag.id=i.identifier,!o.length&&a.mousemove(p).mouseup(q),o.push({el:k,move_scope:f,start_scope:g,end_scope:h}),d&&b.on("snap.drag.start."+k.id,d),c&&b.on("snap.drag.move."+k.id,c),e&&b.on("snap.drag.end."+k.id,e),b("snap.drag.start."+k.id,g||f||k,j,l,i)}function j(a,c,d){b("snap.draginit."+k.id,k,a,c,d)}var k=this;if(!arguments.length){var l;return k.drag(function(a,b){this.attr({transform:l+(l?"T":"t")+[a,b]})},function(){l=this.transform().local})}return b.on("snap.draginit."+k.id,i),k._drag={},s.push({el:k,start:i,init:j}),k.mousedown(j),k},f.undrag=function(){for(var c=s.length;c--;)s[c].el==this&&(this.unmousedown(s[c].init),s.splice(c,1),b.unbind("snap.drag.*."+this.id),b.unbind("snap.draginit."+this.id));return!s.length&&a.unmousemove(p).unmouseup(q),this}}),d.plugin(function(a,c,d,e){var f=(c.prototype,d.prototype),g=/^\s*url\((.+)\)/,h=String,i=a._.$;a.filter={},f.filter=function(b){var d=this;"svg"!=d.type&&(d=d.paper);var e=a.parse(h(b)),f=a._.id(),g=(d.node.offsetWidth,d.node.offsetHeight,i("filter"));return i(g,{id:f,filterUnits:"userSpaceOnUse"}),g.appendChild(e.node),d.defs.appendChild(g),new c(g)},b.on("snap.util.getattr.filter",function(){b.stop();var c=i(this.node,"filter");if(c){var d=h(c).match(g);return d&&a.select(d[1])}}),b.on("snap.util.attr.filter",function(d){if(d instanceof c&&"filter"==d.type){b.stop();var e=d.node.id;e||(i(d.node,{id:d.id}),e=d.id),i(this.node,{filter:a.url(e)})}d&&"none"!=d||(b.stop(),this.node.removeAttribute("filter"))}),a.filter.blur=function(b,c){null==b&&(b=2);var d=null==c?b:[b,c];return a.format('<feGaussianBlur stdDeviation="{def}"/>',{def:d})},a.filter.blur.toString=function(){return this()},a.filter.shadow=function(b,c,d,e,f){return null==f&&(null==e?(f=d,d=4,e="#000"):(f=e,e=d,d=4)),null==d&&(d=4),null==f&&(f=1),null==b&&(b=0,c=2),null==c&&(c=b),e=a.color(e),a.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>',{color:e,dx:b,dy:c,blur:d,opacity:f})},a.filter.shadow.toString=function(){return this()},a.filter.grayscale=function(b){return null==b&&(b=1),a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>',{a:.2126+.7874*(1-b),b:.7152-.7152*(1-b),c:.0722-.0722*(1-b),d:.2126-.2126*(1-b),e:.7152+.2848*(1-b),f:.0722-.0722*(1-b),g:.2126-.2126*(1-b),h:.0722+.9278*(1-b)})},a.filter.grayscale.toString=function(){return this()},a.filter.sepia=function(b){return null==b&&(b=1),a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>',{a:.393+.607*(1-b),b:.769-.769*(1-b),c:.189-.189*(1-b),d:.349-.349*(1-b),e:.686+.314*(1-b),f:.168-.168*(1-b),g:.272-.272*(1-b),h:.534-.534*(1-b),i:.131+.869*(1-b)})},a.filter.sepia.toString=function(){return this()},a.filter.saturate=function(b){return null==b&&(b=1),a.format('<feColorMatrix type="saturate" values="{amount}"/>',{amount:1-b})},a.filter.saturate.toString=function(){return this()},a.filter.hueRotate=function(b){return b=b||0,a.format('<feColorMatrix type="hueRotate" values="{angle}"/>',{angle:b})},a.filter.hueRotate.toString=function(){return this()},a.filter.invert=function(b){return null==b&&(b=1),a.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>',{amount:b,amount2:1-b})},a.filter.invert.toString=function(){return this()},a.filter.brightness=function(b){return null==b&&(b=1),a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>',{amount:b})},a.filter.brightness.toString=function(){return this()},a.filter.contrast=function(b){return null==b&&(b=1),a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>',{amount:b,amount2:.5-b/2})},a.filter.contrast.toString=function(){return this()}}),d.plugin(function(a,b,c,d,e){var f=a._.box,g=a.is,h=/^[^a-z]*([tbmlrc])/i,i=function(){return"T"+this.dx+","+this.dy};b.prototype.getAlign=function(a,b){null==b&&g(a,"string")&&(b=a,a=null),a=a||this.paper;var c=a.getBBox?a.getBBox():f(a),d=this.getBBox(),e={};switch(b=b&&b.match(h),b=b?b[1].toLowerCase():"c"){case"t":e.dx=0,e.dy=c.y-d.y;break;case"b":e.dx=0,e.dy=c.y2-d.y2;break;case"m":e.dx=0,e.dy=c.cy-d.cy;break;case"l":e.dx=c.x-d.x,e.dy=0;break;case"r":e.dx=c.x2-d.x2,e.dy=0;break;default:e.dx=c.cx-d.cx,e.dy=0}return e.toString=i,e},b.prototype.align=function(a,b){return this.transform("..."+this.getAlign(a,b))}}),d.plugin(function(b,c,d,e){function f(a){a=a.split(/(?=#)/);var b=new String(a[5]);return b[50]=a[0],b[100]=a[1],b[200]=a[2],b[300]=a[3],b[400]=a[4],b[500]=a[5],b[600]=a[6],b[700]=a[7],b[800]=a[8],b[900]=a[9],a[10]&&(b.A100=a[10],b.A200=a[11],b.A400=a[12],b.A700=a[13]),b}var g="#ffebee#ffcdd2#ef9a9a#e57373#ef5350#f44336#e53935#d32f2f#c62828#b71c1c#ff8a80#ff5252#ff1744#d50000",h="#FCE4EC#F8BBD0#F48FB1#F06292#EC407A#E91E63#D81B60#C2185B#AD1457#880E4F#FF80AB#FF4081#F50057#C51162",i="#F3E5F5#E1BEE7#CE93D8#BA68C8#AB47BC#9C27B0#8E24AA#7B1FA2#6A1B9A#4A148C#EA80FC#E040FB#D500F9#AA00FF",j="#EDE7F6#D1C4E9#B39DDB#9575CD#7E57C2#673AB7#5E35B1#512DA8#4527A0#311B92#B388FF#7C4DFF#651FFF#6200EA",k="#E8EAF6#C5CAE9#9FA8DA#7986CB#5C6BC0#3F51B5#3949AB#303F9F#283593#1A237E#8C9EFF#536DFE#3D5AFE#304FFE",l="#E3F2FD#BBDEFB#90CAF9#64B5F6#64B5F6#2196F3#1E88E5#1976D2#1565C0#0D47A1#82B1FF#448AFF#2979FF#2962FF",m="#E1F5FE#B3E5FC#81D4FA#4FC3F7#29B6F6#03A9F4#039BE5#0288D1#0277BD#01579B#80D8FF#40C4FF#00B0FF#0091EA",n="#E0F7FA#B2EBF2#80DEEA#4DD0E1#26C6DA#00BCD4#00ACC1#0097A7#00838F#006064#84FFFF#18FFFF#00E5FF#00B8D4",o="#E0F2F1#B2DFDB#80CBC4#4DB6AC#26A69A#009688#00897B#00796B#00695C#004D40#A7FFEB#64FFDA#1DE9B6#00BFA5",p="#E8F5E9#C8E6C9#A5D6A7#81C784#66BB6A#4CAF50#43A047#388E3C#2E7D32#1B5E20#B9F6CA#69F0AE#00E676#00C853",q="#F1F8E9#DCEDC8#C5E1A5#AED581#9CCC65#8BC34A#7CB342#689F38#558B2F#33691E#CCFF90#B2FF59#76FF03#64DD17",r="#F9FBE7#F0F4C3#E6EE9C#DCE775#D4E157#CDDC39#C0CA33#AFB42B#9E9D24#827717#F4FF81#EEFF41#C6FF00#AEEA00",s="#FFFDE7#FFF9C4#FFF59D#FFF176#FFEE58#FFEB3B#FDD835#FBC02D#F9A825#F57F17#FFFF8D#FFFF00#FFEA00#FFD600",t="#FFF8E1#FFECB3#FFE082#FFD54F#FFCA28#FFC107#FFB300#FFA000#FF8F00#FF6F00#FFE57F#FFD740#FFC400#FFAB00",u="#FFF3E0#FFE0B2#FFCC80#FFB74D#FFA726#FF9800#FB8C00#F57C00#EF6C00#E65100#FFD180#FFAB40#FF9100#FF6D00",v="#FBE9E7#FFCCBC#FFAB91#FF8A65#FF7043#FF5722#F4511E#E64A19#D84315#BF360C#FF9E80#FF6E40#FF3D00#DD2C00",w="#EFEBE9#D7CCC8#BCAAA4#A1887F#8D6E63#795548#6D4C41#5D4037#4E342E#3E2723",x="#FAFAFA#F5F5F5#EEEEEE#E0E0E0#BDBDBD#9E9E9E#757575#616161#424242#212121",y="#ECEFF1#CFD8DC#B0BEC5#90A4AE#78909C#607D8B#546E7A#455A64#37474F#263238";b.mui={},b.flat={},b.mui.red=f(g),b.mui.pink=f(h),b.mui.purple=f(i),b.mui.deeppurple=f(j),b.mui.indigo=f(k),b.mui.blue=f(l),b.mui.lightblue=f(m),b.mui.cyan=f(n),b.mui.teal=f(o),b.mui.green=f(p),b.mui.lightgreen=f(q),b.mui.lime=f(r),b.mui.yellow=f(s),b.mui.amber=f(t),b.mui.orange=f(u),b.mui.deeporange=f(v),b.mui.brown=f(w),b.mui.grey=f(x),b.mui.bluegrey=f(y),b.flat.turquoise="#1abc9c",b.flat.greensea="#16a085",b.flat.sunflower="#f1c40f",b.flat.orange="#f39c12",b.flat.emerland="#2ecc71",b.flat.nephritis="#27ae60",b.flat.carrot="#e67e22",b.flat.pumpkin="#d35400",b.flat.peterriver="#3498db",b.flat.belizehole="#2980b9",b.flat.alizarin="#e74c3c",b.flat.pomegranate="#c0392b",b.flat.amethyst="#9b59b6",b.flat.wisteria="#8e44ad",b.flat.clouds="#ecf0f1",b.flat.silver="#bdc3c7",b.flat.wetasphalt="#34495e",b.flat.midnightblue="#2c3e50",b.flat.concrete="#95a5a6",b.flat.asbestos="#7f8c8d",b.importMUIColors=function(){for(var c in b.mui)b.mui.hasOwnProperty(c)&&(a[c]=b.mui[c])}}),d});
/*!
 * VERSION: 1.19.1
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},e=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c]):e[c%e.length];delete a.cycle},f=function(a,b,d){c.call(this,a,b,d),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=f.prototype.render},g=1e-10,h=c._internals,i=h.isSelector,j=h.isArray,k=f.prototype=c.to({},.1,{}),l=[];f.version="1.19.1",k.constructor=f,k.kill()._gc=!1,f.killTweensOf=f.killDelayedCallsTo=c.killTweensOf,f.getTweensOf=c.getTweensOf,f.lagSmoothing=c.lagSmoothing,f.ticker=c.ticker,f.render=c.render,k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),c.prototype.invalidate.call(this)},k.updateTo=function(a,b){var d,e=this.ratio,f=this.vars.immediateRender||a.immediateRender;b&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(d in a)this.vars[d]=a[d];if(this._initted||f)if(b)this._initted=!1,f&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&c._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var g=this._totalTime;this.render(0,!0,!1),this._initted=!1,this.render(g,!0,!1)}else if(this._initted=!1,this._init(),this._time>0||f)for(var h,i=1/(1-e),j=this._firstPT;j;)h=j.s+j.c,j.c*=i,j.s=h-j.c,j=j._next;return this},k.render=function(a,b,c){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var d,e,f,i,j,k,l,m,n=this._dirty?this.totalDuration():this._totalDuration,o=this._time,p=this._totalTime,q=this._cycle,r=this._duration,s=this._rawPrevTime;if(a>=n-1e-7&&a>=0?(this._totalTime=n,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=r,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(d=!0,e="onComplete",c=c||this._timeline.autoRemoveChildren),0===r&&(this._initted||!this.vars.lazy||c)&&(this._startTime===this._timeline._duration&&(a=0),(0>s||0>=a&&a>=-1e-7||s===g&&"isPause"!==this.data)&&s!==a&&(c=!0,s>g&&(e="onReverseComplete")),this._rawPrevTime=m=!b||a||s===a?a:g)):1e-7>a?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==p||0===r&&s>0)&&(e="onReverseComplete",d=this._reversed),0>a&&(this._active=!1,0===r&&(this._initted||!this.vars.lazy||c)&&(s>=0&&(c=!0),this._rawPrevTime=m=!b||a||s===a?a:g)),this._initted||(c=!0)):(this._totalTime=this._time=a,0!==this._repeat&&(i=r+this._repeatDelay,this._cycle=this._totalTime/i>>0,0!==this._cycle&&this._cycle===this._totalTime/i&&a>=p&&this._cycle--,this._time=this._totalTime-this._cycle*i,this._yoyo&&0!==(1&this._cycle)&&(this._time=r-this._time),this._time>r?this._time=r:this._time<0&&(this._time=0)),this._easeType?(j=this._time/r,k=this._easeType,l=this._easePower,(1===k||3===k&&j>=.5)&&(j=1-j),3===k&&(j*=2),1===l?j*=j:2===l?j*=j*j:3===l?j*=j*j*j:4===l&&(j*=j*j*j*j),1===k?this.ratio=1-j:2===k?this.ratio=j:this._time/r<.5?this.ratio=j/2:this.ratio=1-j/2):this.ratio=this._ease.getRatio(this._time/r)),o===this._time&&!c&&q===this._cycle)return void(p!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!c&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=o,this._totalTime=p,this._rawPrevTime=s,this._cycle=q,h.lazyTweens.push(this),void(this._lazy=[a,b]);this._time&&!d?this.ratio=this._ease.getRatio(this._time/r):d&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&a>=0&&(this._active=!0),0===p&&(2===this._initted&&a>0&&this._init(),this._startAt&&(a>=0?this._startAt.render(a,b,c):e||(e="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===r)&&(b||this._callback("onStart"))),f=this._firstPT;f;)f.f?f.t[f.p](f.c*this.ratio+f.s):f.t[f.p]=f.c*this.ratio+f.s,f=f._next;this._onUpdate&&(0>a&&this._startAt&&this._startTime&&this._startAt.render(a,b,c),b||(this._totalTime!==p||e)&&this._callback("onUpdate")),this._cycle!==q&&(b||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),e&&(!this._gc||c)&&(0>a&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(a,b,c),d&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[e]&&this._callback(e),0===r&&this._rawPrevTime===g&&m!==g&&(this._rawPrevTime=0))},f.to=function(a,b,c){return new f(a,b,c)},f.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new f(a,b,c)},f.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new f(a,b,d)},f.staggerTo=f.allTo=function(a,b,g,h,k,m,n){h=h||0;var o,p,q,r,s=0,t=[],u=function(){g.onComplete&&g.onComplete.apply(g.onCompleteScope||this,arguments),k.apply(n||g.callbackScope||this,m||l)},v=g.cycle,w=g.startAt&&g.startAt.cycle;for(j(a)||("string"==typeof a&&(a=c.selector(a)||a),i(a)&&(a=d(a))),a=a||[],0>h&&(a=d(a),a.reverse(),h*=-1),o=a.length-1,q=0;o>=q;q++){p={};for(r in g)p[r]=g[r];if(v&&(e(p,a,q),null!=p.duration&&(b=p.duration,delete p.duration)),w){w=p.startAt={};for(r in g.startAt)w[r]=g.startAt[r];e(p.startAt,a,q)}p.delay=s+(p.delay||0),q===o&&k&&(p.onComplete=u),t[q]=new f(a[q],b,p),s+=h}return t},f.staggerFrom=f.allFrom=function(a,b,c,d,e,g,h){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,f.staggerTo(a,b,c,d,e,g,h)},f.staggerFromTo=f.allFromTo=function(a,b,c,d,e,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,f.staggerTo(a,b,d,e,g,h,i)},f.delayedCall=function(a,b,c,d,e){return new f(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,useFrames:e,overwrite:0})},f.set=function(a,b){return new f(a,0,b)},f.isTweening=function(a){return c.getTweensOf(a,!0).length>0};var m=function(a,b){for(var d=[],e=0,f=a._first;f;)f instanceof c?d[e++]=f:(b&&(d[e++]=f),d=d.concat(m(f,b)),e=d.length),f=f._next;return d},n=f.getAllTweens=function(b){return m(a._rootTimeline,b).concat(m(a._rootFramesTimeline,b))};f.killAll=function(a,c,d,e){null==c&&(c=!0),null==d&&(d=!0);var f,g,h,i=n(0!=e),j=i.length,k=c&&d&&e;for(h=0;j>h;h++)g=i[h],(k||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&(a?g.totalTime(g._reversed?0:g.totalDuration()):g._enabled(!1,!1))},f.killChildTweensOf=function(a,b){if(null!=a){var e,g,k,l,m,n=h.tweenLookup;if("string"==typeof a&&(a=c.selector(a)||a),i(a)&&(a=d(a)),j(a))for(l=a.length;--l>-1;)f.killChildTweensOf(a[l],b);else{e=[];for(k in n)for(g=n[k].target.parentNode;g;)g===a&&(e=e.concat(n[k].tweens)),g=g.parentNode;for(m=e.length,l=0;m>l;l++)b&&e[l].totalTime(e[l].totalDuration()),e[l]._enabled(!1,!1)}}};var o=function(a,c,d,e){c=c!==!1,d=d!==!1,e=e!==!1;for(var f,g,h=n(e),i=c&&d&&e,j=h.length;--j>-1;)g=h[j],(i||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&g.paused(a)};return f.pauseAll=function(a,b,c){o(!0,a,b,c)},f.resumeAll=function(a,b,c){o(!1,a,b,c)},f.globalTimeScale=function(b){var d=a._rootTimeline,e=c.ticker.time;return arguments.length?(b=b||g,d._startTime=e-(e-d._startTime)*d._timeScale/b,d=a._rootFramesTimeline,e=c.ticker.frame,d._startTime=e-(e-d._startTime)*d._timeScale/b,d._timeScale=a._rootTimeline._timeScale=b,b):d._timeScale},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.duration=function(b){return arguments.length?a.prototype.duration.call(this,b):this._duration},k.totalDuration=function(a){return arguments.length?-1===this._repeat?this:this.duration((a-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},f},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){b.call(this,a),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var c,d,e=this.vars;for(d in e)c=e[d],i(c)&&-1!==c.join("").indexOf("{self}")&&(e[d]=this._swapSelfInParams(c));i(e.tweens)&&this.add(e.tweens,0,e.align,e.stagger)},e=1e-10,f=c._internals,g=d._internals={},h=f.isSelector,i=f.isArray,j=f.lazyTweens,k=f.lazyRender,l=_gsScope._gsDefine.globals,m=function(a){var b,c={};for(b in a)c[b]=a[b];return c},n=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c]):e[c%e.length];delete a.cycle},o=g.pauseCallback=function(){},p=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},q=d.prototype=new b;return d.version="1.19.1",q.constructor=d,q.kill()._gc=q._forcingPlayhead=q._hasPause=!1,q.to=function(a,b,d,e){var f=d.repeat&&l.TweenMax||c;return b?this.add(new f(a,b,d),e):this.set(a,d,e)},q.from=function(a,b,d,e){return this.add((d.repeat&&l.TweenMax||c).from(a,b,d),e)},q.fromTo=function(a,b,d,e,f){var g=e.repeat&&l.TweenMax||c;return b?this.add(g.fromTo(a,b,d,e),f):this.set(a,e,f)},q.staggerTo=function(a,b,e,f,g,i,j,k){var l,o,q=new d({onComplete:i,onCompleteParams:j,callbackScope:k,smoothChildTiming:this.smoothChildTiming}),r=e.cycle;for("string"==typeof a&&(a=c.selector(a)||a),a=a||[],h(a)&&(a=p(a)),f=f||0,0>f&&(a=p(a),a.reverse(),f*=-1),o=0;o<a.length;o++)l=m(e),l.startAt&&(l.startAt=m(l.startAt),l.startAt.cycle&&n(l.startAt,a,o)),r&&(n(l,a,o),null!=l.duration&&(b=l.duration,delete l.duration)),q.to(a[o],b,l,o*f);return this.add(q,g)},q.staggerFrom=function(a,b,c,d,e,f,g,h){return c.immediateRender=0!=c.immediateRender,c.runBackwards=!0,this.staggerTo(a,b,c,d,e,f,g,h)},q.staggerFromTo=function(a,b,c,d,e,f,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,this.staggerTo(a,b,d,e,f,g,h,i)},q.call=function(a,b,d,e){return this.add(c.delayedCall(0,a,b,d),e)},q.set=function(a,b,d){return d=this._parseTimeOrLabel(d,0,!0),null==b.immediateRender&&(b.immediateRender=d===this._time&&!this._paused),this.add(new c(a,0,b),d)},d.exportRoot=function(a,b){a=a||{},null==a.smoothChildTiming&&(a.smoothChildTiming=!0);var e,f,g=new d(a),h=g._timeline;for(null==b&&(b=!0),h._remove(g,!0),g._startTime=0,g._rawPrevTime=g._time=g._totalTime=h._time,e=h._first;e;)f=e._next,b&&e instanceof c&&e.target===e.vars.onComplete||g.add(e,e._startTime-e._delay),e=f;return h.add(g,0),g},q.add=function(e,f,g,h){var j,k,l,m,n,o;if("number"!=typeof f&&(f=this._parseTimeOrLabel(f,0,!0,e)),!(e instanceof a)){if(e instanceof Array||e&&e.push&&i(e)){for(g=g||"normal",h=h||0,j=f,k=e.length,l=0;k>l;l++)i(m=e[l])&&(m=new d({tweens:m})),this.add(m,j),"string"!=typeof m&&"function"!=typeof m&&("sequence"===g?j=m._startTime+m.totalDuration()/m._timeScale:"start"===g&&(m._startTime-=m.delay())),j+=h;return this._uncache(!0)}if("string"==typeof e)return this.addLabel(e,f);if("function"!=typeof e)throw"Cannot add "+e+" into the timeline; it is not a tween, timeline, function, or string.";e=c.delayedCall(0,e)}if(b.prototype.add.call(this,e,f),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(n=this,o=n.rawTime()>e._startTime;n._timeline;)o&&n._timeline.smoothChildTiming?n.totalTime(n._totalTime,!0):n._gc&&n._enabled(!0,!1),n=n._timeline;return this},q.remove=function(b){if(b instanceof a){this._remove(b,!1);var c=b._timeline=b.vars.useFrames?a._rootFramesTimeline:a._rootTimeline;return b._startTime=(b._paused?b._pauseTime:c._time)-(b._reversed?b.totalDuration()-b._totalTime:b._totalTime)/b._timeScale,this}if(b instanceof Array||b&&b.push&&i(b)){for(var d=b.length;--d>-1;)this.remove(b[d]);return this}return"string"==typeof b?this.removeLabel(b):this.kill(null,b)},q._remove=function(a,c){b.prototype._remove.call(this,a,c);var d=this._last;return d?this._time>this.duration()&&(this._time=this._duration,this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},q.append=function(a,b){return this.add(a,this._parseTimeOrLabel(null,b,!0,a))},q.insert=q.insertMultiple=function(a,b,c,d){return this.add(a,b||0,c,d)},q.appendMultiple=function(a,b,c,d){return this.add(a,this._parseTimeOrLabel(null,b,!0,a),c,d)},q.addLabel=function(a,b){return this._labels[a]=this._parseTimeOrLabel(b),this},q.addPause=function(a,b,d,e){var f=c.delayedCall(0,o,d,e||this);return f.vars.onComplete=f.vars.onReverseComplete=b,f.data="isPause",this._hasPause=!0,this.add(f,a)},q.removeLabel=function(a){return delete this._labels[a],this},q.getLabelTime=function(a){return null!=this._labels[a]?this._labels[a]:-1},q._parseTimeOrLabel=function(b,c,d,e){var f;if(e instanceof a&&e.timeline===this)this.remove(e);else if(e&&(e instanceof Array||e.push&&i(e)))for(f=e.length;--f>-1;)e[f]instanceof a&&e[f].timeline===this&&this.remove(e[f]);if("string"==typeof c)return this._parseTimeOrLabel(c,d&&"number"==typeof b&&null==this._labels[c]?b-this.duration():0,d);if(c=c||0,"string"!=typeof b||!isNaN(b)&&null==this._labels[b])null==b&&(b=this.duration());else{if(f=b.indexOf("="),-1===f)return null==this._labels[b]?d?this._labels[b]=this.duration()+c:c:this._labels[b]+c;c=parseInt(b.charAt(f-1)+"1",10)*Number(b.substr(f+1)),b=f>1?this._parseTimeOrLabel(b.substr(0,f-1),0,d):this.duration()}return Number(b)+c},q.seek=function(a,b){return this.totalTime("number"==typeof a?a:this._parseTimeOrLabel(a),b!==!1)},q.stop=function(){return this.paused(!0)},q.gotoAndPlay=function(a,b){return this.play(a,b)},q.gotoAndStop=function(a,b){return this.pause(a,b)},q.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,g,h,i,l,m,n=this._dirty?this.totalDuration():this._totalDuration,o=this._time,p=this._startTime,q=this._timeScale,r=this._paused;if(a>=n-1e-7&&a>=0)this._totalTime=this._time=n,this._reversed||this._hasPausedChild()||(f=!0,h="onComplete",i=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||this._rawPrevTime<0||this._rawPrevTime===e)&&this._rawPrevTime!==a&&this._first&&(i=!0,this._rawPrevTime>e&&(h="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,a=n+1e-4;else if(1e-7>a)if(this._totalTime=this._time=0,(0!==o||0===this._duration&&this._rawPrevTime!==e&&(this._rawPrevTime>0||0>a&&this._rawPrevTime>=0))&&(h="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(i=f=!0,h="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(i=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(i=!0)}else{if(this._hasPause&&!this._forcingPlayhead&&!b){if(a>=o)for(d=this._first;d&&d._startTime<=a&&!l;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(l=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!l;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(l=d),d=d._prev;l&&(this._time=a=l._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=a}if(this._time!==o&&this._first||c||i||l){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==o&&a>0&&(this._active=!0),0===o&&this.vars.onStart&&(0===this._time&&this._duration||b||this._callback("onStart")),m=this._time,m>=o)for(d=this._first;d&&(g=d._next,m===this._time&&(!this._paused||r));)(d._active||d._startTime<=m&&!d._paused&&!d._gc)&&(l===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=g;else for(d=this._last;d&&(g=d._prev,m===this._time&&(!this._paused||r));){if(d._active||d._startTime<=o&&!d._paused&&!d._gc){if(l===d){for(l=d._prev;l&&l.endTime()>this._time;)l.render(l._reversed?l.totalDuration()-(a-l._startTime)*l._timeScale:(a-l._startTime)*l._timeScale,b,c),l=l._prev;l=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=g}this._onUpdate&&(b||(j.length&&k(),this._callback("onUpdate"))),h&&(this._gc||(p===this._startTime||q!==this._timeScale)&&(0===this._time||n>=this.totalDuration())&&(f&&(j.length&&k(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[h]&&this._callback(h)))}},q._hasPausedChild=function(){for(var a=this._first;a;){if(a._paused||a instanceof d&&a._hasPausedChild())return!0;a=a._next}return!1},q.getChildren=function(a,b,d,e){e=e||-9999999999;for(var f=[],g=this._first,h=0;g;)g._startTime<e||(g instanceof c?b!==!1&&(f[h++]=g):(d!==!1&&(f[h++]=g),a!==!1&&(f=f.concat(g.getChildren(!0,b,d)),h=f.length))),g=g._next;return f},q.getTweensOf=function(a,b){var d,e,f=this._gc,g=[],h=0;for(f&&this._enabled(!0,!0),d=c.getTweensOf(a),e=d.length;--e>-1;)(d[e].timeline===this||b&&this._contains(d[e]))&&(g[h++]=d[e]);return f&&this._enabled(!1,!0),g},q.recent=function(){return this._recent},q._contains=function(a){for(var b=a.timeline;b;){if(b===this)return!0;b=b.timeline}return!1},q.shiftChildren=function(a,b,c){c=c||0;for(var d,e=this._first,f=this._labels;e;)e._startTime>=c&&(e._startTime+=a),e=e._next;if(b)for(d in f)f[d]>=c&&(f[d]+=a);return this._uncache(!0)},q._kill=function(a,b){if(!a&&!b)return this._enabled(!1,!1);for(var c=b?this.getTweensOf(b):this.getChildren(!0,!0,!1),d=c.length,e=!1;--d>-1;)c[d]._kill(a,b)&&(e=!0);return e},q.clear=function(a){var b=this.getChildren(!1,!0,!0),c=b.length;for(this._time=this._totalTime=0;--c>-1;)b[c]._enabled(!1,!1);return a!==!1&&(this._labels={}),this._uncache(!0)},q.invalidate=function(){for(var b=this._first;b;)b.invalidate(),b=b._next;return a.prototype.invalidate.call(this)},q._enabled=function(a,c){if(a===this._gc)for(var d=this._first;d;)d._enabled(a,!0),d=d._next;return b.prototype._enabled.call(this,a,c)},q.totalTime=function(b,c,d){this._forcingPlayhead=!0;var e=a.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},q.duration=function(a){return arguments.length?(0!==this.duration()&&0!==a&&this.timeScale(this._duration/a),this):(this._dirty&&this.totalDuration(),this._duration)},q.totalDuration=function(a){if(!arguments.length){if(this._dirty){for(var b,c,d=0,e=this._last,f=999999999999;e;)b=e._prev,e._dirty&&e.totalDuration(),e._startTime>f&&this._sortChildren&&!e._paused?this.add(e,e._startTime-e._delay):f=e._startTime,e._startTime<0&&!e._paused&&(d-=e._startTime,this._timeline.smoothChildTiming&&(this._startTime+=e._startTime/this._timeScale),this.shiftChildren(-e._startTime,!1,-9999999999),f=0),c=e._startTime+e._totalDuration/e._timeScale,c>d&&(d=c),e=b;this._duration=this._totalDuration=d,this._dirty=!1}return this._totalDuration}return a&&this.totalDuration()?this.timeScale(this._totalDuration/a):this},q.paused=function(b){if(!b)for(var c=this._first,d=this._time;c;)c._startTime===d&&"isPause"===c.data&&(c._rawPrevTime=0),c=c._next;return a.prototype.paused.apply(this,arguments)},q.usesFrames=function(){for(var b=this._timeline;b._timeline;)b=b._timeline;return b===a._rootFramesTimeline},q.rawTime=function(a){return a&&(this._paused||this._repeat&&this.time()>0&&this.totalProgress()<1)?this._totalTime%(this._duration+this._repeatDelay):this._paused?this._totalTime:(this._timeline.rawTime(a)-this._startTime)*this._timeScale},d},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(a,b,c){var d=function(b){a.call(this,b),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},e=1e-10,f=b._internals,g=f.lazyTweens,h=f.lazyRender,i=_gsScope._gsDefine.globals,j=new c(null,null,1,0),k=d.prototype=new a;return k.constructor=d,k.kill()._gc=!1,d.version="1.19.1",k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),a.prototype.invalidate.call(this)},k.addCallback=function(a,c,d,e){return this.add(b.delayedCall(0,a,d,e),c)},k.removeCallback=function(a,b){if(a)if(null==b)this._kill(null,a);else for(var c=this.getTweensOf(a,!1),d=c.length,e=this._parseTimeOrLabel(b);--d>-1;)c[d]._startTime===e&&c[d]._enabled(!1,!1);return this},k.removePause=function(b){return this.removeCallback(a._internals.pauseCallback,b)},k.tweenTo=function(a,c){c=c||{};var d,e,f,g={ease:j,useFrames:this.usesFrames(),immediateRender:!1},h=c.repeat&&i.TweenMax||b;for(e in c)g[e]=c[e];return g.time=this._parseTimeOrLabel(a),d=Math.abs(Number(g.time)-this._time)/this._timeScale||.001,f=new h(this,d,g),g.onStart=function(){f.target.paused(!0),f.vars.time!==f.target.time()&&d===f.duration()&&f.duration(Math.abs(f.vars.time-f.target.time())/f.target._timeScale),c.onStart&&c.onStart.apply(c.onStartScope||c.callbackScope||f,c.onStartParams||[])},f},k.tweenFromTo=function(a,b,c){c=c||{},a=this._parseTimeOrLabel(a),c.startAt={onComplete:this.seek,onCompleteParams:[a],callbackScope:this},c.immediateRender=c.immediateRender!==!1;var d=this.tweenTo(b,c);return d.duration(Math.abs(d.vars.time-a)/this._timeScale||.001)},k.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,i,j,k,l,m,n,o=this._dirty?this.totalDuration():this._totalDuration,p=this._duration,q=this._time,r=this._totalTime,s=this._startTime,t=this._timeScale,u=this._rawPrevTime,v=this._paused,w=this._cycle;if(a>=o-1e-7&&a>=0)this._locked||(this._totalTime=o,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(f=!0,j="onComplete",k=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||0>u||u===e)&&u!==a&&this._first&&(k=!0,u>e&&(j="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,this._yoyo&&0!==(1&this._cycle)?this._time=a=0:(this._time=p,a=p+1e-4);else if(1e-7>a)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==q||0===p&&u!==e&&(u>0||0>a&&u>=0)&&!this._locked)&&(j="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(k=f=!0,j="onReverseComplete"):u>=0&&this._first&&(k=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=p||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(k=!0)}else if(0===p&&0>u&&(k=!0),this._time=this._rawPrevTime=a,this._locked||(this._totalTime=a,0!==this._repeat&&(l=p+this._repeatDelay,this._cycle=this._totalTime/l>>0,0!==this._cycle&&this._cycle===this._totalTime/l&&a>=r&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&0!==(1&this._cycle)&&(this._time=p-this._time),this._time>p?(this._time=p,a=p+1e-4):this._time<0?this._time=a=0:a=this._time)),this._hasPause&&!this._forcingPlayhead&&!b&&p>a){if(a=this._time,a>=q||this._repeat&&w!==this._cycle)for(d=this._first;d&&d._startTime<=a&&!m;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(m=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!m;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(m=d),d=d._prev;m&&(this._time=a=m._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}if(this._cycle!==w&&!this._locked){var x=this._yoyo&&0!==(1&w),y=x===(this._yoyo&&0!==(1&this._cycle)),z=this._totalTime,A=this._cycle,B=this._rawPrevTime,C=this._time;if(this._totalTime=w*p,this._cycle<w?x=!x:this._totalTime+=p,this._time=q,this._rawPrevTime=0===p?u-1e-4:u,this._cycle=w,this._locked=!0,q=x?0:p,this.render(q,b,0===p),b||this._gc||this.vars.onRepeat&&(this._cycle=A,this._locked=!1,this._callback("onRepeat")),q!==this._time)return;if(y&&(this._cycle=w,this._locked=!0,q=x?p+1e-4:-1e-4,this.render(q,!0,!1)),this._locked=!1,this._paused&&!v)return;this._time=C,this._totalTime=z,this._cycle=A,this._rawPrevTime=B}if(!(this._time!==q&&this._first||c||k||m))return void(r!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==r&&a>0&&(this._active=!0),0===r&&this.vars.onStart&&(0===this._totalTime&&this._totalDuration||b||this._callback("onStart")),n=this._time,n>=q)for(d=this._first;d&&(i=d._next,n===this._time&&(!this._paused||v));)(d._active||d._startTime<=this._time&&!d._paused&&!d._gc)&&(m===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=i;else for(d=this._last;d&&(i=d._prev,n===this._time&&(!this._paused||v));){if(d._active||d._startTime<=q&&!d._paused&&!d._gc){if(m===d){for(m=d._prev;m&&m.endTime()>this._time;)m.render(m._reversed?m.totalDuration()-(a-m._startTime)*m._timeScale:(a-m._startTime)*m._timeScale,b,c),m=m._prev;m=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=i}this._onUpdate&&(b||(g.length&&h(),this._callback("onUpdate"))),j&&(this._locked||this._gc||(s===this._startTime||t!==this._timeScale)&&(0===this._time||o>=this.totalDuration())&&(f&&(g.length&&h(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[j]&&this._callback(j)))},k.getActive=function(a,b,c){null==a&&(a=!0),null==b&&(b=!0),null==c&&(c=!1);var d,e,f=[],g=this.getChildren(a,b,c),h=0,i=g.length;for(d=0;i>d;d++)e=g[d],e.isActive()&&(f[h++]=e);return f},k.getLabelAfter=function(a){a||0!==a&&(a=this._time);var b,c=this.getLabelsArray(),d=c.length;for(b=0;d>b;b++)if(c[b].time>a)return c[b].name;return null},k.getLabelBefore=function(a){null==a&&(a=this._time);for(var b=this.getLabelsArray(),c=b.length;--c>-1;)if(b[c].time<a)return b[c].name;return null},k.getLabelsArray=function(){var a,b=[],c=0;for(a in this._labels)b[c++]={time:this._labels[a],name:a};return b.sort(function(a,b){return a.time-b.time}),b},k.invalidate=function(){return this._locked=!1,a.prototype.invalidate.call(this)},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()},k.totalDuration=function(b){return arguments.length?-1!==this._repeat&&b?this.timeScale(this.totalDuration()/b):this:(this._dirty&&(a.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},k.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.getLabelBefore(this._time+1e-8)},d},!0),function(){var a=180/Math.PI,b=[],c=[],d=[],e={},f=_gsScope._gsDefine.globals,g=function(a,b,c,d){c===d&&(c=d-(d-b)/1e6),a===b&&(b=a+(c-a)/1e6),this.a=a,this.b=b,this.c=c,this.d=d,this.da=d-a,this.ca=c-a,this.ba=b-a},h=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",i=function(a,b,c,d){var e={a:a},f={},g={},h={c:d},i=(a+b)/2,j=(b+c)/2,k=(c+d)/2,l=(i+j)/2,m=(j+k)/2,n=(m-l)/8;return e.b=i+(a-i)/4,f.b=l+n,e.c=f.a=(e.b+f.b)/2,f.c=g.a=(l+m)/2,g.b=m-n,h.b=k+(d-k)/4,g.c=h.a=(g.b+h.b)/2,[e,f,g,h]},j=function(a,e,f,g,h){var j,k,l,m,n,o,p,q,r,s,t,u,v,w=a.length-1,x=0,y=a[0].a;for(j=0;w>j;j++)n=a[x],k=n.a,l=n.d,m=a[x+1].d,h?(t=b[j],u=c[j],v=(u+t)*e*.25/(g?.5:d[j]||.5),o=l-(l-k)*(g?.5*e:0!==t?v/t:0),p=l+(m-l)*(g?.5*e:0!==u?v/u:0),q=l-(o+((p-o)*(3*t/(t+u)+.5)/4||0))):(o=l-(l-k)*e*.5,p=l+(m-l)*e*.5,q=l-(o+p)/2),o+=q,p+=q,n.c=r=o,0!==j?n.b=y:n.b=y=n.a+.6*(n.c-n.a),n.da=l-k,n.ca=r-k,n.ba=y-k,f?(s=i(k,y,r,l),a.splice(x,1,s[0],s[1],s[2],s[3]),x+=4):x++,y=p;n=a[x],n.b=y,n.c=y+.4*(n.d-y),n.da=n.d-n.a,n.ca=n.c-n.a,n.ba=y-n.a,f&&(s=i(n.a,y,n.c,n.d),a.splice(x,1,s[0],s[1],s[2],s[3]))},k=function(a,d,e,f){var h,i,j,k,l,m,n=[];if(f)for(a=[f].concat(a),i=a.length;--i>-1;)"string"==typeof(m=a[i][d])&&"="===m.charAt(1)&&(a[i][d]=f[d]+Number(m.charAt(0)+m.substr(2)));if(h=a.length-2,0>h)return n[0]=new g(a[0][d],0,0,a[-1>h?0:1][d]),n;for(i=0;h>i;i++)j=a[i][d],k=a[i+1][d],n[i]=new g(j,0,0,k),e&&(l=a[i+2][d],b[i]=(b[i]||0)+(k-j)*(k-j),c[i]=(c[i]||0)+(l-k)*(l-k));return n[i]=new g(a[i][d],0,0,a[i+1][d]),n},l=function(a,f,g,i,l,m){var n,o,p,q,r,s,t,u,v={},w=[],x=m||a[0];l="string"==typeof l?","+l+",":h,null==f&&(f=1);for(o in a[0])w.push(o);if(a.length>1){for(u=a[a.length-1],t=!0,n=w.length;--n>-1;)if(o=w[n],Math.abs(x[o]-u[o])>.05){t=!1;break}t&&(a=a.concat(),m&&a.unshift(m),a.push(a[1]),m=a[a.length-3])}for(b.length=c.length=d.length=0,n=w.length;--n>-1;)o=w[n],e[o]=-1!==l.indexOf(","+o+","),v[o]=k(a,o,e[o],m);for(n=b.length;--n>-1;)b[n]=Math.sqrt(b[n]),c[n]=Math.sqrt(c[n]);if(!i){for(n=w.length;--n>-1;)if(e[o])for(p=v[w[n]],s=p.length-1,q=0;s>q;q++)r=p[q+1].da/c[q]+p[q].da/b[q]||0,d[q]=(d[q]||0)+r*r;for(n=d.length;--n>-1;)d[n]=Math.sqrt(d[n])}for(n=w.length,q=g?4:1;--n>-1;)o=w[n],p=v[o],j(p,f,g,i,e[o]),t&&(p.splice(0,q),p.splice(p.length-q,q));return v},m=function(a,b,c){b=b||"soft";var d,e,f,h,i,j,k,l,m,n,o,p={},q="cubic"===b?3:2,r="soft"===b,s=[];if(r&&c&&(a=[c].concat(a)),null==a||a.length<q+1)throw"invalid Bezier data";for(m in a[0])s.push(m);for(j=s.length;--j>-1;){for(m=s[j],p[m]=i=[],n=0,l=a.length,k=0;l>k;k++)d=null==c?a[k][m]:"string"==typeof(o=a[k][m])&&"="===o.charAt(1)?c[m]+Number(o.charAt(0)+o.substr(2)):Number(o),r&&k>1&&l-1>k&&(i[n++]=(d+i[n-2])/2),i[n++]=d;for(l=n-q+1,n=0,k=0;l>k;k+=q)d=i[k],e=i[k+1],f=i[k+2],h=2===q?0:i[k+3],i[n++]=o=3===q?new g(d,e,f,h):new g(d,(2*e+d)/3,(2*e+f)/3,f);i.length=n}return p},n=function(a,b,c){for(var d,e,f,g,h,i,j,k,l,m,n,o=1/c,p=a.length;--p>-1;)for(m=a[p],f=m.a,g=m.d-f,
h=m.c-f,i=m.b-f,d=e=0,k=1;c>=k;k++)j=o*k,l=1-j,d=e-(e=(j*j*g+3*l*(j*h+l*i))*j),n=p*c+k-1,b[n]=(b[n]||0)+d*d},o=function(a,b){b=b>>0||6;var c,d,e,f,g=[],h=[],i=0,j=0,k=b-1,l=[],m=[];for(c in a)n(a[c],g,b);for(e=g.length,d=0;e>d;d++)i+=Math.sqrt(g[d]),f=d%b,m[f]=i,f===k&&(j+=i,f=d/b>>0,l[f]=m,h[f]=j,i=0,m=[]);return{length:j,lengths:h,segments:l}},p=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.7",API:2,global:!0,init:function(a,b,c){this._target=a,b instanceof Array&&(b={values:b}),this._func={},this._mod={},this._props=[],this._timeRes=null==b.timeResolution?6:parseInt(b.timeResolution,10);var d,e,f,g,h,i=b.values||[],j={},k=i[0],n=b.autoRotate||c.vars.orientToBezier;this._autoRotate=n?n instanceof Array?n:[["x","y","rotation",n===!0?0:Number(n)||0]]:null;for(d in k)this._props.push(d);for(f=this._props.length;--f>-1;)d=this._props[f],this._overwriteProps.push(d),e=this._func[d]="function"==typeof a[d],j[d]=e?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]():parseFloat(a[d]),h||j[d]!==i[0][d]&&(h=j);if(this._beziers="cubic"!==b.type&&"quadratic"!==b.type&&"soft"!==b.type?l(i,isNaN(b.curviness)?1:b.curviness,!1,"thruBasic"===b.type,b.correlate,h):m(i,b.type,j),this._segCount=this._beziers[d].length,this._timeRes){var p=o(this._beziers,this._timeRes);this._length=p.length,this._lengths=p.lengths,this._segments=p.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(n=this._autoRotate)for(this._initialRotations=[],n[0]instanceof Array||(this._autoRotate=n=[n]),f=n.length;--f>-1;){for(g=0;3>g;g++)d=n[f][g],this._func[d]="function"==typeof a[d]?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]:!1;d=n[f][2],this._initialRotations[f]=(this._func[d]?this._func[d].call(this._target):this._target[d])||0,this._overwriteProps.push(d)}return this._startRatio=c.vars.runBackwards?1:0,!0},set:function(b){var c,d,e,f,g,h,i,j,k,l,m=this._segCount,n=this._func,o=this._target,p=b!==this._startRatio;if(this._timeRes){if(k=this._lengths,l=this._curSeg,b*=this._length,e=this._li,b>this._l2&&m-1>e){for(j=m-1;j>e&&(this._l2=k[++e])<=b;);this._l1=k[e-1],this._li=e,this._curSeg=l=this._segments[e],this._s2=l[this._s1=this._si=0]}else if(b<this._l1&&e>0){for(;e>0&&(this._l1=k[--e])>=b;);0===e&&b<this._l1?this._l1=0:e++,this._l2=k[e],this._li=e,this._curSeg=l=this._segments[e],this._s1=l[(this._si=l.length-1)-1]||0,this._s2=l[this._si]}if(c=e,b-=this._l1,e=this._si,b>this._s2&&e<l.length-1){for(j=l.length-1;j>e&&(this._s2=l[++e])<=b;);this._s1=l[e-1],this._si=e}else if(b<this._s1&&e>0){for(;e>0&&(this._s1=l[--e])>=b;);0===e&&b<this._s1?this._s1=0:e++,this._s2=l[e],this._si=e}h=(e+(b-this._s1)/(this._s2-this._s1))*this._prec||0}else c=0>b?0:b>=1?m-1:m*b>>0,h=(b-c*(1/m))*m;for(d=1-h,e=this._props.length;--e>-1;)f=this._props[e],g=this._beziers[f][c],i=(h*h*g.da+3*d*(h*g.ca+d*g.ba))*h+g.a,this._mod[f]&&(i=this._mod[f](i,o)),n[f]?o[f](i):o[f]=i;if(this._autoRotate){var q,r,s,t,u,v,w,x=this._autoRotate;for(e=x.length;--e>-1;)f=x[e][2],v=x[e][3]||0,w=x[e][4]===!0?1:a,g=this._beziers[x[e][0]],q=this._beziers[x[e][1]],g&&q&&(g=g[c],q=q[c],r=g.a+(g.b-g.a)*h,t=g.b+(g.c-g.b)*h,r+=(t-r)*h,t+=(g.c+(g.d-g.c)*h-t)*h,s=q.a+(q.b-q.a)*h,u=q.b+(q.c-q.b)*h,s+=(u-s)*h,u+=(q.c+(q.d-q.c)*h-u)*h,i=p?Math.atan2(u-s,t-r)*w+v:this._initialRotations[e],this._mod[f]&&(i=this._mod[f](i,o)),n[f]?o[f](i):o[f]=i)}}}),q=p.prototype;p.bezierThrough=l,p.cubicToQuadratic=i,p._autoCSS=!0,p.quadraticToCubic=function(a,b,c){return new g(a,(2*b+a)/3,(2*b+c)/3,c)},p._cssRegister=function(){var a=f.CSSPlugin;if(a){var b=a._internals,c=b._parseToProxy,d=b._setPluginRatio,e=b.CSSPropTween;b._registerComplexSpecialProp("bezier",{parser:function(a,b,f,g,h,i){b instanceof Array&&(b={values:b}),i=new p;var j,k,l,m=b.values,n=m.length-1,o=[],q={};if(0>n)return h;for(j=0;n>=j;j++)l=c(a,m[j],g,h,i,n!==j),o[j]=l.end;for(k in b)q[k]=b[k];return q.values=o,h=new e(a,"bezier",0,0,l.pt,2),h.data=l,h.plugin=i,h.setRatio=d,0===q.autoRotate&&(q.autoRotate=!0),!q.autoRotate||q.autoRotate instanceof Array||(j=q.autoRotate===!0?0:Number(q.autoRotate),q.autoRotate=null!=l.end.left?[["left","top","rotation",j,!1]]:null!=l.end.x?[["x","y","rotation",j,!1]]:!1),q.autoRotate&&(g._transform||g._enableTransforms(!1),l.autoRotate=g._target._gsTransform,l.proxy.rotation=l.autoRotate.rotation||0,g._overwriteProps.push("rotation")),i._onInitTween(l.proxy,q,g._tween),h}})}},q._mod=function(a){for(var b,c=this._overwriteProps,d=c.length;--d>-1;)b=a[c[d]],b&&"function"==typeof b&&(this._mod[c[d]]=b)},q._kill=function(a){var b,c,d=this._props;for(b in this._beziers)if(b in a)for(delete this._beziers[b],delete this._func[b],c=d.length;--c>-1;)d[c]===b&&d.splice(c,1);if(d=this._autoRotate)for(c=d.length;--c>-1;)a[d[c][2]]&&d.splice(c,1);return this._super._kill.call(this,a)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(a,b){var c,d,e,f,g=function(){a.call(this,"css"),this._overwriteProps.length=0,this.setRatio=g.prototype.setRatio},h=_gsScope._gsDefine.globals,i={},j=g.prototype=new a("css");j.constructor=g,g.version="1.19.1",g.API=2,g.defaultTransformPerspective=0,g.defaultSkewType="compensated",g.defaultSmoothOrigin=!0,j="px",g.suffixMap={top:j,right:j,bottom:j,left:j,width:j,height:j,fontSize:j,padding:j,margin:j,perspective:j,lineHeight:""};var k,l,m,n,o,p,q,r,s=/(?:\-|\.|\b)(\d|\.|e\-)+/g,t=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,u=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,w=/(?:\d|\-|\+|=|#|\.)*/g,x=/opacity *= *([^)]*)/i,y=/opacity:([^;]*)/i,z=/alpha\(opacity *=.+?\)/i,A=/^(rgb|hsl)/,B=/([A-Z])/g,C=/-([a-z])/gi,D=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,E=function(a,b){return b.toUpperCase()},F=/(?:Left|Right|Width)/i,G=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,H=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,I=/,(?=[^\)]*(?:\(|$))/gi,J=/[\s,\(]/i,K=Math.PI/180,L=180/Math.PI,M={},N={style:{}},O=_gsScope.document||{createElement:function(){return N}},P=function(a,b){return O.createElementNS?O.createElementNS(b||"http://www.w3.org/1999/xhtml",a):O.createElement(a)},Q=P("div"),R=P("img"),S=g._internals={_specialProps:i},T=(_gsScope.navigator||{}).userAgent||"",U=function(){var a=T.indexOf("Android"),b=P("a");return m=-1!==T.indexOf("Safari")&&-1===T.indexOf("Chrome")&&(-1===a||parseFloat(T.substr(a+8,2))>3),o=m&&parseFloat(T.substr(T.indexOf("Version/")+8,2))<6,n=-1!==T.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T))&&(p=parseFloat(RegExp.$1)),b?(b.style.cssText="top:1px;opacity:.55;",/^0.55/.test(b.style.opacity)):!1}(),V=function(a){return x.test("string"==typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100:1},W=function(a){_gsScope.console&&console.log(a)},X="",Y="",Z=function(a,b){b=b||Q;var c,d,e=b.style;if(void 0!==e[a])return a;for(a=a.charAt(0).toUpperCase()+a.substr(1),c=["O","Moz","ms","Ms","Webkit"],d=5;--d>-1&&void 0===e[c[d]+a];);return d>=0?(Y=3===d?"ms":c[d],X="-"+Y.toLowerCase()+"-",Y+a):null},$=O.defaultView?O.defaultView.getComputedStyle:function(){},_=g.getStyle=function(a,b,c,d,e){var f;return U||"opacity"!==b?(!d&&a.style[b]?f=a.style[b]:(c=c||$(a))?f=c[b]||c.getPropertyValue(b)||c.getPropertyValue(b.replace(B,"-$1").toLowerCase()):a.currentStyle&&(f=a.currentStyle[b]),null==e||f&&"none"!==f&&"auto"!==f&&"auto auto"!==f?f:e):V(a)},aa=S.convertToPixels=function(a,c,d,e,f){if("px"===e||!e)return d;if("auto"===e||!d)return 0;var h,i,j,k=F.test(c),l=a,m=Q.style,n=0>d,o=1===d;if(n&&(d=-d),o&&(d*=100),"%"===e&&-1!==c.indexOf("border"))h=d/100*(k?a.clientWidth:a.clientHeight);else{if(m.cssText="border:0 solid red;position:"+_(a,"position")+";line-height:0;","%"!==e&&l.appendChild&&"v"!==e.charAt(0)&&"rem"!==e)m[k?"borderLeftWidth":"borderTopWidth"]=d+e;else{if(l=a.parentNode||O.body,i=l._gsCache,j=b.ticker.frame,i&&k&&i.time===j)return i.width*d/100;m[k?"width":"height"]=d+e}l.appendChild(Q),h=parseFloat(Q[k?"offsetWidth":"offsetHeight"]),l.removeChild(Q),k&&"%"===e&&g.cacheWidths!==!1&&(i=l._gsCache=l._gsCache||{},i.time=j,i.width=h/d*100),0!==h||f||(h=aa(a,c,d,e,!0))}return o&&(h/=100),n?-h:h},ba=S.calculateOffset=function(a,b,c){if("absolute"!==_(a,"position",c))return 0;var d="left"===b?"Left":"Top",e=_(a,"margin"+d,c);return a["offset"+d]-(aa(a,b,parseFloat(e),e.replace(w,""))||0)},ca=function(a,b){var c,d,e,f={};if(b=b||$(a,null))if(c=b.length)for(;--c>-1;)e=b[c],(-1===e.indexOf("-transform")||Da===e)&&(f[e.replace(C,E)]=b.getPropertyValue(e));else for(c in b)(-1===c.indexOf("Transform")||Ca===c)&&(f[c]=b[c]);else if(b=a.currentStyle||a.style)for(c in b)"string"==typeof c&&void 0===f[c]&&(f[c.replace(C,E)]=b[c]);return U||(f.opacity=V(a)),d=Ra(a,b,!1),f.rotation=d.rotation,f.skewX=d.skewX,f.scaleX=d.scaleX,f.scaleY=d.scaleY,f.x=d.x,f.y=d.y,Fa&&(f.z=d.z,f.rotationX=d.rotationX,f.rotationY=d.rotationY,f.scaleZ=d.scaleZ),f.filters&&delete f.filters,f},da=function(a,b,c,d,e){var f,g,h,i={},j=a.style;for(g in c)"cssText"!==g&&"length"!==g&&isNaN(g)&&(b[g]!==(f=c[g])||e&&e[g])&&-1===g.indexOf("Origin")&&("number"==typeof f||"string"==typeof f)&&(i[g]="auto"!==f||"left"!==g&&"top"!==g?""!==f&&"auto"!==f&&"none"!==f||"string"!=typeof b[g]||""===b[g].replace(v,"")?f:0:ba(a,g),void 0!==j[g]&&(h=new sa(j,g,j[g],h)));if(d)for(g in d)"className"!==g&&(i[g]=d[g]);return{difs:i,firstMPT:h}},ea={width:["Left","Right"],height:["Top","Bottom"]},fa=["marginLeft","marginRight","marginTop","marginBottom"],ga=function(a,b,c){if("svg"===(a.nodeName+"").toLowerCase())return(c||$(a))[b]||0;if(a.getCTM&&Oa(a))return a.getBBox()[b]||0;var d=parseFloat("width"===b?a.offsetWidth:a.offsetHeight),e=ea[b],f=e.length;for(c=c||$(a,null);--f>-1;)d-=parseFloat(_(a,"padding"+e[f],c,!0))||0,d-=parseFloat(_(a,"border"+e[f]+"Width",c,!0))||0;return d},ha=function(a,b){if("contain"===a||"auto"===a||"auto auto"===a)return a+" ";(null==a||""===a)&&(a="0 0");var c,d=a.split(" "),e=-1!==a.indexOf("left")?"0%":-1!==a.indexOf("right")?"100%":d[0],f=-1!==a.indexOf("top")?"0%":-1!==a.indexOf("bottom")?"100%":d[1];if(d.length>3&&!b){for(d=a.split(", ").join(",").split(","),a=[],c=0;c<d.length;c++)a.push(ha(d[c]));return a.join(",")}return null==f?f="center"===e?"50%":"0":"center"===f&&(f="50%"),("center"===e||isNaN(parseFloat(e))&&-1===(e+"").indexOf("="))&&(e="50%"),a=e+" "+f+(d.length>2?" "+d[2]:""),b&&(b.oxp=-1!==e.indexOf("%"),b.oyp=-1!==f.indexOf("%"),b.oxr="="===e.charAt(1),b.oyr="="===f.charAt(1),b.ox=parseFloat(e.replace(v,"")),b.oy=parseFloat(f.replace(v,"")),b.v=a),b||a},ia=function(a,b){return"function"==typeof a&&(a=a(r,q)),"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-parseFloat(b)||0},ja=function(a,b){return"function"==typeof a&&(a=a(r,q)),null==a?b:"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2))+b:parseFloat(a)||0},ka=function(a,b,c,d){var e,f,g,h,i,j=1e-6;return"function"==typeof a&&(a=a(r,q)),null==a?h=b:"number"==typeof a?h=a:(e=360,f=a.split("_"),i="="===a.charAt(1),g=(i?parseInt(a.charAt(0)+"1",10)*parseFloat(f[0].substr(2)):parseFloat(f[0]))*(-1===a.indexOf("rad")?1:L)-(i?0:b),f.length&&(d&&(d[c]=b+g),-1!==a.indexOf("short")&&(g%=e,g!==g%(e/2)&&(g=0>g?g+e:g-e)),-1!==a.indexOf("_cw")&&0>g?g=(g+9999999999*e)%e-(g/e|0)*e:-1!==a.indexOf("ccw")&&g>0&&(g=(g-9999999999*e)%e-(g/e|0)*e)),h=b+g),j>h&&h>-j&&(h=0),h},la={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ma=function(a,b,c){return a=0>a?a+1:a>1?a-1:a,255*(1>6*a?b+(c-b)*a*6:.5>a?c:2>3*a?b+(c-b)*(2/3-a)*6:b)+.5|0},na=g.parseColor=function(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a)if("number"==typeof a)c=[a>>16,a>>8&255,255&a];else{if(","===a.charAt(a.length-1)&&(a=a.substr(0,a.length-1)),la[a])c=la[a];else if("#"===a.charAt(0))4===a.length&&(d=a.charAt(1),e=a.charAt(2),f=a.charAt(3),a="#"+d+d+e+e+f+f),a=parseInt(a.substr(1),16),c=[a>>16,a>>8&255,255&a];else if("hsl"===a.substr(0,3))if(c=m=a.match(s),b){if(-1!==a.indexOf("="))return a.match(t)}else g=Number(c[0])%360/360,h=Number(c[1])/100,i=Number(c[2])/100,e=.5>=i?i*(h+1):i+h-i*h,d=2*i-e,c.length>3&&(c[3]=Number(a[3])),c[0]=ma(g+1/3,d,e),c[1]=ma(g,d,e),c[2]=ma(g-1/3,d,e);else c=a.match(s)||la.transparent;c[0]=Number(c[0]),c[1]=Number(c[1]),c[2]=Number(c[2]),c.length>3&&(c[3]=Number(c[3]))}else c=la.black;return b&&!m&&(d=c[0]/255,e=c[1]/255,f=c[2]/255,j=Math.max(d,e,f),k=Math.min(d,e,f),i=(j+k)/2,j===k?g=h=0:(l=j-k,h=i>.5?l/(2-j-k):l/(j+k),g=j===d?(e-f)/l+(f>e?6:0):j===e?(f-d)/l+2:(d-e)/l+4,g*=60),c[0]=g+.5|0,c[1]=100*h+.5|0,c[2]=100*i+.5|0),c},oa=function(a,b){var c,d,e,f=a.match(pa)||[],g=0,h=f.length?"":a;for(c=0;c<f.length;c++)d=f[c],e=a.substr(g,a.indexOf(d,g)-g),g+=e.length+d.length,d=na(d,b),3===d.length&&d.push(1),h+=e+(b?"hsla("+d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:"rgba("+d.join(","))+")";return h+a.substr(g)},pa="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(j in la)pa+="|"+j+"\\b";pa=new RegExp(pa+")","gi"),g.colorStringFilter=function(a){var b,c=a[0]+a[1];pa.test(c)&&(b=-1!==c.indexOf("hsl(")||-1!==c.indexOf("hsla("),a[0]=oa(a[0],b),a[1]=oa(a[1],b)),pa.lastIndex=0},b.defaultStringFilter||(b.defaultStringFilter=g.colorStringFilter);var qa=function(a,b,c,d){if(null==a)return function(a){return a};var e,f=b?(a.match(pa)||[""])[0]:"",g=a.split(f).join("").match(u)||[],h=a.substr(0,a.indexOf(g[0])),i=")"===a.charAt(a.length-1)?")":"",j=-1!==a.indexOf(" ")?" ":",",k=g.length,l=k>0?g[0].replace(s,""):"";return k?e=b?function(a){var b,m,n,o;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(o=a.replace(I,"|").split("|"),n=0;n<o.length;n++)o[n]=e(o[n]);return o.join(",")}if(b=(a.match(pa)||[f])[0],m=a.split(b).join("").match(u)||[],n=m.length,k>n--)for(;++n<k;)m[n]=c?m[(n-1)/2|0]:g[n];return h+m.join(j)+j+b+i+(-1!==a.indexOf("inset")?" inset":"")}:function(a){var b,f,m;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(f=a.replace(I,"|").split("|"),m=0;m<f.length;m++)f[m]=e(f[m]);return f.join(",")}if(b=a.match(u)||[],m=b.length,k>m--)for(;++m<k;)b[m]=c?b[(m-1)/2|0]:g[m];return h+b.join(j)+i}:function(a){return a}},ra=function(a){return a=a.split(","),function(b,c,d,e,f,g,h){var i,j=(c+"").split(" ");for(h={},i=0;4>i;i++)h[a[i]]=j[i]=j[i]||j[(i-1)/2>>0];return e.parse(b,h,f,g)}},sa=(S._setPluginRatio=function(a){this.plugin.setRatio(a);for(var b,c,d,e,f,g=this.data,h=g.proxy,i=g.firstMPT,j=1e-6;i;)b=h[i.v],i.r?b=Math.round(b):j>b&&b>-j&&(b=0),i.t[i.p]=b,i=i._next;if(g.autoRotate&&(g.autoRotate.rotation=g.mod?g.mod(h.rotation,this.t):h.rotation),1===a||0===a)for(i=g.firstMPT,f=1===a?"e":"b";i;){if(c=i.t,c.type){if(1===c.type){for(e=c.xs0+c.s+c.xs1,d=1;d<c.l;d++)e+=c["xn"+d]+c["xs"+(d+1)];c[f]=e}}else c[f]=c.s+c.xs0;i=i._next}},function(a,b,c,d,e){this.t=a,this.p=b,this.v=c,this.r=e,d&&(d._prev=this,this._next=d)}),ta=(S._parseToProxy=function(a,b,c,d,e,f){var g,h,i,j,k,l=d,m={},n={},o=c._transform,p=M;for(c._transform=null,M=b,d=k=c.parse(a,b,d,e),M=p,f&&(c._transform=o,l&&(l._prev=null,l._prev&&(l._prev._next=null)));d&&d!==l;){if(d.type<=1&&(h=d.p,n[h]=d.s+d.c,m[h]=d.s,f||(j=new sa(d,"s",h,j,d.r),d.c=0),1===d.type))for(g=d.l;--g>0;)i="xn"+g,h=d.p+"_"+i,n[h]=d.data[i],m[h]=d[i],f||(j=new sa(d,i,h,j,d.rxp[i]));d=d._next}return{proxy:m,end:n,firstMPT:j,pt:k}},S.CSSPropTween=function(a,b,d,e,g,h,i,j,k,l,m){this.t=a,this.p=b,this.s=d,this.c=e,this.n=i||b,a instanceof ta||f.push(this.n),this.r=j,this.type=h||0,k&&(this.pr=k,c=!0),this.b=void 0===l?d:l,this.e=void 0===m?d+e:m,g&&(this._next=g,g._prev=this)}),ua=function(a,b,c,d,e,f){var g=new ta(a,b,c,d-c,e,-1,f);return g.b=c,g.e=g.xs0=d,g},va=g.parseComplex=function(a,b,c,d,e,f,h,i,j,l){c=c||f||"","function"==typeof d&&(d=d(r,q)),h=new ta(a,b,0,0,h,l?2:1,null,!1,i,c,d),d+="",e&&pa.test(d+c)&&(d=[c,d],g.colorStringFilter(d),c=d[0],d=d[1]);var m,n,o,p,u,v,w,x,y,z,A,B,C,D=c.split(", ").join(",").split(" "),E=d.split(", ").join(",").split(" "),F=D.length,G=k!==!1;for((-1!==d.indexOf(",")||-1!==c.indexOf(","))&&(D=D.join(" ").replace(I,", ").split(" "),E=E.join(" ").replace(I,", ").split(" "),F=D.length),F!==E.length&&(D=(f||"").split(" "),F=D.length),h.plugin=j,h.setRatio=l,pa.lastIndex=0,m=0;F>m;m++)if(p=D[m],u=E[m],x=parseFloat(p),x||0===x)h.appendXtra("",x,ia(u,x),u.replace(t,""),G&&-1!==u.indexOf("px"),!0);else if(e&&pa.test(p))B=u.indexOf(")")+1,B=")"+(B?u.substr(B):""),C=-1!==u.indexOf("hsl")&&U,p=na(p,C),u=na(u,C),y=p.length+u.length>6,y&&!U&&0===u[3]?(h["xs"+h.l]+=h.l?" transparent":"transparent",h.e=h.e.split(E[m]).join("transparent")):(U||(y=!1),C?h.appendXtra(y?"hsla(":"hsl(",p[0],ia(u[0],p[0]),",",!1,!0).appendXtra("",p[1],ia(u[1],p[1]),"%,",!1).appendXtra("",p[2],ia(u[2],p[2]),y?"%,":"%"+B,!1):h.appendXtra(y?"rgba(":"rgb(",p[0],u[0]-p[0],",",!0,!0).appendXtra("",p[1],u[1]-p[1],",",!0).appendXtra("",p[2],u[2]-p[2],y?",":B,!0),y&&(p=p.length<4?1:p[3],h.appendXtra("",p,(u.length<4?1:u[3])-p,B,!1))),pa.lastIndex=0;else if(v=p.match(s)){if(w=u.match(t),!w||w.length!==v.length)return h;for(o=0,n=0;n<v.length;n++)A=v[n],z=p.indexOf(A,o),h.appendXtra(p.substr(o,z-o),Number(A),ia(w[n],A),"",G&&"px"===p.substr(z+A.length,2),0===n),o=z+A.length;h["xs"+h.l]+=p.substr(o)}else h["xs"+h.l]+=h.l||h["xs"+h.l]?" "+u:u;if(-1!==d.indexOf("=")&&h.data){for(B=h.xs0+h.data.s,m=1;m<h.l;m++)B+=h["xs"+m]+h.data["xn"+m];h.e=B+h["xs"+m]}return h.l||(h.type=-1,h.xs0=h.e),h.xfirst||h},wa=9;for(j=ta.prototype,j.l=j.pr=0;--wa>0;)j["xn"+wa]=0,j["xs"+wa]="";j.xs0="",j._next=j._prev=j.xfirst=j.data=j.plugin=j.setRatio=j.rxp=null,j.appendXtra=function(a,b,c,d,e,f){var g=this,h=g.l;return g["xs"+h]+=f&&(h||g["xs"+h])?" "+a:a||"",c||0===h||g.plugin?(g.l++,g.type=g.setRatio?2:1,g["xs"+g.l]=d||"",h>0?(g.data["xn"+h]=b+c,g.rxp["xn"+h]=e,g["xn"+h]=b,g.plugin||(g.xfirst=new ta(g,"xn"+h,b,c,g.xfirst||g,0,g.n,e,g.pr),g.xfirst.xs0=0),g):(g.data={s:b+c},g.rxp={},g.s=b,g.c=c,g.r=e,g)):(g["xs"+h]+=b+(d||""),g)};var xa=function(a,b){b=b||{},this.p=b.prefix?Z(a)||a:a,i[a]=i[this.p]=this,this.format=b.formatter||qa(b.defaultValue,b.color,b.collapsible,b.multi),b.parser&&(this.parse=b.parser),this.clrs=b.color,this.multi=b.multi,this.keyword=b.keyword,this.dflt=b.defaultValue,this.pr=b.priority||0},ya=S._registerComplexSpecialProp=function(a,b,c){"object"!=typeof b&&(b={parser:c});var d,e,f=a.split(","),g=b.defaultValue;for(c=c||[g],d=0;d<f.length;d++)b.prefix=0===d&&b.prefix,b.defaultValue=c[d]||g,e=new xa(f[d],b)},za=S._registerPluginProp=function(a){if(!i[a]){var b=a.charAt(0).toUpperCase()+a.substr(1)+"Plugin";ya(a,{parser:function(a,c,d,e,f,g,j){var k=h.com.greensock.plugins[b];return k?(k._cssRegister(),i[d].parse(a,c,d,e,f,g,j)):(W("Error: "+b+" js file not loaded."),f)}})}};j=xa.prototype,j.parseComplex=function(a,b,c,d,e,f){var g,h,i,j,k,l,m=this.keyword;if(this.multi&&(I.test(c)||I.test(b)?(h=b.replace(I,"|").split("|"),i=c.replace(I,"|").split("|")):m&&(h=[b],i=[c])),i){for(j=i.length>h.length?i.length:h.length,g=0;j>g;g++)b=h[g]=h[g]||this.dflt,c=i[g]=i[g]||this.dflt,m&&(k=b.indexOf(m),l=c.indexOf(m),k!==l&&(-1===l?h[g]=h[g].split(m).join(""):-1===k&&(h[g]+=" "+m)));b=h.join(", "),c=i.join(", ")}return va(a,this.p,b,c,this.clrs,this.dflt,d,this.pr,e,f)},j.parse=function(a,b,c,d,f,g,h){return this.parseComplex(a.style,this.format(_(a,this.p,e,!1,this.dflt)),this.format(b),f,g)},g.registerSpecialProp=function(a,b,c){ya(a,{parser:function(a,d,e,f,g,h,i){var j=new ta(a,e,0,0,g,2,e,!1,c);return j.plugin=h,j.setRatio=b(a,d,f._tween,e),j},priority:c})},g.useSVGTransformAttr=!0;var Aa,Ba="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Ca=Z("transform"),Da=X+"transform",Ea=Z("transformOrigin"),Fa=null!==Z("perspective"),Ga=S.Transform=function(){this.perspective=parseFloat(g.defaultTransformPerspective)||0,this.force3D=g.defaultForce3D!==!1&&Fa?g.defaultForce3D||"auto":!1},Ha=_gsScope.SVGElement,Ia=function(a,b,c){var d,e=O.createElementNS("http://www.w3.org/2000/svg",a),f=/([a-z])([A-Z])/g;for(d in c)e.setAttributeNS(null,d.replace(f,"$1-$2").toLowerCase(),c[d]);return b.appendChild(e),e},Ja=O.documentElement||{},Ka=function(){var a,b,c,d=p||/Android/i.test(T)&&!_gsScope.chrome;return O.createElementNS&&!d&&(a=Ia("svg",Ja),b=Ia("rect",a,{width:100,height:50,x:100}),c=b.getBoundingClientRect().width,b.style[Ea]="50% 50%",b.style[Ca]="scaleX(0.5)",d=c===b.getBoundingClientRect().width&&!(n&&Fa),Ja.removeChild(a)),d}(),La=function(a,b,c,d,e,f){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=a._gsTransform,w=Qa(a,!0);v&&(t=v.xOrigin,u=v.yOrigin),(!d||(h=d.split(" ")).length<2)&&(n=a.getBBox(),0===n.x&&0===n.y&&n.width+n.height===0&&(n={x:parseFloat(a.hasAttribute("x")?a.getAttribute("x"):a.hasAttribute("cx")?a.getAttribute("cx"):0)||0,y:parseFloat(a.hasAttribute("y")?a.getAttribute("y"):a.hasAttribute("cy")?a.getAttribute("cy"):0)||0,width:0,height:0}),b=ha(b).split(" "),h=[(-1!==b[0].indexOf("%")?parseFloat(b[0])/100*n.width:parseFloat(b[0]))+n.x,(-1!==b[1].indexOf("%")?parseFloat(b[1])/100*n.height:parseFloat(b[1]))+n.y]),c.xOrigin=k=parseFloat(h[0]),c.yOrigin=l=parseFloat(h[1]),d&&w!==Pa&&(m=w[0],n=w[1],o=w[2],p=w[3],q=w[4],r=w[5],s=m*p-n*o,s&&(i=k*(p/s)+l*(-o/s)+(o*r-p*q)/s,j=k*(-n/s)+l*(m/s)-(m*r-n*q)/s,k=c.xOrigin=h[0]=i,l=c.yOrigin=h[1]=j)),v&&(f&&(c.xOffset=v.xOffset,c.yOffset=v.yOffset,v=c),e||e!==!1&&g.defaultSmoothOrigin!==!1?(i=k-t,j=l-u,v.xOffset+=i*w[0]+j*w[2]-i,v.yOffset+=i*w[1]+j*w[3]-j):v.xOffset=v.yOffset=0),f||a.setAttribute("data-svg-origin",h.join(" "))},Ma=function(a){var b,c=P("svg",this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),d=this.parentNode,e=this.nextSibling,f=this.style.cssText;if(Ja.appendChild(c),c.appendChild(this),this.style.display="block",a)try{b=this.getBBox(),this._originalGetBBox=this.getBBox,this.getBBox=Ma}catch(g){}else this._originalGetBBox&&(b=this._originalGetBBox());return e?d.insertBefore(this,e):d.appendChild(this),Ja.removeChild(c),this.style.cssText=f,b},Na=function(a){try{return a.getBBox()}catch(b){return Ma.call(a,!0)}},Oa=function(a){return!(!(Ha&&a.getCTM&&Na(a))||a.parentNode&&!a.ownerSVGElement)},Pa=[1,0,0,1,0,0],Qa=function(a,b){var c,d,e,f,g,h,i=a._gsTransform||new Ga,j=1e5,k=a.style;if(Ca?d=_(a,Da,null,!0):a.currentStyle&&(d=a.currentStyle.filter.match(G),d=d&&4===d.length?[d[0].substr(4),Number(d[2].substr(4)),Number(d[1].substr(4)),d[3].substr(4),i.x||0,i.y||0].join(","):""),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,c&&Ca&&((h="none"===$(a).display)||!a.parentNode)&&(h&&(f=k.display,k.display="block"),a.parentNode||(g=1,Ja.appendChild(a)),d=_(a,Da,null,!0),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,f?k.display=f:h&&Va(k,"display"),g&&Ja.removeChild(a)),(i.svg||a.getCTM&&Oa(a))&&(c&&-1!==(k[Ca]+"").indexOf("matrix")&&(d=k[Ca],c=0),e=a.getAttribute("transform"),c&&e&&(-1!==e.indexOf("matrix")?(d=e,c=0):-1!==e.indexOf("translate")&&(d="matrix(1,0,0,1,"+e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",c=0))),c)return Pa;for(e=(d||"").match(s)||[],wa=e.length;--wa>-1;)f=Number(e[wa]),e[wa]=(g=f-(f|=0))?(g*j+(0>g?-.5:.5)|0)/j+f:f;return b&&e.length>6?[e[0],e[1],e[4],e[5],e[12],e[13]]:e},Ra=S.getTransform=function(a,c,d,e){if(a._gsTransform&&d&&!e)return a._gsTransform;var f,h,i,j,k,l,m=d?a._gsTransform||new Ga:new Ga,n=m.scaleX<0,o=2e-5,p=1e5,q=Fa?parseFloat(_(a,Ea,c,!1,"0 0 0").split(" ")[2])||m.zOrigin||0:0,r=parseFloat(g.defaultTransformPerspective)||0;if(m.svg=!(!a.getCTM||!Oa(a)),m.svg&&(La(a,_(a,Ea,c,!1,"50% 50%")+"",m,a.getAttribute("data-svg-origin")),Aa=g.useSVGTransformAttr||Ka),f=Qa(a),f!==Pa){if(16===f.length){var s,t,u,v,w,x=f[0],y=f[1],z=f[2],A=f[3],B=f[4],C=f[5],D=f[6],E=f[7],F=f[8],G=f[9],H=f[10],I=f[12],J=f[13],K=f[14],M=f[11],N=Math.atan2(D,H);m.zOrigin&&(K=-m.zOrigin,I=F*K-f[12],J=G*K-f[13],K=H*K+m.zOrigin-f[14]),m.rotationX=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=B*v+F*w,t=C*v+G*w,u=D*v+H*w,F=B*-w+F*v,G=C*-w+G*v,H=D*-w+H*v,M=E*-w+M*v,B=s,C=t,D=u),N=Math.atan2(-z,H),m.rotationY=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=x*v-F*w,t=y*v-G*w,u=z*v-H*w,G=y*w+G*v,H=z*w+H*v,M=A*w+M*v,x=s,y=t,z=u),N=Math.atan2(y,x),m.rotation=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),x=x*v+B*w,t=y*v+C*w,C=y*-w+C*v,D=z*-w+D*v,y=t),m.rotationX&&Math.abs(m.rotationX)+Math.abs(m.rotation)>359.9&&(m.rotationX=m.rotation=0,m.rotationY=180-m.rotationY),m.scaleX=(Math.sqrt(x*x+y*y)*p+.5|0)/p,m.scaleY=(Math.sqrt(C*C+G*G)*p+.5|0)/p,m.scaleZ=(Math.sqrt(D*D+H*H)*p+.5|0)/p,m.rotationX||m.rotationY?m.skewX=0:(m.skewX=B||C?Math.atan2(B,C)*L+m.rotation:m.skewX||0,Math.abs(m.skewX)>90&&Math.abs(m.skewX)<270&&(n?(m.scaleX*=-1,m.skewX+=m.rotation<=0?180:-180,m.rotation+=m.rotation<=0?180:-180):(m.scaleY*=-1,m.skewX+=m.skewX<=0?180:-180))),m.perspective=M?1/(0>M?-M:M):0,m.x=I,m.y=J,m.z=K,m.svg&&(m.x-=m.xOrigin-(m.xOrigin*x-m.yOrigin*B),m.y-=m.yOrigin-(m.yOrigin*y-m.xOrigin*C))}else if(!Fa||e||!f.length||m.x!==f[4]||m.y!==f[5]||!m.rotationX&&!m.rotationY){var O=f.length>=6,P=O?f[0]:1,Q=f[1]||0,R=f[2]||0,S=O?f[3]:1;m.x=f[4]||0,m.y=f[5]||0,i=Math.sqrt(P*P+Q*Q),j=Math.sqrt(S*S+R*R),k=P||Q?Math.atan2(Q,P)*L:m.rotation||0,l=R||S?Math.atan2(R,S)*L+k:m.skewX||0,Math.abs(l)>90&&Math.abs(l)<270&&(n?(i*=-1,l+=0>=k?180:-180,k+=0>=k?180:-180):(j*=-1,l+=0>=l?180:-180)),m.scaleX=i,m.scaleY=j,m.rotation=k,m.skewX=l,Fa&&(m.rotationX=m.rotationY=m.z=0,m.perspective=r,m.scaleZ=1),m.svg&&(m.x-=m.xOrigin-(m.xOrigin*P+m.yOrigin*R),m.y-=m.yOrigin-(m.xOrigin*Q+m.yOrigin*S))}m.zOrigin=q;for(h in m)m[h]<o&&m[h]>-o&&(m[h]=0)}return d&&(a._gsTransform=m,m.svg&&(Aa&&a.style[Ca]?b.delayedCall(.001,function(){Va(a.style,Ca)}):!Aa&&a.getAttribute("transform")&&b.delayedCall(.001,function(){a.removeAttribute("transform")}))),m},Sa=function(a){var b,c,d=this.data,e=-d.rotation*K,f=e+d.skewX*K,g=1e5,h=(Math.cos(e)*d.scaleX*g|0)/g,i=(Math.sin(e)*d.scaleX*g|0)/g,j=(Math.sin(f)*-d.scaleY*g|0)/g,k=(Math.cos(f)*d.scaleY*g|0)/g,l=this.t.style,m=this.t.currentStyle;if(m){c=i,i=-j,j=-c,b=m.filter,l.filter="";var n,o,q=this.t.offsetWidth,r=this.t.offsetHeight,s="absolute"!==m.position,t="progid:DXImageTransform.Microsoft.Matrix(M11="+h+", M12="+i+", M21="+j+", M22="+k,u=d.x+q*d.xPercent/100,v=d.y+r*d.yPercent/100;if(null!=d.ox&&(n=(d.oxp?q*d.ox*.01:d.ox)-q/2,o=(d.oyp?r*d.oy*.01:d.oy)-r/2,u+=n-(n*h+o*i),v+=o-(n*j+o*k)),s?(n=q/2,o=r/2,t+=", Dx="+(n-(n*h+o*i)+u)+", Dy="+(o-(n*j+o*k)+v)+")"):t+=", sizingMethod='auto expand')",-1!==b.indexOf("DXImageTransform.Microsoft.Matrix(")?l.filter=b.replace(H,t):l.filter=t+" "+b,(0===a||1===a)&&1===h&&0===i&&0===j&&1===k&&(s&&-1===t.indexOf("Dx=0, Dy=0")||x.test(b)&&100!==parseFloat(RegExp.$1)||-1===b.indexOf(b.indexOf("Alpha"))&&l.removeAttribute("filter")),!s){var y,z,A,B=8>p?1:-1;for(n=d.ieOffsetX||0,o=d.ieOffsetY||0,d.ieOffsetX=Math.round((q-((0>h?-h:h)*q+(0>i?-i:i)*r))/2+u),d.ieOffsetY=Math.round((r-((0>k?-k:k)*r+(0>j?-j:j)*q))/2+v),wa=0;4>wa;wa++)z=fa[wa],y=m[z],c=-1!==y.indexOf("px")?parseFloat(y):aa(this.t,z,parseFloat(y),y.replace(w,""))||0,A=c!==d[z]?2>wa?-d.ieOffsetX:-d.ieOffsetY:2>wa?n-d.ieOffsetX:o-d.ieOffsetY,l[z]=(d[z]=Math.round(c-A*(0===wa||2===wa?1:B)))+"px"}}},Ta=S.set3DTransformRatio=S.setTransformRatio=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,o,p,q,r,s,t,u,v,w,x,y,z=this.data,A=this.t.style,B=z.rotation,C=z.rotationX,D=z.rotationY,E=z.scaleX,F=z.scaleY,G=z.scaleZ,H=z.x,I=z.y,J=z.z,L=z.svg,M=z.perspective,N=z.force3D,O=z.skewY,P=z.skewX;if(O&&(P+=O,B+=O),((1===a||0===a)&&"auto"===N&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!N)&&!J&&!M&&!D&&!C&&1===G||Aa&&L||!Fa)return void(B||P||L?(B*=K,x=P*K,y=1e5,c=Math.cos(B)*E,f=Math.sin(B)*E,d=Math.sin(B-x)*-F,g=Math.cos(B-x)*F,x&&"simple"===z.skewType&&(b=Math.tan(x-O*K),b=Math.sqrt(1+b*b),d*=b,g*=b,O&&(b=Math.tan(O*K),b=Math.sqrt(1+b*b),c*=b,f*=b)),L&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset,Aa&&(z.xPercent||z.yPercent)&&(q=this.t.getBBox(),H+=.01*z.xPercent*q.width,I+=.01*z.yPercent*q.height),q=1e-6,q>H&&H>-q&&(H=0),q>I&&I>-q&&(I=0)),u=(c*y|0)/y+","+(f*y|0)/y+","+(d*y|0)/y+","+(g*y|0)/y+","+H+","+I+")",L&&Aa?this.t.setAttribute("transform","matrix("+u):A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+u):A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+E+",0,0,"+F+","+H+","+I+")");if(n&&(q=1e-4,q>E&&E>-q&&(E=G=2e-5),q>F&&F>-q&&(F=G=2e-5),!M||z.z||z.rotationX||z.rotationY||(M=0)),B||P)B*=K,r=c=Math.cos(B),s=f=Math.sin(B),P&&(B-=P*K,r=Math.cos(B),s=Math.sin(B),"simple"===z.skewType&&(b=Math.tan((P-O)*K),b=Math.sqrt(1+b*b),r*=b,s*=b,z.skewY&&(b=Math.tan(O*K),b=Math.sqrt(1+b*b),c*=b,f*=b))),d=-s,g=r;else{if(!(D||C||1!==G||M||L))return void(A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) translate3d(":"translate3d(")+H+"px,"+I+"px,"+J+"px)"+(1!==E||1!==F?" scale("+E+","+F+")":""));c=g=1,d=f=0}k=1,e=h=i=j=l=m=0,o=M?-1/M:0,p=z.zOrigin,q=1e-6,v=",",w="0",B=D*K,B&&(r=Math.cos(B),s=Math.sin(B),i=-s,l=o*-s,e=c*s,h=f*s,k=r,o*=r,c*=r,f*=r),B=C*K,B&&(r=Math.cos(B),s=Math.sin(B),b=d*r+e*s,t=g*r+h*s,j=k*s,m=o*s,e=d*-s+e*r,h=g*-s+h*r,k*=r,o*=r,d=b,g=t),1!==G&&(e*=G,h*=G,k*=G,o*=G),1!==F&&(d*=F,g*=F,j*=F,m*=F),1!==E&&(c*=E,f*=E,i*=E,l*=E),(p||L)&&(p&&(H+=e*-p,I+=h*-p,J+=k*-p+p),L&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset),q>H&&H>-q&&(H=w),q>I&&I>-q&&(I=w),q>J&&J>-q&&(J=0)),u=z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix3d(":"matrix3d(",u+=(q>c&&c>-q?w:c)+v+(q>f&&f>-q?w:f)+v+(q>i&&i>-q?w:i),u+=v+(q>l&&l>-q?w:l)+v+(q>d&&d>-q?w:d)+v+(q>g&&g>-q?w:g),C||D||1!==G?(u+=v+(q>j&&j>-q?w:j)+v+(q>m&&m>-q?w:m)+v+(q>e&&e>-q?w:e),u+=v+(q>h&&h>-q?w:h)+v+(q>k&&k>-q?w:k)+v+(q>o&&o>-q?w:o)+v):u+=",0,0,0,0,1,0,",u+=H+v+I+v+J+v+(M?1+-J/M:1)+")",A[Ca]=u};j=Ga.prototype,j.x=j.y=j.z=j.skewX=j.skewY=j.rotation=j.rotationX=j.rotationY=j.zOrigin=j.xPercent=j.yPercent=j.xOffset=j.yOffset=0,j.scaleX=j.scaleY=j.scaleZ=1,ya("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(a,b,c,d,f,h,i){if(d._lastParsedTransform===i)return f;d._lastParsedTransform=i;var j,k=i.scale&&"function"==typeof i.scale?i.scale:0;"function"==typeof i[c]&&(j=i[c],i[c]=b),k&&(i.scale=k(r,a));var l,m,n,o,p,s,t,u,v,w=a._gsTransform,x=a.style,y=1e-6,z=Ba.length,A=i,B={},C="transformOrigin",D=Ra(a,e,!0,A.parseTransform),E=A.transform&&("function"==typeof A.transform?A.transform(r,q):A.transform);if(d._transform=D,E&&"string"==typeof E&&Ca)m=Q.style,m[Ca]=E,m.display="block",m.position="absolute",O.body.appendChild(Q),l=Ra(Q,null,!1),D.svg&&(s=D.xOrigin,t=D.yOrigin,l.x-=D.xOffset,l.y-=D.yOffset,(A.transformOrigin||A.svgOrigin)&&(E={},La(a,ha(A.transformOrigin),E,A.svgOrigin,A.smoothOrigin,!0),s=E.xOrigin,t=E.yOrigin,l.x-=E.xOffset-D.xOffset,l.y-=E.yOffset-D.yOffset),(s||t)&&(u=Qa(Q,!0),l.x-=s-(s*u[0]+t*u[2]),l.y-=t-(s*u[1]+t*u[3]))),O.body.removeChild(Q),l.perspective||(l.perspective=D.perspective),null!=A.xPercent&&(l.xPercent=ja(A.xPercent,D.xPercent)),null!=A.yPercent&&(l.yPercent=ja(A.yPercent,D.yPercent));else if("object"==typeof A){if(l={scaleX:ja(null!=A.scaleX?A.scaleX:A.scale,D.scaleX),scaleY:ja(null!=A.scaleY?A.scaleY:A.scale,D.scaleY),scaleZ:ja(A.scaleZ,D.scaleZ),x:ja(A.x,D.x),y:ja(A.y,D.y),z:ja(A.z,D.z),xPercent:ja(A.xPercent,D.xPercent),
yPercent:ja(A.yPercent,D.yPercent),perspective:ja(A.transformPerspective,D.perspective)},p=A.directionalRotation,null!=p)if("object"==typeof p)for(m in p)A[m]=p[m];else A.rotation=p;"string"==typeof A.x&&-1!==A.x.indexOf("%")&&(l.x=0,l.xPercent=ja(A.x,D.xPercent)),"string"==typeof A.y&&-1!==A.y.indexOf("%")&&(l.y=0,l.yPercent=ja(A.y,D.yPercent)),l.rotation=ka("rotation"in A?A.rotation:"shortRotation"in A?A.shortRotation+"_short":"rotationZ"in A?A.rotationZ:D.rotation,D.rotation,"rotation",B),Fa&&(l.rotationX=ka("rotationX"in A?A.rotationX:"shortRotationX"in A?A.shortRotationX+"_short":D.rotationX||0,D.rotationX,"rotationX",B),l.rotationY=ka("rotationY"in A?A.rotationY:"shortRotationY"in A?A.shortRotationY+"_short":D.rotationY||0,D.rotationY,"rotationY",B)),l.skewX=ka(A.skewX,D.skewX),l.skewY=ka(A.skewY,D.skewY)}for(Fa&&null!=A.force3D&&(D.force3D=A.force3D,o=!0),D.skewType=A.skewType||D.skewType||g.defaultSkewType,n=D.force3D||D.z||D.rotationX||D.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,n||null==A.scale||(l.scaleZ=1);--z>-1;)v=Ba[z],E=l[v]-D[v],(E>y||-y>E||null!=A[v]||null!=M[v])&&(o=!0,f=new ta(D,v,D[v],E,f),v in B&&(f.e=B[v]),f.xs0=0,f.plugin=h,d._overwriteProps.push(f.n));return E=A.transformOrigin,D.svg&&(E||A.svgOrigin)&&(s=D.xOffset,t=D.yOffset,La(a,ha(E),l,A.svgOrigin,A.smoothOrigin),f=ua(D,"xOrigin",(w?D:l).xOrigin,l.xOrigin,f,C),f=ua(D,"yOrigin",(w?D:l).yOrigin,l.yOrigin,f,C),(s!==D.xOffset||t!==D.yOffset)&&(f=ua(D,"xOffset",w?s:D.xOffset,D.xOffset,f,C),f=ua(D,"yOffset",w?t:D.yOffset,D.yOffset,f,C)),E="0px 0px"),(E||Fa&&n&&D.zOrigin)&&(Ca?(o=!0,v=Ea,E=(E||_(a,v,e,!1,"50% 50%"))+"",f=new ta(x,v,0,0,f,-1,C),f.b=x[v],f.plugin=h,Fa?(m=D.zOrigin,E=E.split(" "),D.zOrigin=(E.length>2&&(0===m||"0px"!==E[2])?parseFloat(E[2]):m)||0,f.xs0=f.e=E[0]+" "+(E[1]||"50%")+" 0px",f=new ta(D,"zOrigin",0,0,f,-1,f.n),f.b=m,f.xs0=f.e=D.zOrigin):f.xs0=f.e=E):ha(E+"",D)),o&&(d._transformType=D.svg&&Aa||!n&&3!==this._transformType?2:3),j&&(i[c]=j),k&&(i.scale=k),f},prefix:!0}),ya("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),ya("borderRadius",{defaultValue:"0px",parser:function(a,b,c,f,g,h){b=this.format(b);var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],z=a.style;for(q=parseFloat(a.offsetWidth),r=parseFloat(a.offsetHeight),i=b.split(" "),j=0;j<y.length;j++)this.p.indexOf("border")&&(y[j]=Z(y[j])),m=l=_(a,y[j],e,!1,"0px"),-1!==m.indexOf(" ")&&(l=m.split(" "),m=l[0],l=l[1]),n=k=i[j],o=parseFloat(m),t=m.substr((o+"").length),u="="===n.charAt(1),u?(p=parseInt(n.charAt(0)+"1",10),n=n.substr(2),p*=parseFloat(n),s=n.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(n),s=n.substr((p+"").length)),""===s&&(s=d[c]||t),s!==t&&(v=aa(a,"borderLeft",o,t),w=aa(a,"borderTop",o,t),"%"===s?(m=v/q*100+"%",l=w/r*100+"%"):"em"===s?(x=aa(a,"borderLeft",1,"em"),m=v/x+"em",l=w/x+"em"):(m=v+"px",l=w+"px"),u&&(n=parseFloat(m)+p+s,k=parseFloat(l)+p+s)),g=va(z,y[j],m+" "+l,n+" "+k,!1,"0px",g);return g},prefix:!0,formatter:qa("0px 0px 0px 0px",!1,!0)}),ya("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(a,b,c,d,f,g){return va(a.style,c,this.format(_(a,c,e,!1,"0px 0px")),this.format(b),!1,"0px",f)},prefix:!0,formatter:qa("0px 0px",!1,!0)}),ya("backgroundPosition",{defaultValue:"0 0",parser:function(a,b,c,d,f,g){var h,i,j,k,l,m,n="background-position",o=e||$(a,null),q=this.format((o?p?o.getPropertyValue(n+"-x")+" "+o.getPropertyValue(n+"-y"):o.getPropertyValue(n):a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY)||"0 0"),r=this.format(b);if(-1!==q.indexOf("%")!=(-1!==r.indexOf("%"))&&r.split(",").length<2&&(m=_(a,"backgroundImage").replace(D,""),m&&"none"!==m)){for(h=q.split(" "),i=r.split(" "),R.setAttribute("src",m),j=2;--j>-1;)q=h[j],k=-1!==q.indexOf("%"),k!==(-1!==i[j].indexOf("%"))&&(l=0===j?a.offsetWidth-R.width:a.offsetHeight-R.height,h[j]=k?parseFloat(q)/100*l+"px":parseFloat(q)/l*100+"%");q=h.join(" ")}return this.parseComplex(a.style,q,r,f,g)},formatter:ha}),ya("backgroundSize",{defaultValue:"0 0",formatter:function(a){return a+="",ha(-1===a.indexOf(" ")?a+" "+a:a)}}),ya("perspective",{defaultValue:"0px",prefix:!0}),ya("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),ya("transformStyle",{prefix:!0}),ya("backfaceVisibility",{prefix:!0}),ya("userSelect",{prefix:!0}),ya("margin",{parser:ra("marginTop,marginRight,marginBottom,marginLeft")}),ya("padding",{parser:ra("paddingTop,paddingRight,paddingBottom,paddingLeft")}),ya("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(a,b,c,d,f,g){var h,i,j;return 9>p?(i=a.currentStyle,j=8>p?" ":",",h="rect("+i.clipTop+j+i.clipRight+j+i.clipBottom+j+i.clipLeft+")",b=this.format(b).split(",").join(j)):(h=this.format(_(a,this.p,e,!1,this.dflt)),b=this.format(b)),this.parseComplex(a.style,h,b,f,g)}}),ya("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),ya("autoRound,strictUnits",{parser:function(a,b,c,d,e){return e}}),ya("border",{defaultValue:"0px solid #000",parser:function(a,b,c,d,f,g){var h=_(a,"borderTopWidth",e,!1,"0px"),i=this.format(b).split(" "),j=i[0].replace(w,"");return"px"!==j&&(h=parseFloat(h)/aa(a,"borderTopWidth",1,j)+j),this.parseComplex(a.style,this.format(h+" "+_(a,"borderTopStyle",e,!1,"solid")+" "+_(a,"borderTopColor",e,!1,"#000")),i.join(" "),f,g)},color:!0,formatter:function(a){var b=a.split(" ");return b[0]+" "+(b[1]||"solid")+" "+(a.match(pa)||["#000"])[0]}}),ya("borderWidth",{parser:ra("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),ya("float,cssFloat,styleFloat",{parser:function(a,b,c,d,e,f){var g=a.style,h="cssFloat"in g?"cssFloat":"styleFloat";return new ta(g,h,0,0,e,-1,c,!1,0,g[h],b)}});var Ua=function(a){var b,c=this.t,d=c.filter||_(this.data,"filter")||"",e=this.s+this.c*a|0;100===e&&(-1===d.indexOf("atrix(")&&-1===d.indexOf("radient(")&&-1===d.indexOf("oader(")?(c.removeAttribute("filter"),b=!_(this.data,"filter")):(c.filter=d.replace(z,""),b=!0)),b||(this.xn1&&(c.filter=d=d||"alpha(opacity="+e+")"),-1===d.indexOf("pacity")?0===e&&this.xn1||(c.filter=d+" alpha(opacity="+e+")"):c.filter=d.replace(x,"opacity="+e))};ya("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(a,b,c,d,f,g){var h=parseFloat(_(a,"opacity",e,!1,"1")),i=a.style,j="autoAlpha"===c;return"string"==typeof b&&"="===b.charAt(1)&&(b=("-"===b.charAt(0)?-1:1)*parseFloat(b.substr(2))+h),j&&1===h&&"hidden"===_(a,"visibility",e)&&0!==b&&(h=0),U?f=new ta(i,"opacity",h,b-h,f):(f=new ta(i,"opacity",100*h,100*(b-h),f),f.xn1=j?1:0,i.zoom=1,f.type=2,f.b="alpha(opacity="+f.s+")",f.e="alpha(opacity="+(f.s+f.c)+")",f.data=a,f.plugin=g,f.setRatio=Ua),j&&(f=new ta(i,"visibility",0,0,f,-1,null,!1,0,0!==h?"inherit":"hidden",0===b?"hidden":"inherit"),f.xs0="inherit",d._overwriteProps.push(f.n),d._overwriteProps.push(c)),f}});var Va=function(a,b){b&&(a.removeProperty?(("ms"===b.substr(0,2)||"webkit"===b.substr(0,6))&&(b="-"+b),a.removeProperty(b.replace(B,"-$1").toLowerCase())):a.removeAttribute(b))},Wa=function(a){if(this.t._gsClassPT=this,1===a||0===a){this.t.setAttribute("class",0===a?this.b:this.e);for(var b=this.data,c=this.t.style;b;)b.v?c[b.p]=b.v:Va(c,b.p),b=b._next;1===a&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};ya("className",{parser:function(a,b,d,f,g,h,i){var j,k,l,m,n,o=a.getAttribute("class")||"",p=a.style.cssText;if(g=f._classNamePT=new ta(a,d,0,0,g,2),g.setRatio=Wa,g.pr=-11,c=!0,g.b=o,k=ca(a,e),l=a._gsClassPT){for(m={},n=l.data;n;)m[n.p]=1,n=n._next;l.setRatio(1)}return a._gsClassPT=g,g.e="="!==b.charAt(1)?b:o.replace(new RegExp("(?:\\s|^)"+b.substr(2)+"(?![\\w-])"),"")+("+"===b.charAt(0)?" "+b.substr(2):""),a.setAttribute("class",g.e),j=da(a,k,ca(a),i,m),a.setAttribute("class",o),g.data=j.firstMPT,a.style.cssText=p,g=g.xfirst=f.parse(a,j.difs,g,h)}});var Xa=function(a){if((1===a||0===a)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var b,c,d,e,f,g=this.t.style,h=i.transform.parse;if("all"===this.e)g.cssText="",e=!0;else for(b=this.e.split(" ").join("").split(","),d=b.length;--d>-1;)c=b[d],i[c]&&(i[c].parse===h?e=!0:c="transformOrigin"===c?Ea:i[c].p),Va(g,c);e&&(Va(g,Ca),f=this.t._gsTransform,f&&(f.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(ya("clearProps",{parser:function(a,b,d,e,f){return f=new ta(a,d,0,0,f,2),f.setRatio=Xa,f.e=b,f.pr=-10,f.data=e._tween,c=!0,f}}),j="bezier,throwProps,physicsProps,physics2D".split(","),wa=j.length;wa--;)za(j[wa]);j=g.prototype,j._firstPT=j._lastParsedTransform=j._transform=null,j._onInitTween=function(a,b,h,j){if(!a.nodeType)return!1;this._target=q=a,this._tween=h,this._vars=b,r=j,k=b.autoRound,c=!1,d=b.suffixMap||g.suffixMap,e=$(a,""),f=this._overwriteProps;var n,p,s,t,u,v,w,x,z,A=a.style;if(l&&""===A.zIndex&&(n=_(a,"zIndex",e),("auto"===n||""===n)&&this._addLazySet(A,"zIndex",0)),"string"==typeof b&&(t=A.cssText,n=ca(a,e),A.cssText=t+";"+b,n=da(a,n,ca(a)).difs,!U&&y.test(b)&&(n.opacity=parseFloat(RegExp.$1)),b=n,A.cssText=t),b.className?this._firstPT=p=i.className.parse(a,b.className,"className",this,null,null,b):this._firstPT=p=this.parse(a,b,null),this._transformType){for(z=3===this._transformType,Ca?m&&(l=!0,""===A.zIndex&&(w=_(a,"zIndex",e),("auto"===w||""===w)&&this._addLazySet(A,"zIndex",0)),o&&this._addLazySet(A,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(z?"visible":"hidden"))):A.zoom=1,s=p;s&&s._next;)s=s._next;x=new ta(a,"transform",0,0,null,2),this._linkCSSP(x,null,s),x.setRatio=Ca?Ta:Sa,x.data=this._transform||Ra(a,e,!0),x.tween=h,x.pr=-1,f.pop()}if(c){for(;p;){for(v=p._next,s=t;s&&s.pr>p.pr;)s=s._next;(p._prev=s?s._prev:u)?p._prev._next=p:t=p,(p._next=s)?s._prev=p:u=p,p=v}this._firstPT=t}return!0},j.parse=function(a,b,c,f){var g,h,j,l,m,n,o,p,s,t,u=a.style;for(g in b)n=b[g],"function"==typeof n&&(n=n(r,q)),h=i[g],h?c=h.parse(a,n,g,this,c,f,b):(m=_(a,g,e)+"",s="string"==typeof n,"color"===g||"fill"===g||"stroke"===g||-1!==g.indexOf("Color")||s&&A.test(n)?(s||(n=na(n),n=(n.length>3?"rgba(":"rgb(")+n.join(",")+")"),c=va(u,g,m,n,!0,"transparent",c,0,f)):s&&J.test(n)?c=va(u,g,m,n,!0,null,c,0,f):(j=parseFloat(m),o=j||0===j?m.substr((j+"").length):"",(""===m||"auto"===m)&&("width"===g||"height"===g?(j=ga(a,g,e),o="px"):"left"===g||"top"===g?(j=ba(a,g,e),o="px"):(j="opacity"!==g?0:1,o="")),t=s&&"="===n.charAt(1),t?(l=parseInt(n.charAt(0)+"1",10),n=n.substr(2),l*=parseFloat(n),p=n.replace(w,"")):(l=parseFloat(n),p=s?n.replace(w,""):""),""===p&&(p=g in d?d[g]:o),n=l||0===l?(t?l+j:l)+p:b[g],o!==p&&""!==p&&(l||0===l)&&j&&(j=aa(a,g,j,o),"%"===p?(j/=aa(a,g,100,"%")/100,b.strictUnits!==!0&&(m=j+"%")):"em"===p||"rem"===p||"vw"===p||"vh"===p?j/=aa(a,g,1,p):"px"!==p&&(l=aa(a,g,l,p),p="px"),t&&(l||0===l)&&(n=l+j+p)),t&&(l+=j),!j&&0!==j||!l&&0!==l?void 0!==u[g]&&(n||n+""!="NaN"&&null!=n)?(c=new ta(u,g,l||j||0,0,c,-1,g,!1,0,m,n),c.xs0="none"!==n||"display"!==g&&-1===g.indexOf("Style")?n:m):W("invalid "+g+" tween value: "+b[g]):(c=new ta(u,g,j,l-j,c,0,g,k!==!1&&("px"===p||"zIndex"===g),0,m,n),c.xs0=p))),f&&c&&!c.plugin&&(c.plugin=f);return c},j.setRatio=function(a){var b,c,d,e=this._firstPT,f=1e-6;if(1!==a||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(a||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;e;){if(b=e.c*a+e.s,e.r?b=Math.round(b):f>b&&b>-f&&(b=0),e.type)if(1===e.type)if(d=e.l,2===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2;else if(3===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3;else if(4===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4;else if(5===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4+e.xn4+e.xs5;else{for(c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}else-1===e.type?e.t[e.p]=e.xs0:e.setRatio&&e.setRatio(a);else e.t[e.p]=b+e.xs0;e=e._next}else for(;e;)2!==e.type?e.t[e.p]=e.b:e.setRatio(a),e=e._next;else for(;e;){if(2!==e.type)if(e.r&&-1!==e.type)if(b=Math.round(e.s+e.c),e.type){if(1===e.type){for(d=e.l,c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}}else e.t[e.p]=b+e.xs0;else e.t[e.p]=e.e;else e.setRatio(a);e=e._next}},j._enableTransforms=function(a){this._transform=this._transform||Ra(this._target,e,!0),this._transformType=this._transform.svg&&Aa||!a&&3!==this._transformType?2:3};var Ya=function(a){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};j._addLazySet=function(a,b,c){var d=this._firstPT=new ta(a,b,0,0,this._firstPT,2);d.e=c,d.setRatio=Ya,d.data=this},j._linkCSSP=function(a,b,c,d){return a&&(b&&(b._prev=a),a._next&&(a._next._prev=a._prev),a._prev?a._prev._next=a._next:this._firstPT===a&&(this._firstPT=a._next,d=!0),c?c._next=a:d||null!==this._firstPT||(this._firstPT=a),a._next=b,a._prev=c),a},j._mod=function(a){for(var b=this._firstPT;b;)"function"==typeof a[b.p]&&a[b.p]===Math.round&&(b.r=1),b=b._next},j._kill=function(b){var c,d,e,f=b;if(b.autoAlpha||b.alpha){f={};for(d in b)f[d]=b[d];f.opacity=1,f.autoAlpha&&(f.visibility=1)}for(b.className&&(c=this._classNamePT)&&(e=c.xfirst,e&&e._prev?this._linkCSSP(e._prev,c._next,e._prev._prev):e===this._firstPT&&(this._firstPT=c._next),c._next&&this._linkCSSP(c._next,c._next._next,e._prev),this._classNamePT=null),c=this._firstPT;c;)c.plugin&&c.plugin!==d&&c.plugin._kill&&(c.plugin._kill(b),d=c.plugin),c=c._next;return a.prototype._kill.call(this,f)};var Za=function(a,b,c){var d,e,f,g;if(a.slice)for(e=a.length;--e>-1;)Za(a[e],b,c);else for(d=a.childNodes,e=d.length;--e>-1;)f=d[e],g=f.type,f.style&&(b.push(ca(f)),c&&c.push(f)),1!==g&&9!==g&&11!==g||!f.childNodes.length||Za(f,b,c)};return g.cascadeTo=function(a,c,d){var e,f,g,h,i=b.to(a,c,d),j=[i],k=[],l=[],m=[],n=b._internals.reservedProps;for(a=i._targets||i.target,Za(a,k,m),i.render(c,!0,!0),Za(a,l),i.render(0,!0,!0),i._enabled(!0),e=m.length;--e>-1;)if(f=da(m[e],k[e],l[e]),f.firstMPT){f=f.difs;for(g in d)n[g]&&(f[g]=d[g]);h={};for(g in f)h[g]=k[e][g];j.push(b.fromTo(m[e],c,h,f))}return j},a.activate([g]),g},!0),function(){var a=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.6.0",priority:-1,API:2,init:function(a,b,c){return this._tween=c,!0}}),b=function(a){for(;a;)a.f||a.blob||(a.m=Math.round),a=a._next},c=a.prototype;c._onInitAllProps=function(){for(var a,c,d,e=this._tween,f=e.vars.roundProps.join?e.vars.roundProps:e.vars.roundProps.split(","),g=f.length,h={},i=e._propLookup.roundProps;--g>-1;)h[f[g]]=Math.round;for(g=f.length;--g>-1;)for(a=f[g],c=e._firstPT;c;)d=c._next,c.pg?c.t._mod(h):c.n===a&&(2===c.f&&c.t?b(c.t._firstPT):(this._add(c.t,a,c.s,c.c),d&&(d._prev=c._prev),c._prev?c._prev._next=d:e._firstPT===c&&(e._firstPT=d),c._next=c._prev=null,e._propLookup[a]=i)),c=d;return!1},c._add=function(a,b,c,d){this._addTween(a,b,c,c+d,b,Math.round),this._overwriteProps.push(b)}}(),function(){_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.6.0",init:function(a,b,c,d){var e,f;if("function"!=typeof a.setAttribute)return!1;for(e in b)f=b[e],"function"==typeof f&&(f=f(d,a)),this._addTween(a,"setAttribute",a.getAttribute(e)+"",f+"",e,!1,e),this._overwriteProps.push(e);return!0}})}(),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.3.0",API:2,init:function(a,b,c,d){"object"!=typeof b&&(b={rotation:b}),this.finals={};var e,f,g,h,i,j,k=b.useRadians===!0?2*Math.PI:360,l=1e-6;for(e in b)"useRadians"!==e&&(h=b[e],"function"==typeof h&&(h=h(d,a)),j=(h+"").split("_"),f=j[0],g=parseFloat("function"!=typeof a[e]?a[e]:a[e.indexOf("set")||"function"!=typeof a["get"+e.substr(3)]?e:"get"+e.substr(3)]()),h=this.finals[e]="string"==typeof f&&"="===f.charAt(1)?g+parseInt(f.charAt(0)+"1",10)*Number(f.substr(2)):Number(f)||0,i=h-g,j.length&&(f=j.join("_"),-1!==f.indexOf("short")&&(i%=k,i!==i%(k/2)&&(i=0>i?i+k:i-k)),-1!==f.indexOf("_cw")&&0>i?i=(i+9999999999*k)%k-(i/k|0)*k:-1!==f.indexOf("ccw")&&i>0&&(i=(i-9999999999*k)%k-(i/k|0)*k)),(i>l||-l>i)&&(this._addTween(a,e,g,g+i,e),this._overwriteProps.push(e)));return!0},set:function(a){var b;if(1!==a)this._super.setRatio.call(this,a);else for(b=this._firstPT;b;)b.f?b.t[b.p](this.finals[b.p]):b.t[b.p]=this.finals[b.p],b=b._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(a){var b,c,d,e=_gsScope.GreenSockGlobals||_gsScope,f=e.com.greensock,g=2*Math.PI,h=Math.PI/2,i=f._class,j=function(b,c){var d=i("easing."+b,function(){},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,d},k=a.register||function(){},l=function(a,b,c,d,e){var f=i("easing."+a,{easeOut:new b,easeIn:new c,easeInOut:new d},!0);return k(f,a),f},m=function(a,b,c){this.t=a,this.v=b,c&&(this.next=c,c.prev=this,this.c=c.v-b,this.gap=c.t-a)},n=function(b,c){var d=i("easing."+b,function(a){this._p1=a||0===a?a:1.70158,this._p2=1.525*this._p1},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,e.config=function(a){return new d(a)},d},o=l("Back",n("BackOut",function(a){return(a-=1)*a*((this._p1+1)*a+this._p1)+1}),n("BackIn",function(a){return a*a*((this._p1+1)*a-this._p1)}),n("BackInOut",function(a){return(a*=2)<1?.5*a*a*((this._p2+1)*a-this._p2):.5*((a-=2)*a*((this._p2+1)*a+this._p2)+2)})),p=i("easing.SlowMo",function(a,b,c){b=b||0===b?b:.7,null==a?a=.7:a>1&&(a=1),this._p=1!==a?b:0,this._p1=(1-a)/2,this._p2=a,this._p3=this._p1+this._p2,this._calcEnd=c===!0},!0),q=p.prototype=new a;return q.constructor=p,q.getRatio=function(a){var b=a+(.5-a)*this._p;return a<this._p1?this._calcEnd?1-(a=1-a/this._p1)*a:b-(a=1-a/this._p1)*a*a*a*b:a>this._p3?this._calcEnd?1-(a=(a-this._p3)/this._p1)*a:b+(a-b)*(a=(a-this._p3)/this._p1)*a*a*a:this._calcEnd?1:b},p.ease=new p(.7,.7),q.config=p.config=function(a,b,c){return new p(a,b,c)},b=i("easing.SteppedEase",function(a){a=a||1,this._p1=1/a,this._p2=a+1},!0),q=b.prototype=new a,q.constructor=b,q.getRatio=function(a){return 0>a?a=0:a>=1&&(a=.999999999),(this._p2*a>>0)*this._p1},q.config=b.config=function(a){return new b(a)},c=i("easing.RoughEase",function(b){b=b||{};for(var c,d,e,f,g,h,i=b.taper||"none",j=[],k=0,l=0|(b.points||20),n=l,o=b.randomize!==!1,p=b.clamp===!0,q=b.template instanceof a?b.template:null,r="number"==typeof b.strength?.4*b.strength:.4;--n>-1;)c=o?Math.random():1/l*n,d=q?q.getRatio(c):c,"none"===i?e=r:"out"===i?(f=1-c,e=f*f*r):"in"===i?e=c*c*r:.5>c?(f=2*c,e=f*f*.5*r):(f=2*(1-c),e=f*f*.5*r),o?d+=Math.random()*e-.5*e:n%2?d+=.5*e:d-=.5*e,p&&(d>1?d=1:0>d&&(d=0)),j[k++]={x:c,y:d};for(j.sort(function(a,b){return a.x-b.x}),h=new m(1,1,null),n=l;--n>-1;)g=j[n],h=new m(g.x,g.y,h);this._prev=new m(0,0,0!==h.t?h:h.next)},!0),q=c.prototype=new a,q.constructor=c,q.getRatio=function(a){var b=this._prev;if(a>b.t){for(;b.next&&a>=b.t;)b=b.next;b=b.prev}else for(;b.prev&&a<=b.t;)b=b.prev;return this._prev=b,b.v+(a-b.t)/b.gap*b.c},q.config=function(a){return new c(a)},c.ease=new c,l("Bounce",j("BounceOut",function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}),j("BounceIn",function(a){return(a=1-a)<1/2.75?1-7.5625*a*a:2/2.75>a?1-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?1-(7.5625*(a-=2.25/2.75)*a+.9375):1-(7.5625*(a-=2.625/2.75)*a+.984375)}),j("BounceInOut",function(a){var b=.5>a;return a=b?1-2*a:2*a-1,a=1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375,b?.5*(1-a):.5*a+.5})),l("Circ",j("CircOut",function(a){return Math.sqrt(1-(a-=1)*a)}),j("CircIn",function(a){return-(Math.sqrt(1-a*a)-1)}),j("CircInOut",function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)})),d=function(b,c,d){var e=i("easing."+b,function(a,b){this._p1=a>=1?a:1,this._p2=(b||d)/(1>a?a:1),this._p3=this._p2/g*(Math.asin(1/this._p1)||0),this._p2=g/this._p2},!0),f=e.prototype=new a;return f.constructor=e,f.getRatio=c,f.config=function(a,b){return new e(a,b)},e},l("Elastic",d("ElasticOut",function(a){return this._p1*Math.pow(2,-10*a)*Math.sin((a-this._p3)*this._p2)+1},.3),d("ElasticIn",function(a){return-(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2))},.3),d("ElasticInOut",function(a){return(a*=2)<1?-.5*(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(a-=1))*Math.sin((a-this._p3)*this._p2)*.5+1},.45)),l("Expo",j("ExpoOut",function(a){return 1-Math.pow(2,-10*a)}),j("ExpoIn",function(a){return Math.pow(2,10*(a-1))-.001}),j("ExpoInOut",function(a){return(a*=2)<1?.5*Math.pow(2,10*(a-1)):.5*(2-Math.pow(2,-10*(a-1)))})),l("Sine",j("SineOut",function(a){return Math.sin(a*h)}),j("SineIn",function(a){return-Math.cos(a*h)+1}),j("SineInOut",function(a){return-.5*(Math.cos(Math.PI*a)-1)})),i("easing.EaseLookup",{find:function(b){return a.map[b]}},!0),k(e.SlowMo,"SlowMo","ease,"),k(c,"RoughEase","ease,"),k(b,"SteppedEase","ease,"),o},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a,b){"use strict";var c={},d=a.document,e=a.GreenSockGlobals=a.GreenSockGlobals||a;if(!e.TweenLite){var f,g,h,i,j,k=function(a){var b,c=a.split("."),d=e;for(b=0;b<c.length;b++)d[c[b]]=d=d[c[b]]||{};return d},l=k("com.greensock"),m=1e-10,n=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},o=function(){},p=function(){var a=Object.prototype.toString,b=a.call([]);return function(c){return null!=c&&(c instanceof Array||"object"==typeof c&&!!c.push&&a.call(c)===b)}}(),q={},r=function(d,f,g,h){this.sc=q[d]?q[d].sc:[],q[d]=this,this.gsClass=null,this.func=g;var i=[];this.check=function(j){for(var l,m,n,o,p,s=f.length,t=s;--s>-1;)(l=q[f[s]]||new r(f[s],[])).gsClass?(i[s]=l.gsClass,t--):j&&l.sc.push(this);if(0===t&&g){if(m=("com.greensock."+d).split("."),n=m.pop(),o=k(m.join("."))[n]=this.gsClass=g.apply(g,i),h)if(e[n]=c[n]=o,p="undefined"!=typeof module&&module.exports,!p&&"function"==typeof define&&define.amd)define((a.GreenSockAMDPath?a.GreenSockAMDPath+"/":"")+d.split(".").pop(),[],function(){return o});else if(p)if(d===b){module.exports=c[b]=o;for(s in c)o[s]=c[s]}else c[b]&&(c[b][n]=o);for(s=0;s<this.sc.length;s++)this.sc[s].check()}},this.check(!0)},s=a._gsDefine=function(a,b,c,d){return new r(a,b,c,d)},t=l._class=function(a,b,c){return b=b||function(){},s(a,[],function(){return b},c),b};s.globals=e;var u=[0,0,1,1],v=t("easing.Ease",function(a,b,c,d){this._func=a,this._type=c||0,this._power=d||0,this._params=b?u.concat(b):u},!0),w=v.map={},x=v.register=function(a,b,c,d){for(var e,f,g,h,i=b.split(","),j=i.length,k=(c||"easeIn,easeOut,easeInOut").split(",");--j>-1;)for(f=i[j],e=d?t("easing."+f,null,!0):l.easing[f]||{},g=k.length;--g>-1;)h=k[g],w[f+"."+h]=w[h+f]=e[h]=a.getRatio?a:a[h]||new a};for(h=v.prototype,h._calcEnd=!1,h.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1===b?1-a:2===b?a:.5>a?2*a:2*(1-a);return 1===c?d*=d:2===c?d*=d*d:3===c?d*=d*d*d:4===c&&(d*=d*d*d*d),1===b?1-d:2===b?d:.5>a?d/2:1-d/2},f=["Linear","Quad","Cubic","Quart","Quint,Strong"],g=f.length;--g>-1;)h=f[g]+",Power"+g,x(new v(null,null,1,g),h,"easeOut",!0),x(new v(null,null,2,g),h,"easeIn"+(0===g?",easeNone":"")),x(new v(null,null,3,g),h,"easeInOut");w.linear=l.easing.Linear.easeIn,w.swing=l.easing.Quad.easeInOut;var y=t("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this});h=y.prototype,h.addEventListener=function(a,b,c,d,e){e=e||0;var f,g,h=this._listeners[a],k=0;for(this!==i||j||i.wake(),null==h&&(this._listeners[a]=h=[]),g=h.length;--g>-1;)f=h[g],f.c===b&&f.s===c?h.splice(g,1):0===k&&f.pr<e&&(k=g+1);h.splice(k,0,{c:b,s:c,up:d,pr:e})},h.removeEventListener=function(a,b){var c,d=this._listeners[a];if(d)for(c=d.length;--c>-1;)if(d[c].c===b)return void d.splice(c,1)},h.dispatchEvent=function(a){var b,c,d,e=this._listeners[a];if(e)for(b=e.length,b>1&&(e=e.slice(0)),c=this._eventTarget;--b>-1;)d=e[b],d&&(d.up?d.c.call(d.s||c,{type:a,target:c}):d.c.call(d.s||c))};var z=a.requestAnimationFrame,A=a.cancelAnimationFrame,B=Date.now||function(){return(new Date).getTime()},C=B();for(f=["ms","moz","webkit","o"],g=f.length;--g>-1&&!z;)z=a[f[g]+"RequestAnimationFrame"],A=a[f[g]+"CancelAnimationFrame"]||a[f[g]+"CancelRequestAnimationFrame"];t("Ticker",function(a,b){var c,e,f,g,h,k=this,l=B(),n=b!==!1&&z?"auto":!1,p=500,q=33,r="tick",s=function(a){var b,d,i=B()-C;i>p&&(l+=i-q),C+=i,k.time=(C-l)/1e3,b=k.time-h,(!c||b>0||a===!0)&&(k.frame++,h+=b+(b>=g?.004:g-b),d=!0),a!==!0&&(f=e(s)),d&&k.dispatchEvent(r)};y.call(k),k.time=k.frame=0,k.tick=function(){s(!0)},k.lagSmoothing=function(a,b){p=a||1/m,q=Math.min(b,p,0)},k.sleep=function(){null!=f&&(n&&A?A(f):clearTimeout(f),e=o,f=null,k===i&&(j=!1))},k.wake=function(a){null!==f?k.sleep():a?l+=-C+(C=B()):k.frame>10&&(C=B()-p+5),e=0===c?o:n&&z?z:function(a){return setTimeout(a,1e3*(h-k.time)+1|0)},k===i&&(j=!0),s(2)},k.fps=function(a){return arguments.length?(c=a,g=1/(c||60),h=this.time+g,void k.wake()):c},k.useRAF=function(a){return arguments.length?(k.sleep(),n=a,void k.fps(c)):n},k.fps(a),setTimeout(function(){"auto"===n&&k.frame<5&&"hidden"!==d.visibilityState&&k.useRAF(!1)},1500)}),h=l.Ticker.prototype=new l.events.EventDispatcher,h.constructor=l.Ticker;var D=t("core.Animation",function(a,b){if(this.vars=b=b||{},this._duration=this._totalDuration=a||0,this._delay=Number(b.delay)||0,this._timeScale=1,this._active=b.immediateRender===!0,this.data=b.data,this._reversed=b.reversed===!0,W){j||i.wake();var c=this.vars.useFrames?V:W;c.add(this,c._time),this.vars.paused&&this.paused(!0)}});i=D.ticker=new l.Ticker,h=D.prototype,h._dirty=h._gc=h._initted=h._paused=!1,h._totalTime=h._time=0,h._rawPrevTime=-1,h._next=h._last=h._onUpdate=h._timeline=h.timeline=null,h._paused=!1;var E=function(){j&&B()-C>2e3&&i.wake(),setTimeout(E,2e3)};E(),h.play=function(a,b){return null!=a&&this.seek(a,b),this.reversed(!1).paused(!1)},h.pause=function(a,b){return null!=a&&this.seek(a,b),this.paused(!0)},h.resume=function(a,b){return null!=a&&this.seek(a,b),this.paused(!1)},h.seek=function(a,b){return this.totalTime(Number(a),b!==!1)},h.restart=function(a,b){return this.reversed(!1).paused(!1).totalTime(a?-this._delay:0,b!==!1,!0)},h.reverse=function(a,b){return null!=a&&this.seek(a||this.totalDuration(),b),this.reversed(!0).paused(!1)},h.render=function(a,b,c){},h.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},h.isActive=function(){var a,b=this._timeline,c=this._startTime;return!b||!this._gc&&!this._paused&&b.isActive()&&(a=b.rawTime(!0))>=c&&a<c+this.totalDuration()/this._timeScale},h._enabled=function(a,b){return j||i.wake(),this._gc=!a,this._active=this.isActive(),b!==!0&&(a&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!a&&this.timeline&&this._timeline._remove(this,!0)),!1},h._kill=function(a,b){return this._enabled(!1,!1)},h.kill=function(a,b){return this._kill(a,b),this},h._uncache=function(a){for(var b=a?this:this.timeline;b;)b._dirty=!0,b=b.timeline;return this},h._swapSelfInParams=function(a){for(var b=a.length,c=a.concat();--b>-1;)"{self}"===a[b]&&(c[b]=this);return c},h._callback=function(a){var b=this.vars,c=b[a],d=b[a+"Params"],e=b[a+"Scope"]||b.callbackScope||this,f=d?d.length:0;switch(f){case 0:c.call(e);break;case 1:c.call(e,d[0]);break;case 2:c.call(e,d[0],d[1]);break;default:c.apply(e,d)}},h.eventCallback=function(a,b,c,d){if("on"===(a||"").substr(0,2)){var e=this.vars;if(1===arguments.length)return e[a];null==b?delete e[a]:(e[a]=b,e[a+"Params"]=p(c)&&-1!==c.join("").indexOf("{self}")?this._swapSelfInParams(c):c,e[a+"Scope"]=d),"onUpdate"===a&&(this._onUpdate=b)}return this},h.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay},h.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)},h.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration},h.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(a>this._duration?this._duration:a,b)):this._time},h.totalTime=function(a,b,c){if(j||i.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>a&&!c&&(a+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var d=this._totalDuration,e=this._timeline;if(a>d&&!c&&(a=d),this._startTime=(this._paused?this._pauseTime:e._time)-(this._reversed?d-a:a)/this._timeScale,e._dirty||this._uncache(!1),e._timeline)for(;e._timeline;)e._timeline._time!==(e._startTime+e._totalTime)/e._timeScale&&e.totalTime(e._totalTime,!0),e=e._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==a||0===this._duration)&&(J.length&&Y(),this.render(a,b,!1),J.length&&Y())}return this},h.progress=h.totalProgress=function(a,b){var c=this.duration();return arguments.length?this.totalTime(c*a,b):c?this._time/c:this.ratio},h.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime},h.endTime=function(a){return this._startTime+(0!=a?this.totalDuration():this.duration())/this._timeScale},h.timeScale=function(a){if(!arguments.length)return this._timeScale;if(a=a||m,this._timeline&&this._timeline.smoothChildTiming){var b=this._pauseTime,c=b||0===b?b:this._timeline.totalTime();this._startTime=c-(c-this._startTime)*this._timeScale/a}return this._timeScale=a,this._uncache(!1)},h.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},h.paused=function(a){if(!arguments.length)return this._paused;var b,c,d=this._timeline;return a!=this._paused&&d&&(j||a||i.wake(),b=d.rawTime(),c=b-this._pauseTime,!a&&d.smoothChildTiming&&(this._startTime+=c,this._uncache(!1)),this._pauseTime=a?b:null,this._paused=a,this._active=this.isActive(),!a&&0!==c&&this._initted&&this.duration()&&(b=d.smoothChildTiming?this._totalTime:(b-this._startTime)/this._timeScale,this.render(b,b===this._totalTime,!0))),this._gc&&!a&&this._enabled(!0,!1),this};var F=t("core.SimpleTimeline",function(a){D.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0});h=F.prototype=new D,h.constructor=F,h.kill()._gc=!1,h._first=h._last=h._recent=null,h._sortChildren=!1,h.add=h.insert=function(a,b,c,d){var e,f;if(a._startTime=Number(b||0)+a._delay,a._paused&&this!==a._timeline&&(a._pauseTime=a._startTime+(this.rawTime()-a._startTime)/a._timeScale),a.timeline&&a.timeline._remove(a,!0),a.timeline=a._timeline=this,a._gc&&a._enabled(!0,!0),e=this._last,this._sortChildren)for(f=a._startTime;e&&e._startTime>f;)e=e._prev;return e?(a._next=e._next,e._next=a):(a._next=this._first,this._first=a),a._next?a._next._prev=a:this._last=a,a._prev=e,this._recent=a,this._timeline&&this._uncache(!0),this},h._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),a._next=a._prev=a.timeline=null,a===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},h.render=function(a,b,c){var d,e=this._first;for(this._totalTime=this._time=this._rawPrevTime=a;e;)d=e._next,(e._active||a>=e._startTime&&!e._paused)&&(e._reversed?e.render((e._dirty?e.totalDuration():e._totalDuration)-(a-e._startTime)*e._timeScale,b,c):e.render((a-e._startTime)*e._timeScale,b,c)),e=d},h.rawTime=function(){return j||i.wake(),this._totalTime};var G=t("TweenLite",function(b,c,d){
if(D.call(this,c,d),this.render=G.prototype.render,null==b)throw"Cannot tween a null target.";this.target=b="string"!=typeof b?b:G.selector(b)||b;var e,f,g,h=b.jquery||b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType),i=this.vars.overwrite;if(this._overwrite=i=null==i?U[G.defaultOverwrite]:"number"==typeof i?i>>0:U[i],(h||b instanceof Array||b.push&&p(b))&&"number"!=typeof b[0])for(this._targets=g=n(b),this._propLookup=[],this._siblings=[],e=0;e<g.length;e++)f=g[e],f?"string"!=typeof f?f.length&&f!==a&&f[0]&&(f[0]===a||f[0].nodeType&&f[0].style&&!f.nodeType)?(g.splice(e--,1),this._targets=g=g.concat(n(f))):(this._siblings[e]=Z(f,this,!1),1===i&&this._siblings[e].length>1&&_(f,this,null,1,this._siblings[e])):(f=g[e--]=G.selector(f),"string"==typeof f&&g.splice(e+1,1)):g.splice(e--,1);else this._propLookup={},this._siblings=Z(b,this,!1),1===i&&this._siblings.length>1&&_(b,this,null,1,this._siblings);(this.vars.immediateRender||0===c&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-m,this.render(Math.min(0,-this._delay)))},!0),H=function(b){return b&&b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType)},I=function(a,b){var c,d={};for(c in a)T[c]||c in b&&"transform"!==c&&"x"!==c&&"y"!==c&&"width"!==c&&"height"!==c&&"className"!==c&&"border"!==c||!(!Q[c]||Q[c]&&Q[c]._autoCSS)||(d[c]=a[c],delete a[c]);a.css=d};h=G.prototype=new D,h.constructor=G,h.kill()._gc=!1,h.ratio=0,h._firstPT=h._targets=h._overwrittenProps=h._startAt=null,h._notifyPluginsOfEnabled=h._lazy=!1,G.version="1.19.1",G.defaultEase=h._ease=new v(null,null,1,1),G.defaultOverwrite="auto",G.ticker=i,G.autoSleep=120,G.lagSmoothing=function(a,b){i.lagSmoothing(a,b)},G.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(G.selector=c,c(b)):"undefined"==typeof d?b:d.querySelectorAll?d.querySelectorAll(b):d.getElementById("#"===b.charAt(0)?b.substr(1):b)};var J=[],K={},L=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,M=function(a){for(var b,c=this._firstPT,d=1e-6;c;)b=c.blob?1===a?this.end:a?this.join(""):this.start:c.c*a+c.s,c.m?b=c.m(b,this._target||c.t):d>b&&b>-d&&!c.blob&&(b=0),c.f?c.fp?c.t[c.p](c.fp,b):c.t[c.p](b):c.t[c.p]=b,c=c._next},N=function(a,b,c,d){var e,f,g,h,i,j,k,l=[],m=0,n="",o=0;for(l.start=a,l.end=b,a=l[0]=a+"",b=l[1]=b+"",c&&(c(l),a=l[0],b=l[1]),l.length=0,e=a.match(L)||[],f=b.match(L)||[],d&&(d._next=null,d.blob=1,l._firstPT=l._applyPT=d),i=f.length,h=0;i>h;h++)k=f[h],j=b.substr(m,b.indexOf(k,m)-m),n+=j||!h?j:",",m+=j.length,o?o=(o+1)%5:"rgba("===j.substr(-5)&&(o=1),k===e[h]||e.length<=h?n+=k:(n&&(l.push(n),n=""),g=parseFloat(e[h]),l.push(g),l._firstPT={_next:l._firstPT,t:l,p:l.length-1,s:g,c:("="===k.charAt(1)?parseInt(k.charAt(0)+"1",10)*parseFloat(k.substr(2)):parseFloat(k)-g)||0,f:0,m:o&&4>o?Math.round:0}),m+=k.length;return n+=b.substr(m),n&&l.push(n),l.setRatio=M,l},O=function(a,b,c,d,e,f,g,h,i){"function"==typeof d&&(d=d(i||0,a));var j,k=typeof a[b],l="function"!==k?"":b.indexOf("set")||"function"!=typeof a["get"+b.substr(3)]?b:"get"+b.substr(3),m="get"!==c?c:l?g?a[l](g):a[l]():a[b],n="string"==typeof d&&"="===d.charAt(1),o={t:a,p:b,s:m,f:"function"===k,pg:0,n:e||b,m:f?"function"==typeof f?f:Math.round:0,pr:0,c:n?parseInt(d.charAt(0)+"1",10)*parseFloat(d.substr(2)):parseFloat(d)-m||0};return("number"!=typeof m||"number"!=typeof d&&!n)&&(g||isNaN(m)||!n&&isNaN(d)||"boolean"==typeof m||"boolean"==typeof d?(o.fp=g,j=N(m,n?o.s+o.c:d,h||G.defaultStringFilter,o),o={t:j,p:"setRatio",s:0,c:1,f:2,pg:0,n:e||b,pr:0,m:0}):(o.s=parseFloat(m),n||(o.c=parseFloat(d)-o.s||0))),o.c?((o._next=this._firstPT)&&(o._next._prev=o),this._firstPT=o,o):void 0},P=G._internals={isArray:p,isSelector:H,lazyTweens:J,blobDif:N},Q=G._plugins={},R=P.tweenLookup={},S=0,T=P.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1},U={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},V=D._rootFramesTimeline=new F,W=D._rootTimeline=new F,X=30,Y=P.lazyRender=function(){var a,b=J.length;for(K={};--b>-1;)a=J[b],a&&a._lazy!==!1&&(a.render(a._lazy[0],a._lazy[1],!0),a._lazy=!1);J.length=0};W._startTime=i.time,V._startTime=i.frame,W._active=V._active=!0,setTimeout(Y,1),D._updateRoot=G.render=function(){var a,b,c;if(J.length&&Y(),W.render((i.time-W._startTime)*W._timeScale,!1,!1),V.render((i.frame-V._startTime)*V._timeScale,!1,!1),J.length&&Y(),i.frame>=X){X=i.frame+(parseInt(G.autoSleep,10)||120);for(c in R){for(b=R[c].tweens,a=b.length;--a>-1;)b[a]._gc&&b.splice(a,1);0===b.length&&delete R[c]}if(c=W._first,(!c||c._paused)&&G.autoSleep&&!V._first&&1===i._listeners.tick.length){for(;c&&c._paused;)c=c._next;c||i.sleep()}}},i.addEventListener("tick",D._updateRoot);var Z=function(a,b,c){var d,e,f=a._gsTweenID;if(R[f||(a._gsTweenID=f="t"+S++)]||(R[f]={target:a,tweens:[]}),b&&(d=R[f].tweens,d[e=d.length]=b,c))for(;--e>-1;)d[e]===b&&d.splice(e,1);return R[f].tweens},$=function(a,b,c,d){var e,f,g=a.vars.onOverwrite;return g&&(e=g(a,b,c,d)),g=G.onOverwrite,g&&(f=g(a,b,c,d)),e!==!1&&f!==!1},_=function(a,b,c,d,e){var f,g,h,i;if(1===d||d>=4){for(i=e.length,f=0;i>f;f++)if((h=e[f])!==b)h._gc||h._kill(null,a,b)&&(g=!0);else if(5===d)break;return g}var j,k=b._startTime+m,l=[],n=0,o=0===b._duration;for(f=e.length;--f>-1;)(h=e[f])===b||h._gc||h._paused||(h._timeline!==b._timeline?(j=j||aa(b,0,o),0===aa(h,j,o)&&(l[n++]=h)):h._startTime<=k&&h._startTime+h.totalDuration()/h._timeScale>k&&((o||!h._initted)&&k-h._startTime<=2e-10||(l[n++]=h)));for(f=n;--f>-1;)if(h=l[f],2===d&&h._kill(c,a,b)&&(g=!0),2!==d||!h._firstPT&&h._initted){if(2!==d&&!$(h,b))continue;h._enabled(!1,!1)&&(g=!0)}return g},aa=function(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;){if(f+=d._startTime,e*=d._timeScale,d._paused)return-100;d=d._timeline}return f/=e,f>b?f-b:c&&f===b||!a._initted&&2*m>f-b?m:(f+=a.totalDuration()/a._timeScale/e)>b+m?0:f-b-m};h._init=function(){var a,b,c,d,e,f,g=this.vars,h=this._overwrittenProps,i=this._duration,j=!!g.immediateRender,k=g.ease;if(g.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),e={};for(d in g.startAt)e[d]=g.startAt[d];if(e.overwrite=!1,e.immediateRender=!0,e.lazy=j&&g.lazy!==!1,e.startAt=e.delay=null,this._startAt=G.to(this.target,0,e),j)if(this._time>0)this._startAt=null;else if(0!==i)return}else if(g.runBackwards&&0!==i)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(j=!1),c={};for(d in g)T[d]&&"autoCSS"!==d||(c[d]=g[d]);if(c.overwrite=0,c.data="isFromStart",c.lazy=j&&g.lazy!==!1,c.immediateRender=j,this._startAt=G.to(this.target,0,c),j){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=k=k?k instanceof v?k:"function"==typeof k?new v(k,g.easeParams):w[k]||G.defaultEase:G.defaultEase,g.easeParams instanceof Array&&k.config&&(this._ease=k.config.apply(k,g.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(f=this._targets.length,a=0;f>a;a++)this._initProps(this._targets[a],this._propLookup[a]={},this._siblings[a],h?h[a]:null,a)&&(b=!0);else b=this._initProps(this.target,this._propLookup,this._siblings,h,0);if(b&&G._onPluginEvent("_onInitAllProps",this),h&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),g.runBackwards)for(c=this._firstPT;c;)c.s+=c.c,c.c=-c.c,c=c._next;this._onUpdate=g.onUpdate,this._initted=!0},h._initProps=function(b,c,d,e,f){var g,h,i,j,k,l;if(null==b)return!1;K[b._gsTweenID]&&Y(),this.vars.css||b.style&&b!==a&&b.nodeType&&Q.css&&this.vars.autoCSS!==!1&&I(this.vars,b);for(g in this.vars)if(l=this.vars[g],T[g])l&&(l instanceof Array||l.push&&p(l))&&-1!==l.join("").indexOf("{self}")&&(this.vars[g]=l=this._swapSelfInParams(l,this));else if(Q[g]&&(j=new Q[g])._onInitTween(b,this.vars[g],this,f)){for(this._firstPT=k={_next:this._firstPT,t:j,p:"setRatio",s:0,c:1,f:1,n:g,pg:1,pr:j._priority,m:0},h=j._overwriteProps.length;--h>-1;)c[j._overwriteProps[h]]=this._firstPT;(j._priority||j._onInitAllProps)&&(i=!0),(j._onDisable||j._onEnable)&&(this._notifyPluginsOfEnabled=!0),k._next&&(k._next._prev=k)}else c[g]=O.call(this,b,g,"get",l,g,0,null,this.vars.stringFilter,f);return e&&this._kill(e,b)?this._initProps(b,c,d,e,f):this._overwrite>1&&this._firstPT&&d.length>1&&_(b,this,c,this._overwrite,d)?(this._kill(c,b),this._initProps(b,c,d,e,f)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(K[b._gsTweenID]=!0),i)},h.render=function(a,b,c){var d,e,f,g,h=this._time,i=this._duration,j=this._rawPrevTime;if(a>=i-1e-7&&a>=0)this._totalTime=this._time=i,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(d=!0,e="onComplete",c=c||this._timeline.autoRemoveChildren),0===i&&(this._initted||!this.vars.lazy||c)&&(this._startTime===this._timeline._duration&&(a=0),(0>j||0>=a&&a>=-1e-7||j===m&&"isPause"!==this.data)&&j!==a&&(c=!0,j>m&&(e="onReverseComplete")),this._rawPrevTime=g=!b||a||j===a?a:m);else if(1e-7>a)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==h||0===i&&j>0)&&(e="onReverseComplete",d=this._reversed),0>a&&(this._active=!1,0===i&&(this._initted||!this.vars.lazy||c)&&(j>=0&&(j!==m||"isPause"!==this.data)&&(c=!0),this._rawPrevTime=g=!b||a||j===a?a:m)),this._initted||(c=!0);else if(this._totalTime=this._time=a,this._easeType){var k=a/i,l=this._easeType,n=this._easePower;(1===l||3===l&&k>=.5)&&(k=1-k),3===l&&(k*=2),1===n?k*=k:2===n?k*=k*k:3===n?k*=k*k*k:4===n&&(k*=k*k*k*k),1===l?this.ratio=1-k:2===l?this.ratio=k:.5>a/i?this.ratio=k/2:this.ratio=1-k/2}else this.ratio=this._ease.getRatio(a/i);if(this._time!==h||c){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!c&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=h,this._rawPrevTime=j,J.push(this),void(this._lazy=[a,b]);this._time&&!d?this.ratio=this._ease.getRatio(this._time/i):d&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==h&&a>=0&&(this._active=!0),0===h&&(this._startAt&&(a>=0?this._startAt.render(a,b,c):e||(e="_dummyGS")),this.vars.onStart&&(0!==this._time||0===i)&&(b||this._callback("onStart"))),f=this._firstPT;f;)f.f?f.t[f.p](f.c*this.ratio+f.s):f.t[f.p]=f.c*this.ratio+f.s,f=f._next;this._onUpdate&&(0>a&&this._startAt&&a!==-1e-4&&this._startAt.render(a,b,c),b||(this._time!==h||d||c)&&this._callback("onUpdate")),e&&(!this._gc||c)&&(0>a&&this._startAt&&!this._onUpdate&&a!==-1e-4&&this._startAt.render(a,b,c),d&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[e]&&this._callback(e),0===i&&this._rawPrevTime===m&&g!==m&&(this._rawPrevTime=0))}},h._kill=function(a,b,c){if("all"===a&&(a=null),null==a&&(null==b||b===this.target))return this._lazy=!1,this._enabled(!1,!1);b="string"!=typeof b?b||this._targets||this.target:G.selector(b)||b;var d,e,f,g,h,i,j,k,l,m=c&&this._time&&c._startTime===this._startTime&&this._timeline===c._timeline;if((p(b)||H(b))&&"number"!=typeof b[0])for(d=b.length;--d>-1;)this._kill(a,b[d],c)&&(i=!0);else{if(this._targets){for(d=this._targets.length;--d>-1;)if(b===this._targets[d]){h=this._propLookup[d]||{},this._overwrittenProps=this._overwrittenProps||[],e=this._overwrittenProps[d]=a?this._overwrittenProps[d]||{}:"all";break}}else{if(b!==this.target)return!1;h=this._propLookup,e=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(h){if(j=a||h,k=a!==e&&"all"!==e&&a!==h&&("object"!=typeof a||!a._tempKill),c&&(G.onOverwrite||this.vars.onOverwrite)){for(f in j)h[f]&&(l||(l=[]),l.push(f));if((l||!a)&&!$(this,c,b,l))return!1}for(f in j)(g=h[f])&&(m&&(g.f?g.t[g.p](g.s):g.t[g.p]=g.s,i=!0),g.pg&&g.t._kill(j)&&(i=!0),g.pg&&0!==g.t._overwriteProps.length||(g._prev?g._prev._next=g._next:g===this._firstPT&&(this._firstPT=g._next),g._next&&(g._next._prev=g._prev),g._next=g._prev=null),delete h[f]),k&&(e[f]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return i},h.invalidate=function(){return this._notifyPluginsOfEnabled&&G._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],D.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-m,this.render(Math.min(0,-this._delay))),this},h._enabled=function(a,b){if(j||i.wake(),a&&this._gc){var c,d=this._targets;if(d)for(c=d.length;--c>-1;)this._siblings[c]=Z(d[c],this,!0);else this._siblings=Z(this.target,this,!0)}return D.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled&&this._firstPT?G._onPluginEvent(a?"_onEnable":"_onDisable",this):!1},G.to=function(a,b,c){return new G(a,b,c)},G.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new G(a,b,c)},G.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new G(a,b,d)},G.delayedCall=function(a,b,c,d,e){return new G(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,lazy:!1,useFrames:e,overwrite:0})},G.set=function(a,b){return new G(a,0,b)},G.getTweensOf=function(a,b){if(null==a)return[];a="string"!=typeof a?a:G.selector(a)||a;var c,d,e,f;if((p(a)||H(a))&&"number"!=typeof a[0]){for(c=a.length,d=[];--c>-1;)d=d.concat(G.getTweensOf(a[c],b));for(c=d.length;--c>-1;)for(f=d[c],e=c;--e>-1;)f===d[e]&&d.splice(c,1)}else for(d=Z(a).concat(),c=d.length;--c>-1;)(d[c]._gc||b&&!d[c].isActive())&&d.splice(c,1);return d},G.killTweensOf=G.killDelayedCallsTo=function(a,b,c){"object"==typeof b&&(c=b,b=!1);for(var d=G.getTweensOf(a,b),e=d.length;--e>-1;)d[e]._kill(c,a)};var ba=t("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0,this._super=ba.prototype},!0);if(h=ba.prototype,ba.version="1.19.0",ba.API=2,h._firstPT=null,h._addTween=O,h.setRatio=M,h._kill=function(a){var b,c=this._overwriteProps,d=this._firstPT;if(null!=a[this._propName])this._overwriteProps=[];else for(b=c.length;--b>-1;)null!=a[c[b]]&&c.splice(b,1);for(;d;)null!=a[d.n]&&(d._next&&(d._next._prev=d._prev),d._prev?(d._prev._next=d._next,d._prev=null):this._firstPT===d&&(this._firstPT=d._next)),d=d._next;return!1},h._mod=h._roundProps=function(a){for(var b,c=this._firstPT;c;)b=a[this._propName]||null!=c.n&&a[c.n.split(this._propName+"_").join("")],b&&"function"==typeof b&&(2===c.f?c.t._applyPT.m=b:c.m=b),c=c._next},G._onPluginEvent=function(a,b){var c,d,e,f,g,h=b._firstPT;if("_onInitAllProps"===a){for(;h;){for(g=h._next,d=e;d&&d.pr>h.pr;)d=d._next;(h._prev=d?d._prev:f)?h._prev._next=h:e=h,(h._next=d)?d._prev=h:f=h,h=g}h=b._firstPT=e}for(;h;)h.pg&&"function"==typeof h.t[a]&&h.t[a]()&&(c=!0),h=h._next;return c},ba.activate=function(a){for(var b=a.length;--b>-1;)a[b].API===ba.API&&(Q[(new a[b])._propName]=a[b]);return!0},s.plugin=function(a){if(!(a&&a.propName&&a.init&&a.API))throw"illegal plugin definition.";var b,c=a.propName,d=a.priority||0,e=a.overwriteProps,f={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},g=t("plugins."+c.charAt(0).toUpperCase()+c.substr(1)+"Plugin",function(){ba.call(this,c,d),this._overwriteProps=e||[]},a.global===!0),h=g.prototype=new ba(c);h.constructor=g,g.API=a.API;for(b in f)"function"==typeof a[b]&&(h[f[b]]=a[b]);return g.version=a.version,ba.activate([g]),g},f=a._gsQueue){for(g=0;g<f.length;g++)f[g]();for(h in q)q[h].func||a.console.log("GSAP encountered missing dependency: "+h)}j=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");
/*!
 * VERSION: 0.1.2
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * DrawSVGPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";function a(a,b,c,d,e,f){return c=(parseFloat(c)-parseFloat(a))*e,d=(parseFloat(d)-parseFloat(b))*f,Math.sqrt(c*c+d*d)}function b(a){return"string"!=typeof a&&a.nodeType||(a=_gsScope.TweenLite.selector(a),a.length&&(a=a[0])),a}function c(a,b,c){var d,e,f=a.indexOf(" ");return-1===f?(d=void 0!==c?c+"":a,e=a):(d=a.substr(0,f),e=a.substr(f+1)),d=-1!==d.indexOf("%")?parseFloat(d)/100*b:parseFloat(d),e=-1!==e.indexOf("%")?parseFloat(e)/100*b:parseFloat(e),d>e?[e,d]:[d,e]}function d(c){if(!c)return 0;c=b(c);var d,e,f,g,h,j,k,l=c.tagName.toLowerCase(),m=1,n=1;"non-scaling-stroke"===c.getAttribute("vector-effect")&&(n=c.getScreenCTM(),m=n.a,n=n.d);try{e=c.getBBox()}catch(o){}if(e&&(e.width||e.height)||"rect"!==l&&"circle"!==l&&"ellipse"!==l||(e={width:parseFloat(c.getAttribute("rect"===l?"width":"circle"===l?"r":"rx")),height:parseFloat(c.getAttribute("rect"===l?"height":"circle"===l?"r":"ry"))},"rect"!==l&&(e.width*=2,e.height*=2)),"path"===l)g=c.style.strokeDasharray,c.style.strokeDasharray="none",d=c.getTotalLength()||0,m!==n&&console.log("Warning: <path> length cannot be measured accurately when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),d*=(m+n)/2,c.style.strokeDasharray=g;else if("rect"===l)d=2*e.width*m+2*e.height*n;else if("line"===l)d=a(c.getAttribute("x1"),c.getAttribute("y1"),c.getAttribute("x2"),c.getAttribute("y2"),m,n);else if("polyline"===l||"polygon"===l)for(f=c.getAttribute("points").match(i)||[],"polygon"===l&&f.push(f[0],f[1]),d=0,h=2;h<f.length;h+=2)d+=a(f[h-2],f[h-1],f[h],f[h+1],m,n)||0;else("circle"===l||"ellipse"===l)&&(j=e.width/2*m,k=e.height/2*n,d=Math.PI*(3*(j+k)-Math.sqrt((3*j+k)*(j+3*k))));return d||0}function e(a,c){if(!a)return[0,0];a=b(a),c=c||d(a)+1;var e=h(a),f=e.strokeDasharray||"",g=parseFloat(e.strokeDashoffset),i=f.indexOf(",");return 0>i&&(i=f.indexOf(" ")),f=0>i?c:parseFloat(f.substr(0,i))||1e-5,f>c&&(f=c),[Math.max(0,-g),Math.max(0,f-g)]}var f,g=_gsScope.document,h=g.defaultView?g.defaultView.getComputedStyle:function(){},i=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi;f=_gsScope._gsDefine.plugin({propName:"drawSVG",API:2,version:"0.1.1",global:!0,overwriteProps:["drawSVG"],init:function(a,b,f,g){if(!a.getBBox)return!1;var h,i,j,k=d(a)+1;return this._style=a.style,"function"==typeof b&&(b=b(g,a)),b===!0||"true"===b?b="0 100%":b?-1===(b+"").indexOf(" ")&&(b="0 "+b):b="0 0",h=e(a,k),i=c(b,k,h[0]),this._length=k+10,0===h[0]&&0===i[0]?(j=Math.max(1e-5,i[1]-k),this._dash=k+j,this._offset=k-h[1]+j,this._addTween(this,"_offset",this._offset,k-i[1]+j,"drawSVG")):(this._dash=h[1]-h[0]||1e-6,this._offset=-h[0],this._addTween(this,"_dash",this._dash,i[1]-i[0]||1e-5,"drawSVG"),this._addTween(this,"_offset",this._offset,-i[0],"drawSVG")),!0},set:function(a){this._firstPT&&(this._super.setRatio.call(this,a),this._style.strokeDashoffset=this._offset,1===a||0===a?this._style.strokeDasharray=this._offset<.001&&this._length-this._dash<=10?"none":this._offset===this._dash?"0px, 999999px":this._dash+"px,"+this._length+"px":this._style.strokeDasharray=this._dash+"px,"+this._length+"px")}}),f.getLength=d,f.getPosition=e}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"function"==typeof define&&define.amd?define(["TweenLite"],b):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=b())}("DrawSVGPlugin");
/*!
 * VERSION: 0.8.8
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * MorphSVGPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var a=Math.PI/180,b=180/Math.PI,c=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,d=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,e=/(^[#\.]|[a-y][a-z])/gi,f=/[achlmqstvz]/gi,g=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,h=_gsScope._gsDefine.globals.TweenLite,i=function(a){_gsScope.console&&console.log(a)},j=function(b,c){var d,e,f,g,h,i,j=Math.ceil(Math.abs(c)/90),k=0,l=[];for(b*=a,c*=a,d=c/j,e=4/3*Math.sin(d/2)/(1+Math.cos(d/2)),i=0;j>i;i++)f=b+i*d,g=Math.cos(f),h=Math.sin(f),l[k++]=g-e*h,l[k++]=h+e*g,f+=d,g=Math.cos(f),h=Math.sin(f),l[k++]=g+e*h,l[k++]=h-e*g,l[k++]=g,l[k++]=h;return l},k=function(c,d,e,f,g,h,i,k,l){if(c!==k||d!==l){e=Math.abs(e),f=Math.abs(f);var m=g%360*a,n=Math.cos(m),o=Math.sin(m),p=(c-k)/2,q=(d-l)/2,r=n*p+o*q,s=-o*p+n*q,t=e*e,u=f*f,v=r*r,w=s*s,x=v/t+w/u;x>1&&(e=Math.sqrt(x)*e,f=Math.sqrt(x)*f,t=e*e,u=f*f);var y=h===i?-1:1,z=(t*u-t*w-u*v)/(t*w+u*v);0>z&&(z=0);var A=y*Math.sqrt(z),B=A*(e*s/f),C=A*-(f*r/e),D=(c+k)/2,E=(d+l)/2,F=D+(n*B-o*C),G=E+(o*B+n*C),H=(r-B)/e,I=(s-C)/f,J=(-r-B)/e,K=(-s-C)/f,L=Math.sqrt(H*H+I*I),M=H;y=0>I?-1:1;var N=y*Math.acos(M/L)*b;L=Math.sqrt((H*H+I*I)*(J*J+K*K)),M=H*J+I*K,y=0>H*K-I*J?-1:1;var O=y*Math.acos(M/L)*b;!i&&O>0?O-=360:i&&0>O&&(O+=360),O%=360,N%=360;var P,Q,R,S=j(N,O),T=n*e,U=o*e,V=o*-f,W=n*f,X=S.length-2;for(P=0;X>P;P+=2)Q=S[P],R=S[P+1],S[P]=Q*T+R*V+F,S[P+1]=Q*U+R*W+G;return S[S.length-2]=k,S[S.length-1]=l,S}},l=function(a){var b,d,e,f,h,j,l,m,n,o,p,q,r,s=(a+"").replace(g,function(a){var b=+a;return 1e-4>b&&b>-1e-4?0:b}).match(c)||[],t=[],u=0,v=0,w=s.length,x=2,y=0;if(!a||!isNaN(s[0])||isNaN(s[1]))return i("ERROR: malformed path data: "+a),t;for(b=0;w>b;b++)if(r=h,isNaN(s[b])?(h=s[b].toUpperCase(),j=h!==s[b]):b--,e=+s[b+1],f=+s[b+2],j&&(e+=u,f+=v),0===b&&(m=e,n=f),"M"===h)l&&l.length<8&&(t.length-=1,x=0),u=m=e,v=n=f,l=[e,f],y+=x,x=2,t.push(l),b+=2,h="L";else if("C"===h)l||(l=[0,0]),l[x++]=e,l[x++]=f,j||(u=v=0),l[x++]=u+1*s[b+3],l[x++]=v+1*s[b+4],l[x++]=u+=1*s[b+5],l[x++]=v+=1*s[b+6],b+=6;else if("S"===h)"C"===r||"S"===r?(o=u-l[x-4],p=v-l[x-3],l[x++]=u+o,l[x++]=v+p):(l[x++]=u,l[x++]=v),l[x++]=e,l[x++]=f,j||(u=v=0),l[x++]=u+=1*s[b+3],l[x++]=v+=1*s[b+4],b+=4;else if("Q"===h)o=e-u,p=f-v,l[x++]=u+2*o/3,l[x++]=v+2*p/3,j||(u=v=0),u+=1*s[b+3],v+=1*s[b+4],o=e-u,p=f-v,l[x++]=u+2*o/3,l[x++]=v+2*p/3,l[x++]=u,l[x++]=v,b+=4;else if("T"===h)o=u-l[x-4],p=v-l[x-3],l[x++]=u+o,l[x++]=v+p,o=u+1.5*o-e,p=v+1.5*p-f,l[x++]=e+2*o/3,l[x++]=f+2*p/3,l[x++]=u=e,l[x++]=v=f,b+=2;else if("H"===h)f=v,l[x++]=u+(e-u)/3,l[x++]=v+(f-v)/3,l[x++]=u+2*(e-u)/3,l[x++]=v+2*(f-v)/3,l[x++]=u=e,l[x++]=f,b+=1;else if("V"===h)f=e,e=u,j&&(f+=v-u),l[x++]=e,l[x++]=v+(f-v)/3,l[x++]=e,l[x++]=v+2*(f-v)/3,l[x++]=e,l[x++]=v=f,b+=1;else if("L"===h||"Z"===h)"Z"===h&&(e=m,f=n,l.closed=!0),("L"===h||Math.abs(u-e)>.5||Math.abs(v-f)>.5)&&(l[x++]=u+(e-u)/3,l[x++]=v+(f-v)/3,l[x++]=u+2*(e-u)/3,l[x++]=v+2*(f-v)/3,l[x++]=e,l[x++]=f,"L"===h&&(b+=2)),u=e,v=f;else if("A"===h){if(q=k(u,v,1*s[b+1],1*s[b+2],1*s[b+3],1*s[b+4],1*s[b+5],(j?u:0)+1*s[b+6],(j?v:0)+1*s[b+7]))for(d=0;d<q.length;d++)l[x++]=q[d];u=l[x-2],v=l[x-1],b+=7}else i("Error: malformed path data: "+a);return t.totalPoints=y+x,t},m=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q=0,r=.999999,s=a.length,t=b/((s-2)/6);for(o=2;s>o;o+=6)for(q+=t;q>r;)c=a[o-2],d=a[o-1],e=a[o],f=a[o+1],g=a[o+2],h=a[o+3],i=a[o+4],j=a[o+5],p=1/(Math.floor(q)+1),k=c+(e-c)*p,m=e+(g-e)*p,k+=(m-k)*p,m+=(g+(i-g)*p-m)*p,l=d+(f-d)*p,n=f+(h-f)*p,l+=(n-l)*p,n+=(h+(j-h)*p-n)*p,a.splice(o,4,c+(e-c)*p,d+(f-d)*p,k,l,k+(m-k)*p,l+(n-l)*p,m,n,g+(i-g)*p,h+(j-h)*p),o+=6,s+=6,q--;return a},n=function(a){var b,c,d,e,f="",g=a.length,h=100;for(c=0;g>c;c++){for(e=a[c],f+="M"+e[0]+","+e[1]+" C",b=e.length,d=2;b>d;d++)f+=(e[d++]*h|0)/h+","+(e[d++]*h|0)/h+" "+(e[d++]*h|0)/h+","+(e[d++]*h|0)/h+" "+(e[d++]*h|0)/h+","+(e[d]*h|0)/h+" ";e.closed&&(f+="z")}return f},o=function(a){for(var b=[],c=a.length-1,d=0;--c>-1;)b[d++]=a[c],b[d++]=a[c+1],c--;for(c=0;d>c;c++)a[c]=b[c];a.reversed=a.reversed?!1:!0},p=function(a){var b,c=a.length,d=0,e=0;for(b=0;c>b;b++)d+=a[b++],e+=a[b];return[d/(c/2),e/(c/2)]},q=function(a){var b,c,d,e=a.length,f=a[0],g=f,h=a[1],i=h;for(d=6;e>d;d+=6)b=a[d],c=a[d+1],b>f?f=b:g>b&&(g=b),c>h?h=c:i>c&&(i=c);return a.centerX=(f+g)/2,a.centerY=(h+i)/2,a.size=(f-g)*(h-i)},r=function(a){for(var b,c,d,e,f,g=a.length,h=a[0][0],i=h,j=a[0][1],k=j;--g>-1;)for(f=a[g],b=f.length,e=6;b>e;e+=6)c=f[e],d=f[e+1],c>h?h=c:i>c&&(i=c),d>j?j=d:k>d&&(k=d);return a.centerX=(h+i)/2,a.centerY=(j+k)/2,a.size=(h-i)*(j-k)},s=function(a,b){return b.length-a.length},t=function(a,b){var c=a.size||q(a),d=b.size||q(b);return Math.abs(d-c)<(c+d)/20?b.centerX-a.centerX||b.centerY-a.centerY:d-c},u=function(a,b){var c,d,e=a.slice(0),f=a.length,g=f-2;for(b=0|b,c=0;f>c;c++)d=(c+b)%g,a[c++]=e[d],a[c]=e[d+1]},v=function(a,b,c,d,e){var f,g,h,i,j=a.length,k=0,l=j-2;for(c*=6,g=0;j>g;g+=6)f=(g+c)%l,i=a[f]-(b[g]-d),h=a[f+1]-(b[g+1]-e),k+=Math.sqrt(h*h+i*i);return k},w=function(a,b,c){var d,e,f,g=a.length,h=p(a),i=p(b),j=i[0]-h[0],k=i[1]-h[1],l=v(a,b,0,j,k),m=0;for(f=6;g>f;f+=6)e=v(a,b,f/6,j,k),l>e&&(l=e,m=f);if(c)for(d=a.slice(0),o(d),f=6;g>f;f+=6)e=v(d,b,f/6,j,k),l>e&&(l=e,m=-f);return m/6},x=function(a,b,c){for(var d,e,f,g,h,i,j=a.length,k=99999999999,l=0,m=0;--j>-1;)for(d=a[j],i=d.length,h=0;i>h;h+=6)e=d[h]-b,f=d[h+1]-c,g=Math.sqrt(e*e+f*f),k>g&&(k=g,l=d[h],m=d[h+1]);return[l,m]},y=function(a,b,c,d,e,f){var g,h,i,j,k,l=b.length,m=0,n=Math.min(a.size||q(a),b[c].size||q(b[c]))*d,o=999999999999,p=a.centerX+e,r=a.centerY+f;for(h=c;l>h&&(g=b[h].size||q(b[h]),!(n>g));h++)i=b[h].centerX-p,j=b[h].centerY-r,k=Math.sqrt(i*i+j*j),o>k&&(m=h,o=k);return k=b[m],b.splice(m,1),k},z=function(a,b,c,d){var e,f,g,h,j,k,l,n=b.length-a.length,p=n>0?b:a,v=n>0?a:b,z=0,A="complexity"===d?s:t,B="position"===d?0:"number"==typeof d?d:.8,C=v.length,D="object"==typeof c&&c.push?c.slice(0):[c],E="reverse"===D[0]||D[0]<0,F="log"===c;if(v[0]){if(p.length>1&&(a.sort(A),b.sort(A),k=p.size||r(p),k=v.size||r(v),k=p.centerX-v.centerX,l=p.centerY-v.centerY,A===t))for(C=0;C<v.length;C++)p.splice(C,0,y(v[C],p,C,B,k,l));if(n)for(0>n&&(n=-n),p[0].length>v[0].length&&m(v[0],(p[0].length-v[0].length)/6|0),C=v.length;n>z;)h=p[C].size||q(p[C]),g=x(v,p[C].centerX,p[C].centerY),h=g[0],j=g[1],v[C++]=[h,j,h,j,h,j,h,j],v.totalPoints+=8,z++;for(C=0;C<a.length;C++)e=b[C],f=a[C],n=e.length-f.length,0>n?m(e,-n/6|0):n>0&&m(f,n/6|0),E&&!f.reversed&&o(f),c=D[C]||0===D[C]?D[C]:"auto",c&&(f.closed||Math.abs(f[0]-f[f.length-2])<.5&&Math.abs(f[1]-f[f.length-1])<.5?"auto"===c||"log"===c?(D[C]=c=w(f,e,0===C),0>c&&(E=!0,o(f),c=-c),u(f,6*c)):"reverse"!==c&&(C&&0>c&&o(f),u(f,6*(0>c?-c:c))):!E&&("auto"===c&&Math.abs(e[0]-f[0])+Math.abs(e[1]-f[1])+Math.abs(e[e.length-2]-f[f.length-2])+Math.abs(e[e.length-1]-f[f.length-1])>Math.abs(e[0]-f[f.length-2])+Math.abs(e[1]-f[f.length-1])+Math.abs(e[e.length-2]-f[0])+Math.abs(e[e.length-1]-f[1])||c%2)?(o(f),D[C]=-1,E=!0):"auto"===c?D[C]=0:"reverse"===c&&(D[C]=-1),f.closed!==e.closed&&(f.closed=e.closed=!1));return F&&i("shapeIndex:["+D.join(",")+"]"),D}},A=function(a,b,c,d){var e=l(a[0]),f=l(a[1]);z(e,f,b||0===b?b:"auto",c)&&(a[0]=n(e),a[1]=n(f),("log"===d||d===!0)&&i('precompile:["'+a[0]+'","'+a[1]+'"]'))},B=function(a,b,c){return b||c||a||0===a?function(d){A(d,a,b,c)}:A},C=function(a,b){if(!b)return a;var c,e,f,g=a.match(d)||[],h=g.length,i="";for("reverse"===b?(e=h-1,c=-2):(e=(2*(parseInt(b,10)||0)+1+100*h)%h,c=2),f=0;h>f;f+=2)i+=g[e-1]+","+g[e]+" ",e=(e+c)%h;return i},D=function(a,b){var c,d,e,f,g,h,i,j=0,k=parseFloat(a[0]),l=parseFloat(a[1]),m=k+","+l+" ",n=.999999;for(e=a.length,c=.5*b/(.5*e-1),d=0;e-2>d;d+=2){if(j+=c,h=parseFloat(a[d+2]),i=parseFloat(a[d+3]),j>n)for(g=1/(Math.floor(j)+1),f=1;j>n;)m+=(k+(h-k)*g*f).toFixed(2)+","+(l+(i-l)*g*f).toFixed(2)+" ",j--,f++;m+=h+","+i+" ",k=h,l=i}return m},E=function(a){var b=a[0].match(d)||[],c=a[1].match(d)||[],e=c.length-b.length;e>0?a[0]=D(b,e):a[1]=D(c,-e)},F=function(a){return isNaN(a)?E:function(b){E(b),b[1]=C(b[1],parseInt(a,10))}},G=function(a,b){var c=_gsScope.document.createElementNS("http://www.w3.org/2000/svg","path"),d=Array.prototype.slice.call(a.attributes),e=d.length;for(b=","+b+",";--e>-1;)-1===b.indexOf(","+d[e].nodeName+",")&&c.setAttributeNS(null,d[e].nodeName,d[e].nodeValue);return c},H=function(a,b){var c,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y=a.tagName.toLowerCase(),z=.552284749831;return"path"!==y&&a.getBBox?(i=G(a,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),"rect"===y?(g=+a.getAttribute("rx")||0,h=+a.getAttribute("ry")||0,e=+a.getAttribute("x")||0,f=+a.getAttribute("y")||0,m=(+a.getAttribute("width")||0)-2*g,n=(+a.getAttribute("height")||0)-2*h,g||h?(o=e+g*(1-z),p=e+g,q=p+m,r=q+g*z,s=q+g,t=f+h*(1-z),u=f+h,v=u+n,w=v+h*z,x=v+h,c="M"+s+","+u+" V"+v+" C"+[s,w,r,x,q,x,q-(q-p)/3,x,p+(q-p)/3,x,p,x,o,x,e,w,e,v,e,v-(v-u)/3,e,u+(v-u)/3,e,u,e,t,o,f,p,f,p+(q-p)/3,f,q-(q-p)/3,f,q,f,r,f,s,t,s,u].join(",")+"z"):c="M"+(e+m)+","+f+" v"+n+" h"+-m+" v"+-n+" h"+m+"z"):"circle"===y||"ellipse"===y?("circle"===y?(g=h=+a.getAttribute("r")||0,k=g*z):(g=+a.getAttribute("rx")||0,h=+a.getAttribute("ry")||0,k=h*z),e=+a.getAttribute("cx")||0,f=+a.getAttribute("cy")||0,j=g*z,c="M"+(e+g)+","+f+" C"+[e+g,f+k,e+j,f+h,e,f+h,e-j,f+h,e-g,f+k,e-g,f,e-g,f-k,e-j,f-h,e,f-h,e+j,f-h,e+g,f-k,e+g,f].join(",")+"z"):"line"===y?c="M"+a.getAttribute("x1")+","+a.getAttribute("y1")+" L"+a.getAttribute("x2")+","+a.getAttribute("y2"):("polyline"===y||"polygon"===y)&&(l=(a.getAttribute("points")+"").match(d)||[],e=l.shift(),f=l.shift(),c="M"+e+","+f+" L"+l.join(","),"polygon"===y&&(c+=","+e+","+f+"z")),i.setAttribute("d",c),b&&a.parentNode&&(a.parentNode.insertBefore(i,a),a.parentNode.removeChild(a)),i):a},I=function(a,b,c){var f,g,j="string"==typeof a;return(!j||e.test(a)||(a.match(d)||[]).length<3)&&(f=j?h.selector(a):a&&a[0]?a:[a],f&&f[0]?(f=f[0],g=f.nodeName.toUpperCase(),b&&"PATH"!==g&&(f=H(f,!1),g="PATH"),a=f.getAttribute("PATH"===g?"d":"points")||"",f===c&&(a=f.getAttributeNS(null,"data-original")||a)):(i("WARNING: invalid morph to: "+a),a=!1)),a},J="Use MorphSVGPlugin.convertToPath(elementOrSelectorText) to convert to a path before morphing.",K=_gsScope._gsDefine.plugin({propName:"morphSVG",API:2,global:!0,version:"0.8.8",init:function(a,b,c,d){var e,g,h,j,k;return"function"!=typeof a.setAttribute?!1:("function"==typeof b&&(b=b(d,a)),e=a.nodeName.toUpperCase(),k="POLYLINE"===e||"POLYGON"===e,"PATH"===e||k?(g="PATH"===e?"d":"points",("string"==typeof b||b.getBBox||b[0])&&(b={shape:b}),j=I(b.shape||b.d||b.points||"","d"===g,a),k&&f.test(j)?(i("WARNING: a <"+e+"> cannot accept path data. "+J),!1):(j&&(this._target=a,a.getAttributeNS(null,"data-original")||a.setAttributeNS(null,"data-original",a.getAttribute(g)),h=this._addTween(a,"setAttribute",a.getAttribute(g)+"",j+"","morphSVG",!1,g,"object"==typeof b.precompile?function(a){a[0]=b.precompile[0],a[1]=b.precompile[1]}:"d"===g?B(b.shapeIndex,b.map||K.defaultMap,b.precompile):F(b.shapeIndex)),h&&(this._overwriteProps.push("morphSVG"),h.end=j,h.endProp=g)),!0)):(i("WARNING: cannot morph a <"+e+"> SVG element. "+J),!1))},set:function(a){var b;if(this._super.setRatio.call(this,a),1===a)for(b=this._firstPT;b;)b.end&&this._target.setAttribute(b.endProp,b.end),b=b._next}});K.pathFilter=A,K.pointsFilter=E,K.subdivideRawBezier=m,K.defaultMap="size",K.pathDataToRawBezier=function(a){return l(I(a,!0))},K.equalizeSegmentQuantity=z,K.convertToPath=function(a,b){"string"==typeof a&&(a=h.selector(a));for(var c=a&&0!==a.length?a.length&&a[0]&&a[0].nodeType?Array.prototype.slice.call(a,0):[a]:[],d=c.length;--d>-1;)c[d]=H(c[d],b!==!1);return c},K.pathDataToBezier=function(a,b){var c,d,e,f,g,i,j,k,m=l(I(a,!0))[0]||[],n=0;if(b=b||{},k=b.align||b.relative,f=b.matrix||[1,0,0,1,0,0],g=b.offsetX||0,i=b.offsetY||0,"relative"===k||k===!0?(g-=m[0]*f[0]+m[1]*f[2],i-=m[0]*f[1]+m[1]*f[3],n="+="):(g+=f[4],i+=f[5],k&&(k="string"==typeof k?h.selector(k):k&&k[0]?k:[k],k&&k[0]&&(j=k[0].getBBox()||{x:0,y:0},g-=j.x,i-=j.y))),c=[],e=m.length,f)for(d=0;e>d;d+=2)c.push({x:n+(m[d]*f[0]+m[d+1]*f[2]+g),y:n+(m[d]*f[1]+m[d+1]*f[3]+i)});else for(d=0;e>d;d+=2)c.push({x:n+(m[d]+g),y:n+(m[d+1]+i)});return c}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"function"==typeof define&&define.amd?define(["TweenLite"],b):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=b())}("MorphSVGPlugin");
/*!
 * verge 1.9.1+201402130803
 * https://github.com/ryanve/verge
 * MIT License 2013 Ryan Van Etten
 */
!function(a,b,c){"undefined"!=typeof module&&module.exports?module.exports=c():a[b]=c()}(this,"verge",function(){function a(){return{width:k(),height:l()}}function b(a,b){var c={};return b=+b||0,c.width=(c.right=a.right+b)-(c.left=a.left-b),c.height=(c.bottom=a.bottom+b)-(c.top=a.top-b),c}function c(a,c){return a=a&&!a.nodeType?a[0]:a,a&&1===a.nodeType?b(a.getBoundingClientRect(),c):!1}function d(b){b=null==b?a():1===b.nodeType?c(b):b;var d=b.height,e=b.width;return d="function"==typeof d?d.call(b):d,e="function"==typeof e?e.call(b):e,e/d}var e={},f="undefined"!=typeof window&&window,g="undefined"!=typeof document&&document,h=g&&g.documentElement,i=f.matchMedia||f.msMatchMedia,j=i?function(a){return!!i.call(f,a).matches}:function(){return!1},k=e.viewportW=function(){var a=h.clientWidth,b=f.innerWidth;return b>a?b:a},l=e.viewportH=function(){var a=h.clientHeight,b=f.innerHeight;return b>a?b:a};return e.mq=j,e.matchMedia=i?function(){return i.apply(f,arguments)}:function(){return{}},e.viewport=a,e.scrollX=function(){return f.pageXOffset||h.scrollLeft},e.scrollY=function(){return f.pageYOffset||h.scrollTop},e.rectangle=c,e.aspect=d,e.inX=function(a,b){var d=c(a,b);return!!d&&d.right>=0&&d.left<=k()},e.inY=function(a,b){var d=c(a,b);return!!d&&d.bottom>=0&&d.top<=l()},e.inViewport=function(a,b){var d=c(a,b);return!!d&&d.bottom>=0&&d.right>=0&&d.top<=l()&&d.left<=k()},e});
/****************************************************************************************************
 * @name:       LivIconsEvo.defaults.js - the default options for LivIcons (Live Icons) Evolution
 * @version:    2.3.XXX (XXX is a total number of icons)
 * @URL:        https://livicons.com
 * @copyright:  (c) 2013-2016 DeeThemes (http://codecanyon.net/user/DeeThemes)
 * @licenses:   http://codecanyon.net/licenses/regular
                http://codecanyon.net/licenses/extended
*****************************************************************************************************/
;if (typeof jQuery === 'undefined') {
  throw new Error('LivIcons Evolution Script requires jQuery!');
};

function LivIconsEvoDefaults () {
	
	"use strict";
	
	var default_options = {
		
		pathToFolder: '/LivIconsEvo/svg/', //the path from root of your site to folder with icons. Also may be as URL, like 'http://yoursite.com/path/to/LivIconsEvo/svg/'
		name: 'bell.svg', //the default icon name

		//visualization options

		style: 'original', //'original', 'solid', filled', 'lines' or ('lines-alt' / 'linesAlt')
		size: '60px', //default size
		
		strokeStyle: 'original', //'original', 'round' or 'square'
		strokeWidth: 'original', //'original' or any value in pixels
		
		tryToSharpen: true, //apply or not micro shifts of SVG shapes to try to make them more sharp (crisp)

		rotate: 'none', //'none' or any value in deg [0 ... 360]
		flipHorizontal: false,
		flipVertical: false,
		
		strokeColor: '#22A7F0', //when style opt is 'filled' or 'lines' or ('lines-alt' / 'linesAlt')
		strokeColorAction: '#b3421b', //when 'style' is 'original', 'filled' or 'lines' and 'colorsOnHover' or 'colorsWhenMorph' is 'custom'
		strokeColorAlt: '#F9B32F', //when style opt is ('lines-alt' / 'linesAlt')
		strokeColorAltAction: '#ab69c6', //when 'style' is ('lines-alt' / 'linesAlt') and 'colorsOnHover' or 'colorsWhenMorph' is 'custom'
		fillColor: '#91e9ff', //when style opt is 'filled'
		fillColorAction: '#ff926b', //when 'style' is 'original' or 'filled' and 'colorsOnHover' or 'colorsWhenMorph' is 'custom'
		solidColor: '#6C7A89', //when style opt is 'solid'
		solidColorAction: '#4C5A69', //when 'style' is 'solid' and 'colorsOnHover' or 'colorsWhenMorph' is 'custom'
		solidColorBg: '#ffffff', //when style opt is 'solid'
		solidColorBgAction: '#ffffff', //when 'style' is 'solid'
		
		colorsOnHover: 'none', //'none', 'lighter', 'darker', 'custom' or 'hue0' ... 'hue360'
		colorsHoverTime: 0.3, //seconds
		
		colorsWhenMorph: 'none', //'none', 'lighter', 'darker', 'custom' or 'hue0' ... 'hue360'
		
		brightness: 0.10, // brightness change when 'lighter' or 'darker' (10% by default)
		saturation: 0.07, // saturation change when 'lighter' or 'darker' (7% by default)
		
		morphState: 'start', //'start' or 'end' (initial state for animating position)
		morphImage: 'none', //'none' or a URL to your image (better to use an image with equal width and height)
		allowMorphImageTransform: false, //if true the inside image will rotate and/or flip with a morph icon together

		strokeWidthFactorOnHover: 'none', //'none' or numeric value. For ex., for increase twice set the option to 2
		strokeWidthOnHoverTime: 0.3, //seconds
		keepStrokeWidthOnResize: false,

		//animation options

		animated: true, //if false, an icon is static
		eventType: 'hover', //'click', 'hover' or 'none'
		eventOn: 'self', //'self', 'parent', 'grandparent' or any ID (#some_id) or class (.some_class)
		
		autoPlay: false, //be careful with true value
		delay: 0, //value in seconds
		duration: 'default', //'default' or value in seconds
		repeat: 'default', //'default', 'loop' or integer number of repeats
		repeatDelay: 'default', //'default' or value in seconds

		drawOnViewport: false,
		viewportShift: 'oneHalf', //'none', ('one-half' / 'oneHalf'), ('one-third' / 'oneThird') or 'full'
		drawDelay: 0, //seconds
		drawTime: 1, //seconds
		drawStagger: 0.1, //seconds
		drawStartPoint: 'middle', //'start', 'middle' or 'end'
		drawColor: 'same', //'same' or any desired color value (HEX)
		drawColorTime: 1, //seconds
		drawReversed: false, //true will reverse the order of shapes drawing
		drawEase: 'Power1.easeOut', //default ease

		eraseDelay: 0, //seconds
		eraseTime: 1, //seconds
		eraseStagger: 0.1, //seconds
		eraseStartPoint: 'middle', //'start', 'middle' or 'end'
		eraseReversed: true, //true will reverse the order of shapes erasing
		eraseEase: 'Power1.easeOut', //default ease

		touchEvents: false, //apply or not special events handlers for touch devices

		//callback functions

		beforeAdd: false,
		afterAdd: false,

		beforeUpdate: false,
		afterUpdate: false,

		beforeRemove: false,
		afterRemove: false,

		beforeDraw: false,
		afterDraw: false,
		duringDraw: false,

		beforeErase: false,
		afterErase: false,
		duringErase: false,

		beforeAnim: false,
		afterAnim: false,
		duringAnim: false
	};

	if (default_options.pathToFolder === '/EDIT THIS OPTION!/') {
		alert('LivIcons Evolution: Please edit "pathToFolder" option in the "LivIconsEvo.defaults.js" file!');
		throw new Error('LivIcons Evolution: Please edit "pathToFolder" option in the "LivIconsEvo.defaults.js" file!');
	};

	return default_options;
};

/********************************************************************************************
 * @name:       LivIconsEvo.js - the main JS file of LivIcons (Live Icons) Evolution
 * @version:    2.3.XXX (XXX is a total number of icons)
 * @URL:        https://livicons.com
 * @copyright:  (c) 2013-2016 DeeThemes (http://codecanyon.net/user/DeeThemes)
 * @licenses:   http://codecanyon.net/licenses/regular
                http://codecanyon.net/licenses/extended
*********************************************************************************************/

;(function(jQuery, undefined) {

    "use strict";

    //for WordPress
    var isWP = false,
        TweenMax = window.TweenMax,
        TimelineMax = window.TimelineMax,
        Power0 = window.Power0,
        Snap = window.Snap,
        verge = window.verge;
    if (window.DeeThemes_GS && window.DeeThemes_Snap && window.DeeThemes_Verge) {
        isWP = true;
    };
    if (isWP) {
        TweenMax =  window.DeeThemes_GS.TweenMax,
        TimelineMax =  window.DeeThemes_GS.TimelineMax,
        Power0 = window.DeeThemes_GS.Power0,
        Snap =  window.DeeThemes_Snap,
        verge =  window.DeeThemes_Verge;
    };

    //Getting LivIcons Evolution default options
    var def_options = LivIconsEvoDefaults();

    //In case of forgetting to add the ending slash
    if ( !def_options.pathToFolder.match(/(\/)$/) && def_options.pathToFolder.trim() !== '' ) {
        def_options.pathToFolder += '/';
    };

    //check for IE9 - IE11 and Edge for line drawing effect. (It doesn't work in those browsers if stroke-width is not integer)
    var isIE = ('ActiveXObject' in window) ? true : false,
        isEdge = (navigator.userAgent.match(/Edge\/\d+/)) ? true : false;

    //the main function to create LivIcon Evolution
    function _createLiviconEvo (holder, options) {
        //to prevent "flickering"
        holder.css('visibility', 'hidden');

        //create Snap object
        var svg = Snap(holder.find('svg')[0]);
        svg.attr({preserveAspectRatio:"xMinYMin meet"});
        var svg_center_origin = svg.attr('viewBox').w / 2 +' '+ svg.attr('viewBox').h / 2;
        svg.selectAll('desc').forEach(function (d) {if (d.innerSVG() == 'Created with Snap') {jQuery(d.node).text('LivIcons Evolution');}});

        //jQuery object
        var $svg = jQuery(svg.node);

        //creating service groups for rotation, flipping and sharp edges
        var init_gr = svg.select('g.lievo-main'),
            gr = svg.g().addClass('lievo-setrotation');
        svg.prepend(gr);
        gr = gr.g().addClass('lievo-setsharp');
        gr = gr.g().addClass('lievo-setflip');
        gr.append(init_gr);


        /***********Visualization**********/

        //leave only one icon's data for morph's state
        if (options.morph) {
            if (options.morphState === 'end') {
                $svg.find('g.lievo-main g.lievo-morphstartstate').remove();
                options.curMorphState = "end";
            } else {
                $svg.find('g.lievo-main g.lievo-morphendstate').remove();
                options.curMorphState = "start";
            };
        } else {
            options.curMorphState = 'not morph';
        };

        //leave only one icon style
        switch (options.style) {
            case 'solid': {
                $svg.find('g.lievo-main g.lievo-solidicon').siblings(':not(g.lievo-common)').remove();
                break;
            }
            case 'lines':
            case 'lines-alt':
            case 'linesAlt': {
                $svg.find('g.lievo-main g.lievo-lineicon').siblings(':not(g.lievo-common)').remove();
                break;
            }
            default: {
                //original or filled icon
                $svg.find('g.lievo-main g.lievo-filledicon').siblings(':not(g.lievo-common)').remove();
            }
        };
        
        //adding invisible rectangle for "tryToSharpen" option
        var helper_rect = init_gr.rect(-19,-19,4,4).addClass('lievo-checkshift lievo-donotdraw lievo-nohoverstroke lievo-nohovercolor').attr({fill: 'none', stroke:'#ffffff', 'stroke-width': 2, 'stroke-linecap': 'butt', 'stroke-linejoin':'round', opacity: 0});
        if (svg.attr('data-shift')) {
            if (svg.attr('data-shift') === 'x') {
                helper_rect.attr('x', -20);
            } else if (svg.attr('data-shift') === 'y') {
                helper_rect.attr('y', -20);
            } else if (svg.attr('data-shift') === 'xy') {
                helper_rect.attr({'x': -20, 'y':-20});
            };
        };
        if (options.style === 'solid' && svg.attr('data-solidshift')) {
            if (svg.attr('data-solidshift') === 'x') {
                helper_rect.attr('x', -19.5);
            } else if (svg.attr('data-solidshift') === 'y') {
                helper_rect.attr('y', -19.5);
            } else if (svg.attr('data-solidshift') === 'xy') {
                helper_rect.attr({'x': -19.5, 'y':-19.5});
            };
        };

        //morph icons can have an image inside
        if (options.morph && options.morphImage) {
            var img_container = svg.select('.lievo-morphimage');
            if (img_container) {
                var pattern = svg.ptrn(0, 0, '100%', '100%', 0, 0, 0, 0);
                pattern.node.removeAttribute('viewBox');
                var pat_g = pattern.attr('patternUnits', 'userSpaceOnUse').addClass('lievo-morphpattern').toDefs().g();
            } else {
                options.morphImage = false;
            };
            var backup_fill = svg.select('.lievo-morphimage').attr('fill');
            pat_g.rect(0,0,60,60).attr({fill: backup_fill, stroke:'#ffffff', 'stroke-width': 0}).addClass('lievo-donotdraw');
        };

        //select all SVG primitives
        var shapes = svg.selectAll('circle, ellipse, image, line, path, polygon, polyline, rect, text, use');
        shapes.forEach(function(shape) {
            if (!jQuery(shape.node).attr('stroke')) {
                shape.attr({stroke: 'none', 'stroke-width': 0});
            };
            if (!jQuery(shape.node).attr('fill')) {
                shape.attr('fill', 'none');
            };
        });

        //change stroke styles for linecap and linejoin
        if (options.strokeStyle === 'round') {
            shapes.forEach(function(shape) {
                if ( shape.attr('stroke') !== 'none' && !shape.hasClass('lievo-savelinecap') ) {
                    shape.node.setAttribute('stroke-linecap', 'round');
                    shape.node.setAttribute('stroke-linejoin', 'round');
                };
            });
        } else if (options.strokeStyle === 'square') {
            shapes.forEach(function(shape) {
                if ( shape.attr('stroke') !== 'none' && !shape.hasClass('lievo-savelinecap') ) {
                    shape.node.setAttribute('stroke-linecap', 'square');
                    shape.node.setAttribute('stroke-linejoin', 'miter');
                    if (!shape.attr('stroke-miterlimit')) {
                        shape.attr('stroke-miterlimit', '10');
                    };
                };
            });
        };

        //storing init data
        shapes.forEach(function(shape) {
            shape.data('initStrokeWidth', shape.attr('stroke-width'));
            shape.data('initStrokeLinecap', shape.attr('stroke-linecap'));
            shape.data('initStrokeLinejoin', shape.attr('stroke-linejoin'));
        });

        //change icon style
        switch (options.style) {
            case 'filled': {
                shapes.forEach(function(shape) {
                    if ( shape.attr('stroke') !== 'none' && !shape.hasClass('lievo-savestroke') ) {
                        shape.attr('stroke', options.strokeColor);
                    };
                    if ( shape.attr('fill') !== 'none' && !shape.hasClass('lievo-savefill') ) {
                        shape.attr('fill', options.fillColor);
                    };
                    if ( shape.hasClass('lievo-likestroke') ) {
                        shape.attr('fill', options.strokeColor);
                    };
                });
                break;
            }
            case 'lines': {
                shapes.forEach(function(shape) {
                    if ( shape.attr('stroke') !== 'none' && !shape.hasClass('lievo-savestroke') ) {
                        shape.attr('stroke', options.strokeColor);
                    };
                    if (!shape.hasClass('lievo-savefill')) {
                        shape.attr('fill', 'none');
                    };
                    if ( shape.hasClass('lievo-likestroke') ) {
                        shape.attr('fill', options.strokeColor);
                    };
                });
                break;
            }
            case 'lines-alt':
            case 'linesAlt': {
                shapes.forEach(function(shape) {
                    if ( shape.hasClass('lievo-altstroke') ) {
                        if ( shape.attr('stroke') !== 'none' ) {
                            shape.attr('stroke', options.strokeColorAlt);
                        };
                        if ( shape.hasClass('lievo-likestroke') ) {
                            shape.attr('fill', options.strokeColorAlt);
                        } else {
                            if (!shape.hasClass('lievo-savefill')) {
                                shape.attr('fill', 'none');
                            };
                        };
                    } else {
                        if ( shape.attr('stroke') !== 'none' && !shape.hasClass('lievo-savestroke') ) {
                            shape.attr('stroke', options.strokeColor);
                        };
                        if ( shape.hasClass('lievo-likestroke') ) {
                            shape.attr('fill', options.strokeColor);
                        } else {
                            if (!shape.hasClass('lievo-savefill')) {
                                shape.attr('fill', 'none');
                            };
                        };
                    };
                });
                break;
            }
            case 'solid': {
                shapes.forEach(function(shape) {
                    if ( shape.hasClass('lievo-solidbg') ) {
                        if ( shape.attr('stroke') !== 'none' && !shape.hasClass('lievo-savestroke') ) {
                            shape.attr('stroke', options.solidColorBg);
                        };
                        if ( shape.attr('fill') !== 'none' && !shape.hasClass('lievo-savefill') ) {
                            shape.attr('fill', options.solidColorBg);
                        };
                    } else {
                        if ( shape.attr('stroke') !== 'none' && !shape.hasClass('lievo-savestroke') ) {
                            shape.attr('stroke', options.solidColor);
                        };
                        if ( shape.attr('fill') !== 'none' && !shape.hasClass('lievo-savefill') ) {
                            shape.attr('fill', options.solidColor);
                        };
                    };
                });
                break;
            }
            default: {
                //do nothing, leave 'original' style
                break;
            }
        };

        //exactly now set the width of holder
        holder.css('width', options.size);

        //for WordPress
        if (isWP && holder.hasClass('livicon-evo-back-in-combined')) {
            holder.parent('.livicon-evo-combined').css('width', options.size);
            holder.css('width', '100%');
        };

        //morph icons can have an image inside
        if (options.morph && options.morphImage) {
            pat_g.image(options.morphImage, 0, 0, '100%', '100%');
            pattern.select('image').attr('preserveAspectRatio', 'xMidYMid slice');
            svg.select('.lievo-morphimage').attr('fill', pattern);
        };

        //change stroke-width
        var half_stroke;
        var strokeWidthCalc = function () {
            options.scaleStrokeFactor = holder.width() / 60;
            if (options.scaleStrokeFactor <= 0) {
                options.scaleStrokeFactor = 1;
            };
            if (options.strokeWidth !== 'original') {
                shapes.forEach(function(shape) {
                    if (shape.attr('stroke') !== 'none') {
                        var units = (''+options.strokeWidth).replace(/[0-9.]/g, ''),
                            cur_stroke_factor = shape.data('initStrokeWidth').replace(/[^0-9.]/g, '') / 2,
                            res_stroke = +(''+options.strokeWidth).replace(/[^0-9.]/g, '') / options.scaleStrokeFactor * cur_stroke_factor;
                        shape.node.setAttribute('stroke-width', res_stroke + units);
                        shape.data('curStrokeWidth', res_stroke + units);
                    };
                });
                half_stroke = (''+options.strokeWidth).replace(/[^0-9.]/g, '') / options.scaleStrokeFactor / 2;
            } else {
                if (options.tryToSharpen && options.scaleStrokeFactor < 0.5) {
                    shapes.forEach(function(shape) {
                        if (shape.attr('stroke') !== 'none') {
                            var units = shape.data('initStrokeWidth').replace(/[0-9.]/g, ''),
                                cur_stroke_factor = shape.data('initStrokeWidth').replace(/[^0-9.]/g, '') / 2,
                                res_stroke = 1 / options.scaleStrokeFactor * cur_stroke_factor;
                            shape.node.setAttribute('stroke-width', res_stroke + units);
                            shape.data('curStrokeWidth', res_stroke + units);
                        };
                    });
                    half_stroke = 1 / options.scaleStrokeFactor / 2;
                } else {
                    shapes.forEach(function(shape) {
                        if (shape.attr('stroke') !== 'none') {
                            shape.data('curStrokeWidth', shape.data('initStrokeWidth'));
                        };
                    });
                    half_stroke = svg.select('.lievo-checkshift').attr('stroke-width').replace(/[^0-9.]/g, '') / 2;
                };
            };

            //calculating stroke-width on hover
            if (options.strokeWidthFactorOnHover === 0 || options.strokeWidthFactorOnHover) {
                shapes.forEach(function(shape) {
                    if ( shape.attr('stroke') !== 'none' && !shape.hasClass('lievo-nohoverstroke') ) {
                        var curSW = shape.data('curStrokeWidth');
                        if (curSW) {
                            var units = (''+curSW).replace(/[0-9.]/g, ''),
                                res_stroke = +(''+curSW.replace(/[^0-9.]/g, '')) * options.strokeWidthFactorOnHover;
                            shape.data('hoverStrokeWidth', res_stroke + units);
                        };
                    };
                });
            };
        };
        strokeWidthCalc();
        if (options.keepStrokeWidthOnResize) {
            jQuery(window).on('resize', function () {
                strokeWidthCalc();
            });
        };

        //choosing color action on hover or when morphed
        if (options.colorsOnHover) {
            var color_action = options.colorsOnHover;
        };
        //if colorsWhenMorph for morph icons, then colorsOnHover is disabled
        if (options.morph && options.colorsWhenMorph) {
            options.colorsOnHover = false;
            var color_action = options.colorsWhenMorph;
        };

        //storing data and calculation colors change
        shapes.forEach(function(shape) {
            var fill = jQuery(shape.node).attr('fill');
            shape.data('curFill', fill);
            shape.data('curStroke', shape.attr('stroke'));
            shape.data('curOpacity', shape.attr('opacity'));

            //calculating colors on hover or colors for change when morph
            if (color_action) {
                if ( fill === 'none' ) {
                    shape.data('actionFill', 'none');
                } else if (fill.toLowerCase().match(/url\(/)) {
                    shape.data('actionFill', fill);
                } else {
                    if (color_action === 'lighter') {
                        if ( options.style === 'solid' && shape.hasClass('lievo-solidbg') ) {
                            var color = options.solidColorBgAction;
                        } else {
                            var color = LighterDarker(fill, -options.saturation, options.brightness);
                        };
                    } else if (color_action === 'darker') {
                        if ( options.style === 'solid' && shape.hasClass('lievo-solidbg') ) {
                            var color = options.solidColorBgAction;
                        } else {
                            var color = LighterDarker(fill, options.saturation, -options.brightness);
                        };
                    } else if (color_action.replace(/[^hue]/g, '') === 'hue') {
                        if ( options.style === 'solid' && shape.hasClass('lievo-solidbg') ) {
                            var color = options.solidColorBgAction;
                        } else {
                            var color = hueRotate(fill, color_action.replace(/[^0-9.]/g, '') ? color_action.replace(/[^0-9.]/g, '') : 0);
                        };
                    } else if (color_action === 'custom') {
                        var color;
                        switch (options.style) {
                            case 'solid': {
                                if ( shape.hasClass('lievo-solidbg') ) {
                                    color = options.solidColorBgAction;
                                } else {
                                    color = options.solidColorAction;
                                };
                                break;
                            }
                            case 'lines': {
                                color = options.strokeColorAction;
                                break;
                            }
                            case 'lines-alt':
                            case 'linesAlt': {
                                if (shape.hasClass('lievo-altstroke')) {
                                    color = options.strokeColorAltAction;
                                } else {
                                    color = options.strokeColorAction;
                                };
                                break;
                            }
                            default: {
                                //original or filled icon
                                if ( shape.hasClass('lievo-likestroke') ) {
                                    color = options.strokeColorAction;
                                } else {
                                    color = options.fillColorAction;
                                };
                                break;
                            }
                        };
                    };
                    shape.data('actionFill', color);
                };

                if ( shape.attr('stroke') === 'none' ) {
                    shape.data('actionStroke', 'none');
                } else {
                    if (color_action === 'lighter') {
                        if ( options.style === 'solid' && shape.hasClass('lievo-solidbg') ) {
                            var color = options.solidColorBgAction;
                        } else {
                            var color = LighterDarker(shape.attr('stroke'), -options.saturation, options.brightness);
                        };
                    } else if (color_action === 'darker') {
                        if ( options.style === 'solid' && shape.hasClass('lievo-solidbg') ) {
                            var color = options.solidColorBgAction;
                        } else {
                            var color = LighterDarker(shape.attr('stroke'), options.saturation, -options.brightness);
                        };
                    } else if (color_action.replace(/[^hue]/g, '') === 'hue') {
                        if ( options.style === 'solid' && shape.hasClass('lievo-solidbg') ) {
                            var color = options.solidColorBgAction;
                        } else {
                            var color = hueRotate(shape.attr('stroke'), color_action.replace(/[^0-9.]/g, '') ? color_action.replace(/[^0-9.]/g, '') : 0);
                        };
                    } else if (color_action === 'custom') {
                        var color;
                        switch (options.style) {
                            case 'solid': {
                                if ( shape.hasClass('lievo-solidbg') ) {
                                    color = options.solidColorBgAction;
                                } else {
                                    color = options.solidColorAction;
                                };
                                break;
                            }
                            case 'lines': {
                                color = options.strokeColorAction;
                                break;
                            }
                            case 'lines-alt':
                            case 'linesAlt': {
                                if ( shape.hasClass('lievo-altstroke') ) {
                                    color = options.strokeColorAltAction;
                                } else {
                                    color = options.strokeColorAction;
                                };
                                break;
                            }
                            default: {
                                //original or filled icon
                                color = options.strokeColorAction;
                                break;
                            }
                        };
                    };
                    shape.data('actionStroke', color);
                };
            };
        });

        //set rotation and/or flip
        if (options.rotate) {
            TweenMax.set(svg.select('g.lievo-setrotation').node, {rotation: options.rotate, svgOrigin: svg_center_origin});
            if (options.morph && options.morphImage && !options.allowMorphImageTransform) {
                var patt_g = pattern.select('g');
                if (!options.flipVertical && options.flipHorizontal) {
                    patt_g.transform('r' + options.rotate + ',30,30');
                } else if (options.flipVertical && !options.flipHorizontal) {
                    patt_g.transform('r' + options.rotate + ',30,30');
                } else {
                    patt_g.transform('r' + (-options.rotate) + ',30,30');
                };
            };
        };
        if (options.flipVertical && !options.flipHorizontal) {
            svg.select('g.lievo-setflip').transform('s1,-1,30,30');
            if (options.morph && options.morphImage && !options.allowMorphImageTransform) {
                pattern.select('image').transform('s1,-1,30,30');
            };
        } else if (options.flipHorizontal && !options.flipVertical) {
            svg.select('g.lievo-setflip').transform('s-1,1,30,30');
            if (options.morph && options.morphImage && !options.allowMorphImageTransform) {
                pattern.select('image').transform('s-1,1,30,30');
            };
        } else if (options.flipVertical && options.flipHorizontal) {
            svg.select('g.lievo-setflip').transform('s-1,-1,30,30');
            if (options.morph && options.morphImage && !options.allowMorphImageTransform) {
                pattern.select('image').transform('s-1,-1,30,30');
            };
        };


        /***********Animations***********/

        if (options.animated) {
            //getting global animation options from SVG icon file
            if (svg.attr('data-animoptions')) {
                var svg_opts = JSON.parse( svg.attr('data-animoptions').replace(/\'/g,'"') );
                if (svg_opts.duration) {
                    options.def_duration = strToNum(svg_opts.duration);
                } else {
                    options.def_duration = 1;
                };
                if (svg_opts.repeat) {
                    if (svg_opts.repeat === 'loop') {
                        options.def_repeat = -1;
                    } else {
                        options.def_repeat = strToNum(svg_opts.repeat);
                    };
                } else {
                    options.def_repeat = 0;
                };
                if (svg_opts.repeatDelay) {
                    options.def_repeatDelay = strToNum(svg_opts.repeatDelay);
                } else {
                    options.def_repeatDelay = 0.5;
                };
            } else {
                options.def_duration = 1;
                options.def_repeat = 0;
                options.def_repeatDelay = 0.5;
            };

            //calculating duration
            if (options.duration === 'default') {
                options.use_duration = options.def_duration;
            } else {
                options.use_duration = strToNum(options.duration);
            };
            if (isNaN(options.use_duration)) {
                options.use_duration = 1;
            };

            //calculating repeat
            if (options.repeat === 'default') {
                options.use_repeat = options.def_repeat;
            } else if (options.repeat === 'loop') {
                options.use_repeat = -1;
            } else {
                options.use_repeat = strToNum(options.repeat);
            };
            if (isNaN(options.use_repeat)) {
                options.use_repeat = 0;
            };
            if (options.use_repeat !== -1 && options.use_repeat < 0) {
                options.use_repeat = 0;
            };

            //calculating a delay before repeats
            if (options.repeatDelay === 'default') {
                options.use_repeatDelay = options.def_repeatDelay;
            } else {
                options.use_repeatDelay = strToNum(options.repeatDelay);
            };
            if (isNaN(options.use_repeatDelay)) {
                options.use_repeatDelay = options.def_repeatDelay;
            };

            //to prevent firing onUpdate callbacks before onStart ones
            if (options.delay <= 0) {options.delay = 0.001};
            if (options.use_repeatDelay <= 0) {options.use_repeatDelay = 0.001};
            if (options.drawDelay <= 0) {options.drawDelay = 0.001};
            if (options.eraseDelay <= 0) {options.eraseDelay = 0.001};

            //morph icons can't be repeated
            if (options.morph) {
                options.def_repeat = 0;
                options.use_repeat = 0;
                options.def_repeatDelay = 0;
                options.use_repeatDelay = 0;
            };
        } else {
            options.def_duration = 0;
            options.def_repeat = 0;
            options.def_repeatDelay = 0;
        };

        //Timeline for icon's drawing
        var drawTL = holder.data('drawTL');
        if (drawTL) {
            drawTL.pause().kill().clear();
        } else {
            var drawTL = new TimelineMax({paused: true});
        };

        //Timeline for icon's animation
        var mainTL = holder.data('mainTL');
        if (mainTL) {
            mainTL.pause().kill().clear();
        } else {
            var mainTL = new TimelineMax({paused: true});
        };

        if (options.animated) {
            //creates animations of each SVG shape
            var animated_shapes = svg.selectAll('circle, ellipse, g, image, line, path, polygon, polyline, rect, text, use');
            var defaultTL = new TimelineMax();

            if (options.morph && options.colorsWhenMorph) {
                var colorTL = new TimelineMax();
                animated_shapes.forEach(function(shape) {
                    if (options.morphState !== 'end') {
                        if ( !shape.hasClass('lievo-nohovercolor') && shape.type.toLowerCase() !== 'g' ) {
                            var stroke = shape.data('actionStroke'),
                                fill = shape.data('actionFill');
                            if ( stroke && stroke !== 'none' ) {
                                var tween_stroke = TweenMax.to(shape.node, options.use_duration, {stroke: stroke});
                                colorTL.add(tween_stroke, 0);
                            };
                            if ( fill && fill !== 'none' && !fill.match(/url\(/) ) {
                                var tween_fill = TweenMax.to(shape.node, options.use_duration, {fill: fill});
                                colorTL.add(tween_fill, 0);
                            };
                        };
                    } else {
                        if ( !shape.hasClass('lievo-nohovercolor') && shape.type.toLowerCase() !== 'g' ) {
                            var stroke = shape.data('actionStroke'),
                                fill = shape.data('actionFill');
                            if ( stroke && stroke !== 'none' ) {
                                TweenMax.set(shape.node, {stroke: stroke});
                            };
                            if ( fill && fill !== 'none' && !fill.match(/url\(/) ) {
                                TweenMax.set(shape.node, {fill: fill});
                            };

                            stroke = shape.data('curStroke');
                            fill = shape.data('curFill');
                            if ( stroke && stroke !== 'none') {
                                var tween_stroke = TweenMax.to(shape.node, options.use_duration, {stroke: stroke});
                                colorTL.add(tween_stroke, 0);
                            };
                            if ( fill && fill !== 'none' && !fill.match(/url\(/) ) {
                                var tween_fill = TweenMax.to(shape.node, options.use_duration, {fill: fill});
                                colorTL.add(tween_fill, 0);
                            };
                        };
                    };
                });
            };

            animated_shapes.forEach(function(shape) {
                if (shape.attr('data-animdata')) {
                    var animdata = JSON.parse(shape.attr('data-animdata').replace(/\'/g,'"')),
                        tl_temp = new TimelineMax();
                    animdata.steps.forEach(function (steps, i) {
                        for(var key in steps.vars) {
                            if ( steps.vars.hasOwnProperty(key) ) {
                                steps.vars[key] = strToNum(steps.vars[key]);
                                if (steps.vars[key] !== 'none') {
                                    steps.vars[key] = strToBool(steps.vars[key]);
                                };
                            };
                        };

                        if (strToNum(steps.duration) === 0) {
                            steps.duration = 0.001;
                        };

                        if (steps.vars.ease === 'none' || !steps.vars.ease) {
                            steps.vars.ease = Power0.easeNone;
                        } else {
                            steps.vars.ease = parseEase(steps.vars.ease);
                        };

                        if (steps.vars.path) {
                            steps.vars.morphSVG = steps.vars.path;
                        };

                        if (steps.vars.bezier && steps.vars.bezier.values) {
                            if( typeof steps.vars.bezier.values === 'string' ) {
                                var str = Snap.path.toCubic(steps.vars.bezier.values).toString();
                                str = str.replace(/[M|m]/g,'').replace(/[C|c]/g,',');
                                var arr = str.split(',');
                                steps.vars.bezier.values = [];
                                for (var i = 0; i < arr.length; i+=2) {
                                    var point = {};
                                    point.x = arr[i];
                                    point.y = arr[i+1];
                                    steps.vars.bezier.values.push(point);
                                };
                            };
                        };

                        if (isIE || isEdge) {//special actions for IE9-IE11 and MS Edge
                            if (steps.vars.drawSVG) {
                                if (steps.vars.drawSVG === '0%' || steps.vars.drawSVG === 0) {
                                    var tween = TweenMax.to(shape.node, +steps.duration, steps.vars);
                                    tween.eventCallback("onStart", function () {
                                        if (shape.data('initStrokeLinecap').toLowerCase() === 'square') {
                                            TweenMax.set(shape.node, {attr:{'stroke-linecap': 'round'}});
                                        };
                                        if (shape.data('initStrokeLinejoin').toLowerCase() === 'miter') {
                                            TweenMax.set(shape.node, {attr:{'stroke-linejoin': 'round'}});
                                        };
                                    });
                                } else if (steps.vars.drawSVG === '100%') {
                                    var tween = TweenMax.to(shape.node, +steps.duration, steps.vars);
                                    tween.eventCallback("onComplete", function () {
                                        if (shape.data('initStrokeLinecap').toLowerCase() === 'square') {
                                            TweenMax.set(shape.node, {attr:{'stroke-linecap': 'square'}});
                                        };
                                        if (shape.data('initStrokeLinejoin').toLowerCase() === 'miter') {
                                            TweenMax.set(shape.node, {attr:{'stroke-linejoin': 'miter'}});
                                        };
                                    });
                                } else {
                                    var tween = TweenMax.to(shape.node, +steps.duration, steps.vars);
                                };
                            } else {
                                var tween = TweenMax.to(shape.node, +steps.duration, steps.vars);
                            };
                        } else {
                            var tween = TweenMax.to(shape.node, +steps.duration, steps.vars);
                        };

                        tl_temp.add(tween, steps.position || '+=0');
                        defaultTL.add(tl_temp, 0);
                    });
                    shape.node.removeAttribute('data-animdata');
                };
            });
            mainTL.add(defaultTL, 0);
            defaultTL.duration(options.use_duration);
            if (options.morph && options.colorsWhenMorph) {
                mainTL.add(colorTL, 0);
                colorTL.duration(options.use_duration);
            };
            mainTL.delay(options.delay).repeat(options.use_repeat).repeatDelay(options.use_repeatDelay);
        } else {
            var shapes = svg.selectAll('circle, ellipse, g, image, line, path, polygon, polyline, rect, text, use');
            shapes.forEach(function(shape) {
                shape.node.removeAttribute('data-animdata');
            });
        };//end if animated

        //storing timelines
        holder.data('drawTL', drawTL);
        holder.data('mainTL', mainTL);

        //events on what element
        if (options.eventOn === 'self' || !options.eventOn) {
            options.event_elem = holder;
        } else if (options.eventOn === 'parent') {
            options.event_elem = holder.parent();
        } else if (options.eventOn === 'grandparent') {
            options.event_elem = holder.parent().parent();
        } else {
            options.event_elem = jQuery(options.eventOn);
        };

        //for WordPress
        if (isWP && holder.hasClass('livicon-evo-back-in-combined')) {
            var target_elem = holder.parent('.livicon-evo-combined');
            if (options.eventOn === 'self' || !options.eventOn) {
                options.event_elem = target_elem;
            } else if (options.eventOn === 'parent') {
                options.event_elem = target_elem.parent();
            } else if (options.eventOn === 'grandparent') {
                options.event_elem = target_elem.parent().parent();
            };
        };
        if (isWP && holder.parent().hasClass('livicon-evo-front-in-combined')) {
            var target_elem = holder.parent('.livicon-evo-front-in-combined');
            if (options.eventOn === 'self' || !options.eventOn) {
                options.event_elem = holder;
            } else if (options.eventOn === 'parent') {
                options.event_elem = target_elem.parent();
            } else if (options.eventOn === 'grandparent') {
                options.event_elem = target_elem.parent().parent();
            };
        };

        if (options.animated) {
            //if icon is not "morph"
            if (!options.morph) {

                //regular icon is clicked
                if (options.eventType === 'click') {
                    var _clickHandler = function() {
                        if (options.use_repeat === -1) {
                            if (!options.ending) {
                                if (options.drawn) {
                                    options.ending = true;
                                    holder.playLiviconEvo();
                                };
                            } else {
                                if (mainTL.isActive()) {
                                    mainTL.tweenTo(mainTL.duration(), {onComplete:
                                        function () {
                                            mainTL.pause().totalProgress(0);
                                            if (typeof options.afterAnim == 'function') {
                                                options.afterAnim();
                                            };
                                            options.ending = false;
                                        }
                                    });
                                };
                            };
                        } else {
                            if (options.drawn) {
                                holder.playLiviconEvo();
                                options.ending = false;
                            };
                        };
                    };
                    options.event_elem.on('click.LiviconEvo', _clickHandler);

                //regular icon is hovered
                } else if (options.eventType === 'hover') {
                    var _hoverInHandler = function() {
                        if (!options.ending) {
                            if (options.drawn) {
                                holder.playLiviconEvo();
                            };
                        };
                    };
                    var _hoverOutHandler = function() {
                        if (mainTL.isActive()) {
                            options.ending = true;
                            mainTL.tweenTo(mainTL.duration(), {onComplete:
                                function () {
                                    mainTL.pause().totalProgress(0);
                                    if (options.use_repeat === -1) {
                                        if (typeof options.afterAnim == 'function') {
                                            options.afterAnim();
                                        };
                                    };
                                    options.ending = false;
                                }
                            });
                        };
                    };

                    //if looped animation
                    if (options.use_repeat === -1) {
                        options.event_elem.on('mouseenter.LiviconEvo', _hoverInHandler).on('mouseleave.LiviconEvo', _hoverOutHandler);

                    //if not looped animation
                    } else {
                        options.event_elem.on('mouseenter.LiviconEvo', function () {
                            if (options.drawn) {
                                holder.playLiviconEvo();
                            };
                        });
                    };
                };

            // animated "morph" icon
            } else if (options.morph) {

                //"morph" icon is clicked
                if (options.eventType === 'click') {
                    var _clickHandler = function() {
                        if ( options.drawn ) {
                            holder.playLiviconEvo();
                        };
                    };
                    options.event_elem.on('click.LiviconEvo', _clickHandler);

                //"morph" icon is hovered
                } else if (options.eventType === 'hover') {
                    var _hoverInHandler = function() {
                        if (options.drawn) {
                            holder.playLiviconEvo();
                        };
                    };
                    var _hoverOutHandler = function() {
                        if (options.drawn) {
                            mainTL.reverse();
                        };
                    };
                    options.event_elem.on('mouseenter.LiviconEvo', _hoverInHandler).on('mouseleave.LiviconEvo', _hoverOutHandler);
                };
            };
        };//end if animated

        //changing colors on hover
        if (options.colorsOnHover) {
            var _hoverColorsIn = function() {
                if ( !drawTL.isActive() && options.drawn) {
                    shapes.forEach(function(shape) {
                        if ( !shape.hasClass('lievo-nohovercolor') ) {
                            var stroke = shape.data('actionStroke'),
                                fill = shape.data('actionFill');
                            if ( stroke && stroke !== 'none' ) {
                                TweenMax.to(shape.node, options.colorsHoverTime, {stroke: stroke});
                            };
                            if ( fill && fill !== 'none' && !fill.match(/url\(/) ) {
                                TweenMax.to(shape.node, options.colorsHoverTime, {fill: fill});
                            };
                        };
                    });
                };
            };
            var _hoverColorsOut = function() {
                if ( !drawTL.isActive() && options.drawn) {
                    shapes.forEach(function(shape) {
                        if ( !shape.hasClass('lievo-nohovercolor') ) {
                            var stroke = shape.data('curStroke'),
                                fill = shape.data('curFill');
                            if ( stroke && stroke !== 'none') {
                                TweenMax.to(shape.node, options.colorsHoverTime, {stroke: stroke});
                            };
                            if ( fill && fill !== 'none' && !fill.match(/url\(/) ) {
                                TweenMax.to(shape.node, options.colorsHoverTime, {fill: fill});
                            };
                        };
                    });
                };
            };
            options.event_elem.on('mouseenter.LiviconEvo', _hoverColorsIn ).on('mouseleave.LiviconEvo', _hoverColorsOut );
        };

        //changing stroke-width on hover
        if (options.strokeWidthFactorOnHover === 0 || options.strokeWidthFactorOnHover) {
            var _hoverStrokeWidthIn = function() {
                if ( !drawTL.isActive() && options.drawn) {
                    shapes.forEach(function(shape) {
                        if ( !shape.hasClass('lievo-nohoverstroke') ) {
                            var stroke = shape.data('hoverStrokeWidth');
                            if (stroke) {
                                TweenMax.to(shape.node, options.strokeWidthOnHoverTime, {attr:{'stroke-width': stroke}});
                            };
                        };
                    });
                };
            };
            var _hoverStrokeWidthOut = function() {
                if ( !drawTL.isActive() && options.drawn) {
                    shapes.forEach(function(shape) {
                        if ( !shape.hasClass('lievo-nohoverstroke') ) {
                            var stroke = shape.data('curStrokeWidth');
                            if (stroke) {
                                TweenMax.to(shape.node, options.strokeWidthOnHoverTime, {attr:{'stroke-width': stroke}});
                            };
                        };
                    });
                };
            };
            options.event_elem.on('mouseenter.LiviconEvo', _hoverStrokeWidthIn ).on('mouseleave.LiviconEvo', _hoverStrokeWidthOut );
        };

        //adding touch events
        if (options.touchEvents) {
            if ( options.animated ||
                options.colorsOnHover ||
                (options.strokeWidthFactorOnHover === 0 || options.strokeWidthFactorOnHover)
                ) {
                options.event_elem.on('touchstart.LiviconEvo', function(e) {
                    e.preventDefault();
                    options.event_elem.trigger('mouseenter.LiviconEvo');
                }).on('touchend.LiviconEvo', function() {
                    options.event_elem.trigger('mouseleave.LiviconEvo');
                    try {
                        options.event_elem[0].click();
                    } catch (err) {
                        if (typeof document.createEvent  == 'function') {
                            var evt = document.createEvent('MouseEvents');
                            evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                            options.event_elem.get(0).dispatchEvent(evt);
                        } else if (typeof window.MouseEvent == 'function') {
                            var evt = new MouseEvent('click', {
                              'bubbles': true,
                              'cancelable': true
                            });
                            options.event_elem.get(0).dispatchEvent(evt);
                        };
                    };
                });
            };
        }; //end if touchEvents

        //making icons sharp
        var pos = holder.find('svg')[0].getScreenCTM();
        if (pos) {
            //fix sub-pixel render bug in Firefox and IE
            var left_shift = (-pos.e % 1),
                top_shift = (-pos.f % 1);
            if (left_shift == 0) {
                left_shift = 0;
            } else if (left_shift <= -0.5) {
                left_shift = left_shift+1;
            };
            if (top_shift == 0) {
                top_shift = 0;
            } else if (top_shift <= -0.5) {
                top_shift = top_shift+1;
            };
            holder.find('svg').css({left: left_shift + 'px', top: top_shift + 'px'});

            //shift for pixel sharp
            if (options.tryToSharpen) {
                var bb = svg.select('.lievo-checkshift'),
                    ptrn = svg.select('.lievo-morphpattern'),
                    mtx = Snap.matrix();

                if (bb) {
                    bb = bb.getBBox();
                    if( (bb.x + half_stroke) * pos.a % 1 !== 0 ) {
                        TweenMax.set(svg.select('g.lievo-setsharp').node, {
                            x: '+=' + ( ( (bb.x - half_stroke) * pos.a % 1 ) / pos.a || 0 ),
                            svgOrigin: svg_center_origin
                        });
                        mtx.e = ( ( (bb.x - half_stroke) * pos.a % 1 ) / pos.a || 0 );
                    };
                    if( (bb.y + half_stroke) * pos.d % 1 !== 0 ) {
                        TweenMax.set(svg.select('g.lievo-setsharp').node, {
                            y: '+=' + ( ( (bb.y - half_stroke) * pos.d % 1 ) / pos.d || 0 ),
                            svgOrigin: svg_center_origin
                        });
                        mtx.f = ( ( (bb.y - half_stroke) * pos.d % 1 ) / pos.d || 0 );
                    };
                    if (ptrn) {
                        ptrn.attr('patternTransform', mtx.toString());
                    };
                };
            };
        };

        //draw lines of an icon
        if (options.drawOnViewport && !options.drawOnce) {
            //calculating viewport's shift
            var shift, svg_h = holder.find('svg').get(0).getBoundingClientRect().height;
            switch (options.viewportShift) {
                case 'none':
                case false: {
                    shift = 1;
                    break;
                }
                case 'one-half':
                case 'oneHalf': {
                    shift = svg_h/2;
                    break;
                }
                case 'one-third':
                case 'oneThird': {
                    shift = svg_h/3;
                    break;
                }
                case 'full': {
                    shift = svg_h;
                    break;
                }
                default: {//one-half
                    shift = svg_h/2;
                    break;
                }
            };
            var checkViewport = function () {
                if (!options.drawOnce) {
                    var win_h = jQuery(window).height();
                    if (shift > win_h) {
                        shift = win_h - 10;
                    };
                    if ( verge.inViewport(holder, -shift) ) {
                        holder.pauseLiviconEvo();
                        holder.drawLiviconEvo();
                        options.drawOnce = true;
                    };
                };
            };
            checkViewport();
            jQuery(window).on('resize scroll', function () {
                checkViewport();
            });
        } else {
            holder.css('visibility', 'visible');
            options.drawOnce = true;
            options.drawn = true;
            if (options.autoPlay) {
                holder.playLiviconEvo();
            };
        };
    };//end _createLiviconEvo()

    //the jQuery plugin
    jQuery.fn.extend({

        //The main method. Have to be called first before any other ones
        addLiviconEvo: function (opt, val) {

            if (arguments.length < 2) {
                if ( opt === Object(opt) ) {
                    var js_options = opt;
                } else {
                    var js_options = {};
                };
            } else {
                if ( opt === Object(opt) ) {
                    var js_options = opt;
                } else {
                    var js_options = {};
                    js_options[opt] = val;
                };
            };

            return this.each(function() {
                var holder = jQuery(this),
                    init_options = holder.data('options'),
                    saved_options = holder.data('saved_options'),
                    options = {};

                //adding class for CSS styling
                holder.addClass('livicon-evo-holder');

                //Unbind previously attached events
                if (saved_options && saved_options.event_elem) {
                    saved_options.event_elem.off('.LiviconEvo');
                    saved_options.event_elem = undefined;
                };

                //create object with options from data-options attribute
                if (!!init_options) {
                    init_options = init_options.split(';');
                    init_options.forEach(function(property) {
                        var tmp = property.trim().split(/:(.+)/);
                        if (!!tmp[0] && !!tmp[1]) {
                            options[tmp[0].trim()] = tmp[1].trim();
                        };
                    });
                };

                //combine all options from defaults, from data-options attribute and any JavaScript passed
                options = jQuery.extend( cloneObj(def_options), options, js_options );

                //check for icon name in init options
                if (!options.name) {
                    holder.addClass('livicon-evo-error').html('<span><acronym title="Please check the &quot;name&quot; option of your SVG LivIconEvo file.">Name Error</acronym></span>');
                    return;
                };
                if ( !options.name.match(/(\.svg)$/) ) {
                    options.name += '.svg';
                };

                //Convert string options to numbers and boolean where necessary
                for (var key in options) {
                    if ( options.hasOwnProperty(key) ) {
                        options[key] = strToNum(options[key]);
                        options[key] = strToBool(options[key]);
                    };
                };

                //add service options (do NOT pass them directly!)
                if ( options.name.match(/morph+(-)/) ) {
                    options.morph = true;
                } else {
                    options.morph = false;
                };
                options.drawOnce = false;
                options.drawn = false;
                options.ending = false;

                //Storing options as object assigned to initial element (div with class .livicon-evo for example)
                holder.removeData('saved_options');
                holder.data('saved_options', options);

                //execute beforeAdd callback function
                if (typeof options.beforeAdd == 'function') {
                    options.beforeAdd();
                };

                //load SVG icon file into a page and create LiviconEvo
                jQuery.ajax({
                    url: options.pathToFolder + options.name,
                    type: 'GET',
                    dataType: 'text',
                    global: true,
                    success: function (code) {
                        holder.removeClass('livicon-evo-error');

                        //make IDs unique
                        var arr = code.match(/(id=[\"'](.*?)[\"'])/gi);
                        if (!!arr) {
                            arr.forEach(function (ndx) {
                                ndx = ndx.replace(/id=[\"']/i, '').replace(/[\"']/, '');
                                var re = new RegExp(ndx, 'g');
                                code = code.replace( re, ndx +'_'+ uniqueNum() );
                            });
                        };

                        //creating Snap.Fragment
                        code = Snap.parse(code);

                        //adding result SVG code into the holder
                        var wrapper = holder.empty().append('<div>').children().addClass('lievo-svg-wrapper');
                        try {
                            wrapper[0].appendChild(code.node);
                        } catch (err) {
                            wrapper.html(code.node);
                        }

                        //creating LiviconEvo
                        _createLiviconEvo (holder, options);

                        //execute afterAdd callback function
                        if (typeof options.afterAdd == 'function') {
                            options.afterAdd();
                        };
                    },
                    error: function(xhr, err){
                        holder.addClass('livicon-evo-error');
                        if (xhr.status === 0 && err === 'error') {
                            holder.html('<span><acronym title="Please use LivIconsEvo script on a working local or internet connected webserver, it does NOT work directly opened from a HDD.">Network Error</acronym></span>');
                            return;
                        } else if (xhr.status === 404 && err === 'error') {
                            holder.html('<span><acronym title="Please check the &quot;name&quot; option and/or default &quot;pathToFolder&quot; one where all SVG LivIconEvo files are placed.">Not Found</acronym></span>');
                            return;
                        } else {
                            holder.html('<span><acronym title="There is an unknown error. Please check for messages in Console (F12 key).">Unknown Error</acronym></span>');
                            return;
                        };
                    }
                });//end AJAX

            });//end return

        },//end addLiviconEvo

        //the method for updating LiviconEvo with new (if any) passed options
        updateLiviconEvo: function (opt, val) {

            if (arguments.length < 2) {
                if ( opt === Object(opt) ) {
                    var js_options = opt;
                } else {
                    var js_options = {};
                };
            } else {
                if ( opt === Object(opt) ) {
                    var js_options = opt;
                } else {
                    var js_options = {};
                    js_options[opt] = val;
                };
            };
            return this.each(function() {
                var holder = jQuery(this),
                    options = holder.data('saved_options');

                //if previously created
                if (options) {

                    //Unbind previously attached events
                    if (options.event_elem) {
                        options.event_elem.off('.LiviconEvo');
                    };
                    options.event_elem = undefined;

                    //Clone options as a new object
                    options = cloneObj(options);
                    //combine options from saved and any new ones JavaScript passed
                    options = jQuery.extend( options, js_options );
                    if ( !options.name.match(/(\.svg)$/) ) {
                        options.name += '.svg';
                    };

                    //Convert string options to numbers and boolean where necessary
                    for (var key in options) {
                        if ( options.hasOwnProperty(key) ) {
                            options[key] = strToNum(options[key]);
                            options[key] = strToBool(options[key]);
                        };
                    };

                    //add inner options (do NOT pass them directly!)
                    if (options.name.match(/morph+(-)/)) {
                        options.morph = true;
                    } else {
                        options.morph = false;
                    };
                    options.drawOnce = false;
                    options.drawn = false;
                    options.ending = false;

                    //Storing options as object assigned to initial element (div for ex.)
                    holder.data('saved_options', options);

                    //execute beforeUpdate callback function
                    if (typeof options.beforeUpdate == 'function') {
                        options.beforeUpdate();
                    };

                    //load SVG icon file into a page and create LiviconEvo
                    jQuery.ajax({
                        url: options.pathToFolder + options.name,
                        type: 'GET',
                        dataType: 'text',
                        global: true,
                        success: function (code) {
                            holder.addClass('livicon-evo-holder').removeClass('livicon-evo-error');

                            //make IDs unique
                            var arr = code.match(/(id=[\"'](.*?)[\"'])/gi);
                            if (!!arr) {
                                arr.forEach(function (ndx) {
                                    ndx = ndx.replace(/id=[\"']/i, '').replace(/[\"']/, '');
                                    var re = new RegExp(ndx, 'g');
                                    code = code.replace( re, ndx +'_'+ uniqueNum() );
                                });
                            };

                            //creating Snap.Fragment
                            code = Snap.parse(code);

                            //adding result SVG code into the holder
                            var wrapper = holder.empty().append('<div>').children().addClass('lievo-svg-wrapper');
                            try {
                                wrapper[0].appendChild(code.node);
                            } catch (err) {
                                wrapper.html(code.node);
                            }

                            //creating LiviconEvo
                            _createLiviconEvo (holder, options);

                            //execute afterUpdate callback function
                            if (typeof options.afterUpdate == 'function') {
                                options.afterUpdate();
                            };
                        },
                        error: function(xhr, err){
                            holder.addClass('livicon-evo-error');
                            if (xhr.status === 0 && err === 'error') {
                                holder.html('<span><acronym title="Please use LivIconsEvo script on a working local or internet connected webserver, it does NOT work directly opened from a HDD.">Network Error</acronym></span>');
                                return;
                            } else if (xhr.status === 404 && err === 'error') {
                                holder.html('<span><acronym title="Please check the &quot;name&quot; option and/or default &quot;pathToFolder&quot; one where all SVG LivIconEvo files are placed.">Not Found</acronym></span>');
                                return;
                            } else {
                                holder.html('<span><acronym title="There is an unknown error. Please check for messages in Console (F12 key).">Unknown Error</acronym></span>');
                                return;
                            };
                        }
                    });//end AJAX

                } else {//first creation
                    holder.addLiviconEvo(js_options);
                };

            });//end return

        },//end updateLiviconEvo

        //the method for changing of LiviconEvo (through erase, update and draw)
        changeLiviconEvo: function (opt, val) {

            if (arguments.length < 2) {
                if ( opt === Object(opt) ) {
                    var js_options = opt;
                } else {
                    var js_options = {};
                };
            } else {
                if ( opt === Object(opt) ) {
                    var js_options = opt;
                } else {
                    var js_options = {};
                    js_options[opt] = val;
                };
            };

            //Convert string options to numbers and boolean where necessary
            for (var key in js_options) {
                if ( js_options.hasOwnProperty(key) ) {
                    js_options[key] = strToNum(js_options[key]);
                    js_options[key] = strToBool(js_options[key]);
                };
            };

            return this.each(function() {
                var holder = jQuery(this),
                    data = holder.data(),
                    options = data.saved_options;

                //if previously created
                if (options) {

                    var drawTL = data.drawTL,
                        mainTL = data.mainTL,
                        shapes = holder.find('circle, ellipse, line, path, polygon, polyline, rect');


                    //Unbind previously attached events
                    if (options.event_elem) {
                        options.event_elem.off('.LiviconEvo');
                    };
                    options.event_elem = undefined;

                    //Clone saved options as a new object
                    options = cloneObj(options);

                    //combine saved options and new ones JavaScript passed
                    options = jQuery.extend( options, js_options );

                    drawTL.pause().totalProgress(0).clear();
                    mainTL.pause().totalProgress(0);
                    options.drawn = true;
                    if (js_options.drawOnViewport == false) {
                        options.drawOnViewport = false;
                    } else {
                        options.drawOnViewport = true;
                    };

                    holder.eraseLiviconEvo(options);
                    var st = setTimeout(function(){
                        holder.updateLiviconEvo(options);
                        clearTimeout(st);
                        }, (options.eraseDelay + options.eraseTime + options.eraseStagger*shapes.length) * 1000
                    );

                } else {//first creation
                    holder.addLiviconEvo(js_options);
                };

            });//end return
        },//end changeLiviconEvo

        //the method for line drawing of LiviconEvo
        drawLiviconEvo: function (opt, val, force) {
            if (arguments.length <= 1) {
                if ( opt === Object(opt) ) {
                    var js_options = opt;
                } else {
                    var js_options = {};
                    js_options.force = opt;
                };
            } else if (arguments.length === 2){
                if ( opt === Object(opt) ) {
                    var js_options = opt;
                    js_options.force = val;
                } else {
                    var js_options = {};
                    js_options[opt] = val;
                    if (!js_options.force) {
                        js_options.force = false;
                    };
                };
            } else {
                var js_options = {};
                js_options[opt] = val;
                js_options.force = force;
            };

            //Convert string options to numbers and boolean where necessary
            for (var key in js_options) {
                if ( js_options.hasOwnProperty(key) ) {
                    js_options[key] = strToNum(js_options[key]);
                    js_options[key] = strToBool(js_options[key]);
                };
            };

            return this.each(function() {
                var holder = jQuery(this),
                    data = holder.data(),
                    options = data.saved_options;

                if (options) {
                    var drawTL = data.drawTL,
                        mainTL = data.mainTL,
                        drawDelay = (js_options.drawDelay === 0 || js_options.drawDelay) ? js_options.drawDelay : options.drawDelay,
                        drawTime = (js_options.drawTime === 0 || js_options.drawTime) ? js_options.drawTime : options.drawTime,
                        drawStagger = (js_options.drawStagger === 0 || js_options.drawStagger) ? js_options.drawStagger : options.drawStagger,
                        drawStartPoint = js_options.drawStartPoint ? js_options.drawStartPoint : options.drawStartPoint,
                        drawColor = js_options.drawColor ? js_options.drawColor : options.drawColor,
                        drawColorTime = (js_options.drawColorTime === 0 || js_options.drawColorTime) ? js_options.drawColorTime : options.drawColorTime,
                        drawEase = js_options.drawEase ? js_options.drawEase : options.drawEase,
                        beforeDraw = js_options.beforeDraw ? js_options.beforeDraw : options.beforeDraw,
                        afterDraw = js_options.afterDraw ? js_options.afterDraw : options.afterDraw,
                        duringDraw = js_options.duringDraw ? js_options.duringDraw : options.duringDraw,
                        drawReversed = (typeof js_options.drawReversed != 'undefined') ? js_options.drawReversed : options.drawReversed,
                        shapes = holder.find('circle, ellipse, line, path, polygon, polyline, rect').not('.lievo-morphpattern').not('.lievo-donotdraw').not('.lievo-nohovercolor').get();

                    //to prevent firing onUpdate callbacks before onStart ones
                    drawTL.eventCallback('onStart', null);
                    drawTL.eventCallback('onComplete', null);
                    drawTL.eventCallback('onUpdate', null);

                    if (drawDelay <= 0) {drawDelay = 0.001};
                    if (drawTime <= 0) {drawTime = 0.001};

                    if ( strToBool(js_options.force) ) {
                        drawTL.clear();
                        drawTL.pause().totalProgress(0);
                        mainTL.pause().totalProgress(0);
                        options.drawn = false;
                    };

                    if (!drawTL.isActive() && !mainTL.isActive() && !options.drawn) {

                        if (drawReversed) {
                            shapes.reverse();
                        };
                        if (options.morph && options.colorsWhenMorph) {
                            var snap_shapes = Snap(holder.find('svg')[0]).selectAll('circle, ellipse, image, line, path, polygon, polyline, rect, text, use');
                            snap_shapes.forEach(function(shape) {
                                shape.data('curFill', jQuery(shape.node).attr('fill'));
                                shape.data('curStroke', shape.attr('stroke'));
                                shape.data('curOpacity', shape.attr('opacity'));
                            });
                            var same_color = Snap(holder.find('svg')[0]).select('.lievo-checkshift');
                            same_color = same_color.data('actionStroke');
                        };


                        var _tweenStart = function() {
                            var snap_target = Snap(this.target);
                            if (isIE || isEdge) {
                                if (snap_target.data('initStrokeLinecap').toLowerCase() === 'square') {
                                    TweenMax.set(this.target, {attr:{'stroke-linecap': 'round'}});
                                };
                                if (snap_target.data('initStrokeLinejoin').toLowerCase() === 'miter') {
                                    TweenMax.set(this.target, {attr:{'stroke-linejoin': 'round'}});
                                };

                            };
                            if (drawColor !== 'same') {
                                TweenMax.set(this.target, {strokeOpacity: 1, stroke: drawColor});
                                if (snap_target.data('curStroke') === 'none') {
                                    snap_target.attr({'stroke-width': 1/options.scaleStrokeFactor});
                                };
                            } else {
                                TweenMax.set(this.target, {strokeOpacity: 1});
                                if (snap_target.data('curStroke') === 'none') {
                                    snap_target.attr({'stroke-width': 1/options.scaleStrokeFactor, stroke: snap_target.data('curFill')});
                                };
                                if (options.style === 'solid' && snap_target.hasClass('lievo-solidbg')) {
                                    if (options.morph && options.colorsWhenMorph && options.morphState === 'end') {
                                        if (same_color) {
                                            snap_target.attr({stroke: same_color});
                                        } else {
                                            snap_target.attr({stroke: options.solidColorAction});
                                        };
                                    } else {
                                        snap_target.attr({stroke: options.solidColor});
                                    };
                                };
                            };
                        };

                        var _tweenComplete = function() {
                            var snap_target = Snap(this.target);
                            if (isIE || isEdge) {
                                if (snap_target.data('initStrokeLinecap').toLowerCase() === 'square') {
                                    TweenMax.set(this.target, {attr:{'stroke-linecap': 'square'}});
                                };
                                if (snap_target.data('initStrokeLinejoin').toLowerCase() === 'miter') {
                                    TweenMax.set(this.target, {attr:{'stroke-linejoin': 'miter'}});
                                };
                            };
                            TweenMax.to(this.target, drawColorTime, {stroke: snap_target.data('curStroke'), fillOpacity: 1});
                        };

                        var _allTweensComplete = function() {
                            options.drawn = true;
                        };

                        //Clear to avoid conflicts with eraseLiviconEvo
                        drawTL.clear();

                        //add beforeDraw callback function
                        if (typeof beforeDraw == 'function') {
                            drawTL.eventCallback('onStart', beforeDraw);
                        };

                        //add duringDraw callback function
                        if (typeof duringDraw == 'function') {
                            drawTL.eventCallback('onUpdate', duringDraw);
                        };

                        //add afterDraw callback function
                        drawTL.eventCallback('onComplete', function () {
                            if (typeof afterDraw == 'function') {
                                afterDraw();
                            };
                            if (options.autoPlay) {
                                holder.playLiviconEvo();
                            };
                        });

                        drawTL.delay(drawDelay);
                        TweenMax.set(shapes, {strokeOpacity: 0, fillOpacity: 0});
                        holder.css('visibility', 'visible');

                        if (typeof drawEase == 'string') {
                            drawEase = parseEase(drawEase);
                        };

                        switch (drawStartPoint) {
                            case 'middle': {
                                //as always due to IE9+ we need a special decisions :)
                                TweenMax.set(shapes, {drawSVG:"0% 100%"});
                                drawTL.staggerFrom(shapes, drawTime, {drawSVG:"50% 50%", ease: drawEase, onStart: _tweenStart, onComplete: _tweenComplete}, drawStagger, 0, _allTweensComplete);
                                break;
                            }
                            case 'end': {
                                drawTL.staggerFromTo(shapes, drawTime, {drawSVG:"100% 100%"}, {drawSVG:"0% 100%", ease: drawEase, onStart: _tweenStart, onComplete: _tweenComplete}, drawStagger, 0, _allTweensComplete);
                                break;
                            }
                            default: {// including 'start' value
                                drawTL.staggerFromTo(shapes, drawTime, {drawSVG:"0% 0%"}, {drawSVG:"0% 100%", ease: drawEase, onStart: _tweenStart, onComplete: _tweenComplete}, drawStagger, 0, _allTweensComplete);
                            }
                        };
                        drawTL.restart(true);
                    };
                } else {
                    js_options.drawOnViewport = true;
                    holder.addLiviconEvo(js_options);
                };
            });//end return
        },//end drawLiviconEvo

        //the method for erasing (disappearing) of LiviconEvo
        eraseLiviconEvo: function (opt, val, force) {
            if (arguments.length <= 1) {
                if ( opt === Object(opt) ) {
                    var js_options = opt;
                } else {
                    var js_options = {};
                    js_options.force = opt;
                };
            } else if (arguments.length === 2){
                if ( opt === Object(opt) ) {
                    var js_options = opt;
                    js_options.force = val;
                } else {
                    var js_options = {};
                    js_options[opt] = val;
                    if (!js_options.force) {
                        js_options.force = false;
                    };
                };
            } else {
                var js_options = {};
                js_options[opt] = val;
                js_options.force = force;
            };

            //Convert string options to numbers and boolean where necessary
            for (var key in js_options) {
                if ( js_options.hasOwnProperty(key) ) {
                    js_options[key] = strToNum(js_options[key]);
                    js_options[key] = strToBool(js_options[key]);
                };
            };

            return this.each(function() {
                var holder = jQuery(this),
                    data = holder.data(),
                    options = data.saved_options;

                if (options) {
                    var drawTL = data.drawTL,
                        mainTL = data.mainTL,
                        eraseDelay = (js_options.eraseDelay === 0 || js_options.eraseDelay) ? js_options.eraseDelay : options.eraseDelay,
                        eraseTime = (js_options.eraseTime === 0 || js_options.eraseTime) ? js_options.eraseTime : options.eraseTime,
                        eraseStagger = (js_options.eraseStagger === 0 || js_options.eraseStagger) ? js_options.eraseStagger : options.eraseStagger,
                        eraseStartPoint = js_options.eraseStartPoint ? js_options.eraseStartPoint : options.eraseStartPoint,
                        eraseEase = js_options.eraseEase ? js_options.eraseEase : options.eraseEase,
                        beforeErase = js_options.beforeErase ? js_options.beforeErase : options.beforeErase,
                        afterErase = js_options.afterErase ? js_options.afterErase : options.afterErase,
                        duringErase = js_options.duringErase ? js_options.duringErase : options.duringErase,
                        eraseReversed = (typeof js_options.eraseReversed != 'undefined') ? js_options.eraseReversed : options.eraseReversed,
                        shapes = holder.find('circle, ellipse, line, path, polygon, polyline, rect').not('.lievo-donotdraw').not('.lievo-nohovercolor').get();

                    //to prevent firing onUpdate callbacks before onStart ones
                    if (eraseDelay <= 0) {eraseDelay = 0.001};
                    drawTL.eventCallback('onStart', null);
                    drawTL.eventCallback('onComplete', null);
                    drawTL.eventCallback('onUpdate', null);

                    if ( strToBool(js_options.force) ) {
                        drawTL.clear();
                        drawTL.pause().totalProgress(0);
                        mainTL.pause().totalProgress(0);
                        options.drawn = true;
                    };

                    if (!drawTL.isActive() && !mainTL.isActive() && options.drawn) {
                        if (eraseReversed) {
                            shapes.reverse();
                        };

                        if (options.morph && options.colorsWhenMorph) {
                            var snap_shapes = Snap(holder.find('svg')[0]).selectAll('circle, ellipse, image, line, path, polygon, polyline, rect, text, use');
                            snap_shapes.forEach(function(shape) {
                                shape.data('curFill', jQuery(shape.node).attr('fill'));
                                shape.data('curStroke', shape.attr('stroke'));
                                shape.data('curOpacity', shape.attr('opacity'));
                            });
                        };

                        var _tweenStart = function() {
                            if (Snap(this.target).data('curStroke') === 'none') {
                                Snap(this.target).attr({'stroke-width': 1/options.scaleStrokeFactor, stroke: Snap(this.target).data('curFill')});
                            };
                            TweenMax.to(this.target, eraseTime, {fillOpacity: 0});
                        };

                        var _tweenComplete = function() {
                            TweenMax.set(this.target, {strokeOpacity: 0, fillOpacity: 0});
                            if (Snap(this.target).data('curStroke') === 'none') {
                                TweenMax.set(this.target, {'stroke-width': 0, stroke:'none'});
                            };
                        };

                        var _allTweensComplete = function() {
                            options.drawn = false;
                        };

                        //Clear to avoid conflicts with drawLiviconEvo
                        drawTL.clear();

                        //add beforeErase callback function
                        if (typeof beforeErase == 'function') {
                            drawTL.eventCallback('onStart', beforeErase);
                        };

                        //add afterErase callback function
                        if (typeof afterErase == 'function') {
                            drawTL.eventCallback('onComplete', afterErase);
                        };

                        //add duringErase callback function
                        if (typeof duringErase == 'function') {
                            drawTL.eventCallback('onUpdate', duringErase);
                        };

                        if (typeof eraseEase == 'string') {
                            eraseEase = parseEase(eraseEase);
                        };

                        drawTL.delay(eraseDelay);
                        TweenMax.set(shapes, {strokeOpacity: 1, fillOpacity: 1});
                        holder.css('visibility', 'visible');

                        switch (eraseStartPoint) {
                            case 'middle': {
                                drawTL.staggerFromTo(shapes, eraseTime, {drawSVG:"0% 100%"}, {drawSVG:"50% 50%", ease: eraseEase, onStart: _tweenStart, onComplete: _tweenComplete}, options.eraseStagger, 0, _allTweensComplete);
                                break;
                            }
                            case 'end': {
                                drawTL.staggerFromTo(shapes, eraseTime, {drawSVG:"0% 100%"}, {drawSVG:"100% 100%", ease: eraseEase, onStart: _tweenStart, onComplete: _tweenComplete}, options.eraseStagger, 0, _allTweensComplete);
                                break;
                            }
                            default: {// including 'start' value
                                drawTL.staggerFromTo(shapes, eraseTime, {drawSVG:"0% 100%"}, {drawSVG:0, ease: eraseEase, onStart: _tweenStart, onComplete: _tweenComplete}, options.eraseStagger, 0, _allTweensComplete);
                            }
                        };
                        drawTL.restart(true);
                    };
                } else {
                    holder.addLiviconEvo(js_options);
                };
            });//end return
        },//end eraseLiviconEvo

        //the method to animate LiviconEvo
        playLiviconEvo: function (opt, val, force) {
            if (arguments.length <= 1) {
                if ( opt === Object(opt) ) {
                    var js_options = opt;
                } else {
                    var js_options = {};
                    js_options.force = opt;
                };
            } else if (arguments.length === 2){
                if ( opt === Object(opt) ) {
                    var js_options = opt;
                    js_options.force = val;
                } else {
                    var js_options = {};
                    js_options[opt] = val;
                    if (!js_options.force) {
                        js_options.force = false;
                    };
                };
            } else {
                var js_options = {};
                js_options[opt] = val;
                js_options.force = force;
            };

            //Convert string options to numbers and boolean where necessary
            for (var key in js_options) {
                if ( js_options.hasOwnProperty(key) ) {
                    js_options[key] = strToNum(js_options[key]);
                    js_options[key] = strToBool(js_options[key]);
                };
            };

            return this.each(function() {
                var holder = jQuery(this),
                    data = holder.data(),
                    options = data.saved_options;

                if (options) {
                    var drawTL = data.drawTL,
                        mainTL = data.mainTL,
                        duration = (js_options.duration === 0 || js_options.duration) ? js_options.duration : options.duration,
                        delay = (js_options.delay === 0 || js_options.delay) ? js_options.delay : options.delay,
                        repeat = (js_options.repeat === 0 || js_options.repeat) ? js_options.repeat : options.repeat,
                        repeatDelay = (js_options.repeatDelay === 0 || js_options.repeatDelay) ? js_options.repeatDelay : options.repeatDelay,
                        beforeAnim = js_options.beforeAnim ? js_options.beforeAnim : options.beforeAnim,
                        afterAnim = js_options.afterAnim ? js_options.afterAnim : options.afterAnim,
                        duringAnim = js_options.duringAnim ? js_options.duringAnim : options.duringAnim;

                    if (options.animated) {

                        if ( strToBool(js_options.force) ) {
                            drawTL.pause().totalProgress(1);
                            mainTL.pause().totalProgress(0);
                            options.drawn = true;
                        };

                        if (duration === 'default') {
                            duration = options.def_duration;
                        };
                        //getting icon's nested time-lines and adjust duration
                        var nestedTLs = mainTL.getChildren(false, false, true);
                        nestedTLs.forEach(function (tl) {
                            tl.duration( duration );
                        })

                        //to prevent firing onUpdate callback before onStart one
                        if (delay <= 0) {delay = 0.001};
                        mainTL.delay( delay );

                        if (repeat === 'default') {
                            repeat = options.def_repeat;
                        } else if (repeat === 'loop') {
                            repeat = -1;
                        };

                        if (repeatDelay === 'default') {
                            repeatDelay = options.def_repeatDelay;
                        };
                        //to prevent firing onUpdate callback before onStart one
                        if (repeatDelay <= 0) {repeatDelay = 0.001};

                        if (!options.morph) {// not morph icon

                            mainTL.repeat( repeat ).repeatDelay( repeatDelay );

                            //add beforeAnim callback function
                            if (typeof beforeAnim == 'function') {
                                mainTL.eventCallback("onStart", beforeAnim);
                            };

                            //add afterAnim callback function (only fired when not looped)
                            if (typeof afterAnim == 'function') {
                                if (repeat !== -1) {
                                    mainTL.eventCallback("onComplete", afterAnim);
                                };
                            };

                            //add duringAnim callback function
                            if (typeof duringAnim == 'function') {
                                mainTL.eventCallback("onUpdate", duringAnim);
                            };

                            if ( !drawTL.isActive() && !mainTL.isActive() && options.drawn) {
                                var prog = mainTL.totalProgress();
                                if (mainTL.paused() && prog > 0 && prog < 1) {
                                    mainTL.resume();
                                } else {
                                    mainTL.restart(true);
                                    options.ending = true;
                                };
                            };

                        } else {//morph icon

                            //morph icons can't be repeated or looped
                            mainTL.repeat(0).repeatDelay(0);

                            //add beforeAnim callback function
                            if (typeof beforeAnim == 'function') {
                                mainTL.eventCallback("onStart", beforeAnim);
                            };

                            //add duringAnim callback function
                            if (typeof duringAnim == 'function') {
                                mainTL.eventCallback("onUpdate", duringAnim);
                            };

                            //add afterAnim callback function
                            mainTL.eventCallback("onComplete", function () {
                                if (options.morphState === 'end') {
                                    options.curMorphState = 'start';
                                } else {
                                    options.curMorphState = 'end';
                                };
                                if (typeof afterAnim == 'function') {
                                    afterAnim();
                                };
                            });
                            mainTL.eventCallback("onReverseComplete", function () {
                                if (options.morphState === 'end') {
                                    options.curMorphState = 'end';
                                } else {
                                    options.curMorphState = 'start';
                                };
                                if (typeof afterAnim == 'function') {
                                    afterAnim();
                                };
                            });

                            if ( !drawTL.isActive() && !mainTL.isActive() && options.drawn) {
                                var prog = mainTL.progress();
                                if (prog === 0) {
                                    mainTL.restart(true);
                                } else if (mainTL.paused() && prog > 0 && prog < 1) {
                                    mainTL.resume();
                                } else {
                                    mainTL.pause().reverse(0);
                                };
                            };
                        };
                    };
                } else {
                    holder.addLiviconEvo(js_options);
                };
            });//end return
        },//end playLiviconEvo

        //the method to stop LiviconEvo
        stopLiviconEvo: function () {
            return this.each(function() {
                var holder = jQuery(this),
                    data = holder.data(),
                    options = data.saved_options;
                if (options) {
                    var mainTL = data.mainTL;
                    if (!options.morph) {
                        mainTL.pause().totalProgress(0);
                        options.ending = false;
                    } else {
                        mainTL.pause().progress(0);
                    };
                } else {
                    holder.addLiviconEvo();
                };
            });
        },//end stopLiviconEvo

        //the method to pause LiviconEvo
        pauseLiviconEvo: function () {
            return this.each(function() {
                var mainTL = jQuery(this).data('mainTL');
                if (!!mainTL) {
                    mainTL.pause();
                };
            });
        },//end pauseLiviconEvo

        //the method to resume LiviconEvo
        resumeLiviconEvo: function () {
            return this.each(function() {
                var mainTL = jQuery(this).data('mainTL');
                if (!!mainTL) {
                    mainTL.resume();
                };
            });
        },//end resumeLiviconEvo

        //the method to remove LiviconEvo
        removeLiviconEvo: function(opt, val, total) {
            if (arguments.length <= 1) {
                if ( opt === Object(opt) ) {
                    var js_options = opt;
                } else {
                    var js_options = {};
                    js_options.total = opt;
                };
            } else if (arguments.length === 2){
                if ( opt === Object(opt) ) {
                    var js_options = opt;
                    js_options.total = val;
                } else {
                    var js_options = {};
                    js_options[opt] = val;
                    if (!js_options.total) {
                        js_options.total = false;
                    };
                };
            } else {
                var js_options = {};
                js_options[opt] = val;
                js_options.total = total;
            };

            return this.each(function() {
                var holder = jQuery(this),
                    options = holder.data('saved_options');

                if (options) {
                    var beforeRemove = js_options.beforeRemove ? js_options.beforeRemove : options.beforeRemove,
                        afterRemove = js_options.afterRemove ? js_options.afterRemove : options.afterRemove;

                    //Unbind previously attached events
                    if (options.event_elem) {
                        options.event_elem.off('.LiviconEvo');
                    };
                    options.event_elem = undefined;

                    //execute beforeRemove callback function
                    if (typeof beforeRemove == 'function') {
                        beforeRemove();
                    };

                    holder.removeData('saved_options drawTL mainTL');

                    if ( strToBool(js_options.total) ) {
                        holder.remove();
                    } else {
                        holder.empty();
                    };

                    //execute afterRemove callback function
                    if (typeof afterRemove == 'function') {
                        afterRemove();
                    };
                };
            });//end return
        },//end removeLiviconEvo

        //the method to get/set current morph icon state
        //returns: 'start' or 'end' for morph icons
        liviconEvoState: function (setter) {
            if (arguments.length === 0) {
                return jQuery(this).data('saved_options').curMorphState;
            } else if (arguments.length >= 1){
                return this.each(function() {
                    var holder = jQuery(this),
                        options = holder.data('saved_options'),
                        mainTL = jQuery(this).data('mainTL');
                    if (setter.toLowerCase() === 'start') {
                        if (!!mainTL && options.morph) {
                            if (options.morphState === 'end') {
                                mainTL.pause().progress(1);
                            } else {
                                mainTL.pause().progress(0);
                            };
                            options.curMorphState = 'start';
                        };
                    } else if (setter.toLowerCase() === 'end') {
                        if (!!mainTL && options.morph) {
                            if (options.morphState === 'end') {
                                mainTL.pause().progress(0);
                            } else {
                                mainTL.pause().progress(1);
                            };
                            options.curMorphState = 'end';
                        };
                    };
                });
            };
        },//end liviconEvoState

        //the method to get all the saved options
        liviconEvoOptions: function () {
            var options = jQuery(this).data('saved_options');
            if (options) {
                var temp = {};
                temp.afterAdd = options.afterAdd;
                temp.afterAnim = options.afterAnim;
                temp.afterDraw = options.afterDraw;
                temp.afterErase = options.afterErase;
                temp.afterRemove = options.afterRemove;
                temp.afterUpdate = options.afterUpdate;
                temp.allowMorphImageTransform = options.allowMorphImageTransform;
                temp.animated = options.animated;
                temp.autoPlay = options.autoPlay;
                temp.beforeAdd = options.beforeAdd;
                temp.beforeAnim = options.beforeAnim;
                temp.beforeDraw = options.beforeDraw;
                temp.beforeErase = options.beforeErase;
                temp.beforeRemove = options.beforeRemove;
                temp.beforeUpdate = options.beforeUpdate;
                temp.brightness = options.brightness;
                temp.colorsHoverTime = options.colorsHoverTime;
                temp.colorsOnHover = (options.colorsOnHover === false ? 'none' : options.colorsOnHover);
                temp.colorsWhenMorph = (options.colorsWhenMorph === false ? 'none' : options.colorsWhenMorph);
                temp.delay = (options.delay === 0.001 ? 0 : options.delay);
                temp.drawColor = options.drawColor;
                temp.drawColorTime = options.drawColorTime;
                temp.drawDelay = (options.drawDelay === 0.001 ? 0 : options.drawDelay);
                temp.drawEase = options.drawEase;
                temp.drawOnViewport = options.drawOnViewport;
                temp.drawReversed = options.drawReversed;
                temp.drawStagger = options.drawStagger;
                temp.drawStartPoint = options.drawStartPoint;
                temp.drawTime = options.drawTime;
                temp.duration = options.duration;
                temp.duringAnim = options.duringAnim;
                temp.duringDraw = options.duringDraw;
                temp.duringErase = options.duringErase;
                temp.eraseDelay = (options.eraseDelay === 0.001 ? 0 : options.eraseDelay);
                temp.eraseEase = options.eraseEase;
                temp.eraseReversed = options.eraseReversed;
                temp.eraseStagger = options.eraseStagger;
                temp.eraseStartPoint = options.eraseStartPoint;
                temp.eraseTime = options.eraseTime;
                temp.eventOn = options.eventOn;
                temp.eventType = (options.eventType === false ? 'none' : options.eventType);
                temp.fillColor = options.fillColor;
                temp.fillColorAction = options.fillColorAction;
                temp.flipHorizontal = options.flipHorizontal;
                temp.flipVertical = options.flipVertical;
                temp.keepStrokeWidthOnResize = options.keepStrokeWidthOnResize;
                temp.morphImage = (options.morphImage === false ? 'none' : options.morphImage);
                temp.morphState = options.morphState;
                temp.name = options.name;
                temp.pathToFolder = options.pathToFolder;
                temp.repeat = options.repeat;
                temp.repeatDelay = options.repeatDelay;
                temp.rotate = (options.rotate === false ? 'none' : options.rotate);
                temp.saturation = options.saturation;
                temp.size = options.size;
                temp.solidColor = options.solidColor;
                temp.solidColorAction = options.solidColorAction;
                temp.solidColorBg = options.solidColorBg;
                temp.solidColorBgAction = options.solidColorBgAction;
                temp.strokeColor = options.strokeColor;
                temp.strokeColorAction = options.strokeColorAction;
                temp.strokeColorAlt = options.strokeColorAlt;
                temp.strokeColorAltAction = options.strokeColorAltAction;
                temp.strokeStyle = options.strokeStyle;
                temp.strokeWidth = options.strokeWidth;
                temp.strokeWidthFactorOnHover = (options.strokeWidthFactorOnHover === false ? 'none' : options.strokeWidthFactorOnHover);
                temp.strokeWidthOnHoverTime = options.strokeWidthOnHoverTime;
                temp.style = options.style;
                temp.touchEvents = options.touchEvents;
                temp.tryToSharpen = options.tryToSharpen;
                temp.viewportShift = (options.viewportShift === false ? 'none' : options.viewportShift);
                temp.def_duration = options.def_duration;
                temp.def_repeat = options.def_repeat;
                temp.def_repeatDelay = options.def_repeatDelay;
                return temp;
            } else {
                return undefined;
            };
        }//end liviconEvoOptions


    });//end jQuery plugin

    //add LivIcons Evolution to elements with default class .livicon-evo
    jQuery(document).ready(function() {
        jQuery('.livicon-evo').addLiviconEvo();
    });

    //bug-fix for some mobile devices
    jQuery(window).on('orientationchange', function(){
        jQuery(window).resize();
    });

    /*******Helper functions******/
    //unique number from 1
    uniqueNum.counter = 1;
    function uniqueNum () {
        return uniqueNum.counter++;
    };

    // function for cloning object
    function cloneObj(obj){
        if(obj == null || typeof(obj) != 'object') {
            return obj;
        };
        var temp = new obj.constructor();
        for(var key in obj) {
            temp[key] = cloneObj(obj[key]);
        };
        return temp;
    };

    // converts string to boolean
    function strToBool(str){
        if (typeof str == 'string' || str instanceof String) {
            var str_lower = str.toLowerCase();
            switch(str_lower){
                case 'true': case 'yes': return true;
                case 'false': case 'no': case 'none': return false;
                default: return str;
            }
        } else {
            return str;
        };
    };

    // converts string to number
    function strToNum(str){
        if (typeof str == 'string' || str instanceof String) {
            if ( (+str) || str == '0' ) {
                return +str;
            } else {
                return str;
            };
        } else {
            return str;
        };
    };

    //parse ease string and return an Object
    function parseEase(string) {
        var easing = string.split(".");
        if (easing.length === 2 && easing[0] !== 'SteppedEase') {
            if (isWP) {
                return window.DeeThemes_GS[easing[0]][easing[1]];
            };
            return window[easing[0]][easing[1]];
        };
        var cfgExp = /true|false|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig;
        var config = string.match(cfgExp).map(JSON.parse);
        if (easing[0] !== 'SteppedEase') {
            if (isWP) {
                return window.DeeThemes_GS[easing[0]][easing[1]].config.apply(null, config);
            };
            return window[easing[0]][easing[1]].config.apply(null, config);
        } else {
            if (isWP) {
                return window.DeeThemes_GS[easing[0]].config.apply(null, config);
            };
            return window[easing[0]].config.apply(null, config);
        };
    };

    //Calculates lighter or darker color
    function LighterDarker(color,ds,dv) {
        var init = Snap.color(color),
            c = Snap.rgb2hsb(init.r, init.g, init.b);
        c.s = c.s + ds;
        if (c.s < 0) {c.s = 0};
        if (c.s > 1) {c.s = 1};
        c.b = c.b + dv;
        if (c.b < 0) {c.b = 0};
        if (c.b > 1) {c.b = 1};
        return Snap.hsb(c.h, c.s, c.b);
    };

    //Calculates hue rotation
    function hueRotate(color,deg) {
        var init = Snap.color(color),
            c = Snap.rgb2hsb(init.r, init.g, init.b);
        deg = Math.abs(deg) / 360 % 1;
        c.h = (c.h + deg) % 1;
        return Snap.hsb(c.h, c.s, c.b);
    };
})(jQuery);//end of anonymous func
