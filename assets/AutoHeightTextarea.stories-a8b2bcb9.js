import{j as D,e as k,f as l,C as I,x as N,u as c,s as w,D as z,t as R,o as E,z as j,A as C}from"./vue.esm-bundler-e5714eb6.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";const M=e=>(j("data-v-1bd21a7c"),e=e(),C(),e),O={class:"auto-height-textarea"},U=M(()=>l("br",null,null,-1)),q=["name","placeholder","disabled","readonly"],B={__name:"BaseAutoHeightTextarea",props:{modelValue:{type:String,default:""},placeholder:{type:String,default:""},name:{type:String,default:""},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:T}){const A=e,H=T,a=D({get:()=>A.modelValue,set:d=>H("update:modelValue",d)});return(d,u)=>(E(),k("div",O,[l("pre",null,[I(N(c(a)),1),U]),w(l("textarea",{"onUpdate:modelValue":u[0]||(u[0]=S=>R(a)?a.value=S:null),name:e.name,placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly},null,8,q),[[z,c(a)]])]))}},n=F(B,[["__scopeId","data-v-1bd21a7c"]]);B.__docgenInfo={exportName:"default",displayName:"BaseAutoHeightTextarea",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"name",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseAutoHeightTextarea.vue"]};const K={component:n,args:{placeholder:"請輸入",modelValue:""},render:e=>({components:{BaseAutoHeightTextarea:n},setup:()=>({args:e}),template:`
      <BaseAutoHeightTextarea v-bind="args" v-model="args.modelValue" />
    `})},t={args:{}},s={render:e=>({components:{BaseAutoHeightTextarea:n},setup:()=>({args:e}),template:`
      <BaseAutoHeightTextarea v-bind="args" v-model="args.modelValue" class="small" />
      <BaseAutoHeightTextarea v-bind="args" v-model="args.modelValue" />
      <BaseAutoHeightTextarea v-bind="args" v-model="args.modelValue" class="large" />
    `})},o={args:{readonly:!0}},r={args:{disabled:!0}};var m,i,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {}
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var g,f,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => ({
    components: {
      BaseAutoHeightTextarea
    },
    setup: () => ({
      args
    }),
    template: \`
      <BaseAutoHeightTextarea v-bind="args" v-model="args.modelValue" class="small" />
      <BaseAutoHeightTextarea v-bind="args" v-model="args.modelValue" />
      <BaseAutoHeightTextarea v-bind="args" v-model="args.modelValue" class="large" />
    \`
  })
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var h,b,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    readonly: true
  }
}`,...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var y,V,_;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(_=(V=r.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};const L=["Default","Size","Readonly","Disabled"];export{t as Default,r as Disabled,o as Readonly,s as Size,L as __namedExportsOrder,K as default};
