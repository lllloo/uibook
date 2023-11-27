import{B as $}from"./BaseTooltip-a3aaf1ab.js";import{r as S,c as v,a as f,d as g,u as n,g as A,h as E,f as L,n as b,o as u,F as R,j as T,p as j,k as O,t as q}from"./vue.esm-bundler-d2d23598.js";import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";import{B as H}from"./BaseField-6061bf7b.js";const J=e=>(j("data-v-0339f275"),e=e(),O(),e),K=["value"],P=J(()=>g("i",{class:"down fas fa-chevron-down"},null,-1)),Q=["onMousedown"],I={__name:"BaseSelect",props:{options:{type:Array,default:()=>[]},modelValue:{type:String,default:""},placeholder:{type:String,default:""},small:{type:Boolean,default:!1},large:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,{emit:a}){const l=e,V=S(),N=()=>{V.value.focus()},r=v({get:()=>l.modelValue,set:s=>{a("update:modelValue",s),a("change",s)}}),W=v(()=>{var s;return(s=l.options.find(o=>o.value===r.value))==null?void 0:s.label}),B=v(()=>r.value===""),i=S(!1);return(s,o)=>{const z=$;return u(),f("div",{class:b(["base-select",{"base-select":!0,"base-select--small":e.small,"base-select--large":e.large,selected:!n(B)}]),onClick:N},[g("input",{ref_key:"inputRef",ref:V,type:"text",value:n(B)?e.placeholder:n(W),readonly:"",onFocus:o[0]||(o[0]=t=>i.value=!0),onBlur:o[1]||(o[1]=t=>i.value=!1)},null,40,K),P,n(i)?(u(),A(z,{key:0,full:""},{default:E(()=>[g("ul",null,[(u(!0),f(R,null,T(e.options,(t,D)=>(u(),f("li",{key:D,class:b({checked:n(r)===t.value}),onMousedown:U=>r.value=t.value},q(t.label),43,Q))),128))])]),_:1})):L("",!0)],2)}}},p=G(I,[["__scopeId","data-v-0339f275"]]);I.__docgenInfo={exportName:"default",displayName:"BaseSelect",description:"",tags:{},props:[{name:"options",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"small",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"large",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"change"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseSelect.vue"]};const ae={component:p,decorators:[e=>({components:{story:e},template:`
        <div class="decorators" style="width: 100%;padding-bottom:120px;">
          <story />
        </div>
      `})],args:{placeholder:"請輸入",options:[{label:"選項1",value:"1"},{label:"選項2",value:"2"},{label:"選項3",value:"3"}]},render:(e,{vModel:a})=>({components:{BaseSelect:p},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseSelect v-bind="args" v-model="modelValue" />
    `})},d={args:{}},c={render:(e,{vModel:a})=>({components:{BaseSelect:p},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseSelect v-bind="args" v-model="modelValue" small />
      <BaseSelect v-bind="args" v-model="modelValue" />
      <BaseSelect v-bind="args" v-model="modelValue" large />
    `})},m={render:(e,{vModel:a})=>({components:{BaseField:H,BaseSelect:p},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseField label="標題">
        <BaseSelect v-bind="args" v-model="modelValue" />
      </BaseField>
    `})};var _,y,h;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {}
}`,...(h=(y=d.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var k,F,w;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: (args, {
    vModel
  }) => ({
    components: {
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
      <BaseSelect v-bind="args" v-model="modelValue" small />
      <BaseSelect v-bind="args" v-model="modelValue" />
      <BaseSelect v-bind="args" v-model="modelValue" large />
    \`
  })
}`,...(w=(F=c.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var x,M,C;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(C=(M=m.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};const le=["Default","Size","WithWrap"];export{d as Default,c as Size,m as WithWrap,le as __namedExportsOrder,ae as default};
//# sourceMappingURL=Select.stories-029a82fe.js.map
