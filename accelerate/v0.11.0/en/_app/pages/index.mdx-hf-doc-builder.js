import{S as ba,i as Pa,s as ka,e as i,k as n,w as f,t as p,M as Ea,c as o,d as t,m as c,a as l,x as y,h as m,b as u,G as a,g as s,y as _,L as Aa,q as v,o as w,B as g,v as za}from"../chunks/vendor-hf-doc-builder.js";import{I as Pe}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as Z}from"../chunks/CodeBlock-hf-doc-builder.js";function ja(Mt){let $,ke,b,z,ee,N,tt,te,at,Ee,j,rt,ae,it,ot,Ae,P,U,re,C,lt,ie,st,ze,x,oe,le,nt,ct,se,ne,pt,je,k,S,ce,G,mt,pe,ut,Ue,B,dt,xe,q,Se,Y,ht,Le,F,Te,K,ft,Ie,Q,yt,Ne,M,Ce,E,L,me,H,_t,ue,vt,Ge,T,wt,de,gt,$t,qe,V,bt,Fe,J,Me,W,Pt,He,O,Je,X,kt,Oe,R,Re,A,I,he,D,Et,fe,At,De,d,ye,zt,jt,_e,Ut,xt,ve,St,Lt,we,Tt,It,ge,Nt,Ct,$e,Gt,qt,be,Ft,Be;return N=new Pe({}),C=new Pe({}),G=new Pe({}),q=new Z({props:{code:`my_model.to(device)

for batch in my_training_dataloader:
    my_optimizer.zero_grad()
    inputs, targets = batch
    inputs = inputs.to(device)
    targets = targets.to(device)
    outputs = my_model(inputs)
    loss = my_loss_function(outputs, targets)
    loss.backward()
    my_optimizer.step()`,highlighted:`my_model.to(device)

<span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> my_training_dataloader:
    my_optimizer.zero_grad()
    inputs, targets = batch
    inputs = inputs.to(device)
    targets = targets.to(device)
    outputs = my_model(inputs)
    loss = my_loss_function(outputs, targets)
    loss.backward()
    my_optimizer.step()`}}),F=new Z({props:{code:`+ from accelerate import Accelerator

+ accelerator = Accelerator()
  # Use the device given by the *accelerator* object.
+ device = accelerator.device
  my_model.to(device)
  # Pass every important object (model, optimizer, dataloader) to *accelerator.prepare*
+ my_model, my_optimizer, my_training_dataloader = accelerator.prepare(
+     my_model, my_optimizer, my_training_dataloader
+ )

  for batch in my_training_dataloader:
      my_optimizer.zero_grad()
      inputs, targets = batch
      inputs = inputs.to(device)
      targets = targets.to(device)
      outputs = my_model(inputs)
      loss = my_loss_function(outputs, targets)
      # Just a small change for the backward instruction
-     loss.backward()
+     accelerator.backward(loss)
      my_optimizer.step()`,highlighted:`<span class="hljs-addition">+ from accelerate import Accelerator</span>

<span class="hljs-addition">+ accelerator = Accelerator()</span>
  # Use the device given by the *accelerator* object.
<span class="hljs-addition">+ device = accelerator.device</span>
  my_model.to(device)
  # Pass every important object (model, optimizer, dataloader) to *accelerator.prepare*
<span class="hljs-addition">+ my_model, my_optimizer, my_training_dataloader = accelerator.prepare(</span>
<span class="hljs-addition">+     my_model, my_optimizer, my_training_dataloader</span>
<span class="hljs-addition">+ )</span>

  for batch in my_training_dataloader:
      my_optimizer.zero_grad()
      inputs, targets = batch
      inputs = inputs.to(device)
      targets = targets.to(device)
      outputs = my_model(inputs)
      loss = my_loss_function(outputs, targets)
      # Just a small change for the backward instruction
<span class="hljs-deletion">-     loss.backward()</span>
<span class="hljs-addition">+     accelerator.backward(loss)</span>
      my_optimizer.step()`}}),M=new Z({props:{code:`+ from accelerate import Accelerator

+ accelerator = Accelerator()
- my_model.to(device)
  # Pass every important object (model, optimizer, dataloader) to *accelerator.prepare*
+ my_model, my_optimizer, my_training_dataloader = accelerate.prepare(
+     my_model, my_optimizer, my_training_dataloader
+ )

  for batch in my_training_dataloader:
      my_optimizer.zero_grad()
      inputs, targets = batch
-     inputs = inputs.to(device)
-     targets = targets.to(device)
      outputs = my_model(inputs)
      loss = my_loss_function(outputs, targets)
      # Just a small change for the backward instruction
-     loss.backward()
+     accelerator.backward(loss)
      my_optimizer.step()`,highlighted:`<span class="hljs-addition">+ from accelerate import Accelerator</span>

<span class="hljs-addition">+ accelerator = Accelerator()</span>
<span class="hljs-deletion">- my_model.to(device)</span>
  # Pass every important object (model, optimizer, dataloader) to *accelerator.prepare*
<span class="hljs-addition">+ my_model, my_optimizer, my_training_dataloader = accelerate.prepare(</span>
<span class="hljs-addition">+     my_model, my_optimizer, my_training_dataloader</span>
<span class="hljs-addition">+ )</span>

  for batch in my_training_dataloader:
      my_optimizer.zero_grad()
      inputs, targets = batch
<span class="hljs-deletion">-     inputs = inputs.to(device)</span>
<span class="hljs-deletion">-     targets = targets.to(device)</span>
      outputs = my_model(inputs)
      loss = my_loss_function(outputs, targets)
      # Just a small change for the backward instruction
<span class="hljs-deletion">-     loss.backward()</span>
<span class="hljs-addition">+     accelerator.backward(loss)</span>
      my_optimizer.step()`}}),H=new Pe({}),J=new Z({props:{code:"accelerate config",highlighted:"accelerate config"}}),O=new Z({props:{code:"accelerate launch my_script.py --args_to_my_script",highlighted:"accelerate launch my_script.py --args_to_my_script"}}),R=new Z({props:{code:"accelerate launch examples/nlp_example.py",highlighted:"accelerate launch examples/nlp_example.py"}}),D=new Pe({}),{c(){$=i("meta"),ke=n(),b=i("h1"),z=i("a"),ee=i("span"),f(N.$$.fragment),tt=n(),te=i("span"),at=p("Accelerate"),Ee=n(),j=i("p"),rt=p("Run your "),ae=i("em"),it=p("raw"),ot=p(" PyTorch training script on any kind of device."),Ae=n(),P=i("h2"),U=i("a"),re=i("span"),f(C.$$.fragment),lt=n(),ie=i("span"),st=p("Features"),ze=n(),x=i("ul"),oe=i("li"),le=i("p"),nt=p(`\u{1F917} Accelerate provides an easy API to make your scripts run with mixed precision and in any kind of distributed
setting (multi-GPUs, TPUs etc.) while still letting you write your own training loop. The same code can then run
seamlessly on your local machine for debugging or your training environment.`),ct=n(),se=i("li"),ne=i("p"),pt=p(`\u{1F917} Accelerate also provides a CLI tool that allows you to quickly configure and test your training environment and
then launch the scripts.`),je=n(),k=i("h2"),S=i("a"),ce=i("span"),f(G.$$.fragment),mt=n(),pe=i("span"),ut=p("Easy to integrate"),Ue=n(),B=i("p"),dt=p("A traditional training loop in PyTorch looks like this:"),xe=n(),f(q.$$.fragment),Se=n(),Y=i("p"),ht=p("Changing it to work with accelerate is really easy and only adds a few lines of code:"),Le=n(),f(F.$$.fragment),Te=n(),K=i("p"),ft=p("and with this, your script can now run in a distributed environment (multi-GPU, TPU)."),Ie=n(),Q=i("p"),yt=p(`You can even simplify your script a bit by letting \u{1F917} Accelerate handle the device placement for you (which is safer,
especially for TPU training):`),Ne=n(),f(M.$$.fragment),Ce=n(),E=i("h2"),L=i("a"),me=i("span"),f(H.$$.fragment),_t=n(),ue=i("span"),vt=p("Script launcher"),Ge=n(),T=i("p"),wt=p("No need to remember how to use "),de=i("code"),gt=p("torch.distributed.launch"),$t=p(` or to write a specific launcher for TPU training! \u{1F917}
Accelerate comes with a CLI tool that will make your life easier when launching distributed scripts.`),qe=n(),V=i("p"),bt=p("On your machine(s) just run:"),Fe=n(),f(J.$$.fragment),Me=n(),W=i("p"),Pt=p(`and answer the questions asked. This will generate a config file that will be used automatically to properly set the
default options when doing`),He=n(),f(O.$$.fragment),Je=n(),X=i("p"),kt=p("For instance, here is how you would run the NLP example (from the root of the repo):"),Oe=n(),f(R.$$.fragment),Re=n(),A=i("h2"),I=i("a"),he=i("span"),f(D.$$.fragment),Et=n(),fe=i("span"),At=p("Supported integrations"),De=n(),d=i("ul"),ye=i("li"),zt=p("CPU only"),jt=n(),_e=i("li"),Ut=p("single GPU"),xt=n(),ve=i("li"),St=p("multi-GPU on one node (machine)"),Lt=n(),we=i("li"),Tt=p("multi-GPU on several nodes (machines)"),It=n(),ge=i("li"),Nt=p("TPU"),Ct=n(),$e=i("li"),Gt=p("FP16 with native AMP (apex on the roadmap)"),qt=n(),be=i("li"),Ft=p("DeepSpeed (experimental support)"),this.h()},l(e){const r=Ea('[data-svelte="svelte-1phssyn"]',document.head);$=o(r,"META",{name:!0,content:!0}),r.forEach(t),ke=c(e),b=o(e,"H1",{class:!0});var Ye=l(b);z=o(Ye,"A",{id:!0,class:!0,href:!0});var Ht=l(z);ee=o(Ht,"SPAN",{});var Jt=l(ee);y(N.$$.fragment,Jt),Jt.forEach(t),Ht.forEach(t),tt=c(Ye),te=o(Ye,"SPAN",{});var Ot=l(te);at=m(Ot,"Accelerate"),Ot.forEach(t),Ye.forEach(t),Ee=c(e),j=o(e,"P",{});var Ke=l(j);rt=m(Ke,"Run your "),ae=o(Ke,"EM",{});var Rt=l(ae);it=m(Rt,"raw"),Rt.forEach(t),ot=m(Ke," PyTorch training script on any kind of device."),Ke.forEach(t),Ae=c(e),P=o(e,"H2",{class:!0});var Qe=l(P);U=o(Qe,"A",{id:!0,class:!0,href:!0});var Dt=l(U);re=o(Dt,"SPAN",{});var Bt=l(re);y(C.$$.fragment,Bt),Bt.forEach(t),Dt.forEach(t),lt=c(Qe),ie=o(Qe,"SPAN",{});var Yt=l(ie);st=m(Yt,"Features"),Yt.forEach(t),Qe.forEach(t),ze=c(e),x=o(e,"UL",{});var Ve=l(x);oe=o(Ve,"LI",{});var Kt=l(oe);le=o(Kt,"P",{});var Qt=l(le);nt=m(Qt,`\u{1F917} Accelerate provides an easy API to make your scripts run with mixed precision and in any kind of distributed
setting (multi-GPUs, TPUs etc.) while still letting you write your own training loop. The same code can then run
seamlessly on your local machine for debugging or your training environment.`),Qt.forEach(t),Kt.forEach(t),ct=c(Ve),se=o(Ve,"LI",{});var Vt=l(se);ne=o(Vt,"P",{});var Wt=l(ne);pt=m(Wt,`\u{1F917} Accelerate also provides a CLI tool that allows you to quickly configure and test your training environment and
then launch the scripts.`),Wt.forEach(t),Vt.forEach(t),Ve.forEach(t),je=c(e),k=o(e,"H2",{class:!0});var We=l(k);S=o(We,"A",{id:!0,class:!0,href:!0});var Xt=l(S);ce=o(Xt,"SPAN",{});var Zt=l(ce);y(G.$$.fragment,Zt),Zt.forEach(t),Xt.forEach(t),mt=c(We),pe=o(We,"SPAN",{});var ea=l(pe);ut=m(ea,"Easy to integrate"),ea.forEach(t),We.forEach(t),Ue=c(e),B=o(e,"P",{});var ta=l(B);dt=m(ta,"A traditional training loop in PyTorch looks like this:"),ta.forEach(t),xe=c(e),y(q.$$.fragment,e),Se=c(e),Y=o(e,"P",{});var aa=l(Y);ht=m(aa,"Changing it to work with accelerate is really easy and only adds a few lines of code:"),aa.forEach(t),Le=c(e),y(F.$$.fragment,e),Te=c(e),K=o(e,"P",{});var ra=l(K);ft=m(ra,"and with this, your script can now run in a distributed environment (multi-GPU, TPU)."),ra.forEach(t),Ie=c(e),Q=o(e,"P",{});var ia=l(Q);yt=m(ia,`You can even simplify your script a bit by letting \u{1F917} Accelerate handle the device placement for you (which is safer,
especially for TPU training):`),ia.forEach(t),Ne=c(e),y(M.$$.fragment,e),Ce=c(e),E=o(e,"H2",{class:!0});var Xe=l(E);L=o(Xe,"A",{id:!0,class:!0,href:!0});var oa=l(L);me=o(oa,"SPAN",{});var la=l(me);y(H.$$.fragment,la),la.forEach(t),oa.forEach(t),_t=c(Xe),ue=o(Xe,"SPAN",{});var sa=l(ue);vt=m(sa,"Script launcher"),sa.forEach(t),Xe.forEach(t),Ge=c(e),T=o(e,"P",{});var Ze=l(T);wt=m(Ze,"No need to remember how to use "),de=o(Ze,"CODE",{});var na=l(de);gt=m(na,"torch.distributed.launch"),na.forEach(t),$t=m(Ze,` or to write a specific launcher for TPU training! \u{1F917}
Accelerate comes with a CLI tool that will make your life easier when launching distributed scripts.`),Ze.forEach(t),qe=c(e),V=o(e,"P",{});var ca=l(V);bt=m(ca,"On your machine(s) just run:"),ca.forEach(t),Fe=c(e),y(J.$$.fragment,e),Me=c(e),W=o(e,"P",{});var pa=l(W);Pt=m(pa,`and answer the questions asked. This will generate a config file that will be used automatically to properly set the
default options when doing`),pa.forEach(t),He=c(e),y(O.$$.fragment,e),Je=c(e),X=o(e,"P",{});var ma=l(X);kt=m(ma,"For instance, here is how you would run the NLP example (from the root of the repo):"),ma.forEach(t),Oe=c(e),y(R.$$.fragment,e),Re=c(e),A=o(e,"H2",{class:!0});var et=l(A);I=o(et,"A",{id:!0,class:!0,href:!0});var ua=l(I);he=o(ua,"SPAN",{});var da=l(he);y(D.$$.fragment,da),da.forEach(t),ua.forEach(t),Et=c(et),fe=o(et,"SPAN",{});var ha=l(fe);At=m(ha,"Supported integrations"),ha.forEach(t),et.forEach(t),De=c(e),d=o(e,"UL",{});var h=l(d);ye=o(h,"LI",{});var fa=l(ye);zt=m(fa,"CPU only"),fa.forEach(t),jt=c(h),_e=o(h,"LI",{});var ya=l(_e);Ut=m(ya,"single GPU"),ya.forEach(t),xt=c(h),ve=o(h,"LI",{});var _a=l(ve);St=m(_a,"multi-GPU on one node (machine)"),_a.forEach(t),Lt=c(h),we=o(h,"LI",{});var va=l(we);Tt=m(va,"multi-GPU on several nodes (machines)"),va.forEach(t),It=c(h),ge=o(h,"LI",{});var wa=l(ge);Nt=m(wa,"TPU"),wa.forEach(t),Ct=c(h),$e=o(h,"LI",{});var ga=l($e);Gt=m(ga,"FP16 with native AMP (apex on the roadmap)"),ga.forEach(t),qt=c(h),be=o(h,"LI",{});var $a=l(be);Ft=m($a,"DeepSpeed (experimental support)"),$a.forEach(t),h.forEach(t),this.h()},h(){u($,"name","hf:doc:metadata"),u($,"content",JSON.stringify(Ua)),u(z,"id","accelerate"),u(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(z,"href","#accelerate"),u(b,"class","relative group"),u(U,"id","features"),u(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(U,"href","#features"),u(P,"class","relative group"),u(S,"id","easy-to-integrate"),u(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(S,"href","#easy-to-integrate"),u(k,"class","relative group"),u(L,"id","script-launcher"),u(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(L,"href","#script-launcher"),u(E,"class","relative group"),u(I,"id","supported-integrations"),u(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(I,"href","#supported-integrations"),u(A,"class","relative group")},m(e,r){a(document.head,$),s(e,ke,r),s(e,b,r),a(b,z),a(z,ee),_(N,ee,null),a(b,tt),a(b,te),a(te,at),s(e,Ee,r),s(e,j,r),a(j,rt),a(j,ae),a(ae,it),a(j,ot),s(e,Ae,r),s(e,P,r),a(P,U),a(U,re),_(C,re,null),a(P,lt),a(P,ie),a(ie,st),s(e,ze,r),s(e,x,r),a(x,oe),a(oe,le),a(le,nt),a(x,ct),a(x,se),a(se,ne),a(ne,pt),s(e,je,r),s(e,k,r),a(k,S),a(S,ce),_(G,ce,null),a(k,mt),a(k,pe),a(pe,ut),s(e,Ue,r),s(e,B,r),a(B,dt),s(e,xe,r),_(q,e,r),s(e,Se,r),s(e,Y,r),a(Y,ht),s(e,Le,r),_(F,e,r),s(e,Te,r),s(e,K,r),a(K,ft),s(e,Ie,r),s(e,Q,r),a(Q,yt),s(e,Ne,r),_(M,e,r),s(e,Ce,r),s(e,E,r),a(E,L),a(L,me),_(H,me,null),a(E,_t),a(E,ue),a(ue,vt),s(e,Ge,r),s(e,T,r),a(T,wt),a(T,de),a(de,gt),a(T,$t),s(e,qe,r),s(e,V,r),a(V,bt),s(e,Fe,r),_(J,e,r),s(e,Me,r),s(e,W,r),a(W,Pt),s(e,He,r),_(O,e,r),s(e,Je,r),s(e,X,r),a(X,kt),s(e,Oe,r),_(R,e,r),s(e,Re,r),s(e,A,r),a(A,I),a(I,he),_(D,he,null),a(A,Et),a(A,fe),a(fe,At),s(e,De,r),s(e,d,r),a(d,ye),a(ye,zt),a(d,jt),a(d,_e),a(_e,Ut),a(d,xt),a(d,ve),a(ve,St),a(d,Lt),a(d,we),a(we,Tt),a(d,It),a(d,ge),a(ge,Nt),a(d,Ct),a(d,$e),a($e,Gt),a(d,qt),a(d,be),a(be,Ft),Be=!0},p:Aa,i(e){Be||(v(N.$$.fragment,e),v(C.$$.fragment,e),v(G.$$.fragment,e),v(q.$$.fragment,e),v(F.$$.fragment,e),v(M.$$.fragment,e),v(H.$$.fragment,e),v(J.$$.fragment,e),v(O.$$.fragment,e),v(R.$$.fragment,e),v(D.$$.fragment,e),Be=!0)},o(e){w(N.$$.fragment,e),w(C.$$.fragment,e),w(G.$$.fragment,e),w(q.$$.fragment,e),w(F.$$.fragment,e),w(M.$$.fragment,e),w(H.$$.fragment,e),w(J.$$.fragment,e),w(O.$$.fragment,e),w(R.$$.fragment,e),w(D.$$.fragment,e),Be=!1},d(e){t($),e&&t(ke),e&&t(b),g(N),e&&t(Ee),e&&t(j),e&&t(Ae),e&&t(P),g(C),e&&t(ze),e&&t(x),e&&t(je),e&&t(k),g(G),e&&t(Ue),e&&t(B),e&&t(xe),g(q,e),e&&t(Se),e&&t(Y),e&&t(Le),g(F,e),e&&t(Te),e&&t(K),e&&t(Ie),e&&t(Q),e&&t(Ne),g(M,e),e&&t(Ce),e&&t(E),g(H),e&&t(Ge),e&&t(T),e&&t(qe),e&&t(V),e&&t(Fe),g(J,e),e&&t(Me),e&&t(W),e&&t(He),g(O,e),e&&t(Je),e&&t(X),e&&t(Oe),g(R,e),e&&t(Re),e&&t(A),g(D),e&&t(De),e&&t(d)}}}const Ua={local:"accelerate",sections:[{local:"features",title:"Features"},{local:"easy-to-integrate",title:"Easy to integrate"},{local:"script-launcher",title:"Script launcher"},{local:"supported-integrations",title:"Supported integrations"}],title:"Accelerate"};function xa(Mt){return za(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ia extends ba{constructor($){super();Pa(this,$,xa,ja,ka,{})}}export{Ia as default,Ua as metadata};
