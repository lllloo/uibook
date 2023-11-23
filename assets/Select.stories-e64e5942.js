import{B as $}from"./BaseTooltip-37e996db.js";import{r as f,c as v,a as g,d as b,u as t,g as A,h as E,f as L,n as _,o as u,F as T,j,p as O,k as q,t as G}from"./vue.esm-bundler-d2d23598.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";import{B as J}from"./BaseField-6061bf7b.js";const K=e=>(O("data-v-3154abb7"),e=e(),q(),e),P=["value"],Q=K(()=>b("i",{class:"down fas fa-chevron-down"},null,-1)),U=["onMousedown"],N={__name:"BaseSelect",props:{options:{type:Array,default:()=>[]},modelValue:{type:String,default:""},placeholder:{type:String,default:""},small:{type:Boolean,default:!1},large:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,{emit:a}){const l=e,V=f(),R=()=>{V.value.focus()},r=v({get:()=>l.modelValue,set:s=>{a("update:modelValue",s),a("change",s)}}),W=v(()=>{var s;return(s=l.options.find(o=>o.value===r.value))==null?void 0:s.label}),B=v(()=>r.value===""),i=f(!1),S=f();return(s,o)=>{const z=$;return u(),g("div",{ref_key:"buttonRef",ref:S,class:_(["base-select",{"base-select":!0,"base-select--small":e.small,"base-select--large":e.large,selected:!t(B)}]),onClick:R},[b("input",{ref_key:"inputRef",ref:V,type:"text",value:t(B)?e.placeholder:t(W),readonly:"",onFocus:o[0]||(o[0]=n=>i.value=!0),onBlur:o[1]||(o[1]=n=>i.value=!1)},null,40,P),Q,t(i)?(u(),A(z,{key:0,reference:t(S),full:""},{default:E(()=>[b("ul",null,[(u(!0),g(T,null,j(e.options,(n,D)=>(u(),g("li",{key:D,class:_({checked:t(r)===n.value}),onMousedown:X=>r.value=n.value},G(n.label),43,U))),128))])]),_:1},8,["reference"])):L("",!0)],2)}}},p=H(N,[["__scopeId","data-v-3154abb7"]]);N.__docgenInfo={exportName:"default",displayName:"BaseSelect",description:"",tags:{},props:[{name:"options",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"small",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"large",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"change"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseSelect.vue"]};const le={component:p,decorators:[e=>({components:{story:e},template:`
        <div class="decorators" style="width: 100%;padding-bottom:120px;">
          <story />
        </div>
      `})],args:{placeholder:"請輸入",options:[{label:"選項1",value:"1"},{label:"選項2",value:"2"},{label:"選項3",value:"3"}]},render:(e,{vModel:a})=>({components:{BaseSelect:p},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseSelect v-bind="args" v-model="modelValue" />
    `})},d={args:{}},c={render:(e,{vModel:a})=>({components:{BaseSelect:p},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseSelect v-bind="args" v-model="modelValue" small />
      <BaseSelect v-bind="args" v-model="modelValue" />
      <BaseSelect v-bind="args" v-model="modelValue" large />
    `})},m={render:(e,{vModel:a})=>({components:{BaseField:J,BaseSelect:p},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseField label="標題">
        <BaseSelect v-bind="args" v-model="modelValue" />
      </BaseField>
    `})};var y,h,k;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {}
}`,...(k=(h=d.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var F,w,x;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(x=(w=c.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var M,C,I;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(I=(C=m.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const se=["Default","Size","WithWrap"];export{d as Default,c as Size,m as WithWrap,se as __namedExportsOrder,le as default};
//# sourceMappingURL=Select.stories-e64e5942.js.map
