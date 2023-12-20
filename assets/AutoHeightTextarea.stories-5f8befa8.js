import{k as A,c as H,a as d,l as S,t as y,m as c,p as k,v as D,q as I,n as N,o as w,s as z,x as M}from"./vue.esm-bundler-e9714d41.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";const q=e=>(z("data-v-8058811b"),e=e(),M(),e),C=q(()=>d("br",null,null,-1)),F=["placeholder","disabled"],_={__name:"BaseAutoHeightTextarea",props:{modelValue:{type:String,default:""},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:a}){const t=e,B=a,s=A({get:()=>t.modelValue,set:u=>B("update:modelValue",u)});return(u,m)=>(w(),H("div",{class:N(["auto-height-textarea",{"is-disabled":e.disabled}])},[d("pre",null,[S(y(c(s)),1),C]),k(d("textarea",{"onUpdate:modelValue":m[0]||(m[0]=T=>I(s)?s.value=T:null),placeholder:e.placeholder,disabled:e.disabled},null,8,F),[[D,c(s)]])],2))}},n=E(_,[["__scopeId","data-v-8058811b"]]);_.__docgenInfo={exportName:"default",displayName:"BaseAutoHeightTextarea",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseAutoHeightTextarea.vue"]};const U={component:n,args:{label:"標題",placeholder:"請輸入",modelValue:""},render:(e,{vModel:a})=>({components:{BaseAutoHeightTextarea:n},setup(){const t=a("modelValue");return{args:e,modelValue:t}},template:`
      <BaseAutoHeightTextarea v-bind="args" v-model="modelValue" />
    `})},l={args:{}},o={render:(e,{vModel:a})=>({components:{BaseAutoHeightTextarea:n},setup(){const t=a("modelValue");return{args:e,modelValue:t}},template:`
      <BaseAutoHeightTextarea v-bind="args" v-model="modelValue" class="small" />
      <BaseAutoHeightTextarea v-bind="args" v-model="modelValue" />
      <BaseAutoHeightTextarea v-bind="args" v-model="modelValue" class="large" />
    `})},r={args:{disabled:!0}};var i,p,g;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {}
}`,...(g=(p=l.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var v,b,h;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var V,f,x;r.parameters={...r.parameters,docs:{...(V=r.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const j=["Default","Size","Disabled"];export{l as Default,r as Disabled,o as Size,j as __namedExportsOrder,U as default};
