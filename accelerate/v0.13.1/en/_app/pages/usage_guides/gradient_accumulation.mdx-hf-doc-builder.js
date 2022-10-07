import{S as Kt,i as Qt,s as Vt,e as i,k as u,w,t as l,M as Xt,c as s,d as t,m as p,a as n,x as v,h as c,b as d,G as a,g as o,y as $,q as b,o as y,B as A,v as Zt}from"../../chunks/vendor-hf-doc-builder.js";import{T as ea}from"../../chunks/Tip-hf-doc-builder.js";import{I as Re}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as ne}from"../../chunks/CodeBlock-hf-doc-builder.js";function ta(ge){let h,T,m,_,E;return{c(){h=i("p"),T=l("In its current state, this code is not going to perform gradient accumulation efficiently due to a process called gradient synchronization. Read more about that in the "),m=i("a"),_=l("Concepts tutorial"),E=l("!"),this.h()},l(g){h=s(g,"P",{});var k=n(h);T=c(k,"In its current state, this code is not going to perform gradient accumulation efficiently due to a process called gradient synchronization. Read more about that in the "),m=s(k,"A",{href:!0});var S=n(m);_=c(S,"Concepts tutorial"),S.forEach(t),E=c(k,"!"),k.forEach(t),this.h()},h(){d(m,"href","concept_guides/gradient_synchronization")},m(g,k){o(g,h,k),a(h,T),a(h,m),a(m,_),a(h,E)},d(g){g&&t(h)}}}function aa(ge){let h,T,m,_,E,g,k,S,De,_e,K,We,we,Q,Je,ve,V,Ue,$e,X,Ke,be,B,ye,j,C,le,F,Qe,ce,Ve,Ae,Z,Xe,ke,H,ze,q,Ee,x,N,ue,Y,Ze,pe,et,je,f,tt,de,at,rt,ee,ot,it,he,st,nt,te,lt,ct,xe,M,Pe,G,ut,ae,pt,dt,Te,O,Se,re,ht,Ce,R,qe,I,mt,oe,ft,gt,Ne,P,L,me,D,_t,fe,wt,Ge,ie,vt,Ie,W,Le,J,$t,se,bt,Be;return g=new Re({}),B=new ne({props:{code:`device = "cuda"
model.to(device)

gradient_accumulation_steps = 2

for index, batch in enumerate(training_dataloader):
    inputs, targets = batch
    inputs = inputs.to(device)
    targets = targets.to(device)
    outputs = model(inputs)
    loss = loss_function(outputs, targets)
    loss = loss / gradient_accumulation_steps
    loss.backward()
    if (index + 1) % gradient_accumulation_steps == 0:
        optimizer.step()
        scheduler.step()
        optimizer.zero_grad()`,highlighted:`device = <span class="hljs-string">&quot;cuda&quot;</span>
model.to(device)

gradient_accumulation_steps = <span class="hljs-number">2</span>

<span class="hljs-keyword">for</span> index, batch <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(training_dataloader):
    inputs, targets = batch
    inputs = inputs.to(device)
    targets = targets.to(device)
    outputs = model(inputs)
    loss = loss_function(outputs, targets)
    loss = loss / gradient_accumulation_steps
    loss.backward()
    <span class="hljs-keyword">if</span> (index + <span class="hljs-number">1</span>) % gradient_accumulation_steps == <span class="hljs-number">0</span>:
        optimizer.step()
        scheduler.step()
        optimizer.zero_grad()`}}),F=new Re({}),H=new ne({props:{code:`+ from accelerate import Accelerator
+ accelerator = Accelerator()

+ model, optimizer, training_dataloader, scheduler = accelerator.prepare(
+     model, optimizer, training_dataloader, scheduler
+ )

  for index, batch in enumerate(training_dataloader):
      inputs, targets = batch
-     inputs = inputs.to(device)
-     targets = targets.to(device)
      outputs = model(inputs)
      loss = loss_function(outputs, targets)
      loss = loss / gradient_accumulation_steps
+     accelerator.backward(loss)
      if (index+1) % gradient_accumulation_steps == 0:
          optimizer.step()
          scheduler.step()
          optimizer.zero_grad()`,highlighted:`<span class="hljs-addition">+ from accelerate import Accelerator</span>
<span class="hljs-addition">+ accelerator = Accelerator()</span>

<span class="hljs-addition">+ model, optimizer, training_dataloader, scheduler = accelerator.prepare(</span>
<span class="hljs-addition">+     model, optimizer, training_dataloader, scheduler</span>
<span class="hljs-addition">+ )</span>

  for index, batch in enumerate(training_dataloader):
      inputs, targets = batch
<span class="hljs-deletion">-     inputs = inputs.to(device)</span>
<span class="hljs-deletion">-     targets = targets.to(device)</span>
      outputs = model(inputs)
      loss = loss_function(outputs, targets)
      loss = loss / gradient_accumulation_steps
<span class="hljs-addition">+     accelerator.backward(loss)</span>
      if (index+1) % gradient_accumulation_steps == 0:
          optimizer.step()
          scheduler.step()
          optimizer.zero_grad()`}}),q=new ea({props:{warning:!0,$$slots:{default:[ta]},$$scope:{ctx:ge}}}),Y=new Re({}),M=new ne({props:{code:`  from accelerate import Accelerator
- accelerator = Accelerator()
+ accelerator = Accelerator(gradient_accumulation_steps=2)`,highlighted:`  from accelerate import Accelerator
<span class="hljs-deletion">- accelerator = Accelerator()</span>
<span class="hljs-addition">+ accelerator = Accelerator(gradient_accumulation_steps=2)</span>`}}),O=new ne({props:{code:`- for index, batch in enumerate(training_dataloader):
+ for batch in training_dataloader:
+     with accelerator.accumulate(model):
          inputs, targets = batch
          outputs = model(inputs)`,highlighted:`<span class="hljs-deletion">- for index, batch in enumerate(training_dataloader):</span>
<span class="hljs-addition">+ for batch in training_dataloader:</span>
<span class="hljs-addition">+     with accelerator.accumulate(model):</span>
          inputs, targets = batch
          outputs = model(inputs)`}}),R=new ne({props:{code:`- loss = loss / gradient_accumulation_steps
  accelerator.backward(loss)
- if (index+1) % gradient_accumulation_steps == 0:
  optimizer.step()
  scheduler.step()
  optimizer.zero_grad()`,highlighted:`<span class="hljs-deletion">- loss = loss / gradient_accumulation_steps</span>
  accelerator.backward(loss)
<span class="hljs-deletion">- if (index+1) % gradient_accumulation_steps == 0:</span>
  optimizer.step()
  scheduler.step()
  optimizer.zero_grad()`}}),D=new Re({}),W=new ne({props:{code:`for batch in training_dataloader:
    with accelerator.accumulate(model):
        inputs, targets = batch
        outputs = model(inputs)
        loss = loss_function(outputs, targets)
        accelerator.backward(loss)
        optimizer.step()
        scheduler.step()
        optimizer.zero_grad()`,highlighted:`<span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> training_dataloader:
    <span class="hljs-keyword">with</span> accelerator.accumulate(model):
        inputs, targets = batch
        outputs = model(inputs)
        loss = loss_function(outputs, targets)
        accelerator.backward(loss)
        optimizer.step()
        scheduler.step()
        optimizer.zero_grad()`}}),{c(){h=i("meta"),T=u(),m=i("h1"),_=i("a"),E=i("span"),w(g.$$.fragment),k=u(),S=i("span"),De=l("Performing gradient accumulation with \u{1F917} Accelerate"),_e=u(),K=i("p"),We=l(`Gradient accumulation is a technique where you can train on bigger batch sizes than
your machine would normally be able to fit into memory. This is done by accumulating gradients over
several batches, and only stepping the optimizer after a certain number of batches have been performed.`),we=u(),Q=i("p"),Je=l(`While technically standard gradient accumulation code would work fine in a distributed setup, it is not the most efficient
method for doing so and you may experience considerable slowdowns!`),ve=u(),V=i("p"),Ue=l(`In this tutorial you will see how to quickly setup gradient accumulation and perform it with the utilities provided in \u{1F917} Accelerate,
which can total to adding just one new line of code!`),$e=u(),X=i("p"),Ke=l("This example will use a very simplistic PyTorch training loop that performs gradient accumulation every two batches:"),be=u(),w(B.$$.fragment),ye=u(),j=i("h2"),C=i("a"),le=i("span"),w(F.$$.fragment),Qe=u(),ce=i("span"),Ve=l("Converting it to \u{1F917} Accelerate"),Ae=u(),Z=i("p"),Xe=l("First the code shown earlier will be converted to utilize \u{1F917} Accelerate without the special gradient accumulation helper:"),ke=u(),w(H.$$.fragment),ze=u(),w(q.$$.fragment),Ee=u(),x=i("h2"),N=i("a"),ue=i("span"),w(Y.$$.fragment),Ze=u(),pe=i("span"),et=l("Letting \u{1F917} Accelerate handle gradient accumulation"),je=u(),f=i("p"),tt=l("All that is left now is to let \u{1F917} Accelerate handle the gradient accumulation for us. To do so you should pass in a "),de=i("code"),at=l("gradient_accumulation_steps"),rt=l(" parameter to "),ee=i("a"),ot=l("Accelerator"),it=l(`, dictating the number
of steps to perform before each call to `),he=i("code"),st=l("step()"),nt=l(" and how to automatically adjust the loss during the call to "),te=i("a"),lt=l("backward()"),ct=l(":"),xe=u(),w(M.$$.fragment),Pe=u(),G=i("p"),ut=l("From here you can use the "),ae=i("a"),pt=l("accumulate()"),dt=l(` context manager from inside your training loop to automatically perform the gradient accumulation for you!
You just wrap it around the entire training part of our code:`),Te=u(),w(O.$$.fragment),Se=u(),re=i("p"),ht=l("You can remove all the special checks for the step number and the loss adjustment:"),Ce=u(),w(R.$$.fragment),qe=u(),I=i("p"),mt=l("As you can see the "),oe=i("a"),ft=l("Accelerator"),gt=l(" is able to keep track of the batch number you are on and it will automatically know whether to step through the prepared optimizer and how to adjust the loss."),Ne=u(),P=i("h2"),L=i("a"),me=i("span"),w(D.$$.fragment),_t=u(),fe=i("span"),wt=l("The finished code"),Ge=u(),ie=i("p"),vt=l("Below is the finished implementation for performing gradient accumulation with \u{1F917} Accelerate"),Ie=u(),w(W.$$.fragment),Le=u(),J=i("p"),$t=l("To learn more about what magic this wraps around, read the "),se=i("a"),bt=l("Gradient Synchronization concept guide"),this.h()},l(e){const r=Xt('[data-svelte="svelte-1phssyn"]',document.head);h=s(r,"META",{name:!0,content:!0}),r.forEach(t),T=p(e),m=s(e,"H1",{class:!0});var U=n(m);_=s(U,"A",{id:!0,class:!0,href:!0});var At=n(_);E=s(At,"SPAN",{});var kt=n(E);v(g.$$.fragment,kt),kt.forEach(t),At.forEach(t),k=p(U),S=s(U,"SPAN",{});var zt=n(S);De=c(zt,"Performing gradient accumulation with \u{1F917} Accelerate"),zt.forEach(t),U.forEach(t),_e=p(e),K=s(e,"P",{});var Et=n(K);We=c(Et,`Gradient accumulation is a technique where you can train on bigger batch sizes than
your machine would normally be able to fit into memory. This is done by accumulating gradients over
several batches, and only stepping the optimizer after a certain number of batches have been performed.`),Et.forEach(t),we=p(e),Q=s(e,"P",{});var jt=n(Q);Je=c(jt,`While technically standard gradient accumulation code would work fine in a distributed setup, it is not the most efficient
method for doing so and you may experience considerable slowdowns!`),jt.forEach(t),ve=p(e),V=s(e,"P",{});var xt=n(V);Ue=c(xt,`In this tutorial you will see how to quickly setup gradient accumulation and perform it with the utilities provided in \u{1F917} Accelerate,
which can total to adding just one new line of code!`),xt.forEach(t),$e=p(e),X=s(e,"P",{});var Pt=n(X);Ke=c(Pt,"This example will use a very simplistic PyTorch training loop that performs gradient accumulation every two batches:"),Pt.forEach(t),be=p(e),v(B.$$.fragment,e),ye=p(e),j=s(e,"H2",{class:!0});var Fe=n(j);C=s(Fe,"A",{id:!0,class:!0,href:!0});var Tt=n(C);le=s(Tt,"SPAN",{});var St=n(le);v(F.$$.fragment,St),St.forEach(t),Tt.forEach(t),Qe=p(Fe),ce=s(Fe,"SPAN",{});var Ct=n(ce);Ve=c(Ct,"Converting it to \u{1F917} Accelerate"),Ct.forEach(t),Fe.forEach(t),Ae=p(e),Z=s(e,"P",{});var qt=n(Z);Xe=c(qt,"First the code shown earlier will be converted to utilize \u{1F917} Accelerate without the special gradient accumulation helper:"),qt.forEach(t),ke=p(e),v(H.$$.fragment,e),ze=p(e),v(q.$$.fragment,e),Ee=p(e),x=s(e,"H2",{class:!0});var He=n(x);N=s(He,"A",{id:!0,class:!0,href:!0});var Nt=n(N);ue=s(Nt,"SPAN",{});var Gt=n(ue);v(Y.$$.fragment,Gt),Gt.forEach(t),Nt.forEach(t),Ze=p(He),pe=s(He,"SPAN",{});var It=n(pe);et=c(It,"Letting \u{1F917} Accelerate handle gradient accumulation"),It.forEach(t),He.forEach(t),je=p(e),f=s(e,"P",{});var z=n(f);tt=c(z,"All that is left now is to let \u{1F917} Accelerate handle the gradient accumulation for us. To do so you should pass in a "),de=s(z,"CODE",{});var Lt=n(de);at=c(Lt,"gradient_accumulation_steps"),Lt.forEach(t),rt=c(z," parameter to "),ee=s(z,"A",{href:!0});var Bt=n(ee);ot=c(Bt,"Accelerator"),Bt.forEach(t),it=c(z,`, dictating the number
of steps to perform before each call to `),he=s(z,"CODE",{});var Ft=n(he);st=c(Ft,"step()"),Ft.forEach(t),nt=c(z," and how to automatically adjust the loss during the call to "),te=s(z,"A",{href:!0});var Ht=n(te);lt=c(Ht,"backward()"),Ht.forEach(t),ct=c(z,":"),z.forEach(t),xe=p(e),v(M.$$.fragment,e),Pe=p(e),G=s(e,"P",{});var Ye=n(G);ut=c(Ye,"From here you can use the "),ae=s(Ye,"A",{href:!0});var Yt=n(ae);pt=c(Yt,"accumulate()"),Yt.forEach(t),dt=c(Ye,` context manager from inside your training loop to automatically perform the gradient accumulation for you!
You just wrap it around the entire training part of our code:`),Ye.forEach(t),Te=p(e),v(O.$$.fragment,e),Se=p(e),re=s(e,"P",{});var Mt=n(re);ht=c(Mt,"You can remove all the special checks for the step number and the loss adjustment:"),Mt.forEach(t),Ce=p(e),v(R.$$.fragment,e),qe=p(e),I=s(e,"P",{});var Me=n(I);mt=c(Me,"As you can see the "),oe=s(Me,"A",{href:!0});var Ot=n(oe);ft=c(Ot,"Accelerator"),Ot.forEach(t),gt=c(Me," is able to keep track of the batch number you are on and it will automatically know whether to step through the prepared optimizer and how to adjust the loss."),Me.forEach(t),Ne=p(e),P=s(e,"H2",{class:!0});var Oe=n(P);L=s(Oe,"A",{id:!0,class:!0,href:!0});var Rt=n(L);me=s(Rt,"SPAN",{});var Dt=n(me);v(D.$$.fragment,Dt),Dt.forEach(t),Rt.forEach(t),_t=p(Oe),fe=s(Oe,"SPAN",{});var Wt=n(fe);wt=c(Wt,"The finished code"),Wt.forEach(t),Oe.forEach(t),Ge=p(e),ie=s(e,"P",{});var Jt=n(ie);vt=c(Jt,"Below is the finished implementation for performing gradient accumulation with \u{1F917} Accelerate"),Jt.forEach(t),Ie=p(e),v(W.$$.fragment,e),Le=p(e),J=s(e,"P",{});var yt=n(J);$t=c(yt,"To learn more about what magic this wraps around, read the "),se=s(yt,"A",{href:!0});var Ut=n(se);bt=c(Ut,"Gradient Synchronization concept guide"),Ut.forEach(t),yt.forEach(t),this.h()},h(){d(h,"name","hf:doc:metadata"),d(h,"content",JSON.stringify(ra)),d(_,"id","performing-gradient-accumulation-with-accelerate"),d(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(_,"href","#performing-gradient-accumulation-with-accelerate"),d(m,"class","relative group"),d(C,"id","converting-it-to-accelerate"),d(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(C,"href","#converting-it-to-accelerate"),d(j,"class","relative group"),d(N,"id","letting-accelerate-handle-gradient-accumulation"),d(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(N,"href","#letting-accelerate-handle-gradient-accumulation"),d(x,"class","relative group"),d(ee,"href","/docs/accelerate/v0.13.1/en/package_reference/accelerator#accelerate.Accelerator"),d(te,"href","/docs/accelerate/v0.13.1/en/package_reference/accelerator#accelerate.Accelerator.backward"),d(ae,"href","/docs/accelerate/v0.13.1/en/package_reference/accelerator#accelerate.Accelerator.accumulate"),d(oe,"href","/docs/accelerate/v0.13.1/en/package_reference/accelerator#accelerate.Accelerator"),d(L,"id","the-finished-code"),d(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(L,"href","#the-finished-code"),d(P,"class","relative group"),d(se,"href","/concept_guides/gradient_synchronization")},m(e,r){a(document.head,h),o(e,T,r),o(e,m,r),a(m,_),a(_,E),$(g,E,null),a(m,k),a(m,S),a(S,De),o(e,_e,r),o(e,K,r),a(K,We),o(e,we,r),o(e,Q,r),a(Q,Je),o(e,ve,r),o(e,V,r),a(V,Ue),o(e,$e,r),o(e,X,r),a(X,Ke),o(e,be,r),$(B,e,r),o(e,ye,r),o(e,j,r),a(j,C),a(C,le),$(F,le,null),a(j,Qe),a(j,ce),a(ce,Ve),o(e,Ae,r),o(e,Z,r),a(Z,Xe),o(e,ke,r),$(H,e,r),o(e,ze,r),$(q,e,r),o(e,Ee,r),o(e,x,r),a(x,N),a(N,ue),$(Y,ue,null),a(x,Ze),a(x,pe),a(pe,et),o(e,je,r),o(e,f,r),a(f,tt),a(f,de),a(de,at),a(f,rt),a(f,ee),a(ee,ot),a(f,it),a(f,he),a(he,st),a(f,nt),a(f,te),a(te,lt),a(f,ct),o(e,xe,r),$(M,e,r),o(e,Pe,r),o(e,G,r),a(G,ut),a(G,ae),a(ae,pt),a(G,dt),o(e,Te,r),$(O,e,r),o(e,Se,r),o(e,re,r),a(re,ht),o(e,Ce,r),$(R,e,r),o(e,qe,r),o(e,I,r),a(I,mt),a(I,oe),a(oe,ft),a(I,gt),o(e,Ne,r),o(e,P,r),a(P,L),a(L,me),$(D,me,null),a(P,_t),a(P,fe),a(fe,wt),o(e,Ge,r),o(e,ie,r),a(ie,vt),o(e,Ie,r),$(W,e,r),o(e,Le,r),o(e,J,r),a(J,$t),a(J,se),a(se,bt),Be=!0},p(e,[r]){const U={};r&2&&(U.$$scope={dirty:r,ctx:e}),q.$set(U)},i(e){Be||(b(g.$$.fragment,e),b(B.$$.fragment,e),b(F.$$.fragment,e),b(H.$$.fragment,e),b(q.$$.fragment,e),b(Y.$$.fragment,e),b(M.$$.fragment,e),b(O.$$.fragment,e),b(R.$$.fragment,e),b(D.$$.fragment,e),b(W.$$.fragment,e),Be=!0)},o(e){y(g.$$.fragment,e),y(B.$$.fragment,e),y(F.$$.fragment,e),y(H.$$.fragment,e),y(q.$$.fragment,e),y(Y.$$.fragment,e),y(M.$$.fragment,e),y(O.$$.fragment,e),y(R.$$.fragment,e),y(D.$$.fragment,e),y(W.$$.fragment,e),Be=!1},d(e){t(h),e&&t(T),e&&t(m),A(g),e&&t(_e),e&&t(K),e&&t(we),e&&t(Q),e&&t(ve),e&&t(V),e&&t($e),e&&t(X),e&&t(be),A(B,e),e&&t(ye),e&&t(j),A(F),e&&t(Ae),e&&t(Z),e&&t(ke),A(H,e),e&&t(ze),A(q,e),e&&t(Ee),e&&t(x),A(Y),e&&t(je),e&&t(f),e&&t(xe),A(M,e),e&&t(Pe),e&&t(G),e&&t(Te),A(O,e),e&&t(Se),e&&t(re),e&&t(Ce),A(R,e),e&&t(qe),e&&t(I),e&&t(Ne),e&&t(P),A(D),e&&t(Ge),e&&t(ie),e&&t(Ie),A(W,e),e&&t(Le),e&&t(J)}}}const ra={local:"performing-gradient-accumulation-with-accelerate",sections:[{local:"converting-it-to-accelerate",title:"Converting it to \u{1F917} Accelerate"},{local:"letting-accelerate-handle-gradient-accumulation",title:"Letting \u{1F917} Accelerate handle gradient accumulation"},{local:"the-finished-code",title:"The finished code"}],title:"Performing gradient accumulation with \u{1F917} Accelerate"};function oa(ge){return Zt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ca extends Kt{constructor(h){super();Qt(this,h,oa,aa,Vt,{})}}export{ca as default,ra as metadata};
