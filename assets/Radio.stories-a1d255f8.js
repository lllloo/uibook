import{c as w,a as W,w as z,l as N,u as p,d as i,i as O,t as C,n as E,o as A,p as U,k as j}from"./vue.esm-bundler-d2d23598.js";import{_ as q}from"./_plugin-vue_export-helper-c27b6911.js";import{B as G}from"./BaseField-6061bf7b.js";const H=e=>(U("data-v-31d1ed2f"),e=e(),j(),e),J=["value","disabled"],K=H(()=>i("div",{class:"base-radio__radio"},null,-1)),L={class:"base-radio__label"},D={__name:"BaseRadio",props:{label:{type:String,default:""},modelValue:{type:String,default:""},value:{type:String,default:""},small:{type:Boolean,default:!1},large:{type:Boolean,default:!1},outline:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:a}){const l=e,s=w({get:()=>l.modelValue,set:m=>a("update:modelValue",m)});return(m,c)=>(A(),W("label",{class:E({"base-radio":!0,"base-radio--small":e.small,"base-radio--large":e.large,"base-radio--outline":e.outline,"is-disabled":e.disabled,"is-checked":p(s)===e.value})},[z(i("input",{"onUpdate:modelValue":c[0]||(c[0]=I=>O(s)?s.value=I:null),value:e.value,type:"radio",disabled:e.disabled},null,8,J),[[N,p(s)]]),K,i("div",L,C(e.label),1)],2))}},o=q(D,[["__scopeId","data-v-31d1ed2f"]]);D.__docgenInfo={exportName:"default",displayName:"BaseRadio",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"value",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"small",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"large",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"outline",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseRadio.vue"]};const X={component:o,args:{label:"Radio",modelValue:""},render:(e,{vModel:a})=>({components:{BaseRadio:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseRadio v-bind="args" v-model="modelValue" value="1" />
      <BaseRadio v-bind="args" v-model="modelValue" value="2" />
    `})},n={},d={render:(e,{vModel:a})=>({components:{BaseRadio:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseRadio v-bind="args" v-model="modelValue" value="1" small outline />
      <BaseRadio v-bind="args" v-model="modelValue" value="2" outline />
      <BaseRadio v-bind="args" v-model="modelValue" value="3" large outline />
    `})},t={args:{outline:!0}},u={args:{disabled:!0},render:(e,{vModel:a})=>({components:{BaseRadio:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseRadio v-bind="args" v-model="modelValue" value="1" />
      <BaseRadio v-bind="args" v-model="modelValue" value="2" outline />
    `})},r={render:(e,{vModel:a})=>({components:{BaseField:G,BaseRadio:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseField label="標題">
        <BaseRadio v-bind="args" v-model="modelValue" value="1" />
        <BaseRadio v-bind="args" v-model="modelValue" value="2" />
      </BaseField>
    `})};var v,f,V;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(V=(f=n.parameters)==null?void 0:f.docs)==null?void 0:V.source}}};var g,b,B;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
      <BaseRadio v-bind="args" v-model="modelValue" value="1" small outline />
      <BaseRadio v-bind="args" v-model="modelValue" value="2" outline />
      <BaseRadio v-bind="args" v-model="modelValue" value="3" large outline />
    \`
  })
}`,...(B=(b=d.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var R,y,_;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    outline: true
  }
}`,...(_=(y=t.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var S,h,k;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(k=(h=u.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var F,M,x;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(x=(M=r.parameters)==null?void 0:M.docs)==null?void 0:x.source}}};const Y=["Default","Size","Outline","Disabled","WithWrap"];export{n as Default,u as Disabled,t as Outline,d as Size,r as WithWrap,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=Radio.stories-a1d255f8.js.map
