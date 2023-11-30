import{f as A,d as H,g as d,q as y,t as S,u as c,w as D,s as k,j as I,n as w,o as N,x as z,y as M}from"./vue.esm-bundler-54d62a26.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";const j=e=>(z("data-v-a9885040"),e=e(),M(),e),q=j(()=>d("br",null,null,-1)),C=["placeholder","disabled"],_={__name:"BaseAutoHeightTextarea",props:{modelValue:{type:String,default:""},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:a}){const t=e,B=a,s=A({get:()=>t.modelValue,set:u=>B("update:modelValue",u)});return(u,m)=>(N(),H("div",{class:w(["auto-height-textarea",{"is-disabled":e.disabled}])},[d("pre",null,[y(S(c(s)),1),q]),D(d("textarea",{"onUpdate:modelValue":m[0]||(m[0]=T=>I(s)?s.value=T:null),placeholder:e.placeholder,disabled:e.disabled},null,8,C),[[k,c(s)]])],2))}},n=E(_,[["__scopeId","data-v-a9885040"]]);_.__docgenInfo={exportName:"default",displayName:"BaseAutoHeightTextarea",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseAutoHeightTextarea.vue"]};const R={component:n,args:{label:"標題",placeholder:"請輸入",modelValue:""},render:(e,{vModel:a})=>({components:{BaseAutoHeightTextarea:n},setup(){const t=a("modelValue");return{args:e,modelValue:t}},template:`
      <BaseAutoHeightTextarea v-bind="args" v-model="modelValue" />
    `})},o={args:{}},l={render:(e,{vModel:a})=>({components:{BaseAutoHeightTextarea:n},setup(){const t=a("modelValue");return{args:e,modelValue:t}},template:`
      <BaseAutoHeightTextarea v-bind="args" v-model="modelValue" class="small" />
      <BaseAutoHeightTextarea v-bind="args" v-model="modelValue" />
      <BaseAutoHeightTextarea v-bind="args" v-model="modelValue" class="large" />
    `})},r={args:{disabled:!0}};var i,p,g;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {}
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var v,h,V;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(V=(h=l.parameters)==null?void 0:h.docs)==null?void 0:V.source}}};var f,x,b;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(b=(x=r.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const U=["Default","Size","Disabled"];export{o as Default,r as Disabled,l as Size,U as __namedExportsOrder,R as default};
