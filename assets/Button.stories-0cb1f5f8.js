import{_ as u}from"./BaseButton-9f0ceca3.js";import"./vue.esm-bundler-2707ab0b.js";import"./bundle-mjs-3a7afad5.js";const E={argTypes:{color:{control:"text"},size:{control:"text"}},component:u,render:e=>({components:{BaseButton:u},setup:()=>({args:e}),template:`
      <BaseButton v-bind="args">
        Button
      </BaseButton>
    `})},t={args:{}},r={args:{color:"primary"}},s={render:e=>({components:{BaseButton:u},setup:()=>({args:e}),template:`
      <BaseButton size="sm" class="mr-2">
        Small
      </BaseButton>
      <BaseButton class="mr-2">
        Button
      </BaseButton>
      <BaseButton size="lg">
        Large
      </BaseButton>
    `})},n={args:{outline:!0}},a={args:{color:"transparent",outline:!0},render:e=>({components:{BaseButton:u},setup:()=>({args:e}),template:`
      <BaseButton color="transparent" class="mr-2">
        Transparent
      </BaseButton>
      <BaseButton color="transparent" outline>
        Transparent Outline
      </BaseButton>
    `})},o={args:{disabled:!0}};var c,p,B;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {}
}`,...(B=(p=t.parameters)==null?void 0:p.docs)==null?void 0:B.source}}};var m,l,i;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    color: 'primary'
  }
}`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var d,g,S;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => ({
    components: {
      BaseButton
    },
    setup: () => ({
      args
    }),
    template: \`
      <BaseButton size="sm" class="mr-2">
        Small
      </BaseButton>
      <BaseButton class="mr-2">
        Button
      </BaseButton>
      <BaseButton size="lg">
        Large
      </BaseButton>
    \`
  })
}`,...(S=(g=s.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var z,T,x;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    outline: true
  }
}`,...(x=(T=n.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var _,b,f;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
      <BaseButton color="transparent" class="mr-2">
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
}`,...(L=(D=o.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};const h=["Default","Color","Size","OutLine","Text","Disabled"];export{r as Color,t as Default,o as Disabled,n as OutLine,s as Size,a as Text,h as __namedExportsOrder,E as default};
