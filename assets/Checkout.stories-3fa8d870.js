import{d as M,b as c,c as x,e as t,w as S,k as F,f as s,i as L,t as w,n as I,o as W,p as N,h as O}from"./vue.esm-bundler-3c0112f6.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";import{B as D}from"./BaseField-b819622c.js";const E=e=>(N("data-v-531a1ac5"),e=e(),O(),e),P={class:"input-wrap"},z=["value"],R=E(()=>t("div",{class:"checkbox"},[t("i",{class:"fas fa-check"})],-1)),U={class:"label"},y={__name:"BaseCheckout",props:{label:{type:String,default:""},modelValue:{type:[Array,Boolean],default:!1},value:{type:String,default:""},small:{type:Boolean,default:!1},large:{type:Boolean,default:!1},outLine:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:l}){const o=e,a=M({get:()=>o.modelValue,set:m=>l("update:modelValue",m)});var _=c(typeof o.modelValue);return(m,p)=>(W(),x("label",{class:I(["base-checkout",{"base-checkout--small":e.small,"base-checkout--large":e.large,"out-line":e.outLine,"is-checked":s(_)==="boolean"?s(a):s(a).includes(e.value)}])},[t("div",P,[S(t("input",{"onUpdate:modelValue":p[0]||(p[0]=C=>L(a)?a.value=C:null),value:e.value||null,type:"checkbox"},null,8,z),[[F,s(a)]]),R]),t("div",U,w(e.label),1)],2))}},r=A(y,[["__scopeId","data-v-531a1ac5"]]);y.__docgenInfo={exportName:"default",displayName:"BaseCheckout",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",type:{name:"array|boolean"},defaultValue:{func:!1,value:"false"}},{name:"value",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"small",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"large",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"outLine",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/form/BaseCheckout.vue"]};const H={title:"Base/Checkout",component:r,tags:["autodocs"],args:{label:"Checkout"},render:e=>({components:{BaseCheckout:r},setup(){let l=c(!1);return{args:e,model:l,updateModel:a=>{l.value=a}}},template:`
      <BaseCheckout v-bind="args" :modelValue="model" @update:modelValue="updateModel" />
    `})},u={},n={args:{outLine:!0}},d={render:e=>({components:{BaseField:D,BaseCheckout:r},setup(){let l=c([]);return{args:e,model:l,updateModel:a=>{l.value=a}}},template:`
      <BaseField label="標題">
        <BaseCheckout v-bind="args" :modelValue="model" @update:modelValue="updateModel" value="1" />
        <BaseCheckout v-bind="args" :modelValue="model" @update:modelValue="updateModel" value="2" />
      </BaseField>
    `})};var i,f,v;u.parameters={...u.parameters,docs:{...(i=u.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(v=(f=u.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var h,k,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    outLine: true
  }
}`,...(b=(k=n.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var g,B,V;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => ({
    components: {
      BaseField,
      BaseCheckout
    },
    setup() {
      let model = ref([]);
      const updateModel = event => {
        model.value = event;
      };
      return {
        args,
        model,
        updateModel
      };
    },
    template: \`
      <BaseField label="標題">
        <BaseCheckout v-bind="args" :modelValue="model" @update:modelValue="updateModel" value="1" />
        <BaseCheckout v-bind="args" :modelValue="model" @update:modelValue="updateModel" value="2" />
      </BaseField>
    \`
  })
}`,...(V=(B=d.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};const J=["Primary","OutLine","WithWrap"];export{n as OutLine,u as Primary,d as WithWrap,J as __namedExportsOrder,H as default};
//# sourceMappingURL=Checkout.stories-3fa8d870.js.map
