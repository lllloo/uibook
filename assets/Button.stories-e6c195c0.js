import{c as _,r as v,n as D,o as x}from"./vue.esm-bundler-3c0112f6.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";const b={__name:"BaseButton",props:{small:{type:Boolean,default:!1},large:{type:Boolean,default:!1},type:{type:String,default:null},outline:{type:Boolean,default:!1},text:{type:Boolean,default:!1}},setup(e){return(S,w)=>(x(),_("button",{class:D(["base-button",{"base-button--small":e.small,"base-button--large":e.large,"base-button--outline":e.outline,"base-button--text":e.text,[`base-button--${e.type}`]:e.type}])},[v(S.$slots,"default",{},void 0,!0)],2))}},t=k(b,[["__scopeId","data-v-54026a17"]]);b.__docgenInfo={exportName:"default",displayName:"BaseButton",description:"",tags:{},props:[{name:"small",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"large",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"outline",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"text",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseButton.vue"]};const W={title:"Base/Button",component:t,tags:["autodocs"],decorators:[e=>({components:{story:e},template:'<div class="decorators"><story/></div>'})],render:e=>({components:{BaseButton:t},setup(){return{args:e}},template:`
      <BaseButton v-bind="args">
        Button
      </BaseButton>
    `})},n={args:{}},a={render:e=>({components:{BaseButton:t},setup(){return{args:e}},template:`
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
    `})},o={render:e=>({components:{BaseButton:t},setup(){return{args:e}},template:`
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
    `})};var u,r,B;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {}
}`,...(B=(r=n.parameters)==null?void 0:r.docs)==null?void 0:B.source}}};var l,p,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
    \`
  })
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,i,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(d=(i=s.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var f,y,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
    \`
  })
}`,...(g=(y=o.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const z=["Default","Type","Size","Outline"];export{n as Default,o as Outline,s as Size,a as Type,z as __namedExportsOrder,W as default};
//# sourceMappingURL=Button.stories-e6c195c0.js.map
