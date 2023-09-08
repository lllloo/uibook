import{b as v,d as c,c as p,e as i,f as n,F as I,g as W,n as h,o as m,t as C,p as N,h as A}from"./vue.esm-bundler-3c0112f6.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import{B as L}from"./BaseField-b819622c.js";const P=e=>(N("data-v-6285742f"),e=e(),A(),e),R=["value"],z=["onMousedown"],D=P(()=>i("i",{class:"down fas fa-chevron-down"},null,-1)),k={__name:"BaseSelect",props:{options:{type:Array,default:()=>[]},modelValue:{type:String,default:""},placeholder:{type:String,default:""}},emits:["update:modelValue","change"],setup(e,{emit:a}){const o=e,l=v(),F=()=>{l.value.focus()},s=c({get:()=>o.modelValue,set:t=>{a("update:modelValue",t),a("change",t)}}),w=c(()=>{var t;return(t=o.options.find(g=>g.value===s.value))==null?void 0:t.label}),_=c(()=>s.value==="");return(t,g)=>(m(),p("div",{class:h(["base-select",{selected:!n(_)}]),onClick:F},[i("input",{ref_key:"inputRef",ref:l,type:"text",value:n(_)?e.placeholder:n(w),readonly:""},null,8,R),i("ul",null,[(m(!0),p(I,null,W(e.options,(u,x)=>(m(),p("li",{key:x,class:h({checked:u.value===n(s)}),onMousedown:O=>s.value=u.value},C(u.label),43,z))),128))]),D],2))}},f=E(k,[["__scopeId","data-v-6285742f"]]);k.__docgenInfo={exportName:"default",displayName:"BaseSelect",description:"",tags:{},props:[{name:"options",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue"},{name:"change"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/form/BaseSelect.vue"]};const G={title:"Base/Select",component:f,tags:["autodocs"],args:{label:"標題",placeholder:"請輸入",options:[{label:"選項1",value:"1"},{label:"選項2",value:"2"},{label:"選項3",value:"3"}]},render:e=>({components:{BaseSelect:f},setup(){let a=v("");return{args:e,model:a,updateModel:l=>{a.value=l}}},template:`
      <BaseSelect v-bind="args" :modelValue="model" @update:modelValue="updateModel" />
    `})},r={args:{}},d={render:e=>({components:{BaseField:L,BaseSelect:f},setup(){let a=v("");return{args:e,model:a,updateModel:l=>{a.value=l}}},template:`
      <BaseField label="標題">
        <BaseSelect v-bind="args" :modelValue="model" @update:modelValue="updateModel" />
      </BaseField>
    `})};var B,S,y;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {}
}`,...(y=(S=r.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var b,V,M;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => ({
    components: {
      BaseField,
      BaseSelect
    },
    setup() {
      let model = ref('');
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
        <BaseSelect v-bind="args" :modelValue="model" @update:modelValue="updateModel" />
      </BaseField>
    \`
  })
}`,...(M=(V=d.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};const H=["Primary","WithWrap"];export{r as Primary,d as WithWrap,H as __namedExportsOrder,G as default};
//# sourceMappingURL=Select.stories-8ac52445.js.map
