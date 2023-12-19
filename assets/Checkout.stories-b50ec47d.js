import{o as m,c as i,a as p,k as V,p as U,D as j,m as h,q as G,z as H,t as J,g as K,n as P}from"./vue.esm-bundler-1c9234ae.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";import{B as Q}from"./BaseField-d59241dd.js";const T={},X={xmlns:"http://www.w3.org/2000/svg",height:"16",width:"16",viewBox:"0 0 512 512"},Y=p("path",{d:"M173.9 439.4l-166.4-166.4c-10-10-10-26.2 0-36.2l36.2-36.2c10-10 26.2-10 36.2 0L192 312.7 432.1 72.6c10-10 26.2-10 36.2 0l36.2 36.2c10 10 10 26.2 0 36.2l-294.4 294.4c-10 10-26.2 10-36.2 0z"},null,-1),Z=[Y];function ee(e,a){return m(),i("svg",X,Z)}const ae=O(T,[["render",ee]]);T.__docgenInfo={displayName:"IconCheck",description:"",tags:{},sourceFiles:["/home/runner/work/uibook/uibook/src/components/icons/IconCheck.vue"]};const oe=["value","disabled"],le={class:"base-checkout__checkout"},ne={key:0,class:"base-checkout__label"},A={__name:"BaseCheckout",props:{label:{type:String,default:""},modelValue:{type:[Array,Boolean],default:!1},value:{type:String,default:""},outline:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:a}){const o=e,E=a,l=V({get:()=>o.modelValue,set:v=>E("update:modelValue",v)}),q=V(()=>typeof l.value=="boolean"?l.value:l.value.includes(o.value));return(v,g)=>{const L=ae;return m(),i("label",{class:P(["base-checkout",{"base-checkout--outline":e.outline,"is-disabled":e.disabled,"is-checked":h(q)}])},[U(p("input",{"onUpdate:modelValue":g[0]||(g[0]=R=>G(l)?l.value=R:null),value:e.value,type:"checkbox",disabled:e.disabled},null,8,oe),[[j,h(l)]]),p("div",le,[H(L)]),e.label?(m(),i("div",ne,J(e.label),1)):K("",!0)],2)}}},n=O(A,[["__scopeId","data-v-0fe3d953"]]);A.__docgenInfo={exportName:"default",displayName:"BaseCheckout",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",type:{name:"array|boolean"},defaultValue:{func:!1,value:"false"}},{name:"value",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"outline",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseCheckout.vue"]};const ue={component:n,argTypes:{modelValue:{control:"boolean",name:"v-model"}},args:{label:"Checkout"},render:(e,{vModel:a})=>({components:{BaseCheckout:n},setup(){const o=a("modelValue");return{args:e,modelValue:o}},template:`
      <BaseCheckout v-bind="args" v-model="modelValue" />
    `})},s={},t={args:{outline:!0}},r={render:(e,{vModel:a})=>({components:{BaseCheckout:n},setup(){const o=a("modelValue");return{args:e,modelValue:o}},template:`
      <BaseCheckout v-bind="args" v-model="modelValue" />
      <BaseCheckout v-bind="args" v-model="modelValue" class="primary" />
      <br>
      <BaseCheckout v-bind="args" v-model="modelValue" outline />
      <BaseCheckout v-bind="args" v-model="modelValue" class="primary" outline />
    `})},u={render:(e,{vModel:a})=>({components:{BaseCheckout:n},setup(){const o=a("modelValue");return{args:e,modelValue:o}},template:`
      <BaseCheckout v-bind="args" v-model="modelValue" class="small" outline />
      <BaseCheckout v-bind="args" v-model="modelValue" outline />
      <BaseCheckout v-bind="args" v-model="modelValue" class="large" outline />
    `})},d={args:{disabled:!0},render:(e,{vModel:a})=>({components:{BaseCheckout:n},setup(){const o=a("modelValue");return{args:e,modelValue:o}},template:`
      <BaseCheckout v-bind="args" v-model="modelValue" />
      <BaseCheckout v-bind="args" v-model="modelValue" outline />
    `})},c={argTypes:{modelValue:{control:"array",name:"v-model"}},args:{modelValue:[]},render:(e,{vModel:a})=>({components:{BaseField:Q,BaseCheckout:n},setup(){const o=a("modelValue");return{args:e,modelValue:o}},template:`
      <BaseField label="標題">
        <BaseCheckout v-bind="args" v-model="modelValue" value="1" style="margin-right: 10px;" />
        <BaseCheckout v-bind="args" v-model="modelValue" value="2" />
      </BaseField>
    `})};var b,k,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(f=(k=s.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var B,C,_;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    outline: true
  }
}`,...(_=(C=t.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var y,x,S;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(S=(x=r.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var M,w,F;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(F=(w=u.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var D,I,N;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(N=(I=d.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var z,W,$;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...($=(W=c.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};const de=["Default","Outline","Color","Size","Disabled","WithWrap"];export{r as Color,s as Default,d as Disabled,t as Outline,u as Size,c as WithWrap,de as __namedExportsOrder,ue as default};
