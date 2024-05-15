import{g as D,p as M,q as N,j as m,e as E,f as g,B as R,z as j,n as c,u as p,v as F,C as I,o as O}from"./vue.esm-bundler-d8eedbf7.js";import{t as f}from"./bundle-mjs-3a7afad5.js";const U=g("br",null,null,-1),G=["name","placeholder","disabled","readonly"],u=D({__name:"BaseAutoHeightTextarea",props:M({class:{default:""},inputClass:{default:""},color:{default:"black"},size:{default:"md"},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},placeholder:{default:"請輸入"},name:{default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const s=l,d=N(l,"modelValue"),b={base:{black:"text-black fill-black",primary:"text-primary fill-primary"},input:{black:"text-black ring-1 ring-inset ring-black/70 focus:ring-black",primary:"text-primary ring-1 ring-inset ring-primary/70 focus:ring-primary"}},q={sm:"text-sm",md:"text-base",lg:"text-lg"},S=m(()=>{const e="relative rounded-md shadow-md",a=b.base[s.color];return f(e,a,s.class)}),v=m(()=>{const e="w-full px-4 py-2 rounded-md outline-none break-words whitespace-pre-wrap font-sans",a=q[s.size];return f(e,a,s.inputClass)}),_=m(()=>{const e="absolute top-0 left-0 w-full h-full resize-none overflow-hidden",a=b.input[s.color],i=s.disabled?"opacity-50 cursor-not-allowed":"";return f(v.value,e,a,i,s.inputClass)});return(e,a)=>(O(),E("div",{class:c(p(S))},[g("pre",{class:c([p(v)])},[R(j(d.value),1),U],2),F(g("textarea",{"onUpdate:modelValue":a[0]||(a[0]=i=>d.value=i),class:c([p(_)]),name:e.name,placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly},null,10,G),[[I,d.value]])],2))}});u.__docgenInfo={exportName:"default",displayName:"BaseAutoHeightTextarea",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"inputClass",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"color",required:!1,type:{name:"union",elements:[{name:'"black"'},{name:'"primary"'}]},defaultValue:{func:!1,value:"'black'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"readonly",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'請輸入'"}},{name:"name",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseAutoHeightTextarea.vue"]};const L={args:{placeholder:"請輸入",modelValue:""},component:u,render:l=>({components:{BaseAutoHeightTextarea:u},setup:()=>({args:l}),template:`
      <BaseAutoHeightTextarea v-bind="args" v-model="args.modelValue" />
    `})},r={args:{}},t={args:{class:"mb-2"},render:l=>({components:{BaseAutoHeightTextarea:u},setup:()=>({args:l}),template:`
      <BaseAutoHeightTextarea v-bind="args" v-model="args.modelValue" size="sm" />
      <BaseAutoHeightTextarea v-bind="args" v-model="args.modelValue" />
      <BaseAutoHeightTextarea v-bind="args" v-model="args.modelValue" size="lg" />
    `})},o={args:{readonly:!0}},n={args:{disabled:!0}};var y,h,x;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {}
}`,...(x=(h=r.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var V,B,k;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    class: 'mb-2'
  },
  render: args => ({
    components: {
      BaseAutoHeightTextarea
    },
    setup: () => ({
      args
    }),
    template: \`
      <BaseAutoHeightTextarea v-bind="args" v-model="args.modelValue" size="sm" />
      <BaseAutoHeightTextarea v-bind="args" v-model="args.modelValue" />
      <BaseAutoHeightTextarea v-bind="args" v-model="args.modelValue" size="lg" />
    \`
  })
}`,...(k=(B=t.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var C,T,z;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    readonly: true
  }
}`,...(z=(T=o.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var A,H,w;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(w=(H=n.parameters)==null?void 0:H.docs)==null?void 0:w.source}}};const P=["Default","Size","Readonly","Disabled"];export{r as Default,n as Disabled,o as Readonly,t as Size,P as __namedExportsOrder,L as default};
