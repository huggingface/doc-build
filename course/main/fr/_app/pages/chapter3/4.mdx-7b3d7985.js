import{S as dl,i as ml,s as fl,e as o,k as p,w as d,t as r,M as hl,c as l,d as t,m as c,a as i,x as m,h as n,b,F as s,g as u,y as f,q as h,o as _,B as v,v as _l}from"../../chunks/vendor-1e8b365d.js";import{T as pl}from"../../chunks/Tip-62b14c6e.js";import{Y as cl}from"../../chunks/Youtube-c2a8cc39.js";import{I as it}from"../../chunks/IconCopyLink-483c28ba.js";import{C as q}from"../../chunks/CodeBlock-e5764662.js";import{D as vl}from"../../chunks/DocNotebookDropdown-37d928d3.js";function bl(Je){let $,j,k,x,G,A,he,I;return{c(){$=o("p"),j=r("\u270F\uFE0F "),k=o("strong"),x=r("Essayez"),G=r(" Modifiez la boucle d\u2019entra\xEEnement pr\xE9c\xE9dente pour "),A=o("em"),he=r("finetuner"),I=r(" votre mod\xE8le sur le jeu de donn\xE9es SST-2.")},l(V){$=l(V,"P",{});var P=i($);j=n(P,"\u270F\uFE0F "),k=l(P,"STRONG",{});var D=i(k);x=n(D,"Essayez"),D.forEach(t),G=n(P," Modifiez la boucle d\u2019entra\xEEnement pr\xE9c\xE9dente pour "),A=l(P,"EM",{});var _e=i(A);he=n(_e,"finetuner"),_e.forEach(t),I=n(P," votre mod\xE8le sur le jeu de donn\xE9es SST-2."),P.forEach(t)},m(V,P){u(V,$,P),s($,j),s($,k),s(k,x),s($,G),s($,A),s(A,he),s($,I)},d(V){V&&t($)}}}function $l(Je){let $;return{c(){$=r('\u26A0\uFE0F Afin de b\xE9n\xE9ficier de la rapidit\xE9 offerte par les TPUs du Cloud, nous vous recommandons de rembourrer vos \xE9chantillons \xE0 une longueur fixe avec les arguments `padding="max_length"` et `max_length` du *tokenizer*.')},l(j){$=n(j,'\u26A0\uFE0F Afin de b\xE9n\xE9ficier de la rapidit\xE9 offerte par les TPUs du Cloud, nous vous recommandons de rembourrer vos \xE9chantillons \xE0 une longueur fixe avec les arguments `padding="max_length"` et `max_length` du *tokenizer*.')},m(j,k){u(j,$,k)},d(j){j&&t($)}}}function ql(Je){let $,j,k,x,G,A,he,I,V,P,D,_e,ve,ut,Q,ya,ps,Aa,Pa,pt,be,ct,H,K,cs,$e,xa,ds,Ca,dt,C,Sa,ms,Da,Ma,fs,Ta,La,hs,Oa,Na,mt,M,R,Ua,_s,Wa,Fa,vs,Ga,Ia,Va,S,Ha,bs,Ra,Ba,$s,Ja,Ya,qs,Qa,Ka,Xa,gs,Za,ft,X,er,ks,sr,tr,ht,qe,_t,Ye,ar,vt,ge,bt,Z,rr,js,nr,or,$t,ke,qt,Qe,lr,gt,je,kt,Ee,jt,T,ir,Es,ur,pr,ws,cr,dr,Et,Ke,mr,wt,we,zt,Xe,fr,yt,ze,At,ye,Pt,L,hr,zs,_r,vr,ys,br,$r,xt,E,qr,As,gr,kr,Ps,jr,Er,xs,wr,zr,Ae,yr,Ar,Ct,Pe,St,ee,Pr,Cs,xr,Cr,Dt,xe,Mt,Ce,Tt,B,se,Ss,Se,Sr,Ds,Dr,Lt,te,Mr,Ms,Tr,Lr,Ot,De,Nt,Me,Ut,ae,Or,Ts,Nr,Ur,Wt,Te,Ft,Ze,Wr,Gt,J,re,Ls,Le,Fr,Os,Gr,It,w,Ir,Ns,Vr,Hr,Us,Rr,Br,Ws,Jr,Yr,Fs,Qr,Kr,Vt,Oe,Ht,Ne,Rt,es,Xr,Bt,ne,Jt,Y,oe,Gs,Ue,Zr,Is,en,Yt,We,Qt,O,sn,le,tn,Vs,an,rn,Hs,nn,on,Kt,Fe,Xt,ss,ln,Zt,Ge,ea,z,un,Rs,pn,cn,Bs,dn,mn,Js,fn,hn,Ys,_n,vn,sa,g,bn,Qs,$n,qn,Ks,gn,kn,Xs,jn,En,Zs,wn,zn,et,yn,An,st,Pn,xn,ta,ie,aa,ue,Cn,tt,Sn,Dn,ra,Ie,na,pe,Mn,at,Tn,Ln,oa,Ve,la,ts,On,ia,He,ua,as,Nn,pa,N,Un,rt,Wn,Fn,nt,Gn,In,ca,Re,da,ce,Vn,de,Hn,ot,Rn,Bn,ma;return A=new it({}),D=new vl({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter3/section4.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter3/section4.ipynb"}]}}),ve=new cl({props:{id:"Dh9CL8fyG80"}}),be=new q({props:{code:`from datasets import load_dataset
from transformers import AutoTokenizer, DataCollatorWithPadding

raw_datasets = load_dataset("glue", "mrpc")
checkpoint = "bert-base-uncased"
tokenizer = AutoTokenizer.from_pretrained(checkpoint)


def tokenize_function(example):
    return tokenizer(example["sentence1"], example["sentence2"], truncation=True)


tokenized_datasets = raw_datasets.map(tokenize_function, batched=True)
data_collator = DataCollatorWithPadding(tokenizer=tokenizer)`,highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, DataCollatorWithPadding

raw_datasets = load_dataset(<span class="hljs-string">&quot;glue&quot;</span>, <span class="hljs-string">&quot;mrpc&quot;</span>)
checkpoint = <span class="hljs-string">&quot;bert-base-uncased&quot;</span>
tokenizer = AutoTokenizer.from_pretrained(checkpoint)


<span class="hljs-keyword">def</span> <span class="hljs-title function_">tokenize_function</span>(<span class="hljs-params">example</span>):
    <span class="hljs-keyword">return</span> tokenizer(example[<span class="hljs-string">&quot;sentence1&quot;</span>], example[<span class="hljs-string">&quot;sentence2&quot;</span>], truncation=<span class="hljs-literal">True</span>)


tokenized_datasets = raw_datasets.<span class="hljs-built_in">map</span>(tokenize_function, batched=<span class="hljs-literal">True</span>)
data_collator = DataCollatorWithPadding(tokenizer=tokenizer)`}}),$e=new it({}),qe=new q({props:{code:`tokenized_datasets = tokenized_datasets.remove_columns(["sentence1", "sentence2", "idx"])
tokenized_datasets = tokenized_datasets.rename_column("label", "labels")
tokenized_datasets.set_format("torch")
tokenized_datasets["train"].column_names`,highlighted:`tokenized_datasets = tokenized_datasets.remove_columns([<span class="hljs-string">&quot;sentence1&quot;</span>, <span class="hljs-string">&quot;sentence2&quot;</span>, <span class="hljs-string">&quot;idx&quot;</span>])
tokenized_datasets = tokenized_datasets.rename_column(<span class="hljs-string">&quot;label&quot;</span>, <span class="hljs-string">&quot;labels&quot;</span>)
tokenized_datasets.set_format(<span class="hljs-string">&quot;torch&quot;</span>)
tokenized_datasets[<span class="hljs-string">&quot;train&quot;</span>].column_names`}}),ge=new q({props:{code:'["attention_mask", "input_ids", "labels", "token_type_ids"]',highlighted:'[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;labels&quot;</span>, <span class="hljs-string">&quot;token_type_ids&quot;</span>]'}}),ke=new q({props:{code:`from torch.utils.data import DataLoader

train_dataloader = DataLoader(
    tokenized_datasets["train"], shuffle=True, batch_size=8, collate_fn=data_collator
)
eval_dataloader = DataLoader(
    tokenized_datasets["validation"], batch_size=8, collate_fn=data_collator
)`,highlighted:`<span class="hljs-keyword">from</span> torch.utils.data <span class="hljs-keyword">import</span> DataLoader

train_dataloader = DataLoader(
    tokenized_datasets[<span class="hljs-string">&quot;train&quot;</span>], shuffle=<span class="hljs-literal">True</span>, batch_size=<span class="hljs-number">8</span>, collate_fn=data_collator
)
eval_dataloader = DataLoader(
    tokenized_datasets[<span class="hljs-string">&quot;validation&quot;</span>], batch_size=<span class="hljs-number">8</span>, collate_fn=data_collator
)`}}),je=new q({props:{code:`for batch in train_dataloader:
    break
{k: v.shape for k, v in batch.items()}`,highlighted:`<span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> train_dataloader:
    <span class="hljs-keyword">break</span>
{k: v.shape <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> batch.items()}`}}),Ee=new q({props:{code:`{'attention_mask': torch.Size([8, 65]),
 'input_ids': torch.Size([8, 65]),
 'labels': torch.Size([8]),
 'token_type_ids': torch.Size([8, 65])}`,highlighted:`{<span class="hljs-string">&#x27;attention_mask&#x27;</span>: torch.Size([<span class="hljs-number">8</span>, <span class="hljs-number">65</span>]),
 <span class="hljs-string">&#x27;input_ids&#x27;</span>: torch.Size([<span class="hljs-number">8</span>, <span class="hljs-number">65</span>]),
 <span class="hljs-string">&#x27;labels&#x27;</span>: torch.Size([<span class="hljs-number">8</span>]),
 <span class="hljs-string">&#x27;token_type_ids&#x27;</span>: torch.Size([<span class="hljs-number">8</span>, <span class="hljs-number">65</span>])}`}}),we=new q({props:{code:`from transformers import AutoModelForSequenceClassification

model = AutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=2)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForSequenceClassification

model = AutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=<span class="hljs-number">2</span>)`}}),ze=new q({props:{code:`outputs = model(**batch)
print(outputs.loss, outputs.logits.shape)`,highlighted:`outputs = model(**batch)
<span class="hljs-built_in">print</span>(outputs.loss, outputs.logits.shape)`}}),ye=new q({props:{code:"tensor(0.5441, grad_fn=<NllLossBackward>) torch.Size([8, 2])",highlighted:'tensor(<span class="hljs-number">0.5441</span>, grad_fn=&lt;NllLossBackward&gt;) torch.Size([<span class="hljs-number">8</span>, <span class="hljs-number">2</span>])'}}),Pe=new q({props:{code:`from transformers import AdamW

optimizer = AdamW(model.parameters(), lr=5e-5)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AdamW

optimizer = AdamW(model.parameters(), lr=<span class="hljs-number">5e-5</span>)`}}),xe=new q({props:{code:`from transformers import get_scheduler

num_epochs = 3
num_training_steps = num_epochs * len(train_dataloader)
lr_scheduler = get_scheduler(
    "linear",
    optimizer=optimizer,
    num_warmup_steps=0,
    num_training_steps=num_training_steps,
)
print(num_training_steps)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> get_scheduler

num_epochs = <span class="hljs-number">3</span>
num_training_steps = num_epochs * <span class="hljs-built_in">len</span>(train_dataloader)
lr_scheduler = get_scheduler(
    <span class="hljs-string">&quot;linear&quot;</span>,
    optimizer=optimizer,
    num_warmup_steps=<span class="hljs-number">0</span>,
    num_training_steps=num_training_steps,
)
<span class="hljs-built_in">print</span>(num_training_steps)`}}),Ce=new q({props:{code:"1377",highlighted:'<span class="hljs-number">1377</span>'}}),Se=new it({}),De=new q({props:{code:`import torch

device = torch.device("cuda") if torch.cuda.is_available() else torch.device("cpu")
model.to(device)
device`,highlighted:`<span class="hljs-keyword">import</span> torch

device = torch.device(<span class="hljs-string">&quot;cuda&quot;</span>) <span class="hljs-keyword">if</span> torch.cuda.is_available() <span class="hljs-keyword">else</span> torch.device(<span class="hljs-string">&quot;cpu&quot;</span>)
model.to(device)
device`}}),Me=new q({props:{code:"device(type='cuda')",highlighted:'device(<span class="hljs-built_in">type</span>=<span class="hljs-string">&#x27;cuda&#x27;</span>)'}}),Te=new q({props:{code:`from tqdm.auto import tqdm

progress_bar = tqdm(range(num_training_steps))

model.train()
for epoch in range(num_epochs):
    for batch in train_dataloader:
        batch = {k: v.to(device) for k, v in batch.items()}
        outputs = model(**batch)
        loss = outputs.loss
        loss.backward()

        optimizer.step()
        lr_scheduler.step()
        optimizer.zero_grad()
        progress_bar.update(1)`,highlighted:`<span class="hljs-keyword">from</span> tqdm.auto <span class="hljs-keyword">import</span> tqdm

progress_bar = tqdm(<span class="hljs-built_in">range</span>(num_training_steps))

model.train()
<span class="hljs-keyword">for</span> epoch <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(num_epochs):
    <span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> train_dataloader:
        batch = {k: v.to(device) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> batch.items()}
        outputs = model(**batch)
        loss = outputs.loss
        loss.backward()

        optimizer.step()
        lr_scheduler.step()
        optimizer.zero_grad()
        progress_bar.update(<span class="hljs-number">1</span>)`}}),Le=new it({}),Oe=new q({props:{code:`from datasets import load_metric

metric = load_metric("glue", "mrpc")
model.eval()
for batch in eval_dataloader:
    batch = {k: v.to(device) for k, v in batch.items()}
    with torch.no_grad():
        outputs = model(**batch)

    logits = outputs.logits
    predictions = torch.argmax(logits, dim=-1)
    metric.add_batch(predictions=predictions, references=batch["labels"])

metric.compute()`,highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_metric

metric = load_metric(<span class="hljs-string">&quot;glue&quot;</span>, <span class="hljs-string">&quot;mrpc&quot;</span>)
model.<span class="hljs-built_in">eval</span>()
<span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> eval_dataloader:
    batch = {k: v.to(device) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> batch.items()}
    <span class="hljs-keyword">with</span> torch.no_grad():
        outputs = model(**batch)

    logits = outputs.logits
    predictions = torch.argmax(logits, dim=-<span class="hljs-number">1</span>)
    metric.add_batch(predictions=predictions, references=batch[<span class="hljs-string">&quot;labels&quot;</span>])

metric.compute()`}}),Ne=new q({props:{code:"{'accuracy': 0.8431372549019608, 'f1': 0.8907849829351535}",highlighted:'{<span class="hljs-string">&#x27;accuracy&#x27;</span>: <span class="hljs-number">0.8431372549019608</span>, <span class="hljs-string">&#x27;f1&#x27;</span>: <span class="hljs-number">0.8907849829351535</span>}'}}),ne=new pl({props:{$$slots:{default:[bl]},$$scope:{ctx:Je}}}),Ue=new it({}),We=new cl({props:{id:"s7dy8QRgjJ0"}}),Fe=new q({props:{code:`from transformers import AdamW, AutoModelForSequenceClassification, get_scheduler

model = AutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=2)
optimizer = AdamW(model.parameters(), lr=3e-5)

device = torch.device("cuda") if torch.cuda.is_available() else torch.device("cpu")
model.to(device)

num_epochs = 3
num_training_steps = num_epochs * len(train_dataloader)
lr_scheduler = get_scheduler(
    "linear",
    optimizer=optimizer,
    num_warmup_steps=0,
    num_training_steps=num_training_steps,
)

progress_bar = tqdm(range(num_training_steps))

model.train()
for epoch in range(num_epochs):
    for batch in train_dataloader:
        batch = {k: v.to(device) for k, v in batch.items()}
        outputs = model(**batch)
        loss = outputs.loss
        loss.backward()

        optimizer.step()
        lr_scheduler.step()
        optimizer.zero_grad()
        progress_bar.update(1)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AdamW, AutoModelForSequenceClassification, get_scheduler

model = AutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=<span class="hljs-number">2</span>)
optimizer = AdamW(model.parameters(), lr=<span class="hljs-number">3e-5</span>)

device = torch.device(<span class="hljs-string">&quot;cuda&quot;</span>) <span class="hljs-keyword">if</span> torch.cuda.is_available() <span class="hljs-keyword">else</span> torch.device(<span class="hljs-string">&quot;cpu&quot;</span>)
model.to(device)

num_epochs = <span class="hljs-number">3</span>
num_training_steps = num_epochs * <span class="hljs-built_in">len</span>(train_dataloader)
lr_scheduler = get_scheduler(
    <span class="hljs-string">&quot;linear&quot;</span>,
    optimizer=optimizer,
    num_warmup_steps=<span class="hljs-number">0</span>,
    num_training_steps=num_training_steps,
)

progress_bar = tqdm(<span class="hljs-built_in">range</span>(num_training_steps))

model.train()
<span class="hljs-keyword">for</span> epoch <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(num_epochs):
    <span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> train_dataloader:
        batch = {k: v.to(device) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> batch.items()}
        outputs = model(**batch)
        loss = outputs.loss
        loss.backward()

        optimizer.step()
        lr_scheduler.step()
        optimizer.zero_grad()
        progress_bar.update(<span class="hljs-number">1</span>)`}}),Ge=new q({props:{code:`+ from accelerate import Accelerator
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
          progress_bar.update(1)`}}),ie=new pl({props:{$$slots:{default:[$l]},$$scope:{ctx:Je}}}),Ie=new q({props:{code:`from accelerate import Accelerator
from transformers import AdamW, AutoModelForSequenceClassification, get_scheduler

accelerator = Accelerator()

model = AutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=2)
optimizer = AdamW(model.parameters(), lr=3e-5)

train_dl, eval_dl, model, optimizer = accelerator.prepare(
    train_dataloader, eval_dataloader, model, optimizer
)

num_epochs = 3
num_training_steps = num_epochs * len(train_dl)
lr_scheduler = get_scheduler(
    "linear",
    optimizer=optimizer,
    num_warmup_steps=0,
    num_training_steps=num_training_steps,
)

progress_bar = tqdm(range(num_training_steps))

model.train()
for epoch in range(num_epochs):
    for batch in train_dl:
        outputs = model(**batch)
        loss = outputs.loss
        accelerator.backward(loss)

        optimizer.step()
        lr_scheduler.step()
        optimizer.zero_grad()
        progress_bar.update(1)`,highlighted:`<span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> Accelerator
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AdamW, AutoModelForSequenceClassification, get_scheduler

accelerator = Accelerator()

model = AutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=<span class="hljs-number">2</span>)
optimizer = AdamW(model.parameters(), lr=<span class="hljs-number">3e-5</span>)

train_dl, eval_dl, model, optimizer = accelerator.prepare(
    train_dataloader, eval_dataloader, model, optimizer
)

num_epochs = <span class="hljs-number">3</span>
num_training_steps = num_epochs * <span class="hljs-built_in">len</span>(train_dl)
lr_scheduler = get_scheduler(
    <span class="hljs-string">&quot;linear&quot;</span>,
    optimizer=optimizer,
    num_warmup_steps=<span class="hljs-number">0</span>,
    num_training_steps=num_training_steps,
)

progress_bar = tqdm(<span class="hljs-built_in">range</span>(num_training_steps))

model.train()
<span class="hljs-keyword">for</span> epoch <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(num_epochs):
    <span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> train_dl:
        outputs = model(**batch)
        loss = outputs.loss
        accelerator.backward(loss)

        optimizer.step()
        lr_scheduler.step()
        optimizer.zero_grad()
        progress_bar.update(<span class="hljs-number">1</span>)`}}),Ve=new q({props:{code:"accelerate config",highlighted:"accelerate config"}}),He=new q({props:{code:"accelerate launch train.py",highlighted:'accelerate <span class="hljs-built_in">launch</span> train.py'}}),Re=new q({props:{code:`from accelerate import notebook_launcher

notebook_launcher(training_function)`,highlighted:`<span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> notebook_launcher

notebook_launcher(training_function)`}}),{c(){$=o("meta"),j=p(),k=o("h1"),x=o("a"),G=o("span"),d(A.$$.fragment),he=p(),I=o("span"),V=r("Un entra\xEEnement complet"),P=p(),d(D.$$.fragment),_e=p(),d(ve.$$.fragment),ut=p(),Q=o("p"),ya=r("Maintenant nous allons voir comment obtenir les m\xEAmes r\xE9sultats que dans la derni\xE8re section sans utiliser la classe "),ps=o("code"),Aa=r("Trainer"),Pa=r(". Encore une fois, nous supposons que vous avez fait le traitement des donn\xE9es dans la section 2. Voici un court r\xE9sum\xE9 couvrant tout ce dont vous aurez besoin :"),pt=p(),d(be.$$.fragment),ct=p(),H=o("h3"),K=o("a"),cs=o("span"),d($e.$$.fragment),xa=p(),ds=o("span"),Ca=r("Pr\xE9parer l'entra\xEEnement"),dt=p(),C=o("p"),Sa=r("Avant d\u2019\xE9crire r\xE9ellement notre boucle d\u2019entra\xEEnement, nous devons d\xE9finir quelques objets. Les premiers sont les "),ms=o("em"),Da=r("dataloaders"),Ma=r(" que nous utiliserons pour it\xE9rer sur les batchs. Mais avant de pouvoir d\xE9finir ces chargeurs de donn\xE9es, nous devons appliquer un peu de post-traitement \xE0 nos "),fs=o("code"),Ta=r("tokenized_datasets"),La=r(", pour prendre soin de certaines choses que le "),hs=o("code"),Oa=r("Trainer"),Na=r(" fait pour nous automatiquement. Sp\xE9cifiquement, nous devons :"),mt=p(),M=o("ul"),R=o("li"),Ua=r("supprimer les colonnes correspondant aux valeurs que le mod\xE8le n\u2019attend pas (comme les colonnes "),_s=o("code"),Wa=r("sentence1"),Fa=r(" et "),vs=o("code"),Ga=r("sentence2"),Ia=r("),"),Va=p(),S=o("li"),Ha=r("renommer la colonne "),bs=o("code"),Ra=r("label"),Ba=r(" en "),$s=o("code"),Ja=r("labels"),Ya=r(" (parce que le mod\xE8le s\u2019attend \xE0 ce que l\u2019argument soit nomm\xE9 "),qs=o("code"),Qa=r("labels"),Ka=r("),"),Xa=p(),gs=o("li"),Za=r("d\xE9finir le format des jeux de donn\xE9es pour qu\u2019ils retournent des tenseurs PyTorch au lieu de listes."),ft=p(),X=o("p"),er=r("Notre "),ks=o("code"),sr=r("tokenized_datasets"),tr=r(" a une m\xE9thode pour chacune de ces \xE9tapes :"),ht=p(),d(qe.$$.fragment),_t=p(),Ye=o("p"),ar=r("Nous pouvons alors v\xE9rifier que le r\xE9sultat ne comporte que des colonnes que notre mod\xE8le acceptera :"),vt=p(),d(ge.$$.fragment),bt=p(),Z=o("p"),rr=r("Maintenant que cela est fait, nous pouvons facilement d\xE9finir nos "),js=o("em"),nr=r("dataloaders"),or=r(" :"),$t=p(),d(ke.$$.fragment),qt=p(),Qe=o("p"),lr=r("Pour v\xE9rifier rapidement qu\u2019il n\u2019y a pas d\u2019erreur dans le traitement des donn\xE9es, nous pouvons inspecter un batch comme celui-ci :"),gt=p(),d(je.$$.fragment),kt=p(),d(Ee.$$.fragment),jt=p(),T=o("p"),ir=r("Notez que les formes r\xE9elles seront probablement l\xE9g\xE8rement diff\xE9rentes pour vous puisque nous avons d\xE9fini "),Es=o("code"),ur=r("shuffle=True"),pr=r(" pour le chargeur de donn\xE9es d\u2019entra\xEEnement et que nous "),ws=o("em"),cr=r("paddons"),dr=r(" \xE0 la longueur maximale dans le lot."),Et=p(),Ke=o("p"),mr=r("Maintenant que nous en avons termin\xE9 avec le pr\xE9traitement des donn\xE9es (un objectif satisfaisant mais difficile \xE0 atteindre pour tout praticien d\u2019apprentissage automatique), passons au mod\xE8le. Nous l\u2019instancions exactement comme nous l\u2019avons fait dans la section pr\xE9c\xE9dente :"),wt=p(),d(we.$$.fragment),zt=p(),Xe=o("p"),fr=r("Pour s\u2019assurer que tout se passera bien pendant l\u2019entra\xEEnement, nous transmettons notre batch \xE0 ce mod\xE8le :"),yt=p(),d(ze.$$.fragment),At=p(),d(ye.$$.fragment),Pt=p(),L=o("p"),hr=r("Tous les mod\xE8les \u{1F917} "),zs=o("em"),_r=r("Transformers"),vr=r(" renvoient la perte lorsque les "),ys=o("code"),br=r("labels"),$r=r(" sont fournis. Nous obtenons \xE9galement les logits (deux pour chaque entr\xE9e de notre batch, donc un tenseur de taille 8 x 2)."),xt=p(),E=o("p"),qr=r("Nous sommes presque pr\xEAts \xE0 \xE9crire notre boucle d\u2019entra\xEEnement ! Il nous manque juste deux choses : un optimiseur et un planificateur de taux d\u2019apprentissage. Puisque nous essayons de reproduire \xE0 la main ce que fait la fonction "),As=o("code"),gr=r("Trainer"),kr=r(", utilisons les m\xEAmes param\xE8tres par d\xE9faut. L\u2019optimiseur utilis\xE9 par "),Ps=o("code"),jr=r("Trainer"),Er=r(" est "),xs=o("code"),wr=r("AdamW"),zr=r(", qui est le m\xEAme qu\u2019Adam, mais avec une torsion pour la r\xE9gularisation par d\xE9croissance de poids (voir "),Ae=o("a"),yr=r("\u201CDecoupled Weight Decay Regularization\u201D"),Ar=r(" par Ilya Loshchilov et Frank Hutter) :"),Ct=p(),d(Pe.$$.fragment),St=p(),ee=o("p"),Pr=r("Enfin, le planificateur du taux d\u2019apprentissage utilis\xE9 par d\xE9faut est juste une d\xE9croissance lin\xE9aire de la valeur maximale (5e-5) \xE0 0. Pour le d\xE9finir correctement, nous devons conna\xEEtre le nombre d\u2019\xE9tapes d\u2019entra\xEEnement que nous prendrons, qui est le nombre d\u2019\xE9poques que nous voulons ex\xE9cuter multipli\xE9 par le nombre de lots d\u2019entra\xEEnement (qui est la longueur de notre dataloader d\u2019entra\xEEnement). Le "),Cs=o("code"),xr=r("Trainer"),Cr=r(" utilise trois \xE9poques par d\xE9faut, nous allons donc suivre \xE7a :"),Dt=p(),d(xe.$$.fragment),Mt=p(),d(Ce.$$.fragment),Tt=p(),B=o("h3"),se=o("a"),Ss=o("span"),d(Se.$$.fragment),Sr=p(),Ds=o("span"),Dr=r("La boucle d'entra\xEEnement"),Lt=p(),te=o("p"),Mr=r("Une derni\xE8re chose : nous voulons utiliser le GPU si nous en avons un (sur un CPU, l\u2019entra\xEEnement peut prendre plusieurs heures au lieu de quelques minutes). Pour ce faire, nous d\xE9finissons un "),Ms=o("code"),Tr=r("device"),Lr=r(" sur lequel nous allons placer notre mod\xE8le et nos batchs :"),Ot=p(),d(De.$$.fragment),Nt=p(),d(Me.$$.fragment),Ut=p(),ae=o("p"),Or=r("Nous sommes maintenant pr\xEAts \xE0 entra\xEEner ! Pour avoir une id\xE9e du moment o\xF9 l\u2019entra\xEEnement sera termin\xE9, nous ajoutons une barre de progression sur le nombre d\u2019\xE9tapes d\u2019entra\xEEnement, en utilisant la biblioth\xE8que "),Ts=o("code"),Nr=r("tqdm"),Ur=r(" :"),Wt=p(),d(Te.$$.fragment),Ft=p(),Ze=o("p"),Wr=r("Vous pouvez voir que le c\u0153ur de la boucle d\u2019entra\xEEnement ressemble beaucoup \xE0 celui de l\u2019introduction. Nous n\u2019avons pas demand\xE9 de rapport, donc cette boucle d\u2019entra\xEEnement ne nous dira rien sur les r\xE9sultats du mod\xE8le. Pour cela, nous devons ajouter une boucle d\u2019\xE9valuation."),Gt=p(),J=o("h3"),re=o("a"),Ls=o("span"),d(Le.$$.fragment),Fr=p(),Os=o("span"),Gr=r("La boucle d'\xE9valuation"),It=p(),w=o("p"),Ir=r("Comme nous l\u2019avons fait pr\xE9c\xE9demment, nous allons utiliser une m\xE9trique fournie par la biblioth\xE8que \u{1F917} "),Ns=o("em"),Vr=r("Datasets"),Hr=r(". Nous avons d\xE9j\xE0 vu la m\xE9thode "),Us=o("code"),Rr=r("metric.compute()"),Br=r(", mais les m\xE9triques peuvent en fait accumuler des batchs pour nous au fur et \xE0 mesure que nous parcourons la boucle de pr\xE9diction avec la m\xE9thode "),Ws=o("code"),Jr=r("add_batch()"),Yr=r(". Une fois que nous avons accumul\xE9 tous les batchs, nous pouvons obtenir le r\xE9sultat final avec "),Fs=o("code"),Qr=r("metric.compute()"),Kr=r(". Voici comment impl\xE9menter tout cela dans une boucle d\u2019\xE9valuation :"),Vt=p(),d(Oe.$$.fragment),Ht=p(),d(Ne.$$.fragment),Rt=p(),es=o("p"),Xr=r("Une fois encore, vos r\xE9sultats seront l\xE9g\xE8rement diff\xE9rents en raison du caract\xE8re al\xE9atoire de l\u2019initialisation de la t\xEAte du mod\xE8le et du m\xE9lange des donn\xE9es, mais ils devraient se situer dans la m\xEAme fourchette."),Bt=p(),d(ne.$$.fragment),Jt=p(),Y=o("h3"),oe=o("a"),Gs=o("span"),d(Ue.$$.fragment),Zr=p(),Is=o("span"),en=r("Optimisez votre boucle d'entra\xEEnement avec \u{1F917} *Accelerate*"),Yt=p(),d(We.$$.fragment),Qt=p(),O=o("p"),sn=r("La boucle d\u2019entra\xEEnement que nous avons d\xE9finie pr\xE9c\xE9demment fonctionne bien sur un seul CPU ou GPU. Mais en utilisant la biblioth\xE8que "),le=o("a"),tn=r("\u{1F917} "),Vs=o("em"),an=r("Accelerate"),rn=r(", il suffit de quelques ajustements pour permettre un entra\xEEnement distribu\xE9 sur plusieurs GPUs ou TPUs. En partant de la cr\xE9ation des "),Hs=o("em"),nn=r("dataloaders"),on=r(" d\u2019entra\xEEnement et de validation, voici \xE0 quoi ressemble notre boucle d\u2019entra\xEEnement manuel :"),Kt=p(),d(Fe.$$.fragment),Xt=p(),ss=o("p"),ln=r("Et voici les changements :"),Zt=p(),d(Ge.$$.fragment),ea=p(),z=o("p"),un=r("La premi\xE8re ligne \xE0 ajouter est la ligne d\u2019importation. La deuxi\xE8me ligne instancie un objet "),Rs=o("code"),pn=r("Accelerator"),cn=r(" qui va regarder l\u2019environnement et initialiser la bonne configuration distribu\xE9e. \u{1F917} "),Bs=o("em"),dn=r("Accelerate"),mn=r(" g\xE8re le placement des p\xE9riph\xE9riques pour vous, donc vous pouvez enlever les lignes qui placent le mod\xE8le sur le p\xE9riph\xE9rique (ou, si vous pr\xE9f\xE9rez, les changer pour utiliser "),Js=o("code"),fn=r("accelerator.device"),hn=r(" au lieu de "),Ys=o("code"),_n=r("device"),vn=r(")."),sa=p(),g=o("p"),bn=r("Ensuite, le gros du travail est fait dans la ligne qui envoie les "),Qs=o("em"),$n=r("dataloaders"),qn=r(", le mod\xE8le, et l\u2019optimiseur \xE0 "),Ks=o("code"),gn=r("accelerator.prepare()"),kn=r(". Cela va envelopper ces objets dans le conteneur appropri\xE9 pour s\u2019assurer que votre entra\xEEnement distribu\xE9 fonctionne comme pr\xE9vu. Les changements restants \xE0 faire sont la suppression de la ligne qui met le batch sur le "),Xs=o("code"),jn=r("device"),En=r(" (encore une fois, si vous voulez le garder, vous pouvez juste le changer pour utiliser "),Zs=o("code"),wn=r("accelerator.device"),zn=r(") et le remplacement de "),et=o("code"),yn=r("loss.backward()"),An=r(" par "),st=o("code"),Pn=r("accelerator.backward(loss)"),xn=r("."),ta=p(),d(ie.$$.fragment),aa=p(),ue=o("p"),Cn=r("Si vous souhaitez faire un copier-coller pour jouer, voici \xE0 quoi ressemble la boucle d\u2019entra\xEEnement compl\xE8te avec \u{1F917} "),tt=o("em"),Sn=r("Accelerate"),Dn=r(" :"),ra=p(),d(Ie.$$.fragment),na=p(),pe=o("p"),Mn=r("En pla\xE7ant ceci dans un script "),at=o("code"),Tn=r("train.py"),Ln=r(", cela sera ex\xE9cutable sur n\u2019importe quel type d\u2019installation distribu\xE9e. Pour l\u2019essayer dans votre installation distribu\xE9e, ex\xE9cutez la commande :"),oa=p(),d(Ve.$$.fragment),la=p(),ts=o("p"),On=r("qui vous demandera de r\xE9pondre \xE0 quelques questions et enregistrera vos r\xE9ponses dans un fichier de configuration utilis\xE9 par cette commande :"),ia=p(),d(He.$$.fragment),ua=p(),as=o("p"),Nn=r("qui lancera l\u2019entra\xEEnement distribu\xE9."),pa=p(),N=o("p"),Un=r("Si vous voulez essayer ceci dans un "),rt=o("em"),Wn=r("notebook"),Fn=r(" (par exemple, pour le tester avec des TPUs sur Colab), collez simplement le code dans une "),nt=o("code"),Gn=r("training_function()"),In=r(" et lancez une derni\xE8re cellule avec :"),ca=p(),d(Re.$$.fragment),da=p(),ce=o("p"),Vn=r("Vous trouverez d\u2019autres exemples dans le d\xE9p\xF4t d\u2019"),de=o("a"),Hn=r("\u{1F917} "),ot=o("em"),Rn=r("Accelerate"),Bn=r("."),this.h()},l(e){const a=hl('[data-svelte="svelte-1phssyn"]',document.head);$=l(a,"META",{name:!0,content:!0}),a.forEach(t),j=c(e),k=l(e,"H1",{class:!0});var Be=i(k);x=l(Be,"A",{id:!0,class:!0,href:!0});var lt=i(x);G=l(lt,"SPAN",{});var Qn=i(G);m(A.$$.fragment,Qn),Qn.forEach(t),lt.forEach(t),he=c(Be),I=l(Be,"SPAN",{});var Kn=i(I);V=n(Kn,"Un entra\xEEnement complet"),Kn.forEach(t),Be.forEach(t),P=c(e),m(D.$$.fragment,e),_e=c(e),m(ve.$$.fragment,e),ut=c(e),Q=l(e,"P",{});var fa=i(Q);ya=n(fa,"Maintenant nous allons voir comment obtenir les m\xEAmes r\xE9sultats que dans la derni\xE8re section sans utiliser la classe "),ps=l(fa,"CODE",{});var Xn=i(ps);Aa=n(Xn,"Trainer"),Xn.forEach(t),Pa=n(fa,". Encore une fois, nous supposons que vous avez fait le traitement des donn\xE9es dans la section 2. Voici un court r\xE9sum\xE9 couvrant tout ce dont vous aurez besoin :"),fa.forEach(t),pt=c(e),m(be.$$.fragment,e),ct=c(e),H=l(e,"H3",{class:!0});var ha=i(H);K=l(ha,"A",{id:!0,class:!0,href:!0});var Zn=i(K);cs=l(Zn,"SPAN",{});var eo=i(cs);m($e.$$.fragment,eo),eo.forEach(t),Zn.forEach(t),xa=c(ha),ds=l(ha,"SPAN",{});var so=i(ds);Ca=n(so,"Pr\xE9parer l'entra\xEEnement"),so.forEach(t),ha.forEach(t),dt=c(e),C=l(e,"P",{});var me=i(C);Sa=n(me,"Avant d\u2019\xE9crire r\xE9ellement notre boucle d\u2019entra\xEEnement, nous devons d\xE9finir quelques objets. Les premiers sont les "),ms=l(me,"EM",{});var to=i(ms);Da=n(to,"dataloaders"),to.forEach(t),Ma=n(me," que nous utiliserons pour it\xE9rer sur les batchs. Mais avant de pouvoir d\xE9finir ces chargeurs de donn\xE9es, nous devons appliquer un peu de post-traitement \xE0 nos "),fs=l(me,"CODE",{});var ao=i(fs);Ta=n(ao,"tokenized_datasets"),ao.forEach(t),La=n(me,", pour prendre soin de certaines choses que le "),hs=l(me,"CODE",{});var ro=i(hs);Oa=n(ro,"Trainer"),ro.forEach(t),Na=n(me," fait pour nous automatiquement. Sp\xE9cifiquement, nous devons :"),me.forEach(t),mt=c(e),M=l(e,"UL",{});var rs=i(M);R=l(rs,"LI",{});var ns=i(R);Ua=n(ns,"supprimer les colonnes correspondant aux valeurs que le mod\xE8le n\u2019attend pas (comme les colonnes "),_s=l(ns,"CODE",{});var no=i(_s);Wa=n(no,"sentence1"),no.forEach(t),Fa=n(ns," et "),vs=l(ns,"CODE",{});var oo=i(vs);Ga=n(oo,"sentence2"),oo.forEach(t),Ia=n(ns,"),"),ns.forEach(t),Va=c(rs),S=l(rs,"LI",{});var fe=i(S);Ha=n(fe,"renommer la colonne "),bs=l(fe,"CODE",{});var lo=i(bs);Ra=n(lo,"label"),lo.forEach(t),Ba=n(fe," en "),$s=l(fe,"CODE",{});var io=i($s);Ja=n(io,"labels"),io.forEach(t),Ya=n(fe," (parce que le mod\xE8le s\u2019attend \xE0 ce que l\u2019argument soit nomm\xE9 "),qs=l(fe,"CODE",{});var uo=i(qs);Qa=n(uo,"labels"),uo.forEach(t),Ka=n(fe,"),"),fe.forEach(t),Xa=c(rs),gs=l(rs,"LI",{});var po=i(gs);Za=n(po,"d\xE9finir le format des jeux de donn\xE9es pour qu\u2019ils retournent des tenseurs PyTorch au lieu de listes."),po.forEach(t),rs.forEach(t),ft=c(e),X=l(e,"P",{});var _a=i(X);er=n(_a,"Notre "),ks=l(_a,"CODE",{});var co=i(ks);sr=n(co,"tokenized_datasets"),co.forEach(t),tr=n(_a," a une m\xE9thode pour chacune de ces \xE9tapes :"),_a.forEach(t),ht=c(e),m(qe.$$.fragment,e),_t=c(e),Ye=l(e,"P",{});var mo=i(Ye);ar=n(mo,"Nous pouvons alors v\xE9rifier que le r\xE9sultat ne comporte que des colonnes que notre mod\xE8le acceptera :"),mo.forEach(t),vt=c(e),m(ge.$$.fragment,e),bt=c(e),Z=l(e,"P",{});var va=i(Z);rr=n(va,"Maintenant que cela est fait, nous pouvons facilement d\xE9finir nos "),js=l(va,"EM",{});var fo=i(js);nr=n(fo,"dataloaders"),fo.forEach(t),or=n(va," :"),va.forEach(t),$t=c(e),m(ke.$$.fragment,e),qt=c(e),Qe=l(e,"P",{});var ho=i(Qe);lr=n(ho,"Pour v\xE9rifier rapidement qu\u2019il n\u2019y a pas d\u2019erreur dans le traitement des donn\xE9es, nous pouvons inspecter un batch comme celui-ci :"),ho.forEach(t),gt=c(e),m(je.$$.fragment,e),kt=c(e),m(Ee.$$.fragment,e),jt=c(e),T=l(e,"P",{});var os=i(T);ir=n(os,"Notez que les formes r\xE9elles seront probablement l\xE9g\xE8rement diff\xE9rentes pour vous puisque nous avons d\xE9fini "),Es=l(os,"CODE",{});var _o=i(Es);ur=n(_o,"shuffle=True"),_o.forEach(t),pr=n(os," pour le chargeur de donn\xE9es d\u2019entra\xEEnement et que nous "),ws=l(os,"EM",{});var vo=i(ws);cr=n(vo,"paddons"),vo.forEach(t),dr=n(os," \xE0 la longueur maximale dans le lot."),os.forEach(t),Et=c(e),Ke=l(e,"P",{});var bo=i(Ke);mr=n(bo,"Maintenant que nous en avons termin\xE9 avec le pr\xE9traitement des donn\xE9es (un objectif satisfaisant mais difficile \xE0 atteindre pour tout praticien d\u2019apprentissage automatique), passons au mod\xE8le. Nous l\u2019instancions exactement comme nous l\u2019avons fait dans la section pr\xE9c\xE9dente :"),bo.forEach(t),wt=c(e),m(we.$$.fragment,e),zt=c(e),Xe=l(e,"P",{});var $o=i(Xe);fr=n($o,"Pour s\u2019assurer que tout se passera bien pendant l\u2019entra\xEEnement, nous transmettons notre batch \xE0 ce mod\xE8le :"),$o.forEach(t),yt=c(e),m(ze.$$.fragment,e),At=c(e),m(ye.$$.fragment,e),Pt=c(e),L=l(e,"P",{});var ls=i(L);hr=n(ls,"Tous les mod\xE8les \u{1F917} "),zs=l(ls,"EM",{});var qo=i(zs);_r=n(qo,"Transformers"),qo.forEach(t),vr=n(ls," renvoient la perte lorsque les "),ys=l(ls,"CODE",{});var go=i(ys);br=n(go,"labels"),go.forEach(t),$r=n(ls," sont fournis. Nous obtenons \xE9galement les logits (deux pour chaque entr\xE9e de notre batch, donc un tenseur de taille 8 x 2)."),ls.forEach(t),xt=c(e),E=l(e,"P",{});var U=i(E);qr=n(U,"Nous sommes presque pr\xEAts \xE0 \xE9crire notre boucle d\u2019entra\xEEnement ! Il nous manque juste deux choses : un optimiseur et un planificateur de taux d\u2019apprentissage. Puisque nous essayons de reproduire \xE0 la main ce que fait la fonction "),As=l(U,"CODE",{});var ko=i(As);gr=n(ko,"Trainer"),ko.forEach(t),kr=n(U,", utilisons les m\xEAmes param\xE8tres par d\xE9faut. L\u2019optimiseur utilis\xE9 par "),Ps=l(U,"CODE",{});var jo=i(Ps);jr=n(jo,"Trainer"),jo.forEach(t),Er=n(U," est "),xs=l(U,"CODE",{});var Eo=i(xs);wr=n(Eo,"AdamW"),Eo.forEach(t),zr=n(U,", qui est le m\xEAme qu\u2019Adam, mais avec une torsion pour la r\xE9gularisation par d\xE9croissance de poids (voir "),Ae=l(U,"A",{href:!0,rel:!0});var wo=i(Ae);yr=n(wo,"\u201CDecoupled Weight Decay Regularization\u201D"),wo.forEach(t),Ar=n(U," par Ilya Loshchilov et Frank Hutter) :"),U.forEach(t),Ct=c(e),m(Pe.$$.fragment,e),St=c(e),ee=l(e,"P",{});var ba=i(ee);Pr=n(ba,"Enfin, le planificateur du taux d\u2019apprentissage utilis\xE9 par d\xE9faut est juste une d\xE9croissance lin\xE9aire de la valeur maximale (5e-5) \xE0 0. Pour le d\xE9finir correctement, nous devons conna\xEEtre le nombre d\u2019\xE9tapes d\u2019entra\xEEnement que nous prendrons, qui est le nombre d\u2019\xE9poques que nous voulons ex\xE9cuter multipli\xE9 par le nombre de lots d\u2019entra\xEEnement (qui est la longueur de notre dataloader d\u2019entra\xEEnement). Le "),Cs=l(ba,"CODE",{});var zo=i(Cs);xr=n(zo,"Trainer"),zo.forEach(t),Cr=n(ba," utilise trois \xE9poques par d\xE9faut, nous allons donc suivre \xE7a :"),ba.forEach(t),Dt=c(e),m(xe.$$.fragment,e),Mt=c(e),m(Ce.$$.fragment,e),Tt=c(e),B=l(e,"H3",{class:!0});var $a=i(B);se=l($a,"A",{id:!0,class:!0,href:!0});var yo=i(se);Ss=l(yo,"SPAN",{});var Ao=i(Ss);m(Se.$$.fragment,Ao),Ao.forEach(t),yo.forEach(t),Sr=c($a),Ds=l($a,"SPAN",{});var Po=i(Ds);Dr=n(Po,"La boucle d'entra\xEEnement"),Po.forEach(t),$a.forEach(t),Lt=c(e),te=l(e,"P",{});var qa=i(te);Mr=n(qa,"Une derni\xE8re chose : nous voulons utiliser le GPU si nous en avons un (sur un CPU, l\u2019entra\xEEnement peut prendre plusieurs heures au lieu de quelques minutes). Pour ce faire, nous d\xE9finissons un "),Ms=l(qa,"CODE",{});var xo=i(Ms);Tr=n(xo,"device"),xo.forEach(t),Lr=n(qa," sur lequel nous allons placer notre mod\xE8le et nos batchs :"),qa.forEach(t),Ot=c(e),m(De.$$.fragment,e),Nt=c(e),m(Me.$$.fragment,e),Ut=c(e),ae=l(e,"P",{});var ga=i(ae);Or=n(ga,"Nous sommes maintenant pr\xEAts \xE0 entra\xEEner ! Pour avoir une id\xE9e du moment o\xF9 l\u2019entra\xEEnement sera termin\xE9, nous ajoutons une barre de progression sur le nombre d\u2019\xE9tapes d\u2019entra\xEEnement, en utilisant la biblioth\xE8que "),Ts=l(ga,"CODE",{});var Co=i(Ts);Nr=n(Co,"tqdm"),Co.forEach(t),Ur=n(ga," :"),ga.forEach(t),Wt=c(e),m(Te.$$.fragment,e),Ft=c(e),Ze=l(e,"P",{});var So=i(Ze);Wr=n(So,"Vous pouvez voir que le c\u0153ur de la boucle d\u2019entra\xEEnement ressemble beaucoup \xE0 celui de l\u2019introduction. Nous n\u2019avons pas demand\xE9 de rapport, donc cette boucle d\u2019entra\xEEnement ne nous dira rien sur les r\xE9sultats du mod\xE8le. Pour cela, nous devons ajouter une boucle d\u2019\xE9valuation."),So.forEach(t),Gt=c(e),J=l(e,"H3",{class:!0});var ka=i(J);re=l(ka,"A",{id:!0,class:!0,href:!0});var Do=i(re);Ls=l(Do,"SPAN",{});var Mo=i(Ls);m(Le.$$.fragment,Mo),Mo.forEach(t),Do.forEach(t),Fr=c(ka),Os=l(ka,"SPAN",{});var To=i(Os);Gr=n(To,"La boucle d'\xE9valuation"),To.forEach(t),ka.forEach(t),It=c(e),w=l(e,"P",{});var W=i(w);Ir=n(W,"Comme nous l\u2019avons fait pr\xE9c\xE9demment, nous allons utiliser une m\xE9trique fournie par la biblioth\xE8que \u{1F917} "),Ns=l(W,"EM",{});var Lo=i(Ns);Vr=n(Lo,"Datasets"),Lo.forEach(t),Hr=n(W,". Nous avons d\xE9j\xE0 vu la m\xE9thode "),Us=l(W,"CODE",{});var Oo=i(Us);Rr=n(Oo,"metric.compute()"),Oo.forEach(t),Br=n(W,", mais les m\xE9triques peuvent en fait accumuler des batchs pour nous au fur et \xE0 mesure que nous parcourons la boucle de pr\xE9diction avec la m\xE9thode "),Ws=l(W,"CODE",{});var No=i(Ws);Jr=n(No,"add_batch()"),No.forEach(t),Yr=n(W,". Une fois que nous avons accumul\xE9 tous les batchs, nous pouvons obtenir le r\xE9sultat final avec "),Fs=l(W,"CODE",{});var Uo=i(Fs);Qr=n(Uo,"metric.compute()"),Uo.forEach(t),Kr=n(W,". Voici comment impl\xE9menter tout cela dans une boucle d\u2019\xE9valuation :"),W.forEach(t),Vt=c(e),m(Oe.$$.fragment,e),Ht=c(e),m(Ne.$$.fragment,e),Rt=c(e),es=l(e,"P",{});var Wo=i(es);Xr=n(Wo,"Une fois encore, vos r\xE9sultats seront l\xE9g\xE8rement diff\xE9rents en raison du caract\xE8re al\xE9atoire de l\u2019initialisation de la t\xEAte du mod\xE8le et du m\xE9lange des donn\xE9es, mais ils devraient se situer dans la m\xEAme fourchette."),Wo.forEach(t),Bt=c(e),m(ne.$$.fragment,e),Jt=c(e),Y=l(e,"H3",{class:!0});var ja=i(Y);oe=l(ja,"A",{id:!0,class:!0,href:!0});var Fo=i(oe);Gs=l(Fo,"SPAN",{});var Go=i(Gs);m(Ue.$$.fragment,Go),Go.forEach(t),Fo.forEach(t),Zr=c(ja),Is=l(ja,"SPAN",{});var Io=i(Is);en=n(Io,"Optimisez votre boucle d'entra\xEEnement avec \u{1F917} *Accelerate*"),Io.forEach(t),ja.forEach(t),Yt=c(e),m(We.$$.fragment,e),Qt=c(e),O=l(e,"P",{});var is=i(O);sn=n(is,"La boucle d\u2019entra\xEEnement que nous avons d\xE9finie pr\xE9c\xE9demment fonctionne bien sur un seul CPU ou GPU. Mais en utilisant la biblioth\xE8que "),le=l(is,"A",{href:!0,rel:!0});var Jn=i(le);tn=n(Jn,"\u{1F917} "),Vs=l(Jn,"EM",{});var Vo=i(Vs);an=n(Vo,"Accelerate"),Vo.forEach(t),Jn.forEach(t),rn=n(is,", il suffit de quelques ajustements pour permettre un entra\xEEnement distribu\xE9 sur plusieurs GPUs ou TPUs. En partant de la cr\xE9ation des "),Hs=l(is,"EM",{});var Ho=i(Hs);nn=n(Ho,"dataloaders"),Ho.forEach(t),on=n(is," d\u2019entra\xEEnement et de validation, voici \xE0 quoi ressemble notre boucle d\u2019entra\xEEnement manuel :"),is.forEach(t),Kt=c(e),m(Fe.$$.fragment,e),Xt=c(e),ss=l(e,"P",{});var Ro=i(ss);ln=n(Ro,"Et voici les changements :"),Ro.forEach(t),Zt=c(e),m(Ge.$$.fragment,e),ea=c(e),z=l(e,"P",{});var F=i(z);un=n(F,"La premi\xE8re ligne \xE0 ajouter est la ligne d\u2019importation. La deuxi\xE8me ligne instancie un objet "),Rs=l(F,"CODE",{});var Bo=i(Rs);pn=n(Bo,"Accelerator"),Bo.forEach(t),cn=n(F," qui va regarder l\u2019environnement et initialiser la bonne configuration distribu\xE9e. \u{1F917} "),Bs=l(F,"EM",{});var Jo=i(Bs);dn=n(Jo,"Accelerate"),Jo.forEach(t),mn=n(F," g\xE8re le placement des p\xE9riph\xE9riques pour vous, donc vous pouvez enlever les lignes qui placent le mod\xE8le sur le p\xE9riph\xE9rique (ou, si vous pr\xE9f\xE9rez, les changer pour utiliser "),Js=l(F,"CODE",{});var Yo=i(Js);fn=n(Yo,"accelerator.device"),Yo.forEach(t),hn=n(F," au lieu de "),Ys=l(F,"CODE",{});var Qo=i(Ys);_n=n(Qo,"device"),Qo.forEach(t),vn=n(F,")."),F.forEach(t),sa=c(e),g=l(e,"P",{});var y=i(g);bn=n(y,"Ensuite, le gros du travail est fait dans la ligne qui envoie les "),Qs=l(y,"EM",{});var Ko=i(Qs);$n=n(Ko,"dataloaders"),Ko.forEach(t),qn=n(y,", le mod\xE8le, et l\u2019optimiseur \xE0 "),Ks=l(y,"CODE",{});var Xo=i(Ks);gn=n(Xo,"accelerator.prepare()"),Xo.forEach(t),kn=n(y,". Cela va envelopper ces objets dans le conteneur appropri\xE9 pour s\u2019assurer que votre entra\xEEnement distribu\xE9 fonctionne comme pr\xE9vu. Les changements restants \xE0 faire sont la suppression de la ligne qui met le batch sur le "),Xs=l(y,"CODE",{});var Zo=i(Xs);jn=n(Zo,"device"),Zo.forEach(t),En=n(y," (encore une fois, si vous voulez le garder, vous pouvez juste le changer pour utiliser "),Zs=l(y,"CODE",{});var el=i(Zs);wn=n(el,"accelerator.device"),el.forEach(t),zn=n(y,") et le remplacement de "),et=l(y,"CODE",{});var sl=i(et);yn=n(sl,"loss.backward()"),sl.forEach(t),An=n(y," par "),st=l(y,"CODE",{});var tl=i(st);Pn=n(tl,"accelerator.backward(loss)"),tl.forEach(t),xn=n(y,"."),y.forEach(t),ta=c(e),m(ie.$$.fragment,e),aa=c(e),ue=l(e,"P",{});var Ea=i(ue);Cn=n(Ea,"Si vous souhaitez faire un copier-coller pour jouer, voici \xE0 quoi ressemble la boucle d\u2019entra\xEEnement compl\xE8te avec \u{1F917} "),tt=l(Ea,"EM",{});var al=i(tt);Sn=n(al,"Accelerate"),al.forEach(t),Dn=n(Ea," :"),Ea.forEach(t),ra=c(e),m(Ie.$$.fragment,e),na=c(e),pe=l(e,"P",{});var wa=i(pe);Mn=n(wa,"En pla\xE7ant ceci dans un script "),at=l(wa,"CODE",{});var rl=i(at);Tn=n(rl,"train.py"),rl.forEach(t),Ln=n(wa,", cela sera ex\xE9cutable sur n\u2019importe quel type d\u2019installation distribu\xE9e. Pour l\u2019essayer dans votre installation distribu\xE9e, ex\xE9cutez la commande :"),wa.forEach(t),oa=c(e),m(Ve.$$.fragment,e),la=c(e),ts=l(e,"P",{});var nl=i(ts);On=n(nl,"qui vous demandera de r\xE9pondre \xE0 quelques questions et enregistrera vos r\xE9ponses dans un fichier de configuration utilis\xE9 par cette commande :"),nl.forEach(t),ia=c(e),m(He.$$.fragment,e),ua=c(e),as=l(e,"P",{});var ol=i(as);Nn=n(ol,"qui lancera l\u2019entra\xEEnement distribu\xE9."),ol.forEach(t),pa=c(e),N=l(e,"P",{});var us=i(N);Un=n(us,"Si vous voulez essayer ceci dans un "),rt=l(us,"EM",{});var ll=i(rt);Wn=n(ll,"notebook"),ll.forEach(t),Fn=n(us," (par exemple, pour le tester avec des TPUs sur Colab), collez simplement le code dans une "),nt=l(us,"CODE",{});var il=i(nt);Gn=n(il,"training_function()"),il.forEach(t),In=n(us," et lancez une derni\xE8re cellule avec :"),us.forEach(t),ca=c(e),m(Re.$$.fragment,e),da=c(e),ce=l(e,"P",{});var za=i(ce);Vn=n(za,"Vous trouverez d\u2019autres exemples dans le d\xE9p\xF4t d\u2019"),de=l(za,"A",{href:!0,rel:!0});var Yn=i(de);Hn=n(Yn,"\u{1F917} "),ot=l(Yn,"EM",{});var ul=i(ot);Rn=n(ul,"Accelerate"),ul.forEach(t),Yn.forEach(t),Bn=n(za,"."),za.forEach(t),this.h()},h(){b($,"name","hf:doc:metadata"),b($,"content",JSON.stringify(gl)),b(x,"id","un-entranement-complet"),b(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(x,"href","#un-entranement-complet"),b(k,"class","relative group"),b(K,"id","prparer-lentranement"),b(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(K,"href","#prparer-lentranement"),b(H,"class","relative group"),b(Ae,"href","https://arxiv.org/abs/1711.05101"),b(Ae,"rel","nofollow"),b(se,"id","la-boucle-dentranement"),b(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(se,"href","#la-boucle-dentranement"),b(B,"class","relative group"),b(re,"id","la-boucle-dvaluation"),b(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(re,"href","#la-boucle-dvaluation"),b(J,"class","relative group"),b(oe,"id","optimisez-votre-boucle-dentranement-avec-accelerate"),b(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(oe,"href","#optimisez-votre-boucle-dentranement-avec-accelerate"),b(Y,"class","relative group"),b(le,"href","https://github.com/huggingface/accelerate"),b(le,"rel","nofollow"),b(de,"href","https://github.com/huggingface/accelerate/tree/main/examples"),b(de,"rel","nofollow")},m(e,a){s(document.head,$),u(e,j,a),u(e,k,a),s(k,x),s(x,G),f(A,G,null),s(k,he),s(k,I),s(I,V),u(e,P,a),f(D,e,a),u(e,_e,a),f(ve,e,a),u(e,ut,a),u(e,Q,a),s(Q,ya),s(Q,ps),s(ps,Aa),s(Q,Pa),u(e,pt,a),f(be,e,a),u(e,ct,a),u(e,H,a),s(H,K),s(K,cs),f($e,cs,null),s(H,xa),s(H,ds),s(ds,Ca),u(e,dt,a),u(e,C,a),s(C,Sa),s(C,ms),s(ms,Da),s(C,Ma),s(C,fs),s(fs,Ta),s(C,La),s(C,hs),s(hs,Oa),s(C,Na),u(e,mt,a),u(e,M,a),s(M,R),s(R,Ua),s(R,_s),s(_s,Wa),s(R,Fa),s(R,vs),s(vs,Ga),s(R,Ia),s(M,Va),s(M,S),s(S,Ha),s(S,bs),s(bs,Ra),s(S,Ba),s(S,$s),s($s,Ja),s(S,Ya),s(S,qs),s(qs,Qa),s(S,Ka),s(M,Xa),s(M,gs),s(gs,Za),u(e,ft,a),u(e,X,a),s(X,er),s(X,ks),s(ks,sr),s(X,tr),u(e,ht,a),f(qe,e,a),u(e,_t,a),u(e,Ye,a),s(Ye,ar),u(e,vt,a),f(ge,e,a),u(e,bt,a),u(e,Z,a),s(Z,rr),s(Z,js),s(js,nr),s(Z,or),u(e,$t,a),f(ke,e,a),u(e,qt,a),u(e,Qe,a),s(Qe,lr),u(e,gt,a),f(je,e,a),u(e,kt,a),f(Ee,e,a),u(e,jt,a),u(e,T,a),s(T,ir),s(T,Es),s(Es,ur),s(T,pr),s(T,ws),s(ws,cr),s(T,dr),u(e,Et,a),u(e,Ke,a),s(Ke,mr),u(e,wt,a),f(we,e,a),u(e,zt,a),u(e,Xe,a),s(Xe,fr),u(e,yt,a),f(ze,e,a),u(e,At,a),f(ye,e,a),u(e,Pt,a),u(e,L,a),s(L,hr),s(L,zs),s(zs,_r),s(L,vr),s(L,ys),s(ys,br),s(L,$r),u(e,xt,a),u(e,E,a),s(E,qr),s(E,As),s(As,gr),s(E,kr),s(E,Ps),s(Ps,jr),s(E,Er),s(E,xs),s(xs,wr),s(E,zr),s(E,Ae),s(Ae,yr),s(E,Ar),u(e,Ct,a),f(Pe,e,a),u(e,St,a),u(e,ee,a),s(ee,Pr),s(ee,Cs),s(Cs,xr),s(ee,Cr),u(e,Dt,a),f(xe,e,a),u(e,Mt,a),f(Ce,e,a),u(e,Tt,a),u(e,B,a),s(B,se),s(se,Ss),f(Se,Ss,null),s(B,Sr),s(B,Ds),s(Ds,Dr),u(e,Lt,a),u(e,te,a),s(te,Mr),s(te,Ms),s(Ms,Tr),s(te,Lr),u(e,Ot,a),f(De,e,a),u(e,Nt,a),f(Me,e,a),u(e,Ut,a),u(e,ae,a),s(ae,Or),s(ae,Ts),s(Ts,Nr),s(ae,Ur),u(e,Wt,a),f(Te,e,a),u(e,Ft,a),u(e,Ze,a),s(Ze,Wr),u(e,Gt,a),u(e,J,a),s(J,re),s(re,Ls),f(Le,Ls,null),s(J,Fr),s(J,Os),s(Os,Gr),u(e,It,a),u(e,w,a),s(w,Ir),s(w,Ns),s(Ns,Vr),s(w,Hr),s(w,Us),s(Us,Rr),s(w,Br),s(w,Ws),s(Ws,Jr),s(w,Yr),s(w,Fs),s(Fs,Qr),s(w,Kr),u(e,Vt,a),f(Oe,e,a),u(e,Ht,a),f(Ne,e,a),u(e,Rt,a),u(e,es,a),s(es,Xr),u(e,Bt,a),f(ne,e,a),u(e,Jt,a),u(e,Y,a),s(Y,oe),s(oe,Gs),f(Ue,Gs,null),s(Y,Zr),s(Y,Is),s(Is,en),u(e,Yt,a),f(We,e,a),u(e,Qt,a),u(e,O,a),s(O,sn),s(O,le),s(le,tn),s(le,Vs),s(Vs,an),s(O,rn),s(O,Hs),s(Hs,nn),s(O,on),u(e,Kt,a),f(Fe,e,a),u(e,Xt,a),u(e,ss,a),s(ss,ln),u(e,Zt,a),f(Ge,e,a),u(e,ea,a),u(e,z,a),s(z,un),s(z,Rs),s(Rs,pn),s(z,cn),s(z,Bs),s(Bs,dn),s(z,mn),s(z,Js),s(Js,fn),s(z,hn),s(z,Ys),s(Ys,_n),s(z,vn),u(e,sa,a),u(e,g,a),s(g,bn),s(g,Qs),s(Qs,$n),s(g,qn),s(g,Ks),s(Ks,gn),s(g,kn),s(g,Xs),s(Xs,jn),s(g,En),s(g,Zs),s(Zs,wn),s(g,zn),s(g,et),s(et,yn),s(g,An),s(g,st),s(st,Pn),s(g,xn),u(e,ta,a),f(ie,e,a),u(e,aa,a),u(e,ue,a),s(ue,Cn),s(ue,tt),s(tt,Sn),s(ue,Dn),u(e,ra,a),f(Ie,e,a),u(e,na,a),u(e,pe,a),s(pe,Mn),s(pe,at),s(at,Tn),s(pe,Ln),u(e,oa,a),f(Ve,e,a),u(e,la,a),u(e,ts,a),s(ts,On),u(e,ia,a),f(He,e,a),u(e,ua,a),u(e,as,a),s(as,Nn),u(e,pa,a),u(e,N,a),s(N,Un),s(N,rt),s(rt,Wn),s(N,Fn),s(N,nt),s(nt,Gn),s(N,In),u(e,ca,a),f(Re,e,a),u(e,da,a),u(e,ce,a),s(ce,Vn),s(ce,de),s(de,Hn),s(de,ot),s(ot,Rn),s(ce,Bn),ma=!0},p(e,[a]){const Be={};a&2&&(Be.$$scope={dirty:a,ctx:e}),ne.$set(Be);const lt={};a&2&&(lt.$$scope={dirty:a,ctx:e}),ie.$set(lt)},i(e){ma||(h(A.$$.fragment,e),h(D.$$.fragment,e),h(ve.$$.fragment,e),h(be.$$.fragment,e),h($e.$$.fragment,e),h(qe.$$.fragment,e),h(ge.$$.fragment,e),h(ke.$$.fragment,e),h(je.$$.fragment,e),h(Ee.$$.fragment,e),h(we.$$.fragment,e),h(ze.$$.fragment,e),h(ye.$$.fragment,e),h(Pe.$$.fragment,e),h(xe.$$.fragment,e),h(Ce.$$.fragment,e),h(Se.$$.fragment,e),h(De.$$.fragment,e),h(Me.$$.fragment,e),h(Te.$$.fragment,e),h(Le.$$.fragment,e),h(Oe.$$.fragment,e),h(Ne.$$.fragment,e),h(ne.$$.fragment,e),h(Ue.$$.fragment,e),h(We.$$.fragment,e),h(Fe.$$.fragment,e),h(Ge.$$.fragment,e),h(ie.$$.fragment,e),h(Ie.$$.fragment,e),h(Ve.$$.fragment,e),h(He.$$.fragment,e),h(Re.$$.fragment,e),ma=!0)},o(e){_(A.$$.fragment,e),_(D.$$.fragment,e),_(ve.$$.fragment,e),_(be.$$.fragment,e),_($e.$$.fragment,e),_(qe.$$.fragment,e),_(ge.$$.fragment,e),_(ke.$$.fragment,e),_(je.$$.fragment,e),_(Ee.$$.fragment,e),_(we.$$.fragment,e),_(ze.$$.fragment,e),_(ye.$$.fragment,e),_(Pe.$$.fragment,e),_(xe.$$.fragment,e),_(Ce.$$.fragment,e),_(Se.$$.fragment,e),_(De.$$.fragment,e),_(Me.$$.fragment,e),_(Te.$$.fragment,e),_(Le.$$.fragment,e),_(Oe.$$.fragment,e),_(Ne.$$.fragment,e),_(ne.$$.fragment,e),_(Ue.$$.fragment,e),_(We.$$.fragment,e),_(Fe.$$.fragment,e),_(Ge.$$.fragment,e),_(ie.$$.fragment,e),_(Ie.$$.fragment,e),_(Ve.$$.fragment,e),_(He.$$.fragment,e),_(Re.$$.fragment,e),ma=!1},d(e){t($),e&&t(j),e&&t(k),v(A),e&&t(P),v(D,e),e&&t(_e),v(ve,e),e&&t(ut),e&&t(Q),e&&t(pt),v(be,e),e&&t(ct),e&&t(H),v($e),e&&t(dt),e&&t(C),e&&t(mt),e&&t(M),e&&t(ft),e&&t(X),e&&t(ht),v(qe,e),e&&t(_t),e&&t(Ye),e&&t(vt),v(ge,e),e&&t(bt),e&&t(Z),e&&t($t),v(ke,e),e&&t(qt),e&&t(Qe),e&&t(gt),v(je,e),e&&t(kt),v(Ee,e),e&&t(jt),e&&t(T),e&&t(Et),e&&t(Ke),e&&t(wt),v(we,e),e&&t(zt),e&&t(Xe),e&&t(yt),v(ze,e),e&&t(At),v(ye,e),e&&t(Pt),e&&t(L),e&&t(xt),e&&t(E),e&&t(Ct),v(Pe,e),e&&t(St),e&&t(ee),e&&t(Dt),v(xe,e),e&&t(Mt),v(Ce,e),e&&t(Tt),e&&t(B),v(Se),e&&t(Lt),e&&t(te),e&&t(Ot),v(De,e),e&&t(Nt),v(Me,e),e&&t(Ut),e&&t(ae),e&&t(Wt),v(Te,e),e&&t(Ft),e&&t(Ze),e&&t(Gt),e&&t(J),v(Le),e&&t(It),e&&t(w),e&&t(Vt),v(Oe,e),e&&t(Ht),v(Ne,e),e&&t(Rt),e&&t(es),e&&t(Bt),v(ne,e),e&&t(Jt),e&&t(Y),v(Ue),e&&t(Yt),v(We,e),e&&t(Qt),e&&t(O),e&&t(Kt),v(Fe,e),e&&t(Xt),e&&t(ss),e&&t(Zt),v(Ge,e),e&&t(ea),e&&t(z),e&&t(sa),e&&t(g),e&&t(ta),v(ie,e),e&&t(aa),e&&t(ue),e&&t(ra),v(Ie,e),e&&t(na),e&&t(pe),e&&t(oa),v(Ve,e),e&&t(la),e&&t(ts),e&&t(ia),v(He,e),e&&t(ua),e&&t(as),e&&t(pa),e&&t(N),e&&t(ca),v(Re,e),e&&t(da),e&&t(ce)}}}const gl={local:"un-entranement-complet",sections:[{local:"prparer-lentranement",title:"Pr\xE9parer l'entra\xEEnement"},{local:"la-boucle-dentranement",title:"La boucle d'entra\xEEnement"},{local:"la-boucle-dvaluation",title:"La boucle d'\xE9valuation"},{local:"optimisez-votre-boucle-dentranement-avec-accelerate",title:"Optimisez votre boucle d'entra\xEEnement avec \u{1F917} *Accelerate*"}],title:"Un entra\xEEnement complet"};function kl(Je){return _l(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Pl extends dl{constructor($){super();ml(this,$,kl,ql,fl,{})}}export{Pl as default,gl as metadata};
