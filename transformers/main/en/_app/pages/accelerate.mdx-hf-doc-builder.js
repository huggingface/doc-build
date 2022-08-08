import{S as Mt,i as Ut,s as Dt,e as o,k as h,w as f,t as c,M as It,c as l,d as a,m as d,a as s,x as u,h as p,b as i,G as t,g as n,y as m,L as Wt,q as _,o as g,B as v,v as Bt}from"../chunks/vendor-hf-doc-builder.js";import{I as ce}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as D}from"../chunks/CodeBlock-hf-doc-builder.js";function Lt(rt){let b,qe,y,T,ge,I,_a,ve,ga,Ne,S,va,W,wa,$a,Ce,k,x,we,B,ba,$e,ya,He,pe,ka,Fe,L,Ge,w,Aa,O,Ea,ja,Y,Pa,za,Me,J,Ue,A,q,be,R,Ta,ye,Sa,De,N,xa,K,qa,Na,Ie,Q,We,E,C,ke,V,Ca,Ae,Ha,Be,$,Fa,Ee,Ga,Ma,X,Ua,Da,Le,Z,Oe,he,Ia,Ye,ee,Je,j,H,je,ae,Wa,Pe,Ba,Re,de,La,Ke,P,F,ze,te,Oa,Te,Ya,Qe,fe,Ja,Ve,re,Xe,ue,Ra,Ze,oe,ea,z,G,Se,le,Ka,xe,Qa,aa,M,Va,se,Xa,Za,ta,ie,ra,U,et,ne,at,tt,oa;return I=new ce({}),B=new ce({}),L=new D({props:{code:"pip install accelerate",highlighted:"pip install accelerate"}}),J=new D({props:{code:`from accelerate import Accelerator

accelerator = Accelerator()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> Accelerator

<span class="hljs-meta">&gt;&gt;&gt; </span>accelerator = Accelerator()`}}),R=new ce({}),Q=new D({props:{code:`train_dataloader, eval_dataloader, model, optimizer = accelerator.prepare(
    train_dataloader, eval_dataloader, model, optimizer
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataloader, eval_dataloader, model, optimizer = accelerator.prepare(
<span class="hljs-meta">... </span>    train_dataloader, eval_dataloader, model, optimizer
<span class="hljs-meta">... </span>)`}}),V=new ce({}),Z=new D({props:{code:`for epoch in range(num_epochs):
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
<span class="hljs-meta">... </span>        progress_bar.update(<span class="hljs-number">1</span>)`}}),ee=new D({props:{code:`+ from accelerate import Accelerator
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
          progress_bar.update(1)`}}),ae=new ce({}),te=new ce({}),re=new D({props:{code:"accelerate config",highlighted:"accelerate config"}}),oe=new D({props:{code:"accelerate launch train.py",highlighted:"accelerate launch train.py"}}),le=new ce({}),ie=new D({props:{code:`from accelerate import notebook_launcher

notebook_launcher(training_function)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> notebook_launcher

<span class="hljs-meta">&gt;&gt;&gt; </span>notebook_launcher(training_function)`}}),{c(){b=o("meta"),qe=h(),y=o("h1"),T=o("a"),ge=o("span"),f(I.$$.fragment),_a=h(),ve=o("span"),ga=c("Distributed training with \u{1F917} Accelerate"),Ne=h(),S=o("p"),va=c("As models get bigger, parallelism has emerged as a strategy for training larger models on limited hardware and accelerating training speed by several orders of magnitude. At Hugging Face, we created the "),W=o("a"),wa=c("\u{1F917} Accelerate"),$a=c(" library to help users easily train a \u{1F917} Transformers model on any type of distributed setup, whether it is multiple GPU\u2019s on one machine or multiple GPU\u2019s across several machines. In this tutorial, learn how to customize your native PyTorch training loop to enable training in a distributed environment."),Ce=h(),k=o("h2"),x=o("a"),we=o("span"),f(B.$$.fragment),ba=h(),$e=o("span"),ya=c("Setup"),He=h(),pe=o("p"),ka=c("Get started by installing \u{1F917} Accelerate:"),Fe=h(),f(L.$$.fragment),Ge=h(),w=o("p"),Aa=c("Then import and create an "),O=o("a"),Ea=c("Accelerator"),ja=c(" object. The "),Y=o("a"),Pa=c("Accelerator"),za=c(" will automatically detect your type of distributed setup and initialize all the necessary components for training. You don\u2019t need to explicitly place your model on a device."),Me=h(),f(J.$$.fragment),Ue=h(),A=o("h2"),q=o("a"),be=o("span"),f(R.$$.fragment),Ta=h(),ye=o("span"),Sa=c("Prepare to accelerate"),De=h(),N=o("p"),xa=c("The next step is to pass all the relevant training objects to the "),K=o("a"),qa=c("prepare"),Na=c(" method. This includes your training and evaluation DataLoaders, a model and an optimizer:"),Ie=h(),f(Q.$$.fragment),We=h(),E=o("h2"),C=o("a"),ke=o("span"),f(V.$$.fragment),Ca=h(),Ae=o("span"),Ha=c("Backward"),Be=h(),$=o("p"),Fa=c("The last addition is to replace the typical "),Ee=o("code"),Ga=c("loss.backward()"),Ma=c(" in your training loop with \u{1F917} Accelerate\u2019s "),X=o("a"),Ua=c("backward"),Da=c("method:"),Le=h(),f(Z.$$.fragment),Oe=h(),he=o("p"),Ia=c("As you can see in the following code, you only need to add four additional lines of code to your training loop to enable distributed training!"),Ye=h(),f(ee.$$.fragment),Je=h(),j=o("h2"),H=o("a"),je=o("span"),f(ae.$$.fragment),Wa=h(),Pe=o("span"),Ba=c("Train"),Re=h(),de=o("p"),La=c("Once you\u2019ve added the relevant lines of code, launch your training in a script or a notebook like Colaboratory."),Ke=h(),P=o("h3"),F=o("a"),ze=o("span"),f(te.$$.fragment),Oa=h(),Te=o("span"),Ya=c("Train with a script"),Qe=h(),fe=o("p"),Ja=c("If you are running your training from a script, run the following command to create and save a configuration file:"),Ve=h(),f(re.$$.fragment),Xe=h(),ue=o("p"),Ra=c("Then launch your training with:"),Ze=h(),f(oe.$$.fragment),ea=h(),z=o("h3"),G=o("a"),Se=o("span"),f(le.$$.fragment),Ka=h(),xe=o("span"),Qa=c("Train with a notebook"),aa=h(),M=o("p"),Va=c("\u{1F917} Accelerate can also run in a notebook if you\u2019re planning on using Colaboratory\u2019s TPUs. Wrap all the code responsible for training in a function, and pass it to "),se=o("a"),Xa=c("notebook_launcher"),Za=c(":"),ta=h(),f(ie.$$.fragment),ra=h(),U=o("p"),et=c("For more information about \u{1F917} Accelerate and it\u2019s rich features, refer to the "),ne=o("a"),at=c("documentation"),tt=c("."),this.h()},l(e){const r=It('[data-svelte="svelte-1phssyn"]',document.head);b=l(r,"META",{name:!0,content:!0}),r.forEach(a),qe=d(e),y=l(e,"H1",{class:!0});var la=s(y);T=l(la,"A",{id:!0,class:!0,href:!0});var ot=s(T);ge=l(ot,"SPAN",{});var lt=s(ge);u(I.$$.fragment,lt),lt.forEach(a),ot.forEach(a),_a=d(la),ve=l(la,"SPAN",{});var st=s(ve);ga=p(st,"Distributed training with \u{1F917} Accelerate"),st.forEach(a),la.forEach(a),Ne=d(e),S=l(e,"P",{});var sa=s(S);va=p(sa,"As models get bigger, parallelism has emerged as a strategy for training larger models on limited hardware and accelerating training speed by several orders of magnitude. At Hugging Face, we created the "),W=l(sa,"A",{href:!0,rel:!0});var it=s(W);wa=p(it,"\u{1F917} Accelerate"),it.forEach(a),$a=p(sa," library to help users easily train a \u{1F917} Transformers model on any type of distributed setup, whether it is multiple GPU\u2019s on one machine or multiple GPU\u2019s across several machines. In this tutorial, learn how to customize your native PyTorch training loop to enable training in a distributed environment."),sa.forEach(a),Ce=d(e),k=l(e,"H2",{class:!0});var ia=s(k);x=l(ia,"A",{id:!0,class:!0,href:!0});var nt=s(x);we=l(nt,"SPAN",{});var ct=s(we);u(B.$$.fragment,ct),ct.forEach(a),nt.forEach(a),ba=d(ia),$e=l(ia,"SPAN",{});var pt=s($e);ya=p(pt,"Setup"),pt.forEach(a),ia.forEach(a),He=d(e),pe=l(e,"P",{});var ht=s(pe);ka=p(ht,"Get started by installing \u{1F917} Accelerate:"),ht.forEach(a),Fe=d(e),u(L.$$.fragment,e),Ge=d(e),w=l(e,"P",{});var me=s(w);Aa=p(me,"Then import and create an "),O=l(me,"A",{href:!0,rel:!0});var dt=s(O);Ea=p(dt,"Accelerator"),dt.forEach(a),ja=p(me," object. The "),Y=l(me,"A",{href:!0,rel:!0});var ft=s(Y);Pa=p(ft,"Accelerator"),ft.forEach(a),za=p(me," will automatically detect your type of distributed setup and initialize all the necessary components for training. You don\u2019t need to explicitly place your model on a device."),me.forEach(a),Me=d(e),u(J.$$.fragment,e),Ue=d(e),A=l(e,"H2",{class:!0});var na=s(A);q=l(na,"A",{id:!0,class:!0,href:!0});var ut=s(q);be=l(ut,"SPAN",{});var mt=s(be);u(R.$$.fragment,mt),mt.forEach(a),ut.forEach(a),Ta=d(na),ye=l(na,"SPAN",{});var _t=s(ye);Sa=p(_t,"Prepare to accelerate"),_t.forEach(a),na.forEach(a),De=d(e),N=l(e,"P",{});var ca=s(N);xa=p(ca,"The next step is to pass all the relevant training objects to the "),K=l(ca,"A",{href:!0,rel:!0});var gt=s(K);qa=p(gt,"prepare"),gt.forEach(a),Na=p(ca," method. This includes your training and evaluation DataLoaders, a model and an optimizer:"),ca.forEach(a),Ie=d(e),u(Q.$$.fragment,e),We=d(e),E=l(e,"H2",{class:!0});var pa=s(E);C=l(pa,"A",{id:!0,class:!0,href:!0});var vt=s(C);ke=l(vt,"SPAN",{});var wt=s(ke);u(V.$$.fragment,wt),wt.forEach(a),vt.forEach(a),Ca=d(pa),Ae=l(pa,"SPAN",{});var $t=s(Ae);Ha=p($t,"Backward"),$t.forEach(a),pa.forEach(a),Be=d(e),$=l(e,"P",{});var _e=s($);Fa=p(_e,"The last addition is to replace the typical "),Ee=l(_e,"CODE",{});var bt=s(Ee);Ga=p(bt,"loss.backward()"),bt.forEach(a),Ma=p(_e," in your training loop with \u{1F917} Accelerate\u2019s "),X=l(_e,"A",{href:!0,rel:!0});var yt=s(X);Ua=p(yt,"backward"),yt.forEach(a),Da=p(_e,"method:"),_e.forEach(a),Le=d(e),u(Z.$$.fragment,e),Oe=d(e),he=l(e,"P",{});var kt=s(he);Ia=p(kt,"As you can see in the following code, you only need to add four additional lines of code to your training loop to enable distributed training!"),kt.forEach(a),Ye=d(e),u(ee.$$.fragment,e),Je=d(e),j=l(e,"H2",{class:!0});var ha=s(j);H=l(ha,"A",{id:!0,class:!0,href:!0});var At=s(H);je=l(At,"SPAN",{});var Et=s(je);u(ae.$$.fragment,Et),Et.forEach(a),At.forEach(a),Wa=d(ha),Pe=l(ha,"SPAN",{});var jt=s(Pe);Ba=p(jt,"Train"),jt.forEach(a),ha.forEach(a),Re=d(e),de=l(e,"P",{});var Pt=s(de);La=p(Pt,"Once you\u2019ve added the relevant lines of code, launch your training in a script or a notebook like Colaboratory."),Pt.forEach(a),Ke=d(e),P=l(e,"H3",{class:!0});var da=s(P);F=l(da,"A",{id:!0,class:!0,href:!0});var zt=s(F);ze=l(zt,"SPAN",{});var Tt=s(ze);u(te.$$.fragment,Tt),Tt.forEach(a),zt.forEach(a),Oa=d(da),Te=l(da,"SPAN",{});var St=s(Te);Ya=p(St,"Train with a script"),St.forEach(a),da.forEach(a),Qe=d(e),fe=l(e,"P",{});var xt=s(fe);Ja=p(xt,"If you are running your training from a script, run the following command to create and save a configuration file:"),xt.forEach(a),Ve=d(e),u(re.$$.fragment,e),Xe=d(e),ue=l(e,"P",{});var qt=s(ue);Ra=p(qt,"Then launch your training with:"),qt.forEach(a),Ze=d(e),u(oe.$$.fragment,e),ea=d(e),z=l(e,"H3",{class:!0});var fa=s(z);G=l(fa,"A",{id:!0,class:!0,href:!0});var Nt=s(G);Se=l(Nt,"SPAN",{});var Ct=s(Se);u(le.$$.fragment,Ct),Ct.forEach(a),Nt.forEach(a),Ka=d(fa),xe=l(fa,"SPAN",{});var Ht=s(xe);Qa=p(Ht,"Train with a notebook"),Ht.forEach(a),fa.forEach(a),aa=d(e),M=l(e,"P",{});var ua=s(M);Va=p(ua,"\u{1F917} Accelerate can also run in a notebook if you\u2019re planning on using Colaboratory\u2019s TPUs. Wrap all the code responsible for training in a function, and pass it to "),se=l(ua,"A",{href:!0,rel:!0});var Ft=s(se);Xa=p(Ft,"notebook_launcher"),Ft.forEach(a),Za=p(ua,":"),ua.forEach(a),ta=d(e),u(ie.$$.fragment,e),ra=d(e),U=l(e,"P",{});var ma=s(U);et=p(ma,"For more information about \u{1F917} Accelerate and it\u2019s rich features, refer to the "),ne=l(ma,"A",{href:!0,rel:!0});var Gt=s(ne);at=p(Gt,"documentation"),Gt.forEach(a),tt=p(ma,"."),ma.forEach(a),this.h()},h(){i(b,"name","hf:doc:metadata"),i(b,"content",JSON.stringify(Ot)),i(T,"id","distributed-training-with-accelerate"),i(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(T,"href","#distributed-training-with-accelerate"),i(y,"class","relative group"),i(W,"href","https://huggingface.co/docs/accelerate"),i(W,"rel","nofollow"),i(x,"id","setup"),i(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(x,"href","#setup"),i(k,"class","relative group"),i(O,"href","https://huggingface.co/docs/accelerate/main/en/package_reference/accelerator#accelerate.Accelerator"),i(O,"rel","nofollow"),i(Y,"href","https://huggingface.co/docs/accelerate/main/en/package_reference/accelerator#accelerate.Accelerator"),i(Y,"rel","nofollow"),i(q,"id","prepare-to-accelerate"),i(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(q,"href","#prepare-to-accelerate"),i(A,"class","relative group"),i(K,"href","https://huggingface.co/docs/accelerate/main/en/package_reference/accelerator#accelerate.Accelerator.prepare"),i(K,"rel","nofollow"),i(C,"id","backward"),i(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(C,"href","#backward"),i(E,"class","relative group"),i(X,"href","https://huggingface.co/docs/accelerate/main/en/package_reference/accelerator#accelerate.Accelerator.backward"),i(X,"rel","nofollow"),i(H,"id","train"),i(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(H,"href","#train"),i(j,"class","relative group"),i(F,"id","train-with-a-script"),i(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(F,"href","#train-with-a-script"),i(P,"class","relative group"),i(G,"id","train-with-a-notebook"),i(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(G,"href","#train-with-a-notebook"),i(z,"class","relative group"),i(se,"href","https://huggingface.co/docs/accelerate/main/en/package_reference/launchers#accelerate.notebook_launcher"),i(se,"rel","nofollow"),i(ne,"href","https://huggingface.co/docs/accelerate"),i(ne,"rel","nofollow")},m(e,r){t(document.head,b),n(e,qe,r),n(e,y,r),t(y,T),t(T,ge),m(I,ge,null),t(y,_a),t(y,ve),t(ve,ga),n(e,Ne,r),n(e,S,r),t(S,va),t(S,W),t(W,wa),t(S,$a),n(e,Ce,r),n(e,k,r),t(k,x),t(x,we),m(B,we,null),t(k,ba),t(k,$e),t($e,ya),n(e,He,r),n(e,pe,r),t(pe,ka),n(e,Fe,r),m(L,e,r),n(e,Ge,r),n(e,w,r),t(w,Aa),t(w,O),t(O,Ea),t(w,ja),t(w,Y),t(Y,Pa),t(w,za),n(e,Me,r),m(J,e,r),n(e,Ue,r),n(e,A,r),t(A,q),t(q,be),m(R,be,null),t(A,Ta),t(A,ye),t(ye,Sa),n(e,De,r),n(e,N,r),t(N,xa),t(N,K),t(K,qa),t(N,Na),n(e,Ie,r),m(Q,e,r),n(e,We,r),n(e,E,r),t(E,C),t(C,ke),m(V,ke,null),t(E,Ca),t(E,Ae),t(Ae,Ha),n(e,Be,r),n(e,$,r),t($,Fa),t($,Ee),t(Ee,Ga),t($,Ma),t($,X),t(X,Ua),t($,Da),n(e,Le,r),m(Z,e,r),n(e,Oe,r),n(e,he,r),t(he,Ia),n(e,Ye,r),m(ee,e,r),n(e,Je,r),n(e,j,r),t(j,H),t(H,je),m(ae,je,null),t(j,Wa),t(j,Pe),t(Pe,Ba),n(e,Re,r),n(e,de,r),t(de,La),n(e,Ke,r),n(e,P,r),t(P,F),t(F,ze),m(te,ze,null),t(P,Oa),t(P,Te),t(Te,Ya),n(e,Qe,r),n(e,fe,r),t(fe,Ja),n(e,Ve,r),m(re,e,r),n(e,Xe,r),n(e,ue,r),t(ue,Ra),n(e,Ze,r),m(oe,e,r),n(e,ea,r),n(e,z,r),t(z,G),t(G,Se),m(le,Se,null),t(z,Ka),t(z,xe),t(xe,Qa),n(e,aa,r),n(e,M,r),t(M,Va),t(M,se),t(se,Xa),t(M,Za),n(e,ta,r),m(ie,e,r),n(e,ra,r),n(e,U,r),t(U,et),t(U,ne),t(ne,at),t(U,tt),oa=!0},p:Wt,i(e){oa||(_(I.$$.fragment,e),_(B.$$.fragment,e),_(L.$$.fragment,e),_(J.$$.fragment,e),_(R.$$.fragment,e),_(Q.$$.fragment,e),_(V.$$.fragment,e),_(Z.$$.fragment,e),_(ee.$$.fragment,e),_(ae.$$.fragment,e),_(te.$$.fragment,e),_(re.$$.fragment,e),_(oe.$$.fragment,e),_(le.$$.fragment,e),_(ie.$$.fragment,e),oa=!0)},o(e){g(I.$$.fragment,e),g(B.$$.fragment,e),g(L.$$.fragment,e),g(J.$$.fragment,e),g(R.$$.fragment,e),g(Q.$$.fragment,e),g(V.$$.fragment,e),g(Z.$$.fragment,e),g(ee.$$.fragment,e),g(ae.$$.fragment,e),g(te.$$.fragment,e),g(re.$$.fragment,e),g(oe.$$.fragment,e),g(le.$$.fragment,e),g(ie.$$.fragment,e),oa=!1},d(e){a(b),e&&a(qe),e&&a(y),v(I),e&&a(Ne),e&&a(S),e&&a(Ce),e&&a(k),v(B),e&&a(He),e&&a(pe),e&&a(Fe),v(L,e),e&&a(Ge),e&&a(w),e&&a(Me),v(J,e),e&&a(Ue),e&&a(A),v(R),e&&a(De),e&&a(N),e&&a(Ie),v(Q,e),e&&a(We),e&&a(E),v(V),e&&a(Be),e&&a($),e&&a(Le),v(Z,e),e&&a(Oe),e&&a(he),e&&a(Ye),v(ee,e),e&&a(Je),e&&a(j),v(ae),e&&a(Re),e&&a(de),e&&a(Ke),e&&a(P),v(te),e&&a(Qe),e&&a(fe),e&&a(Ve),v(re,e),e&&a(Xe),e&&a(ue),e&&a(Ze),v(oe,e),e&&a(ea),e&&a(z),v(le),e&&a(aa),e&&a(M),e&&a(ta),v(ie,e),e&&a(ra),e&&a(U)}}}const Ot={local:"distributed-training-with-accelerate",sections:[{local:"setup",title:"Setup"},{local:"prepare-to-accelerate",title:"Prepare to accelerate"},{local:"backward",title:"Backward"},{local:"train",sections:[{local:"train-with-a-script",title:"Train with a script"},{local:"train-with-a-notebook",title:"Train with a notebook"}],title:"Train"}],title:"Distributed training with \u{1F917} Accelerate"};function Yt(rt){return Bt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Qt extends Mt{constructor(b){super();Ut(this,b,Yt,Lt,Dt,{})}}export{Qt as default,Ot as metadata};
