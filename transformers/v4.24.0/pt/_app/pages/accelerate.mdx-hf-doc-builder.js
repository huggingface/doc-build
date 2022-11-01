import{S as Wo,i as Qo,s as Jo,e as t,k as m,w as u,t as c,M as Ro,c as s,d as a,m as d,a as l,x as f,h as p,b as n,G as o,g as i,y as h,L as Ko,q as v,o as _,B as $,v as Vo}from"../chunks/vendor-hf-doc-builder.js";import{I as ie}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as M}from"../chunks/CodeBlock-hf-doc-builder.js";function Xo(lo){let w,Oe,k,S,he,U,ga,ve,ba,De,q,wa,F,ka,Aa,He,A,C,_e,B,Ea,$e,ja,Ge,ne,Pa,Le,I,Me,g,ya,W,ge,za,Sa,be,qa,Ca,Ue,Q,Fe,E,N,we,J,Na,ke,Ta,Be,T,xa,R,Ae,Oa,Da,Ie,K,We,j,x,Ee,V,Ha,je,Ga,Qe,b,La,Pe,Ma,Ua,X,ye,Fa,Ba,Je,Y,Re,ce,Ia,Ke,Z,Ve,P,O,ze,ee,Wa,Se,Qa,Xe,pe,Ja,Ye,y,D,qe,ae,Ra,Ce,Ka,Ze,me,Va,ea,oe,aa,de,Xa,oa,re,ra,z,H,Ne,te,Ya,Te,Za,ta,G,eo,xe,ao,oo,sa,se,la,L,ro,le,to,so,ia;return U=new ie({}),B=new ie({}),I=new M({props:{code:"pip install accelerate",highlighted:"pip install accelerate"}}),Q=new M({props:{code:`from accelerate import Accelerator

accelerator = Accelerator()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> Accelerator

<span class="hljs-meta">&gt;&gt;&gt; </span>accelerator = Accelerator()`}}),J=new ie({}),K=new M({props:{code:`train_dataloader, eval_dataloader, model, optimizer = accelerator.prepare(
    train_dataloader, eval_dataloader, model, optimizer
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataloader, eval_dataloader, model, optimizer = accelerator.prepare(
<span class="hljs-meta">... </span>    train_dataloader, eval_dataloader, model, optimizer
<span class="hljs-meta">... </span>)`}}),V=new ie({}),Y=new M({props:{code:`for epoch in range(num_epochs):
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
          progress_bar.update(1)`}}),ee=new ie({}),ae=new ie({}),oe=new M({props:{code:"accelerate config",highlighted:"accelerate config"}}),re=new M({props:{code:"accelerate launch train.py",highlighted:"accelerate launch train.py"}}),te=new ie({}),se=new M({props:{code:`from accelerate import notebook_launcher

notebook_launcher(training_function)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> notebook_launcher

<span class="hljs-meta">&gt;&gt;&gt; </span>notebook_launcher(training_function)`}}),{c(){w=t("meta"),Oe=m(),k=t("h1"),S=t("a"),he=t("span"),u(U.$$.fragment),ga=m(),ve=t("span"),ba=c("Treinamento distribu\xEDdo com o \u{1F917} Accelerate"),De=m(),q=t("p"),wa=c(`O paralelismo surgiu como uma estrat\xE9gia para treinar modelos grandes em hardware limitado e aumentar a velocidade
de treinamento em v\xE1rias \xF3rdens de magnitude. Na Hugging Face criamos a biblioteca `),F=t("a"),ka=c("\u{1F917} Accelerate"),Aa=c(`
para ajudar os usu\xE1rios a treinar modelos \u{1F917} Transformers com qualquer configura\xE7\xE3o distribu\xEDda, seja em uma m\xE1quina
com m\xFAltiplos GPUs ou em m\xFAltiplos GPUs distribuidos entre muitas m\xE1quinas. Neste tutorial, voc\xEA ir\xE1 aprender como
personalizar seu la\xE7o de treinamento de PyTorch para poder treinar em ambientes distribu\xEDdos.`),He=m(),A=t("h2"),C=t("a"),_e=t("span"),u(B.$$.fragment),Ea=m(),$e=t("span"),ja=c("Configura\xE7\xE3o"),Ge=m(),ne=t("p"),Pa=c("De in\xEDcio, instale o \u{1F917} Accelerate:"),Le=m(),u(I.$$.fragment),Me=m(),g=t("p"),ya=c("Logo, devemos importar e criar um objeto "),W=t("a"),ge=t("code"),za=c("Accelerator"),Sa=c(`.
O `),be=t("code"),qa=c("Accelerator"),Ca=c(` detectar\xE1 autom\xE1ticamente a configura\xE7\xE3o distribu\xEDda dispon\xEDvel e inicializar\xE1 todos os
componentes necess\xE1rios para o treinamento. N\xE3o h\xE1 necessidade portanto de especificar o dispositivo onde deve colocar seu modelo.`),Ue=m(),u(Q.$$.fragment),Fe=m(),E=t("h2"),N=t("a"),we=t("span"),u(J.$$.fragment),Na=m(),ke=t("span"),Ta=c("Preparando a acelera\xE7\xE3o"),Be=m(),T=t("p"),xa=c("Passe todos os objetos relevantes ao treinamento para o m\xE9todo "),R=t("a"),Ae=t("code"),Oa=c("prepare"),Da=c(`.
Isto inclui os DataLoaders de treino e evalua\xE7\xE3o, um modelo e um otimizador:`),Ie=m(),u(K.$$.fragment),We=m(),j=t("h2"),x=t("a"),Ee=t("span"),u(V.$$.fragment),Ha=m(),je=t("span"),Ga=c("Backward"),Qe=m(),b=t("p"),La=c("Por \xFAltimo, substitua o "),Pe=t("code"),Ma=c("loss.backward()"),Ua=c(" padr\xE3o em seu la\xE7o de treinamento com o m\xE9todo "),X=t("a"),ye=t("code"),Fa=c("backward"),Ba=c(" do \u{1F917} Accelerate:"),Je=m(),u(Y.$$.fragment),Re=m(),ce=t("p"),Ia=c(`Como se poder ver no seguinte c\xF3digo, s\xF3 precisar\xE1 adicionar quatro linhas de c\xF3digo ao seu la\xE7o de treinamento
para habilitar o treinamento distribu\xEDdo!`),Ke=m(),u(Z.$$.fragment),Ve=m(),P=t("h2"),O=t("a"),ze=t("span"),u(ee.$$.fragment),Wa=m(),Se=t("span"),Qa=c("Treinamento"),Xe=m(),pe=t("p"),Ja=c("Quando tiver adicionado as linhas de c\xF3digo relevantes, inicie o treinamento por um script ou notebook como o Colab."),Ye=m(),y=t("h3"),D=t("a"),qe=t("span"),u(ae.$$.fragment),Ra=m(),Ce=t("span"),Ka=c("Treinamento em um Script"),Ze=m(),me=t("p"),Va=c("Se estiver rodando seu treinamento em um Script, execute o seguinte comando para criar e guardar um arquivo de configura\xE7\xE3o:"),ea=m(),u(oe.$$.fragment),aa=m(),de=t("p"),Xa=c("Comece o treinamento com:"),oa=m(),u(re.$$.fragment),ra=m(),z=t("h3"),H=t("a"),Ne=t("span"),u(te.$$.fragment),Ya=m(),Te=t("span"),Za=c("Treinamento em um Notebook"),ta=m(),G=t("p"),eo=c(`O \u{1F917} Accelerate pode rodar em um notebook, por exemplo, se estiver planejando usar as TPUs do Google Colab.
Encapsule o c\xF3digo respons\xE1vel pelo treinamento de uma fun\xE7\xE3o e passe-o ao `),xe=t("code"),ao=c("notebook_launcher"),oo=c(":"),sa=m(),u(se.$$.fragment),la=m(),L=t("p"),ro=c("Para obter mais informa\xE7\xF5es sobre o \u{1F917} Accelerate e suas numerosas fun\xE7\xF5es, consulte a "),le=t("a"),to=c("documentaci\xF3n"),so=c("."),this.h()},l(e){const r=Ro('[data-svelte="svelte-1phssyn"]',document.head);w=s(r,"META",{name:!0,content:!0}),r.forEach(a),Oe=d(e),k=s(e,"H1",{class:!0});var na=l(k);S=s(na,"A",{id:!0,class:!0,href:!0});var io=l(S);he=s(io,"SPAN",{});var no=l(he);f(U.$$.fragment,no),no.forEach(a),io.forEach(a),ga=d(na),ve=s(na,"SPAN",{});var co=l(ve);ba=p(co,"Treinamento distribu\xEDdo com o \u{1F917} Accelerate"),co.forEach(a),na.forEach(a),De=d(e),q=s(e,"P",{});var ca=l(q);wa=p(ca,`O paralelismo surgiu como uma estrat\xE9gia para treinar modelos grandes em hardware limitado e aumentar a velocidade
de treinamento em v\xE1rias \xF3rdens de magnitude. Na Hugging Face criamos a biblioteca `),F=s(ca,"A",{href:!0,rel:!0});var po=l(F);ka=p(po,"\u{1F917} Accelerate"),po.forEach(a),Aa=p(ca,`
para ajudar os usu\xE1rios a treinar modelos \u{1F917} Transformers com qualquer configura\xE7\xE3o distribu\xEDda, seja em uma m\xE1quina
com m\xFAltiplos GPUs ou em m\xFAltiplos GPUs distribuidos entre muitas m\xE1quinas. Neste tutorial, voc\xEA ir\xE1 aprender como
personalizar seu la\xE7o de treinamento de PyTorch para poder treinar em ambientes distribu\xEDdos.`),ca.forEach(a),He=d(e),A=s(e,"H2",{class:!0});var pa=l(A);C=s(pa,"A",{id:!0,class:!0,href:!0});var mo=l(C);_e=s(mo,"SPAN",{});var uo=l(_e);f(B.$$.fragment,uo),uo.forEach(a),mo.forEach(a),Ea=d(pa),$e=s(pa,"SPAN",{});var fo=l($e);ja=p(fo,"Configura\xE7\xE3o"),fo.forEach(a),pa.forEach(a),Ge=d(e),ne=s(e,"P",{});var ho=l(ne);Pa=p(ho,"De in\xEDcio, instale o \u{1F917} Accelerate:"),ho.forEach(a),Le=d(e),f(I.$$.fragment,e),Me=d(e),g=s(e,"P",{});var ue=l(g);ya=p(ue,"Logo, devemos importar e criar um objeto "),W=s(ue,"A",{href:!0,rel:!0});var vo=l(W);ge=s(vo,"CODE",{});var _o=l(ge);za=p(_o,"Accelerator"),_o.forEach(a),vo.forEach(a),Sa=p(ue,`.
O `),be=s(ue,"CODE",{});var $o=l(be);qa=p($o,"Accelerator"),$o.forEach(a),Ca=p(ue,` detectar\xE1 autom\xE1ticamente a configura\xE7\xE3o distribu\xEDda dispon\xEDvel e inicializar\xE1 todos os
componentes necess\xE1rios para o treinamento. N\xE3o h\xE1 necessidade portanto de especificar o dispositivo onde deve colocar seu modelo.`),ue.forEach(a),Ue=d(e),f(Q.$$.fragment,e),Fe=d(e),E=s(e,"H2",{class:!0});var ma=l(E);N=s(ma,"A",{id:!0,class:!0,href:!0});var go=l(N);we=s(go,"SPAN",{});var bo=l(we);f(J.$$.fragment,bo),bo.forEach(a),go.forEach(a),Na=d(ma),ke=s(ma,"SPAN",{});var wo=l(ke);Ta=p(wo,"Preparando a acelera\xE7\xE3o"),wo.forEach(a),ma.forEach(a),Be=d(e),T=s(e,"P",{});var da=l(T);xa=p(da,"Passe todos os objetos relevantes ao treinamento para o m\xE9todo "),R=s(da,"A",{href:!0,rel:!0});var ko=l(R);Ae=s(ko,"CODE",{});var Ao=l(Ae);Oa=p(Ao,"prepare"),Ao.forEach(a),ko.forEach(a),Da=p(da,`.
Isto inclui os DataLoaders de treino e evalua\xE7\xE3o, um modelo e um otimizador:`),da.forEach(a),Ie=d(e),f(K.$$.fragment,e),We=d(e),j=s(e,"H2",{class:!0});var ua=l(j);x=s(ua,"A",{id:!0,class:!0,href:!0});var Eo=l(x);Ee=s(Eo,"SPAN",{});var jo=l(Ee);f(V.$$.fragment,jo),jo.forEach(a),Eo.forEach(a),Ha=d(ua),je=s(ua,"SPAN",{});var Po=l(je);Ga=p(Po,"Backward"),Po.forEach(a),ua.forEach(a),Qe=d(e),b=s(e,"P",{});var fe=l(b);La=p(fe,"Por \xFAltimo, substitua o "),Pe=s(fe,"CODE",{});var yo=l(Pe);Ma=p(yo,"loss.backward()"),yo.forEach(a),Ua=p(fe," padr\xE3o em seu la\xE7o de treinamento com o m\xE9todo "),X=s(fe,"A",{href:!0,rel:!0});var zo=l(X);ye=s(zo,"CODE",{});var So=l(ye);Fa=p(So,"backward"),So.forEach(a),zo.forEach(a),Ba=p(fe," do \u{1F917} Accelerate:"),fe.forEach(a),Je=d(e),f(Y.$$.fragment,e),Re=d(e),ce=s(e,"P",{});var qo=l(ce);Ia=p(qo,`Como se poder ver no seguinte c\xF3digo, s\xF3 precisar\xE1 adicionar quatro linhas de c\xF3digo ao seu la\xE7o de treinamento
para habilitar o treinamento distribu\xEDdo!`),qo.forEach(a),Ke=d(e),f(Z.$$.fragment,e),Ve=d(e),P=s(e,"H2",{class:!0});var fa=l(P);O=s(fa,"A",{id:!0,class:!0,href:!0});var Co=l(O);ze=s(Co,"SPAN",{});var No=l(ze);f(ee.$$.fragment,No),No.forEach(a),Co.forEach(a),Wa=d(fa),Se=s(fa,"SPAN",{});var To=l(Se);Qa=p(To,"Treinamento"),To.forEach(a),fa.forEach(a),Xe=d(e),pe=s(e,"P",{});var xo=l(pe);Ja=p(xo,"Quando tiver adicionado as linhas de c\xF3digo relevantes, inicie o treinamento por um script ou notebook como o Colab."),xo.forEach(a),Ye=d(e),y=s(e,"H3",{class:!0});var ha=l(y);D=s(ha,"A",{id:!0,class:!0,href:!0});var Oo=l(D);qe=s(Oo,"SPAN",{});var Do=l(qe);f(ae.$$.fragment,Do),Do.forEach(a),Oo.forEach(a),Ra=d(ha),Ce=s(ha,"SPAN",{});var Ho=l(Ce);Ka=p(Ho,"Treinamento em um Script"),Ho.forEach(a),ha.forEach(a),Ze=d(e),me=s(e,"P",{});var Go=l(me);Va=p(Go,"Se estiver rodando seu treinamento em um Script, execute o seguinte comando para criar e guardar um arquivo de configura\xE7\xE3o:"),Go.forEach(a),ea=d(e),f(oe.$$.fragment,e),aa=d(e),de=s(e,"P",{});var Lo=l(de);Xa=p(Lo,"Comece o treinamento com:"),Lo.forEach(a),oa=d(e),f(re.$$.fragment,e),ra=d(e),z=s(e,"H3",{class:!0});var va=l(z);H=s(va,"A",{id:!0,class:!0,href:!0});var Mo=l(H);Ne=s(Mo,"SPAN",{});var Uo=l(Ne);f(te.$$.fragment,Uo),Uo.forEach(a),Mo.forEach(a),Ya=d(va),Te=s(va,"SPAN",{});var Fo=l(Te);Za=p(Fo,"Treinamento em um Notebook"),Fo.forEach(a),va.forEach(a),ta=d(e),G=s(e,"P",{});var _a=l(G);eo=p(_a,`O \u{1F917} Accelerate pode rodar em um notebook, por exemplo, se estiver planejando usar as TPUs do Google Colab.
Encapsule o c\xF3digo respons\xE1vel pelo treinamento de uma fun\xE7\xE3o e passe-o ao `),xe=s(_a,"CODE",{});var Bo=l(xe);ao=p(Bo,"notebook_launcher"),Bo.forEach(a),oo=p(_a,":"),_a.forEach(a),sa=d(e),f(se.$$.fragment,e),la=d(e),L=s(e,"P",{});var $a=l(L);ro=p($a,"Para obter mais informa\xE7\xF5es sobre o \u{1F917} Accelerate e suas numerosas fun\xE7\xF5es, consulte a "),le=s($a,"A",{href:!0,rel:!0});var Io=l(le);to=p(Io,"documentaci\xF3n"),Io.forEach(a),so=p($a,"."),$a.forEach(a),this.h()},h(){n(w,"name","hf:doc:metadata"),n(w,"content",JSON.stringify(Yo)),n(S,"id","treinamento-distribudo-com-o-accelerate"),n(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(S,"href","#treinamento-distribudo-com-o-accelerate"),n(k,"class","relative group"),n(F,"href","https://huggingface.co/docs/accelerate"),n(F,"rel","nofollow"),n(C,"id","configurao"),n(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(C,"href","#configurao"),n(A,"class","relative group"),n(W,"href","https://huggingface.co/docs/accelerate/package_reference/accelerator#accelerate.Accelerator"),n(W,"rel","nofollow"),n(N,"id","preparando-a-acelerao"),n(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(N,"href","#preparando-a-acelerao"),n(E,"class","relative group"),n(R,"href","https://huggingface.co/docs/accelerate/package_reference/accelerator#accelerate.Accelerator.prepare"),n(R,"rel","nofollow"),n(x,"id","backward"),n(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(x,"href","#backward"),n(j,"class","relative group"),n(X,"href","https://huggingface.co/docs/accelerate/package_reference/accelerator#accelerate.Accelerator.backward"),n(X,"rel","nofollow"),n(O,"id","treinamento"),n(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(O,"href","#treinamento"),n(P,"class","relative group"),n(D,"id","treinamento-em-um-script"),n(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(D,"href","#treinamento-em-um-script"),n(y,"class","relative group"),n(H,"id","treinamento-em-um-notebook"),n(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(H,"href","#treinamento-em-um-notebook"),n(z,"class","relative group"),n(le,"href","https://huggingface.co/docs/accelerate/index"),n(le,"rel","nofollow")},m(e,r){o(document.head,w),i(e,Oe,r),i(e,k,r),o(k,S),o(S,he),h(U,he,null),o(k,ga),o(k,ve),o(ve,ba),i(e,De,r),i(e,q,r),o(q,wa),o(q,F),o(F,ka),o(q,Aa),i(e,He,r),i(e,A,r),o(A,C),o(C,_e),h(B,_e,null),o(A,Ea),o(A,$e),o($e,ja),i(e,Ge,r),i(e,ne,r),o(ne,Pa),i(e,Le,r),h(I,e,r),i(e,Me,r),i(e,g,r),o(g,ya),o(g,W),o(W,ge),o(ge,za),o(g,Sa),o(g,be),o(be,qa),o(g,Ca),i(e,Ue,r),h(Q,e,r),i(e,Fe,r),i(e,E,r),o(E,N),o(N,we),h(J,we,null),o(E,Na),o(E,ke),o(ke,Ta),i(e,Be,r),i(e,T,r),o(T,xa),o(T,R),o(R,Ae),o(Ae,Oa),o(T,Da),i(e,Ie,r),h(K,e,r),i(e,We,r),i(e,j,r),o(j,x),o(x,Ee),h(V,Ee,null),o(j,Ha),o(j,je),o(je,Ga),i(e,Qe,r),i(e,b,r),o(b,La),o(b,Pe),o(Pe,Ma),o(b,Ua),o(b,X),o(X,ye),o(ye,Fa),o(b,Ba),i(e,Je,r),h(Y,e,r),i(e,Re,r),i(e,ce,r),o(ce,Ia),i(e,Ke,r),h(Z,e,r),i(e,Ve,r),i(e,P,r),o(P,O),o(O,ze),h(ee,ze,null),o(P,Wa),o(P,Se),o(Se,Qa),i(e,Xe,r),i(e,pe,r),o(pe,Ja),i(e,Ye,r),i(e,y,r),o(y,D),o(D,qe),h(ae,qe,null),o(y,Ra),o(y,Ce),o(Ce,Ka),i(e,Ze,r),i(e,me,r),o(me,Va),i(e,ea,r),h(oe,e,r),i(e,aa,r),i(e,de,r),o(de,Xa),i(e,oa,r),h(re,e,r),i(e,ra,r),i(e,z,r),o(z,H),o(H,Ne),h(te,Ne,null),o(z,Ya),o(z,Te),o(Te,Za),i(e,ta,r),i(e,G,r),o(G,eo),o(G,xe),o(xe,ao),o(G,oo),i(e,sa,r),h(se,e,r),i(e,la,r),i(e,L,r),o(L,ro),o(L,le),o(le,to),o(L,so),ia=!0},p:Ko,i(e){ia||(v(U.$$.fragment,e),v(B.$$.fragment,e),v(I.$$.fragment,e),v(Q.$$.fragment,e),v(J.$$.fragment,e),v(K.$$.fragment,e),v(V.$$.fragment,e),v(Y.$$.fragment,e),v(Z.$$.fragment,e),v(ee.$$.fragment,e),v(ae.$$.fragment,e),v(oe.$$.fragment,e),v(re.$$.fragment,e),v(te.$$.fragment,e),v(se.$$.fragment,e),ia=!0)},o(e){_(U.$$.fragment,e),_(B.$$.fragment,e),_(I.$$.fragment,e),_(Q.$$.fragment,e),_(J.$$.fragment,e),_(K.$$.fragment,e),_(V.$$.fragment,e),_(Y.$$.fragment,e),_(Z.$$.fragment,e),_(ee.$$.fragment,e),_(ae.$$.fragment,e),_(oe.$$.fragment,e),_(re.$$.fragment,e),_(te.$$.fragment,e),_(se.$$.fragment,e),ia=!1},d(e){a(w),e&&a(Oe),e&&a(k),$(U),e&&a(De),e&&a(q),e&&a(He),e&&a(A),$(B),e&&a(Ge),e&&a(ne),e&&a(Le),$(I,e),e&&a(Me),e&&a(g),e&&a(Ue),$(Q,e),e&&a(Fe),e&&a(E),$(J),e&&a(Be),e&&a(T),e&&a(Ie),$(K,e),e&&a(We),e&&a(j),$(V),e&&a(Qe),e&&a(b),e&&a(Je),$(Y,e),e&&a(Re),e&&a(ce),e&&a(Ke),$(Z,e),e&&a(Ve),e&&a(P),$(ee),e&&a(Xe),e&&a(pe),e&&a(Ye),e&&a(y),$(ae),e&&a(Ze),e&&a(me),e&&a(ea),$(oe,e),e&&a(aa),e&&a(de),e&&a(oa),$(re,e),e&&a(ra),e&&a(z),$(te),e&&a(ta),e&&a(G),e&&a(sa),$(se,e),e&&a(la),e&&a(L)}}}const Yo={local:"treinamento-distribudo-com-o-accelerate",sections:[{local:"configurao",title:"Configura\xE7\xE3o"},{local:"preparando-a-acelerao",title:"Preparando a acelera\xE7\xE3o"},{local:"backward",title:"Backward"},{local:"treinamento",sections:[{local:"treinamento-em-um-script",title:"Treinamento em um Script"},{local:"treinamento-em-um-notebook",title:"Treinamento em um Notebook"}],title:"Treinamento"}],title:"Treinamento distribu\xEDdo com o \u{1F917} Accelerate"};function Zo(lo){return Vo(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class rr extends Wo{constructor(w){super();Qo(this,w,Zo,Xo,Jo,{})}}export{rr as default,Yo as metadata};
