import{S as lg,i as pg,s as hg,e as i,k as h,w as c,t as r,M as ug,c as l,d as t,m as u,x as d,a as p,h as n,b as w,G as a,g as o,y as m,q as f,o as g,B as y,v as cg}from"../../chunks/vendor-hf-doc-builder.js";import{T as Pa}from"../../chunks/Tip-hf-doc-builder.js";import{Y as dg}from"../../chunks/Youtube-hf-doc-builder.js";import{I as N}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as _}from"../../chunks/CodeBlock-hf-doc-builder.js";import{D as mg}from"../../chunks/DocNotebookDropdown-hf-doc-builder.js";import{F as fg}from"../../chunks/FrameworkSwitchCourse-hf-doc-builder.js";function gg(C){let b,k,v,$,T;return{c(){b=i("p"),k=r("\u270F\uFE0F "),v=i("strong"),$=r("Your turn!"),T=r(" Check that everything seems correct with the second element of the training dataset.")},l(j){b=l(j,"P",{});var E=p(b);k=n(E,"\u270F\uFE0F "),v=l(E,"STRONG",{});var q=p(v);$=n(q,"Your turn!"),q.forEach(t),T=n(E," Check that everything seems correct with the second element of the training dataset."),E.forEach(t)},m(j,E){o(j,b,E),a(b,k),a(b,v),a(v,$),a(b,T)},d(j){j&&t(b)}}}function yg(C){let b,k;return{c(){b=i("p"),k=r("In the next part of the course, we\u2019ll look at more advanced techniques that can help you reduce your memory footprint and let you fine-tune the biggest models.")},l(v){b=l(v,"P",{});var $=p(b);k=n($,"In the next part of the course, we\u2019ll look at more advanced techniques that can help you reduce your memory footprint and let you fine-tune the biggest models."),$.forEach(t)},m(v,$){o(v,b,$),a(b,k)},d(v){v&&t(b)}}}function bg(C){let b,k,v,$,T,j,E,q;return{c(){b=i("p"),k=r("\u{1F4A1} You should always make sure you can run "),v=i("code"),$=r("trainer.evaluate()"),T=r(" before launching "),j=i("code"),E=r("trainer.train()"),q=r(", to avoid wasting lots of compute resources before hitting an error.")},l(A){b=l(A,"P",{});var x=p(b);k=n(x,"\u{1F4A1} You should always make sure you can run "),v=l(x,"CODE",{});var Y=p(v);$=n(Y,"trainer.evaluate()"),Y.forEach(t),T=n(x," before launching "),j=l(x,"CODE",{});var O=p(j);E=n(O,"trainer.train()"),O.forEach(t),q=n(x,", to avoid wasting lots of compute resources before hitting an error."),x.forEach(t)},m(A,x){o(A,b,x),a(b,k),a(b,v),a(v,$),a(b,T),a(b,j),a(j,E),a(b,q)},d(A){A&&t(b)}}}function wg(C){let b,k,v,$,T,j,E,q,A,x,Y;return{c(){b=i("p"),k=r("\u{1F4A1} If you\u2019re using a manual training loop, the same steps apply to debug your training pipeline, but it\u2019s easier to separate them. Make sure you have not forgotten the "),v=i("code"),$=r("model.eval()"),T=r(" or "),j=i("code"),E=r("model.train()"),q=r(" at the right places, or the "),A=i("code"),x=r("zero_grad()"),Y=r(" at each step, however!")},l(O){b=l(O,"P",{});var P=p(b);k=n(P,"\u{1F4A1} If you\u2019re using a manual training loop, the same steps apply to debug your training pipeline, but it\u2019s easier to separate them. Make sure you have not forgotten the "),v=l(P,"CODE",{});var rt=p(v);$=n(rt,"model.eval()"),rt.forEach(t),T=n(P," or "),j=l(P,"CODE",{});var U=p(j);E=n(U,"model.train()"),U.forEach(t),q=n(P," at the right places, or the "),A=l(P,"CODE",{});var Ca=p(A);x=n(Ca,"zero_grad()"),Ca.forEach(t),Y=n(P," at each step, however!"),P.forEach(t)},m(O,P){o(O,b,P),a(b,k),a(b,v),a(v,$),a(b,T),a(b,j),a(j,E),a(b,q),a(b,A),a(A,x),a(b,Y)},d(O){O&&t(b)}}}function _g(C){let b,k;return{c(){b=i("p"),k=r("\u26A0\uFE0F If you are doing distributed training, print samples of your dataset in each process and triple-check that you get the same thing. One common bug is to have some source of randomness in the data creation that makes each process have a different version of the dataset.")},l(v){b=l(v,"P",{});var $=p(b);k=n($,"\u26A0\uFE0F If you are doing distributed training, print samples of your dataset in each process and triple-check that you get the same thing. One common bug is to have some source of randomness in the data creation that makes each process have a different version of the dataset."),$.forEach(t)},m(v,$){o(v,b,$),a(b,k)},d(v){v&&t(b)}}}function vg(C){let b,k;return{c(){b=i("p"),k=r("\u{1F4A1} If your training data is unbalanced, make sure to build a batch of training data containing all the labels.")},l(v){b=l(v,"P",{});var $=p(b);k=n($,"\u{1F4A1} If your training data is unbalanced, make sure to build a batch of training data containing all the labels."),$.forEach(t)},m(v,$){o(v,b,$),a(b,k)},d(v){v&&t(b)}}}function $g(C){let b,k,v,$,T;return{c(){b=i("p"),k=r("\u26A0\uFE0F You will have to recreate your model and your "),v=i("code"),$=r("Trainer"),T=r(" after this test, as the model obtained probably won\u2019t be able to recover and learn something useful on your full dataset.")},l(j){b=l(j,"P",{});var E=p(b);k=n(E,"\u26A0\uFE0F You will have to recreate your model and your "),v=l(E,"CODE",{});var q=p(v);$=n(q,"Trainer"),q.forEach(t),T=n(E," after this test, as the model obtained probably won\u2019t be able to recover and learn something useful on your full dataset."),E.forEach(t)},m(j,E){o(j,b,E),a(b,k),a(b,v),a(v,$),a(b,T)},d(j){j&&t(b)}}}function kg(C){let b,k,v,$,T,j,E,q,A,x,Y,O,P,rt,U,Ca,Aa,Gl,Yl,Is,Hl,Bl,br,se,ge,Ss,nt,Rl,Os,Vl,wr,it,_r,H,Kl,Us,Jl,Zl,Ns,Ql,Xl,vr,ye,ep,Ws,tp,ap,$r,be,sp,lt,op,rp,kr,pt,jr,za,np,Er,ht,Tr,oe,we,Ls,ut,ip,Fs,lp,qr,_e,pp,Ms,hp,up,xr,ve,cp,Gs,dp,mp,Pr,ct,Cr,dt,Ar,B,fp,Ys,gp,yp,Hs,bp,wp,zr,z,_p,Bs,vp,$p,Rs,kp,jp,Vs,Ep,Tp,Ks,qp,xp,Dr,mt,Ir,Da,Pp,Sr,ft,Or,Ia,Cp,Ur,gt,Nr,Sa,Ap,Wr,Oa,zp,Lr,yt,Fr,bt,Mr,Ua,Dp,Gr,wt,Yr,_t,Hr,D,Ip,Js,Sp,Op,Zs,Up,Np,Qs,Wp,Lp,Xs,Fp,Mp,Br,vt,Rr,$t,Vr,R,Gp,kt,Yp,Hp,eo,Bp,Rp,Kr,$e,Vp,to,Kp,Jp,Jr,jt,Zr,Et,Qr,Na,Zp,Xr,Tt,en,qt,tn,Wa,Qp,an,xt,sn,Pt,on,V,Xp,ao,eh,th,so,ah,sh,rn,Ct,nn,At,ln,K,oh,oo,rh,nh,ro,ih,lh,pn,La,ph,hn,ke,un,Fa,hh,cn,Ma,uh,dn,re,je,no,zt,ch,io,dh,mn,I,mh,lo,fh,gh,po,yh,bh,ho,wh,_h,uo,vh,$h,fn,Dt,gn,Ga,kh,yn,It,bn,J,jh,co,Eh,Th,mo,qh,xh,wn,St,_n,Ot,vn,W,Ph,fo,Ch,Ah,go,zh,Dh,yo,Ih,Sh,$n,L,Oh,bo,Uh,Nh,wo,Wh,Lh,_o,Fh,Mh,kn,Ut,jn,Ya,Gh,En,Nt,Tn,Ha,Yh,qn,Ba,Hh,xn,Wt,Pn,S,Bh,vo,Rh,Vh,$o,Kh,Jh,ko,Zh,Qh,jo,Xh,eu,Cn,Lt,An,Ra,tu,zn,Va,au,Dn,ne,Ee,Eo,Ft,su,To,ou,In,Ka,ru,Sn,Mt,On,Te,nu,qo,iu,lu,Un,Ja,pu,Nn,Za,hu,Wn,qe,uu,xo,cu,du,Ln,Gt,Fn,Yt,Mn,xe,mu,Po,fu,gu,Gn,Ht,Yn,Bt,Hn,Qa,yu,Bn,Rt,Rn,Pe,bu,Co,wu,_u,Vn,Vt,Kn,Xa,vu,Jn,Kt,Zn,es,$u,Qn,ie,Ce,Ao,Jt,ku,zo,ju,Xn,ts,Eu,ei,Ae,Tu,Do,qu,xu,ti,Zt,ai,as,Pu,si,Z,Cu,Io,Au,zu,So,Du,Iu,oi,Qt,ri,ze,Su,Oo,Ou,Uu,ni,le,De,Uo,Xt,Nu,No,Wu,ii,Ie,Lu,Wo,Fu,Mu,li,ss,Gu,pi,Se,hi,pe,Oe,Lo,ea,Yu,Fo,Hu,ui,Ue,Bu,Mo,Ru,Vu,ci,ta,di,aa,mi,os,Ku,fi,Ne,Ju,Go,Zu,Qu,gi,sa,yi,oa,bi,We,wi,rs,Xu,_i,ra,vi,ns,ec,$i,na,ki,Q,tc,Yo,ac,sc,Ho,oc,rc,ji,ia,Ei,la,Ti,F,nc,Bo,ic,lc,Ro,pc,hc,Vo,uc,cc,qi,pa,xi,ha,Pi,Le,dc,Ko,mc,fc,Ci,ua,Ai,ca,zi,is,gc,Di,ls,yc,Ii,da,Si,ps,bc,Oi,Fe,Ui,he,Me,Jo,ma,wc,Zo,_c,Ni,hs,vc,Wi,ue,Ge,Qo,fa,$c,Xo,kc,Li,us,jc,Fi,M,er,Ec,Tc,tr,qc,xc,ar,Pc,Cc,sr,Ac,Mi,Ye,Gi,cs,zc,Yi,ds,Dc,Hi,ms,Ic,Bi,ce,He,or,ga,Sc,rr,Oc,Ri,fs,Uc,Vi,Be,Nc,nr,Wc,Lc,Ki,ya,Ji,Re,Zi,Ve,Fc,ir,Mc,Gc,Qi,ba,Xi,wa,el,gs,Yc,tl,ys,Hc,al,Ke,sl,de,Je,lr,_a,Bc,pr,Rc,ol,Ze,Vc,hr,Kc,Jc,rl,bs,Zc,nl,ws,Qc,il,me,Qe,ur,va,Xc,cr,ed,ll,Xe,td,$a,ad,sd,pl,_s,od,hl,G,vs,ka,rd,nd,id,$s,ja,ld,pd,hd,ks,Ea,ud,cd,dd,js,Ta,md,fd,ul,Es,gd,cl;return v=new fg({props:{fw:C[0]}}),q=new N({}),P=new mg({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter8/section4_pt.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter8/section4_pt.ipynb"}]}}),nt=new N({}),it=new dg({props:{id:"L-WSwUWde1U"}}),pt=new _({props:{code:`from datasets import load_dataset, load_metric
from transformers import (
    AutoTokenizer,
    AutoModelForSequenceClassification,
    TrainingArguments,
    Trainer,
)

raw_datasets = load_dataset("glue", "mnli")

model_checkpoint = "distilbert-base-uncased"
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)


def preprocess_function(examples):
    return tokenizer(examples["premise"], examples["hypothesis"], truncation=True)


tokenized_datasets = raw_datasets.map(preprocess_function, batched=True)
model = AutoModelForSequenceClassification.from_pretrained(model_checkpoint)

args = TrainingArguments(
    f"distilbert-finetuned-mnli",
    evaluation_strategy="epoch",
    save_strategy="epoch",
    learning_rate=2e-5,
    num_train_epochs=3,
    weight_decay=0.01,
)

metric = load_metric("glue", "mnli")


def compute_metrics(eval_pred):
    predictions, labels = eval_pred
    return metric.compute(predictions=predictions, references=labels)


trainer = Trainer(
    model,
    args,
    train_dataset=raw_datasets["train"],
    eval_dataset=raw_datasets["validation_matched"],
    compute_metrics=compute_metrics,
)
trainer.train()`,highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset, load_metric
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
    AutoTokenizer,
    AutoModelForSequenceClassification,
    TrainingArguments,
    Trainer,
)

raw_datasets = load_dataset(<span class="hljs-string">&quot;glue&quot;</span>, <span class="hljs-string">&quot;mnli&quot;</span>)

model_checkpoint = <span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)


<span class="hljs-keyword">def</span> <span class="hljs-title function_">preprocess_function</span>(<span class="hljs-params">examples</span>):
    <span class="hljs-keyword">return</span> tokenizer(examples[<span class="hljs-string">&quot;premise&quot;</span>], examples[<span class="hljs-string">&quot;hypothesis&quot;</span>], truncation=<span class="hljs-literal">True</span>)


tokenized_datasets = raw_datasets.<span class="hljs-built_in">map</span>(preprocess_function, batched=<span class="hljs-literal">True</span>)
model = AutoModelForSequenceClassification.from_pretrained(model_checkpoint)

args = TrainingArguments(
    <span class="hljs-string">f&quot;distilbert-finetuned-mnli&quot;</span>,
    evaluation_strategy=<span class="hljs-string">&quot;epoch&quot;</span>,
    save_strategy=<span class="hljs-string">&quot;epoch&quot;</span>,
    learning_rate=<span class="hljs-number">2e-5</span>,
    num_train_epochs=<span class="hljs-number">3</span>,
    weight_decay=<span class="hljs-number">0.01</span>,
)

metric = load_metric(<span class="hljs-string">&quot;glue&quot;</span>, <span class="hljs-string">&quot;mnli&quot;</span>)


<span class="hljs-keyword">def</span> <span class="hljs-title function_">compute_metrics</span>(<span class="hljs-params">eval_pred</span>):
    predictions, labels = eval_pred
    <span class="hljs-keyword">return</span> metric.compute(predictions=predictions, references=labels)


trainer = Trainer(
    model,
    args,
    train_dataset=raw_datasets[<span class="hljs-string">&quot;train&quot;</span>],
    eval_dataset=raw_datasets[<span class="hljs-string">&quot;validation_matched&quot;</span>],
    compute_metrics=compute_metrics,
)
trainer.train()`}}),ht=new _({props:{code:"'ValueError: You have to specify either input_ids or inputs_embeds'",highlighted:'<span class="hljs-string">&#x27;ValueError: You have to specify either input_ids or inputs_embeds&#x27;</span>'}}),ut=new N({}),ct=new _({props:{code:"trainer.train_dataset[0]",highlighted:'trainer.train_dataset[<span class="hljs-number">0</span>]'}}),dt=new _({props:{code:`{'hypothesis': 'Product and geography are what make cream skimming work. ',
 'idx': 0,
 'label': 1,
 'premise': 'Conceptually cream skimming has two basic dimensions - product and geography.'}`,highlighted:`{<span class="hljs-string">&#x27;hypothesis&#x27;</span>: <span class="hljs-string">&#x27;Product and geography are what make cream skimming work. &#x27;</span>,
 <span class="hljs-string">&#x27;idx&#x27;</span>: <span class="hljs-number">0</span>,
 <span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-number">1</span>,
 <span class="hljs-string">&#x27;premise&#x27;</span>: <span class="hljs-string">&#x27;Conceptually cream skimming has two basic dimensions - product and geography.&#x27;</span>}`}}),mt=new _({props:{code:`from datasets import load_dataset, load_metric
from transformers import (
    AutoTokenizer,
    AutoModelForSequenceClassification,
    TrainingArguments,
    Trainer,
)

raw_datasets = load_dataset("glue", "mnli")

model_checkpoint = "distilbert-base-uncased"
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)


def preprocess_function(examples):
    return tokenizer(examples["premise"], examples["hypothesis"], truncation=True)


tokenized_datasets = raw_datasets.map(preprocess_function, batched=True)
model = AutoModelForSequenceClassification.from_pretrained(model_checkpoint)

args = TrainingArguments(
    f"distilbert-finetuned-mnli",
    evaluation_strategy="epoch",
    save_strategy="epoch",
    learning_rate=2e-5,
    num_train_epochs=3,
    weight_decay=0.01,
)

metric = load_metric("glue", "mnli")


def compute_metrics(eval_pred):
    predictions, labels = eval_pred
    return metric.compute(predictions=predictions, references=labels)


trainer = Trainer(
    model,
    args,
    train_dataset=tokenized_datasets["train"],
    eval_dataset=tokenized_datasets["validation_matched"],
    compute_metrics=compute_metrics,
)
trainer.train()`,highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset, load_metric
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
    AutoTokenizer,
    AutoModelForSequenceClassification,
    TrainingArguments,
    Trainer,
)

raw_datasets = load_dataset(<span class="hljs-string">&quot;glue&quot;</span>, <span class="hljs-string">&quot;mnli&quot;</span>)

model_checkpoint = <span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)


<span class="hljs-keyword">def</span> <span class="hljs-title function_">preprocess_function</span>(<span class="hljs-params">examples</span>):
    <span class="hljs-keyword">return</span> tokenizer(examples[<span class="hljs-string">&quot;premise&quot;</span>], examples[<span class="hljs-string">&quot;hypothesis&quot;</span>], truncation=<span class="hljs-literal">True</span>)


tokenized_datasets = raw_datasets.<span class="hljs-built_in">map</span>(preprocess_function, batched=<span class="hljs-literal">True</span>)
model = AutoModelForSequenceClassification.from_pretrained(model_checkpoint)

args = TrainingArguments(
    <span class="hljs-string">f&quot;distilbert-finetuned-mnli&quot;</span>,
    evaluation_strategy=<span class="hljs-string">&quot;epoch&quot;</span>,
    save_strategy=<span class="hljs-string">&quot;epoch&quot;</span>,
    learning_rate=<span class="hljs-number">2e-5</span>,
    num_train_epochs=<span class="hljs-number">3</span>,
    weight_decay=<span class="hljs-number">0.01</span>,
)

metric = load_metric(<span class="hljs-string">&quot;glue&quot;</span>, <span class="hljs-string">&quot;mnli&quot;</span>)


<span class="hljs-keyword">def</span> <span class="hljs-title function_">compute_metrics</span>(<span class="hljs-params">eval_pred</span>):
    predictions, labels = eval_pred
    <span class="hljs-keyword">return</span> metric.compute(predictions=predictions, references=labels)


trainer = Trainer(
    model,
    args,
    train_dataset=tokenized_datasets[<span class="hljs-string">&quot;train&quot;</span>],
    eval_dataset=tokenized_datasets[<span class="hljs-string">&quot;validation_matched&quot;</span>],
    compute_metrics=compute_metrics,
)
trainer.train()`}}),ft=new _({props:{code:"'ValueError: expected sequence of length 43 at dim 1 (got 37)'",highlighted:'<span class="hljs-string">&#x27;ValueError: expected sequence of length 43 at dim 1 (got 37)&#x27;</span>'}}),gt=new _({props:{code:`~/git/transformers/src/transformers/data/data_collator.py in torch_default_data_collator(features)
    105                 batch[k] = torch.stack([f[k] for f in features])
    106             else:
--> 107                 batch[k] = torch.tensor([f[k] for f in features])
    108 
    109     return batch`,highlighted:`~/git/transformers/src/transformers/data/data_collator.py <span class="hljs-keyword">in</span> torch_default_data_collator(features)
    <span class="hljs-number">105</span>                 batch[k] = torch.stack([f[k] <span class="hljs-keyword">for</span> f <span class="hljs-keyword">in</span> features])
    <span class="hljs-number">106</span>             <span class="hljs-keyword">else</span>:
--&gt; <span class="hljs-number">107</span>                 batch[k] = torch.tensor([f[k] <span class="hljs-keyword">for</span> f <span class="hljs-keyword">in</span> features])
    <span class="hljs-number">108</span> 
    <span class="hljs-number">109</span>     <span class="hljs-keyword">return</span> batch`}}),yt=new _({props:{code:'tokenizer.decode(trainer.train_dataset[0]["input_ids"])',highlighted:'tokenizer.decode(trainer.train_dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;input_ids&quot;</span>])'}}),bt=new _({props:{code:"'[CLS] conceptually cream skimming has two basic dimensions - product and geography. [SEP] product and geography are what make cream skimming work. [SEP]'",highlighted:'<span class="hljs-string">&#x27;[CLS] conceptually cream skimming has two basic dimensions - product and geography. [SEP] product and geography are what make cream skimming work. [SEP]&#x27;</span>'}}),wt=new _({props:{code:"trainer.train_dataset[0].keys()",highlighted:'trainer.train_dataset[<span class="hljs-number">0</span>].keys()'}}),_t=new _({props:{code:"dict_keys(['attention_mask', 'hypothesis', 'idx', 'input_ids', 'label', 'premise'])",highlighted:'dict_keys([<span class="hljs-string">&#x27;attention_mask&#x27;</span>, <span class="hljs-string">&#x27;hypothesis&#x27;</span>, <span class="hljs-string">&#x27;idx&#x27;</span>, <span class="hljs-string">&#x27;input_ids&#x27;</span>, <span class="hljs-string">&#x27;label&#x27;</span>, <span class="hljs-string">&#x27;premise&#x27;</span>])'}}),vt=new _({props:{code:"type(trainer.model)",highlighted:'<span class="hljs-built_in">type</span>(trainer.model)'}}),$t=new _({props:{code:"transformers.models.distilbert.modeling_distilbert.DistilBertForSequenceClassification",highlighted:"transformers.models.distilbert.modeling_distilbert.DistilBertForSequenceClassification"}}),jt=new _({props:{code:'trainer.train_dataset[0]["attention_mask"]',highlighted:'trainer.train_dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;attention_mask&quot;</span>]'}}),Et=new _({props:{code:"[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]",highlighted:'[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>]'}}),Tt=new _({props:{code:`len(trainer.train_dataset[0]["attention_mask"]) == len(
    trainer.train_dataset[0]["input_ids"]
)`,highlighted:`<span class="hljs-built_in">len</span>(trainer.train_dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;attention_mask&quot;</span>]) == <span class="hljs-built_in">len</span>(
    trainer.train_dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;input_ids&quot;</span>]
)`}}),qt=new _({props:{code:"True",highlighted:'<span class="hljs-literal">True</span>'}}),xt=new _({props:{code:'trainer.train_dataset[0]["label"]',highlighted:'trainer.train_dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;label&quot;</span>]'}}),Pt=new _({props:{code:"1",highlighted:'<span class="hljs-number">1</span>'}}),Ct=new _({props:{code:'trainer.train_dataset.features["label"].names',highlighted:'trainer.train_dataset.features[<span class="hljs-string">&quot;label&quot;</span>].names'}}),At=new _({props:{code:"['entailment', 'neutral', 'contradiction']",highlighted:'[<span class="hljs-string">&#x27;entailment&#x27;</span>, <span class="hljs-string">&#x27;neutral&#x27;</span>, <span class="hljs-string">&#x27;contradiction&#x27;</span>]'}}),ke=new Pa({props:{$$slots:{default:[gg]},$$scope:{ctx:C}}}),zt=new N({}),Dt=new _({props:{code:`for batch in trainer.get_train_dataloader():
    break`,highlighted:`<span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> trainer.get_train_dataloader():
    <span class="hljs-keyword">break</span>`}}),It=new _({props:{code:`~/git/transformers/src/transformers/data/data_collator.py in torch_default_data_collator(features)
    105                 batch[k] = torch.stack([f[k] for f in features])
    106             else:
--> 107                 batch[k] = torch.tensor([f[k] for f in features])
    108 
    109     return batch

ValueError: expected sequence of length 45 at dim 1 (got 76)`,highlighted:`~/git/transformers/src/transformers/data/data_collator.py <span class="hljs-keyword">in</span> torch_default_data_collator(features)
    <span class="hljs-number">105</span>                 batch[k] = torch.stack([f[k] <span class="hljs-keyword">for</span> f <span class="hljs-keyword">in</span> features])
    <span class="hljs-number">106</span>             <span class="hljs-keyword">else</span>:
--&gt; <span class="hljs-number">107</span>                 batch[k] = torch.tensor([f[k] <span class="hljs-keyword">for</span> f <span class="hljs-keyword">in</span> features])
    <span class="hljs-number">108</span> 
    <span class="hljs-number">109</span>     <span class="hljs-keyword">return</span> batch

ValueError: expected sequence of length <span class="hljs-number">45</span> at dim <span class="hljs-number">1</span> (got <span class="hljs-number">76</span>)`}}),St=new _({props:{code:`data_collator = trainer.get_train_dataloader().collate_fn
data_collator`,highlighted:`data_collator = trainer.get_train_dataloader().collate_fn
data_collator`}}),Ot=new _({props:{code:"<function transformers.data.data_collator.default_data_collator(features: List[InputDataClass], return_tensors='pt') -> Dict[str, Any]>",highlighted:'&lt;function transformers.data.data_collator.default_data_collator(features: <span class="hljs-type">List</span>[InputDataClass], return_tensors=<span class="hljs-string">&#x27;pt&#x27;</span>) -&gt; <span class="hljs-type">Dict</span>[<span class="hljs-built_in">str</span>, <span class="hljs-type">Any</span>]&gt;'}}),Ut=new _({props:{code:`from datasets import load_dataset, load_metric
from transformers import (
    AutoTokenizer,
    AutoModelForSequenceClassification,
    DataCollatorWithPadding,
    TrainingArguments,
    Trainer,
)

raw_datasets = load_dataset("glue", "mnli")

model_checkpoint = "distilbert-base-uncased"
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)


def preprocess_function(examples):
    return tokenizer(examples["premise"], examples["hypothesis"], truncation=True)


tokenized_datasets = raw_datasets.map(preprocess_function, batched=True)
model = AutoModelForSequenceClassification.from_pretrained(model_checkpoint)

args = TrainingArguments(
    f"distilbert-finetuned-mnli",
    evaluation_strategy="epoch",
    save_strategy="epoch",
    learning_rate=2e-5,
    num_train_epochs=3,
    weight_decay=0.01,
)

metric = load_metric("glue", "mnli")


def compute_metrics(eval_pred):
    predictions, labels = eval_pred
    return metric.compute(predictions=predictions, references=labels)


data_collator = DataCollatorWithPadding(tokenizer=tokenizer)

trainer = Trainer(
    model,
    args,
    train_dataset=tokenized_datasets["train"],
    eval_dataset=tokenized_datasets["validation_matched"],
    compute_metrics=compute_metrics,
    data_collator=data_collator,
    tokenizer=tokenizer,
)
trainer.train()`,highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset, load_metric
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
    AutoTokenizer,
    AutoModelForSequenceClassification,
    DataCollatorWithPadding,
    TrainingArguments,
    Trainer,
)

raw_datasets = load_dataset(<span class="hljs-string">&quot;glue&quot;</span>, <span class="hljs-string">&quot;mnli&quot;</span>)

model_checkpoint = <span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)


<span class="hljs-keyword">def</span> <span class="hljs-title function_">preprocess_function</span>(<span class="hljs-params">examples</span>):
    <span class="hljs-keyword">return</span> tokenizer(examples[<span class="hljs-string">&quot;premise&quot;</span>], examples[<span class="hljs-string">&quot;hypothesis&quot;</span>], truncation=<span class="hljs-literal">True</span>)


tokenized_datasets = raw_datasets.<span class="hljs-built_in">map</span>(preprocess_function, batched=<span class="hljs-literal">True</span>)
model = AutoModelForSequenceClassification.from_pretrained(model_checkpoint)

args = TrainingArguments(
    <span class="hljs-string">f&quot;distilbert-finetuned-mnli&quot;</span>,
    evaluation_strategy=<span class="hljs-string">&quot;epoch&quot;</span>,
    save_strategy=<span class="hljs-string">&quot;epoch&quot;</span>,
    learning_rate=<span class="hljs-number">2e-5</span>,
    num_train_epochs=<span class="hljs-number">3</span>,
    weight_decay=<span class="hljs-number">0.01</span>,
)

metric = load_metric(<span class="hljs-string">&quot;glue&quot;</span>, <span class="hljs-string">&quot;mnli&quot;</span>)


<span class="hljs-keyword">def</span> <span class="hljs-title function_">compute_metrics</span>(<span class="hljs-params">eval_pred</span>):
    predictions, labels = eval_pred
    <span class="hljs-keyword">return</span> metric.compute(predictions=predictions, references=labels)


data_collator = DataCollatorWithPadding(tokenizer=tokenizer)

trainer = Trainer(
    model,
    args,
    train_dataset=tokenized_datasets[<span class="hljs-string">&quot;train&quot;</span>],
    eval_dataset=tokenized_datasets[<span class="hljs-string">&quot;validation_matched&quot;</span>],
    compute_metrics=compute_metrics,
    data_collator=data_collator,
    tokenizer=tokenizer,
)
trainer.train()`}}),Nt=new _({props:{code:"RuntimeError: CUDA error: CUBLAS_STATUS_ALLOC_FAILED when calling `cublasCreate(handle)`",highlighted:"RuntimeError: CUDA error: CUBLAS_STATUS_ALLOC_FAILED when calling `cublasCreate(handle)`"}}),Wt=new _({props:{code:`data_collator = trainer.get_train_dataloader().collate_fn
batch = data_collator([trainer.train_dataset[i] for i in range(4)])`,highlighted:`data_collator = trainer.get_train_dataloader().collate_fn
batch = data_collator([trainer.train_dataset[i] <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">4</span>)])`}}),Lt=new _({props:{code:`data_collator = trainer.get_train_dataloader().collate_fn
actual_train_set = trainer._remove_unused_columns(trainer.train_dataset)
batch = data_collator([actual_train_set[i] for i in range(4)])`,highlighted:`data_collator = trainer.get_train_dataloader().collate_fn
actual_train_set = trainer._remove_unused_columns(trainer.train_dataset)
batch = data_collator([actual_train_set[i] <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">4</span>)])`}}),Ft=new N({}),Mt=new _({props:{code:`for batch in trainer.get_train_dataloader():
    break`,highlighted:`<span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> trainer.get_train_dataloader():
    <span class="hljs-keyword">break</span>`}}),Gt=new _({props:{code:"outputs = trainer.model.cpu()(**batch)",highlighted:"outputs = trainer.model.cpu()(**batch)"}}),Yt=new _({props:{code:`~/.pyenv/versions/3.7.9/envs/base/lib/python3.7/site-packages/torch/nn/functional.py in nll_loss(input, target, weight, size_average, ignore_index, reduce, reduction)
   2386         )
   2387     if dim == 2:
-> 2388         ret = torch._C._nn.nll_loss(input, target, weight, _Reduction.get_enum(reduction), ignore_index)
   2389     elif dim == 4:
   2390         ret = torch._C._nn.nll_loss2d(input, target, weight, _Reduction.get_enum(reduction), ignore_index)

IndexError: Target 2 is out of bounds.`,highlighted:`~/.pyenv/versions/<span class="hljs-number">3.7</span><span class="hljs-number">.9</span>/envs/base/lib/python3<span class="hljs-number">.7</span>/site-packages/torch/nn/functional.py <span class="hljs-keyword">in</span> nll_loss(<span class="hljs-built_in">input</span>, target, weight, size_average, ignore_index, reduce, reduction)
   <span class="hljs-number">2386</span>         )
   <span class="hljs-number">2387</span>     <span class="hljs-keyword">if</span> dim == <span class="hljs-number">2</span>:
-&gt; <span class="hljs-number">2388</span>         ret = torch._C._nn.nll_loss(<span class="hljs-built_in">input</span>, target, weight, _Reduction.get_enum(reduction), ignore_index)
   <span class="hljs-number">2389</span>     <span class="hljs-keyword">elif</span> dim == <span class="hljs-number">4</span>:
   <span class="hljs-number">2390</span>         ret = torch._C._nn.nll_loss2d(<span class="hljs-built_in">input</span>, target, weight, _Reduction.get_enum(reduction), ignore_index)

IndexError: Target <span class="hljs-number">2</span> <span class="hljs-keyword">is</span> out of bounds.`}}),Ht=new _({props:{code:"trainer.model.config.num_labels",highlighted:"trainer.model.config.num_labels"}}),Bt=new _({props:{code:"2",highlighted:'<span class="hljs-number">2</span>'}}),Rt=new _({props:{code:`from datasets import load_dataset, load_metric
from transformers import (
    AutoTokenizer,
    AutoModelForSequenceClassification,
    DataCollatorWithPadding,
    TrainingArguments,
    Trainer,
)

raw_datasets = load_dataset("glue", "mnli")

model_checkpoint = "distilbert-base-uncased"
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)


def preprocess_function(examples):
    return tokenizer(examples["premise"], examples["hypothesis"], truncation=True)


tokenized_datasets = raw_datasets.map(preprocess_function, batched=True)
model = AutoModelForSequenceClassification.from_pretrained(model_checkpoint, num_labels=3)

args = TrainingArguments(
    f"distilbert-finetuned-mnli",
    evaluation_strategy="epoch",
    save_strategy="epoch",
    learning_rate=2e-5,
    num_train_epochs=3,
    weight_decay=0.01,
)

metric = load_metric("glue", "mnli")


def compute_metrics(eval_pred):
    predictions, labels = eval_pred
    return metric.compute(predictions=predictions, references=labels)


data_collator = DataCollatorWithPadding(tokenizer=tokenizer)

trainer = Trainer(
    model,
    args,
    train_dataset=tokenized_datasets["train"],
    eval_dataset=tokenized_datasets["validation_matched"],
    compute_metrics=compute_metrics,
    data_collator=data_collator,
    tokenizer=tokenizer,
)`,highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset, load_metric
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
    AutoTokenizer,
    AutoModelForSequenceClassification,
    DataCollatorWithPadding,
    TrainingArguments,
    Trainer,
)

raw_datasets = load_dataset(<span class="hljs-string">&quot;glue&quot;</span>, <span class="hljs-string">&quot;mnli&quot;</span>)

model_checkpoint = <span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)


<span class="hljs-keyword">def</span> <span class="hljs-title function_">preprocess_function</span>(<span class="hljs-params">examples</span>):
    <span class="hljs-keyword">return</span> tokenizer(examples[<span class="hljs-string">&quot;premise&quot;</span>], examples[<span class="hljs-string">&quot;hypothesis&quot;</span>], truncation=<span class="hljs-literal">True</span>)


tokenized_datasets = raw_datasets.<span class="hljs-built_in">map</span>(preprocess_function, batched=<span class="hljs-literal">True</span>)
model = AutoModelForSequenceClassification.from_pretrained(model_checkpoint, num_labels=<span class="hljs-number">3</span>)

args = TrainingArguments(
    <span class="hljs-string">f&quot;distilbert-finetuned-mnli&quot;</span>,
    evaluation_strategy=<span class="hljs-string">&quot;epoch&quot;</span>,
    save_strategy=<span class="hljs-string">&quot;epoch&quot;</span>,
    learning_rate=<span class="hljs-number">2e-5</span>,
    num_train_epochs=<span class="hljs-number">3</span>,
    weight_decay=<span class="hljs-number">0.01</span>,
)

metric = load_metric(<span class="hljs-string">&quot;glue&quot;</span>, <span class="hljs-string">&quot;mnli&quot;</span>)


<span class="hljs-keyword">def</span> <span class="hljs-title function_">compute_metrics</span>(<span class="hljs-params">eval_pred</span>):
    predictions, labels = eval_pred
    <span class="hljs-keyword">return</span> metric.compute(predictions=predictions, references=labels)


data_collator = DataCollatorWithPadding(tokenizer=tokenizer)

trainer = Trainer(
    model,
    args,
    train_dataset=tokenized_datasets[<span class="hljs-string">&quot;train&quot;</span>],
    eval_dataset=tokenized_datasets[<span class="hljs-string">&quot;validation_matched&quot;</span>],
    compute_metrics=compute_metrics,
    data_collator=data_collator,
    tokenizer=tokenizer,
)`}}),Vt=new _({props:{code:`for batch in trainer.get_train_dataloader():
    break

outputs = trainer.model.cpu()(**batch)`,highlighted:`<span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> trainer.get_train_dataloader():
    <span class="hljs-keyword">break</span>

outputs = trainer.model.cpu()(**batch)`}}),Kt=new _({props:{code:`import torch

device = torch.device("cuda") if torch.cuda.is_available() else torch.device("cpu")
batch = {k: v.to(device) for k, v in batch.items()}

outputs = trainer.model.to(device)(**batch)`,highlighted:`<span class="hljs-keyword">import</span> torch

device = torch.device(<span class="hljs-string">&quot;cuda&quot;</span>) <span class="hljs-keyword">if</span> torch.cuda.is_available() <span class="hljs-keyword">else</span> torch.device(<span class="hljs-string">&quot;cpu&quot;</span>)
batch = {k: v.to(device) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> batch.items()}

outputs = trainer.model.to(device)(**batch)`}}),Jt=new N({}),Zt=new _({props:{code:`loss = outputs.loss
loss.backward()`,highlighted:`loss = outputs.loss
loss.backward()`}}),Qt=new _({props:{code:`trainer.create_optimizer()
trainer.optimizer.step()`,highlighted:`trainer.create_optimizer()
trainer.optimizer.step()`}}),Xt=new N({}),Se=new Pa({props:{$$slots:{default:[yg]},$$scope:{ctx:C}}}),ea=new N({}),ta=new _({props:{code:`# This will take a long time and error out, so you shouldn't run this cell
trainer.train()`,highlighted:`<span class="hljs-comment"># This will take a long time and error out, so you shouldn&#x27;t run this cell</span>
trainer.train()`}}),aa=new _({props:{code:"TypeError: only size-1 arrays can be converted to Python scalars",highlighted:'TypeError: only size-<span class="hljs-number">1</span> arrays can be converted to Python scalars'}}),sa=new _({props:{code:"trainer.evaluate()",highlighted:"trainer.evaluate()"}}),oa=new _({props:{code:"TypeError: only size-1 arrays can be converted to Python scalars",highlighted:'TypeError: only size-<span class="hljs-number">1</span> arrays can be converted to Python scalars'}}),We=new Pa({props:{$$slots:{default:[bg]},$$scope:{ctx:C}}}),ra=new _({props:{code:`for batch in trainer.get_eval_dataloader():
    break

batch = {k: v.to(device) for k, v in batch.items()}

with torch.no_grad():
    outputs = trainer.model(**batch)`,highlighted:`<span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> trainer.get_eval_dataloader():
    <span class="hljs-keyword">break</span>

batch = {k: v.to(device) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> batch.items()}

<span class="hljs-keyword">with</span> torch.no_grad():
    outputs = trainer.model(**batch)`}}),na=new _({props:{code:`~/git/datasets/src/datasets/metric.py in add_batch(self, predictions, references)
    431         """
    432         batch = {"predictions": predictions, "references": references}
--> 433         batch = self.info.features.encode_batch(batch)
    434         if self.writer is None:
    435             self._init_writer()`,highlighted:`~/git/datasets/src/datasets/metric.py <span class="hljs-keyword">in</span> add_batch(self, predictions, references)
    <span class="hljs-number">431</span>         <span class="hljs-string">&quot;&quot;&quot;
    432         batch = {&quot;predictions&quot;: predictions, &quot;references&quot;: references}
--&gt; 433         batch = self.info.features.encode_batch(batch)
    434         if self.writer is None:
    435             self._init_writer()</span>`}}),ia=new _({props:{code:`predictions = outputs.logits.cpu().numpy()
labels = batch["labels"].cpu().numpy()

compute_metrics((predictions, labels))`,highlighted:`predictions = outputs.logits.cpu().numpy()
labels = batch[<span class="hljs-string">&quot;labels&quot;</span>].cpu().numpy()

compute_metrics((predictions, labels))`}}),la=new _({props:{code:"TypeError: only size-1 arrays can be converted to Python scalars",highlighted:'TypeError: only size-<span class="hljs-number">1</span> arrays can be converted to Python scalars'}}),pa=new _({props:{code:"predictions.shape, labels.shape",highlighted:"predictions.shape, labels.shape"}}),ha=new _({props:{code:"((8, 3), (8,))",highlighted:'((<span class="hljs-number">8</span>, <span class="hljs-number">3</span>), (<span class="hljs-number">8</span>,))'}}),ua=new _({props:{code:`import numpy as np


def compute_metrics(eval_pred):
    predictions, labels = eval_pred
    predictions = np.argmax(predictions, axis=1)
    return metric.compute(predictions=predictions, references=labels)


compute_metrics((predictions, labels))`,highlighted:`<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np


<span class="hljs-keyword">def</span> <span class="hljs-title function_">compute_metrics</span>(<span class="hljs-params">eval_pred</span>):
    predictions, labels = eval_pred
    predictions = np.argmax(predictions, axis=<span class="hljs-number">1</span>)
    <span class="hljs-keyword">return</span> metric.compute(predictions=predictions, references=labels)


compute_metrics((predictions, labels))`}}),ca=new _({props:{code:"{'accuracy': 0.625}",highlighted:'{<span class="hljs-string">&#x27;accuracy&#x27;</span>: <span class="hljs-number">0.625</span>}'}}),da=new _({props:{code:`import numpy as np
from datasets import load_dataset, load_metric
from transformers import (
    AutoTokenizer,
    AutoModelForSequenceClassification,
    DataCollatorWithPadding,
    TrainingArguments,
    Trainer,
)

raw_datasets = load_dataset("glue", "mnli")

model_checkpoint = "distilbert-base-uncased"
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)


def preprocess_function(examples):
    return tokenizer(examples["premise"], examples["hypothesis"], truncation=True)


tokenized_datasets = raw_datasets.map(preprocess_function, batched=True)
model = AutoModelForSequenceClassification.from_pretrained(model_checkpoint, num_labels=3)

args = TrainingArguments(
    f"distilbert-finetuned-mnli",
    evaluation_strategy="epoch",
    save_strategy="epoch",
    learning_rate=2e-5,
    num_train_epochs=3,
    weight_decay=0.01,
)

metric = load_metric("glue", "mnli")


def compute_metrics(eval_pred):
    predictions, labels = eval_pred
    predictions = np.argmax(predictions, axis=1)
    return metric.compute(predictions=predictions, references=labels)


data_collator = DataCollatorWithPadding(tokenizer=tokenizer)

trainer = Trainer(
    model,
    args,
    train_dataset=tokenized_datasets["train"],
    eval_dataset=tokenized_datasets["validation_matched"],
    compute_metrics=compute_metrics,
    data_collator=data_collator,
    tokenizer=tokenizer,
)
trainer.train()`,highlighted:`<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np
<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset, load_metric
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
    AutoTokenizer,
    AutoModelForSequenceClassification,
    DataCollatorWithPadding,
    TrainingArguments,
    Trainer,
)

raw_datasets = load_dataset(<span class="hljs-string">&quot;glue&quot;</span>, <span class="hljs-string">&quot;mnli&quot;</span>)

model_checkpoint = <span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)


<span class="hljs-keyword">def</span> <span class="hljs-title function_">preprocess_function</span>(<span class="hljs-params">examples</span>):
    <span class="hljs-keyword">return</span> tokenizer(examples[<span class="hljs-string">&quot;premise&quot;</span>], examples[<span class="hljs-string">&quot;hypothesis&quot;</span>], truncation=<span class="hljs-literal">True</span>)


tokenized_datasets = raw_datasets.<span class="hljs-built_in">map</span>(preprocess_function, batched=<span class="hljs-literal">True</span>)
model = AutoModelForSequenceClassification.from_pretrained(model_checkpoint, num_labels=<span class="hljs-number">3</span>)

args = TrainingArguments(
    <span class="hljs-string">f&quot;distilbert-finetuned-mnli&quot;</span>,
    evaluation_strategy=<span class="hljs-string">&quot;epoch&quot;</span>,
    save_strategy=<span class="hljs-string">&quot;epoch&quot;</span>,
    learning_rate=<span class="hljs-number">2e-5</span>,
    num_train_epochs=<span class="hljs-number">3</span>,
    weight_decay=<span class="hljs-number">0.01</span>,
)

metric = load_metric(<span class="hljs-string">&quot;glue&quot;</span>, <span class="hljs-string">&quot;mnli&quot;</span>)


<span class="hljs-keyword">def</span> <span class="hljs-title function_">compute_metrics</span>(<span class="hljs-params">eval_pred</span>):
    predictions, labels = eval_pred
    predictions = np.argmax(predictions, axis=<span class="hljs-number">1</span>)
    <span class="hljs-keyword">return</span> metric.compute(predictions=predictions, references=labels)


data_collator = DataCollatorWithPadding(tokenizer=tokenizer)

trainer = Trainer(
    model,
    args,
    train_dataset=tokenized_datasets[<span class="hljs-string">&quot;train&quot;</span>],
    eval_dataset=tokenized_datasets[<span class="hljs-string">&quot;validation_matched&quot;</span>],
    compute_metrics=compute_metrics,
    data_collator=data_collator,
    tokenizer=tokenizer,
)
trainer.train()`}}),Fe=new Pa({props:{$$slots:{default:[wg]},$$scope:{ctx:C}}}),ma=new N({}),fa=new N({}),Ye=new Pa({props:{warning:!0,$$slots:{default:[_g]},$$scope:{ctx:C}}}),ga=new N({}),ya=new _({props:{code:`for batch in trainer.get_train_dataloader():
    break

batch = {k: v.to(device) for k, v in batch.items()}
trainer.create_optimizer()

for _ in range(20):
    outputs = trainer.model(**batch)
    loss = outputs.loss
    loss.backward()
    trainer.optimizer.step()
    trainer.optimizer.zero_grad()`,highlighted:`<span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> trainer.get_train_dataloader():
    <span class="hljs-keyword">break</span>

batch = {k: v.to(device) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> batch.items()}
trainer.create_optimizer()

<span class="hljs-keyword">for</span> _ <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">20</span>):
    outputs = trainer.model(**batch)
    loss = outputs.loss
    loss.backward()
    trainer.optimizer.step()
    trainer.optimizer.zero_grad()`}}),Re=new Pa({props:{$$slots:{default:[vg]},$$scope:{ctx:C}}}),ba=new _({props:{code:`with torch.no_grad():
    outputs = trainer.model(**batch)
preds = outputs.logits
labels = batch["labels"]

compute_metrics((preds.cpu().numpy(), labels.cpu().numpy()))`,highlighted:`<span class="hljs-keyword">with</span> torch.no_grad():
    outputs = trainer.model(**batch)
preds = outputs.logits
labels = batch[<span class="hljs-string">&quot;labels&quot;</span>]

compute_metrics((preds.cpu().numpy(), labels.cpu().numpy()))`}}),wa=new _({props:{code:"{'accuracy': 1.0}",highlighted:'{<span class="hljs-string">&#x27;accuracy&#x27;</span>: <span class="hljs-number">1.0</span>}'}}),Ke=new Pa({props:{warning:!0,$$slots:{default:[$g]},$$scope:{ctx:C}}}),_a=new N({}),va=new N({}),{c(){b=i("meta"),k=h(),c(v.$$.fragment),$=h(),T=i("h1"),j=i("a"),E=i("span"),c(q.$$.fragment),A=h(),x=i("span"),Y=r("Debugging the training pipeline"),O=h(),c(P.$$.fragment),rt=h(),U=i("p"),Ca=r("You\u2019ve written a beautiful script to train or fine-tune a model on a given task, dutifully following the advice from "),Aa=i("a"),Gl=r("Chapter 7"),Yl=r(". But when you launch the command "),Is=i("code"),Hl=r("trainer.train()"),Bl=r(", something horrible happens: you get an error \u{1F631}! Or worse, everything seems to be fine and the training runs without error, but the resulting model is crappy. In this section, we will show you what you can do to debug these kinds of issues."),br=h(),se=i("h2"),ge=i("a"),Ss=i("span"),c(nt.$$.fragment),Rl=h(),Os=i("span"),Vl=r("Debugging the training pipeline"),wr=h(),c(it.$$.fragment),_r=h(),H=i("p"),Kl=r("The problem when you encounter an error in "),Us=i("code"),Jl=r("trainer.train()"),Zl=r(" is that it could come from multiple sources, as the "),Ns=i("code"),Ql=r("Trainer"),Xl=r(" usually puts together lots of things. It converts datasets to dataloaders, so the problem could be something wrong in your dataset, or some issue when trying to batch elements of the datasets together. Then it takes a batch of data and feeds it to the model, so the problem could be in the model code. After that, it computes the gradients and performs the optimization step, so the problem could also be in your optimizer. And even if everything goes well for training, something could still go wrong during the evaluation if there is a problem with your metric."),vr=h(),ye=i("p"),ep=r("The best way to debug an error that arises in "),Ws=i("code"),tp=r("trainer.train()"),ap=r(" is to manually go through this whole pipeline to see where things went awry. The error is then often very easy to solve."),$r=h(),be=i("p"),sp=r("To demonstrate this, we will use the following script that (tries to) fine-tune a DistilBERT model on the "),lt=i("a"),op=r("MNLI dataset"),rp=r(":"),kr=h(),c(pt.$$.fragment),jr=h(),za=i("p"),np=r("If you try to execute it, you will be met with a rather cryptic error:"),Er=h(),c(ht.$$.fragment),Tr=h(),oe=i("h3"),we=i("a"),Ls=i("span"),c(ut.$$.fragment),ip=h(),Fs=i("span"),lp=r("Check your data"),qr=h(),_e=i("p"),pp=r("This goes without saying, but if your data is corrupted, the "),Ms=i("code"),hp=r("Trainer"),up=r(" is not going to be able to form batches, let alone train your model. So first things first, you need to have a look at what is inside your training set."),xr=h(),ve=i("p"),cp=r("To avoid countless hours spent trying to fix something that is not the source of the bug, we recommend you use "),Gs=i("code"),dp=r("trainer.train_dataset"),mp=r(" for your checks and nothing else. So let\u2019s do that here:"),Pr=h(),c(ct.$$.fragment),Cr=h(),c(dt.$$.fragment),Ar=h(),B=i("p"),fp=r("Do you notice something wrong? This, in conjunction with the error message about "),Ys=i("code"),gp=r("input_ids"),yp=r(" missing, should make you realize those are texts, not numbers the model can make sense of. Here, the original error is very misleading because the "),Hs=i("code"),bp=r("Trainer"),wp=r(" automatically removes the columns that don\u2019t match the model signature (that is, the arguments expected by the model). That means here, everything apart from the labels was discarded. There was thus no issue with creating batches and then sending them to the model, which in turn complained it didn\u2019t receive the proper input."),zr=h(),z=i("p"),_p=r("Why wasn\u2019t the data processed? We did use the "),Bs=i("code"),vp=r("Dataset.map()"),$p=r(" method on the datasets to apply the tokenizer on each sample. But if you look closely at the code, you will see that we made a mistake when passing the training and evaluation sets to the "),Rs=i("code"),kp=r("Trainer"),jp=r(". Instead of using "),Vs=i("code"),Ep=r("tokenized_datasets"),Tp=r(" here, we used "),Ks=i("code"),qp=r("raw_datasets"),xp=r(" \u{1F926}. So let\u2019s fix this!"),Dr=h(),c(mt.$$.fragment),Ir=h(),Da=i("p"),Pp=r("This new code will now give a different error (progress!):"),Sr=h(),c(ft.$$.fragment),Or=h(),Ia=i("p"),Cp=r("Looking at the traceback, we can see the error happens in the data collation step:"),Ur=h(),c(gt.$$.fragment),Nr=h(),Sa=i("p"),Ap=r("So, we should move to that. Before we do, however, let\u2019s finish inspecting our data, just to be 100% sure it\u2019s correct."),Wr=h(),Oa=i("p"),zp=r("One thing you should always do when debugging a training session is have a look at the decoded inputs of your model. We can\u2019t make sense of the numbers that we feed it directly, so we should look at what those numbers represent. In computer vision, for example, that means looking at the decoded pictures of the pixels you pass, in speech it means listening to the decoded audio samples, and for our NLP example here it means using our tokenizer to decode the inputs:"),Lr=h(),c(yt.$$.fragment),Fr=h(),c(bt.$$.fragment),Mr=h(),Ua=i("p"),Dp=r("So that seems correct. You should do this for all the keys in the inputs:"),Gr=h(),c(wt.$$.fragment),Yr=h(),c(_t.$$.fragment),Hr=h(),D=i("p"),Ip=r("Note that the keys that don\u2019t correspond to inputs accepted by the model will be automatically discarded, so here we will only keep "),Js=i("code"),Sp=r("input_ids"),Op=r(", "),Zs=i("code"),Up=r("attention_mask"),Np=r(", and "),Qs=i("code"),Wp=r("label"),Lp=r(" (which will be renamed "),Xs=i("code"),Fp=r("labels"),Mp=r("). To double-check the model signature, you can print the class of your model, then go check its documentation:"),Br=h(),c(vt.$$.fragment),Rr=h(),c($t.$$.fragment),Vr=h(),R=i("p"),Gp=r("So in our case, we can check the parameters accepted on "),kt=i("a"),Yp=r("this page"),Hp=r(". The "),eo=i("code"),Bp=r("Trainer"),Rp=r(" will also log the columns it\u2019s discarding."),Kr=h(),$e=i("p"),Vp=r("We have checked that the input IDs are correct by decoding them. Next is the "),to=i("code"),Kp=r("attention_mask"),Jp=r(":"),Jr=h(),c(jt.$$.fragment),Zr=h(),c(Et.$$.fragment),Qr=h(),Na=i("p"),Zp=r("Since we didn\u2019t apply padding in our preprocessing, this seems perfectly natural. To be sure there is no issue with that attention mask, let\u2019s check it is the same length as our input IDs:"),Xr=h(),c(Tt.$$.fragment),en=h(),c(qt.$$.fragment),tn=h(),Wa=i("p"),Qp=r("That\u2019s good! Lastly, let\u2019s check our label:"),an=h(),c(xt.$$.fragment),sn=h(),c(Pt.$$.fragment),on=h(),V=i("p"),Xp=r("Like the input IDs, this is a number that doesn\u2019t really make sense on its own. As we saw before, the map between integers and label names is stored inside the "),ao=i("code"),eh=r("names"),th=r(" attribute of the corresponding "),so=i("em"),ah=r("feature"),sh=r(" of the dataset:"),rn=h(),c(Ct.$$.fragment),nn=h(),c(At.$$.fragment),ln=h(),K=i("p"),oh=r("So "),oo=i("code"),rh=r("1"),nh=r(" means "),ro=i("code"),ih=r("neutral"),lh=r(", which means the two sentences we saw above are not in contradiction, and the first one does not imply the second one. That seems correct!"),pn=h(),La=i("p"),ph=r("We don\u2019t have token type IDs here, since DistilBERT does not expect them; if you have some in your model, you should also make sure that they properly match where the first and second sentences are in the input."),hn=h(),c(ke.$$.fragment),un=h(),Fa=i("p"),hh=r("We are only doing the check on the training set here, but you should of course double-check the validation and test sets the same way."),cn=h(),Ma=i("p"),uh=r("Now that we know our datasets look good, it\u2019s time to check the next step of the training pipeline."),dn=h(),re=i("h3"),je=i("a"),no=i("span"),c(zt.$$.fragment),ch=h(),io=i("span"),dh=r("From datasets to dataloaders"),mn=h(),I=i("p"),mh=r("The next thing that can go wrong in the training pipeline is when the "),lo=i("code"),fh=r("Trainer"),gh=r(" tries to form batches from the training or validation set. Once you are sure the "),po=i("code"),yh=r("Trainer"),bh=r("\u2019s datasets are correct, you can try to manually form a batch by executing the following (replace "),ho=i("code"),wh=r("train"),_h=r(" with "),uo=i("code"),vh=r("eval"),$h=r(" for the validation dataloader):"),fn=h(),c(Dt.$$.fragment),gn=h(),Ga=i("p"),kh=r("This code creates the training dataloader, then iterates through it, stopping at the first iteration. If the code executes without error, you have the first training batch that you can inspect, and if the code errors out, you know for sure the problem is in the dataloader, as is the case here:"),yn=h(),c(It.$$.fragment),bn=h(),J=i("p"),jh=r("Inspecting the last frame of the traceback should be enough to give you a clue, but let\u2019s do a bit more digging. Most of the problems during batch creation arise because of the collation of examples into a single batch, so the first thing to check when in doubt is what "),co=i("code"),Eh=r("collate_fn"),Th=r(" your "),mo=i("code"),qh=r("DataLoader"),xh=r(" is using:"),wn=h(),c(St.$$.fragment),_n=h(),c(Ot.$$.fragment),vn=h(),W=i("p"),Ph=r("So this is the "),fo=i("code"),Ch=r("default_data_collator"),Ah=r(", but that\u2019s not what we want in this case. We want to pad our examples to the longest sentence in the batch, which is done by the "),go=i("code"),zh=r("DataCollatorWithPadding"),Dh=r(" collator. And this data collator is supposed to be used by default by the "),yo=i("code"),Ih=r("Trainer"),Sh=r(", so why is it not used here?"),$n=h(),L=i("p"),Oh=r("The answer is because we did not pass the "),bo=i("code"),Uh=r("tokenizer"),Nh=r(" to the "),wo=i("code"),Wh=r("Trainer"),Lh=r(", so it couldn\u2019t create the "),_o=i("code"),Fh=r("DataCollatorWithPadding"),Mh=r(" we want. In practice, you should never hesitate to explicitly pass along the data collator you want to use, to make sure you avoid these kinds of errors. Let\u2019s adapt our code to do exactly that:"),kn=h(),c(Ut.$$.fragment),jn=h(),Ya=i("p"),Gh=r("The good news? We don\u2019t get the same error as before, which is definitely progress. The bad news? We get an infamous CUDA error instead:"),En=h(),c(Nt.$$.fragment),Tn=h(),Ha=i("p"),Yh=r("This is bad because CUDA errors are extremely hard to debug in general. We will see in a minute how to solve this, but first let\u2019s finish our analysis of batch creation."),qn=h(),Ba=i("p"),Hh=r("If you are sure your data collator is the right one, you should try to apply it on a couple of samples of your dataset:"),xn=h(),c(Wt.$$.fragment),Pn=h(),S=i("p"),Bh=r("This code will fail because the "),vo=i("code"),Rh=r("train_dataset"),Vh=r(" contains string columns, which the "),$o=i("code"),Kh=r("Trainer"),Jh=r(" usually removes. You can remove them manually, or if you want to replicate exactly what the "),ko=i("code"),Zh=r("Trainer"),Qh=r(" is doing behind the scenes, you can call the private "),jo=i("code"),Xh=r("Trainer._remove_unused_columns()"),eu=r(" method that does that:"),Cn=h(),c(Lt.$$.fragment),An=h(),Ra=i("p"),tu=r("You should then be able to manually debug what happens inside the data collator if the error persists."),zn=h(),Va=i("p"),au=r("Now that we\u2019ve debugged the batch creation process, it\u2019s time to pass one through the model!"),Dn=h(),ne=i("h3"),Ee=i("a"),Eo=i("span"),c(Ft.$$.fragment),su=h(),To=i("span"),ou=r("Going through the model"),In=h(),Ka=i("p"),ru=r("You should be able to get a batch by executing the following command:"),Sn=h(),c(Mt.$$.fragment),On=h(),Te=i("p"),nu=r("If you\u2019re running this code in a notebook, you may get a CUDA error that\u2019s similar to the one we saw earlier, in which case you need to restart your notebook and reexecute the last snippet without the "),qo=i("code"),iu=r("trainer.train()"),lu=r(" line. That\u2019s the second most annoying thing about CUDA errors: they irremediably break your kernel. The most annoying thing about them is the fact that they are hard to debug."),Un=h(),Ja=i("p"),pu=r("Why is that? It has to do with the way GPUs work. They are extremely efficient at executing a lot of operations in parallel, but the drawback is that when one of those instructions results in an error, you don\u2019t know it instantly. It\u2019s only when the program calls a synchronization of the multiple processes on the GPU that it will realize something went wrong, so the error is actually raised at a place that has nothing to do with what created it. For instance, if we look at our previous traceback, the error was raised during the backward pass, but we will see in a minute that it actually stems from something in the forward pass."),Nn=h(),Za=i("p"),hu=r("So how do we debug those errors? The answer is easy: we don\u2019t. Unless your CUDA error is an out-of-memory error (which means there is not enough memory in your GPU), you should always go back to the CPU to debug it."),Wn=h(),qe=i("p"),uu=r("To do this in our case, we just have to put the model back on the CPU and call it on our batch \u2014 the batch returned by the "),xo=i("code"),cu=r("DataLoader"),du=r(" has not been moved to the GPU yet:"),Ln=h(),c(Gt.$$.fragment),Fn=h(),c(Yt.$$.fragment),Mn=h(),xe=i("p"),mu=r("So, the picture is getting clearer. Instead of having a CUDA error, we now have an "),Po=i("code"),fu=r("IndexError"),gu=r(" in the loss computation (so nothing to do with the backward pass, as we said earlier). More precisely, we can see that it\u2019s target 2 that creates the error, so this is a very good moment to check the number of labels of our model:"),Gn=h(),c(Ht.$$.fragment),Yn=h(),c(Bt.$$.fragment),Hn=h(),Qa=i("p"),yu=r("With two labels, only 0s and 1s are allowed as targets, but according to the error message we got a 2. Getting a 2 is actually normal: if we remember the label names we extracted earlier, there were three, so we have indices 0, 1, and 2 in our dataset. The problem is that we didn\u2019t tell that to our model, which should have been created with three labels. So let\u2019s fix that!"),Bn=h(),c(Rt.$$.fragment),Rn=h(),Pe=i("p"),bu=r("We aren\u2019t including the "),Co=i("code"),wu=r("trainer.train()"),_u=r(" line yet, to take the time to check that everything looks good. If we request a batch and pass it to our model, it now works without error!"),Vn=h(),c(Vt.$$.fragment),Kn=h(),Xa=i("p"),vu=r("The next step is then to move back to the GPU and check that everything still works:"),Jn=h(),c(Kt.$$.fragment),Zn=h(),es=i("p"),$u=r("If you still get an error, make sure you restart your notebook and only execute the last version of the script."),Qn=h(),ie=i("h3"),Ce=i("a"),Ao=i("span"),c(Jt.$$.fragment),ku=h(),zo=i("span"),ju=r("Performing one optimization step"),Xn=h(),ts=i("p"),Eu=r("Now that we know that we can build batches that actually go through the model, we are ready for the next step of the training pipeline: computing the gradients and performing an optimization step."),ei=h(),Ae=i("p"),Tu=r("The first part is just a matter of calling the "),Do=i("code"),qu=r("backward()"),xu=r(" method on the loss:"),ti=h(),c(Zt.$$.fragment),ai=h(),as=i("p"),Pu=r("It\u2019s pretty rare to get an error at this stage, but if you do get one, make sure to go back to the CPU to get a helpful error message."),si=h(),Z=i("p"),Cu=r("To perform the optimization step, we just need to create the "),Io=i("code"),Au=r("optimizer"),zu=r(" and call its "),So=i("code"),Du=r("step()"),Iu=r(" method:"),oi=h(),c(Qt.$$.fragment),ri=h(),ze=i("p"),Su=r("Again, if you\u2019re using the default optimizer in the "),Oo=i("code"),Ou=r("Trainer"),Uu=r(", you shouldn\u2019t get an error at this stage, but if you have a custom optimizer, there might be some problems to debug here. Don\u2019t forget to go back to the CPU if you get a weird CUDA error at this stage. Speaking of CUDA errors, earlier we mentioned a special case. Let\u2019s have a look at that now."),ni=h(),le=i("h3"),De=i("a"),Uo=i("span"),c(Xt.$$.fragment),Nu=h(),No=i("span"),Wu=r("Dealing with CUDA out-of-memory errors"),ii=h(),Ie=i("p"),Lu=r("Whenever you get an error message that starts with "),Wo=i("code"),Fu=r("RuntimeError: CUDA out of memory"),Mu=r(", this indicates that you are out of GPU memory. This is not directly linked to your code, and it can happen with a script that runs perfectly fine. This error means that you tried to put too many things in the internal memory of your GPU, and that resulted in an error. Like with other CUDA errors, you will need to restart your kernel to be in a spot where you can run your training again."),li=h(),ss=i("p"),Gu=r("To solve this issue, you just need to use less GPU space \u2014 something that is often easier said than done. First, make sure you don\u2019t have two models on the GPU at the same time (unless that\u2019s required for your problem, of course). Then, you should probably reduce your batch size, as it directly affects the sizes of all the intermediate outputs of the model and their gradients. If the problem persists, consider using a smaller version of your model."),pi=h(),c(Se.$$.fragment),hi=h(),pe=i("h3"),Oe=i("a"),Lo=i("span"),c(ea.$$.fragment),Yu=h(),Fo=i("span"),Hu=r("Evaluating the model"),ui=h(),Ue=i("p"),Bu=r("Now that we\u2019ve solved all the issues with our code, everything is perfect and the training should run smoothly, right? Not so fast! If you run the "),Mo=i("code"),Ru=r("trainer.train()"),Vu=r(" command, everything will look good at first, but after a while you will get the following:"),ci=h(),c(ta.$$.fragment),di=h(),c(aa.$$.fragment),mi=h(),os=i("p"),Ku=r("You will realize this error appears during the evaluation phase, so this is the last thing we will need to debug."),fi=h(),Ne=i("p"),Ju=r("You can run the evaluation loop of the "),Go=i("code"),Zu=r("Trainer"),Qu=r(" independently form the training like this:"),gi=h(),c(sa.$$.fragment),yi=h(),c(oa.$$.fragment),bi=h(),c(We.$$.fragment),wi=h(),rs=i("p"),Xu=r("Before attempting to debug a problem in the evaluation loop, you should first make sure that you\u2019ve had a look at the data, are able to form a batch properly, and can run your model on it. We\u2019ve completed all of those steps, so the following code can be executed without error:"),_i=h(),c(ra.$$.fragment),vi=h(),ns=i("p"),ec=r("The error comes later, at the end of the evaluation phase, and if we look at the traceback we see this:"),$i=h(),c(na.$$.fragment),ki=h(),Q=i("p"),tc=r("This tells us that the error originates in the "),Yo=i("code"),ac=r("datasets/metric.py"),sc=r(" module \u2014 so this is a problem with our "),Ho=i("code"),oc=r("compute_metrics()"),rc=r(" function. It takes a tuple with the logits and the labels as NumPy arrays, so let\u2019s try to feed it that:"),ji=h(),c(ia.$$.fragment),Ei=h(),c(la.$$.fragment),Ti=h(),F=i("p"),nc=r("We get the same error, so the problem definitely lies with that function. If we look back at its code, we see it\u2019s just forwarding the "),Bo=i("code"),ic=r("predictions"),lc=r(" and the "),Ro=i("code"),pc=r("labels"),hc=r(" to "),Vo=i("code"),uc=r("metric.compute()"),cc=r(". So is there a problem with that method? Not really. Let\u2019s have a quick look at the shapes:"),qi=h(),c(pa.$$.fragment),xi=h(),c(ha.$$.fragment),Pi=h(),Le=i("p"),dc=r("Our predictions are still logits, not the actual predictions, which is why the metric is returning this (somewhat obscure) error. The fix is pretty easy; we just have to add an argmax in the "),Ko=i("code"),mc=r("compute_metrics()"),fc=r(" function:"),Ci=h(),c(ua.$$.fragment),Ai=h(),c(ca.$$.fragment),zi=h(),is=i("p"),gc=r("Now our error is fixed! This was the last one, so our script will now train a model properly."),Di=h(),ls=i("p"),yc=r("For reference, here is the completely fixed script:"),Ii=h(),c(da.$$.fragment),Si=h(),ps=i("p"),bc=r("In this instance, there are no more problems, and our script will fine-tune a model that should give reasonable results. But what can we do when the training proceeds without any error, and the model trained does not perform well at all? That\u2019s the hardest part of machine learning, and we\u2019ll show you a few techniques that can help."),Oi=h(),c(Fe.$$.fragment),Ui=h(),he=i("h2"),Me=i("a"),Jo=i("span"),c(ma.$$.fragment),wc=h(),Zo=i("span"),_c=r("Debugging silent errors during training"),Ni=h(),hs=i("p"),vc=r("What can we do to debug a training that completes without error but doesn\u2019t get good results? We\u2019ll give you some pointers here, but be aware that this kind of debugging is the hardest part of machine learning, and there is no magical answer."),Wi=h(),ue=i("h3"),Ge=i("a"),Qo=i("span"),c(fa.$$.fragment),$c=h(),Xo=i("span"),kc=r("Check your data (again!)"),Li=h(),us=i("p"),jc=r("Your model will only learn something if it\u2019s actually possible to learn anything from your data. If there is a bug that corrupts the data or the labels are attributed randomly, it\u2019s very likely you won\u2019t get any model training on your dataset. So always start by double-checking your decoded inputs and labels, and ask yourself the following questions:"),Fi=h(),M=i("ul"),er=i("li"),Ec=r("Is the decoded data understandable?"),Tc=h(),tr=i("li"),qc=r("Do you agree with the labels?"),xc=h(),ar=i("li"),Pc=r("Is there one label that\u2019s more common than the others?"),Cc=h(),sr=i("li"),Ac=r("What should the loss/metric be if the model predicted a random answer/always the same answer?"),Mi=h(),c(Ye.$$.fragment),Gi=h(),cs=i("p"),zc=r("After looking at your data, go through a few of the model\u2019s predictions and decode them too. If the model is always predicting the same thing, it might be because your dataset is biased toward one category (for classification problems); techniques like oversampling rare classes might help."),Yi=h(),ds=i("p"),Dc=r("If the loss/metric you get on your initial model is very different from the loss/metric you would expect for random predictions, double-check the way your loss or metric is computed, as there is probably a bug there. If you are using several losses that you add at the end, make sure they are of the same scale."),Hi=h(),ms=i("p"),Ic=r("When you are sure your data is perfect, you can see if the model is capable of training on it with one simple test."),Bi=h(),ce=i("h3"),He=i("a"),or=i("span"),c(ga.$$.fragment),Sc=h(),rr=i("span"),Oc=r("Overfit your model on one batch"),Ri=h(),fs=i("p"),Uc=r("Overfitting is usually something we try to avoid when training, as it means the model is not learning to recognize the general features we want it to but is instead just memorizing the training samples. However, trying to train your model on one batch over and over again is a good test to check if the problem as you framed it can be solved by the model you are attempting to train. It will also help you see if your initial learning rate is too high."),Vi=h(),Be=i("p"),Nc=r("Doing this once you have defined your "),nr=i("code"),Wc=r("Trainer"),Lc=r(" is really easy; just grab a batch of training data, then run a small manual training loop only using that batch for something like 20 steps:"),Ki=h(),c(ya.$$.fragment),Ji=h(),c(Re.$$.fragment),Zi=h(),Ve=i("p"),Fc=r("The resulting model should have close-to-perfect results on the same "),ir=i("code"),Mc=r("batch"),Gc=r(". Let\u2019s compute the metric on the resulting predictions:"),Qi=h(),c(ba.$$.fragment),Xi=h(),c(wa.$$.fragment),el=h(),gs=i("p"),Yc=r("100% accuracy, now this is a nice example of overfitting (meaning that if you try your model on any other sentence, it will very likely give you a wrong answer)!"),tl=h(),ys=i("p"),Hc=r("If you don\u2019t manage to have your model obtain perfect results like this, it means there is something wrong with the way you framed the problem or your data, so you should fix that. Only when you manage to pass the overfitting test can you be sure that your model can actually learn something."),al=h(),c(Ke.$$.fragment),sl=h(),de=i("h3"),Je=i("a"),lr=i("span"),c(_a.$$.fragment),Bc=h(),pr=i("span"),Rc=r("Don't tune anything until you have a first baseline"),ol=h(),Ze=i("p"),Vc=r("Hyperparameter tuning is always emphasized as being the hardest part of machine learning, but it\u2019s just the last step to help you gain a little bit on the metric. Most of the time, the default hyperparameters of the "),hr=i("code"),Kc=r("Trainer"),Jc=r(" will work just fine to give you good results, so don\u2019t launch into a time-consuming and costly hyperparameter search until you have something that beats the baseline you have on your dataset."),rl=h(),bs=i("p"),Zc=r("Once you have a good enough model, you can start tweaking a bit. Don\u2019t try launching a thousand runs with different hyperparameters, but compare a couple of runs with different values for one hyperparameter to get an idea of which has the greatest impact."),nl=h(),ws=i("p"),Qc=r("If you are tweaking the model itself, keep it simple and don\u2019t try anything you can\u2019t reasonably justify. Always make sure you go back to the overfitting test to verify that your change hasn\u2019t had any unintended consequences."),il=h(),me=i("h3"),Qe=i("a"),ur=i("span"),c(va.$$.fragment),Xc=h(),cr=i("span"),ed=r("Ask for help"),ll=h(),Xe=i("p"),td=r("Hopefully you will have found some advice in this section that helped you solve your issue, but if that\u2019s not the case, remember you can always ask the community on the "),$a=i("a"),ad=r("forums"),sd=r("."),pl=h(),_s=i("p"),od=r("Here are some additional resources that may prove helpful:"),hl=h(),G=i("ul"),vs=i("li"),ka=i("a"),rd=r("\u201CReproducibility as a vehicle for engineering best practices\u201D"),nd=r(" by Joel Grus"),id=h(),$s=i("li"),ja=i("a"),ld=r("\u201CChecklist for debugging neural networks\u201D"),pd=r(" by Cecelia Shao"),hd=h(),ks=i("li"),Ea=i("a"),ud=r("\u201CHow to unit test machine learning code\u201D"),cd=r(" by Chase Roberts"),dd=h(),js=i("li"),Ta=i("a"),md=r("\u201CA Recipe for Training Neural Networks\u201D"),fd=r(" by Andrej Karpathy"),ul=h(),Es=i("p"),gd=r("Of course, not every problem you encounter when training neural nets is your own fault! If you encounter something in the \u{1F917} Transformers or \u{1F917} Datasets library that does not seem right, you may have encountered a bug. You should definitely tell us all about it, and in the next section we\u2019ll explain exactly how to do that."),this.h()},l(e){const s=ug('[data-svelte="svelte-1phssyn"]',document.head);b=l(s,"META",{name:!0,content:!0}),s.forEach(t),k=u(e),d(v.$$.fragment,e),$=u(e),T=l(e,"H1",{class:!0});var qa=p(T);j=l(qa,"A",{id:!0,class:!0,href:!0});var dr=p(j);E=l(dr,"SPAN",{});var mr=p(E);d(q.$$.fragment,mr),mr.forEach(t),dr.forEach(t),A=u(qa),x=l(qa,"SPAN",{});var fr=p(x);Y=n(fr,"Debugging the training pipeline"),fr.forEach(t),qa.forEach(t),O=u(e),d(P.$$.fragment,e),rt=u(e),U=l(e,"P",{});var fe=p(U);Ca=n(fe,"You\u2019ve written a beautiful script to train or fine-tune a model on a given task, dutifully following the advice from "),Aa=l(fe,"A",{href:!0});var gr=p(Aa);Gl=n(gr,"Chapter 7"),gr.forEach(t),Yl=n(fe,". But when you launch the command "),Is=l(fe,"CODE",{});var yr=p(Is);Hl=n(yr,"trainer.train()"),yr.forEach(t),Bl=n(fe,", something horrible happens: you get an error \u{1F631}! Or worse, everything seems to be fine and the training runs without error, but the resulting model is crappy. In this section, we will show you what you can do to debug these kinds of issues."),fe.forEach(t),br=u(e),se=l(e,"H2",{class:!0});var xa=p(se);ge=l(xa,"A",{id:!0,class:!0,href:!0});var vd=p(ge);Ss=l(vd,"SPAN",{});var $d=p(Ss);d(nt.$$.fragment,$d),$d.forEach(t),vd.forEach(t),Rl=u(xa),Os=l(xa,"SPAN",{});var kd=p(Os);Vl=n(kd,"Debugging the training pipeline"),kd.forEach(t),xa.forEach(t),wr=u(e),d(it.$$.fragment,e),_r=u(e),H=l(e,"P",{});var Ts=p(H);Kl=n(Ts,"The problem when you encounter an error in "),Us=l(Ts,"CODE",{});var jd=p(Us);Jl=n(jd,"trainer.train()"),jd.forEach(t),Zl=n(Ts," is that it could come from multiple sources, as the "),Ns=l(Ts,"CODE",{});var Ed=p(Ns);Ql=n(Ed,"Trainer"),Ed.forEach(t),Xl=n(Ts," usually puts together lots of things. It converts datasets to dataloaders, so the problem could be something wrong in your dataset, or some issue when trying to batch elements of the datasets together. Then it takes a batch of data and feeds it to the model, so the problem could be in the model code. After that, it computes the gradients and performs the optimization step, so the problem could also be in your optimizer. And even if everything goes well for training, something could still go wrong during the evaluation if there is a problem with your metric."),Ts.forEach(t),vr=u(e),ye=l(e,"P",{});var dl=p(ye);ep=n(dl,"The best way to debug an error that arises in "),Ws=l(dl,"CODE",{});var Td=p(Ws);tp=n(Td,"trainer.train()"),Td.forEach(t),ap=n(dl," is to manually go through this whole pipeline to see where things went awry. The error is then often very easy to solve."),dl.forEach(t),$r=u(e),be=l(e,"P",{});var ml=p(be);sp=n(ml,"To demonstrate this, we will use the following script that (tries to) fine-tune a DistilBERT model on the "),lt=l(ml,"A",{href:!0,rel:!0});var qd=p(lt);op=n(qd,"MNLI dataset"),qd.forEach(t),rp=n(ml,":"),ml.forEach(t),kr=u(e),d(pt.$$.fragment,e),jr=u(e),za=l(e,"P",{});var xd=p(za);np=n(xd,"If you try to execute it, you will be met with a rather cryptic error:"),xd.forEach(t),Er=u(e),d(ht.$$.fragment,e),Tr=u(e),oe=l(e,"H3",{class:!0});var fl=p(oe);we=l(fl,"A",{id:!0,class:!0,href:!0});var Pd=p(we);Ls=l(Pd,"SPAN",{});var Cd=p(Ls);d(ut.$$.fragment,Cd),Cd.forEach(t),Pd.forEach(t),ip=u(fl),Fs=l(fl,"SPAN",{});var Ad=p(Fs);lp=n(Ad,"Check your data"),Ad.forEach(t),fl.forEach(t),qr=u(e),_e=l(e,"P",{});var gl=p(_e);pp=n(gl,"This goes without saying, but if your data is corrupted, the "),Ms=l(gl,"CODE",{});var zd=p(Ms);hp=n(zd,"Trainer"),zd.forEach(t),up=n(gl," is not going to be able to form batches, let alone train your model. So first things first, you need to have a look at what is inside your training set."),gl.forEach(t),xr=u(e),ve=l(e,"P",{});var yl=p(ve);cp=n(yl,"To avoid countless hours spent trying to fix something that is not the source of the bug, we recommend you use "),Gs=l(yl,"CODE",{});var Dd=p(Gs);dp=n(Dd,"trainer.train_dataset"),Dd.forEach(t),mp=n(yl," for your checks and nothing else. So let\u2019s do that here:"),yl.forEach(t),Pr=u(e),d(ct.$$.fragment,e),Cr=u(e),d(dt.$$.fragment,e),Ar=u(e),B=l(e,"P",{});var qs=p(B);fp=n(qs,"Do you notice something wrong? This, in conjunction with the error message about "),Ys=l(qs,"CODE",{});var Id=p(Ys);gp=n(Id,"input_ids"),Id.forEach(t),yp=n(qs," missing, should make you realize those are texts, not numbers the model can make sense of. Here, the original error is very misleading because the "),Hs=l(qs,"CODE",{});var Sd=p(Hs);bp=n(Sd,"Trainer"),Sd.forEach(t),wp=n(qs," automatically removes the columns that don\u2019t match the model signature (that is, the arguments expected by the model). That means here, everything apart from the labels was discarded. There was thus no issue with creating batches and then sending them to the model, which in turn complained it didn\u2019t receive the proper input."),qs.forEach(t),zr=u(e),z=l(e,"P",{});var X=p(z);_p=n(X,"Why wasn\u2019t the data processed? We did use the "),Bs=l(X,"CODE",{});var Od=p(Bs);vp=n(Od,"Dataset.map()"),Od.forEach(t),$p=n(X," method on the datasets to apply the tokenizer on each sample. But if you look closely at the code, you will see that we made a mistake when passing the training and evaluation sets to the "),Rs=l(X,"CODE",{});var Ud=p(Rs);kp=n(Ud,"Trainer"),Ud.forEach(t),jp=n(X,". Instead of using "),Vs=l(X,"CODE",{});var Nd=p(Vs);Ep=n(Nd,"tokenized_datasets"),Nd.forEach(t),Tp=n(X," here, we used "),Ks=l(X,"CODE",{});var Wd=p(Ks);qp=n(Wd,"raw_datasets"),Wd.forEach(t),xp=n(X," \u{1F926}. So let\u2019s fix this!"),X.forEach(t),Dr=u(e),d(mt.$$.fragment,e),Ir=u(e),Da=l(e,"P",{});var Ld=p(Da);Pp=n(Ld,"This new code will now give a different error (progress!):"),Ld.forEach(t),Sr=u(e),d(ft.$$.fragment,e),Or=u(e),Ia=l(e,"P",{});var Fd=p(Ia);Cp=n(Fd,"Looking at the traceback, we can see the error happens in the data collation step:"),Fd.forEach(t),Ur=u(e),d(gt.$$.fragment,e),Nr=u(e),Sa=l(e,"P",{});var Md=p(Sa);Ap=n(Md,"So, we should move to that. Before we do, however, let\u2019s finish inspecting our data, just to be 100% sure it\u2019s correct."),Md.forEach(t),Wr=u(e),Oa=l(e,"P",{});var Gd=p(Oa);zp=n(Gd,"One thing you should always do when debugging a training session is have a look at the decoded inputs of your model. We can\u2019t make sense of the numbers that we feed it directly, so we should look at what those numbers represent. In computer vision, for example, that means looking at the decoded pictures of the pixels you pass, in speech it means listening to the decoded audio samples, and for our NLP example here it means using our tokenizer to decode the inputs:"),Gd.forEach(t),Lr=u(e),d(yt.$$.fragment,e),Fr=u(e),d(bt.$$.fragment,e),Mr=u(e),Ua=l(e,"P",{});var Yd=p(Ua);Dp=n(Yd,"So that seems correct. You should do this for all the keys in the inputs:"),Yd.forEach(t),Gr=u(e),d(wt.$$.fragment,e),Yr=u(e),d(_t.$$.fragment,e),Hr=u(e),D=l(e,"P",{});var ee=p(D);Ip=n(ee,"Note that the keys that don\u2019t correspond to inputs accepted by the model will be automatically discarded, so here we will only keep "),Js=l(ee,"CODE",{});var Hd=p(Js);Sp=n(Hd,"input_ids"),Hd.forEach(t),Op=n(ee,", "),Zs=l(ee,"CODE",{});var Bd=p(Zs);Up=n(Bd,"attention_mask"),Bd.forEach(t),Np=n(ee,", and "),Qs=l(ee,"CODE",{});var Rd=p(Qs);Wp=n(Rd,"label"),Rd.forEach(t),Lp=n(ee," (which will be renamed "),Xs=l(ee,"CODE",{});var Vd=p(Xs);Fp=n(Vd,"labels"),Vd.forEach(t),Mp=n(ee,"). To double-check the model signature, you can print the class of your model, then go check its documentation:"),ee.forEach(t),Br=u(e),d(vt.$$.fragment,e),Rr=u(e),d($t.$$.fragment,e),Vr=u(e),R=l(e,"P",{});var xs=p(R);Gp=n(xs,"So in our case, we can check the parameters accepted on "),kt=l(xs,"A",{href:!0,rel:!0});var Kd=p(kt);Yp=n(Kd,"this page"),Kd.forEach(t),Hp=n(xs,". The "),eo=l(xs,"CODE",{});var Jd=p(eo);Bp=n(Jd,"Trainer"),Jd.forEach(t),Rp=n(xs," will also log the columns it\u2019s discarding."),xs.forEach(t),Kr=u(e),$e=l(e,"P",{});var bl=p($e);Vp=n(bl,"We have checked that the input IDs are correct by decoding them. Next is the "),to=l(bl,"CODE",{});var Zd=p(to);Kp=n(Zd,"attention_mask"),Zd.forEach(t),Jp=n(bl,":"),bl.forEach(t),Jr=u(e),d(jt.$$.fragment,e),Zr=u(e),d(Et.$$.fragment,e),Qr=u(e),Na=l(e,"P",{});var Qd=p(Na);Zp=n(Qd,"Since we didn\u2019t apply padding in our preprocessing, this seems perfectly natural. To be sure there is no issue with that attention mask, let\u2019s check it is the same length as our input IDs:"),Qd.forEach(t),Xr=u(e),d(Tt.$$.fragment,e),en=u(e),d(qt.$$.fragment,e),tn=u(e),Wa=l(e,"P",{});var Xd=p(Wa);Qp=n(Xd,"That\u2019s good! Lastly, let\u2019s check our label:"),Xd.forEach(t),an=u(e),d(xt.$$.fragment,e),sn=u(e),d(Pt.$$.fragment,e),on=u(e),V=l(e,"P",{});var Ps=p(V);Xp=n(Ps,"Like the input IDs, this is a number that doesn\u2019t really make sense on its own. As we saw before, the map between integers and label names is stored inside the "),ao=l(Ps,"CODE",{});var em=p(ao);eh=n(em,"names"),em.forEach(t),th=n(Ps," attribute of the corresponding "),so=l(Ps,"EM",{});var tm=p(so);ah=n(tm,"feature"),tm.forEach(t),sh=n(Ps," of the dataset:"),Ps.forEach(t),rn=u(e),d(Ct.$$.fragment,e),nn=u(e),d(At.$$.fragment,e),ln=u(e),K=l(e,"P",{});var Cs=p(K);oh=n(Cs,"So "),oo=l(Cs,"CODE",{});var am=p(oo);rh=n(am,"1"),am.forEach(t),nh=n(Cs," means "),ro=l(Cs,"CODE",{});var sm=p(ro);ih=n(sm,"neutral"),sm.forEach(t),lh=n(Cs,", which means the two sentences we saw above are not in contradiction, and the first one does not imply the second one. That seems correct!"),Cs.forEach(t),pn=u(e),La=l(e,"P",{});var om=p(La);ph=n(om,"We don\u2019t have token type IDs here, since DistilBERT does not expect them; if you have some in your model, you should also make sure that they properly match where the first and second sentences are in the input."),om.forEach(t),hn=u(e),d(ke.$$.fragment,e),un=u(e),Fa=l(e,"P",{});var rm=p(Fa);hh=n(rm,"We are only doing the check on the training set here, but you should of course double-check the validation and test sets the same way."),rm.forEach(t),cn=u(e),Ma=l(e,"P",{});var nm=p(Ma);uh=n(nm,"Now that we know our datasets look good, it\u2019s time to check the next step of the training pipeline."),nm.forEach(t),dn=u(e),re=l(e,"H3",{class:!0});var wl=p(re);je=l(wl,"A",{id:!0,class:!0,href:!0});var im=p(je);no=l(im,"SPAN",{});var lm=p(no);d(zt.$$.fragment,lm),lm.forEach(t),im.forEach(t),ch=u(wl),io=l(wl,"SPAN",{});var pm=p(io);dh=n(pm,"From datasets to dataloaders"),pm.forEach(t),wl.forEach(t),mn=u(e),I=l(e,"P",{});var te=p(I);mh=n(te,"The next thing that can go wrong in the training pipeline is when the "),lo=l(te,"CODE",{});var hm=p(lo);fh=n(hm,"Trainer"),hm.forEach(t),gh=n(te," tries to form batches from the training or validation set. Once you are sure the "),po=l(te,"CODE",{});var um=p(po);yh=n(um,"Trainer"),um.forEach(t),bh=n(te,"\u2019s datasets are correct, you can try to manually form a batch by executing the following (replace "),ho=l(te,"CODE",{});var cm=p(ho);wh=n(cm,"train"),cm.forEach(t),_h=n(te," with "),uo=l(te,"CODE",{});var dm=p(uo);vh=n(dm,"eval"),dm.forEach(t),$h=n(te," for the validation dataloader):"),te.forEach(t),fn=u(e),d(Dt.$$.fragment,e),gn=u(e),Ga=l(e,"P",{});var mm=p(Ga);kh=n(mm,"This code creates the training dataloader, then iterates through it, stopping at the first iteration. If the code executes without error, you have the first training batch that you can inspect, and if the code errors out, you know for sure the problem is in the dataloader, as is the case here:"),mm.forEach(t),yn=u(e),d(It.$$.fragment,e),bn=u(e),J=l(e,"P",{});var As=p(J);jh=n(As,"Inspecting the last frame of the traceback should be enough to give you a clue, but let\u2019s do a bit more digging. Most of the problems during batch creation arise because of the collation of examples into a single batch, so the first thing to check when in doubt is what "),co=l(As,"CODE",{});var fm=p(co);Eh=n(fm,"collate_fn"),fm.forEach(t),Th=n(As," your "),mo=l(As,"CODE",{});var gm=p(mo);qh=n(gm,"DataLoader"),gm.forEach(t),xh=n(As," is using:"),As.forEach(t),wn=u(e),d(St.$$.fragment,e),_n=u(e),d(Ot.$$.fragment,e),vn=u(e),W=l(e,"P",{});var et=p(W);Ph=n(et,"So this is the "),fo=l(et,"CODE",{});var ym=p(fo);Ch=n(ym,"default_data_collator"),ym.forEach(t),Ah=n(et,", but that\u2019s not what we want in this case. We want to pad our examples to the longest sentence in the batch, which is done by the "),go=l(et,"CODE",{});var bm=p(go);zh=n(bm,"DataCollatorWithPadding"),bm.forEach(t),Dh=n(et," collator. And this data collator is supposed to be used by default by the "),yo=l(et,"CODE",{});var wm=p(yo);Ih=n(wm,"Trainer"),wm.forEach(t),Sh=n(et,", so why is it not used here?"),et.forEach(t),$n=u(e),L=l(e,"P",{});var tt=p(L);Oh=n(tt,"The answer is because we did not pass the "),bo=l(tt,"CODE",{});var _m=p(bo);Uh=n(_m,"tokenizer"),_m.forEach(t),Nh=n(tt," to the "),wo=l(tt,"CODE",{});var vm=p(wo);Wh=n(vm,"Trainer"),vm.forEach(t),Lh=n(tt,", so it couldn\u2019t create the "),_o=l(tt,"CODE",{});var $m=p(_o);Fh=n($m,"DataCollatorWithPadding"),$m.forEach(t),Mh=n(tt," we want. In practice, you should never hesitate to explicitly pass along the data collator you want to use, to make sure you avoid these kinds of errors. Let\u2019s adapt our code to do exactly that:"),tt.forEach(t),kn=u(e),d(Ut.$$.fragment,e),jn=u(e),Ya=l(e,"P",{});var km=p(Ya);Gh=n(km,"The good news? We don\u2019t get the same error as before, which is definitely progress. The bad news? We get an infamous CUDA error instead:"),km.forEach(t),En=u(e),d(Nt.$$.fragment,e),Tn=u(e),Ha=l(e,"P",{});var jm=p(Ha);Yh=n(jm,"This is bad because CUDA errors are extremely hard to debug in general. We will see in a minute how to solve this, but first let\u2019s finish our analysis of batch creation."),jm.forEach(t),qn=u(e),Ba=l(e,"P",{});var Em=p(Ba);Hh=n(Em,"If you are sure your data collator is the right one, you should try to apply it on a couple of samples of your dataset:"),Em.forEach(t),xn=u(e),d(Wt.$$.fragment,e),Pn=u(e),S=l(e,"P",{});var ae=p(S);Bh=n(ae,"This code will fail because the "),vo=l(ae,"CODE",{});var Tm=p(vo);Rh=n(Tm,"train_dataset"),Tm.forEach(t),Vh=n(ae," contains string columns, which the "),$o=l(ae,"CODE",{});var qm=p($o);Kh=n(qm,"Trainer"),qm.forEach(t),Jh=n(ae," usually removes. You can remove them manually, or if you want to replicate exactly what the "),ko=l(ae,"CODE",{});var xm=p(ko);Zh=n(xm,"Trainer"),xm.forEach(t),Qh=n(ae," is doing behind the scenes, you can call the private "),jo=l(ae,"CODE",{});var Pm=p(jo);Xh=n(Pm,"Trainer._remove_unused_columns()"),Pm.forEach(t),eu=n(ae," method that does that:"),ae.forEach(t),Cn=u(e),d(Lt.$$.fragment,e),An=u(e),Ra=l(e,"P",{});var Cm=p(Ra);tu=n(Cm,"You should then be able to manually debug what happens inside the data collator if the error persists."),Cm.forEach(t),zn=u(e),Va=l(e,"P",{});var Am=p(Va);au=n(Am,"Now that we\u2019ve debugged the batch creation process, it\u2019s time to pass one through the model!"),Am.forEach(t),Dn=u(e),ne=l(e,"H3",{class:!0});var _l=p(ne);Ee=l(_l,"A",{id:!0,class:!0,href:!0});var zm=p(Ee);Eo=l(zm,"SPAN",{});var Dm=p(Eo);d(Ft.$$.fragment,Dm),Dm.forEach(t),zm.forEach(t),su=u(_l),To=l(_l,"SPAN",{});var Im=p(To);ou=n(Im,"Going through the model"),Im.forEach(t),_l.forEach(t),In=u(e),Ka=l(e,"P",{});var Sm=p(Ka);ru=n(Sm,"You should be able to get a batch by executing the following command:"),Sm.forEach(t),Sn=u(e),d(Mt.$$.fragment,e),On=u(e),Te=l(e,"P",{});var vl=p(Te);nu=n(vl,"If you\u2019re running this code in a notebook, you may get a CUDA error that\u2019s similar to the one we saw earlier, in which case you need to restart your notebook and reexecute the last snippet without the "),qo=l(vl,"CODE",{});var Om=p(qo);iu=n(Om,"trainer.train()"),Om.forEach(t),lu=n(vl," line. That\u2019s the second most annoying thing about CUDA errors: they irremediably break your kernel. The most annoying thing about them is the fact that they are hard to debug."),vl.forEach(t),Un=u(e),Ja=l(e,"P",{});var Um=p(Ja);pu=n(Um,"Why is that? It has to do with the way GPUs work. They are extremely efficient at executing a lot of operations in parallel, but the drawback is that when one of those instructions results in an error, you don\u2019t know it instantly. It\u2019s only when the program calls a synchronization of the multiple processes on the GPU that it will realize something went wrong, so the error is actually raised at a place that has nothing to do with what created it. For instance, if we look at our previous traceback, the error was raised during the backward pass, but we will see in a minute that it actually stems from something in the forward pass."),Um.forEach(t),Nn=u(e),Za=l(e,"P",{});var Nm=p(Za);hu=n(Nm,"So how do we debug those errors? The answer is easy: we don\u2019t. Unless your CUDA error is an out-of-memory error (which means there is not enough memory in your GPU), you should always go back to the CPU to debug it."),Nm.forEach(t),Wn=u(e),qe=l(e,"P",{});var $l=p(qe);uu=n($l,"To do this in our case, we just have to put the model back on the CPU and call it on our batch \u2014 the batch returned by the "),xo=l($l,"CODE",{});var Wm=p(xo);cu=n(Wm,"DataLoader"),Wm.forEach(t),du=n($l," has not been moved to the GPU yet:"),$l.forEach(t),Ln=u(e),d(Gt.$$.fragment,e),Fn=u(e),d(Yt.$$.fragment,e),Mn=u(e),xe=l(e,"P",{});var kl=p(xe);mu=n(kl,"So, the picture is getting clearer. Instead of having a CUDA error, we now have an "),Po=l(kl,"CODE",{});var Lm=p(Po);fu=n(Lm,"IndexError"),Lm.forEach(t),gu=n(kl," in the loss computation (so nothing to do with the backward pass, as we said earlier). More precisely, we can see that it\u2019s target 2 that creates the error, so this is a very good moment to check the number of labels of our model:"),kl.forEach(t),Gn=u(e),d(Ht.$$.fragment,e),Yn=u(e),d(Bt.$$.fragment,e),Hn=u(e),Qa=l(e,"P",{});var Fm=p(Qa);yu=n(Fm,"With two labels, only 0s and 1s are allowed as targets, but according to the error message we got a 2. Getting a 2 is actually normal: if we remember the label names we extracted earlier, there were three, so we have indices 0, 1, and 2 in our dataset. The problem is that we didn\u2019t tell that to our model, which should have been created with three labels. So let\u2019s fix that!"),Fm.forEach(t),Bn=u(e),d(Rt.$$.fragment,e),Rn=u(e),Pe=l(e,"P",{});var jl=p(Pe);bu=n(jl,"We aren\u2019t including the "),Co=l(jl,"CODE",{});var Mm=p(Co);wu=n(Mm,"trainer.train()"),Mm.forEach(t),_u=n(jl," line yet, to take the time to check that everything looks good. If we request a batch and pass it to our model, it now works without error!"),jl.forEach(t),Vn=u(e),d(Vt.$$.fragment,e),Kn=u(e),Xa=l(e,"P",{});var Gm=p(Xa);vu=n(Gm,"The next step is then to move back to the GPU and check that everything still works:"),Gm.forEach(t),Jn=u(e),d(Kt.$$.fragment,e),Zn=u(e),es=l(e,"P",{});var Ym=p(es);$u=n(Ym,"If you still get an error, make sure you restart your notebook and only execute the last version of the script."),Ym.forEach(t),Qn=u(e),ie=l(e,"H3",{class:!0});var El=p(ie);Ce=l(El,"A",{id:!0,class:!0,href:!0});var Hm=p(Ce);Ao=l(Hm,"SPAN",{});var Bm=p(Ao);d(Jt.$$.fragment,Bm),Bm.forEach(t),Hm.forEach(t),ku=u(El),zo=l(El,"SPAN",{});var Rm=p(zo);ju=n(Rm,"Performing one optimization step"),Rm.forEach(t),El.forEach(t),Xn=u(e),ts=l(e,"P",{});var Vm=p(ts);Eu=n(Vm,"Now that we know that we can build batches that actually go through the model, we are ready for the next step of the training pipeline: computing the gradients and performing an optimization step."),Vm.forEach(t),ei=u(e),Ae=l(e,"P",{});var Tl=p(Ae);Tu=n(Tl,"The first part is just a matter of calling the "),Do=l(Tl,"CODE",{});var Km=p(Do);qu=n(Km,"backward()"),Km.forEach(t),xu=n(Tl," method on the loss:"),Tl.forEach(t),ti=u(e),d(Zt.$$.fragment,e),ai=u(e),as=l(e,"P",{});var Jm=p(as);Pu=n(Jm,"It\u2019s pretty rare to get an error at this stage, but if you do get one, make sure to go back to the CPU to get a helpful error message."),Jm.forEach(t),si=u(e),Z=l(e,"P",{});var zs=p(Z);Cu=n(zs,"To perform the optimization step, we just need to create the "),Io=l(zs,"CODE",{});var Zm=p(Io);Au=n(Zm,"optimizer"),Zm.forEach(t),zu=n(zs," and call its "),So=l(zs,"CODE",{});var Qm=p(So);Du=n(Qm,"step()"),Qm.forEach(t),Iu=n(zs," method:"),zs.forEach(t),oi=u(e),d(Qt.$$.fragment,e),ri=u(e),ze=l(e,"P",{});var ql=p(ze);Su=n(ql,"Again, if you\u2019re using the default optimizer in the "),Oo=l(ql,"CODE",{});var Xm=p(Oo);Ou=n(Xm,"Trainer"),Xm.forEach(t),Uu=n(ql,", you shouldn\u2019t get an error at this stage, but if you have a custom optimizer, there might be some problems to debug here. Don\u2019t forget to go back to the CPU if you get a weird CUDA error at this stage. Speaking of CUDA errors, earlier we mentioned a special case. Let\u2019s have a look at that now."),ql.forEach(t),ni=u(e),le=l(e,"H3",{class:!0});var xl=p(le);De=l(xl,"A",{id:!0,class:!0,href:!0});var ef=p(De);Uo=l(ef,"SPAN",{});var tf=p(Uo);d(Xt.$$.fragment,tf),tf.forEach(t),ef.forEach(t),Nu=u(xl),No=l(xl,"SPAN",{});var af=p(No);Wu=n(af,"Dealing with CUDA out-of-memory errors"),af.forEach(t),xl.forEach(t),ii=u(e),Ie=l(e,"P",{});var Pl=p(Ie);Lu=n(Pl,"Whenever you get an error message that starts with "),Wo=l(Pl,"CODE",{});var sf=p(Wo);Fu=n(sf,"RuntimeError: CUDA out of memory"),sf.forEach(t),Mu=n(Pl,", this indicates that you are out of GPU memory. This is not directly linked to your code, and it can happen with a script that runs perfectly fine. This error means that you tried to put too many things in the internal memory of your GPU, and that resulted in an error. Like with other CUDA errors, you will need to restart your kernel to be in a spot where you can run your training again."),Pl.forEach(t),li=u(e),ss=l(e,"P",{});var of=p(ss);Gu=n(of,"To solve this issue, you just need to use less GPU space \u2014 something that is often easier said than done. First, make sure you don\u2019t have two models on the GPU at the same time (unless that\u2019s required for your problem, of course). Then, you should probably reduce your batch size, as it directly affects the sizes of all the intermediate outputs of the model and their gradients. If the problem persists, consider using a smaller version of your model."),of.forEach(t),pi=u(e),d(Se.$$.fragment,e),hi=u(e),pe=l(e,"H3",{class:!0});var Cl=p(pe);Oe=l(Cl,"A",{id:!0,class:!0,href:!0});var rf=p(Oe);Lo=l(rf,"SPAN",{});var nf=p(Lo);d(ea.$$.fragment,nf),nf.forEach(t),rf.forEach(t),Yu=u(Cl),Fo=l(Cl,"SPAN",{});var lf=p(Fo);Hu=n(lf,"Evaluating the model"),lf.forEach(t),Cl.forEach(t),ui=u(e),Ue=l(e,"P",{});var Al=p(Ue);Bu=n(Al,"Now that we\u2019ve solved all the issues with our code, everything is perfect and the training should run smoothly, right? Not so fast! If you run the "),Mo=l(Al,"CODE",{});var pf=p(Mo);Ru=n(pf,"trainer.train()"),pf.forEach(t),Vu=n(Al," command, everything will look good at first, but after a while you will get the following:"),Al.forEach(t),ci=u(e),d(ta.$$.fragment,e),di=u(e),d(aa.$$.fragment,e),mi=u(e),os=l(e,"P",{});var hf=p(os);Ku=n(hf,"You will realize this error appears during the evaluation phase, so this is the last thing we will need to debug."),hf.forEach(t),fi=u(e),Ne=l(e,"P",{});var zl=p(Ne);Ju=n(zl,"You can run the evaluation loop of the "),Go=l(zl,"CODE",{});var uf=p(Go);Zu=n(uf,"Trainer"),uf.forEach(t),Qu=n(zl," independently form the training like this:"),zl.forEach(t),gi=u(e),d(sa.$$.fragment,e),yi=u(e),d(oa.$$.fragment,e),bi=u(e),d(We.$$.fragment,e),wi=u(e),rs=l(e,"P",{});var cf=p(rs);Xu=n(cf,"Before attempting to debug a problem in the evaluation loop, you should first make sure that you\u2019ve had a look at the data, are able to form a batch properly, and can run your model on it. We\u2019ve completed all of those steps, so the following code can be executed without error:"),cf.forEach(t),_i=u(e),d(ra.$$.fragment,e),vi=u(e),ns=l(e,"P",{});var df=p(ns);ec=n(df,"The error comes later, at the end of the evaluation phase, and if we look at the traceback we see this:"),df.forEach(t),$i=u(e),d(na.$$.fragment,e),ki=u(e),Q=l(e,"P",{});var Ds=p(Q);tc=n(Ds,"This tells us that the error originates in the "),Yo=l(Ds,"CODE",{});var mf=p(Yo);ac=n(mf,"datasets/metric.py"),mf.forEach(t),sc=n(Ds," module \u2014 so this is a problem with our "),Ho=l(Ds,"CODE",{});var ff=p(Ho);oc=n(ff,"compute_metrics()"),ff.forEach(t),rc=n(Ds," function. It takes a tuple with the logits and the labels as NumPy arrays, so let\u2019s try to feed it that:"),Ds.forEach(t),ji=u(e),d(ia.$$.fragment,e),Ei=u(e),d(la.$$.fragment,e),Ti=u(e),F=l(e,"P",{});var at=p(F);nc=n(at,"We get the same error, so the problem definitely lies with that function. If we look back at its code, we see it\u2019s just forwarding the "),Bo=l(at,"CODE",{});var gf=p(Bo);ic=n(gf,"predictions"),gf.forEach(t),lc=n(at," and the "),Ro=l(at,"CODE",{});var yf=p(Ro);pc=n(yf,"labels"),yf.forEach(t),hc=n(at," to "),Vo=l(at,"CODE",{});var bf=p(Vo);uc=n(bf,"metric.compute()"),bf.forEach(t),cc=n(at,". So is there a problem with that method? Not really. Let\u2019s have a quick look at the shapes:"),at.forEach(t),qi=u(e),d(pa.$$.fragment,e),xi=u(e),d(ha.$$.fragment,e),Pi=u(e),Le=l(e,"P",{});var Dl=p(Le);dc=n(Dl,"Our predictions are still logits, not the actual predictions, which is why the metric is returning this (somewhat obscure) error. The fix is pretty easy; we just have to add an argmax in the "),Ko=l(Dl,"CODE",{});var wf=p(Ko);mc=n(wf,"compute_metrics()"),wf.forEach(t),fc=n(Dl," function:"),Dl.forEach(t),Ci=u(e),d(ua.$$.fragment,e),Ai=u(e),d(ca.$$.fragment,e),zi=u(e),is=l(e,"P",{});var _f=p(is);gc=n(_f,"Now our error is fixed! This was the last one, so our script will now train a model properly."),_f.forEach(t),Di=u(e),ls=l(e,"P",{});var vf=p(ls);yc=n(vf,"For reference, here is the completely fixed script:"),vf.forEach(t),Ii=u(e),d(da.$$.fragment,e),Si=u(e),ps=l(e,"P",{});var $f=p(ps);bc=n($f,"In this instance, there are no more problems, and our script will fine-tune a model that should give reasonable results. But what can we do when the training proceeds without any error, and the model trained does not perform well at all? That\u2019s the hardest part of machine learning, and we\u2019ll show you a few techniques that can help."),$f.forEach(t),Oi=u(e),d(Fe.$$.fragment,e),Ui=u(e),he=l(e,"H2",{class:!0});var Il=p(he);Me=l(Il,"A",{id:!0,class:!0,href:!0});var kf=p(Me);Jo=l(kf,"SPAN",{});var jf=p(Jo);d(ma.$$.fragment,jf),jf.forEach(t),kf.forEach(t),wc=u(Il),Zo=l(Il,"SPAN",{});var Ef=p(Zo);_c=n(Ef,"Debugging silent errors during training"),Ef.forEach(t),Il.forEach(t),Ni=u(e),hs=l(e,"P",{});var Tf=p(hs);vc=n(Tf,"What can we do to debug a training that completes without error but doesn\u2019t get good results? We\u2019ll give you some pointers here, but be aware that this kind of debugging is the hardest part of machine learning, and there is no magical answer."),Tf.forEach(t),Wi=u(e),ue=l(e,"H3",{class:!0});var Sl=p(ue);Ge=l(Sl,"A",{id:!0,class:!0,href:!0});var qf=p(Ge);Qo=l(qf,"SPAN",{});var xf=p(Qo);d(fa.$$.fragment,xf),xf.forEach(t),qf.forEach(t),$c=u(Sl),Xo=l(Sl,"SPAN",{});var Pf=p(Xo);kc=n(Pf,"Check your data (again!)"),Pf.forEach(t),Sl.forEach(t),Li=u(e),us=l(e,"P",{});var Cf=p(us);jc=n(Cf,"Your model will only learn something if it\u2019s actually possible to learn anything from your data. If there is a bug that corrupts the data or the labels are attributed randomly, it\u2019s very likely you won\u2019t get any model training on your dataset. So always start by double-checking your decoded inputs and labels, and ask yourself the following questions:"),Cf.forEach(t),Fi=u(e),M=l(e,"UL",{});var st=p(M);er=l(st,"LI",{});var Af=p(er);Ec=n(Af,"Is the decoded data understandable?"),Af.forEach(t),Tc=u(st),tr=l(st,"LI",{});var zf=p(tr);qc=n(zf,"Do you agree with the labels?"),zf.forEach(t),xc=u(st),ar=l(st,"LI",{});var Df=p(ar);Pc=n(Df,"Is there one label that\u2019s more common than the others?"),Df.forEach(t),Cc=u(st),sr=l(st,"LI",{});var If=p(sr);Ac=n(If,"What should the loss/metric be if the model predicted a random answer/always the same answer?"),If.forEach(t),st.forEach(t),Mi=u(e),d(Ye.$$.fragment,e),Gi=u(e),cs=l(e,"P",{});var Sf=p(cs);zc=n(Sf,"After looking at your data, go through a few of the model\u2019s predictions and decode them too. If the model is always predicting the same thing, it might be because your dataset is biased toward one category (for classification problems); techniques like oversampling rare classes might help."),Sf.forEach(t),Yi=u(e),ds=l(e,"P",{});var Of=p(ds);Dc=n(Of,"If the loss/metric you get on your initial model is very different from the loss/metric you would expect for random predictions, double-check the way your loss or metric is computed, as there is probably a bug there. If you are using several losses that you add at the end, make sure they are of the same scale."),Of.forEach(t),Hi=u(e),ms=l(e,"P",{});var Uf=p(ms);Ic=n(Uf,"When you are sure your data is perfect, you can see if the model is capable of training on it with one simple test."),Uf.forEach(t),Bi=u(e),ce=l(e,"H3",{class:!0});var Ol=p(ce);He=l(Ol,"A",{id:!0,class:!0,href:!0});var Nf=p(He);or=l(Nf,"SPAN",{});var Wf=p(or);d(ga.$$.fragment,Wf),Wf.forEach(t),Nf.forEach(t),Sc=u(Ol),rr=l(Ol,"SPAN",{});var Lf=p(rr);Oc=n(Lf,"Overfit your model on one batch"),Lf.forEach(t),Ol.forEach(t),Ri=u(e),fs=l(e,"P",{});var Ff=p(fs);Uc=n(Ff,"Overfitting is usually something we try to avoid when training, as it means the model is not learning to recognize the general features we want it to but is instead just memorizing the training samples. However, trying to train your model on one batch over and over again is a good test to check if the problem as you framed it can be solved by the model you are attempting to train. It will also help you see if your initial learning rate is too high."),Ff.forEach(t),Vi=u(e),Be=l(e,"P",{});var Ul=p(Be);Nc=n(Ul,"Doing this once you have defined your "),nr=l(Ul,"CODE",{});var Mf=p(nr);Wc=n(Mf,"Trainer"),Mf.forEach(t),Lc=n(Ul," is really easy; just grab a batch of training data, then run a small manual training loop only using that batch for something like 20 steps:"),Ul.forEach(t),Ki=u(e),d(ya.$$.fragment,e),Ji=u(e),d(Re.$$.fragment,e),Zi=u(e),Ve=l(e,"P",{});var Nl=p(Ve);Fc=n(Nl,"The resulting model should have close-to-perfect results on the same "),ir=l(Nl,"CODE",{});var Gf=p(ir);Mc=n(Gf,"batch"),Gf.forEach(t),Gc=n(Nl,". Let\u2019s compute the metric on the resulting predictions:"),Nl.forEach(t),Qi=u(e),d(ba.$$.fragment,e),Xi=u(e),d(wa.$$.fragment,e),el=u(e),gs=l(e,"P",{});var Yf=p(gs);Yc=n(Yf,"100% accuracy, now this is a nice example of overfitting (meaning that if you try your model on any other sentence, it will very likely give you a wrong answer)!"),Yf.forEach(t),tl=u(e),ys=l(e,"P",{});var Hf=p(ys);Hc=n(Hf,"If you don\u2019t manage to have your model obtain perfect results like this, it means there is something wrong with the way you framed the problem or your data, so you should fix that. Only when you manage to pass the overfitting test can you be sure that your model can actually learn something."),Hf.forEach(t),al=u(e),d(Ke.$$.fragment,e),sl=u(e),de=l(e,"H3",{class:!0});var Wl=p(de);Je=l(Wl,"A",{id:!0,class:!0,href:!0});var Bf=p(Je);lr=l(Bf,"SPAN",{});var Rf=p(lr);d(_a.$$.fragment,Rf),Rf.forEach(t),Bf.forEach(t),Bc=u(Wl),pr=l(Wl,"SPAN",{});var Vf=p(pr);Rc=n(Vf,"Don't tune anything until you have a first baseline"),Vf.forEach(t),Wl.forEach(t),ol=u(e),Ze=l(e,"P",{});var Ll=p(Ze);Vc=n(Ll,"Hyperparameter tuning is always emphasized as being the hardest part of machine learning, but it\u2019s just the last step to help you gain a little bit on the metric. Most of the time, the default hyperparameters of the "),hr=l(Ll,"CODE",{});var Kf=p(hr);Kc=n(Kf,"Trainer"),Kf.forEach(t),Jc=n(Ll," will work just fine to give you good results, so don\u2019t launch into a time-consuming and costly hyperparameter search until you have something that beats the baseline you have on your dataset."),Ll.forEach(t),rl=u(e),bs=l(e,"P",{});var Jf=p(bs);Zc=n(Jf,"Once you have a good enough model, you can start tweaking a bit. Don\u2019t try launching a thousand runs with different hyperparameters, but compare a couple of runs with different values for one hyperparameter to get an idea of which has the greatest impact."),Jf.forEach(t),nl=u(e),ws=l(e,"P",{});var Zf=p(ws);Qc=n(Zf,"If you are tweaking the model itself, keep it simple and don\u2019t try anything you can\u2019t reasonably justify. Always make sure you go back to the overfitting test to verify that your change hasn\u2019t had any unintended consequences."),Zf.forEach(t),il=u(e),me=l(e,"H3",{class:!0});var Fl=p(me);Qe=l(Fl,"A",{id:!0,class:!0,href:!0});var Qf=p(Qe);ur=l(Qf,"SPAN",{});var Xf=p(ur);d(va.$$.fragment,Xf),Xf.forEach(t),Qf.forEach(t),Xc=u(Fl),cr=l(Fl,"SPAN",{});var eg=p(cr);ed=n(eg,"Ask for help"),eg.forEach(t),Fl.forEach(t),ll=u(e),Xe=l(e,"P",{});var Ml=p(Xe);td=n(Ml,"Hopefully you will have found some advice in this section that helped you solve your issue, but if that\u2019s not the case, remember you can always ask the community on the "),$a=l(Ml,"A",{href:!0,rel:!0});var tg=p($a);ad=n(tg,"forums"),tg.forEach(t),sd=n(Ml,"."),Ml.forEach(t),pl=u(e),_s=l(e,"P",{});var ag=p(_s);od=n(ag,"Here are some additional resources that may prove helpful:"),ag.forEach(t),hl=u(e),G=l(e,"UL",{});var ot=p(G);vs=l(ot,"LI",{});var yd=p(vs);ka=l(yd,"A",{href:!0,rel:!0});var sg=p(ka);rd=n(sg,"\u201CReproducibility as a vehicle for engineering best practices\u201D"),sg.forEach(t),nd=n(yd," by Joel Grus"),yd.forEach(t),id=u(ot),$s=l(ot,"LI",{});var bd=p($s);ja=l(bd,"A",{href:!0,rel:!0});var og=p(ja);ld=n(og,"\u201CChecklist for debugging neural networks\u201D"),og.forEach(t),pd=n(bd," by Cecelia Shao"),bd.forEach(t),hd=u(ot),ks=l(ot,"LI",{});var wd=p(ks);Ea=l(wd,"A",{href:!0,rel:!0});var rg=p(Ea);ud=n(rg,"\u201CHow to unit test machine learning code\u201D"),rg.forEach(t),cd=n(wd," by Chase Roberts"),wd.forEach(t),dd=u(ot),js=l(ot,"LI",{});var _d=p(js);Ta=l(_d,"A",{href:!0,rel:!0});var ng=p(Ta);md=n(ng,"\u201CA Recipe for Training Neural Networks\u201D"),ng.forEach(t),fd=n(_d," by Andrej Karpathy"),_d.forEach(t),ot.forEach(t),ul=u(e),Es=l(e,"P",{});var ig=p(Es);gd=n(ig,"Of course, not every problem you encounter when training neural nets is your own fault! If you encounter something in the \u{1F917} Transformers or \u{1F917} Datasets library that does not seem right, you may have encountered a bug. You should definitely tell us all about it, and in the next section we\u2019ll explain exactly how to do that."),ig.forEach(t),this.h()},h(){w(b,"name","hf:doc:metadata"),w(b,"content",JSON.stringify(jg)),w(j,"id","debugging-the-training-pipeline"),w(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(j,"href","#debugging-the-training-pipeline"),w(T,"class","relative group"),w(Aa,"href","/course/chapter7"),w(ge,"id","debugging-the-training-pipeline"),w(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(ge,"href","#debugging-the-training-pipeline"),w(se,"class","relative group"),w(lt,"href","https://huggingface.co/datasets/glue"),w(lt,"rel","nofollow"),w(we,"id","check-your-data"),w(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(we,"href","#check-your-data"),w(oe,"class","relative group"),w(kt,"href","https://huggingface.co/transformers/model_doc/distilbert.html#distilbertforsequenceclassification"),w(kt,"rel","nofollow"),w(je,"id","from-datasets-to-dataloaders"),w(je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(je,"href","#from-datasets-to-dataloaders"),w(re,"class","relative group"),w(Ee,"id","going-through-the-model"),w(Ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(Ee,"href","#going-through-the-model"),w(ne,"class","relative group"),w(Ce,"id","performing-one-optimization-step"),w(Ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(Ce,"href","#performing-one-optimization-step"),w(ie,"class","relative group"),w(De,"id","dealing-with-cuda-outofmemory-errors"),w(De,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(De,"href","#dealing-with-cuda-outofmemory-errors"),w(le,"class","relative group"),w(Oe,"id","evaluating-the-model"),w(Oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(Oe,"href","#evaluating-the-model"),w(pe,"class","relative group"),w(Me,"id","debugging-silent-errors-during-training"),w(Me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(Me,"href","#debugging-silent-errors-during-training"),w(he,"class","relative group"),w(Ge,"id","check-your-data-again"),w(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(Ge,"href","#check-your-data-again"),w(ue,"class","relative group"),w(He,"id","overfit-your-model-on-one-batch"),w(He,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(He,"href","#overfit-your-model-on-one-batch"),w(ce,"class","relative group"),w(Je,"id","dont-tune-anything-until-you-have-a-first-baseline"),w(Je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(Je,"href","#dont-tune-anything-until-you-have-a-first-baseline"),w(de,"class","relative group"),w(Qe,"id","ask-for-help"),w(Qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(Qe,"href","#ask-for-help"),w(me,"class","relative group"),w($a,"href","https://discuss.huggingface.co/"),w($a,"rel","nofollow"),w(ka,"href","https://docs.google.com/presentation/d/1yHLPvPhUs2KGI5ZWo0sU-PKU3GimAk3iTsI38Z-B5Gw/edit#slide=id.p"),w(ka,"rel","nofollow"),w(ja,"href","https://towardsdatascience.com/checklist-for-debugging-neural-networks-d8b2a9434f21"),w(ja,"rel","nofollow"),w(Ea,"href","https://medium.com/@keeper6928/how-to-unit-test-machine-learning-code-57cf6fd81765"),w(Ea,"rel","nofollow"),w(Ta,"href","http://karpathy.github.io/2019/04/25/recipe/"),w(Ta,"rel","nofollow")},m(e,s){a(document.head,b),o(e,k,s),m(v,e,s),o(e,$,s),o(e,T,s),a(T,j),a(j,E),m(q,E,null),a(T,A),a(T,x),a(x,Y),o(e,O,s),m(P,e,s),o(e,rt,s),o(e,U,s),a(U,Ca),a(U,Aa),a(Aa,Gl),a(U,Yl),a(U,Is),a(Is,Hl),a(U,Bl),o(e,br,s),o(e,se,s),a(se,ge),a(ge,Ss),m(nt,Ss,null),a(se,Rl),a(se,Os),a(Os,Vl),o(e,wr,s),m(it,e,s),o(e,_r,s),o(e,H,s),a(H,Kl),a(H,Us),a(Us,Jl),a(H,Zl),a(H,Ns),a(Ns,Ql),a(H,Xl),o(e,vr,s),o(e,ye,s),a(ye,ep),a(ye,Ws),a(Ws,tp),a(ye,ap),o(e,$r,s),o(e,be,s),a(be,sp),a(be,lt),a(lt,op),a(be,rp),o(e,kr,s),m(pt,e,s),o(e,jr,s),o(e,za,s),a(za,np),o(e,Er,s),m(ht,e,s),o(e,Tr,s),o(e,oe,s),a(oe,we),a(we,Ls),m(ut,Ls,null),a(oe,ip),a(oe,Fs),a(Fs,lp),o(e,qr,s),o(e,_e,s),a(_e,pp),a(_e,Ms),a(Ms,hp),a(_e,up),o(e,xr,s),o(e,ve,s),a(ve,cp),a(ve,Gs),a(Gs,dp),a(ve,mp),o(e,Pr,s),m(ct,e,s),o(e,Cr,s),m(dt,e,s),o(e,Ar,s),o(e,B,s),a(B,fp),a(B,Ys),a(Ys,gp),a(B,yp),a(B,Hs),a(Hs,bp),a(B,wp),o(e,zr,s),o(e,z,s),a(z,_p),a(z,Bs),a(Bs,vp),a(z,$p),a(z,Rs),a(Rs,kp),a(z,jp),a(z,Vs),a(Vs,Ep),a(z,Tp),a(z,Ks),a(Ks,qp),a(z,xp),o(e,Dr,s),m(mt,e,s),o(e,Ir,s),o(e,Da,s),a(Da,Pp),o(e,Sr,s),m(ft,e,s),o(e,Or,s),o(e,Ia,s),a(Ia,Cp),o(e,Ur,s),m(gt,e,s),o(e,Nr,s),o(e,Sa,s),a(Sa,Ap),o(e,Wr,s),o(e,Oa,s),a(Oa,zp),o(e,Lr,s),m(yt,e,s),o(e,Fr,s),m(bt,e,s),o(e,Mr,s),o(e,Ua,s),a(Ua,Dp),o(e,Gr,s),m(wt,e,s),o(e,Yr,s),m(_t,e,s),o(e,Hr,s),o(e,D,s),a(D,Ip),a(D,Js),a(Js,Sp),a(D,Op),a(D,Zs),a(Zs,Up),a(D,Np),a(D,Qs),a(Qs,Wp),a(D,Lp),a(D,Xs),a(Xs,Fp),a(D,Mp),o(e,Br,s),m(vt,e,s),o(e,Rr,s),m($t,e,s),o(e,Vr,s),o(e,R,s),a(R,Gp),a(R,kt),a(kt,Yp),a(R,Hp),a(R,eo),a(eo,Bp),a(R,Rp),o(e,Kr,s),o(e,$e,s),a($e,Vp),a($e,to),a(to,Kp),a($e,Jp),o(e,Jr,s),m(jt,e,s),o(e,Zr,s),m(Et,e,s),o(e,Qr,s),o(e,Na,s),a(Na,Zp),o(e,Xr,s),m(Tt,e,s),o(e,en,s),m(qt,e,s),o(e,tn,s),o(e,Wa,s),a(Wa,Qp),o(e,an,s),m(xt,e,s),o(e,sn,s),m(Pt,e,s),o(e,on,s),o(e,V,s),a(V,Xp),a(V,ao),a(ao,eh),a(V,th),a(V,so),a(so,ah),a(V,sh),o(e,rn,s),m(Ct,e,s),o(e,nn,s),m(At,e,s),o(e,ln,s),o(e,K,s),a(K,oh),a(K,oo),a(oo,rh),a(K,nh),a(K,ro),a(ro,ih),a(K,lh),o(e,pn,s),o(e,La,s),a(La,ph),o(e,hn,s),m(ke,e,s),o(e,un,s),o(e,Fa,s),a(Fa,hh),o(e,cn,s),o(e,Ma,s),a(Ma,uh),o(e,dn,s),o(e,re,s),a(re,je),a(je,no),m(zt,no,null),a(re,ch),a(re,io),a(io,dh),o(e,mn,s),o(e,I,s),a(I,mh),a(I,lo),a(lo,fh),a(I,gh),a(I,po),a(po,yh),a(I,bh),a(I,ho),a(ho,wh),a(I,_h),a(I,uo),a(uo,vh),a(I,$h),o(e,fn,s),m(Dt,e,s),o(e,gn,s),o(e,Ga,s),a(Ga,kh),o(e,yn,s),m(It,e,s),o(e,bn,s),o(e,J,s),a(J,jh),a(J,co),a(co,Eh),a(J,Th),a(J,mo),a(mo,qh),a(J,xh),o(e,wn,s),m(St,e,s),o(e,_n,s),m(Ot,e,s),o(e,vn,s),o(e,W,s),a(W,Ph),a(W,fo),a(fo,Ch),a(W,Ah),a(W,go),a(go,zh),a(W,Dh),a(W,yo),a(yo,Ih),a(W,Sh),o(e,$n,s),o(e,L,s),a(L,Oh),a(L,bo),a(bo,Uh),a(L,Nh),a(L,wo),a(wo,Wh),a(L,Lh),a(L,_o),a(_o,Fh),a(L,Mh),o(e,kn,s),m(Ut,e,s),o(e,jn,s),o(e,Ya,s),a(Ya,Gh),o(e,En,s),m(Nt,e,s),o(e,Tn,s),o(e,Ha,s),a(Ha,Yh),o(e,qn,s),o(e,Ba,s),a(Ba,Hh),o(e,xn,s),m(Wt,e,s),o(e,Pn,s),o(e,S,s),a(S,Bh),a(S,vo),a(vo,Rh),a(S,Vh),a(S,$o),a($o,Kh),a(S,Jh),a(S,ko),a(ko,Zh),a(S,Qh),a(S,jo),a(jo,Xh),a(S,eu),o(e,Cn,s),m(Lt,e,s),o(e,An,s),o(e,Ra,s),a(Ra,tu),o(e,zn,s),o(e,Va,s),a(Va,au),o(e,Dn,s),o(e,ne,s),a(ne,Ee),a(Ee,Eo),m(Ft,Eo,null),a(ne,su),a(ne,To),a(To,ou),o(e,In,s),o(e,Ka,s),a(Ka,ru),o(e,Sn,s),m(Mt,e,s),o(e,On,s),o(e,Te,s),a(Te,nu),a(Te,qo),a(qo,iu),a(Te,lu),o(e,Un,s),o(e,Ja,s),a(Ja,pu),o(e,Nn,s),o(e,Za,s),a(Za,hu),o(e,Wn,s),o(e,qe,s),a(qe,uu),a(qe,xo),a(xo,cu),a(qe,du),o(e,Ln,s),m(Gt,e,s),o(e,Fn,s),m(Yt,e,s),o(e,Mn,s),o(e,xe,s),a(xe,mu),a(xe,Po),a(Po,fu),a(xe,gu),o(e,Gn,s),m(Ht,e,s),o(e,Yn,s),m(Bt,e,s),o(e,Hn,s),o(e,Qa,s),a(Qa,yu),o(e,Bn,s),m(Rt,e,s),o(e,Rn,s),o(e,Pe,s),a(Pe,bu),a(Pe,Co),a(Co,wu),a(Pe,_u),o(e,Vn,s),m(Vt,e,s),o(e,Kn,s),o(e,Xa,s),a(Xa,vu),o(e,Jn,s),m(Kt,e,s),o(e,Zn,s),o(e,es,s),a(es,$u),o(e,Qn,s),o(e,ie,s),a(ie,Ce),a(Ce,Ao),m(Jt,Ao,null),a(ie,ku),a(ie,zo),a(zo,ju),o(e,Xn,s),o(e,ts,s),a(ts,Eu),o(e,ei,s),o(e,Ae,s),a(Ae,Tu),a(Ae,Do),a(Do,qu),a(Ae,xu),o(e,ti,s),m(Zt,e,s),o(e,ai,s),o(e,as,s),a(as,Pu),o(e,si,s),o(e,Z,s),a(Z,Cu),a(Z,Io),a(Io,Au),a(Z,zu),a(Z,So),a(So,Du),a(Z,Iu),o(e,oi,s),m(Qt,e,s),o(e,ri,s),o(e,ze,s),a(ze,Su),a(ze,Oo),a(Oo,Ou),a(ze,Uu),o(e,ni,s),o(e,le,s),a(le,De),a(De,Uo),m(Xt,Uo,null),a(le,Nu),a(le,No),a(No,Wu),o(e,ii,s),o(e,Ie,s),a(Ie,Lu),a(Ie,Wo),a(Wo,Fu),a(Ie,Mu),o(e,li,s),o(e,ss,s),a(ss,Gu),o(e,pi,s),m(Se,e,s),o(e,hi,s),o(e,pe,s),a(pe,Oe),a(Oe,Lo),m(ea,Lo,null),a(pe,Yu),a(pe,Fo),a(Fo,Hu),o(e,ui,s),o(e,Ue,s),a(Ue,Bu),a(Ue,Mo),a(Mo,Ru),a(Ue,Vu),o(e,ci,s),m(ta,e,s),o(e,di,s),m(aa,e,s),o(e,mi,s),o(e,os,s),a(os,Ku),o(e,fi,s),o(e,Ne,s),a(Ne,Ju),a(Ne,Go),a(Go,Zu),a(Ne,Qu),o(e,gi,s),m(sa,e,s),o(e,yi,s),m(oa,e,s),o(e,bi,s),m(We,e,s),o(e,wi,s),o(e,rs,s),a(rs,Xu),o(e,_i,s),m(ra,e,s),o(e,vi,s),o(e,ns,s),a(ns,ec),o(e,$i,s),m(na,e,s),o(e,ki,s),o(e,Q,s),a(Q,tc),a(Q,Yo),a(Yo,ac),a(Q,sc),a(Q,Ho),a(Ho,oc),a(Q,rc),o(e,ji,s),m(ia,e,s),o(e,Ei,s),m(la,e,s),o(e,Ti,s),o(e,F,s),a(F,nc),a(F,Bo),a(Bo,ic),a(F,lc),a(F,Ro),a(Ro,pc),a(F,hc),a(F,Vo),a(Vo,uc),a(F,cc),o(e,qi,s),m(pa,e,s),o(e,xi,s),m(ha,e,s),o(e,Pi,s),o(e,Le,s),a(Le,dc),a(Le,Ko),a(Ko,mc),a(Le,fc),o(e,Ci,s),m(ua,e,s),o(e,Ai,s),m(ca,e,s),o(e,zi,s),o(e,is,s),a(is,gc),o(e,Di,s),o(e,ls,s),a(ls,yc),o(e,Ii,s),m(da,e,s),o(e,Si,s),o(e,ps,s),a(ps,bc),o(e,Oi,s),m(Fe,e,s),o(e,Ui,s),o(e,he,s),a(he,Me),a(Me,Jo),m(ma,Jo,null),a(he,wc),a(he,Zo),a(Zo,_c),o(e,Ni,s),o(e,hs,s),a(hs,vc),o(e,Wi,s),o(e,ue,s),a(ue,Ge),a(Ge,Qo),m(fa,Qo,null),a(ue,$c),a(ue,Xo),a(Xo,kc),o(e,Li,s),o(e,us,s),a(us,jc),o(e,Fi,s),o(e,M,s),a(M,er),a(er,Ec),a(M,Tc),a(M,tr),a(tr,qc),a(M,xc),a(M,ar),a(ar,Pc),a(M,Cc),a(M,sr),a(sr,Ac),o(e,Mi,s),m(Ye,e,s),o(e,Gi,s),o(e,cs,s),a(cs,zc),o(e,Yi,s),o(e,ds,s),a(ds,Dc),o(e,Hi,s),o(e,ms,s),a(ms,Ic),o(e,Bi,s),o(e,ce,s),a(ce,He),a(He,or),m(ga,or,null),a(ce,Sc),a(ce,rr),a(rr,Oc),o(e,Ri,s),o(e,fs,s),a(fs,Uc),o(e,Vi,s),o(e,Be,s),a(Be,Nc),a(Be,nr),a(nr,Wc),a(Be,Lc),o(e,Ki,s),m(ya,e,s),o(e,Ji,s),m(Re,e,s),o(e,Zi,s),o(e,Ve,s),a(Ve,Fc),a(Ve,ir),a(ir,Mc),a(Ve,Gc),o(e,Qi,s),m(ba,e,s),o(e,Xi,s),m(wa,e,s),o(e,el,s),o(e,gs,s),a(gs,Yc),o(e,tl,s),o(e,ys,s),a(ys,Hc),o(e,al,s),m(Ke,e,s),o(e,sl,s),o(e,de,s),a(de,Je),a(Je,lr),m(_a,lr,null),a(de,Bc),a(de,pr),a(pr,Rc),o(e,ol,s),o(e,Ze,s),a(Ze,Vc),a(Ze,hr),a(hr,Kc),a(Ze,Jc),o(e,rl,s),o(e,bs,s),a(bs,Zc),o(e,nl,s),o(e,ws,s),a(ws,Qc),o(e,il,s),o(e,me,s),a(me,Qe),a(Qe,ur),m(va,ur,null),a(me,Xc),a(me,cr),a(cr,ed),o(e,ll,s),o(e,Xe,s),a(Xe,td),a(Xe,$a),a($a,ad),a(Xe,sd),o(e,pl,s),o(e,_s,s),a(_s,od),o(e,hl,s),o(e,G,s),a(G,vs),a(vs,ka),a(ka,rd),a(vs,nd),a(G,id),a(G,$s),a($s,ja),a(ja,ld),a($s,pd),a(G,hd),a(G,ks),a(ks,Ea),a(Ea,ud),a(ks,cd),a(G,dd),a(G,js),a(js,Ta),a(Ta,md),a(js,fd),o(e,ul,s),o(e,Es,s),a(Es,gd),cl=!0},p(e,[s]){const qa={};s&1&&(qa.fw=e[0]),v.$set(qa);const dr={};s&2&&(dr.$$scope={dirty:s,ctx:e}),ke.$set(dr);const mr={};s&2&&(mr.$$scope={dirty:s,ctx:e}),Se.$set(mr);const fr={};s&2&&(fr.$$scope={dirty:s,ctx:e}),We.$set(fr);const fe={};s&2&&(fe.$$scope={dirty:s,ctx:e}),Fe.$set(fe);const gr={};s&2&&(gr.$$scope={dirty:s,ctx:e}),Ye.$set(gr);const yr={};s&2&&(yr.$$scope={dirty:s,ctx:e}),Re.$set(yr);const xa={};s&2&&(xa.$$scope={dirty:s,ctx:e}),Ke.$set(xa)},i(e){cl||(f(v.$$.fragment,e),f(q.$$.fragment,e),f(P.$$.fragment,e),f(nt.$$.fragment,e),f(it.$$.fragment,e),f(pt.$$.fragment,e),f(ht.$$.fragment,e),f(ut.$$.fragment,e),f(ct.$$.fragment,e),f(dt.$$.fragment,e),f(mt.$$.fragment,e),f(ft.$$.fragment,e),f(gt.$$.fragment,e),f(yt.$$.fragment,e),f(bt.$$.fragment,e),f(wt.$$.fragment,e),f(_t.$$.fragment,e),f(vt.$$.fragment,e),f($t.$$.fragment,e),f(jt.$$.fragment,e),f(Et.$$.fragment,e),f(Tt.$$.fragment,e),f(qt.$$.fragment,e),f(xt.$$.fragment,e),f(Pt.$$.fragment,e),f(Ct.$$.fragment,e),f(At.$$.fragment,e),f(ke.$$.fragment,e),f(zt.$$.fragment,e),f(Dt.$$.fragment,e),f(It.$$.fragment,e),f(St.$$.fragment,e),f(Ot.$$.fragment,e),f(Ut.$$.fragment,e),f(Nt.$$.fragment,e),f(Wt.$$.fragment,e),f(Lt.$$.fragment,e),f(Ft.$$.fragment,e),f(Mt.$$.fragment,e),f(Gt.$$.fragment,e),f(Yt.$$.fragment,e),f(Ht.$$.fragment,e),f(Bt.$$.fragment,e),f(Rt.$$.fragment,e),f(Vt.$$.fragment,e),f(Kt.$$.fragment,e),f(Jt.$$.fragment,e),f(Zt.$$.fragment,e),f(Qt.$$.fragment,e),f(Xt.$$.fragment,e),f(Se.$$.fragment,e),f(ea.$$.fragment,e),f(ta.$$.fragment,e),f(aa.$$.fragment,e),f(sa.$$.fragment,e),f(oa.$$.fragment,e),f(We.$$.fragment,e),f(ra.$$.fragment,e),f(na.$$.fragment,e),f(ia.$$.fragment,e),f(la.$$.fragment,e),f(pa.$$.fragment,e),f(ha.$$.fragment,e),f(ua.$$.fragment,e),f(ca.$$.fragment,e),f(da.$$.fragment,e),f(Fe.$$.fragment,e),f(ma.$$.fragment,e),f(fa.$$.fragment,e),f(Ye.$$.fragment,e),f(ga.$$.fragment,e),f(ya.$$.fragment,e),f(Re.$$.fragment,e),f(ba.$$.fragment,e),f(wa.$$.fragment,e),f(Ke.$$.fragment,e),f(_a.$$.fragment,e),f(va.$$.fragment,e),cl=!0)},o(e){g(v.$$.fragment,e),g(q.$$.fragment,e),g(P.$$.fragment,e),g(nt.$$.fragment,e),g(it.$$.fragment,e),g(pt.$$.fragment,e),g(ht.$$.fragment,e),g(ut.$$.fragment,e),g(ct.$$.fragment,e),g(dt.$$.fragment,e),g(mt.$$.fragment,e),g(ft.$$.fragment,e),g(gt.$$.fragment,e),g(yt.$$.fragment,e),g(bt.$$.fragment,e),g(wt.$$.fragment,e),g(_t.$$.fragment,e),g(vt.$$.fragment,e),g($t.$$.fragment,e),g(jt.$$.fragment,e),g(Et.$$.fragment,e),g(Tt.$$.fragment,e),g(qt.$$.fragment,e),g(xt.$$.fragment,e),g(Pt.$$.fragment,e),g(Ct.$$.fragment,e),g(At.$$.fragment,e),g(ke.$$.fragment,e),g(zt.$$.fragment,e),g(Dt.$$.fragment,e),g(It.$$.fragment,e),g(St.$$.fragment,e),g(Ot.$$.fragment,e),g(Ut.$$.fragment,e),g(Nt.$$.fragment,e),g(Wt.$$.fragment,e),g(Lt.$$.fragment,e),g(Ft.$$.fragment,e),g(Mt.$$.fragment,e),g(Gt.$$.fragment,e),g(Yt.$$.fragment,e),g(Ht.$$.fragment,e),g(Bt.$$.fragment,e),g(Rt.$$.fragment,e),g(Vt.$$.fragment,e),g(Kt.$$.fragment,e),g(Jt.$$.fragment,e),g(Zt.$$.fragment,e),g(Qt.$$.fragment,e),g(Xt.$$.fragment,e),g(Se.$$.fragment,e),g(ea.$$.fragment,e),g(ta.$$.fragment,e),g(aa.$$.fragment,e),g(sa.$$.fragment,e),g(oa.$$.fragment,e),g(We.$$.fragment,e),g(ra.$$.fragment,e),g(na.$$.fragment,e),g(ia.$$.fragment,e),g(la.$$.fragment,e),g(pa.$$.fragment,e),g(ha.$$.fragment,e),g(ua.$$.fragment,e),g(ca.$$.fragment,e),g(da.$$.fragment,e),g(Fe.$$.fragment,e),g(ma.$$.fragment,e),g(fa.$$.fragment,e),g(Ye.$$.fragment,e),g(ga.$$.fragment,e),g(ya.$$.fragment,e),g(Re.$$.fragment,e),g(ba.$$.fragment,e),g(wa.$$.fragment,e),g(Ke.$$.fragment,e),g(_a.$$.fragment,e),g(va.$$.fragment,e),cl=!1},d(e){t(b),e&&t(k),y(v,e),e&&t($),e&&t(T),y(q),e&&t(O),y(P,e),e&&t(rt),e&&t(U),e&&t(br),e&&t(se),y(nt),e&&t(wr),y(it,e),e&&t(_r),e&&t(H),e&&t(vr),e&&t(ye),e&&t($r),e&&t(be),e&&t(kr),y(pt,e),e&&t(jr),e&&t(za),e&&t(Er),y(ht,e),e&&t(Tr),e&&t(oe),y(ut),e&&t(qr),e&&t(_e),e&&t(xr),e&&t(ve),e&&t(Pr),y(ct,e),e&&t(Cr),y(dt,e),e&&t(Ar),e&&t(B),e&&t(zr),e&&t(z),e&&t(Dr),y(mt,e),e&&t(Ir),e&&t(Da),e&&t(Sr),y(ft,e),e&&t(Or),e&&t(Ia),e&&t(Ur),y(gt,e),e&&t(Nr),e&&t(Sa),e&&t(Wr),e&&t(Oa),e&&t(Lr),y(yt,e),e&&t(Fr),y(bt,e),e&&t(Mr),e&&t(Ua),e&&t(Gr),y(wt,e),e&&t(Yr),y(_t,e),e&&t(Hr),e&&t(D),e&&t(Br),y(vt,e),e&&t(Rr),y($t,e),e&&t(Vr),e&&t(R),e&&t(Kr),e&&t($e),e&&t(Jr),y(jt,e),e&&t(Zr),y(Et,e),e&&t(Qr),e&&t(Na),e&&t(Xr),y(Tt,e),e&&t(en),y(qt,e),e&&t(tn),e&&t(Wa),e&&t(an),y(xt,e),e&&t(sn),y(Pt,e),e&&t(on),e&&t(V),e&&t(rn),y(Ct,e),e&&t(nn),y(At,e),e&&t(ln),e&&t(K),e&&t(pn),e&&t(La),e&&t(hn),y(ke,e),e&&t(un),e&&t(Fa),e&&t(cn),e&&t(Ma),e&&t(dn),e&&t(re),y(zt),e&&t(mn),e&&t(I),e&&t(fn),y(Dt,e),e&&t(gn),e&&t(Ga),e&&t(yn),y(It,e),e&&t(bn),e&&t(J),e&&t(wn),y(St,e),e&&t(_n),y(Ot,e),e&&t(vn),e&&t(W),e&&t($n),e&&t(L),e&&t(kn),y(Ut,e),e&&t(jn),e&&t(Ya),e&&t(En),y(Nt,e),e&&t(Tn),e&&t(Ha),e&&t(qn),e&&t(Ba),e&&t(xn),y(Wt,e),e&&t(Pn),e&&t(S),e&&t(Cn),y(Lt,e),e&&t(An),e&&t(Ra),e&&t(zn),e&&t(Va),e&&t(Dn),e&&t(ne),y(Ft),e&&t(In),e&&t(Ka),e&&t(Sn),y(Mt,e),e&&t(On),e&&t(Te),e&&t(Un),e&&t(Ja),e&&t(Nn),e&&t(Za),e&&t(Wn),e&&t(qe),e&&t(Ln),y(Gt,e),e&&t(Fn),y(Yt,e),e&&t(Mn),e&&t(xe),e&&t(Gn),y(Ht,e),e&&t(Yn),y(Bt,e),e&&t(Hn),e&&t(Qa),e&&t(Bn),y(Rt,e),e&&t(Rn),e&&t(Pe),e&&t(Vn),y(Vt,e),e&&t(Kn),e&&t(Xa),e&&t(Jn),y(Kt,e),e&&t(Zn),e&&t(es),e&&t(Qn),e&&t(ie),y(Jt),e&&t(Xn),e&&t(ts),e&&t(ei),e&&t(Ae),e&&t(ti),y(Zt,e),e&&t(ai),e&&t(as),e&&t(si),e&&t(Z),e&&t(oi),y(Qt,e),e&&t(ri),e&&t(ze),e&&t(ni),e&&t(le),y(Xt),e&&t(ii),e&&t(Ie),e&&t(li),e&&t(ss),e&&t(pi),y(Se,e),e&&t(hi),e&&t(pe),y(ea),e&&t(ui),e&&t(Ue),e&&t(ci),y(ta,e),e&&t(di),y(aa,e),e&&t(mi),e&&t(os),e&&t(fi),e&&t(Ne),e&&t(gi),y(sa,e),e&&t(yi),y(oa,e),e&&t(bi),y(We,e),e&&t(wi),e&&t(rs),e&&t(_i),y(ra,e),e&&t(vi),e&&t(ns),e&&t($i),y(na,e),e&&t(ki),e&&t(Q),e&&t(ji),y(ia,e),e&&t(Ei),y(la,e),e&&t(Ti),e&&t(F),e&&t(qi),y(pa,e),e&&t(xi),y(ha,e),e&&t(Pi),e&&t(Le),e&&t(Ci),y(ua,e),e&&t(Ai),y(ca,e),e&&t(zi),e&&t(is),e&&t(Di),e&&t(ls),e&&t(Ii),y(da,e),e&&t(Si),e&&t(ps),e&&t(Oi),y(Fe,e),e&&t(Ui),e&&t(he),y(ma),e&&t(Ni),e&&t(hs),e&&t(Wi),e&&t(ue),y(fa),e&&t(Li),e&&t(us),e&&t(Fi),e&&t(M),e&&t(Mi),y(Ye,e),e&&t(Gi),e&&t(cs),e&&t(Yi),e&&t(ds),e&&t(Hi),e&&t(ms),e&&t(Bi),e&&t(ce),y(ga),e&&t(Ri),e&&t(fs),e&&t(Vi),e&&t(Be),e&&t(Ki),y(ya,e),e&&t(Ji),y(Re,e),e&&t(Zi),e&&t(Ve),e&&t(Qi),y(ba,e),e&&t(Xi),y(wa,e),e&&t(el),e&&t(gs),e&&t(tl),e&&t(ys),e&&t(al),y(Ke,e),e&&t(sl),e&&t(de),y(_a),e&&t(ol),e&&t(Ze),e&&t(rl),e&&t(bs),e&&t(nl),e&&t(ws),e&&t(il),e&&t(me),y(va),e&&t(ll),e&&t(Xe),e&&t(pl),e&&t(_s),e&&t(hl),e&&t(G),e&&t(ul),e&&t(Es)}}}const jg={local:"debugging-the-training-pipeline",sections:[{local:"debugging-the-training-pipeline",sections:[{local:"check-your-data",title:"Check your data"},{local:"from-datasets-to-dataloaders",title:"From datasets to dataloaders"},{local:"going-through-the-model",title:"Going through the model"},{local:"performing-one-optimization-step",title:"Performing one optimization step"},{local:"dealing-with-cuda-outofmemory-errors",title:"Dealing with CUDA out-of-memory errors"},{local:"evaluating-the-model",title:"Evaluating the model"}],title:"Debugging the training pipeline"},{local:"debugging-silent-errors-during-training",sections:[{local:"check-your-data-again",title:"Check your data (again!)"},{local:"overfit-your-model-on-one-batch",title:"Overfit your model on one batch"},{local:"dont-tune-anything-until-you-have-a-first-baseline",title:"Don't tune anything until you have a first baseline"},{local:"ask-for-help",title:"Ask for help"}],title:"Debugging silent errors during training"}],title:"Debugging the training pipeline"};function Eg(C,b,k){let v="pt";return cg(()=>{const $=new URLSearchParams(window.location.search);k(0,v=$.get("fw")||"pt")}),[v]}class Dg extends lg{constructor(b){super();pg(this,b,Eg,kg,hg,{})}}export{Dg as default,jg as metadata};
