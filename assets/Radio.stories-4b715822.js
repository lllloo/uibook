import{k as O,y as A,z as E,n as q,m as v,A as U,o as p,p as j,B as G,a as z,q as H,c as J,t as K,g as P,s as Q,x as T}from"./vue.esm-bundler-e9714d41.js";import{_ as X}from"./_plugin-vue_export-helper-c27b6911.js";import{B as Y}from"./BaseField-18e70a2c.js";const Z=e=>(Q("data-v-f60d077c"),e=e(),T(),e),$=["value","disabled"],ee=Z(()=>z("div",{class:"base-radio__radio"},null,-1)),ae={key:0,class:"base-radio__label"},N={__name:"BaseRadio",props:{label:{type:String,default:""},modelValue:{type:String,default:""},value:{type:String,default:""},outline:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},isLabel:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const l=e,W=a,s=O({get:()=>l.modelValue,set:m=>W("update:modelValue",m)});return(m,c)=>(p(),A(U(e.isLabel?"label":"div"),{class:q(["base-radio",{"base-radio--outline":e.outline,"is-disabled":e.disabled,"is-checked":v(s)===e.value}])},{default:E(()=>[j(z("input",{"onUpdate:modelValue":c[0]||(c[0]=L=>H(s)?s.value=L:null),value:e.value,type:"radio",disabled:e.disabled},null,8,$),[[G,v(s)]]),ee,e.label?(p(),J("div",ae,K(e.label),1)):P("",!0)]),_:1},8,["class"]))}},o=X(N,[["__scopeId","data-v-f60d077c"]]);N.__docgenInfo={exportName:"default",displayName:"BaseRadio",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"value",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"outline",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isLabel",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseRadio.vue"]};const ne={component:o,args:{label:"Radio",modelValue:""},render:(e,{vModel:a})=>({components:{BaseRadio:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseRadio v-bind="args" v-model="modelValue" value="1" />
      <BaseRadio v-bind="args" v-model="modelValue" value="2" />
    `})},n={},d={args:{outline:!0}},t={render:(e,{vModel:a})=>({components:{BaseRadio:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseRadio v-bind="args" v-model="modelValue" value="1" />
      <BaseRadio v-bind="args" v-model="modelValue" value="2" class="primary" />
      <br>
      <BaseRadio v-bind="args" v-model="modelValue" value="3" outline />
      <BaseRadio v-bind="args" v-model="modelValue" value="4" class="primary" outline />
    `})},r={render:(e,{vModel:a})=>({components:{BaseRadio:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseRadio v-bind="args" v-model="modelValue" value="1" class="small" outline />
      <BaseRadio v-bind="args" v-model="modelValue" value="2" outline />
      <BaseRadio v-bind="args" v-model="modelValue" value="3" class="large" outline />
    `})},u={args:{disabled:!0},render:(e,{vModel:a})=>({components:{BaseRadio:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseRadio v-bind="args" v-model="modelValue" value="1" />
      <BaseRadio v-bind="args" v-model="modelValue" value="2" outline />
    `})},i={render:(e,{vModel:a})=>({components:{BaseField:Y,BaseRadio:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseField label="標題">
        <BaseRadio v-bind="args" v-model="modelValue" value="1" />
        <BaseRadio v-bind="args" v-model="modelValue" value="2" />
      </BaseField>
    `})};var V,b,g;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:"{}",...(g=(b=n.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var B,f,R;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    outline: true
  }
}`,...(R=(f=d.parameters)==null?void 0:f.docs)==null?void 0:R.source}}};var y,_,S;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(S=(_=t.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var h,k,M;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(M=(k=r.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var x,C,D;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(D=(C=u.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var F,I,w;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(w=(I=i.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};const de=["Default","Outline","Color","Size","Disabled","WithWrap"];export{t as Color,n as Default,u as Disabled,d as Outline,r as Size,i as WithWrap,de as __namedExportsOrder,ne as default};
