import{e as extractComponentDescription,a as enhanceArgTypes,h as hasDocgen,b as extractComponentProps,c as convert4,S as SourceType,d as SNIPPET_RENDERED,l as lodashExports}from"./index-863dc768.js";import{w as watch,h,b as baseParse,i as isVNode}from"./vue.esm-bundler-e5714eb6.js";const{addons}=__STORYBOOK_MODULE_PREVIEW_API__;var ARG_TYPE_SECTIONS=["props","events","slots","exposed","expose"],extractArgTypes=e=>{if(!hasDocgen(e))return null;let t="exposed"in e.__docgenInfo?"vue-component-meta":"vue-docgen-api",r={};return ARG_TYPE_SECTIONS.forEach(n=>{extractComponentProps(e,n).forEach(o=>{let a;if(t==="vue-docgen-api"){let p=o.docgenInfo;a=extractFromVueDocgenApi(p,n,o)}else{let p=o.docgenInfo;a=extractFromVueComponentMeta(p,n)}!a||r[a.name]||(r[a.name]={...a,control:{disabled:!["props","slots"].includes(n)}})})}),r},extractFromVueDocgenApi=(e,t,r)=>{var p,s,i;let n,o;if(t==="events"&&(n=(p=e.type)==null?void 0:p.names.join(),o={name:"other",value:n??"",required:!1}),t==="slots"){let u=(s=e.bindings)==null?void 0:s.filter(l=>!!l.name).map(l=>{var c;return`${l.name}: ${((c=l.type)==null?void 0:c.name)??"unknown"}`}).join("; ");n=u?`{ ${u} }`:void 0,o={name:"other",value:n??"",required:!1}}if(t==="props"){let u=e;if(n=(i=u.type)==null?void 0:i.name,o=r?convert4(r.docgenInfo):{name:"other",value:n},u.type&&"elements"in u.type&&Array.isArray(u.type.elements)&&u.type.elements.length>0){let l=u.type.elements.map(c=>c.name);n==="Array"&&(n=`${l.length===1?l[0]:`(${l.join(" | ")})`}[]`),n==="union"?n=l.join(" | "):n==="intersection"&&(n=l.join(" & "))}}let a="required"in e?e.required??!1:!1;return{name:e.name,description:e.description,type:o?{...o,required:a}:{name:"other",value:n??""},table:{type:n?{summary:n}:void 0,defaultValue:r==null?void 0:r.propDef.defaultValue,jsDocTags:r==null?void 0:r.propDef.jsDocTags,category:t}}},extractFromVueComponentMeta=(e,t)=>{if("global"in e&&e.global)return;let r={summary:e.type.replace(" | undefined","")};if(t==="props"){let n=e,o=n.default?{summary:n.default}:void 0;return{name:n.name,description:formatDescriptionWithTags(n.description,n.tags),defaultValue:o,type:convertVueComponentMetaProp(n),table:{type:r,defaultValue:o,category:t}}}else return{name:e.name,description:"description"in e?e.description:"",type:{name:"other",value:e.type},table:{type:r,category:t}}},convertVueComponentMetaProp=e=>{var a,p;let t=e.schema,r=e.required,n={name:"other",value:e.type,required:r},o=["string","number","function","boolean","symbol"];if(typeof t=="string")return o.includes(t)?{name:t,required:r}:n;switch(t.kind){case"enum":{let s=((a=t.schema)==null?void 0:a.filter(i=>i!=="undefined"))??[];return isBooleanSchema(s)?{name:"boolean",required:r}:isLiteralUnionSchema(s)||isEnumSchema(s)?{name:"enum",value:s.map(i=>i.replace(/"/g,"")),required:r}:s.length===1?convertVueComponentMetaProp({schema:s[0],type:e.type,required:r}):(s.length>2&&s.includes("true")&&s.includes("false")&&(s=s.filter(i=>i!=="true"&&i!=="false"),s.push("boolean")),{name:"union",value:s.map(i=>convertVueComponentMetaProp(typeof i=="object"?{schema:i,type:i.type,required:!1}:{schema:i,type:i,required:!1})),required:r})}case"array":{let s=((p=t.schema)==null?void 0:p.filter(i=>i!=="undefined"))??[];return s.length===0?n:s.length===1?{name:"array",value:convertVueComponentMetaProp({schema:s[0],type:e.type,required:!1}),required:r}:{name:"union",value:s.map(i=>convertVueComponentMetaProp(typeof i=="object"?{schema:i,type:i.type,required:!1}:{schema:i,type:i,required:!1})),required:r}}case"object":return{name:"object",value:Object.entries(t.schema??{}).reduce((s,[i,u])=>(s[i]=convertVueComponentMetaProp(u),s),{}),required:r};default:return n}},formatDescriptionWithTags=(e,t)=>!(t!=null&&t.length)||!e?e??"":`${t.map(r=>`@${r.name}: ${r.text}`).join("<br>")}<br><br>${e}`,isLiteralUnionSchema=e=>e.every(t=>typeof t=="string"&&t.startsWith('"')&&t.endsWith('"')),isEnumSchema=e=>e.every(t=>typeof t=="string"&&t.includes(".")),isBooleanSchema=e=>e.length===2&&e.includes("true")&&e.includes("false"),omitEvent=e=>e?Object.fromEntries(Object.entries(e).filter(([t,r])=>!t.startsWith("on"))):{},displayObject=e=>e&&typeof e=="object"?`{${Object.keys(e).map(t=>`${t}:${displayObject(e[t])}`).join(",")}}`:typeof e=="string"?`'${e}'`:e==null?void 0:e.toString(),htmlEventAttributeToVueEventAttribute=e=>/^on[A-Za-z]/.test(e)?e.replace(/^on/,"v-on:").toLowerCase():e,directiveSource=(e,t)=>e.toLowerCase().startsWith("on")?`${htmlEventAttributeToVueEventAttribute(e)}='()=>({})'`:`${e}="${t||""}"`,attributeSource=(e,t,r)=>["boolean","number","object"].includes(typeof t)||r&&["style","class"].includes(e)?`:${e}="${displayObject(t)}"`:directiveSource(e,t),evalExp=(e,t)=>{let r=e;return r&&/v-bind="(\w+)"/.test(r)?r.replace(/"(\w+)"/g,`"${displayObject(t)}"`):(Object.keys(t).forEach(n=>{let o=new RegExp(`(\\w+)\\.${n}`,"g"),a=new RegExp(`(\\w+)\\.${n}`,"g");o.test(r)&&(r=r.replace(a,displayObject(t[n])))}),r)},replaceValueWithRef=(e,t,r)=>{let n=r?t[r]:"args",o=()=>{let p=Object.fromEntries(Object.entries(t).map(([s])=>[s,s]));return displayObject(p).replace(/'/g,"")},a=new RegExp(`="${n}"`,"g");return e.replace(a,`="${r??o()}"`)};function generateExpression(e){let t=e.toString().split("=>")[1].trim().replace("return","").trim();return t.startsWith("{")&&t.endsWith("}")&&(t=t.substring(1,t.length-1).trim()),`{{${t}}}`}var skipSourceRender=e=>{var o;let t=(o=e==null?void 0:e.parameters.docs)==null?void 0:o.source,r=e==null?void 0:e.parameters.__isArgsStory,n=(e==null?void 0:e.viewMode)==="docs";return(t==null?void 0:t.type)===SourceType.DYNAMIC?!1:!n||!r||(t==null?void 0:t.code)||(t==null?void 0:t.type)===SourceType.CODE};function generateAttributesSource(e,t,r,n){return Object.keys(e).map(o=>{var s;let a=e[o].loc.source.replace(/\$props/g,"args"),p=(s=e[o].arg)==null?void 0:s.loc.source;return n&&p?replaceValueWithRef(a,t,p):evalExp(a,omitEvent(t))}).join(" ")}function mapAttributesAndDirectives(e){let t=r=>r.startsWith("on")?r:lodashExports.kebabCase(r);return Object.keys(e).map(r=>({name:"bind",type:["v-","@","v-on"].includes(r)?7:6,arg:{content:t(r),loc:{source:t(r)}},loc:{source:attributeSource(t(r),e[r])},exp:{isStatic:!1,loc:{source:e[r]}},modifiers:[""]}))}function mapSlots(e,t,r){return Object.keys(e).map(n=>{var i,u;let o=e[n],a="",p=(u=(i=r.find(l=>l.name===n&&l.scoped))==null?void 0:i.bindings)==null?void 0:u.map(l=>l.name).join(",");typeof o=="string"?a=o:typeof o=="function"?a=generateExpression(o):isVNode(o)?a=t(o):typeof o=="object"&&!isVNode(o)&&(a=JSON.stringify(o));let s=p?`="{${p}}"`:"";return a=o?`<template #${n}${s}>${a}</template>`:"",{type:2,content:a,loc:{source:a,start:{offset:0,line:1,column:0},end:{offset:0,line:1,column:0}}}})}function generateScriptSetup(e,t,r){let n=Object.keys(e).map(o=>`const ${o} = ${typeof e[o]=="function"?"()=>{}":`ref(${JSON.stringify(e[o])});`}`);return n.unshift('import { ref } from "vue";'),`<script lang='ts' setup>${n.join(`
`)}<\/script>`}function getTemplateComponents(e,t){try{let r=e,n=r?r(t==null?void 0:t.args,t):t==null?void 0:t.component,o=typeof n=="function"?n():n,{template:a}=o;return a?getComponents(a):[h(o,t==null?void 0:t.args)]}catch{return[]}}function getComponents(e){var r;return((r=baseParse(e,{isNativeTag:()=>!0,decodeEntities:(n,o)=>n}))==null?void 0:r.children)||[]}function generateTemplateSource(componentOrNodes,{args,argTypes},byRef=!1){let isElementNode=e=>e&&e.type===1,isInterpolationNode=e=>e&&e.type===5,isTextNode=e=>e&&e.type===2,generateComponentSource=componentOrNode=>{var e,t;if(isElementNode(componentOrNode)){let{tag:r,props:n,children:o}=componentOrNode,a=typeof o=="string"?o:o.map(s=>generateComponentSource(s)).join(""),p=generateAttributesSource(n,args,argTypes,byRef);return a===""?`<${r} ${p} />`:`<${r} ${p}>${a}</${r}>`}if(isTextNode(componentOrNode)){let{content:r}=componentOrNode;return r}if(isInterpolationNode(componentOrNode)){let{content}=componentOrNode,expValue=evalExp(content.loc.source,args);return expValue===content.loc.source?`{{${expValue}}}`:eval(expValue)}if(isVNode(componentOrNode)){let r=componentOrNode,{props:n,type:o,children:a}=r,p=typeof a=="string"?void 0:a,s=(e=o==null?void 0:o.__docgenInfo)==null?void 0:e.slots,i=p?Object.fromEntries(Object.entries(n??{}).filter(([m,g])=>!p[m]&&!["class","style"].includes(m)).map(([m,g])=>[m,g])):n,u=mapAttributesAndDirectives(i??{}),l=Object.fromEntries(Object.entries(n??{}).filter(([m,g])=>p==null?void 0:p[m])),c=a?typeof a=="string"?a:mapSlots(l,generateComponentSource,s??[]).map(m=>m.content).join(""):"",d=typeof o=="string"?o:o.name||o.__name||((t=o.__docgenInfo)==null?void 0:t.displayName),y=generateAttributesSource(u,args,argTypes,byRef);return c.trim()===""?`<${d} ${y}/>`:`<${d} ${y}>${c}</${d}>`}return null},componentsOrNodes=Array.isArray(componentOrNodes)?componentOrNodes:[componentOrNodes],source=componentsOrNodes.map(e=>generateComponentSource(e)).join(" ");return source||null}var sourceDecorator=(e,t)=>{let r=skipSourceRender(t),n=e();return watch(()=>t.args,()=>{r||generateSource(t)},{immediate:!0,deep:!0}),n};function generateSource(e){var u,l,c;let t=addons.getChannel(),{args:r={},argTypes:n={},id:o}=e||{},a=getTemplateComponents(e==null?void 0:e.originalStoryFn,e),p=((c=(l=(u=e==null?void 0:e.parameters)==null?void 0:u.docs)==null?void 0:l.source)==null?void 0:c.withScriptSetup)||!1,s=p?generateScriptSetup(r):"",i=generateTemplateSource(a,e,p);if(i){let d=`${s}
 <template>
 ${i} 
</template>`;return t.emit(SNIPPET_RENDERED,{id:o,args:r,source:d,format:"vue"}),d}return null}var parameters={docs:{story:{inline:!0},extractArgTypes,extractComponentDescription}},decorators=[sourceDecorator],argTypesEnhancers=[enhanceArgTypes];export{argTypesEnhancers,decorators,parameters};
