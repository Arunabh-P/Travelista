/*! For license information please see 958.f55ceb1d.chunk.js.LICENSE.txt */
(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[958],{6279:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var n=r(5861),a=r(7757),i=r.n(a),o=r(2791),s=r(7022),l=r(2677),c=r(3360),u=r(4957);r(5580);function d(e,t,r){var n=document.createElement("canvas"),a=e.naturalWidth/e.width,i=e.naturalHeight/e.height;n.width=t.width,n.height=t.height;var o=n.getContext("2d"),s=window.devicePixelRatio;return n.width=t.width*s,n.height=t.height*s,o.setTransform(s,0,0,s,0,0),o.imageSmoothingQuality="high",o.drawImage(e,t.x*a,t.y*i,t.width*a,t.height*i,0,0,t.width,t.height),n.toDataURL("image/jpeg")}var f=r(184),v=function(e){var t=e.src,r=e.imageCallback,a=e.closeHander,v=(0,o.useRef)(null),m=(0,o.useRef)(null),p=function(){var e=(0,n.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(v.current,m.current,t.name);case 2:n=e.sent,r(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,f.jsx)("div",{style:{zIndex:9999,top:"2rem",minWidth:"24rem",maxWidth:"40rem"},children:(0,f.jsx)(s.Z,{className:" text-center bg-white shadow rounded-2 mx-auto p-2 m-0",children:(0,f.jsxs)(l.Z,{xs:12,className:"text-center  ",children:[(0,f.jsx)(u.Z,{src:t?URL.createObjectURL(t):"",className:"image-fulid",style:{height:"500px"},aspectRatio:1,guides:!1,crop:function(e){return m.current=e.detail},ref:v,zoomable:!0,movable:!1,minCropBoxWidth:200,minCropBoxHeight:250}),(0,f.jsx)("div",{className:"text-center"}),(0,f.jsxs)("div",{className:"px-auto py-2 text-center",children:[(0,f.jsx)(c.Z,{type:"button",className:"btn-danger us-btn-danger mx-1",style:{width:"fit-content"},onClick:a,children:"Cancel"}),(0,f.jsx)(c.Z,{type:"button",className:"us-btn mx-1",style:{width:"fit-content"},onClick:p,children:"Crop"})]})]})})})}},3084:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var n=r(885),a=r(6534),i=r(2791),o=r(3504),s=r(2466),l=r(3044),c=r(9434),u=r(7580),d=r(6279),f=r(6793),v=r(184);function m(){var e=(0,i.useState)(""),t=(0,n.Z)(e,2),r=t[0],m=t[1],p=(0,i.useState)(""),h=(0,n.Z)(p,2),g=h[0],x=h[1],b=(0,i.useState)(""),y=(0,n.Z)(b,2),Z=y[0],S=y[1],w=(0,i.useState)(!1),N=(0,n.Z)(w,2),j=N[0],C=N[1],k=(0,i.useState)(""),R=(0,n.Z)(k,2),z=R[0],P=R[1],I=(0,i.useState)(!1),O=(0,n.Z)(I,2),A=O[0],D=O[1],E=(0,i.useState)(!1),M=(0,n.Z)(E,2),B=M[0],F=M[1],T=(0,c.I0)(),H=(0,a.VY)(),V=(0,c.v9)((function(e){return e.user})),_=V.loading,q=V.error;return(0,i.useEffect)((function(){q&&(H.error(q),T({type:"clearErrors"}))}),[T,q,H]),(0,v.jsx)("div",{className:"register",style:{backgroundImage:"url(".concat(s,")")},children:(0,v.jsxs)("div",{className:"register-container",children:[(0,v.jsx)("h3",{className:"register-header",children:"Travelista"}),(0,v.jsx)("h6",{className:"register-subheader",children:"Register"}),(0,v.jsx)("form",{onSubmit:function(e){e.preventDefault(),T((0,u.a$)(r,g,Z,z))},children:(0,v.jsxs)("div",{className:"register-dataform",children:[(0,v.jsx)(f.Z,{className:"crop_image d-none",id:"upload_image",type:"file",name:"crop_image",required:!0,onChange:function(e){F(e.target.files[0]),D(!0)},accept:".jpg,.jpeg,.png,"}),(0,v.jsx)("label",{htmlFor:"upload_image",children:(0,v.jsx)("span",{class:"profilepic__icon",children:(0,v.jsx)(l.Z,{className:"reg-avatar",src:z,alt:"User",sx:{height:"5vmax",width:"5vmax"}})})}),A&&(0,v.jsx)(d.Z,{src:B,imageCallback:function(e){P(e),D(!1)},closeHander:function(){D(!1)}}),(0,v.jsx)("input",{className:"register-dataform-email",type:"text",placeholder:"Name",required:!0,value:r,onChange:function(e){return m(e.target.value)}}),(0,v.jsx)("input",{className:"register-dataform-email",type:"email",placeholder:"Email",required:!0,value:g,onChange:function(e){return x(e.target.value)}}),(0,v.jsx)("input",{className:"register-dataform-password",type:j?"type":"password",name:"password",placeholder:"Password",value:Z,onChange:function(e){return S(e.target.value)}}),(0,v.jsxs)("small",{className:"register-show-pass pt-md-2 pt-lg-4",onClick:function(){return C(!j)},children:[" ",j?"Hide":"Show"]}),(0,v.jsx)("button",{disabled:_,className:"register-dataform-button",type:"submit",children:"Register"}),(0,v.jsxs)("p",{className:"dont-have-acc",children:["Already have an account?",(0,v.jsx)(o.rU,{className:"link-style-none",to:"/",children:"Login HERE"})]})]})})]})})}},3044:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var n=r(885),a=r(3366),i=r(7462),o=r(2791),s=r(8182),l=r(2039),c=r(7630),u=r(1046),d=r(9201),f=r(184),v=(0,d.Z)((0,f.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),m=r(9818);function p(e){return(0,m.Z)("MuiAvatar",e)}(0,r(2152).Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var h=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],g=(0,c.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})((function(e){var t=e.theme,r=e.ownerState;return(0,i.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===r.variant&&{borderRadius:t.shape.borderRadius},"square"===r.variant&&{borderRadius:0},r.colorDefault&&{color:t.palette.background.default,backgroundColor:"light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[600]})})),x=(0,c.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,t){return t.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),b=(0,c.ZP)(v,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,t){return t.fallback}})({width:"75%",height:"75%"});var y=o.forwardRef((function(e,t){var r=(0,u.Z)({props:e,name:"MuiAvatar"}),c=r.alt,d=r.children,v=r.className,m=r.component,y=void 0===m?"div":m,Z=r.imgProps,S=r.sizes,w=r.src,N=r.srcSet,j=r.variant,C=void 0===j?"circular":j,k=(0,a.Z)(r,h),R=null,z=function(e){var t=e.crossOrigin,r=e.referrerPolicy,a=e.src,i=e.srcSet,s=o.useState(!1),l=(0,n.Z)(s,2),c=l[0],u=l[1];return o.useEffect((function(){if(a||i){u(!1);var e=!0,n=new Image;return n.onload=function(){e&&u("loaded")},n.onerror=function(){e&&u("error")},n.crossOrigin=t,n.referrerPolicy=r,n.src=a,i&&(n.srcset=i),function(){e=!1}}}),[t,r,a,i]),c}((0,i.Z)({},Z,{src:w,srcSet:N})),P=w||N,I=P&&"error"!==z,O=(0,i.Z)({},r,{colorDefault:!I,component:y,variant:C}),A=function(e){var t=e.classes,r={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,l.Z)(r,p,t)}(O);return R=I?(0,f.jsx)(x,(0,i.Z)({alt:c,src:w,srcSet:N,sizes:S,ownerState:O,className:A.img},Z)):null!=d?d:P&&c?c[0]:(0,f.jsx)(b,{className:A.fallback}),(0,f.jsx)(g,(0,i.Z)({as:y,ownerState:O,className:(0,s.Z)(A.root,v),ref:t},k,{children:R}))}))},9201:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var n=r(7462),a=r(2791),i=r(3366),o=r(8182),s=r(2039),l=r(4036),c=r(1046),u=r(7630),d=r(9818);function f(e){return(0,d.Z)("MuiSvgIcon",e)}(0,r(2152).Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var v=r(184),m=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],p=(0,u.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,"inherit"!==r.color&&t["color".concat((0,l.Z)(r.color))],t["fontSize".concat((0,l.Z)(r.fontSize))]]}})((function(e){var t,r,n,a,i,o,s,l,c,u,d,f,v,m,p,h,g,x=e.theme,b=e.ownerState;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(t=x.transitions)||null==(r=t.create)?void 0:r.call(t,"fill",{duration:null==(n=x.transitions)||null==(a=n.duration)?void 0:a.shorter}),fontSize:{inherit:"inherit",small:(null==(i=x.typography)||null==(o=i.pxToRem)?void 0:o.call(i,20))||"1.25rem",medium:(null==(s=x.typography)||null==(l=s.pxToRem)?void 0:l.call(s,24))||"1.5rem",large:(null==(c=x.typography)||null==(u=c.pxToRem)?void 0:u.call(c,35))||"2.1875"}[b.fontSize],color:null!=(d=null==(f=(x.vars||x).palette)||null==(v=f[b.color])?void 0:v.main)?d:{action:null==(m=(x.vars||x).palette)||null==(p=m.action)?void 0:p.active,disabled:null==(h=(x.vars||x).palette)||null==(g=h.action)?void 0:g.disabled,inherit:void 0}[b.color]}})),h=a.forwardRef((function(e,t){var r=(0,c.Z)({props:e,name:"MuiSvgIcon"}),a=r.children,u=r.className,d=r.color,h=void 0===d?"inherit":d,g=r.component,x=void 0===g?"svg":g,b=r.fontSize,y=void 0===b?"medium":b,Z=r.htmlColor,S=r.inheritViewBox,w=void 0!==S&&S,N=r.titleAccess,j=r.viewBox,C=void 0===j?"0 0 24 24":j,k=(0,i.Z)(r,m),R=(0,n.Z)({},r,{color:h,component:x,fontSize:y,instanceFontSize:e.fontSize,inheritViewBox:w,viewBox:C}),z={};w||(z.viewBox=C);var P=function(e){var t=e.color,r=e.fontSize,n=e.classes,a={root:["root","inherit"!==t&&"color".concat((0,l.Z)(t)),"fontSize".concat((0,l.Z)(r))]};return(0,s.Z)(a,f,n)}(R);return(0,v.jsxs)(p,(0,n.Z)({as:x,className:(0,o.Z)(P.root,u),ownerState:R,focusable:"false",color:Z,"aria-hidden":!N||void 0,role:N?"img":void 0,ref:t},z,k,{children:[a,N?(0,v.jsx)("title",{children:N}):null]}))}));h.muiName="SvgIcon";var g=h;function x(e,t){var r=function(r,a){return(0,v.jsx)(g,(0,n.Z)({"data-testid":"".concat(t,"Icon"),ref:a},r,{children:e}))};return r.muiName=g.muiName,a.memo(a.forwardRef(r))}},5341:function(e,t,r){"use strict";r.d(t,{FT:function(){return s}});var n=r(885),a=r(2791),i=r(184),o=["as","disabled"];function s(e){var t=e.tagName,r=e.disabled,n=e.href,a=e.target,i=e.rel,o=e.onClick,s=e.tabIndex,l=void 0===s?0:s,c=e.type;t||(t=null!=n||null!=a||null!=i?"a":"button");var u={tagName:t};if("button"===t)return[{type:c||"button",disabled:r},u];var d=function(e){(r||"a"===t&&function(e){return!e||"#"===e.trim()}(n))&&e.preventDefault(),r?e.stopPropagation():null==o||o(e)};return"a"===t&&(n||(n="#"),r&&(n=void 0)),[{role:"button",disabled:void 0,tabIndex:r?void 0:l,href:n,target:"a"===t?a:void 0,"aria-disabled":r||void 0,rel:"a"===t?i:void 0,onClick:d,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),d(e))}},u]}var l=a.forwardRef((function(e,t){var r=e.as,a=e.disabled,l=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,o),c=s(Object.assign({tagName:r,disabled:a},l)),u=(0,n.Z)(c,2),d=u[0],f=u[1].tagName;return(0,i.jsx)(f,Object.assign({},l,d,{ref:t}))}));l.displayName="Button",t.ZP=l},3360:function(e,t,r){"use strict";var n=r(1413),a=r(885),i=r(5987),o=r(654),s=r.n(o),l=r(2791),c=r(5341),u=r(162),d=r(184),f=["as","bsPrefix","variant","size","active","className"],v=l.forwardRef((function(e,t){var r=e.as,o=e.bsPrefix,l=e.variant,v=e.size,m=e.active,p=e.className,h=(0,i.Z)(e,f),g=(0,u.vE)(o,"btn"),x=(0,c.FT)((0,n.Z)({tagName:r},h)),b=(0,a.Z)(x,2),y=b[0],Z=b[1].tagName;return(0,d.jsx)(Z,(0,n.Z)((0,n.Z)((0,n.Z)({},y),h),{},{ref:t,className:s()(p,g,m&&"active",l&&"".concat(g,"-").concat(l),v&&"".concat(g,"-").concat(v),h.href&&h.disabled&&"disabled")}))}));v.displayName="Button",v.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=v},7022:function(e,t,r){"use strict";var n=r(1413),a=r(5987),i=r(654),o=r.n(i),s=r(2791),l=r(162),c=r(184),u=["bsPrefix","fluid","as","className"],d=s.forwardRef((function(e,t){var r=e.bsPrefix,i=e.fluid,s=e.as,d=void 0===s?"div":s,f=e.className,v=(0,a.Z)(e,u),m=(0,l.vE)(r,"container"),p="string"===typeof i?"-".concat(i):"-fluid";return(0,c.jsx)(d,(0,n.Z)((0,n.Z)({ref:t},v),{},{className:o()(f,i?"".concat(m).concat(p):m)}))}));d.displayName="Container",d.defaultProps={fluid:!1},t.Z=d},6793:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var n=r(1413),a=r(4942),i=r(5987),o=r(654),s=r.n(o),l=r(2791),c=(r(2391),r(2007)),u=r.n(c),d=r(184),f=["as","className","type","tooltip"],v={type:u().string,tooltip:u().bool,as:u().elementType},m=l.forwardRef((function(e,t){var r=e.as,a=void 0===r?"div":r,o=e.className,l=e.type,c=void 0===l?"valid":l,u=e.tooltip,v=void 0!==u&&u,m=(0,i.Z)(e,f);return(0,d.jsx)(a,(0,n.Z)((0,n.Z)({},m),{},{ref:t,className:s()(o,"".concat(c,"-").concat(v?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=v;var p=m,h=l.createContext({}),g=r(162),x=["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"],b=l.forwardRef((function(e,t){var r,o,c=e.bsPrefix,u=e.type,f=e.size,v=e.htmlSize,m=e.id,p=e.className,b=e.isValid,y=void 0!==b&&b,Z=e.isInvalid,S=void 0!==Z&&Z,w=e.plaintext,N=e.readOnly,j=e.as,C=void 0===j?"input":j,k=(0,i.Z)(e,x),R=(0,l.useContext)(h).controlId;(c=(0,g.vE)(c,"form-control"),w)?r=(0,a.Z)({},"".concat(c,"-plaintext"),!0):(o={},(0,a.Z)(o,c,!0),(0,a.Z)(o,"".concat(c,"-").concat(f),f),r=o);return(0,d.jsx)(C,(0,n.Z)((0,n.Z)({},k),{},{type:u,size:v,ref:t,readOnly:N,id:m||R,className:s()(p,r,y&&"is-valid",S&&"is-invalid","color"===u&&"".concat(c,"-color"))}))}));b.displayName="FormControl";var y=Object.assign(b,{Feedback:p})},162:function(e,t,r){"use strict";r.d(t,{SC:function(){return l},pi:function(){return s},vE:function(){return o}});var n=r(2791),a=(r(184),["xxl","xl","lg","md","sm","xs"]),i=n.createContext({prefixes:{},breakpoints:a});i.Consumer,i.Provider;function o(e,t){var r=(0,n.useContext)(i).prefixes;return e||r[t]||t}function s(){return(0,n.useContext)(i).breakpoints}function l(){return"rtl"===(0,n.useContext)(i).dir}},654:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var o=a.apply(null,r);o&&e.push(o)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var s in r)n.call(r,s)&&r[s]&&e.push(s);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},2391:function(e){"use strict";var t=function(){};e.exports=t},2466:function(e,t,r){"use strict";e.exports=r.p+"static/media/bg2.44efd1e52cc0d1b4c3c7.jpg"},5987:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(3366);function a(e,t){if(null==e)return{};var r,a,i=(0,n.Z)(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}}}]);
//# sourceMappingURL=958.f55ceb1d.chunk.js.map