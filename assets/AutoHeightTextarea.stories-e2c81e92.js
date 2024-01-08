import{j as D,c as k,a as d,B as I,t as N,u as i,m as w,C as M,p as R,o as z,s as E,x as j}from"./vue.esm-bundler-c2a5f9d0.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";const F=e=>(E("data-v-1bd21a7c"),e=e(),j(),e),O={class:"auto-height-textarea"},U=F(()=>d("br",null,null,-1)),q=["name","placeholder","disabled","readonly"],A={__name:"BaseAutoHeightTextarea",props:{modelValue:{type:String,default:""},placeholder:{type:String,default:""},name:{type:String,default:""},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:a}){const t=e,H=a,s=D({get:()=>t.modelValue,set:m=>H("update:modelValue",m)});return(m,c)=>(z(),k("div",O,[d("pre",null,[I(N(i(s)),1),U]),w(d("textarea",{"onUpdate:modelValue":c[0]||(c[0]=S=>R(s)?s.value=S:null),name:e.name,placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly},null,8,q),[[M,i(s)]])]))}},u=C(A,[["__scopeId","data-v-1bd21a7c"]]);A.__docgenInfo={exportName:"default",displayName:"BaseAutoHeightTextarea",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"name",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseAutoHeightTextarea.vue"]};const K={component:u,args:{placeholder:"請輸入",modelValue:""},render:(e,{vModel:a})=>({components:{BaseAutoHeightTextarea:u},setup(){const t=a("modelValue");return{args:e,modelValue:t}},template:`
      <BaseAutoHeightTextarea v-bind="args" v-model="modelValue" />
    `})},o={args:{}},l={render:(e,{vModel:a})=>({components:{BaseAutoHeightTextarea:u},setup(){const t=a("modelValue");return{args:e,modelValue:t}},template:`
      <BaseAutoHeightTextarea v-bind="args" v-model="modelValue" class="small" />
      <BaseAutoHeightTextarea v-bind="args" v-model="modelValue" />
      <BaseAutoHeightTextarea v-bind="args" v-model="modelValue" class="large" />
    `})},r={args:{readonly:!0}},n={args:{disabled:!0}};var p,g,f;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {}
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,V,h;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args, {
    vModel
  }) => ({
    components: {
      BaseAutoHeightTextarea
    },
    setup() {
      const modelValue = vModel('modelValue');
      return {
        args,
        modelValue
      };
    },
    template: \`
      <BaseAutoHeightTextarea v-bind="args" v-model="modelValue" class="small" />
      <BaseAutoHeightTextarea v-bind="args" v-model="modelValue" />
      <BaseAutoHeightTextarea v-bind="args" v-model="modelValue" class="large" />
    \`
  })
}`,...(h=(V=l.parameters)==null?void 0:V.docs)==null?void 0:h.source}}};var b,x,y;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    readonly: true
  }
}`,...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var _,B,T;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(T=(B=n.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};const L=["Default","Size","Readonly","Disabled"];export{o as Default,n as Disabled,r as Readonly,l as Size,L as __namedExportsOrder,K as default};
