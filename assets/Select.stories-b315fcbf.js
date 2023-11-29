import{_ as O}from"./BaseTooltip-d63abf6e.js";import{r as _,f,d as g,g as b,u as n,B as T,C as j,l as q,n as y,o as d,F as G,D as H,x as J,y as K,t as P}from"./vue.esm-bundler-54d62a26.js";import{_ as Q}from"./_plugin-vue_export-helper-c27b6911.js";import{B as U}from"./BaseField-ea666822.js";const X=e=>(J("data-v-498cde25"),e=e(),K(),e),Y=["value","placeholder","disabled"],Z=X(()=>b("i",{class:"down fas fa-chevron-down"},null,-1)),ee=["onMousedown"],$={__name:"BaseSelect",props:{options:{type:Array,default:()=>[]},modelValue:{type:String,default:""},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,{emit:l}){const a=e,V=_(),A=()=>{V.value.focus()},B=l,r=f({get:()=>a.modelValue,set:s=>{B("update:modelValue",s),B("change",s)}}),E=f(()=>{var s;return(s=a.options.find(o=>o.value===r.value))==null?void 0:s.label}),S=f(()=>r.value===""),v=_(!1);return(s,o)=>{const L=O;return d(),g("div",{class:y(["base-select",{selected:!n(S),"is-disabled":e.disabled}]),onClick:A},[b("input",{ref_key:"inputRef",ref:V,type:"text",value:n(S)?null:n(E),placeholder:e.placeholder,readonly:"",disabled:e.disabled,onFocus:o[0]||(o[0]=t=>v.value=!0),onBlur:o[1]||(o[1]=t=>v.value=!1)},null,40,Y),Z,n(v)?(d(),T(L,{key:0,full:""},{default:j(()=>[b("ul",null,[(d(!0),g(G,null,H(e.options,(t,R)=>(d(),g("li",{key:R,class:y({checked:n(r)===t.value}),onMousedown:ae=>r.value=t.value},P(t.label),43,ee))),128))])]),_:1})):q("",!0)],2)}}},i=Q($,[["__scopeId","data-v-498cde25"]]);$.__docgenInfo={exportName:"default",displayName:"BaseSelect",description:"",tags:{},props:[{name:"options",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"change"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseSelect.vue"]};const ne={component:i,decorators:[e=>({components:{story:e},template:`
        <div class="decorators" style="width: 100%;padding-bottom:120px;">
          <story />
        </div>
      `})],args:{placeholder:"請輸入",options:[{label:"選項1",value:"1"},{label:"選項2",value:"2"},{label:"選項3",value:"3"}]},render:(e,{vModel:l})=>({components:{BaseSelect:i},setup(){const a=l("modelValue");return{args:e,modelValue:a}},template:`
      <BaseSelect v-bind="args" v-model="modelValue" />
    `})},u={args:{}},c={render:(e,{vModel:l})=>({components:{BaseSelect:i},setup(){const a=l("modelValue");return{args:e,modelValue:a}},template:`
      <BaseSelect v-bind="args" v-model="modelValue" class="small" />
      <BaseSelect v-bind="args" v-model="modelValue" />
      <BaseSelect v-bind="args" v-model="modelValue" class="large" />
    `})},m={args:{disabled:!0}},p={render:(e,{vModel:l})=>({components:{BaseField:U,BaseSelect:i},setup(){const a=l("modelValue");return{args:e,modelValue:a}},template:`
      <BaseField label="標題">
        <BaseSelect v-bind="args" v-model="modelValue" />
      </BaseField>
    `})};var h,k,F;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {}
}`,...(F=(k=u.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var x,w,C;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
      <BaseSelect v-bind="args" v-model="modelValue" class="small" />
      <BaseSelect v-bind="args" v-model="modelValue" />
      <BaseSelect v-bind="args" v-model="modelValue" class="large" />
    \`
  })
}`,...(C=(w=c.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var D,M,I;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(I=(M=m.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};var N,W,z;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(z=(W=p.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};const re=["Default","Size","Disabled","WithWrap"];export{u as Default,m as Disabled,c as Size,p as WithWrap,re as __namedExportsOrder,ne as default};
