(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7148],{54290:function(a,b,c){var d=c(6557);a.exports=function(a){return"function"==typeof a?a:d}},98913:function(a,b,c){var d=c(22545),e=c(54290),f=c(40554),g=4294967295,h=Math.min;a.exports=function(a,b){if((a=f(a))<1||a>9007199254740991)return[];var c=g,i=h(a,g);b=e(b),a-=g;for(var j=d(i,b);++c<a;)b(c);return j}},95332:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile/[accountAddress]",function(){return c(62524)}])},62524:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return F}});var d=c(47568),e=c(34051),f=c.n(e),g=c(85893),h=c(29315),i=c(11163),j=c(72007),k=c(355),l=c(89760),m=c(75943),n=c(62077),o=c(66260),p=c(52775),q=c(10477),r=c(65053),s=c(66594),t=function(a){var b=a.nfts,c=a.isLoading,d=(0,p.$G)().t;return(0,g.jsx)(g.Fragment,{children:0!==b.length||c?b.length>0?(0,g.jsx)(o.Z,{gridGap:"16px",gridTemplateColumns:["1fr","repeat(2, 1fr)","repeat(3, 1fr)",null,"repeat(4, 1fr)"],alignItems:"start",children:b.map(function(a){var b=a.marketData;return(0,g.jsx)(q.ts,{nft:a,currentAskPrice:(null==b?void 0:b.currentAskPrice)&&(null==b?void 0:b.isTradable)&&parseFloat(null==b?void 0:b.currentAskPrice)},"".concat(null==a?void 0:a.tokenId,"-").concat(null==a?void 0:a.collectionName))})}):(0,g.jsx)(r.Z,{}):(0,g.jsxs)(m.Z,{p:"24px",flexDirection:"column",alignItems:"center",children:[(0,g.jsx)(s.Z,{}),(0,g.jsx)(n.Z,{pt:"8px",bold:!0,children:d("No NFTs found")})]})})},u=t,v=c(10253),w=c(67294),x=c(21812),y=c(91186),z=c(83228),A=c(3064),B=function(a){var b=a.nfts,c=a.isLoading,d=a.onSuccessSale,e=a.onSuccessEditProfile,f=(0,w.useState)({nft:null,location:null}),h=f[0],i=f[1],j=(0,w.useState)({nft:null,location:null,variant:null}),k=j[0],l=j[1],t=(0,v.Z)((0,x.Z)((0,g.jsx)(z.Z,{nft:h.nft,onSuccess:e})),1),u=t[0],B=(0,v.Z)((0,x.Z)((0,g.jsx)(A.Z,{variant:k.variant,nftToSell:k.nft,onSuccessSale:d,onSuccessEditProfile:e})),1),C=B[0],D=(0,p.$G)().t,E=function(a,b){switch(b){case y.Fb.PROFILE:i({nft:a,location:b});break;case y.Fb.WALLET:l({nft:a,location:b,variant:"sell"});break;case y.Fb.FORSALE:l({nft:a,location:b,variant:"edit"})}};return(0,w.useEffect)(function(){h.nft&&u()},[h]),(0,w.useEffect)(function(){k.nft&&C()},[k]),(0,g.jsx)(g.Fragment,{children:0!==b.length||c?b.length>0?(0,g.jsx)(o.Z,{gridGap:"16px",gridTemplateColumns:["1fr","repeat(2, 1fr)","repeat(3, 1fr)",null,"repeat(4, 1fr)"],alignItems:"start",children:b.map(function(a){var b=a.marketData,c=a.location;return(0,g.jsx)(q.VK,{isUserNft:!0,onClick:function(){return E(a,c)},nft:a,currentAskPrice:(null==b?void 0:b.currentAskPrice)&&(null==b?void 0:b.isTradable)&&parseFloat(null==b?void 0:b.currentAskPrice),nftLocation:c},"".concat(null==a?void 0:a.tokenId,"-").concat(null==a?void 0:a.collectionName))})}):(0,g.jsx)(r.Z,{}):(0,g.jsxs)(m.Z,{p:"24px",flexDirection:"column",alignItems:"center",children:[(0,g.jsx)(s.Z,{}),(0,g.jsx)(n.Z,{pt:"8px",bold:!0,children:D("No NFTs found")})]})})},C=B,D=c(97755),E=function(){var a=(0,h.Ge)().account,b=(0,i.useRouter)().query.accountAddress,c=(null==a?void 0:a.toLowerCase())===(null==b?void 0:b.toLowerCase()),e=(0,j.lC)(b,{revalidateIfStale:!0,revalidateOnFocus:!0,revalidateOnReconnect:!0}),k=e.profile,m=e.isValidating,n=e.refresh,o=(0,D.L)(b,k,m),p=o.nfts,q=o.isLoading,r=o.refresh;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(l.Z,{}),c?(0,g.jsx)(C,{nfts:p,isLoading:q,onSuccessSale:r,onSuccessEditProfile:(0,d.Z)(f().mark(function a(){return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n();case 2:r();case 3:case"end":return a.stop()}},a)}))}):(0,g.jsx)(u,{nfts:p,isLoading:q})]})};E.Layout=k.K;var F=E},66594:function(a,b,c){"use strict";var d=c(7297),e=c(87379);function f(){var a=(0,d.Z)(["\n  background: url('/images/nfts/no-profile-md.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  position: relative;\n  width: 96px;\n  height: 96px;\n\n  & > img {\n    border-radius: 50%;\n  }\n"]);return f=function(){return a},a}var g=e.ZP.div.withConfig({componentId:"sc-9689af5c-0"})(f());b.Z=g},2390:function(a,b,c){"use strict";var d=c(7297),e=c(46852),f=c(87379);function g(){var a=(0,d.Z)(["\n  background-color: transparent;\n  border-bottom: 1px "," solid;\n\n  > div {\n    background-color: transparent;\n  }\n"]);return g=function(){return a},a}var h=(0,f.ZP)(e.Z).withConfig({componentId:"sc-8f8e612f-0"})(g(),function(a){return a.theme.colors.cardBorder});b.Z=h},65053:function(a,b,c){"use strict";var d=c(26042),e=c(69396),f=c(99534),g=c(85893),h=c(44147),i=c(62685),j=c(66260),k=c(98913),l=c.n(k),m=function(a){return(0,g.jsxs)(h.Z,(0,e.Z)((0,d.Z)({},a),{children:[(0,g.jsx)(i.Z,{height:"258px",mb:"8px"}),(0,g.jsx)(i.Z,{width:"30%",mb:"4px"}),(0,g.jsx)(i.Z,{width:"45%",mb:"16px"}),(0,g.jsx)(i.Z,{})]}))},n=function(a){var b=a.numItems,c=(0,f.Z)(a,["numItems"]);return(0,g.jsx)(j.Z,(0,e.Z)((0,d.Z)({gridGap:"16px",gridTemplateColumns:["1fr",null,null,"repeat(4, 1fr)"]},c),{children:l()(void 0===b?12:b).map(function(a){return(0,g.jsx)(m,{},a)})}))};b.Z=n},89760:function(a,b,c){"use strict";var d=c(85893),e=c(52775),f=c(11163),g=c(2390),h=function(){var a=(0,e.$G)().t,b=(0,f.useRouter)(),c=b.query.accountAddress,h=b.asPath,i=[{label:a("Items"),href:"/profile/".concat(c)},{label:a("Activity"),href:"/profile/".concat(c,"/activity")},];return(0,d.jsx)(g.Z,{items:i,activeItem:h,justifyContent:"flex-start",mb:"18px"})};b.Z=h}},function(a){a.O(0,[8639,8451,4134,4638,9636,6976,965,355,63,9774,2888,179],function(){var b;return a(a.s=95332)}),_N_E=a.O()}])