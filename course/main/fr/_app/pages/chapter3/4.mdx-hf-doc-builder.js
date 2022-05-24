import{S as gl,i as kl,s as jl,e as o,k as p,w as d,t as a,M as El,c as l,d as t,m as c,a as i,x as m,h as r,b,G as s,g as u,y as f,q as h,o as _,B as v,v as wl}from"../../chunks/vendor-hf-doc-builder.js";import{T as $l}from"../../chunks/Tip-hf-doc-builder.js";import{Y as ql}from"../../chunks/Youtube-hf-doc-builder.js";import{I as dt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as q}from"../../chunks/CodeBlock-hf-doc-builder.js";import{D as zl}from"../../chunks/DocNotebookDropdown-hf-doc-builder.js";function yl(Je){let $,z,j,w,g,k,he,V;return{c(){$=o("p"),z=a("\u270F\uFE0F "),j=o("strong"),w=a("Essayez"),g=a(" Modifiez la boucle d\u2019entra\xEEnement pr\xE9c\xE9dente pour "),k=o("em"),he=a("finetuner"),V=a(" votre mod\xE8le sur le jeu de donn\xE9es SST-2.")},l(H){$=l(H,"P",{});var C=i($);z=r(C,"\u270F\uFE0F "),j=l(C,"STRONG",{});var M=i(j);w=r(M,"Essayez"),M.forEach(t),g=r(C," Modifiez la boucle d\u2019entra\xEEnement pr\xE9c\xE9dente pour "),k=l(C,"EM",{});var _e=i(k);he=r(_e,"finetuner"),_e.forEach(t),V=r(C," votre mod\xE8le sur le jeu de donn\xE9es SST-2."),C.forEach(t)},m(H,C){u(H,$,C),s($,z),s($,j),s(j,w),s($,g),s($,k),s(k,he),s($,V)},d(H){H&&t($)}}}function Al(Je){let $,z,j,w;return{c(){$=a('\u26A0\uFE0F Afin de b\xE9n\xE9ficier de la rapidit\xE9 offerte par les TPUs du Cloud, nous vous recommandons de rembourrer vos \xE9chantillons \xE0 une longueur fixe avec les arguments `padding="max_length"` et `max_length` du '),z=o("i"),j=a("tokenizer"),w=a(".")},l(g){$=r(g,'\u26A0\uFE0F Afin de b\xE9n\xE9ficier de la rapidit\xE9 offerte par les TPUs du Cloud, nous vous recommandons de rembourrer vos \xE9chantillons \xE0 une longueur fixe avec les arguments `padding="max_length"` et `max_length` du '),z=l(g,"I",{});var k=i(z);j=r(k,"tokenizer"),k.forEach(t),w=r(g,".")},m(g,k){u(g,$,k),u(g,z,k),s(z,j),u(g,w,k)},d(g){g&&t($),g&&t(z),g&&t(w)}}}function Pl(Je){let $,z,j,w,g,k,he,V,H,C,M,_e,ve,mt,K,xa,ds,Ca,Sa,ft,be,ht,R,X,ms,$e,Da,fs,Ma,_t,S,Ta,hs,La,Oa,_s,Na,Ua,vs,Wa,Fa,vt,T,B,Ia,bs,Ga,Va,$s,Ha,Ra,Ba,D,Ja,qs,Ya,Qa,gs,Ka,Xa,ks,Za,er,sr,js,tr,bt,Z,ar,Es,rr,nr,$t,qe,qt,Ye,or,gt,ge,kt,ee,lr,ws,ir,ur,jt,ke,Et,Qe,pr,wt,je,zt,Ee,yt,L,cr,zs,dr,mr,ys,fr,hr,At,Ke,_r,Pt,we,xt,Xe,vr,Ct,ze,St,ye,Dt,O,br,As,$r,qr,Ps,gr,kr,Mt,y,jr,xs,Er,wr,Cs,zr,yr,Ss,Ar,Pr,Ae,Ds,xr,Cr,Tt,Pe,Lt,N,Sr,Ms,Dr,Mr,Ts,Tr,Lr,Ot,xe,Nt,Ce,Ut,J,se,Ls,Se,Or,Os,Nr,Wt,te,Ur,Ns,Wr,Fr,Ft,De,It,Me,Gt,ae,Ir,Us,Gr,Vr,Vt,Te,Ht,Ze,Hr,Rt,Y,re,Ws,Le,Rr,Fs,Br,Bt,A,Jr,Is,Yr,Qr,Gs,Kr,Xr,Vs,Zr,en,Hs,sn,tn,Jt,Oe,Yt,Ne,Qt,es,an,Kt,ne,Xt,Q,oe,Rs,Ue,rn,ss,nn,Bs,on,Zt,We,ea,U,ln,le,un,Js,pn,cn,Ys,dn,mn,sa,Fe,ta,ts,fn,aa,Ie,ra,P,hn,Qs,_n,vn,Ks,bn,$n,Xs,qn,gn,Zs,kn,jn,na,E,En,et,wn,zn,st,yn,An,tt,Pn,xn,at,Cn,Sn,rt,Dn,Mn,nt,Tn,Ln,oa,ie,la,ue,On,ot,Nn,Un,ia,Ge,ua,pe,Wn,lt,Fn,In,pa,Ve,ca,as,Gn,da,He,ma,rs,Vn,fa,W,Hn,it,Rn,Bn,ut,Jn,Yn,ha,Re,_a,ce,Qn,de,Kn,pt,Xn,Zn,va;return k=new dt({}),M=new zl({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter3/section4.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter3/section4.ipynb"}]}}),ve=new ql({props:{id:"Dh9CL8fyG80"}}),be=new q({props:{code:`from datasets import load_dataset
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
data_collator = DataCollatorWithPadding(tokenizer=tokenizer)`}}),$e=new dt({}),qe=new q({props:{code:`tokenized_datasets = tokenized_datasets.remove_columns(["sentence1", "sentence2", "idx"])
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
<span class="hljs-built_in">print</span>(num_training_steps)`}}),Ce=new q({props:{code:"1377",highlighted:'<span class="hljs-number">1377</span>'}}),Se=new dt({}),De=new q({props:{code:`import torch

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
        progress_bar.update(<span class="hljs-number">1</span>)`}}),Le=new dt({}),Oe=new q({props:{code:`from datasets import load_metric

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

metric.compute()`}}),Ne=new q({props:{code:"{'accuracy': 0.8431372549019608, 'f1': 0.8907849829351535}",highlighted:'{<span class="hljs-string">&#x27;accuracy&#x27;</span>: <span class="hljs-number">0.8431372549019608</span>, <span class="hljs-string">&#x27;f1&#x27;</span>: <span class="hljs-number">0.8907849829351535</span>}'}}),ne=new $l({props:{$$slots:{default:[yl]},$$scope:{ctx:Je}}}),Ue=new dt({}),We=new ql({props:{id:"s7dy8QRgjJ0"}}),Fe=new q({props:{code:`from transformers import AdamW, AutoModelForSequenceClassification, get_scheduler

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
          progress_bar.update(1)`}}),ie=new $l({props:{$$slots:{default:[Al]},$$scope:{ctx:Je}}}),Ge=new q({props:{code:`from accelerate import Accelerator
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

notebook_launcher(training_function)`}}),{c(){$=o("meta"),z=p(),j=o("h1"),w=o("a"),g=o("span"),d(k.$$.fragment),he=p(),V=o("span"),H=a("Un entra\xEEnement complet"),C=p(),d(M.$$.fragment),_e=p(),d(ve.$$.fragment),mt=p(),K=o("p"),xa=a("Maintenant nous allons voir comment obtenir les m\xEAmes r\xE9sultats que dans la derni\xE8re section sans utiliser la classe "),ds=o("code"),Ca=a("Trainer"),Sa=a(". Encore une fois, nous supposons que vous avez fait le traitement des donn\xE9es dans la section 2. Voici un court r\xE9sum\xE9 couvrant tout ce dont vous aurez besoin :"),ft=p(),d(be.$$.fragment),ht=p(),R=o("h3"),X=o("a"),ms=o("span"),d($e.$$.fragment),Da=p(),fs=o("span"),Ma=a("Pr\xE9parer l'entra\xEEnement"),_t=p(),S=o("p"),Ta=a("Avant d\u2019\xE9crire r\xE9ellement notre boucle d\u2019entra\xEEnement, nous devons d\xE9finir quelques objets. Les premiers sont les "),hs=o("em"),La=a("dataloaders"),Oa=a(" que nous utiliserons pour it\xE9rer sur les batchs. Mais avant de pouvoir d\xE9finir ces chargeurs de donn\xE9es, nous devons appliquer un peu de post-traitement \xE0 nos "),_s=o("code"),Na=a("tokenized_datasets"),Ua=a(", pour prendre soin de certaines choses que le "),vs=o("code"),Wa=a("Trainer"),Fa=a(" fait pour nous automatiquement. Sp\xE9cifiquement, nous devons :"),vt=p(),T=o("ul"),B=o("li"),Ia=a("supprimer les colonnes correspondant aux valeurs que le mod\xE8le n\u2019attend pas (comme les colonnes "),bs=o("code"),Ga=a("sentence1"),Va=a(" et "),$s=o("code"),Ha=a("sentence2"),Ra=a("),"),Ba=p(),D=o("li"),Ja=a("renommer la colonne "),qs=o("code"),Ya=a("label"),Qa=a(" en "),gs=o("code"),Ka=a("labels"),Xa=a(" (parce que le mod\xE8le s\u2019attend \xE0 ce que l\u2019argument soit nomm\xE9 "),ks=o("code"),Za=a("labels"),er=a("),"),sr=p(),js=o("li"),tr=a("d\xE9finir le format des jeux de donn\xE9es pour qu\u2019ils retournent des tenseurs PyTorch au lieu de listes."),bt=p(),Z=o("p"),ar=a("Notre "),Es=o("code"),rr=a("tokenized_datasets"),nr=a(" a une m\xE9thode pour chacune de ces \xE9tapes :"),$t=p(),d(qe.$$.fragment),qt=p(),Ye=o("p"),or=a("Nous pouvons alors v\xE9rifier que le r\xE9sultat ne comporte que des colonnes que notre mod\xE8le acceptera :"),gt=p(),d(ge.$$.fragment),kt=p(),ee=o("p"),lr=a("Maintenant que cela est fait, nous pouvons facilement d\xE9finir nos "),ws=o("em"),ir=a("dataloaders"),ur=a(" :"),jt=p(),d(ke.$$.fragment),Et=p(),Qe=o("p"),pr=a("Pour v\xE9rifier rapidement qu\u2019il n\u2019y a pas d\u2019erreur dans le traitement des donn\xE9es, nous pouvons inspecter un batch comme celui-ci :"),wt=p(),d(je.$$.fragment),zt=p(),d(Ee.$$.fragment),yt=p(),L=o("p"),cr=a("Notez que les formes r\xE9elles seront probablement l\xE9g\xE8rement diff\xE9rentes pour vous puisque nous avons d\xE9fini "),zs=o("code"),dr=a("shuffle=True"),mr=a(" pour le chargeur de donn\xE9es d\u2019entra\xEEnement et que nous "),ys=o("em"),fr=a("paddons"),hr=a(" \xE0 la longueur maximale dans le batch."),At=p(),Ke=o("p"),_r=a("Maintenant que nous en avons termin\xE9 avec le pr\xE9traitement des donn\xE9es (un objectif satisfaisant mais difficile \xE0 atteindre pour tout praticien d\u2019apprentissage automatique), passons au mod\xE8le. Nous l\u2019instancions exactement comme nous l\u2019avons fait dans la section pr\xE9c\xE9dente :"),Pt=p(),d(we.$$.fragment),xt=p(),Xe=o("p"),vr=a("Pour s\u2019assurer que tout se passera bien pendant l\u2019entra\xEEnement, nous transmettons notre batch \xE0 ce mod\xE8le :"),Ct=p(),d(ze.$$.fragment),St=p(),d(ye.$$.fragment),Dt=p(),O=o("p"),br=a("Tous les mod\xE8les \u{1F917} "),As=o("em"),$r=a("Transformers"),qr=a(" renvoient la perte lorsque les "),Ps=o("code"),gr=a("labels"),kr=a(" sont fournis. Nous obtenons \xE9galement les logits (deux pour chaque entr\xE9e de notre batch, donc un tenseur de taille 8 x 2)."),Mt=p(),y=o("p"),jr=a("Nous sommes presque pr\xEAts \xE0 \xE9crire notre boucle d\u2019entra\xEEnement ! Il nous manque juste deux choses : un optimiseur et un planificateur de taux d\u2019apprentissage. Puisque nous essayons de reproduire \xE0 la main ce que fait la fonction "),xs=o("code"),Er=a("Trainer"),wr=a(", utilisons les m\xEAmes param\xE8tres par d\xE9faut. L\u2019optimiseur utilis\xE9 par "),Cs=o("code"),zr=a("Trainer"),yr=a(" est "),Ss=o("code"),Ar=a("AdamW"),Pr=a(", qui est le m\xEAme qu\u2019Adam, mais avec une torsion pour la r\xE9gularisation par d\xE9croissance de poids (voir "),Ae=o("a"),Ds=o("em"),xr=a("Decoupled Weight Decay Regularization"),Cr=a(" par Ilya Loshchilov et Frank Hutter) :"),Tt=p(),d(Pe.$$.fragment),Lt=p(),N=o("p"),Sr=a("Enfin, le planificateur du taux d\u2019apprentissage utilis\xE9 par d\xE9faut est juste une d\xE9croissance lin\xE9aire de la valeur maximale (5e-5) \xE0 0. Pour le d\xE9finir correctement, nous devons conna\xEEtre le nombre d\u2019\xE9tapes d\u2019entra\xEEnement que nous prendrons, qui est le nombre d\u2019\xE9poques que nous voulons ex\xE9cuter multipli\xE9 par le nombre de batch d\u2019entra\xEEnement (qui est la longueur de notre "),Ms=o("em"),Dr=a("dataloader"),Mr=a(" d\u2019entra\xEEnement). Le "),Ts=o("code"),Tr=a("Trainer"),Lr=a(" utilise trois \xE9poques par d\xE9faut, nous allons donc suivre \xE7a :"),Ot=p(),d(xe.$$.fragment),Nt=p(),d(Ce.$$.fragment),Ut=p(),J=o("h3"),se=o("a"),Ls=o("span"),d(Se.$$.fragment),Or=p(),Os=o("span"),Nr=a("La boucle d'entra\xEEnement"),Wt=p(),te=o("p"),Ur=a("Une derni\xE8re chose : nous voulons utiliser le GPU si nous en avons un (sur un CPU, l\u2019entra\xEEnement peut prendre plusieurs heures au lieu de quelques minutes). Pour ce faire, nous d\xE9finissons un "),Ns=o("code"),Wr=a("device"),Fr=a(" sur lequel nous allons placer notre mod\xE8le et nos batchs :"),Ft=p(),d(De.$$.fragment),It=p(),d(Me.$$.fragment),Gt=p(),ae=o("p"),Ir=a("Nous sommes maintenant pr\xEAts \xE0 entra\xEEner ! Pour avoir une id\xE9e du moment o\xF9 l\u2019entra\xEEnement sera termin\xE9, nous ajoutons une barre de progression sur le nombre d\u2019\xE9tapes d\u2019entra\xEEnement, en utilisant la biblioth\xE8que "),Us=o("code"),Gr=a("tqdm"),Vr=a(" :"),Vt=p(),d(Te.$$.fragment),Ht=p(),Ze=o("p"),Hr=a("Vous pouvez voir que le c\u0153ur de la boucle d\u2019entra\xEEnement ressemble beaucoup \xE0 celui de l\u2019introduction. Nous n\u2019avons pas demand\xE9 de rapport, donc cette boucle d\u2019entra\xEEnement ne nous dira rien sur les r\xE9sultats du mod\xE8le. Pour cela, nous devons ajouter une boucle d\u2019\xE9valuation."),Rt=p(),Y=o("h3"),re=o("a"),Ws=o("span"),d(Le.$$.fragment),Rr=p(),Fs=o("span"),Br=a("La boucle d'\xE9valuation"),Bt=p(),A=o("p"),Jr=a("Comme nous l\u2019avons fait pr\xE9c\xE9demment, nous allons utiliser une m\xE9trique fournie par la biblioth\xE8que \u{1F917} "),Is=o("em"),Yr=a("Datasets"),Qr=a(". Nous avons d\xE9j\xE0 vu la m\xE9thode "),Gs=o("code"),Kr=a("metric.compute()"),Xr=a(", mais les m\xE9triques peuvent en fait accumuler des batchs pour nous au fur et \xE0 mesure que nous parcourons la boucle de pr\xE9diction avec la m\xE9thode "),Vs=o("code"),Zr=a("add_batch()"),en=a(". Une fois que nous avons accumul\xE9 tous les batchs, nous pouvons obtenir le r\xE9sultat final avec "),Hs=o("code"),sn=a("metric.compute()"),tn=a(". Voici comment impl\xE9menter tout cela dans une boucle d\u2019\xE9valuation :"),Jt=p(),d(Oe.$$.fragment),Yt=p(),d(Ne.$$.fragment),Qt=p(),es=o("p"),an=a("Une fois encore, vos r\xE9sultats seront l\xE9g\xE8rement diff\xE9rents en raison du caract\xE8re al\xE9atoire de l\u2019initialisation de la t\xEAte du mod\xE8le et du m\xE9lange des donn\xE9es, mais ils devraient se situer dans la m\xEAme fourchette."),Kt=p(),d(ne.$$.fragment),Xt=p(),Q=o("h3"),oe=o("a"),Rs=o("span"),d(Ue.$$.fragment),rn=p(),ss=o("span"),nn=a("Optimisez votre boucle d'entra\xEEnement avec \u{1F917} "),Bs=o("i"),on=a("Accelerate"),Zt=p(),d(We.$$.fragment),ea=p(),U=o("p"),ln=a("La boucle d\u2019entra\xEEnement que nous avons d\xE9finie pr\xE9c\xE9demment fonctionne bien sur un seul CPU ou GPU. Mais en utilisant la biblioth\xE8que "),le=o("a"),un=a("\u{1F917} "),Js=o("em"),pn=a("Accelerate"),cn=a(", il suffit de quelques ajustements pour permettre un entra\xEEnement distribu\xE9 sur plusieurs GPUs ou TPUs. En partant de la cr\xE9ation des "),Ys=o("em"),dn=a("dataloaders"),mn=a(" d\u2019entra\xEEnement et de validation, voici \xE0 quoi ressemble notre boucle d\u2019entra\xEEnement manuel :"),sa=p(),d(Fe.$$.fragment),ta=p(),ts=o("p"),fn=a("Et voici les changements :"),aa=p(),d(Ie.$$.fragment),ra=p(),P=o("p"),hn=a("La premi\xE8re ligne \xE0 ajouter est la ligne d\u2019importation. La deuxi\xE8me ligne instancie un objet "),Qs=o("code"),_n=a("Accelerator"),vn=a(" qui va regarder l\u2019environnement et initialiser la bonne configuration distribu\xE9e. \u{1F917} "),Ks=o("em"),bn=a("Accelerate"),$n=a(" g\xE8re le placement des p\xE9riph\xE9riques pour vous, donc vous pouvez enlever les lignes qui placent le mod\xE8le sur le p\xE9riph\xE9rique (ou, si vous pr\xE9f\xE9rez, les changer pour utiliser "),Xs=o("code"),qn=a("accelerator.device"),gn=a(" au lieu de "),Zs=o("code"),kn=a("device"),jn=a(")."),na=p(),E=o("p"),En=a("Ensuite, le gros du travail est fait dans la ligne qui envoie les "),et=o("em"),wn=a("dataloaders"),zn=a(", le mod\xE8le, et l\u2019optimiseur \xE0 "),st=o("code"),yn=a("accelerator.prepare()"),An=a(". Cela va envelopper ces objets dans le conteneur appropri\xE9 pour s\u2019assurer que votre entra\xEEnement distribu\xE9 fonctionne comme pr\xE9vu. Les changements restants \xE0 faire sont la suppression de la ligne qui met le batch sur le "),tt=o("code"),Pn=a("device"),xn=a(" (encore une fois, si vous voulez le garder, vous pouvez juste le changer pour utiliser "),at=o("code"),Cn=a("accelerator.device"),Sn=a(") et le remplacement de "),rt=o("code"),Dn=a("loss.backward()"),Mn=a(" par "),nt=o("code"),Tn=a("accelerator.backward(loss)"),Ln=a("."),oa=p(),d(ie.$$.fragment),la=p(),ue=o("p"),On=a("Si vous souhaitez faire un copier-coller pour jouer, voici \xE0 quoi ressemble la boucle d\u2019entra\xEEnement compl\xE8te avec \u{1F917} "),ot=o("i"),Nn=a("Accelerate"),Un=a(" :"),ia=p(),d(Ge.$$.fragment),ua=p(),pe=o("p"),Wn=a("En pla\xE7ant ceci dans un script "),lt=o("code"),Fn=a("train.py"),In=a(", cela sera ex\xE9cutable sur n\u2019importe quel type d\u2019installation distribu\xE9e. Pour l\u2019essayer dans votre installation distribu\xE9e, ex\xE9cutez la commande :"),pa=p(),d(Ve.$$.fragment),ca=p(),as=o("p"),Gn=a("qui vous demandera de r\xE9pondre \xE0 quelques questions et enregistrera vos r\xE9ponses dans un fichier de configuration utilis\xE9 par cette commande :"),da=p(),d(He.$$.fragment),ma=p(),rs=o("p"),Vn=a("qui lancera l\u2019entra\xEEnement distribu\xE9."),fa=p(),W=o("p"),Hn=a("Si vous voulez essayer ceci dans un "),it=o("em"),Rn=a("notebook"),Bn=a(" (par exemple, pour le tester avec des TPUs sur Colab), collez simplement le code dans une "),ut=o("code"),Jn=a("training_function()"),Yn=a(" et lancez une derni\xE8re cellule avec :"),ha=p(),d(Re.$$.fragment),_a=p(),ce=o("p"),Qn=a("Vous trouverez d\u2019autres exemples dans le d\xE9p\xF4t d\u2019"),de=o("a"),Kn=a("\u{1F917} "),pt=o("em"),Xn=a("Accelerate"),Zn=a("."),this.h()},l(e){const n=El('[data-svelte="svelte-1phssyn"]',document.head);$=l(n,"META",{name:!0,content:!0}),n.forEach(t),z=c(e),j=l(e,"H1",{class:!0});var Be=i(j);w=l(Be,"A",{id:!0,class:!0,href:!0});var ct=i(w);g=l(ct,"SPAN",{});var ao=i(g);m(k.$$.fragment,ao),ao.forEach(t),ct.forEach(t),he=c(Be),V=l(Be,"SPAN",{});var ro=i(V);H=r(ro,"Un entra\xEEnement complet"),ro.forEach(t),Be.forEach(t),C=c(e),m(M.$$.fragment,e),_e=c(e),m(ve.$$.fragment,e),mt=c(e),K=l(e,"P",{});var ba=i(K);xa=r(ba,"Maintenant nous allons voir comment obtenir les m\xEAmes r\xE9sultats que dans la derni\xE8re section sans utiliser la classe "),ds=l(ba,"CODE",{});var no=i(ds);Ca=r(no,"Trainer"),no.forEach(t),Sa=r(ba,". Encore une fois, nous supposons que vous avez fait le traitement des donn\xE9es dans la section 2. Voici un court r\xE9sum\xE9 couvrant tout ce dont vous aurez besoin :"),ba.forEach(t),ft=c(e),m(be.$$.fragment,e),ht=c(e),R=l(e,"H3",{class:!0});var $a=i(R);X=l($a,"A",{id:!0,class:!0,href:!0});var oo=i(X);ms=l(oo,"SPAN",{});var lo=i(ms);m($e.$$.fragment,lo),lo.forEach(t),oo.forEach(t),Da=c($a),fs=l($a,"SPAN",{});var io=i(fs);Ma=r(io,"Pr\xE9parer l'entra\xEEnement"),io.forEach(t),$a.forEach(t),_t=c(e),S=l(e,"P",{});var me=i(S);Ta=r(me,"Avant d\u2019\xE9crire r\xE9ellement notre boucle d\u2019entra\xEEnement, nous devons d\xE9finir quelques objets. Les premiers sont les "),hs=l(me,"EM",{});var uo=i(hs);La=r(uo,"dataloaders"),uo.forEach(t),Oa=r(me," que nous utiliserons pour it\xE9rer sur les batchs. Mais avant de pouvoir d\xE9finir ces chargeurs de donn\xE9es, nous devons appliquer un peu de post-traitement \xE0 nos "),_s=l(me,"CODE",{});var po=i(_s);Na=r(po,"tokenized_datasets"),po.forEach(t),Ua=r(me,", pour prendre soin de certaines choses que le "),vs=l(me,"CODE",{});var co=i(vs);Wa=r(co,"Trainer"),co.forEach(t),Fa=r(me," fait pour nous automatiquement. Sp\xE9cifiquement, nous devons :"),me.forEach(t),vt=c(e),T=l(e,"UL",{});var ns=i(T);B=l(ns,"LI",{});var os=i(B);Ia=r(os,"supprimer les colonnes correspondant aux valeurs que le mod\xE8le n\u2019attend pas (comme les colonnes "),bs=l(os,"CODE",{});var mo=i(bs);Ga=r(mo,"sentence1"),mo.forEach(t),Va=r(os," et "),$s=l(os,"CODE",{});var fo=i($s);Ha=r(fo,"sentence2"),fo.forEach(t),Ra=r(os,"),"),os.forEach(t),Ba=c(ns),D=l(ns,"LI",{});var fe=i(D);Ja=r(fe,"renommer la colonne "),qs=l(fe,"CODE",{});var ho=i(qs);Ya=r(ho,"label"),ho.forEach(t),Qa=r(fe," en "),gs=l(fe,"CODE",{});var _o=i(gs);Ka=r(_o,"labels"),_o.forEach(t),Xa=r(fe," (parce que le mod\xE8le s\u2019attend \xE0 ce que l\u2019argument soit nomm\xE9 "),ks=l(fe,"CODE",{});var vo=i(ks);Za=r(vo,"labels"),vo.forEach(t),er=r(fe,"),"),fe.forEach(t),sr=c(ns),js=l(ns,"LI",{});var bo=i(js);tr=r(bo,"d\xE9finir le format des jeux de donn\xE9es pour qu\u2019ils retournent des tenseurs PyTorch au lieu de listes."),bo.forEach(t),ns.forEach(t),bt=c(e),Z=l(e,"P",{});var qa=i(Z);ar=r(qa,"Notre "),Es=l(qa,"CODE",{});var $o=i(Es);rr=r($o,"tokenized_datasets"),$o.forEach(t),nr=r(qa," a une m\xE9thode pour chacune de ces \xE9tapes :"),qa.forEach(t),$t=c(e),m(qe.$$.fragment,e),qt=c(e),Ye=l(e,"P",{});var qo=i(Ye);or=r(qo,"Nous pouvons alors v\xE9rifier que le r\xE9sultat ne comporte que des colonnes que notre mod\xE8le acceptera :"),qo.forEach(t),gt=c(e),m(ge.$$.fragment,e),kt=c(e),ee=l(e,"P",{});var ga=i(ee);lr=r(ga,"Maintenant que cela est fait, nous pouvons facilement d\xE9finir nos "),ws=l(ga,"EM",{});var go=i(ws);ir=r(go,"dataloaders"),go.forEach(t),ur=r(ga," :"),ga.forEach(t),jt=c(e),m(ke.$$.fragment,e),Et=c(e),Qe=l(e,"P",{});var ko=i(Qe);pr=r(ko,"Pour v\xE9rifier rapidement qu\u2019il n\u2019y a pas d\u2019erreur dans le traitement des donn\xE9es, nous pouvons inspecter un batch comme celui-ci :"),ko.forEach(t),wt=c(e),m(je.$$.fragment,e),zt=c(e),m(Ee.$$.fragment,e),yt=c(e),L=l(e,"P",{});var ls=i(L);cr=r(ls,"Notez que les formes r\xE9elles seront probablement l\xE9g\xE8rement diff\xE9rentes pour vous puisque nous avons d\xE9fini "),zs=l(ls,"CODE",{});var jo=i(zs);dr=r(jo,"shuffle=True"),jo.forEach(t),mr=r(ls," pour le chargeur de donn\xE9es d\u2019entra\xEEnement et que nous "),ys=l(ls,"EM",{});var Eo=i(ys);fr=r(Eo,"paddons"),Eo.forEach(t),hr=r(ls," \xE0 la longueur maximale dans le batch."),ls.forEach(t),At=c(e),Ke=l(e,"P",{});var wo=i(Ke);_r=r(wo,"Maintenant que nous en avons termin\xE9 avec le pr\xE9traitement des donn\xE9es (un objectif satisfaisant mais difficile \xE0 atteindre pour tout praticien d\u2019apprentissage automatique), passons au mod\xE8le. Nous l\u2019instancions exactement comme nous l\u2019avons fait dans la section pr\xE9c\xE9dente :"),wo.forEach(t),Pt=c(e),m(we.$$.fragment,e),xt=c(e),Xe=l(e,"P",{});var zo=i(Xe);vr=r(zo,"Pour s\u2019assurer que tout se passera bien pendant l\u2019entra\xEEnement, nous transmettons notre batch \xE0 ce mod\xE8le :"),zo.forEach(t),Ct=c(e),m(ze.$$.fragment,e),St=c(e),m(ye.$$.fragment,e),Dt=c(e),O=l(e,"P",{});var is=i(O);br=r(is,"Tous les mod\xE8les \u{1F917} "),As=l(is,"EM",{});var yo=i(As);$r=r(yo,"Transformers"),yo.forEach(t),qr=r(is," renvoient la perte lorsque les "),Ps=l(is,"CODE",{});var Ao=i(Ps);gr=r(Ao,"labels"),Ao.forEach(t),kr=r(is," sont fournis. Nous obtenons \xE9galement les logits (deux pour chaque entr\xE9e de notre batch, donc un tenseur de taille 8 x 2)."),is.forEach(t),Mt=c(e),y=l(e,"P",{});var F=i(y);jr=r(F,"Nous sommes presque pr\xEAts \xE0 \xE9crire notre boucle d\u2019entra\xEEnement ! Il nous manque juste deux choses : un optimiseur et un planificateur de taux d\u2019apprentissage. Puisque nous essayons de reproduire \xE0 la main ce que fait la fonction "),xs=l(F,"CODE",{});var Po=i(xs);Er=r(Po,"Trainer"),Po.forEach(t),wr=r(F,", utilisons les m\xEAmes param\xE8tres par d\xE9faut. L\u2019optimiseur utilis\xE9 par "),Cs=l(F,"CODE",{});var xo=i(Cs);zr=r(xo,"Trainer"),xo.forEach(t),yr=r(F," est "),Ss=l(F,"CODE",{});var Co=i(Ss);Ar=r(Co,"AdamW"),Co.forEach(t),Pr=r(F,", qui est le m\xEAme qu\u2019Adam, mais avec une torsion pour la r\xE9gularisation par d\xE9croissance de poids (voir "),Ae=l(F,"A",{href:!0,rel:!0});var So=i(Ae);Ds=l(So,"EM",{});var Do=i(Ds);xr=r(Do,"Decoupled Weight Decay Regularization"),Do.forEach(t),So.forEach(t),Cr=r(F," par Ilya Loshchilov et Frank Hutter) :"),F.forEach(t),Tt=c(e),m(Pe.$$.fragment,e),Lt=c(e),N=l(e,"P",{});var us=i(N);Sr=r(us,"Enfin, le planificateur du taux d\u2019apprentissage utilis\xE9 par d\xE9faut est juste une d\xE9croissance lin\xE9aire de la valeur maximale (5e-5) \xE0 0. Pour le d\xE9finir correctement, nous devons conna\xEEtre le nombre d\u2019\xE9tapes d\u2019entra\xEEnement que nous prendrons, qui est le nombre d\u2019\xE9poques que nous voulons ex\xE9cuter multipli\xE9 par le nombre de batch d\u2019entra\xEEnement (qui est la longueur de notre "),Ms=l(us,"EM",{});var Mo=i(Ms);Dr=r(Mo,"dataloader"),Mo.forEach(t),Mr=r(us," d\u2019entra\xEEnement). Le "),Ts=l(us,"CODE",{});var To=i(Ts);Tr=r(To,"Trainer"),To.forEach(t),Lr=r(us," utilise trois \xE9poques par d\xE9faut, nous allons donc suivre \xE7a :"),us.forEach(t),Ot=c(e),m(xe.$$.fragment,e),Nt=c(e),m(Ce.$$.fragment,e),Ut=c(e),J=l(e,"H3",{class:!0});var ka=i(J);se=l(ka,"A",{id:!0,class:!0,href:!0});var Lo=i(se);Ls=l(Lo,"SPAN",{});var Oo=i(Ls);m(Se.$$.fragment,Oo),Oo.forEach(t),Lo.forEach(t),Or=c(ka),Os=l(ka,"SPAN",{});var No=i(Os);Nr=r(No,"La boucle d'entra\xEEnement"),No.forEach(t),ka.forEach(t),Wt=c(e),te=l(e,"P",{});var ja=i(te);Ur=r(ja,"Une derni\xE8re chose : nous voulons utiliser le GPU si nous en avons un (sur un CPU, l\u2019entra\xEEnement peut prendre plusieurs heures au lieu de quelques minutes). Pour ce faire, nous d\xE9finissons un "),Ns=l(ja,"CODE",{});var Uo=i(Ns);Wr=r(Uo,"device"),Uo.forEach(t),Fr=r(ja," sur lequel nous allons placer notre mod\xE8le et nos batchs :"),ja.forEach(t),Ft=c(e),m(De.$$.fragment,e),It=c(e),m(Me.$$.fragment,e),Gt=c(e),ae=l(e,"P",{});var Ea=i(ae);Ir=r(Ea,"Nous sommes maintenant pr\xEAts \xE0 entra\xEEner ! Pour avoir une id\xE9e du moment o\xF9 l\u2019entra\xEEnement sera termin\xE9, nous ajoutons une barre de progression sur le nombre d\u2019\xE9tapes d\u2019entra\xEEnement, en utilisant la biblioth\xE8que "),Us=l(Ea,"CODE",{});var Wo=i(Us);Gr=r(Wo,"tqdm"),Wo.forEach(t),Vr=r(Ea," :"),Ea.forEach(t),Vt=c(e),m(Te.$$.fragment,e),Ht=c(e),Ze=l(e,"P",{});var Fo=i(Ze);Hr=r(Fo,"Vous pouvez voir que le c\u0153ur de la boucle d\u2019entra\xEEnement ressemble beaucoup \xE0 celui de l\u2019introduction. Nous n\u2019avons pas demand\xE9 de rapport, donc cette boucle d\u2019entra\xEEnement ne nous dira rien sur les r\xE9sultats du mod\xE8le. Pour cela, nous devons ajouter une boucle d\u2019\xE9valuation."),Fo.forEach(t),Rt=c(e),Y=l(e,"H3",{class:!0});var wa=i(Y);re=l(wa,"A",{id:!0,class:!0,href:!0});var Io=i(re);Ws=l(Io,"SPAN",{});var Go=i(Ws);m(Le.$$.fragment,Go),Go.forEach(t),Io.forEach(t),Rr=c(wa),Fs=l(wa,"SPAN",{});var Vo=i(Fs);Br=r(Vo,"La boucle d'\xE9valuation"),Vo.forEach(t),wa.forEach(t),Bt=c(e),A=l(e,"P",{});var I=i(A);Jr=r(I,"Comme nous l\u2019avons fait pr\xE9c\xE9demment, nous allons utiliser une m\xE9trique fournie par la biblioth\xE8que \u{1F917} "),Is=l(I,"EM",{});var Ho=i(Is);Yr=r(Ho,"Datasets"),Ho.forEach(t),Qr=r(I,". Nous avons d\xE9j\xE0 vu la m\xE9thode "),Gs=l(I,"CODE",{});var Ro=i(Gs);Kr=r(Ro,"metric.compute()"),Ro.forEach(t),Xr=r(I,", mais les m\xE9triques peuvent en fait accumuler des batchs pour nous au fur et \xE0 mesure que nous parcourons la boucle de pr\xE9diction avec la m\xE9thode "),Vs=l(I,"CODE",{});var Bo=i(Vs);Zr=r(Bo,"add_batch()"),Bo.forEach(t),en=r(I,". Une fois que nous avons accumul\xE9 tous les batchs, nous pouvons obtenir le r\xE9sultat final avec "),Hs=l(I,"CODE",{});var Jo=i(Hs);sn=r(Jo,"metric.compute()"),Jo.forEach(t),tn=r(I,". Voici comment impl\xE9menter tout cela dans une boucle d\u2019\xE9valuation :"),I.forEach(t),Jt=c(e),m(Oe.$$.fragment,e),Yt=c(e),m(Ne.$$.fragment,e),Qt=c(e),es=l(e,"P",{});var Yo=i(es);an=r(Yo,"Une fois encore, vos r\xE9sultats seront l\xE9g\xE8rement diff\xE9rents en raison du caract\xE8re al\xE9atoire de l\u2019initialisation de la t\xEAte du mod\xE8le et du m\xE9lange des donn\xE9es, mais ils devraient se situer dans la m\xEAme fourchette."),Yo.forEach(t),Kt=c(e),m(ne.$$.fragment,e),Xt=c(e),Q=l(e,"H3",{class:!0});var za=i(Q);oe=l(za,"A",{id:!0,class:!0,href:!0});var Qo=i(oe);Rs=l(Qo,"SPAN",{});var Ko=i(Rs);m(Ue.$$.fragment,Ko),Ko.forEach(t),Qo.forEach(t),rn=c(za),ss=l(za,"SPAN",{});var eo=i(ss);nn=r(eo,"Optimisez votre boucle d'entra\xEEnement avec \u{1F917} "),Bs=l(eo,"I",{});var Xo=i(Bs);on=r(Xo,"Accelerate"),Xo.forEach(t),eo.forEach(t),za.forEach(t),Zt=c(e),m(We.$$.fragment,e),ea=c(e),U=l(e,"P",{});var ps=i(U);ln=r(ps,"La boucle d\u2019entra\xEEnement que nous avons d\xE9finie pr\xE9c\xE9demment fonctionne bien sur un seul CPU ou GPU. Mais en utilisant la biblioth\xE8que "),le=l(ps,"A",{href:!0,rel:!0});var so=i(le);un=r(so,"\u{1F917} "),Js=l(so,"EM",{});var Zo=i(Js);pn=r(Zo,"Accelerate"),Zo.forEach(t),so.forEach(t),cn=r(ps,", il suffit de quelques ajustements pour permettre un entra\xEEnement distribu\xE9 sur plusieurs GPUs ou TPUs. En partant de la cr\xE9ation des "),Ys=l(ps,"EM",{});var el=i(Ys);dn=r(el,"dataloaders"),el.forEach(t),mn=r(ps," d\u2019entra\xEEnement et de validation, voici \xE0 quoi ressemble notre boucle d\u2019entra\xEEnement manuel :"),ps.forEach(t),sa=c(e),m(Fe.$$.fragment,e),ta=c(e),ts=l(e,"P",{});var sl=i(ts);fn=r(sl,"Et voici les changements :"),sl.forEach(t),aa=c(e),m(Ie.$$.fragment,e),ra=c(e),P=l(e,"P",{});var G=i(P);hn=r(G,"La premi\xE8re ligne \xE0 ajouter est la ligne d\u2019importation. La deuxi\xE8me ligne instancie un objet "),Qs=l(G,"CODE",{});var tl=i(Qs);_n=r(tl,"Accelerator"),tl.forEach(t),vn=r(G," qui va regarder l\u2019environnement et initialiser la bonne configuration distribu\xE9e. \u{1F917} "),Ks=l(G,"EM",{});var al=i(Ks);bn=r(al,"Accelerate"),al.forEach(t),$n=r(G," g\xE8re le placement des p\xE9riph\xE9riques pour vous, donc vous pouvez enlever les lignes qui placent le mod\xE8le sur le p\xE9riph\xE9rique (ou, si vous pr\xE9f\xE9rez, les changer pour utiliser "),Xs=l(G,"CODE",{});var rl=i(Xs);qn=r(rl,"accelerator.device"),rl.forEach(t),gn=r(G," au lieu de "),Zs=l(G,"CODE",{});var nl=i(Zs);kn=r(nl,"device"),nl.forEach(t),jn=r(G,")."),G.forEach(t),na=c(e),E=l(e,"P",{});var x=i(E);En=r(x,"Ensuite, le gros du travail est fait dans la ligne qui envoie les "),et=l(x,"EM",{});var ol=i(et);wn=r(ol,"dataloaders"),ol.forEach(t),zn=r(x,", le mod\xE8le, et l\u2019optimiseur \xE0 "),st=l(x,"CODE",{});var ll=i(st);yn=r(ll,"accelerator.prepare()"),ll.forEach(t),An=r(x,". Cela va envelopper ces objets dans le conteneur appropri\xE9 pour s\u2019assurer que votre entra\xEEnement distribu\xE9 fonctionne comme pr\xE9vu. Les changements restants \xE0 faire sont la suppression de la ligne qui met le batch sur le "),tt=l(x,"CODE",{});var il=i(tt);Pn=r(il,"device"),il.forEach(t),xn=r(x," (encore une fois, si vous voulez le garder, vous pouvez juste le changer pour utiliser "),at=l(x,"CODE",{});var ul=i(at);Cn=r(ul,"accelerator.device"),ul.forEach(t),Sn=r(x,") et le remplacement de "),rt=l(x,"CODE",{});var pl=i(rt);Dn=r(pl,"loss.backward()"),pl.forEach(t),Mn=r(x," par "),nt=l(x,"CODE",{});var cl=i(nt);Tn=r(cl,"accelerator.backward(loss)"),cl.forEach(t),Ln=r(x,"."),x.forEach(t),oa=c(e),m(ie.$$.fragment,e),la=c(e),ue=l(e,"P",{});var ya=i(ue);On=r(ya,"Si vous souhaitez faire un copier-coller pour jouer, voici \xE0 quoi ressemble la boucle d\u2019entra\xEEnement compl\xE8te avec \u{1F917} "),ot=l(ya,"I",{});var dl=i(ot);Nn=r(dl,"Accelerate"),dl.forEach(t),Un=r(ya," :"),ya.forEach(t),ia=c(e),m(Ge.$$.fragment,e),ua=c(e),pe=l(e,"P",{});var Aa=i(pe);Wn=r(Aa,"En pla\xE7ant ceci dans un script "),lt=l(Aa,"CODE",{});var ml=i(lt);Fn=r(ml,"train.py"),ml.forEach(t),In=r(Aa,", cela sera ex\xE9cutable sur n\u2019importe quel type d\u2019installation distribu\xE9e. Pour l\u2019essayer dans votre installation distribu\xE9e, ex\xE9cutez la commande :"),Aa.forEach(t),pa=c(e),m(Ve.$$.fragment,e),ca=c(e),as=l(e,"P",{});var fl=i(as);Gn=r(fl,"qui vous demandera de r\xE9pondre \xE0 quelques questions et enregistrera vos r\xE9ponses dans un fichier de configuration utilis\xE9 par cette commande :"),fl.forEach(t),da=c(e),m(He.$$.fragment,e),ma=c(e),rs=l(e,"P",{});var hl=i(rs);Vn=r(hl,"qui lancera l\u2019entra\xEEnement distribu\xE9."),hl.forEach(t),fa=c(e),W=l(e,"P",{});var cs=i(W);Hn=r(cs,"Si vous voulez essayer ceci dans un "),it=l(cs,"EM",{});var _l=i(it);Rn=r(_l,"notebook"),_l.forEach(t),Bn=r(cs," (par exemple, pour le tester avec des TPUs sur Colab), collez simplement le code dans une "),ut=l(cs,"CODE",{});var vl=i(ut);Jn=r(vl,"training_function()"),vl.forEach(t),Yn=r(cs," et lancez une derni\xE8re cellule avec :"),cs.forEach(t),ha=c(e),m(Re.$$.fragment,e),_a=c(e),ce=l(e,"P",{});var Pa=i(ce);Qn=r(Pa,"Vous trouverez d\u2019autres exemples dans le d\xE9p\xF4t d\u2019"),de=l(Pa,"A",{href:!0,rel:!0});var to=i(de);Kn=r(to,"\u{1F917} "),pt=l(to,"EM",{});var bl=i(pt);Xn=r(bl,"Accelerate"),bl.forEach(t),to.forEach(t),Zn=r(Pa,"."),Pa.forEach(t),this.h()},h(){b($,"name","hf:doc:metadata"),b($,"content",JSON.stringify(xl)),b(w,"id","un-entranement-complet"),b(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(w,"href","#un-entranement-complet"),b(j,"class","relative group"),b(X,"id","prparer-lentranement"),b(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(X,"href","#prparer-lentranement"),b(R,"class","relative group"),b(Ae,"href","https://arxiv.org/abs/1711.05101"),b(Ae,"rel","nofollow"),b(se,"id","la-boucle-dentranement"),b(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(se,"href","#la-boucle-dentranement"),b(J,"class","relative group"),b(re,"id","la-boucle-dvaluation"),b(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(re,"href","#la-boucle-dvaluation"),b(Y,"class","relative group"),b(oe,"id","optimisez-votre-boucle-dentranement-avec-iacceleratei"),b(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(oe,"href","#optimisez-votre-boucle-dentranement-avec-iacceleratei"),b(Q,"class","relative group"),b(le,"href","https://github.com/huggingface/accelerate"),b(le,"rel","nofollow"),b(de,"href","https://github.com/huggingface/accelerate/tree/main/examples"),b(de,"rel","nofollow")},m(e,n){s(document.head,$),u(e,z,n),u(e,j,n),s(j,w),s(w,g),f(k,g,null),s(j,he),s(j,V),s(V,H),u(e,C,n),f(M,e,n),u(e,_e,n),f(ve,e,n),u(e,mt,n),u(e,K,n),s(K,xa),s(K,ds),s(ds,Ca),s(K,Sa),u(e,ft,n),f(be,e,n),u(e,ht,n),u(e,R,n),s(R,X),s(X,ms),f($e,ms,null),s(R,Da),s(R,fs),s(fs,Ma),u(e,_t,n),u(e,S,n),s(S,Ta),s(S,hs),s(hs,La),s(S,Oa),s(S,_s),s(_s,Na),s(S,Ua),s(S,vs),s(vs,Wa),s(S,Fa),u(e,vt,n),u(e,T,n),s(T,B),s(B,Ia),s(B,bs),s(bs,Ga),s(B,Va),s(B,$s),s($s,Ha),s(B,Ra),s(T,Ba),s(T,D),s(D,Ja),s(D,qs),s(qs,Ya),s(D,Qa),s(D,gs),s(gs,Ka),s(D,Xa),s(D,ks),s(ks,Za),s(D,er),s(T,sr),s(T,js),s(js,tr),u(e,bt,n),u(e,Z,n),s(Z,ar),s(Z,Es),s(Es,rr),s(Z,nr),u(e,$t,n),f(qe,e,n),u(e,qt,n),u(e,Ye,n),s(Ye,or),u(e,gt,n),f(ge,e,n),u(e,kt,n),u(e,ee,n),s(ee,lr),s(ee,ws),s(ws,ir),s(ee,ur),u(e,jt,n),f(ke,e,n),u(e,Et,n),u(e,Qe,n),s(Qe,pr),u(e,wt,n),f(je,e,n),u(e,zt,n),f(Ee,e,n),u(e,yt,n),u(e,L,n),s(L,cr),s(L,zs),s(zs,dr),s(L,mr),s(L,ys),s(ys,fr),s(L,hr),u(e,At,n),u(e,Ke,n),s(Ke,_r),u(e,Pt,n),f(we,e,n),u(e,xt,n),u(e,Xe,n),s(Xe,vr),u(e,Ct,n),f(ze,e,n),u(e,St,n),f(ye,e,n),u(e,Dt,n),u(e,O,n),s(O,br),s(O,As),s(As,$r),s(O,qr),s(O,Ps),s(Ps,gr),s(O,kr),u(e,Mt,n),u(e,y,n),s(y,jr),s(y,xs),s(xs,Er),s(y,wr),s(y,Cs),s(Cs,zr),s(y,yr),s(y,Ss),s(Ss,Ar),s(y,Pr),s(y,Ae),s(Ae,Ds),s(Ds,xr),s(y,Cr),u(e,Tt,n),f(Pe,e,n),u(e,Lt,n),u(e,N,n),s(N,Sr),s(N,Ms),s(Ms,Dr),s(N,Mr),s(N,Ts),s(Ts,Tr),s(N,Lr),u(e,Ot,n),f(xe,e,n),u(e,Nt,n),f(Ce,e,n),u(e,Ut,n),u(e,J,n),s(J,se),s(se,Ls),f(Se,Ls,null),s(J,Or),s(J,Os),s(Os,Nr),u(e,Wt,n),u(e,te,n),s(te,Ur),s(te,Ns),s(Ns,Wr),s(te,Fr),u(e,Ft,n),f(De,e,n),u(e,It,n),f(Me,e,n),u(e,Gt,n),u(e,ae,n),s(ae,Ir),s(ae,Us),s(Us,Gr),s(ae,Vr),u(e,Vt,n),f(Te,e,n),u(e,Ht,n),u(e,Ze,n),s(Ze,Hr),u(e,Rt,n),u(e,Y,n),s(Y,re),s(re,Ws),f(Le,Ws,null),s(Y,Rr),s(Y,Fs),s(Fs,Br),u(e,Bt,n),u(e,A,n),s(A,Jr),s(A,Is),s(Is,Yr),s(A,Qr),s(A,Gs),s(Gs,Kr),s(A,Xr),s(A,Vs),s(Vs,Zr),s(A,en),s(A,Hs),s(Hs,sn),s(A,tn),u(e,Jt,n),f(Oe,e,n),u(e,Yt,n),f(Ne,e,n),u(e,Qt,n),u(e,es,n),s(es,an),u(e,Kt,n),f(ne,e,n),u(e,Xt,n),u(e,Q,n),s(Q,oe),s(oe,Rs),f(Ue,Rs,null),s(Q,rn),s(Q,ss),s(ss,nn),s(ss,Bs),s(Bs,on),u(e,Zt,n),f(We,e,n),u(e,ea,n),u(e,U,n),s(U,ln),s(U,le),s(le,un),s(le,Js),s(Js,pn),s(U,cn),s(U,Ys),s(Ys,dn),s(U,mn),u(e,sa,n),f(Fe,e,n),u(e,ta,n),u(e,ts,n),s(ts,fn),u(e,aa,n),f(Ie,e,n),u(e,ra,n),u(e,P,n),s(P,hn),s(P,Qs),s(Qs,_n),s(P,vn),s(P,Ks),s(Ks,bn),s(P,$n),s(P,Xs),s(Xs,qn),s(P,gn),s(P,Zs),s(Zs,kn),s(P,jn),u(e,na,n),u(e,E,n),s(E,En),s(E,et),s(et,wn),s(E,zn),s(E,st),s(st,yn),s(E,An),s(E,tt),s(tt,Pn),s(E,xn),s(E,at),s(at,Cn),s(E,Sn),s(E,rt),s(rt,Dn),s(E,Mn),s(E,nt),s(nt,Tn),s(E,Ln),u(e,oa,n),f(ie,e,n),u(e,la,n),u(e,ue,n),s(ue,On),s(ue,ot),s(ot,Nn),s(ue,Un),u(e,ia,n),f(Ge,e,n),u(e,ua,n),u(e,pe,n),s(pe,Wn),s(pe,lt),s(lt,Fn),s(pe,In),u(e,pa,n),f(Ve,e,n),u(e,ca,n),u(e,as,n),s(as,Gn),u(e,da,n),f(He,e,n),u(e,ma,n),u(e,rs,n),s(rs,Vn),u(e,fa,n),u(e,W,n),s(W,Hn),s(W,it),s(it,Rn),s(W,Bn),s(W,ut),s(ut,Jn),s(W,Yn),u(e,ha,n),f(Re,e,n),u(e,_a,n),u(e,ce,n),s(ce,Qn),s(ce,de),s(de,Kn),s(de,pt),s(pt,Xn),s(ce,Zn),va=!0},p(e,[n]){const Be={};n&2&&(Be.$$scope={dirty:n,ctx:e}),ne.$set(Be);const ct={};n&2&&(ct.$$scope={dirty:n,ctx:e}),ie.$set(ct)},i(e){va||(h(k.$$.fragment,e),h(M.$$.fragment,e),h(ve.$$.fragment,e),h(be.$$.fragment,e),h($e.$$.fragment,e),h(qe.$$.fragment,e),h(ge.$$.fragment,e),h(ke.$$.fragment,e),h(je.$$.fragment,e),h(Ee.$$.fragment,e),h(we.$$.fragment,e),h(ze.$$.fragment,e),h(ye.$$.fragment,e),h(Pe.$$.fragment,e),h(xe.$$.fragment,e),h(Ce.$$.fragment,e),h(Se.$$.fragment,e),h(De.$$.fragment,e),h(Me.$$.fragment,e),h(Te.$$.fragment,e),h(Le.$$.fragment,e),h(Oe.$$.fragment,e),h(Ne.$$.fragment,e),h(ne.$$.fragment,e),h(Ue.$$.fragment,e),h(We.$$.fragment,e),h(Fe.$$.fragment,e),h(Ie.$$.fragment,e),h(ie.$$.fragment,e),h(Ge.$$.fragment,e),h(Ve.$$.fragment,e),h(He.$$.fragment,e),h(Re.$$.fragment,e),va=!0)},o(e){_(k.$$.fragment,e),_(M.$$.fragment,e),_(ve.$$.fragment,e),_(be.$$.fragment,e),_($e.$$.fragment,e),_(qe.$$.fragment,e),_(ge.$$.fragment,e),_(ke.$$.fragment,e),_(je.$$.fragment,e),_(Ee.$$.fragment,e),_(we.$$.fragment,e),_(ze.$$.fragment,e),_(ye.$$.fragment,e),_(Pe.$$.fragment,e),_(xe.$$.fragment,e),_(Ce.$$.fragment,e),_(Se.$$.fragment,e),_(De.$$.fragment,e),_(Me.$$.fragment,e),_(Te.$$.fragment,e),_(Le.$$.fragment,e),_(Oe.$$.fragment,e),_(Ne.$$.fragment,e),_(ne.$$.fragment,e),_(Ue.$$.fragment,e),_(We.$$.fragment,e),_(Fe.$$.fragment,e),_(Ie.$$.fragment,e),_(ie.$$.fragment,e),_(Ge.$$.fragment,e),_(Ve.$$.fragment,e),_(He.$$.fragment,e),_(Re.$$.fragment,e),va=!1},d(e){t($),e&&t(z),e&&t(j),v(k),e&&t(C),v(M,e),e&&t(_e),v(ve,e),e&&t(mt),e&&t(K),e&&t(ft),v(be,e),e&&t(ht),e&&t(R),v($e),e&&t(_t),e&&t(S),e&&t(vt),e&&t(T),e&&t(bt),e&&t(Z),e&&t($t),v(qe,e),e&&t(qt),e&&t(Ye),e&&t(gt),v(ge,e),e&&t(kt),e&&t(ee),e&&t(jt),v(ke,e),e&&t(Et),e&&t(Qe),e&&t(wt),v(je,e),e&&t(zt),v(Ee,e),e&&t(yt),e&&t(L),e&&t(At),e&&t(Ke),e&&t(Pt),v(we,e),e&&t(xt),e&&t(Xe),e&&t(Ct),v(ze,e),e&&t(St),v(ye,e),e&&t(Dt),e&&t(O),e&&t(Mt),e&&t(y),e&&t(Tt),v(Pe,e),e&&t(Lt),e&&t(N),e&&t(Ot),v(xe,e),e&&t(Nt),v(Ce,e),e&&t(Ut),e&&t(J),v(Se),e&&t(Wt),e&&t(te),e&&t(Ft),v(De,e),e&&t(It),v(Me,e),e&&t(Gt),e&&t(ae),e&&t(Vt),v(Te,e),e&&t(Ht),e&&t(Ze),e&&t(Rt),e&&t(Y),v(Le),e&&t(Bt),e&&t(A),e&&t(Jt),v(Oe,e),e&&t(Yt),v(Ne,e),e&&t(Qt),e&&t(es),e&&t(Kt),v(ne,e),e&&t(Xt),e&&t(Q),v(Ue),e&&t(Zt),v(We,e),e&&t(ea),e&&t(U),e&&t(sa),v(Fe,e),e&&t(ta),e&&t(ts),e&&t(aa),v(Ie,e),e&&t(ra),e&&t(P),e&&t(na),e&&t(E),e&&t(oa),v(ie,e),e&&t(la),e&&t(ue),e&&t(ia),v(Ge,e),e&&t(ua),e&&t(pe),e&&t(pa),v(Ve,e),e&&t(ca),e&&t(as),e&&t(da),v(He,e),e&&t(ma),e&&t(rs),e&&t(fa),e&&t(W),e&&t(ha),v(Re,e),e&&t(_a),e&&t(ce)}}}const xl={local:"un-entranement-complet",sections:[{local:"prparer-lentranement",title:"Pr\xE9parer l'entra\xEEnement"},{local:"la-boucle-dentranement",title:"La boucle d'entra\xEEnement"},{local:"la-boucle-dvaluation",title:"La boucle d'\xE9valuation"},{local:"optimisez-votre-boucle-dentranement-avec-iacceleratei",title:"Optimisez votre boucle d'entra\xEEnement avec \u{1F917} <i>Accelerate</i>"}],title:"Un entra\xEEnement complet"};function Cl(Je){return wl(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Nl extends gl{constructor($){super();kl(this,$,Cl,Pl,jl,{})}}export{Nl as default,xl as metadata};
