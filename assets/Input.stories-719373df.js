import{_ as a}from"./BaseInput-33545f5e.js";import{o as L,e as M,f as N}from"./vue.esm-bundler-d8eedbf7.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";import"./bundle-mjs-3a7afad5.js";const C={},R={xmlns:"http://www.w3.org/2000/svg",height:"16",width:"16",viewBox:"0 0 512 512"},F=N("path",{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"},null,-1),O=[F];function $(e,j){return L(),M("svg",R,O)}const E=P(C,[["render",$]]);C.__docgenInfo={displayName:"IconSearch",description:"",tags:{},sourceFiles:["/home/runner/work/uibook/uibook/src/components/icons/IconSearch.vue"]};const J={args:{placeholder:"請輸入",modelValue:""},component:a,render:e=>({components:{BaseInput:a},setup:()=>({args:e}),template:`
      <BaseInput v-bind="args" v-model="args.modelValue" />
    `})},s={args:{}},r={args:{color:"primary"}},n={render:e=>({components:{BaseInput:a},setup:()=>({args:e}),template:`
      <BaseInput v-bind="args" v-model="args.modelValue" size="sm" class="mb-2" /> 
      <BaseInput v-bind="args" v-model="args.modelValue" class="mb-2" />
      <BaseInput v-bind="args" v-model="args.modelValue" size="lg" class="mb-2" />
    `})},o={render:e=>({components:{BaseInput:a,IconSearch:E},setup:()=>({args:e}),template:`
      <BaseInput v-bind="args" v-model="args.modelValue" class="mb-2">
        <template #prefix>
          <IconSearch />
        </template>
      </BaseInput>
      <BaseInput v-bind="args" v-model="args.modelValue" color="primary" class="mb-2">
        <template #prefix>
          <IconSearch />
        </template>
      </BaseInput>
      <BaseInput v-bind="args" v-model="args.modelValue" class="mb-2">
        <template #suffix>
          <IconSearch />
        </template>
      </BaseInput>
    `})},t={args:{type:"password"},render:e=>({components:{BaseInput:a,IconSearch:E},setup:()=>({args:e}),template:`
      <BaseInput v-bind="args" v-model="args.modelValue" class="mb-2">
        <template #prefix>
          <IconSearch />
        </template>
      </BaseInput>
      <BaseInput v-bind="args" v-model="args.modelValue" color="primary" class="mb-2">
        <template #prefix>
          <IconSearch />
        </template>
      </BaseInput>
      <BaseInput v-bind="args" v-model="args.modelValue" color="primary">
        <template #suffix>
          <IconSearch />
        </template>
      </BaseInput>
    `})},m={args:{readonly:!0}},p={args:{disabled:!0}};var c,l,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {}
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,i,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    color: 'primary'
  }
}`,...(g=(i=r.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};var I,v,B;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => ({
    components: {
      BaseInput
    },
    setup: () => ({
      args
    }),
    template: \`
      <BaseInput v-bind="args" v-model="args.modelValue" size="sm" class="mb-2" /> 
      <BaseInput v-bind="args" v-model="args.modelValue" class="mb-2" />
      <BaseInput v-bind="args" v-model="args.modelValue" size="lg" class="mb-2" />
    \`
  })
}`,...(B=(v=n.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var b,f,h;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => ({
    components: {
      BaseInput,
      IconSearch
    },
    setup: () => ({
      args
    }),
    template: \`
      <BaseInput v-bind="args" v-model="args.modelValue" class="mb-2">
        <template #prefix>
          <IconSearch />
        </template>
      </BaseInput>
      <BaseInput v-bind="args" v-model="args.modelValue" color="primary" class="mb-2">
        <template #prefix>
          <IconSearch />
        </template>
      </BaseInput>
      <BaseInput v-bind="args" v-model="args.modelValue" class="mb-2">
        <template #suffix>
          <IconSearch />
        </template>
      </BaseInput>
    \`
  })
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var S,_,V;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    type: 'password'
  },
  render: args => ({
    components: {
      BaseInput,
      IconSearch
    },
    setup: () => ({
      args
    }),
    template: \`
      <BaseInput v-bind="args" v-model="args.modelValue" class="mb-2">
        <template #prefix>
          <IconSearch />
        </template>
      </BaseInput>
      <BaseInput v-bind="args" v-model="args.modelValue" color="primary" class="mb-2">
        <template #prefix>
          <IconSearch />
        </template>
      </BaseInput>
      <BaseInput v-bind="args" v-model="args.modelValue" color="primary">
        <template #suffix>
          <IconSearch />
        </template>
      </BaseInput>
    \`
  })
}`,...(V=(_=t.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var x,y,w;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    readonly: true
  }
}`,...(w=(y=m.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var z,k,D;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(D=(k=p.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};const K=["Default","Color","Size","Icon","Password","Readonly","Disabled"];export{r as Color,s as Default,p as Disabled,o as Icon,t as Password,m as Readonly,n as Size,K as __namedExportsOrder,J as default};
