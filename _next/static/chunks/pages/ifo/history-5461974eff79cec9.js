(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9533],{73779:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ifo/history",function(){return c(63088)}])},55209:function(a,b,c){"use strict";var d=c(7297),e=c(87379),f=c(57247);function g(){var a=(0,d.Z)(["\n  background: ",";\n  border-radius: ",";\n  ","\n"]);return g=function(){return a},a}var h=e.ZP.div.withConfig({componentId:"sc-e97edbbd-0"}).withConfig({componentId:"sc-206fd2b9-0"})(g(),function(a){var b=a.theme,c=a.variant;return b.card.cardHeaderBackground[void 0===c?"default":c]},function(a){var b=a.theme;return"".concat(b.radii.card," ").concat(b.radii.card," 0 0")},f.Dh);h.defaultProps={p:"24px"},b.Z=h},95934:function(a,b,c){"use strict";c.d(b,{h2:function(){return n},hl:function(){return l},m5:function(){return m}});var d=c(7297),e=c(87379),f=c(44147);function g(){var a=(0,d.Z)(["\n  width: ",";\n  padding: ",";\n  border: ",";\n  border-radius: ",";\n  background-color: ",";\n"]);return g=function(){return a},a}function h(){var a=(0,d.Z)(["\n  border: 1px solid ",";\n  background-color: ",";\n"]);return h=function(){return a},a}function i(){var a=(0,d.Z)(["\n  border: 1px solid ",";\n  background-color: ",";\n"]);return i=function(){return a},a}function j(){var a=(0,d.Z)(["\n  background-color: ",";\n"]);return j=function(){return a},a}var k=(0,e.ZP)(f.Z).withConfig({componentId:"sc-21be8dee-0"})(g(),function(a){var b=a.width;return null!=b?b:"100%"},function(a){var b=a.padding;return null!=b?b:"1.25rem"},function(a){return a.border},function(a){var b=a.borderRadius;return null!=b?b:"16px"},function(a){return a.theme.colors.background});b.ZP=k;var l=(0,e.ZP)(k).withConfig({componentId:"sc-21be8dee-1"})(h(),function(a){return a.theme.colors.cardBorder},function(a){return a.theme.colors.backgroundAlt}),m=(0,e.ZP)(k).withConfig({componentId:"sc-21be8dee-2"})(i(),function(a){return a.theme.colors.cardBorder},function(a){return a.theme.colors.background}),n=(0,e.ZP)(k).withConfig({componentId:"sc-21be8dee-3"})(j(),function(a){return a.theme.colors.dropdown})},49923:function(a,b,c){"use strict";var d=c(7297),e=c(87379);function f(){var a=(0,d.Z)(["\n  border: 1px solid ",";\n  width: 100%;\n"]);return f=function(){return a},a}var g=e.ZP.hr.withConfig({componentId:"sc-d9299de2-0"})(f(),function(a){return a.theme.colors.cardBorder});b.Z=g},39023:function(a,b,c){"use strict";c.d(b,{O:function(){return l},q:function(){return k}});var d=c(26042),e=c(99534),f=c(85893),g=c(41768),h=c(16789),i=c(46472),j=function(a){var b=(null==a?void 0:a.isNative)?a.wrapped.address:a.address;return a.chainId,i.a_.BSC,"/images/tokens/".concat(b,".png")},k=function(a){var b=a.primaryToken,c=a.secondaryToken,h=(0,e.Z)(a,["primaryToken","secondaryToken"]);return(0,f.jsx)(g.Z,(0,d.Z)({primarySrc:j(b),secondarySrc:j(c)},h))},l=function(a){var b=a.token,c=(0,e.Z)(a,["token"]);return(0,f.jsx)(h.Z,(0,d.Z)({src:j(b)},c))}},63088:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return ac}});var d=c(85893),e=c(79637),f=c(42918),g=c(44305),h=c(47568),i=c(14924),j=c(26042),k=c(69396),l=c(10253),m=c(34051),n=c.n(m),o=c(67294),p=c(44431),q=c.n(p),r=c(97478),s=c(75759),t=c(48674),u=c(87318),v=c(9796),w=c(70950),x=c(81379),y=function(a){var b,c=a.address,d=a.releaseBlockNumber,e=(0,t.w5)(a.currency.symbol),f=(0,o.useState)((0,i.Z)({isInitialized:!1,status:"idle",blocksRemaining:0,secondsUntilStart:0,progress:5,secondsUntilEnd:0,startBlockNum:0,endBlockNum:0,numberPoints:null,thresholdPoints:void 0},s.vr.poolUnlimited,{raisingAmountPool:u.HW,totalAmountPool:u.HW,offeringAmountPool:u.HW,limitPerUserInLP:u.HW,taxRate:0,sumTaxesOverflow:u.HW})),g=f[0],m=f[1],p=(0,o.useCallback)((b=(0,h.Z)(n().mark(function a(b){var e,f,g,h,o,p,t,y,z,A,B,C;return n().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e=["startBlock","endBlock","raisingAmount","totalAmount"].map(function(a){return{address:c,name:a}}),a.t0=l.Z,a.next=4,(0,v.v)({abi:w,calls:e});case 4:a.t1=a.sent,g=(f=(0,a.t0)(a.t1,4))[0],h=f[1],o=f[2],p=f[3],t=g?g[0].toNumber():0,y=h?h[0].toNumber():0,z=(0,x.l)(b,t,y),A=y-t,B=y-b,C=b>t?(b-t)/A*100:(b-d)/(t-d)*100,m(function(a){return(0,k.Z)((0,j.Z)({},a),(0,i.Z)({isInitialized:!0,status:z,blocksRemaining:B,secondsUntilStart:(t-b)*r.hJ,progress:C,secondsUntilEnd:B*r.hJ,startBlockNum:t,endBlockNum:y},s.vr.poolUnlimited,(0,k.Z)((0,j.Z)({},a.poolUnlimited),{raisingAmountPool:o?new(q())(o[0].toString()):u.HW,totalAmountPool:p?new(q())(p[0].toString()):u.HW})))});case 17:case"end":return a.stop()}},a)})),function(a){return b.apply(this,arguments)}),[c,d]);return(0,k.Z)((0,j.Z)({},g),{currencyPriceInUSD:e,fetchIfoData:p})},z=y,A=c(29315),B=c(36963),C=c(65585),D=(0,i.Z)({isInitialized:!1},s.vr.poolUnlimited,{amountTokenCommittedInLP:u.HW,hasClaimed:!1,isPendingTx:!1,offeringAmountInToken:u.HW,refundingAmountInLP:u.HW,taxAmountInLP:u.HW}),E=function(a){var b=(0,o.useState)(D),c=b[0],d=b[1],e=a.address,f=a.currency,g=c.poolUnlimited,m=(0,A.Ge)().account,p=(0,B.nc)(e),r=(0,B.X_)(f.address,!1),t=(0,C.Z)(r,e,g.isPendingTx),x=function(a){return d(function(b){return(0,k.Z)((0,j.Z)({},b),(0,i.Z)({},s.vr.poolUnlimited,(0,k.Z)((0,j.Z)({},b.poolUnlimited),{isPendingTx:a})))})},y=function(){d(function(a){return(0,k.Z)((0,j.Z)({},a),(0,i.Z)({},s.vr.poolUnlimited,(0,k.Z)((0,j.Z)({},a.poolUnlimited),{hasClaimed:!0})))})},z=(0,o.useCallback)((0,h.Z)(n().mark(function a(){var b,c,f,g,h,o;return n().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return b=["getOfferingAmount","userInfo","getRefundingAmount"].map(function(a){return{address:e,name:a,params:[m]}}),a.t0=l.Z,a.next=4,(0,v.v)({abi:w,calls:b});case 4:a.t1=a.sent,f=(c=(0,a.t0)(a.t1,3))[0],g=c[1],h=c[2],o=g?{amount:new(q())(g.amount.toString()),claimed:g.claimed}:{amount:u.HW,claimed:!1},d(function(a){return(0,i.Z)({isInitialized:!0},s.vr.poolUnlimited,(0,k.Z)((0,j.Z)({},a.poolUnlimited),{amountTokenCommittedInLP:o.amount,hasClaimed:o.claimed,offeringAmountInToken:f?new(q())(f[0].toString()):u.HW,refundingAmountInLP:h?new(q())(h[0].toString()):u.HW}))});case 11:case"end":return a.stop()}},a)})),[m,e]),E=(0,o.useCallback)(function(){d(D)},[]);return(0,k.Z)((0,j.Z)({},c),{allowance:t,contract:p,setPendingTx:x,setIsClaimed:y,fetchIfoData:z,resetIfoData:E})},F=E,G=c(64468),H=function(a){var b=a.ifo,c=z(b),e=F(b);return(0,d.jsx)(G.ZP,{ifo:b,publicIfoData:c,walletIfoData:e})},I=H,J=c(4554),K=c(22522),L=c(20335),M=L.xs.from(1e10),N=function(a){return{raisingAmountPool:a?new(q())(a[0].toString()):u.HW,offeringAmountPool:a?new(q())(a[1].toString()):u.HW,limitPerUserInLP:a?new(q())(a[2].toString()):u.HW,hasTax:!!a&&a[3],totalAmountPool:a?new(q())(a[4].toString()):u.HW,sumTaxesOverflow:a?new(q())(a[5].toString()):u.HW}},O=function(a){var b,c=a.address,d=a.releaseBlockNumber,e=(0,t.Iu)(),f=(0,t.w5)(a.currency.symbol),g=a.currency===K.ds.cake?e:f,i=(0,o.useState)({isInitialized:!1,status:"idle",blocksRemaining:0,secondsUntilStart:0,progress:5,secondsUntilEnd:0,poolBasic:{raisingAmountPool:u.HW,offeringAmountPool:u.HW,limitPerUserInLP:u.HW,taxRate:0,totalAmountPool:u.HW,sumTaxesOverflow:u.HW},poolUnlimited:{raisingAmountPool:u.HW,offeringAmountPool:u.HW,limitPerUserInLP:u.HW,taxRate:0,totalAmountPool:u.HW,sumTaxesOverflow:u.HW},thresholdPoints:void 0,startBlockNum:0,endBlockNum:0,numberPoints:0}),m=i[0],p=i[1],q=(0,o.useCallback)((b=(0,h.Z)(n().mark(function a(b){var e,f,g,h,i,m,o,q,s,t,u,w,y,z,A,B,C;return n().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=l.Z,a.next=3,(0,v.v)({abi:J,calls:[{address:c,name:"startBlock"},{address:c,name:"endBlock"},{address:c,name:"viewPoolInformation",params:[0]},{address:c,name:"viewPoolInformation",params:[1]},{address:c,name:"viewPoolTaxRateOverflow",params:[1]},{address:c,name:"numberPoints"},{address:c,name:"thresholdPoints"},].filter(Boolean)});case 3:a.t1=a.sent,f=(e=(0,a.t0)(a.t1,7))[0],g=e[1],h=e[2],i=e[3],m=e[4],o=e[5],q=e[6],s=N(h),t=N(i),u=f?f[0].toNumber():0,w=g?g[0].toNumber():0,y=m?L.xs.from(m[0]).divUnsafe(M).toUnsafeFloat():0,z=(0,x.l)(b,u,w),A=w-u,B=w-b,C=b>u?(b-u)/A*100:(b-d)/(u-d)*100,p(function(a){return(0,k.Z)((0,j.Z)({},a),{isInitialized:!0,secondsUntilEnd:B*r.hJ,secondsUntilStart:(u-b)*r.hJ,poolBasic:(0,k.Z)((0,j.Z)({},s),{taxRate:0}),poolUnlimited:(0,k.Z)((0,j.Z)({},t),{taxRate:y}),status:z,progress:C,blocksRemaining:B,startBlockNum:u,endBlockNum:w,thresholdPoints:q&&q[0],numberPoints:o?o[0].toNumber():0})});case 22:case"end":return a.stop()}},a)})),function(a){return b.apply(this,arguments)}),[d,c]);return(0,k.Z)((0,j.Z)({},m),{currencyPriceInUSD:g,fetchIfoData:q})},P=O,Q={isInitialized:!1,poolBasic:{amountTokenCommittedInLP:u.HW,offeringAmountInToken:u.HW,refundingAmountInLP:u.HW,taxAmountInLP:u.HW,hasClaimed:!1,isPendingTx:!1},poolUnlimited:{amountTokenCommittedInLP:u.HW,offeringAmountInToken:u.HW,refundingAmountInLP:u.HW,taxAmountInLP:u.HW,hasClaimed:!1,isPendingTx:!1}},R=function(a){var b=(0,o.useState)(Q),c=b[0],d=b[1],e=a.address,f=a.currency,g=(0,A.Ge)().account,m=(0,B.gx)(e),p=(0,B.X_)(f.address,!1),r=(0,C.Z)(p,e),s=function(a,b){return d(function(c){return(0,k.Z)((0,j.Z)({},c),(0,i.Z)({},b,(0,k.Z)((0,j.Z)({},c[b]),{isPendingTx:a})))})},t=function(a){d(function(b){return(0,k.Z)((0,j.Z)({},b),(0,i.Z)({},a,(0,k.Z)((0,j.Z)({},b[a]),{hasClaimed:!0})))})},u=(0,o.useCallback)((0,h.Z)(n().mark(function a(){var b,c,f,h;return n().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return b=["viewUserInfo","viewUserOfferingAndRefundingAmountsForPools"].map(function(a){return{address:e,name:a,params:[g,[0,1]]}}),a.t0=l.Z,a.next=4,(0,v.v)({abi:J,calls:b});case 4:a.t1=a.sent,f=(c=(0,a.t0)(a.t1,2))[0],h=c[1],d(function(a){return(0,k.Z)((0,j.Z)({},a),{isInitialized:!0,poolBasic:(0,k.Z)((0,j.Z)({},a.poolBasic),{amountTokenCommittedInLP:new(q())(f[0][0].toString()),offeringAmountInToken:new(q())(h[0][0][0].toString()),refundingAmountInLP:new(q())(h[0][0][1].toString()),taxAmountInLP:new(q())(h[0][0][2].toString()),hasClaimed:f[1][0]}),poolUnlimited:(0,k.Z)((0,j.Z)({},a.poolUnlimited),{amountTokenCommittedInLP:new(q())(f[0][1].toString()),offeringAmountInToken:new(q())(h[0][1][0].toString()),refundingAmountInLP:new(q())(h[0][1][1].toString()),taxAmountInLP:new(q())(h[0][1][2].toString()),hasClaimed:f[1][1]})})});case 9:case"end":return a.stop()}},a)})),[g,e]),w=(0,o.useCallback)(function(){d((0,j.Z)({},Q))},[]);return(0,k.Z)((0,j.Z)({},c),{allowance:r,contract:m,setPendingTx:s,setIsClaimed:t,fetchIfoData:u,resetIfoData:w})},S=R,T=function(a){var b=a.ifo,c=P(b),e=S(b);return(0,d.jsx)(G.ZP,{ifo:b,publicIfoData:c,walletIfoData:e})},U=T,V=c(50258),W=c(47228),X=function(a){var b=a.ifo,c=(0,V.Z)(b),e=(0,W.Z)(b);return(0,d.jsx)(G.ZP,{ifo:b,publicIfoData:c,walletIfoData:e})},Y=X,Z=c(80099),$=f.Q2.filter(function(a){return!a.isActive}),_=function(){return(0,d.jsx)(g.Z,{children:(0,d.jsx)(Z.Z,{maxWidth:"736px",m:"auto",width:"100%",id:"past-ifos",py:["24px","24px","40px"],children:$.map(function(a){switch(a.version){case 1:return(0,d.jsx)(I,{ifo:a},a.id);case 2:return(0,d.jsx)(U,{ifo:a},a.id);case 3:case 3.1:case 3.2:return(0,d.jsx)(Y,{ifo:a},a.id);default:return null}})})})},aa=_,ab=function(){return(0,d.jsx)(aa,{})};ab.Layout=e.t;var ac=ab},13471:function(a,b){"use strict";var c=function(a){var b=Math.abs(a),c={years:0,months:0,days:0,hours:0,minutes:0,seconds:0};return b>=31557600&&(c.years=Math.floor(b/31557600),b-=31557600*c.years),b>=2629800&&(c.months=Math.floor(b/2629800),b-=2629800*c.months),b>=86400&&(c.days=Math.floor(b/86400),b-=86400*c.days),b>=3600&&(c.hours=Math.floor(b/3600),b-=3600*c.hours),b>=60&&(c.minutes=Math.floor(b/60),b-=60*c.minutes),c.seconds=b,c};b.Z=c}},function(a){a.O(0,[2298,7978,8451,2128,368,2766,9774,2888,179],function(){var b;return a(a.s=73779)}),_N_E=a.O()}])