(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),i=(n(0),n(124)),o={id:"quickstart",title:"Quickstart",sidebar_label:"Quickstart"},c={id:"getting_started/quickstart",title:"Quickstart",description:"In this quickstart, we are going to train M4C model on TextVQA. Follow instructions at the bottom to train other models in MMF.",source:"@site/docs/getting_started/quickstart.md",permalink:"/docs/getting_started/quickstart",editUrl:"https://github.com/facebookresearch/mmf/edit/master/website/docs/getting_started/quickstart.md",lastUpdatedBy:"Amanpreet Singh",lastUpdatedAt:1591766348,sidebar_label:"Quickstart",sidebar:"docs",previous:{title:"MMF Features",permalink:"/docs/getting_started/features"},next:{title:"Frequently Asked Questions (FAQ)",permalink:"/docs/getting_started/faqs"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Getting Data",id:"getting-data",children:[]},{value:"Training",id:"training",children:[]},{value:"Inference",id:"inference",children:[]},{value:"Citation",id:"citation",children:[]},{value:"Next steps",id:"next-steps",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://circleci.com/gh/facebookresearch/mmf"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://circleci.com/gh/facebookresearch/mmf.svg?style=svg",alt:null})))),Object(i.b)("p",null,"In this quickstart, we are going to train ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebookresearch/mmf/tree/master/projects/m4c"}),"M4C")," model on TextVQA. Follow instructions at the bottom to train other models in MMF."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"Install MMF following the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./installation"}),"installation documentation"),"."),Object(i.b)("h2",{id:"getting-data"},"Getting Data"),Object(i.b)("p",null,"In MMF datasets and required files will be downloaded automatically when we run training next. For more details about custom datasets and other advanced setups for datasets check the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../tutorials/dataset"}),"dataset documentation"),"."),Object(i.b)("h2",{id:"training"},"Training"),Object(i.b)("p",null,"Now we can start training by running the following command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"mmf_run config=projects/m4c/configs/textvqa/defaults.yaml \\\n    datasets=textvqa \\\n    model=m4c \\\n    run_type=train_val\n")),Object(i.b)("h2",{id:"inference"},"Inference"),Object(i.b)("p",null,"For running inference or generating predictions, we can specify a pretrained model using its zoo key and then run the following command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"mmf_predict config=projects/m4c/configs/textvqa/defaults.yaml \\\n    datasets=textvqa \\\n    model=m4c \\\n    run_type=test \\\n    checkpoint.resume_zoo=m4c.textvqa.defaults\n")),Object(i.b)("p",null,"For running inference on ",Object(i.b)("inlineCode",{parentName:"p"},"val")," set, use ",Object(i.b)("inlineCode",{parentName:"p"},"run_type=val")," and rest of the arguments remain same. Check more details in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"pretrained_models"}),"pretrained models")," section."),Object(i.b)("p",null,"These commands should be enough to get you started with training and performing inference using MMF."),Object(i.b)("h2",{id:"citation"},"Citation"),Object(i.b)("p",null,"If you use MMF in your work, please cite:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"@inproceedings{singh2019pythia,\n  title={Pythia-a platform for vision \\& language research},\n  author={Singh, Amanpreet and Natarajan, Vivek and Jiang, Yu and Chen, Xinlei and Shah, Meet and Rohrbach, Marcus and Batra, Dhruv and Parikh, Devi},\n  booktitle={SysML Workshop, NeurIPS},\n  volume={2018},\n  year={2019}\n}\n")),Object(i.b)("h2",{id:"next-steps"},"Next steps"),Object(i.b)("p",null,"To dive deep into world of MMF, you can move on the following next topics:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"../tutorials/concepts"}),"Concepts and Terminology")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"./pretrained_models"}),"Using Pretrained Models")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"./challenge"}),"Challenge Participation")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"./faq"}),"FAQs"))))}u.isMDXComponent=!0},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||i;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);