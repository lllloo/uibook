import{g as x,D as h,k as V,d as A,y as N,n as T,u as w,o as B}from"./vue.esm-bundler-fHwfCklp.js";import{t as _}from"./bundle-mjs-BkWO730n.js";function y(t){var a,e,l="";if(typeof t=="string"||typeof t=="number")l+=t;else if(typeof t=="object")if(Array.isArray(t))for(a=0;a<t.length;a++)t[a]&&(e=y(t[a]))&&(l&&(l+=" "),l+=e);else for(a in t)t[a]&&(l&&(l+=" "),l+=a);return l}function z(){for(var t,a,e=0,l="";e<arguments.length;)(t=arguments[e++])&&(a=y(t))&&(l&&(l+=" "),l+=a);return l}const v=t=>typeof t=="boolean"?"".concat(t):t===0?"0":t,b=z,C=(t,a)=>e=>{var l;if((a==null?void 0:a.variants)==null)return b(t,e==null?void 0:e.class,e==null?void 0:e.className);const{variants:i,defaultVariants:s}=a,c=Object.keys(i).map(n=>{const r=e==null?void 0:e[n],u=s==null?void 0:s[n];if(r===null)return null;const o=v(r)||v(u);return i[n][o]}),m=e&&Object.entries(e).reduce((n,r)=>{let[u,o]=r;return o===void 0||(n[u]=o),n},{}),g=a==null||(l=a.compoundVariants)===null||l===void 0?void 0:l.reduce((n,r)=>{let{class:u,className:o,...k}=r;return Object.entries(k).every(p=>{let[f,d]=p;return Array.isArray(d)?d.includes({...s,...m}[f]):{...s,...m}[f]===d})?[...n,u,o]:n},[]);return b(t,c,g,e==null?void 0:e.class,e==null?void 0:e.className)},S=x({__name:"BaseButton",props:{color:{default:"black"},size:{default:"md"},outline:{default:!1},disabled:{default:!1}},setup(t){const a=C(["px-4 py-2 rounded-md shadow-md"],{variants:{color:{black:"bg-black text-white  hover:bg-black/70",primary:" bg-primary text-white hover:bg-primary/70"},size:{sm:"text-sm",md:"text-base",lg:"text-lg"},outline:{true:"ring-1 ring-inset"},disabled:{true:"opacity-50 cursor-not-allowed"}},compoundVariants:[{color:"black",outline:!0,class:"bg-white text-black  ring-black hover:bg-black/10"},{color:"primary",outline:!0,class:"bg-white text-primary  ring-primary hover:bg-primary/10"}],defaultVariants:{color:"black",outline:!1,size:"md"}}),e=t,l=h(),i=V(()=>_(a({color:e.color,size:e.size,outline:e.outline,disabled:e.disabled}),l.class));return(s,c)=>(B(),A("button",{type:"button",class:T(w(i))},[N(s.$slots,"default")],2))}});S.__docgenInfo={exportName:"default",displayName:"BaseButton",description:"",tags:{},props:[{name:"color",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'black'"}},{name:"size",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'md'"}},{name:"outline",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"false"}},{name:"disabled",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseButton.vue"]};export{S as _};
