import{d as f,M as x,e as h,f as l}from"./index-e4c15720.js";import{u as d}from"./index-638763b7.js";import"./iframe-d0a0568a.js";import"../sb-preview/runtime.js";import"./index-863dc768.js";import"./index-11d98b33.js";import"./index-356e4a49.js";var u={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=f,_=Symbol.for("react.element"),g=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,y=v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k={key:!0,ref:!0,__self:!0,__source:!0};function m(e,r,i){var t,n={},a=null,c=null;i!==void 0&&(a=""+i),r.key!==void 0&&(a=""+r.key),r.ref!==void 0&&(c=r.ref);for(t in r)j.call(r,t)&&!k.hasOwnProperty(t)&&(n[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)n[t]===void 0&&(n[t]=r[t]);return{$$typeof:_,type:e,key:a,ref:c,props:n,_owner:y.current}}s.Fragment=g;s.jsx=m;s.jsxs=m;u.exports=s;var o=u.exports;function p(e){const r={a:"a",h1:"h1",p:"p",...d(),...e.components};return o.jsxs(o.Fragment,{children:[`
`,`
`,o.jsx(x,{title:"Colors"}),`
`,o.jsx(r.h1,{id:"colors",children:"Colors"}),`
`,o.jsx(r.p,{children:o.jsx(r.a,{href:"https://uicolors.app/create",rel:"nofollow",children:"ui colors"})}),`
`,o.jsxs(h,{children:[o.jsx(l,{title:"primary",colors:{light:"var(--color-primary-light)",default:"var(--color-primary)",dark:"var(--color-primary-dark)"}}),o.jsx(l,{title:"success",colors:{light:"var(--color-success-light)",default:"var(--color-success)",dark:"var(--color-success-dark)"}}),o.jsx(l,{title:"warning",subtitle:"--warning",colors:{light:"var(--color-warning-light)",default:"var(--color-warning)",dark:"var(--color-warning-dark)"}}),o.jsx(l,{title:"danger",colors:{light:"var(--color-danger-light)",default:"var(--color-danger)",dark:"var(--color-danger-dark)"}})]})]})}function D(e={}){const{wrapper:r}={...d(),...e.components};return r?o.jsx(r,{...e,children:o.jsx(p,{...e})}):p(e)}export{D as default};
