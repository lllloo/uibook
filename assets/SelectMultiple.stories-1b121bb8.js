import{B as T}from"./BaseTooltip-aa858c07.js";import{r as v,c as f,a as g,d as V,u as n,g as $,h as E,f as L,n as S,o as u,F as O,j,p as q,k as G,t as H}from"./vue.esm-bundler-d2d23598.js";import{_ as J}from"./_plugin-vue_export-helper-c27b6911.js";import{B as K}from"./BaseField-c7faaee2.js";const P=e=>(q("data-v-a6593e2b"),e=e(),G(),e),Q=["value"],U=P(()=>V("i",{class:"down fas fa-chevron-down"},null,-1)),X=["onMousedown"],N={__name:"BaseSelectMultiple",props:{options:{type:Array,default:()=>[]},modelValue:{type:Array,default:()=>[]},placeholder:{type:String,default:""},small:{type:Boolean,default:!1},large:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,{emit:a}){const t=e,B=v(),R=()=>{B.value.focus()},s=f({get:()=>t.modelValue,set:l=>{a("update:modelValue",l),a("change",l)}}),W=f(()=>t.options.filter(l=>s.value.includes(l.value)).map(l=>l.label)),b=f(()=>s.value.length===0),z=l=>{const o=s.value.indexOf(l.value);if(o>=0){s.value.splice(o,1);return}s.value=[...s.value,l.value]},i=v(!1),y=v();return(l,o)=>{const A=T;return u(),g("div",{ref_key:"buttonRef",ref:y,class:S(["base-select",{"base-select":!0,"base-select--small":e.small,"base-select--large":e.large,selected:!n(b)}]),onClick:R},[V("input",{ref_key:"inputRef",ref:B,type:"text",value:n(b)?e.placeholder:n(W),readonly:"",onFocus:o[0]||(o[0]=r=>i.value=!0),onBlur:o[1]||(o[1]=r=>i.value=!1)},null,40,Q),U,n(i)?(u(),$(A,{key:0,reference:n(y),full:""},{default:E(()=>[V("ul",null,[(u(!0),g(O,null,j(e.options,(r,D)=>(u(),g("li",{key:D,class:S({checked:n(s).includes(r.value)}),onMousedown:Y=>z(r)},H(r.label),43,X))),128))])]),_:1},8,["reference"])):L("",!0)],2)}}},m=J(N,[["__scopeId","data-v-a6593e2b"]]);N.__docgenInfo={exportName:"default",displayName:"BaseSelectMultiple",description:"",tags:{},props:[{name:"options",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"modelValue",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"small",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"large",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"change"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseSelectMultiple.vue"]};const te={component:m,decorators:[e=>({components:{story:e},template:`
        <div class="decorators" style="width: 100%;padding-bottom:120px;">
          <story />
        </div>
      `})],argTypes:{modelValue:{control:"array",name:"v-model"}},args:{modelValue:[],placeholder:"請輸入",options:[{label:"選項1",value:"1"},{label:"選項2",value:"2"},{label:"選項3",value:"3"}]},render:(e,{vModel:a})=>({components:{BaseSelectMultiple:m},setup(){const t=a("modelValue");return{args:e,modelValue:t}},template:`
      <BaseSelectMultiple v-bind="args" v-model="modelValue" />
    `})},d={args:{}},c={render:(e,{vModel:a})=>({components:{BaseSelectMultiple:m},setup(){const t=a("modelValue");return{args:e,modelValue:t}},template:`
      <BaseSelectMultiple v-bind="args" v-model="modelValue" small />
      <BaseSelectMultiple v-bind="args" v-model="modelValue" />
      <BaseSelectMultiple v-bind="args" v-model="modelValue" large />
    `})},p={render:(e,{vModel:a})=>({components:{BaseField:K,BaseSelectMultiple:m},setup(){const t=a("modelValue");return{args:e,modelValue:t}},template:`
      <BaseField label="標題">
        <BaseSelectMultiple v-bind="args" v-model="modelValue" />
      </BaseField>
    `})};var _,M,h;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(F=(x=c.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var w,I,C;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(C=(I=p.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};const se=["Default","Size","WithWrap"];export{d as Default,c as Size,p as WithWrap,se as __namedExportsOrder,te as default};
//# sourceMappingURL=SelectMultiple.stories-1b121bb8.js.map
