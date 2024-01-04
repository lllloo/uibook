import{B as t}from"./BaseButton-d7572767.js";import"./vue.esm-bundler-2ef2e216.js";import"./_plugin-vue_export-helper-c27b6911.js";const T={component:t,render:n=>({components:{BaseButton:t},setup(){return{args:n}},template:`
      <BaseButton v-bind="args">
        Button
      </BaseButton>
    `})},e={args:{}},s={render:n=>({components:{BaseButton:t},setup(){return{args:n}},template:`
      <BaseButton class="primary">
        Primary
      </BaseButton>
    `})},r={render:n=>({components:{BaseButton:t},setup(){return{args:n}},template:`
      <BaseButton class="small">
        Small
      </BaseButton>
      <BaseButton>
        Button
      </BaseButton>
      <BaseButton class="large">
        Large
      </BaseButton>
    `})},a={args:{text:!0},render:n=>({components:{BaseButton:t},setup(){return{args:n}},template:`
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
}`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,l,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var i,g,b;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var y,S,v;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(v=(S=a.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var x,f,D;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(D=(f=o.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var L,P,O;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(O=(P=u.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};const E=["Default","Color","Size","Text","OutLine","Disable"];export{s as Color,e as Default,u as Disable,o as OutLine,r as Size,a as Text,E as __namedExportsOrder,T as default};
