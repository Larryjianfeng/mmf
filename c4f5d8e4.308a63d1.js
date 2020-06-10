(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{117:function(e,t,a){"use strict";a.r(t);a(151),a(153);var n=a(0),r=a.n(n),o=a(126),i=a.n(o),l=a(131),c=a(128),s=a(125),u=a(127),m=a(130),g=a(118),d=a.n(g),f=[{title:"Less Boilerplate",imageUrl:"img/boilerplate.svg",description:r.a.createElement(r.a.Fragment,null,"MMF is designed from ground up to let you focus on what matters i.e. your model by providing boilerplate stuff such as distributed training, common datasets and state-of-the-art pretrained baselines out-of-the-box.")},{title:"Powered by PyTorch",imageUrl:"img/pytorch_logo.svg",description:r.a.createElement(r.a.Fragment,null,"MMF is built on top of PyTorch that brings all of the goodies and the power in your hands. Since MMF isn't strongly opinionated, you can still use all of your PyTorch knowledge here.")},{title:"Modular and Composable",imageUrl:"img/puzzle_pieces.svg",description:r.a.createElement(r.a.Fragment,null,"MMF is created to be easily extensible and composable. Through our modular design, user can use particular components they care about from MMF. Our configuration system allows MMF to easily adapt to any user needs.")}];function p(){var e=Object(m.a)().isDarkTheme,t=Object(u.a)("img/logo_white_f.png"),a=Object(u.a)("img/logo.png");return r.a.createElement("img",{className:i()(d.a.heroImg),src:e?t:a,alt:"MMF Logo"})}function b(e){var t=e.imageUrl,a=e.title,n=e.description,o=Object(u.a)(t);return r.a.createElement("div",{className:i()("col col--4",d.a.feature,"text--center")},o&&r.a.createElement("div",{className:"text--center"},r.a.createElement("img",{className:d.a.featureImage,src:o,alt:a})),r.a.createElement("h3",null,a),r.a.createElement("p",null,n))}t.default=function(){var e=Object(s.a)().siteConfig,t=void 0===e?{}:e;return r.a.createElement(l.a,{title:"",description:"MMF is a modular framework powered by PyTorch for multimodal vision and language research from Facebook AI Research"},r.a.createElement("header",{className:i()("hero hero--primary",d.a.heroBanner)},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"hero__title"},r.a.createElement(p,null)),r.a.createElement("p",{className:"hero__subtitle"},t.tagline),r.a.createElement("div",{className:d.a.buttons},r.a.createElement(c.a,{className:i()("button button--primary button--lg",d.a.getStarted),to:Object(u.a)("docs")},"Get Started")))),r.a.createElement("main",null,f&&f.length&&r.a.createElement("section",{className:d.a.features},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},f.map((function(e,t){var a=e.title,n=e.imageUrl,o=e.description;return r.a.createElement(b,{key:"feature"+t.toString(),title:a,imageUrl:n,description:o})})))))))}},141:function(e,t,a){"use strict";var n=a(20);e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},151:function(e,t,a){"use strict";a(152);var n=a(20),r=a(141),o=a(14),i=/./.toString,l=function(e){a(21)(RegExp.prototype,"toString",e,!0)};a(37)((function(){return"/a/b"!=i.call({source:"a",flags:"b"})}))?l((function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!o&&e instanceof RegExp?r.call(e):void 0)})):"toString"!=i.name&&l((function(){return i.call(this)}))},152:function(e,t,a){a(14)&&"g"!=/./g.flags&&a(22).f(RegExp.prototype,"flags",{configurable:!0,get:a(141)})},153:function(e,t,a){"use strict";var n=a(154),r={};r[a(13)("toStringTag")]="z",r+""!="[object z]"&&a(21)(Object.prototype,"toString",(function(){return"[object "+n(this)+"]"}),!0)},154:function(e,t,a){var n=a(52),r=a(13)("toStringTag"),o="Arguments"==n(function(){return arguments}());e.exports=function(e){var t,a,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(a=function(e,t){try{return e[t]}catch(a){}}(t=Object(e),r))?a:o?n(t):"Object"==(i=n(t))&&"function"==typeof t.callee?"Arguments":i}}}]);