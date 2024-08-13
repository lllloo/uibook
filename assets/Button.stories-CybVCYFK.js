import{_ as o}from"./BaseButton-CwPzKLpa.js";import"./vue.esm-bundler-fHwfCklp.js";import"./bundle-mjs-BkWO730n.js";const y={argTypes:{color:{control:"text"},size:{control:"text"}},component:o,render:n=>({components:{BaseButton:o},setup:()=>({args:n}),template:`
      <BaseButton v-bind="args">
        Button
      </BaseButton>
    `})},e={args:{}},s={args:{color:"primary"}},r={args:{class:"mr-2"},render:n=>({components:{BaseButton:o},setup:()=>({args:n}),template:`
      <BaseButton v-bind="args" size="sm">
        Small
      </BaseButton>
      <BaseButton v-bind="args">
        Button
      </BaseButton>
      <BaseButton v-bind="args" size="lg">
        Large
      </BaseButton>
    `})},t={args:{outline:!0}},a={args:{disabled:!0}};var u,c,m;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {}
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var i,p,B;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    color: 'primary'
  }
}`,...(B=(p=s.parameters)==null?void 0:p.docs)==null?void 0:B.source}}};var d,l,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    class: 'mr-2'
  },
  render: args => ({
    components: {
      BaseButton
    },
    setup: () => ({
      args
    }),
    template: \`
      <BaseButton v-bind="args" size="sm">
        Small
      </BaseButton>
      <BaseButton v-bind="args">
        Button
      </BaseButton>
      <BaseButton v-bind="args" size="lg">
        Large
      </BaseButton>
    \`
  })
}`,...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var b,S,v;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    outline: true
  }
}`,...(v=(S=t.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var z,_,f;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(f=(_=a.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};const O=["Default","Color","Size","OutLine","Disabled"];export{s as Color,e as Default,a as Disabled,t as OutLine,r as Size,O as __namedExportsOrder,y as default};
