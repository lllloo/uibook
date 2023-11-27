import{B as T}from"./BaseTooltip-a3aaf1ab.js";import{r as b,c as v,a as f,d as g,u,g as $,h as E,f as L,n as S,o as r,F as O,j as R,p as j,k as q,t as G}from"./vue.esm-bundler-d2d23598.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";import{B as J}from"./BaseField-6061bf7b.js";const K=e=>(j("data-v-729b71fe"),e=e(),q(),e),P=["value"],Q=K(()=>g("i",{class:"down fas fa-chevron-down"},null,-1)),U=["onMousedown"],C={__name:"BaseSelectMultiple",props:{options:{type:Array,default:()=>[]},modelValue:{type:Array,default:()=>[]},placeholder:{type:String,default:""},small:{type:Boolean,default:!1},large:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,{emit:a}){const t=e,V=b(),N=()=>{V.value.focus()},s=v({get:()=>t.modelValue,set:l=>{a("update:modelValue",l),a("change",l)}}),W=v(()=>t.options.filter(l=>s.value.includes(l.value)).map(l=>l.label)),B=v(()=>s.value.length===0),z=l=>{const o=s.value.indexOf(l.value);if(o>=0){s.value.splice(o,1);return}s.value=[...s.value,l.value]},i=b(!1);return(l,o)=>{const A=T;return r(),f("div",{class:S(["base-select",{"base-select":!0,"base-select--small":e.small,"base-select--large":e.large,selected:!u(B)}]),onClick:N},[g("input",{ref_key:"inputRef",ref:V,type:"text",value:u(B)?e.placeholder:u(W),readonly:"",onFocus:o[0]||(o[0]=n=>i.value=!0),onBlur:o[1]||(o[1]=n=>i.value=!1)},null,40,P),Q,u(i)?(r(),$(A,{key:0,full:""},{default:E(()=>[g("ul",null,[(r(!0),f(O,null,R(e.options,(n,D)=>(r(),f("li",{key:D,class:S({checked:u(s).includes(n.value)}),onMousedown:X=>z(n)},G(n.label),43,U))),128))])]),_:1})):L("",!0)],2)}}},m=H(C,[["__scopeId","data-v-729b71fe"]]);C.__docgenInfo={exportName:"default",displayName:"BaseSelectMultiple",description:"",tags:{},props:[{name:"options",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"modelValue",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"small",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"large",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"change"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseSelectMultiple.vue"]};const ae={component:m,decorators:[e=>({components:{story:e},template:`
        <div class="decorators" style="width: 100%;padding-bottom:120px;">
          <story />
        </div>
      `})],argTypes:{modelValue:{control:"array",name:"v-model"}},args:{modelValue:[],placeholder:"請輸入",options:[{label:"選項1",value:"1"},{label:"選項2",value:"2"},{label:"選項3",value:"3"}]},render:(e,{vModel:a})=>({components:{BaseSelectMultiple:m},setup(){const t=a("modelValue");return{args:e,modelValue:t}},template:`
      <BaseSelectMultiple v-bind="args" v-model="modelValue" />
    `})},d={args:{}},c={render:(e,{vModel:a})=>({components:{BaseSelectMultiple:m},setup(){const t=a("modelValue");return{args:e,modelValue:t}},template:`
      <BaseSelectMultiple v-bind="args" v-model="modelValue" small />
      <BaseSelectMultiple v-bind="args" v-model="modelValue" />
      <BaseSelectMultiple v-bind="args" v-model="modelValue" large />
    `})},p={render:(e,{vModel:a})=>({components:{BaseField:J,BaseSelectMultiple:m},setup(){const t=a("modelValue");return{args:e,modelValue:t}},template:`
      <BaseField label="標題">
        <BaseSelectMultiple v-bind="args" v-model="modelValue" />
      </BaseField>
    `})};var y,_,M;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {}
}`,...(M=(_=d.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var h,k,x;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(x=(k=c.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var F,w,I;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(I=(w=p.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};const te=["Default","Size","WithWrap"];export{d as Default,c as Size,p as WithWrap,te as __namedExportsOrder,ae as default};
//# sourceMappingURL=SelectMultiple.stories-be80c892.js.map
