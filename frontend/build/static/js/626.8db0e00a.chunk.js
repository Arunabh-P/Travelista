"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[626],{1012:function(e,t,n){function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Array.isArray(e)?e:Object.keys(e).map((function(t){return e[t].name=t,e[t]}))}function o(e){var t,n,o,i,a=e.enabled,f=e.enableEvents,s=e.placement,c=e.flip,u=e.offset,l=e.fixed,p=e.containerPadding,d=e.arrowElement,v=e.popperConfig,m=void 0===v?{}:v,h=function(e){var t={};return Array.isArray(e)?(null==e||e.forEach((function(e){t[e.name]=e})),t):e||t}(m.modifiers);return Object.assign({},m,{placement:s,enabled:a,strategy:l?"fixed":m.strategy,modifiers:r(Object.assign({},h,{eventListeners:{enabled:f},preventOverflow:Object.assign({},h.preventOverflow,{options:p?Object.assign({padding:p},null==(t=h.preventOverflow)?void 0:t.options):null==(n=h.preventOverflow)?void 0:n.options}),offset:{options:Object.assign({offset:u},null==(o=h.offset)?void 0:o.options)},arrow:Object.assign({},h.arrow,{enabled:!!d,options:Object.assign({},null==(i=h.arrow)?void 0:i.options,{element:d})}),flip:Object.assign({enabled:!!c},h.flip)}))})}n.d(t,{ZP:function(){return o}})},6050:function(e,t,n){n.d(t,{f:function(){return d}});var r=n(3189),o=n(4468),i=n(8376),a=n(2791),f=n(9007),s=n(2391),c=n.n(s),u=function(){};function l(e){return 0===e.button}function p(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}var d=function(e){return e&&("current"in e?e.current:e)},v={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=n.disabled,m=n.clickTrigger,h=void 0===m?"click":m,g=(0,a.useRef)(!1),b=(0,a.useRef)(!1),y=(0,a.useCallback)((function(t){var n=d(e);c()(!!n,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),g.current=!n||p(t)||!l(t)||!!(0,r.Z)(n,t.target)||b.current,b.current=!1}),[e]),w=(0,f.Z)((function(t){var n=d(e);n&&(0,r.Z)(n,t.target)&&(b.current=!0)})),x=(0,f.Z)((function(e){g.current||t(e)}));(0,a.useEffect)((function(){if(!s&&null!=e){var t=(0,i.Z)(d(e)),n=(t.defaultView||window).event,r=null;v[h]&&(r=(0,o.Z)(t,v[h],w,!0));var a=(0,o.Z)(t,h,y,!0),f=(0,o.Z)(t,h,(function(e){e!==n?x(e):n=void 0})),c=[];return"ontouchstart"in t.documentElement&&(c=[].slice.call(t.body.children).map((function(e){return(0,o.Z)(e,"mousemove",u)}))),function(){null==r||r(),a(),f(),c.forEach((function(e){return e()}))}}}),[e,s,h,y,w,x])}},4403:function(e,t,n){n.d(t,{Z:function(){return Le}});var r=n(2982),o=n(885),i=n(2791),a=n(7762),f=Object.prototype.hasOwnProperty;function s(e,t,n){var r,o=(0,a.Z)(e.keys());try{for(o.s();!(r=o.n()).done;)if(c(n=r.value,t))return n}catch(i){o.e(i)}finally{o.f()}}function c(e,t){var n,r,o;if(e===t)return!0;if(e&&t&&(n=e.constructor)===t.constructor){if(n===Date)return e.getTime()===t.getTime();if(n===RegExp)return e.toString()===t.toString();if(n===Array){if((r=e.length)===t.length)for(;r--&&c(e[r],t[r]););return-1===r}if(n===Set){if(e.size!==t.size)return!1;var i,u=(0,a.Z)(e);try{for(u.s();!(i=u.n()).done;){if((o=r=i.value)&&"object"===typeof o&&!(o=s(t,o)))return!1;if(!t.has(o))return!1}}catch(d){u.e(d)}finally{u.f()}return!0}if(n===Map){if(e.size!==t.size)return!1;var l,p=(0,a.Z)(e);try{for(p.s();!(l=p.n()).done;){if((o=(r=l.value)[0])&&"object"===typeof o&&!(o=s(t,o)))return!1;if(!c(r[1],t.get(o)))return!1}}catch(d){p.e(d)}finally{p.f()}return!0}if(n===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(n===DataView){if((r=e.byteLength)===t.byteLength)for(;r--&&e.getInt8(r)===t.getInt8(r););return-1===r}if(ArrayBuffer.isView(e)){if((r=e.byteLength)===t.byteLength)for(;r--&&e[r]===t[r];);return-1===r}if(!n||"object"===typeof e){for(n in r=0,e){if(f.call(e,n)&&++r&&!f.call(t,n))return!1;if(!(n in t)||!c(e[n],t[n]))return!1}return Object.keys(t).length===r}}return e!==e&&t!==t}var u=n(5746);var l=function(e){var t=(0,u.Z)();return[e[0],(0,i.useCallback)((function(n){if(t())return e[1](n)}),[t,e[1]])]};function p(e){return e.split("-")[0]}function d(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function v(e){return e instanceof d(e).Element||e instanceof Element}function m(e){return e instanceof d(e).HTMLElement||e instanceof HTMLElement}function h(e){return"undefined"!==typeof ShadowRoot&&(e instanceof d(e).ShadowRoot||e instanceof ShadowRoot)}var g=Math.max,b=Math.min,y=Math.round;function w(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,o=1;if(m(e)&&t){var i=e.offsetHeight,a=e.offsetWidth;a>0&&(r=y(n.width)/a||1),i>0&&(o=y(n.height)/i||1)}return{width:n.width/r,height:n.height/o,top:n.top/o,right:n.right/r,bottom:n.bottom/o,left:n.left/r,x:n.left/r,y:n.top/o}}function x(e){var t=w(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function O(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&h(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function j(e){return e?(e.nodeName||"").toLowerCase():null}function A(e){return d(e).getComputedStyle(e)}function E(e){return["table","td","th"].indexOf(j(e))>=0}function k(e){return((v(e)?e.ownerDocument:e.document)||window.document).documentElement}function D(e){return"html"===j(e)?e:e.assignedSlot||e.parentNode||(h(e)?e.host:null)||k(e)}function L(e){return m(e)&&"fixed"!==A(e).position?e.offsetParent:null}function M(e){for(var t=d(e),n=L(e);n&&E(n)&&"static"===A(n).position;)n=L(n);return n&&("html"===j(n)||"body"===j(n)&&"static"===A(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&m(e)&&"fixed"===A(e).position)return null;var n=D(e);for(h(n)&&(n=n.host);m(n)&&["html","body"].indexOf(j(n))<0;){var r=A(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function C(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function P(e,t,n){return g(e,b(t,n))}function W(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function Z(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var B="top",R="bottom",S="right",T="left",H="auto",V=[B,R,S,T],q="start",I="end",U="viewport",z="popper",N=V.reduce((function(e,t){return e.concat([t+"-"+q,t+"-"+I])}),[]),F=[].concat(V,[H]).reduce((function(e,t){return e.concat([t,t+"-"+q,t+"-"+I])}),[]),K=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];var _={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,f=p(n.placement),s=C(f),c=[T,S].indexOf(f)>=0?"height":"width";if(i&&a){var u=function(e,t){return W("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:Z(e,V))}(o.padding,n),l=x(i),d="y"===s?B:T,v="y"===s?R:S,m=n.rects.reference[c]+n.rects.reference[s]-a[s]-n.rects.popper[c],h=a[s]-n.rects.reference[s],g=M(i),b=g?"y"===s?g.clientHeight||0:g.clientWidth||0:0,y=m/2-h/2,w=u[d],O=b-l[c]-u[v],j=b/2-l[c]/2+y,A=P(w,j,O),E=s;n.modifiersData[r]=((t={})[E]=A,t.centerOffset=A-j,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&O(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function X(e){return e.split("-")[1]}var Y={top:"auto",right:"auto",bottom:"auto",left:"auto"};function G(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,f=e.position,s=e.gpuAcceleration,c=e.adaptive,u=e.roundOffsets,l=e.isFixed,p=a.x,v=void 0===p?0:p,m=a.y,h=void 0===m?0:m,g="function"===typeof u?u({x:v,y:h}):{x:v,y:h};v=g.x,h=g.y;var b=a.hasOwnProperty("x"),w=a.hasOwnProperty("y"),x=T,O=B,j=window;if(c){var E=M(n),D="clientHeight",L="clientWidth";if(E===d(n)&&"static"!==A(E=k(n)).position&&"absolute"===f&&(D="scrollHeight",L="scrollWidth"),o===B||(o===T||o===S)&&i===I)O=R,h-=(l&&E===j&&j.visualViewport?j.visualViewport.height:E[D])-r.height,h*=s?1:-1;if(o===T||(o===B||o===R)&&i===I)x=S,v-=(l&&E===j&&j.visualViewport?j.visualViewport.width:E[L])-r.width,v*=s?1:-1}var C,P=Object.assign({position:f},c&&Y),W=!0===u?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:y(t*r)/r||0,y:y(n*r)/r||0}}({x:v,y:h}):{x:v,y:h};return v=W.x,h=W.y,s?Object.assign({},P,((C={})[O]=w?"0":"",C[x]=b?"0":"",C.transform=(j.devicePixelRatio||1)<=1?"translate("+v+"px, "+h+"px)":"translate3d("+v+"px, "+h+"px, 0)",C)):Object.assign({},P,((t={})[O]=w?h+"px":"",t[x]=b?v+"px":"",t.transform="",t))}var J={passive:!0};var Q={left:"right",right:"left",bottom:"top",top:"bottom"};function $(e){return e.replace(/left|right|bottom|top/g,(function(e){return Q[e]}))}var ee={start:"end",end:"start"};function te(e){return e.replace(/start|end/g,(function(e){return ee[e]}))}function ne(e){var t=d(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function re(e){return w(k(e)).left+ne(e).scrollLeft}function oe(e){var t=A(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function ie(e){return["html","body","#document"].indexOf(j(e))>=0?e.ownerDocument.body:m(e)&&oe(e)?e:ie(D(e))}function ae(e,t){var n;void 0===t&&(t=[]);var r=ie(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=d(r),a=o?[i].concat(i.visualViewport||[],oe(r)?r:[]):r,f=t.concat(a);return o?f:f.concat(ae(D(a)))}function fe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function se(e,t){return t===U?fe(function(e){var t=d(e),n=k(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,f=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,f=r.offsetTop)),{width:o,height:i,x:a+re(e),y:f}}(e)):v(t)?function(e){var t=w(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):fe(function(e){var t,n=k(e),r=ne(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=g(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=g(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),f=-r.scrollLeft+re(e),s=-r.scrollTop;return"rtl"===A(o||n).direction&&(f+=g(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:f,y:s}}(k(e)))}function ce(e,t,n){var r="clippingParents"===t?function(e){var t=ae(D(e)),n=["absolute","fixed"].indexOf(A(e).position)>=0&&m(e)?M(e):e;return v(n)?t.filter((function(e){return v(e)&&O(e,n)&&"body"!==j(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=se(e,n);return t.top=g(r.top,t.top),t.right=b(r.right,t.right),t.bottom=b(r.bottom,t.bottom),t.left=g(r.left,t.left),t}),se(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function ue(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?p(o):null,a=o?X(o):null,f=n.x+n.width/2-r.width/2,s=n.y+n.height/2-r.height/2;switch(i){case B:t={x:f,y:n.y-r.height};break;case R:t={x:f,y:n.y+n.height};break;case S:t={x:n.x+n.width,y:s};break;case T:t={x:n.x-r.width,y:s};break;default:t={x:n.x,y:n.y}}var c=i?C(i):null;if(null!=c){var u="y"===c?"height":"width";switch(a){case q:t[c]=t[c]-(n[u]/2-r[u]/2);break;case I:t[c]=t[c]+(n[u]/2-r[u]/2)}}return t}function le(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.boundary,a=void 0===i?"clippingParents":i,f=n.rootBoundary,s=void 0===f?U:f,c=n.elementContext,u=void 0===c?z:c,l=n.altBoundary,p=void 0!==l&&l,d=n.padding,m=void 0===d?0:d,h=W("number"!==typeof m?m:Z(m,V)),g=u===z?"reference":z,b=e.rects.popper,y=e.elements[p?g:u],x=ce(v(y)?y:y.contextElement||k(e.elements.popper),a,s),O=w(e.elements.reference),j=ue({reference:O,element:b,strategy:"absolute",placement:o}),A=fe(Object.assign({},b,j)),E=u===z?A:O,D={top:x.top-E.top+h.top,bottom:E.bottom-x.bottom+h.bottom,left:x.left-E.left+h.left,right:E.right-x.right+h.right},L=e.modifiersData.offset;if(u===z&&L){var M=L[o];Object.keys(D).forEach((function(e){var t=[S,R].indexOf(e)>=0?1:-1,n=[B,R].indexOf(e)>=0?"y":"x";D[e]+=M[n]*t}))}return D}function pe(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function de(e){return[B,S,R,T].some((function(t){return e[t]>=0}))}var ve={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=F.reduce((function(e,n){return e[n]=function(e,t,n){var r=p(e),o=[T,B].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],f=i[1];return a=a||0,f=(f||0)*o,[T,S].indexOf(r)>=0?{x:f,y:a}:{x:a,y:f}}(n,t.rects,i),e}),{}),f=a[t.placement],s=f.x,c=f.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}};var me={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,f=void 0!==a&&a,s=n.boundary,c=n.rootBoundary,u=n.altBoundary,l=n.padding,d=n.tether,v=void 0===d||d,m=n.tetherOffset,h=void 0===m?0:m,y=le(t,{boundary:s,rootBoundary:c,padding:l,altBoundary:u}),w=p(t.placement),O=X(t.placement),j=!O,A=C(w),E="x"===A?"y":"x",k=t.modifiersData.popperOffsets,D=t.rects.reference,L=t.rects.popper,W="function"===typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,Z="number"===typeof W?{mainAxis:W,altAxis:W}:Object.assign({mainAxis:0,altAxis:0},W),H=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,V={x:0,y:0};if(k){if(i){var I,U="y"===A?B:T,z="y"===A?R:S,N="y"===A?"height":"width",F=k[A],K=F+y[U],_=F-y[z],Y=v?-L[N]/2:0,G=O===q?D[N]:L[N],J=O===q?-L[N]:-D[N],Q=t.elements.arrow,$=v&&Q?x(Q):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[U],ne=ee[z],re=P(0,D[N],$[N]),oe=j?D[N]/2-Y-re-te-Z.mainAxis:G-re-te-Z.mainAxis,ie=j?-D[N]/2+Y+re+ne+Z.mainAxis:J+re+ne+Z.mainAxis,ae=t.elements.arrow&&M(t.elements.arrow),fe=ae?"y"===A?ae.clientTop||0:ae.clientLeft||0:0,se=null!=(I=null==H?void 0:H[A])?I:0,ce=F+ie-se,ue=P(v?b(K,F+oe-se-fe):K,F,v?g(_,ce):_);k[A]=ue,V[A]=ue-F}if(f){var pe,de="x"===A?B:T,ve="x"===A?R:S,me=k[E],he="y"===E?"height":"width",ge=me+y[de],be=me-y[ve],ye=-1!==[B,T].indexOf(w),we=null!=(pe=null==H?void 0:H[E])?pe:0,xe=ye?ge:me-D[he]-L[he]-we+Z.altAxis,Oe=ye?me+D[he]+L[he]-we-Z.altAxis:be,je=v&&ye?function(e,t,n){var r=P(e,t,n);return r>n?n:r}(xe,me,Oe):P(v?xe:ge,me,v?Oe:be);k[E]=je,V[E]=je-me}t.modifiersData[r]=V}},requiresIfExists:["offset"]};function he(e,t,n){void 0===n&&(n=!1);var r=m(t),o=m(t)&&function(e){var t=e.getBoundingClientRect(),n=y(t.width)/e.offsetWidth||1,r=y(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),i=k(t),a=w(e,o),f={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(r||!r&&!n)&&(("body"!==j(t)||oe(i))&&(f=function(e){return e!==d(e)&&m(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:ne(e);var t}(t)),m(t)?((s=w(t,!0)).x+=t.clientLeft,s.y+=t.clientTop):i&&(s.x=re(i))),{x:a.left+f.scrollLeft-s.x,y:a.top+f.scrollTop-s.y,width:a.width,height:a.height}}function ge(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function be(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var ye={placement:"bottom",modifiers:[],strategy:"absolute"};function we(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function xe(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?ye:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},ye,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],f=!1,s={state:o,setOptions:function(n){var f="function"===typeof n?n(o.options):n;c(),o.options=Object.assign({},i,o.options,f),o.scrollParents={reference:v(e)?ae(e):e.contextElement?ae(e.contextElement):[],popper:ae(t)};var u=function(e){var t=ge(e);return K.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=u.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var f=i({state:o,name:t,instance:s,options:r}),c=function(){};a.push(f||c)}})),s.update()},forceUpdate:function(){if(!f){var e=o.elements,t=e.reference,n=e.popper;if(we(t,n)){o.rects={reference:he(t,M(n),"fixed"===o.options.strategy),popper:x(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,c=i.options,u=void 0===c?{}:c,l=i.name;"function"===typeof a&&(o=a({state:o,options:u,name:l,instance:s})||o)}else o.reset=!1,r=-1}}},update:be((function(){return new Promise((function(e){s.forceUpdate(),e(o)}))})),destroy:function(){c(),f=!0}};if(!we(e,t))return s;function c(){a.forEach((function(e){return e()})),a=[]}return s.setOptions(n).then((function(e){!f&&n.onFirstUpdate&&n.onFirstUpdate(e)})),s}}var Oe=xe({defaultModifiers:[{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=le(t,{elementContext:"reference"}),f=le(t,{altBoundary:!0}),s=pe(a,r),c=pe(f,o,i),u=de(s),l=de(c);t.modifiersData[n]={referenceClippingOffsets:s,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":l})}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=ue({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,f=n.roundOffsets,s=void 0===f||f,c={placement:p(t.placement),variation:X(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,G(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:s})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,G(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,f=void 0===a||a,s=d(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach((function(e){e.addEventListener("scroll",n.update,J)})),f&&s.addEventListener("resize",n.update,J),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",n.update,J)})),f&&s.removeEventListener("resize",n.update,J)}},data:{}},ve,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,f=void 0===a||a,s=n.fallbackPlacements,c=n.padding,u=n.boundary,l=n.rootBoundary,d=n.altBoundary,v=n.flipVariations,m=void 0===v||v,h=n.allowedAutoPlacements,g=t.options.placement,b=p(g),y=s||(b===g||!m?[$(g)]:function(e){if(p(e)===H)return[];var t=$(e);return[te(e),t,te(t)]}(g)),w=[g].concat(y).reduce((function(e,n){return e.concat(p(n)===H?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,f=n.flipVariations,s=n.allowedAutoPlacements,c=void 0===s?F:s,u=X(r),l=u?f?N:N.filter((function(e){return X(e)===u})):V,d=l.filter((function(e){return c.indexOf(e)>=0}));0===d.length&&(d=l);var v=d.reduce((function(t,n){return t[n]=le(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[p(n)],t}),{});return Object.keys(v).sort((function(e,t){return v[e]-v[t]}))}(t,{placement:n,boundary:u,rootBoundary:l,padding:c,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),x=t.rects.reference,O=t.rects.popper,j=new Map,A=!0,E=w[0],k=0;k<w.length;k++){var D=w[k],L=p(D),M=X(D)===q,C=[B,R].indexOf(L)>=0,P=C?"width":"height",W=le(t,{placement:D,boundary:u,rootBoundary:l,altBoundary:d,padding:c}),Z=C?M?S:T:M?R:B;x[P]>O[P]&&(Z=$(Z));var I=$(Z),U=[];if(i&&U.push(W[L]<=0),f&&U.push(W[Z]<=0,W[I]<=0),U.every((function(e){return e}))){E=D,A=!1;break}j.set(D,U)}if(A)for(var z=function(e){var t=w.find((function(t){var n=j.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return E=t,"break"},K=m?3:1;K>0;K--){if("break"===z(K))break}t.placement!==E&&(t.modifiersData[r]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},me,_]}),je=["enabled","placement","strategy","modifiers"];function Ae(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var Ee={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:function(){}},ke={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:function(e){var t=e.state;return function(){var e=t.elements,n=e.reference,r=e.popper;if("removeAttribute"in n){var o=(n.getAttribute("aria-describedby")||"").split(",").filter((function(e){return e.trim()!==r.id}));o.length?n.setAttribute("aria-describedby",o.join(",")):n.removeAttribute("aria-describedby")}}},fn:function(e){var t,n=e.state.elements,r=n.popper,o=n.reference,i=null==(t=r.getAttribute("role"))?void 0:t.toLowerCase();if(r.id&&"tooltip"===i&&"setAttribute"in o){var a=o.getAttribute("aria-describedby");if(a&&-1!==a.split(",").indexOf(r.id))return;o.setAttribute("aria-describedby",a?"".concat(a,",").concat(r.id):r.id)}}},De=[];var Le=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=n.enabled,f=void 0===a||a,s=n.placement,u=void 0===s?"bottom":s,p=n.strategy,d=void 0===p?"absolute":p,v=n.modifiers,m=void 0===v?De:v,h=Ae(n,je),g=(0,i.useRef)(m),b=(0,i.useRef)(),y=(0,i.useCallback)((function(){var e;null==(e=b.current)||e.update()}),[]),w=(0,i.useCallback)((function(){var e;null==(e=b.current)||e.forceUpdate()}),[]),x=l((0,i.useState)({placement:u,update:y,forceUpdate:w,attributes:{},styles:{popper:{},arrow:{}}})),O=(0,o.Z)(x,2),j=O[0],A=O[1],E=(0,i.useMemo)((function(){return{name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:function(e){var t=e.state,n={},r={};Object.keys(t.elements).forEach((function(e){n[e]=t.styles[e],r[e]=t.attributes[e]})),A({state:t,styles:n,attributes:r,update:y,forceUpdate:w,placement:t.placement})}}}),[y,w,A]),k=(0,i.useMemo)((function(){return c(g.current,m)||(g.current=m),g.current}),[m]);return(0,i.useEffect)((function(){b.current&&f&&b.current.setOptions({placement:u,strategy:d,modifiers:[].concat((0,r.Z)(k),[E,Ee])})}),[d,u,E,f,k]),(0,i.useEffect)((function(){if(f&&null!=e&&null!=t)return b.current=Oe(e,t,Object.assign({},h,{placement:u,strategy:d,modifiers:[].concat((0,r.Z)(k),[ke,E])})),function(){null!=b.current&&(b.current.destroy(),b.current=void 0,A((function(e){return Object.assign({},e,{attributes:{},styles:{popper:{}}})})))}}),[f,e,t]),j}},7762:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(181);function o(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=(0,r.Z)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,f=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return f=e.done,e},e:function(e){s=!0,a=e},f:function(){try{f||null==n.return||n.return()}finally{if(s)throw a}}}}}}]);
//# sourceMappingURL=626.8db0e00a.chunk.js.map