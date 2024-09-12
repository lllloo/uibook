import{B as c}from"./BaseTextarea-CmCsAMDI.js";import"./vue.esm-bundler-CTq_6KXf.js";import"./bundle-mjs-Ciha5a76.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const E={args:{placeholder:"請輸入",modelValue:""},component:c,render:m=>({components:{BaseTextarea:c},setup:()=>({args:m}),template:`
      <BaseTextarea v-bind="args" v-model="args.modelValue" />
    `})},e={args:{}},a={args:{color:"primary"}},r={render:m=>({components:{BaseTextarea:c},setup:()=>({args:m}),template:`
      <BaseTextarea v-bind="args" v-model="args.modelValue" size="sm" class="mb-2" /> 
      <BaseTextarea v-bind="args" v-model="args.modelValue" class="mb-2" />
      <BaseTextarea v-bind="args" v-model="args.modelValue" size="lg" class="mb-2" />
    `})},s={args:{outline:!1}},o={args:{readonly:!0}},t={args:{disabled:!0}},n={args:{autoHeight:!0}};var l,d,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {}
}`,...(u=(d=e.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var p,i,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    color: 'primary'
  }
}`,...(g=(i=a.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};var b,v,x;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => ({
    components: {
      BaseTextarea
    },
    setup: () => ({
      args
    }),
    template: \`
      <BaseTextarea v-bind="args" v-model="args.modelValue" size="sm" class="mb-2" /> 
      <BaseTextarea v-bind="args" v-model="args.modelValue" class="mb-2" />
      <BaseTextarea v-bind="args" v-model="args.modelValue" size="lg" class="mb-2" />
    \`
  })
}`,...(x=(v=r.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var B,T,S;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    outline: false
  }
}`,...(S=(T=s.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var V,f,y;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    readonly: true
  }
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var z,h,D;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(D=(h=t.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var H,O,_;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    autoHeight: true
  }
}`,...(_=(O=n.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};const j=["Default","Color","Size","OutLine","Readonly","Disabled","AutoHeight"];export{n as AutoHeight,a as Color,e as Default,t as Disabled,s as OutLine,o as Readonly,r as Size,j as __namedExportsOrder,E as default};
