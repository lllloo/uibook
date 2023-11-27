import{B as e}from"./BaseTooltip-a3aaf1ab.js";import{B as i}from"./BaseButton-873652e6.js";import{r as m}from"./vue.esm-bundler-d2d23598.js";import"./_plugin-vue_export-helper-c27b6911.js";const B={component:e,decorators:[t=>({components:{story:t},template:`
        <div class="decorators" style="width: 100%;padding-bottom:120px;">
          <story />
        </div>
      `})],render:(t,{vModel:c})=>({components:{BaseTooltip:e,BaseButton:i},setup(){const n=c("modelValue"),p=m(!1);return{args:t,modelValue:n,isFocus:p}},template:`
      <BaseButton ref="buttonRef" @click="isFocus = !isFocus">
        Default
        <BaseTooltip v-if="isFocus">
          123
        </BaseTooltip>
      </BaseButton>
    `})},o={args:{}};var s,r,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {}
}`,...(a=(r=o.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const g=["Default"];export{o as Default,g as __namedExportsOrder,B as default};
//# sourceMappingURL=Tooltip.stories-52315db9.js.map
