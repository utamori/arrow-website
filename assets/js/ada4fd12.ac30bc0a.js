"use strict";(self.webpackChunkarrow_website=self.webpackChunkarrow_website||[]).push([[457],{99703:(e,t,a)=>{a.d(t,{Z:()=>r});a(67294);var s=a(95999),n=a(32244),l=a(85893);function r(e){const{metadata:t}=e,{previousPage:a,nextPage:r}=t;return(0,l.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,l.jsx)(n.Z,{permalink:a,title:(0,l.jsx)(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),r&&(0,l.jsx)(n.Z,{permalink:r,title:(0,l.jsx)(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},32244:(e,t,a)=>{a.d(t,{Z:()=>r});a(67294);var s=a(90512),n=a(33692),l=a(85893);function r(e){const{permalink:t,title:a,subLabel:r,isNext:i}=e;return(0,l.jsxs)(n.Z,{className:(0,s.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[r&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,l.jsx)("div",{className:"pagination-nav__label",children:a})]})}},88824:(e,t,a)=>{a.d(t,{c:()=>c});var s=a(67294),n=a(52263);const l=["zero","one","two","few","many","other"];function r(e){return l.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:r(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:r(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=o();return{selectMessage:(t,a)=>function(e,t,a){const s=e.split("|");if(1===s.length)return s[0];s.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const n=a.select(t),l=a.pluralForms.indexOf(n);return s[Math.min(l,s.length-1)]}(a,t,e)}}},96816:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});a(67294);var s=a(95999),n=a(88824),l=a(1944),r=a(35281),i=a(70307),o=a(99703),c=a(90197),d=a(78914),u=a(61728);const m={verticalRhythm:"verticalRhythm_lbfJ",projectsContainer:"projectsContainer_hH85"};var h=a(85893);const g=(e,t)=>e?`${e}, ${t}`:`${t}`;function p(e){const t=function(){const{selectMessage:e}=(0,n.c)();return t=>e(t,(0,s.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,s.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:"{nPosts} tagged with \u201c{tagName}\u201d"},{nPosts:t(e.count),tagName:e.label})}function b(e){let{tag:t}=e;const a=p(t);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l.d,{title:a}),(0,h.jsx)(c.Z,{tag:"blog_tags_posts"})]})}function x(e){const{tag:t,listMetadata:a,items:s}=e,n=p(t),l={title:"View All Tags",href:t.allTagsPath},r=s.map((e=>({title:e.content.metadata.title,subtitle:g(e.content.metadata.authors[0]?.name,e.content.metadata.formattedDate),image:e.content.frontMatter.image,body:e.content.metadata.description,href:e.content.metadata.permalink})));return(0,h.jsxs)(i.Z,{children:[(0,h.jsx)(d.V,{title:t.label,subtitle:n,ctaList:[l],className:m.verticalRhythm}),(0,h.jsxs)("main",{children:[(0,h.jsx)("section",{className:`container ${m.projectsContainer} ${m.verticalRhythm}`,children:r.map((e=>(0,h.jsx)(u.fe,{...e},e.title)))}),(0,h.jsx)("section",{className:`container ${m.verticalRhythm}`,children:(0,h.jsx)(o.Z,{metadata:a})})]})]})}function f(e){return(0,h.jsxs)(l.FG,{className:`${r.k.wrapper.blogPages} ${r.k.page.blogTagPostListPage}`,children:[(0,h.jsx)(b,{...e}),(0,h.jsx)(x,{...e})]})}},78914:(e,t,a)=>{a.d(t,{V:()=>r});a(67294);var s=a(33692);const n={hero:"hero_wgFg",container:"container_Iw7w",subtitle:"subtitle_oBSE",ctaList:"ctaList_HWQC"};var l=a(85893);function r(e){let{title:t,subtitle:a,ctaList:r,className:i}=e;return(0,l.jsx)("div",{className:`hero ${n.hero} ${i}`,children:(0,l.jsxs)("div",{className:`container ${n.container}`,children:[(0,l.jsx)("h1",{className:"hero__title",children:t}),a&&(0,l.jsx)("h2",{className:n.subtitle,children:a}),(0,l.jsx)("div",{className:n.ctaList,children:r&&r.map((e=>{let{title:t,href:a}=e;return(0,l.jsx)(s.Z,{href:a,className:"button button--primary button--lg",children:t},t)}))})]})})}},61728:(e,t,a)=>{a.d(t,{fe:()=>f,VW:()=>x});a(67294);var s=a(33692),n=a(44996);const l="card_kS7d",r="landscapeMode_EDP6",i="imageContainer_J6oq",o="image_PLQf",c="body_EfH_",d="title_oipf",u="subtitle_T9Mx",m="text_YbZW",h="linkContainer_wJdL",g="link_nJqJ";var p=a(85893);function b(e){let{title:t="Case study",subtitle:a,image:b=(0,n.Z)("/img/sample-image.jpg"),body:x="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie",href:f,landscapeMode:j=!1}=e;return(0,p.jsxs)("div",{className:`card ${l} ${j&&r}`,children:[(0,p.jsx)("div",{className:`card__image ${i}`,children:(0,p.jsx)("img",{className:o,src:b,alt:`${t}`,title:`${t}`})}),(0,p.jsxs)("div",{className:`card__body ${c}`,children:[(0,p.jsx)("h3",{className:d,children:t}),(0,p.jsx)("h5",{className:u,children:a}),(0,p.jsx)("p",{className:m,children:x}),(0,p.jsx)("strong",{className:h,children:(0,p.jsx)(s.Z,{href:f,className:g,children:"Learn more"})})]})]})}const x=e=>(0,p.jsx)(b,{landscapeMode:!0,...e}),f=e=>(0,p.jsx)(b,{landscapeMode:!1,...e})}}]);