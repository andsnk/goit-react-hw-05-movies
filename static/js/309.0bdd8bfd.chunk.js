"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[309],{713:function(e,r,t){t.d(r,{M1:function(){return o},Pg:function(){return i},WJ:function(){return u},gH:function(){return h},jP:function(){return f}});var n=t(861),a=t(757),s=t.n(a),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"8bf2aab2134fe939645810fc64f5815e",language:"en-US"};var u=function(){var e=(0,n.Z)(s().mark((function e(){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day");case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(r,"/credits"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(r,"/reviews"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?query=".concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},916:function(e,r,t){t.r(r),t.d(r,{default:function(){return k}});var n=t(861),a=t(439),s=t(757),c=t.n(s),u=t(791),i=t(87),o=t(689),f=t(713),h=t(883),p="SearchForm_searchWrap__JzBsr",l="SearchForm_searchForm__NsJpF",v="SearchForm_searchBtn__rp2a7",m="SearchForm_searchInput__h6REp",d=t(686),_=t.n(d),x=t(184),g=function(e){var r=e.onSubmit,t=(0,u.useState)(""),n=(0,a.Z)(t,2),s=n[0],c=n[1];return(0,x.jsx)("div",{className:p,children:(0,x.jsxs)("form",{className:l,onSubmit:function(e){if(e.preventDefault(),""===s.trim())return _().Notify.warning("Enter the text in the search field");r(s),c("")},children:[(0,x.jsx)("input",{className:m,type:"text",onChange:function(e){var r=e.target.value;c(r)},name:"title",value:s,placeholder:"Search for movies..."}),(0,x.jsx)("button",{className:v,type:"submit",children:"Search"})]})})},Z="MoviesSearch_searchMoviesWrap__fpMK2",S="MoviesSearch_searchMoviesTitle__LVNTG",b="MoviesSearch_searchMoviesItem__GuomZ",w="MoviesSearch_searchMoviesLink__u7J5b",k=function(){var e=(0,u.useState)(""),r=(0,a.Z)(e,2),t=r[0],s=r[1],p=(0,u.useState)([]),l=(0,a.Z)(p,2),v=l[0],m=l[1],d=(0,u.useState)(!1),k=(0,a.Z)(d,2),y=k[0],j=k[1],N=(0,i.lr)(),M=(0,a.Z)(N,2),F=M[0],J=M[1],C=(0,o.TH)(),E=F.get("search");return(0,u.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),s(""),e.next=5,(0,f.gH)(E);case 5:0===(r=e.sent).results.length&&(_().Notify.info("Movies not found"),m([])),m(r.results),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),s(e.t0.message),_().Notify.failure(e.t0.message);case 14:return e.prev=14,j(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,10,14,17]])})));return function(){return e.apply(this,arguments)}}();E&&e()}),[E]),(0,x.jsxs)("div",{children:[(0,x.jsx)(g,{onSubmit:function(e){J({search:e})}}),y&&(0,x.jsx)(h.Z,{}),E&&v.length>0&&!t?(0,x.jsxs)("div",{className:Z,children:[(0,x.jsx)("h2",{className:S,children:"Search Results"}),(0,x.jsx)("ul",{children:v.map((function(e){return(0,x.jsx)("li",{className:b,children:(0,x.jsx)(i.rU,{className:w,to:"".concat(e.id),state:{from:C},children:e.title})},e.id)}))})]}):null]})}}}]);
//# sourceMappingURL=309.0bdd8bfd.chunk.js.map