import{S as Ot,i as Dt,s as Wt,e as i,k as u,w as g,t as n,M as Yt,c as s,d as t,m as p,a as l,x as _,h as c,b as d,G as a,g as o,y as w,q as v,o as $,B as b,v as Jt}from"../chunks/vendor-hf-doc-builder.js";import{T as Rt}from"../chunks/Tip-hf-doc-builder.js";import{I as He}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as ae}from"../chunks/CodeBlock-hf-doc-builder.js";function Ut(he){let h;return{c(){h=n("In its current state, this code is not going to perform gradient accumulation efficiently due to a process called gradient synchronization.")},l(y){h=c(y,"In its current state, this code is not going to perform gradient accumulation efficiently due to a process called gradient synchronization.")},m(y,f){o(y,h,f)},d(y){y&&t(h)}}}function Kt(he){let h,y,f,E,re,N,Me,oe,Oe,me,Y,De,fe,J,We,ge,R,Ye,_e,U,Je,we,I,ve,k,x,ie,L,Re,se,Ue,$e,K,Ke,be,B,ye,P,Ae,z,T,le,F,Qe,ne,Ve,ke,m,Xe,ce,Ze,et,Q,tt,at,ue,rt,ot,V,it,st,ze,G,je,S,lt,X,nt,ct,Ee,H,xe,Z,ut,Pe,M,Te,q,pt,ee,dt,ht,Se,j,C,pe,O,mt,de,ft,qe,te,gt,Ce,D,Ne;return N=new He({}),I=new ae({props:{code:`device = "cuda"
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
        scheduler.step()`}}),L=new He({}),B=new ae({props:{code:`+ from accelerate import Accelerator
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
          scheduler.step()`}}),P=new Rt({props:{warning:!0,$$slots:{default:[Ut]},$$scope:{ctx:he}}}),F=new He({}),G=new ae({props:{code:`  from accelerate import Accelerator
- accelerator = Accelerator()
+ accelerator = Accelerator(gradient_accumulation_steps=2)`,highlighted:`  from accelerate import Accelerator
<span class="hljs-deletion">- accelerator = Accelerator()</span>
<span class="hljs-addition">+ accelerator = Accelerator(gradient_accumulation_steps=2)</span>`}}),H=new ae({props:{code:`- for index, batch in enumerate(training_dataloader):
+ for batch in training_dataloader:
+    with accelerator.accumulate(model):
          optimizer.zero_grad()
          inputs, targets = batch
          outputs = model(inputs)`,highlighted:`<span class="hljs-deletion">- for index, batch in enumerate(training_dataloader):</span>
<span class="hljs-addition">+ for batch in training_dataloader:</span>
<span class="hljs-addition">+    with accelerator.accumulate(model):</span>
          optimizer.zero_grad()
          inputs, targets = batch
          outputs = model(inputs)`}}),M=new ae({props:{code:`- loss = loss / gradient_accumulation_steps
  accelerator.backward(loss)
- if (index+1) % gradient_accumulation_steps == 0:
  optimizer.step()
  scheduler.step()`,highlighted:`<span class="hljs-deletion">- loss = loss / gradient_accumulation_steps</span>
  accelerator.backward(loss)
<span class="hljs-deletion">- if (index+1) % gradient_accumulation_steps == 0:</span>
  optimizer.step()
  scheduler.step()`}}),O=new He({}),D=new ae({props:{code:`for batch in training_dataloader:
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
        scheduler.step()`}}),{c(){h=i("meta"),y=u(),f=i("h1"),E=i("a"),re=i("span"),g(N.$$.fragment),Me=u(),oe=i("span"),Oe=n("Performing gradient accumulation with \u{1F917} Accelerate"),me=u(),Y=i("p"),De=n(`Gradient accumulation is a technique where you can train on bigger batch sizes than
your machine would normally be able to fit into memory. This is done by accumulating gradients over
several batches, and only stepping the optimizer after a certain number of batches have been performed.`),fe=u(),J=i("p"),We=n(`While technically standard gradient accumulation code would work fine in a distributed setup, it is not the most efficient
method for doing so and you may experience considerable slowdowns!`),ge=u(),R=i("p"),Ye=n(`In this tutorial you will see how to quickly setup gradient accumulation and perform it with the utilities provided in \u{1F917} Accelerate,
which can total to adding just one new line of code!`),_e=u(),U=i("p"),Je=n("This example will use a very simplistic PyTorch training loop that performs gradient accumulation every two batches:"),we=u(),g(I.$$.fragment),ve=u(),k=i("h2"),x=i("a"),ie=i("span"),g(L.$$.fragment),Re=u(),se=i("span"),Ue=n("Converting it to \u{1F917} Accelerate"),$e=u(),K=i("p"),Ke=n("First the code shown earlier will be converted to utilize \u{1F917} Accelerate without the special gradient accumulation helper:"),be=u(),g(B.$$.fragment),ye=u(),g(P.$$.fragment),Ae=u(),z=i("h2"),T=i("a"),le=i("span"),g(F.$$.fragment),Qe=u(),ne=i("span"),Ve=n("Letting \u{1F917} Accelerate handle gradient accumulation"),ke=u(),m=i("p"),Xe=n("All that is left now is to let \u{1F917} Accelerate handle the gradient accumulation for us. To do so you should pass in a "),ce=i("code"),Ze=n("gradient_accumulation_steps"),et=n(" parameter to "),Q=i("a"),tt=n("Accelerator"),at=n(`, dictating the number
of steps to perform before each call to `),ue=i("code"),rt=n("step()"),ot=n(" and how to automatically adjust the loss during the call to "),V=i("a"),it=n("Accelerator.backward()"),st=n(":"),ze=u(),g(G.$$.fragment),je=u(),S=i("p"),lt=n("From here you can use the "),X=i("a"),nt=n("Accelerator.accumulate()"),ct=n(` context manager from inside your training loop to automatically perform the gradient accumulation for you!
You just wrap it around the entire training part of your code:`),Ee=u(),g(H.$$.fragment),xe=u(),Z=i("p"),ut=n("and you can remove all the special checks for the step number and the loss adjustment:"),Pe=u(),g(M.$$.fragment),Te=u(),q=i("p"),pt=n("As you can see the "),ee=i("a"),dt=n("Accelerator"),ht=n(" is able to keep track of the batch number you are on and it will automatically know whether to step through the prepared optimizer and how to adjust the loss."),Se=u(),j=i("h2"),C=i("a"),pe=i("span"),g(O.$$.fragment),mt=u(),de=i("span"),ft=n("The finished code"),qe=u(),te=i("p"),gt=n("Below is the finished implementation for performing gradient accumulation with \u{1F917} Accelerate"),Ce=u(),g(D.$$.fragment),this.h()},l(e){const r=Yt('[data-svelte="svelte-1phssyn"]',document.head);h=s(r,"META",{name:!0,content:!0}),r.forEach(t),y=p(e),f=s(e,"H1",{class:!0});var W=l(f);E=s(W,"A",{id:!0,class:!0,href:!0});var _t=l(E);re=s(_t,"SPAN",{});var wt=l(re);_(N.$$.fragment,wt),wt.forEach(t),_t.forEach(t),Me=p(W),oe=s(W,"SPAN",{});var vt=l(oe);Oe=c(vt,"Performing gradient accumulation with \u{1F917} Accelerate"),vt.forEach(t),W.forEach(t),me=p(e),Y=s(e,"P",{});var $t=l(Y);De=c($t,`Gradient accumulation is a technique where you can train on bigger batch sizes than
your machine would normally be able to fit into memory. This is done by accumulating gradients over
several batches, and only stepping the optimizer after a certain number of batches have been performed.`),$t.forEach(t),fe=p(e),J=s(e,"P",{});var bt=l(J);We=c(bt,`While technically standard gradient accumulation code would work fine in a distributed setup, it is not the most efficient
method for doing so and you may experience considerable slowdowns!`),bt.forEach(t),ge=p(e),R=s(e,"P",{});var yt=l(R);Ye=c(yt,`In this tutorial you will see how to quickly setup gradient accumulation and perform it with the utilities provided in \u{1F917} Accelerate,
which can total to adding just one new line of code!`),yt.forEach(t),_e=p(e),U=s(e,"P",{});var At=l(U);Je=c(At,"This example will use a very simplistic PyTorch training loop that performs gradient accumulation every two batches:"),At.forEach(t),we=p(e),_(I.$$.fragment,e),ve=p(e),k=s(e,"H2",{class:!0});var Ie=l(k);x=s(Ie,"A",{id:!0,class:!0,href:!0});var kt=l(x);ie=s(kt,"SPAN",{});var zt=l(ie);_(L.$$.fragment,zt),zt.forEach(t),kt.forEach(t),Re=p(Ie),se=s(Ie,"SPAN",{});var jt=l(se);Ue=c(jt,"Converting it to \u{1F917} Accelerate"),jt.forEach(t),Ie.forEach(t),$e=p(e),K=s(e,"P",{});var Et=l(K);Ke=c(Et,"First the code shown earlier will be converted to utilize \u{1F917} Accelerate without the special gradient accumulation helper:"),Et.forEach(t),be=p(e),_(B.$$.fragment,e),ye=p(e),_(P.$$.fragment,e),Ae=p(e),z=s(e,"H2",{class:!0});var Le=l(z);T=s(Le,"A",{id:!0,class:!0,href:!0});var xt=l(T);le=s(xt,"SPAN",{});var Pt=l(le);_(F.$$.fragment,Pt),Pt.forEach(t),xt.forEach(t),Qe=p(Le),ne=s(Le,"SPAN",{});var Tt=l(ne);Ve=c(Tt,"Letting \u{1F917} Accelerate handle gradient accumulation"),Tt.forEach(t),Le.forEach(t),ke=p(e),m=s(e,"P",{});var A=l(m);Xe=c(A,"All that is left now is to let \u{1F917} Accelerate handle the gradient accumulation for us. To do so you should pass in a "),ce=s(A,"CODE",{});var St=l(ce);Ze=c(St,"gradient_accumulation_steps"),St.forEach(t),et=c(A," parameter to "),Q=s(A,"A",{href:!0});var qt=l(Q);tt=c(qt,"Accelerator"),qt.forEach(t),at=c(A,`, dictating the number
of steps to perform before each call to `),ue=s(A,"CODE",{});var Ct=l(ue);rt=c(Ct,"step()"),Ct.forEach(t),ot=c(A," and how to automatically adjust the loss during the call to "),V=s(A,"A",{href:!0});var Nt=l(V);it=c(Nt,"Accelerator.backward()"),Nt.forEach(t),st=c(A,":"),A.forEach(t),ze=p(e),_(G.$$.fragment,e),je=p(e),S=s(e,"P",{});var Be=l(S);lt=c(Be,"From here you can use the "),X=s(Be,"A",{href:!0});var It=l(X);nt=c(It,"Accelerator.accumulate()"),It.forEach(t),ct=c(Be,` context manager from inside your training loop to automatically perform the gradient accumulation for you!
You just wrap it around the entire training part of your code:`),Be.forEach(t),Ee=p(e),_(H.$$.fragment,e),xe=p(e),Z=s(e,"P",{});var Lt=l(Z);ut=c(Lt,"and you can remove all the special checks for the step number and the loss adjustment:"),Lt.forEach(t),Pe=p(e),_(M.$$.fragment,e),Te=p(e),q=s(e,"P",{});var Fe=l(q);pt=c(Fe,"As you can see the "),ee=s(Fe,"A",{href:!0});var Bt=l(ee);dt=c(Bt,"Accelerator"),Bt.forEach(t),ht=c(Fe," is able to keep track of the batch number you are on and it will automatically know whether to step through the prepared optimizer and how to adjust the loss."),Fe.forEach(t),Se=p(e),j=s(e,"H2",{class:!0});var Ge=l(j);C=s(Ge,"A",{id:!0,class:!0,href:!0});var Ft=l(C);pe=s(Ft,"SPAN",{});var Gt=l(pe);_(O.$$.fragment,Gt),Gt.forEach(t),Ft.forEach(t),mt=p(Ge),de=s(Ge,"SPAN",{});var Ht=l(de);ft=c(Ht,"The finished code"),Ht.forEach(t),Ge.forEach(t),qe=p(e),te=s(e,"P",{});var Mt=l(te);gt=c(Mt,"Below is the finished implementation for performing gradient accumulation with \u{1F917} Accelerate"),Mt.forEach(t),Ce=p(e),_(D.$$.fragment,e),this.h()},h(){d(h,"name","hf:doc:metadata"),d(h,"content",JSON.stringify(Qt)),d(E,"id","performing-gradient-accumulation-with-accelerate"),d(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(E,"href","#performing-gradient-accumulation-with-accelerate"),d(f,"class","relative group"),d(x,"id","converting-it-to-accelerate"),d(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(x,"href","#converting-it-to-accelerate"),d(k,"class","relative group"),d(T,"id","letting-accelerate-handle-gradient-accumulation"),d(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(T,"href","#letting-accelerate-handle-gradient-accumulation"),d(z,"class","relative group"),d(Q,"href","/docs/accelerate/main/en/accelerator#accelerate.Accelerator"),d(V,"href","/docs/accelerate/main/en/accelerator#accelerate.Accelerator.backward"),d(X,"href","/docs/accelerate/main/en/accelerator#accelerate.Accelerator.accumulate"),d(ee,"href","/docs/accelerate/main/en/accelerator#accelerate.Accelerator"),d(C,"id","the-finished-code"),d(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(C,"href","#the-finished-code"),d(j,"class","relative group")},m(e,r){a(document.head,h),o(e,y,r),o(e,f,r),a(f,E),a(E,re),w(N,re,null),a(f,Me),a(f,oe),a(oe,Oe),o(e,me,r),o(e,Y,r),a(Y,De),o(e,fe,r),o(e,J,r),a(J,We),o(e,ge,r),o(e,R,r),a(R,Ye),o(e,_e,r),o(e,U,r),a(U,Je),o(e,we,r),w(I,e,r),o(e,ve,r),o(e,k,r),a(k,x),a(x,ie),w(L,ie,null),a(k,Re),a(k,se),a(se,Ue),o(e,$e,r),o(e,K,r),a(K,Ke),o(e,be,r),w(B,e,r),o(e,ye,r),w(P,e,r),o(e,Ae,r),o(e,z,r),a(z,T),a(T,le),w(F,le,null),a(z,Qe),a(z,ne),a(ne,Ve),o(e,ke,r),o(e,m,r),a(m,Xe),a(m,ce),a(ce,Ze),a(m,et),a(m,Q),a(Q,tt),a(m,at),a(m,ue),a(ue,rt),a(m,ot),a(m,V),a(V,it),a(m,st),o(e,ze,r),w(G,e,r),o(e,je,r),o(e,S,r),a(S,lt),a(S,X),a(X,nt),a(S,ct),o(e,Ee,r),w(H,e,r),o(e,xe,r),o(e,Z,r),a(Z,ut),o(e,Pe,r),w(M,e,r),o(e,Te,r),o(e,q,r),a(q,pt),a(q,ee),a(ee,dt),a(q,ht),o(e,Se,r),o(e,j,r),a(j,C),a(C,pe),w(O,pe,null),a(j,mt),a(j,de),a(de,ft),o(e,qe,r),o(e,te,r),a(te,gt),o(e,Ce,r),w(D,e,r),Ne=!0},p(e,[r]){const W={};r&2&&(W.$$scope={dirty:r,ctx:e}),P.$set(W)},i(e){Ne||(v(N.$$.fragment,e),v(I.$$.fragment,e),v(L.$$.fragment,e),v(B.$$.fragment,e),v(P.$$.fragment,e),v(F.$$.fragment,e),v(G.$$.fragment,e),v(H.$$.fragment,e),v(M.$$.fragment,e),v(O.$$.fragment,e),v(D.$$.fragment,e),Ne=!0)},o(e){$(N.$$.fragment,e),$(I.$$.fragment,e),$(L.$$.fragment,e),$(B.$$.fragment,e),$(P.$$.fragment,e),$(F.$$.fragment,e),$(G.$$.fragment,e),$(H.$$.fragment,e),$(M.$$.fragment,e),$(O.$$.fragment,e),$(D.$$.fragment,e),Ne=!1},d(e){t(h),e&&t(y),e&&t(f),b(N),e&&t(me),e&&t(Y),e&&t(fe),e&&t(J),e&&t(ge),e&&t(R),e&&t(_e),e&&t(U),e&&t(we),b(I,e),e&&t(ve),e&&t(k),b(L),e&&t($e),e&&t(K),e&&t(be),b(B,e),e&&t(ye),b(P,e),e&&t(Ae),e&&t(z),b(F),e&&t(ke),e&&t(m),e&&t(ze),b(G,e),e&&t(je),e&&t(S),e&&t(Ee),b(H,e),e&&t(xe),e&&t(Z),e&&t(Pe),b(M,e),e&&t(Te),e&&t(q),e&&t(Se),e&&t(j),b(O),e&&t(qe),e&&t(te),e&&t(Ce),b(D,e)}}}const Qt={local:"performing-gradient-accumulation-with-accelerate",sections:[{local:"converting-it-to-accelerate",title:"Converting it to \u{1F917} Accelerate"},{local:"letting-accelerate-handle-gradient-accumulation",title:"Letting \u{1F917} Accelerate handle gradient accumulation"},{local:"the-finished-code",title:"The finished code"}],title:"Performing gradient accumulation with \u{1F917} Accelerate"};function Vt(he){return Jt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class aa extends Ot{constructor(h){super();Dt(this,h,Vt,Kt,Wt,{})}}export{aa as default,Qt as metadata};
