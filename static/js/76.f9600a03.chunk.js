"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{713:function(t,e,r){r.d(e,{M1:function(){return o},Pg:function(){return i},WJ:function(){return u},gH:function(){return p},jP:function(){return f}});var n=r(861),a=r(757),c=r.n(a),s=r(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/",s.Z.defaults.params={api_key:"8bf2aab2134fe939645810fc64f5815e",language:"en-US"};var u=function(){var t=(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("trending/movie/day");case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("movie/".concat(e));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("movie/".concat(e,"/credits"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("movie/".concat(e,"/reviews"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("search/movie?query=".concat(e));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},76:function(t,e,r){r.r(e),r.d(e,{default:function(){return g}});var n=r(861),a=r(439),c=r(757),s=r.n(c),u=r(713),i=r(883),o=r(791),f=r(689),p="Cast_castWrap__C23u0",h="Cast_castList__ARoWn",v="Cast_castItem__-Jcfe",l="Cast_castInfoWrap__xH4Pi",d="Cast_castName__-i08u",m=r(686),x=r.n(m),_=r(184),g=function(t){var e=t.baseImgUrl,r=(0,f.UO)().id,c=(0,o.useState)([]),m=(0,a.Z)(c,2),g=m[0],w=m[1],Z=(0,o.useState)(!1),k=(0,a.Z)(Z,2),b=k[0],y=k[1],j=(0,o.useState)(""),C=(0,a.Z)(j,2),N=C[0],W=C[1];return(0,o.useEffect)((function(){function t(){return(t=(0,n.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,y(!0),W(""),t.next=5,(0,u.M1)(r);case 5:e=t.sent,w(e.cast),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),x().Notify.failure(t.t0.message);case 12:return t.prev=12,y(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[r]),(0,_.jsxs)("div",{className:p,children:[b&&(0,_.jsx)(i.Z,{}),N&&{error:N},(0,_.jsx)("ul",{className:h,children:0===g.length?(0,_.jsx)("p",{children:"We don\u2019t have any casts for this movie."}):g.map((function(t){var r=t.id,n=t.name,a=t.character,c=t.profile_path,s=c?"".concat(e).concat(c):"".concat("/goit-react-hw-05-movies","/notfound.jpg");return(0,_.jsxs)("li",{className:v,children:[(0,_.jsx)("img",{src:s,alt:n,height:"300px"}),(0,_.jsxs)("div",{className:l,children:[(0,_.jsx)("p",{className:d,children:n}),(0,_.jsxs)("p",{children:["Character: ",a]})]})]},r)}))})]})}}}]);
//# sourceMappingURL=76.f9600a03.chunk.js.map