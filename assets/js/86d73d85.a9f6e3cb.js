"use strict";(self.webpackChunkarrow_website=self.webpackChunkarrow_website||[]).push([[2367],{17073:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=s(85893),t=s(11151);const i={sidebar_position:4},o="Why suspend over IO",a={id:"learn/design/suspend-io",title:"Why suspend over IO",description:"Other functional ecosystems, Scala and Haskell among others,",source:"@site/content/docs/learn/design/suspend-io.md",sourceDirName:"learn/design",slug:"/learn/design/suspend-io",permalink:"/learn/design/suspend-io",draft:!1,unlisted:!1,editUrl:"https://github.com/arrow-kt/arrow-website/edit/main/content/docs/learn/design/suspend-io.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"learnSidebar",previous:{title:"Receivers vs. flatMap",permalink:"/learn/design/receivers-flatmap"},next:{title:"Example projects",permalink:"/learn/design/projects"}},c={},d=[{value:"Ergonomics",id:"ergonomics",level:2},{value:"Safety / Purity / Referential transparency",id:"safety--purity--referential-transparency",level:2},{value:"Effect mixing",id:"effect-mixing",level:2},{value:"Domain errors",id:"domain-errors",level:3},{value:"Dependency injection",id:"dependency-injection",level:3},{value:"Performance",id:"performance",level:2}];function l(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"why-suspend-over-io",children:"Why suspend over IO"}),"\n",(0,r.jsxs)(n.p,{children:["Other functional ecosystems, Scala and Haskell among others,\nuse a ",(0,r.jsx)(n.a,{href:"../../quickstart/from-fp/#computation-blocks",children:"monadic model for side effects"}),". The key component of this model\nis a wrapper called ",(0,r.jsx)(n.code,{children:"IO"}),". Arrow has adopted a different model,\nbased on ",(0,r.jsx)(n.code,{children:"suspend"})," and top-level extension functions over\n",(0,r.jsx)(n.code,{children:"suspend () -> A"}),". This section explains the rationale behind this choice."]}),"\n",(0,r.jsxs)(n.p,{children:["The reason for using ",(0,r.jsx)(n.code,{children:"IO"})," is because you care about writing side-effecting code in a safe and referential transparent manner.\nAdditionally, ",(0,r.jsx)(n.code,{children:"IO"})," offers powerful concurrent operators and cancellation in addition of offering a referential transparent runtime.\nThese properties are what makes using ",(0,r.jsx)(n.code,{children:"IO"})," powerful, and ",(0,r.jsx)(n.code,{children:"suspend"})," offers the exact same properties but natively in the language with support from the compiler."]}),"\n",(0,r.jsx)(n.admonition,{title:"Arrow and Kotlin",type:"info",children:(0,r.jsx)(n.p,{children:"One of the main goals of Arrow is to provide APIs which feel idiomatic to\nKotlin developers. This section should be read on that light; what is a good\nchoice in Kotlin may not have the right trade-offs in other ecosystems."})}),"\n",(0,r.jsx)(n.h2,{id:"ergonomics",children:"Ergonomics"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"IO"})," requires a wrapper in the return type: ",(0,r.jsx)(n.code,{children:"fun number(): IO<Int>"}),", and thus we always have to work with the ",(0,r.jsx)(n.code,{children:"IO"})," type to access the value we care about within.\nA typical pattern for this using ",(0,r.jsx)(n.code,{children:"flatMap"}),", so let's say we want to calculate 3 numbers and return them as a ",(0,r.jsx)(n.code,{children:"Triple"}),".\nTo make the example concrete we use names inspired by ",(0,r.jsx)(n.a,{href:"https://typelevel.org/cats-effect/docs/getting-started",children:"Cats Effect"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"fun number(): IO<Int> = IO.pure(1)\n\nfun triple(): IO<Triple<Int, Int, Int>> =\n  number().flatMap { a ->\n    number().flatMap { b ->\n      number().map { c ->\n        Triple(a, b, c)\n      }\n    }\n  }\n"})}),"\n",(0,r.jsxs)(n.p,{children:["So simply to call a function 3 times, and combine the result into a ",(0,r.jsx)(n.code,{children:"Triple"})," we had to use ",(0,r.jsx)(n.code,{children:"flatMap"})," twice and ",(0,r.jsx)(n.code,{children:"map"}),".\nWhat that means under the hood we'll discuss in the performance section but in terms of ergonomics this is not ideal.\nEspecially not if we can compare it to the following ",(0,r.jsx)(n.code,{children:"suspend"})," code.\nWe can see that we can forget about ",(0,r.jsx)(n.code,{children:"flatMap"})," and ",(0,r.jsx)(n.code,{children:"map"}),", and construct the ",(0,r.jsx)(n.code,{children:"Triple"})," and call ",(0,r.jsx)(n.code,{children:"number()"})," three times directly in the constructor."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"suspend fun number(): Int = 1\n\nsuspend fun triple(): Triple<Int, Int, Int> = \n  Triple(number(), number(), number())\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"Conclusion",type:"tip",children:(0,r.jsxs)(n.p,{children:["The ergonomics of ",(0,r.jsx)(n.code,{children:"suspend"})," are clearly better here, and this is a very important point in Kotlin since the language aims for high ergonomics and developer friendly constructs."]})}),"\n",(0,r.jsx)(n.h2,{id:"safety--purity--referential-transparency",children:"Safety / Purity / Referential transparency"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["What guarantees does ",(0,r.jsx)(n.code,{children:"IO"})," bring, and does ",(0,r.jsx)(n.code,{children:"suspend"})," offer the same guarantees?"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["At a conceptual level, ",(0,r.jsx)(n.code,{children:"IO<A>"})," always results in a successful value, or\nfinishes with an exception. This can be clearly seen in Cats Effect,\nwhere ",(0,r.jsx)(n.a,{href:"https://typelevel.org/cats-effect/api/3.x/cats/effect/IO.html#unsafeRunAsync(cb:Either%5BThrowable,A%5D=%3EUnit)(implicitruntime:cats.effect.unsafe.IORuntime):Unit",children:(0,r.jsx)(n.code,{children:"unsafeRunAsync"})}),"\nresults in ",(0,r.jsx)(n.code,{children:"Either<Throwable, A>"}),".\nThis is done so that any exceptions that occur within the ",(0,r.jsx)(n.code,{children:"IO"})," API can be safely returned to the user, and it can be recovered from at any point in the code.\nImportant here is that a ",(0,r.jsx)(n.code,{children:"Throwable"})," that occurs in an async thread is safely captured in the ",(0,r.jsx)(n.code,{children:"IO"})," as well and can be recovered from at any point."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"suspend"})," always results in ",(0,r.jsx)(n.a,{href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-result/",children:(0,r.jsx)(n.code,{children:"Result<A>"})}),"\nwhich is equivalent to ",(0,r.jsx)(n.code,{children:"Either<Throwable, A>"}),", and it can be used to offer the same safety guarantees as ",(0,r.jsx)(n.code,{children:"IO"}),".\nSo the ",(0,r.jsx)(n.code,{children:"suspend"})," API can also always return any exception safely to the user, and it can be recovered from at any point in the code.\nIn contrast to ",(0,r.jsx)(n.code,{children:"IO"}),", we can only find ",(0,r.jsx)(n.a,{href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/start-coroutine.html",children:(0,r.jsx)(n.code,{children:"startCoroutine"})}),"\nin the standard library, and has the same behavior as ",(0,r.jsx)(n.code,{children:"unsafeRunAsync"}),".\nInstead of ",(0,r.jsx)(n.code,{children:"f: (Either<Throwable, A>) -> Unit"})," you provide ",(0,r.jsx)(n.code,{children:"f: (Result<A>) -> Unit"})," to run the ",(0,r.jsx)(n.code,{children:"suspend () -> A"})," program."]}),"\n",(0,r.jsx)(n.admonition,{title:"Conclusion",type:"tip",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"suspend () -> A"})," offers us the exact same guarantees as ",(0,r.jsx)(n.code,{children:"IO<A>"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"effect-mixing",children:"Effect mixing"}),"\n",(0,r.jsxs)(n.p,{children:["In this section we compare the ability to mix two effects, one of them being\nthe ability to perform side-effectful operations. In particular, we compare\n",(0,r.jsx)(n.em,{children:"monad transformers"})," to ",(0,r.jsx)(n.code,{children:"suspend"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"domain-errors",children:"Domain errors"}),"\n",(0,r.jsxs)(n.p,{children:["When writing functional code style we often want to express our domain errors as clearly as possible, a popular pattern is to return ",(0,r.jsx)(n.code,{children:"Either<DomainError, SuccessValue>"}),".\nLet's assume following domain, and compare two snippets: one using ",(0,r.jsx)(n.code,{children:"IO<Either<E, A>>"}),", and another ",(0,r.jsx)(n.code,{children:"suspend () -> Either<E, A>"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'import arrow.core.Either\nimport arrow.core.Either.Left\nimport arrow.core.Either.Right\n\n/* inline */ class Id(val id: Long)\nobject PersistenceError\n\ndata class User(val email: String, val name: String)\ndata class ProcessedUser(val id: Id, val email: String, val name: String)\n\nsuspend fun fetchUser(): Either<PersistenceError, User> =\n  Right(User("simon@arrow-kt.io", "Simon"))\n\nsuspend fun User.process(): Either<PersistenceError, ProcessedUser> =\n  if (email.contains(Regex("^(.+)@(.+)$"))) Right(ProcessedUser(Id(1), email, name))\n  else Left(PersistenceError)\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",metastring:'title="Using IO<Either<E, A>>"',children:"import arrow.fx.*\n\nfun ioProgram(): IO<Either<PersistenceError, ProcessedUser>> =\n IO.fx {\n   val res = !IO.effect { fetchUser() }\n\n   !res.fold({ error ->\n     IO.just(Either.Left(error))\n   }, { user ->\n     IO.effect { user.process() }\n   })\n }\n\n// Or unwrapped in `suspend`\nsuspend suspendedIOProgram(): Either<PersistenceError, ProcessedUser> =\n ioProgram().suspended()\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",metastring:'title="Using suspend () -> Either<E, A>"',children:"import arrow.core.raise.either\n\nsuspend fun suspendProgram(): Either<PersistenceError, ProcessedUser> =\n  either {\n    val user = fetchUser().bind()\n    val processed = user.process().bind()\n    processed\n  }\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The above two examples demonstrate how much simpler ",(0,r.jsx)(n.code,{children:"suspend"})," is over its ",(0,r.jsx)(n.code,{children:"IO"})," counterpart and how the ",(0,r.jsx)(n.code,{children:"either"})," computation block allows us to bind values of ",(0,r.jsx)(n.code,{children:"Either"})," to extract their right side all while inside ",(0,r.jsx)(n.code,{children:"suspend"}),". Arrow allows intermixing effects in suspension. What otherwise would have required the ",(0,r.jsx)(n.code,{children:"EitherT"})," transformer over ",(0,r.jsx)(n.code,{children:"IO"})," now it can just be expressed by wrapping in ",(0,r.jsx)(n.code,{children:"either"})," instead"]}),"\n",(0,r.jsx)(n.h3,{id:"dependency-injection",children:"Dependency injection"}),"\n",(0,r.jsxs)(n.p,{children:["We can use extension functions to do functional dependency injection with similar semantics as ",(0,r.jsx)(n.code,{children:"Reader"})," or ",(0,r.jsx)(n.code,{children:"Kleisli"}),".\nThey allow us to elegantly define syntax for a certain type."]}),"\n",(0,r.jsxs)(n.p,{children:["Let's reuse our previous domain of",(0,r.jsx)(n.code,{children:"User"}),", ",(0,r.jsx)(n.code,{children:"ProcessedUser"}),", but let's introduce ",(0,r.jsx)(n.code,{children:"Repo"})," and ",(0,r.jsx)(n.code,{children:"Persistence"})," layers to mimic what could be a small app with a couple layers."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"interface Repo {\n  suspend fun fetchUsers(): List<User>\n}\n\ninterface Persistence {\n  suspend fun User.process(): Either<PersistenceError, ProcessedUser>\n\n  suspend fun List<User>.process(): Either<PersistenceError, List<ProcessedUser>> =\n    either { map { it.process().bind() } }\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Given the above defined layers we can easily compose them by creating a product which implements the dependencies by delegation."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"class DataModule(\n  persistence: Persistence,\n  repo: Repo\n) : Persistence by persistence, Repo by repo\n"})}),"\n",(0,r.jsxs)(n.p,{children:["We can also define top-level functions based on constraints on the receiver.\nHere we define ",(0,r.jsx)(n.code,{children:"getProcessedUsers"})," which can only be called where ",(0,r.jsx)(n.code,{children:"R"})," is both ",(0,r.jsx)(n.code,{children:"Repo"})," and ",(0,r.jsx)(n.code,{children:"Persistence"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"/**\n * Generic top-level function based on syntax enabled by [Persistence] & [Repo] constraint\n */\nsuspend fun <R> R.getProcessedUsers(): Either<PersistenceError, List<ProcessedUser>>\n        where R : Repo,\n              R : Persistence = fetchUsers().process()\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"Context receivers",type:"info",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"../receivers-flatmap/",children:"Context receivers"})," offer a nicer approach to composition of layers."]})}),"\n",(0,r.jsx)(n.h2,{id:"performance",children:"Performance"}),"\n",(0,r.jsx)(n.admonition,{title:"In short",type:"tip",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"suspend"})," is extremely fast in comparison to ",(0,r.jsx)(n.code,{children:"IO<A>"}),", since ",(0,r.jsx)(n.code,{children:"IO<A>"})," is built at runtime and ",(0,r.jsx)(n.code,{children:"suspend"})," is built by the compiler."]})}),"\n",(0,r.jsxs)(n.p,{children:["Working with an actual data type such as ",(0,r.jsx)(n.code,{children:"IO<A>"})," implies that each composition of our program has some allocation cost.\nThis happens because ",(0,r.jsx)(n.code,{children:"IO"})," requires different data classes to move computation from the stack to the heap in order to compose them and preserve properties such as lazy evaluation semantics. In contrast, when using ",(0,r.jsx)(n.code,{children:"suspend"}),", the Kotlin compiler is aware of function composition on each suspension point and can desugar and specializes the program into more efficient target code. The code generated by the Kotlin compiler is better in terms of allocations and throughput when compared to other implementations of ",(0,r.jsx)(n.code,{children:"IO"})," in the JVM."]}),"\n",(0,r.jsx)(n.p,{children:"Let's take our previous example from ergonomics:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"import arrow.fx.IO\n\nfun number(): IO<Int> = IO.pure(1)\n\nfun triple(): IO<Triple<Int, Int, Int>> =\n  number().flatMap { a ->\n    number().flatMap { b ->\n      number().map { c ->\n        Triple(a, b, c)\n      }\n    }\n  }\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If we translate this piece of code to the ",(0,r.jsx)(n.code,{children:"data class"})," used, for example, in ",(0,r.jsx)(n.a,{href:"https://github.com/typelevel/cats-effect/blob/series/3.x/core/shared/src/main/scala/cats/effect/IO.scala",children:"Cats Effect"}),",\nwe need no less than 6 ",(0,r.jsx)(n.code,{children:"IO"})," values."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"fun number(): IO<Int> = IO.Just(1)\n\nfun triple(): IO<Triple<Int, Int, Int>> =\n  IO.FlatMap(IO.Pure(1)) { a ->\n    IO.FlatMap(IO.Pure(1)) { b ->\n      IO.Map(IO.Pure(1)) { c -> Triple(a, b, c) }\n    }\n  }\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This is necessary so when ",(0,r.jsx)(n.code,{children:"unsafeRun"})," is invoked the ",(0,r.jsx)(n.code,{children:"IO"})," program can find the branch representing the kind of operation of ",(0,r.jsx)(n.code,{children:"IO"})," that needs to be interpreted. In the example above ",(0,r.jsx)(n.code,{children:"IO.FlatMap"}),", ",(0,r.jsx)(n.code,{children:"IO.Map"})," or ",(0,r.jsx)(n.code,{children:"IO.Pure"})]}),"\n",(0,r.jsxs)(n.p,{children:["In contrast, ",(0,r.jsx)(n.code,{children:"suspend"})," can simply be wired by the Kotlin compiler eliminating the need for additional ",(0,r.jsx)(n.code,{children:"sealed class"})," declarations and allocations keeping computations in the stack instead of maintaining value level in memory representations of our program.\nThe Kotlin compiler rewrites the suspend program to a super fast runtime which uses a switch table and mutable state machine to run the ",(0,r.jsx)(n.code,{children:"suspend"})," program.\nFurthermore, the Kotlin compiler applies other optimizations focused on the speed of ",(0,r.jsx)(n.code,{children:"suspend"})," and memory usage of suspension, making it suitable for hot spots and places where otherwise allocations-based data types are not an option."]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var r=s(67294);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);