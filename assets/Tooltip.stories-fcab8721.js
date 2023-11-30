import{_ as e}from"./BaseTooltip-d63abf6e.js";import{B as i}from"./BaseButton-7c47ca80.js";import{r as m}from"./vue.esm-bundler-54d62a26.js";import"./_plugin-vue_export-helper-c27b6911.js";const B={component:e,decorators:[t=>({components:{story:t},template:`
        <div class="decorators" style="width: 100%;padding-bottom:120px;">
          <story />
        </div>
      `})],render:(t,{vModel:n})=>({components:{BaseTooltip:e,BaseButton:i},setup(){const c=n("modelValue"),p=m(!1);return{args:t,modelValue:c,isFocus:p}},template:`
      <BaseButton ref="buttonRef" @click="isFocus = !isFocus">
        Default
        <BaseTooltip v-if="isFocus">
          123
        </BaseTooltip>
      </BaseButton>
    `})},o={args:{}};var s,r,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {}
}`,...(a=(r=o.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const _=["Default"];export{o as Default,_ as __namedExportsOrder,B as default};
