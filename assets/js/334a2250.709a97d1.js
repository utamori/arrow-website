"use strict";(self.webpackChunkarrow_website=self.webpackChunkarrow_website||[]).push([[5026],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var o=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return o.createElement(s.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||n;return t?o.createElement(f,i(i({ref:r},p),{},{components:t})):o.createElement(f,i({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,i=new Array(n);i[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<n;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9825:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var o=t(87462),a=(t(67294),t(3905));const n={title:"Arrow releases stable 1.2.0 version",image:"https://xebia.com/wp-content/uploads/2023/04/arrow-release-ftr.jpg",category:"articles",tags:["core","articles"],link:"https://xebia.com/blog/a-new-module-for-typed-errors-in-arrow-1-2-0/"},i="Arrow releases stable 1.2.0 version",l={permalink:"/community/blog/2023/07/12/arrow-1-2-0",editUrl:"https://github.com/arrow-kt/arrow-website/edit/main/content/blog/2023-07-12-arrow-1-2-0.md",source:"@site/content/blog/2023-07-12-arrow-1-2-0.md",title:"Arrow releases stable 1.2.0 version",description:"We're excited to announce the stable Arrow 1.2.0 version. To briefly summarize, this release:",date:"2023-07-12T00:00:00.000Z",formattedDate:"July 12, 2023",tags:[{label:"core",permalink:"/community/blog/tags/core"},{label:"articles",permalink:"/community/blog/tags/articles"}],readingTime:.32,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Arrow releases stable 1.2.0 version",image:"https://xebia.com/wp-content/uploads/2023/04/arrow-release-ftr.jpg",category:"articles",tags:["core","articles"],link:"https://xebia.com/blog/a-new-module-for-typed-errors-in-arrow-1-2-0/"},nextItem:{title:"Arrow 2.0's Trajectory - Video",permalink:"/community/blog/2023/05/04/arrow-trajectory-kotlinconf"}},s={authorsImageUrls:[]},c=[],p={toc:c},m="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(m,(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We're excited to announce the stable Arrow 1.2.0 version. To briefly summarize, this release:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Improves the API for ",(0,a.kt)("a",{parentName:"li",href:"http://arrow-kt.io/learn/typed-errors/working-with-typed-errors/"},"typed errors"),",\nincluding ",(0,a.kt)("a",{parentName:"li",href:"https://apidocs.arrow-kt.io/arrow-core/arrow.core.raise/with-error.html"},(0,a.kt)("inlineCode",{parentName:"a"},"withError")),"\nand ",(0,a.kt)("a",{parentName:"li",href:"https://apidocs.arrow-kt.io/arrow-core/arrow.core.raise/merge.html"},(0,a.kt)("inlineCode",{parentName:"a"},"merge")),"."),(0,a.kt)("li",{parentName:"ul"},"Adds ",(0,a.kt)("a",{parentName:"li",href:"https://apidocs.arrow-kt.io/arrow-core/arrow.core/-non-empty-collection/index.html"},(0,a.kt)("inlineCode",{parentName:"a"},"NonEmptyCollection")),"\nas common parent of ",(0,a.kt)("a",{parentName:"li",href:"https://apidocs.arrow-kt.io/arrow-core/arrow.core/-non-empty-list/index.html"},(0,a.kt)("inlineCode",{parentName:"a"},"NonEmptyList")),"\nand ",(0,a.kt)("a",{parentName:"li",href:"https://apidocs.arrow-kt.io/arrow-core/arrow.core/-non-empty-set/index.html"},(0,a.kt)("inlineCode",{parentName:"a"},"NonEmptySet")),"."),(0,a.kt)("li",{parentName:"ul"},"Introduces ",(0,a.kt)("a",{parentName:"li",href:"https://arrow-kt.io/learn/quickstart/serialization/"},(0,a.kt)("inlineCode",{parentName:"a"},"arrow-core-serialization")),"\nto be used alongside KotlinX Serialization."),(0,a.kt)("li",{parentName:"ul"},"Fixes a few issues found in the Release Candidate.")),(0,a.kt)("p",null,"Read more details in the full ",(0,a.kt)("a",{parentName:"p",href:"https://xebia.com/blog/a-new-module-for-typed-errors-in-arrow-1-2-0/"},"Arrow 1.2.0 release announcement"),"."))}u.isMDXComponent=!0}}]);