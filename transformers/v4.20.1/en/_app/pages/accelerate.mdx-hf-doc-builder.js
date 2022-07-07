import{S as Ba,i as La,s as Ya,e as o,k as h,w as f,t as c,M as Ja,c as l,d as t,m as d,a as s,x as u,h as p,b as n,G as a,g as i,y as m,L as Ra,q as v,o as _,B as g,v as Ka}from"../chunks/vendor-hf-doc-builder.js";import{I as ie}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as M}from"../chunks/CodeBlock-hf-doc-builder.js";function Qa(sa){let b,De,y,T,me,U,wt,ve,$t,He,S,bt,I,yt,kt,Oe,k,x,_e,W,At,ge,Et,Fe,ne,jt,Ge,B,Me,w,Pt,L,we,zt,Tt,$e,St,xt,Ue,Y,Ie,A,C,be,J,Ct,ye,qt,We,q,Nt,R,ke,Dt,Ht,Be,K,Le,E,N,Ae,Q,Ot,Ee,Ft,Ye,$,Gt,je,Mt,Ut,V,Pe,It,Wt,Je,X,Re,ce,Bt,Ke,Z,Qe,j,D,ze,ee,Lt,Te,Yt,Ve,pe,Jt,Xe,P,H,Se,te,Rt,xe,Kt,Ze,he,Qt,et,ae,tt,de,Vt,at,re,rt,z,O,Ce,oe,Xt,qe,Zt,ot,F,ea,Ne,ta,aa,lt,le,st,G,ra,se,oa,la,it;return U=new ie({}),W=new ie({}),B=new M({props:{code:"pip install accelerate",highlighted:"pip install accelerate"}}),Y=new M({props:{code:`from accelerate import Accelerator

accelerator = Accelerator()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> Accelerator

<span class="hljs-meta">&gt;&gt;&gt; </span>accelerator = Accelerator()`}}),J=new ie({}),K=new M({props:{code:`train_dataloader, eval_dataloader, model, optimizer = accelerator.prepare(
    train_dataloader, eval_dataloader, model, optimizer
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataloader, eval_dataloader, model, optimizer = accelerator.prepare(
<span class="hljs-meta">... </span>    train_dataloader, eval_dataloader, model, optimizer
<span class="hljs-meta">... </span>)`}}),Q=new ie({}),X=new M({props:{code:`for epoch in range(num_epochs):
    for batch in train_dataloader:
        outputs = model(**batch)
        loss = outputs.loss
        accelerator.backward(loss)

        optimizer.step()
        lr_scheduler.step()
        optimizer.zero_grad()
        progress_bar.update(1)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> epoch <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(num_epochs):
<span class="hljs-meta">... </span>    <span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> train_dataloader:
<span class="hljs-meta">... </span>        outputs = model(**batch)
<span class="hljs-meta">... </span>        loss = outputs.loss
<span class="hljs-meta">... </span>        accelerator.backward(loss)

<span class="hljs-meta">... </span>        optimizer.step()
<span class="hljs-meta">... </span>        lr_scheduler.step()
<span class="hljs-meta">... </span>        optimizer.zero_grad()
<span class="hljs-meta">... </span>        progress_bar.update(<span class="hljs-number">1</span>)`}}),Z=new M({props:{code:`+ from accelerate import Accelerator
  from transformers import AdamW, AutoModelForSequenceClassification, get_scheduler

+ accelerator = Accelerator()

  model = AutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=2)
  optimizer = AdamW(model.parameters(), lr=3e-5)

- device = torch.device("cuda") if torch.cuda.is_available() else torch.device("cpu")
- model.to(device)

+ train_dataloader, eval_dataloader, model, optimizer = accelerator.prepare(
+     train_dataloader, eval_dataloader, model, optimizer
+ )

  num_epochs = 3
  num_training_steps = num_epochs * len(train_dataloader)
  lr_scheduler = get_scheduler(
      "linear",
      optimizer=optimizer,
      num_warmup_steps=0,
      num_training_steps=num_training_steps
  )

  progress_bar = tqdm(range(num_training_steps))

  model.train()
  for epoch in range(num_epochs):
      for batch in train_dataloader:
-         batch = {k: v.to(device) for k, v in batch.items()}
          outputs = model(**batch)
          loss = outputs.loss
-         loss.backward()
+         accelerator.backward(loss)

          optimizer.step()
          lr_scheduler.step()
          optimizer.zero_grad()
          progress_bar.update(1)`,highlighted:`<span class="hljs-addition">+ from accelerate import Accelerator</span>
  from transformers import AdamW, AutoModelForSequenceClassification, get_scheduler

<span class="hljs-addition">+ accelerator = Accelerator()</span>

  model = AutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=2)
  optimizer = AdamW(model.parameters(), lr=3e-5)

<span class="hljs-deletion">- device = torch.device(&quot;cuda&quot;) if torch.cuda.is_available() else torch.device(&quot;cpu&quot;)</span>
<span class="hljs-deletion">- model.to(device)</span>

<span class="hljs-addition">+ train_dataloader, eval_dataloader, model, optimizer = accelerator.prepare(</span>
<span class="hljs-addition">+     train_dataloader, eval_dataloader, model, optimizer</span>
<span class="hljs-addition">+ )</span>

  num_epochs = 3
  num_training_steps = num_epochs * len(train_dataloader)
  lr_scheduler = get_scheduler(
      &quot;linear&quot;,
      optimizer=optimizer,
      num_warmup_steps=0,
      num_training_steps=num_training_steps
  )

  progress_bar = tqdm(range(num_training_steps))

  model.train()
  for epoch in range(num_epochs):
      for batch in train_dataloader:
<span class="hljs-deletion">-         batch = {k: v.to(device) for k, v in batch.items()}</span>
          outputs = model(**batch)
          loss = outputs.loss
<span class="hljs-deletion">-         loss.backward()</span>
<span class="hljs-addition">+         accelerator.backward(loss)</span>

          optimizer.step()
          lr_scheduler.step()
          optimizer.zero_grad()
          progress_bar.update(1)`}}),ee=new ie({}),te=new ie({}),ae=new M({props:{code:"accelerate config",highlighted:"accelerate config"}}),re=new M({props:{code:"accelerate launch train.py",highlighted:"accelerate launch train.py"}}),oe=new ie({}),le=new M({props:{code:`from accelerate import notebook_launcher

notebook_launcher(training_function)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> notebook_launcher

<span class="hljs-meta">&gt;&gt;&gt; </span>notebook_launcher(training_function)`}}),{c(){b=o("meta"),De=h(),y=o("h1"),T=o("a"),me=o("span"),f(U.$$.fragment),wt=h(),ve=o("span"),$t=c("Distributed training with \u{1F917} Accelerate"),He=h(),S=o("p"),bt=c("As models get bigger, parallelism has emerged as a strategy for training larger models on limited hardware and accelerating training speed by several orders of magnitude. At Hugging Face, we created the "),I=o("a"),yt=c("\u{1F917} Accelerate"),kt=c(" library to help users easily train a \u{1F917} Transformers model on any type of distributed setup, whether it is multiple GPU\u2019s on one machine or multiple GPU\u2019s across several machines. In this tutorial, learn how to customize your native PyTorch training loop to enable training in a distributed environment."),Oe=h(),k=o("h2"),x=o("a"),_e=o("span"),f(W.$$.fragment),At=h(),ge=o("span"),Et=c("Setup"),Fe=h(),ne=o("p"),jt=c("Get started by installing \u{1F917} Accelerate:"),Ge=h(),f(B.$$.fragment),Me=h(),w=o("p"),Pt=c("Then import and create an "),L=o("a"),we=o("code"),zt=c("Accelerator"),Tt=c(" object. "),$e=o("code"),St=c("Accelerator"),xt=c(" will automatically detect your type of distributed setup and initialize all the necessary components for training. You don\u2019t need to explicitly place your model on a device."),Ue=h(),f(Y.$$.fragment),Ie=h(),A=o("h2"),C=o("a"),be=o("span"),f(J.$$.fragment),Ct=h(),ye=o("span"),qt=c("Prepare to accelerate"),We=h(),q=o("p"),Nt=c("The next step is to pass all the relevant training objects to the "),R=o("a"),ke=o("code"),Dt=c("prepare"),Ht=c(" method. This includes your training and evaluation DataLoaders, a model and an optimizer:"),Be=h(),f(K.$$.fragment),Le=h(),E=o("h2"),N=o("a"),Ae=o("span"),f(Q.$$.fragment),Ot=h(),Ee=o("span"),Ft=c("Backward"),Ye=h(),$=o("p"),Gt=c("The last addition is to replace the typical "),je=o("code"),Mt=c("loss.backward()"),Ut=c(" in your training loop with \u{1F917} Accelerate\u2019s "),V=o("a"),Pe=o("code"),It=c("backward"),Wt=c(" method:"),Je=h(),f(X.$$.fragment),Re=h(),ce=o("p"),Bt=c("As you can see in the following code, you only need to add four additional lines of code to your training loop to enable distributed training!"),Ke=h(),f(Z.$$.fragment),Qe=h(),j=o("h2"),D=o("a"),ze=o("span"),f(ee.$$.fragment),Lt=h(),Te=o("span"),Yt=c("Train"),Ve=h(),pe=o("p"),Jt=c("Once you\u2019ve added the relevant lines of code, launch your training in a script or a notebook like Colaboratory."),Xe=h(),P=o("h3"),H=o("a"),Se=o("span"),f(te.$$.fragment),Rt=h(),xe=o("span"),Kt=c("Train with a script"),Ze=h(),he=o("p"),Qt=c("If you are running your training from a script, run the following command to create and save a configuration file:"),et=h(),f(ae.$$.fragment),tt=h(),de=o("p"),Vt=c("Then launch your training with:"),at=h(),f(re.$$.fragment),rt=h(),z=o("h3"),O=o("a"),Ce=o("span"),f(oe.$$.fragment),Xt=h(),qe=o("span"),Zt=c("Train with a notebook"),ot=h(),F=o("p"),ea=c("\u{1F917} Accelerate can also run in a notebook if you\u2019re planning on using Colaboratory\u2019s TPUs. Wrap all the code responsible for training in a function, and pass it to "),Ne=o("code"),ta=c("notebook_launcher"),aa=c(":"),lt=h(),f(le.$$.fragment),st=h(),G=o("p"),ra=c("For more information about \u{1F917} Accelerate and it\u2019s rich features, refer to the "),se=o("a"),oa=c("documentation"),la=c("."),this.h()},l(e){const r=Ja('[data-svelte="svelte-1phssyn"]',document.head);b=l(r,"META",{name:!0,content:!0}),r.forEach(t),De=d(e),y=l(e,"H1",{class:!0});var nt=s(y);T=l(nt,"A",{id:!0,class:!0,href:!0});var ia=s(T);me=l(ia,"SPAN",{});var na=s(me);u(U.$$.fragment,na),na.forEach(t),ia.forEach(t),wt=d(nt),ve=l(nt,"SPAN",{});var ca=s(ve);$t=p(ca,"Distributed training with \u{1F917} Accelerate"),ca.forEach(t),nt.forEach(t),He=d(e),S=l(e,"P",{});var ct=s(S);bt=p(ct,"As models get bigger, parallelism has emerged as a strategy for training larger models on limited hardware and accelerating training speed by several orders of magnitude. At Hugging Face, we created the "),I=l(ct,"A",{href:!0,rel:!0});var pa=s(I);yt=p(pa,"\u{1F917} Accelerate"),pa.forEach(t),kt=p(ct," library to help users easily train a \u{1F917} Transformers model on any type of distributed setup, whether it is multiple GPU\u2019s on one machine or multiple GPU\u2019s across several machines. In this tutorial, learn how to customize your native PyTorch training loop to enable training in a distributed environment."),ct.forEach(t),Oe=d(e),k=l(e,"H2",{class:!0});var pt=s(k);x=l(pt,"A",{id:!0,class:!0,href:!0});var ha=s(x);_e=l(ha,"SPAN",{});var da=s(_e);u(W.$$.fragment,da),da.forEach(t),ha.forEach(t),At=d(pt),ge=l(pt,"SPAN",{});var fa=s(ge);Et=p(fa,"Setup"),fa.forEach(t),pt.forEach(t),Fe=d(e),ne=l(e,"P",{});var ua=s(ne);jt=p(ua,"Get started by installing \u{1F917} Accelerate:"),ua.forEach(t),Ge=d(e),u(B.$$.fragment,e),Me=d(e),w=l(e,"P",{});var fe=s(w);Pt=p(fe,"Then import and create an "),L=l(fe,"A",{href:!0,rel:!0});var ma=s(L);we=l(ma,"CODE",{});var va=s(we);zt=p(va,"Accelerator"),va.forEach(t),ma.forEach(t),Tt=p(fe," object. "),$e=l(fe,"CODE",{});var _a=s($e);St=p(_a,"Accelerator"),_a.forEach(t),xt=p(fe," will automatically detect your type of distributed setup and initialize all the necessary components for training. You don\u2019t need to explicitly place your model on a device."),fe.forEach(t),Ue=d(e),u(Y.$$.fragment,e),Ie=d(e),A=l(e,"H2",{class:!0});var ht=s(A);C=l(ht,"A",{id:!0,class:!0,href:!0});var ga=s(C);be=l(ga,"SPAN",{});var wa=s(be);u(J.$$.fragment,wa),wa.forEach(t),ga.forEach(t),Ct=d(ht),ye=l(ht,"SPAN",{});var $a=s(ye);qt=p($a,"Prepare to accelerate"),$a.forEach(t),ht.forEach(t),We=d(e),q=l(e,"P",{});var dt=s(q);Nt=p(dt,"The next step is to pass all the relevant training objects to the "),R=l(dt,"A",{href:!0,rel:!0});var ba=s(R);ke=l(ba,"CODE",{});var ya=s(ke);Dt=p(ya,"prepare"),ya.forEach(t),ba.forEach(t),Ht=p(dt," method. This includes your training and evaluation DataLoaders, a model and an optimizer:"),dt.forEach(t),Be=d(e),u(K.$$.fragment,e),Le=d(e),E=l(e,"H2",{class:!0});var ft=s(E);N=l(ft,"A",{id:!0,class:!0,href:!0});var ka=s(N);Ae=l(ka,"SPAN",{});var Aa=s(Ae);u(Q.$$.fragment,Aa),Aa.forEach(t),ka.forEach(t),Ot=d(ft),Ee=l(ft,"SPAN",{});var Ea=s(Ee);Ft=p(Ea,"Backward"),Ea.forEach(t),ft.forEach(t),Ye=d(e),$=l(e,"P",{});var ue=s($);Gt=p(ue,"The last addition is to replace the typical "),je=l(ue,"CODE",{});var ja=s(je);Mt=p(ja,"loss.backward()"),ja.forEach(t),Ut=p(ue," in your training loop with \u{1F917} Accelerate\u2019s "),V=l(ue,"A",{href:!0,rel:!0});var Pa=s(V);Pe=l(Pa,"CODE",{});var za=s(Pe);It=p(za,"backward"),za.forEach(t),Pa.forEach(t),Wt=p(ue," method:"),ue.forEach(t),Je=d(e),u(X.$$.fragment,e),Re=d(e),ce=l(e,"P",{});var Ta=s(ce);Bt=p(Ta,"As you can see in the following code, you only need to add four additional lines of code to your training loop to enable distributed training!"),Ta.forEach(t),Ke=d(e),u(Z.$$.fragment,e),Qe=d(e),j=l(e,"H2",{class:!0});var ut=s(j);D=l(ut,"A",{id:!0,class:!0,href:!0});var Sa=s(D);ze=l(Sa,"SPAN",{});var xa=s(ze);u(ee.$$.fragment,xa),xa.forEach(t),Sa.forEach(t),Lt=d(ut),Te=l(ut,"SPAN",{});var Ca=s(Te);Yt=p(Ca,"Train"),Ca.forEach(t),ut.forEach(t),Ve=d(e),pe=l(e,"P",{});var qa=s(pe);Jt=p(qa,"Once you\u2019ve added the relevant lines of code, launch your training in a script or a notebook like Colaboratory."),qa.forEach(t),Xe=d(e),P=l(e,"H3",{class:!0});var mt=s(P);H=l(mt,"A",{id:!0,class:!0,href:!0});var Na=s(H);Se=l(Na,"SPAN",{});var Da=s(Se);u(te.$$.fragment,Da),Da.forEach(t),Na.forEach(t),Rt=d(mt),xe=l(mt,"SPAN",{});var Ha=s(xe);Kt=p(Ha,"Train with a script"),Ha.forEach(t),mt.forEach(t),Ze=d(e),he=l(e,"P",{});var Oa=s(he);Qt=p(Oa,"If you are running your training from a script, run the following command to create and save a configuration file:"),Oa.forEach(t),et=d(e),u(ae.$$.fragment,e),tt=d(e),de=l(e,"P",{});var Fa=s(de);Vt=p(Fa,"Then launch your training with:"),Fa.forEach(t),at=d(e),u(re.$$.fragment,e),rt=d(e),z=l(e,"H3",{class:!0});var vt=s(z);O=l(vt,"A",{id:!0,class:!0,href:!0});var Ga=s(O);Ce=l(Ga,"SPAN",{});var Ma=s(Ce);u(oe.$$.fragment,Ma),Ma.forEach(t),Ga.forEach(t),Xt=d(vt),qe=l(vt,"SPAN",{});var Ua=s(qe);Zt=p(Ua,"Train with a notebook"),Ua.forEach(t),vt.forEach(t),ot=d(e),F=l(e,"P",{});var _t=s(F);ea=p(_t,"\u{1F917} Accelerate can also run in a notebook if you\u2019re planning on using Colaboratory\u2019s TPUs. Wrap all the code responsible for training in a function, and pass it to "),Ne=l(_t,"CODE",{});var Ia=s(Ne);ta=p(Ia,"notebook_launcher"),Ia.forEach(t),aa=p(_t,":"),_t.forEach(t),lt=d(e),u(le.$$.fragment,e),st=d(e),G=l(e,"P",{});var gt=s(G);ra=p(gt,"For more information about \u{1F917} Accelerate and it\u2019s rich features, refer to the "),se=l(gt,"A",{href:!0,rel:!0});var Wa=s(se);oa=p(Wa,"documentation"),Wa.forEach(t),la=p(gt,"."),gt.forEach(t),this.h()},h(){n(b,"name","hf:doc:metadata"),n(b,"content",JSON.stringify(Va)),n(T,"id","distributed-training-with-accelerate"),n(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(T,"href","#distributed-training-with-accelerate"),n(y,"class","relative group"),n(I,"href","https://huggingface.co/docs/accelerate/index.html"),n(I,"rel","nofollow"),n(x,"id","setup"),n(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(x,"href","#setup"),n(k,"class","relative group"),n(L,"href","https://huggingface.co/docs/accelerate/accelerator.html#accelerate.Accelerator"),n(L,"rel","nofollow"),n(C,"id","prepare-to-accelerate"),n(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(C,"href","#prepare-to-accelerate"),n(A,"class","relative group"),n(R,"href","https://huggingface.co/docs/accelerate/accelerator.html#accelerate.Accelerator.prepare"),n(R,"rel","nofollow"),n(N,"id","backward"),n(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(N,"href","#backward"),n(E,"class","relative group"),n(V,"href","https://huggingface.co/docs/accelerate/accelerator.html#accelerate.Accelerator.backward"),n(V,"rel","nofollow"),n(D,"id","train"),n(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(D,"href","#train"),n(j,"class","relative group"),n(H,"id","train-with-a-script"),n(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(H,"href","#train-with-a-script"),n(P,"class","relative group"),n(O,"id","train-with-a-notebook"),n(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(O,"href","#train-with-a-notebook"),n(z,"class","relative group"),n(se,"href","https://huggingface.co/docs/accelerate/index.html"),n(se,"rel","nofollow")},m(e,r){a(document.head,b),i(e,De,r),i(e,y,r),a(y,T),a(T,me),m(U,me,null),a(y,wt),a(y,ve),a(ve,$t),i(e,He,r),i(e,S,r),a(S,bt),a(S,I),a(I,yt),a(S,kt),i(e,Oe,r),i(e,k,r),a(k,x),a(x,_e),m(W,_e,null),a(k,At),a(k,ge),a(ge,Et),i(e,Fe,r),i(e,ne,r),a(ne,jt),i(e,Ge,r),m(B,e,r),i(e,Me,r),i(e,w,r),a(w,Pt),a(w,L),a(L,we),a(we,zt),a(w,Tt),a(w,$e),a($e,St),a(w,xt),i(e,Ue,r),m(Y,e,r),i(e,Ie,r),i(e,A,r),a(A,C),a(C,be),m(J,be,null),a(A,Ct),a(A,ye),a(ye,qt),i(e,We,r),i(e,q,r),a(q,Nt),a(q,R),a(R,ke),a(ke,Dt),a(q,Ht),i(e,Be,r),m(K,e,r),i(e,Le,r),i(e,E,r),a(E,N),a(N,Ae),m(Q,Ae,null),a(E,Ot),a(E,Ee),a(Ee,Ft),i(e,Ye,r),i(e,$,r),a($,Gt),a($,je),a(je,Mt),a($,Ut),a($,V),a(V,Pe),a(Pe,It),a($,Wt),i(e,Je,r),m(X,e,r),i(e,Re,r),i(e,ce,r),a(ce,Bt),i(e,Ke,r),m(Z,e,r),i(e,Qe,r),i(e,j,r),a(j,D),a(D,ze),m(ee,ze,null),a(j,Lt),a(j,Te),a(Te,Yt),i(e,Ve,r),i(e,pe,r),a(pe,Jt),i(e,Xe,r),i(e,P,r),a(P,H),a(H,Se),m(te,Se,null),a(P,Rt),a(P,xe),a(xe,Kt),i(e,Ze,r),i(e,he,r),a(he,Qt),i(e,et,r),m(ae,e,r),i(e,tt,r),i(e,de,r),a(de,Vt),i(e,at,r),m(re,e,r),i(e,rt,r),i(e,z,r),a(z,O),a(O,Ce),m(oe,Ce,null),a(z,Xt),a(z,qe),a(qe,Zt),i(e,ot,r),i(e,F,r),a(F,ea),a(F,Ne),a(Ne,ta),a(F,aa),i(e,lt,r),m(le,e,r),i(e,st,r),i(e,G,r),a(G,ra),a(G,se),a(se,oa),a(G,la),it=!0},p:Ra,i(e){it||(v(U.$$.fragment,e),v(W.$$.fragment,e),v(B.$$.fragment,e),v(Y.$$.fragment,e),v(J.$$.fragment,e),v(K.$$.fragment,e),v(Q.$$.fragment,e),v(X.$$.fragment,e),v(Z.$$.fragment,e),v(ee.$$.fragment,e),v(te.$$.fragment,e),v(ae.$$.fragment,e),v(re.$$.fragment,e),v(oe.$$.fragment,e),v(le.$$.fragment,e),it=!0)},o(e){_(U.$$.fragment,e),_(W.$$.fragment,e),_(B.$$.fragment,e),_(Y.$$.fragment,e),_(J.$$.fragment,e),_(K.$$.fragment,e),_(Q.$$.fragment,e),_(X.$$.fragment,e),_(Z.$$.fragment,e),_(ee.$$.fragment,e),_(te.$$.fragment,e),_(ae.$$.fragment,e),_(re.$$.fragment,e),_(oe.$$.fragment,e),_(le.$$.fragment,e),it=!1},d(e){t(b),e&&t(De),e&&t(y),g(U),e&&t(He),e&&t(S),e&&t(Oe),e&&t(k),g(W),e&&t(Fe),e&&t(ne),e&&t(Ge),g(B,e),e&&t(Me),e&&t(w),e&&t(Ue),g(Y,e),e&&t(Ie),e&&t(A),g(J),e&&t(We),e&&t(q),e&&t(Be),g(K,e),e&&t(Le),e&&t(E),g(Q),e&&t(Ye),e&&t($),e&&t(Je),g(X,e),e&&t(Re),e&&t(ce),e&&t(Ke),g(Z,e),e&&t(Qe),e&&t(j),g(ee),e&&t(Ve),e&&t(pe),e&&t(Xe),e&&t(P),g(te),e&&t(Ze),e&&t(he),e&&t(et),g(ae,e),e&&t(tt),e&&t(de),e&&t(at),g(re,e),e&&t(rt),e&&t(z),g(oe),e&&t(ot),e&&t(F),e&&t(lt),g(le,e),e&&t(st),e&&t(G)}}}const Va={local:"distributed-training-with-accelerate",sections:[{local:"setup",title:"Setup"},{local:"prepare-to-accelerate",title:"Prepare to accelerate"},{local:"backward",title:"Backward"},{local:"train",sections:[{local:"train-with-a-script",title:"Train with a script"},{local:"train-with-a-notebook",title:"Train with a notebook"}],title:"Train"}],title:"Distributed training with \u{1F917} Accelerate"};function Xa(sa){return Ka(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ar extends Ba{constructor(b){super();La(this,b,Xa,Qa,Ya,{})}}export{ar as default,Va as metadata};
