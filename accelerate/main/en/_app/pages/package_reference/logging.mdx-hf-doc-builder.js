import{S as Xe,i as Ye,s as Ze,e as a,k as f,w as M,t as s,M as et,c as g,d as l,m as d,a as r,x as S,h as n,b as v,G as t,g as m,y as T,q as I,o as N,B as F,v as tt,L as lt}from"../../chunks/vendor-hf-doc-builder.js";import{D as ot}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Se}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as We}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as at}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function gt(ee){let i,j,_,p,$;return p=new Se({props:{code:`from accelerate.logging import get_logger

logger = get_logger(__name__)

logger.info("My log", main_process_only=False)
logger.debug("My log", main_process_only=True)

logger = get_logger(__name__, accelerate_log_level="DEBUG")
logger.info("My log")
logger.debug("My second log")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> accelerate.logging <span class="hljs-keyword">import</span> get_logger

<span class="hljs-meta">&gt;&gt;&gt; </span>logger = get_logger(__name__)

<span class="hljs-meta">&gt;&gt;&gt; </span>logger.info(<span class="hljs-string">&quot;My log&quot;</span>, main_process_only=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logger.debug(<span class="hljs-string">&quot;My log&quot;</span>, main_process_only=<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logger = get_logger(__name__, accelerate_log_level=<span class="hljs-string">&quot;DEBUG&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logger.info(<span class="hljs-string">&quot;My log&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logger.debug(<span class="hljs-string">&quot;My second log&quot;</span>)`}}),{c(){i=a("p"),j=s("Example:"),_=f(),M(p.$$.fragment)},l(o){i=g(o,"P",{});var E=r(i);j=n(E,"Example:"),E.forEach(l),_=d(o),S(p.$$.fragment,o)},m(o,E){m(o,i,E),t(i,j),m(o,_,E),T(p,o,E),$=!0},p:lt,i(o){$||(I(p.$$.fragment,o),$=!0)},o(o){N(p.$$.fragment,o),$=!1},d(o){o&&l(i),o&&l(_),F(p,o)}}}function st(ee){let i,j,_,p,$,o,E,V,ce,te,w,ie,U,pe,_e,z,me,he,le,A,oe,y,L,H,q,fe,J,de,ae,u,ue,K,ve,$e,Q,Ee,we,W,ye,be,ge,O,se,h,D,je,b,Le,X,ke,xe,Y,Ce,Ae,qe,G,Oe,Z,De,Pe,k,re;return o=new We({}),A=new Se({props:{code:`- import logging
+ from accelerate.logging import get_logger
- logger = logging.getLogger(__name__)
+ logger = get_logger(__name__)`,highlighted:`<span class="hljs-deletion">- import logging</span>
<span class="hljs-addition">+ from accelerate.logging import get_logger</span>
<span class="hljs-deletion">- logger = logging.getLogger(__name__)</span>
<span class="hljs-addition">+ logger = get_logger(__name__)</span>`}}),q=new We({}),O=new Se({props:{code:`from accelerate.logging import get_logger

logger = get_logger(__name__, log_level="INFO")`,highlighted:`<span class="hljs-keyword">from</span> accelerate.logging <span class="hljs-keyword">import</span> get_logger

logger = get_logger(__name__, log_level=<span class="hljs-string">&quot;INFO&quot;</span>)`}}),D=new ot({props:{name:"accelerate.logging.get_logger",anchor:"accelerate.logging.get_logger",parameters:[{name:"name",val:": str"},{name:"log_level",val:": str = None"}],parametersDescription:[{anchor:"accelerate.logging.get_logger.name",description:`<strong>name</strong> (<code>str</code>) &#x2014;
The name for the logger, such as <code>__file__</code>`,name:"name"},{anchor:"accelerate.logging.get_logger.log_level",description:`<strong>log_level</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The log level to use. If not passed, will default to the <code>LOG_LEVEL</code> environment variable, or <code>INFO</code> if not`,name:"log_level"}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/logging.py#L53"}}),k=new at({props:{anchor:"accelerate.logging.get_logger.example",$$slots:{default:[gt]},$$scope:{ctx:ee}}}),{c(){i=a("meta"),j=f(),_=a("h1"),p=a("a"),$=a("span"),M(o.$$.fragment),E=f(),V=a("span"),ce=s("Logging with Accelerate"),te=f(),w=a("p"),ie=s(`Accelerate has its own logging utility to handle logging while in a distributed system.
To utilize this replace cases of `),U=a("code"),pe=s("logging"),_e=s(" with "),z=a("code"),me=s("accelerate.logging"),he=s(":"),le=f(),M(A.$$.fragment),oe=f(),y=a("h2"),L=a("a"),H=a("span"),M(q.$$.fragment),fe=f(),J=a("span"),de=s("Setting the log level"),ae=f(),u=a("p"),ue=s("The log level can be set with the "),K=a("code"),ve=s("ACCELERATE_LOG_LEVEL"),$e=s(` environment variable or by passing
`),Q=a("code"),Ee=s("log_level"),we=s(" to "),W=a("code"),ye=s("get_logger"),be=s(":"),ge=f(),M(O.$$.fragment),se=f(),h=a("div"),M(D.$$.fragment),je=f(),b=a("p"),Le=s("Returns a "),X=a("code"),ke=s("logging.Logger"),xe=s(" for "),Y=a("code"),Ce=s("name"),Ae=s(" that can handle multiprocessing."),qe=f(),G=a("p"),Oe=s("If a log should be called on all processes, pass "),Z=a("code"),De=s("main_process_only=False"),Pe=f(),M(k.$$.fragment),this.h()},l(e){const c=et('[data-svelte="svelte-1phssyn"]',document.head);i=g(c,"META",{name:!0,content:!0}),c.forEach(l),j=d(e),_=g(e,"H1",{class:!0});var P=r(_);p=g(P,"A",{id:!0,class:!0,href:!0});var Te=r(p);$=g(Te,"SPAN",{});var Ie=r($);S(o.$$.fragment,Ie),Ie.forEach(l),Te.forEach(l),E=d(P),V=g(P,"SPAN",{});var Ne=r(V);ce=n(Ne,"Logging with Accelerate"),Ne.forEach(l),P.forEach(l),te=d(e),w=g(e,"P",{});var B=r(w);ie=n(B,`Accelerate has its own logging utility to handle logging while in a distributed system.
To utilize this replace cases of `),U=g(B,"CODE",{});var Fe=r(U);pe=n(Fe,"logging"),Fe.forEach(l),_e=n(B," with "),z=g(B,"CODE",{});var Ge=r(z);me=n(Ge,"accelerate.logging"),Ge.forEach(l),he=n(B,":"),B.forEach(l),le=d(e),S(A.$$.fragment,e),oe=d(e),y=g(e,"H2",{class:!0});var ne=r(y);L=g(ne,"A",{id:!0,class:!0,href:!0});var Be=r(L);H=g(Be,"SPAN",{});var Re=r(H);S(q.$$.fragment,Re),Re.forEach(l),Be.forEach(l),fe=d(ne),J=g(ne,"SPAN",{});var Ve=r(J);de=n(Ve,"Setting the log level"),Ve.forEach(l),ne.forEach(l),ae=d(e),u=g(e,"P",{});var x=r(u);ue=n(x,"The log level can be set with the "),K=g(x,"CODE",{});var Ue=r(K);ve=n(Ue,"ACCELERATE_LOG_LEVEL"),Ue.forEach(l),$e=n(x,` environment variable or by passing
`),Q=g(x,"CODE",{});var ze=r(Q);Ee=n(ze,"log_level"),ze.forEach(l),we=n(x," to "),W=g(x,"CODE",{});var He=r(W);ye=n(He,"get_logger"),He.forEach(l),be=n(x,":"),x.forEach(l),ge=d(e),S(O.$$.fragment,e),se=d(e),h=g(e,"DIV",{class:!0});var C=r(h);S(D.$$.fragment,C),je=d(C),b=g(C,"P",{});var R=r(b);Le=n(R,"Returns a "),X=g(R,"CODE",{});var Je=r(X);ke=n(Je,"logging.Logger"),Je.forEach(l),xe=n(R," for "),Y=g(R,"CODE",{});var Ke=r(Y);Ce=n(Ke,"name"),Ke.forEach(l),Ae=n(R," that can handle multiprocessing."),R.forEach(l),qe=d(C),G=g(C,"P",{});var Me=r(G);Oe=n(Me,"If a log should be called on all processes, pass "),Z=g(Me,"CODE",{});var Qe=r(Z);De=n(Qe,"main_process_only=False"),Qe.forEach(l),Me.forEach(l),Pe=d(C),S(k.$$.fragment,C),C.forEach(l),this.h()},h(){v(i,"name","hf:doc:metadata"),v(i,"content",JSON.stringify(rt)),v(p,"id","logging-with-accelerate"),v(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(p,"href","#logging-with-accelerate"),v(_,"class","relative group"),v(L,"id","accelerate.logging.get_logger"),v(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(L,"href","#accelerate.logging.get_logger"),v(y,"class","relative group"),v(h,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,c){t(document.head,i),m(e,j,c),m(e,_,c),t(_,p),t(p,$),T(o,$,null),t(_,E),t(_,V),t(V,ce),m(e,te,c),m(e,w,c),t(w,ie),t(w,U),t(U,pe),t(w,_e),t(w,z),t(z,me),t(w,he),m(e,le,c),T(A,e,c),m(e,oe,c),m(e,y,c),t(y,L),t(L,H),T(q,H,null),t(y,fe),t(y,J),t(J,de),m(e,ae,c),m(e,u,c),t(u,ue),t(u,K),t(K,ve),t(u,$e),t(u,Q),t(Q,Ee),t(u,we),t(u,W),t(W,ye),t(u,be),m(e,ge,c),T(O,e,c),m(e,se,c),m(e,h,c),T(D,h,null),t(h,je),t(h,b),t(b,Le),t(b,X),t(X,ke),t(b,xe),t(b,Y),t(Y,Ce),t(b,Ae),t(h,qe),t(h,G),t(G,Oe),t(G,Z),t(Z,De),t(h,Pe),T(k,h,null),re=!0},p(e,[c]){const P={};c&2&&(P.$$scope={dirty:c,ctx:e}),k.$set(P)},i(e){re||(I(o.$$.fragment,e),I(A.$$.fragment,e),I(q.$$.fragment,e),I(O.$$.fragment,e),I(D.$$.fragment,e),I(k.$$.fragment,e),re=!0)},o(e){N(o.$$.fragment,e),N(A.$$.fragment,e),N(q.$$.fragment,e),N(O.$$.fragment,e),N(D.$$.fragment,e),N(k.$$.fragment,e),re=!1},d(e){l(i),e&&l(j),e&&l(_),F(o),e&&l(te),e&&l(w),e&&l(le),F(A,e),e&&l(oe),e&&l(y),F(q),e&&l(ae),e&&l(u),e&&l(ge),F(O,e),e&&l(se),e&&l(h),F(D),F(k)}}}const rt={local:"logging-with-accelerate",sections:[{local:"accelerate.logging.get_logger",title:"Setting the log level"}],title:"Logging with Accelerate"};function nt(ee){return tt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ht extends Xe{constructor(i){super();Ye(this,i,nt,st,Ze,{})}}export{ht as default,rt as metadata};
