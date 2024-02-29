"use strict";(self.webpackChunkarrow_website=self.webpackChunkarrow_website||[]).push([[7435],{34630:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var i=t(85893),r=t(11151);const s={sidebar_position:2},a="Retry and repeat",l={id:"learn/resilience/retry-and-repeat",title:"Retry and repeat",description:"A common demand when working with actions is to retry or repeat them when",source:"@site/content/docs/learn/resilience/retry-and-repeat.md",sourceDirName:"learn/resilience",slug:"/learn/resilience/retry-and-repeat",permalink:"/learn/resilience/retry-and-repeat",draft:!1,unlisted:!1,editUrl:"https://github.com/arrow-kt/arrow-website/edit/main/content/docs/learn/resilience/retry-and-repeat.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"learnSidebar",previous:{title:"Introduction",permalink:"/learn/resilience/intro"},next:{title:"Circuit breaker",permalink:"/learn/resilience/circuitbreaker"}},c={},o=[{value:"Constructing a policy",id:"constructing-a-policy",level:2},{value:"Repeating an action",id:"repeating-an-action",level:2},{value:"Collecting values",id:"collecting-values",level:3},{value:"Until/while it produces a certain value",id:"untilwhile-it-produces-a-certain-value",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"retry-and-repeat",children:"Retry and repeat"}),"\n",(0,i.jsx)(n.p,{children:"A common demand when working with actions is to retry or repeat them when\n(adverse) certain circumstances happen. Usually, the retrial or repetition does\nnot occur immediately; instead, it is done based on a policy. For instance, when\nfetching content from a network request, we may want to retry it when it fails\nusing an exponential backoff algorithm for a maximum of 15 seconds or 5\nattempts, whatever happens first."}),"\n",(0,i.jsx)(n.admonition,{title:"Additional context for this pattern",type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/architecture/patterns/retry",children:"Retry pattern"}),"\nin ",(0,i.jsx)(n.em,{children:"Cloud Design Patterns"}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://apidocs.arrow-kt.io/arrow-resilience/arrow.resilience/-schedule/index.html",children:(0,i.jsx)(n.code,{children:"Schedule"})}),"\nallows you to define and compose powerful yet simple policies. There are two\nsteps involved in using ",(0,i.jsx)(n.code,{children:"Schedule"}),"."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["First, we need to ",(0,i.jsx)(n.strong,{children:"construct"})," a policy, which specifies the amount and the\ndelay in repetition."]}),"\n",(0,i.jsxs)(n.li,{children:["Then we ",(0,i.jsx)(n.strong,{children:"run"})," this schedule with a specified action. There are two ways to do so:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://apidocs.arrow-kt.io/arrow-resilience/arrow.resilience/retry.html",children:(0,i.jsx)(n.code,{children:"retry"})}),"\nexecutes the action once, and if it fails, it is reattempted based\non the scheduling policy. It stops when the action succeeds or when the policy\ndetermines it should not be reattempted again."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://apidocs.arrow-kt.io/arrow-resilience/arrow.resilience/-schedule/repeat.html",children:(0,i.jsx)(n.code,{children:"repeat"})}),"\nexecutes the action, and if it succeeds, keeps executing it again based on\nthe scheduling policy passed as an argument. It stops if the action\nfails or the policy determines it should not be executed again.\nIt returns the last internal state of the scheduling policy\nor the error that happened running the action."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"constructing-a-policy",children:"Constructing a policy"}),"\n",(0,i.jsxs)(n.p,{children:["Scheduling policies are constructed using the methods in ",(0,i.jsxs)(n.a,{href:"https://apidocs.arrow-kt.io/arrow-resilience/arrow.resilience/-schedule/-companion/index.html",children:[(0,i.jsx)(n.code,{children:"Schedule"}),"'s\ncompanion object"]}),".\nSchedule policies also return values on each step, which can be used to\ntake decisions based on previous values."]}),"\n",(0,i.jsxs)(n.p,{children:["One of the simplest policies is recurring ten times. This means that if we\ncall ",(0,i.jsx)(n.code,{children:"repeat"}),", the same action is performed ten times, and if we call ",(0,i.jsx)(n.code,{children:"retry"}),",\nthe action is attempted until successful for a maximum of ten times."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"fun <A> recurTenTimes() = Schedule.recurs<A>(10)\n"})}),"\n",(0,i.jsx)(n.p,{children:"The exponential backoff algorithm is a standard algorithm to retry operations communicating with external services,\nsuch as network requests. Roughly, this\nmeans that the delay between attempts increases by the given factor."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"@ExperimentalTime\nval exponential = Schedule.exponential<Unit>(250.milliseconds)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Here's a much more complex schedule. Let's walk through it step by step:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"It recurs with exponential backoff as long as the delay is less than 60 seconds."}),"\n",(0,i.jsx)(n.li,{children:"Afterwards, we have a spaced (constant) delay of 60 seconds for up to 100 attempts."}),"\n",(0,i.jsxs)(n.li,{children:["Some random noise is added by calling ",(0,i.jsx)(n.code,{children:"jittered"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"We also collect every input to the schedule and return it."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"@ExperimentalTime\nfun <A> complexPolicy(): Schedule<A, List<A>> =\n  Schedule.exponential<A>(10.milliseconds).doWhile { _, duration -> duration < 60.seconds }\n    .andThen(Schedule.spaced<A>(60.seconds) and Schedule.recurs(100)).jittered()\n    .zipRight(Schedule.identity<A>().collect())\n"})}),"\n",(0,i.jsx)(n.h2,{id:"repeating-an-action",children:"Repeating an action"}),"\n",(0,i.jsx)(n.p,{children:"When we repeat an action, we do it as long as it is successful and the\nscheduling policy tells us to keep recursing.\nFor example, this block repeats an action three times after its first successful\nexecution (so four times in total)."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"suspend fun example(): Unit {\n  var counter = 0\n  val res = Schedule.recurs<Unit>(3).repeat {\n    counter++\n  }\n  counter shouldBe 4\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Notice that we did not handle the error case. There are overloads\n",(0,i.jsx)(n.a,{href:"https://apidocs.arrow-kt.io/arrow-resilience/arrow.resilience/-schedule/repeat-or-else.html",children:(0,i.jsx)(n.code,{children:"repeatOrElse"})}),"\nand ",(0,i.jsx)(n.a,{href:"https://apidocs.arrow-kt.io/arrow-resilience/arrow.resilience/-schedule/repeat-or-else-either.html",children:(0,i.jsx)(n.code,{children:"repeatOrElseEither"})}),"\noffering that capability. Repeat will just rethrow any error encountered."]}),"\n",(0,i.jsx)(n.h3,{id:"collecting-values",children:"Collecting values"}),"\n",(0,i.jsxs)(n.p,{children:["Using ",(0,i.jsx)(n.code,{children:"repeat"}),", the resulting value is the number of iterations it has performed.\nWe're throwing away any value produced by each iteration of the repetition.\nBut we have three other possibilities:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Discard all results; that is, return ",(0,i.jsx)(n.code,{children:"Unit"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Discard all intermediate results and just keep the last produced result."}),"\n",(0,i.jsx)(n.li,{children:"Keep all intermediate results."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["To discard the values provided by the repetition of the action, we combine our\npolicy with ",(0,i.jsx)(n.a,{href:"https://apidocs.arrow-kt.io/arrow-resilience/arrow.resilience/-schedule/-companion/unit.html",children:(0,i.jsx)(n.code,{children:"Schedule.unit"})}),",\nusing the ",(0,i.jsx)(n.a,{href:"https://apidocs.arrow-kt.io/arrow-resilience/arrow.resilience/-schedule/zip-left.html",children:(0,i.jsx)(n.code,{children:"zipLeft"})}),"\nor ",(0,i.jsx)(n.a,{href:"https://apidocs.arrow-kt.io/arrow-resilience/arrow.resilience/-schedule/zip-right.html",children:(0,i.jsx)(n.code,{children:"zipRight"})}),"\ncombinators, which keep just the output of one of the policies:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"suspend fun example(): Unit {\n  var counter = 0\n\n  val keepLeft = (Schedule.identity<Unit>() zipLeft Schedule.recurs(3)).repeat {\n    counter++\n  }\n  val keepRight = (Schedule.recurs<Unit>(3) zipRight Schedule.identity<Unit>()).repeat {\n    counter++\n  }\n\n  counter shouldBe 8\n  keepLeft shouldBe Unit\n  keepRight shouldBe Unit\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Following the same strategy, we can zip it with the ",(0,i.jsx)(n.a,{href:"https://apidocs.arrow-kt.io/arrow-resilience/arrow.resilience/-schedule/-companion/identity.html",children:(0,i.jsx)(n.code,{children:"Schedule.identity"})}),"\npolicy to keep only the last result of the action."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'suspend fun example(): Unit {\n  var counter = 0\n\n  val keepLast = (Schedule.identity<String>() zipLeft Schedule.recurs(3)).repeat {\n    counter++; "$counter"\n  }\n  \n  keepLast shouldBe "4"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Finally, if we want to keep all intermediate results, we can zip the policy with\n",(0,i.jsx)(n.a,{href:"https://apidocs.arrow-kt.io/arrow-resilience/arrow.resilience/-schedule/-companion/collect.html",children:(0,i.jsx)(n.code,{children:"Schedule.collect"})}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"suspend fun example(): Unit {\n  var counter = 0\n\n  val keepAll = (Schedule.collect<Int>() zipLeft Schedule.recurs(3)).repeat {\n    counter++\n    counter\n  }\n\n  keepAll shouldBe listOf(1, 2, 3, 4)\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"untilwhile-it-produces-a-certain-value",children:"Until/while it produces a certain value"}),"\n",(0,i.jsxs)(n.p,{children:["We can make use of the policies ",(0,i.jsx)(n.a,{href:"https://apidocs.arrow-kt.io/arrow-resilience/arrow.resilience/-schedule/-companion/do-while.html",children:(0,i.jsx)(n.code,{children:"doWhile"})}),"\nand ",(0,i.jsx)(n.a,{href:"https://apidocs.arrow-kt.io/arrow-resilience/arrow.resilience/-schedule/-companion/do-until.html",children:(0,i.jsx)(n.code,{children:"doUntil"})}),"\nto repeat an action while or until its produced result matches a given predicate."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'suspend fun example(): Unit {\n  var result = ""\n\n  Schedule.doWhile<String>  { input, _ -> input.length <= 5 }.repeat {\n    result += "a"\n    result\n  }\n  \n  result shouldBe "aaaaaa"\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var i=t(67294);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);