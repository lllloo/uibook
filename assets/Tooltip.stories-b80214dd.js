import{_ as t}from"./BaseTooltip-28f9463a.js";import{_ as c}from"./BaseButton-215c3b55.js";import{r as p}from"./vue.esm-bundler-e5714eb6.js";import"./_plugin-vue_export-helper-c27b6911.js";const d={component:t,decorators:[s=>({components:{story:s},template:`
        <div class="decorators" style="width: 100%;padding-bottom:120px;">
          <story />
        </div>
      `})],render:s=>({components:{BaseTooltip:t,BaseButton:c},setup(){const n=p(!1);return{args:s,isFocus:n}},template:`
      <BaseButton ref="buttonRef" @click="isFocus = !isFocus">
        Default
        <BaseTooltip v-if="isFocus">
          123
        </BaseTooltip>
      </BaseButton>
    `})},o={args:{}};var e,r,a;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {}
}`,...(a=(r=o.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const f=["Default"];export{o as Default,f as __namedExportsOrder,d as default};
