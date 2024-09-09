import{ag as x,al as d,am as _,an as a}from"./index-Brm_T0i_.js";import{u as m}from"./index-D13qqwMn.js";import"./iframe-BnEihrGW.js";import"../sb-preview/runtime.js";import"./index-TAVom-gR.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";var f={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j=x,y=Symbol.for("react.element"),h=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,C=j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,i){var t,n={},l=null,c=null;i!==void 0&&(l=""+i),r.key!==void 0&&(l=""+r.key),r.ref!==void 0&&(c=r.ref);for(t in r)v.call(r,t)&&!g.hasOwnProperty(t)&&(n[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)n[t]===void 0&&(n[t]=r[t]);return{$$typeof:y,type:e,key:l,ref:c,props:n,_owner:C.current}}s.Fragment=h;s.jsx=u;s.jsxs=u;f.exports=s;var o=f.exports;function p(e){const r={a:"a",h1:"h1",p:"p",...m(),...e.components};return o.jsxs(o.Fragment,{children:[`
`,`
`,o.jsx(d,{title:"Colors"}),`
`,o.jsx(r.h1,{id:"colors",children:"Colors"}),`
`,o.jsx(r.p,{children:o.jsx(r.a,{href:"https://uicolors.app/create",rel:"nofollow",children:"ui colors"})}),`
`,o.jsxs(_,{children:[o.jsx(a,{title:"primary",colors:{default:"rgb(var(--color-primary))"}}),o.jsx(a,{title:"secondary",colors:{default:"rgb(var(--color-secondary))"}}),o.jsx(a,{title:"ring",colors:{default:"rgb(var(--color-ring))"}})]})]})}function M(e={}){const{wrapper:r}={...m(),...e.components};return r?o.jsx(r,{...e,children:o.jsx(p,{...e})}):p(e)}export{M as default};
