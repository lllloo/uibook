import{d as V,c as r,t as h,a as I,g as d,r as c,w as S,l as L,f as k,i as x,n as w,o as p}from"./vue.esm-bundler-34f1bfe9.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";const D={key:0,class:"label"},O={class:"input-wrap"},C=["type","placeholder"],B={__name:"BaseInput",props:{modelValue:{type:String,default:""},type:{type:String,default:"text"},label:{type:String,default:""},placeholder:{type:String,default:""},oneLine:{type:Boolean,default:!1},small:{type:Boolean,default:!1},large:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:s}){const o=e,a=V({get:()=>o.modelValue,set:t=>s("update:modelValue",t)});return(t,u)=>(p(),r("label",{class:w(["base-input",{"one-line":e.oneLine,"base-input--small":e.small,"base-input--large":e.large}])},[e.label?(p(),r("div",D,h(e.label),1)):I("",!0),d("div",O,[c(t.$slots,"start-icon",{},void 0,!0),S(d("input",{"onUpdate:modelValue":u[0]||(u[0]=_=>x(a)?a.value=_:null),type:e.type,placeholder:e.placeholder},null,8,C),[[L,k(a)]]),c(t.$slots,"icon",{},void 0,!0)])],2))}},i=N(B,[["__scopeId","data-v-62906acd"]]);B.__docgenInfo={exportName:"default",displayName:"BaseInput",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"'text'"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"oneLine",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"small",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"large",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],slots:[{name:"start-icon"},{name:"icon"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/form/BaseInput.vue"]};const $={title:"Base/Input",component:i,tags:["autodocs"],args:{label:"標題",placeholder:"請輸入",value:""},render:(e,{updateArgs:s})=>({components:{BaseInput:i},setup(){const o=V({get:()=>e.value,set:a=>s({value:a})});return{args:e,value:o}},template:`
      <BaseInput v-bind="args" v-model="value" />
    `})},l={args:{}},n={args:{oneLine:!0}};var m,f,g;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {}
}`,...(g=(f=l.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var y,v,b;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    oneLine: true
  }
}`,...(b=(v=n.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const z=["Primary","OneLine"];export{n as OneLine,l as Primary,z as __namedExportsOrder,$ as default};
//# sourceMappingURL=Input.stories-4b01ef6a.js.map