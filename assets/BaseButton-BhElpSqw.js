import{d as s,b as l,n as o,u as a,e as r,o as n,f as u,g as i}from"./vue.esm-bundler-Cx2lTPfH.js";import{c as d,a as c,b as f}from"./index-yolqV4Z8.js";const p=s({__name:"BaseButton",props:{color:{default:"default"},size:{default:"default"},outline:{default:!1},tag:{default:"button"}},setup(m){const t=c(["inline-flex items-center justify-center","px-4 py-2 rounded-md shadow-md",...f],{variants:{color:{default:"bg-black text-white  hover:bg-black/70",primary:" bg-primary text-white hover:bg-primary/70"},size:{default:"text-base",sm:"text-sm",lg:"text-lg"},outline:{true:"border border-black py-[7px]"}},compoundVariants:[{color:"default",outline:!0,class:"bg-white text-black hover:bg-black/10"},{color:"primary",outline:!0,class:"bg-white text-primary hover:bg-primary/10"}]});return(e,b)=>(n(),l(r(e.tag),{class:o(a(d)(a(t)({color:e.color,size:e.size,outline:e.outline}),e.$attrs.class??"")),type:"button"},{default:u(()=>[i(e.$slots,"default")]),_:3},8,["class"]))}});p.__docgenInfo={exportName:"default",displayName:"BaseButton",description:"",tags:{},props:[{name:"color",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'default'"}},{name:"size",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'default'"}},{name:"outline",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"false"}},{name:"tag",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'button'"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseButton.vue"]};export{p as _};