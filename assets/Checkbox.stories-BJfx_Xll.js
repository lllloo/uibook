import{_ as a}from"./BaseCheckbox-epO2qaL4.js";import{_ as A}from"./BaseField-tTlz-2cF.js";import"./vue.esm-bundler-fHwfCklp.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./bundle-mjs-BkWO730n.js";const G={argTypes:{modelValue:{control:"boolean",name:"v-model"}},args:{label:"Checkout"},component:a,render:e=>({components:{BaseCheckbox:a},setup:()=>({args:e}),template:`
      <div>
        value: {{args.modelValue}}<br>
      </div>
      <br>
      <BaseCheckbox v-bind="args" v-model="args.modelValue" />
    `})},r={},o={args:{outline:!0}},s={argTypes:{modelValue:{control:"array",name:"v-model"}},args:{class:"mr-2",modelValue:[]},render:e=>({components:{BaseCheckbox:a},setup:()=>({args:e}),template:`
      <div>
        value: {{args.modelValue}}<br>
      </div>
      <br>
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="1" />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="2" color="primary" />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="3" button />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="4" color="primary" button />
    `})},n={args:{button:!0}},l={argTypes:{modelValue:{control:"array",name:"v-model"}},args:{modelValue:[]},render:e=>({components:{BaseCheckbox:a},setup:()=>({args:e}),template:`
      <BaseCheckbox v-bind="args" v-model="args.modelValue" size="sm" />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" size="lg" />
    `})},d={argTypes:{modelValue:{control:"array",name:"v-model"}},args:{readonly:!0,modelValue:["1"]},render:e=>({components:{BaseCheckbox:a},setup:()=>({args:e}),template:`
      <div>
        value: {{args.modelValue}}<br>
      </div>
      <br>
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="1" />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="2" />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="3" outline />
    `})},m={argTypes:{modelValue:{control:"array",name:"v-model"}},args:{disabled:!0,modelValue:["1"]},render:e=>({components:{BaseCheckbox:a},setup:()=>({args:e}),template:`
      <div>
        value: {{args.modelValue}}<br>
      </div>
      <br>
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="1" />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="2" />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="3" outline />
    `})},u={argTypes:{modelValue:{control:"array",name:"v-model"}},args:{modelValue:[]},render:e=>({components:{BaseField:A,BaseCheckbox:a},setup:()=>({args:e}),template:`
      <div>
        value: {{args.modelValue}}<br>
      </div>
      <br>
      <BaseField label="標題">
        <BaseCheckbox v-bind="args" v-model="args.modelValue" value="1" style="margin-right: 10px;" />
        <BaseCheckbox v-bind="args" v-model="args.modelValue" value="2" />
      </BaseField>
    `})};var t,c,v;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(v=(c=r.parameters)==null?void 0:c.docs)==null?void 0:v.source}}};var g,i,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    outline: true
  }
}`,...(b=(i=o.parameters)==null?void 0:i.docs)==null?void 0:b.source}}};var p,V,B;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  argTypes: {
    modelValue: {
      control: 'array',
      name: 'v-model'
    }
  },
  args: {
    class: 'mr-2',
    modelValue: []
  },
  render: args => ({
    components: {
      BaseCheckbox
    },
    setup: () => ({
      args
    }),
    template: \`
      <div>
        value: {{args.modelValue}}<br>
      </div>
      <br>
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="1" />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="2" color="primary" />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="3" button />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="4" color="primary" button />
    \`
  })
}`,...(B=(V=s.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var h,x,C;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    button: true
  }
}`,...(C=(x=n.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var k,y,T;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  argTypes: {
    modelValue: {
      control: 'array',
      name: 'v-model'
    }
  },
  args: {
    modelValue: []
  },
  render: args => ({
    components: {
      BaseCheckbox
    },
    setup: () => ({
      args
    }),
    template: \`
      <BaseCheckbox v-bind="args" v-model="args.modelValue" size="sm" />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" size="lg" />
    \`
  })
}`,...(T=(y=l.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var S,_,f;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  argTypes: {
    modelValue: {
      control: 'array',
      name: 'v-model'
    }
  },
  args: {
    readonly: true,
    modelValue: ['1']
  },
  render: args => ({
    components: {
      BaseCheckbox
    },
    setup: () => ({
      args
    }),
    template: \`
      <div>
        value: {{args.modelValue}}<br>
      </div>
      <br>
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="1" />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="2" />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="3" outline />
    \`
  })
}`,...(f=(_=d.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var z,F,D;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  argTypes: {
    modelValue: {
      control: 'array',
      name: 'v-model'
    }
  },
  args: {
    disabled: true,
    modelValue: ['1']
  },
  render: args => ({
    components: {
      BaseCheckbox
    },
    setup: () => ({
      args
    }),
    template: \`
      <div>
        value: {{args.modelValue}}<br>
      </div>
      <br>
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="1" />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="2" />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="3" outline />
    \`
  })
}`,...(D=(F=m.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var W,O,R;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  argTypes: {
    modelValue: {
      control: 'array',
      name: 'v-model'
    }
  },
  args: {
    modelValue: []
  },
  render: args => ({
    components: {
      BaseField,
      BaseCheckbox
    },
    setup: () => ({
      args
    }),
    template: \`
      <div>
        value: {{args.modelValue}}<br>
      </div>
      <br>
      <BaseField label="標題">
        <BaseCheckbox v-bind="args" v-model="args.modelValue" value="1" style="margin-right: 10px;" />
        <BaseCheckbox v-bind="args" v-model="args.modelValue" value="2" />
      </BaseField>
    \`
  })
}`,...(R=(O=u.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const H=["Default","Outline","Color","Button","Size","Readonly","Disabled","WithWrap"];export{n as Button,s as Color,r as Default,m as Disabled,o as Outline,d as Readonly,l as Size,u as WithWrap,H as __namedExportsOrder,G as default};
