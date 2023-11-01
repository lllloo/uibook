import{d as u,M as x,e as d,f as l}from"./index-6dac3325.js";import{u as _}from"./index-06b6c4af.js";import"./iframe-29b294ca.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-cd97d88f.js";import"./index-356e4a49.js";var c={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=u,j=Symbol.for("react.element"),F=Symbol.for("react.fragment"),b=Object.prototype.hasOwnProperty,h=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function f(t,e,a){var r,s={},i=null,m=null;a!==void 0&&(i=""+a),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(m=e.ref);for(r in e)b.call(e,r)&&!O.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:j,type:t,key:i,ref:m,props:s,_owner:h.current}}n.Fragment=F;n.jsx=f;n.jsxs=f;c.exports=n;var o=c.exports;function p(t){return o.jsxs(o.Fragment,{children:[`
`,`
`,o.jsx(x,{title:"Colors"}),`
`,o.jsxs(d,{children:[o.jsx(l,{title:"theme.color.grayscale",subtitle:"Some of the greys",colors:{White:"#FFFFFF",Alabaster:"#F8F8F8",Concrete:"#F3F3F3"}}),o.jsx(l,{title:"theme.color.primary",subtitle:"primary",colors:{tint:"#4cc4f9",default:"#38bdf8",shade:"#32aadf"}}),o.jsx(l,{title:"theme.color.gray",subtitle:"Gray",colors:{code:"#94a3b8;"}})]})]})}function w(t={}){const{wrapper:e}=Object.assign({},_(),t.components);return e?o.jsx(e,Object.assign({},t,{children:o.jsx(p,t)})):p()}export{w as default};
//# sourceMappingURL=Colors-bd171754.js.map
