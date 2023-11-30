import{_ as O}from"./BaseTooltip-d63abf6e.js";import{r as _,f as g,d as b,g as i,u as n,B as T,C as j,l as q,n as h,o as d,F as G,D as H,x as J,y as K,t as P}from"./vue.esm-bundler-54d62a26.js";import{_ as Q}from"./_plugin-vue_export-helper-c27b6911.js";import{B as U}from"./BaseField-86906fb6.js";const X=e=>(J("data-v-cac5cfc5"),e=e(),K(),e),Y=["value","placeholder","disabled"],Z=X(()=>i("svg",{xmlns:"http://www.w3.org/2000/svg",height:"16",width:"14",viewBox:"0 0 448 512",class:"down"},[i("path",{d:"M207 381.5L12.7 187.1c-9.4-9.4-9.4-24.6 0-33.9l22.7-22.7c9.4-9.4 24.5-9.4 33.9 0L224 284.5l154.7-154c9.4-9.3 24.5-9.3 33.9 0l22.7 22.7c9.4 9.4 9.4 24.6 0 33.9L241 381.5c-9.4 9.4-24.6 9.4-33.9 0z"})],-1)),ee=["onMousedown"],W={__name:"BaseSelect",props:{options:{type:Array,default:()=>[]},modelValue:{type:String,default:""},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,{emit:l}){const a=e,V=_(),$=()=>{V.value.focus()},B=l,r=g({get:()=>a.modelValue,set:s=>{B("update:modelValue",s),B("change",s)}}),A=g(()=>{var s;return(s=a.options.find(o=>o.value===r.value))==null?void 0:s.label}),S=g(()=>r.value===""),f=_(!1);return(s,o)=>{const E=O;return d(),b("div",{class:h(["base-select",{selected:!n(S),"is-disabled":e.disabled}]),onClick:$},[i("input",{ref_key:"inputRef",ref:V,type:"text",value:n(S)?null:n(A),placeholder:e.placeholder,readonly:"",disabled:e.disabled,onFocus:o[0]||(o[0]=t=>f.value=!0),onBlur:o[1]||(o[1]=t=>f.value=!1)},null,40,Y),Z,n(f)?(d(),T(E,{key:0,full:""},{default:j(()=>[i("ul",null,[(d(!0),b(G,null,H(e.options,(t,R)=>(d(),b("li",{key:R,class:h({checked:n(r)===t.value}),onMousedown:ae=>r.value=t.value},P(t.label),43,ee))),128))])]),_:1})):q("",!0)],2)}}},v=Q(W,[["__scopeId","data-v-cac5cfc5"]]);W.__docgenInfo={exportName:"default",displayName:"BaseSelect",description:"",tags:{},props:[{name:"options",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"change"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseSelect.vue"]};const ne={component:v,decorators:[e=>({components:{story:e},template:`
        <div class="decorators" style="width: 100%;padding-bottom:120px;">
          <story />
        </div>
      `})],args:{placeholder:"請輸入",options:[{label:"選項1",value:"1"},{label:"選項2",value:"2"},{label:"選項3",value:"3"}]},render:(e,{vModel:l})=>({components:{BaseSelect:v},setup(){const a=l("modelValue");return{args:e,modelValue:a}},template:`
      <BaseSelect v-bind="args" v-model="modelValue" />
    `})},c={args:{}},u={render:(e,{vModel:l})=>({components:{BaseSelect:v},setup(){const a=l("modelValue");return{args:e,modelValue:a}},template:`
      <BaseSelect v-bind="args" v-model="modelValue" class="small" />
      <BaseSelect v-bind="args" v-model="modelValue" />
      <BaseSelect v-bind="args" v-model="modelValue" class="large" />
    `})},m={args:{disabled:!0}},p={render:(e,{vModel:l})=>({components:{BaseField:U,BaseSelect:v},setup(){const a=l("modelValue");return{args:e,modelValue:a}},template:`
      <BaseField label="標題">
        <BaseSelect v-bind="args" v-model="modelValue" />
      </BaseField>
    `})};var y,w,x;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {}
}`,...(x=(w=c.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var k,F,M;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(M=(F=u.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var C,D,I;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(I=(D=m.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var L,z,N;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(N=(z=p.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};const re=["Default","Size","Disabled","WithWrap"];export{c as Default,m as Disabled,u as Size,p as WithWrap,re as __namedExportsOrder,ne as default};
