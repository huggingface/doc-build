import{S as gl,i as vl,s as $l,e as n,k as c,w as h,t as o,M as kl,c as i,d as t,m as d,a as p,x as u,h as r,b,G as a,g as l,y as m,q as f,o as _,B as w,v as yl}from"../../chunks/vendor-hf-doc-builder.js";import{T as wl}from"../../chunks/Tip-hf-doc-builder.js";import{Y as bl}from"../../chunks/Youtube-hf-doc-builder.js";import{I as Ht}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as v}from"../../chunks/CodeBlock-hf-doc-builder.js";import{D as jl}from"../../chunks/DocNotebookDropdown-hf-doc-builder.js";function zl(Ie){let g,y,$,E,W;return{c(){g=n("p"),y=o("\u270F\uFE0F "),$=n("strong"),E=o("Try it out!"),W=o(" Modify the previous training loop to fine-tune your model on the SST-2 dataset.")},l(z){g=i(z,"P",{});var C=p(g);y=r(C,"\u270F\uFE0F "),$=i(C,"STRONG",{});var U=p($);E=r(U,"Try it out!"),U.forEach(t),W=r(C," Modify the previous training loop to fine-tune your model on the SST-2 dataset."),C.forEach(t)},m(z,C){l(z,g,C),a(g,y),a(g,$),a($,E),a(g,W)},d(z){z&&t(g)}}}function El(Ie){let g;return{c(){g=o('\u26A0\uFE0F In order to benefit from the speed-up offered by Cloud TPUs, we recommend padding your samples to a fixed length with the `padding="max_length"` and `max_length` arguments of the tokenizer.')},l(y){g=r(y,'\u26A0\uFE0F In order to benefit from the speed-up offered by Cloud TPUs, we recommend padding your samples to a fixed length with the `padding="max_length"` and `max_length` arguments of the tokenizer.')},m(y,$){l(y,g,$)},d(y){y&&t(g)}}}function ql(Ie){let g,y,$,E,W,z,C,U,hs,Bt,ie,Gt,pe,Rt,I,us,st,ms,fs,Yt,ce,Jt,O,H,ot,de,_s,rt,ws,Qt,S,bs,lt,gs,vs,nt,$s,ks,Kt,x,N,ys,it,js,zs,pt,Es,qs,As,P,Ts,ct,Ps,Cs,dt,Ss,xs,ht,Ds,Ws,Os,ut,Ns,Vt,B,Ms,mt,Fs,Ls,Xt,he,Zt,He,Us,ea,ue,ta,Be,Is,aa,me,sa,Ge,Hs,oa,fe,ra,_e,la,G,Bs,ft,Gs,Rs,na,Re,Ys,ia,we,pa,Ye,Js,ca,be,da,ge,ha,R,Qs,_t,Ks,Vs,ua,j,Xs,wt,Zs,eo,bt,to,ao,gt,so,oo,ve,ro,lo,ma,$e,fa,Y,no,vt,io,po,_a,ke,wa,ye,ba,M,J,$t,je,co,kt,ho,ga,Q,uo,yt,mo,fo,va,ze,$a,Ee,ka,K,_o,jt,wo,bo,ya,qe,ja,Je,go,za,F,V,zt,Ae,vo,Et,$o,Ea,q,ko,qt,yo,jo,At,zo,Eo,Tt,qo,Ao,qa,Te,Aa,Pe,Ta,Qe,To,Pa,X,Ca,L,Z,Pt,Ce,Po,Ct,Co,Sa,Se,xa,ee,So,xe,xo,Do,Da,De,Wa,Ke,Wo,Oa,We,Na,A,Oo,St,No,Mo,xt,Fo,Lo,Dt,Uo,Io,Ma,k,Ho,Wt,Bo,Go,Ot,Ro,Yo,Nt,Jo,Qo,Mt,Ko,Vo,Ft,Xo,Zo,Fa,te,La,Ve,er,Ua,Oe,Ia,ae,tr,Lt,ar,sr,Ha,Ne,Ba,Xe,or,Ga,Me,Ra,Ze,rr,Ya,se,lr,Ut,nr,ir,Ja,Fe,Qa,oe,pr,Le,cr,dr,Ka;return z=new Ht({}),ie=new jl({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter3/section4.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter3/section4.ipynb"}]}}),pe=new bl({props:{id:"Dh9CL8fyG80"}}),ce=new v({props:{code:`from datasets import load_dataset
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
data_collator = DataCollatorWithPadding(tokenizer=tokenizer)`}}),de=new Ht({}),he=new v({props:{code:`tokenized_datasets = tokenized_datasets.remove_columns(["sentence1", "sentence2", "idx"])
tokenized_datasets = tokenized_datasets.rename_column("label", "labels")
tokenized_datasets.set_format("torch")
tokenized_datasets["train"].column_names`,highlighted:`tokenized_datasets = tokenized_datasets.remove_columns([<span class="hljs-string">&quot;sentence1&quot;</span>, <span class="hljs-string">&quot;sentence2&quot;</span>, <span class="hljs-string">&quot;idx&quot;</span>])
tokenized_datasets = tokenized_datasets.rename_column(<span class="hljs-string">&quot;label&quot;</span>, <span class="hljs-string">&quot;labels&quot;</span>)
tokenized_datasets.set_format(<span class="hljs-string">&quot;torch&quot;</span>)
tokenized_datasets[<span class="hljs-string">&quot;train&quot;</span>].column_names`}}),ue=new v({props:{code:'["attention_mask", "input_ids", "labels", "token_type_ids"]',highlighted:'[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;labels&quot;</span>, <span class="hljs-string">&quot;token_type_ids&quot;</span>]'}}),me=new v({props:{code:`from torch.utils.data import DataLoader

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
)`}}),fe=new v({props:{code:`for batch in train_dataloader:
    break
{k: v.shape for k, v in batch.items()}`,highlighted:`<span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> train_dataloader:
    <span class="hljs-keyword">break</span>
{k: v.shape <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> batch.items()}`}}),_e=new v({props:{code:`{'attention_mask': torch.Size([8, 65]),
 'input_ids': torch.Size([8, 65]),
 'labels': torch.Size([8]),
 'token_type_ids': torch.Size([8, 65])}`,highlighted:`{<span class="hljs-string">&#x27;attention_mask&#x27;</span>: torch.Size([<span class="hljs-number">8</span>, <span class="hljs-number">65</span>]),
 <span class="hljs-string">&#x27;input_ids&#x27;</span>: torch.Size([<span class="hljs-number">8</span>, <span class="hljs-number">65</span>]),
 <span class="hljs-string">&#x27;labels&#x27;</span>: torch.Size([<span class="hljs-number">8</span>]),
 <span class="hljs-string">&#x27;token_type_ids&#x27;</span>: torch.Size([<span class="hljs-number">8</span>, <span class="hljs-number">65</span>])}`}}),we=new v({props:{code:`from transformers import AutoModelForSequenceClassification

model = AutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=2)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForSequenceClassification

model = AutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=<span class="hljs-number">2</span>)`}}),be=new v({props:{code:`outputs = model(**batch)
print(outputs.loss, outputs.logits.shape)`,highlighted:`outputs = model(**batch)
<span class="hljs-built_in">print</span>(outputs.loss, outputs.logits.shape)`}}),ge=new v({props:{code:"tensor(0.5441, grad_fn=<NllLossBackward>) torch.Size([8, 2])",highlighted:'tensor(<span class="hljs-number">0.5441</span>, grad_fn=&lt;NllLossBackward&gt;) torch.Size([<span class="hljs-number">8</span>, <span class="hljs-number">2</span>])'}}),$e=new v({props:{code:`from transformers import AdamW

optimizer = AdamW(model.parameters(), lr=5e-5)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AdamW

optimizer = AdamW(model.parameters(), lr=<span class="hljs-number">5e-5</span>)`}}),ke=new v({props:{code:`from transformers import get_scheduler

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
<span class="hljs-built_in">print</span>(num_training_steps)`}}),ye=new v({props:{code:"1377",highlighted:'<span class="hljs-number">1377</span>'}}),je=new Ht({}),ze=new v({props:{code:`import torch

device = torch.device("cuda") if torch.cuda.is_available() else torch.device("cpu")
model.to(device)
device`,highlighted:`<span class="hljs-keyword">import</span> torch

device = torch.device(<span class="hljs-string">&quot;cuda&quot;</span>) <span class="hljs-keyword">if</span> torch.cuda.is_available() <span class="hljs-keyword">else</span> torch.device(<span class="hljs-string">&quot;cpu&quot;</span>)
model.to(device)
device`}}),Ee=new v({props:{code:"device(type='cuda')",highlighted:'device(<span class="hljs-built_in">type</span>=<span class="hljs-string">&#x27;cuda&#x27;</span>)'}}),qe=new v({props:{code:`from tqdm.auto import tqdm

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
        progress_bar.update(<span class="hljs-number">1</span>)`}}),Ae=new Ht({}),Te=new v({props:{code:`from datasets import load_metric

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

metric.compute()`}}),Pe=new v({props:{code:"{'accuracy': 0.8431372549019608, 'f1': 0.8907849829351535}",highlighted:'{<span class="hljs-string">&#x27;accuracy&#x27;</span>: <span class="hljs-number">0.8431372549019608</span>, <span class="hljs-string">&#x27;f1&#x27;</span>: <span class="hljs-number">0.8907849829351535</span>}'}}),X=new wl({props:{$$slots:{default:[zl]},$$scope:{ctx:Ie}}}),Ce=new Ht({}),Se=new bl({props:{id:"s7dy8QRgjJ0"}}),De=new v({props:{code:`from transformers import AdamW, AutoModelForSequenceClassification, get_scheduler

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
        progress_bar.update(<span class="hljs-number">1</span>)`}}),We=new v({props:{code:`+ from accelerate import Accelerator
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
          progress_bar.update(1)`}}),te=new wl({props:{$$slots:{default:[El]},$$scope:{ctx:Ie}}}),Oe=new v({props:{code:`from accelerate import Accelerator
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
        progress_bar.update(<span class="hljs-number">1</span>)`}}),Ne=new v({props:{code:"accelerate config",highlighted:"accelerate config"}}),Me=new v({props:{code:"accelerate launch train.py",highlighted:'accelerate <span class="hljs-built_in">launch</span> train.py'}}),Fe=new v({props:{code:`from accelerate import notebook_launcher

notebook_launcher(training_function)`,highlighted:`<span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> notebook_launcher

notebook_launcher(training_function)`}}),{c(){g=n("meta"),y=c(),$=n("h1"),E=n("a"),W=n("span"),h(z.$$.fragment),C=c(),U=n("span"),hs=o("A full training"),Bt=c(),h(ie.$$.fragment),Gt=c(),h(pe.$$.fragment),Rt=c(),I=n("p"),us=o("Now we\u2019ll see how to achieve the same results as we did in the last section without using the "),st=n("code"),ms=o("Trainer"),fs=o(" class. Again, we assume you have done the data processing in section 2. Here is a short summary covering everything you will need:"),Yt=c(),h(ce.$$.fragment),Jt=c(),O=n("h3"),H=n("a"),ot=n("span"),h(de.$$.fragment),_s=c(),rt=n("span"),ws=o("Prepare for training"),Qt=c(),S=n("p"),bs=o("Before actually writing our training loop, we will need to define a few objects. The first ones are the dataloaders we will use to iterate over batches. But before we can define those dataloaders, we need to apply a bit of postprocessing to our "),lt=n("code"),gs=o("tokenized_datasets"),vs=o(", to take care of some things that the "),nt=n("code"),$s=o("Trainer"),ks=o(" did for us automatically. Specifically, we need to:"),Kt=c(),x=n("ul"),N=n("li"),ys=o("Remove the columns corresponding to values the model does not expect (like the "),it=n("code"),js=o("sentence1"),zs=o(" and "),pt=n("code"),Es=o("sentence2"),qs=o(" columns)."),As=c(),P=n("li"),Ts=o("Rename the column "),ct=n("code"),Ps=o("label"),Cs=o(" to "),dt=n("code"),Ss=o("labels"),xs=o(" (because the model expects the argument to be named "),ht=n("code"),Ds=o("labels"),Ws=o(")."),Os=c(),ut=n("li"),Ns=o("Set the format of the datasets so they return PyTorch tensors instead of lists."),Vt=c(),B=n("p"),Ms=o("Our "),mt=n("code"),Fs=o("tokenized_datasets"),Ls=o(" has one method for each of those steps:"),Xt=c(),h(he.$$.fragment),Zt=c(),He=n("p"),Us=o("We can then check that the result only has columns that our model will accept:"),ea=c(),h(ue.$$.fragment),ta=c(),Be=n("p"),Is=o("Now that this is done, we can easily define our dataloaders:"),aa=c(),h(me.$$.fragment),sa=c(),Ge=n("p"),Hs=o("To quickly check there is no mistake in the data processing, we can inspect a batch like this:"),oa=c(),h(fe.$$.fragment),ra=c(),h(_e.$$.fragment),la=c(),G=n("p"),Bs=o("Note that the actual shapes will probably be slightly different for you since we set "),ft=n("code"),Gs=o("shuffle=True"),Rs=o(" for the training dataloader and we are padding to the maximum length inside the batch."),na=c(),Re=n("p"),Ys=o("Now that we\u2019re completely finished with data preprocessing (a satisfying yet elusive goal for any ML practitioner), let\u2019s turn to the model. We instantiate it exactly as we did in the previous section:"),ia=c(),h(we.$$.fragment),pa=c(),Ye=n("p"),Js=o("To make sure that everything will go smoothly during training, we pass our batch to this model:"),ca=c(),h(be.$$.fragment),da=c(),h(ge.$$.fragment),ha=c(),R=n("p"),Qs=o("All \u{1F917} Transformers models will return the loss when "),_t=n("code"),Ks=o("labels"),Vs=o(" are provided, and we also get the logits (two for each input in our batch, so a tensor of size 8 x 2)."),ua=c(),j=n("p"),Xs=o("We\u2019re almost ready to write our training loop! We\u2019re just missing two things: an optimizer and a learning rate scheduler. Since we are trying to replicate what the "),wt=n("code"),Zs=o("Trainer"),eo=o(" was doing by hand, we will use the same defaults. The optimizer used by the "),bt=n("code"),to=o("Trainer"),ao=o(" is "),gt=n("code"),so=o("AdamW"),oo=o(", which is the same as Adam, but with a twist for weight decay regularization (see "),ve=n("a"),ro=o("\u201CDecoupled Weight Decay Regularization\u201D"),lo=o(" by Ilya Loshchilov and Frank Hutter):"),ma=c(),h($e.$$.fragment),fa=c(),Y=n("p"),no=o("Finally, the learning rate scheduler used by default is just a linear decay from the maximum value (5e-5) to 0. To properly define it, we need to know the number of training steps we will take, which is the number of epochs we want to run multiplied by the number of training batches (which is the length of our training dataloader). The "),vt=n("code"),io=o("Trainer"),po=o(" uses three epochs by default, so we will follow that:"),_a=c(),h(ke.$$.fragment),wa=c(),h(ye.$$.fragment),ba=c(),M=n("h3"),J=n("a"),$t=n("span"),h(je.$$.fragment),co=c(),kt=n("span"),ho=o("The training loop"),ga=c(),Q=n("p"),uo=o("One last thing: we will want to use the GPU if we have access to one (on a CPU, training might take several hours instead of a couple of minutes). To do this, we define a "),yt=n("code"),mo=o("device"),fo=o(" we will put our model and our batches on:"),va=c(),h(ze.$$.fragment),$a=c(),h(Ee.$$.fragment),ka=c(),K=n("p"),_o=o("We are now ready to train! To get some sense of when training will be finished, we add a progress bar over our number of training steps, using the "),jt=n("code"),wo=o("tqdm"),bo=o(" library:"),ya=c(),h(qe.$$.fragment),ja=c(),Je=n("p"),go=o("You can see that the core of the training loop looks a lot like the one in the introduction. We didn\u2019t ask for any reporting, so this training loop will not tell us anything about how the model fares. We need to add an evaluation loop for that."),za=c(),F=n("h3"),V=n("a"),zt=n("span"),h(Ae.$$.fragment),vo=c(),Et=n("span"),$o=o("The evaluation loop"),Ea=c(),q=n("p"),ko=o("As we did earlier, we will use a metric provided by the \u{1F917} Datasets library. We\u2019ve already seen the "),qt=n("code"),yo=o("metric.compute()"),jo=o(" method, but metrics can actually accumulate batches for us as we go over the prediction loop with the method "),At=n("code"),zo=o("add_batch()"),Eo=o(". Once we have accumulated all the batches, we can get the final result with "),Tt=n("code"),qo=o("metric.compute()"),Ao=o(". Here\u2019s how to implement all of this in an evaluation loop:"),qa=c(),h(Te.$$.fragment),Aa=c(),h(Pe.$$.fragment),Ta=c(),Qe=n("p"),To=o("Again, your results will be slightly different because of the randomness in the model head initialization and the data shuffling, but they should be in the same ballpark."),Pa=c(),h(X.$$.fragment),Ca=c(),L=n("h3"),Z=n("a"),Pt=n("span"),h(Ce.$$.fragment),Po=c(),Ct=n("span"),Co=o("Supercharge your training loop with \u{1F917} Accelerate"),Sa=c(),h(Se.$$.fragment),xa=c(),ee=n("p"),So=o("The training loop we defined earlier works fine on a single CPU or GPU. But using the "),xe=n("a"),xo=o("\u{1F917} Accelerate"),Do=o(" library, with just a few adjustments we can enable distributed training on multiple GPUs or TPUs. Starting from the creation of the training and validation dataloaders, here is what our manual training loop looks like:"),Da=c(),h(De.$$.fragment),Wa=c(),Ke=n("p"),Wo=o("And here are the changes:"),Oa=c(),h(We.$$.fragment),Na=c(),A=n("p"),Oo=o("The first line to add is the import line. The second line instantiates an "),St=n("code"),No=o("Accelerator"),Mo=o(" object that will look at the environment and initialize the proper distributed setup. \u{1F917} Accelerate handles the device placement for you, so you can remove the lines that put the model on the device (or, if you prefer, change them to use "),xt=n("code"),Fo=o("accelerator.device"),Lo=o(" instead of "),Dt=n("code"),Uo=o("device"),Io=o(")."),Ma=c(),k=n("p"),Ho=o("Then the main bulk of the work is done in the line that sends the dataloaders, the model, and the optimizer to "),Wt=n("code"),Bo=o("accelerator.prepare()"),Go=o(". This will wrap those objects in the proper container to make sure your distributed training works as intended. The remaining changes to make are removing the line that puts the batch on the "),Ot=n("code"),Ro=o("device"),Yo=o(" (again, if you want to keep this you can just change it to use "),Nt=n("code"),Jo=o("accelerator.device"),Qo=o(") and replacing "),Mt=n("code"),Ko=o("loss.backward()"),Vo=o(" with "),Ft=n("code"),Xo=o("accelerator.backward(loss)"),Zo=o("."),Fa=c(),h(te.$$.fragment),La=c(),Ve=n("p"),er=o("If you\u2019d like to copy and paste it to play around, here\u2019s what the complete training loop looks like with \u{1F917} Accelerate:"),Ua=c(),h(Oe.$$.fragment),Ia=c(),ae=n("p"),tr=o("Putting this in a "),Lt=n("code"),ar=o("train.py"),sr=o(" script will make that script runnable on any kind of distributed setup. To try it out in your distributed setup, run the command:"),Ha=c(),h(Ne.$$.fragment),Ba=c(),Xe=n("p"),or=o("which will prompt you to answer a few questions and dump your answers in a configuration file used by this command:"),Ga=c(),h(Me.$$.fragment),Ra=c(),Ze=n("p"),rr=o("which will launch the distributed training."),Ya=c(),se=n("p"),lr=o("If you want to try this in a Notebook (for instance, to test it with TPUs on Colab), just paste the code in a "),Ut=n("code"),nr=o("training_function()"),ir=o(" and run a last cell with:"),Ja=c(),h(Fe.$$.fragment),Qa=c(),oe=n("p"),pr=o("You can find more examples in the "),Le=n("a"),cr=o("\u{1F917} Accelerate repo"),dr=o("."),this.h()},l(e){const s=kl('[data-svelte="svelte-1phssyn"]',document.head);g=i(s,"META",{name:!0,content:!0}),s.forEach(t),y=d(e),$=i(e,"H1",{class:!0});var Ue=p($);E=i(Ue,"A",{id:!0,class:!0,href:!0});var It=p(E);W=i(It,"SPAN",{});var hr=p(W);u(z.$$.fragment,hr),hr.forEach(t),It.forEach(t),C=d(Ue),U=i(Ue,"SPAN",{});var ur=p(U);hs=r(ur,"A full training"),ur.forEach(t),Ue.forEach(t),Bt=d(e),u(ie.$$.fragment,e),Gt=d(e),u(pe.$$.fragment,e),Rt=d(e),I=i(e,"P",{});var Va=p(I);us=r(Va,"Now we\u2019ll see how to achieve the same results as we did in the last section without using the "),st=i(Va,"CODE",{});var mr=p(st);ms=r(mr,"Trainer"),mr.forEach(t),fs=r(Va," class. Again, we assume you have done the data processing in section 2. Here is a short summary covering everything you will need:"),Va.forEach(t),Yt=d(e),u(ce.$$.fragment,e),Jt=d(e),O=i(e,"H3",{class:!0});var Xa=p(O);H=i(Xa,"A",{id:!0,class:!0,href:!0});var fr=p(H);ot=i(fr,"SPAN",{});var _r=p(ot);u(de.$$.fragment,_r),_r.forEach(t),fr.forEach(t),_s=d(Xa),rt=i(Xa,"SPAN",{});var wr=p(rt);ws=r(wr,"Prepare for training"),wr.forEach(t),Xa.forEach(t),Qt=d(e),S=i(e,"P",{});var et=p(S);bs=r(et,"Before actually writing our training loop, we will need to define a few objects. The first ones are the dataloaders we will use to iterate over batches. But before we can define those dataloaders, we need to apply a bit of postprocessing to our "),lt=i(et,"CODE",{});var br=p(lt);gs=r(br,"tokenized_datasets"),br.forEach(t),vs=r(et,", to take care of some things that the "),nt=i(et,"CODE",{});var gr=p(nt);$s=r(gr,"Trainer"),gr.forEach(t),ks=r(et," did for us automatically. Specifically, we need to:"),et.forEach(t),Kt=d(e),x=i(e,"UL",{});var tt=p(x);N=i(tt,"LI",{});var at=p(N);ys=r(at,"Remove the columns corresponding to values the model does not expect (like the "),it=i(at,"CODE",{});var vr=p(it);js=r(vr,"sentence1"),vr.forEach(t),zs=r(at," and "),pt=i(at,"CODE",{});var $r=p(pt);Es=r($r,"sentence2"),$r.forEach(t),qs=r(at," columns)."),at.forEach(t),As=d(tt),P=i(tt,"LI",{});var re=p(P);Ts=r(re,"Rename the column "),ct=i(re,"CODE",{});var kr=p(ct);Ps=r(kr,"label"),kr.forEach(t),Cs=r(re," to "),dt=i(re,"CODE",{});var yr=p(dt);Ss=r(yr,"labels"),yr.forEach(t),xs=r(re," (because the model expects the argument to be named "),ht=i(re,"CODE",{});var jr=p(ht);Ds=r(jr,"labels"),jr.forEach(t),Ws=r(re,")."),re.forEach(t),Os=d(tt),ut=i(tt,"LI",{});var zr=p(ut);Ns=r(zr,"Set the format of the datasets so they return PyTorch tensors instead of lists."),zr.forEach(t),tt.forEach(t),Vt=d(e),B=i(e,"P",{});var Za=p(B);Ms=r(Za,"Our "),mt=i(Za,"CODE",{});var Er=p(mt);Fs=r(Er,"tokenized_datasets"),Er.forEach(t),Ls=r(Za," has one method for each of those steps:"),Za.forEach(t),Xt=d(e),u(he.$$.fragment,e),Zt=d(e),He=i(e,"P",{});var qr=p(He);Us=r(qr,"We can then check that the result only has columns that our model will accept:"),qr.forEach(t),ea=d(e),u(ue.$$.fragment,e),ta=d(e),Be=i(e,"P",{});var Ar=p(Be);Is=r(Ar,"Now that this is done, we can easily define our dataloaders:"),Ar.forEach(t),aa=d(e),u(me.$$.fragment,e),sa=d(e),Ge=i(e,"P",{});var Tr=p(Ge);Hs=r(Tr,"To quickly check there is no mistake in the data processing, we can inspect a batch like this:"),Tr.forEach(t),oa=d(e),u(fe.$$.fragment,e),ra=d(e),u(_e.$$.fragment,e),la=d(e),G=i(e,"P",{});var es=p(G);Bs=r(es,"Note that the actual shapes will probably be slightly different for you since we set "),ft=i(es,"CODE",{});var Pr=p(ft);Gs=r(Pr,"shuffle=True"),Pr.forEach(t),Rs=r(es," for the training dataloader and we are padding to the maximum length inside the batch."),es.forEach(t),na=d(e),Re=i(e,"P",{});var Cr=p(Re);Ys=r(Cr,"Now that we\u2019re completely finished with data preprocessing (a satisfying yet elusive goal for any ML practitioner), let\u2019s turn to the model. We instantiate it exactly as we did in the previous section:"),Cr.forEach(t),ia=d(e),u(we.$$.fragment,e),pa=d(e),Ye=i(e,"P",{});var Sr=p(Ye);Js=r(Sr,"To make sure that everything will go smoothly during training, we pass our batch to this model:"),Sr.forEach(t),ca=d(e),u(be.$$.fragment,e),da=d(e),u(ge.$$.fragment,e),ha=d(e),R=i(e,"P",{});var ts=p(R);Qs=r(ts,"All \u{1F917} Transformers models will return the loss when "),_t=i(ts,"CODE",{});var xr=p(_t);Ks=r(xr,"labels"),xr.forEach(t),Vs=r(ts," are provided, and we also get the logits (two for each input in our batch, so a tensor of size 8 x 2)."),ts.forEach(t),ua=d(e),j=i(e,"P",{});var D=p(j);Xs=r(D,"We\u2019re almost ready to write our training loop! We\u2019re just missing two things: an optimizer and a learning rate scheduler. Since we are trying to replicate what the "),wt=i(D,"CODE",{});var Dr=p(wt);Zs=r(Dr,"Trainer"),Dr.forEach(t),eo=r(D," was doing by hand, we will use the same defaults. The optimizer used by the "),bt=i(D,"CODE",{});var Wr=p(bt);to=r(Wr,"Trainer"),Wr.forEach(t),ao=r(D," is "),gt=i(D,"CODE",{});var Or=p(gt);so=r(Or,"AdamW"),Or.forEach(t),oo=r(D,", which is the same as Adam, but with a twist for weight decay regularization (see "),ve=i(D,"A",{href:!0,rel:!0});var Nr=p(ve);ro=r(Nr,"\u201CDecoupled Weight Decay Regularization\u201D"),Nr.forEach(t),lo=r(D," by Ilya Loshchilov and Frank Hutter):"),D.forEach(t),ma=d(e),u($e.$$.fragment,e),fa=d(e),Y=i(e,"P",{});var as=p(Y);no=r(as,"Finally, the learning rate scheduler used by default is just a linear decay from the maximum value (5e-5) to 0. To properly define it, we need to know the number of training steps we will take, which is the number of epochs we want to run multiplied by the number of training batches (which is the length of our training dataloader). The "),vt=i(as,"CODE",{});var Mr=p(vt);io=r(Mr,"Trainer"),Mr.forEach(t),po=r(as," uses three epochs by default, so we will follow that:"),as.forEach(t),_a=d(e),u(ke.$$.fragment,e),wa=d(e),u(ye.$$.fragment,e),ba=d(e),M=i(e,"H3",{class:!0});var ss=p(M);J=i(ss,"A",{id:!0,class:!0,href:!0});var Fr=p(J);$t=i(Fr,"SPAN",{});var Lr=p($t);u(je.$$.fragment,Lr),Lr.forEach(t),Fr.forEach(t),co=d(ss),kt=i(ss,"SPAN",{});var Ur=p(kt);ho=r(Ur,"The training loop"),Ur.forEach(t),ss.forEach(t),ga=d(e),Q=i(e,"P",{});var os=p(Q);uo=r(os,"One last thing: we will want to use the GPU if we have access to one (on a CPU, training might take several hours instead of a couple of minutes). To do this, we define a "),yt=i(os,"CODE",{});var Ir=p(yt);mo=r(Ir,"device"),Ir.forEach(t),fo=r(os," we will put our model and our batches on:"),os.forEach(t),va=d(e),u(ze.$$.fragment,e),$a=d(e),u(Ee.$$.fragment,e),ka=d(e),K=i(e,"P",{});var rs=p(K);_o=r(rs,"We are now ready to train! To get some sense of when training will be finished, we add a progress bar over our number of training steps, using the "),jt=i(rs,"CODE",{});var Hr=p(jt);wo=r(Hr,"tqdm"),Hr.forEach(t),bo=r(rs," library:"),rs.forEach(t),ya=d(e),u(qe.$$.fragment,e),ja=d(e),Je=i(e,"P",{});var Br=p(Je);go=r(Br,"You can see that the core of the training loop looks a lot like the one in the introduction. We didn\u2019t ask for any reporting, so this training loop will not tell us anything about how the model fares. We need to add an evaluation loop for that."),Br.forEach(t),za=d(e),F=i(e,"H3",{class:!0});var ls=p(F);V=i(ls,"A",{id:!0,class:!0,href:!0});var Gr=p(V);zt=i(Gr,"SPAN",{});var Rr=p(zt);u(Ae.$$.fragment,Rr),Rr.forEach(t),Gr.forEach(t),vo=d(ls),Et=i(ls,"SPAN",{});var Yr=p(Et);$o=r(Yr,"The evaluation loop"),Yr.forEach(t),ls.forEach(t),Ea=d(e),q=i(e,"P",{});var le=p(q);ko=r(le,"As we did earlier, we will use a metric provided by the \u{1F917} Datasets library. We\u2019ve already seen the "),qt=i(le,"CODE",{});var Jr=p(qt);yo=r(Jr,"metric.compute()"),Jr.forEach(t),jo=r(le," method, but metrics can actually accumulate batches for us as we go over the prediction loop with the method "),At=i(le,"CODE",{});var Qr=p(At);zo=r(Qr,"add_batch()"),Qr.forEach(t),Eo=r(le,". Once we have accumulated all the batches, we can get the final result with "),Tt=i(le,"CODE",{});var Kr=p(Tt);qo=r(Kr,"metric.compute()"),Kr.forEach(t),Ao=r(le,". Here\u2019s how to implement all of this in an evaluation loop:"),le.forEach(t),qa=d(e),u(Te.$$.fragment,e),Aa=d(e),u(Pe.$$.fragment,e),Ta=d(e),Qe=i(e,"P",{});var Vr=p(Qe);To=r(Vr,"Again, your results will be slightly different because of the randomness in the model head initialization and the data shuffling, but they should be in the same ballpark."),Vr.forEach(t),Pa=d(e),u(X.$$.fragment,e),Ca=d(e),L=i(e,"H3",{class:!0});var ns=p(L);Z=i(ns,"A",{id:!0,class:!0,href:!0});var Xr=p(Z);Pt=i(Xr,"SPAN",{});var Zr=p(Pt);u(Ce.$$.fragment,Zr),Zr.forEach(t),Xr.forEach(t),Po=d(ns),Ct=i(ns,"SPAN",{});var el=p(Ct);Co=r(el,"Supercharge your training loop with \u{1F917} Accelerate"),el.forEach(t),ns.forEach(t),Sa=d(e),u(Se.$$.fragment,e),xa=d(e),ee=i(e,"P",{});var is=p(ee);So=r(is,"The training loop we defined earlier works fine on a single CPU or GPU. But using the "),xe=i(is,"A",{href:!0,rel:!0});var tl=p(xe);xo=r(tl,"\u{1F917} Accelerate"),tl.forEach(t),Do=r(is," library, with just a few adjustments we can enable distributed training on multiple GPUs or TPUs. Starting from the creation of the training and validation dataloaders, here is what our manual training loop looks like:"),is.forEach(t),Da=d(e),u(De.$$.fragment,e),Wa=d(e),Ke=i(e,"P",{});var al=p(Ke);Wo=r(al,"And here are the changes:"),al.forEach(t),Oa=d(e),u(We.$$.fragment,e),Na=d(e),A=i(e,"P",{});var ne=p(A);Oo=r(ne,"The first line to add is the import line. The second line instantiates an "),St=i(ne,"CODE",{});var sl=p(St);No=r(sl,"Accelerator"),sl.forEach(t),Mo=r(ne," object that will look at the environment and initialize the proper distributed setup. \u{1F917} Accelerate handles the device placement for you, so you can remove the lines that put the model on the device (or, if you prefer, change them to use "),xt=i(ne,"CODE",{});var ol=p(xt);Fo=r(ol,"accelerator.device"),ol.forEach(t),Lo=r(ne," instead of "),Dt=i(ne,"CODE",{});var rl=p(Dt);Uo=r(rl,"device"),rl.forEach(t),Io=r(ne,")."),ne.forEach(t),Ma=d(e),k=i(e,"P",{});var T=p(k);Ho=r(T,"Then the main bulk of the work is done in the line that sends the dataloaders, the model, and the optimizer to "),Wt=i(T,"CODE",{});var ll=p(Wt);Bo=r(ll,"accelerator.prepare()"),ll.forEach(t),Go=r(T,". This will wrap those objects in the proper container to make sure your distributed training works as intended. The remaining changes to make are removing the line that puts the batch on the "),Ot=i(T,"CODE",{});var nl=p(Ot);Ro=r(nl,"device"),nl.forEach(t),Yo=r(T," (again, if you want to keep this you can just change it to use "),Nt=i(T,"CODE",{});var il=p(Nt);Jo=r(il,"accelerator.device"),il.forEach(t),Qo=r(T,") and replacing "),Mt=i(T,"CODE",{});var pl=p(Mt);Ko=r(pl,"loss.backward()"),pl.forEach(t),Vo=r(T," with "),Ft=i(T,"CODE",{});var cl=p(Ft);Xo=r(cl,"accelerator.backward(loss)"),cl.forEach(t),Zo=r(T,"."),T.forEach(t),Fa=d(e),u(te.$$.fragment,e),La=d(e),Ve=i(e,"P",{});var dl=p(Ve);er=r(dl,"If you\u2019d like to copy and paste it to play around, here\u2019s what the complete training loop looks like with \u{1F917} Accelerate:"),dl.forEach(t),Ua=d(e),u(Oe.$$.fragment,e),Ia=d(e),ae=i(e,"P",{});var ps=p(ae);tr=r(ps,"Putting this in a "),Lt=i(ps,"CODE",{});var hl=p(Lt);ar=r(hl,"train.py"),hl.forEach(t),sr=r(ps," script will make that script runnable on any kind of distributed setup. To try it out in your distributed setup, run the command:"),ps.forEach(t),Ha=d(e),u(Ne.$$.fragment,e),Ba=d(e),Xe=i(e,"P",{});var ul=p(Xe);or=r(ul,"which will prompt you to answer a few questions and dump your answers in a configuration file used by this command:"),ul.forEach(t),Ga=d(e),u(Me.$$.fragment,e),Ra=d(e),Ze=i(e,"P",{});var ml=p(Ze);rr=r(ml,"which will launch the distributed training."),ml.forEach(t),Ya=d(e),se=i(e,"P",{});var cs=p(se);lr=r(cs,"If you want to try this in a Notebook (for instance, to test it with TPUs on Colab), just paste the code in a "),Ut=i(cs,"CODE",{});var fl=p(Ut);nr=r(fl,"training_function()"),fl.forEach(t),ir=r(cs," and run a last cell with:"),cs.forEach(t),Ja=d(e),u(Fe.$$.fragment,e),Qa=d(e),oe=i(e,"P",{});var ds=p(oe);pr=r(ds,"You can find more examples in the "),Le=i(ds,"A",{href:!0,rel:!0});var _l=p(Le);cr=r(_l,"\u{1F917} Accelerate repo"),_l.forEach(t),dr=r(ds,"."),ds.forEach(t),this.h()},h(){b(g,"name","hf:doc:metadata"),b(g,"content",JSON.stringify(Al)),b(E,"id","a-full-training"),b(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(E,"href","#a-full-training"),b($,"class","relative group"),b(H,"id","prepare-for-training"),b(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(H,"href","#prepare-for-training"),b(O,"class","relative group"),b(ve,"href","https://arxiv.org/abs/1711.05101"),b(ve,"rel","nofollow"),b(J,"id","the-training-loop"),b(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(J,"href","#the-training-loop"),b(M,"class","relative group"),b(V,"id","the-evaluation-loop"),b(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(V,"href","#the-evaluation-loop"),b(F,"class","relative group"),b(Z,"id","supercharge-your-training-loop-with-accelerate"),b(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Z,"href","#supercharge-your-training-loop-with-accelerate"),b(L,"class","relative group"),b(xe,"href","https://github.com/huggingface/accelerate"),b(xe,"rel","nofollow"),b(Le,"href","https://github.com/huggingface/accelerate/tree/main/examples"),b(Le,"rel","nofollow")},m(e,s){a(document.head,g),l(e,y,s),l(e,$,s),a($,E),a(E,W),m(z,W,null),a($,C),a($,U),a(U,hs),l(e,Bt,s),m(ie,e,s),l(e,Gt,s),m(pe,e,s),l(e,Rt,s),l(e,I,s),a(I,us),a(I,st),a(st,ms),a(I,fs),l(e,Yt,s),m(ce,e,s),l(e,Jt,s),l(e,O,s),a(O,H),a(H,ot),m(de,ot,null),a(O,_s),a(O,rt),a(rt,ws),l(e,Qt,s),l(e,S,s),a(S,bs),a(S,lt),a(lt,gs),a(S,vs),a(S,nt),a(nt,$s),a(S,ks),l(e,Kt,s),l(e,x,s),a(x,N),a(N,ys),a(N,it),a(it,js),a(N,zs),a(N,pt),a(pt,Es),a(N,qs),a(x,As),a(x,P),a(P,Ts),a(P,ct),a(ct,Ps),a(P,Cs),a(P,dt),a(dt,Ss),a(P,xs),a(P,ht),a(ht,Ds),a(P,Ws),a(x,Os),a(x,ut),a(ut,Ns),l(e,Vt,s),l(e,B,s),a(B,Ms),a(B,mt),a(mt,Fs),a(B,Ls),l(e,Xt,s),m(he,e,s),l(e,Zt,s),l(e,He,s),a(He,Us),l(e,ea,s),m(ue,e,s),l(e,ta,s),l(e,Be,s),a(Be,Is),l(e,aa,s),m(me,e,s),l(e,sa,s),l(e,Ge,s),a(Ge,Hs),l(e,oa,s),m(fe,e,s),l(e,ra,s),m(_e,e,s),l(e,la,s),l(e,G,s),a(G,Bs),a(G,ft),a(ft,Gs),a(G,Rs),l(e,na,s),l(e,Re,s),a(Re,Ys),l(e,ia,s),m(we,e,s),l(e,pa,s),l(e,Ye,s),a(Ye,Js),l(e,ca,s),m(be,e,s),l(e,da,s),m(ge,e,s),l(e,ha,s),l(e,R,s),a(R,Qs),a(R,_t),a(_t,Ks),a(R,Vs),l(e,ua,s),l(e,j,s),a(j,Xs),a(j,wt),a(wt,Zs),a(j,eo),a(j,bt),a(bt,to),a(j,ao),a(j,gt),a(gt,so),a(j,oo),a(j,ve),a(ve,ro),a(j,lo),l(e,ma,s),m($e,e,s),l(e,fa,s),l(e,Y,s),a(Y,no),a(Y,vt),a(vt,io),a(Y,po),l(e,_a,s),m(ke,e,s),l(e,wa,s),m(ye,e,s),l(e,ba,s),l(e,M,s),a(M,J),a(J,$t),m(je,$t,null),a(M,co),a(M,kt),a(kt,ho),l(e,ga,s),l(e,Q,s),a(Q,uo),a(Q,yt),a(yt,mo),a(Q,fo),l(e,va,s),m(ze,e,s),l(e,$a,s),m(Ee,e,s),l(e,ka,s),l(e,K,s),a(K,_o),a(K,jt),a(jt,wo),a(K,bo),l(e,ya,s),m(qe,e,s),l(e,ja,s),l(e,Je,s),a(Je,go),l(e,za,s),l(e,F,s),a(F,V),a(V,zt),m(Ae,zt,null),a(F,vo),a(F,Et),a(Et,$o),l(e,Ea,s),l(e,q,s),a(q,ko),a(q,qt),a(qt,yo),a(q,jo),a(q,At),a(At,zo),a(q,Eo),a(q,Tt),a(Tt,qo),a(q,Ao),l(e,qa,s),m(Te,e,s),l(e,Aa,s),m(Pe,e,s),l(e,Ta,s),l(e,Qe,s),a(Qe,To),l(e,Pa,s),m(X,e,s),l(e,Ca,s),l(e,L,s),a(L,Z),a(Z,Pt),m(Ce,Pt,null),a(L,Po),a(L,Ct),a(Ct,Co),l(e,Sa,s),m(Se,e,s),l(e,xa,s),l(e,ee,s),a(ee,So),a(ee,xe),a(xe,xo),a(ee,Do),l(e,Da,s),m(De,e,s),l(e,Wa,s),l(e,Ke,s),a(Ke,Wo),l(e,Oa,s),m(We,e,s),l(e,Na,s),l(e,A,s),a(A,Oo),a(A,St),a(St,No),a(A,Mo),a(A,xt),a(xt,Fo),a(A,Lo),a(A,Dt),a(Dt,Uo),a(A,Io),l(e,Ma,s),l(e,k,s),a(k,Ho),a(k,Wt),a(Wt,Bo),a(k,Go),a(k,Ot),a(Ot,Ro),a(k,Yo),a(k,Nt),a(Nt,Jo),a(k,Qo),a(k,Mt),a(Mt,Ko),a(k,Vo),a(k,Ft),a(Ft,Xo),a(k,Zo),l(e,Fa,s),m(te,e,s),l(e,La,s),l(e,Ve,s),a(Ve,er),l(e,Ua,s),m(Oe,e,s),l(e,Ia,s),l(e,ae,s),a(ae,tr),a(ae,Lt),a(Lt,ar),a(ae,sr),l(e,Ha,s),m(Ne,e,s),l(e,Ba,s),l(e,Xe,s),a(Xe,or),l(e,Ga,s),m(Me,e,s),l(e,Ra,s),l(e,Ze,s),a(Ze,rr),l(e,Ya,s),l(e,se,s),a(se,lr),a(se,Ut),a(Ut,nr),a(se,ir),l(e,Ja,s),m(Fe,e,s),l(e,Qa,s),l(e,oe,s),a(oe,pr),a(oe,Le),a(Le,cr),a(oe,dr),Ka=!0},p(e,[s]){const Ue={};s&2&&(Ue.$$scope={dirty:s,ctx:e}),X.$set(Ue);const It={};s&2&&(It.$$scope={dirty:s,ctx:e}),te.$set(It)},i(e){Ka||(f(z.$$.fragment,e),f(ie.$$.fragment,e),f(pe.$$.fragment,e),f(ce.$$.fragment,e),f(de.$$.fragment,e),f(he.$$.fragment,e),f(ue.$$.fragment,e),f(me.$$.fragment,e),f(fe.$$.fragment,e),f(_e.$$.fragment,e),f(we.$$.fragment,e),f(be.$$.fragment,e),f(ge.$$.fragment,e),f($e.$$.fragment,e),f(ke.$$.fragment,e),f(ye.$$.fragment,e),f(je.$$.fragment,e),f(ze.$$.fragment,e),f(Ee.$$.fragment,e),f(qe.$$.fragment,e),f(Ae.$$.fragment,e),f(Te.$$.fragment,e),f(Pe.$$.fragment,e),f(X.$$.fragment,e),f(Ce.$$.fragment,e),f(Se.$$.fragment,e),f(De.$$.fragment,e),f(We.$$.fragment,e),f(te.$$.fragment,e),f(Oe.$$.fragment,e),f(Ne.$$.fragment,e),f(Me.$$.fragment,e),f(Fe.$$.fragment,e),Ka=!0)},o(e){_(z.$$.fragment,e),_(ie.$$.fragment,e),_(pe.$$.fragment,e),_(ce.$$.fragment,e),_(de.$$.fragment,e),_(he.$$.fragment,e),_(ue.$$.fragment,e),_(me.$$.fragment,e),_(fe.$$.fragment,e),_(_e.$$.fragment,e),_(we.$$.fragment,e),_(be.$$.fragment,e),_(ge.$$.fragment,e),_($e.$$.fragment,e),_(ke.$$.fragment,e),_(ye.$$.fragment,e),_(je.$$.fragment,e),_(ze.$$.fragment,e),_(Ee.$$.fragment,e),_(qe.$$.fragment,e),_(Ae.$$.fragment,e),_(Te.$$.fragment,e),_(Pe.$$.fragment,e),_(X.$$.fragment,e),_(Ce.$$.fragment,e),_(Se.$$.fragment,e),_(De.$$.fragment,e),_(We.$$.fragment,e),_(te.$$.fragment,e),_(Oe.$$.fragment,e),_(Ne.$$.fragment,e),_(Me.$$.fragment,e),_(Fe.$$.fragment,e),Ka=!1},d(e){t(g),e&&t(y),e&&t($),w(z),e&&t(Bt),w(ie,e),e&&t(Gt),w(pe,e),e&&t(Rt),e&&t(I),e&&t(Yt),w(ce,e),e&&t(Jt),e&&t(O),w(de),e&&t(Qt),e&&t(S),e&&t(Kt),e&&t(x),e&&t(Vt),e&&t(B),e&&t(Xt),w(he,e),e&&t(Zt),e&&t(He),e&&t(ea),w(ue,e),e&&t(ta),e&&t(Be),e&&t(aa),w(me,e),e&&t(sa),e&&t(Ge),e&&t(oa),w(fe,e),e&&t(ra),w(_e,e),e&&t(la),e&&t(G),e&&t(na),e&&t(Re),e&&t(ia),w(we,e),e&&t(pa),e&&t(Ye),e&&t(ca),w(be,e),e&&t(da),w(ge,e),e&&t(ha),e&&t(R),e&&t(ua),e&&t(j),e&&t(ma),w($e,e),e&&t(fa),e&&t(Y),e&&t(_a),w(ke,e),e&&t(wa),w(ye,e),e&&t(ba),e&&t(M),w(je),e&&t(ga),e&&t(Q),e&&t(va),w(ze,e),e&&t($a),w(Ee,e),e&&t(ka),e&&t(K),e&&t(ya),w(qe,e),e&&t(ja),e&&t(Je),e&&t(za),e&&t(F),w(Ae),e&&t(Ea),e&&t(q),e&&t(qa),w(Te,e),e&&t(Aa),w(Pe,e),e&&t(Ta),e&&t(Qe),e&&t(Pa),w(X,e),e&&t(Ca),e&&t(L),w(Ce),e&&t(Sa),w(Se,e),e&&t(xa),e&&t(ee),e&&t(Da),w(De,e),e&&t(Wa),e&&t(Ke),e&&t(Oa),w(We,e),e&&t(Na),e&&t(A),e&&t(Ma),e&&t(k),e&&t(Fa),w(te,e),e&&t(La),e&&t(Ve),e&&t(Ua),w(Oe,e),e&&t(Ia),e&&t(ae),e&&t(Ha),w(Ne,e),e&&t(Ba),e&&t(Xe),e&&t(Ga),w(Me,e),e&&t(Ra),e&&t(Ze),e&&t(Ya),e&&t(se),e&&t(Ja),w(Fe,e),e&&t(Qa),e&&t(oe)}}}const Al={local:"a-full-training",sections:[{local:"prepare-for-training",title:"Prepare for training"},{local:"the-training-loop",title:"The training loop"},{local:"the-evaluation-loop",title:"The evaluation loop"},{local:"supercharge-your-training-loop-with-accelerate",title:"Supercharge your training loop with \u{1F917} Accelerate"}],title:"A full training"};function Tl(Ie){return yl(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ol extends gl{constructor(g){super();vl(this,g,Tl,ql,$l,{})}}export{Ol as default,Al as metadata};
