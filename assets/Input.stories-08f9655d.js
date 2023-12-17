import{B as a}from"./BaseInput-989509ff.js";import"./vue.esm-bundler-54d62a26.js";import"./_plugin-vue_export-helper-c27b6911.js";const A={component:a,args:{label:"標題",placeholder:"請輸入",modelValue:""},render:(e,{vModel:s})=>({components:{BaseInput:a},setup(){const n=s("modelValue");return{args:e,modelValue:n}},template:`
      <BaseInput v-bind="args" v-model="modelValue" />
    `})},o={args:{}},t={render:(e,{vModel:s})=>({components:{BaseInput:a},setup(){const n=s("modelValue");return{args:e,modelValue:n}},template:`
      <BaseInput v-bind="args" v-model="modelValue" />
      <BaseInput class="primary" v-bind="args" v-model="modelValue" />
    `})},l={render:(e,{vModel:s})=>({components:{BaseInput:a},setup(){const n=s("modelValue");return{args:e,modelValue:n}},template:`
      <BaseInput v-bind="args" v-model="modelValue" />
      <BaseInput v-bind="args" v-model="modelValue" class="radius" />
    `})},r={render:(e,{vModel:s})=>({components:{BaseInput:a},setup(){const n=s("modelValue");return{args:e,modelValue:n}},template:`
      <BaseInput v-bind="args" v-model="modelValue" class="small" /> 
      <BaseInput v-bind="args" v-model="modelValue" />
      <BaseInput v-bind="args" v-model="modelValue" class="large" />
    `})},m={args:{disabled:!0}},p={render:(e,{vModel:s})=>({components:{BaseInput:a},setup(){const n=s("modelValue");return{args:e,modelValue:n}},template:`
      <BaseInput v-bind="args" v-model="modelValue" inputClass="!pl-8">
        <span class="absolute left-3 top-1/2 -translate-y-1/2 opacity-60">
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
        </span>
      </BaseInput>
      <BaseInput v-bind="args" v-model="modelValue" class="primary" inputClass="!pl-8">
        <span class="absolute left-3 top-1/2 -translate-y-1/2 opacity-60">
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
        </span>
      </BaseInput>
    `})};var d,u,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {}
}`,...(c=(u=o.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var i,g,v;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
      <BaseInput v-bind="args" v-model="modelValue" />
      <BaseInput class="primary" v-bind="args" v-model="modelValue" />
    \`
  })
}`,...(v=(g=t.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var V,w,I;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
      <BaseInput v-bind="args" v-model="modelValue" />
      <BaseInput v-bind="args" v-model="modelValue" class="radius" />
    \`
  })
}`,...(I=(w=l.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var h,B,b;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(b=(B=r.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var f,y,M;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(M=(y=m.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};var S,C,F;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
      <BaseInput v-bind="args" v-model="modelValue" inputClass="!pl-8">
        <span class="absolute left-3 top-1/2 -translate-y-1/2 opacity-60">
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
        </span>
      </BaseInput>
      <BaseInput v-bind="args" v-model="modelValue" class="primary" inputClass="!pl-8">
        <span class="absolute left-3 top-1/2 -translate-y-1/2 opacity-60">
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
        </span>
      </BaseInput>
    \`
  })
}`,...(F=(C=p.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};const D=["Default","Color","Type","Size","Disabled","Icon"];export{t as Color,o as Default,m as Disabled,p as Icon,r as Size,l as Type,D as __namedExportsOrder,A as default};
