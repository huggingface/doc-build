import{S as _s,i as ks,s as bs,e as t,k as h,w as v,t as o,L as ws,c as s,d as l,m as g,a as n,x as E,h as r,b as m,J as a,g as d,y as _,K as $s,q as k,o as b,B as w}from"../chunks/vendor-e859c359.js";import{I as Le}from"../chunks/IconCopyLink-5fae3b20.js";import{C as al}from"../chunks/CodeBlock-ce4317c2.js";import"../chunks/CopyButton-77addb3d.js";function xs(Gl){let $,Z,f,c,ye,D,Ul,Te,Jl,tl,ee,Yl,sl,M,C,Xe,S,Kl,Ce,Ql,nl,le,Vl,il,L,j,je,H,Zl,Pe,ea,ol,ae,la,rl,u,te,ze,aa,ta,sa,se,qe,na,ia,oa,ne,Re,ra,da,ha,ie,Ae,ga,ma,ua,oe,Ie,pa,fa,ca,re,Ne,va,Ea,_a,de,Be,ka,ba,dl,x,wa,Oe,$a,xa,De,Ma,La,hl,P,ya,Se,Ta,Xa,gl,W,ml,z,Ca,He,ja,Pa,ul,F,pl,he,za,fl,G,cl,ge,qa,vl,U,El,me,Ra,_l,J,kl,q,Aa,Y,Ia,Na,bl,y,R,We,K,Ba,Fe,Oa,wl,ue,Da,$l,A,pe,Ge,Sa,Ha,Wa,fe,Ue,Fa,Ga,xl,ce,Ua,Ml,T,I,Je,Q,Ja,Ye,Ya,Ll,ve,Ka,yl,N,Ee,Ke,Qa,Va,Za,_e,Qe,et,lt,Tl,ke,at,Xl,X,B,Ve,V,tt,Ze,st,Cl,be,nt,jl,we,it,Pl,O,$e,el,ot,rt,dt,xe,ll,ht,gt,zl;return D=new Le({}),S=new Le({}),H=new Le({}),W=new al({props:{code:`import torch
from transformers import XLMTokenizer, XLMWithLMHeadModel

tokenizer = XLMTokenizer.from_pretrained("xlm-clm-enfr-1024")
model = XLMWithLMHeadModel.from_pretrained("xlm-clm-enfr-1024"),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, XLMWithLMHeadModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-clm-enfr-1024&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMWithLMHeadModel.from_pretrained(<span class="hljs-string">&quot;xlm-clm-enfr-1024&quot;</span>)`}}),F=new al({props:{code:"print(tokenizer.lang2id),",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.lang2id)
{<span class="hljs-string">&#x27;en&#x27;</span>: <span class="hljs-number">0</span>, <span class="hljs-string">&#x27;fr&#x27;</span>: <span class="hljs-number">1</span>}`}}),G=new al({props:{code:'input_ids = torch.tensor([tokenizer.encode("Wikipedia was used to")]) # batch size of 1,',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor([tokenizer.encode(<span class="hljs-string">&quot;Wikipedia was used to&quot;</span>)]) <span class="hljs-comment"># batch size of 1</span>'}}),U=new al({props:{code:`language_id = tokenizer.lang2id['en']  # 0
langs = torch.tensor([language_id] * input_ids.shape[1])  # torch.tensor([0, 0, 0, ..., 0])

# We reshape it to be of size (batch_size, sequence_length)
langs = langs.view(1, -1) # is now of shape [1, sequence_length] (we have a batch size of 1),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>language_id = tokenizer.lang2id[<span class="hljs-string">&#x27;en&#x27;</span>]  <span class="hljs-comment"># 0</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>langs = torch.tensor([language_id] * input_ids.shape[<span class="hljs-number">1</span>])  <span class="hljs-comment"># torch.tensor([0, 0, 0, ..., 0])</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># We reshape it to be of size (batch_size, sequence_length)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>langs = langs.view(<span class="hljs-number">1</span>, -<span class="hljs-number">1</span>) <span class="hljs-comment"># is now of shape [1, sequence_length] (we have a batch size of 1)</span>`}}),J=new al({props:{code:"outputs = model(input_ids, langs=langs),",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, langs=langs)'}}),K=new Le({}),Q=new Le({}),V=new Le({}),{c(){$=t("meta"),Z=h(),f=t("h1"),c=t("a"),ye=t("span"),v(D.$$.fragment),Ul=h(),Te=t("span"),Jl=o("Multi-lingual models"),tl=h(),ee=t("p"),Yl=o(`Most of the models available in this library are mono-lingual models (English, Chinese and German). A few multi-lingual
models are available and have a different mechanisms than mono-lingual models. This page details the usage of these
models.`),sl=h(),M=t("h2"),C=t("a"),Xe=t("span"),v(S.$$.fragment),Kl=h(),Ce=t("span"),Ql=o("XLM"),nl=h(),le=t("p"),Vl=o(`XLM has a total of 10 different checkpoints, only one of which is mono-lingual. The 9 remaining model checkpoints can
be split in two categories: the checkpoints that make use of language embeddings, and those that don\u2019t`),il=h(),L=t("h3"),j=t("a"),je=t("span"),v(H.$$.fragment),Zl=h(),Pe=t("span"),ea=o("XLM & Language Embeddings"),ol=h(),ae=t("p"),la=o("This section concerns the following checkpoints:"),rl=h(),u=t("ul"),te=t("li"),ze=t("code"),aa=o("xlm-mlm-ende-1024"),ta=o(" (Masked language modeling, English-German)"),sa=h(),se=t("li"),qe=t("code"),na=o("xlm-mlm-enfr-1024"),ia=o(" (Masked language modeling, English-French)"),oa=h(),ne=t("li"),Re=t("code"),ra=o("xlm-mlm-enro-1024"),da=o(" (Masked language modeling, English-Romanian)"),ha=h(),ie=t("li"),Ae=t("code"),ga=o("xlm-mlm-xnli15-1024"),ma=o(" (Masked language modeling, XNLI languages)"),ua=h(),oe=t("li"),Ie=t("code"),pa=o("xlm-mlm-tlm-xnli15-1024"),fa=o(" (Masked language modeling + Translation, XNLI languages)"),ca=h(),re=t("li"),Ne=t("code"),va=o("xlm-clm-enfr-1024"),Ea=o(" (Causal language modeling, English-French)"),_a=h(),de=t("li"),Be=t("code"),ka=o("xlm-clm-ende-1024"),ba=o(" (Causal language modeling, English-German)"),dl=h(),x=t("p"),wa=o(`These checkpoints require language embeddings that will specify the language used at inference time. These language
embeddings are represented as a tensor that is of the same shape as the input ids passed to the model. The values in
these tensors depend on the language used and are identifiable using the `),Oe=t("code"),$a=o("lang2id"),xa=o(" and "),De=t("code"),Ma=o("id2lang"),La=o(` attributes from
the tokenizer.`),hl=h(),P=t("p"),ya=o("Here is an example using the "),Se=t("code"),Ta=o("xlm-clm-enfr-1024"),Xa=o(" checkpoint (Causal language modeling, English-French):"),gl=h(),v(W.$$.fragment),ml=h(),z=t("p"),Ca=o(`The different languages this model/tokenizer handles, as well as the ids of these languages are visible using the
`),He=t("code"),ja=o("lang2id"),Pa=o(" attribute:"),ul=h(),v(F.$$.fragment),pl=h(),he=t("p"),za=o("These ids should be used when passing a language parameter during a model pass. Let\u2019s define our inputs:"),fl=h(),v(G.$$.fragment),cl=h(),ge=t("p"),qa=o(`We should now define the language embedding by using the previously defined language id. We want to create a tensor
filled with the appropriate language ids, of the same size as input_ids. For english, the id is 0:`),vl=h(),v(U.$$.fragment),El=h(),me=t("p"),Ra=o("You can then feed it all as input to your model:"),_l=h(),v(J.$$.fragment),kl=h(),q=t("p"),Aa=o("The example "),Y=t("a"),Ia=o("run_generation.py"),Na=o(` can generate text
using the CLM checkpoints from XLM, using the language embeddings.`),bl=h(),y=t("h3"),R=t("a"),We=t("span"),v(K.$$.fragment),Ba=h(),Fe=t("span"),Oa=o("XLM without Language Embeddings"),wl=h(),ue=t("p"),Da=o("This section concerns the following checkpoints:"),$l=h(),A=t("ul"),pe=t("li"),Ge=t("code"),Sa=o("xlm-mlm-17-1280"),Ha=o(" (Masked language modeling, 17 languages)"),Wa=h(),fe=t("li"),Ue=t("code"),Fa=o("xlm-mlm-100-1280"),Ga=o(" (Masked language modeling, 100 languages)"),xl=h(),ce=t("p"),Ua=o(`These checkpoints do not require language embeddings at inference time. These models are used to have generic sentence
representations, differently from previously-mentioned XLM checkpoints.`),Ml=h(),T=t("h2"),I=t("a"),Je=t("span"),v(Q.$$.fragment),Ja=h(),Ye=t("span"),Ya=o("BERT"),Ll=h(),ve=t("p"),Ka=o("BERT has two checkpoints that can be used for multi-lingual tasks:"),yl=h(),N=t("ul"),Ee=t("li"),Ke=t("code"),Qa=o("bert-base-multilingual-uncased"),Va=o(" (Masked language modeling + Next sentence prediction, 102 languages)"),Za=h(),_e=t("li"),Qe=t("code"),et=o("bert-base-multilingual-cased"),lt=o(" (Masked language modeling + Next sentence prediction, 104 languages)"),Tl=h(),ke=t("p"),at=o(`These checkpoints do not require language embeddings at inference time. They should identify the language used in the
context and infer accordingly.`),Xl=h(),X=t("h2"),B=t("a"),Ve=t("span"),v(V.$$.fragment),tt=h(),Ze=t("span"),st=o("XLM-RoBERTa"),Cl=h(),be=t("p"),nt=o(`XLM-RoBERTa was trained on 2.5TB of newly created clean CommonCrawl data in 100 languages. It provides strong gains
over previously released multi-lingual models like mBERT or XLM on downstream tasks like classification, sequence
labeling and question answering.`),jl=h(),we=t("p"),it=o("Two XLM-RoBERTa checkpoints can be used for multi-lingual tasks:"),Pl=h(),O=t("ul"),$e=t("li"),el=t("code"),ot=o("xlm-roberta-base"),rt=o(" (Masked language modeling, 100 languages)"),dt=h(),xe=t("li"),ll=t("code"),ht=o("xlm-roberta-large"),gt=o(" (Masked language modeling, 100 languages)"),this.h()},l(e){const i=ws('[data-svelte="svelte-1phssyn"]',document.head);$=s(i,"META",{name:!0,content:!0}),i.forEach(l),Z=g(e),f=s(e,"H1",{class:!0});var ql=n(f);c=s(ql,"A",{id:!0,class:!0,href:!0});var Mt=n(c);ye=s(Mt,"SPAN",{});var Lt=n(ye);E(D.$$.fragment,Lt),Lt.forEach(l),Mt.forEach(l),Ul=g(ql),Te=s(ql,"SPAN",{});var yt=n(Te);Jl=r(yt,"Multi-lingual models"),yt.forEach(l),ql.forEach(l),tl=g(e),ee=s(e,"P",{});var Tt=n(ee);Yl=r(Tt,`Most of the models available in this library are mono-lingual models (English, Chinese and German). A few multi-lingual
models are available and have a different mechanisms than mono-lingual models. This page details the usage of these
models.`),Tt.forEach(l),sl=g(e),M=s(e,"H2",{class:!0});var Rl=n(M);C=s(Rl,"A",{id:!0,class:!0,href:!0});var Xt=n(C);Xe=s(Xt,"SPAN",{});var Ct=n(Xe);E(S.$$.fragment,Ct),Ct.forEach(l),Xt.forEach(l),Kl=g(Rl),Ce=s(Rl,"SPAN",{});var jt=n(Ce);Ql=r(jt,"XLM"),jt.forEach(l),Rl.forEach(l),nl=g(e),le=s(e,"P",{});var Pt=n(le);Vl=r(Pt,`XLM has a total of 10 different checkpoints, only one of which is mono-lingual. The 9 remaining model checkpoints can
be split in two categories: the checkpoints that make use of language embeddings, and those that don\u2019t`),Pt.forEach(l),il=g(e),L=s(e,"H3",{class:!0});var Al=n(L);j=s(Al,"A",{id:!0,class:!0,href:!0});var zt=n(j);je=s(zt,"SPAN",{});var qt=n(je);E(H.$$.fragment,qt),qt.forEach(l),zt.forEach(l),Zl=g(Al),Pe=s(Al,"SPAN",{});var Rt=n(Pe);ea=r(Rt,"XLM & Language Embeddings"),Rt.forEach(l),Al.forEach(l),ol=g(e),ae=s(e,"P",{});var At=n(ae);la=r(At,"This section concerns the following checkpoints:"),At.forEach(l),rl=g(e),u=s(e,"UL",{});var p=n(u);te=s(p,"LI",{});var mt=n(te);ze=s(mt,"CODE",{});var It=n(ze);aa=r(It,"xlm-mlm-ende-1024"),It.forEach(l),ta=r(mt," (Masked language modeling, English-German)"),mt.forEach(l),sa=g(p),se=s(p,"LI",{});var ut=n(se);qe=s(ut,"CODE",{});var Nt=n(qe);na=r(Nt,"xlm-mlm-enfr-1024"),Nt.forEach(l),ia=r(ut," (Masked language modeling, English-French)"),ut.forEach(l),oa=g(p),ne=s(p,"LI",{});var pt=n(ne);Re=s(pt,"CODE",{});var Bt=n(Re);ra=r(Bt,"xlm-mlm-enro-1024"),Bt.forEach(l),da=r(pt," (Masked language modeling, English-Romanian)"),pt.forEach(l),ha=g(p),ie=s(p,"LI",{});var ft=n(ie);Ae=s(ft,"CODE",{});var Ot=n(Ae);ga=r(Ot,"xlm-mlm-xnli15-1024"),Ot.forEach(l),ma=r(ft," (Masked language modeling, XNLI languages)"),ft.forEach(l),ua=g(p),oe=s(p,"LI",{});var ct=n(oe);Ie=s(ct,"CODE",{});var Dt=n(Ie);pa=r(Dt,"xlm-mlm-tlm-xnli15-1024"),Dt.forEach(l),fa=r(ct," (Masked language modeling + Translation, XNLI languages)"),ct.forEach(l),ca=g(p),re=s(p,"LI",{});var vt=n(re);Ne=s(vt,"CODE",{});var St=n(Ne);va=r(St,"xlm-clm-enfr-1024"),St.forEach(l),Ea=r(vt," (Causal language modeling, English-French)"),vt.forEach(l),_a=g(p),de=s(p,"LI",{});var Et=n(de);Be=s(Et,"CODE",{});var Ht=n(Be);ka=r(Ht,"xlm-clm-ende-1024"),Ht.forEach(l),ba=r(Et," (Causal language modeling, English-German)"),Et.forEach(l),p.forEach(l),dl=g(e),x=s(e,"P",{});var Me=n(x);wa=r(Me,`These checkpoints require language embeddings that will specify the language used at inference time. These language
embeddings are represented as a tensor that is of the same shape as the input ids passed to the model. The values in
these tensors depend on the language used and are identifiable using the `),Oe=s(Me,"CODE",{});var Wt=n(Oe);$a=r(Wt,"lang2id"),Wt.forEach(l),xa=r(Me," and "),De=s(Me,"CODE",{});var Ft=n(De);Ma=r(Ft,"id2lang"),Ft.forEach(l),La=r(Me,` attributes from
the tokenizer.`),Me.forEach(l),hl=g(e),P=s(e,"P",{});var Il=n(P);ya=r(Il,"Here is an example using the "),Se=s(Il,"CODE",{});var Gt=n(Se);Ta=r(Gt,"xlm-clm-enfr-1024"),Gt.forEach(l),Xa=r(Il," checkpoint (Causal language modeling, English-French):"),Il.forEach(l),gl=g(e),E(W.$$.fragment,e),ml=g(e),z=s(e,"P",{});var Nl=n(z);Ca=r(Nl,`The different languages this model/tokenizer handles, as well as the ids of these languages are visible using the
`),He=s(Nl,"CODE",{});var Ut=n(He);ja=r(Ut,"lang2id"),Ut.forEach(l),Pa=r(Nl," attribute:"),Nl.forEach(l),ul=g(e),E(F.$$.fragment,e),pl=g(e),he=s(e,"P",{});var Jt=n(he);za=r(Jt,"These ids should be used when passing a language parameter during a model pass. Let\u2019s define our inputs:"),Jt.forEach(l),fl=g(e),E(G.$$.fragment,e),cl=g(e),ge=s(e,"P",{});var Yt=n(ge);qa=r(Yt,`We should now define the language embedding by using the previously defined language id. We want to create a tensor
filled with the appropriate language ids, of the same size as input_ids. For english, the id is 0:`),Yt.forEach(l),vl=g(e),E(U.$$.fragment,e),El=g(e),me=s(e,"P",{});var Kt=n(me);Ra=r(Kt,"You can then feed it all as input to your model:"),Kt.forEach(l),_l=g(e),E(J.$$.fragment,e),kl=g(e),q=s(e,"P",{});var Bl=n(q);Aa=r(Bl,"The example "),Y=s(Bl,"A",{href:!0,rel:!0});var Qt=n(Y);Ia=r(Qt,"run_generation.py"),Qt.forEach(l),Na=r(Bl,` can generate text
using the CLM checkpoints from XLM, using the language embeddings.`),Bl.forEach(l),bl=g(e),y=s(e,"H3",{class:!0});var Ol=n(y);R=s(Ol,"A",{id:!0,class:!0,href:!0});var Vt=n(R);We=s(Vt,"SPAN",{});var Zt=n(We);E(K.$$.fragment,Zt),Zt.forEach(l),Vt.forEach(l),Ba=g(Ol),Fe=s(Ol,"SPAN",{});var es=n(Fe);Oa=r(es,"XLM without Language Embeddings"),es.forEach(l),Ol.forEach(l),wl=g(e),ue=s(e,"P",{});var ls=n(ue);Da=r(ls,"This section concerns the following checkpoints:"),ls.forEach(l),$l=g(e),A=s(e,"UL",{});var Dl=n(A);pe=s(Dl,"LI",{});var _t=n(pe);Ge=s(_t,"CODE",{});var as=n(Ge);Sa=r(as,"xlm-mlm-17-1280"),as.forEach(l),Ha=r(_t," (Masked language modeling, 17 languages)"),_t.forEach(l),Wa=g(Dl),fe=s(Dl,"LI",{});var kt=n(fe);Ue=s(kt,"CODE",{});var ts=n(Ue);Fa=r(ts,"xlm-mlm-100-1280"),ts.forEach(l),Ga=r(kt," (Masked language modeling, 100 languages)"),kt.forEach(l),Dl.forEach(l),xl=g(e),ce=s(e,"P",{});var ss=n(ce);Ua=r(ss,`These checkpoints do not require language embeddings at inference time. These models are used to have generic sentence
representations, differently from previously-mentioned XLM checkpoints.`),ss.forEach(l),Ml=g(e),T=s(e,"H2",{class:!0});var Sl=n(T);I=s(Sl,"A",{id:!0,class:!0,href:!0});var ns=n(I);Je=s(ns,"SPAN",{});var is=n(Je);E(Q.$$.fragment,is),is.forEach(l),ns.forEach(l),Ja=g(Sl),Ye=s(Sl,"SPAN",{});var os=n(Ye);Ya=r(os,"BERT"),os.forEach(l),Sl.forEach(l),Ll=g(e),ve=s(e,"P",{});var rs=n(ve);Ka=r(rs,"BERT has two checkpoints that can be used for multi-lingual tasks:"),rs.forEach(l),yl=g(e),N=s(e,"UL",{});var Hl=n(N);Ee=s(Hl,"LI",{});var bt=n(Ee);Ke=s(bt,"CODE",{});var ds=n(Ke);Qa=r(ds,"bert-base-multilingual-uncased"),ds.forEach(l),Va=r(bt," (Masked language modeling + Next sentence prediction, 102 languages)"),bt.forEach(l),Za=g(Hl),_e=s(Hl,"LI",{});var wt=n(_e);Qe=s(wt,"CODE",{});var hs=n(Qe);et=r(hs,"bert-base-multilingual-cased"),hs.forEach(l),lt=r(wt," (Masked language modeling + Next sentence prediction, 104 languages)"),wt.forEach(l),Hl.forEach(l),Tl=g(e),ke=s(e,"P",{});var gs=n(ke);at=r(gs,`These checkpoints do not require language embeddings at inference time. They should identify the language used in the
context and infer accordingly.`),gs.forEach(l),Xl=g(e),X=s(e,"H2",{class:!0});var Wl=n(X);B=s(Wl,"A",{id:!0,class:!0,href:!0});var ms=n(B);Ve=s(ms,"SPAN",{});var us=n(Ve);E(V.$$.fragment,us),us.forEach(l),ms.forEach(l),tt=g(Wl),Ze=s(Wl,"SPAN",{});var ps=n(Ze);st=r(ps,"XLM-RoBERTa"),ps.forEach(l),Wl.forEach(l),Cl=g(e),be=s(e,"P",{});var fs=n(be);nt=r(fs,`XLM-RoBERTa was trained on 2.5TB of newly created clean CommonCrawl data in 100 languages. It provides strong gains
over previously released multi-lingual models like mBERT or XLM on downstream tasks like classification, sequence
labeling and question answering.`),fs.forEach(l),jl=g(e),we=s(e,"P",{});var cs=n(we);it=r(cs,"Two XLM-RoBERTa checkpoints can be used for multi-lingual tasks:"),cs.forEach(l),Pl=g(e),O=s(e,"UL",{});var Fl=n(O);$e=s(Fl,"LI",{});var $t=n($e);el=s($t,"CODE",{});var vs=n(el);ot=r(vs,"xlm-roberta-base"),vs.forEach(l),rt=r($t," (Masked language modeling, 100 languages)"),$t.forEach(l),dt=g(Fl),xe=s(Fl,"LI",{});var xt=n(xe);ll=s(xt,"CODE",{});var Es=n(ll);ht=r(Es,"xlm-roberta-large"),Es.forEach(l),gt=r(xt," (Masked language modeling, 100 languages)"),xt.forEach(l),Fl.forEach(l),this.h()},h(){m($,"name","hf:doc:metadata"),m($,"content",JSON.stringify(Ms)),m(c,"id","multilingual-models"),m(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(c,"href","#multilingual-models"),m(f,"class","relative group"),m(C,"id","xlm"),m(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(C,"href","#xlm"),m(M,"class","relative group"),m(j,"id","xlm-language-embeddings"),m(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(j,"href","#xlm-language-embeddings"),m(L,"class","relative group"),m(Y,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/text-generation/run_generation.py"),m(Y,"rel","nofollow"),m(R,"id","xlm-without-language-embeddings"),m(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(R,"href","#xlm-without-language-embeddings"),m(y,"class","relative group"),m(I,"id","bert"),m(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(I,"href","#bert"),m(T,"class","relative group"),m(B,"id","xlmroberta"),m(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(B,"href","#xlmroberta"),m(X,"class","relative group")},m(e,i){a(document.head,$),d(e,Z,i),d(e,f,i),a(f,c),a(c,ye),_(D,ye,null),a(f,Ul),a(f,Te),a(Te,Jl),d(e,tl,i),d(e,ee,i),a(ee,Yl),d(e,sl,i),d(e,M,i),a(M,C),a(C,Xe),_(S,Xe,null),a(M,Kl),a(M,Ce),a(Ce,Ql),d(e,nl,i),d(e,le,i),a(le,Vl),d(e,il,i),d(e,L,i),a(L,j),a(j,je),_(H,je,null),a(L,Zl),a(L,Pe),a(Pe,ea),d(e,ol,i),d(e,ae,i),a(ae,la),d(e,rl,i),d(e,u,i),a(u,te),a(te,ze),a(ze,aa),a(te,ta),a(u,sa),a(u,se),a(se,qe),a(qe,na),a(se,ia),a(u,oa),a(u,ne),a(ne,Re),a(Re,ra),a(ne,da),a(u,ha),a(u,ie),a(ie,Ae),a(Ae,ga),a(ie,ma),a(u,ua),a(u,oe),a(oe,Ie),a(Ie,pa),a(oe,fa),a(u,ca),a(u,re),a(re,Ne),a(Ne,va),a(re,Ea),a(u,_a),a(u,de),a(de,Be),a(Be,ka),a(de,ba),d(e,dl,i),d(e,x,i),a(x,wa),a(x,Oe),a(Oe,$a),a(x,xa),a(x,De),a(De,Ma),a(x,La),d(e,hl,i),d(e,P,i),a(P,ya),a(P,Se),a(Se,Ta),a(P,Xa),d(e,gl,i),_(W,e,i),d(e,ml,i),d(e,z,i),a(z,Ca),a(z,He),a(He,ja),a(z,Pa),d(e,ul,i),_(F,e,i),d(e,pl,i),d(e,he,i),a(he,za),d(e,fl,i),_(G,e,i),d(e,cl,i),d(e,ge,i),a(ge,qa),d(e,vl,i),_(U,e,i),d(e,El,i),d(e,me,i),a(me,Ra),d(e,_l,i),_(J,e,i),d(e,kl,i),d(e,q,i),a(q,Aa),a(q,Y),a(Y,Ia),a(q,Na),d(e,bl,i),d(e,y,i),a(y,R),a(R,We),_(K,We,null),a(y,Ba),a(y,Fe),a(Fe,Oa),d(e,wl,i),d(e,ue,i),a(ue,Da),d(e,$l,i),d(e,A,i),a(A,pe),a(pe,Ge),a(Ge,Sa),a(pe,Ha),a(A,Wa),a(A,fe),a(fe,Ue),a(Ue,Fa),a(fe,Ga),d(e,xl,i),d(e,ce,i),a(ce,Ua),d(e,Ml,i),d(e,T,i),a(T,I),a(I,Je),_(Q,Je,null),a(T,Ja),a(T,Ye),a(Ye,Ya),d(e,Ll,i),d(e,ve,i),a(ve,Ka),d(e,yl,i),d(e,N,i),a(N,Ee),a(Ee,Ke),a(Ke,Qa),a(Ee,Va),a(N,Za),a(N,_e),a(_e,Qe),a(Qe,et),a(_e,lt),d(e,Tl,i),d(e,ke,i),a(ke,at),d(e,Xl,i),d(e,X,i),a(X,B),a(B,Ve),_(V,Ve,null),a(X,tt),a(X,Ze),a(Ze,st),d(e,Cl,i),d(e,be,i),a(be,nt),d(e,jl,i),d(e,we,i),a(we,it),d(e,Pl,i),d(e,O,i),a(O,$e),a($e,el),a(el,ot),a($e,rt),a(O,dt),a(O,xe),a(xe,ll),a(ll,ht),a(xe,gt),zl=!0},p:$s,i(e){zl||(k(D.$$.fragment,e),k(S.$$.fragment,e),k(H.$$.fragment,e),k(W.$$.fragment,e),k(F.$$.fragment,e),k(G.$$.fragment,e),k(U.$$.fragment,e),k(J.$$.fragment,e),k(K.$$.fragment,e),k(Q.$$.fragment,e),k(V.$$.fragment,e),zl=!0)},o(e){b(D.$$.fragment,e),b(S.$$.fragment,e),b(H.$$.fragment,e),b(W.$$.fragment,e),b(F.$$.fragment,e),b(G.$$.fragment,e),b(U.$$.fragment,e),b(J.$$.fragment,e),b(K.$$.fragment,e),b(Q.$$.fragment,e),b(V.$$.fragment,e),zl=!1},d(e){l($),e&&l(Z),e&&l(f),w(D),e&&l(tl),e&&l(ee),e&&l(sl),e&&l(M),w(S),e&&l(nl),e&&l(le),e&&l(il),e&&l(L),w(H),e&&l(ol),e&&l(ae),e&&l(rl),e&&l(u),e&&l(dl),e&&l(x),e&&l(hl),e&&l(P),e&&l(gl),w(W,e),e&&l(ml),e&&l(z),e&&l(ul),w(F,e),e&&l(pl),e&&l(he),e&&l(fl),w(G,e),e&&l(cl),e&&l(ge),e&&l(vl),w(U,e),e&&l(El),e&&l(me),e&&l(_l),w(J,e),e&&l(kl),e&&l(q),e&&l(bl),e&&l(y),w(K),e&&l(wl),e&&l(ue),e&&l($l),e&&l(A),e&&l(xl),e&&l(ce),e&&l(Ml),e&&l(T),w(Q),e&&l(Ll),e&&l(ve),e&&l(yl),e&&l(N),e&&l(Tl),e&&l(ke),e&&l(Xl),e&&l(X),w(V),e&&l(Cl),e&&l(be),e&&l(jl),e&&l(we),e&&l(Pl),e&&l(O)}}}const Ms={local:"multilingual-models",sections:[{local:"xlm",sections:[{local:"xlm-language-embeddings",title:"XLM & Language Embeddings"},{local:"xlm-without-language-embeddings",title:"XLM without Language Embeddings"}],title:"XLM"},{local:"bert",title:"BERT"},{local:"xlmroberta",title:"XLM-RoBERTa"}],title:"Multi-lingual models"};function Ls(Gl,$,Z){let{fw:f}=$;return Gl.$$set=c=>{"fw"in c&&Z(0,f=c.fw)},[f]}class js extends _s{constructor($){super();ks(this,$,Ls,xs,bs,{fw:0})}}export{js as default,Ms as metadata};
