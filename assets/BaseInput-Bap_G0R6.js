import{d as i,m as p,u as m,b as r,l as f,p as b,s as y,q as x,n as v,f as l,o as k}from"./vue.esm-bundler-CTq_6KXf.js";import{t as g,c as w,b as z}from"./bundle-mjs-Ciha5a76.js";const I=["autocomplete"],T=i({__name:"BaseInput",props:p({color:{},size:{},outline:{default:!0}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(s){const n=w(["w-full","px-4 py-2 rounded-md shadow-md",...z],{variants:{color:{default:"text-black  border-black/50 focus:border-black ring-black/70",primary:"text-primary  border-primary/50 focus:border-primary ring-primary/70"},outline:{true:"border py-[7px]",false:"border-none"},size:{default:"text-base",sm:"text-sm",lg:"text-lg"}},defaultVariants:{color:"default",size:"default"}}),e=s,a=m(),u=r(()=>g(n({color:e.color,size:e.size,outline:e.outline}),a.class)),o=f(s,"modelValue"),d=r(()=>a.type==="password");return(_,t)=>b((k(),x("input",{"onUpdate:modelValue":t[0]||(t[0]=c=>o.value=c),class:v(l(u)),autocomplete:l(d)?"off":"on"},null,10,I)),[[y,o.value]])}});T.__docgenInfo={exportName:"default",displayName:"BaseInput",description:"",tags:{},props:[{name:"color",required:!1,type:{name:"TSIndexedAccessType"}},{name:"size",required:!1,type:{name:"TSIndexedAccessType"}},{name:"outline",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseInput.vue"]};export{T as _};