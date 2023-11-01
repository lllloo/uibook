import{d as b,c as y,r as d,w as B,j as I,f as _,e as h,i as S,n as x,o as D}from"./vue.esm-bundler-3c0112f6.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";const w=["type","placeholder"],v={__name:"BaseInput",props:{modelValue:{type:String,default:""},type:{type:String,default:"text"},label:{type:String,default:""},placeholder:{type:String,default:""},small:{type:Boolean,default:!1},large:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:a}){const l=e,o=b({get:()=>l.modelValue,set:t=>a("update:modelValue",t)});return(t,r)=>(D(),y("div",{class:x({"base-input":!0,"base-input--small":e.small,"base-input--large":e.large})},[d(t.$slots,"start-icon",{},void 0,!0),B(h("input",{"onUpdate:modelValue":r[0]||(r[0]=V=>S(o)?o.value=V:null),type:e.type,placeholder:e.placeholder},null,8,w),[[I,_(o)]]),d(t.$slots,"icon",{},void 0,!0)],2))}},u=k(v,[["__scopeId","data-v-663a89eb"]]);v.__docgenInfo={exportName:"default",displayName:"BaseInput",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"'text'"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"small",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"large",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],slots:[{name:"start-icon"},{name:"icon"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseInput.vue"]};const E={title:"Base/Input",component:u,tags:["autodocs"],args:{label:"標題",placeholder:"請輸入",modelValue:""},render:(e,{vModel:a})=>({components:{BaseInput:u},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseInput v-bind="args" v-model="modelValue" />
    `})},n={args:{}},s={render:(e,{vModel:a})=>({components:{BaseInput:u},setup(){const l=a("modelValue");return{args:e,modelValue:l}},template:`
      <BaseInput v-bind="args" v-model="modelValue" small /> 
      <br>
      <BaseInput v-bind="args" v-model="modelValue" />
      <br>
      <BaseInput v-bind="args" v-model="modelValue" large />
    `})};var m,p,c;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {}
}`,...(c=(p=n.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var i,f,g;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args, {
    vModel
  }) => ({
    components: {
      BaseInput
    },
    setup() {
      const modelValue = vModel('modelValue');
      return {
        args,
        modelValue
      };
    },
    template: \`
      <BaseInput v-bind="args" v-model="modelValue" small /> 
      <br>
      <BaseInput v-bind="args" v-model="modelValue" />
      <br>
      <BaseInput v-bind="args" v-model="modelValue" large />
    \`
  })
}`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const $=["Default","Default2"];export{n as Default,s as Default2,$ as __namedExportsOrder,E as default};
//# sourceMappingURL=Input.stories-3dcb8514.js.map
