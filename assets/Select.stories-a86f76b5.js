import{_ as T}from"./BaseTooltip-6d0ccecb.js";import{_ as j}from"./IconAngleDown-e4a09899.js";import{r as B,k as f,c as g,a as S,m as t,z as q,A as G,B as H,g as J,n as y,o as d,F as K,C as P,t as Q}from"./vue.esm-bundler-1c9234ae.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";import{B as X}from"./BaseField-d59241dd.js";const Y=["value","placeholder","disabled"],Z=["onMousedown"],I={__name:"BaseSelect",props:{options:{type:Array,default:()=>[]},modelValue:{type:String,default:""},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,{emit:l}){const a=e,b=B(),$=()=>{b.value.focus()},V=l,r=f({get:()=>a.modelValue,set:s=>{V("update:modelValue",s),V("change",s)}}),E=f(()=>{var s;return(s=a.options.find(o=>o.value===r.value))==null?void 0:s.label}),_=f(()=>r.value===""),v=B(!1);return(s,o)=>{const L=j,R=T;return d(),g("div",{class:y(["base-select",{selected:!t(_),"is-disabled":e.disabled}]),onClick:$},[S("input",{ref_key:"inputRef",ref:b,type:"text",value:t(_)?null:t(E),placeholder:e.placeholder,readonly:"",disabled:e.disabled,onFocus:o[0]||(o[0]=n=>v.value=!0),onBlur:o[1]||(o[1]=n=>v.value=!1)},null,40,Y),q(L,{class:"down"}),t(v)?(d(),G(R,{key:0,full:""},{default:H(()=>[S("ul",null,[(d(!0),g(K,null,P(e.options,(n,O)=>(d(),g("li",{key:O,class:y({checked:t(r)===n.value}),onMousedown:ee=>r.value=n.value},Q(n.label),43,Z))),128))])]),_:1})):J("",!0)],2)}}},i=U(I,[["__scopeId","data-v-62e672cf"]]);I.__docgenInfo={exportName:"default",displayName:"BaseSelect",description:"",tags:{},props:[{name:"options",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"change"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseSelect.vue"]};const te={component:i,decorators:[e=>({components:{story:e},template:`
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
}`,...(C=(w=c.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var D,M,N;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(N=(M=m.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var z,A,W;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(W=(A=p.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};const re=["Default","Size","Disabled","WithWrap"];export{u as Default,m as Disabled,c as Size,p as WithWrap,re as __namedExportsOrder,te as default};
