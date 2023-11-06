import{c as z,r as W,a as N,w as O,m as T,u as t,d as s,i as A,t as E,n as L,o as R,p as U,k as j}from"./vue.esm-bundler-a711ab6d.js";import{_ as q}from"./_plugin-vue_export-helper-c27b6911.js";import{B as G}from"./BaseField-850dee9b.js";const H=e=>(U("data-v-671c812c"),e=e(),j(),e),J=["value","disabled"],K=H(()=>s("div",{class:"base-checkout__checkout"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("path",{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"})])],-1)),P={class:"base-checkout__label"},F={__name:"BaseCheckout",props:{label:{type:String,default:""},modelValue:{type:[Array,Boolean],default:!1},value:{type:String,default:""},small:{type:Boolean,default:!1},large:{type:Boolean,default:!1},outline:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:l}){const a=e,o=z({get:()=>a.modelValue,set:i=>l("update:modelValue",i)});var D=W(typeof a.modelValue);return(i,p)=>(R(),N("label",{class:L({"base-checkout":!0,"base-checkout--small":e.small,"base-checkout--large":e.large,"base-checkout--outline":e.outline,"is-disabled":e.disabled,"is-checked":t(D)==="boolean"?t(o):t(o).includes(e.value)})},[O(s("input",{"onUpdate:modelValue":p[0]||(p[0]=I=>A(o)?o.value=I:null),value:e.value,type:"checkbox",disabled:e.disabled},null,8,J),[[T,t(o)]]),K,s("div",P,E(e.label),1)],2))}},n=q(F,[["__scopeId","data-v-671c812c"]]);F.__docgenInfo={exportName:"default",displayName:"BaseCheckout",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",type:{name:"array|boolean"},defaultValue:{func:!1,value:"false"}},{name:"value",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"small",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"large",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"outline",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseCheckout.vue"]};const Z={component:n,argTypes:{modelValue:{control:"boolean",name:"v-model"}},args:{label:"Checkout"},render:(e,{vModel:l})=>({components:{BaseCheckout:n},setup(){const a=l("modelValue");return{args:e,modelValue:a}},template:`
      <BaseCheckout v-bind="args" v-model="modelValue" />
    `})},u={},r={render:(e,{vModel:l})=>({components:{BaseCheckout:n},setup(){const a=l("modelValue");return{args:e,modelValue:a}},template:`
      <BaseCheckout v-bind="args" v-model="modelValue" small outline />
      <BaseCheckout v-bind="args" v-model="modelValue" outline />
      <BaseCheckout v-bind="args" v-model="modelValue" large outline />
    `})},d={args:{outline:!0}},c={args:{disabled:!0},render:(e,{vModel:l})=>({components:{BaseCheckout:n},setup(){const a=l("modelValue");return{args:e,modelValue:a}},template:`
      <BaseCheckout v-bind="args" v-model="modelValue" />
      <BaseCheckout v-bind="args" v-model="modelValue" outline />
    `})},m={argTypes:{modelValue:{control:"array",name:"v-model"}},args:{modelValue:[]},render:(e,{vModel:l})=>({components:{BaseField:G,BaseCheckout:n},setup(){const a=l("modelValue");return{args:e,modelValue:a}},template:`
      <BaseField label="標題">
        <BaseCheckout v-bind="args" v-model="modelValue" value="1" style="margin-right: 10px;" />
        <BaseCheckout v-bind="args" v-model="modelValue" value="2" />
      </BaseField>
    `})};var v,g,V;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(V=(g=u.parameters)==null?void 0:g.docs)==null?void 0:V.source}}};var b,f,h;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var k,B,y;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    outline: true
  }
}`,...(y=(B=d.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var C,_,S;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(S=(_=c.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var x,w,M;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(M=(w=m.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};const $=["Default","Size","Outline","Disabled","WithWrap"];export{u as Default,c as Disabled,d as Outline,r as Size,m as WithWrap,$ as __namedExportsOrder,Z as default};
//# sourceMappingURL=Checkout.stories-fc3577a5.js.map
