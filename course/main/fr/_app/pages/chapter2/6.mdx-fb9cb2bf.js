import{S as ht,i as qt,s as vt,e as u,k as m,w as v,t as o,l as mt,M as _t,c as i,d as s,m as d,x as _,a as r,h as a,b as z,F as n,g as p,y as k,o as g,p as dt,q as h,B as b,v as kt,n as ft}from"../../chunks/vendor-1e8b365d.js";import{I as Tn}from"../../chunks/IconCopyLink-483c28ba.js";import{C as x}from"../../chunks/CodeBlock-e5764662.js";import{D as gt}from"../../chunks/DocNotebookDropdown-37d928d3.js";import{F as bt}from"../../chunks/FrameworkSwitchCourse-7f8f0f31.js";function $t(y){let c,f;return c=new gt({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter2/section6_tf.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter2/section6_tf.ipynb"}]}}),{c(){v(c.$$.fragment)},l(l){_(c.$$.fragment,l)},m(l,$){k(c,l,$),f=!0},i(l){f||(h(c.$$.fragment,l),f=!0)},o(l){g(c.$$.fragment,l),f=!1},d(l){b(c,l)}}}function jt(y){let c,f;return c=new gt({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter2/section6_pt.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter2/section6_pt.ipynb"}]}}),{c(){v(c.$$.fragment)},l(l){_(c.$$.fragment,l)},m(l,$){k(c,l,$),f=!0},i(l){f||(h(c.$$.fragment,l),f=!0)},o(l){g(c.$$.fragment,l),f=!1},d(l){b(c,l)}}}function wt(y){let c,f;return c=new x({props:{code:`import tensorflow as tf
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
output = model(**tokens)`}}),{c(){v(c.$$.fragment)},l(l){_(c.$$.fragment,l)},m(l,$){k(c,l,$),f=!0},i(l){f||(h(c.$$.fragment,l),f=!0)},o(l){g(c.$$.fragment,l),f=!1},d(l){b(c,l)}}}function zt(y){let c,f;return c=new x({props:{code:`import torch
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
output = model(**tokens)`}}),{c(){v(c.$$.fragment)},l(l){_(c.$$.fragment,l)},m(l,$){k(c,l,$),f=!0},i(l){f||(h(c.$$.fragment,l),f=!0)},o(l){g(c.$$.fragment,l),f=!1},d(l){b(c,l)}}}function Et(y){let c,f,l,$,M,J,_e,G,$s,ke,js,Ge,T,F,ie,I,ws,be,zs,Es,$e,xs,ys,Ke,A,Ts,je,Fs,Ps,we,Ss,Is,Qe,K,Ve,C,As,ze,Cs,Hs,Ee,Ms,Ds,We,re,Rs,Xe,Q,Ye,pe,Js,Ze,V,es,N,Ns,xe,Ls,Bs,ss,W,ns,ce,Os,ts,X,os,q,Us,ye,Gs,Ks,Te,Qs,Vs,Fe,Ws,Xs,Pe,Ys,Zs,Se,en,sn,Ie,nn,tn,as,Y,ls,D,L,Ae,Z,on,Ce,an,us,B,ln,He,un,rn,is,ee,rs,se,ps,me,pn,cs,ne,ms,te,ds,j,cn,Me,mn,dn,De,fn,gn,Re,hn,qn,Je,vn,_n,fs,R,O,Ne,oe,kn,Le,bn,gs,E,$n,Be,jn,wn,Oe,zn,En,Ue,xn,yn,hs,P,S,de,qs;l=new bt({props:{fw:y[0]}}),G=new Tn({});const Fn=[jt,$t],ae=[];function Pn(e,t){return e[0]==="pt"?0:1}T=Pn(y),F=ae[T]=Fn[T](y),K=new x({props:{code:`from transformers import AutoTokenizer

checkpoint = "distilbert-base-uncased-finetuned-sst-2-english"
tokenizer = AutoTokenizer.from_pretrained(checkpoint)

sequence = "I've been waiting for a HuggingFace course my whole life."  # J'ai attendu un cours d\u2019HuggingFace toute ma vie.

model_inputs = tokenizer(sequence)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

checkpoint = <span class="hljs-string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>
tokenizer = AutoTokenizer.from_pretrained(checkpoint)

sequence = <span class="hljs-string">&quot;I&#x27;ve been waiting for a HuggingFace course my whole life.&quot;</span>  <span class="hljs-comment"># J&#x27;ai attendu un cours d\u2019HuggingFace toute ma vie.</span>

model_inputs = tokenizer(sequence)`}}),Q=new x({props:{code:`sequence = "I've been waiting for a HuggingFace course my whole life."  # J'ai attendu un cours d\u2019HuggingFace toute ma vie.


model_inputs = tokenizer(sequence)`,highlighted:`sequence = <span class="hljs-string">&quot;I&#x27;ve been waiting for a HuggingFace course my whole life.&quot;</span>  <span class="hljs-comment"># J&#x27;ai attendu un cours d\u2019HuggingFace toute ma vie.</span>


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

# Remplit les s\xE9quences jusqu'\xE0 la longueur maximale du mod\xE8le
# (512 for BERT or DistilBERT)
model_inputs = tokenizer(sequences, padding="max_length")

# Remplit les s\xE9quences jusqu'\xE0 la longueur maximale sp\xE9cifi\xE9e
model_inputs = tokenizer(sequences, padding="max_length", max_length=8)`,highlighted:`<span class="hljs-comment"># Remplit les s\xE9quences jusqu&#x27;\xE0 la longueur maximale de la s\xE9quence</span>
model_inputs = tokenizer(sequences, padding=<span class="hljs-string">&quot;longest&quot;</span>)

<span class="hljs-comment"># Remplit les s\xE9quences jusqu&#x27;\xE0 la longueur maximale du mod\xE8le</span>
<span class="hljs-comment"># (512 for BERT or DistilBERT)</span>
model_inputs = tokenizer(sequences, padding=<span class="hljs-string">&quot;max_length&quot;</span>)

<span class="hljs-comment"># Remplit les s\xE9quences jusqu&#x27;\xE0 la longueur maximale sp\xE9cifi\xE9e</span>
model_inputs = tokenizer(sequences, padding=<span class="hljs-string">&quot;max_length&quot;</span>, max_length=<span class="hljs-number">8</span>)`}}),X=new x({props:{code:`sequences = [
    "I've been waiting for a HuggingFace course my whole life.",
    "So have I!",
]  # \xAB J'ai attendu un cours de HuggingFace toute ma vie. \xBB, \xAB Moi aussi ! \xBB

# Tronque les s\xE9quences qui sont plus longues que la longueur maximale du mod\xE8le
# (512 for BERT or DistilBERT)
model_inputs = tokenizer(sequences, truncation=True)

# Tronque les s\xE9quences qui sont plus longues que la longueur maximale sp\xE9cifi\xE9e
model_inputs = tokenizer(sequences, max_length=8, truncation=True)`,highlighted:`sequences = [
    <span class="hljs-string">&quot;I&#x27;ve been waiting for a HuggingFace course my whole life.&quot;</span>,
    <span class="hljs-string">&quot;So have I!&quot;</span>,
]  <span class="hljs-comment"># \xAB J&#x27;ai attendu un cours de HuggingFace toute ma vie. \xBB, \xAB Moi aussi ! \xBB</span>

<span class="hljs-comment"># Tronque les s\xE9quences qui sont plus longues que la longueur maximale du mod\xE8le</span>
<span class="hljs-comment"># (512 for BERT or DistilBERT)</span>
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
model_inputs = tokenizer(sequences, padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)`}}),Z=new Tn({}),ee=new x({props:{code:`sequence = "I've been waiting for a HuggingFace course my whole life."  # \xAB J'ai attendu un cours de HuggingFace toute ma vie. \xBB

model_inputs = tokenizer(sequence)
print(model_inputs["input_ids"])

tokens = tokenizer.tokenize(sequence)
ids = tokenizer.convert_tokens_to_ids(tokens)
print(ids)`,highlighted:`sequence = <span class="hljs-string">&quot;I&#x27;ve been waiting for a HuggingFace course my whole life.&quot;</span>  <span class="hljs-comment"># \xAB J&#x27;ai attendu un cours de HuggingFace toute ma vie. \xBB</span>

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
<span class="hljs-string">&quot;i&#x27;ve been waiting for a huggingface course my whole life.&quot;</span>`}}),oe=new Tn({});const Sn=[zt,wt],le=[];function In(e,t){return e[0]==="pt"?0:1}return P=In(y),S=le[P]=Sn[P](y),{c(){c=u("meta"),f=m(),v(l.$$.fragment),$=m(),M=u("h1"),J=u("a"),_e=u("span"),v(G.$$.fragment),$s=m(),ke=u("span"),js=o("Tout assembler"),Ge=m(),F.c(),ie=m(),I=u("p"),ws=o("Dans les derni\xE8res sections, nous avons fait de notre mieux pour effectuer la plupart du travail manuellement. Nous avons explor\xE9 le fonctionnement des "),be=u("em"),zs=o("tokenizers"),Es=o(" et examin\xE9 la tokenisation, la conversion en identifiants d\u2019entr\xE9e, le "),$e=u("em"),xs=o("padding"),ys=o(", la troncature et les masques d\u2019attention."),Ke=m(),A=u("p"),Ts=o("Cependant, comme nous l\u2019avons vu dans la section 2, l\u2019API \u{1F917} "),je=u("em"),Fs=o("Transformers"),Ps=o(" peut g\xE9rer tout cela pour nous via une fonction dans laquelle nous allons nous plonger ici. Lorsque vous appelez votre "),we=u("code"),Ss=o("tokenizer"),Is=o(" directement sur la phrase, vous r\xE9cup\xE9rez des entr\xE9es qui sont pr\xEAtes \xE0 \xEAtre pass\xE9es dans votre mod\xE8le :"),Qe=m(),v(K.$$.fragment),Ve=m(),C=u("p"),As=o("Ici, la variable "),ze=u("code"),Cs=o("model_inputs"),Hs=o(" contient tout ce qui est n\xE9cessaire au bon fonctionnement d\u2019un mod\xE8le. Pour DistilBERT, cela inclut les identifiants d\u2019entr\xE9e ainsi que le masque d\u2019attention. D\u2019autres mod\xE8les qui acceptent des entr\xE9es suppl\xE9mentaires sont \xE9galement fournis par l\u2019objet "),Ee=u("code"),Ms=o("tokenizer"),Ds=o("."),We=m(),re=u("p"),Rs=o("Comme nous allons le voir dans les quelques exemples ci-dessous, cette m\xE9thode est tr\xE8s puissante. Premi\xE8rement, elle peut tokeniser une seule s\xE9quence :"),Xe=m(),v(Q.$$.fragment),Ye=m(),pe=u("p"),Js=o("Elle g\xE8re \xE9galement plusieurs s\xE9quences \xE0 la fois, sans modification de l\u2019API :"),Ze=m(),v(V.$$.fragment),es=m(),N=u("p"),Ns=o("Il est possible de faire du "),xe=u("em"),Ls=o("padding"),Bs=o(" selon plusieurs objectifs :"),ss=m(),v(W.$$.fragment),ns=m(),ce=u("p"),Os=o("La fonction peut \xE9galement tronquer les s\xE9quences :"),ts=m(),v(X.$$.fragment),os=m(),q=u("p"),Us=o("L\u2019objet "),ye=u("code"),Gs=o("tokenizer"),Ks=o(" peut g\xE9rer la conversion en des tenseurs de "),Te=u("em"),Qs=o("frameworks"),Vs=o(" sp\xE9cifiques. Ils peuvent ensuite \xEAtre directement envoy\xE9s au mod\xE8le. Par exemple, dans le code suivant, nous demandons au "),Fe=u("em"),Ws=o("tokenizer"),Xs=o(" de retourner des tenseurs PyTorch lorsque l\u2019on sp\xE9cifie "),Pe=u("code"),Ys=o('"pt"'),Zs=o(", de retourner des tenseurs TensorFlow lorsque l\u2019on sp\xE9cifie "),Se=u("code"),en=o('"tf"'),sn=o(" et des tableaux NumPy lorsque l\u2019on indique "),Ie=u("code"),nn=o('"np"'),tn=o(" :"),as=m(),v(Y.$$.fragment),ls=m(),D=u("h2"),L=u("a"),Ae=u("span"),v(Z.$$.fragment),on=m(),Ce=u("span"),an=o("Jetons sp\xE9ciaux"),us=m(),B=u("p"),ln=o("Si nous jetons un coup d\u2019\u0153il aux identifiants d\u2019entr\xE9e renvoy\xE9s par le "),He=u("em"),un=o("tokenizer"),rn=o(", nous verrons qu\u2019ils sont un peu diff\xE9rents de ceux que nous avions pr\xE9c\xE9demment :"),is=m(),v(ee.$$.fragment),rs=m(),v(se.$$.fragment),ps=m(),me=u("p"),pn=o("Un identifiant symbolique a \xE9t\xE9 ajout\xE9 au d\xE9but ainsi qu\u2019un autre \xE0 la fin. D\xE9codons les deux s\xE9quences d\u2019identifiants ci-dessus pour voir de quoi il s\u2019agit :"),cs=m(),v(ne.$$.fragment),ms=m(),v(te.$$.fragment),ds=m(),j=u("p"),cn=o("Le "),Me=u("em"),mn=o("tokenizer"),dn=o(" a ajout\xE9 le mot sp\xE9cial "),De=u("code"),fn=o("[CLS]"),gn=o(" au d\xE9but et le mot sp\xE9cial "),Re=u("code"),hn=o("[SEP]"),qn=o(" \xE0 la fin. C\u2019est parce que le mod\xE8le a \xE9t\xE9 pr\xE9-entra\xEEn\xE9 avec ces mots, donc pour obtenir les m\xEAmes r\xE9sultats pour l\u2019inf\xE9rence, nous devons \xE9galement les ajouter. Notez que certains mod\xE8les n\u2019ajoutent pas de mots sp\xE9ciaux, ou en ajoutent des diff\xE9rents. Les mod\xE8les peuvent aussi ajouter ces mots sp\xE9ciaux seulement au d\xE9but, ou seulement \xE0 la fin. Dans tous les cas, le "),Je=u("em"),vn=o("tokenizer"),_n=o(" sait lesquels sont attendus et s\u2019en occupe pour vous."),fs=m(),R=u("h2"),O=u("a"),Ne=u("span"),v(oe.$$.fragment),kn=m(),Le=u("span"),bn=o("Conclusion : du *tokenizer* au mod\xE8le"),gs=m(),E=u("p"),$n=o("Maintenant que nous avons vu toutes les \xE9tapes individuelles que l\u2019objet "),Be=u("code"),jn=o("tokenizer"),wn=o(" utilise lorsqu\u2019il est appliqu\xE9 sur des textes, voyons une derni\xE8re fois comment il peut g\xE9rer plusieurs s\xE9quences ("),Oe=u("em"),zn=o("padding"),En=o("), de tr\xE8s longues s\xE9quences ("),Ue=u("em"),xn=o("troncation"),yn=o(") et plusieurs types de tenseurs avec son API principale :"),hs=m(),S.c(),de=mt(),this.h()},l(e){const t=_t('[data-svelte="svelte-1phssyn"]',document.head);c=i(t,"META",{name:!0,content:!0}),t.forEach(s),f=d(e),_(l.$$.fragment,e),$=d(e),M=i(e,"H1",{class:!0});var ue=r(M);J=i(ue,"A",{id:!0,class:!0,href:!0});var fe=r(J);_e=i(fe,"SPAN",{});var ge=r(_e);_(G.$$.fragment,ge),ge.forEach(s),fe.forEach(s),$s=d(ue),ke=i(ue,"SPAN",{});var An=r(ke);js=a(An,"Tout assembler"),An.forEach(s),ue.forEach(s),Ge=d(e),F.l(e),ie=d(e),I=i(e,"P",{});var he=r(I);ws=a(he,"Dans les derni\xE8res sections, nous avons fait de notre mieux pour effectuer la plupart du travail manuellement. Nous avons explor\xE9 le fonctionnement des "),be=i(he,"EM",{});var Cn=r(be);zs=a(Cn,"tokenizers"),Cn.forEach(s),Es=a(he," et examin\xE9 la tokenisation, la conversion en identifiants d\u2019entr\xE9e, le "),$e=i(he,"EM",{});var Hn=r($e);xs=a(Hn,"padding"),Hn.forEach(s),ys=a(he,", la troncature et les masques d\u2019attention."),he.forEach(s),Ke=d(e),A=i(e,"P",{});var qe=r(A);Ts=a(qe,"Cependant, comme nous l\u2019avons vu dans la section 2, l\u2019API \u{1F917} "),je=i(qe,"EM",{});var Mn=r(je);Fs=a(Mn,"Transformers"),Mn.forEach(s),Ps=a(qe," peut g\xE9rer tout cela pour nous via une fonction dans laquelle nous allons nous plonger ici. Lorsque vous appelez votre "),we=i(qe,"CODE",{});var Dn=r(we);Ss=a(Dn,"tokenizer"),Dn.forEach(s),Is=a(qe," directement sur la phrase, vous r\xE9cup\xE9rez des entr\xE9es qui sont pr\xEAtes \xE0 \xEAtre pass\xE9es dans votre mod\xE8le :"),qe.forEach(s),Qe=d(e),_(K.$$.fragment,e),Ve=d(e),C=i(e,"P",{});var ve=r(C);As=a(ve,"Ici, la variable "),ze=i(ve,"CODE",{});var Rn=r(ze);Cs=a(Rn,"model_inputs"),Rn.forEach(s),Hs=a(ve," contient tout ce qui est n\xE9cessaire au bon fonctionnement d\u2019un mod\xE8le. Pour DistilBERT, cela inclut les identifiants d\u2019entr\xE9e ainsi que le masque d\u2019attention. D\u2019autres mod\xE8les qui acceptent des entr\xE9es suppl\xE9mentaires sont \xE9galement fournis par l\u2019objet "),Ee=i(ve,"CODE",{});var Jn=r(Ee);Ms=a(Jn,"tokenizer"),Jn.forEach(s),Ds=a(ve,"."),ve.forEach(s),We=d(e),re=i(e,"P",{});var Nn=r(re);Rs=a(Nn,"Comme nous allons le voir dans les quelques exemples ci-dessous, cette m\xE9thode est tr\xE8s puissante. Premi\xE8rement, elle peut tokeniser une seule s\xE9quence :"),Nn.forEach(s),Xe=d(e),_(Q.$$.fragment,e),Ye=d(e),pe=i(e,"P",{});var Ln=r(pe);Js=a(Ln,"Elle g\xE8re \xE9galement plusieurs s\xE9quences \xE0 la fois, sans modification de l\u2019API :"),Ln.forEach(s),Ze=d(e),_(V.$$.fragment,e),es=d(e),N=i(e,"P",{});var vs=r(N);Ns=a(vs,"Il est possible de faire du "),xe=i(vs,"EM",{});var Bn=r(xe);Ls=a(Bn,"padding"),Bn.forEach(s),Bs=a(vs," selon plusieurs objectifs :"),vs.forEach(s),ss=d(e),_(W.$$.fragment,e),ns=d(e),ce=i(e,"P",{});var On=r(ce);Os=a(On,"La fonction peut \xE9galement tronquer les s\xE9quences :"),On.forEach(s),ts=d(e),_(X.$$.fragment,e),os=d(e),q=i(e,"P",{});var w=r(q);Us=a(w,"L\u2019objet "),ye=i(w,"CODE",{});var Un=r(ye);Gs=a(Un,"tokenizer"),Un.forEach(s),Ks=a(w," peut g\xE9rer la conversion en des tenseurs de "),Te=i(w,"EM",{});var Gn=r(Te);Qs=a(Gn,"frameworks"),Gn.forEach(s),Vs=a(w," sp\xE9cifiques. Ils peuvent ensuite \xEAtre directement envoy\xE9s au mod\xE8le. Par exemple, dans le code suivant, nous demandons au "),Fe=i(w,"EM",{});var Kn=r(Fe);Ws=a(Kn,"tokenizer"),Kn.forEach(s),Xs=a(w," de retourner des tenseurs PyTorch lorsque l\u2019on sp\xE9cifie "),Pe=i(w,"CODE",{});var Qn=r(Pe);Ys=a(Qn,'"pt"'),Qn.forEach(s),Zs=a(w,", de retourner des tenseurs TensorFlow lorsque l\u2019on sp\xE9cifie "),Se=i(w,"CODE",{});var Vn=r(Se);en=a(Vn,'"tf"'),Vn.forEach(s),sn=a(w," et des tableaux NumPy lorsque l\u2019on indique "),Ie=i(w,"CODE",{});var Wn=r(Ie);nn=a(Wn,'"np"'),Wn.forEach(s),tn=a(w," :"),w.forEach(s),as=d(e),_(Y.$$.fragment,e),ls=d(e),D=i(e,"H2",{class:!0});var _s=r(D);L=i(_s,"A",{id:!0,class:!0,href:!0});var Xn=r(L);Ae=i(Xn,"SPAN",{});var Yn=r(Ae);_(Z.$$.fragment,Yn),Yn.forEach(s),Xn.forEach(s),on=d(_s),Ce=i(_s,"SPAN",{});var Zn=r(Ce);an=a(Zn,"Jetons sp\xE9ciaux"),Zn.forEach(s),_s.forEach(s),us=d(e),B=i(e,"P",{});var ks=r(B);ln=a(ks,"Si nous jetons un coup d\u2019\u0153il aux identifiants d\u2019entr\xE9e renvoy\xE9s par le "),He=i(ks,"EM",{});var et=r(He);un=a(et,"tokenizer"),et.forEach(s),rn=a(ks,", nous verrons qu\u2019ils sont un peu diff\xE9rents de ceux que nous avions pr\xE9c\xE9demment :"),ks.forEach(s),is=d(e),_(ee.$$.fragment,e),rs=d(e),_(se.$$.fragment,e),ps=d(e),me=i(e,"P",{});var st=r(me);pn=a(st,"Un identifiant symbolique a \xE9t\xE9 ajout\xE9 au d\xE9but ainsi qu\u2019un autre \xE0 la fin. D\xE9codons les deux s\xE9quences d\u2019identifiants ci-dessus pour voir de quoi il s\u2019agit :"),st.forEach(s),cs=d(e),_(ne.$$.fragment,e),ms=d(e),_(te.$$.fragment,e),ds=d(e),j=i(e,"P",{});var H=r(j);cn=a(H,"Le "),Me=i(H,"EM",{});var nt=r(Me);mn=a(nt,"tokenizer"),nt.forEach(s),dn=a(H," a ajout\xE9 le mot sp\xE9cial "),De=i(H,"CODE",{});var tt=r(De);fn=a(tt,"[CLS]"),tt.forEach(s),gn=a(H," au d\xE9but et le mot sp\xE9cial "),Re=i(H,"CODE",{});var ot=r(Re);hn=a(ot,"[SEP]"),ot.forEach(s),qn=a(H," \xE0 la fin. C\u2019est parce que le mod\xE8le a \xE9t\xE9 pr\xE9-entra\xEEn\xE9 avec ces mots, donc pour obtenir les m\xEAmes r\xE9sultats pour l\u2019inf\xE9rence, nous devons \xE9galement les ajouter. Notez que certains mod\xE8les n\u2019ajoutent pas de mots sp\xE9ciaux, ou en ajoutent des diff\xE9rents. Les mod\xE8les peuvent aussi ajouter ces mots sp\xE9ciaux seulement au d\xE9but, ou seulement \xE0 la fin. Dans tous les cas, le "),Je=i(H,"EM",{});var at=r(Je);vn=a(at,"tokenizer"),at.forEach(s),_n=a(H," sait lesquels sont attendus et s\u2019en occupe pour vous."),H.forEach(s),fs=d(e),R=i(e,"H2",{class:!0});var bs=r(R);O=i(bs,"A",{id:!0,class:!0,href:!0});var lt=r(O);Ne=i(lt,"SPAN",{});var ut=r(Ne);_(oe.$$.fragment,ut),ut.forEach(s),lt.forEach(s),kn=d(bs),Le=i(bs,"SPAN",{});var it=r(Le);bn=a(it,"Conclusion : du *tokenizer* au mod\xE8le"),it.forEach(s),bs.forEach(s),gs=d(e),E=i(e,"P",{});var U=r(E);$n=a(U,"Maintenant que nous avons vu toutes les \xE9tapes individuelles que l\u2019objet "),Be=i(U,"CODE",{});var rt=r(Be);jn=a(rt,"tokenizer"),rt.forEach(s),wn=a(U," utilise lorsqu\u2019il est appliqu\xE9 sur des textes, voyons une derni\xE8re fois comment il peut g\xE9rer plusieurs s\xE9quences ("),Oe=i(U,"EM",{});var pt=r(Oe);zn=a(pt,"padding"),pt.forEach(s),En=a(U,"), de tr\xE8s longues s\xE9quences ("),Ue=i(U,"EM",{});var ct=r(Ue);xn=a(ct,"troncation"),ct.forEach(s),yn=a(U,") et plusieurs types de tenseurs avec son API principale :"),U.forEach(s),hs=d(e),S.l(e),de=mt(),this.h()},h(){z(c,"name","hf:doc:metadata"),z(c,"content",JSON.stringify(xt)),z(J,"id","tout-assembler"),z(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),z(J,"href","#tout-assembler"),z(M,"class","relative group"),z(L,"id","jetons-spciaux"),z(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),z(L,"href","#jetons-spciaux"),z(D,"class","relative group"),z(O,"id","conclusion-du-tokenizer-au-modle"),z(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),z(O,"href","#conclusion-du-tokenizer-au-modle"),z(R,"class","relative group")},m(e,t){n(document.head,c),p(e,f,t),k(l,e,t),p(e,$,t),p(e,M,t),n(M,J),n(J,_e),k(G,_e,null),n(M,$s),n(M,ke),n(ke,js),p(e,Ge,t),ae[T].m(e,t),p(e,ie,t),p(e,I,t),n(I,ws),n(I,be),n(be,zs),n(I,Es),n(I,$e),n($e,xs),n(I,ys),p(e,Ke,t),p(e,A,t),n(A,Ts),n(A,je),n(je,Fs),n(A,Ps),n(A,we),n(we,Ss),n(A,Is),p(e,Qe,t),k(K,e,t),p(e,Ve,t),p(e,C,t),n(C,As),n(C,ze),n(ze,Cs),n(C,Hs),n(C,Ee),n(Ee,Ms),n(C,Ds),p(e,We,t),p(e,re,t),n(re,Rs),p(e,Xe,t),k(Q,e,t),p(e,Ye,t),p(e,pe,t),n(pe,Js),p(e,Ze,t),k(V,e,t),p(e,es,t),p(e,N,t),n(N,Ns),n(N,xe),n(xe,Ls),n(N,Bs),p(e,ss,t),k(W,e,t),p(e,ns,t),p(e,ce,t),n(ce,Os),p(e,ts,t),k(X,e,t),p(e,os,t),p(e,q,t),n(q,Us),n(q,ye),n(ye,Gs),n(q,Ks),n(q,Te),n(Te,Qs),n(q,Vs),n(q,Fe),n(Fe,Ws),n(q,Xs),n(q,Pe),n(Pe,Ys),n(q,Zs),n(q,Se),n(Se,en),n(q,sn),n(q,Ie),n(Ie,nn),n(q,tn),p(e,as,t),k(Y,e,t),p(e,ls,t),p(e,D,t),n(D,L),n(L,Ae),k(Z,Ae,null),n(D,on),n(D,Ce),n(Ce,an),p(e,us,t),p(e,B,t),n(B,ln),n(B,He),n(He,un),n(B,rn),p(e,is,t),k(ee,e,t),p(e,rs,t),k(se,e,t),p(e,ps,t),p(e,me,t),n(me,pn),p(e,cs,t),k(ne,e,t),p(e,ms,t),k(te,e,t),p(e,ds,t),p(e,j,t),n(j,cn),n(j,Me),n(Me,mn),n(j,dn),n(j,De),n(De,fn),n(j,gn),n(j,Re),n(Re,hn),n(j,qn),n(j,Je),n(Je,vn),n(j,_n),p(e,fs,t),p(e,R,t),n(R,O),n(O,Ne),k(oe,Ne,null),n(R,kn),n(R,Le),n(Le,bn),p(e,gs,t),p(e,E,t),n(E,$n),n(E,Be),n(Be,jn),n(E,wn),n(E,Oe),n(Oe,zn),n(E,En),n(E,Ue),n(Ue,xn),n(E,yn),p(e,hs,t),le[P].m(e,t),p(e,de,t),qs=!0},p(e,[t]){const ue={};t&1&&(ue.fw=e[0]),l.$set(ue);let fe=T;T=Pn(e),T!==fe&&(ft(),g(ae[fe],1,1,()=>{ae[fe]=null}),dt(),F=ae[T],F||(F=ae[T]=Fn[T](e),F.c()),h(F,1),F.m(ie.parentNode,ie));let ge=P;P=In(e),P!==ge&&(ft(),g(le[ge],1,1,()=>{le[ge]=null}),dt(),S=le[P],S||(S=le[P]=Sn[P](e),S.c()),h(S,1),S.m(de.parentNode,de))},i(e){qs||(h(l.$$.fragment,e),h(G.$$.fragment,e),h(F),h(K.$$.fragment,e),h(Q.$$.fragment,e),h(V.$$.fragment,e),h(W.$$.fragment,e),h(X.$$.fragment,e),h(Y.$$.fragment,e),h(Z.$$.fragment,e),h(ee.$$.fragment,e),h(se.$$.fragment,e),h(ne.$$.fragment,e),h(te.$$.fragment,e),h(oe.$$.fragment,e),h(S),qs=!0)},o(e){g(l.$$.fragment,e),g(G.$$.fragment,e),g(F),g(K.$$.fragment,e),g(Q.$$.fragment,e),g(V.$$.fragment,e),g(W.$$.fragment,e),g(X.$$.fragment,e),g(Y.$$.fragment,e),g(Z.$$.fragment,e),g(ee.$$.fragment,e),g(se.$$.fragment,e),g(ne.$$.fragment,e),g(te.$$.fragment,e),g(oe.$$.fragment,e),g(S),qs=!1},d(e){s(c),e&&s(f),b(l,e),e&&s($),e&&s(M),b(G),e&&s(Ge),ae[T].d(e),e&&s(ie),e&&s(I),e&&s(Ke),e&&s(A),e&&s(Qe),b(K,e),e&&s(Ve),e&&s(C),e&&s(We),e&&s(re),e&&s(Xe),b(Q,e),e&&s(Ye),e&&s(pe),e&&s(Ze),b(V,e),e&&s(es),e&&s(N),e&&s(ss),b(W,e),e&&s(ns),e&&s(ce),e&&s(ts),b(X,e),e&&s(os),e&&s(q),e&&s(as),b(Y,e),e&&s(ls),e&&s(D),b(Z),e&&s(us),e&&s(B),e&&s(is),b(ee,e),e&&s(rs),b(se,e),e&&s(ps),e&&s(me),e&&s(cs),b(ne,e),e&&s(ms),b(te,e),e&&s(ds),e&&s(j),e&&s(fs),e&&s(R),b(oe),e&&s(gs),e&&s(E),e&&s(hs),le[P].d(e),e&&s(de)}}}const xt={local:"tout-assembler",sections:[{local:"jetons-spciaux",title:"Jetons sp\xE9ciaux"},{local:"conclusion-du-tokenizer-au-modle",title:"Conclusion : du *tokenizer* au mod\xE8le"}],title:"Tout assembler"};function yt(y,c,f){let l="pt";return kt(()=>{const $=new URLSearchParams(window.location.search);f(0,l=$.get("fw")||"pt")}),[l]}class At extends ht{constructor(c){super();qt(this,c,yt,Et,vt,{})}}export{At as default,xt as metadata};
