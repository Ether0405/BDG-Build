(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4820],{5353:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return c(12525)}])},12525:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return z}});var d=c(47568),e=c(34051),f=c.n(e),g=c(85893),h=c(92876),i=c(38641),j=c(62844);function k(a){let b,c=a[0],d=1;for(;d<a.length;){var e=a[d],f=a[d+1];if(d+=2,("optionalAccess"===e||"optionalCall"===e)&&null==c)return;"access"===e||"optionalAccess"===e?(b=c,c=f(c)):("call"===e||"optionalCall"===e)&&(c=f((...a)=>c.call(b,...a)),b=void 0)}return c}var l=c(67597),m=c(34754),n=c(26956),o={ip:!1,request:!0,transaction:!0,user:!0},p=["cookies","data","headers","method","query_string","url"],q=["id","username","email"];function r(a,b={}){var c=a.method&&a.method.toUpperCase();let d="",e="url";b.customRoute||a.route?(d=b.customRoute||`${a.baseUrl||""}${a.route&&a.route.path}`,e="route"):(a.originalUrl||a.url)&&(d=(0,n.rt)(a.originalUrl||a.url||""));let f="";return b.method&&c&&(f+=c),b.method&&b.path&&(f+=" "),b.path&&d&&(f+=d),[f,e]}function s(a,b){let{include:c=p,deps:d}=b||{};var e={},f=a.headers||{},g=a.method,h=a.hostname||a.host||f.host||"<no host>",i="https"===a.protocol||a.socket&&a.socket.encrypted?"https":"http",j=a.originalUrl||a.url||"",k=`${i}://${h}${j}`;return c.forEach(b=>{switch(b){case"headers":e.headers=f;break;case"method":e.method=g;break;case"url":e.url=k;break;case"cookies":e.cookies=a.cookies||f.cookie&&d&&d.cookie&&d.cookie.parse(f.cookie)||{};break;case"query_string":e.query_string=t(a,d);break;case"data":if("GET"===g||"HEAD"===g)break;void 0!==a.body&&(e.data=(0,l.HD)(a.body)?a.body:JSON.stringify((0,m.Fv)(a.body)));break;default:({}).hasOwnProperty.call(a,b)&&(e[b]=a[b])}}),e}function t(a,b){let c=a.originalUrl||a.url||"";if(c)return c.startsWith("/")&&(c=`http://dogs.are.great${c}`),a.query||new URL(c).search.replace("?","")||b&&b.url&&b.url.parse(c).query||void 0}async function u(a){let{req:b,res:c,err:d}=a;var e,f,g=c&&c.statusCode||a.statusCode;if(g&&g<500||!a.pathname)return Promise.resolve();(0,h.$e)(a=>{a.addEventProcessor(a=>((0,j.EG)(a,{type:"instrument",handled:!0,data:{function:"_error.getInitialProps"}}),a)),b&&a.addEventProcessor(a=>(function(a,b,c){var d={...o,...k([c,"optionalAccess",a=>a.include])};if(d.request){var e=Array.isArray(d.request)?s(b,{include:d.request,deps:k([c,"optionalAccess",a=>a.deps])}):s(b,{deps:k([c,"optionalAccess",a=>a.deps])});a.request={...a.request,...e}}if(d.user){var f,g,h,i=b.user&&(0,l.PO)(b.user)?(f=b.user,g=d.user,h={},(Array.isArray(g)?g:q).forEach(a=>{f&&a in f&&(h[a]=f[a])}),h):{};Object.keys(i).length&&(a.user={...a.user,...i})}if(d.ip){var j=b.ip||b.socket&&b.socket.remoteAddress;j&&(a.user={...a.user,ip_address:j})}return d.transaction&&!a.transaction&&(a.transaction=function(a,b){switch(b){case"path":return r(a,{path:!0})[0];case"handler":return a.route&&a.route.stack&&a.route.stack[0]&&a.route.stack[0].name||"<anonymous>";default:return r(a,{path:!0,method:!0})[0]}}(b,d.transaction)),a})(a,b)),(0,h.Tb)(d||`_error.js called with falsy error (${d})`)}),await ((f=(0,i.Gd)().getClient())?f.flush(2e3):Promise.resolve(!1))}var v,w=c(12918),x=c(28415),y=function(a){return(0,g.jsx)(x.Z,{statusCode:a.statusCode})};y.getInitialProps=(v=(0,d.Z)(f().mark(function a(b){return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u(b);case 2:return a.abrupt("return",w.default.getInitialProps(b));case 3:case"end":return a.stop()}},a)})),function(a){return v.apply(this,arguments)});var z=y},28415:function(a,b,c){"use strict";var d=c(7297),e=c(85893),f=c(87379),g=c(67952),h=c(69589),i=c(62077),j=c(98553),k=c(27553),l=c(52775),m=c(41664),n=c.n(m);function o(){var a=(0,d.Z)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 64px);\n  justify-content: center;\n"]);return o=function(){return a},a}var p=f.ZP.div.withConfig({componentId:"sc-27d142db-0"})(o()),q=function(a){var b=a.statusCode,c=(0,l.$G)().t;return(0,e.jsx)(k.Z,{children:(0,e.jsxs)(p,{children:[(0,e.jsx)(g.Z,{width:"64px",mb:"8px"}),(0,e.jsx)(h.Z,{scale:"xxl",children:void 0===b?404:b}),(0,e.jsx)(i.Z,{mb:"16px",children:c("Oops, page not found.")}),(0,e.jsx)(n(),{href:"/",passHref:!0,children:(0,e.jsx)(j.Z,{as:"a",scale:"sm",children:c("Back Home")})})]})})};b.Z=q},12918:function(a,b,c){a.exports=c(61063)}},function(a){a.O(0,[9774,2888,179],function(){var b;return a(a.s=5353)}),_N_E=a.O()}])