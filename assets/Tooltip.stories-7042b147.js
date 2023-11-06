import{B as t}from"./BaseTooltip-595c2c19.js";import{B as m}from"./BaseButton-04c455dc.js";import{r as s}from"./vue.esm-bundler-a711ab6d.js";import"./_plugin-vue_export-helper-c27b6911.js";const b={component:t,decorators:[e=>({components:{story:e},template:`
        <div class="decorators" style="width: 100%;padding-bottom:120px;">
          <story />
        </div>
      `})],render:(e,{vModel:c})=>({components:{BaseTooltip:t,BaseButton:m},setup(){const p=c("modelValue"),i=s(),u=s(!1);return{args:e,modelValue:p,buttonRef:i,isFocus:u}},template:`
      <BaseButton ref="buttonRef" @click="isFocus = !isFocus">
        Default
        <BaseTooltip v-if="isFocus" :reference="buttonRef">
          123
        </BaseTooltip>
      </BaseButton>
    `})},o={args:{}};var r,a,n;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {}
}`,...(n=(a=o.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const g=["Default"];export{o as Default,g as __namedExportsOrder,b as default};
//# sourceMappingURL=Tooltip.stories-7042b147.js.map
