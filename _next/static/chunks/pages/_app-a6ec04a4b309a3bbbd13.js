_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{0:function(e,t,o){o("74v/"),e.exports=o("nOHt")},"74v/":function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return o("cha2")}])},cha2:function(e,t,o){"use strict";o.r(t);var r=o("cpVT"),n=o("nKUr"),c=o("20a2"),s=o("q1tI"),i=o.n(s),a=o("3huY"),l=o("v5XY"),d=o("AeFk");const u=e=>`--theme-ui-${e.replace("-__default","")}`,m=e=>`var(${u(e)})`,f=(...e)=>e.filter(Boolean).join("-"),b={useCustomProperties:!0,initialColorModeName:!0,printColorModeName:!0,initialColorMode:!0,useLocalStorage:!0},h=(e,t,o)=>{const r=Array.isArray(e)?[]:{};for(let n in e){const o=e[n],c=f(t,n);o&&"object"===typeof o?r[n]=h(o,c):r[n]=b[n]?o:m(c)}return r},p=(e,t)=>{let o={};for(let r in t){if("modes"===r)continue;const n=f(e,r),c=t[r];c&&"object"===typeof c?o={...o,...p(n,c)}:o[u(n)]=c}return o},y=(e={})=>{const{useCustomProperties:t,initialColorModeName:o,printColorModeName:r,useRootStyles:n}=e.config||e||{},c=e.rawColors||e.colors;if(!c||!1===n)return{};if(!1===t)return Object(l.a)({html:{color:"text",bg:"background"}})(e);const s=c.modes||{},i=p("colors",c);if(Object.keys(s).forEach((e=>{i[`&.theme-ui-${e}`]=p("colors",s[e])})),r){const e="initial"===r||r===o?c:s[r];i["@media print"]=p("colors",e)}const a=e=>m(`colors-${e}`);return Object(l.a)({html:{...i,color:a("text"),bg:a("background")}})(e)},O="theme-ui-color-mode",j=()=>{try{return window.localStorage.getItem(O)}catch(e){console.warn("localStorage is disabled and color mode might not work as expected.","Please check your Site Settings.",e)}},g=e=>{try{window.localStorage.setItem(O,e)}catch(t){console.warn("localStorage is disabled and color mode might not work as expected.","Please check your Site Settings.",t)}},w=(e={})=>{const{initialColorModeName:t,useColorSchemeMediaQuery:o,useLocalStorage:r}=e.config||e;let[n,c]=Object(s.useState)((()=>{const e=(()=>{let e;return"undefined"!==typeof document&&document.documentElement.classList.forEach((t=>{t.startsWith("theme-ui-")&&(e=t.replace("theme-ui-",""))})),e})();if(e)return e;return!1!==o&&(()=>{if("undefined"!==typeof window&&window.matchMedia){if(window.matchMedia("(prefers-color-scheme: dark)").matches)return"dark";if(window.matchMedia("(prefers-color-scheme: light)").matches)return"light"}return null})()||t}));return Object(s.useEffect)((()=>{const e=!1!==r&&j();"undefined"!==typeof document&&(document.documentElement.classList.remove("theme-ui-"+e),document.body.classList.remove("theme-ui-"+e)),e&&e!==n&&(n=e,c(e))}),[]),i.a.useEffect((()=>{n&&!1!==r&&g(n)}),[n,r]),[n,c]};const v=e=>{const t={...e};return delete t.modes,t};function C(e,t){for(const[o,r]of Object.entries(e))"string"!==typeof r||r.startsWith("var(")||(t[o]=r),"object"===typeof r&&(t[o]={...t[o],...C(r,{})});return t}const k=({children:e})=>{const t=Object(a.d)(),o=t.theme,[r,n]=w(o),c=Object(s.useMemo)((()=>{const e={...o},t=Object(l.b)(e,"colors.modes",{}),n=Object(l.b)(t,r,{});r&&(e.colors={...e.colors,...n});const{useCustomProperties:c,initialColorModeName:s="__default"}=o.config||o;let i=o.rawColors||o.colors||{};if(!1!==c){const t=null!=e.rawColors,o=e.colors||{};var a;if(t)if(i={...i},C(o,i),"modes"in i)e.rawColors={...i,modes:{...null==(a=e.rawColors)?void 0:a.modes,[s]:v(i)}};else e.rawColors=i;else if("modes"in i){const t={[s]:v(i),...i.modes};e.rawColors={...o,modes:t}}else e.rawColors=o;e.colors=h(v(i),"colors")}return e}),[r,o]),i={...t,theme:c,colorMode:r,setColorMode:n},u=void 0===t.setColorMode;return Object(a.c)(a.b,{context:i},u?Object(a.c)(d.a,{styles:()=>y(c)}):Object(a.c)("div",{className:"theme-ui__nested-color-mode-provider",style:y(c).html}),e)};var S=o("5SEd"),x=o("7ljp");const E={inlineCode:"code",thematicBreak:"hr",root:"div"},_=e=>e in E?E[e]:e,M={th:{align:"textAlign"},td:{align:"textAlign"}},P=e=>({theme:t,...o})=>{const r=M[e],n=r?Object.keys(o).filter((e=>void 0!==r[e])).reduce(((e,t)=>({...e,[r[t]]:o[t]})),{}):void 0;return Object(l.a)({...Object(l.b)(t,`styles.${e}`),...n})(t)},N=Object(S.a)("div")(P("div")),B=Object(S.a)("div")(P("div")),D={};["p","b","i","a","h1","h2","h3","h4","h5","h6","img","pre","code","ol","ul","li","blockquote","hr","em","table","tr","th","td","em","strong","del","inlineCode","thematicBreak","div","root"].forEach((e=>{D[e]=Object(S.a)(_(e))(P(e)),N[e]=D[e],B[e]=Object(S.a)((e=>t=>(Object(s.useEffect)((()=>{}),[]),Object(s.createElement)(_(e),t)))(e))(P(e))}));const F=e=>{const t={...D};return Object.keys(e).forEach((o=>{t[o]=Object(S.a)(e[o])(P(o))})),t},A=({components:e,children:t})=>{const o=Object(x.c)();return Object(a.c)(x.a,{components:F({...o,...e}),children:t})},L=()=>Object(a.c)(d.a,{styles:e=>{var t;const o=e,{useRootStyles:r}=o.config||o;if(!1===r||o.styles&&!o.styles.root)return null;const n=!1===(null==(t=o.config)?void 0:t.useBorderBox)?void 0:"border-box";return Object(l.a)({"*":{boxSizing:n},html:{variant:"styles.root"},body:{margin:0}})(o)}}),I=({theme:e,components:t,children:o})=>"function"===typeof Object(a.d)().setColorMode?Object(a.c)(a.a,{theme:e},Object(a.c)(A,{components:t,children:o})):Object(a.c)(a.a,{theme:e},Object(a.c)(k,null,Object(a.c)(L),Object(a.c)(A,{components:t,children:o})));var R={config:{useLocalStorage:!1},colors:{text:"#000",background:"#fff",primary:"#BA160C",secondary:"#191970",accent:"#B14AED",muted:"#444","extra-muted":"#888",modes:{dark:{text:"#fff",background:"#111",primary:"#F08080",secondary:"#63D2FF",accent:"#37FF8B",muted:"#ccc"}}},fonts:{body:'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',heading:'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif'},fontSizes:{small:12,body:16,large:24,subheading:32,title:48,"display-2":54,display:72},breakpoints:["42em","60em"],styles:{root:{fontFamily:"body",fontWeight:"body"},li:{marginBottom:2},a:{fontWeight:"700",color:"inherit",textDecoration:"none","&:hover":{color:"primary"}},h2:{textDecorationLine:"underline",textDecorationColor:"accent",textDecorationThickness:1,textUnderlineOffset:12}},layout:{container:{maxWidth:["40em","46em","64em"]}}};function T(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function W(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?T(Object(o),!0).forEach((function(t){Object(r.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):T(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}t.default=function(e){var t=e.Component,o=e.pageProps,r=Object(c.useRouter)();return Object(s.useEffect)((function(){var e=function(e){!function(e){window.gtag("config","G-1K81THS49N",{page_path:e})}(e)};return r.events.on("routeChangeComplete",e),function(){r.events.off("routeChangeComplete",e)}}),[r.events]),Object(n.jsx)(I,{theme:R,children:Object(n.jsx)(t,W({},o))})}}},[[0,0,2,1,3]]]);