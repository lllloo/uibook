import{_ as e}from"./BaseTooltip-aa4684e9.js";import{_ as i}from"./BaseButton-67a92a23.js";import{r as u}from"./vue.esm-bundler-e891fed6.js";import"./_plugin-vue_export-helper-c27b6911.js";const f={component:e,decorators:[t=>({components:{story:t},template:`
        <div class="decorators" style="width: 100%;padding-bottom:120px;">
          <story />
        </div>
      `})],render:(t,{vModel:n})=>({components:{BaseTooltip:e,BaseButton:i},setup(){const p=n("modelValue"),c=u(!1);return{args:t,modelValue:p,isFocus:c}},template:`
      <BaseButton ref="buttonRef" @click="isFocus = !isFocus">
        Default
        <BaseTooltip v-if="isFocus">
          123
        </BaseTooltip>
      </BaseButton>
    `})},o={args:{}};var s,r,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {}
}`,...(a=(r=o.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const B=["Default"];export{o as Default,B as __namedExportsOrder,f as default};
