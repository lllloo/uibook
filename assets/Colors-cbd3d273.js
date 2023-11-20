import{d as m,M as d,e as x,f as s}from"./index-c9efc951.js";import{u as _}from"./index-820db23d.js";import"./iframe-821fb246.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-cd97d88f.js";import"./index-356e4a49.js";var u={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j=m,y=Symbol.for("react.element"),b=Symbol.for("react.fragment"),O=Object.prototype.hasOwnProperty,v=j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function f(r,e,a){var o,n={},l=null,c=null;a!==void 0&&(l=""+a),e.key!==void 0&&(l=""+e.key),e.ref!==void 0&&(c=e.ref);for(o in e)O.call(e,o)&&!g.hasOwnProperty(o)&&(n[o]=e[o]);if(r&&r.defaultProps)for(o in e=r.defaultProps,e)n[o]===void 0&&(n[o]=e[o]);return{$$typeof:y,type:r,key:l,ref:c,props:n,_owner:v.current}}i.Fragment=b;i.jsx=f;i.jsxs=f;u.exports=i;var t=u.exports;function p(r){return t.jsxs(t.Fragment,{children:[`
`,`
`,t.jsx(d,{title:"Colors"}),`
`,t.jsxs(x,{children:[t.jsx(s,{title:"primary",subtitle:"--primary",colors:{code:"#60a5fa;"}}),t.jsx(s,{title:"success",subtitle:"--success",colors:{code:"#4ade80;"}}),t.jsx(s,{title:"warning",subtitle:"--warning",colors:{code:"#facc15;"}}),t.jsx(s,{title:"danger",subtitle:"--danger",colors:{code:"#f87171;"}}),t.jsx(s,{title:"disable",subtitle:"--disable",colors:{code:"#9ca3af;"}})]})]})}function P(r={}){const{wrapper:e}=Object.assign({},_(),r.components);return e?t.jsx(e,Object.assign({},r,{children:t.jsx(p,r)})):p()}export{P as default};
//# sourceMappingURL=Colors-cbd3d273.js.map
