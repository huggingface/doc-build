import{S as fi,i as _i,s as gi,e as l,k as p,w as u,t as r,M as bi,c as o,d as s,m as c,a as d,x as m,h as a,b,G as t,g as i,y as h,q as f,o as _,B as g,v as wi}from"../../chunks/vendor-hf-doc-builder.js";import{D as vi,Y as mi,T as hi}from"../../chunks/DocNotebookDropdown-hf-doc-builder.js";import{I as Gs}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as v}from"../../chunks/CodeBlock-hf-doc-builder.js";function ki(Ge){let w,z,k,E,M;return{c(){w=l("p"),z=r("\u270F\uFE0F "),k=l("strong"),E=r("Probier es selbt!"),M=r(" \xC4ndere die vorherige Trainingsschleife, um dein Modell auf dem SST-2-Datensatz fein zu tunen.")},l(j){w=o(j,"P",{});var S=d(w);z=a(S,"\u270F\uFE0F "),k=o(S,"STRONG",{});var U=d(k);E=a(U,"Probier es selbt!"),U.forEach(s),M=a(S," \xC4ndere die vorherige Trainingsschleife, um dein Modell auf dem SST-2-Datensatz fein zu tunen."),S.forEach(s)},m(j,S){i(j,w,S),t(w,z),t(w,k),t(k,E),t(w,M)},d(j){j&&s(w)}}}function $i(Ge){let w;return{c(){w=r('\u26A0\uFE0F Um von dem Geschwindigkeitsvorteil der Cloud TPUs zu profitieren, empfehlen wir, deine Samples mit den Argumenten `padding="max_length"` und `max_length` des Tokenizers auf eine feste L\xE4nge aufzuf\xFCllen.')},l(z){w=a(z,'\u26A0\uFE0F Um von dem Geschwindigkeitsvorteil der Cloud TPUs zu profitieren, empfehlen wir, deine Samples mit den Argumenten `padding="max_length"` und `max_length` des Tokenizers auf eine feste L\xE4nge aufzuf\xFCllen.')},m(z,k){i(z,w,k)},d(z){z&&s(w)}}}function zi(Ge){let w,z,k,E,M,j,S,U,un,Zs,oe,Hs,de,Ns,F,mn,ns,hn,fn,Is,pe,Vs,x,G,rs,ce,_n,as,gn,Ks,C,bn,is,wn,vn,ls,kn,$n,Rs,P,W,zn,os,jn,En,ds,An,Dn,yn,q,Tn,ps,qn,Sn,cs,Cn,Pn,us,Mn,xn,Wn,ms,On,Js,Z,Bn,hs,Ln,Un,Ys,ue,Qs,Ze,Fn,Xs,me,et,He,Gn,st,he,tt,Ne,Zn,nt,fe,rt,_e,at,H,Hn,fs,Nn,In,it,Ie,Vn,lt,ge,ot,Ve,Kn,dt,be,pt,we,ct,N,Rn,_s,Jn,Yn,ut,A,Qn,gs,Xn,er,bs,sr,tr,ve,nr,rr,mt,ke,ht,I,ar,ws,ir,lr,ft,$e,_t,ze,gt,O,V,vs,je,or,ks,dr,bt,K,pr,$s,cr,ur,wt,Ee,vt,Ae,kt,R,mr,zs,hr,fr,$t,De,zt,Ke,_r,jt,B,J,js,ye,gr,Es,br,Et,D,wr,As,vr,kr,Ds,$r,zr,ys,jr,Er,At,Te,Dt,qe,yt,Re,Ar,Tt,Y,qt,L,Q,Ts,Se,Dr,qs,yr,St,Ce,Ct,X,Tr,Pe,qr,Sr,Pt,Me,Mt,Je,Cr,xt,xe,Wt,y,Pr,Ss,Mr,xr,Cs,Wr,Or,Ps,Br,Lr,Ot,$,Ur,Ms,Fr,Gr,xs,Zr,Hr,Ws,Nr,Ir,Os,Vr,Kr,Bs,Rr,Jr,Bt,ee,Lt,Ye,Yr,Ut,We,Ft,se,Qr,Ls,Xr,ea,Gt,Oe,Zt,Qe,sa,Ht,Be,Nt,Xe,ta,It,te,na,Us,ra,aa,Vt,Le,Kt,ne,ia,Ue,la,oa,Rt;return j=new Gs({}),oe=new vi({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter3/section4.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter3/section4.ipynb"}]}}),de=new mi({props:{id:"Dh9CL8fyG80"}}),pe=new v({props:{code:`from datasets import load_dataset
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
data_collator = DataCollatorWithPadding(tokenizer=tokenizer)`}}),ce=new Gs({}),ue=new v({props:{code:`tokenized_datasets = tokenized_datasets.remove_columns(["sentence1", "sentence2", "idx"])
tokenized_datasets = tokenized_datasets.rename_column("label", "labels")
tokenized_datasets.set_format("torch")
tokenized_datasets["train"].column_names`,highlighted:`tokenized_datasets = tokenized_datasets.remove_columns([<span class="hljs-string">&quot;sentence1&quot;</span>, <span class="hljs-string">&quot;sentence2&quot;</span>, <span class="hljs-string">&quot;idx&quot;</span>])
tokenized_datasets = tokenized_datasets.rename_column(<span class="hljs-string">&quot;label&quot;</span>, <span class="hljs-string">&quot;labels&quot;</span>)
tokenized_datasets.set_format(<span class="hljs-string">&quot;torch&quot;</span>)
tokenized_datasets[<span class="hljs-string">&quot;train&quot;</span>].column_names`}}),me=new v({props:{code:'["attention_mask", "input_ids", "labels", "token_type_ids"]',highlighted:'[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;labels&quot;</span>, <span class="hljs-string">&quot;token_type_ids&quot;</span>]'}}),he=new v({props:{code:`from torch.utils.data import DataLoader

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
 <span class="hljs-string">&#x27;token_type_ids&#x27;</span>: torch.Size([<span class="hljs-number">8</span>, <span class="hljs-number">65</span>])}`}}),ge=new v({props:{code:`from transformers import AutoModelForSequenceClassification

model = AutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=2)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForSequenceClassification

model = AutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=<span class="hljs-number">2</span>)`}}),be=new v({props:{code:`outputs = model(**batch)
print(outputs.loss, outputs.logits.shape)`,highlighted:`outputs = model(**batch)
<span class="hljs-built_in">print</span>(outputs.loss, outputs.logits.shape)`}}),we=new v({props:{code:"tensor(0.5441, grad_fn=<NllLossBackward>) torch.Size([8, 2])",highlighted:'tensor(<span class="hljs-number">0.5441</span>, grad_fn=&lt;NllLossBackward&gt;) torch.Size([<span class="hljs-number">8</span>, <span class="hljs-number">2</span>])'}}),ke=new v({props:{code:`from transformers import AdamW

optimizer = AdamW(model.parameters(), lr=5e-5)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AdamW

optimizer = AdamW(model.parameters(), lr=<span class="hljs-number">5e-5</span>)`}}),$e=new v({props:{code:`from transformers import get_scheduler

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
<span class="hljs-built_in">print</span>(num_training_steps)`}}),ze=new v({props:{code:"1377",highlighted:'<span class="hljs-number">1377</span>'}}),je=new Gs({}),Ee=new v({props:{code:`import torch

device = torch.device("cuda") if torch.cuda.is_available() else torch.device("cpu")
model.to(device)
device`,highlighted:`<span class="hljs-keyword">import</span> torch

device = torch.device(<span class="hljs-string">&quot;cuda&quot;</span>) <span class="hljs-keyword">if</span> torch.cuda.is_available() <span class="hljs-keyword">else</span> torch.device(<span class="hljs-string">&quot;cpu&quot;</span>)
model.to(device)
device`}}),Ae=new v({props:{code:"device(type='cuda')",highlighted:'device(<span class="hljs-built_in">type</span>=<span class="hljs-string">&#x27;cuda&#x27;</span>)'}}),De=new v({props:{code:`from tqdm.auto import tqdm

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
        progress_bar.update(<span class="hljs-number">1</span>)`}}),ye=new Gs({}),Te=new v({props:{code:`from datasets import load_metric

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

metric.compute()`}}),qe=new v({props:{code:"{'accuracy': 0.8431372549019608, 'f1': 0.8907849829351535}",highlighted:'{<span class="hljs-string">&#x27;accuracy&#x27;</span>: <span class="hljs-number">0.8431372549019608</span>, <span class="hljs-string">&#x27;f1&#x27;</span>: <span class="hljs-number">0.8907849829351535</span>}'}}),Y=new hi({props:{$$slots:{default:[ki]},$$scope:{ctx:Ge}}}),Se=new Gs({}),Ce=new mi({props:{id:"s7dy8QRgjJ0"}}),Me=new v({props:{code:`from transformers import AdamW, AutoModelForSequenceClassification, get_scheduler

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
        progress_bar.update(<span class="hljs-number">1</span>)`}}),xe=new v({props:{code:`+ from accelerate import Accelerator
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
          progress_bar.update(1)`}}),ee=new hi({props:{$$slots:{default:[$i]},$$scope:{ctx:Ge}}}),We=new v({props:{code:`from accelerate import Accelerator
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
        progress_bar.update(<span class="hljs-number">1</span>)`}}),Oe=new v({props:{code:"accelerate config",highlighted:"accelerate config"}}),Be=new v({props:{code:"accelerate launch train.py",highlighted:'accelerate <span class="hljs-built_in">launch</span> train.py'}}),Le=new v({props:{code:`from accelerate import notebook_launcher

notebook_launcher(training_function)`,highlighted:`<span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> notebook_launcher

notebook_launcher(training_function)`}}),{c(){w=l("meta"),z=p(),k=l("h1"),E=l("a"),M=l("span"),u(j.$$.fragment),S=p(),U=l("span"),un=r("Komplettes Training"),Zs=p(),u(oe.$$.fragment),Hs=p(),u(de.$$.fragment),Ns=p(),F=l("p"),mn=r("In diesem Abschnitt befassen wir uns damit, wie wir die gleichen Ergebnisse wie im letzten Abschnitt erzielen k\xF6nnen, ohne die Klasse "),ns=l("code"),hn=r("Trainer"),fn=r(" zu verwenden. Auch hier gehen wir davon aus, dass du die Datenverarbeitung in Abschnitt 2 durchgef\xFChrt hast. Hier ist eine kurze Zusammenfassung mit allem, was du brauchst:"),Is=p(),u(pe.$$.fragment),Vs=p(),x=l("h3"),G=l("a"),rs=l("span"),u(ce.$$.fragment),_n=p(),as=l("span"),gn=r("Vorbereitung f\xFCr das Training"),Ks=p(),C=l("p"),bn=r("Bevor wir unsere Trainingsschleife schreiben, m\xFCssen wir noch einige Objekte definieren. Zun\xE4chst m\xFCssen wir die Datalader definieren, mit denen wir \xFCber die Batches iterieren werden. Doch bevor wir diese Dataloader definieren k\xF6nnen, m\xFCssen wir unsere "),is=l("code"),wn=r("tokenized_datasets"),vn=r(" nachbearbeiten, um einige Dinge zu erledigen, die der "),ls=l("code"),kn=r("Trainer"),$n=r(" automatisch f\xFCr uns erledigt hat. Konkret hei\xDFt das, dass wir:"),Rs=p(),P=l("ul"),W=l("li"),zn=r("Die Spalten entfernen, die Werte enthalten, die das Modell nicht erwartet (wie die Spalten "),os=l("code"),jn=r("sentence1"),En=r(" und "),ds=l("code"),An=r("sentence2"),Dn=r(")."),yn=p(),q=l("li"),Tn=r("Die Spalte "),ps=l("code"),qn=r("label"),Sn=r(" in "),cs=l("code"),Cn=r("labels"),Pn=r(" umbenennen (weil das Modell erwartet, dass das Argument "),us=l("code"),Mn=r("labels"),xn=r(" hei\xDFt)."),Wn=p(),ms=l("li"),On=r("Das Format der Datens\xE4tze anpassen, so dass sie PyTorch-Tensoren statt Listen zur\xFCckgeben."),Js=p(),Z=l("p"),Bn=r("Das "),hs=l("code"),Ln=r("tokenized_datasets"),Un=r(" hat eine Methode f\xFCr jeden dieser Schritte:"),Ys=p(),u(ue.$$.fragment),Qs=p(),Ze=l("p"),Fn=r("Anschlie\xDFend k\xF6nnen wir \xFCberpr\xFCfen, ob der Output nur Spalten enth\xE4lt, die unser Modell akzeptiert:"),Xs=p(),u(me.$$.fragment),et=p(),He=l("p"),Gn=r("Jetzt k\xF6nnen wir ganz einfach unsere Dataloader definieren:"),st=p(),u(he.$$.fragment),tt=p(),Ne=l("p"),Zn=r("Um sicher zu gehen, \xFCberpr\xFCfen wir ein Batch auf Fehler in der Datenverarbeitung:"),nt=p(),u(fe.$$.fragment),rt=p(),u(_e.$$.fragment),at=p(),H=l("p"),Hn=r("Beachte, dass die Dimensionen der Tensoren wahrscheinlich etwas anders aussehen werden, da wir f\xFCr den Trainingsdatenlader "),fs=l("code"),Nn=r("shuffle=True"),In=r(" eingestellt haben und innerhalb des Batches auf die maximale L\xE4nge auff\xFCllen."),it=p(),Ie=l("p"),Vn=r("Da wir nun mit der Datenvorverarbeitung fertig sind (ein zufriedenstellendes aber schwer erreichbares Ziel f\xFCr jeden ML-Experten), k\xF6nnen wir uns nun dem Modell zuwenden. Wir instanziieren es genauso wie im vorherigen Abschnitt:"),lt=p(),u(ge.$$.fragment),ot=p(),Ve=l("p"),Kn=r("Als weitere Sicherheitsma\xDFnahme \xFCbergeben wir unseren Batch an das Modell, um sicherzustellen, dass beim Training alles glatt l\xE4uft:"),dt=p(),u(be.$$.fragment),pt=p(),u(we.$$.fragment),ct=p(),N=l("p"),Rn=r("Alle \u{1F917} Transformer Modelle geben den Verlust zur\xFCck, wenn "),_s=l("code"),Jn=r("labels"),Yn=r(" angegeben werden, und wir erhalten zus\xE4tzlich die Logits (zwei f\xFCr jede Eingabe in unserem Batch, also einen Tensor der Gr\xF6\xDFe 8 x 2)."),ut=p(),A=l("p"),Qn=r("Wir sind fast so weit, unsere Trainingsschleife zu schreiben! Es fehlen nur noch zwei Dinge: ein Optimierer und ein Scheduler f\xFCr die Lernrate. Da wir versuchen, das zu wiederholen, was der "),gs=l("code"),Xn=r("Trainer"),er=r(" automatisch gemacht hat, werden wir die gleichen Standardwerte verwenden. Der Optimierer, den der "),bs=l("code"),sr=r("Trainer"),tr=r(" verwendet, hei\xDFt \u201CAdamW\u201D und ist gr\xF6\xDFtenteils derselbe wie Adam, abgesehen von einer Abwandlung f\xFCr die \u201CWeight Decay Regularization\u201D (siehe [\u201CDecoupled Weight Decay Regularization\u201D] ("),ve=l("a"),nr=r("https://arxiv.org/abs/1711.05101"),rr=r(") von Ilya Loshchilov und Frank Hutter):"),mt=p(),u(ke.$$.fragment),ht=p(),I=l("p"),ar=r("Der standardm\xE4\xDFig verwendete Scheduler f\xFCr die Lernrate ist ein linearer Abstieg vom Maximalwert (5e-5) auf 0. Um ihn richtig zu definieren, m\xFCssen wir die Anzahl der Trainingsschritte kennen, d.h. die Anzahl der Epochen, die die Trainingsschleife durchlaufen soll, multipliziert mit der Anzahl der Trainingsbatches (der L\xE4nge unseres Trainingsdatenordners). Der "),ws=l("code"),ir=r("Trainer"),lr=r(" verwendet standardm\xE4\xDFig drei Epochen, woran wir uns hier orientieren werden:"),ft=p(),u($e.$$.fragment),_t=p(),u(ze.$$.fragment),gt=p(),O=l("h3"),V=l("a"),vs=l("span"),u(je.$$.fragment),or=p(),ks=l("span"),dr=r("Die Trainingsschleife"),bt=p(),K=l("p"),pr=r("Ein letzter Hinweis: Wir wollen die GPU zum Training nutzen, wenn wir Zugang zu einer haben (auf einer CPU kann das Training mehrere Stunden statt ein paar Minuten dauern). Dazu definieren wir "),$s=l("code"),cr=r("device"),ur=r(" als Ger\xE4t auf dem wir unser Modell und unsere Batches speichern:"),wt=p(),u(Ee.$$.fragment),vt=p(),u(Ae.$$.fragment),kt=p(),R=l("p"),mr=r("Wir sind jetzt bereit f\xFCr das Training! Um ein Gef\xFChl daf\xFCr zu bekommen, wann das Training abgeschlossen sein wird, f\xFCgen wir mit der Bibliothek "),zs=l("code"),hr=r("tqdm"),fr=r(" einen Fortschrittsbalken \xFCber die Anzahl der Trainingsschritte ein:"),$t=p(),u(De.$$.fragment),zt=p(),Ke=l("p"),_r=r("Der Kern der Trainingsschleife sieht \xE4hnlich aus wie in der Einleitung. Da wir keine Berichte angefordert haben, gibt die Trainingsschleife nichts \xFCber die Performance des Modells zur\xFCck. Daf\xFCr m\xFCssen wir eine Evaluationsschleife einf\xFCgen."),jt=p(),B=l("h3"),J=l("a"),js=l("span"),u(ye.$$.fragment),gr=p(),Es=l("span"),br=r("Die Evaluationsschleife"),Et=p(),D=l("p"),wr=r("Wie schon zuvor verwenden wir eine Metrik, die von der \u{1F917} Datasets-Bibliothek bereitgestellt wird. Wir haben bereits die Methode "),As=l("code"),vr=r("metric.compute()"),kr=r(" gesehen, aber Metriken k\xF6nnen auch Batches f\xFCr uns akkumulieren, wenn wir die Vorhersageschleife mit der Methode "),Ds=l("code"),$r=r("add_batch()"),zr=r(" durchlaufen. Sobald wir alle Batches gesammelt haben, k\xF6nnen wir das Endergebnis mit der Methode "),ys=l("code"),jr=r("metric.compute()"),Er=r(" ermitteln. So implementierst du all das in eine Evaluationsschleife:"),At=p(),u(Te.$$.fragment),Dt=p(),u(qe.$$.fragment),yt=p(),Re=l("p"),Ar=r("Auch hier werden deine Ergebnisse wegen der Zuf\xE4lligkeit bei der Initialisierung des Modellkopfes und der Datenverteilung etwas anders ausfallen, aber sie sollten in etwa gleich sein."),Tt=p(),u(Y.$$.fragment),qt=p(),L=l("h3"),Q=l("a"),Ts=l("span"),u(Se.$$.fragment),Dr=p(),qs=l("span"),yr=r("Verbessere deine Trainingsschleife mit \u{1F917} Accelerate"),St=p(),u(Ce.$$.fragment),Ct=p(),X=l("p"),Tr=r("Die Trainingsschleife, die wir zuvor definiert haben, funktioniert gut auf einer einzelnen CPU oder GPU. Aber mit der Bibliothek "),Pe=l("a"),qr=r("\u{1F917} Accelerate"),Sr=r(" k\xF6nnen wir mit wenigen Anpassungen verteiltes Training auf mehreren GPUs oder TPUs implementieren. Beginnend mit der Erstellung der Trainings- und Validierungsdaten, sieht unsere manuelle Trainingsschleife nun folgenderma\xDFen aus:"),Pt=p(),u(Me.$$.fragment),Mt=p(),Je=l("p"),Cr=r("Und hier sind die \xC4nderungen:"),xt=p(),u(xe.$$.fragment),Wt=p(),y=l("p"),Pr=r("Die erste Zeile, die hinzugef\xFCgt werden muss, ist die Import-Zeile. Die zweite Zeile instanziiert ein "),Ss=l("code"),Mr=r("Accelerator"),xr=r("-Objekt, das die Hardware analysiert und die richtige verteilte Umgebung initialisiert. Accelerate k\xFCmmert sich um die Anordnung der Ger\xE4te, du kannst also die Zeilen entfernen, die das Modell auf dem Ger\xE4t platzieren (oder, wenn du das m\xF6chtest, sie so \xE4ndern, dass sie "),Cs=l("code"),Wr=r("accelerator.device"),Or=r(" anstelle von "),Ps=l("code"),Br=r("device"),Lr=r(" verwenden)."),Ot=p(),$=l("p"),Ur=r("Der Hauptteil der Arbeit wird dann in der Zeile erledigt, die die Dataloader, das Modell und den Optimierer an "),Ms=l("code"),Fr=r("accelerator.prepare()"),Gr=r(" sendet. Dadurch werden diese Objekte in den richtigen Container verpackt, damit das verteilte Training wie vorgesehen funktioniert. Die verbleibenden \xC4nderungen sind das Entfernen der Zeile, die das Batch auf dem Ger\xE4t mit "),xs=l("code"),Zr=r("device"),Hr=r(" ablegt (wenn du das beibehalten willst, kannst du es einfach in "),Ws=l("code"),Nr=r("accelerator.device"),Ir=r(" \xE4ndern) und das Ersetzen von "),Os=l("code"),Vr=r("loss.backward()"),Kr=r(" durch "),Bs=l("code"),Rr=r("accelerator.backward(loss)"),Jr=r("."),Bt=p(),u(ee.$$.fragment),Lt=p(),Ye=l("p"),Yr=r("Wenn du damit experimentieren m\xF6chtest, siehst du hier, wie die komplette Trainingsschleife mit \u{1F917} Accelerate aussieht:"),Ut=p(),u(We.$$.fragment),Ft=p(),se=l("p"),Qr=r("Wenn dies in das Script "),Ls=l("code"),Xr=r("train.py"),ea=r(" eingef\xFCgt wird, kann das Script auf jeder Art von verteilter Hardware ausgef\xFChrt werden. Um es auf deiner verteilten Hardware auszuprobieren, f\xFChre den folgenden Befehl aus:"),Gt=p(),u(Oe.$$.fragment),Zt=p(),Qe=l("p"),sa=r("Du wirst dann aufgefordert werden, einige Fragen zu beantworten und die Antworten in eine Konfigurationsdatei zu schreiben, die von diesem Befehl verwendet wird:"),Ht=p(),u(Be.$$.fragment),Nt=p(),Xe=l("p"),ta=r("Damit wird das verteilte Training gestartet."),It=p(),te=l("p"),na=r("Wenn du das in einem Notebook ausprobieren m\xF6chtest (z. B. um es mit TPUs auf Colab zu testen), f\xFCge den Code einfach in eine "),Us=l("code"),ra=r("training_function()"),aa=r(" ein und f\xFChre eine letzte Zelle mit aus:"),Vt=p(),u(Le.$$.fragment),Kt=p(),ne=l("p"),ia=r("Weitere Beispiele findest du in dem "),Ue=l("a"),la=r("\u{1F917} Accelerate Repo"),oa=r("."),this.h()},l(e){const n=bi('[data-svelte="svelte-1phssyn"]',document.head);w=o(n,"META",{name:!0,content:!0}),n.forEach(s),z=c(e),k=o(e,"H1",{class:!0});var Fe=d(k);E=o(Fe,"A",{id:!0,class:!0,href:!0});var Fs=d(E);M=o(Fs,"SPAN",{});var da=d(M);m(j.$$.fragment,da),da.forEach(s),Fs.forEach(s),S=c(Fe),U=o(Fe,"SPAN",{});var pa=d(U);un=a(pa,"Komplettes Training"),pa.forEach(s),Fe.forEach(s),Zs=c(e),m(oe.$$.fragment,e),Hs=c(e),m(de.$$.fragment,e),Ns=c(e),F=o(e,"P",{});var Jt=d(F);mn=a(Jt,"In diesem Abschnitt befassen wir uns damit, wie wir die gleichen Ergebnisse wie im letzten Abschnitt erzielen k\xF6nnen, ohne die Klasse "),ns=o(Jt,"CODE",{});var ca=d(ns);hn=a(ca,"Trainer"),ca.forEach(s),fn=a(Jt," zu verwenden. Auch hier gehen wir davon aus, dass du die Datenverarbeitung in Abschnitt 2 durchgef\xFChrt hast. Hier ist eine kurze Zusammenfassung mit allem, was du brauchst:"),Jt.forEach(s),Is=c(e),m(pe.$$.fragment,e),Vs=c(e),x=o(e,"H3",{class:!0});var Yt=d(x);G=o(Yt,"A",{id:!0,class:!0,href:!0});var ua=d(G);rs=o(ua,"SPAN",{});var ma=d(rs);m(ce.$$.fragment,ma),ma.forEach(s),ua.forEach(s),_n=c(Yt),as=o(Yt,"SPAN",{});var ha=d(as);gn=a(ha,"Vorbereitung f\xFCr das Training"),ha.forEach(s),Yt.forEach(s),Ks=c(e),C=o(e,"P",{});var es=d(C);bn=a(es,"Bevor wir unsere Trainingsschleife schreiben, m\xFCssen wir noch einige Objekte definieren. Zun\xE4chst m\xFCssen wir die Datalader definieren, mit denen wir \xFCber die Batches iterieren werden. Doch bevor wir diese Dataloader definieren k\xF6nnen, m\xFCssen wir unsere "),is=o(es,"CODE",{});var fa=d(is);wn=a(fa,"tokenized_datasets"),fa.forEach(s),vn=a(es," nachbearbeiten, um einige Dinge zu erledigen, die der "),ls=o(es,"CODE",{});var _a=d(ls);kn=a(_a,"Trainer"),_a.forEach(s),$n=a(es," automatisch f\xFCr uns erledigt hat. Konkret hei\xDFt das, dass wir:"),es.forEach(s),Rs=c(e),P=o(e,"UL",{});var ss=d(P);W=o(ss,"LI",{});var ts=d(W);zn=a(ts,"Die Spalten entfernen, die Werte enthalten, die das Modell nicht erwartet (wie die Spalten "),os=o(ts,"CODE",{});var ga=d(os);jn=a(ga,"sentence1"),ga.forEach(s),En=a(ts," und "),ds=o(ts,"CODE",{});var ba=d(ds);An=a(ba,"sentence2"),ba.forEach(s),Dn=a(ts,")."),ts.forEach(s),yn=c(ss),q=o(ss,"LI",{});var re=d(q);Tn=a(re,"Die Spalte "),ps=o(re,"CODE",{});var wa=d(ps);qn=a(wa,"label"),wa.forEach(s),Sn=a(re," in "),cs=o(re,"CODE",{});var va=d(cs);Cn=a(va,"labels"),va.forEach(s),Pn=a(re," umbenennen (weil das Modell erwartet, dass das Argument "),us=o(re,"CODE",{});var ka=d(us);Mn=a(ka,"labels"),ka.forEach(s),xn=a(re," hei\xDFt)."),re.forEach(s),Wn=c(ss),ms=o(ss,"LI",{});var $a=d(ms);On=a($a,"Das Format der Datens\xE4tze anpassen, so dass sie PyTorch-Tensoren statt Listen zur\xFCckgeben."),$a.forEach(s),ss.forEach(s),Js=c(e),Z=o(e,"P",{});var Qt=d(Z);Bn=a(Qt,"Das "),hs=o(Qt,"CODE",{});var za=d(hs);Ln=a(za,"tokenized_datasets"),za.forEach(s),Un=a(Qt," hat eine Methode f\xFCr jeden dieser Schritte:"),Qt.forEach(s),Ys=c(e),m(ue.$$.fragment,e),Qs=c(e),Ze=o(e,"P",{});var ja=d(Ze);Fn=a(ja,"Anschlie\xDFend k\xF6nnen wir \xFCberpr\xFCfen, ob der Output nur Spalten enth\xE4lt, die unser Modell akzeptiert:"),ja.forEach(s),Xs=c(e),m(me.$$.fragment,e),et=c(e),He=o(e,"P",{});var Ea=d(He);Gn=a(Ea,"Jetzt k\xF6nnen wir ganz einfach unsere Dataloader definieren:"),Ea.forEach(s),st=c(e),m(he.$$.fragment,e),tt=c(e),Ne=o(e,"P",{});var Aa=d(Ne);Zn=a(Aa,"Um sicher zu gehen, \xFCberpr\xFCfen wir ein Batch auf Fehler in der Datenverarbeitung:"),Aa.forEach(s),nt=c(e),m(fe.$$.fragment,e),rt=c(e),m(_e.$$.fragment,e),at=c(e),H=o(e,"P",{});var Xt=d(H);Hn=a(Xt,"Beachte, dass die Dimensionen der Tensoren wahrscheinlich etwas anders aussehen werden, da wir f\xFCr den Trainingsdatenlader "),fs=o(Xt,"CODE",{});var Da=d(fs);Nn=a(Da,"shuffle=True"),Da.forEach(s),In=a(Xt," eingestellt haben und innerhalb des Batches auf die maximale L\xE4nge auff\xFCllen."),Xt.forEach(s),it=c(e),Ie=o(e,"P",{});var ya=d(Ie);Vn=a(ya,"Da wir nun mit der Datenvorverarbeitung fertig sind (ein zufriedenstellendes aber schwer erreichbares Ziel f\xFCr jeden ML-Experten), k\xF6nnen wir uns nun dem Modell zuwenden. Wir instanziieren es genauso wie im vorherigen Abschnitt:"),ya.forEach(s),lt=c(e),m(ge.$$.fragment,e),ot=c(e),Ve=o(e,"P",{});var Ta=d(Ve);Kn=a(Ta,"Als weitere Sicherheitsma\xDFnahme \xFCbergeben wir unseren Batch an das Modell, um sicherzustellen, dass beim Training alles glatt l\xE4uft:"),Ta.forEach(s),dt=c(e),m(be.$$.fragment,e),pt=c(e),m(we.$$.fragment,e),ct=c(e),N=o(e,"P",{});var en=d(N);Rn=a(en,"Alle \u{1F917} Transformer Modelle geben den Verlust zur\xFCck, wenn "),_s=o(en,"CODE",{});var qa=d(_s);Jn=a(qa,"labels"),qa.forEach(s),Yn=a(en," angegeben werden, und wir erhalten zus\xE4tzlich die Logits (zwei f\xFCr jede Eingabe in unserem Batch, also einen Tensor der Gr\xF6\xDFe 8 x 2)."),en.forEach(s),ut=c(e),A=o(e,"P",{});var ae=d(A);Qn=a(ae,"Wir sind fast so weit, unsere Trainingsschleife zu schreiben! Es fehlen nur noch zwei Dinge: ein Optimierer und ein Scheduler f\xFCr die Lernrate. Da wir versuchen, das zu wiederholen, was der "),gs=o(ae,"CODE",{});var Sa=d(gs);Xn=a(Sa,"Trainer"),Sa.forEach(s),er=a(ae," automatisch gemacht hat, werden wir die gleichen Standardwerte verwenden. Der Optimierer, den der "),bs=o(ae,"CODE",{});var Ca=d(bs);sr=a(Ca,"Trainer"),Ca.forEach(s),tr=a(ae," verwendet, hei\xDFt \u201CAdamW\u201D und ist gr\xF6\xDFtenteils derselbe wie Adam, abgesehen von einer Abwandlung f\xFCr die \u201CWeight Decay Regularization\u201D (siehe [\u201CDecoupled Weight Decay Regularization\u201D] ("),ve=o(ae,"A",{href:!0,rel:!0});var Pa=d(ve);nr=a(Pa,"https://arxiv.org/abs/1711.05101"),Pa.forEach(s),rr=a(ae,") von Ilya Loshchilov und Frank Hutter):"),ae.forEach(s),mt=c(e),m(ke.$$.fragment,e),ht=c(e),I=o(e,"P",{});var sn=d(I);ar=a(sn,"Der standardm\xE4\xDFig verwendete Scheduler f\xFCr die Lernrate ist ein linearer Abstieg vom Maximalwert (5e-5) auf 0. Um ihn richtig zu definieren, m\xFCssen wir die Anzahl der Trainingsschritte kennen, d.h. die Anzahl der Epochen, die die Trainingsschleife durchlaufen soll, multipliziert mit der Anzahl der Trainingsbatches (der L\xE4nge unseres Trainingsdatenordners). Der "),ws=o(sn,"CODE",{});var Ma=d(ws);ir=a(Ma,"Trainer"),Ma.forEach(s),lr=a(sn," verwendet standardm\xE4\xDFig drei Epochen, woran wir uns hier orientieren werden:"),sn.forEach(s),ft=c(e),m($e.$$.fragment,e),_t=c(e),m(ze.$$.fragment,e),gt=c(e),O=o(e,"H3",{class:!0});var tn=d(O);V=o(tn,"A",{id:!0,class:!0,href:!0});var xa=d(V);vs=o(xa,"SPAN",{});var Wa=d(vs);m(je.$$.fragment,Wa),Wa.forEach(s),xa.forEach(s),or=c(tn),ks=o(tn,"SPAN",{});var Oa=d(ks);dr=a(Oa,"Die Trainingsschleife"),Oa.forEach(s),tn.forEach(s),bt=c(e),K=o(e,"P",{});var nn=d(K);pr=a(nn,"Ein letzter Hinweis: Wir wollen die GPU zum Training nutzen, wenn wir Zugang zu einer haben (auf einer CPU kann das Training mehrere Stunden statt ein paar Minuten dauern). Dazu definieren wir "),$s=o(nn,"CODE",{});var Ba=d($s);cr=a(Ba,"device"),Ba.forEach(s),ur=a(nn," als Ger\xE4t auf dem wir unser Modell und unsere Batches speichern:"),nn.forEach(s),wt=c(e),m(Ee.$$.fragment,e),vt=c(e),m(Ae.$$.fragment,e),kt=c(e),R=o(e,"P",{});var rn=d(R);mr=a(rn,"Wir sind jetzt bereit f\xFCr das Training! Um ein Gef\xFChl daf\xFCr zu bekommen, wann das Training abgeschlossen sein wird, f\xFCgen wir mit der Bibliothek "),zs=o(rn,"CODE",{});var La=d(zs);hr=a(La,"tqdm"),La.forEach(s),fr=a(rn," einen Fortschrittsbalken \xFCber die Anzahl der Trainingsschritte ein:"),rn.forEach(s),$t=c(e),m(De.$$.fragment,e),zt=c(e),Ke=o(e,"P",{});var Ua=d(Ke);_r=a(Ua,"Der Kern der Trainingsschleife sieht \xE4hnlich aus wie in der Einleitung. Da wir keine Berichte angefordert haben, gibt die Trainingsschleife nichts \xFCber die Performance des Modells zur\xFCck. Daf\xFCr m\xFCssen wir eine Evaluationsschleife einf\xFCgen."),Ua.forEach(s),jt=c(e),B=o(e,"H3",{class:!0});var an=d(B);J=o(an,"A",{id:!0,class:!0,href:!0});var Fa=d(J);js=o(Fa,"SPAN",{});var Ga=d(js);m(ye.$$.fragment,Ga),Ga.forEach(s),Fa.forEach(s),gr=c(an),Es=o(an,"SPAN",{});var Za=d(Es);br=a(Za,"Die Evaluationsschleife"),Za.forEach(s),an.forEach(s),Et=c(e),D=o(e,"P",{});var ie=d(D);wr=a(ie,"Wie schon zuvor verwenden wir eine Metrik, die von der \u{1F917} Datasets-Bibliothek bereitgestellt wird. Wir haben bereits die Methode "),As=o(ie,"CODE",{});var Ha=d(As);vr=a(Ha,"metric.compute()"),Ha.forEach(s),kr=a(ie," gesehen, aber Metriken k\xF6nnen auch Batches f\xFCr uns akkumulieren, wenn wir die Vorhersageschleife mit der Methode "),Ds=o(ie,"CODE",{});var Na=d(Ds);$r=a(Na,"add_batch()"),Na.forEach(s),zr=a(ie," durchlaufen. Sobald wir alle Batches gesammelt haben, k\xF6nnen wir das Endergebnis mit der Methode "),ys=o(ie,"CODE",{});var Ia=d(ys);jr=a(Ia,"metric.compute()"),Ia.forEach(s),Er=a(ie," ermitteln. So implementierst du all das in eine Evaluationsschleife:"),ie.forEach(s),At=c(e),m(Te.$$.fragment,e),Dt=c(e),m(qe.$$.fragment,e),yt=c(e),Re=o(e,"P",{});var Va=d(Re);Ar=a(Va,"Auch hier werden deine Ergebnisse wegen der Zuf\xE4lligkeit bei der Initialisierung des Modellkopfes und der Datenverteilung etwas anders ausfallen, aber sie sollten in etwa gleich sein."),Va.forEach(s),Tt=c(e),m(Y.$$.fragment,e),qt=c(e),L=o(e,"H3",{class:!0});var ln=d(L);Q=o(ln,"A",{id:!0,class:!0,href:!0});var Ka=d(Q);Ts=o(Ka,"SPAN",{});var Ra=d(Ts);m(Se.$$.fragment,Ra),Ra.forEach(s),Ka.forEach(s),Dr=c(ln),qs=o(ln,"SPAN",{});var Ja=d(qs);yr=a(Ja,"Verbessere deine Trainingsschleife mit \u{1F917} Accelerate"),Ja.forEach(s),ln.forEach(s),St=c(e),m(Ce.$$.fragment,e),Ct=c(e),X=o(e,"P",{});var on=d(X);Tr=a(on,"Die Trainingsschleife, die wir zuvor definiert haben, funktioniert gut auf einer einzelnen CPU oder GPU. Aber mit der Bibliothek "),Pe=o(on,"A",{href:!0,rel:!0});var Ya=d(Pe);qr=a(Ya,"\u{1F917} Accelerate"),Ya.forEach(s),Sr=a(on," k\xF6nnen wir mit wenigen Anpassungen verteiltes Training auf mehreren GPUs oder TPUs implementieren. Beginnend mit der Erstellung der Trainings- und Validierungsdaten, sieht unsere manuelle Trainingsschleife nun folgenderma\xDFen aus:"),on.forEach(s),Pt=c(e),m(Me.$$.fragment,e),Mt=c(e),Je=o(e,"P",{});var Qa=d(Je);Cr=a(Qa,"Und hier sind die \xC4nderungen:"),Qa.forEach(s),xt=c(e),m(xe.$$.fragment,e),Wt=c(e),y=o(e,"P",{});var le=d(y);Pr=a(le,"Die erste Zeile, die hinzugef\xFCgt werden muss, ist die Import-Zeile. Die zweite Zeile instanziiert ein "),Ss=o(le,"CODE",{});var Xa=d(Ss);Mr=a(Xa,"Accelerator"),Xa.forEach(s),xr=a(le,"-Objekt, das die Hardware analysiert und die richtige verteilte Umgebung initialisiert. Accelerate k\xFCmmert sich um die Anordnung der Ger\xE4te, du kannst also die Zeilen entfernen, die das Modell auf dem Ger\xE4t platzieren (oder, wenn du das m\xF6chtest, sie so \xE4ndern, dass sie "),Cs=o(le,"CODE",{});var ei=d(Cs);Wr=a(ei,"accelerator.device"),ei.forEach(s),Or=a(le," anstelle von "),Ps=o(le,"CODE",{});var si=d(Ps);Br=a(si,"device"),si.forEach(s),Lr=a(le," verwenden)."),le.forEach(s),Ot=c(e),$=o(e,"P",{});var T=d($);Ur=a(T,"Der Hauptteil der Arbeit wird dann in der Zeile erledigt, die die Dataloader, das Modell und den Optimierer an "),Ms=o(T,"CODE",{});var ti=d(Ms);Fr=a(ti,"accelerator.prepare()"),ti.forEach(s),Gr=a(T," sendet. Dadurch werden diese Objekte in den richtigen Container verpackt, damit das verteilte Training wie vorgesehen funktioniert. Die verbleibenden \xC4nderungen sind das Entfernen der Zeile, die das Batch auf dem Ger\xE4t mit "),xs=o(T,"CODE",{});var ni=d(xs);Zr=a(ni,"device"),ni.forEach(s),Hr=a(T," ablegt (wenn du das beibehalten willst, kannst du es einfach in "),Ws=o(T,"CODE",{});var ri=d(Ws);Nr=a(ri,"accelerator.device"),ri.forEach(s),Ir=a(T," \xE4ndern) und das Ersetzen von "),Os=o(T,"CODE",{});var ai=d(Os);Vr=a(ai,"loss.backward()"),ai.forEach(s),Kr=a(T," durch "),Bs=o(T,"CODE",{});var ii=d(Bs);Rr=a(ii,"accelerator.backward(loss)"),ii.forEach(s),Jr=a(T,"."),T.forEach(s),Bt=c(e),m(ee.$$.fragment,e),Lt=c(e),Ye=o(e,"P",{});var li=d(Ye);Yr=a(li,"Wenn du damit experimentieren m\xF6chtest, siehst du hier, wie die komplette Trainingsschleife mit \u{1F917} Accelerate aussieht:"),li.forEach(s),Ut=c(e),m(We.$$.fragment,e),Ft=c(e),se=o(e,"P",{});var dn=d(se);Qr=a(dn,"Wenn dies in das Script "),Ls=o(dn,"CODE",{});var oi=d(Ls);Xr=a(oi,"train.py"),oi.forEach(s),ea=a(dn," eingef\xFCgt wird, kann das Script auf jeder Art von verteilter Hardware ausgef\xFChrt werden. Um es auf deiner verteilten Hardware auszuprobieren, f\xFChre den folgenden Befehl aus:"),dn.forEach(s),Gt=c(e),m(Oe.$$.fragment,e),Zt=c(e),Qe=o(e,"P",{});var di=d(Qe);sa=a(di,"Du wirst dann aufgefordert werden, einige Fragen zu beantworten und die Antworten in eine Konfigurationsdatei zu schreiben, die von diesem Befehl verwendet wird:"),di.forEach(s),Ht=c(e),m(Be.$$.fragment,e),Nt=c(e),Xe=o(e,"P",{});var pi=d(Xe);ta=a(pi,"Damit wird das verteilte Training gestartet."),pi.forEach(s),It=c(e),te=o(e,"P",{});var pn=d(te);na=a(pn,"Wenn du das in einem Notebook ausprobieren m\xF6chtest (z. B. um es mit TPUs auf Colab zu testen), f\xFCge den Code einfach in eine "),Us=o(pn,"CODE",{});var ci=d(Us);ra=a(ci,"training_function()"),ci.forEach(s),aa=a(pn," ein und f\xFChre eine letzte Zelle mit aus:"),pn.forEach(s),Vt=c(e),m(Le.$$.fragment,e),Kt=c(e),ne=o(e,"P",{});var cn=d(ne);ia=a(cn,"Weitere Beispiele findest du in dem "),Ue=o(cn,"A",{href:!0,rel:!0});var ui=d(Ue);la=a(ui,"\u{1F917} Accelerate Repo"),ui.forEach(s),oa=a(cn,"."),cn.forEach(s),this.h()},h(){b(w,"name","hf:doc:metadata"),b(w,"content",JSON.stringify(ji)),b(E,"id","komplettes-training"),b(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(E,"href","#komplettes-training"),b(k,"class","relative group"),b(G,"id","vorbereitung-fr-das-training"),b(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(G,"href","#vorbereitung-fr-das-training"),b(x,"class","relative group"),b(ve,"href","https://arxiv.org/abs/1711.05101"),b(ve,"rel","nofollow"),b(V,"id","die-trainingsschleife"),b(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(V,"href","#die-trainingsschleife"),b(O,"class","relative group"),b(J,"id","die-evaluationsschleife"),b(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(J,"href","#die-evaluationsschleife"),b(B,"class","relative group"),b(Q,"id","verbessere-deine-trainingsschleife-mit-accelerate"),b(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Q,"href","#verbessere-deine-trainingsschleife-mit-accelerate"),b(L,"class","relative group"),b(Pe,"href","https://github.com/huggingface/accelerate"),b(Pe,"rel","nofollow"),b(Ue,"href","https://github.com/huggingface/accelerate/tree/main/examples"),b(Ue,"rel","nofollow")},m(e,n){t(document.head,w),i(e,z,n),i(e,k,n),t(k,E),t(E,M),h(j,M,null),t(k,S),t(k,U),t(U,un),i(e,Zs,n),h(oe,e,n),i(e,Hs,n),h(de,e,n),i(e,Ns,n),i(e,F,n),t(F,mn),t(F,ns),t(ns,hn),t(F,fn),i(e,Is,n),h(pe,e,n),i(e,Vs,n),i(e,x,n),t(x,G),t(G,rs),h(ce,rs,null),t(x,_n),t(x,as),t(as,gn),i(e,Ks,n),i(e,C,n),t(C,bn),t(C,is),t(is,wn),t(C,vn),t(C,ls),t(ls,kn),t(C,$n),i(e,Rs,n),i(e,P,n),t(P,W),t(W,zn),t(W,os),t(os,jn),t(W,En),t(W,ds),t(ds,An),t(W,Dn),t(P,yn),t(P,q),t(q,Tn),t(q,ps),t(ps,qn),t(q,Sn),t(q,cs),t(cs,Cn),t(q,Pn),t(q,us),t(us,Mn),t(q,xn),t(P,Wn),t(P,ms),t(ms,On),i(e,Js,n),i(e,Z,n),t(Z,Bn),t(Z,hs),t(hs,Ln),t(Z,Un),i(e,Ys,n),h(ue,e,n),i(e,Qs,n),i(e,Ze,n),t(Ze,Fn),i(e,Xs,n),h(me,e,n),i(e,et,n),i(e,He,n),t(He,Gn),i(e,st,n),h(he,e,n),i(e,tt,n),i(e,Ne,n),t(Ne,Zn),i(e,nt,n),h(fe,e,n),i(e,rt,n),h(_e,e,n),i(e,at,n),i(e,H,n),t(H,Hn),t(H,fs),t(fs,Nn),t(H,In),i(e,it,n),i(e,Ie,n),t(Ie,Vn),i(e,lt,n),h(ge,e,n),i(e,ot,n),i(e,Ve,n),t(Ve,Kn),i(e,dt,n),h(be,e,n),i(e,pt,n),h(we,e,n),i(e,ct,n),i(e,N,n),t(N,Rn),t(N,_s),t(_s,Jn),t(N,Yn),i(e,ut,n),i(e,A,n),t(A,Qn),t(A,gs),t(gs,Xn),t(A,er),t(A,bs),t(bs,sr),t(A,tr),t(A,ve),t(ve,nr),t(A,rr),i(e,mt,n),h(ke,e,n),i(e,ht,n),i(e,I,n),t(I,ar),t(I,ws),t(ws,ir),t(I,lr),i(e,ft,n),h($e,e,n),i(e,_t,n),h(ze,e,n),i(e,gt,n),i(e,O,n),t(O,V),t(V,vs),h(je,vs,null),t(O,or),t(O,ks),t(ks,dr),i(e,bt,n),i(e,K,n),t(K,pr),t(K,$s),t($s,cr),t(K,ur),i(e,wt,n),h(Ee,e,n),i(e,vt,n),h(Ae,e,n),i(e,kt,n),i(e,R,n),t(R,mr),t(R,zs),t(zs,hr),t(R,fr),i(e,$t,n),h(De,e,n),i(e,zt,n),i(e,Ke,n),t(Ke,_r),i(e,jt,n),i(e,B,n),t(B,J),t(J,js),h(ye,js,null),t(B,gr),t(B,Es),t(Es,br),i(e,Et,n),i(e,D,n),t(D,wr),t(D,As),t(As,vr),t(D,kr),t(D,Ds),t(Ds,$r),t(D,zr),t(D,ys),t(ys,jr),t(D,Er),i(e,At,n),h(Te,e,n),i(e,Dt,n),h(qe,e,n),i(e,yt,n),i(e,Re,n),t(Re,Ar),i(e,Tt,n),h(Y,e,n),i(e,qt,n),i(e,L,n),t(L,Q),t(Q,Ts),h(Se,Ts,null),t(L,Dr),t(L,qs),t(qs,yr),i(e,St,n),h(Ce,e,n),i(e,Ct,n),i(e,X,n),t(X,Tr),t(X,Pe),t(Pe,qr),t(X,Sr),i(e,Pt,n),h(Me,e,n),i(e,Mt,n),i(e,Je,n),t(Je,Cr),i(e,xt,n),h(xe,e,n),i(e,Wt,n),i(e,y,n),t(y,Pr),t(y,Ss),t(Ss,Mr),t(y,xr),t(y,Cs),t(Cs,Wr),t(y,Or),t(y,Ps),t(Ps,Br),t(y,Lr),i(e,Ot,n),i(e,$,n),t($,Ur),t($,Ms),t(Ms,Fr),t($,Gr),t($,xs),t(xs,Zr),t($,Hr),t($,Ws),t(Ws,Nr),t($,Ir),t($,Os),t(Os,Vr),t($,Kr),t($,Bs),t(Bs,Rr),t($,Jr),i(e,Bt,n),h(ee,e,n),i(e,Lt,n),i(e,Ye,n),t(Ye,Yr),i(e,Ut,n),h(We,e,n),i(e,Ft,n),i(e,se,n),t(se,Qr),t(se,Ls),t(Ls,Xr),t(se,ea),i(e,Gt,n),h(Oe,e,n),i(e,Zt,n),i(e,Qe,n),t(Qe,sa),i(e,Ht,n),h(Be,e,n),i(e,Nt,n),i(e,Xe,n),t(Xe,ta),i(e,It,n),i(e,te,n),t(te,na),t(te,Us),t(Us,ra),t(te,aa),i(e,Vt,n),h(Le,e,n),i(e,Kt,n),i(e,ne,n),t(ne,ia),t(ne,Ue),t(Ue,la),t(ne,oa),Rt=!0},p(e,[n]){const Fe={};n&2&&(Fe.$$scope={dirty:n,ctx:e}),Y.$set(Fe);const Fs={};n&2&&(Fs.$$scope={dirty:n,ctx:e}),ee.$set(Fs)},i(e){Rt||(f(j.$$.fragment,e),f(oe.$$.fragment,e),f(de.$$.fragment,e),f(pe.$$.fragment,e),f(ce.$$.fragment,e),f(ue.$$.fragment,e),f(me.$$.fragment,e),f(he.$$.fragment,e),f(fe.$$.fragment,e),f(_e.$$.fragment,e),f(ge.$$.fragment,e),f(be.$$.fragment,e),f(we.$$.fragment,e),f(ke.$$.fragment,e),f($e.$$.fragment,e),f(ze.$$.fragment,e),f(je.$$.fragment,e),f(Ee.$$.fragment,e),f(Ae.$$.fragment,e),f(De.$$.fragment,e),f(ye.$$.fragment,e),f(Te.$$.fragment,e),f(qe.$$.fragment,e),f(Y.$$.fragment,e),f(Se.$$.fragment,e),f(Ce.$$.fragment,e),f(Me.$$.fragment,e),f(xe.$$.fragment,e),f(ee.$$.fragment,e),f(We.$$.fragment,e),f(Oe.$$.fragment,e),f(Be.$$.fragment,e),f(Le.$$.fragment,e),Rt=!0)},o(e){_(j.$$.fragment,e),_(oe.$$.fragment,e),_(de.$$.fragment,e),_(pe.$$.fragment,e),_(ce.$$.fragment,e),_(ue.$$.fragment,e),_(me.$$.fragment,e),_(he.$$.fragment,e),_(fe.$$.fragment,e),_(_e.$$.fragment,e),_(ge.$$.fragment,e),_(be.$$.fragment,e),_(we.$$.fragment,e),_(ke.$$.fragment,e),_($e.$$.fragment,e),_(ze.$$.fragment,e),_(je.$$.fragment,e),_(Ee.$$.fragment,e),_(Ae.$$.fragment,e),_(De.$$.fragment,e),_(ye.$$.fragment,e),_(Te.$$.fragment,e),_(qe.$$.fragment,e),_(Y.$$.fragment,e),_(Se.$$.fragment,e),_(Ce.$$.fragment,e),_(Me.$$.fragment,e),_(xe.$$.fragment,e),_(ee.$$.fragment,e),_(We.$$.fragment,e),_(Oe.$$.fragment,e),_(Be.$$.fragment,e),_(Le.$$.fragment,e),Rt=!1},d(e){s(w),e&&s(z),e&&s(k),g(j),e&&s(Zs),g(oe,e),e&&s(Hs),g(de,e),e&&s(Ns),e&&s(F),e&&s(Is),g(pe,e),e&&s(Vs),e&&s(x),g(ce),e&&s(Ks),e&&s(C),e&&s(Rs),e&&s(P),e&&s(Js),e&&s(Z),e&&s(Ys),g(ue,e),e&&s(Qs),e&&s(Ze),e&&s(Xs),g(me,e),e&&s(et),e&&s(He),e&&s(st),g(he,e),e&&s(tt),e&&s(Ne),e&&s(nt),g(fe,e),e&&s(rt),g(_e,e),e&&s(at),e&&s(H),e&&s(it),e&&s(Ie),e&&s(lt),g(ge,e),e&&s(ot),e&&s(Ve),e&&s(dt),g(be,e),e&&s(pt),g(we,e),e&&s(ct),e&&s(N),e&&s(ut),e&&s(A),e&&s(mt),g(ke,e),e&&s(ht),e&&s(I),e&&s(ft),g($e,e),e&&s(_t),g(ze,e),e&&s(gt),e&&s(O),g(je),e&&s(bt),e&&s(K),e&&s(wt),g(Ee,e),e&&s(vt),g(Ae,e),e&&s(kt),e&&s(R),e&&s($t),g(De,e),e&&s(zt),e&&s(Ke),e&&s(jt),e&&s(B),g(ye),e&&s(Et),e&&s(D),e&&s(At),g(Te,e),e&&s(Dt),g(qe,e),e&&s(yt),e&&s(Re),e&&s(Tt),g(Y,e),e&&s(qt),e&&s(L),g(Se),e&&s(St),g(Ce,e),e&&s(Ct),e&&s(X),e&&s(Pt),g(Me,e),e&&s(Mt),e&&s(Je),e&&s(xt),g(xe,e),e&&s(Wt),e&&s(y),e&&s(Ot),e&&s($),e&&s(Bt),g(ee,e),e&&s(Lt),e&&s(Ye),e&&s(Ut),g(We,e),e&&s(Ft),e&&s(se),e&&s(Gt),g(Oe,e),e&&s(Zt),e&&s(Qe),e&&s(Ht),g(Be,e),e&&s(Nt),e&&s(Xe),e&&s(It),e&&s(te),e&&s(Vt),g(Le,e),e&&s(Kt),e&&s(ne)}}}const ji={local:"komplettes-training",sections:[{local:"vorbereitung-fr-das-training",title:"Vorbereitung f\xFCr das Training"},{local:"die-trainingsschleife",title:"Die Trainingsschleife"},{local:"die-evaluationsschleife",title:"Die Evaluationsschleife"},{local:"verbessere-deine-trainingsschleife-mit-accelerate",title:"Verbessere deine Trainingsschleife mit \u{1F917} Accelerate"}],title:"Komplettes Training"};function Ei(Ge){return wi(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class qi extends fi{constructor(w){super();_i(this,w,Ei,zi,gi,{})}}export{qi as default,ji as metadata};
