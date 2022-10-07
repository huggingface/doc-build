import{S as Ia,i as La,s as Na,e as n,k as d,w as C,t as o,M as Ba,c as l,d as a,m as h,a as s,x as S,h as r,b as p,G as t,g as i,y as O,L as Ha,q as G,o as I,B as L,v as Ua}from"../../chunks/vendor-hf-doc-builder.js";import{I as oa}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as Pe}from"../../chunks/CodeBlock-hf-doc-builder.js";function Ma(ra){let g,De,v,E,ae,N,et,oe,tt,Ae,P,at,re,ot,rt,xe,m,nt,ne,lt,st,le,ct,it,se,dt,ht,Te,B,je,D,pt,K,ut,mt,ze,H,Ce,k,A,ce,U,ft,ie,wt,Se,f,yt,de,_t,bt,he,gt,vt,Oe,Q,kt,Ge,u,$t,pe,Et,Pt,ue,Dt,At,me,xt,Tt,fe,jt,zt,Ie,$,x,we,M,Ct,ye,St,Le,w,Ot,_e,Gt,It,q,be,Lt,Nt,Ne,y,Bt,ge,Ht,Ut,ve,Mt,qt,Be,Y,He,_,Yt,ke,Jt,Rt,V,Ft,Kt,Ue,J,Me,T,Qt,W,Vt,Wt,qe,R,Ye,j,Xt,F,$e,Zt,ea,Ee,ta,aa,Je;return N=new oa({}),B=new Pe({props:{code:`import torch.nn as nn
from torch.nn.parallel import DistributedDataParallel

model = nn.Linear(10, 10)
ddp_model = DistributedDataParallel(model)`,highlighted:`<span class="hljs-keyword">import</span> torch.nn <span class="hljs-keyword">as</span> nn
<span class="hljs-keyword">from</span> torch.nn.parallel <span class="hljs-keyword">import</span> DistributedDataParallel

model = nn.Linear(<span class="hljs-number">10</span>, <span class="hljs-number">10</span>)
ddp_model = DistributedDataParallel(model)`}}),H=new Pe({props:{code:`+ from accelerate import Accelerator
+ accelerator = Accelerator()
  import torch.nn as nn
- from torch.nn.parallel import DistributedDataParallel

  model = nn.Linear(10,10)
+ model = accelerator.prepare(model)`,highlighted:`<span class="hljs-addition">+ from accelerate import Accelerator</span>
<span class="hljs-addition">+ accelerator = Accelerator()</span>
  import torch.nn as nn
<span class="hljs-deletion">- from torch.nn.parallel import DistributedDataParallel</span>

  model = nn.Linear(10,10)
<span class="hljs-addition">+ model = accelerator.prepare(model)</span>`}}),U=new oa({}),M=new oa({}),Y=new Pe({props:{code:`ddp_model, dataloader = accelerator.prepare(model, dataloader)

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
        accelerator.backward(loss)`}}),J=new Pe({props:{code:`  ddp_model, dataloader = accelerator.prepare(model, dataloader)

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
          accelerator.backward(loss)`}}),R=new Pe({props:{code:`ddp_model, dataloader = accelerator.prepare(model, dataloader)

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
        accelerator.backward(loss)`}}),{c(){g=n("meta"),De=d(),v=n("h1"),E=n("a"),ae=n("span"),C(N.$$.fragment),et=d(),oe=n("span"),tt=o("Gradient Synchronization"),Ae=d(),P=n("p"),at=o(`PyTorch\u2019s distributed module operates by communicating back and forth between all of the GPUs in your system.
This communication takes time, and ensuring all processes know the states of each other happens at particular triggerpoints
when using the `),re=n("code"),ot=o("ddp"),rt=o(" module."),xe=d(),m=n("p"),nt=o("These triggerpoints are added to the PyTorch model, specifically their "),ne=n("code"),lt=o("forward()"),st=o(" and "),le=n("code"),ct=o("backward()"),it=o(` methods.
This happens when the model is wrapped with `),se=n("code"),dt=o("DistributedDataParallel"),ht=o(":"),Te=d(),C(B.$$.fragment),je=d(),D=n("p"),pt=o("In \u{1F917} Accelerate this conversion happens automatically when calling "),K=n("a"),ut=o("prepare()"),mt=o(" and passing in your model."),ze=d(),C(H.$$.fragment),Ce=d(),k=n("h2"),A=n("a"),ce=n("span"),C(U.$$.fragment),ft=d(),ie=n("span"),wt=o("The slowdown in gradient accumulation"),Se=d(),f=n("p"),yt=o("You now understand that PyTorch adds hooks to the "),de=n("code"),_t=o("forward"),bt=o(" and "),he=n("code"),gt=o("backward"),vt=o(` method of your PyTorch model when
training in a distributed setup. But how does this risk slowing down your code?`),Oe=d(),Q=n("p"),kt=o(`In DDP (distributed data parallel), the specific order in which processes are performed and ran are expected
at specific points and these must also occur at roughly the same time before moving on.`),Ge=d(),u=n("p"),$t=o("The most direct example is when you update all of the parameters in a model through "),pe=n("code"),Et=o(".backward()"),Pt=o(`. All instances of the model
need to have updated their gradients, collated, and updated again before moving onto the next batch of data. But when performing
gradient accumulation, you accumulate `),ue=n("code"),Dt=o("n"),At=o(" losses and skip "),me=n("code"),xt=o(".backward()"),Tt=o(" until "),fe=n("code"),jt=o("n"),zt=o(` batches have been reached. This
can cause a significant slowdown since all the processes need to communicate with them more times than needed. How
can you avoid this overhead?`),Ie=d(),$=n("h2"),x=n("a"),we=n("span"),C(M.$$.fragment),Ct=d(),ye=n("span"),St=o("Solving the slowdown problem"),Le=d(),w=n("p"),Ot=o("Since you are skipping these batches, their gradients do not need to be synchronized until the point where "),_e=n("code"),Gt=o(".backward()"),It=o(` is actually called.
PyTorch cannot automagically tell when you need to do this, but they do provide a tool to help through the `),q=n("a"),be=n("code"),Lt=o("no_sync"),Nt=o(` context manager
that is added to your model after converting it to DDP.`),Ne=d(),y=n("p"),Bt=o("Under this context manager, PyTorch will skip synchronizing the gradients when "),ge=n("code"),Ht=o(".backward()"),Ut=o(" is called, and the first call to "),ve=n("code"),Mt=o(".backward()"),qt=o(` outside this
context manager will trigger the synchronization. See an example below:`),Be=d(),C(Y.$$.fragment),He=d(),_=n("p"),Yt=o(`In \u{1F917} Accelerate to make this an API that can be called no matter the training device (though it may not do anything if you are not in a distributed system!),
`),ke=n("code"),Jt=o("ddp_model.no_sync"),Rt=o(" gets replaced with "),V=n("a"),Ft=o("no_sync()"),Kt=o(" and operates the same way:"),Ue=d(),C(J.$$.fragment),Me=d(),T=n("p"),Qt=o("As you may expect, the "),W=n("a"),Vt=o("accumulate()"),Wt=o(` function wraps around this conditional check by keeping track of the current batch number, leaving you with the final
gradient accumulation API:`),qe=d(),C(R.$$.fragment),Ye=d(),j=n("p"),Xt=o("As a result, you should either use "),F=n("em"),$e=n("code"),Zt=o("accelerator.accumulate"),ea=o(" or "),Ee=n("code"),ta=o("accelerator.no_sync"),aa=o(" when it comes to API choice."),this.h()},l(e){const c=Ba('[data-svelte="svelte-1phssyn"]',document.head);g=l(c,"META",{name:!0,content:!0}),c.forEach(a),De=h(e),v=l(e,"H1",{class:!0});var Re=s(v);E=l(Re,"A",{id:!0,class:!0,href:!0});var na=s(E);ae=l(na,"SPAN",{});var la=s(ae);S(N.$$.fragment,la),la.forEach(a),na.forEach(a),et=h(Re),oe=l(Re,"SPAN",{});var sa=s(oe);tt=r(sa,"Gradient Synchronization"),sa.forEach(a),Re.forEach(a),Ae=h(e),P=l(e,"P",{});var Fe=s(P);at=r(Fe,`PyTorch\u2019s distributed module operates by communicating back and forth between all of the GPUs in your system.
This communication takes time, and ensuring all processes know the states of each other happens at particular triggerpoints
when using the `),re=l(Fe,"CODE",{});var ca=s(re);ot=r(ca,"ddp"),ca.forEach(a),rt=r(Fe," module."),Fe.forEach(a),xe=h(e),m=l(e,"P",{});var z=s(m);nt=r(z,"These triggerpoints are added to the PyTorch model, specifically their "),ne=l(z,"CODE",{});var ia=s(ne);lt=r(ia,"forward()"),ia.forEach(a),st=r(z," and "),le=l(z,"CODE",{});var da=s(le);ct=r(da,"backward()"),da.forEach(a),it=r(z,` methods.
This happens when the model is wrapped with `),se=l(z,"CODE",{});var ha=s(se);dt=r(ha,"DistributedDataParallel"),ha.forEach(a),ht=r(z,":"),z.forEach(a),Te=h(e),S(B.$$.fragment,e),je=h(e),D=l(e,"P",{});var Ke=s(D);pt=r(Ke,"In \u{1F917} Accelerate this conversion happens automatically when calling "),K=l(Ke,"A",{href:!0});var pa=s(K);ut=r(pa,"prepare()"),pa.forEach(a),mt=r(Ke," and passing in your model."),Ke.forEach(a),ze=h(e),S(H.$$.fragment,e),Ce=h(e),k=l(e,"H2",{class:!0});var Qe=s(k);A=l(Qe,"A",{id:!0,class:!0,href:!0});var ua=s(A);ce=l(ua,"SPAN",{});var ma=s(ce);S(U.$$.fragment,ma),ma.forEach(a),ua.forEach(a),ft=h(Qe),ie=l(Qe,"SPAN",{});var fa=s(ie);wt=r(fa,"The slowdown in gradient accumulation"),fa.forEach(a),Qe.forEach(a),Se=h(e),f=l(e,"P",{});var X=s(f);yt=r(X,"You now understand that PyTorch adds hooks to the "),de=l(X,"CODE",{});var wa=s(de);_t=r(wa,"forward"),wa.forEach(a),bt=r(X," and "),he=l(X,"CODE",{});var ya=s(he);gt=r(ya,"backward"),ya.forEach(a),vt=r(X,` method of your PyTorch model when
training in a distributed setup. But how does this risk slowing down your code?`),X.forEach(a),Oe=h(e),Q=l(e,"P",{});var _a=s(Q);kt=r(_a,`In DDP (distributed data parallel), the specific order in which processes are performed and ran are expected
at specific points and these must also occur at roughly the same time before moving on.`),_a.forEach(a),Ge=h(e),u=l(e,"P",{});var b=s(u);$t=r(b,"The most direct example is when you update all of the parameters in a model through "),pe=l(b,"CODE",{});var ba=s(pe);Et=r(ba,".backward()"),ba.forEach(a),Pt=r(b,`. All instances of the model
need to have updated their gradients, collated, and updated again before moving onto the next batch of data. But when performing
gradient accumulation, you accumulate `),ue=l(b,"CODE",{});var ga=s(ue);Dt=r(ga,"n"),ga.forEach(a),At=r(b," losses and skip "),me=l(b,"CODE",{});var va=s(me);xt=r(va,".backward()"),va.forEach(a),Tt=r(b," until "),fe=l(b,"CODE",{});var ka=s(fe);jt=r(ka,"n"),ka.forEach(a),zt=r(b,` batches have been reached. This
can cause a significant slowdown since all the processes need to communicate with them more times than needed. How
can you avoid this overhead?`),b.forEach(a),Ie=h(e),$=l(e,"H2",{class:!0});var Ve=s($);x=l(Ve,"A",{id:!0,class:!0,href:!0});var $a=s(x);we=l($a,"SPAN",{});var Ea=s(we);S(M.$$.fragment,Ea),Ea.forEach(a),$a.forEach(a),Ct=h(Ve),ye=l(Ve,"SPAN",{});var Pa=s(ye);St=r(Pa,"Solving the slowdown problem"),Pa.forEach(a),Ve.forEach(a),Le=h(e),w=l(e,"P",{});var Z=s(w);Ot=r(Z,"Since you are skipping these batches, their gradients do not need to be synchronized until the point where "),_e=l(Z,"CODE",{});var Da=s(_e);Gt=r(Da,".backward()"),Da.forEach(a),It=r(Z,` is actually called.
PyTorch cannot automagically tell when you need to do this, but they do provide a tool to help through the `),q=l(Z,"A",{href:!0,rel:!0});var Aa=s(q);be=l(Aa,"CODE",{});var xa=s(be);Lt=r(xa,"no_sync"),xa.forEach(a),Aa.forEach(a),Nt=r(Z,` context manager
that is added to your model after converting it to DDP.`),Z.forEach(a),Ne=h(e),y=l(e,"P",{});var ee=s(y);Bt=r(ee,"Under this context manager, PyTorch will skip synchronizing the gradients when "),ge=l(ee,"CODE",{});var Ta=s(ge);Ht=r(Ta,".backward()"),Ta.forEach(a),Ut=r(ee," is called, and the first call to "),ve=l(ee,"CODE",{});var ja=s(ve);Mt=r(ja,".backward()"),ja.forEach(a),qt=r(ee,` outside this
context manager will trigger the synchronization. See an example below:`),ee.forEach(a),Be=h(e),S(Y.$$.fragment,e),He=h(e),_=l(e,"P",{});var te=s(_);Yt=r(te,`In \u{1F917} Accelerate to make this an API that can be called no matter the training device (though it may not do anything if you are not in a distributed system!),
`),ke=l(te,"CODE",{});var za=s(ke);Jt=r(za,"ddp_model.no_sync"),za.forEach(a),Rt=r(te," gets replaced with "),V=l(te,"A",{href:!0});var Ca=s(V);Ft=r(Ca,"no_sync()"),Ca.forEach(a),Kt=r(te," and operates the same way:"),te.forEach(a),Ue=h(e),S(J.$$.fragment,e),Me=h(e),T=l(e,"P",{});var We=s(T);Qt=r(We,"As you may expect, the "),W=l(We,"A",{href:!0});var Sa=s(W);Vt=r(Sa,"accumulate()"),Sa.forEach(a),Wt=r(We,` function wraps around this conditional check by keeping track of the current batch number, leaving you with the final
gradient accumulation API:`),We.forEach(a),qe=h(e),S(R.$$.fragment,e),Ye=h(e),j=l(e,"P",{});var Xe=s(j);Xt=r(Xe,"As a result, you should either use "),F=l(Xe,"EM",{});var Ze=s(F);$e=l(Ze,"CODE",{});var Oa=s($e);Zt=r(Oa,"accelerator.accumulate"),Oa.forEach(a),ea=r(Ze," or "),Ee=l(Ze,"CODE",{});var Ga=s(Ee);ta=r(Ga,"accelerator.no_sync"),Ga.forEach(a),Ze.forEach(a),aa=r(Xe," when it comes to API choice."),Xe.forEach(a),this.h()},h(){p(g,"name","hf:doc:metadata"),p(g,"content",JSON.stringify(qa)),p(E,"id","gradient-synchronization"),p(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(E,"href","#gradient-synchronization"),p(v,"class","relative group"),p(K,"href","/docs/accelerate/v0.13.1/en/package_reference/accelerator#accelerate.Accelerator.prepare"),p(A,"id","the-slowdown-in-gradient-accumulation"),p(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(A,"href","#the-slowdown-in-gradient-accumulation"),p(k,"class","relative group"),p(x,"id","solving-the-slowdown-problem"),p(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(x,"href","#solving-the-slowdown-problem"),p($,"class","relative group"),p(q,"href","https://pytorch.org/docs/stable/generated/torch.nn.parallel.DistributedDataParallel.html#torch.nn.parallel.DistributedDataParallel.no_sync"),p(q,"rel","nofollow"),p(V,"href","/docs/accelerate/v0.13.1/en/package_reference/accelerator#accelerate.Accelerator.no_sync"),p(W,"href","/docs/accelerate/v0.13.1/en/package_reference/accelerator#accelerate.Accelerator.accumulate")},m(e,c){t(document.head,g),i(e,De,c),i(e,v,c),t(v,E),t(E,ae),O(N,ae,null),t(v,et),t(v,oe),t(oe,tt),i(e,Ae,c),i(e,P,c),t(P,at),t(P,re),t(re,ot),t(P,rt),i(e,xe,c),i(e,m,c),t(m,nt),t(m,ne),t(ne,lt),t(m,st),t(m,le),t(le,ct),t(m,it),t(m,se),t(se,dt),t(m,ht),i(e,Te,c),O(B,e,c),i(e,je,c),i(e,D,c),t(D,pt),t(D,K),t(K,ut),t(D,mt),i(e,ze,c),O(H,e,c),i(e,Ce,c),i(e,k,c),t(k,A),t(A,ce),O(U,ce,null),t(k,ft),t(k,ie),t(ie,wt),i(e,Se,c),i(e,f,c),t(f,yt),t(f,de),t(de,_t),t(f,bt),t(f,he),t(he,gt),t(f,vt),i(e,Oe,c),i(e,Q,c),t(Q,kt),i(e,Ge,c),i(e,u,c),t(u,$t),t(u,pe),t(pe,Et),t(u,Pt),t(u,ue),t(ue,Dt),t(u,At),t(u,me),t(me,xt),t(u,Tt),t(u,fe),t(fe,jt),t(u,zt),i(e,Ie,c),i(e,$,c),t($,x),t(x,we),O(M,we,null),t($,Ct),t($,ye),t(ye,St),i(e,Le,c),i(e,w,c),t(w,Ot),t(w,_e),t(_e,Gt),t(w,It),t(w,q),t(q,be),t(be,Lt),t(w,Nt),i(e,Ne,c),i(e,y,c),t(y,Bt),t(y,ge),t(ge,Ht),t(y,Ut),t(y,ve),t(ve,Mt),t(y,qt),i(e,Be,c),O(Y,e,c),i(e,He,c),i(e,_,c),t(_,Yt),t(_,ke),t(ke,Jt),t(_,Rt),t(_,V),t(V,Ft),t(_,Kt),i(e,Ue,c),O(J,e,c),i(e,Me,c),i(e,T,c),t(T,Qt),t(T,W),t(W,Vt),t(T,Wt),i(e,qe,c),O(R,e,c),i(e,Ye,c),i(e,j,c),t(j,Xt),t(j,F),t(F,$e),t($e,Zt),t(F,ea),t(F,Ee),t(Ee,ta),t(j,aa),Je=!0},p:Ha,i(e){Je||(G(N.$$.fragment,e),G(B.$$.fragment,e),G(H.$$.fragment,e),G(U.$$.fragment,e),G(M.$$.fragment,e),G(Y.$$.fragment,e),G(J.$$.fragment,e),G(R.$$.fragment,e),Je=!0)},o(e){I(N.$$.fragment,e),I(B.$$.fragment,e),I(H.$$.fragment,e),I(U.$$.fragment,e),I(M.$$.fragment,e),I(Y.$$.fragment,e),I(J.$$.fragment,e),I(R.$$.fragment,e),Je=!1},d(e){a(g),e&&a(De),e&&a(v),L(N),e&&a(Ae),e&&a(P),e&&a(xe),e&&a(m),e&&a(Te),L(B,e),e&&a(je),e&&a(D),e&&a(ze),L(H,e),e&&a(Ce),e&&a(k),L(U),e&&a(Se),e&&a(f),e&&a(Oe),e&&a(Q),e&&a(Ge),e&&a(u),e&&a(Ie),e&&a($),L(M),e&&a(Le),e&&a(w),e&&a(Ne),e&&a(y),e&&a(Be),L(Y,e),e&&a(He),e&&a(_),e&&a(Ue),L(J,e),e&&a(Me),e&&a(T),e&&a(qe),L(R,e),e&&a(Ye),e&&a(j)}}}const qa={local:"gradient-synchronization",sections:[{local:"the-slowdown-in-gradient-accumulation",title:"The slowdown in gradient accumulation"},{local:"solving-the-slowdown-problem",title:"Solving the slowdown problem"}],title:"Gradient Synchronization"};function Ya(ra){return Ua(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ka extends Ia{constructor(g){super();La(this,g,Ya,Ma,Na,{})}}export{Ka as default,qa as metadata};
