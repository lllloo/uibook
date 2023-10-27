import{d as h,c as S,e as d,w as F,v as L,f as m,i as k,t as x,n as w,o as I,p as W,h as M}from"./vue.esm-bundler-3c0112f6.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";import{B as O}from"./BaseField-c2148026.js";const C=e=>(W("data-v-8a6eeef3"),e=e(),M(),e),D={class:"input-wrap"},E=["value"],P=C(()=>d("div",{class:"radio"},null,-1)),z={class:"label"},_={__name:"BaseRadio",props:{label:{type:String,default:""},modelValue:{type:String,default:""},value:{type:String,default:""},small:{type:Boolean,default:!1},large:{type:Boolean,default:!1},outLine:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:a}){const l=e,o=h({get:()=>l.modelValue,set:r=>a("update:modelValue",r)});return(r,i)=>(I(),S("label",{class:w(["base-radio",{"base-radio--small":e.small,"base-radio--large":e.large,"out-line":e.outLine,"is-checked":m(o)===e.value}])},[d("div",D,[F(d("input",{"onUpdate:modelValue":i[0]||(i[0]=R=>k(o)?o.value=R:null),value:e.value,type:"radio"},null,8,E),[[L,m(o)]]),P]),d("div",z,x(e.label),1)],2))}},u=N(_,[["__scopeId","data-v-8a6eeef3"]]);_.__docgenInfo={exportName:"default",displayName:"BaseRadio",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"value",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"small",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"large",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"outLine",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/form/BaseRadio.vue"]};const q={title:"Base/Radio",component:u,tags:["autodocs"],args:{label:"Radio",modelValue:""},render:(e,{vModel:a})=>({components:{BaseRadio:u},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseRadio v-bind="args" v-model="modelValue" value="1" />
    `})},s={},t={args:{outLine:!0}},n={render:(e,{vModel:a})=>({components:{BaseField:O,BaseRadio:u},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseField label="標題">
        <BaseRadio v-bind="args" v-model="modelValue" value="1" />
        <BaseRadio v-bind="args" v-model="modelValue" value="2" />
      </BaseField>
    `})};var c,p,f;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(f=(p=s.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var v,g,V;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    outLine: true
  }
}`,...(V=(g=t.parameters)==null?void 0:g.docs)==null?void 0:V.source}}};var B,b,y;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(y=(b=n.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const G=["Primary","OutLine","WithWrap"];export{t as OutLine,s as Primary,n as WithWrap,G as __namedExportsOrder,q as default};
//# sourceMappingURL=Radio.stories-aba2749e.js.map
