import{d as f,M as x,e as g,f as s}from"./index-8e3d2f43.js";import{u as d}from"./index-e3fcc8b3.js";import"./iframe-9778fd45.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-11d98b33.js";import"./index-38ad35d1.js";import"./index-356e4a49.js";var u={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h=f,v=Symbol.for("react.element"),_=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,y=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k={key:!0,ref:!0,__self:!0,__source:!0};function m(e,r,i){var t,n={},l=null,c=null;i!==void 0&&(l=""+i),r.key!==void 0&&(l=""+r.key),r.ref!==void 0&&(c=r.ref);for(t in r)j.call(r,t)&&!k.hasOwnProperty(t)&&(n[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)n[t]===void 0&&(n[t]=r[t]);return{$$typeof:v,type:e,key:l,ref:c,props:n,_owner:y.current}}a.Fragment=_;a.jsx=m;a.jsxs=m;u.exports=a;var o=u.exports;function p(e){const r=Object.assign({h1:"h1",p:"p",a:"a"},d(),e.components);return o.jsxs(o.Fragment,{children:[`
`,`
`,o.jsx(x,{title:"Colors"}),`
`,o.jsx(r.h1,{id:"colors",children:"Colors"}),`
`,o.jsx(r.p,{children:o.jsx(r.a,{href:"https://uicolors.app/create",target:"_blank",rel:"nofollow noopener noreferrer",children:"ui colors"})}),`
`,o.jsxs(g,{children:[o.jsx(s,{title:"primary",colors:{light:"var(--color-primary-light)",default:"var(--color-primary)",dark:"var(--color-primary-dark)"}}),o.jsx(s,{title:"success",colors:{light:"var(--color-success-light)",default:"var(--color-success)",dark:"var(--color-success-dark)"}}),o.jsx(s,{title:"warning",subtitle:"--warning",colors:{light:"var(--color-warning-light)",default:"var(--color-warning)",dark:"var(--color-warning-dark)"}}),o.jsx(s,{title:"danger",colors:{light:"var(--color-danger-light)",default:"var(--color-danger)",dark:"var(--color-danger-dark)"}})]})]})}function P(e={}){const{wrapper:r}=Object.assign({},d(),e.components);return r?o.jsx(r,Object.assign({},e,{children:o.jsx(p,e)})):p(e)}export{P as default};
