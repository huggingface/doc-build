import{S as qs,i as xs,s as As,e as i,k as f,w as c,t as l,M as Ps,c as n,d as t,m as h,a as o,x as d,h as p,b as m,G as s,g as r,y,L as Ts,q as w,o as b,B as _,v as Ss}from"../chunks/vendor-hf-doc-builder.js";import{I as at}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as Y}from"../chunks/CodeBlock-hf-doc-builder.js";function Ls(Zt){let v,ze,z,q,fe,U,rt,he,it,$e,x,nt,Z,ot,lt,je,g,pt,G,ft,ht,me,mt,ut,Ee,C,qe,k,ct,J,dt,yt,V,wt,bt,xe,N,_t,X,gt,Ae,$,A,ue,F,kt,ce,vt,Pe,P,zt,de,$t,jt,Te,D,Se,u,Et,ye,qt,xt,we,At,Pt,be,Tt,St,Le,j,T,_e,I,Lt,ge,Bt,Be,S,Ut,O,Ct,Nt,Ue,ee,Ft,Ce,H,Ne,te,Dt,Fe,K,De,se,It,Ie,ae,Ot,Oe,M,He,re,Ht,Ke,E,L,ke,R,Kt,ve,Mt,Me,ie,Rt,Re,Q,Qe,ne,Qt,We,W,Ye,oe,Wt,Ze;return U=new at({}),C=new Y({props:{code:`from tokenizers import Tokenizer, decoders, models, normalizers, pre_tokenizers, trainers
tokenizer = Tokenizer(models.Unigram())
tokenizer.normalizer = normalizers.NFKC()
tokenizer.pre_tokenizer = pre_tokenizers.ByteLevel()
tokenizer.decoder = decoders.ByteLevel()
trainer = trainers.UnigramTrainer(
    vocab_size=20000,
    initial_alphabet=pre_tokenizers.ByteLevel.alphabet(),
    special_tokens=["<PAD>", "<BOS>", "<EOS>"],
)`,highlighted:`<span class="hljs-keyword">from</span> tokenizers <span class="hljs-keyword">import</span> Tokenizer, decoders, models, normalizers, pre_tokenizers, trainers
tokenizer = Tokenizer(models.Unigram())
tokenizer.normalizer = normalizers.NFKC()
tokenizer.pre_tokenizer = pre_tokenizers.ByteLevel()
tokenizer.decoder = decoders.ByteLevel()
trainer = trainers.UnigramTrainer(
    vocab_size=<span class="hljs-number">20000</span>,
    initial_alphabet=pre_tokenizers.ByteLevel.alphabet(),
    special_tokens=[<span class="hljs-string">&quot;&lt;PAD&gt;&quot;</span>, <span class="hljs-string">&quot;&lt;BOS&gt;&quot;</span>, <span class="hljs-string">&quot;&lt;EOS&gt;&quot;</span>],
)`}}),F=new at({}),D=new Y({props:{code:`# First few lines of the "Zen of Python" https://www.python.org/dev/peps/pep-0020/
data = [
    "Beautiful is better than ugly."
    "Explicit is better than implicit."
    "Simple is better than complex."
    "Complex is better than complicated."
    "Flat is better than nested."
    "Sparse is better than dense."
    "Readability counts."
]
tokenizer.train_from_iterator(data, trainer=trainer)`,highlighted:`<span class="hljs-comment"># First few lines of the &quot;Zen of Python&quot; https://www.python.org/dev/peps/pep-0020/</span>
data = [
    <span class="hljs-string">&quot;Beautiful is better than ugly.&quot;</span>
    <span class="hljs-string">&quot;Explicit is better than implicit.&quot;</span>
    <span class="hljs-string">&quot;Simple is better than complex.&quot;</span>
    <span class="hljs-string">&quot;Complex is better than complicated.&quot;</span>
    <span class="hljs-string">&quot;Flat is better than nested.&quot;</span>
    <span class="hljs-string">&quot;Sparse is better than dense.&quot;</span>
    <span class="hljs-string">&quot;Readability counts.&quot;</span>
]
tokenizer.train_from_iterator(data, trainer=trainer)`}}),I=new at({}),H=new Y({props:{code:`import datasets
dataset = datasets.load_dataset("wikitext", "wikitext-103-raw-v1", split="train+test+validation")`,highlighted:`<span class="hljs-keyword">import</span> datasets
dataset = datasets.load_dataset(<span class="hljs-string">&quot;wikitext&quot;</span>, <span class="hljs-string">&quot;wikitext-103-raw-v1&quot;</span>, split=<span class="hljs-string">&quot;train+test+validation&quot;</span>)`}}),K=new Y({props:{code:`def batch_iterator(batch_size=1000):
    for i in range(0, len(dataset), batch_size):
        yield dataset[i : i + batch_size]["text"]`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">batch_iterator</span>(<span class="hljs-params">batch_size=<span class="hljs-number">1000</span></span>):
    <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">0</span>, <span class="hljs-built_in">len</span>(dataset), batch_size):
        <span class="hljs-keyword">yield</span> dataset[i : i + batch_size][<span class="hljs-string">&quot;text&quot;</span>]`}}),M=new Y({props:{code:"tokenizer.train_from_iterator(batch_iterator(), trainer=trainer, length=len(dataset))",highlighted:'tokenizer.train_from_iterator(batch_iterator(), trainer=trainer, length=<span class="hljs-built_in">len</span>(dataset))'}}),R=new at({}),Q=new Y({props:{code:`import gzip
with gzip.open("data/my-file.0.gz", "rt") as f:
    tokenizer.train_from_iterator(f, trainer=trainer)`,highlighted:`<span class="hljs-keyword">import</span> gzip
<span class="hljs-keyword">with</span> gzip.<span class="hljs-built_in">open</span>(<span class="hljs-string">&quot;data/my-file.0.gz&quot;</span>, <span class="hljs-string">&quot;rt&quot;</span>) <span class="hljs-keyword">as</span> f:
    tokenizer.train_from_iterator(f, trainer=trainer)`}}),W=new Y({props:{code:`files = ["data/my-file.0.gz", "data/my-file.1.gz", "data/my-file.2.gz"]
def gzip_iterator():
    for path in files:
        with gzip.open(path, "rt") as f:
            for line in f:
                yield line
tokenizer.train_from_iterator(gzip_iterator(), trainer=trainer)`,highlighted:`files = [<span class="hljs-string">&quot;data/my-file.0.gz&quot;</span>, <span class="hljs-string">&quot;data/my-file.1.gz&quot;</span>, <span class="hljs-string">&quot;data/my-file.2.gz&quot;</span>]
<span class="hljs-keyword">def</span> <span class="hljs-title function_">gzip_iterator</span>():
    <span class="hljs-keyword">for</span> path <span class="hljs-keyword">in</span> files:
        <span class="hljs-keyword">with</span> gzip.<span class="hljs-built_in">open</span>(path, <span class="hljs-string">&quot;rt&quot;</span>) <span class="hljs-keyword">as</span> f:
            <span class="hljs-keyword">for</span> line <span class="hljs-keyword">in</span> f:
                <span class="hljs-keyword">yield</span> line
tokenizer.train_from_iterator(gzip_iterator(), trainer=trainer)`}}),{c(){v=i("meta"),ze=f(),z=i("h1"),q=i("a"),fe=i("span"),c(U.$$.fragment),rt=f(),he=i("span"),it=l("Training from memory"),$e=f(),x=i("p"),nt=l("In the "),Z=i("a"),ot=l("Quicktour"),lt=l(`, we saw how to build and train a
tokenizer using text files, but we can actually use any Python Iterator.
In this section we\u2019ll see a few different ways of training our
tokenizer.`),je=f(),g=i("p"),pt=l("For all the examples listed below, we\u2019ll use the same "),G=i("a"),ft=l("Tokenizer"),ht=l(` and
`),me=i("code"),mt=l("Trainer"),ut=l(`, built as
following:`),Ee=f(),c(C.$$.fragment),qe=f(),k=i("p"),ct=l("This tokenizer is based on the "),J=i("a"),dt=l("Unigram"),yt=l(` model. It
takes care of normalizing the input using the NFKC Unicode normalization
method, and uses a `),V=i("a"),wt=l("ByteLevel"),bt=l(" pre-tokenizer with the corresponding decoder."),xe=f(),N=i("p"),_t=l(`For more information on the components used here, you can check
`),X=i("a"),gt=l("here"),Ae=f(),$=i("h2"),A=i("a"),ue=i("span"),c(F.$$.fragment),kt=f(),ce=i("span"),vt=l("The most basic way"),Pe=f(),P=i("p"),zt=l(`As you probably guessed already, the easiest way to train our tokenizer
is by using a `),de=i("code"),$t=l("List"),jt=l("{.interpreted-text role=\u201Cobj\u201D}:"),Te=f(),c(D.$$.fragment),Se=f(),u=i("p"),Et=l(`Easy, right? You can use anything working as an iterator here, be it a
`),ye=i("code"),qt=l("List"),xt=l("{.interpreted-text role=\u201Cobj\u201D}, "),we=i("code"),At=l("Tuple"),Pt=l(`{.interpreted-text
role=\u201Cobj\u201D}, or a `),be=i("code"),Tt=l("np.Array"),St=l(`{.interpreted-text role=\u201Cobj\u201D}. Anything
works as long as it provides strings.`),Le=f(),j=i("h2"),T=i("a"),_e=i("span"),c(I.$$.fragment),Lt=f(),ge=i("span"),Bt=l("Using the \u{1F917} Datasets library"),Be=f(),S=i("p"),Ut=l(`An awesome way to access one of the many datasets that exist out there
is by using the \u{1F917} Datasets library. For more information about it, you
should check `),O=i("a"),Ct=l(`the official documentation
here`),Nt=l("."),Ue=f(),ee=i("p"),Ft=l("Let\u2019s start by loading our dataset:"),Ce=f(),c(H.$$.fragment),Ne=f(),te=i("p"),Dt=l(`The next step is to build an iterator over this dataset. The easiest way
to do this is probably by using a generator:`),Fe=f(),c(K.$$.fragment),De=f(),se=i("p"),It=l(`As you can see here, for improved efficiency we can actually provide a
batch of examples used to train, instead of iterating over them one by
one. By doing so, we can expect performances very similar to those we
got while training directly from files.`),Ie=f(),ae=i("p"),Ot=l(`With our iterator ready, we just need to launch the training. In order
to improve the look of our progress bars, we can specify the total
length of the dataset:`),Oe=f(),c(M.$$.fragment),He=f(),re=i("p"),Ht=l("And that\u2019s it!"),Ke=f(),E=i("h2"),L=i("a"),ke=i("span"),c(R.$$.fragment),Kt=f(),ve=i("span"),Mt=l("Using gzip files"),Me=f(),ie=i("p"),Rt=l(`Since gzip files in Python can be used as iterators, it is extremely
simple to train on such files:`),Re=f(),c(Q.$$.fragment),Qe=f(),ne=i("p"),Qt=l(`Now if we wanted to train from multiple gzip files, it wouldn\u2019t be much
harder:`),We=f(),c(W.$$.fragment),Ye=f(),oe=i("p"),Wt=l("And voil\xE0!"),this.h()},l(e){const a=Ps('[data-svelte="svelte-1phssyn"]',document.head);v=n(a,"META",{name:!0,content:!0}),a.forEach(t),ze=h(e),z=n(e,"H1",{class:!0});var Ge=o(z);q=n(Ge,"A",{id:!0,class:!0,href:!0});var Gt=o(q);fe=n(Gt,"SPAN",{});var Jt=o(fe);d(U.$$.fragment,Jt),Jt.forEach(t),Gt.forEach(t),rt=h(Ge),he=n(Ge,"SPAN",{});var Vt=o(he);it=p(Vt,"Training from memory"),Vt.forEach(t),Ge.forEach(t),$e=h(e),x=n(e,"P",{});var Je=o(x);nt=p(Je,"In the "),Z=n(Je,"A",{href:!0});var Xt=o(Z);ot=p(Xt,"Quicktour"),Xt.forEach(t),lt=p(Je,`, we saw how to build and train a
tokenizer using text files, but we can actually use any Python Iterator.
In this section we\u2019ll see a few different ways of training our
tokenizer.`),Je.forEach(t),je=h(e),g=n(e,"P",{});var le=o(g);pt=p(le,"For all the examples listed below, we\u2019ll use the same "),G=n(le,"A",{href:!0});var es=o(G);ft=p(es,"Tokenizer"),es.forEach(t),ht=p(le,` and
`),me=n(le,"CODE",{});var ts=o(me);mt=p(ts,"Trainer"),ts.forEach(t),ut=p(le,`, built as
following:`),le.forEach(t),Ee=h(e),d(C.$$.fragment,e),qe=h(e),k=n(e,"P",{});var pe=o(k);ct=p(pe,"This tokenizer is based on the "),J=n(pe,"A",{href:!0});var ss=o(J);dt=p(ss,"Unigram"),ss.forEach(t),yt=p(pe,` model. It
takes care of normalizing the input using the NFKC Unicode normalization
method, and uses a `),V=n(pe,"A",{href:!0});var as=o(V);wt=p(as,"ByteLevel"),as.forEach(t),bt=p(pe," pre-tokenizer with the corresponding decoder."),pe.forEach(t),xe=h(e),N=n(e,"P",{});var Yt=o(N);_t=p(Yt,`For more information on the components used here, you can check
`),X=n(Yt,"A",{href:!0});var rs=o(X);gt=p(rs,"here"),rs.forEach(t),Yt.forEach(t),Ae=h(e),$=n(e,"H2",{class:!0});var Ve=o($);A=n(Ve,"A",{id:!0,class:!0,href:!0});var is=o(A);ue=n(is,"SPAN",{});var ns=o(ue);d(F.$$.fragment,ns),ns.forEach(t),is.forEach(t),kt=h(Ve),ce=n(Ve,"SPAN",{});var os=o(ce);vt=p(os,"The most basic way"),os.forEach(t),Ve.forEach(t),Pe=h(e),P=n(e,"P",{});var Xe=o(P);zt=p(Xe,`As you probably guessed already, the easiest way to train our tokenizer
is by using a `),de=n(Xe,"CODE",{});var ls=o(de);$t=p(ls,"List"),ls.forEach(t),jt=p(Xe,"{.interpreted-text role=\u201Cobj\u201D}:"),Xe.forEach(t),Te=h(e),d(D.$$.fragment,e),Se=h(e),u=n(e,"P",{});var B=o(u);Et=p(B,`Easy, right? You can use anything working as an iterator here, be it a
`),ye=n(B,"CODE",{});var ps=o(ye);qt=p(ps,"List"),ps.forEach(t),xt=p(B,"{.interpreted-text role=\u201Cobj\u201D}, "),we=n(B,"CODE",{});var fs=o(we);At=p(fs,"Tuple"),fs.forEach(t),Pt=p(B,`{.interpreted-text
role=\u201Cobj\u201D}, or a `),be=n(B,"CODE",{});var hs=o(be);Tt=p(hs,"np.Array"),hs.forEach(t),St=p(B,`{.interpreted-text role=\u201Cobj\u201D}. Anything
works as long as it provides strings.`),B.forEach(t),Le=h(e),j=n(e,"H2",{class:!0});var et=o(j);T=n(et,"A",{id:!0,class:!0,href:!0});var ms=o(T);_e=n(ms,"SPAN",{});var us=o(_e);d(I.$$.fragment,us),us.forEach(t),ms.forEach(t),Lt=h(et),ge=n(et,"SPAN",{});var cs=o(ge);Bt=p(cs,"Using the \u{1F917} Datasets library"),cs.forEach(t),et.forEach(t),Be=h(e),S=n(e,"P",{});var tt=o(S);Ut=p(tt,`An awesome way to access one of the many datasets that exist out there
is by using the \u{1F917} Datasets library. For more information about it, you
should check `),O=n(tt,"A",{href:!0,rel:!0});var ds=o(O);Ct=p(ds,`the official documentation
here`),ds.forEach(t),Nt=p(tt,"."),tt.forEach(t),Ue=h(e),ee=n(e,"P",{});var ys=o(ee);Ft=p(ys,"Let\u2019s start by loading our dataset:"),ys.forEach(t),Ce=h(e),d(H.$$.fragment,e),Ne=h(e),te=n(e,"P",{});var ws=o(te);Dt=p(ws,`The next step is to build an iterator over this dataset. The easiest way
to do this is probably by using a generator:`),ws.forEach(t),Fe=h(e),d(K.$$.fragment,e),De=h(e),se=n(e,"P",{});var bs=o(se);It=p(bs,`As you can see here, for improved efficiency we can actually provide a
batch of examples used to train, instead of iterating over them one by
one. By doing so, we can expect performances very similar to those we
got while training directly from files.`),bs.forEach(t),Ie=h(e),ae=n(e,"P",{});var _s=o(ae);Ot=p(_s,`With our iterator ready, we just need to launch the training. In order
to improve the look of our progress bars, we can specify the total
length of the dataset:`),_s.forEach(t),Oe=h(e),d(M.$$.fragment,e),He=h(e),re=n(e,"P",{});var gs=o(re);Ht=p(gs,"And that\u2019s it!"),gs.forEach(t),Ke=h(e),E=n(e,"H2",{class:!0});var st=o(E);L=n(st,"A",{id:!0,class:!0,href:!0});var ks=o(L);ke=n(ks,"SPAN",{});var vs=o(ke);d(R.$$.fragment,vs),vs.forEach(t),ks.forEach(t),Kt=h(st),ve=n(st,"SPAN",{});var zs=o(ve);Mt=p(zs,"Using gzip files"),zs.forEach(t),st.forEach(t),Me=h(e),ie=n(e,"P",{});var $s=o(ie);Rt=p($s,`Since gzip files in Python can be used as iterators, it is extremely
simple to train on such files:`),$s.forEach(t),Re=h(e),d(Q.$$.fragment,e),Qe=h(e),ne=n(e,"P",{});var js=o(ne);Qt=p(js,`Now if we wanted to train from multiple gzip files, it wouldn\u2019t be much
harder:`),js.forEach(t),We=h(e),d(W.$$.fragment,e),Ye=h(e),oe=n(e,"P",{});var Es=o(oe);Wt=p(Es,"And voil\xE0!"),Es.forEach(t),this.h()},h(){m(v,"name","hf:doc:metadata"),m(v,"content",JSON.stringify(Bs)),m(q,"id","training-from-memory"),m(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(q,"href","#training-from-memory"),m(z,"class","relative group"),m(Z,"href","quicktour.html"),m(G,"href","/docs/tokenizers/main/en/api/tokenizer#tokenizers.Tokenizer"),m(J,"href","/docs/tokenizers/main/en/api/models#tokenizers.models.Unigram"),m(V,"href","/docs/tokenizers/main/en/api/pre-tokenizers#tokenizers.pre_tokenizers.ByteLevel"),m(X,"href","components.html"),m(A,"id","the-most-basic-way"),m(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(A,"href","#the-most-basic-way"),m($,"class","relative group"),m(T,"id","using-the-datasets-library"),m(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(T,"href","#using-the-datasets-library"),m(j,"class","relative group"),m(O,"href","https://huggingface.co/docs/datasets/"),m(O,"rel","nofollow"),m(L,"id","using-gzip-files"),m(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(L,"href","#using-gzip-files"),m(E,"class","relative group")},m(e,a){s(document.head,v),r(e,ze,a),r(e,z,a),s(z,q),s(q,fe),y(U,fe,null),s(z,rt),s(z,he),s(he,it),r(e,$e,a),r(e,x,a),s(x,nt),s(x,Z),s(Z,ot),s(x,lt),r(e,je,a),r(e,g,a),s(g,pt),s(g,G),s(G,ft),s(g,ht),s(g,me),s(me,mt),s(g,ut),r(e,Ee,a),y(C,e,a),r(e,qe,a),r(e,k,a),s(k,ct),s(k,J),s(J,dt),s(k,yt),s(k,V),s(V,wt),s(k,bt),r(e,xe,a),r(e,N,a),s(N,_t),s(N,X),s(X,gt),r(e,Ae,a),r(e,$,a),s($,A),s(A,ue),y(F,ue,null),s($,kt),s($,ce),s(ce,vt),r(e,Pe,a),r(e,P,a),s(P,zt),s(P,de),s(de,$t),s(P,jt),r(e,Te,a),y(D,e,a),r(e,Se,a),r(e,u,a),s(u,Et),s(u,ye),s(ye,qt),s(u,xt),s(u,we),s(we,At),s(u,Pt),s(u,be),s(be,Tt),s(u,St),r(e,Le,a),r(e,j,a),s(j,T),s(T,_e),y(I,_e,null),s(j,Lt),s(j,ge),s(ge,Bt),r(e,Be,a),r(e,S,a),s(S,Ut),s(S,O),s(O,Ct),s(S,Nt),r(e,Ue,a),r(e,ee,a),s(ee,Ft),r(e,Ce,a),y(H,e,a),r(e,Ne,a),r(e,te,a),s(te,Dt),r(e,Fe,a),y(K,e,a),r(e,De,a),r(e,se,a),s(se,It),r(e,Ie,a),r(e,ae,a),s(ae,Ot),r(e,Oe,a),y(M,e,a),r(e,He,a),r(e,re,a),s(re,Ht),r(e,Ke,a),r(e,E,a),s(E,L),s(L,ke),y(R,ke,null),s(E,Kt),s(E,ve),s(ve,Mt),r(e,Me,a),r(e,ie,a),s(ie,Rt),r(e,Re,a),y(Q,e,a),r(e,Qe,a),r(e,ne,a),s(ne,Qt),r(e,We,a),y(W,e,a),r(e,Ye,a),r(e,oe,a),s(oe,Wt),Ze=!0},p:Ts,i(e){Ze||(w(U.$$.fragment,e),w(C.$$.fragment,e),w(F.$$.fragment,e),w(D.$$.fragment,e),w(I.$$.fragment,e),w(H.$$.fragment,e),w(K.$$.fragment,e),w(M.$$.fragment,e),w(R.$$.fragment,e),w(Q.$$.fragment,e),w(W.$$.fragment,e),Ze=!0)},o(e){b(U.$$.fragment,e),b(C.$$.fragment,e),b(F.$$.fragment,e),b(D.$$.fragment,e),b(I.$$.fragment,e),b(H.$$.fragment,e),b(K.$$.fragment,e),b(M.$$.fragment,e),b(R.$$.fragment,e),b(Q.$$.fragment,e),b(W.$$.fragment,e),Ze=!1},d(e){t(v),e&&t(ze),e&&t(z),_(U),e&&t($e),e&&t(x),e&&t(je),e&&t(g),e&&t(Ee),_(C,e),e&&t(qe),e&&t(k),e&&t(xe),e&&t(N),e&&t(Ae),e&&t($),_(F),e&&t(Pe),e&&t(P),e&&t(Te),_(D,e),e&&t(Se),e&&t(u),e&&t(Le),e&&t(j),_(I),e&&t(Be),e&&t(S),e&&t(Ue),e&&t(ee),e&&t(Ce),_(H,e),e&&t(Ne),e&&t(te),e&&t(Fe),_(K,e),e&&t(De),e&&t(se),e&&t(Ie),e&&t(ae),e&&t(Oe),_(M,e),e&&t(He),e&&t(re),e&&t(Ke),e&&t(E),_(R),e&&t(Me),e&&t(ie),e&&t(Re),_(Q,e),e&&t(Qe),e&&t(ne),e&&t(We),_(W,e),e&&t(Ye),e&&t(oe)}}}const Bs={local:"training-from-memory",sections:[{local:"the-most-basic-way",title:"The most basic way"},{local:"using-the-datasets-library",title:"Using the \u{1F917} Datasets library"},{local:"using-gzip-files",title:"Using gzip files"}],title:"Training from memory"};function Us(Zt){return Ss(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ds extends qs{constructor(v){super();xs(this,v,Us,Ls,As,{})}}export{Ds as default,Bs as metadata};
