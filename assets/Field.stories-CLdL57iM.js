import{_ as o}from"./BaseField-tTlz-2cF.js";import{_ as t}from"./BaseInput-DZizCO01.js";import"./vue.esm-bundler-fHwfCklp.js";import"./bundle-mjs-BkWO730n.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const L={component:o,args:{label:"標題"},render:e=>({components:{BaseField:o,BaseInput:t},setup:()=>({args:e}),template:`
      <BaseField v-bind="args">
        <BaseInput placeholder="請輸入" />
      </BaseField>
    `})},r={},a={args:{color:"primary"},render:e=>({components:{BaseField:o,BaseInput:t},setup:()=>({args:e}),template:`
      <BaseField v-bind="args">
        <BaseInput placeholder="請輸入" color="primary" />
      </BaseField>
    `})},s={args:{label:"標題",oneLine:!0}},n={args:{label:"標題",error:"必填"},render:e=>({components:{BaseField:o,BaseInput:t},setup:()=>({args:e}),template:`
      <BaseField v-bind="args" class="mb-6">
        <BaseInput placeholder="請輸入" />
      </BaseField>
      <BaseField v-bind="args" oneLine>
        <BaseInput placeholder="請輸入" />
      </BaseField>
    `})};var l,p,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var i,c,u;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    color: 'primary'
  },
  render: args => ({
    components: {
      BaseField,
      BaseInput
    },
    setup: () => ({
      args
    }),
    template: \`
      <BaseField v-bind="args">
        <BaseInput placeholder="請輸入" color="primary" />
      </BaseField>
    \`
  })
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var m,B,F;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: '標題',
    oneLine: true
  }
}`,...(F=(B=s.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var g,b,I;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: '標題',
    error: '必填'
  },
  render: args => ({
    components: {
      BaseField,
      BaseInput
    },
    setup: () => ({
      args
    }),
    template: \`
      <BaseField v-bind="args" class="mb-6">
        <BaseInput placeholder="請輸入" />
      </BaseField>
      <BaseField v-bind="args" oneLine>
        <BaseInput placeholder="請輸入" />
      </BaseField>
    \`
  })
}`,...(I=(b=n.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};const A=["Default","Color","OneLine","Error"];export{a as Color,r as Default,n as Error,s as OneLine,A as __namedExportsOrder,L as default};
