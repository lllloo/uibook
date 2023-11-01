import{b as I,d as u,c as d,e as m,f as t,F as M,g as W,n as g,o as p,t as C,p as N,h as A}from"./vue.esm-bundler-3c0112f6.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import{B as L}from"./BaseField-12996924.js";const P=e=>(N("data-v-2c206b45"),e=e(),A(),e),R=["value"],z=["onMousedown"],D=P(()=>m("i",{class:"down fas fa-chevron-down"},null,-1)),k={__name:"BaseSelect",props:{options:{type:Array,default:()=>[]},modelValue:{type:String,default:""},placeholder:{type:String,default:""}},emits:["update:modelValue","change"],setup(e,{emit:a}){const l=e,v=I(),F=()=>{v.value.focus()},o=u({get:()=>l.modelValue,set:s=>{a("update:modelValue",s),a("change",s)}}),w=u(()=>{var s;return(s=l.options.find(_=>_.value===o.value))==null?void 0:s.label}),f=u(()=>o.value==="");return(s,_)=>(p(),d("div",{class:g(["base-select",{selected:!t(f)}]),onClick:F},[m("input",{ref_key:"inputRef",ref:v,type:"text",value:t(f)?e.placeholder:t(w),readonly:""},null,8,R),m("ul",null,[(p(!0),d(M,null,W(e.options,(c,x)=>(p(),d("li",{key:x,class:g({checked:c.value===t(o)}),onMousedown:O=>o.value=c.value},C(c.label),43,z))),128))]),D],2))}},i=E(k,[["__scopeId","data-v-2c206b45"]]);k.__docgenInfo={exportName:"default",displayName:"BaseSelect",description:"",tags:{},props:[{name:"options",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue"},{name:"change"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseSelect.vue"]};const G={title:"Base/Select",component:i,tags:["autodocs"],args:{placeholder:"請輸入",options:[{label:"選項1",value:"1"},{label:"選項2",value:"2"},{label:"選項3",value:"3"}]},render:(e,{vModel:a})=>({components:{BaseSelect:i},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseSelect v-bind="args" v-model="modelValue" />
    `})},n={args:{}},r={render:(e,{vModel:a})=>({components:{BaseField:L,BaseSelect:i},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseField label="標題">
        <BaseSelect v-bind="args" v-model="modelValue" />
      </BaseField>
    `})};var h,B,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {}
}`,...(S=(B=n.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var V,b,y;r.parameters={...r.parameters,docs:{...(V=r.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: (args, {
    vModel
  }) => ({
    components: {
      BaseField,
      BaseSelect
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
        <BaseSelect v-bind="args" v-model="modelValue" />
      </BaseField>
    \`
  })
}`,...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const H=["Primary","WithWrap"];export{n as Primary,r as WithWrap,H as __namedExportsOrder,G as default};
//# sourceMappingURL=Select.stories-31e93148.js.map
