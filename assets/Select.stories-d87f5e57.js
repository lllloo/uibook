import{_ as q}from"./BaseTooltip-c8814219.js";import{o as n,e as m,f as v,r as h,j as g,u as o,l as G,s as H,m as J,A as K,n as y,F as P,E as Q,z as U}from"./vue.esm-bundler-d8eedbf7.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as X}from"./BaseField-9d966213.js";import"./bundle-mjs-3a7afad5.js";const E={},Y={xmlns:"http://www.w3.org/2000/svg",height:"16",width:"10",viewBox:"0 0 320 512"},Z=v("path",{d:"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"},null,-1),ee=[Z];function ae(e,f){return n(),m("svg",Y,ee)}const se=W(E,[["render",ae]]);E.__docgenInfo={displayName:"IconAngleDown",description:"",tags:{},sourceFiles:["/home/runner/work/uibook/uibook/src/components/icons/IconAngleDown.vue"]};const le=["value","placeholder","disabled"],oe=["onMousedown"],L={__name:"BaseSelect",props:{options:{type:Array,default:()=>[]},modelValue:{type:[String,Number],default:""},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,{emit:f}){const _=e,b=h(),M=()=>{b.value.focus()},B=f,t=g({get:()=>_.modelValue,set:a=>{B("update:modelValue",a),B("change",a)}}),R=g(()=>{var a;return(a=_.options.find(s=>s.value===t.value))==null?void 0:a.label}),S=g(()=>t.value===""),p=h(!1);return(a,s)=>{const j=se,O=q;return n(),m("div",{class:y(["base-select",{selected:!o(S),"is-disabled":e.disabled}]),onClick:M},[v("input",{ref_key:"inputRef",ref:b,type:"text",value:o(S)?null:o(R),placeholder:e.placeholder,readonly:"",disabled:e.disabled,onFocus:s[0]||(s[0]=l=>p.value=!0),onBlur:s[1]||(s[1]=l=>p.value=!1)},null,40,le),G(j,{class:"down"}),o(p)?(n(),H(O,{key:0,full:""},{default:J(()=>[v("ul",null,[(n(!0),m(P,null,Q(e.options,(l,T)=>(n(),m("li",{key:T,class:y({checked:o(t)===l.value}),onMousedown:ne=>t.value=l.value},U(l.label),43,oe))),128))])]),_:1})):K("",!0)],2)}}},i=W(L,[["__scopeId","data-v-08917f3a"]]);L.__docgenInfo={exportName:"default",displayName:"BaseSelect",description:"",tags:{},props:[{name:"options",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"modelValue",type:{name:"string|number"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"change"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseSelect.vue"]};const me={component:i,decorators:[e=>({components:{story:e},template:`
        <div class="decorators" style="width: 100%;padding-bottom:120px;">
          <story />
        </div>
      `})],args:{placeholder:"請輸入",options:[{label:"選項1",value:"1"},{label:"選項2",value:"2"},{label:"選項3",value:"3"}]},render:e=>({components:{BaseSelect:i},setup:()=>({args:e}),template:`
      <BaseSelect v-bind="args" v-model="args.modelValue" />
    `})},r={args:{}},c={render:e=>({components:{BaseSelect:i},setup:()=>({args:e}),template:`
      <BaseSelect v-bind="args" v-model="args.modelValue" class="small" />
      <BaseSelect v-bind="args" v-model="args.modelValue" />
      <BaseSelect v-bind="args" v-model="args.modelValue" class="large" />
    `})},d={args:{disabled:!0}},u={render:e=>({components:{BaseField:X,BaseSelect:i},setup:()=>({args:e}),template:`
      <BaseField label="標題">
        <BaseSelect v-bind="args" v-model="args.modelValue" />
      </BaseField>
    `})};var V,w,k;r.parameters={...r.parameters,docs:{...(V=r.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {}
}`,...(k=(w=r.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var x,F,D;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => ({
    components: {
      BaseSelect
    },
    setup: () => ({
      args
    }),
    template: \`
      <BaseSelect v-bind="args" v-model="args.modelValue" class="small" />
      <BaseSelect v-bind="args" v-model="args.modelValue" />
      <BaseSelect v-bind="args" v-model="args.modelValue" class="large" />
    \`
  })
}`,...(D=(F=c.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var N,$,A;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(A=($=d.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var I,z,C;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => ({
    components: {
      BaseField,
      BaseSelect
    },
    setup: () => ({
      args
    }),
    template: \`
      <BaseField label="標題">
        <BaseSelect v-bind="args" v-model="args.modelValue" />
      </BaseField>
    \`
  })
}`,...(C=(z=u.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};const ie=["Default","Size","Disabled","WithWrap"];export{r as Default,d as Disabled,c as Size,u as WithWrap,ie as __namedExportsOrder,me as default};
