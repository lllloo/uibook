import{d as n,m as c,u as i,b as m,p as u,q as p,t as f,k as b,n as k,f as y,o as v}from"./vue.esm-bundler-c49UoOgO.js";import{t as g,c as h,b as w}from"./bundle-mjs-CX0aN7IN.js";const x=n({__name:"BaseRadio",props:c({color:{},size:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const r=h(["h-4 w-4 shadow-md","appearance-none",...w],{variants:{color:{default:"border border-black/50 checked:bg-black text-black",primary:"border border-primary/50 checked:bg-primary text-primary"},size:{default:"",sm:"h-3.5 w-3.5",lg:"h-5 w-5"}},defaultVariants:{color:"default",size:"default"}}),a=e,t=i(),l=m(()=>g(r({color:a.color,size:a.size}),t.class)),s=u(e,"modelValue");return(z,o)=>p((v(),b("input",{"onUpdate:modelValue":o[0]||(o[0]=d=>s.value=d),class:k(y(l)),type:"radio"},null,2)),[[f,s.value]])}});x.__docgenInfo={exportName:"default",displayName:"BaseRadio",description:"",tags:{},props:[{name:"color",required:!1,type:{name:"TSIndexedAccessType"}},{name:"size",required:!1,type:{name:"TSIndexedAccessType"}}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseRadio.vue"]};export{x as _};
