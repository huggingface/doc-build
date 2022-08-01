import{S as Mt,i as Ot,s as Rt,e as i,k as u,w,t as n,M as Dt,c as s,d as t,m as p,a as l,x as v,h as c,b as d,G as a,g as o,y as $,q as b,o as y,B as A,v as Wt}from"../../chunks/vendor-hf-doc-builder.js";import{T as Jt}from"../../chunks/Tip-hf-doc-builder.js";import{I as Ye}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as ie}from"../../chunks/CodeBlock-hf-doc-builder.js";function Ut(me){let h,T,m,_,E;return{c(){h=i("p"),T=n("In its current state, this code is not going to perform gradient accumulation efficiently due to a process called gradient synchronization. Read more about that in the "),m=i("a"),_=n("Concepts tutorial"),E=n("!"),this.h()},l(g){h=s(g,"P",{});var k=l(h);T=c(k,"In its current state, this code is not going to perform gradient accumulation efficiently due to a process called gradient synchronization. Read more about that in the "),m=s(k,"A",{href:!0});var S=l(m);_=c(S,"Concepts tutorial"),S.forEach(t),E=c(k,"!"),k.forEach(t),this.h()},h(){d(m,"href","concept_guides/gradient_synchronization")},m(g,k){o(g,h,k),a(h,T),a(h,m),a(m,_),a(h,E)},d(g){g&&t(h)}}}function Kt(me){let h,T,m,_,E,g,k,S,Me,fe,U,Oe,ge,K,Re,_e,Q,De,we,V,We,ve,F,$e,j,C,se,G,Je,le,Ue,be,X,Ke,ye,H,Ae,q,ke,x,N,ne,Y,Qe,ce,Ve,ze,f,Xe,ue,Ze,et,Z,tt,at,pe,rt,ot,ee,it,st,Ee,M,je,I,lt,te,nt,ct,xe,O,Pe,ae,ut,Te,R,Se,L,pt,re,dt,ht,Ce,P,B,de,D,mt,he,ft,qe,oe,gt,Ne,W,Ie;return g=new Ye({}),F=new ie({props:{code:`device = "cuda"
model.to(device)

gradient_accumulation_steps = 2

for index, batch in enumerate(training_dataloader):
    optimizer.zero_grad()
    inputs, targets = batch
    inputs = inputs.to(device)
    targets = targets.to(device)
    outputs = model(inputs)
    loss = loss_function(outputs, targets)
    loss = loss / gradient_accumulation_steps
    loss.backward()
    if (index + 1) % gradient_accumulation_steps == 0:
        optimizer.step()
        scheduler.step()`,highlighted:`device = <span class="hljs-string">&quot;cuda&quot;</span>
model.to(device)

gradient_accumulation_steps = <span class="hljs-number">2</span>

<span class="hljs-keyword">for</span> index, batch <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(training_dataloader):
    optimizer.zero_grad()
    inputs, targets = batch
    inputs = inputs.to(device)
    targets = targets.to(device)
    outputs = model(inputs)
    loss = loss_function(outputs, targets)
    loss = loss / gradient_accumulation_steps
    loss.backward()
    <span class="hljs-keyword">if</span> (index + <span class="hljs-number">1</span>) % gradient_accumulation_steps == <span class="hljs-number">0</span>:
        optimizer.step()
        scheduler.step()`}}),G=new Ye({}),H=new ie({props:{code:`+ from accelerate import Accelerator
+ accelerator = Accelerator()

+ model, optimizer, training_dataloader, scheduler = accelerator.prepare(
+     model, optimizer, training_dataloader, scheduler
+ )

  for index, batch in enumerate(training_dataloader):
      optimizer.zero_grad()
      inputs, targets = batch
-     inputs = inputs.to(device)
-     targets = targets.to(device)
      outputs = model(inputs)
      loss = loss_function(outputs, targets)
      loss = loss / gradient_accumulation_steps
+     accelerator.backward(loss)
      if (index+1) % gradient_accumulation_steps == 0:
          optimizer.step()
          scheduler.step()`,highlighted:`<span class="hljs-addition">+ from accelerate import Accelerator</span>
<span class="hljs-addition">+ accelerator = Accelerator()</span>

<span class="hljs-addition">+ model, optimizer, training_dataloader, scheduler = accelerator.prepare(</span>
<span class="hljs-addition">+     model, optimizer, training_dataloader, scheduler</span>
<span class="hljs-addition">+ )</span>

  for index, batch in enumerate(training_dataloader):
      optimizer.zero_grad()
      inputs, targets = batch
<span class="hljs-deletion">-     inputs = inputs.to(device)</span>
<span class="hljs-deletion">-     targets = targets.to(device)</span>
      outputs = model(inputs)
      loss = loss_function(outputs, targets)
      loss = loss / gradient_accumulation_steps
<span class="hljs-addition">+     accelerator.backward(loss)</span>
      if (index+1) % gradient_accumulation_steps == 0:
          optimizer.step()
          scheduler.step()`}}),q=new Jt({props:{warning:!0,$$slots:{default:[Ut]},$$scope:{ctx:me}}}),Y=new Ye({}),M=new ie({props:{code:`  from accelerate import Accelerator
- accelerator = Accelerator()
+ accelerator = Accelerator(gradient_accumulation_steps=2)`,highlighted:`  from accelerate import Accelerator
<span class="hljs-deletion">- accelerator = Accelerator()</span>
<span class="hljs-addition">+ accelerator = Accelerator(gradient_accumulation_steps=2)</span>`}}),O=new ie({props:{code:`- for index, batch in enumerate(training_dataloader):
+ for batch in training_dataloader:
+     with accelerator.accumulate(model):
          optimizer.zero_grad()
          inputs, targets = batch
          outputs = model(inputs)`,highlighted:`<span class="hljs-deletion">- for index, batch in enumerate(training_dataloader):</span>
<span class="hljs-addition">+ for batch in training_dataloader:</span>
<span class="hljs-addition">+     with accelerator.accumulate(model):</span>
          optimizer.zero_grad()
          inputs, targets = batch
          outputs = model(inputs)`}}),R=new ie({props:{code:`- loss = loss / gradient_accumulation_steps
  accelerator.backward(loss)
- if (index+1) % gradient_accumulation_steps == 0:
  optimizer.step()
  scheduler.step()`,highlighted:`<span class="hljs-deletion">- loss = loss / gradient_accumulation_steps</span>
  accelerator.backward(loss)
<span class="hljs-deletion">- if (index+1) % gradient_accumulation_steps == 0:</span>
  optimizer.step()
  scheduler.step()`}}),D=new Ye({}),W=new ie({props:{code:`for batch in training_dataloader:
    with accelerator.accumulate(model):
        optimizer.zero_grad()
        inputs, targets = batch
        outputs = model(inputs)
        loss = loss_function(outputs, targets)
        accelerator.backward(loss)
        optimizer.step()
        scheduler.step()`,highlighted:`<span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> training_dataloader:
    <span class="hljs-keyword">with</span> accelerator.accumulate(model):
        optimizer.zero_grad()
        inputs, targets = batch
        outputs = model(inputs)
        loss = loss_function(outputs, targets)
        accelerator.backward(loss)
        optimizer.step()
        scheduler.step()`}}),{c(){h=i("meta"),T=u(),m=i("h1"),_=i("a"),E=i("span"),w(g.$$.fragment),k=u(),S=i("span"),Me=n("Performing gradient accumulation with \u{1F917} Accelerate"),fe=u(),U=i("p"),Oe=n(`Gradient accumulation is a technique where you can train on bigger batch sizes than
your machine would normally be able to fit into memory. This is done by accumulating gradients over
several batches, and only stepping the optimizer after a certain number of batches have been performed.`),ge=u(),K=i("p"),Re=n(`While technically standard gradient accumulation code would work fine in a distributed setup, it is not the most efficient
method for doing so and you may experience considerable slowdowns!`),_e=u(),Q=i("p"),De=n(`In this tutorial you will see how to quickly setup gradient accumulation and perform it with the utilities provided in \u{1F917} Accelerate,
which can total to adding just one new line of code!`),we=u(),V=i("p"),We=n("This example will use a very simplistic PyTorch training loop that performs gradient accumulation every two batches:"),ve=u(),w(F.$$.fragment),$e=u(),j=i("h2"),C=i("a"),se=i("span"),w(G.$$.fragment),Je=u(),le=i("span"),Ue=n("Converting it to \u{1F917} Accelerate"),be=u(),X=i("p"),Ke=n("First the code shown earlier will be converted to utilize \u{1F917} Accelerate without the special gradient accumulation helper:"),ye=u(),w(H.$$.fragment),Ae=u(),w(q.$$.fragment),ke=u(),x=i("h2"),N=i("a"),ne=i("span"),w(Y.$$.fragment),Qe=u(),ce=i("span"),Ve=n("Letting \u{1F917} Accelerate handle gradient accumulation"),ze=u(),f=i("p"),Xe=n("All that is left now is to let \u{1F917} Accelerate handle the gradient accumulation for us. To do so you should pass in a "),ue=i("code"),Ze=n("gradient_accumulation_steps"),et=n(" parameter to "),Z=i("a"),tt=n("Accelerator"),at=n(`, dictating the number
of steps to perform before each call to `),pe=i("code"),rt=n("step()"),ot=n(" and how to automatically adjust the loss during the call to "),ee=i("a"),it=n("backward()"),st=n(":"),Ee=u(),w(M.$$.fragment),je=u(),I=i("p"),lt=n("From here you can use the "),te=i("a"),nt=n("accumulate()"),ct=n(` context manager from inside your training loop to automatically perform the gradient accumulation for you!
You just wrap it around the entire training part of our code:`),xe=u(),w(O.$$.fragment),Pe=u(),ae=i("p"),ut=n("You can remove all the special checks for the step number and the loss adjustment:"),Te=u(),w(R.$$.fragment),Se=u(),L=i("p"),pt=n("As you can see the "),re=i("a"),dt=n("Accelerator"),ht=n(" is able to keep track of the batch number you are on and it will automatically know whether to step through the prepared optimizer and how to adjust the loss."),Ce=u(),P=i("h2"),B=i("a"),de=i("span"),w(D.$$.fragment),mt=u(),he=i("span"),ft=n("The finished code"),qe=u(),oe=i("p"),gt=n("Below is the finished implementation for performing gradient accumulation with \u{1F917} Accelerate"),Ne=u(),w(W.$$.fragment),this.h()},l(e){const r=Dt('[data-svelte="svelte-1phssyn"]',document.head);h=s(r,"META",{name:!0,content:!0}),r.forEach(t),T=p(e),m=s(e,"H1",{class:!0});var J=l(m);_=s(J,"A",{id:!0,class:!0,href:!0});var _t=l(_);E=s(_t,"SPAN",{});var wt=l(E);v(g.$$.fragment,wt),wt.forEach(t),_t.forEach(t),k=p(J),S=s(J,"SPAN",{});var vt=l(S);Me=c(vt,"Performing gradient accumulation with \u{1F917} Accelerate"),vt.forEach(t),J.forEach(t),fe=p(e),U=s(e,"P",{});var $t=l(U);Oe=c($t,`Gradient accumulation is a technique where you can train on bigger batch sizes than
your machine would normally be able to fit into memory. This is done by accumulating gradients over
several batches, and only stepping the optimizer after a certain number of batches have been performed.`),$t.forEach(t),ge=p(e),K=s(e,"P",{});var bt=l(K);Re=c(bt,`While technically standard gradient accumulation code would work fine in a distributed setup, it is not the most efficient
method for doing so and you may experience considerable slowdowns!`),bt.forEach(t),_e=p(e),Q=s(e,"P",{});var yt=l(Q);De=c(yt,`In this tutorial you will see how to quickly setup gradient accumulation and perform it with the utilities provided in \u{1F917} Accelerate,
which can total to adding just one new line of code!`),yt.forEach(t),we=p(e),V=s(e,"P",{});var At=l(V);We=c(At,"This example will use a very simplistic PyTorch training loop that performs gradient accumulation every two batches:"),At.forEach(t),ve=p(e),v(F.$$.fragment,e),$e=p(e),j=s(e,"H2",{class:!0});var Le=l(j);C=s(Le,"A",{id:!0,class:!0,href:!0});var kt=l(C);se=s(kt,"SPAN",{});var zt=l(se);v(G.$$.fragment,zt),zt.forEach(t),kt.forEach(t),Je=p(Le),le=s(Le,"SPAN",{});var Et=l(le);Ue=c(Et,"Converting it to \u{1F917} Accelerate"),Et.forEach(t),Le.forEach(t),be=p(e),X=s(e,"P",{});var jt=l(X);Ke=c(jt,"First the code shown earlier will be converted to utilize \u{1F917} Accelerate without the special gradient accumulation helper:"),jt.forEach(t),ye=p(e),v(H.$$.fragment,e),Ae=p(e),v(q.$$.fragment,e),ke=p(e),x=s(e,"H2",{class:!0});var Be=l(x);N=s(Be,"A",{id:!0,class:!0,href:!0});var xt=l(N);ne=s(xt,"SPAN",{});var Pt=l(ne);v(Y.$$.fragment,Pt),Pt.forEach(t),xt.forEach(t),Qe=p(Be),ce=s(Be,"SPAN",{});var Tt=l(ce);Ve=c(Tt,"Letting \u{1F917} Accelerate handle gradient accumulation"),Tt.forEach(t),Be.forEach(t),ze=p(e),f=s(e,"P",{});var z=l(f);Xe=c(z,"All that is left now is to let \u{1F917} Accelerate handle the gradient accumulation for us. To do so you should pass in a "),ue=s(z,"CODE",{});var St=l(ue);Ze=c(St,"gradient_accumulation_steps"),St.forEach(t),et=c(z," parameter to "),Z=s(z,"A",{href:!0});var Ct=l(Z);tt=c(Ct,"Accelerator"),Ct.forEach(t),at=c(z,`, dictating the number
of steps to perform before each call to `),pe=s(z,"CODE",{});var qt=l(pe);rt=c(qt,"step()"),qt.forEach(t),ot=c(z," and how to automatically adjust the loss during the call to "),ee=s(z,"A",{href:!0});var Nt=l(ee);it=c(Nt,"backward()"),Nt.forEach(t),st=c(z,":"),z.forEach(t),Ee=p(e),v(M.$$.fragment,e),je=p(e),I=s(e,"P",{});var Fe=l(I);lt=c(Fe,"From here you can use the "),te=s(Fe,"A",{href:!0});var It=l(te);nt=c(It,"accumulate()"),It.forEach(t),ct=c(Fe,` context manager from inside your training loop to automatically perform the gradient accumulation for you!
You just wrap it around the entire training part of our code:`),Fe.forEach(t),xe=p(e),v(O.$$.fragment,e),Pe=p(e),ae=s(e,"P",{});var Lt=l(ae);ut=c(Lt,"You can remove all the special checks for the step number and the loss adjustment:"),Lt.forEach(t),Te=p(e),v(R.$$.fragment,e),Se=p(e),L=s(e,"P",{});var Ge=l(L);pt=c(Ge,"As you can see the "),re=s(Ge,"A",{href:!0});var Bt=l(re);dt=c(Bt,"Accelerator"),Bt.forEach(t),ht=c(Ge," is able to keep track of the batch number you are on and it will automatically know whether to step through the prepared optimizer and how to adjust the loss."),Ge.forEach(t),Ce=p(e),P=s(e,"H2",{class:!0});var He=l(P);B=s(He,"A",{id:!0,class:!0,href:!0});var Ft=l(B);de=s(Ft,"SPAN",{});var Gt=l(de);v(D.$$.fragment,Gt),Gt.forEach(t),Ft.forEach(t),mt=p(He),he=s(He,"SPAN",{});var Ht=l(he);ft=c(Ht,"The finished code"),Ht.forEach(t),He.forEach(t),qe=p(e),oe=s(e,"P",{});var Yt=l(oe);gt=c(Yt,"Below is the finished implementation for performing gradient accumulation with \u{1F917} Accelerate"),Yt.forEach(t),Ne=p(e),v(W.$$.fragment,e),this.h()},h(){d(h,"name","hf:doc:metadata"),d(h,"content",JSON.stringify(Qt)),d(_,"id","performing-gradient-accumulation-with-accelerate"),d(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(_,"href","#performing-gradient-accumulation-with-accelerate"),d(m,"class","relative group"),d(C,"id","converting-it-to-accelerate"),d(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(C,"href","#converting-it-to-accelerate"),d(j,"class","relative group"),d(N,"id","letting-accelerate-handle-gradient-accumulation"),d(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(N,"href","#letting-accelerate-handle-gradient-accumulation"),d(x,"class","relative group"),d(Z,"href","/docs/accelerate/main/en/package_reference/accelerator#accelerate.Accelerator"),d(ee,"href","/docs/accelerate/main/en/package_reference/accelerator#accelerate.Accelerator.backward"),d(te,"href","/docs/accelerate/main/en/package_reference/accelerator#accelerate.Accelerator.accumulate"),d(re,"href","/docs/accelerate/main/en/package_reference/accelerator#accelerate.Accelerator"),d(B,"id","the-finished-code"),d(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(B,"href","#the-finished-code"),d(P,"class","relative group")},m(e,r){a(document.head,h),o(e,T,r),o(e,m,r),a(m,_),a(_,E),$(g,E,null),a(m,k),a(m,S),a(S,Me),o(e,fe,r),o(e,U,r),a(U,Oe),o(e,ge,r),o(e,K,r),a(K,Re),o(e,_e,r),o(e,Q,r),a(Q,De),o(e,we,r),o(e,V,r),a(V,We),o(e,ve,r),$(F,e,r),o(e,$e,r),o(e,j,r),a(j,C),a(C,se),$(G,se,null),a(j,Je),a(j,le),a(le,Ue),o(e,be,r),o(e,X,r),a(X,Ke),o(e,ye,r),$(H,e,r),o(e,Ae,r),$(q,e,r),o(e,ke,r),o(e,x,r),a(x,N),a(N,ne),$(Y,ne,null),a(x,Qe),a(x,ce),a(ce,Ve),o(e,ze,r),o(e,f,r),a(f,Xe),a(f,ue),a(ue,Ze),a(f,et),a(f,Z),a(Z,tt),a(f,at),a(f,pe),a(pe,rt),a(f,ot),a(f,ee),a(ee,it),a(f,st),o(e,Ee,r),$(M,e,r),o(e,je,r),o(e,I,r),a(I,lt),a(I,te),a(te,nt),a(I,ct),o(e,xe,r),$(O,e,r),o(e,Pe,r),o(e,ae,r),a(ae,ut),o(e,Te,r),$(R,e,r),o(e,Se,r),o(e,L,r),a(L,pt),a(L,re),a(re,dt),a(L,ht),o(e,Ce,r),o(e,P,r),a(P,B),a(B,de),$(D,de,null),a(P,mt),a(P,he),a(he,ft),o(e,qe,r),o(e,oe,r),a(oe,gt),o(e,Ne,r),$(W,e,r),Ie=!0},p(e,[r]){const J={};r&2&&(J.$$scope={dirty:r,ctx:e}),q.$set(J)},i(e){Ie||(b(g.$$.fragment,e),b(F.$$.fragment,e),b(G.$$.fragment,e),b(H.$$.fragment,e),b(q.$$.fragment,e),b(Y.$$.fragment,e),b(M.$$.fragment,e),b(O.$$.fragment,e),b(R.$$.fragment,e),b(D.$$.fragment,e),b(W.$$.fragment,e),Ie=!0)},o(e){y(g.$$.fragment,e),y(F.$$.fragment,e),y(G.$$.fragment,e),y(H.$$.fragment,e),y(q.$$.fragment,e),y(Y.$$.fragment,e),y(M.$$.fragment,e),y(O.$$.fragment,e),y(R.$$.fragment,e),y(D.$$.fragment,e),y(W.$$.fragment,e),Ie=!1},d(e){t(h),e&&t(T),e&&t(m),A(g),e&&t(fe),e&&t(U),e&&t(ge),e&&t(K),e&&t(_e),e&&t(Q),e&&t(we),e&&t(V),e&&t(ve),A(F,e),e&&t($e),e&&t(j),A(G),e&&t(be),e&&t(X),e&&t(ye),A(H,e),e&&t(Ae),A(q,e),e&&t(ke),e&&t(x),A(Y),e&&t(ze),e&&t(f),e&&t(Ee),A(M,e),e&&t(je),e&&t(I),e&&t(xe),A(O,e),e&&t(Pe),e&&t(ae),e&&t(Te),A(R,e),e&&t(Se),e&&t(L),e&&t(Ce),e&&t(P),A(D),e&&t(qe),e&&t(oe),e&&t(Ne),A(W,e)}}}const Qt={local:"performing-gradient-accumulation-with-accelerate",sections:[{local:"converting-it-to-accelerate",title:"Converting it to \u{1F917} Accelerate"},{local:"letting-accelerate-handle-gradient-accumulation",title:"Letting \u{1F917} Accelerate handle gradient accumulation"},{local:"the-finished-code",title:"The finished code"}],title:"Performing gradient accumulation with \u{1F917} Accelerate"};function Vt(me){return Wt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class aa extends Mt{constructor(h){super();Ot(this,h,Vt,Kt,Rt,{})}}export{aa as default,Qt as metadata};
