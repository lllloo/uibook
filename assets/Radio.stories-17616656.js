import{f as z,d as c,w as C,A as O,u as v,g as I,j as A,t as E,l as j,n as U,o as p,x as q,y as G}from"./vue.esm-bundler-54d62a26.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";import{B as J}from"./BaseField-86906fb6.js";const K=e=>(q("data-v-5ac692cf"),e=e(),G(),e),L=["value","disabled"],P=K(()=>I("div",{class:"base-radio__radio"},null,-1)),Q={key:0,class:"base-radio__label"},w={__name:"BaseRadio",props:{label:{type:String,default:""},modelValue:{type:String,default:""},value:{type:String,default:""},outline:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:a}){const l=e,N=a,s=z({get:()=>l.modelValue,set:i=>N("update:modelValue",i)});return(i,m)=>(p(),c("label",{class:U(["base-radio",{"base-radio--outline":e.outline,"is-disabled":e.disabled,"is-checked":v(s)===e.value}])},[C(I("input",{"onUpdate:modelValue":m[0]||(m[0]=W=>A(s)?s.value=W:null),value:e.value,type:"radio",disabled:e.disabled},null,8,L),[[O,v(s)]]),P,e.label?(p(),c("div",Q,E(e.label),1)):j("",!0)],2))}},o=H(w,[["__scopeId","data-v-5ac692cf"]]);w.__docgenInfo={exportName:"default",displayName:"BaseRadio",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"value",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"outline",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseRadio.vue"]};const Z={component:o,args:{label:"Radio",modelValue:""},render:(e,{vModel:a})=>({components:{BaseRadio:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseRadio v-bind="args" v-model="modelValue" value="1" />
      <BaseRadio v-bind="args" v-model="modelValue" value="2" />
    `})},n={},d={render:(e,{vModel:a})=>({components:{BaseRadio:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseRadio v-bind="args" v-model="modelValue" value="1" class="small" outline />
      <BaseRadio v-bind="args" v-model="modelValue" value="2" outline />
      <BaseRadio v-bind="args" v-model="modelValue" value="3" class="large" outline />
    `})},t={args:{outline:!0}},u={args:{disabled:!0},render:(e,{vModel:a})=>({components:{BaseRadio:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseRadio v-bind="args" v-model="modelValue" value="1" />
      <BaseRadio v-bind="args" v-model="modelValue" value="2" outline />
    `})},r={render:(e,{vModel:a})=>({components:{BaseField:J,BaseRadio:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseField label="標題">
        <BaseRadio v-bind="args" v-model="modelValue" value="1" />
        <BaseRadio v-bind="args" v-model="modelValue" value="2" />
      </BaseField>
    `})};var V,g,b;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:"{}",...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,B,R;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: (args, {
    vModel
  }) => ({
    components: {
      BaseRadio
    },
    setup() {
      const modelValue = vModel('modelValue');
      return {
        args,
        modelValue
      };
    },
    template: \`
      <BaseRadio v-bind="args" v-model="modelValue" value="1" class="small" outline />
      <BaseRadio v-bind="args" v-model="modelValue" value="2" outline />
      <BaseRadio v-bind="args" v-model="modelValue" value="3" class="large" outline />
    \`
  })
}`,...(R=(B=d.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var _,y,S;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    outline: true
  }
}`,...(S=(y=t.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var h,k,x;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: (args, {
    vModel
  }) => ({
    components: {
      BaseRadio
    },
    setup() {
      const modelValue = vModel('modelValue');
      return {
        args,
        modelValue
      };
    },
    template: \`
      <BaseRadio v-bind="args" v-model="modelValue" value="1" />
      <BaseRadio v-bind="args" v-model="modelValue" value="2" outline />
    \`
  })
}`,...(x=(k=u.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var F,M,D;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: (args, {
    vModel
  }) => ({
    components: {
      BaseField,
      BaseRadio
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
        <BaseRadio v-bind="args" v-model="modelValue" value="1" />
        <BaseRadio v-bind="args" v-model="modelValue" value="2" />
      </BaseField>
    \`
  })
}`,...(D=(M=r.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};const $=["Default","Size","Outline","Disabled","WithWrap"];export{n as Default,u as Disabled,t as Outline,d as Size,r as WithWrap,$ as __namedExportsOrder,Z as default};
