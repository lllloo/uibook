import{d,M as f,e as x,f as s}from"./index-afba8235.js";import{u as _}from"./index-b6cf2073.js";import"./iframe-2be032f7.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-cd97d88f.js";import"./index-356e4a49.js";var m={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j=d,y=Symbol.for("react.element"),b=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,g=j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function u(t,r,a){var o,n={},l=null,c=null;a!==void 0&&(l=""+a),r.key!==void 0&&(l=""+r.key),r.ref!==void 0&&(c=r.ref);for(o in r)v.call(r,o)&&!O.hasOwnProperty(o)&&(n[o]=r[o]);if(t&&t.defaultProps)for(o in r=t.defaultProps,r)n[o]===void 0&&(n[o]=r[o]);return{$$typeof:y,type:t,key:l,ref:c,props:n,_owner:g.current}}i.Fragment=b;i.jsx=u;i.jsxs=u;m.exports=i;var e=m.exports;function p(t){return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(f,{title:"Colors"}),`
`,e.jsxs(x,{children:[e.jsx(s,{title:"primary",colors:{light:"var(--color-primary-light)",default:"var(--color-primary)",dark:"var(--color-primary-dark)"}}),e.jsx(s,{title:"success",subtitle:"--success",colors:{code:"#4ade80;"}}),e.jsx(s,{title:"warning",subtitle:"--warning",colors:{code:"#facc15;"}}),e.jsx(s,{title:"danger",subtitle:"--danger",colors:{code:"#f87171;"}}),e.jsx(s,{title:"disable",subtitle:"--disable",colors:{code:"#9ca3af;"}})]})]})}function P(t={}){const{wrapper:r}=Object.assign({},_(),t.components);return r?e.jsx(r,Object.assign({},t,{children:e.jsx(p,t)})):p()}export{P as default};
//# sourceMappingURL=Colors-9d24cfce.js.map
