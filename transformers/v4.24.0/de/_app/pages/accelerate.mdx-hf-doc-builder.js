import{S as Bt,i as Ht,s as Ot,e as n,k as h,w as u,t as o,M as Ft,c as i,d as r,m as d,a as l,x as m,h as c,b as p,G as t,g as s,y as f,L as Wt,q as g,o as v,B as _,v as Gt}from"../chunks/vendor-hf-doc-builder.js";import{I as ne}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as O}from"../chunks/CodeBlock-hf-doc-builder.js";function Ut(at){let k,Me,w,j,de,F,gr,ue,vr,De,P,_r,W,$r,br,Ie,z,C,me,G,kr,fe,wr,Ne,ie,zr,qe,U,xe,$,Sr,ge,Er,Ar,ve,Tr,yr,Be,V,He,S,M,_e,L,jr,$e,Pr,Oe,D,Cr,be,Mr,Dr,Fe,K,We,E,I,ke,R,Ir,we,Nr,Ge,b,qr,ze,xr,Br,Se,Hr,Or,Ue,J,Ve,le,Fr,Le,Q,Ke,A,N,Ee,X,Wr,Ae,Gr,Re,se,Ur,Je,T,q,Te,Y,Vr,ye,Lr,Qe,oe,Kr,Xe,Z,Ye,ce,Rr,Ze,ee,er,y,x,je,re,Jr,Pe,Qr,rr,B,Xr,Ce,Yr,Zr,tr,te,ar,H,et,ae,rt,tt,nr;return F=new ne({}),G=new ne({}),U=new O({props:{code:"pip install accelerate",highlighted:"pip install accelerate"}}),V=new O({props:{code:`from accelerate import Accelerator

accelerator = Accelerator()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> Accelerator

<span class="hljs-meta">&gt;&gt;&gt; </span>accelerator = Accelerator()`}}),L=new ne({}),K=new O({props:{code:`train_dataloader, eval_dataloader, model, optimizer = accelerator.prepare(
    train_dataloader, eval_dataloader, model, optimizer
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataloader, eval_dataloader, model, optimizer = accelerator.prepare(
<span class="hljs-meta">... </span>    train_dataloader, eval_dataloader, model, optimizer
<span class="hljs-meta">... </span>)`}}),R=new ne({}),J=new O({props:{code:`for epoch in range(num_epochs):
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
<span class="hljs-meta">... </span>        progress_bar.update(<span class="hljs-number">1</span>)`}}),Q=new O({props:{code:`+ from accelerate import Accelerator
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
          progress_bar.update(1)`}}),X=new ne({}),Y=new ne({}),Z=new O({props:{code:"accelerate config",highlighted:"accelerate config"}}),ee=new O({props:{code:"accelerate launch train.py",highlighted:"accelerate launch train.py"}}),re=new ne({}),te=new O({props:{code:`from accelerate import notebook_launcher

notebook_launcher(training_function)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> notebook_launcher

<span class="hljs-meta">&gt;&gt;&gt; </span>notebook_launcher(training_function)`}}),{c(){k=n("meta"),Me=h(),w=n("h1"),j=n("a"),de=n("span"),u(F.$$.fragment),gr=h(),ue=n("span"),vr=o("Verteiltes Training mit \u{1F917} Accelerate"),De=h(),P=n("p"),_r=o("Da die Modelle immer gr\xF6\xDFer werden, hat sich die Parallelit\xE4t als Strategie zum Trainieren gr\xF6\xDFerer Modelle auf begrenzter Hardware und zur Beschleunigung der Trainingsgeschwindigkeit um mehrere Gr\xF6\xDFenordnungen erwiesen. Bei Hugging Face haben wir die Bibliothek "),W=n("a"),$r=o("\u{1F917} Accelerate"),br=o(" entwickelt, um Nutzern zu helfen, ein \u{1F917} Transformers-Modell auf jeder Art von verteiltem Setup zu trainieren, egal ob es sich um mehrere GPUs auf einer Maschine oder mehrere GPUs auf mehreren Maschinen handelt. In diesem Tutorial lernen Sie, wie Sie Ihre native PyTorch-Trainingsschleife anpassen, um das Training in einer verteilten Umgebung zu erm\xF6glichen."),Ie=h(),z=n("h2"),C=n("a"),me=n("span"),u(G.$$.fragment),kr=h(),fe=n("span"),wr=o("Einrichtung"),Ne=h(),ie=n("p"),zr=o("Beginnen Sie mit der Installation von \u{1F917} Accelerate:"),qe=h(),u(U.$$.fragment),xe=h(),$=n("p"),Sr=o("Dann importieren und erstellen Sie ein "),ge=n("code"),Er=o("Accelerator"),Ar=o("-Objekt. Der "),ve=n("code"),Tr=o("Accelerator"),yr=o(" wird automatisch Ihre Art der verteilten Einrichtung erkennen und alle notwendigen Komponenten f\xFCr das Training initialisieren. Sie m\xFCssen Ihr Modell nicht explizit auf einem Ger\xE4t platzieren."),Be=h(),u(V.$$.fragment),He=h(),S=n("h2"),M=n("a"),_e=n("span"),u(L.$$.fragment),jr=h(),$e=n("span"),Pr=o("Vorbereiten auf die Beschleunigung"),Oe=h(),D=n("p"),Cr=o("Der n\xE4chste Schritt ist die \xDCbergabe aller relevanten Trainingsobjekte an die Methode "),be=n("code"),Mr=o("prepare"),Dr=o(". Dazu geh\xF6ren Ihre Trainings- und Evaluierungs-DataLoader, ein Modell und ein Optimierer:"),Fe=h(),u(K.$$.fragment),We=h(),E=n("h2"),I=n("a"),ke=n("span"),u(R.$$.fragment),Ir=h(),we=n("span"),Nr=o("R\xFCckw\xE4rts"),Ge=h(),b=n("p"),qr=o("Die letzte Erg\xE4nzung besteht darin, das typische "),ze=n("code"),xr=o("loss.backward()"),Br=o(" in der Trainingsschleife durch die \u{1F917} Accelerate-Methode "),Se=n("code"),Hr=o("backward"),Or=o(" zu ersetzen:"),Ue=h(),u(J.$$.fragment),Ve=h(),le=n("p"),Fr=o("Wie Sie im folgenden Code sehen k\xF6nnen, m\xFCssen Sie nur vier zus\xE4tzliche Codezeilen zu Ihrer Trainingsschleife hinzuf\xFCgen, um verteiltes Training zu erm\xF6glichen!"),Le=h(),u(Q.$$.fragment),Ke=h(),A=n("h2"),N=n("a"),Ee=n("span"),u(X.$$.fragment),Wr=h(),Ae=n("span"),Gr=o("Trainieren"),Re=h(),se=n("p"),Ur=o("Sobald Sie die entsprechenden Codezeilen hinzugef\xFCgt haben, starten Sie Ihr Training in einem Skript oder einem Notebook wie Colaboratory."),Je=h(),T=n("h3"),q=n("a"),Te=n("span"),u(Y.$$.fragment),Vr=h(),ye=n("span"),Lr=o("Trainieren mit einem Skript"),Qe=h(),oe=n("p"),Kr=o("Wenn Sie Ihr Training mit einem Skript durchf\xFChren, f\xFChren Sie den folgenden Befehl aus, um eine Konfigurationsdatei zu erstellen und zu speichern:"),Xe=h(),u(Z.$$.fragment),Ye=h(),ce=n("p"),Rr=o("Dann starten Sie Ihr Training mit:"),Ze=h(),u(ee.$$.fragment),er=h(),y=n("h3"),x=n("a"),je=n("span"),u(re.$$.fragment),Jr=h(),Pe=n("span"),Qr=o("Trainieren mit einem Notebook"),rr=h(),B=n("p"),Xr=o("\u{1F917} Accelerate kann auch in einem Notebook laufen, wenn Sie planen, die TPUs von Colaboratory zu verwenden. Verpacken Sie den gesamten Code, der f\xFCr das Training verantwortlich ist, in eine Funktion und \xFCbergeben Sie diese an "),Ce=n("code"),Yr=o("notebook_launcher"),Zr=o(":"),tr=h(),u(te.$$.fragment),ar=h(),H=n("p"),et=o("Weitere Informationen \xFCber \u{1F917} Accelerate und seine umfangreichen Funktionen finden Sie in der "),ae=n("a"),rt=o("Dokumentation"),tt=o("."),this.h()},l(e){const a=Ft('[data-svelte="svelte-1phssyn"]',document.head);k=i(a,"META",{name:!0,content:!0}),a.forEach(r),Me=d(e),w=i(e,"H1",{class:!0});var ir=l(w);j=i(ir,"A",{id:!0,class:!0,href:!0});var nt=l(j);de=i(nt,"SPAN",{});var it=l(de);m(F.$$.fragment,it),it.forEach(r),nt.forEach(r),gr=d(ir),ue=i(ir,"SPAN",{});var lt=l(ue);vr=c(lt,"Verteiltes Training mit \u{1F917} Accelerate"),lt.forEach(r),ir.forEach(r),De=d(e),P=i(e,"P",{});var lr=l(P);_r=c(lr,"Da die Modelle immer gr\xF6\xDFer werden, hat sich die Parallelit\xE4t als Strategie zum Trainieren gr\xF6\xDFerer Modelle auf begrenzter Hardware und zur Beschleunigung der Trainingsgeschwindigkeit um mehrere Gr\xF6\xDFenordnungen erwiesen. Bei Hugging Face haben wir die Bibliothek "),W=i(lr,"A",{href:!0,rel:!0});var st=l(W);$r=c(st,"\u{1F917} Accelerate"),st.forEach(r),br=c(lr," entwickelt, um Nutzern zu helfen, ein \u{1F917} Transformers-Modell auf jeder Art von verteiltem Setup zu trainieren, egal ob es sich um mehrere GPUs auf einer Maschine oder mehrere GPUs auf mehreren Maschinen handelt. In diesem Tutorial lernen Sie, wie Sie Ihre native PyTorch-Trainingsschleife anpassen, um das Training in einer verteilten Umgebung zu erm\xF6glichen."),lr.forEach(r),Ie=d(e),z=i(e,"H2",{class:!0});var sr=l(z);C=i(sr,"A",{id:!0,class:!0,href:!0});var ot=l(C);me=i(ot,"SPAN",{});var ct=l(me);m(G.$$.fragment,ct),ct.forEach(r),ot.forEach(r),kr=d(sr),fe=i(sr,"SPAN",{});var pt=l(fe);wr=c(pt,"Einrichtung"),pt.forEach(r),sr.forEach(r),Ne=d(e),ie=i(e,"P",{});var ht=l(ie);zr=c(ht,"Beginnen Sie mit der Installation von \u{1F917} Accelerate:"),ht.forEach(r),qe=d(e),m(U.$$.fragment,e),xe=d(e),$=i(e,"P",{});var pe=l($);Sr=c(pe,"Dann importieren und erstellen Sie ein "),ge=i(pe,"CODE",{});var dt=l(ge);Er=c(dt,"Accelerator"),dt.forEach(r),Ar=c(pe,"-Objekt. Der "),ve=i(pe,"CODE",{});var ut=l(ve);Tr=c(ut,"Accelerator"),ut.forEach(r),yr=c(pe," wird automatisch Ihre Art der verteilten Einrichtung erkennen und alle notwendigen Komponenten f\xFCr das Training initialisieren. Sie m\xFCssen Ihr Modell nicht explizit auf einem Ger\xE4t platzieren."),pe.forEach(r),Be=d(e),m(V.$$.fragment,e),He=d(e),S=i(e,"H2",{class:!0});var or=l(S);M=i(or,"A",{id:!0,class:!0,href:!0});var mt=l(M);_e=i(mt,"SPAN",{});var ft=l(_e);m(L.$$.fragment,ft),ft.forEach(r),mt.forEach(r),jr=d(or),$e=i(or,"SPAN",{});var gt=l($e);Pr=c(gt,"Vorbereiten auf die Beschleunigung"),gt.forEach(r),or.forEach(r),Oe=d(e),D=i(e,"P",{});var cr=l(D);Cr=c(cr,"Der n\xE4chste Schritt ist die \xDCbergabe aller relevanten Trainingsobjekte an die Methode "),be=i(cr,"CODE",{});var vt=l(be);Mr=c(vt,"prepare"),vt.forEach(r),Dr=c(cr,". Dazu geh\xF6ren Ihre Trainings- und Evaluierungs-DataLoader, ein Modell und ein Optimierer:"),cr.forEach(r),Fe=d(e),m(K.$$.fragment,e),We=d(e),E=i(e,"H2",{class:!0});var pr=l(E);I=i(pr,"A",{id:!0,class:!0,href:!0});var _t=l(I);ke=i(_t,"SPAN",{});var $t=l(ke);m(R.$$.fragment,$t),$t.forEach(r),_t.forEach(r),Ir=d(pr),we=i(pr,"SPAN",{});var bt=l(we);Nr=c(bt,"R\xFCckw\xE4rts"),bt.forEach(r),pr.forEach(r),Ge=d(e),b=i(e,"P",{});var he=l(b);qr=c(he,"Die letzte Erg\xE4nzung besteht darin, das typische "),ze=i(he,"CODE",{});var kt=l(ze);xr=c(kt,"loss.backward()"),kt.forEach(r),Br=c(he," in der Trainingsschleife durch die \u{1F917} Accelerate-Methode "),Se=i(he,"CODE",{});var wt=l(Se);Hr=c(wt,"backward"),wt.forEach(r),Or=c(he," zu ersetzen:"),he.forEach(r),Ue=d(e),m(J.$$.fragment,e),Ve=d(e),le=i(e,"P",{});var zt=l(le);Fr=c(zt,"Wie Sie im folgenden Code sehen k\xF6nnen, m\xFCssen Sie nur vier zus\xE4tzliche Codezeilen zu Ihrer Trainingsschleife hinzuf\xFCgen, um verteiltes Training zu erm\xF6glichen!"),zt.forEach(r),Le=d(e),m(Q.$$.fragment,e),Ke=d(e),A=i(e,"H2",{class:!0});var hr=l(A);N=i(hr,"A",{id:!0,class:!0,href:!0});var St=l(N);Ee=i(St,"SPAN",{});var Et=l(Ee);m(X.$$.fragment,Et),Et.forEach(r),St.forEach(r),Wr=d(hr),Ae=i(hr,"SPAN",{});var At=l(Ae);Gr=c(At,"Trainieren"),At.forEach(r),hr.forEach(r),Re=d(e),se=i(e,"P",{});var Tt=l(se);Ur=c(Tt,"Sobald Sie die entsprechenden Codezeilen hinzugef\xFCgt haben, starten Sie Ihr Training in einem Skript oder einem Notebook wie Colaboratory."),Tt.forEach(r),Je=d(e),T=i(e,"H3",{class:!0});var dr=l(T);q=i(dr,"A",{id:!0,class:!0,href:!0});var yt=l(q);Te=i(yt,"SPAN",{});var jt=l(Te);m(Y.$$.fragment,jt),jt.forEach(r),yt.forEach(r),Vr=d(dr),ye=i(dr,"SPAN",{});var Pt=l(ye);Lr=c(Pt,"Trainieren mit einem Skript"),Pt.forEach(r),dr.forEach(r),Qe=d(e),oe=i(e,"P",{});var Ct=l(oe);Kr=c(Ct,"Wenn Sie Ihr Training mit einem Skript durchf\xFChren, f\xFChren Sie den folgenden Befehl aus, um eine Konfigurationsdatei zu erstellen und zu speichern:"),Ct.forEach(r),Xe=d(e),m(Z.$$.fragment,e),Ye=d(e),ce=i(e,"P",{});var Mt=l(ce);Rr=c(Mt,"Dann starten Sie Ihr Training mit:"),Mt.forEach(r),Ze=d(e),m(ee.$$.fragment,e),er=d(e),y=i(e,"H3",{class:!0});var ur=l(y);x=i(ur,"A",{id:!0,class:!0,href:!0});var Dt=l(x);je=i(Dt,"SPAN",{});var It=l(je);m(re.$$.fragment,It),It.forEach(r),Dt.forEach(r),Jr=d(ur),Pe=i(ur,"SPAN",{});var Nt=l(Pe);Qr=c(Nt,"Trainieren mit einem Notebook"),Nt.forEach(r),ur.forEach(r),rr=d(e),B=i(e,"P",{});var mr=l(B);Xr=c(mr,"\u{1F917} Accelerate kann auch in einem Notebook laufen, wenn Sie planen, die TPUs von Colaboratory zu verwenden. Verpacken Sie den gesamten Code, der f\xFCr das Training verantwortlich ist, in eine Funktion und \xFCbergeben Sie diese an "),Ce=i(mr,"CODE",{});var qt=l(Ce);Yr=c(qt,"notebook_launcher"),qt.forEach(r),Zr=c(mr,":"),mr.forEach(r),tr=d(e),m(te.$$.fragment,e),ar=d(e),H=i(e,"P",{});var fr=l(H);et=c(fr,"Weitere Informationen \xFCber \u{1F917} Accelerate und seine umfangreichen Funktionen finden Sie in der "),ae=i(fr,"A",{href:!0,rel:!0});var xt=l(ae);rt=c(xt,"Dokumentation"),xt.forEach(r),tt=c(fr,"."),fr.forEach(r),this.h()},h(){p(k,"name","hf:doc:metadata"),p(k,"content",JSON.stringify(Vt)),p(j,"id","verteiltes-training-mit-accelerate"),p(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(j,"href","#verteiltes-training-mit-accelerate"),p(w,"class","relative group"),p(W,"href","https://huggingface.co/docs/accelerate"),p(W,"rel","nofollow"),p(C,"id","einrichtung"),p(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(C,"href","#einrichtung"),p(z,"class","relative group"),p(M,"id","vorbereiten-auf-die-beschleunigung"),p(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(M,"href","#vorbereiten-auf-die-beschleunigung"),p(S,"class","relative group"),p(I,"id","rckwrts"),p(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(I,"href","#rckwrts"),p(E,"class","relative group"),p(N,"id","trainieren"),p(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(N,"href","#trainieren"),p(A,"class","relative group"),p(q,"id","trainieren-mit-einem-skript"),p(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(q,"href","#trainieren-mit-einem-skript"),p(T,"class","relative group"),p(x,"id","trainieren-mit-einem-notebook"),p(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(x,"href","#trainieren-mit-einem-notebook"),p(y,"class","relative group"),p(ae,"href","https://huggingface.co/docs/accelerate"),p(ae,"rel","nofollow")},m(e,a){t(document.head,k),s(e,Me,a),s(e,w,a),t(w,j),t(j,de),f(F,de,null),t(w,gr),t(w,ue),t(ue,vr),s(e,De,a),s(e,P,a),t(P,_r),t(P,W),t(W,$r),t(P,br),s(e,Ie,a),s(e,z,a),t(z,C),t(C,me),f(G,me,null),t(z,kr),t(z,fe),t(fe,wr),s(e,Ne,a),s(e,ie,a),t(ie,zr),s(e,qe,a),f(U,e,a),s(e,xe,a),s(e,$,a),t($,Sr),t($,ge),t(ge,Er),t($,Ar),t($,ve),t(ve,Tr),t($,yr),s(e,Be,a),f(V,e,a),s(e,He,a),s(e,S,a),t(S,M),t(M,_e),f(L,_e,null),t(S,jr),t(S,$e),t($e,Pr),s(e,Oe,a),s(e,D,a),t(D,Cr),t(D,be),t(be,Mr),t(D,Dr),s(e,Fe,a),f(K,e,a),s(e,We,a),s(e,E,a),t(E,I),t(I,ke),f(R,ke,null),t(E,Ir),t(E,we),t(we,Nr),s(e,Ge,a),s(e,b,a),t(b,qr),t(b,ze),t(ze,xr),t(b,Br),t(b,Se),t(Se,Hr),t(b,Or),s(e,Ue,a),f(J,e,a),s(e,Ve,a),s(e,le,a),t(le,Fr),s(e,Le,a),f(Q,e,a),s(e,Ke,a),s(e,A,a),t(A,N),t(N,Ee),f(X,Ee,null),t(A,Wr),t(A,Ae),t(Ae,Gr),s(e,Re,a),s(e,se,a),t(se,Ur),s(e,Je,a),s(e,T,a),t(T,q),t(q,Te),f(Y,Te,null),t(T,Vr),t(T,ye),t(ye,Lr),s(e,Qe,a),s(e,oe,a),t(oe,Kr),s(e,Xe,a),f(Z,e,a),s(e,Ye,a),s(e,ce,a),t(ce,Rr),s(e,Ze,a),f(ee,e,a),s(e,er,a),s(e,y,a),t(y,x),t(x,je),f(re,je,null),t(y,Jr),t(y,Pe),t(Pe,Qr),s(e,rr,a),s(e,B,a),t(B,Xr),t(B,Ce),t(Ce,Yr),t(B,Zr),s(e,tr,a),f(te,e,a),s(e,ar,a),s(e,H,a),t(H,et),t(H,ae),t(ae,rt),t(H,tt),nr=!0},p:Wt,i(e){nr||(g(F.$$.fragment,e),g(G.$$.fragment,e),g(U.$$.fragment,e),g(V.$$.fragment,e),g(L.$$.fragment,e),g(K.$$.fragment,e),g(R.$$.fragment,e),g(J.$$.fragment,e),g(Q.$$.fragment,e),g(X.$$.fragment,e),g(Y.$$.fragment,e),g(Z.$$.fragment,e),g(ee.$$.fragment,e),g(re.$$.fragment,e),g(te.$$.fragment,e),nr=!0)},o(e){v(F.$$.fragment,e),v(G.$$.fragment,e),v(U.$$.fragment,e),v(V.$$.fragment,e),v(L.$$.fragment,e),v(K.$$.fragment,e),v(R.$$.fragment,e),v(J.$$.fragment,e),v(Q.$$.fragment,e),v(X.$$.fragment,e),v(Y.$$.fragment,e),v(Z.$$.fragment,e),v(ee.$$.fragment,e),v(re.$$.fragment,e),v(te.$$.fragment,e),nr=!1},d(e){r(k),e&&r(Me),e&&r(w),_(F),e&&r(De),e&&r(P),e&&r(Ie),e&&r(z),_(G),e&&r(Ne),e&&r(ie),e&&r(qe),_(U,e),e&&r(xe),e&&r($),e&&r(Be),_(V,e),e&&r(He),e&&r(S),_(L),e&&r(Oe),e&&r(D),e&&r(Fe),_(K,e),e&&r(We),e&&r(E),_(R),e&&r(Ge),e&&r(b),e&&r(Ue),_(J,e),e&&r(Ve),e&&r(le),e&&r(Le),_(Q,e),e&&r(Ke),e&&r(A),_(X),e&&r(Re),e&&r(se),e&&r(Je),e&&r(T),_(Y),e&&r(Qe),e&&r(oe),e&&r(Xe),_(Z,e),e&&r(Ye),e&&r(ce),e&&r(Ze),_(ee,e),e&&r(er),e&&r(y),_(re),e&&r(rr),e&&r(B),e&&r(tr),_(te,e),e&&r(ar),e&&r(H)}}}const Vt={local:"verteiltes-training-mit-accelerate",sections:[{local:"einrichtung",title:"Einrichtung"},{local:"vorbereiten-auf-die-beschleunigung",title:"Vorbereiten auf die Beschleunigung"},{local:"rckwrts",title:"R\xFCckw\xE4rts"},{local:"trainieren",sections:[{local:"trainieren-mit-einem-skript",title:"Trainieren mit einem Skript"},{local:"trainieren-mit-einem-notebook",title:"Trainieren mit einem Notebook"}],title:"Trainieren"}],title:"Verteiltes Training mit \u{1F917} Accelerate"};function Lt(at){return Gt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Qt extends Bt{constructor(k){super();Ht(this,k,Lt,Ut,Ot,{})}}export{Qt as default,Vt as metadata};
