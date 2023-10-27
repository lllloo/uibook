import{c as p,r as d,n as i,o as f}from"./vue.esm-bundler-3c0112f6.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";const B={__name:"BaseButton",props:{small:{type:Boolean,default:!1},large:{type:Boolean,default:!1}},setup(e){return(m,g)=>(f(),p("button",{class:i(["base-button",{"base-button--small":e.small,"base-button--large":e.large}])},[d(m.$slots,"default",{},void 0,!0)],2))}},n=_(B,[["__scopeId","data-v-9d927401"]]);B.__docgenInfo={exportName:"default",displayName:"BaseButton",description:"",tags:{},props:[{name:"small",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"large",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/form/BaseButton.vue"]};const v={title:"Base/Button",component:n,tags:["autodocs"],render:e=>({components:{BaseButton:n},setup(){return{args:e}},template:`
      <BaseButton v-bind="args">
        Button
      </BaseButton>
    `})},t={args:{}},a={decorators:[e=>({components:{story:e},template:'<div class="decorators"><story/></div>'})],render:e=>({components:{BaseButton:n},setup(){return{args:e}},template:`
      <BaseButton small>
        Small
      </BaseButton>
      <BaseButton>
        Button
      </BaseButton>
      <BaseButton large>
        Large
      </BaseButton>
    `})};var s,o,r;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {}
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var u,l,c;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  decorators: [story => ({
    components: {
      story
    },
    template: '<div class="decorators"><story/></div>'
  })],
  render: args => ({
    components: {
      BaseButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <BaseButton small>
        Small
      </BaseButton>
      <BaseButton>
        Button
      </BaseButton>
      <BaseButton large>
        Large
      </BaseButton>
    \`
  })
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const S=["Primary","Size"];export{t as Primary,a as Size,S as __namedExportsOrder,v as default};
//# sourceMappingURL=Button.stories-e414fede.js.map
