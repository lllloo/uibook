import{_ as s}from"./BaseTooltip-BLDHjaNe.js";import{_ as p}from"./BaseButton-CD4_sXP7.js";import{r as c}from"./vue.esm-bundler-fHwfCklp.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./bundle-mjs-BkWO730n.js";const f={component:s,decorators:[t=>({components:{story:t},template:`
        <div class="decorators" style="width: 100%;padding-bottom:120px;">
          <story />
        </div>
      `})],render:t=>({components:{BaseTooltip:s,BaseButton:p},setup(){const n=c(!1);return{args:t,isFocus:n}},template:`
      <BaseButton ref="buttonRef" @click="isFocus = !isFocus">
        Default
        <BaseTooltip v-if="isFocus">
          123
        </BaseTooltip>
      </BaseButton>
    `})},o={args:{}};var e,r,a;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {}
}`,...(a=(r=o.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const _=["Default"];export{o as Default,_ as __namedExportsOrder,f as default};
