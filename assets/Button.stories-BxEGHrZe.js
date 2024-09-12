import{_ as c}from"./BaseButton-C-yBJPsA.js";import"./vue.esm-bundler-CAdwILBD.js";import"./bundle-mjs-Ciha5a76.js";const O={argTypes:{color:{control:"text"},size:{control:"text"}},component:c,render:o=>({components:{BaseButton:c},setup:()=>({args:o}),template:`
      <BaseButton v-bind="args">
        Button
      </BaseButton>
    `})},e={args:{}},r={args:{color:"primary"}},s={args:{class:"mr-2"},render:o=>({components:{BaseButton:c},setup:()=>({args:o}),template:`
      <BaseButton v-bind="args" size="sm">
        Small
      </BaseButton>
      <BaseButton v-bind="args">
        Button
      </BaseButton>
      <BaseButton v-bind="args" size="lg">
        Large
      </BaseButton>
    `})},a={args:{outline:!0}},t={args:{disabled:!0}},n={args:{tag:"a",href:"https://www.google.com",target:"_blank"}};var u,m,p;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {}
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var i,g,B;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    color: 'primary'
  }
}`,...(B=(g=r.parameters)==null?void 0:g.docs)==null?void 0:B.source}}};var d,l,b;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(b=(l=s.parameters)==null?void 0:l.docs)==null?void 0:b.source}}};var S,_,f;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    outline: true
  }
}`,...(f=(_=a.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var v,z,w;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(w=(z=t.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var L,h,k;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    tag: 'a',
    href: 'https://www.google.com',
    target: '_blank'
  }
}`,...(k=(h=n.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const C=["Default","Color","Size","OutLine","Disabled","Link"];export{r as Color,e as Default,t as Disabled,n as Link,a as OutLine,s as Size,C as __namedExportsOrder,O as default};
