/*! For license information please see 88.e8981bf8.chunk.js.LICENSE.txt */
(self.webpackChunkkittens_website=self.webpackChunkkittens_website||[]).push([[88],{1088:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>c});var r=e(1344),o=e(5043),i=e(6398),u=(0,i.rule)({maxW:"100%","twitter-widget":{mar:"0 !important"}}),s=window;const c=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.mounted=!0,n}return(0,r.__extends)(n,t),n.prototype.componentDidMount=function(){var t=this;e(2090)("https://platform.twitter.com/widgets.js","tw",(function(){t.mounted&&(s.twttr?s.twttr.widgets.createTweet(t.props.id,t.refs.ref,{theme:t.props.isDark?"dark":"light"}):console.error("Failed to load Twitter lib."))}))},n.prototype.componentWillUnmount=function(){this.mounted=!1},n.prototype.render=function(){return this.props.renderWrap(o.createElement("div",{ref:"ref",className:u}))},n}(o.PureComponent)},2090:(t,n,e)=>{var r,o,i;i=function(){var t,n,e=document,r=e.getElementsByTagName("head")[0],o=!1,i="push",u="readyState",s="onreadystatechange",c={},a={},f={},l={};function d(t,n){for(var e=0,r=t.length;e<r;++e)if(!n(t[e]))return o;return 1}function p(t,n){d(t,(function(t){return n(t),1}))}function h(n,e,r){n=n[i]?n:[n];var o=e&&e.call,u=o?e:r,s=o?n.join(""):e,w=n.length;function v(t){return t.call?t():c[t]}function g(){if(! --w)for(var t in c[s]=1,u&&u(),f)d(t.split("|"),v)&&!p(f[t],v)&&(f[t]=[])}return setTimeout((function(){p(n,(function n(e,r){return null===e?g():(r||/^https?:\/\//.test(e)||!t||(e=-1===e.indexOf(".js")?t+e+".js":t+e),l[e]?(s&&(a[s]=1),2==l[e]?g():setTimeout((function(){n(e,!0)}),0)):(l[e]=1,s&&(a[s]=1),void m(e,g)))}))}),0),h}function m(t,o){var i,c=e.createElement("script");c.onload=c.onerror=c[s]=function(){c[u]&&!/^c|loade/.test(c[u])||i||(c.onload=c[s]=null,i=1,l[t]=2,o())},c.async=1,c.src=n?t+(-1===t.indexOf("?")?"?":"&")+n:t,r.insertBefore(c,r.lastChild)}return h.get=m,h.order=function(t,n,e){!function r(o){o=t.shift(),t.length?h(o,r):h(o,n,e)}()},h.path=function(n){t=n},h.urlArgs=function(t){n=t},h.ready=function(t,n,e){t=t[i]?t:[t];var r,o=[];return!p(t,(function(t){c[t]||o[i](t)}))&&d(t,(function(t){return c[t]}))?n():(r=t.join("|"),f[r]=f[r]||[],f[r][i](n),e&&e(o)),h},h.done=function(t){h([null],t)},h},t.exports?t.exports=i():void 0===(o="function"===typeof(r=i)?r.call(n,e,n,t):r)||(t.exports=o)}}]);
//# sourceMappingURL=88.e8981bf8.chunk.js.map