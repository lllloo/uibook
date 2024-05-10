import{_ as u}from"./BaseButton-215c3b55.js";import"./vue.esm-bundler-e5714eb6.js";const v={argTypes:{color:{control:"text"},size:{control:"text"}},component:u,render:e=>({components:{BaseButton:u},setup:()=>({args:e}),template:`
      <BaseButton v-bind="args">
        Button
      </BaseButton>
    `})},t={args:{}},n={args:{color:"primary"}},r={render:e=>({components:{BaseButton:u},setup:()=>({args:e}),template:`
      <BaseButton size="sm">
        Small
      </BaseButton>
      <BaseButton class="mx-2">
        Button
      </BaseButton>
      <BaseButton size="lg">
        Large
      </BaseButton>
    `})},s={args:{outline:!0}},a={args:{color:"transparent",outline:!0},render:e=>({components:{BaseButton:u},setup:()=>({args:e}),template:`
      <BaseButton color="transparent">
        Transparent
      </BaseButton>
      <BaseButton color="transparent" outline>
        Transparent Outline
      </BaseButton>
    `})},o={args:{disabled:!0}};var c,B,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {}
}`,...(p=(B=t.parameters)==null?void 0:B.docs)==null?void 0:p.source}}};var m,l,i;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    color: 'primary'
  }
}`,...(i=(l=n.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var d,g,S;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => ({
    components: {
      BaseButton
    },
    setup: () => ({
      args
    }),
    template: \`
      <BaseButton size="sm">
        Small
      </BaseButton>
      <BaseButton class="mx-2">
        Button
      </BaseButton>
      <BaseButton size="lg">
        Large
      </BaseButton>
    \`
  })
}`,...(S=(g=r.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var x,z,T;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    outline: true
  }
}`,...(T=(z=s.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var _,b,f;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    color: 'transparent',
    outline: true
  },
  render: args => ({
    components: {
      BaseButton
    },
    setup: () => ({
      args
    }),
    template: \`
      <BaseButton color="transparent">
        Transparent
      </BaseButton>
      <BaseButton color="transparent" outline>
        Transparent Outline
      </BaseButton>
    \`
  })
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var O,D,L;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(L=(D=o.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};const E=["Default","Color","Size","OutLine","Text","Disable"];export{n as Color,t as Default,o as Disable,s as OutLine,r as Size,a as Text,E as __namedExportsOrder,v as default};
