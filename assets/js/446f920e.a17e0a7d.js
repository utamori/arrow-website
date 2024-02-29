"use strict";(self.webpackChunkarrow_website=self.webpackChunkarrow_website||[]).push([[1768],{96350:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=t(85893),i=t(11151);const a={sidebar_position:5,description:"Delaying computation and caching results"},s="Control over evaluation",c={id:"learn/collections-functions/eval",title:"Control over evaluation",description:"Delaying computation and caching results",source:"@site/content/docs/learn/collections-functions/eval.md",sourceDirName:"learn/collections-functions",slug:"/learn/collections-functions/eval",permalink:"/learn/collections-functions/eval",draft:!1,unlisted:!1,editUrl:"https://github.com/arrow-kt/arrow-website/edit/main/content/docs/learn/collections-functions/eval.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Delaying computation and caching results"},sidebar:"learnSidebar",previous:{title:"Memoization",permalink:"/learn/collections-functions/memoize"},next:{title:"Utilities for functions",permalink:"/learn/collections-functions/utils"}},r={},l=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"control-over-evaluation",children:"Control over evaluation"}),"\n",(0,o.jsxs)(n.p,{children:["Using ",(0,o.jsx)(n.code,{children:"Eval"})," you can control evaluation of a value or a computation that produces a value.\nThis is useful to delay potentially costly computations, and to prevent start\noverflows by carefully choosing when computations should take place."]}),"\n",(0,o.jsxs)(n.p,{children:["You construct ",(0,o.jsx)(n.code,{children:"Eval"})," instance by providing a function that computes a value, together with an ",(0,o.jsx)(n.em,{children:"evaluation strategy"}),".\nThere are three basic strategies:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Eval.now"})," evaluates the function immediately."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Eval.later"})," waits until the first time the value is requested. Once computed, the result is saved, so subsequent calls return immediately."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Eval.always"})," evaluates the function every time we need its value. If you ask for the value more than once, the function is executed again."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["We say that ",(0,o.jsx)(n.code,{children:"Now"})," is an ",(0,o.jsx)(n.em,{children:"eager"})," evaluation strategy, and ",(0,o.jsx)(n.code,{children:"Later"})," and ",(0,o.jsx)(n.code,{children:"Always"})," are ",(0,o.jsx)(n.em,{children:"lazy"})," evaluation strategies."]}),"\n",(0,o.jsxs)(n.p,{children:["One of the main use cases for ",(0,o.jsx)(n.code,{children:"Eval"})," is ",(0,o.jsx)(n.strong,{children:"stack safety"}),", that is, preventing stack overflows for operations with deep recursion.\nFor example, here is a (overly complicated) way to compute whether a number is even or odd, by jumping between ",(0,o.jsx)(n.code,{children:"even"})," and ",(0,o.jsx)(n.code,{children:"odd"})," until we reach ",(0,o.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,o.jsx)(n.mermaid,{value:"stateDiagram\n  direction LR\n  [*] --\x3e odd\n  [*] --\x3e even\n  state odd_choice <<choice>>\n  state even_choice <<choice>>\n  odd --\x3e odd_choice\n  even --\x3e even_choice\n  odd_choice --\x3e even: n - 1\n  even_choice --\x3e odd: n - 1\n  odd_choice --\x3e false: n == 0\n  even_choice --\x3e true: n == 0"}),"\n",(0,o.jsxs)(n.p,{children:["This approach would lead to stack overflow for big numbers, but we can prevent this using ",(0,o.jsx)(n.code,{children:"Eval"}),". Using ",(0,o.jsx)(n.code,{children:"Eval.always { n == 0}"})," we indicate that we want the evaluation to be performed when we need the answer; using ",(0,o.jsx)(n.code,{children:"later"})," or ",(0,o.jsx)(n.code,{children:"always"})," does not make a big difference here, since we only evaluate once per ",(0,o.jsx)(n.code,{children:"n"})," in any case. We indicate the next operation by using ",(0,o.jsx)(n.code,{children:"flatMap"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"import arrow.core.Eval\n\nfun even(n: Int): Eval<Boolean> =\n  Eval.always { n == 0 }.flatMap {\n    if(it == true) Eval.now(true)\n    else odd(n - 1)\n  }\n\nfun odd(n: Int): Eval<Boolean> =\n  Eval.always { n == 0 }.flatMap {\n    if(it == true) Eval.now(false)\n    else even(n - 1)\n  }\n\nfun main() {\n  println(odd(100000).value())\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["One difference between ",(0,o.jsx)(n.code,{children:"Eval"})," and ",(0,o.jsx)(n.a,{href:"../recursive/",children:(0,o.jsx)(n.code,{children:"DeepRecursiveFunction"})})," is that with ",(0,o.jsx)(n.code,{children:"Eval"})," we can call functions directly instead of using ",(0,o.jsx)(n.code,{children:"callRecursive"}),". However, the latter is more performant in general, so we advise using it unless you require the additional control provided by ",(0,o.jsx)(n.code,{children:"Eval"}),"."]}),"\n",(0,o.jsxs)(n.admonition,{title:"Use the provided API",type:"warning",children:[(0,o.jsxs)(n.p,{children:["You should ",(0,o.jsx)(n.em,{children:"not"})," use ",(0,o.jsx)(n.code,{children:"when"})," with ",(0,o.jsx)(n.code,{children:"Eval"})," instances. Rather, use ",(0,o.jsx)(n.code,{children:"map"})," and ",(0,o.jsx)(n.code,{children:"flatMap"})," to chain computations and ",(0,o.jsx)(n.code,{children:"value"})," to get the result when needed."]}),(0,o.jsxs)(n.p,{children:["You should ",(0,o.jsx)(n.em,{children:"not"})," create ",(0,o.jsx)(n.code,{children:"Eval"})," instances that call ",(0,o.jsx)(n.code,{children:"value"})," on other ",(0,o.jsx)(n.code,{children:"Eval"})," instances. This defeats the barriers in place against stack overflows."]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var o=t(67294);const i={},a=o.createContext(i);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);