import{B as l}from"./BaseInput-c9d99ccf.js";import"./vue.esm-bundler-54d62a26.js";import"./_plugin-vue_export-helper-c27b6911.js";const I={component:l,args:{label:"標題",placeholder:"請輸入",modelValue:""},render:(r,{vModel:n})=>({components:{BaseInput:l},setup(){const o=n("modelValue");return{args:r,modelValue:o}},template:`
      <BaseInput v-bind="args" v-model="modelValue" />
    `})},e={args:{}},a={render:(r,{vModel:n})=>({components:{BaseInput:l},setup(){const o=n("modelValue");return{args:r,modelValue:o}},template:`
      <BaseInput v-bind="args" v-model="modelValue" class="small" /> 
      <BaseInput v-bind="args" v-model="modelValue" />
      <BaseInput v-bind="args" v-model="modelValue" class="large" />
    `})},s={args:{disabled:!0}};var t,d,m;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {}
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,p,c;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (args, {
    vModel
  }) => ({
    components: {
      BaseInput
    },
    setup() {
      const modelValue = vModel('modelValue');
      return {
        args,
        modelValue
      };
    },
    template: \`
      <BaseInput v-bind="args" v-model="modelValue" class="small" /> 
      <BaseInput v-bind="args" v-model="modelValue" />
      <BaseInput v-bind="args" v-model="modelValue" class="large" />
    \`
  })
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var i,g,v;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const S=["Default","Size","Disabled"];export{e as Default,s as Disabled,a as Size,S as __namedExportsOrder,I as default};
