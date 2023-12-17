import{f as v,d as g,w as L,z as R,u as V,g as m,j as U,t as q,l as G,n as H,o as b,x as J,y as K}from"./vue.esm-bundler-54d62a26.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";import{B as Q}from"./BaseField-d2277f1b.js";const X=e=>(J("data-v-4cf467d1"),e=e(),K(),e),Y=["value","disabled"],Z=X(()=>m("div",{class:"base-checkout__checkout"},[m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[m("path",{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"})])],-1)),$={key:0,class:"base-checkout__label"},T={__name:"BaseCheckout",props:{label:{type:String,default:""},modelValue:{type:[Array,Boolean],default:!1},value:{type:String,default:""},outline:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:l}){const a=e,A=l,o=v({get:()=>a.modelValue,set:i=>A("update:modelValue",i)}),E=v(()=>typeof o.value=="boolean"?o.value:o.value.includes(a.value));return(i,p)=>(b(),g("label",{class:H(["base-checkout",{"base-checkout--outline":e.outline,"is-disabled":e.disabled,"is-checked":V(E)}])},[L(m("input",{"onUpdate:modelValue":p[0]||(p[0]=j=>U(o)?o.value=j:null),value:e.value,type:"checkbox",disabled:e.disabled},null,8,Y),[[R,V(o)]]),Z,e.label?(b(),g("div",$,q(e.label),1)):G("",!0)],2))}},s=P(T,[["__scopeId","data-v-4cf467d1"]]);T.__docgenInfo={exportName:"default",displayName:"BaseCheckout",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",type:{name:"array|boolean"},defaultValue:{func:!1,value:"false"}},{name:"value",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"outline",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseCheckout.vue"]};const oe={component:s,argTypes:{modelValue:{control:"boolean",name:"v-model"}},args:{label:"Checkout"},render:(e,{vModel:l})=>({components:{BaseCheckout:s},setup(){const a=l("modelValue");return{args:e,modelValue:a}},template:`
      <BaseCheckout v-bind="args" v-model="modelValue" />
    `})},n={},t={args:{outline:!0}},u={render:(e,{vModel:l})=>({components:{BaseCheckout:s},setup(){const a=l("modelValue");return{args:e,modelValue:a}},template:`
      <BaseCheckout v-bind="args" v-model="modelValue" />
      <BaseCheckout v-bind="args" v-model="modelValue" class="primary" />
      <br>
      <BaseCheckout v-bind="args" v-model="modelValue" outline />
      <BaseCheckout v-bind="args" v-model="modelValue" class="primary" outline />
    `})},r={render:(e,{vModel:l})=>({components:{BaseCheckout:s},setup(){const a=l("modelValue");return{args:e,modelValue:a}},template:`
      <BaseCheckout v-bind="args" v-model="modelValue" class="small" outline />
      <BaseCheckout v-bind="args" v-model="modelValue" outline />
      <BaseCheckout v-bind="args" v-model="modelValue" class="large" outline />
    `})},d={args:{disabled:!0},render:(e,{vModel:l})=>({components:{BaseCheckout:s},setup(){const a=l("modelValue");return{args:e,modelValue:a}},template:`
      <BaseCheckout v-bind="args" v-model="modelValue" />
      <BaseCheckout v-bind="args" v-model="modelValue" outline />
    `})},c={argTypes:{modelValue:{control:"array",name:"v-model"}},args:{modelValue:[]},render:(e,{vModel:l})=>({components:{BaseField:Q,BaseCheckout:s},setup(){const a=l("modelValue");return{args:e,modelValue:a}},template:`
      <BaseField label="標題">
        <BaseCheckout v-bind="args" v-model="modelValue" value="1" style="margin-right: 10px;" />
        <BaseCheckout v-bind="args" v-model="modelValue" value="2" />
      </BaseField>
    `})};var h,k,B;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(B=(k=n.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var f,C,y;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    outline: true
  }
}`,...(y=(C=t.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var _,S,x;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
      <BaseCheckout v-bind="args" v-model="modelValue" class="primary" />
      <br>
      <BaseCheckout v-bind="args" v-model="modelValue" outline />
      <BaseCheckout v-bind="args" v-model="modelValue" class="primary" outline />
    \`
  })
}`,...(x=(S=u.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var M,w,F;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(F=(w=r.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var D,z,I;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(I=(z=d.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var N,W,O;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(O=(W=c.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};const se=["Default","Outline","Color","Size","Disabled","WithWrap"];export{u as Color,n as Default,d as Disabled,t as Outline,r as Size,c as WithWrap,se as __namedExportsOrder,oe as default};
