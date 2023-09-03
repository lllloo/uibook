import{b as S,d as v,c as n,e as C,t as f,f as r,w as A,v as D,g,F as B,h,i as E,n as V,o as d,p as L,j as P}from"./vue.esm-bundler-34f1bfe9.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";import{B as z}from"./BaseField-fe693b31.js";const O=e=>(L("data-v-7680c52b"),e=e(),P(),e),R=["value"],T=["onMousedown"],U=O(()=>g("i",{class:"down fas fa-chevron-down"},null,-1)),I={__name:"BaseSelect",props:{options:{type:Array,default:()=>[]},modelValue:{type:String,default:""},placeholder:{type:String,default:""}},emits:["update:modelValue","change"],setup(e,{emit:a}){const u=e,o=S(),N=()=>{o.value.focus()},t=v({get:()=>u.modelValue,set:s=>{a("update:modelValue",s),a("change",s)}}),W=v(()=>{var s;return(s=u.options.find(c=>c.value===t.value))==null?void 0:s.label}),b=v(()=>t.value==="");return(s,c)=>(d(),n("div",{class:V(["base-select",{selected:!r(b)}]),onClick:N},[C(f(r(b)?e.placeholder:r(W))+" ",1),A(g("select",{ref_key:"select",ref:o,"onUpdate:modelValue":c[0]||(c[0]=l=>E(t)?t.value=l:null)},[(d(!0),n(B,null,h(e.options,(l,i)=>(d(),n("option",{key:i,value:l.value},f(l.label),9,R))),128))],512),[[D,r(t)]]),g("ul",null,[(d(!0),n(B,null,h(e.options,(l,i)=>(d(),n("li",{key:i,class:V({checked:l.value===r(t)}),onMousedown:$=>t.value=l.value},f(l.label),43,T))),128))]),U],2))}},_=j(I,[["__scopeId","data-v-7680c52b"]]);I.__docgenInfo={exportName:"default",displayName:"BaseSelect",description:"",tags:{},props:[{name:"options",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue"},{name:"change"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/form/BaseSelect.vue"]};const J={title:"Base/Select",component:_,tags:["autodocs"],args:{label:"標題",placeholder:"請輸入",options:[{label:"選項1",value:"1"},{label:"選項2",value:"2"},{label:"選項3",value:"3"}]},render:e=>({components:{BaseSelect:_},setup(){let a=S("");return{args:e,model:a,updateModel:o=>{a.value=o}}},template:`
      <BaseSelect v-bind="args" :modelValue="model" @update:modelValue="updateModel" />
    `})},p={args:{}},m={render:e=>({components:{BaseField:z,BaseSelect:_},setup(){let a=S("");return{args:e,model:a,updateModel:o=>{a.value=o}}},template:`
      <BaseField label="標題">
        <BaseSelect v-bind="args" :modelValue="model" @update:modelValue="updateModel" />
      </BaseField>
    `})};var y,M,k;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {}
}`,...(k=(M=p.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var w,F,x;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(x=(F=m.parameters)==null?void 0:F.docs)==null?void 0:x.source}}};const K=["Primary","WithWrap"];export{p as Primary,m as WithWrap,K as __namedExportsOrder,J as default};
//# sourceMappingURL=Select.stories-6d750798.js.map
