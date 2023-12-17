import{f as E,d as v,w as j,A as U,u as p,g as W,j as q,t as G,l as H,n as J,o as V,x as K,y as L}from"./vue.esm-bundler-54d62a26.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";import{B as Q}from"./BaseField-d2277f1b.js";const T=e=>(K("data-v-1f70849b"),e=e(),L(),e),X=["value","disabled"],Y=T(()=>W("div",{class:"base-radio__radio"},null,-1)),Z={key:0,class:"base-radio__label"},z={__name:"BaseRadio",props:{label:{type:String,default:""},modelValue:{type:String,default:""},value:{type:String,default:""},outline:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:a}){const l=e,O=a,s=E({get:()=>l.modelValue,set:m=>O("update:modelValue",m)});return(m,c)=>(V(),v("label",{class:J(["base-radio",{"base-radio--outline":e.outline,"is-disabled":e.disabled,"is-checked":p(s)===e.value}])},[j(W("input",{"onUpdate:modelValue":c[0]||(c[0]=A=>q(s)?s.value=A:null),value:e.value,type:"radio",disabled:e.disabled},null,8,X),[[U,p(s)]]),Y,e.label?(V(),v("div",Z,G(e.label),1)):H("",!0)],2))}},o=P(z,[["__scopeId","data-v-1f70849b"]]);z.__docgenInfo={exportName:"default",displayName:"BaseRadio",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"value",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"outline",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseRadio.vue"]};const le={component:o,args:{label:"Radio",modelValue:""},render:(e,{vModel:a})=>({components:{BaseRadio:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseRadio v-bind="args" v-model="modelValue" value="1" />
      <BaseRadio v-bind="args" v-model="modelValue" value="2" />
    `})},n={},d={args:{outline:!0}},r={render:(e,{vModel:a})=>({components:{BaseRadio:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseRadio v-bind="args" v-model="modelValue" value="1" />
      <BaseRadio v-bind="args" v-model="modelValue" value="2" class="primary" />
      <br>
      <BaseRadio v-bind="args" v-model="modelValue" value="3" outline />
      <BaseRadio v-bind="args" v-model="modelValue" value="4" class="primary" outline />
    `})},t={render:(e,{vModel:a})=>({components:{BaseRadio:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseRadio v-bind="args" v-model="modelValue" value="1" class="small" outline />
      <BaseRadio v-bind="args" v-model="modelValue" value="2" outline />
      <BaseRadio v-bind="args" v-model="modelValue" value="3" class="large" outline />
    `})},u={args:{disabled:!0},render:(e,{vModel:a})=>({components:{BaseRadio:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseRadio v-bind="args" v-model="modelValue" value="1" />
      <BaseRadio v-bind="args" v-model="modelValue" value="2" outline />
    `})},i={render:(e,{vModel:a})=>({components:{BaseField:Q,BaseRadio:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseField label="標題">
        <BaseRadio v-bind="args" v-model="modelValue" value="1" />
        <BaseRadio v-bind="args" v-model="modelValue" value="2" />
      </BaseField>
    `})};var b,g,B;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(B=(g=n.parameters)==null?void 0:g.docs)==null?void 0:B.source}}};var f,R,y;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    outline: true
  }
}`,...(y=(R=d.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};var _,S,h;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
      <BaseRadio v-bind="args" v-model="modelValue" value="2" class="primary" />
      <br>
      <BaseRadio v-bind="args" v-model="modelValue" value="3" outline />
      <BaseRadio v-bind="args" v-model="modelValue" value="4" class="primary" outline />
    \`
  })
}`,...(h=(S=r.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var M,k,x;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(x=(k=t.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var F,D,C;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(C=(D=u.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var I,w,N;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(N=(w=i.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};const oe=["Default","Outline","Color","Size","Disabled","WithWrap"];export{r as Color,n as Default,u as Disabled,d as Outline,t as Size,i as WithWrap,oe as __namedExportsOrder,le as default};
