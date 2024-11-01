import{_ as o}from"./BaseSelect-DMnPnrU1.js";import"./BaseField-BNnHM36V.js";import"./vue.esm-bundler-Cx2lTPfH.js";import"./index-yolqV4Z8.js";const B={component:o,decorators:[e=>({components:{story:e},template:`
        <div class="decorators" style="width: 100%;padding-bottom:120px;">
          <story />
        </div>
      `})],args:{placeholder:"請輸入",options:[{label:"選項1",value:"1"},{label:"選項2",value:"2"},{label:"選項3",value:"3"}]},render:e=>({components:{BaseSelect:o},setup:()=>({args:e}),template:`
      <BaseSelect v-bind="args" v-model="args.modelValue" />
    `})},s={args:{}},a={render:e=>({components:{BaseSelect:o},setup:()=>({args:e}),template:`
      <BaseSelect v-bind="args" v-model="args.modelValue" size="sm" class="mb-2"  />
      <BaseSelect v-bind="args" v-model="args.modelValue" class="mb-2" />
      <BaseSelect v-bind="args" v-model="args.modelValue" size="lg" />
    `})},r={args:{disabled:!0}};var l,t,n;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {}
}`,...(n=(t=s.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var d,m,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => ({
    components: {
      BaseSelect
    },
    setup: () => ({
      args
    }),
    template: \`
      <BaseSelect v-bind="args" v-model="args.modelValue" size="sm" class="mb-2"  />
      <BaseSelect v-bind="args" v-model="args.modelValue" class="mb-2" />
      <BaseSelect v-bind="args" v-model="args.modelValue" size="lg" />
    \`
  })
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var i,p,g;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const V=["Default","Size","Disabled"];export{s as Default,r as Disabled,a as Size,V as __namedExportsOrder,B as default};
