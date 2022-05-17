import{S as bl,i as $l,s as ql,e as o,k as p,w as d,t as a,M as gl,c as l,d as t,m as c,a as i,x as m,h as r,b,F as s,g as u,y as f,q as h,o as _,B as v,v as kl}from"../../chunks/vendor-1e8b365d.js";import{T as _l}from"../../chunks/Tip-62b14c6e.js";import{Y as vl}from"../../chunks/Youtube-c2a8cc39.js";import{I as ct}from"../../chunks/IconCopyLink-483c28ba.js";import{C as q}from"../../chunks/CodeBlock-e5764662.js";import{D as jl}from"../../chunks/DocNotebookDropdown-37d928d3.js";function El(Je){let $,z,j,w,g,k,he,V;return{c(){$=o("p"),z=a("\u270F\uFE0F "),j=o("strong"),w=a("Essayez"),g=a(" Modifiez la boucle d\u2019entra\xEEnement pr\xE9c\xE9dente pour "),k=o("em"),he=a("finetuner"),V=a(" votre mod\xE8le sur le jeu de donn\xE9es SST-2.")},l(H){$=l(H,"P",{});var C=i($);z=r(C,"\u270F\uFE0F "),j=l(C,"STRONG",{});var M=i(j);w=r(M,"Essayez"),M.forEach(t),g=r(C," Modifiez la boucle d\u2019entra\xEEnement pr\xE9c\xE9dente pour "),k=l(C,"EM",{});var _e=i(k);he=r(_e,"finetuner"),_e.forEach(t),V=r(C," votre mod\xE8le sur le jeu de donn\xE9es SST-2."),C.forEach(t)},m(H,C){u(H,$,C),s($,z),s($,j),s(j,w),s($,g),s($,k),s(k,he),s($,V)},d(H){H&&t($)}}}function wl(Je){let $,z,j,w;return{c(){$=a('\u26A0\uFE0F Afin de b\xE9n\xE9ficier de la rapidit\xE9 offerte par les TPUs du Cloud, nous vous recommandons de rembourrer vos \xE9chantillons \xE0 une longueur fixe avec les arguments `padding="max_length"` et `max_length` du '),z=o("i"),j=a("tokenizer"),w=a(".")},l(g){$=r(g,'\u26A0\uFE0F Afin de b\xE9n\xE9ficier de la rapidit\xE9 offerte par les TPUs du Cloud, nous vous recommandons de rembourrer vos \xE9chantillons \xE0 une longueur fixe avec les arguments `padding="max_length"` et `max_length` du '),z=l(g,"I",{});var k=i(z);j=r(k,"tokenizer"),k.forEach(t),w=r(g,".")},m(g,k){u(g,$,k),u(g,z,k),s(z,j),u(g,w,k)},d(g){g&&t($),g&&t(z),g&&t(w)}}}function zl(Je){let $,z,j,w,g,k,he,V,H,C,M,_e,ve,dt,K,Pa,cs,xa,Ca,mt,be,ft,R,X,ds,$e,Sa,ms,Da,ht,S,Ma,fs,Ta,La,hs,Oa,Na,_s,Ua,Wa,_t,T,B,Fa,vs,Ia,Ga,bs,Va,Ha,Ra,D,Ba,$s,Ja,Ya,qs,Qa,Ka,gs,Xa,Za,er,ks,sr,vt,Z,tr,js,ar,rr,bt,qe,$t,Ye,nr,qt,ge,gt,ee,or,Es,lr,ir,kt,ke,jt,Qe,ur,Et,je,wt,Ee,zt,L,pr,ws,cr,dr,zs,mr,fr,yt,Ke,hr,At,we,Pt,Xe,_r,xt,ze,Ct,ye,St,O,vr,ys,br,$r,As,qr,gr,Dt,y,kr,Ps,jr,Er,xs,wr,zr,Cs,yr,Ar,Ae,Ss,Pr,xr,Mt,Pe,Tt,N,Cr,Ds,Sr,Dr,Ms,Mr,Tr,Lt,xe,Ot,Ce,Nt,J,se,Ts,Se,Lr,Ls,Or,Ut,te,Nr,Os,Ur,Wr,Wt,De,Ft,Me,It,ae,Fr,Ns,Ir,Gr,Gt,Te,Vt,Ze,Vr,Ht,Y,re,Us,Le,Hr,Ws,Rr,Rt,A,Br,Fs,Jr,Yr,Is,Qr,Kr,Gs,Xr,Zr,Vs,en,sn,Bt,Oe,Jt,Ne,Yt,es,tn,Qt,ne,Kt,Q,oe,Hs,Ue,an,Rs,rn,Xt,We,Zt,U,nn,le,on,Bs,ln,un,Js,pn,cn,ea,Fe,sa,ss,dn,ta,Ie,aa,P,mn,Ys,fn,hn,Qs,_n,vn,Ks,bn,$n,Xs,qn,gn,ra,E,kn,Zs,jn,En,et,wn,zn,st,yn,An,tt,Pn,xn,at,Cn,Sn,rt,Dn,Mn,na,ie,oa,ue,Tn,nt,Ln,On,la,Ge,ia,pe,Nn,ot,Un,Wn,ua,Ve,pa,ts,Fn,ca,He,da,as,In,ma,W,Gn,lt,Vn,Hn,it,Rn,Bn,fa,Re,ha,ce,Jn,de,Yn,ut,Qn,Kn,_a;return k=new ct({}),M=new jl({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter3/section4.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter3/section4.ipynb"}]}}),ve=new vl({props:{id:"Dh9CL8fyG80"}}),be=new q({props:{code:`from datasets import load_dataset
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
data_collator = DataCollatorWithPadding(tokenizer=tokenizer)`}}),$e=new ct({}),qe=new q({props:{code:`tokenized_datasets = tokenized_datasets.remove_columns(["sentence1", "sentence2", "idx"])
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
<span class="hljs-built_in">print</span>(num_training_steps)`}}),Ce=new q({props:{code:"1377",highlighted:'<span class="hljs-number">1377</span>'}}),Se=new ct({}),De=new q({props:{code:`import torch

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
        progress_bar.update(<span class="hljs-number">1</span>)`}}),Le=new ct({}),Oe=new q({props:{code:`from datasets import load_metric

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

metric.compute()`}}),Ne=new q({props:{code:"{'accuracy': 0.8431372549019608, 'f1': 0.8907849829351535}",highlighted:'{<span class="hljs-string">&#x27;accuracy&#x27;</span>: <span class="hljs-number">0.8431372549019608</span>, <span class="hljs-string">&#x27;f1&#x27;</span>: <span class="hljs-number">0.8907849829351535</span>}'}}),ne=new _l({props:{$$slots:{default:[El]},$$scope:{ctx:Je}}}),Ue=new ct({}),We=new vl({props:{id:"s7dy8QRgjJ0"}}),Fe=new q({props:{code:`from transformers import AdamW, AutoModelForSequenceClassification, get_scheduler

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
        progress_bar.update(<span class="hljs-number">1</span>)`}}),Ie=new q({props:{code:`+ from accelerate import Accelerator
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
          progress_bar.update(1)`}}),ie=new _l({props:{$$slots:{default:[wl]},$$scope:{ctx:Je}}}),Ge=new q({props:{code:`from accelerate import Accelerator
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

notebook_launcher(training_function)`}}),{c(){$=o("meta"),z=p(),j=o("h1"),w=o("a"),g=o("span"),d(k.$$.fragment),he=p(),V=o("span"),H=a("Un entra\xEEnement complet"),C=p(),d(M.$$.fragment),_e=p(),d(ve.$$.fragment),dt=p(),K=o("p"),Pa=a("Maintenant nous allons voir comment obtenir les m\xEAmes r\xE9sultats que dans la derni\xE8re section sans utiliser la classe "),cs=o("code"),xa=a("Trainer"),Ca=a(". Encore une fois, nous supposons que vous avez fait le traitement des donn\xE9es dans la section 2. Voici un court r\xE9sum\xE9 couvrant tout ce dont vous aurez besoin :"),mt=p(),d(be.$$.fragment),ft=p(),R=o("h3"),X=o("a"),ds=o("span"),d($e.$$.fragment),Sa=p(),ms=o("span"),Da=a("Pr\xE9parer l'entra\xEEnement"),ht=p(),S=o("p"),Ma=a("Avant d\u2019\xE9crire r\xE9ellement notre boucle d\u2019entra\xEEnement, nous devons d\xE9finir quelques objets. Les premiers sont les "),fs=o("em"),Ta=a("dataloaders"),La=a(" que nous utiliserons pour it\xE9rer sur les batchs. Mais avant de pouvoir d\xE9finir ces chargeurs de donn\xE9es, nous devons appliquer un peu de post-traitement \xE0 nos "),hs=o("code"),Oa=a("tokenized_datasets"),Na=a(", pour prendre soin de certaines choses que le "),_s=o("code"),Ua=a("Trainer"),Wa=a(" fait pour nous automatiquement. Sp\xE9cifiquement, nous devons :"),_t=p(),T=o("ul"),B=o("li"),Fa=a("supprimer les colonnes correspondant aux valeurs que le mod\xE8le n\u2019attend pas (comme les colonnes "),vs=o("code"),Ia=a("sentence1"),Ga=a(" et "),bs=o("code"),Va=a("sentence2"),Ha=a("),"),Ra=p(),D=o("li"),Ba=a("renommer la colonne "),$s=o("code"),Ja=a("label"),Ya=a(" en "),qs=o("code"),Qa=a("labels"),Ka=a(" (parce que le mod\xE8le s\u2019attend \xE0 ce que l\u2019argument soit nomm\xE9 "),gs=o("code"),Xa=a("labels"),Za=a("),"),er=p(),ks=o("li"),sr=a("d\xE9finir le format des jeux de donn\xE9es pour qu\u2019ils retournent des tenseurs PyTorch au lieu de listes."),vt=p(),Z=o("p"),tr=a("Notre "),js=o("code"),ar=a("tokenized_datasets"),rr=a(" a une m\xE9thode pour chacune de ces \xE9tapes :"),bt=p(),d(qe.$$.fragment),$t=p(),Ye=o("p"),nr=a("Nous pouvons alors v\xE9rifier que le r\xE9sultat ne comporte que des colonnes que notre mod\xE8le acceptera :"),qt=p(),d(ge.$$.fragment),gt=p(),ee=o("p"),or=a("Maintenant que cela est fait, nous pouvons facilement d\xE9finir nos "),Es=o("em"),lr=a("dataloaders"),ir=a(" :"),kt=p(),d(ke.$$.fragment),jt=p(),Qe=o("p"),ur=a("Pour v\xE9rifier rapidement qu\u2019il n\u2019y a pas d\u2019erreur dans le traitement des donn\xE9es, nous pouvons inspecter un batch comme celui-ci :"),Et=p(),d(je.$$.fragment),wt=p(),d(Ee.$$.fragment),zt=p(),L=o("p"),pr=a("Notez que les formes r\xE9elles seront probablement l\xE9g\xE8rement diff\xE9rentes pour vous puisque nous avons d\xE9fini "),ws=o("code"),cr=a("shuffle=True"),dr=a(" pour le chargeur de donn\xE9es d\u2019entra\xEEnement et que nous "),zs=o("em"),mr=a("paddons"),fr=a(" \xE0 la longueur maximale dans le batch."),yt=p(),Ke=o("p"),hr=a("Maintenant que nous en avons termin\xE9 avec le pr\xE9traitement des donn\xE9es (un objectif satisfaisant mais difficile \xE0 atteindre pour tout praticien d\u2019apprentissage automatique), passons au mod\xE8le. Nous l\u2019instancions exactement comme nous l\u2019avons fait dans la section pr\xE9c\xE9dente :"),At=p(),d(we.$$.fragment),Pt=p(),Xe=o("p"),_r=a("Pour s\u2019assurer que tout se passera bien pendant l\u2019entra\xEEnement, nous transmettons notre batch \xE0 ce mod\xE8le :"),xt=p(),d(ze.$$.fragment),Ct=p(),d(ye.$$.fragment),St=p(),O=o("p"),vr=a("Tous les mod\xE8les \u{1F917} "),ys=o("em"),br=a("Transformers"),$r=a(" renvoient la perte lorsque les "),As=o("code"),qr=a("labels"),gr=a(" sont fournis. Nous obtenons \xE9galement les logits (deux pour chaque entr\xE9e de notre batch, donc un tenseur de taille 8 x 2)."),Dt=p(),y=o("p"),kr=a("Nous sommes presque pr\xEAts \xE0 \xE9crire notre boucle d\u2019entra\xEEnement ! Il nous manque juste deux choses : un optimiseur et un planificateur de taux d\u2019apprentissage. Puisque nous essayons de reproduire \xE0 la main ce que fait la fonction "),Ps=o("code"),jr=a("Trainer"),Er=a(", utilisons les m\xEAmes param\xE8tres par d\xE9faut. L\u2019optimiseur utilis\xE9 par "),xs=o("code"),wr=a("Trainer"),zr=a(" est "),Cs=o("code"),yr=a("AdamW"),Ar=a(", qui est le m\xEAme qu\u2019Adam, mais avec une torsion pour la r\xE9gularisation par d\xE9croissance de poids (voir "),Ae=o("a"),Ss=o("em"),Pr=a("Decoupled Weight Decay Regularization"),xr=a(" par Ilya Loshchilov et Frank Hutter) :"),Mt=p(),d(Pe.$$.fragment),Tt=p(),N=o("p"),Cr=a("Enfin, le planificateur du taux d\u2019apprentissage utilis\xE9 par d\xE9faut est juste une d\xE9croissance lin\xE9aire de la valeur maximale (5e-5) \xE0 0. Pour le d\xE9finir correctement, nous devons conna\xEEtre le nombre d\u2019\xE9tapes d\u2019entra\xEEnement que nous prendrons, qui est le nombre d\u2019\xE9poques que nous voulons ex\xE9cuter multipli\xE9 par le nombre de batch d\u2019entra\xEEnement (qui est la longueur de notre "),Ds=o("em"),Sr=a("dataloader"),Dr=a(" d\u2019entra\xEEnement). Le "),Ms=o("code"),Mr=a("Trainer"),Tr=a(" utilise trois \xE9poques par d\xE9faut, nous allons donc suivre \xE7a :"),Lt=p(),d(xe.$$.fragment),Ot=p(),d(Ce.$$.fragment),Nt=p(),J=o("h3"),se=o("a"),Ts=o("span"),d(Se.$$.fragment),Lr=p(),Ls=o("span"),Or=a("La boucle d'entra\xEEnement"),Ut=p(),te=o("p"),Nr=a("Une derni\xE8re chose : nous voulons utiliser le GPU si nous en avons un (sur un CPU, l\u2019entra\xEEnement peut prendre plusieurs heures au lieu de quelques minutes). Pour ce faire, nous d\xE9finissons un "),Os=o("code"),Ur=a("device"),Wr=a(" sur lequel nous allons placer notre mod\xE8le et nos batchs :"),Wt=p(),d(De.$$.fragment),Ft=p(),d(Me.$$.fragment),It=p(),ae=o("p"),Fr=a("Nous sommes maintenant pr\xEAts \xE0 entra\xEEner ! Pour avoir une id\xE9e du moment o\xF9 l\u2019entra\xEEnement sera termin\xE9, nous ajoutons une barre de progression sur le nombre d\u2019\xE9tapes d\u2019entra\xEEnement, en utilisant la biblioth\xE8que "),Ns=o("code"),Ir=a("tqdm"),Gr=a(" :"),Gt=p(),d(Te.$$.fragment),Vt=p(),Ze=o("p"),Vr=a("Vous pouvez voir que le c\u0153ur de la boucle d\u2019entra\xEEnement ressemble beaucoup \xE0 celui de l\u2019introduction. Nous n\u2019avons pas demand\xE9 de rapport, donc cette boucle d\u2019entra\xEEnement ne nous dira rien sur les r\xE9sultats du mod\xE8le. Pour cela, nous devons ajouter une boucle d\u2019\xE9valuation."),Ht=p(),Y=o("h3"),re=o("a"),Us=o("span"),d(Le.$$.fragment),Hr=p(),Ws=o("span"),Rr=a("La boucle d'\xE9valuation"),Rt=p(),A=o("p"),Br=a("Comme nous l\u2019avons fait pr\xE9c\xE9demment, nous allons utiliser une m\xE9trique fournie par la biblioth\xE8que \u{1F917} "),Fs=o("em"),Jr=a("Datasets"),Yr=a(". Nous avons d\xE9j\xE0 vu la m\xE9thode "),Is=o("code"),Qr=a("metric.compute()"),Kr=a(", mais les m\xE9triques peuvent en fait accumuler des batchs pour nous au fur et \xE0 mesure que nous parcourons la boucle de pr\xE9diction avec la m\xE9thode "),Gs=o("code"),Xr=a("add_batch()"),Zr=a(". Une fois que nous avons accumul\xE9 tous les batchs, nous pouvons obtenir le r\xE9sultat final avec "),Vs=o("code"),en=a("metric.compute()"),sn=a(". Voici comment impl\xE9menter tout cela dans une boucle d\u2019\xE9valuation :"),Bt=p(),d(Oe.$$.fragment),Jt=p(),d(Ne.$$.fragment),Yt=p(),es=o("p"),tn=a("Une fois encore, vos r\xE9sultats seront l\xE9g\xE8rement diff\xE9rents en raison du caract\xE8re al\xE9atoire de l\u2019initialisation de la t\xEAte du mod\xE8le et du m\xE9lange des donn\xE9es, mais ils devraient se situer dans la m\xEAme fourchette."),Qt=p(),d(ne.$$.fragment),Kt=p(),Q=o("h3"),oe=o("a"),Hs=o("span"),d(Ue.$$.fragment),an=p(),Rs=o("span"),rn=a("Optimisez votre boucle d'entra\xEEnement avec \u{1F917} *Accelerate*"),Xt=p(),d(We.$$.fragment),Zt=p(),U=o("p"),nn=a("La boucle d\u2019entra\xEEnement que nous avons d\xE9finie pr\xE9c\xE9demment fonctionne bien sur un seul CPU ou GPU. Mais en utilisant la biblioth\xE8que "),le=o("a"),on=a("\u{1F917} "),Bs=o("em"),ln=a("Accelerate"),un=a(", il suffit de quelques ajustements pour permettre un entra\xEEnement distribu\xE9 sur plusieurs GPUs ou TPUs. En partant de la cr\xE9ation des "),Js=o("em"),pn=a("dataloaders"),cn=a(" d\u2019entra\xEEnement et de validation, voici \xE0 quoi ressemble notre boucle d\u2019entra\xEEnement manuel :"),ea=p(),d(Fe.$$.fragment),sa=p(),ss=o("p"),dn=a("Et voici les changements :"),ta=p(),d(Ie.$$.fragment),aa=p(),P=o("p"),mn=a("La premi\xE8re ligne \xE0 ajouter est la ligne d\u2019importation. La deuxi\xE8me ligne instancie un objet "),Ys=o("code"),fn=a("Accelerator"),hn=a(" qui va regarder l\u2019environnement et initialiser la bonne configuration distribu\xE9e. \u{1F917} "),Qs=o("em"),_n=a("Accelerate"),vn=a(" g\xE8re le placement des p\xE9riph\xE9riques pour vous, donc vous pouvez enlever les lignes qui placent le mod\xE8le sur le p\xE9riph\xE9rique (ou, si vous pr\xE9f\xE9rez, les changer pour utiliser "),Ks=o("code"),bn=a("accelerator.device"),$n=a(" au lieu de "),Xs=o("code"),qn=a("device"),gn=a(")."),ra=p(),E=o("p"),kn=a("Ensuite, le gros du travail est fait dans la ligne qui envoie les "),Zs=o("em"),jn=a("dataloaders"),En=a(", le mod\xE8le, et l\u2019optimiseur \xE0 "),et=o("code"),wn=a("accelerator.prepare()"),zn=a(". Cela va envelopper ces objets dans le conteneur appropri\xE9 pour s\u2019assurer que votre entra\xEEnement distribu\xE9 fonctionne comme pr\xE9vu. Les changements restants \xE0 faire sont la suppression de la ligne qui met le batch sur le "),st=o("code"),yn=a("device"),An=a(" (encore une fois, si vous voulez le garder, vous pouvez juste le changer pour utiliser "),tt=o("code"),Pn=a("accelerator.device"),xn=a(") et le remplacement de "),at=o("code"),Cn=a("loss.backward()"),Sn=a(" par "),rt=o("code"),Dn=a("accelerator.backward(loss)"),Mn=a("."),na=p(),d(ie.$$.fragment),oa=p(),ue=o("p"),Tn=a("Si vous souhaitez faire un copier-coller pour jouer, voici \xE0 quoi ressemble la boucle d\u2019entra\xEEnement compl\xE8te avec \u{1F917} "),nt=o("em"),Ln=a("Accelerate"),On=a(" :"),la=p(),d(Ge.$$.fragment),ia=p(),pe=o("p"),Nn=a("En pla\xE7ant ceci dans un script "),ot=o("code"),Un=a("train.py"),Wn=a(", cela sera ex\xE9cutable sur n\u2019importe quel type d\u2019installation distribu\xE9e. Pour l\u2019essayer dans votre installation distribu\xE9e, ex\xE9cutez la commande :"),ua=p(),d(Ve.$$.fragment),pa=p(),ts=o("p"),Fn=a("qui vous demandera de r\xE9pondre \xE0 quelques questions et enregistrera vos r\xE9ponses dans un fichier de configuration utilis\xE9 par cette commande :"),ca=p(),d(He.$$.fragment),da=p(),as=o("p"),In=a("qui lancera l\u2019entra\xEEnement distribu\xE9."),ma=p(),W=o("p"),Gn=a("Si vous voulez essayer ceci dans un "),lt=o("em"),Vn=a("notebook"),Hn=a(" (par exemple, pour le tester avec des TPUs sur Colab), collez simplement le code dans une "),it=o("code"),Rn=a("training_function()"),Bn=a(" et lancez une derni\xE8re cellule avec :"),fa=p(),d(Re.$$.fragment),ha=p(),ce=o("p"),Jn=a("Vous trouverez d\u2019autres exemples dans le d\xE9p\xF4t d\u2019"),de=o("a"),Yn=a("\u{1F917} "),ut=o("em"),Qn=a("Accelerate"),Kn=a("."),this.h()},l(e){const n=gl('[data-svelte="svelte-1phssyn"]',document.head);$=l(n,"META",{name:!0,content:!0}),n.forEach(t),z=c(e),j=l(e,"H1",{class:!0});var Be=i(j);w=l(Be,"A",{id:!0,class:!0,href:!0});var pt=i(w);g=l(pt,"SPAN",{});var eo=i(g);m(k.$$.fragment,eo),eo.forEach(t),pt.forEach(t),he=c(Be),V=l(Be,"SPAN",{});var so=i(V);H=r(so,"Un entra\xEEnement complet"),so.forEach(t),Be.forEach(t),C=c(e),m(M.$$.fragment,e),_e=c(e),m(ve.$$.fragment,e),dt=c(e),K=l(e,"P",{});var va=i(K);Pa=r(va,"Maintenant nous allons voir comment obtenir les m\xEAmes r\xE9sultats que dans la derni\xE8re section sans utiliser la classe "),cs=l(va,"CODE",{});var to=i(cs);xa=r(to,"Trainer"),to.forEach(t),Ca=r(va,". Encore une fois, nous supposons que vous avez fait le traitement des donn\xE9es dans la section 2. Voici un court r\xE9sum\xE9 couvrant tout ce dont vous aurez besoin :"),va.forEach(t),mt=c(e),m(be.$$.fragment,e),ft=c(e),R=l(e,"H3",{class:!0});var ba=i(R);X=l(ba,"A",{id:!0,class:!0,href:!0});var ao=i(X);ds=l(ao,"SPAN",{});var ro=i(ds);m($e.$$.fragment,ro),ro.forEach(t),ao.forEach(t),Sa=c(ba),ms=l(ba,"SPAN",{});var no=i(ms);Da=r(no,"Pr\xE9parer l'entra\xEEnement"),no.forEach(t),ba.forEach(t),ht=c(e),S=l(e,"P",{});var me=i(S);Ma=r(me,"Avant d\u2019\xE9crire r\xE9ellement notre boucle d\u2019entra\xEEnement, nous devons d\xE9finir quelques objets. Les premiers sont les "),fs=l(me,"EM",{});var oo=i(fs);Ta=r(oo,"dataloaders"),oo.forEach(t),La=r(me," que nous utiliserons pour it\xE9rer sur les batchs. Mais avant de pouvoir d\xE9finir ces chargeurs de donn\xE9es, nous devons appliquer un peu de post-traitement \xE0 nos "),hs=l(me,"CODE",{});var lo=i(hs);Oa=r(lo,"tokenized_datasets"),lo.forEach(t),Na=r(me,", pour prendre soin de certaines choses que le "),_s=l(me,"CODE",{});var io=i(_s);Ua=r(io,"Trainer"),io.forEach(t),Wa=r(me," fait pour nous automatiquement. Sp\xE9cifiquement, nous devons :"),me.forEach(t),_t=c(e),T=l(e,"UL",{});var rs=i(T);B=l(rs,"LI",{});var ns=i(B);Fa=r(ns,"supprimer les colonnes correspondant aux valeurs que le mod\xE8le n\u2019attend pas (comme les colonnes "),vs=l(ns,"CODE",{});var uo=i(vs);Ia=r(uo,"sentence1"),uo.forEach(t),Ga=r(ns," et "),bs=l(ns,"CODE",{});var po=i(bs);Va=r(po,"sentence2"),po.forEach(t),Ha=r(ns,"),"),ns.forEach(t),Ra=c(rs),D=l(rs,"LI",{});var fe=i(D);Ba=r(fe,"renommer la colonne "),$s=l(fe,"CODE",{});var co=i($s);Ja=r(co,"label"),co.forEach(t),Ya=r(fe," en "),qs=l(fe,"CODE",{});var mo=i(qs);Qa=r(mo,"labels"),mo.forEach(t),Ka=r(fe," (parce que le mod\xE8le s\u2019attend \xE0 ce que l\u2019argument soit nomm\xE9 "),gs=l(fe,"CODE",{});var fo=i(gs);Xa=r(fo,"labels"),fo.forEach(t),Za=r(fe,"),"),fe.forEach(t),er=c(rs),ks=l(rs,"LI",{});var ho=i(ks);sr=r(ho,"d\xE9finir le format des jeux de donn\xE9es pour qu\u2019ils retournent des tenseurs PyTorch au lieu de listes."),ho.forEach(t),rs.forEach(t),vt=c(e),Z=l(e,"P",{});var $a=i(Z);tr=r($a,"Notre "),js=l($a,"CODE",{});var _o=i(js);ar=r(_o,"tokenized_datasets"),_o.forEach(t),rr=r($a," a une m\xE9thode pour chacune de ces \xE9tapes :"),$a.forEach(t),bt=c(e),m(qe.$$.fragment,e),$t=c(e),Ye=l(e,"P",{});var vo=i(Ye);nr=r(vo,"Nous pouvons alors v\xE9rifier que le r\xE9sultat ne comporte que des colonnes que notre mod\xE8le acceptera :"),vo.forEach(t),qt=c(e),m(ge.$$.fragment,e),gt=c(e),ee=l(e,"P",{});var qa=i(ee);or=r(qa,"Maintenant que cela est fait, nous pouvons facilement d\xE9finir nos "),Es=l(qa,"EM",{});var bo=i(Es);lr=r(bo,"dataloaders"),bo.forEach(t),ir=r(qa," :"),qa.forEach(t),kt=c(e),m(ke.$$.fragment,e),jt=c(e),Qe=l(e,"P",{});var $o=i(Qe);ur=r($o,"Pour v\xE9rifier rapidement qu\u2019il n\u2019y a pas d\u2019erreur dans le traitement des donn\xE9es, nous pouvons inspecter un batch comme celui-ci :"),$o.forEach(t),Et=c(e),m(je.$$.fragment,e),wt=c(e),m(Ee.$$.fragment,e),zt=c(e),L=l(e,"P",{});var os=i(L);pr=r(os,"Notez que les formes r\xE9elles seront probablement l\xE9g\xE8rement diff\xE9rentes pour vous puisque nous avons d\xE9fini "),ws=l(os,"CODE",{});var qo=i(ws);cr=r(qo,"shuffle=True"),qo.forEach(t),dr=r(os," pour le chargeur de donn\xE9es d\u2019entra\xEEnement et que nous "),zs=l(os,"EM",{});var go=i(zs);mr=r(go,"paddons"),go.forEach(t),fr=r(os," \xE0 la longueur maximale dans le batch."),os.forEach(t),yt=c(e),Ke=l(e,"P",{});var ko=i(Ke);hr=r(ko,"Maintenant que nous en avons termin\xE9 avec le pr\xE9traitement des donn\xE9es (un objectif satisfaisant mais difficile \xE0 atteindre pour tout praticien d\u2019apprentissage automatique), passons au mod\xE8le. Nous l\u2019instancions exactement comme nous l\u2019avons fait dans la section pr\xE9c\xE9dente :"),ko.forEach(t),At=c(e),m(we.$$.fragment,e),Pt=c(e),Xe=l(e,"P",{});var jo=i(Xe);_r=r(jo,"Pour s\u2019assurer que tout se passera bien pendant l\u2019entra\xEEnement, nous transmettons notre batch \xE0 ce mod\xE8le :"),jo.forEach(t),xt=c(e),m(ze.$$.fragment,e),Ct=c(e),m(ye.$$.fragment,e),St=c(e),O=l(e,"P",{});var ls=i(O);vr=r(ls,"Tous les mod\xE8les \u{1F917} "),ys=l(ls,"EM",{});var Eo=i(ys);br=r(Eo,"Transformers"),Eo.forEach(t),$r=r(ls," renvoient la perte lorsque les "),As=l(ls,"CODE",{});var wo=i(As);qr=r(wo,"labels"),wo.forEach(t),gr=r(ls," sont fournis. Nous obtenons \xE9galement les logits (deux pour chaque entr\xE9e de notre batch, donc un tenseur de taille 8 x 2)."),ls.forEach(t),Dt=c(e),y=l(e,"P",{});var F=i(y);kr=r(F,"Nous sommes presque pr\xEAts \xE0 \xE9crire notre boucle d\u2019entra\xEEnement ! Il nous manque juste deux choses : un optimiseur et un planificateur de taux d\u2019apprentissage. Puisque nous essayons de reproduire \xE0 la main ce que fait la fonction "),Ps=l(F,"CODE",{});var zo=i(Ps);jr=r(zo,"Trainer"),zo.forEach(t),Er=r(F,", utilisons les m\xEAmes param\xE8tres par d\xE9faut. L\u2019optimiseur utilis\xE9 par "),xs=l(F,"CODE",{});var yo=i(xs);wr=r(yo,"Trainer"),yo.forEach(t),zr=r(F," est "),Cs=l(F,"CODE",{});var Ao=i(Cs);yr=r(Ao,"AdamW"),Ao.forEach(t),Ar=r(F,", qui est le m\xEAme qu\u2019Adam, mais avec une torsion pour la r\xE9gularisation par d\xE9croissance de poids (voir "),Ae=l(F,"A",{href:!0,rel:!0});var Po=i(Ae);Ss=l(Po,"EM",{});var xo=i(Ss);Pr=r(xo,"Decoupled Weight Decay Regularization"),xo.forEach(t),Po.forEach(t),xr=r(F," par Ilya Loshchilov et Frank Hutter) :"),F.forEach(t),Mt=c(e),m(Pe.$$.fragment,e),Tt=c(e),N=l(e,"P",{});var is=i(N);Cr=r(is,"Enfin, le planificateur du taux d\u2019apprentissage utilis\xE9 par d\xE9faut est juste une d\xE9croissance lin\xE9aire de la valeur maximale (5e-5) \xE0 0. Pour le d\xE9finir correctement, nous devons conna\xEEtre le nombre d\u2019\xE9tapes d\u2019entra\xEEnement que nous prendrons, qui est le nombre d\u2019\xE9poques que nous voulons ex\xE9cuter multipli\xE9 par le nombre de batch d\u2019entra\xEEnement (qui est la longueur de notre "),Ds=l(is,"EM",{});var Co=i(Ds);Sr=r(Co,"dataloader"),Co.forEach(t),Dr=r(is," d\u2019entra\xEEnement). Le "),Ms=l(is,"CODE",{});var So=i(Ms);Mr=r(So,"Trainer"),So.forEach(t),Tr=r(is," utilise trois \xE9poques par d\xE9faut, nous allons donc suivre \xE7a :"),is.forEach(t),Lt=c(e),m(xe.$$.fragment,e),Ot=c(e),m(Ce.$$.fragment,e),Nt=c(e),J=l(e,"H3",{class:!0});var ga=i(J);se=l(ga,"A",{id:!0,class:!0,href:!0});var Do=i(se);Ts=l(Do,"SPAN",{});var Mo=i(Ts);m(Se.$$.fragment,Mo),Mo.forEach(t),Do.forEach(t),Lr=c(ga),Ls=l(ga,"SPAN",{});var To=i(Ls);Or=r(To,"La boucle d'entra\xEEnement"),To.forEach(t),ga.forEach(t),Ut=c(e),te=l(e,"P",{});var ka=i(te);Nr=r(ka,"Une derni\xE8re chose : nous voulons utiliser le GPU si nous en avons un (sur un CPU, l\u2019entra\xEEnement peut prendre plusieurs heures au lieu de quelques minutes). Pour ce faire, nous d\xE9finissons un "),Os=l(ka,"CODE",{});var Lo=i(Os);Ur=r(Lo,"device"),Lo.forEach(t),Wr=r(ka," sur lequel nous allons placer notre mod\xE8le et nos batchs :"),ka.forEach(t),Wt=c(e),m(De.$$.fragment,e),Ft=c(e),m(Me.$$.fragment,e),It=c(e),ae=l(e,"P",{});var ja=i(ae);Fr=r(ja,"Nous sommes maintenant pr\xEAts \xE0 entra\xEEner ! Pour avoir une id\xE9e du moment o\xF9 l\u2019entra\xEEnement sera termin\xE9, nous ajoutons une barre de progression sur le nombre d\u2019\xE9tapes d\u2019entra\xEEnement, en utilisant la biblioth\xE8que "),Ns=l(ja,"CODE",{});var Oo=i(Ns);Ir=r(Oo,"tqdm"),Oo.forEach(t),Gr=r(ja," :"),ja.forEach(t),Gt=c(e),m(Te.$$.fragment,e),Vt=c(e),Ze=l(e,"P",{});var No=i(Ze);Vr=r(No,"Vous pouvez voir que le c\u0153ur de la boucle d\u2019entra\xEEnement ressemble beaucoup \xE0 celui de l\u2019introduction. Nous n\u2019avons pas demand\xE9 de rapport, donc cette boucle d\u2019entra\xEEnement ne nous dira rien sur les r\xE9sultats du mod\xE8le. Pour cela, nous devons ajouter une boucle d\u2019\xE9valuation."),No.forEach(t),Ht=c(e),Y=l(e,"H3",{class:!0});var Ea=i(Y);re=l(Ea,"A",{id:!0,class:!0,href:!0});var Uo=i(re);Us=l(Uo,"SPAN",{});var Wo=i(Us);m(Le.$$.fragment,Wo),Wo.forEach(t),Uo.forEach(t),Hr=c(Ea),Ws=l(Ea,"SPAN",{});var Fo=i(Ws);Rr=r(Fo,"La boucle d'\xE9valuation"),Fo.forEach(t),Ea.forEach(t),Rt=c(e),A=l(e,"P",{});var I=i(A);Br=r(I,"Comme nous l\u2019avons fait pr\xE9c\xE9demment, nous allons utiliser une m\xE9trique fournie par la biblioth\xE8que \u{1F917} "),Fs=l(I,"EM",{});var Io=i(Fs);Jr=r(Io,"Datasets"),Io.forEach(t),Yr=r(I,". Nous avons d\xE9j\xE0 vu la m\xE9thode "),Is=l(I,"CODE",{});var Go=i(Is);Qr=r(Go,"metric.compute()"),Go.forEach(t),Kr=r(I,", mais les m\xE9triques peuvent en fait accumuler des batchs pour nous au fur et \xE0 mesure que nous parcourons la boucle de pr\xE9diction avec la m\xE9thode "),Gs=l(I,"CODE",{});var Vo=i(Gs);Xr=r(Vo,"add_batch()"),Vo.forEach(t),Zr=r(I,". Une fois que nous avons accumul\xE9 tous les batchs, nous pouvons obtenir le r\xE9sultat final avec "),Vs=l(I,"CODE",{});var Ho=i(Vs);en=r(Ho,"metric.compute()"),Ho.forEach(t),sn=r(I,". Voici comment impl\xE9menter tout cela dans une boucle d\u2019\xE9valuation :"),I.forEach(t),Bt=c(e),m(Oe.$$.fragment,e),Jt=c(e),m(Ne.$$.fragment,e),Yt=c(e),es=l(e,"P",{});var Ro=i(es);tn=r(Ro,"Une fois encore, vos r\xE9sultats seront l\xE9g\xE8rement diff\xE9rents en raison du caract\xE8re al\xE9atoire de l\u2019initialisation de la t\xEAte du mod\xE8le et du m\xE9lange des donn\xE9es, mais ils devraient se situer dans la m\xEAme fourchette."),Ro.forEach(t),Qt=c(e),m(ne.$$.fragment,e),Kt=c(e),Q=l(e,"H3",{class:!0});var wa=i(Q);oe=l(wa,"A",{id:!0,class:!0,href:!0});var Bo=i(oe);Hs=l(Bo,"SPAN",{});var Jo=i(Hs);m(Ue.$$.fragment,Jo),Jo.forEach(t),Bo.forEach(t),an=c(wa),Rs=l(wa,"SPAN",{});var Yo=i(Rs);rn=r(Yo,"Optimisez votre boucle d'entra\xEEnement avec \u{1F917} *Accelerate*"),Yo.forEach(t),wa.forEach(t),Xt=c(e),m(We.$$.fragment,e),Zt=c(e),U=l(e,"P",{});var us=i(U);nn=r(us,"La boucle d\u2019entra\xEEnement que nous avons d\xE9finie pr\xE9c\xE9demment fonctionne bien sur un seul CPU ou GPU. Mais en utilisant la biblioth\xE8que "),le=l(us,"A",{href:!0,rel:!0});var Xn=i(le);on=r(Xn,"\u{1F917} "),Bs=l(Xn,"EM",{});var Qo=i(Bs);ln=r(Qo,"Accelerate"),Qo.forEach(t),Xn.forEach(t),un=r(us,", il suffit de quelques ajustements pour permettre un entra\xEEnement distribu\xE9 sur plusieurs GPUs ou TPUs. En partant de la cr\xE9ation des "),Js=l(us,"EM",{});var Ko=i(Js);pn=r(Ko,"dataloaders"),Ko.forEach(t),cn=r(us," d\u2019entra\xEEnement et de validation, voici \xE0 quoi ressemble notre boucle d\u2019entra\xEEnement manuel :"),us.forEach(t),ea=c(e),m(Fe.$$.fragment,e),sa=c(e),ss=l(e,"P",{});var Xo=i(ss);dn=r(Xo,"Et voici les changements :"),Xo.forEach(t),ta=c(e),m(Ie.$$.fragment,e),aa=c(e),P=l(e,"P",{});var G=i(P);mn=r(G,"La premi\xE8re ligne \xE0 ajouter est la ligne d\u2019importation. La deuxi\xE8me ligne instancie un objet "),Ys=l(G,"CODE",{});var Zo=i(Ys);fn=r(Zo,"Accelerator"),Zo.forEach(t),hn=r(G," qui va regarder l\u2019environnement et initialiser la bonne configuration distribu\xE9e. \u{1F917} "),Qs=l(G,"EM",{});var el=i(Qs);_n=r(el,"Accelerate"),el.forEach(t),vn=r(G," g\xE8re le placement des p\xE9riph\xE9riques pour vous, donc vous pouvez enlever les lignes qui placent le mod\xE8le sur le p\xE9riph\xE9rique (ou, si vous pr\xE9f\xE9rez, les changer pour utiliser "),Ks=l(G,"CODE",{});var sl=i(Ks);bn=r(sl,"accelerator.device"),sl.forEach(t),$n=r(G," au lieu de "),Xs=l(G,"CODE",{});var tl=i(Xs);qn=r(tl,"device"),tl.forEach(t),gn=r(G,")."),G.forEach(t),ra=c(e),E=l(e,"P",{});var x=i(E);kn=r(x,"Ensuite, le gros du travail est fait dans la ligne qui envoie les "),Zs=l(x,"EM",{});var al=i(Zs);jn=r(al,"dataloaders"),al.forEach(t),En=r(x,", le mod\xE8le, et l\u2019optimiseur \xE0 "),et=l(x,"CODE",{});var rl=i(et);wn=r(rl,"accelerator.prepare()"),rl.forEach(t),zn=r(x,". Cela va envelopper ces objets dans le conteneur appropri\xE9 pour s\u2019assurer que votre entra\xEEnement distribu\xE9 fonctionne comme pr\xE9vu. Les changements restants \xE0 faire sont la suppression de la ligne qui met le batch sur le "),st=l(x,"CODE",{});var nl=i(st);yn=r(nl,"device"),nl.forEach(t),An=r(x," (encore une fois, si vous voulez le garder, vous pouvez juste le changer pour utiliser "),tt=l(x,"CODE",{});var ol=i(tt);Pn=r(ol,"accelerator.device"),ol.forEach(t),xn=r(x,") et le remplacement de "),at=l(x,"CODE",{});var ll=i(at);Cn=r(ll,"loss.backward()"),ll.forEach(t),Sn=r(x," par "),rt=l(x,"CODE",{});var il=i(rt);Dn=r(il,"accelerator.backward(loss)"),il.forEach(t),Mn=r(x,"."),x.forEach(t),na=c(e),m(ie.$$.fragment,e),oa=c(e),ue=l(e,"P",{});var za=i(ue);Tn=r(za,"Si vous souhaitez faire un copier-coller pour jouer, voici \xE0 quoi ressemble la boucle d\u2019entra\xEEnement compl\xE8te avec \u{1F917} "),nt=l(za,"EM",{});var ul=i(nt);Ln=r(ul,"Accelerate"),ul.forEach(t),On=r(za," :"),za.forEach(t),la=c(e),m(Ge.$$.fragment,e),ia=c(e),pe=l(e,"P",{});var ya=i(pe);Nn=r(ya,"En pla\xE7ant ceci dans un script "),ot=l(ya,"CODE",{});var pl=i(ot);Un=r(pl,"train.py"),pl.forEach(t),Wn=r(ya,", cela sera ex\xE9cutable sur n\u2019importe quel type d\u2019installation distribu\xE9e. Pour l\u2019essayer dans votre installation distribu\xE9e, ex\xE9cutez la commande :"),ya.forEach(t),ua=c(e),m(Ve.$$.fragment,e),pa=c(e),ts=l(e,"P",{});var cl=i(ts);Fn=r(cl,"qui vous demandera de r\xE9pondre \xE0 quelques questions et enregistrera vos r\xE9ponses dans un fichier de configuration utilis\xE9 par cette commande :"),cl.forEach(t),ca=c(e),m(He.$$.fragment,e),da=c(e),as=l(e,"P",{});var dl=i(as);In=r(dl,"qui lancera l\u2019entra\xEEnement distribu\xE9."),dl.forEach(t),ma=c(e),W=l(e,"P",{});var ps=i(W);Gn=r(ps,"Si vous voulez essayer ceci dans un "),lt=l(ps,"EM",{});var ml=i(lt);Vn=r(ml,"notebook"),ml.forEach(t),Hn=r(ps," (par exemple, pour le tester avec des TPUs sur Colab), collez simplement le code dans une "),it=l(ps,"CODE",{});var fl=i(it);Rn=r(fl,"training_function()"),fl.forEach(t),Bn=r(ps," et lancez une derni\xE8re cellule avec :"),ps.forEach(t),fa=c(e),m(Re.$$.fragment,e),ha=c(e),ce=l(e,"P",{});var Aa=i(ce);Jn=r(Aa,"Vous trouverez d\u2019autres exemples dans le d\xE9p\xF4t d\u2019"),de=l(Aa,"A",{href:!0,rel:!0});var Zn=i(de);Yn=r(Zn,"\u{1F917} "),ut=l(Zn,"EM",{});var hl=i(ut);Qn=r(hl,"Accelerate"),hl.forEach(t),Zn.forEach(t),Kn=r(Aa,"."),Aa.forEach(t),this.h()},h(){b($,"name","hf:doc:metadata"),b($,"content",JSON.stringify(yl)),b(w,"id","un-entranement-complet"),b(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(w,"href","#un-entranement-complet"),b(j,"class","relative group"),b(X,"id","prparer-lentranement"),b(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(X,"href","#prparer-lentranement"),b(R,"class","relative group"),b(Ae,"href","https://arxiv.org/abs/1711.05101"),b(Ae,"rel","nofollow"),b(se,"id","la-boucle-dentranement"),b(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(se,"href","#la-boucle-dentranement"),b(J,"class","relative group"),b(re,"id","la-boucle-dvaluation"),b(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(re,"href","#la-boucle-dvaluation"),b(Y,"class","relative group"),b(oe,"id","optimisez-votre-boucle-dentranement-avec-accelerate"),b(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(oe,"href","#optimisez-votre-boucle-dentranement-avec-accelerate"),b(Q,"class","relative group"),b(le,"href","https://github.com/huggingface/accelerate"),b(le,"rel","nofollow"),b(de,"href","https://github.com/huggingface/accelerate/tree/main/examples"),b(de,"rel","nofollow")},m(e,n){s(document.head,$),u(e,z,n),u(e,j,n),s(j,w),s(w,g),f(k,g,null),s(j,he),s(j,V),s(V,H),u(e,C,n),f(M,e,n),u(e,_e,n),f(ve,e,n),u(e,dt,n),u(e,K,n),s(K,Pa),s(K,cs),s(cs,xa),s(K,Ca),u(e,mt,n),f(be,e,n),u(e,ft,n),u(e,R,n),s(R,X),s(X,ds),f($e,ds,null),s(R,Sa),s(R,ms),s(ms,Da),u(e,ht,n),u(e,S,n),s(S,Ma),s(S,fs),s(fs,Ta),s(S,La),s(S,hs),s(hs,Oa),s(S,Na),s(S,_s),s(_s,Ua),s(S,Wa),u(e,_t,n),u(e,T,n),s(T,B),s(B,Fa),s(B,vs),s(vs,Ia),s(B,Ga),s(B,bs),s(bs,Va),s(B,Ha),s(T,Ra),s(T,D),s(D,Ba),s(D,$s),s($s,Ja),s(D,Ya),s(D,qs),s(qs,Qa),s(D,Ka),s(D,gs),s(gs,Xa),s(D,Za),s(T,er),s(T,ks),s(ks,sr),u(e,vt,n),u(e,Z,n),s(Z,tr),s(Z,js),s(js,ar),s(Z,rr),u(e,bt,n),f(qe,e,n),u(e,$t,n),u(e,Ye,n),s(Ye,nr),u(e,qt,n),f(ge,e,n),u(e,gt,n),u(e,ee,n),s(ee,or),s(ee,Es),s(Es,lr),s(ee,ir),u(e,kt,n),f(ke,e,n),u(e,jt,n),u(e,Qe,n),s(Qe,ur),u(e,Et,n),f(je,e,n),u(e,wt,n),f(Ee,e,n),u(e,zt,n),u(e,L,n),s(L,pr),s(L,ws),s(ws,cr),s(L,dr),s(L,zs),s(zs,mr),s(L,fr),u(e,yt,n),u(e,Ke,n),s(Ke,hr),u(e,At,n),f(we,e,n),u(e,Pt,n),u(e,Xe,n),s(Xe,_r),u(e,xt,n),f(ze,e,n),u(e,Ct,n),f(ye,e,n),u(e,St,n),u(e,O,n),s(O,vr),s(O,ys),s(ys,br),s(O,$r),s(O,As),s(As,qr),s(O,gr),u(e,Dt,n),u(e,y,n),s(y,kr),s(y,Ps),s(Ps,jr),s(y,Er),s(y,xs),s(xs,wr),s(y,zr),s(y,Cs),s(Cs,yr),s(y,Ar),s(y,Ae),s(Ae,Ss),s(Ss,Pr),s(y,xr),u(e,Mt,n),f(Pe,e,n),u(e,Tt,n),u(e,N,n),s(N,Cr),s(N,Ds),s(Ds,Sr),s(N,Dr),s(N,Ms),s(Ms,Mr),s(N,Tr),u(e,Lt,n),f(xe,e,n),u(e,Ot,n),f(Ce,e,n),u(e,Nt,n),u(e,J,n),s(J,se),s(se,Ts),f(Se,Ts,null),s(J,Lr),s(J,Ls),s(Ls,Or),u(e,Ut,n),u(e,te,n),s(te,Nr),s(te,Os),s(Os,Ur),s(te,Wr),u(e,Wt,n),f(De,e,n),u(e,Ft,n),f(Me,e,n),u(e,It,n),u(e,ae,n),s(ae,Fr),s(ae,Ns),s(Ns,Ir),s(ae,Gr),u(e,Gt,n),f(Te,e,n),u(e,Vt,n),u(e,Ze,n),s(Ze,Vr),u(e,Ht,n),u(e,Y,n),s(Y,re),s(re,Us),f(Le,Us,null),s(Y,Hr),s(Y,Ws),s(Ws,Rr),u(e,Rt,n),u(e,A,n),s(A,Br),s(A,Fs),s(Fs,Jr),s(A,Yr),s(A,Is),s(Is,Qr),s(A,Kr),s(A,Gs),s(Gs,Xr),s(A,Zr),s(A,Vs),s(Vs,en),s(A,sn),u(e,Bt,n),f(Oe,e,n),u(e,Jt,n),f(Ne,e,n),u(e,Yt,n),u(e,es,n),s(es,tn),u(e,Qt,n),f(ne,e,n),u(e,Kt,n),u(e,Q,n),s(Q,oe),s(oe,Hs),f(Ue,Hs,null),s(Q,an),s(Q,Rs),s(Rs,rn),u(e,Xt,n),f(We,e,n),u(e,Zt,n),u(e,U,n),s(U,nn),s(U,le),s(le,on),s(le,Bs),s(Bs,ln),s(U,un),s(U,Js),s(Js,pn),s(U,cn),u(e,ea,n),f(Fe,e,n),u(e,sa,n),u(e,ss,n),s(ss,dn),u(e,ta,n),f(Ie,e,n),u(e,aa,n),u(e,P,n),s(P,mn),s(P,Ys),s(Ys,fn),s(P,hn),s(P,Qs),s(Qs,_n),s(P,vn),s(P,Ks),s(Ks,bn),s(P,$n),s(P,Xs),s(Xs,qn),s(P,gn),u(e,ra,n),u(e,E,n),s(E,kn),s(E,Zs),s(Zs,jn),s(E,En),s(E,et),s(et,wn),s(E,zn),s(E,st),s(st,yn),s(E,An),s(E,tt),s(tt,Pn),s(E,xn),s(E,at),s(at,Cn),s(E,Sn),s(E,rt),s(rt,Dn),s(E,Mn),u(e,na,n),f(ie,e,n),u(e,oa,n),u(e,ue,n),s(ue,Tn),s(ue,nt),s(nt,Ln),s(ue,On),u(e,la,n),f(Ge,e,n),u(e,ia,n),u(e,pe,n),s(pe,Nn),s(pe,ot),s(ot,Un),s(pe,Wn),u(e,ua,n),f(Ve,e,n),u(e,pa,n),u(e,ts,n),s(ts,Fn),u(e,ca,n),f(He,e,n),u(e,da,n),u(e,as,n),s(as,In),u(e,ma,n),u(e,W,n),s(W,Gn),s(W,lt),s(lt,Vn),s(W,Hn),s(W,it),s(it,Rn),s(W,Bn),u(e,fa,n),f(Re,e,n),u(e,ha,n),u(e,ce,n),s(ce,Jn),s(ce,de),s(de,Yn),s(de,ut),s(ut,Qn),s(ce,Kn),_a=!0},p(e,[n]){const Be={};n&2&&(Be.$$scope={dirty:n,ctx:e}),ne.$set(Be);const pt={};n&2&&(pt.$$scope={dirty:n,ctx:e}),ie.$set(pt)},i(e){_a||(h(k.$$.fragment,e),h(M.$$.fragment,e),h(ve.$$.fragment,e),h(be.$$.fragment,e),h($e.$$.fragment,e),h(qe.$$.fragment,e),h(ge.$$.fragment,e),h(ke.$$.fragment,e),h(je.$$.fragment,e),h(Ee.$$.fragment,e),h(we.$$.fragment,e),h(ze.$$.fragment,e),h(ye.$$.fragment,e),h(Pe.$$.fragment,e),h(xe.$$.fragment,e),h(Ce.$$.fragment,e),h(Se.$$.fragment,e),h(De.$$.fragment,e),h(Me.$$.fragment,e),h(Te.$$.fragment,e),h(Le.$$.fragment,e),h(Oe.$$.fragment,e),h(Ne.$$.fragment,e),h(ne.$$.fragment,e),h(Ue.$$.fragment,e),h(We.$$.fragment,e),h(Fe.$$.fragment,e),h(Ie.$$.fragment,e),h(ie.$$.fragment,e),h(Ge.$$.fragment,e),h(Ve.$$.fragment,e),h(He.$$.fragment,e),h(Re.$$.fragment,e),_a=!0)},o(e){_(k.$$.fragment,e),_(M.$$.fragment,e),_(ve.$$.fragment,e),_(be.$$.fragment,e),_($e.$$.fragment,e),_(qe.$$.fragment,e),_(ge.$$.fragment,e),_(ke.$$.fragment,e),_(je.$$.fragment,e),_(Ee.$$.fragment,e),_(we.$$.fragment,e),_(ze.$$.fragment,e),_(ye.$$.fragment,e),_(Pe.$$.fragment,e),_(xe.$$.fragment,e),_(Ce.$$.fragment,e),_(Se.$$.fragment,e),_(De.$$.fragment,e),_(Me.$$.fragment,e),_(Te.$$.fragment,e),_(Le.$$.fragment,e),_(Oe.$$.fragment,e),_(Ne.$$.fragment,e),_(ne.$$.fragment,e),_(Ue.$$.fragment,e),_(We.$$.fragment,e),_(Fe.$$.fragment,e),_(Ie.$$.fragment,e),_(ie.$$.fragment,e),_(Ge.$$.fragment,e),_(Ve.$$.fragment,e),_(He.$$.fragment,e),_(Re.$$.fragment,e),_a=!1},d(e){t($),e&&t(z),e&&t(j),v(k),e&&t(C),v(M,e),e&&t(_e),v(ve,e),e&&t(dt),e&&t(K),e&&t(mt),v(be,e),e&&t(ft),e&&t(R),v($e),e&&t(ht),e&&t(S),e&&t(_t),e&&t(T),e&&t(vt),e&&t(Z),e&&t(bt),v(qe,e),e&&t($t),e&&t(Ye),e&&t(qt),v(ge,e),e&&t(gt),e&&t(ee),e&&t(kt),v(ke,e),e&&t(jt),e&&t(Qe),e&&t(Et),v(je,e),e&&t(wt),v(Ee,e),e&&t(zt),e&&t(L),e&&t(yt),e&&t(Ke),e&&t(At),v(we,e),e&&t(Pt),e&&t(Xe),e&&t(xt),v(ze,e),e&&t(Ct),v(ye,e),e&&t(St),e&&t(O),e&&t(Dt),e&&t(y),e&&t(Mt),v(Pe,e),e&&t(Tt),e&&t(N),e&&t(Lt),v(xe,e),e&&t(Ot),v(Ce,e),e&&t(Nt),e&&t(J),v(Se),e&&t(Ut),e&&t(te),e&&t(Wt),v(De,e),e&&t(Ft),v(Me,e),e&&t(It),e&&t(ae),e&&t(Gt),v(Te,e),e&&t(Vt),e&&t(Ze),e&&t(Ht),e&&t(Y),v(Le),e&&t(Rt),e&&t(A),e&&t(Bt),v(Oe,e),e&&t(Jt),v(Ne,e),e&&t(Yt),e&&t(es),e&&t(Qt),v(ne,e),e&&t(Kt),e&&t(Q),v(Ue),e&&t(Xt),v(We,e),e&&t(Zt),e&&t(U),e&&t(ea),v(Fe,e),e&&t(sa),e&&t(ss),e&&t(ta),v(Ie,e),e&&t(aa),e&&t(P),e&&t(ra),e&&t(E),e&&t(na),v(ie,e),e&&t(oa),e&&t(ue),e&&t(la),v(Ge,e),e&&t(ia),e&&t(pe),e&&t(ua),v(Ve,e),e&&t(pa),e&&t(ts),e&&t(ca),v(He,e),e&&t(da),e&&t(as),e&&t(ma),e&&t(W),e&&t(fa),v(Re,e),e&&t(ha),e&&t(ce)}}}const yl={local:"un-entranement-complet",sections:[{local:"prparer-lentranement",title:"Pr\xE9parer l'entra\xEEnement"},{local:"la-boucle-dentranement",title:"La boucle d'entra\xEEnement"},{local:"la-boucle-dvaluation",title:"La boucle d'\xE9valuation"},{local:"optimisez-votre-boucle-dentranement-avec-accelerate",title:"Optimisez votre boucle d'entra\xEEnement avec \u{1F917} *Accelerate*"}],title:"Un entra\xEEnement complet"};function Al(Je){return kl(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Tl extends bl{constructor($){super();$l(this,$,Al,zl,ql,{})}}export{Tl as default,yl as metadata};
