import{k as T,c as y,p as h,v as w,m as S,a as k,q as D,n as N,o as z}from"./vue.esm-bundler-e9714d41.js";import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";const E=["placeholder","disabled","rows"],x={__name:"BaseTextarea",props:{modelValue:{type:String,default:""},rows:{type:Number,default:2},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:a}){const s=e,B=a,t=T({get:()=>s.modelValue,set:d=>B("update:modelValue",d)});return(d,u)=>(z(),y("div",{class:N(["base-textarea",{"is-disabled":e.disabled}])},[h(k("textarea",{"onUpdate:modelValue":u[0]||(u[0]=_=>D(t)?t.value=_:null),placeholder:e.placeholder,disabled:e.disabled,rows:e.rows},null,8,E),[[w,S(t)]])],2))}},n=M(x,[["__scopeId","data-v-de583ceb"]]);x.__docgenInfo={exportName:"default",displayName:"BaseTextarea",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"rows",type:{name:"number"},defaultValue:{func:!1,value:"2"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseTextarea.vue"]};const C={component:n,args:{label:"標題",placeholder:"請輸入",modelValue:""},render:(e,{vModel:a})=>({components:{BaseTextarea:n},setup(){const s=a("modelValue");return{args:e,modelValue:s}},template:`
      <BaseTextarea v-bind="args" v-model="modelValue" />
    `})},l={args:{}},r={render:(e,{vModel:a})=>({components:{BaseTextarea:n},setup(){const s=a("modelValue");return{args:e,modelValue:s}},template:`
      <BaseTextarea v-bind="args" v-model="modelValue" class="small" /> 
      <BaseTextarea v-bind="args" v-model="modelValue" />
      <BaseTextarea v-bind="args" v-model="modelValue" class="large" />
    `})},o={args:{disabled:!0}};var m,c,p;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {}
}`,...(p=(c=l.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var i,v,f;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args, {
    vModel
  }) => ({
    components: {
      BaseTextarea
    },
    setup() {
      const modelValue = vModel('modelValue');
      return {
        args,
        modelValue
      };
    },
    template: \`
      <BaseTextarea v-bind="args" v-model="modelValue" class="small" /> 
      <BaseTextarea v-bind="args" v-model="modelValue" />
      <BaseTextarea v-bind="args" v-model="modelValue" class="large" />
    \`
  })
}`,...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var b,g,V;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(V=(g=o.parameters)==null?void 0:g.docs)==null?void 0:V.source}}};const F=["Default","Size","Disabled"];export{l as Default,o as Disabled,r as Size,F as __namedExportsOrder,C as default};
