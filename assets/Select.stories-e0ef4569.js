import{_ as T}from"./BaseTooltip-28f9463a.js";import{o,e as m,f as v,r as h,j as g,u as n,l as q,p as H,m as J,y as K,n as y,F as P,G as Q,x as U}from"./vue.esm-bundler-e5714eb6.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as X}from"./BaseField-163b5cd2.js";const L={},Y={xmlns:"http://www.w3.org/2000/svg",height:"16",width:"10",viewBox:"0 0 320 512"},Z=v("path",{d:"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"},null,-1),ee=[Z];function ae(e,_){return o(),m("svg",Y,ee)}const se=W(L,[["render",ae]]);L.__docgenInfo={displayName:"IconAngleDown",description:"",tags:{},sourceFiles:["/home/runner/work/uibook/uibook/src/components/icons/IconAngleDown.vue"]};const le=["value","placeholder","disabled"],ne=["onMousedown"],M={__name:"BaseSelect",props:{options:{type:Array,default:()=>[]},modelValue:{type:[String,Number],default:""},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,{emit:_}){const f=e,b=h(),E=()=>{b.value.focus()},B=_,t=g({get:()=>f.modelValue,set:a=>{B("update:modelValue",a),B("change",a)}}),R=g(()=>{var a;return(a=f.options.find(s=>s.value===t.value))==null?void 0:a.label}),S=g(()=>t.value===""),p=h(!1);return(a,s)=>{const j=se,G=T;return o(),m("div",{class:y(["base-select",{selected:!n(S),"is-disabled":e.disabled}]),onClick:E},[v("input",{ref_key:"inputRef",ref:b,type:"text",value:n(S)?null:n(R),placeholder:e.placeholder,readonly:"",disabled:e.disabled,onFocus:s[0]||(s[0]=l=>p.value=!0),onBlur:s[1]||(s[1]=l=>p.value=!1)},null,40,le),q(j,{class:"down"}),n(p)?(o(),H(G,{key:0,full:""},{default:J(()=>[v("ul",null,[(o(!0),m(P,null,Q(e.options,(l,O)=>(o(),m("li",{key:O,class:y({checked:n(t)===l.value}),onMousedown:oe=>t.value=l.value},U(l.label),43,ne))),128))])]),_:1})):K("",!0)],2)}}},i=W(M,[["__scopeId","data-v-08917f3a"]]);M.__docgenInfo={exportName:"default",displayName:"BaseSelect",description:"",tags:{},props:[{name:"options",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"modelValue",type:{name:"string|number"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"change"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseSelect.vue"]};const ue={component:i,decorators:[e=>({components:{story:e},template:`
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
}`,...(D=(F=c.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var N,$,I;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(I=($=d.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};var A,C,z;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(z=(C=u.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};const me=["Default","Size","Disabled","WithWrap"];export{r as Default,d as Disabled,c as Size,u as WithWrap,me as __namedExportsOrder,ue as default};
