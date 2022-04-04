import{S as Wt,i as It,s as Jt,e as o,k as d,w as u,t as c,M as Rt,c as n,d as a,m,a as s,x as f,h as p,b as i,F as t,g as l,y as h,L as Kt,q as v,o as _,B as b,v as Qt}from"../chunks/vendor-c570b7f7.js";import{I as le,C as O}from"../chunks/CodeBlock-8a2530c2.js";function Vt(st){let w,Ue,E,q,he,T,$a,ve,ga,De,C,wa,B,Ea,ka,Fe,k,S,_e,G,ya,be,Aa,Le,ie,Pa,Me,W,Oe,$,ja,I,$e,za,qa,ge,Ca,Sa,Te,J,Be,y,N,we,R,Na,Ee,xa,Ge,x,Ha,K,ke,Ua,Da,We,Q,Ie,A,H,ye,V,Fa,Ae,La,Je,g,Ma,Pe,Oa,Ta,X,je,Ba,Ga,Re,Y,Ke,ce,Wa,Qe,Z,Ve,P,U,ze,ee,Ia,qe,Ja,Xe,pe,Ra,Ye,j,D,Ce,ae,Ka,Se,Qa,Ze,de,Va,ea,te,aa,me,Xa,ta,re,ra,z,F,Ne,oe,Ya,xe,Za,oa,L,et,He,at,tt,na,ne,sa,M,rt,se,ot,nt,la;return T=new le({}),G=new le({}),W=new O({props:{code:"pip install accelerate",highlighted:"pip install accelerate"}}),J=new O({props:{code:`from accelerate import Accelerator

accelerator = Accelerator()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> Accelerator

<span class="hljs-meta">&gt;&gt;&gt; </span>accelerator = Accelerator()`}}),R=new le({}),Q=new O({props:{code:`train_dataloader, eval_dataloader, model, optimizer = accelerator.prepare(
    train_dataloader, eval_dataloader, model, optimizer
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataloader, eval_dataloader, model, optimizer = accelerator.prepare(
<span class="hljs-meta">... </span>    train_dataloader, eval_dataloader, model, optimizer
<span class="hljs-meta">... </span>)`}}),V=new le({}),Y=new O({props:{code:`for epoch in range(num_epochs):
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
          progress_bar.update(1)`}}),ee=new le({}),ae=new le({}),te=new O({props:{code:"accelerate config",highlighted:"accelerate config"}}),re=new O({props:{code:"accelerate launch train.py",highlighted:"accelerate launch train.py"}}),oe=new le({}),ne=new O({props:{code:`from accelerate import notebook_launcher

notebook_launcher(training_function)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> notebook_launcher

<span class="hljs-meta">&gt;&gt;&gt; </span>notebook_launcher(training_function)`}}),{c(){w=o("meta"),Ue=d(),E=o("h1"),q=o("a"),he=o("span"),u(T.$$.fragment),$a=d(),ve=o("span"),ga=c("Entrenamiento distribuido con \u{1F917} Accelerate"),De=d(),C=o("p"),wa=c("El paralelismo ha emergido como una estrategia para entrenar modelos grandes en hardware limitado e incrementar la velocidad de entrenamiento en varios \xF3rdenes de magnitud. En Hugging Face creamos la biblioteca "),B=o("a"),Ea=c("\u{1F917} Accelerate"),ka=c(" para ayudar a los usuarios a entrenar modelos \u{1F917} Transformers en cualquier tipo de configuraci\xF3n distribuida, ya sea en una m\xE1quina con m\xFAltiples GPUs o en m\xFAltiples GPUs distribuidas entre muchas m\xE1quinas. En este tutorial aprender\xE1s c\xF3mo personalizar tu bucle de entrenamiento de PyTorch nativo para poder entrenar en entornos distribuidos."),Fe=d(),k=o("h2"),S=o("a"),_e=o("span"),u(G.$$.fragment),ya=d(),be=o("span"),Aa=c("Configuraci\xF3n"),Le=d(),ie=o("p"),Pa=c("Empecemos por instalar \u{1F917} Accelerate:"),Me=d(),u(W.$$.fragment),Oe=d(),$=o("p"),ja=c("Luego, importamos y creamos un objeto "),I=o("a"),$e=o("code"),za=c("Accelerator"),qa=c(". "),ge=o("code"),Ca=c("Accelerator"),Sa=c(" detectar\xE1 autom\xE1ticamente el tipo de configuraci\xF3n distribuida que tengas disponible e inicializar\xE1 todos los componentes necesarios para el entrenamiento. No necesitas especificar el dispositivo en donde se debe colocar tu modelo."),Te=d(),u(J.$$.fragment),Be=d(),y=o("h2"),N=o("a"),we=o("span"),u(R.$$.fragment),Na=d(),Ee=o("span"),xa=c("Prep\xE1rate para acelerar"),Ge=d(),x=o("p"),Ha=c("Pasa todos los objetos relevantes para el entrenamiento al m\xE9todo "),K=o("a"),ke=o("code"),Ua=c("prepare"),Da=c(". Esto incluye los DataLoaders de entrenamiento y evaluaci\xF3n, un modelo y un optimizador:"),We=d(),u(Q.$$.fragment),Ie=d(),A=o("h2"),H=o("a"),ye=o("span"),u(V.$$.fragment),Fa=d(),Ae=o("span"),La=c("Backward"),Je=d(),g=o("p"),Ma=c("Por \xFAltimo, reemplaza el t\xEDpico "),Pe=o("code"),Oa=c("loss.backward()"),Ta=c(" en tu bucle de entrenamiento con el m\xE9todo "),X=o("a"),je=o("code"),Ba=c("backward"),Ga=c(" de \u{1F917} Accelerate:"),Re=d(),u(Y.$$.fragment),Ke=d(),ce=o("p"),Wa=c("Como se puede ver en el siguiente c\xF3digo, \xA1solo necesitas adicionar cuatro l\xEDneas de c\xF3digo a tu bucle de entrenamiento para habilitar el entrenamiento distribuido!"),Qe=d(),u(Z.$$.fragment),Ve=d(),P=o("h2"),U=o("a"),ze=o("span"),u(ee.$$.fragment),Ia=d(),qe=o("span"),Ja=c("Entrenamiento"),Xe=d(),pe=o("p"),Ra=c("Una vez que hayas a\xF1adido las l\xEDneas de c\xF3digo relevantes, inicia el entrenamiento desde un script o notebook como Colaboratory."),Ye=d(),j=o("h3"),D=o("a"),Ce=o("span"),u(ae.$$.fragment),Ka=d(),Se=o("span"),Qa=c("Entrenar con un script"),Ze=d(),de=o("p"),Va=c("Si estas corriendo tu entrenamiento desde un script ejecuta el siguiente comando para crear y guardar un archivo de configuraci\xF3n:"),ea=d(),u(te.$$.fragment),aa=d(),me=o("p"),Xa=c("Comienza el entrenamiento con:"),ta=d(),u(re.$$.fragment),ra=d(),z=o("h3"),F=o("a"),Ne=o("span"),u(oe.$$.fragment),Ya=d(),xe=o("span"),Za=c("Entrenar con un notebook"),oa=d(),L=o("p"),et=c("\u{1F917} Accelerate puede correr en un notebook si, por ejemplo, est\xE1s planeando utilizar las TPUs de Colaboratory. Encierra el c\xF3digo responsable del entrenamiento en una funci\xF3n y p\xE1salo a "),He=o("code"),at=c("notebook_launcher"),tt=c(":"),na=d(),u(ne.$$.fragment),sa=d(),M=o("p"),rt=c("Para obtener m\xE1s informaci\xF3n sobre \u{1F917} Accelerate y sus numerosas funciones, consulta la "),se=o("a"),ot=c("documentaci\xF3n"),nt=c("."),this.h()},l(e){const r=Rt('[data-svelte="svelte-1phssyn"]',document.head);w=n(r,"META",{name:!0,content:!0}),r.forEach(a),Ue=m(e),E=n(e,"H1",{class:!0});var ia=s(E);q=n(ia,"A",{id:!0,class:!0,href:!0});var lt=s(q);he=n(lt,"SPAN",{});var it=s(he);f(T.$$.fragment,it),it.forEach(a),lt.forEach(a),$a=m(ia),ve=n(ia,"SPAN",{});var ct=s(ve);ga=p(ct,"Entrenamiento distribuido con \u{1F917} Accelerate"),ct.forEach(a),ia.forEach(a),De=m(e),C=n(e,"P",{});var ca=s(C);wa=p(ca,"El paralelismo ha emergido como una estrategia para entrenar modelos grandes en hardware limitado e incrementar la velocidad de entrenamiento en varios \xF3rdenes de magnitud. En Hugging Face creamos la biblioteca "),B=n(ca,"A",{href:!0,rel:!0});var pt=s(B);Ea=p(pt,"\u{1F917} Accelerate"),pt.forEach(a),ka=p(ca," para ayudar a los usuarios a entrenar modelos \u{1F917} Transformers en cualquier tipo de configuraci\xF3n distribuida, ya sea en una m\xE1quina con m\xFAltiples GPUs o en m\xFAltiples GPUs distribuidas entre muchas m\xE1quinas. En este tutorial aprender\xE1s c\xF3mo personalizar tu bucle de entrenamiento de PyTorch nativo para poder entrenar en entornos distribuidos."),ca.forEach(a),Fe=m(e),k=n(e,"H2",{class:!0});var pa=s(k);S=n(pa,"A",{id:!0,class:!0,href:!0});var dt=s(S);_e=n(dt,"SPAN",{});var mt=s(_e);f(G.$$.fragment,mt),mt.forEach(a),dt.forEach(a),ya=m(pa),be=n(pa,"SPAN",{});var ut=s(be);Aa=p(ut,"Configuraci\xF3n"),ut.forEach(a),pa.forEach(a),Le=m(e),ie=n(e,"P",{});var ft=s(ie);Pa=p(ft,"Empecemos por instalar \u{1F917} Accelerate:"),ft.forEach(a),Me=m(e),f(W.$$.fragment,e),Oe=m(e),$=n(e,"P",{});var ue=s($);ja=p(ue,"Luego, importamos y creamos un objeto "),I=n(ue,"A",{href:!0,rel:!0});var ht=s(I);$e=n(ht,"CODE",{});var vt=s($e);za=p(vt,"Accelerator"),vt.forEach(a),ht.forEach(a),qa=p(ue,". "),ge=n(ue,"CODE",{});var _t=s(ge);Ca=p(_t,"Accelerator"),_t.forEach(a),Sa=p(ue," detectar\xE1 autom\xE1ticamente el tipo de configuraci\xF3n distribuida que tengas disponible e inicializar\xE1 todos los componentes necesarios para el entrenamiento. No necesitas especificar el dispositivo en donde se debe colocar tu modelo."),ue.forEach(a),Te=m(e),f(J.$$.fragment,e),Be=m(e),y=n(e,"H2",{class:!0});var da=s(y);N=n(da,"A",{id:!0,class:!0,href:!0});var bt=s(N);we=n(bt,"SPAN",{});var $t=s(we);f(R.$$.fragment,$t),$t.forEach(a),bt.forEach(a),Na=m(da),Ee=n(da,"SPAN",{});var gt=s(Ee);xa=p(gt,"Prep\xE1rate para acelerar"),gt.forEach(a),da.forEach(a),Ge=m(e),x=n(e,"P",{});var ma=s(x);Ha=p(ma,"Pasa todos los objetos relevantes para el entrenamiento al m\xE9todo "),K=n(ma,"A",{href:!0,rel:!0});var wt=s(K);ke=n(wt,"CODE",{});var Et=s(ke);Ua=p(Et,"prepare"),Et.forEach(a),wt.forEach(a),Da=p(ma,". Esto incluye los DataLoaders de entrenamiento y evaluaci\xF3n, un modelo y un optimizador:"),ma.forEach(a),We=m(e),f(Q.$$.fragment,e),Ie=m(e),A=n(e,"H2",{class:!0});var ua=s(A);H=n(ua,"A",{id:!0,class:!0,href:!0});var kt=s(H);ye=n(kt,"SPAN",{});var yt=s(ye);f(V.$$.fragment,yt),yt.forEach(a),kt.forEach(a),Fa=m(ua),Ae=n(ua,"SPAN",{});var At=s(Ae);La=p(At,"Backward"),At.forEach(a),ua.forEach(a),Je=m(e),g=n(e,"P",{});var fe=s(g);Ma=p(fe,"Por \xFAltimo, reemplaza el t\xEDpico "),Pe=n(fe,"CODE",{});var Pt=s(Pe);Oa=p(Pt,"loss.backward()"),Pt.forEach(a),Ta=p(fe," en tu bucle de entrenamiento con el m\xE9todo "),X=n(fe,"A",{href:!0,rel:!0});var jt=s(X);je=n(jt,"CODE",{});var zt=s(je);Ba=p(zt,"backward"),zt.forEach(a),jt.forEach(a),Ga=p(fe," de \u{1F917} Accelerate:"),fe.forEach(a),Re=m(e),f(Y.$$.fragment,e),Ke=m(e),ce=n(e,"P",{});var qt=s(ce);Wa=p(qt,"Como se puede ver en el siguiente c\xF3digo, \xA1solo necesitas adicionar cuatro l\xEDneas de c\xF3digo a tu bucle de entrenamiento para habilitar el entrenamiento distribuido!"),qt.forEach(a),Qe=m(e),f(Z.$$.fragment,e),Ve=m(e),P=n(e,"H2",{class:!0});var fa=s(P);U=n(fa,"A",{id:!0,class:!0,href:!0});var Ct=s(U);ze=n(Ct,"SPAN",{});var St=s(ze);f(ee.$$.fragment,St),St.forEach(a),Ct.forEach(a),Ia=m(fa),qe=n(fa,"SPAN",{});var Nt=s(qe);Ja=p(Nt,"Entrenamiento"),Nt.forEach(a),fa.forEach(a),Xe=m(e),pe=n(e,"P",{});var xt=s(pe);Ra=p(xt,"Una vez que hayas a\xF1adido las l\xEDneas de c\xF3digo relevantes, inicia el entrenamiento desde un script o notebook como Colaboratory."),xt.forEach(a),Ye=m(e),j=n(e,"H3",{class:!0});var ha=s(j);D=n(ha,"A",{id:!0,class:!0,href:!0});var Ht=s(D);Ce=n(Ht,"SPAN",{});var Ut=s(Ce);f(ae.$$.fragment,Ut),Ut.forEach(a),Ht.forEach(a),Ka=m(ha),Se=n(ha,"SPAN",{});var Dt=s(Se);Qa=p(Dt,"Entrenar con un script"),Dt.forEach(a),ha.forEach(a),Ze=m(e),de=n(e,"P",{});var Ft=s(de);Va=p(Ft,"Si estas corriendo tu entrenamiento desde un script ejecuta el siguiente comando para crear y guardar un archivo de configuraci\xF3n:"),Ft.forEach(a),ea=m(e),f(te.$$.fragment,e),aa=m(e),me=n(e,"P",{});var Lt=s(me);Xa=p(Lt,"Comienza el entrenamiento con:"),Lt.forEach(a),ta=m(e),f(re.$$.fragment,e),ra=m(e),z=n(e,"H3",{class:!0});var va=s(z);F=n(va,"A",{id:!0,class:!0,href:!0});var Mt=s(F);Ne=n(Mt,"SPAN",{});var Ot=s(Ne);f(oe.$$.fragment,Ot),Ot.forEach(a),Mt.forEach(a),Ya=m(va),xe=n(va,"SPAN",{});var Tt=s(xe);Za=p(Tt,"Entrenar con un notebook"),Tt.forEach(a),va.forEach(a),oa=m(e),L=n(e,"P",{});var _a=s(L);et=p(_a,"\u{1F917} Accelerate puede correr en un notebook si, por ejemplo, est\xE1s planeando utilizar las TPUs de Colaboratory. Encierra el c\xF3digo responsable del entrenamiento en una funci\xF3n y p\xE1salo a "),He=n(_a,"CODE",{});var Bt=s(He);at=p(Bt,"notebook_launcher"),Bt.forEach(a),tt=p(_a,":"),_a.forEach(a),na=m(e),f(ne.$$.fragment,e),sa=m(e),M=n(e,"P",{});var ba=s(M);rt=p(ba,"Para obtener m\xE1s informaci\xF3n sobre \u{1F917} Accelerate y sus numerosas funciones, consulta la "),se=n(ba,"A",{href:!0,rel:!0});var Gt=s(se);ot=p(Gt,"documentaci\xF3n"),Gt.forEach(a),nt=p(ba,"."),ba.forEach(a),this.h()},h(){i(w,"name","hf:doc:metadata"),i(w,"content",JSON.stringify(Xt)),i(q,"id","entrenamiento-distribuido-con-accelerate"),i(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(q,"href","#entrenamiento-distribuido-con-accelerate"),i(E,"class","relative group"),i(B,"href","https://huggingface.co/docs/accelerate/index.html"),i(B,"rel","nofollow"),i(S,"id","configuracin"),i(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(S,"href","#configuracin"),i(k,"class","relative group"),i(I,"href","https://huggingface.co/docs/accelerate/accelerator.html#accelerate.Accelerator"),i(I,"rel","nofollow"),i(N,"id","preprate-para-acelerar"),i(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(N,"href","#preprate-para-acelerar"),i(y,"class","relative group"),i(K,"href","https://huggingface.co/docs/accelerate/accelerator.html#accelerate.Accelerator.prepare"),i(K,"rel","nofollow"),i(H,"id","backward"),i(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(H,"href","#backward"),i(A,"class","relative group"),i(X,"href","https://huggingface.co/docs/accelerate/accelerator.html#accelerate.Accelerator.backward"),i(X,"rel","nofollow"),i(U,"id","entrenamiento"),i(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(U,"href","#entrenamiento"),i(P,"class","relative group"),i(D,"id","entrenar-con-un-script"),i(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(D,"href","#entrenar-con-un-script"),i(j,"class","relative group"),i(F,"id","entrenar-con-un-notebook"),i(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(F,"href","#entrenar-con-un-notebook"),i(z,"class","relative group"),i(se,"href","https://huggingface.co/docs/accelerate/index.html"),i(se,"rel","nofollow")},m(e,r){t(document.head,w),l(e,Ue,r),l(e,E,r),t(E,q),t(q,he),h(T,he,null),t(E,$a),t(E,ve),t(ve,ga),l(e,De,r),l(e,C,r),t(C,wa),t(C,B),t(B,Ea),t(C,ka),l(e,Fe,r),l(e,k,r),t(k,S),t(S,_e),h(G,_e,null),t(k,ya),t(k,be),t(be,Aa),l(e,Le,r),l(e,ie,r),t(ie,Pa),l(e,Me,r),h(W,e,r),l(e,Oe,r),l(e,$,r),t($,ja),t($,I),t(I,$e),t($e,za),t($,qa),t($,ge),t(ge,Ca),t($,Sa),l(e,Te,r),h(J,e,r),l(e,Be,r),l(e,y,r),t(y,N),t(N,we),h(R,we,null),t(y,Na),t(y,Ee),t(Ee,xa),l(e,Ge,r),l(e,x,r),t(x,Ha),t(x,K),t(K,ke),t(ke,Ua),t(x,Da),l(e,We,r),h(Q,e,r),l(e,Ie,r),l(e,A,r),t(A,H),t(H,ye),h(V,ye,null),t(A,Fa),t(A,Ae),t(Ae,La),l(e,Je,r),l(e,g,r),t(g,Ma),t(g,Pe),t(Pe,Oa),t(g,Ta),t(g,X),t(X,je),t(je,Ba),t(g,Ga),l(e,Re,r),h(Y,e,r),l(e,Ke,r),l(e,ce,r),t(ce,Wa),l(e,Qe,r),h(Z,e,r),l(e,Ve,r),l(e,P,r),t(P,U),t(U,ze),h(ee,ze,null),t(P,Ia),t(P,qe),t(qe,Ja),l(e,Xe,r),l(e,pe,r),t(pe,Ra),l(e,Ye,r),l(e,j,r),t(j,D),t(D,Ce),h(ae,Ce,null),t(j,Ka),t(j,Se),t(Se,Qa),l(e,Ze,r),l(e,de,r),t(de,Va),l(e,ea,r),h(te,e,r),l(e,aa,r),l(e,me,r),t(me,Xa),l(e,ta,r),h(re,e,r),l(e,ra,r),l(e,z,r),t(z,F),t(F,Ne),h(oe,Ne,null),t(z,Ya),t(z,xe),t(xe,Za),l(e,oa,r),l(e,L,r),t(L,et),t(L,He),t(He,at),t(L,tt),l(e,na,r),h(ne,e,r),l(e,sa,r),l(e,M,r),t(M,rt),t(M,se),t(se,ot),t(M,nt),la=!0},p:Kt,i(e){la||(v(T.$$.fragment,e),v(G.$$.fragment,e),v(W.$$.fragment,e),v(J.$$.fragment,e),v(R.$$.fragment,e),v(Q.$$.fragment,e),v(V.$$.fragment,e),v(Y.$$.fragment,e),v(Z.$$.fragment,e),v(ee.$$.fragment,e),v(ae.$$.fragment,e),v(te.$$.fragment,e),v(re.$$.fragment,e),v(oe.$$.fragment,e),v(ne.$$.fragment,e),la=!0)},o(e){_(T.$$.fragment,e),_(G.$$.fragment,e),_(W.$$.fragment,e),_(J.$$.fragment,e),_(R.$$.fragment,e),_(Q.$$.fragment,e),_(V.$$.fragment,e),_(Y.$$.fragment,e),_(Z.$$.fragment,e),_(ee.$$.fragment,e),_(ae.$$.fragment,e),_(te.$$.fragment,e),_(re.$$.fragment,e),_(oe.$$.fragment,e),_(ne.$$.fragment,e),la=!1},d(e){a(w),e&&a(Ue),e&&a(E),b(T),e&&a(De),e&&a(C),e&&a(Fe),e&&a(k),b(G),e&&a(Le),e&&a(ie),e&&a(Me),b(W,e),e&&a(Oe),e&&a($),e&&a(Te),b(J,e),e&&a(Be),e&&a(y),b(R),e&&a(Ge),e&&a(x),e&&a(We),b(Q,e),e&&a(Ie),e&&a(A),b(V),e&&a(Je),e&&a(g),e&&a(Re),b(Y,e),e&&a(Ke),e&&a(ce),e&&a(Qe),b(Z,e),e&&a(Ve),e&&a(P),b(ee),e&&a(Xe),e&&a(pe),e&&a(Ye),e&&a(j),b(ae),e&&a(Ze),e&&a(de),e&&a(ea),b(te,e),e&&a(aa),e&&a(me),e&&a(ta),b(re,e),e&&a(ra),e&&a(z),b(oe),e&&a(oa),e&&a(L),e&&a(na),b(ne,e),e&&a(sa),e&&a(M)}}}const Xt={local:"entrenamiento-distribuido-con-accelerate",sections:[{local:"configuracin",title:"Configuraci\xF3n"},{local:"preprate-para-acelerar",title:"Prep\xE1rate para acelerar"},{local:"backward",title:"Backward"},{local:"entrenamiento",sections:[{local:"entrenar-con-un-script",title:"Entrenar con un script"},{local:"entrenar-con-un-notebook",title:"Entrenar con un notebook"}],title:"Entrenamiento"}],title:"Entrenamiento distribuido con \u{1F917} Accelerate"};function Yt(st){return Qt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ar extends Wt{constructor(w){super();It(this,w,Yt,Vt,Jt,{})}}export{ar as default,Xt as metadata};
