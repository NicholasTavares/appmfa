var s=Object.defineProperty;var r=(o,i)=>s(o,"name",{value:i,configurable:!0});import{I as n}from"./defaults.540a8728.js";import{s as e,w as a,d,t as m}from"./index.0ee2d362.js";import{i as l,P as c}from"./Plus.esm.029f3df9.js";import{j as t}from"./jsx-runtime.5e5a68df.js";import"./iframe.64f271ca.js";import"./make-decorator.98f7b12a.js";import"./IconBase.esm.66621708.js";const p=e.div`
  position: fixed;
  bottom: 3rem;
  right: 2rem;
  z-index: 10;
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({theme:o})=>o.colors["gray/400"]};
  border-radius: 50%;
  border: 1px solid ${({theme:o})=>o.colors["yellow/500"]};
  color: ${({theme:o})=>o.colors["gray/50"]};
  font-size: 3rem;
  margin-left: 1.5rem;
  transition: all 500ms;

  &:hover {
    background-color: ${({theme:o})=>o.colors["gray/500"]};
  }

  &:active {
    background-color: ${({theme:o})=>o.colors["gray/700"]};
    transform: scale(1.05);
  }

  ${l.greaterThan("medium")`
    display: none;
  `}
`,u=e(c)`
  font-size: 2rem;
`,f=r(()=>t(p,{children:t(u,{weight:"regular"})}),"FixedAddButton"),$={title:"Components/FixedAddButton",decorators:[a,d.withThemesProvider([m])],component:f,parameters:{viewport:{viewports:n,defaultViewport:"iphonex"}}},A={},P=["Default"];export{A as Default,P as __namedExportsOrder,$ as default};
//# sourceMappingURL=fixedAddButton.stories.26b7286e.js.map
