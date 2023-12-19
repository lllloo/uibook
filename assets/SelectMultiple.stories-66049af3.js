import{_ as L}from"./BaseTooltip-6d0ccecb.js";import{_ as O}from"./IconAngleDown-e4a09899.js";import{r as B,k as v,c as f,a as b,m as r,z as R,A as T,B as j,g as q,n as y,o as u,F as G,C as H,t as J}from"./vue.esm-bundler-1c9234ae.js";import{_ as K}from"./_plugin-vue_export-helper-c27b6911.js";import{B as P}from"./BaseField-d59241dd.js";const Q=["value","placeholder","disabled"],U=["onMousedown"],N={__name:"BaseSelectMultiple",props:{options:{type:Array,default:()=>[]},modelValue:{type:Array,default:()=>[]},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,{emit:t}){const a=e,g=B(),z=()=>{g.value.focus()},V=t,o=v({get:()=>a.modelValue,set:l=>{V("update:modelValue",l),V("change",l)}}),D=v(()=>a.options.filter(l=>o.value.includes(l.value)).map(l=>l.label)),_=v(()=>o.value.length===0?"":!1),I=l=>{const n=o.value.indexOf(l.value);if(n>=0){o.value.splice(n,1);return}o.value=[...o.value,l.value]},i=B(!1);return(l,n)=>{const W=O,$=L;return u(),f("div",{class:y(["base-select",{selected:!r(_),"is-disabled":e.disabled}]),onClick:z},[b("input",{ref_key:"inputRef",ref:g,type:"text",value:r(_)?null:r(D),placeholder:e.placeholder,readonly:"",disabled:e.disabled,onFocus:n[0]||(n[0]=s=>i.value=!0),onBlur:n[1]||(n[1]=s=>i.value=!1)},null,40,Q),R(W,{class:"down"}),r(i)?(u(),T($,{key:0,full:""},{default:j(()=>[b("ul",null,[(u(!0),f(G,null,H(e.options,(s,E)=>(u(),f("li",{key:E,class:y({checked:r(o).includes(s.value)}),onMousedown:X=>I(s)},J(s.label),43,U))),128))])]),_:1})):q("",!0)],2)}}},p=K(N,[["__scopeId","data-v-d350008e"]]);N.__docgenInfo={exportName:"default",displayName:"BaseSelectMultiple",description:"",tags:{},props:[{name:"options",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"modelValue",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"change"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseSelectMultiple.vue"]};const te={component:p,decorators:[e=>({components:{story:e},template:`
        <div class="decorators" style="width: 100%;padding-bottom:120px;">
          <story />
        </div>
      `})],argTypes:{modelValue:{control:"array",name:"v-model"}},args:{modelValue:[],placeholder:"請輸入",options:[{label:"選項1",value:"1"},{label:"選項2",value:"2"},{label:"選項3",value:"3"}]},render:(e,{vModel:t})=>({components:{BaseSelectMultiple:p},setup(){const a=t("modelValue");return{args:e,modelValue:a}},template:`
      <BaseSelectMultiple v-bind="args" v-model="modelValue" />
    `})},d={args:{}},c={render:(e,{vModel:t})=>({components:{BaseSelectMultiple:p},setup(){const a=t("modelValue");return{args:e,modelValue:a}},template:`
      <BaseSelectMultiple v-bind="args" v-model="modelValue" small />
      <BaseSelectMultiple v-bind="args" v-model="modelValue" />
      <BaseSelectMultiple v-bind="args" v-model="modelValue" large />
    `})},m={render:(e,{vModel:t})=>({components:{BaseField:P,BaseSelectMultiple:p},setup(){const a=t("modelValue");return{args:e,modelValue:a}},template:`
      <BaseField label="標題">
        <BaseSelectMultiple v-bind="args" v-model="modelValue" />
      </BaseField>
    `})};var S,M,h;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {}
}`,...(h=(M=d.parameters)==null?void 0:M.docs)==null?void 0:h.source}}};var k,x,F;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: (args, {
    vModel
  }) => ({
    components: {
      BaseSelectMultiple
    },
    setup() {
      const modelValue = vModel('modelValue');
      return {
        args,
        modelValue
      };
    },
    template: \`
      <BaseSelectMultiple v-bind="args" v-model="modelValue" small />
      <BaseSelectMultiple v-bind="args" v-model="modelValue" />
      <BaseSelectMultiple v-bind="args" v-model="modelValue" large />
    \`
  })
}`,...(F=(x=c.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var w,C,A;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: (args, {
    vModel
  }) => ({
    components: {
      BaseField,
      BaseSelectMultiple
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
        <BaseSelectMultiple v-bind="args" v-model="modelValue" />
      </BaseField>
    \`
  })
}`,...(A=(C=m.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};const oe=["Default","Size","WithWrap"];export{d as Default,c as Size,m as WithWrap,oe as __namedExportsOrder,te as default};
