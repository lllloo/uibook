import{_ as L}from"./BaseTooltip-97ac3060.js";import{_ as O}from"./IconAngleDown-d0726e48.js";import{r as b,j as v,c as f,a as B,u,g as R,k as T,w as j,q,n as y,o as r,F as G,D as H,t as J}from"./vue.esm-bundler-c2a5f9d0.js";import{_ as K}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as P}from"./BaseField-c69745c2.js";const Q=["value","placeholder","disabled"],U=["onMousedown"],N={__name:"BaseSelectMultiple",props:{options:{type:Array,default:()=>[]},modelValue:{type:Array,default:()=>[]},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,{emit:t}){const a=e,g=b(),A=()=>{g.value.focus()},_=t,n=v({get:()=>a.modelValue,set:l=>{_("update:modelValue",l),_("change",l)}}),I=v(()=>a.options.filter(l=>n.value.includes(l.value)).map(l=>l.label)),V=v(()=>n.value.length===0?"":!1),W=l=>{const o=n.value.indexOf(l.value);if(o>=0){n.value.splice(o,1);return}n.value=[...n.value,l.value]},i=b(!1);return(l,o)=>{const $=O,z=L;return r(),f("div",{class:y(["base-select",{selected:!u(V),"is-disabled":e.disabled}]),onClick:A},[B("input",{ref_key:"inputRef",ref:g,type:"text",value:u(V)?null:u(I),placeholder:e.placeholder,readonly:"",disabled:e.disabled,onFocus:o[0]||(o[0]=s=>i.value=!0),onBlur:o[1]||(o[1]=s=>i.value=!1)},null,40,Q),R($,{class:"down"}),u(i)?(r(),T(z,{key:0,full:""},{default:j(()=>[B("ul",null,[(r(!0),f(G,null,H(e.options,(s,E)=>(r(),f("li",{key:E,class:y({checked:u(n).includes(s.value)}),onMousedown:X=>W(s)},J(s.label),43,U))),128))])]),_:1})):q("",!0)],2)}}},p=K(N,[["__scopeId","data-v-d350008e"]]);N.__docgenInfo={exportName:"default",displayName:"BaseSelectMultiple",description:"",tags:{},props:[{name:"options",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"modelValue",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"change"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseSelectMultiple.vue"]};const te={component:p,decorators:[e=>({components:{story:e},template:`
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
}`,...(F=(x=c.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var w,C,D;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(D=(C=m.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const ne=["Default","Size","WithWrap"];export{d as Default,c as Size,m as WithWrap,ne as __namedExportsOrder,te as default};
