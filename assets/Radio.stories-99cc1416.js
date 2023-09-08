import{d as h,c as S,e as d,w as F,v as L,f as m,i as k,t as x,n as w,o as I,p as W,h as N,b as _}from"./vue.esm-bundler-3c0112f6.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";import{B as C}from"./BaseField-b819622c.js";const D=e=>(W("data-v-d72a757a"),e=e(),N(),e),E={class:"input-wrap"},P=["value"],z=D(()=>d("div",{class:"radio"},null,-1)),A={class:"label"},R={__name:"BaseRadio",props:{label:{type:String,default:""},modelValue:{type:String,default:""},value:{type:String,default:""},small:{type:Boolean,default:!1},large:{type:Boolean,default:!1},outLine:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:l}){const n=e,a=h({get:()=>n.modelValue,set:r=>l("update:modelValue",r)});return(r,i)=>(I(),S("label",{class:w(["base-radio",{"base-radio--small":e.small,"base-radio--large":e.large,"out-line":e.outLine,"is-checked":m(a)===e.value}])},[d("div",E,[F(d("input",{"onUpdate:modelValue":i[0]||(i[0]=M=>k(a)?a.value=M:null),value:e.value,type:"radio"},null,8,P),[[L,m(a)]]),z]),d("div",A,x(e.label),1)],2))}},u=O(R,[["__scopeId","data-v-d72a757a"]]);R.__docgenInfo={exportName:"default",displayName:"BaseRadio",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"value",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"small",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"large",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"outLine",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/form/BaseRadio.vue"]};const G={title:"Base/Radio",component:u,tags:["autodocs"],args:{label:"Radio"},render:e=>({components:{BaseRadio:u},setup(){let l=_("");return{args:e,model:l,updateModel:a=>{l.value=a}}},template:`
      <BaseRadio v-bind="args" :modelValue="model" @update:modelValue="updateModel" value="1" />
    `})},o={},t={args:{outLine:!0}},s={render:e=>({components:{BaseField:C,BaseRadio:u},setup(){let l=_("1");return{args:e,model:l,updateModel:a=>{l.value=a}}},template:`
      <BaseField label="標題">
        <BaseRadio v-bind="args" :modelValue="model" @update:modelValue="updateModel" value="1" />
        <BaseRadio v-bind="args" :modelValue="model" @update:modelValue="updateModel" value="2" />
      </BaseField>
    `})};var p,c,f;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(f=(c=o.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};var v,g,B;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    outLine: true
  }
}`,...(B=(g=t.parameters)==null?void 0:g.docs)==null?void 0:B.source}}};var V,b,y;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => ({
    components: {
      BaseField,
      BaseRadio
    },
    setup() {
      let model = ref('1');
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
        <BaseRadio v-bind="args" :modelValue="model" @update:modelValue="updateModel" value="1" />
        <BaseRadio v-bind="args" :modelValue="model" @update:modelValue="updateModel" value="2" />
      </BaseField>
    \`
  })
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const H=["Primary","OutLine","WithWrap"];export{t as OutLine,o as Primary,s as WithWrap,H as __namedExportsOrder,G as default};
//# sourceMappingURL=Radio.stories-99cc1416.js.map
