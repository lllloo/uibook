import{B as s}from"./BaseInput-6cf1744a.js";import{o as N,c as P,a as T}from"./vue.esm-bundler-1c9234ae.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";const E={},O={xmlns:"http://www.w3.org/2000/svg",height:"16",width:"16",viewBox:"0 0 512 512"},j=T("path",{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"},null,-1),q=[j];function A(e,a){return N(),P("svg",O,q)}const L=F(E,[["render",A]]);E.__docgenInfo={displayName:"IconSearch",description:"",tags:{},sourceFiles:["/home/runner/work/uibook/uibook/src/components/icons/IconSearch.vue"]};const K={component:s,args:{label:"標題",placeholder:"請輸入",modelValue:""},render:(e,{vModel:a})=>({components:{BaseInput:s},setup(){const n=a("modelValue");return{args:e,modelValue:n}},template:`
      <BaseInput v-bind="args" v-model="modelValue" />
    `})},o={args:{}},r={render:(e,{vModel:a})=>({components:{BaseInput:s},setup(){const n=a("modelValue");return{args:e,modelValue:n}},template:`
      <BaseInput v-bind="args" v-model="modelValue" />
      <BaseInput class="primary" v-bind="args" v-model="modelValue" />
    `})},l={render:(e,{vModel:a})=>({components:{BaseInput:s},setup(){const n=a("modelValue");return{args:e,modelValue:n}},template:`
      <BaseInput v-bind="args" v-model="modelValue" />
      <BaseInput v-bind="args" v-model="modelValue" class="radius" />
    `})},t={render:(e,{vModel:a})=>({components:{BaseInput:s},setup(){const n=a("modelValue");return{args:e,modelValue:n}},template:`
      <BaseInput v-bind="args" v-model="modelValue" class="small" /> 
      <BaseInput v-bind="args" v-model="modelValue" />
      <BaseInput v-bind="args" v-model="modelValue" class="large" />
    `})},p={args:{disabled:!0}},d={render:(e,{vModel:a})=>({components:{BaseInput:s,IconSearch:L},setup(){const n=a("modelValue");return{args:e,modelValue:n}},template:`
      <BaseInput v-bind="args" v-model="modelValue" inputClass="!pl-8">
        <span class="absolute left-3 top-1/2 -translate-y-1/2 opacity-70">
          <IconSearch />
        </span>
      </BaseInput>
      <BaseInput v-bind="args" v-model="modelValue" class="primary" inputClass="!pl-8">
        <span class="absolute left-3 top-1/2 -translate-y-1/2 opacity-70">
          <IconSearch />
        </span>
      </BaseInput>
    `})},u={args:{type:"password"},render:(e,{vModel:a})=>({components:{BaseInput:s,IconSearch:L},setup(){const n=a("modelValue");return{args:e,modelValue:n}},template:`
      <BaseInput v-bind="args" v-model="modelValue" inputClass="!pl-8">
        <span class="absolute left-3 top-1/2 -translate-y-1/2 opacity-60">
          <IconSearch />
        </span>
      </BaseInput>
      <BaseInput v-bind="args" v-model="modelValue" class="primary" inputClass="!pl-8">
        <span class="absolute left-3 top-1/2 -translate-y-1/2 opacity-60">
          <IconSearch />
        </span>
      </BaseInput>
    `})};var c,m,i;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {}
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var v,g,I;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(I=(g=r.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var V,B,b;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(b=(B=l.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var y,h,S;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(S=(h=t.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var _,f,M;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(M=(f=p.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var w,C,x;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
      <BaseInput v-bind="args" v-model="modelValue" inputClass="!pl-8">
        <span class="absolute left-3 top-1/2 -translate-y-1/2 opacity-70">
          <IconSearch />
        </span>
      </BaseInput>
      <BaseInput v-bind="args" v-model="modelValue" class="primary" inputClass="!pl-8">
        <span class="absolute left-3 top-1/2 -translate-y-1/2 opacity-70">
          <IconSearch />
        </span>
      </BaseInput>
    \`
  })
}`,...(x=(C=d.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var k,z,D;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
      <BaseInput v-bind="args" v-model="modelValue" inputClass="!pl-8">
        <span class="absolute left-3 top-1/2 -translate-y-1/2 opacity-60">
          <IconSearch />
        </span>
      </BaseInput>
      <BaseInput v-bind="args" v-model="modelValue" class="primary" inputClass="!pl-8">
        <span class="absolute left-3 top-1/2 -translate-y-1/2 opacity-60">
          <IconSearch />
        </span>
      </BaseInput>
    \`
  })
}`,...(D=(z=u.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};const Q=["Default","Color","Type","Size","Disabled","Icon","Password"];export{r as Color,o as Default,p as Disabled,d as Icon,u as Password,t as Size,l as Type,Q as __namedExportsOrder,K as default};
