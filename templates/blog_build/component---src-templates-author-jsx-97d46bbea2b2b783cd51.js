(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"3rBm":function(e,t,n){"use strict";var a=n("VbXa"),r=n.n(a),o=(n("VSsl"),n("q1tI")),s=n.n(o),c=(n("gDMH"),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.author,t=e.name,n=e.image,a=e.url;return n?s.a.createElement("figure",{className:"author-image"},s.a.createElement("a",{className:"img",href:a,style:{backgroundImage:'url("'+n+'")'}},s.a.createElement("span",{className:"hidden"},t+"'s Picture"))):null},t}(s.a.Component));t.a=c},"9Ta5":function(e,t,n){},BAlc:function(e,t,n){"use strict";var a=n("VbXa"),r=n.n(a),o=n("q1tI"),s=n.n(o),c=n("TSYQ"),l=n.n(c),i=(n("D68J"),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=l()("author-meta",n);return s.a.createElement("div",{className:a},t)},t}(s.a.Component));t.a=i},D68J:function(e,t,n){},FacA:function(e,t,n){"use strict";var a=n("VbXa"),r=n.n(a),o=n("q1tI"),s=n.n(o),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.location;return e?s.a.createElement("span",{className:"author-location icon-location"},e):null},t}(s.a.Component);t.a=c},N7Jt:function(e,t,n){},cHO4:function(e,t,n){},cV30:function(e,t,n){"use strict";var a=n("VbXa"),r=n.n(a),o=n("q1tI"),s=n.n(o),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.url;return e?s.a.createElement("span",{className:"author-link icon-link"},s.a.createElement("a",{href:e},e)):null},t}(s.a.Component);t.a=c},gDMH:function(e,t,n){},nHyW:function(e,t,n){"use strict";n.r(t);var a=n("VbXa"),r=n.n(a),o=(n("VSsl"),n("q1tI")),s=n.n(o),c=n("TJpk"),l=n.n(c),i=n("1wty"),u=n("IpnI"),p=n.n(u),m=n("rrFl"),h=n("KcPW"),f=n("xBKb"),d=n("Cg5c"),E=n("IMsF"),g=n("E+KP"),y=n("3rBm"),N=n("TSYQ"),v=n.n(N),b=(n("N7Jt"),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=v()("author-profile",n);return s.a.createElement("section",{className:a},t)},t}(s.a.Component)),C=(n("9Ta5"),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.name;return e?s.a.createElement("h1",{className:"author-title"},e):null},t}(s.a.Component)),k=(n("cHO4"),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.bio;return e?s.a.createElement("h2",{className:"author-bio"},e):null},t}(s.a.Component)),w=n("BAlc"),J=n("FacA"),M=n("cV30"),O=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.postEdges;return s.a.createElement("span",{className:"author-stats"},s.a.createElement("i",{className:"icon-stats"})," ",e?e.length>1?e.length+" posts":e.length+" post":"No posts")},t}(s.a.Component),A=n("s4cb"),I=n("TwUq"),V=n("L12J"),T=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={menuOpen:!1},t.handleOnClick=function(e){e.stopPropagation(),t.state.menuOpen?t.closeMenu():t.openMenu()},t.handleOnClose=function(e){e.stopPropagation(),t.closeMenu()},t.openMenu=function(){t.setState({menuOpen:!0})},t.closeMenu=function(){t.setState({menuOpen:!1})},t}return r()(t,e),t.prototype.render=function(){var e=this.props.pageContext,t=e.author,n=e.cover,a=this.props.data.allMarkdownRemark&&this.props.data.allMarkdownRemark.edges?this.props.data.allMarkdownRemark.edges:[],r=this.props.data.allAuthorsJson&&this.props.data.allAuthorsJson.edges?this.props.data.allAuthorsJson.edges:[],o=function(){return r[0].node};return s.a.createElement(V.a,{location:this.props.location},s.a.createElement(m.a,{className:"author-template",isOpen:this.state.menuOpen},s.a.createElement(l.a,{title:'Posts by "'+t+'" | '+p.a.siteTitle}),s.a.createElement(h.a,{config:p.a,onClose:this.handleOnClose}),s.a.createElement(f.a,null,s.a.createElement(d.a,{className:"author-head",cover:n},s.a.createElement(E.a,null,s.a.createElement(g.a,{logo:p.a.siteLogo,title:p.a.siteTitle}))),s.a.createElement(b,{className:"inner"},s.a.createElement(y.a,{author:o()}),s.a.createElement(C,{name:o().name}),s.a.createElement(k,{bio:o().bio}),s.a.createElement(w.a,null,s.a.createElement(J.a,{location:o().location}),s.a.createElement(M.a,{url:o().url})),s.a.createElement(O,{postEdges:a})),s.a.createElement(i.a,{postEdges:a,postAuthors:r}),s.a.createElement(I.a,{urls:o().socialUrls}),s.a.createElement(A.a,{copyright:p.a.copyright,promoteGatsby:p.a.promoteGatsby}))))},t}(s.a.Component);t.default=T}}]);
//# sourceMappingURL=component---src-templates-author-jsx-97d46bbea2b2b783cd51.js.map