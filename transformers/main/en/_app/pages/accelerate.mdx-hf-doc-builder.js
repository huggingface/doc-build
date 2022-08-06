import{S as Bt,i as Lt,s as Yt,e as o,k as h,w as f,t as c,M as Jt,c as l,d as a,m as d,a as s,x as u,h as p,b as n,G as t,g as i,y as m,L as Rt,q as _,o as v,B as g,v as Kt}from"../chunks/vendor-hf-doc-builder.js";import{I as ie}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as M}from"../chunks/CodeBlock-hf-doc-builder.js";function Qt(st){let b,De,y,T,me,U,wa,_e,$a,He,S,ba,I,ya,ka,Oe,k,C,ve,W,Aa,ge,Ea,Fe,ne,ja,Ge,B,Me,w,Pa,L,we,za,Ta,$e,Sa,Ca,Ue,Y,Ie,A,x,be,J,xa,ye,qa,We,q,Na,R,ke,Da,Ha,Be,K,Le,E,N,Ae,Q,Oa,Ee,Fa,Ye,$,Ga,je,Ma,Ua,V,Pe,Ia,Wa,Je,X,Re,ce,Ba,Ke,Z,Qe,j,D,ze,ee,La,Te,Ya,Ve,pe,Ja,Xe,P,H,Se,ae,Ra,Ce,Ka,Ze,he,Qa,ea,te,aa,de,Va,ta,re,ra,z,O,xe,oe,Xa,qe,Za,oa,F,et,Ne,at,tt,la,le,sa,G,rt,se,ot,lt,ia;return U=new ie({}),W=new ie({}),B=new M({props:{code:"pip install accelerate",highlighted:"pip install accelerate"}}),Y=new M({props:{code:`from accelerate import Accelerator

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
          progress_bar.update(1)`}}),ee=new ie({}),ae=new ie({}),te=new M({props:{code:"accelerate config",highlighted:"accelerate config"}}),re=new M({props:{code:"accelerate launch train.py",highlighted:"accelerate launch train.py"}}),oe=new ie({}),le=new M({props:{code:`from accelerate import notebook_launcher

notebook_launcher(training_function)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> notebook_launcher

<span class="hljs-meta">&gt;&gt;&gt; </span>notebook_launcher(training_function)`}}),{c(){b=o("meta"),De=h(),y=o("h1"),T=o("a"),me=o("span"),f(U.$$.fragment),wa=h(),_e=o("span"),$a=c("Distributed training with \u{1F917} Accelerate"),He=h(),S=o("p"),ba=c("As models get bigger, parallelism has emerged as a strategy for training larger models on limited hardware and accelerating training speed by several orders of magnitude. At Hugging Face, we created the "),I=o("a"),ya=c("\u{1F917} Accelerate"),ka=c(" library to help users easily train a \u{1F917} Transformers model on any type of distributed setup, whether it is multiple GPU\u2019s on one machine or multiple GPU\u2019s across several machines. In this tutorial, learn how to customize your native PyTorch training loop to enable training in a distributed environment."),Oe=h(),k=o("h2"),C=o("a"),ve=o("span"),f(W.$$.fragment),Aa=h(),ge=o("span"),Ea=c("Setup"),Fe=h(),ne=o("p"),ja=c("Get started by installing \u{1F917} Accelerate:"),Ge=h(),f(B.$$.fragment),Me=h(),w=o("p"),Pa=c("Then import and create an "),L=o("a"),we=o("code"),za=c("Accelerator"),Ta=c(" object. "),$e=o("code"),Sa=c("Accelerator"),Ca=c(" will automatically detect your type of distributed setup and initialize all the necessary components for training. You don\u2019t need to explicitly place your model on a device."),Ue=h(),f(Y.$$.fragment),Ie=h(),A=o("h2"),x=o("a"),be=o("span"),f(J.$$.fragment),xa=h(),ye=o("span"),qa=c("Prepare to accelerate"),We=h(),q=o("p"),Na=c("The next step is to pass all the relevant training objects to the "),R=o("a"),ke=o("code"),Da=c("prepare"),Ha=c(" method. This includes your training and evaluation DataLoaders, a model and an optimizer:"),Be=h(),f(K.$$.fragment),Le=h(),E=o("h2"),N=o("a"),Ae=o("span"),f(Q.$$.fragment),Oa=h(),Ee=o("span"),Fa=c("Backward"),Ye=h(),$=o("p"),Ga=c("The last addition is to replace the typical "),je=o("code"),Ma=c("loss.backward()"),Ua=c(" in your training loop with \u{1F917} Accelerate\u2019s "),V=o("a"),Pe=o("code"),Ia=c("backward"),Wa=c(" method:"),Je=h(),f(X.$$.fragment),Re=h(),ce=o("p"),Ba=c("As you can see in the following code, you only need to add four additional lines of code to your training loop to enable distributed training!"),Ke=h(),f(Z.$$.fragment),Qe=h(),j=o("h2"),D=o("a"),ze=o("span"),f(ee.$$.fragment),La=h(),Te=o("span"),Ya=c("Train"),Ve=h(),pe=o("p"),Ja=c("Once you\u2019ve added the relevant lines of code, launch your training in a script or a notebook like Colaboratory."),Xe=h(),P=o("h3"),H=o("a"),Se=o("span"),f(ae.$$.fragment),Ra=h(),Ce=o("span"),Ka=c("Train with a script"),Ze=h(),he=o("p"),Qa=c("If you are running your training from a script, run the following command to create and save a configuration file:"),ea=h(),f(te.$$.fragment),aa=h(),de=o("p"),Va=c("Then launch your training with:"),ta=h(),f(re.$$.fragment),ra=h(),z=o("h3"),O=o("a"),xe=o("span"),f(oe.$$.fragment),Xa=h(),qe=o("span"),Za=c("Train with a notebook"),oa=h(),F=o("p"),et=c("\u{1F917} Accelerate can also run in a notebook if you\u2019re planning on using Colaboratory\u2019s TPUs. Wrap all the code responsible for training in a function, and pass it to "),Ne=o("code"),at=c("notebook_launcher"),tt=c(":"),la=h(),f(le.$$.fragment),sa=h(),G=o("p"),rt=c("For more information about \u{1F917} Accelerate and it\u2019s rich features, refer to the "),se=o("a"),ot=c("documentation"),lt=c("."),this.h()},l(e){const r=Jt('[data-svelte="svelte-1phssyn"]',document.head);b=l(r,"META",{name:!0,content:!0}),r.forEach(a),De=d(e),y=l(e,"H1",{class:!0});var na=s(y);T=l(na,"A",{id:!0,class:!0,href:!0});var it=s(T);me=l(it,"SPAN",{});var nt=s(me);u(U.$$.fragment,nt),nt.forEach(a),it.forEach(a),wa=d(na),_e=l(na,"SPAN",{});var ct=s(_e);$a=p(ct,"Distributed training with \u{1F917} Accelerate"),ct.forEach(a),na.forEach(a),He=d(e),S=l(e,"P",{});var ca=s(S);ba=p(ca,"As models get bigger, parallelism has emerged as a strategy for training larger models on limited hardware and accelerating training speed by several orders of magnitude. At Hugging Face, we created the "),I=l(ca,"A",{href:!0,rel:!0});var pt=s(I);ya=p(pt,"\u{1F917} Accelerate"),pt.forEach(a),ka=p(ca," library to help users easily train a \u{1F917} Transformers model on any type of distributed setup, whether it is multiple GPU\u2019s on one machine or multiple GPU\u2019s across several machines. In this tutorial, learn how to customize your native PyTorch training loop to enable training in a distributed environment."),ca.forEach(a),Oe=d(e),k=l(e,"H2",{class:!0});var pa=s(k);C=l(pa,"A",{id:!0,class:!0,href:!0});var ht=s(C);ve=l(ht,"SPAN",{});var dt=s(ve);u(W.$$.fragment,dt),dt.forEach(a),ht.forEach(a),Aa=d(pa),ge=l(pa,"SPAN",{});var ft=s(ge);Ea=p(ft,"Setup"),ft.forEach(a),pa.forEach(a),Fe=d(e),ne=l(e,"P",{});var ut=s(ne);ja=p(ut,"Get started by installing \u{1F917} Accelerate:"),ut.forEach(a),Ge=d(e),u(B.$$.fragment,e),Me=d(e),w=l(e,"P",{});var fe=s(w);Pa=p(fe,"Then import and create an "),L=l(fe,"A",{href:!0,rel:!0});var mt=s(L);we=l(mt,"CODE",{});var _t=s(we);za=p(_t,"Accelerator"),_t.forEach(a),mt.forEach(a),Ta=p(fe," object. "),$e=l(fe,"CODE",{});var vt=s($e);Sa=p(vt,"Accelerator"),vt.forEach(a),Ca=p(fe," will automatically detect your type of distributed setup and initialize all the necessary components for training. You don\u2019t need to explicitly place your model on a device."),fe.forEach(a),Ue=d(e),u(Y.$$.fragment,e),Ie=d(e),A=l(e,"H2",{class:!0});var ha=s(A);x=l(ha,"A",{id:!0,class:!0,href:!0});var gt=s(x);be=l(gt,"SPAN",{});var wt=s(be);u(J.$$.fragment,wt),wt.forEach(a),gt.forEach(a),xa=d(ha),ye=l(ha,"SPAN",{});var $t=s(ye);qa=p($t,"Prepare to accelerate"),$t.forEach(a),ha.forEach(a),We=d(e),q=l(e,"P",{});var da=s(q);Na=p(da,"The next step is to pass all the relevant training objects to the "),R=l(da,"A",{href:!0,rel:!0});var bt=s(R);ke=l(bt,"CODE",{});var yt=s(ke);Da=p(yt,"prepare"),yt.forEach(a),bt.forEach(a),Ha=p(da," method. This includes your training and evaluation DataLoaders, a model and an optimizer:"),da.forEach(a),Be=d(e),u(K.$$.fragment,e),Le=d(e),E=l(e,"H2",{class:!0});var fa=s(E);N=l(fa,"A",{id:!0,class:!0,href:!0});var kt=s(N);Ae=l(kt,"SPAN",{});var At=s(Ae);u(Q.$$.fragment,At),At.forEach(a),kt.forEach(a),Oa=d(fa),Ee=l(fa,"SPAN",{});var Et=s(Ee);Fa=p(Et,"Backward"),Et.forEach(a),fa.forEach(a),Ye=d(e),$=l(e,"P",{});var ue=s($);Ga=p(ue,"The last addition is to replace the typical "),je=l(ue,"CODE",{});var jt=s(je);Ma=p(jt,"loss.backward()"),jt.forEach(a),Ua=p(ue," in your training loop with \u{1F917} Accelerate\u2019s "),V=l(ue,"A",{href:!0,rel:!0});var Pt=s(V);Pe=l(Pt,"CODE",{});var zt=s(Pe);Ia=p(zt,"backward"),zt.forEach(a),Pt.forEach(a),Wa=p(ue," method:"),ue.forEach(a),Je=d(e),u(X.$$.fragment,e),Re=d(e),ce=l(e,"P",{});var Tt=s(ce);Ba=p(Tt,"As you can see in the following code, you only need to add four additional lines of code to your training loop to enable distributed training!"),Tt.forEach(a),Ke=d(e),u(Z.$$.fragment,e),Qe=d(e),j=l(e,"H2",{class:!0});var ua=s(j);D=l(ua,"A",{id:!0,class:!0,href:!0});var St=s(D);ze=l(St,"SPAN",{});var Ct=s(ze);u(ee.$$.fragment,Ct),Ct.forEach(a),St.forEach(a),La=d(ua),Te=l(ua,"SPAN",{});var xt=s(Te);Ya=p(xt,"Train"),xt.forEach(a),ua.forEach(a),Ve=d(e),pe=l(e,"P",{});var qt=s(pe);Ja=p(qt,"Once you\u2019ve added the relevant lines of code, launch your training in a script or a notebook like Colaboratory."),qt.forEach(a),Xe=d(e),P=l(e,"H3",{class:!0});var ma=s(P);H=l(ma,"A",{id:!0,class:!0,href:!0});var Nt=s(H);Se=l(Nt,"SPAN",{});var Dt=s(Se);u(ae.$$.fragment,Dt),Dt.forEach(a),Nt.forEach(a),Ra=d(ma),Ce=l(ma,"SPAN",{});var Ht=s(Ce);Ka=p(Ht,"Train with a script"),Ht.forEach(a),ma.forEach(a),Ze=d(e),he=l(e,"P",{});var Ot=s(he);Qa=p(Ot,"If you are running your training from a script, run the following command to create and save a configuration file:"),Ot.forEach(a),ea=d(e),u(te.$$.fragment,e),aa=d(e),de=l(e,"P",{});var Ft=s(de);Va=p(Ft,"Then launch your training with:"),Ft.forEach(a),ta=d(e),u(re.$$.fragment,e),ra=d(e),z=l(e,"H3",{class:!0});var _a=s(z);O=l(_a,"A",{id:!0,class:!0,href:!0});var Gt=s(O);xe=l(Gt,"SPAN",{});var Mt=s(xe);u(oe.$$.fragment,Mt),Mt.forEach(a),Gt.forEach(a),Xa=d(_a),qe=l(_a,"SPAN",{});var Ut=s(qe);Za=p(Ut,"Train with a notebook"),Ut.forEach(a),_a.forEach(a),oa=d(e),F=l(e,"P",{});var va=s(F);et=p(va,"\u{1F917} Accelerate can also run in a notebook if you\u2019re planning on using Colaboratory\u2019s TPUs. Wrap all the code responsible for training in a function, and pass it to "),Ne=l(va,"CODE",{});var It=s(Ne);at=p(It,"notebook_launcher"),It.forEach(a),tt=p(va,":"),va.forEach(a),la=d(e),u(le.$$.fragment,e),sa=d(e),G=l(e,"P",{});var ga=s(G);rt=p(ga,"For more information about \u{1F917} Accelerate and it\u2019s rich features, refer to the "),se=l(ga,"A",{href:!0,rel:!0});var Wt=s(se);ot=p(Wt,"documentation"),Wt.forEach(a),lt=p(ga,"."),ga.forEach(a),this.h()},h(){n(b,"name","hf:doc:metadata"),n(b,"content",JSON.stringify(Vt)),n(T,"id","distributed-training-with-accelerate"),n(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(T,"href","#distributed-training-with-accelerate"),n(y,"class","relative group"),n(I,"href","https://huggingface.co/docs/accelerate"),n(I,"rel","nofollow"),n(C,"id","setup"),n(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(C,"href","#setup"),n(k,"class","relative group"),n(L,"href","https://huggingface.co/docs/accelerate/package_reference/accelerator#accelerate.Accelerator"),n(L,"rel","nofollow"),n(x,"id","prepare-to-accelerate"),n(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(x,"href","#prepare-to-accelerate"),n(A,"class","relative group"),n(R,"href","https://huggingface.co/docs/accelerate/package_reference/accelerator#accelerate.Accelerator.prepare"),n(R,"rel","nofollow"),n(N,"id","backward"),n(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(N,"href","#backward"),n(E,"class","relative group"),n(V,"href","https://huggingface.co/docs/accelerate/package_reference/accelerator#accelerate.Accelerator.backward"),n(V,"rel","nofollow"),n(D,"id","train"),n(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(D,"href","#train"),n(j,"class","relative group"),n(H,"id","train-with-a-script"),n(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(H,"href","#train-with-a-script"),n(P,"class","relative group"),n(O,"id","train-with-a-notebook"),n(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(O,"href","#train-with-a-notebook"),n(z,"class","relative group"),n(se,"href","https://huggingface.co/docs/accelerate"),n(se,"rel","nofollow")},m(e,r){t(document.head,b),i(e,De,r),i(e,y,r),t(y,T),t(T,me),m(U,me,null),t(y,wa),t(y,_e),t(_e,$a),i(e,He,r),i(e,S,r),t(S,ba),t(S,I),t(I,ya),t(S,ka),i(e,Oe,r),i(e,k,r),t(k,C),t(C,ve),m(W,ve,null),t(k,Aa),t(k,ge),t(ge,Ea),i(e,Fe,r),i(e,ne,r),t(ne,ja),i(e,Ge,r),m(B,e,r),i(e,Me,r),i(e,w,r),t(w,Pa),t(w,L),t(L,we),t(we,za),t(w,Ta),t(w,$e),t($e,Sa),t(w,Ca),i(e,Ue,r),m(Y,e,r),i(e,Ie,r),i(e,A,r),t(A,x),t(x,be),m(J,be,null),t(A,xa),t(A,ye),t(ye,qa),i(e,We,r),i(e,q,r),t(q,Na),t(q,R),t(R,ke),t(ke,Da),t(q,Ha),i(e,Be,r),m(K,e,r),i(e,Le,r),i(e,E,r),t(E,N),t(N,Ae),m(Q,Ae,null),t(E,Oa),t(E,Ee),t(Ee,Fa),i(e,Ye,r),i(e,$,r),t($,Ga),t($,je),t(je,Ma),t($,Ua),t($,V),t(V,Pe),t(Pe,Ia),t($,Wa),i(e,Je,r),m(X,e,r),i(e,Re,r),i(e,ce,r),t(ce,Ba),i(e,Ke,r),m(Z,e,r),i(e,Qe,r),i(e,j,r),t(j,D),t(D,ze),m(ee,ze,null),t(j,La),t(j,Te),t(Te,Ya),i(e,Ve,r),i(e,pe,r),t(pe,Ja),i(e,Xe,r),i(e,P,r),t(P,H),t(H,Se),m(ae,Se,null),t(P,Ra),t(P,Ce),t(Ce,Ka),i(e,Ze,r),i(e,he,r),t(he,Qa),i(e,ea,r),m(te,e,r),i(e,aa,r),i(e,de,r),t(de,Va),i(e,ta,r),m(re,e,r),i(e,ra,r),i(e,z,r),t(z,O),t(O,xe),m(oe,xe,null),t(z,Xa),t(z,qe),t(qe,Za),i(e,oa,r),i(e,F,r),t(F,et),t(F,Ne),t(Ne,at),t(F,tt),i(e,la,r),m(le,e,r),i(e,sa,r),i(e,G,r),t(G,rt),t(G,se),t(se,ot),t(G,lt),ia=!0},p:Rt,i(e){ia||(_(U.$$.fragment,e),_(W.$$.fragment,e),_(B.$$.fragment,e),_(Y.$$.fragment,e),_(J.$$.fragment,e),_(K.$$.fragment,e),_(Q.$$.fragment,e),_(X.$$.fragment,e),_(Z.$$.fragment,e),_(ee.$$.fragment,e),_(ae.$$.fragment,e),_(te.$$.fragment,e),_(re.$$.fragment,e),_(oe.$$.fragment,e),_(le.$$.fragment,e),ia=!0)},o(e){v(U.$$.fragment,e),v(W.$$.fragment,e),v(B.$$.fragment,e),v(Y.$$.fragment,e),v(J.$$.fragment,e),v(K.$$.fragment,e),v(Q.$$.fragment,e),v(X.$$.fragment,e),v(Z.$$.fragment,e),v(ee.$$.fragment,e),v(ae.$$.fragment,e),v(te.$$.fragment,e),v(re.$$.fragment,e),v(oe.$$.fragment,e),v(le.$$.fragment,e),ia=!1},d(e){a(b),e&&a(De),e&&a(y),g(U),e&&a(He),e&&a(S),e&&a(Oe),e&&a(k),g(W),e&&a(Fe),e&&a(ne),e&&a(Ge),g(B,e),e&&a(Me),e&&a(w),e&&a(Ue),g(Y,e),e&&a(Ie),e&&a(A),g(J),e&&a(We),e&&a(q),e&&a(Be),g(K,e),e&&a(Le),e&&a(E),g(Q),e&&a(Ye),e&&a($),e&&a(Je),g(X,e),e&&a(Re),e&&a(ce),e&&a(Ke),g(Z,e),e&&a(Qe),e&&a(j),g(ee),e&&a(Ve),e&&a(pe),e&&a(Xe),e&&a(P),g(ae),e&&a(Ze),e&&a(he),e&&a(ea),g(te,e),e&&a(aa),e&&a(de),e&&a(ta),g(re,e),e&&a(ra),e&&a(z),g(oe),e&&a(oa),e&&a(F),e&&a(la),g(le,e),e&&a(sa),e&&a(G)}}}const Vt={local:"distributed-training-with-accelerate",sections:[{local:"setup",title:"Setup"},{local:"prepare-to-accelerate",title:"Prepare to accelerate"},{local:"backward",title:"Backward"},{local:"train",sections:[{local:"train-with-a-script",title:"Train with a script"},{local:"train-with-a-notebook",title:"Train with a notebook"}],title:"Train"}],title:"Distributed training with \u{1F917} Accelerate"};function Xt(st){return Kt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class tr extends Bt{constructor(b){super();Lt(this,b,Xt,Qt,Yt,{})}}export{tr as default,Vt as metadata};
