import{_ as q}from"./BaseTooltip-97ac3060.js";import{_ as O}from"./IconAngleDown-d0726e48.js";import{r as B,j as f,c as g,a as S,u as t,g as T,k as G,w as H,q as J,n as y,o as d,F as K,D as P,t as Q}from"./vue.esm-bundler-c2a5f9d0.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as X}from"./BaseField-c69745c2.js";const Y=["value","placeholder","disabled"],Z=["onMousedown"],A={__name:"BaseSelect",props:{options:{type:Array,default:()=>[]},modelValue:{type:String,default:""},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,{emit:l}){const a=e,_=B(),I=()=>{_.value.focus()},b=l,r=f({get:()=>a.modelValue,set:s=>{b("update:modelValue",s),b("change",s)}}),E=f(()=>{var s;return(s=a.options.find(o=>o.value===r.value))==null?void 0:s.label}),V=f(()=>r.value===""),v=B(!1);return(s,o)=>{const L=O,R=q;return d(),g("div",{class:y(["base-select",{selected:!t(V),"is-disabled":e.disabled}]),onClick:I},[S("input",{ref_key:"inputRef",ref:_,type:"text",value:t(V)?null:t(E),placeholder:e.placeholder,readonly:"",disabled:e.disabled,onFocus:o[0]||(o[0]=n=>v.value=!0),onBlur:o[1]||(o[1]=n=>v.value=!1)},null,40,Y),T(L,{class:"down"}),t(v)?(d(),G(R,{key:0,full:""},{default:H(()=>[S("ul",null,[(d(!0),g(K,null,P(e.options,(n,j)=>(d(),g("li",{key:j,class:y({checked:t(r)===n.value}),onMousedown:ee=>r.value=n.value},Q(n.label),43,Z))),128))])]),_:1})):J("",!0)],2)}}},i=U(A,[["__scopeId","data-v-62e672cf"]]);A.__docgenInfo={exportName:"default",displayName:"BaseSelect",description:"",tags:{},props:[{name:"options",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"change"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseSelect.vue"]};const te={component:i,decorators:[e=>({components:{story:e},template:`
        <div class="decorators" style="width: 100%;padding-bottom:120px;">
          <story />
        </div>
      `})],args:{placeholder:"請輸入",options:[{label:"選項1",value:"1"},{label:"選項2",value:"2"},{label:"選項3",value:"3"}]},render:(e,{vModel:l})=>({components:{BaseSelect:i},setup(){const a=l("modelValue");return{args:e,modelValue:a}},template:`
      <BaseSelect v-bind="args" v-model="modelValue" />
    `})},u={args:{}},c={render:(e,{vModel:l})=>({components:{BaseSelect:i},setup(){const a=l("modelValue");return{args:e,modelValue:a}},template:`
      <BaseSelect v-bind="args" v-model="modelValue" class="small" />
      <BaseSelect v-bind="args" v-model="modelValue" />
      <BaseSelect v-bind="args" v-model="modelValue" class="large" />
    `})},m={args:{disabled:!0}},p={render:(e,{vModel:l})=>({components:{BaseField:X,BaseSelect:i},setup(){const a=l("modelValue");return{args:e,modelValue:a}},template:`
      <BaseField label="標題">
        <BaseSelect v-bind="args" v-model="modelValue" />
      </BaseField>
    `})};var h,k,F;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {}
}`,...(F=(k=u.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var w,x,D;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(D=(x=c.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var M,C,N;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(N=(C=m.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var W,$,z;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(z=($=p.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};const re=["Default","Size","Disabled","WithWrap"];export{u as Default,m as Disabled,c as Size,p as WithWrap,re as __namedExportsOrder,te as default};
