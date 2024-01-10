import{_ as T}from"./BaseTooltip-aa4684e9.js";import{o as r,d as p,e as f,r as S,j as _,u as t,g as G,k as H,w as J,q as K,n as h,F as P,E as Q,t as U}from"./vue.esm-bundler-e891fed6.js";import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as X}from"./BaseField-c6755737.js";const W={},Y={xmlns:"http://www.w3.org/2000/svg",height:"16",width:"10",viewBox:"0 0 320 512"},Z=f("path",{d:"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"},null,-1),ee=[Z];function ae(e,a){return r(),p("svg",Y,ee)}const le=z(W,[["render",ae]]);W.__docgenInfo={displayName:"IconAngleDown",description:"",tags:{},sourceFiles:["/home/runner/work/uibook/uibook/src/components/icons/IconAngleDown.vue"]};const se=["value","placeholder","disabled"],ne=["onMousedown"],E={__name:"BaseSelect",props:{options:{type:Array,default:()=>[]},modelValue:{type:[String,Number],default:""},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,{emit:a}){const l=e,b=S(),L=()=>{b.value.focus()},V=a,d=_({get:()=>l.modelValue,set:s=>{V("update:modelValue",s),V("change",s)}}),R=_(()=>{var s;return(s=l.options.find(n=>n.value===d.value))==null?void 0:s.label}),B=_(()=>d.value===""),g=S(!1);return(s,n)=>{const j=le,q=T;return r(),p("div",{class:h(["base-select",{selected:!t(B),"is-disabled":e.disabled}]),onClick:L},[f("input",{ref_key:"inputRef",ref:b,type:"text",value:t(B)?null:t(R),placeholder:e.placeholder,readonly:"",disabled:e.disabled,onFocus:n[0]||(n[0]=o=>g.value=!0),onBlur:n[1]||(n[1]=o=>g.value=!1)},null,40,se),G(j,{class:"down"}),t(g)?(r(),H(q,{key:0,full:""},{default:J(()=>[f("ul",null,[(r(!0),p(P,null,Q(e.options,(o,O)=>(r(),p("li",{key:O,class:h({checked:t(d)===o.value}),onMousedown:oe=>d.value=o.value},U(o.label),43,ne))),128))])]),_:1})):K("",!0)],2)}}},v=z(E,[["__scopeId","data-v-08917f3a"]]);E.__docgenInfo={exportName:"default",displayName:"BaseSelect",description:"",tags:{},props:[{name:"options",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"modelValue",type:{name:"string|number"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"change"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseSelect.vue"]};const ue={component:v,decorators:[e=>({components:{story:e},template:`
        <div class="decorators" style="width: 100%;padding-bottom:120px;">
          <story />
        </div>
      `})],args:{placeholder:"請輸入",options:[{label:"選項1",value:"1"},{label:"選項2",value:"2"},{label:"選項3",value:"3"}]},render:(e,{vModel:a})=>({components:{BaseSelect:v},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseSelect v-bind="args" v-model="modelValue" />
    `})},c={args:{}},u={render:(e,{vModel:a})=>({components:{BaseSelect:v},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseSelect v-bind="args" v-model="modelValue" class="small" />
      <BaseSelect v-bind="args" v-model="modelValue" />
      <BaseSelect v-bind="args" v-model="modelValue" class="large" />
    `})},m={args:{disabled:!0}},i={render:(e,{vModel:a})=>({components:{BaseField:X,BaseSelect:v},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseField label="標題">
        <BaseSelect v-bind="args" v-model="modelValue" />
      </BaseField>
    `})};var y,w,k;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {}
}`,...(k=(w=c.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var x,F,D;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(D=(F=u.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var M,N,$;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...($=(N=m.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var I,A,C;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(C=(A=i.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};const me=["Default","Size","Disabled","WithWrap"];export{c as Default,m as Disabled,u as Size,i as WithWrap,me as __namedExportsOrder,ue as default};
