import{_ as a}from"./BaseField-D7YWNh60.js";import{_ as d}from"./BaseInput-MNrpEtQq.js";import"./vue.esm-bundler-c49UoOgO.js";import"./bundle-mjs-CX0aN7IN.js";const _={component:a,args:{label:"標題",name:"name",modelValue:""},render:c=>({components:{BaseField:a,BaseInput:d},setup:()=>({args:c}),template:`
      <BaseField
        v-bind="args"
        v-model="args.modelValue"
        v-slot="{ field }"
        class="mb-4"
      >
        <BaseInput
          v-model="field.value"
          :name="field.name"
          placeholder="請輸入"
        />
      </BaseField>
    `})},e={},r={args:{color:"primary"}};var o,s,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(m=(s=e.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var l,t,n;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    color: 'primary'
  }
}`,...(n=(t=r.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const g=["Default","Color"];export{r as Color,e as Default,g as __namedExportsOrder,_ as default};
