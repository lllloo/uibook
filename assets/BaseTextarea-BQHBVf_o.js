import{u as v,S as h,T as w,x as i,w as m,q as b,y as T,z as k,J as z,d as _,m as S,j as B,k as V,s as M,l as A,n as C,o as H}from"./vue.esm-bundler-Cx2lTPfH.js";import{c as I,a as O,b as R}from"./index-yolqV4Z8.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";function W(e){return h()?(w(e),!0):!1}function y(e){return typeof e=="function"?e():v(e)}const $=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;function x(e){var r;const t=y(e);return(r=t==null?void 0:t.$el)!=null?r:t}const D=$?window:void 0;function P(){const e=i(!1),r=z();return r&&k(()=>{e.value=!0},r),e}function E(e){const r=P();return b(()=>(r.value,!!e()))}function G(e,r,t={}){const{window:l=D,...o}=t;let a;const u=E(()=>l&&"ResizeObserver"in l),s=()=>{a&&(a.disconnect(),a=void 0)},n=b(()=>{const c=y(e);return Array.isArray(c)?c.map(p=>x(p)):[x(c)]}),f=m(n,c=>{if(s(),u.value&&l){a=new ResizeObserver(r);for(const p of c)p&&a.observe(p,o)}},{immediate:!0,flush:"post"}),d=()=>{s(),f()};return W(d),{isSupported:u,stop:d}}function N(e){var r;const t=i(e==null?void 0:e.element),l=i(e==null?void 0:e.input),o=(r=e==null?void 0:e.styleProp)!=null?r:"height",a=i(1),u=i(0);function s(){var n;if(!t.value)return;let f="";t.value.style[o]="1px",a.value=(n=t.value)==null?void 0:n.scrollHeight;const d=y(e==null?void 0:e.styleTarget);d?d.style[o]=`${a.value}px`:f=`${a.value}px`,t.value.style[o]=f}return m([l,t],()=>T(s),{immediate:!0}),m(a,()=>{var n;return(n=e==null?void 0:e.onResize)==null?void 0:n.call(e)}),G(t,([{contentRect:n}])=>{u.value!==n.width&&(u.value=n.width,s())}),e!=null&&e.watch&&m(e.watch,s,{immediate:!0,deep:!0}),{textarea:t,input:l,triggerResize:s}}const g=_({__name:"BaseTextarea",props:S({color:{default:"default"},size:{default:"default"},outline:{default:!0},autoHeight:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const r=O(["w-full","px-4 py-2 rounded-md shadow-md",...R],{variants:{color:{default:"text-black  border-black/50 focus:border-black ring-black/70",primary:"text-primary  border-primary/50 focus:border-primary ring-primary/70"},outline:{true:"border py-[7px]",false:"border-none"},size:{default:"text-base",sm:"text-sm",lg:"text-lg"}}}),t=e,l=B(e,"modelValue"),o=i();return t.autoHeight&&N({input:l,element:o,styleProp:"minHeight"}),(a,u)=>V((H(),A("textarea",{ref_key:"textareaRef",ref:o,"onUpdate:modelValue":u[0]||(u[0]=s=>l.value=s),class:C(v(I)(v(r)({color:a.color,size:a.size,outline:a.outline}),a.$attrs.class??"")),rows:"2"},null,2)),[[M,l.value]])}}),U=q(g,[["__scopeId","data-v-f366d552"]]);g.__docgenInfo={exportName:"default",displayName:"BaseTextarea",description:"",tags:{},props:[{name:"color",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'default'"}},{name:"size",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'default'"}},{name:"outline",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"true"}},{name:"autoHeight",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseTextarea.vue"]};export{U as B};