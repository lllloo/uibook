import{o as i,c as E,a as v,k as V,y as J,z as K,n as P,m as g,A as Q,p as X,E as Y,q as Z,C as ee,t as ae,g as le}from"./vue.esm-bundler-2ef2e216.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";import{B as oe}from"./BaseField-083923c6.js";const q={},ne={xmlns:"http://www.w3.org/2000/svg",height:"16",width:"16",viewBox:"0 0 512 512"},se=v("path",{d:"M173.9 439.4l-166.4-166.4c-10-10-10-26.2 0-36.2l36.2-36.2c10-10 26.2-10 36.2 0L192 312.7 432.1 72.6c10-10 26.2-10 36.2 0l36.2 36.2c10 10 10 26.2 0 36.2l-294.4 294.4c-10 10-26.2 10-36.2 0z"},null,-1),re=[se];function de(e,a){return i(),E("svg",ne,re)}const te=O(q,[["render",de]]);q.__docgenInfo={displayName:"IconCheck",description:"",tags:{},sourceFiles:["/home/runner/work/uibook/uibook/src/components/icons/IconCheck.vue"]};const ue=["value","disabled"],me={class:"base-checkbox__checkbox"},ce={key:0,class:"base-checkbox__label"},R={__name:"BaseCheckbox",props:{label:{type:String,default:""},modelValue:{type:[Array,Boolean],default:!1},value:{type:String,default:""},outline:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},isLabel:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const l=e,U=a,n=V({get:()=>l.modelValue,set:b=>U("update:modelValue",b)}),j=V(()=>typeof n.value=="boolean"?n.value:n.value.includes(l.value));return(b,p)=>{const G=te;return i(),J(Q(e.isLabel?"label":"div"),{class:P(["base-checkbox",{"base-checkbox--outline":e.outline,"is-disabled":e.disabled,"is-checked":g(j)}])},{default:K(()=>[X(v("input",{"onUpdate:modelValue":p[0]||(p[0]=H=>Z(n)?n.value=H:null),value:e.value,type:"checkbox",disabled:e.disabled},null,8,ue),[[Y,g(n)]]),v("div",me,[ee(G)]),e.label?(i(),E("div",ce,ae(e.label),1)):le("",!0)]),_:1},8,["class"])}}},o=O(R,[["__scopeId","data-v-0f35150d"]]);R.__docgenInfo={exportName:"default",displayName:"BaseCheckbox",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",type:{name:"array|boolean"},defaultValue:{func:!1,value:"false"}},{name:"value",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"outline",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isLabel",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseCheckbox.vue"]};const pe={component:o,argTypes:{modelValue:{control:"boolean",name:"v-model"}},args:{label:"Checkout"},render:(e,{vModel:a})=>({components:{BaseCheckbox:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <div>
        value: {{modelValue}}<br>
      </div>
      <br>
      <BaseCheckbox v-bind="args" v-model="modelValue" />
    `})},s={},r={args:{outline:!0}},d={argTypes:{modelValue:{control:"array",name:"v-model"}},args:{modelValue:[]},render:(e,{vModel:a})=>({components:{BaseCheckbox:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <div>
        value: {{modelValue}}<br>
      </div>
      <br>
      <BaseCheckbox v-bind="args" v-model="modelValue" value="1" />
      <BaseCheckbox v-bind="args" v-model="modelValue" value="2" class="primary" />
      <br>
      <BaseCheckbox v-bind="args" v-model="modelValue" value="3" outline />
      <BaseCheckbox v-bind="args" v-model="modelValue" value="4" class="primary" outline />
    `})},t={argTypes:{modelValue:{control:"array",name:"v-model"}},args:{modelValue:[]},render:(e,{vModel:a})=>({components:{BaseCheckbox:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <div>
        value: {{modelValue}}<br>
      </div>
      <br>
      <BaseCheckbox v-bind="args" v-model="modelValue" value="1" class="fill" />
      <BaseCheckbox v-bind="args" v-model="modelValue" value="2" class="primary fill" />
      <br>
      <BaseCheckbox v-bind="args" v-model="modelValue" value="3" class="fill" outline />
      <BaseCheckbox v-bind="args" v-model="modelValue" value="4" class="primary fill" outline />
    `})},u={render:(e,{vModel:a})=>({components:{BaseCheckbox:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseCheckbox v-bind="args" v-model="modelValue" class="small" outline />
      <BaseCheckbox v-bind="args" v-model="modelValue" outline />
      <BaseCheckbox v-bind="args" v-model="modelValue" class="large" outline />
    `})},m={args:{disabled:!0},render:(e,{vModel:a})=>({components:{BaseCheckbox:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseCheckbox v-bind="args" v-model="modelValue" />
      <BaseCheckbox v-bind="args" v-model="modelValue" outline />
    `})},c={argTypes:{modelValue:{control:"array",name:"v-model"}},args:{modelValue:[]},render:(e,{vModel:a})=>({components:{BaseField:oe,BaseCheckbox:o},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <div>
        value: {{modelValue}}<br>
      </div>
      <br>
      <BaseField label="標題">
        <BaseCheckbox v-bind="args" v-model="modelValue" value="1" style="margin-right: 10px;" />
        <BaseCheckbox v-bind="args" v-model="modelValue" value="2" />
      </BaseField>
    `})};var h,k,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(x=(k=s.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var f,B,C;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    outline: true
  }
}`,...(C=(B=r.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var y,_,M;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(M=(_=d.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var S,w,F;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
      <BaseCheckbox v-bind="args" v-model="modelValue" value="1" class="fill" />
      <BaseCheckbox v-bind="args" v-model="modelValue" value="2" class="primary fill" />
      <br>
      <BaseCheckbox v-bind="args" v-model="modelValue" value="3" class="fill" outline />
      <BaseCheckbox v-bind="args" v-model="modelValue" value="4" class="primary fill" outline />
    \`
  })
}`,...(F=(w=t.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var D,T,I;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(I=(T=u.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var N,z,L;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    disabled: true
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
      <BaseCheckbox v-bind="args" v-model="modelValue" />
      <BaseCheckbox v-bind="args" v-model="modelValue" outline />
    \`
  })
}`,...(L=(z=m.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var W,$,A;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(A=($=c.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};const Ve=["Default","Outline","Color","Fill","Size","Disabled","WithWrap"];export{d as Color,s as Default,m as Disabled,t as Fill,r as Outline,u as Size,c as WithWrap,Ve as __namedExportsOrder,pe as default};
