import{k as U,y as j,z as G,n as H,m as p,A as J,o as b,p as K,B as P,a as O,q as Q,c as T,t as X,g as Y,s as Z,x as $}from"./vue.esm-bundler-2ef2e216.js";import{_ as ee}from"./_plugin-vue_export-helper-c27b6911.js";import{B as ae}from"./BaseField-083923c6.js";const le=e=>(Z("data-v-d6dbb2c6"),e=e(),$(),e),oe=["value","disabled"],se=le(()=>O("div",{class:"base-radio__radio"},null,-1)),ne={key:0,class:"base-radio__label"},A={__name:"BaseRadio",props:{label:{type:String,default:""},modelValue:{type:String,default:""},value:{type:String,default:""},outline:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},isLabel:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const l=e,E=a,s=U({get:()=>l.modelValue,set:v=>E("update:modelValue",v)});return(v,c)=>(b(),j(J(e.isLabel?"label":"div"),{class:H(["base-radio",{"base-radio--outline":e.outline,"is-disabled":e.disabled,"is-checked":p(s)===e.value}])},{default:G(()=>[K(O("input",{"onUpdate:modelValue":c[0]||(c[0]=q=>Q(s)?s.value=q:null),value:e.value,type:"radio",disabled:e.disabled},null,8,oe),[[P,p(s)]]),se,e.label?(b(),T("div",ne,X(e.label),1)):Y("",!0)]),_:1},8,["class"]))}},o=ee(A,[["__scopeId","data-v-d6dbb2c6"]]);A.__docgenInfo={exportName:"default",displayName:"BaseRadio",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"value",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"outline",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isLabel",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseRadio.vue"]};const te={component:o,args:{label:"Radio",modelValue:""},render:(e,{vModel:a})=>({components:{BaseRadio:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <div>
        value: {{modelValue}}<br>
      </div>
      <br>
      <BaseRadio v-bind="args" v-model="modelValue" value="1" />
      <BaseRadio v-bind="args" v-model="modelValue" value="2" />
    `})},n={},d={args:{outline:!0}},r={render:(e,{vModel:a})=>({components:{BaseRadio:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <div>
        value: {{modelValue}}<br>
      </div>
      <br>
      <BaseRadio v-bind="args" v-model="modelValue" value="1" />
      <BaseRadio v-bind="args" v-model="modelValue" value="2" class="primary" />
      <br>
      <BaseRadio v-bind="args" v-model="modelValue" value="3" outline />
      <BaseRadio v-bind="args" v-model="modelValue" value="4" class="primary" outline />
    `})},u={render:(e,{vModel:a})=>({components:{BaseRadio:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <div>
        value: {{modelValue}}<br>
      </div>
      <br>
      <BaseRadio v-bind="args" v-model="modelValue" value="1" class="fill" />
      <BaseRadio v-bind="args" v-model="modelValue" value="2" class="primary fill" />
      <br>
      <BaseRadio v-bind="args" v-model="modelValue" value="3" class="fill" outline />
      <BaseRadio v-bind="args" v-model="modelValue" value="4" class="primary fill" outline />
    `})},t={render:(e,{vModel:a})=>({components:{BaseRadio:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <div>
        value: {{modelValue}}<br>
      </div>
      <br>
      <BaseRadio v-bind="args" v-model="modelValue" value="1" class="small" outline />
      <BaseRadio v-bind="args" v-model="modelValue" value="2" outline />
      <BaseRadio v-bind="args" v-model="modelValue" value="3" class="large" outline />
    `})},i={args:{disabled:!0},render:(e,{vModel:a})=>({components:{BaseRadio:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseRadio v-bind="args" v-model="modelValue" value="1" />
      <BaseRadio v-bind="args" v-model="modelValue" value="2" outline />
    `})},m={render:(e,{vModel:a})=>({components:{BaseField:ae,BaseRadio:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <div>
        value: {{modelValue}}<br>
      </div>
      <br>
      <BaseField label="標題">
        <BaseRadio v-bind="args" v-model="modelValue" value="1" />
        <BaseRadio v-bind="args" v-model="modelValue" value="2" />
      </BaseField>
    `})};var V,g,B;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:"{}",...(B=(g=n.parameters)==null?void 0:g.docs)==null?void 0:B.source}}};var f,R,y;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    outline: true
  }
}`,...(y=(R=d.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};var _,S,M;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(M=(S=r.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var h,k,F;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
      <BaseRadio v-bind="args" v-model="modelValue" value="1" class="fill" />
      <BaseRadio v-bind="args" v-model="modelValue" value="2" class="primary fill" />
      <br>
      <BaseRadio v-bind="args" v-model="modelValue" value="3" class="fill" outline />
      <BaseRadio v-bind="args" v-model="modelValue" value="4" class="primary fill" outline />
    \`
  })
}`,...(F=(k=u.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var x,C,D;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
      <BaseRadio v-bind="args" v-model="modelValue" value="1" class="small" outline />
      <BaseRadio v-bind="args" v-model="modelValue" value="2" outline />
      <BaseRadio v-bind="args" v-model="modelValue" value="3" class="large" outline />
    \`
  })
}`,...(D=(C=t.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var I,w,z;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    disabled: true
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
      <BaseRadio v-bind="args" v-model="modelValue" value="1" />
      <BaseRadio v-bind="args" v-model="modelValue" value="2" outline />
    \`
  })
}`,...(z=(w=i.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var N,W,L;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(L=(W=m.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};const ie=["Default","Outline","Color","Fill","Size","Disabled","WithWrap"];export{r as Color,n as Default,i as Disabled,u as Fill,d as Outline,t as Size,m as WithWrap,ie as __namedExportsOrder,te as default};
