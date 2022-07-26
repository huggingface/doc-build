import{S as $l,i as gl,s as kl,e as n,k as c,w as m,t,M as ql,c as i,d as a,m as d,a as p,x as u,h as r,b as v,G as s,g as l,y as f,q as h,o as _,B as b,v as jl}from"../../chunks/vendor-hf-doc-builder.js";import{T as bl}from"../../chunks/Tip-hf-doc-builder.js";import{Y as vl}from"../../chunks/Youtube-hf-doc-builder.js";import{I as Ga}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as g}from"../../chunks/CodeBlock-hf-doc-builder.js";import{D as wl}from"../../chunks/DocNotebookDropdown-hf-doc-builder.js";function zl(Re){let $,j,k,E,O;return{c(){$=n("p"),j=t("\u270F\uFE0F "),k=n("strong"),E=t("Int\xE9ntalo!"),O=t(" Modifica el bucle de entrenamiento anterior para ajustar tu modelo en el conjunto de datos SST-2.")},l(z){$=i(z,"P",{});var D=p($);j=r(D,"\u270F\uFE0F "),k=i(D,"STRONG",{});var F=p(k);E=r(F,"Int\xE9ntalo!"),F.forEach(a),O=r(D," Modifica el bucle de entrenamiento anterior para ajustar tu modelo en el conjunto de datos SST-2."),D.forEach(a)},m(z,D){l(z,$,D),s($,j),s($,k),s(k,E),s($,O)},d(z){z&&a($)}}}function El(Re){let $;return{c(){$=t('\u26A0\uFE0F Para obtener el beneficio de la aceleraci\xF3n ofrecida por los TPUs de la nube, recomendamos rellenar las muestras hasta una longitud fija con los argumentos  `padding="max_length"` y `max_length` del tokenizador.')},l(j){$=r(j,'\u26A0\uFE0F Para obtener el beneficio de la aceleraci\xF3n ofrecida por los TPUs de la nube, recomendamos rellenar las muestras hasta una longitud fija con los argumentos  `padding="max_length"` y `max_length` del tokenizador.')},m(j,k){l(j,$,k)},d(j){j&&a($)}}}function yl(Re){let $,j,k,E,O,z,D,F,uo,Ya,ie,Ia,pe,Ha,R,fo,oa,ho,_o,Ba,ce,Ja,L,G,ta,de,bo,ra,vo,Qa,S,$o,la,go,ko,na,qo,jo,Ka,x,N,wo,ia,zo,Eo,pa,yo,Ao,Po,C,Co,ca,Do,So,da,xo,To,ma,Oo,Lo,No,ua,Uo,Va,Y,Wo,fa,Mo,Fo,Xa,me,Za,Ge,Ro,es,ue,as,Ye,Go,ss,fe,os,Ie,Yo,ts,he,rs,_e,ls,I,Io,ha,Ho,Bo,ns,He,Jo,is,be,ps,Be,Qo,cs,ve,ds,$e,ms,H,Ko,_a,Vo,Xo,us,w,Zo,ba,et,at,va,st,ot,$a,tt,rt,ge,lt,nt,fs,ke,hs,B,it,ga,pt,ct,_s,qe,bs,je,vs,U,J,ka,we,dt,qa,mt,$s,Q,ut,ja,ft,ht,gs,ze,ks,Ee,qs,K,_t,wa,bt,vt,js,ye,ws,Je,$t,zs,W,V,za,Ae,gt,Ea,kt,Es,y,qt,ya,jt,wt,Aa,zt,Et,Pa,yt,At,ys,Pe,As,Ce,Ps,Qe,Pt,Cs,X,Ds,M,Z,Ca,De,Ct,Da,Dt,Ss,Se,xs,ee,St,xe,xt,Tt,Ts,Te,Os,Ke,Ot,Ls,Oe,Ns,A,Lt,Sa,Nt,Ut,xa,Wt,Mt,Ta,Ft,Rt,Us,q,Gt,Oa,Yt,It,La,Ht,Bt,Na,Jt,Qt,Ua,Kt,Vt,Wa,Xt,Zt,Ws,ae,Ms,Ve,er,Fs,Le,Rs,se,ar,Ma,sr,or,Gs,Ne,Ys,Xe,tr,Is,Ue,Hs,Ze,rr,Bs,oe,lr,Fa,nr,ir,Js,We,Qs,te,pr,Me,cr,dr,Ks;return z=new Ga({}),ie=new wl({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter3/section4.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter3/section4.ipynb"}]}}),pe=new vl({props:{id:"Dh9CL8fyG80"}}),ce=new g({props:{code:`from datasets import load_dataset
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
data_collator = DataCollatorWithPadding(tokenizer=tokenizer)`}}),de=new Ga({}),me=new g({props:{code:`tokenized_datasets = tokenized_datasets.remove_columns(["sentence1", "sentence2", "idx"])
tokenized_datasets = tokenized_datasets.rename_column("label", "labels")
tokenized_datasets.set_format("torch")
tokenized_datasets["train"].column_names`,highlighted:`tokenized_datasets = tokenized_datasets.remove_columns([<span class="hljs-string">&quot;sentence1&quot;</span>, <span class="hljs-string">&quot;sentence2&quot;</span>, <span class="hljs-string">&quot;idx&quot;</span>])
tokenized_datasets = tokenized_datasets.rename_column(<span class="hljs-string">&quot;label&quot;</span>, <span class="hljs-string">&quot;labels&quot;</span>)
tokenized_datasets.set_format(<span class="hljs-string">&quot;torch&quot;</span>)
tokenized_datasets[<span class="hljs-string">&quot;train&quot;</span>].column_names`}}),ue=new g({props:{code:'["attention_mask", "input_ids", "labels", "token_type_ids"]',highlighted:'[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;labels&quot;</span>, <span class="hljs-string">&quot;token_type_ids&quot;</span>]'}}),fe=new g({props:{code:`from torch.utils.data import DataLoader

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
)`}}),he=new g({props:{code:`for batch in train_dataloader:
    break
{k: v.shape for k, v in batch.items()}`,highlighted:`<span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> train_dataloader:
    <span class="hljs-keyword">break</span>
{k: v.shape <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> batch.items()}`}}),_e=new g({props:{code:`{'attention_mask': torch.Size([8, 65]),
 'input_ids': torch.Size([8, 65]),
 'labels': torch.Size([8]),
 'token_type_ids': torch.Size([8, 65])}`,highlighted:`{<span class="hljs-string">&#x27;attention_mask&#x27;</span>: torch.Size([<span class="hljs-number">8</span>, <span class="hljs-number">65</span>]),
 <span class="hljs-string">&#x27;input_ids&#x27;</span>: torch.Size([<span class="hljs-number">8</span>, <span class="hljs-number">65</span>]),
 <span class="hljs-string">&#x27;labels&#x27;</span>: torch.Size([<span class="hljs-number">8</span>]),
 <span class="hljs-string">&#x27;token_type_ids&#x27;</span>: torch.Size([<span class="hljs-number">8</span>, <span class="hljs-number">65</span>])}`}}),be=new g({props:{code:`from transformers import AutoModelForSequenceClassification

model = AutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=2)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForSequenceClassification

model = AutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=<span class="hljs-number">2</span>)`}}),ve=new g({props:{code:`outputs = model(**batch)
print(outputs.loss, outputs.logits.shape)`,highlighted:`outputs = model(**batch)
<span class="hljs-built_in">print</span>(outputs.loss, outputs.logits.shape)`}}),$e=new g({props:{code:"tensor(0.5441, grad_fn=<NllLossBackward>) torch.Size([8, 2])",highlighted:'tensor(<span class="hljs-number">0.5441</span>, grad_fn=&lt;NllLossBackward&gt;) torch.Size([<span class="hljs-number">8</span>, <span class="hljs-number">2</span>])'}}),ke=new g({props:{code:`from transformers import AdamW

optimizer = AdamW(model.parameters(), lr=5e-5)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AdamW

optimizer = AdamW(model.parameters(), lr=<span class="hljs-number">5e-5</span>)`}}),qe=new g({props:{code:`from transformers import get_scheduler

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
<span class="hljs-built_in">print</span>(num_training_steps)`}}),je=new g({props:{code:"1377",highlighted:'<span class="hljs-number">1377</span>'}}),we=new Ga({}),ze=new g({props:{code:`import torch

device = torch.device("cuda") if torch.cuda.is_available() else torch.device("cpu")
model.to(device)
device`,highlighted:`<span class="hljs-keyword">import</span> torch

device = torch.device(<span class="hljs-string">&quot;cuda&quot;</span>) <span class="hljs-keyword">if</span> torch.cuda.is_available() <span class="hljs-keyword">else</span> torch.device(<span class="hljs-string">&quot;cpu&quot;</span>)
model.to(device)
device`}}),Ee=new g({props:{code:"device(type='cuda')",highlighted:'device(<span class="hljs-built_in">type</span>=<span class="hljs-string">&#x27;cuda&#x27;</span>)'}}),ye=new g({props:{code:`from tqdm.auto import tqdm

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
        progress_bar.update(<span class="hljs-number">1</span>)`}}),Ae=new Ga({}),Pe=new g({props:{code:`import evaluate

metric = evaluate.load("glue", "mrpc")
model.eval()
for batch in eval_dataloader:
    batch = {k: v.to(device) for k, v in batch.items()}
    with torch.no_grad():
        outputs = model(**batch)

    logits = outputs.logits
    predictions = torch.argmax(logits, dim=-1)
    metric.add_batch(predictions=predictions, references=batch["labels"])

metric.compute()`,highlighted:`<span class="hljs-keyword">import</span> evaluate

metric = evaluate.load(<span class="hljs-string">&quot;glue&quot;</span>, <span class="hljs-string">&quot;mrpc&quot;</span>)
model.<span class="hljs-built_in">eval</span>()
<span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> eval_dataloader:
    batch = {k: v.to(device) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> batch.items()}
    <span class="hljs-keyword">with</span> torch.no_grad():
        outputs = model(**batch)

    logits = outputs.logits
    predictions = torch.argmax(logits, dim=-<span class="hljs-number">1</span>)
    metric.add_batch(predictions=predictions, references=batch[<span class="hljs-string">&quot;labels&quot;</span>])

metric.compute()`}}),Ce=new g({props:{code:"{'accuracy': 0.8431372549019608, 'f1': 0.8907849829351535}",highlighted:'{<span class="hljs-string">&#x27;accuracy&#x27;</span>: <span class="hljs-number">0.8431372549019608</span>, <span class="hljs-string">&#x27;f1&#x27;</span>: <span class="hljs-number">0.8907849829351535</span>}'}}),X=new bl({props:{$$slots:{default:[zl]},$$scope:{ctx:Re}}}),De=new Ga({}),Se=new vl({props:{id:"s7dy8QRgjJ0"}}),Te=new g({props:{code:`from transformers import AdamW, AutoModelForSequenceClassification, get_scheduler

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
        progress_bar.update(<span class="hljs-number">1</span>)`}}),Oe=new g({props:{code:`+ from accelerate import Accelerator
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
          progress_bar.update(1)`}}),ae=new bl({props:{$$slots:{default:[El]},$$scope:{ctx:Re}}}),Le=new g({props:{code:`from accelerate import Accelerator
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
        progress_bar.update(<span class="hljs-number">1</span>)`}}),Ne=new g({props:{code:"accelerate config",highlighted:"accelerate config"}}),Ue=new g({props:{code:"accelerate launch train.py",highlighted:'accelerate <span class="hljs-built_in">launch</span> train.py'}}),We=new g({props:{code:`from accelerate import notebook_launcher

notebook_launcher(training_function)`,highlighted:`<span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> notebook_launcher

notebook_launcher(training_function)`}}),{c(){$=n("meta"),j=c(),k=n("h1"),E=n("a"),O=n("span"),m(z.$$.fragment),D=c(),F=n("span"),uo=t("Un entrenamiento completo"),Ya=c(),m(ie.$$.fragment),Ia=c(),m(pe.$$.fragment),Ha=c(),R=n("p"),fo=t("Ahora veremos como obtener los mismos resultados de la \xFAltima secci\xF3n sin hacer uso de la clase "),oa=n("code"),ho=t("Trainer"),_o=t(". De nuevo, asumimos que has hecho el procesamiento de datos en la secci\xF3n 2. Aqu\xED mostramos un resumen que cubre todo lo que necesitar\xE1s."),Ba=c(),m(ce.$$.fragment),Ja=c(),L=n("h3"),G=n("a"),ta=n("span"),m(de.$$.fragment),bo=c(),ra=n("span"),vo=t("Prep\xE1rate para el entrenamiento"),Qa=c(),S=n("p"),$o=t("Antes de escribir nuestro bucle de entrenamiento, necesitaremos definir algunos objetos. Los primeros son los dataloaders que usaremos para iterar sobre lotes. Pero antes de que podamos definir esos dataloaders, necesitamos aplicar un poquito de preprocesamiento a nuestro "),la=n("code"),go=t("tokenized_datasets"),ko=t(", para encargarnos de algunas cosas que el "),na=n("code"),qo=t("Trainer"),jo=t(" hizo por nosotros de manera autom\xE1tica. Espec\xEDficamente, necesitamos:"),Ka=c(),x=n("ul"),N=n("li"),wo=t("Remover las columnas correspondientes a valores que el model no espera (como las columnas "),ia=n("code"),zo=t("sentence1"),Eo=t(" y "),pa=n("code"),yo=t("sentence2"),Ao=t(")."),Po=c(),C=n("li"),Co=t("Renombrar la columna "),ca=n("code"),Do=t("label"),So=t(" con "),da=n("code"),xo=t("labels"),To=t(" (porque el modelo espera el argumento llamado "),ma=n("code"),Oo=t("labels"),Lo=t(")."),No=c(),ua=n("li"),Uo=t("Configurar el formato de los conjuntos de datos para que retornen tensores PyTorch en lugar de listas."),Va=c(),Y=n("p"),Wo=t("Nuestro "),fa=n("code"),Mo=t("tokenized_datasets"),Fo=t(" tiene un m\xE9todo para cada uno de esos pasos:"),Xa=c(),m(me.$$.fragment),Za=c(),Ge=n("p"),Ro=t("Ahora podemos verificar que el resultado solo tiene columnas que nuestro modelo aceptar\xE1:"),es=c(),m(ue.$$.fragment),as=c(),Ye=n("p"),Go=t("Ahora que esto esta hecho, es f\xE1cil definir nuestros dataloaders:"),ss=c(),m(fe.$$.fragment),os=c(),Ie=n("p"),Yo=t("Para verificar r\xE1pidamente que no hubo errores en el procesamiento de datos, podemos inspeccionar un lote de la siguiente manera:"),ts=c(),m(he.$$.fragment),rs=c(),m(_e.$$.fragment),ls=c(),I=n("p"),Io=t("N\xF3tese que los tama\xF1os ser\xE1n un poco distintos en tu caso ya que configuramos "),ha=n("code"),Ho=t("shuffle=True"),Bo=t(" para el dataloader de entrenamiento y estamos rellenando a la m\xE1xima longitud dentro del lote."),ns=c(),He=n("p"),Jo=t("Ahora que hemos completado el preprocesamiento de datos (un objetivo gratificante y al mismo tiempo elusivo para cual cualquier practicante de ML), enfoqu\xE9monos en el modelo. Lo vamos a crear exactamente como lo hicimos en la secci\xF3n anterior."),is=c(),m(be.$$.fragment),ps=c(),Be=n("p"),Qo=t("Para asegurarnos de que todo va a salir sin problems durante el entrenamiento, vamos a pasar un lote a este modelo:"),cs=c(),m(ve.$$.fragment),ds=c(),m($e.$$.fragment),ms=c(),H=n("p"),Ko=t("Todos los modelos Transformers \u{1F917} van a retornar la p\xE9rdida cuando se pasan los "),_a=n("code"),Vo=t("labels"),Xo=t(", y tambi\xE9n obtenemos los logits (dos por cada entrada en nuestro lote, asi que es un tensor de tama\xF1o 8 x 2)."),us=c(),w=n("p"),Zo=t("Estamos casi listos para escribir nuestro bucle de entrenamiento! Nos est\xE1n faltando dos cosas: un optimizador y un programador de la rata de aprendizaje. Ya que estamos tratando de replicar a mano lo que el "),ba=n("code"),et=t("Trainer"),at=t(" estaba haciendo, usaremos los mismos valores por defecto. El optimizador usado por el "),va=n("code"),st=t("Trainer"),ot=t(" es "),$a=n("code"),tt=t("AdamW"),rt=t(", que es el mismo que Adam, pero con un cambio para la regularizaci\xF3n de decremento de los pesos (ver "),ge=n("a"),lt=t("\u201CDecoupled Weight Decay Regularization\u201D"),nt=t(" por Ilya Loshchilov y Frank Hutter):"),fs=c(),m(ke.$$.fragment),hs=c(),B=n("p"),it=t("Finalmente, el programador por defecto de la rata de aprendizaje es un decremento lineal desde al valor m\xE1ximo (5e-5) hasta 0. Para definirlo apropiadamente, necesitamos saber el n\xFAmero de pasos de entrenamiento que vamos a tener, el cual viene dado por el n\xFAmero de \xE9pocas que deseamos correr multiplicado por el n\xFAmero de lotes de entrenamiento (que es el largo de nuestro dataloader de entrenamiento). El "),ga=n("code"),pt=t("Trainer"),ct=t(" usa tres \xE9pocas por defecto, asi que usaremos eso:"),_s=c(),m(qe.$$.fragment),bs=c(),m(je.$$.fragment),vs=c(),U=n("h3"),J=n("a"),ka=n("span"),m(we.$$.fragment),dt=c(),qa=n("span"),mt=t("El bucle de entrenamiento"),$s=c(),Q=n("p"),ut=t("Una \xFAltima cosa: vamos a querer usar el GPU si tenemos acceso a uno (en un CPU, el entrenamiento puede tomar varias horas en lugar de unos pocos minutos). Para hacer esto, definimos un "),ja=n("code"),ft=t("device"),ht=t(" sobre el que pondremos nuestro modelo y nuestros lotes:"),gs=c(),m(ze.$$.fragment),ks=c(),m(Ee.$$.fragment),qs=c(),K=n("p"),_t=t("Ya estamos listos para entrenar! Para tener una idea de cuando el entrenamiento va a terminar, adicionamos una barra de progreso sobre el n\xFAmero de pasos de entrenamiento, usando la libreria "),wa=n("code"),bt=t("tqdm"),vt=t(":"),js=c(),m(ye.$$.fragment),ws=c(),Je=n("p"),$t=t("Puedes ver que la parte central del bucle de entrenamiento luce bastante como el de la introducci\xF3n. No se incluy\xF3 ning\xFAn tipo de reportes, asi que este bucle de entrenamiento no va a indicar como se esta desempe\xF1ando el modelo. Para eso necesitamos a\xF1adir un bucle de evaluaci\xF3n."),zs=c(),W=n("h3"),V=n("a"),za=n("span"),m(Ae.$$.fragment),gt=c(),Ea=n("span"),kt=t("El bucle de evaluaci\xF3n"),Es=c(),y=n("p"),qt=t("Como lo hicimos anteriormente, usaremos una m\xE9trica ofrecida por la libreria \u{1F917} Evaluate. Ya hemos visto el m\xE9todo "),ya=n("code"),jt=t("metric.compute()"),wt=t(", pero de hecho las m\xE9tricas se pueden acumular sobre los lotes a medida que avanzamos en el bucle de predicci\xF3n con el m\xE9todo "),Aa=n("code"),zt=t("add_batch()"),Et=t(". Una vez que hemos acumulado todos los lotes, podemos obtener el resultado final con "),Pa=n("code"),yt=t("metric.compute()"),At=t(". Aqu\xED se muestra como se puede implementar en un bucle de evaluaci\xF3n:"),ys=c(),m(Pe.$$.fragment),As=c(),m(Ce.$$.fragment),Ps=c(),Qe=n("p"),Pt=t("De nuevo, tus resultados ser\xE1n un tanto diferente debido a la inicializaci\xF3n aleatoria en la cabeza del modelo y el mezclado de los datos, pero deber\xEDan tener valores similares."),Cs=c(),m(X.$$.fragment),Ds=c(),M=n("h3"),Z=n("a"),Ca=n("span"),m(De.$$.fragment),Ct=c(),Da=n("span"),Dt=t("Repotencia tu bucle de entrenamiento con Accelerate \u{1F917}"),Ss=c(),m(Se.$$.fragment),xs=c(),ee=n("p"),St=t("El bucle de entrenamiento que definimos anteriormente trabaja bien en un solo CPU o GPU. Pero usando la libreria "),xe=n("a"),xt=t("Accelerate \u{1F917}"),Tt=t(", con solo pocos ajustes podemos habilitar el entrenamiento distribuido en m\xFAltiples GPUs o CPUs. Comenzando con la creaci\xF3n de los dataloaders de entrenamiento y validaci\xF3n, aqu\xED se muestra como luce nuestro bucle de entrenamiento:"),Ts=c(),m(Te.$$.fragment),Os=c(),Ke=n("p"),Ot=t("Y aqui est\xE1n los cambios:"),Ls=c(),m(Oe.$$.fragment),Ns=c(),A=n("p"),Lt=t("La primera l\xEDnea a agregarse es la l\xEDnea del import. La segunda l\xEDnea crea un objeto "),Sa=n("code"),Nt=t("Accelerator"),Ut=t(" que revisa el ambiente e inicializa la configuraci\xF3n distribuida apropiada. La libreria Accelerate \u{1F917} se encarga de asignarte el dispositivo, para que puedas remover las l\xEDneas que ponen el modelo en el dispositivo (o si prefieres, c\xE1mbialas para usar el "),xa=n("code"),Wt=t("accelerator.device"),Mt=t(" en lugar de "),Ta=n("code"),Ft=t("device"),Rt=t(")."),Us=c(),q=n("p"),Gt=t("Ahora la mayor parte del trabajo se hace en la l\xEDnea que envia los dataloaders, el modelo y el optimizador al "),Oa=n("code"),Yt=t("accelerator.prepare()"),It=t(". Este va a envolver esos objetos en el contenedor apropiado para asegurarse que tu entrenamiento distribuido funcione como se espera. Los cambios que quedan son remover la l\xEDnea que coloca el lote en el "),La=n("code"),Ht=t("device"),Bt=t(" (de nuevo, si deseas dejarlo asi bastar\xEDa con cambiarlo para que use el "),Na=n("code"),Jt=t("accelerator.device"),Qt=t(") y reemplazar "),Ua=n("code"),Kt=t("loss.backward()"),Vt=t(" con "),Wa=n("code"),Xt=t("accelerator.backward(loss)"),Zt=t("."),Ws=c(),m(ae.$$.fragment),Ms=c(),Ve=n("p"),er=t("Si deseas copiarlo y pegarlo para probar, as\xED es como luce el bucle completo de entrenamiento con Accelerate \u{1F917}:"),Fs=c(),m(Le.$$.fragment),Rs=c(),se=n("p"),ar=t("Colocando esto en un script "),Ma=n("code"),sr=t("train.py"),or=t(" permitir\xE1 que el mismo sea ejecutable en cualquier configuraci\xF3n distribuida. Para probarlo en tu configuraci\xF3n distribuida, ejecuta el siguiente comando:"),Gs=c(),m(Ne.$$.fragment),Ys=c(),Xe=n("p"),tr=t("el cual har\xE1 algunas preguntas y guardar\xE1 tus respuestas en un archivo de configuraci\xF3n usado por este comando:"),Is=c(),m(Ue.$$.fragment),Hs=c(),Ze=n("p"),rr=t("el cual iniciar\xE1 en entrenamiento distribuido."),Bs=c(),oe=n("p"),lr=t("Si deseas ejecutar esto en un Notebook (por ejemplo, para probarlo con TPUs en Colab), solo pega el c\xF3digo en una "),Fa=n("code"),nr=t("training_function()"),ir=t(" y ejecuta la \xFAltima celda con:"),Js=c(),m(We.$$.fragment),Qs=c(),te=n("p"),pr=t("Puedes encontrar m\xE1s ejemplos en el "),Me=n("a"),cr=t("repositorio Accelerate \u{1F917}"),dr=t("."),this.h()},l(e){const o=ql('[data-svelte="svelte-1phssyn"]',document.head);$=i(o,"META",{name:!0,content:!0}),o.forEach(a),j=d(e),k=i(e,"H1",{class:!0});var Fe=p(k);E=i(Fe,"A",{id:!0,class:!0,href:!0});var Ra=p(E);O=i(Ra,"SPAN",{});var mr=p(O);u(z.$$.fragment,mr),mr.forEach(a),Ra.forEach(a),D=d(Fe),F=i(Fe,"SPAN",{});var ur=p(F);uo=r(ur,"Un entrenamiento completo"),ur.forEach(a),Fe.forEach(a),Ya=d(e),u(ie.$$.fragment,e),Ia=d(e),u(pe.$$.fragment,e),Ha=d(e),R=i(e,"P",{});var Vs=p(R);fo=r(Vs,"Ahora veremos como obtener los mismos resultados de la \xFAltima secci\xF3n sin hacer uso de la clase "),oa=i(Vs,"CODE",{});var fr=p(oa);ho=r(fr,"Trainer"),fr.forEach(a),_o=r(Vs,". De nuevo, asumimos que has hecho el procesamiento de datos en la secci\xF3n 2. Aqu\xED mostramos un resumen que cubre todo lo que necesitar\xE1s."),Vs.forEach(a),Ba=d(e),u(ce.$$.fragment,e),Ja=d(e),L=i(e,"H3",{class:!0});var Xs=p(L);G=i(Xs,"A",{id:!0,class:!0,href:!0});var hr=p(G);ta=i(hr,"SPAN",{});var _r=p(ta);u(de.$$.fragment,_r),_r.forEach(a),hr.forEach(a),bo=d(Xs),ra=i(Xs,"SPAN",{});var br=p(ra);vo=r(br,"Prep\xE1rate para el entrenamiento"),br.forEach(a),Xs.forEach(a),Qa=d(e),S=i(e,"P",{});var ea=p(S);$o=r(ea,"Antes de escribir nuestro bucle de entrenamiento, necesitaremos definir algunos objetos. Los primeros son los dataloaders que usaremos para iterar sobre lotes. Pero antes de que podamos definir esos dataloaders, necesitamos aplicar un poquito de preprocesamiento a nuestro "),la=i(ea,"CODE",{});var vr=p(la);go=r(vr,"tokenized_datasets"),vr.forEach(a),ko=r(ea,", para encargarnos de algunas cosas que el "),na=i(ea,"CODE",{});var $r=p(na);qo=r($r,"Trainer"),$r.forEach(a),jo=r(ea," hizo por nosotros de manera autom\xE1tica. Espec\xEDficamente, necesitamos:"),ea.forEach(a),Ka=d(e),x=i(e,"UL",{});var aa=p(x);N=i(aa,"LI",{});var sa=p(N);wo=r(sa,"Remover las columnas correspondientes a valores que el model no espera (como las columnas "),ia=i(sa,"CODE",{});var gr=p(ia);zo=r(gr,"sentence1"),gr.forEach(a),Eo=r(sa," y "),pa=i(sa,"CODE",{});var kr=p(pa);yo=r(kr,"sentence2"),kr.forEach(a),Ao=r(sa,")."),sa.forEach(a),Po=d(aa),C=i(aa,"LI",{});var re=p(C);Co=r(re,"Renombrar la columna "),ca=i(re,"CODE",{});var qr=p(ca);Do=r(qr,"label"),qr.forEach(a),So=r(re," con "),da=i(re,"CODE",{});var jr=p(da);xo=r(jr,"labels"),jr.forEach(a),To=r(re," (porque el modelo espera el argumento llamado "),ma=i(re,"CODE",{});var wr=p(ma);Oo=r(wr,"labels"),wr.forEach(a),Lo=r(re,")."),re.forEach(a),No=d(aa),ua=i(aa,"LI",{});var zr=p(ua);Uo=r(zr,"Configurar el formato de los conjuntos de datos para que retornen tensores PyTorch en lugar de listas."),zr.forEach(a),aa.forEach(a),Va=d(e),Y=i(e,"P",{});var Zs=p(Y);Wo=r(Zs,"Nuestro "),fa=i(Zs,"CODE",{});var Er=p(fa);Mo=r(Er,"tokenized_datasets"),Er.forEach(a),Fo=r(Zs," tiene un m\xE9todo para cada uno de esos pasos:"),Zs.forEach(a),Xa=d(e),u(me.$$.fragment,e),Za=d(e),Ge=i(e,"P",{});var yr=p(Ge);Ro=r(yr,"Ahora podemos verificar que el resultado solo tiene columnas que nuestro modelo aceptar\xE1:"),yr.forEach(a),es=d(e),u(ue.$$.fragment,e),as=d(e),Ye=i(e,"P",{});var Ar=p(Ye);Go=r(Ar,"Ahora que esto esta hecho, es f\xE1cil definir nuestros dataloaders:"),Ar.forEach(a),ss=d(e),u(fe.$$.fragment,e),os=d(e),Ie=i(e,"P",{});var Pr=p(Ie);Yo=r(Pr,"Para verificar r\xE1pidamente que no hubo errores en el procesamiento de datos, podemos inspeccionar un lote de la siguiente manera:"),Pr.forEach(a),ts=d(e),u(he.$$.fragment,e),rs=d(e),u(_e.$$.fragment,e),ls=d(e),I=i(e,"P",{});var eo=p(I);Io=r(eo,"N\xF3tese que los tama\xF1os ser\xE1n un poco distintos en tu caso ya que configuramos "),ha=i(eo,"CODE",{});var Cr=p(ha);Ho=r(Cr,"shuffle=True"),Cr.forEach(a),Bo=r(eo," para el dataloader de entrenamiento y estamos rellenando a la m\xE1xima longitud dentro del lote."),eo.forEach(a),ns=d(e),He=i(e,"P",{});var Dr=p(He);Jo=r(Dr,"Ahora que hemos completado el preprocesamiento de datos (un objetivo gratificante y al mismo tiempo elusivo para cual cualquier practicante de ML), enfoqu\xE9monos en el modelo. Lo vamos a crear exactamente como lo hicimos en la secci\xF3n anterior."),Dr.forEach(a),is=d(e),u(be.$$.fragment,e),ps=d(e),Be=i(e,"P",{});var Sr=p(Be);Qo=r(Sr,"Para asegurarnos de que todo va a salir sin problems durante el entrenamiento, vamos a pasar un lote a este modelo:"),Sr.forEach(a),cs=d(e),u(ve.$$.fragment,e),ds=d(e),u($e.$$.fragment,e),ms=d(e),H=i(e,"P",{});var ao=p(H);Ko=r(ao,"Todos los modelos Transformers \u{1F917} van a retornar la p\xE9rdida cuando se pasan los "),_a=i(ao,"CODE",{});var xr=p(_a);Vo=r(xr,"labels"),xr.forEach(a),Xo=r(ao,", y tambi\xE9n obtenemos los logits (dos por cada entrada en nuestro lote, asi que es un tensor de tama\xF1o 8 x 2)."),ao.forEach(a),us=d(e),w=i(e,"P",{});var T=p(w);Zo=r(T,"Estamos casi listos para escribir nuestro bucle de entrenamiento! Nos est\xE1n faltando dos cosas: un optimizador y un programador de la rata de aprendizaje. Ya que estamos tratando de replicar a mano lo que el "),ba=i(T,"CODE",{});var Tr=p(ba);et=r(Tr,"Trainer"),Tr.forEach(a),at=r(T," estaba haciendo, usaremos los mismos valores por defecto. El optimizador usado por el "),va=i(T,"CODE",{});var Or=p(va);st=r(Or,"Trainer"),Or.forEach(a),ot=r(T," es "),$a=i(T,"CODE",{});var Lr=p($a);tt=r(Lr,"AdamW"),Lr.forEach(a),rt=r(T,", que es el mismo que Adam, pero con un cambio para la regularizaci\xF3n de decremento de los pesos (ver "),ge=i(T,"A",{href:!0,rel:!0});var Nr=p(ge);lt=r(Nr,"\u201CDecoupled Weight Decay Regularization\u201D"),Nr.forEach(a),nt=r(T," por Ilya Loshchilov y Frank Hutter):"),T.forEach(a),fs=d(e),u(ke.$$.fragment,e),hs=d(e),B=i(e,"P",{});var so=p(B);it=r(so,"Finalmente, el programador por defecto de la rata de aprendizaje es un decremento lineal desde al valor m\xE1ximo (5e-5) hasta 0. Para definirlo apropiadamente, necesitamos saber el n\xFAmero de pasos de entrenamiento que vamos a tener, el cual viene dado por el n\xFAmero de \xE9pocas que deseamos correr multiplicado por el n\xFAmero de lotes de entrenamiento (que es el largo de nuestro dataloader de entrenamiento). El "),ga=i(so,"CODE",{});var Ur=p(ga);pt=r(Ur,"Trainer"),Ur.forEach(a),ct=r(so," usa tres \xE9pocas por defecto, asi que usaremos eso:"),so.forEach(a),_s=d(e),u(qe.$$.fragment,e),bs=d(e),u(je.$$.fragment,e),vs=d(e),U=i(e,"H3",{class:!0});var oo=p(U);J=i(oo,"A",{id:!0,class:!0,href:!0});var Wr=p(J);ka=i(Wr,"SPAN",{});var Mr=p(ka);u(we.$$.fragment,Mr),Mr.forEach(a),Wr.forEach(a),dt=d(oo),qa=i(oo,"SPAN",{});var Fr=p(qa);mt=r(Fr,"El bucle de entrenamiento"),Fr.forEach(a),oo.forEach(a),$s=d(e),Q=i(e,"P",{});var to=p(Q);ut=r(to,"Una \xFAltima cosa: vamos a querer usar el GPU si tenemos acceso a uno (en un CPU, el entrenamiento puede tomar varias horas en lugar de unos pocos minutos). Para hacer esto, definimos un "),ja=i(to,"CODE",{});var Rr=p(ja);ft=r(Rr,"device"),Rr.forEach(a),ht=r(to," sobre el que pondremos nuestro modelo y nuestros lotes:"),to.forEach(a),gs=d(e),u(ze.$$.fragment,e),ks=d(e),u(Ee.$$.fragment,e),qs=d(e),K=i(e,"P",{});var ro=p(K);_t=r(ro,"Ya estamos listos para entrenar! Para tener una idea de cuando el entrenamiento va a terminar, adicionamos una barra de progreso sobre el n\xFAmero de pasos de entrenamiento, usando la libreria "),wa=i(ro,"CODE",{});var Gr=p(wa);bt=r(Gr,"tqdm"),Gr.forEach(a),vt=r(ro,":"),ro.forEach(a),js=d(e),u(ye.$$.fragment,e),ws=d(e),Je=i(e,"P",{});var Yr=p(Je);$t=r(Yr,"Puedes ver que la parte central del bucle de entrenamiento luce bastante como el de la introducci\xF3n. No se incluy\xF3 ning\xFAn tipo de reportes, asi que este bucle de entrenamiento no va a indicar como se esta desempe\xF1ando el modelo. Para eso necesitamos a\xF1adir un bucle de evaluaci\xF3n."),Yr.forEach(a),zs=d(e),W=i(e,"H3",{class:!0});var lo=p(W);V=i(lo,"A",{id:!0,class:!0,href:!0});var Ir=p(V);za=i(Ir,"SPAN",{});var Hr=p(za);u(Ae.$$.fragment,Hr),Hr.forEach(a),Ir.forEach(a),gt=d(lo),Ea=i(lo,"SPAN",{});var Br=p(Ea);kt=r(Br,"El bucle de evaluaci\xF3n"),Br.forEach(a),lo.forEach(a),Es=d(e),y=i(e,"P",{});var le=p(y);qt=r(le,"Como lo hicimos anteriormente, usaremos una m\xE9trica ofrecida por la libreria \u{1F917} Evaluate. Ya hemos visto el m\xE9todo "),ya=i(le,"CODE",{});var Jr=p(ya);jt=r(Jr,"metric.compute()"),Jr.forEach(a),wt=r(le,", pero de hecho las m\xE9tricas se pueden acumular sobre los lotes a medida que avanzamos en el bucle de predicci\xF3n con el m\xE9todo "),Aa=i(le,"CODE",{});var Qr=p(Aa);zt=r(Qr,"add_batch()"),Qr.forEach(a),Et=r(le,". Una vez que hemos acumulado todos los lotes, podemos obtener el resultado final con "),Pa=i(le,"CODE",{});var Kr=p(Pa);yt=r(Kr,"metric.compute()"),Kr.forEach(a),At=r(le,". Aqu\xED se muestra como se puede implementar en un bucle de evaluaci\xF3n:"),le.forEach(a),ys=d(e),u(Pe.$$.fragment,e),As=d(e),u(Ce.$$.fragment,e),Ps=d(e),Qe=i(e,"P",{});var Vr=p(Qe);Pt=r(Vr,"De nuevo, tus resultados ser\xE1n un tanto diferente debido a la inicializaci\xF3n aleatoria en la cabeza del modelo y el mezclado de los datos, pero deber\xEDan tener valores similares."),Vr.forEach(a),Cs=d(e),u(X.$$.fragment,e),Ds=d(e),M=i(e,"H3",{class:!0});var no=p(M);Z=i(no,"A",{id:!0,class:!0,href:!0});var Xr=p(Z);Ca=i(Xr,"SPAN",{});var Zr=p(Ca);u(De.$$.fragment,Zr),Zr.forEach(a),Xr.forEach(a),Ct=d(no),Da=i(no,"SPAN",{});var el=p(Da);Dt=r(el,"Repotencia tu bucle de entrenamiento con Accelerate \u{1F917}"),el.forEach(a),no.forEach(a),Ss=d(e),u(Se.$$.fragment,e),xs=d(e),ee=i(e,"P",{});var io=p(ee);St=r(io,"El bucle de entrenamiento que definimos anteriormente trabaja bien en un solo CPU o GPU. Pero usando la libreria "),xe=i(io,"A",{href:!0,rel:!0});var al=p(xe);xt=r(al,"Accelerate \u{1F917}"),al.forEach(a),Tt=r(io,", con solo pocos ajustes podemos habilitar el entrenamiento distribuido en m\xFAltiples GPUs o CPUs. Comenzando con la creaci\xF3n de los dataloaders de entrenamiento y validaci\xF3n, aqu\xED se muestra como luce nuestro bucle de entrenamiento:"),io.forEach(a),Ts=d(e),u(Te.$$.fragment,e),Os=d(e),Ke=i(e,"P",{});var sl=p(Ke);Ot=r(sl,"Y aqui est\xE1n los cambios:"),sl.forEach(a),Ls=d(e),u(Oe.$$.fragment,e),Ns=d(e),A=i(e,"P",{});var ne=p(A);Lt=r(ne,"La primera l\xEDnea a agregarse es la l\xEDnea del import. La segunda l\xEDnea crea un objeto "),Sa=i(ne,"CODE",{});var ol=p(Sa);Nt=r(ol,"Accelerator"),ol.forEach(a),Ut=r(ne," que revisa el ambiente e inicializa la configuraci\xF3n distribuida apropiada. La libreria Accelerate \u{1F917} se encarga de asignarte el dispositivo, para que puedas remover las l\xEDneas que ponen el modelo en el dispositivo (o si prefieres, c\xE1mbialas para usar el "),xa=i(ne,"CODE",{});var tl=p(xa);Wt=r(tl,"accelerator.device"),tl.forEach(a),Mt=r(ne," en lugar de "),Ta=i(ne,"CODE",{});var rl=p(Ta);Ft=r(rl,"device"),rl.forEach(a),Rt=r(ne,")."),ne.forEach(a),Us=d(e),q=i(e,"P",{});var P=p(q);Gt=r(P,"Ahora la mayor parte del trabajo se hace en la l\xEDnea que envia los dataloaders, el modelo y el optimizador al "),Oa=i(P,"CODE",{});var ll=p(Oa);Yt=r(ll,"accelerator.prepare()"),ll.forEach(a),It=r(P,". Este va a envolver esos objetos en el contenedor apropiado para asegurarse que tu entrenamiento distribuido funcione como se espera. Los cambios que quedan son remover la l\xEDnea que coloca el lote en el "),La=i(P,"CODE",{});var nl=p(La);Ht=r(nl,"device"),nl.forEach(a),Bt=r(P," (de nuevo, si deseas dejarlo asi bastar\xEDa con cambiarlo para que use el "),Na=i(P,"CODE",{});var il=p(Na);Jt=r(il,"accelerator.device"),il.forEach(a),Qt=r(P,") y reemplazar "),Ua=i(P,"CODE",{});var pl=p(Ua);Kt=r(pl,"loss.backward()"),pl.forEach(a),Vt=r(P," con "),Wa=i(P,"CODE",{});var cl=p(Wa);Xt=r(cl,"accelerator.backward(loss)"),cl.forEach(a),Zt=r(P,"."),P.forEach(a),Ws=d(e),u(ae.$$.fragment,e),Ms=d(e),Ve=i(e,"P",{});var dl=p(Ve);er=r(dl,"Si deseas copiarlo y pegarlo para probar, as\xED es como luce el bucle completo de entrenamiento con Accelerate \u{1F917}:"),dl.forEach(a),Fs=d(e),u(Le.$$.fragment,e),Rs=d(e),se=i(e,"P",{});var po=p(se);ar=r(po,"Colocando esto en un script "),Ma=i(po,"CODE",{});var ml=p(Ma);sr=r(ml,"train.py"),ml.forEach(a),or=r(po," permitir\xE1 que el mismo sea ejecutable en cualquier configuraci\xF3n distribuida. Para probarlo en tu configuraci\xF3n distribuida, ejecuta el siguiente comando:"),po.forEach(a),Gs=d(e),u(Ne.$$.fragment,e),Ys=d(e),Xe=i(e,"P",{});var ul=p(Xe);tr=r(ul,"el cual har\xE1 algunas preguntas y guardar\xE1 tus respuestas en un archivo de configuraci\xF3n usado por este comando:"),ul.forEach(a),Is=d(e),u(Ue.$$.fragment,e),Hs=d(e),Ze=i(e,"P",{});var fl=p(Ze);rr=r(fl,"el cual iniciar\xE1 en entrenamiento distribuido."),fl.forEach(a),Bs=d(e),oe=i(e,"P",{});var co=p(oe);lr=r(co,"Si deseas ejecutar esto en un Notebook (por ejemplo, para probarlo con TPUs en Colab), solo pega el c\xF3digo en una "),Fa=i(co,"CODE",{});var hl=p(Fa);nr=r(hl,"training_function()"),hl.forEach(a),ir=r(co," y ejecuta la \xFAltima celda con:"),co.forEach(a),Js=d(e),u(We.$$.fragment,e),Qs=d(e),te=i(e,"P",{});var mo=p(te);pr=r(mo,"Puedes encontrar m\xE1s ejemplos en el "),Me=i(mo,"A",{href:!0,rel:!0});var _l=p(Me);cr=r(_l,"repositorio Accelerate \u{1F917}"),_l.forEach(a),dr=r(mo,"."),mo.forEach(a),this.h()},h(){v($,"name","hf:doc:metadata"),v($,"content",JSON.stringify(Al)),v(E,"id","un-entrenamiento-completo"),v(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(E,"href","#un-entrenamiento-completo"),v(k,"class","relative group"),v(G,"id","preprate-para-el-entrenamiento"),v(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(G,"href","#preprate-para-el-entrenamiento"),v(L,"class","relative group"),v(ge,"href","https://arxiv.org/abs/1711.05101"),v(ge,"rel","nofollow"),v(J,"id","el-bucle-de-entrenamiento"),v(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(J,"href","#el-bucle-de-entrenamiento"),v(U,"class","relative group"),v(V,"id","el-bucle-de-evaluacin"),v(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(V,"href","#el-bucle-de-evaluacin"),v(W,"class","relative group"),v(Z,"id","repotencia-tu-bucle-de-entrenamiento-con-accelerate"),v(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(Z,"href","#repotencia-tu-bucle-de-entrenamiento-con-accelerate"),v(M,"class","relative group"),v(xe,"href","https://github.com/huggingface/accelerate"),v(xe,"rel","nofollow"),v(Me,"href","https://github.com/huggingface/accelerate/tree/main/examples"),v(Me,"rel","nofollow")},m(e,o){s(document.head,$),l(e,j,o),l(e,k,o),s(k,E),s(E,O),f(z,O,null),s(k,D),s(k,F),s(F,uo),l(e,Ya,o),f(ie,e,o),l(e,Ia,o),f(pe,e,o),l(e,Ha,o),l(e,R,o),s(R,fo),s(R,oa),s(oa,ho),s(R,_o),l(e,Ba,o),f(ce,e,o),l(e,Ja,o),l(e,L,o),s(L,G),s(G,ta),f(de,ta,null),s(L,bo),s(L,ra),s(ra,vo),l(e,Qa,o),l(e,S,o),s(S,$o),s(S,la),s(la,go),s(S,ko),s(S,na),s(na,qo),s(S,jo),l(e,Ka,o),l(e,x,o),s(x,N),s(N,wo),s(N,ia),s(ia,zo),s(N,Eo),s(N,pa),s(pa,yo),s(N,Ao),s(x,Po),s(x,C),s(C,Co),s(C,ca),s(ca,Do),s(C,So),s(C,da),s(da,xo),s(C,To),s(C,ma),s(ma,Oo),s(C,Lo),s(x,No),s(x,ua),s(ua,Uo),l(e,Va,o),l(e,Y,o),s(Y,Wo),s(Y,fa),s(fa,Mo),s(Y,Fo),l(e,Xa,o),f(me,e,o),l(e,Za,o),l(e,Ge,o),s(Ge,Ro),l(e,es,o),f(ue,e,o),l(e,as,o),l(e,Ye,o),s(Ye,Go),l(e,ss,o),f(fe,e,o),l(e,os,o),l(e,Ie,o),s(Ie,Yo),l(e,ts,o),f(he,e,o),l(e,rs,o),f(_e,e,o),l(e,ls,o),l(e,I,o),s(I,Io),s(I,ha),s(ha,Ho),s(I,Bo),l(e,ns,o),l(e,He,o),s(He,Jo),l(e,is,o),f(be,e,o),l(e,ps,o),l(e,Be,o),s(Be,Qo),l(e,cs,o),f(ve,e,o),l(e,ds,o),f($e,e,o),l(e,ms,o),l(e,H,o),s(H,Ko),s(H,_a),s(_a,Vo),s(H,Xo),l(e,us,o),l(e,w,o),s(w,Zo),s(w,ba),s(ba,et),s(w,at),s(w,va),s(va,st),s(w,ot),s(w,$a),s($a,tt),s(w,rt),s(w,ge),s(ge,lt),s(w,nt),l(e,fs,o),f(ke,e,o),l(e,hs,o),l(e,B,o),s(B,it),s(B,ga),s(ga,pt),s(B,ct),l(e,_s,o),f(qe,e,o),l(e,bs,o),f(je,e,o),l(e,vs,o),l(e,U,o),s(U,J),s(J,ka),f(we,ka,null),s(U,dt),s(U,qa),s(qa,mt),l(e,$s,o),l(e,Q,o),s(Q,ut),s(Q,ja),s(ja,ft),s(Q,ht),l(e,gs,o),f(ze,e,o),l(e,ks,o),f(Ee,e,o),l(e,qs,o),l(e,K,o),s(K,_t),s(K,wa),s(wa,bt),s(K,vt),l(e,js,o),f(ye,e,o),l(e,ws,o),l(e,Je,o),s(Je,$t),l(e,zs,o),l(e,W,o),s(W,V),s(V,za),f(Ae,za,null),s(W,gt),s(W,Ea),s(Ea,kt),l(e,Es,o),l(e,y,o),s(y,qt),s(y,ya),s(ya,jt),s(y,wt),s(y,Aa),s(Aa,zt),s(y,Et),s(y,Pa),s(Pa,yt),s(y,At),l(e,ys,o),f(Pe,e,o),l(e,As,o),f(Ce,e,o),l(e,Ps,o),l(e,Qe,o),s(Qe,Pt),l(e,Cs,o),f(X,e,o),l(e,Ds,o),l(e,M,o),s(M,Z),s(Z,Ca),f(De,Ca,null),s(M,Ct),s(M,Da),s(Da,Dt),l(e,Ss,o),f(Se,e,o),l(e,xs,o),l(e,ee,o),s(ee,St),s(ee,xe),s(xe,xt),s(ee,Tt),l(e,Ts,o),f(Te,e,o),l(e,Os,o),l(e,Ke,o),s(Ke,Ot),l(e,Ls,o),f(Oe,e,o),l(e,Ns,o),l(e,A,o),s(A,Lt),s(A,Sa),s(Sa,Nt),s(A,Ut),s(A,xa),s(xa,Wt),s(A,Mt),s(A,Ta),s(Ta,Ft),s(A,Rt),l(e,Us,o),l(e,q,o),s(q,Gt),s(q,Oa),s(Oa,Yt),s(q,It),s(q,La),s(La,Ht),s(q,Bt),s(q,Na),s(Na,Jt),s(q,Qt),s(q,Ua),s(Ua,Kt),s(q,Vt),s(q,Wa),s(Wa,Xt),s(q,Zt),l(e,Ws,o),f(ae,e,o),l(e,Ms,o),l(e,Ve,o),s(Ve,er),l(e,Fs,o),f(Le,e,o),l(e,Rs,o),l(e,se,o),s(se,ar),s(se,Ma),s(Ma,sr),s(se,or),l(e,Gs,o),f(Ne,e,o),l(e,Ys,o),l(e,Xe,o),s(Xe,tr),l(e,Is,o),f(Ue,e,o),l(e,Hs,o),l(e,Ze,o),s(Ze,rr),l(e,Bs,o),l(e,oe,o),s(oe,lr),s(oe,Fa),s(Fa,nr),s(oe,ir),l(e,Js,o),f(We,e,o),l(e,Qs,o),l(e,te,o),s(te,pr),s(te,Me),s(Me,cr),s(te,dr),Ks=!0},p(e,[o]){const Fe={};o&2&&(Fe.$$scope={dirty:o,ctx:e}),X.$set(Fe);const Ra={};o&2&&(Ra.$$scope={dirty:o,ctx:e}),ae.$set(Ra)},i(e){Ks||(h(z.$$.fragment,e),h(ie.$$.fragment,e),h(pe.$$.fragment,e),h(ce.$$.fragment,e),h(de.$$.fragment,e),h(me.$$.fragment,e),h(ue.$$.fragment,e),h(fe.$$.fragment,e),h(he.$$.fragment,e),h(_e.$$.fragment,e),h(be.$$.fragment,e),h(ve.$$.fragment,e),h($e.$$.fragment,e),h(ke.$$.fragment,e),h(qe.$$.fragment,e),h(je.$$.fragment,e),h(we.$$.fragment,e),h(ze.$$.fragment,e),h(Ee.$$.fragment,e),h(ye.$$.fragment,e),h(Ae.$$.fragment,e),h(Pe.$$.fragment,e),h(Ce.$$.fragment,e),h(X.$$.fragment,e),h(De.$$.fragment,e),h(Se.$$.fragment,e),h(Te.$$.fragment,e),h(Oe.$$.fragment,e),h(ae.$$.fragment,e),h(Le.$$.fragment,e),h(Ne.$$.fragment,e),h(Ue.$$.fragment,e),h(We.$$.fragment,e),Ks=!0)},o(e){_(z.$$.fragment,e),_(ie.$$.fragment,e),_(pe.$$.fragment,e),_(ce.$$.fragment,e),_(de.$$.fragment,e),_(me.$$.fragment,e),_(ue.$$.fragment,e),_(fe.$$.fragment,e),_(he.$$.fragment,e),_(_e.$$.fragment,e),_(be.$$.fragment,e),_(ve.$$.fragment,e),_($e.$$.fragment,e),_(ke.$$.fragment,e),_(qe.$$.fragment,e),_(je.$$.fragment,e),_(we.$$.fragment,e),_(ze.$$.fragment,e),_(Ee.$$.fragment,e),_(ye.$$.fragment,e),_(Ae.$$.fragment,e),_(Pe.$$.fragment,e),_(Ce.$$.fragment,e),_(X.$$.fragment,e),_(De.$$.fragment,e),_(Se.$$.fragment,e),_(Te.$$.fragment,e),_(Oe.$$.fragment,e),_(ae.$$.fragment,e),_(Le.$$.fragment,e),_(Ne.$$.fragment,e),_(Ue.$$.fragment,e),_(We.$$.fragment,e),Ks=!1},d(e){a($),e&&a(j),e&&a(k),b(z),e&&a(Ya),b(ie,e),e&&a(Ia),b(pe,e),e&&a(Ha),e&&a(R),e&&a(Ba),b(ce,e),e&&a(Ja),e&&a(L),b(de),e&&a(Qa),e&&a(S),e&&a(Ka),e&&a(x),e&&a(Va),e&&a(Y),e&&a(Xa),b(me,e),e&&a(Za),e&&a(Ge),e&&a(es),b(ue,e),e&&a(as),e&&a(Ye),e&&a(ss),b(fe,e),e&&a(os),e&&a(Ie),e&&a(ts),b(he,e),e&&a(rs),b(_e,e),e&&a(ls),e&&a(I),e&&a(ns),e&&a(He),e&&a(is),b(be,e),e&&a(ps),e&&a(Be),e&&a(cs),b(ve,e),e&&a(ds),b($e,e),e&&a(ms),e&&a(H),e&&a(us),e&&a(w),e&&a(fs),b(ke,e),e&&a(hs),e&&a(B),e&&a(_s),b(qe,e),e&&a(bs),b(je,e),e&&a(vs),e&&a(U),b(we),e&&a($s),e&&a(Q),e&&a(gs),b(ze,e),e&&a(ks),b(Ee,e),e&&a(qs),e&&a(K),e&&a(js),b(ye,e),e&&a(ws),e&&a(Je),e&&a(zs),e&&a(W),b(Ae),e&&a(Es),e&&a(y),e&&a(ys),b(Pe,e),e&&a(As),b(Ce,e),e&&a(Ps),e&&a(Qe),e&&a(Cs),b(X,e),e&&a(Ds),e&&a(M),b(De),e&&a(Ss),b(Se,e),e&&a(xs),e&&a(ee),e&&a(Ts),b(Te,e),e&&a(Os),e&&a(Ke),e&&a(Ls),b(Oe,e),e&&a(Ns),e&&a(A),e&&a(Us),e&&a(q),e&&a(Ws),b(ae,e),e&&a(Ms),e&&a(Ve),e&&a(Fs),b(Le,e),e&&a(Rs),e&&a(se),e&&a(Gs),b(Ne,e),e&&a(Ys),e&&a(Xe),e&&a(Is),b(Ue,e),e&&a(Hs),e&&a(Ze),e&&a(Bs),e&&a(oe),e&&a(Js),b(We,e),e&&a(Qs),e&&a(te)}}}const Al={local:"un-entrenamiento-completo",sections:[{local:"preprate-para-el-entrenamiento",title:"Prep\xE1rate para el entrenamiento"},{local:"el-bucle-de-entrenamiento",title:"El bucle de entrenamiento"},{local:"el-bucle-de-evaluacin",title:"El bucle de evaluaci\xF3n"},{local:"repotencia-tu-bucle-de-entrenamiento-con-accelerate",title:"Repotencia tu bucle de entrenamiento con Accelerate \u{1F917}"}],title:"Un entrenamiento completo"};function Pl(Re){return jl(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ll extends $l{constructor($){super();gl(this,$,Pl,yl,kl,{})}}export{Ll as default,Al as metadata};
