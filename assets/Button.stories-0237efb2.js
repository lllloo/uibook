import{c as P,r as W,n as x,o as V}from"./vue.esm-bundler-3c0112f6.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";const w={__name:"BaseButton",props:{small:{type:Boolean,default:!1},large:{type:Boolean,default:!1},type:{type:String,default:null},outline:{type:Boolean,default:!1},text:{type:Boolean,default:!1},radius:{type:Boolean,default:!1},circle:{type:Boolean,default:!1},disable:{type:Boolean,default:!1}},setup(e){return(v,k)=>(V(),P("button",{class:x({"base-button":!0,"base-button--small":e.small,"base-button--large":e.large,"base-button--outline":e.outline,"base-button--text":e.text,"base-button--circle":e.circle,"base-button--radius":e.radius,"base-button--disable":e.disable,[`base-button--${e.type}`]:e.type})},[W(v.$slots,"default",{},void 0,!0)],2))}},t=_(w,[["__scopeId","data-v-bfb487bf"]]);w.__docgenInfo={exportName:"default",displayName:"BaseButton",description:"",tags:{},props:[{name:"small",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"large",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"outline",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"text",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"radius",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"circle",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disable",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseButton.vue"]};const E={title:"Base/Button",component:t,tags:["autodocs"],render:e=>({components:{BaseButton:t},setup(){return{args:e}},template:`
      <BaseButton v-bind="args">
        Button
      </BaseButton>
    `})},a={args:{}},n={render:e=>({components:{BaseButton:t},setup(){return{args:e}},template:`
      <BaseButton>
        Default
      </BaseButton>
      <BaseButton type="primary">
        Primary
      </BaseButton>
      <BaseButton type="success">
        Success
      </BaseButton>
      <BaseButton type="warring">
        Warring
      </BaseButton>
      <BaseButton type="danger">
        Danger
      </BaseButton>

      <br>

      <BaseButton radius>
        Default
      </BaseButton>
      <BaseButton type="primary" radius>
        Primary
      </BaseButton>
      <BaseButton type="success" radius>
        Success
      </BaseButton>
      <BaseButton type="warring" radius>
        Warring
      </BaseButton>
      <BaseButton type="danger" radius>
        Danger
      </BaseButton>

      <br>

      <BaseButton circle>
        <i class="fas fa-search"></i>
      </BaseButton>
      <BaseButton type="primary" circle>
        <i class="fas fa-search"></i>
      </BaseButton>
      <BaseButton type="success" circle>
        <i class="fas fa-search"></i>
      </BaseButton>
      <BaseButton type="warring" circle>
        <i class="fas fa-search"></i>
      </BaseButton>
      <BaseButton type="danger" circle>
        <i class="fas fa-search"></i>
      </BaseButton>
    `})},s={render:e=>({components:{BaseButton:t},setup(){return{args:e}},template:`
      <BaseButton small>
        Small
      </BaseButton>
      <BaseButton>
        Button
      </BaseButton>
      <BaseButton large>
        Large
      </BaseButton>
    `})},u={render:e=>({components:{BaseButton:t},setup(){return{args:e}},template:`
      <BaseButton outline>
        Default
      </BaseButton>
      <BaseButton type="primary" outline>
        Primary
      </BaseButton>
      <BaseButton type="success" outline>
        Success
      </BaseButton>
      <BaseButton type="warring" outline>
        Warring
      </BaseButton>
      <BaseButton type="danger" outline>
        Danger
      </BaseButton>

      <br>

      <BaseButton radius outline>
        Default
      </BaseButton>
      <BaseButton type="primary" radius outline>
        Primary
      </BaseButton>
      <BaseButton type="success" radius outline>
        Success
      </BaseButton>
      <BaseButton type="warring" radius outline>
        Warring
      </BaseButton>
      <BaseButton type="danger" radius outline>
        Danger
      </BaseButton>

      <br>

      <BaseButton circle outline>
        <i class="fas fa-search"></i>
      </BaseButton>
      <BaseButton type="primary" circle outline>
        <i class="fas fa-search"></i>
      </BaseButton>
      <BaseButton type="success" circle outline>
        <i class="fas fa-search"></i>
      </BaseButton>
      <BaseButton type="warring" circle outline>
        <i class="fas fa-search"></i>
      </BaseButton>
      <BaseButton type="danger" circle outline>
        <i class="fas fa-search"></i>
      </BaseButton>
    `})},B={render:e=>({components:{BaseButton:t},setup(){return{args:e}},template:`
      <BaseButton disable>
        Default
      </BaseButton>
      <BaseButton type="primary" disable>
        Primary
      </BaseButton>
      <BaseButton type="success" disable>
        Success
      </BaseButton>
      <BaseButton type="warring" disable>
        Warring
      </BaseButton>
      <BaseButton type="danger" disable>
        Danger
      </BaseButton>
    `})};var r,o,l;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {}
}`,...(l=(o=a.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var i,c,p;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
      <BaseButton>
        Default
      </BaseButton>
      <BaseButton type="primary">
        Primary
      </BaseButton>
      <BaseButton type="success">
        Success
      </BaseButton>
      <BaseButton type="warring">
        Warring
      </BaseButton>
      <BaseButton type="danger">
        Danger
      </BaseButton>

      <br>

      <BaseButton radius>
        Default
      </BaseButton>
      <BaseButton type="primary" radius>
        Primary
      </BaseButton>
      <BaseButton type="success" radius>
        Success
      </BaseButton>
      <BaseButton type="warring" radius>
        Warring
      </BaseButton>
      <BaseButton type="danger" radius>
        Danger
      </BaseButton>

      <br>

      <BaseButton circle>
        <i class="fas fa-search"></i>
      </BaseButton>
      <BaseButton type="primary" circle>
        <i class="fas fa-search"></i>
      </BaseButton>
      <BaseButton type="success" circle>
        <i class="fas fa-search"></i>
      </BaseButton>
      <BaseButton type="warring" circle>
        <i class="fas fa-search"></i>
      </BaseButton>
      <BaseButton type="danger" circle>
        <i class="fas fa-search"></i>
      </BaseButton>
    \`
  })
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var f,d,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(d=s.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var m,g,b;u.parameters={...u.parameters,docs:{...(m=u.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
      <BaseButton outline>
        Default
      </BaseButton>
      <BaseButton type="primary" outline>
        Primary
      </BaseButton>
      <BaseButton type="success" outline>
        Success
      </BaseButton>
      <BaseButton type="warring" outline>
        Warring
      </BaseButton>
      <BaseButton type="danger" outline>
        Danger
      </BaseButton>

      <br>

      <BaseButton radius outline>
        Default
      </BaseButton>
      <BaseButton type="primary" radius outline>
        Primary
      </BaseButton>
      <BaseButton type="success" radius outline>
        Success
      </BaseButton>
      <BaseButton type="warring" radius outline>
        Warring
      </BaseButton>
      <BaseButton type="danger" radius outline>
        Danger
      </BaseButton>

      <br>

      <BaseButton circle outline>
        <i class="fas fa-search"></i>
      </BaseButton>
      <BaseButton type="primary" circle outline>
        <i class="fas fa-search"></i>
      </BaseButton>
      <BaseButton type="success" circle outline>
        <i class="fas fa-search"></i>
      </BaseButton>
      <BaseButton type="warring" circle outline>
        <i class="fas fa-search"></i>
      </BaseButton>
      <BaseButton type="danger" circle outline>
        <i class="fas fa-search"></i>
      </BaseButton>
    \`
  })
}`,...(b=(g=u.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var D,h,S;B.parameters={...B.parameters,docs:{...(D=B.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
      <BaseButton disable>
        Default
      </BaseButton>
      <BaseButton type="primary" disable>
        Primary
      </BaseButton>
      <BaseButton type="success" disable>
        Success
      </BaseButton>
      <BaseButton type="warring" disable>
        Warring
      </BaseButton>
      <BaseButton type="danger" disable>
        Danger
      </BaseButton>
    \`
  })
}`,...(S=(h=B.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const I=["Default","Type","Size","Outline","Disable"];export{a as Default,B as Disable,u as Outline,s as Size,n as Type,I as __namedExportsOrder,E as default};
//# sourceMappingURL=Button.stories-0237efb2.js.map
