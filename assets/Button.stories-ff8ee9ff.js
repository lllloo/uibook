import{c as m,r as i,n as d,o as p}from"./vue.esm-bundler-34f1bfe9.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";const u={__name:"BaseButton",props:{small:{type:Boolean,default:!1},large:{type:Boolean,default:!1}},emits:["onClick"],setup(e,{emit:c}){return(t,a)=>(p(),m("button",{class:d(["base-button",{"base-button--small":e.small,"base-button--large":e.large}]),onClick:a[0]||(a[0]=B=>t.$emit("onClick"))},[i(t.$slots,"default",{},void 0,!0)],2))}},s=f(u,[["__scopeId","data-v-3d3440e3"]]);u.__docgenInfo={exportName:"default",displayName:"BaseButton",description:"",tags:{},props:[{name:"small",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"large",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"onClick"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/form/BaseButton.vue"]};const k={title:"Base/Button",component:s,tags:["autodocs"],args:{},render:e=>({components:{BaseButton:s},setup(){return{args:e,onClick:()=>{console.log("onClick")}}},template:`
      <BaseButton v-bind="args" @onClick="onClick">
        Button
      </BaseButton>
    `})},o={args:{}};var n,l,r;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {}
}`,...(r=(l=o.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};const b=["Primary"];export{o as Primary,b as __namedExportsOrder,k as default};
//# sourceMappingURL=Button.stories-ff8ee9ff.js.map
