"use strict";(self.webpackChunkarrow_website=self.webpackChunkarrow_website||[]).push([[4054],{41489:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=n(85893),a=n(11151);const s={sidebar_position:4},o="Mutability and loops",r={id:"ecosystem/analysis/mutability",title:"Mutability and loops",description:"Arrow Analysis supports mutability at the level of functions (but not yet at the level of classes). However, when you declare something with var, things get tricky. \ud83d\udc7b",source:"@site/content/docs/ecosystem/analysis/mutability.md",sourceDirName:"ecosystem/analysis",slug:"/ecosystem/analysis/mutability",permalink:"/ecosystem/analysis/mutability",draft:!1,unlisted:!1,editUrl:"https://github.com/arrow-kt/arrow-website/edit/main/content/docs/ecosystem/analysis/mutability.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"ecosystemSidebar",previous:{title:"Control operators",permalink:"/ecosystem/analysis/control"},next:{title:"Types and invariants",permalink:"/ecosystem/analysis/types"}},l={},c=[{value:"Loops",id:"loops",level:2}];function h(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"mutability-and-loops",children:"Mutability and loops"}),"\n",(0,i.jsxs)(t.p,{children:["Arrow Analysis supports mutability at the level of functions (but not yet at the level of classes). However, when you declare something with ",(0,i.jsx)(t.code,{children:"var"}),", things get tricky. \ud83d\udc7b"]}),"\n",(0,i.jsxs)(t.p,{children:["When a local variable ",(0,i.jsx)(t.code,{children:"x"})," is immutable"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:"val x = COMPLICATED_THING\n"})}),"\n",(0,i.jsxs)(t.p,{children:["the check knows upfront that any usage of ",(0,i.jsx)(t.code,{children:"x"})," correspond to the same ",(0,i.jsx)(t.code,{children:"COMPLICATED_THING"}),", wherever it's used later on. However, if the declaration uses ",(0,i.jsx)(t.code,{children:"var"}),", at the point in which we use ",(0,i.jsx)(t.code,{children:"x"})," the value inside of it may be completely different from the first one!"]}),"\n",(0,i.jsxs)(t.p,{children:["The way out of this problem is to promise Arrow Analysis that some condition over a mutable variable will ",(0,i.jsx)(t.em,{children:"always"})," be true for the entire computation:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"the check can base its reasoning on this promise,"}),"\n",(0,i.jsx)(t.li,{children:"but we need to check that you obey your promise every time you try to give a new value."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["We call this promise an ",(0,i.jsx)(t.strong,{children:"invariant"})," of the mutable variable."]}),"\n",(0,i.jsx)(t.p,{children:'As a consequence, if you do not declare an invariant, Arrow Analysis knows nothing about your variable. Here\'s an example which is "obviously" correct, but not accepted by the tool:'}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:'import arrow.analysis.post\n\nfun usesMutability(x: Int): Int {\n  var z = 2\n  return z.post({ it > 0 }) { "greater than 0" }\n}\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-plain",children:"e: declaration `usesMutability` fails to satisfy the post-condition: ($result > 0)\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Let's declare an invariant. We use the same syntax as post-conditions, but use the special function ",(0,i.jsx)(t.code,{children:"invariant"})," instead. Note that even though syntactically the invariant reads as part of the initial value, it really talks about the mutable variable being declared (",(0,i.jsx)(t.code,{children:"z"})," in this case)\n. After attaching this information to the variable, we are free to re-assign the variable, but we need to keep our promise."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:'import arrow.analysis.invariant\nimport arrow.analysis.post\n\nfun usesMutability(x: Int): Int {\n  var z = 2.invariant({ it > 0 }) { "invariant it > 0" }\n  z = 3\n  return z.post({ it > 0 }) { "greater than 0" }\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Of course, if we don't keep our promise, Arrow Analysis won't be happy."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:'import arrow.analysis.invariant\nimport arrow.analysis.post\n\nfun usesMutability(x: Int): Int {\n  var z = 2.invariant({ it > 0 }) { "invariant it > 0" }\n  z = 0 // 0 is not > 0\n  return z.post({ it > 0 }) { "greater than 0" }\n}\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-plain",children:"e: invariants are not satisfied in `z = 0`\n"})}),"\n",(0,i.jsx)(t.h2,{id:"loops",children:"Loops"}),"\n",(0,i.jsx)(t.p,{children:"One place in which mutability is hard to avoid is loops. Our recommendation is to think carefully about invariants for your mutable variables, because a good choice will determine what can be checked. Here's an example in which we compute the length of a list using a mutable integral variable:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:'import arrow.analysis.invariant\nimport arrow.analysis.post\n\nfun <A> List<A>.count(): Int {\n  var count = 0.invariant({ it >= 0 }) { "z >= 0" }\n  for (elt in this) { count = count + 1 }\n  return count.post({ it >= 0 }) { "result >= 0" }\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["We are investigating ways to introduce additional information in the tool, like ",(0,i.jsx)(t.code,{children:"for"})," looping exactly many times as the ",(0,i.jsx)(t.code,{children:"size"})," of the list."]})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var i=n(67294);const a={},s=i.createContext(a);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);