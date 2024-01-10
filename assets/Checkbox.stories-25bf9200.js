import{_ as o}from"./BaseCheckbox-d873cdfd.js";import{_ as E}from"./BaseField-c6755737.js";import"./vue.esm-bundler-e891fed6.js";import"./_plugin-vue_export-helper-c27b6911.js";const H={component:o,argTypes:{modelValue:{control:"boolean",name:"v-model"}},args:{label:"Checkout"},render:(e,{vModel:a})=>({components:{BaseCheckbox:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <div>
        value: {{modelValue}}<br>
      </div>
      <br>
      <BaseCheckbox v-bind="args" v-model="modelValue" />
    `})},n={},r={args:{outline:!0}},s={argTypes:{modelValue:{control:"array",name:"v-model"}},args:{modelValue:[]},render:(e,{vModel:a})=>({components:{BaseCheckbox:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <div>
        value: {{modelValue}}<br>
      </div>
      <br>
      <BaseCheckbox v-bind="args" v-model="modelValue" value="1" />
      <BaseCheckbox v-bind="args" v-model="modelValue" value="2" class="primary" />
      <br>
      <BaseCheckbox v-bind="args" v-model="modelValue" value="3" outline />
      <BaseCheckbox v-bind="args" v-model="modelValue" value="4" class="primary" outline />
    `})},d={argTypes:{modelValue:{control:"array",name:"v-model"}},args:{modelValue:[]},render:(e,{vModel:a})=>({components:{BaseCheckbox:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <div>
        value: {{modelValue}}<br>
      </div>
      <br>
      <BaseCheckbox v-bind="args" v-model="modelValue" value="1" isButton />
      <BaseCheckbox v-bind="args" v-model="modelValue" value="2" isButton />
      <BaseCheckbox v-bind="args" v-model="modelValue" value="3" isButton />
      <BaseCheckbox v-bind="args" v-model="modelValue" value="4" class="primary" isButton />
    `})},m={render:(e,{vModel:a})=>({components:{BaseCheckbox:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseCheckbox v-bind="args" v-model="modelValue" class="small" outline />
      <BaseCheckbox v-bind="args" v-model="modelValue" outline />
      <BaseCheckbox v-bind="args" v-model="modelValue" class="large" outline />
    `})},u={argTypes:{modelValue:{control:"array",name:"v-model"}},args:{readonly:!0,modelValue:["1"]},render:(e,{vModel:a})=>({components:{BaseCheckbox:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <div>
        value: {{modelValue}}<br>
      </div>
      <br>
      <BaseCheckbox v-bind="args" v-model="modelValue" value="1" />
      <BaseCheckbox v-bind="args" v-model="modelValue" value="2" />
      <BaseCheckbox v-bind="args" v-model="modelValue" value="3" outline />
    `})},t={argTypes:{modelValue:{control:"array",name:"v-model"}},args:{disabled:!0,modelValue:["1"]},render:(e,{vModel:a})=>({components:{BaseCheckbox:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <div>
        value: {{modelValue}}<br>
      </div>
      <br>
      <BaseCheckbox v-bind="args" v-model="modelValue" value="1" />
      <BaseCheckbox v-bind="args" v-model="modelValue" value="2" />
      <BaseCheckbox v-bind="args" v-model="modelValue" value="3" outline />
    `})},v={argTypes:{modelValue:{control:"array",name:"v-model"}},args:{modelValue:[]},render:(e,{vModel:a})=>({components:{BaseField:E,BaseCheckbox:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <div>
        value: {{modelValue}}<br>
      </div>
      <br>
      <BaseField label="標題">
        <BaseCheckbox v-bind="args" v-model="modelValue" value="1" style="margin-right: 10px;" />
        <BaseCheckbox v-bind="args" v-model="modelValue" value="2" />
      </BaseField>
    `})};var c,i,b;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(b=(i=n.parameters)==null?void 0:i.docs)==null?void 0:b.source}}};var p,V,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    outline: true
  }
}`,...(g=(V=r.parameters)==null?void 0:V.docs)==null?void 0:g.source}}};var B,h,x;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  argTypes: {
    modelValue: {
      control: 'array',
      name: 'v-model'
    }
  },
  args: {
    modelValue: []
  },
  render: (args, {
    vModel
  }) => ({
    components: {
      BaseCheckbox
    },
    setup() {
      const modelValue = vModel('modelValue');
      return {
        args,
        modelValue
      };
    },
    template: \`
      <div>
        value: {{modelValue}}<br>
      </div>
      <br>
      <BaseCheckbox v-bind="args" v-model="modelValue" value="1" />
      <BaseCheckbox v-bind="args" v-model="modelValue" value="2" class="primary" />
      <br>
      <BaseCheckbox v-bind="args" v-model="modelValue" value="3" outline />
      <BaseCheckbox v-bind="args" v-model="modelValue" value="4" class="primary" outline />
    \`
  })
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var C,k,y;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  argTypes: {
    modelValue: {
      control: 'array',
      name: 'v-model'
    }
  },
  args: {
    modelValue: []
  },
  render: (args, {
    vModel
  }) => ({
    components: {
      BaseCheckbox
    },
    setup() {
      const modelValue = vModel('modelValue');
      return {
        args,
        modelValue
      };
    },
    template: \`
      <div>
        value: {{modelValue}}<br>
      </div>
      <br>
      <BaseCheckbox v-bind="args" v-model="modelValue" value="1" isButton />
      <BaseCheckbox v-bind="args" v-model="modelValue" value="2" isButton />
      <BaseCheckbox v-bind="args" v-model="modelValue" value="3" isButton />
      <BaseCheckbox v-bind="args" v-model="modelValue" value="4" class="primary" isButton />
    \`
  })
}`,...(y=(k=d.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var _,M,T;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: (args, {
    vModel
  }) => ({
    components: {
      BaseCheckbox
    },
    setup() {
      const modelValue = vModel('modelValue');
      return {
        args,
        modelValue
      };
    },
    template: \`
      <BaseCheckbox v-bind="args" v-model="modelValue" class="small" outline />
      <BaseCheckbox v-bind="args" v-model="modelValue" outline />
      <BaseCheckbox v-bind="args" v-model="modelValue" class="large" outline />
    \`
  })
}`,...(T=(M=m.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var S,F,f;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
  render: (args, {
    vModel
  }) => ({
    components: {
      BaseCheckbox
    },
    setup() {
      const modelValue = vModel('modelValue');
      return {
        args,
        modelValue
      };
    },
    template: \`
      <div>
        value: {{modelValue}}<br>
      </div>
      <br>
      <BaseCheckbox v-bind="args" v-model="modelValue" value="1" />
      <BaseCheckbox v-bind="args" v-model="modelValue" value="2" />
      <BaseCheckbox v-bind="args" v-model="modelValue" value="3" outline />
    \`
  })
}`,...(f=(F=u.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};var D,W,O;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
  render: (args, {
    vModel
  }) => ({
    components: {
      BaseCheckbox
    },
    setup() {
      const modelValue = vModel('modelValue');
      return {
        args,
        modelValue
      };
    },
    template: \`
      <div>
        value: {{modelValue}}<br>
      </div>
      <br>
      <BaseCheckbox v-bind="args" v-model="modelValue" value="1" />
      <BaseCheckbox v-bind="args" v-model="modelValue" value="2" />
      <BaseCheckbox v-bind="args" v-model="modelValue" value="3" outline />
    \`
  })
}`,...(O=(W=t.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var z,R,A;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  argTypes: {
    modelValue: {
      control: 'array',
      name: 'v-model'
    }
  },
  args: {
    modelValue: []
  },
  render: (args, {
    vModel
  }) => ({
    components: {
      BaseField,
      BaseCheckbox
    },
    setup() {
      const modelValue = vModel('modelValue');
      return {
        args,
        modelValue
      };
    },
    template: \`
      <div>
        value: {{modelValue}}<br>
      </div>
      <br>
      <BaseField label="標題">
        <BaseCheckbox v-bind="args" v-model="modelValue" value="1" style="margin-right: 10px;" />
        <BaseCheckbox v-bind="args" v-model="modelValue" value="2" />
      </BaseField>
    \`
  })
}`,...(A=(R=v.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};const I=["Default","Outline","Color","Button","Size","Readonly","Disabled","WithWrap"];export{d as Button,s as Color,n as Default,t as Disabled,r as Outline,u as Readonly,m as Size,v as WithWrap,I as __namedExportsOrder,H as default};
