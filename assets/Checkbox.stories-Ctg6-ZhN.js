import{_ as r}from"./BaseCheckbox-BkYJbZph.js";import"./BaseField-w0DDbMXK.js";import"./vue.esm-bundler-CTq_6KXf.js";import"./bundle-mjs-Ciha5a76.js";const k={argTypes:{modelValue:{control:"boolean",name:"v-model"}},args:{label:"Checkout"},component:r,render:e=>({components:{BaseCheckbox:r},setup:()=>({args:e}),template:`
      <div>
        value: {{args.modelValue}}<br>
      </div>
      <br>
      <label class="flex items-center">
        <BaseCheckbox v-bind="args" v-model="args.modelValue" />
        <span class="ml-2">
          標題
        </span>
      </label>
    `})},a={},l={argTypes:{modelValue:{control:"array",name:"v-model"}},args:{class:"mr-2",modelValue:[]},render:e=>({components:{BaseCheckbox:r},setup:()=>({args:e}),template:`
      <div>
        value: {{args.modelValue}}<br>
      </div>
      <br>
      <label class="flex items-center">
        <BaseCheckbox v-bind="args" v-model="args.modelValue" value="1" color="primary" />
        <span class="ml-2">
          1
        </span>
      </label>
      <label class="flex items-center">
        <BaseCheckbox v-bind="args" v-model="args.modelValue" value="2" color="primary" />
        <span class="ml-2">
          2
        </span>
      </label>
      <label class="flex items-center">
        <BaseCheckbox v-bind="args" v-model="args.modelValue" value="3" color="primary" />
        <span class="ml-2">
          3
        </span>
      </label>
      <label class="flex items-center">
        <BaseCheckbox v-bind="args" v-model="args.modelValue" value="4" color="primary" />
        <span class="ml-2">
          4
        </span>
      </label>
    `})},s={argTypes:{modelValue:{control:"array",name:"v-model"}},args:{modelValue:[]},render:e=>({components:{BaseCheckbox:r},setup:()=>({args:e}),template:`
      <label class="flex items-center">
        <BaseCheckbox v-bind="args" v-model="args.modelValue" value="sm" size="sm" />
        <span class="ml-2">
          sm
        </span>
      </label>
      <label class="flex items-center">
        <BaseCheckbox v-bind="args" v-model="args.modelValue" value="default" />
        <span class="ml-2">
          default
        </span>
      </label>
      <label class="flex items-center">
        <BaseCheckbox v-bind="args" v-model="args.modelValue" value="lg" size="lg" />
        <span class="ml-2">
          lg
        </span>
      </label>
    `})},n={args:{disabled:!0}};var o,m,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,t,p;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
      <label class="flex items-center">
        <BaseCheckbox v-bind="args" v-model="args.modelValue" value="1" color="primary" />
        <span class="ml-2">
          1
        </span>
      </label>
      <label class="flex items-center">
        <BaseCheckbox v-bind="args" v-model="args.modelValue" value="2" color="primary" />
        <span class="ml-2">
          2
        </span>
      </label>
      <label class="flex items-center">
        <BaseCheckbox v-bind="args" v-model="args.modelValue" value="3" color="primary" />
        <span class="ml-2">
          3
        </span>
      </label>
      <label class="flex items-center">
        <BaseCheckbox v-bind="args" v-model="args.modelValue" value="4" color="primary" />
        <span class="ml-2">
          4
        </span>
      </label>
    \`
  })
}`,...(p=(t=l.parameters)==null?void 0:t.docs)==null?void 0:p.source}}};var b,u,i;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
      <label class="flex items-center">
        <BaseCheckbox v-bind="args" v-model="args.modelValue" value="sm" size="sm" />
        <span class="ml-2">
          sm
        </span>
      </label>
      <label class="flex items-center">
        <BaseCheckbox v-bind="args" v-model="args.modelValue" value="default" />
        <span class="ml-2">
          default
        </span>
      </label>
      <label class="flex items-center">
        <BaseCheckbox v-bind="args" v-model="args.modelValue" value="lg" size="lg" />
        <span class="ml-2">
          lg
        </span>
      </label>
    \`
  })
}`,...(i=(u=s.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var g,v,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const B=["Default","Color","Size","Disabled"];export{l as Color,a as Default,n as Disabled,s as Size,B as __namedExportsOrder,k as default};
