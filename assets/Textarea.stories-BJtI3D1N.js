import{f as U,S as J,T as Q,y as i,w as T,b as S,z as X,A as Y,K as Z,d as ee,p as ae,u as re,q as se,s as te,t as oe,l as ne,n as le,o as ue}from"./vue.esm-bundler-CAdwILBD.js";import{t as ce,c as ie,b as de}from"./bundle-mjs-Ciha5a76.js";import{_ as me}from"./_plugin-vue_export-helper-DlAUqK2U.js";function pe(e){return J()?(Q(e),!0):!1}function z(e){return typeof e=="function"?e():U(e)}const fe=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;function _(e){var r;const a=z(e);return(r=a==null?void 0:a.$el)!=null?r:a}const ge=fe?window:void 0;function ve(){const e=i(!1),r=Z();return r&&Y(()=>{e.value=!0},r),e}function be(e){const r=ve();return S(()=>(r.value,!!e()))}function xe(e,r,a={}){const{window:o=ge,...u}=a;let s;const n=be(()=>o&&"ResizeObserver"in o),l=()=>{s&&(s.disconnect(),s=void 0)},t=S(()=>{const m=z(e);return Array.isArray(m)?m.map(p=>_(p)):[_(m)]}),c=T(t,m=>{if(l(),n.value&&o){s=new ResizeObserver(r);for(const p of m)p&&s.observe(p,u)}},{immediate:!0,flush:"post"}),d=()=>{l(),c()};return pe(d),{isSupported:n,stop:d}}function ye(e){var r;const a=i(e==null?void 0:e.element),o=i(e==null?void 0:e.input),u=(r=e==null?void 0:e.styleProp)!=null?r:"height",s=i(1),n=i(0);function l(){var t;if(!a.value)return;let c="";a.value.style[u]="1px",s.value=(t=a.value)==null?void 0:t.scrollHeight;const d=z(e==null?void 0:e.styleTarget);d?d.style[u]=`${s.value}px`:c=`${s.value}px`,a.value.style[u]=c}return T([o,a],()=>X(l),{immediate:!0}),T(s,()=>{var t;return(t=e==null?void 0:e.onResize)==null?void 0:t.call(e)}),xe(a,([{contentRect:t}])=>{n.value!==t.width&&(n.value=t.width,l())}),e!=null&&e.watch&&T(e.watch,l,{immediate:!0,deep:!0}),{textarea:a,input:o,triggerResize:l}}const j=ee({__name:"BaseTextarea",props:ae({color:{},size:{},outline:{default:!0},autoHeight:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const r=ie(["w-full","px-4 py-2 rounded-md shadow-md",...de],{variants:{color:{default:"text-black  border-black/50 focus:border-black ring-black/70",primary:"text-primary  border-primary/50 focus:border-primary ring-primary/70"},outline:{true:"border py-[7px]",false:"border-none"},size:{default:"text-base",sm:"text-sm",lg:"text-lg"}},defaultVariants:{color:"default",size:"default"}}),a=e,o=re(),u=S(()=>ce(r({color:a.color,size:a.size,outline:a.outline}),o.class)),s=se(e,"modelValue"),n=i();return a.autoHeight&&ye({input:s,element:n,styleProp:"minHeight"}),(l,t)=>te((ue(),ne("textarea",{ref_key:"textareaRef",ref:n,"onUpdate:modelValue":t[0]||(t[0]=c=>s.value=c),class:le(U(u)),rows:"2"},null,2)),[[oe,s.value]])}}),w=me(j,[["__scopeId","data-v-77561ffd"]]);j.__docgenInfo={exportName:"default",displayName:"BaseTextarea",description:"",tags:{},props:[{name:"color",required:!1,type:{name:"TSIndexedAccessType"}},{name:"size",required:!1,type:{name:"TSIndexedAccessType"}},{name:"outline",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"true"}},{name:"autoHeight",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/uibook/uibook/src/components/base/BaseTextarea.vue"]};const Se={args:{placeholder:"請輸入",modelValue:""},component:w,render:e=>({components:{BaseTextarea:w},setup:()=>({args:e}),template:`
      <BaseTextarea v-bind="args" v-model="args.modelValue" />
    `})},f={args:{}},g={args:{color:"primary"}},v={render:e=>({components:{BaseTextarea:w},setup:()=>({args:e}),template:`
      <BaseTextarea v-bind="args" v-model="args.modelValue" size="sm" class="mb-2" /> 
      <BaseTextarea v-bind="args" v-model="args.modelValue" class="mb-2" />
      <BaseTextarea v-bind="args" v-model="args.modelValue" size="lg" class="mb-2" />
    `})},b={args:{outline:!1}},x={args:{readonly:!0}},y={args:{disabled:!0}},h={args:{autoHeight:!0}};var B,V,k;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {}
}`,...(k=(V=f.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var A,H,M;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    color: 'primary'
  }
}`,...(M=(H=g.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var O,C,R;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => ({
    components: {
      BaseTextarea
    },
    setup: () => ({
      args
    }),
    template: \`
      <BaseTextarea v-bind="args" v-model="args.modelValue" size="sm" class="mb-2" /> 
      <BaseTextarea v-bind="args" v-model="args.modelValue" class="mb-2" />
      <BaseTextarea v-bind="args" v-model="args.modelValue" size="lg" class="mb-2" />
    \`
  })
}`,...(R=(C=v.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var D,I,q;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    outline: false
  }
}`,...(q=(I=b.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var W,E,N;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    readonly: true
  }
}`,...(N=(E=x.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var P,$,G;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(G=($=y.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var L,F,K;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    autoHeight: true
  }
}`,...(K=(F=h.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};const ze=["Default","Color","Size","OutLine","Readonly","Disabled","AutoHeight"];export{h as AutoHeight,g as Color,f as Default,y as Disabled,b as OutLine,x as Readonly,v as Size,ze as __namedExportsOrder,Se as default};
