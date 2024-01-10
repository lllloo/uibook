import{_ as t}from"./BaseButton-67a92a23.js";import"./vue.esm-bundler-e891fed6.js";import"./_plugin-vue_export-helper-c27b6911.js";const T={component:t,render:n=>({components:{BaseButton:t},setup(){return{args:n}},template:`
      <BaseButton v-bind="args">
        Button
      </BaseButton>
    `})},e={args:{}},s={render:n=>({components:{BaseButton:t},setup(){return{args:n}},template:`
      <BaseButton class="primary">
        Primary
      </BaseButton>
    `})},a={render:n=>({components:{BaseButton:t},setup(){return{args:n}},template:`
      <BaseButton class="small">
        Small
      </BaseButton>
      <BaseButton>
        Button
      </BaseButton>
      <BaseButton class="large">
        Large
      </BaseButton>
    `})},r={args:{text:!0},render:n=>({components:{BaseButton:t},setup(){return{args:n}},template:`
      <BaseButton v-bind="args">
        Button
      </BaseButton>

      <BaseButton v-bind="args" class="primary">
        Button
      </BaseButton>
    `})},o={args:{outline:!0},render:n=>({components:{BaseButton:t},setup(){return{args:n}},template:`
    <BaseButton v-bind="args">
    Button
  </BaseButton>

  <BaseButton v-bind="args" class="primary">
    Button
  </BaseButton>
    `})},u={render:n=>({components:{BaseButton:t},setup(){return{args:n}},template:`
      <BaseButton disabled>
        Primary
      </BaseButton>

      <BaseButton class="primary" disabled>
        Button
      </BaseButton>
    `})};var B,p,c;e.parameters={...e.parameters,docs:{...(B=e.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {}
}`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,l,i;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => ({
    components: {
      BaseButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <BaseButton class="primary">
        Primary
      </BaseButton>
    \`
  })
}`,...(i=(l=s.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var d,g,b;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => ({
    components: {
      BaseButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <BaseButton class="small">
        Small
      </BaseButton>
      <BaseButton>
        Button
      </BaseButton>
      <BaseButton class="large">
        Large
      </BaseButton>
    \`
  })
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var y,S,v;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    text: true
  },
  render: args => ({
    components: {
      BaseButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <BaseButton v-bind="args">
        Button
      </BaseButton>

      <BaseButton v-bind="args" class="primary">
        Button
      </BaseButton>
    \`
  })
}`,...(v=(S=r.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var _,x,f;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    outline: true
  },
  render: args => ({
    components: {
      BaseButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <BaseButton v-bind="args">
    Button
  </BaseButton>

  <BaseButton v-bind="args" class="primary">
    Button
  </BaseButton>
    \`
  })
}`,...(f=(x=o.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var D,L,P;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => ({
    components: {
      BaseButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <BaseButton disabled>
        Primary
      </BaseButton>

      <BaseButton class="primary" disabled>
        Button
      </BaseButton>
    \`
  })
}`,...(P=(L=u.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};const E=["Default","Color","Size","Text","OutLine","Disable"];export{s as Color,e as Default,u as Disable,o as OutLine,a as Size,r as Text,E as __namedExportsOrder,T as default};
