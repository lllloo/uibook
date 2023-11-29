import{_ as E}from"./BaseTooltip-d63abf6e.js";import{r as _,f as v,d as f,g,u,B as L,C as O,l as R,n as S,o as r,F as T,D as j,x as q,y as G,t as H}from"./vue.esm-bundler-54d62a26.js";import{_ as J}from"./_plugin-vue_export-helper-c27b6911.js";import{B as K}from"./BaseField-ea666822.js";const P=e=>(q("data-v-cc07f01d"),e=e(),G(),e),Q=["value","placeholder","disabled"],U=P(()=>g("i",{class:"down fas fa-chevron-down"},null,-1)),X=["onMousedown"],D={__name:"BaseSelectMultiple",props:{options:{type:Array,default:()=>[]},modelValue:{type:Array,default:()=>[]},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,{emit:t}){const a=e,V=_(),N=()=>{V.value.focus()},B=t,s=v({get:()=>a.modelValue,set:l=>{B("update:modelValue",l),B("change",l)}}),W=v(()=>a.options.filter(l=>s.value.includes(l.value)).map(l=>l.label)),b=v(()=>s.value.length===0?"":!1),z=l=>{const o=s.value.indexOf(l.value);if(o>=0){s.value.splice(o,1);return}s.value=[...s.value,l.value]},i=_(!1);return(l,o)=>{const A=E;return r(),f("div",{class:S(["base-select",{selected:!u(b),"is-disabled":e.disabled}]),onClick:N},[g("input",{ref_key:"inputRef",ref:V,type:"text",value:u(b)?null:u(W),placeholder:e.placeholder,readonly:"",disabled:e.disabled,onFocus:o[0]||(o[0]=n=>i.value=!0),onBlur:o[1]||(o[1]=n=>i.value=!1)},null,40,Q),U,u(i)?(r(),L(A,{key:0,full:""},{default:O(()=>[g("ul",null,[(r(!0),f(T,null,j(e.options,(n,$)=>(r(),f("li",{key:$,class:S({checked:u(s).includes(n.value)}),onMousedown:Y=>z(n)},H(n.label),43,X))),128))])]),_:1})):R("",!0)],2)}}},m=J(D,[["__scopeId","data-v-cc07f01d"]]);D.__docgenInfo={exportName:"default",displayName:"BaseSelectMultiple",description:"",tags:{},props:[{name:"options",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"modelValue",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"change"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseSelectMultiple.vue"]};const te={component:m,decorators:[e=>({components:{story:e},template:`
        <div class="decorators" style="width: 100%;padding-bottom:120px;">
          <story />
        </div>
      `})],argTypes:{modelValue:{control:"array",name:"v-model"}},args:{modelValue:[],placeholder:"請輸入",options:[{label:"選項1",value:"1"},{label:"選項2",value:"2"},{label:"選項3",value:"3"}]},render:(e,{vModel:t})=>({components:{BaseSelectMultiple:m},setup(){const a=t("modelValue");return{args:e,modelValue:a}},template:`
      <BaseSelectMultiple v-bind="args" v-model="modelValue" />
    `})},d={args:{}},c={render:(e,{vModel:t})=>({components:{BaseSelectMultiple:m},setup(){const a=t("modelValue");return{args:e,modelValue:a}},template:`
      <BaseSelectMultiple v-bind="args" v-model="modelValue" small />
      <BaseSelectMultiple v-bind="args" v-model="modelValue" />
      <BaseSelectMultiple v-bind="args" v-model="modelValue" large />
    `})},p={render:(e,{vModel:t})=>({components:{BaseField:K,BaseSelectMultiple:m},setup(){const a=t("modelValue");return{args:e,modelValue:a}},template:`
      <BaseField label="標題">
        <BaseSelectMultiple v-bind="args" v-model="modelValue" />
      </BaseField>
    `})};var y,M,h;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(F=(x=c.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var w,C,I;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(I=(C=p.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const se=["Default","Size","WithWrap"];export{d as Default,c as Size,p as WithWrap,se as __namedExportsOrder,te as default};
