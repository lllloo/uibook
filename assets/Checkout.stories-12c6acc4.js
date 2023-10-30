import{d as C,b as x,c as S,e as s,w as F,k as L,f as t,i as w,t as I,n as W,o as M,p as N,h as O}from"./vue.esm-bundler-3c0112f6.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";import{B as A}from"./BaseField-fd1569cc.js";const D=e=>(N("data-v-3ef68a03"),e=e(),O(),e),E={class:"input-wrap"},P=["value"],z=D(()=>s("div",{class:"checkbox"},[s("i",{class:"fas fa-check"})],-1)),R={class:"label"},k={__name:"BaseCheckout",props:{label:{type:String,default:""},modelValue:{type:[Array,Boolean],default:!1},value:{type:String,default:""},small:{type:Boolean,default:!1},large:{type:Boolean,default:!1},outLine:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:l}){const a=e,o=C({get:()=>a.modelValue,set:d=>l("update:modelValue",d)});var B=x(typeof a.modelValue);return(d,m)=>(M(),S("label",{class:W(["base-checkout",{"base-checkout--small":e.small,"base-checkout--large":e.large,"out-line":e.outLine,"is-checked":t(B)==="boolean"?t(o):t(o).includes(e.value)}])},[s("div",E,[F(s("input",{"onUpdate:modelValue":m[0]||(m[0]=_=>w(o)?o.value=_:null),value:e.value,type:"checkbox"},null,8,P),[[L,t(o)]]),z]),s("div",R,I(e.label),1)],2))}},c=T(k,[["__scopeId","data-v-3ef68a03"]]);k.__docgenInfo={exportName:"default",displayName:"BaseCheckout",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",type:{name:"array|boolean"},defaultValue:{func:!1,value:"false"}},{name:"value",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"small",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"large",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"outLine",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseCheckout.vue"]};const G={title:"Base/Checkout",component:c,tags:["autodocs"],argTypes:{modelValue:{control:"boolean",name:"v-model"}},args:{label:"Checkout"},render:(e,{vModel:l})=>({components:{BaseCheckout:c},setup(){const a=l("modelValue");return{args:e,modelValue:a}},template:`
      <BaseCheckout v-bind="args" v-model="modelValue" />
    `})},n={},u={args:{outLine:!0}},r={argTypes:{modelValue:{control:"array",name:"v-model"}},args:{modelValue:[]},render:(e,{vModel:l})=>({components:{BaseField:A,BaseCheckout:c},setup(){const a=l("modelValue");return{args:e,modelValue:a}},template:`
      <BaseField label="標題">
        <BaseCheckout v-bind="args" v-model="modelValue" value="1" style="margin-right: 10px;" />
        <BaseCheckout v-bind="args" v-model="modelValue" value="2" />
      </BaseField>
    `})};var i,p,f;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(f=(p=n.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var v,g,h;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    outLine: true
  }
}`,...(h=(g=u.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var V,y,b;r.parameters={...r.parameters,docs:{...(V=r.parameters)==null?void 0:V.docs,source:{originalSource:`{
  argTypes: {
    modelValue: {
      control: 'array',
      name: 'v-model'
    }
  },
  args: {
    modelValue: []
  },
  render: (args, {
    vModel
  }) => ({
    components: {
      BaseField,
      BaseCheckout
    },
    setup() {
      const modelValue = vModel('modelValue');
      return {
        args,
        modelValue
      };
    },
    template: \`
      <BaseField label="標題">
        <BaseCheckout v-bind="args" v-model="modelValue" value="1" style="margin-right: 10px;" />
        <BaseCheckout v-bind="args" v-model="modelValue" value="2" />
      </BaseField>
    \`
  })
}`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const H=["Primary","OutLine","WithWrap"];export{u as OutLine,n as Primary,r as WithWrap,H as __namedExportsOrder,G as default};
//# sourceMappingURL=Checkout.stories-12c6acc4.js.map
