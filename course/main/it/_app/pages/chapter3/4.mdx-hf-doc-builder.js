import{S as hr,i as _r,s as br,e as l,k as p,w as m,t as s,M as vr,c as n,d as a,m as d,a as c,x as u,h as i,b as v,G as t,g as r,y as f,q as h,o as _,B as b,v as $r}from"../../chunks/vendor-hf-doc-builder.js";import{T as ur}from"../../chunks/Tip-hf-doc-builder.js";import{Y as fr}from"../../chunks/Youtube-hf-doc-builder.js";import{I as Fa}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as g}from"../../chunks/CodeBlock-hf-doc-builder.js";import{D as gr}from"../../chunks/DocNotebookDropdown-hf-doc-builder.js";function zr(Ie){let $,w,z,E,T;return{c(){$=l("p"),w=s("\u270F\uFE0F "),z=l("strong"),E=s("Prova tu!"),T=s(" Modifica il ciclo di addestramento precedente per affinare il modello sul dataset SST-2.")},l(q){$=n(q,"P",{});var C=c($);w=i(C,"\u270F\uFE0F "),z=n(C,"STRONG",{});var I=c(z);E=i(I,"Prova tu!"),I.forEach(a),T=i(C," Modifica il ciclo di addestramento precedente per affinare il modello sul dataset SST-2."),C.forEach(a)},m(q,C){r(q,$,C),t($,w),t($,z),t(z,E),t($,T)},d(q){q&&a($)}}}function kr(Ie){let $;return{c(){$=s('\u26A0\uFE0F Per poter beneficiare dell\'accelerazione offerta da Cloud TPUs, \xE8 raccomandabile applicare padding ad una lunghezza fissa tramite gli argomenti `padding="max_length"` e `max_length` del tokenizer.')},l(w){$=i(w,'\u26A0\uFE0F Per poter beneficiare dell\'accelerazione offerta da Cloud TPUs, \xE8 raccomandabile applicare padding ad una lunghezza fissa tramite gli argomenti `padding="max_length"` e `max_length` del tokenizer.')},m(w,z){r(w,$,z)},d(w){w&&a($)}}}function wr(Ie){let $,w,z,E,T,q,C,I,mo,Ga,le,Ra,ne,Ha,F,uo,oa,fo,ho,Ba,ce,Ja,O,G,sa,pe,_o,ia,bo,Ya,S,vo,ra,$o,go,la,zo,ko,Qa,D,M,wo,na,jo,qo,ca,Eo,Po,yo,L,Ao,pa,Co,So,da,Do,xo,To,ma,Oo,Ka,R,Mo,ua,Lo,Uo,Va,de,Xa,Fe,Wo,Za,me,et,Ge,No,at,ue,tt,Re,Io,ot,fe,st,he,it,H,Fo,fa,Go,Ro,rt,He,Ho,lt,_e,nt,Be,Bo,ct,be,pt,ve,dt,B,Jo,ha,Yo,Qo,mt,j,Ko,_a,Vo,Xo,ba,Zo,es,va,as,ts,$e,os,ss,ut,ge,ft,J,is,$a,rs,ls,ht,ze,_t,ke,bt,U,Y,ga,we,ns,za,cs,vt,Q,ps,ka,ds,ms,$t,je,gt,qe,zt,K,us,wa,fs,hs,kt,Ee,wt,Je,_s,jt,W,V,ja,Pe,bs,qa,vs,qt,P,$s,Ea,gs,zs,Pa,ks,ws,ya,js,qs,Et,ye,Pt,Ae,yt,Ye,Es,At,X,Ct,N,Z,Aa,Ce,Ps,Ca,ys,St,Se,Dt,ee,As,De,Cs,Ss,xt,xe,Tt,Qe,Ds,Ot,Te,Mt,y,xs,Sa,Ts,Os,Da,Ms,Ls,xa,Us,Ws,Lt,k,Ns,Ta,Is,Fs,Oa,Gs,Rs,Ma,Hs,Bs,La,Js,Ys,Ua,Qs,Ks,Ut,ae,Wt,Ke,Vs,Nt,Oe,It,te,Xs,Wa,Zs,ei,Ft,Me,Gt,Ve,ai,Rt,Le,Ht,Xe,ti,Bt,oe,oi,Na,si,ii,Jt,Ue,Yt,se,ri,We,li,ni,Qt;return q=new Fa({}),le=new gr({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/it/chapter3/section4.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/it/chapter3/section4.ipynb"}]}}),ne=new fr({props:{id:"Dh9CL8fyG80"}}),ce=new g({props:{code:`from datasets import load_dataset
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
data_collator = DataCollatorWithPadding(tokenizer=tokenizer)`}}),pe=new Fa({}),de=new g({props:{code:`tokenized_datasets = tokenized_datasets.remove_columns(["sentence1", "sentence2", "idx"])
tokenized_datasets = tokenized_datasets.rename_column("label", "labels")
tokenized_datasets.set_format("torch")
tokenized_datasets["train"].column_names`,highlighted:`tokenized_datasets = tokenized_datasets.remove_columns([<span class="hljs-string">&quot;sentence1&quot;</span>, <span class="hljs-string">&quot;sentence2&quot;</span>, <span class="hljs-string">&quot;idx&quot;</span>])
tokenized_datasets = tokenized_datasets.rename_column(<span class="hljs-string">&quot;label&quot;</span>, <span class="hljs-string">&quot;labels&quot;</span>)
tokenized_datasets.set_format(<span class="hljs-string">&quot;torch&quot;</span>)
tokenized_datasets[<span class="hljs-string">&quot;train&quot;</span>].column_names`}}),me=new g({props:{code:'["attention_mask", "input_ids", "labels", "token_type_ids"]',highlighted:'[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;labels&quot;</span>, <span class="hljs-string">&quot;token_type_ids&quot;</span>]'}}),ue=new g({props:{code:`from torch.utils.data import DataLoader

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
)`}}),fe=new g({props:{code:`for batch in train_dataloader:
    break
{k: v.shape for k, v in batch.items()}`,highlighted:`<span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> train_dataloader:
    <span class="hljs-keyword">break</span>
{k: v.shape <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> batch.items()}`}}),he=new g({props:{code:`{'attention_mask': torch.Size([8, 65]),
 'input_ids': torch.Size([8, 65]),
 'labels': torch.Size([8]),
 'token_type_ids': torch.Size([8, 65])}`,highlighted:`{<span class="hljs-string">&#x27;attention_mask&#x27;</span>: torch.Size([<span class="hljs-number">8</span>, <span class="hljs-number">65</span>]),
 <span class="hljs-string">&#x27;input_ids&#x27;</span>: torch.Size([<span class="hljs-number">8</span>, <span class="hljs-number">65</span>]),
 <span class="hljs-string">&#x27;labels&#x27;</span>: torch.Size([<span class="hljs-number">8</span>]),
 <span class="hljs-string">&#x27;token_type_ids&#x27;</span>: torch.Size([<span class="hljs-number">8</span>, <span class="hljs-number">65</span>])}`}}),_e=new g({props:{code:`from transformers import AutoModelForSequenceClassification

model = AutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=2)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForSequenceClassification

model = AutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=<span class="hljs-number">2</span>)`}}),be=new g({props:{code:`outputs = model(**batch)
print(outputs.loss, outputs.logits.shape)`,highlighted:`outputs = model(**batch)
<span class="hljs-built_in">print</span>(outputs.loss, outputs.logits.shape)`}}),ve=new g({props:{code:"tensor(0.5441, grad_fn=<NllLossBackward>) torch.Size([8, 2])",highlighted:'tensor(<span class="hljs-number">0.5441</span>, grad_fn=&lt;NllLossBackward&gt;) torch.Size([<span class="hljs-number">8</span>, <span class="hljs-number">2</span>])'}}),ge=new g({props:{code:`from transformers import AdamW

optimizer = AdamW(model.parameters(), lr=5e-5)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AdamW

optimizer = AdamW(model.parameters(), lr=<span class="hljs-number">5e-5</span>)`}}),ze=new g({props:{code:`from transformers import get_scheduler

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
<span class="hljs-built_in">print</span>(num_training_steps)`}}),ke=new g({props:{code:"1377",highlighted:'<span class="hljs-number">1377</span>'}}),we=new Fa({}),je=new g({props:{code:`import torch

device = torch.device("cuda") if torch.cuda.is_available() else torch.device("cpu")
model.to(device)
device`,highlighted:`<span class="hljs-keyword">import</span> torch

device = torch.device(<span class="hljs-string">&quot;cuda&quot;</span>) <span class="hljs-keyword">if</span> torch.cuda.is_available() <span class="hljs-keyword">else</span> torch.device(<span class="hljs-string">&quot;cpu&quot;</span>)
model.to(device)
device`}}),qe=new g({props:{code:"device(type='cuda')",highlighted:'device(<span class="hljs-built_in">type</span>=<span class="hljs-string">&#x27;cuda&#x27;</span>)'}}),Ee=new g({props:{code:`from tqdm.auto import tqdm

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
        progress_bar.update(<span class="hljs-number">1</span>)`}}),Pe=new Fa({}),ye=new g({props:{code:`from datasets import load_metric

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

metric.compute()`}}),Ae=new g({props:{code:"{'accuracy': 0.8431372549019608, 'f1': 0.8907849829351535}",highlighted:'{<span class="hljs-string">&#x27;accuracy&#x27;</span>: <span class="hljs-number">0.8431372549019608</span>, <span class="hljs-string">&#x27;f1&#x27;</span>: <span class="hljs-number">0.8907849829351535</span>}'}}),X=new ur({props:{$$slots:{default:[zr]},$$scope:{ctx:Ie}}}),Ce=new Fa({}),Se=new fr({props:{id:"s7dy8QRgjJ0"}}),xe=new g({props:{code:`from transformers import AdamW, AutoModelForSequenceClassification, get_scheduler

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
        progress_bar.update(<span class="hljs-number">1</span>)`}}),Te=new g({props:{code:`+ from accelerate import Accelerator
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
          progress_bar.update(1)`}}),ae=new ur({props:{$$slots:{default:[kr]},$$scope:{ctx:Ie}}}),Oe=new g({props:{code:`from accelerate import Accelerator
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
        progress_bar.update(<span class="hljs-number">1</span>)`}}),Me=new g({props:{code:"accelerate config",highlighted:"accelerate config"}}),Le=new g({props:{code:"accelerate launch train.py",highlighted:'accelerate <span class="hljs-built_in">launch</span> train.py'}}),Ue=new g({props:{code:`from accelerate import notebook_launcher

notebook_launcher(training_function)`,highlighted:`<span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> notebook_launcher

notebook_launcher(training_function)`}}),{c(){$=l("meta"),w=p(),z=l("h1"),E=l("a"),T=l("span"),m(q.$$.fragment),C=p(),I=l("span"),mo=s("Un addestramento completo"),Ga=p(),m(le.$$.fragment),Ra=p(),m(ne.$$.fragment),Ha=p(),F=l("p"),uo=s("Ora vedremo come ottenere gli stessi risultati della sezione precedente senza utilizzare la classe "),oa=l("code"),fo=s("Trainer"),ho=s(". Ancora una volta, aver compiuto il processing dei dati spiegato nella sezione 2 \xE8 un prerequisito. Ecco un riassunto di tutto ci\xF2 di cui avrete bisogno:"),Ba=p(),m(ce.$$.fragment),Ja=p(),O=l("h3"),G=l("a"),sa=l("span"),m(pe.$$.fragment),_o=p(),ia=l("span"),bo=s("Preparazione all'addestramento"),Ya=p(),S=l("p"),vo=s("Prima di cominciare a scrivere il nostro ciclo di addestramento, dobbiamo definire alcuni oggetti. Per prima cosa, i dataloaders (caricatori di dati) che useremo per iterare sulle batch. Ma prima di poter definire i dataloaders, dobbiamo applicare un po\u2019 di postprocessing ai nostri "),ra=l("code"),$o=s("tokenized_datasets"),go=s(", per compiere alcune operazione che "),la=l("code"),zo=s("Trainer"),ko=s(" gestiva in automatico per noi. Nello specifico dobbiamo:"),Qa=p(),D=l("ul"),M=l("li"),wo=s("Rimuovere le colonne corrispondente a valori che il modello non si aspetta (come ad esempio le colonne "),na=l("code"),jo=s("sentence1"),qo=s(" e "),ca=l("code"),Eo=s("sentence2 "),Po=s(")."),yo=p(),L=l("li"),Ao=s("Rinominare la colonna "),pa=l("code"),Co=s("label"),So=s(" a "),da=l("code"),Do=s("labels"),xo=s(" (perch\xE9 il modello si aspetta questo nome)."),To=p(),ma=l("li"),Oo=s("Fissare il formato dei datasets in modo che restituiscano tensori Pytorch invece di liste."),Ka=p(),R=l("p"),Mo=s("L\u2019oggetto "),ua=l("code"),Lo=s("tokenized_datasets"),Uo=s(" ha un metodo per ciascuno di questi punti:"),Va=p(),m(de.$$.fragment),Xa=p(),Fe=l("p"),Wo=s("Possiamo poi controllare che il risultato ha solo solo colonne che saranno accettate dal nostro modello:"),Za=p(),m(me.$$.fragment),et=p(),Ge=l("p"),No=s("Ora che questo \xE8 fatto, possiamo finalmente definire i dataloaders in maniera semplice:"),at=p(),m(ue.$$.fragment),tt=p(),Re=l("p"),Io=s("Per controllare velocemente che non ci sono errori nel processing dei dati, possiamo ispezionare una batch in questo modo:"),ot=p(),m(fe.$$.fragment),st=p(),m(he.$$.fragment),it=p(),H=l("p"),Fo=s("\xC8 importante sottolineare che i valori di shape (forma) potrebbero essere leggermente diversi per voi, poich\xE9 abbiamo fissato "),fa=l("code"),Go=s("shuffle=True"),Ro=s(" (rimescolamento attivo) per i dataloader di apprendimento, e stiamo applicando padding alla lunghezza massima all\u2019interno della batch."),rt=p(),He=l("p"),Ho=s("Ora che il preprocessing dei dati \xE8 completato (uno scopo soddisfacente ma elusivo per qualunque praticante di ML), focalizziamoci sul modello. Lo istanziamo esattamente come avevamo fatto nella sezione precedente:"),lt=p(),m(_e.$$.fragment),nt=p(),Be=l("p"),Bo=s("Per assicurarci che tutto andr\xE0 bene durante l\u2019addestramento, passiamo la batch al modello:"),ct=p(),m(be.$$.fragment),pt=p(),m(ve.$$.fragment),dt=p(),B=l("p"),Jo=s("Tutti i modelli \u{1F917} Transformers restituiscono il valore obiettivo quando vengono fornite loro le "),ha=l("code"),Yo=s("labels"),Qo=s(", e anche i logits (due per ciascun input della batch, quindi un tensore di dimensioni 8 x 2)."),mt=p(),j=l("p"),Ko=s("Siamo quasi pronti a scrivere il ciclo di addestramento! Mancano solo due cose: un ottimizzatore e un learning rate scheduler. Poich\xE9 stiamo tentando di replicare a mano ci\xF2 che viene fatto dal "),_a=l("code"),Vo=s("Trainer"),Xo=s(", utilizzeremo gli stessi valori di default. L\u2019ottimizzatore utilizzato dal "),ba=l("code"),Zo=s("Trainer"),es=s(" \xE8 "),va=l("code"),as=s("AdamW"),ts=s(", che \xE8 lo stesso di Adam ma con una variazione per quanto riguarda la regolarizzazione del decadimento dei pesi (rif. "),$e=l("a"),os=s("\u201CDecoupled Weight Decay Regularization\u201D"),ss=s(" di Ilya Loshchilov e Frank Hutter):"),ut=p(),m(ge.$$.fragment),ft=p(),J=l("p"),is=s("Infine, il learning rate scheduler usato di default \xE8 solo un decadimento lineare dal valore massimo (5e-5) fino a 0. Per definirlo correttamente, dobbiamo sapere il numero di iterazioni per l\u2019addestramento, che \xE8 dato dal numero di epoche che vogliamo eseguire moltiplicato per il numero di batch per l\u2019addestramento (ovverosia la lunghezza del dataloader). Il "),$a=l("code"),rs=s("Trainer"),ls=s(" usa 3 epoche di default, quindi:"),ht=p(),m(ze.$$.fragment),_t=p(),m(ke.$$.fragment),bt=p(),U=l("h3"),Y=l("a"),ga=l("span"),m(we.$$.fragment),ns=p(),za=l("span"),cs=s("Il ciclo di addestramento"),vt=p(),Q=l("p"),ps=s("Un\u2019ultima cosa: se si ha accesso ad una GPU \xE8 consigliato usarla (su una CPU, l\u2019addestramento potrebbe richiedere svariate ore invece di un paio di minuti). Per usare la GPU, definiamo un "),ka=l("code"),ds=s("device"),ms=s(" su cui spostare il modello e le batch:"),$t=p(),m(je.$$.fragment),gt=p(),m(qe.$$.fragment),zt=p(),K=l("p"),us=s("Siamo pronti per l\u2019addestramento! Per avere un\u2019intuizione di quando sar\xE0 finito, aggiungiamo una barra di progresso sul numero di iterazioni di addestramento, usando la libreria "),wa=l("code"),fs=s("tqdm"),hs=s(":"),kt=p(),m(Ee.$$.fragment),wt=p(),Je=l("p"),_s=s("Potete vedere che il nocciolo del ciclo di addestramento \xE8 molto simile a quello nell\u2019introduzione. Non abbiamo chiesto nessun report, quindi il ciclo non ci informer\xE0 su come si sta comportando il modello. Dobbiamo aggiungere un ciclo di valutazione per quello."),jt=p(),W=l("h3"),V=l("a"),ja=l("span"),m(Pe.$$.fragment),bs=p(),qa=l("span"),vs=s("Il ciclo di valutazione"),qt=p(),P=l("p"),$s=s("Come fatto in precedenza, utilizzeremo una metrica fornita dalla libreria \u{1F917} Datasets. Abbiamo gi\xE0 visto il metodo "),Ea=l("code"),gs=s("metric.compute()"),zs=s(", ma le metriche possono automaticamente accumulare le batch nel ciclo di predizione col metodo "),Pa=l("code"),ks=s("add_batch()"),ws=s(". Una volta accumulate tutte le batch, possiamo ottenere il risultato finale con "),ya=l("code"),js=s("metric.compute()"),qs=s(". Ecco come implementare tutto ci\xF2 in un ciclo di valutazione:"),Et=p(),m(ye.$$.fragment),Pt=p(),m(Ae.$$.fragment),yt=p(),Ye=l("p"),Es=s("Ancora una volta, i vostri risultati potrebbero essere leggermente diversi a causa della casualit\xE0 nell\u2019inizializzazione della testa del modello e del ricombinamento dei dati, ma dovrebbero essere nello stesso ordine di grandezza."),At=p(),m(X.$$.fragment),Ct=p(),N=l("h3"),Z=l("a"),Aa=l("span"),m(Ce.$$.fragment),Ps=p(),Ca=l("span"),ys=s("Potenzia il tuo ciclo di addestramento con \u{1F917} Accelerate"),St=p(),m(Se.$$.fragment),Dt=p(),ee=l("p"),As=s("Il ciclo di addestramento che abbiamo definito prima funziona bene per una sola CPU o GPU. Ma grazie alla libreria "),De=l("a"),Cs=s("\u{1F917} Accelerate"),Ss=s(", con alcuni aggiustamenti possiamo attivare l\u2019addestramento distribuito su svariate GPU o TPU. Partendo dalla creazione dei dataloaders di addestramento e validazione, ecco l\u2019aspetto del nostro ciclo di addestramento manuale:"),xt=p(),m(xe.$$.fragment),Tt=p(),Qe=l("p"),Ds=s("Ecco i cambiamenti necessari:"),Ot=p(),m(Te.$$.fragment),Mt=p(),y=l("p"),xs=s("Prima di tutto bisogna inserire la linea di importazione. La seconda linea istanzia un oggetto di tipo "),Sa=l("code"),Ts=s("Accelerator"),Os=s(" che controller\xE0 e inizializzer\xE0 il corretto ambiente distribuito. \u{1F917} Accelerate gestice il posizionamento sui dispositivi per voi, quindi potete togliere le linee che spostavano il modello sul dispositivo (o, se preferite, cambiare in modo da usare "),Da=l("code"),Ms=s("acceleratore.device"),Ls=s(" invece di "),xa=l("code"),Us=s("device"),Ws=s(")."),Lt=p(),k=l("p"),Ns=s("Dopodich\xE9 la maggior parte del lavoro \xE8 fatta dalla linea che invia i dataloaders, il modello e gli ottimizzatori a "),Ta=l("code"),Is=s("accelerator.prepare()"),Fs=s(". Ci\xF2 serve a incapsulare queli oggetti nei contenitori appropriati per far s\xEC che l\u2019addestramento distribuito funzioni correttamente. I cambiamenti rimanenti sono la rimozione della linea che sposta la batch sul "),Oa=l("code"),Gs=s("device"),Rs=s(" (dispositivo) (di nuovo, se volete tenerlo potete semplicemente cambiarlo con "),Ma=l("code"),Hs=s("accelerator.device"),Bs=s(") e lo scambio di "),La=l("code"),Js=s("loss.backward()"),Ys=s(" con "),Ua=l("code"),Qs=s("accelerator.backward(loss)"),Ks=s("."),Ut=p(),m(ae.$$.fragment),Wt=p(),Ke=l("p"),Vs=s("Se volete copiare e incollare il codice per giocarci, ecco un ciclo di addestramento completo che usa \u{1F917} Accelerate:"),Nt=p(),m(Oe.$$.fragment),It=p(),te=l("p"),Xs=s("Mettere questo codice in uno script "),Wa=l("code"),Zs=s("train.py"),ei=s(" lo render\xE0 eseguibile su qualsiasi ambiente distribuito. Per provarlo nel vostro ambiente distribuito, eseguite:"),Ft=p(),m(Me.$$.fragment),Gt=p(),Ve=l("p"),ai=s("che vi chieder\xE0 di rispondere ad alcune domande e inserir\xE0 le vostre risposte in un documento di configurazione usato dal comando:"),Rt=p(),m(Le.$$.fragment),Ht=p(),Xe=l("p"),ti=s("che eseguir\xE0 l\u2019addestramento distribuito."),Bt=p(),oe=l("p"),oi=s("Se volete provarlo in un Notebook (ad esempio, per testarlo con le TPUs su Colab), incollate il codice in una "),Na=l("code"),si=s("training_function()"),ii=s(" ed eseguite l\u2019ultima cella con:"),Jt=p(),m(Ue.$$.fragment),Yt=p(),se=l("p"),ri=s("Potete trovare altri esempi nella "),We=l("a"),li=s("\u{1F917} Accelerate repo"),ni=s("."),this.h()},l(e){const o=vr('[data-svelte="svelte-1phssyn"]',document.head);$=n(o,"META",{name:!0,content:!0}),o.forEach(a),w=d(e),z=n(e,"H1",{class:!0});var Ne=c(z);E=n(Ne,"A",{id:!0,class:!0,href:!0});var Ia=c(E);T=n(Ia,"SPAN",{});var ci=c(T);u(q.$$.fragment,ci),ci.forEach(a),Ia.forEach(a),C=d(Ne),I=n(Ne,"SPAN",{});var pi=c(I);mo=i(pi,"Un addestramento completo"),pi.forEach(a),Ne.forEach(a),Ga=d(e),u(le.$$.fragment,e),Ra=d(e),u(ne.$$.fragment,e),Ha=d(e),F=n(e,"P",{});var Kt=c(F);uo=i(Kt,"Ora vedremo come ottenere gli stessi risultati della sezione precedente senza utilizzare la classe "),oa=n(Kt,"CODE",{});var di=c(oa);fo=i(di,"Trainer"),di.forEach(a),ho=i(Kt,". Ancora una volta, aver compiuto il processing dei dati spiegato nella sezione 2 \xE8 un prerequisito. Ecco un riassunto di tutto ci\xF2 di cui avrete bisogno:"),Kt.forEach(a),Ba=d(e),u(ce.$$.fragment,e),Ja=d(e),O=n(e,"H3",{class:!0});var Vt=c(O);G=n(Vt,"A",{id:!0,class:!0,href:!0});var mi=c(G);sa=n(mi,"SPAN",{});var ui=c(sa);u(pe.$$.fragment,ui),ui.forEach(a),mi.forEach(a),_o=d(Vt),ia=n(Vt,"SPAN",{});var fi=c(ia);bo=i(fi,"Preparazione all'addestramento"),fi.forEach(a),Vt.forEach(a),Ya=d(e),S=n(e,"P",{});var Ze=c(S);vo=i(Ze,"Prima di cominciare a scrivere il nostro ciclo di addestramento, dobbiamo definire alcuni oggetti. Per prima cosa, i dataloaders (caricatori di dati) che useremo per iterare sulle batch. Ma prima di poter definire i dataloaders, dobbiamo applicare un po\u2019 di postprocessing ai nostri "),ra=n(Ze,"CODE",{});var hi=c(ra);$o=i(hi,"tokenized_datasets"),hi.forEach(a),go=i(Ze,", per compiere alcune operazione che "),la=n(Ze,"CODE",{});var _i=c(la);zo=i(_i,"Trainer"),_i.forEach(a),ko=i(Ze," gestiva in automatico per noi. Nello specifico dobbiamo:"),Ze.forEach(a),Qa=d(e),D=n(e,"UL",{});var ea=c(D);M=n(ea,"LI",{});var aa=c(M);wo=i(aa,"Rimuovere le colonne corrispondente a valori che il modello non si aspetta (come ad esempio le colonne "),na=n(aa,"CODE",{});var bi=c(na);jo=i(bi,"sentence1"),bi.forEach(a),qo=i(aa," e "),ca=n(aa,"CODE",{});var vi=c(ca);Eo=i(vi,"sentence2 "),vi.forEach(a),Po=i(aa,")."),aa.forEach(a),yo=d(ea),L=n(ea,"LI",{});var ta=c(L);Ao=i(ta,"Rinominare la colonna "),pa=n(ta,"CODE",{});var $i=c(pa);Co=i($i,"label"),$i.forEach(a),So=i(ta," a "),da=n(ta,"CODE",{});var gi=c(da);Do=i(gi,"labels"),gi.forEach(a),xo=i(ta," (perch\xE9 il modello si aspetta questo nome)."),ta.forEach(a),To=d(ea),ma=n(ea,"LI",{});var zi=c(ma);Oo=i(zi,"Fissare il formato dei datasets in modo che restituiscano tensori Pytorch invece di liste."),zi.forEach(a),ea.forEach(a),Ka=d(e),R=n(e,"P",{});var Xt=c(R);Mo=i(Xt,"L\u2019oggetto "),ua=n(Xt,"CODE",{});var ki=c(ua);Lo=i(ki,"tokenized_datasets"),ki.forEach(a),Uo=i(Xt," ha un metodo per ciascuno di questi punti:"),Xt.forEach(a),Va=d(e),u(de.$$.fragment,e),Xa=d(e),Fe=n(e,"P",{});var wi=c(Fe);Wo=i(wi,"Possiamo poi controllare che il risultato ha solo solo colonne che saranno accettate dal nostro modello:"),wi.forEach(a),Za=d(e),u(me.$$.fragment,e),et=d(e),Ge=n(e,"P",{});var ji=c(Ge);No=i(ji,"Ora che questo \xE8 fatto, possiamo finalmente definire i dataloaders in maniera semplice:"),ji.forEach(a),at=d(e),u(ue.$$.fragment,e),tt=d(e),Re=n(e,"P",{});var qi=c(Re);Io=i(qi,"Per controllare velocemente che non ci sono errori nel processing dei dati, possiamo ispezionare una batch in questo modo:"),qi.forEach(a),ot=d(e),u(fe.$$.fragment,e),st=d(e),u(he.$$.fragment,e),it=d(e),H=n(e,"P",{});var Zt=c(H);Fo=i(Zt,"\xC8 importante sottolineare che i valori di shape (forma) potrebbero essere leggermente diversi per voi, poich\xE9 abbiamo fissato "),fa=n(Zt,"CODE",{});var Ei=c(fa);Go=i(Ei,"shuffle=True"),Ei.forEach(a),Ro=i(Zt," (rimescolamento attivo) per i dataloader di apprendimento, e stiamo applicando padding alla lunghezza massima all\u2019interno della batch."),Zt.forEach(a),rt=d(e),He=n(e,"P",{});var Pi=c(He);Ho=i(Pi,"Ora che il preprocessing dei dati \xE8 completato (uno scopo soddisfacente ma elusivo per qualunque praticante di ML), focalizziamoci sul modello. Lo istanziamo esattamente come avevamo fatto nella sezione precedente:"),Pi.forEach(a),lt=d(e),u(_e.$$.fragment,e),nt=d(e),Be=n(e,"P",{});var yi=c(Be);Bo=i(yi,"Per assicurarci che tutto andr\xE0 bene durante l\u2019addestramento, passiamo la batch al modello:"),yi.forEach(a),ct=d(e),u(be.$$.fragment,e),pt=d(e),u(ve.$$.fragment,e),dt=d(e),B=n(e,"P",{});var eo=c(B);Jo=i(eo,"Tutti i modelli \u{1F917} Transformers restituiscono il valore obiettivo quando vengono fornite loro le "),ha=n(eo,"CODE",{});var Ai=c(ha);Yo=i(Ai,"labels"),Ai.forEach(a),Qo=i(eo,", e anche i logits (due per ciascun input della batch, quindi un tensore di dimensioni 8 x 2)."),eo.forEach(a),mt=d(e),j=n(e,"P",{});var x=c(j);Ko=i(x,"Siamo quasi pronti a scrivere il ciclo di addestramento! Mancano solo due cose: un ottimizzatore e un learning rate scheduler. Poich\xE9 stiamo tentando di replicare a mano ci\xF2 che viene fatto dal "),_a=n(x,"CODE",{});var Ci=c(_a);Vo=i(Ci,"Trainer"),Ci.forEach(a),Xo=i(x,", utilizzeremo gli stessi valori di default. L\u2019ottimizzatore utilizzato dal "),ba=n(x,"CODE",{});var Si=c(ba);Zo=i(Si,"Trainer"),Si.forEach(a),es=i(x," \xE8 "),va=n(x,"CODE",{});var Di=c(va);as=i(Di,"AdamW"),Di.forEach(a),ts=i(x,", che \xE8 lo stesso di Adam ma con una variazione per quanto riguarda la regolarizzazione del decadimento dei pesi (rif. "),$e=n(x,"A",{href:!0,rel:!0});var xi=c($e);os=i(xi,"\u201CDecoupled Weight Decay Regularization\u201D"),xi.forEach(a),ss=i(x," di Ilya Loshchilov e Frank Hutter):"),x.forEach(a),ut=d(e),u(ge.$$.fragment,e),ft=d(e),J=n(e,"P",{});var ao=c(J);is=i(ao,"Infine, il learning rate scheduler usato di default \xE8 solo un decadimento lineare dal valore massimo (5e-5) fino a 0. Per definirlo correttamente, dobbiamo sapere il numero di iterazioni per l\u2019addestramento, che \xE8 dato dal numero di epoche che vogliamo eseguire moltiplicato per il numero di batch per l\u2019addestramento (ovverosia la lunghezza del dataloader). Il "),$a=n(ao,"CODE",{});var Ti=c($a);rs=i(Ti,"Trainer"),Ti.forEach(a),ls=i(ao," usa 3 epoche di default, quindi:"),ao.forEach(a),ht=d(e),u(ze.$$.fragment,e),_t=d(e),u(ke.$$.fragment,e),bt=d(e),U=n(e,"H3",{class:!0});var to=c(U);Y=n(to,"A",{id:!0,class:!0,href:!0});var Oi=c(Y);ga=n(Oi,"SPAN",{});var Mi=c(ga);u(we.$$.fragment,Mi),Mi.forEach(a),Oi.forEach(a),ns=d(to),za=n(to,"SPAN",{});var Li=c(za);cs=i(Li,"Il ciclo di addestramento"),Li.forEach(a),to.forEach(a),vt=d(e),Q=n(e,"P",{});var oo=c(Q);ps=i(oo,"Un\u2019ultima cosa: se si ha accesso ad una GPU \xE8 consigliato usarla (su una CPU, l\u2019addestramento potrebbe richiedere svariate ore invece di un paio di minuti). Per usare la GPU, definiamo un "),ka=n(oo,"CODE",{});var Ui=c(ka);ds=i(Ui,"device"),Ui.forEach(a),ms=i(oo," su cui spostare il modello e le batch:"),oo.forEach(a),$t=d(e),u(je.$$.fragment,e),gt=d(e),u(qe.$$.fragment,e),zt=d(e),K=n(e,"P",{});var so=c(K);us=i(so,"Siamo pronti per l\u2019addestramento! Per avere un\u2019intuizione di quando sar\xE0 finito, aggiungiamo una barra di progresso sul numero di iterazioni di addestramento, usando la libreria "),wa=n(so,"CODE",{});var Wi=c(wa);fs=i(Wi,"tqdm"),Wi.forEach(a),hs=i(so,":"),so.forEach(a),kt=d(e),u(Ee.$$.fragment,e),wt=d(e),Je=n(e,"P",{});var Ni=c(Je);_s=i(Ni,"Potete vedere che il nocciolo del ciclo di addestramento \xE8 molto simile a quello nell\u2019introduzione. Non abbiamo chiesto nessun report, quindi il ciclo non ci informer\xE0 su come si sta comportando il modello. Dobbiamo aggiungere un ciclo di valutazione per quello."),Ni.forEach(a),jt=d(e),W=n(e,"H3",{class:!0});var io=c(W);V=n(io,"A",{id:!0,class:!0,href:!0});var Ii=c(V);ja=n(Ii,"SPAN",{});var Fi=c(ja);u(Pe.$$.fragment,Fi),Fi.forEach(a),Ii.forEach(a),bs=d(io),qa=n(io,"SPAN",{});var Gi=c(qa);vs=i(Gi,"Il ciclo di valutazione"),Gi.forEach(a),io.forEach(a),qt=d(e),P=n(e,"P",{});var ie=c(P);$s=i(ie,"Come fatto in precedenza, utilizzeremo una metrica fornita dalla libreria \u{1F917} Datasets. Abbiamo gi\xE0 visto il metodo "),Ea=n(ie,"CODE",{});var Ri=c(Ea);gs=i(Ri,"metric.compute()"),Ri.forEach(a),zs=i(ie,", ma le metriche possono automaticamente accumulare le batch nel ciclo di predizione col metodo "),Pa=n(ie,"CODE",{});var Hi=c(Pa);ks=i(Hi,"add_batch()"),Hi.forEach(a),ws=i(ie,". Una volta accumulate tutte le batch, possiamo ottenere il risultato finale con "),ya=n(ie,"CODE",{});var Bi=c(ya);js=i(Bi,"metric.compute()"),Bi.forEach(a),qs=i(ie,". Ecco come implementare tutto ci\xF2 in un ciclo di valutazione:"),ie.forEach(a),Et=d(e),u(ye.$$.fragment,e),Pt=d(e),u(Ae.$$.fragment,e),yt=d(e),Ye=n(e,"P",{});var Ji=c(Ye);Es=i(Ji,"Ancora una volta, i vostri risultati potrebbero essere leggermente diversi a causa della casualit\xE0 nell\u2019inizializzazione della testa del modello e del ricombinamento dei dati, ma dovrebbero essere nello stesso ordine di grandezza."),Ji.forEach(a),At=d(e),u(X.$$.fragment,e),Ct=d(e),N=n(e,"H3",{class:!0});var ro=c(N);Z=n(ro,"A",{id:!0,class:!0,href:!0});var Yi=c(Z);Aa=n(Yi,"SPAN",{});var Qi=c(Aa);u(Ce.$$.fragment,Qi),Qi.forEach(a),Yi.forEach(a),Ps=d(ro),Ca=n(ro,"SPAN",{});var Ki=c(Ca);ys=i(Ki,"Potenzia il tuo ciclo di addestramento con \u{1F917} Accelerate"),Ki.forEach(a),ro.forEach(a),St=d(e),u(Se.$$.fragment,e),Dt=d(e),ee=n(e,"P",{});var lo=c(ee);As=i(lo,"Il ciclo di addestramento che abbiamo definito prima funziona bene per una sola CPU o GPU. Ma grazie alla libreria "),De=n(lo,"A",{href:!0,rel:!0});var Vi=c(De);Cs=i(Vi,"\u{1F917} Accelerate"),Vi.forEach(a),Ss=i(lo,", con alcuni aggiustamenti possiamo attivare l\u2019addestramento distribuito su svariate GPU o TPU. Partendo dalla creazione dei dataloaders di addestramento e validazione, ecco l\u2019aspetto del nostro ciclo di addestramento manuale:"),lo.forEach(a),xt=d(e),u(xe.$$.fragment,e),Tt=d(e),Qe=n(e,"P",{});var Xi=c(Qe);Ds=i(Xi,"Ecco i cambiamenti necessari:"),Xi.forEach(a),Ot=d(e),u(Te.$$.fragment,e),Mt=d(e),y=n(e,"P",{});var re=c(y);xs=i(re,"Prima di tutto bisogna inserire la linea di importazione. La seconda linea istanzia un oggetto di tipo "),Sa=n(re,"CODE",{});var Zi=c(Sa);Ts=i(Zi,"Accelerator"),Zi.forEach(a),Os=i(re," che controller\xE0 e inizializzer\xE0 il corretto ambiente distribuito. \u{1F917} Accelerate gestice il posizionamento sui dispositivi per voi, quindi potete togliere le linee che spostavano il modello sul dispositivo (o, se preferite, cambiare in modo da usare "),Da=n(re,"CODE",{});var er=c(Da);Ms=i(er,"acceleratore.device"),er.forEach(a),Ls=i(re," invece di "),xa=n(re,"CODE",{});var ar=c(xa);Us=i(ar,"device"),ar.forEach(a),Ws=i(re,")."),re.forEach(a),Lt=d(e),k=n(e,"P",{});var A=c(k);Ns=i(A,"Dopodich\xE9 la maggior parte del lavoro \xE8 fatta dalla linea che invia i dataloaders, il modello e gli ottimizzatori a "),Ta=n(A,"CODE",{});var tr=c(Ta);Is=i(tr,"accelerator.prepare()"),tr.forEach(a),Fs=i(A,". Ci\xF2 serve a incapsulare queli oggetti nei contenitori appropriati per far s\xEC che l\u2019addestramento distribuito funzioni correttamente. I cambiamenti rimanenti sono la rimozione della linea che sposta la batch sul "),Oa=n(A,"CODE",{});var or=c(Oa);Gs=i(or,"device"),or.forEach(a),Rs=i(A," (dispositivo) (di nuovo, se volete tenerlo potete semplicemente cambiarlo con "),Ma=n(A,"CODE",{});var sr=c(Ma);Hs=i(sr,"accelerator.device"),sr.forEach(a),Bs=i(A,") e lo scambio di "),La=n(A,"CODE",{});var ir=c(La);Js=i(ir,"loss.backward()"),ir.forEach(a),Ys=i(A," con "),Ua=n(A,"CODE",{});var rr=c(Ua);Qs=i(rr,"accelerator.backward(loss)"),rr.forEach(a),Ks=i(A,"."),A.forEach(a),Ut=d(e),u(ae.$$.fragment,e),Wt=d(e),Ke=n(e,"P",{});var lr=c(Ke);Vs=i(lr,"Se volete copiare e incollare il codice per giocarci, ecco un ciclo di addestramento completo che usa \u{1F917} Accelerate:"),lr.forEach(a),Nt=d(e),u(Oe.$$.fragment,e),It=d(e),te=n(e,"P",{});var no=c(te);Xs=i(no,"Mettere questo codice in uno script "),Wa=n(no,"CODE",{});var nr=c(Wa);Zs=i(nr,"train.py"),nr.forEach(a),ei=i(no," lo render\xE0 eseguibile su qualsiasi ambiente distribuito. Per provarlo nel vostro ambiente distribuito, eseguite:"),no.forEach(a),Ft=d(e),u(Me.$$.fragment,e),Gt=d(e),Ve=n(e,"P",{});var cr=c(Ve);ai=i(cr,"che vi chieder\xE0 di rispondere ad alcune domande e inserir\xE0 le vostre risposte in un documento di configurazione usato dal comando:"),cr.forEach(a),Rt=d(e),u(Le.$$.fragment,e),Ht=d(e),Xe=n(e,"P",{});var pr=c(Xe);ti=i(pr,"che eseguir\xE0 l\u2019addestramento distribuito."),pr.forEach(a),Bt=d(e),oe=n(e,"P",{});var co=c(oe);oi=i(co,"Se volete provarlo in un Notebook (ad esempio, per testarlo con le TPUs su Colab), incollate il codice in una "),Na=n(co,"CODE",{});var dr=c(Na);si=i(dr,"training_function()"),dr.forEach(a),ii=i(co," ed eseguite l\u2019ultima cella con:"),co.forEach(a),Jt=d(e),u(Ue.$$.fragment,e),Yt=d(e),se=n(e,"P",{});var po=c(se);ri=i(po,"Potete trovare altri esempi nella "),We=n(po,"A",{href:!0,rel:!0});var mr=c(We);li=i(mr,"\u{1F917} Accelerate repo"),mr.forEach(a),ni=i(po,"."),po.forEach(a),this.h()},h(){v($,"name","hf:doc:metadata"),v($,"content",JSON.stringify(jr)),v(E,"id","un-addestramento-completo"),v(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(E,"href","#un-addestramento-completo"),v(z,"class","relative group"),v(G,"id","preparazione-alladdestramento"),v(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(G,"href","#preparazione-alladdestramento"),v(O,"class","relative group"),v($e,"href","https://arxiv.org/abs/1711.05101"),v($e,"rel","nofollow"),v(Y,"id","il-ciclo-di-addestramento"),v(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(Y,"href","#il-ciclo-di-addestramento"),v(U,"class","relative group"),v(V,"id","il-ciclo-di-valutazione"),v(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(V,"href","#il-ciclo-di-valutazione"),v(W,"class","relative group"),v(Z,"id","potenzia-il-tuo-ciclo-di-addestramento-con-accelerate"),v(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(Z,"href","#potenzia-il-tuo-ciclo-di-addestramento-con-accelerate"),v(N,"class","relative group"),v(De,"href","https://github.com/huggingface/accelerate"),v(De,"rel","nofollow"),v(We,"href","https://github.com/huggingface/accelerate/tree/main/examples"),v(We,"rel","nofollow")},m(e,o){t(document.head,$),r(e,w,o),r(e,z,o),t(z,E),t(E,T),f(q,T,null),t(z,C),t(z,I),t(I,mo),r(e,Ga,o),f(le,e,o),r(e,Ra,o),f(ne,e,o),r(e,Ha,o),r(e,F,o),t(F,uo),t(F,oa),t(oa,fo),t(F,ho),r(e,Ba,o),f(ce,e,o),r(e,Ja,o),r(e,O,o),t(O,G),t(G,sa),f(pe,sa,null),t(O,_o),t(O,ia),t(ia,bo),r(e,Ya,o),r(e,S,o),t(S,vo),t(S,ra),t(ra,$o),t(S,go),t(S,la),t(la,zo),t(S,ko),r(e,Qa,o),r(e,D,o),t(D,M),t(M,wo),t(M,na),t(na,jo),t(M,qo),t(M,ca),t(ca,Eo),t(M,Po),t(D,yo),t(D,L),t(L,Ao),t(L,pa),t(pa,Co),t(L,So),t(L,da),t(da,Do),t(L,xo),t(D,To),t(D,ma),t(ma,Oo),r(e,Ka,o),r(e,R,o),t(R,Mo),t(R,ua),t(ua,Lo),t(R,Uo),r(e,Va,o),f(de,e,o),r(e,Xa,o),r(e,Fe,o),t(Fe,Wo),r(e,Za,o),f(me,e,o),r(e,et,o),r(e,Ge,o),t(Ge,No),r(e,at,o),f(ue,e,o),r(e,tt,o),r(e,Re,o),t(Re,Io),r(e,ot,o),f(fe,e,o),r(e,st,o),f(he,e,o),r(e,it,o),r(e,H,o),t(H,Fo),t(H,fa),t(fa,Go),t(H,Ro),r(e,rt,o),r(e,He,o),t(He,Ho),r(e,lt,o),f(_e,e,o),r(e,nt,o),r(e,Be,o),t(Be,Bo),r(e,ct,o),f(be,e,o),r(e,pt,o),f(ve,e,o),r(e,dt,o),r(e,B,o),t(B,Jo),t(B,ha),t(ha,Yo),t(B,Qo),r(e,mt,o),r(e,j,o),t(j,Ko),t(j,_a),t(_a,Vo),t(j,Xo),t(j,ba),t(ba,Zo),t(j,es),t(j,va),t(va,as),t(j,ts),t(j,$e),t($e,os),t(j,ss),r(e,ut,o),f(ge,e,o),r(e,ft,o),r(e,J,o),t(J,is),t(J,$a),t($a,rs),t(J,ls),r(e,ht,o),f(ze,e,o),r(e,_t,o),f(ke,e,o),r(e,bt,o),r(e,U,o),t(U,Y),t(Y,ga),f(we,ga,null),t(U,ns),t(U,za),t(za,cs),r(e,vt,o),r(e,Q,o),t(Q,ps),t(Q,ka),t(ka,ds),t(Q,ms),r(e,$t,o),f(je,e,o),r(e,gt,o),f(qe,e,o),r(e,zt,o),r(e,K,o),t(K,us),t(K,wa),t(wa,fs),t(K,hs),r(e,kt,o),f(Ee,e,o),r(e,wt,o),r(e,Je,o),t(Je,_s),r(e,jt,o),r(e,W,o),t(W,V),t(V,ja),f(Pe,ja,null),t(W,bs),t(W,qa),t(qa,vs),r(e,qt,o),r(e,P,o),t(P,$s),t(P,Ea),t(Ea,gs),t(P,zs),t(P,Pa),t(Pa,ks),t(P,ws),t(P,ya),t(ya,js),t(P,qs),r(e,Et,o),f(ye,e,o),r(e,Pt,o),f(Ae,e,o),r(e,yt,o),r(e,Ye,o),t(Ye,Es),r(e,At,o),f(X,e,o),r(e,Ct,o),r(e,N,o),t(N,Z),t(Z,Aa),f(Ce,Aa,null),t(N,Ps),t(N,Ca),t(Ca,ys),r(e,St,o),f(Se,e,o),r(e,Dt,o),r(e,ee,o),t(ee,As),t(ee,De),t(De,Cs),t(ee,Ss),r(e,xt,o),f(xe,e,o),r(e,Tt,o),r(e,Qe,o),t(Qe,Ds),r(e,Ot,o),f(Te,e,o),r(e,Mt,o),r(e,y,o),t(y,xs),t(y,Sa),t(Sa,Ts),t(y,Os),t(y,Da),t(Da,Ms),t(y,Ls),t(y,xa),t(xa,Us),t(y,Ws),r(e,Lt,o),r(e,k,o),t(k,Ns),t(k,Ta),t(Ta,Is),t(k,Fs),t(k,Oa),t(Oa,Gs),t(k,Rs),t(k,Ma),t(Ma,Hs),t(k,Bs),t(k,La),t(La,Js),t(k,Ys),t(k,Ua),t(Ua,Qs),t(k,Ks),r(e,Ut,o),f(ae,e,o),r(e,Wt,o),r(e,Ke,o),t(Ke,Vs),r(e,Nt,o),f(Oe,e,o),r(e,It,o),r(e,te,o),t(te,Xs),t(te,Wa),t(Wa,Zs),t(te,ei),r(e,Ft,o),f(Me,e,o),r(e,Gt,o),r(e,Ve,o),t(Ve,ai),r(e,Rt,o),f(Le,e,o),r(e,Ht,o),r(e,Xe,o),t(Xe,ti),r(e,Bt,o),r(e,oe,o),t(oe,oi),t(oe,Na),t(Na,si),t(oe,ii),r(e,Jt,o),f(Ue,e,o),r(e,Yt,o),r(e,se,o),t(se,ri),t(se,We),t(We,li),t(se,ni),Qt=!0},p(e,[o]){const Ne={};o&2&&(Ne.$$scope={dirty:o,ctx:e}),X.$set(Ne);const Ia={};o&2&&(Ia.$$scope={dirty:o,ctx:e}),ae.$set(Ia)},i(e){Qt||(h(q.$$.fragment,e),h(le.$$.fragment,e),h(ne.$$.fragment,e),h(ce.$$.fragment,e),h(pe.$$.fragment,e),h(de.$$.fragment,e),h(me.$$.fragment,e),h(ue.$$.fragment,e),h(fe.$$.fragment,e),h(he.$$.fragment,e),h(_e.$$.fragment,e),h(be.$$.fragment,e),h(ve.$$.fragment,e),h(ge.$$.fragment,e),h(ze.$$.fragment,e),h(ke.$$.fragment,e),h(we.$$.fragment,e),h(je.$$.fragment,e),h(qe.$$.fragment,e),h(Ee.$$.fragment,e),h(Pe.$$.fragment,e),h(ye.$$.fragment,e),h(Ae.$$.fragment,e),h(X.$$.fragment,e),h(Ce.$$.fragment,e),h(Se.$$.fragment,e),h(xe.$$.fragment,e),h(Te.$$.fragment,e),h(ae.$$.fragment,e),h(Oe.$$.fragment,e),h(Me.$$.fragment,e),h(Le.$$.fragment,e),h(Ue.$$.fragment,e),Qt=!0)},o(e){_(q.$$.fragment,e),_(le.$$.fragment,e),_(ne.$$.fragment,e),_(ce.$$.fragment,e),_(pe.$$.fragment,e),_(de.$$.fragment,e),_(me.$$.fragment,e),_(ue.$$.fragment,e),_(fe.$$.fragment,e),_(he.$$.fragment,e),_(_e.$$.fragment,e),_(be.$$.fragment,e),_(ve.$$.fragment,e),_(ge.$$.fragment,e),_(ze.$$.fragment,e),_(ke.$$.fragment,e),_(we.$$.fragment,e),_(je.$$.fragment,e),_(qe.$$.fragment,e),_(Ee.$$.fragment,e),_(Pe.$$.fragment,e),_(ye.$$.fragment,e),_(Ae.$$.fragment,e),_(X.$$.fragment,e),_(Ce.$$.fragment,e),_(Se.$$.fragment,e),_(xe.$$.fragment,e),_(Te.$$.fragment,e),_(ae.$$.fragment,e),_(Oe.$$.fragment,e),_(Me.$$.fragment,e),_(Le.$$.fragment,e),_(Ue.$$.fragment,e),Qt=!1},d(e){a($),e&&a(w),e&&a(z),b(q),e&&a(Ga),b(le,e),e&&a(Ra),b(ne,e),e&&a(Ha),e&&a(F),e&&a(Ba),b(ce,e),e&&a(Ja),e&&a(O),b(pe),e&&a(Ya),e&&a(S),e&&a(Qa),e&&a(D),e&&a(Ka),e&&a(R),e&&a(Va),b(de,e),e&&a(Xa),e&&a(Fe),e&&a(Za),b(me,e),e&&a(et),e&&a(Ge),e&&a(at),b(ue,e),e&&a(tt),e&&a(Re),e&&a(ot),b(fe,e),e&&a(st),b(he,e),e&&a(it),e&&a(H),e&&a(rt),e&&a(He),e&&a(lt),b(_e,e),e&&a(nt),e&&a(Be),e&&a(ct),b(be,e),e&&a(pt),b(ve,e),e&&a(dt),e&&a(B),e&&a(mt),e&&a(j),e&&a(ut),b(ge,e),e&&a(ft),e&&a(J),e&&a(ht),b(ze,e),e&&a(_t),b(ke,e),e&&a(bt),e&&a(U),b(we),e&&a(vt),e&&a(Q),e&&a($t),b(je,e),e&&a(gt),b(qe,e),e&&a(zt),e&&a(K),e&&a(kt),b(Ee,e),e&&a(wt),e&&a(Je),e&&a(jt),e&&a(W),b(Pe),e&&a(qt),e&&a(P),e&&a(Et),b(ye,e),e&&a(Pt),b(Ae,e),e&&a(yt),e&&a(Ye),e&&a(At),b(X,e),e&&a(Ct),e&&a(N),b(Ce),e&&a(St),b(Se,e),e&&a(Dt),e&&a(ee),e&&a(xt),b(xe,e),e&&a(Tt),e&&a(Qe),e&&a(Ot),b(Te,e),e&&a(Mt),e&&a(y),e&&a(Lt),e&&a(k),e&&a(Ut),b(ae,e),e&&a(Wt),e&&a(Ke),e&&a(Nt),b(Oe,e),e&&a(It),e&&a(te),e&&a(Ft),b(Me,e),e&&a(Gt),e&&a(Ve),e&&a(Rt),b(Le,e),e&&a(Ht),e&&a(Xe),e&&a(Bt),e&&a(oe),e&&a(Jt),b(Ue,e),e&&a(Yt),e&&a(se)}}}const jr={local:"un-addestramento-completo",sections:[{local:"preparazione-alladdestramento",title:"Preparazione all'addestramento"},{local:"il-ciclo-di-addestramento",title:"Il ciclo di addestramento"},{local:"il-ciclo-di-valutazione",title:"Il ciclo di valutazione"},{local:"potenzia-il-tuo-ciclo-di-addestramento-con-accelerate",title:"Potenzia il tuo ciclo di addestramento con \u{1F917} Accelerate"}],title:"Un addestramento completo"};function qr(Ie){return $r(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Dr extends hr{constructor($){super();_r(this,$,qr,wr,br,{})}}export{Dr as default,jr as metadata};
