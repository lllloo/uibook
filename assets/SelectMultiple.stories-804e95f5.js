import{_ as $}from"./BaseTooltip-d63abf6e.js";import{r as _,f,d as g,g as m,u as r,B as E,C as O,l as R,n as S,o as u,F as T,D as j,x as q,y as G,t as H}from"./vue.esm-bundler-54d62a26.js";import{_ as J}from"./_plugin-vue_export-helper-c27b6911.js";import{B as K}from"./BaseField-ea666822.js";const P=e=>(q("data-v-ebfe2c80"),e=e(),G(),e),Q=["value","placeholder","disabled"],U=P(()=>m("svg",{xmlns:"http://www.w3.org/2000/svg",height:"16",width:"14",viewBox:"0 0 448 512",class:"down"},[m("path",{d:"M207 381.5L12.7 187.1c-9.4-9.4-9.4-24.6 0-33.9l22.7-22.7c9.4-9.4 24.5-9.4 33.9 0L224 284.5l154.7-154c9.4-9.3 24.5-9.3 33.9 0l22.7 22.7c9.4 9.4 9.4 24.6 0 33.9L241 381.5c-9.4 9.4-24.6 9.4-33.9 0z"})],-1)),X=["onMousedown"],L={__name:"BaseSelectMultiple",props:{options:{type:Array,default:()=>[]},modelValue:{type:Array,default:()=>[]},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,{emit:t}){const a=e,V=_(),z=()=>{V.value.focus()},b=t,s=f({get:()=>a.modelValue,set:l=>{b("update:modelValue",l),b("change",l)}}),D=f(()=>a.options.filter(l=>s.value.includes(l.value)).map(l=>l.label)),B=f(()=>s.value.length===0?"":!1),N=l=>{const o=s.value.indexOf(l.value);if(o>=0){s.value.splice(o,1);return}s.value=[...s.value,l.value]},v=_(!1);return(l,o)=>{const W=$;return u(),g("div",{class:S(["base-select",{selected:!r(B),"is-disabled":e.disabled}]),onClick:z},[m("input",{ref_key:"inputRef",ref:V,type:"text",value:r(B)?null:r(D),placeholder:e.placeholder,readonly:"",disabled:e.disabled,onFocus:o[0]||(o[0]=n=>v.value=!0),onBlur:o[1]||(o[1]=n=>v.value=!1)},null,40,Q),U,r(v)?(u(),E(W,{key:0,full:""},{default:O(()=>[m("ul",null,[(u(!0),g(T,null,j(e.options,(n,A)=>(u(),g("li",{key:A,class:S({checked:r(s).includes(n.value)}),onMousedown:Y=>N(n)},H(n.label),43,X))),128))])]),_:1})):R("",!0)],2)}}},i=J(L,[["__scopeId","data-v-ebfe2c80"]]);L.__docgenInfo={exportName:"default",displayName:"BaseSelectMultiple",description:"",tags:{},props:[{name:"options",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"modelValue",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"change"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseSelectMultiple.vue"]};const te={component:i,decorators:[e=>({components:{story:e},template:`
        <div class="decorators" style="width: 100%;padding-bottom:120px;">
          <story />
        </div>
      `})],argTypes:{modelValue:{control:"array",name:"v-model"}},args:{modelValue:[],placeholder:"請輸入",options:[{label:"選項1",value:"1"},{label:"選項2",value:"2"},{label:"選項3",value:"3"}]},render:(e,{vModel:t})=>({components:{BaseSelectMultiple:i},setup(){const a=t("modelValue");return{args:e,modelValue:a}},template:`
      <BaseSelectMultiple v-bind="args" v-model="modelValue" />
    `})},d={args:{}},c={render:(e,{vModel:t})=>({components:{BaseSelectMultiple:i},setup(){const a=t("modelValue");return{args:e,modelValue:a}},template:`
      <BaseSelectMultiple v-bind="args" v-model="modelValue" small />
      <BaseSelectMultiple v-bind="args" v-model="modelValue" />
      <BaseSelectMultiple v-bind="args" v-model="modelValue" large />
    `})},p={render:(e,{vModel:t})=>({components:{BaseField:K,BaseSelectMultiple:i},setup(){const a=t("modelValue");return{args:e,modelValue:a}},template:`
      <BaseField label="標題">
        <BaseSelectMultiple v-bind="args" v-model="modelValue" />
      </BaseField>
    `})};var y,h,M;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {}
}`,...(M=(h=d.parameters)==null?void 0:h.docs)==null?void 0:M.source}}};var w,x,k;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(k=(x=c.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var F,C,I;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
