import{_ as a}from"./BaseCheckbox-cbeffd9e.js";import{_ as A}from"./BaseField-163b5cd2.js";import"./vue.esm-bundler-e5714eb6.js";import"./_plugin-vue_export-helper-c27b6911.js";const G={component:a,argTypes:{modelValue:{control:"boolean",name:"v-model"}},args:{label:"Checkout"},render:e=>({components:{BaseCheckbox:a},setup:()=>({args:e}),template:`
      <div>
        value: {{args.modelValue}}<br>
      </div>
      <br>
      <BaseCheckbox v-bind="args" v-model="args.modelValue" />
    `})},r={},o={args:{outline:!0}},s={argTypes:{modelValue:{control:"array",name:"v-model"}},args:{modelValue:[]},render:e=>({components:{BaseCheckbox:a},setup:()=>({args:e}),template:`
      <div>
        value: {{args.modelValue}}<br>
      </div>
      <br>
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="1" />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="2" class="primary" />
      <br>
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="3" outline />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="4" class="primary" outline />
    `})},l={argTypes:{modelValue:{control:"array",name:"v-model"}},args:{modelValue:[]},render:e=>({components:{BaseCheckbox:a},setup:()=>({args:e}),template:`
      <div>
        value: {{args.modelValue}}<br>
      </div>
      <br>
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="1" isButton />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="2" isButton />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="3" isButton />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="4" class="primary" isButton />
    `})},n={render:e=>({components:{BaseCheckbox:a},setup:()=>({args:e}),template:`
      <BaseCheckbox v-bind="args" v-model="args.modelValue" class="small" outline />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" outline />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" class="large" outline />
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
    `})};var t,v,c;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(c=(v=r.parameters)==null?void 0:v.docs)==null?void 0:c.source}}};var g,i,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="2" class="primary" />
      <br>
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="3" outline />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="4" class="primary" outline />
    \`
  })
}`,...(B=(V=s.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var h,x,C;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
      <div>
        value: {{args.modelValue}}<br>
      </div>
      <br>
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="1" isButton />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="2" isButton />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="3" isButton />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" value="4" class="primary" isButton />
    \`
  })
}`,...(C=(x=l.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var k,y,_;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => ({
    components: {
      BaseCheckbox
    },
    setup: () => ({
      args
    }),
    template: \`
      <BaseCheckbox v-bind="args" v-model="args.modelValue" class="small" outline />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" outline />
      <BaseCheckbox v-bind="args" v-model="args.modelValue" class="large" outline />
    \`
  })
}`,...(_=(y=n.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var T,S,F;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(F=(S=d.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var f,D,W;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(W=(D=m.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var O,z,R;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(R=(z=u.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};const H=["Default","Outline","Color","Button","Size","Readonly","Disabled","WithWrap"];export{l as Button,s as Color,r as Default,m as Disabled,o as Outline,d as Readonly,n as Size,u as WithWrap,H as __namedExportsOrder,G as default};
