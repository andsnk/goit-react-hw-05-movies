"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[218],{713:function(e,n,t){t.d(n,{M1:function(){return u},Pg:function(){return c},WJ:function(){return o},gH:function(){return v},jP:function(){return l}});var r=t(861),a=t(757),i=t.n(a),s=t(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/",s.Z.defaults.params={api_key:"8bf2aab2134fe939645810fc64f5815e",language:"en-US"};var o=function(){var e=(0,r.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("trending/movie/day");case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(n));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(n,"/credits"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(n,"/reviews"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("search/movie?query=".concat(n));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},218:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(861),a=t(439),i=t(757),s=t.n(i),o=t(791),c=t(689),u=t(87),l=t(713),v=t(883),f={movieWrap:"MovieDetail_movieWrap__RUw4w",backBtn:"MovieDetail_backBtn__wjjt5",movieContainer:"MovieDetail_movieContainer__1wjdT",movieImg:"MovieDetail_movieImg__BVFGJ",movieInfoWrap:"MovieDetail_movieInfoWrap__crR0h",moviesTitle:"MovieDetail_moviesTitle__u4Grr",movieInfoList:"MovieDetail_movieInfoList__G8RJ9",movieInfoLink:"MovieDetail_movieInfoLink__VrqBg"},m=t(686),d=t.n(m),p=t(184),h=function(e){var n,t,i,m,h=e.baseImgUrl,x=(0,c.UO)().id,_=(0,o.useState)(null),j=(0,a.Z)(_,2),w=j[0],g=j[1],k=(0,o.useState)(!0),b=(0,a.Z)(k,2),I=b[0],Z=b[1],N=(0,o.useState)(""),y=(0,a.Z)(N,2),M=y[0],D=y[1],L=(0,c.TH)(),T=(0,c.s0)();if((0,o.useEffect)((function(){function e(){return(e=(0,r.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,D(""),e.next=4,(0,l.Pg)(x);case 4:n=e.sent,g(n),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),D(e.t0.message),d().Notify.failure(e.t0.message);case 12:return e.prev=12,Z(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[x]),I)return(0,p.jsx)(v.Z,{});if(!w)return(0,p.jsx)("div",{children:"Movie not found"});var U=w.poster_path,C=w.title,W=w.overview,B=w.release_date,G=w.vote_average,R=w.genres,S=new Date(B);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:f.movieWrap,children:[(0,p.jsx)("button",{className:f.backBtn,onClick:function(){var e,n;T(null!==(e=null===L||void 0===L||null===(n=L.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/")},children:"Go back"}),w&&!M&&(0,p.jsxs)("div",{className:f.movieContainer,children:[(0,p.jsx)("img",{className:f.movieImg,src:"".concat(h).concat(U),alt:C}),(0,p.jsxs)("div",{className:f.movieInfoWrap,children:[(0,p.jsxs)("h1",{className:f.moviesTitle,children:[C," ",(0,p.jsx)("span",{children:"(".concat(S.getFullYear(),")")})]}),(0,p.jsxs)("p",{children:["User Score: ",Math.round(10*G),"%"]}),(0,p.jsx)("h2",{className:f.moviesTitle,children:"Overview"}),(0,p.jsx)("p",{children:W}),(0,p.jsx)("h2",{className:f.moviesTitle,children:"Genres"}),(0,p.jsx)("ul",{children:R&&R.map((function(e){return(0,p.jsxs)("li",{children:["#",e.name]},e.id)}))}),(0,p.jsx)("h2",{className:f.moviesTitle,children:"Additional information"}),(0,p.jsxs)("ul",{className:f.movieInfoList,children:[(0,p.jsx)("li",{className:f.movieInfoItem,children:(0,p.jsx)(u.rU,{className:f.movieInfoLink,to:"cast",state:{from:null!==(n=null===L||void 0===L||null===(t=L.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/"},children:"Cast"})}),(0,p.jsx)("li",{className:f.movieInfoItem,children:(0,p.jsx)(u.rU,{className:f.movieInfoLink,to:"reviews",state:{from:null!==(i=null===L||void 0===L||null===(m=L.state)||void 0===m?void 0:m.from)&&void 0!==i?i:"/"},children:"Review"})})]})]})]})]}),(0,p.jsx)(c.j3,{})]})}}}]);
//# sourceMappingURL=218.6f8d8115.chunk.js.map