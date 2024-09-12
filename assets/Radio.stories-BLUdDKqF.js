import{_ as r}from"./BaseRadio-U1pdi9CM.js";import"./BaseField-w0DDbMXK.js";import"./vue.esm-bundler-CTq_6KXf.js";import"./bundle-mjs-Ciha5a76.js";const y={args:{label:"Radio",modelValue:""},component:r,render:e=>({components:{BaseRadio:r},setup:()=>({args:e}),template:`
      <div>
        value: {{args.modelValue}}<br>
      </div>
      <br>
      <label class="flex items-center">
        <BaseRadio v-bind="args" v-model="args.modelValue" value="1" />
        <span class="ml-2">
          1
        </span>
      </label>
      <label class="flex items-center">
        <BaseRadio v-bind="args" v-model="args.modelValue" value="2" />
        <span class="ml-2">
          2
        </span>
      </label>
    `})},a={},s={args:{class:"mr-2"},render:e=>({components:{BaseRadio:r},setup:()=>({args:e}),template:`
      <div>
        value: {{args.modelValue}}<br>
      </div>
      <br>
      <label class="flex items-center">
        <BaseRadio v-bind="args" v-model="args.modelValue" value="1" color="primary" />
        <span class="ml-2">
          1
        </span>
      </label>
      <label class="flex items-center">
        <BaseRadio v-bind="args" v-model="args.modelValue" value="2" color="primary" />
        <span class="ml-2">
          2
        </span>
      </label>
      <label class="flex items-center">
        <BaseRadio v-bind="args" v-model="args.modelValue" value="3" color="primary" />
        <span class="ml-2">
          3
        </span>
      </label>
      <label class="flex items-center">
        <BaseRadio v-bind="args" v-model="args.modelValue" value="4" color="primary" />
        <span class="ml-2">
          4
        </span>
      </label>
    `})},l={render:e=>({components:{BaseRadio:r},setup:()=>({args:e}),template:`
      <label class="flex items-center">
        <BaseRadio v-bind="args" v-model="args.modelValue" value="sm" size="sm" />
        <span class="ml-2">
          sm
        </span>
      </label>
      <label class="flex items-center">
        <BaseRadio v-bind="args" v-model="args.modelValue" value="default" />
        <span class="ml-2">
          default
        </span>
      </label>
      <label class="flex items-center">
        <BaseRadio v-bind="args" v-model="args.modelValue" value="lg" size="lg" />
        <span class="ml-2">
          lg
        </span>
      </label>
    `})},n={args:{disabled:!0}};var o,m,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var c,i,t;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    class: 'mr-2'
  },
  render: args => ({
    components: {
      BaseRadio
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
        <BaseRadio v-bind="args" v-model="args.modelValue" value="1" color="primary" />
        <span class="ml-2">
          1
        </span>
      </label>
      <label class="flex items-center">
        <BaseRadio v-bind="args" v-model="args.modelValue" value="2" color="primary" />
        <span class="ml-2">
          2
        </span>
      </label>
      <label class="flex items-center">
        <BaseRadio v-bind="args" v-model="args.modelValue" value="3" color="primary" />
        <span class="ml-2">
          3
        </span>
      </label>
      <label class="flex items-center">
        <BaseRadio v-bind="args" v-model="args.modelValue" value="4" color="primary" />
        <span class="ml-2">
          4
        </span>
      </label>
    \`
  })
}`,...(t=(i=s.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};var p,u,b;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => ({
    components: {
      BaseRadio
    },
    setup: () => ({
      args
    }),
    template: \`
      <label class="flex items-center">
        <BaseRadio v-bind="args" v-model="args.modelValue" value="sm" size="sm" />
        <span class="ml-2">
          sm
        </span>
      </label>
      <label class="flex items-center">
        <BaseRadio v-bind="args" v-model="args.modelValue" value="default" />
        <span class="ml-2">
          default
        </span>
      </label>
      <label class="flex items-center">
        <BaseRadio v-bind="args" v-model="args.modelValue" value="lg" size="lg" />
        <span class="ml-2">
          lg
        </span>
      </label>
    \`
  })
}`,...(b=(u=l.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var v,g,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const z=["Default","Color","Size","Disabled"];export{s as Color,a as Default,n as Disabled,l as Size,z as __namedExportsOrder,y as default};
