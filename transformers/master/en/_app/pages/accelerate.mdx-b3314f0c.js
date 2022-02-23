import{S as Ma,i as La,s as Ja,e as o,k as h,w as f,t as c,L as Ya,c as l,d as t,m as d,a as s,x as u,h as p,b as n,J as a,g as i,y as m,K as Ka,q as v,o as _,B as g}from"../chunks/vendor-9e2b328e.js";import{I as ie}from"../chunks/IconCopyLink-fd0e58fd.js";import{C as I}from"../chunks/CodeBlock-88e23343.js";import"../chunks/CopyButton-4ae140ab.js";function Qa(wt){let b,ne,w,$,ve,U,$t,_e,bt,He,S,yt,W,kt,At,Oe,A,x,ge,B,Et,we,jt,Fe,ce,Pt,Ge,M,Ie,y,zt,L,$e,Tt,St,be,xt,Ct,Ue,J,We,E,C,ye,Y,qt,ke,Nt,Be,q,Dt,K,Ae,Ht,Ot,Me,Q,Le,j,N,Ee,R,Ft,je,Gt,Je,k,It,Pe,Ut,Wt,V,ze,Bt,Mt,Ye,X,Ke,pe,Lt,Qe,Z,Re,P,D,Te,ee,Jt,Se,Yt,Ve,he,Kt,Xe,z,H,xe,te,Qt,Ce,Rt,Ze,de,Vt,et,ae,tt,fe,Xt,at,re,rt,T,O,qe,oe,Zt,Ne,ea,ot,F,ta,De,aa,ra,lt,le,st,G,oa,se,la,sa,it;return U=new ie({}),B=new ie({}),M=new I({props:{code:"pip install accelerate,",highlighted:"pip install accelerate"}}),J=new I({props:{code:`from accelerate import Accelerator

accelerator = Accelerator(),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> Accelerator

<span class="hljs-meta">&gt;&gt;&gt; </span>accelerator = Accelerator()`}}),Y=new ie({}),Q=new I({props:{code:`train_dataloader, eval_dataloader, model, optimizer = accelerator.prepare(
    train_dataloader, eval_dataloader, model, optimizer
),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataloader, eval_dataloader, model, optimizer = accelerator.prepare(
<span class="hljs-meta">... </span>    train_dataloader, eval_dataloader, model, optimizer
<span class="hljs-meta">... </span>)`}}),R=new ie({}),X=new I({props:{code:`for epoch in range(num_epochs):
    for batch in train_dataloader:
        outputs = model(**batch)
        loss = outputs.loss
        accelerator.backward(loss)

        optimizer.step()
        lr_scheduler.step()
        optimizer.zero_grad()
        progress_bar.update(1),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> epoch <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(num_epochs):
<span class="hljs-meta">... </span>    <span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> train_dataloader:
<span class="hljs-meta">... </span>        outputs = model(**batch)
<span class="hljs-meta">... </span>        loss = outputs.loss
<span class="hljs-meta">... </span>        accelerator.backward(loss)

<span class="hljs-meta">... </span>        optimizer.step()
<span class="hljs-meta">... </span>        lr_scheduler.step()
<span class="hljs-meta">... </span>        optimizer.zero_grad()
<span class="hljs-meta">... </span>        progress_bar.update(<span class="hljs-number">1</span>)`}}),Z=new I({props:{code:`+ from accelerate import Accelerator
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
          progress_bar.update(1),`,highlighted:`<span class="hljs-addition">+ from accelerate import Accelerator</span>
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
          progress_bar.update(1)`}}),ee=new ie({}),te=new ie({}),ae=new I({props:{code:"accelerate config,",highlighted:"accelerate config"}}),re=new I({props:{code:"accelerate launch train.py,",highlighted:"accelerate launch train.py"}}),oe=new ie({}),le=new I({props:{code:`from accelerate import notebook_launcher

notebook_launcher(training_function),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> notebook_launcher

<span class="hljs-meta">&gt;&gt;&gt; </span>notebook_launcher(training_function)`}}),{c(){b=o("meta"),ne=h(),w=o("h1"),$=o("a"),ve=o("span"),f(U.$$.fragment),$t=h(),_e=o("span"),bt=c("Distributed training with \u{1F917} Accelerate"),He=h(),S=o("p"),yt=c("As models get bigger, parallelism has emerged as a strategy for training larger models on limited hardware and accelerating training speed by several orders of magnitude. At Hugging Face, we created the "),W=o("a"),kt=c("\u{1F917} Accelerate"),At=c(" library to help users easily train a \u{1F917} Transformers model on any type of distributed setup, whether it is multiple GPU\u2019s on one machine or multiple GPU\u2019s across several machines. In this tutorial, learn how to customize your native PyTorch training loop to enable training in a distributed environment."),Oe=h(),A=o("h2"),x=o("a"),ge=o("span"),f(B.$$.fragment),Et=h(),we=o("span"),jt=c("Setup"),Fe=h(),ce=o("p"),Pt=c("Get started by installing \u{1F917} Accelerate:"),Ge=h(),f(M.$$.fragment),Ie=h(),y=o("p"),zt=c("Then import and create an "),L=o("a"),$e=o("code"),Tt=c("Accelerator"),St=c(" object. "),be=o("code"),xt=c("Accelerator"),Ct=c(" will automatically detect your type of distributed setup and initialize all the necessary components for training. You don\u2019t need to explicitly place your model on a device."),Ue=h(),f(J.$$.fragment),We=h(),E=o("h2"),C=o("a"),ye=o("span"),f(Y.$$.fragment),qt=h(),ke=o("span"),Nt=c("Prepare to accelerate"),Be=h(),q=o("p"),Dt=c("The next step is to pass all the relevant training objects to the "),K=o("a"),Ae=o("code"),Ht=c("prepare"),Ot=c(" method. This includes your training and evaluation DataLoaders, a model and an optimizer:"),Me=h(),f(Q.$$.fragment),Le=h(),j=o("h2"),N=o("a"),Ee=o("span"),f(R.$$.fragment),Ft=h(),je=o("span"),Gt=c("Backward"),Je=h(),k=o("p"),It=c("The last addition is to replace the typical "),Pe=o("code"),Ut=c("loss.backward()"),Wt=c(" in your training loop with \u{1F917} Accelerate\u2019s "),V=o("a"),ze=o("code"),Bt=c("backward"),Mt=c(" method:"),Ye=h(),f(X.$$.fragment),Ke=h(),pe=o("p"),Lt=c("As you can see in the following code, you only need to add four additional lines of code to your training loop to enable distributed training!"),Qe=h(),f(Z.$$.fragment),Re=h(),P=o("h2"),D=o("a"),Te=o("span"),f(ee.$$.fragment),Jt=h(),Se=o("span"),Yt=c("Train"),Ve=h(),he=o("p"),Kt=c("Once you\u2019ve added the relevant lines of code, launch your training in a script or a notebook like Colaboratory."),Xe=h(),z=o("h3"),H=o("a"),xe=o("span"),f(te.$$.fragment),Qt=h(),Ce=o("span"),Rt=c("Train with a script"),Ze=h(),de=o("p"),Vt=c("If you are running your training from a script, run the following command to create and save a configuration file:"),et=h(),f(ae.$$.fragment),tt=h(),fe=o("p"),Xt=c("Then launch your training with:"),at=h(),f(re.$$.fragment),rt=h(),T=o("h3"),O=o("a"),qe=o("span"),f(oe.$$.fragment),Zt=h(),Ne=o("span"),ea=c("Train with a notebook"),ot=h(),F=o("p"),ta=c("\u{1F917} Accelerate can also run in a notebook if you\u2019re planning on using Colaboratory\u2019s TPUs. Wrap all the code responsible for training in a function, and pass it to "),De=o("code"),aa=c("notebook_launcher"),ra=c(":"),lt=h(),f(le.$$.fragment),st=h(),G=o("p"),oa=c("For more information about \u{1F917} Accelerate and it\u2019s rich features, refer to the "),se=o("a"),la=c("documentation"),sa=c("."),this.h()},l(e){const r=Ya('[data-svelte="svelte-1phssyn"]',document.head);b=l(r,"META",{name:!0,content:!0}),r.forEach(t),ne=d(e),w=l(e,"H1",{class:!0});var nt=s(w);$=l(nt,"A",{id:!0,class:!0,href:!0});var ia=s($);ve=l(ia,"SPAN",{});var na=s(ve);u(U.$$.fragment,na),na.forEach(t),ia.forEach(t),$t=d(nt),_e=l(nt,"SPAN",{});var ca=s(_e);bt=p(ca,"Distributed training with \u{1F917} Accelerate"),ca.forEach(t),nt.forEach(t),He=d(e),S=l(e,"P",{});var ct=s(S);yt=p(ct,"As models get bigger, parallelism has emerged as a strategy for training larger models on limited hardware and accelerating training speed by several orders of magnitude. At Hugging Face, we created the "),W=l(ct,"A",{href:!0,rel:!0});var pa=s(W);kt=p(pa,"\u{1F917} Accelerate"),pa.forEach(t),At=p(ct," library to help users easily train a \u{1F917} Transformers model on any type of distributed setup, whether it is multiple GPU\u2019s on one machine or multiple GPU\u2019s across several machines. In this tutorial, learn how to customize your native PyTorch training loop to enable training in a distributed environment."),ct.forEach(t),Oe=d(e),A=l(e,"H2",{class:!0});var pt=s(A);x=l(pt,"A",{id:!0,class:!0,href:!0});var ha=s(x);ge=l(ha,"SPAN",{});var da=s(ge);u(B.$$.fragment,da),da.forEach(t),ha.forEach(t),Et=d(pt),we=l(pt,"SPAN",{});var fa=s(we);jt=p(fa,"Setup"),fa.forEach(t),pt.forEach(t),Fe=d(e),ce=l(e,"P",{});var ua=s(ce);Pt=p(ua,"Get started by installing \u{1F917} Accelerate:"),ua.forEach(t),Ge=d(e),u(M.$$.fragment,e),Ie=d(e),y=l(e,"P",{});var ue=s(y);zt=p(ue,"Then import and create an "),L=l(ue,"A",{href:!0,rel:!0});var ma=s(L);$e=l(ma,"CODE",{});var va=s($e);Tt=p(va,"Accelerator"),va.forEach(t),ma.forEach(t),St=p(ue," object. "),be=l(ue,"CODE",{});var _a=s(be);xt=p(_a,"Accelerator"),_a.forEach(t),Ct=p(ue," will automatically detect your type of distributed setup and initialize all the necessary components for training. You don\u2019t need to explicitly place your model on a device."),ue.forEach(t),Ue=d(e),u(J.$$.fragment,e),We=d(e),E=l(e,"H2",{class:!0});var ht=s(E);C=l(ht,"A",{id:!0,class:!0,href:!0});var ga=s(C);ye=l(ga,"SPAN",{});var wa=s(ye);u(Y.$$.fragment,wa),wa.forEach(t),ga.forEach(t),qt=d(ht),ke=l(ht,"SPAN",{});var $a=s(ke);Nt=p($a,"Prepare to accelerate"),$a.forEach(t),ht.forEach(t),Be=d(e),q=l(e,"P",{});var dt=s(q);Dt=p(dt,"The next step is to pass all the relevant training objects to the "),K=l(dt,"A",{href:!0,rel:!0});var ba=s(K);Ae=l(ba,"CODE",{});var ya=s(Ae);Ht=p(ya,"prepare"),ya.forEach(t),ba.forEach(t),Ot=p(dt," method. This includes your training and evaluation DataLoaders, a model and an optimizer:"),dt.forEach(t),Me=d(e),u(Q.$$.fragment,e),Le=d(e),j=l(e,"H2",{class:!0});var ft=s(j);N=l(ft,"A",{id:!0,class:!0,href:!0});var ka=s(N);Ee=l(ka,"SPAN",{});var Aa=s(Ee);u(R.$$.fragment,Aa),Aa.forEach(t),ka.forEach(t),Ft=d(ft),je=l(ft,"SPAN",{});var Ea=s(je);Gt=p(Ea,"Backward"),Ea.forEach(t),ft.forEach(t),Je=d(e),k=l(e,"P",{});var me=s(k);It=p(me,"The last addition is to replace the typical "),Pe=l(me,"CODE",{});var ja=s(Pe);Ut=p(ja,"loss.backward()"),ja.forEach(t),Wt=p(me," in your training loop with \u{1F917} Accelerate\u2019s "),V=l(me,"A",{href:!0,rel:!0});var Pa=s(V);ze=l(Pa,"CODE",{});var za=s(ze);Bt=p(za,"backward"),za.forEach(t),Pa.forEach(t),Mt=p(me," method:"),me.forEach(t),Ye=d(e),u(X.$$.fragment,e),Ke=d(e),pe=l(e,"P",{});var Ta=s(pe);Lt=p(Ta,"As you can see in the following code, you only need to add four additional lines of code to your training loop to enable distributed training!"),Ta.forEach(t),Qe=d(e),u(Z.$$.fragment,e),Re=d(e),P=l(e,"H2",{class:!0});var ut=s(P);D=l(ut,"A",{id:!0,class:!0,href:!0});var Sa=s(D);Te=l(Sa,"SPAN",{});var xa=s(Te);u(ee.$$.fragment,xa),xa.forEach(t),Sa.forEach(t),Jt=d(ut),Se=l(ut,"SPAN",{});var Ca=s(Se);Yt=p(Ca,"Train"),Ca.forEach(t),ut.forEach(t),Ve=d(e),he=l(e,"P",{});var qa=s(he);Kt=p(qa,"Once you\u2019ve added the relevant lines of code, launch your training in a script or a notebook like Colaboratory."),qa.forEach(t),Xe=d(e),z=l(e,"H3",{class:!0});var mt=s(z);H=l(mt,"A",{id:!0,class:!0,href:!0});var Na=s(H);xe=l(Na,"SPAN",{});var Da=s(xe);u(te.$$.fragment,Da),Da.forEach(t),Na.forEach(t),Qt=d(mt),Ce=l(mt,"SPAN",{});var Ha=s(Ce);Rt=p(Ha,"Train with a script"),Ha.forEach(t),mt.forEach(t),Ze=d(e),de=l(e,"P",{});var Oa=s(de);Vt=p(Oa,"If you are running your training from a script, run the following command to create and save a configuration file:"),Oa.forEach(t),et=d(e),u(ae.$$.fragment,e),tt=d(e),fe=l(e,"P",{});var Fa=s(fe);Xt=p(Fa,"Then launch your training with:"),Fa.forEach(t),at=d(e),u(re.$$.fragment,e),rt=d(e),T=l(e,"H3",{class:!0});var vt=s(T);O=l(vt,"A",{id:!0,class:!0,href:!0});var Ga=s(O);qe=l(Ga,"SPAN",{});var Ia=s(qe);u(oe.$$.fragment,Ia),Ia.forEach(t),Ga.forEach(t),Zt=d(vt),Ne=l(vt,"SPAN",{});var Ua=s(Ne);ea=p(Ua,"Train with a notebook"),Ua.forEach(t),vt.forEach(t),ot=d(e),F=l(e,"P",{});var _t=s(F);ta=p(_t,"\u{1F917} Accelerate can also run in a notebook if you\u2019re planning on using Colaboratory\u2019s TPUs. Wrap all the code responsible for training in a function, and pass it to "),De=l(_t,"CODE",{});var Wa=s(De);aa=p(Wa,"notebook_launcher"),Wa.forEach(t),ra=p(_t,":"),_t.forEach(t),lt=d(e),u(le.$$.fragment,e),st=d(e),G=l(e,"P",{});var gt=s(G);oa=p(gt,"For more information about \u{1F917} Accelerate and it\u2019s rich features, refer to the "),se=l(gt,"A",{href:!0,rel:!0});var Ba=s(se);la=p(Ba,"documentation"),Ba.forEach(t),sa=p(gt,"."),gt.forEach(t),this.h()},h(){n(b,"name","hf:doc:metadata"),n(b,"content",JSON.stringify(Ra)),n($,"id","distributed-training-with-accelerate"),n($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n($,"href","#distributed-training-with-accelerate"),n(w,"class","relative group"),n(W,"href","https://huggingface.co/docs/accelerate/index.html"),n(W,"rel","nofollow"),n(x,"id","setup"),n(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(x,"href","#setup"),n(A,"class","relative group"),n(L,"href","https://huggingface.co/docs/accelerate/accelerator.html#accelerate.Accelerator"),n(L,"rel","nofollow"),n(C,"id","prepare-to-accelerate"),n(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(C,"href","#prepare-to-accelerate"),n(E,"class","relative group"),n(K,"href","https://huggingface.co/docs/accelerate/accelerator.html#accelerate.Accelerator.prepare"),n(K,"rel","nofollow"),n(N,"id","backward"),n(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(N,"href","#backward"),n(j,"class","relative group"),n(V,"href","https://huggingface.co/docs/accelerate/accelerator.html#accelerate.Accelerator.backward"),n(V,"rel","nofollow"),n(D,"id","train"),n(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(D,"href","#train"),n(P,"class","relative group"),n(H,"id","train-with-a-script"),n(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(H,"href","#train-with-a-script"),n(z,"class","relative group"),n(O,"id","train-with-a-notebook"),n(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(O,"href","#train-with-a-notebook"),n(T,"class","relative group"),n(se,"href","https://huggingface.co/docs/accelerate/index.html"),n(se,"rel","nofollow")},m(e,r){a(document.head,b),i(e,ne,r),i(e,w,r),a(w,$),a($,ve),m(U,ve,null),a(w,$t),a(w,_e),a(_e,bt),i(e,He,r),i(e,S,r),a(S,yt),a(S,W),a(W,kt),a(S,At),i(e,Oe,r),i(e,A,r),a(A,x),a(x,ge),m(B,ge,null),a(A,Et),a(A,we),a(we,jt),i(e,Fe,r),i(e,ce,r),a(ce,Pt),i(e,Ge,r),m(M,e,r),i(e,Ie,r),i(e,y,r),a(y,zt),a(y,L),a(L,$e),a($e,Tt),a(y,St),a(y,be),a(be,xt),a(y,Ct),i(e,Ue,r),m(J,e,r),i(e,We,r),i(e,E,r),a(E,C),a(C,ye),m(Y,ye,null),a(E,qt),a(E,ke),a(ke,Nt),i(e,Be,r),i(e,q,r),a(q,Dt),a(q,K),a(K,Ae),a(Ae,Ht),a(q,Ot),i(e,Me,r),m(Q,e,r),i(e,Le,r),i(e,j,r),a(j,N),a(N,Ee),m(R,Ee,null),a(j,Ft),a(j,je),a(je,Gt),i(e,Je,r),i(e,k,r),a(k,It),a(k,Pe),a(Pe,Ut),a(k,Wt),a(k,V),a(V,ze),a(ze,Bt),a(k,Mt),i(e,Ye,r),m(X,e,r),i(e,Ke,r),i(e,pe,r),a(pe,Lt),i(e,Qe,r),m(Z,e,r),i(e,Re,r),i(e,P,r),a(P,D),a(D,Te),m(ee,Te,null),a(P,Jt),a(P,Se),a(Se,Yt),i(e,Ve,r),i(e,he,r),a(he,Kt),i(e,Xe,r),i(e,z,r),a(z,H),a(H,xe),m(te,xe,null),a(z,Qt),a(z,Ce),a(Ce,Rt),i(e,Ze,r),i(e,de,r),a(de,Vt),i(e,et,r),m(ae,e,r),i(e,tt,r),i(e,fe,r),a(fe,Xt),i(e,at,r),m(re,e,r),i(e,rt,r),i(e,T,r),a(T,O),a(O,qe),m(oe,qe,null),a(T,Zt),a(T,Ne),a(Ne,ea),i(e,ot,r),i(e,F,r),a(F,ta),a(F,De),a(De,aa),a(F,ra),i(e,lt,r),m(le,e,r),i(e,st,r),i(e,G,r),a(G,oa),a(G,se),a(se,la),a(G,sa),it=!0},p:Ka,i(e){it||(v(U.$$.fragment,e),v(B.$$.fragment,e),v(M.$$.fragment,e),v(J.$$.fragment,e),v(Y.$$.fragment,e),v(Q.$$.fragment,e),v(R.$$.fragment,e),v(X.$$.fragment,e),v(Z.$$.fragment,e),v(ee.$$.fragment,e),v(te.$$.fragment,e),v(ae.$$.fragment,e),v(re.$$.fragment,e),v(oe.$$.fragment,e),v(le.$$.fragment,e),it=!0)},o(e){_(U.$$.fragment,e),_(B.$$.fragment,e),_(M.$$.fragment,e),_(J.$$.fragment,e),_(Y.$$.fragment,e),_(Q.$$.fragment,e),_(R.$$.fragment,e),_(X.$$.fragment,e),_(Z.$$.fragment,e),_(ee.$$.fragment,e),_(te.$$.fragment,e),_(ae.$$.fragment,e),_(re.$$.fragment,e),_(oe.$$.fragment,e),_(le.$$.fragment,e),it=!1},d(e){t(b),e&&t(ne),e&&t(w),g(U),e&&t(He),e&&t(S),e&&t(Oe),e&&t(A),g(B),e&&t(Fe),e&&t(ce),e&&t(Ge),g(M,e),e&&t(Ie),e&&t(y),e&&t(Ue),g(J,e),e&&t(We),e&&t(E),g(Y),e&&t(Be),e&&t(q),e&&t(Me),g(Q,e),e&&t(Le),e&&t(j),g(R),e&&t(Je),e&&t(k),e&&t(Ye),g(X,e),e&&t(Ke),e&&t(pe),e&&t(Qe),g(Z,e),e&&t(Re),e&&t(P),g(ee),e&&t(Ve),e&&t(he),e&&t(Xe),e&&t(z),g(te),e&&t(Ze),e&&t(de),e&&t(et),g(ae,e),e&&t(tt),e&&t(fe),e&&t(at),g(re,e),e&&t(rt),e&&t(T),g(oe),e&&t(ot),e&&t(F),e&&t(lt),g(le,e),e&&t(st),e&&t(G)}}}const Ra={local:"distributed-training-with-accelerate",sections:[{local:"setup",title:"Setup"},{local:"prepare-to-accelerate",title:"Prepare to accelerate"},{local:"backward",title:"Backward"},{local:"train",sections:[{local:"train-with-a-script",title:"Train with a script"},{local:"train-with-a-notebook",title:"Train with a notebook"}],title:"Train"}],title:"Distributed training with \u{1F917} Accelerate"};function Va(wt,b,ne){let{fw:w}=b;return wt.$$set=$=>{"fw"in $&&ne(0,w=$.fw)},[w]}class ar extends Ma{constructor(b){super();La(this,b,Va,Qa,Ja,{fw:0})}}export{ar as default,Ra as metadata};
