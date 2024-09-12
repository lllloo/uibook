import{_ as a}from"./BaseField-w0DDbMXK.js";import{_ as p}from"./BaseInput-Bap_G0R6.js";import"./vue.esm-bundler-CTq_6KXf.js";import"./bundle-mjs-Ciha5a76.js";const _={component:a,args:{label:"標題",name:"name",modelValue:""},render:c=>({components:{BaseField:a,BaseInput:p},setup:()=>({args:c}),template:`
      <BaseField
        v-bind="args"
        v-slot="{ field }"
        v-model="args.modelValue"
        class="mb-4"
        name="test"
      >
        <BaseInput
          v-bind="field"
          placeholder="請輸入"
        />
      </BaseField>
    `})},e={},r={args:{color:"primary"}};var s,o,t;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var m,l,n;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    color: 'primary'
  }
}`,...(n=(l=r.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const g=["Default","Color"];export{r as Color,e as Default,g as __namedExportsOrder,_ as default};
