import{S as Wr,i as Ir,s as Jr,e as o,k as d,w as m,t as c,M as Rr,c as n,d as a,m as u,a as s,x as f,h as p,b as i,G as r,g as l,y as h,L as Kr,q as _,o as v,B as b,v as Qr}from"../chunks/vendor-hf-doc-builder.js";import{I as le}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as T}from"../chunks/CodeBlock-hf-doc-builder.js";function Vr(sr){let w,Ue,k,q,he,F,$a,_e,ga,De,C,wa,B,ka,Ea,Le,E,S,ve,G,ya,be,Aa,Me,ie,Pa,Oe,W,Te,$,ja,I,$e,za,qa,ge,Ca,Sa,Fe,J,Be,y,N,we,R,Na,ke,xa,Ge,x,Ha,K,Ee,Ua,Da,We,Q,Ie,A,H,ye,V,La,Ae,Ma,Je,g,Oa,Pe,Ta,Fa,X,je,Ba,Ga,Re,Y,Ke,ce,Wa,Qe,Z,Ve,P,U,ze,ee,Ia,qe,Ja,Xe,pe,Ra,Ye,j,D,Ce,ae,Ka,Se,Qa,Ze,de,Va,ea,re,aa,ue,Xa,ra,te,ta,z,L,Ne,oe,Ya,xe,Za,oa,M,er,He,ar,rr,na,ne,sa,O,tr,se,or,nr,la;return F=new le({}),G=new le({}),W=new T({props:{code:"pip install accelerate",highlighted:"pip install accelerate"}}),J=new T({props:{code:`from accelerate import Accelerator

accelerator = Accelerator()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> Accelerator

<span class="hljs-meta">&gt;&gt;&gt; </span>accelerator = Accelerator()`}}),R=new le({}),Q=new T({props:{code:`train_dataloader, eval_dataloader, model, optimizer = accelerator.prepare(
    train_dataloader, eval_dataloader, model, optimizer
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataloader, eval_dataloader, model, optimizer = accelerator.prepare(
<span class="hljs-meta">... </span>    train_dataloader, eval_dataloader, model, optimizer
<span class="hljs-meta">... </span>)`}}),V=new le({}),Y=new T({props:{code:`for epoch in range(num_epochs):
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
<span class="hljs-meta">... </span>        progress_bar.update(<span class="hljs-number">1</span>)`}}),Z=new T({props:{code:`+ from accelerate import Accelerator
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
          progress_bar.update(1)`}}),ee=new le({}),ae=new le({}),re=new T({props:{code:"accelerate config",highlighted:"accelerate config"}}),te=new T({props:{code:"accelerate launch train.py",highlighted:"accelerate launch train.py"}}),oe=new le({}),ne=new T({props:{code:`from accelerate import notebook_launcher

notebook_launcher(training_function)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> notebook_launcher

<span class="hljs-meta">&gt;&gt;&gt; </span>notebook_launcher(training_function)`}}),{c(){w=o("meta"),Ue=d(),k=o("h1"),q=o("a"),he=o("span"),m(F.$$.fragment),$a=d(),_e=o("span"),ga=c("Entrenamiento distribuido con \u{1F917} Accelerate"),De=d(),C=o("p"),wa=c("El paralelismo ha emergido como una estrategia para entrenar modelos grandes en hardware limitado e incrementar la velocidad de entrenamiento en varios \xF3rdenes de magnitud. En Hugging Face creamos la biblioteca "),B=o("a"),ka=c("\u{1F917} Accelerate"),Ea=c(" para ayudar a los usuarios a entrenar modelos \u{1F917} Transformers en cualquier tipo de configuraci\xF3n distribuida, ya sea en una m\xE1quina con m\xFAltiples GPUs o en m\xFAltiples GPUs distribuidas entre muchas m\xE1quinas. En este tutorial aprender\xE1s c\xF3mo personalizar tu bucle de entrenamiento de PyTorch nativo para poder entrenar en entornos distribuidos."),Le=d(),E=o("h2"),S=o("a"),ve=o("span"),m(G.$$.fragment),ya=d(),be=o("span"),Aa=c("Configuraci\xF3n"),Me=d(),ie=o("p"),Pa=c("Empecemos por instalar \u{1F917} Accelerate:"),Oe=d(),m(W.$$.fragment),Te=d(),$=o("p"),ja=c("Luego, importamos y creamos un objeto "),I=o("a"),$e=o("code"),za=c("Accelerator"),qa=c(". "),ge=o("code"),Ca=c("Accelerator"),Sa=c(" detectar\xE1 autom\xE1ticamente el tipo de configuraci\xF3n distribuida que tengas disponible e inicializar\xE1 todos los componentes necesarios para el entrenamiento. No necesitas especificar el dispositivo en donde se debe colocar tu modelo."),Fe=d(),m(J.$$.fragment),Be=d(),y=o("h2"),N=o("a"),we=o("span"),m(R.$$.fragment),Na=d(),ke=o("span"),xa=c("Prep\xE1rate para acelerar"),Ge=d(),x=o("p"),Ha=c("Pasa todos los objetos relevantes para el entrenamiento al m\xE9todo "),K=o("a"),Ee=o("code"),Ua=c("prepare"),Da=c(". Esto incluye los DataLoaders de entrenamiento y evaluaci\xF3n, un modelo y un optimizador:"),We=d(),m(Q.$$.fragment),Ie=d(),A=o("h2"),H=o("a"),ye=o("span"),m(V.$$.fragment),La=d(),Ae=o("span"),Ma=c("Backward"),Je=d(),g=o("p"),Oa=c("Por \xFAltimo, reemplaza el t\xEDpico "),Pe=o("code"),Ta=c("loss.backward()"),Fa=c(" en tu bucle de entrenamiento con el m\xE9todo "),X=o("a"),je=o("code"),Ba=c("backward"),Ga=c(" de \u{1F917} Accelerate:"),Re=d(),m(Y.$$.fragment),Ke=d(),ce=o("p"),Wa=c("Como se puede ver en el siguiente c\xF3digo, \xA1solo necesitas adicionar cuatro l\xEDneas de c\xF3digo a tu bucle de entrenamiento para habilitar el entrenamiento distribuido!"),Qe=d(),m(Z.$$.fragment),Ve=d(),P=o("h2"),U=o("a"),ze=o("span"),m(ee.$$.fragment),Ia=d(),qe=o("span"),Ja=c("Entrenamiento"),Xe=d(),pe=o("p"),Ra=c("Una vez que hayas a\xF1adido las l\xEDneas de c\xF3digo relevantes, inicia el entrenamiento desde un script o notebook como Colaboratory."),Ye=d(),j=o("h3"),D=o("a"),Ce=o("span"),m(ae.$$.fragment),Ka=d(),Se=o("span"),Qa=c("Entrenar con un script"),Ze=d(),de=o("p"),Va=c("Si est\xE1s corriendo tu entrenamiento desde un script ejecuta el siguiente comando para crear y guardar un archivo de configuraci\xF3n:"),ea=d(),m(re.$$.fragment),aa=d(),ue=o("p"),Xa=c("Comienza el entrenamiento con:"),ra=d(),m(te.$$.fragment),ta=d(),z=o("h3"),L=o("a"),Ne=o("span"),m(oe.$$.fragment),Ya=d(),xe=o("span"),Za=c("Entrenar con un notebook"),oa=d(),M=o("p"),er=c("\u{1F917} Accelerate puede correr en un notebook si, por ejemplo, est\xE1s planeando utilizar las TPUs de Colaboratory. Encierra el c\xF3digo responsable del entrenamiento en una funci\xF3n y p\xE1salo a "),He=o("code"),ar=c("notebook_launcher"),rr=c(":"),na=d(),m(ne.$$.fragment),sa=d(),O=o("p"),tr=c("Para obtener m\xE1s informaci\xF3n sobre \u{1F917} Accelerate y sus numerosas funciones, consulta la "),se=o("a"),or=c("documentaci\xF3n"),nr=c("."),this.h()},l(e){const t=Rr('[data-svelte="svelte-1phssyn"]',document.head);w=n(t,"META",{name:!0,content:!0}),t.forEach(a),Ue=u(e),k=n(e,"H1",{class:!0});var ia=s(k);q=n(ia,"A",{id:!0,class:!0,href:!0});var lr=s(q);he=n(lr,"SPAN",{});var ir=s(he);f(F.$$.fragment,ir),ir.forEach(a),lr.forEach(a),$a=u(ia),_e=n(ia,"SPAN",{});var cr=s(_e);ga=p(cr,"Entrenamiento distribuido con \u{1F917} Accelerate"),cr.forEach(a),ia.forEach(a),De=u(e),C=n(e,"P",{});var ca=s(C);wa=p(ca,"El paralelismo ha emergido como una estrategia para entrenar modelos grandes en hardware limitado e incrementar la velocidad de entrenamiento en varios \xF3rdenes de magnitud. En Hugging Face creamos la biblioteca "),B=n(ca,"A",{href:!0,rel:!0});var pr=s(B);ka=p(pr,"\u{1F917} Accelerate"),pr.forEach(a),Ea=p(ca," para ayudar a los usuarios a entrenar modelos \u{1F917} Transformers en cualquier tipo de configuraci\xF3n distribuida, ya sea en una m\xE1quina con m\xFAltiples GPUs o en m\xFAltiples GPUs distribuidas entre muchas m\xE1quinas. En este tutorial aprender\xE1s c\xF3mo personalizar tu bucle de entrenamiento de PyTorch nativo para poder entrenar en entornos distribuidos."),ca.forEach(a),Le=u(e),E=n(e,"H2",{class:!0});var pa=s(E);S=n(pa,"A",{id:!0,class:!0,href:!0});var dr=s(S);ve=n(dr,"SPAN",{});var ur=s(ve);f(G.$$.fragment,ur),ur.forEach(a),dr.forEach(a),ya=u(pa),be=n(pa,"SPAN",{});var mr=s(be);Aa=p(mr,"Configuraci\xF3n"),mr.forEach(a),pa.forEach(a),Me=u(e),ie=n(e,"P",{});var fr=s(ie);Pa=p(fr,"Empecemos por instalar \u{1F917} Accelerate:"),fr.forEach(a),Oe=u(e),f(W.$$.fragment,e),Te=u(e),$=n(e,"P",{});var me=s($);ja=p(me,"Luego, importamos y creamos un objeto "),I=n(me,"A",{href:!0,rel:!0});var hr=s(I);$e=n(hr,"CODE",{});var _r=s($e);za=p(_r,"Accelerator"),_r.forEach(a),hr.forEach(a),qa=p(me,". "),ge=n(me,"CODE",{});var vr=s(ge);Ca=p(vr,"Accelerator"),vr.forEach(a),Sa=p(me," detectar\xE1 autom\xE1ticamente el tipo de configuraci\xF3n distribuida que tengas disponible e inicializar\xE1 todos los componentes necesarios para el entrenamiento. No necesitas especificar el dispositivo en donde se debe colocar tu modelo."),me.forEach(a),Fe=u(e),f(J.$$.fragment,e),Be=u(e),y=n(e,"H2",{class:!0});var da=s(y);N=n(da,"A",{id:!0,class:!0,href:!0});var br=s(N);we=n(br,"SPAN",{});var $r=s(we);f(R.$$.fragment,$r),$r.forEach(a),br.forEach(a),Na=u(da),ke=n(da,"SPAN",{});var gr=s(ke);xa=p(gr,"Prep\xE1rate para acelerar"),gr.forEach(a),da.forEach(a),Ge=u(e),x=n(e,"P",{});var ua=s(x);Ha=p(ua,"Pasa todos los objetos relevantes para el entrenamiento al m\xE9todo "),K=n(ua,"A",{href:!0,rel:!0});var wr=s(K);Ee=n(wr,"CODE",{});var kr=s(Ee);Ua=p(kr,"prepare"),kr.forEach(a),wr.forEach(a),Da=p(ua,". Esto incluye los DataLoaders de entrenamiento y evaluaci\xF3n, un modelo y un optimizador:"),ua.forEach(a),We=u(e),f(Q.$$.fragment,e),Ie=u(e),A=n(e,"H2",{class:!0});var ma=s(A);H=n(ma,"A",{id:!0,class:!0,href:!0});var Er=s(H);ye=n(Er,"SPAN",{});var yr=s(ye);f(V.$$.fragment,yr),yr.forEach(a),Er.forEach(a),La=u(ma),Ae=n(ma,"SPAN",{});var Ar=s(Ae);Ma=p(Ar,"Backward"),Ar.forEach(a),ma.forEach(a),Je=u(e),g=n(e,"P",{});var fe=s(g);Oa=p(fe,"Por \xFAltimo, reemplaza el t\xEDpico "),Pe=n(fe,"CODE",{});var Pr=s(Pe);Ta=p(Pr,"loss.backward()"),Pr.forEach(a),Fa=p(fe," en tu bucle de entrenamiento con el m\xE9todo "),X=n(fe,"A",{href:!0,rel:!0});var jr=s(X);je=n(jr,"CODE",{});var zr=s(je);Ba=p(zr,"backward"),zr.forEach(a),jr.forEach(a),Ga=p(fe," de \u{1F917} Accelerate:"),fe.forEach(a),Re=u(e),f(Y.$$.fragment,e),Ke=u(e),ce=n(e,"P",{});var qr=s(ce);Wa=p(qr,"Como se puede ver en el siguiente c\xF3digo, \xA1solo necesitas adicionar cuatro l\xEDneas de c\xF3digo a tu bucle de entrenamiento para habilitar el entrenamiento distribuido!"),qr.forEach(a),Qe=u(e),f(Z.$$.fragment,e),Ve=u(e),P=n(e,"H2",{class:!0});var fa=s(P);U=n(fa,"A",{id:!0,class:!0,href:!0});var Cr=s(U);ze=n(Cr,"SPAN",{});var Sr=s(ze);f(ee.$$.fragment,Sr),Sr.forEach(a),Cr.forEach(a),Ia=u(fa),qe=n(fa,"SPAN",{});var Nr=s(qe);Ja=p(Nr,"Entrenamiento"),Nr.forEach(a),fa.forEach(a),Xe=u(e),pe=n(e,"P",{});var xr=s(pe);Ra=p(xr,"Una vez que hayas a\xF1adido las l\xEDneas de c\xF3digo relevantes, inicia el entrenamiento desde un script o notebook como Colaboratory."),xr.forEach(a),Ye=u(e),j=n(e,"H3",{class:!0});var ha=s(j);D=n(ha,"A",{id:!0,class:!0,href:!0});var Hr=s(D);Ce=n(Hr,"SPAN",{});var Ur=s(Ce);f(ae.$$.fragment,Ur),Ur.forEach(a),Hr.forEach(a),Ka=u(ha),Se=n(ha,"SPAN",{});var Dr=s(Se);Qa=p(Dr,"Entrenar con un script"),Dr.forEach(a),ha.forEach(a),Ze=u(e),de=n(e,"P",{});var Lr=s(de);Va=p(Lr,"Si est\xE1s corriendo tu entrenamiento desde un script ejecuta el siguiente comando para crear y guardar un archivo de configuraci\xF3n:"),Lr.forEach(a),ea=u(e),f(re.$$.fragment,e),aa=u(e),ue=n(e,"P",{});var Mr=s(ue);Xa=p(Mr,"Comienza el entrenamiento con:"),Mr.forEach(a),ra=u(e),f(te.$$.fragment,e),ta=u(e),z=n(e,"H3",{class:!0});var _a=s(z);L=n(_a,"A",{id:!0,class:!0,href:!0});var Or=s(L);Ne=n(Or,"SPAN",{});var Tr=s(Ne);f(oe.$$.fragment,Tr),Tr.forEach(a),Or.forEach(a),Ya=u(_a),xe=n(_a,"SPAN",{});var Fr=s(xe);Za=p(Fr,"Entrenar con un notebook"),Fr.forEach(a),_a.forEach(a),oa=u(e),M=n(e,"P",{});var va=s(M);er=p(va,"\u{1F917} Accelerate puede correr en un notebook si, por ejemplo, est\xE1s planeando utilizar las TPUs de Colaboratory. Encierra el c\xF3digo responsable del entrenamiento en una funci\xF3n y p\xE1salo a "),He=n(va,"CODE",{});var Br=s(He);ar=p(Br,"notebook_launcher"),Br.forEach(a),rr=p(va,":"),va.forEach(a),na=u(e),f(ne.$$.fragment,e),sa=u(e),O=n(e,"P",{});var ba=s(O);tr=p(ba,"Para obtener m\xE1s informaci\xF3n sobre \u{1F917} Accelerate y sus numerosas funciones, consulta la "),se=n(ba,"A",{href:!0,rel:!0});var Gr=s(se);or=p(Gr,"documentaci\xF3n"),Gr.forEach(a),nr=p(ba,"."),ba.forEach(a),this.h()},h(){i(w,"name","hf:doc:metadata"),i(w,"content",JSON.stringify(Xr)),i(q,"id","entrenamiento-distribuido-con-accelerate"),i(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(q,"href","#entrenamiento-distribuido-con-accelerate"),i(k,"class","relative group"),i(B,"href","https://huggingface.co/docs/accelerate"),i(B,"rel","nofollow"),i(S,"id","configuracin"),i(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(S,"href","#configuracin"),i(E,"class","relative group"),i(I,"href","https://huggingface.co/docs/accelerate/package_reference/accelerator#accelerate.Accelerator"),i(I,"rel","nofollow"),i(N,"id","preprate-para-acelerar"),i(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(N,"href","#preprate-para-acelerar"),i(y,"class","relative group"),i(K,"href","https://huggingface.co/docs/accelerate/package_reference/accelerator#accelerate.Accelerator.prepare"),i(K,"rel","nofollow"),i(H,"id","backward"),i(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(H,"href","#backward"),i(A,"class","relative group"),i(X,"href","https://huggingface.co/docs/accelerate/package_reference/accelerator#accelerate.Accelerator.backward"),i(X,"rel","nofollow"),i(U,"id","entrenamiento"),i(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(U,"href","#entrenamiento"),i(P,"class","relative group"),i(D,"id","entrenar-con-un-script"),i(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(D,"href","#entrenar-con-un-script"),i(j,"class","relative group"),i(L,"id","entrenar-con-un-notebook"),i(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(L,"href","#entrenar-con-un-notebook"),i(z,"class","relative group"),i(se,"href","https://huggingface.co/docs/accelerate"),i(se,"rel","nofollow")},m(e,t){r(document.head,w),l(e,Ue,t),l(e,k,t),r(k,q),r(q,he),h(F,he,null),r(k,$a),r(k,_e),r(_e,ga),l(e,De,t),l(e,C,t),r(C,wa),r(C,B),r(B,ka),r(C,Ea),l(e,Le,t),l(e,E,t),r(E,S),r(S,ve),h(G,ve,null),r(E,ya),r(E,be),r(be,Aa),l(e,Me,t),l(e,ie,t),r(ie,Pa),l(e,Oe,t),h(W,e,t),l(e,Te,t),l(e,$,t),r($,ja),r($,I),r(I,$e),r($e,za),r($,qa),r($,ge),r(ge,Ca),r($,Sa),l(e,Fe,t),h(J,e,t),l(e,Be,t),l(e,y,t),r(y,N),r(N,we),h(R,we,null),r(y,Na),r(y,ke),r(ke,xa),l(e,Ge,t),l(e,x,t),r(x,Ha),r(x,K),r(K,Ee),r(Ee,Ua),r(x,Da),l(e,We,t),h(Q,e,t),l(e,Ie,t),l(e,A,t),r(A,H),r(H,ye),h(V,ye,null),r(A,La),r(A,Ae),r(Ae,Ma),l(e,Je,t),l(e,g,t),r(g,Oa),r(g,Pe),r(Pe,Ta),r(g,Fa),r(g,X),r(X,je),r(je,Ba),r(g,Ga),l(e,Re,t),h(Y,e,t),l(e,Ke,t),l(e,ce,t),r(ce,Wa),l(e,Qe,t),h(Z,e,t),l(e,Ve,t),l(e,P,t),r(P,U),r(U,ze),h(ee,ze,null),r(P,Ia),r(P,qe),r(qe,Ja),l(e,Xe,t),l(e,pe,t),r(pe,Ra),l(e,Ye,t),l(e,j,t),r(j,D),r(D,Ce),h(ae,Ce,null),r(j,Ka),r(j,Se),r(Se,Qa),l(e,Ze,t),l(e,de,t),r(de,Va),l(e,ea,t),h(re,e,t),l(e,aa,t),l(e,ue,t),r(ue,Xa),l(e,ra,t),h(te,e,t),l(e,ta,t),l(e,z,t),r(z,L),r(L,Ne),h(oe,Ne,null),r(z,Ya),r(z,xe),r(xe,Za),l(e,oa,t),l(e,M,t),r(M,er),r(M,He),r(He,ar),r(M,rr),l(e,na,t),h(ne,e,t),l(e,sa,t),l(e,O,t),r(O,tr),r(O,se),r(se,or),r(O,nr),la=!0},p:Kr,i(e){la||(_(F.$$.fragment,e),_(G.$$.fragment,e),_(W.$$.fragment,e),_(J.$$.fragment,e),_(R.$$.fragment,e),_(Q.$$.fragment,e),_(V.$$.fragment,e),_(Y.$$.fragment,e),_(Z.$$.fragment,e),_(ee.$$.fragment,e),_(ae.$$.fragment,e),_(re.$$.fragment,e),_(te.$$.fragment,e),_(oe.$$.fragment,e),_(ne.$$.fragment,e),la=!0)},o(e){v(F.$$.fragment,e),v(G.$$.fragment,e),v(W.$$.fragment,e),v(J.$$.fragment,e),v(R.$$.fragment,e),v(Q.$$.fragment,e),v(V.$$.fragment,e),v(Y.$$.fragment,e),v(Z.$$.fragment,e),v(ee.$$.fragment,e),v(ae.$$.fragment,e),v(re.$$.fragment,e),v(te.$$.fragment,e),v(oe.$$.fragment,e),v(ne.$$.fragment,e),la=!1},d(e){a(w),e&&a(Ue),e&&a(k),b(F),e&&a(De),e&&a(C),e&&a(Le),e&&a(E),b(G),e&&a(Me),e&&a(ie),e&&a(Oe),b(W,e),e&&a(Te),e&&a($),e&&a(Fe),b(J,e),e&&a(Be),e&&a(y),b(R),e&&a(Ge),e&&a(x),e&&a(We),b(Q,e),e&&a(Ie),e&&a(A),b(V),e&&a(Je),e&&a(g),e&&a(Re),b(Y,e),e&&a(Ke),e&&a(ce),e&&a(Qe),b(Z,e),e&&a(Ve),e&&a(P),b(ee),e&&a(Xe),e&&a(pe),e&&a(Ye),e&&a(j),b(ae),e&&a(Ze),e&&a(de),e&&a(ea),b(re,e),e&&a(aa),e&&a(ue),e&&a(ra),b(te,e),e&&a(ta),e&&a(z),b(oe),e&&a(oa),e&&a(M),e&&a(na),b(ne,e),e&&a(sa),e&&a(O)}}}const Xr={local:"entrenamiento-distribuido-con-accelerate",sections:[{local:"configuracin",title:"Configuraci\xF3n"},{local:"preprate-para-acelerar",title:"Prep\xE1rate para acelerar"},{local:"backward",title:"Backward"},{local:"entrenamiento",sections:[{local:"entrenar-con-un-script",title:"Entrenar con un script"},{local:"entrenar-con-un-notebook",title:"Entrenar con un notebook"}],title:"Entrenamiento"}],title:"Entrenamiento distribuido con \u{1F917} Accelerate"};function Yr(sr){return Qr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class rt extends Wr{constructor(w){super();Ir(this,w,Yr,Vr,Jr,{})}}export{rt as default,Xr as metadata};
