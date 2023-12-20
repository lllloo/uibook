import{k as c}from"./vue.esm-bundler-e9714d41.js";const{useArgs:n}=__STORYBOOK_MODULE_CLIENT_API__,l=[(o,s)=>{const t=s.args,[d,e]=n();return o({...s,vModel:r=>c({get:()=>t[r],set:a=>{e({...t,[r]:a})}})})},o=>({components:{story:o},template:`
      <div class="decorators">
        <story/>
      </div>
    `})],m={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}}};export{l as decorators,m as default};
