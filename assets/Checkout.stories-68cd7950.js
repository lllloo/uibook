import{d as F,b as M,c as I,w as z,k as D,f as t,e as s,i as W,t as N,n as O,o as T,p as A,h as E}from"./vue.esm-bundler-3c0112f6.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import{B as R}from"./BaseField-12996924.js";const U=e=>(A("data-v-d274e42f"),e=e(),E(),e),j=["value"],q=U(()=>s("div",{class:"base-checkout__checkout"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("path",{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"})])],-1)),G={class:"base-checkout__label"},x={__name:"BaseCheckout",props:{label:{type:String,default:""},modelValue:{type:[Array,Boolean],default:!1},value:{type:String,default:""},small:{type:Boolean,default:!1},large:{type:Boolean,default:!1},outline:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:l}){const a=e,o=F({get:()=>a.modelValue,set:m=>l("update:modelValue",m)});var S=M(typeof a.modelValue);return(m,i)=>(T(),I("label",{class:O({"base-checkout":!0,"base-checkout--small":e.small,"base-checkout--large":e.large,"base-checkout--outline":e.outline,"is-checked":t(S)==="boolean"?t(o):t(o).includes(e.value)})},[z(s("input",{"onUpdate:modelValue":i[0]||(i[0]=w=>W(o)?o.value=w:null),value:e.value,type:"checkbox"},null,8,j),[[D,t(o)]]),q,s("div",G,N(e.label),1)],2))}},c=L(x,[["__scopeId","data-v-d274e42f"]]);x.__docgenInfo={exportName:"default",displayName:"BaseCheckout",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",type:{name:"array|boolean"},defaultValue:{func:!1,value:"false"}},{name:"value",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"small",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"large",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"outline",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseCheckout.vue"]};const P={title:"Base/Checkout",component:c,tags:["autodocs"],argTypes:{modelValue:{control:"boolean",name:"v-model"}},args:{label:"Checkout"},render:(e,{vModel:l})=>({components:{BaseCheckout:c},setup(){const a=l("modelValue");return{args:e,modelValue:a}},template:`
      <BaseCheckout v-bind="args" v-model="modelValue" />
    `})},n={},u={render:(e,{vModel:l})=>({components:{BaseCheckout:c},setup(){const a=l("modelValue");return{args:e,modelValue:a}},template:`
      <BaseCheckout v-bind="args" v-model="modelValue" small outline />
      <BaseCheckout v-bind="args" v-model="modelValue" outline />
      <BaseCheckout v-bind="args" v-model="modelValue" large outline />
    `})},r={args:{outline:!0}},d={argTypes:{modelValue:{control:"array",name:"v-model"}},args:{modelValue:[]},render:(e,{vModel:l})=>({components:{BaseField:R,BaseCheckout:c},setup(){const a=l("modelValue");return{args:e,modelValue:a}},template:`
      <BaseField label="標題">
        <BaseCheckout v-bind="args" v-model="modelValue" value="1" style="margin-right: 10px;" />
        <BaseCheckout v-bind="args" v-model="modelValue" value="2" />
      </BaseField>
    `})};var p,v,f;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var g,h,V;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args, {
    vModel
  }) => ({
    components: {
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
      <BaseCheckout v-bind="args" v-model="modelValue" small outline />
      <BaseCheckout v-bind="args" v-model="modelValue" outline />
      <BaseCheckout v-bind="args" v-model="modelValue" large outline />
    \`
  })
}`,...(V=(h=u.parameters)==null?void 0:h.docs)==null?void 0:V.source}}};var b,k,B;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    outline: true
  }
}`,...(B=(k=r.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var y,C,_;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(_=(C=d.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};const Q=["Default","Size","Outline","WithWrap"];export{n as Default,r as Outline,u as Size,d as WithWrap,Q as __namedExportsOrder,P as default};
//# sourceMappingURL=Checkout.stories-68cd7950.js.map
