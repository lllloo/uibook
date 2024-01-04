import{B as s}from"./BaseInput-6cad3a10.js";import{o as N,c as P,a as R}from"./vue.esm-bundler-2ef2e216.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";const E={},O={xmlns:"http://www.w3.org/2000/svg",height:"16",width:"16",viewBox:"0 0 512 512"},j=R("path",{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"},null,-1),q=[j];function A(e,n){return N(),P("svg",O,q)}const L=F(E,[["render",A]]);E.__docgenInfo={displayName:"IconSearch",description:"",tags:{},sourceFiles:["/home/runner/work/uibook/uibook/src/components/icons/IconSearch.vue"]};const K={component:s,args:{label:"標題",placeholder:"請輸入",modelValue:""},render:(e,{vModel:n})=>({components:{BaseInput:s},setup(){const a=n("modelValue");return{args:e,modelValue:a}},template:`
      <BaseInput v-bind="args" v-model="modelValue" />
    `})},o={args:{}},r={render:(e,{vModel:n})=>({components:{BaseInput:s},setup(){const a=n("modelValue");return{args:e,modelValue:a}},template:`
      <BaseInput v-bind="args" v-model="modelValue" />
      <BaseInput class="primary" v-bind="args" v-model="modelValue" />
    `})},l={render:(e,{vModel:n})=>({components:{BaseInput:s},setup(){const a=n("modelValue");return{args:e,modelValue:a}},template:`
      <BaseInput v-bind="args" v-model="modelValue" class="small" /> 
      <BaseInput v-bind="args" v-model="modelValue" />
      <BaseInput v-bind="args" v-model="modelValue" class="large" />
    `})},t={render:(e,{vModel:n})=>({components:{BaseInput:s,IconSearch:L},setup(){const a=n("modelValue");return{args:e,modelValue:a}},template:`
      <BaseInput v-bind="args" v-model="modelValue">
        <IconSearch />
      </BaseInput>
      <BaseInput v-bind="args" v-model="modelValue" class="primary">
        <IconSearch />
      </BaseInput>
    `})},d={args:{type:"password"},render:(e,{vModel:n})=>({components:{BaseInput:s,IconSearch:L},setup(){const a=n("modelValue");return{args:e,modelValue:a}},template:`
      <BaseInput v-bind="args" v-model="modelValue">
        <IconSearch />
      </BaseInput>
      <BaseInput v-bind="args" v-model="modelValue" class="primary">
        <IconSearch />
      </BaseInput>
    `})},c={args:{readonly:!0}},m={args:{disabled:!0}};var u,p,i;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {}
}`,...(i=(p=o.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var g,v,I;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(I=(v=r.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var V,B,b;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(b=(B=l.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var h,S,_;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args, {
    vModel
  }) => ({
    components: {
      BaseInput,
      IconSearch
    },
    setup() {
      const modelValue = vModel('modelValue');
      return {
        args,
        modelValue
      };
    },
    template: \`
      <BaseInput v-bind="args" v-model="modelValue">
        <IconSearch />
      </BaseInput>
      <BaseInput v-bind="args" v-model="modelValue" class="primary">
        <IconSearch />
      </BaseInput>
    \`
  })
}`,...(_=(S=t.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var y,f,w;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    type: 'password'
  },
  render: (args, {
    vModel
  }) => ({
    components: {
      BaseInput,
      IconSearch
    },
    setup() {
      const modelValue = vModel('modelValue');
      return {
        args,
        modelValue
      };
    },
    template: \`
      <BaseInput v-bind="args" v-model="modelValue">
        <IconSearch />
      </BaseInput>
      <BaseInput v-bind="args" v-model="modelValue" class="primary">
        <IconSearch />
      </BaseInput>
    \`
  })
}`,...(w=(f=d.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var M,x,k;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    readonly: true
  }
}`,...(k=(x=c.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var z,D,C;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(C=(D=m.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};const Q=["Default","Color","Size","Icon","Password","Readonly","Disabled"];export{r as Color,o as Default,m as Disabled,t as Icon,d as Password,c as Readonly,l as Size,Q as __namedExportsOrder,K as default};
