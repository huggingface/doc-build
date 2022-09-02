import{S as kt,i as bt,s as $t,e as u,k as m,w as v,t as o,l as ht,M as jt,c as i,d as n,m as d,x as _,a as r,h as a,b as z,G as s,g as p,y as k,o as g,p as qt,q as h,B as b,v as wt,n as vt}from"../../chunks/vendor-hf-doc-builder.js";import{I as Sn}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as x}from"../../chunks/CodeBlock-hf-doc-builder.js";import{C as _t}from"../../chunks/CourseFloatingBanner-hf-doc-builder.js";import{F as zt}from"../../chunks/FrameworkSwitchCourse-hf-doc-builder.js";function Et(y){let c,f;return c=new _t({props:{chapter:2,classNames:"absolute z-10 right-0 top-0",notebooks:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter2/section6_tf.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter2/section6_tf.ipynb"}]}}),{c(){v(c.$$.fragment)},l(l){_(c.$$.fragment,l)},m(l,$){k(c,l,$),f=!0},i(l){f||(h(c.$$.fragment,l),f=!0)},o(l){g(c.$$.fragment,l),f=!1},d(l){b(c,l)}}}function xt(y){let c,f;return c=new _t({props:{chapter:2,classNames:"absolute z-10 right-0 top-0",notebooks:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter2/section6_pt.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter2/section6_pt.ipynb"}]}}),{c(){v(c.$$.fragment)},l(l){_(c.$$.fragment,l)},m(l,$){k(c,l,$),f=!0},i(l){f||(h(c.$$.fragment,l),f=!0)},o(l){g(c.$$.fragment,l),f=!1},d(l){b(c,l)}}}function yt(y){let c,f;return c=new x({props:{code:`import tensorflow as tf
from transformers import AutoTokenizer, TFAutoModelForSequenceClassification

checkpoint = "distilbert-base-uncased-finetuned-sst-2-english"
tokenizer = AutoTokenizer.from_pretrained(checkpoint)
model = TFAutoModelForSequenceClassification.from_pretrained(checkpoint)
sequences = [
    "I've been waiting for a HuggingFace course my whole life.",
    "So have I!",
]  # \xAB J'ai attendu un cours de HuggingFace toute ma vie. \xBB, \xAB Moi aussi ! \xBB

tokens = tokenizer(sequences, padding=True, truncation=True, return_tensors="tf")
output = model(**tokens)`,highlighted:`<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFAutoModelForSequenceClassification

checkpoint = <span class="hljs-string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>
tokenizer = AutoTokenizer.from_pretrained(checkpoint)
model = TFAutoModelForSequenceClassification.from_pretrained(checkpoint)
sequences = [
    <span class="hljs-string">&quot;I&#x27;ve been waiting for a HuggingFace course my whole life.&quot;</span>,
    <span class="hljs-string">&quot;So have I!&quot;</span>,
]  <span class="hljs-comment"># \xAB J&#x27;ai attendu un cours de HuggingFace toute ma vie. \xBB, \xAB Moi aussi ! \xBB</span>

tokens = tokenizer(sequences, padding=<span class="hljs-literal">True</span>, truncation=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
output = model(**tokens)`}}),{c(){v(c.$$.fragment)},l(l){_(c.$$.fragment,l)},m(l,$){k(c,l,$),f=!0},i(l){f||(h(c.$$.fragment,l),f=!0)},o(l){g(c.$$.fragment,l),f=!1},d(l){b(c,l)}}}function Tt(y){let c,f;return c=new x({props:{code:`import torch
from transformers import AutoTokenizer, AutoModelForSequenceClassification

checkpoint = "distilbert-base-uncased-finetuned-sst-2-english"
tokenizer = AutoTokenizer.from_pretrained(checkpoint)
model = AutoModelForSequenceClassification.from_pretrained(checkpoint)
sequences = [
    "I've been waiting for a HuggingFace course my whole life.",
    "So have I!",
]  # \xAB J'ai attendu un cours de HuggingFace toute ma vie. \xBB, \xAB Moi aussi ! \xBB


tokens = tokenizer(sequences, padding=True, truncation=True, return_tensors="pt")
output = model(**tokens)`,highlighted:`<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForSequenceClassification

checkpoint = <span class="hljs-string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>
tokenizer = AutoTokenizer.from_pretrained(checkpoint)
model = AutoModelForSequenceClassification.from_pretrained(checkpoint)
sequences = [
    <span class="hljs-string">&quot;I&#x27;ve been waiting for a HuggingFace course my whole life.&quot;</span>,
    <span class="hljs-string">&quot;So have I!&quot;</span>,
]  <span class="hljs-comment"># \xAB J&#x27;ai attendu un cours de HuggingFace toute ma vie. \xBB, \xAB Moi aussi ! \xBB</span>


tokens = tokenizer(sequences, padding=<span class="hljs-literal">True</span>, truncation=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
output = model(**tokens)`}}),{c(){v(c.$$.fragment)},l(l){_(c.$$.fragment,l)},m(l,$){k(c,l,$),f=!0},i(l){f||(h(c.$$.fragment,l),f=!0)},o(l){g(c.$$.fragment,l),f=!1},d(l){b(c,l)}}}function Ft(y){let c,f,l,$,M,J,ke,U,ws,be,zs,Ke,T,F,re,S,Es,$e,xs,ys,je,Ts,Fs,Qe,C,Ps,we,Is,Ss,ze,Cs,As,Ve,K,We,A,Hs,Ee,Ms,Ds,xe,Rs,Js,Xe,pe,Ns,Ye,Q,Ze,ce,Ls,es,V,ss,N,Bs,ye,Os,Gs,ns,W,ts,me,Us,os,X,as,q,Ks,Te,Qs,Vs,Fe,Ws,Xs,Pe,Ys,Zs,Ie,en,sn,Se,nn,tn,Ce,on,an,ls,Y,us,D,L,Ae,Z,ln,He,un,is,B,rn,Me,pn,cn,rs,ee,ps,se,cs,de,mn,ms,ne,ds,te,fs,j,dn,De,fn,gn,Re,hn,qn,Je,vn,_n,Ne,kn,bn,gs,R,O,Le,oe,$n,ae,jn,Be,wn,zn,hs,E,En,Oe,xn,yn,Ge,Tn,Fn,Ue,Pn,In,qs,P,I,fe,vs;l=new zt({props:{fw:y[0]}}),U=new Sn({});const Cn=[xt,Et],le=[];function An(e,t){return e[0]==="pt"?0:1}T=An(y),F=le[T]=Cn[T](y),K=new x({props:{code:`from transformers import AutoTokenizer

checkpoint = "distilbert-base-uncased-finetuned-sst-2-english"
tokenizer = AutoTokenizer.from_pretrained(checkpoint)

sequence = "I've been waiting for a HuggingFace course my whole life."
# J'ai attendu un cours d\u2019HuggingFace toute ma vie.

model_inputs = tokenizer(sequence)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

checkpoint = <span class="hljs-string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>
tokenizer = AutoTokenizer.from_pretrained(checkpoint)

sequence = <span class="hljs-string">&quot;I&#x27;ve been waiting for a HuggingFace course my whole life.&quot;</span>
<span class="hljs-comment"># J&#x27;ai attendu un cours d\u2019HuggingFace toute ma vie.</span>

model_inputs = tokenizer(sequence)`}}),Q=new x({props:{code:`sequence = "I've been waiting for a HuggingFace course my whole life."
# J'ai attendu un cours d\u2019HuggingFace toute ma vie.


model_inputs = tokenizer(sequence)`,highlighted:`sequence = <span class="hljs-string">&quot;I&#x27;ve been waiting for a HuggingFace course my whole life.&quot;</span>
<span class="hljs-comment"># J&#x27;ai attendu un cours d\u2019HuggingFace toute ma vie.</span>


model_inputs = tokenizer(sequence)`}}),V=new x({props:{code:`sequences = [
    "I've been waiting for a HuggingFace course my whole life.",
    "So have I!",
]  # \xAB J'ai attendu un cours de HuggingFace toute ma vie. \xBB, \xAB Moi aussi ! \xBB

model_inputs = tokenizer(sequences)`,highlighted:`sequences = [
    <span class="hljs-string">&quot;I&#x27;ve been waiting for a HuggingFace course my whole life.&quot;</span>,
    <span class="hljs-string">&quot;So have I!&quot;</span>,
]  <span class="hljs-comment"># \xAB J&#x27;ai attendu un cours de HuggingFace toute ma vie. \xBB, \xAB Moi aussi ! \xBB</span>

model_inputs = tokenizer(sequences)`}}),W=new x({props:{code:`# Remplit les s\xE9quences jusqu'\xE0 la longueur maximale de la s\xE9quence
model_inputs = tokenizer(sequences, padding="longest")

# Remplit les s\xE9quences jusqu'\xE0 la longueur maximale du mod\xE8le (512 pour BERT ou DistilBERT)
model_inputs = tokenizer(sequences, padding="max_length")

# Remplit les s\xE9quences jusqu'\xE0 la longueur maximale sp\xE9cifi\xE9e
model_inputs = tokenizer(sequences, padding="max_length", max_length=8)`,highlighted:`<span class="hljs-comment"># Remplit les s\xE9quences jusqu&#x27;\xE0 la longueur maximale de la s\xE9quence</span>
model_inputs = tokenizer(sequences, padding=<span class="hljs-string">&quot;longest&quot;</span>)

<span class="hljs-comment"># Remplit les s\xE9quences jusqu&#x27;\xE0 la longueur maximale du mod\xE8le (512 pour BERT ou DistilBERT)</span>
model_inputs = tokenizer(sequences, padding=<span class="hljs-string">&quot;max_length&quot;</span>)

<span class="hljs-comment"># Remplit les s\xE9quences jusqu&#x27;\xE0 la longueur maximale sp\xE9cifi\xE9e</span>
model_inputs = tokenizer(sequences, padding=<span class="hljs-string">&quot;max_length&quot;</span>, max_length=<span class="hljs-number">8</span>)`}}),X=new x({props:{code:`sequences = [
    "I've been waiting for a HuggingFace course my whole life.",
    "So have I!",
]  # \xAB J'ai attendu un cours de HuggingFace toute ma vie. \xBB, \xAB Moi aussi ! \xBB

# Tronque les s\xE9quences qui sont plus longues que la longueur maximale du mod\xE8le
# (512 pour BERT ou DistilBERT)
model_inputs = tokenizer(sequences, truncation=True)

# Tronque les s\xE9quences qui sont plus longues que la longueur maximale sp\xE9cifi\xE9e
model_inputs = tokenizer(sequences, max_length=8, truncation=True)`,highlighted:`sequences = [
    <span class="hljs-string">&quot;I&#x27;ve been waiting for a HuggingFace course my whole life.&quot;</span>,
    <span class="hljs-string">&quot;So have I!&quot;</span>,
]  <span class="hljs-comment"># \xAB J&#x27;ai attendu un cours de HuggingFace toute ma vie. \xBB, \xAB Moi aussi ! \xBB</span>

<span class="hljs-comment"># Tronque les s\xE9quences qui sont plus longues que la longueur maximale du mod\xE8le</span>
<span class="hljs-comment"># (512 pour BERT ou DistilBERT)</span>
model_inputs = tokenizer(sequences, truncation=<span class="hljs-literal">True</span>)

<span class="hljs-comment"># Tronque les s\xE9quences qui sont plus longues que la longueur maximale sp\xE9cifi\xE9e</span>
model_inputs = tokenizer(sequences, max_length=<span class="hljs-number">8</span>, truncation=<span class="hljs-literal">True</span>)`}}),Y=new x({props:{code:`sequences = [
    "I've been waiting for a HuggingFace course my whole life.",
    "So have I!",
]  # \xAB J'ai attendu un cours de HuggingFace toute ma vie. \xBB, \xAB Moi aussi ! \xBB

# Retourne des tenseurs PyTorch
model_inputs = tokenizer(sequences, padding=True, return_tensors="pt")

# Retourne des tenseurs TensorFlow
model_inputs = tokenizer(sequences, padding=True, return_tensors="tf")

# Retourne des tableaux NumPy
model_inputs = tokenizer(sequences, padding=True, return_tensors="np")`,highlighted:`sequences = [
    <span class="hljs-string">&quot;I&#x27;ve been waiting for a HuggingFace course my whole life.&quot;</span>,
    <span class="hljs-string">&quot;So have I!&quot;</span>,
]  <span class="hljs-comment"># \xAB J&#x27;ai attendu un cours de HuggingFace toute ma vie. \xBB, \xAB Moi aussi ! \xBB</span>

<span class="hljs-comment"># Retourne des tenseurs PyTorch</span>
model_inputs = tokenizer(sequences, padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-comment"># Retourne des tenseurs TensorFlow</span>
model_inputs = tokenizer(sequences, padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-comment"># Retourne des tableaux NumPy</span>
model_inputs = tokenizer(sequences, padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)`}}),Z=new Sn({}),ee=new x({props:{code:`sequence = "I've been waiting for a HuggingFace course my whole life."
# \xAB J'ai attendu un cours de HuggingFace toute ma vie. \xBB

model_inputs = tokenizer(sequence)
print(model_inputs["input_ids"])

tokens = tokenizer.tokenize(sequence)
ids = tokenizer.convert_tokens_to_ids(tokens)
print(ids)`,highlighted:`sequence = <span class="hljs-string">&quot;I&#x27;ve been waiting for a HuggingFace course my whole life.&quot;</span>
<span class="hljs-comment"># \xAB J&#x27;ai attendu un cours de HuggingFace toute ma vie. \xBB</span>

model_inputs = tokenizer(sequence)
<span class="hljs-built_in">print</span>(model_inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])

tokens = tokenizer.tokenize(sequence)
ids = tokenizer.convert_tokens_to_ids(tokens)
<span class="hljs-built_in">print</span>(ids)`}}),se=new x({props:{code:`[101, 1045, 1005, 2310, 2042, 3403, 2005, 1037, 17662, 12172, 2607, 2026, 2878, 2166, 1012, 102]
[1045, 1005, 2310, 2042, 3403, 2005, 1037, 17662, 12172, 2607, 2026, 2878, 2166, 1012]`,highlighted:`[<span class="hljs-number">101</span>, <span class="hljs-number">1045</span>, <span class="hljs-number">1005</span>, <span class="hljs-number">2310</span>, <span class="hljs-number">2042</span>, <span class="hljs-number">3403</span>, <span class="hljs-number">2005</span>, <span class="hljs-number">1037</span>, <span class="hljs-number">17662</span>, <span class="hljs-number">12172</span>, <span class="hljs-number">2607</span>, <span class="hljs-number">2026</span>, <span class="hljs-number">2878</span>, <span class="hljs-number">2166</span>, <span class="hljs-number">1012</span>, <span class="hljs-number">102</span>]
[<span class="hljs-number">1045</span>, <span class="hljs-number">1005</span>, <span class="hljs-number">2310</span>, <span class="hljs-number">2042</span>, <span class="hljs-number">3403</span>, <span class="hljs-number">2005</span>, <span class="hljs-number">1037</span>, <span class="hljs-number">17662</span>, <span class="hljs-number">12172</span>, <span class="hljs-number">2607</span>, <span class="hljs-number">2026</span>, <span class="hljs-number">2878</span>, <span class="hljs-number">2166</span>, <span class="hljs-number">1012</span>]`}}),ne=new x({props:{code:`print(tokenizer.decode(model_inputs["input_ids"]))
print(tokenizer.decode(ids))`,highlighted:`<span class="hljs-built_in">print</span>(tokenizer.decode(model_inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]))
<span class="hljs-built_in">print</span>(tokenizer.decode(ids))`}}),te=new x({props:{code:`"[CLS] i've been waiting for a huggingface course my whole life. [SEP]"
"i've been waiting for a huggingface course my whole life."`,highlighted:`<span class="hljs-string">&quot;[CLS] i&#x27;ve been waiting for a huggingface course my whole life. [SEP]&quot;</span>
<span class="hljs-string">&quot;i&#x27;ve been waiting for a huggingface course my whole life.&quot;</span>`}}),oe=new Sn({});const Hn=[Tt,yt],ue=[];function Mn(e,t){return e[0]==="pt"?0:1}return P=Mn(y),I=ue[P]=Hn[P](y),{c(){c=u("meta"),f=m(),v(l.$$.fragment),$=m(),M=u("h1"),J=u("a"),ke=u("span"),v(U.$$.fragment),ws=m(),be=u("span"),zs=o("Tout assembler"),Ke=m(),F.c(),re=m(),S=u("p"),Es=o("Dans les derni\xE8res sections, nous avons fait de notre mieux pour effectuer la plupart du travail manuellement. Nous avons explor\xE9 le fonctionnement des "),$e=u("em"),xs=o("tokenizers"),ys=o(" et examin\xE9 la tokenisation, la conversion en identifiants d\u2019entr\xE9e, le "),je=u("em"),Ts=o("padding"),Fs=o(", la troncature et les masques d\u2019attention."),Qe=m(),C=u("p"),Ps=o("Cependant, comme nous l\u2019avons vu dans la section 2, l\u2019API \u{1F917} "),we=u("em"),Is=o("Transformers"),Ss=o(" peut g\xE9rer tout cela pour nous via une fonction dans laquelle nous allons nous plonger ici. Lorsque vous appelez votre "),ze=u("code"),Cs=o("tokenizer"),As=o(" directement sur la phrase, vous r\xE9cup\xE9rez des entr\xE9es qui sont pr\xEAtes \xE0 \xEAtre pass\xE9es dans votre mod\xE8le :"),Ve=m(),v(K.$$.fragment),We=m(),A=u("p"),Hs=o("Ici, la variable "),Ee=u("code"),Ms=o("model_inputs"),Ds=o(" contient tout ce qui est n\xE9cessaire au bon fonctionnement d\u2019un mod\xE8le. Pour DistilBERT, cela inclut les identifiants d\u2019entr\xE9e ainsi que le masque d\u2019attention. D\u2019autres mod\xE8les qui acceptent des entr\xE9es suppl\xE9mentaires sont \xE9galement fournis par l\u2019objet "),xe=u("code"),Rs=o("tokenizer"),Js=o("."),Xe=m(),pe=u("p"),Ns=o("Comme nous allons le voir dans les quelques exemples ci-dessous, cette m\xE9thode est tr\xE8s puissante. Premi\xE8rement, elle peut tokeniser une seule s\xE9quence :"),Ye=m(),v(Q.$$.fragment),Ze=m(),ce=u("p"),Ls=o("Elle g\xE8re \xE9galement plusieurs s\xE9quences \xE0 la fois, sans modification de l\u2019API :"),es=m(),v(V.$$.fragment),ss=m(),N=u("p"),Bs=o("Il est possible de faire du "),ye=u("em"),Os=o("padding"),Gs=o(" selon plusieurs objectifs :"),ns=m(),v(W.$$.fragment),ts=m(),me=u("p"),Us=o("La fonction peut \xE9galement tronquer les s\xE9quences :"),os=m(),v(X.$$.fragment),as=m(),q=u("p"),Ks=o("L\u2019objet "),Te=u("code"),Qs=o("tokenizer"),Vs=o(" peut g\xE9rer la conversion en des tenseurs de "),Fe=u("em"),Ws=o("frameworks"),Xs=o(" sp\xE9cifiques. Ils peuvent ensuite \xEAtre directement envoy\xE9s au mod\xE8le. Par exemple, dans le code suivant, nous demandons au "),Pe=u("em"),Ys=o("tokenizer"),Zs=o(" de retourner des tenseurs PyTorch lorsque l\u2019on sp\xE9cifie "),Ie=u("code"),en=o('"pt"'),sn=o(", de retourner des tenseurs TensorFlow lorsque l\u2019on sp\xE9cifie "),Se=u("code"),nn=o('"tf"'),tn=o(" et des tableaux NumPy lorsque l\u2019on indique "),Ce=u("code"),on=o('"np"'),an=o(" :"),ls=m(),v(Y.$$.fragment),us=m(),D=u("h2"),L=u("a"),Ae=u("span"),v(Z.$$.fragment),ln=m(),He=u("span"),un=o("Jetons sp\xE9ciaux"),is=m(),B=u("p"),rn=o("Si nous jetons un coup d\u2019\u0153il aux identifiants d\u2019entr\xE9e renvoy\xE9s par le "),Me=u("em"),pn=o("tokenizer"),cn=o(", nous verrons qu\u2019ils sont un peu diff\xE9rents de ceux que nous avions pr\xE9c\xE9demment :"),rs=m(),v(ee.$$.fragment),ps=m(),v(se.$$.fragment),cs=m(),de=u("p"),mn=o("Un identifiant symbolique a \xE9t\xE9 ajout\xE9 au d\xE9but ainsi qu\u2019un autre \xE0 la fin. D\xE9codons les deux s\xE9quences d\u2019identifiants ci-dessus pour voir de quoi il s\u2019agit :"),ms=m(),v(ne.$$.fragment),ds=m(),v(te.$$.fragment),fs=m(),j=u("p"),dn=o("Le "),De=u("em"),fn=o("tokenizer"),gn=o(" a ajout\xE9 le mot sp\xE9cial "),Re=u("code"),hn=o("[CLS]"),qn=o(" au d\xE9but et le mot sp\xE9cial "),Je=u("code"),vn=o("[SEP]"),_n=o(" \xE0 la fin. C\u2019est parce que le mod\xE8le a \xE9t\xE9 pr\xE9-entra\xEEn\xE9 avec ces mots, donc pour obtenir les m\xEAmes r\xE9sultats pour l\u2019inf\xE9rence, nous devons \xE9galement les ajouter. Notez que certains mod\xE8les n\u2019ajoutent pas de mots sp\xE9ciaux, ou en ajoutent des diff\xE9rents. Les mod\xE8les peuvent aussi ajouter ces mots sp\xE9ciaux seulement au d\xE9but, ou seulement \xE0 la fin. Dans tous les cas, le "),Ne=u("em"),kn=o("tokenizer"),bn=o(" sait lesquels sont attendus et s\u2019en occupe pour vous."),gs=m(),R=u("h2"),O=u("a"),Le=u("span"),v(oe.$$.fragment),$n=m(),ae=u("span"),jn=o("Conclusion : du "),Be=u("i"),wn=o("tokenizer"),zn=o(" au mod\xE8le"),hs=m(),E=u("p"),En=o("Maintenant que nous avons vu toutes les \xE9tapes individuelles que l\u2019objet "),Oe=u("code"),xn=o("tokenizer"),yn=o(" utilise lorsqu\u2019il est appliqu\xE9 sur des textes, voyons une derni\xE8re fois comment il peut g\xE9rer plusieurs s\xE9quences ("),Ge=u("em"),Tn=o("padding"),Fn=o("), de tr\xE8s longues s\xE9quences ("),Ue=u("em"),Pn=o("troncation"),In=o(") et plusieurs types de tenseurs avec son API principale :"),qs=m(),I.c(),fe=ht(),this.h()},l(e){const t=jt('[data-svelte="svelte-1phssyn"]',document.head);c=i(t,"META",{name:!0,content:!0}),t.forEach(n),f=d(e),_(l.$$.fragment,e),$=d(e),M=i(e,"H1",{class:!0});var ie=r(M);J=i(ie,"A",{id:!0,class:!0,href:!0});var ge=r(J);ke=i(ge,"SPAN",{});var he=r(ke);_(U.$$.fragment,he),he.forEach(n),ge.forEach(n),ws=d(ie),be=i(ie,"SPAN",{});var Dn=r(be);zs=a(Dn,"Tout assembler"),Dn.forEach(n),ie.forEach(n),Ke=d(e),F.l(e),re=d(e),S=i(e,"P",{});var qe=r(S);Es=a(qe,"Dans les derni\xE8res sections, nous avons fait de notre mieux pour effectuer la plupart du travail manuellement. Nous avons explor\xE9 le fonctionnement des "),$e=i(qe,"EM",{});var Rn=r($e);xs=a(Rn,"tokenizers"),Rn.forEach(n),ys=a(qe," et examin\xE9 la tokenisation, la conversion en identifiants d\u2019entr\xE9e, le "),je=i(qe,"EM",{});var Jn=r(je);Ts=a(Jn,"padding"),Jn.forEach(n),Fs=a(qe,", la troncature et les masques d\u2019attention."),qe.forEach(n),Qe=d(e),C=i(e,"P",{});var ve=r(C);Ps=a(ve,"Cependant, comme nous l\u2019avons vu dans la section 2, l\u2019API \u{1F917} "),we=i(ve,"EM",{});var Nn=r(we);Is=a(Nn,"Transformers"),Nn.forEach(n),Ss=a(ve," peut g\xE9rer tout cela pour nous via une fonction dans laquelle nous allons nous plonger ici. Lorsque vous appelez votre "),ze=i(ve,"CODE",{});var Ln=r(ze);Cs=a(Ln,"tokenizer"),Ln.forEach(n),As=a(ve," directement sur la phrase, vous r\xE9cup\xE9rez des entr\xE9es qui sont pr\xEAtes \xE0 \xEAtre pass\xE9es dans votre mod\xE8le :"),ve.forEach(n),Ve=d(e),_(K.$$.fragment,e),We=d(e),A=i(e,"P",{});var _e=r(A);Hs=a(_e,"Ici, la variable "),Ee=i(_e,"CODE",{});var Bn=r(Ee);Ms=a(Bn,"model_inputs"),Bn.forEach(n),Ds=a(_e," contient tout ce qui est n\xE9cessaire au bon fonctionnement d\u2019un mod\xE8le. Pour DistilBERT, cela inclut les identifiants d\u2019entr\xE9e ainsi que le masque d\u2019attention. D\u2019autres mod\xE8les qui acceptent des entr\xE9es suppl\xE9mentaires sont \xE9galement fournis par l\u2019objet "),xe=i(_e,"CODE",{});var On=r(xe);Rs=a(On,"tokenizer"),On.forEach(n),Js=a(_e,"."),_e.forEach(n),Xe=d(e),pe=i(e,"P",{});var Gn=r(pe);Ns=a(Gn,"Comme nous allons le voir dans les quelques exemples ci-dessous, cette m\xE9thode est tr\xE8s puissante. Premi\xE8rement, elle peut tokeniser une seule s\xE9quence :"),Gn.forEach(n),Ye=d(e),_(Q.$$.fragment,e),Ze=d(e),ce=i(e,"P",{});var Un=r(ce);Ls=a(Un,"Elle g\xE8re \xE9galement plusieurs s\xE9quences \xE0 la fois, sans modification de l\u2019API :"),Un.forEach(n),es=d(e),_(V.$$.fragment,e),ss=d(e),N=i(e,"P",{});var _s=r(N);Bs=a(_s,"Il est possible de faire du "),ye=i(_s,"EM",{});var Kn=r(ye);Os=a(Kn,"padding"),Kn.forEach(n),Gs=a(_s," selon plusieurs objectifs :"),_s.forEach(n),ns=d(e),_(W.$$.fragment,e),ts=d(e),me=i(e,"P",{});var Qn=r(me);Us=a(Qn,"La fonction peut \xE9galement tronquer les s\xE9quences :"),Qn.forEach(n),os=d(e),_(X.$$.fragment,e),as=d(e),q=i(e,"P",{});var w=r(q);Ks=a(w,"L\u2019objet "),Te=i(w,"CODE",{});var Vn=r(Te);Qs=a(Vn,"tokenizer"),Vn.forEach(n),Vs=a(w," peut g\xE9rer la conversion en des tenseurs de "),Fe=i(w,"EM",{});var Wn=r(Fe);Ws=a(Wn,"frameworks"),Wn.forEach(n),Xs=a(w," sp\xE9cifiques. Ils peuvent ensuite \xEAtre directement envoy\xE9s au mod\xE8le. Par exemple, dans le code suivant, nous demandons au "),Pe=i(w,"EM",{});var Xn=r(Pe);Ys=a(Xn,"tokenizer"),Xn.forEach(n),Zs=a(w," de retourner des tenseurs PyTorch lorsque l\u2019on sp\xE9cifie "),Ie=i(w,"CODE",{});var Yn=r(Ie);en=a(Yn,'"pt"'),Yn.forEach(n),sn=a(w,", de retourner des tenseurs TensorFlow lorsque l\u2019on sp\xE9cifie "),Se=i(w,"CODE",{});var Zn=r(Se);nn=a(Zn,'"tf"'),Zn.forEach(n),tn=a(w," et des tableaux NumPy lorsque l\u2019on indique "),Ce=i(w,"CODE",{});var et=r(Ce);on=a(et,'"np"'),et.forEach(n),an=a(w," :"),w.forEach(n),ls=d(e),_(Y.$$.fragment,e),us=d(e),D=i(e,"H2",{class:!0});var ks=r(D);L=i(ks,"A",{id:!0,class:!0,href:!0});var st=r(L);Ae=i(st,"SPAN",{});var nt=r(Ae);_(Z.$$.fragment,nt),nt.forEach(n),st.forEach(n),ln=d(ks),He=i(ks,"SPAN",{});var tt=r(He);un=a(tt,"Jetons sp\xE9ciaux"),tt.forEach(n),ks.forEach(n),is=d(e),B=i(e,"P",{});var bs=r(B);rn=a(bs,"Si nous jetons un coup d\u2019\u0153il aux identifiants d\u2019entr\xE9e renvoy\xE9s par le "),Me=i(bs,"EM",{});var ot=r(Me);pn=a(ot,"tokenizer"),ot.forEach(n),cn=a(bs,", nous verrons qu\u2019ils sont un peu diff\xE9rents de ceux que nous avions pr\xE9c\xE9demment :"),bs.forEach(n),rs=d(e),_(ee.$$.fragment,e),ps=d(e),_(se.$$.fragment,e),cs=d(e),de=i(e,"P",{});var at=r(de);mn=a(at,"Un identifiant symbolique a \xE9t\xE9 ajout\xE9 au d\xE9but ainsi qu\u2019un autre \xE0 la fin. D\xE9codons les deux s\xE9quences d\u2019identifiants ci-dessus pour voir de quoi il s\u2019agit :"),at.forEach(n),ms=d(e),_(ne.$$.fragment,e),ds=d(e),_(te.$$.fragment,e),fs=d(e),j=i(e,"P",{});var H=r(j);dn=a(H,"Le "),De=i(H,"EM",{});var lt=r(De);fn=a(lt,"tokenizer"),lt.forEach(n),gn=a(H," a ajout\xE9 le mot sp\xE9cial "),Re=i(H,"CODE",{});var ut=r(Re);hn=a(ut,"[CLS]"),ut.forEach(n),qn=a(H," au d\xE9but et le mot sp\xE9cial "),Je=i(H,"CODE",{});var it=r(Je);vn=a(it,"[SEP]"),it.forEach(n),_n=a(H," \xE0 la fin. C\u2019est parce que le mod\xE8le a \xE9t\xE9 pr\xE9-entra\xEEn\xE9 avec ces mots, donc pour obtenir les m\xEAmes r\xE9sultats pour l\u2019inf\xE9rence, nous devons \xE9galement les ajouter. Notez que certains mod\xE8les n\u2019ajoutent pas de mots sp\xE9ciaux, ou en ajoutent des diff\xE9rents. Les mod\xE8les peuvent aussi ajouter ces mots sp\xE9ciaux seulement au d\xE9but, ou seulement \xE0 la fin. Dans tous les cas, le "),Ne=i(H,"EM",{});var rt=r(Ne);kn=a(rt,"tokenizer"),rt.forEach(n),bn=a(H," sait lesquels sont attendus et s\u2019en occupe pour vous."),H.forEach(n),gs=d(e),R=i(e,"H2",{class:!0});var $s=r(R);O=i($s,"A",{id:!0,class:!0,href:!0});var pt=r(O);Le=i(pt,"SPAN",{});var ct=r(Le);_(oe.$$.fragment,ct),ct.forEach(n),pt.forEach(n),$n=d($s),ae=i($s,"SPAN",{});var js=r(ae);jn=a(js,"Conclusion : du "),Be=i(js,"I",{});var mt=r(Be);wn=a(mt,"tokenizer"),mt.forEach(n),zn=a(js," au mod\xE8le"),js.forEach(n),$s.forEach(n),hs=d(e),E=i(e,"P",{});var G=r(E);En=a(G,"Maintenant que nous avons vu toutes les \xE9tapes individuelles que l\u2019objet "),Oe=i(G,"CODE",{});var dt=r(Oe);xn=a(dt,"tokenizer"),dt.forEach(n),yn=a(G," utilise lorsqu\u2019il est appliqu\xE9 sur des textes, voyons une derni\xE8re fois comment il peut g\xE9rer plusieurs s\xE9quences ("),Ge=i(G,"EM",{});var ft=r(Ge);Tn=a(ft,"padding"),ft.forEach(n),Fn=a(G,"), de tr\xE8s longues s\xE9quences ("),Ue=i(G,"EM",{});var gt=r(Ue);Pn=a(gt,"troncation"),gt.forEach(n),In=a(G,") et plusieurs types de tenseurs avec son API principale :"),G.forEach(n),qs=d(e),I.l(e),fe=ht(),this.h()},h(){z(c,"name","hf:doc:metadata"),z(c,"content",JSON.stringify(Pt)),z(J,"id","tout-assembler"),z(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),z(J,"href","#tout-assembler"),z(M,"class","relative group"),z(L,"id","jetons-spciaux"),z(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),z(L,"href","#jetons-spciaux"),z(D,"class","relative group"),z(O,"id","conclusion-du-itokenizeri-au-modle"),z(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),z(O,"href","#conclusion-du-itokenizeri-au-modle"),z(R,"class","relative group")},m(e,t){s(document.head,c),p(e,f,t),k(l,e,t),p(e,$,t),p(e,M,t),s(M,J),s(J,ke),k(U,ke,null),s(M,ws),s(M,be),s(be,zs),p(e,Ke,t),le[T].m(e,t),p(e,re,t),p(e,S,t),s(S,Es),s(S,$e),s($e,xs),s(S,ys),s(S,je),s(je,Ts),s(S,Fs),p(e,Qe,t),p(e,C,t),s(C,Ps),s(C,we),s(we,Is),s(C,Ss),s(C,ze),s(ze,Cs),s(C,As),p(e,Ve,t),k(K,e,t),p(e,We,t),p(e,A,t),s(A,Hs),s(A,Ee),s(Ee,Ms),s(A,Ds),s(A,xe),s(xe,Rs),s(A,Js),p(e,Xe,t),p(e,pe,t),s(pe,Ns),p(e,Ye,t),k(Q,e,t),p(e,Ze,t),p(e,ce,t),s(ce,Ls),p(e,es,t),k(V,e,t),p(e,ss,t),p(e,N,t),s(N,Bs),s(N,ye),s(ye,Os),s(N,Gs),p(e,ns,t),k(W,e,t),p(e,ts,t),p(e,me,t),s(me,Us),p(e,os,t),k(X,e,t),p(e,as,t),p(e,q,t),s(q,Ks),s(q,Te),s(Te,Qs),s(q,Vs),s(q,Fe),s(Fe,Ws),s(q,Xs),s(q,Pe),s(Pe,Ys),s(q,Zs),s(q,Ie),s(Ie,en),s(q,sn),s(q,Se),s(Se,nn),s(q,tn),s(q,Ce),s(Ce,on),s(q,an),p(e,ls,t),k(Y,e,t),p(e,us,t),p(e,D,t),s(D,L),s(L,Ae),k(Z,Ae,null),s(D,ln),s(D,He),s(He,un),p(e,is,t),p(e,B,t),s(B,rn),s(B,Me),s(Me,pn),s(B,cn),p(e,rs,t),k(ee,e,t),p(e,ps,t),k(se,e,t),p(e,cs,t),p(e,de,t),s(de,mn),p(e,ms,t),k(ne,e,t),p(e,ds,t),k(te,e,t),p(e,fs,t),p(e,j,t),s(j,dn),s(j,De),s(De,fn),s(j,gn),s(j,Re),s(Re,hn),s(j,qn),s(j,Je),s(Je,vn),s(j,_n),s(j,Ne),s(Ne,kn),s(j,bn),p(e,gs,t),p(e,R,t),s(R,O),s(O,Le),k(oe,Le,null),s(R,$n),s(R,ae),s(ae,jn),s(ae,Be),s(Be,wn),s(ae,zn),p(e,hs,t),p(e,E,t),s(E,En),s(E,Oe),s(Oe,xn),s(E,yn),s(E,Ge),s(Ge,Tn),s(E,Fn),s(E,Ue),s(Ue,Pn),s(E,In),p(e,qs,t),ue[P].m(e,t),p(e,fe,t),vs=!0},p(e,[t]){const ie={};t&1&&(ie.fw=e[0]),l.$set(ie);let ge=T;T=An(e),T!==ge&&(vt(),g(le[ge],1,1,()=>{le[ge]=null}),qt(),F=le[T],F||(F=le[T]=Cn[T](e),F.c()),h(F,1),F.m(re.parentNode,re));let he=P;P=Mn(e),P!==he&&(vt(),g(ue[he],1,1,()=>{ue[he]=null}),qt(),I=ue[P],I||(I=ue[P]=Hn[P](e),I.c()),h(I,1),I.m(fe.parentNode,fe))},i(e){vs||(h(l.$$.fragment,e),h(U.$$.fragment,e),h(F),h(K.$$.fragment,e),h(Q.$$.fragment,e),h(V.$$.fragment,e),h(W.$$.fragment,e),h(X.$$.fragment,e),h(Y.$$.fragment,e),h(Z.$$.fragment,e),h(ee.$$.fragment,e),h(se.$$.fragment,e),h(ne.$$.fragment,e),h(te.$$.fragment,e),h(oe.$$.fragment,e),h(I),vs=!0)},o(e){g(l.$$.fragment,e),g(U.$$.fragment,e),g(F),g(K.$$.fragment,e),g(Q.$$.fragment,e),g(V.$$.fragment,e),g(W.$$.fragment,e),g(X.$$.fragment,e),g(Y.$$.fragment,e),g(Z.$$.fragment,e),g(ee.$$.fragment,e),g(se.$$.fragment,e),g(ne.$$.fragment,e),g(te.$$.fragment,e),g(oe.$$.fragment,e),g(I),vs=!1},d(e){n(c),e&&n(f),b(l,e),e&&n($),e&&n(M),b(U),e&&n(Ke),le[T].d(e),e&&n(re),e&&n(S),e&&n(Qe),e&&n(C),e&&n(Ve),b(K,e),e&&n(We),e&&n(A),e&&n(Xe),e&&n(pe),e&&n(Ye),b(Q,e),e&&n(Ze),e&&n(ce),e&&n(es),b(V,e),e&&n(ss),e&&n(N),e&&n(ns),b(W,e),e&&n(ts),e&&n(me),e&&n(os),b(X,e),e&&n(as),e&&n(q),e&&n(ls),b(Y,e),e&&n(us),e&&n(D),b(Z),e&&n(is),e&&n(B),e&&n(rs),b(ee,e),e&&n(ps),b(se,e),e&&n(cs),e&&n(de),e&&n(ms),b(ne,e),e&&n(ds),b(te,e),e&&n(fs),e&&n(j),e&&n(gs),e&&n(R),b(oe),e&&n(hs),e&&n(E),e&&n(qs),ue[P].d(e),e&&n(fe)}}}const Pt={local:"tout-assembler",sections:[{local:"jetons-spciaux",title:"Jetons sp\xE9ciaux"},{local:"conclusion-du-itokenizeri-au-modle",title:"Conclusion : du <i>tokenizer</i> au mod\xE8le"}],title:"Tout assembler"};function It(y,c,f){let l="pt";return wt(()=>{const $=new URLSearchParams(window.location.search);f(0,l=$.get("fw")||"pt")}),[l]}class Dt extends kt{constructor(c){super();bt(this,c,It,Ft,$t,{})}}export{Dt as default,Pt as metadata};
