"use strict";(self.webpackChunkarrow_website=self.webpackChunkarrow_website||[]).push([[2824],{93824:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var o=t(85893),r=t(11151);const s={sidebar_position:1,description:"Working with collections with at least one element"},i="Non-empty collections",c={id:"learn/collections-functions/non-empty",title:"Non-empty collections",description:"Working with collections with at least one element",source:"@site/content/docs/learn/collections-functions/non-empty.md",sourceDirName:"learn/collections-functions",slug:"/learn/collections-functions/non-empty",permalink:"/learn/collections-functions/non-empty",draft:!1,unlisted:!1,editUrl:"https://github.com/arrow-kt/arrow-website/edit/main/content/docs/learn/collections-functions/non-empty.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Working with collections with at least one element"},sidebar:"learnSidebar",previous:{title:"Collections and functions",permalink:"/learn/collections-functions/"},next:{title:"Collectors",permalink:"/learn/collections-functions/collectors"}},l={},a=[];function d(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"non-empty-collections",children:"Non-empty collections"}),"\n",(0,o.jsxs)(n.p,{children:["Nullable types give us the ability to have zero or one appearance of a value,\ncollections allow us to have any number of them. However, in some scenarios, we need to work with collections that should contain ",(0,o.jsx)(n.strong,{children:"at least one"})," element. Arrow provides both ",(0,o.jsx)(n.a,{href:"https://apidocs.arrow-kt.io/arrow-core/arrow.core/-non-empty-list/index.html",children:(0,o.jsx)(n.code,{children:"NonEmptyList"})}),"\nand ",(0,o.jsx)(n.a,{href:"https://apidocs.arrow-kt.io/arrow-core/arrow.core/-non-empty-set/index.html",children:(0,o.jsx)(n.code,{children:"NonEmptySet"})}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["One concrete example is given by ",(0,o.jsx)(n.a,{href:"../../typed-errors/working-with-typed-errors/#accumulating-errors",children:"error accumulation"}),".\nA type like ",(0,o.jsx)(n.code,{children:"Either<List<Problem>, Result>"})," may take us to the weird case in\nwhich we end with ",(0,o.jsx)(n.code,{children:"Left"}),", but we have no ",(0,o.jsx)(n.code,{children:"Problem"}),"s in the ",(0,o.jsx)(n.code,{children:"List"}),". To avoid\nthis issue, Arrow makes ",(0,o.jsx)(n.code,{children:"mapOrAccumulate"})," and ",(0,o.jsx)(n.code,{children:"zipOrAccumulate"})," return\n",(0,o.jsx)(n.code,{children:"Either<NonEmptyList<Problem>, Result>"})," instead."]}),"\n",(0,o.jsxs)(n.p,{children:["The API of non-empty collections follows the conventions from ",(0,o.jsx)(n.a,{href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/",children:(0,o.jsx)(n.code,{children:"kotlin.collections"})}),".\nOn top of that, some types become stronger to ensure or keep track of the\nnon-empty nature of the collection."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://apidocs.arrow-kt.io/arrow-core/arrow.core/non-empty-list-of.html",children:(0,o.jsx)(n.code,{children:"nonEmptyListOf"})})," and ",(0,o.jsx)(n.a,{href:"https://apidocs.arrow-kt.io/arrow-core/arrow.core/non-empty-set-of.html",children:(0,o.jsx)(n.code,{children:"nonEmptySetOf"})})," require at least one value as argument."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"map"}),", ",(0,o.jsx)(n.code,{children:"zip"}),", and similar operations which respect the size of the arguments\nreturn non-empty collections."]}),"\n",(0,o.jsx)(n.li,{children:"Concatenation where one of the arguments is non-empty ensures that the result\nis also non-empty."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var o=t(67294);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);