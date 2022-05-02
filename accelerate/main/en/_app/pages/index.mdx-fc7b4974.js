import{S as ba,i as Pa,s as ka,e as o,k as n,w as f,t as p,M as Ea,c as i,d as t,m as c,a as s,x as y,h as m,b as u,F as a,g as l,y as _,L as Aa,q as v,o as w,B as g,v as za}from"../chunks/vendor-4918fc3c.js";import{I as Pe}from"../chunks/IconCopyLink-21d338b1.js";import{C as Z}from"../chunks/CodeBlock-99419108.js";function ja(Mt){let $,ke,b,z,ee,N,tt,te,at,Ee,j,rt,ae,ot,it,Ae,P,U,re,C,st,oe,lt,ze,x,ie,se,nt,ct,le,ne,pt,je,k,S,ce,G,mt,pe,ut,Ue,B,dt,xe,F,Se,Y,ht,Le,q,Te,K,ft,Ie,Q,yt,Ne,M,Ce,E,L,me,H,_t,ue,vt,Ge,T,wt,de,gt,$t,Fe,V,bt,qe,J,Me,W,Pt,He,O,Je,X,kt,Oe,R,Re,A,I,he,D,Et,fe,At,De,d,ye,zt,jt,_e,Ut,xt,ve,St,Lt,we,Tt,It,ge,Nt,Ct,$e,Gt,Ft,be,qt,Be;return N=new Pe({}),C=new Pe({}),G=new Pe({}),F=new Z({props:{code:`my_model.to(device)

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
    my_optimizer.step()`}}),q=new Z({props:{code:`+ from accelerate import Accelerator

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
      my_optimizer.step()`}}),H=new Pe({}),J=new Z({props:{code:"accelerate config",highlighted:"accelerate config"}}),O=new Z({props:{code:"accelerate launch my_script.py --args_to_my_script",highlighted:"accelerate launch my_script.py --args_to_my_script"}}),R=new Z({props:{code:"accelerate launch examples/nlp_example.py",highlighted:"accelerate launch examples/nlp_example.py"}}),D=new Pe({}),{c(){$=o("meta"),ke=n(),b=o("h1"),z=o("a"),ee=o("span"),f(N.$$.fragment),tt=n(),te=o("span"),at=p("Accelerate"),Ee=n(),j=o("p"),rt=p("Run your "),ae=o("em"),ot=p("raw"),it=p(" PyTorch training script on any kind of device"),Ae=n(),P=o("h2"),U=o("a"),re=o("span"),f(C.$$.fragment),st=n(),oe=o("span"),lt=p("Features"),ze=n(),x=o("ul"),ie=o("li"),se=o("p"),nt=p(`\u{1F917} Accelerate provides an easy API to make your scripts run with mixed precision and on any kind of distributed
setting (multi-GPUs, TPUs etc.) while still letting you write your own training loop. The same code can then runs
seamlessly on your local machine for debugging or your training environment.`),ct=n(),le=o("li"),ne=o("p"),pt=p(`\u{1F917} Accelerate also provides a CLI tool that allows you to quickly configure and test your training environment then
launch the scripts.`),je=n(),k=o("h2"),S=o("a"),ce=o("span"),f(G.$$.fragment),mt=n(),pe=o("span"),ut=p("Easy to integrate"),Ue=n(),B=o("p"),dt=p("A traditional training loop in PyTorch looks like this:"),xe=n(),f(F.$$.fragment),Se=n(),Y=o("p"),ht=p("Changing it to work with accelerate is really easy and only adds a few lines of code:"),Le=n(),f(q.$$.fragment),Te=n(),K=o("p"),ft=p("and with this, your script can now run in a distributed environment (multi-GPU, TPU)."),Ie=n(),Q=o("p"),yt=p(`You can even simplify your script a bit by letting \u{1F917} Accelerate handle the device placement for you (which is safer,
especially for TPU training):`),Ne=n(),f(M.$$.fragment),Ce=n(),E=o("h2"),L=o("a"),me=o("span"),f(H.$$.fragment),_t=n(),ue=o("span"),vt=p("Script launcher"),Ge=n(),T=o("p"),wt=p("No need to remember how to use "),de=o("code"),gt=p("torch.distributed.launch"),$t=p(` or to write a specific launcher for TPU training! \u{1F917}
Accelerate comes with a CLI tool that will make your life easier when launching distributed scripts.`),Fe=n(),V=o("p"),bt=p("On your machine(s) just run:"),qe=n(),f(J.$$.fragment),Me=n(),W=o("p"),Pt=p(`and answer the questions asked. This will generate a config file that will be used automatically to properly set the
default options when doing`),He=n(),f(O.$$.fragment),Je=n(),X=o("p"),kt=p("For instance, here is how you would run the NLP example (from the root of the repo):"),Oe=n(),f(R.$$.fragment),Re=n(),A=o("h2"),I=o("a"),he=o("span"),f(D.$$.fragment),Et=n(),fe=o("span"),At=p("Supported integrations"),De=n(),d=o("ul"),ye=o("li"),zt=p("CPU only"),jt=n(),_e=o("li"),Ut=p("single GPU"),xt=n(),ve=o("li"),St=p("multi-GPU on one node (machine)"),Lt=n(),we=o("li"),Tt=p("multi-GPU on several nodes (machines)"),It=n(),ge=o("li"),Nt=p("TPU"),Ct=n(),$e=o("li"),Gt=p("FP16 with native AMP (apex on the roadmap)"),Ft=n(),be=o("li"),qt=p("DeepSpeed (experimental support)"),this.h()},l(e){const r=Ea('[data-svelte="svelte-1phssyn"]',document.head);$=i(r,"META",{name:!0,content:!0}),r.forEach(t),ke=c(e),b=i(e,"H1",{class:!0});var Ye=s(b);z=i(Ye,"A",{id:!0,class:!0,href:!0});var Ht=s(z);ee=i(Ht,"SPAN",{});var Jt=s(ee);y(N.$$.fragment,Jt),Jt.forEach(t),Ht.forEach(t),tt=c(Ye),te=i(Ye,"SPAN",{});var Ot=s(te);at=m(Ot,"Accelerate"),Ot.forEach(t),Ye.forEach(t),Ee=c(e),j=i(e,"P",{});var Ke=s(j);rt=m(Ke,"Run your "),ae=i(Ke,"EM",{});var Rt=s(ae);ot=m(Rt,"raw"),Rt.forEach(t),it=m(Ke," PyTorch training script on any kind of device"),Ke.forEach(t),Ae=c(e),P=i(e,"H2",{class:!0});var Qe=s(P);U=i(Qe,"A",{id:!0,class:!0,href:!0});var Dt=s(U);re=i(Dt,"SPAN",{});var Bt=s(re);y(C.$$.fragment,Bt),Bt.forEach(t),Dt.forEach(t),st=c(Qe),oe=i(Qe,"SPAN",{});var Yt=s(oe);lt=m(Yt,"Features"),Yt.forEach(t),Qe.forEach(t),ze=c(e),x=i(e,"UL",{});var Ve=s(x);ie=i(Ve,"LI",{});var Kt=s(ie);se=i(Kt,"P",{});var Qt=s(se);nt=m(Qt,`\u{1F917} Accelerate provides an easy API to make your scripts run with mixed precision and on any kind of distributed
setting (multi-GPUs, TPUs etc.) while still letting you write your own training loop. The same code can then runs
seamlessly on your local machine for debugging or your training environment.`),Qt.forEach(t),Kt.forEach(t),ct=c(Ve),le=i(Ve,"LI",{});var Vt=s(le);ne=i(Vt,"P",{});var Wt=s(ne);pt=m(Wt,`\u{1F917} Accelerate also provides a CLI tool that allows you to quickly configure and test your training environment then
launch the scripts.`),Wt.forEach(t),Vt.forEach(t),Ve.forEach(t),je=c(e),k=i(e,"H2",{class:!0});var We=s(k);S=i(We,"A",{id:!0,class:!0,href:!0});var Xt=s(S);ce=i(Xt,"SPAN",{});var Zt=s(ce);y(G.$$.fragment,Zt),Zt.forEach(t),Xt.forEach(t),mt=c(We),pe=i(We,"SPAN",{});var ea=s(pe);ut=m(ea,"Easy to integrate"),ea.forEach(t),We.forEach(t),Ue=c(e),B=i(e,"P",{});var ta=s(B);dt=m(ta,"A traditional training loop in PyTorch looks like this:"),ta.forEach(t),xe=c(e),y(F.$$.fragment,e),Se=c(e),Y=i(e,"P",{});var aa=s(Y);ht=m(aa,"Changing it to work with accelerate is really easy and only adds a few lines of code:"),aa.forEach(t),Le=c(e),y(q.$$.fragment,e),Te=c(e),K=i(e,"P",{});var ra=s(K);ft=m(ra,"and with this, your script can now run in a distributed environment (multi-GPU, TPU)."),ra.forEach(t),Ie=c(e),Q=i(e,"P",{});var oa=s(Q);yt=m(oa,`You can even simplify your script a bit by letting \u{1F917} Accelerate handle the device placement for you (which is safer,
especially for TPU training):`),oa.forEach(t),Ne=c(e),y(M.$$.fragment,e),Ce=c(e),E=i(e,"H2",{class:!0});var Xe=s(E);L=i(Xe,"A",{id:!0,class:!0,href:!0});var ia=s(L);me=i(ia,"SPAN",{});var sa=s(me);y(H.$$.fragment,sa),sa.forEach(t),ia.forEach(t),_t=c(Xe),ue=i(Xe,"SPAN",{});var la=s(ue);vt=m(la,"Script launcher"),la.forEach(t),Xe.forEach(t),Ge=c(e),T=i(e,"P",{});var Ze=s(T);wt=m(Ze,"No need to remember how to use "),de=i(Ze,"CODE",{});var na=s(de);gt=m(na,"torch.distributed.launch"),na.forEach(t),$t=m(Ze,` or to write a specific launcher for TPU training! \u{1F917}
Accelerate comes with a CLI tool that will make your life easier when launching distributed scripts.`),Ze.forEach(t),Fe=c(e),V=i(e,"P",{});var ca=s(V);bt=m(ca,"On your machine(s) just run:"),ca.forEach(t),qe=c(e),y(J.$$.fragment,e),Me=c(e),W=i(e,"P",{});var pa=s(W);Pt=m(pa,`and answer the questions asked. This will generate a config file that will be used automatically to properly set the
default options when doing`),pa.forEach(t),He=c(e),y(O.$$.fragment,e),Je=c(e),X=i(e,"P",{});var ma=s(X);kt=m(ma,"For instance, here is how you would run the NLP example (from the root of the repo):"),ma.forEach(t),Oe=c(e),y(R.$$.fragment,e),Re=c(e),A=i(e,"H2",{class:!0});var et=s(A);I=i(et,"A",{id:!0,class:!0,href:!0});var ua=s(I);he=i(ua,"SPAN",{});var da=s(he);y(D.$$.fragment,da),da.forEach(t),ua.forEach(t),Et=c(et),fe=i(et,"SPAN",{});var ha=s(fe);At=m(ha,"Supported integrations"),ha.forEach(t),et.forEach(t),De=c(e),d=i(e,"UL",{});var h=s(d);ye=i(h,"LI",{});var fa=s(ye);zt=m(fa,"CPU only"),fa.forEach(t),jt=c(h),_e=i(h,"LI",{});var ya=s(_e);Ut=m(ya,"single GPU"),ya.forEach(t),xt=c(h),ve=i(h,"LI",{});var _a=s(ve);St=m(_a,"multi-GPU on one node (machine)"),_a.forEach(t),Lt=c(h),we=i(h,"LI",{});var va=s(we);Tt=m(va,"multi-GPU on several nodes (machines)"),va.forEach(t),It=c(h),ge=i(h,"LI",{});var wa=s(ge);Nt=m(wa,"TPU"),wa.forEach(t),Ct=c(h),$e=i(h,"LI",{});var ga=s($e);Gt=m(ga,"FP16 with native AMP (apex on the roadmap)"),ga.forEach(t),Ft=c(h),be=i(h,"LI",{});var $a=s(be);qt=m($a,"DeepSpeed (experimental support)"),$a.forEach(t),h.forEach(t),this.h()},h(){u($,"name","hf:doc:metadata"),u($,"content",JSON.stringify(Ua)),u(z,"id","accelerate"),u(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(z,"href","#accelerate"),u(b,"class","relative group"),u(U,"id","features"),u(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(U,"href","#features"),u(P,"class","relative group"),u(S,"id","easy-to-integrate"),u(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(S,"href","#easy-to-integrate"),u(k,"class","relative group"),u(L,"id","script-launcher"),u(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(L,"href","#script-launcher"),u(E,"class","relative group"),u(I,"id","supported-integrations"),u(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(I,"href","#supported-integrations"),u(A,"class","relative group")},m(e,r){a(document.head,$),l(e,ke,r),l(e,b,r),a(b,z),a(z,ee),_(N,ee,null),a(b,tt),a(b,te),a(te,at),l(e,Ee,r),l(e,j,r),a(j,rt),a(j,ae),a(ae,ot),a(j,it),l(e,Ae,r),l(e,P,r),a(P,U),a(U,re),_(C,re,null),a(P,st),a(P,oe),a(oe,lt),l(e,ze,r),l(e,x,r),a(x,ie),a(ie,se),a(se,nt),a(x,ct),a(x,le),a(le,ne),a(ne,pt),l(e,je,r),l(e,k,r),a(k,S),a(S,ce),_(G,ce,null),a(k,mt),a(k,pe),a(pe,ut),l(e,Ue,r),l(e,B,r),a(B,dt),l(e,xe,r),_(F,e,r),l(e,Se,r),l(e,Y,r),a(Y,ht),l(e,Le,r),_(q,e,r),l(e,Te,r),l(e,K,r),a(K,ft),l(e,Ie,r),l(e,Q,r),a(Q,yt),l(e,Ne,r),_(M,e,r),l(e,Ce,r),l(e,E,r),a(E,L),a(L,me),_(H,me,null),a(E,_t),a(E,ue),a(ue,vt),l(e,Ge,r),l(e,T,r),a(T,wt),a(T,de),a(de,gt),a(T,$t),l(e,Fe,r),l(e,V,r),a(V,bt),l(e,qe,r),_(J,e,r),l(e,Me,r),l(e,W,r),a(W,Pt),l(e,He,r),_(O,e,r),l(e,Je,r),l(e,X,r),a(X,kt),l(e,Oe,r),_(R,e,r),l(e,Re,r),l(e,A,r),a(A,I),a(I,he),_(D,he,null),a(A,Et),a(A,fe),a(fe,At),l(e,De,r),l(e,d,r),a(d,ye),a(ye,zt),a(d,jt),a(d,_e),a(_e,Ut),a(d,xt),a(d,ve),a(ve,St),a(d,Lt),a(d,we),a(we,Tt),a(d,It),a(d,ge),a(ge,Nt),a(d,Ct),a(d,$e),a($e,Gt),a(d,Ft),a(d,be),a(be,qt),Be=!0},p:Aa,i(e){Be||(v(N.$$.fragment,e),v(C.$$.fragment,e),v(G.$$.fragment,e),v(F.$$.fragment,e),v(q.$$.fragment,e),v(M.$$.fragment,e),v(H.$$.fragment,e),v(J.$$.fragment,e),v(O.$$.fragment,e),v(R.$$.fragment,e),v(D.$$.fragment,e),Be=!0)},o(e){w(N.$$.fragment,e),w(C.$$.fragment,e),w(G.$$.fragment,e),w(F.$$.fragment,e),w(q.$$.fragment,e),w(M.$$.fragment,e),w(H.$$.fragment,e),w(J.$$.fragment,e),w(O.$$.fragment,e),w(R.$$.fragment,e),w(D.$$.fragment,e),Be=!1},d(e){t($),e&&t(ke),e&&t(b),g(N),e&&t(Ee),e&&t(j),e&&t(Ae),e&&t(P),g(C),e&&t(ze),e&&t(x),e&&t(je),e&&t(k),g(G),e&&t(Ue),e&&t(B),e&&t(xe),g(F,e),e&&t(Se),e&&t(Y),e&&t(Le),g(q,e),e&&t(Te),e&&t(K),e&&t(Ie),e&&t(Q),e&&t(Ne),g(M,e),e&&t(Ce),e&&t(E),g(H),e&&t(Ge),e&&t(T),e&&t(Fe),e&&t(V),e&&t(qe),g(J,e),e&&t(Me),e&&t(W),e&&t(He),g(O,e),e&&t(Je),e&&t(X),e&&t(Oe),g(R,e),e&&t(Re),e&&t(A),g(D),e&&t(De),e&&t(d)}}}const Ua={local:"accelerate",sections:[{local:"features",title:"Features"},{local:"easy-to-integrate",title:"Easy to integrate"},{local:"script-launcher",title:"Script launcher"},{local:"supported-integrations",title:"Supported integrations"}],title:"Accelerate"};function xa(Mt){return za(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ia extends ba{constructor($){super();Pa(this,$,xa,ja,ka,{})}}export{Ia as default,Ua as metadata};
