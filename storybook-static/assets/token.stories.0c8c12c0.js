var h=Object.defineProperty;var d=(e,i)=>h(e,"name",{value:i,configurable:!0});import{I as u}from"./defaults.540a8728.js";import{s as t,w as k,d as f,t as m}from"./index.0ee2d362.js";import{b as n,F as s,j as o,r as y}from"./jsx-runtime.5e5a68df.js";import{I as g,r as x}from"./IconBase.esm.66621708.js";import"./iframe.64f271ca.js";import"./make-decorator.98f7b12a.js";var r=new Map;r.set("bold",function(e){return n(s,{children:[o("polyline",{points:"220 176 220 36 80 36",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),o("rect",{x:"40",y:"76",width:"140",height:"140",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})]})});r.set("duotone",function(e){return n(s,{children:[o("rect",{x:"40",y:"72",width:"144",height:"144",opacity:"0.2"}),o("polyline",{points:"216 184 216 40 72 40",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),o("rect",{x:"40",y:"72",width:"144",height:"144",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});r.set("fill",function(){return n(s,{children:[o("path",{d:"M216,32H72a8,8,0,0,0,0,16H208V184a8,8,0,0,0,16,0V40A8,8,0,0,0,216,32Z"}),o("rect",{x:"32",y:"64",width:"160",height:"160",rx:"8"})]})});r.set("light",function(e){return n(s,{children:[o("polyline",{points:"216 184 216 40 72 40",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),o("rect",{x:"40",y:"72",width:"144",height:"144",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})]})});r.set("thin",function(e){return n(s,{children:[o("polyline",{points:"216 184 216 40 72 40",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),o("rect",{x:"40",y:"72",width:"144",height:"144",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})]})});r.set("regular",function(e){return n(s,{children:[o("polyline",{points:"216 184 216 40 72 40",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),o("rect",{x:"40",y:"72",width:"144",height:"144",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});var w=d(function(i,p){return x(i,p,r)},"renderPath"),l=y.exports.forwardRef(function(e,i){return o(g,{...Object.assign({ref:i},e,{renderPath:w})})});l.displayName="CopySimple";const T=l,L=t.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({theme:e})=>e.colors["stone/200"]};
  overflow: hidden;
  border-radius: 1rem;
  transition: all 500ms;

  &:hover {
    transform: translateY(-10%) scale(1.02);
  }
`,v=t.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 1.2rem;
`,_=t.div`
  display: flex;
  flex-direction: column;
  max-width: 90%;
`,j=t.h3`
  color: ${({theme:e})=>e.colors["gray/800"]};
  font-size: 1.5rem;
`,C=t.span`
  color: ${({theme:e})=>e.colors["yellow/500"]};
  font-size: 1.65rem;
  font-weight: bold;
  margin-top: 0.1rem;
`,b=t.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`,c=t(T)`
  font-size: 2.2rem;
  color: ${({theme:e})=>e.colors["gray/800"]};
`,W=t.div`
  position: absolute;
  top: 0.9rem;
  right: 0.9rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 500ms;
  padding: 0.48rem;

  &:hover {
    background-color: ${({theme:e})=>e.colors["gray/400"]};
    ${c} {
      color: ${({theme:e})=>e.colors.white};
    }
  }

  &:active {
    background-color: ${({theme:e})=>e.colors["gray/500"]};
    transform: scale(1.05);
  }
`,S=t.div`
  width: 100%;
  height: 0.5rem;
  background-color: ${({theme:e})=>e.colors["cyan/500"]};
`,a=d(({token:e,expirationDate:i})=>n(L,{children:[n(v,{children:[n(_,{children:[o(j,{children:"Token"}),o(C,{children:e})]}),o(b,{children:o(W,{onClick:()=>{navigator.clipboard.writeText(e)},children:o(c,{weight:"light"})})})]}),o(S,{})]}),"Token");try{a.displayName="Token",a.__docgenInfo={description:"",displayName:"Token",props:{token:{defaultValue:null,description:"",name:"token",required:!0,type:{name:"string"}},expirationDate:{defaultValue:null,description:"",name:"expirationDate",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Token/index.tsx#Token"]={docgenInfo:a.__docgenInfo,name:"Token",path:"src/components/Token/index.tsx#Token"})}catch{}const P={title:"Components/Token",decorators:[k,f.withThemesProvider([m])],component:a,parameters:{viewport:{viewports:u,defaultViewport:"iphonex"}}},V={},B=["Default"];export{V as Default,B as __namedExportsOrder,P as default};
//# sourceMappingURL=token.stories.0c8c12c0.js.map
