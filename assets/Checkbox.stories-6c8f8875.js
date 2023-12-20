import{o as m,c as W,a as i,k as v,y as U,z as j,n as G,m as g,A as H,p as J,E as K,q as P,C as Q,t as X,g as Y}from"./vue.esm-bundler-e9714d41.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";import{B as Z}from"./BaseField-18e70a2c.js";const A={},ee={xmlns:"http://www.w3.org/2000/svg",height:"16",width:"16",viewBox:"0 0 512 512"},ae=i("path",{d:"M173.9 439.4l-166.4-166.4c-10-10-10-26.2 0-36.2l36.2-36.2c10-10 26.2-10 36.2 0L192 312.7 432.1 72.6c10-10 26.2-10 36.2 0l36.2 36.2c10 10 10 26.2 0 36.2l-294.4 294.4c-10 10-26.2 10-36.2 0z"},null,-1),oe=[ae];function le(e,a){return m(),W("svg",ee,oe)}const ne=$(A,[["render",le]]);A.__docgenInfo={displayName:"IconCheck",description:"",tags:{},sourceFiles:["/home/runner/work/uibook/uibook/src/components/icons/IconCheck.vue"]};const se=["value","disabled"],te={class:"base-checkbox__checkbox"},re={key:0,class:"base-checkbox__label"},E={__name:"BaseCheckbox",props:{label:{type:String,default:""},modelValue:{type:[Array,Boolean],default:!1},value:{type:String,default:""},outline:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},isLabel:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const o=e,O=a,l=v({get:()=>o.modelValue,set:b=>O("update:modelValue",b)}),T=v(()=>typeof l.value=="boolean"?l.value:l.value.includes(o.value));return(b,p)=>{const q=ne;return m(),U(H(e.isLabel?"label":"div"),{class:G(["base-checkbox",{"base-checkbox--outline":e.outline,"is-disabled":e.disabled,"is-checked":g(T)}])},{default:j(()=>[J(i("input",{"onUpdate:modelValue":p[0]||(p[0]=R=>P(l)?l.value=R:null),value:e.value,type:"checkbox",disabled:e.disabled},null,8,se),[[K,g(l)]]),i("div",te,[Q(q)]),e.label?(m(),W("div",re,X(e.label),1)):Y("",!0)]),_:1},8,["class"])}}},n=$(E,[["__scopeId","data-v-55f6a092"]]);E.__docgenInfo={exportName:"default",displayName:"BaseCheckbox",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",type:{name:"array|boolean"},defaultValue:{func:!1,value:"false"}},{name:"value",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"outline",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isLabel",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseCheckbox.vue"]};const me={component:n,argTypes:{modelValue:{control:"boolean",name:"v-model"}},args:{label:"Checkout"},render:(e,{vModel:a})=>({components:{BaseCheckbox:n},setup(){const o=a("modelValue");return{args:e,modelValue:o}},template:`
      <BaseCheckbox v-bind="args" v-model="modelValue" />
    `})},s={},t={args:{outline:!0}},r={render:(e,{vModel:a})=>({components:{BaseCheckbox:n},setup(){const o=a("modelValue");return{args:e,modelValue:o}},template:`
      <BaseCheckbox v-bind="args" v-model="modelValue" />
      <BaseCheckbox v-bind="args" v-model="modelValue" class="primary" />
      <br>
      <BaseCheckbox v-bind="args" v-model="modelValue" outline />
      <BaseCheckbox v-bind="args" v-model="modelValue" class="primary" outline />
    `})},d={render:(e,{vModel:a})=>({components:{BaseCheckbox:n},setup(){const o=a("modelValue");return{args:e,modelValue:o}},template:`
      <BaseCheckbox v-bind="args" v-model="modelValue" class="small" outline />
      <BaseCheckbox v-bind="args" v-model="modelValue" outline />
      <BaseCheckbox v-bind="args" v-model="modelValue" class="large" outline />
    `})},u={args:{disabled:!0},render:(e,{vModel:a})=>({components:{BaseCheckbox:n},setup(){const o=a("modelValue");return{args:e,modelValue:o}},template:`
      <BaseCheckbox v-bind="args" v-model="modelValue" />
      <BaseCheckbox v-bind="args" v-model="modelValue" outline />
    `})},c={argTypes:{modelValue:{control:"array",name:"v-model"}},args:{modelValue:[]},render:(e,{vModel:a})=>({components:{BaseField:Z,BaseCheckbox:n},setup(){const o=a("modelValue");return{args:e,modelValue:o}},template:`
      <BaseField label="標題">
        <BaseCheckbox v-bind="args" v-model="modelValue" value="1" style="margin-right: 10px;" />
        <BaseCheckbox v-bind="args" v-model="modelValue" value="2" />
      </BaseField>
    `})};var V,h,k;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:"{}",...(k=(h=s.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var x,f,B;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    outline: true
  }
}`,...(B=(f=t.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var C,_,y;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (args, {
    vModel
  }) => ({
    components: {
      BaseCheckbox
    },
    setup() {
      const modelValue = vModel('modelValue');
      return {
        args,
        modelValue
      };
    },
    template: \`
      <BaseCheckbox v-bind="args" v-model="modelValue" />
      <BaseCheckbox v-bind="args" v-model="modelValue" class="primary" />
      <br>
      <BaseCheckbox v-bind="args" v-model="modelValue" outline />
      <BaseCheckbox v-bind="args" v-model="modelValue" class="primary" outline />
    \`
  })
}`,...(y=(_=r.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var S,w,M;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: (args, {
    vModel
  }) => ({
    components: {
      BaseCheckbox
    },
    setup() {
      const modelValue = vModel('modelValue');
      return {
        args,
        modelValue
      };
    },
    template: \`
      <BaseCheckbox v-bind="args" v-model="modelValue" class="small" outline />
      <BaseCheckbox v-bind="args" v-model="modelValue" outline />
      <BaseCheckbox v-bind="args" v-model="modelValue" class="large" outline />
    \`
  })
}`,...(M=(w=d.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var F,D,I;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: (args, {
    vModel
  }) => ({
    components: {
      BaseCheckbox
    },
    setup() {
      const modelValue = vModel('modelValue');
      return {
        args,
        modelValue
      };
    },
    template: \`
      <BaseCheckbox v-bind="args" v-model="modelValue" />
      <BaseCheckbox v-bind="args" v-model="modelValue" outline />
    \`
  })
}`,...(I=(D=u.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var N,z,L;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
      BaseCheckbox
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
        <BaseCheckbox v-bind="args" v-model="modelValue" value="1" style="margin-right: 10px;" />
        <BaseCheckbox v-bind="args" v-model="modelValue" value="2" />
      </BaseField>
    \`
  })
}`,...(L=(z=c.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};const ie=["Default","Outline","Color","Size","Disabled","WithWrap"];export{r as Color,s as Default,u as Disabled,t as Outline,d as Size,c as WithWrap,ie as __namedExportsOrder,me as default};
