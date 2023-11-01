import{d as x,c as I,w as M,v as w,f as c,e as r,i as D,t as W,n as z,o as N,p as O,h as C}from"./vue.esm-bundler-3c0112f6.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import{B as A}from"./BaseField-12996924.js";const U=e=>(O("data-v-99e1201e"),e=e(),C(),e),j=["value"],q=U(()=>r("div",{class:"base-radio__radio"},null,-1)),G={class:"base-radio__label"},F={__name:"BaseRadio",props:{label:{type:String,default:""},modelValue:{type:String,default:""},value:{type:String,default:""},small:{type:Boolean,default:!1},large:{type:Boolean,default:!1},outline:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:a}){const l=e,o=x({get:()=>l.modelValue,set:i=>a("update:modelValue",i)});return(i,m)=>(N(),I("label",{class:z({"base-radio":!0,"base-radio--small":e.small,"base-radio--large":e.large,"base-radio--outline":e.outline,"is-checked":c(o)===e.value})},[M(r("input",{"onUpdate:modelValue":m[0]||(m[0]=k=>D(o)?o.value=k:null),value:e.value,type:"radio"},null,8,j),[[w,c(o)]]),q,r("div",G,W(e.label),1)],2))}},u=E(F,[["__scopeId","data-v-99e1201e"]]);F.__docgenInfo={exportName:"default",displayName:"BaseRadio",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"value",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"small",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"large",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"outline",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseRadio.vue"]};const L={title:"Base/Radio",component:u,tags:["autodocs"],args:{label:"Radio",modelValue:""},render:(e,{vModel:a})=>({components:{BaseRadio:u},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseRadio v-bind="args" v-model="modelValue" value="1" />
      <BaseRadio v-bind="args" v-model="modelValue" value="2" />
    `})},s={},n={render:(e,{vModel:a})=>({components:{BaseRadio:u},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseRadio v-bind="args" v-model="modelValue" value="1" small outline />
      <BaseRadio v-bind="args" v-model="modelValue" value="2" outline />
      <BaseRadio v-bind="args" v-model="modelValue" value="3" large outline />
    `})},t={args:{outline:!0}},d={render:(e,{vModel:a})=>({components:{BaseField:A,BaseRadio:u},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseField label="標題">
        <BaseRadio v-bind="args" v-model="modelValue" value="1" />
        <BaseRadio v-bind="args" v-model="modelValue" value="2" />
      </BaseField>
    `})};var p,v,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(f=(v=s.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var g,V,B;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(B=(V=n.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var b,R,_;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    outline: true
  }
}`,...(_=(R=t.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var y,S,h;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(h=(S=d.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};const P=["Default","Size","Outline","WithWrap"];export{s as Default,t as Outline,n as Size,d as WithWrap,P as __namedExportsOrder,L as default};
//# sourceMappingURL=Radio.stories-37c2fc5f.js.map
