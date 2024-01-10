import{_ as o}from"./BaseRadio-b486a795.js";import{_ as k}from"./BaseField-c6755737.js";import"./vue.esm-bundler-e891fed6.js";import"./_plugin-vue_export-helper-c27b6911.js";const I={component:o,args:{label:"Radio",modelValue:""},render:(e,{vModel:a})=>({components:{BaseRadio:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <div>
        value: {{modelValue}}<br>
      </div>
      <br>
      <BaseRadio v-bind="args" v-model="modelValue" value="1" />
      <BaseRadio v-bind="args" v-model="modelValue" value="2" />
    `})},n={},d={args:{outline:!0}},s={render:(e,{vModel:a})=>({components:{BaseRadio:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <div>
        value: {{modelValue}}<br>
      </div>
      <br>
      <BaseRadio v-bind="args" v-model="modelValue" value="1" />
      <BaseRadio v-bind="args" v-model="modelValue" value="2" class="primary" />
      <br>
      <BaseRadio v-bind="args" v-model="modelValue" value="3" outline />
      <BaseRadio v-bind="args" v-model="modelValue" value="4" class="primary" outline />
    `})},r={render:(e,{vModel:a})=>({components:{BaseRadio:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <div>
        value: {{modelValue}}<br>
      </div>
      <br>
      <BaseRadio v-bind="args" v-model="modelValue" value="1" isButton />
      <BaseRadio v-bind="args" v-model="modelValue" value="2" isButton />
      <BaseRadio v-bind="args" v-model="modelValue" value="3" isButton />
      <BaseRadio v-bind="args" v-model="modelValue" value="4" class="primary" isButton />
    `})},u={render:(e,{vModel:a})=>({components:{BaseRadio:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseRadio v-bind="args" v-model="modelValue" value="1" class="small" outline />
      <BaseRadio v-bind="args" v-model="modelValue" value="2" outline />
      <BaseRadio v-bind="args" v-model="modelValue" value="3" class="large" outline />
    `})},m={args:{readonly:!0,modelValue:"1"},render:(e,{vModel:a})=>({components:{BaseRadio:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <div>
        value: {{modelValue}}<br>
      </div>
      <br>
      <BaseRadio v-bind="args" v-model="modelValue" value="1" />
      <BaseRadio v-bind="args" v-model="modelValue" value="2" />
      <BaseRadio v-bind="args" v-model="modelValue" value="3" outline />
    `})},i={args:{disabled:!0,modelValue:"1"},render:(e,{vModel:a})=>({components:{BaseRadio:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <div>
        value: {{modelValue}}<br>
      </div>
      <br>
      <BaseRadio v-bind="args" v-model="modelValue" value="1" />
      <BaseRadio v-bind="args" v-model="modelValue" value="2" />
      <BaseRadio v-bind="args" v-model="modelValue" value="3" outline />
    `})},t={render:(e,{vModel:a})=>({components:{BaseField:k,BaseRadio:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <div>
        value: {{modelValue}}<br>
      </div>
      <br>
      <BaseField label="標題">
        <BaseRadio v-bind="args" v-model="modelValue" value="1" />
        <BaseRadio v-bind="args" v-model="modelValue" value="2" />
      </BaseField>
    `})};var v,c,p;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var V,b,g;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    outline: true
  }
}`,...(g=(b=d.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var B,R,_;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: (args, {
    vModel
  }) => ({
    components: {
      BaseRadio
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
      <BaseRadio v-bind="args" v-model="modelValue" value="1" />
      <BaseRadio v-bind="args" v-model="modelValue" value="2" class="primary" />
      <br>
      <BaseRadio v-bind="args" v-model="modelValue" value="3" outline />
      <BaseRadio v-bind="args" v-model="modelValue" value="4" class="primary" outline />
    \`
  })
}`,...(_=(R=s.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var M,y,S;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: (args, {
    vModel
  }) => ({
    components: {
      BaseRadio
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
      <BaseRadio v-bind="args" v-model="modelValue" value="1" isButton />
      <BaseRadio v-bind="args" v-model="modelValue" value="2" isButton />
      <BaseRadio v-bind="args" v-model="modelValue" value="3" isButton />
      <BaseRadio v-bind="args" v-model="modelValue" value="4" class="primary" isButton />
    \`
  })
}`,...(S=(y=r.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var F,f,D;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: (args, {
    vModel
  }) => ({
    components: {
      BaseRadio
    },
    setup() {
      const modelValue = vModel('modelValue');
      return {
        args,
        modelValue
      };
    },
    template: \`
      <BaseRadio v-bind="args" v-model="modelValue" value="1" class="small" outline />
      <BaseRadio v-bind="args" v-model="modelValue" value="2" outline />
      <BaseRadio v-bind="args" v-model="modelValue" value="3" class="large" outline />
    \`
  })
}`,...(D=(f=u.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var W,C,O;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    readonly: true,
    modelValue: '1'
  },
  render: (args, {
    vModel
  }) => ({
    components: {
      BaseRadio
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
      <BaseRadio v-bind="args" v-model="modelValue" value="1" />
      <BaseRadio v-bind="args" v-model="modelValue" value="2" />
      <BaseRadio v-bind="args" v-model="modelValue" value="3" outline />
    \`
  })
}`,...(O=(C=m.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var h,x,z;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    disabled: true,
    modelValue: '1'
  },
  render: (args, {
    vModel
  }) => ({
    components: {
      BaseRadio
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
      <BaseRadio v-bind="args" v-model="modelValue" value="1" />
      <BaseRadio v-bind="args" v-model="modelValue" value="2" />
      <BaseRadio v-bind="args" v-model="modelValue" value="3" outline />
    \`
  })
}`,...(z=(x=i.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var A,E,j;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: (args, {
    vModel
  }) => ({
    components: {
      BaseField,
      BaseRadio
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
        <BaseRadio v-bind="args" v-model="modelValue" value="1" />
        <BaseRadio v-bind="args" v-model="modelValue" value="2" />
      </BaseField>
    \`
  })
}`,...(j=(E=t.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};const J=["Default","Outline","Color","Button","Size","Readonly","Disabled","WithWrap"];export{r as Button,s as Color,n as Default,i as Disabled,d as Outline,m as Readonly,u as Size,t as WithWrap,J as __namedExportsOrder,I as default};
