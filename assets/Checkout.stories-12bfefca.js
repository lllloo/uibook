import{f as O,r as T,d as v,w as A,z as E,u as n,g as m,j,t as L,l as R,n as U,o as g,x as q,y as G}from"./vue.esm-bundler-54d62a26.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";import{B as J}from"./BaseField-ea666822.js";const K=e=>(q("data-v-f0731db3"),e=e(),G(),e),P=["value","disabled"],Q=K(()=>m("div",{class:"base-checkout__checkout"},[m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[m("path",{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"})])],-1)),X={key:0,class:"base-checkout__label"},z={__name:"BaseCheckout",props:{label:{type:String,default:""},modelValue:{type:[Array,Boolean],default:!1},value:{type:String,default:""},outline:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:l}){const a=e,I=l,o=O({get:()=>a.modelValue,set:i=>I("update:modelValue",i)});var N=T(typeof a.modelValue);return(i,p)=>(g(),v("label",{class:U(["base-checkout",{"base-checkout--outline":e.outline,"is-disabled":e.disabled,"is-checked":n(N)==="boolean"?n(o):n(o).includes(e.value)}])},[A(m("input",{"onUpdate:modelValue":p[0]||(p[0]=W=>j(o)?o.value=W:null),value:e.value,type:"checkbox",disabled:e.disabled},null,8,P),[[E,n(o)]]),Q,e.label?(g(),v("div",X,L(e.label),1)):R("",!0)],2))}},s=H(z,[["__scopeId","data-v-f0731db3"]]);z.__docgenInfo={exportName:"default",displayName:"BaseCheckout",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",type:{name:"array|boolean"},defaultValue:{func:!1,value:"false"}},{name:"value",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"outline",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseCheckout.vue"]};const ee={component:s,argTypes:{modelValue:{control:"boolean",name:"v-model"}},args:{label:"Checkout"},render:(e,{vModel:l})=>({components:{BaseCheckout:s},setup(){const a=l("modelValue");return{args:e,modelValue:a}},template:`
      <BaseCheckout v-bind="args" v-model="modelValue" />
    `})},t={},u={render:(e,{vModel:l})=>({components:{BaseCheckout:s},setup(){const a=l("modelValue");return{args:e,modelValue:a}},template:`
      <BaseCheckout v-bind="args" v-model="modelValue" class="small" outline />
      <BaseCheckout v-bind="args" v-model="modelValue" outline />
      <BaseCheckout v-bind="args" v-model="modelValue" class="large" outline />
    `})},d={args:{outline:!0}},r={args:{disabled:!0},render:(e,{vModel:l})=>({components:{BaseCheckout:s},setup(){const a=l("modelValue");return{args:e,modelValue:a}},template:`
      <BaseCheckout v-bind="args" v-model="modelValue" />
      <BaseCheckout v-bind="args" v-model="modelValue" outline />
    `})},c={argTypes:{modelValue:{control:"array",name:"v-model"}},args:{modelValue:[]},render:(e,{vModel:l})=>({components:{BaseField:J,BaseCheckout:s},setup(){const a=l("modelValue");return{args:e,modelValue:a}},template:`
      <BaseField label="標題">
        <BaseCheckout v-bind="args" v-model="modelValue" value="1" style="margin-right: 10px;" />
        <BaseCheckout v-bind="args" v-model="modelValue" value="2" />
      </BaseField>
    `})};var V,b,h;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:"{}",...(h=(b=t.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var f,k,B;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
      <BaseCheckout v-bind="args" v-model="modelValue" class="small" outline />
      <BaseCheckout v-bind="args" v-model="modelValue" outline />
      <BaseCheckout v-bind="args" v-model="modelValue" class="large" outline />
    \`
  })
}`,...(B=(k=u.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var y,C,_;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    outline: true
  }
}`,...(_=(C=d.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var x,S,w;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
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
      <BaseCheckout v-bind="args" v-model="modelValue" />
      <BaseCheckout v-bind="args" v-model="modelValue" outline />
    \`
  })
}`,...(w=(S=r.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var M,F,D;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(D=(F=c.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};const ae=["Default","Size","Outline","Disabled","WithWrap"];export{t as Default,r as Disabled,d as Outline,u as Size,c as WithWrap,ae as __namedExportsOrder,ee as default};
