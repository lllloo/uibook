import{j as m,k as r,w as p,n as b,u as s,l as v,o,m as y,v as V,a as n,p as _,c as B,t as g,q as k,s as h,x}from"./vue.esm-bundler-c2a5f9d0.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";const R=e=>(h("data-v-3d6d8aa6"),e=e(),x(),e),w=["value","disabled"],I=R(()=>n("div",{class:"base-radio__radio"},null,-1)),C={key:0,class:"base-radio__label"},u={__name:"BaseRadio",props:{label:{type:String,default:""},modelValue:{type:String,default:""},value:{type:String,default:""},outline:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},isLabel:{type:Boolean,default:!0},isButton:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:d}){const i=e,f=d,a=m({get:()=>i.modelValue,set:l=>f("update:modelValue",l)});return(l,t)=>(o(),r(v(e.isLabel?"label":"div"),{class:b(["base-radio",{"base-radio--outline":e.outline,"is-button":e.isButton,"is-disabled":e.disabled,"is-checked":s(a)===e.value}])},{default:p(()=>[y(n("input",{"onUpdate:modelValue":t[0]||(t[0]=c=>_(a)?a.value=c:null),value:e.value,type:"radio",disabled:e.disabled||e.readonly},null,8,w),[[V,s(a)]]),I,e.label?(o(),B("div",C,g(e.label),1)):k("",!0)]),_:1},8,["class"]))}},L=S(u,[["__scopeId","data-v-3d6d8aa6"]]);u.__docgenInfo={exportName:"default",displayName:"BaseRadio",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"value",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"outline",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isLabel",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"isButton",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseRadio.vue"]};export{L as _};