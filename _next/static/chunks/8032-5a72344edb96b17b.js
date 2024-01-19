"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8032],{42289:function(a,b,c){c.d(b,{Z:function(){return l}});var d=c(7297),e=c(87379),f=c(57247),g={SM:"sm",MD:"md"};function h(){var a=(0,d.Z)(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ",";\n  width: ",";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ",";\n  box-shadow: ",';\n\n  &:after {\n    border-radius: 50%;\n    content: "";\n    height: ',";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ",";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ",";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ",";\n  }\n\n  &:checked {\n    background-color: ",";\n    &:after {\n      background-color: ",";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ","\n"]);return h=function(){return a},a}var i=function(a){var b=a.scale;switch(b){case g.SM:return"24px";case g.MD:default:return"32px"}},j=function(a){var b=a.scale;switch(b){case g.SM:return"12px";case g.MD:default:return"20px"}},k=e.ZP.input.attrs({type:"radio"}).withConfig({componentId:"sc-407ed64c-0"}).withConfig({componentId:"sc-f2e005b8-0"})(h(),i,i,function(a){return a.theme.colors.input},function(a){return a.theme.shadows.inset},j,j,function(a){return a.theme.shadows.focus},function(a){return a.theme.shadows.focus},function(a){return a.theme.colors.success},function(a){return a.theme.radio.handleBackground},f.Dh);k.defaultProps={scale:g.MD,m:0};var l=k},86399:function(a,b,c){var d=c(85893),e=c(67294),f=c(9253),g=c(94831),h=c(3023),i=c(48963),j=c(14888),k=c(16580),l=c(63850),m=c(59604),n=c(265),o=c(52775),p=function(a){var b=a.x,c=a.y,e=a.width,f=a.height,g=a.fill;return(0,d.jsx)("g",{children:(0,d.jsx)("rect",{x:b,y:c,fill:g,width:e,height:f,rx:"2"})})},q=function(a){var b=a.locale,c=a.payload,d=a.setHoverValue,f=a.setHoverDate;return(0,e.useEffect)(function(){d(c.value),f(c.time.toLocaleString(b,{year:"numeric",day:"numeric",month:"short"}))},[b,c.value,c.time,d,f]),null},r=function(a){var b=a.data,c=a.setHoverValue,e=a.setHoverDate,r=(0,o.$G)().currentLanguage.locale,s=(0,l.ZP)().theme;return b&&0!==b.length?(0,d.jsx)(f.h,{width:"100%",height:"100%",children:(0,d.jsxs)(g.v,{data:b,margin:{top:5,right:15,left:0,bottom:5},onMouseLeave:function(){e(void 0),c(void 0)},children:[(0,d.jsx)(h.K,{dataKey:"time",axisLine:!1,tickLine:!1,tickFormatter:function(a){return a.toLocaleDateString(void 0,{day:"2-digit"})},minTickGap:10}),(0,d.jsx)(i.B,{dataKey:"value",tickCount:6,scale:"linear",axisLine:!1,tickLine:!1,color:s.colors.textSubtle,fontSize:"12px",tickFormatter:function(a){return"$".concat((0,m.d)(a))},orientation:"right",tick:{dx:10,fill:s.colors.textSubtle}}),(0,d.jsx)(j.u,{cursor:{fill:s.colors.backgroundDisabled},contentStyle:{display:"none"},formatter:function(a,b,f){return(0,d.jsx)(q,{locale:r,payload:f.payload,setHoverValue:c,setHoverDate:e})}}),(0,d.jsx)(k.$,{dataKey:"value",fill:s.colors.primary,shape:function(a){return(0,d.jsx)(p,{height:a.height,width:a.width,x:a.x,y:a.y,fill:s.colors.primary})}})]})}):(0,d.jsx)(n.M4,{})};b.Z=r},18319:function(a,b,c){var d=c(85893),e=c(67294),f=c(9253),g=c(46888),h=c(3023),i=c(48963),j=c(14888),k=c(86108),l=c(63850),m=c(59604),n=c(265),o=c(52775),p=function(a){var b=a.locale,c=a.payload,d=a.setHoverValue,f=a.setHoverDate;return(0,e.useEffect)(function(){d(c.value),f(c.time.toLocaleString(b,{year:"numeric",day:"numeric",month:"short"}))},[b,c.value,c.time,d,f]),null},q=function(a){var b=a.data,c=a.setHoverValue,e=a.setHoverDate,q=(0,o.$G)().currentLanguage.locale,r=(0,l.ZP)().theme;return b&&0!==b.length?(0,d.jsx)(f.h,{children:(0,d.jsxs)(g.T,{data:b,width:300,height:308,margin:{top:5,right:15,left:0,bottom:5},onMouseLeave:function(){e&&e(void 0),c&&c(void 0)},children:[(0,d.jsx)("defs",{children:(0,d.jsxs)("linearGradient",{id:"gradient",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,d.jsx)("stop",{offset:"5%",stopColor:r.colors.inputSecondary,stopOpacity:.5}),(0,d.jsx)("stop",{offset:"100%",stopColor:r.colors.secondary,stopOpacity:0})]})}),(0,d.jsx)(h.K,{dataKey:"time",axisLine:!1,tickLine:!1,tickFormatter:function(a){return a.toLocaleDateString(void 0,{day:"2-digit"})},minTickGap:10}),(0,d.jsx)(i.B,{dataKey:"value",tickCount:6,scale:"linear",axisLine:!1,tickLine:!1,fontSize:"12px",tickFormatter:function(a){return"$".concat((0,m.d)(a))},orientation:"right",tick:{dx:10,fill:r.colors.textSubtle}}),(0,d.jsx)(j.u,{cursor:{stroke:r.colors.secondary},contentStyle:{display:"none"},formatter:function(a,b,f){return(0,d.jsx)(p,{locale:q,payload:f.payload,setHoverValue:c,setHoverDate:e})}}),(0,d.jsx)(k.u,{dataKey:"value",type:"monotone",stroke:r.colors.secondary,fill:"url(#gradient)",strokeWidth:2})]})}):(0,d.jsx)(n.fn,{})};b.Z=q},57339:function(a,b,c){var d=c(10253),e=c(7297),f=c(85893),g=c(67294),h=c(87379),i=c(91713),j=c(75943),k=c(62685),l=c(40735),m=c(62077),n=c(42289),o=c(87844),p=c(18029),q=c(44147),r=c(59604),s=c(97119),t=c(15260),u=c(73806),v=c(7269),w=c(52775),x=c(36795);function y(){var a=(0,e.Z)(["\n  width: 100%;\n"]);return y=function(){return a},a}function z(){var a=(0,e.Z)(["\n  display: grid;\n  grid-gap: 1em;\n  align-items: center;\n  grid-template-columns: 2fr 0.8fr repeat(4, 1fr);\n  padding: 0 24px;\n  @media screen and (max-width: 940px) {\n    grid-template-columns: 2fr repeat(4, 1fr);\n    & > *:nth-child(5) {\n      display: none;\n    }\n  }\n  @media screen and (max-width: 800px) {\n    grid-template-columns: 2fr repeat(2, 1fr);\n    & > *:nth-child(5) {\n      display: none;\n    }\n    & > *:nth-child(3) {\n      display: none;\n    }\n    & > *:nth-child(4) {\n      display: none;\n    }\n  }\n  @media screen and (max-width: 500px) {\n    grid-template-columns: 2fr 1fr;\n    & > *:nth-child(5) {\n      display: none;\n    }\n    & > *:nth-child(3) {\n      display: none;\n    }\n    & > *:nth-child(4) {\n      display: none;\n    }\n    & > *:nth-child(2) {\n      display: none;\n    }\n  }\n"]);return z=function(){return a},a}function A(){var a=(0,e.Z)(["\n  align-items: center;\n  margin-right: 16px;\n  margin-top: 8px;\n  cursor: pointer;\n"]);return A=function(){return a},a}var B=h.ZP.div.withConfig({componentId:"sc-fa1271d1-0"})(y()),C=h.ZP.div.withConfig({componentId:"sc-fa1271d1-1"})(z()),D=(0,h.ZP)(j.Z).withConfig({componentId:"sc-fa1271d1-2"})(A()),E={amountUSD:"amountUSD",timestamp:"timestamp",sender:"sender",amountToken0:"amountToken0",amountToken1:"amountToken1"},F=function(){var a=(0,f.jsxs)(C,{children:[(0,f.jsx)(k.Z,{}),(0,f.jsx)(k.Z,{}),(0,f.jsx)(k.Z,{}),(0,f.jsx)(k.Z,{}),(0,f.jsx)(k.Z,{}),(0,f.jsx)(k.Z,{})]});return(0,f.jsxs)(f.Fragment,{children:[a,a,a]})},G=function(a){var b=a.transaction,c=(0,w.$G)().t,d=Math.abs(b.amountToken0),e=Math.abs(b.amountToken1),g=b.amountToken0<0?b.token0Symbol:b.token1Symbol,h=b.amountToken1<0?b.token0Symbol:b.token1Symbol;return(0,f.jsxs)(C,{children:[(0,f.jsx)(l.Z,{href:(0,s.C)(b.hash,"transaction"),children:(0,f.jsx)(m.Z,{children:b.type===u.i.MINT?c("Add %token0% and %token1%",{token0:b.token0Symbol,token1:b.token1Symbol}):b.type===u.i.SWAP?c("Swap %token0% for %token1%",{token0:h,token1:g}):c("Remove %token0% and %token1%",{token0:b.token0Symbol,token1:b.token1Symbol})})}),(0,f.jsxs)(m.Z,{children:["$",(0,r.d)(b.amountUSD)]}),(0,f.jsx)(m.Z,{children:(0,f.jsx)(m.Z,{children:"".concat((0,r.d)(d)," ").concat(b.token0Symbol)})}),(0,f.jsx)(m.Z,{children:(0,f.jsx)(m.Z,{children:"".concat((0,r.d)(e)," ").concat(b.token1Symbol)})}),(0,f.jsx)(l.Z,{href:(0,s.C)(b.sender,"address"),children:(0,t.Z)(b.sender)}),(0,f.jsx)(m.Z,{children:(0,i.Z)(1e3*parseInt(b.timestamp,10))})]})},H=function(a){var b=a.transactions,c=(0,g.useState)(E.timestamp),e=c[0],h=c[1],i=(0,g.useState)(!0),k=i[0],l=i[1],r=(0,w.$G)().t,s=(0,g.useState)(1),t=s[0],y=s[1],z=(0,g.useState)(1),A=z[0],H=z[1],I=(0,g.useState)(void 0),J=I[0],K=I[1],L=(0,g.useMemo)(function(){var a=[E.amountToken0,E.amountToken1];return b?b.slice().sort(function(b,c){if(b&&c){var f=b[e],g=c[e],h=(0,d.Z)(a.includes(e)?[Math.abs(f),Math.abs(g)]:[f,g],2),i=h[0],j=h[1];return i>j?(k?-1:1)*1:-((k?-1:1)*1)}return -1}).filter(function(a){return void 0===J||a.type===J}).slice(v.si*(t-1),t*v.si):[]},[b,t,e,k,J]);(0,g.useEffect)(function(){if(b){var a=b.filter(function(a){return void 0===J||a.type===J});a.length%v.si==0?H(Math.floor(a.length/v.si)):H(Math.floor(a.length/v.si)+1)}},[b,J]);var M=(0,g.useCallback)(function(a){a!==J&&(K(a),y(1))},[J]),N=(0,g.useCallback)(function(a){h(a),l(e!==a||!k)},[k,e]),O=(0,g.useCallback)(function(a){return e===a?k?"↓":"↑":""},[k,e]);return(0,f.jsxs)(B,{children:[(0,f.jsxs)(j.Z,{mb:"16px",children:[(0,f.jsxs)(j.Z,{flexDirection:["column","row"],children:[(0,f.jsxs)(D,{onClick:function(){return M(void 0)},children:[(0,f.jsx)(n.Z,{onChange:function(){return null},scale:"sm",checked:void 0===J}),(0,f.jsx)(m.Z,{ml:"8px",children:r("All")})]}),(0,f.jsxs)(D,{onClick:function(){return M(u.i.SWAP)},children:[(0,f.jsx)(n.Z,{onChange:function(){return null},scale:"sm",checked:J===u.i.SWAP}),(0,f.jsx)(m.Z,{ml:"8px",children:r("Swaps")})]})]}),(0,f.jsxs)(j.Z,{flexDirection:["column","row"],children:[(0,f.jsxs)(D,{onClick:function(){return M(u.i.MINT)},children:[(0,f.jsx)(n.Z,{onChange:function(){return null},scale:"sm",checked:J===u.i.MINT}),(0,f.jsx)(m.Z,{ml:"8px",children:r("Adds")})]}),(0,f.jsxs)(D,{onClick:function(){return M(u.i.BURN)},children:[(0,f.jsx)(n.Z,{onChange:function(){return null},scale:"sm",checked:J===u.i.BURN}),(0,f.jsx)(m.Z,{ml:"8px",children:r("Removes")})]})]})]}),(0,f.jsxs)(x.y6,{children:[(0,f.jsxs)(C,{children:[(0,f.jsx)(m.Z,{color:"secondary",fontSize:"12px",bold:!0,textTransform:"uppercase",children:r("Action")}),(0,f.jsxs)(x._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return N(E.amountUSD)},textTransform:"uppercase",children:[r("Total Value")," ",O(E.amountUSD)]}),(0,f.jsxs)(x._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return N(E.amountToken0)},textTransform:"uppercase",children:[r("Token Amount")," ",O(E.amountToken0)]}),(0,f.jsxs)(x._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return N(E.amountToken1)},textTransform:"uppercase",children:[r("Token Amount")," ",O(E.amountToken1)]}),(0,f.jsxs)(x._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return N(E.sender)},textTransform:"uppercase",children:[r("Account")," ",O(E.sender)]}),(0,f.jsxs)(x._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return N(E.timestamp)},textTransform:"uppercase",children:[r("Time")," ",O(E.timestamp)]})]}),(0,f.jsx)(x.SS,{}),b?(0,f.jsxs)(f.Fragment,{children:[L.map(function(a,b){return a?(0,f.jsxs)(g.Fragment,{children:[(0,f.jsx)(G,{transaction:a}),(0,f.jsx)(x.SS,{})]},b):null}),0===L.length?(0,f.jsx)(j.Z,{justifyContent:"center",children:(0,f.jsx)(m.Z,{children:r("No Transactions")})}):void 0,(0,f.jsxs)(x.Ob,{children:[(0,f.jsx)(x.Eh,{onClick:function(){y(1===t?t:t-1)},children:(0,f.jsx)(o.Z,{color:1===t?"textDisabled":"primary"})}),(0,f.jsx)(m.Z,{children:r("Page %page% of %maxPage%",{page:t,maxPage:A})}),(0,f.jsx)(x.Eh,{onClick:function(){y(t===A?t:t+1)},children:(0,f.jsx)(p.Z,{color:t===A?"textDisabled":"primary"})})]})]}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(F,{}),(0,f.jsx)(q.Z,{})]})]})]})};b.Z=H},27197:function(a,b,c){var d=c(26042),e=c(69396),f=c(99534),g=c(85893),h=c(62077),i=function(a){var b=a.value,c=(0,f.Z)(a,["value"]);if(!b||Number.isNaN(b))return(0,g.jsx)(h.Z,(0,e.Z)((0,d.Z)({},c),{children:"-"}));var i=b<0;return(0,g.jsxs)(h.Z,(0,e.Z)((0,d.Z)({},c),{color:i?"failure":"success",children:[i?"↓":"↑",Math.abs(b).toFixed(2),"%"]}))};b.Z=i}}])