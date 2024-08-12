import{ag as f,al as x,am as h,an as a}from"./index-s8FnwFmv.js";import{u as d}from"./index-DjcqlCvH.js";import"./iframe-BEvtgpKy.js";import"../sb-preview/runtime.js";import"./index-TAVom-gR.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";var u={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=f,g=Symbol.for("react.element"),_=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,y=v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k={key:!0,ref:!0,__self:!0,__source:!0};function m(e,r,i){var t,n={},s=null,c=null;i!==void 0&&(s=""+i),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(c=r.ref);for(t in r)j.call(r,t)&&!k.hasOwnProperty(t)&&(n[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)n[t]===void 0&&(n[t]=r[t]);return{$$typeof:g,type:e,key:s,ref:c,props:n,_owner:y.current}}l.Fragment=_;l.jsx=m;l.jsxs=m;u.exports=l;var o=u.exports;function p(e){const r={a:"a",h1:"h1",p:"p",...d(),...e.components};return o.jsxs(o.Fragment,{children:[`
`,`
`,o.jsx(x,{title:"Colors"}),`
`,o.jsx(r.h1,{id:"colors",children:"Colors"}),`
`,o.jsx(r.p,{children:o.jsx(r.a,{href:"https://uicolors.app/create",rel:"nofollow",children:"ui colors"})}),`
`,o.jsxs(h,{children:[o.jsx(a,{title:"primary",colors:{light:"var(--color-primary-light)",default:"var(--color-primary)",dark:"var(--color-primary-dark)"}}),o.jsx(a,{title:"success",colors:{light:"var(--color-success-light)",default:"var(--color-success)",dark:"var(--color-success-dark)"}}),o.jsx(a,{title:"warning",subtitle:"--warning",colors:{light:"var(--color-warning-light)",default:"var(--color-warning)",dark:"var(--color-warning-dark)"}}),o.jsx(a,{title:"danger",colors:{light:"var(--color-danger-light)",default:"var(--color-danger)",dark:"var(--color-danger-dark)"}})]})]})}function M(e={}){const{wrapper:r}={...d(),...e.components};return r?o.jsx(r,{...e,children:o.jsx(p,{...e})}):p(e)}export{M as default};
