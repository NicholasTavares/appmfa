var r=Object.defineProperty;var e=(o,a)=>r(o,"name",{value:a,configurable:!0});import{I as s}from"./defaults.540a8728.js";import{U as d,s as i,w as c,d as m,t as p}from"./index.0ee2d362.js";import{j as n}from"./jsx-runtime.5e5a68df.js";import"./iframe.64f271ca.js";import"./make-decorator.98f7b12a.js";const l=d`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg); 
  }
`,g=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto 0;

  ${({center:o})=>o&&`
    margin: auto;
  `}
`,f=i.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 3px solid ${({theme:o})=>o.colors["gray/400"]};
  border-top-color: ${({theme:o})=>o.colors["cyan/500"]};
  animation-name: ${l};
  animation-iteration-count: infinite;
  animation-duration: 1s;
  animation-timing-function: linear;
`,t=e(({center:o})=>n(g,{center:o,children:n(f,{})}),"Loading");try{t.displayName="Loading",t.__docgenInfo={description:"",displayName:"Loading",props:{center:{defaultValue:null,description:"",name:"center",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Loading/index.tsx#Loading"]={docgenInfo:t.__docgenInfo,name:"Loading",path:"src/components/Loading/index.tsx#Loading"})}catch{}const S={title:"Components/Loading",decorators:[c,m.withThemesProvider([p])],component:t,parameters:{viewport:{viewports:s,defaultViewport:"iphonex"}}},I={},O=["Default"];export{I as Default,O as __namedExportsOrder,S as default};
//# sourceMappingURL=loading.stories.320b6857.js.map
