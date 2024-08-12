import{_ as a}from"./BaseRadio-B7uifD3Q.js";import{_ as x}from"./BaseField-tTlz-2cF.js";import"./vue.esm-bundler-fHwfCklp.js";import"./bundle-mjs-BkWO730n.js";const j={args:{label:"Radio",modelValue:""},component:a,render:e=>({components:{BaseRadio:a},setup:()=>({args:e}),template:`
      <div>
        value: {{args.modelValue}}<br>
      </div>
      <br>
      <BaseRadio v-bind="args" v-model="args.modelValue" value="1" />
      <BaseRadio v-bind="args" v-model="args.modelValue" value="2" />
    `})},s={},r={args:{class:"mr-2"},render:e=>({components:{BaseRadio:a},setup:()=>({args:e}),template:`
      <div>
        value: {{args.modelValue}}<br>
      </div>
      <br>
      <BaseRadio v-bind="args" v-model="args.modelValue" value="1" />
      <BaseRadio v-bind="args" v-model="args.modelValue" value="2" color="primary" />
      <BaseRadio v-bind="args" v-model="args.modelValue" value="3" button />
      <BaseRadio v-bind="args" v-model="args.modelValue" value="4" color="primary" button />
    `})},o={render:e=>({components:{BaseRadio:a},setup:()=>({args:e}),template:`
      <BaseRadio v-bind="args" v-model="args.modelValue" value="1" size="sm" />
      <BaseRadio v-bind="args" v-model="args.modelValue" value="2"  />
      <BaseRadio v-bind="args" v-model="args.modelValue" value="3" size="lg" />
    `})},d={args:{class:"mr-2",button:!0}},l={args:{readonly:!0,modelValue:"1"},render:e=>({components:{BaseRadio:a},setup:()=>({args:e}),template:`
      <div>
        value: {{args.modelValue}}<br>
      </div>
      <br>
      <BaseRadio v-bind="args" v-model="args.modelValue" value="1" />
      <BaseRadio v-bind="args" v-model="args.modelValue" value="2" />
    `})},n={args:{disabled:!0,modelValue:"1"},render:e=>({components:{BaseRadio:a},setup:()=>({args:e}),template:`
      <div>
        value: {{args.modelValue}}<br>
      </div>
      <br>
      <BaseRadio v-bind="args" v-model="args.modelValue" value="1" />
      <BaseRadio v-bind="args" v-model="args.modelValue" value="2" />
    `})},m={render:e=>({components:{BaseField:x,BaseRadio:a},setup:()=>({args:e}),template:`
      <div>
        value: {{args.modelValue}}<br>
      </div>
      <br>
      <BaseField label="標題">
        <BaseRadio v-bind="args" v-model="args.modelValue" value="1" />
        <BaseRadio v-bind="args" v-model="args.modelValue" value="2" />
      </BaseField>
    `})};var i,u,t;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(t=(u=s.parameters)==null?void 0:u.docs)==null?void 0:t.source}}};var v,g,p;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
      <BaseRadio v-bind="args" v-model="args.modelValue" value="1" />
      <BaseRadio v-bind="args" v-model="args.modelValue" value="2" color="primary" />
      <BaseRadio v-bind="args" v-model="args.modelValue" value="3" button />
      <BaseRadio v-bind="args" v-model="args.modelValue" value="4" color="primary" button />
    \`
  })
}`,...(p=(g=r.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var c,b,B;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => ({
    components: {
      BaseRadio
    },
    setup: () => ({
      args
    }),
    template: \`
      <BaseRadio v-bind="args" v-model="args.modelValue" value="1" size="sm" />
      <BaseRadio v-bind="args" v-model="args.modelValue" value="2"  />
      <BaseRadio v-bind="args" v-model="args.modelValue" value="3" size="lg" />
    \`
  })
}`,...(B=(b=o.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var R,V,S;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    class: 'mr-2',
    button: true
  }
}`,...(S=(V=d.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var _,y,f;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    readonly: true,
    modelValue: '1'
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
      <BaseRadio v-bind="args" v-model="args.modelValue" value="1" />
      <BaseRadio v-bind="args" v-model="args.modelValue" value="2" />
    \`
  })
}`,...(f=(y=l.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var z,F,D;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    disabled: true,
    modelValue: '1'
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
      <BaseRadio v-bind="args" v-model="args.modelValue" value="1" />
      <BaseRadio v-bind="args" v-model="args.modelValue" value="2" />
    \`
  })
}`,...(D=(F=n.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var W,C,h;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => ({
    components: {
      BaseField,
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
      <BaseField label="標題">
        <BaseRadio v-bind="args" v-model="args.modelValue" value="1" />
        <BaseRadio v-bind="args" v-model="args.modelValue" value="2" />
      </BaseField>
    \`
  })
}`,...(h=(C=m.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};const k=["Default","Color","Size","Button","Readonly","Disabled","WithWrap"];export{d as Button,r as Color,s as Default,n as Disabled,l as Readonly,o as Size,m as WithWrap,k as __namedExportsOrder,j as default};
