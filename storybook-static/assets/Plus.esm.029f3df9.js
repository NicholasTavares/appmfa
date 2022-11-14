var L=Object.defineProperty;var t=(e,n)=>L(e,"name",{value:n,configurable:!0});import{C as o}from"./index.0ee2d362.js";import{b as d,F as u,j as i,r as b}from"./jsx-runtime.5e5a68df.js";import{I as O,r as w}from"./IconBase.esm.66621708.js";function l(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}t(l,"_taggedTemplateLiteral");function p(){var e=l([`
          @media (min-width: `,`) {
            `,`
          }
        `]);return p=t(function(){return e},"_templateObject5"),e}t(p,"_templateObject5");function h(){var e=l([`
          @media (max-width: `,`) {
            `,`
          }
        `]);return h=t(function(){return e},"_templateObject4"),e}t(h,"_templateObject4");function k(){var e=l([`
    @media (min-width: `,`) and
      (max-width: `,`) {
      `,`
    }
  `]);return k=t(function(){return e},"_templateObject3"),e}t(k,"_templateObject3");function y(){var e=l([`
    @media (min-width: `,`) {
      `,`
    }
  `]);return y=t(function(){return e},"_templateObject2"),e}t(y,"_templateObject2");function x(){var e=l([`
    @media (max-width: `,`) {
      `,`
    }
  `]);return x=t(function(){return e},"_templateObject"),e}t(x,"_templateObject");var W={huge:"1440px",large:"1170px",medium:"768px",small:"450px"};function f(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return n[e]?n[e]:parseInt(e)?e:(console.error("styled-media-query: No valid breakpoint or size specified for media."),"0")}t(f,"getSizeFromBreakpoint");function P(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:W,n=t(function(r){return function(){return o(x(),f(r,e),o.apply(void 0,arguments))}},"lessThan"),m=t(function(r){return function(){return o(y(),f(r,e),o.apply(void 0,arguments))}},"greaterThan"),j=t(function(r,c){return function(){return o(k(),f(r,e),f(c,e),o.apply(void 0,arguments))}},"between"),v=Object.keys(e).reduce(function(s,r){var c=e[r];return s.to[r]=function(){return console.warn("styled-media-query: Use media.lessThan('".concat(r,"') instead of old media.to.").concat(r," (Probably we'll deprecate it)")),o(h(),c,o.apply(void 0,arguments))},s.from[r]=function(){return console.warn("styled-media-query: Use media.greaterThan('".concat(r,"') instead of old media.from.").concat(r," (Probably we'll deprecate it)")),o(p(),c,o.apply(void 0,arguments))},s},{to:{},from:{}});return Object.assign({lessThan:n,greaterThan:m,between:j},v)}t(P,"generateMedia");var q=P(),a=new Map;a.set("bold",function(e){return d(u,{children:[i("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),i("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})]})});a.set("duotone",function(e){return d(u,{children:[i("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});a.set("fill",function(){return i(u,{children:i("path",{d:"M216,120H136V40a8,8,0,0,0-16,0v80H40a8,8,0,0,0,0,16h80v80a8,8,0,0,0,16,0V136h80a8,8,0,0,0,0-16Z"})})});a.set("light",function(e){return d(u,{children:[i("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),i("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})]})});a.set("thin",function(e){return d(u,{children:[i("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),i("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})]})});a.set("regular",function(e){return d(u,{children:[i("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});var _=t(function(n,m){return w(n,m,a)},"renderPath"),g=b.exports.forwardRef(function(e,n){return i(O,{...Object.assign({ref:n},e,{renderPath:_})})});g.displayName="Plus";const I=g;export{I as P,q as i};
//# sourceMappingURL=Plus.esm.029f3df9.js.map
