import{S as Gt,i as Wt,s as Qt,e as r,k as u,w as d,t as c,M as Jt,c as l,d as a,m,a as i,x as f,h as p,b as s,G as t,g as n,y as h,L as Rt,q as v,o as _,B as g,v as Kt}from"../chunks/vendor-hf-doc-builder.js";import{I as ne}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as O}from"../chunks/CodeBlock-hf-doc-builder.js";function Vt(it){let w,He,k,S,he,T,$a,ve,ba,Le,q,wa,F,ka,za,Ue,z,C,_e,B,Aa,ge,Ea,De,se,ya,Me,G,Oe,$,Pa,W,$e,ja,Sa,be,qa,Ca,Te,Q,Fe,A,N,we,J,Na,ke,xa,Be,x,Ia,R,ze,Ha,La,Ge,K,We,E,I,Ae,V,Ua,Ee,Da,Qe,b,Ma,ye,Oa,Ta,X,Pe,Fa,Ba,Je,Y,Re,ce,Ga,Ke,Z,Ve,y,H,je,ee,Wa,Se,Qa,Xe,pe,Ja,Ye,P,L,qe,ae,Ra,Ce,Ka,Ze,ue,Va,ea,te,aa,me,Xa,ta,oe,oa,j,U,Ne,re,Ya,xe,Za,ra,D,et,Ie,at,tt,la,le,ia,M,ot,ie,rt,lt,na;return T=new ne({}),B=new ne({}),G=new O({props:{code:"pip install accelerate",highlighted:"pip install accelerate"}}),Q=new O({props:{code:`from accelerate import Accelerator

accelerator = Accelerator()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> Accelerator

<span class="hljs-meta">&gt;&gt;&gt; </span>accelerator = Accelerator()`}}),J=new ne({}),K=new O({props:{code:`train_dataloader, eval_dataloader, model, optimizer = accelerator.prepare(
    train_dataloader, eval_dataloader, model, optimizer
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataloader, eval_dataloader, model, optimizer = accelerator.prepare(
<span class="hljs-meta">... </span>    train_dataloader, eval_dataloader, model, optimizer
<span class="hljs-meta">... </span>)`}}),V=new ne({}),Y=new O({props:{code:`for epoch in range(num_epochs):
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
<span class="hljs-meta">... </span>        progress_bar.update(<span class="hljs-number">1</span>)`}}),Z=new O({props:{code:`+ from accelerate import Accelerator
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
          progress_bar.update(1)`}}),ee=new ne({}),ae=new ne({}),te=new O({props:{code:"accelerate config",highlighted:"accelerate config"}}),oe=new O({props:{code:"accelerate launch train.py",highlighted:"accelerate launch train.py"}}),re=new ne({}),le=new O({props:{code:`from accelerate import notebook_launcher

notebook_launcher(training_function)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> notebook_launcher

<span class="hljs-meta">&gt;&gt;&gt; </span>notebook_launcher(training_function)`}}),{c(){w=r("meta"),He=u(),k=r("h1"),S=r("a"),he=r("span"),d(T.$$.fragment),$a=u(),ve=r("span"),ba=c("Allenamento distribuito con \u{1F917} Accelerate"),Le=u(),q=r("p"),wa=c("La parallelizzazione \xE8 emersa come strategia per allenare modelli sempre pi\xF9 grandi su hardware limitato e accelerarne la velocit\xE0 di allenamento di diversi ordini di magnitudine. In Hugging Face, abbiamo creato la libreria "),F=r("a"),ka=c("\u{1F917} Accelerate"),za=c(" per aiutarti ad allenare in modo semplice un modello \u{1F917} Transformers su qualsiasi tipo di configurazione distribuita, sia che si tratti di pi\xF9 GPU su una sola macchina o di pi\xF9 GPU su pi\xF9 macchine. In questo tutorial, imparerai come personalizzare il training loop nativo di PyTorch per consentire l\u2019addestramento in un ambiente distribuito."),Ue=u(),z=r("h2"),C=r("a"),_e=r("span"),d(B.$$.fragment),Aa=u(),ge=r("span"),Ea=c("Configurazione"),De=u(),se=r("p"),ya=c("Inizia installando \u{1F917} Accelerate:"),Me=u(),d(G.$$.fragment),Oe=u(),$=r("p"),Pa=c("Poi importa e crea un oggetto "),W=r("a"),$e=r("code"),ja=c("Accelerator"),Sa=c(". "),be=r("code"),qa=c("Accelerator"),Ca=c(" rilever\xE0 automaticamente il tuo setup distribuito e inizializzer\xE0 tutte le componenti necessarie per l\u2019allenamento. Non dovrai allocare esplicitamente il tuo modello su un device."),Te=u(),d(Q.$$.fragment),Fe=u(),A=r("h2"),N=r("a"),we=r("span"),d(J.$$.fragment),Na=u(),ke=r("span"),xa=c("Preparati ad accelerare"),Be=u(),x=r("p"),Ia=c("Il prossimo passo \xE8 quello di passare tutti gli oggetti rilevanti per l\u2019allenamento al metodo "),R=r("a"),ze=r("code"),Ha=c("prepare"),La=c(". Questo include i tuoi DataLoaders per l\u2019allenamento e per la valutazione, un modello e un ottimizzatore:"),Ge=u(),d(K.$$.fragment),We=u(),E=r("h2"),I=r("a"),Ae=r("span"),d(V.$$.fragment),Ua=u(),Ee=r("span"),Da=c("Backward"),Qe=u(),b=r("p"),Ma=c("Infine, sostituisci il tipico metodo "),ye=r("code"),Oa=c("loss.backward()"),Ta=c(" nel tuo loop di allenamento con il metodo "),X=r("a"),Pe=r("code"),Fa=c("backward"),Ba=c(" di \u{1F917} Accelerate:"),Je=u(),d(Y.$$.fragment),Re=u(),ce=r("p"),Ga=c("Come puoi vedere nel seguente codice, hai solo bisogno di aggiungere quattro righe in pi\xF9 di codice al tuo training loop per abilitare l\u2019allenamento distribuito!"),Ke=u(),d(Z.$$.fragment),Ve=u(),y=r("h2"),H=r("a"),je=r("span"),d(ee.$$.fragment),Wa=u(),Se=r("span"),Qa=c("Allenamento"),Xe=u(),pe=r("p"),Ja=c("Una volta che hai aggiunto le righe di codice rilevanti, lancia il tuo allenamento in uno script o in un notebook come Colaboratory."),Ye=u(),P=r("h3"),L=r("a"),qe=r("span"),d(ae.$$.fragment),Ra=u(),Ce=r("span"),Ka=c("Allenamento con uno script"),Ze=u(),ue=r("p"),Va=c("Se stai eseguendo il tuo allenamento da uno script, esegui il comando seguente per creare e salvare un file di configurazione:"),ea=u(),d(te.$$.fragment),aa=u(),me=r("p"),Xa=c("Poi lancia il tuo allenamento con:"),ta=u(),d(oe.$$.fragment),oa=u(),j=r("h3"),U=r("a"),Ne=r("span"),d(re.$$.fragment),Ya=u(),xe=r("span"),Za=c("Allenamento con un notebook"),ra=u(),D=r("p"),et=c("La libreria \u{1F917} Accelerate pu\xF2 anche essere utilizzata in un notebook se stai pianificando di utilizzare le TPU di Colaboratory. Inserisci tutto il codice legato all\u2019allenamento in una funzione, e passala al "),Ie=r("code"),at=c("notebook_launcher"),tt=c(":"),la=u(),d(le.$$.fragment),ia=u(),M=r("p"),ot=c("Per maggiori informazioni relative a \u{1F917} Accelerate e le sue numerose funzionalit\xE0, fai riferimento alla "),ie=r("a"),rt=c("documentazione"),lt=c("."),this.h()},l(e){const o=Jt('[data-svelte="svelte-1phssyn"]',document.head);w=l(o,"META",{name:!0,content:!0}),o.forEach(a),He=m(e),k=l(e,"H1",{class:!0});var sa=i(k);S=l(sa,"A",{id:!0,class:!0,href:!0});var nt=i(S);he=l(nt,"SPAN",{});var st=i(he);f(T.$$.fragment,st),st.forEach(a),nt.forEach(a),$a=m(sa),ve=l(sa,"SPAN",{});var ct=i(ve);ba=p(ct,"Allenamento distribuito con \u{1F917} Accelerate"),ct.forEach(a),sa.forEach(a),Le=m(e),q=l(e,"P",{});var ca=i(q);wa=p(ca,"La parallelizzazione \xE8 emersa come strategia per allenare modelli sempre pi\xF9 grandi su hardware limitato e accelerarne la velocit\xE0 di allenamento di diversi ordini di magnitudine. In Hugging Face, abbiamo creato la libreria "),F=l(ca,"A",{href:!0,rel:!0});var pt=i(F);ka=p(pt,"\u{1F917} Accelerate"),pt.forEach(a),za=p(ca," per aiutarti ad allenare in modo semplice un modello \u{1F917} Transformers su qualsiasi tipo di configurazione distribuita, sia che si tratti di pi\xF9 GPU su una sola macchina o di pi\xF9 GPU su pi\xF9 macchine. In questo tutorial, imparerai come personalizzare il training loop nativo di PyTorch per consentire l\u2019addestramento in un ambiente distribuito."),ca.forEach(a),Ue=m(e),z=l(e,"H2",{class:!0});var pa=i(z);C=l(pa,"A",{id:!0,class:!0,href:!0});var ut=i(C);_e=l(ut,"SPAN",{});var mt=i(_e);f(B.$$.fragment,mt),mt.forEach(a),ut.forEach(a),Aa=m(pa),ge=l(pa,"SPAN",{});var dt=i(ge);Ea=p(dt,"Configurazione"),dt.forEach(a),pa.forEach(a),De=m(e),se=l(e,"P",{});var ft=i(se);ya=p(ft,"Inizia installando \u{1F917} Accelerate:"),ft.forEach(a),Me=m(e),f(G.$$.fragment,e),Oe=m(e),$=l(e,"P",{});var de=i($);Pa=p(de,"Poi importa e crea un oggetto "),W=l(de,"A",{href:!0,rel:!0});var ht=i(W);$e=l(ht,"CODE",{});var vt=i($e);ja=p(vt,"Accelerator"),vt.forEach(a),ht.forEach(a),Sa=p(de,". "),be=l(de,"CODE",{});var _t=i(be);qa=p(_t,"Accelerator"),_t.forEach(a),Ca=p(de," rilever\xE0 automaticamente il tuo setup distribuito e inizializzer\xE0 tutte le componenti necessarie per l\u2019allenamento. Non dovrai allocare esplicitamente il tuo modello su un device."),de.forEach(a),Te=m(e),f(Q.$$.fragment,e),Fe=m(e),A=l(e,"H2",{class:!0});var ua=i(A);N=l(ua,"A",{id:!0,class:!0,href:!0});var gt=i(N);we=l(gt,"SPAN",{});var $t=i(we);f(J.$$.fragment,$t),$t.forEach(a),gt.forEach(a),Na=m(ua),ke=l(ua,"SPAN",{});var bt=i(ke);xa=p(bt,"Preparati ad accelerare"),bt.forEach(a),ua.forEach(a),Be=m(e),x=l(e,"P",{});var ma=i(x);Ia=p(ma,"Il prossimo passo \xE8 quello di passare tutti gli oggetti rilevanti per l\u2019allenamento al metodo "),R=l(ma,"A",{href:!0,rel:!0});var wt=i(R);ze=l(wt,"CODE",{});var kt=i(ze);Ha=p(kt,"prepare"),kt.forEach(a),wt.forEach(a),La=p(ma,". Questo include i tuoi DataLoaders per l\u2019allenamento e per la valutazione, un modello e un ottimizzatore:"),ma.forEach(a),Ge=m(e),f(K.$$.fragment,e),We=m(e),E=l(e,"H2",{class:!0});var da=i(E);I=l(da,"A",{id:!0,class:!0,href:!0});var zt=i(I);Ae=l(zt,"SPAN",{});var At=i(Ae);f(V.$$.fragment,At),At.forEach(a),zt.forEach(a),Ua=m(da),Ee=l(da,"SPAN",{});var Et=i(Ee);Da=p(Et,"Backward"),Et.forEach(a),da.forEach(a),Qe=m(e),b=l(e,"P",{});var fe=i(b);Ma=p(fe,"Infine, sostituisci il tipico metodo "),ye=l(fe,"CODE",{});var yt=i(ye);Oa=p(yt,"loss.backward()"),yt.forEach(a),Ta=p(fe," nel tuo loop di allenamento con il metodo "),X=l(fe,"A",{href:!0,rel:!0});var Pt=i(X);Pe=l(Pt,"CODE",{});var jt=i(Pe);Fa=p(jt,"backward"),jt.forEach(a),Pt.forEach(a),Ba=p(fe," di \u{1F917} Accelerate:"),fe.forEach(a),Je=m(e),f(Y.$$.fragment,e),Re=m(e),ce=l(e,"P",{});var St=i(ce);Ga=p(St,"Come puoi vedere nel seguente codice, hai solo bisogno di aggiungere quattro righe in pi\xF9 di codice al tuo training loop per abilitare l\u2019allenamento distribuito!"),St.forEach(a),Ke=m(e),f(Z.$$.fragment,e),Ve=m(e),y=l(e,"H2",{class:!0});var fa=i(y);H=l(fa,"A",{id:!0,class:!0,href:!0});var qt=i(H);je=l(qt,"SPAN",{});var Ct=i(je);f(ee.$$.fragment,Ct),Ct.forEach(a),qt.forEach(a),Wa=m(fa),Se=l(fa,"SPAN",{});var Nt=i(Se);Qa=p(Nt,"Allenamento"),Nt.forEach(a),fa.forEach(a),Xe=m(e),pe=l(e,"P",{});var xt=i(pe);Ja=p(xt,"Una volta che hai aggiunto le righe di codice rilevanti, lancia il tuo allenamento in uno script o in un notebook come Colaboratory."),xt.forEach(a),Ye=m(e),P=l(e,"H3",{class:!0});var ha=i(P);L=l(ha,"A",{id:!0,class:!0,href:!0});var It=i(L);qe=l(It,"SPAN",{});var Ht=i(qe);f(ae.$$.fragment,Ht),Ht.forEach(a),It.forEach(a),Ra=m(ha),Ce=l(ha,"SPAN",{});var Lt=i(Ce);Ka=p(Lt,"Allenamento con uno script"),Lt.forEach(a),ha.forEach(a),Ze=m(e),ue=l(e,"P",{});var Ut=i(ue);Va=p(Ut,"Se stai eseguendo il tuo allenamento da uno script, esegui il comando seguente per creare e salvare un file di configurazione:"),Ut.forEach(a),ea=m(e),f(te.$$.fragment,e),aa=m(e),me=l(e,"P",{});var Dt=i(me);Xa=p(Dt,"Poi lancia il tuo allenamento con:"),Dt.forEach(a),ta=m(e),f(oe.$$.fragment,e),oa=m(e),j=l(e,"H3",{class:!0});var va=i(j);U=l(va,"A",{id:!0,class:!0,href:!0});var Mt=i(U);Ne=l(Mt,"SPAN",{});var Ot=i(Ne);f(re.$$.fragment,Ot),Ot.forEach(a),Mt.forEach(a),Ya=m(va),xe=l(va,"SPAN",{});var Tt=i(xe);Za=p(Tt,"Allenamento con un notebook"),Tt.forEach(a),va.forEach(a),ra=m(e),D=l(e,"P",{});var _a=i(D);et=p(_a,"La libreria \u{1F917} Accelerate pu\xF2 anche essere utilizzata in un notebook se stai pianificando di utilizzare le TPU di Colaboratory. Inserisci tutto il codice legato all\u2019allenamento in una funzione, e passala al "),Ie=l(_a,"CODE",{});var Ft=i(Ie);at=p(Ft,"notebook_launcher"),Ft.forEach(a),tt=p(_a,":"),_a.forEach(a),la=m(e),f(le.$$.fragment,e),ia=m(e),M=l(e,"P",{});var ga=i(M);ot=p(ga,"Per maggiori informazioni relative a \u{1F917} Accelerate e le sue numerose funzionalit\xE0, fai riferimento alla "),ie=l(ga,"A",{href:!0,rel:!0});var Bt=i(ie);rt=p(Bt,"documentazione"),Bt.forEach(a),lt=p(ga,"."),ga.forEach(a),this.h()},h(){s(w,"name","hf:doc:metadata"),s(w,"content",JSON.stringify(Xt)),s(S,"id","allenamento-distribuito-con-accelerate"),s(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(S,"href","#allenamento-distribuito-con-accelerate"),s(k,"class","relative group"),s(F,"href","https://huggingface.co/docs/accelerate/index.html"),s(F,"rel","nofollow"),s(C,"id","configurazione"),s(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(C,"href","#configurazione"),s(z,"class","relative group"),s(W,"href","https://huggingface.co/docs/accelerate/accelerator.html#accelerate.Accelerator"),s(W,"rel","nofollow"),s(N,"id","preparati-ad-accelerare"),s(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(N,"href","#preparati-ad-accelerare"),s(A,"class","relative group"),s(R,"href","https://huggingface.co/docs/accelerate/accelerator.html#accelerate.Accelerator.prepare"),s(R,"rel","nofollow"),s(I,"id","backward"),s(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(I,"href","#backward"),s(E,"class","relative group"),s(X,"href","https://huggingface.co/docs/accelerate/accelerator.html#accelerate.Accelerator.backward"),s(X,"rel","nofollow"),s(H,"id","allenamento"),s(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(H,"href","#allenamento"),s(y,"class","relative group"),s(L,"id","allenamento-con-uno-script"),s(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(L,"href","#allenamento-con-uno-script"),s(P,"class","relative group"),s(U,"id","allenamento-con-un-notebook"),s(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(U,"href","#allenamento-con-un-notebook"),s(j,"class","relative group"),s(ie,"href","https://huggingface.co/docs/accelerate/index.html"),s(ie,"rel","nofollow")},m(e,o){t(document.head,w),n(e,He,o),n(e,k,o),t(k,S),t(S,he),h(T,he,null),t(k,$a),t(k,ve),t(ve,ba),n(e,Le,o),n(e,q,o),t(q,wa),t(q,F),t(F,ka),t(q,za),n(e,Ue,o),n(e,z,o),t(z,C),t(C,_e),h(B,_e,null),t(z,Aa),t(z,ge),t(ge,Ea),n(e,De,o),n(e,se,o),t(se,ya),n(e,Me,o),h(G,e,o),n(e,Oe,o),n(e,$,o),t($,Pa),t($,W),t(W,$e),t($e,ja),t($,Sa),t($,be),t(be,qa),t($,Ca),n(e,Te,o),h(Q,e,o),n(e,Fe,o),n(e,A,o),t(A,N),t(N,we),h(J,we,null),t(A,Na),t(A,ke),t(ke,xa),n(e,Be,o),n(e,x,o),t(x,Ia),t(x,R),t(R,ze),t(ze,Ha),t(x,La),n(e,Ge,o),h(K,e,o),n(e,We,o),n(e,E,o),t(E,I),t(I,Ae),h(V,Ae,null),t(E,Ua),t(E,Ee),t(Ee,Da),n(e,Qe,o),n(e,b,o),t(b,Ma),t(b,ye),t(ye,Oa),t(b,Ta),t(b,X),t(X,Pe),t(Pe,Fa),t(b,Ba),n(e,Je,o),h(Y,e,o),n(e,Re,o),n(e,ce,o),t(ce,Ga),n(e,Ke,o),h(Z,e,o),n(e,Ve,o),n(e,y,o),t(y,H),t(H,je),h(ee,je,null),t(y,Wa),t(y,Se),t(Se,Qa),n(e,Xe,o),n(e,pe,o),t(pe,Ja),n(e,Ye,o),n(e,P,o),t(P,L),t(L,qe),h(ae,qe,null),t(P,Ra),t(P,Ce),t(Ce,Ka),n(e,Ze,o),n(e,ue,o),t(ue,Va),n(e,ea,o),h(te,e,o),n(e,aa,o),n(e,me,o),t(me,Xa),n(e,ta,o),h(oe,e,o),n(e,oa,o),n(e,j,o),t(j,U),t(U,Ne),h(re,Ne,null),t(j,Ya),t(j,xe),t(xe,Za),n(e,ra,o),n(e,D,o),t(D,et),t(D,Ie),t(Ie,at),t(D,tt),n(e,la,o),h(le,e,o),n(e,ia,o),n(e,M,o),t(M,ot),t(M,ie),t(ie,rt),t(M,lt),na=!0},p:Rt,i(e){na||(v(T.$$.fragment,e),v(B.$$.fragment,e),v(G.$$.fragment,e),v(Q.$$.fragment,e),v(J.$$.fragment,e),v(K.$$.fragment,e),v(V.$$.fragment,e),v(Y.$$.fragment,e),v(Z.$$.fragment,e),v(ee.$$.fragment,e),v(ae.$$.fragment,e),v(te.$$.fragment,e),v(oe.$$.fragment,e),v(re.$$.fragment,e),v(le.$$.fragment,e),na=!0)},o(e){_(T.$$.fragment,e),_(B.$$.fragment,e),_(G.$$.fragment,e),_(Q.$$.fragment,e),_(J.$$.fragment,e),_(K.$$.fragment,e),_(V.$$.fragment,e),_(Y.$$.fragment,e),_(Z.$$.fragment,e),_(ee.$$.fragment,e),_(ae.$$.fragment,e),_(te.$$.fragment,e),_(oe.$$.fragment,e),_(re.$$.fragment,e),_(le.$$.fragment,e),na=!1},d(e){a(w),e&&a(He),e&&a(k),g(T),e&&a(Le),e&&a(q),e&&a(Ue),e&&a(z),g(B),e&&a(De),e&&a(se),e&&a(Me),g(G,e),e&&a(Oe),e&&a($),e&&a(Te),g(Q,e),e&&a(Fe),e&&a(A),g(J),e&&a(Be),e&&a(x),e&&a(Ge),g(K,e),e&&a(We),e&&a(E),g(V),e&&a(Qe),e&&a(b),e&&a(Je),g(Y,e),e&&a(Re),e&&a(ce),e&&a(Ke),g(Z,e),e&&a(Ve),e&&a(y),g(ee),e&&a(Xe),e&&a(pe),e&&a(Ye),e&&a(P),g(ae),e&&a(Ze),e&&a(ue),e&&a(ea),g(te,e),e&&a(aa),e&&a(me),e&&a(ta),g(oe,e),e&&a(oa),e&&a(j),g(re),e&&a(ra),e&&a(D),e&&a(la),g(le,e),e&&a(ia),e&&a(M)}}}const Xt={local:"allenamento-distribuito-con-accelerate",sections:[{local:"configurazione",title:"Configurazione"},{local:"preparati-ad-accelerare",title:"Preparati ad accelerare"},{local:"backward",title:"Backward"},{local:"allenamento",sections:[{local:"allenamento-con-uno-script",title:"Allenamento con uno script"},{local:"allenamento-con-un-notebook",title:"Allenamento con un notebook"}],title:"Allenamento"}],title:"Allenamento distribuito con \u{1F917} Accelerate"};function Yt(it){return Kt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class to extends Gt{constructor(w){super();Wt(this,w,Yt,Vt,Qt,{})}}export{to as default,Xt as metadata};
