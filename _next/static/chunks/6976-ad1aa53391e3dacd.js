"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6976],{42289:function(a,b,c){c.d(b,{Z:function(){return l}});var d=c(7297),e=c(87379),f=c(57247),g={SM:"sm",MD:"md"};function h(){var a=(0,d.Z)(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ",";\n  width: ",";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ",";\n  box-shadow: ",';\n\n  &:after {\n    border-radius: 50%;\n    content: "";\n    height: ',";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ",";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ",";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ",";\n  }\n\n  &:checked {\n    background-color: ",";\n    &:after {\n      background-color: ",";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ","\n"]);return h=function(){return a},a}var i=function(a){var b=a.scale;switch(b){case g.SM:return"24px";case g.MD:default:return"32px"}},j=function(a){var b=a.scale;switch(b){case g.SM:return"12px";case g.MD:default:return"20px"}},k=e.ZP.input.attrs({type:"radio"}).withConfig({componentId:"sc-407ed64c-0"}).withConfig({componentId:"sc-f2e005b8-0"})(h(),i,i,function(a){return a.theme.colors.input},function(a){return a.theme.shadows.inset},j,j,function(a){return a.theme.shadows.focus},function(a){return a.theme.shadows.focus},function(a){return a.theme.colors.success},function(a){return a.theme.radio.handleBackground},f.Dh);k.defaultProps={scale:g.MD,m:0};var l=k},73546:function(a,b,c){c.d(b,{N:function(){return e}});var d,e,f=c(7297),g=c(85893),h=c(87379),i=c(98553),j=c(37303),k=c(57049),l=c(63771),m=c(44147),n=c(75943),o=c(52775);function p(){var a=(0,f.Z)(["\n  align-items: center;\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-content: center;\n\n  "," {\n    grid-template-columns: 1fr 24px 1fr;\n  }\n"]);return p=function(){return a},a}function q(){var a=(0,f.Z)(["\n  width: 100%;\n\n  "," {\n    min-width: 160px;\n  }\n"]);return q=function(){return a},a}function r(){var a=(0,f.Z)(["\n  display: none;\n\n  "," {\n    display: block;\n  }\n"]);return r=function(){return a},a}function s(){var a=(0,f.Z)(["\n  display: block;\n\n  "," {\n    display: none;\n  }\n"]);return s=function(){return a},a}(d=e||(e={})).ROW="row",d.SEQUENTIAL="sequential";var t=h.ZP.div.withConfig({componentId:"sc-c0273ef8-0"})(p(),function(a){return a.theme.mediaQueries.md}),u=(0,h.ZP)(i.Z).withConfig({componentId:"sc-c0273ef8-1"})(q(),function(a){return a.theme.mediaQueries.md}),v={width:"24px",color:"textDisabled"},w=(0,h.ZP)(j.Z).attrs(v).withConfig({componentId:"sc-c0273ef8-2"})(r(),function(a){return a.theme.mediaQueries.md}),x=(0,h.ZP)(k.Z).attrs(v).withConfig({componentId:"sc-c0273ef8-3"})(s(),function(a){return a.theme.mediaQueries.md}),y=(0,g.jsx)(l.Z,{spin:!0,color:"currentColor"}),z=function(a){var b=a.isApproveDisabled,c=a.isApproving,d=a.isConfirming,f=a.isConfirmDisabled,h=a.onApprove,i=a.onConfirm,j=a.buttonArrangement,k=void 0===j?e.ROW:j,l=a.confirmLabel,p=a.confirmId,q=(0,o.$G)().t,r=null!=l?l:q("Confirm");return k===e.ROW?(0,g.jsxs)(t,{children:[(0,g.jsx)(m.Z,{children:(0,g.jsx)(u,{disabled:b,onClick:h,endIcon:c?y:void 0,isLoading:c,children:q(c?"Enabling":"Enable")})}),(0,g.jsxs)(n.Z,{justifyContent:"center",children:[(0,g.jsx)(w,{}),(0,g.jsx)(x,{})]}),(0,g.jsx)(m.Z,{children:(0,g.jsx)(u,{id:p,onClick:i,disabled:f,isLoading:d,endIcon:d?y:void 0,children:d?q("Confirming"):r})})]}):(0,g.jsx)(g.Fragment,{children:b?(0,g.jsx)(m.Z,{children:(0,g.jsx)(u,{id:p,onClick:i,disabled:f,isLoading:d,endIcon:d?y:void 0,children:d?q("Confirming"):r})}):(0,g.jsx)(m.Z,{children:(0,g.jsx)(u,{onClick:h,endIcon:c?y:void 0,isLoading:c,children:q(c?"Enabling":"Enable")})})})};b.Z=z},6169:function(a,b,c){var d=c(47568),e=c(26042),f=c(69396),g=c(34051),h=c.n(g),i=c(67294),j=c(50308),k=c.n(j),l=c(29315),m=c(76431),n={approvalState:"idle",confirmState:"idle"},o=function(a,b){switch(b.type){case"approve_sending":return(0,f.Z)((0,e.Z)({},a),{approvalState:"loading"});case"approve_receipt":return(0,f.Z)((0,e.Z)({},a),{approvalState:"success"});case"approve_error":return(0,f.Z)((0,e.Z)({},a),{approvalState:"fail"});case"confirm_sending":return(0,f.Z)((0,e.Z)({},a),{confirmState:"loading"});case"confirm_receipt":return(0,f.Z)((0,e.Z)({},a),{confirmState:"success"});case"confirm_error":return(0,f.Z)((0,e.Z)({},a),{confirmState:"fail"});default:return a}},p=function(a){var b=a.onApprove,c=a.onConfirm,e=a.onRequiresApproval,f=a.onSuccess,g=void 0===f?k():f,j=a.onApproveSuccess,p=void 0===j?k():j,q=(0,l.Ge)().account,r=(0,i.useReducer)(o,n),s=r[0],t=r[1],u=(0,i.useRef)(e),v=(0,m.Z)().fetchWithCatchTxError,w=(0,i.useCallback)((0,d.Z)(h().mark(function a(){var c;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v(function(){return t({type:"approve_sending"}),b()});case 2:(null==(c=a.sent)?void 0:c.status)?(t({type:"approve_receipt"}),p({state:s,receipt:c})):t({type:"approve_error"});case 4:case"end":return a.stop()}},a)})),[b,p,s,v]),x=(0,i.useCallback)((0,d.Z)(h().mark(function a(){var b,d,e=arguments;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return b=e.length>0&& void 0!==e[0]?e[0]:{},a.next=3,v(function(){return t({type:"confirm_sending"}),c(b)});case 3:(null==(d=a.sent)?void 0:d.status)?(t({type:"confirm_receipt"}),g({state:s,receipt:d})):t({type:"confirm_error"});case 5:case"end":return a.stop()}},a)})),[c,t,g,s,v]);return(0,i.useEffect)(function(){q&&u.current&&u.current().then(function(a){a||t({type:"approve_receipt"})})},[q,u,t]),{isApproving:"loading"===s.approvalState,isApproved:"success"===s.approvalState,isConfirming:"loading"===s.confirmState,isConfirmed:"success"===s.confirmState,hasApproveFailed:"fail"===s.approvalState,hasConfirmFailed:"fail"===s.confirmState,handleApprove:w,handleConfirm:x}};b.Z=p},35831:function(a,b,c){c.d(b,{S:function(){return i}});var d,e=c(47568),f=c(34051),g=c.n(f),h=c(2593),i=(d=(0,e.Z)(g().mark(function a(b,c,d){var e,f,i,j=arguments;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e=j.length>3&& void 0!==j[3]?j[3]:0,a.prev=1,a.next=4,b.allowance(c,d);case 4:if(f=a.sent,!(i="number"==typeof e&&e>0||h.O$.isBigNumber(e)&&e.gt(0))){a.next=8;break}return a.abrupt("return",f.lt(e));case 8:return a.abrupt("return",f.lte(0));case 11:return a.prev=11,a.t0=a.catch(1),a.abrupt("return",!0);case 14:case"end":return a.stop()}},a,null,[[1,11]])})),function(a,b,c){return d.apply(this,arguments)})},97755:function(a,b,c){c.d(b,{L:function(){return r},n:function(){return s}});var d=c(47568),e=c(34051),f=c.n(e),g=c(67294),h=c(41609),i=c.n(h),j=c(9882),k=c(91186),l=c(16008),m=c(8100),n=c(75759),o=c(22408),p=c(74903),q=c(97119),r=function(a,b,c){var d=s(a,b,c,(0,j.t8)().data),e=d.nfts,f=d.isLoading,g=d.refresh;return{nfts:e,isLoading:f,refresh:g}},s=function(a,b,c,e){var h,j=(0,g.useRef)(null),r=(0,p.zP)(a);j.current&&r!==a&&j.current();var s=null==b?void 0:b.tokenId,t=null==b?void 0:null===(h=b.tokenId)|| void 0===h?void 0:h.toString(),u=null==b?void 0:b.collectionAddress,v=(0,g.useMemo)(function(){return s?{tokenId:t,collectionAddress:u,nftLocation:k.Fb.PROFILE}:null},[t,u,s]),w=(0,m.ZP)(!c&&!i()(e)&&(0,q.UJ)(a)?[a,"userNfts"]:null,(0,d.Z)(f().mark(function b(){return f().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.abrupt("return",(0,l.A8)(a,e,v));case 1:case"end":return b.stop()}},b)})),{use:[o.XS]}),x=w.status,y=w.data,z=w.mutate,A=w.resetLaggy;return j.current=A,{nfts:null!=y?y:[],isLoading:x!==n.iF.Fetched,refresh:z}}},54529:function(a,b,c){var d=c(26042),e=c(69396),f=c(99534),g=c(7297),h=c(85893),i=c(87379),j=c(20353),k=c(42289);function l(){var a=(0,g.Z)(["\n  cursor: ",";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  opacity: ",";\n"]);return l=function(){return a},a}function m(){var a=(0,g.Z)(["\n  align-items: center;\n  display: flex;\n  flex-grow: 1;\n  height: 80px;\n  padding: 8px 16px;\n"]);return m=function(){return a},a}function n(){var a=(0,g.Z)(["\n  margin-left: 16px;\n"]);return n=function(){return a},a}function o(){var a=(0,g.Z)(["\n  align-self: stretch;\n  background-image: url('","');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  flex: none;\n  width: 80px;\n"]);return o=function(){return a},a}var p=i.ZP.label.withConfig({componentId:"sc-f89ddf15-0"})(l(),function(a){return a.isDisabled?"not-allowed":"pointer"},function(a){return a.isDisabled?"0.6":"1"}),q=i.ZP.div.withConfig({componentId:"sc-f89ddf15-1"})(m()),r=i.ZP.div.withConfig({componentId:"sc-f89ddf15-2"})(n()),s=i.ZP.div.withConfig({componentId:"sc-f89ddf15-3"})(o(),function(a){return a.src}),t=function(a){var b=a.name,c=a.value,g=a.isChecked,i=void 0!==g&&g,l=a.image,m=a.onChange,n=a.disabled,o=a.children,t=(0,f.Z)(a,["name","value","isChecked","image","onChange","disabled","children"]);return(0,h.jsx)(j.Z,(0,e.Z)((0,d.Z)({isSuccess:i,isDisabled:n,mb:"16px"},t),{children:(0,h.jsxs)(p,{isDisabled:n,children:[(0,h.jsxs)(q,{children:[(0,h.jsx)(k.Z,{name:b,checked:i,value:c,onChange:function(a){return m(a.target.value)},disabled:n,style:{flex:"none"}}),(0,h.jsx)(r,{children:o})]}),(0,h.jsx)(s,{src:l})]})}))};b.Z=t}}])