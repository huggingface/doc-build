import{S as ba,i as Pa,s as ka,e as i,k as n,w as _,t as c,M as Ea,c as o,d as t,m as p,a as l,x as v,h as m,b as u,F as a,g as s,y as w,L as Aa,q as g,o as $,B as b}from"../chunks/vendor-19e06bd2.js";import{I as ke}from"../chunks/IconCopyLink-3c713d38.js";import{C as ee}from"../chunks/CodeBlock-9dd1fdfb.js";function za(tt){let P,B,f,y,te,N,at,ae,rt,Ee,j,it,re,ot,lt,Ae,k,U,ie,C,st,oe,nt,ze,x,le,se,pt,ct,ne,pe,mt,je,E,S,ce,G,ut,me,dt,Ue,Y,ht,xe,F,Se,K,ft,Le,q,Te,Q,yt,Ie,V,_t,Ne,H,Ce,A,L,ue,J,vt,de,wt,Ge,T,gt,he,$t,bt,Fe,W,Pt,qe,M,He,X,kt,Je,O,Me,Z,Et,Oe,D,De,z,I,fe,R,At,ye,zt,Re,d,_e,jt,Ut,ve,xt,St,we,Lt,Tt,ge,It,Nt,$e,Ct,Gt,be,Ft,qt,Pe,Ht,Be;return N=new ke({}),C=new ke({}),G=new ke({}),F=new ee({props:{code:`my_model.to(device)

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
    my_optimizer.step()`}}),q=new ee({props:{code:`+ from accelerate import Accelerator

+ accelerator = Accelerator()
  # Use the device given by the *accelerator* object.
+ device = accelerator.device
  my_model.to(device)
  # Pass every important object (model, optimizer, dataloader) to *accelerator.prepare*
+ my_model, my_optimizer, my_training_dataloader = accelerate.prepare(
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
<span class="hljs-addition">+ my_model, my_optimizer, my_training_dataloader = accelerate.prepare(</span>
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
      my_optimizer.step()`}}),H=new ee({props:{code:`+ from accelerate import Accelerator

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
      my_optimizer.step()`}}),J=new ke({}),M=new ee({props:{code:"accelerate config",highlighted:"accelerate config"}}),O=new ee({props:{code:"accelerate launch my_script.py --args_to_my_script",highlighted:"accelerate launch my_script.py --args_to_my_script"}}),D=new ee({props:{code:"accelerate launch examples/nlp_example.py",highlighted:"accelerate launch examples/nlp_example.py"}}),R=new ke({}),{c(){P=i("meta"),B=n(),f=i("h1"),y=i("a"),te=i("span"),_(N.$$.fragment),at=n(),ae=i("span"),rt=c("Accelerate"),Ee=n(),j=i("p"),it=c("Run your "),re=i("em"),ot=c("raw"),lt=c(" PyTorch training script on any kind of device"),Ae=n(),k=i("h2"),U=i("a"),ie=i("span"),_(C.$$.fragment),st=n(),oe=i("span"),nt=c("Features"),ze=n(),x=i("ul"),le=i("li"),se=i("p"),pt=c(`\u{1F917} Accelerate provides an easy API to make your scripts run with mixed precision and on any kind of distributed
setting (multi-GPUs, TPUs etc.) while still letting you write your own training loop. The same code can then runs
seamlessly on your local machine for debugging or your training environment.`),ct=n(),ne=i("li"),pe=i("p"),mt=c(`\u{1F917} Accelerate also provides a CLI tool that allows you to quickly configure and test your training environment then
launch the scripts.`),je=n(),E=i("h2"),S=i("a"),ce=i("span"),_(G.$$.fragment),ut=n(),me=i("span"),dt=c("Easy to integrate"),Ue=n(),Y=i("p"),ht=c("A traditional training loop in PyTorch looks like this:"),xe=n(),_(F.$$.fragment),Se=n(),K=i("p"),ft=c("Changing it to work with accelerate is really easy and only adds a few lines of code:"),Le=n(),_(q.$$.fragment),Te=n(),Q=i("p"),yt=c("and with this, your script can now run in a distributed environment (multi-GPU, TPU)."),Ie=n(),V=i("p"),_t=c(`You can even simplify your script a bit by letting \u{1F917} Accelerate handle the device placement for you (which is safer,
especially for TPU training):`),Ne=n(),_(H.$$.fragment),Ce=n(),A=i("h2"),L=i("a"),ue=i("span"),_(J.$$.fragment),vt=n(),de=i("span"),wt=c("Script launcher"),Ge=n(),T=i("p"),gt=c("No need to remember how to use "),he=i("code"),$t=c("torch.distributed.launch"),bt=c(` or to write a specific launcher for TPU training! \u{1F917}
Accelerate comes with a CLI tool that will make your life easier when launching distributed scripts.`),Fe=n(),W=i("p"),Pt=c("On your machine(s) just run:"),qe=n(),_(M.$$.fragment),He=n(),X=i("p"),kt=c(`and answer the questions asked. This will generate a config file that will be used automatically to properly set the
default options when doing`),Je=n(),_(O.$$.fragment),Me=n(),Z=i("p"),Et=c("For instance, here is how you would run the NLP example (from the root of the repo):"),Oe=n(),_(D.$$.fragment),De=n(),z=i("h2"),I=i("a"),fe=i("span"),_(R.$$.fragment),At=n(),ye=i("span"),zt=c("Supported integrations"),Re=n(),d=i("ul"),_e=i("li"),jt=c("CPU only"),Ut=n(),ve=i("li"),xt=c("single GPU"),St=n(),we=i("li"),Lt=c("multi-GPU on one node (machine)"),Tt=n(),ge=i("li"),It=c("multi-GPU on several nodes (machines)"),Nt=n(),$e=i("li"),Ct=c("TPU"),Gt=n(),be=i("li"),Ft=c("FP16 with native AMP (apex on the roadmap)"),qt=n(),Pe=i("li"),Ht=c("DeepSpeed (experimental support)"),this.h()},l(e){const r=Ea('[data-svelte="svelte-1phssyn"]',document.head);P=o(r,"META",{name:!0,content:!0}),r.forEach(t),B=p(e),f=o(e,"H1",{class:!0});var Ye=l(f);y=o(Ye,"A",{id:!0,class:!0,href:!0});var Jt=l(y);te=o(Jt,"SPAN",{});var Mt=l(te);v(N.$$.fragment,Mt),Mt.forEach(t),Jt.forEach(t),at=p(Ye),ae=o(Ye,"SPAN",{});var Ot=l(ae);rt=m(Ot,"Accelerate"),Ot.forEach(t),Ye.forEach(t),Ee=p(e),j=o(e,"P",{});var Ke=l(j);it=m(Ke,"Run your "),re=o(Ke,"EM",{});var Dt=l(re);ot=m(Dt,"raw"),Dt.forEach(t),lt=m(Ke," PyTorch training script on any kind of device"),Ke.forEach(t),Ae=p(e),k=o(e,"H2",{class:!0});var Qe=l(k);U=o(Qe,"A",{id:!0,class:!0,href:!0});var Rt=l(U);ie=o(Rt,"SPAN",{});var Bt=l(ie);v(C.$$.fragment,Bt),Bt.forEach(t),Rt.forEach(t),st=p(Qe),oe=o(Qe,"SPAN",{});var Yt=l(oe);nt=m(Yt,"Features"),Yt.forEach(t),Qe.forEach(t),ze=p(e),x=o(e,"UL",{});var Ve=l(x);le=o(Ve,"LI",{});var Kt=l(le);se=o(Kt,"P",{});var Qt=l(se);pt=m(Qt,`\u{1F917} Accelerate provides an easy API to make your scripts run with mixed precision and on any kind of distributed
setting (multi-GPUs, TPUs etc.) while still letting you write your own training loop. The same code can then runs
seamlessly on your local machine for debugging or your training environment.`),Qt.forEach(t),Kt.forEach(t),ct=p(Ve),ne=o(Ve,"LI",{});var Vt=l(ne);pe=o(Vt,"P",{});var Wt=l(pe);mt=m(Wt,`\u{1F917} Accelerate also provides a CLI tool that allows you to quickly configure and test your training environment then
launch the scripts.`),Wt.forEach(t),Vt.forEach(t),Ve.forEach(t),je=p(e),E=o(e,"H2",{class:!0});var We=l(E);S=o(We,"A",{id:!0,class:!0,href:!0});var Xt=l(S);ce=o(Xt,"SPAN",{});var Zt=l(ce);v(G.$$.fragment,Zt),Zt.forEach(t),Xt.forEach(t),ut=p(We),me=o(We,"SPAN",{});var ea=l(me);dt=m(ea,"Easy to integrate"),ea.forEach(t),We.forEach(t),Ue=p(e),Y=o(e,"P",{});var ta=l(Y);ht=m(ta,"A traditional training loop in PyTorch looks like this:"),ta.forEach(t),xe=p(e),v(F.$$.fragment,e),Se=p(e),K=o(e,"P",{});var aa=l(K);ft=m(aa,"Changing it to work with accelerate is really easy and only adds a few lines of code:"),aa.forEach(t),Le=p(e),v(q.$$.fragment,e),Te=p(e),Q=o(e,"P",{});var ra=l(Q);yt=m(ra,"and with this, your script can now run in a distributed environment (multi-GPU, TPU)."),ra.forEach(t),Ie=p(e),V=o(e,"P",{});var ia=l(V);_t=m(ia,`You can even simplify your script a bit by letting \u{1F917} Accelerate handle the device placement for you (which is safer,
especially for TPU training):`),ia.forEach(t),Ne=p(e),v(H.$$.fragment,e),Ce=p(e),A=o(e,"H2",{class:!0});var Xe=l(A);L=o(Xe,"A",{id:!0,class:!0,href:!0});var oa=l(L);ue=o(oa,"SPAN",{});var la=l(ue);v(J.$$.fragment,la),la.forEach(t),oa.forEach(t),vt=p(Xe),de=o(Xe,"SPAN",{});var sa=l(de);wt=m(sa,"Script launcher"),sa.forEach(t),Xe.forEach(t),Ge=p(e),T=o(e,"P",{});var Ze=l(T);gt=m(Ze,"No need to remember how to use "),he=o(Ze,"CODE",{});var na=l(he);$t=m(na,"torch.distributed.launch"),na.forEach(t),bt=m(Ze,` or to write a specific launcher for TPU training! \u{1F917}
Accelerate comes with a CLI tool that will make your life easier when launching distributed scripts.`),Ze.forEach(t),Fe=p(e),W=o(e,"P",{});var pa=l(W);Pt=m(pa,"On your machine(s) just run:"),pa.forEach(t),qe=p(e),v(M.$$.fragment,e),He=p(e),X=o(e,"P",{});var ca=l(X);kt=m(ca,`and answer the questions asked. This will generate a config file that will be used automatically to properly set the
default options when doing`),ca.forEach(t),Je=p(e),v(O.$$.fragment,e),Me=p(e),Z=o(e,"P",{});var ma=l(Z);Et=m(ma,"For instance, here is how you would run the NLP example (from the root of the repo):"),ma.forEach(t),Oe=p(e),v(D.$$.fragment,e),De=p(e),z=o(e,"H2",{class:!0});var et=l(z);I=o(et,"A",{id:!0,class:!0,href:!0});var ua=l(I);fe=o(ua,"SPAN",{});var da=l(fe);v(R.$$.fragment,da),da.forEach(t),ua.forEach(t),At=p(et),ye=o(et,"SPAN",{});var ha=l(ye);zt=m(ha,"Supported integrations"),ha.forEach(t),et.forEach(t),Re=p(e),d=o(e,"UL",{});var h=l(d);_e=o(h,"LI",{});var fa=l(_e);jt=m(fa,"CPU only"),fa.forEach(t),Ut=p(h),ve=o(h,"LI",{});var ya=l(ve);xt=m(ya,"single GPU"),ya.forEach(t),St=p(h),we=o(h,"LI",{});var _a=l(we);Lt=m(_a,"multi-GPU on one node (machine)"),_a.forEach(t),Tt=p(h),ge=o(h,"LI",{});var va=l(ge);It=m(va,"multi-GPU on several nodes (machines)"),va.forEach(t),Nt=p(h),$e=o(h,"LI",{});var wa=l($e);Ct=m(wa,"TPU"),wa.forEach(t),Gt=p(h),be=o(h,"LI",{});var ga=l(be);Ft=m(ga,"FP16 with native AMP (apex on the roadmap)"),ga.forEach(t),qt=p(h),Pe=o(h,"LI",{});var $a=l(Pe);Ht=m($a,"DeepSpeed (experimental support)"),$a.forEach(t),h.forEach(t),this.h()},h(){u(P,"name","hf:doc:metadata"),u(P,"content",JSON.stringify(ja)),u(y,"id","accelerate"),u(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(y,"href","#accelerate"),u(f,"class","relative group"),u(U,"id","features"),u(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(U,"href","#features"),u(k,"class","relative group"),u(S,"id","easy-to-integrate"),u(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(S,"href","#easy-to-integrate"),u(E,"class","relative group"),u(L,"id","script-launcher"),u(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(L,"href","#script-launcher"),u(A,"class","relative group"),u(I,"id","supported-integrations"),u(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(I,"href","#supported-integrations"),u(z,"class","relative group")},m(e,r){a(document.head,P),s(e,B,r),s(e,f,r),a(f,y),a(y,te),w(N,te,null),a(f,at),a(f,ae),a(ae,rt),s(e,Ee,r),s(e,j,r),a(j,it),a(j,re),a(re,ot),a(j,lt),s(e,Ae,r),s(e,k,r),a(k,U),a(U,ie),w(C,ie,null),a(k,st),a(k,oe),a(oe,nt),s(e,ze,r),s(e,x,r),a(x,le),a(le,se),a(se,pt),a(x,ct),a(x,ne),a(ne,pe),a(pe,mt),s(e,je,r),s(e,E,r),a(E,S),a(S,ce),w(G,ce,null),a(E,ut),a(E,me),a(me,dt),s(e,Ue,r),s(e,Y,r),a(Y,ht),s(e,xe,r),w(F,e,r),s(e,Se,r),s(e,K,r),a(K,ft),s(e,Le,r),w(q,e,r),s(e,Te,r),s(e,Q,r),a(Q,yt),s(e,Ie,r),s(e,V,r),a(V,_t),s(e,Ne,r),w(H,e,r),s(e,Ce,r),s(e,A,r),a(A,L),a(L,ue),w(J,ue,null),a(A,vt),a(A,de),a(de,wt),s(e,Ge,r),s(e,T,r),a(T,gt),a(T,he),a(he,$t),a(T,bt),s(e,Fe,r),s(e,W,r),a(W,Pt),s(e,qe,r),w(M,e,r),s(e,He,r),s(e,X,r),a(X,kt),s(e,Je,r),w(O,e,r),s(e,Me,r),s(e,Z,r),a(Z,Et),s(e,Oe,r),w(D,e,r),s(e,De,r),s(e,z,r),a(z,I),a(I,fe),w(R,fe,null),a(z,At),a(z,ye),a(ye,zt),s(e,Re,r),s(e,d,r),a(d,_e),a(_e,jt),a(d,Ut),a(d,ve),a(ve,xt),a(d,St),a(d,we),a(we,Lt),a(d,Tt),a(d,ge),a(ge,It),a(d,Nt),a(d,$e),a($e,Ct),a(d,Gt),a(d,be),a(be,Ft),a(d,qt),a(d,Pe),a(Pe,Ht),Be=!0},p:Aa,i(e){Be||(g(N.$$.fragment,e),g(C.$$.fragment,e),g(G.$$.fragment,e),g(F.$$.fragment,e),g(q.$$.fragment,e),g(H.$$.fragment,e),g(J.$$.fragment,e),g(M.$$.fragment,e),g(O.$$.fragment,e),g(D.$$.fragment,e),g(R.$$.fragment,e),Be=!0)},o(e){$(N.$$.fragment,e),$(C.$$.fragment,e),$(G.$$.fragment,e),$(F.$$.fragment,e),$(q.$$.fragment,e),$(H.$$.fragment,e),$(J.$$.fragment,e),$(M.$$.fragment,e),$(O.$$.fragment,e),$(D.$$.fragment,e),$(R.$$.fragment,e),Be=!1},d(e){t(P),e&&t(B),e&&t(f),b(N),e&&t(Ee),e&&t(j),e&&t(Ae),e&&t(k),b(C),e&&t(ze),e&&t(x),e&&t(je),e&&t(E),b(G),e&&t(Ue),e&&t(Y),e&&t(xe),b(F,e),e&&t(Se),e&&t(K),e&&t(Le),b(q,e),e&&t(Te),e&&t(Q),e&&t(Ie),e&&t(V),e&&t(Ne),b(H,e),e&&t(Ce),e&&t(A),b(J),e&&t(Ge),e&&t(T),e&&t(Fe),e&&t(W),e&&t(qe),b(M,e),e&&t(He),e&&t(X),e&&t(Je),b(O,e),e&&t(Me),e&&t(Z),e&&t(Oe),b(D,e),e&&t(De),e&&t(z),b(R),e&&t(Re),e&&t(d)}}}const ja={local:"accelerate",sections:[{local:"features",title:"Features"},{local:"easy-to-integrate",title:"Easy to integrate"},{local:"script-launcher",title:"Script launcher"},{local:"supported-integrations",title:"Supported integrations"}],title:"Accelerate"};function Ua(tt,P,B){let{fw:f}=P;return tt.$$set=y=>{"fw"in y&&B(0,f=y.fw)},[f]}class Ta extends ba{constructor(P){super();Pa(this,P,Ua,za,ka,{fw:0})}}export{Ta as default,ja as metadata};
