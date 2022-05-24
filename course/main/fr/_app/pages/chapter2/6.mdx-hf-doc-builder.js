import{S as kn,i as bn,s as $n,e as u,k as m,w as v,t as o,l as hn,M as jn,c as i,d as t,m as d,x as _,a as r,h as a,b as z,G as s,g as p,y as k,o as g,p as qn,q as h,B as b,v as wn,n as vn}from"../../chunks/vendor-hf-doc-builder.js";import{I as It}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as x}from"../../chunks/CodeBlock-hf-doc-builder.js";import{D as _n}from"../../chunks/DocNotebookDropdown-hf-doc-builder.js";import{F as zn}from"../../chunks/FrameworkSwitchCourse-hf-doc-builder.js";function En(y){let c,f;return c=new _n({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter2/section6_tf.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter2/section6_tf.ipynb"}]}}),{c(){v(c.$$.fragment)},l(l){_(c.$$.fragment,l)},m(l,$){k(c,l,$),f=!0},i(l){f||(h(c.$$.fragment,l),f=!0)},o(l){g(c.$$.fragment,l),f=!1},d(l){b(c,l)}}}function xn(y){let c,f;return c=new _n({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter2/section6_pt.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter2/section6_pt.ipynb"}]}}),{c(){v(c.$$.fragment)},l(l){_(c.$$.fragment,l)},m(l,$){k(c,l,$),f=!0},i(l){f||(h(c.$$.fragment,l),f=!0)},o(l){g(c.$$.fragment,l),f=!1},d(l){b(c,l)}}}function yn(y){let c,f;return c=new x({props:{code:`import tensorflow as tf
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
output = model(**tokens)`}}),{c(){v(c.$$.fragment)},l(l){_(c.$$.fragment,l)},m(l,$){k(c,l,$),f=!0},i(l){f||(h(c.$$.fragment,l),f=!0)},o(l){g(c.$$.fragment,l),f=!1},d(l){b(c,l)}}}function Tn(y){let c,f;return c=new x({props:{code:`import torch
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
output = model(**tokens)`}}),{c(){v(c.$$.fragment)},l(l){_(c.$$.fragment,l)},m(l,$){k(c,l,$),f=!0},i(l){f||(h(c.$$.fragment,l),f=!0)},o(l){g(c.$$.fragment,l),f=!1},d(l){b(c,l)}}}function Fn(y){let c,f,l,$,M,J,ke,U,ws,be,zs,Ke,T,F,re,S,Es,$e,xs,ys,je,Ts,Fs,Qe,A,Ps,we,Is,Ss,ze,As,Cs,Ve,K,We,C,Hs,Ee,Ms,Ds,xe,Rs,Js,Xe,pe,Ns,Ye,Q,Ze,ce,Ls,es,V,ss,N,Bs,ye,Os,Gs,ts,W,ns,me,Us,os,X,as,q,Ks,Te,Qs,Vs,Fe,Ws,Xs,Pe,Ys,Zs,Ie,et,st,Se,tt,nt,Ae,ot,at,ls,Y,us,D,L,Ce,Z,lt,He,ut,is,B,it,Me,rt,pt,rs,ee,ps,se,cs,de,ct,ms,te,ds,ne,fs,j,mt,De,dt,ft,Re,gt,ht,Je,qt,vt,Ne,_t,kt,gs,R,O,Le,oe,bt,ae,$t,Be,jt,wt,hs,E,zt,Oe,Et,xt,Ge,yt,Tt,Ue,Ft,Pt,qs,P,I,fe,vs;l=new zn({props:{fw:y[0]}}),U=new It({});const St=[xn,En],le=[];function At(e,n){return e[0]==="pt"?0:1}T=At(y),F=le[T]=St[T](y),K=new x({props:{code:`from transformers import AutoTokenizer

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
model_inputs = tokenizer(sequences, padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)`}}),Z=new It({}),ee=new x({props:{code:`sequence = "I've been waiting for a HuggingFace course my whole life."
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
[<span class="hljs-number">1045</span>, <span class="hljs-number">1005</span>, <span class="hljs-number">2310</span>, <span class="hljs-number">2042</span>, <span class="hljs-number">3403</span>, <span class="hljs-number">2005</span>, <span class="hljs-number">1037</span>, <span class="hljs-number">17662</span>, <span class="hljs-number">12172</span>, <span class="hljs-number">2607</span>, <span class="hljs-number">2026</span>, <span class="hljs-number">2878</span>, <span class="hljs-number">2166</span>, <span class="hljs-number">1012</span>]`}}),te=new x({props:{code:`print(tokenizer.decode(model_inputs["input_ids"]))
print(tokenizer.decode(ids))`,highlighted:`<span class="hljs-built_in">print</span>(tokenizer.decode(model_inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]))
<span class="hljs-built_in">print</span>(tokenizer.decode(ids))`}}),ne=new x({props:{code:`"[CLS] i've been waiting for a huggingface course my whole life. [SEP]"
"i've been waiting for a huggingface course my whole life."`,highlighted:`<span class="hljs-string">&quot;[CLS] i&#x27;ve been waiting for a huggingface course my whole life. [SEP]&quot;</span>
<span class="hljs-string">&quot;i&#x27;ve been waiting for a huggingface course my whole life.&quot;</span>`}}),oe=new It({});const Ct=[Tn,yn],ue=[];function Ht(e,n){return e[0]==="pt"?0:1}return P=Ht(y),I=ue[P]=Ct[P](y),{c(){c=u("meta"),f=m(),v(l.$$.fragment),$=m(),M=u("h1"),J=u("a"),ke=u("span"),v(U.$$.fragment),ws=m(),be=u("span"),zs=o("Tout assembler"),Ke=m(),F.c(),re=m(),S=u("p"),Es=o("Dans les derni\xE8res sections, nous avons fait de notre mieux pour effectuer la plupart du travail manuellement. Nous avons explor\xE9 le fonctionnement des "),$e=u("em"),xs=o("tokenizers"),ys=o(" et examin\xE9 la tokenisation, la conversion en identifiants d\u2019entr\xE9e, le "),je=u("em"),Ts=o("padding"),Fs=o(", la troncature et les masques d\u2019attention."),Qe=m(),A=u("p"),Ps=o("Cependant, comme nous l\u2019avons vu dans la section 2, l\u2019API \u{1F917} "),we=u("em"),Is=o("Transformers"),Ss=o(" peut g\xE9rer tout cela pour nous via une fonction dans laquelle nous allons nous plonger ici. Lorsque vous appelez votre "),ze=u("code"),As=o("tokenizer"),Cs=o(" directement sur la phrase, vous r\xE9cup\xE9rez des entr\xE9es qui sont pr\xEAtes \xE0 \xEAtre pass\xE9es dans votre mod\xE8le :"),Ve=m(),v(K.$$.fragment),We=m(),C=u("p"),Hs=o("Ici, la variable "),Ee=u("code"),Ms=o("model_inputs"),Ds=o(" contient tout ce qui est n\xE9cessaire au bon fonctionnement d\u2019un mod\xE8le. Pour DistilBERT, cela inclut les identifiants d\u2019entr\xE9e ainsi que le masque d\u2019attention. D\u2019autres mod\xE8les qui acceptent des entr\xE9es suppl\xE9mentaires sont \xE9galement fournis par l\u2019objet "),xe=u("code"),Rs=o("tokenizer"),Js=o("."),Xe=m(),pe=u("p"),Ns=o("Comme nous allons le voir dans les quelques exemples ci-dessous, cette m\xE9thode est tr\xE8s puissante. Premi\xE8rement, elle peut tokeniser une seule s\xE9quence :"),Ye=m(),v(Q.$$.fragment),Ze=m(),ce=u("p"),Ls=o("Elle g\xE8re \xE9galement plusieurs s\xE9quences \xE0 la fois, sans modification de l\u2019API :"),es=m(),v(V.$$.fragment),ss=m(),N=u("p"),Bs=o("Il est possible de faire du "),ye=u("em"),Os=o("padding"),Gs=o(" selon plusieurs objectifs :"),ts=m(),v(W.$$.fragment),ns=m(),me=u("p"),Us=o("La fonction peut \xE9galement tronquer les s\xE9quences :"),os=m(),v(X.$$.fragment),as=m(),q=u("p"),Ks=o("L\u2019objet "),Te=u("code"),Qs=o("tokenizer"),Vs=o(" peut g\xE9rer la conversion en des tenseurs de "),Fe=u("em"),Ws=o("frameworks"),Xs=o(" sp\xE9cifiques. Ils peuvent ensuite \xEAtre directement envoy\xE9s au mod\xE8le. Par exemple, dans le code suivant, nous demandons au "),Pe=u("em"),Ys=o("tokenizer"),Zs=o(" de retourner des tenseurs PyTorch lorsque l\u2019on sp\xE9cifie "),Ie=u("code"),et=o('"pt"'),st=o(", de retourner des tenseurs TensorFlow lorsque l\u2019on sp\xE9cifie "),Se=u("code"),tt=o('"tf"'),nt=o(" et des tableaux NumPy lorsque l\u2019on indique "),Ae=u("code"),ot=o('"np"'),at=o(" :"),ls=m(),v(Y.$$.fragment),us=m(),D=u("h2"),L=u("a"),Ce=u("span"),v(Z.$$.fragment),lt=m(),He=u("span"),ut=o("Jetons sp\xE9ciaux"),is=m(),B=u("p"),it=o("Si nous jetons un coup d\u2019\u0153il aux identifiants d\u2019entr\xE9e renvoy\xE9s par le "),Me=u("em"),rt=o("tokenizer"),pt=o(", nous verrons qu\u2019ils sont un peu diff\xE9rents de ceux que nous avions pr\xE9c\xE9demment :"),rs=m(),v(ee.$$.fragment),ps=m(),v(se.$$.fragment),cs=m(),de=u("p"),ct=o("Un identifiant symbolique a \xE9t\xE9 ajout\xE9 au d\xE9but ainsi qu\u2019un autre \xE0 la fin. D\xE9codons les deux s\xE9quences d\u2019identifiants ci-dessus pour voir de quoi il s\u2019agit :"),ms=m(),v(te.$$.fragment),ds=m(),v(ne.$$.fragment),fs=m(),j=u("p"),mt=o("Le "),De=u("em"),dt=o("tokenizer"),ft=o(" a ajout\xE9 le mot sp\xE9cial "),Re=u("code"),gt=o("[CLS]"),ht=o(" au d\xE9but et le mot sp\xE9cial "),Je=u("code"),qt=o("[SEP]"),vt=o(" \xE0 la fin. C\u2019est parce que le mod\xE8le a \xE9t\xE9 pr\xE9-entra\xEEn\xE9 avec ces mots, donc pour obtenir les m\xEAmes r\xE9sultats pour l\u2019inf\xE9rence, nous devons \xE9galement les ajouter. Notez que certains mod\xE8les n\u2019ajoutent pas de mots sp\xE9ciaux, ou en ajoutent des diff\xE9rents. Les mod\xE8les peuvent aussi ajouter ces mots sp\xE9ciaux seulement au d\xE9but, ou seulement \xE0 la fin. Dans tous les cas, le "),Ne=u("em"),_t=o("tokenizer"),kt=o(" sait lesquels sont attendus et s\u2019en occupe pour vous."),gs=m(),R=u("h2"),O=u("a"),Le=u("span"),v(oe.$$.fragment),bt=m(),ae=u("span"),$t=o("Conclusion : du "),Be=u("i"),jt=o("tokenizer"),wt=o(" au mod\xE8le"),hs=m(),E=u("p"),zt=o("Maintenant que nous avons vu toutes les \xE9tapes individuelles que l\u2019objet "),Oe=u("code"),Et=o("tokenizer"),xt=o(" utilise lorsqu\u2019il est appliqu\xE9 sur des textes, voyons une derni\xE8re fois comment il peut g\xE9rer plusieurs s\xE9quences ("),Ge=u("em"),yt=o("padding"),Tt=o("), de tr\xE8s longues s\xE9quences ("),Ue=u("em"),Ft=o("troncation"),Pt=o(") et plusieurs types de tenseurs avec son API principale :"),qs=m(),I.c(),fe=hn(),this.h()},l(e){const n=jn('[data-svelte="svelte-1phssyn"]',document.head);c=i(n,"META",{name:!0,content:!0}),n.forEach(t),f=d(e),_(l.$$.fragment,e),$=d(e),M=i(e,"H1",{class:!0});var ie=r(M);J=i(ie,"A",{id:!0,class:!0,href:!0});var ge=r(J);ke=i(ge,"SPAN",{});var he=r(ke);_(U.$$.fragment,he),he.forEach(t),ge.forEach(t),ws=d(ie),be=i(ie,"SPAN",{});var Mt=r(be);zs=a(Mt,"Tout assembler"),Mt.forEach(t),ie.forEach(t),Ke=d(e),F.l(e),re=d(e),S=i(e,"P",{});var qe=r(S);Es=a(qe,"Dans les derni\xE8res sections, nous avons fait de notre mieux pour effectuer la plupart du travail manuellement. Nous avons explor\xE9 le fonctionnement des "),$e=i(qe,"EM",{});var Dt=r($e);xs=a(Dt,"tokenizers"),Dt.forEach(t),ys=a(qe," et examin\xE9 la tokenisation, la conversion en identifiants d\u2019entr\xE9e, le "),je=i(qe,"EM",{});var Rt=r(je);Ts=a(Rt,"padding"),Rt.forEach(t),Fs=a(qe,", la troncature et les masques d\u2019attention."),qe.forEach(t),Qe=d(e),A=i(e,"P",{});var ve=r(A);Ps=a(ve,"Cependant, comme nous l\u2019avons vu dans la section 2, l\u2019API \u{1F917} "),we=i(ve,"EM",{});var Jt=r(we);Is=a(Jt,"Transformers"),Jt.forEach(t),Ss=a(ve," peut g\xE9rer tout cela pour nous via une fonction dans laquelle nous allons nous plonger ici. Lorsque vous appelez votre "),ze=i(ve,"CODE",{});var Nt=r(ze);As=a(Nt,"tokenizer"),Nt.forEach(t),Cs=a(ve," directement sur la phrase, vous r\xE9cup\xE9rez des entr\xE9es qui sont pr\xEAtes \xE0 \xEAtre pass\xE9es dans votre mod\xE8le :"),ve.forEach(t),Ve=d(e),_(K.$$.fragment,e),We=d(e),C=i(e,"P",{});var _e=r(C);Hs=a(_e,"Ici, la variable "),Ee=i(_e,"CODE",{});var Lt=r(Ee);Ms=a(Lt,"model_inputs"),Lt.forEach(t),Ds=a(_e," contient tout ce qui est n\xE9cessaire au bon fonctionnement d\u2019un mod\xE8le. Pour DistilBERT, cela inclut les identifiants d\u2019entr\xE9e ainsi que le masque d\u2019attention. D\u2019autres mod\xE8les qui acceptent des entr\xE9es suppl\xE9mentaires sont \xE9galement fournis par l\u2019objet "),xe=i(_e,"CODE",{});var Bt=r(xe);Rs=a(Bt,"tokenizer"),Bt.forEach(t),Js=a(_e,"."),_e.forEach(t),Xe=d(e),pe=i(e,"P",{});var Ot=r(pe);Ns=a(Ot,"Comme nous allons le voir dans les quelques exemples ci-dessous, cette m\xE9thode est tr\xE8s puissante. Premi\xE8rement, elle peut tokeniser une seule s\xE9quence :"),Ot.forEach(t),Ye=d(e),_(Q.$$.fragment,e),Ze=d(e),ce=i(e,"P",{});var Gt=r(ce);Ls=a(Gt,"Elle g\xE8re \xE9galement plusieurs s\xE9quences \xE0 la fois, sans modification de l\u2019API :"),Gt.forEach(t),es=d(e),_(V.$$.fragment,e),ss=d(e),N=i(e,"P",{});var _s=r(N);Bs=a(_s,"Il est possible de faire du "),ye=i(_s,"EM",{});var Ut=r(ye);Os=a(Ut,"padding"),Ut.forEach(t),Gs=a(_s," selon plusieurs objectifs :"),_s.forEach(t),ts=d(e),_(W.$$.fragment,e),ns=d(e),me=i(e,"P",{});var Kt=r(me);Us=a(Kt,"La fonction peut \xE9galement tronquer les s\xE9quences :"),Kt.forEach(t),os=d(e),_(X.$$.fragment,e),as=d(e),q=i(e,"P",{});var w=r(q);Ks=a(w,"L\u2019objet "),Te=i(w,"CODE",{});var Qt=r(Te);Qs=a(Qt,"tokenizer"),Qt.forEach(t),Vs=a(w," peut g\xE9rer la conversion en des tenseurs de "),Fe=i(w,"EM",{});var Vt=r(Fe);Ws=a(Vt,"frameworks"),Vt.forEach(t),Xs=a(w," sp\xE9cifiques. Ils peuvent ensuite \xEAtre directement envoy\xE9s au mod\xE8le. Par exemple, dans le code suivant, nous demandons au "),Pe=i(w,"EM",{});var Wt=r(Pe);Ys=a(Wt,"tokenizer"),Wt.forEach(t),Zs=a(w," de retourner des tenseurs PyTorch lorsque l\u2019on sp\xE9cifie "),Ie=i(w,"CODE",{});var Xt=r(Ie);et=a(Xt,'"pt"'),Xt.forEach(t),st=a(w,", de retourner des tenseurs TensorFlow lorsque l\u2019on sp\xE9cifie "),Se=i(w,"CODE",{});var Yt=r(Se);tt=a(Yt,'"tf"'),Yt.forEach(t),nt=a(w," et des tableaux NumPy lorsque l\u2019on indique "),Ae=i(w,"CODE",{});var Zt=r(Ae);ot=a(Zt,'"np"'),Zt.forEach(t),at=a(w," :"),w.forEach(t),ls=d(e),_(Y.$$.fragment,e),us=d(e),D=i(e,"H2",{class:!0});var ks=r(D);L=i(ks,"A",{id:!0,class:!0,href:!0});var en=r(L);Ce=i(en,"SPAN",{});var sn=r(Ce);_(Z.$$.fragment,sn),sn.forEach(t),en.forEach(t),lt=d(ks),He=i(ks,"SPAN",{});var tn=r(He);ut=a(tn,"Jetons sp\xE9ciaux"),tn.forEach(t),ks.forEach(t),is=d(e),B=i(e,"P",{});var bs=r(B);it=a(bs,"Si nous jetons un coup d\u2019\u0153il aux identifiants d\u2019entr\xE9e renvoy\xE9s par le "),Me=i(bs,"EM",{});var nn=r(Me);rt=a(nn,"tokenizer"),nn.forEach(t),pt=a(bs,", nous verrons qu\u2019ils sont un peu diff\xE9rents de ceux que nous avions pr\xE9c\xE9demment :"),bs.forEach(t),rs=d(e),_(ee.$$.fragment,e),ps=d(e),_(se.$$.fragment,e),cs=d(e),de=i(e,"P",{});var on=r(de);ct=a(on,"Un identifiant symbolique a \xE9t\xE9 ajout\xE9 au d\xE9but ainsi qu\u2019un autre \xE0 la fin. D\xE9codons les deux s\xE9quences d\u2019identifiants ci-dessus pour voir de quoi il s\u2019agit :"),on.forEach(t),ms=d(e),_(te.$$.fragment,e),ds=d(e),_(ne.$$.fragment,e),fs=d(e),j=i(e,"P",{});var H=r(j);mt=a(H,"Le "),De=i(H,"EM",{});var an=r(De);dt=a(an,"tokenizer"),an.forEach(t),ft=a(H," a ajout\xE9 le mot sp\xE9cial "),Re=i(H,"CODE",{});var ln=r(Re);gt=a(ln,"[CLS]"),ln.forEach(t),ht=a(H," au d\xE9but et le mot sp\xE9cial "),Je=i(H,"CODE",{});var un=r(Je);qt=a(un,"[SEP]"),un.forEach(t),vt=a(H," \xE0 la fin. C\u2019est parce que le mod\xE8le a \xE9t\xE9 pr\xE9-entra\xEEn\xE9 avec ces mots, donc pour obtenir les m\xEAmes r\xE9sultats pour l\u2019inf\xE9rence, nous devons \xE9galement les ajouter. Notez que certains mod\xE8les n\u2019ajoutent pas de mots sp\xE9ciaux, ou en ajoutent des diff\xE9rents. Les mod\xE8les peuvent aussi ajouter ces mots sp\xE9ciaux seulement au d\xE9but, ou seulement \xE0 la fin. Dans tous les cas, le "),Ne=i(H,"EM",{});var rn=r(Ne);_t=a(rn,"tokenizer"),rn.forEach(t),kt=a(H," sait lesquels sont attendus et s\u2019en occupe pour vous."),H.forEach(t),gs=d(e),R=i(e,"H2",{class:!0});var $s=r(R);O=i($s,"A",{id:!0,class:!0,href:!0});var pn=r(O);Le=i(pn,"SPAN",{});var cn=r(Le);_(oe.$$.fragment,cn),cn.forEach(t),pn.forEach(t),bt=d($s),ae=i($s,"SPAN",{});var js=r(ae);$t=a(js,"Conclusion : du "),Be=i(js,"I",{});var mn=r(Be);jt=a(mn,"tokenizer"),mn.forEach(t),wt=a(js," au mod\xE8le"),js.forEach(t),$s.forEach(t),hs=d(e),E=i(e,"P",{});var G=r(E);zt=a(G,"Maintenant que nous avons vu toutes les \xE9tapes individuelles que l\u2019objet "),Oe=i(G,"CODE",{});var dn=r(Oe);Et=a(dn,"tokenizer"),dn.forEach(t),xt=a(G," utilise lorsqu\u2019il est appliqu\xE9 sur des textes, voyons une derni\xE8re fois comment il peut g\xE9rer plusieurs s\xE9quences ("),Ge=i(G,"EM",{});var fn=r(Ge);yt=a(fn,"padding"),fn.forEach(t),Tt=a(G,"), de tr\xE8s longues s\xE9quences ("),Ue=i(G,"EM",{});var gn=r(Ue);Ft=a(gn,"troncation"),gn.forEach(t),Pt=a(G,") et plusieurs types de tenseurs avec son API principale :"),G.forEach(t),qs=d(e),I.l(e),fe=hn(),this.h()},h(){z(c,"name","hf:doc:metadata"),z(c,"content",JSON.stringify(Pn)),z(J,"id","tout-assembler"),z(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),z(J,"href","#tout-assembler"),z(M,"class","relative group"),z(L,"id","jetons-spciaux"),z(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),z(L,"href","#jetons-spciaux"),z(D,"class","relative group"),z(O,"id","conclusion-du-itokenizeri-au-modle"),z(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),z(O,"href","#conclusion-du-itokenizeri-au-modle"),z(R,"class","relative group")},m(e,n){s(document.head,c),p(e,f,n),k(l,e,n),p(e,$,n),p(e,M,n),s(M,J),s(J,ke),k(U,ke,null),s(M,ws),s(M,be),s(be,zs),p(e,Ke,n),le[T].m(e,n),p(e,re,n),p(e,S,n),s(S,Es),s(S,$e),s($e,xs),s(S,ys),s(S,je),s(je,Ts),s(S,Fs),p(e,Qe,n),p(e,A,n),s(A,Ps),s(A,we),s(we,Is),s(A,Ss),s(A,ze),s(ze,As),s(A,Cs),p(e,Ve,n),k(K,e,n),p(e,We,n),p(e,C,n),s(C,Hs),s(C,Ee),s(Ee,Ms),s(C,Ds),s(C,xe),s(xe,Rs),s(C,Js),p(e,Xe,n),p(e,pe,n),s(pe,Ns),p(e,Ye,n),k(Q,e,n),p(e,Ze,n),p(e,ce,n),s(ce,Ls),p(e,es,n),k(V,e,n),p(e,ss,n),p(e,N,n),s(N,Bs),s(N,ye),s(ye,Os),s(N,Gs),p(e,ts,n),k(W,e,n),p(e,ns,n),p(e,me,n),s(me,Us),p(e,os,n),k(X,e,n),p(e,as,n),p(e,q,n),s(q,Ks),s(q,Te),s(Te,Qs),s(q,Vs),s(q,Fe),s(Fe,Ws),s(q,Xs),s(q,Pe),s(Pe,Ys),s(q,Zs),s(q,Ie),s(Ie,et),s(q,st),s(q,Se),s(Se,tt),s(q,nt),s(q,Ae),s(Ae,ot),s(q,at),p(e,ls,n),k(Y,e,n),p(e,us,n),p(e,D,n),s(D,L),s(L,Ce),k(Z,Ce,null),s(D,lt),s(D,He),s(He,ut),p(e,is,n),p(e,B,n),s(B,it),s(B,Me),s(Me,rt),s(B,pt),p(e,rs,n),k(ee,e,n),p(e,ps,n),k(se,e,n),p(e,cs,n),p(e,de,n),s(de,ct),p(e,ms,n),k(te,e,n),p(e,ds,n),k(ne,e,n),p(e,fs,n),p(e,j,n),s(j,mt),s(j,De),s(De,dt),s(j,ft),s(j,Re),s(Re,gt),s(j,ht),s(j,Je),s(Je,qt),s(j,vt),s(j,Ne),s(Ne,_t),s(j,kt),p(e,gs,n),p(e,R,n),s(R,O),s(O,Le),k(oe,Le,null),s(R,bt),s(R,ae),s(ae,$t),s(ae,Be),s(Be,jt),s(ae,wt),p(e,hs,n),p(e,E,n),s(E,zt),s(E,Oe),s(Oe,Et),s(E,xt),s(E,Ge),s(Ge,yt),s(E,Tt),s(E,Ue),s(Ue,Ft),s(E,Pt),p(e,qs,n),ue[P].m(e,n),p(e,fe,n),vs=!0},p(e,[n]){const ie={};n&1&&(ie.fw=e[0]),l.$set(ie);let ge=T;T=At(e),T!==ge&&(vn(),g(le[ge],1,1,()=>{le[ge]=null}),qn(),F=le[T],F||(F=le[T]=St[T](e),F.c()),h(F,1),F.m(re.parentNode,re));let he=P;P=Ht(e),P!==he&&(vn(),g(ue[he],1,1,()=>{ue[he]=null}),qn(),I=ue[P],I||(I=ue[P]=Ct[P](e),I.c()),h(I,1),I.m(fe.parentNode,fe))},i(e){vs||(h(l.$$.fragment,e),h(U.$$.fragment,e),h(F),h(K.$$.fragment,e),h(Q.$$.fragment,e),h(V.$$.fragment,e),h(W.$$.fragment,e),h(X.$$.fragment,e),h(Y.$$.fragment,e),h(Z.$$.fragment,e),h(ee.$$.fragment,e),h(se.$$.fragment,e),h(te.$$.fragment,e),h(ne.$$.fragment,e),h(oe.$$.fragment,e),h(I),vs=!0)},o(e){g(l.$$.fragment,e),g(U.$$.fragment,e),g(F),g(K.$$.fragment,e),g(Q.$$.fragment,e),g(V.$$.fragment,e),g(W.$$.fragment,e),g(X.$$.fragment,e),g(Y.$$.fragment,e),g(Z.$$.fragment,e),g(ee.$$.fragment,e),g(se.$$.fragment,e),g(te.$$.fragment,e),g(ne.$$.fragment,e),g(oe.$$.fragment,e),g(I),vs=!1},d(e){t(c),e&&t(f),b(l,e),e&&t($),e&&t(M),b(U),e&&t(Ke),le[T].d(e),e&&t(re),e&&t(S),e&&t(Qe),e&&t(A),e&&t(Ve),b(K,e),e&&t(We),e&&t(C),e&&t(Xe),e&&t(pe),e&&t(Ye),b(Q,e),e&&t(Ze),e&&t(ce),e&&t(es),b(V,e),e&&t(ss),e&&t(N),e&&t(ts),b(W,e),e&&t(ns),e&&t(me),e&&t(os),b(X,e),e&&t(as),e&&t(q),e&&t(ls),b(Y,e),e&&t(us),e&&t(D),b(Z),e&&t(is),e&&t(B),e&&t(rs),b(ee,e),e&&t(ps),b(se,e),e&&t(cs),e&&t(de),e&&t(ms),b(te,e),e&&t(ds),b(ne,e),e&&t(fs),e&&t(j),e&&t(gs),e&&t(R),b(oe),e&&t(hs),e&&t(E),e&&t(qs),ue[P].d(e),e&&t(fe)}}}const Pn={local:"tout-assembler",sections:[{local:"jetons-spciaux",title:"Jetons sp\xE9ciaux"},{local:"conclusion-du-itokenizeri-au-modle",title:"Conclusion : du <i>tokenizer</i> au mod\xE8le"}],title:"Tout assembler"};function In(y,c,f){let l="pt";return wn(()=>{const $=new URLSearchParams(window.location.search);f(0,l=$.get("fw")||"pt")}),[l]}class Dn extends kn{constructor(c){super();bn(this,c,In,Fn,$n,{})}}export{Dn as default,Pn as metadata};
