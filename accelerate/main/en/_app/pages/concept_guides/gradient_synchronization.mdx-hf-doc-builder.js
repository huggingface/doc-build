import{S as ka,i as $a,s as Ea,e as r,k as d,w as z,t as o,M as Pa,c as l,d as a,m as h,a as s,x as S,h as n,b as p,G as t,g as c,y as C,L as Da,q as O,o as G,B as I,v as xa}from"../../chunks/vendor-hf-doc-builder.js";import{I as Jt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as ve}from"../../chunks/CodeBlock-hf-doc-builder.js";function Aa(Rt){let g,ke,v,E,ee,L,Fe,te,Ke,$e,P,Qe,ae,Ve,We,Ee,m,Xe,oe,Ze,et,ne,tt,at,re,ot,nt,Pe,N,De,D,rt,R,lt,st,xe,B,Ae,k,x,le,H,it,se,ct,Te,f,dt,ie,ht,pt,ce,ut,mt,je,F,ft,ze,u,wt,de,yt,bt,he,_t,gt,pe,vt,kt,ue,$t,Et,Se,$,A,me,U,Pt,fe,Dt,Ce,w,xt,we,At,Tt,q,ye,jt,zt,Oe,y,St,be,Ct,Ot,_e,Gt,It,Ge,M,Ie,b,Lt,ge,Nt,Bt,K,Ht,Ut,Le,Y,Ne,T,qt,Q,Mt,Yt,Be,J,He;return L=new Jt({}),N=new ve({props:{code:`import torch.nn as nn
from torch.nn.parallel import DistributedDataParallel

model = nn.Linear(10, 10)
ddp_model = DistributedDataParallel(model)`,highlighted:`<span class="hljs-keyword">import</span> torch.nn <span class="hljs-keyword">as</span> nn
<span class="hljs-keyword">from</span> torch.nn.parallel <span class="hljs-keyword">import</span> DistributedDataParallel

model = nn.Linear(<span class="hljs-number">10</span>, <span class="hljs-number">10</span>)
ddp_model = DistributedDataParallel(model)`}}),B=new ve({props:{code:`+ from accelerate import Accelerator
+ accelerator = Accelerator()
  import torch.nn as nn
- from torch.nn.parallel import DistributedDataParallel

  model = nn.Linear(10,10)
+ model = accelerator.prepare(model)`,highlighted:`<span class="hljs-addition">+ from accelerate import Accelerator</span>
<span class="hljs-addition">+ accelerator = Accelerator()</span>
  import torch.nn as nn
<span class="hljs-deletion">- from torch.nn.parallel import DistributedDataParallel</span>

  model = nn.Linear(10,10)
<span class="hljs-addition">+ model = accelerator.prepare(model)</span>`}}),H=new Jt({}),U=new Jt({}),M=new ve({props:{code:`ddp_model, dataloader = accelerator.prepare(model, dataloader)

for index, batch in enumerate(dataloader):
    inputs, targets = batch
    # Trigger gradient synchronization on the last batch
    if index != (len(dataloader) - 1):
        with ddp_model.no_sync():
            # Gradients only accumulate
            outputs = ddp_model(inputs)
            loss = loss_func(outputs)
            accelerator.backward(loss)
    else:
        # Gradients finally sync
        outputs = ddp_model(inputs)
        loss = loss_func(outputs)
        accelerator.backward(loss)`,highlighted:`ddp_model, dataloader = accelerator.prepare(model, dataloader)

<span class="hljs-keyword">for</span> index, batch <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(dataloader):
    inputs, targets = batch
    <span class="hljs-comment"># Trigger gradient synchronization on the last batch</span>
    <span class="hljs-keyword">if</span> index != (<span class="hljs-built_in">len</span>(dataloader) - <span class="hljs-number">1</span>):
        <span class="hljs-keyword">with</span> ddp_model.no_sync():
            <span class="hljs-comment"># Gradients only accumulate</span>
            outputs = ddp_model(inputs)
            loss = loss_func(outputs)
            accelerator.backward(loss)
    <span class="hljs-keyword">else</span>:
        <span class="hljs-comment"># Gradients finally sync</span>
        outputs = ddp_model(inputs)
        loss = loss_func(outputs)
        accelerator.backward(loss)`}}),Y=new ve({props:{code:`  ddp_model, dataloader = accelerator.prepare(model, dataloader)

  for index, batch in enumerate(dataloader):
      inputs, targets = batch
      # Trigger gradient synchronization on the last batch
      if index != (len(dataloader)-1):
-         with ddp_model.no_sync():
+         with accelerator.no_sync(model):
              # Gradients only accumulate
              outputs = ddp_model(inputs)
              loss = loss_func(outputs, targets)
              accelerator.backward(loss)
      else:
          # Gradients finally sync
          outputs = ddp_model(inputs)
          loss = loss_func(outputs)
          accelerator.backward(loss)`,highlighted:`  ddp_model, dataloader = accelerator.prepare(model, dataloader)

  for index, batch in enumerate(dataloader):
      inputs, targets = batch
      # Trigger gradient synchronization on the last batch
      if index != (len(dataloader)-1):
<span class="hljs-deletion">-         with ddp_model.no_sync():</span>
<span class="hljs-addition">+         with accelerator.no_sync(model):</span>
              # Gradients only accumulate
              outputs = ddp_model(inputs)
              loss = loss_func(outputs, targets)
              accelerator.backward(loss)
      else:
          # Gradients finally sync
          outputs = ddp_model(inputs)
          loss = loss_func(outputs)
          accelerator.backward(loss)`}}),J=new ve({props:{code:`ddp_model, dataloader = accelerator.prepare(model, dataloader)

for batch in dataloader:
    with accelerator.accumulate(model):
        optimizer.zero_grad()
        inputs, targets = batch
        outputs = model(inputs)
        loss = loss_function(outputs, targets)
        accelerator.backward(loss)`,highlighted:`ddp_model, dataloader = accelerator.prepare(model, dataloader)

<span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> dataloader:
    <span class="hljs-keyword">with</span> accelerator.accumulate(model):
        optimizer.zero_grad()
        inputs, targets = batch
        outputs = model(inputs)
        loss = loss_function(outputs, targets)
        accelerator.backward(loss)`}}),{c(){g=r("meta"),ke=d(),v=r("h1"),E=r("a"),ee=r("span"),z(L.$$.fragment),Fe=d(),te=r("span"),Ke=o("Gradient Synchronization"),$e=d(),P=r("p"),Qe=o(`PyTorch\u2019s distributed module operates by communicating back and forth between all of the GPUs in your system.
This communication takes time, and ensuring all processes know the states of each other happens at particular triggerpoints
when using the `),ae=r("code"),Ve=o("ddp"),We=o(" module."),Ee=d(),m=r("p"),Xe=o("These triggerpoints are added to the PyTorch model, specifically their "),oe=r("code"),Ze=o("forward()"),et=o(" and "),ne=r("code"),tt=o("backward()"),at=o(` methods.
This happens when the model is wrapped with `),re=r("code"),ot=o("DistributedDataParallel"),nt=o(":"),Pe=d(),z(N.$$.fragment),De=d(),D=r("p"),rt=o("In \u{1F917} Accelerate this conversion happens automatically when calling "),R=r("a"),lt=o("prepare()"),st=o(" and passing in your model."),xe=d(),z(B.$$.fragment),Ae=d(),k=r("h2"),x=r("a"),le=r("span"),z(H.$$.fragment),it=d(),se=r("span"),ct=o("The slowdown in gradient accumulation"),Te=d(),f=r("p"),dt=o("You now understand that PyTorch adds hooks to the "),ie=r("code"),ht=o("forward"),pt=o(" and "),ce=r("code"),ut=o("backward"),mt=o(` method of your PyTorch model when
training in a distributed setup. But how does this risk slowing down your code?`),je=d(),F=r("p"),ft=o(`In DDP (distributed data parallel), the specific order in which processes are performed and ran are expected
at specific points and these must also occur at roughly the same time before moving on.`),ze=d(),u=r("p"),wt=o("The most direct example is when you update all of the parameters in a model through "),de=r("code"),yt=o(".backward()"),bt=o(`. All instances of the model
need to have updated their gradients, collated, and updated again before moving onto the next batch of data. But when performing
gradient accumulation, you accumulate `),he=r("code"),_t=o("n"),gt=o(" losses and skip "),pe=r("code"),vt=o(".backward()"),kt=o(" until "),ue=r("code"),$t=o("n"),Et=o(` batches have been reached. This
can cause a significant slowdown since all the processes need to communicate with them more times than needed. How
can you avoid this overhead?`),Se=d(),$=r("h2"),A=r("a"),me=r("span"),z(U.$$.fragment),Pt=d(),fe=r("span"),Dt=o("Solving the slowdown problem"),Ce=d(),w=r("p"),xt=o("Since you are skipping these batches, their gradients do not need to be synchronized until the point where "),we=r("code"),At=o(".backward()"),Tt=o(` is actually called.
PyTorch cannot automagically tell when you need to do this, but they do provide a tool to help through the `),q=r("a"),ye=r("code"),jt=o("no_sync"),zt=o(` context manager
that is added to your model after converting it to DDP.`),Oe=d(),y=r("p"),St=o("Under this context manager, PyTorch will skip synchronizing the gradients when "),be=r("code"),Ct=o(".backward()"),Ot=o(" is called, and the first call to "),_e=r("code"),Gt=o(".backward()"),It=o(` outside this
context manager will trigger the synchronization. See an example below:`),Ge=d(),z(M.$$.fragment),Ie=d(),b=r("p"),Lt=o(`In \u{1F917} Accelerate to make this an API that can be called no matter the training device (though it may not do anything if you are not in a distributed system!),
`),ge=r("code"),Nt=o("ddp_model.no_sync"),Bt=o(" gets replaced with "),K=r("a"),Ht=o("no_sync()"),Ut=o(" and operates the same way:"),Le=d(),z(Y.$$.fragment),Ne=d(),T=r("p"),qt=o("As you may expect, the "),Q=r("a"),Mt=o("accumulate()"),Yt=o(` function wraps around this conditional check by keeping track of the current batch number, leaving you with the final
gradient accumulation API:`),Be=d(),z(J.$$.fragment),this.h()},l(e){const i=Pa('[data-svelte="svelte-1phssyn"]',document.head);g=l(i,"META",{name:!0,content:!0}),i.forEach(a),ke=h(e),v=l(e,"H1",{class:!0});var Ue=s(v);E=l(Ue,"A",{id:!0,class:!0,href:!0});var Ft=s(E);ee=l(Ft,"SPAN",{});var Kt=s(ee);S(L.$$.fragment,Kt),Kt.forEach(a),Ft.forEach(a),Fe=h(Ue),te=l(Ue,"SPAN",{});var Qt=s(te);Ke=n(Qt,"Gradient Synchronization"),Qt.forEach(a),Ue.forEach(a),$e=h(e),P=l(e,"P",{});var qe=s(P);Qe=n(qe,`PyTorch\u2019s distributed module operates by communicating back and forth between all of the GPUs in your system.
This communication takes time, and ensuring all processes know the states of each other happens at particular triggerpoints
when using the `),ae=l(qe,"CODE",{});var Vt=s(ae);Ve=n(Vt,"ddp"),Vt.forEach(a),We=n(qe," module."),qe.forEach(a),Ee=h(e),m=l(e,"P",{});var j=s(m);Xe=n(j,"These triggerpoints are added to the PyTorch model, specifically their "),oe=l(j,"CODE",{});var Wt=s(oe);Ze=n(Wt,"forward()"),Wt.forEach(a),et=n(j," and "),ne=l(j,"CODE",{});var Xt=s(ne);tt=n(Xt,"backward()"),Xt.forEach(a),at=n(j,` methods.
This happens when the model is wrapped with `),re=l(j,"CODE",{});var Zt=s(re);ot=n(Zt,"DistributedDataParallel"),Zt.forEach(a),nt=n(j,":"),j.forEach(a),Pe=h(e),S(N.$$.fragment,e),De=h(e),D=l(e,"P",{});var Me=s(D);rt=n(Me,"In \u{1F917} Accelerate this conversion happens automatically when calling "),R=l(Me,"A",{href:!0});var ea=s(R);lt=n(ea,"prepare()"),ea.forEach(a),st=n(Me," and passing in your model."),Me.forEach(a),xe=h(e),S(B.$$.fragment,e),Ae=h(e),k=l(e,"H2",{class:!0});var Ye=s(k);x=l(Ye,"A",{id:!0,class:!0,href:!0});var ta=s(x);le=l(ta,"SPAN",{});var aa=s(le);S(H.$$.fragment,aa),aa.forEach(a),ta.forEach(a),it=h(Ye),se=l(Ye,"SPAN",{});var oa=s(se);ct=n(oa,"The slowdown in gradient accumulation"),oa.forEach(a),Ye.forEach(a),Te=h(e),f=l(e,"P",{});var V=s(f);dt=n(V,"You now understand that PyTorch adds hooks to the "),ie=l(V,"CODE",{});var na=s(ie);ht=n(na,"forward"),na.forEach(a),pt=n(V," and "),ce=l(V,"CODE",{});var ra=s(ce);ut=n(ra,"backward"),ra.forEach(a),mt=n(V,` method of your PyTorch model when
training in a distributed setup. But how does this risk slowing down your code?`),V.forEach(a),je=h(e),F=l(e,"P",{});var la=s(F);ft=n(la,`In DDP (distributed data parallel), the specific order in which processes are performed and ran are expected
at specific points and these must also occur at roughly the same time before moving on.`),la.forEach(a),ze=h(e),u=l(e,"P",{});var _=s(u);wt=n(_,"The most direct example is when you update all of the parameters in a model through "),de=l(_,"CODE",{});var sa=s(de);yt=n(sa,".backward()"),sa.forEach(a),bt=n(_,`. All instances of the model
need to have updated their gradients, collated, and updated again before moving onto the next batch of data. But when performing
gradient accumulation, you accumulate `),he=l(_,"CODE",{});var ia=s(he);_t=n(ia,"n"),ia.forEach(a),gt=n(_," losses and skip "),pe=l(_,"CODE",{});var ca=s(pe);vt=n(ca,".backward()"),ca.forEach(a),kt=n(_," until "),ue=l(_,"CODE",{});var da=s(ue);$t=n(da,"n"),da.forEach(a),Et=n(_,` batches have been reached. This
can cause a significant slowdown since all the processes need to communicate with them more times than needed. How
can you avoid this overhead?`),_.forEach(a),Se=h(e),$=l(e,"H2",{class:!0});var Je=s($);A=l(Je,"A",{id:!0,class:!0,href:!0});var ha=s(A);me=l(ha,"SPAN",{});var pa=s(me);S(U.$$.fragment,pa),pa.forEach(a),ha.forEach(a),Pt=h(Je),fe=l(Je,"SPAN",{});var ua=s(fe);Dt=n(ua,"Solving the slowdown problem"),ua.forEach(a),Je.forEach(a),Ce=h(e),w=l(e,"P",{});var W=s(w);xt=n(W,"Since you are skipping these batches, their gradients do not need to be synchronized until the point where "),we=l(W,"CODE",{});var ma=s(we);At=n(ma,".backward()"),ma.forEach(a),Tt=n(W,` is actually called.
PyTorch cannot automagically tell when you need to do this, but they do provide a tool to help through the `),q=l(W,"A",{href:!0,rel:!0});var fa=s(q);ye=l(fa,"CODE",{});var wa=s(ye);jt=n(wa,"no_sync"),wa.forEach(a),fa.forEach(a),zt=n(W,` context manager
that is added to your model after converting it to DDP.`),W.forEach(a),Oe=h(e),y=l(e,"P",{});var X=s(y);St=n(X,"Under this context manager, PyTorch will skip synchronizing the gradients when "),be=l(X,"CODE",{});var ya=s(be);Ct=n(ya,".backward()"),ya.forEach(a),Ot=n(X," is called, and the first call to "),_e=l(X,"CODE",{});var ba=s(_e);Gt=n(ba,".backward()"),ba.forEach(a),It=n(X,` outside this
context manager will trigger the synchronization. See an example below:`),X.forEach(a),Ge=h(e),S(M.$$.fragment,e),Ie=h(e),b=l(e,"P",{});var Z=s(b);Lt=n(Z,`In \u{1F917} Accelerate to make this an API that can be called no matter the training device (though it may not do anything if you are not in a distributed system!),
`),ge=l(Z,"CODE",{});var _a=s(ge);Nt=n(_a,"ddp_model.no_sync"),_a.forEach(a),Bt=n(Z," gets replaced with "),K=l(Z,"A",{href:!0});var ga=s(K);Ht=n(ga,"no_sync()"),ga.forEach(a),Ut=n(Z," and operates the same way:"),Z.forEach(a),Le=h(e),S(Y.$$.fragment,e),Ne=h(e),T=l(e,"P",{});var Re=s(T);qt=n(Re,"As you may expect, the "),Q=l(Re,"A",{href:!0});var va=s(Q);Mt=n(va,"accumulate()"),va.forEach(a),Yt=n(Re,` function wraps around this conditional check by keeping track of the current batch number, leaving you with the final
gradient accumulation API:`),Re.forEach(a),Be=h(e),S(J.$$.fragment,e),this.h()},h(){p(g,"name","hf:doc:metadata"),p(g,"content",JSON.stringify(Ta)),p(E,"id","gradient-synchronization"),p(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(E,"href","#gradient-synchronization"),p(v,"class","relative group"),p(R,"href","/docs/accelerate/main/en/package_reference/accelerator#accelerate.Accelerator.prepare"),p(x,"id","the-slowdown-in-gradient-accumulation"),p(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(x,"href","#the-slowdown-in-gradient-accumulation"),p(k,"class","relative group"),p(A,"id","solving-the-slowdown-problem"),p(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(A,"href","#solving-the-slowdown-problem"),p($,"class","relative group"),p(q,"href","https://pytorch.org/docs/stable/generated/torch.nn.parallel.DistributedDataParallel.html#torch.nn.parallel.DistributedDataParallel.no_sync"),p(q,"rel","nofollow"),p(K,"href","/docs/accelerate/main/en/package_reference/accelerator#accelerate.Accelerator.no_sync"),p(Q,"href","/docs/accelerate/main/en/package_reference/accelerator#accelerate.Accelerator.accumulate")},m(e,i){t(document.head,g),c(e,ke,i),c(e,v,i),t(v,E),t(E,ee),C(L,ee,null),t(v,Fe),t(v,te),t(te,Ke),c(e,$e,i),c(e,P,i),t(P,Qe),t(P,ae),t(ae,Ve),t(P,We),c(e,Ee,i),c(e,m,i),t(m,Xe),t(m,oe),t(oe,Ze),t(m,et),t(m,ne),t(ne,tt),t(m,at),t(m,re),t(re,ot),t(m,nt),c(e,Pe,i),C(N,e,i),c(e,De,i),c(e,D,i),t(D,rt),t(D,R),t(R,lt),t(D,st),c(e,xe,i),C(B,e,i),c(e,Ae,i),c(e,k,i),t(k,x),t(x,le),C(H,le,null),t(k,it),t(k,se),t(se,ct),c(e,Te,i),c(e,f,i),t(f,dt),t(f,ie),t(ie,ht),t(f,pt),t(f,ce),t(ce,ut),t(f,mt),c(e,je,i),c(e,F,i),t(F,ft),c(e,ze,i),c(e,u,i),t(u,wt),t(u,de),t(de,yt),t(u,bt),t(u,he),t(he,_t),t(u,gt),t(u,pe),t(pe,vt),t(u,kt),t(u,ue),t(ue,$t),t(u,Et),c(e,Se,i),c(e,$,i),t($,A),t(A,me),C(U,me,null),t($,Pt),t($,fe),t(fe,Dt),c(e,Ce,i),c(e,w,i),t(w,xt),t(w,we),t(we,At),t(w,Tt),t(w,q),t(q,ye),t(ye,jt),t(w,zt),c(e,Oe,i),c(e,y,i),t(y,St),t(y,be),t(be,Ct),t(y,Ot),t(y,_e),t(_e,Gt),t(y,It),c(e,Ge,i),C(M,e,i),c(e,Ie,i),c(e,b,i),t(b,Lt),t(b,ge),t(ge,Nt),t(b,Bt),t(b,K),t(K,Ht),t(b,Ut),c(e,Le,i),C(Y,e,i),c(e,Ne,i),c(e,T,i),t(T,qt),t(T,Q),t(Q,Mt),t(T,Yt),c(e,Be,i),C(J,e,i),He=!0},p:Da,i(e){He||(O(L.$$.fragment,e),O(N.$$.fragment,e),O(B.$$.fragment,e),O(H.$$.fragment,e),O(U.$$.fragment,e),O(M.$$.fragment,e),O(Y.$$.fragment,e),O(J.$$.fragment,e),He=!0)},o(e){G(L.$$.fragment,e),G(N.$$.fragment,e),G(B.$$.fragment,e),G(H.$$.fragment,e),G(U.$$.fragment,e),G(M.$$.fragment,e),G(Y.$$.fragment,e),G(J.$$.fragment,e),He=!1},d(e){a(g),e&&a(ke),e&&a(v),I(L),e&&a($e),e&&a(P),e&&a(Ee),e&&a(m),e&&a(Pe),I(N,e),e&&a(De),e&&a(D),e&&a(xe),I(B,e),e&&a(Ae),e&&a(k),I(H),e&&a(Te),e&&a(f),e&&a(je),e&&a(F),e&&a(ze),e&&a(u),e&&a(Se),e&&a($),I(U),e&&a(Ce),e&&a(w),e&&a(Oe),e&&a(y),e&&a(Ge),I(M,e),e&&a(Ie),e&&a(b),e&&a(Le),I(Y,e),e&&a(Ne),e&&a(T),e&&a(Be),I(J,e)}}}const Ta={local:"gradient-synchronization",sections:[{local:"the-slowdown-in-gradient-accumulation",title:"The slowdown in gradient accumulation"},{local:"solving-the-slowdown-problem",title:"Solving the slowdown problem"}],title:"Gradient Synchronization"};function ja(Rt){return xa(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Oa extends ka{constructor(g){super();$a(this,g,ja,Aa,Ea,{})}}export{Oa as default,Ta as metadata};
